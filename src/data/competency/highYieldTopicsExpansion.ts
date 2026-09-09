import { HighYieldTopic } from '../competencyExamData';

/**
 * Ekspansi Rangkuman Materi High-Yield (+17 Topik Baru)
 * Modul Pusat Belajar Uji Kompetensi Farmasi (UKMPPAI & UKTVF)
 * Mengacu pada 4 Blueprint KFN, IAI, PERKI, PERKENI, PAPDI, CPOB & FHI
 */
export const HIGH_YIELD_TOPICS_EXPANSION: HighYieldTopic[] = [
  // ==========================================
  // DOMAIN 1: FARMASI KLINIS & FARMAKOTERAPI (+7 TOPIK)
  // ==========================================
  {
    id: 'top-acs-dapt',
    domainId: 'klinis',
    title: 'Sindrom Koroner Akut (ACS: STEMI, NSTEMI & UAP): Reperfusi, DAPT & Statin',
    category: 'Kardiovaskular',
    tags: ['ACS', 'STEMI', 'NSTEMI', 'DAPT', 'Aspirin', 'Ticagrelor', 'Clopidogrel', 'PCI'],
    summary: 'Tata laksana kegawatdaruratan infark miokard akut terbagi menjadi STEMI (elevasi segmen ST) dan NSTEMI/UAP. Reperfusi mekanik Percutaneous Coronary Intervention (PCI) adalah pilihan utama pada STEMI jika dapat dicapai < 120 menit; jika tidak, fibrinolisis (Streptokinase/Alteplase) diberikan dalam < 30 menit. Dual Antiplatelet Therapy (DAPT) dan statin intensitas tinggi wajib dimulai sesegera mungkin.',
    keyPearls: [
      'MONA / FONA awal: Morfin IV (jika nyeri dada refrakter), Oksigen (hanya jika saturasi SaO2 < 90%), Nitrat sublingual (kontraindikasi jika TD sistolik < 90 mmHg atau baru minum sildenafil < 24 jam), dan Aspirin kunyah dosis muat 160-320 mg.',
      'Dual Antiplatelet Therapy (DAPT): Aspirin (loading 160-320 mg, rumatan 80-100 mg/hari) + Inhibitor reseptor P2Y12.',
      'Pilihan P2Y12 Inhibitor: Tikagrelor (loading 180 mg, rumatan 2x90 mg) atau Prasugrel (loading 60 mg, rumatan 10 mg) lebih diutamakan daripada Klopidogrel (loading 300-600 mg, rumatan 75 mg) karena onset lebih cepat dan efikasi lebih kuat, KECUALI pasien berisiko perdarahan tinggi atau riwayat stroke (Prasugrel kontraindikasi riwayat TIA/stroke).',
      'Antikoagulan parenteral selama rawat inap: Enoxaparin (LMWH 1 mg/kgBB SC tiap 12 jam) atau Fondaparinux (2,5 mg SC 1x/hari) atau Unfractionated Heparin (UFH).',
      'High-Intensity Statin WAJIB dimulai tanpa melihat kadar awal kolesterol: Atorvastatin 40-80 mg atau Rosuvastatin 20-40 mg untuk stabilisasi plak ateroma dan efek pleiotropik antiinflamasi vaskular.',
      'Beta Blocker oral (Bisoprolol/Metoprolol) dimulai dalam 24 jam pertama jika hemodinamik stabil (tidak ada gagal jantung dekompensasi akut, bradikardia berat, atau syok kardiogenik).'
    ],
    frequentExamPitfalls: [
      'Jangan memberikan Oksigen rutin jika saturasi oksigen pasien sudah >= 90% karena memicu hiperoksia vasokonstriksi koroner.',
      'Klopidogrel adalah prodrug yang butuh bioaktivasi enzim CYP2C19. Jangan gabungkan Klopidogrel dengan Omeprazole/Esomeprazole (gunakan Pantoprazole sebagai gastroprotektor).',
      'Nitrat oral/sublingual KONTRAINDIKASI MUTLAK pada pasien infark ventrikel kanan (inferior STEMI dengan hipotensi) dan pengguna obat disfungsi ereksi PDE-5 inhibitor (Sildenafil < 24 jam, Tadalafil < 48 jam) karena memicu syok vasodilatasi fatal.'
    ],
    referenceStandard: 'Pedoman Tata Laksana Sindrom Koroner Akut PERKI & ESC Guidelines for the Management of ACS'
  },
  {
    id: 'top-kad-hhs',
    domainId: 'klinis',
    title: 'Krisis Hiperglikemia: Ketoasidosis Diabetikum (KAD) vs Status Hiperglikemik Hiperosmolar (HHS)',
    category: 'Endokrin & Metabolik',
    tags: ['Diabetes', 'KAD', 'HHS', 'Insulin Reguler', 'Kalium', 'Cairan NaCl 0.9%', 'Asidosis'],
    summary: 'Dua komplikasi metabolik akut diabetes yang mengancam nyawa. KAD ditandai hiperglikemia (GDS > 250 mg/dL), asidosis metabolik (pH < 7,3, bikarbonat < 18 mEq/L), dan ketonemia/ketonuria (nafas bau aseton/Kussmaul). HHS ditandai hiperglikemia sangat tinggi (GDS > 600 mg/dL), hiperosmolaritas serum (> 320 mOsm/kg), dehidrasi berat, dan penurunan kesadaran tanpa asidosis bermakna.',
    keyPearls: [
      'Pilar 1 (Resusitasi Cairan): Berikan NaCl 0,9% intravena 1.000 - 1.500 mL pada 1 jam pertama untuk memulihkan perfusi jaringan dan volume intravaskular.',
      'Pilar 2 (Koreksi Kalium Kritis): Periksa Kalium serum SEBELUM memulai insulin. JIKA Kalium < 3,3 mEq/L, TUNDA PEMBERIAN INSULIN dan berikan koreksi KCl 20-40 mEq/jam hingga Kalium >= 3,3 mEq/L (karena insulin mendorong kalium masuk ke intrasel dan dapat memicu aritmia henti jantung mendadak).',
      'Pilar 3 (Insulin Teratur Intravena): Insulin Reguler (Short-acting) drip kontinu 0,1 unit/kgBB/jam (atau bolus 0,1 unit/kg dilanjutkan 0,1 unit/kg/jam). Target penurunan GDS stabil: 50 - 75 mg/dL per jam.',
      'Pergantian Cairan ke Dextrose: Saat GDS mencapai 200 mg/dL (pada KAD) atau 300 mg/dL (pada HHS), ganti cairan infus menjadi Dextrose 5% dalam NaCl 0,45% untuk mencegah hipoglikemia mendadak dan edema serebral sembari melanjutkan insulin drip dosis rendah hingga asidosis/keton teratasi.',
      'Indikasi Natrium Bikarbonat: HANYA diberikan jika asidosis metabolik sangat berat dengan pH darah < 6,9.'
    ],
    frequentExamPitfalls: [
      'Jebakan fatal ujian: Memulai insulin sebelum mengetahui kadar Kalium. Memberikan insulin saat hipokalemia (< 3,3 mEq/L) adalah malpraktik ujian.',
      'Jangan menurunkan gula darah terlalu cepat (> 100 mg/dL/jam) karena pergeseran osmolaritas intravaskular mendadak berisiko memicu EDEMA SEREBRAL yang fatal.'
    ],
    referenceStandard: 'Konsensus Pengelolaan KAD & HHS PB PERKENI & ADA Standards of Medical Care in Diabetes'
  },
  {
    id: 'top-uti-pregnancy',
    domainId: 'klinis',
    title: 'Infeksi Saluran Kemih (ISK) Komplikasi, Non-Komplikasi & Ibu Hamil',
    category: 'Infeksi & Saluran Kemih',
    tags: ['ISK', 'Sistitis', 'Pielonefritis', 'Nitrofurantoin', 'Kotrimoksazol', 'Sefalosporin', 'Kehamilan'],
    summary: 'ISK bagian bawah (sistitis tanpa komplikasi) paling sering disebabkan Escherichia coli uropatogenik. Pilihan terapi lini pertama meliputi Nitrofurantoin, Fosfomisin trometamol, atau Kotrimoksazol (jika resistensi lokal < 20%). Pada ibu hamil, semua ISK termasuk Bakteriuria Asimtomatik WAJIB diterapi tuntas untuk mencegah pielonefritis, persalinan prematur, dan BBLR.',
    keyPearls: [
      'Sistitis Tanpa Komplikasi (Wanita Tidak Hamil): Nitrofurantoin monohidrat 100 mg 2x sehari selama 5 hari, ATAU Fosfomisin trometamol 3 gram dosis tunggal sachet, ATAU Kotrimoksazol (TMP-SMX) 160/800 mg 2x sehari selama 3 hari.',
      'Bakteriuria Asimtomatik & Sistitis pada Ibu Hamil: Pilihan aman lini pertama adalah Amoksisilin-Klavulanat (Augmentin) 2x625 mg selama 5-7 hari, Sefaleksin 4x500 mg, atau Sefiksim 1x400 mg.',
      'Nitrofurantoin pada Kehamilan: Aman digunakan pada Trimester 2, namun KONTRAINDIKASI MUTLAK pada TRIMESTER 3 (usia kehamilan 38-42 minggu atau menjelang persalinan) karena risiko anemia hemolitik pada neonatus akibat imaturitas enzim eritrosit G6PD janin.',
      'Kotrimoksazol pada Kehamilan: KONTRAINDIKASI pada Trimester 1 (efek antagonis asam folat/teratogenik neural tube defect) dan Trimester 3 (menggeser bilirubin dari albumin memicu kernikterus pada bayi baru lahir).',
      'Pielonefritis Akut (Demam tinggi, menggigil, nyeri ketok CVA): Memerlukan antibiotik parenteral IV segera (Seftriakson 1-2 gram IV 1x sehari atau Levofloksasin IV jika non-hamil) selama 10-14 hari.'
    ],
    frequentExamPitfalls: [
      'Golongan Florokuinolon (Siprofloksasin, Ofloksasin, Levofloksasin) adalah KONTRAINDIKASI MUTLAK pada kehamilan (merusak kartilago pertumbuhan janin / artropati).',
      'Bakteriuria asimtomatik pada wanita tidak hamil TIDAK PERLU diobati, KECUALI pada IBU HAMIL atau sebelum tindakan prosedur urologi invasif.'
    ],
    referenceStandard: 'IDSA Guidelines for Treatment of Antimicrobial-Resistant Gram-Negative Infections & Panduan PNPK Kemenkes RI'
  },
  {
    id: 'top-thyroid-storm',
    domainId: 'klinis',
    title: 'Gangguan Tiroid: Krisis Tiroid (Thyroid Storm), Hipertiroid & Levotiroksin',
    category: 'Endokrin & Metabolik',
    tags: ['Tiroid', 'Hipertiroid', 'Hipotiroid', 'Levotiroksin', 'PTU', 'Metimazol', 'Thyroid Storm', 'Lugol'],
    summary: 'Materi tiroid mencakup tata laksana Hipotiroidisme primer dengan Levotiroksin oral dan Hipertiroidisme (Graves) dengan tionamid (PTU dan Metimazol). Krisis tiroid (Thyroid Storm) adalah kegawatdaruratan hipertiroid dekompensasi dengan mortalitas tinggi yang membutuhkan penanganan urutan obat secara ketat.',
    keyPearls: [
      'Aturan Minum Levotiroksin (T4): Wajib diminum saat PERUT KOSONG pada pagi hari 30-60 menit sebelum sarapan dengan segelas air putih. Hindari diminum bersama kopi, susu, kalsium, atau tablet besi (beri jeda minimal 4 jam).',
      'Pemantauan Terapi Levotiroksin: Periksa kadar TSH serum setiap 6-8 minggu setelah penyesuaian dosis hingga target TSH tercapai (rentang normal 0,5 - 4,5 mIU/L). Pada wanita hipotiroid yang hamil, kebutuhan dosis T4 umumnya meningkat 25-50% sejak awal kehamilan.',
      'Pilihan Antitiroid Kehamilan: Trimester 1 = Propiltiourasil (PTU) karena risiko teratogenik rendah; Trimester 2 & 3 = Beralih ke Metimazol karena PTU berisiko hepatotoksisitas berat pada pemakaian jangka panjang.',
      'Protokol Urutan Obat Krisis Tiroid (Thyroid Storm):',
      '1. Tionamid Dosis Tinggi: PTU 500-1.000 mg loading lanjut 200 mg tiap 4 jam (menghambat sintesis hormon DAN konversi perifer T4 ke T3).',
      '2. Larutan Yodium / Lugol / SSKI: Diberikan MINIMAL 1 JAM SETELAH pemberian PTU (jika yodium diberikan lebih dulu, yodium justru menjadi bahan baku sintesis hormon tiroid baru / Wolff-Chaikoff paradox).',
      '3. Beta Blocker: Propranolol 60-80 mg tiap 4 jam oral atau 1-2 mg IV perlahan untuk mengendalikan takikardia, tremor, dan menghambat konversi perifer T4 ke T3.',
      '4. Kortikosteroid: Hidrokortison 100 mg IV tiap 8 jam atau Deksametason 2 mg tiap 6 jam untuk mencegah krisis adrenal relatif dan menekan pelepasan TSH.'
    ],
    frequentExamPitfalls: [
      'Pada krisis tiroid, Larutan Lugol / Kalium Iodida TIDAK BOLEH diberikan sebelum tionamid (PTU). Wajib tunggu jeda minimal 1 jam setelah PTU.',
      'Aspirin KONTRAINDIKASI untuk menurunkan demam pada krisis tiroid karena menggeser T4 dan T3 dari ikatan protein plasma (TBG), meningkatkan kadar fraksi bebas Free T3/T4 (gunakan Parasetamol).'
    ],
    referenceStandard: 'American Thyroid Association (ATA) Guidelines & Konsensus Penyakit Tiroid PB PERKENI'
  },
  {
    id: 'top-gout-hyperuricemia',
    domainId: 'klinis',
    title: 'Artritis Gout: Serangan Akut vs Terapi Penurun Asam Urat Kronis (ULT)',
    category: 'Muskuloskeletal & Sendi',
    tags: ['Gout', 'Asam Urat', 'Kolkisin', 'Allopurinol', 'Febuxostat', 'NSAID', 'HLA-B5801'],
    summary: 'Artritis Gout melibatkan dua fase terapi terpisah: (1) Terapi Serangan Akut (antiinflamasi cepat: Kolkisin, NSAID, atau Kortikosteroid), dan (2) Terapi Penurunan Asam Urat Kronis (Urate Lowering Therapy / ULT: Allopurinol atau Febuxostat) untuk mencegah pembentukan tofus dan kekambuhan.',
    keyPearls: [
      'Dosis Kolkisin Serangan Akut Terkini (Low-Dose Regimen): 1,2 mg pada saat onset serangan, dilanjutkan 0,6 mg 1 jam kemudian (total 1,8 mg pada hari pertama). Dosis rendah ini sama efektifnya dengan dosis tinggi tradisional namun jauh lebih aman dari efek toksisitas diare/kram usus.',
      'Alternatif Serangan Akut: NSAID potensi kuat (Indometasin, Naproksen, atau Ibuprofen dosis penuh) atau Kortikosteroid oral (Prednison 30-35 mg/hari selama 5 hari) jika pasien memiliki kontraindikasi ginjal/ulkus lambung terhadap NSAID.',
      'Aturan Emas Memulai ULT: JANGAN PERNAH MEMULAI obat penurun asam urat (Allopurinol/Febuxostat) saat SERANGAN AKUT SEDANG BERLANGSUNG, karena fluktuasi mendadak kadar asam urat serum akan memicu migrasi kristal monosodium urat dan memperparah inflamasi sendi. Mulai 2-4 minggu setelah serangan akut reda sempurna.',
      'Aturan Jika Sudah Rutin Minum Allopurinol: JIKA serangan gout kambuh saat pasien sedang dalam terapi rutin Allopurinol, JANGAN HENTIKAN ALLOPURINOL; lanjutkan dosisnya dan tambahkan terapi akut (kolkisin/NSAID).',
      'Skrining Genetik Allopurinol: Pasien keturunan Asia Tenggara berisiko tinggi mengalami reaksi hipersensitivitas fatal (Severe Cutaneous Adverse Reactions / SCARs: SJS/TEN dan DRESS) akibat adanya alel HLA-B*5801.',
      'Target Terapi ULT: Target kadar asam urat serum < 6 mg/dL (atau < 5 mg/dL jika sudah terdapat tofus kronis).'
    ],
    frequentExamPitfalls: [
      'Jebakan klasik: Menghentikan Allopurinol saat pasien kontrol kambuh serangan gout. Jika sudah berjalan, jangan dihentikan; cukup tambahkan antiinflamasi.',
      'Kolkisin diekskresikan lewat ginjal dan dimetabolisme oleh CYP3A4 dan P-gp. Hindari kombinasi Kolkisin dengan Clarithromycin atau Ketokonazol pada pasien gangguan ginjal/hati berat (risiko toksisitas neuromiopati dan depresi sumsum tulang fatal).'
    ],
    referenceStandard: 'American College of Rheumatology (ACR) Guideline for the Management of Gout & Konsensus Diagnosis IRA'
  },
  {
    id: 'top-copd-gold-2024',
    domainId: 'klinis',
    title: 'Penyakit Paru Obstruktif Kronik (PPOK / COPD): Klasifikasi GOLD 2024 Grup ABE',
    category: 'Respirasi & Paru',
    tags: ['PPOK', 'COPD', 'GOLD 2024', 'LAMA', 'LABA', 'Tiotropium', 'Eksaserbasi', 'Eosinofil'],
    summary: 'Pedoman global GOLD 2024 membagi PPOK stabil ke dalam klasifikasi ABE berdasarkan riwayat eksaserbasi dan skor gejala (mMRC / CAT). Bronkodilator kerja panjang (LAMA dan LABA) merupakan pilar utama farmakoterapi PPOK, sedangkan Inhaled Corticosteroid (ICS) hanya ditambahkan pada populasi tertentu.',
    keyPearls: [
      'Klasifikasi Pasien PPOK (GOLD 2024):',
      '• GRUP A (Eksaserbasi 0-1 kali tanpa rawat inap, gejala ringan mMRC < 2 atau CAT < 10): Terapi awal = Bronkodilator tunggal (bisa SABA/SAMA saat butuh, atau LAMA / LABA kerja panjang).',
      '• GRUP B (Eksaserbasi 0-1 kali tanpa rawat inap, gejala berat mMRC >= 2 atau CAT >= 10): Terapi awal = Kombinasi DUA Bronkodilator Kerja Panjang (LAMA + LABA, misal: Tiotropium + Olodaterol, atau Umeclidinium + Vilanterol).',
      '• GRUP E (Riwayat Eksaserbasi Sering: >= 2 kali eksaserbasi sedang ATAU >= 1 kali eksaserbasi rawat inap, tanpa melihat skor gejala): Terapi awal = Kombinasi LAMA + LABA.',
      'Indikasi Penambahan ICS (Inhaled Corticosteroid) pada PPOK: ICS ditambahkan ke kombinasi LAMA+LABA (Triple Therapy) HANYA JIKA kadar Eosinofil Darah >= 300 sel/μL atau pasien memiliki riwayat asma penyerta.',
      'Risiko ICS pada PPOK: Penggunaan kortikosteroid inhalasi jangka panjang pada pasien PPOK terbukti secara signifikan meningkatkan risiko PNEUMONIA berulang.',
      'Terapi Eksaserbasi Akut PPOK: SABA/SAMA inhalasi (Salbutamol + Ipratropium) + Prednison oral 40 mg/hari selama 5 HARI (cukup 5 hari, tidak perlu 14 hari) + Antibiotik jika ada 3 tanda kardinal Anthonisen (peningkatan sesak, volume sputum, dan purulensi sputum).'
    ],
    frequentExamPitfalls: [
      'Berbeda dengan Asma di mana ICS adalah obat wajib nomor satu, pada PPOK terapi utamanya adalah BRONKODILATOR (LAMA/LABA). ICS BUKAN monoterapi pada PPOK dan tidak boleh diberikan tunggal.',
      'Durasi steroid oral sistemik pada eksaserbasi PPOK adalah 5 HARI, bukan 10 atau 14 hari.'
    ],
    referenceStandard: 'Global Initiative for Chronic Obstructive Lung Disease (GOLD) 2024 Report & PDPI PPOK Guidelines'
  },
  {
    id: 'top-lactation-safety',
    domainId: 'klinis',
    title: 'Penggunaan Obat pada Ibu Menyusui (Laktasi & Kriteria Keamanan Hale)',
    category: 'Pediatrik & Populasi Khusus',
    tags: ['Laktasi', 'Menyusui', 'ASI', 'Kategori Hale', 'RID', 'Prolaktin', 'Neonatus'],
    summary: 'Sebagian besar obat diekskresikan ke dalam ASI melalui difusi pasif. Apoteker harus mampu mengevaluasi rasio perpindahan obat ke ASI, menghitung Relative Infant Dose (RID), serta mengenali obat-obatan yang aman, obat yang menekan laktasi, dan obat yang mutlak dikontraindikasikan pada ibu menyusui.',
    keyPearls: [
      'Parameter Penetrasi Obat ke ASI:',
      '• Berat Molekul (BM): Obat dengan BM kecil (< 200 Da seperti alkohol dan litium) sangat mudah menembus ASI; obat ber-BM besar (> 800 Da seperti Heparin dan Insulin) tidak mampu menembus ASI.',
      '• Ikatan Protein Plasma: Obat dengan ikatan protein sangat tinggi (> 90% seperti Warfarin dan Ibuprofen) memiliki fraksi bebas kecil sehingga ekskresi ke ASI sangat minimal dan aman.',
      '• Derajat Ionisasi & pH ASI: ASI bersifat sedikit lebih asam (pH ~ 7,2) dibandingkan plasma darah (pH 7,4). Obat yang bersifat BASA LEMAH (seperti narkotika dan beta blocker) akan terperangkap dan terionisasi di ASI (ion trapping).',
      'Relative Infant Dose (RID): Persentase dosis maternal yang diterima bayi per kgBB. Nilai RID < 10% secara umum dianggap aman bagi bayi menyusui.',
      'Analgesik & Antipiretik Pilihan Utama: Parasetamol dan Ibuprofen (RID < 1%, aman pada laktasi). KONTRAINDIKASI: Aspirin (risiko Reye Syndrome pada bayi) dan Kodein/Tramadol (ultra-rapid metabolizer CYP2D6 dapat menyebabkan overdosis morfin fatal pada bayi).',
      'Obat yang Menekan Produksi ASI (Antiprolaktin): Pseudoefedrin (dekongestan oral menurunkan produksi ASI hingga 24%), Bromokriptin, Kabergolin, dan pil kontrasepsi kombinasi yang mengandung Estrogen.',
      'Obat yang Menstimulasi ASI (Galaktagog): Domperidon dan Metoklopramid (antagonis dopamin sentral meningkatkan sekresi prolaktin).'
    ],
    frequentExamPitfalls: [
      'Jangan merekomendasikan dekongestan oral Pseudoefedrin pada ibu menyusui karena dapat menyebabkan penurunan drastis volume produksi ASI.',
      'Kloramfenikol KONTRAINDIKASI MUTLAK pada ibu menyusui bayi baru lahir karena risiko terjadinya Gray Baby Syndrome dan aplasia sumsum tulang idiosinkratik.'
    ],
    referenceStandard: 'Hale\'s Medications & Mothers\' Milk (Thomas W. Hale) & WHO Breastfeeding and Maternal Medication'
  },

  // ==========================================
  // DOMAIN 2: MANAJEMEN, FARMAKOEKONOMI & HUKUM (+4 TOPIK)
  // ==========================================
  {
    id: 'top-pharmacy-financial-bep',
    domainId: 'manajemen',
    title: 'Analisis Keuangan Apotek: Break-Even Point (BEP), ROI, Payback & Rasio Likuiditas',
    category: 'Manajemen Keuangan Farmasi',
    tags: ['BEP', 'ROI', 'Payback Period', 'Likuiditas', 'Current Ratio', 'Turnover Ratio', 'Apotek'],
    summary: 'Pengelolaan finansial apotek mencakup analisis titik impas (Break-Even Point), rasio profitabilitas (ROI, Net Profit Margin), efisiensi perputaran persediaan (Turnover Ratio / TOR), dan rasio kelayakan likuiditas apotek untuk membayar kewajiban jangka pendek kepada PBF.',
    keyPearls: [
      'Rumus Break-Even Point (BEP): Titik di mana total pendapatan sama persis dengan total biaya (Laba = 0).',
      '• BEP (Rupiah / Omzet) = Biaya Tetap / (1 - (Biaya Variabel / Total Penjualan)) = Biaya Tetap / Rasio Margin Kontribusi.',
      '• BEP (Unit) = Biaya Tetap / (Harga Jual per Unit - Biaya Variabel per Unit).',
      'Return on Investment (ROI): Mengukur efisiensi laba bersih yang dihasilkan dari total modal investasi yang ditanamkan: ROI = (Laba Bersih Setelah Pajak / Total Investasi Modal) x 100%.',
      'Payback Period (PP): Waktu yang dibutuhkan untuk mengembalikan nilai investasi awal: PP = Nilai Investasi Awal / Arus Kas Bersih Tahunan.',
      'Inventory Turnover Ratio (ITR / TOR): Mengukur berapa kali persediaan obat berputar dan terjual dalam satu tahun: TOR = Harga Pokok Penjualan (HPP) / Rata-rata Nilai Persediaan Obat. Nilai TOR apotek yang sehat berkisar antara 8 - 12 kali per tahun.',
      'Current Ratio (Rasio Lancar): Mengukur kemampuan apotek membayar hutang dagang jatuh tempo: Current Ratio = Total Aset Lancar / Hutang Lancar. Nilai ideal berkisar 1,5 - 2,0 (150% - 200%).'
    ],
    frequentExamPitfalls: [
      'Dalam perhitungan TOR (Turn Over Ratio), pembilang yang digunakan adalah HARGA POKOK PENJUALAN (HPP), bukan omzet penjualan total, karena persediaan di neraca dicatat berdasarkan harga beli (HPP).',
      'Biaya Tetap (Fixed Cost: sewa gedung, gaji karyawan tetap) tidak berubah terhadap volume penjualan; sedangkan Biaya Variabel (Variable Cost: HPP obat, kemasan plastik, bonus penjualan) berubah sebanding dengan omzet.'
    ],
    referenceStandard: 'Buku Manajemen Farmasi Teori & Kasus Akuntansi Apotek & IAI Modul Manajemen Praktik Mandiri'
  },
  {
    id: 'top-puskesmas-formularium',
    domainId: 'manajemen',
    title: 'Standar Pelayanan Kefarmasian di Puskesmas & Pengelolaan Obat Program (Permenkes 74/2016)',
    category: 'Manajemen Farmasi Komunitas',
    tags: ['Puskesmas', 'Permenkes 74/2016', 'RKO', 'Fornas', 'Obat Program', 'Vaksin', 'Buffer Stock'],
    summary: 'Pelayanan kefarmasian di Puskesmas diatur dalam Permenkes No. 74 Tahun 2016 (diperbarui Permenkes No. 34 Tahun 2022). Ruang lingkupnya mencakup pengelolaan sediaan farmasi (perencanaan melalui RKO, LPLPO) dan pelayanan farmasi klinis, termasuk pengelolaan khusus obat program pemerintah bersubsidi.',
    keyPearls: [
      'Rencana Kebutuhan Obat (RKO): Puskesmas wajib menyusun RKO tahunan menggunakan metode konsumsi dan morbiditas yang terintegrasi, diserahkan ke Dinas Kesehatan Kabupaten/Kota untuk pengadaan terpusat melalui e-Katalog.',
      'Laporan Pemakaian dan Lembar Permintaan Obat (LPLPO): Dokumen resmi bulanan dari Puskesmas ke Instalasi Farmasi Kabupaten/Kota (IFK) yang memuat stok awal, penerimaan, pemakaian, stok akhir, dan jumlah permintaan obat.',
      'Stok Optimum Puskesmas: Stok Optimum = Stok Kerja (kebutuhan 1 periode distribusi) + Buffer Stock (stok penyangga 10-20%) + Lead Time Stock (stok waktu tunggu pengiriman).',
      'Obat Program Pemerintah: Obat TBC (OAT KDT), ARV HIV, Obat Kusta (MDT), Obat Filariasis (Dietilkarbamazin + Albendazol), Vaksin Imunisasi Dasar, Tablet Tambah Darah (Fe + Asam Folat), dan Kapsul Vitamin A dosis tinggi (Kapsul Biru 100.000 IU untuk bayi 6-11 bulan; Kapsul Merah 200.000 IU untuk balita 12-59 bulan dan nifas).',
      'Penyimpanan Vaksin (Cold Chain): Suhu 2°C s.d. 8°C untuk semua vaksin sensitif beku (DPT-HB-Hib, TT, DT, Hepatitis B) dan vaksin campak/BCG. Khusus Vaksin Polio Oral (OPV) disimpan pada suhu -15°C s.d. -25°C di freezer.'
    ],
    frequentExamPitfalls: [
      'Vaksin sensitif beku (Freeze Sensitive: TT, DPT, Hepatitis B) TIDAK BOLEH diletakkan dekat evaporator freezer karena jika membeku partikel emulsi ajuvan aluminium akan rusak permanen (lakukan Shake Test untuk memverifikasi kerusakan).',
      'Kapsul Vitamin A dosis tinggi: Kapsul Biru (100.000 IU) untuk bayi 6-11 bulan (diberikan 1 kali pada Februari/Agustus), Kapsul Merah (200.000 IU) untuk balita 1-5 tahun dan ibu nifas.'
    ],
    referenceStandard: 'Permenkes RI No. 74 Tahun 2016 tentang Standar Pelayanan Kefarmasian di Puskesmas & Permenkes No. 12/2017 tentang Imunisasi'
  },
  {
    id: 'top-pharmacovigilance-naranjo',
    domainId: 'manajemen',
    title: 'Farmakovigilans, Algoritma Kausalitas Naranjo & Pelaporan MESO Form Kuning BPOM',
    category: 'Farmakovigilans & Regulasi',
    tags: ['Farmakovigilans', 'MESO', 'Naranjo', 'Form Kuning', 'BPOM', 'Efek Samping', 'Kausalitas'],
    summary: 'Farmakovigilans adalah aktivitas pemantauan keamanan obat beredar pasca-pemasaran (post-market safety surveillance). Apoteker wajib memonitor kejadian tidak diinginkan (KTD / Adverse Drug Reactions) dan menentukan hubungan sebab-akibat (kausalitas) menggunakan Algoritma Naranjo serta melaporkannya ke Pusat Farmakovigilans Nasional BPOM RI.',
    keyPearls: [
      'Algoritma Naranjo: Instrumen penilaian kausalitas efek samping obat yang terdiri dari 10 pertanyaan dengan skoring terstandar:',
      '• Skor >= 9: DEFINITE / PASTI (Kausalitas sangat meyakinkan: ada riwayat, muncul saat obat diberi, membaik saat distop, muncul kembali saat diberi ulang / rechallenge positif, dan tidak ada faktor perancu lain).',
      '• Skor 5 - 8: PROBABLE / KEMUNGKINAN BESAR (Hubungan temporal masuk akal, membaik saat dechallenge, tidak ada alternatif penyebab lain, tanpa rechallenge).',
      '• Skor 1 - 4: POSSIBLE / MUNGKIN (Hubungan temporal ada, namun kejadian bisa dijelaskan oleh kondisi klinis pasien atau obat lain).',
      '• Skor <= 0: DOUBTFUL / RAGU-RAGU (Kausalitas sangat tidak mungkin berhubungan dengan obat).',
      'Alur Pelaporan MESO: Menggunakan Formulir Kuning (Formulir Pelaporan Efek Samping Obat) yang dapat dikirim secara fisik atau elektronik melalui portal e-MESO BPOM (subsite Pusat Farmakovigilans Nasional).',
      'Kriteria Efek Samping Serius yang Wajib Dilaporkan Segera (< 15 hari kalender): Kematian, mengancam jiwa (life-threatening), membutuhkan rawat inap atau memperpanjang masa rawat, menyebabkan kecacatan permanen, atau kelainan kongenital janin.'
    ],
    frequentExamPitfalls: [
      'Rechallenge (pemberian ulang obat yang dicurigai) TIDAK BOLEH dilakukan sengaja pada efek samping yang berat atau mengancam jiwa (seperti SJS/TEN, anafilaksis, atau nekrosis hepar).',
      'Skor Naranjo 5-8 adalah "Probable" (bukan Definite). Definite hanya tercapai jika skor >= 9.'
    ],
    referenceStandard: 'Pedoman Farmakovigilans BPOM RI & WHO Collaborating Centre for International Drug Monitoring (Uppsala Monitoring Centre)'
  },
  {
    id: 'top-sipnap-reporting',
    domainId: 'manajemen',
    title: 'Sistem Pelaporan Narkotika-Psikotropika (SIPNAP), Lemari Khusus & Penanganan Selisih',
    category: 'Regulasi & Hukum Farmasi',
    tags: ['SIPNAP', 'Narkotika', 'Psikotropika', 'Lemari 2 Kunci', 'Permenkes 3/2015', 'Pemusnahan'],
    summary: 'Ketentuan ketat peredaran dan pengawasan sediaan Narkotika dan Psikotropika diatur dalam UU No. 35/2009 dan Permenkes No. 3 Tahun 2015. Seluruh pemasukan dan pengeluaran sediaan wajib dicatat pada kartu stok dan dilaporkan secara periodik melalui Sistem Informasi Pelaporan Narkotika dan Psikotropika (SIPNAP).',
    keyPearls: [
      'Batas Waktu Pelaporan SIPNAP: Apotek, Rumah Sakit, Klinik, dan Puskesmas WAJIB melaporkan pemasukan dan penggunaan Narkotika serta Psikotropika setiap bulan paling lambat TANGGAL 10 BULAN BERIKUTNYA melalui aplikasi SIPNAP Kementerian Kesehatan.',
      'Pelaporan Tetap Wajib Walau Nihil: Jika dalam bulan berjalan tidak ada transaksi pemasukan maupun pengeluaran, fasilitas tetap WAJIB menyampaikan laporan NIHIL.',
      'Spesifikasi Lemari Penyimpanan Narkotika: Terbuat dari bahan yang kuat dan kokoh; tidak mudah dipindahkan dan menempel pada tembok/lantai; memiliki DUA BUAH KUNCI YANG BERBEDA; anak kunci dipegang oleh Apoteker Penanggung Jawab dan pegawai lain yang dikuasakan.',
      'Pemisahan Lemari: Lemari Narkotika terpisah dari lemari penyimpanan Psikotropika dan tidak boleh digunakan untuk menyimpan barang lain selain sediaan farmasi yang bersangkutan.',
      'Prosedur Pemusnahan Narkotika/Psikotropika: Apoteker mengajukan surat permohonan saksi pemusnahan kepada Dinas Kesehatan Kabupaten/Kota dan/atau Balai POM setempat minimal 3 minggu sebelumnya. Pemusnahan wajib disaksikan oleh petugas berwenang dan dibuat Berita Acara Pemusnahan (BAP) rangkap 3.'
    ],
    frequentExamPitfalls: [
      'Batas pelaporan SIPNAP adalah tanggal 10 setiap bulan (bukan akhir bulan atau tanggal 15).',
      'Lemari narkotika harus memiliki 2 kunci berbeda dan dipegang oleh 2 orang berbeda yang berwenang (bukan 1 orang memegang kedua kunci).'
    ],
    referenceStandard: 'Permenkes RI No. 3 Tahun 2015 tentang Peredaran, Penyimpanan, Pemusnahan, dan Pelaporan Narkotika, Psikotropika, dan Prekursor'
  },

  // ==========================================
  // DOMAIN 3: TEKNOLOGI FARMASI & FORMULASI INDUSTRI (+3 TOPIK)
  // ==========================================
  {
    id: 'top-semisolid-ointment-bases',
    domainId: 'teknologi',
    title: 'Formulasi Sediaan Semipadat & 4 Klasifikasi Basis Salep Standar USP',
    category: 'Teknologi Sediaan Semipadat',
    tags: ['Salep', 'Basis Salep', 'Krim', 'Gel', 'USP', 'Adeps Lanae', 'Vaselin', 'PEG'],
    summary: 'Sediaan semipadat (salep, krim, gel, pasta) membutuhkan pemilihan basis yang tepat sesuai sifat fisikokimia zat aktif, lokasi aplikasi (kulit kering vs basah/eksudatif), dan tujuan pelepasan obat. USP membagi basis salep ke dalam 4 kelompok utama.',
    keyPearls: [
      '4 Klasifikasi Basis Salep (USP / Farmakope Indonesia):',
      '1. Basis Hidrokarbon / Berlemak (Oleaginous Base): Sangat berminyak, bersifat oklusif (mencegah penguapan air kulit), sukar dicuci air, emolien kuat. Contoh: Vaselin Putih (Petrolatum album), Vaselin Kuning, Parafin cair/padat, Cera alba. Cocok untuk kulit kering dan zat aktif yang rentan hidrolisis.',
      '2. Basis Serap / Absorpsi (Absorption Base): Terbagi menjadi: (a) Basis yang memungkinkan penggabungan larutan air membentuk emulsi A/M (contoh: Hydrophilic Petrolatum, Wool Fat / Adeps Lanae anhidrat), dan (b) Basis emulsi A/M yang masih dapat menyerap sedikit air (contoh: Lanolin / Hydrous Wool Fat, Cold Cream).',
      '3. Basis Dapat Dicuci Air (Water-Removable Base): Merupakan emulsi Minyak dalam Air (M/A). Mudah dicuci air, tidak berminyak, dapat diencerkan air, dapat menyerap eksudat luka basah. Contoh: Hydrophilic Ointment, Vanishing Cream.',
      '4. Basis Larut Air (Water-Soluble Base): Bebas lemak, larut sempurna dalam air, tidak mengotori pakaian. Menggunakan polimer Polietilen Glikol (PEG / Makrogol kombinasi bobot molekul cair PEG 400 dan padat PEG 4000).',
      'Formulasi Gel & Pembentuk Gel (Gelling Agent): Karbomer (Carbopol) membutuhkan penetral basa seperti Trietanolamin (TEA) atau NaOH hingga pH 6-7 agar rantai polimer mengembang dan membentuk gel jernih; Na-CMC; HPMC; Metilselulosa.'
    ],
    frequentExamPitfalls: [
      'Pada luka basah/eksudatif bernanah, JANGAN GUNAKAN BASIS HIDROKARBON (Vaselin) karena oklusif dan memperparah maserasi; gunakan basis krim M/A atau gel yang dapat menyerap cairan eksudat.',
      'Adeps Lanae (Wool Fat anhidrat) dapat menyerap air hingga 2x bobotnya membentuk emulsi A/M (Air dalam Minyak), bukan M/A.'
    ],
    referenceStandard: 'United States Pharmacopeia (USP-NF) & Farmakope Indonesia Edisi VI (Sediaan Semisolid)'
  },
  {
    id: 'top-effervescent-odt',
    domainId: 'teknologi',
    title: 'Teknologi Tablet Khusus: Tablet Effervescent, Tablet Kunyah & Orally Disintegrating Tablets (ODT)',
    category: 'Teknologi Sediaan Padat',
    tags: ['Effervescent', 'ODT', 'Tablet Kunyah', 'Superdisintegrant', 'Croscarmellose', 'RH Ruangan'],
    summary: 'Pengembangan tablet khusus ditujukan untuk meningkatkan kepatuhan pasien pediatrik/geriatrik dan mempercepat onset. Tablet Effervescent melepaskan CO2 saat bereaksi dengan air, sedangkan ODT terdisintegrasi instan dalam hitungan detik di rongga mulut tanpa memerlukan air minum.',
    keyPearls: [
      'Prinsip Tablet Effervescent: Reaksi antara senyawa asam organik dan garam karbonat/bikarbonat dalam air menghasilkan gas Karbon Dioksida (CO2) yang memberikan rasa segar dan menyamarkan rasa pahit zat aktif.',
      'Kombinasi Asam-Basa Effervescent: Kombinasi Asam Sitrat dan Asam Tartrat (dengan perbandingan stoikiometri 1:2) dicampur dengan Natrium Bikarbonat. Asam sitrat tunggal menghasilkan massa lengket sulit dikempa, sedangkan asam tartrat tunggal menghasilkan granul rapuh mudah hancur.',
      'Kondisi Khusus Ruang Produksi Effervescent: Wajib dikendalikan pada Kelembaban Relatif (RH) SANGAT RENDAH (RH < 25%) dan suhu dingin (< 25°C) untuk mencegah reaksi kimia prematur selama granulasi dan pencetakan.',
      'Orally Disintegrating Tablets (ODT): Tablet yang terdisintegrasi cepat di rongga mulut dalam waktu < 60 detik (ideal < 30 detik) saat kontak dengan air liur.',
      'Pemilihan Superdisintegran ODT: Menggunakan bahan penghancur super (superdisintegrants) pada konsentrasi 2 - 8%:',
      '• Croscarmellose Sodium (Ac-Di-Sol): Selulosa berikatan silang, mekanisme mengembang (swelling) dan sumbu kapiler (wicking).',
      '• Crospovidone (Polyplasdone XL): Polivinilpirolidon berikatan silang, mekanisme wicking sangat cepat tanpa membentuk gel tebal.',
      '• Sodium Starch Glycolate (Explotab / Primojel): Pati termodifikasi, mengembang hingga 200-300x volume semula saat terkena air liur.'
    ],
    frequentExamPitfalls: [
      'Pada pencetakan tablet effervescent, kelembaban ruangan (RH) di atas 25% akan menyebabkan tablet mengalami pelepasan CO2 prematur dan melekat pada punch mesin (sticking hebat).',
      'Tablet kunyah (chewable tablet) TIDAK BOLEH ditambahkan bahan penghancur (disintegrant) karena diharapkan hancur mekanik oleh kunyahan gigi dan menggunakan basis pemanis Manitol (memberikan cooling sensation di mulut).'
    ],
    referenceStandard: 'Pharmaceutical Dosage Forms: Tablets (Augsburger & Hoag) & Pedoman CPOB Pembuatan Tablet Khusus'
  },
  {
    id: 'top-wfi-purified-water',
    domainId: 'teknologi',
    title: 'Sistem Pengolahan Air untuk Farmasi: Water for Injection (WFI), Purified Water & Looping System',
    category: 'CPOB & Sarana Penunjang Kritis',
    tags: ['WFI', 'Purified Water', 'CPOB', 'Endotoksin', 'TOC', 'Konduktivitas', 'Looping System'],
    summary: 'Air merupakan bahan baku paling banyak digunakan dalam industri farmasi. Sistem pengolahan air (Water Treatment System) harus divalidasi dan dipantau secara ketat untuk menghasilkan Air Murni (Purified Water / PW) dan Air untuk Injeksi (Water for Injection / WFI) yang memenuhi standar farmakope.',
    keyPearls: [
      'Air Murni (Purified Water / PW): Dihasilkan dari air sumur/PAM melalui tahapan Multimedia Filter -> Carbon Filter (adsorpsi klorin) -> Water Softener -> Reverse Osmosis (RO) ganda -> Deionizer / Elektrodeionisasi (EDI). Digunakan untuk produksi sediaan non-steril dan pencucian awal.',
      'Air untuk Injeksi (Water for Injection / WFI): Dihasilkan dari Purified Water melalui proses DESTILASI BERGULING (Multi-Effect Still / Vapor Compression Distillation). Digunakan sebagai pelarut sediaan steril parenteral.',
      'Spesifikasi Mutu WFI (Farmakope Indonesia VI / USP):',
      '• Konduktivitas: <= 1,3 μS/cm pada suhu 25°C.',
      '• Total Organic Carbon (TOC): < 500 ppb (atau < 0,5 mg/L).',
      '• Endotoksin Bakteri: < 0,25 EU/mL (diuji dengan metode LAL / Limulus Amebocyte Lysate).',
      '• Angka Mikroba Viabel: < 10 CFU / 100 mL (pada WFI) vs < 100 CFU / mL (pada Purified Water).',
      'Sistem Distribusi Air (Looping Circulation): WFI wajib disimpan dan disirkulasikan secara terus menerus dalam sistem perpipaan melingkar (looping) tertutup dengan aliran turbulen (kecepatan > 1-1,5 m/detik) pada SUHU PANAS KONSTAN (minimal > 70°C, ideal 80-85°C) untuk mencegah pembentukan biofilm bakteri gram negatif.'
    ],
    frequentExamPitfalls: [
      'Reverse Osmosis (RO) saja belum diakui secara penuh di Farmakope Indonesia VI untuk menghasilkan WFI tanpa proses DESTILASI bertingkat.',
      'Sistem perpipaan air farmasi TIDAK BOLEH memiliki bagian pipa buntu (Dead Leg) dengan rasio panjang terhadap diameter lebih dari 1,5 (L > 1,5 D) karena merupakan tempat berkembang biak biofilm mikroba.'
    ],
    referenceStandard: 'Petunjuk Operasional Penerapan CPOB Aneks Pengolahan Air & Farmakope Indonesia VI Lampiran <1121>'
  },

  // ==========================================
  // DOMAIN 4: FARMASI BAHAN ALAM & FITOFARMAKA (+3 TOPIK)
  // ==========================================
  {
    id: 'top-phytochemical-screening-advanced',
    domainId: 'bahan_alam',
    title: 'Uji Skrining Fitokimia Golongan Senyawa Aktif Metabolit Sekunder',
    category: 'Fitokimia & Analisis Bahan Alam',
    tags: ['Fitokimia', 'Skrining', 'Alkaloid', 'Flavonoid', 'Tanin', 'Saponin', 'Antrakuinon', 'Steroid'],
    summary: 'Skrining fitokimia kualitatif merupakan tahap awal pengujian bahan alam untuk mengidentifikasi keberadaan golongan metabolit sekunder (alkaloid, flavonoid, tanin, saponin, antrakuinon, dan steroid/terpenoid) menggunakan reagen warna dan presipitasi spesifik.',
    keyPearls: [
      'Reagen & Hasil Positif Identifikasi Golongan Senyawa:',
      '• ALKALOID: Filtrat diasamkan dengan HCl encer, dibagi 3 tabung:',
      '  - Pereaksi Dragendorff (Kalium bismut iodida) -> Terbentuk endapan JINGGA / COKELAT KEMERAHAN.',
      '  - Pereaksi Mayer (Kalium raksa iodida) -> Terbentuk endapan PUTIH atau KEKUNINGAN.',
      '  - Pereaksi Wagner (Larutan Iodium dalam Kalium Iodida) -> Terbentuk endapan COKELAT gelap.',
      '• FLAVONOID: Reaksi Wilstätter / Shinoda Test (Filtrat + serbuk serbuk logam Magnesium Mg + HCl pekat 37%) -> Menghasilkan warna MERAH JINGGA, MERAH TUA, atau MAGENTA cerah.',
      '• TANIN & POLIFENOL: Penambahan larutan Besi(III) Klorida (FeCl3 1%):',
      '  - Tanin Terhidrolisis (gallic acid unit) -> Menghasilkan warna BIRU KEHITAMAN.',
      '  - Tanin Terkondensasi / Katekol -> Menghasilkan warna HIJAU KEHITAMAN.',
      '• SAPONIN: Uji Busa (Forth Test): Pengocokan vertikal kuat selama 10 detik dengan air panas suling -> Terbentuk busa padat setinggi >= 1 cm yang STABIL TIDAK HILANG MINIMAL 10 MENIT dan tidak hilang dengan penambahan 1 tetes asam klorida encer.',
      '• STEROID & TRITERPENOID: Reaksi Liebermann-Burchard (Anhidrida Asetat + Asam Sulfat pekat H2SO4):',
      '  - Golongan TRITERPENOID -> Memberikan warna MERAH / JINGGA KEMERAHAN.',
      '  - Golongan STEROID -> Memberikan warna HIJAU KEBIRUAN.',
      '• ANTRAKUINON (Glikosida Antrasen): Reaksi Bornträger (Ekstraksi dengan pelarut organik non-polar benzena/kloroform + fase amonia encer) -> Lapisan amonia berwarna MERAH MUDA / MERAH INTENS.'
    ],
    frequentExamPitfalls: [
      'Uji Mayer pada alkaloid menghasilkan endapan putih/kuning, sedangkan Dragendorff menghasilkan endapan jingga/cokelat (jangan tertukar).',
      'Pada reaksi Liebermann-Burchard, warna HIJAU menandakan steroid, sedangkan warna MERAH/UNGU menandakan triterpenoid.'
    ],
    referenceStandard: 'Metode Fitokimia Penuntun Cara Modern Menganalisis Tumbuhan (Harborne) & Farmakope Herbal Indonesia Edisi II'
  },
  {
    id: 'top-heavy-metals-destruction',
    domainId: 'bahan_alam',
    title: 'Metode Destruksi & Pengujian Cemaran Logam Berat Toksik (Pb, Cd, As, Hg) pada Bahan Alam',
    category: 'Standardisasi & Mutu Herbal',
    tags: ['Logam Berat', 'Destruksi', 'AAS', 'Timbal', 'Kadmium', 'Arsen', 'Merkuri', 'BPOM'],
    summary: 'Simplisia dan ekstrak tumbuhan obat rentan terkontaminasi logam berat toksik dari tanah, air irigasi, atau pupuk kimia. Penentuan kadar logam berat membutuhkan preparasi destruksi matriks organik (destruksi basah atau kering) sebelum dianalisis dengan instrumen canggih (AAS atau ICP-MS).',
    keyPearls: [
      'Metode Preparasi Sampel (Destruksi Matriks):',
      '• Destruksi Basah (Wet Digestion): Pemanasan sampel bersama asam-asam pengoksidasi kuat (Asam Nitrat pekat HNO3, Asam Sulfat H2SO4, atau Asam Perklorat HClO4 dengan H2O2) pada suhu terukur dalam labu Kjeldahl atau microwave digester. SANGAT DIUTAMAKAN untuk analisis logam yang mudah menguap (volatil) seperti MERKURI (Hg) dan ARSEN (As).',
      '• Destruksi Kering (Dry Ashing): Pengabuan sampel dalam tanur listrik (muffle furnace) pada suhu tinggi 450 - 500°C hingga terbentuk abu putih bebas karbon, lalu abu dilarutkan dalam asam encer. Cocok untuk Timbal (Pb) dan Kadmium (Cd), tetapi TIDAK BOLEH untuk Merkuri karena Hg akan menguap habis pada suhu > 350°C.',
      'Batas Maksimal Cemaran Logam Berat (Peraturan BPOM RI No. 32 Tahun 2019):',
      '• Timbal (Pb): <= 10 mg/kg (ppm).',
      '• Kadmium (Cd): <= 0,3 mg/kg (ppm).',
      '• Arsen (As): <= 5 mg/kg (ppm).',
      '• Merkuri (Hg): <= 0,5 mg/kg (ppm).',
      'Metode Instrumentasi: Spektrofotometri Serapan Atom (AAS) menggunakan teknik Nyala Api (Flame-AAS) untuk Pb/Cd, Cold Vapor (CV-AAS) khusus Merkuri Hg, atau Hydride Generation (HG-AAS) khusus Arsen As.'
    ],
    frequentExamPitfalls: [
      'Untuk analisis MERKURI (Hg), DILARANG MENGGUNAKAN DESTRUKSI KERING (tanur 500°C) karena merkuri memiliki titik didih rendah dan akan hilang menguap (volatilisasi). Wajib gunakan destruksi basah tertutup.',
      'Batas toleransi Kadmium (Cd) adalah yang paling ketat (<= 0,3 ppm), bukan 10 ppm.'
    ],
    referenceStandard: 'Peraturan BPOM RI No. 32 Tahun 2019 tentang Persyaratan Keamanan dan Mutu Obat Bahan Alam & FHI Edisi II'
  },
  {
    id: 'top-essential-oil-stahl',
    domainId: 'bahan_alam',
    title: 'Penetapan Kadar Minyak Atsiri dengan Alat Stahl & Parameter Khusus Simplisia Aromatik',
    category: 'Standardisasi & Mutu Herbal',
    tags: ['Minyak Atsiri', 'Alat Stahl', 'Destilasi', 'Jahe', 'Temulawak', 'Kadar Air', 'Karl Fischer'],
    summary: 'Simplisia aromatik (seperti rimpang Zingiberaceae, kulit kayu manis, bunga cengkeh, daun mint) mengandung minyak atsiri volatil yang memiliki khasiat terapeutik. Penetapan kadar minyak atsiri wajib menggunakan aparatus destilasi khusus (Alat Stahl), dan penetapan kadar airnya tidak boleh menggunakan oven 105°C.',
    keyPearls: [
      'Prinsip Kerja Aparatus Stahl: Menggunakan metode Destilasi Uap-Air (Hydro-distillation). Uap air membawa minyak atsiri menguap bersama, lalu terkondensasi di pendingin dan ditampung dalam tabung berskala volumetrik yang terhubung dengan buret pengukur.',
      'Pembacaan Kadar Minyak Atsiri: Minyak atsiri yang memiliki berat jenis (BJ) lebih kecil dari air (BJ < 1,0 seperti minyak jahe, minyak permen) akan mengapung di lapisan atas air dalam buret Stahl, dan volume minyak atsiri dapat langsung dibaca dalam satuan % volume per bobot (% v/b).',
      'Khusus Minyak Atsiri Berat (BJ > 1,0): Seperti minyak cengkeh (mengandung Eugenol BJ ~ 1,06) yang tenggelam di bawah air, ke dalam tabung buret Stahl ditambahkan pelarut organik berdensitas rendah (misal Xilen dalam volume terukur) untuk melarutkan eugenol sehingga dapat mengapung dan terbaca.',
      'Dilema Kadar Air Simplisia Minyak Atsiri:',
      '• Metode Susut Pengeringan (Oven 105°C) KONTRAINDIKASI untuk simplisia aromatik karena minyak atsiri akan ikut menguap bersama air, menyebabkan hasil overestimasi (positif palsu tinggi).',
      '• Metode Wajib Kadar Air: Destilasi Azeotropik Toluen (Alat Dean-Stark) ATAU Titrasi Karl Fischer (reaksi iodium, sulfur dioksida, dan basa dengan air secara stoikiometri spesifik).'
    ],
    frequentExamPitfalls: [
      'Pertanyaan klasik ujian: "Metode manakah yang tepat untuk menetapkan kadar air rimpang Jahe/Temulawak?" Jawabannya adalah DESTILASI TOLUEN atau KARL FISCHER, BUKAN susut pengeringan oven 105°C.',
      'Minyak cengkeh membutuhkan penambahan Xilen pada alat Stahl karena densitas eugenol lebih berat daripada air (tenggelam).'
    ],
    referenceStandard: 'Farmakope Herbal Indonesia (FHI) Edisi II Lampiran Penetapan Kadar Minyak Atsiri & Materia Medika Indonesia'
  }
];
