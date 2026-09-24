import fs from 'fs';
import path from 'path';

interface TargetItem {
  id: string;
  drugAName: string;
  drugBName: string;
  serverId: number;
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
        management: (management && management !== '-' && management.length > 15) ? management : undefined,
        interaction: (interaction && interaction !== '-' && interaction.length > 15) ? interaction : undefined
      };
    } catch (err: any) {
      if (attempt === 3) return null;
      await sleep(400 * attempt);
    }
  }
  return null;
}

async function processFile(targetFileName: string, title: string) {
  const targetFile = path.join(process.cwd(), 'src', 'data', targetFileName);
  const backupFile = path.join(process.cwd(), 'src', 'data', `${targetFileName}.bak`);
  let content = fs.readFileSync(targetFile, 'utf8');

  console.log('------------------------------------------------------------------------');
  console.log(`📌 MEMULAI: ${title} (${targetFileName})`);
  console.log('------------------------------------------------------------------------');

  const pairRegex = /\{\s*"id":\s*"([^"]+)",[\s\S]*?"drugAName":\s*"([^"]+)",\s*"drugBName":\s*"([^"]+)",[\s\S]*?"ddinterPairId":\s*"([^"]+)",[\s\S]*?"ddinterOriginalManagement":\s*"([^"]*)"/g;

  const targets: TargetItem[] = [];
  for (const m of content.matchAll(pairRegex)) {
    const [_, id, drugAName, drugBName, pairId, mgmt] = m;
    const isBoilerplate = !mgmt || 
      mgmt.toLowerCase().includes('ddinter level') || 
      mgmt.toLowerCase().includes('avoid combination or monitor') || 
      mgmt.length < 25;

    const serverMatch = pairId.match(/DDInter-PAIR-(\d+)/);
    if (isBoilerplate && serverMatch) {
      const serverId = parseInt(serverMatch[1]);
      if (serverId > 0) {
        targets.push({ id, drugAName, drugBName, serverId });
      }
    }
  }

  console.log(`Ditemukan ${targets.length} interaksi dengan server ID DDInter yang perlu diperkaya.\n`);

  if (targets.length === 0) {
    console.log(`Semua interaksi di ${targetFileName} sudah memiliki teks asli DDInter Management!\n`);
    return 0;
  }

  // Backup file
  fs.writeFileSync(backupFile, content, 'utf8');
  console.log(`💾 Backup tersimpan di: ${backupFile}\n`);

  const CONCURRENCY = 8;
  let enrichedCount = 0;
  let failedCount = 0;
  const updates: Map<string, string> = new Map();

  for (let i = 0; i < targets.length; i += CONCURRENCY) {
    const chunk = targets.slice(i, i + CONCURRENCY);
    await Promise.all(
      chunk.map(async (t) => {
        const res = await fetchDDInterManagement(t.serverId);
        if (res && res.management) {
          updates.set(t.id, res.management);
          enrichedCount++;
        } else {
          failedCount++;
        }
      })
    );

    const progress = Math.min(i + CONCURRENCY, targets.length);
    console.log(`[${progress}/${targets.length}] Terproses: ${enrichedCount} sukses diunduh, ${failedCount} fallback`);
    await sleep(100);
  }

  console.log(`\nMenyimpan hasil ke file ${targetFile}...`);

  for (const [id, newMgmt] of updates.entries()) {
    const escapedMgmt = JSON.stringify(newMgmt).slice(1, -1);
    const targetBlockRegex = new RegExp(`("id":\\s*"${id}"[\\s\\S]*?"ddinterOriginalManagement":\\s*)"[^"]*"`, 'g');
    content = content.replace(targetBlockRegex, `$1"${escapedMgmt}"`);
  }

  fs.writeFileSync(targetFile, content, 'utf8');
  console.log(`✅ ${title} SELESAI: ${enrichedCount} interaksi berhasil diperkaya!\n`);
  return enrichedCount;
}

export async function runTahapC() {
  console.log('========================================================================');
  console.log('🚀 TAHAP C: ENRICHMENT SISTEM SARAF PUSAT (SSP), NYERI & MINOR');
  console.log('========================================================================\n');

  const countPhase3 = await processFile(
    'ddinter2Phase3CnsAnalgesicAdditions.ts',
    'SISTEM SARAF PUSAT & ANALGESIK (PHASE 3)'
  );

  const countPhase4 = await processFile(
    'ddinter2Phase4MinorAdditions.ts',
    'INTERAKSI MINOR & ANALGESIK (PHASE 4)'
  );

  console.log('========================================================================');
  console.log(`🎉 TAHAP C SELESAI PENUH! Total ${countPhase3 + countPhase4} interaksi berhasil diperkaya!`);
  console.log('========================================================================\n');
}

runTahapC().catch(err => {
  console.error('Error during Tahap C enrichment:', err);
  process.exit(1);
});
