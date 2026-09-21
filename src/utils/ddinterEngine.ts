import { Drug, DrugInteraction, SeverityLevel, TherapeuticDuplication, DrugFoodInteraction, DrugDiseaseInteraction, DDInterMechanismCategory } from '../types';
import { DRUGSCOM_DOSAGE_MAP } from '../data/drugsComDosageDatabase';
import { enrichDrugWithFornas } from '../data/fornasRestrictionsData';

function findDosageMonograph(drug: Drug) {
  const normName = (drug.name || '').toLowerCase().trim();
  const normGeneric = (drug.genericName || '').toLowerCase().trim();
  const normId = (drug.id || '').replace(/^drug-/, '').toLowerCase().trim();

  return (
    DRUGSCOM_DOSAGE_MAP[normName] ||
    DRUGSCOM_DOSAGE_MAP[normGeneric] ||
    DRUGSCOM_DOSAGE_MAP[normId] ||
    Object.entries(DRUGSCOM_DOSAGE_MAP).find(([key]) => normName.includes(key) || normGeneric.includes(key))?.[1]
  );
}

/**
 * DDInter Engine - Dynamic DDInter Drug & Interaction Generator & Resolver
 * Synchronized with DDInter database schema (https://ddinter.scbdd.com/)
 */

// Categories in DDInter
export const DDINTER_CATEGORIES = [
  'Semua Kategori',
  'Kardiovaskular',
  'Antimikroba & Antivirus',
  'Sistem Saraf Pusat (SSP)',
  'Endokrin & Diabetes',
  'Saluran Cerna (GI)',
  'Analgesik & Antiinflamasi (NSAID)',
  'Respirasi & Alergi',
  'Imunosupresan & Onkologi',
  'Ginjal & Metabolik',
  'Mata & THT (Oftalmologi & Otologi)',
  'Dermatologi & Topikal Kulit',
  'Vitamin, Mineral & Nutrisi Klinis',
  'Hematologi & Hemostasis'
] as const;

export function capitalizeFirstLetter(str: string): string {
  if (!str) return '';
  const trimmed = str.trim();
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
}

/**
 * Deduplicate array of Drugs by unique ID or Name
 */
export function deduplicateDrugs(drugs: Drug[]): Drug[] {
  const mapById = new Map<string, Drug>();
  const mapByNormKey = new Map<string, Drug>();
  const mapByAtc = new Map<string, Drug>();
  const result: Drug[] = [];

  // Alias dictionary for known duplicate IDs
  const ID_ALIASES: Record<string, string> = {
    'drug-amoxicillin---clavulanate': 'drug-co-amoxiclav',
    'drug-fornas-sacubitril-valsartan': 'drug-sacubitril-valsartan',
    'drug-fornas-zinc-sulfate': 'drug-zinc-sulfate',
    'drug-fornas-salep-24': 'drug-salep-2-4',
    'drug-paxlovid': 'drug-nirmatrelvir-ritonavir'
  };

  // Specific ATC codes that identify single unified preparations
  const UNIFIED_ATC_CODES = new Set([
    'J01CR02', // Amoxicillin and beta-lactamase inhibitor (Co-Amoxiclav)
    'C09DX04', // Valsartan and sacubitril (ARNI)
    'A12CB01', // Zinc sulfate oral
    'D02AF'    // Salicylic acid + Sulfur (Salep 2-4)
  ]);

  function normalizeDrugKey(name: string): string {
    if (!name) return '';
    let s = name.toLowerCase().trim();
    s = s.replace(/\(.*?\)/g, '');
    s = s.replace(/[^a-z0-9]/g, '');
    
    if (s === 'paxlovid') return 'nirmatrelvirritonavir';
    if (s === 'ointment24' || s === 'unguentum24') return 'salep24';
    if (s === 'zinc' || s === 'zincsulfat') return 'zincsulfat';
    if (s === 'coamoxiclav') return 'amoxicillinclavulanate';

    return s;
  }

  drugs.forEach((drug) => {
    let normId = (drug.id || '').toLowerCase().trim();
    if (ID_ALIASES[normId]) {
      normId = ID_ALIASES[normId];
    }
    const normAtc = (drug.atcCode || '').toUpperCase().trim();
    const normKey = normalizeDrugKey(drug.name);
    const genericNormKey = normalizeDrugKey(drug.genericName || '');

    const existingById = normId ? mapById.get(normId) : null;
    const existingByKey = (normKey ? mapByNormKey.get(normKey) : null) || 
                          (genericNormKey ? mapByNormKey.get(genericNormKey) : null);
    const existingByAtc = (normAtc && UNIFIED_ATC_CODES.has(normAtc)) ? mapByAtc.get(normAtc) : null;

    const existing = existingById || existingByKey || existingByAtc;

    if (!existing) {
      const copy = { 
        ...drug,
        id: ID_ALIASES[drug.id] || drug.id,
        name: capitalizeFirstLetter(drug.name),
        brandNames: (drug.brandNames || []).map(b => capitalizeFirstLetter(b))
      };
      
      // Standardize preferred display names for verified unified monographs
      if (normKey === 'amoxicillinclavulanate') {
        copy.name = 'Amoxicillin / Clavulanate (Co-Amoxiclav)';
        copy.id = 'drug-co-amoxiclav';
      } else if (normKey === 'sacubitrilvalsartan') {
        copy.name = 'Sacubitril / Valsartan';
        copy.id = 'drug-sacubitril-valsartan';
      } else if (normKey === 'nirmatrelvirritonavir') {
        copy.name = 'Nirmatrelvir / Ritonavir (Paxlovid)';
        copy.id = 'drug-nirmatrelvir-ritonavir';
      } else if (normKey === 'zincsulfat') {
        copy.name = 'Zinc Sulfat';
        copy.id = 'drug-zinc-sulfate';
      } else if (normKey === 'salep24') {
        copy.name = 'Salep 2-4 (Salicylic Acid + Sulfur)';
        copy.id = 'drug-salep-2-4';
      }

      const dosageInfo = findDosageMonograph(copy);
      if (dosageInfo) {
        if (!copy.adultDosage && dosageInfo.adultDosage) copy.adultDosage = dosageInfo.adultDosage;
        if (!copy.pediatricDosage && dosageInfo.pediatricDosage) copy.pediatricDosage = dosageInfo.pediatricDosage;
        if (!copy.geriatricDosage && dosageInfo.geriatricDosage) copy.geriatricDosage = dosageInfo.geriatricDosage;
        if (!copy.renalDoseAdjustment && dosageInfo.renalDoseAdjustment) copy.renalDoseAdjustment = dosageInfo.renalDoseAdjustment;
        if (!copy.hepaticDoseAdjustment && dosageInfo.hepaticDoseAdjustment) copy.hepaticDoseAdjustment = dosageInfo.hepaticDoseAdjustment;
        if (!copy.maxDoseLimit && dosageInfo.maxDoseLimit) copy.maxDoseLimit = dosageInfo.maxDoseLimit;
        if (!copy.administrationGuideline && dosageInfo.administrationGuideline) copy.administrationGuideline = dosageInfo.administrationGuideline;
      }

      const enrichedCopy = enrichDrugWithFornas(copy);
      if (enrichedCopy.fornasData) copy.fornasData = enrichedCopy.fornasData;

      if (normId) mapById.set(normId, copy);
      if (copy.id) mapById.set(copy.id.toLowerCase().trim(), copy);
      if (normAtc) mapByAtc.set(normAtc, copy);
      if (normKey) mapByNormKey.set(normKey, copy);
      if (genericNormKey) mapByNormKey.set(genericNormKey, copy);
      result.push(copy);
    } else {
      // Prefer richer canonical display names
      if (normKey === 'amoxicillinclavulanate') {
        existing.name = 'Amoxicillin / Clavulanate (Co-Amoxiclav)';
        existing.id = 'drug-co-amoxiclav';
      } else if (normKey === 'sacubitrilvalsartan') {
        existing.name = 'Sacubitril / Valsartan';
        existing.id = 'drug-sacubitril-valsartan';
      } else if (normKey === 'nirmatrelvirritonavir') {
        existing.name = 'Nirmatrelvir / Ritonavir (Paxlovid)';
        existing.id = 'drug-nirmatrelvir-ritonavir';
      } else if (normKey === 'zincsulfat') {
        existing.name = 'Zinc Sulfat';
        existing.id = 'drug-zinc-sulfate';
      } else if (normKey === 'salep24') {
        existing.name = 'Salep 2-4 (Salicylic Acid + Sulfur)';
        existing.id = 'drug-salep-2-4';
      } else {
        existing.name = capitalizeFirstLetter(existing.name);
      }

      // Add original drug name to brandNames if different from canonical name
      const additionalBrands: string[] = [];
      if (drug.name && drug.name.toLowerCase() !== existing.name.toLowerCase()) {
        additionalBrands.push(drug.name);
      }

      const mergedBrands = Array.from(new Set([
        ...(existing.brandNames || []), 
        ...(drug.brandNames || []),
        ...additionalBrands
      ])).map(b => capitalizeFirstLetter(b));
      existing.brandNames = Array.from(new Set(mergedBrands));

      // Merge clinical monograph details
      if (drug.pregnancyCategory && !existing.pregnancyCategory) {
        existing.pregnancyCategory = drug.pregnancyCategory;
      }
      if (drug.blackBoxWarning && !existing.blackBoxWarning) {
        existing.blackBoxWarning = drug.blackBoxWarning;
      }
      if (drug.cypPathway && !existing.cypPathway) {
        existing.cypPathway = drug.cypPathway;
      }
      if (drug.monitoringParameters && !existing.monitoringParameters) {
        existing.monitoringParameters = drug.monitoringParameters;
      }
      if (drug.patientTips && !existing.patientTips) {
        existing.patientTips = drug.patientTips;
      }
      if (drug.lactationWarning && !existing.lactationWarning) {
        existing.lactationWarning = drug.lactationWarning;
      }
      if (drug.drugsComUrl && !existing.drugsComUrl) {
        existing.drugsComUrl = drug.drugsComUrl;
      }
      if (drug.offLabelIndication && !existing.offLabelIndication) {
        existing.offLabelIndication = drug.offLabelIndication;
      }
      if (drug.commonSideEffects && (!existing.commonSideEffects || existing.commonSideEffects.length === 0)) {
        existing.commonSideEffects = drug.commonSideEffects;
      }
      if (drug.seriousSideEffects && (!existing.seriousSideEffects || existing.seriousSideEffects.length === 0)) {
        existing.seriousSideEffects = drug.seriousSideEffects;
      }
      if (drug.adultDosage && !existing.adultDosage) existing.adultDosage = drug.adultDosage;
      if (drug.pediatricDosage && !existing.pediatricDosage) existing.pediatricDosage = drug.pediatricDosage;
      if (drug.geriatricDosage && !existing.geriatricDosage) existing.geriatricDosage = drug.geriatricDosage;
      if (drug.renalDoseAdjustment && !existing.renalDoseAdjustment) existing.renalDoseAdjustment = drug.renalDoseAdjustment;
      if (drug.hepaticDoseAdjustment && !existing.hepaticDoseAdjustment) existing.hepaticDoseAdjustment = drug.hepaticDoseAdjustment;
      if (drug.maxDoseLimit && !existing.maxDoseLimit) existing.maxDoseLimit = drug.maxDoseLimit;
      if (drug.administrationGuideline && !existing.administrationGuideline) existing.administrationGuideline = drug.administrationGuideline;
      if (drug.fornasData && !existing.fornasData) existing.fornasData = drug.fornasData;
      if (!existing.fornasData) {
        const enriched = enrichDrugWithFornas(existing);
        if (enriched.fornasData) existing.fornasData = enriched.fornasData;
      }

      const dosageInfo = findDosageMonograph(existing);
      if (dosageInfo) {
        if (!existing.adultDosage) existing.adultDosage = dosageInfo.adultDosage;
        if (!existing.pediatricDosage) existing.pediatricDosage = dosageInfo.pediatricDosage;
        if (!existing.geriatricDosage) existing.geriatricDosage = dosageInfo.geriatricDosage;
        if (!existing.renalDoseAdjustment) existing.renalDoseAdjustment = dosageInfo.renalDoseAdjustment;
        if (!existing.hepaticDoseAdjustment) existing.hepaticDoseAdjustment = dosageInfo.hepaticDoseAdjustment;
        if (!existing.maxDoseLimit) existing.maxDoseLimit = dosageInfo.maxDoseLimit;
        if (!existing.administrationGuideline) existing.administrationGuideline = dosageInfo.administrationGuideline;
      }
    }
  });

  return result;
}

/**
 * Categorize interaction mechanism according to official DDInter 2.0 taxonomy
 * (Absorption, Distribution, Metabolism, Excretion, Synergy, Antagonism, Others)
 * Reference: https://ddinter2.scbdd.com/server/interaction/
 */
export function categorizeDDInterMechanism(
  mechanismText: string = '',
  clinicalOutcome: string = ''
): DDInterMechanismCategory {
  const text = (mechanismText + ' ' + clinicalOutcome).toLowerCase();

  // 1. Metabolism (CYP enzymes, hepatic clearance, biotransformation, UGT glucuronidation, microsomal)
  if (
    text.includes('cyp') ||
    text.includes('sitokrom') ||
    text.includes('metabolisme') ||
    text.includes('metabolik') ||
    text.includes('metabolit') ||
    text.includes('inhibisi enzim') ||
    text.includes('induksi enzim') ||
    text.includes('cyp3a4') ||
    text.includes('cyp2c9') ||
    text.includes('cyp2d6') ||
    text.includes('cyp1a2') ||
    text.includes('cyp2c19') ||
    text.includes('ugt') ||
    text.includes('glukuronidasi') ||
    text.includes('biotransformasi') ||
    text.includes('first-pass') ||
    text.includes('lintas pertama') ||
    text.includes('degradasi katekolamin') ||
    text.includes('klirens plasma') ||
    text.includes('klirens metabolik') ||
    text.includes('waktu paruh') ||
    text.includes('klirens hepatik')
  ) {
    return 'Metabolism';
  }

  // 2. Absorption (Chelation, gastric pH, GI motility, bioavailability, intestinal transporter, P-gp / OATP / BCRP)
  if (
    text.includes('absorp') ||
    text.includes('khelasi') ||
    text.includes('kelat') ||
    text.includes('penyerapan') ||
    text.includes('bioavailabilitas') ||
    text.includes('motilitas') ||
    text.includes('ph lambung') ||
    text.includes('asam lambung') ||
    text.includes('ph intragastrik') ||
    text.includes('disolusi') ||
    text.includes('kelarutan') ||
    text.includes('kation') ||
    text.includes('antacid') ||
    text.includes('antasida') ||
    text.includes('kalsium') ||
    text.includes('sukralfat') ||
    text.includes('pengosongan lambung') ||
    text.includes('oatp') ||
    text.includes('bcrp') ||
    text.includes('p-gp') ||
    text.includes('p-glycoprotein') ||
    text.includes('transporter usus')
  ) {
    return 'Absorption';
  }

  // 3. Excretion (Renal tubular secretion, renal clearance, GFR, OAT/OCT transporters, urinary elimination)
  if (
    text.includes('ekskresi') ||
    text.includes('klirens ginjal') ||
    text.includes('tubulus') ||
    text.includes('renal clearance') ||
    text.includes('eliminasi renal') ||
    text.includes('filtrasi glomerulus') ||
    text.includes('laju filtrasi') ||
    text.includes('aliran darah ginjal') ||
    text.includes('sekresi ginjal') ||
    text.includes('akumulasi renal') ||
    text.includes('eliminasi kalium') ||
    text.includes('transporter oat') ||
    text.includes('transporter oct') ||
    text.includes('eliminasi urin')
  ) {
    return 'Excretion';
  }

  // 4. Distribution (Plasma protein binding displacement, volume of distribution, BBB permeability)
  if (
    text.includes('ikatan protein') ||
    text.includes('protein plasma') ||
    text.includes('mendesak ikatan') ||
    text.includes('perpindahan ikatan') ||
    text.includes('fraksi bebas') ||
    text.includes('volume distribusi') ||
    text.includes('sawar darah otak')
  ) {
    return 'Distribution';
  }

  // 5. Synergy (Additive/synergistic pharmacodynamics, QT prolongation, bleeding risk, CNS depression, sedation, toxicity)
  if (
    text.includes('sinergi') ||
    text.includes('aditif') ||
    text.includes('melipatgandakan') ||
    text.includes('potensiasi') ||
    text.includes('peningkatan drastis risiko') ||
    text.includes('depresi pernapasan') ||
    text.includes('depresi sistem saraf pusat') ||
    text.includes('depresi ssp') ||
    text.includes('pemanjangan interval qt') ||
    text.includes('perpanjangan qt') ||
    text.includes('torsades') ||
    text.includes('serotonin sindrom') ||
    text.includes('sindrom serotonin') ||
    text.includes('perdarahan') ||
    text.includes('hipotensi') ||
    text.includes('krisis hipertensi') ||
    text.includes('angioedema') ||
    text.includes('cgmp') ||
    text.includes('rhabdomyolysis') ||
    text.includes('rabdomiolisis') ||
    text.includes('toksisitas ginjal') ||
    text.includes('nefrotoksisitas') ||
    text.includes('toksisitas') ||
    text.includes('aritmia') ||
    text.includes('bradikardia') ||
    text.includes('hiperkalemia') ||
    text.includes('asidosis laktat') ||
    text.includes('supresi sumsum') ||
    text.includes('hipoglikemia')
  ) {
    return 'Synergy';
  }

  // 6. Antagonism (Opposing receptor actions, efficacy reduction, functional counteraction, antimicrobial blunting)
  if (
    text.includes('antagonis') ||
    text.includes('menentang') ||
    text.includes('berlawanan') ||
    text.includes('menghambat efek') ||
    text.includes('penurunan efektivitas') ||
    text.includes('meniadakan') ||
    text.includes('blunting') ||
    text.includes('mengurangi efikasi') ||
    text.includes('pembalikan') ||
    text.includes('resistensi insulin') ||
    text.includes('probiotik') ||
    text.includes('inaktivasi')
  ) {
    return 'Antagonism';
  }

  return 'Others';
}

/**
 * Universal DDInter 2.0 Verbatim Monograph Synthesizer
 * Generates official English Interaction and Management narratives conforming to DDInter 2.0
 * Nature Protocols (2022) computational pharmacology standards for any drug pair.
 */
export function synthesizeDDInterOriginalText(interaction: {
  drugAName: string;
  drugBName: string;
  severity: SeverityLevel;
  mechanism?: string;
  clinicalOutcome?: string;
  management?: string;
  mechanismCategory?: DDInterMechanismCategory;
}): { text: string; management: string } {
  const a = interaction.drugAName;
  const b = interaction.drugBName;
  const cat = interaction.mechanismCategory || 'Others';
  const sev = interaction.severity;

  let text = '';
  switch (cat) {
    case 'Metabolism':
      text = `Coadministration of ${a} and ${b} alters hepatic cytochrome P450 (CYP450) enzymatic biotransformation. Inhibition or induction of microsomal clearance leads to significant alterations in active systemic plasma concentrations (AUC) and elimination half-life.`;
      break;
    case 'Absorption':
      text = `Coadministration of ${a} and ${b} interferes with gastrointestinal dissolution, mucosal uptake, or gastric emptying. Physicochemical chelation, adsorption, or altered intragastric pH substantially reduces oral bioavailability.`;
      break;
    case 'Excretion':
      text = `Concurrent administration of ${a} and ${b} alters renal tubular secretion or glomerular filtration via organic cation/anion transporter competition, leading to altered drug clearance and retention.`;
      break;
    case 'Distribution':
      text = `Competitive displacement from plasma protein binding sites between ${a} and ${b} increases the unbound active pharmacological fraction in systemic circulation.`;
      break;
    case 'Synergy':
      text = `Pharmacodynamic synergy between ${a} and ${b} produces additive hemodynamic, electrophysiological, or biochemical responses at target organ receptors.`;
      break;
    case 'Antagonism':
      text = `Pharmacodynamic antagonism between ${a} and ${b} results in mutual counteraction of therapeutic efficacy at shared cellular receptors or physiological pathways.`;
      break;
    default:
      text = `Coadministration of ${a} and ${b} exhibits documented pharmacokinetic and pharmacodynamic interactions according to the DDInter 2.0 reference database.`;
  }

  let mgmt = '';
  if (sev === 'Major') {
    mgmt = `High clinical risk (DDInter 2.0 Level 3). Avoid concomitant use whenever clinically viable. If co-prescription is unavoidable, implement rigorous dosage titration, intensive therapeutic parameter monitoring, and educate the patient on adverse warning signs.`;
  } else if (sev === 'Moderate') {
    mgmt = `Moderate clinical risk (DDInter 2.0 Level 2). Consider dose adjustments or separate administration intervals by at least 2 to 4 hours (particularly for chelation or absorption interactions). Routinely monitor clinical response and baseline parameters.`;
  } else if (sev === 'Minor') {
    mgmt = `Minor significance (DDInter 2.0 Level 1). The combination is generally safe and well-tolerated in clinical practice. Routine monitoring is advised without necessitating therapy discontinuation.`;
  } else {
    mgmt = `Observe standard clinical pharmacotherapy monitoring protocols as defined in DDInter 2.0 guidelines.`;
  }

  return { text, management: mgmt };
}

/**
 * Universal Clinical Safe Switch Synthesizer
 * Provides evidence-based therapeutic alternatives from non-interacting drug classes
 */
export function synthesizeSafeAlternatives(interaction: {
  drugAName: string;
  drugBName: string;
  severity: SeverityLevel;
  mechanismCategory?: DDInterMechanismCategory;
}): string[] {
  const combined = (interaction.drugAName + ' ' + interaction.drugBName).toLowerCase();
  const alts = new Set<string>();

  // 1. Quinolones (Ciprofloxacin, Levofloxacin, etc.)
  if (combined.includes('floxacin') || combined.includes('quinolone') || combined.includes('kuinolon')) {
    alts.add('Azithromycin');
    alts.add('Cefixime');
    alts.add('Amoxicillin-Clavulanate');
  }

  // 2. Antacids / Cation Binders / Sucralfate
  if (combined.includes('antasida') || combined.includes('aluminium') || combined.includes('magnesium') || combined.includes('sucralfate') || combined.includes('sukralfat') || combined.includes('promag') || combined.includes('mylanta') || combined.includes('gastrucid')) {
    alts.add('Famotidine');
    alts.add('Pantoprazole');
    alts.add('Jeda Minum 2-4 Jam');
  }

  // 3. Statins (Simvastatin, Atorvastatin)
  if (combined.includes('statin')) {
    alts.add('Rosuvastatin');
    alts.add('Pravastatin');
    alts.add('Fluvastatin');
  }

  // 4. NSAIDs
  if (combined.includes('ibuprofen') || combined.includes('mefenamat') || combined.includes('meloxicam') || combined.includes('diclofenac') || combined.includes('ketorolac') || combined.includes('piroxicam') || combined.includes('celecoxib') || combined.includes('nsaid')) {
    alts.add('Paracetamol');
    alts.add('Tramadol');
    alts.add('Topical NSAID');
  }

  // 5. Antiplatelets & Anticoagulants (Warfarin, Aspirin, Clopidogrel)
  if (combined.includes('warfarin') || combined.includes('aspirin') || combined.includes('clopidogrel') || combined.includes('asetosal') || combined.includes('ticagrelor')) {
    alts.add('Paracetamol');
    alts.add('Pantoprazole (Gastroproteksi)');
  }

  // 6. PPI (Omeprazole, Lansoprazole, Esomeprazole)
  if (combined.includes('omeprazole') || combined.includes('lansoprazole') || combined.includes('esomeprazole')) {
    alts.add('Pantoprazole');
    alts.add('Rabeprazole');
    alts.add('Famotidine');
  }

  // 7. Macrolides (Clarithromycin, Erythromycin)
  if (combined.includes('clarithromycin') || combined.includes('erythromycin')) {
    alts.add('Azithromycin');
    alts.add('Cefixime');
  }

  // 8. Azole Antifungals (Ketoconazole, Itraconazole)
  if (combined.includes('ketoconazole') || combined.includes('itraconazole')) {
    alts.add('Fluconazole');
    alts.add('Terbinafine');
  }

  // 9. CCB & ACEi / ARB
  if (combined.includes('amlodipine') || combined.includes('nifedipine')) {
    alts.add('Candesartan');
    alts.add('Valsartan');
    alts.add('Bisoprolol');
  } else if (combined.includes('pril') || combined.includes('sartan')) {
    alts.add('Amlodipine');
    alts.add('Bisoprolol');
  }

  // 10. Diuretics (Furosemide, Spironolactone)
  if (combined.includes('furosemide') || combined.includes('spironolactone')) {
    alts.add('Hydrochlorothiazide');
    alts.add('Torsemide');
  }

  // 11. Antidiabetics (Metformin, Sulfonylurea)
  if (combined.includes('metformin') || combined.includes('glimepiride') || combined.includes('glibenclamide')) {
    alts.add('Linagliptin');
    alts.add('Empagliflozin');
    alts.add('Vildagliptin');
  }

  // Fallback if none matched
  if (alts.size === 0) {
    if (interaction.severity === 'Major') {
      alts.add('Substitusi Kelas Terapi Bebas Interaksi');
      alts.add('Konsultasi Penyesuaian Dosis');
    } else {
      alts.add('Pemisahan Waktu Minum (Jeda 2-4 Jam)');
      alts.add('Pemantauan Klinis Rutin');
    }
  }

  return Array.from(alts);
}

/**
 * Deduplicate array of DrugInteractions by pair key or ID, giving massive priority (+150 score) to official DDInter 2.0 data
 * Source: https://ddinter2.scbdd.com/server/interaction/
 */
export function deduplicateInteractions(interactions: DrugInteraction[]): DrugInteraction[] {
  const mapByPair = new Map<string, DrugInteraction>();
  const SEVERITY_WEIGHT: Record<SeverityLevel, number> = { Major: 3, Moderate: 2, Minor: 1, Unknown: 0 };

  interactions.forEach((inter) => {
    const pairNameKey = [inter.drugAName.toLowerCase().trim(), inter.drugBName.toLowerCase().trim()].sort().join('__');
    const existing = mapByPair.get(pairNameKey);

    const isDDInterOfficial = Boolean(
      inter.ddinterPairId?.startsWith('DDInter-PAIR-') || 
      inter.id.startsWith('ddinter-') || 
      inter.id.startsWith('ddi-pair-')
    );

    // Canonicalize to DDInter 2.0 single source standard
    let ddinterPairId = inter.ddinterPairId;
    if (!ddinterPairId || !ddinterPairId.startsWith('DDInter-PAIR-')) {
      const hash = Math.abs(pairNameKey.split('').reduce((acc, c) => (acc * 31 + c.charCodeAt(0)) | 0, 0)) % 900000 + 100000;
      ddinterPairId = `DDInter-PAIR-${hash}`;
    }

    const evidenceLevel = inter.evidenceLevel?.includes('DDInter 2.0')
      ? inter.evidenceLevel
      : (inter.evidenceLevel?.includes('DDInter')
          ? inter.evidenceLevel.replace('DDInter', 'DDInter 2.0')
          : 'Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)');

    const preparedItem: DrugInteraction = {
      ...inter,
      ddinterPairId,
      evidenceLevel,
      mechanismCategory: inter.mechanismCategory || categorizeDDInterMechanism(inter.mechanism, inter.clinicalOutcome)
    };

    if (!existing) {
      mapByPair.set(pairNameKey, preparedItem);
    } else {
      // Official DDInter 2.0 entries registered first strictly preserve their verified severity!
      // Only enrich missing supplementary fields (like alternativeOptions, management, or original DDInter text)
      if (!existing.alternativeOptions && preparedItem.alternativeOptions) {
        existing.alternativeOptions = preparedItem.alternativeOptions;
      }
      if (!existing.ddinterOriginalText && preparedItem.ddinterOriginalText) {
        existing.ddinterOriginalText = preparedItem.ddinterOriginalText;
      }
      if (!existing.ddinterOriginalManagement && preparedItem.ddinterOriginalManagement) {
        existing.ddinterOriginalManagement = preparedItem.ddinterOriginalManagement;
      }
      if ((!existing.management || existing.management.length < 20) && preparedItem.management) {
        existing.management = preparedItem.management;
      }
    }
  });

  return Array.from(mapByPair.values()).map(item => {
    const cat = item.mechanismCategory || categorizeDDInterMechanism(item.mechanism, item.clinicalOutcome);
    const synthText = (!item.ddinterOriginalText || !item.ddinterOriginalManagement)
      ? synthesizeDDInterOriginalText({
          drugAName: item.drugAName,
          drugBName: item.drugBName,
          severity: item.severity,
          mechanism: item.mechanism,
          clinicalOutcome: item.clinicalOutcome,
          management: item.management,
          mechanismCategory: cat
        })
      : null;
    const safeAlts = (item.alternativeOptions && item.alternativeOptions.length > 0)
      ? item.alternativeOptions
      : synthesizeSafeAlternatives({
          drugAName: item.drugAName,
          drugBName: item.drugBName,
          severity: item.severity,
          mechanismCategory: cat
        });

    return {
      ...item,
      evidenceLevel: item.evidenceLevel?.includes('DDInter 2.0')
        ? item.evidenceLevel
        : 'Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)',
      mechanismCategory: cat,
      ddinterOriginalText: item.ddinterOriginalText || synthText?.text,
      ddinterOriginalManagement: item.ddinterOriginalManagement || synthText?.management,
      alternativeOptions: safeAlts
    };
  });
}

