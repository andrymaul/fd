export type DosageFormCategory =
  | 'non_aqueous_solid' // Puyer, Kapsul, Salep Anhidrat (6 bln / 25% ED)
  | 'oral_water_containing' // Sirup oral berair, Suspensi oral racikan (14 hari 2-8°C)
  | 'topical_water_containing' // Krim, Gel, Pasta, Lotion berair (30 hari suhu ruang)
  | 'commercial_dry_syrup' // Sirup Kering Rekonstitusi Pabrik (7-14 hari)
  | 'sterile_sdv' // Single-Dose Vial / Ampul (1 jam non-LAF / 6 jam LAF)
  | 'sterile_mdv' // Multi-Dose Vial dengan pengawet (28 hari)
  | 'ophthalmic_multidose' // Tetes mata botol multi-dose (28 hari)
  | 'ophthalmic_minidose'; // Tetes mata minidose tanpa pengawet (3x24 jam)

export type ReconstitutionFormType =
  | 'Dry Syrup'
  | 'Injeksi IV/IM Powder'
  | 'Sediaan Oftalmik'
  | 'Injeksi Insulin'
  | 'Topikal & Salep'
  | 'Inhaler & Semprot Hidung';

export interface CommercialDrugReconstitution {
  id: string;
  drugName: string;
  genericName: string;
  formType: ReconstitutionFormType;
  brandExamples: string[];
  reconstitutionDiluent: string;
  volumeOrInstruction: string;
  budRoomTemp: string; // Suhu ruang (20-25°C)
  budRefrigerated: string; // Suhu dingin (2-8°C)
  storageNotes: string;
  references: string;
  recommendedCategory?: DosageFormCategory;
}

export interface BudDosageRule {
  id: DosageFormCategory;
  name: string;
  uspStandard: 'USP <795>' | 'USP <797>' | 'Farmakope Indonesia VI';
  maxBudFormula: string;
  storageCondition: string;
  description: string;
  examples: string[];
  clinicalPearls: string[];
}

export const BUD_DOSAGE_RULES: BudDosageRule[] = [
  {
    id: 'non_aqueous_solid',
    name: 'Sediaan Padat & Semisolid Tanpa Air (Non-Aqueous Formulations)',
    uspStandard: 'USP <795>',
    maxBudFormula: 'Maksimal 180 hari (6 bulan) ATAU 25% dari sisa masa kadaluarsa (ED) bahan baku terdekat (pilih waktu paling singkat).',
    storageCondition: 'Suhu Kamar Terkontrol (20°C - 25°C), terlindung dari cahaya & kelembapan.',
    description: 'Sediaan racikan yang tidak mengandung fase air bebas dalam formulanya. Ketiadaan air membatasi pertumbuhan mikroorganisme patogen dan hidrolisis kimia zat aktif.',
    examples: [
      'Puyer / Pulveres / Serbuk Bagi (kemasan kertas perkamen / puyer press)',
      'Kapsul keras racikan',
      'Salep basis hidrokarbon / anhidrat murni (Vaseline album, Cera alba)',
      'Suppositoria berbasis Oleum Cacao / Lemak Padat / PEG tanpa air'
    ],
    clinicalPearls: [
      'Contoh: Jika sisa ED obat bahan baku adalah 12 bulan, maka 25% x 12 bulan = 3 bulan (BUD adalah 3 bulan, bukan 6 bulan).',
      'Jika sisa ED obat bahan baku adalah 36 bulan, maka 25% x 36 bulan = 9 bulan. Karena batas maksimal adalah 6 bulan, maka BUD ditetapkan 6 bulan.',
      'Kemasan puyer wajib kedap udara untuk mencegah penyerapan uap lembap yang memicu penggumpalan (caking).'
    ]
  },
  {
    id: 'oral_water_containing',
    name: 'Sediaan Cair Oral Mengandung Air (Water-Containing Oral Liquids)',
    uspStandard: 'USP <795>',
    maxBudFormula: 'Maksimal 14 HARI bila disimpan dalam lemari pendingin (2°C - 8°C).',
    storageCondition: 'Wajib Lemari Pendingin / Kulkas (2°C - 8°C). DILARANG dibekukan di freezer.',
    description: 'Larutan oral, suspensi racikan, atau campuran puyer ke dalam sirup pembawa yang mengandung air. Rentan terhadap pertumbuhan jamur, bakteri, dan degradasi hidrolitik.',
    examples: [
      'Suspensi racikan oral (misal: racikan puyer Paracetamol/Captopril dalam sirup simpleks/air)',
      'Larutan oral racikan berbasis aquades',
      'Emulsi oral tipe M/A racikan'
    ],
    clinicalPearls: [
      'Sediaan cair oral berair TIDAK BOLEH disimpan pada suhu ruang jika melebihi batas beberapa hari tanpa studi stabilitas tervalidasi.',
      'Edukasi pasien/keluarga untuk selalu mengocok botol (kocok dahulu) sebelum diminum dan simpan di pintu kulkas (bukan freezer).'
    ]
  },
  {
    id: 'topical_water_containing',
    name: 'Sediaan Topikal & Mukosal Mengandung Air (Topical/Dermal Liquids & Semisolids)',
    uspStandard: 'USP <795>',
    maxBudFormula: 'Maksimal 30 HARI (1 bulan) pada suhu kamar terkontrol (20°C - 25°C).',
    storageCondition: 'Suhu Kamar Terkontrol (20°C - 25°C) di tempat sejuk dan kering.',
    description: 'Sediaan semisolid racikan yang mengandung fase air bebas seperti krim, gel, dan lotion untuk penggunaan topikal kulit atau mukosa.',
    examples: [
      'Krim racikan (misal: campuran Krim Hidrokortison + Krim Ketokonazol)',
      'Gel berbasis karbomer/hidrogel berair',
      'Pasta dan lotion kulit yang mengandung air',
      'Larutan kumur (gargle) atau tetes hidung racikan berair'
    ],
    clinicalPearls: [
      'Mencampurkan dua krim pabrik yang berbeda berpotensi merusak sistem emulsi (cracking/creaming) dan menurunkan efektivitas pengawet.',
      'Tuliskan tanggal racik dan tanggal BUD dengan jelas pada etiket warna BIRU untuk sediaan luar.'
    ]
  },
  {
    id: 'commercial_dry_syrup',
    name: 'Sirup Kering Rekonstitusi Pabrik (Commercial Dry Syrup)',
    uspStandard: 'Farmakope Indonesia VI',
    maxBudFormula: 'Umumnya 7 HINGGA 14 HARI setelah ditambahkan air (sesuai monografi pabrik pembuat).',
    storageCondition: 'Suhu dingin (2°C - 8°C) atau suhu ruang terkontrol sesuai brosur resmi masing-masing obat.',
    description: 'Sediaan serbuk antibiotik pabrik yang direkonstitusi dengan air minum matang/aquades di apotek saat penyerahan resep.',
    examples: [
      'Amoxicillin Dry Syrup (7-14 hari)',
      'Co-Amoxiclav / Clavamox Dry Syrup (7 hari di kulkas 2-8°C)',
      'Cefixime Dry Syrup (7-14 hari)',
      'Azithromycin Dry Syrup (10 hari suhu ruang)'
    ],
    clinicalPearls: [
      'Co-amoxiclav (Amoksisilin + Asam Klavulanat) sangat sensitif terhadap kelembapan; asam klavulanat cepat terurai jika dibiarkan pada suhu ruang.',
      'Beri tanda garis volume air pada botol dan jelaskan cara penyimpanan kepada orang tua pasien pediatrik.'
    ]
  },
  {
    id: 'sterile_sdv',
    name: 'Sediaan Steril: Single-Dose Vial (SDV) & Ampul',
    uspStandard: 'USP <797>',
    maxBudFormula: 'Maksimal 1 JAM jika ditusuk di luar ruang LAF (lingkungan bangsal/kamar operasi); Maksimal 6 JAM jika ditusuk di dalam LAF ISO Class 5.',
    storageCondition: 'Gunakan sesegera mungkin. Simpan sesuai petunjuk stabilitas kimia obat.',
    description: 'Vial dosis tunggal tanpa bahan pengawet antimikroba (preservative-free) dan ampul kaca.',
    examples: [
      'Ampul Fentanyl, Morfin, Petidin (Buka langsung pakai, sisa WAJIB DIBUANG)',
      'Single-Dose Vial Ceftriaxone, Meropenem, Omeprazole Injeksi',
      'Infus asam amino / cairan parenteral tanpa pengawet'
    ],
    clinicalPearls: [
      'Ampul kaca yang telah dipatahkan TIDAK MEMILIKI BUD (harus segera diinjeksi/dimasukkan infus, sisa tidak boleh disimpan).',
      'Single-Dose Vial yang ditusuk di bangsal perawatan terbuka hanya berlaku 1 jam karena ketiadaan pengawet memudahkan kolonisasi bakteri.'
    ]
  },
  {
    id: 'sterile_mdv',
    name: 'Sediaan Steril: Multi-Dose Vial (MDV) Berpengawet',
    uspStandard: 'USP <797>',
    maxBudFormula: 'Maksimal 28 HARI setelah tusukan pertama (first puncture), kecuali dinyatakan lain oleh pabrik.',
    storageCondition: 'Suhu dingin (2°C - 8°C) atau suhu ruang sejuk (<30°C) sesuai karakteristik obat.',
    description: 'Vial multidosis yang diformulasikan secara khusus dengan penambahan agen pengawet antimikroba (contoh: kresol, fenol, benzil alkohol, klorobutanol).',
    examples: [
      'Insulin Pen / Vial (Novorapid, Lantus, Levemir, Sansulin)',
      'Vial Multidosis Lidocain HCl 2% dengan pengawet',
      'Vial Multidosis Vaksin dengan pengawet thimerosal'
    ],
    clinicalPearls: [
      'Insulin Pen yang SEDANG DIGUNAKAN (in use) disimpan pada suhu ruang (<30°C) dan tahan 28 hari (Lantus/Novorapid) atau 42-56 hari (Tresiba/Toujeo). JANGAN simpan insulin in-use di dalam freezer!',
      'Wajib tulis tanggal pertama kali dibuka pada badan pen/vial.'
    ]
  },
  {
    id: 'ophthalmic_multidose',
    name: 'Sediaan Tetes Mata / Salep Mata Botol Multidose',
    uspStandard: 'Farmakope Indonesia VI',
    maxBudFormula: 'Maksimal 28 HARI (4 Minggu) setelah segel botol pertama kali dibuka.',
    storageCondition: 'Suhu ruang terkontrol (<25°C - 30°C) atau lemari pendingin (2°C - 8°C) sesuai jenis zat aktif.',
    description: 'Sediaan oftalmik steril dalam kemasan botol tetes multipel yang mengandung pengawet antimikroba (umumnya Benzalkonium Klorida 0.01%).',
    examples: [
      'Botol Cendo Xitrol, Cendo Tobroson, Cendo Fenicol',
      'Tetes mata Glaukoma (Timolol, Latanoprost)',
      'Salep mata steril (Chloramphenicol / Gentamicin eye ointment)'
    ],
    clinicalPearls: [
      'Ujung penetes botol TIDAK BOLEH menyentuh bulu mata, kornea, atau jari tangan untuk mencegah kontaminasi silang bakteri Pseudomonas aeruginosa.',
      'Setelah 28 hari, efektivitas pengawet menurun drastis dan sediaan harus dibuang meskipun cairan masih tersisa banyak.'
    ]
  },
  {
    id: 'ophthalmic_minidose',
    name: 'Sediaan Tetes Mata Minidose / Unit-Dose (Tanpa Pengawet)',
    uspStandard: 'Farmakope Indonesia VI',
    maxBudFormula: 'Maksimal 3 x 24 JAM (72 Jam) setelah tutup tube minidose dipatahkan/dibuka dan ditutup kembali.',
    storageCondition: 'Suhu ruang sejuk terkontrol, simpan dalam wadah foil aslinya.',
    description: 'Sediaan tetes mata strip tanpa bahan pengawet (preservative-free) untuk pasien mata kering kronis atau pasca operasi katarak/lasik.',
    examples: [
      'Cendo Cenfresh Minidose (Carboxymethylcellulose sodium)',
      'Cendo Lyteers Minidose',
      'Cendo Hyalub Minidose'
    ],
    clinicalPearls: [
      'Karena tidak mengandung pengawet benzalkonium klorida, toleransi okular sangat baik namun risiko kontaminasi mikroba tinggi jika disimpan melebihi 3 hari.',
      'Tutup kembali ujung minidose rapat-rapat setelah diteteskan.'
    ]
  }
];

