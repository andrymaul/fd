import { ExamQuestion } from '../competencyExamData';

/**
 * BANK SOAL CBT UKMPPAI (APOTEKER) PENGAYAAN BAGIAN 15 (Nomor q-1201 s/d q-1255)
 * Cetak Biru Resmi UKMPPAI 2026 (KFN, IAI & APTFI)
 * Fokus: Farmakoterapi Lanjut & Kegawatdaruratan, Perhitungan Farmakokinetik & Finansial Apotek, 
 * Formulasi Industri CPOB 2024, Uji Disolusi Terbanding f2, serta Standardisasi Fitofarmaka
 * Total: 55 Butir Soal Vignette Kasus Komprehensif
 */
export const CBT_EXPANSION_PART_15: ExamQuestion[] = [
  // =========================================================================
  // 🩺 DOMAIN 1: FARMAKO TERAPI & FARMASI KLINIS (q-1201 s/d q-1230)
  // =========================================================================
  {
    id: 'q-1201',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien laki-laki 58 tahun dibawa ke IGD dengan tekanan darah 220/120 mmHg disertai sakit kepala berdenyut hebat dan pandangan kabur. Pemeriksaan funduskopi menunjukkan papiledema (hipertensi emergensi dengan target organ damage). Dokter berencana menurunkan tekanan darah dengan antihipertensi intravena.',
    question: 'Berapakah target penurunan Mean Arterial Pressure (MAP) yang direkomendasikan pada 1 jam pertama untuk mencegah iskemia serebral?',
    options: [
      { key: 'A', text: 'Turunkan MAP maksimal 20% - 25% dalam 1 jam pertama' },
      { key: 'B', text: 'Turunkan langsung hingga tekanan darah normal < 120/80 mmHg dalam 30 menit' },
      { key: 'C', text: 'Turunkan MAP sebesar 50% dalam 1 jam pertama' },
      { key: 'D', text: 'Pertahankan tekanan darah tanpa penurunan selama 6 jam' },
      { key: 'E', text: 'Turunkan tekanan darah sistolik saja hingga < 90 mmHg' }
    ],
    correctAnswer: 'A',
    explanation: 'Pada krisis hipertensi emergensi, penurunan tekanan darah TIDAK BOLEH dilakukan terlalu cepat atau langsung ke normal karena autoregulasi pembuluh darah otak akan kolaps dan memicu infark iskemik serebral atau miokard. Target pedoman JNC 8 & AHA: Turunkan MAP maksimal 20–25% pada 1 jam pertama (atau target diastolik 100–110 mmHg), kemudian jika stabil turunkan bertahap menuju 160/100 mmHg dalam 2–6 jam berikutnya.',
    clinicalReference: 'AHA/ACC Hypertension Guidelines & Dipiro Pharmacotherapy Handbook 12th Ed',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1202',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien gagal jantung HFrEF (LVEF 30%) sedang rutin mengonsumsi Kaptopril 3x25 mg. Dokter spesialis jantung berencana mengganti Kaptopril dengan kombinasi ARNI (Sakubitril/Valsartan) untuk menurunkan mortalitas kardiovaskular.',
    question: 'Berapa lamakah periode cuci (washout period) minimal yang wajib ditaati sebelum dosis pertama ARNI diberikan kepada pasien?',
    options: [
      { key: 'A', text: 'Minimal 36 jam setelah dosis terakhir Kaptopril dihentikan' },
      { key: 'B', text: 'Tidak butuh jeda, langsung diminum bersamaan' },
      { key: 'C', text: 'Cukup jeda 6 jam' },
      { key: 'D', text: 'Minimal 12 jam' },
      { key: 'E', text: 'Minimal 7 hari' }
    ],
    correctAnswer: 'A',
    explanation: 'Pemberian ARNI (Sakubitril/Valsartan) setelah ACE-Inhibitor (seperti Kaptopril/Ramipril) WAJIB diberikan jeda waktu penghentian (washout period) MINIMAL 36 JAM. Pelanggaran jeda ini akan melipatgandakan akumulasi bradikinin secara masif (karena Sakubitril menghambat neprisilin dan Kaptopril menghambat ACE), yang berisiko fatal memicu ANGIOEDEMA LARING akut yang mengancam nyawa.',
    clinicalReference: 'ESC Guidelines Heart Failure 2021 & PERKI Gagal Jantung 2023',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1203',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien gagal ginjal kronik (CKD Stage 5) datang ke IGD dengan kadar Kalium serum 6,9 mEq/L. Pemeriksaan EKG menunjukkan gelombang T tinggi meruncing (tall tented T-waves) dan pemanjangan interval PR.',
    question: 'Obat intravena apakah yang harus segera diinjeksikan sebagai langkah pertama untuk menstabilkan membran miokardium dari ancaman aritmia fatal?',
    options: [
      { key: 'A', text: 'Kalsium Glukonat 10% IV' },
      { key: 'B', text: 'Insulin Reguler + Dextrose 40%' },
      { key: 'C', text: 'Natrium Bikarbonat' },
      { key: 'D', text: 'Furosemid' },
      { key: 'E', text: 'Sodium Polystyrene Sulfonate' }
    ],
    correctAnswer: 'A',
    explanation: 'Pada hiperkalemia berat (K > 6,5 mEq/L) dengan perubahan EKG, tindakan emergensi pertama adalah memberikan KALSIUM GLUKONAT 10% IV (10 mL dalam 2-3 menit). Kalsium tidak menurunkan kadar kalium serum, melainkan menaikkan ambang potensial aksi miokard (membran stabilization) untuk mencegah fibrilasi ventrikel atau henti jantung. Setelah itu, barulah diberikan Insulin + Dekstrosa dan nebulisasi Salbutamol untuk memasukkan kalium ke intraseluler.',
    clinicalReference: 'KDIGO Clinical Practice Guideline for CKD & The Renal Drug Handbook 5th Ed',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1204',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Apoteker di bangsal hemodialisis mengevaluasi peresepan Erythropoietin-Stimulating Agent (ESA/Epoetin alfa) untuk pasien anemia renal CKD (Hb 8,5 g/dL). Sebelum ESA diberikan, status besi pasien harus dipastikan adekuat.',
    question: 'Berapakah target parameter status besi (Saturasi Transferin / TSAT dan Ferritin Serum) yang harus dipenuhi sebelum inisiasi terapi ESA?',
    options: [
      { key: 'A', text: 'TSAT >= 20% dan Ferritin Serum >= 100 ng/mL (hemodialisis: >= 200 ng/mL)' },
      { key: 'B', text: 'TSAT < 10% dan Ferritin < 50 ng/mL' },
      { key: 'C', text: 'TSAT >= 80% dan Ferritin >= 1000 ng/mL' },
      { key: 'D', text: 'Hanya perlu memeriksa hemoglobin tanpa status besi' },
      { key: 'E', text: 'Serum Iron > 500 mcg/dL' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan pedoman KDIGO Anemia in CKD: Terapi ESA tidak akan efektif dan memicu defisiensi besi fungsional bila cadangan besi tubuh tidak mencukupi. Syarat inisiasi terapi ESA adalah Saturasi Transferin (TSAT) >= 20% dan Ferritin serum >= 100 ng/mL untuk pasien non-dialisis (atau >= 200 ng/mL untuk pasien hemodialisis reguler). Target pencapaian Hb dengan ESA adalah 10–11,5 g/dL (tidak direkomendasikan melebihi 13 g/dL karena risiko stroke/trombosis vaskular).',
    clinicalReference: 'KDIGO Clinical Practice Guideline for Anemia in Chronic Kidney Disease',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-1205',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien wanita 45 tahun didiagnosis Deep Vein Thrombosis (DVT) akut pada tungkai kiri pasca operasi ortopedi. Dokter memilih antikoagulan oral langsung (DOAC) Rivaroxaban.',
    question: 'Bagaimanakah regimen inisiasi dosis Rivaroxaban yang tepat sesuai panduan klinis?',
    options: [
      { key: 'A', text: '15 mg dua kali sehari selama 21 hari pertama, dilanjutkan 20 mg sekali sehari' },
      { key: 'B', text: '20 mg sekali sehari langsung sejak hari pertama tanpa loading' },
      { key: 'C', text: '10 mg sekali sehari selama 3 bulan' },
      { key: 'D', text: '2,5 mg dua kali sehari' },
      { key: 'E', text: '60 mg sekali sehari' }
    ],
    correctAnswer: 'A',
    explanation: 'Pedoman terapi DVT/PE dengan Rivaroxaban menetapkan dosis inisiasi 15 mg dua kali sehari bersama makanan selama 3 MINGGU PERTAMA (21 hari) untuk supresi trombus agresif, kemudian dilanjutkan dengan dosis pemeliharaan 20 mg sekali sehari bersama makan malam.',
    clinicalReference: 'CHEST Guideline and Expert Panel Report: Antithrombotic Therapy for VTE Disease',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1206',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pria 52 tahun tiba di IGD Puskesmas DTP dengan nyeri dada tipikal menjalar ke lengan kiri sejak 1,5 jam yang lalu. EKG menunjukkan ST-elevasi 2 mm di sandapan V1-V4 (STEMI anterior). Rumah sakit rujukan terdekat dengan fasilitas Percutaneous Coronary Intervention (PCI) berjarak 3 jam perjalanan.',
    question: 'Apakah strategi reperfusi yang wajib segera diambil dan berapakah target waktu Door-to-Needle yang harus dicapai?',
    options: [
      { key: 'A', text: 'Fibrinolisis intravena (Alteplase / Streptokinase) dengan target Door-to-Needle < 30 menit' },
      { key: 'B', text: 'Tetap rujuk untuk PCI meskipun waktu tempuh > 120 menit' },
      { key: 'C', text: 'Beri aspirin saja lalu observasi di puskesmas' },
      { key: 'D', text: 'Tunda fibrinolisis hingga hasil biomarker troponin keluar dari lab rujukan' },
      { key: 'E', text: 'Berikan antasida dan tunggu nyeri berkurang' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan pedoman PERKI dan ESC STEMI: Jika waktu dari kontak medis pertama hingga tindakan PCI diperkirakan > 120 menit, maka strategi FIBRINOLISIS FARMAKOLOGIS intravena (seperti Alteplase, Tenecteplase, atau Streptokinase) merupakan indikasi mutlak yang harus dimulai dalam waktu < 30 MENIT sejak pasien tiba (Door-to-Needle time < 30 min) pada pasien dengan onset gejala < 12 jam.',
    clinicalReference: 'Pedoman Tatalaksana Sindrom Koroner Akut PERKI 2023 & ESC STEMI Guidelines',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1207',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien fibrilasi atrium kronik sedang rutin minum Warfarin. Hasil laboratorium menunjukkan INR 7,5 tanpa ada tanda perdarahan aktif maupun mayor.',
    question: 'Tindakan farmasi klinis apakah yang direkomendasikan untuk mengatasi kondisi pasien tersebut?',
    options: [
      { key: 'A', text: 'Hentikan sementara 1-2 dosis Warfarin, pantau INR, dan mulai kembali dengan penyesuaian dosis saat INR mendekati target' },
      { key: 'B', text: 'Langsung injeksi Vitamin K intravena bolus cepat' },
      { key: 'C', text: 'Beri Protamin Sulfat' },
      { key: 'D', text: 'Tingkatkan dosis Warfarin dua kali lipat' },
      { key: 'E', text: 'Lakukan transfusi Packed Red Cells (PRC) segera' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan CHEST Guidelines Antithrombotic Therapy: Pada pasien dengan INR antara 4,5 – 10,0 TANPA PERDARAHAN, Vitamin K rutin TIDAK direkomendasikan karena risiko overkoreksi/resistensi warfarin selanjutnya. Tindakan yang tepat adalah menunda (withhold) 1–2 dosis warfarin, monitor ketat, dan turunkan dosis rumatan ketika nilai INR telah turun mencapai rentang terapeutik (target 2,0–3,0).',
    clinicalReference: 'CHEST Guidelines for Management of Anticoagulation Therapy & Dipiro 12th Ed',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1208',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien DM Tipe 2 berusia 60 tahun dengan riwayat infark miokard 2 tahun lalu memiliki kadar HbA1c 8,4% meskipun telah mengonsumsi Metformin 2x500 mg. Dokter meminta apoteker merekomendasikan obat antidiabetes kedua yang memiliki bukti proteksi kardiovaskular.',
    question: 'Golongan obat antidiabetes manakah yang paling tepat ditambahkan sesuai konsensus ADA/PERKENI?',
    options: [
      { key: 'A', text: 'SGLT-2 Inhibitor (Empagliflozin) atau GLP-1 Receptor Agonist (Liraglutide)' },
      { key: 'B', text: 'Sulfonilurea (Glibenklamid)' },
      { key: 'C', text: 'Tiazolidindion (Pioglitazon)' },
      { key: 'D', text: 'Penghambat Alfa Glukosidase (Acarbose)' },
      { key: 'E', text: 'Meglitinid (Repaglinid)' }
    ],
    correctAnswer: 'A',
    explanation: 'Pedoman ADA 2024 & PERKENI 2023: Pada pasien DM Tipe 2 dengan komorbiditas ASCVD (riwayat infark miokard/stroke), pemilihan obat kedua pendamping Metformin (terlepas dari kadar awal HbA1c) WAJIB mengutamakan agen dengan manfaat kardiovaskular terbukti (proven CVD benefit), yaitu golongan SGLT-2 Inhibitor (Empagliflozin/Dapagliflozin) atau GLP-1 RA (Liraglutide/Semaglutide).',
    clinicalReference: 'ADA Standards of Care in Diabetes 2024 & Pedoman Pengelolaan DM Tipe 2 PERKENI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1209',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien DM Tipe 1 dibawa ke IGD dengan penurunan kesadaran, pernapasan Kussmaul berbau aseton, GDS 540 mg/dL, dan ketonuria +3 (Ketoasidosis Diabetik / KAD). Hasil laboratorium menunjukkan Kalium darah 3,1 mEq/L.',
    question: 'Bagaimanakah penatalaksanaan terapi cairan dan insulin yang benar saat kadar kalium masih < 3,3 mEq/L?',
    options: [
      { key: 'A', text: 'TUNDA pemberian insulin; berikan infus KCl 20–40 mEq/jam bersama hidrasi cairan sampai Kalium > 3,3 mEq/L' },
      { key: 'B', text: 'Langsung berikan bolus Insulin Reguler intravena 0,14 U/kgBB' },
      { key: 'C', text: 'Berikan insulin subkutan dosis ganda' },
      { key: 'D', text: 'Berikan infus manitol' },
      { key: 'E', text: 'Berikan tablet KSR oral' }
    ],
    correctAnswer: 'A',
    explanation: 'Pada protokol penanganan KAD: Insulin memicu pergeseran kalium dari ekstraseluler masuk ke dalam sel (intraseluler). Jika insulin diberikan saat kalium darah sudah rendah (< 3,3 mEq/L), kadar kalium ekstraseluler akan anjlok drastis memicu ARITMIA JANTUNG FATAL dan henti napas. Karena itu, INSULIN HARUS DITUNDA sampai kalium dikoreksi hingga mencapai > 3,3 mEq/L bersama hidrasi cairan NaCl 0,9%.',
    clinicalReference: 'ADA Consensus Statement on Hyperglycemic Crises in Patients with Diabetes & Dipiro',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-1210',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Wanita 27 tahun hamil usia gestasi 8 minggu (trimester pertama) didiagnosis hipertiroidisme (Graves Disease) dengan keluhan palpitasi, tremor, dan penurunan BB. Dokter meminta saran obat antitiroid lini pertama yang aman.',
    question: 'Obat antitiroid apakah yang paling aman digunakan pada trimester pertama kehamilan?',
    options: [
      { key: 'A', text: 'Propiltiourasil (PTU)' },
      { key: 'B', text: 'Metimazol' },
      { key: 'C', text: 'Radioactive Iodine (I-131)' },
      { key: 'D', text: 'Kalium Iodida' },
      { key: 'E', text: 'Levotiroksin' }
    ],
    correctAnswer: 'A',
    explanation: 'Pada trimester pertama kehamilan (organogenesis), PROPILTIOURASIL (PTU) adalah obat antitiroid lini pertama pilihan utama karena memiliki ikatan protein plasma tinggi sehingga penetrasi ke plasenta minimal. Sebaliknya, METIMAZOL dikontraindikasikan pada trimester 1 karena risiko teratogenik embrional (aplasia cutis, atresia koana/esofagus). Metimazol baru dapat dipertimbangkan beralih pada trimester 2 dan 3 untuk menghindari toksisitas hepar dari PTU.',
    clinicalReference: 'ATA Guidelines for the Diagnosis and Management of Thyroid Disease During Pregnancy',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1211',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien TB paru gagal pengobatan kategori 1 menjalani pemeriksaan uji cepat molekuler (TCM GeneXpert). Hasil menunjukkan terdeteksi Mycobacterium tuberculosis dengan resistensi Rifampisin, dan uji biakan konvensional mengonfirmasi resistensi Isoniazid.',
    question: 'Kategori resistensi tuberkulosis apakah yang dialami pasien tersebut?',
    options: [
      { key: 'A', text: 'TB-MDR (Multi-Drug Resistant Tuberculosis)' },
      { key: 'B', text: 'TB-XDR (Extensively Drug-Resistant Tuberculosis)' },
      { key: 'C', text: 'TB Monoresisten' },
      { key: 'D', text: 'TB Poliresisten non-MDR' },
      { key: 'E', text: 'TB Sensitif Obat (SO)' }
    ],
    correctAnswer: 'A',
    explanation: 'Definisi baku TB-MDR (Multi-Drug Resistant) menurut WHO dan Kemenkes RI adalah tuberkulosis yang resisten secara simultan terhadap minimal DUA OBAT OAT LINI PERTAMA PALING POTEN, yaitu ISONIAZID (H) dan RIFAMPISIN (R), dengan atau tanpa resistensi OAT lini pertama lainnya.',
    clinicalReference: 'Petunjuk Teknis Penatalaksanaan Tuberkulosis Resisten Obat Kemenkes RI 2023 & WHO Guidelines',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1212',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien TB paru yang sedang menjalani terapi OAT intensif (RHZE) mengeluh kesulitan membedakan lampu lalu lintas warna merah dan hijau serta penglihatan mata kabur.',
    question: 'Obat antituberkulosis manakah yang bertanggung jawab atas efek samping tersebut?',
    options: [
      { key: 'A', text: 'Etambutol' },
      { key: 'B', text: 'Rifampisin' },
      { key: 'C', text: 'Isoniazid' },
      { key: 'D', text: 'Pirazinamid' },
      { key: 'E', text: 'Streptomisin' }
    ],
    correctAnswer: 'A',
    explanation: 'ETAMBUTOL memiliki efek samping khas berupa NEURITIS RETROBULBAR OPTIK yang ditandai dengan penurunan visus, skotoma sentral, dan hilangnya kemampuan membedakan warna merah-hijau (red-green color blindness). Pasien harus diedukasi untuk segera menghentikan Etambutol bila timbul keluhan visual.',
    clinicalReference: 'Pedoman Nasional Pelayanan Kedokteran Tata Laksana Tuberkulosis Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1213',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien di ICU yang menggunakan ventilator mekanik selama 5 hari mengalami demam tinggi, ronki paru basah, dan sputum purulen (Hospital-Acquired / Ventilator-Associated Pneumonia). Apoteker diminta memilih antibiotik empiris yang mencakup kuman Pseudomonas aeruginosa.',
    question: 'Antibiotik beta-laktam antipseudomonas manakah yang tepat digunakan?',
    options: [
      { key: 'A', text: 'Piperasilin/Tazobaktam atau Meropenem atau Cefepime' },
      { key: 'B', text: 'Seftriakson' },
      { key: 'C', text: 'Amoksisilin/Klavulanat' },
      { key: 'D', text: 'Sefazolin' },
      { key: 'E', text: 'Ampisilin' }
    ],
    correctAnswer: 'A',
    explanation: 'Pseudomonas aeruginosa adalah patogen nosokomial oportunistik gram negatif yang resisten terhadap banyak sefalosporin generasi 1-3. Beta-laktam dengan aktivitas antipseudomonas meliputi: PIPERASILIN/TAZOBAKTAM, CEFEPIME, CEFTAZIDIME, MEROPENEM, dan IMIPENEM. Seftriakson, Sefotaksim, dan Amoksisilin TIDAK memiliki aktivitas terhadap Pseudomonas.',
    clinicalReference: 'IDSA/ATS Guidelines for the Management of HAP and VAP & Dipiro 12th Ed',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1214',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien syok septik di ICU tetap mengalami hipotensi dengan tekanan darah 75/45 mmHg (MAP 55 mmHg) meskipun telah menerima resusitasi cairan kristaloid adekuat 30 mL/kgBB.',
    question: 'Vasopresor lini pertama apakah yang direkomendasikan dalam Surviving Sepsis Campaign 2021 untuk mencapai target MAP >= 65 mmHg?',
    options: [
      { key: 'A', text: 'Norepinefrin intravena drip' },
      { key: 'B', text: 'Dopamin dosis rendah' },
      { key: 'C', text: 'Efedrin oral' },
      { key: 'D', text: 'Fenilefrin bolus' },
      { key: 'E', text: 'Dobutamin tunggal' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan panduan Surviving Sepsis Campaign (SSC) 2021: NOREPINEFRIN (Noradrenalin) adalah vasopresor lini pertama pilihan utama untuk syok septik karena memiliki efek alfa-1 adrenergik kuat (vasokonstriksi pembuluh darah sistemik) dengan efek aritmogenik yang jauh lebih rendah dibandingkan Dopamin.',
    clinicalReference: 'Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1215',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien terdiagnosis HIV positif dengan kadar limfosit T CD4+ sebesar 140 sel/uL. Apoteker merekomendasikan pemberian terapi profilaksis infeksi oportunistik.',
    question: 'Obat profilaksis lini pertama apakah yang harus diberikan untuk mencegah infeksi pneumonia Pneumocystis jirovecii (PCP) dan Toxoplasmosis?',
    options: [
      { key: 'A', text: 'Kotrimoksazol (Trimetoprim-Sulfametoksazol) 960 mg sekali sehari' },
      { key: 'B', text: 'Flukonazol 200 mg' },
      { key: 'C', text: 'Asiklovir 400 mg' },
      { key: 'D', text: 'Siprofloksasin 500 mg' },
      { key: 'E', text: 'Metronidazol 500 mg' }
    ],
    correctAnswer: 'A',
    explanation: 'Pada pasien HIV dengan jumlah CD4 < 200 sel/uL (atau stadium klinis 3 dan 4): KOTRIMOKSAZOL (Trimetoprim 160 mg + Sulfametoksazol 800 mg / 1 tablet Forte 960 mg per hari) WAJIB diberikan sebagai profilaksis primer terhadap pneumonia Pneumocystis jirovecii (PCP), toksoplasmosis serebral, dan infeksi bakteri sistemik lainnya.',
    clinicalReference: 'Pedoman Nasional Pengendalian HIV-AIDS Kemenkes RI 2023 & WHO Guidelines on HIV',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1216',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien HIV dengan ensefalitis toksoplasmosis menerima terapi kombinasi Pirimetamin dan Sulfadiazin. Untuk mencegah komplikasi toksisitas supresi sumsum tulang (anemia megaloblastik dan trombositopenia) akibat inhibisi folat, dokter menambahkan agen pelindung.',
    question: 'Agen protektif apakah yang wajib dikombinasikan bersama Pirimetamin?',
    options: [
      { key: 'A', text: 'Asam Folinat (Leucovorin)' },
      { key: 'B', text: 'Asam Folat dosis rendah' },
      { key: 'C', text: 'Vitamin B12' },
      { key: 'D', text: 'Besi Fumarat' },
      { key: 'E', text: 'Filgrastim' }
    ],
    correctAnswer: 'A',
    explanation: 'Pirimetamin adalah penghambat enzim dihidrofolat reduktase poten yang dapat menyebabkan supresi sumsum tulang parah. LEUCOVORIN (Asam Folinat) adalah bentuk aktif asam folat tereduksi yang dapat langsung dimanfaatkan oleh sel sumsum tulang manusia tanpa memerlukan enzim dihidrofolat reduktase (rescue therapy), sehingga mencegah anemia megaloblastik dan pansitopenia tanpa mengurangi efikasi antiprotozoa pirimetamin.',
    clinicalReference: 'Guidelines for the Prevention and Treatment of Opportunistic Infections in Adults and Adolescents with HIV',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-1217',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien hepatitis B kronis dengan HBeAg positif dan DNA HBV tinggi direncanakan memulai terapi antivirus oral jangka panjang. Dokter meminta rekomendasi obat lini pertama yang memiliki barier resistensi genetik tinggi.',
    question: 'Antivirus analog nukleosida/nukleotida manakah yang menjadi pilihan lini pertama menurut pedoman PPHI dan WHO?',
    options: [
      { key: 'A', text: 'Tenofovir disoproxil fumarate (TDF) atau Entekavir' },
      { key: 'B', text: 'Lamivudin' },
      { key: 'C', text: 'Adekavir' },
      { key: 'D', text: 'Ribavirin' },
      { key: 'E', text: 'Asiklovir' }
    ],
    correctAnswer: 'A',
    explanation: 'Pedoman PPHI (Perhimpunan Peneliti Hati Indonesia) & WHO: Lini pertama Hepatitis B Kronis oral adalah TENOFOVIR (TDF / TAF) atau ENTEKAVIR karena memiliki potensi supresi virus sangat tinggi dengan angka resistensi genetik mendekati 0% setelah 5 tahun pemakaian. Sebaliknya, Lamivudin tidak lagi direkomendasikan sebagai lini 1 karena angka resistensinya mencapai > 70% setelah 5 tahun.',
    clinicalReference: 'Konsensus Nasional Penatalaksanaan Hepatitis B di Indonesia PPHI & WHO HBV Guidelines',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1218',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien pria 32 tahun dibawa ke IGD dalam kondisi kejang tonik klonik yang telah berlangsung terus menerus selama 10 menit tanpa pulihnya kesadaran (Status Epileptikus Konvulsif). Pasien telah terpasang akses intravena.',
    question: 'Obat emergensi lini pertama apakah yang harus segera diinjeksikan secara intravena perlahan?',
    options: [
      { key: 'A', text: 'Diazepam 10 mg IV (maksimal kecepatan 5 mg/menit) atau Lorazepam 4 mg IV' },
      { key: 'B', text: 'Fenobarbital 100 mg per oral' },
      { key: 'C', text: 'Karbamazepin sirup' },
      { key: 'D', text: 'Propofol infus titrasi tinggi' },
      { key: 'E', text: 'Asam Valproat sirup' }
    ],
    correctAnswer: 'A',
    explanation: 'Protokol penanganan Status Epileptikus fase dini (0-10 menit): Golongan Benzodiazepin intravena adalah lini pertama mutlak, yaitu DIAZEPAM 10 mg IV (kecepatan lambat 2-5 mg/menit untuk mencegah henti napas) atau LORAZEPAM 4 mg IV. Jika kejang belum berhenti setelah 5-10 menit, dosis dapat diulang sekali sebelum beralih ke OAE lini kedua (Fenitoin / Levetirasetam / Valproat IV).',
    clinicalReference: 'Neurocritical Care Society Status Epilepticus Guidelines & Pedoman Tatalaksana Epilepsi PERDOSSI',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1219',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang wanita 24 tahun penderita epilepsi yang sedang merencanakan kehamilan berkonsultasi mengenai obat antiepilepsi Asam Valproat yang sedang ia konsumsi.',
    question: 'Mengapa Asam Valproat sangat tidak dianjurkan bagi wanita usia subur yang merencanakan kehamilan dan apakah risiko malformasi kongenital utamanya?',
    options: [
      { key: 'A', text: 'Tinggi risiko teratogenik Neural Tube Defect (Spina Bifida) dan penurunan IQ anak' },
      { key: 'B', text: 'Menyebabkan bayi lahir dengan pewarnaan gigi permanen' },
      { key: 'C', text: 'Menyebabkan sindrom Gray Baby' },
      { key: 'D', text: 'Menyebabkan katarak kongenital' },
      { key: 'E', text: 'Menyebabkan ketergantungan fisik seketika pada janin' }
    ],
    correctAnswer: 'A',
    explanation: 'ASAM VALPROAT memiliki risiko teratogenisitas tertinggi di antara seluruh OAE (malformasi kongenital hingga 10%, terutama NEURAL TUBE DEFECTS seperti Spina Bifida, anensefali, defek kraniofasial, dan gangguan kognitif/autisme). Pedoman neurologi merekomendasikan penggantian ke alternatif yang lebih aman seperti LAMOTRIGIN atau LEVETIRASETAM dengan suplementasi Asam Folat dosis tinggi (4-5 mg/hari) sebelum konsepsi.',
    clinicalReference: 'AAN/AES Practice Guideline Update: Management of Epilepsy in Pregnancy & PERDOSSI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1220',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien Parkinson 65 tahun mendapatkan terapi kombinasi Levodopa dan Karbidopa dalam perbandingan dosis tetap (contoh: Sinemet 100/25 mg).',
    question: 'Apakah fungsi farmakologis utama penambahan Karbidopa pada sediaan kombinasi tersebut?',
    options: [
      { key: 'A', text: 'Menghambat enzim Dopa Dekarboksilase di perifer sehingga mencegah degradasi Levodopa sebelum menembus Sawar Darah Otak' },
      { key: 'B', text: 'Bekerja langsung menstimulasi reseptor dopamin D2 di otak' },
      { key: 'C', text: 'Mencegah timbulnya halusinasi' },
      { key: 'D', text: 'Meningkatkan ekskresi levodopa lewat ginjal' },
      { key: 'E', text: 'Menurunkan absorbsi levodopa di saluran cerna' }
    ],
    correctAnswer: 'A',
    explanation: 'Levodopa adalah prazat yang dapat menembus sawar darah otak (BBB), sedangkan Dopamin tidak bisa menembus BBB. Jika Levodopa diberikan tunggal, > 95% akan didekarboksilasi menjadi dopamin di sirkulasi perifer oleh enzim Dopa Dekarboksilase, menimbulkan efek mual hebat dan aritmia jantung. KARBIDOPA adalah penghambat enzim dekarboksilase perifer (yang tidak menembus BBB), sehingga Levodopa tetap utuh mencapai otak dalam jumlah besar dengan efek samping perifer minimal.',
    clinicalReference: 'Goodman & Gilman The Pharmacological Basis of Therapeutics & Dipiro 12th Ed',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1221',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien skizofrenia pria 28 tahun datang dengan keluhan dominan gejala negatif (menarik diri dari lingkungan sosial, afek datar, apati, dan miskin pembicaraan).',
    question: 'Golongan antipsikotik manakah yang lebih efektif dan diutamakan untuk mengatasi gejala negatif skizofrenia dengan risiko ekstrapiramidal rendah?',
    options: [
      { key: 'A', text: 'Antipsikotik Atipikal / Generasi Kedua (SGA) seperti Risperidon, Olanzapin, atau Aripiprazol' },
      { key: 'B', text: 'Antipsikotik Tipikal / Generasi Pertama (FGA) seperti Haloperidol dosis tinggi' },
      { key: 'C', text: 'Klorpromazin' },
      { key: 'D', text: 'Flufenazin' },
      { key: 'E', text: 'Tioridazin' }
    ],
    correctAnswer: 'A',
    explanation: 'Antipsikotik Atipikal (Generasi Kedua / SGA) bekerja sebagai antagonis reseptor Dopamin D2 sekaligus Serotonin 5-HT2A. Blokade 5-HT2A meningkatkan pelepasan dopamin di jalur mesokortikal (memperbaiki GEJALA NEGATIF dan fungsi kognitif) serta di jalur nigrostriatal (menurunkan efek samping EPS secara signifikan dibandingkan FGA seperti Haloperidol).',
    clinicalReference: 'APA Practice Guideline for the Treatment of Patients With Schizophrenia 2020',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1222',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien yang baru mendapatkan injeksi Haloperidol 5 mg IM mengalami spasme otot leher mendadak (tortikolis spastik), mata melotot ke atas (krisis okulogirik), dan kesulitan menelan (Distonia Akut).',
    question: 'Obat injeksi antikolinergik sentral apakah yang merupakan antidotum lini pertama untuk mengatasi distonia akut tersebut?',
    options: [
      { key: 'A', text: 'Difenhidramin 50 mg IV/IM atau Triheksifenidil oral' },
      { key: 'B', text: 'Nalokson IV' },
      { key: 'C', text: 'Flumazenil IV' },
      { key: 'D', text: 'Neostigmin IV' },
      { key: 'E', text: 'Atropin Sulfat tetes' }
    ],
    correctAnswer: 'A',
    explanation: 'Distonia akut adalah efek samping ekstrapiramidal (EPS) akibat ketidakseimbangan dopamin-asetilkolin (penurunan dopamin mendadak memicu dominasi kolinergik di ganglia basalis). Tatalaksana lini pertama adalah pemberian antikolinergik sentral seperti DIFENHIDRAMIN 50 mg IM/IV perlahan atau Triheksifenidil, yang akan memulihkan spasme otot dalam hitungan menit.',
    clinicalReference: 'Psychiatric Services EPS Management Guidelines & Dipiro Pharmacotherapy 12th Ed',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1223',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien depresi yang sedang mengonsumsi antidepresan SSRI Fluoksetin 20 mg/hari mengalami nyeri pasca kecelakaan dan mengonsumsi analgesik opioid Tramadol dosis tinggi tanpa resep. Pasien kemudian dilarikan ke IGD dengan agitasi, hipertermia 39°C, tremor, hiperrefleksia, dan klonus bilateral.',
    question: 'Kondisi toksisitas apakah yang dialami pasien akibat interaksi obat farmakodinamik tersebut?',
    options: [
      { key: 'A', text: 'Sindrom Serotonin (Serotonin Syndrome)' },
      { key: 'B', text: 'Sindrom Neuroleptik Maligna' },
      { key: 'C', text: 'Krisis Kolinergik' },
      { key: 'D', text: 'Koma Miksedema' },
      { key: 'E', text: 'Syok Anafilaktik' }
    ],
    correctAnswer: 'A',
    explanation: 'Kombinasi antara SSRI (Fluoksetin) dan Tramadol (yang juga menghambat reuptake serotonin dan norepinefrin) menyebabkan stimulasi berlebihan pada reseptor serotonin sentral dan perifer (5-HT1A dan 5-HT2A), memicu SINDROM SEROTONIN. Gejala khasnya meliputi trias: perubahan status mental (agitasi/bingung), hiperaktivitas otonom (hipertermia, diaforesis, takikardia), dan abnormalitas neuromuskular (klonus, hiperrefleksia, tremor).',
    clinicalReference: 'The New England Journal of Medicine: The Serotonin Syndrome (Boyer & Shannon)',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1224',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien tukak lambung dengan hasil Urea Breath Test (UBT) positif terinfeksi Helicobacter pylori di daerah dengan angka resistensi Klaritromisin tinggi (> 15%). Dokter berencana meresepkan terapi eradikasi lini pertama berbasis Bismut (Bismuth Quadruple Therapy).',
    question: 'Kombinasi 4 obat manakah yang tepat untuk regimen terapi kuadrupel tersebut selama 14 hari?',
    options: [
      { key: 'A', text: 'PPI dosis ganda + Bismut Subsitrat/Subsalisilat + Metronidazol + Tetrasiklin' },
      { key: 'B', text: 'PPI + Amoksisilin + Klaritromisin' },
      { key: 'C', text: 'PPI + Siprofloksasin + Eritromisin' },
      { key: 'D', text: 'Antasida + Sukralfat + Ranitidine + Kotrimoksazol' },
      { key: 'E', text: 'Vonoprazan + Parasetamol + Deksametason + Cefixime' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Konsensus PEGI (Perkumpulan Gastroenterologi Indonesia) 2023 dan Toronto/Maastricht VI Consensus: Pada area dengan resistensi klaritromisin > 15%, lini pertama baku emas adalah BISMUTH QUADRUPLE THERAPY selama 14 hari yang terdiri dari: PPI dosis ganda 2x/hari + Garam Bismut 4x/hari + Metronidazol 500 mg 3-4x/hari + Tetrasiklin HCl 500 mg 4x/hari.',
    clinicalReference: 'Konsensus Nasional Penatalaksanaan Dispepsia dan H. pylori PEGI 2023 & Maastricht VI',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1225',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien sirosis hepatis mengalami muntah darah merah segar masif akibat ruptur varises esofagus. Dokter meminta apoteker menyiapkan vasokonstriktor splanknikus intravena untuk menghentikan perdarahan.',
    question: 'Obat analog somatostatin intravena apakah yang menjadi pilihan lini pertama?',
    options: [
      { key: 'A', text: 'Oktreotid (Bolus 50 mcg dilanjutkan drip kontinu 50 mcg/jam)' },
      { key: 'B', text: 'Asam Traneksamat oral' },
      { key: 'C', text: 'Propranolol oral' },
      { key: 'D', text: 'Fitomenadion IM' },
      { key: 'E', text: 'Furosemid IV' }
    ],
    correctAnswer: 'A',
    explanation: 'Pada perdarahan varises esofagus akut: OKTREOTID (atau Somatostatin) bekerja selektif memicu vasokonstriksi pembuluh darah splanknikus melalui inhibisi pelepasan glukagon vasodilatator, sehingga menurunkan aliran darah dan tekanan vena porta secara cepat. Diberikan bolus IV 50 mcg dilanjutkan infus kontinu 50 mcg/jam selama 2–5 hari bersama tindakan ligasi endoskopi.',
    clinicalReference: 'Baveno VII Consensus Guidelines: Personalized Care in Portal Hypertension',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1226',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien kanker paru akan menjalani kemoterapi berbasis Sisplatin dosis tinggi (> 70 mg/m2), yang merupakan agen dengan potensi emetogenik sangat tinggi (HEC / High Emetogenic Chemotherapy, risiko muntah > 90%).',
    question: 'Regimen profilaksis antiemetik kombinasi apakah yang direkomendasikan dalam pedoman ASCO/NCCN?',
    options: [
      { key: 'A', text: 'Kombinasi 4 obat: 5-HT3 Antagonist (Ondansetron) + Deksametason + NK1 Antagonist (Aprepitant) + Olanzapin' },
      { key: 'B', text: 'Metoklopramid tablet tunggal sebelum kemoterapi' },
      { key: 'C', text: 'Dimenhidrinat sirup' },
      { key: 'D', text: 'Domperidone 10 mg 3x/hari saja' },
      { key: 'E', text: 'Vitamin B6 injeksi' }
    ],
    correctAnswer: 'A',
    explanation: 'Pedoman ASCO, NCCN, dan MASCC/ESMO menetapkan bahwa untuk kemoterapi berisiko emetogenik tinggi (HEC seperti Sisplatin), profilaksis baku adalah REGIMEN 4 OBAT (Quadruple Antiemetic Therapy) sebelum infus dimulai: 1) Antagonis Reseptor 5-HT3 (Ondansetron/Granisetron/Palonosetron), 2) Deksametason, 3) Antagonis Reseptor Neurokinin-1 / NK1-RA (Aprepitant/Fosaprepitant), dan 4) Olanzapin.',
    clinicalReference: 'ASCO Clinical Practice Guideline Update: Antiemetics in Oncology 2020',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-1227',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Saat infus Doksorubisin berlangsung pada pasien limfoma, jarum infus bergeser dan cairan obat sitostatika vesikan tersebut merembes ke jaringan subkutan lengan (ekstravasasi). Pasien mengeluh nyeri terbakar dan bengkak eritema.',
    question: 'Antidotum spesifik intravena apakah yang harus segera diinfuskan untuk mencegah nekrosis jaringan akibat ekstravasasi antrasiklin?',
    options: [
      { key: 'A', text: 'Deksrazoksan (Dexrazoxane / Savene)' },
      { key: 'B', text: 'Natrium Tiosulfat' },
      { key: 'C', text: 'Hialuronidase' },
      { key: 'D', text: 'Dimetilsulfoksida (DMSO) topikal' },
      { key: 'E', text: 'N-Asetilsistein' }
    ],
    correctAnswer: 'A',
    explanation: 'DEKSRAZOKSAN (Totect / Savene) adalah antidotum spesifik yang disetujui FDA dan ESMO untuk mengatasi ekstravasasi golongan antrasiklin (Doksorubisin, Daunorubisin, Epirubisin). Obat ini bekerja melalui khelasi ion besi dan inhibisi topoisomerase II sehingga memutus pembentukan radikal bebas perusak jaringan. Diberikan IV sekali sehari selama 3 hari berturut-turut dimulai dalam 6 jam pertama pasca kejadian.',
    clinicalReference: 'ESMO-EONS Clinical Practice Guideline on Extravasation of Antineoplastic Agents',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-1228',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien kanker limfoma menerima kemoterapi Siklofosfamid dosis tinggi. Metabolit aktif akrolein dari siklofosfamid diketahui dapat menyebabkan iritasi kandung kemih parah berupa sistitis hemoragik (hematuria masif).',
    question: 'Senyawa uroprotektor apakah yang wajib diberikan bersamaan untuk menginaktivasi metabolit akrolein di saluran kemih?',
    options: [
      { key: 'A', text: 'MESNA (Sodium 2-mercaptoethane sulfonate)' },
      { key: 'B', text: 'Asam Folinat' },
      { key: 'C', text: 'Allopurinol' },
      { key: 'D', text: 'Deksrazoksan' },
      { key: 'E', text: 'Amifostin' }
    ],
    correctAnswer: 'A',
    explanation: 'MESNA (Natrium 2-merkaptoetanasulfonat) adalah agen uroprotektor spesifik. Gugus sulfhidril (-SH) bebas pada Mesna berikatan langsung secara stabil dengan metabolit toksik AKROLEIN di dalam lumen vesika urinaria (kandung kemih), membentuk tioeter non-toksik yang larut air dan diekskresikan aman melalui urin, sehingga mencegah sistitis hemoragik.',
    clinicalReference: 'Cancer Chemotherapy and Biotherapy: Principles and Practice & Dipiro 12th Ed',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1229',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang anak berusia 2 tahun dengan berat badan 10 kg mengalami demam 39,5°C disertai kejang demam di rumah. Orang tua memiliki sediaan Diazepam rektal suppositoria/enema di kotak obat.',
    question: 'Berapakah dosis Diazepam rektal yang tepat diberikan untuk anak dengan berat badan tersebut?',
    options: [
      { key: 'A', text: '5 mg rektal' },
      { key: 'B', text: '10 mg rektal' },
      { key: 'C', text: '2 mg rektal' },
      { key: 'D', text: '20 mg rektal' },
      { key: 'E', text: '0,5 mg rektal' }
    ],
    correctAnswer: 'A',
    explanation: 'Pedoman IDAI (Ikatan Dokter Anak Indonesia) untuk penanganan kejang demam anak di rumah: Sediaan Diazepam rektal diberikan dengan ketentuan dosis: 5 MG untuk anak dengan BERAT BADAN < 12 KG (atau usia < 3 tahun), dan 10 MG untuk anak dengan BERAT BADAN >= 12 KG. Jika kejang belum berhenti dalam 5 menit, segera bawa ke faskes terdekat.',
    clinicalReference: 'Konsensus Penatalaksanaan Kejang Demam IDAI 2021',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1230',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien lansia 72 tahun dengan riwayat insomnia dan depresi ringan diresepkan Amitriptilin 25 mg pada malam hari. Apoteker melakukan skrining kesesuaian resep berdasarkan Kriteria Beers 2023 (AGS Beers Criteria for Potentially Inappropriate Medication Use in Older Adults).',
    question: 'Apakah alasan klinis mengapa Amitriptilin masuk dalam kategori obat yang harus dihindari pada populasi geriatri?',
    options: [
      { key: 'A', text: 'Efek antikolinergik kuat menyebabkan retensi urin, konstipasi parah, sedasi berlebih, konfusi, dan risiko jatuh/fraktur' },
      { key: 'B', text: 'Menyebabkan nefrotoksisitas akut' },
      { key: 'C', text: 'Menyebabkan diare dehidrasi' },
      { key: 'D', text: 'Menyebabkan hipertensi resisten' },
      { key: 'E', text: 'Menyebabkan hiperglikemia krisis' }
    ],
    correctAnswer: 'A',
    explanation: 'Menurut AGS Beers Criteria 2023: Antidepresan trisiklik (TCA) seperti AMITRIPTILIN dan IMIPRAMIN sangat antikolinergik dan sedatif. Pada lansia, obat ini dapat memicu hipotensi ortostatik, retensi urin akut (terutama pada pria BPH), konstipasi impaksi, mulut kering, delirium/konfusi, serta meningkatkan risiko jatuh (falls) dan fraktur tulang panggul. Pilihan yang lebih aman adalah SSRI (Sertralin/Escitalopram).',
    clinicalReference: 'American Geriatrics Society 2023 Updated AGS Beers Criteria for Potentially Inappropriate Medication Use in Older Adults',
    difficulty: 'Mudah'
  },

  // =========================================================================
  // 💼 DOMAIN 2: MANAJEMEN, FARMAKOEKONOMI & REGULASI (q-1231 s/d q-1242)
  // =========================================================================
  {
    id: 'q-1231',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Instalasi Farmasi Rumah Sakit melakukan analisis matriks kombinasi ABC-VEN terhadap 1.200 item obat dalam sistem pengadaan tahunan. Salah satu kategori hasil matriks adalah kelompok obat AV (Always Vital).',
    question: 'Bagaimanakah strategi tata kelola dan pengendalian persediaan yang tepat untuk kelompok obat AV?',
    options: [
      { key: 'A', text: 'Pengawasan ketat prioritas utama, tidak boleh terjadi kekosongan sama sekali, evaluasi stok berkala harian' },
      { key: 'B', text: 'Langsung dihapus dari formularium untuk menghemat biaya' },
      { key: 'C', text: 'Pesan hanya jika ada pasien yang meminta' },
      { key: 'D', text: 'Beli dalam jumlah sangat berlebih tanpa batas safety stock' },
      { key: 'E', text: 'Serahkan pengadaan sepenuhnya ke pihak ketiga tanpa pengawasan' }
    ],
    correctAnswer: 'A',
    explanation: 'Kelompok AV (Pareto A dan Kategori Vital) adalah obat yang menyerap proporsi anggaran keuangan besar (70-80% nilai dana) dan bersifat mutlak menyelamatkan nyawa (life-saving). Strategi pengelolaannya adalah: Pengendalian persediaan super ketat, penghitungan stok harian/mingguan, negosiasi harga terbaik dari distributor, serta jaminan ketersediaan 100% tanpa boleh terjadi stock-out.',
    clinicalReference: 'Buku Pedoman Pengelolaan Perbekalan Farmasi di Rumah Sakit Kemenkes RI & WHO Management of Drugs',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1232',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Apotek "Sehat Bersama" memiliki kebutuhan tahunan tablet Parasetamol (D) sebesar 10.000 boks per tahun. Biaya pemesanan setiap kali transaksi (S) adalah Rp 50.000, dan biaya penyimpanan per boks per tahun (H) adalah Rp 1.000.',
    question: 'Berapakah jumlah pemesanan paling ekonomis (Economic Order Quantity / EOQ)?',
    options: [
      { key: 'A', text: '1.000 boks' },
      { key: 'B', text: '500 boks' },
      { key: 'C', text: '2.000 boks' },
      { key: 'D', text: '100 boks' },
      { key: 'E', text: '5.000 boks' }
    ],
    correctAnswer: 'A',
    explanation: 'Rumus EOQ = akar((2 x D x S) / H). Di mana D = 10.000 boks, S = Rp 50.000, dan H = Rp 1.000. Maka EOQ = akar((2 x 10.000 x 50.000) / 1.000) = akar(1.000.000.000 / 1.000) = akar(1.000.000) = 1.000 boks per satu kali pemesanan.',
    clinicalReference: 'Manajemen Farmasi Teori dan Praktik & Quick JD Managing Drug Supply',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1233',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Rata-rata penjualan sirup Amoksisilin di apotek adalah 40 botol per hari. Waktu tunggu (Lead Time / LT) pengiriman dari PBF adalah 5 hari kerja. Apoteker menetapkan jumlah persediaan pengaman (Safety Stock) sebanyak 100 botol.',
    question: 'Pada tingkat sisa stok berapakah apoteker harus melakukan pemesanan kembali (Reorder Point / ROP)?',
    options: [
      { key: 'A', text: '300 botol' },
      { key: 'B', text: '200 botol' },
      { key: 'C', text: '140 botol' },
      { key: 'D', text: '500 botol' },
      { key: 'E', text: '240 botol' }
    ],
    correctAnswer: 'A',
    explanation: 'Rumus Reorder Point: ROP = (Penggunaan Harian x Lead Time) + Safety Stock. ROP = (40 botol/hari x 5 hari) + 100 botol = 200 + 100 = 300 botol. Artinya, saat sisa stok di rak menyentuh 300 botol, Surat Pesanan harus segera diterbitkan.',
    clinicalReference: 'Petunjuk Teknis Standar Pelayanan Kefarmasian di Apotek Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1234',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Apoteker membeli obat paten dari PBF dengan Harga Pokok Pembelian (HPP neto sebelum pajak) sebesar Rp 100.000 per botol. Apotek menetapkan margin laba kotor sebesar 20% dan wajib memungut PPN sebesar 11%.',
    question: 'Berapakah Harga Jual Apotek (HJA) yang harus dibayar oleh pasien?',
    options: [
      { key: 'A', text: 'Rp 133.200' },
      { key: 'B', text: 'Rp 120.000' },
      { key: 'C', text: 'Rp 131.000' },
      { key: 'D', text: 'Rp 144.000' },
      { key: 'E', text: 'Rp 122.200' }
    ],
    correctAnswer: 'A',
    explanation: 'Perhitungan HJA: Harga setelah margin = HPP x (1 + Margin) = 100.000 x 1,20 = Rp 120.000. HJA akhir (ditambah PPN 11%) = 120.000 x 1,11 = Rp 133.200. (Atau: HPP neto x 1,11 x 1,20 = Rp 133.200).',
    clinicalReference: 'Undang-Undang Harmonisasi Peraturan Perpajakan (UU HPP No. 7/2021) & Akuntansi Apotek',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1235',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Apotek baru memiliki total Biaya Operasional Tetap (Fixed Cost) sebesar Rp 30.000.000 per bulan. Data persentase Biaya Variabel (Variable Cost) rata-rata adalah 60% dari total omzet penjualan.',
    question: 'Berapakah nilai omzet penjualan minimal yang harus dicapai apotek untuk mencapai Titik Impas (Break Even Point / BEP Rupiah)?',
    options: [
      { key: 'A', text: 'Rp 75.000.000 per bulan' },
      { key: 'B', text: 'Rp 50.000.000 per bulan' },
      { key: 'C', text: 'Rp 60.000.000 per bulan' },
      { key: 'D', text: 'Rp 90.000.000 per bulan' },
      { key: 'E', text: 'Rp 120.000.000 per bulan' }
    ],
    correctAnswer: 'A',
    explanation: 'Rumus BEP (Rupiah) = Biaya Tetap / (1 - (Biaya Variabel / Penjualan)). Di mana Biaya Variabel / Penjualan = 60% = 0,60. Maka BEP = 30.000.000 / (1 - 0,60) = 30.000.000 / 0,40 = Rp 75.000.000 per bulan.',
    clinicalReference: 'Financial Management for Pharmacists & Dasar-Dasar Manajemen Farmasi',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1236',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Dalam kajian farmakoekonomi evaluasi formularium RS, Obat Hipertensi Baru (Obat B) menghasilkan biaya total Rp 18.000.000 dengan efektivitas 0,8 QALY (Quality-Adjusted Life Years). Obat Standar (Obat A) menghasilkan biaya Rp 10.000.000 dengan efektivitas 0,6 QALY.',
    question: 'Berapakah nilai Incremental Cost-Effectiveness Ratio (ICER) dari Obat B dibandingkan Obat A?',
    options: [
      { key: 'A', text: 'Rp 40.000.000 per QALY' },
      { key: 'B', text: 'Rp 8.000.000 per QALY' },
      { key: 'C', text: 'Rp 20.000.000 per QALY' },
      { key: 'D', text: 'Rp 14.000.000 per QALY' },
      { key: 'E', text: 'Rp 28.000.000 per QALY' }
    ],
    correctAnswer: 'A',
    explanation: 'Rumus ICER = (Biaya B - Biaya A) / (Efektivitas B - Efektivitas A). Selisih Biaya = 18.000.000 - 10.000.000 = Rp 8.000.000. Selisih Efektivitas = 0,8 - 0,6 = 0,2 QALY. Maka ICER = 8.000.000 / 0,2 = Rp 40.000.000 per penambahan 1 QALY.',
    clinicalReference: 'Pedoman Penerapan Kajian Farmakoekonomi Kemenkes RI & Drummond Methods for Economic Evaluation',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1237',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Apoteker Penanggung Jawab Apotek (APA) akan memesan obat injeksi Fentanil dan tablet Morfin Sulfat ke PBF Kimia Farma (distributor tunggal narkotika).',
    question: 'Berdasarkan regulasi Permenkes No. 3 Tahun 2015, bagaimanakah ketentuan pembuatan Surat Pesanan (SP) Narkotika yang sah?',
    options: [
      { key: 'A', text: 'Satu formulir SP Narkotika hanya boleh untuk 1 jenis obat narkotika, dibuat sekurang-kurangnya rangkap 3, dan ditandatangani APA dengan nomor SIPA' },
      { key: 'B', text: 'Boleh menggabungkan Fentanil dan Morfin dalam 1 lembar SP' },
      { key: 'C', text: 'Cukup dibuat rangkap 1 asli tanpa arsip' },
      { key: 'D', text: 'Boleh ditandatangani oleh Tenaga Teknis Kefarmasian' },
      { key: 'E', text: 'Format SP sama dengan surat pesanan obat bebas biasa' }
    ],
    correctAnswer: 'A',
    explanation: 'Ketentuan regulasi Surat Pesanan Narkotika (PMK No. 3/2015 & UU No. 17/2023): Satu lembar SP Narkotika HANYA BERLAKU UNTUK SATU JENIS ZAT NARKOTIKA (spesifik dosis dan bentuk sediaan), dicetak dalam formulir khusus sekurang-kurangnya RANGKAP 3 (atau 4 untuk BPOM), dan WAJIB ditandatangani basah oleh Apoteker Penanggung Jawab (APJ) dengan mencantumkan nama lengkap, nomor SIPA, dan stempel resmi apotek.',
    clinicalReference: 'Permenkes RI No. 3 Tahun 2015 tentang Peredaran, Penyimpanan, Pemusnahan, dan Pelaporan Narkotika, Psikotropika, dan Prekursor Farmasi',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1238',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Dalam inspeksi kepatuhan CDOB dan Pelayanan Kefarmasian di apotek, Balai POM memeriksa lemari penyimpanan sediaan tablet Diazepam dan Alprazolam.',
    question: 'Apakah persyaratan fisik lemari penyimpanan obat golongan psikotropika dan narkotika di apotek?',
    options: [
      { key: 'A', text: 'Terbuat dari bahan yang kuat (kayu tebal/besi), menempel pada dinding/lantai, memiliki 2 kunci berbeda yang dipegang APJ dan TTK yang ditunjuk' },
      { key: 'B', text: 'Diletakkan di etalase depan kasir agar mudah dipantau pengunjung' },
      { key: 'C', text: 'Cukup menggunakan laci meja kerja yang tidak terkunci' },
      { key: 'D', text: 'Diletakkan bersama dengan obat bebas terbatas lainnya' },
      { key: 'E', text: 'Boleh terbuat dari lemari kaca transparan biasa' }
    ],
    correctAnswer: 'A',
    explanation: 'Sesuai Permenkes No. 3 Tahun 2015 Pasal 26: Lemari khusus penyimpanan Narkotika dan Psikotropika harus memenuhi syarat: terbuat dari bahan yang kuat (kayu tebal/besi), tidak mudah dipindahkan dan menempel kokoh pada dinding atau lantai, diletakkan di tempat aman yang tidak terlihat oleh umum, serta MEMILIKI DUA PINTU DENGAN DUA BUAH KUNCI YANG BERBEDA (kunci dipegang oleh Apoteker Penanggung Jawab dan pegawai lain yang dikuasakan).',
    clinicalReference: 'Permenkes RI No. 3 Tahun 2015 & Standar Pelayanan Kefarmasian di Apotek Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1239',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Apoteker di apotek menyortir berkas resep dokter yang menumpuk di gudang arsip. Resep yang telah disimpan lebih dari 5 tahun direncanakan untuk dimusnahkan.',
    question: 'Bagaimanakah tata cara pemusnahan berkas resep apotek yang sesuai regulasi?',
    options: [
      { key: 'A', text: 'Dimusnahkan dengan cara dibakar atau dihancurkan, dibuat Berita Acara Pemusnahan Resep, dan dilaporkan ke Dinas Kesehatan Kabupaten/Kota' },
      { key: 'B', text: 'Dibuang langsung ke tempat sampah umum tanpa dokumentasi' },
      { key: 'C', text: 'Dijual ke pengepul kertas bekas' },
      { key: 'D', text: 'Resep harus disimpan selamanya tanpa boleh dimusnahkan' },
      { key: 'E', text: 'Cukup dirobek sendiri tanpa saksi' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Permenkes No. 73 Tahun 2016 tentang Standar Pelayanan Kefarmasian di Apotek: Resep yang telah disimpan melebihi jangka waktu 5 TAHUN dapat dimusnahkan. Pemusnahan dilakukan dengan cara dibakar, dicacah, atau metode lain oleh Apoteker Penanggung Jawab disaksikan oleh sekurang-kurangnya seorang petugas apotek, kemudian dibuat BERITA ACARA PEMUSNAHAN RESEP dan dikirimkan ke Dinas Kesehatan Kabupaten/Kota dan Balai POM setempat.',
    clinicalReference: 'Permenkes RI No. 73 Tahun 2016 tentang Standar Pelayanan Kefarmasian di Apotek',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1240',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien wanita datang ke apotek mengeluhkan nyeri ulu hati kambuh dan meminta kapsul Omeprazole 20 mg tanpa membawa resep baru. Pasien menyatakan sebelumnya pernah berobat ke dokter spesialis dan menerima obat yang sama.',
    question: 'Berdasarkan Keputusan Menteri Kesehatan tentang Daftar Obat Wajib Apotek (DOWA No. 2), berapakah batas jumlah maksimal kapsul Omeprazole yang boleh diserahkan oleh apoteker?',
    options: [
      { key: 'A', text: 'Maksimal 7 tablet/kapsul' },
      { key: 'B', text: 'Maksimal 20 tablet/kapsul' },
      { key: 'C', text: 'Maksimal 10 tablet/kapsul' },
      { key: 'D', text: 'Maksimal 30 tablet/kapsul' },
      { key: 'E', text: 'Sama sekali tidak boleh diberikan tanpa resep dokter' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Keputusan Menteri Kesehatan RI No. 924/Menkes/Per/X/1993 tentang Daftar Obat Wajib Apotek No. 2 (DOWA 2): Omeprazole dapat diserahkan oleh apoteker tanpa resep dokter kepada pasien yang sebelumnya pernah menggunakannya dengan rekomendasi dokter, dengan jumlah penyerahan MAKSIMAL 7 TABLET/KAPSUL (untuk pengobatan jangka pendek dispepsia/refluks).',
    clinicalReference: 'Keputusan Menteri Kesehatan RI tentang Daftar Obat Wajib Apotek (DOWA) No. 2',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1241',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Seorang ibu akseptor KB datang ke apotek ingin membeli pil kontrasepsi oral kombinasi (Levonorgestrel + Etinilestradiol) tanpa resep dokter. Ibu tersebut menunjukkan kartu peserta KB dan menyatakan telah rutin meminum pil tersebut selama 1 tahun terakhir.',
    question: 'Berdasarkan DOWA No. 1, berapakah jumlah maksimal pil kontrasepsi yang boleh diserahkan apoteker?',
    options: [
      { key: 'A', text: 'Maksimal 1 siklus (blister)' },
      { key: 'B', text: 'Maksimal 3 siklus' },
      { key: 'C', text: 'Maksimal 6 siklus' },
      { key: 'D', text: 'Maksimal 12 siklus untuk persediaan setahun' },
      { key: 'E', text: 'Dilarang diserahkan tanpa resep baru tiap bulan' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Keputusan Menteri Kesehatan RI No. 347/Menkes/SK/VII/1990 tentang Obat Wajib Apotek No. 1 (DOWA 1): Pil Kontrasepsi Oral dapat diserahkan oleh apoteker tanpa resep dokter KEPADA AKSEPTOR LAMA yang telah mendapatkan pemeriksaan dokter sebelumnya, dengan batas jumlah penyerahan MAKSIMAL 1 SIKLUS (1 blister untuk 1 bulan penggunaan).',
    clinicalReference: 'Keputusan Menteri Kesehatan RI tentang Daftar Obat Wajib Apotek (DOWA) No. 1',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1242',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Laporan keuangan Apotek "Mitra Sehat" mencatat total Harga Pokok Penjualan (HPP) selama satu tahun buku adalah Rp 600.000.000. Data rata-rata nilai persediaan barang (Average Inventory) di apotek tersebut adalah Rp 50.000.000.',
    question: 'Berapakah nilai perputaran persediaan (Turnover Ratio / TOR) apotek tersebut dalam setahun?',
    options: [
      { key: 'A', text: '12 kali per tahun' },
      { key: 'B', text: '6 kali per tahun' },
      { key: 'C', text: '24 kali per tahun' },
      { key: 'D', text: '8 kali per tahun' },
      { key: 'E', text: '10 kali per tahun' }
    ],
    correctAnswer: 'A',
    explanation: 'Rumus Turnover Ratio (TOR) = Total HPP Tahunan / Rata-rata Nilai Persediaan. TOR = Rp 600.000.000 / Rp 50.000.000 = 12 KALI PER TAHUN. Nilai TOR 12x/tahun menunjukkan bahwa perputaran barang apotek sangat sehat dan efisien (rata-rata persediaan berputar berganti sekali setiap bulan).',
    clinicalReference: 'Financial Management for Pharmacists & Manajemen Farmasi Komunitas',
    difficulty: 'Mudah'
  },

  // =========================================================================
  // 🏭 DOMAIN 3: TEKNOLOGI FARMASI & INDUSTRI CPOB (q-1243 s/d q-1250)
  // =========================================================================
  {
    id: 'q-1243',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Dalam proses pencetakan tablet Parasetamol dengan metode cetak langsung pada mesin rotary tablet press, tablet yang keluar mengalami pemisahan lapisan mahkota atas atau bawah terlepas dari badan tablet utama.',
    question: 'Apakah nama kerusakan fisik tablet tersebut dan faktor teknis apakah yang menjadi pemicu utamanya?',
    options: [
      { key: 'A', text: 'Capping; dipicu oleh udara yang terjebak di dalam massa granul saat kompresi dan kelebihan fines (serbuk halus)' },
      { key: 'B', text: 'Mottling; dipicu oleh pewarnaan yang tidak merata' },
      { key: 'C', text: 'Picking; dipicu oleh kelebihan lubrikan' },
      { key: 'D', text: 'Chipping; dipicu oleh punch yang terlalu longgar' },
      { key: 'E', text: 'Binding; dipicu oleh die yang terlalu licin' }
    ],
    correctAnswer: 'A',
    explanation: 'CAPPING adalah kondisi di mana bagian atas atau bawah mahkota tablet terpisah sebagian atau seutuhnya dari badan tablet. Penyebab utamanya adalah TERJEBAKNYA UDARA (air entrapment) di dalam ruang die selama proses penekanan cepat, kelebihan proporsi serbuk halus (fines), atau kelembaban granul yang terlalu kering sehingga ikatan antar partikel tidak elastis.',
    clinicalReference: 'The Theory and Practice of Industrial Pharmacy (Lachman) & Voigt Buku Pelajaran Teknologi Farmasi',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1244',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Apoteker supervisor produksi tablet ibuprofen menemukan sebagian massa granul menempel pada permukaan punch atas dan bawah mesin cetak sehingga permukaan tablet tampak berlubang-lubang kecil.',
    question: 'Apakah nama masalah cacat tablet tersebut dan tindakan korektif apakah yang harus dilakukan?',
    options: [
      { key: 'A', text: 'Sticking dan Picking; tambahkan atau tingkatkan konsentrasi lubrikan (seperti Magnesium Stearat) dan keringkan granul bila terlalu lembap' },
      { key: 'B', text: 'Capping; tambahkan air ke dalam massa cetak' },
      { key: 'C', text: 'Mottling; kurangi pengikat' },
      { key: 'D', text: 'Lamination; turunkan kecepatan mesin cetak' },
      { key: 'E', text: 'Whiskering; ganti punch dengan punch baru' }
    ],
    correctAnswer: 'A',
    explanation: 'STICKING adalah kondisi massa granul menempel pada dinding die atau punch, sedangkan PICKING adalah bentuk spesifik sticking di mana granul menempel pada ukiran logo punch menghasilkan lubang pada permukaan tablet. Solusinya adalah menurunkan kadar air granul (bila kelembaban berlebih) dan MENINGKATKAN KONSENTRASI LUBRIKAN (seperti Magnesium Stearat 0,5–1%) serta memoles permukaan punch.',
    clinicalReference: 'Pharmaceutics: The Science of Dosage Form Design (Aulton) & Lachman',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1245',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Dalam uji ekivalensi in vitro (Biowaiver), apoteker R&D menguji kesamaan profil disolusi terbanding tablet generik Kaptopril (uji) terhadap tablet inovator (komparator) pada media pH 1,2; pH 4,5; dan pH 6,8. Dari perhitungan rumus Moore & Flanner didapatkan nilai faktor similaritas (f2) sebesar 68.',
    question: 'Bagaimanakah kesimpulan keterterimaan profil disolusi terbanding tersebut menurut pedoman BPOM?',
    options: [
      { key: 'A', text: 'Profil disolusi dinyatakan ekivalen / serupa (karena nilai f2 berada pada rentang 50 - 100)' },
      { key: 'B', text: 'Profil disolusi dinyatakan tidak serupa karena f2 harus tepat 100' },
      { key: 'C', text: 'Gagal uji karena f2 harus < 50' },
      { key: 'D', text: 'Uji harus diulang dengan 100 tablet' },
      { key: 'E', text: 'Hanya diakui jika f1 bernilai > 50' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Pedoman Uji Bioekivalensi BPOM RI dan FDA: Dua profil disolusi dinyatakan serupa (similar / ekivalen) jika nilai FAKTOR SIMILARITAS (f2) berada di antara 50 HINGGA 100 (50 <= f2 <= 100). Nilai f2 = 50 setara dengan perbedaan rata-rata 10% pada setiap titik waktu pengambilan sampel.',
    clinicalReference: 'Peraturan BPOM RI tentang Pedoman Uji Bioekivalensi & WHO Technical Report Series',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1246',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Apoteker bagian Quality Control (QC) mengevaluasi hasil uji disolusi tahap pertama (S1) terhadap 6 tablet ciprofloksasin. Pada monografi Farmakope disyaratkan nilai toleransi Q = 80% pada waktu 30 menit.',
    question: 'Apakah kriteria penerimaan disolusi tahap S1 pada Farmakope Indonesia?',
    options: [
      { key: 'A', text: 'Tiap unit tablet yang diuji tidak kurang dari Q + 5% (artinya tiap tablet >= 85%)' },
      { key: 'B', text: 'Rata-rata 6 tablet >= 80%' },
      { key: 'C', text: 'Boleh ada 1 tablet bernilai < Q - 15%' },
      { key: 'D', text: 'Tiap tablet harus tepat 100%' },
      { key: 'E', text: 'Rata-rata tidak kurang dari Q - 5%' }
    ],
    correctAnswer: 'A',
    explanation: 'Kriteria Penerimaan Uji Disolusi Farmakope Indonesia VI / USP: - Tahap S1 (6 tablet): Tiap unit tablet TIDAK KURANG DARI Q + 5%. - Tahap S2 (tambah 6 tablet, total 12): Rata-rata 12 unit >= Q, dan tidak ada satu pun unit < Q - 15%. - Tahap S3 (tambah 12 tablet, total 24): Rata-rata 24 unit >= Q, tidak lebih dari 2 unit < Q - 15%, dan tidak satu pun unit < Q - 25%.',
    clinicalReference: 'Farmakope Indonesia Edisi VI Lampiran Uji Disolusi & United States Pharmacopeia (USP)',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1247',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Dalam produksi sediaan injeksi steril menggunakan proses pengisian aseptis (aseptic processing), zona pengisian wadah ampul/vial wajib dilakukan di bawah aliran udara Laminar Air Flow (LAF) Ruang Bersih Kelas A.',
    question: 'Berapakah batas kecepatan aliran udara laminer (laminar airflow velocity) yang dipersyaratkan oleh CPOB pada area kerja Kelas A?',
    options: [
      { key: 'A', text: '0,36 - 0,54 m/detik' },
      { key: 'B', text: '1,0 - 2,0 m/detik' },
      { key: 'C', text: '0,05 - 0,10 m/detik' },
      { key: 'D', text: '5,0 - 10,0 m/detik' },
      { key: 'E', text: 'Tidak ada batas kecepatan' }
    ],
    correctAnswer: 'A',
    explanation: 'Sesuai Pedoman CPOB 2018/2024 Aneks 1 (Pembuatan Produk Steril): Sistem aliran udara searah (laminar airflow) di Ruang Bersih Kelas A harus memberikan kecepatan udara homogen pada rentang 0,36 HINGGA 0,54 M/DETIK (nilai acuan) pada posisi pengujian di bawah filter HEPA, untuk menyapu partikel dan mencegah kontaminasi mikroba di area terbuka produk.',
    clinicalReference: 'Pedoman Cara Pembuatan Obat yang Baik (CPOB) BPOM RI Aneks 1 Pembuatan Produk Steril',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1248',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Apoteker di bagian Validasi Pembersihan (Cleaning Validation) menghitung batas kontaminasi carryover bahan aktif Parasetamol (Produk A) ke dalam batch produk berikutnya Klorfeniramin Maleat (Produk B). Data: Dosis Harian Terendah Produk A (TDDA) = 500 mg, Ukuran Batch Terkecil Produk B (MBSB) = 200.000 mg, Safety Factor (SF) = 1.000, dan Dosis Harian Maksimum Produk B (LDDB) = 16 mg.',
    question: 'Berapakah nilai Maximum Allowable Carryover (MACO) dari Produk A ke dalam Produk B?',
    options: [
      { key: 'A', text: '6,25 mg' },
      { key: 'B', text: '62,5 mg' },
      { key: 'C', text: '0,625 mg' },
      { key: 'D', text: '625 mg' },
      { key: 'E', text: '12,5 mg' }
    ],
    correctAnswer: 'A',
    explanation: 'Rumus MACO berdasarkan kriteria dosis terapeutik: MACO = (TDDA x MBSB) / (SF x LDDB). MACO = (500 mg x 200.000 mg) / (1.000 x 16 mg) = 100.000.000 / 16.000 = 6,25 mg total cemaran yang diizinkan dalam seluruh satu batch Produk B.',
    clinicalReference: 'PIC/S Validation Master Plan and Cleaning Validation Guidelines & CPOB BPOM RI',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-1249',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Industri farmasi di Indonesia melakukan uji stabilitas dipercepat (Accelerated Stability Testing) terhadap produk baru tablet salut selaput untuk keperluan registrasi di BPOM.',
    question: 'Berapakah kondisi suhu dan kelembaban relatif (RH) yang dipersyaratkan untuk uji dipercepat pada Zona Iklim IVB (Hot and Very Humid)?',
    options: [
      { key: 'A', text: 'Suhu 40°C ± 2°C dan Kelembaban 75% RH ± 5% RH selama minimal 6 bulan' },
      { key: 'B', text: 'Suhu 25°C ± 2°C dan Kelembaban 60% RH' },
      { key: 'C', text: 'Suhu 30°C ± 2°C dan Kelembaban 75% RH' },
      { key: 'D', text: 'Suhu 50°C ± 2°C dan Kelembaban 90% RH' },
      { key: 'E', text: 'Suhu 4°C ± 2°C di lemari es' }
    ],
    correctAnswer: 'A',
    explanation: 'Sesuai Pedoman Uji Stabilitas ASEAN dan BPOM RI: Kondisi uji stabilitas dipercepat (Accelerated Testing) untuk seluruh zona adalah SUHU 40°C ± 2°C DENGAN KELEMBABAN 75% RH ± 5% RH dengan interval pengujian pada bulan ke-0, 3, dan 6. Sedangkan untuk uji jangka panjang (Real-Time Long Term) Zona IVB adalah 30°C ± 2°C / 75% RH ± 5% RH.',
    clinicalReference: 'ASEAN Guideline on Stability Study of Drug Product & Peraturan BPOM RI tentang Kriteria Registrasi Obat',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1250',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Apoteker QC menguji kerapuhan (friabilitas) tablet menggunakan Roche Friabilator terhadap 20 tablet antasida dengan bobot awal (W1) = 10,00 gram. Setelah diputar 100 putaran (kecepatan 25 rpm selama 4 menit), tablet dibersihkan dari debu dan ditimbang kembali (W2) = 9,93 gram.',
    question: 'Berapakah persentase kerapuhan tablet tersebut dan apakah memenuhi syarat Farmakope?',
    options: [
      { key: 'A', text: '0,7% (Memenuhi syarat, karena kerapuhan < 1,0%)' },
      { key: 'B', text: '7,0% (Tidak memenuhi syarat)' },
      { key: 'C', text: '0,07% (Memenuhi syarat)' },
      { key: 'D', text: '1,5% (Tidak memenuhi syarat)' },
      { key: 'E', text: '0,93% (Tidak memenuhi syarat)' }
    ],
    correctAnswer: 'A',
    explanation: 'Rumus Kerapuhan (Friabilitas) = ((W1 - W2) / W1) x 100%. Kerapuhan = ((10,00 - 9,93) / 10,00) x 100% = (0,07 / 10,00) x 100% = 0,7%. Syarat Farmakope Indonesia dan USP: Kehilangan bobot akibat gesekan TIDAK BOLEH LEBIH DARI 1,0% (Kerapuhan < 1%). Karena 0,7% < 1,0%, maka sediaan MEMENUHI SYARAT.',
    clinicalReference: 'Farmakope Indonesia Edisi VI Lampiran Uji Kerapuhan Tablet',
    difficulty: 'Mudah'
  },

  // =========================================================================
  // 🌿 DOMAIN 4: BAHAN ALAM & FITOFARMAKA (q-1251 s/d q-1255)
  // =========================================================================
  {
    id: 'q-1251',
    domainId: 'bahan_alam',
    targetExam: 'ukmppai',
    vignette: 'Dalam pengujian parameter non-spesifik simplisia rimpang Kunyit (Curcuma domestica Val.), apoteker QC memijarkan abu total simplisia dalam tanur pemijar 600°C, lalu melarutkannya dalam Asam Klorida (HCl) encer panas dan menyaringnya melalui kertas saring bebas abu.',
    question: 'Apakah nama pengujian parameter non-spesifik tersebut dan cemaran apakah yang diukur?',
    options: [
      { key: 'A', text: 'Kadar Abu Tidak Larut Asam; mengukur tingkat kontaminasi pasir, silikat tanah, dan mineral anorganik yang tidak larut' },
      { key: 'B', text: 'Kadar Abu Total; mengukur seluruh senyawa organik' },
      { key: 'C', text: 'Susut pengeringan; mengukur kadar air' },
      { key: 'D', text: 'Kadar sari larut air' },
      { key: 'E', text: 'Uji cemaran mikroba' }
    ],
    correctAnswer: 'A',
    explanation: 'Uji KADAR ABU TIDAK LARUT ASAM mengukur residu mineral anorganik yang tidak dapat larut dalam asam klorida encer. Parameter ini sangat spesifik untuk mendeteksi TINGKAT CEMARAN PASIR, TANAH, DAN SILIKA (kotoran tanah liat) akibat pencucian bahan baku simplisia yang kurang bersih pasca panen.',
    clinicalReference: 'Farmakope Herbal Indonesia Edisi II Lampiran Penetapan Kadar Abu & BPOM RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1252',
    domainId: 'bahan_alam',
    targetExam: 'ukmppai',
    vignette: 'Seorang mahasiswa farmasi melakukan skrining fitokimia ekstrak daun Jambu Biji (Psidium guajava). Sebanyak 1 mL filtrat ekstrak ditambahkan serbuk logam Magnesium (Mg) dan beberapa tetes Asam Klorida (HCl) pekat, lalu dikocok perlahan. Larutan seketika berubah warna menjadi merah jingga menyala.',
    question: 'Reaksi identifikasi apakah yang dilakukan (Reaksi Shinoda / Wilstatter) dan metabolit sekunder apakah yang positif terkandung?',
    options: [
      { key: 'A', text: 'Uji Shinoda; mengidentifikasi keberadaan FLAVONOID (seperti Kuersetin)' },
      { key: 'B', text: 'Uji Dragendorff; mengidentifikasi Alkaloid' },
      { key: 'C', text: 'Uji Liebermann-Burchard; mengidentifikasi Steroid' },
      { key: 'D', text: 'Uji gelatin; mengidentifikasi Tanin' },
      { key: 'E', text: 'Uji busa; mengidentifikasi Saponin' }
    ],
    correctAnswer: 'A',
    explanation: 'REAKSI SHINODA (reduksi Mg + HCl pekat) adalah uji tabung spesifik untuk FLAVONOID. Atom hidrogen nascent yang dibebaskan dari reaksi Mg dan HCl pekat akan mereduksi inti benzopiron pada cincin C flavonoid membentuk garam flavilium yang berwarna merah intens, magenta, atau jingga tua.',
    clinicalReference: 'Harborne JB. Metode Fitokimia: Penuntun Cara Modern Menganalisis Tumbuhan & FHI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1253',
    domainId: 'bahan_alam',
    targetExam: 'ukmppai',
    vignette: 'Apoteker di industri obat tradisional menguji keaslian simplisia rimpang Temulawak (Curcuma xanthorrhiza Roxb.) agar tidak dipalsukan atau tercampur dengan rimpang Kunyit (Curcuma longa L.).',
    question: 'Senyawa penanda aktif (chemical marker) spesifik apakah yang HANYA terdapat pada Temulawak dan TIDAK ditemukan pada Kunyit?',
    options: [
      { key: 'A', text: 'Xanthorrhizol' },
      { key: 'B', text: 'Kurkumin' },
      { key: 'C', text: 'Demetoksikurkumin' },
      { key: 'D', text: 'Bisdemetoksikurkumin' },
      { key: 'E', text: 'Sineol' }
    ],
    correctAnswer: 'A',
    explanation: 'XANTHORRHIZOL adalah senyawa seskuiterpenoid fenolik yang merupakan marker khas spesifik (differentiating marker) RIMPANG TEMULAWAK (Curcuma xanthorrhiza). Meskipun kurkuminoid terdapat pada temulawak dan kunyit, senyawa Xanthorrhizol HANYA ditemukan pada Temulawak dan sama sekali TIDAK diproduksi oleh Kunyit (Curcuma longa).',
    clinicalReference: 'Farmakope Herbal Indonesia Edisi II & Monografi Ekstrak Tumbuhan Obat Indonesia BPOM RI',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1254',
    domainId: 'bahan_alam',
    targetExam: 'ukmppai',
    vignette: 'Dalam pembuatan ekstrak daun teh hijau yang kaya akan epigallocatechin gallate (EGCG), diketahui bahwa senyawa polifenol tersebut sangat sensitif terhadap pemanasan tinggi (termolabil) dan rentan mengalami oksidasi.',
    question: 'Metode ekstraksi dingin manakah yang paling sesuai untuk menyari senyawa termolabil tersebut tanpa merusak aktivitas antioksidannya?',
    options: [
      { key: 'A', text: 'Maserasi kinetik berulang atau Perkolasi' },
      { key: 'B', text: 'Sokletasi dengan etanol mendidih' },
      { key: 'C', text: 'Refluks selama 3 jam' },
      { key: 'D', text: 'Dekoktasi pada 90°C' },
      { key: 'E', text: 'Destilasi uap' }
    ],
    correctAnswer: 'A',
    explanation: 'Metode ekstraksi dingin (Cold Extraction) seperti MASERASI dan PERKOLASI dilakukan pada suhu kamar (tanpa pemanasan), sehingga merupakan pilihan mutlak untuk menyari senyawa metabolit sekunder yang TERMOLABIL (rusak oleh panas), seperti flavonoid teroksigenasi, polifenol EGCG, dan glikosida tertentu.',
    clinicalReference: 'Teknologi Ekstraksi Bahan Alam & Farmakope Herbal Indonesia Edisi II',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1255',
    domainId: 'bahan_alam',
    targetExam: 'ukmppai',
    vignette: 'Produk obat bahan alam "Tensigard" dan "Stimuno" telah melalui uji toksisitas pra-klinik pada hewan coba dan uji kemanjuran klinis (Clinical Trial) pada manusia di rumah sakit pendidikan, serta bahan bakunya terstandarisasi.',
    question: 'Apakah golongan kategori obat bahan alam tersebut dan logo resmi apakah yang tercantum pada kemasannya?',
    options: [
      { key: 'A', text: 'Fitofarmaka; logo lingkaran hijau dengan gambar KARI-JARI DAUN MEMBENTUK BINTANG (seperti salju)' },
      { key: 'B', text: 'Obat Herbal Terstandar (OHT); logo 3 bintang hijau' },
      { key: 'C', text: 'Jamu; logo ranting pohon hijau' },
      { key: 'D', text: 'Obat Kuasi; logo daun hijau' },
      { key: 'E', text: 'Obat Keras; logo lingkaran merah K' }
    ],
    correctAnswer: 'A',
    explanation: 'FITOFARMAKA adalah tingkatan tertinggi obat bahan alam Indonesia yang khasiat dan keamanannya telah dibuktikan secara ilmiah melalui UJI KLINIS pada pasien manusia, dan bahan baku serta proses pembuatannya telah terstandarisasi sesuai CPOTB. Logonya adalah JARI-JARI DAUN MEMBENTUK BINTANG dalam lingkaran hijau.',
    clinicalReference: 'Peraturan BPOM RI tentang Ketentuan Baku Penandaan Obat Bahan Alam & Formularium Fitofarmaka Kemenkes RI',
    difficulty: 'Mudah'
  }
];
