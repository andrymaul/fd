import { IV_DRUGS_DATABASE, SYRINGE_ADMIXTURE_DATABASE } from '../src/data/ivCompatibilityData';
import { LATIN_ABBREVIATIONS } from '../src/data/latinPrescriptionData';
import { HERB_DRUG_INTERACTIONS_DATABASE } from '../src/data/herbDrugInteractionsData';
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

checkDups('IV_DRUGS_DATABASE', IV_DRUGS_DATABASE);
checkDups('SYRINGE_ADMIXTURE_DATABASE', SYRINGE_ADMIXTURE_DATABASE);
checkDups('LATIN_ABBREVIATIONS', LATIN_ABBREVIATIONS);
checkDups('HERB_DRUG_INTERACTIONS_DATABASE', HERB_DRUG_INTERACTIONS_DATABASE);
checkDups('PREGNANCY_LACTATION_DATABASE', PREGNANCY_LACTATION_DATABASE);
checkDups('TOXICOLOGY_ANTIDOTES_DATABASE', TOXICOLOGY_ANTIDOTES_DATABASE);
checkDups('HIGH_ALERT_DRUGS', HIGH_ALERT_DRUGS);
checkDups('LASA_PAIRS', LASA_PAIRS);
checkDups('OOT_PRECURSOR_DRUGS', OOT_PRECURSOR_DRUGS);

console.log('Audit completed.');