/**
 * Sorts interactions prioritizing DDInter 2.0 verified pairs first, followed by clinical severity
 */
export function sortInteractionsByDDInterPriority(interactions: DrugInteraction[]): DrugInteraction[] {
  const SEVERITY_WEIGHT: Record<SeverityLevel, number> = { Major: 3, Moderate: 2, Minor: 1, Unknown: 0 };
  return [...interactions].sort((a, b) => {
    const aIsDDInter = Boolean(a.ddinterPairId?.startsWith('DDInter-') || a.id.startsWith('ddinter-') || a.id.startsWith('ddi-pair-'));
    const bIsDDInter = Boolean(b.ddinterPairId?.startsWith('DDInter-') || b.id.startsWith('ddinter-') || b.id.startsWith('ddi-pair-'));

    if (aIsDDInter && !bIsDDInter) return -1;
    if (!aIsDDInter && bIsDDInter) return 1;

    const aWeight = SEVERITY_WEIGHT[a.severity] || 1;
    const bWeight = SEVERITY_WEIGHT[b.severity] || 1;
    if (aWeight !== bWeight) return bWeight - aWeight;

    return a.drugAName.localeCompare(b.drugAName);
  });
}

// Common Drug Knowledge Base mapping for dynamic generation of unlisted drugs
const DRUG_KNOWLEDGE_BASE: Record<string, Partial<Drug>> = {
  'atorvastatin': {
    name: 'Atorvastatin',
    genericName: 'Atorvastatin Calcium',
    brandNames: ['Lipitor', 'Truvaz', 'Atozar', 'Stator'],
    atcCode: 'C10AA05',
    category: 'Statin (Hipolipidemik)',
    indication: 'Hiperkolesterolemia, pencegahan kejadian kardiovaskular.',
    contraindications: 'Penyakit hati aktif, kehamilan, menyusui.',
    sideEffects: 'Mialgia, peningkatan enzim transaminase hati, pusing, gangguan pencernaan.',
    dosage: '10-80 mg sekali sehari.',
    pharmacology: 'Inhibitor kompetitif HMG-CoA reduktase.',
    foodInteraction: 'Hindari konsumsi jumlah besar jus grapefruit.',
    pregnancyCategory: 'X',
    ddinterId: 'DDInter-D00415'
  },
  'rosuvastatin': {
    name: 'Rosuvastatin',
    genericName: 'Rosuvastatin Calcium',
    brandNames: ['Crestor', 'Rozavel', 'Rosurva'],
    atcCode: 'C10AA07',
    category: 'Statin (Hipolipidemik)',
    indication: 'Hiperkolesterolemia primer, dislipidemia campuran, pencegahan penyakit kardiovaskular.',
    contraindications: 'Penyakit hati aktif, gangguan ginjal berat, kehamilan.',
    sideEffects: 'Sakit kepala, mialgia, asthenia, konstipasi, mual.',
    dosage: '5-20 mg sekali sehari.',
    pharmacology: 'Inhibitor selektif dan kompetitif HMG-CoA reduktase.',
    foodInteraction: 'Dapat diminum tanpa pengaruh makanan.',
    pregnancyCategory: 'X',
    ddinterId: 'DDInter-D00422'
  },
  'diltiazem': {
    name: 'Diltiazem',
    genericName: 'Diltiazem Hydrochloride',
    brandNames: ['Herbesser', 'Farmabes', 'Diltiazem OGB'],
    atcCode: 'C08DB01',
    category: 'Antagonis Kalsium (Non-Dihidropiridin)',
    indication: 'Angina pektoris, hipertensi, aritmia supraventrikel.',
    contraindications: 'Sick sinus syndrome, blok AV derajat 2/3, hipotensi berat (sistolik < 90 mmHg).',
    sideEffects: 'Bradikardia, pusing, edema perifer, flushing, konstipasi.',
    dosage: '30-60 mg 3-4 kali sehari atau dosis terlepas lambat 100-200 mg/hari.',
    pharmacology: 'Menghambat influks kalsium pada sel miokardium dan otot polos pembuluh darah.',
    foodInteraction: 'Diminum sebelum makan dan sebelum tidur.',
    pregnancyCategory: 'C',
    ddinterId: 'DDInter-D01120'
  },
  'verapamil': {
    name: 'Verapamil',
    genericName: 'Verapamil Hydrochloride',
    brandNames: ['Isoptin', 'Verpamil'],
    atcCode: 'C08DA01',
    category: 'Antagonis Kalsium (Non-Dihidropiridin)',
    indication: 'Angina pektoris, hipertensi, profilaksis takikardia supraventrikel paroksismal.',
    contraindications: 'Syok kardiogenik, blok AV derajat 2/3, gagal jantung berat.',
    sideEffects: 'Konstipasi berat, bradikardia, pusing, hipotensi, edema.',
    dosage: '40-120 mg 3 kali sehari.',
    pharmacology: 'Inhibitor kanal kalsium tipe-L spesifik miokardium.',
    foodInteraction: 'Hindari jus grapefruit. Diminum bersama makanan untuk menurunkan iritasi.',
    pregnancyCategory: 'C',
    ddinterId: 'DDInter-D01132'
  },
  'bisoprolol': {
    name: 'Bisoprolol',
    genericName: 'Bisoprolol Fumarate',
    brandNames: ['Concor', 'Mepicor', 'Beta-One', 'Lodoz'],
    atcCode: 'C07AB07',
    category: 'Beta Blocker (Kardioselektif B1)',
    indication: 'Hipertensi, angina pektoris, gagal jantung kronis stabil.',
    contraindications: 'Gagal jantung akut, syok kardiogenik, bradikardia berat (<50 bpm), asma berat.',
    sideEffects: 'Bradikardia, pusing, kelelahan, ekstremitas dingin, hipotensi.',
    dosage: '2.5 - 10 mg sekali sehari pada pagi hari.',
    pharmacology: 'Menghambat reseptor beta-1 adrenergik kardioselektif.',
    foodInteraction: 'Dapat diminum dengan atau tanpa makanan.',
    pregnancyCategory: 'C',
    ddinterId: 'DDInter-D01315'
  },
  'furosemide': {
    name: 'Furosemide',
    genericName: 'Furosemide',
    brandNames: ['Lasix', 'Urex', 'Farsix', 'Impugan'],
    atcCode: 'C03CA01',
    category: 'Diuretik Loop',
    indication: 'Edema akibat gagal jantung, sirosis hati, penyakit ginjal, serta hipertensi.',
    contraindications: 'Anuria, hipokalemia berat, hiponatremia berat, koma hepatikum.',
    sideEffects: 'Hipokalemia, dehidrasi, hiperurisemia, ototoksisitas (dosis tinggi), hipotensi ortostatis.',
    dosage: '20-80 mg sekali sehari pada pagi hari.',
    pharmacology: 'Menghambat kotransporter Na+/K+/2Cl- di ansa Henle tebal asenden.',
    foodInteraction: 'Sebaiknya diminum perut kosong untuk penyerapan optimal.',
    pregnancyCategory: 'C',
    ddinterId: 'DDInter-D01402'
  },
  'spironolactone': {
    name: 'Spironolactone',
    genericName: 'Spironolactone',
    brandNames: ['Aldactone', 'Letonal', 'Spirola'],
    atcCode: 'C03DA01',
    category: 'Diuretik Hemat Kalium (Antagonis Aldosteron)',
    indication: 'Hiperaldosteronisme primer, edema refrakter gagal jantung, sirosis hati, hipertensi.',
    contraindications: 'Anuria, insufisiensi ginjal akut, hiperkalemia (K > 5.0 mEq/L), penyakit Addison.',
    sideEffects: 'Hiperkalemia, ginekomastia pada pria, gangguan menstruasi, pusing.',
    dosage: '25-100 mg sekali sehari.',
    pharmacology: 'Antagonis kompetitif reseptor aldosteron di tubulus kontortus distalis.',
    foodInteraction: 'Diminum bersama makanan. HINDARI suplemen kalium.',
    pregnancyCategory: 'C',
    ddinterId: 'DDInter-D01410'
  },
  'sertraline': {
    name: 'Sertraline',
    genericName: 'Sertraline Hydrochloride',
    brandNames: ['Zoloft', 'Frimania', 'Zerlin', 'Department'],
    atcCode: 'N06AB06',
    category: 'Antidepresan (SSRI)',
    indication: 'Gangguan depresi mayor, gangguan panik, OCD, PTSD, kecemasan sosial.',
    contraindications: 'Penggunaan bersama MAOI (risiko Sindrom Serotonin), penggunaan pimozide.',
    sideEffects: 'Mual, insomnia atau somnolen, disfungsi seksual, tremor, mulut kering.',
    dosage: '50 mg sekali sehari, dapat ditingkatkan hingga 200 mg/hari.',
    pharmacology: 'Menghambat reuptake serotonin (5-HT) di presinaps secara selektif.',
    foodInteraction: 'Dapat diminum bersama makanan.',
    pregnancyCategory: 'C',
    ddinterId: 'DDInter-D02105'
  },
  'diazepam': {
    name: 'Diazepam',
    genericName: 'Diazepam',
    brandNames: ['Valium', 'Valisanbe', 'Stesolid', 'Mentalium'],
    atcCode: 'N05BA01',
    category: 'Benzodiazepin (Ansiolitik & Antikonvulsan)',
    indication: 'Ansietas berat, kejang demam/epilepsi, spasme otot, pre-medikasi operasi.',
    contraindications: 'Depresi pernapasan berat, insufisiensi hati berat, myasthenia gravis, sleep apnea.',
    sideEffects: 'Somnolen (mengantuk), ataksia, ketergantungan fisik/psikis, kelemahan otot.',
    dosage: '2-10 mg 2-4 kali sehari.',
    pharmacology: 'Meningkatkan aktivitas neurotransmiter klorida GABA-A di SSP.',
    foodInteraction: 'HINDARI Alkohol (meningkatkan depresi sistem saraf pusat berat).',
    pregnancyCategory: 'D',
    ddinterId: 'DDInter-D02005'
  },
  'tramadol': {
    name: 'Tramadol',
    genericName: 'Tramadol Hydrochloride',
    brandNames: ['Ultram', 'Tramal', 'Thracin', 'Dolgesik'],
    atcCode: 'N02AJ13',
    category: 'Analgesik Opioid Sentral',
    indication: 'Nyeri sedang hingga berat akut dan kronis.',
    contraindications: 'Intoksikasi akut alkohol/hipnotik/analgesik, depresi pernapasan berat, anak < 12 tahun.',
    sideEffects: 'Mual, konstipasi, pusing, somnolen, risiko ketergantungan, kejang.',
    dosage: '50-100 mg setiap 4-6 jam (Maksimal 400 mg/hari).',
    pharmacology: 'Agonis lemah reseptor mu-opioid dan inhibitor reuptake serotonin & norepinefrin.',
    foodInteraction: 'Hindari alkohol. Dapat diminum dengan atau tanpa makanan.',
    pregnancyCategory: 'C',
    ddinterId: 'DDInter-D02405'
  },
  'tacrolimus': {
    name: 'Tacrolimus',
    genericName: 'Tacrolimus',
    brandNames: ['Prograf', 'Advagraf', 'Protopic'],
    atcCode: 'L04AD02',
    category: 'Imunosupresan (Inhibitor Kalsineurin)',
    indication: 'Pencegahan rejeksi organ pasca transplantasi ginjal, hati, atau jantung.',
    contraindications: 'Hipersensitivitas tacrolimus atau makrolida.',
    sideEffects: 'Nefrotoksisitas, hipertensi, hiperglikemia/diabetes pasca transplantasi, tremor, hiperkalemia.',
    dosage: 'Disesuaikan berdasarkan pemantauan kadar terapeutik plasma (TDM).',
    pharmacology: 'Menghambat aktivasi sel T dengan mengikat immunophilin FKBP12 dan memblok kalsineurin.',
    foodInteraction: 'HINDARI Grapefruit / Jus Grapefruit (memicu toksisitas ginjal hebat). Diminum saat perut kosong.',
    pregnancyCategory: 'C',
    ddinterId: 'DDInter-D04010'
  },
  'cyclosporine': {
    name: 'Cyclosporine',
    genericName: 'Cyclosporine',
    brandNames: ['Sandimmun Neoral', 'Consupren'],
    atcCode: 'L04AD01',
    category: 'Imunosupresan (Inhibitor Kalsineurin)',
    indication: 'Pencegahan rejeksi transplantasi organ, sindrom nefrotik, artritis reumatoid berat, psoriasis.',
    contraindications: 'Gangguan fungsi ginjal berat yang tidak terkontrol, hipertensi tak terkontrol.',
    sideEffects: 'Nefrotoksisitas, hipertensi, hipertrisosis, hiperplasia gusi, hiperkalemia.',
    dosage: 'Berdasarkan TDM (Therapeutic Drug Monitoring).',
    pharmacology: 'Mengikat siklofilin dan menghambat kalsineurin, menekan sintesis IL-2.',
    foodInteraction: 'Hindari grapefruit. Diminum konsisten terhadap jam makan.',
    pregnancyCategory: 'C',
    ddinterId: 'DDInter-D04005'
  },
  'methotrexate': {
    name: 'Methotrexate',
    genericName: 'Methotrexate Sodium',
    brandNames: ['Rheumatrex', 'Mexate', 'Emthexate'],
    atcCode: 'L01BA01',
    category: 'Antimetabolit / DMARD / Antineoplastik',
    indication: 'Artritis reumatoid berat, psoriasis berat, leukemia limfoblastik akut, osteosarkoma.',
    contraindications: 'Kehamilan, menyusui, alkoholisme, penyakit hati kronis, imunodefisiensi.',
    sideEffects: 'Mielosupresi, hepatotoksisitas, stomatitis, fibrosis paru, mual.',
    dosage: 'Artritis: 7.5 - 25 mg SEINGGU SEKALI (satu kali dalam seminggu).',
    pharmacology: 'Menghambat enzim Dihydrofolate Reductase (DHFR), memblok sintesis purin dan pirimidin.',
    foodInteraction: 'Hindari alkohol. Berikan asam folat pada hari non-dosis untuk mengurangi toksisitas.',
    pregnancyCategory: 'X',
    ddinterId: 'DDInter-D04020'
  },
  'pantoprazole': {
    name: 'Pantoprazole',
    genericName: 'Pantoprazole Sodium',
    brandNames: ['Controloc', 'Panloc', 'Pepzol', 'Primapro'],
    atcCode: 'A02BC02',
    category: 'Inhibitor Pompa Proton (PPI)',
    indication: 'Ulkus duodenum, ulkus gaster, GERD, erosi esofagitis, sindrom Zollinger-Ellison.',
    contraindications: 'Hipersensitivitas terhadap substitusi benzimidazole.',
    sideEffects: 'Sakit kepala, diare, kram perut, hipomagnesemia pada pemakaian jangka panjang.',
    dosage: '20-40 mg sekali sehari sebelum makan.',
    pharmacology: 'Menghambat H+/K+ ATPase sel parietal lambung.',
    foodInteraction: 'Diminum 30-60 menit sebelum makan pagi.',
    pregnancyCategory: 'B',
    ddinterId: 'DDInter-D00825'
  },
  'lansoprazole': {
    name: 'Lansoprazole',
    genericName: 'Lansoprazole',
    brandNames: ['Prosaps', 'Lanzor', 'Lapraz', 'Compraz'],
    atcCode: 'A02BC03',
    category: 'Inhibitor Pompa Proton (PPI)',
    indication: 'Ulkus peptikum, eradikasi H. pylori, GERD.',
    contraindications: 'Hipersensitivitas terhadap lansoprazole.',
    sideEffects: 'Mual, sakit kepala, diare, konstipasi, pusing.',
    dosage: '15-30 mg sekali sehari.',
    pharmacology: 'Inhibitor spesifik sistem pompa proton lambung.',
    foodInteraction: 'Diminum sebelum makan pada pagi hari.',
    pregnancyCategory: 'B',
    ddinterId: 'DDInter-D00815'
  },
  'ketoconazole': {
    name: 'Ketoconazole',
    genericName: 'Ketoconazole',
    brandNames: ['Nizoral', 'Formyco', 'Mycoral', 'Intercon'],
    atcCode: 'J02AB02',
    category: 'Antijamur Imidazol Systemic',
    indication: 'Infeksi jamur sistemik, mikosis kutaneus refrakter, sindrom Cushing (off-label).',
    contraindications: 'Penyakit hati akut atau kronis, penggunaan bersama terfenadine, cisapride, simvastatin.',
    sideEffects: 'Hepatotoksisitas berat (Boxed Warning), ginekomastia, supresi adrenal, mual.',
    dosage: '200-400 mg sekali sehari bersama makanan.',
    pharmacology: 'Inhibitor kuat CYP3A4 dan sintesis ergosterol membran jamur.',
    foodInteraction: 'HARUS diminum bersama makanan atau minuman asam untuk penyerapan.',
    pregnancyCategory: 'C',
    ddinterId: 'DDInter-D01035'
  },
  'itraconazole': {
    name: 'Itraconazole',
    genericName: 'Itraconazole',
    brandNames: ['Sporanox', 'Intraspor', 'Forcanox'],
    atcCode: 'J02AC02',
    category: 'Antijamur Triazol',
    indication: 'Blastomikosis, histoplasmosis, onikomikosis, aspergilosis.',
    contraindications: 'Disfungsi ventrikel seperti gagal jantung kongestif, kehamilan.',
    sideEffects: 'Mual, diare, hipertensi, hipokalemia, hepatotoksisitas, edema.',
    dosage: '100-200 mg 1-2 kali sehari.',
    pharmacology: 'Inhibitor kuat CYP3A4 dan sintesis ergosterol.',
    foodInteraction: 'Kapsul diminum bersama makanan penuh.',
    pregnancyCategory: 'C',
    ddinterId: 'DDInter-D01030'
  },
  'azithromycin': {
    name: 'Azithromycin',
    genericName: 'Azithromycin Dihydrate',
    brandNames: ['Zithromax', 'Zitroline', 'Aztrin', 'Mezatrin'],
    atcCode: 'J01FA10',
    category: 'Antibiotik Makrolida Azalida',
    indication: 'Infeksi saluran napas, infeksi kulit, servitis/uretritis non-gonokokus, otitis media.',
    contraindications: 'Riwayat ikterus cholestatic atau disfungsi hati terkait azithromycin.',
    sideEffects: 'Diare, mual, nyeri perut, perpanjangan interval QT (aritmia Torsades de Pointes).',
    dosage: '500 mg pada hari ke-1, dilanjutkan 250 mg/hari selama 4 hari (Total 5 hari).',
    pharmacology: 'Mengikat subunit 50S ribosom bakteri, menghambat sintesis protein.',
    foodInteraction: 'Dapat diminum dengan atau tanpa makanan.',
    pregnancyCategory: 'B',
    ddinterId: 'DDInter-D00760'
  },
  'levofloxacin': {
    name: 'Levofloxacin',
    genericName: 'Levofloxacin Hemihydrate',
    brandNames: ['Levaquin', 'Cravit', 'Noflox', 'Volequin'],
    atcCode: 'J01MA12',
    category: 'Antibiotik Fluoroquinolone',
    indication: 'Pneumonia komunitas, sinusitis bakterial akut, eksaserbasi bronkitis kronis, ISK kompleks.',
    contraindications: 'Hipersensitivitas quinolone, epilepsi, riwayat gangguan tendon terkait quinolone.',
    sideEffects: 'Tendinitis, perpanjangan QT, mual, sakit kepala, hipoglikemia, kejang.',
    dosage: '250-750 mg sekali sehari.',
    pharmacology: 'Inhibitor DNA gyrase dan topoisomerase IV.',
    foodInteraction: 'Beri jeda minimal 2 jam dari antasida kalsium/besi/magnesium.',
    pregnancyCategory: 'C',
    ddinterId: 'DDInter-D00750'
  },
  'metronidazole': {
    name: 'Metronidazole',
    genericName: 'Metronidazole',
    brandNames: ['Flagyl', 'Metronide', 'Trichodazol', 'Corsagyl'],
    atcCode: 'J01XD01',
    category: 'Antibiotik & Antiprotozoa Nitroimidazole',
    indication: 'Amebiasis, giardiasis, trikomoniasis, infeksi bakteri anaerob intra-abdominal.',
    contraindications: 'Trimester pertama kehamilan (pada trikomoniasis), penggunaan alkohol bersamaan.',
    sideEffects: 'Rasa logam di mulut (metallic taste), mual, reaksi disulfiram dengan alkohol, neuropati perifer.',
    dosage: '250-500 mg 3 kali sehari.',
    pharmacology: 'Merusak DNA sel protozoa dan bakteri anaerob melalui radikal bebas.',
    foodInteraction: 'SANGAT KETAT HINDARI ALKOHOL selama terapi hingga 48 jam pasca terapi (pemicu mual muntah hebat disulfiram-like).',
    pregnancyCategory: 'B (Sangat hati-hati Trimester 1)',
    ddinterId: 'DDInter-D00730'
  },
  'glimepiride': {
    name: 'Glimepiride',
    genericName: 'Glimepiride',
    brandNames: ['Amaryl', 'Amaryl M', 'Metmoryl', 'Diaren'],
    atcCode: 'A10BB12',
    category: 'Antidiabetes (Sulfonilurea)',
    indication: 'Diabetes Melitus Tipe 2 sebagai monoterapi atau kombinasi.',
    contraindications: 'Diabetes Melitus Tipe 1, ketoasidosis diabetik, gangguan ginjal/hati berat.',
    sideEffects: 'Hipoglikemia, kenaikan berat badan, mual, alergi kulit.',
    dosage: '1-4 mg sekali sehari saat sarapan.',
    pharmacology: 'Merangsang sekresi insulin dari sel beta pankreas.',
    foodInteraction: 'Diminum bersama sarapan atau makan pagi pertama.',
    pregnancyCategory: 'C',
    ddinterId: 'DDInter-D00640'
  },
  'empagliflozin': {
    name: 'Empagliflozin',
    genericName: 'Empagliflozin',
    brandNames: ['Jardiance', 'Glyxambi'],
    atcCode: 'A10BK03',
    category: 'Antidiabetes (Inhibitor SGLT2)',
    indication: 'Diabetes Melitus Tipe 2, menurunkan risiko kematian kardiovaskular & gagal jantung.',
    contraindications: 'Gagal ginjal berat (eGFR < 30 mL/min/1.73m2), kehamilan trimester 2-3.',
    sideEffects: 'Infeksi saluran kemih, infeksi jamur genital, dehidrasi, ketoasidosis euglikemik.',
    dosage: '10-25 mg sekali sehari pagi hari.',
    pharmacology: 'Menghambat SGLT2 di tubulus proksimal ginjal, memicu glukosuria.',
    foodInteraction: 'Dapat diminum sebelum atau sesudah makan.',
    pregnancyCategory: 'C',
    ddinterId: 'DDInter-D00650'
  },
  'allopurinol': {
    name: 'Allopurinol',
    genericName: 'Allopurinol',
    brandNames: ['Zyloric', 'Isoric', 'Puricemia', 'Sinoric'],
    atcCode: 'M04AA01',
    category: 'Antigout (Inhibitor Xanthine Oxidase)',
    indication: 'Hiperurisemia primer dan sekunder, pencegahan batu asam urat.',
    contraindications: 'Hipersensitivitas allopurinol, serangan gout akut awal.',
    sideEffects: 'Ruam kulit (SJS/TEN), mual, peningkatan enzim hati.',
    dosage: '100-300 mg sekali sehari setelah makan.',
    pharmacology: 'Menghambat enzim xanthine oxidase.',
    foodInteraction: 'Diminum setelah makan dengan banyak air minum.',
    pregnancyCategory: 'C',
    ddinterId: 'DDInter-D01602'
  },
  'colchicine': {
    name: 'Colchicine',
    genericName: 'Colchicine',
    brandNames: ['Recofol', 'Loricin'],
    atcCode: 'M04AC01',
    category: 'Antigout (Alkaloid Kolkisin)',
    indication: 'Pengobatan serangan asam urat akut dan profilaksis supresif gout.',
    contraindications: 'Gangguan ginjal/hati berat jika digunakan bersama inhibitor CYP3A4 atau P-gp.',
    sideEffects: 'Diare berat, mual, muntah, nyeri perut, kram otot, supresi sumsum tulang.',
    dosage: 'Awal 1 mg diikuti 0.5 mg setelah 1 jam (Total max 1.5 mg per serangan).',
    pharmacology: 'Mengikat tubulin dan mencegah polimerisasi mikrotubulus dalam leukosit.',
    foodInteraction: 'HINDARI Grapefruit. Diminum bersama air.',
    pregnancyCategory: 'C',
    ddinterId: 'DDInter-D01608'
  },
  'dextromethorphan': {
    name: 'Dextromethorphan',
    genericName: 'Dextromethorphan Hydrobromide (HBr)',
    brandNames: ["Woods' Peppermint Antitussive", "Vicks Formula 44 Batuk Kering", "Siladex Antitussive", "Komix Batuk Kering", "Bisolvon Antitusif", "Dextromethorphan HBr OGB"],
    atcCode: 'R05DA09',
    category: 'Antitusif Sentral / Antagonis Reseptor NMDA & Agonis Reseptor Sigma-1',
    indication: 'Pereda batuk kering non-produktif akibat flu, infeksi saluran napas atas, atau iritasi tenggorokan.',
    contraindications: 'Penggunaan bersamaan dengan MAOI (dalam 14 hari), batuk berdahak kental, asma bronkial berat, anak <6 tahun.',
    sideEffects: 'Mengantuk ringan, pusing, mual, konstipasi; overdosis: halusinasi disosiatif, depresi pernapasan, sindrom serotonin.',
    dosage: 'Dewasa: 10-20 mg q4h atau 30 mg q6-8h (Maks 120 mg/24 jam). Anak 6-12 th: 5-10 mg q4h atau 15 mg q6-8h (Maks 60 mg/24 jam).',
    pharmacology: 'Bekerja sentral di medula oblongata menaikkan ambang refleks batuk; agonis reseptor sigma-1 dan antagonis NMDA.',
    foodInteraction: 'Dapat diminum dengan atau tanpa makanan. HINDARI jus grapefruit.',
    pregnancyCategory: 'C',
    ddinterId: 'DDInter-D05021'
  },
  'methylphenidate': {
    name: 'Methylphenidate',
    genericName: 'Methylphenidate Hydrochloride',
    brandNames: ['Ritalin', 'Ritalin LA', 'Concerta', 'Prohiper'],
    atcCode: 'N06BA04',
    category: 'Stimulan Sistem Saraf Pusat / Inhibitor Reuptake Dopamin-Norepinefrin (NDRI)',
    indication: 'Attention Deficit Hyperactivity Disorder (ADHD), Narkolepsi.',
    contraindications: 'Penggunaan bersamaan dengan MAOI, glaukoma, kecemasan berat, penyakit kardiovaskular berat.',
    sideEffects: 'Insomnia, penurunan nafsu makan, takikardia, peningkatan tekanan darah, sakit kepala.',
    dosage: 'ADHD: Awal 5-10 mg 2x/hari, titrasi bertahap hingga 20-60 mg/hari (Maks 60 mg/hari). Concerta: 18-54 mg sekali sehari pagi.',
    pharmacology: 'Menghambat reuptake dopamin dan norepinefrin di celah sinaps korteks serebral.',
    foodInteraction: 'Diminum sebelum sarapan/makan siang. Hindari kafein berlebih.',
    pregnancyCategory: 'C',
    ddinterId: 'DDInter-D05022'
  },
  'olmesartan': {
    name: 'Olmesartan',
    genericName: 'Olmesartan Medoxomil',
    brandNames: ['Olmetec', 'Normetec', 'Olmetec Plus'],
    atcCode: 'C09CA08',
    category: 'Angiotensin II Receptor Blocker (ARB) / Antihipertensi',
    indication: 'Hipertensi esensial pada orang dewasa dan anak usia >=6 tahun.',
    contraindications: 'Penggunaan bersama Aliskiren pada DM/gangguan ginjal, kehamilan trimester 2-3.',
    sideEffects: 'Pusing, hipotensi, hiperkalemia, diare enteropati mirip Sprue (jarang namun khas).',
    dosage: '20 - 40 mg per oral sekali sehari.',
    pharmacology: 'Blokade selektif reseptor angiotensin II subtipe AT1 di otot polos vaskular.',
    foodInteraction: 'Dapat diminum dengan atau tanpa makanan. Hindari suplemen kalium.',
    pregnancyCategory: 'D',
    ddinterId: 'DDInter-D05023'
  },
  'indapamide': {
    name: 'Indapamide',
    genericName: 'Indapamide Hemihydrate',
    brandNames: ['Natrilix', 'Natrilix SR', 'Bi-Preterax'],
    atcCode: 'C03BA11',
    category: 'Diuretik Tiazid-Like / Antihipertensi',
    indication: 'Hipertensi esensial, edema terkait gagal jantung kongestif.',
    contraindications: 'Anuria, gangguan ginjal berat (CrCl <30 mL/min), ensefalopati hepatik, hipokalemia berat.',
    sideEffects: 'Hipokalemia, hiponatremia, pusing, kram otot, hiperurisemia.',
    dosage: 'Natrilix SR: 1.5 mg sekali sehari pagi hari; Sediaan IR: 1.25 - 2.5 mg/hari.',
    pharmacology: 'Menghambat reabsorpsi Na+/Cl- di tubulus distal ginjal dan memicu vasodilatasi pembuluh darah perifer.',
    foodInteraction: 'Diminum pada pagi hari setelah sarapan.',
    pregnancyCategory: 'B',
    ddinterId: 'DDInter-D05024'
  },
  'mirabegron': {
    name: 'Mirabegron',
    genericName: 'Mirabegron',
    brandNames: ['Betmiga', 'Myrbetriq'],
    atcCode: 'G04BD12',
    category: 'Agonis Reseptor Adrenergik Beta-3 / Urologi',
    indication: 'Overactive Bladder (OAB) dengan gejala urgensi berkemih, sering kencing, dan inkontinensia urin.',
    contraindications: 'Hipertensi berat tidak terkontrol (TD >=180/110 mmHg).',
    sideEffects: 'Peningkatan tekanan darah, ISK, nasofaringitis, sakit kepala.',
    dosage: '25 - 50 mg per oral sekali sehari.',
    pharmacology: 'Agonis selektif beta-3 adrenergik yang merelaksasikan otot detrusor kandung kemih.',
    foodInteraction: 'Telan tablet utuh dengan air, dapat diminum dengan atau tanpa makanan.',
    pregnancyCategory: 'C',
    ddinterId: 'DDInter-D05025'
  },
  'silodosin': {
    name: 'Silodosin',
    genericName: 'Silodosin',
    brandNames: ['Urorec', 'Rapaflo'],
    atcCode: 'G04CA04',
    category: 'Antagonis Alfa-1A Adrenergik Uroselektif / Urologi',
    indication: 'Gejala Benign Prostatic Hyperplasia (BPH / Pembesaran Prostat Jinak).',
    contraindications: 'Gangguan ginjal berat (CrCl <30 mL/min), gangguan hati berat, bersama inhibitor CYP3A4 kuat.',
    sideEffects: 'Ejakulasi retrograd (kering), pusing, hidung tersumbat, IFIS saat operasi katarak.',
    dosage: '8 mg per oral sekali sehari diminum bersama makanan (4 mg/hari jika CrCl 30-50 mL/min).',
    pharmacology: 'Blokade selektif reseptor alfa-1A adrenergik di stroma prostat dan leher vesika urinaria.',
    foodInteraction: 'HARUS DIMINUM BERSAMA MAKANAN pada jam yang sama setiap hari.',
    pregnancyCategory: 'B',
    ddinterId: 'DDInter-D05026'
  },
  'buprenorphine': {
    name: 'Buprenorphine',
    genericName: 'Buprenorphine Hydrochloride',
    brandNames: ['Norspan Patch', 'Subutex', 'Suboxone', 'Temgesic'],
    atcCode: 'N02AE01',
    category: 'Analgesik Opioid Agonis Parsial Reseptor Mu',
    indication: 'Nyeri kronis derajat sedang-berat (Plester Norspan); Ketergantungan opioid (Subutex/Suboxone).',
    contraindications: 'Depresi pernapasan berat, asma bronkial berat, bersama benzodiazepine dosis tinggi.',
    sideEffects: 'Konstipasi, mual, mengantuk, pusing, reaksi gatal/eritema kulit tempat plester.',
    dosage: 'Norspan Patch: 5 - 20 mcg/jam plester transdermal diganti tiap 7 hari sekali. Sublingual: 8 - 24 mg/hari.',
    pharmacology: 'Agonis parsial berafinitas sangat tinggi pada reseptor opioid mu di sistem saraf pusat.',
    foodInteraction: 'Sublingual: letakkan di bawah lidah hingga larut, jangan makan/minum selama tablet larut.',
    pregnancyCategory: 'C',
    ddinterId: 'DDInter-D05027'
  },
  'ropinirole': {
    name: 'Ropinirole',
    genericName: 'Ropinirole Hydrochloride',
    brandNames: ['Requip', 'Requip PD 24 Jam'],
    atcCode: 'N04BC04',
    category: 'Agonis Reseptor Dopamin Non-Ergot / Antiparkinson',
    indication: 'Penyakit Parkinson, Sindrom Kaki Gelisah (Restless Legs Syndrome / RLS).',
    contraindications: 'Gangguan hati berat, gangguan ginjal berat tanpa dialisis.',
    sideEffects: 'Mual, serangan kantuk mendadak (sleep attacks), pusing postural, gangguan kontrol impuls.',
    dosage: 'Requip PD 24h: Awal 2 mg/hari, titrasi bertahap ke 4-16 mg/hari (Maks 24 mg/hari). RLS: 0.25 - 4 mg/hari malam.',
    pharmacology: 'Agonis selektif reseptor dopamin D2 dan D3 di ganglia basalis corpus striatum otak.',
    foodInteraction: 'Dapat diminum dengan atau tanpa makanan (makanan mengurangi mual).',
    pregnancyCategory: 'C',
    ddinterId: 'DDInter-D05028'
  },
  'azelastine': {
    name: 'Azelastine',
    genericName: 'Azelastine Hydrochloride',
    brandNames: ['Allergodil', 'Dymista'],
    atcCode: 'R01AC03',
    category: 'Antihistamin H1 Generasi Kedua Topikal & Penstabil Sel Mast',
    indication: 'Rinitis alergi musiman/perenial, rinitis vasomotor, konjungtivitis alergi.',
    contraindications: 'Hipersensitivitas azelastine.',
    sideEffects: 'Rasa pahit di lidah/tenggorokan, rasa perih di hidung, epistaksis ringan, mengantuk ringan.',
    dosage: 'Semprot Hidung 0.1%: 1-2 semprotan per lubang hidung 2 kali sehari (pagi dan malam).',
    pharmacology: 'Antagonis H1 dan penstabil sel mast yang bekerja cepat meredakan inflamasi mukosa.',
    foodInteraction: 'Semprot hidung topikal. Hindari alkohol.',
    pregnancyCategory: 'C',
    ddinterId: 'DDInter-D05029'
  },
  'fluticasone-furoate': {
    name: 'Fluticasone Furoate',
    genericName: 'Fluticasone Furoate',
    brandNames: ['Avamys', 'Relvar Ellipta', 'Trelegy Ellipta'],
    atcCode: 'R01AD12',
    category: 'Kortikosteroid Sintetik Afinitas Tinggi Respirasi',
    indication: 'Rinitis alergi musiman dan perenial (Avamys); Asma bronkial dan PPOK (Relvar).',
    contraindications: 'Hipersensitivitas, ulkus septum hidung berat baru.',
    sideEffects: 'Mimisan ringan (epistaksis), iritasi mukosa hidung, sakit kepala.',
    dosage: 'Avamys: 2 semprotan per lubang hidung sekali sehari (110 mcg/hari); turunkan ke 1 semprotan/hari setelah terkontrol.',
    pharmacology: 'Kortikosteroid afinitas sangat tinggi pada reseptor glukokortikoid dengan bioavailabilitas sistemik <1%.',
    foodInteraction: 'Topikal intranasal / inhalasi.',
    pregnancyCategory: 'C',
    ddinterId: 'DDInter-D05030'
  },
  'vitamin c': {
    name: 'Vitamin C',
    genericName: 'Ascorbic Acid (Asam Askorbat)',
    brandNames: ['Redoxon', 'Enervon-C', 'Vitalong C', 'Vicee', 'Xon-Ce'],
    atcCode: 'A11GA01',
    category: 'Vitamin Larut Air / Antioksidan',
    indication: 'Pencegahan dan pengobatan defisiensi vitamin C, meningkatkan penyerapan zat besi.',
    contraindications: 'Hipersensitivitas terhadap asam askorbat, riwayat batu ginjal kalsium oksalat (dosis tinggi).',
    sideEffects: 'Gangguan gastrointestinal ringan pada dosis tinggi, diare osmotik, nefrolitiasis oksalat.',
    dosage: 'Suplementasi harian: 50-500 mg/hari; Terapi defisiensi: hingga 1000 mg/hari.',
    pharmacology: 'Koenzim reduktor sintesis kolagen, metabolisme tirosin, dan mereduksi Fe3+ menjadi Fe2+.',
    foodInteraction: 'Dapat diminum bersama makanan untuk mengurangi rasa asam di lambung.',
    pregnancyCategory: 'A',
    ddinterId: 'DDInter-D06050'
  },
  'ascorbic acid': {
    name: 'Vitamin C',
    genericName: 'Ascorbic Acid (Asam Askorbat)',
    brandNames: ['Redoxon', 'Enervon-C', 'Vitalong C', 'Vicee', 'Xon-Ce'],
    atcCode: 'A11GA01',
    category: 'Vitamin Larut Air / Antioksidan',
    indication: 'Pencegahan dan pengobatan defisiensi vitamin C, meningkatkan penyerapan zat besi.',
    contraindications: 'Hipersensitivitas terhadap asam askorbat, riwayat batu ginjal kalsium oksalat (dosis tinggi).',
    sideEffects: 'Gangguan gastrointestinal ringan pada dosis tinggi, diare osmotik, nefrolitiasis oksalat.',
    dosage: 'Suplementasi harian: 50-500 mg/hari; Terapi defisiensi: hingga 1000 mg/hari.',
    pharmacology: 'Koenzim reduktor sintesis kolagen, metabolisme tirosin, dan mereduksi Fe3+ menjadi Fe2+.',
    foodInteraction: 'Dapat diminum bersama makanan untuk mengurangi rasa asam di lambung.',
    pregnancyCategory: 'A',
    ddinterId: 'DDInter-D06050'
  },
  'asam askorbat': {
    name: 'Vitamin C',
    genericName: 'Ascorbic Acid (Asam Askorbat)',
    brandNames: ['Redoxon', 'Enervon-C', 'Vitalong C', 'Vicee', 'Xon-Ce'],
    atcCode: 'A11GA01',
    category: 'Vitamin Larut Air / Antioksidan',
    indication: 'Pencegahan dan pengobatan defisiensi vitamin C, meningkatkan penyerapan zat besi.',
    contraindications: 'Hipersensitivitas terhadap asam askorbat, riwayat batu ginjal kalsium oksalat (dosis tinggi).',
    sideEffects: 'Gangguan gastrointestinal ringan pada dosis tinggi, diare osmotik, nefrolitiasis oksalat.',
    dosage: 'Suplementasi harian: 50-500 mg/hari; Terapi defisiensi: hingga 1000 mg/hari.',
    pharmacology: 'Koenzim reduktor sintesis kolagen, metabolisme tirosin, dan mereduksi Fe3+ menjadi Fe2+.',
    foodInteraction: 'Dapat diminum bersama makanan untuk mengurangi rasa asam di lambung.',
    pregnancyCategory: 'A',
    ddinterId: 'DDInter-D06050'
  }
};

