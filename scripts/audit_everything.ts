import { DDINTER2_OFFICIAL_ADDITIONS } from '../src/data/ddinter2OfficialAdditions';
import { DDINTER2_LIVE_INTERACTIONS } from '../src/data/ddinter2LiveInteractionsData';
import { DDINTER2_BATCH_2026_ADDITIONS } from '../src/data/ddinter2Batch2026Additions';
import { DDINTER2_COMPREHENSIVE_DDI } from '../src/data/ddinter2ComprehensiveDdiData';
import { DDINTER2_BULK_ADDITIONS } from '../src/data/ddinter2BulkAdditions';
import { DDINTER2_PHASE1_CHRONIC_ADDITIONS } from '../src/data/ddinter2Phase1ChronicAdditions';
import { DDINTER2_PHASE2_INFECTION_ADDITIONS } from '../src/data/ddinter2Phase2InfectionAdditions';
import { DDINTER2_PHASE3_CNS_ANALGESIC_ADDITIONS } from '../src/data/ddinter2Phase3CnsAnalgesicAdditions';
import { DDINTER2_PHASE4_MINOR_ADDITIONS } from '../src/data/ddinter2Phase4MinorAdditions';
import { DDINTER2_MODERATE_BATCH1_ADDITIONS } from '../src/data/ddinter2ModerateBatch1Additions';
import { DDINTER2_MODERATE_BATCH2_ADDITIONS } from '../src/data/ddinter2ModerateBatch2Additions';
import { DDINTER2_MODERATE_BATCH3_ADDITIONS } from '../src/data/ddinter2ModerateBatch3Additions';
import { DDINTER_OFFICIAL_INTERACTIONS } from '../src/data/ddinterOfficialInteractions';
import { IV_DRUGS_DATABASE, SYRINGE_ADMIXTURE_DATABASE } from '../src/data/ivCompatibilityData';
import { LATIN_ABBREVIATIONS } from '../src/data/latinPrescriptionData';
import { HERB_DRUG_INTERACTIONS_DATABASE } from '../src/data/herbDrugInteractionsData';
import { DRUG_LAB_INTERACTIONS_DATABASE } from '../src/data/drugLabInteractionsData';
import { PREGNANCY_LACTATION_DATABASE } from '../src/data/pregnancyLactationData';
import { TOXICOLOGY_ANTIDOTES_DATABASE } from '../src/data/toxicologyAntidotesData';
import { HIGH_ALERT_DRUGS, LASA_PAIRS, OOT_PRECURSOR_DRUGS } from '../src/data/highAlertLasaData';

console.log('=== FULL CLINICAL DATA SUITE AUDIT ===');

function checkDups(name: string, items: { id?: string }[]) {
  const map = new Map<string, number>();
  for (const item of items) {
    if (!item.id) {
      console.log(`[${name}] Found item with MISSING ID!`);
      continue;
    }
    map.set(item.id, (map.get(item.id) || 0) + 1);
  }
  const dups = Array.from(map.entries()).filter(([_, c]) => c > 1);
  if (dups.length > 0) {
    console.log(`[${name}] DUPLICATE IDs FOUND (${dups.length}):`, dups);
  } else {
    console.log(`[${name}] OK - ${items.length} items verified unique.`);
  }
}

checkDups('DDINTER2_OFFICIAL_ADDITIONS', DDINTER2_OFFICIAL_ADDITIONS);
checkDups('DDINTER2_LIVE_INTERACTIONS', DDINTER2_LIVE_INTERACTIONS);
checkDups('DDINTER2_BATCH_2026_ADDITIONS', DDINTER2_BATCH_2026_ADDITIONS);
checkDups('DDINTER2_COMPREHENSIVE_DDI', DDINTER2_COMPREHENSIVE_DDI);
checkDups('DDINTER2_BULK_ADDITIONS', DDINTER2_BULK_ADDITIONS);
checkDups('DDINTER2_PHASE1_CHRONIC_ADDITIONS', DDINTER2_PHASE1_CHRONIC_ADDITIONS);
checkDups('DDINTER2_PHASE2_INFECTION_ADDITIONS', DDINTER2_PHASE2_INFECTION_ADDITIONS);
checkDups('DDINTER2_PHASE3_CNS_ANALGESIC_ADDITIONS', DDINTER2_PHASE3_CNS_ANALGESIC_ADDITIONS);
checkDups('DDINTER2_PHASE4_MINOR_ADDITIONS', DDINTER2_PHASE4_MINOR_ADDITIONS);
checkDups('DDINTER2_MODERATE_BATCH1_ADDITIONS', DDINTER2_MODERATE_BATCH1_ADDITIONS);
checkDups('DDINTER2_MODERATE_BATCH2_ADDITIONS', DDINTER2_MODERATE_BATCH2_ADDITIONS);
checkDups('DDINTER2_MODERATE_BATCH3_ADDITIONS', DDINTER2_MODERATE_BATCH3_ADDITIONS);
checkDups('DDINTER_OFFICIAL_INTERACTIONS', DDINTER_OFFICIAL_INTERACTIONS);

checkDups('IV_DRUGS_DATABASE', IV_DRUGS_DATABASE);
checkDups('SYRINGE_ADMIXTURE_DATABASE', SYRINGE_ADMIXTURE_DATABASE);
checkDups('LATIN_ABBREVIATIONS', LATIN_ABBREVIATIONS);
checkDups('HERB_DRUG_INTERACTIONS_DATABASE', HERB_DRUG_INTERACTIONS_DATABASE);
checkDups('DRUG_LAB_INTERACTIONS_DATABASE', DRUG_LAB_INTERACTIONS_DATABASE);
checkDups('PREGNANCY_LACTATION_DATABASE', PREGNANCY_LACTATION_DATABASE);
checkDups('TOXICOLOGY_ANTIDOTES_DATABASE', TOXICOLOGY_ANTIDOTES_DATABASE);
checkDups('HIGH_ALERT_DRUGS', HIGH_ALERT_DRUGS);
checkDups('LASA_PAIRS', LASA_PAIRS);
checkDups('OOT_PRECURSOR_DRUGS', OOT_PRECURSOR_DRUGS);

console.log('Audit completed.');
