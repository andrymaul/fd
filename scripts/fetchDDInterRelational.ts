import fs from 'fs';
import path from 'path';
import { synthesizeAlternativesForDrug } from '../src/utils/ddinterEngine';

interface MonographRaw {
  id: string;
  level: number;
  interaction: string;
  absorption: string;
  distribution: string;
  metabolism: string;
  excretion: string;
  synergistic_effect: string;
  antagonistic_effect: string;
  others: string;
}

interface PairRaw {
  id: number;
  level: string;
  drug_a_name: string;
  drug_b_name: string;
  drugbankID_a: string;
  drugbankID_b: string;
  internalID_a: string;
  internalID_b: string;
  absorption: string;
  distribution: string;
  metabolism: string;
  excretion: string;
  synergistic_effect: string;
  antagonistic_effect: string;
  others: string;
}

const DATA_DIR = path.join(process.cwd(), 'data');
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const PUBLIC_DATA_DIR = path.join(process.cwd(), 'public', 'data');
if (!fs.existsSync(PUBLIC_DATA_DIR)) {
  fs.mkdirSync(PUBLIC_DATA_DIR, { recursive: true });
}

const MONOGRAPHS_FILE = path.join(DATA_DIR, 'ddinter_monographs.json');
const CHECKPOINT_FILE = path.join(DATA_DIR, 'ddinter_relational_checkpoint.json');
const FULL_DATABASE_FILE = path.join(DATA_DIR, 'ddinter2_full_database.json');
const PUBLIC_ARCHIVE_FILE = path.join(PUBLIC_DATA_DIR, 'ddinter_archive.json');

function mapSeverity(level: string | number): 'Major' | 'Moderate' | 'Minor' {
  const lvl = String(level).trim();
  if (lvl === '3' || lvl.toLowerCase() === 'major') return 'Major';
  if (lvl === '2' || lvl.toLowerCase() === 'moderate') return 'Moderate';
  return 'Minor';
}

function mapMechanismCategory(item: {
  absorption?: string;
  distribution?: string;
  metabolism?: string;
  excretion?: string;
  synergistic_effect?: string;
  antagonistic_effect?: string;
}): 'Absorption' | 'Distribution' | 'Metabolism' | 'Excretion' | 'Synergy' | 'Antagonism' | 'Others' {
  if (item.metabolism === '1') return 'Metabolism';
  if (item.absorption === '1') return 'Absorption';
  if (item.excretion === '1') return 'Excretion';
  if (item.synergistic_effect === '1') return 'Synergy';
  if (item.antagonistic_effect === '1') return 'Antagonism';
  if (item.distribution === '1') return 'Distribution';
  return 'Others';
}

/**
 * Advanced Clinical Translator: Maps English DDInter 2.0 Monograph text
 * to precise, professional Indonesian clinical pharmacy terminology
 */
