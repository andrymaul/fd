// ============================================================================
// INSTAGRAM STUDIO TEMPLATES & CLINICAL PRESETS DATABASE (146+ KASUS LENGKAP)
// FarmasiDruggist - Ekosistem Infografis & Promosi Farmasi Klinis Indonesia
// ============================================================================

export type TemplateCategory =
  | 'all'
  | 'ai-prompt'
  | 'ppra-stewardship'
  | 'swamedikasi'
  | 'skrining'
  | 'panduan'
  | 'dosis'
  | 'edukasi'
  | 'promo';

export type TemplateType =
  // Kategori Khusus: Generator Edukasi AI (1)
  | 'ai-education-prompt'
  // Kategori Khusus: Stewardship Antibiotik (PPRA) (4)
  | 'ppra-aware'
  | 'ppra-gyssens'
  | 'ppra-prophylaxis'
  | 'ppra-antibiogram'
  // Kategori 1: Swamedikasi & Praktik Apotek (6)
  | 'swam-triage'
  | 'swam-batuk'
  | 'swam-diare'
  | 'swam-maag'
  | 'dowa'
  | 'bud'
  // Kategori 2: Skrining Klinis & Patient Safety (8)
  | 'interaction'
  | 'iv-compat'
  | 'high-alert'
  | 'pregnancy'
  | 'drug-lab'
  | 'side-effects'
  | 'toxicology'
  | 'herb-drug'
  // Kategori 3: Panduan & Algoritma Klinis (6)
  | 'therapy-algorithm'
  | 'interactive-flowchart'
  | 'guideline-pillars'
  | 'clinical-pathway'
  | 'chrono-dosing'
  | 'pnpk-summary'
  // Kategori 4: Kalkulator Dosis & Edukasi Pasien (6)
  | 'renal-dosing'
  | 'pediatric-dose'
  | 'beers-geriatric'
  | 'patient-counseling'
  | 'tdm-drugs'
  | 'off-label'
  // Kategori 5: Pusat Belajar UKMPPAI & Regulasi (5)
  | 'ukmppai-quiz'
  | 'uktvf-quiz'
  | 'drug-notes'
  | 'sop-farmasi'
  | 'regulations'
  | 'latin-signa'
  | 'fornas-bpjs'
  // Kategori 6: Branding & Promosi Aplikasi (2)
  | 'showcase'
  | 'stats';

export interface TemplateDefinition {
  id: TemplateType;
  category: TemplateCategory;
  label: string;
  desc: string;
  badge: string;
  caseCount: number;
}

export const TEMPLATE_CATEGORIES: { id: TemplateCategory; label: string; count: number }[] = [
  { id: 'all', label: 'Semua', count: 40 },
  { id: 'ai-prompt', label: 'Generator Edukasi AI', count: 1 },
  { id: 'ppra-stewardship', label: 'Stewardship Antibiotik (PPRA)', count: 4 },
  { id: 'swamedikasi', label: 'Swamedikasi Apotek', count: 6 },
  { id: 'skrining', label: 'Skrining & Keamanan', count: 8 },
  { id: 'panduan', label: 'Panduan & Algoritma (PNPK)', count: 6 },
  { id: 'dosis', label: 'Dosis & Edukasi PIO', count: 6 },
  { id: 'edukasi', label: 'Belajar, Signa & Regulasi', count: 7 },
  { id: 'promo', label: 'Branding & Promo', count: 2 }
];

export const TEMPLATE_DEFINITIONS: TemplateDefinition[] = [
  // Generator Edukasi AI (1)
  { id: 'ai-education-prompt', category: 'ai-prompt', label: 'Formula Prompt AI Farmasi Klinis', desc: 'Prompt engineering medis siap pakai di ChatGPT, Gemini & Claude', badge: 'AI Prompt', caseCount: 8 },

  // Stewardship Antibiotik PPRA (4)
  { id: 'ppra-aware', category: 'ppra-stewardship', label: 'PPRA & Klasifikasi Antibiotik WHO AWaRe', desc: 'Kategori Access, Watch, Reserve & pencegahan resistensi kuman', badge: 'PPRA / AWaRe', caseCount: 8 },
  { id: 'ppra-gyssens', category: 'ppra-stewardship', label: 'Alur Evaluasi Kualitatif Gyssens', desc: 'Audit 6 langkah rasionalitas antibiotik RS: Kategori 0 s/d VI', badge: 'Audit Gyssens', caseCount: 7 },
  { id: 'ppra-prophylaxis', category: 'ppra-stewardship', label: 'Protokol Profilaksis Bedah (Surgical Prophylaxis)', desc: 'Waktu pemberian 30-60 menit sebelum insisi, Cefazolin & batas 24 jam', badge: 'Profilaksis Bedah', caseCount: 6 },
  { id: 'ppra-antibiogram', category: 'ppra-stewardship', label: 'Peta Resistensi Kuman & Antibiogram RS', desc: 'Interpretasi kultur MRSA, ESBL, CRE & strategi empirik vs definitif', badge: 'Antibiogram RS', caseCount: 6 },

  // Swamedikasi (6)
  { id: 'swam-triage', category: 'swamedikasi', label: 'Triage Swamedikasi & Red Flags', desc: 'Tanda bahaya yang wajib langsung dirujuk ke dokter', badge: 'Triage', caseCount: 8 },
  { id: 'swam-batuk', category: 'swamedikasi', label: 'Obat Batuk Kering vs Berdahak', desc: 'Pemilihan antitusif vs mukolitik & peringatan tensi', badge: 'Batuk', caseCount: 6 },
  { id: 'swam-diare', category: 'swamedikasi', label: 'Tatalaksana Diare Akut & Zinc', desc: 'Protokol rehidrasi Oralit + Zinc WHO & probiotik', badge: 'Diare', caseCount: 6 },
  { id: 'swam-maag', category: 'swamedikasi', label: 'Manajemen Maag, Dispepsia & GERD', desc: 'Antasida vs PPI vs Sukralfat & waktu minum obat', badge: 'Lambung', caseCount: 6 },
  { id: 'dowa', category: 'swamedikasi', label: 'Batasan Penyerahan Obat DOWA', desc: 'Kepmenkes DOWA 1-2-3 & batas maks per pasien', badge: 'Apotek', caseCount: 8 },
  { id: 'bud', category: 'swamedikasi', label: 'Panduan Beyond-Use Date (BUD)', desc: 'Aturan kedaluwarsa racikan pediatrik Farmakope VI', badge: 'Racikan', caseCount: 6 },

  // Skrining Klinis (8)
  { id: 'interaction', category: 'skrining', label: 'Peringatan Interaksi Obat (DDI)', desc: 'Pasangan obat berisiko fatal, mekanisme, & solusi', badge: 'Viral DDI', caseCount: 16 },
  { id: 'iv-compat', category: 'skrining', label: 'Injeksi IV & Presipitasi Y-Site', desc: 'Ko-infus ganda ICU & presipitasi kristal partikulat', badge: 'ICU & Ranap', caseCount: 8 },
  { id: 'high-alert', category: 'skrining', label: 'Waspada High-Alert & Tall Man LASA', desc: 'Standar ISMP, KCl pekat, insulin & kemasan mirip', badge: 'Patient Safety', caseCount: 12 },
  { id: 'pregnancy', category: 'skrining', label: 'Keamanan Obat Bumil & Busui', desc: 'Kategori teratogenik FDA & alternatif paling aman', badge: 'Maternal', caseCount: 12 },
  { id: 'drug-lab', category: 'skrining', label: 'Interaksi Obat & Hasil Uji Lab', desc: 'Obat yang mengacaukan tes darah/urin laboratorium', badge: 'Hasil Lab', caseCount: 8 },
  { id: 'side-effects', category: 'skrining', label: 'Efek Samping & Algoritma Naranjo', desc: 'Deteksi adverse drug reaction (ADR) & kausalitas', badge: 'MESO/ADR', caseCount: 8 },
  { id: 'toxicology', category: 'skrining', label: 'Toksikologi & Antidotum Spesifik', desc: 'Overdosis obat, intoksikasi akut & penawar lini 1', badge: 'Gawat Darurat', caseCount: 12 },
  { id: 'herb-drug', category: 'skrining', label: 'Interaksi Herbal vs Obat Modern', desc: 'Ginkgo, St. John’s Wort, Kunyit & risiko perdarahan/toksisitas', badge: 'Herbal DDI', caseCount: 8 },

  // Panduan & Algoritma Klinis (6)
  { id: 'therapy-algorithm', category: 'panduan', label: 'Algoritma Terapi Bertahap', desc: 'Alur eskalasi terapi lini 1 hingga refrakter berbasis konsensus', badge: 'Algoritma', caseCount: 12 },
  { id: 'interactive-flowchart', category: 'panduan', label: 'Percabangan Keputusan Klinis', desc: 'Pohon keputusan if-then berbasis komorbid & stratifikasi risiko', badge: 'Decision Tree', caseCount: 10 },
  { id: 'guideline-pillars', category: 'panduan', label: 'Pilar Terapi Baku Emas', desc: 'Fantastic Four HFrEF & kombinasi esensial penyelamat jiwa', badge: 'Pilar Baku Emas', caseCount: 10 },
  { id: 'clinical-pathway', category: 'panduan', label: 'Hospital Clinical Pathway', desc: 'Protokol fase rawat inap harian & kriteria discharge aman', badge: 'Clinical Pathway', caseCount: 8 },
  { id: 'chrono-dosing', category: 'panduan', label: 'Waktu Terbaik Minum Obat (Kronofarmakologi)', desc: 'Ritme sirkadian tubuh & optimalisasi efikasi obat pagi vs malam', badge: 'Jadwal Obat', caseCount: 8 },
  { id: 'pnpk-summary', category: 'panduan', label: 'Ringkasan Panduan Terapi PNPK Kemenkes', desc: 'Algoritma baku emas penyakit prioritas nasional: HT, DM, PPOK, TB, Sepsis', badge: 'PNPK Kemenkes', caseCount: 6 },

  // Dosis & Edukasi (6)
  { id: 'renal-dosing', category: 'dosis', label: 'Dosis Pasien Gangguan Ginjal', desc: 'Cutoff CrCl / eGFR & penyesuaian dosis antibiotik', badge: 'Nefrologi', caseCount: 8 },
  { id: 'pediatric-dose', category: 'dosis', label: 'Kalkulator Dosis Puyer Pediatrik', desc: 'Perhitungan mg/kgBB anak & zat pengisi SL', badge: 'Pediatrik', caseCount: 8 },
  { id: 'beers-geriatric', category: 'dosis', label: 'Kriteria Beers: Obat Berisiko Lansia', desc: 'Potentially inappropriate medications pada geriatri', badge: 'Geriatri', caseCount: 8 },
  { id: 'patient-counseling', category: 'dosis', label: 'Cara Pakai Obat Khusus (PIO)', desc: 'Edukasi cara pakai inhaler, tetes mata, suppositoria', badge: 'Konseling', caseCount: 8 },
  { id: 'tdm-drugs', category: 'dosis', label: 'Rentang Terapi Sempit & TDM', desc: 'Monitoring kadar obat Digoksin, Fenitoin, Litium & tanda toksik', badge: 'TDM Klinis', caseCount: 8 },
  { id: 'off-label', category: 'dosis', label: 'Indikasi & Dosis Off-Label (EBM)', desc: 'Penggunaan klinis berbasis bukti di luar indikasi resmi BPOM/FDA', badge: 'Off-Label EBM', caseCount: 22 },

  // Belajar & Regulasi (5)
  { id: 'ukmppai-quiz', category: 'edukasi', label: 'Latihan Soal CBT UKMPPAI', desc: 'Studi kasus vignette klinis, pilihan ganda A-E & pembahasan Apoteker', badge: 'UKMPPAI CBT', caseCount: 15 },
  { id: 'uktvf-quiz', category: 'edukasi', label: 'Latihan Soal CBT UKTVF', desc: 'Kasus vokasi D3-D4 farmasi, dispensing puyer, DOWA & CPOB', badge: 'UKTVF Vokasi', caseCount: 15 },
  { id: 'drug-notes', category: 'edukasi', label: 'Flashcard Hafalan Cepat UKMPPAI', desc: 'Rentang terapi sempit (TDM) & mekanisme molekuler', badge: 'UKMPPAI', caseCount: 8 },
  { id: 'sop-farmasi', category: 'edukasi', label: 'SOP Pelayanan Akreditasi Faskes', desc: 'Standar Permenkes 72/73 & CDOB instalasi farmasi', badge: 'Akreditasi', caseCount: 6 },
  { id: 'regulations', category: 'edukasi', label: 'Regulasi & UU Kesehatan Terkini', desc: 'UU 17/2023, kewenangan farmasi klinis & SIPNAP', badge: 'Hukum', caseCount: 6 },
  { id: 'latin-signa', category: 'edukasi', label: 'Singkatan Latin Resep & Signa Dokter', desc: 'Kuis tebak signa, waktu minum obat & cara baca resep: a.c., p.c., s.u.e., dtd', badge: 'Signa Resep', caseCount: 12 },
  { id: 'fornas-bpjs', category: 'edukasi', label: 'Restriksi Fornas & Peresepan BPJS', desc: 'Batas peresepan obat kronis PRB 30 hari, antihipertensi, antibiotik & syarat klaim', badge: 'Fornas & BPJS', caseCount: 8 },

  // Branding & Promo (2)
  { id: 'showcase', category: 'promo', label: 'Promosi Aplikasi (All-in-One)', desc: 'Highlight 8 fitur unggulan FarmasiDruggist', badge: 'Terpopuler', caseCount: 1 },
  { id: 'stats', category: 'promo', label: 'Database & Statistik Wow Factor', desc: '78 EBM, 90 Hafalan, 57 SOP, 11k+ Interaksi', badge: 'Branding', caseCount: 1 }
];

// ============================================================================
// CLINICAL PRESETS (220+ VERIFIED CASES)
// ============================================================================

// 1. Interaction Presets (12 Kasus)
export interface InteractionPreset {
  drugA: string;
  drugB: string;
  severity: 'Major' | 'Kontraindikasi' | 'Moderate';
  mechanism: string;
  solution: string;
}

export const INTERACTION_PRESETS: InteractionPreset[] = [
  {
    drugA: 'Clopidogrel',
    drugB: 'Omeprazole',
    severity: 'Major',
    mechanism: 'Omeprazole menghambat enzim CYP2C19 yang dibutuhkan untuk bioaktivasi Clopidogrel, menurunkan efek antiplatelet hingga 45% dan memicu risiko trombosis stent berulang.',
    solution: 'Ganti PPI ke Pantoprazole (inhibisi CYP2C19 paling lemah) atau Famotidine / H2-Blocker.'
  },
  {
    drugA: 'Metformin',
    drugB: 'Media Kontras Radiologi',
    severity: 'Kontraindikasi',
    mechanism: 'Kontras beryodium dapat memicu gagal ginjal akut (CIN), menyebabkan akumulasi Metformin sistemik dan risiko fatal Asidosis Laktat (mortalitas >50%).',
    solution: 'Tunda atau hentikan Metformin 48 jam sebelum dan sesudah prosedur kontras hingga fungsi ginjal dipastikan normal.'
  },
  {
    drugA: 'Spironolakton',
    drugB: 'Ramipril / Candesartan',
    severity: 'Major',
    mechanism: 'Kombinasi antagonis aldosteron dan ACEi/ARB meningkatkan reabsorpsi kalium secara berlebih di tubulus distal, memicu hiperkalemia berat dan aritmia jantung letal.',
    solution: 'Pantau ketat serum kalium dan kreatinin rutin; hindari suplemen kalium tambahan dan batasi asupan makanan tinggi kalium.'
  },
  {
    drugA: 'Simvastatin (>20 mg)',
    drugB: 'Amlodipine',
    severity: 'Major',
    mechanism: 'Amlodipine menghambat metabolisme Simvastatin via CYP3A4, meningkatkan konsentrasi statin hingga 77% dan meningkatkan risiko miopati serta Rhabdomyolysis.',
    solution: 'Batasi dosis Simvastatin maksimal 20 mg/hari jika dikombinasi Amlodipine, atau beralih ke Atorvastatin atau Rosuvastatin.'
  },
  {
    drugA: 'Sildenafil (Viagra)',
    drugB: 'Isosorbid Dinitrat (ISDN)',
    severity: 'Kontraindikasi',
    mechanism: 'Potensiasi pembentukan cyclic GMP berlebih memicu vasodilatasi pembuluh darah sistemik ekstrem dan syok hipotensi refrakter yang mengancam nyawa.',
    solution: 'KONTRAINDIKASI MUTLAK: Jangan pernah berikan nitrat dalam rentang 24 jam paska konsumsi Sildenafil (atau 48 jam paska Tadalafil).'
  },
  {
    drugA: 'Warfarin',
    drugB: 'Ketorolac / NSAID',
    severity: 'Major',
    mechanism: 'NSAID merusak mukosa lambung, menghambat agregasi trombosit, dan menggusur ikatan protein plasma Warfarin, melipatgandakan risiko perdarahan GI masif.',
    solution: 'Hindari NSAID sistemik; gunakan Parasetamol sebagai analgesik lini pertama dengan pemantauan nilai INR secara ketat.'
  },
  {
    drugA: 'Digoksin',
    drugB: 'Klaritromisin / Amiodaron',
    severity: 'Major',
    mechanism: 'Klaritromisin dan Amiodaron menghambat transporter P-glikoprotein di tubulus ginjal, meningkatkan kadar serum digoksin hingga 70-100% memicu toksisitas fatal.',
    solution: 'Turunkan dosis Digoksin sebesar 30-50%, pantau tanda toksisitas (mual, xanthopsia, bradikardia), dan periksa kadar serum digoksin (TDM).'
  },
  {
    drugA: 'Tramadol',
    drugB: 'Fluoxetine / SSRI',
    severity: 'Major',
    mechanism: 'Kombinasi agonis opioid dengan inhibisi reuptake serotonin memicu penumpukan serotonin berlebih di SSP dan risiko fatal Sindrom Serotonin.',
    solution: 'Hindari kombinasi; waspadai trias sindrom serotonin (hipertermia, klonus otot, agitasi ekstrem). Gunakan analgesik non-serotonergik.'
  },
  {
    drugA: 'Levofloksasin',
    drugB: 'Antasida Logam (Al/Mg)',
    severity: 'Moderate',
    mechanism: 'Kation divalen dan trivalen (Al3+, Mg2+, Ca2+, Fe2+) membentuk senyawa khelat tidak larut dengan fluorokuinolon, menurunkan bioavailabilitas antibiotik hingga 90%.',
    solution: 'Beri jeda waktu minum minimal 2 jam sebelum atau 4 jam setelah mengonsumsi antasida atau suplemen multivitamin mineral.'
  },
  {
    drugA: 'Allopurinol',
    drugB: 'Azathioprine / 6-MP',
    severity: 'Kontraindikasi',
    mechanism: 'Allopurinol menghambat enzim Xantine Oxidase yang memetabolisme Azathioprine, memicu akumulasi metabolit sitotoksik dan supresi sumsum tulang fatal.',
    solution: 'Jika harus dikombinasikan, dosis Azathioprine wajib diturunkan drastis hingga 25-33% dari dosis normal, disertai pemantauan leukosit mingguan.'
  },
  {
    drugA: 'Litium Karbonat',
    drugB: 'Ibuprofen / NSAID',
    severity: 'Major',
    mechanism: 'NSAID menghambat sintesis prostaglandin ginjal, menurunkan laju filtrasi glomerulus dan menurunkan klirens litium hingga 40%, memicu toksisitas litium akut.',
    solution: 'Hindari penggunaan NSAID pada pasien terapi litium; gunakan Parasetamol atau analgesik topikal yang tidak mempengaruhi hemodinamik ginjal.'
  },
  {
    drugA: 'Metotreksat (MTX)',
    drugB: 'Kotrimoksazol',
    severity: 'Kontraindikasi',
    mechanism: 'Keduanya menghambat enzim Dihydrofolate Reductase (DHFR). Trimetoprim juga menghambat sekresi tubulus MTX, memicu pansitopenia berat dan nekrosis epidermal.',
    solution: 'KONTRAINDIKASI: Hindari kombinasi Kotrimoksazol pada pasien yang mendapat terapi MTX dosis onkologi maupun reumatologi.'
  },
  {
    drugA: 'Metronidazole',
    drugB: 'Alkohol (Minuman Beralkohol)',
    severity: 'Kontraindikasi',
    mechanism: 'Metronidazole menghambat enzim Aldehida Dehidrogenase (ALDH), memicu akumulasi asetaldehida masif: reaksi mirip disulfiram dengan mual-muntah hebat, takikardia, flushing, dan hipotensi akut.',
    solution: 'KONTRAINDIKASI MUTLAK: Hindari konsumsi alkohol selama terapi dan minimal 48-72 jam setelah dosis Metronidazole terakhir selesai.'
  },
  {
    drugA: 'Warfarin',
    drugB: 'Rifampisin',
    severity: 'Major',
    mechanism: 'Rifampisin adalah inducer enzim CYP2C9 & CYP3A4 paling poten di hati, mempercepat eliminasi Warfarin drastis hingga 85% dan menggagalkan efek antikoagulan (risiko tinggi stroke/trombosis).',
    solution: 'Tingkatkan dosis Warfarin hingga 2-3 kali lipat dengan pemantauan INR tiap 3 hari, atau alihkan sementara ke LMWH (Enoxaparin) selama terapi antituberkulosis.'
  },
  {
    drugA: 'Kalsium Glukonat / Ringer Laktat',
    drugB: 'Ceftriaxone IV',
    severity: 'Kontraindikasi',
    mechanism: 'Ion kalsium berikatan langsung dengan molekul seftriakson membentuk garam kalsium-seftriakson tidak larut (presipitasi kristal) di kapiler mikrovaskular paru dan parenkim ginjal.',
    solution: 'KONTRAINDIKASI MUTLAK: Jangan pernah mencampur atau memberikan Ceftriaxone bersamaan dengan larutan IV yang mengandung Kalsium (RL, Hartman, TPN) pada jalur vena yang sama.'
  },
  {
    drugA: 'Ciprofloxacin',
    drugB: 'Teofilin / Aminofilin',
    severity: 'Major',
    mechanism: 'Ciprofloxacin menghambat enzim CYP1A2 hepatik secara kuat, menurunkan klirens Teofilin hingga 50% dan melipatgandakan risiko toksisitas fatal (takikardia ventrikel, tremor, kejang refrakter).',
    solution: 'Turunkan dosis Teofilin sebesar 30-50%, monitor kadar serum teofilin ketat (TDM target 10-20 mcg/mL), atau ganti antibiotik ke Levofloxacin (inhibisi CYP1A2 minimal).'
  }
];

// 2. IV Compatibility Presets (8 Kasus)
export interface IvCompatPreset {
  drugA: string;
  drugB: string;
  compatibility: 'Inkompatibel (Presipitasi)' | 'Kontraindikasi Fatal' | 'Kompatibel Y-Site';
  dangerMechanism: string;
  clinicalSolution: string;
  standardReference: string;
}

export const IV_COMPAT_PRESETS: IvCompatPreset[] = [
  {
    drugA: 'Ceftriaxone IV',
    drugB: 'Kalsium Glukonat / RL',
    compatibility: 'Kontraindikasi Fatal',
    dangerMechanism: 'Reaksi pengikatan ion kalsium dan ceftriaxone membentuk kristal presipitasi garam kalsium-ceftriaxone tidak larut di mikrosirkulasi paru dan ginjal neonatus & dewasa.',
    clinicalSolution: 'Gunakan pelarut bebas kalsium (NaCl 0.9% / D5W). Bilas (flushing) selang infus secara menyeluruh sebelum dan sesudah infus bila harus diberikan berurutan.',
    standardReference: "Trissel's ASHP 2024 & FDA Safety Alert"
  },
  {
    drugA: 'Furosemide (Lasix)',
    drugB: 'Dobutamin / Dopamin',
    compatibility: 'Inkompatibel (Presipitasi)',
    dangerMechanism: 'Inkompatibilitas pH ekstrem (Furosemide basa kuat pH 8.5-9.3 vs Dobutamin asam pH 2.5-4.0) memicu presipitasi kekeruhan kristal seketika di jalur Y-site infus.',
    clinicalSolution: 'JANGAN campur atau berikan pada jalur Y-site bersamaan. Gunakan multi-lumen CVC terpisah atau pasang jalur infus perifer kedua.',
    standardReference: 'ASHP Injectable Drugs & King Guide'
  },
  {
    drugA: 'Fenitoin Natrium (Dilantin)',
    drugB: 'Infus Dekstrosa 5% (D5W)',
    compatibility: 'Inkompatibel (Presipitasi)',
    dangerMechanism: 'Fenitoin membutuhkan pH basa kuat (>11) agar tetap terlarut. pH asam cairan Dekstrosa (~4.5) memicu mikrokristalisasi instan dan risiko fatal emboli kristal.',
    clinicalSolution: 'HANYA boleh dilarutkan dalam NaCl 0.9%, gunakan filter in-line 0.22 mikron, dan bilas jalur infus dengan normal saline sebelum dan sesudah pemberian.',
    standardReference: "Handbook on Injectable Drugs (Trissel's)"
  },
  {
    drugA: 'Diazepam Injeksi',
    drugB: 'NaCl 0.9% / D5W Infus',
    compatibility: 'Inkompatibel (Presipitasi)',
    dangerMechanism: 'Pelarut kosolven Diazepam (propilen glikol/etanol) terdestabilisasi saat diencerkan dalam cairan infus bervolume besar, menghasilkan endapan kristal halus.',
    clinicalSolution: 'Berikan secara IV bolus lambat langsung ke vena besar (maksimal 5 mg/menit) tanpa pengenceran, atau gunakan infus kontinu Midazolam sebagai alternatif.',
    standardReference: 'PIONAS BPOM RI & ASHP Injectable Drugs'
  },
  {
    drugA: 'Midazolam Injeksi',
    drugB: 'Pantoprazole IV',
    compatibility: 'Inkompatibel (Presipitasi)',
    dangerMechanism: 'Inkompatibilitas asam-basa (Midazolam pH 3.0-3.6 vs Pantoprazole pH 9.0-10.5) memicu presipitasi partikulat putih susu instan di selang infus.',
    clinicalSolution: 'Pisahkan jalur infus atau lakukan flushing dengan NaCl 0.9% minimal 10-20 mL sebelum beralih dari satu sediaan ke sediaan lainnya.',
    standardReference: "Trissel's 2024 Compatibility Database"
  },
  {
    drugA: 'Amiodaron Injeksi',
    drugB: 'NaCl 0.9% Konsentrasi Rendah',
    compatibility: 'Inkompatibel (Presipitasi)',
    dangerMechanism: 'Infus Amiodaron konsentrasi <0.6 mg/mL dalam NaCl 0.9% mengalami ketidakstabilan kimia dan presipitasi kristal mikroskopis.',
    clinicalSolution: 'Larutkan HANYA dalam D5W untuk infus kontinu (konsentrasi 1.2 - 6.0 mg/mL). Gunakan wadah kaca atau polyolefin (bebas PVC) untuk mencegah adsorpsi obat.',
    standardReference: 'AHA ACLS Guidelines & Lexicomp Parenteral'
  },
  {
    drugA: 'Vankomisin Injeksi',
    drugB: 'Heparin Sodium',
    compatibility: 'Inkompatibel (Presipitasi)',
    dangerMechanism: 'Senyawa kationik Vankomisin bereaksi dengan polianion Heparin membentuk presipitasi kompleks partikulat tidak larut di dalam lumen kateter vena.',
    clinicalSolution: 'Jangan pernah mencampur dalam satu syringe atau Y-site. Bilas lumen kateter dengan normal saline sebelum dan sesudah pemberian Vankomisin.',
    standardReference: 'ASHP Guideline on Extravasation & IV Safety'
  },
  {
    drugA: 'Natrium Bikarbonat',
    drugB: 'Kalsium Klorida / Glukonat',
    compatibility: 'Inkompatibel (Presipitasi)',
    dangerMechanism: 'Reaksi ionik langsung membentuk endapan Kalsium Karbonat putih kapur yang tidak larut, memicu oklusi kateter dan risiko emboli partikulat organ.',
    clinicalSolution: 'Berikan pada jalur IV yang benar-benar terpisah. Jangan pernah mencampur kedua obat resusitasi gawat darurat ini dalam satu selang.',
    standardReference: 'Pediatric & Neonatal Dosage Handbook (Lexicomp)'
  }
];

// 3. High-Alert Presets (8 Kasus)
export interface HighAlertPreset {
  drugName: string;
  tallManName: string;
  category: string;
  dangerAlert: string;
  safetyRule: string;
  labelBadge: string;
}

export const HIGH_ALERT_PRESETS: HighAlertPreset[] = [
  {
    drugName: 'Kalium Klorida (KCl) 7.46%',
    tallManName: 'KCl PEKAT (Potassium Chloride)',
    category: 'Elektrolit Konsentrasi Tinggi',
    dangerAlert: 'Pemberian IV Push/Bolus langsung memicu henti jantung mendadak (cardiac arrest) dan kematian seketika.',
    safetyRule: 'KONTRAINDIKASI IV BOLUS! Wajib diencerkan dalam cairan infus (maks 40 mEq/L) via syringe pump & verifikasi ganda independen.',
    labelBadge: 'MERAH - ELEKTROLIT PEKAT'
  },
  {
    drugName: 'Insulin Reguler vs Glargine',
    tallManName: 'InsuLIN Rapid vs InsuLIN Basal',
    category: 'Hormon & Hipoglikemik Kritis',
    dangerAlert: 'Salah mengambil jenis insulin atau salah dosis unit (10 vs 100 Unit) memicu koma hipoglikemia ireversibel.',
    safetyRule: 'Hanya Insulin Reguler (Short-acting) yang boleh via IV infus. Gunakan spuit khusus bertanda UNIT (bukan mL) dan double-check 2 perawat.',
    labelBadge: 'MERAH - HIGH ALERT'
  },
  {
    drugName: 'Cefotaxime vs Ceftriaxone',
    tallManName: 'CefoTAXime vs CefTRIAXone',
    category: 'LASA / NORUM (Look-Alike)',
    dangerAlert: 'Kemasan vial antibiotik generasi ke-3 yang sangat mirip memicu tertukarnya sediaan saat dispensing cepat di depo IGD/ICU.',
    safetyRule: 'Terapkan Tall Man Lettering pada rak depo farmasi, pisahkan letak abjad penyimpanan, dan gunakan stiker penanda LASA kuning.',
    labelBadge: 'KUNING - LASA'
  },
  {
    drugName: 'Heparin Sodium',
    tallManName: 'HEPARIN Flush vs HEPARIN Terapi',
    category: 'Antikoagulan Kritis',
    dangerAlert: 'Salah memilih vial Heparin 10.000 Unit/mL menggantikan vial Flush 10 Unit/mL memicu perdarahan intrakranial fatal.',
    safetyRule: 'Pisahkan penyimpanan vial dosis terapi pekat dari depo rawat inap. Verifikasi ganda kecepatan infus syringe pump tiap jam.',
    labelBadge: 'MERAH - HIGH ALERT'
  },
  {
    drugName: 'Morfin vs Hidromorfon',
    tallManName: 'MORFin vs HidroMORFon',
    category: 'Narkotika & Agonis Opioid Kuat',
    dangerAlert: 'Hidromorfon memiliki potensi analgesik 5-7 kali lipat lebih kuat dari Morfin; salah konversi dosis memicu henti napas fatal.',
    safetyRule: 'Simpan di lemari double-lock narkotika. Konversi dosis wajib diverifikasi oleh Apoteker Klinis dan siapkan Nalokson di troli emergensi.',
    labelBadge: 'MERAH - NARKOTIKA'
  },
  {
    drugName: 'Efedrin vs Epinefrin',
    tallManName: 'EFEDrin vs EPINEFrin',
    category: 'Agonis Adrenergik & Vasopresor',
    dangerAlert: 'Epinefrin 1000x lebih poten dari Efedrin; tertukar saat resusitasi syok memicu krisis hipertensi ekstrem dan infark miokard.',
    safetyRule: 'Terapkan Tall Man Lettering, bedakan warna label spuit resusitasi kamar operasi, dan lakukan independent double-check sebelum injeksi.',
    labelBadge: 'MERAH - VASOPRESOR'
  },
  {
    drugName: 'Metformin vs Metronidazole',
    tallManName: 'METFORMIN vs METRONIDAZOLE',
    category: 'LASA / Sound-Alike',
    dangerAlert: 'Nama obat terdengar sangat mirip saat instruksi verbal/telepon; pasien non-diabetes menerima Metformin berisiko hipoglikemia.',
    safetyRule: 'Terapkan prosedur Read-Back (TULBAKON: Tulis, Baca, Konfirmasi) saat menerima instruksi verbal dan tuliskan indikasi pada resep.',
    labelBadge: 'KUNING - LASA'
  },
  {
    drugName: 'Metotreksat (MTX) Oral',
    tallManName: 'METHOTREXATE Oral',
    category: 'Sitotoksik & Imunosupresan',
    dangerAlert: 'Salah meminum MTX setiap hari (seharusnya HANYA 1x seminggu untuk artritis) memicu supresi sumsum tulang dan kematian.',
    safetyRule: 'Tuliskan secara jelas HARI SPESIFIK minum obat pada etiket (misal: "Hanya diminum setiap hari Senin"), dan berikan konseling tatap muka.',
    labelBadge: 'UNGU - SITOTOKSIK'
  },
  {
    drugName: 'Asam Mefenamat vs Asam Traneksamat',
    tallManName: 'Asam MEFENamat vs Asam TRANEKSAmat',
    category: 'LASA / Look-Alike Sound-Alike',
    dangerAlert: 'Tertukar antara analgesik NSAID (Mefenamat) dan hemostatik antifibrinolitik (Traneksamat) pada penyerahan obat rawat jalan.',
    safetyRule: 'Wajib terapkan Tall Man Lettering pada wadah obat, pisahkan letak rak penyimpanan, dan cek indikasi klinis saat verifikasi akhir resep.',
    labelBadge: 'KUNING - LASA'
  },
  {
    drugName: 'Humalog vs Humulin R',
    tallManName: 'HumaLOG (Lispro) vs HumuLIN R (Reguler)',
    category: 'Hormon & Hipoglikemik Kritis',
    dangerAlert: 'Humalog bekerja ultra-cepat (onset 10-15 menit) sedangkan Humulin R (onset 30-60 menit); salah waktu injeksi memicu hipoglikemia berat tak sadar.',
    safetyRule: 'Pisahkan rak penyimpanan di lemari pendingin, edukasi pasien dengan kartu identitas insulin, dan konfirmasi jenis analog vs human insulin.',
    labelBadge: 'MERAH - HIGH ALERT'
  },
  {
    drugName: 'Magnesium Sulfat (MgSO4) 20% vs 40%',
    tallManName: 'MgSO4 20% vs MgSO4 40% PEKAT',
    category: 'Elektrolit Konsentrasi Tinggi',
    dangerAlert: 'Salah memilih konsentrasi 40% tanpa pengenceran saat terapi preeklamsia/eklamsia memicu henti napas dan paralisis otot jantung maternal.',
    safetyRule: 'MgSO4 40% wajib diencerkan sebelum IV drip lambat. Selalu sediakan antidotum Kalsium Glukonat 10% di samping bed pasien bersalin!',
    labelBadge: 'MERAH - ELEKTROLIT PEKAT'
  },
  {
    drugName: 'Vinkristin vs Vinblastin',
    tallManName: 'VinCRISitine vs VinBLAStine',
    category: 'Kemoterapi Sitotoksik',
    dangerAlert: 'Pemberian Vinkristin secara INTRATEKAL (ke ruang sumsum tulang belakang) adalah KESALAHAN FATAL yang memicu asending myeloensefalopati dan kematian 100%.',
    safetyRule: 'HANYA UNTUK INTRAVENA! Simpan dalam kantong infus bertuliskan label peringatan merah mencolok: "FOR INTRAVENOUS USE ONLY - FATAL IF GIVEN BY OTHER ROUTES".',
    labelBadge: 'UNGU - SITOTOKSIK'
  }
];

// 4. DOWA Presets (8 Kasus)
export interface DowaPreset {
  drugName: string;
  regulationNo: string;
  maxDispense: string;
  indication: string;
  counselingPoint: string;
}

export const DOWA_PRESETS: DowaPreset[] = [
  {
    drugName: 'Asam Mefenamat 500 mg',
    regulationNo: 'Kepmenkes No. 347/1990 (DOWA 1)',
    maxDispense: 'Maksimal 20 Tablet / Pasien',
    indication: 'Nyeri akut ringan-sedang: Sakit gigi, sakit kepala traumatik, dan dismenore primer.',
    counselingPoint: 'Wajib diminum segera setelah makan untuk mencegah iritasi lambung. Tidak boleh melebihi 7 hari pemakaian berturut-turut.'
  },
  {
    drugName: 'Omeprazole 20 mg',
    regulationNo: 'Kepmenkes No. 924/1993 (DOWA 2)',
    maxDispense: 'Maksimal 7 Kapsul / Pasien',
    indication: 'Tukak lambung, dispepsia, dan GERD berulang yang sebelumnya pernah diresepkan dokter.',
    counselingPoint: 'Minum 1 kali sehari pada pagi hari 30-60 menit sebelum sarapan pagi. Jika keluhan berlanjut setelah 7 hari, rujuk ke dokter spesialis.'
  },
  {
    drugName: 'Bisakodil Suppositoria 10 mg',
    regulationNo: 'Kepmenkes No. 347/1990 (DOWA 1)',
    maxDispense: 'Maksimal 3 Suppositoria / Pasien',
    indication: 'Konstipasi akut darurat atau pengosongan usus sebelum tindakan diagnostik.',
    counselingPoint: 'Gunakan lewat dubur pada pagi hari. Onset cepat 15-60 menit. Jangan digunakan jangka panjang (memicu atonik kolon).'
  },
  {
    drugName: 'Cetirizine 10 mg',
    regulationNo: 'Kepmenkes No. 1176/1999 (DOWA 3)',
    maxDispense: 'Maksimal 10 Tablet / Sirup 1 Botol',
    indication: 'Rinitis alergi, urtikaria (biduran kronis), dan dermatitis alergi.',
    counselingPoint: 'Minum 1 tablet sehari malam hari. Antihistamin generasi 2 risiko kantuk lebih rendah dari CTM, namun tetap hindari berkendara.'
  },
  {
    drugName: 'Ranitidine 150 mg',
    regulationNo: 'Kepmenkes No. 924/1993 (DOWA 2)',
    maxDispense: 'Maksimal 10 Tablet / Pasien',
    indication: 'Tukak lambung, hiperasiditas, gastritis, dan refluks esofagitis.',
    counselingPoint: 'Minum 1 tablet 2 kali sehari sebelum makan atau sebelum tidur malam. Pastikan pasien sebelumnya pernah mendapat resep dokter.'
  },
  {
    drugName: 'Ibuprofen 400 mg',
    regulationNo: 'Kepmenkes No. 347/1990 (DOWA 1)',
    maxDispense: 'Maksimal 10 Tablet / Pasien',
    indication: 'Demam tinggi persisten dan nyeri inflamasi akut (osteoartritis ringan, nyeri otot).',
    counselingPoint: 'Wajib diminum sesudah makan. Hindari pada pasien dengan riwayat tukak lambung aktif atau gangguan ginjal berat.'
  },
  {
    drugName: 'Natrium Diklofenak 25 mg',
    regulationNo: 'Kepmenkes No. 347/1990 (DOWA 1)',
    maxDispense: 'Maksimal 10 Tablet / Pasien',
    indication: 'Inflamasi dan nyeri pasca trauma muskuloskeletal atau dismenore.',
    counselingPoint: 'Minum bersama segelas air segera sesudah makan. Waspada peningkatan tekanan darah pada pasien hipertensi.'
  },
  {
    drugName: 'Klindamisin Gel 1%',
    regulationNo: 'Kepmenkes No. 1176/1999 (DOWA 3)',
    maxDispense: 'Maksimal 1 Tube (15 gram)',
    indication: 'Akne vulgaris (jerawat meradang sedang hingga berat).',
    counselingPoint: 'Oleskan tipis pada area berjerawat 2 kali sehari setelah kulit dibersihkan. Hindari area mata dan mukosa bibir.'
  }
];

// 5. Pregnancy Presets (8 Kasus)
export interface PregnancyPreset {
  drugName: string;
  fdaCategory: string;
  trimesterRisk: string;
  teratogenicDanger: string;
  safeAlternative: string;
}

export const PREGNANCY_PRESETS: PregnancyPreset[] = [
  {
    drugName: 'Captopril / Candesartan (ACEi/ARB)',
    fdaCategory: 'Kategori D (Trimester 2 & 3)',
    trimesterRisk: 'Kontraindikasi Mutlak Trimester 2 & 3',
    teratogenicDanger: 'Fetotoksisitas berat: Oligohidramnion, displasia tubulus ginjal janin, hipoplasia paru, anuria neonatus, dan kematian janin.',
    safeAlternative: 'Metildopa (lini pertama hipertensi gestasional), Labetalol, atau Nifedipin lepas lambat.'
  },
  {
    drugName: 'NSAID (Ibuprofen, Mefenamat)',
    fdaCategory: 'Kategori C / D (Trimester 3)',
    trimesterRisk: 'HINDARI MUTLAK pada Usia Kehamilan ≥20-28 Minggu',
    teratogenicDanger: 'Penutupan prematur Duktus Arteriosus janin (memicu hipertensi pulmonal neonatus) dan memperlama proses persalinan.',
    safeAlternative: 'Parasetamol adalah analgesik & antipiretik paling aman dan menjadi lini pertama sepanjang masa kehamilan.'
  },
  {
    drugName: 'Warfarin (Antikoagulan Oral)',
    fdaCategory: 'Kategori X (Teratogenik Kuat)',
    trimesterRisk: 'KONTRAINDIKASI MUTLAK pada Kehamilan',
    teratogenicDanger: 'Fetal Warfarin Syndrome: Hipoplasia hidung janin, kelainan epifisis tulang, atrofi optik, mikrosefali, dan retardasi mental.',
    safeAlternative: 'LMWH (Low Molecular Weight Heparin seperti Enoxaparin) karena tidak menembus barier plasenta.'
  },
  {
    drugName: 'Isotretinoin (Obat Jerawat Oral)',
    fdaCategory: 'Kategori X (Teratogenik Ekstrem)',
    trimesterRisk: 'KONTRAINDIKASI MUTLAK: Wajib Kontrasepsi Ganda',
    teratogenicDanger: 'Risiko cacat lahir >35%: Mikrotia (telinga tidak terbentuk), mikrosefali, kelainan jantung konotrunkal, dan cacat kraniofasial berat.',
    safeAlternative: 'Topikal Asam Azelat (Kategori B), Klindamisin topikal, atau Benzoil Peroksida untuk jerawat bumil.'
  },
  {
    drugName: 'Asam Valproat (Depakote)',
    fdaCategory: 'Kategori D / X (Teratogenik Berat)',
    trimesterRisk: 'Hindari pada Wanita Usia Subur & Kehamilan',
    teratogenicDanger: 'Defek tabung saraf janin (Spina Bifida 1-2%), penurunan skor IQ anak di masa depan, dan sindrom autisme.',
    safeAlternative: 'Lamotrigin atau Levetirasetam dengan suplemen Asam Folat dosis tinggi (4-5 mg/hari) sebelum konsepsi.'
  },
  {
    drugName: 'Tetrasiklin & Doksisiklin',
    fdaCategory: 'Kategori D (Trimester 2 & 3)',
    trimesterRisk: 'Kontraindikasi Trimester 2 & 3 Kehamilan',
    teratogenicDanger: 'Pengikatan ion kalsium memicu diskolorasi kuning-cokelat permanen pada gigi janin dan hambatan pertumbuhan tulang.',
    safeAlternative: 'Amoxicillin, Sefalosporin generasi 1-3, atau Azitromisin untuk infeksi bakteri kehamilan.'
  },
  {
    drugName: 'Metimazol vs Propiltiourasil',
    fdaCategory: 'Kategori D (Antitiroid)',
    trimesterRisk: 'PTU Trimester 1 vs Metimazol Trimester 2/3',
    teratogenicDanger: 'Metimazol pada Trimester 1 memicu Aplasia Cutis Congenita (kulit kepala janin tidak menutup) dan atresia koana.',
    safeAlternative: 'Gunakan PTU pada Trimester 1, lalu beralih ke Metimazol pada Trimester 2 & 3 untuk mencegah hepatotoksisitas maternal PTU.'
  },
  {
    drugName: 'Ciprofloxacin / Fluorokuinolon',
    fdaCategory: 'Kategori C (Toksisitas Tulang Rawan)',
    trimesterRisk: 'Hindari Selama Masa Kehamilan',
    teratogenicDanger: 'Artropati dan kerusakan kartilago sendi janin pada studi hewan uji coba serta risiko defek muskuloskeletal.',
    safeAlternative: 'Fosfomycin trometamol sachet dosis tunggal atau Sefiksim untuk infeksi saluran kemih (ISK) bumil.'
  },
  {
    drugName: 'Fenitoin (Antikonvulsan)',
    fdaCategory: 'Kategori D (Fetal Hydantoin Syndrome)',
    trimesterRisk: 'Hindari Jika Memungkinkan Sepanjang Masa Hamil',
    teratogenicDanger: 'Fetal Hydantoin Syndrome: Hipoplasia kuku dan falang distal, celah bibir dan langit-langit (cleft palate), mikrosefali, serta retardasi mental.',
    safeAlternative: 'Lamotrigin atau Levetirasetam dengan suplementasi Asam Folat 4-5 mg/hari, dan Vitamin K1 profilaksis pada trimester akhir.'
  },
  {
    drugName: 'Statin (Simvastatin / Atorvastatin)',
    fdaCategory: 'Kategori X (Kontraindikasi Mutlak)',
    trimesterRisk: 'KONTRAINDIKASI MUTLAK pada Kehamilan & Promil',
    teratogenicDanger: 'Kolesterol esensial untuk perkembangan membran sel janin dan sintesis hormon steroid. Hambatan sintesis kolesterol memicu anomali SSP dan malformasi tulang berat.',
    safeAlternative: 'Hentikan segera statin sebelum konsepsi atau saat positif hamil. Kontrol dislipidemia via diet ketat atau Bile Acid Sequestrant (Kolesevelam) jika sangat mendesak.'
  },
  {
    drugName: 'Metotreksat (MTX)',
    fdaCategory: 'Kategori X (Abortifasien & Teratogen Kuat)',
    trimesterRisk: 'KONTRAINDIKASI MUTLAK: Wajib Jeda 3-6 Bulan Sebelum Hamil',
    teratogenicDanger: 'Antagonis asam folat poten memicu kematian janin / abortus spontan, kelainan kraniofasial, kraniosinostosis, dan hambatan pertumbuhan intrauterin berat.',
    safeAlternative: 'Sulfasalazin + suplemen Asam Folat dosis tinggi (5 mg/hari) atau Hidroksiklorokuin untuk tatalaksana artritis reumatoid bumil.'
  },
  {
    drugName: 'Kloramfenikol',
    fdaCategory: 'Kategori C (Toksisitas Kardiovaskular Janin/Neonatus)',
    trimesterRisk: 'KONTRAINDIKASI MUTLAK pada Trimester 3 & Menjelang Persalinan',
    teratogenicDanger: 'Gray Baby Syndrome: Akumulasi obat akibat imaturitas enzim glukuronil transferase hepar neonatus memicu kolaps kardiovaskular, sianosis abu-abu, hipotermia, dan kematian fatal.',
    safeAlternative: 'Amoxicillin-Klavulanat, Ampisilin IV, atau Sefalosporin generasi ke-3 (Seftriakson) yang aman bagi fungsi organ janin.'
  }
];

// 6. Toxicology Presets (8 Kasus)
export interface ToxicologyPreset {
  toxicAgent: string;
  antidoteName: string;
  overdoseThreshold: string;
  toxicMechanism: string;
  antidoteProtocol: string;
}

export const TOXICOLOGY_PRESETS: ToxicologyPreset[] = [
  {
    toxicAgent: 'Parasetamol (Asetaminofen)',
    antidoteName: 'N-Asetilsistein (NAC)',
    overdoseThreshold: 'Ingesti Akut >7.5 - 10 g (atau >150 mg/kgBB)',
    toxicMechanism: 'Cadangan glutation hepar habis, akumulasi metabolit NAPQI toksik yang memicu nekrosis sentrilobular hepar masif.',
    antidoteProtocol: 'Protokol 21 Jam IV (Loading 150 mg/kg dalam D5W 200 mL selama 1 jam, lanjut titrasi) atau Protokol Oral 72 jam (140 mg/kg loading).'
  },
  {
    toxicAgent: 'Opioid (Morfin, Fentanil, Tramadol)',
    antidoteName: 'Nalokson HCl (Narcan)',
    overdoseThreshold: 'Trias Toksidrom: Pupil pin-point, depresi pernapasan (<8-10x/m), koma',
    toxicMechanism: 'Agonisme kuat reseptor Mu-opioid di medula oblongata menekan dorongan napas spontan hingga apneu fatal.',
    antidoteProtocol: 'Dosis awal 0.4 - 2 mg IV/IM/SC. Ulangi tiap 2-3 menit jika belum adekuat. Titrasi hingga laju napas spontan kembali normal.'
  },
  {
    toxicAgent: 'Organofosfat & Karbamat (Pestisida)',
    antidoteName: 'Sulfas Atropin + Pralidoksim (2-PAM)',
    overdoseThreshold: 'Toksidrom Kolinergik DUMBELS (Salivasi, Lakrimasi, Bronkospasme, Bradikardia)',
    toxicMechanism: 'Inhibisi enzim Asetilkolinesterase ireversibel memicu penumpukan asetilkolin di seluruh reseptor muskarinik & nikotinik.',
    antidoteProtocol: 'Atropin 1 - 2 mg IV tiap 5-10 menit digandakan hingga tercapai Atropinisasi (paru bersih dari ronki, pupil melebar, denyut jantung >80 bpm).'
  },
  {
    toxicAgent: 'Benzodiazepin (Diazepam, Alprazolam)',
    antidoteName: 'Flumazenil Injeksi IV',
    overdoseThreshold: 'Koma sedasi berat, hipotonia, hiporefleksia tanpa depresi napas ekstrem',
    toxicMechanism: 'Antagonis kompetitif spesifik pada situs pengikatan benzodiazepin di kompleks reseptor GABA-A susunan saraf pusat.',
    antidoteProtocol: 'Dosis awal 0.2 mg IV lambat selama 30 detik. Dapat diulang 0.3 mg lalu 0.5 mg. Waspada pemicu kejang putus obat (withdrawal) pada pengguna kronis.'
  },
  {
    toxicAgent: 'Beta-Blocker (Propranolol, Bisoprolol)',
    antidoteName: 'Glukagon IV + Kalsium Glukonat',
    overdoseThreshold: 'Bradikardia berat refrakter terhadap atropin, hipotensi syok kardiogenik',
    toxicMechanism: 'Blokade reseptor beta adrenergik jantung menurunkan pembentukan cAMP intraseluler dan kontraktilitas miokard.',
    antidoteProtocol: 'Glukagon 3 - 10 mg IV bolus lambat (menstimulasi adenilat siklase via reseptor non-adrenergik), lanjut infus kontinu 2-5 mg/jam.'
  },
  {
    toxicAgent: 'Metanol & Etilen Glikol (Spirtus Oplosan)',
    antidoteName: 'Fomepizol atau Etanol Medis IV/Oral',
    overdoseThreshold: 'Asidosis metabolik anion gap tinggi, kebutaan mendadak, napas Kussmaul',
    toxicMechanism: 'Metabolit asam format (dari metanol) merusak saraf optik; asam oksalat (dari etilen glikol) memicu gagal ginjal akut kristaluria.',
    antidoteProtocol: 'Inhibisi kompetitif enzim Alkohol Dehidrogenase (ADH) dengan Fomepizol loading 15 mg/kg atau Etanol 10% IV target kadar darah 100-150 mg/dL.'
  },
  {
    toxicAgent: 'Sianida (Inhalasi Asap Kebakaran)',
    antidoteName: 'Natrium Tiosulfat + Hidroksokobalamin',
    overdoseThreshold: 'Asidosis laktat berat mendadak (>8-10 mmol/L), bau khas bitter almond',
    toxicMechanism: 'Inhibisi sitokrom c oksidase rantai transfer elektron mitokondria, menghentikan respirasi seluler aerobik secara mendadak.',
    antidoteProtocol: 'Hidroksokobalamin (Cyanokit) 5 gram IV selama 15 menit mengikat sianida menjadi Sianokobalamin (Vitamin B12) yang tidak beracun.'
  },
  {
    toxicAgent: 'Digoksin (Glikosida Jantung)',
    antidoteName: 'Digoxin-specific Fab (DigiFab)',
    overdoseThreshold: 'Ingesti akut >10 mg (dewasa) atau serum digoksin >10 ng/mL, hiperkalemia >5 mEq/L',
    toxicMechanism: 'Inhibisi pompa Na+/K+-ATPase miokard memicu otomatisitas berlebih, bradiaritmia, PVC ventrikel, dan hiperkalemia berat.',
    antidoteProtocol: 'Dosis vial dihitung: (Kadar serum ng/mL × BB kg) / 100. Bila dosis tidak diketahui darurat henti jantung, berikan 10-20 vial IV bolus.'
  },
  {
    toxicAgent: 'Isoniazid / INH (Overdosis Antituberkulosis)',
    antidoteName: 'Piridoksin (Vitamin B6) IV',
    overdoseThreshold: 'Ingesti akut >80 - 100 mg/kgBB atau koma kejang refrakter',
    toxicMechanism: 'Inhibisi enzim piridoksal fosfat memicu deplesi GABA di otak, mengakibatkan status epileptikus refrakter antikonvulsan dan asidosis laktat berat.',
    antidoteProtocol: 'Berikan Vitamin B6 IV gram-per-gram setara dosis INH yang tertelan (bila dosis tidak diketahui, berikan 5 gram IV bolus lambat selama 5-10 menit, ulangi jika kejang).'
  },
  {
    toxicAgent: 'Heparin Unfractionated / LMWH (Perdarahan Masif)',
    antidoteName: 'Protamin Sulfat Injeksi IV',
    overdoseThreshold: 'Perdarahan spontan masif, aPTT memanjang >3-4 kali nilai kontrol normal',
    toxicMechanism: 'Efek antikoagulan poten berlebih memicu perdarahan intrakranial, retroperitoneal, dan syok hemoragik.',
    antidoteProtocol: '1 mg Protamin Sulfat menetralisir 100 Unit Heparin yang diberikan dalam 2-4 jam terakhir. Injeksi IV sangat lambat (<5 mg/menit) untuk mencegah hipotensi syok dan anafilaksis.'
  },
  {
    toxicAgent: 'Antidepresan Trisiklik / TCA (Amitriptilin)',
    antidoteName: 'Natrium Bikarbonat (NaHCO3) 8.4% IV',
    overdoseThreshold: 'Pelebaran durasi QRS >100 ms pada EKG, aritmia ventrikel, koma, hipotensi',
    toxicMechanism: 'Blokade kanal cepat natrium (fast sodium channel) miokard fase 0 memicu konduksi melambat, aritmia ventrikel letal (VT/VF), dan kolaps sirkulasi.',
    antidoteProtocol: 'Bolus IV 1 - 2 mEq/kg NaHCO3 8.4%, titrasi hingga pH darah 7.45 - 7.55 dan durasi QRS menyempit <100 ms. Lanjut infus kontinu.'
  },
  {
    toxicAgent: 'Besi Elemental / Suplemen Fe (Intoksikasi Pediatrik)',
    antidoteName: 'Deferoksamin Mesilat (Desferal) IV',
    overdoseThreshold: 'Ingesti Fe elemental >40 - 60 mg/kgBB atau serum Fe >500 mcg/dL',
    toxicMechanism: 'Reaksi Fenton memicu radikal bebas peroksidasi lipid masif, nekrosis mukosa saluran cerna (hematemesis), syok distributif, dan nekrosis hepar fulminan.',
    antidoteProtocol: 'Infus IV Deferoksamin 15 mg/kg/jam (maks 6-8 g/hari). Pantau perubahan warna urin menjadi merah anggur (vin-rosé urine) tanda ekskresi ferioksamin.'
  }
];

// 7. Swamedikasi Triage Presets (8 Kasus)
export interface SwamTriagePreset {
  condition: string;
  safeForSelfMed: string;
  redFlagsToRefer: string;
  pharmacistRecommendation: string;
  maxSelfMedDays: string;
}

export const SWAM_TRIAGE_PRESETS: SwamTriagePreset[] = [
  {
    condition: 'Demam pada Anak & Balita',
    safeForSelfMed: 'Suhu 37.5°C - 38.5°C, anak tetap aktif bermain/minum, durasi < 3 hari.',
    redFlagsToRefer: 'Demam > 39°C tidak turun dengan obat, durasi > 3 hari, kejang demam, kaku kuduk, muntah profus terus-menerus, atau muncul ruam petekie merah.',
    pharmacistRecommendation: 'Berikan Parasetamol sirup 10-15 mg/kgBB tiap 4-6 jam, kompres air hangat, dan tingkatkan asupan cairan oralit/air.',
    maxSelfMedDays: 'Maksimal 3 Hari'
  },
  {
    condition: 'Batuk & Flu Akut',
    safeForSelfMed: 'Batuk pilek ringan tanpa sesak, dahak jernih/putih, durasi < 1 minggu.',
    redFlagsToRefer: 'Batuk berdarah (hemoptisis), napas berbunyi mengi/stridor, tarikan dinding dada ke dalam, demam tinggi menggigil, atau penurunan berat badan drastis.',
    pharmacistRecommendation: 'Gunakan antitusif untuk batuk kering malam hari atau ekspektoran bila berdahak. Hindari antibiotik tanpa resep dokter!',
    maxSelfMedDays: 'Maksimal 7 Hari'
  },
  {
    condition: 'Diare Akut',
    safeForSelfMed: 'BAB cair < 4x/hari tanpa darah, tanda dehidrasi tidak ada, rasa haus normal.',
    redFlagsToRefer: 'Feses bercampur darah/lendir (disentri), demam tinggi, mata cekung & turgor kulit lambat kembali (dehidrasi berat), anak lemas/tidak mau minum.',
    pharmacistRecommendation: 'Rehidrasi segera dengan larutan Oralit 1 sachet tiap BAB cair. Lanjutkan ASI/makanan lunak. Berikan Zinc tablet 10 hari.',
    maxSelfMedDays: 'Maksimal 2 Hari'
  },
  {
    condition: 'Sakit Kepala Mendadak (Thunderclap)',
    safeForSelfMed: 'Sakit kepala tegang ringan-sedang (tension headache) akibat stres/kelelahan, responsif analgesik OTC.',
    redFlagsToRefer: 'Sakit kepala terberat seumur hidup onset mendadak (thunderclap), leher kaku, pandangan kabur/ganda, kelemahan separuh tubuh, atau riwayat trauma kepala.',
    pharmacistRecommendation: 'RUJUK SEGERA IGD: Dugaan perdarahan subaraknoid atau stroke. Jangan tunda dengan analgesik bebas!',
    maxSelfMedDays: 'Langsung Rujuk IGD'
  },
  {
    condition: 'Nyeri Dada Menjalar (Curiga ACS)',
    safeForSelfMed: 'Nyeri otot dada muskuloskeletal yang bertambah sakit saat ditekan dengan jari atau berubah posisi.',
    redFlagsToRefer: 'Sensasi tertindih beban berat di dada tengah/kiri, menjalar ke leher, rahang, atau lengan kiri, disertai keringat dingin dan sesak napas.',
    pharmacistRecommendation: 'KONTRAINDIKASI SWAMEDIKASI: Curiga Sindrom Koroner Akut (ACS/Infark Miokard). Segera panggil ambulans atau rujuk IGD terdekat!',
    maxSelfMedDays: 'Darurat Medis 0 Hari'
  },
  {
    condition: 'Mata Merah & Nyeri Akut',
    safeForSelfMed: 'Mata merah akibat iritasi debu ringan atau mata lelah di depan layar (dry eyes), tidak ada penurunan visus.',
    redFlagsToRefer: 'Nyeri bola mata hebat, penurunan ketajaman penglihatan (visus buram), melihat lingkaran pelangi di sekitar lampu (halo), pupil dilatasi asimetris.',
    pharmacistRecommendation: 'Curiga Glaukoma Sudut Tertutup Akut atau Ulkus Kornea. Rujuk dokter spesialis mata segera untuk mencegah kebutaan permanen.',
    maxSelfMedDays: 'Langsung Rujuk Spesialis'
  },
  {
    condition: 'Nyeri Perut Kanan Bawah (Curiga Apendisitis)',
    safeForSelfMed: 'Kram perut kembung ringan yang mereda setelah buang angin atau BAB.',
    redFlagsToRefer: 'Nyeri perut hebat bergeser ke kanan bawah (titik McBurney), demam, nyeri lepas tekan (rebound tenderness), dan perut kaku seperti papan.',
    pharmacistRecommendation: 'JANGAN beri obat pencahar atau analgesik kuat yang menyamarkan gejala. Rujuk segera ke dokter bedah/IGD.',
    maxSelfMedDays: 'Langsung Rujuk Bedah'
  },
  {
    condition: 'Sakit Gigi dengan Bengkak Wajah & Trismus',
    safeForSelfMed: 'Ngilu gigi sensitif ringan atau sakit gigi berlubang tanpa pembengkakan jaringan lunak gusi/pipi.',
    redFlagsToRefer: 'Pipi bengkak menonjol hingga kelopak mata/leher (abses spasium fasial), demam tinggi, dan sulit membuka mulut (trismus).',
    pharmacistRecommendation: 'Risiko penyebaran infeksi ke leher dalam (Angina Ludwig). Berikan analgesik sementara dan RUJUK dokter gigi hari itu juga.',
    maxSelfMedDays: 'Maksimal 1 Hari'
  }
];

// 8. Swamedikasi Batuk Presets (6 Kasus)
export interface SwamBatukPreset {
  coughType: string;
  characteristics: string;
  firstLineDrug: string;
  contraindicationAlert: string;
  lifestyleTips: string;
}

export const SWAM_BATUK_PRESETS: SwamBatukPreset[] = [
  {
    coughType: 'Batuk Kering (Non-Produktif)',
    characteristics: 'Gatal menggelitik di tenggorokan, tidak ada dahak, sering memburuk saat berbaring malam hari.',
    firstLineDrug: 'Dekstrometorfan HBr (Antitusif) 15 mg atau Difenhidramin sirup.',
    contraindicationAlert: 'Jangan berikan antitusif pada batuk berdahak asma/PPOK (memicu retensi dahak berbahaya).',
    lifestyleTips: 'Minum air hangat, konsumsi 1 sendok madu sebelum tidur, dan hindari paparan asap rokok/debu.'
  },
  {
    coughType: 'Batuk Berdahak (Produktif)',
    characteristics: 'Tenggorokan penuh lendir kental, dada terasa sesak/berat, dahak sulit dikeluarkan.',
    firstLineDrug: 'Guaifenesin / GG (Ekspektoran) + Bromheksin atau N-Asetilsistein (Mukolitik).',
    contraindicationAlert: 'Hindari obat batuk penekan refleks (antitusif) agar dahak tidak mengendap di saluran bronkus.',
    lifestyleTips: 'Perbanyak minum air putih hangat minimal 2-2.5 liter/hari untuk mengencerkan lendir secara alami.'
  },
  {
    coughType: 'Flu Disertai Hidung Tersumbat',
    characteristics: 'Batuk disertai hidung mampet, bersin-bersin, dan sekret pilek encer.',
    firstLineDrug: 'Kombinasi Parasetamol + Antihistamin + Dekongestan (Pseudoefedrin / Fenilefrin).',
    contraindicationAlert: 'WASPADA HIPERTENSI: Dekongestan oral memicu vasokonstriksi sistemik dan lonjakan tensi.',
    lifestyleTips: 'Gunakan semprotan hidung saline (NaCl 0.9%) steril untuk cuci hidung tanpa risiko lonjakan tensi.'
  },
  {
    coughType: 'Batuk Alergi Malam Hari',
    characteristics: 'Batuk kering kambuhan pada malam/dini hari dipicu udara dingin atau tungau debu kasur.',
    firstLineDrug: 'Antihistamin generasi ke-2 (Cetirizine 10 mg malam hari) atau Deksklorfeniramin.',
    contraindicationAlert: 'Jangan gunakan kombinasi dekongestan jangka panjang (>5 hari) risiko rebound congestion.',
    lifestyleTips: 'Gunakan selimut hangat, pasang air purifier, dan cuci seprai kasur dengan air panas rutin.'
  },
  {
    coughType: 'Batuk Induksi Obat ACE-Inhibitor',
    characteristics: 'Batuk kering menggelitik persisten timbul beberapa minggu paska minum Captopril/Ramipril.',
    firstLineDrug: 'Edukasi: Obat batuk biasa TIDAK AKAN MEMPAN. Konsultasikan ke dokter untuk ganti ke ARB.',
    contraindicationAlert: 'Bukan batuk akibat infeksi bakteri; JANGAN konsumsi antibiotik atau antitusif berlebihan.',
    lifestyleTips: 'Diskusikan substitusi antihipertensi ke Candesartan atau Amlodipine bersama dokter spesialis.'
  },
  {
    coughType: 'Batuk Post-Viral Pasca Infeksi',
    characteristics: 'Batuk kering sisa paska sembuh dari flu/ISPA yang berlangsung 2-3 minggu.',
    firstLineDrug: 'Lozenges hisap tenggorokan (antiseptik), madu murni, atau antitusif bila mengganggu tidur.',
    contraindicationAlert: 'Bila batuk berlanjut >8 minggu (batuk kronis), wajib foto rontgen thoraks ke dokter.',
    lifestyleTips: 'Hindari minuman dingin/es, gorengan berminyak, dan istirahat tidur yang cukup 7-8 jam.'
  }
];

// 9. Swamedikasi Diare Presets (6 Kasus)
export interface SwamDiarePreset {
  patientGroup: string;
  primaryTherapy: string;
  supplementTherapy: string;
  contraindicatedDrug: string;
  dietRecommendation: string;
}

export const SWAM_DIARE_PRESETS: SwamDiarePreset[] = [
  {
    patientGroup: 'Diare Balita 1-5 Tahun (Pediatrik)',
    primaryTherapy: 'Oralit Formula Baru (Osmolaritas Rendah) 10 mL/kgBB tiap kali BAB cair.',
    supplementTherapy: 'Tablet Zinc 20 mg diminum selama 10 HARI PENUH meskipun diare sudah berhenti.',
    contraindicatedDrug: 'KONTRAINDIKASI Loperamid & Kaolin-Pektin pada balita (risiko fatal ileus paralitik).',
    dietRecommendation: 'Lanjutkan pemberian ASI dan makanan lunak bergizi. Jangan puasakan anak!'
  },
  {
    patientGroup: 'Diare Bayi Usia <6 Bulan',
    primaryTherapy: 'ASI Eksklusif sesering mungkin + Oralit sendok per sendok 50-100 mL tiap BAB cair.',
    supplementTherapy: 'Tablet Zinc 10 mg (setengah tablet dilarutkan air matang/ASI) selama 10 hari penuh.',
    contraindicatedDrug: 'DILARANG keras memberikan antidiare dewasa atau antibiotik tanpa resep dokter spesialis anak.',
    dietRecommendation: 'Hanya ASI/formula, pantau frekuensi BAK basah popok minimal 6 kali per hari.'
  },
  {
    patientGroup: 'Diare Akut Dewasa Non-Spesifik',
    primaryTherapy: 'Oralit minimal 1-2 gelas tiap selesai BAB cair untuk mencegah syok hipovolemik.',
    supplementTherapy: 'Adsorben Attapulgite 2 tablet tiap BAB (maks 12 tab/24 jam) atau Probiotik sachet.',
    contraindicatedDrug: 'Jangan gunakan Loperamid bila diare disertai demam tinggi atau feses berdarah.',
    dietRecommendation: 'Konsumsi makanan rendah serat BRAT (Pisang, Nasi putih, Saus apel, Roti tawar).'
  },
  {
    patientGroup: 'Diare Disentri (Feses Berdarah)',
    primaryTherapy: 'Rehidrasi cairan oralit agresif untuk mengganti kehilangan elektrolit tubuh.',
    supplementTherapy: 'Suplementasi Zinc dan segera rujuk fasilitas kesehatan untuk evaluasi antibiotik.',
    contraindicatedDrug: 'KONTRAINDIKASI MUTLAK Loperamid: Menahan toksin bakteri invasif di lumen usus memicu megakolon toksik.',
    dietRecommendation: 'Segera rujuk puskesmas/klinik untuk kultur feses dan terapi antimikroba terarah.'
  },
  {
    patientGroup: 'Diare Terkait Antibiotik (AAD)',
    primaryTherapy: 'Penggantian cairan elektrolit oralit dan evaluasi jenis antibiotik yang sedang diminum.',
    supplementTherapy: 'Probiotik multi-strain (Lactobacillus rhamnosus GG atau Saccharomyces boulardii).',
    contraindicatedDrug: 'Jangan minum probiotik bersamaan dengan antibiotik (beri jeda waktu minimal 2-3 jam).',
    dietRecommendation: 'Konsumsi yogurt probiotik plain dan hindari pemanis buatan yang memperparah diare.'
  },
  {
    patientGroup: 'Diare Wisatawan (Traveler’s Diarrhea)',
    primaryTherapy: 'Rehidrasi oralit kemasan sachet higienis dengan air minum kemasan bersegel.',
    supplementTherapy: 'Attapulgite untuk memadatkan feses selama perjalanan darurat.',
    contraindicatedDrug: 'Hindari konsumsi makanan mentah, lalapan, es batu, dan makanan pinggir jalan terbuka.',
    dietRecommendation: 'Prinsip sanitasi: "Boil it, cook it, peel it, or forget it".'
  }
];

// 10. Swamedikasi Maag Presets (6 Kasus)
export interface SwamMaagPreset {
  complaintName: string;
  mechanismRole: string;
  preferredDrug: string;
  administrationTiming: string;
  drugInteractionAlert: string;
}

export const SWAM_MAAG_PRESETS: SwamMaagPreset[] = [
  {
    complaintName: 'Nyeri Lambung / Perih Akut',
    mechanismRole: 'Menetralkan asam lambung berlebih secara cepat dalam 15-30 menit.',
    preferredDrug: 'Antasida Doen (Aluminium Hidroksida + Magnesium Hidroksida) tablet kunyah/suspensi.',
    administrationTiming: '1 jam sebelum makan atau 2 jam setelah makan, dan sebelum tidur malam.',
    drugInteractionAlert: 'Beri jeda minimal 2 jam dengan antibiotik Ciprofloxacin / Tetrasiklin (memicu khelasi).'
  },
  {
    complaintName: 'Asam Lambung Naik (GERD / Heartburn)',
    mechanismRole: 'Menekan produksi asam lambung basal & stimulasi via pompa proton sel parietal.',
    preferredDrug: 'Omeprazole 20 mg (DOWA 2, maks 7 hari) atau H2-Blocker Famotidine 20 mg.',
    administrationTiming: 'Wajib diminum 30 - 60 menit SEBELUM sarapan pagi pada perut kosong.',
    drugInteractionAlert: 'Gunakan Pantoprazole jika pasien mengonsumsi antiplatelet Clopidogrel.'
  },
  {
    complaintName: 'Iritasi Mukosa / Tukak Peptik',
    mechanismRole: 'Membentuk lapisan pasta pelindung fisik pada ulkus mukosa lambung dari asam.',
    preferredDrug: 'Sukralfat Tablet 500 mg (DOWA 2, Maksimal 20 tablet; Dosis 1 gram / 2 tab q6h).',
    administrationTiming: 'Saat perut benar-benar kosong: 1 jam sebelum makan atau 2 jam sesudah makan, dan sebelum tidur malam.',
    drugInteractionAlert: 'Jangan diminum bersamaan dengan antasida (sukralfat butuh suasana asam untuk aktif; beri jeda min. 2 jam).'
  },
  {
    complaintName: 'Dispepsia Fungsional (Kembung & Begah)',
    mechanismRole: 'Mengurangi tegangan permukaan gelembung gas di lambung sehingga mudah dipecah/dikeluarkan.',
    preferredDrug: 'Antasida kombinasi Simetikon / Polidimetilsiloksan tablet kunyah.',
    administrationTiming: 'Kunyah halus tablet 1 jam setelah makan atau saat timbul rasa kembung dan begah.',
    drugInteractionAlert: 'Kurangi konsumsi makanan pembentuk gas tinggi (kol, soda, kacang-kacangan).'
  },
  {
    complaintName: 'Gastropati Akibat Obat NSAID',
    mechanismRole: 'Pencegahan erosi mukosa lambung akibat penghambatan enzim COX-1 prostaglandin oleh obat nyeri.',
    preferredDrug: 'Ko-preskripsi Omeprazole 20 mg atau Lansoprazole 30 mg bersama terapi analgesik.',
    administrationTiming: 'Diminum pagi hari 30 menit sebelum makan sepanjang durasi terapi NSAID.',
    drugInteractionAlert: 'Pertimbangkan beralih ke NSAID selektif COX-2 (Celecoxib) bila pasien risiko tinggi GI.'
  },
  {
    complaintName: 'Morning Heartburn & Asam Malam Hari',
    mechanismRole: 'Inhibisi pelepasan asam nokturnal saat tidur malam hari.',
    preferredDrug: 'Famotidine 20 - 40 mg atau Ranitidine 150 mg malam hari.',
    administrationTiming: 'Diminum 30 menit sebelum makan malam atau tepat sebelum tidur malam.',
    drugInteractionAlert: 'Tinggikan posisi kepala saat tidur 15-20 cm dan hindari makan berat 3 jam sebelum tidur.'
  }
];

// 11. Drug-Lab Interaction Presets (8 Kasus)
export interface DrugLabPreset {
  drugName: string;
  labTestAffected: string;
  testImpact: string;
  clinicalExplanation: string;
  recommendation: string;
}

export const DRUG_LAB_PRESETS: DrugLabPreset[] = [
  {
    drugName: 'Biotin (Vitamin B7 dosis tinggi)',
    labTestAffected: 'Troponin Jantung & Hormon Tiroid (TSH, FT4)',
    testImpact: 'Troponin Positif Palsu / TSH Palsu Rendah',
    clinicalExplanation: 'Biotin dosis tinggi (>5-10 mg/hari) mengganggu immunoassay streptavidin-biotin laboratorium, memicu diagnosis serangan jantung atau hipertiroid yang salah.',
    recommendation: 'Hentikan suplemen biotin minimal 48-72 jam sebelum pengambilan sampel darah rutin.'
  },
  {
    drugName: 'Spironolakton / Eplerenon',
    labTestAffected: 'Serum Elektrolit Kalium Darah',
    testImpact: 'Hiperkalemia (Kalium > 5.5 mEq/L)',
    clinicalExplanation: 'Penghambatan reseptor aldosteron di tubulus distal menahan ekskresi kalium urine, memicu risiko fatal aritmia jantung bila kombinasi ACEi/ARB.',
    recommendation: 'Periksa kadar kalium dan kreatinin rutin sebelum memulai terapi dan 1 minggu setelah titrasi dosis.'
  },
  {
    drugName: 'Kotrimoksazol (Trimetoprim)',
    labTestAffected: 'Kreatinin Serum & Estimasi GFR',
    testImpact: 'Peningkatan Kreatinin Semu (False Elevation)',
    clinicalExplanation: 'Trimetoprim menghambat sekresi kreatinin di tubulus ginjal tanpa menurunkan filtrasi glomerulus asli (GFR murni tidak berubah).',
    recommendation: 'Gunakan pemeriksaan Cystatin-C atau klirens kreatinin urin 24 jam jika dicurigai peningkatan semu.'
  },
  {
    drugName: 'Statin (Simvastatin / Atorvastatin)',
    labTestAffected: 'Enzim Hepar SGOT (AST) & SGPT (ALT)',
    testImpact: 'Transaminitis Asimtomatik (Kenaikan Enzim Hepar)',
    clinicalExplanation: 'Perubahan permeabilitas membran hepatosit dapat memicu kebocoran enzim transaminase sementara tanpa nekrosis hepatoseluler murni.',
    recommendation: 'Lakukan tes fungsi hati baseline; hentikan obat hanya jika SGPT meningkat >3 kali lipat batas atas normal.'
  },
  {
    drugName: 'Levotiroksin (T4)',
    labTestAffected: 'Thyroid Stimulating Hormone (TSH Serum)',
    testImpact: 'TSH Tetap Tinggi Semu (Gagal Mencapai Target)',
    clinicalExplanation: 'Suplemen Kalsium Karbonat atau Zat Besi (Fe) yang diminum bersamaan mengkhelasi Levotiroksin sehingga obat gagal diserap usus.',
    recommendation: 'Beri jeda waktu minum minimal 4 jam antara Levotiroksin dan suplemen kalsium/zat besi.'
  },
  {
    drugName: 'Heparin Sodium',
    labTestAffected: 'Hitung Jumlah Trombosit Darah (Platelet)',
    testImpact: 'Trombositopenia Imun (HIT Tipe 2)',
    clinicalExplanation: 'Antibodi IgG terbentuk melawan kompleks Heparin-Platelet Factor 4 (PF4), memicu aktivasi trombosit masif dan trombosis paradoksal.',
    recommendation: 'Pantau hitung trombosit rutin tiap 2-3 hari; hentikan heparin segera jika trombosit turun >50% dari baseline.'
  },
  {
    drugName: 'Warfarin',
    labTestAffected: 'International Normalized Ratio (INR)',
    testImpact: 'Lonjakan Nilai INR Ekstrem (>5.0)',
    clinicalExplanation: 'Pemberian antibiotik spektrum luas membunuh bakteri flora usus penghasil vitamin K dan menghambat enzim CYP2C9 (misal Metronidazol/Flukonazol).',
    recommendation: 'Periksa INR 3 hari setelah memulai antibiotik baru dan siapkan Vitamin K1 oral/parenteral bila perdarahan.'
  },
  {
    drugName: 'Kortikosteroid (Deksametason)',
    labTestAffected: 'Glukosa Darah Puasa & HbA1c',
    testImpact: 'Hiperglikemia Steroid-Induced',
    clinicalExplanation: 'Kortikosteroid menstimulasi glukoneogenesis hepar dan memicu resistensi insulin perifer pada jaringan adiposa dan otot.',
    recommendation: 'Pantau profil gula darah harian pada pasien rawat inap dan sesuaikan dosis insulin prandial.'
  }
];

// 12. Side Effect (ADR) Presets (8 Kasus)
export interface SideEffectPreset {
  drugName: string;
  adverseEffect: string;
  naranjoScore: string;
  pathophysiology: string;
  actionPlan: string;
}

export const SIDE_EFFECT_PRESETS: SideEffectPreset[] = [
  {
    drugName: 'ACE-Inhibitor (Captopril, Ramipril)',
    adverseEffect: 'Batuk Kering Menggelitik Kronis',
    naranjoScore: 'Probable (Skor 6-7)',
    pathophysiology: 'Penghambatan enzim ACE menghentikan degradasi Bradikinin dan Substansi P di saluran napas, memicu stimulasi saraf batuk persisten.',
    actionPlan: 'Batuk tidak mempan dengan antitusif/ekspektoran. Ganti terapi ke golongan ARB (Candesartan / Telmisartan).'
  },
  {
    drugName: 'Statin (Simvastatin, Atorvastatin)',
    adverseEffect: 'Miopati & Rhabdomyolysis',
    naranjoScore: 'Definite / Probable (Skor 7-8)',
    pathophysiology: 'Penurunan sintesis Koenzim Q10 di mitokondria sel otot rangka memicu kerusakan sarkolema dan kebocoran enzim CK/mioglobin.',
    actionPlan: 'Periksa kadar CK serum bila nyeri otot simetris. Hentikan segera jika CK > 5-10x batas atas normal atau urin berwarna gelap.'
  },
  {
    drugName: 'Amlodipine (CCB Dihidropiridin)',
    adverseEffect: 'Edema Perifer (Bengkak Pergelangan Kaki)',
    naranjoScore: 'Probable (Skor 6)',
    pathophysiology: 'Vasodilatasi selektif arteriol pre-kapiler tanpa diimbangi dilatasi venula post-kapiler memicu ekstravasasi cairan ke ruang interstitial kaki.',
    actionPlan: 'Bukan karena retensi garam/gagal ginjal. Kombinasikan dengan ACEi/ARB untuk mereduksi tekanan hidrostatik kapiler.'
  },
  {
    drugName: 'Metformin HCl',
    adverseEffect: 'Gangguan GI Diare & Defisiensi Vitamin B12',
    naranjoScore: 'Probable (Skor 6)',
    pathophysiology: 'Hambatan absorpsi glukosa dan asam empedu di usus halus serta interferensi penyerapan B12 dependen kalsium di ileum.',
    actionPlan: 'Titrasi dosis bertahap mulai 500 mg bersama makanan; suplementasi Vitamin B12 rutin pada penggunaan jangka panjang.'
  },
  {
    drugName: 'Fluorokuinolon (Levofloksasin)',
    adverseEffect: 'Tendinitis & Ruptur Tendon Achilles',
    naranjoScore: 'Probable (Skor 7)',
    pathophysiology: 'Khelasi ion magnesium memicu stres oksidatif kondrosit dan perusakan serat kolagen tendon, meningkat pada lansia dan pengguna steroid.',
    actionPlan: 'Hentikan antibiotik segera bila timbul nyeri atau bengkak pada tendon Achilles; hindari olahraga dan aktivitas berat.'
  },
  {
    drugName: 'Allopurinol',
    adverseEffect: 'Sindrom Stevens-Johnson (SJS / TEN)',
    naranjoScore: 'Definite (Skor 8-9)',
    pathophysiology: 'Reaksi hipersensitivitas tipe lambat (tipe IV) dimediasi sel T sitotoksik, berkaitan erat dengan alel genetik HLA-B*58:01.',
    actionPlan: 'DARURAT MEDIS: Hentikan allopurinol seketika saat muncul ruam eritema/lepuh di kulit atau mukosa bibir/mata. Rujuk ruang luka bakar.'
  },
  {
    drugName: 'Kortikosteroid (Prednison)',
    adverseEffect: 'Sindrom Cushing Iatrogenik & Moon Face',
    naranjoScore: 'Definite (Skor 8)',
    pathophysiology: 'Efek glukokortikoid berlebih memicu redistribusi jaringan lemak ke wajah (moon face), leher (buffalo hump), dan katabolisme protein.',
    actionPlan: 'Tapering off dosis bertahap (jangan hentikan mendadak untuk mencegah krisis adrenal insufisiensi).'
  },
  {
    drugName: 'Aspirin / NSAID',
    adverseEffect: 'Bronkospasme Asma Akut (AERD)',
    naranjoScore: 'Probable (Skor 7)',
    pathophysiology: 'Hambatan enzim COX-1 mengalihkan metabolisme asam arakidonat ke jalur 5-Lipoksigenase, memicu lonjakan Leukotrien bronkokonstriktor.',
    actionPlan: 'KONTRAINDIKASI NSAID pada pasien trias Samter (asma + polip hidung + alergi aspirin). Gunakan Parasetamol dosis rendah (<1000 mg).'
  }
];

// 13. Renal Dosing Presets (8 Kasus)
export interface RenalDosingPreset {
  drugName: string;
  cutoffCrCl: string;
  standardDose: string;
  adjustedDose: string;
  clinicalToxicity: string;
}

export const RENAL_DOSING_PRESETS: RenalDosingPreset[] = [
  {
    drugName: 'Meropenem IV',
    cutoffCrCl: 'CrCl 26-50 mL/menit & 10-25 mL/menit',
    standardDose: '1000 mg tiap 8 jam IV',
    adjustedDose: 'CrCl 26-50: 1000 mg tiap 12 jam | CrCl 10-25: 500 mg tiap 12 jam | <10: 500 mg tiap 24 jam',
    clinicalToxicity: 'Akumulasi antibiotik carbapenem memicu neurotoksisitas berat, penurunan kesadaran, dan kejang epileptik.'
  },
  {
    drugName: 'Metformin HCl',
    cutoffCrCl: 'eGFR < 30 mL/menit/1.73m²',
    standardDose: '500 - 1000 mg 2-3 kali sehari',
    adjustedDose: 'eGFR 30-44: Maksimal 1000 mg/hari | eGFR < 30: KONTRAINDIKASI MUTLAK HENTIKAN!',
    clinicalToxicity: 'Penurunan klirens ginjal memicu penumpukan asam laktat sistemik dan fatal Lactic Acidosis (mortalitas >50%).'
  },
  {
    drugName: 'Ciprofloxacin Oral / IV',
    cutoffCrCl: 'CrCl < 30 mL/menit',
    standardDose: '500 mg tiap 12 jam oral',
    adjustedDose: 'CrCl < 30 mL/menit: Turunkan ke 250-500 mg tiap 18-24 jam',
    clinicalToxicity: 'Risiko kristaluria, pemanjangan interval QTc, dan stimulasi susunan saraf pusat (halusinasi/kejang).'
  },
  {
    drugName: 'Gabapentin',
    cutoffCrCl: 'CrCl < 60 mL/menit',
    standardDose: '300 mg 3 kali sehari (900 mg/hari)',
    adjustedDose: 'CrCl 30-59: 200-700 mg bid | CrCl 15-29: 200-700 mg qd | <15: 100-300 mg qd',
    clinicalToxicity: 'Ekskresi 100% via ginjal; akumulasi memicu sedasi ekstrem, mioklonus, ataksia berat, dan depresi napas.'
  },
  {
    drugName: 'Allopurinol',
    cutoffCrCl: 'CrCl < 20 mL/menit',
    standardDose: '100 - 300 mg sekali sehari',
    adjustedDose: 'CrCl 10-20: 100-200 mg/hari | CrCl < 10: Maksimal 100 mg tiap 2-3 hari',
    clinicalToxicity: 'Akumulasi metabolit aktif Oksipurinol memicu Allopurinol Hypersensitivity Syndrome (AHS/SJS/TEN) yang mematikan.'
  },
  {
    drugName: 'Enoxaparin (LMWH)',
    cutoffCrCl: 'CrCl < 30 mL/menit',
    standardDose: '1 mg/kgBB tiap 12 jam SC (DVT/ACS)',
    adjustedDose: 'CrCl < 30 mL/menit: Reduksi dosis ke 1 mg/kgBB HANYA sekali sehari (q24h)',
    clinicalToxicity: 'Akumulasi efek antikoagulan anti-Xa memicu perdarahan retroperitoneal dan intrakranial masif.'
  },
  {
    drugName: 'Vankomisin IV',
    cutoffCrCl: 'CrCl < 50 mL/menit',
    standardDose: '15 - 20 mg/kgBB tiap 8 - 12 jam',
    adjustedDose: 'Perpanjang interval dosis menjadi tiap 24-48 jam berdasarkan monitoring kadar palung (TDM trough target 15-20 mcg/mL)',
    clinicalToxicity: 'Akumulasi glikopeptida memicu nefrotoksisitas nekrosis tubulus akut dan ototoksisitas permanen.'
  },
  {
    drugName: 'Flukonazol',
    cutoffCrCl: 'CrCl ≤ 50 mL/menit',
    standardDose: '100 - 400 mg sekali sehari',
    adjustedDose: 'Berikan loading dose 100%, selanjutnya turunkan dosis harian menjadi 50% dari dosis lazim',
    clinicalToxicity: 'Risiko hepatotoksisitas transaminitis, pemanjangan interval QTc, dan sindrom toksik SSP.'
  }
];

// 14. Pediatric Dosing Presets (8 Kasus)
export interface PediatricDosePreset {
  drugName: string;
  doseRuleMgKg: string;
  maxDoseRule: string;
  exampleCalculation: string;
  compoundingTips: string;
}

export const PEDIATRIC_DOSE_PRESETS: PediatricDosePreset[] = [
  {
    drugName: 'Parasetamol Puyer / Sirup',
    doseRuleMgKg: '10 - 15 mg/kgBB per kali minum (tiap 4-6 jam)',
    maxDoseRule: 'Maksimal 60 mg/kgBB/hari atau 4000 mg/hari',
    exampleCalculation: 'Anak BB 12 kg = 12 × 10–15 mg = 120–180 mg per bungkus puyer (3-4x sehari).',
    compoundingTips: 'Tambahkan Saccharum Lactis (SL) hingga bobot puyer ideal 250–300 mg per bungkus agar mudah dikemas.'
  },
  {
    drugName: 'Amoxicillin Trihydrate',
    doseRuleMgKg: '40 - 90 mg/kgBB/hari dibagi dalam 2-3 dosis',
    maxDoseRule: 'Maksimal 2000 - 3000 mg/hari',
    exampleCalculation: 'Anak BB 10 kg dosis tinggi AOM (80 mg/kg): 800 mg/hari = 266 mg tiap 8 jam (3x sehari).',
    compoundingTips: 'Gunakan sirup kering rekonstitusi asli pabrik jika memungkinkan, BUD maksimal 7-14 hari.'
  },
  {
    drugName: 'Cetirizine HCl Sirup/Drops',
    doseRuleMgKg: 'Anak 6 bln - 2 thn: 2.5 mg 1x/hari | 2-5 thn: 2.5 - 5 mg 1x/hari',
    maxDoseRule: 'Maksimal 5 mg/hari (anak < 6 tahun)',
    exampleCalculation: 'Balita 3 tahun: 2.5 mg (atau 2.5 mL sirup 5 mg/5 mL) diminum 1 kali sehari malam.',
    compoundingTips: 'Gunakan sediaan drops terkalibrasi pipet untuk bayi guna meminimalkan kesalahan volume.'
  },
  {
    drugName: 'Ibuprofen Puyer / Suspensi',
    doseRuleMgKg: '5 - 10 mg/kgBB per kali minum (tiap 6-8 jam)',
    maxDoseRule: 'Maksimal 40 mg/kgBB/hari atau 1200 mg/hari',
    exampleCalculation: 'Anak BB 15 kg: 15 × 10 mg = 150 mg per dosis (atau 7.5 mL sirup 100 mg/5 mL).',
    compoundingTips: 'Wajib diminum segera setelah makan atau bersama susu untuk mencegah dispepsia lambung.'
  },
  {
    drugName: 'Salbutamol Sulfat Puyer',
    doseRuleMgKg: '0.1 - 0.15 mg/kgBB per kali minum (tiap 8 jam)',
    maxDoseRule: 'Maksimal 2 mg per dosis untuk anak 2-6 tahun',
    exampleCalculation: 'Anak BB 10 kg: 10 × 0.1 mg = 1 mg per bungkus puyer (3x sehari).',
    compoundingTips: 'Edukasi orang tua potensi tremor halus tangan dan takikardia ringan yang bersifat sementara.'
  },
  {
    drugName: 'Ambroksol HCl Puyer',
    doseRuleMgKg: '1.2 - 1.6 mg/kgBB/hari dibagi dalam 3 dosis',
    maxDoseRule: 'Maksimal 45 mg/hari untuk anak usia 6-12 tahun',
    exampleCalculation: 'Anak BB 15 kg: 1.5 × 15 mg = 22.5 mg/hari = 7.5 mg per bungkus (3x sehari).',
    compoundingTips: 'Dapat dikombinasikan dengan zat pemanis aman (aspartam/sakarin) bila rasa pahit mengganggu.'
  },
  {
    drugName: 'Pseudoefedrin HCl Puyer',
    doseRuleMgKg: '1 mg/kgBB per kali minum tiap 6 jam',
    maxDoseRule: 'Maksimal 15 mg per dosis (2-5 tahun) atau 30 mg (6-12 tahun)',
    exampleCalculation: 'Anak BB 12 kg: 12 × 1 mg = 12 mg per bungkus puyer (maksimal 4x sehari).',
    compoundingTips: 'Batasi penggunaan maksimal 3-5 hari untuk mencegah rebound mucosal congestion.'
  },
  {
    drugName: 'Domperidon Puyer / Suspensi',
    doseRuleMgKg: '0.25 mg/kgBB per kali minum (tiap 8 jam)',
    maxDoseRule: 'Maksimal 0.75 mg/kgBB/hari',
    exampleCalculation: 'Balita BB 10 kg: 10 × 0.25 mg = 2.5 mg per kali minum (diminum 15-30 menit sebelum makan).',
    compoundingTips: 'Hindari penggunaan bersama antibiotik makrolida (Azitromisin) karena risiko aditif aritmia QTc.'
  }
];

// 15. Beers Criteria Presets (8 Kasus)
export interface BeersPreset {
  drugName: string;
  beersClass: string;
  geriatricDanger: string;
  saferAlternative: string;
}

export const BEERS_PRESETS: BeersPreset[] = [
  {
    drugName: 'Klorfeniramin (CTM) & Difenhidramin',
    beersClass: 'Antihistamin Generasi 1 (Antikolinergik Kuat)',
    geriatricDanger: 'Efek sedasi berat, retensi urin akut, konstipasi berat, glaukoma sudut sempit, dan memicu risiko jatuh/fraktur panggul.',
    saferAlternative: 'Antihistamin generasi ke-2 non-sedatif: Cetirizine, Loratadine, atau Fexofenadine.'
  },
  {
    drugName: 'Diazepam & Klonazepam',
    beersClass: 'Benzodiazepin Long-Acting (Waktu Paruh Panjang)',
    geriatricDanger: 'Akumulasi metabolit aktif memicu delirium akut, penurunan kognisi/memori, inkoordinasi motorik, dan kecelakaan jatuh fatal.',
    saferAlternative: 'Non-farmakologi (sleep hygiene), atau SSRI untuk ansietas, atau Melatonin dosis rendah.'
  },
  {
    drugName: 'Ketorolac & Piroksikam',
    beersClass: 'NSAID Non-Selektif Risiko GI/Ginjal Ekstrem',
    geriatricDanger: 'Risiko pendarahan gastrointestinal masif tersembunyi, gagal ginjal akut, dan memperburuk hipertensi/gagal jantung.',
    saferAlternative: 'Parasetamol oral (maks 2-3 g/hari) atau NSAID topikal (Diklofenak gel).'
  },
  {
    drugName: 'Amitriptilin HCl',
    beersClass: 'Antidepresan Trisiklik (TCA Antikolinergik Tinggi)',
    geriatricDanger: 'Sedasi berat, hipotensi ortostatik fatal saat bangun tidur, aritmia konduksi jantung, dan retensi urin.',
    saferAlternative: 'SSRI (Sertraline / Escitalopram) untuk depresi, atau Gabapentinoid untuk nyeri neuropati.'
  },
  {
    drugName: 'Digoksin Dosis >0.125 mg/hari',
    beersClass: 'Glikosida Inotropik Jantung',
    geriatricDanger: 'Klirens ginjal lansia menurun; dosis >0.125 mg/hari tidak menambah manfaat mortalitas dan meningkatkan risiko aritmia toksik.',
    saferAlternative: 'Batasi dosis maksimal 0.0625 - 0.125 mg/hari, optimalkan Beta-Blocker dan ARNI/ACEi.'
  },
  {
    drugName: 'Glibenklamid (Glyburide)',
    beersClass: 'Sulfonilurea Long-Acting Generasi Tua',
    geriatricDanger: 'Waktu kerja sangat panjang memicu hipoglikemia berat berkepanjangan yang tidak disadari (hypoglycemia unawareness).',
    saferAlternative: 'Gliklazid, Glimepirid dosis rendah, DPP-4 Inhibitor (Linagliptin), atau SGLT-2 Inhibitor.'
  },
  {
    drugName: 'Zolpidem & Z-Drugs',
    beersClass: 'Sedatif-Hipnotik Non-Benzodiazepin',
    geriatricDanger: 'Memicu delirium nokturnal, parasomnia (sleep walking/driving), ataksia, dan risiko fraktur tulang serupa benzo.',
    saferAlternative: 'Intervensi non-farmakologi Cognitive Behavioral Therapy for Insomnia (CBT-I).'
  },
  {
    drugName: 'Spironolakton Dosis >25 mg/hari',
    beersClass: 'Antagonis Aldosteron / Diuretik Hemat Kalium',
    geriatricDanger: 'Risiko hiperkalemia fatal bila diberikan >25 mg/hari pada lansia gagal jantung, terutama bila dikombinasi ACEi/ARB.',
    saferAlternative: 'Batasi dosis 12.5 - 25 mg/hari dengan pemantauan ketat serum kalium tiap 3 bulan.'
  }
];

// 16. Patient Counseling Presets (8 Kasus)
export interface PatientCounselingPreset {
  deviceType: string;
  stepByStepProtocol: string[];
  criticalMistakesToAvoid: string;
  cleaningInstructions: string;
}

export const PATIENT_COUNSELING_PRESETS: PatientCounselingPreset[] = [
  {
    deviceType: 'Inhaler MDI (Metered Dose Inhaler)',
    stepByStepProtocol: [
      '1. Buka tutup dan kocok inhaler 5-10 detik secara vertikal.',
      '2. Buang napas maksimal menjauhi mouthpiece.',
      '3. Rapatkan bibir di sekeliling mouthpiece tanpa digigit.',
      '4. Tekan tabung inhaler sambil MENARIK NAPAS DALAM & LAMBAT.',
      '5. TAHAN NAPAS selama 10 detik atau senyamannya, lalu hembuskan perlahan.',
      '6. Kumur air putih bila mengandung kortikosteroid (cegah candidiasis).'
    ],
    criticalMistakesToAvoid: 'Menekan obat sebelum menarik napas (obat menempel di lidah/tenggorokan, bukan paru-paru).',
    cleaningInstructions: 'Bersihkan corong plastik seminggu sekali dengan air hangat mengalir, keringkan di udara.'
  },
  {
    deviceType: 'Turbuhaler / Diskus (DPI Serbuk Kering)',
    stepByStepProtocol: [
      '1. Buka penutup dan putar grip hingga terdengar bunyi "KLIK".',
      '2. Buang napas maksimal menjauhi alat (JANGAN tiup ke dalam corong).',
      '3. Rapatkan bibir di sekeliling corong penghisap.',
      '4. HISAP DENGAN CEPAT, KUAT, DAN DALAM menggunakan mulut.',
      '5. Tahan napas selama 10 detik, lalu hembuskan napas perlahan.',
      '6. Kumur air matang dan buang air kumurannya.'
    ],
    criticalMistakesToAvoid: 'Mengocok alat (tidak perlu dikocok) atau meniupkan napas ke corong (serbuk basah dan menggumpal).',
    cleaningInstructions: 'Lap corong mouthpiece dengan tisu kering. JANGAN pernah mencuci dengan air!'
  },
  {
    deviceType: 'Tetes Mata Steril (Eye Drops Multidose)',
    stepByStepProtocol: [
      '1. Cuci tangan dengan sabun dan air mengalir hingga bersih.',
      '2. Dongakkan kepala ke atas dan tarik kelopak mata bawah perlahan.',
      '3. Teteskan 1 tetes ke dalam kantung kelopak mata bawah.',
      '4. Tutup mata perlahan selama 1-2 menit tanpa mengedip cepat.',
      '5. Tekan lembut sudut mata bagian dalam (punctum lakrimalis) dekat hidung.'
    ],
    criticalMistakesToAvoid: 'Ujung botol menyentuh bola mata atau jari tangan (memicu kontaminasi bakteri di seluruh botol).',
    cleaningInstructions: 'Tutup rapat segera setelah digunakan. Buang sisa obat setelah 28-30 hari tutup botol dibuka!'
  },
  {
    deviceType: 'Salep Mata Steril (Eye Ointment)',
    stepByStepProtocol: [
      '1. Cuci tangan bersih. Buka tutup tube tanpa menyentuh ujungnya.',
      '2. Tengadahkan kepala dan tarik kelopak mata bawah ke arah bawah.',
      '3. Oleskan pita salep tipis sepanjang ±1 cm ke dalam kantung kelopak mata.',
      '4. Pejamkan mata perlahan selama 1-2 menit dan gerakkan bola mata.',
      '5. Bersihkan sisa salep berlebih di sekitar bulu mata dengan tisu steril.'
    ],
    criticalMistakesToAvoid: 'Menggunakan salep mata tepat sebelum mengemudi (salep memicu pandangan kabur sementara).',
    cleaningInstructions: 'Gunakan salep mata sebaiknya sebelum tidur malam. BUD maksimal 28 hari paska buka segel.'
  },
  {
    deviceType: 'Tetes Telinga (Ear Drops)',
    stepByStepProtocol: [
      '1. Hangatkan botol tetes telinga di genggaman tangan selama beberapa menit.',
      '2. Miringkan kepala ke samping hingga telinga yang sakit menghadap ke atas.',
      '3. Tarik daun telinga: Dewasa (ke atas & belakang), Balita (ke bawah & belakang).',
      '4. Teteskan obat sesuai dosis tanpa menyentuh liang telinga.',
      '5. Pertahankan posisi miring selama 3-5 menit agar obat meresap sempurna.'
    ],
    criticalMistakesToAvoid: 'Meneteskan obat dingin langsung dari kulkas (memicu pusing vertigo dan mual mendadak).',
    cleaningInstructions: 'Simpan pada suhu ruang terkontrol terlindung cahaya matahari langsung.'
  },
  {
    deviceType: 'Semprot Hidung (Nasal Spray)',
    stepByStepProtocol: [
      '1. Hembuskan napas perlahan untuk membersihkan rongga hidung.',
      '2. Tundukkan kepala sedikit ke depan (JANGAN menengadah ke atas).',
      '3. Masukkan ujung semprotan ke lubang hidung, arahkan menjauhi sekat tengah hidung.',
      '4. Tekan pompa semprot sambil menghirup napas perlahan lewat hidung.',
      '5. Hembuskan napas lewat mulut. Ulangi pada lubang hidung lainnya.'
    ],
    criticalMistakesToAvoid: 'Mengarahkan semprotan ke sekat hidung tengah / septum (memicu iritasi dan mimisan / epistaksis).',
    cleaningInstructions: 'Lap ujung aplikator dengan tisu bersih dan pasang kembali penutup pelindung.'
  },
  {
    deviceType: 'Suppositoria Rektal',
    stepByStepProtocol: [
      '1. Cuci tangan bersih. Pastikan suppositoria dalam kondisi padat (dinginkan bila lembek).',
      '2. Buka kemasan aluminium foil suppositoria.',
      '3. Berbaring miring dengan kaki bawah lurus dan kaki atas ditekuk ke dada.',
      '4. Masukkan bagian ujung lancip ke dalam anus sedalam 2-3 cm dengan jari.',
      '5. Rapatkan kedua kaki dan tetap berbaring miring selama 5-10 menit.'
    ],
    criticalMistakesToAvoid: 'Lupa membuka lapisan foil pembungkus atau langsung berdiri jalan setelah memasukkan obat.',
    cleaningInstructions: 'Simpan sisa suppositoria di tempat sejuk terlindung cahaya atau lemari es suhu 2-8°C.'
  },
  {
    deviceType: 'Insulin Pen Flextouch / Solostar',
    stepByStepProtocol: [
      '1. Pasang jarum baru, putar 2 unit untuk uji priming (safety test hingga insulin keluar).',
      '2. Putar tombol dosis sesuai anjuran dokter.',
      '3. Cubit kulit perut (rotasi area injeksi berjarak minimal 2 cm dari pusar).',
      '4. Tancapkan jarum tegak lurus 90 derajat, tekan tombol dosis hingga angka "0".',
      '5. TAHAN SELAMA 10 DETIK sebelum mencabut jarum agar dosis masuk penuh.',
      '6. Lepas jarum bekas dan buang ke safety box jarum medis.'
    ],
    criticalMistakesToAvoid: 'Langsung mencabut jarum segera paska menekan tombol (dosis insulin bocor menetes keluar).',
    cleaningInstructions: 'Pen yang sedang dipakai disimpan pada suhu ruang (BUD 28 hari). Pen cadangan wajib di kulkas 2-8°C.'
  }
];

// 17. Drug Notes / TDM Presets (8 Kasus)
export interface DrugNotesPreset {
  drugName: string;
  therapeuticWindow: string;
  clinicalSamplingTime: string;
  toxicitySymptoms: string;
  pharmacistKeyPoint: string;
}

export const DRUG_NOTES_PRESETS: DrugNotesPreset[] = [
  {
    drugName: 'Digoksin (Glikosida Jantung)',
    therapeuticWindow: '0.8 – 2.0 ng/mL (Optimal Gagal Jantung: 0.5–0.9 ng/mL)',
    clinicalSamplingTime: 'Trough level: Minimal 6-8 jam pasca dosis terakhir (optimal tepat sebelum dosis berikutnya).',
    toxicitySymptoms: 'Mual muntah berat, penglihatan kuning/halo (xanthopsia), bradikardia ekstrem, dan aritmia PVC ventrikel.',
    pharmacistKeyPoint: 'Hipokalemia memicu toksisitas digoksin lebih cepat meskipun kadar serum masih dalam rentang normal.'
  },
  {
    drugName: 'Fenitoin (Antikonvulsan)',
    therapeuticWindow: 'Total: 10 – 20 mcg/mL | Bebas (Free): 1 – 2 mcg/mL',
    clinicalSamplingTime: 'Trough level setelah mencapai kondisi tunak (steady state 7-10 hari).',
    toxicitySymptoms: 'Nistagmus lateral (>20 mcg/mL), ataksia (>30 mcg/mL), letargi dan penurunan kesadaran (>40 mcg/mL).',
    pharmacistKeyPoint: 'Mengikuti kinetika non-linier Michaelis-Menten: Kenaikan dosis sedikit dapat melipatgandakan kadar serum.'
  },
  {
    drugName: 'Teofilin (Bronkodilator)',
    therapeuticWindow: '10 – 20 mcg/mL (Pediatrik/Asma Ringan: 5–15 mcg/mL)',
    clinicalSamplingTime: 'Trough level tepat sebelum dosis pagi berikutnya.',
    toxicitySymptoms: 'Takikardia, tremor hebat, mual muntah, agitasi, kejang refrakter, dan takiaritmia fatal.',
    pharmacistKeyPoint: 'Rokok menginduksi CYP1A2 sehingga mempercepat eliminasi; penghentian merokok dapat memicu toksisitas.'
  },
  {
    drugName: 'Karbamazepin (Antiepilepsi)',
    therapeuticWindow: '4 – 12 mcg/mL',
    clinicalSamplingTime: 'Trough level tepat sebelum dosis berikutnya (setelah 3-4 minggu terapi).',
    toxicitySymptoms: 'Penglihatan ganda (diplopia), ataksia, kantuk berat, hiponatremia (SIADH), dan supresi sumsum tulang.',
    pharmacistKeyPoint: 'Mengalami autoinduksi enzim CYP3A4 metabolisme sendiri: Kadar serum dapat turun setelah 2-4 minggu terapi.'
  },
  {
    drugName: 'Asam Valproat (Depakote)',
    therapeuticWindow: '50 – 100 mcg/mL',
    clinicalSamplingTime: 'Trough level tepat sebelum dosis pagi paska 2-4 hari dosis awal.',
    toxicitySymptoms: 'Hepatotoksisitas transaminitis, pankreatitis akut, tremor postural, dan ensefalopati hiperamonemia.',
    pharmacistKeyPoint: 'Sangat terikat protein plasma (90%); hipoalbuminemia meningkatkan fraksi obat bebas toksik.'
  },
  {
    drugName: 'Litium Karbonat (Bipolar)',
    therapeuticWindow: '0.6 – 1.2 mEq/L (Pemeliharaan: 0.6–0.8 mEq/L)',
    clinicalSamplingTime: 'Trough level tepat 12 jam setelah dosis malam terakhir.',
    toxicitySymptoms: 'Tremor kasar tangan, diare profus, muntah, disartria bicara pelo, kebingungan mental, dan kejang.',
    pharmacistKeyPoint: 'Dehidrasi, diet rendah garam, dan NSAID menurunkan ekskresi ginjal litium, memicu lonjakan toksik.'
  },
  {
    drugName: 'Gentamisin (Aminoglikosida)',
    therapeuticWindow: 'Peak: 5 – 10 mcg/mL | Trough: < 2 mcg/mL (Extended-interval: <1 mcg/mL)',
    clinicalSamplingTime: 'Peak: 30 menit paska akhir infus IV. Trough: Tepat sebelum dosis berikutnya.',
    toxicitySymptoms: 'Nekrosis tubulus ginjal akut (kenaikan kreatinin) dan kerusakan saraf kranial VIII (tinitus/tuli permanen).',
    pharmacistKeyPoint: 'Metode Extended-Interval Dosing (sekali sehari) terbukti lebih bakterisidal dan lebih aman untuk ginjal.'
  },
  {
    drugName: 'Warfarin (Antikoagulan)',
    therapeuticWindow: 'Target INR: 2.0 – 3.0 (Target Katup Jantung Mekanik: 2.5 – 3.5)',
    clinicalSamplingTime: 'Pemeriksaan darah PT/INR rutin setiap 1-4 minggu setelah dosis stabil.',
    toxicitySymptoms: 'Hematoma lebam kulit spontan, epitaksis mimisan, perdarahan gusi, hematuria urin merah, dan melena BAB hitam.',
    pharmacistKeyPoint: 'Konsumsi sayuran hijau tinggi Vitamin K (bayam, brokoli) wajib konsisten tiap minggu agar INR stabil.'
  }
];

// 18. SOP Farmasi Presets (6 Kasus)
export interface SopFarmasiPreset {
  sopTitle: string;
  standardReference: string;
  keyCompliancePoints: string[];
  criticalAuditFocus: string;
}

export const SOP_FARMASI_PRESETS: SopFarmasiPreset[] = [
  {
    sopTitle: 'SOP Penyimpanan Obat Rantai Dingin (Cold Chain 2°C - 8°C)',
    standardReference: 'Permenkes No. 72/2016, Permenkes 73/2016 & Standar CDOB BPOM',
    keyCompliancePoints: [
      'Suhu kulkas farmasi wajib dicatat minimal 2 kali sehari (pagi & sore).',
      'Termometer digital terkalibrasi diletakkan di rak tengah (bukan di pintu kulkas).',
      'Sediaan vaksin, insulin, dan supositoria tidak boleh menempel di dinding freezer.',
      'SOP penanganan darurat pemadaman listrik (ice pack & generator otomatis).'
    ],
    criticalAuditFocus: 'Logbook grafik pemantauan suhu tanpa putus dan bukti kalibrasi termometer tahunan.'
  },
  {
    sopTitle: 'SOP Skrining Resep & Pengkajian 7 Benar',
    standardReference: 'Standar Akreditasi KARS STARKES & Permenkes No. 73/2016',
    keyCompliancePoints: [
      'Pemeriksaan kelengkapan administratif (SIP dokter, nama pasien, tanggal).',
      'Pemeriksaan kesesuaian farmasetik (bentuk sediaan, dosis, stabilitas, rute).',
      'Pemeriksaan klinis (alergi, duplikasi terapi, interaksi obat mayor, kontraindikasi).',
      'Dokumentasi konfirmasi intervensi apoteker ke dokter penulis resep.'
    ],
    criticalAuditFocus: 'Formulir paraf telaah resep dan dokumentasi catatan intervensi klinis apoteker.'
  },
  {
    sopTitle: 'SOP Penyerahan Obat & Pelayanan Informasi Obat (PIO)',
    standardReference: 'Standar Akreditasi Kemenkes RI & Permenkes No. 73/2016',
    keyCompliancePoints: [
      'Penerapan 3 Prime Questions (penjelasan dokter, cara pakai, harapan terapi).',
      'Verifikasi identitas pasien minimal 2 penanda (nama lengkap dan tanggal lahir).',
      'Penjelasan aturan pakai, waktu minum obat, potensi efek samping, dan cara penyimpanan.',
      'Peragaan teknik penggunaan obat sediaan khusus (inhaler, tetes mata, insulin).'
    ],
    criticalAuditFocus: 'Bukti dokumentasi kartu konseling PIO dan kepuasan pasien saat dispensing.'
  },
  {
    sopTitle: 'SOP Pengelolaan Obat High-Alert & Tall Man LASA',
    standardReference: 'STARKES SKP 3 & Rekomendasi ISMP (Institute for Safe Medication Practices)',
    keyCompliancePoints: [
      'Penempelan stiker "HIGH ALERT" merah pada vial/ampul konsentrasi tinggi.',
      'Penyimpanan terpisah dan terbatas di rak depo farmasi (akses terkunci untuk elektrolit pekat).',
      'Penulisan Tall Man Lettering pada label obat nama mirip kemasan mirip (LASA).',
      'Prosedur Double-Check independen oleh dua petugas sebelum penyerahan obat.'
    ],
    criticalAuditFocus: 'Kepatuhan penempelan stiker penanda dan daftar resmi High-Alert Rumah Sakit.'
  },
  {
    sopTitle: 'SOP Monitoring Efek Samping Obat (MESO)',
    standardReference: 'Pedoman Farmakovigilans BPOM RI & STARKES MFK',
    keyCompliancePoints: [
      'Identifikasi kejadian efek samping obat (ADR) tidak terduga di ruang rawat.',
      'Penilaian kausalitas hubungan obat dan efek samping menggunakan Algoritma Naranjo.',
      'Pengisian Formulir Kuning MESO resmi Badan POM.',
      'Pelaporan online insiden MESO ke Pusat Farmakovigilans Nasional BPOM.'
    ],
    criticalAuditFocus: 'Jumlah pelaporan berkala insiden ADR dan bukti tindak lanjut keselamatan pasien.'
  },
  {
    sopTitle: 'SOP Pemusnahan Resep & Obat Rusak / Kedaluwarsa',
    standardReference: 'Permenkes No. 73/2016 & Pedoman Pengelolaan Limbah Farmasi B3',
    keyCompliancePoints: [
      'Resep yang telah disimpan melebihi 5 tahun dapat dimusnahkan.',
      'Pemisahan obat rusak/ED di karantina khusus berlabel "Obat Kedaluwarsa - Tidak Dijual".',
      'Pembuatan Berita Acara Pemusnahan disaksikan oleh petugas Dinkes/Balai POM.',
      'Pemusnahan sediaan antibiotik dan sitotoksik bekerja sama dengan pihak ketiga pengolah limbah B3.'
    ],
    criticalAuditFocus: 'Dokumen Berita Acara Pemusnahan lengkap dengan tanda tangan saksi resmi.'
  }
];

// 19. Regulations Presets (6 Kasus)
export interface RegulationsPreset {
  regulationTitle: string;
  legalAuthority: string;
  coreMandate: string;
  penaltyOrConsequence: string;
}

export const REGULATIONS_PRESETS: RegulationsPreset[] = [
  {
    regulationTitle: 'Kewenangan Praktik Farmasi Klinis & Penyerahan Obat',
    legalAuthority: 'UU No. 17 Tahun 2023 tentang Kesehatan & PP No. 28 Tahun 2024',
    coreMandate: 'Tenaga kefarmasian berwenang penuh melakukan pengkajian resep, penyerahan obat, pelayanan informasi obat (PIO), konseling, monitoring terapi (TDM), dan evaluasi penggunaan obat.',
    penaltyOrConsequence: 'Pelanggaran penyerahan obat tanpa wewenang dikenakan sanksi administratif pencabutan SIPA hingga sanksi pidana perlindungan konsumen.'
  },
  {
    regulationTitle: 'Standar Pelayanan Kefarmasian di Apotek',
    legalAuthority: 'Permenkes No. 73 Tahun 2016 tentang Standar Pelayanan Farmasi di Apotek',
    coreMandate: 'Apoteker wajib berada di apotek selama jam buka untuk melayani resep, konseling swamedikasi, home pharmacy care, dan monitoring kepatuhan terapi pasien.',
    penaltyOrConsequence: 'Apotek tanpa kehadiran apoteker (Apoteker Tidak Berada di Tempat) dapat dikenai Surat Peringatan hingga penutupan izin operasional apotek.'
  },
  {
    regulationTitle: 'Standar Pelayanan Kefarmasian di Rumah Sakit',
    legalAuthority: 'Permenkes No. 72 Tahun 2016 tentang Standar Pelayanan Farmasi di RS',
    coreMandate: 'Pelayanan farmasi rumah sakit meliputi pengelolaan sediaan farmasi (sistem satu pintu) dan pelayanan farmasi klinis (rekonsiliasi obat, visite, MESO, PTO, dispensing sediaan steril).',
    penaltyOrConsequence: 'Kegagalan pemenuhan standar berakibat pada penurunan predikat akreditasi rumah sakit (KARS/STARKES).'
  },
  {
    regulationTitle: 'Pengawasan Obat Keras Tertentu (OOT) & Prekursor',
    legalAuthority: 'PerBPOM No. 10 Tahun 2019 & UU No. 35 Tahun 2009',
    coreMandate: 'Wajib mencatat kartu stok real-time, menyimpan di lemari khusus terkunci, dan melaporkan penyaluran Narkotika/Psikotropika secara online via SIPNAP tiap bulan.',
    penaltyOrConsequence: 'Keterlambatan pelaporan atau selisih stok fisik tanpa berita acara dapat berakibat teguran keras, SP1/SP2, hingga pembekuan izin apotek.'
  },
  {
    regulationTitle: 'Pelaporan Narkotika & Psikotropika SIPNAP',
    legalAuthority: 'Permenkes No. 3 Tahun 2015 tentang Peredaran & Pelaporan Narkotika',
    coreMandate: 'Apotek, Rumah Sakit, dan Puskesmas wajib menyampaikan laporan pemasukan dan penyerahan narkotika dan psikotropika secara elektronik paling lambat tanggal 10 tiap bulan.',
    penaltyOrConsequence: 'Sanksi teguran tertulis, penghentian sementara kegiatan pelayanan, hingga pencabutan izin edar faskes.'
  },
  {
    regulationTitle: 'Ketentuan Penyerahan & Hak Substitusi Obat Generik',
    legalAuthority: 'PP No. 51 Tahun 2009 Pasal 24 tentang Pekerjaan Kefarmasian',
    coreMandate: 'Apoteker berwenang mengganti obat merk dagang dalam resep dengan obat generik berkhasiat sama atas persetujuan pasien demi efisiensi biaya terapi.',
    penaltyOrConsequence: 'Memberikan perlindungan hukum bagi apoteker dalam menjamin aksesibilitas keterjangkauan harga obat bagi masyarakat.'
  }
];

// ============================================================================
// COMPREHENSIVE CAPTION GENERATOR FOR ALL 22 TEMPLATES & 146+ CASES
// ============================================================================

export interface ActivePresetIndices {
  interaction?: number;
  iv?: number;
  highAlert?: number;
  dowa?: number;
  pregnancy?: number;
  toxicology?: number;
  triage?: number;
  batuk?: number;
  diare?: number;
  maag?: number;
  drugLab?: number;
  sideEffect?: number;
  renal?: number;
  pediatric?: number;
  beers?: number;
  counseling?: number;
  drugNotes?: number;
  sop?: number;
  regulations?: number;
  algorithm?: number;
  flowchart?: number;
  pillars?: number;
  pathway?: number;
  ukmppaiQuiz?: number;
  uktvfQuiz?: number;
  herbDrug?: number;
  chrono?: number;
  ppra?: number;
  tdm?: number;
  offLabel?: number;
  aiPrompt?: number;
  gyssens?: number;
  prophylaxis?: number;
  antibiogram?: number;
  signa?: number;
  fornas?: number;
  pnpk?: number;
}


// ============================================================================
// 20. THERAPY ALGORITHM PRESETS (12 KASUS)
// ============================================================================
export interface TherapyAlgorithmStep {
  stepNum: string;
  stageTitle: string;
  categoryBadge: 'Lini 1 (Inisiasi)' | 'Lini 2 (Dual)' | 'Lini 3 (Triple)' | 'Lini 4 (Refrakter)';
  drugs: string;
  targetCriteria: string;
  triggerNext: string;
}

export interface TherapyAlgorithmPreset {
  diseaseName: string;
  guidelineSource: string;
  shortSummary: string;
  steps: TherapyAlgorithmStep[];
  pharmacistPearl: string;
}

export const THERAPY_ALGORITHM_PRESETS: TherapyAlgorithmPreset[] = [
  {
    diseaseName: 'Hipertensi Primer Dewasa',
    guidelineSource: 'PERKI 2023 / KMK 303/2026 / ISH',
    shortSummary: 'Algoritma eskalasi terapi hipertensi bertahap dari kombinasi ganda SPC hingga hipertensi resisten.',
    steps: [
      {
        stepNum: '1',
        stageTitle: 'Inisiasi Kombinasi Ganda Dosis Rendah',
        categoryBadge: 'Lini 1 (Inisiasi)',
        drugs: 'Candesartan 8 mg + Amlodipine 5 mg PO 1x/hari (atau Single Pill Combination ARB + CCB)',
        targetCriteria: 'Target Tekanan Darah < 140/90 mmHg dalam 1-3 bulan pertama (< 130/80 mmHg bila toleran)',
        triggerNext: 'Jika tensi tetap >= 140/90 mmHg setelah 1 bulan, eskalasi ke Langkah 2.'
      },
      {
        stepNum: '2',
        stageTitle: 'Eskalasi Kombinasi Ganda Dosis Maksimal',
        categoryBadge: 'Lini 2 (Dual)',
        drugs: 'Candesartan 16 mg + Amlodipine 10 mg PO 1x/hari dosis terapeutik penuh',
        targetCriteria: 'Target Optimal < 130/80 mmHg tanpa keluhan hipotensi ortostatik atau edema perifer',
        triggerNext: 'Jika tensi tetap >= 140/90 mmHg setelah 1 bulan dosis penuh, naik ke Langkah 3.'
      },
      {
        stepNum: '3',
        stageTitle: 'Terapi Kombinasi Tiga Obat (Triple Therapy)',
        categoryBadge: 'Lini 3 (Triple)',
        drugs: 'Candesartan 16 mg + Amlodipine 10 mg + Hydrochlorothiazide (HCT) 12.5 - 25 mg PO pagi',
        targetCriteria: 'Tekanan darah target < 130/80 mmHg tercapai & elektrolit kalium stabil',
        triggerNext: 'Jika tensi tetap >= 140/90 mmHg meski telah pakai 3 obat termasuk diuretik, diagnosis Hipertensi Resisten.'
      },
      {
        stepNum: '4',
        stageTitle: 'Tatalaksana Hipertensi Resisten',
        categoryBadge: 'Lini 4 (Refrakter)',
        drugs: 'Tambahkan Spironolactone 25 - 50 mg 1x/hari (atau Bisoprolol 5-10 mg bila resting HR > 80 bpm)',
        targetCriteria: 'Kontrol tekanan darah refrakter & evaluasi skrining hipertensi sekunder',
        triggerNext: 'Rujukan ke Dokter Spesialis Jantung (Sp.JP) atau Ginjal Hipertensi (Sp.PD-KGH).'
      }
    ],
    pharmacistPearl: 'Kombinasi ARB + CCB memiliki sinergi hemodinamik sangat baik; vasodilatasi arteriol dari ARB sekaligus menekan efek samping ankle edema yang dipicu Amlodipine.'
  },
  {
    diseaseName: 'Diabetes Melitus Tipe 2 (DMT2)',
    guidelineSource: 'PERKENI 2024 / ADA Standards of Care',
    shortSummary: 'Alur pengelolaan glikemik bertahap dari monoterapi, kombinasi ganda komorbid, hingga insulin basal-bolus.',
    steps: [
      {
        stepNum: '1',
        stageTitle: 'Inisiasi Monoterapi & Modifikasi Gaya Hidup',
        categoryBadge: 'Lini 1 (Inisiasi)',
        drugs: 'Metformin 500 mg PO 1-2x/hari bersama makan, titrasi bertahap hingga 1000 mg 2x/hari',
        targetCriteria: 'Target HbA1c < 7.0%, Glukosa Darah Puasa (GDP) 80 - 130 mg/dL',
        triggerNext: 'Jika setelah 3 bulan evaluasi HbA1c tetap >= 7.0%, eskalasi ke Langkah 2.'
      },
      {
        stepNum: '2',
        stageTitle: 'Kombinasi Ganda Berbasis Komorbiditas',
        categoryBadge: 'Lini 2 (Dual)',
        drugs: 'Metformin + SGLT2-i (Empagliflozin 10-25 mg) bila ada ASCVD/CKD, atau + DPP4-i / Sulfonilurea',
        targetCriteria: 'Kadar HbA1c < 7.0%, penurunan berat badan & bebas episode hipoglikemia (< 70 mg/dL)',
        triggerNext: 'Jika setelah 3 bulan terapi kombinasi ganda HbA1c masih >= 7.0%, masuk ke Langkah 3.'
      },
      {
        stepNum: '3',
        stageTitle: 'Kombinasi Tiga Obat atau Insulin Basal',
        categoryBadge: 'Lini 3 (Triple)',
        drugs: 'Metformin + SGLT2-i + DPP4-i, atau inisiasi Insulin Basal Glargine 10 Unit (0.1-0.2 U/kg) malam',
        targetCriteria: 'Kadar HbA1c < 7.0% - 7.5%, GDP pagi stabil 80 - 130 mg/dL pasca titrasi basal',
        triggerNext: 'Jika dosis insulin basal > 0.5 U/kgBB/hari atau HbA1c belum tercapai, masuk ke Langkah 4.'
      },
      {
        stepNum: '4',
        stageTitle: 'Intensifikasi Insulin Basal-Bolus Kompleks',
        categoryBadge: 'Lini 4 (Refrakter)',
        drugs: 'Insulin Basal Glargine malam (40-50% TDD) + Insulin Kerja Cepat Aspart terbagi 3x sebelum makan',
        targetCriteria: 'Kontrol glukosa post-prandial < 180 mg/dL & pencegahan komplikasi makro/mikrovaskular',
        triggerNext: 'Edukasi pencegahan hipoglikemia nokturnal & aturan penanganan Rule of 15.'
      }
    ],
    pharmacistPearl: 'SGLT2-Inhibitor (Empagliflozin/Dapagliflozin) memberikan proteksi kardio-renal independen yang menurunkan angka kematian kardiovaskular dan memperlambat gagal ginjal.'
  },
  {
    diseaseName: 'Gagal Jantung HFrEF (LVEF <= 40%)',
    guidelineSource: 'PERKI 2023 / ESC Heart Failure Guidelines',
    shortSummary: 'Protokol inisiasi cepat 4 Pilar Baku Emas (The Fantastic Four) dan titrasi dosis optimal.',
    steps: [
      {
        stepNum: '1',
        stageTitle: 'Inisiasi Sekuens Cepat 4 Pilar Baku Emas',
        categoryBadge: 'Lini 1 (Inisiasi)',
        drugs: 'ARNI (Sacubitril/Valsartan 24/26 mg 2x) + Bisoprolol 1.25-2.5 mg + Spironolakton 25 mg + Dapagliflozin 10 mg',
        targetCriteria: 'Kondisi klinis euvolemik (kering), tensi sistolik >= 95-100 mmHg, laju nadi 60-70 bpm',
        triggerNext: 'Lanjutkan ke titrasi naik dosis bertahap setiap 2-4 minggu.'
      },
      {
        stepNum: '2',
        stageTitle: 'Titrasi Dosis Optimal Menuju Target Trial',
        categoryBadge: 'Lini 2 (Dual)',
        drugs: 'Titrasi Sacubitril/Valsartan ke 97/103 mg 2x + Bisoprolol ke 10 mg 1x + Spironolakton ke 25-50 mg 1x',
        targetCriteria: 'Perbaikan kelas fungsional NYHA, penurunan biomarker NT-proBNP > 30% dari basal',
        triggerNext: 'Evaluasi fraksi ejeksi LVEF pada ekokardiografi 3-6 bulan pasca titrasi maksimal.'
      },
      {
        stepNum: '3',
        stageTitle: 'Manajemen Diuretik & Keseimbangan Cairan',
        categoryBadge: 'Lini 3 (Triple)',
        drugs: 'Furosemide 20-40 mg PO dititrasi turun ke dosis terendah segera setelah pasien kering',
        targetCriteria: 'Bebas edema tungkai, ronki basal paru negatif, JVP normal 5-2 cmH2O',
        triggerNext: 'Jika LVEF tetap <= 35% dengan QRS lebar > 130 ms, evaluasi terapi alat.'
      },
      {
        stepNum: '4',
        stageTitle: 'Evaluasi Alat ICD / CRT & Kasus Lanjut',
        categoryBadge: 'Lini 4 (Refrakter)',
        drugs: 'Pertimbangkan Implantable Cardioverter Defibrillator (ICD) / Cardiac Resynchronization Therapy (CRT)',
        targetCriteria: 'Pencegahan sudden cardiac death & perbaikan sinkronisasi kontraksi ventrikel',
        triggerNext: 'Rujukan ke Pusat Jantung Terpadu / subspesialis gagal jantung lanjut.'
      }
    ],
    pharmacistPearl: 'Keempat pilar Fantastic Four menurunkan mortalitas kardiovaskular > 60%; pantau eGFR dan Kalium serum 1-2 minggu pasca inisiasi dosis.'
  },
  {
    diseaseName: 'Asma Bronkial Dewasa (Pedoman GINA)',
    guidelineSource: 'GINA 2024 Track 1 (Anti-inflammatory Reliever)',
    shortSummary: 'Alur terapi asma berbasis kombinasi kortikosteroid inhalasi + Formoterol (MART) dari Step 1 hingga 5.',
    steps: [
      {
        stepNum: '1',
        stageTitle: 'Step 1-2: Gejala Asma Ringan / Kurang dari 4-5 Hari/Minggu',
        categoryBadge: 'Lini 1 (Inisiasi)',
        drugs: 'Budesonide-Formoterol Turbuhaler (160/4.5 mcg) 1 hisapan HANYA saat timbul gejala sesak',
        targetCriteria: 'Skor Asthma Control Test (ACT) = 25, tidak ada eksaserbasi yang butuh steroid oral',
        triggerNext: 'Jika gejala timbul >= 4-5 hari/minggu atau terbangun malam >= 1x/minggu, naik ke Step 3.'
      },
      {
        stepNum: '2',
        stageTitle: 'Step 3: Terapi Pemeliharaan Rumatan Rendah + Pelega (MART)',
        categoryBadge: 'Lini 2 (Dual)',
        drugs: 'Budesonide-Formoterol (160/4.5 mcg) 1 hisap 2x/hari rumatan + 1 hisap ekstra bila timbul sesak',
        targetCriteria: 'Skor ACT >= 20-25, pemakaian pelega ekstra < 2 kali per minggu',
        triggerNext: 'Jika setelah 1-3 bulan asma tetap belum terkontrol pada dosis rendah, naik ke Step 4.'
      },
      {
        stepNum: '3',
        stageTitle: 'Step 4: Dosis Medium Inhaler Rumatan (Medium-Dose MART)',
        categoryBadge: 'Lini 3 (Triple)',
        drugs: 'Budesonide-Formoterol (160/4.5 mcg) 2 hisap 2x/hari (total 4 hisap rumatan/hari) + pelega ekstra',
        targetCriteria: 'Skor ACT >= 20, remisi eksaserbasi akut & stabilitas faal paru APE/FEV1',
        triggerNext: 'Jika tetap sering mengalami kekambuhan berat, evaluasi Step 5.'
      },
      {
        stepNum: '4',
        stageTitle: 'Step 5: Asma Berat Refrakter & Terapi Biologis',
        categoryBadge: 'Lini 4 (Refrakter)',
        drugs: 'Tambahkan LAMA Tiotropium Respimat 5 mcg 1x/hari ± Evaluasi Terapi Biologis Anti-IgE (Omalizumab)',
        targetCriteria: 'Penurunan kebutuhan steroid oral sistemik & pencegahan rawat inap IGD',
        triggerNext: 'Rujukan ke Dokter Spesialis Paru (Sp.P) konsultan asma alergi imunologi.'
      }
    ],
    pharmacistPearl: 'GINA tidak lagi merekomendasikan SABA tunggal (Salbutamol saja) karena meningkatkan risiko serangan fatal; selalu edukasi kumur air putih pasca hisap steroid inhaler.'
  },
  {
    diseaseName: 'Dislipidemia & Pencegahan Kardiovaskular (ASCVD)',
    guidelineSource: 'PERKI 2023 / ESC Lipid Consensus',
    shortSummary: 'Alur terapi intensitas Statin, penambahan Ezetimibe, hingga PCSK9 Inhibitor sesuai kategori risiko.',
    steps: [
      {
        stepNum: '1',
        stageTitle: 'Stratifikasi Risiko & Inisiasi Statin',
        categoryBadge: 'Lini 1 (Inisiasi)',
        drugs: 'Atorvastatin 40 - 80 mg atau Rosuvastatin 20 - 40 mg PO 1x/hari malam (Statin Intensitas Tinggi)',
        targetCriteria: 'Risiko Sangat Tinggi: Target LDL < 55 mg/dL (dan turun >= 50% dari basal); Risiko Tinggi: LDL < 70',
        triggerNext: 'Evaluasi profil lipid 4 - 12 minggu. Jika target belum tercapai pada dosis maksimal, naik ke Langkah 2.'
      },
      {
        stepNum: '2',
        stageTitle: 'Kombinasi Statin Dosis Maksimal + Ezetimibe',
        categoryBadge: 'Lini 2 (Dual)',
        drugs: 'Atorvastatin 40 mg + Ezetimibe 10 mg PO 1x/hari malam hari (Dual Cholesterol Inhibition)',
        targetCriteria: 'Penurunan tambahan kadar LDL 15-20% menuju sasaran agresif < 55 mg/dL',
        triggerNext: 'Jika pada risiko sangat tinggi target tetap belum tercapai dengan Statin + Ezetimibe, masuk Langkah 3.'
      },
      {
        stepNum: '3',
        stageTitle: 'Penambahan Terapi Target Inhibitor PCSK9',
        categoryBadge: 'Lini 3 (Triple)',
        drugs: 'Evolocumab 140 mg SC tiap 2 minggu atau 420 mg sebulan sekali',
        targetCriteria: 'Penurunan dramatis LDL ekstra hingga 50-60% pada hiperkolesterolemia familial / refrakter',
        triggerNext: 'Pemantauan berkala enzim hati SGOT/SGPT dan kepatuhan diet rendah lemak jenuh.'
      },
      {
        stepNum: '4',
        stageTitle: 'Pencegahan Komprehensif & Target Jangka Panjang',
        categoryBadge: 'Lini 4 (Refrakter)',
        drugs: 'Pertimbangkan Bempedoic Acid atau Icosapent Ethyl pada hipertrigliseridemia persisten',
        targetCriteria: 'Bebas kekambuhan Sindrom Koroner Akut, stroke iskemik, dan kematian kardiovaskular',
        triggerNext: 'Pemeriksaan profil lipid tahunan pasca target stabil tercapai.'
      }
    ],
    pharmacistPearl: 'Ezetimibe menghambat protein transporter NPC1L1 di usus halus; kombinasinya dengan statin memberikan reduksi LDL optimal tanpa melipatgandakan risiko mialgia.'
  },
  {
    diseaseName: 'Penyakit Paru Obstruktif Kronik (PPOK / COPD)',
    guidelineSource: 'GOLD 2024 / PDPI Pedoman Diagnosis PPOK',
    shortSummary: 'Klasifikasi kelompok GOLD A, B, E dan algoritma bronkodilator ganda LABA+LAMA hingga triple therapy.',
    steps: [
      {
        stepNum: '1',
        stageTitle: 'Group A: Inisiasi Bronkodilator Tunggal',
        categoryBadge: 'Lini 1 (Inisiasi)',
        drugs: 'Bronkodilator kerja cepat (SABA/SAMA) as-needed atau LABA/LAMA tunggal',
        targetCriteria: 'Pelegaan sesak napas akut & toleransi aktivitas fisik ringan harian',
        triggerNext: 'Jika gejala sesak menetap tinggi (mMRC >= 2 atau CAT >= 10), eskalasi ke Group B.'
      },
      {
        stepNum: '2',
        stageTitle: 'Group B: Kombinasi Bronkodilator Ganda (LABA + LAMA)',
        categoryBadge: 'Lini 2 (Dual)',
        drugs: 'Indacaterol + Glycopyrronium inhalasi sekali sehari (atau Tiotropium + Olodaterol)',
        targetCriteria: 'Peningkatan kapasitas fungsi paru FEV1 & penurunan skor keparahan sesak mMRC',
        triggerNext: 'Jika terjadi eksaserbasi >= 2x per tahun atau 1x rawat inap RS, pasien masuk Group E.'
      },
      {
        stepNum: '3',
        stageTitle: 'Group E: LABA + LAMA + ICS (Triple Inhaled Therapy)',
        categoryBadge: 'Lini 3 (Triple)',
        drugs: 'Fluticasone Furoate + Umeclidinium + Vilanterol (atau Budesonide + Glycopyrrolate + Formoterol)',
        targetCriteria: 'Pencegahan eksaserbasi akut berulang (direkomendasikan kuat bila Eosinofil Darah >= 300 sel/mcL)',
        triggerNext: 'Jika eksaserbasi tetap kambuh pada mantan perokok aktif, pertimbangkan terapi adjuvan oral.'
      },
      {
        stepNum: '4',
        stageTitle: 'Terapi Adjuvan PPOK Berat & Oksigen Rumatan',
        categoryBadge: 'Lini 4 (Refrakter)',
        drugs: 'Roflumilast 500 mcg PO 1x/hari (Inhibitor PDE4) atau Azitromisin 250 mg 3x/minggu + Oksigen LTOT',
        targetCriteria: 'Stabilisasi laju eksaserbasi & pencegahan gagal napas hiperkapnia kronik',
        triggerNext: 'Rujukan program rehabilitasi paru terpadu & vaksinasi influenza/pneumokokus wajib.'
      }
    ],
    pharmacistPearl: 'Kortikosteroid inhalasi (ICS) monoterapi dilarang pada PPOK; gunakan hanya dalam regimen kombinasi LABA+LAMA bila eosinofil darah tinggi untuk mencegah komplikasi pneumonia.'
  },
  {
    diseaseName: 'Penyakit Ginjal Kronik (PGK) & Nefropati Diabetik',
    guidelineSource: 'KDIGO 2024 / PERNEFRI',
    shortSummary: 'Pilar nefroproteksi modern: ACEi/ARB dosis maksimal, SGLT2 inhibitor, hingga Finerenone.',
    steps: [
      {
        stepNum: '1',
        stageTitle: 'Proteksi Lini Pertama: Inhibitor Sistem Renin-Angiotensin',
        categoryBadge: 'Lini 1 (Inisiasi)',
        drugs: 'Candesartan 8-16 mg atau Ramipril 5-10 mg PO 1x/hari (dosis maksimal yang ditoleransi)',
        targetCriteria: 'Penurunan albuminuria UACR > 30-50% & target tekanan darah < 120/80 mmHg',
        triggerNext: 'Jika eGFR >= 20 mL/min/1.73m2, segera tambahkan SGLT2-Inhibitor (Langkah 2).'
      },
      {
        stepNum: '2',
        stageTitle: 'Pemberian SGLT2-Inhibitor Nefroprotektif',
        categoryBadge: 'Lini 2 (Dual)',
        drugs: 'Dapagliflozin 10 mg atau Empagliflozin 10 mg PO 1x/hari pagi dosis tetap',
        targetCriteria: 'Penurunan progresivitas penurunan eGFR tahunan & reduksi risiko mortalitas kardiovaskular',
        triggerNext: 'Jika albuminuria persisten (UACR >= 30 mg/g) dan Kalium serum <= 4.8 mEq/L, lanjut Langkah 3.'
      },
      {
        stepNum: '3',
        stageTitle: 'Penambahan MRA Non-Steroid Selektif (Finerenone)',
        categoryBadge: 'Lini 3 (Triple)',
        drugs: 'Finerenone 10 - 20 mg PO 1x/hari (Antagonis Aldosteron Non-Steroid)',
        targetCriteria: 'Proteksi fibrosis renal & penurunan risiko gagal ginjal stadium akhir (ESRD)',
        triggerNext: 'Monitor kalium serum rutin 4 minggu pasca inisiasi Finerenone.'
      },
      {
        stepNum: '4',
        stageTitle: 'Tatalaksana Komplikasi Lanjut CKD Stage 4-5',
        categoryBadge: 'Lini 4 (Refrakter)',
        drugs: 'Eritropoietin (ESA) untuk anemia ginjal + Kalsium Karbonat pengikat fosfat + Asidosis Bikarbonat',
        targetCriteria: 'Kadar Hb 10-11.5 g/dL, Fosfat serum 3.5-5.5 mg/dL, Biknat serum >= 22 mEq/L',
        triggerNext: 'Persiapan akses vaskular AV Fistula (Cimino) untuk inisiasi Hemodialisis elektif.'
      }
    ],
    pharmacistPearl: 'Penurunan eGFR transien hingga 30% pasca inisiasi ACEi/ARB atau SGLT2-i adalah efek hemodinamik normal akibat penurunan tekanan intraglomerular yang melindungi ginjal jangka panjang.'
  },
  {
    diseaseName: 'Sindrom Koroner Akut (SKA: STEMI / NSTEMI)',
    guidelineSource: 'PERKI 2023 / ESC NSTE-ACS Guidelines',
    shortSummary: 'Protokol fase hiperakut reperfusi, terapi antiplatelet ganda (DAPT), dan stabilisasi sekunder.',
    steps: [
      {
        stepNum: '1',
        stageTitle: 'Tindakan Emergensi Awal & Loading Antiplatelet',
        categoryBadge: 'Lini 1 (Inisiasi)',
        drugs: 'Aspirin 160-320 mg kunyah + Ticagrelor 180 mg loading (atau Klopidogrel 300-600 mg) + ISDN SL',
        targetCriteria: 'Reduksi rasa nyeri dada iskemik & pencegahan progresi oklusi trombus koroner akut',
        triggerNext: 'Segera lakukan Primary PCI (door-to-balloon < 90 menit) atau Fibrinolisis < 12 jam onset.'
      },
      {
        stepNum: '2',
        stageTitle: 'Dual Antiplatelet Therapy (DAPT) Pasca Reperfusi',
        categoryBadge: 'Lini 2 (Dual)',
        drugs: 'Aspirin 80-100 mg 1x/hari + Ticagrelor 90 mg 2x/hari selama minimal 12 bulan paska stent/PCI',
        targetCriteria: 'Bebas komplikasi trombosis stent akut dan infark miokard berulang',
        triggerNext: 'Tambahkan PPI gastroprotektor (Pantoprazole 40 mg) pada pasien dengan risiko perdarahan GI.'
      },
      {
        stepNum: '3',
        stageTitle: 'Stabilisasi Plak Agresif: Statin Intensitas Tinggi',
        categoryBadge: 'Lini 3 (Triple)',
        drugs: 'Atorvastatin 80 mg PO 1x/hari malam hari dimulai segera tanpa menunggu hasil profil lipid',
        targetCriteria: 'Target reduksi agresif LDL < 55 mg/dL & stabilisasi lapisan fibrosa plak ateroma koroner',
        triggerNext: 'Titrasi obat pencegah remodeling ventrikel: Beta Blocker + ACEi/Ramipril.'
      },
      {
        stepNum: '4',
        stageTitle: 'Pencegahan Sekunder Komprehensif Jangka Panjang',
        categoryBadge: 'Lini 4 (Refrakter)',
        drugs: 'Bisoprolol 2.5-5 mg (target resting HR 55-60 bpm) + Ramipril 5 mg + Rehabilitasi Jantung',
        targetCriteria: 'Tekanan darah target < 130/80 mmHg, pencegahan gagal jantung sekunder post-infark',
        triggerNext: 'Evaluasi de-eskalasi DAPT ke monoterapi antiplatelet pasca tuntas 12 bulan.'
      }
    ],
    pharmacistPearl: 'Kepatuhan konsumsi DAPT (Aspirin + Ticagrelor/Klopidogrel) 12 bulan tidak boleh terputus sehari pun karena risiko fatal trombosis stent dengan mortalitas > 40%.'
  },
  {
    diseaseName: 'Stroke Iskemik Akut & Pencegahan Sekunder TIA',
    guidelineSource: 'PERDOSSI / AHA-ASA Stroke Guidelines',
    shortSummary: 'Trombolisis rtPA jendela 4.5 jam, protokol DAPT singkat 21 hari, dan pencegahan sekunder.',
    steps: [
      {
        stepNum: '1',
        stageTitle: 'Fase Hiperakut Onset < 4.5 Jam: Trombolisis IV',
        categoryBadge: 'Lini 1 (Inisiasi)',
        drugs: 'Alteplase (rtPA) 0.9 mg/kgBB IV (10% bolus 1 menit, 90% infus 1 jam) jika tanpa kontraindikasi',
        targetCriteria: 'Rekanalisasi sumbatan arteri serebri & pemulihan perfusi jaringan penumbra otak',
        triggerNext: 'Lakukan evaluasi CT-Scan kepala ulang 24 jam kemudian sebelum memulai antiplatelet.'
      },
      {
        stepNum: '2',
        stageTitle: 'DAPT Singkat pada Stroke Ringan / High-Risk TIA',
        categoryBadge: 'Lini 2 (Dual)',
        drugs: 'Aspirin 100 mg + Klopidogrel 75 mg 1x/hari selama 21 HARI PERTAMA (NIHSS <= 3 atau ABCD2 >= 4)',
        targetCriteria: 'Pencegahan stroke sekunder dini tanpa meningkatkan risiko transformasi hemoragik',
        triggerNext: 'Setelah hari ke-21, DE-ESKALASI DAPT menjadi monoterapi antiplatelet tunggal.'
      },
      {
        stepNum: '3',
        stageTitle: 'Monoterapi Antiplatelet & Statin Dosis Tinggi',
        categoryBadge: 'Lini 3 (Triple)',
        drugs: 'Klopidogrel 75 mg PO 1x/hari + Atorvastatin 40-80 mg PO malam (Target LDL < 70 mg/dL)',
        targetCriteria: 'Penurunan laju stroke aterotrombotik berulang jangka panjang & stabilisasi karotis',
        triggerNext: 'Kontrol tekanan darah bertahap dengan target stabil < 130/80 mmHg.'
      },
      {
        stepNum: '4',
        stageTitle: 'Antikoagulasi pada Stroke Kardioemboli (AF)',
        categoryBadge: 'Lini 4 (Refrakter)',
        drugs: 'Bila penyebab Fibrilasi Atrium: Mulai DOAC (Apixaban/Rivaroxaban) hari ke 3-14 sesuai luas infark',
        targetCriteria: 'Pencegahan emboli kardiogenik berulang (antikoagulan menggantikan fungsi antiplatelet)',
        triggerNext: 'Skrining disfagia dan fisioterapi neuro-rehabilitasi terpadu.'
      }
    ],
    pharmacistPearl: 'DAPT pasca stroke iskemik HANYA diberikan maksimal 21-90 hari; pemakaian DAPT jangka panjang > 90 hari meningkatkan risiko perdarahan otak fatal tanpa manfaat ekstra.'
  },
  {
    diseaseName: 'Tuberkulosis Paru Sensitif Obat (TB SO)',
    guidelineSource: 'PNPK TB Kemenkes RI / Pedoman WHO',
    shortSummary: 'Protokol obat antituberkulosis (OAT) FDC Fase Intensif 2 bulan dan Fase Lanjutan 4 bulan.',
    steps: [
      {
        stepNum: '1',
        stageTitle: 'Fase Intensif 2 Bulan: Regimen 4-FDC (2RHZE)',
        categoryBadge: 'Lini 1 (Inisiasi)',
        drugs: 'Rifampisin 150 mg + Isoniazid 75 mg + Pirazinamid 400 mg + Etambutol 275 mg (3-5 tablet FDC harian)',
        targetCriteria: 'Pembunuhan cepat kuman TB aktif membelah & penurunan daya penularan sputum',
        triggerNext: 'Evaluasi mikroskopis BTA sputum pada akhir bulan ke-2 pengobatan intensif.'
      },
      {
        stepNum: '2',
        stageTitle: 'Konversi Sputum & Transisi ke Fase Lanjutan',
        categoryBadge: 'Lini 2 (Dual)',
        drugs: 'Bila BTA akhir bulan ke-2 negatif: Lanjutkan ke Fase Lanjutan 4 Bulan Regimen 2-FDC (4RH)',
        targetCriteria: 'Konversi sputum mikroskopis menjadi BTA Negatif dan perbaikan klinis berat badan',
        triggerNext: 'Bila BTA bulan ke-2 tetap positif, periksa Tes Cepat Molekuler (TCM) GeneXpert untuk resistensi rifampisin.'
      },
      {
        stepNum: '3',
        stageTitle: 'Fase Lanjutan 4 Bulan: Regimen 2-FDC (4RH)',
        categoryBadge: 'Lini 3 (Triple)',
        drugs: 'Rifampisin 150 mg + Isoniazid 75 mg dosis harian selama 4 bulan berturut-turut tanpa putus',
        targetCriteria: 'Sterilisasi kuman semi-dorman intraseluler dan pencegahan kekambuhan (relaps)',
        triggerNext: 'Evaluasi mikroskopis BTA akhir bulan ke-5 dan akhir bulan ke-6.'
      },
      {
        stepNum: '4',
        stageTitle: 'Evaluasi Kesembuhan Klinis & Tuntas Terapi',
        categoryBadge: 'Lini 4 (Refrakter)',
        drugs: 'Pemeriksaan BTA bulan ke-6 negatif + Rontgen toraks perbaikan lesi fibroinfiltrat',
        targetCriteria: 'Dinyatakan SEMBUH (Cured) atau Pengobatan Lengkap (Completed)',
        triggerNext: 'Pencatatan pelaporan Sistem Informasi Tuberkulosis (SITB) faskes.'
      }
    ],
    pharmacistPearl: 'Edukasi pasien bahwa air seni/keringat berwarna kemerahan adalah normal akibat ekskresi Rifampisin; laporkan segera bila timbul mual muntah berat atau mata kuning (ikterik).'
  },
  {
    diseaseName: 'GERD & Dispepsia Refrakter',
    guidelineSource: 'PGI-PEGI 2023 Konsensus Nasional GERD',
    shortSummary: 'Strategi empiris PPI dosis tunggal, eskalasi PPI dosis ganda, PCAB Vonoprazan, hingga mukoprotektor.',
    steps: [
      {
        stepNum: '1',
        stageTitle: 'Inisiasi Terapi Empiris: PPI Dosis Standar',
        categoryBadge: 'Lini 1 (Inisiasi)',
        drugs: 'Omeprazole 20 mg 2x/hari atau Esomeprazole 40 mg 1x/hari 30-60 menit sebelum makan pagi selama 4-8 minggu',
        targetCriteria: 'Resolusi gejala sensasi terbakar di dada (heartburn) dan regurgitasi asam (Skor GERD-Q < 8)',
        triggerNext: 'Jika respon parsial setelah 4-8 minggu, eskalasi ke PPI Dosis Ganda atau PCAB.'
      },
      {
        stepNum: '2',
        stageTitle: 'Eskalasi Terapi: PPI Dosis Ganda atau PCAB',
        categoryBadge: 'Lini 2 (Dual)',
        drugs: 'Esomeprazole 40 mg 2x/hari (pagi & malam) atau Vonoprazan 20 mg 1x/hari (Potassium-Competitive Acid Blocker)',
        targetCriteria: 'Supresi asam lambung kuat 24 jam & penyembuhan mukosa esofagitis derajat C/D',
        triggerNext: 'Bila keluhan begah/lambung penuh dominan, tambahkan agen prokinetik.'
      },
      {
        stepNum: '3',
        stageTitle: 'Terapi Adjuvan Prokinetik & Mukoprotektor',
        categoryBadge: 'Lini 3 (Triple)',
        drugs: 'Tambahkan Domperidone 10 mg 3x/hari ac + Sukralfat suspensi 500 mg 3x/hari saat perut kosong',
        targetCriteria: 'Peningkatan pengosongan lambung & proteksi barier sitoprotektif mukosa esofagus',
        triggerNext: 'Bila tetap tidak ada perbaikan klinis sama sekali, lakukan Endoskopi Saluran Cerna Atas (SCBA).'
      },
      {
        stepNum: '4',
        stageTitle: 'Terapi Pemeliharaan On-Demand & Modifikasi Gaya Hidup',
        categoryBadge: 'Lini 4 (Refrakter)',
        drugs: 'Terapi on-demand saat gejala kambuh + Hindari berbaring dalam rentang 3 jam pasca makan',
        targetCriteria: 'Pencegahan striktur esofagus, Barretts esophagus, dan ketergantungan obat',
        triggerNext: 'Elevasi kepala tempat tidur 15-20 cm saat tidur malam.'
      }
    ],
    pharmacistPearl: 'PPI wajib diminum saat perut kosong 30-60 menit sebelum makan agar saat obat terserap di duodenum, pompa proton sel parietal gaster sedang aktif dipicu oleh makanan.'
  },
  {
    diseaseName: 'Artritis Gout Akut & Hiperurisemia Kronis',
    guidelineSource: 'IRA 2023 / ACR Gout Management Guidelines',
    shortSummary: 'Penanganan serangan akut dengan Kolkisin/NSAID, inisiasi bertahap Allopurinol, dan profilaksis flare.',
    steps: [
      {
        stepNum: '1',
        stageTitle: 'Tatalaksana Serangan Nyeri Artritis Akut',
        categoryBadge: 'Lini 1 (Inisiasi)',
        drugs: 'Kolkisin Dosis Rendah (1 mg segera + 0.5 mg 1 jam kemudian) atau NSAID dosis penuh (Natrium Diklofenak 50 mg 3x)',
        targetCriteria: 'Meredanya nyeri bengkak sendi metatarsophalangeal (MTP-1) dalam rentang 24 jam pertama',
        triggerNext: 'Jangan memulai obat penurun asam urat Allopurinol saat fase puncak peradangan akut.'
      },
      {
        stepNum: '2',
        stageTitle: 'Inisiasi Urate-Lowering Therapy (ULT) Pasca Serangan Mereda',
        categoryBadge: 'Lini 2 (Dual)',
        drugs: 'Allopurinol mulai 100 mg PO 1x/hari sesudah makan (50 mg bila eGFR < 30 mL/min)',
        targetCriteria: 'Toleransi obat baik tanpa ruam kemerahan alergi hipersensitivitas kutaneus',
        triggerNext: 'Titrasi naik dosis bertahap 100 mg tiap 2-4 minggu hingga target asam urat tercapai.'
      },
      {
        stepNum: '3',
        stageTitle: 'Profilaksis Serangan Flare Pasca Inisiasi Allopurinol',
        categoryBadge: 'Lini 3 (Triple)',
        drugs: 'Kolkisin 0.5 mg PO 1-2x/hari diberikan selama minimal 3-6 bulan pertama terapi Allopurinol',
        targetCriteria: 'Pencegahan mobilisasi kristal asam urat yang memicu serangan flare gout sekunder',
        triggerNext: 'Pemeriksaan kadar asam urat serum berkala setiap bulan saat fase titrasi.'
      },
      {
        stepNum: '4',
        stageTitle: 'Target Klinis Jangka Panjang & Resolusi Tofus',
        categoryBadge: 'Lini 4 (Refrakter)',
        drugs: 'Dosis pemeliharaan Allopurinol 200-300 mg/hari (atau ganti Febuxostat 40-80 mg bila resisten)',
        targetCriteria: 'Kadar Asam Urat Serum < 6.0 mg/dL (< 5.0 mg/dL bila ada tofus kronis) secara permanen',
        triggerNext: 'Bila asam urat stabil tercapai, stop profilaksis kolkisin dan teruskan Allopurinol jangka panjang.'
      }
    ],
    pharmacistPearl: 'Jangan pernah menghentikan Allopurinol bila serangan gout mendadak kambuh saat terapi; fluktuasi tajam kadar urat serum justru memperparah durasi peradangan sendi.'
  }
];

// ============================================================================
// 21. INTERACTIVE FLOWCHART / DECISION TREE PRESETS (10 KASUS)
// ============================================================================
export interface FlowchartBranch {
  condition: string;
  colorTag: 'emerald' | 'cyan' | 'amber' | 'rose';
  recommendation: string;
  rationale: string;
}

export interface InteractiveFlowchartPreset {
  clinicalCondition: string;
  guidelineSource: string;
  patientPresentation: string;
  branches: FlowchartBranch[];
  decisionTip: string;
}

export const INTERACTIVE_FLOWCHART_PRESETS: InteractiveFlowchartPreset[] = [
  {
    clinicalCondition: 'Diabetes Tipe 2: Pemilihan Terapi Lini Kedua',
    guidelineSource: 'PERKENI 2024 / ADA 2024 Guidelines',
    patientPresentation: 'Pasien DMT2 pasca monoterapi Metformin dengan kadar HbA1c belum tercapai target (< 7.0%).',
    branches: [
      {
        condition: 'Pasien Memiliki Komorbid ASCVD, Gagal Jantung, atau Penyakit Ginjal (CKD)',
        colorTag: 'emerald',
        recommendation: 'Prioritaskan SGLT2-Inhibitor (Empagliflozin/Dapagliflozin) atau GLP-1 RA',
        rationale: 'Terbukti independen menurunkan kematian kardiovaskular, re-hospitalisasi gagal jantung, dan laju dialisis ginjal.'
      },
      {
        condition: 'Tanpa Komorbid Kardio-Renal & Prioritas Biaya / Efisiensi (Faskes 1)',
        colorTag: 'cyan',
        recommendation: 'Kombinasi Metformin + Sulfonilurea Generasi 2 (Glimepiride 1-2 mg)',
        rationale: 'Efikasi penurunan glukosa kuat, sediaan dijamin FORNAS Faskes 1, diminum 1x sehari sebelum makan pagi.'
      },
      {
        condition: 'Prioritas Utama Minimalisir Risiko Hipoglikemia & Berat Badan Netral',
        colorTag: 'amber',
        recommendation: 'Kombinasi Metformin + DPP-4 Inhibitor (Linagliptin / Vildagliptin)',
        rationale: 'Mekanisme kerja glucose-dependent yang aman tanpa risiko hipoglikemia, ramah fungsi ginjal, dan berat badan netral.'
      }
    ],
    decisionTip: 'Skrining eGFR dan UACR urin sejak awal diagnosis untuk menentukan indikasi proteksi organ kardio-renal.'
  },
  {
    clinicalCondition: 'Hipertensi: Pemilihan Regimen Awal Berdasarkan Profil Pasien',
    guidelineSource: 'PERKI 2023 / ISH Global Hypertension Practice',
    patientPresentation: 'Pasien dewasa baru terkonfirmasi diagnosis hipertensi esensial pada skrining tekanan darah.',
    branches: [
      {
        condition: 'Hipertensi Derajat 2 (TD >= 160/100 mmHg) Usia Produktif',
        colorTag: 'rose',
        recommendation: 'Langsung Inisiasi Kombinasi Ganda SPC (ARB Candesartan + CCB Amlodipine)',
        rationale: 'Monoterapi terbukti gagal mencapai target pada tensi derajat 2; kombinasi ganda mengontrol tensi 2x lebih cepat.'
      },
      {
        condition: 'Hipertensi Derajat 1 pada Lansia Renta / Frailty (>80 Tahun)',
        colorTag: 'amber',
        recommendation: 'Inisiasi Monoterapi Dosis Rendah (Amlodipine 2.5-5 mg atau ARB dosis minimal)',
        rationale: 'Menghindari penurunan tensi terlalu cepat yang berisiko memicu pusing postural, hipotensi ortostatik, dan jatuh.'
      },
      {
        condition: 'Hipertensi dengan Komorbid Penyakit Jantung Koroner / Gagal Jantung',
        colorTag: 'emerald',
        recommendation: 'Regimen Berbasis Beta Blocker (Bisoprolol) + ACEi / ARB',
        rationale: 'Kombinasi ini memberikan proteksi miokard ganda, menurunkan denyut jantung istirahat, dan mencegah infark ulangan.'
      }
    ],
    decisionTip: 'Target tensi optimal adalah < 130/80 mmHg jika ditoleransi dengan baik tanpa keluhan pusing ortostatik.'
  },
  {
    clinicalCondition: 'Dislipidemia: Penentuan Target Sasaran Kolesterol LDL',
    guidelineSource: 'PERKI 2023 / ESC/EAS Lipid Guidelines',
    patientPresentation: 'Pasien dengan hasil profil lipid kolesterol total dan LDL tinggi pada evaluasi lab berkala.',
    branches: [
      {
        condition: 'Kategori Risiko Sangat Tinggi (Pasca Serangan Jantung / Stroke / Riwayat Stent)',
        colorTag: 'rose',
        recommendation: 'Target Agresif LDL < 55 mg/dL & Turun >= 50% (Atorvastatin 40-80 mg + Ezetimibe)',
        rationale: 'Mencegah serangan koroner kedua dan menstabilkan lapisan fibrosa plak ateroma pembuluh darah.'
      },
      {
        condition: 'Kategori Risiko Tinggi (Pasien DM > 10 Tahun / Gagal Ginjal Stadium 3-4)',
        colorTag: 'amber',
        recommendation: 'Target LDL < 70 mg/dL (Atorvastatin 20-40 mg atau Rosuvastatin 10-20 mg)',
        rationale: 'Mengurangi risiko kejadian kardiovaskular mayor (MACE) pada populasi berisiko tinggi komplikasi organ.'
      },
      {
        condition: 'Kategori Risiko Menengah (Hipertensi Ringan Tanpa Kerusakan Organ Target)',
        colorTag: 'emerald',
        recommendation: 'Target LDL < 100 mg/dL (Simvastatin 20-40 mg atau Atorvastatin 10-20 mg)',
        rationale: 'Menurunkan progresi pembentukan plak kolesterol arterial bersama modifikasi diet rendah lemak jenuh.'
      }
    ],
    decisionTip: 'Pemeriksaan profil lipid ulang wajib dilakukan 4-12 minggu setelah inisiasi statin untuk mengevaluasi target.'
  },
  {
    clinicalCondition: 'Asma: Triage Tingkat Keparahan Eksaserbasi Akut IGD',
    guidelineSource: 'GINA 2024 / PDPI Pedoman Penanganan Asma',
    patientPresentation: 'Pasien asma datang ke unit gawat darurat dengan keluhan sesak napas akut dan mengi (wheezing).',
    branches: [
      {
        condition: 'Eksaserbasi Ringan-Sedang (Bicara kalimat, Frekuensi napas 20-25x, SpO2 92-95%)',
        colorTag: 'emerald',
        recommendation: 'Nebulisasi SABA (Salbutamol 2.5 mg) tiap 20 menit (3 dosis) + Prednison oral 40 mg',
        rationale: 'Pelega cepat bronkodilatasi; kortikosteroid oral mempercepat resolusi inflamasi dan mencegah rawat inap.'
      },
      {
        condition: 'Eksaserbasi Berat (Bicara kata per kata, Posisi duduk bertumpu, SpO2 < 92%)',
        colorTag: 'rose',
        recommendation: 'Oksigen masker + Nebulisasi kombinasi SABA + SAMA kontinyu + Metilprednisolon 62.5 mg IV',
        rationale: 'Ipratropium bromida memberikan bronkodilatasi aditif; siapkan Magnesium Sulfat 2 g IV infus jika refrakter.'
      },
      {
        condition: 'Ancaman Henti Napas (Silent Chest, Sianosis, Kesadaran Menurun, Bradikardia)',
        colorTag: 'rose',
        recommendation: 'Intubasi Segera, Ventilasi Mekanik di ICU & Adrenalin IM jika suspek anafilaksis',
        rationale: 'Kondisi kegagalan otot pernapasan absolut yang mengancam nyawa dalam hitungan menit.'
      }
    ],
    decisionTip: 'Respon klinis pada 1 jam pertama pasca nebulisasi menentukan apakah pasien boleh pulang atau wajib rawat inap.'
  },
  {
    clinicalCondition: 'Diare Akut: Triage Dehidrasi & Indikasi Pemberian Antibiotik',
    guidelineSource: 'WHO Diarrhea Protocol / IDAI / PAPDI',
    patientPresentation: 'Pasien mengeluh buang air besar cair frekuensi > 3 kali dalam 24 jam terakhir.',
    branches: [
      {
        condition: 'Diare Cair Tanpa Darah (Dehidrasi Ringan-Sedang: Haus, Mukosa Kering)',
        colorTag: 'emerald',
        recommendation: 'Rehidrasi Oralit Formula Baru + Tablet Zinc 20 mg 10-14 Hari + Probiotik',
        rationale: '90% disebabkan oleh rotavirus atau toksin non-invasif; PEMBERIAN ANTIBIOTIK TIDAK BERMANFAAT.'
      },
      {
        condition: 'Disentri (Tinja Bercampur Darah & Lendir, Disertai Demam & Nyeri Tenesmus)',
        colorTag: 'rose',
        recommendation: 'Berikan Antibiotik Sasaran Invasif (Kotrimoksazol / Azitromisin / Siprofloksasin)',
        rationale: 'Disebabkan oleh Shigella dysenteriae atau Campylobacter yang menginvasi mukosa usus; butuh antibiotik tepat.'
      },
      {
        condition: 'Diare Dehidrasi Berat (Mata Cekung Ekstrem, Turgor Sangat Lambat, Letargis/Syok)',
        colorTag: 'rose',
        recommendation: 'Resusitasi Cairan IV Ringer Laktat Darurat 100 mL/kgBB Terjadwal di IGD',
        rationale: 'Mencegah gagal sirkulasi hipovolemik dan gagal ginjal akut akibat kehilangan cairan masif.'
      }
    ],
    decisionTip: 'Obat antimotilitas (Loperamid) DILARANG KERAS pada diare disentri berdarah karena memicu retensi toksin toksik megakolon.'
  },
  {
    clinicalCondition: 'Nyeri Kepala: Diferensiasi Tension vs Migrain vs Red Flags',
    guidelineSource: 'PERDOSSI Konsensus Nasional Nyeri Kepala',
    patientPresentation: 'Pasien datang ke apotek/klinik mengeluhkan nyeri kepala berulang yang mengganggu aktivitas.',
    branches: [
      {
        condition: 'Tension-Type Headache (Rasa terikat kencang bilateral leher/tengkuk, Tanpa mual)',
        colorTag: 'emerald',
        recommendation: 'Parasetamol 1000 mg atau Ibuprofen 400 mg + Edukasi perbaikan postur & istirahat',
        rationale: 'Dipicu oleh kontraksi otot perikranial dan stres psikologis; respon sangat baik terhadap analgesik sederhana.'
      },
      {
        condition: 'Migrain Akut (Nyeri berdenyut unilateral, Fotofobia, Nausea/Muntah, ± Aura visual)',
        colorTag: 'amber',
        recommendation: 'Triptan (Sumatriptan 50 mg) atau NSAID Spesifik (Naproxen / Asam Mefenamat) saat onset',
        rationale: 'Vasodilatasi neurogenik pembuluh darah meningeal; triptan bekerja sebagai agonis selektif reseptor 5-HT1B/1D.'
      },
      {
        condition: 'Red Flags "SNOOP" (Nyeri kepala mendadak terberat seumur hidup / Thunderclap Headache)',
        colorTag: 'rose',
        recommendation: 'Rujuk IGD Segera untuk CT-Scan Kepala Mengeksklusi Perdarahan Subaraknoid (PSA)',
        rationale: 'Tanda bahaya ruptur aneurisma serebri atau massa lesi intrakranial yang butuh tindakan bedah saraf darurat.'
      }
    ],
    decisionTip: 'Penggunaan analgesik > 15 hari/bulan berisiko menimbulkan Medication Overuse Headache (MOH).'
  },
  {
    clinicalCondition: 'PPOK Eksaserbasi: Kriteria Anthonisen Menentukan Antibiotik',
    guidelineSource: 'GOLD 2024 / PDPI Pedoman Penanganan PPOK',
    patientPresentation: 'Pasien PPOK kronis mengeluhkan sesak napas yang memberat mendadak dalam 2 hari terakhir.',
    branches: [
      {
        condition: 'Anthonisen Tipe 1 (Sesak Napas Naik + Volume Sputum Naik + Sputum Menjadi Purulen)',
        colorTag: 'rose',
        recommendation: 'Wajib Antibiotik (Azitromisin 500 mg atau Amoksisilin-Klavulanat) + Steroid Oral 5 Hari',
        rationale: 'Tiga serangkai gejala membuktikan infeksi bakteri aktif (H. influenzae, S. pneumoniae, M. catarrhalis).'
      },
      {
        condition: 'Anthonisen Tipe 2 (Memenuhi 2 dari 3 Gejala, Termasuk Perubahan Warna Sputum)',
        colorTag: 'amber',
        recommendation: 'Berikan Antibiotik Sasaran + Nebulisasi Bronkodilator Kombinasi LABA/LAMA Ditingkatkan',
        rationale: 'Perubahan warna dahak menjadi keruh kehijauan adalah prediktor terbaik invasi mikroba patogen.'
      },
      {
        condition: 'Anthonisen Tipe 3 (Hanya 1 Gejala, Tanpa Perubahan Purulensi Warna Dahak)',
        colorTag: 'emerald',
        recommendation: 'HANYA Tingkatkan Dosis Inhaler Bronkodilator; TIDAK MEMERLUKAN ANTIBIOTIK',
        rationale: 'Pencegahan resistensi antibiotik; perburukan umumnya dipicu iritasi polusi udara atau cuaca dingin.'
      }
    ],
    decisionTip: 'Warna dahak purulen (kehijauan/kekuningan) adalah indikator klinis terpenting perlunya terapi antibiotik.'
  },
  {
    clinicalCondition: 'Penyakit Ginjal Kronik dengan Hiperkalemia: Kegawatan Elektrolit',
    guidelineSource: 'KDIGO 2024 / PERNEFRI',
    patientPresentation: 'Pasien gagal ginjal kronis stadium 4-5 dengan hasil kalium darah meningkat pada skrining lab rutin.',
    branches: [
      {
        condition: 'Hiperkalemia Ringan-Sedang (K+ 5.1 - 5.9 mEq/L, Gelombang EKG Masih Normal)',
        colorTag: 'amber',
        recommendation: 'Diet Rendah Kalium + Kalium Binder Oral (Natrium Polistiren Sulfonat) + Stop Obat Pemicu',
        rationale: 'Hentikan sementara ACEi/ARB, Spironolakton, dan hindari konsumsi buah tinggi kalium (pisang, alpukat, air kelapa).'
      },
      {
        condition: 'Hiperkalemia Berat / Darurat (K+ >= 6.0 mEq/L atau Tampak Peaked T Wave pada EKG)',
        colorTag: 'rose',
        recommendation: 'Kalsium Glukonat 10% 10 mL IV + Dextrose 40% 50 mL + Insulin Cepat 10 IU IV Cepat',
        rationale: 'Kalsium menstabilkan membran miokard mencegah VFib; insulin memasukkan ion kalium ke dalam sel dalam 15 menit.'
      },
      {
        condition: 'Hiperkalemia Refrakter dengan Asidosis Berat (K+ > 6.5 mEq/L & Overload Cairan)',
        colorTag: 'rose',
        recommendation: 'Hemodialisis Darurat (Cito Dialysis) Segera di Ruang HD',
        rationale: 'Metode eliminasi ion kalium tercepat dan paling definitif untuk menyelamatkan nyawa pasien.'
      }
    ],
    decisionTip: 'Kalsium Glukonat tidak menurunkan angka kalium darah, fungsinya adalah menstabilkan potensial aksi miokard.'
  },
  {
    clinicalCondition: 'Infeksi Saluran Kemih (ISK): Sistitis Akut vs Pielonefritis',
    guidelineSource: 'PAPDI / IDAI / Panduan Antimikroba Kemenkes',
    patientPresentation: 'Pasien mengeluh nyeri pedih saat buang air kecil (disuria) dan frekuensi kencing meningkat.',
    branches: [
      {
        condition: 'Sistitis Akut Tanpa Komplikasi (Nyeri Lokal Suprapubik, Tanpa Demam, Wanita Non-Hamil)',
        colorTag: 'emerald',
        recommendation: 'Fosfomisin Trometamol 3 g Sachet Dosis Tunggal atau Kotrimoksazol 960 mg 2x/hari 3 Hari',
        rationale: 'Infeksi terbatas di kandung kemih; terapi dosis singkat cukup efektif dengan kepatuhan maksimal.'
      },
      {
        condition: 'Pielonefritis Akut (Demam Menggigil Tinggi, Nyeri Ketok Sudut Kostovertebra/CVA (+))',
        colorTag: 'rose',
        recommendation: 'Siprofloksasin 500 mg 2x/hari 7 Hari (Rawat Jalan) atau Seftriakson 1-2 g/hari IV (Ranap)',
        rationale: 'Infeksi telah menginvasi parenkim ginjal; butuh antibiotik penetrasi jaringan tinggi untuk mencegah sepsis urogenital.'
      },
      {
        condition: 'ISK pada Kehamilan (Trimester 1, 2, atau 3)',
        colorTag: 'amber',
        recommendation: 'Amoksisilin-Klavulanat 625 mg 2x/hari atau Sefaleksin 500 mg 3x/hari selama 7 Hari',
        rationale: 'Fluorokuinolon dan Kotrimoksazol dikontraindikasikan pada kehamilan; ISK wajib diobati untuk cegah ketuban pecah dini.'
      }
    ],
    decisionTip: 'Hindari antibiotik Fluorokuinolon (Ciprofloxacin) sebagai lini pertama sistitis simpel jika masih ada alternatif aman.'
  },
  {
    clinicalCondition: 'Fibrilasi Atrium (AF): Penentuan Indikasi Antikoagulan Oral',
    guidelineSource: 'PERKI 2023 / ESC Guidelines for Atrial Fibrillation',
    patientPresentation: 'Pasien terkonfirmasi mengalami aritmia Fibrilasi Atrium non-valvular pada pemeriksaan EKG 12 lead.',
    branches: [
      {
        condition: 'Skor CHA2DS2-VASc >= 2 (Pria) atau >= 3 (Wanita)',
        colorTag: 'rose',
        recommendation: 'Wajib Antikoagulan Oral DOAC (Apixaban 5 mg 2x atau Rivaroxaban 20 mg 1x)',
        rationale: 'Risiko stroke kardioemboli tinggi (> 2.2% per tahun); DOAC menurunkan risiko stroke fatal hingga 70%.'
      },
      {
        condition: 'Skor CHA2DS2-VASc = 1 (Pria) atau = 2 (Wanita)',
        colorTag: 'amber',
        recommendation: 'Pertimbangkan DOAC Berdasarkan Evaluasi Risiko Perdarahan Individual (Skor HAS-BLED)',
        rationale: 'Manfaat klinis neto antikoagulan melampaui risiko perdarahan pada sebagian besar pasien.'
      },
      {
        condition: 'Skor CHA2DS2-VASc = 0 (Tanpa Faktor Risiko Kardiovaskular)',
        colorTag: 'emerald',
        recommendation: 'TIDAK MEMERLUKAN Terapi Antitrombotik (Antikoagulan & Antiplatelet Tidak Dianjurkan)',
        rationale: 'Risiko stroke sangat rendah (< 0.2%/tahun); pemberian obat pengencer darah justru meningkatkan risiko perdarahan.'
      }
    ],
    decisionTip: 'DOAC (Apixaban/Rivaroxaban/Dabigatran) lebih unggul dibanding Warfarin karena tidak butuh cek INR rutin.'
  }
];

// ============================================================================
// 22. GUIDELINE PILLARS / GOLDEN REGIMENS PRESETS (10 KASUS)
// ============================================================================
export interface PillarDrug {
  pillarNumber: number;
  drugClass: string;
  exampleDrug: string;
  roleBenefit: string;
}

export interface GuidelinePillarsPreset {
  regimenTitle: string;
  diseaseTarget: string;
  guidelineSource: string;
  mortalityBenefit: string;
  pillars: PillarDrug[];
  clinicalWarning: string;
}

export const GUIDELINE_PILLARS_PRESETS: GuidelinePillarsPreset[] = [
  {
    regimenTitle: 'The Fantastic Four: 4 Pilar Terapi Baku Emas',
    diseaseTarget: 'Gagal Jantung Fraksi Ejeksi Menurun (HFrEF)',
    guidelineSource: 'PERKI 2023 / ESC Heart Failure Guidelines',
    mortalityBenefit: 'Menurunkan angka kematian kardiovaskular & re-hospitalisasi hingga > 60%!',
    pillars: [
      {
        pillarNumber: 1,
        drugClass: 'ARNI (Angiotensin Receptor-Neprilysin Inhibitor)',
        exampleDrug: 'Sacubitril/Valsartan 24/26 mg s/d 97/103 mg 2x/hari',
        roleBenefit: 'Modulator neurohormonal ganda memicu reverse remodeling ventrikel kiri.'
      },
      {
        pillarNumber: 2,
        drugClass: 'Beta-Blocker Kardioselektif Berbasis Bukti',
        exampleDrug: 'Bisoprolol 1.25 mg s/d 10 mg 1x/hari (atau Carvedilol)',
        roleBenefit: 'Menurunkan konsumsi oksigen miokard & mencegah sudden cardiac death.'
      },
      {
        pillarNumber: 3,
        drugClass: 'MRA (Mineralocorticoid Receptor Antagonist)',
        exampleDrug: 'Spironolactone 25 mg s/d 50 mg 1x/hari',
        roleBenefit: 'Menghambat fibrosis miokardial & retensi natrium yang dipicu aldosteron.'
      },
      {
        pillarNumber: 4,
        drugClass: 'SGLT2-Inhibitor Kardio-Protektif',
        exampleDrug: 'Dapagliflozin 10 mg atau Empagliflozin 10 mg 1x/hari',
        roleBenefit: 'Memperbaiki bioenergetika miokardial & proteksi progresivitas gagal ginjal.'
      }
    ],
    clinicalWarning: 'Keempat pilar wajib diinisiasi secepat mungkin; pantau berkala serum Kreatinin dan Kalium darah.'
  },
  {
    regimenTitle: 'Triple Inhaled Therapy: Tiga Kombinasi Inhaler',
    diseaseTarget: 'Asma Berat Refrakter & PPOK Group E',
    guidelineSource: 'GINA 2024 / GOLD 2024 Guidelines',
    mortalityBenefit: 'Menurunkan angka eksaserbasi tahunan & memperbaiki fungsi paru FEV1 hingga 40%!',
    pillars: [
      {
        pillarNumber: 1,
        drugClass: 'ICS (Inhaled Corticosteroid)',
        exampleDrug: 'Fluticasone Furoate / Budesonide Dosis Sedang-Tinggi',
        roleBenefit: 'Menekan kaskade inflamasi eosinofilik kronis pada mukosa bronkial.'
      },
      {
        pillarNumber: 2,
        drugClass: 'LABA (Long-Acting Beta2-Agonist)',
        exampleDrug: 'Formoterol / Vilanterol / Salmeterol',
        roleBenefit: 'Bronkodilatasi jalan napas kerja panjang melalui stimulasi reseptor beta-2 adrenergik.'
      },
      {
        pillarNumber: 3,
        drugClass: 'LAMA (Long-Acting Muscarinic Antagonist)',
        exampleDrug: 'Tiotropium Respimat 5 mcg 1x/hari (atau Umeclidinium)',
        roleBenefit: 'Relaksasi tonus bronkial kolinergik vagal & penurunan produksi lendir mukus.'
      },
      {
        pillarNumber: 4,
        drugClass: 'Edukasi Teknik Inhalasi & Gargling Rutin',
        exampleDrug: 'Prosedur Kumur Air Putih Pasca Hisap Steroid',
        roleBenefit: 'Mencegah infeksi jamur kandidiasis oral, suara serak, dan memastikan deposit obat di paru.'
      }
    ],
    clinicalWarning: 'Pastikan teknik hisap inhaler dievaluasi sebelum memutuskan eskalasi dosis obat.'
  },
  {
    regimenTitle: 'Protokol DAPT & Proteksi Vaskular Komprehensif',
    diseaseTarget: 'Pasca Sindrom Koroner Akut (SKA) & Pasang Stent PCI',
    guidelineSource: 'PERKI 2023 / ESC Guidelines',
    mortalityBenefit: 'Mencegah trombosis stent akut dan infark miokard berulang hingga > 50%!',
    pillars: [
      {
        pillarNumber: 1,
        drugClass: 'Aspirin (Antiplatelet Siklooksigenase-1)',
        exampleDrug: 'Aspirin Dosis Pemeliharaan 80 - 100 mg 1x/hari sesudah makan',
        roleBenefit: 'Penghambatan permanen sintesis Tromboksan A2 trombosit seumur hidup sel.'
      },
      {
        pillarNumber: 2,
        drugClass: 'Penghambat Reseptor P2Y12 Poten',
        exampleDrug: 'Ticagrelor 90 mg 2x/hari atau Klopidogrel 75 mg 1x/hari',
        roleBenefit: 'Inhibisi agregasi trombosit yang diinduksi ADP pada permukaan stent koroner.'
      },
      {
        pillarNumber: 3,
        drugClass: 'High-Intensity Statin (Stabilisasi Plak)',
        exampleDrug: 'Atorvastatin 80 mg atau Rosuvastatin 20-40 mg 1x/hari malam',
        roleBenefit: 'Target LDL < 55 mg/dL & stabilisasi lapisan penutup plak ateroma yang rapuh.'
      },
      {
        pillarNumber: 4,
        drugClass: 'PPI Gastroprotektor (Pencegah Ulkus Lambung)',
        exampleDrug: 'Pantoprazole 40 mg 1x/hari sebelum sarapan pagi',
        roleBenefit: 'Mencegah komplikasi perdarahan saluran cerna akibat terapi kombinasi antiplatelet ganda.'
      }
    ],
    clinicalWarning: 'DAPT wajib diminum disiplin selama 12 bulan penuh tanpa terlewat sehari pun.'
  },
  {
    regimenTitle: 'Regimen 4-FDC Tuberkulosis Paru Sensitif Obat',
    diseaseTarget: 'TB Paru Dewasa Kasus Baru Kategori 1 (2RHZE)',
    guidelineSource: 'PNPK TB Kemenkes RI / WHO Guidelines',
    mortalityBenefit: 'Mencapai angka kesembuhan pengobatan tuntas > 90% bila kepatuhan penuh!',
    pillars: [
      {
        pillarNumber: 1,
        drugClass: 'Rifampisin (R) - Bakterisid Utama',
        exampleDrug: 'Rifampisin 150 mg per tablet FDC harian',
        roleBenefit: 'Menghambat enzim RNA-polimerase bakteri, mematikan populasi kuman TB aktif.'
      },
      {
        pillarNumber: 2,
        drugClass: 'Isoniazid (H) - Pembunuh Kuman Aktif Cepat',
        exampleDrug: 'Isoniazid 75 mg per tablet FDC harian',
        roleBenefit: 'Menghambat sintesis asam mikolat dinding sel kuman TB dengan bakterisid kuat.'
      },
      {
        pillarNumber: 3,
        drugClass: 'Pirazinamid (Z) - Sterilisasi Lingkungan Asam',
        exampleDrug: 'Pirazinamid 400 mg per tablet FDC harian',
        roleBenefit: 'Bekerja spesifik mematikan kuman TB semi-dorman di lingkungan asam makrofag intraseluler.'
      },
      {
        pillarNumber: 4,
        drugClass: 'Etambutol (E) - Pencegah Resistensi Obat',
        exampleDrug: 'Etambutol 275 mg per tablet FDC harian',
        roleBenefit: 'Menghambat biosintesis arabinogalaktan & mencegah seleksi mutasi resistensi kuman.'
      }
    ],
    clinicalWarning: 'Periksa tes fungsi hati (SGOT/SGPT) berkala; waspadai gangguan ketajaman penglihatan (neuritis optik).'
  },
  {
    regimenTitle: 'Pencegahan Sekunder Stroke Iskemik Aterotrombotik',
    diseaseTarget: 'Pasca Stroke Iskemik & TIA Risiko Tinggi',
    guidelineSource: 'PERDOSSI / AHA-ASA Stroke Guidelines',
    mortalityBenefit: 'Menurunkan risiko stroke berulang dan kecacatan permanen hingga > 45%!',
    pillars: [
      {
        pillarNumber: 1,
        drugClass: 'Antiplatelet Sekunder Mandiri',
        exampleDrug: 'Klopidogrel 75 mg 1x/hari (atau Aspirin 100 mg 1x/hari)',
        roleBenefit: 'Mencegah re-tromboemboli arterial pada pembuluh darah serebral mayor.'
      },
      {
        pillarNumber: 2,
        drugClass: 'Statin Dosis Tinggi Target LDL Agresif',
        exampleDrug: 'Atorvastatin 40 - 80 mg 1x/hari malam (Target LDL < 70 mg/dL)',
        roleBenefit: 'Regresi plak stenosis arteri karotis & penurunan inflamasi endotel intrakranial.'
      },
      {
        pillarNumber: 3,
        drugClass: 'Kontrol Tekanan Darah Terstandar',
        exampleDrug: 'ARB (Candesartan 8-16 mg) + CCB (Amlodipine 5-10 mg)',
        roleBenefit: 'Target tensi stabil < 130/80 mmHg menurunkan beban hemodinamik mikrovaskular otak.'
      },
      {
        pillarNumber: 4,
        drugClass: 'Modifikasi Gaya Hidup & Neuro-Rehabilitasi',
        exampleDrug: 'Fisioterapi Terpadu, Stop Merokok, Diet Rendah Garam',
        roleBenefit: 'Merangsang neuroplastisitas otak dan pemulihan kemandirian motorik pasien.'
      }
    ],
    clinicalWarning: 'DAPT ganda hanya aman untuk 21 hari pertama; setelah itu de-eskalasi ke monoterapi antiplatelet.'
  },
  {
    regimenTitle: 'Manajemen Komprehensif Ulkus Kaki Diabetik',
    diseaseTarget: 'Diabetic Foot Ulcer (DFU) Derajat Wagner 2-3',
    guidelineSource: 'PERKENI 2024 / IWGDF Guidelines',
    mortalityBenefit: 'Mencegah tindakan amputasi ekstremitas bawah pada > 75% kasus ulkus kaki diabetik!',
    pillars: [
      {
        pillarNumber: 1,
        drugClass: 'Kontrol Glikemik Intensif Insulin Basal-Bolus',
        exampleDrug: 'Insulin Reguler / Analog Cepat + Insulin Basal Glargine',
        roleBenefit: 'Target GDP 80-130 mg/dL mempercepat migrasi fibroblas dan proses granulasi luka.'
      },
      {
        pillarNumber: 2,
        drugClass: 'Debridemen Bedah & Balutan Luka Modern',
        exampleDrug: 'Moist Wound Dressing (Hydrocolloid / Alginate / Foam)',
        roleBenefit: 'Menghilangkan jaringan nekrotik, mengontrol eksudat, dan mempertahankan kelembapan luka.'
      },
      {
        pillarNumber: 3,
        drugClass: 'Antibiotik Empiris Terarah Berdasarkan Kultur',
        exampleDrug: 'Siprofloksasin / Seftriakson + Metronidazol (Anti-Anaerobik)',
        roleBenefit: 'Eradikasi infeksi polimikrobial jaringan lunak dan pencegahan komplikasi osteomielitis.'
      },
      {
        pillarNumber: 4,
        drugClass: 'Offloading Beban Fisik Telapak Kaki',
        exampleDrug: 'Penggunaan Sepatu Khusus Diabetik / Kursi Roda / Cast',
        roleBenefit: 'Menghilangkan tekanan mekanik tumpuan pada dasar ulkus agar tepi luka dapat menutup rapat.'
      }
    ],
    clinicalWarning: 'Hindari merendam kaki dengan air hangat karena neuropati perifer memicu luka bakar tanpa disadari.'
  },
  {
    regimenTitle: 'Protokol Tatalaksana Syok Anafilaksis Gawat Darurat',
    diseaseTarget: 'Reaksi Anafilaksis Akut Derajat Berat / Mengancam Jiwa',
    guidelineSource: 'Kemenkes RI / WAO Anaphylaxis Guidelines',
    mortalityBenefit: 'Pemberian Epinefrin IM cepat menurunkan risiko kematian hingga > 90%!',
    pillars: [
      {
        pillarNumber: 1,
        drugClass: 'Epinefrin / Adrenalin 1:1000 (Lini Pertama Mutlak)',
        exampleDrug: '0.3 - 0.5 mg Intramuskular (IM) di Paha Anterolateral Segera!',
        roleBenefit: 'Vasokonstriksi perifer menaikkan tensi, bronkodilatasi jalan napas, dan menekan pelepasan mediator sel mast.'
      },
      {
        pillarNumber: 2,
        drugClass: 'Oksigen Aliran Tinggi (High-Flow Oxygen)',
        exampleDrug: '10 - 15 Liter/menit via Non-Rebreathing Mask (NRM)',
        roleBenefit: 'Mengatasi hipoksia jaringan akibat bronkospasme berat dan edema laring akut.'
      },
      {
        pillarNumber: 3,
        drugClass: 'Resusitasi Cairan Kristaloid Cepat',
        exampleDrug: 'Ringer Laktat / NaCl 0.9% 1 - 2 Liter IV Guyur Cepat',
        roleBenefit: 'Mengatasi syok distributif akibat ekstravasasi cairan intravaskular masif ke interstitial.'
      },
      {
        pillarNumber: 4,
        drugClass: 'Terapi Lini Kedua Adjuvan (Pencegah Reaksi Bifasik)',
        exampleDrug: 'Difenhidramin 50 mg IV + Metilprednisolon 125 mg IV',
        roleBenefit: 'Menghambat efek histamin H1 kutaneus dan mencegah kekambuhan anafilaksis fase kedua 6-12 jam kemudian.'
      }
    ],
    clinicalWarning: 'DILARANG KERAS menyuntikkan Epinefrin 1:1000 secara intravena langsung karena risiko fibrilasi ventrikel letal!'
  },
  {
    regimenTitle: 'Pilar Tatalaksana Sirosis Hepatis & Asites Masif',
    diseaseTarget: 'Sirosis Hepatis Dekompensata Child-Pugh B/C',
    guidelineSource: 'PGI-PEGI / AASLD Liver Guidelines',
    mortalityBenefit: 'Mengontrol asites refrakter dan mencegah komplikasi Sindrom Hepatorenal fatal!',
    pillars: [
      {
        pillarNumber: 1,
        drugClass: 'Restriksi Natrium Diet Terstandar',
        exampleDrug: 'Asupan Garam < 2 gram natrium (< 5 gram garam dapur) per hari',
        roleBenefit: 'Mencegah retensi cairan bebas tanpa memicu penurunan nafsu makan yang memperburuk malnutrisi.'
      },
      {
        pillarNumber: 2,
        drugClass: 'Kombinasi Diuretik Sinergis Rasio 100:40',
        exampleDrug: 'Spironolakton 100 mg + Furosemid 40 mg PO pagi hari',
        roleBenefit: 'Memblokade hiperaldosteronisme sekunder sekaligus mempertahankan stabilitas kadar kalium serum.'
      },
      {
        pillarNumber: 3,
        drugClass: 'Parasentesis Volume Besar & Infus Albumin',
        exampleDrug: 'Parasentesis > 5 Liter + Infus Albumin 20% (8 g per Liter cairan teraspirasi)',
        roleBenefit: 'Dekompresi tekanan rongga abdomen sambil mencegah disfungsi sirkulasi pasca parasentesis (PICD).'
      },
      {
        pillarNumber: 4,
        drugClass: 'Profilaksis Peritonitis Bakterial Spontan (SBP)',
        exampleDrug: 'Siprofloksasin 500 mg 1x/hari pada protein asites < 1.5 g/dL',
        roleBenefit: 'Mencegah translokasi bakteri flora usus ke cairan asites rongga peritoneum.'
      }
    ],
    clinicalWarning: 'Hentikan diuretik segera jika kadar Natrium serum < 125 mEq/L atau terjadi ensefalopati hepatikum berat.'
  },
  {
    regimenTitle: 'Triple Terapi Eradikasi Helicobacter pylori',
    diseaseTarget: 'Ulkus Peptikum Gaster / Duodenum Terinfeksi H. pylori',
    guidelineSource: 'PGI-PEGI 2023 / Maastricht VI Consensus',
    mortalityBenefit: 'Menyembuhkan ulkus peptikum kronis dan menurunkan risiko kanker lambung hingga > 80%!',
    pillars: [
      {
        pillarNumber: 1,
        drugClass: 'PPI Dosis Ganda (Supresi Asam Lambung Kuat)',
        exampleDrug: 'Esomeprazole 40 mg 2x/hari (atau Omeprazole 20 mg 2x) ac',
        roleBenefit: 'Meningkatkan pH intragastrik > 6 agar antibiotik stabil dan kuman H. pylori aktif membelah.'
      },
      {
        pillarNumber: 2,
        drugClass: 'Amoksisilin Dosis Tinggi (Bakterisid Dinding Sel)',
        exampleDrug: 'Amoksisilin 1000 mg PO 2 kali sehari bersama makan',
        roleBenefit: 'Resistensi H. pylori terhadap amoksisilin sangat rendah (< 2%), kunci keberhasilan eradikasi.'
      },
      {
        pillarNumber: 3,
        drugClass: 'Klaritromisin (Makrolida Penghambat Sintesis Protein)',
        exampleDrug: 'Klaritromisin 500 mg PO 2 kali sehari bersama makan',
        roleBenefit: 'Penetrasi mukosa lambung tinggi untuk mengeliminasi koloni bakteri H. pylori.'
      },
      {
        pillarNumber: 4,
        drugClass: 'Kepatuhan Tuntas 14 Hari & Konfirmasi Sembuh',
        exampleDrug: 'Terapi Tuntas 14 Hari Penuh + Evaluasi Uji UBT / Stool Antigen',
        roleBenefit: 'Uji konfirmasi penyembuhan wajib dilakukan minimal 4 minggu pasca antibiotik selesai dikonsumsi.'
      }
    ],
    clinicalWarning: 'Jika resistensi klaritromisin lokal tinggi (>15%), ganti ke Quadruple Therapy berbasis Bismuth.'
  },
  {
    regimenTitle: 'Surviving Sepsis: The 1-Hour Sepsis Bundle',
    diseaseTarget: 'Sepsis & Syok Septik Gawat Darurat',
    guidelineSource: 'Surviving Sepsis Campaign 2024 / Kemenkes',
    mortalityBenefit: 'Penyelesaian bundle 1 jam pertama menurunkan mortalitas syok septik secara signifikan!',
    pillars: [
      {
        pillarNumber: 1,
        drugClass: 'Pemeriksaan Kadar Laktat Darah Segera',
        exampleDrug: 'Ukur Laktat Serum Awal (Ulang dalam 2-4 jam jika > 2 mmol/L)',
        roleBenefit: 'Biomarker hipoperfusi jaringan dan metabolisme anaerobik seluler.'
      },
      {
        pillarNumber: 2,
        drugClass: 'Kultur Darah Sebelum Terapi Antimikroba',
        exampleDrug: '2 Set Kultur Darah Vena Perifer (Aerobik & Anaerobik)',
        roleBenefit: 'Identifikasi patogen kausatif tanpa menunda pemberian antibiotik lebih dari 45 menit.'
      },
      {
        pillarNumber: 3,
        drugClass: 'Antibiotik Spektrum Luas Intravena',
        exampleDrug: 'Seftriakson 2 g IV / Meropenem 1 g IV dalam 1 Jam Pertama',
        roleBenefit: 'Setiap keterlambatan 1 jam antibiotik meningkatkan angka kematian syok septik hingga 7.6%!'
      },
      {
        pillarNumber: 4,
        drugClass: 'Resusitasi Cairan Kristaloid 30 mL/kgBB',
        exampleDrug: 'Ringer Laktat 30 mL/kgBB IV Cepat dalam 3 Jam Pertama',
        roleBenefit: 'Target Mean Arterial Pressure (MAP) >= 65 mmHg; berikan vasopresor Norepinefrin bila hipotensi persisten.'
      }
    ],
    clinicalWarning: 'Mulai vasopresor Norepinefrin tanpa menunda jika MAP tetap < 65 mmHg selama resusitasi cairan berjalan.'
  }
];

// ============================================================================
// 23. CLINICAL PATHWAY PRESETS (8 KASUS)
// ============================================================================
export interface PathwayDayPhase {
  dayLabel: string;
  clinicalFocus: string;
  medications: string;
  monitoringTarget: string;
}

export interface ClinicalPathwayPreset {
  pathwayTitle: string;
  losTarget: string;
  standardICD: string;
  admissionCriteria: string;
  phases: PathwayDayPhase[];
  dischargeReadiness: string;
}

export const CLINICAL_PATHWAY_PRESETS: ClinicalPathwayPreset[] = [
  {
    pathwayTitle: 'Clinical Pathway: Infark Miokard Akut (STEMI)',
    losTarget: 'Target Length of Stay: 4 Hari',
    standardICD: 'ICD-10: I21.0 - I21.3',
    admissionCriteria: 'Nyeri dada tipikal infark > 20 menit + Elevasi segmen ST pada EKG + Biomarker Troponin positif.',
    phases: [
      {
        dayLabel: 'Hari 1 (ICCU)',
        clinicalFocus: 'Fase Reperfusi Koroner Akut & Stabilisasi Aritmia',
        medications: 'Primary PCI / Fibrinolisis, DAPT Loading (Aspirin 320 mg + Ticagrelor 180 mg), Atorvastatin 80 mg, Heparinisasi IV',
        monitoringTarget: 'Resolusi elevasi ST > 50%, bebas nyeri dada iskemik, pemantauan ritme EKG kontinyu'
      },
      {
        dayLabel: 'Hari 2 (ICCU)',
        clinicalFocus: 'Inisiasi Pencegahan Remodeling Ventrikel & Mobilisasi Dini',
        medications: 'Inisiasi Bisoprolol 1.25-2.5 mg + Ramipril 2.5 mg PO, Furosemid IV bila ada tanda kongesti paru',
        monitoringTarget: 'Hemodinamik stabil (TD sistolik >= 100 mmHg, HR 60-70 bpm), mobilisasi miring kanan-kiri'
      },
      {
        dayLabel: 'Hari 3 (Rawat Inap)',
        clinicalFocus: 'Titrasi Obat Kardioprotektif & Edukasi Gaya Hidup',
        medications: 'DAPT rutin (Aspirin 100 mg 1x + Ticagrelor 90 mg 2x) + Atorvastatin 80 mg + Bisoprolol dititrasi naik',
        monitoringTarget: 'Mobilisasi jalan mandiri di sekitar ruangan rawat, skrining kepatuhan minum obat'
      },
      {
        dayLabel: 'Hari 4 (Discharge)',
        clinicalFocus: 'Kesiapan Pemulangan & Edukasi Farmasi Pulang',
        medications: 'Resep pulang 5 pilar (DAPT 12 bulan + Statin dosis tinggi + Beta Blocker + ACEi + ISDN SL prn)',
        monitoringTarget: 'Bebas keluhan angina, ekokardiografi terjadwal, kontrol poliklinik jantung hari ke-7'
      }
    ],
    dischargeReadiness: 'Hemodinamik stabil, tanpa tanda gagal jantung dekompensasi, keluarga memahami aturan DAPT 12 bulan tanpa jeda.'
  },
  {
    pathwayTitle: 'Clinical Pathway: Pneumonia Komunitas (CAP) Sedang',
    losTarget: 'Target Length of Stay: 5 Hari',
    standardICD: 'ICD-10: J18.9',
    admissionCriteria: 'Demam akut, batuk produktif purulen, ronki basah basilar, rontgen toraks infiltrat baru, skor CURB-65 = 2.',
    phases: [
      {
        dayLabel: 'Hari 1-2 (Rawat Inap)',
        clinicalFocus: 'Terapi Antimikroba Empiris & Terapi Oksigen Suportif',
        medications: 'Oksigen kanul 2-4 L/m, Seftriakson 2 g IV tiap 24 jam + Azitromisin 500 mg IV tiap 24 jam, Parasetamol 1 g IV prn',
        monitoringTarget: 'SpO2 >= 94%, frekuensi napas < 24x/menit, kultur dahak dan resistensi antibiotik dikirim'
      },
      {
        dayLabel: 'Hari 3 (Rawat Inap)',
        clinicalFocus: 'Evaluasi Respons Klinis & Rencana Switch Terapi',
        medications: 'Evaluasi respons klinis 48-72 jam; bila afebris dan toleransi oral baik, rencanakan switch antibiotik oral',
        monitoringTarget: 'Suhu tubuh turun < 37.8°C, leukosit darah membaik, nafsu makan pasien pulih'
      },
      {
        dayLabel: 'Hari 4 (Rawat Inap)',
        clinicalFocus: 'Transisi Terapi Oral (Switching) & Mobilisasi Bebas',
        medications: 'Switch ke Sefiksim 200 mg 2x/hari PO + Azitromisin 500 mg 1x/hari PO, hentikan terapi oksigen',
        monitoringTarget: 'Pasien bernapas spontan nyaman pada udara kamar, batuk berkurang dan dahak mudah keluar'
      },
      {
        dayLabel: 'Hari 5 (Discharge)',
        clinicalFocus: 'Pemulangan Pasien & Penyelesaian Durasi Antibiotik',
        medications: 'Resep pulang antibiotik oral untuk menuntaskan total durasi pengobatan 7 hari penuh',
        monitoringTarget: 'Klinis stabil afebris > 24 jam tanpa antipiretik, edukasi vaksinasi pneumonia & influenza'
      }
    ],
    dischargeReadiness: 'Tanda vital stabil, makan minum per oral baik, keluarga memahami pentingnya menuntaskan antibiotik oral.'
  },
  {
    pathwayTitle: 'Clinical Pathway: Stroke Iskemik Akut Tanpa Komplikasi',
    losTarget: 'Target Length of Stay: 5 Hari',
    standardICD: 'ICD-10: I63.9',
    admissionCriteria: 'Defisit neurologis fokal mendadak (kelemahan sesisi/pelo), CT-Scan kepala mengeksklusi perdarahan intrakranial.',
    phases: [
      {
        dayLabel: 'Hari 1 (Stroke Unit)',
        clinicalFocus: 'Evaluasi Terapi Reperfusi & Skrining Disfagia',
        medications: 'Alteplase rtPA (bila onset < 4.5 jam) atau DAPT (Aspirin 100 mg + Klopidogrel 75 mg), kontrol TD jangan terlalu rendah',
        monitoringTarget: 'Skor NIHSS berkala, tes menelan air 30 mL sebelum makan/minum, hindari infus hipotonik'
      },
      {
        dayLabel: 'Hari 2 (Stroke Unit)',
        clinicalFocus: 'Statin Dosis Tinggi & Mobilisasi Pasif di Ranjang',
        medications: 'Atorvastatin 40-80 mg PO malam, DAPT dilanjutkan, fisioterapi pasif alih baring tiap 2 jam',
        monitoringTarget: 'Pencegahan luka tekan dekubitus, kontrol gula darah target 140-180 mg/dL, evaluasi EKG holter (AF)'
      },
      {
        dayLabel: 'Hari 3-4 (Rawat Inap)',
        clinicalFocus: 'Fisioterapi Aktif & Pengendalian Faktor Risiko',
        medications: 'DAPT hari ke 3-4, evaluasi obat antihipertensi bertahap bila tensi > 140/90 mmHg pasca fase akut',
        monitoringTarget: 'Mobilisasi duduk dan berdiri dengan bantuan terapis, edukasi pengenalan tanda stroke FAST'
      },
      {
        dayLabel: 'Hari 5 (Discharge)',
        clinicalFocus: 'Pemulangan Pasien & Program Neuro-Rehabilitasi',
        medications: 'Resep pulang DAPT tuntas hari ke-21 lalu lanjut monoterapi + Statin intensitas tinggi + Antihipertensi',
        monitoringTarget: 'Defisit neurologis stabil/membaik, jadwal kontrol poli saraf & fisioterapi terpadu'
      }
    ],
    dischargeReadiness: 'Status neurologis stabil tanpa perburukan, keluarga terlatih merawat mobilisasi pasien, rencana fisioterapi jelas.'
  },
  {
    pathwayTitle: 'Clinical Pathway: Ketoasidosis Diabetik (KAD)',
    losTarget: 'Target Length of Stay: 3 Hari',
    standardICD: 'ICD-10: E11.1',
    admissionCriteria: 'Gula darah sewaktu > 250 mg/dL + Ketonemia/ketonuria positif + Asidosis metabolik (pH < 7.30, HCO3 < 18).',
    phases: [
      {
        dayLabel: 'Hari 1 (ICU / HDU)',
        clinicalFocus: 'Resusitasi Cairan Cepat, Koreksi Kalium & Drip Insulin',
        medications: 'NaCl 0.9% 1000 mL/jam pertama, Drip Insulin Reguler 0.1 U/kg/jam IV, KCl 20-30 mEq per labu jika K < 5.2 mEq/L',
        monitoringTarget: 'Penurunan gula darah 50-75 mg/dL per jam, monitor ketat elektrolit dan kalium tiap 2-4 jam'
      },
      {
        dayLabel: 'Hari 2 (Rawat Inap)',
        clinicalFocus: 'Resolusi KAD & Transisi Insulin Drip ke Subkutan',
        medications: 'Bila pH > 7.30 dan HCO3 >= 18: Mulai Insulin Basal Subkutan 2 jam SEBELUM drip insulin IV dimatikan',
        monitoringTarget: 'Anion gap normal <= 12, pasien mulai toleransi makan makanan lunak per oral'
      },
      {
        dayLabel: 'Hari 3 (Discharge)',
        clinicalFocus: 'Edukasi Kepatuhan Insulin Mandiri & Pemulangan',
        medications: 'Regimen Insulin Basal-Bolus Mandiri (Insulin Glargine malam + Insulin Aspart 3x sebelum makan)',
        monitoringTarget: 'Gula darah stabil 140-180 mg/dL, edukasi teknik penyuntikan insulin pen & tanda hipoglikemia'
      }
    ],
    dischargeReadiness: 'Resolusi asidosis sempurna, toleransi makan oral penuh, pasien dan keluarga mahir mandiri menyuntikkan insulin.'
  },
  {
    pathwayTitle: 'Clinical Pathway: Eksaserbasi Akut Asma Bronkial Berat',
    losTarget: 'Target Length of Stay: 3 Hari',
    standardICD: 'ICD-10: J45.9',
    admissionCriteria: 'Sesak napas berat tidak teratasi dengan pelega di rumah, mengi difus, retraksi dinding dada, SpO2 < 92%.',
    phases: [
      {
        dayLabel: 'Hari 1 (Rawat Inap)',
        clinicalFocus: 'Bronkodilatasi Intensif & Kortikosteroid Sistemik',
        medications: 'Oksigen target SpO2 93-95%, Nebulisasi Salbutamol + Ipratropium tiap 4-6 jam, Metilprednisolon 62.5 mg IV tiap 12 jam',
        monitoringTarget: 'Frekuensi napas menurun < 24x/m, wheezing berkurang, tidak ada kelelahan otot napas'
      },
      {
        dayLabel: 'Hari 2 (Rawat Inap)',
        clinicalFocus: 'Penurunan Frekuensi Nebulisasi & Transisi Oral',
        medications: 'Nebulisasi diturunkan ke tiap 8 jam, switch Metilprednisolon ke tablet oral 32 mg/hari, mulai inhaler MART',
        monitoringTarget: 'Nilai arus puncak ekspirasi (APE) meningkat > 70% dari nilai prediksi, tidur malam nyenyak'
      },
      {
        dayLabel: 'Hari 3 (Discharge)',
        clinicalFocus: 'Edukasi Inhaler Pemeliharaan & Kesiapan Pulang',
        medications: 'Resep inhaler pemeliharaan (Budesonide-Formoterol) + Tuntaskan steroid oral sisa 3 hari',
        monitoringTarget: 'Bebas sesak saat berjalan di ruangan, teknik hisap inhaler terverifikasi benar oleh apoteker'
      }
    ],
    dischargeReadiness: 'Gejala sesak napas teratasi, tidak membutuhkan nebulisasi berkala, apoteker memverifikasi teknik hisap inhaler pasien.'
  },
  {
    pathwayTitle: 'Clinical Pathway: Gagal Jantung Dekompensasi Akut (ADHF)',
    losTarget: 'Target Length of Stay: 5 Hari',
    standardICD: 'ICD-10: I50.9',
    admissionCriteria: 'Sesak saat berbaring (ortopnea), ronki basah basilar paru, edema tungkai bilateral, peningkatan tekanan vena jugularis.',
    phases: [
      {
        dayLabel: 'Hari 1-2 (Rawat Inap)',
        clinicalFocus: 'Dekongesti Cairan Cepat dengan Diuretik Loop IV',
        medications: 'Furosemide Bolus IV 40-80 mg dilanjutkan infus kontinyu, restriksi cairan < 1.5 L/hari & restriksi garam natrium',
        monitoringTarget: 'Diuresis urine > 2 Liter/24 jam, penurunan berat badan harian, monitor elektrolit kalium & kreatinin'
      },
      {
        dayLabel: 'Hari 3 (Rawat Inap)',
        clinicalFocus: 'Pencapaian Status Euvolemik & Inisiasi 4 Pilar',
        medications: 'Switch Furosemide IV ke oral, mulai inisiasi bertahap 4 Pilar Baku Emas (ARNI / Beta Blocker / MRA / SGLT2-i)',
        monitoringTarget: 'Ronki paru menghilang, edema ekstremitas resolusi, tekanan darah sistolik stabil >= 100 mmHg'
      },
      {
        dayLabel: 'Hari 4 (Rawat Inap)',
        clinicalFocus: 'Titrasi Dosis Pilar Terapi & Mobilisasi Bertahap',
        medications: 'Optimasi dosis Sacubitril/Valsartan + Bisoprolol dosis rendah + Spironolakton 25 mg + Dapagliflozin 10 mg',
        monitoringTarget: 'Toleransi hemodinamik baik tanpa pusing ortostatik, edukasi timbang berat badan harian'
      },
      {
        dayLabel: 'Hari 5 (Discharge)',
        clinicalFocus: 'Pemulangan Pasien & Rencana Kontrol Poliklinik',
        medications: 'Resep pulang 4 pilar lengkap + Furosemid oral dosis terendah efektif, jadwal kontrol poli hari ke-7',
        monitoringTarget: 'Berat badan kering stabil, memahami aturan pembatasan cairan dan tanda bahaya sesak'
      }
    ],
    dischargeReadiness: 'Pasien mencapai kondisi euvolemik klinis (kering), berat badan stabil, memahami tanda peringatan kenaikan berat badan.'
  },
  {
    pathwayTitle: 'Clinical Pathway: Demam Berdarah Dengue dengan Warning Signs',
    losTarget: 'Target Length of Stay: 4 Hari',
    standardICD: 'ICD-10: A91',
    admissionCriteria: 'Demam akut hari ke 3-5 + Tanda bahaya (nyeri perut hebat, muntah persisten, letargi, hematokrit melonjak > 20%).',
    phases: [
      {
        dayLabel: 'Hari 1-2 (Fase Kritis)',
        clinicalFocus: 'Resusitasi Cairan Terjadwal & Monitor Kebocoran Plasma',
        medications: 'Infus Ringer Laktat 5 - 7 mL/kg/jam dititrasi turun bertahap sesuai respons hemodinamik dan kurva hematokrit',
        monitoringTarget: 'Pemeriksaan Darah Lengkap (Ht dan Trombosit) tiap 6-12 jam, produksi urine minimal 0.5 mL/kg/jam'
      },
      {
        dayLabel: 'Hari 3 (Fase Transisi)',
        clinicalFocus: 'De-eskalasi Kecepatan Cairan Mencegah Overload',
        medications: 'Penurunan kecepatan infus kristaloid ke 3 lalu 1.5 mL/kg/jam seiring stabilisasi nilai hematokrit',
        monitoringTarget: 'Nilai hematokrit stabil, tanda vital stabil, tidak ada tanda efusi pleura masif atau sesak napas'
      },
      {
        dayLabel: 'Hari 4 (Discharge / Penyembuhan)',
        clinicalFocus: 'Fase Konvalesen / Pemulihan & Pemulangan',
        medications: 'Hentikan cairan infus intravena (mencegah edema paru reabsorpsi cairan), vitamin & hidrasi oral',
        monitoringTarget: 'Afebris > 24 jam tanpa antipiretik, nafsu makan pulih, trombosit meningkat > 50.000/mcL'
      }
    ],
    dischargeReadiness: 'Bebas demam > 24 jam, nafsu makan kembali, hematokrit stabil normal, trombosit menunjukkan tren meningkat.'
  },
  {
    pathwayTitle: 'Clinical Pathway: Pasca Bedah Sesar Protokol ERACS',
    losTarget: 'Target Length of Stay: 2 Hari',
    standardICD: 'ICD-10: O82.0',
    admissionCriteria: 'Kehamilan aterm dengan indikasi terminasi seksio sesarea elektif menggunakan protokol ERACS.',
    phases: [
      {
        dayLabel: 'Hari 1 (Pre & Intra Operatif)',
        clinicalFocus: 'Minimalisasi Nyeri, Puasa Singkat & Anestesi Dosis Rendah',
        medications: 'Puasa cairan jernih 2 jam pre-op (minum karbohidrat), spinal anestesi dosis rendah, analgesia multimodal',
        monitoringTarget: 'Hemodinamik ibu stabil, bayi lahir bugar dengan skor APGAR baik, Inisiasi Menyusu Dini (IMD)'
      },
      {
        dayLabel: 'Hari 1 (Post Operatif)',
        clinicalFocus: 'Mobilisasi Dini 2 Jam & Pelepasan Kateter Urin',
        medications: 'Analgesia oral Parasetamol 1000 mg + Ketorolac IV / Ibuprofen 400 mg oral, mulai makan minum bertahap 2 jam post-op',
        monitoringTarget: 'Mobilisasi duduk jam ke-2, berjalan jam ke-4, kateter urine dilepas jam ke-6 post operasi'
      },
      {
        dayLabel: 'Hari 2 (Discharge)',
        clinicalFocus: 'Mobilisasi Mandiri, Rawat Luka & Pemulangan',
        medications: 'Resep pulang analgesik oral ramah laktasi busui + Roborantia tablet tambah darah zat besi',
        monitoringTarget: 'Laktasi ASI lancar, luka operasi kering dan bersih, mobilisasi mandiri bebas tanpa hambatan'
      }
    ],
    dischargeReadiness: 'Ibu mobilisasi mandiri penuh tanpa nyeri berat, BAK spontan normal, bayi menyusu aktif dan tali pusat terawat baik.'
  }
];


// ============================================================================
// 24. UKMPPAI & UKTVF COMPETENCY EXAM QUIZ PRESETS (20 KASUS)
// ============================================================================
export interface QuizOption {
  key: 'A' | 'B' | 'C' | 'D' | 'E';
  text: string;
}

export interface CompetencyQuizPreset {
  id: string;
  examType: 'UKMPPAI (Apoteker)' | 'UKTVF (Tenaga Vokasi)';
  domainName: string;
  vignette: string;
  question: string;
  options: QuizOption[];
  correctAnswer: 'A' | 'B' | 'C' | 'D' | 'E';
  explanation: string;
  examPitfallTip: string;
  referenceStandard: string;
}

export const UKMPPAI_QUIZ_PRESETS: CompetencyQuizPreset[] = [
  {
    id: 'ukmppai-q1',
    examType: 'UKMPPAI (Apoteker)',
    domainName: 'Farmasi Klinis & Farmakoterapi',
    vignette: 'Seorang pasien pria 58 tahun dengan riwayat gagal jantung fraksi ejeksi menurun (HFrEF, LVEF 32%) kontrol rutin. Pasien rutin meminum Ramipril 10 mg 1x/hari, Bisoprolol 5 mg 1x/hari, dan Spironolakton 25 mg 1x/hari. Pasien masih mengeluh sesak nafas saat beraktivitas ringan (NYHA II-III). Dokter berencana mengganti Ramipril dengan Sacubitril/Valsartan (ARNI).',
    question: 'Berapakah waktu jeda (washout period) minimal yang harus dipatuhi sebelum dosis pertama Sacubitril/Valsartan diberikan pasca penghentian Ramipril?',
    options: [
      { key: 'A', text: '12 jam' },
      { key: 'B', text: '24 jam' },
      { key: 'C', text: '36 jam' },
      { key: 'D', text: '48 jam' },
      { key: 'E', text: '72 jam' }
    ],
    correctAnswer: 'C',
    explanation: 'Peralihan terapi dari golongan ACE inhibitor (Ramipril, Captopril, Lisinopril) ke ARNI (Sacubitril/Valsartan) WAJIB menerapkan masa jeda (washout period) minimal 36 JAM setelah dosis terakhir ACEI. Hal ini mutlak diperlukan untuk mencegah komplikasi ANGIOEDEMA berat yang mengancam nyawa, karena kedua obat menghambat degradasi bradikinin.',
    examPitfallTip: 'Peralihan dari ARB (Valsartan/Candesartan) ke ARNI TIDAK memerlukan washout period 36 jam. Jeda 36 jam HANYA berlaku untuk peralihan dari ACEI ke ARNI!',
    referenceStandard: 'Pedoman Gagal Jantung PERKI & AHA/ACC/HFSA Guidelines'
  },
  {
    id: 'ukmppai-q2',
    examType: 'UKMPPAI (Apoteker)',
    domainName: 'Farmasi Klinis & Interaksi Obat',
    vignette: 'Seorang wanita 64 tahun penderita osteoartritis lutut dan hipertensi datang ke IGD dengan penurunan urin drastis (oliguria), lemas, dan mual selama 3 hari. Pasien rutin meminum Lisinopril 20 mg dan Hidroklorotiazid (HCT) 25 mg. Seminggu terakhir, pasien meminum Natrium Diklofenak 50 mg 3x sehari yang dibeli sendiri untuk nyeri lututnya. Serum Kreatinin melonjak dari 0.9 menjadi 3.4 mg/dL.',
    question: 'Kombinasi obat manakah yang memicu terjadinya Gagal Ginjal Akut (Acute Kidney Injury) melalui fenomena "Triple Whammy" pada pasien tersebut?',
    options: [
      { key: 'A', text: 'Lisinopril + Hidroklorotiazid + Natrium Diklofenak' },
      { key: 'B', text: 'Lisinopril + Hidroklorotiazid saja' },
      { key: 'C', text: 'Natrium Diklofenak tunggal dosis tinggi' },
      { key: 'D', text: 'Hidroklorotiazid + Parasetamol' },
      { key: 'E', text: 'Lisinopril + Amlodipin' }
    ],
    correctAnswer: 'A',
    explanation: 'Fenomena Triple Whammy terjadi akibat sinergi nefrotoksik 3 obat: (1) Diuretik HCT memicu deplesi volume plasma, (2) NSAID Diklofenak menghambat prostaglandin memicu vasokonstriksi arteriol AFEREN, dan (3) ACEI Lisinopril memicu vasodilatasi arteriol EFEREN. Kombinasi ini meruntuhkan tekanan filtrasi intraglomerular ginjal dan memicu AKI berat.',
    examPitfallTip: 'Analgesik paling aman pada pasien yang menggunakan kombinasi ACEI/ARB + Diuretik adalah Parasetamol oral, BUKAN golongan NSAID!',
    referenceStandard: 'KDIGO Acute Kidney Injury Guideline & Stockleys Drug Interactions'
  },
  {
    id: 'ukmppai-q3',
    examType: 'UKMPPAI (Apoteker)',
    domainName: 'Farmasi Klinis & Gastroproteksi',
    vignette: 'Pria 62 tahun pasca-pemasangan stent koroner (PCI) karena Sindrom Koroner Akut (NSTEMI). Pasien memiliki riwayat perdarahan lambung akibat ulkus peptikum. Dokter meresepkan Dual Antiplatelet Therapy (DAPT) Aspirin 80 mg dan Clopidogrel 75 mg, serta meminta apoteker merekomendasikan gastroprotektor PPI yang aman.',
    question: 'Obat golongan Proton Pump Inhibitor (PPI) manakah yang PALING AMAN dipilih karena memiliki inhibisi minimal terhadap enzim CYP2C19 pemetabolisme Clopidogrel?',
    options: [
      { key: 'A', text: 'Omeprazole' },
      { key: 'B', text: 'Esomeprazole' },
      { key: 'C', text: 'Pantoprazole' },
      { key: 'D', text: 'Lansoprazole' },
      { key: 'E', text: 'Rabeprazole dosis tinggi' }
    ],
    correctAnswer: 'C',
    explanation: 'Clopidogrel adalah prodrug yang butuh bioaktivasi enzim hepar CYP2C19. Omeprazole dan Esomeprazole adalah inhibitor kuat CYP2C19 yang menurunkan kadar metabolit aktif klopidogrel hingga 45%, meningkatkan risiko trombosis stent berulang. Pantoprazole memiliki afinitas terendah terhadap CYP2C19 sehingga menjadi PPI pilihan utama.',
    examPitfallTip: 'Omeprazole sering dijadikan pilihan pengecoh di ujian. Ingat: Clopidogrel pasangannya adalah Pantoprazole!',
    referenceStandard: 'US FDA Drug Safety Communication & Konsensus PERKI'
  },
  {
    id: 'ukmppai-q4',
    examType: 'UKMPPAI (Apoteker)',
    domainName: 'Farmakoterapi Endokrin & Kehamilan',
    vignette: 'Wanita 26 tahun hamil trimester pertama (usia kehamilan 10 minggu) datang dengan keluhan palpitasi, berkeringat banyak, penurunan BB 4 kg sebulan, dan tremor halus. Hasil lab: TSH < 0.01 mIU/L dan Free T4 3.8 ng/dL, terdiagnosis Hipertiroidisme (Graves Disease).',
    question: 'Obat antitiroid pilihan pertama manakah yang paling aman diberikan pada pasien tersebut selama trimester pertama kehamilan?',
    options: [
      { key: 'A', text: 'Metimazol' },
      { key: 'B', text: 'Propiltiourasil (PTU)' },
      { key: 'C', text: 'Karbimazol' },
      { key: 'D', text: 'Larutan Lugol (Kalium Iodida)' },
      { key: 'E', text: 'Radioaktif Iodium-131' }
    ],
    correctAnswer: 'B',
    explanation: 'Propiltiourasil (PTU) adalah pilihan lini pertama pada kehamilan TRIMESTER PERTAMA. PTU terikat kuat pada protein plasma sehingga transfer plasental ke janin lebih rendah dan risiko teratogeniknya jauh lebih kecil dibanding Metimazol yang memicu malformasi kongenital berat (aplasia cutis).',
    examPitfallTip: 'Metimazol dilarang pada Trimester 1, namun pada Trimester 2 dan 3 terapi dapat dialihkan ke Metimazol untuk menghindari risiko hepatotoksisitas maternal dari PTU.',
    referenceStandard: 'American Thyroid Association (ATA) Pregnancy Guidelines'
  },
  {
    id: 'ukmppai-q5',
    examType: 'UKMPPAI (Apoteker)',
    domainName: 'Farmasi Saraf, Jiwa & Efek Samping',
    vignette: 'Pria 32 tahun penderita skizofrenia dibawa ke IGD karena kekakuan leher parah (tortikolis spasmodik), mata terbelalak melirik ke atas tanpa bisa dikendalikan (krisis okulogirik), dan gelisah pasca meminum Haloperidol 5 mg 2x sehari selama 3 hari.',
    question: 'Obat manakah yang paling tepat diberikan untuk mengatasi reaksi distonia akut akibat efek samping ekstrapiramidal (EPS) Haloperidol tersebut?',
    options: [
      { key: 'A', text: 'Triheksifenidil / Difenhidramin injeksi' },
      { key: 'B', text: 'Risperidon oral' },
      { key: 'C', text: 'Flufenazin IM' },
      { key: 'D', text: 'Klorpromazin oral' },
      { key: 'E', text: 'Klozapin sublingual' }
    ],
    correctAnswer: 'A',
    explanation: 'Distonia akut dan krisis okulogirik terjadi akibat ketidakseimbangan dopaminergik-kolinergik di ganglia basalis pasca blokade reseptor D2 oleh Haloperidol. Terapi lini pertama adalah antikolinergik sentral seperti Triheksifenidil oral atau Difenhidramin injeksi IM/IV.',
    examPitfallTip: 'Jangan memberikan antipsikotik lain karena akan memperparah spasme distonia otot!',
    referenceStandard: 'Panduan Praktik Klinis Psikiatri PDSKJI & Maudsley Prescribing Guidelines'
  },
  {
    id: 'ukmppai-q6',
    examType: 'UKMPPAI (Apoteker)',
    domainName: 'Farmakoterapi Respiratori GINA',
    vignette: 'Wanita 28 tahun penderita asma mengeluhkan gejala sesak napas dan mengi yang timbul hampir setiap hari (>= 4-5 hari/minggu) serta terbangun malam 1-2x seminggu. Selama ini pasien hanya menggunakan inhaler Salbutamol saat sesak timbul.',
    question: 'Berdasarkan pedoman GINA Track 1 terkini, apakah rekomendasi terapi pemeliharaan dan pelega yang paling tepat?',
    options: [
      { key: 'A', text: 'Budesonide-Formoterol inhalasi dosis rendah sebagai pemeliharaan harian dan pelega saat sesak (MART)' },
      { key: 'B', text: 'Salbutamol inhalasi dosis dinaikkan menjadi 4x sehari rutin' },
      { key: 'C', text: 'Teofilin sustained-release tablet 300 mg sekali sehari' },
      { key: 'D', text: 'Ipratropium Bromida inhaler tunggal' },
      { key: 'E', text: 'Prednison tablet oral 20 mg setiap hari jangka panjang' }
    ],
    correctAnswer: 'A',
    explanation: 'GINA Track 1 menetapkan kombinasi Kortikosteroid Inhalasi (ICS) dosis rendah + Formoterol (Budesonide-Formoterol) sebagai terapi pilihan utama pemeliharaan harian sekaligus pereda (reliever) saat sesak timbul (MART / SMART Protocol). SABA tunggal sudah ditinggalkan karena meningkatkan risiko eksaserbasi fatal.',
    examPitfallTip: 'Salbutamol monoterapi tanpa kortikosteroid inhalasi SUDAH TIDAK DIREKOMENDASIKAN oleh GINA!',
    referenceStandard: 'GINA Global Strategy for Asthma Management and Prevention'
  },
  {
    id: 'ukmppai-q7',
    examType: 'UKMPPAI (Apoteker)',
    domainName: 'Manajemen Farmakoekonomi',
    vignette: 'Tim Panitia Farmasi dan Terapi (PFT) membandingkan dua obat antihipertensi: Obat Baru X (Biaya total Rp 12.000.000, Efektivitas 8 QALY) dengan Obat Standar Y (Biaya total Rp 6.000.000, Efektivitas 6 QALY).',
    question: 'Berapakah nilai Incremental Cost-Effectiveness Ratio (ICER) dari Obat Baru X dibandingkan Obat Standar Y?',
    options: [
      { key: 'A', text: 'Rp 1.500.000 / QALY' },
      { key: 'B', text: 'Rp 2.000.000 / QALY' },
      { key: 'C', text: 'Rp 3.000.000 / QALY' },
      { key: 'D', text: 'Rp 4.500.000 / QALY' },
      { key: 'E', text: 'Rp 6.000.000 / QALY' }
    ],
    correctAnswer: 'C',
    explanation: 'ICER dihitung dengan rumus: (Biaya Obat X - Biaya Obat Y) / (Efektivitas Obat X - Efektivitas Obat Y) = (Rp 12.000.000 - Rp 6.000.000) / (8 QALY - 6 QALY) = Rp 6.000.000 / 2 QALY = Rp 3.000.000 per QALY.',
    examPitfallTip: 'Jangan tertukar antara ACER (Average Cost-Effectiveness Ratio: Biaya / Efektivitas) dengan ICER (Incremental: Selisih Biaya / Selisih Efektivitas).',
    referenceStandard: 'Pedoman Penerapan Kajian Farmakoekonomi Kemenkes RI'
  },
  {
    id: 'ukmppai-q8',
    examType: 'UKMPPAI (Apoteker)',
    domainName: 'Manajemen Pengadaan & Logistik RS',
    vignette: 'Apoteker di instalasi farmasi menghitung titik pemesanan kembali (Reorder Point / ROP) Seftriakson 1 g vial. Rata-rata pemakaian = 40 vial per hari. Waktu tunggu PBF (Lead Time) = 3 hari. Stok pengaman (Safety Stock) ditetapkan = 60 vial.',
    question: 'Berapakah nilai Reorder Point (ROP) sediaan Seftriakson 1 g vial tersebut?',
    options: [
      { key: 'A', text: '120 vial' },
      { key: 'B', text: '140 vial' },
      { key: 'C', text: '180 vial' },
      { key: 'D', text: '200 vial' },
      { key: 'E', text: '240 vial' }
    ],
    correctAnswer: 'C',
    explanation: 'Rumus ROP = (Lead Time x Pemakaian Rata-Rata) + Safety Stock = (3 hari x 40 vial/hari) + 60 vial = 120 vial + 60 vial = 180 vial. Apotek harus memesan ulang saat sisa stok tersisa 180 vial.',
    examPitfallTip: 'Safety stock WAJIB dijumlahkan ke hasil kali lead time dan laju konsumsi. Jika tidak dijumlahkan, faskes akan mengalami kekosongan obat (stockout)!',
    referenceStandard: 'Pedoman Pengelolaan Obat Publik dan Perbekalan Kesehatan Kemenkes RI'
  },
  {
    id: 'ukmppai-q9',
    examType: 'UKMPPAI (Apoteker)',
    domainName: 'Teknologi Farmasi & Quality Control (QC)',
    vignette: 'Bagian Kendali Mutu (QC) industri farmasi menguji disolusi 6 tablet Parasetamol (Tahap S1). Kriteria Q monografi Farmakope = 80%. Hasil disolusi ke-6 tablet adalah: 86%, 88%, 82%, 87%, 85%, 89%.',
    question: 'Bagaimanakah kesimpulan dan tindak lanjut dari hasil pengujian disolusi Tahap S1 tersebut?',
    options: [
      { key: 'A', text: 'Lulus Tahap S1 karena nilai rata-rata > 80%' },
      { key: 'B', text: 'Tidak lulus Tahap S1, wajib lanjut ke Tahap S2 dengan menambah 6 tablet' },
      { key: 'C', text: 'Tidak lulus, seluruh bets harus dimusnahkan' },
      { key: 'D', text: 'Lulus bersyarat dengan karantina produk' },
      { key: 'E', text: 'Langsung lanjut ke Tahap S3 dengan menambah 12 tablet' }
    ],
    correctAnswer: 'B',
    explanation: 'Kriteria penerimaan Tahap S1 (6 tablet) menurut Farmakope: Tiap unit TIDAK BOLEH KURANG DARI Q + 5% (80% + 5% = 85%). Karena terdapat 1 tablet yang bernilai 82% (< 85%), maka pengujian TIDAK LULUS Tahap S1 dan WAJIB DILANJUTKAN ke Tahap S2 (dengan tambahan 6 tablet sampel baru).',
    examPitfallTip: 'Batas kelulusan Tahap S1 adalah Q + 5% (bukan Q saja). Seluruh 6 tablet harus bernilai >= Q + 5%!',
    referenceStandard: 'Farmakope Indonesia Edisi VI Lampiran Uji Disolusi'
  },
  {
    id: 'ukmppai-q10',
    examType: 'UKMPPAI (Apoteker)',
    domainName: 'Farmakokinetika Klinis & TDM',
    vignette: 'Pasien ICU dengan sepsis MRSA diterapi Vankomisin 1 g IV infus tiap 12 jam. Apoteker merencanakan jadwal pengambilan sampel darah untuk Therapeutic Drug Monitoring (TDM) kadar palung (trough concentration).',
    question: 'Kapankah waktu pengambilan sampel darah yang paling tepat untuk mengukur trough level Vankomisin?',
    options: [
      { key: 'A', text: '30 menit setelah infus intravena selesai' },
      { key: 'B', text: '2 jam setelah pemberian infus pertama' },
      { key: 'C', text: '30 menit sebelum pemberian dosis ke-4 (kondisi tunak / steady-state)' },
      { key: 'D', text: '6 jam setelah pemberian dosis kedua' },
      { key: 'E', text: '24 jam setelah terapi dihentikan' }
    ],
    correctAnswer: 'C',
    explanation: 'Trough concentration (kadar palung) diukur tepat 30 menit SEBELUM pemberian dosis berikutnya, setelah mencapai kondisi tunak (steady-state, biasanya tercapai sebelum dosis ke-4 atau ke-5). Target trough level Vankomisin pada infeksi MRSA berat adalah 15-20 mcg/mL.',
    examPitfallTip: 'Peak level diukur 1-2 jam setelah infus selesai, sedangkan Trough level selalu diambil tepat sebelum dosis berikutnya masuk!',
    referenceStandard: 'ASHP Therapeutic Monitoring of Vancomycin in Adult Patients'
  },
  {
    id: 'ukmppai-q11',
    examType: 'UKMPPAI (Apoteker)',
    domainName: 'Farmasi Klinis & Terapi Toksisitas Digoksin',
    vignette: 'Pasien geriatri 72 tahun dengan gagal jantung kongestif meminum Digoksin 0.25 mg dan Furosemid 40 mg tiap pagi. Pasien datang lemas, mual muntah berulang, melihat lingkaran kuning kehijauan (xantopsia), dan EKG menunjukkan PVC bigemini. Pemeriksaan elektrolit: Kalium serum 2.7 mEq/L dan kadar serum Digoksin 2.5 ng/mL.',
    question: 'Gangguan elektrolit apakah yang secara langsung memperparah perlekatan dan toksisitas Digoksin pada miokardium pasien tersebut?',
    options: [
      { key: 'A', text: 'Hipokalemia' },
      { key: 'B', text: 'Hiperkalemia' },
      { key: 'C', text: 'Hiponatremia' },
      { key: 'D', text: 'Hiperkalsemia' },
      { key: 'E', text: 'Hipokloremia' }
    ],
    correctAnswer: 'A',
    explanation: 'Ion Kalium dan Digoksin berkompetisi pada reseptor pengikatan enzim Na+/K+-ATPase miokard. Kondisi HIPOKALEMIA (akibat diuretik Furosemid boros kalium) menyebabkan reseptor kosong sehingga Digoksin berikatan jauh lebih kuat dan memicu toksisitas glikosida jantung bahkan pada kadar serum yang tampak normal/sedikit meningkat.',
    examPitfallTip: 'Diuretik loop dan tiazid membuang kalium; pasien pengguna digoksin wajib dimonitor kadar kaliumnya secara berkala atau diberi kalium sparring agent (Spironolakton)!',
    referenceStandard: 'AHA/ACC Heart Failure Guidelines & Lexicomp Drug Interactions'
  },
  {
    id: 'ukmppai-q12',
    examType: 'UKMPPAI (Apoteker)',
    domainName: 'Regulasi Farmasi & Sistem SIPNAP',
    vignette: 'Apoteker Penanggung Jawab Apotek (APJ) melakukan pencatatan mutasi sediaan Narkotika (Kodein, Fentanil Patch) dan Psikotropika (Alprazolam, Diazepam). Seluruh transaksi wajib dilaporkan secara daring melalui aplikasi SIPNAP.',
    question: 'Berdasarkan Permenkes No. 3 Tahun 2015, kapankah batas waktu maksimal pelaporan SIPNAP setiap bulannya?',
    options: [
      { key: 'A', text: 'Tanggal 5 bulan berikutnya' },
      { key: 'B', text: 'Tanggal 10 bulan berikutnya' },
      { key: 'C', text: 'Tanggal 15 bulan berikutnya' },
      { key: 'D', text: 'Tanggal 25 bulan berikutnya' },
      { key: 'E', text: 'Akhir hari kerja bulan berjalan' }
    ],
    correctAnswer: 'B',
    explanation: 'Berdasarkan Permenkes No. 3 Tahun 2015 Pasal 45, Apotek, Instalasi Farmasi Rumah Sakit, dan Klinik wajib membuat dan menyampaikan laporan bulanan pemasukan dan penyerahan Narkotika dan Psikotropika melalui SIPNAP paling lambat tanggal 10 BULAN BERIKUTNYA kepada Dinas Kesehatan dan Balai POM setempat.',
    examPitfallTip: 'Batas pelaporan SIPNAP adalah TANGGAL 10 (bukan tanggal 15 atau 25)! Keterlambatan dapat dikenai sanksi administratif hingga pembekuan izin.',
    referenceStandard: 'Permenkes RI No. 3 Tahun 2015 tentang Peredaran, Penyimpanan, Pemusnahan, dan Pelaporan Narkotika, Psikotropika, dan Prekursor Farmasi'
  },
  {
    id: 'ukmppai-q13',
    examType: 'UKMPPAI (Apoteker)',
    domainName: 'Farmakoterapi Endokrin & Klirens Ginjal',
    vignette: 'Wanita 65 tahun penderita DM Tipe 2 selama 12 tahun rutin mengonsumsi Metformin 500 mg 3x sehari. Pemeriksaan laboratorium terkini menunjukkan serum kreatinin 2.4 mg/dL dengan estimasi laju filtrasi glomerulus (eGFR) 24 mL/menit/1.73m2. Nilai HbA1c 8.6%.',
    question: 'Apakah rekomendasi tatalaksana klinis yang paling tepat dari Apoteker terkait kelanjutan terapi Metformin pasien?',
    options: [
      { key: 'A', text: 'Dosis Metformin dinaikkan menjadi 850 mg 3x sehari' },
      { key: 'B', text: 'Dosis Metformin tetap dipertahankan dengan hidrasi oral cukup' },
      { key: 'C', text: 'Dosis Metformin diturunkan menjadi 500 mg sekali sehari' },
      { key: 'D', text: 'Metformin dihentikan mutlak (kontraindikasi eGFR < 30) dan diganti Insulin atau Linagliptin' },
      { key: 'E', text: 'Metformin diganti Glibenklamid 5 mg sehari' },
    ],
    correctAnswer: 'D',
    explanation: 'Pedoman KDIGO, ADA, dan PERKENI menetapkan Metformin KONTRAINDIKASI MUTLAK pada pasien dengan eGFR < 30 mL/menit/1.73m2 karena risiko fatal Asidosis Laktat (mortalitas >50%). Terapi antidiabetes yang aman tanpa perlu penyesuaian dosis ginjal adalah DPP-4 inhibitor Linagliptin atau Insulin.',
    examPitfallTip: 'eGFR 30-45 mL/min: dosis maksimal metformin 1000 mg/hari. eGFR < 30 mL/min: HENTIKAN MUTLAK! Glibenklamid juga kontraindikasi pada CKD karena risiko hipoglikemia berkepanjangan.',
    referenceStandard: 'ADA Standards of Care in Diabetes & KDIGO Diabetes Management in CKD'
  },
  {
    id: 'ukmppai-q14',
    examType: 'UKMPPAI (Apoteker)',
    domainName: 'Teknologi Farmasi & Uji Stabilitas ASEAN',
    vignette: 'Departemen Riset dan Pengembangan (R&D) industri farmasi melakukan uji stabilitas dipercepat (accelerated stability testing) terhadap formulasi tablet salut selaput antihipertensi baru sesuai panduan ASEAN Harmonization Guidelines / ICH Zona IVB.',
    question: 'Pada kondisi suhu dan kelembaban relatif (RH) berapakah uji stabilitas dipercepat tersebut wajib dioperasikan di dalam climatic chamber?',
    options: [
      { key: 'A', text: '25°C ± 2°C / 60% RH ± 5%' },
      { key: 'B', text: '30°C ± 2°C / 65% RH ± 5%' },
      { key: 'C', text: '30°C ± 2°C / 75% RH ± 5%' },
      { key: 'D', text: '40°C ± 2°C / 75% RH ± 5%' },
      { key: 'E', text: '45°C ± 2°C / 85% RH ± 5%' }
    ],
    correctAnswer: 'D',
    explanation: 'Berdasarkan ASEAN Guideline on Stability Study of Drug Product, uji stabilitas dipercepat (accelerated test) dilakukan pada suhu 40°C ± 2°C dan kelembaban relatif 75% RH ± 5% selama minimal 6 bulan dengan interval pengujian bulan ke-0, 3, dan 6. Uji jangka panjang (real-time Zona IVB) dilakukan pada 30°C ± 2°C / 75% RH ± 5%.',
    examPitfallTip: 'Suhu 30°C / 75% RH adalah untuk Real-Time Zona IVB (Indonesia), sedangkan Uji Dipercepat (Accelerated) wajib 40°C / 75% RH!',
    referenceStandard: 'ASEAN Guideline on Stability Study of Drug Product & Petunjuk Operasional CPOB BPOM'
  },
  {
    id: 'ukmppai-q15',
    examType: 'UKMPPAI (Apoteker)',
    domainName: 'Farmakoterapi Penyakit Infeksi & Efek Samping ARV',
    vignette: 'Seorang pria 31 tahun baru saja memulai pengobatan HIV lini pertama dengan regimen Tenofovir Disoproxil Fumarate (TDF) + Lamivudine (3TC) + Efavirenz (EFV). Satu minggu kemudian pasien mengeluh pusing berat, rasa melayang, sulit berkonsentrasi di siang hari, dan sering terbangun karena mimpi buruk yang sangat hidup dan menakutkan (vivid dreams).',
    question: 'Obat antiretroviral manakah yang menjadi penyebab utama keluhan neuropsikiatrik tersebut?',
    options: [
      { key: 'A', text: 'Tenofovir (TDF)' },
      { key: 'B', text: 'Lamivudine (3TC)' },
      { key: 'C', text: 'Efavirenz (EFV)' },
      { key: 'D', text: 'Zidovudine (AZT)' },
      { key: 'E', text: 'Nevirapine (NVP)' }
    ],
    correctAnswer: 'C',
    explanation: 'Efavirenz (golongan NNRTI) sangat mudah menembus sawar darah otak dan dikenal luas menimbulkan efek samping sistem saraf pusat (SSP) pada 50% pasien di awal terapi, meliputi dizziness, insomnia, depresi, gangguan konsentrasi, dan mimpi buruk yang aneh/hidup (vivid dreams). Gejala biasanya membaik setelah 2-4 minggu. Edukasikan diminum malam hari sebelum tidur saat perut kosong.',
    examPitfallTip: 'TDF berefek samping nefrotoksisitas & deplesi densitas tulang, sedangkan keluhan neuropsikiatri/mimpi buruk adalah ciri khas Efavirenz!',
    referenceStandard: 'Pedoman Nasional Pelayanan Kedokteran Tata Laksana HIV Kemenkes RI & WHO HIV Guidelines'
  }
];

export const UKTVF_QUIZ_PRESETS: CompetencyQuizPreset[] = [
  {
    id: 'uktvf-q1',
    examType: 'UKTVF (Tenaga Vokasi)',
    domainName: 'Pelayanan Apotek & DOWA',
    vignette: 'Seorang pasien datang ke apotek mengeluhkan sakit gigi berdenyut dan bermaksud membeli Asam Mefenamat 500 mg tanpa resep dokter. Pasien adalah pasien dewasa yang sebelumnya pernah menggunakan obat tersebut atas resep dokter.',
    question: 'Sesuai Kepmenkes No. 347/1990 tentang DOWA 1, berapakah batas jumlah maksimal tablet Asam Mefenamat yang boleh diserahkan oleh apotek?',
    options: [
      { key: 'A', text: '7 tablet' },
      { key: 'B', text: '10 tablet' },
      { key: 'C', text: '15 tablet' },
      { key: 'D', text: '20 tablet' },
      { key: 'E', text: '30 tablet' }
    ],
    correctAnswer: 'D',
    explanation: 'Berdasarkan Kepmenkes No. 347/1990 tentang Daftar Obat Wajib Apotek No. 1 (DOWA 1), Asam Mefenamat dapat diserahkan tanpa resep dokter dengan jumlah MAKSIMAL 20 TABLET per pasien, dengan syarat pasien pernah menggunakannya dan diedukasi diminum sesudah makan.',
    examPitfallTip: 'Batas 10 tablet berlaku untuk Cetirizine atau Famotidine, sedangkan Asam Mefenamat batas resminya adalah 20 tablet!',
    referenceStandard: 'Kepmenkes RI No. 347/Menkes/SK/VII/1990 tentang DOWA No. 1'
  },
  {
    id: 'uktvf-q2',
    examType: 'UKTVF (Tenaga Vokasi)',
    domainName: 'Distribusi & Rantai Dingin (Cold Chain)',
    vignette: 'TTK di puskesmas menerima kiriman vaksin Hepatitis B dan vaksin DPT dari instalasi farmasi kabupaten. Vaksin tersebut harus segera disimpan ke dalam lemari pendingin (chiller).',
    question: 'Pada rentang suhu berapakah vaksin tersebut harus disimpan di dalam vaccine refrigerator?',
    options: [
      { key: 'A', text: '< 0°C (Freezer beku)' },
      { key: 'B', text: '2°C sampai 8°C' },
      { key: 'C', text: '9°C sampai 15°C' },
      { key: 'D', text: '15°C sampai 25°C' },
      { key: 'E', text: 'Suhu kamar terkontrol (25°C - 30°C)' }
    ],
    correctAnswer: 'B',
    explanation: 'Vaksin Hepatitis B, DPT-HB-Hib, TT, dan DT adalah jenis vaksin sensitif beku (freeze-sensitive) yang WAJIB disimpan pada suhu 2°C hingga 8°C. Jika membeku, partikel adjuvan aluminium akan mengendap dan merusak potensi proteksi vaksin (lakukan Shake Test jika curiga beku).',
    examPitfallTip: 'Hanya vaksin Polio Oral (OPV) yang disimpan pada suhu beku (-15 s/d -25°C), sedangkan Hepatitis B dan DPT TIDAK BOLEH MEMBEKU (suhu 2-8°C)!',
    referenceStandard: 'Permenkes No. 12 Tahun 2017 tentang Penyelenggaraan Imunisasi'
  },
  {
    id: 'uktvf-q3',
    examType: 'UKTVF (Tenaga Vokasi)',
    domainName: 'Perhitungan Farmasetik & Peracikan Puyer',
    vignette: 'TTK menerima resep racikan puyer untuk pasien anak: R/ Parasetamol 150 mg, m.f. pulv. d.t.d No. XII, S. 3 d.d. pulv. I. Di instalasi farmasi tersedia sediaan tablet Parasetamol 500 mg.',
    question: 'Berapakah jumlah tablet Parasetamol 500 mg yang harus diambil oleh TTK untuk meracik resep puyer tersebut?',
    options: [
      { key: 'A', text: '2.5 tablet' },
      { key: 'B', text: '3.0 tablet' },
      { key: 'C', text: '3.6 tablet' },
      { key: 'D', text: '4.0 tablet' },
      { key: 'E', text: '4.5 tablet' }
    ],
    correctAnswer: 'C',
    explanation: 'Singkatan d.t.d (da tales doses) artinya setiap bungkus mengandung 150 mg Parasetamol. Total parasetamol untuk 12 bungkus = 150 mg x 12 = 1800 mg. Jumlah tablet 500 mg yang dibutuhkan = 1800 mg / 500 mg = 3.6 tablet (dibuat pengenceran serbuk untuk 0.6 tablet).',
    examPitfallTip: 'Selalu periksa singkatan d.t.d! Jika ada d.t.d, dosis dikalikan jumlah bungkus (150x12). Jika tanpa d.t.d, dosis 150 mg dibagi untuk 12 bungkus.',
    referenceStandard: 'Farmakope Indonesia & Pedoman Praktik Dispensing Farmasi'
  },
  {
    id: 'uktvf-q4',
    examType: 'UKTVF (Tenaga Vokasi)',
    domainName: 'Regulasi Surat Pesanan (SP)',
    vignette: 'TTK membantu apoteker menyiapkan berkas surat pesanan obat ke PBF distributor resmi untuk pengadaan sediaan Kodein tablet 10 mg dan Morfin injeksi.',
    question: 'Manakah pernyataan yang BENAR mengenai format dan ketentuan Surat Pesanan (SP) Narkotika resmi?',
    options: [
      { key: 'A', text: 'Satu lembar SP boleh memuat lebih dari 1 jenis zat narkotika' },
      { key: 'B', text: 'Satu lembar SP hanya boleh berisi 1 jenis sediaan zat aktif narkotika' },
      { key: 'C', text: 'SP cukup dibuat 1 lembar asli tanpa tembusan' },
      { key: 'D', text: 'TTK berwenang menandatangani SP jika apoteker berhalangan' },
      { key: 'E', text: 'SP narkotika dapat ditujukan ke PBF swasta mana saja' }
    ],
    correctAnswer: 'B',
    explanation: 'Berdasarkan Permenkes No. 3 Tahun 2015, Surat Pesanan Narkotika (Formulir N-9) dibuat terpisah khusus minimal 3 rangkap dan 1 LEMBAR SP HANYA BOLEH BERISI 1 JENIS ZAT NARKOTIKA, serta wajib ditandatangani oleh Apoteker Penanggung Jawab (APJ) ber-SIPA.',
    examPitfallTip: 'SP Psikotropika boleh lebih dari 1 item, sedangkan SP Narkotika MUTLAK hanya boleh 1 item zat per lembar SP!',
    referenceStandard: 'Permenkes No. 3 Tahun 2015 tentang Peredaran & Penyimpanan Narkotika'
  },
  {
    id: 'uktvf-q5',
    examType: 'UKTVF (Tenaga Vokasi)',
    domainName: 'CPOB & Sediaan Steril',
    vignette: 'TTK di industri farmasi bertugas di divisi produksi sediaan steril injeksi ampul tanpa proses sterilisasi akhir (pembuatan secara aseptis).',
    question: 'Pada kelas ruangan manakah proses pengisian sediaan steril secara aseptis (aseptic filling) tersebut wajib dilakukan?',
    options: [
      { key: 'A', text: 'Kelas A (Laminar Air Flow / LAF)' },
      { key: 'B', text: 'Kelas B' },
      { key: 'C', text: 'Kelas C' },
      { key: 'D', text: 'Kelas D' },
      { key: 'E', text: 'Kelas E' }
    ],
    correctAnswer: 'A',
    explanation: 'Kelas A adalah zona kritis untuk kegiatan berisiko tinggi seperti pengisian aseptis wadah terbuka dengan kecepatan aliran udara laminar 0.36 - 0.54 m/s. Kelas B adalah ruang latar belakang bagi area kerja Kelas A.',
    examPitfallTip: 'Kelas C untuk sediaan yang mengalami sterilisasi akhir (terminal sterilization), sedangkan proses aseptis wajib di Kelas A!',
    referenceStandard: 'Pedoman CPOB BPOM RI Ruang Bersih Steril'
  },
  {
    id: 'uktvf-q6',
    examType: 'UKTVF (Tenaga Vokasi)',
    domainName: 'Teknologi Sediaan Farmasi',
    vignette: 'TTK menyiapkan sediaan salep mata steril dengan basis Vaselin Album dan Parafin Cair. Basis salep tersebut harus disterilkan terlebih dahulu sebelum dicampurkan dengan zat aktif.',
    question: 'Metode sterilisasi apakah yang paling tepat digunakan untuk mensterilkan basis salep berlemak/minyak tersebut?',
    options: [
      { key: 'A', text: 'Panas basah menggunakan autoklaf 121°C 15 menit' },
      { key: 'B', text: 'Panas kering menggunakan oven 160°C selama 2 jam' },
      { key: 'C', text: 'Filtrasi membran bakteri 0.22 mikron' },
      { key: 'D', text: 'Penyinaran sinar ultraviolet (UV)' },
      { key: 'E', text: 'Gas etilen oksida' }
    ],
    correctAnswer: 'B',
    explanation: 'Basis lemak, minyak, dan serbuk hidrofobik tidak dapat ditembus uap air panas bertekanan pada autoklaf. Oleh karena itu, metode sterilisasi yang tepat adalah PANAS KERING menggunakan Oven pada suhu 160°C selama 2 jam.',
    examPitfallTip: 'Jangan memilih autoklaf untuk sediaan minyak/lemak karena minyak tidak tembus uap air panas!',
    referenceStandard: 'Farmakope Indonesia Edisi VI Lampiran Sterilisasi'
  },
  {
    id: 'uktvf-q7',
    examType: 'UKTVF (Tenaga Vokasi)',
    domainName: 'Farmasi Bahan Alam & Fitofarmaka',
    vignette: 'TTK di laboratorium bahan alam mengekstraksi kurkuminoid dari rimpang temulawak menggunakan pelarut etanol 70% di dalam bejana tertutup pada suhu kamar selama 3-5 hari dengan pengadukan berkala.',
    question: 'Apakah nama metode ekstraksi dingin yang dilakukan oleh TTK tersebut?',
    options: [
      { key: 'A', text: 'Refluks' },
      { key: 'B', text: 'Sokletasi' },
      { key: 'C', text: 'Infundasi' },
      { key: 'D', text: 'Maserasi' },
      { key: 'E', text: 'Digerasi' }
    ],
    correctAnswer: 'D',
    explanation: 'Maserasi adalah proses penyarian simplisia menggunakan pelarut pada suhu ruangan (dingin) dengan beberapa kali pengocokan/pengadukan dalam bejana tertutup, sangat ideal untuk zat aktif yang tidak tahan pemanasan (termolabil).',
    examPitfallTip: 'Perkolasi menggunakan tabung perkolator dengan penetesan pelarut secara berkesinambungan; Sokletasi menggunakan pemanasan uap pelarut.',
    referenceStandard: 'Buku Pedoman Ekstraksi Simplisia Tanaman Obat BPOM'
  },
  {
    id: 'uktvf-q8',
    examType: 'UKTVF (Tenaga Vokasi)',
    domainName: 'Patient Safety & Penyimpanan Obat LASA',
    vignette: 'TTK menerima obat Cefazolin 1 g serbuk injeksi dan Cefotaxime 1 g serbuk injeksi dari distributor. Keduanya memiliki kemasan botol vial dan fonetik nama yang sangat mirip (LASA/NORUM).',
    question: 'Bagaimanakah prosedur penataan dan penyimpanan yang benar untuk kedua obat tersebut di rak instalasi farmasi?',
    options: [
      { key: 'A', text: 'Disimpan berdampingan di rak yang sama agar mudah dicari' },
      { key: 'B', text: 'Tidak boleh disimpan berdampingan, diberi selingan obat lain, dan diberi stiker LASA dengan penulisan Tall Man Letter' },
      { key: 'C', text: 'Disimpan di lemari narkotika dengan kunci ganda' },
      { key: 'D', text: 'Disimpan di lemari pendingin chiller suhu 2-8°C' },
      { key: 'E', text: 'Disimpan di ruang karantina tanpa label' }
    ],
    correctAnswer: 'B',
    explanation: 'Standar Keselamatan Pasien (ISMP & Permenkes 72/73) menetapkan obat LASA TIDAK BOLEH diletakkan berdampingan, harus diselingi obat lain, dan diberi stiker penanda LASA serta penulisan Tall Man Letter (misal: CEFazolin vs CEFotaxim) untuk mencegah salah ambil obat.',
    examPitfallTip: 'Salah ambil obat LASA adalah salah satu penyebab Medication Error tertinggi di apotek dan rumah sakit!',
    referenceStandard: 'Permenkes No. 72 Tahun 2016 tentang Standar Pelayanan Farmasi RS'
  },
  {
    id: 'uktvf-q9',
    examType: 'UKTVF (Tenaga Vokasi)',
    domainName: 'Pelayanan Apotek & DOWA 2',
    vignette: 'Pasien datang ke apotek mengeluhkan nyeri lambung kambuh dan ingin membeli kapsul Omeprazole 20 mg tanpa resep dokter. Pasien menyampaikan bahwa obat ini pernah diresepkan dokter sebelumnya.',
    question: 'Berdasarkan Kepmenkes No. 924/1993 tentang DOWA 2, berapakah batas maksimal jumlah kapsul Omeprazole 20 mg yang dapat diserahkan tanpa resep?',
    options: [
      { key: 'A', text: '7 kapsul' },
      { key: 'B', text: '10 kapsul' },
      { key: 'C', text: '14 kapsul' },
      { key: 'D', text: '20 kapsul' },
      { key: 'E', text: '30 kapsul' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Kepmenkes No. 924/1993 tentang DOWA No. 2, Omeprazole 20 mg dapat diserahkan tanpa resep dokter dengan jumlah MAKSIMAL 7 KAPSUL untuk keluhan lambung berulang pada pasien yang sebelumnya telah diperiksa dokter.',
    examPitfallTip: 'Ranitidin 150 mg (DOWA 3) maksimal 10 tablet, sedangkan Omeprazole 20 mg (DOWA 2) maksimal 7 kapsul!',
    referenceStandard: 'Kepmenkes RI No. 924/Menkes/SK/X/1993 tentang DOWA No. 2'
  },
  {
    id: 'uktvf-q10',
    examType: 'UKTVF (Tenaga Vokasi)',
    domainName: 'Pengelolaan Limbah Medis B3 Farmasi',
    vignette: 'TTK di unit dispensing obat steril sitostatika mengumpulkan sisa ampul kemoterapi Doksorubisin, spuit, dan kassa yang terkontaminasi obat kanker pasca pencampuran.',
    question: 'Ke dalam wadah limbah medis berkode warna apakah limbah sitotoksika tersebut wajib dibuang?',
    options: [
      { key: 'A', text: 'Kantong Kuning (Limbah Infeksius)' },
      { key: 'B', text: 'Kantong Hitam (Limbah Domestik)' },
      { key: 'C', text: 'Kantong Merah (Limbah Radioaktif)' },
      { key: 'D', text: 'Kantong Cokelat (Limbah Kimia Kedaluwarsa)' },
      { key: 'E', text: 'Wadah / Kantong Khusus Berwarna Ungu (Sitotoksik)' }
    ],
    correctAnswer: 'E',
    explanation: 'Limbah sitotoksika (sisa kemoterapi kanker dan alat yang kontak) adalah limbah B3 sangat toksik yang WAJIB dimasukkan ke dalam wadah tertutup berkode WARNA UNGU berlambang sitotoksik, kemudian dimusnahkan dengan insinerator suhu tinggi minimal 1000°C - 1200°C.',
    examPitfallTip: 'Kuning untuk infeksius biasa, Cokelat untuk obat kadaluwarsa non-sitotoksik, dan Ungu KHUSUS untuk limbah sitotoksika kemoterapi!',
    referenceStandard: 'Permen LHK No. 56 Tahun 2015 & Permenkes No. 72 Tahun 2016'
  },
  {
    id: 'uktvf-q11',
    examType: 'UKTVF (Tenaga Vokasi)',
    domainName: 'Dispensing & Perhitungan Dosis Puyer',
    vignette: 'TTK di apotek menerima resep anak: R/ Parasetamol 150 mg, CTM 1 mg, m.f. pulv. dtd. No. XII. S.3.d.d.pulv. I. Di rak persediaan apotek tersedia Parasetamol tablet 500 mg dan CTM tablet 4 mg.',
    question: 'Berapakah jumlah tablet Parasetamol 500 mg dan CTM 4 mg yang harus diambil untuk meracik resep puyer tersebut?',
    options: [
      { key: 'A', text: '3 tablet Parasetamol dan 2 tablet CTM' },
      { key: 'B', text: '3.6 tablet Parasetamol dan 3 tablet CTM' },
      { key: 'C', text: '4 tablet Parasetamol dan 3 tablet CTM' },
      { key: 'D', text: '5 tablet Parasetamol dan 4 tablet CTM' },
      { key: 'E', text: '2.5 tablet Parasetamol dan 1.5 tablet CTM' }
    ],
    correctAnswer: 'B',
    explanation: 'Perhitungan: Parasetamol total = 150 mg x 12 bungkus = 1800 mg. Jumlah tablet 500 mg = 1800 mg / 500 mg = 3.6 tablet. CTM total = 1 mg x 12 bungkus = 12 mg. Jumlah tablet 4 mg = 12 mg / 4 mg = 3 tablet. Pecahan 0.6 tablet diselesaikan dengan teknik pengenceran serbuk geometris berbobot.',
    examPitfallTip: 'Tanda "dtd" (da tales doses) berarti angka dosis adalah untuk SATU bungkus, sehingga WAJIB dikalikan dengan jumlah total bungkus (No. XII = 12)!',
    referenceStandard: 'Farmakope Indonesia VI & Buku Petunjuk Praktikum Farmasetika Dasar'
  },
  {
    id: 'uktvf-q12',
    examType: 'UKTVF (Tenaga Vokasi)',
    domainName: 'Farmasetika & Beyond-Use Date (BUD)',
    vignette: 'TTK merekonstitusi sediaan sirup kering (dry syrup) Amoxicillin 125 mg/5 mL dengan menambahkan aquades matang hingga tanda batas pada botol, kemudian mengocoknya hingga homogen untuk diserahkan ke pasien pediatrik.',
    question: 'Berdasarkan standar Farmakope Indonesia VI dan USP <795>, berapakah batas masa simpan (Beyond-Use Date / BUD) sirup antibiotik rekonstitusi tersebut pada suhu kamar terkontrol?',
    options: [
      { key: 'A', text: '3 hari' },
      { key: 'B', text: '7 hari' },
      { key: 'C', text: '14 hari' },
      { key: 'D', text: '28 hari' },
      { key: 'E', text: 'Sampai tanggal Expired Date yang tercetak di botol' }
    ],
    correctAnswer: 'B',
    explanation: 'Sirup kering antibiotik oral (seperti Amoxicillin) yang direkonstitusi dengan air rentan mengalami hidrolisis cincin beta-laktam. Batas Beyond-Use Date (BUD) resmi adalah MAKSIMAL 7 HARI pada suhu ruang (15-25°C) atau hingga 14 hari bila disimpan di kulkas (suhu 2-8°C). Tanggal ED kemasan pabrik TIDAK LAGI BERLAKU setelah botol dibuka dan dilarutkan.',
    examPitfallTip: 'ED pabrik hanya berlaku saat serbuk masih tersegel rapat dan kering! Begitu dilarutkan air, hitungan BUD berlaku (maks 7-14 hari).',
    referenceStandard: 'Farmakope Indonesia VI & USP <795> Pharmaceutical Compounding Nonsterile Preparations'
  },
  {
    id: 'uktvf-q13',
    examType: 'UKTVF (Tenaga Vokasi)',
    domainName: 'Farmakognosi & Analisis Mikroskopis',
    vignette: 'TTK di bagian Quality Control laboratorium bahan alam memeriksa keaslian serbuk simplisia Zingiberis Rhizoma (Rimpang Jahe) menggunakan larutan kloralhidrat di bawah mikroskop cahaya.',
    question: 'Fragmen mikroskopis pengenal spesifik apakah yang membuktikan keaslian dan kemurnian simplisia rimpang Jahe tersebut?',
    options: [
      { key: 'A', text: 'Sel batu berdinding tebal dan rambut bintang' },
      { key: 'B', text: 'Butir pati amilum pipih/lonjong dengan hilus eksentrik dan sel minyak atsiri kuning' },
      { key: 'C', text: 'Kristal kalsium oksalat bentuk roset dan sel gabus' },
      { key: 'D', text: 'Trakea noktah dan sklerenkim berwarna merah' },
      { key: 'E', text: 'Rambut kelenjar tipe Asteraceae' }
    ],
    correctAnswer: 'B',
    explanation: 'Berdasarkan Farmakope Herbal Indonesia, fragmen pengenal mikroskopis spesifik rimpang Jahe (Zingiber officinale) adalah butir-butir pati (amilum) khas berbentuk lonjong/pipih dengan hilus di ujung (eksentrik), berkas pengangkut dengan penebalan tangga, dan sel-sel sekresi berisi damar/minyak atsiri berwarna kuning cerah.',
    examPitfallTip: 'Kunyit ditandai kurkuminoid jingga larut dalam asam sulfat, sedangkan jahe dicirikan oleh amilum khas dan sel minyak/damar pedas (gingerol).',
    referenceStandard: 'Farmakope Herbal Indonesia Edisi II (Kemenkes RI)'
  },
  {
    id: 'uktvf-q14',
    examType: 'UKTVF (Tenaga Vokasi)',
    domainName: 'Regulasi Penyimpanan Prekursor & OOT',
    vignette: 'Apotek menerima pasokan obat flu batuk sirup yang mengandung Pseudoefedrin HCl dan Dekstrometorfan HBr. Kedua zat tersebut tergolong ke dalam Prekursor Farmasi dan Obat-Obat Tertentu (OOT).',
    question: 'Bagaimanakah ketentuan standar penyimpanan sediaan obat Prekursor dan OOT tersebut di sarana pelayanan kefarmasian?',
    options: [
      { key: 'A', text: 'Disimpan di lemari pendingin chiller suhu 2-8°C' },
      { key: 'B', text: 'Disimpan bersama narkotika dalam lemari berpintu ganda' },
      { key: 'C', text: 'Disimpan di area aman yang diawasi langsung oleh Apoteker/TTK dan tidak mudah diakses publik' },
      { key: 'D', text: 'Disimpan di rak gondola swalayan depan kasir' },
      { key: 'E', text: 'Disimpan di gudang terbuka luar apotek' }
    ],
    correctAnswer: 'C',
    explanation: 'Berdasarkan Peraturan BPOM No. 24 Tahun 2021 dan Permenkes No. 73 Tahun 2016, obat Prekursor dan Obat-Obat Tertentu (OOT seperti Tramadol, Triheksifenidil, Klorpromazin, Dekstrometorfan) wajib disimpan di tempat aman di bawah pengawasan langsung Apoteker / TTK, tidak boleh ditaruh di display swalayan (OTC), dan mutasi stok dicatat rapi guna mencegah penyalahgunaan.',
    examPitfallTip: 'Prekursor & OOT TIDAK WAJIB disimpan di lemari double-lock Narkotika, tetapi MUTLAK harus di tempat aman terpisah di bawah pengawasan petugas farmasi!',
    referenceStandard: 'Peraturan BPOM No. 24 Tahun 2021 tentang Pengawasan Obat-Obat Tertentu'
  },
  {
    id: 'uktvf-q15',
    examType: 'UKTVF (Tenaga Vokasi)',
    domainName: 'Teknologi Sediaan Padat & Kerusakan Tablet',
    vignette: 'Pada proses pencetakan tablet Antasida menggunakan mesin rotary tablet press di industri farmasi, TTK menemukan sebagian besar tablet mengalami pelepasan atau pemisahan lapisan mahkota atas atau bawah badan tablet (terbelah mendatar).',
    question: 'Apakah istilah teknis farmasi untuk kerusakan fisik tablet tersebut?',
    options: [
      { key: 'A', text: 'Capping' },
      { key: 'B', text: 'Sticking' },
      { key: 'C', text: 'Mottling' },
      { key: 'D', text: 'Whiskering' },
      { key: 'E', text: 'Bridging' }
    ],
    correctAnswer: 'A',
    explanation: 'Capping adalah pemisahan sebagian atau seluruh mahkota atas/bawah tablet dari badan utama secara horizontal akibat terperangkapnya udara (air entrapment) di antara massa granul saat kompresi tinggi atau karena kadar air granul terlalu kering (<1%). Laminasi adalah pemisahan tablet menjadi beberapa lapisan horizontal.',
    examPitfallTip: 'Sticking = massa tablet menempel pada punch; Mottling = ketidakseragaman warna permukaan tablet; Capping = mahkota tablet terkelupas mendatar.',
    referenceStandard: 'Teori dan Praktik Farmasi Industri Lachman & CPOB BPOM'
  }
];

// ============================================================================
// 26. HERB-DRUG INTERACTION PRESETS (8 KASUS)
// ============================================================================
export interface HerbDrugPreset {
  herbName: string;
  modernDrug: string;
  riskLevel: 'Kritis / Fatal' | 'Mayor (Signifikan)' | 'Waspada Ketat';
  mechanism: string;
  clinicalDanger: string;
  pharmacistAdvice: string;
}

export const HERB_DRUG_PRESETS: HerbDrugPreset[] = [
  {
    herbName: 'Ginkgo Biloba (Ekstrak Daun)',
    modernDrug: 'Warfarin / Aspirin / Clopidogrel',
    riskLevel: 'Kritis / Fatal',
    mechanism: 'Ginkgolida B adalah antagonis poten Platelet-Activating Factor (PAF). Bersinergi aditif kuat dengan antikoagulan & antiplatelet menghambat agregasi trombosit.',
    clinicalDanger: 'Pendarahan intrakranial spontan, hifema bilik mata depan, hematoma retroperitoneal, dan perdarahan gastrointestinal masif.',
    pharmacistAdvice: 'Kontraindikasi bersama! Hentikan Ginkgo minimal 14 hari sebelum tindakan operasi elektif dan hindari kombinasi dengan pengencer darah.'
  },
  {
    herbName: "St. John's Wort (Hypericum perforatum)",
    modernDrug: 'Siklosporin / Kontrasepsi Oral / Tikagrelor',
    riskLevel: 'Kritis / Fatal',
    mechanism: 'Hiperforin adalah inducer kuat sitokrom hepar CYP3A4 dan pompa efluks P-glikoprotein (P-gp), memacu metabolisme dan eliminasi obat modern hingga >50-70%.',
    clinicalDanger: 'Rejeksi organ transplantasi akut (kadar siklosporin sub-terapi) atau kehamilan tidak direncanakan akibat kegagalan pil kontrasepsi hormonal.',
    pharmacistAdvice: 'KONTRAINDIKASI MUTLAK pada pasien pasca transplantasi organ atau pengguna kontrasepsi oral. Edukasikan pasien herbal tidak selalu aman!'
  },
  {
    herbName: 'Bawang Putih Konsentrat (Garlic Extract Suplemen)',
    modernDrug: 'Klopidogrel / Heparin / NSAID',
    riskLevel: 'Mayor (Signifikan)',
    mechanism: 'Alisin dan ajoene menghambat enzim siklooksigenase (COX) dan sintesis tromboksan A2, memperpanjang masa perdarahan (bleeding time) secara sistemik.',
    clinicalDanger: 'Memar hematoma spontan, epistaksis masif, dan perdarahan saluran cerna yang sulit dihentikan.',
    pharmacistAdvice: 'Konsumsi kuliner masakan normal aman; namun suplemen kapsul ekstrak bawang putih dosis tinggi wajib dihentikan 7-10 hari sebelum operasi.'
  },
  {
    herbName: 'Ginseng Panax (Korean Red Ginseng)',
    modernDrug: 'Insulin / Glibenklamid / Metformin',
    riskLevel: 'Mayor (Signifikan)',
    mechanism: 'Ginsenosida meningkatkan sekresi insulin pankreas, meningkatkan sensitivitas reseptor insulin perifer, dan menekan glukoneogenesis hepar.',
    clinicalDanger: 'Hipoglikemia berat mendadak (keringat dingin, tremor, penurunan kesadaran hingga koma neuroglikopenik tak terduga).',
    pharmacistAdvice: 'Pantau ketat gula darah mandiri (SMBG). Konseling pasien untuk waspada tanda hipoglikemia bila meminum jamu/suplemen penambah stamina.'
  },
  {
    herbName: 'Akar Manis / Licorice (Glycyrrhiza glabra)',
    modernDrug: 'Furosemid / Digoksin / Antihipertensi',
    riskLevel: 'Mayor (Signifikan)',
    mechanism: 'Asam glisiritinat menghambat enzim 11-beta-HSD2, memicu fenomena Pseudohiperaldosteronisme: retensi natrium-air masif dan pembuangan kalium hebat.',
    clinicalDanger: 'Hipokalemia berat (<2.5 mEq/L) yang memicu aritmia letal Digoksin, edema perifer, serta kegagalan kontrol tekanan darah krisis hipertensi.',
    pharmacistAdvice: 'Hindari konsumsi permen herbal atau jamu batuk mengandung akar manis pekat pada pasien gagal jantung, hipertensi, dan pengguna digoksin.'
  },
  {
    herbName: 'Kava-Kava (Piper methysticum)',
    modernDrug: 'Parasetamol / Statin / Alkohol',
    riskLevel: 'Mayor (Signifikan)',
    mechanism: 'Kavalakton menghambat sitokrom P450 hepar dan menguras cadangan glutation intraseluler hepatosit secara progresif.',
    clinicalDanger: 'Hepatotoksisitas berat, peningkatan enzim SGOT/SGPT >5-10 kali lipat, ikterus, hepatitis toksik, hingga nekrosis hepar fulminan.',
    pharmacistAdvice: 'Kava dilarang di banyak negara karena toksisitas hepar. Hindari pada pasien dengan riwayat gangguan hati atau pengguna obat hepatotoksik.'
  },
  {
    herbName: 'Kunyit Ekstrak Pekat (Kurkuminoid Dosis Tinggi)',
    modernDrug: 'Warfarin / Rivaroxaban / Dabigatran',
    riskLevel: 'Waspada Ketat',
    mechanism: 'Kurkumin menunjukkan aktivitas antikoagulan ringan dengan menghambat trombin dan memperpanjang Activated Partial Thromboplastin Time (aPTT).',
    clinicalDanger: 'Peningkatan nilai INR di atas target terapeutik, memicu risiko hematuria mikroskopis dan perdarahan gingiva gusi berulang.',
    pharmacistAdvice: 'Kunyit sebagai bumbu dapur aman. Hindari suplemen kurkumin dosis tinggi (>1-2 g/hari) bersama antikoagulan tanpa pemantauan rutin INR.'
  },
  {
    herbName: 'Jahe Konsentrat Tinggi (Zingiber Extract)',
    modernDrug: 'Nifedipin / Amlodipin / Diltiazem',
    riskLevel: 'Waspada Ketat',
    mechanism: 'Gingerol dan shogaol memiliki efek blokade kanal kalsium (voltage-dependent calcium channels) perifer secara sinergis.',
    clinicalDanger: 'Hipotensi berlebihan, pusing ortostatik saat bangkit berdiri, sinkop (pingsan), dan takikardia refleks.',
    pharmacistAdvice: 'Jeda konsumsi minuman herbal jahe kental minimal 2-3 jam dari waktu minum obat antihipertensi, dan monitor tekanan darah rutin.'
  }
];

// ============================================================================
// 27. CHRONO-DOSING PRESETS (8 KASUS)
// ============================================================================
export interface ChronoDosingPreset {
  drugName: string;
  targetCondition: string;
  optimalTime: 'Malam Hari (Sebelum Tidur)' | 'Pagi Hari (Sebelum Sarapan)' | 'Pagi Hari (Jam 07.00 - 08.00)' | 'Bersama Makan Pagi';
  circadianReason: string;
  efficacyBenefit: string;
  counselingAlert: string;
}

export const CHRONO_DOSING_PRESETS: ChronoDosingPreset[] = [
  {
    drugName: 'Simvastatin & Lovastatin',
    targetCondition: 'Dislipidemia & Hiperkolesterolemia',
    optimalTime: 'Malam Hari (Sebelum Tidur)',
    circadianReason: 'Enzim HMG-CoA Reduktase hepar memiliki ritme sirkadian dengan aktivitas biosintesis kolesterol endogen tertinggi pada tengah malam (jam 24.00 - 04.00).',
    efficacyBenefit: 'Karena waktu paruh Simvastatin pendek (2-3 jam), konsumsi malam hari memberikan kadar puncak obat tepat saat sintesis kolesterol tubuh mencapai puncaknya (reduksi LDL optimal).',
    counselingAlert: 'Atorvastatin & Rosuvastatin berwaktu paruh panjang (>14-19 jam) sehingga fleksibel diminum kapan saja, namun Simvastatin WAJIB malam hari!'
  },
  {
    drugName: 'Omeprazole & Lansoprazole (PPI)',
    targetCondition: 'GERD, Tukak Lambung & Dispepsia',
    optimalTime: 'Pagi Hari (Sebelum Sarapan)',
    circadianReason: 'Jumlah pompa proton H+/K+ ATPase di kanalikuli sel parietal lambung dalam kondisi teraktivasi paling banyak berada pada pagi hari pasca puasa semalaman.',
    efficacyBenefit: 'PPI adalah prodrug yang butuh lingkungan asam kanalikuli aktif untuk berubah menjadi sulfonamid aktif, menghasilkan supresi asam lambung siang & malam hingga 80-90%.',
    counselingAlert: 'Wajib diminum 30 - 60 menit SEBELUM sarapan pagi. Jika diminum sesudah makan, efektivitas penekanan asam lambung anjlok drastis!'
  },
  {
    drugName: 'Metilprednisolon & Prednison',
    targetCondition: 'Antiinflamasi, Asma & Autoimun',
    optimalTime: 'Pagi Hari (Jam 07.00 - 08.00)',
    circadianReason: 'Sekresi fisiologis hormon kortisol endogen oleh kelenjar adrenal tubuh berpuncak pada jam 06.00 - 08.00 pagi dan terendah pada tengah malam.',
    efficacyBenefit: 'Pemberian kortikosteroid eksogen pagi hari meniru ritme alami tubuh, sehingga meminimalkan risiko supresi aksis Hipotalamus-Pituitari-Adrenal (HPA) dan atrofi adrenal.',
    counselingAlert: 'Wajib diminum segera sesudah sarapan pagi untuk mencegah iritasi lambung. Hindari minum malam karena dapat memicu insomnia dan supresi adrenal berat.'
  },
  {
    drugName: 'Ramipril & Candesartan (ACEi / ARB)',
    targetCondition: 'Hipertensi Primer & Pencegahan Kardiovaskular',
    optimalTime: 'Malam Hari (Sebelum Tidur)',
    circadianReason: 'Ritme sirkadian tekanan darah pada pasien risiko tinggi mengalami fenomena Non-Dipping (tensi tidak turun saat tidur) dan lonjakan tensi pagi hari (Morning Surge).',
    efficacyBenefit: 'Studi kronoterapi (Hygia Project) membuktikan konsumsi antihipertensi sebelum tidur malam menurunkan risiko stroke pagi, infark miokard, dan kematian kardiovaskular >45%.',
    counselingAlert: 'Konsultasikan dengan dokter; jika pasien rentan pusing malam, dosis dapat diatur. Pastikan pasien bangun dari ranjang secara perlahan.'
  },
  {
    drugName: 'Levotiroksin (Euthyrox)',
    targetCondition: 'Hipotiroidisme & Tiroiditis Hashimoto',
    optimalTime: 'Pagi Hari (Sebelum Sarapan)',
    circadianReason: 'Absorpsi Levotiroksin di jejunum dan ileum sangat rentan terganggu oleh keberadaan makanan lambung, kalsium, zat besi, dan pH asam.',
    efficacyBenefit: 'Diminum saat perut kosong sempurna memastikan bioavailabilitas stabil dan menghindari fluktuasi kadar TSH serum yang sulit dikontrol.',
    counselingAlert: 'Minum tepat saat bangun tidur dengan 1 gelas air putih penuh, minimal 30-60 menit sebelum sarapan, teh, susu, atau kopi pagi!'
  },
  {
    drugName: 'Furosemid (Lasix)',
    targetCondition: 'Edema Jantung, Asites & Gangguan Ginjal',
    optimalTime: 'Pagi Hari (Sebelum Sarapan)',
    circadianReason: 'Onset diuretik loop sangat cepat (30-60 menit) dengan durasi kerja 6 jam ("Lasts Six hours" = Lasix).',
    efficacyBenefit: 'Memaksimalkan pengeluaran kelebihan cairan di siang hari saat pasien aktif beraktivitas, menjaga kestabilan hemodinamik tubuh.',
    counselingAlert: 'JANGAN PERNAH diminum malam hari! Menghindari nokturia (terbangun kencing malam), gangguan tidur, dan risiko lansia jatuh terpeleset di kamar mandi.'
  },
  {
    drugName: 'Alendronat (Fosamax) & Risedronat',
    targetCondition: 'Osteoporosis Pascamenopause & Senilis',
    optimalTime: 'Pagi Hari (Sebelum Sarapan)',
    circadianReason: 'Bioavailabilitas oral bifosfonat sangat rendah (< 1%). Makanan, ion kalsium susu, dan mineral mengikat bifosfonat menjadi kelat tak terabsorpsi.',
    efficacyBenefit: 'Absorpsi maksimal pada lambung kosong dan mengurangi waktu kontak zat iritatif dengan mukosa esofagus.',
    counselingAlert: 'Wajib diminum dengan 1 gelas penuh air putih biasa (BUKAN air mineral), dan PASIEN WAJIB TETAP POSISI TEGAK (duduk/berdiri) minimal 30 menit (dilarang berbaring)!'
  },
  {
    drugName: 'Cetirizine / CTM (Antihistamin H1)',
    targetCondition: 'Rinitis Alergi, Urtikaria & Gatal Biduran',
    optimalTime: 'Malam Hari (Sebelum Tidur)',
    circadianReason: 'Pelepasan histamin jaringan dan intensitas keluhan gatal/urtikaria secara alami memuncak pada malam hari hingga dini hari.',
    efficacyBenefit: 'Efek puncak antihistamin bekerja saat gatal terberat dan memanfaatkan efek kantuknya (sedasi) untuk membantu pasien tidur nyenyak.',
    counselingAlert: 'Diminum 30 menit sebelum tidur malam. Ingatkan pasien untuk tidak mengemudikan kendaraan atau mengoperasikan mesin keesokan paginya.'
  }
];

// ============================================================================
// 28. PPRA WHO AWARE ANTIBIOTIC PRESETS (8 KASUS)
// ============================================================================
export interface PpraAwarePreset {
  antibioticName: string;
  awareCategory: 'ACCESS (Lini Pertama Bebas Akses)' | 'WATCH (Pengawasan Ketat Rawat Inap)' | 'RESERVE (Amunisi Terakhir Kuman MDR)';
  targetInfection: string;
  spectrumMechanism: string;
  stewardshipRule: string;
  badgeColor: 'emerald' | 'amber' | 'rose';
}

export const PPRA_AWARE_PRESETS: PpraAwarePreset[] = [
  {
    antibioticName: 'Amoxicillin & Ampicillin',
    awareCategory: 'ACCESS (Lini Pertama Bebas Akses)',
    targetInfection: 'Faringitis Akut, Otitis Media, Pneumonia Komunitas Ringan, Infeksi Saluran Kemih Ringan',
    spectrumMechanism: 'Aminopenisilin spektrum sempit-sedang, menghambat sintesis dinding sel bakteri peptidoglikan (PBP). Memiliki potensi resistensi relatif rendah.',
    stewardshipRule: 'Tersedia di faskes primer (Puskesmas/Klinik). Target penggunaan antibiotik Access minimal 60% dari total konsumsi nasional sesuai target WHO PPRA.',
    badgeColor: 'emerald'
  },
  {
    antibioticName: 'Cefazolin Injeksi IV',
    awareCategory: 'ACCESS (Lini Pertama Bebas Akses)',
    targetInfection: 'Profilaksis Bedah Pra-Operasi Bersih/Terkontaminasi & Infeksi Kulit Jaringan Lunak',
    spectrumMechanism: 'Sefalosporin generasi ke-1 dengan aktivitas bakterisidal sangat kuat terhadap Staphylococcus aureus sensitif metisilin (MSSA) dan Streptococcus.',
    stewardshipRule: 'Standar emas profilaksis bedah dosis tunggal 30-60 menit sebelum insisi kulit; hemat penggunaan sefalosporin generasi ke-3 untuk mencegah resistensi kuman.',
    badgeColor: 'emerald'
  },
  {
    antibioticName: 'Ceftriaxone & Cefotaxime',
    awareCategory: 'WATCH (Pengawasan Ketat Rawat Inap)',
    targetInfection: 'Pneumonia Rawat Inap (CAP Sedang-Berat), Meningitis Bakterial, Sepsis, Demam Tifoid',
    spectrumMechanism: 'Sefalosporin generasi ke-3 spektrum luas. Risiko sangat tinggi memicu seleksi kuman penghasil Extended-Spectrum Beta-Lactamase (ESBL) & Clostridioides difficile.',
    stewardshipRule: 'Hanya untuk rawat inap dengan indikasi klinis jelas. Evaluasi terapi (antibiotic time-out) dalam 48-72 jam untuk rencana de-eskalasi atau switch oral.',
    badgeColor: 'amber'
  },
  {
    antibioticName: 'Ciprofloxacin & Levofloxacin',
    awareCategory: 'WATCH (Pengawasan Ketat Rawat Inap)',
    targetInfection: 'Pielonefritis Akut, Pneumonia Nosokomial, Infeksi Intraabdomen Berat',
    spectrumMechanism: 'Fluorokuinolon spektrum luas penghambat DNA girase & topoisomerase IV. Berisiko resistensi silang cepat, perpanjangan interval QTc, dan tendinitis ruptur achilles.',
    stewardshipRule: 'Dilarang keras untuk batuk pilek biasa/swamedikasi! Wajib batasi penggunaan empiris tanpa bukti infeksi bakteri berat atau kuman sensitif.',
    badgeColor: 'amber'
  },
  {
    antibioticName: 'Meropenem & Imipenem',
    awareCategory: 'WATCH (Pengawasan Ketat Rawat Inap)',
    targetInfection: 'Sepsis Berat Nosokomial, Syok Septik, Infeksi Terbukti Kuman Penghasil ESBL',
    spectrumMechanism: 'Karbapenem ultra-broad spectrum tahan terhadap hidrolisis sebagian besar beta-laktamase termasuk ESBL dan AmpC beta-laktamase.',
    stewardshipRule: 'Prior-authorization (Persetujuan Awal Komite PPRA / Dokter Spesialis Farmakologi Klinis). Cegah timbulnya resistensi Karbapenem-Resistant Enterobacteriaceae (CRE).',
    badgeColor: 'amber'
  },
  {
    antibioticName: 'Vancomycin IV',
    awareCategory: 'WATCH (Pengawasan Ketat Rawat Inap)',
    targetInfection: 'Infeksi Berat Methicillin-Resistant Staphylococcus aureus (MRSA) & Endokarditis Infektif',
    spectrumMechanism: 'Glikopeptida bakterisidal yang mengikat ujung D-Ala-D-Ala prekursor dinding sel. Membutuhkan pemantauan kadar terapeutik ketat (TDM).',
    stewardshipRule: 'Wajib monitoring Therapeutic Drug Monitoring (TDM target AUC/MIC 400-600 atau trough 15-20 mcg/mL) untuk mencegah kegagalan terapi dan nefrotoksisitas.',
    badgeColor: 'amber'
  },
  {
    antibioticName: 'Colistin (Polymyxin E)',
    awareCategory: 'RESERVE (Amunisi Terakhir Kuman MDR)',
    targetInfection: 'Pneumonia Ventilator (VAP) & Sepsis akibat Carbapenem-Resistant Acinetobacter baumannii / CRE',
    spectrumMechanism: 'Polipeptida kationik yang merusak membran sel luar bakteri Gram-negatif melalui efek deterjen. Indeks terapi sangat sempit dengan nefrotoksisitas tinggi.',
    stewardshipRule: 'PILIHAN TERAKHIR (LAST RESORT)! Hanya boleh dikeluarkan atas persetujuan Komite PPRA rumah sakit untuk infeksi yang terbukti resisten terhadap semua opsi lain.',
    badgeColor: 'rose'
  },
  {
    antibioticName: 'Linezolid',
    awareCategory: 'RESERVE (Amunisi Terakhir Kuman MDR)',
    targetInfection: 'Pneumonia Nosokomial MRSA & Infeksi Bakteri Gram-Positif Resisten Vankomisin (VRE)',
    spectrumMechanism: 'Oksazolidinon sintetis penghambat subunit ribosom 50S (tahap inisiasi translasi protein). Risiko mielosupresi trombositopenia dan neuropati optik pada pemakaian >14 hari.',
    stewardshipRule: 'Amunisi cadangan emas terakhir untuk kuman Gram positif refrakter. Pantau hitung darah lengkap berkala mingguan (risiko supresi sumsum tulang).',
    badgeColor: 'rose'
  }
];

// ============================================================================
// 29. TDM (THERAPEUTIC DRUG MONITORING) PRESETS (8 KASUS)
// ============================================================================
export interface TdmDrugsPreset {
  drugName: string;
  narrowRange: string;
  samplingTime: string;
  toxicSymptoms: string;
  monitoringParameter: string;
  riskFactor: string;
}

export const TDM_DRUGS_PRESETS: TdmDrugsPreset[] = [
  {
    drugName: 'Digoksin (Glikosida Jantung)',
    narrowRange: '0.5 - 0.9 ng/mL (Gagal Jantung) | 0.8 - 2.0 ng/mL (Fibrilasi Atrium)',
    samplingTime: 'Minimal 6 - 8 jam pasca dosis oral (fase distribusi tuntas) atau tepat sebelum dosis berikutnya.',
    toxicSymptoms: 'Anoreksia, mual, muntah profus, xantopsia (melihat halo kuning-kehijauan), bradiaritmia, blok AV, dan PVC ventrikel letal.',
    monitoringParameter: 'Kadar serum Digoksin, Kalium serum, Magnesium, dan Kreatinin ginjal secara rutin.',
    riskFactor: 'Hipokalemia (<3.5 mEq/L), hipomagnesemia, penurunan eGFR ginjal, usia geriatri, interaksi Amiodaron/Verapamil.'
  },
  {
    drugName: 'Fenitoin (Dilantin)',
    narrowRange: '10 - 20 mcg/mL (Kadar Total) | 1 - 2 mcg/mL (Kadar Bebas / Free)',
    samplingTime: 'Kondisi tunak (steady-state, hari ke 7-10), sampel palung (trough) tepat sebelum dosis harian berikutnya.',
    toxicSymptoms: 'Nistagmus horizontal (>20 mcg/mL), ataksia sempoyongan (>30 mcg/mL), disartria, ensefalopati koma (>40 mcg/mL).',
    monitoringParameter: 'Kadar Fenitoin total & bebas, Albumin serum (Gunakan Rumus Sheiner-Tozer jika hipoalbuminemia), SGOT/SGPT.',
    riskFactor: 'Farmakokinetika non-linear Michaelis-Menten (kenaikan dosis kecil memicu lonjakan kadar serum eksponensial), hipoalbuminemia malnutrisi.'
  },
  {
    drugName: 'Litium Karbonat',
    narrowRange: '0.6 - 1.2 mEq/L (Fase Mania Akut) | 0.6 - 0.8 mEq/L (Pemeliharaan Bipolar)',
    samplingTime: 'Tepat 12 jam (± 30 menit) pasca dosis terakhir malam hari dalam kondisi steady-state (setelah 4-5 hari).',
    toxicSymptoms: 'Tremor kasar tangan, kelemahan otot, ataksia, poliuria-polidipsia, kejang mioklonik, delirium, dan koma toksik.',
    monitoringParameter: 'Serum Litium 12-jam, Natrium serum, Fungsi Ginjal (BUN/Kreatinin), dan Fungsi Tiroid (TSH).',
    riskFactor: 'Deplesi natrium (diet rendah garam, dehidrasi), interaksi dengan NSAID, ACE Inhibitor, dan Diuretik Tiazid.'
  },
  {
    drugName: 'Karbamazepin (Tegretol)',
    narrowRange: '4 - 12 mcg/mL (Rentang Terapeutik Efektif)',
    samplingTime: 'Sampel palung (trough level) diambil tepat di pagi hari sebelum jadwal konsumsi dosis pertama.',
    toxicSymptoms: 'Diplopia (penglihatan ganda), pusing melayang berat, kantuk ekstrem, ataksia, lekopenia, dan hiponatremia sekunder SIADH.',
    monitoringParameter: 'Kadar serum Karbamazepin, Darah Lengkap (leukosit & trombosit), Natrium serum, dan Uji Enzim Hati.',
    riskFactor: 'Fenomena Auto-Induksi Enzim CYP3A4 (klirens obat meningkat sendiri setelah 2-4 minggu pemakaian rutin, membutuhkan re-titrasi dosis).'
  },
  {
    drugName: 'Asam Valproat / Natrium Divalproat',
    narrowRange: '50 - 100 mcg/mL (Sebagian refrakter hingga 125 mcg/mL)',
    samplingTime: 'Sampel palung (trough) diambil tepat sebelum pemberian dosis pagi hari dalam kondisi tunak (hari ke 3-4).',
    toxicSymptoms: 'Tremor postural, sedasi berat, alopesia rambut rontok, trombositopenia, hiperamonemia ensefalopati, dan hepatotoksisitas fatal.',
    monitoringParameter: 'Kadar Valproat serum, Trombosit, Kadar Amonia darah (bila letargi/bingung), dan SGOT/SGPT.',
    riskFactor: 'Kombinasi dengan Karbapenem (Meropenem menurunkan kadar valproat hingga >80% dalam 24 jam memicu kejang berulang), disfungsi hati.'
  },
  {
    drugName: 'Teofilin / Aminofilin',
    narrowRange: '5 - 15 mcg/mL (Rentang Modern Aman) | Toksik > 20 mcg/mL',
    samplingTime: 'Trough sebelum dosis berikutnya (atau 4 jam pasca dosis sediaan lepas lambat / sustained release).',
    toxicSymptoms: 'Mual muntah persisten, takikardia sinus, takiaritmia ventrikel refrakter, hipokalemia, agitasi, dan kejang letal.',
    monitoringParameter: 'Kadar serum Teofilin, Elektrolit (Kalium), EKG jantung ritme, dan Laju Pernapasan.',
    riskFactor: 'Merokok menginduksi CYP1A2 (butuh dosis lebih tinggi), sedangkan Ciprofloxacin, Eritromisin, dan Simetidin menghambat CYP1A2 memicu lonjakan toksisitas.'
  },
  {
    drugName: 'Gentamisin & Amikasin (Aminoglikosida)',
    narrowRange: 'Palung (Trough) < 1 mcg/mL | Puncak (Peak) 5 - 10 mcg/mL (Konvensional)',
    samplingTime: 'Trough: 30 menit sebelum dosis berikutnya. Peak: 30 menit setelah infus IV 30 menit selesai.',
    toxicSymptoms: 'Nekrosis tubular akut ginjal (peningkatan serum kreatinin, oliguria), ototoksisitas vestibular & koklear (tinitus, tuli permanen).',
    monitoringParameter: 'Kadar Trough dan Peak serum, Serum Kreatinin harian, Klirens Ginjal Cockcroft-Gault, dan Uji Audiometri.',
    riskFactor: 'Durasi terapi > 7-10 hari, deplesi volume cairan dehidrasi, usia lanjut, kombinasi dengan Vankomisin / Furosemid.'
  },
  {
    drugName: 'Vankomisin IV Infus',
    narrowRange: 'Trough 15 - 20 mcg/mL (Sepsis, MRSA, Meningitis) | Target AUC24/MIC 400 - 600',
    samplingTime: 'Sampel palung (trough level) diambil tepat 30 menit sebelum pemberian dosis ke-4 atau ke-5 (steady state).',
    toxicSymptoms: 'Nefrotoksisitas akut (kenaikan serum kreatinin > 0.5 mg/dL), Ototoksisitas, dan Red Man Syndrome (flushing eritema leher bila infus terlalu cepat).',
    monitoringParameter: 'Kadar Trough Vankomisin, Serum Kreatinin harian, Laju Aliran Infus (wajib >= 60 menit per 1 gram).',
    riskFactor: 'Dosis > 4 g/hari, penurunan laju filtrasi glomerulus, kombinasi dengan Piperasilin-Tazobaktam atau Aminoglikosida.'
  }
];

// ============================================================================
// 30. OFF-LABEL CLINICAL EBM PRESETS (14 KASUS POPULER)
// ============================================================================
export interface OffLabelPreset {
  id: string;
  drugName: string;
  genericName: string;
  drugClass: string;
  onLabelIndication: string;
  offLabelIndication: string;
  clinicalDosage: string;
  evidenceBasis: string;
  pharmacologicalRationale: string;
  safetyMonitoring: string;
}

export const OFF_LABEL_PRESETS: OffLabelPreset[] = [
  {
    id: 'offlabel-spironolactone',
    drugName: 'Spironolactone',
    genericName: 'Spironolactone',
    drugClass: 'Antagonis Aldosteron / Diuretik Hemat Kalium',
    onLabelIndication: 'Hipertensi esensial, edema refrakter sirosis hepatis, gagal jantung kongestif (HFrEF).',
    offLabelIndication: 'Acne Vulgaris Hormonal pada Wanita Dewasa & Hirsutisme Terkait PCOS.',
    clinicalDosage: '25 - 100 mg per oral sekali sehari (dapat dititrasi hingga 200 mg/hari). Butuh 8-12 minggu untuk melihat respons resolusi lesi jerawat optimal.',
    evidenceBasis: 'Pedoman American Academy of Dermatology (AAD 2024 Guidelines) - Rekomendasi Kuat Level A.',
    pharmacologicalRationale: 'Memblokade reseptor androgen intraseluler di kelenjar sebasea kulit dan menghambat enzim 17-alfa-hidroksilase, menurunkan produksi sebum berminyak berlebih yang dipicu fluktuasi hormon androgen.',
    safetyMonitoring: 'Khusus pasien wanita (dilarang pada pria karena memicu ginekomastia). Pantau kalium serum rutin, hindari suplemen kalium, dan wajib kontrasepsi (teratogenik feminisasi janin laki-laki).'
  },
  {
    id: 'offlabel-letrozole',
    drugName: 'Letrozole (Femara)',
    genericName: 'Letrozole',
    drugClass: 'Inhibitor Aromatase Non-Steroid Generasi III',
    onLabelIndication: 'Terapi ajuvan lini pertama kanker payudara stadium awal/lanjut reseptor hormon positif pascamenopause.',
    offLabelIndication: 'Induksi Ovulasi Lini Pertama pada Sindrom Ovarium Polikistik (PCOS) & Infertilitas Anovulasi.',
    clinicalDosage: '2.5 mg per oral sekali sehari selama 5 hari berturut-turut pada hari ke-3 hingga ke-7 siklus haid. Dosis dapat dinaikkan ke 5 mg/hari (maks 7.5 mg) jika ovulasi belum tercapai.',
    evidenceBasis: 'Pedoman Konsensus Internasional PCOS (ESHRE, ASRM & ACOG) - Rekomendasi Lini Pertama Mengungguli Klomifen Sitrat.',
    pharmacologicalRationale: 'Menghambat biosintesis estrogen dari androgen di ovarium, menekan umpan balik negatif estrogen ke hipotalamus sehingga memicu lonjakan sekresi FSH endogen untuk mematangkan folikel dominan.',
    safetyMonitoring: 'Menghasilkan angka kelahiran hidup (live birth rate) lebih tinggi dan risiko kehamilan multipel (kembar) lebih rendah dibanding Klomifen. Diberikan hanya setelah konfirmasi tes kehamilan (beta-hCG) negatif.'
  },
  {
    id: 'offlabel-propranolol',
    drugName: 'Propranolol',
    genericName: 'Propranolol Hydrochloride',
    drugClass: 'Non-Selective Beta-Adrenergic Blocker',
    onLabelIndication: 'Hipertensi esensial, angina pektoris, aritmia supraventrikel, profilaksis migren.',
    offLabelIndication: 'Performance Anxiety (Demam Panggung / Tremor Situasional) & Hemangioma Proliferatif Bayi.',
    clinicalDosage: 'Demam Panggung: 10 - 40 mg per oral diminum 30 - 60 menit sebelum presentasi/ujian. Hemangioma: 1 - 3 mg/kg/hari terbagi 2 dosis bersama asupan susu.',
    evidenceBasis: 'Pedoman American Academy of Pediatrics (AAP) untuk Hemangioma & Konsensus Psikiatri untuk Ansietas Situasional.',
    pharmacologicalRationale: 'Blokade reseptor beta-1 dan beta-2 adrenergik perifer menghambat stimulasi otonom simpatis (palpitasi, takikardia, tremor tangan halus, suara bergetar) tanpa memicu rasa kantuk atau sedasi tumpul.',
    safetyMonitoring: 'Kontraindikasi mutlak pada pasien riwayat Asma Bronkial atau PPOK aktif (memicu bronkospasme berat fatal). Jangan diminum jika denyut nadi istirahat < 55 denyut per menit (bradikardia).'
  },
  {
    id: 'offlabel-sildenafil',
    drugName: 'Sildenafil (Viagra / Revatio)',
    genericName: 'Sildenafil Citrate',
    drugClass: 'Inhibitor Fosfodiesterase Tipe 5 (PDE-5)',
    onLabelIndication: 'Disfungsi ereksi pada pria dewasa dan Hipertensi Arteri Pulmonal (PAH).',
    offLabelIndication: 'Ketebalan Endometrium Kurang (Thin Endometrium) pada Program Bayi Tabung (IVF) & Fenomena Raynaud Berat.',
    clinicalDosage: 'IVF Thin Endometrium: 25 mg supositoria intravagina 4 kali sehari (tiap 6 jam) dari hari ke-3 hingga ke-13 siklus pra-transfer embrio. Fenomena Raynaud: 20 mg oral 3 kali sehari.',
    evidenceBasis: 'Rekomendasi Uji Klinis ESHRE & ASRM untuk Reseptivitas Endometrium; Konsensus EULAR untuk Fenomena Raynaud.',
    pharmacologicalRationale: 'Inhibisi pemecahan cGMP intraseluler memicu relaksasi otot polos arteriola uterina, meningkatkan aliran darah subendometrium untuk merangsang pertumbuhan epitel mencapai ketebalan trilaminar >= 7-8 mm.',
    safetyMonitoring: 'KONTRAINDIKASI MUTLAK bersamaan dengan nitrat organik (ISDN / Nitrogliserin) karena risiko kolaps kardiovaskular fatal. Pantau keluhan pusing, sakit kepala, dan hipotensi postural.'
  },
  {
    id: 'offlabel-tranexamic-acid',
    drugName: 'Asam Traneksamat',
    genericName: 'Tranexamic Acid',
    drugClass: 'Antifibrinolitik Sintetik (Analog Asam L-Lisin)',
    onLabelIndication: 'Perdarahan abnormal akibat fibrinolisis lokal atau sistemik, hemostasis pasca cabut gigi hemofilia.',
    offLabelIndication: 'Melasma Hiperpigmentasi Refrakter Wajah & Perdarahan Pasca Persalinan (PPH).',
    clinicalDosage: 'Melasma: 250 mg per oral 2 kali sehari selama 8-12 minggu. PPH: 1.000 mg IV infus dalam 100 mL NaCl 0.9% diberikan dalam 3 jam pertama pasca persalinan.',
    evidenceBasis: 'Rekomendasi EBM WHO (WOMAN Trial) untuk PPH; Journal of the American Academy of Dermatology (JAAD) untuk Melasma.',
    pharmacologicalRationale: 'Pada melasma: menghambat aktivator plasminogen di keratinosit, menurunkan pelepasan asam arakidonat dan prostaglandin yang merangsang melanosit. Pada PPH: memblok lisis bekuan fibrin hemostatik uterus.',
    safetyMonitoring: 'Skrining ketat riwayat Deep Vein Thrombosis (DVT), emboli paru, dan penyakit tromboemboli aktif. Evaluasi fungsi ginjal dan lakukan uji ketajaman visual bila terapi melasma melebihi 3 bulan.'
  },
  {
    id: 'offlabel-clonidine',
    drugName: 'Klonidin (Catapres)',
    genericName: 'Clonidine Hydrochloride',
    drugClass: 'Agonis Selektif Reseptor Alfa-2 Adrenergik Sentral',
    onLabelIndication: 'Hipertensi esensial resisten dan urgensi krisis hipertensi.',
    offLabelIndication: 'Sindrom Putus Zat Opioid Akut (Opioid Withdrawal) & ADHD Anak dengan Gangguan Tidur / Tics.',
    clinicalDosage: 'Opioid Withdrawal: Inisiasi 0.1 - 0.2 mg oral tiap 4 - 6 jam sesuai skor Clinical Opiate Withdrawal Scale (COWS), maks 1.2 mg/hari, dititrasi turun bertahap selama 4 - 7 hari.',
    evidenceBasis: 'Pedoman American Society of Addiction Medicine (ASAM) & American Academy of Child and Adolescent Psychiatry (AACAP).',
    pharmacologicalRationale: 'Stimulasi reseptor alfa-2 presinaps di locus coeruleus batang otak menekan pelepasan norepinefrin sentral, meredakan gejala badai simpatis (takikardia, keringat dingin berlebih, tremor, lakrimasi, gelisah, kram perut).',
    safetyMonitoring: 'Pantau ketat tekanan darah dan denyut jantung (risiko bradikardia dan hipotensi ortostatik). JANGAN menghentikan obat mendadak (risiko Rebound Hypertension krisis fatal).'
  },
  {
    id: 'offlabel-mgso4',
    drugName: 'Magnesium Sulfat (MgSO4)',
    genericName: 'Magnesium Sulfate Heptahydrate',
    drugClass: 'Antikonvulsan Mineral / Antagonis Reseptor NMDA',
    onLabelIndication: 'Pencegahan dan pengendalian kejang pada Preeklampsia Berat (PEB) dan Eklamsia kebidanan.',
    offLabelIndication: 'Neuroproteksi Janin Prematur terhadap Cerebral Palsy (Usia Kehamilan < 32 Minggu).',
    clinicalDosage: 'Dosis inisiasi / loading 4 gram IV (larutan 20%) diinfuskan dalam 20 - 30 menit, dilanjutkan dosis rumatan 1 gram/jam IV kontinu selama 24 jam atau hingga persalinan terjadi.',
    evidenceBasis: 'Pedoman Bersama ACOG, POGI, SOGC, dan Organisasi Kesehatan Dunia (WHO 2023 Guidelines).',
    pharmacologicalRationale: 'Magnesium menstabilkan membran neuronal janin, memblokade eksitotoksisitas ion kalsium via reseptor NMDA, merelaksasikan arteriol serebral janin, serta menekan sitokin inflamasi mikroglial otak intrauterin.',
    safetyMonitoring: 'Syarat mutlak pemberian: refleks patella positif kuat, frekuensi napas >= 16 kali/menit, produksi urin >= 30 mL/jam. Selalu sediakan antidot Kalsium Glukonat 10% di dekat ranjang pasien.'
  },
  {
    id: 'offlabel-colchicine',
    drugName: 'Kolkisin Dosis Rendah (0.5 mg)',
    genericName: 'Colchicine',
    drugClass: 'Antiinflamasi Alkaloid Tubulin',
    onLabelIndication: 'Pengobatan serangan gout arthritis akut dan profilaksis supresif asam urat kronis.',
    offLabelIndication: 'Prevensi Sekunder Penyakit Jantung Koroner (PJK) & Penurunan Risiko Infark Miokard / Stroke.',
    clinicalDosage: '0.5 mg per oral sekali sehari diminum jangka panjang (biasanya dikombinasikan dengan terapi statin dan antiplatelet standar).',
    evidenceBasis: 'Uji Klinis Acak Terkontrol Landmark LoDoCo2 & COLCOT Trials; Rekomendasi FDA 2023 & ESC Cardiovascular Guidelines.',
    pharmacologicalRationale: 'Menghambat polimerisasi mikrotubulus leukosit dan menekan kompleks inflamasom NLRP3 di dinding vaskular, menurunkan pelepasan sitokin IL-1 beta dan hs-CRP serta menstabilkan plak aterosklerosis dari ruptur.',
    safetyMonitoring: 'Hindari kombinasi dengan inhibitor kuat CYP3A4 atau P-gp (Klaritromisin, Ketokonazol) karena risiko toksisitas fatal. Kontraindikasi pada gangguan ginjal atau hati berat (CrCl < 30 mL/menit).'
  },
  {
    id: 'offlabel-captopril',
    drugName: 'Captopril',
    genericName: 'Captopril',
    drugClass: 'Inhibitor Enzim Pengonversi Angiotensin (ACE-Inhibitor)',
    onLabelIndication: 'Hipertensi esensial, gagal jantung kronis, nefropati diabetik proteinuria pada DM Tipe 1.',
    offLabelIndication: 'Krisis Ginjal Skleroderma (Scleroderma Renal Crisis / SRC) - Terapi Lini Pertama Penyelamat Jiwa.',
    clinicalDosage: 'Inisiasi segera 6.25 - 12.5 mg per oral tiap 8 jam, dititrasi cepat tiap 24 jam hingga 25 - 50 mg tiap 8 jam (target sistolik turun bertahap tanpa hipoperfusi organ).',
    evidenceBasis: 'Pedoman American College of Rheumatology (ACR) & EULAR Scleroderma Guidelines - Mortalitas turun dari 76% ke <15%.',
    pharmacologicalRationale: 'Onset kerja cepat (short-acting) memblokade lonjakan angiotensin II patologis yang memicu vasokonstriksi maligna pada arteriol ginjal, memulihkan mikrosirkulasi renal dan menyelamatkan fungsi nefron.',
    safetyMonitoring: 'Pantau ketat tekanan darah sistolik dan serum kalium/kreatinin serial. Hindari penggunaan kortikosteroid dosis tinggi (>15 mg prednison) pada pasien skleroderma karena memicu presipitasi krisis SRC.'
  },
  {
    id: 'offlabel-losartan',
    drugName: 'Losartan',
    genericName: 'Losartan Potassium',
    drugClass: 'Angiotensin II Receptor Blocker (ARB)',
    onLabelIndication: 'Hipertensi, nefropati diabetik pada DM Tipe 2 dengan peningkatan kreatinin serum dan proteinuria.',
    offLabelIndication: 'Hipertensi Komorbid Hiperurisemia / Gout & Sindrom Marfan (Pencegahan Dilatasi Aorta).',
    clinicalDosage: '50 - 100 mg per oral sekali sehari pada pagi atau malam hari (sebagai monoterapi atau kombinasi antihipertensi).',
    evidenceBasis: 'Pedoman American College of Rheumatology (ACR Gout Guidelines) & Bukti Uji Klinis Terkontrol RENAAL/LIFE.',
    pharmacologicalRationale: 'Selain memblok reseptor AT1 vaskular, Losartan memiliki metabolit unik yang secara spesifik menghambat transporter URAT1 (Urate Anion Transporter 1) di tubulus ginjal, memicu ekskresi asam urat via urin (efek urikosurik).',
    safetyMonitoring: 'Menurunkan kadar asam urat serum rata-rata 1 - 2 mg/dL secara alami tanpa obat tambahan. Pantau kadar kalium darah dan hidrasi cairan cukup (minimal 2 liter air/hari) untuk mencegah presipitasi kristal urat di ginjal.'
  },
  {
    id: 'offlabel-amitriptyline',
    drugName: 'Amitriptilin Dosis Rendah',
    genericName: 'Amitriptyline Hydrochloride',
    drugClass: 'Antidepresan Trisiklik (TCA)',
    onLabelIndication: 'Episode depresi mayor pada orang dewasa.',
    offLabelIndication: 'Profilaksis Migrain Kronis, Nyeri Neuropatik Perifer, Fibromialgia & Insomnia Kronis.',
    clinicalDosage: 'Inisiasi 10 - 25 mg per oral sekali sehari diminum 1 - 2 jam sebelum tidur malam. Dosis dapat dititrasi naik bertahap 25 - 50 mg/hari (maksimal 75 mg/hari pada kasus nyeri kronis).',
    evidenceBasis: 'Pedoman American Academy of Neurology (AAN Level A) untuk Migren & EFNS Guidelines untuk Neuropathic Pain.',
    pharmacologicalRationale: 'Dosis rendah analgesik bekerja independen dari efek antidepresan: menghambat reuptake serotonin dan noradrenalin di jalur modulasi nyeri desenden medula spinalis serta menstabilkan kanal natrium neuronal.',
    safetyMonitoring: 'Efek samping antikolinergik: mulut kering, konstipasi, pandangan kabur, dan rasa mengantuk di pagi hari. Hati-hati pada geriatri (Kriteria Beers: risiko jatuh & konfusi). Hindari pada riwayat glaukoma sudut tertutup.'
  },
  {
    id: 'offlabel-metformin',
    drugName: 'Metformin',
    genericName: 'Metformin Hydrochloride',
    drugClass: 'Biguanida (Sensitizer Insulin)',
    onLabelIndication: 'Diabetes Melitus Tipe 2 pada dewasa dan anak usia >= 10 tahun.',
    offLabelIndication: 'Non-Alcoholic Fatty Liver Disease (NAFLD / NASH) & Regulasi Siklus Haid pada PCOS.',
    clinicalDosage: 'Inisiasi 500 mg per oral sekali sehari bersama makan malam, ditingkatkan bertahap tiap 1-2 minggu hingga 1.500 - 2.000 mg/hari terbagi 2-3 dosis bersama makanan.',
    evidenceBasis: 'Pedoman Konsensus Praktis AASLD untuk NAFLD & Pedoman ESHRE/ASRM untuk Infertilitas Endokrin PCOS.',
    pharmacologicalRationale: 'Aktivasi enzim AMPK (AMP-activated protein kinase) di hepatosit menekan lipogenesis de novo, memperbaiki sensitivitas insulin perifer, dan menurunkan akumulasi trigliserida hepatik serta kadar enzim transaminase ALT.',
    safetyMonitoring: 'Wajib diminum BERSAMA atau SEGERA SESUDAH MAKAN untuk meminimalkan keluhan gastrointestinal (mual, diare, kembung). Kontraindikasi mutlak bila eGFR < 30 mL/menit karena risiko Asidosis Laktat (MALA).'
  },
  {
    id: 'offlabel-nifedipine',
    drugName: 'Nifedipin Oral (Adalat)',
    genericName: 'Nifedipine',
    drugClass: 'Calcium Channel Blocker (Dihidropiridin)',
    onLabelIndication: 'Hipertensi kronis, angina pektoris vasospastik Prinzmetal dan angina stabil kronis.',
    offLabelIndication: 'Tokolitik Lini Pertama pada Ancaman Persalinan Prematur (Usia Kehamilan 24 - 34 Minggu).',
    clinicalDosage: 'Dosis awal oral 20 - 30 mg ditelan utuh (atau 10 - 20 mg tiap 20-30 menit jika kontraksi berlanjut, maks 40 mg pada jam ke-1), dilanjutkan 10 - 20 mg tiap 4-6 jam selama 48 jam.',
    evidenceBasis: 'Rekomendasi POGI (Perkumpulan Obstetri & Ginekologi Indonesia), ACOG, dan RCOG Tokolisis Preterm.',
    pharmacologicalRationale: 'Memblokade influks ion kalsium ekstraseluler melalui kanal kalsium tipe-L pada membran sel miometrium uterus, meredakan kontraksi tetanik dan memberikan jendela waktu 48 jam untuk pematangan paru janin dengan kortikosteroid.',
    safetyMonitoring: 'DILARANG DIBERIKAN SUBLINGUAL (wajib ditelan utuh dengan air) untuk menghindari penurunan tekanan darah mendadak yang memicu hipoperfusi plasenta. Pantau tekanan darah ibu berkala.'
  },
  {
    id: 'offlabel-gabapentin',
    drugName: 'Gabapentin (Neurontin)',
    genericName: 'Gabapentin',
    drugClass: 'Antikonvulsan / Ligan Subunit Alfa-2-Delta Kanal Kalsium',
    onLabelIndication: 'Terapi ajuvan kejang parsial dan tatalaksana Neuralgia Pasca Herpes (Post-Herpetic Neuralgia) dewasa.',
    offLabelIndication: 'Pruritus Uremik Refrakter Pasien Hemodialisis (HD) & Restless Legs Syndrome (RLS).',
    clinicalDosage: 'Pruritus HD: 100 - 300 mg per oral HANYA diberikan 3 kali seminggu PASCA-HEMODIALISIS. RLS (Kaki Gelisah): 300 - 600 mg sekali sehari diminum 1 - 2 jam sebelum tidur malam.',
    evidenceBasis: 'Pedoman European Renal Best Practice (ERBP) untuk Pruritus Uremik & Pedoman AAN untuk Restless Legs Syndrome.',
    pharmacologicalRationale: 'Mengikat subunit alfa-2-delta kanal kalsium berpintu-voltase di kornu dorsalis medula spinalis, menghambat pelepasan neurotransmiter eksitatori substansi P dan glutamat yang memediasi sensasi gatal neuropatik uremik.',
    safetyMonitoring: 'Eliminasi 100% bergantung pada ekskresi ginjal! Pada pasien gagal ginjal kronis (CKD on HD), dosis wajib diturunkan drastis dan hanya diminum pasca-dialisis untuk mencegah akumulasi toksik neurotoksik berat.'
  },
  {
    id: 'offlabel-domperidone',
    drugName: 'Domperidone (Vometa / Motilium)',
    genericName: 'Domperidone',
    drugClass: 'Antagonis Reseptor Dopamin D2 Perifer / Prokinetik',
    onLabelIndication: 'Mual, muntah akut, dispepsia fungsional, dan rasa penuh epigastrium akibat pengosongan lambung yang lambat.',
    offLabelIndication: 'Galaktagog (Stimulasi & Pelancar Produksi ASI pada Ibu Menyusui / Hipogalaktia).',
    clinicalDosage: '10 mg per oral 3 kali sehari diminum 15-30 menit sebelum makan. Dosis dapat dinaikkan hingga 20 mg 3 - 4 kali sehari selama 1 - 2 minggu, kemudian dititrasi turun bertahap (tapering off) setelah produksi ASI stabil.',
    evidenceBasis: 'Pedoman Academy of Breastfeeding Medicine (ABM Clinical Protocol #9) & Rekomendasi RCOG.',
    pharmacologicalRationale: 'Memblokade reseptor dopamin D2 pada eminensia mediana hipofisis anterior. Karena dopamin bekerja sebagai Prolactin-Inhibiting Factor (PIF), blokade ini meniadakan hambatan sekresi prolaktin sehingga kadar hormon prolaktin serum meningkat drastis dan memicu alveoli payudara memproduksi ASI.',
    safetyMonitoring: 'Khusus ibu menyusui! Evaluasi riwayat sindrom pemanjangan interval QT dan aritmia ventrikel (hindari kombinasi dengan inhibitor kuat CYP3A4 seperti flukonazol/eritromisin). Jangan dihentikan tiba-tiba untuk mencegah drop mendadak produksi ASI.'
  },
  {
    id: 'offlabel-misoprostol',
    drugName: 'Misoprostol (Cytotec / Gastrul)',
    genericName: 'Misoprostol',
    drugClass: 'Analog Prostaglandin E1 Sintetik',
    onLabelIndication: 'Pencegahan dan terapi ulkus peptikum / tukak lambung akibat penggunaan obat antiinflamasi nonsteroid (NSAID).',
    offLabelIndication: 'Pematangan Serviks (Cervical Ripening), Induksi Persalinan Aterm & Penanganan Perdarahan Pasca Persalinan (PPH).',
    clinicalDosage: 'Pematangan Serviks: 25 mcg per vaginam tiap 3 - 6 jam (maks 6 dosis). PPH (Atonia Uteri): 600 - 800 mcg per sublingual atau rektal dosis tunggal. Evakuasi Abortus Inkomplit: 600 mcg per oral atau 400 mcg sublingual.',
    evidenceBasis: 'Daftar Obat Esensial WHO (WHO Model List of Essential Medicines), Pedoman FIGO, dan Standar PNPK POGI.',
    pharmacologicalRationale: 'Mengikat reseptor prostaglandin EP2/EP3 pada stroma miometrium dan kolagen leher rahim. Menginduksi pemecahan ikatan serabut kolagen serviks (serviks melunak dan membuka) serta menstimulasi kontraksi ritmis otot polos miometrium uterus secara kuat.',
    safetyMonitoring: 'KONTRAINDIKASI MUTLAK PADA BEKAS SEKSIO SESAREA (SC) karena risiko ruptur uteri katastropik! Wajib pengawasan dokter Sp.OG/Bidan di faskes rawat inap dengan pemantauan denyut jantung janin (DJJ) dan kekuatan his berkala.'
  },
  {
    id: 'offlabel-aspirin-preeclampsia',
    drugName: 'Aspirin Dosis Rendah (Cardioaspirin / Aspilet)',
    genericName: 'Aspirin (Asam Asetilsalisilat)',
    drugClass: 'Antiplatelet / Inhibitor Enzim Siklooksigenase-1 (COX-1)',
    onLabelIndication: 'Prevensi sekunder infark miokard akut, angina pektoris tidak stabil, dan pencegahan stroke iskemik transien.',
    offLabelIndication: 'Prevensi Preeklampsia pada Ibu Hamil Risiko Tinggi (Riwayat PE, Hipertensi Kronis, DM, Penyakit Ginjal, atau Kehamilan Kembar).',
    clinicalDosage: '80 - 150 mg (umumnya 81 mg atau 100 mg) per oral sekali sehari diminum malam hari sebelum tidur, diinisiasi sejak usia kehamilan 12 - 16 minggu hingga melahirkan.',
    evidenceBasis: 'Rekomendasi USPSTF (Level A), FIGO, ACOG Guidelines, dan PNPK Preeklampsia POGI (Menurunkan risiko preeklampsia prematur hingga 62%).',
    pharmacologicalRationale: 'Menghambat secara ireversibel enzim COX-1 trombosit, menekan sintesis tromboksan A2 (TxA2, vasokonstriktor kuat & agregator platelet) tanpa menekan biosintesis prostasiklin (PGI2, vasodilator) endotel, memperbaiki aliran darah uteroplasenta dan invasi trofoblas spiralis.',
    safetyMonitoring: 'Diminum malam hari untuk efektivitas sirkadian maksimal. Aman untuk janin pada dosis rendah (tidak menyebabkan penutupan dini duktus arteriosus). Dihentikan pada usia kehamilan 36-37 minggu jika direncanakan persalinan atau anestesi spinal/epidural.'
  },
  {
    id: 'offlabel-ondansetron',
    drugName: 'Ondansetron (Narfoz / Cedantron)',
    genericName: 'Ondansetron Hydrochloride',
    drugClass: 'Antagonis Reseptor Serotonin 5-HT3 Selektif',
    onLabelIndication: 'Pencegahan dan pengobatan mual muntah akibat kemoterapi sitostatika, radioterapi emetogenik, dan pasca operasi bedah (PONV).',
    offLabelIndication: 'Hyperemesis Gravidarum Refrakter Trimester 1-2 & Antiemetik Diare Akut Pediatrik (Muntah Masif Anak).',
    clinicalDosage: 'Hyperemesis Gravidarum: 4 - 8 mg per oral tiap 8 jam jika lini 1 (Piridoksin/Doksilamin) tidak adekuat. Pediatrik Diare Akut: 0.15 mg/kgBB (maks 8 mg) per oral dosis tunggal untuk menghentikan muntah agar rehidrasi oralit sukses.',
    evidenceBasis: 'Pedoman Praktis ACOG Practice Bulletin No. 189 (Nausea & Vomiting of Pregnancy) & Konsensus Pediatrik ESPGHAN/AAP.',
    pharmacologicalRationale: 'Memblokade ikatan serotonin secara selektif pada reseptor 5-HT3 di ujung saraf aferen vagus saluran cerna dan sentral medula oblongata (Chemoreceptor Trigger Zone / CTZ), memutuskan sinyal lengkung refleks muntah akut.',
    safetyMonitoring: 'Waspadai efek samping konstipasi dan sakit kepala ringan. Koreksi dehidrasi dan hipokalemia/hipomagnesemia sebelum pemberian untuk mencegah risiko aritmia perpanjangan interval QT.'
  },
  {
    id: 'offlabel-dexamethasone-lung',
    drugName: 'Deksametason (Kalmethasone)',
    genericName: 'Dexamethasone Sodium Phosphate',
    drugClass: 'Kortikosteroid Glukokortikoid Sintetik Potensi Tinggi',
    onLabelIndication: 'Antiinflamasi sistemik, edema serebral, reaksi anafilaksis berat, dan penyakit autoimun / insufisiensi adrenal.',
    offLabelIndication: 'Pematangan Paru Janin Antenatal pada Ancaman Persalinan Prematur (Usia Kehamilan 24 - 34 Minggu).',
    clinicalDosage: '6 mg intramuskular (IM) tiap 12 jam sebanyak 4 dosis total (selesai dalam kurun waktu 48 jam). Alternatif: Betametason 12 mg IM tiap 24 jam sebanyak 2 dosis.',
    evidenceBasis: 'Rekomendasi Baku Emas WHO Antenatal Corticosteroid Therapy, ACOG Practice Bulletin, RCOG, dan PNPK POGI.',
    pharmacologicalRationale: 'Deksametason menembus sawar plasenta secara utuh tanpa diinaktivasi oleh enzim 11-beta-HSD2 plasenta, berikatan dengan reseptor glukokortikoid pada sel pneumosit tipe II janin untuk memicu transkripsi gen pengkode protein surfaktan (SP-A, SP-B, SP-C), mempercepat pematangan alveoli paru.',
    safetyMonitoring: 'Diberikan bila usia kehamilan < 34 minggu dengan risiko tinggi lahir dalam 7 hari. Pantau kadar gula darah ibu (risiko hiperglikemia transien pada penderita diabetes gestasional) dan tanda infeksi korioamnionitis.'
  },
  {
    id: 'offlabel-minoxidil-oral',
    drugName: 'Minoxidil Oral Dosis Rendah (LDOM)',
    genericName: 'Minoxidil',
    drugClass: 'Pembuka Kanal Kalium / Vasodilator Perifer Langsung',
    onLabelIndication: 'Hipertensi refrakter berat yang tidak terkontrol dengan kombinasi 3 obat antihipertensi dosis maksimal.',
    offLabelIndication: 'Alopesia Androgenetik (Kebotakan Pola Pria & Wanita) & Telogen Effluvium Kronis.',
    clinicalDosage: 'Pria: 1.25 - 5 mg per oral sekali sehari. Wanita: 0.25 - 1.25 mg per oral sekali sehari (diminum malam hari). Dosis 10-40x lebih rendah daripada dosis antihipertensi (10-40 mg).',
    evidenceBasis: 'Pedoman Konsensus American Academy of Dermatology (AAD) & International Society of Hair Restoration Surgery (ISHRS).',
    pharmacologicalRationale: 'Membuka kanal kalium sensitif-ATP (K_ATP) pada membran sel folikel rambut, menyebabkan hiperpolarisasi, vasodilatasi mikrovaskular kapiler papila dermis folikel, memperpanjang durasi fase anagen (pertumbuhan aktif), dan mengubah rambut velus tipis menjadi rambut terminal tebal.',
    safetyMonitoring: 'Evaluasi tekanan darah dan denyut jantung awal. Efek samping umum dosis rendah: hipertrikosis ringan (pertumbuhan rambut halus di pelipis/tangan), retensi cairan minimal di tungkai, atau takikardia ringan. Hindari pada pasien gagal jantung berat.'
  },
  {
    id: 'offlabel-metoclopramide-hiccup',
    drugName: 'Metoklopramid (Primperan)',
    genericName: 'Metoclopramide Hydrochloride',
    drugClass: 'Antagonis Reseptor Dopamin D2 / Prokinetik Benzamida',
    onLabelIndication: 'Mual muntah gangguan pencernaan, refluks gastroesofageal (GERD), dan gastroparesis diabetik.',
    offLabelIndication: 'Singultus Refrakter (Cegukan Menetap yang Tidak Berhenti > 48 Jam) & Gastroparesis Pasien Kritis ICU.',
    clinicalDosage: '10 mg per oral atau intramuskular/intravena tiap 6 - 8 jam selama 5 - 7 hari hingga cegukan berhenti tuntas.',
    evidenceBasis: 'Rekomendasi American College of Gastroenterology (ACG Guidelines on Intractable Hiccups) & Panduan Terapi Paliatif.',
    pharmacologicalRationale: 'Memblokade transmisi dopaminergik sentral pada pusat cegukan di batang otak (formasio retikularis) serta menekan refleks aferen nervus vagus dan saraf frenikus yang mempersarafi diafragma, meredakan kejang kontraksi diafragma klonik.',
    safetyMonitoring: 'Batasi durasi pemakaian maksimal 5-7 hari! Waspadai reaksi ekstrapiramidal (akatisia, distonia leher/lidah) terutama pada pasien muda. Sediakan injeksi Difenhidramin sebagai antidot distonia.'
  },
  {
    id: 'offlabel-diphenhydramine-eps',
    drugName: 'Difenhidramin (Benadryl)',
    genericName: 'Diphenhydramine Hydrochloride',
    drugClass: 'Antihistamin Generasi Pertama (Invers Agonis H1) / Antikolinergik Sentral',
    onLabelIndication: 'Rinitis alergi, urtikaria akut, reaksi anafilaksis ajuvan, dan pencegahan mabuk perjalanan (motion sickness).',
    offLabelIndication: 'Distonia Akut / Sindrom Ekstrapiramidal (EPS) Imbas Antipsikotik / Metoklopramid & Insomnia Jangka Pendek.',
    clinicalDosage: 'Reaksi Distonia Akut: 25 - 50 mg IV atau IM perlahan (gejala membaik dalam 15-30 menit, dapat diulang 1x). Insomnia Transien: 25 - 50 mg per oral 30 menit sebelum tidur (maksimal 7-10 malam berturut-turut).',
    evidenceBasis: 'Pedoman American College of Emergency Physicians (ACEP) untuk Distonia Ekstrapiramidal & Standar Terapi Emergensi IGD.',
    pharmacologicalRationale: 'Menembus sawar darah otak dengan sangat cepat dan memiliki afinitas antikolinergik muskarinik kuat di ganglia basalis otak, menyeimbangkan kembali dominasi transmisi kolinergik yang terjadi akibat blokade dopaminergik oleh antipsikotik/metoklopramid.',
    safetyMonitoring: 'Menyebabkan kantuk berat (dilarang mengemudi). Hindari penggunaan pada lansia (Kriteria Beers: risiko tinggi delirium, retensi urin akut, dan jatuh) serta kontraindikasi pada glaukoma sudut tertutup.'
  }
];


// ============================================================================
// 31. AI EDUCATION PROMPT PRESETS (8 KASUS)
// ============================================================================
export interface AiEducationPromptPreset {
  topicTitle: string;
  targetAudience: string;
  mediaFormat: string;
  tone: string;
  formula: {
    role: string;
    context: string;
    task: string;
    constraint: string;
    outputFormat: string;
  };
  livePrompt: string;
  guardrails: string[];
  suggestedHashtags: string;
}

export const AI_EDUCATION_PROMPT_PRESETS: AiEducationPromptPreset[] = [
  {
    topicTitle: 'DAGUSIBU: Dapatkan, Gunakan, Simpan, Buang Obat',
    targetAudience: 'Masyarakat Umum & Pasien Rawat Jalan',
    mediaFormat: 'Instagram Carousel (10 Slide)',
    tone: 'Edukatif, Bersahabat & Berwibawa',
    formula: {
      role: 'Apoteker Klinis & Edukator Promosi Kesehatan Kemenkes RI',
      context: 'Banyak masyarakat masih salah menyimpan obat di kulkas dan membuang antibiotik langsung ke selokan.',
      task: 'Buat naskah Carousel 10 slide tentang 4 pilar DAGUSIBU lengkap dengan analogi sederhana dan do-donts.',
      constraint: 'Hindari jargon farmasi rumit, gunakan bahasa populer Indonesia, sertakan call-to-action konsultasi Apoteker.',
      outputFormat: 'Slide 1 Cover hook, Slide 2-3 Dapatkan, Slide 4-5 Gunakan, Slide 6-7 Simpan, Slide 8-9 Buang, Slide 10 CTA'
    },
    livePrompt: 'Bertindaklah sebagai Apoteker Edukator Promkes. Buatkan draft naskah Instagram Carousel 10 slide bertema "DAGUSIBU: Jangan Salah Simpan & Buang Obat Lagi!". Gunakan bahasa Indonesia santai tapi terpercaya. Berikan 1 contoh kesalahan fatal di tiap pilar dan solusinya. Akhiri dengan ajakan Tanya Obat Tanya Apoteker.',
    guardrails: [
      'Wajib tegaskan obat keras bertanda lingkaran merah (K) hanya boleh dibeli dengan resep dokter di Apotek resmi.',
      'Jelaskan bahwa sirup antibiotik kering tidak boleh disimpan setelah lewat masa Beyond-Use Date (7-14 hari).'
    ],
    suggestedHashtags: '#dagusibu #tanyaobattanyaapoteker #gemacermat #edukasifarmasi #apotekerindonesia'
  },
  {
    topicTitle: 'Edukasi Hipertensi Lansia: Kepatuhan & Bahaya Garam Tersembunyi',
    targetAudience: 'Lansia (>60 th) & Caregiver Keluarga',
    mediaFormat: 'Post Edukasi Feed 4:5 + Naskah WhatsApp',
    tone: 'Empatik, Hangat & Perhatian',
    formula: {
      role: 'Apoteker Spesialis Geriatri & Farmasi Komunitas',
      context: 'Pasien sering berhenti minum obat antihipertensi karena merasa tensi sudah normal dan takut efek ginjal.',
      task: 'Edukasi bahwa obat hipertensi diminum seumur hidup untuk mencegah stroke, bukan pereda gejala sesaat.',
      constraint: 'Gunakan nada bicara menghormati orang tua, beri tips mudah mengingat jam minum obat pagi/malam.',
      outputFormat: 'Headline menyentuh hati, 3 mitos vs fakta, panduan waktu minum Amlodipine vs Candesartan, pesan keluarga.'
    },
    livePrompt: 'Buatkan pesan edukasi farmasi untuk lansia dan anaknya tentang kepatuhan minum obat antihipertensi. Jelaskan mitos keliru bahwa "minum obat darah tinggi lama-lama merusak ginjal" — faktanya, tensi tinggilah yang merusak ginjal. Gunakan gaya bicara penuh kasih sayang layaknya Apoteker keluarga.',
    guardrails: [
      'Ingatkan bahaya penghentian mendadak (rebound hypertension).',
      'Waspadai interaksi konsumsi suplemen kalium bersamaan dengan obat golongan ACEi/ARB.'
    ],
    suggestedHashtags: '#hipertensi #obatdarahtinggi #kesehatangenerasilanjut #caregiver #apotekerpeduli'
  },
  {
    topicTitle: 'Teknik Tepat Penggunaan Inhaler MDI (Asma & PPOK)',
    targetAudience: 'Pasien Asma Dewasa & Orang Tua Anak Asma',
    mediaFormat: 'Infografis Langkah Praktis Step-by-Step',
    tone: 'Instruktif, Presisi & Jelas',
    formula: {
      role: 'Apoteker Konselor Edukasi Pasien Saluran Napas',
      context: '>70% pasien salah memakai inhaler semprot (MDI), sehingga obat menempel di tenggorokan bukan paru-paru.',
      task: 'Rancang panduan 6 langkah praktis memakai inhaler MDI lengkap dengan instruksi berkumur setelahnya.',
      constraint: 'Tuliskan detik hitungan napas (tahan napas 10 detik), dan jeda 1 menit antar semprotan.',
      outputFormat: 'Step 1 Kocok & Buka, Step 2 Buang Napas, Step 3 Rapatkan Bibir, Step 4 Tekan & Hirup Dalam, Step 5 Tahan 10 Detik, Step 6 Kumur Air.'
    },
    livePrompt: 'Buatkan panduan edukasi visual infografis 6 langkah menggunakan inhaler MDI untuk pasien asma. Tekankan kesalahan umum: tidak mengocok botol dan lupa berkumur setelah memakai inhaler kortikosteroid (risiko sariawan jamur candidiasis oral). Format per langkah singkat dan mudah dihafalkan.',
    guardrails: [
      'Wajib cantumkan instruksi berkumur dan membuang airnya setelah menggunakan inhaler steroid.',
      'Sertakan anjuran penggunaan spacer untuk anak-anak dan lansia dengan koordinasi napas terbatas.'
    ],
    suggestedHashtags: '#carapakaiinhaler #asmaindonesia #ppok #konselingobat #edukasiinhaler'
  },
  {
    topicTitle: 'Pertolongan Pertama Diare Akut Anak: Oralit + Zinc 10 Hari',
    targetAudience: 'Ibu Muda & Orang Tua Balita',
    mediaFormat: 'Infografis Feed & Carousel Edukasi',
    tone: 'Cepat Tanggap, Informatif & Menenangkan',
    formula: {
      role: 'Apoteker Pediatrik & Konselor Kesehatan Anak',
      context: 'Banyak orang tua langsung meminta antibiotik atau obat penyetop diare (Loperamid) untuk anak balita diare.',
      task: 'Edukasi protokol WHO: Oralit mencegah dehidrasi + Zinc 10-20 mg diminum 10 hari penuh meskipun diare sudah reda.',
      constraint: 'Tegaskan Loperamid KONTRAINDIKASI untuk anak <2 tahun (risiko ileus paralitik), antibiotik hanya jika ada darah.',
      outputFormat: 'Peringatan bahaya, 2 pilar penyelamat (Oralit + Zinc), cara larutkan zinc, dan tanda dehidrasi berat.'
    },
    livePrompt: 'Buatkan konten edukasi Instagram untuk ibu balita: "Anak Diare Jangan Buru-Buru Minta Antibiotik!". Jelaskan fungsi vital Oralit sebagai pengganti cairan dan kenapa tablet Zinc wajib dihabiskan 10 hari berturut-turut untuk memperbaiki vili usus. Sebutkan tanda bahaya mata cekung & lemas untuk segera ke IGD.',
    guardrails: [
      'Jangan pernah rekomendasikan antispasmodik atau Loperamid pada balita.',
      'Dosis Zinc: Anak <6 bulan = 10 mg/hari; Anak >=6 bulan = 20 mg/hari selama 10 hari berturut-turut.'
    ],
    suggestedHashtags: '#diareanak #oralitzinc #kesehatananak #parentingsehat #apotekeredukasi'
  },
  {
    topicTitle: 'Perbedaan Obat Batuk Kering vs Berdahak & Pseudoefedrin',
    targetAudience: 'Masyarakat Umum Pembeli Obat Bebas (OTC)',
    mediaFormat: 'Perbandingan Visual Side-by-Side (Tabel 2 Kolom)',
    tone: 'Praktis, Edukatif & Berhati-hati',
    formula: {
      role: 'Apoteker Pengelola Apotek & Skrining Swamedikasi',
      context: 'Pasien sering salah beli obat batuk berdahak padahal batuk alergi kering, atau minum obat flu saat hipertensi.',
      task: 'Bandingkan batuk kering (Antitusif: Dextromethorphan) vs berdahak (Mukolitik/Ekspektoran: GG, Ambroxol, N-Asetilsistein).',
      constraint: 'Wajib beri peringatan dekongestan (Pseudoefedrin/Fenilefrin) yang menaikkan tekanan darah penderita hipertensi.',
      outputFormat: 'Tabel 2 kolom: Gejala, Mekanisme, Pilihan Zat Aktif, Pantangan & Tips Alami Banyak Minum Air Hangat.'
    },
    livePrompt: 'Buatkan tabel perbandingan Instagram visual antara "Batuk Kering vs Batuk Berdahak". Jelaskan beda cara kerja mukolitik (mengencerkan dahak) vs antitusif (menekan refleks batuk). Berikan peringatan keras bagi penderita darah tinggi saat membeli obat flu kombinasi yang mengandung Pseudoefedrin.',
    guardrails: [
      'Peringatkan bahaya Dextromethorphan disalahgunakan dalam dosis tinggi.',
      'Ekspektoran/mukolitik tidak efektif tanpa asupan cairan air putih hangat yang cukup.'
    ],
    suggestedHashtags: '#obatbatuk #batukkering #batukberdahak #swamedikasi #apotekcerdas'
  },
  {
    topicTitle: 'Kepatuhan Terapi OAT Tuberkulosis 6 Bulan & Urine Merah',
    targetAudience: 'Pasien TB Paru & Pengawas Menelan Obat (PMO)',
    mediaFormat: 'Carousel Edukasi Kepatuhan & Mitigasi Efek Samping',
    tone: 'Memberi Semangat, Tegas & Terstruktur',
    formula: {
      role: 'Apoteker Tim DOTS Rumah Sakit & Puskesmas',
      context: 'Pasien TB sering putus obat di bulan ke-2 karena merasa sudah sembuh, atau takut melihat air kencingnya merah.',
      task: 'Jelaskan fase intensif 2 bulan vs lanjutan 4 bulan, tenangkan bahwa urin merah dari Rifampisin itu normal dan tidak berbahaya.',
      constraint: 'Jelaskan bahaya TB Resisten Obat (MDR-TB) jika minum obat bolong-bolong, butuh suntikan dan 18-24 bulan terapi.',
      outputFormat: 'Hook fakta TB sembuh total, arti warna urin merah, fase pengobatan, peran PMO keluarga, dan pesan motivasi.'
    },
    livePrompt: 'Tuliskan postingan edukasi Instagram untuk pasien TB dan keluarganya. Angkat topik: "Kencing Berwarna Merah Saat Minum Obat TB: Bahaya atau Normal?". Jelaskan bahwa itu efek samping wajar Rifampisin, bukan pendarahan. Motivasi pasien untuk menuntaskan 6 bulan penuh agar tidak menjadi TB-MDR.',
    guardrails: [
      'Ingatkan tanda bahaya hepatitis imbas obat (ikterus/mata kuning, mual hebat) untuk segera lapor ke dokter.',
      'Waktu minum OAT terbaik: pagi hari saat perut kosong 1 jam sebelum makan atau 2 jam setelah makan.'
    ],
    suggestedHashtags: '#tbparu #oat #tbc #tosstbc #indonesiabebastb #apotekerpeduli'
  },
  {
    topicTitle: 'Edukasi Diabetes Mellitus: Tanda Hipoglikemia & Aturan 15-15',
    targetAudience: 'Penyandang Diabetes, Pengguna Insulin & Keluarga',
    mediaFormat: 'Infografis Kartu Saku Darurat (Pocket Guide)',
    tone: 'Siaga, Informatif & Menyelamatkan Jiwa',
    formula: {
      role: 'Apoteker Edukator Diabetes & Farmasi Rawat Jalan',
      context: 'Hipoglikemia (gula darah <70 mg/dL) adalah komplikasi akut yang fatal bila pasien telat makan setelah suntik insulin/minum sulfonilurea.',
      task: 'Rancang kartu darurat tanda hipoglikemia (keringat dingin, gemetar, pusing) dan tatalaksana Aturan 15-15.',
      constraint: 'Jelaskan Aturan 15-15: konsumsi 15 gram karbohidrat cepat serap (3 sendok teh gula/setengah gelas jus), cek ulang 15 menit.',
      outputFormat: 'Kartu visual tanda bahaya, protokol Aturan 15-15, dan pencegahan membawa permen/gula saat bepergian.'
    },
    livePrompt: 'Buatkan kartu saku edukasi darurat untuk pasien diabetes tentang cara mengatasi gula darah anjlok (Hipoglikemia). Jelaskan trias gejala: gemetar, keringat dingin, jantung berdebar. Rinci langkah "Aturan 15-15" menggunakan 1 sendok makan gula pasir atau 1/2 gelas teh manis, dan kapan harus segera ke IGD.',
    guardrails: [
      'Jangan beri makanan berlemak tinggi (seperti cokelat atau kue) untuk pertolongan pertama karena lemak memperlambat penyerapan glukosa.',
      'Jika pasien tidak sadar, DILARANG memasukkan makanan/minuman ke mulut (risiko aspirasi paru); segera bawa ke IGD.'
    ],
    suggestedHashtags: '#diabetesindonesia #hipoglikemia #edukasidiabetes #insulin #aturan1515'
  },
  {
    topicTitle: 'Cara Pakai Obat Supositoria Rektal & Tetes Mata Steril',
    targetAudience: 'Pasien dengan Resep Obat Bentuk Khusus',
    mediaFormat: 'Infografis Duo Sediaan Khusus (Side-by-Side)',
    tone: 'Sopan, Jelas & Bebas Tabu',
    formula: {
      role: 'Apoteker Pelayanan Informasi Obat (PIO)',
      context: 'Supositoria sering salah diminum lewat mulut, dan ujung botol tetes mata sering tersentuh jari sehingga tidak steril.',
      task: 'Beri instruksi pemakaian supositoria (buka bungkus, posisi tidur menyamping, dorong 2-3 cm) dan tetes mata (jeda 5 menit, tekan kantung air mata).',
      constraint: 'Bahasa sopan dan profesional, sertakan aturan cuci tangan sebelum dan sesudah tindakan.',
      outputFormat: 'Bagian A Supositoria (Bukan diminum, simpan di tempat sejuk), Bagian B Tetes Mata (Batas BUD 28 hari paska buka).'
    },
    livePrompt: 'Buatkan panduan edukasi farmasi bergambar tentang 2 sediaan obat yang paling sering salah cara pakainya: Supositoria Rektal dan Tetes Mata. Jelaskan langkah higienis cuci tangan, posisi tubuh, dan peringatan bahwa ujung penetes mata tidak boleh menyentuh bulu mata untuk menjaga sterilitas.',
    guardrails: [
      'Tegaskan batas kedaluwarsa tetes mata multidose maksimal 28 hari setelah segel botol pertama kali dibuka.',
      'Jika supositoria lembek karena suhu ruangan, rendam bungkusnya dalam air dingin sebentar sebelum dibuka.'
    ],
    suggestedHashtags: '#carapakaiotetesteril #supositoria #tetesmata #edukasipasien #pioapotek'
  }
];

// ============================================================================
// 32. PPRA GYSSENS EVALUATION PRESETS (7 KASUS)
// ============================================================================
export interface PpraGyssensPreset {
  categoryCode: string;
  categoryTitle: string;
  evaluationStep: string;
  clinicalScenario: string;
  prescribedDrug: string;
  gyssensVerdict: string;
  pharmacistRecommendation: string;
  keyStewardshipRule: string;
}

export const PPRA_GYSSENS_PRESETS: PpraGyssensPreset[] = [
  {
    categoryCode: 'Kategori 0',
    categoryTitle: 'Penggunaan Antibiotik Tepat & Rasional (Baku Emas)',
    evaluationStep: 'Langkah 6: Kesesuaian menyeluruh indikasi, spektrum, dosis, rute, interval & durasi',
    clinicalScenario: 'Pasien CAP rawat inap tanpa komorbid berat diberikan Ampisilin-Sulbaktam 1.5g IV q8h sesuai pedoman empiris lokal; hasil kultur sputum S. pneumoniae sensitif; terapi dilanjutkan dan switch oral di hari ke-3.',
    prescribedDrug: 'Ampisilin-Sulbaktam 1.5g IV q8h -> Amoksisilin-Klavulanat 625mg PO q8h',
    gyssensVerdict: 'TEPAT (Kategori 0): Indikasi jelas, spektrum tepat sasaran, dosis adekuat, dan switch oral terlaksana tepat waktu.',
    pharmacistRecommendation: 'Pertahankan dokumentasi klinis lengkap dan evaluasi respons klinis hingga hari ke-5 untuk rencana tuntas terapi.',
    keyStewardshipRule: 'Baku emas PPRA RS: >60% peresepan antibiotik empiris rawat inap harus mencapai evaluasi Kategori 0.'
  },
  {
    categoryCode: 'Kategori I',
    categoryTitle: 'Saat Pemberian Tidak Tepat (Timing Profilaksis Terlambat)',
    evaluationStep: 'Langkah 1: Evaluasi ketepatan waktu pemberian obat terhadap prosedur / jadwal bedah',
    clinicalScenario: 'Pasien operasi elektif bedah sesar baru diberikan Cefazolin 2g IV saat bayi sudah lahir di ruang operasi (60 menit paska insisi kulit), bukan 30-60 menit sebelum insisi.',
    prescribedDrug: 'Cefazolin 2g IV (Diberikan paska insisi)',
    gyssensVerdict: 'TIDAK TEPAT WAKTU (Kategori I): Konsentrasi antibiotik di jaringan luka belum mencapai MIC protektif saat pisau bedah menyayat kulit.',
    pharmacistRecommendation: 'Ingatkan tim bedah & anastesi: Profilaksis wajib dihabiskan dalam rentang 30-60 menit SEBELUM insisi kulit dimulai.',
    keyStewardshipRule: 'Pemberian profilaksis bedah setelah insisi menurunkan efektivitas proteksi ILO (Infeksi Luka Operasi) hingga 50%.'
  },
  {
    categoryCode: 'Kategori IIA',
    categoryTitle: 'Dosis Tidak Tepat (Underdose pada Sepsis Berat)',
    evaluationStep: 'Langkah 2A: Evaluasi ketepatan perhitungan dosis berdasarkan farmakokinetik/farmakodinamik',
    clinicalScenario: 'Pasien sepsis ICU dengan BB 85 kg dan hiperklirens ginjal (eGFR >130 mL/menit) hanya diresepkan Meropenem 1g IV tiap 12 jam (seharusnya 1g IV tiap 8 jam dengan infus kontinu/diperpanjang 3 jam).',
    prescribedDrug: 'Meropenem 1g IV q12h (Dosis Terlalu Rendah)',
    gyssensVerdict: 'DOSIS TIDAK ADEKUAT (Kategori IIA): Konsentrasi obat tidak mencapai target fT>MIC >40-100%, memicu kegagalan terapi dan seleksi galur mutan resisten.',
    pharmacistRecommendation: 'Tingkatkan dosis Meropenem menjadi 1g tiap 8 jam atau 2g tiap 8 jam dengan metode extended infusion selama 3 jam.',
    keyStewardshipRule: 'Pada sepsis berat dengan volume distribusi meningkat, antibiotik hidrofilik beta-laktam membutuhkan loading dose dan dosis pemeliharaan agresif.'
  },
  {
    categoryCode: 'Kategori IIIA',
    categoryTitle: 'Pemberian Terlalu Lama (Melebihi Batas Rekomendasi)',
    evaluationStep: 'Langkah 3A: Evaluasi durasi terapi antibiotik terhadap panduan klinis baku',
    clinicalScenario: 'Pasien apendiktomi non-perforasi (bedah bersih-terkontaminasi) terus diberikan Seftriakson 1g IV dan Metronidazol 500mg IV hingga hari ke-5 rawat inap, padahal profilaksis bedah cukup 1 dosis (maks 24 jam).',
    prescribedDrug: 'Seftriakson 1g q24h + Metronidazol 500mg q8h selama 5 hari',
    gyssensVerdict: 'DURASI TERLALU LAMA (Kategori IIIA): Tidak ada tanda perforasi atau peritonitis; perpanjangan profilaksis tidak terbukti menambah proteksi dan meningkatkan risiko resistensi kuman serta infeksi C. difficile.',
    pharmacistRecommendation: 'Hentikan antibiotik segera. Edukasi klinisi bahwa profilaksis bedah elektif tuntas dalam 24 jam paska-insisi.',
    keyStewardshipRule: 'Perpanjangan antibiotik profilaksis >24 jam tanpa bukti infeksi aktif merupakan temuan audit PPRA yang paling sering terjadi.'
  },
  {
    categoryCode: 'Kategori IVA',
    categoryTitle: 'Ada Antibiotik Lain yang Lebih Efektif (Spektrum Kurang Tepat)',
    evaluationStep: 'Langkah 4A: Evaluasi spektrum antimikroba terhadap patogen spesifik penyebab infeksi',
    clinicalScenario: 'Pasien ISK terbukti kultur urin tumbuh E. coli penghasil ESBL dengan resistensi Seftriakson (MIC >64 mcg/mL), tetapi dokter tetap meneruskan terapi Seftriakson tanpa penyesuaian ke sensitivitas hasil lab.',
    prescribedDrug: 'Seftriakson 2g IV q24h (Kuman Resisten ESBL)',
    gyssensVerdict: 'TIDAK EFEKTIF (Kategori IVA): Patogen resisten terhadap Seftriakson. Diperlukan antibiotik definitif yang sensitif berdasarkan antibiogram (Meropenem atau Amikasin).',
    pharmacistRecommendation: 'De-eskalasi / switch ke Meropenem 1g q8h IV atau Amikasin 15 mg/kgBB IV sesuai fungsi ginjal dan respons klinis.',
    keyStewardshipRule: 'Hasil uji sensitivitas kultur wajib ditindaklanjuti dalam waktu 1x24 jam oleh Komite PPRA / Apoteker Ruangan.'
  },
  {
    categoryCode: 'Kategori V',
    categoryTitle: 'Tidak Ada Indikasi Penggunaan Antibiotik (Infeksi Virus Akut)',
    evaluationStep: 'Langkah 5: Evaluasi ada/tidaknya bukti klinis dan laboratorium infeksi bakterial',
    clinicalScenario: 'Pasien rawat jalan dengan keluhan demam hari ke-2, batuk pilek encer, faring sedikit hiperemis, leukosit normal (6.200/uL), dan prokalsitonin <0.1 ng/mL diresepkan Azitromisin 500mg selama 3 hari.',
    prescribedDrug: 'Azitromisin 500mg PO 1x1 selama 3 hari',
    gyssensVerdict: 'TIDAK ADA INDIKASI (Kategori V): Gambaran klinis menunjukkan infeksi virus saluran napas akut (Common Cold); pemberian antibiotik tidak bermanfaat dan mempercepat resistensi makrolida.',
    pharmacistRecommendation: 'Batalkan peresepan antibiotik; berikan terapi suportif (antipiretik parasetamol, hidrasi oral, dekongestan topikal/oral) dan edukasi perjalanan penyakit virus.',
    keyStewardshipRule: 'Penggunaan antibiotik pada infeksi virus tanpa bukti ko-infeksi bakterial melanggar prinsip rasionalitas peresepan Permenkes 8/2015.'
  },
  {
    categoryCode: 'Kategori VI',
    categoryTitle: 'Data Rekam Medis Tidak Lengkap (Tidak Dapat Dievaluasi)',
    evaluationStep: 'Langkah 0: Skrining kelengkapan data rekam medis sebelum telaah rasionalitas',
    clinicalScenario: 'Dalam rekam medis pasien tertulis resep Levofloksasin 750mg IV, namun tidak ada catatan diagnosis kerja, tanda vital suhu badan, sumber fokus infeksi, maupun hasil pemeriksaan darah penunjang.',
    prescribedDrug: 'Levofloksasin 750mg IV q24h',
    gyssensVerdict: 'DATA TIDAK LENGKAP (Kategori VI): Ketidaklengkapan dokumentasi rekam medis membuat tim audit PPRA tidak dapat menilai indikasi klinis pemberian antibiotik.',
    pharmacistRecommendation: 'Konfirmasi langsung ke dokter penanggung jawab pelayanan (DPJP) untuk melengkapi lembar telaah resep antibiotik dan catatan perkembangan pasien terintegrasi (CPPT).',
    keyStewardshipRule: 'Kelengkapan rekam medis adalah syarat mutlak akreditasi STARKES dan evaluasi surveilans antimikroba rumah sakit.'
  }
];

// ============================================================================
// 33. PPRA SURGICAL PROPHYLAXIS PRESETS (6 KASUS)
// ============================================================================
export interface PpraProphylaxisPreset {
  surgicalProcedure: string;
  incisionType: 'Bersih' | 'Bersih Terkontaminasi' | 'Terkontaminasi';
  recommendedAntibiotic: string;
  administrationTiming: string;
  redosingInterval: string;
  maximumDuration: string;
  alternativeForPenicillinAllergy: string;
  criticalCheckpoints: string[];
}

export const PPRA_PROPHYLAXIS_PRESETS: PpraProphylaxisPreset[] = [
  {
    surgicalProcedure: 'Bedah Digestif (Apendiktomi / Kolesistektomi)',
    incisionType: 'Bersih Terkontaminasi',
    recommendedAntibiotic: 'Cefazolin 2g IV + Metronidazole 500mg IV (atau Cefoxitin 2g IV tunggal)',
    administrationTiming: '30 - 60 menit sebelum insisi kulit (Metronidazole dapat dimulai 60 menit sebelumnya)',
    redosingInterval: 'Cefazolin diulang tiap 4 jam jika operasi berlangsung lama atau perdarahan >1.500 mL',
    maximumDuration: 'Tunggal saat operasi (Maksimal 24 jam paska-bedah)',
    alternativeForPenicillinAllergy: 'Gentamisin 5 mg/kgBB IV ATAU Siprofloksasin 400mg IV + Metronidazol 500mg IV',
    criticalCheckpoints: [
      'Wajib menjangkau spektrum bakteri Gram-negatif enterik dan anaerob Bacteroides fragilis.',
      'Dosis Cefazolin dinaikkan menjadi 3g IV jika berat badan pasien >120 kg.',
      'Hentikan seluruh profilaksis dalam waktu maksimal 24 jam tanpa perkecualian pada kasus non-perforasi.'
    ]
  },
  {
    surgicalProcedure: 'Bedah Sesar (Sectio Caesarea)',
    incisionType: 'Bersih Terkontaminasi',
    recommendedAntibiotic: 'Cefazolin 2g IV (Dosis tunggal pre-insisi)',
    administrationTiming: 'Dalam rentang 30 - 60 menit SEBELUM insisi kulit (bukan menunggu klem tali pusat bayi)',
    redosingInterval: 'Cefazolin diulang tiap 4 jam jika waktu operasi melebihi batas atau perdarahan masif',
    maximumDuration: 'Dosis tunggal pre-operatif (Tidak perlu dosis lanjutan paska-operasi)',
    alternativeForPenicillinAllergy: 'Klindamisin 900mg IV + Gentamisin 5 mg/kgBB IV',
    criticalCheckpoints: [
      'Rekomendasi ACOG & Kemenkes terbaru: pemberian sebelum insisi terbukti menurunkan infeksi endometritis hingga 50% dibanding setelah klem tali pusat.',
      'Penambahan Azitromisin 500mg IV dianjurkan pada SC emergensi setelah ketuban pecah dini.',
      'Tidak ada bukti manfaat pemberian antibiotik oral lanjutan saat pasien pulang rawat jalan.'
    ]
  },
  {
    surgicalProcedure: 'Bedah Ortopedi (Artroplasti Sendi Panggul/Lutut & ORIF)',
    incisionType: 'Bersih',
    recommendedAntibiotic: 'Cefazolin 2g IV (Tingkatkan ke 3g jika BB >120 kg)',
    administrationTiming: '30 - 60 menit sebelum insisi kulit (sebelum tourniquet dipasang dan dikembangkan)',
    redosingInterval: 'Cefazolin diulang tiap 4 jam intraoperatif',
    maximumDuration: 'Maksimal 24 jam paska-operasi (2-3 dosis tambahan)',
    alternativeForPenicillinAllergy: 'Vankomisin 15 mg/kgBB IV (infus lambat 60-120 menit) ATAU Klindamisin 900mg IV',
    criticalCheckpoints: [
      'Target utama: pencegahan infeksi prosthesis sendi akibat Staphylococcus aureus & S. epidermidis.',
      'Antibiotik profilaksis wajib selesai diinfuskan sebelum manset tourniquet dikembangkan.',
      'Skrining kolonisasi MRSA pre-operatif dianjurkan pada pasien dengan riwayat rawat inap lama.'
    ]
  },
  {
    surgicalProcedure: 'Bedah Kardiotorasik (CABG / Penggantian Katup Jantung)',
    incisionType: 'Bersih',
    recommendedAntibiotic: 'Cefazolin 2g IV ATAU Cefuroxime 1.5g IV',
    administrationTiming: '30 - 60 menit sebelum insisi sternum',
    redosingInterval: 'Diulang tiap 4 jam (Cefazolin) atau tiap 3 jam (Cefuroxime) selama mesin bypass jantung aktif',
    maximumDuration: 'Maksimal 48 jam paska-operasi (Sesuai panduan STS / Kemenkes)',
    alternativeForPenicillinAllergy: 'Vankomisin 15 mg/kgBB IV lambat + Gentamisin 5 mg/kgBB IV',
    criticalCheckpoints: [
      'Pencegahan infeksi luka sternum dalam (mediastinitis) yang memiliki mortalitas tinggi >20%.',
      'Pengenceran sirkulasi akibat mesin cardiopulmonary bypass (CPB) menurunkan kadar obat secara drastis sehingga redosing wajib tepat.',
      'Hentikan ketat pada batas 48 jam; perpanjangan >48 jam meningkatkan kolonisasi jamur dan bakteri MDR.'
    ]
  },
  {
    surgicalProcedure: 'Bedah Hernia / Jaringan Lunak dengan Mesh',
    incisionType: 'Bersih',
    recommendedAntibiotic: 'Cefazolin 2g IV (Dosis tunggal)',
    administrationTiming: '30 - 60 menit sebelum insisi kulit',
    redosingInterval: 'Diulang tiap 4 jam jika operasi melebihi waktu estimasi',
    maximumDuration: 'Dosis tunggal intraoperatif',
    alternativeForPenicillinAllergy: 'Klindamisin 900mg IV atau Vankomisin 15 mg/kgBB IV',
    criticalCheckpoints: [
      'Operasi hernia tanpa pemasangan benda asing (tanpa mesh) TIDAK MEMERLUKAN antibiotik profilaksis.',
      'Pemasangan material prostetik (mesh) menjadi alasan perlunya profilaksis dosis tunggal.',
      'Pastikan kontrol gula darah perioperatif terkontrol untuk mencegah infeksi luka operasi.'
    ]
  },
  {
    surgicalProcedure: 'Bedah Urologi (Reseksi Transuretral Prostat / TURP)',
    incisionType: 'Bersih Terkontaminasi',
    recommendedAntibiotic: 'Ceftriaxone 1g IV ATAU Cefotaxime 1g IV ATAU Ciprofloksasin 400mg IV',
    administrationTiming: '30 - 60 menit sebelum manipulasi instrumen endoskopi',
    redosingInterval: 'Tidak perlu redosing jika durasi <4 jam',
    maximumDuration: 'Dosis tunggal sebelum prosedur',
    alternativeForPenicillinAllergy: 'Gentamisin 5 mg/kgBB IV + Klindamisin 900mg IV',
    criticalCheckpoints: [
      'Pasien wajib dipastikan bebas bakteriuria bermakna sebelum tindakan elektif (kultur urin pre-op).',
      'Jika kultur pre-op positif, obati terlebih dahulu sebelum operasi sebagai terapi definitif bukan profilaksis.',
      'Bakteriuria asimtomatik tanpa tindakan bedah urologi tidak boleh diobati dengan antibiotik.'
    ]
  }
];

// ============================================================================
// 34. PPRA ANTIBIOGRAM & RESISTANCE PRESETS (6 KASUS)
// ============================================================================
export interface PpraAntibiogramPreset {
  pathogenName: string;
  gramType: 'Gram Negatif' | 'Gram Positif';
  resistancePhenotype: 'ESBL' | 'CRE' | 'MRSA' | 'VRE' | 'MDR';
  commonInfections: string;
  susceptibilityProfile: { antibiotic: string; percentS: number; interpretation: string }[];
  empiricChoice: string;
  definitiveChoice: string;
  stewardshipAlert: string;
}

export const PPRA_ANTIBIOGRAM_PRESETS: PpraAntibiogramPreset[] = [
  {
    pathogenName: 'Escherichia coli (Penghasil ESBL)',
    gramType: 'Gram Negatif',
    resistancePhenotype: 'ESBL',
    commonInfections: 'ISK Terkomplikasi, Urosepsis, Infeksi Intraabdominal, Bakteremia',
    susceptibilityProfile: [
      { antibiotic: 'Meropenem', percentS: 98, interpretation: 'Sensitif Sangat Tinggi (Baku Emas Sepsis)' },
      { antibiotic: 'Amikasin', percentS: 95, interpretation: 'Sensitif Tinggi (Opsi Hemat Karbapenem)' },
      { antibiotic: 'Fosfomisin (Oral)', percentS: 92, interpretation: 'Sensitif Tinggi (Pilihan Utama Sistitis Akut)' },
      { antibiotic: 'Piperasilin-Tazobaktam', percentS: 78, interpretation: 'Sensitif Moderat (Hanya untuk ISK Bawah)' },
      { antibiotic: 'Seftriakson', percentS: 12, interpretation: 'Resisten Tinggi (Inaktivasi Enzim ESBL)' },
      { antibiotic: 'Siprofloksasin', percentS: 28, interpretation: 'Resisten Tinggi (Ko-resistensi Kuinolon)' }
    ],
    empiricChoice: 'Meropenem 1g IV q8h (pada syok sepsis) ATAU Amikasin 15 mg/kgBB q24h (pada urosepsis stabil)',
    definitiveChoice: 'Fosfomisin Trometamol 3g oral single dose (sistitis) ATAU Meropenem 1g q8h IV de-eskalasi bertahap',
    stewardshipAlert: 'Hindari penggunaan Sefalosporin Generasi 3 (Seftriakson/Sefotaksim) karena hidrolisis enzim beta-laktamase spektrum luas.'
  },
  {
    pathogenName: 'Klebsiella pneumoniae (CRE / Carbapenem-Resistant)',
    gramType: 'Gram Negatif',
    resistancePhenotype: 'CRE',
    commonInfections: 'Pneumonia HAP/VAP di ICU, Sepsis Kateter Vena Sentral, Infeksi Luka Bedah',
    susceptibilityProfile: [
      { antibiotic: 'Kolistin (Polimiksin E)', percentS: 94, interpretation: 'Sensitif Tinggi (Pilar Kombinasi)' },
      { antibiotic: 'Seftazidim-Avibaktam', percentS: 88, interpretation: 'Sensitif Tinggi (Kecuali penghasil NDM/Metallo)' },
      { antibiotic: 'Tigesiklin', percentS: 84, interpretation: 'Sensitif Baik (Kecuali untuk Bakteremia/ISK)' },
      { antibiotic: 'Meropenem', percentS: 8, interpretation: 'Resisten Berat (Karbapenemase KPC/OXA-48/NDM)' },
      { antibiotic: 'Levofloksasin', percentS: 15, interpretation: 'Resisten Ekstrem' }
    ],
    empiricChoice: 'Kombinasi ganda: Kolistin loading dose 9-12 juta IU + Seftazidim-Avibaktam 2.5g q8h IV',
    definitiveChoice: 'Seftazidim-Avibaktam 2.5g IV q8h (infus 2 jam) + Aztreonam 2g IV q8h jika terdeteksi galur NDM',
    stewardshipAlert: 'Kategori Reserve WHO: Kewaspadaan isolasi kontak ketat wajib diberlakukan di ruang ICU untuk mencegah wabah nosokomial.'
  },
  {
    pathogenName: 'Staphylococcus aureus (MRSA / Methicillin-Resistant)',
    gramType: 'Gram Positif',
    resistancePhenotype: 'MRSA',
    commonInfections: 'Pneumonia Nosokomial, Selulitis Berat, Infeksi Tulang Osteomielitis, Endokarditis',
    susceptibilityProfile: [
      { antibiotic: 'Vankomisin', percentS: 100, interpretation: 'Sensitif Mutlak (Wajib Monitoring TDM AUC/MIC)' },
      { antibiotic: 'Linezolid', percentS: 99, interpretation: 'Sensitif Sangat Tinggi (Pilihan Utama Pneumonia MRSA)' },
      { antibiotic: 'Daptomisin', percentS: 96, interpretation: 'Sensitif Tinggi (Kecuali Infeksi Paru/Pneumonia)' },
      { antibiotic: 'Kotrimoksazol (Oral)', percentS: 82, interpretation: 'Sensitif Baik (Opsi Rawat Jalan Oral)' },
      { antibiotic: 'Oksasilin / Kloksasilin', percentS: 0, interpretation: 'Resisten Mutlak (Mutasi Gen mecA/PBP2a)' },
      { antibiotic: 'Sefazolin', percentS: 0, interpretation: 'Resisten Mutlak' }
    ],
    empiricChoice: 'Vankomisin 15-20 mg/kgBB IV q8-12h (Target AUC/MIC 400-600) ATAU Linezolid 600mg IV/PO q12h',
    definitiveChoice: 'Linezolid 600mg q12h (penetrasi cairan epitel paru unggul) ATAU Vankomisin IV berbasis TDM',
    stewardshipAlert: 'Daptomisin diinaktivasi oleh surfaktan paru, KONTRAINDIKASI untuk pneumonia MRSA.'
  },
  {
    pathogenName: 'Pseudomonas aeruginosa (MDR / Multi-Drug Resistant)',
    gramType: 'Gram Negatif',
    resistancePhenotype: 'MDR',
    commonInfections: 'Pneumonia Ventilator (VAP), Infeksi Luka Bakar Luas, Sepsis Ektima Gangrenosum',
    susceptibilityProfile: [
      { antibiotic: 'Seftolozan-Tazobaktam', percentS: 92, interpretation: 'Sensitif Sangat Tinggi (Mengatasi Efluks & Porin)' },
      { antibiotic: 'Kolistin', percentS: 94, interpretation: 'Sensitif Sangat Tinggi (Lini Penyelamat)' },
      { antibiotic: 'Meropenem (Infus Kontinu)', percentS: 62, interpretation: 'Sensitif Intermediet (Gunakan Dosis Tinggi 2g q8h)' },
      { antibiotic: 'Seftazidim', percentS: 48, interpretation: 'Resisten Signifikan' },
      { antibiotic: 'Siprofloksasin', percentS: 38, interpretation: 'Resisten Mayoritas' }
    ],
    empiricChoice: 'Meropenem 2g IV q8h (infus 3 jam) + Amikasin 20 mg/kgBB IV q24h',
    definitiveChoice: 'Seftolozan-Tazobaktam 3g IV q8h (infus 1 jam) ATAU Kolistin IV berbasis klirens ginjal',
    stewardshipAlert: 'Gunakan selalu strategi farmakokinetik extended infusion (3 jam) untuk memaksimalkan waktu bebas antibiotik di atas MIC (fT > MIC).'
  },
  {
    pathogenName: 'Acinetobacter baumannii (CRAB / Carbapenem-Resistant)',
    gramType: 'Gram Negatif',
    resistancePhenotype: 'MDR',
    commonInfections: 'Pneumonia Ventilator ICU Berat, Bakteremia Kateter, Infeksi Luka Bedah Mayor',
    susceptibilityProfile: [
      { antibiotic: 'Kolistin', percentS: 92, interpretation: 'Sensitif Utama (Pilar Kombinasi)' },
      { antibiotic: 'Ampisilin-Sulbaktam (Dosis Tinggi)', percentS: 65, interpretation: 'Sensitif Khusus Sulbaktam (Target 6-9g Sulbaktam/hari)' },
      { antibiotic: 'Tigesiklin', percentS: 70, interpretation: 'Sensitif Moderat' },
      { antibiotic: 'Meropenem', percentS: 12, interpretation: 'Resisten Berat' },
      { antibiotic: 'Gentamisin', percentS: 22, interpretation: 'Resisten Tinggi' }
    ],
    empiricChoice: 'Kombinasi Ampisilin-Sulbaktam 3g IV q4h (dosis tinggi) + Kolistin 9 juta IU loading dose',
    definitiveChoice: 'Ampisilin-Sulbaktam 9g Sulbaktam/hari + Kolistin IV; pertimbangkan inhalasi kolistin untuk VAP',
    stewardshipAlert: 'Aktivitas bakterisida berasal dari molekul Sulbaktam yang mengikat PBP1 dan PBP3 Acinetobacter, bukan dari Ampisilinnya.'
  },
  {
    pathogenName: 'Enterococcus faecium (VRE / Vancomycin-Resistant)',
    gramType: 'Gram Positif',
    resistancePhenotype: 'VRE',
    commonInfections: 'Bakteremia Nosokomial, Endokarditis Infektif, Infeksi Saluran Kemih Terkomplikasi',
    susceptibilityProfile: [
      { antibiotic: 'Linezolid', percentS: 98, interpretation: 'Sensitif Sangat Tinggi (Lini Pertama Oral/IV)' },
      { antibiotic: 'Daptomisin', percentS: 95, interpretation: 'Sensitif Tinggi (Dosis Agresif 8-12 mg/kgBB)' },
      { antibiotic: 'Tigesiklin', percentS: 90, interpretation: 'Sensitif Baik (Infeksi Intraabdominal)' },
      { antibiotic: 'Vankomisin', percentS: 0, interpretation: 'Resisten Mutlak (Gen vanA / vanB)' },
      { antibiotic: 'Ampisilin', percentS: 5, interpretation: 'Resisten Mayoritas E. faecium' }
    ],
    empiricChoice: 'Linezolid 600mg IV/PO q12h ATAU Daptomisin 8-10 mg/kgBB IV q24h',
    definitiveChoice: 'Linezolid 600mg q12h (Maksimal 14-28 hari, waspada trombositopenia & neuropati perifer)',
    stewardshipAlert: 'Kategori Reserve WHO: Lakukan pembersihan disinfeksi lingkungan intensif karena spora/bakteri enterokokus bertahan berbulan-bulan di permukaan alat medik.'
  }
];

// ============================================================================
// 35. LATIN SIGNA & PRESCRIPTION PRESETS (12 KASUS)
// ============================================================================
export interface LatinSignaPreset {
  abbreviation: string;
  fullLatinTerm: string;
  indonesianMeaning: string;
  prescriptionExample: string;
  etiketTranslation: string;
  clinicalContext: string;
  commonMistakes: string;
}

export const LATIN_SIGNA_PRESETS: LatinSignaPreset[] = [
  {
    abbreviation: 'a.c.',
    fullLatinTerm: 'ante coenam',
    indonesianMeaning: 'Sebelum makan',
    prescriptionExample: 'R/ Domperidone tab 10 mg No. X \nS 3 d d tab I a.c.',
    etiketTranslation: 'Sehari 3 kali 1 tablet, diminum 15-30 menit SEBELUM makan.',
    clinicalContext: 'Obat prokinetik, antasida, dan obat yang penyerapannya terhambat oleh adanya makanan di lambung (misal: Sukralfat, Kaptopril, Levotiroksin).',
    commonMistakes: 'Pasien sering minum obat tepat sebelum suapan pertama; yang benar adalah 30-60 menit sebelum makan agar obat sudah terserap atau melapisi mukosa.'
  },
  {
    abbreviation: 'p.c.',
    fullLatinTerm: 'post coenam',
    indonesianMeaning: 'Sesudah makan',
    prescriptionExample: 'R/ Ibuprofen tab 400 mg No. X \nS 3 d d tab I p.c.',
    etiketTranslation: 'Sehari 3 kali 1 tablet, diminum SEGERA SESUDAH makan.',
    clinicalContext: 'Obat yang mengiritasi lambung (NSAID: Asam Mefenamat, Natrium Diklofenak), steroid (Metilprednisolon), atau obat yang butuh lemak makanan (Griseofulvin).',
    commonMistakes: 'Menunda minum obat berjam-jam paska makan sehingga lambung sudah kosong kembali dan proteksi mukosa berkurang.'
  },
  {
    abbreviation: 'd.c.',
    fullLatinTerm: 'durante coenam',
    indonesianMeaning: 'Pada waktu makan (bersama suapan makan)',
    prescriptionExample: 'R/ Acarbose tab 50 mg No. XXX \nS 3 d d tab I d.c.',
    etiketTranslation: 'Sehari 3 kali 1 tablet, dikunyah BERSAMA SUAPAN PERTAMA makan nasi.',
    clinicalContext: 'Acarbose menghambat enzim alfa-glukosidase di usus halus; wajib ada bersamaan dengan makanan karbohidrat untuk mencegah lonjakan glukosa post-prandial.',
    commonMistakes: 'Diminum 30 menit sebelum makan atau setelah makan selesai; obat menjadi sama sekali tidak efektif menghambat penyerapan glukosa.'
  },
  {
    abbreviation: 's.u.e.',
    fullLatinTerm: 'signa usus externus',
    indonesianMeaning: 'Tandai untuk pemakaian luar',
    prescriptionExample: 'R/ Salep 2-4 tube No. I \nS u.e. applic part dol',
    etiketTranslation: 'Untuk pemakaian luar, oleskan pada bagian yang sakit.',
    clinicalContext: 'Obat salep, krim, gel, cairan antiseptik, dan lotion yang DILARANG KERAS ditelan/diminum lewat mulut.',
    commonMistakes: 'Penggunaan etiket putih (seharusnya ETIKET BIRU untuk semua sediaan obat luar).'
  },
  {
    abbreviation: 'gtt. auric.',
    fullLatinTerm: 'guttae auriculares',
    indonesianMeaning: 'Tetes telinga',
    prescriptionExample: 'R/ Otopain ear drops fl No. I \nS 3 d d gtt III auric dext',
    etiketTranslation: 'Sehari 3 kali 3 tetes pada TELINGA KANAN.',
    clinicalContext: 'Infeksi otitis eksterna / otitis media dengan membran timpani intak; hangatkan botol di genggaman tangan sebelum diteteskan.',
    commonMistakes: 'Meneteskan obat langsung dari kulkas yang dingin memicu pusing berputar hebat (refleks kalori vertigo vestibular).'
  },
  {
    abbreviation: 'gtt. ophth.',
    fullLatinTerm: 'guttae ophthalmicae',
    indonesianMeaning: 'Tetes mata steril',
    prescriptionExample: 'R/ Cendo Xitrol eye drops fl No. I \nS 4 d d gtt I o.d.s.',
    etiketTranslation: 'Sehari 4 kali 1 tetes pada KEDUA MATA (mata kanan dan mata kiri).',
    clinicalContext: 'Infeksi konjungtivitis dan inflamasi mata; tekan kantung air mata (duktus nasolakrimalis) selama 1-2 menit paska tetes.',
    commonMistakes: 'Menyentuhkan ujung botol penetes langsung ke kornea atau bulu mata sehingga merusak sterilitas seluruh isi botol.'
  },
  {
    abbreviation: 'pulv. dtd.',
    fullLatinTerm: 'pulveres da tales doses',
    indonesianMeaning: 'Serbuk terbagi, berikan sebanyak dosis tersebut',
    prescriptionExample: 'R/ Paracetamol 120 mg \n   CTM 1 mg \n   m.f. pulv. dtd. No. X \nS 3 d d pulv I p.r.n.',
    etiketTranslation: 'Campur dan buatlah serbuk bagi, berikan sebanyak 10 bungkus dengan DOSIS TIAP BUNGKUS seperti tertulis. Sehari 3x1 bungkus bila perlu.',
    clinicalContext: 'Racikan puyer pediatrik; jika tertulis dtd, angka miligram obat dikalikan dengan jumlah nomor bungkus (No. X = dikali 10).',
    commonMistakes: 'Tertukar dengan resep tanpa dtd (formula bagi), yang jika salah hitung bisa mengakibatkan overdosis fatal 10 kali lipat!'
  },
  {
    abbreviation: 'p.r.n.',
    fullLatinTerm: 'pro re nata',
    indonesianMeaning: 'Jika diperlukan / bila perlu',
    prescriptionExample: 'R/ Paracetamol tab 500 mg No. X \nS p.r.n. tab I (febris / dolor)',
    etiketTranslation: 'Diminum 1 tablet BILA PERLU (saat demam atau nyeri saja, maksimal 4 tablet sehari).',
    clinicalContext: 'Obat analgesik, antipiretik, antiemetik, atau sedatif yang tidak wajib diminum rutin jika gejala sudah hilang.',
    commonMistakes: 'Pasien meminum obat secara terus-menerus tanpa jeda layaknya antibiotik, meningkatkan risiko hepatotoksisitas parasetamol.'
  },
  {
    abbreviation: 's.d.d. / b.d.d. / t.d.d.',
    fullLatinTerm: 'semel / bis / ter de die',
    indonesianMeaning: '1 kali sehari / 2 kali sehari / 3 kali sehari',
    prescriptionExample: 'R/ Amoxicillin tab 500 mg No. XV \nS t d d tab I',
    etiketTranslation: 'Sehari 3 kali 1 tablet (tiap 8 jam secara teratur).',
    clinicalContext: 'Menentukan interval waktu minum obat; 3 kali sehari berarti 24 jam dibagi 3 = TIAP 8 JAM, bukan pagi-siang-malam berdekatan.',
    commonMistakes: 'Minum obat jam 08.00 pagi, 13.00 siang, dan 19.00 malam lalu jeda kosong 13 jam hingga pagi berikutnya (kadar obat dalam darah anjlok).'
  },
  {
    abbreviation: 'h.s.',
    fullLatinTerm: 'hora somni',
    indonesianMeaning: 'Pada waktu akan tidur (malam hari)',
    prescriptionExample: 'R/ Simvastatin tab 20 mg No. XXX \nS 1 d d tab I h.s.',
    etiketTranslation: 'Sehari 1 kali 1 tablet, diminum MALAM HARI menjelang tidur.',
    clinicalContext: 'Statin kerja pendek (Simvastatin) karena enzim HMG-CoA reduktase aktif mensintesis kolesterol di malam hari; atau obat yang menyebabkan kantuk (CTM, Amitriptilin).',
    commonMistakes: 'Meminum Simvastatin di pagi hari yang menurunkan efektivitas penekanan sintesis kolesterol hingga 30%.'
  },
  {
    abbreviation: 'm.f.l.a.',
    fullLatinTerm: 'misce fac lege artis',
    indonesianMeaning: 'Campur dan buatlah menurut aturan seni kefarmasian',
    prescriptionExample: 'R/ Salep Hidrokortison 1% 5g \n   Kloramfenikol salep 2% 5g \n   m.f.l.a. cream No. I \nS u.e.',
    etiketTranslation: 'Campur dan buatlah krim menurut keahlian farmasi. Tandai untuk pemakaian luar.',
    clinicalContext: 'Instruksi dokter kepada Apoteker untuk meracik sediaan farmasi (puyer, salep, suspensi) secara homogen, stabil, dan lege artis.',
    commonMistakes: 'Mencampur sediaan tanpa memperhatikan inkompatibilitas fase minyak-air atau pemilihan basis salep yang tepat.'
  },
  {
    abbreviation: 'iter / N.I.',
    fullLatinTerm: 'iteratur / ne iteretur',
    indonesianMeaning: 'Boleh diulang / Tidak boleh diulang',
    prescriptionExample: 'R/ Amlodipine tab 10 mg No. XXX \nIter 2x \nS 1 d d tab I mane',
    etiketTranslation: 'Boleh diulang sebanyak 2 kali (Total pengambilan 3 x 30 = 90 tablet).',
    clinicalContext: 'Resep obat kronis (PRB hipertensi, diabetes) yang dapat ditebus ulang di apotek tanpa harus kembali ke dokter tiap bulan.',
    commonMistakes: 'Memberikan iterasi pada resep obat Narkotika atau Psikotropika (KONTRAINDIKASI MUTLAK permenkes: resep narkotika tidak boleh di-iter!).'
  }
];

// ============================================================================
// 36. FORNAS & BPJS RESTRICTION PRESETS (8 KASUS)
// ============================================================================
export interface FornasBpjsPreset {
  drugName: string;
  faskesLevel: string;
  fornasRestrictionRule: string;
  maxPrescriptionQuantity: string;
  prbEligibility: string;
  bpjsClaimRequirements: string;
  pharmacistDispensingNote: string;
}

export const FORNAS_BPJS_PRESETS: FornasBpjsPreset[] = [
  {
    drugName: 'Candesartan / Telmisartan (Antihipertensi ARB)',
    faskesLevel: 'Faskes 1, 2, 3',
    fornasRestrictionRule: 'Hanya untuk pasien hipertensi yang mengalami efek samping batuk kering persisten akibat ACE-inhibitor (Kaptopril/Ramipril), atau pasien dengan mikroalbuminuria diabetik.',
    maxPrescriptionQuantity: '30 tablet per bulan (Program Rujuk Balik / PRB)',
    prbEligibility: 'YA, masuk dalam 9 Penyakit Program Rujuk Balik (PRB) BPJS Kesehatan.',
    bpjsClaimRequirements: 'Surat Rujuk Balik (SRB) dari Sp.PD / Sp.JP di Faskes Rujukan Tingkat Lanjutan (FKRTL) yang masih aktif.',
    pharmacistDispensingNote: 'Verifikasi kepatuhan minum obat di FKTP/Apotek PRB; jangan berikan dobel terapi dengan obat golongan ACE-inhibitor.'
  },
  {
    drugName: 'Atorvastatin / Rosuvastatin (Statin Potensi Tinggi)',
    faskesLevel: 'Faskes 2 & 3 (FKRTL)',
    fornasRestrictionRule: 'Hanya untuk pasien pasca-Sindrom Koroner Akut (STEMI/NSTEMI), pasca-PCI/stenting, stroke iskemik, atau pasien DM dengan risiko kardiovaskular sangat tinggi (LDL target <55-70 mg/dL).',
    maxPrescriptionQuantity: '30 tablet per bulan',
    prbEligibility: 'Dapat dimasukkan ke PRB pasca-stabilisasi oleh Dokter Spesialis Jantung / Penyakit Dalam.',
    bpjsClaimRequirements: 'Hasil lab profil lipid (kolesterol total, LDL, HDL, TG) dan resume medis riwayat rawat inap kardiovaskular.',
    pharmacistDispensingNote: 'Pasien dislipidemia primer tanpa komorbid kardiovaskular berat wajib memulai terapi dari Simvastatin terlebih dahulu sesuai restriksi Fornas.'
  },
  {
    drugName: 'Analog Insulin (Glargine Basal & Aspart Rapid Acting)',
    faskesLevel: 'Faskes 2 & 3 (Inisiasi FKRTL) -> FKTP (PRB)',
    fornasRestrictionRule: 'Inisiasi awal hanya oleh Sp.PD / Sp.PD-KEMD jika HbA1c >8.5% atau gagal dengan kombinasi 2-3 OAD dosis maksimal. Maksimal 2 jenis insulin (1 basal + 1 prandial).',
    maxPrescriptionQuantity: 'Basal: Maksimal 2-3 pen/bulan; Rapid: Maksimal 3-4 pen/bulan (Sesuai kebutuhan unit harian)',
    prbEligibility: 'YA (PRB Diabetes Mellitus terkontrol).',
    bpjsClaimRequirements: 'Lampiran hasil laboratorium HbA1c dan lembar monitoring gula darah mandiri berkala.',
    pharmacistDispensingNote: 'Wajib diedukasi teknik suntik rotasi lokasi (perut, paha, lengan atas) dan penyimpanan insulin cadangan di kulkas (2-8°C, jangan di freezer).'
  },
  {
    drugName: 'Ceftriaxone 1g Injeksi (Sefalosporin Generasi 3)',
    faskesLevel: 'Faskes 2 & 3 (Rawat Inap RS)',
    fornasRestrictionRule: 'Antibiotik Lini 2 / Kategori Watch: Hanya untuk infeksi bakterial berat yang terbukti resisten terhadap antibiotik lini 1 (Ampisilin, Amoksisilin), atau infeksi meningitis/sepsis bakterial.',
    maxPrescriptionQuantity: 'Maksimal 7-10 hari per episode perawatan (kecuali endokarditis)',
    prbEligibility: 'TIDAK (Hanya untuk rawat inap / faskes rujukan akut).',
    bpjsClaimRequirements: 'Formulir Pengendalian Resistensi Antimikroba (PPRA) yang ditandatangani DPJP dan Apoteker Klinis.',
    pharmacistDispensingNote: 'Kaji kemungkinan switch oral (IV to Oral Switch) ke Cefixime atau Amoksisilin-Klavulanat setelah pasien afebris 48 jam dan leukosit normal.'
  },
  {
    drugName: 'Albumin Human 20% / 25% 100 mL Injeksi',
    faskesLevel: 'Faskes 2 & 3 (Rawat Inap ICU / Bedah / Penyakit Dalam)',
    fornasRestrictionRule: 'Hanya untuk kadar albumin serum <2.5 g/dL pada kasus: pasca-operasi bedah mayor digestif, sindrom nefrotik berat, sirosis hati dengan asites refrakter, atau luka bakar derajat 3 >30%.',
    maxPrescriptionQuantity: 'Maksimal 1-2 botol per hari hingga target albumin serum >=2.5-3.0 g/dL tercapai',
    prbEligibility: 'TIDAK (Obat rawat inap kritis).',
    bpjsClaimRequirements: 'Wajib melampirkan hasil laboratorium kadar serum albumin TERBARU (maksimal 1x24 jam sebelum resep).',
    pharmacistDispensingNote: 'Verifikasi ketat hasil lab pre dan post-infus; bila albumin sudah >=2.5 g/dL, infus albumin dihentikan dan dialihkan ke nutrisi enteral tinggi protein.'
  },
  {
    drugName: 'Clopidogrel 75 mg (Antiplatelet Ganda)',
    faskesLevel: 'Faskes 2 & 3 (Inisiasi) -> Faskes 1 (PRB)',
    fornasRestrictionRule: 'Hanya untuk Dual Antiplatelet Therapy (DAPT) pasca-PCI/stent koroner selama maksimal 12 bulan, atau pasien stroke iskemik/PAD yang intoleran/alergi terhadap Aspirin.',
    maxPrescriptionQuantity: '30 tablet per bulan (Maksimal durasi 12 bulan pasca-stenting)',
    prbEligibility: 'YA, untuk kelanjutan DAPT pasca-rawat jalan Spesialis Jantung.',
    bpjsClaimRequirements: 'Laporan tindakan kateterisasi jantung (PCI) dengan tanggal pemasangan stent.',
    pharmacistDispensingNote: 'Apoteker wajib memantau masa 12 bulan DAPT; setelah 12 bulan, pasien harus dikonsultasikan kembali ke Sp.JP untuk de-eskalasi ke monoterapi Aspirin tunggal.'
  },
  {
    drugName: 'Enoxaparin / Fondaparinux Injeksi Subkutan',
    faskesLevel: 'Faskes 2 & 3 (Rawat Inap RS)',
    fornasRestrictionRule: 'Profilaksis Deep Vein Thrombosis (DVT) pada bedah ortopedi mayor (artroplasti panggul/lutut), terapi DVT/emboli paru akut, dan Sindrom Koroner Akut (UAP/NSTEMI).',
    maxPrescriptionQuantity: 'Maksimal 7-10 hari atau hingga bridging antikoagulan oral (Warfarin/DOAC) tercapai target INR',
    prbEligibility: 'TIDAK (Hanya untuk faskes rujukan rawat inap).',
    bpjsClaimRequirements: 'Skor stratifikasi risiko trombosis Wells Score / Padua Score dan resume medis dokter.',
    pharmacistDispensingNote: 'Waspadai perdarahan aktif dan periksa kadar trombosit serial (risiko Heparin-Induced Thrombocytopenia / HIT).'
  },
  {
    drugName: 'Pantoprazole / Omeprazole Injeksi IV',
    faskesLevel: 'Faskes 2 & 3 (Rawat Inap RS)',
    fornasRestrictionRule: 'Hanya untuk perdarahan saluran cerna bagian atas (hematemesis/melena), profilaksis ulkus stres pada pasien ICU dengan ventilasi mekanik >48 jam, atau pasien yang tidak dapat mentoleransi obat oral.',
    maxPrescriptionQuantity: 'Maksimal 3 hari; wajib segera switch ke PPI oral jika perdarahan berhenti atau toleransi oral membaik',
    prbEligibility: 'TIDAK (Sediaan injeksi hanya di rumah sakit).',
    bpjsClaimRequirements: 'Hasil pemeriksaan endoskopi (EGD) atau catatan klinis perdarahan saluran cerna aktif.',
    pharmacistDispensingNote: 'Audit PPRA/Fornas: Penggunaan PPI injeksi sebagai pencegah maag rutin pada pasien tanpa risiko perdarahan sering menjadi temuan dispute klaim BPJS.'
  }
];

// ============================================================================
// 37. PNPK GUIDELINES SUMMARY PRESETS (6 KASUS)
// ============================================================================
export interface PnpkSummaryPreset {
  guidelineTitle: string;
  authoritativeSource: string;
  diseaseFocus: string;
  firstLineTherapy: string;
  escalationCriteria: string;
  contraindicationsAndWarnings: string;
  goldenPillars: string[];
  monitoringTarget: string;
}

export const PNPK_SUMMARY_PRESETS: PnpkSummaryPreset[] = [
  {
    guidelineTitle: 'PNPK Hipertensi Dewasa (InaSH & Konsensus Konsensus 2024)',
    authoritativeSource: 'Perhimpunan Dokter Hipertensi Indonesia (InaSH) & Kemenkes RI',
    diseaseFocus: 'Hipertensi Primer Esensial & Pencegahan Kerusakan Organ Target (HMOD)',
    firstLineTherapy: 'Kombinasi 2 Obat Dosis Rendah dalam 1 Tablet (SPC): ACEi/ARB + CCB (misal: Amlodipine + Candesartan) atau ACEi/ARB + Diuretik Tiazid.',
    escalationCriteria: 'Jika tensi belum mencapai target dalam 4-8 minggu, eskalasi ke kombinasi 3 obat (Triple SPC): ACEi/ARB + CCB + Tiazid dosis penuh.',
    contraindicationsAndWarnings: 'KONTRAINDIKASI menggabungkan ACE-inhibitor bersamaan dengan ARB (risiko gagal ginjal akut & hiperkalemia letal).',
    goldenPillars: [
      'Pilar 1: Modifikasi Gaya Hidup (Restriksi garam <2 gram/hari, diet DASH, stop merokok)',
      'Pilar 2: Kombinasi Dini Single Pill Combination (SPC) untuk meningkatkan kepatuhan pasien',
      'Pilar 3: Skrining Kerusakan Organ Target (eGFR, rasio albumin-kreatinin urin, EKG hipertrofi LVH)',
      'Pilar 4: Evaluasi Tensi Rumah Mandiri (Home Blood Pressure Monitoring / HBPM)'
    ],
    monitoringTarget: 'Target Tensi: <130/80 mmHg untuk usia 18-65 tahun; <140/80 mmHg untuk usia >=65 tahun (selama dapat ditoleransi).'
  },
  {
    guidelineTitle: 'PNPK Diabetes Mellitus Tipe 2 (PERKENI 2021)',
    authoritativeSource: 'Perkumpulan Endokrinologi Indonesia (PERKENI) & ADA 2024',
    diseaseFocus: 'Diabetes Mellitus Tipe 2 & Proteksi Organ Kardiorenal',
    firstLineTherapy: 'Metformin 500-2000 mg/hari bersama modifikasi gaya hidup sehat (nutrisi medik & aktivitas fisik).',
    escalationCriteria: 'Jika pasien memiliki komorbid ASCVD, Gagal Jantung (HFrEF), atau CKD: tambahkan SGLT-2i (Empagliflozin/Dapagliflozin) atau GLP-1 RA tanpa menunggu target Metformin.',
    contraindicationsAndWarnings: 'Hentikan Metformin jika eGFR <30 mL/menit/1.73m2 (risiko asidosis laktat); waspadai dehidrasi dan ketoasidosis euglikemik pada SGLT-2i.',
    goldenPillars: [
      'Pilar 1: Edukasi Komprehensif Diabetes & Pemantauan Glukosa Mandiri',
      'Pilar 2: Terapi Nutrisi Medis (Tukaran karbohidrat kompleks & batasi gula sederhana)',
      'Pilar 3: Latihan Jasmani Teratur (150 menit/minggu jalan cepat)',
      'Pilar 4: Farmakoterapi Berbasis Proteksi Kardiorenal (SGLT-2i & GLP-1 RA)'
    ],
    monitoringTarget: 'Target HbA1c <7.0% (atau <6.5% pada usia muda tanpa risiko hipoglikemia); GDP 80-130 mg/dL; GD2PP <180 mg/dL.'
  },
  {
    guidelineTitle: 'PNPK Penyakit Paru Obstruktif Kronik (PPOK GOLD 2024)',
    authoritativeSource: 'Global Initiative for Chronic Obstructive Lung Disease (GOLD) & PDPI',
    diseaseFocus: 'PPOK Eksaserbasi & Penurunan Fungsi Paru Progresif',
    firstLineTherapy: 'Grup A: Bronkodilator kerja panjang tunggal (LAMA atau LABA); Grup B: Kombinasi LAMA + LABA; Grup E (Eksaserbasi): LAMA + LABA (tambahkan ICS jika eosinofil darah >=300 sel/uL).',
    escalationCriteria: 'Eksaserbasi berulang >=2x/tahun atau 1x rawat inap: eskalasi ke Triple Therapy (LAMA + LABA + ICS) dan evaluasi teknik inhaler.',
    contraindicationsAndWarnings: 'Monoterapi ICS KONTRAINDIKASI pada PPOK (meningkatkan risiko pneumonia fatal tanpa memperbaiki mortilitas).',
    goldenPillars: [
      'Pilar 1: Penghentian Total Merokok (Intervensi farmakoterapi vareniklin / NRT)',
      'Pilar 2: Terapi Inhalasi Kombinasi Bronkodilator Ganda (LAMA + LABA)',
      'Pilar 3: Rehabilitasi Paru Komprehensif & Latihan Otot Pernapasan',
      'Pilar 4: Vaksinasi Wajib (Influenza tahunan, Pneumokokus PCV20/PPSV23, Tdap/Pertusis)'
    ],
    monitoringTarget: 'Mencegah eksaserbasi rawat inap, mengurangi sesak napas (skor mMRC <2 / CAT <10), dan mempertahankan toleransi aktivitas fisik.'
  },
  {
    guidelineTitle: 'PNPK Tuberkulosis Paru Sensitif Obat (Kemenkes RI 2023)',
    authoritativeSource: 'Kementerian Kesehatan Republik Indonesia & WHO 2023',
    diseaseFocus: 'TB Paru Kasus Baru & Pencegahan Resistensi Obat (TB-MDR)',
    firstLineTherapy: 'Kombinasi Dosis Tetap (FDC) 2HRZE / 4HR: Fase Intensif 2 bulan (Rifampisin + Isoniazid + Pirazinamid + Etambutol) dilanjutkan Fase Lanjutan 4 bulan (Rifampisin + Isoniazid).',
    escalationCriteria: 'Jika sputum BTA tetap positif di akhir bulan ke-2, lakukan pemeriksaan Tes Cepat Molekuler (TCM / GeneXpert) ulang untuk mendeteksi resistensi Rifampisin.',
    contraindicationsAndWarnings: 'Waspadai Hepatotoksisitas Imbas Obat (DILI): pantau SGOT/SGPT jika meningkat >3-5x batas atas normal disertai gejala ikterus/mual hebat, hentikan OAT sementara.',
    goldenPillars: [
      'Pilar 1: Diagnosis Berbasis Tes Cepat Molekuler (TCM) sebagai Standar Emas Lini 1',
      'Pilar 2: Terapi Obat Anti Tuberkulosis Kombinasi Dosis Tetap (KDT/FDC) Tanpa Putus',
      'Pilar 3: Pengawasan Menelan Obat (PMO) Ketat oleh Keluarga / Kader Kesehatan',
      'Pilar 4: Terapi Pencegahan TB (TPT) untuk Seluruh Kontak Serumah Balita & Dewasa'
    ],
    monitoringTarget: 'Konversi sputum BTA negatif pada akhir bulan ke-2, resolusi radiologis toraks, dan tuntas sembuh 100% pada akhir bulan ke-6.'
  },
  {
    guidelineTitle: 'PNPK Sepsis & Syok Septik Dewasa (Surviving Sepsis Campaign 2021)',
    authoritativeSource: 'Surviving Sepsis Campaign (SSC) 2021 & IDSA',
    diseaseFocus: 'Disfungsi Organ Mengancam Jiwa Akibat Respon Infeksi Terdisregulasi',
    firstLineTherapy: 'Hour-1 Bundle: Ambil kultur darah SEBELUM antibiotik, berikan antibiotik spektrum luas intravena dalam 1 JAM pertama, resusitasi kristaloid 30 mL/kgBB dalam 3 jam.',
    escalationCriteria: 'Jika MAP tetap <65 mmHg setelah resusitasi cairan adekuat: mulai vasopresor Norepinefrin via vena sentral (target MAP >=65 mmHg).',
    contraindicationsAndWarnings: 'Hindari penggunaan koloid hidroksietil starches (HES) untuk resusitasi cairan (memicu gagal ginjal akut & kebutuhan hemodialisis).',
    goldenPillars: [
      'Pilar 1: Paket 1 Jam (Hour-1 Bundle): Kultur, Antibiotik IV <60 menit, Resusitasi Cairan, Cek Laktat',
      'Pilar 2: Vasopresor Lini 1 Norepinefrin (Tambahkan Vasopresin 0.03 unit/menit jika dosis tinggi)',
      'Pilar 3: Kontrol Sumber Infeksi Bedah / Drainase Abses / Cabut Kateter Terinfeksi <12 jam',
      'Pilar 4: De-eskalasi Antibiotik Harian Berdasarkan Respon Klinis & Hasil Antibiogram'
    ],
    monitoringTarget: 'Penurunan kadar serum laktat >20% tiap 2 jam, produksi urin >=0.5 mL/kg/jam, dan perbaikan skor SOFA harian.'
  },
  {
    guidelineTitle: 'PNPK Dislipidemia & Pencegahan Aterosklerotik (PERKENI & InaSH)',
    authoritativeSource: 'PERKENI 2021, InaSH & European Society of Cardiology (ESC 2023)',
    diseaseFocus: 'Dislipidemia Aterogenik & Pencegahan Infark Miokard / Stroke Iskemik',
    firstLineTherapy: 'Statin Intensitas Tinggi: Atorvastatin 40-80 mg ATAU Rosuvastatin 20-40 mg per hari.',
    escalationCriteria: 'Jika target LDL-C tidak tercapai dengan dosis statin maksimal toleransi, tambahkan Ezetimibe 10 mg/hari; eskalasi lanjutan ke PCSK9 Inhibitor (Evolocumab).',
    contraindicationsAndWarnings: 'KONTRAINDIKASI MUTLAK pada kehamilan dan menyusui; waspadai rhabdomyolysis jika dikombinasi dengan Fibrat (Gemfibrozil).',
    goldenPillars: [
      'Pilar 1: Stratifikasi Risiko Kardiovaskular (Skor SCORE2 / Framingham)',
      'Pilar 2: Terapi Statin Intensitas Tinggi sebagai Landasan Baku Emas',
      'Pilar 3: Terapi Kombinasi Dini Statin + Ezetimibe pada Pasien Risiko Sangat Tinggi',
      'Pilar 4: Modifikasi Pola Makan Rendah Lemak Jenuh & Bebas Lemak Trans'
    ],
    monitoringTarget: 'Target LDL-C: <55 mg/dL & penurunan >=50% dari baseline untuk risiko sangat tinggi (pasca-serangan jantung); <70 mg/dL untuk risiko tinggi.'
  }
];

export const generateInstagramCaption = (
  template: TemplateType,
  indices: ActivePresetIndices
): string => {
  switch (template) {
    case 'showcase':
      return `Bosan buka-buka buku tebal atau bingung saat shift jaga di apotek/RS? 🏥💊

Kini ada FarmasiDruggist, asisten digital terlengkap untuk Apoteker, Dokter, TTK, dan Mahasiswa Kesehatan Indonesia! 🇮🇩✨

Fitur Unggulan Siap Pakai:
🛡️ Cek Interaksi Obat 11.000+ data klinis terkurasi (DDI, Duplikasi, Makanan & Penyakit)
💉 Kompatibilitas Injeksi IV Trissel’s ASHP 2024 & Presipitasi Y-Site
🩺 Kalkulator Klirens Ginjal (Cockcroft-Gault & KDIGO 2024)
👶 Kalkulator Dosis Puyer & Konversi Sirup Pediatrik
📋 57 Dokumen SOP Pelayanan Farmasi Akreditasi
📜 52 Regulasi & Standar DOWA 1, 2, 3 Resmi Kemenkes
📚 78 Literatur & Basis Ilmiah EBM Standar Emas
💊 90 Bab Hafalan Obat & TDM Farmakoterapi UKMPPAI

📲 Coba GRATIS sekarang tanpa ribet instal:
👉 Klik link di bio kami atau buka: farmasidruggist.vercel.app

Save postingan ini biar gak lupa! 🔖
Jangan lupa share ke rekan apoteker dan sejawat nakes kamu ya! 🚀

#apoteker #farmasiklinis #apotekerindonesia #farmasi #interaksiobat #ukmppai #tenagamedis #infofarmasi #rumahsakit #farmasidruggist #tipsapoteker #belajarfarmasi`;

    case 'stats':
      return `🔥 THE ULTIMATE PHARMACY CLINICAL COMPENDIUM 🔥

Mengapa ribuan apoteker dan praktisi kesehatan beralih ke FarmasiDruggist? 

Lihat fakta kekayaan database ilmiah kami:
⚡ 78+ Sumber Literatur & Basis Ilmiah EBM Terkreditasi
⚡ 90 Bab Hafalan Obat & TDM Farmakoterapi
⚡ 57 Dokumen SOP Pelayanan Farmasi Siap Pakai
⚡ 52 Regulasi & UU Kesehatan DOWA 1-2-3
⚡ 11.000+ Database Interaksi Klinis Terkurasi

Satu aplikasi web untuk seluruh kebutuhan pelayanan klinis Anda sehari-hari. 💼✨

👉 Kunjungi link di bio kami: farmasidruggist.vercel.app

#farmasidruggist #apotekerindonesia #farmasiklinis #databasefarmasi #nakes #tenagakesehatan #ukmppai #apotekerhebat #inovasifarmasi`;

    case 'interaction': {
      const cur = INTERACTION_PRESETS[indices.interaction || 0];
      const isModerate = cur.severity === 'Moderate';
      const isContra = cur.severity === 'Kontraindikasi';
      const alertHeader = isModerate 
        ? `⚡ KLINIS MODERATE (ATUR JEDA): ${cur.drugA} + ${cur.drugB} ⚡`
        : isContra
        ? `🚫 KONTRAINDIKASI MUTLAK: ${cur.drugA} + ${cur.drugB} 🚫`
        : `⚠️ CLINICAL ALERT (MAJOR): ${cur.drugA} + ${cur.drugB} ⚠️`;

      const tipHeader = isModerate
        ? `Interaksi ini berstatus MODERATE (Signifikan Klinis): Tidak perlu membatalkan obat, namun kuncinya ada pada edukasi Apoteker mengenai ATURAN JEDA WAKTU MINUM yang tepat!`
        : `Sering nemu resep kombinasi ini di instalasi farmasi? Hati-hati ya Sejawat!`;

      return `${alertHeader}

${tipHeader}

🔍 Mekanisme Klinis:
${cur.mechanism}

💡 Rekomendasi Solusi Apoteker:
${cur.solution}

Jangan sampai lolos saat skrining resep ya! Skrining interaksi obat dengan cepat & akurat menggunakan database FarmasiDruggist (11.000+ relasi interaksi klinis terkurasi tervalidasi DDInter & Lexicomp).

👉 Buka web aplikasinya di: farmasidruggist.vercel.app (Link di bio!)

Save & Share postingan edukasi ini ke teman-teman farmasi kamu! 🔖📲

#interaksiobat #farmasiklinis #apotekerindonesia #apoteker #farmasi #skriningresep #infofarmasi #farmasidruggist #obatkeras #edukasikesehatan #tenagamedis #ukmppai`;
    }

    case 'iv-compat': {
      const cur = IV_COMPAT_PRESETS[indices.iv || 0];
      return `💉 INKOMPATIBILITAS INJEKSI IV & Y-SITE: ${cur.drugA} + ${cur.drugB} ⚠️

Apoteker & Perawat Rawat Inap/ICU Wajib Waspada!
Pencampuran atau pemberian bersamaan via Y-site infus dapat memicu komplikasi fatal.

❌ Status Kompatibilitas: ${cur.compatibility}
🔍 Bahaya & Mekanisme:
${cur.dangerMechanism}

💡 Solusi Rekomendasi Farmasi:
${cur.clinicalSolution}

📚 Referensi: ${cur.standardReference}

Skrining kompatibilitas cairan infus & ratusan pasangan obat injeksi IV di FarmasiDruggist! 📲
👉 Akses gratis di: farmasidruggist.vercel.app (Link di bio)

Simpan postingan ini untuk jaga shift ya! 🔖
#injeksiIV #farmasirumahsakit #ICU #apoteker #perawat #kompatibilitasobat #farmasiklinis #farmasidruggist #infus`;
    }

    case 'high-alert': {
      const cur = HIGH_ALERT_PRESETS[indices.highAlert || 0];
      return `🚨 WASPADA OBAT HIGH-ALERT & LASA: ${cur.tallManName} 🚨

Keselamatan Pasien (Patient Safety) adalah prioritas nomor satu!
Obat dengan risiko tinggi salah dosis atau tertukar kemasan dapat berakibat fatal.

🏷️ Kategori: ${cur.category} (${cur.labelBadge})
⚠️ Titik Kritis Bahaya:
${cur.dangerAlert}

🛡️ Prosedur Keamanan Farmasi:
${cur.safetyRule}

Kelola daftar High-Alert, LASA, dan Tall Man Lettering standar KARS & ISMP di FarmasiDruggist!
👉 Cek langsung di: farmasidruggist.vercel.app (Link di bio)

Share postingan ini ke instalasi farmasi & unit perawatan kamu! 📲
#highalert #lasa #patientsafety #apoteker #farmasirumahsakit #starkes #farmasidruggist #keselamatanpasien`;
    }

    case 'dowa': {
      const cur = DOWA_PRESETS[indices.dowa || 0];
      return `📋 ATURAN PENYERAHAN OBAT DOWA DI APOTEK: ${cur.drugName} 💊

Bolehkah obat keras diserahkan tanpa resep dokter oleh Apoteker? 
Bisa! Asal memenuhi ketentuan Daftar Obat Wajib Apotek (DOWA) resmi Kepmenkes RI.

📜 Dasar Hukum: ${cur.regulationNo}
📦 Batas Maksimal Penyerahan:
👉 ${cur.maxDispense}

🔍 Indikasi Medis Terbatas:
${cur.indication}

💡 Catatan Konseling & Edukasi Pasien:
${cur.counselingPoint}

Cek daftar lengkap regulasi DOWA 1, 2, dan 3 di modul Regulasi FarmasiDruggist! 📲
👉 Buka di: farmasidruggist.vercel.app (Link di bio)

#dowa #apotek #apoteker #swamedikasi #pelayananfarmasi #konselingobat #farmasidruggist #tipsapoteker`;
    }

    case 'bud': {
      return `👶 BEYOND-USE DATE (BUD) SEDIAAN PUYER & RACIKAN 💊

Sering bingung nulis tanggal kedaluwarsa racikan puyer atau sirup di etiket? Simak panduan resmi Farmakope Indonesia VI & USP <795> ini!

Aturan Baku BUD Racikan Non-Steril:
✅ Serbuk Bagi (Puyer) & Kapsul Bebas Air: Maksimal 25% dari sisa waktu kedaluwarsa bahan baku asli atau 6 bulan (mana yang lebih singkat).
✅ Sirup Kering Rekonstitusi (Antibiotik): 7 - 14 hari paska dilarutkan dengan air matang.
✅ Larutan / Suspensi Oral Mengandung Air: Maksimal 14 hari disimpan di kulkas suhu 2-8°C.
✅ Sediaan Semisolid (Salep / Krim Bebas Air): Maksimal 30 - 90 hari pada suhu ruang terkontrol.
✅ Sediaan Tetes Mata Botol Multidose: Maksimal 28 hari paska segel pertama kali dibuka.

Hitung kebutuhan zat pengisi SL dan BUD otomatis dengan Kalkulator Puyer FarmasiDruggist! 📲
👉 Akses gratis di: farmasidruggist.vercel.app (Link di bio)

#puyer #resepobat #bud #beyonduse date #farmakope #apoteker #farmasi #farmasidruggist #infofarmasi #apotek #pediatrik`;
    }

    case 'pregnancy': {
      const cur = PREGNANCY_PRESETS[indices.pregnancy || 0];
      return `🤰 KEAMANAN OBAT IBU HAMIL (PREGNANCY SAFETY): ${cur.drugName} 👶

Skrining keamanan obat bumil sangat krusial untuk mencegah kecacatan janin (teratogenik) dan komplikasi kehamilan.

⚠️ Kategori Keamanan FDA: ${cur.fdaCategory}
🚨 Peringatan Trimester: ${cur.trimesterRisk}

🔍 Bahaya Teratogenik / Fetotoksisitas:
${cur.teratogenicDanger}

✅ Rekomendasi Alternatif Pilihan Paling Aman:
${cur.safeAlternative}

Skrining keamanan ribuan obat untuk Ibu Hamil & Menyusui (Laktasi) di FarmasiDruggist! 📲
👉 Akses gratis di: farmasidruggist.vercel.app (Link di bio)

Simpan postingan ini ya Sejawat Apoteker & Bidan! 🔖
#ibuhamil #kehamilan #bumil #keamananobat #farmasiklinis #apoteker #kebidanan #farmasidruggist`;
    }

    case 'toxicology': {
      const cur = TOXICOLOGY_PRESETS[indices.toxicology || 0];
      return `🧪 GAWAT DARURAT TOKSIKOLOGI: ${cur.toxicAgent} & PENAWAR SPESIFIK 🏥

Keterlambatan pemberian antidotum pada intoksikasi akut berisiko kegagalan organ fatal. Simak penanganan lini pertama berikut!

⚠️ Batas Ambang Toksisitas:
${cur.overdoseThreshold}

🔍 Mekanisme Keracunan:
${cur.toxicMechanism}

💉 Antidotum Spesifik: ${cur.antidoteName}
📋 Protokol Pemberian:
${cur.antidoteProtocol}

Panduan toksikologi, dosis antidotum gawat darurat, dan kurva Rumack-Matthew lengkap di FarmasiDruggist! 📲
👉 Buka aplikasi di: farmasidruggist.vercel.app (Link di bio)

#toksikologi #antidotum #gawatdarurat #IGD #apoteker #dokter #farmasiklinis #farmasidruggist #keracunan`;
    }

    case 'swam-triage': {
      const cur = SWAM_TRIAGE_PRESETS[indices.triage || 0];
      return `🩺 TRIAGE APOTEK & RED FLAGS RUJUK DOKTER: ${cur.condition} 🏥

Apoteker di garda terdepan wajib memastikan pasien swamedikasi aman dan segera merujuk jika ada tanda bahaya!

✅ Kriteria Swamedikasi Aman:
${cur.safeForSelfMed}
⏱️ Batas Durasi Aman: ${cur.maxSelfMedDays}

🚨 RED FLAGS (Wajib Segera Rujuk ke Dokter/IGD):
${cur.redFlagsToRefer}

💊 Rekomendasi Terapi Lini Pertama Apoteker:
${cur.pharmacistRecommendation}

Pelajari panduan triage klinis & 40+ protokol swamedikasi terstandar Kemenkes di FarmasiDruggist! 📲
👉 farmasidruggist.vercel.app (Link di bio)

#swamedikasi #triage #redflags #apotek #apoteker #pelayananfarmasi #klinik #farmasidruggist`;
    }

    case 'swam-batuk': {
      const cur = SWAM_BATUK_PRESETS[indices.batuk || 0];
      return `🗣️ MANAJEMEN BATUK & FLU DI APOTEK: ${cur.coughType} 💊

Kenali jenis batuk pasien sebelum merekomendasikan obat agar terapi efektif dan tidak kontraindikasi!

🔍 Ciri Khas & Karakteristik:
${cur.characteristics}

💊 Pilihan Obat Lini Pertama:
${cur.firstLineDrug}

⚠️ Peringatan Kritis / Kontraindikasi:
${cur.contraindicationAlert}

💡 Edukasi Gaya Hidup & Tips Pasien:
${cur.lifestyleTips}

Modul swamedikasi respiratori dan puluhan algoritma batuk klinis di FarmasiDruggist! 📲
👉 farmasidruggist.vercel.app (Link di bio)

#obatbatuk #batukkering #batukberdahak #apotek #swamedikasi #edukasiobat #farmasidruggist`;
    }

    case 'swam-diare': {
      const cur = SWAM_DIARE_PRESETS[indices.diare || 0];
      return `💧 PROTOKOL DIARE AKUT & REHIDRASI: ${cur.patientGroup} 🏥

Diare adalah penyebab dehidrasi berbahaya bila penanganannya salah! Simak protokol resmi WHO & Kemenkes berikut:

💧 Rehidrasi Utama (Cegah Dehidrasi):
${cur.primaryTherapy}

💊 Terapi Suplementasi:
${cur.supplementTherapy}

❌ Peringatan / Kontraindikasi:
${cur.contraindicatedDrug}

🥗 Anjuran Nutrisi & Diet:
${cur.dietRecommendation}

Kalkulator rehidrasi diare dan panduan swamedikasi saluran cerna lengkap di FarmasiDruggist! 📲
👉 farmasidruggist.vercel.app (Link di bio)

#diare #oralit #zinc #anak #pediatrik #apoteker #swamedikasi #farmasiklinis #farmasidruggist`;
    }

    case 'swam-maag': {
      const cur = SWAM_MAAG_PRESETS[indices.maag || 0];
      return `🥣 MANAJEMEN DISPEPSIA, MAAG & GERD: ${cur.complaintName} 💊

Jangan salah waktu minum obat lambung! Beda jenis obat, beda cara kerja dan waktu konsumsinya.

🔍 Mekanisme & Peran Obat:
${cur.mechanismRole}

💊 Pilihan Terapi:
${cur.preferredDrug}

⏰ Aturan & Waktu Minum yang Tepat:
${cur.administrationTiming}

⚠️ Waspada Interaksi Obat:
${cur.drugInteractionAlert}

Edukasi waktu minum obat dan panduan penyerahan obat lambung DOWA di FarmasiDruggist! 📲
👉 farmasidruggist.vercel.app (Link di bio)

#obatmaag #antasida #omeprazole #gerd #dispepsia #lambung #apoteker #konselingobat #farmasidruggist`;
    }

    case 'drug-lab': {
      const cur = DRUG_LAB_PRESETS[indices.drugLab || 0];
      return `🧪 INTERAKSI OBAT DENGAN UJI LAB: ${cur.drugName} 🩸

Waspada hasil tes laboratorium yang terdistorsi akibat konsumsi obat!

🎯 Parameter Lab Terpengaruh: ${cur.labTestAffected}
⚠️ Dampak pada Hasil: ${cur.testImpact}

🔬 Penjelasan Mekanisme:
${cur.clinicalExplanation}

💡 Rekomendasi Apoteker / Dokter:
${cur.recommendation}

Ketahui ratusan interaksi obat dengan parameter laboratorium di FarmasiDruggist! 📲
👉 farmasidruggist.vercel.app (Link di bio)

#laboratorium #hasillab #tesdarah #interaksiobat #farmasiklinis #patologiklinik #farmasidruggist`;
    }

    case 'side-effects': {
      const cur = SIDE_EFFECT_PRESETS[indices.sideEffect || 0];
      return `⚠️ FARMAKOVIGILANS & ADR: ${cur.drugName} ➔ ${cur.adverseEffect} 🛡️

Deteksi efek samping obat sejak dini untuk melindungi keselamatan pasien (Patient Safety)!

📊 Kausalitas Algoritma Naranjo:
👉 ${cur.naranjoScore}

🔬 Patofisiologi Reaksi Efek Samping:
${cur.pathophysiology}

🛡️ Action Plan / Tindakan Apoteker:
${cur.actionPlan}

Hitung skor Naranjo otomatis dan pantau 200+ efek samping obat di FarmasiDruggist! 📲
👉 farmasidruggist.vercel.app (Link di bio)

#efeksamping #naranjo #farmakovigilans #MESO #patientsafety #apoteker #farmasirumahsakit #farmasidruggist`;
    }

    case 'renal-dosing': {
      const cur = RENAL_DOSING_PRESETS[indices.renal || 0];
      return `🩺 PENYESUAIAN DOSIS GANGGUAN GINJAL: ${cur.drugName} 🧮

Pasien dengan penurunan fungsi ginjal berisiko tinggi mengalami akumulasi obat dan toksisitas organ!

📐 Cutoff Klirens Ginjal: ${cur.cutoffCrCl}
💊 Dosis Normal: ${cur.standardDose}
⚖️ Penyesuaian Dosis Ginjal:
👉 ${cur.adjustedDose}

⚠️ Bahaya Toksisitas jika Tidak Disesuaikan:
${cur.clinicalToxicity}

Kalkulator Cockcroft-Gault & panduan dosis 63+ obat ginjal KDIGO di FarmasiDruggist! 📲
👉 farmasidruggist.vercel.app (Link di bio)

#dosisginjal #nefrologi #hemodialisa #gagalginjal #crcl #cockcroftgault #apoteker #farmasiklinis #farmasidruggist`;
    }

    case 'pediatric-dose': {
      const cur = PEDIATRIC_DOSE_PRESETS[indices.pediatric || 0];
      return `👶 KALKULATOR DOSIS PUYER PEDIATRIK: ${cur.drugName} 💊

Menghitung dosis anak tidak boleh pakai kira-kira! Wajib berbasis berat badan (mg/kgBB).

📐 Aturan Dosis Standar:
${cur.doseRuleMgKg}
🛑 Batas Maksimal: ${cur.maxDoseRule}

📝 Contoh Simulasi Perhitungan:
${cur.exampleCalculation}

💡 Tips Peracikan & Zat Pengisi SL:
${cur.compoundingTips}

Hitung otomatis dosis puyer, jumlah tablet bahan baku, dan zat pengisi SL di FarmasiDruggist! 📲
👉 farmasidruggist.vercel.app (Link di bio)

#dosisanak #puyer #racikan #pediatrik #kalkulatordosis #apoteker #resepobat #farmasidruggist`;
    }

    case 'beers-geriatric': {
      const cur = BEERS_PRESETS[indices.beers || 0];
      return `👴 KRITERIA BEERS AGS 2023: ${cur.drugName} PADA LANSIA 👵

Obat tertentu memiliki risiko efek samping berlebih pada pasien usia lanjut (≥65 tahun).

🏷️ Golongan Kriteria Beers:
👉 ${cur.beersClass}

🚨 Bahaya Spesifik pada Lansia:
${cur.geriatricDanger}

✅ Alternatif Terapi yang Lebih Aman:
${cur.saferAlternative}

Skrining interaksi polifarmasi dan kriteria Beers lengkap di FarmasiDruggist! 📲
👉 farmasidruggist.vercel.app (Link di bio)

#geriatri #lansia #kriteriabeers #polifarmasi #apoteker #farmasiklinis #edukasiobat #farmasidruggist`;
    }

    case 'patient-counseling': {
      const cur = PATIENT_COUNSELING_PRESETS[indices.counseling || 0];
      return `🗣️ PANDUAN CARA PAKAI OBAT KHUSUS: ${cur.deviceType} 🏥

Efektivitas obat khusus sangat ditentukan oleh teknik penggunaan yang tepat oleh pasien!

📋 Langkah-Langkah Penggunaan yang Benar:
${cur.stepByStepProtocol.join('\n')}

❌ Kesalahan Fatal yang Sering Terjadi:
${cur.criticalMistakesToAvoid}

🧼 Cara Penyimpanan & Pembersihan:
${cur.cleaningInstructions}

Modul Pelayanan Informasi Obat (PIO) dan kartu edukasi pasien di FarmasiDruggist! 📲
👉 farmasidruggist.vercel.app (Link di bio)

#carapakai #inhaler #tetesmata #konselingobat #PIO #apoteker #pasien #farmasidruggist`;
    }

    case 'drug-notes': {
      const cur = DRUG_NOTES_PRESETS[indices.drugNotes || 0];
      return `📚 FLASHCARD HAFALAN OBAT UKMPPAI: ${cur.drugName} 🧠

Rangkuman cepat materi farmakoterapi dan Therapeutic Drug Monitoring (TDM) untuk ujian UKMPPAI & praktik klinis!

🎯 Rentang Terapi Sempit (TDM Target):
👉 ${cur.therapeuticWindow}

⏰ Waktu Pengambilan Sampel Darah (Sampling):
${cur.clinicalSamplingTime}

⚠️ Gejala Toksisitas Khas:
${cur.toxicitySymptoms}

💡 Poin Kunci Apoteker:
${cur.pharmacistKeyPoint}

90 bab rangkuman hafalan obat & ribuan bank soal UKMPPAI di FarmasiDruggist! 📲
👉 farmasidruggist.vercel.app (Link di bio)

#ukmppai #hafalanobat #farmakoterapi #TDM #apoteker #belajarfarmasi #farmasidruggist`;
    }

    case 'sop-farmasi': {
      const cur = SOP_FARMASI_PRESETS[indices.sop || 0];
      return `📋 STANDAR PELAYANAN KEFARMASIAN: ${cur.sopTitle} 🏥

Siap menghadapi Akreditasi Rumah Sakit, Puskesmas, dan Apotek dengan SOP berstandar resmi Kemenkes RI!

📜 Dasar Regulasi:
${cur.standardReference}

✅ Poin Kepatuhan Kunci:
${cur.keyCompliancePoints.map(p => `• ${p}`).join('\n')}

🔍 Fokus Penilaian Audit:
${cur.criticalAuditFocus}

57 dokumen SOP pelayanan farmasi klinis & manajerial siap pakai di FarmasiDruggist! 📲
👉 farmasidruggist.vercel.app (Link di bio)

#sopkefarmasian #akreditasi #rumahsakit #puskesmas #apotek #kemenkes #apoteker #farmasidruggist`;
    }


    case 'therapy-algorithm': {
      const cur = THERAPY_ALGORITHM_PRESETS[indices.algorithm || 0];
      return `📊 ALGORITMA TATALAKSANA KLINIS BERTAHAP: ${cur.diseaseName.toUpperCase()} 🩺

Panduan resmi berbasis konsensus ${cur.guidelineSource}!
Tatalaksana penyakit kronis memerlukan eskalasi terapi bertahap yang disiplin untuk mencapai target outcome klinis.

📋 ALUR LANGKAH DEMI LANGKAH:
${cur.steps.map(s => `▶️ Langkah ${s.stepNum}: ${s.stageTitle} (${s.categoryBadge})
   💊 Terapi: ${s.drugs}
   🎯 Target: ${s.targetCriteria}
   ⚠️ Evaluasi: ${s.triggerNext}`).join('\n\n')}

💡 Pharmacist Clinical Pearl:
${cur.pharmacistPearl}

Buka 12 algoritma klinis interaktif, pedoman terapi PNPK/PERKI/PERKENI/GINA lengkap di FarmasiDruggist! 📲
👉 farmasidruggist.vercel.app (Link di bio)

#algoritmaklinis #panduanterapi #farmasiklinis #pedomanterapi #dokter #apoteker #farmasidruggist #konsensusklinis`;
    }

    case 'interactive-flowchart': {
      const cur = INTERACTIVE_FLOWCHART_PRESETS[indices.flowchart || 0];
      return `🔀 CLINICAL DECISION TREE: ${cur.clinicalCondition.toUpperCase()} 🏥

Pedoman Terapi: ${cur.guidelineSource}
Presentasi Pasien: ${cur.patientPresentation}

🌿 POHON KEPUTUSAN & STRATIFIKASI KOMORBID:
${cur.branches.map(b => `🔹 JIKA: ${b.condition}
   👉 Rekomendasi Terapi: ${b.recommendation}
   🔍 Landasan Klinis: ${b.rationale}`).join('\n\n')}

💡 Tips Pengambilan Keputusan Apoteker:
${cur.decisionTip}

Simulasi alur keputusan klinis & pohon algoritma interaktif di FarmasiDruggist! 📲
👉 farmasidruggist.vercel.app (Link di bio)

#decisiontree #algoritmaterapi #farmasiklinis #komorbiditas #apoteker #tenagamedis #farmasidruggist`;
    }

    case 'guideline-pillars': {
      const cur = GUIDELINE_PILLARS_PRESETS[indices.pillars || 0];
      return `🏛️ PILAR TERAPI BAKU EMAS: ${cur.regimenTitle.toUpperCase()} 🌟

Target Indikasi: ${cur.diseaseTarget}
Sumber Acuan: ${cur.guidelineSource}
🎯 Dampak Klinis: ${cur.mortalityBenefit}

💊 4 PILAR FARMAKOLOGIS PENYELAMAT JIWA:
${cur.pillars.map(p => `🏛️ Pilar ${p.pillarNumber}: ${p.drugClass}
   👉 Contoh Obat: ${p.exampleDrug}
   ✨ Manfaat: ${p.roleBenefit}`).join('\n\n')}

⚠️ Peringatan Keselamatan Pasien:
${cur.clinicalWarning}

Koleksi pilar terapi baku emas & regimen multimodal lengkap di FarmasiDruggist! 📲
👉 farmasidruggist.vercel.app (Link di bio)

#fantasticfour #pilarterapi #gagaljantung #farmasiklinis #terapibakuemas #apoteker #farmasidruggist`;
    }

    case 'clinical-pathway': {
      const cur = CLINICAL_PATHWAY_PRESETS[indices.pathway || 0];
      return `📋 HOSPITAL CLINICAL PATHWAY: ${cur.pathwayTitle.toUpperCase()} 🏥

Standar Pelayanan Rawat Inap Rumah Sakit Terakreditasi!
🏷️ ${cur.standardICD} | ${cur.losTarget}
Kriteria Masuk Rawat (Admission): ${cur.admissionCriteria}

📅 PROTOKOL FASE HARI RAWAT:
${cur.phases.map(ph => `📌 ${ph.dayLabel}: ${ph.clinicalFocus}
   💊 Terapi: ${ph.medications}
   🎯 Target: ${ph.monitoringTarget}`).join('\n\n')}

✅ Kriteria Pemulangan Aman (Discharge Readiness):
${cur.dischargeReadiness}

Akses panduan Clinical Pathway rumah sakit terstandar Kemenkes RI di FarmasiDruggist! 📲
👉 farmasidruggist.vercel.app (Link di bio)

#clinicalpathway #rumahsakit #rawatinap #akreditasiRS #farmasirumahsakit #apoteker #farmasiklinis #farmasidruggist`;
    }


    case 'ukmppai-quiz': {
      const cur = UKMPPAI_QUIZ_PRESETS[indices.ukmppaiQuiz || 0];
      return `🧠 LATIHAN SOAL CBT UKMPPAI APOTEKER INDONESIA 📚

Domain Soal: ${cur.domainName}
Kategori: ${cur.examType}

📖 STUDI KASUS (VIGNETTE):
${cur.vignette}

❓ PERTANYAAN:
${cur.question}

🔘 PILIHAN JAWABAN:
${cur.options.map(opt => `[${opt.key}] ${opt.text}`).join('\n')}

💬 Coba tebak jawabannya di kolom komentar sebelum cek pembahasan di bawah! 👇
.
.
.
✅ KUNCI JAWABAN RESMI: [${cur.correctAnswer}]

💡 PEMBAHASAN ILMIAH:
${cur.explanation}

⚠️ TIPS JEBAKAN UJIAN (EXAM PITFALL):
${cur.examPitfallTip}

📚 Acuan: ${cur.referenceStandard}

Akses 1.100+ bank soal CBT UKMPPAI, modul OSCE & try out berstandar KFN di FarmasiDruggist! 📲
👉 farmasidruggist.vercel.app (Link di bio)

#ukmppai #soalukmppai #apoteker #cbtukmppai #belajarfarmasi #farmasiklinis #ujianapoteker #farmasidruggist`;
    }

    case 'uktvf-quiz': {
      const cur = UKTVF_QUIZ_PRESETS[indices.uktvfQuiz || 0];
      return `🎓 LATIHAN SOAL CBT UKTVF (TENAGA VOKASI FARMASI D3/D4) 🏥

Domain Kompetensi: ${cur.domainName}
Kategori: ${cur.examType}

📖 SKENARIO KASUS:
${cur.vignette}

❓ PERTANYAAN:
${cur.question}

🔘 PILIHAN JAWABAN:
${cur.options.map(opt => `[${opt.key}] ${opt.text}`).join('\n')}

💬 Tulis jawaban kamu di kolom komentar yuk! 👇
.
.
.
✅ KUNCI JAWABAN RESMI: [${cur.correctAnswer}]

💡 PEMBAHASAN LENGKAP:
${cur.explanation}

⚠️ TIPS JITU UJIAN:
${cur.examPitfallTip}

📚 Acuan: ${cur.referenceStandard}

Bank soal try out UKTVF D3 Farmasi terstandar APDFI terlengkap di FarmasiDruggist! 📲
👉 farmasidruggist.vercel.app (Link di bio)

#uktvf #d3farmasi #ttk #tenagavokasifarmasi #soaluktvf #apdfi #farmasi #apotek #farmasidruggist`;
    }

    case 'regulations': {
      const cur = REGULATIONS_PRESETS[indices.regulations || 0];
      return `⚖️ HUKUM & REGULASI FARMASI: ${cur.regulationTitle} 📜

Apoteker dan tenaga kesehatan wajib memahami hak, kewajiban, dan batasan hukum dalam praktik kefarmasian!

🏛️ Dasar Hukum Resmi:
${cur.legalAuthority}

📌 Mandat Pokok:
${cur.coreMandate}

⚠️ Konsekuensi Pelanggaran:
${cur.penaltyOrConsequence}

52 kumpulan regulasi, UU Kesehatan No. 17/2023, & aturan DOWA di FarmasiDruggist! 📲
👉 farmasidruggist.vercel.app (Link di bio)

#hukumfarmasi #uukesehatan #regulasiobat #apoteker #tenagamedis #farmasidruggist`;
    }

    case 'ai-education-prompt': {
      const cur = AI_EDUCATION_PROMPT_PRESETS[indices.aiPrompt || 0];
      return `🤖 FORMULA PROMPT AI FARMASI KLINIS: ${cur.topicTitle.toUpperCase()} 💡

Ingin membuat materi edukasi pasien berkualitas tinggi dengan AI (ChatGPT / Gemini / Claude) tanpa halusinasi medis? Gunakan formula prompting Apoteker profesional berikut!

🎯 Topik Sasaran: ${cur.topicTitle}
👥 Target Audiens: ${cur.targetAudience}
📱 Format Media: ${cur.mediaFormat}
🎙️ Gaya Bahasa (Tone): ${cur.tone}

📋 4 PILAR FORMULA PROMPT MEDIS:
👉 Role: ${cur.formula.role}
👉 Context: ${cur.formula.context}
👉 Task: ${cur.formula.task}
👉 Constraint: ${cur.formula.constraint}
👉 Output: ${cur.formula.outputFormat}

✨ PROMPT SIAP COPY-PASTE KE AI:
"${cur.livePrompt}"

🛡️ Guardrails Keamanan Klinis Wajib:
${cur.guardrails.map(g => '• ' + g).join('\n')}

Salin prompt di atas, sesuaikan dengan konteks faskes/apotek Anda, dan dapatkan konten edukasi terpercaya dalam hitungan detik! 📲
👉 farmasidruggist.vercel.app (Link di bio)

${cur.suggestedHashtags} #promptai #chatgptfarmasi #edukasikesehatan #farmasidruggist`;
    }

    case 'ppra-gyssens': {
      const cur = PPRA_GYSSENS_PRESETS[indices.gyssens || 0];
      return `🛡️ AUDIT KUALITATIF GYSSENS: ${cur.categoryCode.toUpperCase()} - ${cur.categoryTitle.toUpperCase()} 🦠

Tahukah Sejawat bagaimana Komite PPRA RS mengevaluasi apakah peresepan antibiotik sudah tepat dan rasional? Inilah alur audit metode Gyssens (Permenkes 8/2015 & STARKES)!

🏷️ Kategori Hasil Audit: ${cur.categoryCode}
📌 Definisi Kategori: ${cur.categoryTitle}
🔍 Tahap Penilaian: ${cur.evaluationStep}

📋 Studi Kasus Nyata:
${cur.clinicalScenario}

💊 Resep yang Dievaluasi:
${cur.prescribedDrug}

⚖️ Kesimpulan Audit Gyssens:
${cur.gyssensVerdict}

💡 Rekomendasi Apoteker / Komite PPRA:
${cur.pharmacistRecommendation}

🚨 Kaidah Pokok PPRA:
${cur.keyStewardshipRule}

Pelajari panduan lengkap evaluasi Gyssens, DDD antibiotik, & formularium PPRA di FarmasiDruggist! 📲
👉 farmasidruggist.vercel.app (Link di bio)

#gyssens #ppra #stewardshipantibiotik #antimicrobialresistance #farmasirumahsakit #akreditasirs #farmasidruggist`;
    }

    case 'ppra-prophylaxis': {
      const cur = PPRA_PROPHYLAXIS_PRESETS[indices.prophylaxis || 0];
      return `🔪 PROTOKOL PROFILAKSIS BEDAH (PPRA): ${cur.surgicalProcedure.toUpperCase()} 🛡️

Profilaksis bedah yang tepat menyelamatkan pasien dari Infeksi Luka Operasi (ILO) tanpa memicu kuman kebal! Pahami standar waktu dan pilihan antibiotik rasional.

🏥 Prosedur Bedah: ${cur.surgicalProcedure}
🏷️ Jenis Insisi Luka: ${cur.incisionType}
💊 Antibiotik Lini Pertama: ${cur.recommendedAntibiotic}

⏰ Waktu Pemberian Wajib:
👉 ${cur.administrationTiming}

🔄 Interval Dosis Ulang (Redosing):
${cur.redosingInterval}

⏳ Batas Durasi Maksimal:
👉 ${cur.maximumDuration}

⚠️ Alternatif Alergi Penisilin:
${cur.alternativeForPenicillinAllergy}

📋 Checkpoint Mutu Klinis:
${cur.criticalCheckpoints.map(c => '• ' + c).join('\n')}

Akses panduan profilaksis bedah lengkap seluruh spesialisasi di FarmasiDruggist! 📲
👉 farmasidruggist.vercel.app (Link di bio)

#profilaksisbedah #surgicalprophylaxis #ppra #infeksilukaoperasi #cefazolin #farmasirumahsakit #farmasidruggist`;
    }

    case 'ppra-antibiogram': {
      const cur = PPRA_ANTIBIOGRAM_PRESETS[indices.antibiogram || 0];
      return `🧫 ANTIBIOGRAM & PETA KUMAN RS: ${cur.pathogenName.toUpperCase()} 🔬

Menghadapi patogen resisten di ruang rawat inap dan ICU membutuhkan ketepatan membaca antibiogram dan pemilihan antibiotik definitif berbasis bukti!

🦠 Nama Patogen: ${cur.pathogenName}
🧬 Tipe Gram & Fenotip: ${cur.gramType} (${cur.resistancePhenotype})
🏥 Infeksi Tersering: ${cur.commonInfections}

📊 Profil Sensitivitas Antibiotik:
${cur.susceptibilityProfile.map(s => `• ${s.antibiotic}: ${s.percentS}% Sensitif (${s.interpretation})`).join('\n')}

🎯 Pilihan Terapi Empirik Awal:
${cur.empiricChoice}

✅ Pilihan Terapi Definitif Hasil Kultur:
${cur.definitiveChoice}

🚨 Peringatan Penting PPRA:
${cur.stewardshipAlert}

Ketahui peta resistensi kuman, interpretasi CLSI/EUCAST, dan dosing antibiotik di FarmasiDruggist! 📲
👉 farmasidruggist.vercel.app (Link di bio)

#antibiogram #petakuman #esbl #cre #mrsa #resistensiobat #ppra #icu #farmasirumahsakit #farmasidruggist`;
    }

    case 'latin-signa': {
      const cur = LATIN_SIGNA_PRESETS[indices.signa || 0];
      return `📜 KUIS SINGKATAN LATIN RESEP: "${cur.abbreviation.toUpperCase()}" 💡

Pernahkah Sejawat membaca singkatan ini di resep dokter? Mari uji pemahaman dan ketelitian dispensing kefarmasian kita!

🔤 Singkatan Resep: ${cur.abbreviation}
🏛️ Kepanjangan Bahasa Latin: ${cur.fullLatinTerm}
🇮🇩 Arti Bahasa Indonesia: ${cur.indonesianMeaning}

📋 Contoh Penulisan Resep:
${cur.prescriptionExample}

🏷️ Terjemahan di Etiket Obat:
"${cur.etiketTranslation}"

🔬 Konteks Klinis & Farmakologi:
${cur.clinicalContext}

⚠️ Kesalahan Fatal yang Sering Terjadi:
${cur.commonMistakes}

Pelajari 150+ kamus singkatan Latin resep, aturan signa, & latihan soal UKMPPAI di FarmasiDruggist! 📲
👉 farmasidruggist.vercel.app (Link di bio)

#singkatanlatin #signaresep #kamusfarmasi #resepdokter #etiketobat #apoteker #ukmppai #farmasidruggist`;
    }

    case 'fornas-bpjs': {
      const cur = FORNAS_BPJS_PRESETS[indices.fornas || 0];
      return `📋 RESTRIKSI FORNAS & PERESEPAN BPJS: ${cur.drugName.toUpperCase()} 🏥

Sebagai Apoteker dan tenaga medis di faskes BPJS, memahami batasan restriksi Formularium Nasional (Fornas) sangat krusial untuk mencegah sengketa / dispute klaim!

💊 Nama Obat: ${cur.drugName}
🏥 Tingkat Fasilitas Kesehatan: ${cur.faskesLevel}

📜 Aturan Restriksi Fornas Resmi:
${cur.fornasRestrictionRule}

📦 Batas Maksimal Jumlah Peresepan:
👉 ${cur.maxPrescriptionQuantity}

🏷️ Status Program Rujuk Balik (PRB):
${cur.prbEligibility}

📑 Syarat Dokumen Klaim BPJS:
${cur.bpjsClaimRequirements}

💡 Catatan Dispensing Apoteker:
${cur.pharmacistDispensingNote}

Akses database 450+ restriksi obat Fornas & panduan klaim BPJS di FarmasiDruggist! 📲
👉 farmasidruggist.vercel.app (Link di bio)

#fornas #bpjskesehatan #restriksiobat #klaimbpjs #apotekerfaskes #farmasirumahsakit #prb #farmasidruggist`;
    }

    case 'pnpk-summary': {
      const cur = PNPK_SUMMARY_PRESETS[indices.pnpk || 0];
      return `📚 RINGKASAN PANDUAN TERAPI PNPK: ${cur.guidelineTitle.toUpperCase()} 🎯

Pedoman Nasional Pelayanan Kedokteran (PNPK) Kemenkes RI dan konsensus spesialis resmi menjadi landasan baku emas dalam terapi pasien!

📖 Judul Panduan: ${cur.guidelineTitle}
🏛️ Sumber Otoritas Resmi: ${cur.authoritativeSource}
🎯 Fokus Penyakit: ${cur.diseaseFocus}

💊 Terapi Lini Pertama (First-Line):
${cur.firstLineTherapy}

📈 Kriteria Eskalasi Terapi:
${cur.escalationCriteria}

⚠️ Kontraindikasi & Peringatan Fatal:
${cur.contraindicationsAndWarnings}

🌟 4 Pilar Tatalaksana Baku Emas:
${cur.goldenPillars.map(p => '• ' + p).join('\n')}

🎯 Target Parameter Monitoring:
${cur.monitoringTarget}

Ringkasan 78+ literatur EBM, konsensus PNPK, & algoritma klinis di FarmasiDruggist! 📲
👉 farmasidruggist.vercel.app (Link di bio)

#pnpk #guidelineklinis #pedomanterapi #kemenkes #ebm #farmasiklinis #dokterspesialis #apoteker #farmasidruggist`;
    }

    case 'herb-drug': {
      const cur = HERB_DRUG_PRESETS[indices.herbDrug || 0];
      return `🌿 WASPADA INTERAKSI HERBAL VS OBAT MODERN: ${cur.herbName.toUpperCase()} ⚡

Banyak yang mengira obat herbal dan jamu selalu aman dikonsumsi bersamaan dengan obat resep dokter. Faktanya, interaksi farmakokinetik & farmakodinamik dapat berakibat FATAL!

💊 Pasangan Interaksi:
👉 Herbal: ${cur.herbName}
👉 Obat Modern: ${cur.modernDrug}
🚨 Tingkat Risiko: ${cur.riskLevel}

🔬 Mekanisme Interaksi:
${cur.mechanism}

⚠️ Dampak Bahaya Klinis:
${cur.clinicalDanger}

💡 Solusi & Rekomendasi Apoteker:
${cur.pharmacistAdvice}

Skrining interaksi obat herbal vs obat modern tervalidasi klinis di FarmasiDruggist! 📲
👉 farmasidruggist.vercel.app (Link di bio)

#interaksiobat #herbal #jamu #farmasiklinis #patientsafety #obatdokter #apoteker #konselingobat #farmasidruggist`;
    }

    case 'chrono-dosing': {
      const cur = CHRONO_DOSING_PRESETS[indices.chrono || 0];
      return `⏰ KRONOFARMAKOLOGI: WAKTU TERBAIK MINUM ${cur.drugName.toUpperCase()} 🌅🌙

Beda jam minum obat, beda efektivitas terapi dan risiko efek sampingnya! Tubuh manusia memiliki ritme sirkadian biologis yang mempengaruhi farmakodinamik obat.

💊 Nama Obat: ${cur.drugName}
🎯 Target Kondisi: ${cur.targetCondition}
⏰ Waktu Minum Paling Tepat:
👉 ${cur.optimalTime}

🔬 Landasan Ritme Sirkadian Tubuh:
${cur.circadianReason}

✨ Manfaat Efikasi Maksimal:
${cur.efficacyBenefit}

⚠️ Peringatan Konseling Apoteker (PIO):
${cur.counselingAlert}

Ketahui jadwal dan waktu minum terbaik untuk 200+ obat klinis di FarmasiDruggist! 📲
👉 farmasidruggist.vercel.app (Link di bio)

#kronofarmakologi #jadwalobat #waktuminumobat #tipssehat #apoteker #konselingobat #farmasiklinis #farmasidruggist`;
    }

    case 'ppra-aware': {
      const cur = PPRA_AWARE_PRESETS[indices.ppra || 0];
      return `🛡️ STEWARDSHIP PPRA & KLASIFIKASI WHO AWaRe: ${cur.antibioticName.toUpperCase()} 🦠

Pengendalian Resistensi Antimikroba (PPRA) rumah sakit membagi antibiotik ke dalam 3 kelompok strategis WHO: Access, Watch, dan Reserve.

💊 Nama Antibiotik: ${cur.antibioticName}
🏷️ Kategori AWaRe: ${cur.awareCategory}
🎯 Indikasi Sasaran: ${cur.targetInfection}

🔬 Spektrum & Mekanisme Kerja:
${cur.spectrumMechanism}

📋 Aturan Penggunaan & Stewardship PPRA:
${cur.stewardshipRule}

Pahami panduan antibiotik empiris, formularium PPRA, & surveilans kuman di FarmasiDruggist! 📲
👉 farmasidruggist.vercel.app (Link di bio)

#ppra #antibiotik #whoaware #antimicrobialresistance #resistensiantibiotik #farmasirumahsakit #dokter #apoteker #farmasidruggist`;
    }

    case 'tdm-drugs': {
      const cur = TDM_DRUGS_PRESETS[indices.tdm || 0];
      return `🩸 THERAPEUTIC DRUG MONITORING (TDM): ${cur.drugName.toUpperCase()} 🎯

Obat dengan rentang terapi sempit (Narrow Therapeutic Index / NTI) memiliki batas tipis antara dosis penyelamat nyawa dan dosis toksik fatal!

💊 Nama Obat: ${cur.drugName}
📐 Rentang Terapeutik Target:
👉 ${cur.narrowRange}

⏰ Waktu Pengambilan Sampel Darah (Sampling):
${cur.samplingTime}

⚠️ Gejala Klinis Keracunan / Toksisitas:
${cur.toxicSymptoms}

🔬 Parameter Laboratorium Wajib Pantau:
${cur.monitoringParameter}

🚨 Faktor Risiko Lonjakan Toksisitas:
${cur.riskFactor}

Kalkulator kinetika TDM, klirens ginjal, & monitoring kadar obat klinis di FarmasiDruggist! 📲
👉 farmasidruggist.vercel.app (Link di bio)

#tdm #narrowtherapeuticindex #farmasiklinis #monitoringkadarobat #icu #rawatinap #apoteker #farmasirumahsakit #farmasidruggist`;
    }

    case 'off-label': {
      const cur = OFF_LABEL_PRESETS[indices.offLabel || 0];
      return `💜 PENGGUNAAN OBAT OFF-LABEL TERBUKTI KLINIS (EBM): ${cur.drugName.toUpperCase()} 🎯

Pernahkah Sejawat menjumpai resep obat ini untuk indikasi yang berbeda dari brosur resmi BPOM/FDA? Inilah bukti keindahan Evidence-Based Medicine (EBM)!

💊 Nama Obat: ${cur.drugName} (${cur.genericName})
🧬 Golongan: ${cur.drugClass}

📋 Indikasi Resmi (On-Label Izin Edar):
${cur.onLabelIndication}

🎯 Indikasi Off-Label Klinis (EBM):
👉 ${cur.offLabelIndication}

📐 Protokol Dosis Klinis:
👉 ${cur.clinicalDosage}

📚 Landasan Bukti Ilmiah (Guideline):
${cur.evidenceBasis}

🔬 Rasional Farmakologi Molekuler:
${cur.pharmacologicalRationale}

🛡️ Catatan Keamanan & Monitoring Apoteker:
${cur.safetyMonitoring}

💡 Catatan Apoteker: Penggunaan obat off-label yang etis wajib didukung bukti ilmiah kredibel (Level 1/2 EBM), informed consent pasien, dan pengawasan ketat tenaga kesehatan.

Pelajari 14+ kasus indikasi & dosis off-label tervalidasi klinis di FarmasiDruggist! 📲
👉 farmasidruggist.vercel.app (Link di bio)

Simpan postingan ini untuk referensi skrining klinis Anda! 🔖
#offlabel #farmasiklinis #ebm #evidencebasedmedicine #apoteker #farmakologi #resepobat #clinicalpharmacy #farmasidruggist`;
    }

    default:
      return '';
  }
};
