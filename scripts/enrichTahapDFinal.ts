import fs from 'fs';
import path from 'path';

interface MonographResult {
  management: string;
  interaction?: string;
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

async function fetchDirectServerInteract(interactId: number): Promise<MonographResult | null> {
  const url = `https://ddinter2.scbdd.com/server/interact/${interactId}/`;
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

      if (management && management !== '-' && management.length > 20) {
        return { management, interaction };
      }
      return null;
    } catch (err: any) {
      if (attempt === 3) return null;
      await sleep(300 * attempt);
    }
  }
  return null;
}

async function fetchMonographMgmt(monoId: number): Promise<MonographResult | null> {
  const listUrl = `https://ddinter2.scbdd.com/server/inter-list/${monoId}/`;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const lRes = await fetch(listUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: 'draw=1&start=0&length=1',
        signal: AbortSignal.timeout(8000)
      });
      if (!lRes.ok) return null;
      const lJson: any = await lRes.json();
      if (!lJson.data || lJson.data.length === 0) return null;

      const interactId = lJson.data[0].id;
      return await fetchDirectServerInteract(interactId);
    } catch (err: any) {
      if (attempt === 3) return null;
      await sleep(300 * attempt);
    }
  }
  return null;
}

export async function runTahapDFinal() {
  console.log('========================================================================');
  console.log('🚀 TAHAP D: ENRICHMENT FULL DATABASE DDINTER 2.0 (FINAL EXPANSION)');
  console.log('========================================================================\n');

  const filesToProcess = [
    'ddinterOfficialInteractions.ts',
    'ddinter2BulkAdditions.ts',
    'ddinter2Phase1ChronicAdditions.ts',
    'ddinter2ModerateBatch1Additions.ts',
    'ddinter2ModerateBatch2Additions.ts',
    'ddinter2ModerateBatch3Additions.ts'
  ];

  // 1. Create Backups
  for (const filename of filesToProcess) {
    const srcFile = path.join(process.cwd(), 'src', 'data', filename);
    const bakFile = path.join(process.cwd(), 'src', 'data', `${filename}.bak`);
    fs.copyFileSync(srcFile, bakFile);
    console.log(`💾 Backup dibuat: ${filename}.bak`);
  }

  // 2. Identify all targets and IDs to fetch
  const directServerIds = new Set<number>();
  const monoIds = new Set<number>();

  for (const filename of filesToProcess) {
    const srcFile = path.join(process.cwd(), 'src', 'data', filename);
    const content = fs.readFileSync(srcFile, 'utf8');

    // Parse array
    const directMatches = content.matchAll(/"ddinterPairId":\s*"DDInter-PAIR-(\d+)"/gi);
    for (const m of directMatches) {
      const id = parseInt(m[1], 10);
      if (id > 0) directServerIds.add(id);
    }

    const monoMatches = content.matchAll(/Monograph #(\d+)/gi);
    for (const m of monoMatches) {
      const id = parseInt(m[1], 10);
      if (id > 0) monoIds.add(id);
    }

    const phase1Matches = content.matchAll(/DDInter-PAIR-PHASE1-(\d+)-/gi);
    for (const m of phase1Matches) {
      const id = parseInt(m[1], 10);
      if (id > 0) monoIds.add(id);
    }

    const modMatches = content.matchAll(/DDInter-PAIR-MOD\d+-(\d+)-/gi);
    for (const m of modMatches) {
      const id = parseInt(m[1], 10);
      if (id > 0) monoIds.add(id);
    }

    const bulkMatches = content.matchAll(/DDInter-PAIR-BULK-(\d+)-/gi);
    for (const m of bulkMatches) {
      const id = parseInt(m[1], 10);
      if (id > 0) monoIds.add(id);
    }

    const ruleMatches = content.matchAll(/Rule (\d+)/gi);
    for (const m of ruleMatches) {
      const id = parseInt(m[1], 10);
      if (id > 0) monoIds.add(id);
    }
  }

  console.log(`\nTerdeteksi ${directServerIds.size} Direct Server Interact ID.`);
  console.log(`Terdeteksi ${monoIds.size} Monograph / Rule ID.\n`);

  // 3. Fetch Direct Server IDs
  const directCache = new Map<number, MonographResult>();
  const directList = Array.from(directServerIds);
  console.log(`Mengunduh ${directList.length} Direct Server Interactions (Concurrency: 8)...`);

  const CONCURRENCY = 8;
  let directSuccess = 0;
  for (let i = 0; i < directList.length; i += CONCURRENCY) {
    const chunk = directList.slice(i, i + CONCURRENCY);
    await Promise.all(
      chunk.map(async (id) => {
        const res = await fetchDirectServerInteract(id);
        if (res) {
          directCache.set(id, res);
          directSuccess++;
        }
      })
    );
    const progress = Math.min(i + CONCURRENCY, directList.length);
    console.log(`[Direct ${progress}/${directList.length}] Berhasil diunduh: ${directSuccess}`);
    await sleep(100);
  }

  // 4. Fetch Monograph IDs
  const monoCache = new Map<number, MonographResult>();
  const monoList = Array.from(monoIds);
  console.log(`\nMengunduh ${monoList.length} Monograph Clinical Guidelines (Concurrency: 8)...`);

  let monoSuccess = 0;
  for (let i = 0; i < monoList.length; i += CONCURRENCY) {
    const chunk = monoList.slice(i, i + CONCURRENCY);
    await Promise.all(
      chunk.map(async (mId) => {
        const res = await fetchMonographMgmt(mId);
        if (res) {
          monoCache.set(mId, res);
          monoSuccess++;
        }
      })
    );
    const progress = Math.min(i + CONCURRENCY, monoList.length);
    console.log(`[Mono ${progress}/${monoList.length}] Berhasil diunduh: ${monoSuccess}`);
    await sleep(100);
  }

  console.log(`\nTotal cache terkumpul: ${directCache.size} direct, ${monoCache.size} monograph.\n`);

  // 5. Update files
  for (const filename of filesToProcess) {
    const srcFile = path.join(process.cwd(), 'src', 'data', filename);
    let content = fs.readFileSync(srcFile, 'utf8');

    // Load data items
    // We can parse or replace in code
    // Let's use dynamic import to get the array
    const module = await import(`../src/data/${filename.replace('.ts', '')}`);
    const exportKey = Object.keys(module).find((k) => Array.isArray(module[k]));
    if (!exportKey) {
      console.warn(`Tidak dapat menemukan array export di ${filename}`);
      continue;
    }

    const items: any[] = module[exportKey];
    let fileEnriched = 0;

    for (const item of items) {
      let result: MonographResult | null = null;
      const pid = (item.ddinterPairId || '').trim();
      const refStr = (item.references || []).join(' ');

      // 1. Direct Server ID
      const directMatch = pid.match(/^DDInter-PAIR-(\d+)$/i);
      if (directMatch) {
        const sid = parseInt(directMatch[1], 10);
        result = directCache.get(sid) || null;
      }

      // 2. Monograph in references
      if (!result) {
        const refMatch = refStr.match(/Monograph #(\d+)/i);
        if (refMatch) {
          const mid = parseInt(refMatch[1], 10);
          result = monoCache.get(mid) || null;
        }
      }

      // 3. Monograph in pairId
      if (!result) {
        const p1Match = pid.match(/DDInter-PAIR-PHASE1-(\d+)-/i) ||
                        pid.match(/DDInter-PAIR-MOD\d+-(\d+)-/i) ||
                        pid.match(/DDInter-PAIR-BULK-(\d+)-/i);
        if (p1Match) {
          const mid = parseInt(p1Match[1], 10);
          result = monoCache.get(mid) || null;
        }
      }

      // 4. Rule in evidenceLevel
      if (!result) {
        const ruleMatch = (item.evidenceLevel || '').match(/Rule (\d+)/i);
        if (ruleMatch) {
          const mid = parseInt(ruleMatch[1], 10);
          result = monoCache.get(mid) || null;
        }
      }

      if (result && result.management) {
        item.ddinterOriginalManagement = result.management;
        if (result.interaction && (!item.ddinterOriginalText || item.ddinterOriginalText.length < 30)) {
          item.ddinterOriginalText = result.interaction;
        }
        fileEnriched++;
      }
    }

    console.log(`${filename}: ${fileEnriched}/${items.length} interaksi diperkaya dengan teks asli DDInter.`);

    // Write back clean formatted TypeScript file
    const newContent = `import { DrugInteraction } from '../types';\n\nexport const ${exportKey}: DrugInteraction[] = ${JSON.stringify(items, null, 2)};\n`;
    fs.writeFileSync(srcFile, newContent, 'utf8');
  }

  console.log('\n🎉 Selesai memperkaya ke-6 dataset Tahap D!');
}

runTahapDFinal().catch((err) => {
  console.error('Error during Tahap D enrichment:', err);
  process.exit(1);
});
