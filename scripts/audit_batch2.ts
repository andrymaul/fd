import { SWAMEDIKASI_PROTOCOLS } from '../src/data/swamedikasiData';
import { PHARMACY_SOP_LIST } from '../src/data/pharmacySopData';
import { PHARMACY_REGULATIONS_DATA } from '../src/data/pharmacyRegulationsData';
import { getAllDrugNotes } from '../src/data/drugNotesData';
import { COMMERCIAL_DRUG_RECONSTITUTIONS, BUD_DOSAGE_RULES } from '../src/data/beyondUseDateData';
import { PEDIATRIC_DRUGS_DATABASE } from '../src/data/pediatricDosingData';
import { MEDICATION_GUIDES } from '../src/data/medicationGuides';
import { TEMPLATE_DEFINITIONS } from '../src/data/instagramStudioPresets';

console.log('=== SECOND CLINICAL SUITE AUDIT ===');

function checkDups(name: string, items: { id?: string }[]) {
  const map = new Map<string, number>();
  for (const item of items) {
    if (!item.id) {
      console.log(`[${name}] Item with missing ID:`, item);
      continue;
    }
    map.set(item.id, (map.get(item.id) || 0) + 1);
  }
  const dups = Array.from(map.entries()).filter(([_, c]) => c > 1);
  if (dups.length > 0) {
    console.log(`[${name}] DUPLICATE IDs FOUND (${dups.length}):`, dups);
  } else {
    console.log(`[${name}] OK - ${items.length} items unique.`);
  }
}

if (SWAMEDIKASI_PROTOCOLS) checkDups('SWAMEDIKASI_PROTOCOLS', SWAMEDIKASI_PROTOCOLS);
if (PHARMACY_SOP_LIST) checkDups('PHARMACY_SOP_LIST', PHARMACY_SOP_LIST);
if (PHARMACY_REGULATIONS_DATA) checkDups('PHARMACY_REGULATIONS_DATA', PHARMACY_REGULATIONS_DATA);
const allNotes = getAllDrugNotes();
if (allNotes) checkDups('DRUG_NOTES', allNotes);
if (COMMERCIAL_DRUG_RECONSTITUTIONS) checkDups('COMMERCIAL_DRUG_RECONSTITUTIONS', COMMERCIAL_DRUG_RECONSTITUTIONS);
if (BUD_DOSAGE_RULES) checkDups('BUD_DOSAGE_RULES', BUD_DOSAGE_RULES);
if (PEDIATRIC_DRUGS_DATABASE) checkDups('PEDIATRIC_DRUGS_DATABASE', PEDIATRIC_DRUGS_DATABASE);
if (MEDICATION_GUIDES) checkDups('MEDICATION_GUIDES', MEDICATION_GUIDES);
if (TEMPLATE_DEFINITIONS) checkDups('TEMPLATE_DEFINITIONS', TEMPLATE_DEFINITIONS);

console.log('Second audit completed.');