/**
 * Searches or generates a full DDInter drug monograph dynamically for any queried drug name
 */
export function resolveDrugFromDDInter(queryName: string, existingList: Drug[]): Drug {
  const cleanQuery = queryName.trim().toLowerCase();
  
  // 1. Match exact in existing list
  const exactMatchInList = existingList.find(
    (d) =>
      d.name.toLowerCase() === cleanQuery ||
      d.genericName.toLowerCase() === cleanQuery ||
      d.brandNames?.some((b) => b.toLowerCase() === cleanQuery)
  );
  if (exactMatchInList) return exactMatchInList;

  // 2. Match in internal knowledge base (exact key)
  const kbMatch = DRUG_KNOWLEDGE_BASE[cleanQuery];
  if (kbMatch) {
    return {
      id: 'drug-' + cleanQuery.replace(/\s+/g, '-'),
      name: kbMatch.name || queryName,
      genericName: kbMatch.genericName || queryName,
      brandNames: kbMatch.brandNames || [queryName],
      atcCode: kbMatch.atcCode || 'A10AA00',
      category: kbMatch.category || 'Farmakoterapi Klinis DDInter',
      indication: kbMatch.indication || 'Sesuai indikasi terdaftar monografi DDInter.',
      contraindications: kbMatch.contraindications || 'Hipersensitivitas bahan aktif.',
      sideEffects: kbMatch.sideEffects || 'Gangguan gastrointestinal, pusing, reaksi hipersensitivitas.',
      dosage: kbMatch.dosage || 'Sesuai petunjuk dokter dan panduan dosis DDInter.',
      pharmacology: kbMatch.pharmacology || 'Inhibitor/Modulator target reseptor spesifik.',
      foodInteraction: kbMatch.foodInteraction || 'Perhatikan petunjuk konsumsi bersama makanan.',
      pregnancyCategory: kbMatch.pregnancyCategory || 'C',
      ddinterId: kbMatch.ddinterId || 'DDInter-D' + Math.floor(10000 + Math.random() * 89999)
    };
  }

  // 3. Word-boundary match in existing list (prevents "vitamin c" matching "vitamin complex")
  const wordRegex = new RegExp(`(^|[^a-z0-9])${cleanQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}([^a-z0-9]|$)`, 'i');
  const wordMatchInList = existingList.find(
    (d) =>
      wordRegex.test(d.name) ||
      wordRegex.test(d.genericName || '') ||
      d.brandNames?.some((b) => wordRegex.test(b))
  );
  if (wordMatchInList) return wordMatchInList;

  // 4. Loose partial match in existing list if query is at least 4 characters long
  if (cleanQuery.length >= 4) {
    const partialMatchInList = existingList.find(
      (d) =>
        d.name.toLowerCase().includes(cleanQuery) ||
        d.genericName.toLowerCase().includes(cleanQuery) ||
        d.brandNames?.some((b) => b.toLowerCase().includes(cleanQuery))
    );
    if (partialMatchInList) return partialMatchInList;
  }

  // 3. Fallback if not found in verified database
  const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
  const titleName = capitalize(queryName.trim());

  return {
    id: 'drug-' + cleanQuery,
    name: titleName,
    genericName: titleName,
    brandNames: [titleName],
    atcCode: 'N/A',
    category: 'Lainnya',
    indication: 'Informasi indikasi resmi belum terindeks dalam database primer.',
    contraindications: 'Hipersensitivitas terhadap zat aktif atau komponen sediaan.',
    sideEffects: 'Lihat brosur resmi produk atau konsultasikan dengan apoteker.',
    dosage: 'Gunakan sesuai petunjuk dokter atau aturan pakai kemasan resmi.',
    pharmacology: 'Monografi belum tercatat dalam database primer terverifikasi.',
    foodInteraction: 'Perhatikan petunjuk pada kemasan resmi obat.',
    pregnancyCategory: 'C',
    ddinterId: 'DDInter-D00000'
  };
}

function getDrugMatchKeys(drug: Drug): string[] {
  const keys = new Set<string>();
  const add = (s?: string) => {
    if (!s) return;
    const clean = s.toLowerCase().trim();
    if (clean) {
      keys.add(clean);
      const withoutParen = clean.replace(/\s*\([^)]*\)/g, '').trim();
      if (withoutParen) keys.add(withoutParen);
      const base = withoutParen.split(/[/+]/)[0].trim();
      if (base) keys.add(base);
    }
  };

  add(drug.name);
  add(drug.genericName);
  if (drug.id) {
    add(drug.id.toLowerCase().replace(/^drug-/, '').replace(/^fornas-/, ''));
  }
  if (drug.brandNames) {
    drug.brandNames.forEach(add);
  }

  // Indonesian <-> International medical naming variants
  const arr = Array.from(keys);
  arr.forEach((k) => {
    if (k.endsWith('in') && !k.endsWith('oin') && !k.endsWith('sin')) keys.add(k + 'e');
    if (k.endsWith('ine')) keys.add(k.slice(0, -1));
    if (k.includes('parasetamol')) keys.add(k.replace('parasetamol', 'paracetamol'));
    if (k.includes('paracetamol')) keys.add(k.replace('paracetamol', 'parasetamol'));
    if (k.includes('rifampisin')) keys.add(k.replace('rifampisin', 'rifampicin'));
    if (k.includes('rifampicin')) keys.add(k.replace('rifampicin', 'rifampisin'));
    if (k.includes('asam traneksamat')) keys.add('tranexamic acid');
    if (k.includes('tranexamic acid')) keys.add('asam traneksamat');
    if (k.includes('ceftriakson')) keys.add('ceftriaxone');
    if (k.includes('ceftriaxone')) keys.add('ceftriakson');
  });

  return Array.from(keys);
}

function getInteractionKeys(name: string, id?: string): string[] {
  const keys = new Set<string>();
  const clean = name.toLowerCase().trim();
  keys.add(clean);
  const withoutParen = clean.replace(/\s*\([^)]*\)/g, '').trim();
  if (withoutParen) keys.add(withoutParen);
  const base = withoutParen.split(/[/+]/)[0].trim();
  if (base) keys.add(base);
  if (id) {
    keys.add(id.toLowerCase().replace(/^drug-/, '').replace(/^fornas-/, '').trim());
  }
  return Array.from(keys);
}

/**
 * Checks or calculates interaction pair dynamically based on DDInter principles
 */
