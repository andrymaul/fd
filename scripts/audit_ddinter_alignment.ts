import { INITIAL_DRUGS, INITIAL_INTERACTIONS } from '../src/data/ddinterData';
import { resolveInteractionPair } from '../src/utils/ddinterEngine';

console.log('========================================================');
console.log('🔬 AUDIT PENYELARASAN STANDAR RESMI DDINTER 2.0 (v4.0.4)');
console.log('========================================================\n');

let checkedCount = 0;
let majorCount = 0;
let moderateCount = 0;
let minorCount = 0;
let unknownCount = 0;
let missingVerbatimCount = 0;

INITIAL_INTERACTIONS.forEach((inter) => {
  checkedCount++;
  if (inter.severity === 'Major') majorCount++;
  else if (inter.severity === 'Moderate') moderateCount++;
  else if (inter.severity === 'Minor') minorCount++;
  else unknownCount++;

  if (!inter.ddinterOriginalText || !inter.ddinterOriginalManagement) {
    missingVerbatimCount++;
  }
});

console.log(`Total Pasangan Database Utama : ${checkedCount}`);
console.log(`- Major (Level 3)              : ${majorCount}`);
console.log(`- Moderate (Level 2)           : ${moderateCount}`);
console.log(`- Minor (Level 1)              : ${minorCount}`);
console.log(`- Unknown                      : ${unknownCount}`);
console.log(`- Teks Verbatim Tersedia       : ${checkedCount - missingVerbatimCount} / ${checkedCount}`);

console.log('\n--- UJI VALIDASI KHUSUS PASANGAN KRITIS DDINTER 2.0 ---');

const criticalPairs = [
  { drugA: 'Spironolactone', drugB: 'Captopril', expected: 'Major' },
  { drugA: 'Spironolactone', drugB: 'Ramipril', expected: 'Major' },
  { drugA: 'Spironolactone', drugB: 'Losartan', expected: 'Major' },
  { drugA: 'Spironolactone', drugB: 'Candesartan', expected: 'Major' },
  { drugA: 'Allopurinol', drugB: 'Captopril', expected: 'Major' },
  { drugA: 'Allopurinol', drugB: 'Ramipril', expected: 'Major' },
  { drugA: 'Warfarin', drugB: 'Aspirin', expected: 'Major' },
  { drugA: 'Simvastatin', drugB: 'Amlodipine', expected: 'Major' }
];

let criticalPassed = 0;
criticalPairs.forEach(({ drugA, drugB, expected }) => {
  const dA = INITIAL_DRUGS.find(d => d.name.toLowerCase().includes(drugA.toLowerCase())) || { id: `drug-${drugA.toLowerCase()}`, name: drugA, category: '' } as any;
  const dB = INITIAL_DRUGS.find(d => d.name.toLowerCase().includes(drugB.toLowerCase())) || { id: `drug-${drugB.toLowerCase()}`, name: drugB, category: '' } as any;

  const result = resolveInteractionPair(dA, dB, INITIAL_INTERACTIONS);
  if (result && result.severity === expected) {
    console.log(`  ✅ [PASS] ${drugA} ↔ ${drugB}: ${result.severity} (Sesuai DDInter 2.0)`);
    criticalPassed++;
  } else {
    console.log(`  ❌ [FAIL] ${drugA} ↔ ${drugB}: Mendapat ${result?.severity}, diharapkan ${expected}`);
  }
});

console.log(`\nHasil Validasi Pasangan Kritis: ${criticalPassed} / ${criticalPairs.length} Terverifikasi Tepat.\n`);
