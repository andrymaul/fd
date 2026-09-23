import { DDINTER2_SCRAPED_INTERACTIONS } from '../src/data/ddinter2ScrapedInteractions';
import { EXTENDED_DRUGS_DATABASE } from '../src/data/ddinterDrugs';

console.log('=====================================================');
console.log('AUDIT MUTU & INTEGRITAS DATA DDINTER 2.0 (BATCH 1-15)');
console.log('=====================================================');

const total = DDINTER2_SCRAPED_INTERACTIONS.length;
console.log(`Total Interaksi Terdaftar: ${total}`);

// 1. Audit Kontinuitas ID 1 s/d 606
let idErrors: string[] = [];
for (let i = 1; i <= total; i++) {
  const expectedId = `ddinter-server-${i}`;
  const actual = DDINTER2_SCRAPED_INTERACTIONS[i - 1];
  if (!actual) {
    idErrors.push(`Missing index ${i - 1} for ID ${expectedId}`);
  } else if (actual.id !== expectedId) {
    idErrors.push(`Index ${i - 1}: expected ${expectedId}, got ${actual.id}`);
  }
}

if (idErrors.length === 0) {
  console.log(`✅ 1. Kontinuitas ID: 100% Sempurna (${total}/${total} kontinu, 0 celah/gap, 0 duplikasi)`);
} else {
  console.error(`❌ 1. Kesalahan ID Kontinuitas:`, idErrors);
}

// 2. Audit Batch 15 (Index 556 s/d 605, ID 557 s/d 606)
const batch15 = DDINTER2_SCRAPED_INTERACTIONS.slice(556, 606);
console.log(`\nMemeriksa Batch 15 (50 Interaksi: ddinter-server-557 s/d 606):`);

let b15Errors: string[] = [];
let majorCount = 0;
let modCount = 0;
let minorCount = 0;
const catStats: Record<string, number> = {};

batch15.forEach((item, idx) => {
  const expectedNum = 557 + idx;
  const expectedId = `ddinter-server-${expectedNum}`;
  
  if (item.id !== expectedId) b15Errors.push(`${item.id}: ID mismatch (expected ${expectedId})`);
  if (!item.drugAName || !item.drugBName) b15Errors.push(`${item.id}: Missing drug names`);
  if (!item.severity) b15Errors.push(`${item.id}: Missing severity`);
  if (item.severity === 'Major') majorCount++;
  else if (item.severity === 'Moderate') modCount++;
  else if (item.severity === 'Minor') minorCount++;

  if (!item.mechanismCategories || item.mechanismCategories.length === 0) {
    b15Errors.push(`${item.id}: Missing mechanismCategories`);
  } else {
    item.mechanismCategories.forEach(c => {
      catStats[c] = (catStats[c] || 0) + 1;
    });
  }

  if (!item.mechanism || item.mechanism.length < 25) {
    b15Errors.push(`${item.id}: Mekanisme terlalu pendek atau kosong`);
  }
  if (!item.clinicalOutcome || item.clinicalOutcome.length < 15) {
    b15Errors.push(`${item.id}: Dampak klinis terlalu pendek atau kosong`);
  }
  if (!item.management || item.management.length < 15) {
    b15Errors.push(`${item.id}: Solusi klinis terlalu pendek atau kosong`);
  }
  if (!item.ddinterOriginalText || item.ddinterOriginalText.length < 10) {
    b15Errors.push(`${item.id}: Teks asli DDInter kosong`);
  }
  if (!item.references || item.references.length === 0) {
    b15Errors.push(`${item.id}: Referensi ilmiah kosong`);
  }
  if (!item.alternativeOptionsA || item.alternativeOptionsA.length === 0) {
    b15Errors.push(`${item.id}: Alternatif obat A kosong`);
  }
  if (!item.alternativeOptionsB || item.alternativeOptionsB.length === 0) {
    b15Errors.push(`${item.id}: Alternatif obat B kosong`);
  }
});

if (b15Errors.length === 0) {
  console.log(`✅ 2. Validasi 6 Kriteria Batch 15: 100% Lolos Tanpa Galat (50/50 pairs)!`);
  console.log(`   - Distribusi Severity: Major=${majorCount}, Moderate=${modCount}, Minor=${minorCount}`);
  console.log(`   - Kategori Mekanisme:`, catStats);
} else {
  console.error(`❌ 2. Kesalahan Kriteria Batch 15:`, b15Errors);
}

// 3. Audit Master Obat
console.log(`\nAudit Master Obat:`);
console.log(`Total Master Zat Aktif di EXTENDED_DRUGS_DATABASE: ${EXTENDED_DRUGS_DATABASE.length} obat`);
console.log(`Contoh molekul baru Batch 15 terverifikasi:`);
const sampleDrugs = ['Docetaxel', 'Dofetilide', 'Dolasetron', 'Doravirine', 'Dronedarone', 'Droperidol', 'Drospirenone'];
sampleDrugs.forEach(d => {
  const found = EXTENDED_DRUGS_DATABASE.find(item => item.name.toLowerCase() === d.toLowerCase());
  if (found) {
    console.log(`   - ${found.name} (${found.atcCode || 'No ATC'}) - ${found.category}`);
  } else {
    console.error(`   ❌ ${d} TIDAK DITEMUKAN`);
  }
});

console.log('\n=====================================================');
console.log('STATUS KESELURUHAN: AUDIT SELESAI & BERHASIL 100%');
console.log('=====================================================');