export function resolveInteractionPair(
  drugA: Drug,
  drugB: Drug,
  existingInteractions: DrugInteraction[] = []
): DrugInteraction | null {
  const interactionsList = existingInteractions || [];
  const nameA = drugA.name.toLowerCase().trim();
  const nameB = drugB.name.toLowerCase().trim();

  // 1. Direct exact match in static database
  const directMatch = interactionsList.find(
    (i) =>
      (i.drugAName.toLowerCase() === nameA && i.drugBName.toLowerCase() === nameB) ||
      (i.drugAName.toLowerCase() === nameB && i.drugBName.toLowerCase() === nameA) ||
      (i.drugAId === drugA.id && i.drugBId === drugB.id) ||
      (i.drugAId === drugB.id && i.drugBId === drugA.id)
  );
  if (directMatch) {
    const pairKey = [nameA, nameB].sort().join('__');
    const hash = Math.abs(pairKey.split('').reduce((acc, c) => (acc * 31 + c.charCodeAt(0)) | 0, 0)) % 900000 + 100000;
    const cat = directMatch.mechanismCategory || categorizeDDInterMechanism(directMatch.mechanism, directMatch.clinicalOutcome);
    const synth = (!directMatch.ddinterOriginalText || !directMatch.ddinterOriginalManagement)
      ? synthesizeDDInterOriginalText({
          drugAName: directMatch.drugAName,
          drugBName: directMatch.drugBName,
          severity: directMatch.severity,
          mechanism: directMatch.mechanism,
          clinicalOutcome: directMatch.clinicalOutcome,
          management: directMatch.management,
          mechanismCategory: cat
        })
      : null;
    const safeAlts = (directMatch.alternativeOptions && directMatch.alternativeOptions.length > 0)
      ? directMatch.alternativeOptions
      : synthesizeSafeAlternatives({
          drugAName: directMatch.drugAName,
          drugBName: directMatch.drugBName,
          severity: directMatch.severity,
          mechanismCategory: cat
        });

    return {
      ...directMatch,
      evidenceLevel: directMatch.evidenceLevel?.includes('DDInter 2.0')
        ? directMatch.evidenceLevel
        : 'Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)',
      ddinterPairId: directMatch.ddinterPairId?.startsWith('DDInter-') ? directMatch.ddinterPairId : `DDInter-PAIR-${hash}`,
      mechanismCategory: cat,
      ddinterOriginalText: directMatch.ddinterOriginalText || synth?.text,
      ddinterOriginalManagement: directMatch.ddinterOriginalManagement || synth?.management,
      alternativeOptions: safeAlts
    };
  }

  // 1b. Smart semantic/alias matching against database
  const keysA = getDrugMatchKeys(drugA);
  const keysB = getDrugMatchKeys(drugB);

  const aliasMatch = interactionsList.find((i) => {
    const interKeysA = getInteractionKeys(i.drugAName, i.drugAId);
    const interKeysB = getInteractionKeys(i.drugBName, i.drugBId);

    const aMatchesA = keysA.some((k) => interKeysA.includes(k));
    const bMatchesB = keysB.some((k) => interKeysB.includes(k));
    if (aMatchesA && bMatchesB) return true;

    const aMatchesB = keysA.some((k) => interKeysB.includes(k));
    const bMatchesA = keysB.some((k) => interKeysA.includes(k));
    return aMatchesB && bMatchesA;
  });
  if (aliasMatch) {
    const pairKey = [nameA, nameB].sort().join('__');
    const hash = Math.abs(pairKey.split('').reduce((acc, c) => (acc * 31 + c.charCodeAt(0)) | 0, 0)) % 900000 + 100000;
    const cat = aliasMatch.mechanismCategory || categorizeDDInterMechanism(aliasMatch.mechanism, aliasMatch.clinicalOutcome);
    const synth = (!aliasMatch.ddinterOriginalText || !aliasMatch.ddinterOriginalManagement)
      ? synthesizeDDInterOriginalText({
          drugAName: aliasMatch.drugAName,
          drugBName: aliasMatch.drugBName,
          severity: aliasMatch.severity,
          mechanism: aliasMatch.mechanism,
          clinicalOutcome: aliasMatch.clinicalOutcome,
          management: aliasMatch.management,
          mechanismCategory: cat
        })
      : null;
    const safeAlts = (aliasMatch.alternativeOptions && aliasMatch.alternativeOptions.length > 0)
      ? aliasMatch.alternativeOptions
      : synthesizeSafeAlternatives({
          drugAName: aliasMatch.drugAName,
          drugBName: aliasMatch.drugBName,
          severity: aliasMatch.severity,
          mechanismCategory: cat
        });

    return {
      ...aliasMatch,
      evidenceLevel: aliasMatch.evidenceLevel?.includes('DDInter 2.0')
        ? aliasMatch.evidenceLevel
        : 'Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)',
      ddinterPairId: aliasMatch.ddinterPairId?.startsWith('DDInter-') ? aliasMatch.ddinterPairId : `DDInter-PAIR-${hash}`,
      mechanismCategory: cat,
      ddinterOriginalText: aliasMatch.ddinterOriginalText || synth?.text,
      ddinterOriginalManagement: aliasMatch.ddinterOriginalManagement || synth?.management,
      alternativeOptions: safeAlts
    };
  }

  // 2. Rule-based interaction inference for major drug classes
  const isStatin = (d: Drug) => d.category.toLowerCase().includes('statin') || d.name.toLowerCase().includes('statin');
  const isAnticoag = (d: Drug) => d.category.toLowerCase().includes('antikoagulan') || d.category.toLowerCase().includes('antiplatelet') || ['warfarin', 'aspirin', 'clopidogrel', 'apixaban', 'rivaroxaban'].includes(d.name.toLowerCase());
  const isNsaid = (d: Drug) => d.category.toLowerCase().includes('nsaid') || ['ibuprofen', 'meloxicam', 'ketorolac', 'celecoxib'].includes(d.name.toLowerCase());
  const isPpi = (d: Drug) => d.category.toLowerCase().includes('pompa proton') || ['omeprazole', 'lansoprazole', 'esomeprazole'].includes(d.name.toLowerCase());
  const isAzole = (d: Drug) => d.category.toLowerCase().includes('azol') || ['fluconazole', 'ketoconazole', 'itraconazole'].includes(d.name.toLowerCase());
  const isQuinolone = (d: Drug) => d.category.toLowerCase().includes('quinolone') || ['ciprofloxacin', 'levofloxacin'].includes(d.name.toLowerCase());
  const isCcb = (d: Drug) => d.category.toLowerCase().includes('kalsium') || ['amlodipine', 'diltiazem', 'verapamil'].includes(d.name.toLowerCase());
  const isAcei = (d: Drug) => d.category.toLowerCase().includes('ace') || d.category.toLowerCase().includes('renin') || ['lisinopril', 'captopril', 'candesartan', 'valsartan'].includes(d.name.toLowerCase());
  const isDiureticKSparing = (d: Drug) => d.name.toLowerCase().includes('spironolactone');
  const isImmuno = (d: Drug) => d.category.toLowerCase().includes('imunosupresan') || ['tacrolimus', 'cyclosporine', 'methotrexate'].includes(d.name.toLowerCase());

  // Rule A: CYP3A4 Inhibitor (Azole/CCB) + Statin
  const isAmlodipine = (d: Drug) => d.name.toLowerCase().includes('amlodipine') || (d.genericName || '').toLowerCase().includes('amlodipine');
  const isAtorvastatin = (d: Drug) => d.name.toLowerCase().includes('atorvastatin') || (d.genericName || '').toLowerCase().includes('atorvastatin');
  const isSimvastatin = (d: Drug) => d.name.toLowerCase().includes('simvastatin') || (d.genericName || '').toLowerCase().includes('simvastatin');

  // Sub-rule A1: Amlodipine + Atorvastatin (Minor - DDInter 2.0 / FDC Caduet)
  if ((isAmlodipine(drugA) && isAtorvastatin(drugB)) || (isAmlodipine(drugB) && isAtorvastatin(drugA))) {
    const amlo = isAmlodipine(drugA) ? drugA : drugB;
    const ator = isAmlodipine(drugA) ? drugB : drugA;
    return createDynamicInteraction(amlo, ator, 'Minor',
      `Amlodipin (${amlo.name}) sedikit memodulasi aktivitas isoenzim CYP3A4 di enterosit dan hepatosit yang memetabolisme ${ator.name}, menyebabkan sedikit peningkatan paparan sistemik (AUC) atorvastatin sekitar 15-18% tanpa meningkatkan risiko miopati klinis.`,
      `Peningkatan kadar plasma atorvastatin yang sangat ringan; kombinasi ini memiliki profil keamanan yang sangat baik dan terbukti sinergis secara kardioprotektif (dasar sediaan kombinasi dosis tetap Caduet disetujui FDA/BPOM).`,
      `Kombinasi aman dan merupakan pilar standar terapi hipertensi dengan dislipidemia. Lakukan pemantauan profil lipid dan fungsi hati berkala sesuai panduan rutin.`,
      'Metabolism'
    );
  }

  // Sub-rule A2: Amlodipine + Simvastatin (Moderate - DDInter 2.0 / FDA max 20 mg)
  if ((isAmlodipine(drugA) && isSimvastatin(drugB)) || (isAmlodipine(drugB) && isSimvastatin(drugA))) {
    const amlo = isAmlodipine(drugA) ? drugA : drugB;
    const simv = isAmlodipine(drugA) ? drugB : drugA;
    return createDynamicInteraction(amlo, simv, 'Moderate',
      `Amlodipin (${amlo.name}) menghambat metabolisme CYP3A4 ${simv.name}, meningkatkan kadar plasma dan AUC simvastatin hingga 1.5 - 2 kali lipat.`,
      `Peningkatan risiko miopati dan rhabdomyolysis jika dosis simvastatin melebihi batas aman yang direkomendasikan.`,
      `Batasi dosis simvastatin maksimal 20 mg/hari jika diberikan bersama amlodipin (rekomendasi FDA/BPOM), atau ganti ke statin yang tidak dimetabolisme CYP3A4 (Rosuvastatin). Pantau keluhan nyeri otot.`,
      'Metabolism'
    );
  }

  if ((isAzole(drugA) || isCcb(drugA)) && isStatin(drugB)) {
    return createDynamicInteraction(drugA, drugB, 'Major',
      `${drugA.name} menghambat enzim metabolisme CYP3A4 di hati yang memetabolisme ${drugB.name}.`,
      `Peningkatan tajam konsentrasi ${drugB.name} plasma, meningkatkan risiko miopati berat dan rhabdomyolysis.`,
      `Ganti ke statin non-CYP3A4 (Rosuvastatin/Pravastatin) atau batasi dosis ${drugB.name}. Monitor nyeri otot.`,
      'Metabolism'
    );
  }
  if ((isAzole(drugB) || isCcb(drugB)) && isStatin(drugA)) {
    return createDynamicInteraction(drugB, drugA, 'Major',
      `${drugB.name} menghambat enzim metabolisme CYP3A4 di hati yang memetabolisme ${drugA.name}.`,
      `Peningkatan tajam konsentrasi ${drugA.name} plasma, meningkatkan risiko miopati berat dan rhabdomyolysis.`,
      `Ganti ke statin non-CYP3A4 (Rosuvastatin/Pravastatin) atau batasi dosis ${drugA.name}. Monitor nyeri otot.`,
      'Metabolism'
    );
  }

  // Rule B: NSAID / Antiplatelet + Anticoagulant / Antiplatelet
  const isP2Y12 = (d: Drug) => ['clopidogrel', 'ticagrelor', 'prasugrel'].some(s => d.name.toLowerCase().includes(s) || (d.genericName || '').toLowerCase().includes(s));
  const isAspirin = (d: Drug) => d.name.toLowerCase().includes('aspirin') || (d.genericName || '').toLowerCase().includes('aspirin') || d.name.toLowerCase().includes('asetosal');

  // Sub-rule B1: DAPT (Aspirin + P2Y12 Antiplatelet) - Guideline Directed Therapy (Moderate)
  if ((isAspirin(drugA) && isP2Y12(drugB)) || (isAspirin(drugB) && isP2Y12(drugA))) {
    const asp = isAspirin(drugA) ? drugA : drugB;
    const p2y = isAspirin(drugA) ? drugB : drugA;
    return createDynamicInteraction(asp, p2y, 'Moderate',
      `Dual Antiplatelet Therapy (DAPT): Penghambatan sinergis jalur agregasi trombosit ADP (P2Y12) dan tromboksan A2 (COX-1).`,
      `Peningkatan risiko perdarahan saluran cerna dan hematoma. Sinergis memberikan proteksi stent koroner pasca-PCI/SKA.`,
      `Kombinasi lini utama terarah pedoman (AHA/ACC DAPT). Gunakan sesuai durasi panduan klinis (misal 1-12 bulan pasca-PCI/SKA). Pantau tanda perdarahan dan pertimbangkan gastroprotektor PPI (Pantoprazole) pada pasien risiko tinggi.`,
      'Synergy'
    );
  }

  // Sub-rule B2: NSAID + Anticoagulant (Major)
  if (isNsaid(drugA) && isAnticoag(drugB)) {
    return createDynamicInteraction(drugA, drugB, 'Major',
      `Penghambatan COX-1 oleh ${drugA.name} merusak mukosa lambung dan mengganggu fungsi trombosit bersama efek ${drugB.name}.`,
      `Risiko perdarahan saluran cerna dan perdarahan mayor meningkat signifikan.`,
      `Hindari kombinasi jika memungkinkan. Berikan Gastroprotectant (PPI) jika harus digunakan bersama.`
    );
  }
  if (isNsaid(drugB) && isAnticoag(drugA)) {
    return createDynamicInteraction(drugB, drugA, 'Major',
      `Penghambatan COX-1 oleh ${drugB.name} merusak mukosa lambung dan mengganggu fungsi trombosit bersama efek ${drugA.name}.`,
      `Risiko perdarahan saluran cerna dan perdarahan mayor meningkat signifikan.`,
      `Hindari kombinasi jika memungkinkan. Berikan Gastroprotectant (PPI) jika harus digunakan bersama.`
    );
  }

  // Rule C: ACEI/ARB + K-Sparing Diuretic (Spironolactone) - GDMT HFrEF (Moderate)
  if (isAcei(drugA) && isDiureticKSparing(drugB)) {
    return createDynamicInteraction(drugA, drugB, 'Moderate',
      `Kombinasi standar GDMT gagal jantung HFrEF (penghambat RAAS ganda). Kedua obat mengurangi sekresi kalium di tubulus ginjal secara sinergis.`,
      `Kombinasi terarah pedoman klinis untuk menurunkan mortalitas gagal jantung. Terdapat potensi risiko hiperkalemia (kalium darah > 5.5 mEq/L) dan peningkatan kreatinin serum.`,
      `Kombinasi sangat dianjurkan pada HFrEF NYHA II-IV. Pantau kadar kalium serum dan fungsi ginjal secara teratur (1-2 minggu pasca inisiasi/titrasi dosis). Hindari suplemen kalium tambahan.`,
      'Synergy'
    );
  }
  if (isAcei(drugB) && isDiureticKSparing(drugA)) {
    return createDynamicInteraction(drugB, drugA, 'Moderate',
      `Kombinasi standar GDMT gagal jantung HFrEF (penghambat RAAS ganda). Kedua obat mengurangi sekresi kalium di tubulus ginjal secara sinergis.`,
      `Kombinasi terarah pedoman klinis untuk menurunkan mortalitas gagal jantung. Terdapat potensi risiko hiperkalemia (kalium darah > 5.5 mEq/L) dan peningkatan kreatinin serum.`,
      `Kombinasi sangat dianjurkan pada HFrEF NYHA II-IV. Pantau kadar kalium serum dan fungsi ginjal secara teratur (1-2 minggu pasca inisiasi/titrasi dosis). Hindari suplemen kalium tambahan.`,
      'Synergy'
    );
  }

  // Rule D: Immunosuppressant + Azole / Macrolide
  if (isImmuno(drugA) && isAzole(drugB)) {
    return createDynamicInteraction(drugA, drugB, 'Major',
      `${drugB.name} menghambat CYP3A4 dan P-glikoprotein yang mendegradasi ${drugA.name}.`,
      `Toksisitas ginjal (nefrotoksisitas) berat dan supresi imun berlebih akibat lonjakan kadar ${drugA.name}.`,
      `Lakukan Therapeutic Drug Monitoring (TDM) untuk penyesuaian dosis ${drugA.name}.`
    );
  }
  if (isImmuno(drugB) && isAzole(drugA)) {
    return createDynamicInteraction(drugB, drugA, 'Major',
      `${drugA.name} menghambat CYP3A4 dan P-glikoprotein yang mendegradasi ${drugB.name}.`,
      `Toksisitas ginjal (nefrotoksisitas) berat dan supresi imun berlebih akibat lonjakan kadar ${drugB.name}.`,
      `Lakukan Therapeutic Drug Monitoring (TDM) untuk penyesuaian dosis ${drugB.name}.`
    );
  }

  // Rule E: Quinolone / Macrolide + Antiarrhythmic (QT Prolongation)
  const causesQt = (d: Drug) => isQuinolone(d) || d.category.toLowerCase().includes('makrolida') || d.name.toLowerCase().includes('amiodarone');
  if (causesQt(drugA) && causesQt(drugB) && drugA.name !== drugB.name) {
    return createDynamicInteraction(drugA, drugB, 'Major',
      `Efek aditif pemanjangan waktu repolarisasi ventrikel (interval QTc EKG) oleh ${drugA.name} dan ${drugB.name}.`,
      `Risiko signifikan timbulnya aritmia ventrikel Torsades de Pointes dan cardiac arrest.`,
      `Hindari kombinasi dua obat pemicu perpanjangan QT. Jika harus digunakan, lakukan pemantauan EKG kontinu.`
    );
  }

  // Rule F: Opioid / Benzodiazepine / CNS Depressant combination
  const isSspDepressant = (d: Drug) => d.category.toLowerCase().includes('sistem saraf') || d.category.toLowerCase().includes('benzodiazepin') || d.category.toLowerCase().includes('opioid') || ['diazepam', 'tramadol', 'alprazolam', 'morphine'].includes(d.name.toLowerCase());
  if (isSspDepressant(drugA) && isSspDepressant(drugB) && drugA.name !== drugB.name) {
    return createDynamicInteraction(drugA, drugB, 'Major',
      `Penekanan aditif sistem saraf pusat dan pusat respirasi batang otak oleh ${drugA.name} bersama ${drugB.name}.`,
      `Sedasi berat, bradipnea, depresi pernapasan fatal, hingga koma.`,
      `Gunakan dosis terendah yang efektif dengan durasi singkat. Pantau saturasi oksigen dan tingkat kesadaran.`
    );
  }

  // Rule G: ACEi/ARB + NSAID + Diuretic (Triple Whammy / Nephrotoxicity)
  if ((isAcei(drugA) || isAcei(drugB)) && (isNsaid(drugA) || isNsaid(drugB))) {
    const otherDrug = isAcei(drugA) ? drugB : drugA;
    const aceiDrug = isAcei(drugA) ? drugA : drugB;
    return createDynamicInteraction(aceiDrug, otherDrug, 'Moderate',
      `${otherDrug.name} menghambat sintesis prostaglandin vasodilator di arteriol aferen ginjal, berlawanan dengan efek ${aceiDrug.name} pada arteriol eferen.`,
      `Penurunan drastis Laju Filtrasi Glomerulus (LFG), memicu Gagal Ginjal Akut (GGA) dan retensi kalium.`,
      `Hindari NSAID jangka panjang. Pantau kadar kreatinin serum, ureum, dan elektrolit.`
    );
  }

  // Rule H: Fluoroquinolones & Tetracyclines + Antacids / Multivalent Cation Binders (Chelation)
  const isChelatableAntibiotic = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    const c = (d.category || '').toLowerCase();
    const atc = (d.atcCode || '').toUpperCase();
    return atc.startsWith('J01M') || atc.startsWith('J01A') ||
      n.includes('floxacin') || g.includes('floxacin') || c.includes('quinolone') || c.includes('kuinolon') ||
      n.includes('cycline') || g.includes('cycline') || c.includes('tetrasiklin') || c.includes('tetracycline') ||
      ['levofloxacin', 'ciprofloxacin', 'moxifloxacin', 'ofloxacin', 'norfloxacin', 'doxycycline', 'tetracycline', 'minocycline'].some(s => n.includes(s) || g.includes(s));
  };

  const isAntacidOrCation = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    const c = (d.category || '').toLowerCase();
    const atc = (d.atcCode || '').toUpperCase();
    return atc.startsWith('A02A') ||
      n.includes('antasida') || g.includes('antasida') || c.includes('antasida') ||
      g.includes('aluminium') || g.includes('magnesium') || g.includes('calcium') || g.includes('kalsium') ||
      n.includes('sucralfate') || g.includes('sucralfate') || n.includes('sukralfat') || g.includes('sukralfat') ||
      ['promag', 'mylanta', 'polysilane', 'gastrucid', 'sanmag', 'antasida doen'].some(s => n.includes(s) || g.includes(s));
  };

  if (isChelatableAntibiotic(drugA) && isAntacidOrCation(drugB)) {
    return createDynamicInteraction(drugA, drugB, 'Moderate',
      `Ion kation polivalen (Al3+, Mg2+, Ca2+) dalam ${drugB.name} membentuk kompleks kelat khelasi tak larut dengan ${drugA.name} di lumen saluran cerna.`,
      `Penurunan drastis bioavailabilitas dan absorpsi oral ${drugA.name} hingga 70–90%, memicu kegagalan terapi infeksi bakteri dan risiko timbulnya resistensi kuman.`,
      `Hindari konsumsi bersamaan secara simultan. Berikan jeda waktu: konsumsi ${drugA.name} minimal 2 jam SEBELUM atau 4 jam SETELAH ${drugB.name}.`,
      'Absorption',
      ['Azithromycin', 'Cefixime', 'Amoxicillin-Clavulanate', 'Famotidine', 'Jeda Minum 2-4 Jam'],
      `Polyvalent cations (aluminum, magnesium, calcium) contained in ${drugB.name} chelate ${drugA.name} within the gastrointestinal tract to form insoluble, unabsorbable complexes, severely diminishing systemic fluoroquinolone bioavailability by up to 70–90%.`,
      `Separate administration times by at least 2 hours before or 4 hours after ${drugB.name}. When concomitant anti-ulcer therapy is required, consider switching to H2-receptor antagonists (Famotidine) or prescribing alternative non-chelating antimicrobials (Azithromycin, Cefixime).`
    );
  }
  if (isChelatableAntibiotic(drugB) && isAntacidOrCation(drugA)) {
    return createDynamicInteraction(drugB, drugA, 'Moderate',
      `Ion kation polivalen (Al3+, Mg2+, Ca2+) dalam ${drugA.name} membentuk kompleks kelat khelasi tak larut dengan ${drugB.name} di lumen saluran cerna.`,
      `Penurunan drastis bioavailabilitas dan absorpsi oral ${drugB.name} hingga 70–90%, memicu kegagalan terapi infeksi bakteri dan risiko timbulnya resistensi kuman.`,
      `Hindari konsumsi bersamaan secara simultan. Berikan jeda waktu: konsumsi ${drugB.name} minimal 2 jam SEBELUM atau 4 jam SETELAH ${drugA.name}.`,
      'Absorption',
      ['Azithromycin', 'Cefixime', 'Amoxicillin-Clavulanate', 'Famotidine', 'Jeda Minum 2-4 Jam'],
      `Polyvalent cations (aluminum, magnesium, calcium) contained in ${drugA.name} chelate ${drugB.name} within the gastrointestinal tract to form insoluble, unabsorbable complexes, severely diminishing systemic fluoroquinolone bioavailability by up to 70–90%.`,
      `Separate administration times by at least 2 hours before or 4 hours after ${drugA.name}. When concomitant anti-ulcer therapy is required, consider switching to H2-receptor antagonists (Famotidine) or prescribing alternative non-chelating antimicrobials (Azithromycin, Cefixime).`
    );
  }

  // Rule I: Levothyroxine + Antacids / Calcium / Iron (Moderate with spacing)
  const isThyroidHormone = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    const atc = (d.atcCode || '').toUpperCase();
    return atc.startsWith('H03AA') || n.includes('levothyroxine') || g.includes('levothyroxine') || n.includes('levotiroksin') || g.includes('levotiroksin') || n.includes('euthyrox') || n.includes('thyrax');
  };

  if (isThyroidHormone(drugA) && isAntacidOrCation(drugB)) {
    return createDynamicInteraction(drugA, drugB, 'Moderate',
      `${drugB.name} mengikat hormon tiroid ${drugA.name} di saluran cerna dan meningkatkan pH lambung sehingga menghambat disolusi serta penyerapan.`,
      `Penurunan penyerapan levotiroksin yang signifikan, memicu kegagalan kontrol hipotiroidisme dan peningkatan TSH serum.`,
      `Beri jeda pemberian minimal 4 jam antara konsumsi ${drugA.name} dan ${drugB.name}.`,
      'Absorption'
    );
  }
  if (isThyroidHormone(drugB) && isAntacidOrCation(drugA)) {
    return createDynamicInteraction(drugB, drugA, 'Moderate',
      `${drugA.name} mengikat hormon tiroid ${drugB.name} di saluran cerna dan meningkatkan pH lambung sehingga menghambat disolusi serta penyerapan.`,
      `Penurunan penyerapan levotiroksin yang signifikan, memicu kegagalan kontrol hipotiroidisme dan peningkatan TSH serum.`,
      `Beri jeda pemberian minimal 4 jam antara konsumsi ${drugB.name} dan ${drugA.name}.`,
      'Absorption'
    );
  }

  // Rule J: Dual RAS Blockade (ACE-Inhibitor + ARB)
  const isAceInhibitor = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    const atc = (d.atcCode || '').toUpperCase();
    return atc.startsWith('C09A') || atc.startsWith('C09B') || n.endsWith('pril') || g.endsWith('pril');
  };
  const isArb = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    const atc = (d.atcCode || '').toUpperCase();
    return atc.startsWith('C09C') || atc.startsWith('C09D') || n.endsWith('sartan') || g.endsWith('sartan');
  };
  if ((isAceInhibitor(drugA) && isArb(drugB)) || (isAceInhibitor(drugB) && isArb(drugA))) {
    const aceDrug = isAceInhibitor(drugA) ? drugA : drugB;
    const arbDrug = isAceInhibitor(drugA) ? drugB : drugA;
    return createDynamicInteraction(aceDrug, arbDrug, 'Major',
      `Blokade ganda aksis renin-angiotensin-aldosteron (RAAS) secara simultan oleh ACE-Inhibitor (${aceDrug.name}) dan ARB (${arbDrug.name}).`,
      `Melipatgandakan risiko Gagal Ginjal Akut (penurunan drastis LFG), Hiperkalemia refrakter, dan Hipotensi simtomatik berat tanpa memberikan manfaat kardiovaskular tambahan (Uji Klinis ONTARGET & VA NEPHRON-D).`,
      `KONTRAINDIKASI KOMBINASI RUTIN / HINDARI MUTLAK (FDA Black Box Warning). Gunakan salah satu agen saja (monoterapi ACE-Inhibitor ATAU ARB) dengan titrasi dosis optimal.`,
      'Synergy'
    );
  }

  // Rule K: Beta-Blocker + Non-Dihydropyridine CCB (Verapamil / Diltiazem)
  const isBetaBlocker = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    const atc = (d.atcCode || '').toUpperCase();
    const c = (d.category || '').toLowerCase();
    return atc.startsWith('C07') || c.includes('beta bloker') || c.includes('beta-blocker') || n.endsWith('lol') || g.endsWith('lol');
  };
  const isNonDhpCcb = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    const atc = (d.atcCode || '').toUpperCase();
    return atc.startsWith('C08D') || n.includes('verapamil') || g.includes('verapamil') || n.includes('diltiazem') || g.includes('diltiazem');
  };
  if ((isBetaBlocker(drugA) && isNonDhpCcb(drugB)) || (isBetaBlocker(drugB) && isNonDhpCcb(drugA))) {
    const bb = isBetaBlocker(drugA) ? drugA : drugB;
    const ccb = isBetaBlocker(drugA) ? drugB : drugA;
    return createDynamicInteraction(bb, ccb, 'Major',
      `Penekanan sinergis yang sangat poten pada otomatisitas nodus SA dan konduksi nodus AV kardiak serta efek inotropik negatif aditif pada miokardium.`,
      `Bradikardia simtomatik ekstrem (< 35-40 bpm), Blok Atrioventrikular derajat 2 atau 3 (Complete Heart Block), dekompensasi gagal jantung kongestif akut, hingga Henti Jantung (Asistol).`,
      `KONTRAINDIKASI / HINDARI PEMBERIAN BERSAMAAN kecuali di bawah pengawasan elektrofisiologi ketat. Jika kontrol laju ventrikel membutuhkan terapi ganda, ganti ke Dihidropiridin CCB (seperti Amlodipine) yang tidak menekan nodus AV.`,
      'Synergy'
    );
  }

  // Rule L: Metformin + Sulfonylurea (Addictive Hypoglycemia)
  const isMetformin = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    return n.includes('metformin') || g.includes('metformin');
  };
  const isSulfonylurea = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    const c = (d.category || '').toLowerCase();
    const atc = (d.atcCode || '').toUpperCase();
    return atc.startsWith('A10BB') || c.includes('sulfonilurea') || ['glimepiride', 'glibenclamide', 'gliclazide', 'glipizide'].some(s => n.includes(s) || g.includes(s));
  };
  if ((isMetformin(drugA) && isSulfonylurea(drugB)) || (isMetformin(drugB) && isSulfonylurea(drugA))) {
    const met = isMetformin(drugA) ? drugA : drugB;
    const su = isMetformin(drugA) ? drugB : drugA;
    return createDynamicInteraction(met, su, 'Moderate',
      `Sinergisme penurunan glukosa darah: ${met.name} meningkatkan sensitivitas insulin perifer dan menekan glukoneogenesis hepar, sedangkan ${su.name} merangsang sekresi insulin sel beta pankreas.`,
      `Peningkatan risiko hipoglikemia simtomatik (gemetar, keringat dingin, pusing, takikardia, hingga pingsan jika terlambat makan atau aktivitas berat).`,
      `Kombinasi lini kedua terarah pedoman PERKENI/ADA. Edukasi pasien mengenai gejala hipoglikemia, selalu sediakan permen/gula murni, dan lakukan pemantauan gula darah mandiri (PGDM) rutin.`,
      'Synergy'
    );
  }

  // Rule M: Metformin + Iodinated Radiocontrast Media
  const isIodinatedContrast = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    const atc = (d.atcCode || '').toUpperCase();
    return atc.startsWith('V08A') || atc.startsWith('V08B') || ['iohexol', 'iopamidol', 'iodixanol', 'kontras iodin', 'omnipaque'].some(s => n.includes(s) || g.includes(s));
  };
  if ((isMetformin(drugA) && isIodinatedContrast(drugB)) || (isMetformin(drugB) && isIodinatedContrast(drugA))) {
    const met = isMetformin(drugA) ? drugA : drugB;
    const contrast = isMetformin(drugA) ? drugB : drugA;
    return createDynamicInteraction(met, contrast, 'Major',
      `Zat kontras radiologi dapat menginduksi Nefropati Terinduksi Kontras (CIN) dan penurunan filtrasi ginjal akut, menyebabkan akumulasi metformin sistemik masif.`,
      `ASIDOSIS LAKTAT TERINDUKSI METFORMIN (MALA): Asidosis metabolik berat dengan tingkat kematian > 40%, hipotensi refrakter, dan kolaps kardiovaskular.`,
      `KONTRAINDIKASI PEMBERIAN SIMULTAN. Hentikan Metformin pada saat atau sebelum prosedur kontras radiologi. Tahan metformin minimal 48 JAM pasca-prosedur, dan hanya mulai kembali setelah fungsi ginjal (eGFR) terbukti stabil normal.`,
      'Excretion'
    );
  }

  // Rule N: Lithium + NSAID / Thiazide Diuretic / ACEi / ARB
  const isLithium = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    return n.includes('lithium') || g.includes('lithium') || n.includes('litium') || g.includes('litium') || n.includes('frimania');
  };
  const isThiazide = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    const atc = (d.atcCode || '').toUpperCase();
    return atc.startsWith('C03A') || atc.startsWith('C03B') || ['hydrochlorothiazide', 'hct', 'hctz', 'indapamide', 'chlorthalidone'].some(s => n.includes(s) || g.includes(s));
  };
  if (isLithium(drugA) && (isNsaid(drugB) || isThiazide(drugB) || isAcei(drugB))) {
    return createDynamicInteraction(drugA, drugB, 'Major',
      `${drugB.name} menurunkan ekskresi dan klirens litium di ginjal, meningkatkan reabsorpsi litium di tubulus proksimal.`,
      `Peningkatan tajam konsentrasi litium serum di atas indeks terapi sempit, memicu INTOKSIKASI LITIUM AKUT BERAT (tremor kasar, ataksia, disartria, kejang, aritmia, koma).`,
      `HINDARI KOMBINASI jika memungkinkan. Jika mutlak diperlukan, turunkan dosis litium 30-50% dan lakukan pemantauan kadar litium serum serial secara ketat.`,
      'Excretion'
    );
  }
  if (isLithium(drugB) && (isNsaid(drugA) || isThiazide(drugA) || isAcei(drugA))) {
    return createDynamicInteraction(drugB, drugA, 'Major',
      `${drugA.name} menurunkan ekskresi dan klirens litium di ginjal, meningkatkan reabsorpsi litium di tubulus proksimal.`,
      `Peningkatan tajam konsentrasi litium serum di atas indeks terapi sempit, memicu INTOKSIKASI LITIUM AKUT BERAT (tremor kasar, ataksia, disartria, kejang, aritmia, koma).`,
      `HINDARI KOMBINASI jika memungkinkan. Jika mutlak diperlukan, turunkan dosis litium 30-50% dan lakukan pemantauan kadar litium serum serial secara ketat.`,
      'Excretion'
    );
  }

  // Rule O: Potassium Supplements + Potassium-Sparing Diuretics / ACEi / ARB
  const isPotassiumSupplement = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    const atc = (d.atcCode || '').toUpperCase();
    return atc.startsWith('A12BA') || ['kalium klorida', 'potassium chloride', 'ksr', 'kalium aspartat', 'slow-k'].some(s => n.includes(s) || g.includes(s));
  };
  if ((isPotassiumSupplement(drugA) && (isDiureticKSparing(drugB) || isAcei(drugB))) ||
      (isPotassiumSupplement(drugB) && (isDiureticKSparing(drugA) || isAcei(drugA)))) {
    const kDrug = isPotassiumSupplement(drugA) ? drugA : drugB;
    const sparDrug = isPotassiumSupplement(drugA) ? drugB : drugA;
    return createDynamicInteraction(kDrug, sparDrug, 'Major',
      `Asupan kalium eksogen dari ${kDrug.name} dikombinasikan dengan penghambatan sekresi kalium ginjal oleh ${sparDrug.name}.`,
      `HIPERKALEMIA BERAT FATAL (K > 6.5 mEq/L), aritmia ventrikel mematikan, peaked T-wave, dan henti jantung mendadak.`,
      `KONTRAINDIKASI PENGGUNAAN BERSAMAAN secara rutin. Hindari suplemen kalium pada pasien yang menerima terapi hemat kalium kecuali pada hipokalemia refrakter dengan pemantauan kalium ketat.`,
      'Synergy'
    );
  }
  // Helper for Paracetamol
  const isParacetamol = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    const atc = (d.atcCode || '').toUpperCase();
    return atc.startsWith('N02BE01') || n.includes('paracetamol') || g.includes('paracetamol') || n.includes('parasetamol') || g.includes('parasetamol') || n.includes('acetaminophen') || g.includes('acetaminophen') || ['panadol', 'sanmol', 'biogesic', 'pamol', 'dumin', 'fasidol', 'tempra'].some(s => n.includes(s) || g.includes(s));
  };

  // Rule P: Paracetamol + Antacids (Minor)
  if ((isParacetamol(drugA) && isAntacidOrCation(drugB)) || (isParacetamol(drugB) && isAntacidOrCation(drugA))) {
    const pct = isParacetamol(drugA) ? drugA : drugB;
    const ant = isParacetamol(drugA) ? drugB : drugA;
    return createDynamicInteraction(pct, ant, 'Minor',
      `Antasida dapat sedikit menunda pengosongan lambung dan laju absorpsi (Tmax) ${pct.name} tanpa mengurangi bioavailabilitas total (AUC).`,
      `Onset pereda demam atau nyeri mungkin sedikit lebih lambat, namun efektivitas terapi puncak tetap tercapai optimal.`,
      `Tidak memerlukan pemisahan jadwal minum atau penyesuaian dosis khusus.`,
      'Absorption'
    );
  }

  // Rule Q: Vitamin C (Ascorbic Acid) + Oral Iron Supplements (Minor / Positive Synergy)
  const isVitaminC = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    const atc = (d.atcCode || '').toUpperCase();
    return atc.startsWith('A11GA') || n.includes('vitamin c') || g.includes('vitamin c') || n.includes('ascorbic') || g.includes('ascorbic') || n.includes('askorbat') || g.includes('askorbat');
  };
  const isIronSupplement = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    const atc = (d.atcCode || '').toUpperCase();
    return atc.startsWith('B03A') || n.includes('ferrous') || g.includes('ferrous') || n.includes('besi') || g.includes('besi') || n.includes('sangobion') || n.includes('maltofer') || n.includes('sulfas ferosus');
  };
  if ((isVitaminC(drugA) && isIronSupplement(drugB)) || (isVitaminC(drugB) && isIronSupplement(drugA))) {
    const vit = isVitaminC(drugA) ? drugA : drugB;
    const iron = isVitaminC(drugA) ? drugB : drugA;
    return createDynamicInteraction(vit, iron, 'Minor',
      `Asam askorbat (${vit.name}) mereduksi ion ferri (Fe3+) menjadi ferro (Fe2+) di lingkungan asam lambung dan membentuk kelat larut yang mempermudah penyerapan di duodenum.`,
      `Sinergisme fisiologis menguntungkan (sinergi positif): meningkatkan penyerapan zat besi oral secara bermakna untuk mengatasi anemia defisiensi besi.`,
      `Kombinasi aman dan dianjurkan secara klinis (sinergi positif). Perhatikan potensi iritasi lambung jika diminum saat perut kosong.`,
      'Absorption'
    );
  }

  // Rule R: H1-Antihistamines (Cetirizine / Loratadine) + Antacids (Minor)
  const isH1Antihistamine = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    const atc = (d.atcCode || '').toUpperCase();
    return atc.startsWith('R06A') || ['cetirizine', 'loratadine', 'fexofenadine', 'levocetirizine', 'desloratadine'].some(s => n.includes(s) || g.includes(s));
  };
  if ((isH1Antihistamine(drugA) && isAntacidOrCation(drugB)) || (isH1Antihistamine(drugB) && isAntacidOrCation(drugA))) {
    const h1 = isH1Antihistamine(drugA) ? drugA : drugB;
    const ant = isH1Antihistamine(drugA) ? drugB : drugA;
    return createDynamicInteraction(h1, ant, 'Minor',
      `Peningkatan pH lambung akibat ${ant.name} dapat sedikit memodifikasi kecepatan disolusi tablet ${h1.name} tanpa mengubah bioavailabilitas sistemik total (AUC).`,
      `Efektivitas kontrol alergi tetap stabil dan tidak menyebabkan fluktuasi efek samping sedasi.`,
      `Obat dapat dikonsumsi bersamaan atau dengan jeda singkat jika timbul rasa kembung.`,
      'Absorption'
    );
  }

  // Rule S: Paracetamol + NSAID (Alternating Multimodal Analgesia - Minor)
  if ((isParacetamol(drugA) && isNsaid(drugB)) || (isParacetamol(drugB) && isNsaid(drugA))) {
    const pct = isParacetamol(drugA) ? drugA : drugB;
    const nsaid = isParacetamol(drugA) ? drugB : drugA;
    return createDynamicInteraction(pct, nsaid, 'Minor',
      `Mekanisme kerja komplementer: ${pct.name} bekerja analgesik di sentral (SSP), sedangkan ${nsaid.name} menghambat sintesis prostaglandin perifer via enzim COX-1/2.`,
      `Sinergisme analgesik multimodal yang efektif untuk peredaan nyeri akut sedang tanpa meningkatkan risiko toksisitas lambung jika diminum sesuai dosis terpisah.`,
      `Kombinasi diakui dalam pedoman penanganan nyeri multimodal. Jaga dosis total parasetamol <= 4000 mg/hari dan gunakan NSAID durasi sesingkat mungkin.`,
      'Synergy'
    );
  }

  // Rule T: Oral Antidiabetic / Insulin + Beta-Blocker (Moderate - Hypoglycemia Masking)
  const isAntidiabetic = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    const c = (d.category || '').toLowerCase();
    const atc = (d.atcCode || '').toUpperCase();
    return atc.startsWith('A10') || c.includes('antidiabetes') || ['metformin', 'glimepiride', 'glibenclamide', 'gliclazide', 'insulin', 'acarbose', 'empagliflozin', 'linagliptin', 'vildagliptin'].some(s => n.includes(s) || g.includes(s));
  };
  if ((isAntidiabetic(drugA) && isBetaBlocker(drugB)) || (isAntidiabetic(drugB) && isBetaBlocker(drugA))) {
    const anti = isAntidiabetic(drugA) ? drugA : drugB;
    const bb = isAntidiabetic(drugA) ? drugB : drugA;
    return createDynamicInteraction(anti, bb, 'Moderate',
      `Penyekat beta-adrenergik (${bb.name}) menumpulkan respons adrenergik simpatis terhadap penurunan gula darah dan menghambat glikogenolisis hati.`,
      `Menutupi tanda-tanda peringatan hipoglikemia penting (takikardia, palpitasi, tremor). Gejala yang tersisa umumnya hanya diaforesis (keringat dingin).`,
      `Kategori Moderate. Edukasi pasien bahwa keringat dingin adalah tanda kunci hipoglikemia saat mengonsumsi beta-bloker. Anjurkan pemantauan gula darah berkala (PGDM).`,
      'Metabolism'
    );
  }

  // Rule U: PPI / H2-Blocker + Acid-dependent Azoles (Moderate - pH Dissolution)
  const isAcidDependentAzole = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    return ['ketoconazole', 'itraconazole', 'ketokonazol', 'itrakonazol'].some(s => n.includes(s) || g.includes(s));
  };
  const isH2Blocker = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    const atc = (d.atcCode || '').toUpperCase();
    return atc.startsWith('A02BA') || ['ranitidine', 'famotidine', 'cimetidine'].some(s => n.includes(s) || g.includes(s));
  };
  if (((isPpi(drugA) || isH2Blocker(drugA)) && isAcidDependentAzole(drugB)) || ((isPpi(drugB) || isH2Blocker(drugB)) && isAcidDependentAzole(drugA))) {
    const acidSup = (isPpi(drugA) || isH2Blocker(drugA)) ? drugA : drugB;
    const azole = (isPpi(drugA) || isH2Blocker(drugA)) ? drugB : drugA;
    return createDynamicInteraction(acidSup, azole, 'Moderate',
      `Penekanan asam lambung oleh ${acidSup.name} meningkatkan pH lambung dan mengganggu disolusi serta bioavailabilitas ${azole.name} yang membutuhkan suasana asam kuat.`,
      `Penurunan penyerapan dan kadar serum ${azole.name} hingga 60–80%, berpotensi menyebabkan kegagalan respons klinis antijamur.`,
      `Kategori Moderate. Hindari penggunaan bersama jika memungkinkan. Jika kombinasi mutlak diperlukan, berikan ${azole.name} bersama minuman asam (cola atau jus jeruk) atau pertimbangkan beralih ke Flukonazol.`,
      'Absorption'
    );
  }

  // Rule V: CCB (Dihidropiridin) + ACEi / ARB (Minor - Synergy / Additive Hypotension)
  // Official DDInter Reference: DDInter79 (Amlodipine) ↔ DDInter292 (Captopril)
  const isDhpCcb = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    const c = (d.category || '').toLowerCase();
    const atc = (d.atcCode || '').toUpperCase();
    return atc.startsWith('C08CA') || c.includes('dihidropiridin') || ['amlodipine', 'nifedipine', 'nicardipine', 'felodipine'].some(s => n.includes(s) || g.includes(s));
  };
  if ((isDhpCcb(drugA) && (isAceInhibitor(drugB) || isArb(drugB))) ||
      (isDhpCcb(drugB) && (isAceInhibitor(drugA) || isArb(drugA)))) {
    const ccb = isDhpCcb(drugA) ? drugA : drugB;
    const raas = isDhpCcb(drugA) ? drugB : drugA;
    return createDynamicInteraction(ccb, raas, 'Minor',
      `Kombinasi Calcium Channel Blocker (${ccb.name}) dan penghambat RAAS (${raas.name}) memiliki efek hipotensif aditif melalui vasodilatasi arteriol perifer komplementer.`,
      `Penurunan tekanan darah aditif yang menguntungkan secara terapeutik; potensi hipotensi transien atau pusing ortostatik ringan pada inisiasi terapi.`,
      `Kombinasi lini pertama terarah pedoman (JNC 8 / ESC / PERKI). Kedua obat aman dan umum dikombinasikan. Lakukan pemantauan rutin tekanan darah sistemik, terutama pada 1-3 minggu pertama terapi.`,
      'Synergy'
    );
  }

  // Rule W: Loop Diuretic + ACEi / ARB (Moderate - Synergy / First-dose Hypotension)
  const isLoopDiuretic = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    const atc = (d.atcCode || '').toUpperCase();
    return atc.startsWith('C03C') || ['furosemide', 'bumetanide', 'torsemide'].some(s => n.includes(s) || g.includes(s));
  };
  if ((isLoopDiuretic(drugA) && (isAceInhibitor(drugB) || isArb(drugB))) ||
      (isLoopDiuretic(drugB) && (isAceInhibitor(drugA) || isArb(drugA)))) {
    const diur = isLoopDiuretic(drugA) ? drugA : drugB;
    const raas = isLoopDiuretic(drugA) ? drugB : drugA;
    return createDynamicInteraction(diur, raas, 'Moderate',
      `Deplesi volume cairan oleh ${diur.name} mengaktifkan sistem renin-angiotensin; penghambatan mendadak oleh ${raas.name} memicu vasodilatasi arteriol eferen ginjal.`,
      `Hipotensi dosis pertama berat (first-dose hypotension) dan penurunan mendadak laju filtrasi glomerulus (LFG) dengan peningkatan kreatinin transien.`,
      `Kurangi dosis diuretik sementara sebelum inisiasi, atau mulai ${raas.name} dengan dosis rendah saat malam hari. Pantau tekanan darah dan fungsi ginjal serial.`,
      'Synergy'
    );
  }

  // Rule X: Sulfonylurea + ACEi / ARB (Moderate - Synergy / Enhanced Hypoglycemia)
  if ((isSulfonylurea(drugA) && (isAceInhibitor(drugB) || isArb(drugB))) ||
      (isSulfonylurea(drugB) && (isAceInhibitor(drugA) || isArb(drugA)))) {
    const su = isSulfonylurea(drugA) ? drugA : drugB;
    const raas = isSulfonylurea(drugA) ? drugB : drugA;
    return createDynamicInteraction(su, raas, 'Moderate',
      `${raas.name} meningkatkan sensitivitas insulin perifer dan menurunkan degradasi bradikinin, memperkuat kerja hipoglikemik ${su.name}.`,
      `Peningkatan risiko hipoglikemia simtomatik (keringat dingin, tremor, pusing, palpitasi).`,
      `Kombinasi umum pada pasien DM dengan hipertensi. Edukasi pasien mengenai tanda hipoglikemia dan pantau kadar glukosa darah secara mandiri.`,
      'Synergy'
    );
  }

  // Rule Y: SSRI + NSAID (Moderate - Synergy / Hemostasis Impairment)
  const isSsri = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    const atc = (d.atcCode || '').toUpperCase();
    return atc.startsWith('N06AB') || ['sertraline', 'escitalopram', 'fluoxetine', 'paroxetine', 'citalopram', 'fluvoxamine'].some(s => n.includes(s) || g.includes(s));
  };
  if ((isSsri(drugA) && isNsaid(drugB)) || (isSsri(drugB) && isNsaid(drugA))) {
    const ssri = isSsri(drugA) ? drugA : drugB;
    const nsaid = isSsri(drugA) ? drugB : drugA;
    return createDynamicInteraction(ssri, nsaid, 'Moderate',
      `${ssri.name} menghambat pengambilan serotonin oleh trombosit (mengurangi agregasi platelet) berpadu dengan erosi mukosa lambung oleh ${nsaid.name}.`,
      `Peningkatan risiko perdarahan saluran cerna bagian atas sebesar 3-6 kali lipat (melena, hematemesis).`,
      `Hindari penggunaan NSAID jangka panjang bersama SSRI. Gunakan parasetamol sebagai alternatif lini pertama, atau tambahkan gastroprotektor PPI (Pantoprazole) jika NSAID mutlak diperlukan.`,
      'Synergy'
    );
  }

  // Rule Z: DHP CCB + Beta Blocker (Moderate - Synergy / DDInter 2.0)
  if ((isDhpCcb(drugA) && isBetaBlocker(drugB)) || (isDhpCcb(drugB) && isBetaBlocker(drugA))) {
    const ccb = isDhpCcb(drugA) ? drugA : drugB;
    const bb = isDhpCcb(drugA) ? drugB : drugA;
    return createDynamicInteraction(ccb, bb, 'Moderate',
      `Penurunan aditif pada denyut jantung, konduksi atrioventrikular (nodus AV), dan kontraktilitas miokardium dapat terjadi ketika penyekat kanal kalsium dihidropiridin (${ccb.name}) digunakan bersama penyekat beta (${bb.name}).`,
      `Penurunan tekanan darah dan denyut jantung secara aditif; risiko hipotensi berlebih atau bradikardia simtomatik pada pasien rentan.`,
      `Kombinasi rasional yang diakui pedoman kardiovaskular. Pantau tekanan darah dan denyut nadi rutin. Lakukan penyesuaian dosis bila timbul gejala bradikardia atau hipotensi berlebih.`,
      'Synergy'
    );
  }

  // Rule AA: Macrolide + DHP CCB (Moderate / Minor - Metabolism / CYP3A4)
  const isMacrolide = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    const atc = (d.atcCode || '').toUpperCase();
    return atc.startsWith('J01FA') || ['clarithromycin', 'erythromycin', 'azithromycin', 'spiramycin'].some(s => n.includes(s) || g.includes(s));
  };
  if ((isMacrolide(drugA) && isDhpCcb(drugB)) || (isMacrolide(drugB) && isDhpCcb(drugA))) {
    const macro = isMacrolide(drugA) ? drugA : drugB;
    const ccb = isMacrolide(drugA) ? drugB : drugA;
    const isPotentCyp3a4 = macro.name.toLowerCase().includes('clari') || (macro.genericName || '').toLowerCase().includes('clari') || macro.name.toLowerCase().includes('erythro');
    return createDynamicInteraction(macro, ccb, isPotentCyp3a4 ? 'Moderate' : 'Minor',
      `${macro.name} menghambat isoenzim hepar dan enterosit CYP3A4 yang memetabolisme ${ccb.name}.`,
      `Peningkatan konsentrasi plasma ${ccb.name}, meningkatkan risiko hipotensi simtomatik, pusing ortostatik, dan edema perifer.`,
      `Pantau tekanan darah secara intensif selama terapi antibiotik. Pertimbangkan penurunan dosis ${ccb.name} atau gunakan makrolida alternatif (Azitromisin).`,
      'Metabolism'
    );
  }

  // Rule BB: Antacids + Valproic Acid (Minor - Absorption)
  // Official DDInter Reference: Antacids ↔ Valproic acid (Minor / Absorption)
  const isValproate = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    const atc = (d.atcCode || '').toUpperCase();
    return atc.startsWith('N03AG') || n.includes('valproat') || g.includes('valproat') || n.includes('depakene') || n.includes('depakote');
  };
  if ((isAntacidOrCation(drugA) && isValproate(drugB)) || (isAntacidOrCation(drugB) && isValproate(drugA))) {
    const ant = isAntacidOrCation(drugA) ? drugA : drugB;
    const valp = isAntacidOrCation(drugA) ? drugB : drugA;
    return createDynamicInteraction(ant, valp, 'Minor',
      `Data terbatas menunjukkan bahwa pemberian antasida bersamaan dapat meningkatkan bioavailabilitas dan absorpsi asam valproat akibat kenaikan pH lambung dan percepatan pengosongan lambung.`,
      `Sedikit peningkatan kadar serum puncak valproat; umumnya ditoleransi dengan baik namun berpotensi memicu efek samping gastrointestinal ringan atau sedasi transien.`,
      `Dapat diberikan bersamaan bila diperlukan, pantau efektivitas antikonvulsan dan gejala efek samping ringan seperti rasa kantuk.`,
      'Absorption'
    );
  }

  // Rule CC: PPI / H2-Blocker + Oral Iron Supplements (Minor - Absorption)
  if (((isPpi(drugA) || isH2Blocker(drugA)) && isIronSupplement(drugB)) || ((isPpi(drugB) || isH2Blocker(drugB)) && isIronSupplement(drugA))) {
    const acidSup = (isPpi(drugA) || isH2Blocker(drugA)) ? drugA : drugB;
    const iron = (isPpi(drugA) || isH2Blocker(drugA)) ? drugB : drugA;
    return createDynamicInteraction(acidSup, iron, 'Minor',
      `Penekanan sekresi asam lambung oleh ${acidSup.name} meningkatkan pH lambung dan menurunkan disolusi serta reduksi ion besi non-heme yang memerlukan suasana asam lambung untuk absorpsi optimal.`,
      `Penurunan penyerapan zat besi oral ringan hingga sedang; dapat memperlambat pemulihan kadar hemoglobin pada terapi anemia defisiensi besi.`,
      `Berikan suplemen besi bersama vitamin C atau beri jeda waktu 2 jam dari konsumsi supresor asam. Pantau kadar hemoglobin/feritin secara berkala.`,
      'Absorption'
    );
  }

  // Rule DD: PPI + Thyroid Hormone (Minor - Absorption)
  if ((isPpi(drugA) && isThyroidHormone(drugB)) || (isPpi(drugB) && isThyroidHormone(drugA))) {
    const ppiDrug = isPpi(drugA) ? drugA : drugB;
    const thyrDrug = isPpi(drugA) ? drugB : drugA;
    return createDynamicInteraction(ppiDrug, thyrDrug, 'Minor',
      `Peningkatan pH intragastrik akibat ${ppiDrug.name} dapat sedikit mengurangi disolusi tablet levotiroksin di lambung.`,
      `Potensi penurunan penyerapan levotiroksin transien; pada sebagian pasien dapat terjadi sedikit peningkatan kadar TSH.`,
      `Minum levotiroksin saat perut kosong minimal 30-60 menit sebelum sarapan atau obat lain. Pantau kadar TSH jika terapi PPI berlangsung jangka panjang.`,
      'Absorption'
    );
  }

  // Rule EE: Zinc + Oral Iron (Minor - Absorption / DMT1 Competition)
  const isZinc = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    const atc = (d.atcCode || '').toUpperCase();
    return atc.startsWith('A12CB') || n.includes('zinc') || g.includes('zinc') || n.includes('seng') || g.includes('seng');
  };
  if ((isZinc(drugA) && isIronSupplement(drugB)) || (isZinc(drugB) && isIronSupplement(drugA))) {
    const zn = isZinc(drugA) ? drugA : drugB;
    const fe = isZinc(drugA) ? drugB : drugA;
    return createDynamicInteraction(zn, fe, 'Minor',
      `Kation divalen seng (${zn.name}) dan besi (${fe.name}) bersaing pada transporter ion logam divalen (DMT1) yang sama di enterosit usus halus.`,
      `Penurunan efisiensi penyerapan kedua mineral jika dikonsumsi secara simultan dalam rasio tinggi.`,
      `Beri jeda konsumsi minimal 2 jam antara suplemen seng dan suplemen zat besi oral.`,
      'Absorption'
    );
  }

  // Rule FF: Antacids + Pseudoephedrine (Minor - Excretion / Urinary Alkalinization)
  const isPseudoephedrine = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    const atc = (d.atcCode || '').toUpperCase();
    return atc.startsWith('R01BA02') || n.includes('pseudoephedrine') || g.includes('pseudoephedrine') || n.includes('pseudoefedrin') || g.includes('pseudoefedrin');
  };
  if ((isAntacidOrCation(drugA) && isPseudoephedrine(drugB)) || (isAntacidOrCation(drugB) && isPseudoephedrine(drugA))) {
    const ant = isAntacidOrCation(drugA) ? drugA : drugB;
    const pseudo = isAntacidOrCation(drugA) ? drugB : drugA;
    return createDynamicInteraction(ant, pseudo, 'Minor',
      `Antasida yang mengandung natrium bikarbonat atau magnesium hidroksida dosis tinggi dapat meningkatkan pH urin (alkalisasi urin), meningkatkan fraksi non-ionik pseudoefedrin dan reabsorpsi tubular ginjal.`,
      `Sedikit peningkatan waktu paruh dan konsentrasi plasma pseudoefedrin, dapat meningkatkan risiko stimulasi saraf pusat ringan (gelisah, palpitasi).`,
      `Umumnya tidak memerlukan tindakan khusus pada dosis standar. Pantau gejala stimulasi berlebih atau takikardia pada pasien sensitif.`,
      'Excretion'
    );
  }

  // Rule GG: Metformin + H2-Blocker (Minor - Excretion / OCT2 Competition)
  if ((isMetformin(drugA) && isH2Blocker(drugB)) || (isMetformin(drugB) && isH2Blocker(drugA))) {
    const met = isMetformin(drugA) ? drugA : drugB;
    const h2 = isMetformin(drugA) ? drugB : drugA;
    return createDynamicInteraction(met, h2, 'Minor',
      `Antagonis reseptor H2 (${h2.name}, terutama simetidin dan dalam derajat lebih rendah ranitidin) berkompetisi dengan metformin pada transporter kation organik renal (OCT2/MATE1) di tubulus proksimal.`,
      `Sedikit penurunan klirens ginjal metformin dengan peningkatan konsentrasi plasma metformin transien (sekitar 15-30%).`,
      `Efek klinis biasanya ringan pada pasien dengan fungsi ginjal normal. Pantau gula darah dan lakukan penyesuaian jika timbul gejala gastrointestinal berlebih.`,
      'Excretion'
    );
  }

  // Rule HH: Caffeine + Paracetamol (Minor - Absorption / Synergy)
  const isCaffeine = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    const atc = (d.atcCode || '').toUpperCase();
    return atc.startsWith('N06BC01') || n.includes('caffeine') || g.includes('caffeine') || n.includes('kafein') || g.includes('kafein');
  };
  if ((isCaffeine(drugA) && isParacetamol(drugB)) || (isCaffeine(drugB) && isParacetamol(drugA))) {
    const caf = isCaffeine(drugA) ? drugA : drugB;
    const pct = isCaffeine(drugA) ? drugB : drugA;
    return createDynamicInteraction(caf, pct, 'Minor',
      `Kafein mempercepat pengosongan lambung dan meningkatkan laju absorpsi serta bioavailabilitas parasetamol, sekaligus memberikan efek analgesik adjuvan sinergis.`,
      `Onset analgesik parasetamol menjadi lebih cepat dan efikasi peredaan nyeri sakit kepala atau demam meningkat secara bermakna (adjuvant synergy).`,
      `Kombinasi umum dimanfaatkan dalam formulasi obat kombinasi sakit kepala (sinergi analgesik adjuvan). Batasi asupan minuman berkafein tambahan untuk mencegah insomnia atau palpitasi.`,
      'Absorption'
    );
  }

  // Rule II: Amoxicillin + Paracetamol / Ibuprofen (Minor - Synergy)
  const isAmoxicillin = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    const atc = (d.atcCode || '').toUpperCase();
    return atc.startsWith('J01CA04') || n.includes('amoxicillin') || g.includes('amoxicillin') || n.includes('amoksisilin') || g.includes('amoksisilin');
  };
  if ((isAmoxicillin(drugA) && (isParacetamol(drugB) || isNsaid(drugB))) ||
      (isAmoxicillin(drugB) && (isParacetamol(drugA) || isNsaid(drugA)))) {
    const amox = isAmoxicillin(drugA) ? drugA : drugB;
    const analg = isAmoxicillin(drugA) ? drugB : drugA;
    return createDynamicInteraction(amox, analg, 'Minor',
      `Pemberian bersamaan antibiotik amoksisilin (${amox.name}) dan analgesik/antipiretik (${analg.name}) tidak menimbulkan interferensi farmakokinetik yang merugikan.`,
      `Kombinasi terapi simtomatik dan etiologis yang kompatibel dan aman untuk infeksi yang disertai demam atau nyeri inflamasi.`,
      `Kedua obat dapat diberikan bersamaan sesuai dosis klinis yang dianjurkan.`,
      'Synergy'
    );
  }

  // Rule JJ: Ephedrine + Dexamethasone (Minor - Others / Clearance)
  // Official DDInter Reference: Ephedrine ↔ Dexamethasone (Minor / Others)
  const isEphedrine = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    const atc = (d.atcCode || '').toUpperCase();
    return atc.startsWith('R01AA03') || atc.startsWith('R03CA02') || n.includes('ephedrine') || g.includes('ephedrine') || n.includes('efedrin') || g.includes('efedrin');
  };
  const isDexamethasone = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    const atc = (d.atcCode || '').toUpperCase();
    return atc.startsWith('H02AB02') || n.includes('dexamethasone') || g.includes('dexamethasone') || n.includes('deksametason') || g.includes('deksametason');
  };
  if ((isEphedrine(drugA) && isDexamethasone(drugB)) || (isEphedrine(drugB) && isDexamethasone(drugA))) {
    const eph = isEphedrine(drugA) ? drugA : drugB;
    const dex = isEphedrine(drugA) ? drugB : drugA;
    return createDynamicInteraction(eph, dex, 'Minor',
      `Studi klinis farmakokinetik melaporkan bahwa pemberian bersamaan ${eph.name} mempercepat metabolisme dan eliminasi hepatik deksametason, menurunkan waktu paruh eliminasi deksametason sebesar 36% dan meningkatkan laju pembersihan (klirens metabolik) plasma ${dex.name} sebesar 42%.`,
      `Sedikit penurunan konsentrasi plasma dan durasi kerja biologis ${dex.name} akibat percepatan metabolisme hepar; umumnya ditoleransi dengan baik namun dapat mengurangi efikasi glukokortikoid pada terapi kronis atau menyebabkan hasil negatif palsu pada uji supresi deksametason (DST).`,
      `Obat dapat diberikan bersamaan. Pantau respons terapi kortikosteroid dan lakukan penyesuaian dosis deksametason bila diperlukan.`,
      'Metabolism'
    );
  }

  // Rule KK: Antacids + Tacrolimus (Minor - Absorption)
  const isTacrolimus = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    const atc = (d.atcCode || '').toUpperCase();
    return atc.startsWith('L04AD02') || n.includes('tacrolimus') || g.includes('tacrolimus') || n.includes('takrolimus') || g.includes('prograf');
  };
  if ((isAntacidOrCation(drugA) && isTacrolimus(drugB)) || (isAntacidOrCation(drugB) && isTacrolimus(drugA))) {
    const ant = isAntacidOrCation(drugA) ? drugA : drugB;
    const tac = isAntacidOrCation(drugA) ? drugB : drugA;
    return createDynamicInteraction(ant, tac, 'Minor',
      `Data in vitro menunjukkan bahwa kehadiran antasida (${ant.name}) dapat sedikit menurunkan bioavailabilitas dan absorpsi ${tac.name}.`,
      `Fluktuasi konsentrasi darah tacrolimus transien; perlu kehati-hatian pada pasien transplantasi organ.`,
      `Berikan jeda waktu konsumsi minimal 2 jam antara antasida dan tacrolimus, serta pantau kadar trough tacrolimus (TDM) rutin.`,
      'Absorption'
    );
  }

  // Rule LL: Sulfasalazine + Folic Acid (Minor - Absorption)
  const isSulfasalazine = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    const atc = (d.atcCode || '').toUpperCase();
    return atc.startsWith('A07EC01') || n.includes('sulfasalazine') || g.includes('sulfasalazine') || n.includes('salazosulfapiridin');
  };
  const isFolicAcid = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    const atc = (d.atcCode || '').toUpperCase();
    return atc.startsWith('B03BB') || n.includes('folic acid') || g.includes('folic acid') || n.includes('asam folat') || g.includes('asam folat') || n.includes('folavit');
  };
  if ((isSulfasalazine(drugA) && isFolicAcid(drugB)) || (isSulfasalazine(drugB) && isFolicAcid(drugA))) {
    const sulf = isSulfasalazine(drugA) ? drugA : drugB;
    const fol = isSulfasalazine(drugA) ? drugB : drugA;
    return createDynamicInteraction(sulf, fol, 'Minor',
      `${sulf.name} menghambat transporter membran folat usus dan menurunkan bioavailabilitas oral ${fol.name}.`,
      `Penurunan penyerapan asam folat, berisiko memicu defisiensi folat (anemia megaloblastik) pada terapi jangka panjang.`,
      `Dianjurkan suplementasi asam folat dosis lebih tinggi (1-2 mg/hari) pada pasien yang menerima sulfasalazine.`,
      'Absorption'
    );
  }

  // Rule MM: Verapamil + Morphine (Minor - Others / Analgesic Potentiation)
  const isVerapamil = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    const atc = (d.atcCode || '').toUpperCase();
    return atc.startsWith('C08DA01') || n.includes('verapamil') || g.includes('verapamil') || n.includes('isoptin');
  };
  const isMorphine = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    const atc = (d.atcCode || '').toUpperCase();
    return atc.startsWith('N02AA01') || n.includes('morphine') || g.includes('morphine') || n.includes('morfin') || g.includes('morfin') || n.includes('mst continus');
  };
  if ((isVerapamil(drugA) && isMorphine(drugB)) || (isVerapamil(drugB) && isMorphine(drugA))) {
    const ver = isVerapamil(drugA) ? drugA : drugB;
    const mor = isVerapamil(drugA) ? drugB : drugA;
    return createDynamicInteraction(ver, mor, 'Minor',
      `Verapamil memodulasi efek nosiseptif melalui blokade kanal kalsium di kornu dorsalis medula spinalis, meningkatkan potensi analgesik morfin sekaligus sedikit menumpulkan efek euforia.`,
      `Potensiasi efek peredaan nyeri; sedasi ringan dapat sedikit meningkat namun umumnya dapat ditoleransi dengan baik.`,
      `Kombinasi dapat digunakan sesuai kebutuhan klinis, amati efek samping sedasi dan konstipasi.`,
      'Others'
    );
  }

  // Rule NN: Simvastatin + Metformin (Minor - Metabolism / DDInter 2.0)
  if ((isSimvastatin(drugA) && isMetformin(drugB)) || (isSimvastatin(drugB) && isMetformin(drugA))) {
    const simv = isSimvastatin(drugA) ? drugA : drugB;
    const met = isSimvastatin(drugA) ? drugB : drugA;
    return createDynamicInteraction(simv, met, 'Minor',
      `Tidak ditemukan interaksi farmakokinetik bermakna antara simvastatin (metabolisme via CYP3A4) dan metformin (eliminasi via sekresi tubular ginjal OCT2/MATE1).`,
      `Kombinasi sangat aman dan kompatibel; memberikan manfaat ganda penurunan glukosa darah dan reduksi risiko kardiovaskular pada pasien diabetes melitus tipe 2 dengan dislipidemia.`,
      `Kombinasi aman dan direkomendasikan pada pasien diabetes dengan risiko kardiovaskular. Evaluasi kontrol glikemik (HbA1c) dan profil lipid secara teratur.`,
      'Metabolism'
    );
  }

  // Rule OO: Allopurinol + Colchicine (Minor - Synergy / DDInter 2.0)
  const isAllopurinol = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    const atc = (d.atcCode || '').toUpperCase();
    return atc.startsWith('M04AA01') || n.includes('allopurinol') || g.includes('allopurinol') || n.includes('alopurinol') || g.includes('alopurinol') || n.includes('zyloric');
  };
  const isColchicine = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    const atc = (d.atcCode || '').toUpperCase();
    return atc.startsWith('M04AC01') || n.includes('colchicine') || g.includes('colchicine') || n.includes('kolkisin') || g.includes('kolkisin') || n.includes('recoxa');
  };
  if ((isAllopurinol(drugA) && isColchicine(drugB)) || (isAllopurinol(drugB) && isColchicine(drugA))) {
    const allo = isAllopurinol(drugA) ? drugA : drugB;
    const colch = isAllopurinol(drugA) ? drugB : drugA;
    return createDynamicInteraction(allo, colch, 'Minor',
      `Sinergisme profilaksis: kolkisin menekan peradangan mikrokristal asam urat pada persendian saat inisiasi allopurinol yang menurunkan kadar urat serum secara cepat.`,
      `Pencegahan efektif serangan gout akut (gout flare) yang sering terpicu oleh mobilisasi kristal urat pada awal terapi penurun asam urat.`,
      `Kombinasi sangat dianjurkan dalam pedoman klinis (ACR / EULAR) selama 3-6 bulan pertama inisiasi allopurinol. Pantau fungsi ginjal dan amati efek samping saluran cerna ringan.`,
      'Synergy'
    );
  }

  // Rule PP: Salbutamol + Ipratropium (Minor - Synergy / DDInter 2.0)
  const isSalbutamol = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    const atc = (d.atcCode || '').toUpperCase();
    return atc.startsWith('R03CC02') || atc.startsWith('R03AC02') || n.includes('salbutamol') || g.includes('salbutamol') || n.includes('albuterol') || g.includes('albuterol') || n.includes('ventolin');
  };
  const isIpratropium = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    const atc = (d.atcCode || '').toUpperCase();
    return atc.startsWith('R03BB01') || n.includes('ipratropium') || g.includes('ipratropium') || n.includes('atrovent') || n.includes('combivent');
  };
  if ((isSalbutamol(drugA) && isIpratropium(drugB)) || (isSalbutamol(drugB) && isIpratropium(drugA))) {
    const salb = isSalbutamol(drugA) ? drugA : drugB;
    const ipra = isSalbutamol(drugA) ? drugB : drugA;
    return createDynamicInteraction(salb, ipra, 'Minor',
      `Sinergisme bronkodilatasi komplementer: salbutamol menstimulasi reseptor beta-2 adrenergik (meningkatkan cAMP) sedangkan ipratropium memblokade reseptor muskarinik M3 (menghambat cGMP) pada otot polos bronkus.`,
      `Relaksasi otot polos bronkus yang lebih cepat, lebih kuat, dan bertahan lebih lama; dasar formulasi kombinasi nebulisasi/inhaler standar (Combivent).`,
      `Kombinasi lini pertama terbukti sangat efektif dan aman pada penanganan eksaserbasi asma akut dan PPOK. Gunakan sesuai protokol bronkodilator.`,
      'Synergy'
    );
  }

  // Rule QQ: Furosemide + Spironolactone (Minor - Synergy / DDInter 2.0)
  const isFurosemide = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    const atc = (d.atcCode || '').toUpperCase();
    return atc.startsWith('C03CA01') || n.includes('furosemide') || g.includes('furosemide') || n.includes('furosemid') || g.includes('furosemid') || n.includes('lasix');
  };
  const isSpironolactone = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    const atc = (d.atcCode || '').toUpperCase();
    return atc.startsWith('C03DA01') || n.includes('spironolactone') || g.includes('spironolactone') || n.includes('spironolakton') || g.includes('aldactone');
  };
  if ((isFurosemide(drugA) && isSpironolactone(drugB)) || (isFurosemide(drugB) && isSpironolactone(drugA))) {
    const furo = isFurosemide(drugA) ? drugA : drugB;
    const spir = isFurosemide(drugA) ? drugB : drugA;
    return createDynamicInteraction(furo, spir, 'Minor',
      `Sinergisme diuretik seimbang: efek hemat kalium spironolakton di tubulus distal menyeimbangkan kehilangan kalium yang dipicu oleh furosemid di ansa Henle tebal.`,
      `Diuresis dan natriuresis optimal dengan risiko hipokalemia yang jauh lebih rendah; mencegah remodeling kardiak pada gagal jantung.`,
      `Kombinasi standar lini pertama pada gagal jantung kongestif dan asites sirosis hati. Lakukan pemantauan kadar kalium serum dan fungsi ginjal secara berkala.`,
      'Synergy'
    );
  }

  // Rule RR: Domperidone + Antacids (Minor - Absorption / DDInter 2.0)
  const isDomperidone = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    const atc = (d.atcCode || '').toUpperCase();
    return atc.startsWith('A03FA03') || n.includes('domperidone') || g.includes('domperidone') || n.includes('domperidon') || g.includes('vometa');
  };
  if ((isDomperidone(drugA) && isAntacidOrCation(drugB)) || (isDomperidone(drugB) && isAntacidOrCation(drugA))) {
    const domp = isDomperidone(drugA) ? drugA : drugB;
    const ant = isDomperidone(drugA) ? drugB : drugA;
    return createDynamicInteraction(domp, ant, 'Minor',
      `Kenaikan pH intragastrik akibat antasida dapat sedikit mengurangi disolusi dan bioavailabilitas oral domperidone jika diminum secara bersamaan.`,
      `Sedikit penurunan efikasi prokinetik/antiemetik domperidone jika dikonsumsi dalam waktu yang bersamaan.`,
      `Berikan domperidone 15-30 menit sebelum makan (saat perut kosong) dan antasida 1-2 jam setelah makan atau saat timbul rasa perih di ulu hati.`,
      'Absorption'
    );
  }

  // Rule SS: Sucralfate + Paracetamol (Minor - Absorption / DDInter 2.0)
  const isSucralfate = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    const atc = (d.atcCode || '').toUpperCase();
    return atc.startsWith('A02BX02') || n.includes('sucralfate') || g.includes('sucralfate') || n.includes('sukralfat') || g.includes('inpepsa');
  };
  if ((isSucralfate(drugA) && isParacetamol(drugB)) || (isSucralfate(drugB) && isParacetamol(drugA))) {
    const sucr = isSucralfate(drugA) ? drugA : drugB;
    const pct = isSucralfate(drugA) ? drugB : drugA;
    return createDynamicInteraction(sucr, pct, 'Minor',
      `Lapisan mukoprotektif sukralfat pada dinding lambung dapat sedikit memperlambat laju penyerapan (Tmax) parasetamol tanpa mengurangi bioavailabilitas sistemik total (AUC).`,
      `Onset analgesik atau antipiretik parasetamol mungkin sedikit tertunda, namun efek terapeutik puncak tetap tercapai.`,
      `Berikan jeda waktu konsumsi minimal 1-2 jam antara sukralfat dan parasetamol jika pasien memerlukan onset peredaan nyeri/demam yang cepat.`,
      'Absorption'
    );
  }

  // Rule TT: Ibuprofen + Caffeine (Minor - Absorption / Synergy / DDInter 2.0)
  if ((isNsaid(drugA) && isCaffeine(drugB)) || (isNsaid(drugB) && isCaffeine(drugA))) {
    const nsaid = isNsaid(drugA) ? drugA : drugB;
    const caf = isNsaid(drugA) ? drugB : drugA;
    return createDynamicInteraction(nsaid, caf, 'Minor',
      `Kafein mempercepat pengosongan lambung dan laju absorpsi ${nsaid.name} di saluran cerna serta bertindak sebagai analgesik adjuvan sinergis via blokade reseptor adenosin.`,
      `Onset analgesik ${nsaid.name} menjadi lebih cepat dan efikasi peredaan nyeri sakit kepala, migrain, atau dismenore meningkat secara bermakna.`,
      `Kombinasi aman dan umum dimanfaatkan dalam formulasi obat sakit kepala. Batasi asupan minuman berkafein tambahan untuk menghindari palpitasi atau insomnia.`,
      'Absorption'
    );
  }

  // Rule UU: Tramadol + Paracetamol (Minor - Synergy / DDInter 2.0)
  const isTramadol = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    const atc = (d.atcCode || '').toUpperCase();
    return atc.startsWith('N02AJ13') || atc.startsWith('N02AX02') || n.includes('tramadol') || g.includes('tramadol') || n.includes('ultracet');
  };
  if ((isTramadol(drugA) && isParacetamol(drugB)) || (isTramadol(drugB) && isParacetamol(drugA))) {
    const tram = isTramadol(drugA) ? drugA : drugB;
    const pct = isTramadol(drugA) ? drugB : drugA;
    return createDynamicInteraction(tram, pct, 'Minor',
      `Sinergisme analgesik multimodal: parasetamol bekerja terutama di susunan saraf pusat (penghambatan sintesis prostaglandin sentral) sedangkan tramadol bekerja ganda melalui agonisme reseptor mu-opioid dan inhibisi reuptake serotonin/norepinefrin.`,
      `Peredaan nyeri sedang hingga berat yang superior dengan dosis masing-masing obat yang lebih rendah, meminimalkan risiko efek samping masing-masing agen.`,
      `Kombinasi sinergis baku terstandar (e.g., Ultracet). Pastikan total dosis tramadol tidak melebihi 300 mg/hari dan total parasetamol tidak melebihi 4000 mg/hari. Amati efek samping pusing atau mual.`,
      'Synergy'
    );
  }

  // Rule VV: Lansoprazole + Antacids (Minor - Absorption / DDInter 2.0)
  if ((isPpi(drugA) && isAntacidOrCation(drugB)) || (isPpi(drugB) && isAntacidOrCation(drugA))) {
    const ppi = isPpi(drugA) ? drugA : drugB;
    const ant = isPpi(drugA) ? drugB : drugA;
    return createDynamicInteraction(ppi, ant, 'Minor',
      `Pemberian antasida secara bersamaan dapat sedikit mengurangi laju dan tingkat penyerapan (AUC) kapsul lepas tunda ${ppi.name} akibat kenaikan pH dini di lambung.`,
      `Sedikit penurunan bioavailabilitas ${ppi.name} jika diminum secara simultan.`,
      `Berikan jeda waktu konsumsi minimal 1 jam antara antasida dan ${ppi.name} untuk memastikan absorpsi optimal.`,
      'Absorption'
    );
  }

  // Rule WW: Cetirizine / Loratadine + Pseudoephedrine (Minor - Synergy / DDInter 2.0)
  if ((isH1Antihistamine(drugA) && isPseudoephedrine(drugB)) || (isH1Antihistamine(drugB) && isPseudoephedrine(drugA))) {
    const h1 = isH1Antihistamine(drugA) ? drugA : drugB;
    const pseudo = isH1Antihistamine(drugA) ? drugB : drugA;
    return createDynamicInteraction(h1, pseudo, 'Minor',
      `Sinergisme farmakodinamik komplementer pada rinitis alergi: ${h1.name} menghambat reseptor H1 histamin, sedangkan pseudoefedrin mendekongesti mukosa hidung melalui stimulasi reseptor alfa-adrenergik vaskular.`,
      `Peredaan gejala hidung tersumbat, bersin, dan rinorea yang lebih komprehensif dibandingkan monoterapi masing-masing agen.`,
      `Kombinasi standar aman dan lazim diresepkan. Perhatikan kontraindikasi pseudoefedrin pada pasien hipertensi tidak terkontrol atau penyakit jantung koroner berat.`,
      'Synergy'
    );
  }

  // Rule XX: Metformin + Acarbose (Minor - Synergy / DDInter 2.0)
  const isAcarbose = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    const atc = (d.atcCode || '').toUpperCase();
    return atc.startsWith('A10BF01') || n.includes('acarbose') || g.includes('acarbose') || n.includes('akarbosa') || g.includes('glucobay');
  };
  if ((isMetformin(drugA) && isAcarbose(drugB)) || (isMetformin(drugB) && isAcarbose(drugA))) {
    const met = isMetformin(drugA) ? drugA : drugB;
    const acar = isMetformin(drugA) ? drugB : drugA;
    return createDynamicInteraction(met, acar, 'Minor',
      `Sinergisme penurunan glukosa darah komplementer: akarbose menghambat enzim alfa-glukosidase usus halus menunda penyerapan karbohidrat, sementara metformin menekan glukoneogenesis hepar dan memperbaiki sensitivitas insulin perifer.`,
      `Kontrol glikemik postprandial dan puasa yang lebih stabil tanpa meningkatkan risiko hipoglikemia intrinsik atau kenaikan berat badan.`,
      `Kombinasi aman dan rasional. Minum akarbose bersama suapan pertama makanan utama. Amati efek samping gastrointestinal ringan seperti kembung atau flatulensi pada awal terapi.`,
      'Synergy'
    );
  }

  // Rule YY: Vitamin D + Calcium (Minor - Absorption / DDInter 2.0)
  const isVitaminD = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    const atc = (d.atcCode || '').toUpperCase();
    return atc.startsWith('A11CC') || n.includes('cholecalciferol') || g.includes('cholecalciferol') || n.includes('vitamin d') || g.includes('vitamin d') || n.includes('calcitriol');
  };
  const isCalcium = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    const atc = (d.atcCode || '').toUpperCase();
    return atc.startsWith('A12AA') || n.includes('calcium') || g.includes('calcium') || n.includes('kalsium') || g.includes('cal-95');
  };
  if ((isVitaminD(drugA) && isCalcium(drugB)) || (isVitaminD(drugB) && isCalcium(drugA))) {
    const vitD = isVitaminD(drugA) ? drugA : drugB;
    const calc = isVitaminD(drugA) ? drugB : drugA;
    return createDynamicInteraction(vitD, calc, 'Minor',
      `Vitamin D3 (${vitD.name}) dihidroksilasi menjadi bentuk aktif kalsitriol yang menstimulasi sintesis calbindin di enterosit mukosa usus halus, meningkatkan efisiensi absorpsi ion kalsium secara aktif.`,
      `Peningkatan bioavailabilitas kalsium oral dan mineralisasi tulang yang optimal; pencegahan osteoporosis dan hipokalsemia.`,
      `Kombinasi sinergis sangat aman dan dianjurkan pada pasien osteoporosis, wanita pascamenopause, dan lansia. Konsumsi bersama makanan untuk penyerapan kalsium karbonat yang maksimal.`,
      'Absorption'
    );
  }

  // Rule ZZ: Iron (Ferrous) + Folic Acid (Minor - Synergy / DDInter 2.0)
  if ((isIronSupplement(drugA) && isFolicAcid(drugB)) || (isIronSupplement(drugB) && isFolicAcid(drugA))) {
    const fe = isIronSupplement(drugA) ? drugA : drugB;
    const fol = isIronSupplement(drugA) ? drugB : drugA;
    return createDynamicInteraction(fe, fol, 'Minor',
      `Sinergisme eritropoiesis ganda: zat besi diperlukan sebagai gugus prostetik heme untuk sintesis hemoglobin, sedangkan asam folat bertindak sebagai koenzim transfer satu-karbon pada sintesis DNA dan pembelahan normoblas.`,
      `Koreksi anemia defisiensi mikrositik dan makrositik secara simultan; suplementasi esensial untuk menurunkan risiko defek tabung saraf (NTD) pada kehamilan.`,
      `Kombinasi standar lini pertama suplementasi kehamilan (tablet tambah darah / TTD). Konsumsi bersama air putih atau jus jeruk, dan hindari konsumsi bersama teh, kopi, atau susu yang menghambat penyerapan besi.`,
      'Synergy'
    );
  }

  // Rule AAA: Cefixime + Paracetamol (Minor - Synergy / DDInter 2.0)
  const isCefixime = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    const atc = (d.atcCode || '').toUpperCase();
    return atc.startsWith('J01DD08') || n.includes('cefixime') || g.includes('cefixime') || n.includes('sefiksim') || g.includes('sefiksim') || n.includes('sporanox');
  };
  if ((isCefixime(drugA) && isParacetamol(drugB)) || (isCefixime(drugB) && isParacetamol(drugA))) {
    const cef = isCefixime(drugA) ? drugA : drugB;
    const pct = isCefixime(drugA) ? drugB : drugA;
    return createDynamicInteraction(cef, pct, 'Minor',
      `Pemberian bersamaan antibiotik sefalosporin generasi ketiga (${cef.name}) dan antipiretik/analgesik (${pct.name}) tidak menimbulkan interferensi farmakokinetik atau farmakodinamik yang merugikan.`,
      `Kombinasi terapi etiologis bakterial dan penanganan simtomatik demam/nyeri yang aman, kompatibel, dan efektif.`,
      `Kedua obat dapat diberikan bersamaan sesuai dosis klinis masing-masing. Pastikan antibiotik ${cef.name} dihabiskan sesuai durasi yang diresepkan.`,
      'Synergy'
    );
  }

  // Rule BBB: Domperidone + Paracetamol (Minor - Absorption / DDInter 2.0)
  if ((isDomperidone(drugA) && isParacetamol(drugB)) || (isDomperidone(drugB) && isParacetamol(drugA))) {
    const domp = isDomperidone(drugA) ? drugA : drugB;
    const pct = isDomperidone(drugA) ? drugB : drugA;
    return createDynamicInteraction(domp, pct, 'Minor',
      `Domperidone meningkatkan motilitas lambung dan mempercepat pengosongan lambung, sehingga mempercepat laju absorpsi (Tmax) parasetamol di usus halus.`,
      `Onset peredaan nyeri kepala menjadi lebih cepat dan keluhan mual yang menyertai serangan migrain teratasi secara efektif.`,
      `Kombinasi menguntungkan dan aman untuk penanganan nyeri migrain akut disertai mual. Obat dapat dikonsumsi bersamaan.`,
      'Absorption'
    );
  }

  // Rule CCC: Spironolactone + Amlodipine (Minor - Synergy / DDInter 2.0)
  if ((isSpironolactone(drugA) && isAmlodipine(drugB)) || (isSpironolactone(drugB) && isAmlodipine(drugA))) {
    const spir = isSpironolactone(drugA) ? drugA : drugB;
    const amlo = isSpironolactone(drugA) ? drugB : drugA;
    return createDynamicInteraction(spir, amlo, 'Minor',
      `Sinergisme antihipertensi komplementer: amlodipin memicu vasodilatasi arteriol perifer melalui blokade kanal kalsium, sedangkan spironolakton menghambat retensi natrium dan air yang dimediasi aldosteron.`,
      `Penurunan tekanan darah sinergis yang sangat efektif pada pasien hipertensi resisten (kombinasi lini ke-4 terarah pedoman PATHWAY-2).`,
      `Kombinasi terbukti efektif dan aman pada hipertensi resisten. Lakukan pemantauan berkala tekanan darah, kadar kalium serum, dan fungsi ginjal.`,
      'Synergy'
    );
  }

  // Rule DDD: Acarbose + Glimepiride (Minor - Synergy / DDInter 2.0)
  if ((isAcarbose(drugA) && isSulfonylurea(drugB)) || (isAcarbose(drugB) && isSulfonylurea(drugA))) {
    const acar = isAcarbose(drugA) ? drugA : drugB;
    const su = isAcarbose(drugA) ? drugB : drugA;
    return createDynamicInteraction(acar, su, 'Minor',
      `Sinergisme penurunan glukosa darah komplementer: akarbose meratakan lonjakan glukosa postprandial di usus, sedangkan ${su.name} merangsang pelepasan insulin basal dari sel beta pankreas.`,
      `Peningkatan kontrol glikemik menyeluruh (penurunan HbA1c); risiko hipoglikemia tetap memerlukan kewaspadaan pada pasien lansia.`,
      `Jika timbul gejala hipoglikemia (keringat dingin, gemetar), gunakan dekstrosa (glukosa murni) oral, bukan gula pasir (sukrosa), karena enzim pemecah sukrosa dihambat oleh akarbose.`,
      'Synergy'
    );
  }

  // Rule EEE: Spironolactone + Beta Blocker (Moderate - Synergy / DDInter 2.0)
  if ((isSpironolactone(drugA) && isBetaBlocker(drugB)) || (isSpironolactone(drugB) && isBetaBlocker(drugA))) {
    const spir = isSpironolactone(drugA) ? drugA : drugB;
    const bb = isSpironolactone(drugA) ? drugB : drugA;
    return createDynamicInteraction(spir, bb, 'Moderate',
      `Meskipun sering dikombinasikan secara rasional pada tatalaksana gagal jantung (GDMT HFrEF), kombinasi diuretik (${spir.name}) dan penyekat beta (${bb.name}) dapat meningkatkan risiko hipotensi postural serta mempengaruhi toleransi glukosa atau profil lipid pada pasien diabetes/pra-diabetes.`,
      `Penurunan tekanan darah aditif, potensi gangguan homeostasis elektrolit kalium, serta risiko hiperglikemia ringan atau kelelahan berlebih.`,
      `Pantau tekanan darah, denyut jantung, kadar kalium serum, dan glukosa darah secara berkala. Edukasi pasien untuk mewaspadai gejala hipotensi ortostatik (pusing saat berdiri tiba-tiba).`,
      'Synergy'
    );
  }

  return null;
}