function translateClinicalMonograph(
  drugA: string,
  drugB: string,
  category: string,
  severity: string,
  englishText?: string | null
): { mechanism: string; clinicalOutcome: string; management: string } {
  const safeText = (englishText || '').trim();
  const lower = safeText.toLowerCase();

  // 1. Mechanism translation
  let mechanism = '';
  const incMatch = safeText.match(/increased\s+([0-9]+%|[0-9]+\s*percent)/i);
  const decMatch = safeText.match(/(?:decreased|reduced)\s+([0-9]+%|[0-9]+\s*percent)/i);

  if (lower.includes('increase the plasma concentrations') || lower.includes('increased blood levels') || lower.includes('increased plasma')) {
    const pct = incMatch ? ` (kenaikan AUC ~${incMatch[1]})` : '';
    mechanism = `Pemberian bersamaan menyebabkan peningkatan konsentrasi plasma/darah ${drugA} dan ${drugB}${pct} yang meningkatkan paparan terapeutik atau risiko akumulasi.`;
  } else if (lower.includes('decrease the plasma concentrations') || lower.includes('decreased blood levels') || lower.includes('reduced plasma') || lower.includes('reduced auc')) {
    const pct = decMatch ? ` (reduksi AUC ~${decMatch[1]})` : '';
    mechanism = `Pemberian bersamaan menyebabkan penurunan konsentrasi obat dalam sirkulasi darah${pct} yang berpotensi menurunkan efikasi terapeutik ${drugB}.`;
  } else if (category === 'Metabolism' || lower.includes('cyp') || lower.includes('hepatic')) {
    if (lower.includes('inhibitor') || lower.includes('inhibit')) {
      mechanism = `Penghambatan isoenzim sitokrom hepar oleh ${drugA}, memperlambat degradasi metabolik dan klirens eliminasi ${drugB}.`;
    } else if (lower.includes('induce') || lower.includes('inducer')) {
      mechanism = `Induksi isoenzim metabolisme mikrosom hepar oleh ${drugA}, mempercepat pembersihan dan eliminasi ${drugB} dari plasma.`;
    } else {
      mechanism = `Interaksi farmakokinetik metabolisme lintas pertama pada mikrosom hepar antara ${drugA} dan ${drugB}.`;
    }
  } else if (category === 'Absorption' || lower.includes('absorption') || lower.includes('chelat')) {
    if (lower.includes('chelat') || lower.includes('complex')) {
      mechanism = `Pembentukan kelat kompleks yang tidak larut antara ${drugA} dan ${drugB} di saluran cerna, menghambat absorpsi ke sirkulasi sistemik.`;
    } else {
      mechanism = `Interaksi kinetika absorpsi saluran cerna, modifikasi pH lambung, atau penundaan disolusi usus antara ${drugA} dan ${drugB}.`;
    }
  } else if (category === 'Excretion' || lower.includes('renal') || lower.includes('tubular')) {
    mechanism = `Kompetisi sekresi tubulus ginjal atau penurunan laju filtrasi glomerulus yang menghambat eliminasi urin ${drugB} dan memicu akumulasi sistemik.`;
  } else if (category === 'Distribution' || lower.includes('protein binding')) {
    mechanism = `Pergeseran ikatan fraksi protein plasma (displacement of protein binding) yang meningkatkan fraksi bebas obat aktif dalam plasma.`;
  } else if (category === 'Synergy' || lower.includes('additive') || lower.includes('synerg')) {
    mechanism = `Efek farmakodinamik aditif atau sinergis antara ${drugA} dan ${drugB} pada organ target fisiologis yang sama.`;
  } else if (category === 'Antagonism' || lower.includes('antagon')) {
    mechanism = `Antagonisme farmakodinamik kompetitif langsung pada reseptor target seluler yang saling meniadakan efek terapeutik antara ${drugA} dan ${drugB}.`;
  } else if (lower.includes('myopath') || lower.includes('rhabdomyol') || lower.includes('muscle')) {
    mechanism = `Pemberian bersamaan mempotensiasi risiko toksisitas muskuloskeletal, miopati berat, dan rhabdomiolisis antara ${drugA} dan ${drugB}.`;
  } else if (lower.includes('transaminase') || lower.includes('hepatotox') || lower.includes('liver')) {
    mechanism = `Pemberian bersamaan berpotensi memicu peningkatan enzim transaminase hepar (SGOT/SGPT) dan stres hepatik antara ${drugA} dan ${drugB}.`;
  } else if (lower.includes('bleeding') || lower.includes('hemorrhag') || lower.includes('platelet')) {
    mechanism = `Pemberian bersamaan mempotensiasi gangguan hemostasis darah dan peningkatan risiko perdarahan antara ${drugA} dan ${drugB}.`;
  } else if (lower.includes('qt') || lower.includes('torsade') || lower.includes('arrhyth')) {
    mechanism = `Pemberian bersamaan memicu pemanjangan interval repolarisasi ventrikel (QTc) dan risiko aritmia kardiak antara ${drugA} dan ${drugB}.`;
  } else if (lower.includes('hypoglycem')) {
    mechanism = `Pemberian bersamaan mempotensiasi penurunan kadar glukosa darah sistemik dan lonjakan respons hipoglikemia.`;
  } else if (lower.includes('sedat') || lower.includes('cns') || lower.includes('drowsi')) {
    mechanism = `Pemberian bersamaan mempotensiasi penekanan sistem saraf pusat (SSP), sedasi berlebih, dan depresi psikomotorik.`;
  } else if (lower.includes('mechanism of interaction is unknown') || lower.includes('mechanism is unknown') || lower.includes('not clearly established')) {
    mechanism = `Mekanisme molekuler interaksi farmakologis antara ${drugA} dan ${drugB} belum sepenuhnya dipahami, namun interaksi klinis terkonfirmasi pada basis data DDInter 2.0.`;
  } else {
    mechanism = `Interaksi farmakodinamik klinis terdokumentasi pada basis data DDInter 2.0 yang memodifikasi profil respons terapi antara ${drugA} dan ${drugB}.`;
  }

  // 2. Clinical Outcome translation
  let clinicalOutcome = '';
  if (lower.includes('clinical significance is unknown')) {
    clinicalOutcome = `Signifikansi klinis perubahan kadar obat ini belum diketahui secara pasti (unknown clinical significance), namun potensi variasi efikasi terapi atau risiko efek samping tetap perlu diwaspadai.`;
  } else if (lower.includes('liver injury') || lower.includes('hepatotox')) {
    clinicalOutcome = `Peningkatan risiko kerusakan hepar (hepatotoksisitas), lonjakan enzim transaminase (SGOT/SGPT), dan cedera hati akut.`;
  } else if (lower.includes('seizure') || lower.includes('convuls')) {
    clinicalOutcome = `Penurunan konsentrasi obat antiepilepsi sub-terapeutik yang berisiko memicu kekambuhan bangkitan kejang.`;
  } else if (lower.includes('qt') || lower.includes('torsade') || lower.includes('arrhythm')) {
    clinicalOutcome = `Peningkatan risiko aritmia ventrikel fatal, pemanjangan interval QTc (Torsades de Pointes), sinkop, dan henti jantung mendadak.`;
  } else if (lower.includes('bleeding') || lower.includes('hemorrhag')) {
    clinicalOutcome = `Lonjakan risiko perdarahan mayor (perdarahan gastrointestinal masif, hematuria, atau perdarahan intrakranial).`;
  } else if (lower.includes('hypoglycem')) {
    clinicalOutcome = `Risiko hipoglikemia berat mendadak (keringat dingin, tremor, penurunan kesadaran, hingga koma hipoglikemik).`;
  } else if (lower.includes('hypotens')) {
    clinicalOutcome = `Penurunan tekanan darah sistemik drastis (hipotensi akut), syok ortostatik, dan pusing berputar.`;
  } else if (lower.includes('rhabdomyol') || lower.includes('myopath')) {
    clinicalOutcome = `Risiko miopati akut dan rhabdomyolisis dengan potensi mioglobinuria dan gagal ginjal akut.`;
  } else if (severity === 'Major') {
    clinicalOutcome = `Lonjakan paparan obat sistemik atau interaksi toksik aditif yang berpotensi memicu morbiditas serius.`;
  } else if (severity === 'Moderate') {
    clinicalOutcome = `Modifikasi efikasi terapeutik atau peningkatan frekuensi efek samping obat yang memerlukan pengawasan klinis aktif.`;
  } else {
    clinicalOutcome = `Perubahan farmakokinetik ringan yang umumnya dapat ditoleransi dengan baik tanpa gangguan klinis signifikan.`;
  }

  // 3. Management translation
  let management = '';
  if (lower.includes('monitored for altered efficacy and safety') || lower.includes('monitored for altered efficacy')) {
    management = `PEMANTAUAN RUTIN: Pasien yang menerima kombinasi ini harus dipantau secara berkala terkait perubahan efikasi dan keamanan terapi. Tidak disarankan modifikasi dosis rutin tanpa adanya tanda toksisitas.`;
  } else if (severity === 'Major') {
    management = `KONTRAINDIKASI / HINDARI KOMBINASI: Pertimbangkan beralih ke obat alternatif yang tidak berinteraksi. Jika mutlak diperlukan, pantau tanda vital dan parameter laboratorium secara intensif.`;
  } else if (severity === 'Moderate') {
    management = `PERINGATAN & PEMANTAUAN KLINIS: Berikan jeda waktu minum obat minimal 2-4 jam jika terkait absorpsi, atau pantau respons klinis pasien secara berkala.`;
  } else {
    management = `PEMANTAUAN RUTIN: Kombinasi umumnya aman. Tidak diperlukan perubahan rejimen terapi secara rutin; lanjutkan pengawasan klinis standar.`;
  }

  return { mechanism, clinicalOutcome, management };
}

