import { ExamQuestion } from '../competencyExamData';

/**
 * Bank Soal Kasus Vignette CBT Bagian 5 (Nomor q-266 s/d q-345)
 * Rekonstruksi Ujian Nasional Resmi UKMPPAI (Apoteker) & UKTVK (Vokasi TTK)
 * 80 Soal Kasus Nyata Farmasi Klinis, Farmakoterapi Lanjutan & Toksikologi Kritis
 */
export const CBT_EXPANSION_PART_5: ExamQuestion[] = [
  // =========================================================================
  // 🩺 KARDIOVASKULAR, HEMODINAMIK & KEGAWATDARURATAN
  // =========================================================================
  {
    id: 'q-266',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien laki-laki berusia 59 tahun dilarikan ke IGD dengan nyeri dada retrosternal menjalar ke lengan kiri dan rahang sejak 2 jam lalu. EKG menunjukkan ST-elevasi di lead II, III, dan aVF (STEMI Inferior). Pasien direncanakan menjalani Percutaneous Coronary Intervention (PCI) primer. Pasien memiliki riwayat alergi berat terhadap Klopidogrel (angioedema).',
    question: 'Obat antiplatelet penghambat reseptor P2Y12 oral manakah yang paling tepat dipilihkan oleh apoteker sebagai alternatif kombinasi dengan Aspirin sebelum tindakan PCI?',
    options: [
      { key: 'A', text: 'Tikagrelor loading dose 180 mg oral' },
      { key: 'B', text: 'Tiklopidin 250 mg oral' },
      { key: 'C', text: 'Dipiridamol 100 mg oral' },
      { key: 'D', text: 'Silostazol 100 mg oral' },
      { key: 'E', text: 'Tirofiban IV bolus tunggal' }
    ],
    correctAnswer: 'A',
    explanation: 'Pada pasien STEMI yang menjalani PCI primer, pedoman ESC dan PERKI merekomendasikan Dual Antiplatelet Therapy (DAPT) berbasis Aspirin ditambah penghambat P2Y12 poten yaitu TIKAGRELOR (loading dose 180 mg) atau PRASUGREL (loading dose 60 mg). Jika pasien memiliki riwayat hipersensitivitas terhadap golongan thienopyridine seperti Klopidogrel, Tikagrelor adalah pilihan ideal karena merupakan kelas non-thienopyridine (siklopentiltriazolopirimidin) yang berikatan secara reversibel dan memiliki onset lebih cepat serta efikasi superior.',
    clinicalReference: 'Pedoman Tatalaksana Sindrom Koroner Akut PERKI & ESC Guidelines for the Management of Acute Myocardial Infarction',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-267',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien wanita berusia 62 tahun dengan riwayat Gagal Jantung Fraksi Ejeksi Menurun (HFrEF, EF 28%, NYHA Class III) datang kontrol rutin. Pasien saat ini rutin mengonsumsi Bisoprolol 5 mg/hari, Enalapril 10 mg bid, dan Spironolakton 25 mg/hari. Dokter spesialis jantung berencana mengganti Enalapril ke kombinasi Angiotensin Receptor-Neprilysin Inhibitor (ARNI) Sakubitril/Valsartan untuk menurunkan mortalitas kardiovaskular.',
    question: 'Berapakah periode jeda (washout period) minimal yang WAJIB dipatuhi sejak dosis terakhir Enalapril sebelum dosis pertama Sakubitril/Valsartan diberikan?',
    options: [
      { key: 'A', text: '12 jam' },
      { key: 'B', text: '24 jam' },
      { key: 'C', text: '36 jam' },
      { key: 'D', text: '48 jam' },
      { key: 'E', text: '72 jam' }
    ],
    correctAnswer: 'C',
    explanation: 'Ketika beralih dari obat golongan ACE Inhibitor (seperti Enalapril, Kaptopril, Ramipril) ke Sakubitril/Valsartan (ARNI), WAJIB diberlakukan masa jeda bebas obat (washout period) minimal 36 JAM sejak penghentian ACEI. Hal ini mutlak diperlukan karena penghambatan ganda terhadap enzim ACE dan Neprilysin secara simultan meningkatkan akumulasi bradikinin secara masif yang dapat memicu ANGIOEDEMA fatal yang mengancam nyawa. Jika beralih dari ARB, washout period 36 jam tidak diwajibkan.',
    clinicalReference: 'Pedoman Penatalaksanaan Gagal Jantung PERKI & ACC/AHA/HFSA Heart Failure Guidelines',
    difficulty: 'Sedang'
  },
  {
    id: 'q-268',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang pasien laki-laki berusia 67 tahun dengan Fibrilasi Atrium non-valvular (skor CHA2DS2-VASc = 4) datang ke instalasi farmasi membawa resep Apiksaban 5 mg bid. Pasien berusia 81 tahun, berat badan 52 kg, dan nilai Serum Kreatinin terakhir tercatat 1,7 mg/dL.',
    question: 'Apakah rekomendasi penyesuaian dosis Apiksaban yang tepat diberikan oleh apoteker berdasarkan kriteria penyesuaian dosis pada pasien tersebut?',
    options: [
      { key: 'A', text: 'Dosis tetap 5 mg 2 kali sehari' },
      { key: 'B', text: 'Turunkan dosis menjadi 2,5 mg 2 kali sehari' },
      { key: 'C', text: 'Tingkatkan dosis menjadi 10 mg 1 kali sehari' },
      { key: 'D', text: 'Hentikan Apiksaban dan ganti dengan Warfarin' },
      { key: 'E', text: 'Berikan Apiksaban 2,5 mg 1 kali sehari selang-seling' }
    ],
    correctAnswer: 'B',
    explanation: 'Kriteria penyesuaian dosis Apiksaban pada Fibrilasi Atrium non-valvular: Dosis standar adalah 5 mg dua kali sehari. Dosis harus DITURUNKAN MENJADI 2,5 mg DUA KALI SEHARI jika pasien memenuhi minimal 2 dari 3 kriteria ABC berikut: (1) Age >= 80 tahun (pasien 81 th); (2) Body weight <= 60 kg (pasien 52 kg); (3) Serum Creatinine >= 1,5 mg/dL (pasien 1,7 mg/dL). Karena pasien memenuhi ketiga kriteria tersebut, dosis wajib disesuaikan menjadi 2,5 mg bid untuk mencegah risiko perdarahan mayor.',
    clinicalReference: 'Pedoman Tata Laksana Fibrilasi Atrium PERKI & FDA Prescribing Information for Eliquis (Apixaban)',
    difficulty: 'Sedang'
  },
  {
    id: 'q-269',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien laki-laki berusia 71 tahun dirawat di ICU dengan Syok Septik refrakter cairan. Tekanan Darah 75/40 mmHg (MAP 51 mmHg) meskipun telah diberikan resusitasi cairan kristaloid 30 mL/kgBB. Dokter meminta apoteker menyiapkan vasopresor lini pertama pilihan utama untuk mencapai target MAP >= 65 mmHg.',
    question: 'Obat vasopresor intravena lini pertama manakah yang direkomendasikan pada kasus tersebut?',
    options: [
      { key: 'A', text: 'Norepinefrin infus kontinu' },
      { key: 'B', text: 'Dopamin infus dosis rendah' },
      { key: 'C', text: 'Fenilefrin bolus intermiten' },
      { key: 'D', text: 'Epinefrin bolus cepat' },
      { key: 'E', text: 'Isoproterenol infus kontinu' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan pedoman Surviving Sepsis Campaign (SSC) 2021, vasopresor pilihan pertama (first-line agent) untuk syok septik adalah NOREPINEFRIN infus kontinu dititrasi hingga target Mean Arterial Pressure (MAP) >= 65 mmHg. Norepinefrin memiliki efek agonis alfa-1 kuat (vasokonstriksi perifer) disertai efek beta-1 moderat tanpa memicu takiaritmia berlebihan dibandingkan Dopamin. Jika target MAP belum tercapai, Vasopresin atau Epinefrin dapat ditambahkan sebagai lini kedua.',
    clinicalReference: 'Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021',
    difficulty: 'Mudah'
  },
  {
    id: 'q-270',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang pasien wanita berusia 54 tahun dengan hipertensi grade II dan diabetes mellitus tipe 2 diresepkan kombinasi Amlodipin 10 mg dan Kandesartan 16 mg. Setelah 4 minggu pemakaian rutin, pasien kembali mengeluh kedua pergelangan kakinya bengkak (edema pretibial bilateral) tanpa rasa nyeri atau sesak napas. Tanda vital TD 128/82 mmHg.',
    question: 'Apakah mekanisme patofisiologi utama penyebab edema perifer pada pasien tersebut?',
    options: [
      { key: 'A', text: 'Retensi natrium dan air akibat aktivasi aldosteron oleh ARB' },
      { key: 'B', text: 'Vasodilatasi arteriol prekapiler selektif yang meningkatkan tekanan hidrostatik kapiler' },
      { key: 'C', text: 'Penurunan permeabilitas vaskular sistemik' },
      { key: 'D', text: 'Vasokonstriksi venula post-kapiler akibat hambatan kalsium miokard' },
      { key: 'E', text: 'Hipoalbuminemia akibat kebocoran glomerulus ginjal' }
    ],
    correctAnswer: 'B',
    explanation: 'Edema perifer akibat Calcium Channel Blocker (CCB) golongan dihidropiridin (seperti Amlodipin) terjadi akibat VASODILATASI ARTERIOL PREKAPILER yang poten tanpa disertai vasodilatasi venula postkapiler yang seimbang. Hal ini menyebabkan peningkatan tekanan hidrostatik intrakapiler sehingga cairan plasma merembes keluar ke ruang interstisial tungkai bawah. Efek ini bukan merupakan retensi cairan ginjal murni sehingga pemberian diuretik kurang efektif, melainkan dapat dikurangi dengan menambahkan ACEI/ARB yang merelaksasi venula postkapiler.',
    clinicalReference: 'Goodman & Gilman The Pharmacological Basis of Therapeutics & Farmakologi Pendekatan Klinis',
    difficulty: 'Sedang'
  },

  // =========================================================================
  // 🩺 ENDOKRIN, METABOLIK & KRISIS HIPERGLIKEMIA
  // =========================================================================
  {
    id: 'q-271',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang remaja wanita berusia 19 tahun penderita Diabetes Mellitus Tipe 1 dibawa ke IGD dalam keadaan somnolen, napas cepat dan dalam berbau buah (Kussmaul), dan turgor kulit menurun drastis. Hasil laboratorium: GDS 480 mg/dL, pH darah 7,15, bikarbonat serum 10 mEq/L, keton urin positif +++, dan Kalium serum 3,1 mEq/L. Dokter mendiagnosis Ketoasidosis Diabetik (KAD).',
    question: 'Tindakan awal manakah yang WAJIB dilakukan apoteker dan tim medis sebelum memulai infus insulin reguler intravena?',
    options: [
      { key: 'A', text: 'Segera berikan bolus Insulin Reguler 0,14 IU/kgBB IV' },
      { key: 'B', text: 'Koreksi hipokalemia dengan infus KCl hingga kadar K+ > 3,3 mEq/L terlebih dahulu' },
      { key: 'C', text: 'Berikan Natrium Bikarbonat 100 mEq bolus cepat' },
      { key: 'D', text: 'Berikan infus Dekstrosa 10% untuk mencegah syok hipoglikemik' },
      { key: 'E', text: 'Segera berikan injeksi Insulin Glargin subkutan' }
    ],
    correctAnswer: 'B',
    explanation: 'Pada protokol tata laksana KAD/HHS (ADA Guidelines & PERKENI), jika kadar Kalium serum < 3,3 mEq/L, PEMBERIAN INSULIN HARUS DITUNDA SEMENTARA. Terapi yang wajib diprioritaskan adalah rehidrasi cairan dan suplementasi Kalium intravena (KCl 20-30 mEq/jam) sampai kadar K+ meningkat > 3,3 mEq/L. Memberikan insulin saat pasien hipokalemia berat akan memicu pergeseran kalium masif ke intraseluler yang dapat menyebabkan aritmia jantung fatal, henti jantung, dan kelemahan otot pernapasan.',
    clinicalReference: 'ADA Standards of Care in Diabetes & Pedoman Pengelolaan KAD PERKENI',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-272',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang wanita hamil berusia 28 tahun (usia kehamilan 26 minggu) terdiagnosis Diabetes Mellitus Gestasional (GDM) setelah uji toleransi glukosa oral (TTGO) 75 g menunjukkan kadar glukosa puasa 118 mg/dL dan 2 jam pasca beban 185 mg/dL. Upaya modifikasi gaya hidup dan diet selama 2 minggu belum berhasil mencapai target glikemik.',
    question: 'Terapi farmakoterapi lini pertama manakah yang paling aman dan direkomendasikan untuk pasien tersebut?',
    options: [
      { key: 'A', text: 'Glibenklamid 5 mg oral' },
      { key: 'B', text: 'Insulin Human / Analog Insulin' },
      { key: 'C', text: 'Pioglitazon 15 mg oral' },
      { key: 'D', text: 'Dapagliflozin 10 mg oral' },
      { key: 'E', text: 'Glimepirid 2 mg oral' }
    ],
    correctAnswer: 'B',
    explanation: 'Berdasarkan pedoman ADA, ACOG, dan POGI/PERKENI, INSULIN merupakan terapi lini pertama baku emas untuk Diabetes Mellitus Gestasional (GDM) yang tidak terkontrol dengan diet dan aktivitas fisik. Insulin tidak menembus barier plasenta dalam jumlah bermakna sehingga aman bagi janin dan mampu mengontrol glukosa darah ibu secara presisi tanpa risiko teratogenesis atau makrosomia janin.',
    clinicalReference: 'ACOG Practice Bulletin No. 190: Gestational Diabetes Mellitus & ADA Standards of Care',
    difficulty: 'Mudah'
  },
  {
    id: 'q-273',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang wanita berusia 34 tahun dengan penyakit Graves (Hipertiroidisme) yang sedang hamil trimester pertama (usia kehamilan 8 minggu) datang ke poliklinik untuk memulai terapi antitiroid.',
    question: 'Obat antitiroid pilihan utama manakah yang wajib direkomendasikan apoteker pada trimester pertama kehamilan beserta alasannya?',
    options: [
      { key: 'A', text: 'Propiltiourasil (PTU), karena risiko embriopati/teratogenik lebih rendah daripada Metimazol' },
      { key: 'B', text: 'Metimazol, karena tidak menimbulkan efek samping hepatotoksisitas pada ibu' },
      { key: 'C', text: 'Radioaktif Iodin (I-131), karena mampu mengeradikasi kelenjar tiroid secara permanen' },
      { key: 'D', text: 'Larutan Lugol jenuh, karena aman dikonsumsi sepanjang kehamilan' },
      { key: 'E', text: 'Karbimazol, karena bioavailabilitasnya paling stabil' }
    ],
    correctAnswer: 'A',
    explanation: 'Pada TRIMESTER PERTAMA kehamilan (fase organogenesis), PROPILTIOURASIL (PTU) adalah obat pilihan utama karena Metimazol/Karbimazol dikaitkan dengan risiko malformasi kongenital serius (Metimazol embryopathy, seperti aplasia kutis dan atresia koana/esofagus). Namun, saat memasuki trimester kedua dan ketiga, terapi umumnya dialihkan kembali ke Metimazol untuk menghindari risiko hepatotoksisitas fulminan berat akibat akumulasi PTU jangka panjang.',
    clinicalReference: 'American Thyroid Association (ATA) Guidelines for Diagnosis and Management of Hyperthyroidism during Pregnancy',
    difficulty: 'Sedang'
  },
  {
    id: 'q-274',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien laki-laki berusia 60 tahun dengan DM tipe 2 dan riwayat infark miokard 1 tahun lalu datang membawa hasil laboratorium: HbA1c 8,4%, eGFR 65 mL/min/1,73m2, dan BMI 31 kg/m2 (obesitas kelas 1). Pasien saat ini sudah mengonsumsi Metformin 1000 mg bid.',
    question: 'Golongan antidiabetik oral kedua manakah yang memiliki bukti klinis terkuat dalam menurunkan kejadian kardiovaskular mayor (MACE) sekaligus membantu penurunan berat badan?',
    options: [
      { key: 'A', text: 'Glimepirid (Sulfonilurea)' },
      { key: 'B', text: 'GLP-1 Receptor Agonist atau SGLT2 Inhibitor' },
      { key: 'C', text: 'Pioglitazon (Thiazolidinedione)' },
      { key: 'D', text: 'Akarbosa (Alfa-glukosidase inhibitor)' },
      { key: 'E', text: 'Repaglinid (Meglitinid)' }
    ],
    correctAnswer: 'B',
    explanation: 'Pada pasien DM tipe 2 dengan komorbid penyakit kardiovaskular aterosklerotik (ASCVD, seperti riwayat infark miokard), pedoman PERKENI dan ADA merekomendasikan penambahan GLP-1 RECEPTOR AGONIST (seperti Liraglutide, Semaglutide) atau SGLT2 INHIBITOR (seperti Empagliflozin, Dapagliflozin) yang terbukti secara klinis menurunkan mortalitas kardiovaskular (MACE) serta memberikan manfaat penurunan berat badan yang signifikan tanpa memicu hipoglikemia.',
    clinicalReference: 'Pedoman Pengelolaan dan Pencegahan DM Tipe 2 Dewasa di Indonesia PERKENI & ADA/EASD Consensus',
    difficulty: 'Mudah'
  },

  // =========================================================================
  // 🩺 INFEKSI, RESISTENSI ANTIMIKROBA & PROTOKOL ICU
  // =========================================================================
  {
    id: 'q-275',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien laki-laki berusia 45 tahun terdiagnosis Tuberkulosis Paru Resistan Obat (TB-MDR) dengan resistensi terkonfirmasi terhadap Rifampisin dan Isoniazid berdasarkan hasil GeneXpert MTB/RIF dan uji kepekaan obat. Pasien akan memulai paduan pengobatan jangka pendek (all-oral short regimen) yang mengandung Bedaquiline.',
    question: 'Pemeriksaan penunjang berkala apakah yang WAJIB dimonitor secara ketat oleh apoteker terkait efek samping kardiovaskular paling kritis dari Bedaquiline?',
    options: [
      { key: 'A', text: 'Elektrokardiografi (EKG) untuk pemantauan interval QTc' },
      { key: 'B', text: 'Ekokardiografi untuk fraksi ejeksi ventrikel kiri' },
      { key: 'C', text: 'Enzim troponin T jantung setiap minggu' },
      { key: 'D', text: 'USG Doppler vaskular ekstremitas bawah' },
      { key: 'E', text: 'Rontgen toraks lateral setiap 2 minggu' }
    ],
    correctAnswer: 'A',
    explanation: 'BEDAQUILINE adalah antibiotik golongan diarilkuinolin baru yang sangat esensial untuk TB-MDR. Toksisitas paling kritis dari Bedaquiline adalah PEMANJANGAN INTERVAL QTc pada EKG yang dapat memicu aritmia ventrikel mematikan (Torsades de Pointes), terutama bila dikombinasikan dengan obat lain yang juga memperpanjang QT (seperti Levofloksasin, Moksifloksasin, atau Klofazimin). Oleh karena itu, pemeriksaan EKG berkala dan pemantauan elektrolit (Kalium, Kalsium, Magnesium) wajib dilakukan.',
    clinicalReference: 'Petunjuk Teknis Pengobatan TB Resistan Obat Kementerian Kesehatan RI & WHO Consolidated Guidelines on Tuberculosis',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-276',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien laki-laki berusia 68 tahun dirawat di bangsal paru dengan Community-Acquired Pneumonia (CAP) derajat berat dengan skor CURB-65 = 3. Pasien tidak memiliki riwayat alergi obat dan tidak memiliki faktor risiko infeksi Pseudomonas aeruginosa.',
    question: 'Kombinasi antibiotik empiris intravena lini pertama manakah yang paling tepat direkomendasikan sesuai pedoman PDPI dan IDSA/ATS?',
    options: [
      { key: 'A', text: 'Seftriakson 2 g IV q24h + Azitromisin 500 mg IV q24h' },
      { key: 'B', text: 'Siprofloksasin 400 mg IV q12h monoterapi' },
      { key: 'C', text: 'Vankomisin 1 g IV q12h monoterapi' },
      { key: 'D', text: 'Ampisilin 500 mg IV q6h monoterapi' },
      { key: 'E', text: 'Kotrimoksazol IV + Gentamisin IV' }
    ],
    correctAnswer: 'A',
    explanation: 'Pada pasien rawat inap CAP berat non-ICU / ICU tanpa faktor risiko Pseudomonas atau MRSA, pedoman IDSA/ATS dan PDPI merekomendasikan terapi kombinasi antara BETA-LAKTAM PARENTERAL (seperti Seftriakson 1-2 g IV atau Ampisilin-Sulbaktam) PLUS MAKROLIDA (Azitromisin 500 mg IV) atau monoterapi Florokuinolon Respirasi (Levofloksasin 750 mg IV atau Moksifloksasin 400 mg IV). Kombinasi Seftriakson + Azitromisin memberikan cakupan ideal terhadap patogen tipikal (S. pneumoniae) dan atipikal (Legionella, Mycoplasma).',
    clinicalReference: 'Pedoman Diagnosis & Penatalaksanaan Pneumonia Komuniti PDPI & IDSA/ATS Guidelines',
    difficulty: 'Sedang'
  },
  {
    id: 'q-277',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang perawat di poli rawat jalan tertusuk jarum suntik bekas pakai (needlestick injury) saat mengambil darah pasien dengan status HIV reaktif (viral load tinggi). Perawat segera mencuci luka tusuk dengan air mengalir dan sabun.',
    question: 'Berapakah batas waktu maksimal (golden period) pemberian Profilaksis Pasca Pajanan (Post-Exposure Prophylaxis / PEP) HIV, serta durasi pengobatan yang wajib diselesaikan?',
    options: [
      { key: 'A', text: 'Maksimal 72 jam pertama, diberikan selama 28 hari penuh' },
      { key: 'B', text: 'Maksimal 24 jam pertama, diberikan selama 7 hari' },
      { key: 'C', text: 'Maksimal 7 hari pertama, diberikan selama 14 hari' },
      { key: 'D', text: 'Maksimal 48 jam pertama, diberikan seumur hidup' },
      { key: 'E', text: 'Maksimal 2 jam pertama, diberikan selama 3 hari' }
    ],
    correctAnswer: 'A',
    explanation: 'Profilaksis Pasca Pajanan (PEP) HIV harus dimulai secepat mungkin setelah pajanan okupasional/non-okupasional, dengan batas waktu maksimal 72 JAM (lebih cepat lebih baik, idealnya dalam 2-4 jam pertama). Regimen PEP standar (kombinasi 3 obat ARV seperti Tenofovir + Lamivudin/Emtrisitabin + Dolutegravir) WAJIB DIKONSUMSI RUTIN SELAMA 28 HARI PENUH untuk mencegah integrasi virus ke dalam genom sel inang.',
    clinicalReference: 'Pedoman Pencegahan & Pengobatan Infeksi HIV Kementerian Kesehatan RI & WHO Guidelines for Post-exposure Prophylaxis',
    difficulty: 'Mudah'
  },
  {
    id: 'q-278',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien leukemia mieloblastik akut (AML) yang sedang menjalani kemoterapi induksi mengalami Demam Neutropenia (suhu tubuh 38,9°C dan hitung neutrofil absolut / ANC 250 sel/mcL). Pasien tampak menggigil hebat di ruang isolasi.',
    question: 'Antibiotik empiris intravena berspektrum antipseudomonas manakah yang wajib segera dimulai dalam waktu 1 jam pertama (monoterapi lini 1)?',
    options: [
      { key: 'A', text: 'Sefepim 2 g IV tiap 8 jam atau Piperasilin/Tazobaktam 4,5 g IV tiap 6 jam' },
      { key: 'B', text: 'Seftriakson 2 g IV tiap 24 jam' },
      { key: 'C', text: 'Siprofloksasin 500 mg oral tiap 12 jam' },
      { key: 'D', text: 'Vankomisin 1 g IV tiap 12 jam' },
      { key: 'E', text: 'Metronidazol 500 mg IV tiap 8 jam' },
    ],
    correctAnswer: 'A',
    explanation: 'Pada demam neutropenia (ANC < 500 sel/mcL disertai demam >= 38,3°C), infeksi bakteri gram-negatif khususnya Pseudomonas aeruginosa dapat menyebabkan sepsis mematikan dalam hitungan jam. Terapi empiris lini pertama wajib menggunakan beta-laktam antipseudomonas monoterapi spektrum luas seperti SEFEPIM 2 g IV q8h, PIPERASILIN/TAZOBAKTAM 4,5 g IV q6h, atau Meropenem 1 g IV q8h yang diberikan dalam waktu < 1 jam sejak demam terdeteksi.',
    clinicalReference: 'IDSA Guidelines for the Use of Antimicrobial Agents in Neutropenic Patients with Cancer & ASCO Guidelines',
    difficulty: 'Tinggi'
  },

  // =========================================================================
  // 🩺 GASTROENTEROLOGI, HEPATOLOGI & SALURAN CERNA
  // =========================================================================
  {
    id: 'q-279',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien laki-laki berusia 52 tahun dengan Sirosis Dekompensata Child-Pugh B dibawa ke IGD dengan muntah darah segar masif (hematemesis) dan feses hitam melena akibat ruptur varises esofagus. Pasien distabilkan dengan resusitasi cairan dan transfusi darah.',
    question: 'Obat vasoaktif intravena pilihan utama manakah yang diberikan sebagai terapi farmakologis cito untuk menurunkan tekanan vena porta sebelum tindakan endoskopi ligasi varises?',
    options: [
      { key: 'A', text: 'Oktreotid bolus 50 mcg IV dilanjutkan infus kontinu 50 mcg/jam' },
      { key: 'B', text: 'Propranolol oral 40 mg tiap 8 jam' },
      { key: 'C', text: 'Asam Traneksamat 1000 mg IV bolus lambat' },
      { key: 'D', text: 'Vitamin K1 (Fitomenadion) 10 mg IM' },
      { key: 'E', text: 'Dopamin 5 mcg/kg/menit infus IV' }
    ],
    correctAnswer: 'A',
    explanation: 'Pada perdarahan varises esofagus akut, obat vasoaktif pilihan utama adalah OKTREOTID (analog somatostatin sintetik) dengan dosis bolus 50 mcg IV diikuti infus kontinu 50 mcg/jam selama 2-5 hari, atau Terlipresin/Somatostatin. Oktreotid bekerja secara selektif memicu vasokonstriksi pembuluh darah splanknikus sehingga menurunkan aliran darah vena porta dan menghentikan perdarahan varises. Propranolol HANYA digunakan untuk profilaksis sekunder/primer SETELAH perdarahan akut berhenti total.',
    clinicalReference: 'AASLD Practice Guidance on Portal Hypertensive Bleeding in Cirrhosis & Baveno VII Consensus',
    difficulty: 'Sedang'
  },
  {
    id: 'q-280',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang pasien sirosis hati mengalami ensefalopati hepatik grade II yang ditandai dengan disorientasi waktu, tremor flapping (asteriksis), dan peningkatan kadar amonia darah (145 mcg/dL). Dokter berdiskusi dengan apoteker mengenai pemilihan terapi lini pertama untuk menurunkan kadar amonia sistemik.',
    question: 'Terapi lini pertama apakah yang bekerja dengan cara mengubah amonia (NH3) menjadi ion amonium (NH4+) yang tidak diserap di lumen kolon?',
    options: [
      { key: 'A', text: 'Laktulosa sirup oral' },
      { key: 'B', text: 'Bisakodil tablet' },
      { key: 'C', text: 'Neomisin sulfat oral' },
      { key: 'D', text: 'L-Ornitin L-Aspartat (LOLA)' },
      { key: 'E', text: 'Sorbitol 70%' }
    ],
    correctAnswer: 'A',
    explanation: 'LAKTULOSA (disakarida non-absorbable) adalah terapi lini pertama untuk ensefalopati hepatik. Di usus besar, laktulosa difermentasi oleh flora usus menjadi asam laktat dan asam asetat, menyebabkan pengasaman lumen kolon (pH menurun). Suasana asam ini mengubah amonia yang mudah diserap (NH3) menjadi ion amonium (NH4+) yang terperangkap (ammonia trapping) dan tidak dapat menembus mukosa usus, lalu diekskresikan keluar melalui feses (dosis dititrasi untuk mencapai 2-3 kali BAB lunak per hari).',
    clinicalReference: 'EASL/AASLD Clinical Practice Guidelines on Hepatic Encephalopathy in Chronic Liver Disease',
    difficulty: 'Mudah'
  },
  {
    id: 'q-281',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien sirosis hepatis dengan asites moderat yang belum pernah diterapi sebelumnya direncanakan memulai terapi diuretik kombinasi untuk menjaga homeostasis kalium serum.',
    question: 'Berapakah rasio dosis awal kombinasi Spironolakton dan Furosemid yang baku direkomendasikan menurut pedoman AASLD?',
    options: [
      { key: 'A', text: 'Spironolakton 100 mg : Furosemid 40 mg' },
      { key: 'B', text: 'Spironolakton 25 mg : Furosemid 40 mg' },
      { key: 'C', text: 'Spironolakton 50 mg : Furosemid 100 mg' },
      { key: 'D', text: 'Spironolakton 200 mg : Furosemid 20 mg' },
      { key: 'E', text: 'Spironolakton 40 mg : Furosemid 100 mg' }
    ],
    correctAnswer: 'A',
    explanation: 'Pedoman AASLD menetapkan rasio baku awal untuk terapi asites pada sirosis adalah SPIRONOLAKTON 100 mg berbanding FUROSEMID 40 mg (rasio 100:40) diberikan 1x sehari di pagi hari. Rasio ini dirancang khusus untuk mencapai natriuresis optimal sekaligus menjaga kadar kalium serum tetap seimbang (efek hemat kalium dari spironolakton mengimbangi efek boros kalium dari furosemid). Dosis dapat dititrasi kelipatan rasio ini (misal 200:80 mg) hingga maksimal 400:160 mg.',
    clinicalReference: 'AASLD Guidelines on the Management of Adult Patients with Ascites Due to Cirrhosis',
    difficulty: 'Sedang'
  },

  // =========================================================================
  // 🩺 GINJAL, ELEKTROLIT & PEMANTAUAN TERAPI OBAT (TDM)
  // =========================================================================
  {
    id: 'q-282',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien laki-laki berusia 48 tahun dengan berat badan 70 kg dirawat di ICU karena bakteremia Methicillin-Resistant Staphylococcus aureus (MRSA). Pasien menerima infus Vankomisin 1 g IV tiap 12 jam. Apoteker klinis diminta melakukan Therapeutic Drug Monitoring (TDM) untuk memastikan efikasi terapi dan mencegah nefrotoksisitas.',
    question: 'Kapan waktu pengambilan sampel darah yang tepat untuk mengukur konsentrasi palung (trough level) Vankomisin, serta rentang target yang direkomendasikan untuk infeksi berat MRSA?',
    options: [
      { key: 'A', text: 'Tepat 30 menit sebelum dosis infus berikutnya; target 15 - 20 mcg/mL' },
      { key: 'B', text: '1 jam setelah infus selesai; target 25 - 35 mcg/mL' },
      { key: 'C', text: 'Tepat di pertengahan interval pemberian (jam ke-6); target 10 - 15 mcg/mL' },
      { key: 'D', text: '24 jam setelah dosis pertama; target 5 - 10 mcg/mL' },
      { key: 'E', text: 'Segera saat pemberian dosis loading selesai; target 40 mcg/mL' }
    ],
    correctAnswer: 'A',
    explanation: 'Sampel darah untuk konsentrasi palung (trough concentration) Vankomisin diambil TEPAT 30 MENIT SEBELUM DOSIS BERIKUTNYA diberikan pada kondisi tunak (steady state, biasanya sebelum dosis ke-4 atau ke-5). Untuk infeksi berat MRSA (seperti bakteremia, endokarditis, pneumonia nosokomial, meningitis, osteomielitis), target trough level yang direkomendasikan adalah 15 - 20 mcg/mL (setara dengan target AUC/MIC >= 400-600) guna memastikan efikasi bakterisidal dan meminimalkan risiko acute kidney injury (AKI).',
    clinicalReference: 'Therapeutic Monitoring of Vancomycin: Consensus Guidelines by ASHP, IDSA, PIDS, and SIDP',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-283',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien wanita berusia 72 tahun dengan hiponatremia berat simtomatik (Natrium serum 112 mEq/L) mengalami penurunan kesadaran dan kejang. Dokter memulai koreksi cairan dengan NaCl 3% hipertonik. Apoteker mengingatkan tim dokter mengenai batas maksimal kenaikan kadar natrium serum dalam 24 jam pertama.',
    question: 'Berapakah batas laju kenaikan natrium serum maksimal dalam 24 jam pertama untuk menghindari komplikasi neurologis mematikan berupa Osmotic Demyelination Syndrome (ODS)?',
    options: [
      { key: 'A', text: 'Maksimal 8 - 10 mEq/L per 24 jam' },
      { key: 'B', text: 'Maksimal 20 - 25 mEq/L per 24 jam' },
      { key: 'C', text: 'Maksimal 15 - 18 mEq/L per 24 jam' },
      { key: 'D', text: 'Naikkan langsung hingga mencapai kadar normal 135 mEq/L' },
      { key: 'E', text: 'Maksimal 2 - 4 mEq/L per 24 jam' }
    ],
    correctAnswer: 'A',
    explanation: 'Koreksi hiponatremia kronis/berat harus dilakukan secara sangat hati-hati. Kecepatan kenaikan kadar natrium serum TIDAK BOLEH MELEBIHI 8 - 10 mEq/L DALAM 24 JAM PERTAMA (atau maksimal 18 mEq/L dalam 48 jam). Koreksi yang terlalu cepat akan memicu pergeseran cairan keluar dari sel-sel otak secara mendadak yang mengakibatkan kerusakan selubung mielin batang otak permanen yang ireversibel, yaitu OSMOTIC DEMYELINATION SYNDROME (Central Pontine Myelinolysis), yang berakibat quadriparesis flaksid dan kematian.',
    clinicalReference: 'Clinical Practice Guideline on Diagnosis and Treatment of Hyponatraemia (European Society of Endocrinology & ERA-EDTA)',
    difficulty: 'Tinggi'
  },

  // =========================================================================
  // 🩺 SARAF, JIWA & PSIKOFARMAKA
  // =========================================================================
  {
    id: 'q-284',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang anak laki-laki berusia 8 tahun dibawa ke IGD dalam kondisi kejang tonik-klonik umum yang telah berlangsung terus-menerus selama 12 menit tanpa pemulihan kesadaran di antara episode (Status Epileptikus Konvulsif). Akses intravena telah berhasil dipasang.',
    question: 'Berdasarkan protokol American Epilepsy Society (AES), obat lini pertama manakah yang harus segera diinjeksikan secara intravena?',
    options: [
      { key: 'A', text: 'Lorazepam IV atau Diazepam IV bolus lambat' },
      { key: 'B', text: 'Fenitoin infus IV kontinu' },
      { key: 'C', text: 'Fenobarbital IV bolus cepat' },
      { key: 'D', text: 'Asam Valproat oral sirup via NGT' },
      { key: 'E', text: 'Propofol infus titrasi tinggi' }
    ],
    correctAnswer: 'A',
    explanation: 'Pada fase emergensi awal Status Epileptikus (menit ke 0-5 hingga 20), terapi lini pertama pilihan utama adalah golongan BENZODIAZEPIN INTRAVENA, yaitu LORAZEPAM IV (0,1 mg/kg) atau DIAZEPAM IV (0,15-0,2 mg/kg bolus lambat 2-5 mg/menit). Jika akses IV belum tersedia, Midazolam intramuskular (IM) atau Diazepam rektal merupakan alternatif resmi. Jika kejang menetap setelah menit ke-20, baru masuk ke fase terapi lini kedua (Fenitoin/Fosfenitoin, Levetiracetam, atau Valproat IV).',
    clinicalReference: 'American Epilepsy Society (AES) Guideline for Treatment of Prolonged Seizures and Status Epilepticus',
    difficulty: 'Mudah'
  },
  {
    id: 'q-285',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang pasien laki-laki berusia 32 tahun dengan Skizofrenia Paranoid refrakter yang gagal dengan Haloperidol dan Risperidon direncanakan memulai terapi Klosapin. Apoteker menjelaskan pentingnya pemantauan darah lengkap secara berkala sebelum dan selama terapi.',
    question: 'Efek samping hematologi paling fatal apakah yang menjadi dasar kewajiban pemantauan Absolute Neutrophil Count (ANC) secara ketat pada pemakaian Klosapin?',
    options: [
      { key: 'A', text: 'Agranulositosis (Neutropenia berat)' },
      { key: 'B', text: 'Trombositopenia idiopatik' },
      { key: 'C', text: 'Anemia aplastik refrakter' },
      { key: 'D', text: 'Eosinofilia sistemik' },
      { key: 'E', text: 'Polisitemia vera' }
    ],
    correctAnswer: 'A',
    explanation: 'KLOSAPIN adalah antipsikotik atipikal paling efektif untuk skizofrenia refrakter/resisten terapi, namun penggunaannya dibatasi oleh risiko efek samping langka namun fatal berupa AGRANULOSITOSIS (penurunan hitung neutrofil absolut/ANC < 500 sel/mcL) yang dapat memicu infeksi oportunistik mematikan. Sebelum memulai Klosapin, nilai ANC baseline wajib >= 1500 sel/mcL (atau >= 1000 pada BEN), dan wajib dimonitor setiap minggu selama 6 bulan pertama.',
    clinicalReference: 'FDA Clozapine REMS (Risk Evaluation and Mitigation Strategy) & Maudsley Prescribing Guidelines in Psychiatry',
    difficulty: 'Sedang'
  },
  {
    id: 'q-286',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang pasien wanita berusia 28 tahun dengan Gangguan Bipolar sedang rutin mengonsumsi Litium Karbonat 400 mg bid. Pasien datang ke apotek mengeluhkan diare cair dan berencana membeli obat antiinflamasi bebas untuk sakit giginya.',
    question: 'Golongan analgesik manakah yang KONTRAINDIKASI dikonsumsi bersama Litium karena dapat menurunkan ekskresi ginjal dan memicu toksisitas litium yang berbahaya?',
    options: [
      { key: 'A', text: 'NSAID (seperti Asam Mefenamat, Ibuprofen, Natrium Diklofenak)' },
      { key: 'B', text: 'Parasetamol' },
      { key: 'C', text: 'Tramadol' },
      { key: 'D', text: 'Kodein' },
      { key: 'E', text: 'Kalsium Laktat' }
    ],
    correctAnswer: 'A',
    explanation: 'Litium diekskresikan hampir seluruhnya melalui filtrasi glomerulus ginjal. Obat golongan NSAID (seperti Ibuprofen, Asam Mefenamat, Natrium Diklofenak, Indometasin) menghambat sintesis prostaglandin renal, menyebabkan vasokonstriksi arteriol aferen dan penurunan GFR, serta meningkatkan reabsorpsi natrium dan litium di tubulus proksimal. Kombinasi ini dapat meningkatkan kadar serum litium hingga 40-60% dan memicu toksisitas litium berat (tremor kasar, ataksia, konfusi, kejang, gagal ginjal). Analgesik pilihan aman adalah PARASETAMOL.',
    clinicalReference: 'Drug Interactions in Psychiatry & Pedoman Pelayanan Farmasi Klinis Kemenkes',
    difficulty: 'Sedang'
  },

  // =========================================================================
  // 🩺 ONKOLOGI, SUPORTIF & TOKSIKOLOGI ANTIDOTUM
  // =========================================================================
  {
    id: 'q-287',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien wanita penderita Kanker Payudara menerima kemoterapi berbasis Sisplatin dosis tinggi (emetogenik tingkat tinggi / HEC > 90%). Apoteker klinis onkologi menyiapkan protokol antiemetik profilaksis kombinasi.',
    question: 'Berdasarkan pedoman ASCO dan NCCN, kombinasi 4 obat (quadruple regimen) profilaksis antiemetik manakah yang paling direkomendasikan untuk mencegah CINV akut dan tertunda?',
    options: [
      { key: 'A', text: 'NK1 Receptor Antagonist (Aprepitant) + 5-HT3 Antagonist (Ondansetron) + Deksametason + Olanzapin' },
      { key: 'B', text: 'Metoklopramid + Difenhidramin + Domperidon + Antasida' },
      { key: 'C', text: 'Ondansetron + Vitamin B6 + Klorpromazin + Diazepam' },
      { key: 'D', text: 'Deksametason + Ranitidin + Sukralfat + Hiosin' },
      { key: 'E', text: 'Granisetron monoterapi dosis ganda' }
    ],
    correctAnswer: 'A',
    explanation: 'Untuk regimen kemoterapi dengan potensi emetogenik tinggi (High Emetogenic Chemotherapy / HEC, seperti Sisplatin, Doksorubisin + Siklofosfamid), pedoman ASCO, NCCN, dan MASCC merekomendasikan profilaksis 4 OBAT (QUADRUPLE REGIMEN) sebelum kemoterapi dimulai: (1) Neurokinin-1 (NK1) receptor antagonist (Aprepitant / Fosaprepitant); (2) 5-HT3 receptor antagonist (Ondansetron / Palonosetron); (3) Deksametason; dan (4) Olanzapin 5-10 mg oral.',
    clinicalReference: 'ASCO Antiemetics Guideline Update & NCCN Clinical Practice Guidelines in Oncology: Antiemesis',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-288',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang pasien penderita Osteosarkoma menerima infus Metotreksat dosis tinggi (HD-MTX 5 g/m2). Untuk mencegah toksisitas mematikan pada sumsum tulang dan mukosa saluran cerna, apoteker menyiapkan terapi penyelamat (rescue therapy).',
    question: 'Obat penyelamat apakah yang wajib diberikan tepat waktu pasca-kemoterapi Metotreksat dosis tinggi?',
    options: [
      { key: 'A', text: 'Leukovorin (Asam Folinat)' },
      { key: 'B', text: 'Asam Folat oral' },
      { key: 'C', text: 'Filgrastim (G-CSF)' },
      { key: 'D', text: 'Mesna' },
      { key: 'E', text: 'Deksrazoksan' }
    ],
    correctAnswer: 'A',
    explanation: 'LEUKOVORIN (Kalsium Folinat / Asam Folinat) adalah bentuk aktif turunan tetrahidrofolat yang tidak memerlukan enzim dihidrofolat reduktase (DHFR) untuk metabolismenya. Pemberian Leukovorin pasca HD-MTX (Leucovorin Rescue) melewati blokade yang diinduksi metotreksat dan secara selektif "menyelamatkan" sel-sel normal tubuh (sumsum tulang dan mukosa GI) dari kematian sel tanpa mengurangi efek sitotoksik antitumor. Asam Folat biasa TIDAK EFEKTIF karena metabolismenya diblokir oleh metotreksat.',
    clinicalReference: 'Pedoman Pelayanan Kefarmasian untuk Pasien Kanker Kemenkes RI & Cancer Chemotherapy Manual',
    difficulty: 'Mudah'
  },
  {
    id: 'q-289',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang pekerja tambang emas dibawa ke unit gawat darurat dalam kondisi koma, sesak napas berat, sianosis, dan bau amandel pahit (bitter almond odor) dari pernapasannya setelah terpapar uap senyawa Natrium Sianida.',
    question: 'Kombinasi antidotum spesifik intravena manakah yang merupakan baku emas pengobatan keracunan sianida?',
    options: [
      { key: 'A', text: 'Natrium Nitrit IV + Natrium Tiosulfat IV (atau Hidroksokobalamin IV)' },
      { key: 'B', text: 'Atropin Sulfat IV + Pralidoksim IV' },
      { key: 'C', text: 'N-Asetilsistein IV + Kalsium Glukonat IV' },
      { key: 'D', text: 'Nalokson IV + Flumazenil IV' },
      { key: 'E', text: 'Dimerkaprol (BAL) IM + EDTA IV' }
    ],
    correctAnswer: 'A',
    explanation: 'Antidotum baku emas untuk keracunan sianida adalah HIDROKSOKOBALAMIN IV (yang mengikat sianida membentuk sianokobalamin / Vitamin B12 yang tidak toksik dan diekskresi via urin) ATAU paket antidot sianida klasik kombinasi NATRIUM NITRIT + NATRIUM TIOSULFAT. Natrium nitrit menginduksi pembentukan methemoglobin yang memiliki afinitas sangat tinggi terhadap sianida, sedangkan Natrium Tiosulfat menyediakan donor sulfur untuk enzim rhodanese mengubah sianida menjadi tiosianat yang aman.',
    clinicalReference: 'WHO Antidotes for Poisoning by Cyanide & Goldfrank Toxicologic Emergencies',
    difficulty: 'Sedang'
  },
  {
    id: 'q-290',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang pasien wanita berusia 55 tahun yang sedang menjalani hemodialisis mengalami perdarahan akut yang tidak terkontrol akibat overdosis Heparin Tak Terfraksi (Unfractionated Heparin / UFH). Nilai aPTT tercatat > 150 detik.',
    question: 'Antidotum spesifik intravena apakah yang harus segera diinjeksikan untuk menetralkan efek antikoagulan heparin tersebut?',
    options: [
      { key: 'A', text: 'Protamin Sulfat IV perlahan' },
      { key: 'B', text: 'Vitamin K1 (Fitomenadion) IV' },
      { key: 'C', text: 'Idarusizumab IV' },
      { key: 'D', text: 'Andeksanet alfa IV' },
      { key: 'E', text: 'Asam Traneksamat IV' }
    ],
    correctAnswer: 'A',
    explanation: 'PROTAMIN SULFAT adalah antidotum spesifik untuk menetralkan efek antikoagulan Heparin (UFH). Protamin yang bermuatan positif kuat (basa polikationik) berikatan secara ionik dengan heparin yang bermuatan negatif kuat (asam polianionik) membentuk kompleks garam netral stabil yang tidak memiliki aktivitas antikoagulan (1 mg Protamin menetralkan ~100 unit Heparin). Injeksi harus diberikan perlahan (< 5 mg/menit) untuk mencegah hipotensi dan reaksi anafilaktoid.',
    clinicalReference: 'CHEST Antithrombotic Therapy Guidelines & Goodman & Gilman',
    difficulty: 'Mudah'
  },
  {
    id: 'q-291',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien lanjut usia berusia 74 tahun dengan fibrilasi atrium yang mengonsumsi Dabigatran 150 mg bid mengalami cedera kepala akibat kecelakaan lalu lintas dan mengalami perdarahan intrakranial traumatik akut.',
    question: 'Antidotum antibodi monoklonal spesifik manakah yang direkomendasikan untuk membalikkan (reversal) efek antikoagulan Dabigatran secara instan?',
    options: [
      { key: 'A', text: 'Idarusizumab (Praxbind)' },
      { key: 'B', text: 'Andeksanet alfa (Andexxa)' },
      { key: 'C', text: 'Protamin Sulfat' },
      { key: 'D', text: 'Kompleks Protrombin Terkonsentrasi (PCC)' },
      { key: 'E', text: 'Defibrotid' }
    ],
    correctAnswer: 'A',
    explanation: 'IDARUSIZUMAB adalah fragmen antibodi monoklonal (Fab) bermanufaktur spesifik yang mengikat Dabigatran dengan afinitas 350 kali lebih kuat daripada trombin. Idarusizumab secara instan menetralkan efek antikoagulan Dabigatran dalam hitungan menit pada kondisi perdarahan mayor yang mengancam nyawa atau sebelum operasi darurat. Sedangkan Andeksanet alfa digunakan untuk membalikkan efek antikoagulan Direct Factor Xa Inhibitor (Rivaroxaban dan Apixaban).',
    clinicalReference: 'AHA/ACC Guidelines on Reversal of Direct Oral Anticoagulants & Praxbind Prescribing Info',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-292',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang remaja dibawa ke IGD 4 jam setelah menelan 30 tablet Parasetamol 500 mg (total 15 gram) dalam upaya bunuh diri. Pasien tampak mual dan muntah.',
    question: 'Berdasarkan nomogram Rumack-Matthew, antidotum spesifik apakah yang wajib diberikan segera, serta bagaimanakah mekanisme kerjanya?',
    options: [
      { key: 'A', text: 'N-Asetilsistein (NAC), meregenerasi cadangan glutation hepar untuk menginaktivasi metabolit toksik NAPQI' },
      { key: 'B', text: 'Metilen Biru, mereduksi methemoglobin menjadi hemoglobin fungsional' },
      { key: 'C', text: 'Flumazenil, antagonis kompetitif pada reseptor GABA-A' },
      { key: 'D', text: 'Deferoksamin, mengkhelat ion besi bebas dalam sirkulasi' },
      { key: 'E', text: 'Fomepizol, menghambat enzim alkohol dehidrogenase' }
    ],
    correctAnswer: 'A',
    explanation: 'Toksisitas parasetamol terjadi ketika jalur konjugasi glukuronida dan sulfat jenuh, sehingga sebagian besar dimetabolisme oleh CYP2E1 menjadi metabolit reaktif elektrofilik yang sangat hepatotoksik: N-acetyl-p-benzoquinone imine (NAPQI). Ketika cadangan glutation hepar habis terdeplesi (> 70%), NAPQI berikatan kovalen dengan protein hepatosit menyebabkan nekrosis sentrilobular hepar. N-ASETILSISTEIN (NAC) adalah antidot spesifik yang bertindak sebagai prekursor sistein untuk MENGISI ULANG CADANGAN GLUTATION dan mengikat langsung NAPQI.',
    clinicalReference: 'The Rumack-Matthew Nomogram for Acetaminophen Poisoning & Clinical Toxicology Guidelines',
    difficulty: 'Mudah'
  },

  // =========================================================================
  // 🩺 MATERNAL, PEDIATRI & GERIATRI
  // =========================================================================
  {
    id: 'q-293',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang ibu hamil berusia 31 tahun dengan usia kehamilan 34 minggu didiagnosis Preeklampsia Berat (PEB) dengan TD 170/110 mmHg dan proteinuria +++ serta nyeri kepala hebat. Pasien diberikan infus Magnesium Sulfat (MgSO4) profilaksis kejang eklampsia. Satu jam kemudian, laju pernapasan ibu turun menjadi 10 x/menit, refleks patella menghilang, dan urin hanya keluar 15 mL/jam (intoksikasi MgSO4).',
    question: 'Antidotum intravena darurat apakah yang WAJIB disiapkan apoteker di ruang bersalin untuk mengatasi intoksikasi MgSO4 tersebut?',
    options: [
      { key: 'A', text: 'Kalsium Glukonat 10% IV (10 mL diberikan dalam 10 menit)' },
      { key: 'B', text: 'Kalium Klorida 10% IV infus cepat' },
      { key: 'C', text: 'Natrium Bikarbonat 8,4% IV bolus' },
      { key: 'D', text: 'Atropin Sulfat 1 mg IV' },
      { key: 'E', text: 'Nalokson 0,4 mg IV' }
    ],
    correctAnswer: 'A',
    explanation: 'Tanda-tanda toksisitas Magnesium Sulfat (MgSO4) meliputi hilangnya refleks tendon dalam (refleks patella negatif pada kadar > 8-10 mEq/L), depresi pernapasan (< 16 x/menit pada kadar > 12 mEq/L), oliguria, hingga henti jantung. Antidotum spesifik penyelamat nyawa adalah KALSIUM GLUKONAT 10% (1 gram / 10 mL dalam larutan 10%) yang disuntikkan secara intravena lambat selama minimal 5-10 menit. Ion kalsium bertindak sebagai antagonis langsung terhadap efek blokade neuromuskular ion magnesium.',
    clinicalReference: 'Pedoman Nasional Pelayanan Kedokteran (PNPK) Preeklampsia POGI & WHO Recommendations for Prevention and Treatment of Pre-eclampsia',
    difficulty: 'Sedang'
  },
  {
    id: 'q-294',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang ibu hamil trimester pertama mengeluhkan mual dan muntah parah (hiperemesis gravidarum). Dokter meminta rekomendasi obat antimual lini pertama yang paling aman berdasarkan pedoman ACOG.',
    question: 'Kombinasi obat lini pertama manakah yang direkomendasikan untuk kondisi tersebut?',
    options: [
      { key: 'A', text: 'Piridoksin (Vitamin B6) monoterapi atau kombinasi dengan Doksilamin' },
      { key: 'B', text: 'Ondansetron dosis tinggi' },
      { key: 'C', text: 'Metoklopramid bolus IV' },
      { key: 'D', text: 'Klorpromazin tablet' },
      { key: 'E', text: 'Deksametason IV' }
    ],
    correctAnswer: 'A',
    explanation: 'Pedoman American College of Obstetricians and Gynecologists (ACOG) merekomendasikan terapi lini pertama untuk mual muntah pada kehamilan (NVP / Morning Sickness) adalah PIRIDOKSIN (VITAMIN B6) 10-25 mg 3-4 kali sehari, baik secara monoterapi maupun dikombinasikan dengan DOKSILAMIN (antihistamin H1). Kombinasi ini memiliki profil keamanan terbukti paling tinggi tanpa risiko malformasi kongenital pada trimester pertama.',
    clinicalReference: 'ACOG Practice Bulletin No. 189: Nausea and Vomiting of Pregnancy',
    difficulty: 'Mudah'
  },
  {
    id: 'q-295',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang pasien geriatri berusia 78 tahun dengan insomnia dan riwayat jatuh berulang diresepkan Alprazolam 0,5 mg pada malam hari oleh dokter umum. Apoteker melakukan peninjauan resep berbasis Kriteria Beers (AGS Beers Criteria).',
    question: 'Mengapa golongan Benzodiazepin masuk dalam kategori "Dihindari Penggunaannya" (Avoid) pada populasi lansia menurut Kriteria Beers?',
    options: [
      { key: 'A', text: 'Meningkatkan risiko gangguan kognitif, delirium, sedasi berlebih, dan risiko jatuh/fraktur panggul' },
      { key: 'B', text: 'Menyebabkan hiperkalemia berat dan asidosis laktat' },
      { key: 'C', text: 'Menghambat motilitas usus dan menyebabkan diare masif' },
      { key: 'D', text: 'Memicu hipertensi resisten' },
      { key: 'E', text: 'Menginduksi ulkus peptikum lambung' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan AGS Beers Criteria for Potentially Inappropriate Medication Use in Older Adults, golongan BENZODIAZEPIN (termasuk Alprazolam, Diazepam, Lorazepam) dan obat Z-hypnotic harus DIHINDARI pada lansia. Lansia memiliki penurunan klirens metabolisme hepatik dan peningkatan sensitivitas reseptor SSP, sehingga obat ini sangat meningkatkan risiko ataksia, perburukan gangguan memori/kognitif, delirium, SEDASI BERLEBIHAN, SERTA KEJADIAN JATUH DAN FRAKTUR TULANG PANGGUL.',
    clinicalReference: 'American Geriatrics Society (AGS) Beers Criteria for Potentially Inappropriate Medication Use in Older Adults',
    difficulty: 'Mudah'
  },
  {
    id: 'q-296',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang anak laki-laki berusia 5 tahun (berat badan 18 kg) didiagnosis Faringitis Akut akibat infeksi Streptococcus beta-hemolyticus grup A. Pasien tidak memiliki riwayat alergi obat dan diresepkan Amoksisilin sirup kering.',
    question: 'Berapakah dosis lazim Amoksisilin harian yang direkomendasikan untuk faringitis streptokokus pada anak tersebut, serta aturan pakainya?',
    options: [
      { key: 'A', text: '50 mg/kgBB/hari dibagi dalam 2 - 3 dosis selama 10 hari' },
      { key: 'B', text: '10 mg/kgBB/hari dosis tunggal selama 3 hari' },
      { key: 'C', text: '100 mg/kgBB/hari dibagi tiap 4 jam selama 2 hari' },
      { key: 'D', text: '20 mg/kgBB/hari dibagi tiap 12 jam selama 14 hari' },
      { key: 'E', text: '5 mg/kgBB/hari dosis tunggal selama 7 hari' }
    ],
    correctAnswer: 'A',
    explanation: 'Dosis Amoksisilin oral lini pertama yang direkomendasikan untuk faringitis akut Group A Streptococcus (GAS) pada anak adalah 50 mg/kgBB/hari (maksimal 1000 mg/hari) yang dibagi dalam 2 atau 3 dosis harian. Durasi pengobatan wajib dituntaskan selama 10 HARI PENUH guna mengeradikasi kuman secara sempurna dan mencegah komplikasi non-supuratif lambat yang fatal yaitu Demam Rematik Akut (Acute Rheumatic Fever) dan Glomerulonefritis Pascastreptokokus.',
    clinicalReference: 'IDSA Clinical Practice Guideline for the Diagnosis and Management of Group A Streptococcal Pharyngitis & Pedoman Terapi Pediatri Ikatan Dokter Anak Indonesia (IDAI)',
    difficulty: 'Sedang'
  },
  {
    id: 'q-297',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien wanita berusia 65 tahun didiagnosis Osteoporosis pascamenopause dengan T-score tulang belakang -3,2. Dokter meresepkan Alendronat tablet 70 mg satu kali seminggu. Apoteker memberikan konseling cara minum obat yang benar.',
    question: 'Instruksi penggunaan obat manakah yang WAJIB ditekankan oleh apoteker untuk mencegah efek samping iritasi dan ulserasi esofagus yang berat?',
    options: [
      { key: 'A', text: 'Diminum pagi hari saat perut kosong dengan segelas penuh air putih murni, dan tetap dalam posisi tegak (duduk/berdiri) minimal 30 menit' },
      { key: 'B', text: 'Diminum malam hari menjelang tidur bersama susu hangat' },
      { key: 'C', text: 'Diminum bersama makanan berlemak untuk meningkatkan absorpsinya' },
      { key: 'D', text: 'Digerus halus dan dilarutkan dalam jus jeruk manis' },
      { key: 'E', text: 'Diminum segera setelah makan siang dan berbaring santai selama 1 jam' }
    ],
    correctAnswer: 'A',
    explanation: 'Bisfosfonat oral (seperti Alendronat, Risedronat) memiliki bioavailabilitas sangat rendah (< 1%) dan berpotensi menyebabkan esofagitis ulseratif parah bila kontak dengan mukosa esofagus. Pasien WAJIB mengonsumsinya di pagi hari segera setelah bangun tidur dengan SEPARUH SAMPAI SEGELAS PENUH AIR PUTIH MURNI (bukan teh/kopi/susu/mineral tinggi), minimal 30 menit sebelum makanan/minuman/obat lain, dan TETAP DALAM POSISI TEGAK (DUDUK ATAU BERDIRI) MINIMAL 30 MENIT (jangan berbaring).',
    clinicalReference: 'AACE/ACE Clinical Practice Guidelines for the Diagnosis and Treatment of Postmenopausal Osteoporosis',
    difficulty: 'Mudah'
  },
  {
    id: 'q-298',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang pasien laki-laki berusia 50 tahun dengan riwayat Gout Artritis kronis dan kadar asam urat serum 9,8 mg/dL direncanakan memulai terapi penurun asam urat Alopurinol. Pasien berasal dari etnis keturunan Tionghoa (Han Chinese).',
    question: 'Pemeriksaan skrining genetik apakah yang direkomendasikan sebelum inisiasi Alopurinol pada etnis berisiko tinggi guna mencegah Severe Cutaneous Adverse Reactions (SCAR) seperti Sindrom Stevens-Johnson (SJS) dan Toxic Epidermal Necrolysis (TEN)?',
    options: [
      { key: 'A', text: 'Alel HLA-B*58:01' },
      { key: 'B', text: 'Alel HLA-B*15:02' },
      { key: 'C', text: 'Polimorfisme CYP2C19*2' },
      { key: 'D', text: 'Polimorfisme VKORC1' },
      { key: 'E', text: 'Uji defisiensi enzim G6PD' }
    ],
    correctAnswer: 'A',
    explanation: 'Pedoman American College of Rheumatology (ACR) merekomendasikan skrining alel HLA-B*58:01 sebelum memulai Alopurinol pada populasi dengan prevalensi alel tinggi (seperti keturunan Asia Timur, Korea, Han Chinese, dan Thai). Adanya alel HLA-B*58:01 meningkatkan risiko kejadian reaksi hipersensitivitas kutaneus berat yang mengancam nyawa (Allopurinol Hypersensitivity Syndrome / SJS / TEN) hingga ratusan kali lipat. Jika positif, obat lini pertama alternatif adalah Febuksostat.',
    clinicalReference: '2020 American College of Rheumatology (ACR) Guideline for the Management of Gout',
    difficulty: 'Sedang'
  },
  {
    id: 'q-299',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien laki-laki berusia 48 tahun datang ke IGD dengan serangan Gout Artritis akut pada sendi ibu jari kaki kanan (podagra) yang bengkak merah, panas, dan nyeri ekstrem skala 9/10 sejak 8 jam lalu. Pasien tidak memiliki riwayat gangguan ginjal.',
    question: 'Berapakah regimen dosis Kolkisin oral yang tepat untuk mengatasi serangan artritis gout akut berdasarkan rekomendasi ACR?',
    options: [
      { key: 'A', text: '1,2 mg pada dosis awal, dilanjutkan 0,6 mg satu jam kemudian (total 1,8 mg dalam 1 jam)' },
      { key: 'B', text: '0,5 mg setiap 2 jam hingga pasien diare atau nyeri mereda' },
      { key: 'C', text: '2 mg sekaligus 3 kali sehari selama 7 hari' },
      { key: 'D', text: '0,5 mg satu kali seminggu' },
      { key: 'E', text: '5 mg injeksi IV bolus langsung' }
    ],
    correctAnswer: 'A',
    explanation: 'Regimen Kolkisin dosis rendah (Low-dose Colchicine) terbukti memiliki efikasi setara dengan dosis tinggi namun dengan efek samping gastrointestinal (mual, kram, diare) yang jauh lebih minimal: Dosis awal 1,2 mg (atau 1 mg) segera saat serangan, DIIKUTI 0,6 mg (atau 0,5 mg) TEPAT 1 JAM KEMUDIAN (total 1,8 mg). Terapi profilaksis rumatan dapat dilanjutkan 0,6 mg 1-2 kali sehari 12 jam setelahnya.',
    clinicalReference: '2020 ACR Guideline for the Management of Gout & EULAR Recommendations for Gout',
    difficulty: 'Mudah'
  },
  {
    id: 'q-300',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang pasien penderita infeksi saluran kemih berat yang dirawat di bangsal menerima terapi Seftriakson IV dan Gentamisin IV. Setelah 5 hari, urin pasien berkurang drastis dan nilai Serum Kreatinin melonjak dari 0,9 mg/dL menjadi 2,6 mg/dL.',
    question: 'Bagaimanakah mekanisme utama nefrotoksisitas akibat antibiotik aminoglikosida (Gentamisin)?',
    options: [
      { key: 'A', text: 'Akumulasi obat di sel tubulus proksimal ginjal melalui endositosis yang memicu nekrosis tubular akut (ATN)' },
      { key: 'B', text: 'Presipitasi kristal obat di lumen tubulus distal ginjal' },
      { key: 'C', text: 'Nefritis interstisial alergika yang dimediasi sel T' },
      { key: 'D', text: 'Trombosis mikrovaskular glomerulus' },
      { key: 'E', text: 'Vasokonstriksi arteriol renalis yang diperantarai prostaglandin' }
    ],
    correctAnswer: 'A',
    explanation: 'Aminoglikosida (seperti Gentamisin, Amikasin, Tobramisin) difiltrasi bebas di glomerulus dan sekitar 5-10% diabsorpsi kembali oleh sel epitel tubulus proksimal ginjal melalui reseptor megalin-kubilin. Di dalam lisosom sel tubulus, akumulasi aminoglikosida menyebabkan fosfolipidosis, pelepasan enzim proteolitik, stres oksidatif, dan akhirnya NEKROSIS TUBULAR AKUT (Acute Tubular Necrosis / ATN). Nefrotoksisitas ini bersifat dose-dependent dan berkaitan erat dengan tingginya konsentrasi palung (trough level).',
    clinicalReference: 'Brenner and Rector The Kidney & Clinical Pharmacokinetics of Aminoglycosides',
    difficulty: 'Sedang'
  },
  {
    id: 'q-301',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien laki-laki berusia 56 tahun yang dirawat karena infeksi pneumonia nosokomial pasca-operasi menerima terapi antibiotik spektrum luas Klindamisin dan Meropenem selama 10 hari. Tiga hari kemudian pasien mengalami diare cair berair berbau busuk 8-10 kali sehari disertai demam 38,5°C dan leukositosis 18.000/mcL. Uji feses PCR positif toksin Clostridioides difficile.',
    question: 'Antibiotik oral lini pertama manakah yang direkomendasikan untuk tata laksana infeksi Clostridioides difficile episode awal?',
    options: [
      { key: 'A', text: 'Vankomisin 125 mg oral 4 kali sehari selama 10 hari (atau Fidaksomisin oral)' },
      { key: 'B', text: 'Metronidazol 500 mg IV tiap 8 jam' },
      { key: 'C', text: 'Siprofloksasin 500 mg oral tiap 12 jam' },
      { key: 'D', text: 'Amoksisilin-Klavulanat 625 mg oral tiap 8 jam' },
      { key: 'E', text: 'Loperamid 4 mg oral setiap selesai BAB' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan pedoman IDSA/SHEA terkini, lini pertama untuk infeksi Clostridioides difficile (CDI) derajat non-berat maupun berat episode awal adalah VANKOMISIN ORAL 125 mg 4 kali sehari selama 10 hari ATAU FIDAKSOMISIN 200 mg 2 kali sehari selama 10 hari. Metronidazol oral tidak lagi menjadi pilihan utama karena angka kekambuhan dan kegagalan terapi yang lebih tinggi. Vankomisin harus diberikan per ORAL karena sediaan intravena tidak disekresikan ke lumen kolon dalam kadar terapeutik. Antimotilitas (seperti Loperamid) KONTRAINDIKASI karena dapat memicu toxic megacolon.',
    clinicalReference: 'IDSA and SHEA Clinical Practice Guidelines for Clostridioides difficile Infection in Adults',
    difficulty: 'Sedang'
  },
  {
    id: 'q-302',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang kakek berusia 68 tahun penderita Herpes Zoster datang ke klinik pada hari ke-2 sejak muncul vesikel berkerumun dengan dasar eritematosa yang terasa panas dan nyeri menyengat di area dermatom dada sebelah kiri.',
    question: 'Berapakah dosis dan frekuensi pemberian Asiklovir oral yang tepat untuk terapi Herpes Zoster pada pasien dengan fungsi ginjal normal?',
    options: [
      { key: 'A', text: '800 mg 5 kali sehari (setiap 4 jam saat tidak tidur) selama 7 - 10 hari' },
      { key: 'B', text: '200 mg 5 kali sehari selama 5 hari' },
      { key: 'C', text: '400 mg 3 kali sehari selama 7 hari' },
      { key: 'D', text: '1000 mg 1 kali sehari selama 3 hari' },
      { key: 'E', text: '800 mg 1 kali sehari sebelum tidur selama 14 hari' }
    ],
    correctAnswer: 'A',
    explanation: 'Dosis standar Asiklovir oral untuk Herpes Zoster (Varicella-Zoster Virus) adalah 800 mg LIMA KALI SEHARI (diberikan setiap 4 jam selama periode terjaga, misal jam 06.00, 10.00, 14.00, 18.00, 22.00) SELAMA 7-10 HARI. Dosis ini jauh lebih tinggi daripada dosis Herpes Simpleks (200 mg 5x/hari) karena VZV kurang sensitif terhadap fosforilasi oleh enzim timidin kinase virus dibandingkan HSV. Terapi harus dimulai dalam waktu < 72 jam sejak lesi kulit pertama kali muncul.',
    clinicalReference: 'Pedoman Panduan Praktik Klinis Dokter Spesialis Dermatologi dan Venereologi Indonesia (PERDOSKI)',
    difficulty: 'Mudah'
  },
  {
    id: 'q-303',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang pasien laki-laki berusia 26 tahun didiagnosis Sifilis Primer setelah ditemukan ulkus durum tanpa rasa nyeri di genitalia eksterna (chancre) dan hasil serologi VDRL reaktif titer 1:32 serta TPHA reaktif.',
    question: 'Antibiotik pilihan utama manakah yang direkomendasikan untuk sifilis primer menurut pedoman Kementerian Kesehatan RI dan WHO?',
    options: [
      { key: 'A', text: 'Benzatin Benzilpenisilin G 2,4 juta IU intramuskular (IM) dosis tunggal' },
      { key: 'B', text: 'Amoksisilin 500 mg oral 3 kali sehari selama 5 hari' },
      { key: 'C', text: 'Seftriakson 1 g IV setiap 12 jam selama 14 hari' },
      { key: 'D', text: 'Doksisiklin 100 mg oral 2 kali sehari selama 3 hari' },
      { key: 'E', text: 'Azitromisin 500 mg oral dosis tunggal' }
    ],
    correctAnswer: 'A',
    explanation: 'Tata laksana baku emas pilihan pertama untuk Sifilis Stadium Dini (Sifilis Primer, Sekunder, dan Laten Dini < 1 tahun) adalah BENZATIN BENZILPENISILIN G dosis 2,4 JUTA IU INTRAMUSKULAR (IM) DOSIS TUNGGAL (dapat diberikan 1,2 juta IU di masing-masing bokong kanan dan kiri). Benzatin penisilin melepaskan penisilin secara perlahan ke dalam sirkulasi darah dan mempertahankan kadar bakterisidal melampaui waktu pembelahan kuman Treponema pallidum yang lambat (30 jam) selama lebih dari 3 minggu.',
    clinicalReference: 'Pedoman Tata Laksana Infeksi Menular Seksual (IMS) Kementerian Kesehatan RI & CDC STI Treatment Guidelines',
    difficulty: 'Mudah'
  },
  {
    id: 'q-304',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien laki-laki berusia 30 tahun yang baru pulang dari tugas lapangan di Papua Barat mengalami demam menggigil berkala setiap 48 jam, sakit kepala berat, dan keringat dingin. Hasil pemeriksaan mikroskopis darah tebal dan RDT positif Plasmodium falciparum tanpa komplikasi.',
    question: 'Kombinasi obat antimalaria berbasis Artemisinin (ACT) lini pertama apakah yang wajib diberikan sesuai program eliminasi malaria nasional Kementerian Kesehatan RI?',
    options: [
      { key: 'A', text: 'Dihidroartemisinin - Piperakuin (DHP) selama 3 hari + Primakuin dosis tunggal pada hari pertama' },
      { key: 'B', text: 'Klorokuin selama 3 hari + Primakuin selama 14 hari' },
      { key: 'C', text: 'Kina tablet selama 7 hari + Doksisiklin selama 7 hari' },
      { key: 'D', text: 'Artesunat IV bolus + Klindamisin oral' },
      { key: 'E', text: 'Meflokuin monoterapi dosis tunggal' }
    ],
    correctAnswer: 'A',
    explanation: 'Pengobatan lini pertama untuk malaria falciparum tanpa komplikasi di Indonesia adalah Artemisinin-based Combination Therapy (ACT), yaitu DIHIDROARTEMISININ-PIPERAKUIN (DHP) tablet yang diminum sekali sehari SELAMA 3 HARI berturut-turut, DITAMBAH PRIMAKUIN dosis tunggal 0,25 mg basa/kgBB pada hari ke-1 sebagai gametositosida untuk memutus transmisi rantai penularan malaria ke nyamuk Anopheles.',
    clinicalReference: 'Buku Saku Penatalaksanaan Kasus Malaria di Indonesia Kementerian Kesehatan RI',
    difficulty: 'Sedang'
  },
  {
    id: 'q-305',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang pasien wanita berusia 30 tahun dibawa ke IGD 10 menit setelah disuntik antibiotik sefalosporin di klinik. Pasien mendadak mengalami urtikaria luas di seluruh tubuh, bibir dan lidah bengkak (angioedema), sesak napas berat dengan stridor inspirasi, dan tekanan darah anjlok menjadi 70/40 mmHg (Syok Anafilaktik).',
    question: 'Obat darurat penyelamat nyawa (first-line lifesaving drug) manakah yang WAJIB disuntikkan pertama kali, serta rute dan lokasi anatomi yang paling tepat?',
    options: [
      { key: 'A', text: 'Epinefrin 1:1.000 (0,3 - 0,5 mg) INTRAMUSKULAR (IM) di paha anterolateral (vastus lateralis)' },
      { key: 'B', text: 'Deksametason 10 mg INTRAVENA (IV) bolus' },
      { key: 'C', text: 'Difenhidramin 50 mg INTRAMUSKULAR di lengan deltoid' },
      { key: 'D', text: 'Salbutamol inhalasi via nebulizer' },
      { key: 'E', text: 'Epinefrin 1:10.000 subkutan di lengan atas' }
    ],
    correctAnswer: 'A',
    explanation: 'EPINEFRIN (ADRENALIN) INTRAMUSKULAR (IM) pada bagian anterolateral paha tengah (otot vastus lateralis) adalah terapi lini pertama yang mutlak dan tidak boleh ditunda sedetik pun pada syok anafilaksis. Dosis dewasa adalah 0,3 - 0,5 mg larutan 1:1.000 (0,3-0,5 mL). Rute IM di paha anterolateral memberikan absorpsi tercepat dan konsentrasi puncak plasma tertinggi dibandingkan rute deltoid atau subkutan. Antihistamin dan kortikosteroid hanya merupakan terapi lini kedua yang onset kerjanya lambat (jam) dan TIDAK BISA menyelamatkan nyawa dari kolaps kardiovaskular akut.',
    clinicalReference: 'World Allergy Organization (WAO) Anaphylaxis Guidelines & Resuscitation Council UK',
    difficulty: 'Mudah'
  },
  {
    id: 'q-306',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien penderita Kanker Limfoma Non-Hodgkin menerima kemoterapi siklus pertama yang mengandung Doksorubisin (Adriamycin). Dokter meminta apoteker menjelaskan pemantauan efek samping kardiotoksisitas jangka panjang.',
    question: 'Apakah mekanisme kerusakan miokardium akibat Doksorubisin, serta obat kardioprotektor manakah yang dapat diberikan pada pasien yang mencapai dosis kumulatif tinggi?',
    options: [
      { key: 'A', text: 'Pembentukan radikal bebas intraseluler yang merusak lipid membran miosit; dicegah dengan Deksrazoksan' },
      { key: 'B', text: 'Blokade kanal kalsium tipe L miokard; dicegah dengan Kalsium Glukonat' },
      { key: 'C', text: 'Inhibisi enzim siklooksigenase kardiak; dicegah dengan Misoprostol' },
      { key: 'D', text: 'Akumulasi asam urat di perikardium; dicegah dengan Rasburikase' },
      { key: 'E', text: 'Toksisitas akibat deplesi karnitin; dicegah dengan L-Karnitin' }
    ],
    correctAnswer: 'A',
    explanation: 'Antrasiklin (Doksorubisin, Daunorubisin) mengkhelat ion besi intraseluler dan membentuk kompleks besi-antrasiklin yang memicu siklus redoks menghasilkan Reactive Oxygen Species (ROS / radikal bebas superoksida dan hidrogen peroksida) dalam jumlah masif, menyebabkan peroksidasi lipid membran sarkolema miosit jantung dan kardiomiopati dilatasi ireversibel (dosis kumulatif toksik > 450-550 mg/m2). DEKSRAZOKSAN adalah agen pengkhelat besi intraseluler yang telah disetujui FDA/BPOM sebagai kardioprotektor spesifik untuk mencegah kardiotoksisitas antrasiklin.',
    clinicalReference: 'ASCO Clinical Practice Guideline on Prevention and Monitoring of Cardiac Dysfunction in Survivors of Adult Cancers',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-307',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang pasien kanker yang menerima Siklofosfamid dosis tinggi mengalami komplikasi sistitis hemoragik (hematuria makroskopis dan nyeri disuria hebat). Komplikasi ini diakibatkan oleh metabolit toksik akrolein yang mengiritasi dinding kandung kemih.',
    question: 'Obat uropelindung (chemoprotectant) intravena manakah yang wajib diberikan bersamaan dengan Siklofosfamid untuk menginaktivasi akrolein?',
    options: [
      { key: 'A', text: 'Mesna (Sodium 2-mercaptoethanesulfonate)' },
      { key: 'B', text: 'Leukovorin' },
      { key: 'C', text: 'Deksrazoksan' },
      { key: 'D', text: 'Amifostin' },
      { key: 'E', text: 'Allopurinol' }
    ],
    correctAnswer: 'A',
    explanation: 'Siklofosfamid dan Ifosfamid dimetabolisme oleh hepar menjadi AKROLEIN, metabolit urotoksik yang terakumulasi di kandung kemih dan menginduksi denudasi epitel mukosa, edema, dan perdarahan masif (Sistitis Hemoragik). MESNA (Sodium 2-mercaptoethanesulfonate) mengandung gugus tiol (-SH) bebas yang bereaksi langsung dengan ikatan rangkap akrolein di lumen saluran kemih membentuk aduk tioeter yang stabil, tidak beracun, dan larut air sehingga melindungi dinding uroepitel kandung kemih.',
    clinicalReference: 'Goodman & Gilman The Pharmacological Basis of Therapeutics & Pedoman Rekonstitusi Obat Sitostatika',
    difficulty: 'Mudah'
  },
  {
    id: 'q-308',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang pasien pria berusia 62 tahun dengan Fibrilasi Atrium yang sedang mengonsumsi Warfarin rutin datang dengan perdarahan saluran cerna masif dan hematuria. Hasil laboratorium cito menunjukkan nilai INR (International Normalized Ratio) = 9,5 (target terapi: 2,0 - 3,0).',
    question: 'Berdasarkan pedoman CHEST, tata laksana emergensi manakah yang paling tepat untuk membalikkan efek antikoagulan Warfarin secara cepat pada perdarahan mayor?',
    options: [
      { key: 'A', text: 'Hentikan Warfarin + Berikan 4-Factor Prothrombin Complex Concentrate (PCC) IV + Vitamin K1 (Fitomenadion) 5 - 10 mg infus IV perlahan' },
      { key: 'B', text: 'Berikan Vitamin K1 oral 2 mg saja tanpa menghentikan Warfarin' },
      { key: 'C', text: 'Berikan Protamin Sulfat IV bolus' },
      { key: 'D', text: 'Berikan infus Heparin dosis rendah' },
      { key: 'E', text: 'Lakukan cuci darah hemodialisis cito' }
    ],
    correctAnswer: 'A',
    explanation: 'Pada perdarahan mayor yang mengancam nyawa akibat Warfarin dengan INR sangat tinggi, pedoman CHEST dan PERKI merekomendasikan: (1) Segera hentikan Warfarin; (2) Berikan 4-FACTOR PROTHROMBIN COMPLEX CONCENTRATE (4F-PCC) intravena (mengandung faktor II, VII, IX, X) untuk mengembalikan homeostasis pembekuan secara instan dalam 10-15 menit (lebih cepat dan volume lebih kecil daripada Fresh Frozen Plasma); serta (3) Berikan VITAMIN K1 (FITOMENADION) 5 - 10 mg INTRAVENA LAMBAT (dalam 50-100 mL infus selama 30 menit) guna merangsang resintesis faktor pembekuan endogen yang bertahan lama.',
    clinicalReference: 'CHEST Guideline: Antithrombotic Therapy for VTE Disease & AHA/ACC Anticoagulation Reversal Guidance',
    difficulty: 'Sedang'
  },
  {
    id: 'q-309',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang anak berusia 3 tahun dilarikan ke IGD setelah menelan 1 strip tablet Propranolol milik kakeknya. Anak tampak pucat, bradikardia berat (nadi 42 x/menit), dan hipotensi (TD 60/35 mmHg) yang tidak berespons terhadap infus cairan kristaloid dan atropin.',
    question: 'Antidotum farmakologis spesifik lini pertama manakah yang bekerja meningkatkan kadar cAMP intraseluler miosit jantung tanpa melewati reseptor beta adrenergik yang terblokir?',
    options: [
      { key: 'A', text: 'Glukagon intravena bolus' },
      { key: 'B', text: 'Kalsium Glukonat IV' },
      { key: 'C', text: 'Nalokson IV' },
      { key: 'D', text: 'Fisostigmin IV' },
      { key: 'E', text: 'Metilen Biru IV' }
    ],
    correctAnswer: 'A',
    explanation: 'GLUKAGON INTRAVENA adalah antidotum lini pertama pilihan untuk overdosis beta-blocker refrakter. Glukagon berikatan dengan reseptor glukagon spesifik pada membran sel miokardium yang secara langsung mengaktivasi enzim adenilat siklase (meningkatkan cAMP dan influks ion kalsium intraseluler) TANPA MELALUI RESEPTOR BETA-1 ADRENERGIK yang sedang diblokir oleh propranolol. Efek ini menghasilkan peningkatan denyut jantung (kronotropik positif) dan kekuatan kontraksi miokard (inotropik positif) yang nyata.',
    clinicalReference: 'Goldfrank Toxicologic Emergencies & Management of Beta-Blocker Poisoning',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-310',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang pasien wanita berusia 35 tahun dengan riwayat depresi berat dibawa ke IGD dalam keadaan konfusi, pupil midriasis, kulit kering dan memerah, takikardia (nadi 135 x/menit), serta gambaran EKG menunjukkan pelebaran kompleks QRS sebesar 140 ms (normal < 100 ms) setelah menelan berlebih tablet Amitriptilin (antidepresan trisiklik / TCA).',
    question: 'Terapi penyelamat intravena apakah yang WAJIB diberikan untuk menyempitkan kembali durasi kompleks QRS dan mencegah aritmia ventrikel fatal pada overdosis TCA?',
    options: [
      { key: 'A', text: 'Natrium Bikarbonat 8,4% IV bolus' },
      { key: 'B', text: 'Amiodaron IV infus' },
      { key: 'C', text: 'Kalsium Klorida IV' },
      { key: 'D', text: 'Magnesium Sulfat IV' },
      { key: 'E', text: 'Lidokain bolus lambat' }
    ],
    correctAnswer: 'A',
    explanation: 'Toksisitas kardiovaskular antidepresan trisiklik (TCA seperti Amitriptilin) terjadi akibat blokade kanal natrium cepat miokardium (efek mirip kinidin fase 0) yang memperlambat konduksi intraventrikel (pelebaran QRS > 100 ms dikaitkan dengan risiko kejang, QRS > 160 ms berisiko aritmia ventrikel/VT/VF). NATRIUM BIKARBONAT INTRAVENA (NaHCO3 8,4%) adalah antidot baku emas yang bekerja ganda: (1) Menyediakan beban ion Natrium molar tinggi untuk mengatasi blokade kanal natrium secara kompetitif; dan (2) Menginduksi alkalinisasi serum (target pH 7,45 - 7,55) yang meningkatkan fraksi Amitriptilin netral yang tidak terionisasi sehingga melepaskan ikatannya dari kanal natrium.',
    clinicalReference: 'American College of Medical Toxicology (ACMT) Practice Guideline on TCA Poisoning',
    difficulty: 'Sedang'
  }
];