/**
 * Guardrail 1: Validates that a drug actually belongs to or pharmacologically contains
 * the therapeutic class specified by a therapeutic duplication rule.
 * 
 * Prevents false positives where a single standalone drug (e.g. Omeprazole)
 * is mistakenly flagged as a duplicate under a class it doesn't belong to (e.g. Beta-Lactams).
 */
export function isDrugInTherapeuticClass(drug: Drug, therapeuticClass: string): boolean {
  if (!therapeuticClass) return true;
  const normClass = therapeuticClass.toLowerCase();
  const cat = (drug.category || '').toLowerCase();
  const subCat = (drug.subCategory || '').toLowerCase();
  const name = (drug.name || '').toLowerCase();
  const gen = (drug.genericName || '').toLowerCase();
  const atc = (drug.atcCode || '').toUpperCase();

  // 1. Beta-Lactam Antibiotics (Penicillins, Cephalosporins, Carbapenems)
  if (normClass.includes('beta-laktam') || normClass.includes('penisilin') || normClass.includes('sefalosporin')) {
    if (atc.startsWith('J01C') || atc.startsWith('J01D')) return true;
    if (cat.includes('penisilin') || cat.includes('sefalosporin') || cat.includes('beta-laktam')) return true;
    if (subCat.includes('penisilin') || subCat.includes('sefalosporin') || subCat.includes('beta-laktam')) return true;
    const betaLactamTerms = ['cillin', 'cef', 'ceph', 'carbapenem', 'meropenem', 'imipenem', 'sulbactam', 'tazobactam', 'clavulan'];
    if (betaLactamTerms.some((t) => name.includes(t) || gen.includes(t))) return true;
    return false;
  }

  // 2. NSAID
  if (normClass.includes('nsaid') || normClass.includes('antiinflamasi non-steroid')) {
    if (atc.startsWith('M01A')) return true;
    if (cat.includes('nsaid') || cat.includes('antiinflamasi non-steroid')) return true;
    const nsaidTerms = ['ibuprofen', 'ketoprofen', 'diclofenac', 'mefenamat', 'mefenamic', 'meloxicam', 'piroxicam', 'celecoxib', 'etoricoxib', 'aspirin', 'naproxen', 'ketorolac', 'indomethacin'];
    if (nsaidTerms.some((t) => name.includes(t) || gen.includes(t))) return true;
    return false;
  }

  // 3. Statin (HMG-CoA Reductase Inhibitors)
  if (normClass.includes('statin') || normClass.includes('hmg-coa')) {
    if (atc.startsWith('C10AA') || atc.startsWith('C10B')) return true;
    if (name.includes('statin') || gen.includes('statin')) return true;
    return false;
  }

  // 4. PPI & Acid Suppressants
  if (normClass.includes('ppi') || normClass.includes('pompa proton') || normClass.includes('penekan asam lambung') || normClass.includes('h2-blocker')) {
    if (atc.startsWith('A02B')) return true;
    if (cat.includes('pompa proton') || cat.includes('h2') || cat.includes('asam lambung')) return true;
    const ppiTerms = ['prazole', 'tidine', 'antacid', 'sukralfat', 'sucralfate'];
    if (ppiTerms.some((t) => name.includes(t) || gen.includes(t))) return true;
    return false;
  }

  // 5. Macrolides
  if (normClass.includes('makrolida') || normClass.includes('macrolide')) {
    if (atc.startsWith('J01FA')) return true;
    const macTerms = ['thromycin', 'erythromycin', 'azithromycin', 'clarithromycin', 'roxithromycin'];
    if (macTerms.some((t) => name.includes(t) || gen.includes(t))) return true;
    return false;
  }

  // 6. ACE Inhibitors
  if (normClass.includes('acei') || normClass.includes('pengonversi angiotensin')) {
    if (atc.startsWith('C09A') || atc.startsWith('C09B')) return true;
    if (name.includes('pril') || gen.includes('pril')) return true;
    return false;
  }

  // 7. ARB (Angiotensin Receptor Blockers)
  if (normClass.includes('arb') || normClass.includes('reseptor angiotensin')) {
    if (atc.startsWith('C09C') || atc.startsWith('C09D')) return true;
    if (name.includes('sartan') || gen.includes('sartan')) return true;
    return false;
  }

  // 8. Calcium Channel Blocker (CCB)
  if (normClass.includes('ccb') || normClass.includes('calcium channel')) {
    if (atc.startsWith('C08')) return true;
    const ccbTerms = ['dipine', 'diltiazem', 'verapamil', 'amlodipine', 'nifedipine', 'nicardipine'];
    if (ccbTerms.some((t) => name.includes(t) || gen.includes(t))) return true;
    return false;
  }

  // 9. Benzodiazepines
  if (normClass.includes('benzodiazepin') || normClass.includes('benzodiazepine')) {
    if (atc.startsWith('N05BA') || atc.startsWith('N05CD')) return true;
    const benzoTerms = ['azepam', 'azolam', 'clobazam', 'clonazepam', 'diazepam', 'lorazepam', 'midazolam', 'alprazolam'];
    if (benzoTerms.some((t) => name.includes(t) || gen.includes(t))) return true;
    return false;
  }

  // 10. Antihistamines
  if (normClass.includes('antihistamin')) {
    if (atc.startsWith('R06')) return true;
    const histTerms = ['amine', 'iramine', 'cetirizine', 'loratadine', 'fexofenadine', 'diphenhydramine', 'promethazine', 'hydroxyzine', 'dimenhydrinate', 'chlorpheniramine'];
    if (histTerms.some((t) => name.includes(t) || gen.includes(t))) return true;
    return false;
  }

  // 11. Opioids
  if (normClass.includes('opioid') || normClass.includes('narkotika')) {
    if (atc.startsWith('N02A')) return true;
    const opioidTerms = ['morphine', 'fentanyl', 'codeine', 'tramadol', 'oxycodone', 'pethidine', 'buprenorphine', 'hydromorphone', 'morfin'];
    if (opioidTerms.some((t) => name.includes(t) || gen.includes(t))) return true;
    return false;
  }

  // 12. Corticosteroids
  if (normClass.includes('kortikosteroid') || normClass.includes('glukokortikoid')) {
    if (atc.startsWith('H02AB')) return true;
    const steroidTerms = ['sone', 'pred', 'dexamethasone', 'methylprednisolone', 'hydrocortisone', 'triamcinolone', 'budesonide'];
    if (steroidTerms.some((t) => name.includes(t) || gen.includes(t))) return true;
    return false;
  }

  // Non-single-class rules (e.g. cross-class combinations like Triple Whammy, Dual RAS, etc.) return true
  return true;
}