export const COMMERCIAL_DRUG_RECONSTITUTIONS: CommercialDrugReconstitution[] = [
  // =========================================================================
  // SIRUP KERING (DRY SYRUP)
  // =========================================================================
  {
    id: 'rec-amoxicillin-dry',
    drugName: 'Amoxicillin Dry Syrup 125 mg / 250 mg per 5 mL',
    genericName: 'Amoxicillin Trihydrate',
    formType: 'Dry Syrup',
    brandExamples: ['Amoxil', 'Amoxsan', 'Kalmoxillin', 'Yusimox', 'Amoxicillin Generik'],
    reconstitutionDiluent: 'Air minum matang / Aquades dingin',
    volumeOrInstruction: 'Tambahkan air bertahap hingga tanda batas volume botol (umumnya 60 mL), lalu kocok kuat hingga suspensi homogen.',
    budRoomTemp: '7 Hari (Suhu Ruang < 25°C)',
    budRefrigerated: '14 Hari (Kulkas 2°C - 8°C)',
    storageNotes: 'Lebih direkomendasikan simpan di kulkas untuk mempertahankan potensi antibiotik.',
    references: 'Farmakope Indonesia VI & Brosur Resmi Pabrik'
  },
  {
    id: 'rec-coamoxiclav-dry',
    drugName: 'Co-Amoxiclav Dry Syrup (Amoxicillin + Clavulanate)',
    genericName: 'Amoxicillin + Potassium Clavulanate',
    formType: 'Dry Syrup',
    brandExamples: ['Augmentin', 'Clavamox', 'Claneksi', 'Co-Amoxiclav Generik'],
    reconstitutionDiluent: 'Aquades / Air matang dingin',
    volumeOrInstruction: 'Tambahkan air sesuai takaran tanda batas, kocok kuat.',
    budRoomTemp: 'TIDAK DISARANKAN (Asam klavulanat cepat rusak pada suhu ruang)',
    budRefrigerated: '7 HARI (Wajib Kulkas 2°C - 8°C)',
    storageNotes: 'Asam klavulanat sangat higroskopis dan mudah terhidrolisis. Setelah 7 hari dalam kulkas, sisa obat wajib dibuang.',
    references: 'USP-NF Monograph & GlaxoSmithKline Product Monograph'
  },
  {
    id: 'rec-cefixime-dry',
    drugName: 'Cefixime Dry Syrup 100 mg / 5 mL',
    genericName: 'Cefixime Trihydrate',
    formType: 'Dry Syrup',
    brandExamples: ['Cefspan', 'Cefila', 'Fixacep', 'Maxpro', 'Cefixime Generik'],
    reconstitutionDiluent: 'Air minum matang / Aquades',
    volumeOrInstruction: 'Tambahkan air matang sekitar 30 mL dalam 2 tahap, kocok hingga merata.',
    budRoomTemp: '14 Hari (Suhu Ruang < 30°C)',
    budRefrigerated: '14 Hari (Kulkas 2°C - 8°C)',
    storageNotes: 'Stabil pada suhu ruang maupun kulkas. Hindari paparan sinar matahari langsung.',
    references: 'Brosur Pabrik Cefspan & Farmakope Indonesia VI'
  },
  {
    id: 'rec-cefadroxil-dry',
    drugName: 'Cefadroxil Dry Syrup 125 mg / 250 mg per 5 mL',
    genericName: 'Cefadroxil Monohydrate',
    formType: 'Dry Syrup',
    brandExamples: ['Cefat', 'Lostacef', 'Droxal', 'Lapicef', 'Cefadroxil Generik'],
    reconstitutionDiluent: 'Air minum matang / Aquades',
    volumeOrInstruction: 'Tambahkan air hingga tanda batas botol (60 mL), kocok kuat hingga suspensi rata.',
    budRoomTemp: '7 Hari (Suhu Ruang < 25°C)',
    budRefrigerated: '14 Hari (Kulkas 2°C - 8°C)',
    storageNotes: 'Simpan botol tertutup rapat. Kocok dahulu sebelum diminum.',
    references: 'Farmakope Indonesia VI & Brosur Pabrik Sanbe Cefat'
  },
  {
    id: 'rec-azithromycin-dry',
    drugName: 'Azithromycin Dry Syrup 200 mg / 5 mL',
    genericName: 'Azithromycin Dihydrate',
    formType: 'Dry Syrup',
    brandExamples: ['Zithromax', 'Zithrolip', 'Azomax', 'Zistic', 'Azithromycin Generik'],
    reconstitutionDiluent: 'Air minum matang',
    volumeOrInstruction: 'Tambahkan air sesuai petunjuk takaran kemasan (umumnya 9 mL atau 12 mL), kocok kuat.',
    budRoomTemp: '10 HARI (Suhu Ruang 15°C - 30°C)',
    budRefrigerated: '10 Hari (Jangan dibekukan)',
    storageNotes: 'Simpan pada suhu ruang terkontrol.',
    references: 'Pfizer Zithromax Product Label'
  },
  {
    id: 'rec-erythromycin-dry',
    drugName: 'Erythromycin Ethylsuccinate Dry Syrup 200 mg / 5 mL',
    genericName: 'Erythromycin Ethylsuccinate',
    formType: 'Dry Syrup',
    brandExamples: ['Erysanbe', 'Pharothrocin', 'Erythrocin'],
    reconstitutionDiluent: 'Air minum matang',
    volumeOrInstruction: 'Tambahkan air hingga batas volume botol (60 mL), kocok hingga terlarut.',
    budRoomTemp: '7 Hari (Suhu Ruang)',
    budRefrigerated: '14 Hari (Kulkas 2°C - 8°C)',
    storageNotes: 'Eritromisin rentan terhadap hidrolisis asam; stabilitas lebih baik pada suhu dingin.',
    references: 'AHFS Drug Information'
  },

  // =========================================================================
  // SERBUK INJEKSI REKONSTITUSI STERIL
  // =========================================================================
  {
    id: 'rec-ceftriaxone-inj',
    drugName: 'Ceftriaxone Serbuk Injeksi 1 Gram',
    genericName: 'Ceftriaxone Sodium',
    formType: 'Injeksi IV/IM Powder',
    brandExamples: ['Rocephin', 'Broadced', 'Tericef', 'Ceftriaxone Generik'],
    reconstitutionDiluent: 'Water for Injection (WFI) untuk IV; Lidocain 1% untuk IM',
    volumeOrInstruction: 'Larutkan 1 g dengan 9.6 mL WFI (untuk IV) atau 3.5 mL Lidocain 1% (untuk IM).',
    budRoomTemp: '24 Jam (Suhu Ruang 25°C)',
    budRefrigerated: '72 Jam / 3 Hari (Kulkas 2°C - 8°C)',
    storageNotes: 'Warna larutan bervariasi dari kuning pucat hingga kuning amber tanpa mempengaruhi potensi.',
    references: 'AHFS Drug Information & Roche Rocephin Monograph'
  },
  {
    id: 'rec-cefotaxime-inj',
    drugName: 'Cefotaxime Serbuk Injeksi 1 Gram',
    genericName: 'Cefotaxime Sodium',
    formType: 'Injeksi IV/IM Powder',
    brandExamples: ['Claforan', 'Taxegram', 'Cefotaxime Generik'],
    reconstitutionDiluent: 'Water for Injection (WFI) 4 mL (IV/IM)',
    volumeOrInstruction: 'Larutkan 1 g dengan 4 mL WFI, kocok hingga jernih.',
    budRoomTemp: '12 Jam (Suhu Ruang 25°C)',
    budRefrigerated: '24 Jam (Kulkas 2°C - 8°C)',
    storageNotes: 'Lindungi dari paparan cahaya langsung. Jika larutan menggelap signifikan, buang.',
    references: 'Sanofi Claforan Product Monograph'
  },
  {
    id: 'rec-meropenem-inj',
    drugName: 'Meropenem Serbuk Injeksi 1 Gram',
    genericName: 'Meropenem Trihydrate',
    formType: 'Injeksi IV/IM Powder',
    brandExamples: ['Meronem', 'Meropenem Generik', 'Ronem'],
    reconstitutionDiluent: 'WFI atau NaCl 0.9%',
    volumeOrInstruction: 'Larutkan 1 g dengan 20 mL WFI untuk bolus IV lambat (5 menit) atau larutkan dalam 100 mL NaCl 0.9% untuk infus (15-30 menit).',
    budRoomTemp: '3 Jam (pada NaCl 0.9% Suhu Ruang)',
    budRefrigerated: '12 Jam (pada NaCl 0.9% Kulkas 2°C - 8°C)',
    storageNotes: 'Meropenem cepat terdegradasi cincin beta-laktamnya. Harus segera dihabiskan dalam 3 jam pasca rekonstitusi infus.',
    references: 'AstraZeneca Meronem Product Insert & Trissel’s Handbook on Injectable Drugs'
  },
  {
    id: 'rec-ampicillin-sulbactam',
    drugName: 'Ampicillin + Sulbactam Serbuk Injeksi 1.5 Gram',
    genericName: 'Ampicillin Sodium + Sulbactam Sodium',
    formType: 'Injeksi IV/IM Powder',
    brandExamples: ['Unasyn', 'Bactesyn', 'Viccillin-SX', 'Ampicillin-Sulbactam Generik'],
    reconstitutionDiluent: 'WFI 3.2 mL atau NaCl 0.9%',
    volumeOrInstruction: 'Larutkan vial 1.5 g dengan 3.2 mL WFI (konsentrasi 375 mg/mL) untuk IV lambat atau larutkan dalam 50-100 mL NaCl 0.9% untuk infus.',
    budRoomTemp: '8 Jam (dalam NaCl 0.9% Suhu Ruang)',
    budRefrigerated: '48 Jam (dalam NaCl 0.9% Kulkas 2°C - 8°C)',
    storageNotes: 'JANGAN gunakan pelarut Dextrose/Glukosa karena ampicillin cepat terhidrolisis pada larutan karbohidrat.',
    references: 'Pfizer Unasyn Package Insert & Trissel’s Handbook'
  },
  {
    id: 'rec-vancomycin-inj',
    drugName: 'Vancomycin Serbuk Injeksi 500 mg / 1 Gram',
    genericName: 'Vancomycin Hydrochloride',
    formType: 'Injeksi IV/IM Powder',
    brandExamples: ['Vancocin', 'Vancep', 'Vancomycin Generik'],
    reconstitutionDiluent: 'WFI 10 mL (untuk 500 mg) atau 20 mL (untuk 1 g)',
    volumeOrInstruction: 'Rekonstitusi dengan WFI, kemudian WAJIB diencerkan lebih lanjut dalam minimal 100 mL - 200 mL NaCl 0.9% atau D5W untuk infus lambat minimal 60 menit.',
    budRoomTemp: '24 Jam (Vial rekonstitusi)',
    budRefrigerated: '14 Hari (Kulkas 2°C - 8°C)',
    storageNotes: 'Infus terlalu cepat (<60 menit) memicu Red Man Syndrome (pelepasan histamin masif).',
    references: 'Eli Lilly Vancocin Prescribing Information & ASHP Therapeutic Guidelines'
  },
  {
    id: 'rec-omeprazole-inj',
    drugName: 'Omeprazole Serbuk Injeksi 40 mg',
    genericName: 'Omeprazole Sodium',
    formType: 'Injeksi IV/IM Powder',
    brandExamples: ['Losec Injeksi', 'Ozid IV', 'Omeprazole Generik', 'Inhipump IV'],
    reconstitutionDiluent: 'Pelarut Khusus Bawaan Pabrik (10 mL) atau Dextrose 5% / NaCl 0.9%',
    volumeOrInstruction: 'Larutkan dengan 10 mL pelarut khusus untuk injeksi IV lambat (minimal 2.5-4 menit).',
    budRoomTemp: '4 Jam (setelah dilarutkan dengan pelarut khusus)',
    budRefrigerated: 'TIDAK DISARANKAN disimpan (Harus segera diberikan)',
    storageNotes: 'Sangat sensitif terhadap pH asam dan cahaya. Jika larutan berubah warna menjadi keruh atau kecokelatan, buang segera.',
    references: 'AstraZeneca Losec IV Monograph'
  },
  {
    id: 'rec-pantoprazole-inj',
    drugName: 'Pantoprazole Serbuk Injeksi 40 mg',
    genericName: 'Pantoprazole Sodium',
    formType: 'Injeksi IV/IM Powder',
    brandExamples: ['Pantozol IV', 'Panloc IV', 'Pantoprazole Generik'],
    reconstitutionDiluent: 'NaCl 0.9% 10 mL',
    volumeOrInstruction: 'Rekonstitusi vial dengan 10 mL NaCl 0.9%, injeksikan bolus IV pelan selama minimal 2 menit atau encerkan dalam 100 mL infus.',
    budRoomTemp: '12 Jam (pada suhu ruang)',
    budRefrigerated: '24 Jam (Kulkas 2°C - 8°C)',
    storageNotes: 'Hindari pencampuran dengan larutan asam atau obat lain pada jalur infus yang sama.',
    references: 'Takeda Pantozol IV Package Insert'
  },

  // =========================================================================
  // SEDIAAN INSULIN STERIL
  // =========================================================================
  {
    id: 'rec-insulin-novorapid',
    drugName: 'Insulin Aspart (Novorapid FlexPen / Penfill)',
    genericName: 'Insulin Aspart Rapid-Acting',
    formType: 'Injeksi Insulin',
    brandExamples: ['Novorapid FlexPen', 'Novorapid PumpCart', 'NovoMix 30'],
    reconstitutionDiluent: 'Tidak perlu rekonstitusi (Larutan siap pakai)',
    volumeOrInstruction: 'Pasang jarum pen baru setiap kali penyuntikan subkutan.',
    budRoomTemp: '28 HARI (Suhu Ruang < 30°C untuk Pen yang sedang dipakai)',
    budRefrigerated: 'Sesuai Tanggal ED Pabrik (untuk Pen cadangan yang belum dibuka)',
    storageNotes: 'FlexPen yang sedang digunakan (in use) JANGAN disimpan di kulkas untuk mencegah rasa nyeri dan kristalisasi pada jarum.',
    references: 'Novo Nordisk Novorapid Prescribing Information'
  },
  {
    id: 'rec-insulin-lantus',
    drugName: 'Insulin Glargine (Lantus SoloStar 100 IU/mL)',
    genericName: 'Insulin Glargine Long-Acting',
    formType: 'Injeksi Insulin',
    brandExamples: ['Lantus SoloStar', 'Lantus Cartridge', 'Basaglar KwikPen'],
    reconstitutionDiluent: 'Tidak perlu rekonstitusi (Solutio bening)',
    volumeOrInstruction: 'Injeksi subkutan satu kali sehari pada waktu yang sama.',
    budRoomTemp: '28 HARI (Suhu Ruang < 30°C setelah dibuka)',
    budRefrigerated: 'Sesuai Tanggal ED Pabrik (sebelum dibuka pada 2°C - 8°C)',
    storageNotes: 'Lindungi dari panas langsung dan sinar matahari.',
    references: 'Sanofi-Aventis Lantus Prescribing Information'
  },
  {
    id: 'rec-insulin-tresiba',
    drugName: 'Insulin Degludec (Tresiba FlexTouch 100 U/mL)',
    genericName: 'Insulin Degludec Ultra-Long Acting',
    formType: 'Injeksi Insulin',
    brandExamples: ['Tresiba FlexTouch', 'Ryzodeg FlexTouch'],
    reconstitutionDiluent: 'Tidak perlu rekonstitusi (Solutio siap pakai)',
    volumeOrInstruction: 'Injeksi subkutan satu kali sehari dengan durasi kerja hingga 42 jam.',
    budRoomTemp: '56 HARI / 8 MINGGU (Suhu Ruang < 30°C setelah dibuka)',
    budRefrigerated: 'Sesuai Tanggal ED Pabrik (sebelum dibuka pada 2°C - 8°C)',
    storageNotes: 'Tresiba memiliki stabilitas suhu ruang lebih lama (hingga 56 hari) dibanding insulin konvensional.',
    references: 'Novo Nordisk Tresiba Prescribing Information',
    recommendedCategory: 'sterile_mdv'
  },

  // =========================================================================
  // SIRUP KERING (DRY SYRUP) & CAIR ORAL TAMBAHAN
  // =========================================================================
  {
    id: 'rec-cefpodoxime-dry',
    drugName: 'Cefpodoxime Proxetil Dry Syrup 100 mg / 5 mL',
    genericName: 'Cefpodoxime Proxetil',
    formType: 'Dry Syrup',
    brandExamples: ['Banadoz', 'Cefpodoxime Generik'],
    reconstitutionDiluent: 'Air minum matang / Aquades dingin',
    volumeOrInstruction: 'Tambahkan air matang bertahap hingga tanda batas volume botol (50 mL atau 100 mL), kocok kuat hingga suspensi homogen.',
    budRoomTemp: 'TIDAK DISARANKAN (> 24 Jam)',
    budRefrigerated: '14 HARI (Wajib Kulkas 2°C - 8°C)',
    storageNotes: 'Sediaan suspensi cefpodoxime harus selalu disimpan dalam lemari pendingin (2°C - 8°C). Kocok dahulu sebelum diminum.',
    references: 'Sandoz Banadoz Prescribing Information & USP-NF Monograph',
    recommendedCategory: 'commercial_dry_syrup'
  },
  {
    id: 'rec-cefdinir-dry',
    drugName: 'Cefdinir Dry Syrup 125 mg / 5 mL',
    genericName: 'Cefdinir',
    formType: 'Dry Syrup',
    brandExamples: ['Cefspan Dry Syrup', 'Nilacin', 'Cefdinir Generik'],
    reconstitutionDiluent: 'Air minum matang / Aquades',
    volumeOrInstruction: 'Tambahkan air matang sesuai takaran kemasan botol (umumnya 30 mL atau 60 mL), kocok hingga terdispersi merata.',
    budRoomTemp: '10 HARI (Suhu Ruang 20°C - 25°C)',
    budRefrigerated: '10 HARI (Kulkas 2°C - 8°C)',
    storageNotes: 'Stabil pada suhu kamar maupun lemari pendingin selama 10 hari. Tutup botol rapat-rapat setelah digunakan.',
    references: 'Abbott Omnicef / Kalbe Cefspan Product Monograph',
    recommendedCategory: 'commercial_dry_syrup'
  },
  {
    id: 'rec-clarithromycin-dry',
    drugName: 'Clarithromycin Dry Syrup 125 mg / 250 mg per 5 mL',
    genericName: 'Clarithromycin Pellets for Suspension',
    formType: 'Dry Syrup',
    brandExamples: ['Abbotic Dry Syrup', 'Bicrolid', 'Comtro', 'Clarithromycin Generik'],
    reconstitutionDiluent: 'Air minum matang / Aquades suhu ruang',
    volumeOrInstruction: 'Tambahkan air matang hingga tanda batas botol (50 mL atau 70 mL), kocok kuat hingga suspensi homogen.',
    budRoomTemp: '14 HARI (Suhu Ruang Terkontrol 15°C - 30°C)',
    budRefrigerated: 'JANGAN DISIMPAN DI KULKAS (DILARANG 2°C - 8°C)',
    storageNotes: 'PERINGATAN KHUSUS: Penyimpanan di dalam lemari pendingin menyebabkan mikro-pelet salut terganggu dan memicu rasa pahit getir ekstrem serta endapan kristal. Wajib simpan pada suhu ruang.',
    references: 'Abbott Laboratories Biaxin / Abbotic Monograph & AHFS Drug Information',
    recommendedCategory: 'commercial_dry_syrup'
  },
  {
    id: 'rec-cefprozil-dry',
    drugName: 'Cefprozil Dry Syrup 125 mg / 250 mg per 5 mL',
    genericName: 'Cefprozil Monohydrate',
    formType: 'Dry Syrup',
    brandExamples: ['Cefzil Dry Syrup', 'Cefprozil Generik'],
    reconstitutionDiluent: 'Air minum matang',
    volumeOrInstruction: 'Tambahkan air bertahap hingga tanda batas volume, kocok kuat.',
    budRoomTemp: 'TIDAK DISARANKAN (> 48 Jam)',
    budRefrigerated: '14 HARI (Kulkas 2°C - 8°C)',
    storageNotes: 'Wajib disimpan dalam kulkas tertutup rapat. Kocok dahulu sebelum diminum. Buang sisa obat setelah 14 hari.',
    references: 'Bristol-Myers Squibb Cefzil Prescribing Information',
    recommendedCategory: 'commercial_dry_syrup'
  },
  {
    id: 'rec-cefuroxime-dry',
    drugName: 'Cefuroxime Axetil Dry Syrup 125 mg / 5 mL',
    genericName: 'Cefuroxime Axetil Micro-Granules',
    formType: 'Dry Syrup',
    brandExamples: ['Zinnat Suspension', 'Sharox', 'Cefuroxime Axetil Generik'],
    reconstitutionDiluent: 'Air minum matang DINGIN (jangan air hangat/panas)',
    volumeOrInstruction: 'Tambahkan air dingin hingga batas volume, kocok segera dengan kuat hingga butiran granula terdispersi merata.',
    budRoomTemp: 'Segera konsumsi / Maks 24 Jam',
    budRefrigerated: '10 HARI (Kulkas 2°C - 8°C)',
    storageNotes: 'Penggunaan air hangat/panas merusak salut granula dan menyebabkan rasa sangat pahit yang tidak dapat ditoleransi anak-anak.',
    references: 'GlaxoSmithKline Zinnat Product Information',
    recommendedCategory: 'commercial_dry_syrup'
  },
  {
    id: 'rec-nystatin-drop',
    drugName: 'Nystatin Oral Suspension Drop 100.000 IU/mL',
    genericName: 'Nystatin',
    formType: 'Dry Syrup',
    brandExamples: ['Candistatin Drop', 'Enystin Drop', 'Nymico', 'Mycostatin', 'Nystatin Generik'],
    reconstitutionDiluent: 'Sediaan suspensi cair oral siap pakai',
    volumeOrInstruction: 'Teteskan langsung ke rongga mulut bayi/anak dengan pipet tetes bawaan kemasan, tahan sejenak sebelum ditelan (swish and swallow).',
    budRoomTemp: '30 HARI pasca segel botol dibuka (< 25°C)',
    budRefrigerated: '30 HARI (Kulkas 2°C - 8°C)',
    storageNotes: 'Kocok kuat sebelum diteteskan. Hindari paparan panas langsung dan cahaya matahari.',
    references: 'Farmakope Indonesia VI & Brosur Candistatin Pharos',
    recommendedCategory: 'oral_water_containing'
  },
  {
    id: 'rec-cotrimoxazole-susp',
    drugName: 'Cotrimoxazole Oral Suspension (SMZ 200 mg + TMP 40 mg / 5 mL)',
    genericName: 'Sulfamethoxazole + Trimethoprim',
    formType: 'Dry Syrup',
    brandExamples: ['Bactrim Sirup', 'Sanprim Suspensi', 'Sultrimmix', 'Cotrimoxazole Generik'],
    reconstitutionDiluent: 'Sediaan suspensi oral siap pakai',
    volumeOrInstruction: 'Minum sesuai dosis anjuran. Dianjurkan minum banyak air putih selama terapi.',
    budRoomTemp: '30 HARI pasca segel dibuka (< 30°C)',
    budRefrigerated: '30 HARI (Kulkas 2°C - 8°C, jangan dibekukan)',
    storageNotes: 'Kocok kuat sebelum diminum. Botol wajib tertutup rapat untuk mencegah penguapan pelarut dan kristalisasi sulfonamid.',
    references: 'Roche Bactrim Package Insert & AHFS Drug Information',
    recommendedCategory: 'oral_water_containing'
  },
  {
    id: 'rec-metronidazole-susp',
    drugName: 'Metronidazole Benzoate Suspensi Oral 125 mg / 5 mL',
    genericName: 'Metronidazole Benzoate',
    formType: 'Dry Syrup',
    brandExamples: ['Flagyl Sirup', 'Corsagyl Suspensi', 'Metronidazole Generik'],
    reconstitutionDiluent: 'Sediaan suspensi oral siap pakai',
    volumeOrInstruction: 'Minum 1 jam sebelum atau 2 jam sesudah makan.',
    budRoomTemp: '30 HARI pasca segel dibuka (< 30°C)',
    budRefrigerated: 'Hindari pendinginan kulkas berlebih (dapat memicu presipitasi benzoat)',
    storageNotes: 'Simpan pada suhu ruang sejuk terlindung cahaya. Kocok dahulu sebelum diminum.',
    references: 'Sanofi Flagyl Prescribing Information',
    recommendedCategory: 'oral_water_containing'
  },
  {
    id: 'rec-paracetamol-drops-syrup',
    drugName: 'Paracetamol Drops (100 mg/mL) & Sirup (120 mg / 5 mL)',
    genericName: 'Paracetamol (Acetaminophen)',
    formType: 'Dry Syrup',
    brandExamples: ['Sanmol Drop / Sirup', 'Tempra Drops', 'Pamol Sirup', 'Biogesic Anak', 'Farmadol'],
    reconstitutionDiluent: 'Sediaan larutan / sirup oral cair siap pakai',
    volumeOrInstruction: 'Gunakan pipet tetes atau sendok takar bersih kering.',
    budRoomTemp: '30 - 60 HARI pasca segel botol dibuka (< 30°C)',
    budRefrigerated: '60 HARI (Kulkas 2°C - 8°C)',
    storageNotes: 'Segera tutup botol rapat-rapat. JANGAN biarkan pipet/sendok yang telah terkena air liur dimasukkan kembali ke dalam botol karena dapat memicu pertumbuhan jamur.',
    references: 'Farmakope Indonesia VI & Pedoman Pelayanan Kefarmasian Kemenkes RI',
    recommendedCategory: 'oral_water_containing'
  },
  {
    id: 'rec-ibuprofen-susp',
    drugName: 'Ibuprofen Suspensi Oral 100 mg / 200 mg per 5 mL',
    genericName: 'Ibuprofen Micronized Suspension',
    formType: 'Dry Syrup',
    brandExamples: ['Proris Sirup / Forte', 'Bufect Suspensi', 'Farsifen Sirup', 'Dolofen'],
    reconstitutionDiluent: 'Sediaan suspensi oral cair siap pakai',
    volumeOrInstruction: 'Kocok kuat sebelum diminum. Wajib diminum bersama atau sesudah makan.',
    budRoomTemp: '30 - 60 HARI pasca segel botol dibuka (< 30°C)',
    budRefrigerated: '60 HARI (Kulkas 2°C - 8°C)',
    storageNotes: 'Kocok botol minimal 10 detik sebelum penuangan agar homogen. Simpan di tempat sejuk terlindung dari cahaya matahari langsung.',
    references: 'Pharos Proris Prescribing Information & Farmakope Indonesia VI',
    recommendedCategory: 'oral_water_containing'
  },
  {
    id: 'rec-valproic-syrup',
    drugName: 'Asam Valproat / Natrium Valproat Sirup 250 mg / 5 mL',
    genericName: 'Sodium Valproate / Valproic Acid',
    formType: 'Dry Syrup',
    brandExamples: ['Depakene Sirup', 'Depakote Sirup', 'Ikalep Sirup', 'Valproat Generik'],
    reconstitutionDiluent: 'Sediaan sirup oral cair siap pakai',
    volumeOrInstruction: 'Gunakan spuit oral / sendok takar presisi.',
    budRoomTemp: '30 HARI pasca segel botol dibuka (< 30°C)',
    budRefrigerated: '30 HARI (Kulkas 2°C - 8°C)',
    storageNotes: 'JANGAN simpan di tempat lembap. Tutup botol rapat-rapat. Hindari kontak langsung dengan wadah logam.',
    references: 'Abbott Depakene Prescribing Information',
    recommendedCategory: 'oral_water_containing'
  },
  {
    id: 'rec-zinc-syrup-drops',
    drugName: 'Zinc Sulfate Sirup 20 mg/5 mL & Drops 10 mg/mL',
    genericName: 'Zinc Sulfate Monohydrate',
    formType: 'Dry Syrup',
    brandExamples: ['Zinkid Sirup', 'ZincPro Drops', 'Daryazinc', 'Zinc Sulfate Generik'],
    reconstitutionDiluent: 'Sediaan sirup / drop oral siap pakai',
    volumeOrInstruction: 'Diberikan selama 10 hari berturut-turut pada anak diare akut, walaupun diare sudah berhenti.',
    budRoomTemp: '30 HARI pasca segel dibuka (< 30°C)',
    budRefrigerated: '30 HARI (Kulkas 2°C - 8°C)',
    storageNotes: 'Sangat dianjurkan dihabiskan untuk 1 episode terapi 10 hari anak sesuai panduan WHO/IDAI.',
    references: 'Pedoman Tata Laksana Diare Kemenkes RI & WHO Guidelines',
    recommendedCategory: 'oral_water_containing'
  },

  // =========================================================================
  // SEDIAAN OFTALMIK (TETES MATA & SALEP MATA)
  // =========================================================================
  {
    id: 'rec-cendo-xitrol-multidose',
    drugName: 'Cendo Xitrol Tetes Mata Botol Multidose 5 mL',
    genericName: 'Dexamethasone 0.1% + Neomycin 3.5 mg + Polymyxin B 6000 IU',
    formType: 'Sediaan Oftalmik',
    brandExamples: ['Cendo Xitrol Botol', 'Xitrol MD'],
    reconstitutionDiluent: 'Sediaan tetes mata steril dengan pengawet Benzalkonium Klorida',
    volumeOrInstruction: 'Teteskan 1-2 tetes pada kantung konjungtiva mata yang sakit.',
    budRoomTemp: '28 HARI (4 Minggu) pasca segel botol pertama kali dibuka (< 30°C)',
    budRefrigerated: '28 HARI (Kulkas 2°C - 8°C)',
    storageNotes: 'Ujung botol penetes DILARANG menyentuh bulu mata, kornea, atau jari tangan. Setelah 28 hari, efektivitas pengawet menurun drastis dan sisa obat wajib dibuang.',
    references: 'Farmakope Indonesia VI & Brosur Resmi Cendo Pharmaceutical',
    recommendedCategory: 'ophthalmic_multidose'
  },
  {
    id: 'rec-cendo-xitrol-minidose',
    drugName: 'Cendo Xitrol Minidose Strip Tanpa Pengawet (Preservative-Free)',
    genericName: 'Dexamethasone + Neomycin + Polymyxin B (Unit Dose)',
    formType: 'Sediaan Oftalmik',
    brandExamples: ['Cendo Xitrol Minidose Catch Cover (5 x 0.6 mL)'],
    reconstitutionDiluent: 'Sediaan steril minidose tanpa pengawet antimikroba',
    volumeOrInstruction: 'Patahkan ujung tube, teteskan pada mata, lalu tancapkan kembali tutup tube secara terbalik untuk menutup rapat.',
    budRoomTemp: 'Maksimal 3 x 24 JAM (72 Jam) setelah tutup tube dipatahkan',
    budRefrigerated: 'Maksimal 3 x 24 Jam (Simpan dalam kantong aluminium foil bawaan)',
    storageNotes: 'Karena bebas bahan pengawet (preservative-free), tube yang telah dibuka hanya boleh digunakan maksimal 3 hari untuk mencegah keratitis infeksi mikroba berat.',
    references: 'Farmakope Indonesia VI & Monografi Sediaan Unit Dose Cendo',
    recommendedCategory: 'ophthalmic_minidose'
  },
  {
    id: 'rec-cendo-fenicol-eye',
    drugName: 'Cendo Fenicol Tetes Mata 0.5% / 1% (Kloramfenikol)',
    genericName: 'Chloramphenicol',
    formType: 'Sediaan Oftalmik',
    brandExamples: ['Cendo Fenicol 0.5%', 'Cendo Fenicol 1%', 'Erlamycetin Tetes Mata'],
    reconstitutionDiluent: 'Sediaan tetes mata steril siap pakai',
    volumeOrInstruction: 'Teteskan 1-2 tetes pada mata yang sakit tiap 2-4 jam.',
    budRoomTemp: '28 HARI pasca segel botol dibuka (< 25°C terlindung cahaya)',
    budRefrigerated: 'Wajib Kulkas (2°C - 8°C) SEBELUM dibuka; setelah dibuka tahan 28 hari',
    storageNotes: 'Kloramfenikol sangat termolabil dan rentan fotodegradasi. Sebelum dibuka wajib disimpan di lemari es. Lindungi dari paparan sinar matahari langsung.',
    references: 'Farmakope Indonesia VI & AHFS Drug Information',
    recommendedCategory: 'ophthalmic_multidose'
  },
  {
    id: 'rec-cendo-tobroson-eye',
    drugName: 'Cendo Tobroson Tetes Mata 5 mL',
    genericName: 'Tobramycin 0.3% + Dexamethasone 0.1%',
    formType: 'Sediaan Oftalmik',
    brandExamples: ['Cendo Tobroson', 'Tobradex', 'Eyedex'],
    reconstitutionDiluent: 'Sediaan suspensi oftalmik steril multidose',
    volumeOrInstruction: 'Kocok perlahan sebelum diteteskan ke kantung mata.',
    budRoomTemp: '28 HARI (4 Minggu) pasca segel botol dibuka (< 25°C)',
    budRefrigerated: '28 HARI (Kulkas 2°C - 8°C)',
    storageNotes: 'Kocok dahulu. Botol disimpan tegak lurus pada suhu sejuk. Buang sisa obat setelah 4 minggu dibuka.',
    references: 'Alcon Tobradex Monograph & Cendo Product Insert',
    recommendedCategory: 'ophthalmic_multidose'
  },
  {
    id: 'rec-latanoprost-eye',
    drugName: 'Latanoprost Tetes Mata Glaukoma 0.005% (Xalatan)',
    genericName: 'Latanoprost Prostaglandin Analogue',
    formType: 'Sediaan Oftalmik',
    brandExamples: ['Xalatan Tetes Mata', 'Glaopen', 'Latanoprost Generik'],
    reconstitutionDiluent: 'Sediaan tetes mata steril multidose',
    volumeOrInstruction: 'Teteskan 1 tetes pada mata yang sakit satu kali sehari pada malam hari.',
    budRoomTemp: '28 HARI (Maks 4 Minggu) pada Suhu Ruang (< 25°C) SETELAH botol dibuka',
    budRefrigerated: 'Sesuai Tanggal Kadaluarsa Pabrik (2°C - 8°C) SEBELUM botol dibuka',
    storageNotes: 'Sebelum botol dibuka, wajib disimpan di kulkas (2°C - 8°C) terlindung dari cahaya. Setelah botol dibuka, dapat disimpan pada suhu ruang < 25°C selama maksimal 4 minggu.',
    references: 'Pfizer Xalatan Prescribing Information & EMA Guideline',
    recommendedCategory: 'ophthalmic_multidose'
  },
  {
    id: 'rec-timolol-eye',
    drugName: 'Timolol Maleat Tetes Mata 0.25% & 0.5%',
    genericName: 'Timolol Maleate Non-Selective Beta-Blocker',
    formType: 'Sediaan Oftalmik',
    brandExamples: ['Timol 0.5%', 'Isotic Adretor', 'Cendo Timol', 'Timolol Generik'],
    reconstitutionDiluent: 'Sediaan tetes mata steril multidose',
    volumeOrInstruction: 'Teteskan 1 tetes 2 kali sehari pada mata yang sakit.',
    budRoomTemp: '28 HARI pasca segel dibuka (< 25°C terlindung cahaya)',
    budRefrigerated: '28 HARI (Kulkas 2°C - 8°C)',
    storageNotes: 'Lindungi dari paparan cahaya langsung. Tekan kantung lakrimalis (nasolacrimal occlusion) selama 1-2 menit pasca tetes untuk cegah efek samping sistemik bronkospasme/bradikardia.',
    references: 'Farmakope Indonesia VI & Merck Timoptic Package Insert',
    recommendedCategory: 'ophthalmic_multidose'
  },
  {
    id: 'rec-cendo-cenfresh-minidose',
    drugName: 'Cendo Cenfresh Minidose (CMC Na 5 mg/mL)',
    genericName: 'Carboxymethylcellulose Sodium Preservative-Free',
    formType: 'Sediaan Oftalmik',
    brandExamples: ['Cendo Cenfresh Minidose', 'Refresh Tears Unit Dose'],
    reconstitutionDiluent: 'Sediaan air mata buatan steril unit-dose tanpa pengawet',
    volumeOrInstruction: 'Teteskan 1-2 tetes pada mata yang kering sesuai kebutuhan.',
    budRoomTemp: '3 x 24 JAM (72 Jam) setelah tutup tube minidose dibuka',
    budRefrigerated: '3 x 24 Jam (Simpan dalam kantong foil pembungkus)',
    storageNotes: 'Sangat ramah kornea karena tanpa pengawet benzalkonium klorida, namun строго dibatasi maksimal 72 jam pemakaian pasca tutup dibuka.',
    references: 'Farmakope Indonesia VI & Monografi Produk Cendo',
    recommendedCategory: 'ophthalmic_minidose'
  },
  {
    id: 'rec-cendo-hyalub-eye',
    drugName: 'Cendo Hyalub Tetes Mata (Natrium Hialuronat 1 mg/mL)',
    genericName: 'Sodium Hyaluronate Viscoelastic Lubricant',
    formType: 'Sediaan Oftalmik',
    brandExamples: ['Cendo Hyalub Minidose', 'Cendo Hyalub Botol', 'Hialid 0.1%'],
    reconstitutionDiluent: 'Sediaan tetes mata steril lubrikan viskoelastik tinggi',
    volumeOrInstruction: 'Teteskan 1 tetes 5-6 kali sehari atau saat mata terasa pedih kering.',
    budRoomTemp: 'Kemasan Minidose: 3 x 24 Jam; Kemasan Botol Multidose: 28 Hari',
    budRefrigerated: 'Sesuai kemasan (Minidose 72 Jam / Multidose 28 Hari)',
    storageNotes: 'Membentuk lapisan air mata buatan yang tahan lama pada epitel kornea. Tutup rapat kembali setelah digunakan.',
    references: 'Santen Hialid Monograph & Cendo Hyalub Insert',
    recommendedCategory: 'ophthalmic_minidose'
  },
  {
    id: 'rec-catarlent-katalin-eye',
    drugName: 'Catarlent / Pirenoxine (Katalin Tablet Rekonstitusi Tetes Mata)',
    genericName: 'Pirenoxine Sodium (Tablet Pelarutan Tetes Mata Katarak)',
    formType: 'Sediaan Oftalmik',
    brandExamples: ['Catarlent Tetes Mata', 'Katalin Eye Drops', 'Clarvisan'],
    reconstitutionDiluent: 'Botol pelarut steril 15 mL bawaan kemasan',
    volumeOrInstruction: 'Lepaskan segel botol pelarut, masukkan 1 tablet pirenoxine ke dalam botol, pasang tutup penetes, kocok hingga tablet larut sempurna menjadi larutan bening jingga/oranye.',
    budRoomTemp: '20 HARI (Suhu Ruang Sejuk < 25°C Terlindung Cahaya)',
    budRefrigerated: '30 HARI (Kulkas 2°C - 8°C Wajib Terlindung Cahaya)',
    storageNotes: 'Pirenoxine sangat sensitif terhadap cahaya. Botol penetes WAJIB selalu dimasukkan ke dalam kantung plastik hitam buram bawaan pabrik setelah digunakan.',
    references: 'Takeda Katalin Product Insert & Farmakope Indonesia VI',
    recommendedCategory: 'commercial_dry_syrup'
  },
  {
    id: 'rec-chloramphenicol-gentamicin-ointment',
    drugName: 'Kloramfenikol & Gentamisin Salep Mata Steril (Eye Ointment)',
    genericName: 'Chloramphenicol 1% / Gentamicin 0.3% Basis Salep Mata',
    formType: 'Sediaan Oftalmik',
    brandExamples: ['Cendo Fenicol Salep Mata', 'Genoint Salep Mata', 'Erlamycetin Salep Mata'],
    reconstitutionDiluent: 'Sediaan salep mata steril basis anhidrat siap pakai',
    volumeOrInstruction: 'Oleskan pita salep tipis (sekitar 1 cm) pada kantung konjungtiva bawah sebelum tidur malam.',
    budRoomTemp: '28 HARI (4 Minggu) pasca segel tube pertama kali dibuka (< 25°C)',
    budRefrigerated: '28 HARI (Kulkas 2°C - 8°C)',
    storageNotes: 'Ujung tube salep DILARANG menyentuh mata atau jari. Bersihkan sisa salep di mulut tube dengan kassa/tisu steril sebelum ditutup rapat.',
    references: 'Farmakope Indonesia VI & USP General Chapter <795>',
    recommendedCategory: 'ophthalmic_multidose'
  },

  // =========================================================================
  // SERBUK INJEKSI STERIL TAMBAHAN (ICU / RAWAT INAP)
  // =========================================================================
  {
    id: 'rec-piptazo-inj',
    drugName: 'Piperacillin + Tazobactam Serbuk Injeksi 4.5 Gram',
    genericName: 'Piperacillin Sodium + Tazobactam Sodium',
    formType: 'Injeksi IV/IM Powder',
    brandExamples: ['Tazocin 4.5 g', 'Pipratt', 'Piptaz', 'Piperacillin-Tazobactam Generik'],
    reconstitutionDiluent: 'WFI 20 mL atau NaCl 0.9% 20 mL',
    volumeOrInstruction: 'Rekonstitusi vial 4.5 g dengan 20 mL WFI atau NaCl 0.9%, kocok kuat hingga larut sempurna. Kemudian encerkan dalam 50-150 mL NaCl 0.9% untuk infus (durasi 30 menit atau infus kontinu 4 jam).',
    budRoomTemp: '24 JAM (dalam NaCl 0.9% Suhu Ruang 25°C)',
    budRefrigerated: '48 JAM / 2 HARI (dalam NaCl 0.9% Kulkas 2°C - 8°C)',
    storageNotes: 'Tidak kompatibel jika dicampur bersama aminoglikosida dalam satu bag infus (inaktivasi kimia).',
    references: 'Pfizer Tazocin Prescribing Information & Trissel’s Handbook',
    recommendedCategory: 'sterile_sdv'
  },
  {
    id: 'rec-ampicillin-pure-inj',
    drugName: 'Ampicillin Sodium Serbuk Injeksi 1 Gram',
    genericName: 'Ampicillin Sodium Murni',
    formType: 'Injeksi IV/IM Powder',
    brandExamples: ['Viccillin Injeksi', 'Kalpicillin IV', 'Ampicillin Generik Injeksi'],
    reconstitutionDiluent: 'Water for Injection (WFI) 5 mL untuk IV atau 3.5 mL untuk IM',
    volumeOrInstruction: 'Larutkan vial 1 g dengan 5 mL WFI, berikan bolus IV lambat (minimal 3-5 menit) atau encerkan dalam 50-100 mL NaCl 0.9% untuk infus.',
    budRoomTemp: '8 JAM (dalam pelarut NaCl 0.9% Suhu Ruang)',
    budRefrigerated: '24 JAM (dalam NaCl 0.9% Kulkas 2°C - 8°C)',
    storageNotes: 'DILARANG MENGGUNAKAN PELARUT DEXTROSE (Glukosa mempercepat degradasi cincin beta-laktam ampicillin hingga 50% dalam 1 jam). Pelarut wajib NaCl 0.9%.',
    references: 'Meiji Viccillin Monograph & Trissel’s Handbook on Injectable Drugs',
    recommendedCategory: 'sterile_sdv'
  },
  {
    id: 'rec-benzathine-penicillin-inj',
    drugName: 'Benzathine Benzylpenicillin Serbuk Injeksi 1.2 Juta / 2.4 Juta IU',
    genericName: 'Benzathine Penicillin G',
    formType: 'Injeksi IV/IM Powder',
    brandExamples: ['Penadur L-A', 'Benzathine Penicillin Bio Farma'],
    reconstitutionDiluent: 'Water for Injection (WFI) 4 - 5 mL',
    volumeOrInstruction: 'Larutkan dengan WFI, kocok kuat hingga menjadi suspensi homogen. Segera aspirasi dan injeksikan secara INTRAMUSKULAR (IM) DALAM di gluteus kuadran atas luar.',
    budRoomTemp: 'Gunakan SEGERA (Maksimal 2 Jam pasca rekonstitusi)',
    budRefrigerated: '24 JAM (Kulkas 2°C - 8°C)',
    storageNotes: 'PERINGATAN FATAL: DILARANG KERAS DIBERIKAN INTRAVENA (memicu henti jantung dan emboli paru fatal). Gunakan jarum besar (G20-G21) agar suspensi tidak menyumbat jarum saat disuntikkan.',
    references: 'WHO Treatment Guidelines for Treponema pallidum & Bio Farma Product Insert',
    recommendedCategory: 'sterile_sdv'
  },
  {
    id: 'rec-colistin-inj',
    drugName: 'Colistimethate Sodium (Colistin) Serbuk Injeksi 1 Juta / 2 Juta IU',
    genericName: 'Colistimethate Sodium (CMS)',
    formType: 'Injeksi IV/IM Powder',
    brandExamples: ['Colistine', 'Tadacol', 'Colomycin Injeksi'],
    reconstitutionDiluent: 'NaCl 0.9% atau WFI',
    volumeOrInstruction: 'Rekonstitusi dengan pelarut, encerkan dalam 50 mL NaCl 0.9% untuk infus lambat selama minimal 60 menit.',
    budRoomTemp: 'Gunakan sesegera mungkin / Maksimal 4 Jam',
    budRefrigerated: '24 JAM (Kulkas 2°C - 8°C)',
    storageNotes: 'PERINGATAN: Begitu direkonstitusi dalam air, prodrug CMS secara spontan terhidrolisis menjadi kolistin bebas yang jauh lebih toksik. Larutan rekonstitusi TIDAK BOLEH disimpan lama karena meningkatkan risiko nefrotoksisitas akut.',
    references: 'FDA Drug Safety Communication on Colistimethate & European Medicines Agency',
    recommendedCategory: 'sterile_sdv'
  },
  {
    id: 'rec-fosfomycin-inj',
    drugName: 'Fosfomycin Sodium Serbuk Injeksi 1 Gram / 2 Gram',
    genericName: 'Fosfomycin Disodium',
    formType: 'Injeksi IV/IM Powder',
    brandExamples: ['Fosmicin IV', 'Ivozfoc', 'Fosfomycin Generik'],
    reconstitutionDiluent: 'WFI 10-20 mL lalu diencerkan ke 100-250 mL NaCl 0.9% atau D5W',
    volumeOrInstruction: 'Larutkan serbuk dengan WFI hingga larut jernih, lalu campurkan ke cairan infus untuk diberikan selama 60 menit.',
    budRoomTemp: '12 JAM (Suhu Ruang 25°C)',
    budRefrigerated: '24 JAM (Kulkas 2°C - 8°C)',
    storageNotes: 'Mengandung beban natrium sangat tinggi (14.4 mEq atau 330 mg Natrium per gram fosfomycin). Wajib pantau elektrolit dan overload cairan pada pasien gagal jantung.',
    references: 'Meiji Fosmicin Product Insert & EMA Summary of Product Characteristics',
    recommendedCategory: 'sterile_sdv'
  },
  {
    id: 'rec-acyclovir-inj',
    drugName: 'Acyclovir Sodium Serbuk Injeksi 250 mg / 500 mg',
    genericName: 'Acyclovir Sodium',
    formType: 'Injeksi IV/IM Powder',
    brandExamples: ['Zovirax IV', 'Clinovir Injeksi', 'Acyclovir Generik IV'],
    reconstitutionDiluent: 'WFI 10 mL (untuk 250 mg) atau 20 mL (untuk 500 mg), kemudian diencerkan dalam minimal 100 mL NaCl 0.9%',
    volumeOrInstruction: 'Larutkan serbuk dengan WFI (konsentrasi 25 mg/mL), kocok hingga jernih, lalu encerkan ke dalam kantong infus NaCl 0.9% untuk infus lambat minimal 60 menit.',
    budRoomTemp: '12 JAM (Suhu Ruang 15°C - 25°C)',
    budRefrigerated: 'JANGAN DISIMPAN DI KULKAS (DILARANG PENDINGINAN 2°C - 8°C)',
    storageNotes: 'PERINGATAN KRITIS: Suhu dingin memicu presipitasi kristal acyclovir yang tidak terlihat kasat mata dan berakibat fatal jika masuk ke pembuluh darah. Infus wajib lambat (>= 60 menit) didampingi hidrasi adekuat untuk cegah nefropati kristal.',
    references: 'GlaxoSmithKline Zovirax IV Prescribing Information & Trissel’s Handbook',
    recommendedCategory: 'sterile_sdv'
  },
  {
    id: 'rec-esomeprazole-inj',
    drugName: 'Esomeprazole Sodium Serbuk Injeksi 40 mg',
    genericName: 'Esomeprazole Sodium',
    formType: 'Injeksi IV/IM Powder',
    brandExamples: ['Nexium IV 40 mg', 'Esomeprazole Generik Injeksi'],
    reconstitutionDiluent: 'NaCl 0.9% 5 mL untuk IV bolus (minimal 3 menit) atau 100 mL untuk infus intermiten (10-30 menit)',
    volumeOrInstruction: 'Larutkan vial 40 mg dengan 5 mL NaCl 0.9%, injeksikan bolus IV lambat atau masukkan ke dalam infus.',
    budRoomTemp: '12 JAM (dalam NaCl 0.9% Suhu Ruang 25°C)',
    budRefrigerated: '24 JAM (dalam NaCl 0.9% Kulkas 2°C - 8°C)',
    storageNotes: 'Sangat sensitif terhadap pH asam. Larutan harus jernih tanpa partikel. Jangan dicampur bersama obat lain pada jalur infus yang sama.',
    references: 'AstraZeneca Nexium IV Prescribing Information',
    recommendedCategory: 'sterile_sdv'
  },
  {
    id: 'rec-methylprednisolone-inj',
    drugName: 'Methylprednisolone Sodium Succinate Serbuk Injeksi 125 mg / 500 mg',
    genericName: 'Methylprednisolone Sodium Succinate',
    formType: 'Injeksi IV/IM Powder',
    brandExamples: ['Solu-Medrol Act-O-Vial', 'Medixon IV', 'Methylprednisolone Generik'],
    reconstitutionDiluent: 'Bacteriostatic Water / Pelarut Bawaan Vial Act-O-Vial',
    volumeOrInstruction: 'Tekan tombol aktivator Act-O-Vial untuk melepaskan pelarut ke kompartemen serbuk, kocok perlahan hingga larut jernih.',
    budRoomTemp: '48 JAM (Suhu Ruang 20°C - 25°C)',
    budRefrigerated: '48 JAM (Kulkas 2°C - 8°C)',
    storageNotes: 'Gunakan hanya larutan yang jernih. Untuk dosis tinggi (> 250 mg), berikan melalui infus IV lambat minimal 30 menit untuk mencegah aritmia atau kolaps kardiovaskular.',
    references: 'Pfizer Solu-Medrol Prescribing Information & ASHP Guidelines',
    recommendedCategory: 'sterile_sdv'
  },

  // =========================================================================
  // SEDIAAN TOPIKAL & DERMATOLOGI RACIKAN / PABRIK
  // =========================================================================
  {
    id: 'rec-salep-24-racikan',
    drugName: 'Salep 2-4 Racikan Anhidrat (Asam Salisilat 2% + Sulfur 4%)',
    genericName: 'Acidum Salicylicum 2% + Sulfur Praecipitatum 4% in Vaseline Album',
    formType: 'Topikal & Salep',
    brandExamples: ['Salep 2-4 Formas', 'Salep Scabies Racikan Apotek'],
    reconstitutionDiluent: 'Basis Vaselin Album murni tanpa fase air (Anhidrat)',
    volumeOrInstruction: 'Oleskan tipis pada lesi kulit (skabies / tinea) sesuai signa resep dokter.',
    budRoomTemp: 'Maksimal 180 HARI (6 Bulan) atau 25% sisa ED bahan terdekat (< 25°C)',
    budRefrigerated: 'Tidak perlu disimpan di lemari pendingin',
    storageNotes: 'Termasuk sediaan padat/semisolid tanpa fase air (Non-Aqueous Formulations USP <795>). Simpan dalam pot salep tertutup rapat di tempat sejuk dan kering.',
    references: 'Farmakope Indonesia VI & USP <795> Compounding Standards',
    recommendedCategory: 'non_aqueous_solid'
  },
  {
    id: 'rec-krim-kortiko-antijamur',
    drugName: 'Krim Racikan Kortikosteroid + Antijamur (Hidrokortison + Mikonazol)',
    genericName: 'Hydrocortisone Cream 1-2.5% + Miconazole Nitrate Cream 2%',
    formType: 'Topikal & Salep',
    brandExamples: ['Campuran Krim Hidrokortison + Daktarin', 'Racikan Krim Dermatitis Jamur'],
    reconstitutionDiluent: 'Pencampuran dua sediaan krim emulsi M/A yang mengandung fase air',
    volumeOrInstruction: 'Campurkan secara homogen di atas mortir/kaca arloji, masukkan ke dalam pot salep kedap.',
    budRoomTemp: 'Maksimal 30 HARI pada Suhu Ruang Terkontrol (20°C - 25°C)',
    budRefrigerated: '30 HARI (Jangan dibekukan di freezer)',
    storageNotes: 'Termasuk sediaan topikal mengandung fase air (Water-Containing Topicals USP <795>). Pencampuran krim dapat menurunkan stabilitas emulsi; buang bila terjadi pemisahan fase (cracking) atau bau tengik.',
    references: 'USP <795> Pharmaceutical Compounding - Nonsterile Preparations',
    recommendedCategory: 'topical_water_containing'
  },
  {
    id: 'rec-burnazin-silver-sulfadiazine',
    drugName: 'Perak Sulfadiazin Krim 1% (Burnazin Krim Luka Bakar)',
    genericName: 'Silver Sulfadiazine Micronized Cream 1%',
    formType: 'Topikal & Salep',
    brandExamples: ['Burnazin Krim', 'Silvazine', 'Perak Sulfadiazin Generik'],
    reconstitutionDiluent: 'Krim emulsi steril hidrofilik siap pakai',
    volumeOrInstruction: 'Oleskan dengan sarung tangan atau spatula steril setebal 1-2 mm pada area luka bakar yang telah dibersihkan.',
    budRoomTemp: '30 HARI pasca segel pot / tube dibuka (< 25°C terlindung cahaya)',
    budRefrigerated: '30 HARI (Hindari pembekuan)',
    storageNotes: 'Garam perak sangat peka terhadap oksidasi dan cahaya matahari (akan menghitam). Selalu gunakan spatula steril saat mengambil krim dari pot untuk mencegah inokulasi bakteri.',
    references: 'Darya-Varia Burnazin Product Monograph & Farmakope Indonesia VI',
    recommendedCategory: 'topical_water_containing'
  },
  {
    id: 'rec-tretinoin-retinoid-cream',
    drugName: 'Tretinoin / Asam Retinoat Krim Racikan 0.025% / 0.05%',
    genericName: 'Tretinoin (All-Trans Retinoic Acid)',
    formType: 'Topikal & Salep',
    brandExamples: ['Retin-A Krim', 'Vitacid Krim', 'Krim Racikan Jerawat Dermatologi'],
    reconstitutionDiluent: 'Basis krim pembawa racikan dermatologi',
    volumeOrInstruction: 'Oleskan tipis hanya pada malam hari sebelum tidur. Wajib gunakan tabir surya di pagi hari.',
    budRoomTemp: '30 HARI pada Suhu Ruang (< 25°C Wajib Wadah Kedap Cahaya)',
    budRefrigerated: '30 HARI (Kulkas 2°C - 8°C)',
    storageNotes: 'Tretinoin mengalami degradasi fotokimia cepat jika terpapar cahaya. Wajib dikemas dalam pot salep amber buram atau pot ganda yang tidak tembus cahaya.',
    references: 'USP <795> Guidelines & Journal of Pharmaceutical Sciences',
    recommendedCategory: 'topical_water_containing'
  },

  // =========================================================================
  // SEDIAAN INHALER & SEMPROT HIDUNG (NASAL SPRAY)
  // =========================================================================
  {
    id: 'rec-fluticasone-nasal',
    drugName: 'Fluticasone Furoate / Propionate Nasal Spray',
    genericName: 'Fluticasone Furoate 27.5 mcg / Fluticasone Propionate 50 mcg',
    formType: 'Inhaler & Semprot Hidung',
    brandExamples: ['Avamys Nasal Spray', 'Flixonase', 'Cutivate'],
    reconstitutionDiluent: 'Suspensi semprot hidung siap pakai (terukur / metered spray)',
    volumeOrInstruction: 'Kocok botol, lakukan priming (semprot ke udara 6 kali hingga kabut halus keluar) sebelum pertama kali digunakan.',
    budRoomTemp: '60 - 90 HARI pasca pertama kali priming / dibuka segelnya (< 30°C)',
    budRefrigerated: 'JANGAN SIMPAN DI KULKAS (Dapat menyumbat lubang nosel mikro)',
    storageNotes: 'Tutup pelindung nosel harus selalu terpasang setelah digunakan. Bersihkan ujung nosel dengan tisu kering bersih (jangan dibilas air langsung).',
    references: 'GSK Avamys Prescribing Information & FDA Nasal Spray Guidelines',
    recommendedCategory: 'topical_water_containing'
  },
  {
    id: 'rec-budesonide-nasal',
    drugName: 'Budesonide Nasal Spray 64 mcg / dosis',
    genericName: 'Budesonide Micronized Nasal Suspension',
    formType: 'Inhaler & Semprot Hidung',
    brandExamples: ['Rhinocort Aqua Nasal Spray', 'Budenofalk Nasal'],
    reconstitutionDiluent: 'Suspensi semprot hidung siap pakai',
    volumeOrInstruction: 'Kocok botol, semprotkan 1-2 semprotan pada tiap lubang hidung satu kali sehari di pagi hari.',
    budRoomTemp: '60 HARI (2 Bulan) pasca segel dibuka (< 30°C)',
    budRefrigerated: 'Hindari penyimpanan di kulkas atau tempat beku',
    storageNotes: 'Kocok sebelum digunakan. Buang sisa obat setelah 60 hari pemakaian meskipun masih tersisa cairan di dalam botol.',
    references: 'AstraZeneca Rhinocort Aqua Prescribing Information',
    recommendedCategory: 'topical_water_containing'
  },
  {
    id: 'rec-symbicort-turbuhaler',
    drugName: 'Budesonide + Formoterol Inhaler Turbuhaler (Symbicort 80/4.5 & 160/4.5)',
    genericName: 'Budesonide + Formoterol Fumarate Dihydrate Dry Powder Inhaler',
    formType: 'Inhaler & Semprot Hidung',
    brandExamples: ['Symbicort Turbuhaler 60 Dosis / 120 Dosis'],
    reconstitutionDiluent: 'Serbuk inhalasi kering mikronisasi (Dry Powder Inhaler / DPI)',
    volumeOrInstruction: 'Putar cincin merah ke kanan lalu ke kiri sampai terdengar bunyi KLIK. Hisap dalam-dalam melalui corong mulut.',
    budRoomTemp: '3 BULAN (90 HARI) pasca pembungkus foil aluminium dibuka (< 30°C)',
    budRefrigerated: 'JANGAN DISIMPAN DI KULKAS (Kelembapan merusak aliran serbuk mikronisasi)',
    storageNotes: 'Tuliskan tanggal pembukaan foil pada badan Turbuhaler. Simpan di tempat kering dengan penutup terpasang rapat. Dilarang menghembuskan napas ke dalam corong Turbuhaler.',
    references: 'AstraZeneca Symbicort Turbuhaler Package Insert',
    recommendedCategory: 'non_aqueous_solid'
  },
  {
    id: 'rec-seretide-diskus',
    drugName: 'Salmeterol + Fluticasone Diskus (Seretide Diskus 100, 250, 500 mcg)',
    genericName: 'Salmeterol Xinafoate + Fluticasone Propionate DPI',
    formType: 'Inhaler & Semprot Hidung',
    brandExamples: ['Seretide Diskus 60 Dosis'],
    reconstitutionDiluent: 'Serbuk inhalasi kering dalam strip blister individual',
    volumeOrInstruction: 'Buka penutup luar, dorong tuas ke belakang hingga bunyi klik, hisap kuat dan dalam melalui corong mulut, kumur air setelahnya.',
    budRoomTemp: '1 - 2 BULAN pasca pembungkus foil aluminium dibuka (< 30°C)',
    budRefrigerated: 'JANGAN SIMPAN DI KULKAS (Kelembapan atmosfer memicu penggumpalan serbuk)',
    storageNotes: 'Pembungkus foil aluminium berfungsi menjaga desikan pelindung kelembapan. Segera tuliskan tanggal pembukaan foil pada label khusus di kemasan Diskus.',
    references: 'GlaxoSmithKline Seretide Diskus Product Information',
    recommendedCategory: 'non_aqueous_solid'
  },
  {
    id: 'rec-toujeo-solostar',
    drugName: 'Toujeo SoloStar (Insulin Glargine 300 U/mL)',
    genericName: 'Insulin Glargine 300 U/mL Pen Injeksi',
    formType: 'Injeksi Insulin',
    brandExamples: ['Toujeo SoloStar 1.5 mL (450 Unit)'],
    reconstitutionDiluent: 'Larutan steril siap pakai dalam pena pre-filled',
    volumeOrInstruction: 'Injeksi subkutan 1x sehari pada waktu yang sama. Pena yang belum dipakai disimpan di kulkas (2-8°C). Sebelum pakai pertama, biarkan pada suhu ruang 1 jam.',
    budRoomTemp: '56 HARI (8 MINGGU) pada suhu ruang (< 30°C)',
    budRefrigerated: 'Pena yang sedang digunakan TIDAK BOLEH disimpan di kulkas',
    storageNotes: 'PERHATIAN PENTING: Berbeda dari Lantus (28 hari), Toujeo SoloStar stabil hingga 56 HARI (8 minggu) pada suhu ruang terlindung dari panas dan cahaya langsung. Lepaskan jarum setelah setiap penyuntikan.',
    references: 'Sanofi Toujeo SoloStar Package Insert & FDA Prescribing Information',
    recommendedCategory: 'sterile_mdv'
  },
  {
    id: 'rec-tresiba-flextouch',
    drugName: 'Tresiba FlexTouch (Insulin Degludec 100 U/mL)',
    genericName: 'Insulin Degludec Ultra-Long Acting Pen',
    formType: 'Injeksi Insulin',
    brandExamples: ['Tresiba FlexTouch 3 mL (300 Unit)'],
    reconstitutionDiluent: 'Larutan steril siap pakai dalam pena pre-filled',
    volumeOrInstruction: 'Injeksi subkutan 1x sehari kapan saja dengan fleksibilitas waktu pemberian minimal jeda 8 jam.',
    budRoomTemp: '56 HARI (8 MINGGU) pada suhu ruang (< 30°C)',
    budRefrigerated: 'Pena yang sedang digunakan dapat disimpan pada suhu ruang (< 30°C) atau di kulkas (2-8°C) hingga 56 hari',
    storageNotes: 'Tresiba memiliki stabilitas terpanjang di antara analog insulin basal (56 hari / 8 minggu setelah dibuka). Pasang kembali tutup pena untuk melindungi dari cahaya.',
    references: 'Novo Nordisk Tresiba Prescribing Information',
    recommendedCategory: 'sterile_mdv'
  },
  {
    id: 'rec-levemir-flexpen',
    drugName: 'Levemir FlexPen (Insulin Detemir 100 U/mL)',
    genericName: 'Insulin Detemir Long Acting Pen',
    formType: 'Injeksi Insulin',
    brandExamples: ['Levemir FlexPen 3 mL (300 Unit)'],
    reconstitutionDiluent: 'Larutan steril jernih dalam pena pre-filled',
    volumeOrInstruction: 'Injeksi subkutan 1-2x sehari.',
    budRoomTemp: '42 HARI (6 MINGGU) pada suhu ruang (< 30°C)',
    budRefrigerated: 'Pena yang sedang dipakai TIDAK DISARANKAN disimpan di kulkas',
    storageNotes: 'Perhatikan batas waktu 42 hari (6 minggu), jangan disamakan dengan insulin basal 28 hari. Lindungi dari panas berlebih dan sinar matahari.',
    references: 'Novo Nordisk Levemir FlexPen Package Insert',
    recommendedCategory: 'sterile_mdv'
  },
  {
    id: 'rec-novorapid-flexpen',
    drugName: 'NovoRapid FlexPen (Insulin Aspart 100 U/mL)',
    genericName: 'Insulin Aspart Rapid-Acting Pen',
    formType: 'Injeksi Insulin',
    brandExamples: ['NovoRapid FlexPen 3 mL (300 Unit)'],
    reconstitutionDiluent: 'Larutan jernih steril dalam pena pre-filled',
    volumeOrInstruction: 'Injeksi subkutan 5-10 menit sebelum makan atau segera setelah makan.',
    budRoomTemp: '28 HARI (4 MINGGU) pada suhu ruang (< 30°C)',
    budRefrigerated: 'Pena yang sedang digunakan TIDAK DISARANKAN disimpan di kulkas (injeksi insulin dingin menimbulkan nyeri subkutan)',
    storageNotes: 'Tuliskan tanggal buka pada pena. Buang sisa insulin setelah 28 hari meskipun cairan masih tersisa.',
    references: 'Novo Nordisk NovoRapid Prescribing Information',
    recommendedCategory: 'sterile_mdv'
  },
  {
    id: 'rec-ozempic-pen',
    drugName: 'Ozempic Pen (Semaglutide 2 mg / 4 mg)',
    genericName: 'Semaglutide Injeksi Subkutan (GLP-1 RA)',
    formType: 'Injeksi Insulin',
    brandExamples: ['Ozempic 0.25/0.5 mg Pen', 'Ozempic 1 mg Pen'],
    reconstitutionDiluent: 'Larutan jernih tidak berwarna dalam pena pre-filled',
    volumeOrInstruction: 'Injeksi subkutan 1x seminggu pada hari yang sama setiap minggu.',
    budRoomTemp: '56 HARI (8 MINGGU) pada suhu ruang (15°C - 30°C)',
    budRefrigerated: 'Pena yang sedang digunakan dapat disimpan pada suhu ruang (< 30°C) atau di kulkas (2-8°C) hingga 56 hari',
    storageNotes: 'DILARANG membekukan Ozempic. Selalu lepas jarum suntik setelah setiap injeksi dan pasang kembali tutup pena pelindung cahaya.',
    references: 'Novo Nordisk Ozempic Package Insert & FDA Label',
    recommendedCategory: 'sterile_mdv'
  },
  {
    id: 'rec-nystatin-oral',
    drugName: 'Nystatin Oral Drop 100.000 IU / mL',
    genericName: 'Nystatin Suspensi Oral',
    formType: 'Dry Syrup',
    brandExamples: ['Kandistatin', 'Mycostatin Oral Drop', 'Nymico', 'Nystatin Generik'],
    reconstitutionDiluent: 'Suspensi siap pakai dalam botol tetes',
    volumeOrInstruction: 'Teteskan ke dalam rongga mulut (kiri dan kanan), tahan beberapa saat sebelum ditelan. Kocok botol sebelum digunakan.',
    budRoomTemp: '28 HARI pasca segel botol dibuka (< 25°C)',
    budRefrigerated: '28 Hari (Kulkas 2°C - 8°C, jangan dibekukan)',
    storageNotes: 'Simpan terlindung dari cahaya. Tulis tanggal pertama kali botol dibuka pada label.',
    references: 'Brosur Resmi Pabrik Mycostatin & Farmakope Indonesia VI',
    recommendedCategory: 'oral_water_containing'
  },
  {
    id: 'rec-piperacillin-tazobactam',
    drugName: 'Piperacillin + Tazobactam Serbuk Injeksi 4.5 Gram',
    genericName: 'Piperacillin Sodium + Tazobactam Sodium',
    formType: 'Injeksi IV/IM Powder',
    brandExamples: ['Tazocin', 'Tazopip', 'Bactazol', 'Piperacillin-Tazobactam Generik'],
    reconstitutionDiluent: 'NaCl 0.9% atau Water for Injection (WFI) 20 mL',
    volumeOrInstruction: 'Rekonstitusi vial 4.5 g dengan 20 mL pelarut (kocok kuat hingga larut sempurna), encerkan lebih lanjut ke dalam 50-150 mL NaCl 0.9% atau D5W untuk infus IV selama 30 menit atau extended infusion 3-4 jam.',
    budRoomTemp: '24 Jam (Suhu Ruang 20°C - 25°C)',
    budRefrigerated: '48 Jam (Kulkas 2°C - 8°C)',
    storageNotes: 'Dilarang mencampur dalam satu jalur IV dengan aminoglikosida (Gentamicin/Amikacin) karena inaktivasi timbal balik.',
    references: 'Pfizer Tazocin Prescribing Information & Trissel’s Handbook on Injectable Drugs',
    recommendedCategory: 'sterile_sdv'
  },
  {
    id: 'rec-cefepime-inj',
    drugName: 'Cefepime Serbuk Injeksi 1 Gram',
    genericName: 'Cefepime Hydrochloride',
    formType: 'Injeksi IV/IM Powder',
    brandExamples: ['Maxipime', 'Daryacef', 'Cefepime Generik'],
    reconstitutionDiluent: 'WFI 10 mL (IV) atau WFI 2.4 mL / Lidocain 1% (IM)',
    volumeOrInstruction: 'Larutkan vial 1 g dengan 10 mL WFI, encerkan dalam 50-100 mL NaCl 0.9% atau D5W untuk infus 30 menit.',
    budRoomTemp: '24 Jam (Suhu Ruang 20°C - 25°C)',
    budRefrigerated: '7 HARI (Kulkas 2°C - 8°C)',
    storageNotes: 'Warna larutan dapat berubah dari kuning pucat menjadi kuning kecokelatan tanpa penurunan potensi selama batas waktu stabilitas dipatuhi.',
    references: 'Bristol-Myers Squibb Maxipime Monograph & ASHP Injectable Drugs',
    recommendedCategory: 'sterile_sdv'
  },
  {
    id: 'rec-colistimethate-inj',
    drugName: 'Colistimethate Sodium Serbuk Injeksi 1 Juta IU / 2 Juta IU',
    genericName: 'Colistimethate Sodium (Colistin / CMS)',
    formType: 'Injeksi IV/IM Powder',
    brandExamples: ['Colistin Injeksi', 'Kostin', 'Tadaxin'],
    reconstitutionDiluent: 'NaCl 0.9% atau WFI 2 mL',
    volumeOrInstruction: 'Rekonstitusi secara perlahan untuk menghindari timbulnya busa berlebih. Encerkan dalam 50 mL NaCl 0.9% untuk infus selama 30 menit.',
    budRoomTemp: 'SEGERA DIGUNAKAN (Maksimal 6-12 Jam)',
    budRefrigerated: '24 Jam (Kulkas 2°C - 8°C)',
    storageNotes: 'PERINGATAN TOKSISITAS: Colistimethate terhidrolisis secara bertahap dalam larutan berair menjadi kolistin bebas yang jauh lebih toksik terhadap ginjal dan sistem saraf. Hindari penyimpanan larutan infus melebihi 24 jam.',
    references: 'FDA Safety Warning on Colistimethate Sodium & Clinical Pharmacokinetics of Colistin',
    recommendedCategory: 'sterile_sdv'
  },
  {
    id: 'rec-amphotericin-b',
    drugName: 'Amphotericin B Deoxycholate Serbuk Injeksi 50 mg',
    genericName: 'Amphotericin B Konvensional',
    formType: 'Injeksi IV/IM Powder',
    brandExamples: ['Fungizone', 'Amphotericin B Generik'],
    reconstitutionDiluent: 'WAJIB Sterile Water for Injection (WFI) 10 mL TANPA BAHAN PENGAWET',
    volumeOrInstruction: 'Rekonstitusi vial 50 mg dengan 10 mL SWFI, kocok segera hingga larutan jernih. Encerkan lebih lanjut HANYA dengan Dextrose 5% (D5W) pH > 4.2 hingga konsentrasi 0.1 mg/mL.',
    budRoomTemp: '24 Jam pada Suhu Ruang (Terlindung dari Cahaya)',
    budRefrigerated: '7 Hari (Vial rekonstitusi di kulkas 2°C - 8°C terlindung cahaya)',
    storageNotes: 'KONTRAINDIKASI PELARUT: DILARANG KERAS menggunakan NaCl 0.9% atau larutan elektrolit lain karena memicu presipitasi masif seketika. Selama infus, lindungi kantong dan selang dari cahaya.',
    references: 'Bristol-Myers Squibb Fungizone Monograph & Trissel’s Injectable Drugs',
    recommendedCategory: 'sterile_sdv'
  },
  {
    id: 'rec-caspofungin-inj',
    drugName: 'Caspofungin Serbuk Injeksi 50 mg / 70 mg',
    genericName: 'Caspofungin Acetate (Echinocandin)',
    formType: 'Injeksi IV/IM Powder',
    brandExamples: ['Cancidas'],
    reconstitutionDiluent: 'Sterile Water for Injection (WFI) 10.5 mL',
    volumeOrInstruction: 'Biarkan vial mencapai suhu kamar sebelum dilarutkan dengan 10.5 mL SWFI. Encerkan ke dalam 250 mL (atau 100 mL) NaCl 0.9% atau Ringer Laktat.',
    budRoomTemp: '24 Jam pada Suhu Ruang (< 25°C)',
    budRefrigerated: '48 Jam (Kulkas 2°C - 8°C dalam NaCl 0.9%)',
    storageNotes: 'JANGAN gunakan pelarut yang mengandung Dextrose/Glukosa karena caspofungin tidak stabil dalam larutan gula.',
    references: 'Merck Sharp & Dohme Cancidas Product Monograph',
    recommendedCategory: 'sterile_sdv'
  },
  {
    id: 'rec-cendo-minidose-artificial-tears',
    drugName: 'Tetes Mata Minidose Tanpa Pengawet (Cendo Cenfresh / Eyefresh)',
    genericName: 'Carboxymethylcellulose / Dextran / HPMC Minidose',
    formType: 'Sediaan Oftalmik',
    brandExamples: ['Cendo Cenfresh Minidose', 'Cendo Eyefresh Minidose', 'Tears Naturale Free'],
    reconstitutionDiluent: 'Tetes mata steril dosis tunggal (strip 5 botol kecil)',
    volumeOrInstruction: 'Puntir tutup botol minidose untuk membuka. Teteskan 1-2 tetes ke mata yang sakit. Tutup kembali dengan memasukkan kepala tutup secara terbalik.',
    budRoomTemp: '3 x 24 JAM (72 JAM) setelah tutup botol minidose dibuka (< 25°C)',
    budRefrigerated: '3 x 24 Jam (Jangan dibekukan)',
    storageNotes: 'Karena TIDAK MENGANDUNG PENGAWET (Preservative-Free), risiko kontaminasi bakteri meningkat setelah 72 jam. Buang sisa cairan minidose setelah 3 hari meskipun masih bersisa.',
    references: 'USP <797> Ophthalmic Standards & Brosur Resmi Cendo Indonesia',
    recommendedCategory: 'ophthalmic_minidose'
  },
  {
    id: 'rec-levofloxacin-eyedrop',
    drugName: 'Levofloxacin Tetes Mata 0.5% (Cravit / LFX)',
    genericName: 'Levofloxacin Ophthalmic Solution',
    formType: 'Sediaan Oftalmik',
    brandExamples: ['Cravit 0.5% Ophthalmic', 'LFX Tetes Mata', 'Cendo Floxa'],
    reconstitutionDiluent: 'Larutan tetes mata steril multidose berpengawet (Benzalkonium Klorida)',
    volumeOrInstruction: 'Teteskan 1 tetes pada mata yang sakit. Jangan menyentuhkan ujung penetes ke mata atau jari.',
    budRoomTemp: '28 HARI (4 MINGGU) setelah segel botol pertama kali dibuka (< 30°C)',
    budRefrigerated: '28 Hari (Kulkas 2°C - 8°C, jangan dibekukan)',
    storageNotes: 'Tuliskan tanggal buka pada botol. Buang botol setelah 28 hari pasca buka segel.',
    references: 'Santen Cravit Package Insert & Farmakope Indonesia VI',
    recommendedCategory: 'ophthalmic_multidose'
  },
  {
    id: 'rec-otopain-otolin-ear',
    drugName: 'Tetes Telinga Kombinasi Antibiotik & Steroid (Otopain / Otolin)',
    genericName: 'Polymyxin B + Neomycin + Fludrocortisone + Lidocaine Ear Drops',
    formType: 'Sediaan Oftalmik',
    brandExamples: ['Otopain Tetes Telinga', 'Otolin Ear Drops', 'Tarivid Otic'],
    reconstitutionDiluent: 'Larutan tetes telinga steril berpengawet',
    volumeOrInstruction: 'Teteskan 2-4 tetes ke liang telinga yang sakit 3-4 kali sehari. Hangatkan botol di telapak tangan sebelum digunakan untuk mencegah pusing (vertigo kalori).',
    budRoomTemp: '28 HARI (4 MINGGU) setelah segel botol dibuka (< 25°C)',
    budRefrigerated: 'TIDAK DISARANKAN disimpan di kulkas (tetes telinga dingin memicu mual & vertigo)',
    storageNotes: 'Tutup botol rapat-rapat setelah digunakan. Tuliskan tanggal pertama kali dibuka pada kemasan botol.',
    references: 'Brosur Resmi Pabrik Interbat Otopain & AHFS Drug Information',
    recommendedCategory: 'topical_water_containing'
  }
];

// =========================================================================
// HELPER FUNCTIONS FOR BEYOND USE DATE DATABASE
// =========================================================================

export const getReconstitutionById = (id: string): CommercialDrugReconstitution | undefined => {
  return COMMERCIAL_DRUG_RECONSTITUTIONS.find(item => item.id === id);
};

export const searchReconstitutionDrugs = (
  query: string,
  formType?: string
): CommercialDrugReconstitution[] => {
  const q = query.trim().toLowerCase();
  return COMMERCIAL_DRUG_RECONSTITUTIONS.filter(item => {
    const matchType = !formType || formType === 'all' || item.formType === formType;
    if (!matchType) return false;
    if (!q) return true;
    return (
      item.drugName.toLowerCase().includes(q) ||
      item.genericName.toLowerCase().includes(q) ||
      (item.brandExamples || []).some(b => b.toLowerCase().includes(q))
    );
  });
};

