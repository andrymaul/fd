import fs from 'fs';
import path from 'path';

interface TargetItem {
  id: string;
  drugAName: string;
  drugBName: string;
  serverId: number;
  currentMgmt: string;
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function cleanHtmlText(html: string): string {
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

async function fetchDDInterManagement(serverId: number): Promise<{ management?: string; interaction?: string } | null> {
  const url = `https://ddinter2.scbdd.com/server/interact/${serverId}/`;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const resp = await fetch(url, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
        signal: AbortSignal.timeout(8000)
      });
      if (!resp.ok) return null;
      const html = await resp.text();

      const mgmtMatch = html.match(/<td class="key">Management<\/td>\s*<td[^>]*>([\s\S]*?)<\/td>/i);
      const intMatch = html.match(/<td class="key">Interaction<\/td>\s*<td[^>]*>([\s\S]*?)<\/td>/i);

      const management = mgmtMatch ? cleanHtmlText(mgmtMatch[1]) : undefined;
      const interaction = intMatch ? cleanHtmlText(intMatch[1]) : undefined;

      return {
        management: (management && management !== '-' && management.length > 20) ? management : undefined,
        interaction: (interaction && interaction !== '-' && interaction.length > 20) ? interaction : undefined
      };
    } catch (err: any) {
      if (attempt === 3) return null;
      await sleep(500 * attempt);
    }
  }
  return null;
}

export async function runEnrichment() {
  const filePath = path.join(process.cwd(), 'src', 'data', 'ddinterInteractions.ts');
  const backupPath = path.join(process.cwd(), 'src', 'data', 'ddinterInteractions.ts.bak');
  let content = fs.readFileSync(filePath, 'utf8');

  console.log('========================================================');
  console.log('🚀 MEMULAI ENRICHMENT TEKS ASLI MANAGEMENT DARI DDINTER 2.0');
  console.log('========================================================\n');

  // Identify all pairs that need enrichment
  const pairRegex = /\{\s*"id":\s*"([^"]+)",[\s\S]*?"drugAName":\s*"([^"]+)",\s*"drugBName":\s*"([^"]+)",[\s\S]*?"ddinterPairId":\s*"([^"]+)",[\s\S]*?"ddinterOriginalManagement":\s*"([^"]*)"/g;
  
  const targets: TargetItem[] = [];
  for (const m of content.matchAll(pairRegex)) {
    const [_, id, drugAName, drugBName, pairId, mgmt] = m;
    const isBoilerplate = !mgmt || 
      mgmt.toLowerCase().includes('ddinter level') || 
      mgmt.toLowerCase().includes('avoid combination or monitor') || 
      mgmt.length < 30;

    const serverMatch = pairId.match(/DDInter-PAIR-(\d+)/);
    if (isBoilerplate && serverMatch) {
      const serverId = parseInt(serverMatch[1]);
      if (serverId > 0) {
        targets.push({ id, drugAName, drugBName, serverId, currentMgmt: mgmt });
      }
    }
  }

  console.log(`Ditemukan ${targets.length} interaksi inti dengan server ID DDInter yang membutuhkan pemutakhiran Management.\n`);

  if (targets.length === 0) {
    console.log('Semua interaksi sudah memiliki teks asli DDInter Management!');
    return;
  }

  // Backup original file
  fs.writeFileSync(backupPath, content, 'utf8');
  console.log(`💾 File backup dibuat di: ${backupPath}\n`);

  // Concurrency pool
  const CONCURRENCY = 6;
  let enrichedCount = 0;
  let failedCount = 0;
  const updates: Map<string, string> = new Map();

  for (let i = 0; i < targets.length; i += CONCURRENCY) {
    const chunk = targets.slice(i, i + CONCURRENCY);
    await Promise.all(
      chunk.map(async (target) => {
        const result = await fetchDDInterManagement(target.serverId);
        if (result && result.management) {
          updates.set(target.id, result.management);
          enrichedCount++;
        } else {
          failedCount++;
        }
      })
    );

    const progress = Math.min(i + CONCURRENCY, targets.length);
    console.log(`[${progress}/${targets.length}] Terproses: ${enrichedCount} berhasil diperkaya, ${failedCount} fallback/gagal`);
    await sleep(150);
  }

  console.log(`\nMenulis hasil pemutakhiran ke ${filePath}...`);

  // Replace each enriched management in content
  for (const [id, newMgmt] of updates.entries()) {
    // Regex for this specific ID's ddinterOriginalManagement
    const escapedMgmt = JSON.stringify(newMgmt).slice(1, -1); // escape for string in json
    const targetBlockRegex = new RegExp(`("id":\\s*"${id}"[\\s\\S]*?"ddinterOriginalManagement":\\s*)"[^"]*"`, 'g');
    content = content.replace(targetBlockRegex, `$1"${escapedMgmt}"`);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`\n🎉 SUKSES! Sebanyak ${enrichedCount} interaksi di ddinterInteractions.ts berhasil diperkaya dengan teks asli Management DDInter 2.0!\n`);
}

runEnrichment().catch(err => {
  console.error('Enrichment error:', err);
  process.exit(1);
});