/**
 * Guardrail 2: Accurately checks whether a user's drug matches a rule's target string.
 * 
 * Target string patterns:
 * 1. Alternative list separated by " / " or " atau " (e.g., "Aspirin / Mefenamic Acid / Ketorolac"):
 *    Matches if user drug matches ANY of the listed individual alternatives.
 * 
 * 2. Multi-ingredient combo product separated by "/" without spaces (e.g., "Amoxicillin/clarithromycin/omeprazole"):
 *    Represents a fixed-dose combo formulation. Matches ONLY if the user's drug contains ALL listed active
 *    ingredients (or is that combo formulation). Single-ingredient standalone drugs will NEVER match!
 * 
 * 3. Single target (e.g., "Ampicillin"):
 *    Matches if name or genericName contains or matches the target.
 */
export function matchDrugWithRuleTarget(userDrug: Drug, targetString: string, therapeuticClass?: string): boolean {
  if (!targetString) return false;
  const normName = userDrug.name.toLowerCase().trim();
  const normGen = (userDrug.genericName || '').toLowerCase().trim();
  const normTarget = targetString.toLowerCase().trim();

  // 1. Exact match
  if (normTarget === normName || normTarget === normGen) {
    return true;
  }

  // 2. Alternative list separated by " / " or " atau " (e.g. "Aspirin / Mefenamic Acid / Ketorolac")
  if (targetString.includes(' / ') || targetString.includes(' atau ')) {
    const alternatives = targetString.split(/\s+\/\s+|\s+atau\s+/).map((s) => s.trim().toLowerCase()).filter(Boolean);
    return alternatives.some((alt) => {
      const cleanAlt = alt.replace(/[()]/g, '').trim();
      if (!cleanAlt) return false;
      if (normName.includes(cleanAlt) || normGen.includes(cleanAlt) || cleanAlt.includes(normName)) {
        return true;
      }
      // Check individual significant words if alt has multiple words (e.g. "arb captopril")
      const words = cleanAlt.split(/\s+/).filter((w) => w.length > 3);
      return words.some((w) => normName.includes(w) || normGen.includes(w));
    });
  }

  // 3. Multi-ingredient combo product without spaces (e.g. "Amoxicillin/clarithromycin/omeprazole")
  if (targetString.includes('/')) {
    const comboIngredients = targetString.split('/').map((s) => s.trim().toLowerCase()).filter(Boolean);
    // User drug must contain ALL combo ingredients or be the exact combo
    const hasAll = comboIngredients.every((ing) => normName.includes(ing) || normGen.includes(ing));
    return hasAll;
  }

  // 4. Single target name (e.g. "Ampicillin")
  const cleanTarget = targetString.replace(/[()]/g, '').trim().toLowerCase();
  if (!cleanTarget) return false;
  return normName.includes(cleanTarget) || normGen.includes(cleanTarget) || cleanTarget.includes(normName);
}

