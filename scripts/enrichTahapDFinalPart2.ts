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

export async function runTahapDLiveEnrichment() {
  console.log('========================================================================');
  console.log('🚀 TAHAP D (BAGIAN 2): ENRICHMENT LIVE INTERACTIONS (1391 PAIRS)');
  console.log('========================================================================\n');

  const srcFile = path.join(process.cwd(), 'src', 'data', 'ddinter2LiveInteractionsData.ts');
  const bakFile = path.join(process.cwd(), 'src', 'data', 'ddinter2LiveInteractionsData.ts.bak');

  // 1. Create backup
  fs.copyFileSync(srcFile, bakFile);
  console.log(`💾 Backup dibuat: ddinter2LiveInteractionsData.ts.bak`);

  // 2. Fetch all monographs from DDInter
  console.log('Mengunduh katalog monografi dari /server/interaction-source/...');
  const res = await fetch('https://ddinter2.scbdd.com/server/interaction-source/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: 'draw=1&start=0&length=1000'
  });
  const json: any = await res.json();
  const monographs: any[] = json.data || [];
  console.log(`Berhasil mengunduh ${monographs.length} monografi dari DDInter.\n`);

  const textToMono = new Map<string, number>();
  for (const m of monographs) {
    if (m.interaction && m.id) {
      const norm = m.interaction.toLowerCase().replace(/\s+/g, ' ').trim();
      textToMono.set(norm, m.id);
      if (norm.length > 35) {
        textToMono.set(norm.slice(0, 35), m.id);
      }
    }
  }

  // Find Lithium monograph, Colchicine monograph, etc.
  let lithiumMonoId = 147;
  let clarithroSildenafilMonoId: number | undefined;
  let colchicineMonoId: number | undefined;
  let brigatinibMonoId: number | undefined;
  let midazolamMonoId: number | undefined;

  for (const m of monographs) {
    const intText = (m.interaction || '').toLowerCase();
    if (intText.includes('lithium') && (intText.includes('nsaid') || intText.includes('anti-inflammatory') || intText.includes('prostaglandin'))) {
      lithiumMonoId = m.id;
    }
    if (intText.includes('clarithromycin') && intText.includes('cyp450 3a4') && intText.includes('sildenafil')) {
      clarithroSildenafilMonoId = m.id;
    }
    if (intText.includes('colchicine') && intText.includes('cyp3a4')) {
      colchicineMonoId = m.id;
    }
    if (intText.includes('brigatinib')) {
      brigatinibMonoId = m.id;
    }
    if ((intText.includes('midazolam') || intText.includes('triazolam')) && intText.includes('cyp3a4')) {
      midazolamMonoId = m.id;
    }
  }

  // Load items from live file
  const module = await import('../src/data/ddinter2LiveInteractionsData.ts');
  const items: any[] = module.DDINTER2_LIVE_INTERACTIONS;

  const itemToMonoId = new Map<string, number>();
  const neededMonoIds = new Set<number>();

  for (const item of items) {
    const orig = (item.ddinterOriginalText || '').toLowerCase().replace(/\s+/g, ' ').trim();
    let mId = textToMono.get(orig) || (orig.length > 35 ? textToMono.get(orig.slice(0, 35)) : undefined);

    if (!mId) {
      const pair = `${item.drugAName} + ${item.drugBName}`.toLowerCase();
      if (pair.includes('lithium')) {
        mId = lithiumMonoId;
      } else if (pair.includes('sildenafil') && pair.includes('clarithromycin') && clarithroSildenafilMonoId) {
        mId = clarithroSildenafilMonoId;
      } else if (pair.includes('colchicine') && colchicineMonoId) {
        mId = colchicineMonoId;
      } else if (pair.includes('brigatinib') && brigatinibMonoId) {
        mId = brigatinibMonoId;
      } else if ((pair.includes('midazolam') || pair.includes('triazolam')) && midazolamMonoId) {
        mId = midazolamMonoId;
      }
    }

    if (mId) {
      itemToMonoId.set(item.id, mId);
      neededMonoIds.add(mId);
    }
  }

  console.log(`Terpetakan ${itemToMonoId.size} / ${items.length} interaksi live ke ${neededMonoIds.size} monografi unik DDInter.\n`);

  // 3. Fetch all needed monographs in parallel
  const monoCache = new Map<number, MonographResult>();
  const monoList = Array.from(neededMonoIds);
  console.log(`Mengunduh teks asli Management untuk ${monoList.length} monografi DDInter (Concurrency: 8)...`);

  const CONCURRENCY = 8;
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

  console.log(`\nSelesai mengunduh ${monoCache.size} monografi lengkap.\n`);

  // 4. Update items
  let enrichedCount = 0;
  for (const item of items) {
    const mId = itemToMonoId.get(item.id);
    if (mId) {
      const res = monoCache.get(mId);
      if (res && res.management) {
        item.ddinterOriginalManagement = res.management;
        if (res.interaction && (!item.ddinterOriginalText || item.ddinterOriginalText.length < 30)) {
          item.ddinterOriginalText = res.interaction;
        }
        enrichedCount++;
      }
    }
  }

  console.log(`Berhasil memperkaya ${enrichedCount} / ${items.length} interaksi live dengan teks asli Management DDInter 2.0!`);

  // 5. Write back to ddinter2LiveInteractionsData.ts
  const newContent = `import { DrugInteraction } from '../types';\n\nexport const DDINTER2_LIVE_INTERACTIONS: DrugInteraction[] = ${JSON.stringify(items, null, 2)};\n`;
  fs.writeFileSync(srcFile, newContent, 'utf8');
  console.log(`\n🎉 File ddinter2LiveInteractionsData.ts berhasil diperbarui!\n`);
}

runTahapDLiveEnrichment().catch((err) => {
  console.error('Error during Live Interactions enrichment:', err);
  process.exit(1);
});
