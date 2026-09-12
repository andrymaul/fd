import { HighYieldTopic } from '../competencyExamData';

/**
 * EKSPANSI MATERI HIGH-YIELD UKMPPAI BAGIAN 4:
 * Melengkapi Cetak Biru (Blueprint) Resmi UKMPPAI KFN, IAI & APTFI
 * Fokus:
 * 1. Onkologi, CINV & Tumor Lysis Syndrome
 * 2. Gagal Jantung 4 Pilar GDMT & Fibrilasi Atrium DOAC vs Warfarin
 * 3. TB Resistan Obat (TB-RO) & Regimen HIV TLD x OAT Rifampisin
 * 4. Kedaruratan Elektrolit: Hiperkalemia Emergensi & Koreksi Hiponatremia
 * 5. Status Epileptikus 3 Tahap & TDM Litium Rentang Sempit
 * 6. Krisis Tiroid (Burch-Wartofsky) & KAD/HHS
 * 7. Farmakoekonomi: ICER, QALY, DALY & Analisis Biaya (CMA, CEA, CUA, CBA)
 * 8. Keuangan & Logistik Apotek: TOR, ITOR, BEP, ROP, Safety Stock
 * 9. Tata Kelola Khusus Narkotika, Psikotropika, Prekursor, OOT & SIPNAP
 * 10. CPOB 2024: Sistem Tata Udara (HVAC), Kaskade Tekanan & Ruang Bersih Kelas A-E
 * 11. Sistem Pengolahan Air Industri (PW, WFI, Pure Steam) & Uji Endotoksin Bakteri (LAL Test)
 * 12. Uji Disolusi Terbandingkan (F1, F2 Similarity Factor) & Media Fill Test
 * 13. Standardisasi Parameter Spesifik & Non-Spesifik Ekstrak Herbal
 * 14. Senyawa Marker Aktif Tanaman Obat Unggulan Indonesia & Skrining Fitokimia
 */