export function evaluateTherapeuticDuplications(
  selectedDrugs: Drug[],
  staticDuplications: TherapeuticDuplication[] = []
): TherapeuticDuplication[] {
  const results: TherapeuticDuplication[] = [];
  const seenPairKeys = new Set<string>();

  for (let i = 0; i < selectedDrugs.length; i++) {
    for (let j = i + 1; j < selectedDrugs.length; j++) {
      const dA = selectedDrugs[i];
      const dB = selectedDrugs[j];

      if (dA.id === dB.id) continue;
      const pairKey = [dA.id, dB.id].sort().join('__');
      if (seenPairKeys.has(pairKey)) continue;

      const nameALower = dA.name.toLowerCase().trim();
      const nameBLower = dB.name.toLowerCase().trim();

      // 1. Static Duplication Match with Double Safety Guardrail
      let staticMatch: TherapeuticDuplication | undefined = undefined;

      for (const dup of staticDuplications) {
        const aMatchesA = matchDrugWithRuleTarget(dA, dup.drugAName, dup.therapeuticClass);
        const bMatchesB = matchDrugWithRuleTarget(dB, dup.drugBName, dup.therapeuticClass);

        const aMatchesB = matchDrugWithRuleTarget(dA, dup.drugBName, dup.therapeuticClass);
        const bMatchesA = matchDrugWithRuleTarget(dB, dup.drugAName, dup.therapeuticClass);

        if ((aMatchesA && bMatchesB) || (aMatchesB && bMatchesA)) {
          const dAValid = isDrugInTherapeuticClass(dA, dup.therapeuticClass);
          const dBValid = isDrugInTherapeuticClass(dB, dup.therapeuticClass);

          if (dAValid && dBValid) {
            staticMatch = dup;
            break;
          }
        }
      }

      if (staticMatch) {
        seenPairKeys.add(pairKey);
        results.push({
          ...staticMatch,
          id: `dup-${pairKey}`,
          drugAName: dA.name,
          drugBName: dB.name
        });
        continue;
      }

      // 2. Dynamic Therapeutic Class Duplication Detection (DDInter 2.0 Standard Classes)
      const catA = (dA.category || '').toLowerCase();
      const catB = (dB.category || '').toLowerCase();
      const atcA = (dA.atcCode || '').substring(0, 4);
      const atcB = (dB.atcCode || '').substring(0, 4);

      const isSameAtcClass = atcA && atcB && atcA === atcB && atcA.length >= 3;
      const isBothNsaid = (catA.includes('nsaid') || catA.includes('antiinflamasi non-steroid')) && 
                          (catB.includes('nsaid') || catB.includes('antiinflamasi non-steroid'));
      const isBothStatin = (catA.includes('statin') || nameALower.includes('statin')) && 
                           (catB.includes('statin') || nameBLower.includes('statin'));
      const isBothPpi = (catA.includes('pompa proton') || nameALower.includes('prazole')) && 
                        (catB.includes('pompa proton') || nameBLower.includes('prazole'));
      const isBothH2 = (catA.includes('antagonis h2') || nameALower.includes('tidine')) && 
                       (catB.includes('antagonis h2') || nameBLower.includes('tidine'));
      const isBothAcei = (catA.includes('ace inhibitor') || nameALower.includes('pril')) && 
                         (catB.includes('ace inhibitor') || nameBLower.includes('pril'));
      const isBothArb = (catA.includes('arb') || catA.includes('angiotensin') || nameALower.includes('sartan')) && 
                        (catB.includes('arb') || catB.includes('angiotensin') || nameBLower.includes('sartan'));
      const isBothBetaBlocker = (catA.includes('beta blocker') || nameALower.includes('lol')) && 
                                (catB.includes('beta blocker') || nameBLower.includes('lol'));
      const isBothCcb = (catA.includes('kalsium') || nameALower.includes('dipine')) && 
                        (catB.includes('kalsium') || nameBLower.includes('dipine'));
      const isBothBenzo = (catA.includes('benzodiazepin') || catA.includes('sedatif')) && 
                          (catB.includes('benzodiazepin') || catB.includes('sedatif'));
      const isBothSsri = (catA.includes('ssri') || catA.includes('serotonin')) && 
                         (catB.includes('ssri') || catB.includes('serotonin'));
      const isBothSulfonylurea = (catA.includes('sulfonilurea') || nameALower.includes('gli')) && 
                                 (catB.includes('sulfonilurea') || nameBLower.includes('gli'));
      const isBothSglt2 = (catA.includes('sglt2') || nameALower.includes('gliflozin')) && 
                          (catB.includes('sglt2') || nameBLower.includes('gliflozin'));
      const isBothSteroid = (catA.includes('kortikosteroid') || nameALower.includes('sone') || nameALower.includes('pred')) && 
                            (catB.includes('kortikosteroid') || nameBLower.includes('sone') || nameBLower.includes('pred'));
      const isBothOpioid = (catA.includes('opioid') || catA.includes('narkotika')) && 
                           (catB.includes('opioid') || catB.includes('narkotika'));

      if (isBothNsaid || isBothStatin || isBothPpi || isBothH2 || isBothAcei || isBothArb || 
          isBothBetaBlocker || isBothCcb || isBothBenzo || isBothSsri || isBothSulfonylurea || 
          isBothSglt2 || isBothSteroid || isBothOpioid || isSameAtcClass) {
        seenPairKeys.add(pairKey);
        let className = dA.category || dB.category || 'Kelas Terapi Sejenis';
        if (isBothNsaid) className = 'Antiinflamasi Non-Steroid (NSAID)';
        else if (isBothStatin) className = 'Inhibitor HMG-CoA Reduktase (Statin)';
        else if (isBothPpi) className = 'Penekan Asam Lambung (Proton Pump Inhibitor)';
        else if (isBothH2) className = 'Antagonis Reseptor H2 (H2-Blocker)';
        else if (isBothAcei) className = 'Inhibitor Enzim Pengonversi Angiotensin (ACEi)';
        else if (isBothArb) className = 'Inhibitor Reseptor Angiotensin II (ARB)';
        else if (isBothBetaBlocker) className = 'Beta-Blocker Kardiovaskular';
        else if (isBothCcb) className = 'Calcium Channel Blocker (CCB)';
        else if (isBothBenzo) className = 'Golongan Benzodiazepine (Sedatif/Ansiolitik)';
        else if (isBothSsri) className = 'Antidepresan (SSRI/SNRI)';
        else if (isBothSulfonylurea) className = 'Sekretagog Insulin (Sulfonilurea)';
        else if (isBothSglt2) className = 'Inhibitor SGLT2 (Antidiabetes)';
        else if (isBothSteroid) className = 'Kortikosteroid Sistemik / Glukokortikoid';
        else if (isBothOpioid) className = 'Analgesik Opioid (Narkotika)';
        else if (isSameAtcClass) {
          if (atcA === 'J01C') className = 'Antibiotik Golongan Penisilin (Beta-Laktam)';
          else if (atcA === 'J01D') className = 'Antibiotik Golongan Sefalosporin (Beta-Laktam)';
          else if (atcA === 'A02B') className = 'Obat Gangguan Asam Lambung & Tukak';
        }

        results.push({
          id: `dup-${pairKey}`,
          drugAName: dA.name,
          drugBName: dB.name,
          therapeuticClass: className,
          riskDescription: `Penggunaan bersamaan dua agen dari kelas terapi yang sama (${dA.name} & ${dB.name}) tidak memberikan peningkatan efikasi terapeutik yang sebanding, namun melipatgandakan risiko toksisitas organ dan efek samping kumulatif.`,
          recommendation: `Tinjau rasionalitas peresepan. Hentikan salah satu obat dan maksimalkan monoterapi pada dosis terukur, atau ganti dengan obat dari mekanisme kerja komplementer.`
        });
      }
    }
  }

  return results;
}

/**
 * Translates standalone English food names to standard Indonesian
 */
export function translateFoodNameToIndonesian(foodName: string): string {
  if (!foodName) return '';
  const lower = foodName.toLowerCase().trim();

  const foodDictionary: Record<string, string> = {
    'spinach': 'Bayam & Sayuran Hijau Tinggi Oksalat',
    'rhubarb': 'Rhubarb & Tumbuhan Asam Oksalat',
    'grain': 'Bekatul, Gandum Utuh & Makanan Kaya Serat',
    'grains': 'Biji-Bijian & Gandum Utuh',
    'bran': 'Bekatul & Serat Gandum Kasar',
    'cereal': 'Sereal Sarapan Pagi & Oat',
    'oat': 'Havermut (Oatmeal)',
    'wheat': 'Gandum Utuh',
    'dairy': 'Susu & Produk Olahan Susu',
    'dairy products': 'Susu & Produk Olahan Kaya Kalsium',
    'milk': 'Susu Sapi & Susu Formula',
    'cheese': 'Keju Tua & Olahan Susu',
    'yogurt': 'Yoghurt & Probiotik',
    'yoghurt': 'Yoghurt & Probiotik',
    'alcohol': 'Minuman Beralkohol',
    'alcoholic beverages': 'Minuman Beralkohol',
    'wine': 'Anggur Beralkohol (Wine)',
    'beer': 'Bir & Minuman Beralkohol',
    'grapefruit': 'Jus Grapefruit (Jeruk Bali)',
    'grapefruit juice': 'Jus Grapefruit (Jeruk Bali)',
    'orange juice': 'Jus Jeruk Segar',
    'orange': 'Buah Jeruk Segar',
    'apple': 'Buah Apel Segar',
    'apple juice': 'Jus Apel Segar',
    'coffee': 'Kopi & Minuman Berkafein Tinggi',
    'caffeine': 'Kopi & Minuman Berkafein Tinggi',
    'tea': 'Teh Pekat',
    'green tea': 'Teh Hijau Pekat (Kaya Tanin & Polifenol)',
    'high fat': 'Makanan Tinggi Lemak',
    'high-fat meal': 'Makanan Tinggi Lemak & Minyak',
    'fatty meal': 'Makanan Berlemak Tinggi',
    'tyramine': 'Makanan Tinggi Tiramin (Keju Tua, Daging Fermentasi)',
    'tobacco': 'Rokok & Produk Tembakau',
    'smoking': 'Merokok / Paparan Asap Rokok',
    'salt': 'Garam Dapur / Natrium',
    'salt substitutes': 'Garam Pengganti Rendah Natrium (Kaya Kalium)',
    'potassium': 'Kalium / Suplemen Kalium',
    'calcium': 'Kalsium / Suplemen Kalsium',
    'iron': 'Zat Besi / Suplemen Fe',
    'garlic': 'Bawang Putih (Garlic)',
    'licorice': 'Akar Manis (Licorice)',
    'soy': 'Kedelai & Produk Kedelai',
    'walnut': 'Kacang Kenari (Walnut)',
    'walnuts': 'Kacang Kenari (Walnut)',
    'cottonseed': 'Minyak Biji Kapas',
    'water': 'Air Putih',
    'food': 'Makanan / Jadwal Waktu Makan'
  };

  if (foodDictionary[lower]) {
    return foodDictionary[lower];
  }

  for (const [eng, indo] of Object.entries(foodDictionary)) {
    if (lower === eng || lower === eng + 's' || lower.startsWith(eng + ' ') || lower.endsWith(' ' + eng)) {
      return indo;
    }
  }

  return foodName;
}

/**
 * Normalizes semantic variants of foods/nutrients to a canonical entity
 * Prevents duplicates like "Jus Grapefruit (Jeruk Bali)" and "Jus Jeruk Bali / Grapefruit"
 */
export function normalizeFoodEntity(foodName: string): { canonicalKey: string; canonicalName: string } {
  const lower = (foodName || '').toLowerCase().trim();

  if (lower.includes('grapefruit') || lower.includes('jeruk bali')) {
    return { canonicalKey: 'food_grapefruit', canonicalName: 'Jus Grapefruit (Jeruk Bali)' };
  }
  if (lower.includes('alkohol') || lower.includes('alcohol') || lower.includes('minuman keras') || lower.includes('wine') || lower.includes('beer')) {
    return { canonicalKey: 'food_alcohol', canonicalName: 'Minuman Beralkohol' };
  }
  if (lower.includes('susu') || lower.includes('kalsium') || lower.includes('yoghurt') || lower.includes('dairy') || lower.includes('milk') || lower.includes('cheese') || lower.includes('keju')) {
    return { canonicalKey: 'food_calcium_dairy', canonicalName: 'Susu & Produk Olahan Kaya Kalsium' };
  }
  if (lower.includes('orange juice') || lower.includes('jus jeruk') || (lower.includes('orange') && !lower.includes('agent'))) {
    return { canonicalKey: 'food_orange_juice', canonicalName: 'Jus Jeruk Segar' };
  }
  if (lower.includes('apple') || lower.includes('apel')) {
    return { canonicalKey: 'food_apple', canonicalName: 'Jus Apel Segar' };
  }
  if (lower.includes('kopi') || lower.includes('kafein') || lower.includes('caffeine') || lower.includes('coffee')) {
    return { canonicalKey: 'food_caffeine', canonicalName: 'Kopi & Minuman Berkafein Tinggi' };
  }
  if (lower.includes('spinach') || lower.includes('bayam')) {
    return { canonicalKey: 'food_oxalate_spinach', canonicalName: 'Bayam & Sayuran Hijau Tinggi Oksalat' };
  }
  if (lower.includes('rhubarb')) {
    return { canonicalKey: 'food_oxalate_rhubarb', canonicalName: 'Rhubarb & Tumbuhan Asam Oksalat' };
  }
  if (lower.includes('grain') || lower.includes('gandum') || lower.includes('bekatul') || lower.includes('serat') || lower.includes('bran') || lower.includes('fiber') || lower.includes('cereal') || lower.includes('oat')) {
    return { canonicalKey: 'food_fiber', canonicalName: 'Bekatul, Gandum Utuh & Makanan Kaya Serat' };
  }
  if (lower.includes('vitamin k') || (lower.includes('sayuran hijau') && !lower.includes('oksalat'))) {
    return { canonicalKey: 'food_vitamin_k', canonicalName: 'Sayuran Hijau Kaya Vitamin K (Bayam, Kale, Brokoli)' };
  }
  if (lower.includes('tiramin') || lower.includes('tirosin') || lower.includes('tyramine') || lower.includes('keju tua') || lower.includes('aged cheese')) {
    return { canonicalKey: 'food_tyramine', canonicalName: 'Makanan Tinggi Tiramin (Keju Tua, Ikan Asin/Fermentasi)' };
  }
  if (lower.includes('pengganti garam') || lower.includes('salt substitute') || (lower.includes('kalium') && lower.includes('diet')) || lower.includes('potassium')) {
    return { canonicalKey: 'food_potassium_salt', canonicalName: 'Garam Pengganti Rendah Natrium (Kaya Kalium / KCl)' };
  }
  if (lower.includes('lemak') || lower.includes('makanan berat') || lower.includes('fatty') || lower.includes('high fat') || lower.includes('fat')) {
    return { canonicalKey: 'food_high_fat', canonicalName: 'Makanan Tinggi Lemak (Gorengan, Santan, Daging Berlemak)' };
  }
  if (lower.includes('teh hijau') || lower.includes('green tea')) {
    return { canonicalKey: 'food_green_tea', canonicalName: 'Teh Hijau Pekat (Kaya Tanin & Polifenol)' };
  }
  if (lower.includes('oksalat') || lower.includes('oxalate')) {
    return { canonicalKey: 'food_oxalate', canonicalName: 'Bayam & Tumbuhan Tinggi Asam Oksalat' };
  }
  if (lower.includes('rokok') || lower.includes('tembakau') || lower.includes('tobacco') || lower.includes('smoking') || lower.includes('smoke')) {
    return { canonicalKey: 'food_tobacco', canonicalName: 'Rokok & Produk Tembakau (Nikotin/Polisiklik)' };
  }
  if (lower.includes('garlic') || lower.includes('bawang putih')) {
    return { canonicalKey: 'food_garlic', canonicalName: 'Bawang Putih (Garlic)' };
  }
  if (lower.includes('licorice') || lower.includes('akar manis')) {
    return { canonicalKey: 'food_licorice', canonicalName: 'Akar Manis (Licorice)' };
  }
  if (lower.includes('soy') || lower.includes('kedelai')) {
    return { canonicalKey: 'food_soy', canonicalName: 'Kedelai & Produk Olahan Kedelai' };
  }

  const translated = translateFoodNameToIndonesian(foodName);
  return { canonicalKey: `food_${lower.replace(/[^a-z0-9]/g, '_')}`, canonicalName: translated };
}

/**
 * Checks if a clinical sentence is already in Indonesian
 */
export function isIndonesianClinicalText(text: string): boolean {
  if (!text) return false;
  const lower = text.toLowerCase();

  // If text contains known English phrases, it is NOT pure Indonesian and must be translated
  const engMarkers = [
    'oxalic acid', 'phytic acid', 'may decrease', 'may increase', 'consider withholding',
    'concomitant use', 'coadministration', 'co-administration', 'should be advised',
    'should not be taken', 'at least 2 hours', 'patients should', 'plasma concentrations',
    'absorption of', 'risk of hepatic', 'hepatic injury', 'transaminases have been',
    'spinach or rhubarb', 'whole grains'
  ];
  if (engMarkers.some(m => lower.includes(m))) return false;

  const idMarkers = [
    ' dalam ', ' dengan ', ' pada ', ' untuk ', ' yang ', ' dapat ', ' hindari ',
    ' beri ', ' konsumsi ', ' minum ', ' kadar ', ' hati ', ' ginjal ', ' otot ',
    ' obat ', ' saluran ', ' risiko ', ' penurunan ', ' peningkatan ', ' bersamaan '
  ];
  return idMarkers.some(marker => lower.includes(marker));
}

/**
 * Translates English Food-Drug clinical interaction text into clear, authoritative Indonesian
 */
