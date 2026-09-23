import fs from 'fs';
import path from 'path';
import { DrugInteraction } from '../src/types';

const BATCH14_FILE = path.join(process.cwd(), 'data', 'batch14_extracted.json');
const TARGET_TS_FILE = path.join(process.cwd(), 'src', 'data', 'ddinter2ScrapedInteractions.ts');

if (!fs.existsSync(BATCH14_FILE)) {
  console.error('Batch 14 file not found:', BATCH14_FILE);
  process.exit(1);
}

// 1. Read existing interactions from ddinter2ScrapedInteractions.ts
const existingContent = fs.readFileSync(TARGET_TS_FILE, 'utf8');
const assignIdx = existingContent.indexOf('= [');
const jsonStart = existingContent.indexOf('[', assignIdx);
const jsonEnd = existingContent.lastIndexOf(']');
const existingInteractions: DrugInteraction[] = JSON.parse(existingContent.substring(jsonStart, jsonEnd + 1));

console.log(`Current existing interactions in app: ${existingInteractions.length}`);

// 2. Read Batch 14 records
const batch14Raw = JSON.parse(fs.readFileSync(BATCH14_FILE, 'utf8'));
console.log(`Batch 14 raw records to merge: ${batch14Raw.length}`);

// Standard Option A translation for Abametapir CYP3A4/2B6/1A2 inhibition
const ABAMETAPIR_MECHANISM = 'Berdasarkan data inhibisi in vitro, aplikasi topikal tunggal losion abametapir dapat meningkatkan konsentrasi plasma obat-obatan yang merupakan substrat isoenzim CYP450 3A4, CYP450 2B6, dan CYP450 1A2 serta meningkatkan konsentrasi sistemiknya. Mekanisme yang diajukan adalah paparan sistemik yang tinggi dan berkepanjangan terhadap metabolit abametapir karboksil, yang telah terbukti merupakan inhibitor in vitro CYP450 3A4, CYP450 2B6, dan CYP450 1A2.';
const ABAMETAPIR_OUTCOME = 'Peningkatan konsentrasi sistemik dan risiko toksisitas dari substrat CYP450 3A4, 2B6, atau 1A2 yang diberikan bersamaan.';
const ABAMETAPIR_MANAGEMENT = 'Penggunaan substrat CYP450 3A4, CYP450 2B6, dan CYP450 1A2 umumnya harus dihindari dalam waktu 2 minggu setelah aplikasi topikal losion abametapir. Jika abametapir digunakan, pantau peningkatan toksisitas dari substrat CYP450 3A4, CYP450 2B6, dan/atau CYP450 1A2.';
// Clean HTML entities helper
function cleanEntities(str: string): string {
  if (!str) return '';
  return str
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

const newInteractions: DrugInteraction[] = batch14Raw.map((item: any) => {
  const slugA = item.drugAName.toLowerCase().replace(/[^a-z0-9]/g, '-');
  const slugB = item.drugBName.toLowerCase().replace(/[^a-z0-9]/g, '-');

  const altsA = (item.alternativeOptionsA || []).map(cleanEntities).filter(Boolean);
  const altsB = (item.alternativeOptionsB || []).map(cleanEntities).filter(Boolean);
  const combinedAlts = Array.from(new Set([...altsA, ...altsB]));
  const cleanedRefs = (item.references || []).map(cleanEntities);

  return {
    id: `ddinter-server-${item.serverInteractId}`,
    drugAId: `drug-${slugA}`,
    drugBId: `drug-${slugB}`,
    drugAName: item.drugAName,
    drugBName: item.drugBName,
    severity: item.severity,
    mechanismCategory: item.mechanismCategory,
    mechanismCategories: item.mechanismCategories || [item.mechanismCategory],
    evidenceLevel: 'Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)',
    onset: 'Delayed',
    mechanism: ABAMETAPIR_MECHANISM,
    clinicalOutcome: ABAMETAPIR_OUTCOME,
    management: ABAMETAPIR_MANAGEMENT,
    ddinterId: `${item.drugAId} and ${item.drugBId}`,
    ddinterOriginalText: cleanEntities(item.ddinterOriginalText),
    ddinterOriginalManagement: cleanEntities(item.ddinterOriginalManagement),
    references: cleanedRefs,
    alternativeOptionsA: altsA,
    alternativeOptionsB: altsB,
    alternativeOptions: combinedAlts,
    cypProfiles: item.cypProfiles
  };
});

// Map by ID to prevent duplicates
const interactionMap = new Map<string, DrugInteraction>();
existingInteractions.forEach(inter => interactionMap.set(inter.id, inter));
newInteractions.forEach(inter => interactionMap.set(inter.id, inter));

const mergedList = Array.from(interactionMap.values()).sort((a, b) => {
  const idA = parseInt(a.id.replace('ddinter-server-', ''), 10) || 0;
  const idB = parseInt(b.id.replace('ddinter-server-', ''), 10) || 0;
  return idA - idB;
});

console.log(`Merged total interactions: ${mergedList.length}`);
console.log(`ID range: ${mergedList[0].id} -> ${mergedList[mergedList.length - 1].id}`);

// Verify continuity
let gapFound = false;
for (let i = 1; i <= mergedList.length; i++) {
  if (mergedList[i - 1].id !== `ddinter-server-${i}`) {
    console.error(`Gap found at index ${i}: expected ddinter-server-${i}, got ${mergedList[i - 1].id}`);
    gapFound = true;
    break;
  }
}

if (gapFound) {
  console.error('Fatal: Continuity gap detected! Aborting merge.');
  process.exit(1);
}

console.log('✅ Continuity verified: 100% continuous from 1 to ' + mergedList.length + '!');

// Write to ddinter2ScrapedInteractions.ts
const tsOutput = `import { DrugInteraction } from '../types';

/**
 * DDINTER 2.0 INGESTED BATCH INTERACTIONS DATABASE
 * Automatically extracted and synchronized from official DDInter 2.0 server (https://ddinter2.scbdd.com/server/interact/)
 * Grounded in Nature Protocols (2022) & Hospital Clinical Decision Support standards.
 * Total Ingested Pairs: ${mergedList.length} (Batch 1-14 Complete)
 */
export const DDINTER2_SCRAPED_INTERACTIONS: DrugInteraction[] = ${JSON.stringify(mergedList, null, 2)};
`;

fs.writeFileSync(TARGET_TS_FILE, tsOutput, 'utf8');
console.log(`Successfully written ${mergedList.length} interactions to ${TARGET_TS_FILE}!`);