export const HIGH_YIELD_TOPICS_EXPANSION_4: HighYieldTopic[] = [
  // =========================================================================
  // 🩺 DOMAIN 1: FARMASI KLINIS & FARMAKOTERAPI (UKMPPAI)
  // =========================================================================
  {
    id: 'top-oncology-cinv-tls',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    title: 'Onkologi Suportif: Protokol Antiemetik CINV, Ekstravasasi Sitostatika & Tumor Lysis Syndrome (TLS)',
    category: 'Onkologi & Hematologi Klinis',
    tags: ['Onkologi', 'CINV', 'Aprepitant', 'Ondansetron', 'Deksametason', 'Ekstravasasi', 'Vesikan', 'TLS', 'Rasburikase', 'Alopurinol'],
    summary: 'Protokol penatalaksanaan efek samping mayor kemoterapi: profilaksis mual-muntah kemoterapi emetogenik tinggi (HEC), antidotum ekstravasasi sitostatika vesikan, dan pencegahan nefropati kristal asam urat pada sindrom lisis tumor.',
    keyPearls: [
      '1. Profilaksis Chemotherapy-Induced Nausea & Vomiting (CINV):',
      '• Kemoterapi Emetogenik Tinggi (HEC - contoh: Sisplatin >= 50 mg/m2, Doksorubisin + Siklofosfamid): Protokol 3/4 Obat: Antagonis Reseptor NK-1 (Aprepitant/Fosaprepitant) + Antagonis 5-HT3 (Ondansetron/Granisetron/Palonosetron) + Deksametason (+ Olanzapin).',
      '• Kemoterapi Emetogenik Sedang (MEC): Antagonis 5-HT3 + Deksametason.',
      '• Mual Muntah Akut (0-24 jam pasca-kemo): Dimediasi oleh serotonin (5-HT3 di usus & CTZ).',
      '• Mual Muntah Tertunda / Delayed (Hari 2-5): Dimediasi oleh Substansi P pada reseptor Neurokinin-1 (NK-1). Oleh karena itu, Aprepitant oral dilanjutkan pada hari ke-2 dan ke-3.',
      '2. Tatalaksana Ekstravasasi Obat Sitostatika:',
      '• Golongan VESIKAN (Memicu nekrosis jaringan luas): Doksorubisin, Vinkristin, Vinblastin, Paklitaksel.',
      '• Ekstravasasi Antrasiklin (Doksorubisin/Daunorubisin): Kompres DINGIN/ES + Antidotum spesifik DEKSRAZOKSAN IV (atau topikal DMSO 99%).',
      '• Ekstravasasi Vinka Alkaloid (Vinkristin/Vinblastin): Kompres HANGAT + Injeksi enzim HIALURONIDASE subkutan untuk memfasilitasi absorpsi dan dispersi obat.',
      '3. Sindrom Lisis Tumor (Tumor Lysis Syndrome / TLS):',
      '• Pelepasan masif isi intraseluler sel kanker: HIPERURISEMIA, HIPERKALEMIA, HIPERFOSFATEMIA, dan HIPOKALSEMIA sekunder.',
      '• Pencegahan Risiko Sedang: Hidrasi cairan intravena agresif (3 L/m2/hari) + ALOPURINOL (menghambat enzim xantin oksidase sehingga mencegah pembentukan asam urat baru).',
      '• Terapi Risiko Tinggi / Hiperurisemia Berat (> 8 mg/dL): RASBURIKASE IV (enzim rekombinan urat oksidase yang mengkatalisis asam urat menjadi ALANTOIN yang larut air dan mudah diekskresikan ginjal).'
    ],
    frequentExamPitfalls: [
      'Kompres pada ekstravasasi Vinkristin HARUS KOMPRES HANGAT (bukan dingin!), karena kompres dingin justru memperparah toksisitas lokal vinka alkaloid.',
      'Alopurinol HANYA MENCEGAH pembentukan asam urat baru (tidak mendegradasi kristal asam urat yang sudah terbentuk). Untuk menurunkan asam urat yang sudah tinggi secara cepat pada TLS, obat pilihannya adalah RASBURIKASE.'
    ],
    referenceStandard: 'ASCO/MASCC Guidelines for Antiemetics in Oncology & NCCN Guidelines: Prevention and Treatment of Cancer-Related Infections and TLS'
  },
  {
    id: 'top-heart-failure-gdmt',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    title: 'Gagal Jantung HFrEF: Terapi 4 Pilar GDMT & Pencegahan Stroke Fibrilasi Atrium (CHA2DS2-VASc)',
    category: 'Kardiovaskular',
    tags: ['Gagal Jantung', 'HFrEF', 'GDMT', 'ARNI', 'Sakubitril', 'Valsartan', 'Spironolakton', 'Dapagliflozin', 'Fibrilasi Atrium', 'DOAC', 'Warfarin'],
    summary: 'Penerapan 4 pilar terapi penurun mortalitas gagal jantung fraksi ejeksi menurun (HFrEF EF <= 40%) dan stratifikasi risiko tromboemboli pada fibrilasi atrium non-valvular menggunakan skor CHA2DS2-VASc.',
    keyPearls: [
      '1. Terapi 4 Pilar Guideline-Directed Medical Therapy (GDMT) HFrEF:',
      '• Pilar 1: ARNI (Sakubitril-Valsartan) - Pilihan utama menggantikan ACEI/ARB. Bekerja ganda menghambat neprilisin (meningkatkan peptida natriuretik endogen BNP/ANP) dan memblok reseptor AT1.',
      '  *CRITICAL PITFALL*: Wajib washout period 36 JAM saat beralih dari ACEI ke ARNI untuk mencegah risiko fatal ANGIOEDEMA.',
      '• Pilar 2: Beta Blocker Terbukti Mortalitas (HANYA 3 OBAT: Bisoprolol, Karvedilol, atau Metoprolol Suksinat pelepasan lambat). Diberikan saat pasien euvolemik/stabil, mulai dosis rendah titrasi naik.',
      '• Pilar 3: Mineralocorticoid Receptor Antagonist (MRA: Spironolakton atau Eplerenon). Hentikan/tunda jika K serum > 5.0 mEq/L atau eGFR < 30 mL/min.',
      '• Pilar 4: SGLT2 Inhibitor (Dapagliflozin 10 mg atau Empagliflozin 10 mg 1x sehari). Efektif menurunkan mortalitas dan rehospitalisasi terlepas dari ada/tidaknya komorbid diabetes.',
      '• Diuretik Loop (Furosemid): HANYA untuk mengatasi kongesti/edema (mengurangi gejala sesak, TIDAK menurunkan mortalitas jangka panjang).',
      '2. Fibrilasi Atrium (AF) & Pencegahan Stroke Iskemik:',
      '• Stratifikasi Skor CHA2DS2-VASc: Congestive HF (1), Hypertension (1), Age >= 75 (2), Diabetes (1), Stroke/TIA/Thromboembolism (2), Vascular disease (1), Age 65-74 (1), Sex category Female (1).',
      '• Ambang Batas Terapi Antikoagulan: Pria skor >= 2, Wanita skor >= 3 -> WAJIB Antikoagulan Oral.',
      '• Pilihan Utama pada AF Non-Valvular: DOAC (Direct Oral Anticoagulants: Apiksaban, Rivaroksaban, Dabigatran) lebih unggul daripada Warfarin karena risiko perdarahan intrakranial lebih rendah dan tanpa perlu monitoring INR rutin.',
      '• AF Valvular (Stenosis mitral sedang-berat atau katup jantung mekanik): KONTRAINDIKASI DOAC -> WAJIB menggunakan WARFARIN dengan target INR 2.0 - 3.0 (atau 2.5 - 3.5 pada katup mekanik mitral).'
    ],
    frequentExamPitfalls: [
      'Jangan pernah memulai ARNI tanpa jeda 36 jam jika pasien sebelumnya mengonsumsi ACEI (Kaptopril, Ramipril). Washout 36 jam TIDAK diperlukan jika pasien sebelumnya mengonsumsi ARB.',
      'Pada pasien AF dengan stenosis mitral rematik atau katup jantung prostetik mekanik, DOAC (Rivaroksaban/Apiksaban) DILARANG keras. Satu-satunya antikoagulan yang diakui adalah WARFARIN.'
    ],
    referenceStandard: 'ESC Guidelines for the Diagnosis and Treatment of Acute and Chronic Heart Failure & ACC/AHA/ACCP/HRS Guideline for AF'
  },
  {
    id: 'top-tb-ro-hiv-interaction',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    title: 'Tuberkulosis Resistan Obat (TB-RO / MDR-TB), Koinfeksi TB-HIV & Interaksi Kritis Dolutegravir',
    category: 'Penyakit Infeksi & Tropis',
    tags: ['TB-RO', 'MDR-TB', 'Bedaquiline', 'Linezolid', 'HIV', 'TLD', 'Dolutegravir', 'Rifampisin', 'Interaksi Enzim', 'Hepatotoksik OAT'],
    summary: 'Tatalaksana Tuberkulosis Resistan Obat berdasar pedoman WHO/Kemenkes RI, penanganan reaksi obat tidak diinginkan (ROTD) hepatotoksisitas OAT, dan tata laksana interaksi induksi CYP3A4/UGT1A1 antara Rifampisin dan Dolutegravir pada koinfeksi TB-HIV.',
    keyPearls: [
      '1. Definisi Resistensi TB:',
      '• TB Monoresistan: Resistan terhadap 1 jenis OAT lini pertama.',
      '• TB Poliresistan: Resistan terhadap >1 jenis OAT lini pertama selain kombinasi Isoniazid dan Rifampisin bersamaan.',
      '• TB Multi-drug Resistant (MDR-TB / TB-RO): Resistan MINIMAL terhadap ISONIAZID (H) dan RIFAMPISIN (R) secara simultan.',
      '• TB Extensively Drug-Resistant (XDR-TB): Memenuhi kriteria MDR-TB DITAMBAH resistan terhadap golongan FLUOROKUINOLON (Moksifloksasin/Levofloksasin) dan minimal 1 obat Grup A (Bedaquiline atau Linezolid).',
      '2. Paduan Pengobatan TB-RO Terkini (Paduan BPaL / BPaLM):',
      '• BPaLM: Bedaquiline + Pretomanid + Linezolid + Moksifloksasin selama 6 bulan.',
      '• Monitoring Toksisitas Linezolid: Supresi sumsum tulang (anemia, trombositopenia) dan neuropati optik/perifer permanen.',
      '• Monitoring Toksisitas Bedaquiline & Moksifloksasin: Pemanjangan interval QTc pada EKG (risiko aritmia Torsades de Pointes).',
      '3. Koinfeksi TB-HIV & Interaksi Kritis OAT-ARV:',
      '• Paduan ARV Lini Pertama Indonesia: TLD (Tenofovir Disoproxil Fumarate + Lamivudin + Dolutegravir).',
      '• INTERAKSI RIFAMPISIN x DOLUTEGRAVIR:',
      '  Rifampisin adalah INDUKTOR KUAT enzim CYP3A4 dan UGT1A1 di hati, yang mempercepat metabolisme Dolutegravir sehingga kadar Dolutegravir dalam darah anjlok drastis (subterapeutik).',
      '  *SOLUSI TEPAT*: Naikkan frekuensi Dolutegravir menjadi 50 mg DUA KALI SEHARI (BID / tiap 12 jam) selama pasien mengonsumsi Rifampisin, dan dilanjutkan hingga 2 MINGGU setelah Rifampisin dihentikan.',
      '4. Manajemen Hepatotoksisitas Akibat OAT Lini Pertama:',
      '• Hentikan SEMUA OAT berpotensi hepatotoksik (Rifampisin, Isoniazid, Pirazinamid) jika: SGOT/SGPT > 5 kali batas atas normal (tanpa gejala) ATAU SGOT/SGPT > 3 kali batas atas normal DISERTAI gejala ikterus, mual-muntah hebat, atau bilirubin > 2 mg/dL.',
      '• Berikan paduan non-hepatotoksik sementara jika pasien sangat sesak/berat: Streptomisin + Etambutol + Levofloksasin.',
      '• Rechallenge OAT secara bertahap setelah enzim hepar kembali < 2x batas normal: Mulai dari Rifampisin -> Isoniazid -> Pirazinamid (Pirazinamid paling hepatotoksik, sering tidak dimasukkan kembali).'
    ],
    frequentExamPitfalls: [
      'Jangan mengganti Rifampisin dengan Rifabutin jika ketersediaan obat terbatas di Indonesia; solusi baku nasional adalah MENAIKKAN DOSIS DOLUTEGRAVIR menjadi 50 mg dua kali sehari (bukan 1x sehari).',
      'Etambutol TIDAK hepatotoksik (efek samping utamanya adalah neuritis optik / buta warna hijau-merah), sehingga Etambutol aman dilanjutkan saat terjadi Drug-Induced Liver Injury (DILI).'
    ],
    referenceStandard: 'Petunjuk Teknis Penatalaksanaan TB-RO Kemenkes RI 2024 & Pedoman Nasional Pelayanan Kedokteran Tata Laksana HIV'
  },
  {
    id: 'top-acute-electrolyte-emergencies',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    title: 'Kedaruratan Elektrolit: Tatalaksana Cepat Hiperkalemia Berat & Batas Aman Koreksi Hiponatremia Akut',
    category: 'Nefrologi & Gangguan Elektrolit',
    tags: ['Hiperkalemia', 'Kalsium Glukonat', 'Insulin D50', 'Salbutamol', 'Hiponatremia', 'NaCl 3%', 'Osmotic Demyelination Syndrome', 'Kayexalate'],
    summary: 'Protokol bertahap stabilisasi membran jantung dan pergeseran ion pada hiperkalemia mengancam jiwa, serta perhitungan kecepatan koreksi natrium hipertonis untuk mencegah kerusakan batang otak mielinolisis pontin.',
    keyPearls: [
      '1. Hiperkalemia Emergensi (K+ > 6.0 - 6.5 mEq/L atau terdapat perubahan EKG: Tall T-wave, QRS melebar, PR memanjang):',
      '• Langkah 1: STABILISASI MEMBRAN JANTUNG (Segera dalam 1-3 menit):',
      '  Injeksi KALSIUM GLUKONAT 10% 10 mL IV lambat (2-5 menit). Bekerja menstabilkan ambang potensial aksi miosit jantung untuk mencegah fibrilasi ventrikel/henti jantung. Kalsium TIDAK menurunkan kadar kalium darah!',
      '• Langkah 2: REDISTRIBUSI / PERGESERAN KALIUM KE INSTRASEL (Mulai dalam 15-30 menit):',
      '  - Injeksi INSULIN REGULER 10 IU IV + Dekstrosa 50% (D50) 50 mL IV (memicu pompa Na+/K+-ATPase memasukkan kalium ke intrasel, dekstrosa mencegah hipoglikemia).',
      '  - Nebulisasi SALBUTAMOL dosis tinggi (10 - 20 mg) via nebulizer (agonis beta-2 merangsang influx kalium).',
      '  - Natrium Bikarbonat 8.4% 50 mEq IV (hanya jika disertai asidosis metabolik berat pH < 7.2).',
      '• Langkah 3: ELIMINASI / PEMBUANGAN KALIUM DARI TUBUH:',
      '  - Furosemid 40-80 mg IV (jika fungsi ginjal memadai).',
      '  - Kation Exchange Resin (Sodium/Calcium Polystyrene Sulfonate / Kayexalate oral atau retensi enema).',
      '  - HEMODIALISIS CITO: Metode paling efektif dan definitif pada pasien gagal ginjal anuria.',
      '2. Hiponatremia Simtomatik Berat (Na+ < 120 mEq/L dengan kejang atau koma):',
      '• Terapi Pilihan: Infus Natrium Klorida 3% (NaCl 3% hipertonis) 100-150 mL bolus dalam 10-20 menit, dapat diulang hingga gejala neuro reversibel.',
      '• BATAS KECEPATAN KOREKSI MAKSIMAL:',
      '  Koreksi natrium TIDAK BOLEH MELEBIHI 8 - 10 mEq/L dalam 24 jam pertama (atau maksimal 18 mEq/L dalam 48 jam).',
      '• Komplikasi Fatal *Osmotic Demyelination Syndrome (ODS)* / Central Pontine Myelinolysis:',
      '  Jika natrium dinaikkan terlalu cepat, air akan tertarik keluar dari sel-sel otak secara mendadak, menyebabkan destruksi selubung mielin batang otak (quadriparesis flaksid permanen, locked-in syndrome).'
    ],
    frequentExamPitfalls: [
      'Jawaban soal: "Obat manakah yang pertama kali diberikan pada hiperkalemia dengan kelainan EKG?" -> JAWABAN WAJIB KALSIUM GLUKONAT, bukan insulin atau furosemid! Prioritas nomor satu adalah mencegah henti jantung.',
      'Kalsium Glukonat TIDAK menurunkan kadar kalium, ia murni merupakan antagonis membran miokard.'
    ],
    referenceStandard: 'KDIGO Clinical Practice Guideline for Acute Kidney Injury & European Resuscitation Council Guidelines: Electrolyte Emergencies'
  },
  {
    id: 'top-status-epilepticus-lithium',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    title: 'Status Epileptikus Konvulsif 3 Tahap & Therapeutic Drug Monitoring (TDM) Toksisitas Litium',
    category: 'Neurologi & Psikiatri',
    tags: ['Status Epileptikus', 'Diazepam', 'Fenitoin', 'Fenobarbital', 'Litium', 'Bipolar', 'TDM', 'Rentang Sempit', 'Ataksia', 'Tremor'],
    summary: 'Algoritma kedaruratan status epileptikus berdasar durasi menit serangan dan pemantauan kadar terapi terapeutik sempit Litium karbonat pada gangguan afektif bipolar.',
    keyPearls: [
      '1. Algoritma Waktu Penanganan Status Epileptikus Konvulsif (Kejang > 5 menit tanpa henti):',
      '• Tahap 1: Fase Awal (0 - 5 menit): Oksigenasi, bebaskan jalan nafas, cek glukosa darah cito (atasi hipoglikemia dengan D40 bila ada).',
      '• Tahap 2: Fase Stabil / First-Line Terapi (5 - 20 menit):',
      '  - Jalur IV tersedia: LORAZEPAM 4 mg IV lambat ATAU DIAZEPAM 10 mg IV (kecepatan maksimal 2-5 mg/menit, dapat diulang 1x setelah 5-10 menit).',
      '  - Jalur IV belum terpasang: MIDAZOLAM 10 mg INTRAMUSKULAR (IM) ATAU DIAZEPAM REKTAL (5 mg untuk BB < 12 kg; 10 mg untuk BB >= 12 kg).',
      '• Tahap 3: Fase Status Berlanjut / Second-Line Terapi (20 - 40 menit):',
      '  - FENITOIN IV (Dosis Muatan: 15 - 20 mg/kgBB) dilarutkan HANYA dalam NaCl 0.9% (Dextrose memicu presipitasi kristal!). Kecepatan infus maksimal 50 mg/menit untuk mencegah aritmia dan hipotensi berat.',
      '  - Alternatif modern: LEVETIRASETAM 60 mg/kgBB IV atau ASAM VALPROAT 40 mg/kgBB IV.',
      '• Tahap 4: Fase Refrakter (> 40 menit): Induksi koma di ICU dengan PROPOFOL IV, MIDAZOLAM IV kontinu, atau TIOPEBTAL/PENTOBARBITAL.',
      '2. Therapeutic Drug Monitoring (TDM) Litium Karbonat:',
      '• Rentang Terapi Sempit: Akut Mania: 0,8 - 1,2 mEq/L; Pemeliharaan: 0,6 - 1,0 mEq/L.',
      '• Gejala Toksisitas Litium:',
      '  - Ringan-Sedang (1.5 - 2.0 mEq/L): Mual, muntah, diare profus, tremor kasar (coarse tremor), ataksia, mengantuk.',
      '  - Berat (> 2.0 - 2.5 mEq/L): Klonus, hiperrefleksia, kejang, delirium, gagal ginjal akut, koma. Penanganan: Hidrasi NaCl 0.9% dan HEMODIALISIS bila kadar > 4.0 mEq/L (atau > 2.5 mEq/L dengan gejala neurologi berat).',
      '• Interaksi Fatal yang MENAIKKAN Kadar Litium (Menurunkan Ekskresi Ginjal):',
      '  - Diuretik Tiazid (Hidroklorotiazid) - Mengurangi klirens litium hingga 40-50%!',
      '  - NSAID (Ibuprofen, Natrium Diklofenak, Meloksikam) - Menghambat sintesis prostaglandin ginjal.',
      '  - ACEI / ARB (Kaptopril, Kandesartan).'
    ],
    frequentExamPitfalls: [
      'Pelarut Fenitoin IV WAJIB NaCl 0.9% (Normal Saline). JANGAN PERNAH melarutkan fenitoin dalam Dekstrosa 5% karena pH rendah dekstrosa akan mengendapkan fenitoin seketika (presipitasi jarum kristal menyumbat pembuluh darah).',
      'Pasien bipolar pengguna litium yang mengeluh nyeri sendi TIDAK BOLEH diberi NSAID (Ibuprofen/Mefenamat); analgesik aman pilihannya adalah PARASETAMOL.'
    ],
    referenceStandard: 'American Epilepsy Society (AES) Guideline for Status Epilepticus & APA Practice Guideline for the Treatment of Patients with Bipolar Disorder'
  },
  {
    id: 'top-thyroid-storm-kad',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    title: 'Krisis Tiroid (Burch-Wartofsky Score) & Komplikasi Akut Diabetes (KAD vs HHS)',
    category: 'Endokrin & Metabolik Akut',
    tags: ['Krisis Tiroid', 'PTU', 'Lugol', 'KAD', 'HHS', 'Insulin Reguler', 'Kalium', 'Anion Gap'],
    summary: 'Protokol multi-target krisis tiroid (Thyroid Storm) dan tatalaksana koma metabolik hiperglikemia akut: Ketoasidosis Diabetik (KAD) vs Status Hiperosmolar Hiperglikemik (HHS).',
    keyPearls: [
      '1. Krisis Tiroid / Badai Tiroid (Thyroid Storm - Skor Burch-Wartofsky >= 45):',
      '• Urutan Waktu Pemberian Obat Sangat Krusial:',
      '  1) BLOKADE SINTESIS HORMON TIROID: PROPILTIOURASIL (PTU) dosis muatan 500-1000 mg oral/NGT, dilanjutkan 200-250 mg tiap 4 jam. PTU lebih disukai dibanding Metimazol pada krisis karena PTU memiliki efek tambahan menghambat konversi perifer T4 menjadi T3 aktif.',
      '  2) BLOKADE PELEPASAN HORMON (Diminum MINIMAL 1 JAM SETELAH PTU): Larutan Kalium Iodida (Lugol solution 8-10 tetes tiap 8 jam) atau SSKI. Efek Wolff-Chaikoff memblok pelepasan hormon. *PITFALL*: Jika diberikan sebelum PTU, iodida justru akan menjadi substrat sintesis hormon tiroid baru!',
      '  3) BLOKADE SIMPATIK: PROPRANOLOL 60-80 mg oral tiap 4 jam atau 1-2 mg IV perlahan untuk mengontrol takikardia dan agitasi.',
      '  4) MENCEGAH INSUFISIENSI ADRENAL & MENEKAN KONVERSI T4-T3: HIDROKORTISON 100 mg IV tiap 8 jam.',
      '2. Ketoasidosis Diabetik (KAD) vs Status Hiperosmolar Hiperglikemik (HHS):',
      '• KAD: Glukosa > 250 mg/dL, Ketonemia/Ketonuria POSITIF KUAT, Asidosis Metabolik (pH < 7.3, Bikarbonat < 18 mEq/L), High Anion Gap (> 12 mEq/L). Nafas Kussmaul & bau aseton.',
      '• HHS: Glukosa SANGAT TINGGI (> 600 mg/dL), Osmolalitas Serum Efektif > 320 mOsm/kg, Ketonuria NEGATIF/samar, pH > 7.30 (tidak ada asidosis berat). Dehidrasi masif dan penurunan kesadaran koma.',
      '3. Tatalaksana KAD (Protokol ADA):',
      '• Resusitasi Cairan: NaCl 0.9% 1000 mL pada jam ke-1.',
      '• KOREKSI KALIUM SEBELUM INSULIN:',
      '  - Jika K+ < 3.3 mEq/L: JANGAN BERIKAN INSULIN DAHULU! Berikan Kalium Klorida (KCl) 20-40 mEq/jam hingga K+ >= 3.5 mEq/L untuk mencegah aritmia fatal henti jantung.',
      '  - Jika K+ 3.3 - 5.3 mEq/L: Berikan Insulin bersamaan dengan KCl 20-30 mEq per liter cairan infus.',
      '  - Jika K+ > 5.3 mEq/L: Mulai insulin, tunda kalium.',
      '• Terapi Insulin Reguler: Bolus IV 0.1 unit/kgBB diikuti infus kontinu 0.1 unit/kgBB/jam (target penurunan glukosa 50-75 mg/dL per jam). Bila glukosa mencapai 200 mg/dL (KAD) atau 300 mg/dL (HHS), ganti cairan ke Dekstrosa 5% (D5 + 0.45% NaCl) untuk mencegah hipoglikemia dan edema serebral.'
    ],
    frequentExamPitfalls: [
      'Pemberian Lugol/Iodida pada krisis tiroid HARUS DITUNDA minimal 1 jam setelah pemberian PTU.',
      'Insulin TIDAK BOLEH diberikan pada KAD jika kadar Kalium serum pasien < 3.3 mEq/L karena insulin mendorong kalium ke intrasel dan dapat menyebabkan henti jantung mendadak akibat hipokalemia berat.'
    ],
    referenceStandard: 'American Thyroid Association (ATA) Guidelines for Thyrotoxicosis & ADA Standards of Care: Diabetic Ketoacidosis Management'
  },

  // =========================================================================
  // 💼 DOMAIN 2: MANAJEMEN FARMASI, FARMAKOEKONOMI & REGULASI (UKMPPAI)
  // =========================================================================
  {
    id: 'top-pharmacoeconomics-icer-qaly',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    title: 'Farmakoekonomi Lanjutan: Analisis ICER, QALY, DALY & 4 Kuadran Cost-Effectiveness Plane',
    category: 'Farmakoekonomi & Kebijakan Obat',
    tags: ['Farmakoekonomi', 'ICER', 'QALY', 'DALY', 'CMA', 'CEA', 'CUA', 'CBA', 'Willingness-to-Pay', 'Threshold'],
    summary: 'Metode evaluasi ekonomi pelayanan kesehatan (CMA, CEA, CUA, CBA), kalkulasi rasio inkremental efektivitas biaya (ICER), utilitas hidup QALY, dan kriteria kelayakan pembiayaan Formularium Nasional.',
    keyPearls: [
      '1. Karakteristik 4 Metode Utama Evaluasi Farmakoekonomi:',
      '• Cost-Minimization Analysis (CMA): Efektivitas dan *outcome* kedua obat terbukti SAMA / EKIVALEN (contoh: Obat Generik vs Paten bermerek). Mengukur dan membandingkan HANYA biaya (dalam satuan Rupiah). Obat dengan biaya termurah yang dipilih.',
      '• Cost-Effectiveness Analysis (CEA): Membandingkan obat dengan outcome klinis yang SAMA namun efektivitasnya BERBEDA. Satuan outcome: UNIT ALAMI / NATURAL UNIT (contoh: Rupiah per penurunan mmHg tekanan darah, Rupiah per % penurunan HbA1c, Rupiah per tahun kehidupan yang diselamatkan / Life Years Gained).',
      '• Cost-Utility Analysis (CUA): Membandingkan obat dengan kualitas hidup pasien. Satuan outcome: QALY (Quality-Adjusted Life Years) atau DALY (Disability-Adjusted Life Years). QALY = Nilai Utilitas Kualitas Hidup (0 sampai 1) x Durasi Hidup (Tahun).',
      '• Cost-Benefit Analysis (CBA): Membandingkan program intervensi di mana BAIK BIAYA MAUPUN OUTCOME KEDUANYA DIUKUR DALAM SATUAN MONETER / MATA UANG (Rupiah/Dolar). Menghasilkan Net Benefit (Benefit - Cost) atau Benefit-Cost Ratio (BCR > 1 layak).',
      '2. Perhitungan Incremental Cost-Effectiveness Ratio (ICER):',
      '• Rumus ICER: ICER = (Biaya Obat B - Biaya Obat A) / (Efektivitas Obat B - Efektivitas Obat A) = Delta Cost / Delta Effect.',
      '• Interpretasi Nilai Ambang Batas (Willingness-to-Pay / WTP Threshold WHO):',
      '  Suatu obat baru dianggap COST-EFFECTIVE jika nilai ICER < 1 s/d 3 kali Produk Domestik Bruto (PDB) per kapita negara tersebut.',
      '3. Kuadran Cost-Effectiveness Plane:',
      '• Kuadran I (Kanan Atas): Biaya Lebih Tinggi, Efek Lebih Tinggi -> Hitung ICER (bandingkan dengan WTP).',
      '• Kuadran II (Kanan Bawah): Biaya LEBIH RENDAH, Efek LEBIH TINGGI -> KONDISI DOMINAN (Obat pasti diterima tanpa ragu).',
      '• Kuadran III (Kiri Bawah): Biaya Lebih Rendah, Efek Lebih Rendah -> Trade-off penghematan vs penurunan hasil.',
      '• Kuadran IV (Kiri Atas): Biaya LEBIH TINGGI, Efek LEBIH RENDAH -> KONDISI DOMINATED (Obat pasti ditolak keras).'
    ],
    frequentExamPitfalls: [
      'Jika soal menyebutkan: "Kedua antihipertensi menghasilkan penurunan tekanan darah yang ekivalen secara statistik", metode analisis yang tepat adalah CMA (Cost-Minimization Analysis), BUKAN CEA.',
      'Jika outcome diukur dalam "Quality-Adjusted Life Year (QALY)", metodenya PASTI CUA (Cost-Utility Analysis).'
    ],
    referenceStandard: 'Pedoman Penerapan Farmakoekonomi Kemenkes RI & ISPOR Guidelines'
  },
  {
    id: 'top-pharmacy-financial-tor-bep',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    title: 'Analisis Keuangan & Logistik Apotek: Turn Over Ratio (TOR), Break-Even Point (BEP), ROP & Safety Stock',
    category: 'Manajemen Keuangan & Logistik Farmasi',
    tags: ['TOR', 'HPP', 'BEP', 'Safety Stock', 'Reorder Point', 'Lead Time', 'Margin', 'HJA', 'ROI', 'Payback Period'],
    summary: 'Formula perhitungan finansial efisiensi modal kerja apotek: perputaran persediaan (TOR), titik impas (BEP), titik pemesanan kembali (ROP), persediaan pengaman (SS), dan penentuan harga jual apotek.',
    keyPearls: [
      '1. Turn Over Ratio (TOR) / Perputaran Persediaan:',
      '• Rumus TOR: TOR = Harga Pokok Penjualan (HPP) / Rata-rata Persediaan.',
      '• Rata-rata Persediaan = (Persediaan Awal + Persediaan Akhir) / 2.',
      '• HPP = Persediaan Awal + Pembelian Bersih - Persediaan Akhir.',
      '• Interpretasi TOR: Semakin TINGGI nilai TOR (misal 8-12 kali per tahun), semakin efisien perputaran modal barang dan semakin sedikit uang mengendap di stok mati (*dead stock*).',
      '2. Break-Even Point (BEP) / Titik Impas Modal:',
      '• BEP Rupiah = Biaya Tetap (Fixed Cost) / [1 - (Biaya Variabel / Total Pendapatan Penjualan)].',
      '• Biaya Tetap (Fixed Cost): Gaji karyawan tetap, sewa gedung, biaya izin apotek (tidak dipengaruhi omzet).',
      '• Biaya Variabel (Variable Cost): Pembelian obat/HPP, kemasan plastik, etiket, komisi resep.',
      '3. Safety Stock (SS) & Reorder Point (ROP):',
      '• Safety Stock (SS) = Lead Time (LT) x Rata-rata Penggunaan per hari (Lead Time Delay).',
      '  Atau rumus deviasi: SS = Z x Standar Deviasi Lead Time.',
      '• Reorder Point (ROP) = (Rata-rata Konsumsi Harian x Waktu Tunggu/Lead Time) + Safety Stock.',
      '• Saat stok tersisa di rak mencapai angka ROP, bagian gudang/apoteker WAJIB segera membuat Surat Pesanan (SP) ke PBF agar tidak terjadi kekosongan obat (stock-out).',
      '4. Perhitungan Harga Jual Apotek (HJA):',
      '• HJA = Harga Netto Apotek (HNA) + PPN 11% + Margin Laba Apotek.',
      '• Contoh: HNA Amoksisilin = Rp 100.000, PPN 11%, Margin laba 20%.',
      '  HNA + PPN = 100.000 x 1.11 = Rp 111.000.',
      '  HJA = 111.000 x 1.20 = Rp 133.200.'
    ],
    frequentExamPitfalls: [
      'Pada perhitungan TOR, pembilang yang benar adalah HARGA POKOK PENJUALAN (HPP), bukan Total Omzet Penjualan (kecuali jika HPP tidak diketahui di soal).',
      'PPN dihitung DARI HNA terlebih dahulu sebelum ditambahkan persentase margin keuntungan.'
    ],
    referenceStandard: 'Permenkes RI No. 73 Tahun 2016 tentang Standar Pelayanan Kefarmasian di Apotek & Manajemen Farmasi Teori dan Praktik'
  },
  {
    id: 'top-narkotika-psikotropika-sipnap',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    title: 'Regulasi Khusus Narkotika, Psikotropika, Prekursor & Obat-Obat Tertentu (Permenkes 3/2015 & 73/2016)',
    category: 'Hukum & Perundang-undangan Farmasi',
    tags: ['Narkotika', 'Psikotropika', 'Prekursor', 'OOT', 'Surat Pesanan', 'SIPNAP', 'Lemari Ganda', 'Pemusnahan Resep'],
    summary: 'Aturan hukum legalitas kefarmasian Indonesia: spesifikasi teknis lemari narkotika, ketentuan format dan rangkap Surat Pesanan (SP), alur pemusnahan resep/narkotika, serta sistem pelaporan elektronik SIPNAP.',
    keyPearls: [
      '1. Ketentuan Surat Pesanan (SP) Farmasi:',
      '• SP NARKOTIKA: Format KHUSUS resmi (tidak boleh digabung form umum), terdiri dari 3 atau 4 rangkap, dan HANYA BISA MEMUAT 1 (SATU) JENIS SEDIAAN NARKOTIKA per lembar SP.',
      '• SP PSIKOTROPIKA: Minimal 2 rangkap, boleh memuat LEBIH DARI SATU jenis sediaan psikotropika, ditandatangani Apoteker Penanggung Jawab (APJ) ber-SIPA.',
      '• SP PREKURSOR (Pseudoefedrin, Efedrin, Ergometrin, Ergotamin) & OOT (Tramadol, Triheksifenidil, Klorpromazin, Haloperidol, Dekstrometorfan): Dibuat terpisah minimal 2 rangkap.',
      '2. Standar Lemari Penyimpanan Narkotika & Psikotropika di Apotek/RS:',
      '• Bahan: Terbuat dari kayu kuat atau besi baja tebal yang menempel permanen (dibaut) pada dinding atau lantai tembok.',
      '• Kunci: Memiliki DUA BUAH KUNCI YANG BERBEDA (Double Lock System).',
      '• Pemegang Kunci: Kunci 1 dipegang oleh Apoteker Penanggung Jawab (APJ), Kunci 2 dipegang oleh Tenaga Teknis Kefarmasian (TTK) atau pegawai lain yang didelegasikan secara resmi.',
      '3. Pelaporan & Pemusnahan:',
      '• Pelaporan SIPNAP (Sistem Pelaporan Narkotika dan Psikotropika Online): Dilakukan SECARA RUTIN PALING LAMBAT TANGGAL 10 SETIAP BULAN untuk penggunaan bulan sebelumnya.',
      '• Pemusnahan Narkotika/Psikotropika: Wajib disaksikan oleh petugas Dinas Kesehatan Kabupaten/Kota dan/atau Balai POM setempat, dibuat Berita Acara Pemusnahan rangkap 3.',
      '• Penyimpanan Resep: Resep narkotika dipisahkan dari resep biasa (diberi garis merah bawah nama obat). Resep disimpan minimal 5 TAHUN sebelum boleh dimusnahkan.'
    ],
    frequentExamPitfalls: [
      'Satu lembar Surat Pesanan Narkotika HANYA BOLEH berisi 1 JENIS ITEM obat saja! Jika memesan Morfin tab dan Morfin injeksi, HARUS MENGGUNAKAN 2 LEMBAR SP BERBEDA.',
      'Pelaporan SIPNAP tetap wajib dilakukan setiap bulan maksimal tanggal 10, meskipun pada bulan tersebut NIHIL (tidak ada transaksi narkotika sama sekali).'
    ],
    referenceStandard: 'Permenkes RI No. 3 Tahun 2015 tentang Peredaran, Penyimpanan, Pemusnahan, dan Pelaporan Narkotika, Psikotropika, dan Prekursor Farmasi'
  },

  // =========================================================================
  // 🔬 DOMAIN 3: TEKNOLOGI FARMASI & CPOB 2024 (UKMPPAI)
  // =========================================================================
  {
    id: 'top-cpob-hvac-cleanroom-classes',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    title: 'CPOB Industri: Sistem Tata Udara (HVAC), Kaskade Tekanan Ruang & Klasifikasi Ruang Bersih Kelas A - E',
    category: 'Teknologi Sediaan & CPOB',
    tags: ['CPOB', 'HVAC', 'Ruang Bersih', 'Kelas A', 'Kelas B', 'Kelas C', 'Kelas D', 'Tekanan Udara', 'Kaskade', 'HEPA'],
    summary: 'Prinsip desain fasilitas produksi steril dan non-steril industri farmasi: batas partikel debu non-operasional dan operasional kelas A s/d E, efisiensi filter HEPA H14, dan kaskade perbedaan tekanan udara.',
    keyPearls: [
      '1. Klasifikasi Ruang Bersih CPOB 2024 (Partikel Debu per m3):',
      '• KELAS A: Zona untuk kegiatan berisiko tinggi (pengisian aseptis, penutupan vial/ampul, perakitan peralatan steril). Aliran udara laminer (Laminar Airflow) kecepatan 0.36 - 0.54 m/s. Batas partikel >= 0.5 µm: Maksimal 3.520 partikel/m3 (kondisi non-operasional & operasional). Mikroba cawan papar: < 1 CFU.',
      '• KELAS B: Lingkungan latar belakang (background) untuk zona Kelas A pada pengolahan dan pengisian aseptis. Partikel non-operasional 3.520/m3, saat operasional 352.000/m3.',
      '• KELAS C: Area bersih untuk pembuatan produk steril dengan sterilisasi akhir (terminal sterilization: pengisian salep mata, sirup steril sebelum autoklaf).',
      '• KELAS D: Area bersih untuk penanganan bahan awal dan pembuatan sediaan non-steril berisiko (ruang timbang, granulasi, pencucian vial steril).',
      '• KELAS E: Area pengolahan sediaan non-steril konvensional (ruang pencetakan tablet, pengemasan primer sirup dan kapsul).',
      '2. Kaskade Perbedaan Tekanan Udara (Differential Pressure):',
      '• Antar ruang bersih dengan kelas berbeda: Beda tekanan minimal 10 - 15 Pascal (ruang yang lebih bersih memiliki tekanan LEBIH TINGGI).',
      '• Ruang Produksi Steril Aseptis: Tekanan POSITIF terhadap koridor (udara bersih mengalir keluar, mencegah partikel kotor masuk ke ruang aseptis).',
      '• Ruang Produksi Sediaan Mengandung Debu (Tablet/Serbuk) atau Zat Berbahaya (Sitostatika / Penisilin): Tekanan NEGATIF terhadap koridor (udara koridor masuk ke ruang produksi, mencegah debu obat menyebar mencemari area luar / *containment*).',
      '3. Spesifikasi Sistem HVAC (Heating, Ventilation, and Air Conditioning):',
      '• Filtrasi Udara 3 Tahap: Pre-filter (efisiensi 30-40%) -> Medium filter (efisiensi 85-95%) -> Final HEPA Filter H14 (efisiensi 99.995% untuk partikel 0.3 µm).',
      '• Pergantian Udara (Air Changes per Hour / ACH): Minimal 20 kali per jam pada Kelas B-D.'
    ],
    frequentExamPitfalls: [
      'Ruang pencetakan tablet harus bertekanan LEBIH RENDAH (NEGATIF) dibanding koridor untuk mencegah kontaminasi silang (cross-contamination) debu serbuk ke produk lain.',
      'Ruang pengisian steril aseptis harus bertekanan LEBIH TINGGI (POSITIF) dibanding koridor untuk menjaga sterilitas produk.'
    ],
    referenceStandard: 'Petunjuk Operasional Penerapan Pedoman CPOB BPOM RI Edisi Terkini'
  },
  {
    id: 'top-water-system-lal-endotoxin',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    title: 'Sistem Pengolahan Air Industri (Purified Water, WFI, Pure Steam) & Uji Endotoksin Bakteri (LAL Test)',
    category: 'Fasilitas Penunjang Kritis Industri & QC',
    tags: ['Water System', 'WFI', 'Purified Water', 'TOC', 'Konduktivitas', 'Endotoksin', 'LAL Test', 'Pirogen', 'Distilasi'],
    summary: 'Spesifikasi mutu air farmasi (Farmakope Indonesia VI / CPOB): parameter konduktivitas, total organic carbon (TOC), batas mikroba, serta metode pengujian pirogen dan endotoksin bakteri sediaan injeksi.',
    keyPearls: [
      '1. Kategori dan Spesifikasi Mutu Air Farmasi:',
      '• Air Minum (Drinking Water): Bahan baku awal dari PAM/sumur bor yang telah memenuhi standar Permenkes.',
      '• Purified Water (PW / Air Murni):',
      '  - Diperoleh dari Air Minum melalui tahapan: Multimedia filter -> Softener (penukar ion Ca/Mg) -> Karbon aktif (adsorpsi klorin) -> Reverse Osmosis (RO) -> Demineralisasi (Mix Bed Ion Exchange / EDI).',
      '  - Digunakan untuk: Pembuatan produk non-steril (sirup, tablet), pencucian akhir alat non-steril.',
      '  - Spesifikasi: Konduktivitas <= 1.3 µS/cm (25°C), TOC < 500 ppb, Angka Lempeng Total (ALT) < 100 CFU/mL.',
      '• Water for Injection (WFI / Air untuk Injeksi):',
      '  - Diperoleh HANYA dari Purified Water melalui metode DISTILASI (Vapor Compression atau Multi-Effect Stills) atau Reverse Osmosis ganda berteknologi tinggi.',
      '  - Sirkulasi Sistem Loop: Disimpan dan dialirkan terus-menerus pada suhu PANAS >= 70 - 80°C (*continuous loop hot circulation*) untuk mencegah pembentukan biofilm bakteri.',
      '  - Digunakan untuk: Pelarut sediaan injeksi steril, infus, dan pencucian akhir vial steril.',
      '  - Spesifikasi: Konduktivitas <= 1.1 µS/cm (20°C), TOC < 500 ppb, ALT < 10 CFU/100 mL, ENDOTOKSIN BAKTERI < 0.25 EU/mL.',
      '2. Uji Endotoksin Bakteri (Bacterial Endotoxin Test / BET):',
      '• Menggunakan pereaksi LAL (Limulus Amebocyte Lysate) yang diekstrak dari darah kepiting tapal kuda (*horseshoe crab / Limulus polyphemus*).',
      '• Mekanisme: Enzim kaskade koagulasi LAL bereaksi spesifik dengan lipopolisakarida (LPS) dinding sel bakteri Gram negatif membentuk gumpalan gel (*gel-clot technique*).',
      '• Keunggulan Uji LAL dibanding Uji Pirogen Kelinci (Rabbit Pyrogen Test): Lebih sensitif, cepat, kuantitatif, dan tidak memerlukan hewan uji hidup.'
    ],
    frequentExamPitfalls: [
      'WFI disimpan dan disirkulasikan pada suhu TINGGI (minimal 70-80°C), BUKAN suhu dingin atau suhu ruang, untuk mencegah pertumbuhan biofilm mikroorganisme.',
      'Batas maksimal endotoksin bakteri untuk WFI umum adalah KURANG DARI 0.25 EU/mL.'
    ],
    referenceStandard: 'Farmakope Indonesia Edisi VI (Monografi Air Murni & Air untuk Injeksi) & WHO Good Manufacturing Practices for Water for Pharmaceutical Use'
  },
  {
    id: 'top-udt-dissolution-media-fill',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    title: 'Uji Disolusi Terbandingkan (Faktor F1 & F2) & Validasi Proses Aseptis (Media Fill Test)',
    category: 'Kontrol Kualitas (QC) & Pemastian Mutu (QA)',
    tags: ['Disolusi Terbandingkan', 'F2 Similarity Factor', 'F1 Difference Factor', 'Media Fill', 'TSB', 'Validasi Aseptis'],
    summary: 'Kriteria ekivalensi in vitro sediaan padat oral pasca-perubahan formula/skala pabrik berdasar nilai F2, serta prosedur pembuktian sterilitas proses pengisian aseptis menggunakan media Tryptic Soy Broth (TSB).',
    keyPearls: [
      '1. Uji Disolusi Terbandingkan (UDT):',
      '• Dilakukan untuk membuktikan ekivalensi in vitro antara obat generik/copy terhadap obat inovator/komparator pada 3 kondisi pH fisiologis saluran cerna: pH 1.2 (lambung), pH 4.5 (duodenum), dan pH 6.8 (usus halus).',
      '• Kriteria Penerimaan Faktor Kemiripan (Similarity Factor - f2):',
      '  - Nilai f2 HARUS BERADA DI ANTARA 50 HINGGA 100 (50 <= f2 <= 100). Nilai 50 mencerminkan perbedaan rata-rata disolusi sebesar 10% di setiap titik sampling waktu.',
      '  - Nilai Faktor Perbedaan (Difference Factor - f1) harus berada di antara 0 hingga 15 (0 <= f1 <= 15).',
      '• Persyaratan Pengujian: Menggunakan minimal 12 unit sediaan per batch. Titik waktu sampling: minimal 3 titik waktu, dan koefisien variasi (%CV) pada titik pertama < 20%, titik berikutnya < 10%.',
      '2. Validasi Proses Aseptis: Media Fill Test (Process Simulation):',
      '• Menggantikan produk obat dengan MEDIA PERTUMBUHAN MIKROBA STERIL (Tryptic Soy Broth / Soybean Casein Digest Broth) yang disimulasikan melewati seluruh tahapan proses produksi steril.',
      '• Jumlah Wadah: Minimal 5.000 hingga 10.000 unit wadah diisi.',
      '• Inkubasi: Inkubasi pada 20-25°C selama minimal 7 hari (deteksi kapang/khamir) diikuti 30-35°C selama 7 hari (deteksi bakteri) -> Total 14 hari.',
      '• Kriteria Keberterimaan CPOB:',
      '  - Target mutlak: ZERO CONTAMINATION (0 wadah terkontaminasi / tidak boleh ada kekeruhan media sama sekali).',
      '  - Jika diisi 5.000 - 10.000 unit: 1 unit terkontaminasi memicu investigasi dan pengulangan media fill. >1 unit terkontaminasi = TIDAK MEMENUHI SYARAT (GAGAL VALIDASI).'
    ],
    frequentExamPitfalls: [
      'Rentang nilai f2 yang menyatakan dua produk EKIVALEN / IDENTIK adalah 50 - 100. Jika f2 < 50, maka profil disolusi dinyatakan TIDAK EKIVALEN.',
      'Pada Media Fill Test, cairan yang digunakan adalah MEDIA NUTRIEN STERIL (TSB), bukan air steril atau alkohol.'
    ],
    referenceStandard: 'Pedoman Uji Bioekivalensi BPOM RI & CPOB Aneks 1: Pembuatan Produk Steril'
  },

  // =========================================================================
  // 🌿 DOMAIN 4: FARMASI BAHAN ALAM & FITOFARMAKA (UKMPPAI)
  // =========================================================================
  {
    id: 'top-herbal-standardization-parameters',
    domainId: 'bahan_alam',
    targetExam: 'ukmppai',
    title: 'Standardisasi Simplisia & Ekstrak Obat Tradisional: Parameter Spesifik vs Non-Spesifik',
    category: 'Farmasi Bahan Alam & Kontrol Mutu Herbal',
    tags: ['Standardisasi', 'Parameter Spesifik', 'Parameter Non-Spesifik', 'Kadar Abu', 'Susut Pengeringan', 'Logam Berat', 'KLT Densitometri'],
    summary: 'Uji kendali mutu baku bahan alam sesuai Farmakope Herbal Indonesia (FHI) untuk menjamin reproduksibilitas keamanan, khasiat, dan mutu sediaan Jamu, OHT, serta Fitofarmaka.',
    keyPearls: [
      '1. Parameter NON-SPESIFIK (Fokus pada faktor lingkungan, stabilitas, dan keamanan bahan):',
      '• Susut Pengeringan (Loss on Drying): Mengukur pengurangan bobot bahan setelah dikeringkan pada suhu 105°C hingga bobot konstan (mengukur air DAN senyawa volatil yang menguap). Batas umum: <= 10%.',
      '• Kadar Air: Mengukur HANYA kandungan molekul air dalam simplisia menggunakan metode Titrasi Karl Fischer atau Destilasi Toluen (Azeotropik). Batas: <= 10% untuk mencegah kapang.',
      '• Kadar Abu Total: Dipanaskan pada suhu pijar 600 - 800°C di dalam tanur (*muffle furnace*). Mengukur total mineral anorganik internal fisiologis simplisia dan pengotor eksternal.',
      '• Kadar Abu Tidak Larut Asam (Acid-Insoluble Ash): Abu total dilarutkan dalam HCl encer mendidih. Mengukur khusus cemaran PASIR, SILIKAT, atau TANAH yang menempel pada simplisia (semakin kecil nilainya semakin bersih simplisia).',
      '• Cemaran Logam Berat: Pb (Timbal) <= 10 ppm, Cd (Kadmium) <= 0.3 ppm, As (Arsen) <= 5 ppm, Hg (Merkuri) <= 0.5 ppm diukur dengan AAS (Atomic Absorption Spectrophotometry).',
      '• Cemaran Mikroba: Angka Lempeng Total (ALT), Angka Kapang Khamir (AKK), dan NEGATIF patogen (*E. coli, Salmonella, Pseudomonas, S. aureus*).',
      '• Sisa Pelarut: Mengukur residu etanol/metanol/heksana pada ekstrak dengan Kromatografi Gas (GC).',
      '2. Parameter SPESIFIK (Fokus pada identitas kimiawi dan karakteristik khas organoleptik tanaman):',
      '• Identitas Simplisia: Deskripsi nama latin botani, nama daerah, dan bagian tanaman (*rhizoma, folium, semen, cortex*).',
      '• Organoleptik: Warna, bau, dan rasa khas ekstrak.',
      '• Kadar Sari Larut Air & Kadar Sari Larut Etanol: Mengukur fraksi kandungan metabolit yang tersari dalam pelarut polar (air) vs semipolar (etanol).',
      '• Profil Kromatografi (Fingerprint): Pola bercak KLT atau kromatogram HPLC khas.',
      '• Penetapan Kadar Senyawa Marker Aktif: Penetapan kadar kuantitatif senyawa aktif berkhasiat (contoh: Kadar Kurkuminoid pada temulawak diukur dengan Spektrofotometri UV-Vis atau KLT-Densitometri).'
    ],
    frequentExamPitfalls: [
      'Kadar abu tidak larut asam mengukur CEMARAN PASIR/SILIKAT/TANAH, BUKAN kandungan mineral tanaman.',
      'Susut pengeringan BUKAN hanya mengukur air, melainkan mengukur seluruh zat volatil yang menguap pada 105°C (termasuk sisa pelarut dan minyak atsiri).'
    ],
    referenceStandard: 'Parameter Standar Umum Ekstrak Tumbuhan Obat BPOM & Farmakope Herbal Indonesia Edisi II'
  },
  {
    id: 'top-active-markers-indonesian-medicinal-plants',
    domainId: 'bahan_alam',
    targetExam: 'ukmppai',
    title: 'Senyawa Marker Aktif Tanaman Obat Unggulan Indonesia & Skrining Fitokimia Golongan Senyawa',
    category: 'Fitokimia & Farmakognosi',
    tags: ['Senyawa Marker', 'Kurkumin', 'Andrografolid', 'Kuersetin', 'Piperin', 'Filantin', 'Alkaloid', 'Flavonoid', 'Bouchardat', 'Wilstatter'],
    summary: 'Matriks penghubung nama tanaman obat, simplisia, senyawa penanda (marker compound), khasiat farmakologis utama, serta reagen identifikasi kualitatif tabung skrining fitokimia.',
    keyPearls: [
      '1. Matriks Senyawa Marker Tanaman Obat Indonesia Paling Sering Diujikan:',
      '• Temulawak (*Curcuma xanthorrhiza*): Senyawa marker XANTORIZOL (minyak atsiri khas) & KURKUMINOID. Khasiat: Hepatoprotektor & kolagoga.',
      '• Kunyit (*Curcuma longa / C. domestica*): Senyawa marker KURKUMIN (TIDAK mengandung xantorizol!). Khasiat: Anti-inflamasi lambung & dispepsia.',
      '• Sambiloto (*Andrographis paniculata*): Senyawa marker ANDROGRAFOLID (lakton diterpenoid rasa sangat pahit). Khasiat: Imunomodulator & antidiabetes.',
      '• Jambu Biji (*Psidium guajava*): Senyawa marker KUERSETIN (flavonoid). Khasiat: Antidiare & meningkatkan trombosit pada demam berdarah (DBD).',
      '• Meniran (*Phyllanthus niruri*): Senyawa marker FILANTIN & HIPOFILANTIN (lignan). Khasiat: Imunomodulator.',
      '• Lada Hitam (*Piper nigrum*): Senyawa marker PIPERIN (alkaloid piperidin).',
      '• Kulit Manggis (*Garcinia mangostana*): Senyawa marker MANGOSTIN (xanton). Khasiat: Antioksidan kuat.',
      '• Pegagan (*Centella asiatica*): Senyawa marker ASIASTIKOSID (triterpenoid saponin). Khasiat: Penyembuh luka & neuroprotektor.',
      '• Daun Sirsak (*Annona muricata*): Senyawa marker ASETOGENIN. Khasiat: Sitotoksik sel kanker.',
      '2. Reagen Reaksi Skrining Fitokimia Tabung:',
      '• ALKALOID: Ekstrak diasamkan -> Reagen Dragendorff (Endapan COKELAT / JINGGA-MERAH), Reagen Mayer (Endapan PUTIH / KUNING MUDA), Reagen Wagner (Endapan COKELAT).',
      '• FLAVONOID (Uji Wilstatter / Shinoda): Ekstrak + Logam Magnesium (Mg) bubuk + HCl pekat -> Terbentuk larutan berwarna MERAH / JINGGA cerah.',
      '• SAPONIN (Uji Busa): Ekstrak dikocok kuat dengan air dalam tabung reaksi -> Terbentuk BUSA SETINGGI >= 1 CM YANG STABIL MINIMAL 10 MENIT, dan busa tidak hilang setelah ditetesi 1 tetes HCl 2N.',
      '• TANIN: Ekstrak + Larutan Besi(III) Klorida (FeCl3) 1% -> Warna BIRU KEHITAMAN (tanin terhidrolisis / galotanin) atau HIJAU KEHITAMAN (tanin terkondensasi / katekol).'
    ],
    frequentExamPitfalls: [
      'Perbedaan Temulawak vs Kunyit: Temulawak memiliki marker khas XANTORIZOL, sedangkan Kunyit TIDAK memiliki xantorizol.',
      'Reagen Dragendorff menghasilkan endapan JINGGA-MERAH, sedangkan Reagen Mayer menghasilkan endapan PUTIH kekuningan.'
    ],
    referenceStandard: 'Farmakope Herbal Indonesia & Materia Medika Indonesia (MMI) Kemenkes RI'
  }
];