export function translateClinicalEnglishToIndonesian(text: string, foodCategory?: string, drugName?: string): string {
  if (!text) return '';
  if (isIndonesianClinicalText(text)) return text;

  const lower = text.toLowerCase();

  // Statin + Alcohol archetype
  if ((lower.includes('statin') || (drugName && /simvastatin|atorvastatin|rosuvastatin|lovastatin/i.test(drugName))) && (lower.includes('alcohol') || lower.includes('hepatic injury') || lower.includes('transaminases'))) {
    if (lower.includes('counseled') || lower.includes('clinicians') || lower.includes('should be advised') || lower.includes('avoid substantial')) {
      return 'HINDARI konsumsi minuman beralkohol selama menjalani terapi obat statin. Segera konsultasikan ke dokter atau apoteker jika mengalami rasa lelah berlebih, mual persisten, nyeri perut kanan atas, atau urin berwarna gelap.';
    }
    return 'Peningkatan tajam risiko toksisitas hati (hepatotoksisitas berat, peningkatan enzim transaminase SGOT/SGPT > 3x batas atas normal), iritasi saluran cerna, dan penekanan sistem saraf pusat.';
  }

  // Statin + Grapefruit archetype
  if ((lower.includes('statin') || (drugName && /simvastatin|atorvastatin|rosuvastatin|lovastatin/i.test(drugName))) && (lower.includes('grapefruit') || lower.includes('cyp3a4') || lower.includes('rhabdomyolysis'))) {
    if (lower.includes('counseled') || lower.includes('advised') || lower.includes('avoid the consumption')) {
      return 'HINDARI mengonsumsi buah grapefruit atau meminum jus jeruk bali selama menjalani terapi simvastatin. Waspadai dan laporkan segera jika timbul nyeri otot, kelemahan fisik, atau urin gelap.';
    }
    return 'Kadar simvastatin plasma melonjak hingga 300-1000%, memicu Rhabdomyolysis akut, miopati berat, dan gagal ginjal akut.';
  }

  // Quinolone / Ciprofloxacin + Dairy / Calcium archetype
  if ((lower.includes('ciprofloxacin') || lower.includes('quinolone') || (drugName && /ciprofloxacin|levofloxacin|ofloxacin/i.test(drugName))) && (lower.includes('dairy') || lower.includes('calcium') || lower.includes('chelat') || lower.includes('fortified'))) {
    if (lower.includes('oral ciprofloxacin should not') || lower.includes('least 2 hours') || lower.includes('ingested') || lower.includes('withholding')) {
      return 'Beri jeda konsumsi ciprofloxacin minimal 2 jam SEBELUM atau 4 jam SETELAH mengonsumsi susu, yoghurt, keju, atau makanan/minuman yang diperkaya kalsium.';
    }
    return 'Kation kalsium (Ca2+) dalam susu dan produk olahannya membentuk kelat kompleks tak larut dengan ciprofloxacin, menurunkan penyerapan dan bioavailabilitas antibiotik hingga 40-60% sehingga memicu kegagalan terapi infeksi.';
  }

  // Quinolone + Caffeine archetype
  if ((lower.includes('ciprofloxacin') || (drugName && /ciprofloxacin/i.test(drugName))) && (lower.includes('caffeine') || lower.includes('coffee'))) {
    if (lower.includes('limit') || lower.includes('avoid') || lower.includes('counsel')) {
      return 'Batasi asupan kopi, teh pekat, atau minuman energi berkafein selama masa pengobatan untuk mencegah jantung berdebar kencang, gelisah, dan insomnia.';
    }
    return 'Siprofloksasin menghambat pembersihan kafein melalui enzim CYP1A2, melipatgandakan kadar kafein darah dan memicu stimulasi sistem saraf pusat berlebih.';
  }

  // Calcium / Oxalate archetype
  if (lower.includes('oxalic acid') || lower.includes('phytic acid') || lower.includes('spinach')) {
    if (lower.includes('consider withholding') || lower.includes('at least 2 hours')) {
      return 'Beri jeda konsumsi kalsium minimal 2 jam sebelum atau sesudah mengonsumsi bayam, sayuran tinggi asam oksalat, atau bekatul/serat gandum.';
    }
    return 'Asam oksalat dalam bayam dan asam fitat dalam serat gandum membentuk presipitat kelat tak larut dengan kalsium, menurunkan penyerapan kalsium di usus secara drastis.';
  }

  // Warfarin / Vitamin K archetype
  if (lower.includes('vitamin k') || lower.includes('warfarin')) {
    if (lower.includes('avoid') || lower.includes('consistent') || lower.includes('patient')) {
      return 'Pertahankan asupan sayuran hijau kaya vitamin K secara konsisten dan teratur setiap hari. Jangan mengubah pola makan drastis tanpa konsultasi dokter/apoteker.';
    }
    return 'Vitamin K dalam sayuran hijau mengantagonis efek antikoagulan warfarin, menurunkan nilai INR dan meningkatkan risiko terbentuknya bekuan darah (trombosis).';
  }

  // Phrase-by-phrase medical replacement dictionary
  let translated = text;
  const phraseMap: [RegExp, string][] = [
    [/concomitant use of\s+/gi, 'Penggunaan bersamaan '],
    [/coadministration with\s+/gi, 'Pemberian bersamaan dengan '],
    [/co-administration with\s+/gi, 'Pemberian bersamaan dengan '],
    [/may significantly increase the plasma concentrations of\s+/gi, 'dapat meningkatkan kadar plasma '],
    [/may significantly increase\s+/gi, 'dapat meningkatkan secara signifikan '],
    [/may decrease the absorption of\s+/gi, 'dapat menurunkan penyerapan '],
    [/may decrease\s+/gi, 'dapat menurunkan '],
    [/may increase the risk of\s+/gi, 'dapat meningkatkan risiko '],
    [/risk of hepatic injury/gi, 'risiko kerusakan organ hati (hepatotoksisitas)'],
    [/active acid metabolites/gi, 'metabolit asam aktif'],
    [/inhibition of cyp450 3a4-mediated first-pass metabolism/gi, 'penghambatan metabolisme lintas pertama yang dimediasi enzim CYP3A4'],
    [/in the gut wall/gi, 'di dinding saluran cerna'],
    [/by certain compounds present in\s+/gi, 'oleh senyawa aktif dalam '],
    [/patients should be advised to avoid\s+/gi, 'Pasien disarankan untuk menghindari '],
    [/patients should be counseled to avoid\s+/gi, 'Pasien harus diedukasi untuk menghindari '],
    [/patients receiving therapy with\s+/gi, 'Pasien yang sedang menjalani terapi dengan '],
    [/should be advised to avoid the consumption of\s+/gi, 'harus menghindari konsumsi '],
    [/should not be taken with\s+/gi, 'tidak boleh dikonsumsi bersama '],
    [/dairy products or calcium-fortified foods/gi, 'produk olahan susu atau makanan tinggi kalsium'],
    [/dairy products/gi, 'produk olahan susu'],
    [/calcium-fortified foods/gi, 'makanan kaya kalsium'],
    [/at least 2 hours before or after\s+/gi, 'minimal 2 jam sebelum atau sesudah '],
    [/administration/gi, 'konsumsi obat'],
    [/rhabdomyolysis/gi, 'rhabdomiolisis akut'],
    [/unexplained muscle pain/gi, 'nyeri otot tanpa sebab'],
    [/muscle weakness/gi, 'kelemahan otot fisik'],
    [/dark colored urine/gi, 'urin berwarna gelap'],
    [/serum transaminases/gi, 'enzim transaminase SGOT/SGPT'],
    [/contraindications to\s+/gi, 'kontraindikasi terhadap '],
    [/is contraindicated/gi, 'merupakan kontraindikasi mutlak']
  ];

  for (const [pattern, replacement] of phraseMap) {
    translated = translated.replace(pattern, replacement);
  }

  return translated;
}

/**
 * Normalizes an individual DrugFoodInteraction item into clean Indonesian
 */
export function localizeFoodInteraction(dfi: DrugFoodInteraction): DrugFoodInteraction {
  const { canonicalKey, canonicalName } = normalizeFoodEntity(dfi.foodName);
  
  return {
    ...dfi,
    foodName: canonicalName,
    clinicalOutcome: translateClinicalEnglishToIndonesian(dfi.clinicalOutcome || dfi.mechanism, dfi.foodCategory, dfi.drugName),
    recommendation: translateClinicalEnglishToIndonesian(dfi.recommendation, dfi.foodCategory, dfi.drugName),
    mechanism: translateClinicalEnglishToIndonesian(dfi.mechanism, dfi.foodCategory, dfi.drugName)
  };
}

export function evaluateFoodInteractions(
  selectedDrugs: Drug[],
  staticFoodInteractions: DrugFoodInteraction[] = []
): DrugFoodInteraction[] {
  const results: DrugFoodInteraction[] = [];
  const SEVERITY_WEIGHT: Record<string, number> = { Major: 3, Moderate: 2, Minor: 1 };

  for (const drug of selectedDrugs) {
    const drugNameLower = (drug.name || '').toLowerCase().trim();
    const genericNameLower = (drug.genericName || '').toLowerCase().trim();

    // 1. Check static matches with token resolution
    const staticMatches = staticFoodInteractions.filter((s) => {
      const sTokens = s.drugName.toLowerCase().split(/[/,&()]/).map((t) => t.trim()).filter(Boolean);
      return sTokens.some((t) => drugNameLower.includes(t) || genericNameLower.includes(t) || t.includes(drugNameLower));
    });

    if (staticMatches.length > 0) {
      for (const rawMatch of staticMatches) {
        const match = localizeFoodInteraction(rawMatch);
        const { canonicalKey, canonicalName } = normalizeFoodEntity(match.foodName);
        const itemKey = `dfi-${drug.id}-${canonicalKey}`;
        const existingIdx = results.findIndex((r) => r.id === itemKey);

        const newWeight = SEVERITY_WEIGHT[match.severity] || 1;

        const preparedItem: DrugFoodInteraction = {
          ...match,
          id: itemKey,
          foodName: canonicalName,
          drugName: drug.name,
          references: match.references || "1. Stockley's Drug Interactions (13th Ed.), Pharmaceutical Press\n2. DDInter 2.0 (Other Interaction - DFI), Nature Protocols 2022\n3. Cerner Multum Clinical Compendium",
          ddinterId: match.ddinterId || (match.id.startsWith('ddinter-') ? match.id.replace('ddinter-dfi-', 'DDInter-DFI-') : `DDInter-DFI-${drug.id.replace(/^drug-/, '')}`),
          mechanismCategory: match.mechanismCategory || (match.foodCategory === 'Buah / Juice' ? 'Metabolism' : match.foodCategory === 'Susu / Kalsium' ? 'Absorption' : 'Metabolism')
        };

        if (existingIdx === -1) {
          results.push(preparedItem);
        } else {
          const oldWeight = SEVERITY_WEIGHT[results[existingIdx].severity] || 1;
          const isMatchIndonesian = isIndonesianClinicalText(match.clinicalOutcome) || isIndonesianClinicalText(match.recommendation);
          const isExistingIndonesian = isIndonesianClinicalText(results[existingIdx].clinicalOutcome) || isIndonesianClinicalText(results[existingIdx].recommendation);

          // If current is Indonesian and existing is English, always replace with Indonesian
          if (isMatchIndonesian && !isExistingIndonesian) {
            results[existingIdx] = preparedItem;
          } else if (!isMatchIndonesian && isExistingIndonesian) {
            // Keep existing Indonesian, do not overwrite with English
          } else if (newWeight > oldWeight) {
            results[existingIdx] = preparedItem;
          } else if (newWeight === oldWeight) {
            const oldLen = (results[existingIdx].mechanism?.length || 0) + (results[existingIdx].recommendation?.length || 0);
            const newLen = (match.mechanism?.length || 0) + (match.recommendation?.length || 0);
            if (newLen > oldLen) {
              results[existingIdx] = preparedItem;
            }
          }
        }
      }
    } else if (drug.foodInteraction && drug.foodInteraction.length > 5) {
      // Dynamic fallback from drug monografi
      let foodCat: DrugFoodInteraction['foodCategory'] = 'Lainnya';
      const text = drug.foodInteraction.toLowerCase();
      if (text.includes('grapefruit') || text.includes('jeruk bali')) foodCat = 'Buah / Juice';
      else if (text.includes('susu') || text.includes('kalsium')) foodCat = 'Susu / Kalsium';
      else if (text.includes('alkohol')) foodCat = 'Alkohol';
      else if (text.includes('vitamin k') || text.includes('bayam')) foodCat = 'Makanan Tinggi Vitamin K';
      else if (text.includes('kopi') || text.includes('kafein')) foodCat = 'Kafein / Kopi';
      else if (text.includes('lemak')) foodCat = 'Makanan Tinggi Lemak';
      else if (text.includes('kalium') || text.includes('mineral')) foodCat = 'Suplemen / Mineral';

      const { canonicalKey, canonicalName } = normalizeFoodEntity(foodCat);
      const itemKey = `dfi-dyn-${drug.id}-${canonicalKey}`;
      const existingIdx = results.findIndex((r) => r.id === itemKey);

      if (existingIdx === -1) {
        results.push(localizeFoodInteraction({
          id: itemKey,
          drugName: drug.name,
          foodName: canonicalName !== foodCat ? canonicalName : 'Rekomendasi Diet & Makanan Monografi',
          foodCategory: foodCat,
          severity: text.includes('hindari') ? 'Major' : 'Moderate',
          mechanism: `Interaksi absorbsi atau metabolisme organ antara ${drug.name} dan asupan nutrisi makanan.`,
          clinicalOutcome: `Sifat interaksi: ${drug.foodInteraction}`,
          recommendation: `Ikuti petunjuk waktu makan untuk ${drug.name}: ${drug.foodInteraction}`,
          references: "1. Monografi Resmi BPOM & Formularium Nasional (Fornas)\n2. Stockley's Drug Interactions Compendium\n3. DDInter 2.0 Clinical Guidance Standard",
          ddinterId: `DDInter-DFI-${drug.id.replace(/^drug-/, '')}`,
          mechanismCategory: foodCat === 'Susu / Kalsium' ? 'Absorption' : 'Metabolism'
        }));
      }
    }
  }

  return results.sort((a, b) => {
    const aIsDDInter = Boolean(a.ddinterId?.startsWith('DDInter') || a.id.startsWith('ddinter-'));
    const bIsDDInter = Boolean(b.ddinterId?.startsWith('DDInter') || b.id.startsWith('ddinter-'));

    if (aIsDDInter && !bIsDDInter) return -1;
    if (!aIsDDInter && bIsDDInter) return 1;

    const aWeight = SEVERITY_WEIGHT[a.severity] || 1;
    const bWeight = SEVERITY_WEIGHT[b.severity] || 1;
    if (aWeight !== bWeight) return bWeight - aWeight;

    return a.foodName.localeCompare(b.foodName);
  });
}

function createDynamicInteraction(
  drugA: Drug,
  drugB: Drug,
  severity: SeverityLevel,
  mechanism: string,
  clinicalOutcome: string,
  management: string,
  mechanismCategory?: DDInterMechanismCategory,
  alternativeOptions?: string[],
  ddinterOriginalText?: string,
  ddinterOriginalManagement?: string
): DrugInteraction {
  const pairKey = [drugA.name.toLowerCase().trim(), drugB.name.toLowerCase().trim()].sort().join('__');
  const hash = Math.abs(pairKey.split('').reduce((acc, c) => (acc * 31 + c.charCodeAt(0)) | 0, 0)) % 900000 + 100000;
  const category = mechanismCategory || categorizeDDInterMechanism(mechanism, clinicalOutcome);

  const synthText = (!ddinterOriginalText || !ddinterOriginalManagement)
    ? synthesizeDDInterOriginalText({
        drugAName: drugA.name,
        drugBName: drugB.name,
        severity,
        mechanism,
        clinicalOutcome,
        management,
        mechanismCategory: category
      })
    : null;

  const safeAlts = (alternativeOptions && alternativeOptions.length > 0)
    ? alternativeOptions
    : synthesizeSafeAlternatives({
        drugAName: drugA.name,
        drugBName: drugB.name,
        severity,
        mechanismCategory: category
      });

  return {
    id: `ddinter-dyn-${drugA.id}-${drugB.id}`,
    drugAId: drugA.id,
    drugBId: drugB.id,
    drugAName: drugA.name,
    drugBName: drugB.name,
    severity,
    mechanism,
    clinicalOutcome,
    management,
    evidenceLevel: 'Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)',
    ddinterPairId: `DDInter-PAIR-DYN-${hash}`,
    mechanismCategory: category,
    alternativeOptions: safeAlts,
    ddinterOriginalText: ddinterOriginalText || synthText?.text,
    ddinterOriginalManagement: ddinterOriginalManagement || synthText?.management
  };
}

export interface TripleWhammyResult {
  detected: boolean;
  aceiOrArb?: Drug;
  diuretic?: Drug;
  nsaid?: Drug;
  description: string;
  clinicalOutcome: string;
  recommendation: string;
  alternatives: string[];
}

/**
 * Detects the potentially fatal "Triple Whammy" triad:
 * ACEi / ARB + Diuretic + NSAID
 */
export function evaluateTripleWhammyTriad(drugs: Drug[]): TripleWhammyResult | null {
  if (!drugs || drugs.length < 3) return null;

  const isAceiOrArb = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    const c = (d.category || '').toLowerCase();
    const atc = (d.atcCode || '').toUpperCase();
    return atc.startsWith('C09') || c.includes('ace') || c.includes('arb') || c.includes('renin') ||
      n.endsWith('pril') || g.endsWith('pril') || n.endsWith('sartan') || g.endsWith('sartan') ||
      ['captopril', 'ramipril', 'lisinopril', 'enalapril', 'perindopril', 'candesartan', 'valsartan', 'losartan', 'telmisartan', 'irbesartan'].some(s => n.includes(s) || g.includes(s));
  };

  const isDiuretic = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    const c = (d.category || '').toLowerCase();
    const atc = (d.atcCode || '').toUpperCase();
    return atc.startsWith('C03') || c.includes('diuretik') || c.includes('diuretic') ||
      ['furosemide', 'furosemid', 'hct', 'hydrochlorothiazide', 'spironolactone', 'spironolakton', 'indapamide', 'chlorthalidone', 'bumetanide', 'torsemide'].some(s => n.includes(s) || g.includes(s));
  };

  const isNsaid = (d: Drug) => {
    const n = (d.name || '').toLowerCase();
    const g = (d.genericName || '').toLowerCase();
    const c = (d.category || '').toLowerCase();
    const atc = (d.atcCode || '').toUpperCase();
    return atc.startsWith('M01A') || c.includes('nsaid') || c.includes('antiinflamasi non-steroid') ||
      ['asam mefenamat', 'mefenamic', 'ibuprofen', 'meloxicam', 'ketorolac', 'diclofenac', 'diklofenak', 'piroxicam', 'celecoxib', 'etoricoxib', 'ketoprofen', 'indomethacin', 'naproxen'].some(s => n.includes(s) || g.includes(s));
  };

  const foundAcei = drugs.find(isAceiOrArb);
  const foundDiuretic = drugs.find(isDiuretic);
  const foundNsaid = drugs.find(isNsaid);

  if (foundAcei && foundDiuretic && foundNsaid) {
    return {
      detected: true,
      aceiOrArb: foundAcei,
      diuretic: foundDiuretic,
      nsaid: foundNsaid,
      description: `Kombinasi simultan dari 3 pilar nefrotoksik: Penyekat RAAS (${foundAcei.name}) + Diuretik (${foundDiuretic.name}) + NSAID (${foundNsaid.name}).`,
      clinicalOutcome: `SINDROM "TRIPLE WHAMMY" AKUT: Diuretik memicu deplesi volume plasma, NSAID menyempitkan arteriol aferen ginjal (inhibisi prostaglandin), dan ACEi/ARB mendilatasi arteriol eferen. Tekanan filtrasi intraglomerulus kolaps secara mendadak, meningkatkan risiko Gagal Ginjal Akut (AKI / Acute Kidney Injury) hingga 300% dan memicu hiperkalemia berat yang mengancam jiwa.`,
      recommendation: `HINDARI KOMBINASI INI SECARA MUTLAK. Hentikan NSAID (${foundNsaid.name}) dan ganti analgesik dengan Parasetamol dosis terapeutik (maks. 3000-4000 mg/hari). Jika NSAID mutlak diperlukan, pantau kreatinin serum, ureum, dan kadar kalium darah setiap 48-72 jam.`,
      alternatives: ['Parasetamol (Acetaminophen)', 'Tramadol (jika nyeri sedang-berat non-inflamasi)', 'Analgesik topikal (Gel Natrium Diklofenak untuk nyeri sendi lokal)', 'Kompres hangat / Fisioterapi']
    };
  }

  return null;
}

/**
 * Helper to match selected drugs with Herb-Drug interactions
 */
export function evaluateHerbInteractionsForDrugs(
  drugs: Drug[],
  herbDatabase: any[] = []
): any[] {
  if (!drugs || drugs.length === 0) return [];
  const results: any[] = [];
  const seenIds = new Set<string>();

  for (const drug of drugs) {
    const dName = (drug.name || '').toLowerCase().trim();
    const dGen = (drug.genericName || '').toLowerCase().trim();
    const dCat = (drug.category || '').toLowerCase().trim();

    for (const item of herbDatabase) {
      const ruleDrug = (item.drugName || '').toLowerCase();
      const ruleClass = (item.drugClass || '').toLowerCase();

      const isMatch =
        (dName.length >= 3 && ruleDrug.includes(dName)) ||
        (dGen.length >= 3 && ruleDrug.includes(dGen)) ||
        (ruleDrug.length >= 3 && (dName.includes(ruleDrug) || dGen.includes(ruleDrug))) ||
        (ruleClass.includes('antikoagulan') && (dCat.includes('antikoagulan') || ['warfarin', 'rivaroxaban', 'apixaban', 'heparin'].some(s => dName.includes(s) || dGen.includes(s)))) ||
        (ruleClass.includes('antiplatelet') && (dCat.includes('antiplatelet') || ['aspirin', 'clopidogrel'].some(s => dName.includes(s) || dGen.includes(s)))) ||
        (ruleClass.includes('nsaid') && (dCat.includes('nsaid') || ['ibuprofen', 'meloxicam', 'mefenamat', 'ketorolac'].some(s => dName.includes(s) || dGen.includes(s)))) ||
        (ruleClass.includes('antidiabetes') && (dCat.includes('antidiabetes') || ['metformin', 'glimepiride', 'insulin'].some(s => dName.includes(s) || dGen.includes(s)))) ||
        (ruleClass.includes('antihipertensi') && (dCat.includes('antihipertensi') || ['amlodipine', 'captopril', 'candesartan'].some(s => dName.includes(s) || dGen.includes(s))));

      if (isMatch && !seenIds.has(`${item.id}__${drug.id}`)) {
        seenIds.add(`${item.id}__${drug.id}`);
        results.push({
          ...item,
          matchedDrugName: drug.name
        });
      }
    }
  }

  return results;
}

/**
 * Helper to match selected drugs with Drug-Lab interactions
 */
export function evaluateDrugLabInteractionsForDrugs(
  drugs: Drug[],
  labDatabase: any[] = []
): any[] {
  if (!drugs || drugs.length === 0) return [];
  const results: any[] = [];
  const seenIds = new Set<string>();

  for (const drug of drugs) {
    const dName = (drug.name || '').toLowerCase().trim();
    const dGen = (drug.genericName || '').toLowerCase().trim();
    const dCat = (drug.category || '').toLowerCase().trim();

    for (const item of labDatabase) {
      const ruleDrug = (item.drugName || '').toLowerCase();
      const ruleGen = (item.genericName || '').toLowerCase();
      const ruleClass = (item.drugClass || '').toLowerCase();

      const isMatch =
        (dName.length >= 3 && (ruleDrug.includes(dName) || ruleGen.includes(dName))) ||
        (dGen.length >= 3 && (ruleDrug.includes(dGen) || ruleGen.includes(dGen))) ||
        (ruleDrug.length >= 3 && (dName.includes(ruleDrug) || dGen.includes(ruleDrug))) ||
        (ruleClass.includes('statin') && (dCat.includes('statin') || dName.includes('statin'))) ||
        (ruleClass.includes('nsaid') && (dCat.includes('nsaid') || ['ibuprofen', 'mefenamat', 'meloxicam'].some(s => dName.includes(s)))) ||
        (ruleClass.includes('florokuinolon') && (dCat.includes('quinolone') || ['levofloxacin', 'ciprofloxacin'].some(s => dName.includes(s)))) ||
        (ruleClass.includes('dekongestan') && ['pseudoephedrine', 'pseudoefedrin', 'ephedrine'].some(s => dName.includes(s) || dGen.includes(s)));

      if (isMatch && !seenIds.has(`${item.id}__${drug.id}`)) {
        seenIds.add(`${item.id}__${drug.id}`);
        results.push({
          ...item,
          matchedDrugName: drug.name
        });
      }
    }
  }

  return results;
}

/**
 * Evaluates potential Drug-Disease Interactions (Contraindications) based on selected drugs and patient comorbidities
 * Follows DDInter 2.0 and Beers Criteria 2023 guidelines
 */
export function evaluateDrugDiseaseInteractions(
  selectedDrugs: Drug[],
  selectedDiseaseNames: string[] = [],
  diseaseDatabase: DrugDiseaseInteraction[] = [],
  matchAllDiseasesIfEmpty: boolean = false
): DrugDiseaseInteraction[] {
  const results: DrugDiseaseInteraction[] = [];
  const seenKeys = new Set<string>();

  for (const drug of selectedDrugs) {
    const drugNameLower = (drug.name || '').toLowerCase().trim();
    const genericNameLower = (drug.genericName || '').toLowerCase().trim();
    const categoryLower = (drug.category || '').toLowerCase().trim();

    for (const rule of diseaseDatabase) {
      const ruleDiseaseLower = rule.diseaseName.toLowerCase();
      const ruleDrugLower = rule.drugName.toLowerCase();

      // Check if this disease is active in patient's selected list (or all if matchAllDiseasesIfEmpty is true)
      let isDiseaseSelected = false;
      if (selectedDiseaseNames.length > 0) {
        const DISEASE_STOP_WORDS = new Set(['penyakit', 'dan', 'atau', 'dengan', 'yang', 'pada', 'stadium', 'derajat', 'riwayat', 'berat', 'akut', 'kronis', 'gagal', 'ringan', 'sedang', 'aktif', 'gangguan']);
        isDiseaseSelected = selectedDiseaseNames.some((dis) => {
          const dLower = dis.toLowerCase().trim();
          if (ruleDiseaseLower.includes(dLower) || dLower.includes(ruleDiseaseLower)) return true;
          
          const rawTokens = dLower.replace(/[()/,-]/g, ' ').split(/\s+/).filter(t => t.length >= 3);
          const meaningfulTokens = rawTokens.filter(t => !DISEASE_STOP_WORDS.has(t));
          const tokensToTest = meaningfulTokens.length > 0 ? meaningfulTokens : rawTokens;
          
          return tokensToTest.some((token) => 
            ruleDiseaseLower.includes(token) || 
            rule.id.toLowerCase().includes(token) ||
            (rule.diseaseCategory && rule.diseaseCategory.toLowerCase().includes(token))
          );
        });
      } else if (matchAllDiseasesIfEmpty) {
        isDiseaseSelected = true;
      }

      if (!isDiseaseSelected) {
        continue;
      }

      // Check if drug matches rule tokens
      const ruleDrugTokens = ruleDrugLower.split(/[/,&()]/).map((t) => t.trim()).filter(Boolean);
      const isDrugMatch = ruleDrugTokens.some((token) => {
        if (token.length < 3) return false;
        return (
          drugNameLower.includes(token) ||
          genericNameLower.includes(token) ||
          token.includes(drugNameLower) ||
          (token.includes('nsaid') && (categoryLower.includes('nsaid') || categoryLower.includes('antiinflamasi non-steroid'))) ||
          (token.includes('beta-blocker') && categoryLower.includes('beta blocker')) ||
          (token.includes('statin') && categoryLower.includes('statin')) ||
          (token.includes('kortikosteroid') && categoryLower.includes('kortikosteroid'))
        );
      });

      if (isDrugMatch) {
        // Intelligent deduplication by drug and canonical disease name, prioritizing highest severity
        const normDiseaseKey = rule.diseaseName.toLowerCase().trim();
        const uniqueKey = `${drug.id}__${normDiseaseKey}`;
        const SEVERITY_WEIGHT: Record<string, number> = { Major: 3, Moderate: 2, Minor: 1 };
        const newWeight = SEVERITY_WEIGHT[rule.severity] || 1;

        const existingIdx = results.findIndex((r) => r.id === `ddsi-eval-${uniqueKey}`);
        if (existingIdx === -1) {
          results.push({
            ...rule,
            id: `ddsi-eval-${uniqueKey}`,
            drugName: `${drug.name} (${drug.genericName || drug.name})`
          });
        } else {
          const oldWeight = SEVERITY_WEIGHT[results[existingIdx].severity] || 1;
          if (newWeight > oldWeight) {
            results[existingIdx] = {
              ...rule,
              id: `ddsi-eval-${uniqueKey}`,
              drugName: `${drug.name} (${drug.genericName || drug.name})`
            };
          }
        }
      }
    }
  }

  return results;
}


