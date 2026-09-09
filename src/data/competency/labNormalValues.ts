/**
 * DATABASE NILAI NORMAL LABORATORIUM KLINIS STANDAR UJIAN NASIONAL (UKMPPAI & APDFI CBT)
 * Digunakan sebagai referensi cepat peserta saat simulasi CBT sesuai fitur modal "Nilai Normal Lab"
 */

export interface LabValueItem {
  name: string;
  category: 'Hematologi' | 'Ginjal & Elektrolit' | 'Fungsi Hati' | 'Glukosa & Lipid' | 'Gas Darah & Tanda Vital';
  normalRange: string;
  unit: string;
  clinicalSignificance: string;
}

export const LAB_NORMAL_VALUES: LabValueItem[] = [
  // Hematologi
  { name: 'Hemoglobin (Hb) Pria', category: 'Hematologi', normalRange: '13.5 - 17.5', unit: 'g/dL', clinicalSignificance: 'Rendah: Anemia, perdarahan. Tinggi: Dehidrasi, PPOK kronis, polisitemia.' },
  { name: 'Hemoglobin (Hb) Wanita', category: 'Hematologi', normalRange: '12.0 - 15.5', unit: 'g/dL', clinicalSignificance: 'Ibu hamil standar WHO: >= 11.0 g/dL. Terapi anemia defisiensi besi: Sulfas Ferosus.' },
  { name: 'Leukosit (WBC / Sel Darah Putih)', category: 'Hematologi', normalRange: '4.500 - 10.000', unit: '/uL', clinicalSignificance: 'Tinggi (>10.000): Leukositosis infeksi bakteri akut, sepsis. Rendah (<4.000): Leukopenia supresi sumsum tulang/obat.' },
  { name: 'Trombosit (Platelet)', category: 'Hematologi', normalRange: '150.000 - 450.000', unit: '/uL', clinicalSignificance: 'Rendah (<150.000): Trombositopenia DHF/Dengue, ITP, risiko perdarahan spontan jika < 50.000.' },
  { name: 'Hematokrit (Ht) Pria', category: 'Hematologi', normalRange: '41 - 53', unit: '%', clinicalSignificance: 'Peningkatan Ht > 20% menandakan hemokonsentrasi/kebocoran plasma pada DBD.' },
  { name: 'Hematokrit (Ht) Wanita', category: 'Hematologi', normalRange: '36 - 46', unit: '%', clinicalSignificance: 'Penurunan Ht menandakan anemia atau hemodilusi cairan parenteral.' },
  { name: 'Eritrosit (RBC) Pria', category: 'Hematologi', normalRange: '4.5 - 5.9', unit: 'x 10^6/uL', clinicalSignificance: 'Jumlah sel darah merah matur untuk transportasi oksigen.' },
  { name: 'Eritrosit (RBC) Wanita', category: 'Hematologi', normalRange: '4.0 - 5.2', unit: 'x 10^6/uL', clinicalSignificance: 'Digunakan bersama indeks eritrosit MCV/MCH.' },
  { name: 'MCV (Mean Corpuscular Volume)', category: 'Hematologi', normalRange: '80 - 100', unit: 'fL', clinicalSignificance: '< 80 fL: Mikrositik (defisiensi besi, talasemia). > 100 fL: Makrositik (defisiensi B12/asam folat).' },
  { name: 'MCH (Mean Corpuscular Hemoglobin)', category: 'Hematologi', normalRange: '27 - 33', unit: 'pg', clinicalSignificance: 'Kandungan Hb rata-rata per sel. < 27 pg: Hipokromik.' },
  { name: 'MCHC', category: 'Hematologi', normalRange: '32 - 36', unit: 'g/dL', clinicalSignificance: 'Konsentrasi rata-rata hemoglobin dalam volume eritrosit.' },
  { name: 'Laju Endap Darah (LED / ESR)', category: 'Hematologi', normalRange: 'Pria < 15, Wanita < 20', unit: 'mm/jam', clinicalSignificance: 'Penanda non-spesifik proses inflamasi aktif, infeksi TBC, osteomielitis, atau penyakit autoimun.' },

  // Ginjal & Elektrolit
  { name: 'Serum Kreatinin (SCr) Pria', category: 'Ginjal & Elektrolit', normalRange: '0.7 - 1.3', unit: 'mg/dL', clinicalSignificance: 'Penanda utama faal filtrasi ginjal. Digunakan dalam rumus Cockcroft-Gault.' },
  { name: 'Serum Kreatinin (SCr) Wanita', category: 'Ginjal & Elektrolit', normalRange: '0.6 - 1.1', unit: 'mg/dL', clinicalSignificance: 'Massa otot wanita lebih kecil, rumus Cockcroft-Gault dikalikan faktor 0.85.' },
  { name: 'Ureum Darah / BUN (Blood Urea Nitrogen)', category: 'Ginjal & Elektrolit', normalRange: '7 - 20 (BUN) / 15 - 45 (Ureum)', unit: 'mg/dL', clinicalSignificance: 'Ureum = BUN x 2.14. Rasio BUN:SCr > 20:1 menunjukkan azotemia prerenal (dehidrasi berat).' },
  { name: 'eGFR (Estimasi Laju Filtrasi Glomerulus)', category: 'Ginjal & Elektrolit', normalRange: '> 90', unit: 'mL/min/1.73m2', clinicalSignificance: 'Stage 1: >=90; Stage 2: 60-89; Stage 3a: 45-59; Stage 3b: 30-44; Stage 4: 15-29; Stage 5: <15 (ESRD).' },
  { name: 'Natrium (Na+)', category: 'Ginjal & Elektrolit', normalRange: '135 - 145', unit: 'mEq/L (mmol/L)', clinicalSignificance: 'Hiponatremia (<135) risiko edema otak. Hipernatremia (>145) dehidrasi dan deplesi cairan.' },
  { name: 'Kalium (K+)', category: 'Ginjal & Elektrolit', normalRange: '3.5 - 5.0', unit: 'mEq/L (mmol/L)', clinicalSignificance: 'Kritis! Hipokalemia (<3.5) risiko intoksikasi digoksin. Hiperkalemia (>5.0) aritmia henti jantung (hindari ACEI/ARB/Spironolakton).' },
  { name: 'Klorida (Cl-)', category: 'Ginjal & Elektrolit', normalRange: '98 - 106', unit: 'mEq/L', clinicalSignificance: 'Keseimbangan anion ekstraseluler dan evaluasi anion gap asidosis metabolik.' },
  { name: 'Kalsium Total (Ca2+)', category: 'Ginjal & Elektrolit', normalRange: '8.5 - 10.5', unit: 'mg/dL', clinicalSignificance: 'Koreksi albumin jika hipoalbuminemia: Ca_koreksi = Ca_ukur + 0.8 x (4.0 - Albumin).' },
  { name: 'Magnesium (Mg2+)', category: 'Ginjal & Elektrolit', normalRange: '1.7 - 2.2', unit: 'mg/dL', clinicalSignificance: 'Hipomagnesemia sering memicu hipokalemia dan aritmia Torsades de Pointes.' },
  { name: 'Asam Urat (Uric Acid)', category: 'Ginjal & Elektrolit', normalRange: 'Pria: 3.5 - 7.2, Wanita: 2.6 - 6.0', unit: 'mg/dL', clinicalSignificance: 'Hiperurisemia (> 7.0 mg/dL) mencetuskan serangan artritis gout akut (terapi Allopurinol / Febuxostat).' },

  // Fungsi Hati
  { name: 'SGOT / AST (Aspartate Aminotransferase)', category: 'Fungsi Hati', normalRange: '< 35', unit: 'U/L', clinicalSignificance: 'Enzim intraseluler hati dan otot jantung. Peningkatan > 3x batas atas memerlukan evaluasi obat.' },
  { name: 'SGPT / ALT (Alanine Aminotransferase)', category: 'Fungsi Hati', normalRange: '< 45', unit: 'U/L', clinicalSignificance: 'Enzim spesifik hepatoseluler. Penanda utama Drug-Induced Liver Injury (DILI) akibat parasetamol/OAT.' },
  { name: 'Bilirubin Total', category: 'Fungsi Hati', normalRange: '0.2 - 1.0', unit: 'mg/dL', clinicalSignificance: 'Kadar > 2.0 mg/dL memicu manifestasi ikterus klinis sklera mata kuning.' },
  { name: 'Bilirubin Direk (Terkonjugasi)', category: 'Fungsi Hati', normalRange: '< 0.3', unit: 'mg/dL', clinicalSignificance: 'Meningkat pada obstruksi saluran empedu ekstrahepatik (batu empedu / kolestasis).' },
  { name: 'Albumin Serum', category: 'Fungsi Hati', normalRange: '3.5 - 5.0', unit: 'g/dL', clinicalSignificance: 'Protein pengikat obat asam berikatan tinggi (fenitoin, warfarin). Hipoalbuminemia meningkatkan toksisitas obat.' },
  { name: 'Fosfatase Alkali (ALP)', category: 'Fungsi Hati', normalRange: '30 - 120', unit: 'U/L', clinicalSignificance: 'Enzim membran kanalikuli empedu dan tulang.' },

  // Glukosa & Lipid
  { name: 'Gula Darah Puasa (GDP)', category: 'Glukosa & Lipid', normalRange: '70 - 99', unit: 'mg/dL', clinicalSignificance: 'Normal: 70-99. Prediabetes: 100-125. Diagnosis DM: >= 126 mg/dL (puasa min 8 jam).' },
  { name: 'Gula Darah 2 Jam PP / GDS', category: 'Glukosa & Lipid', normalRange: '< 140', unit: 'mg/dL', clinicalSignificance: 'Toleransi Glukosa Terganggu (TGT): 140-199. Diagnosis DM: >= 200 mg/dL disertai gejala klasik.' },
  { name: 'HbA1c (Hemoglobin Terglikasi)', category: 'Glukosa & Lipid', normalRange: '< 5.7', unit: '%', clinicalSignificance: 'Normal: < 5.7%. Prediabetes: 5.7-6.4%. Diagnosis DM: >= 6.5%. Target terapi DM konsensus PERKENI: < 7.0%.' },
  { name: 'Kolesterol Total', category: 'Glukosa & Lipid', normalRange: '< 200', unit: 'mg/dL', clinicalSignificance: 'Batas tinggi: 200-239 mg/dL. Tinggi: >= 240 mg/dL.' },
  { name: 'Kolesterol LDL (Low-Density Lipoprotein)', category: 'Glukosa & Lipid', normalRange: '< 100', unit: 'mg/dL', clinicalSignificance: 'Target terapi statin: < 100 (risiko sedang), < 70 (risiko tinggi PJK/DM), < 55 (risiko sangat tinggi).' },
  { name: 'Kolesterol HDL (High-Density Lipoprotein)', category: 'Glukosa & Lipid', normalRange: '> 40 (Pria), > 50 (Wanita)', unit: 'mg/dL', clinicalSignificance: 'Fraksi lipoprotein protektif antiaterogenik.' },
  { name: 'Trigliserida', category: 'Glukosa & Lipid', normalRange: '< 150', unit: 'mg/dL', clinicalSignificance: 'Batas tinggi: 150-199. Tinggi: 200-499. Sangat tinggi: >= 500 mg/dL (terapi Fibrat cegah pankreatitis).' },

  // Gas Darah & Tanda Vital
  { name: 'pH Darah Arteri', category: 'Gas Darah & Tanda Vital', normalRange: '7.35 - 7.45', unit: '', clinicalSignificance: '< 7.35: Asidosis (metabolik jika HCO3 rendah; respiratorik jika pCO2 tinggi). > 7.45: Alkalosis.' },
  { name: 'pCO2 (Tekanan Parsial Karbon Dioksida)', category: 'Gas Darah & Tanda Vital', normalRange: '35 - 45', unit: 'mmHg', clinicalSignificance: 'Komponen ventilasi paru pengatur pH darah.' },
  { name: 'HCO3- (Bikarbonat Plasma)', category: 'Gas Darah & Tanda Vital', normalRange: '22 - 26', unit: 'mEq/L', clinicalSignificance: 'Komponen ginjal pengatur sistem dapar bikarbonat.' },
  { name: 'Tekanan Darah (TD) Dewasa', category: 'Gas Darah & Tanda Vital', normalRange: '< 120 / < 80', unit: 'mmHg', clinicalSignificance: 'Normal: < 120/<80. Prahipertensi: 120-129/<80. HT Derajat 1: 130-139/80-89. HT Derajat 2: >= 140/90.' },
  { name: 'Laju Nadi (Heart Rate)', category: 'Gas Darah & Tanda Vital', normalRange: '60 - 100', unit: 'x/menit', clinicalSignificance: '< 60: Bradikardia (cek beta blocker/digoksin). > 100: Takikardia (cek salbutamol/dehidrasi/tirotoksikosis).' },
  { name: 'Laju Pernapasan (Respiratory Rate)', category: 'Gas Darah & Tanda Vital', normalRange: '12 - 20', unit: 'x/menit', clinicalSignificance: '< 12: Depresi napas (toksisitas opioid/overdosis morfin). > 20: Takipnea asma/hipoksia.' },
  { name: 'Suhu Tubuh Aksiler', category: 'Gas Darah & Tanda Vital', normalRange: '36.5 - 37.5', unit: '°C', clinicalSignificance: '>= 38.0 °C didefinisikan sebagai febris/demam infeksi.' }
];