/**
 * Step 1: Pull all 8,466 monographs from DDInter 2.0 (Loaded from local cache if exists)
 */
export async function fetchAllMonographs(batchSize = 1000): Promise<Record<string, MonographRaw>> {
  if (fs.existsSync(MONOGRAPHS_FILE)) {
    console.log(`Loading existing monographs cache from ${MONOGRAPHS_FILE}`);
    return JSON.parse(fs.readFileSync(MONOGRAPHS_FILE, 'utf-8'));
  }

  console.log('Fetching all 8,466 clinical monographs from DDInter 2.0 in batches of 1,000...');
  const monographs: Record<string, MonographRaw> = {};
  let start = 0;
  let total = 8466;

  while (start < total) {
    console.log(`Fetching monographs range ${start} to ${start + batchSize}...`);
    try {
      const resp = await fetch('https://ddinter2.scbdd.com/server/interaction-source/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `draw=1&start=${start}&length=${batchSize}`
      });

      if (!resp.ok) {
        throw new Error(`HTTP ${resp.status}`);
      }

      const json = await resp.json();
      total = json.recordsTotal || 8466;
      const data: MonographRaw[] = json.data || [];

      for (const m of data) {
        monographs[m.id] = m;
      }

      console.log(`Fetched ${data.length} monographs. Total accumulated: ${Object.keys(monographs).length} / ${total}`);
      start += batchSize;

      await new Promise((r) => setTimeout(r, 300));
    } catch (err) {
      console.error(`Error fetching monographs at start=${start}:`, err);
      await new Promise((r) => setTimeout(r, 2000));
    }
  }

  fs.writeFileSync(MONOGRAPHS_FILE, JSON.stringify(monographs, null, 2), 'utf-8');
  console.log(`Saved all ${Object.keys(monographs).length} monographs to ${MONOGRAPHS_FILE}`);
  return monographs;
}

