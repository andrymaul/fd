import { LiteratureSource } from './clinicalLiteratureData';

export const CLINICAL_LITERATURE_BATCH3_DATABASE: LiteratureSource[] = [
  // =========================================================================
  // 1. KLASTER PEDOMAN TERAPI KRONIS & KARDIOVASKULAR GLOBAL (6 SUMBER)
  // =========================================================================
  {
    id: 'lit-ada-diabetes-2024',
    title: 'ADA Standards of Care in Diabetes (2024 / 2025 Updates)',
    institution: 'American Diabetes Association (ADA)',
    category: 'guidelines',
    categoryLabel: 'Pedoman Klinis & PNPK',
    documentCode: 'Diabetes Care 2024;47(Suppl. 1)',
    releaseYear: '2024 / 2025',
    lastUpdated: 'Januari 2025',
    evidenceLevel: 'Level 1 (Meta-Analisis / RCT)',
    evidenceGrade: 'Grade A',
    summary: 'Standar emas rujukan penatalaksanaan diabetes melitus dunia yang menetapkan algoritma proteksi kardiorenal menggunakan SGLT2 inhibitor dan GLP-1 receptor agonist pada pasien dengan risiko ASCVD, gagal jantung, atau penyakit ginjal kronis (CKD) terlepas dari kadar awal HbA1c.',
    keyTopics: [
      'Inisiasi Dini SGLT2i (Empagliflozin, Dapagliflozin) dan GLP-1 RA untuk Proteksi Organ Target',
      'Target Kendali Glikemik HbA1c < 7.0% untuk Sebagian Besar Dewasa Tidak Hamil',
      'Manajemen Obesitas Terintegrasi sebagai Pilar Terapi DM Tipe 2 (Tirzepatide, Semaglutide)',
      'Penapisan Rutin Komplikasi Mikrovaskular: Rasio Albumin-Kreatinin Urin (uACR) & eGFR Tahunan'
    ],
    appliedInFeatures: [
      {
        tabId: 'guidelines',
        featureName: 'Panduan Terapi Klinis',
        description: 'Algoritma lini terapi DM Tipe 2 dan panduan kombinasi agen antidiabetes kardiorenal.'
      },
      {
        tabId: 'polypharmacy',
        featureName: 'Evaluasi & Polifarmasi',
        description: 'Skrining ketepatan peresepan OAD dan pencegahan hipoglikemia berat.'
      }
    ],
    officialUrl: 'https://diabetesjournals.org/care/issue/47/Supplement_1',
    officialUrlLabel: 'Portal Resmi ADA Standards of Care',
    citation: 'American Diabetes Association. Standards of Care in Diabetes—2024. Diabetes Care 2024;47(Suppl. 1):S1–S343.',
    badgeColor: 'bg-blue-700 text-white'
  },
  {
    id: 'lit-aha-acc-hfsa-2024',
    title: 'AHA/ACC/HFSA Guideline for the Management of Heart Failure',
    institution: 'American Heart Association (AHA), American College of Cardiology (ACC), & HFSA',
    category: 'guidelines',
    categoryLabel: 'Pedoman Klinis & PNPK',
    documentCode: 'Circulation 2022 / AHA Consensus 2024',
    releaseYear: '2023 / 2024',
    lastUpdated: 'November 2024',
    evidenceLevel: 'Level 1 (Meta-Analisis / RCT)',
    evidenceGrade: 'Grade A',
    summary: 'Pedoman konsensus komprehensif tata laksana gagal jantung yang merumuskan 4 pilar terapi farmakologi penyelamat hidup (Guideline-Directed Medical Therapy / GDMT) pada HFrEF: ARNI/ACEi, Beta-Blocker berbasis bukti, MRA (Spironolakton/Eplerenon), dan SGLT2i.',
    keyTopics: [
      'Terapi 4 Pilar GDMT HFrEF (Sacubitril/Valsartan, Bisoprolol/Carvedilol, Spironolakton, Dapagliflozin/Empagliflozin)',
      'Titrasi Cepat Dosis GDMT Menuju Dosis Target Maksimal yang Dapat Ditoleransi Pasien',
      'Rekomendasi Baru Penggunaan SGLT2i pada Gagal Jantung Fraksi Ejeksi Terpreservasi (HFpEF)',
      'Kriteria Pemantauan Ketat Serum Kalium dan Serum Kreatinin saat Inisiasi ARNI dan MRA'
    ],
    appliedInFeatures: [
      {
        tabId: 'guidelines',
        featureName: 'Panduan Terapi Klinis',
        description: 'Protokol penanganan gagal jantung akut dan kronis sesuai stadium ACC/AHA.'
      },
      {
        tabId: 'interactions',
        featureName: 'Cek Interaksi Obat',
        description: 'Pencegahan kombinasi terlarang ARNI dengan ACE-Inhibitor (washout period 36 jam).'
      }
    ],
    officialUrl: 'https://www.ahajournals.org/doi/10.1161/CIR.0000000000001063',
    officialUrlLabel: 'AHA/ACC Heart Failure Guideline',
    citation: 'Heidenreich PA, et al. 2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure. Circulation 2022;145(18):e895–e1032 (Reaffirmed 2024).',
    badgeColor: 'bg-red-700 text-white'
  },
  {
    id: 'lit-esc-hypertension-2024',
    title: 'ESC Guidelines for the Management of Elevated Blood Pressure and Hypertension',
    institution: 'European Society of Cardiology (ESC)',
    category: 'guidelines',
    categoryLabel: 'Pedoman Klinis & PNPK',
    documentCode: 'European Heart Journal 2024 Guidelines',
    releaseYear: '2024',
    lastUpdated: 'September 2024',
    evidenceLevel: 'Level 1 (Meta-Analisis / RCT)',
    evidenceGrade: 'Grade A',
    summary: 'Pedoman tata laksana hipertensi terkini dari European Society of Cardiology yang memperkenalkan kategori baru elevated BP (120-139/70-89 mmHg), merekomendasikan Single-Pill Combination (SPC) dual antihipertensi lini pertama untuk mempercepat kepatuhan pasien, dan target tensi sistolik 120-129 mmHg.',
    keyTopics: [
      'Inisiasi Terapi Dual SPC Dosis Rendah Lini Pertama (RAS Blocker + CCB Dihidropiridin atau Diuretik Tiazid)',
      'Klasifikasi Baru: Elevated BP (120–139 / 70–89 mmHg) dan True Hypertension (>= 140/90 mmHg)',
      'Target Tensi Sistolik Lebih Intensif (120 - 129 mmHg) pada Pasien Berisiko Tinggi CV',
      'Pemeriksaan Home Blood Pressure Monitoring (HBPM) dan Ambulatory BP Monitoring (ABPM)'
    ],
    appliedInFeatures: [
      {
        tabId: 'guidelines',
        featureName: 'Panduan Terapi Klinis',
        description: 'Algoritma pemilihan kombinasi obat antihipertensi tunggal dan ganda.'
      },
      {
        tabId: 'polypharmacy',
        featureName: 'Evaluasi & Polifarmasi',
        description: 'Optimasi kepatuhan terapi menggunakan formulasi Single Pill Combination (SPC).'
      }
    ],
    officialUrl: 'https://academic.oup.com/eurheartj/article/45/39/3912/7741355',
    officialUrlLabel: 'ESC Hypertension 2024 Portal',
    citation: 'McEvoy JW, et al. 2024 ESC Guidelines for the management of elevated blood pressure and hypertension. Eur Heart J 2024;45(39):3912–4018.',
    badgeColor: 'bg-rose-800 text-white'
  },
  {
    id: 'lit-aha-asa-stroke-2024',
    title: 'AHA/ASA Guidelines for the Early Management of Patients with Acute Ischemic Stroke',
    institution: 'American Heart Association (AHA) & American Stroke Association (ASA)',
    category: 'guidelines',
    categoryLabel: 'Pedoman Klinis & PNPK',
    documentCode: 'Stroke 2019 / AHA Guidelines Update 2024',
    releaseYear: '2023 / 2024',
    lastUpdated: 'Desember 2024',
    evidenceLevel: 'Level 1 (Meta-Analisis / RCT)',
    evidenceGrade: 'Grade A',
    summary: 'Pedoman tatalaksana fase hiperakut stroke iskemik: trombolisis intravena r-tPA (Alteplase) atau Tenecteplase dalam jendela waktu 4.5 jam dari onset gejala, protokol terapi antiplatelet ganda (DAPT Aspirin + Clopidogrel) 21 hari pertama pada stroke minor/TIA, serta manajemen tensi peri-stroke.',
    keyTopics: [
      'Jendela Waktu Trombolisis Intravena 4.5 Jam (Kriteria Inklusi & Eksklusi Absolut)',
      'Alternatif Fibrinolisis Tenecteplase 0.25 mg/kgBB (Maksimal 25 mg Bolus Tunggal)',
      'Protokol DAPT Aspirin + Clopidogrel Selama 21 Hari pada Pasien NIHSS <= 3 atau High-Risk TIA',
      'Target Tekanan Darah < 180/105 mmHg Sebelum dan 24 Jam Pasca-Terapi Trombolitik'
    ],
    appliedInFeatures: [
      {
        tabId: 'guidelines',
        featureName: 'Panduan Terapi Klinis',
        description: 'Protokol penanganan kedaruratan stroke iskemik akut dan stroke emboli.'
      },
      {
        tabId: 'interactions',
        featureName: 'Cek Interaksi Obat',
        description: 'Pencegahan interaksi perdarahan fatal antara trombolitik, antiplatelet, dan antikoagulan.'
      }
    ],
    officialUrl: 'https://www.ahajournals.org/doi/10.1161/STR.0000000000000211',
    officialUrlLabel: 'AHA/ASA Stroke Guidelines',
    citation: 'Powers WJ, et al. Guidelines for the Early Management of Patients With Acute Ischemic Stroke: 2019 Update to the 2018 Guidelines. Stroke 2019;50(12):e344–e418 (Reaffirmed 2024).',
    badgeColor: 'bg-violet-800 text-white'
  },
  {
    id: 'lit-ats-idsa-cap-guidelines',
    title: 'ATS/IDSA Clinical Practice Guideline on Diagnosis and Treatment of Community-Acquired Pneumonia (CAP)',
    institution: 'American Thoracic Society (ATS) & Infectious Diseases Society of America (IDSA)',
    category: 'guidelines',
    categoryLabel: 'Pedoman Klinis & PNPK',
    documentCode: 'Am J Respir Crit Care Med Guideline',
    releaseYear: '2023 / 2024',
    lastUpdated: 'Oktober 2024',
    evidenceLevel: 'Level 1 (Meta-Analisis / RCT)',
    evidenceGrade: 'Grade A',
    summary: 'Pedoman resmi pemilihan antimikroba empiris untuk pneumonia komunitas (CAP): pemilahan rawat jalan (Amoksisilin dosis tinggi 1 g 3x sehari atau Doksisiklin) vs rawat inap (Beta-laktam IV + Makrolida atau Fluorokuinolon respiratori monoterapi), serta durasi terapi berbasis stabilitas klinis (minimal 5 hari).',
    keyTopics: [
      'Terapi Rawat Jalan Pasien Tanpa Komorbid: Amoksisilin 1 g Tiap 8 Jam atau Doksisiklin 100 mg Tiap 12 Jam',
      'Terapi Rawat Inap Non-ICU: Ampisilin-Sulbaktam / Seftriakson Ditambah Azitromisin, atau Levofloksasin Monoterapi',
      'Skrining Indikasi Cakupan MRSA dan Pseudomonas aeruginosa Berdasarkan Faktor Risiko Lokal Terbukti',
      'Durasi Terapi Singkat (5 Hari) Lebih Direkomendasikan Jika Pasien Telah Afebrik Selama 48 Jam'
    ],
    appliedInFeatures: [
      {
        tabId: 'guidelines',
        featureName: 'Panduan Terapi Klinis',
        description: 'Algoritma pemilihan antibiotik CAP rawat jalan dan rawat inap ICU.'
      },
      {
        tabId: 'polypharmacy',
        featureName: 'Evaluasi & Polifarmasi',
        description: 'Pengendalian resistensi antimikroba (PPRA) dan evaluasi deeskalasi terapi.'
      }
    ],
    officialUrl: 'https://www.idsociety.org/practice-guideline/community-acquired-pneumonia-cap/',
    officialUrlLabel: 'ATS/IDSA CAP Guidelines Portal',
    citation: 'Metlay JP, et al. Diagnosis and Treatment of Adults with Community-acquired Pneumonia. Am J Respir Crit Care Med 2019;200(7):e45–e67 (Reaffirmed 2024).',
    badgeColor: 'bg-sky-800 text-white'
  },
  {
    id: 'lit-pphi-hepatitis-2024',
    title: 'Konsensus Nasional Penatalaksanaan Hepatitis B & Hepatitis C di Indonesia',
    institution: 'Perhimpunan Peneliti Hati Indonesia (PPHI)',
    category: 'guidelines',
    categoryLabel: 'Pedoman Klinis & PNPK',
    documentCode: 'Konsensus PPHI Hepatitis B & C 2024',
    releaseYear: '2024',
    lastUpdated: 'Desember 2024',
    evidenceLevel: 'Level 2 (PNPK & Konsensus Spesialis)',
    evidenceGrade: 'Grade A',
    summary: 'Konsensus nasional penanganan hepatitis virus di fasilitas kesehatan Indonesia: terapi kuratif Hepatitis C menggunakan Direct-Acting Antivirals (DAA) pangenotipik Sofosbuvir + Velpatasvir selama 12 minggu, terapi supresif Hepatitis B lini pertama dengan Tenofovir atau Entecavir, serta manajemen skrining interaksi obat gastroprotektor.',
    keyTopics: [
      'Protokol DAA Bebas Interferon: Sofosbuvir 400 mg + Velpatasvir 100 mg Selama 12 Minggu dengan SVR > 95%',
      'Hepatitis B Kronis: Terapi Lini Pertama Nukleosida/Nukleotida Barrier Resistensi Tinggi (Tenofovir / Entecavir)',
      'PENCEGAHAN INTERAKSI DAA: Penurunan Bioavailabilitas Velpatasvir Akibat Obat Penekan Asam Lambung (Antasida, H2RA, PPI)',
      'Pemantauan Reaktivasi Hepatitis B pada Pasien yang Menjalani Kemoterapi Imunosupresif'
    ],
    appliedInFeatures: [
      {
        tabId: 'guidelines',
        featureName: 'Panduan Terapi Klinis',
        description: 'Protokol terapi antiviral Hepatitis B dan rejimen kuratif DAA Hepatitis C.'
      },
      {
        tabId: 'interactions',
        featureName: 'Cek Interaksi Obat',
        description: 'Peringatan penurunan absorpsi Sofosbuvir/Velpatasvir akibat Omeprazole/Antasida.'
      }
    ],
    officialUrl: 'https://pphi-online.org',
    officialUrlLabel: 'Portal Publikasi Ilmiah PPHI',
    citation: 'Perhimpunan Peneliti Hati Indonesia (PPHI). Konsensus Nasional Penatalaksanaan Hepatitis B & C di Indonesia. Jakarta: PB PPHI, 2024.',
    badgeColor: 'bg-teal-800 text-white'
  },

  // =========================================================================
  // 2. KLASTER KEHAMILAN, LAKTASI & PEDIATRIK INTERNASIONAL (4 SUMBER)
  // =========================================================================
  {
    id: 'lit-briggs-pregnancy-lactation',
    title: 'Briggs Drugs in Pregnancy and Lactation: A Reference Guide to Fetal and Neonatal Risk (12th Edition)',
    institution: 'Wolters Kluwer Health & Briggs Reference Editorial Board',
    category: 'pediatric_special',
    categoryLabel: 'Pediatrik & Puyer',
    documentCode: 'Briggs Reference 12th Edition',
    releaseYear: '2023 / 2024',
    lastUpdated: 'Januari 2025',
    evidenceLevel: 'Level 1 (Meta-Analisis / RCT)',
    evidenceGrade: 'Grade A',
    summary: 'Rujukan otoritatif nomor satu di dunia untuk evaluasi risiko paparan obat terhadap fetus dan neonatus, mencakup analisis teratogenisitas trimester pertama, toksisitas organ trimester kedua/ketiga, farmakokinetik transplasental, serta penyelarasan dengan sistem FDA Pregnancy and Lactation Labeling Rule (PLLR).',
    keyTopics: [
      'Klasifikasi Risiko Fetal: Teratogen Kuat, Risiko Moderat, Aman Terbukti dalam Uji Manusia',
      'Obat-Obatan Teratogenik Absolut: Talidomid, Isotretinoin, Valproat, Warfarin, Metotreksat',
      'Peralihan Sistem FDA Klasik (A, B, C, D, X) ke Sistem Naratif PLLR (Fetal Risk Summary & Clinical Considerations)',
      'Penetapan Rasio Konsentrasi Obat Darah Tali Pusat vs Darah Ibu'
    ],
    appliedInFeatures: [
      {
        tabId: 'side-effects',
        featureName: 'Cek Efek Samping & Teratogenik',
        description: 'Penapisan risiko keamanan obat kehamilan dan peringatan embriotoksisitas.'
      },
      {
        tabId: 'guidelines',
        featureName: 'Panduan Terapi Klinis',
        description: 'Pemilihan obat aman hipertensi, diabetes, dan infeksi pada wanita hamil.'
      }
    ],
    officialUrl: 'https://shop.lww.com/Briggs-Drugs-in-Pregnancy-and-Lactation/p/9781975162375',
    officialUrlLabel: 'Wolters Kluwer Briggs Portal',
    citation: 'Briggs GG, Freeman RK, Towers CV, Forinash AB. Drugs in Pregnancy and Lactation: A Reference Guide to Fetal and Neonatal Risk (12th ed.). Philadelphia: Wolters Kluwer, 2022/2024.',
    badgeColor: 'bg-pink-700 text-white'
  },
  {
    id: 'lit-hales-medications-mothers-milk',
    title: 'Hale’s Medications & Mothers’ Milk: A Manual of Lactational Pharmacology (2023 / 2024)',
    institution: 'Springer Publishing & InfantRisk Center (Texas Tech University)',
    category: 'pediatric_special',
    categoryLabel: 'Pediatrik & Puyer',
    documentCode: 'Hale’s Manual 2023/2024 Online',
    releaseYear: '2023 / 2024',
    lastUpdated: 'November 2024',
    evidenceLevel: 'Level 1 (Meta-Analisis / RCT)',
    evidenceGrade: 'Grade A',
    summary: 'Buku panduan baku farmakologi laktasi internasional yang mengklasifikasikan obat ke dalam 5 Kategori Risiko Laktasi (L1 Paling Aman hingga L5 Kontraindikasi), menetapkan batasan Relative Infant Dose (RID < 10%), serta menganalisis waktu paruh eliminasi obat dalam air susu ibu (ASI).',
    keyTopics: [
      'Kategori Risiko Laktasi Hale: L1 (Safest), L2 (Safer), L3 (Moderately Safe), L4 (Possibly Hazardous), L5 (Hazardous / Kontraindikasi)',
      'Relative Infant Dose (RID): Persentase Dosis Ibu yang Masuk ke Bayi (RID < 10% Dianggap Aman Secara Klinis)',
      'Rasio Milk-to-Plasma (M/P Ratio) dan Pengaruh Ikatan Protein Plasma Tinggi (>90%) terhadap Penurunan Transfer ASI',
      'Waktu Pemberian Obat Terhadap Jadwal Menyusui (Segera Pasca-Menyusui untuk Meminimalkan Kadar Puncak ASI)'
    ],
    appliedInFeatures: [
      {
        tabId: 'whatsapp-pio',
        featureName: 'Kartu PIO WhatsApp',
        description: 'Panduan edukasi keselamatan obat menyusui siap kirim ke ibu nifas.'
      },
      {
        tabId: 'side-effects',
        featureName: 'Cek Efek Samping & Laktasi',
        description: 'Kategori L1-L5 Hale dan perhitungan keamanan Relative Infant Dose.'
      }
    ],
    officialUrl: 'https://www.springerpub.com/hales-medications-and-mothers-milk-2023-9780826135834.html',
    officialUrlLabel: 'InfantRisk Hale’s Portal',
    citation: 'Hale TW. Hale’s Medications & Mothers’ Milk 2023: A Manual of Lactational Pharmacology. New York: Springer Publishing Company, 2023.',
    badgeColor: 'bg-rose-600 text-white'
  },
  {
    id: 'lit-bnfc-pediatric-formulary',
    title: 'British National Formulary for Children (BNFC 2024 - 2025)',
    institution: 'British Medical Association (BMA) & Royal Pharmaceutical Society (RPS)',
    category: 'pediatric_special',
    categoryLabel: 'Pediatrik & Puyer',
    documentCode: 'BNF for Children 2024-2025',
    releaseYear: '2024 / 2025',
    lastUpdated: 'Januari 2025',
    evidenceLevel: 'Level 2 (PNPK & Konsensus Spesialis)',
    evidenceGrade: 'Grade A',
    summary: 'Formularium nasional pediatrik resmi Inggris yang menyajikan panduan praktis peresepan, dispensing, dan administrasi obat untuk neonatus, bayi, anak, dan remaja; lengkap dengan penyesuaian formulasi sediaan cair oral dan petunjuk penggunaan off-label pediatrik terverifikasi.',
    keyTopics: [
      'Dosis Pediatrik Terstratifikasi Usia Detail (Neonatus Kurang Bulan, Neonatus Cukup Bulan, 1-11 Bulan, 1-5 Tahun, 6-11 Tahun, 12-17 Tahun)',
      'Kalkulasi Dosis Sediaan Cair Oral & Larutan Rekonstitusi Anak',
      'Peringatan Toksisitas Eksipien Tertentu pada Pediatrik (Propilen Glikol, Sorbitol, Benzil Alkohol)',
      'Penyesuaian Dosis Obat Kedaruratan Resusitasi Anak (Epinefrin, Amiodaron, Atropin)'
    ],
    appliedInFeatures: [
      {
        tabId: 'pediatric',
        featureName: 'Dosis Pediatrik & Puyer',
        description: 'Validasi rentang dosis aman dan interval obat sirup anak.'
      },
      {
        tabId: 'guidelines',
        featureName: 'Panduan Terapi Klinis',
        description: 'Rujukan dosis lini pertama penyakit infeksi dan pernapasan anak.'
      }
    ],
    officialUrl: 'https://www.medicinescomplete.com/#/browse/bnfc',
    officialUrlLabel: 'BNF for Children MedicinesComplete',
    citation: 'Paediatric Formulary Committee. BNF for Children (BNFC) 2024-2025. London: BMJ Group, Pharmaceutical Press, and RCPCH Publications, 2024.',
    badgeColor: 'bg-blue-700 text-white'
  },
  {
    id: 'lit-who-malnutrition-guidelines',
    title: 'WHO Guideline on the Management of Acute Malnutrition in Infants and Children',
    institution: 'World Health Organization (WHO)',
    category: 'pediatric_special',
    categoryLabel: 'Pediatrik & Puyer',
    documentCode: 'WHO Guidelines Approved by GRC 2023',
    releaseYear: '2023 / 2024',
    lastUpdated: 'Mei 2024',
    evidenceLevel: 'Level 1 (Meta-Analisis / RCT)',
    evidenceGrade: 'Grade A',
    summary: 'Pedoman global penatalaksanaan malnutrisi akut berat (Severe Acute Malnutrition / SAM) pada anak: fase stabilisasi menggunakan formula F-75 rendah protein dan rendah natrium, fase rehabilitasi dengan formula F-100 / RUTF, pemberian antibiotik spektrum luas rutin, dan pencegahan Refeeding Syndrome.',
    keyTopics: [
      'Protokol 10 Langkah Tatalaksana Gizi Buruk Rawat Inap (Fase Stabilisasi, Transisi, dan Rehabilitasi)',
      'Pemberian Makanan Awal Formula F-75 (130 mL/kgBB/hari) untuk Menstabilkan Fungsi Seluler Tanpa Membebani Hepar/Ginjal',
      'Antibiotik Profilaksis Wajib: Amoksisilin Oral Dosis Penuh Meskipun Tanpa Tanda Infeksi Jelas',
      'Pencegahan dan Pemantauan Hipoglikemia (Dextrose 10%), Hipotermia, dan Dehidrasi Berat'
    ],
    appliedInFeatures: [
      {
        tabId: 'pediatric',
        featureName: 'Dosis Pediatrik & Puyer',
        description: 'Kalkulasi kebutuhan cairan dan nutrisi formula anak gizi buruk.'
      },
      {
        tabId: 'guidelines',
        featureName: 'Panduan Terapi Klinis',
        description: 'Protokol 10 langkah WHO untuk penanganan gizi buruk anak rawat inap.'
      }
    ],
    officialUrl: 'https://www.who.int/publications/i/item/9789240081864',
    officialUrlLabel: 'WHO Malnutrition Guidelines Portal',
    citation: 'World Health Organization. WHO guideline on the prevention and management of wasting and nutritional oedema (acute malnutrition) in infants and children. Geneva: World Health Organization, 2023.',
    badgeColor: 'bg-amber-700 text-white'
  },

  // =========================================================================
  // 3. KLASTER INJEKSI PARENTERAL, NUTRISI INTRAVENA (TPN) & STABILITAS (4 SUMBER)
  // =========================================================================
  {
    id: 'lit-aspen-parenteral-nutrition',
    title: 'ASPEN Clinical Guidelines: Safe Practices for Parenteral Nutrition (TPN)',
    institution: 'American Society for Parenteral and Enteral Nutrition (ASPEN)',
    category: 'iv_sterile',
    categoryLabel: 'Injeksi & IV Steril',
    documentCode: 'JPEN Special Report Guidelines',
    releaseYear: '2023 / 2024',
    lastUpdated: 'Desember 2024',
    evidenceLevel: 'Level 1 (Meta-Analisis / RCT)',
    evidenceGrade: 'Grade A',
    summary: 'Standar keselamatan tertinggi dalam peresepan, pengacikan, dan pemantauan Nutrisi Parenteral Total (TPN/PN): pembatasan osmolaritas perifer (< 900 mOsm/L), kurva kompatibilitas kalsium-fosfat untuk mencegah presipitasi mikrokristal CaHPO4 di paru, stabilitas emulsi lipid 3-in-1, dan laju infus glukosa.',
    keyTopics: [
      'Batas Ambang Osmolaritas Maksimal Jalur Vena Perifer: 900 mOsm/L (Di Atas 900 Wajib Menggunakan Central Venous Catheter / CVC)',
      'Pencegahan Presipitasi Kalsium Glukonat + Kalium/Natrium Fosfat (Kurva Kompatibilitas Suhu & Konsentrasi Asam Amino)',
      'Glucose Infusion Rate (GIR): Target Maksimal 4 - 5 mg/kg/menit pada Dewasa untuk Mencegah Steatosis Hepatis',
      'Filter Infus In-Line: Filter 1.2 Mikron untuk Campuran Emulsi Lipid 3-in-1 dan Filter 0.22 Mikron untuk Larutan 2-in-1 Bebas Lipid'
    ],
    appliedInFeatures: [
      {
        tabId: 'iv-compatibility',
        featureName: 'Kompatibilitas Injeksi IV',
        description: 'Pemeriksaan kompatibilitas elektrolit pekat dan presipitasi kalsium fosfat TPN.'
      },
      {
        tabId: 'sop',
        featureName: 'SOP Pelayanan Farmasi',
        description: 'SOP Penyiapan Nutrisi Parenteral Rumah Sakit dan Pemantauan Kateter Sentral.'
      }
    ],
    officialUrl: 'https://www.nutritioncare.org/Guidelines_and_Clinical_Resources/Clinical_Guidelines/',
    officialUrlLabel: 'ASPEN Clinical Guidelines Portal',
    citation: 'Ayers P, et al. A.S.P.E.N. Parenteral Nutrition Safety Consensus Recommendations. JPEN J Parenter Enteral Nutr. 2014;38(3):296-333 (Reaffirmed 2024).',
    badgeColor: 'bg-cyan-800 text-white'
  },
  {
    id: 'lit-ashp-compounding-sterile',
    title: 'ASHP Guidelines on Compounding Sterile Preparations & Cleanroom Practices',
    institution: 'American Society of Health-System Pharmacists (ASHP)',
    category: 'iv_sterile',
    categoryLabel: 'Injeksi & IV Steril',
    documentCode: 'ASHP Sterile Compounding Guidelines',
    releaseYear: '2023 / 2024',
    lastUpdated: 'Oktober 2024',
    evidenceLevel: 'Level 2 (PNPK & Konsensus Spesialis)',
    evidenceGrade: 'Grade A',
    summary: 'Pedoman praktik farmasi rumah sakit komprehensif untuk pengacikan sediaan steril (IV Admixture): klasifikasi arsitektur ruangan bersih (Cleanroom ISO Class 5 LAF, ISO Class 7 Buffer Room, ISO Class 8 Anteroom), validasi berkala operator dengan Media-Fill Testing, higiene tangan, dan pembersihan permukaan.',
    keyTopics: [
      'Alur Personil dan Material Terpisah untuk Mencegah Kontaminasi Silang Mikroba',
      'Uji Validasi Keterampilan Aseptis Operator (Media-Fill Test dengan Tryptic Soy Broth Tiap 6 Bulan)',
      'Prosedur Disinfeksi Sarung Tangan Steril dengan Isopropil Alkohol 70% Steril (IPA 70%) Secara Berkala',
      'Pemeliharaan Tekanan Udara Positif (Minimal 0.02 - 0.05 Inci Kolom Air) pada Buffer Area Non-Hazardous'
    ],
    appliedInFeatures: [
      {
        tabId: 'sop',
        featureName: 'SOP Pelayanan Farmasi',
        description: 'SOP Penyiapan Aseptis, Higiene Tangan Bersih, dan Pemantauan Lingkungan Ruang Steril.'
      },
      {
        tabId: 'iv-compatibility',
        featureName: 'Kompatibilitas Injeksi IV',
        description: 'Penetapan batas Beyond-Use Date (BUD) sediaan injeksi steril rekonstitusi.'
      }
    ],
    officialUrl: 'https://www.ashp.org/pharmacy-practice/policy-positions-and-guidelines/browse-by-document-type/guidelines',
    officialUrlLabel: 'ASHP Sterile Guidelines Portal',
    citation: 'American Society of Health-System Pharmacists. ASHP Guidelines on Compounding Sterile Preparations. Am J Health-Syst Pharm. 2014;71:145-166 (Updated 2024).',
    badgeColor: 'bg-teal-800 text-white'
  },
  {
    id: 'lit-bp-ph-eur-parenterals',
    title: 'British Pharmacopoeia (BP 2024) & European Pharmacopoeia (Ph. Eur.) Standards on Parenterals',
    institution: 'Medicines and Healthcare products Regulatory Agency (MHRA) & EDQM',
    category: 'iv_sterile',
    categoryLabel: 'Injeksi & IV Steril',
    documentCode: 'BP 2024 Monograph / Ph. Eur. 11th Ed',
    releaseYear: '2024',
    lastUpdated: 'Januari 2025',
    evidenceLevel: 'Level 3 (Monograf Baku & Regulasi Pemerintah)',
    evidenceGrade: 'Grade A',
    summary: 'Standar farmakope resmi internasional untuk persyaratan mutu sediaan injeksi dan infus: batas endotoksin bakteri (metode LAL test), pengujian sterilitas membran filtrasi, batas partikel subvisibel (metode hamburan cahaya / Light Obscuration), dan ketentuan volume berlebih (excess volume).',
    keyTopics: [
      'Batas Endotoksin Bakteri Maksimal Injeksi Intravena (Formula K = 5.0 EU/kg/jam Dibagi Dosis Maksimal)',
      'Batas Partikel Subvisibel Infus Volume Besar (>= 100 mL): Maksimum 25 Partikel/mL (>= 10 um) dan 3 Partikel/mL (>= 25 um)',
      'Uji Sterilitas Kompendial: Inkubasi Media Tioglikolat Cair (30-35°C) dan Soybean-Casein Digest (20-25°C) Selama 14 Hari',
      'Penetapan Volume Berlebih Rekomendasi pada Ampul & Vial untuk Menjamin Pengambilan Dosis Nominal yang Tepat'
    ],
    appliedInFeatures: [
      {
        tabId: 'iv-compatibility',
        featureName: 'Kompatibilitas Injeksi IV',
        description: 'Standar kemurnian partikulat dan ambang batas endotoksin sediaan infus.'
      },
      {
        tabId: 'competency',
        featureName: 'Pusat Belajar Uji Kompetensi',
        description: 'Materi uji kompendial sediaan steril farmasi Domain Industri dan RS UKMPPAI.'
      }
    ],
    officialUrl: 'https://www.pharmacopoeia.com',
    officialUrlLabel: 'British Pharmacopoeia Portal',
    citation: 'British Pharmacopoeia Commission. British Pharmacopoeia 2024. London: The Stationery Office on behalf of the MHRA, 2024.',
    badgeColor: 'bg-slate-800 text-white'
  },
  {
    id: 'lit-cdc-intravascular-infections',
    title: 'CDC Guidelines for the Prevention of Intravascular Catheter-Related Infections',
    institution: 'Centers for Disease Control and Prevention (CDC) & HICPAC',
    category: 'iv_sterile',
    categoryLabel: 'Injeksi & IV Steril',
    documentCode: 'CDC Healthcare Infection Control Guidelines',
    releaseYear: '2023 / 2024',
    lastUpdated: 'Oktober 2024',
    evidenceLevel: 'Level 1 (Meta-Analisis / RCT)',
    evidenceGrade: 'Grade A',
    summary: 'Pedoman keselamatan pengendalian infeksi aliran darah terkait kateter vena (Catheter-Related Bloodstream Infection / CRBSI): interval penggantian selang infus kontinu (tiap 96 jam) vs infus emulsi lipid atau darah (tiap 24 jam), disinfeksi port suntik (scrub the hub minimal 15 detik), dan penggunaan klorheksidin.',
    keyTopics: [
      'Interval Penggantian Administration Sets: Selang Infus Kontinu Diganti Tiap 96 Jam (4 Hari)',
      'Penggantian Segera Dalam 24 Jam untuk Selang Infus yang Mengalirkan Emulsi Lipid, TPN 3-in-1, atau Produk Darah',
      'Teknik Aseptis Port Akses IV: Disinfeksi "Scrub the Hub" dengan Alkohol 70% atau Klorheksidin Alkohol Selama Minimal 15 Detik',
      'Pemilihan Kateter Sentral Perifer (PICC Line) vs Jalur Vena Sentral Internal Jugular'
    ],
    appliedInFeatures: [
      {
        tabId: 'iv-compatibility',
        featureName: 'Kompatibilitas Injeksi IV',
        description: 'Rekomendasi batas waktu pemakaian selang infus dan port Y-Site kateter vena.'
      },
      {
        tabId: 'sop',
        featureName: 'SOP Pelayanan Farmasi',
        description: 'SOP Pencegahan Flebitis dan Penggantian Set Infus Ruang Rawat Inap.'
      }
    ],
    officialUrl: 'https://www.cdc.gov/infection-control/hcp/clinical-guidelines/bsi.html',
    officialUrlLabel: 'CDC CRBSI Guidelines Portal',
    citation: 'O’Grady NP, et al. Guidelines for the Prevention of Intravascular Catheter-Related Infections. Clin Infect Dis 2011;52(9):e162–e193 (Updated 2024).',
    badgeColor: 'bg-emerald-900 text-white'
  },

  // =========================================================================
  // 4. KLASTER INTERAKSI OBAT, QTC ARITMIA & TOKSIKOLOGI KEDARURATAN (4 SUMBER)
  // =========================================================================
  {
    id: 'lit-martindale-drug-reference',
    title: 'Martindale: The Complete Drug Reference (40th Edition)',
    institution: 'Pharmaceutical Press & Royal Pharmaceutical Society (RPS)',
    category: 'interactions',
    categoryLabel: 'Interaksi & Keamanan',
    documentCode: 'Martindale 40th Edition / Online',
    releaseYear: '2023 / 2024',
    lastUpdated: 'Januari 2025',
    evidenceLevel: 'Level 1 (Meta-Analisis / RCT)',
    evidenceGrade: 'Grade A',
    summary: 'Kompendium farmasi dunia paling komprehensif dan ensiklopedis mengenai sifat fisikokimia zat aktif, sinonim internasional, sifat kelarutan, kestabilan pH, dosis terapi resmi lintas negara, rute pemberian khusus, serta monograf obat orphan dan sediaan tidak beredar luas.',
    keyTopics: [
      'Monograf Lengkap Lebih dari 6.000 Zat Aktif dan 180.000 Sediaan Obat Terdaftar di 43 Negara',
      'Konstanta Fisikokimia: Titik Leleh, Koefisien Partisi (Log P), Derajat Disosiasi (pKa), dan Profil Kelarutan Polar/Nonpolar',
      'Monograf Senyawa Herbal, Radioterapetik, Vaksin, dan Gas Medis Terstandarisasi',
      'Data Efek Samping Unik dan Interaksi Obat Global yang Tervalidasi Uji Klinis Terbuka'
    ],
    appliedInFeatures: [
      {
        tabId: 'interactions',
        featureName: 'Cek Interaksi Obat',
        description: 'Referensi komprehensif profil fisikokimia dan mekanisme interaksi zat aktif.'
      },
      {
        tabId: 'competency',
        featureName: 'Pusat Belajar Uji Kompetensi',
        description: 'Rujukan identifikasi zat aktif dan sinonim obat internasional soal UKMPPAI.'
      }
    ],
    officialUrl: 'https://www.medicinescomplete.com/#/browse/martindale',
    officialUrlLabel: 'MedicinesComplete Martindale Portal',
    citation: 'Brayfield A (Ed.). Martindale: The Complete Drug Reference (40th Edition). London: Pharmaceutical Press, 2023.',
    badgeColor: 'bg-indigo-800 text-white'
  },
  {
    id: 'lit-goldfrank-toxicologic-emergencies',
    title: 'Goldfrank’s Toxicologic Emergencies (12th Edition)',
    institution: 'McGraw Hill Medical & American College of Medical Toxicology (ACMT)',
    category: 'interactions',
    categoryLabel: 'Interaksi & Keamanan',
    documentCode: 'Goldfrank 12th Edition',
    releaseYear: '2023 / 2024',
    lastUpdated: 'Januari 2025',
    evidenceLevel: 'Level 1 (Meta-Analisis / RCT)',
    evidenceGrade: 'Grade A',
    summary: 'Standar emas dunia kedokteran gawat darurat dan farmasi klinik dalam tata laksana intoksikasi, keracunan akut, dan overdosis obat: nomogram Rumack-Matthew untuk Parasetamol, protokol pemberian antidotum spesifik (N-Acetylcysteine, Naloxone, Flumazenil, Atropine, Pralidoxime, Digoxin-Fab), serta dekontaminasi lambung.',
    keyTopics: [
      'Intoksikasi Parasetamol Akut: Aplikasi Rumack-Matthew Nomogram dan Rejimen N-Asetilsistein (NAC) IV 21 Jam vs Oral 72 Jam',
      'Overdosis Opioid & Depresi Napas Fatal: Titrasi Nalokson Intravena/Intranasal Berulang',
      'Toksisitas Insektisida Organofosfat: Titrasi Atropinisasi Penuh Dilanjutkan Reaktivator Asetilkolinesterase (Pralidoksim)',
      'Dekontaminasi Saluran Cerna: Indikasi Ketat Arang Aktif Dosis Tunggal (1 g/kgBB) dalam 1-2 Jam Pertama Pasca-Ingesti'
    ],
    appliedInFeatures: [
      {
        tabId: 'side-effects',
        featureName: 'Cek Efek Samping & Toksikologi',
        description: 'Protokol identifikasi toksisitas obat mayor dan pemilihan antidotum spesifik.'
      },
      {
        tabId: 'sop',
        featureName: 'SOP Pelayanan Farmasi',
        description: 'SOP Penanganan Pasien Intoksikasi Obat dan Penyimpanan Obat Antidotum RS.'
      }
    ],
    officialUrl: 'https://accesspharmacy.mhmedical.com/book.aspx?bookid=3254',
    officialUrlLabel: 'AccessPharmacy Goldfrank Portal',
    citation: 'Nelson LS, Howland MA, Lewin NA, Smith SW, Goldfrank LR, Hoffman RS. Goldfrank’s Toxicologic Emergencies (12th ed.). New York: McGraw Hill, 2023.',
    badgeColor: 'bg-red-800 text-white'
  },
  {
    id: 'lit-goodman-gilman-pharmacology',
    title: 'Goodman & Gilman’s: The Pharmacological Basis of Therapeutics (14th Edition)',
    institution: 'McGraw Hill Medical',
    category: 'interactions',
    categoryLabel: 'Interaksi & Keamanan',
    documentCode: 'Goodman & Gilman 14th Edition',
    releaseYear: '2023 / 2024',
    lastUpdated: 'Desember 2024',
    evidenceLevel: 'Level 1 (Meta-Analisis / RCT)',
    evidenceGrade: 'Grade A',
    summary: 'Kitab suci farmakologi dunia yang menjelaskan mekanisme aksi molekuler obat pada tingkat reseptor biologis, transduksi sinyal intraseluler, hubungan struktur-aktivitas (SAR), farmakokinetik absorpsi-distribusi-metabolisme-ekskresi (ADME), serta dasar ilmiah pengembangan target obat modern.',
    keyTopics: [
      'Teori Ikatan Reseptor: Agonis Penuh, Agonis Parsial, Antagonis Kompetitif, dan Modulator Alosterik Positif/Negatif',
      'Biotransformasi Obat: Reaksi Fase 1 (Oksidasi CYP450) dan Reaksi Fase 2 (Glukuronidasi UGT, Sulfasi, Asetilasi)',
      'Mekanisme Kerja Molekuler Terapi Bertarget: Antibodi Monoklonal (-mab), Inhibitor Tirosin Kinase (-nib), dan Oligonukleotida Antisense',
      'Jalur Ekskresi Biliar, Sirkulasi Enterohepatik, dan Klirens Ginjal Terpadu'
    ],
    appliedInFeatures: [
      {
        tabId: 'interactions',
        featureName: 'Cek Interaksi Obat',
        description: 'Dasar mekanisme farmakodinamika dan farmakokinetika pasangan interaksi molekuler.'
      },
      {
        tabId: 'competency',
        featureName: 'Pusat Belajar Uji Kompetensi',
        description: 'Pemahaman konsep dasar farmakologi inti untuk persiapan ujian apoteker UKMPPAI.'
      }
    ],
    officialUrl: 'https://accesspharmacy.mhmedical.com/book.aspx?bookid=3191',
    officialUrlLabel: 'AccessPharmacy Goodman & Gilman',
    citation: 'Brunton LL, Knollmann BC, eds. Goodman & Gilman’s: The Pharmacological Basis of Therapeutics (14th ed.). New York: McGraw Hill, 2023.',
    badgeColor: 'bg-purple-900 text-white'
  },
  {
    id: 'lit-crediblemeds-qtdrugs',
    title: 'CredibleMeds® QTDrugs Database & Clinical Stratification',
    institution: 'AZCERT (Arizona Center for Education and Research on Therapeutics)',
    category: 'interactions',
    categoryLabel: 'Interaksi & Keamanan',
    documentCode: 'CredibleMeds QTDrugs Clinical Platform',
    releaseYear: '2024 / 2025',
    lastUpdated: 'Januari 2025',
    evidenceLevel: 'Level 1 (Meta-Analisis / RCT)',
    evidenceGrade: 'Grade A',
    summary: 'Pangkalan data ilmiah internasional rujukan FDA dan EMA untuk pemetaan obat-obatan pemicu pemanjangan interval QTc pada EKG dan aritmia mematikan Torsades de Pointes (TdP), dengan stratifikasi resmi 4 kategori risiko: Known Risk, Possible Risk, Conditional Risk, dan Congenital Long QT Avoidance.',
    keyTopics: [
      'Kategori 1: Known Risk of TdP (Amiodarone, Sotalol, Haloperidol IV, Erythromycin, Moxifloxacin, Methadone)',
      'Kategori 2: Possible Risk of TdP (Ciprofloxacin, Ondansetron, Quetiapine, Escitalopram dosis tinggi)',
      'Kategori 3: Conditional Risk of TdP (Obat yang Memicu Aritmia Hanya Saat Ada Hipokalemia, Hipomagnesemia, atau Bradikardia)',
      'Peringatan Sinergisme Fatal: Kombinasi Lebih dari Satu Obat Pemanjang QTc atau Penghambat Klirens CYP3A4'
    ],
    appliedInFeatures: [
      {
        tabId: 'interactions',
        featureName: 'Cek Interaksi Obat',
        description: 'Deteksi otomatis risiko pemanjangan interval QTc dan aritmia Torsades de Pointes.'
      },
      {
        tabId: 'polypharmacy',
        featureName: 'Evaluasi & Polifarmasi',
        description: 'Skrining beban kardiotoksisitas aritmia pada peresepan kombinasi polifarmasi.'
      }
    ],
    officialUrl: 'https://crediblemeds.org',
    officialUrlLabel: 'Portal Resmi CredibleMeds QTDrugs',
    citation: 'Woosley RL, Romero K, Heise CW. CredibleMeds.org: QTDrugs List. AZCERT Inc., 2025.',
    badgeColor: 'bg-rose-900 text-white'
  },

  // =========================================================================
  // 5. KLASTER FARMAKOPE, REGULASI MUTU & RANTAI DINGIN CDOB (4 SUMBER)
  // =========================================================================
  {
    id: 'lit-farmakope-indonesia-vi-sup2',
    title: 'Farmakope Indonesia Edisi VI Suplemen II (2023 / 2024)',
    institution: 'Kementerian Kesehatan Republik Indonesia & Komite Farmakope',
    category: 'formulary_bpom',
    categoryLabel: 'Formularium & BPOM',
    documentCode: 'Kepmenkes RI No. HK.01.07/MENKES/1186/2023',
    releaseYear: '2023 / 2024',
    lastUpdated: 'Januari 2025',
    evidenceLevel: 'Level 3 (Monograf Baku & Regulasi Pemerintah)',
    evidenceGrade: 'Grade A',
    summary: 'Suplemen resmi terbaru Farmakope Indonesia Edisi VI yang memuat monograf bahan baku dan sediaan baru, persyaratan uji disolusi terbanding (UDT / kriteria faktor kemiripan f2 >= 50), serta batas ketat cemaran pengotor mutagenik nitrosamin (NDMA/NDEA) pada sediaan obat komersial di Indonesia.',
    keyTopics: [
      'Monograf Baku Sediaan Baru dan Pembaruan Uji Disolusi Terbanding (UDT)',
      'Kriteria Faktor Kemiripan Disolusi f2 (50 - 100 Memastikan Kesetaraan Profil Pelepasan Obat In Vitro)',
      'Batas Ambang Cemaran Impuritas Nitrosamin Sesuai Batasan Paparan Harian Asupan yang Diperbolehkan (AI)',
      'Persyaratan Uji Keseragaman Kandungan (Content Uniformity) dan Keragaman Bobot (Weight Variation)'
    ],
    appliedInFeatures: [
      {
        tabId: 'competency',
        featureName: 'Pusat Belajar Uji Kompetensi',
        description: 'Konsep uji kompendial UDT, f2, dan mutu sediaan padat ujian UKMPPAI.'
      },
      {
        tabId: 'regulations',
        featureName: 'Regulasi Farmasi',
        description: 'Standar baku mutu sediaan obat resmi nasional Kementerian Kesehatan RI.'
      }
    ],
    officialUrl: 'https://farmakope.kemkes.go.id',
    officialUrlLabel: 'Portal Resmi Komite Farmakope Indonesia',
    citation: 'Kementerian Kesehatan RI. Farmakope Indonesia Edisi VI Suplemen II. Jakarta: Direktorat Jenderal Kefarmasian dan Alat Kesehatan, 2023.',
    badgeColor: 'bg-slate-700 text-white'
  },
  {
    id: 'lit-usp-nf-2024',
    title: 'United States Pharmacopeia – National Formulary (USP-NF 2024)',
    institution: 'United States Pharmacopeial Convention (USP)',
    category: 'formulary_bpom',
    categoryLabel: 'Formularium & BPOM',
    documentCode: 'USP-NF 2024 Issue 3 Standards',
    releaseYear: '2024',
    lastUpdated: 'Desember 2024',
    evidenceLevel: 'Level 3 (Monograf Baku & Regulasi Pemerintah)',
    evidenceGrade: 'Grade A',
    summary: 'Buku kompendial standar baku mutu obat, eksipien, dan sediaan hayati paling diakui secara global oleh lebih dari 140 negara, memuat kriteria pengujian identifikasi kromatografi, batas cemaran kotoran kimia, penetapan kadar spektrofotometri/HPLC, dan uji disolusi sediaan pelepasan termodifikasi.',
    keyTopics: [
      'Monograf Kompendial Resmi Zat Aktif (API), Eksipien Farmasetik, dan Suplemen Makanan',
      'Uji Disolusi Pelepasan Termodifikasi (Delayed Release Enteric-Coated & Extended Release)',
      'Pengujian Batas Cemaran Mikroba Sediaan Non-Steril (USP <61> & <62>: Bebas Salmonella, E. coli, S. aureus)',
      'Kriteria Wadah Kemasan Primer (USP <659>: Wadah Tertutup Rapat, Kedap Udara, dan Tahan Cahaya)'
    ],
    appliedInFeatures: [
      {
        tabId: 'competency',
        featureName: 'Pusat Belajar Uji Kompetensi',
        description: 'Standar mutu disolusi dan pengujian kompendial farmasetika UKMPPAI.'
      }
    ],
    officialUrl: 'https://www.uspnf.com',
    officialUrlLabel: 'USP-NF Online Portal',
    citation: 'United States Pharmacopeial Convention. United States Pharmacopeia - National Formulary (USP-NF 2024). Rockville, MD: USP Convention, 2024.',
    badgeColor: 'bg-cyan-900 text-white'
  },
  {
    id: 'lit-cpob-bpom-ri-2024',
    title: 'Pedoman Teknis Penerapan Cara Pembuatan Obat yang Baik (CPOB) Terkini',
    institution: 'Badan Pengawas Obat dan Makanan (BPOM) Republik Indonesia',
    category: 'regulations',
    categoryLabel: 'Regulasi & SOP',
    documentCode: 'Peraturan BPOM No. 34 Tahun 2018 & Petunjuk Operasional CPOB',
    releaseYear: '2023 / 2024',
    lastUpdated: 'Januari 2025',
    evidenceLevel: 'Level 3 (Monograf Baku & Regulasi Pemerintah)',
    evidenceGrade: 'Grade A',
    summary: 'Pedoman regulasi wajib untuk seluruh industri farmasi di Indonesia guna memastikan sediaan obat diproduksi secara konsisten memenuhi standar mutu izin edar: manajemen mutu farmasi (PQS), sistem tata udara (HVAC), kualifikasi instrumen (DQ, IQ, OQ, PQ), pengujian stabilitas zona iklim IVB (30°C / 75% RH), dan pembersihan tervalidasi.',
    keyTopics: [
      'Kualifikasi dan Validasi: Desain (DQ), Instalasi (IQ), Operasional (OQ), dan Kinerja (PQ)',
      'Pengujian Stabilitas Sediaan Jadi Zona IVB Indonesia: Suhu 30°C ± 2°C dan Kelembaban Relatif (RH) 75% ± 5%',
      'Sistem Tata Udara (HVAC) dan Perbedaan Tekanan Udara Ruang Bersih (Kelas A, B, C, D, E)',
      'Manajemen Risiko Mutu (Quality Risk Management / QRM) Berdasarkan Prinsip ICH Q9'
    ],
    appliedInFeatures: [
      {
        tabId: 'regulations',
        featureName: 'Regulasi Farmasi',
        description: 'Pedoman hukum CPOB dan kepatuhan industri farmasi nasional BPOM RI.'
      },
      {
        tabId: 'competency',
        featureName: 'Pusat Belajar Uji Kompetensi',
        description: 'Rangkuman materi CPOB, HVAC, dan validasi Domain Industri UKMPPAI.'
      }
    ],
    officialUrl: 'https://jdih.pom.go.id',
    officialUrlLabel: 'JDIH BPOM RI - Regulasi CPOB',
    citation: 'Badan Pengawas Obat dan Makanan RI. Petunjuk Operasional Penerapan Pedoman Cara Pembuatan Obat yang Baik. Jakarta: BPOM RI.',
    badgeColor: 'bg-amber-800 text-white'
  },
  {
    id: 'lit-cdob-bpom-cold-chain',
    title: 'Pedoman Teknis Cara Distribusi Obat yang Baik (CDOB) - Manajemen Produk Rantai Dingin (Cold Chain)',
    institution: 'Badan Pengawas Obat dan Makanan (BPOM) Republik Indonesia',
    category: 'regulations',
    categoryLabel: 'Regulasi & SOP',
    documentCode: 'Peraturan BPOM No. 6 Tahun 2020 & Petunjuk Teknis Cold Chain',
    releaseYear: '2023 / 2024',
    lastUpdated: 'Januari 2025',
    evidenceLevel: 'Level 3 (Monograf Baku & Regulasi Pemerintah)',
    evidenceGrade: 'Grade A',
    summary: 'Standar regulasi wajib tata kelola penyimpanan dan pengiriman obat termolabil (vaksin, insulin, serum, albumin, dan produk biologi) di PBF, instalasi farmasi rumah sakit, dan apotek: pemeliharaan rentang suhu 2°C – 8°C, kalibrasi sensor berkala, validasi pengemasan cool box, dan prosedur darurat insiden deviasi suhu.',
    keyTopics: [
      'Rentang Suhu Penyimpanan Dingin Baku: Chiller / Cold Room (2°C hingga 8°C) dan Freezer Beku (-20°C hingga -10°C)',
      'Pemantauan Suhu Kontinu Otomatis Menggunakan Datalogger Tervalidasi dengan Alarm Batas Atas dan Bawah',
      'Protokol Penanganan Deviasi Suhu (Temperature Excursion) dan Uji Paparan Panas/Dingin (Shake Test Vaksin)',
      'Kualifikasi Kotak Pengiriman (Cool Box / Styrofoam) Menggunakan Ice Pack / Cool Pack dengan Validasi Waktu Transit'
    ],
    appliedInFeatures: [
      {
        tabId: 'regulations',
        featureName: 'Regulasi Farmasi',
        description: 'Pedoman resmi CDOB rantai dingin untuk distribusi PBF dan apotek.'
      },
      {
        tabId: 'sop',
        featureName: 'SOP Pelayanan Farmasi',
        description: 'SOP Penyimpanan Obat Rantai Dingin (Cold Chain 2-8°C) dan Penanganan Listrik Padam.'
      }
    ],
    officialUrl: 'https://jdih.pom.go.id',
    officialUrlLabel: 'JDIH BPOM RI - Regulasi CDOB',
    citation: 'Badan Pengawas Obat dan Makanan RI. Pedoman Teknis Cara Distribusi Obat yang Baik (CDOB). Jakarta: BPOM RI, 2020.',
    badgeColor: 'bg-blue-900 text-white'
  },

  // =========================================================================
  // 6. KLASTER FARMAKOKINETIKA KLINIK, TDM & DIALISIS KRITIS (3 SUMBER)
  // =========================================================================
  {
    id: 'lit-rowland-tozer-pharmacokinetics',
    title: 'Rowland and Tozer’s Clinical Pharmacokinetics and Pharmacodynamics (5th Edition)',
    institution: 'Wolters Kluwer Health',
    category: 'calculators',
    categoryLabel: 'Kalkulator Farmakoterapi',
    documentCode: 'Rowland & Tozer 5th Edition',
    releaseYear: '2023 / 2024',
    lastUpdated: 'Januari 2025',
    evidenceLevel: 'Level 1 (Meta-Analisis / RCT)',
    evidenceGrade: 'Grade A',
    summary: 'Rujukan definitif farmakokinetika klinis kuantitatif dalam praktik pelayanan farmasi: konsep klirens organik dan sistemik, volume distribusi semu (Vd), kinetika eliminasi orde pertama vs orde nol (Michaelis-Menten Phenytoin), waktu paruh eliminasi (t1/2), dan kalkulasi dosis muatan (*loading dose*) untuk mencapai konsentrasi tunak (*steady state*).',
    keyTopics: [
      'Kalkulasi Dosis Muatan (Loading Dose = Vd × Target Konsentrasi Plasma) untuk Mencapai Target Efek Cepat',
      'Kalkulasi Dosis Pemeliharaan (Maintenance Dose = Total Clearance × Target Css)',
      'Waktu Mencapai Kadar Tunak (Steady State Terpenuhi Setelah 4 Hingga 5 Kali Waktu Paruh t1/2)',
      'Kinetika Non-Linearitas Michaelis-Menten: Peningkatan Dosis Sedikit Menimbulkan Lonjakan Konsentrasi Drastis pada Fenitoin'
    ],
    appliedInFeatures: [
      {
        tabId: 'renal-adjuster',
        featureName: 'Kalkulator Medis & Dosis',
        description: 'Dasar formula perhitungan Loading Dose, Klirens, dan Waktu Paruh Eliminasi.'
      },
      {
        tabId: 'competency',
        featureName: 'Pusat Belajar Uji Kompetensi',
        description: 'Rangkuman rumus farmakokinetika eliminasi orde 1 dan 0 untuk soal UKMPPAI.'
      }
    ],
    officialUrl: 'https://shop.lww.com/Rowland-and-Tozer-s-Clinical-Pharmacokinetics-and-Pharmacodynamics--Concepts-and-Applications/p/9781496385048',
    officialUrlLabel: 'Rowland & Tozer Pharmacokinetics Portal',
    citation: 'Derendorf H, Schmidt S. Rowland and Tozer’s Clinical Pharmacokinetics and Pharmacodynamics: Concepts and Applications (5th ed.). Philadelphia: Wolters Kluwer, 2020/2023.',
    badgeColor: 'bg-violet-900 text-white'
  },
  {
    id: 'lit-sanford-crrt-dosing',
    title: 'The Sanford Guide: Antimicrobial Dosing in Continuous Renal Replacement Therapy (CRRT)',
    institution: 'Antimicrobial Therapy Inc. & Sanford Guide ICU Expert Panel',
    category: 'calculators',
    categoryLabel: 'Kalkulator Farmakoterapi',
    documentCode: 'Sanford Guide CRRT Dosing Table 2024',
    releaseYear: '2024 / 2025',
    lastUpdated: 'Januari 2025',
    evidenceLevel: 'Level 1 (Meta-Analisis / RCT)',
    evidenceGrade: 'Grade A',
    summary: 'Pedoman presisi penyesuaian dosis antimikroba pada pasien kritis di Intensive Care Unit (ICU) yang menjalani dialisis kontinu (CVVH, CVVHD, CVVHDF): pengaruh klirens filter membran dialisis berbasis Sieving Coefficient (S), laju aliran efluen ultrafiltrasi (20-25 mL/kg/jam), dan risiko underdosing antibiotik hidrofilik.',
    keyTopics: [
      'Pencegahan Underdosing Antibiotik Hidrofilik (Meropenem, Piperasilin-Tazobaktam, Vankomisin, Kolistin) pada Pasien Syok Septik ICU',
      'Penetapan Dosis Berdasarkan Laju Aliran Efluen Total (Effluent Flow Rate mL/jam) pada Modalitas CVVHDF',
      'Dosis Muatan Penuh (Full Loading Dose) Selalu Diberikan pada Inisiasi Terapi Tanpa Menghiraukan Fungsi Ginjal Pasien',
      'Klirens Obat Berdasarkan Koefisien Pengayakan (Sieving Coefficient S) dan Fraksi Bebas Obat Tanpa Ikatan Protein (fu)'
    ],
    appliedInFeatures: [
      {
        tabId: 'renal-adjuster',
        featureName: 'Kalkulator Medis & Dosis',
        description: 'Tabel penyesuaian dosis antibiotik kritis pada hemodialisis kontinu CRRT.'
      },
      {
        tabId: 'guidelines',
        featureName: 'Panduan Terapi Klinis',
        description: 'Protokol penanganan sepsis dan antibiotik empiris ruang perawatan intensif ICU.'
      }
    ],
    officialUrl: 'https://www.sanfordguide.com',
    officialUrlLabel: 'Sanford Guide CRRT Portal',
    citation: 'Gilbert DN, et al. The Sanford Guide: Dosing in Renal Impairment and Continuous Renal Replacement Therapy (CRRT). Antimicrobial Therapy Inc., 2024.',
    badgeColor: 'bg-emerald-900 text-white'
  },
  {
    id: 'lit-ashp-tdm-guidelines',
    title: 'ASHP/IDSA/SIDP Consensus Guidelines on Therapeutic Monitoring of Vancomycin & Aminoglycosides',
    institution: 'American Society of Health-System Pharmacists (ASHP), IDSA, & SIDP',
    category: 'calculators',
    categoryLabel: 'Kalkulator Farmakoterapi',
    documentCode: 'AJHP Consensus Guidelines 2020/2024',
    releaseYear: '2023 / 2024',
    lastUpdated: 'November 2024',
    evidenceLevel: 'Level 1 (Meta-Analisis / RCT)',
    evidenceGrade: 'Grade A',
    summary: 'Konsensus baku pemantauan kadar obat terapeutik (Therapeutic Drug Monitoring / TDM) untuk meminimalkan nefrotoksisitas dan memaksimalkan keberhasilan klinis: pergeseran resmi dari target palung (trough) konvensional ke target Area Under the Curve terhadap MIC (AUC24/MIC 400 - 600 mg·h/L) untuk Vankomisin berbasis estimasi software Bayesian.',
    keyTopics: [
      'Target Efikasi Vankomisin Baru: Rasio AUC24/MIC 400 – 600 mg·h/L (Dengan Asumsi Nilai MIC Broth Microdilution = 1 mg/L)',
      'Penghentian Penggunaan Target Trough Tinggi (15-20 mg/L) Akibat Terbukti Meningkatkan Risiko Kerusakan Tubulus Ginjal Akut (AKI)',
      'Pendekatan Pemantauan Kadar Dua Titik (Peak & Trough) atau Software Bayesian Dosing',
      'Extended-Interval Dosing Aminoglikosida (Gentamisin 5-7 mg/kg Sekali Sehari): Target Kadar Puncak Tinggi dan Periode Bebas Obat untuk Mencegah Toksisitas'
    ],
    appliedInFeatures: [
      {
        tabId: 'renal-adjuster',
        featureName: 'Kalkulator Medis & Dosis',
        description: 'Panduan target terapeutik TDM Vankomisin AUC24/MIC dan Aminoglikosida.'
      },
      {
        tabId: 'interactions',
        featureName: 'Cek Interaksi Obat',
        description: 'Pencegahan nefrotoksisitas sinergis Vankomisin + Piperasilin-Tazobaktam atau NSAID.'
      }
    ],
    officialUrl: 'https://academic.oup.com/ajhp/article/77/11/835/5810200',
    officialUrlLabel: 'ASHP Vancomycin TDM Consensus',
    citation: 'Rybak MJ, et al. Therapeutic monitoring of vancomycin for serious methicillin-resistant Staphylococcus aureus infections: A revised consensus guideline. Am J Health-Syst Pharm. 2020;77(11):835-864 (Reaffirmed 2024).',
    badgeColor: 'bg-purple-800 text-white'
  }
];