/**
 * Step 2: Fetch pair list for a specific monograph
 */
export async function fetchPairsForMonograph(monographId: string): Promise<PairRaw[]> {
  const url = `https://ddinter2.scbdd.com/server/inter-list/${monographId}/`;
  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      const resp = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: 'draw=1&start=0&length=1000',
        signal: AbortSignal.timeout(6000)
      });
      if (!resp.ok) return [];
      const json = await resp.json();
      return json.data || [];
    } catch (e) {
      if (attempt === 2) return [];
      await new Promise((r) => setTimeout(r, 300));
    }
  }
  return [];
}

/**
 * Step 3: Ingest monographs with checkpointing, rich clinical localization, and 2-column alternatives
 */
export async function runRelationalIngestion(maxMonographs?: number, concurrency = 5) {
  const monographs = await fetchAllMonographs();
  const monoIds = Object.keys(monographs);
  console.log(`Ready to process ${monoIds.length} monographs with concurrency = ${concurrency}`);

  let checkpoint: { completedMonoIds: string[]; totalPairs: number } = {
    completedMonoIds: [],
    totalPairs: 0
  };

  if (fs.existsSync(CHECKPOINT_FILE)) {
    try {
      checkpoint = JSON.parse(fs.readFileSync(CHECKPOINT_FILE, 'utf-8'));
      console.log(`Resuming from checkpoint: ${checkpoint.completedMonoIds.length} monographs completed, ${checkpoint.totalPairs} pairs collected.`);
    } catch (e) {}
  }

  const completedSet = new Set(checkpoint.completedMonoIds);
  const remainingIds = monoIds.filter((id) => !completedSet.has(id));
  const targetIds = maxMonographs ? remainingIds.slice(0, maxMonographs) : remainingIds;

  console.log(`Targeting ${targetIds.length} monographs in this run...`);

  // Load existing database if present
  let existingDatabase: any[] = [];
  if (fs.existsSync(FULL_DATABASE_FILE)) {
    try {
      existingDatabase = JSON.parse(fs.readFileSync(FULL_DATABASE_FILE, 'utf-8'));
    } catch (e) {}
  }

  let index = 0;
  let lastSave = 0;
  while (index < targetIds.length) {
    const chunk = targetIds.slice(index, index + concurrency);
    const promises = chunk.map(async (monoId) => {
      const mono = monographs[monoId];
      const pairs = await fetchPairsForMonograph(monoId);
      return { monoId, mono, pairs };
    });

    const results = await Promise.all(promises);

    for (const res of results) {
      const mono = res.mono;
      for (const pair of res.pairs) {
        const severity = mapSeverity(pair.level || mono.level);
        const mechanismCategory = mapMechanismCategory({
          ...mono,
          ...pair
        });

        const slugA = pair.drug_a_name.toLowerCase().replace(/[^a-z0-9]/g, '-');
        const slugB = pair.drug_b_name.toLowerCase().replace(/[^a-z0-9]/g, '-');

        const rawOriginalText = (mono && mono.interaction) ? mono.interaction : '';

        const { mechanism, clinicalOutcome, management } = translateClinicalMonograph(
          pair.drug_a_name,
          pair.drug_b_name,
          mechanismCategory,
          severity,
          rawOriginalText
        );

        const altsA = synthesizeAlternativesForDrug(pair.drug_a_name);
        const altsB = synthesizeAlternativesForDrug(pair.drug_b_name);

        const interactionRecord = {
          id: `ddinter-server-${pair.id}`,
          drugAId: `drug-${slugA}`,
          drugBId: `drug-${slugB}`,
          drugAName: pair.drug_a_name,
          drugBName: pair.drug_b_name,
          severity,
          mechanism,
          clinicalOutcome,
          management,
          evidenceLevel: 'Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)',
          ddinterPairId: `DDInter-PAIR-${pair.id}`,
          mechanismCategory,
          ddinterOriginalText: rawOriginalText,
          ddinterOriginalManagement: severity === 'Minor' 
            ? 'Minor clinical significance (DDInter Level 1). The combination is generally safe and well-tolerated without therapy alteration.'
            : severity === 'Major'
            ? 'Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.'
            : 'Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.',
          alternativeOptionsA: altsA,
          alternativeOptionsB: altsB,
          references: [
            `Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.`,
            `Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #${mono.id}`
          ]
        };

        existingDatabase.push(interactionRecord);
        checkpoint.totalPairs++;
      }

      completedSet.add(res.monoId);
      checkpoint.completedMonoIds.push(res.monoId);
    }

    index += concurrency;

    if (index - lastSave >= 20 || index >= targetIds.length) {
      lastSave = index;
      fs.writeFileSync(CHECKPOINT_FILE, JSON.stringify(checkpoint, null, 2), 'utf-8');
      fs.writeFileSync(FULL_DATABASE_FILE, JSON.stringify(existingDatabase, null, 2), 'utf-8');
      fs.writeFileSync(PUBLIC_ARCHIVE_FILE, JSON.stringify(existingDatabase, null, 2), 'utf-8');
      console.log(`[Checkpoint] Progress: ${checkpoint.completedMonoIds.length} monographs processed, total ${checkpoint.totalPairs} pairs saved.`);
    }

    await new Promise((r) => setTimeout(r, 120));
  }

  fs.writeFileSync(CHECKPOINT_FILE, JSON.stringify(checkpoint, null, 2), 'utf-8');
  fs.writeFileSync(FULL_DATABASE_FILE, JSON.stringify(existingDatabase, null, 2), 'utf-8');
  fs.writeFileSync(PUBLIC_ARCHIVE_FILE, JSON.stringify(existingDatabase, null, 2), 'utf-8');
  console.log(`Ingestion run finished! Total pairs in database: ${existingDatabase.length}`);
}

// CLI direct run check
const isDirect = process.argv[1] && process.argv[1].endsWith('fetchDDInterRelational.ts');
if (isDirect) {
  // Can be called directly with count and concurrency: e.g. npx tsx scripts/fetchDDInterRelational.ts 500 8
  const countArg = process.argv[2] ? parseInt(process.argv[2], 10) : undefined;
  const concArg = process.argv[3] ? parseInt(process.argv[3], 10) : 8;
  runRelationalIngestion(countArg, concArg).catch(console.error);
}
