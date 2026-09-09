import { ExamQuestion } from '../competencyExamData';

/**
 * Bank Soal Kasus Vignette CBT Bagian 11 (Nomor q-414 s/d q-473)
 * Cetak Biru Resmi UKOMNAS 2026: UKMPPAI (Apoteker) & UKTVF/UKTVK (Vokasi TTK)
 * Fokus: Advanced Clinical Farmakoterapi, Critical Care/ICU, Sepsis, Kardiologi, Toksikologi & Terapi Khusus
 * Total: 60 Butir Soal Vignette Terstandar
 */
export const CBT_EXPANSION_PART_11: ExamQuestion[] = [
  // =========================================================================
  // 🩺 ADVANCED CLINICAL, ICU, CRITICAL CARE & EMERGENCY (q-414 s/d q-473)
  // =========================================================================
  {
    id: 'q-414',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pria 58 tahun dengan syok sepsis akibat pneumonia komunitas dirawat di ICU. Tekanan darah 75/45 mmHg, denyut nadi 122 bpm, laktat serum 4,2 mmol/L. Pasien telah menerima resusitasi cairan kristaloid ringer laktat 30 mL/kgBB dalam 3 jam pertama namun Mean Arterial Pressure (MAP) masih 55 mmHg.',
    question: 'Vasopresor lini pertama manakah yang direkomendasikan Surviving Sepsis Campaign (SSC) 2026 untuk mentitrasi MAP target ≥ 65 mmHg?',
    options: [
      { key: 'A', text: 'Norepinefrin IV titrasi kontinu' },
      { key: 'B', text: 'Dopamin IV dosis renal' },
      { key: 'C', text: 'Epinefrin bolus IV dosis tinggi' },
      { key: 'D', text: 'Fenilefrin monoterapi' },
      { key: 'E', text: 'Efedrin HCl oral' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Surviving Sepsis Campaign (SSC) Guidelines, NOREPINEFRIN adalah vasopresor pilihan lini pertama untuk syok sepsis persisten pasca-resusitasi cairan kristaloid adekuat. Norepinefrin memiliki efek agonis alfa-1 kuat (vasokonstriksi perifer kuat) dengan efek beta-1 moderat (inotropik positif ringan), efektif menaikkan MAP tanpa takikardia berat seperti pada Dopamin.',
    clinicalReference: 'Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2026',
    difficulty: 'Mudah'
  },
  {
    id: 'q-415',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien pada kasus syok sepsis di atas masih membutuhkan norepinefrin dosis tinggi (0,25 mcg/kg/menit) untuk mempertahankan MAP 65 mmHg. Apoteker ICU menyarankan penambahan vasopresor kedua untuk menurunkan kebutuhan norepinefrin.',
    question: 'Agen vasopresor kedua tanpa efek adrenergik manakah yang direkomendasikan pedoman SSC?',
    options: [
      { key: 'A', text: 'Vasopresin (Arginine Vasopressin) dosis tetap 0,03 unit/menit' },
      { key: 'B', text: 'Dopamin 10 mcg/kg/menit' },
      { key: 'C', text: 'Isoproterenol IV' },
      { key: 'D', text: 'Klonidin IV' },
      { key: 'E', text: 'Terbutalin subkutan' }
    ],
    correctAnswer: 'A',
    explanation: 'Vasopresin dosis tetap 0,03 unit/menit direkomendasikan sebagai vasopresor lini kedua tambahan untuk meningkatkan MAP atau menurunkan kebutuhan dosis norepinefrin. Vasopresin bekerja melalui reseptor V1 pada otot polos pembuluh darah, mengatasi defisiensi relatif vasopresin endogen pada syok sepsis lanjut.',
    clinicalReference: 'Surviving Sepsis Campaign Guidelines & SCCM Critical Care Guidelines',
    difficulty: 'Sedang'
  },
  {
    id: 'q-416',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien syok sepsis refrakter masih mengalami hipotensi persisten meskipun telah mendapatkan resusitasi cairan kristaloid, norepinefrin, dan vasopresin selama 4 jam.',
    question: 'Kortikosteroid manakah beserta dosisnya yang direkomendasikan SSC untuk mengatasi insufisiensi adrenal relatif pada syok sepsis refrakter?',
    options: [
      { key: 'A', text: 'Hidrokortison IV 200 mg/hari (diberikan 50 mg tiap 6 jam atau infus kontinu)' },
      { key: 'B', text: 'Deksametason IV 20 mg bolus tiap 8 jam' },
      { key: 'C', text: 'Metilprednisolon 500 mg pulsatile bolus' },
      { key: 'D', text: 'Prednison 5 mg oral 1 kali sehari' },
      { key: 'E', text: 'Triamsinolon IM 40 mg' }
    ],
    correctAnswer: 'A',
    explanation: 'SSC merekomendasikan HIDROKORTISON intravena dengan dosis 200 mg per hari (diberikan 50 mg setiap 6 jam IV atau infus kontinu 200 mg/24 jam) jika resusitasi cairan adekuat dan terapi vasopresor tidak mampu mengembalikan stabilitas hemodinamik. Deksametason dosis tinggi tidak dianjurkan karena supresi imun yang berlebihan.',
    clinicalReference: 'Surviving Sepsis Campaign: Management of Septic Shock & Endocrine Society Guidelines',
    difficulty: 'Sedang'
  },
  {
    id: 'q-417',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien 66 tahun pasca-infark miokard akut anterior luas mengalami syok kardiogenik dengan tanda hipoperfusi perifer berat (dingin, basah, oliguria) dan indeks jantung (Cardiac Index) terukur 1,7 L/min/m2, TD 88/60 mmHg.',
    question: 'Inotropik lini pertama manakah yang bekerja sebagai agonis reseptor beta-1 adrenergik dominan untuk meningkatkan kontraktilitas miokard?',
    options: [
      { key: 'A', text: 'Dobutamin infus kontinu 2,5 - 10 mcg/kg/menit' },
      { key: 'B', text: 'Propranolol IV' },
      { key: 'C', text: 'Digoksin oral dosis pemeliharaan' },
      { key: 'D', text: 'Verapamil IV bolus lambat' },
      { key: 'E', text: 'Amiodaron oral' }
    ],
    correctAnswer: 'A',
    explanation: 'Dobutamin adalah inotropik pilihan utama pada syok kardiogenik dengan gangguan curah jantung. Dobutamin bekerja langsung menstimulasi reseptor beta-1 adrenergik miokard untuk meningkatkan inotropik (kekuatan kontraksi) dan sedikit kronotropik, disertai vasodilatasi perifer ringan (efek beta-2) yang menurunkan afterload jantung.',
    clinicalReference: 'ESC Guidelines for the Diagnosis and Treatment of Acute and Chronic Heart Failure & PERKI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-418',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien syok kardiogenik di ruang ICCU telah menerima terapi beta-blocker jangka panjang sebelumnya, sehingga respon inotropik terhadap dobutamin tumpul. Apoteker merekomendasikan inodilator golongan penghambat fosfodiesterase-3 (PDE-3 Inhibitor) yang bekerja independen dari reseptor beta.',
    question: 'Obat inodilator apakah yang dimaksud?',
    options: [
      { key: 'A', text: 'Milrinon' },
      { key: 'B', text: 'Esmolol' },
      { key: 'C', text: 'Nitroprusid' },
      { key: 'D', text: 'Klonidin' },
      { key: 'E', text: 'Atropin' }
    ],
    correctAnswer: 'A',
    explanation: 'MILRINON adalah Phosphodiesterase-3 (PDE-3) Inhibitor yang menghambat pemecahan cAMP intraseluler pada miosit jantung dan otot polos vaskular. Peningkatan cAMP meningkatkan kalsium intraseluler dan kontraktilitas miokard sekaligus menyebabkan vasodilatasi sistemik dan pulmonal (inodilator), tanpa memerlukan stimulasi reseptor beta-1 adrenergik.',
    clinicalReference: 'AHA/ACC Heart Failure Guidelines & Goodman & Gilman Pharmacological Basis of Therapeutics',
    difficulty: 'Sedang'
  },
  {
    id: 'q-419',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang remaja 17 tahun tersengat lebah di taman sekolah. Dalam 5 menit timbul urtikaria generalisata, angioedema bibir, stridor inspiratorik (edema laring), sesak napas berat, dan TD turun drastis menjadi 70/40 mmHg (Syok Anafilaksis).',
    question: 'Tindakan farmakoterapi lini pertama yang paling krusial dan harus segera diinjeksikan adalah:',
    options: [
      { key: 'A', text: 'Epinefrin 1:1000 (1 mg/mL) dosis 0,3 - 0,5 mg Intramuskular (IM) di paha anterolateral' },
      { key: 'B', text: 'Difenhidramin 50 mg IV bolus lambat' },
      { key: 'C', text: 'Deksametason 10 mg IV bolus' },
      { key: 'D', text: 'Salbutamol nebulisasi monoterapi' },
      { key: 'E', text: 'Infus Dextrose 5% 500 mL' }
    ],
    correctAnswer: 'A',
    explanation: 'EPINEFRIN INTRAMUSKULAR (IM) pada paha anterolateral (vastus lateralis) dengan konsentrasi 1:1000 (1 mg/mL) dosis 0,3 - 0,5 mg pada dewasa (atau 0,01 mg/kg pada anak) adalah TERAPI LINI PERTAMA ABSOLUT untuk anafilaksis. Antihistamin dan kortikosteroid hanyalah terapi ajuvan lini kedua yang tidak mencegah kolaps jalan napas atau hipotensi fatal.',
    clinicalReference: 'World Allergy Organization (WAO) Anaphylaxis Guidelines 2024 & Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-420',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien 62 tahun dengan Fibrilasi Atrium non-valvular mengonsumsi Dabigatran 150 mg 2 kali sehari. Pasien mengalami kecelakaan lalu lintas dengan perdarahan intrakranial masif akut dan membutuhkan operasi kraniotomi cito segera.',
    question: 'Antidot spesifik (spesific reversal agent) manakah yang bekerja mengikat dabigatran bebas dan terikat secara cepat dengan afinitas 350 kali lipat lebih tinggi dari trombin?',
    options: [
      { key: 'A', text: 'Idarucizumab IV 5 g (2 vial x 2,5 g)' },
      { key: 'B', text: 'Andexanet alfa IV' },
      { key: 'C', text: 'Protamin Sulfat IV' },
      { key: 'D', text: 'Fitomenadion (Vitamin K1) 10 mg IV' },
      { key: 'E', text: 'Asam Traneksamat 500 mg IV' }
    ],
    correctAnswer: 'A',
    explanation: 'IDARUCIZUMAB adalah fragmen antibodi monoklonal manusiawi (Fab) spesifik yang dirancang khusus untuk membalikkan efek antikoagulan Direct Thrombin Inhibitor DABIGATRAN secara instan dalam hitungan menit tanpa efek prokoagulan intrinsik. Dosis standarnya adalah 5 gram IV (2 x 2,5 g berselang singkat).',
    clinicalReference: 'ACC/AHA Anticoagulation Reversal Guidelines & FDA Prescribing Information Praxbind',
    difficulty: 'Sedang'
  },
  {
    id: 'q-421',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien yang mengonsumsi antikoagulan oral penghambat Faktor Xa langsung (Rivaroksaban 20 mg/hari) mengalami perdarahan gastrointestinal masif yang mengancam jiwa.',
    question: 'Reversal agent modifikasi rekombinan Faktor Xa apakah yang digunakan sebagai umpan (decoy protein) untuk menetralkan rivaroksaban dan apiksaban?',
    options: [
      { key: 'A', text: 'Andexanet alfa' },
      { key: 'B', text: 'Idarucizumab' },
      { key: 'C', text: 'Protamin sulfat' },
      { key: 'D', text: 'Deferoksamin' },
      { key: 'E', text: 'Aprotinin' }
    ],
    correctAnswer: 'A',
    explanation: 'ANDEXANET ALFA adalah molekul protein Faktor Xa rekombinan yang telah dimodifikasi (katalitik inaktif) yang berfungsi sebagai decoy receptor untuk mengikat dan menyerap molekul penghambat Faktor Xa langsung (Rivaroksaban, Apiksaban, Edoksaban) serta LMWH, sehingga mengembalikan aktivitas Faktor Xa endogen tubuh.',
    clinicalReference: 'Chest Guidelines for Antithrombotic Therapy & AHA Stroke Guidelines',
    difficulty: 'Sedang'
  },
  {
    id: 'q-422',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien 70 tahun dengan DVT (Deep Vein Thrombosis) menerima infus Heparin Tak Terfraksi (UFH) dosis 1000 unit/jam. Nilai aPTT pasien melonjak menjadi > 150 detik dan tampak hematuria masif. Dokter memutuskan menghentikan heparin dan memberikan protamin sulfat.',
    question: 'Berapakah rasio dosis Protamin Sulfat IV yang tepat untuk menetralkan 100 unit Heparin yang diberikan dalam 30 menit terakhir?',
    options: [
      { key: 'A', text: '1 mg Protamin Sulfat untuk tiap 100 unit Heparin' },
      { key: 'B', text: '10 mg Protamin Sulfat untuk tiap 100 unit Heparin' },
      { key: 'C', text: '100 mg Protamin Sulfat untuk tiap 100 unit Heparin' },
      { key: 'D', text: '0,1 mg Protamin Sulfat untuk tiap 100 unit Heparin' },
      { key: 'E', text: '5 mg Protamin Sulfat untuk tiap 100 unit Heparin' }
    ],
    correctAnswer: 'A',
    explanation: 'Rasio baku netralisasi adalah 1 mg Protamin Sulfat secara intravena lambat untuk menetralkan sekitar 100 unit Heparin (UFH) yang tersisa dalam sirkulasi. Pemberian protamin harus dilakukan secara sangat perlahan (maksimal 50 mg dalam 10 menit) untuk mencegah reaksi anafilaktoid, hipotensi berat, dan bradikardia.',
    clinicalReference: 'AHFS Drug Information & Goodman & Gilman’s The Pharmacological Basis of Therapeutics',
    difficulty: 'Mudah'
  },
  {
    id: 'q-423',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien laki-laki 24 tahun dibawa ke IGD dalam kondisi kejang tonik-klonik umum terus menerus selama 8 menit tanpa pemulihan kesadaran di antara episode kejang (Status Epileptikus Konvulsif Berkelanjutan Fase Dini).',
    question: 'Protokol farmakoterapi lini pertama gawat darurat yang harus diberikan sesegera mungkin adalah:',
    options: [
      { key: 'A', text: 'Diazepam 10 mg IV lambat (kecepatan 2-5 mg/menit) atau Midazolam 10 mg IM' },
      { key: 'B', text: 'Fenitoin infus 1000 mg IV cepat dalam 2 menit' },
      { key: 'C', text: 'Fenobarbital oral 100 mg' },
      { key: 'D', text: 'Karbamazepin sirup lewat NGT' },
      { key: 'E', text: 'Propofol infus kontinu dosis anestesi' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan pedoman PERDOSSI dan Neurocritical Care Society, terapi LINI PERTAMA status epileptikus fase awal (0-5/10 menit) adalah golongan Benzodiazepin: DIAZEPAM 10 mg IV lambat (kecepatan < 5 mg/menit, dapat diulang 1 kali setelah 5-10 menit jika belum berhenti) atau MIDAZOLAM 10 mg IM jika akses intravena belum terpasang.',
    clinicalReference: 'Pedoman Tatalaksana Status Epileptikus PERDOSSI & American Epilepsy Society (AES)',
    difficulty: 'Mudah'
  },
  {
    id: 'q-424',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien status epileptikus di atas telah menerima 2 dosis diazepam 10 mg IV namun bangkitan kejang masih berlanjut hingga menit ke-15 (Status Epileptikus Menetap / Fase Lini Kedua).',
    question: 'Antikonvulsan intravena non-sedatif lini kedua manakah beserta dosis loading yang tepat menurut AES guideline?',
    options: [
      { key: 'A', text: 'Fenitoin IV 20 mg/kgBB dilarutkan dalam NaCl 0,9% dengan laju maksimal 50 mg/menit' },
      { key: 'B', text: 'Fenitoin IV 20 mg/kgBB dilarutkan dalam Dextrose 5% secara bolus cepat' },
      { key: 'C', text: 'Klonazepam 10 mg IV bolus' },
      { key: 'D', text: 'Asam Valproat 5 mg/kgBB oral' },
      { key: 'E', text: 'Gabapentin 300 mg per NGT' }
    ],
    correctAnswer: 'A',
    explanation: 'Pada status epileptikus menetap fase kedua (menit 10-30), obat lini kedua pilihannya adalah FENITOIN intravena (loading dose 15-20 mg/kgBB) atau Levetirasetam (60 mg/kgBB) atau Valproat IV (40 mg/kgBB). FENITOIN HANYA BOLEH DILARUTKAN DALAM NaCl 0,9% (mengendap/presipitasi kristal jika dicampur Dextrose) dan laju infus TIDAK BOLEH MELEBIHI 50 mg/menit untuk mencegah aritmia ventrikel fatal dan hipotensi berat (Purple Glove Syndrome).',
    clinicalReference: 'American Epilepsy Society (AES) Guidelines for Status Epilepticus & PERDOSSI',
    difficulty: 'Sedang'
  },
  {
    id: 'q-425',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien laki-laki 52 tahun didiagnosis STEMI inferior akut onset 2 jam yang lalu. Rumah sakit tidak memiliki fasilitas Percutaneous Coronary Intervention (PCI) primer dalam jarak tempuh 120 menit, sehingga diputuskan pemberian terapi fibrinolitik.',
    question: 'Obat fibrinolitik spesifik fibrin generasi ketiga manakah yang dapat diberikan secara bolus IV tunggal selama 5-10 detik sesuai berat badan?',
    options: [
      { key: 'A', text: 'Tenekteplase (TNK-tPA)' },
      { key: 'B', text: 'Streptokinase' },
      { key: 'C', text: 'Alteplase (rt-PA)' },
      { key: 'D', text: 'Urokinase' },
      { key: 'E', text: 'Heparin' }
    ],
    correctAnswer: 'A',
    explanation: 'TENEKTEPLASE (TNK-tPA) adalah turunan rekombinan tPA generasi ketiga yang memiliki spesifisitas fibrin lebih tinggi dan waktu paruh eliminasi lebih panjang daripada alteplase, sehingga dapat diberikan sebagai BOLUS IV TUNGGAL selama 5-10 detik dengan dosis disesuaikan berat badan (30-50 mg), meminimalkan keterlambatan waktu door-to-needle.',
    clinicalReference: 'ESC Guidelines for Management of Acute Myocardial Infarction & PERKI',
    difficulty: 'Sedang'
  },
  {
    id: 'q-426',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien pasca-PCI pemasangan Drug-Eluting Stent (DES) akibat Sindrom Koroner Akut (NSTEMI) direncanakan menggunakan Dual Antiplatelet Therapy (DAPT) kombinasi Aspirin dengan Ticagrelor 90 mg 2 kali sehari selama 12 bulan.',
    question: 'Dosis pemeliharaan Aspirin harian manakah yang wajib direkomendasikan bersama Ticagrelor untuk mencegah penurunan efektivitas klinis ticagrelor (studi PLATO)?',
    options: [
      { key: 'A', text: 'Aspirin dosis rendah 75 - 100 mg per hari' },
      { key: 'B', text: 'Aspirin dosis tinggi 325 mg per hari' },
      { key: 'C', text: 'Aspirin 500 mg 3 kali sehari' },
      { key: 'D', text: 'Aspirin dihentikan sama sekali' },
      { key: 'E', text: 'Aspirin 160 mg 2 kali sehari' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan analisis subgrup studi PLATO dan FDA Black Box Warning, dosis pemeliharaan Aspirin yang dikombinasikan dengan TICAGRELOR HARUS BERDOSIS RENDAH (75 - 100 mg/hari). Dosis aspirin di atas 100 mg/hari (seperti aspirin 325 mg) terbukti secara signifikan menurunkan efikasi proteksi kardiovaskular dari Ticagrelor.',
    clinicalReference: 'AHA/ACC Coronary Artery Disease Guidelines & PLATO Trial Labeling',
    difficulty: 'Sedang'
  },
  {
    id: 'q-427',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien wanita 65 tahun dengan stroke iskemik akut tiba di IGD 2 jam pasca-onset defisit neurologis. Tekanan darah terukur 195/115 mmHg. Sesuai pedoman AHA/ASA, terapi trombolitik intravena dengan Alteplase hanya boleh diinisiasi jika tekanan darah berhasil diturunkan di bawah 185/110 mmHg.',
    question: 'Antihipertensi intravena kerja cepat yang direkomendasikan untuk menurunkan tekanan darah secara aman sebelum trombolisis adalah:',
    options: [
      { key: 'A', text: 'Nikardipin IV infus kontinu titrasi 5 - 15 mg/jam atau Labetalol IV bolus' },
      { key: 'B', text: 'Nifedipin sublingual tetes' },
      { key: 'C', text: 'Reserpin intramuskular' },
      { key: 'D', text: 'Kaptopril oral dikunyah' },
      { key: 'E', text: 'Furosemid 80 mg IV bolus cepat' }
    ],
    correctAnswer: 'A',
    explanation: 'Pedoman AHA/ASA Stroke merekomendasikan NIKARDIPIN infus intravena titrasi (5-15 mg/jam) atau LABETALOL 10-20 mg IV bolus lambat untuk menurunkan TD secara bertahap dan terprediksi hingga < 185/110 mmHg sebelum pemberian rt-PA. Nifedipin sublingual KONTRAINDIKASI karena dapat menyebabkan penurunan tekanan darah mendadak (hipotensi presipitatus) yang memperluas infark penumbra iskemia serebral.',
    clinicalReference: 'AHA/ASA Guidelines for the Early Management of Patients with Acute Ischemic Stroke',
    difficulty: 'Sedang'
  },
  {
    id: 'q-428',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien stroke iskemik akut berhasil diberikan alteplase intravena. Apoteker mengingatkan perawat bangsal stroke mengenai protokol pemberian antitrombotik lanjutan (antiplatelet atau antikoagulan) pasca-rtPA.',
    question: 'Berapa jam antitrombotik (seperti Aspirin) harus DITUNDA setelah pemberian alteplase selesai untuk mencegah transformasi perdarahan intrakranial?',
    options: [
      { key: 'A', text: 'Ditunda selama 24 jam dan baru diberikan setelah hasil CT Scan kepala kontrol bebas perdarahan' },
      { key: 'B', text: 'Diberikan langsung 1 jam kemudian' },
      { key: 'C', text: 'Ditunda selama 7 hari' },
      { key: 'D', text: 'Tidak perlu ditunda, langsung diberikan bersamaan' },
      { key: 'E', text: 'Ditunda selama 12 jam tanpa perlu evaluasi radiologi' }
    ],
    correctAnswer: 'A',
    explanation: 'Antiplatelet (seperti Aspirin) maupun antikoagulan parenteral HARUS DITUNDA minimal 24 JAM setelah akhir infus Alteplase. Pemberian antitrombotik baru boleh dimulai setelah pemeriksaan CT scan atau MRI kepala ulang pada 24 jam mengonfirmasi tidak ada tanda transformasi hemoragik.',
    clinicalReference: 'AHA/ASA Guidelines for the Early Management of Acute Ischemic Stroke 2024',
    difficulty: 'Mudah'
  },
  {
    id: 'q-429',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien kanker serviks stadium IV mengalami nyeri kronis hebat skala 8/10. Pasien sudah tidak responsif terhadap parasetamol dan tramadol (kegagalan analgesik anak tangga 1 dan 2 WHO Cancer Pain Ladder).',
    question: 'Analgesik opioid kuat lini pertama pada langkah 3 WHO Cancer Pain Ladder yang menjadi baku emas adalah:',
    options: [
      { key: 'A', text: 'Morfin Sulfat oral' },
      { key: 'B', text: 'Petidin HCl oral' },
      { key: 'C', text: 'Pentazosina' },
      { key: 'D', text: 'Kodein Fosfat' },
      { key: 'E', text: 'Ibuprofen dosis ganda' }
    ],
    correctAnswer: 'A',
    explanation: 'MORFIN SULFAT oral adalah obat pilihan lini pertama baku emas (gold standard) pada anak tangga ke-3 (Step 3) WHO Cancer Pain Ladder untuk nyeri kanker sedang hingga berat (skala >= 7). Petidin TIDAK direkomendasikan untuk nyeri kronis kanker karena metabolit toksiknya (norpetidin) terakumulasi dan memicu kejang saraf dan toksisitas SSP.',
    clinicalReference: 'WHO Guidelines for the Pharmacological and Radiotherapeutic Management of Cancer Pain',
    difficulty: 'Mudah'
  },
  {
    id: 'q-430',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien kanker di atas mendapatkan terapi rumatan Morfin oral 30 mg tiap 4 jam. Pasien mengeluhkan konstipasi berat tidak BAB selama 5 hari berturut-turut. Apoteker menjelaskan bahwa konstipasi akibat opioid tidak akan mengalami toleransi fisiologis.',
    question: 'Kombinasi laksatif lini pertama manakah yang harus selalu diresepkan sebagai profilaksis dan tata laksana konstipasi imbas opioid (Opioid-Induced Constipation)?',
    options: [
      { key: 'A', text: 'Laksatif stimulan (Bisakodil atau Senna) dikombinasikan dengan pelunak feses (Dokusat) atau laksatif osmotik (Laktulosa/PEG)' },
      { key: 'B', text: 'Suplemen serat tinggi (Bulk-forming laxative seperti Psyllium) dosis masif' },
      { key: 'C', text: 'Loperamid 2 mg tiap buang air besar' },
      { key: 'D', text: 'Karbo adsorben tablet' },
      { key: 'E', text: 'Attapulgit sirup' }
    ],
    correctAnswer: 'A',
    explanation: 'Konstipasi akibat opioid terjadi karena stimulasi reseptor mu opioid di pleksus mienterik usus yang melumpuhkan peristaltik dan meningkatkan penyerapan air feses. Lini pertama adalah STIMULAN PERISTALTIK (Bisakodil atau Senna) dikombinasikan dengan pelunak/osmotik (Dokusat/PEG/Laktulosa). Laksatif pembentuk massa (bulk-forming) SEPERTI SERAT PSYLLIUM JUSTRU KONTRAINDIKASI karena dapat menyebabkan impaksi feses dan obstruksi mekanik usus akibat peristaltik yang lumpuh.',
    clinicalReference: 'NCCN Clinical Practice Guidelines in Oncology: Adult Cancer Pain & ASCO Guidelines',
    difficulty: 'Sedang'
  },
  {
    id: 'q-431',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien rawat inap yang menerima infus Morfin dosis tinggi untuk nyeri pasca-bedah toraks tiba-tiba mengalami bradipnea parah (laju pernapasan 6 napas/menit), pupil miosis pinpoint bilateral, dan penurunan kesadaran soporokoma.',
    question: 'Protokol pemberian antidot Nalokson IV yang tepat untuk mengatasi depresi pernapasan fatal tanpa memicu sindrom putus obat (withdrawal) akut adalah:',
    options: [
      { key: 'A', text: 'Nalokson IV 0,04 - 0,1 mg dititrasi setiap 2-3 menit hingga pernapasan spontan pulih adekuat' },
      { key: 'B', text: 'Nalokson IV 10 mg bolus sekaligus' },
      { key: 'C', text: 'Nalokson oral 50 mg' },
      { key: 'D', text: 'Flumazenil IV 0,5 mg bolus' },
      { key: 'E', text: 'Asetilsistein 150 mg/kgBB IV' }
    ],
    correctAnswer: 'A',
    explanation: 'Pada depresi pernapasan akibat opioid pada pasien dengan nyeri kronis, NALOKSON harus diberikan secara titrasi dosis kecil (0,04 - 0,1 mg IV setiap 2-3 menit) dengan tujuan mengembalikan ventilasi napas spontan adekuat (> 10-12 napas/menit) tanpa mencetuskan nyeri hebat mendadak atau withdrawal simpatis yang fatal (edema paru akut). Bolus dosis masif (seperti 2-4 mg) hanya digunakan pada henti napas kasus overdosis jalanan.',
    clinicalReference: 'Lexicomp Toxicology & American Heart Association ACLS Opioid Emergency Guidelines',
    difficulty: 'Sedang'
  },
  {
    id: 'q-432',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang balita 3 tahun tidak sengaja menelan obat tetes mata ibunya yang mengandung Tetrahidrozolin HCl (agonis alfa-adrenergik imidazolin imidazolin dekongestan topikal). Anak dibawa ke IGD dalam kondisi bradikardia berat, letargis hipotermik, dan depresi napas.',
    question: 'Mekanisme toksisitas sistemik tetrahidrozolin pada susunan saraf pusat anak adalah:',
    options: [
      { key: 'A', text: 'Stimulasi reseptor alfa-2 presinaptik dan imidazolin sentral di batang otak yang menurunkan aliran simpatis sentral' },
      { key: 'B', text: 'Blokade reseptor histamin H1' },
      { key: 'C', text: 'Aktivasi reseptor beta-2 perifer' },
      { key: 'D', text: 'Peningkatan kadar asetilkolin muskarinik' },
      { key: 'E', text: 'Inhibisi enzim sitokrom P450 di hepar' }
    ],
    correctAnswer: 'A',
    explanation: 'Tetrahidrozolin, Oksimetazolin, dan Klonidin memiliki cincin imidazolin yang bekerja merangsang reseptor alfa-2 adrenergik sentral dan reseptor imidazolin I-1 di medulla oblongata (pusat vasomotor otak). Pada anak, absorpsi sistemik oral memicu efek mirip overdosis klonidin berupa penurunan drastis tonus simpatis SSP, menyebabkan hipotensi, bradikardia, hipotermia, dan koma depresi napas.',
    clinicalReference: 'AAPCC Poison Centers Guidelines & Goldfrank’s Toxicologic Emergencies',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-433',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang petani dibawa ke IGD puskesmas dengan penurunan kesadaran, hipersalivasi, lakrimasi berlebih, urinasi tak terkontrol, diare berbusa, fasikulasi otot, dan pupil miosis pinpoint setelah menyemprot pestisida klorpirifos (Organofosfat).',
    question: 'Kombinasi terapi antidotum spesifik yang harus segera diberikan adalah:',
    options: [
      { key: 'A', text: 'Atropin Sulfat IV (titrasi sampai sekret paru kering) + Pralidoksim (2-PAM) IV' },
      { key: 'B', text: 'N-Asetilsistein + Metionin oral' },
      { key: 'C', text: 'Nalokson IV + Flumazenil IV' },
      { key: 'D', text: 'Natrium Tiosulfat IV + Natrium Nitrit' },
      { key: 'E', text: 'Fitomenadion IV + Protamin Sulfat' }
    ],
    correctAnswer: 'A',
    explanation: 'Keracunan insektisida organofosfat menghambat enzim asetilkolinesterase secara ireversibel (krisis kolinergik DUMBELS). Tatalaksana spesifiknya meliputi: 1) ATROPIN SULFAT (antagonis kompetitif reseptor muskarinik) dititrasi ganda hingga tanda atropinisasi tercapai (bronkorhea dan sekret napas kering); 2) PRALIDOKSIM / 2-PAM (reaktivator enzim kolinesterase) diberikan sebelum terjadi proses ikatan permanen (aging enzyme).',
    clinicalReference: 'Pedoman Tatalaksana Keracunan Pestisida Kemenkes RI & WHO Guidelines',
    difficulty: 'Mudah'
  },
  {
    id: 'q-434',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pemuda dilarikan ke rumah sakit setelah mengonsumsi minuman keras oplosan yang terkontaminasi Metanol. Pasien mengeluhkan pandangan kabur seperti tertutup badai salju (snowstorm vision), asidosis metabolik berat dengan high anion gap, dan kadar asam format darah tinggi.',
    question: 'Antidot spesifik penghambat kompetitif enzim Alkohol Dehidrogenase (ADH) dengan afinitas ratusan kali lebih kuat dari etanol adalah:',
    options: [
      { key: 'A', text: 'Fomepizol (4-methylpyrazole)' },
      { key: 'B', text: 'Disulfiram' },
      { key: 'C', text: 'Metronidazol' },
      { key: 'D', text: 'Asam Askorbat' },
      { key: 'E', text: 'Piridoksin' }
    ],
    correctAnswer: 'A',
    explanation: 'FOMEPIZOL (4-methylpyrazole) adalah antidot pilihan utama untuk keracunan zat toksik alkohol (Metanol dan Etilen Glikol). Fomepizol merupakan inhibitor poten enzim alkohol dehidrogenase (ADH) yang mencegah metabolisme metanol menjadi metabolit toksik asam format dan formaldehida yang menyebabkan kebutaan permanen dan asidosis laktat fatal.',
    clinicalReference: 'American Academy of Clinical Toxicology (AACT) Guidelines for Toxic Alcohol Ingestion',
    difficulty: 'Mudah'
  },
  {
    id: 'q-435',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pekerja industri kimia mengalami luka bakar asam kuat pada tangan kanan akibat percikan Asam Fluorida (Hydrofluoric Acid / HF). Pasien mengeluhkan nyeri luar biasa mendalam yang tidak sebanding dengan lesi fisik kulit.',
    question: 'Zat penawar lokal dan sistemik apakah yang bekerja mengikat dan mengendapkan ion fluorida bebas sebelum memicu hipokalsemia dan henti jantung aritmia refrakter?',
    options: [
      { key: 'A', text: 'Gel Kalsium Glukonat 2,5% topikal dan Kalsium Glukonat intra-arteri/intravena' },
      { key: 'B', text: 'Natrium Bikarbonat pekat' },
      { key: 'C', text: 'Asam Asetat encer' },
      { key: 'D', text: 'Perak Sulfadiazin krim' },
      { key: 'E', text: 'Etilendiamin tetraasetat' }
    ],
    correctAnswer: 'A',
    explanation: 'Ion fluorida (F-) dari Asam Fluorida berpenetrasi cepat menembus jaringan kulit dan mengikat kalsium serta magnesium tubuh membentuk garam CaF2 yang tidak larut, menyebabkan pencairan jaringan dalam (liquefactive necrosis) serta hipokalsemia fatal. Terapi spesifik adalah KALSIUM GLUKONAT topikal (gel 2,5%), infiltrasi subkutan, atau infus IV/intra-arteri untuk menetralkan ion fluorida aktif.',
    clinicalReference: 'NIOSH Hydrofluoric Acid Treatment Protocols & Goldfrank’s Toxicologic Emergencies',
    difficulty: 'Sedang'
  },
  {
    id: 'q-436',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang wanita 28 tahun dibawa ke IGD setelah menelan 40 tablet Propranolol 40 mg (overdosis beta-blocker). Pasien mengalami bradikardia ekstrem (32 bpm), syok kardiogenik dengan TD 60/40 mmHg yang refrakter terhadap atropin dan cairan.',
    question: 'Hormon antidot intravena lini pertama apakah yang dapat memicu sintesis cAMP intraseluler jantung secara mandiri melewati reseptor beta yang terblokir?',
    options: [
      { key: 'A', text: 'Glukagon IV dosis bolus 3 - 10 mg dilanjutkan infus kontinu' },
      { key: 'B', text: 'Insulin bolus tanpa dekstrosa' },
      { key: 'C', text: 'Oksitosin IV' },
      { key: 'D', text: 'Levotiroksin IV' },
      { key: 'E', text: 'Somatostatin IV' }
    ],
    correctAnswer: 'A',
    explanation: 'GLUKAGON adalah antidot lini pertama pilihan untuk toksisitas overdosis beta-blocker. Glukagon menstimulasi reseptor glukagon spesifik pada miokard yang mengaktifkan adenilat siklase dan meningkatkan cAMP secara langsung tanpa bergantung pada reseptor beta adrenergik yang sedang terblokir, sehingga menghasilkan efek inotropik dan kronotropik positif yang cepat.',
    clinicalReference: 'American College of Medical Toxicology (ACMT) Guidance: Management of Beta-Blocker Toxicity',
    difficulty: 'Sedang'
  },
  {
    id: 'q-437',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang anak laki-laki usia 6 tahun yang tinggal di dekat industri peleburan aki bekas terdiagnosis keracunan timbal kronis (Lead Poisoning) dengan kadar timbal darah (Blood Lead Level / BLL) terukur 55 mcg/dL dan gejala ensefalopati ringan.',
    question: 'Agen kelasi oral ramah anak manakah yang direkomendasikan CDC untuk mengikat timbal dalam darah?',
    options: [
      { key: 'A', text: 'Suksimer (DMSA / Dimercaptosuccinic acid)' },
      { key: 'B', text: 'Deferoksamin mesilat' },
      { key: 'C', text: 'D-Penisilamin' },
      { key: 'D', text: 'Trientin hidroklorida' },
      { key: 'E', text: 'Karbon aktif' }
    ],
    correctAnswer: 'A',
    explanation: 'SUKSIMER (DMSA / Meso-2,3-dimercaptosuccinic acid) adalah agen pengkhelat timbal oral lini pertama yang disetujui FDA untuk anak-anak dengan kadar timbal darah > 45 mcg/dL. Suksimer larut air, memiliki toksisitas rendah, dan secara selektif mengikat timbal untuk diekskresikan melalui urin tanpa mengekskresikan mineral esensial (seperti besi atau seng) secara berlebihan.',
    clinicalReference: 'CDC Guidelines for the Management of Childhood Lead Exposure & AAP Pediatrics',
    difficulty: 'Sedang'
  },
  {
    id: 'q-438',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien talasemia mayor berusia 16 tahun yang telah menjalani transfusi darah rutin selama 10 tahun mengalami kelebihan beban besi (hemosiderosis sekunder) dengan serum feritin mencapai 3500 ng/mL.',
    question: 'Agen kelasi besi (iron chelating agent) oral yang diminum 1 kali sehari dalam bentuk tablet terdispersi adalah:',
    options: [
      { key: 'A', text: 'Deferasiroks' },
      { key: 'B', text: 'Deferoksamin IV infus subkutan 12 jam' },
      { key: 'C', text: 'Deferipron' },
      { key: 'D', text: 'BAL (Dimercaprol)' },
      { key: 'E', text: 'EDTA' }
    ],
    correctAnswer: 'A',
    explanation: 'DEFERASIROKS adalah agen pengkhelat besi oral sekali sehari yang sangat efektif dan meningkatkan kepatuhan pasien talasemia dibandingkan Deferoksamin konvensional yang harus diberikan lewat infus subkutan lambat menggunakan pompa selama 8-12 jam setiap malam.',
    clinicalReference: 'Thalassemia International Federation (TIF) Guidelines & Kemenkes RI',
    difficulty: 'Sedang'
  },
  {
    id: 'q-439',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien laki-laki 65 tahun dengan riwayat Gagal Jantung Fraksi Ejeksi Menurun (HFrEF, EF 30%) datang untuk evaluasi rutin. Pasien sudah mengonsumsi Ramipril 10 mg, Bisoprolol 10 mg, dan Spironolakton 25 mg. Tekanan darah 125/80 mmHg, eGFR 45 mL/min/1,73m2.',
    question: 'Golongan obat ke-4 dari empat pilar dasar terapi HFrEF (The Fantastic Four) menurut pedoman ESC/AHA 2024 yang wajib ditambahkan untuk menurunkan mortalitas kardiovaskular adalah:',
    options: [
      { key: 'A', text: 'SGLT2 Inhibitor (Dapagliflozin 10 mg atau Empagliflozin 10 mg 1x sehari)' },
      { key: 'B', text: 'Digoksin 0,25 mg' },
      { key: 'C', text: 'Furosemid 80 mg' },
      { key: 'D', text: 'Diltiazem 30 mg' },
      { key: 'E', text: 'Klonidin 0,15 mg' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan pedoman ESC dan AHA/ACC/HFSA, 4 pilar mutlak pengobatan HFrEF (The Fantastic Four) yang terbukti menurunkan mortalitas adalah: 1) ARNI/ACEI, 2) Beta Blocker spesifik bukti, 3) Mineralocorticoid Receptor Antagonist (MRA/Spironolakton), dan 4) SGLT2 INHIBITOR (Dapagliflozin atau Empagliflozin). Penambahan SGLT2i bermanfaat baik pada pasien penderita diabetes maupun non-diabetes.',
    clinicalReference: '2023 Focused Update of the 2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure',
    difficulty: 'Mudah'
  },
  {
    id: 'q-440',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Dokter spesialis jantung berencana mengganti Ramipril dengan ARNI (Sacubitril/Valsartan) pada pasien HFrEF yang masih bergejala (NYHA Kelas II-III). Apoteker memberikan peringatan mengenai periode bebas obat (washout period) sebelum memulai ARNI.',
    question: 'Berapa lama interval waktu minimal penghentian ACE Inhibitor sebelum dosis pertama ARNI boleh diminum?',
    options: [
      { key: 'A', text: 'Minimal 36 jam' },
      { key: 'B', text: 'Minimal 12 jam' },
      { key: 'C', text: 'Minimal 6 jam' },
      { key: 'D', text: 'Minimal 48 jam' },
      { key: 'E', text: 'Tidak memerlukan jeda waktu' }
    ],
    correctAnswer: 'A',
    explanation: 'Pemberian ARNI (Sacubitril/Valsartan) pada pasien yang sebelumnya mengonsumsi ACE Inhibitor WAJIB MEMBERIKAN WASHOUT PERIOD MINIMAL 36 JAM setelah dosis terakhir ACEI. Hal ini mutlak dilakukan karena kombinasi penghambatan enzim neprilisin dan ACE secara bersamaan meningkatkan bradikinin secara masif yang dapat memicu timbulnya ANGIOEDEMA FATAL yang mengancam jiwa.',
    clinicalReference: 'AHA/ACC/HFSA Heart Failure Guideline & PERKI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-441',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien wanita 45 tahun penderita kanker payudara metastatik HER2-positif dijadwalkan menerima terapi antibodi monoklonal Trastuzumab kombinasi dengan kemoterapi Doksorubisin.',
    question: 'Toksisitas organ apakah yang paling utama harus dimonitor secara ketat menggunakan ekokardiografi berkala pada kombinasi kedua agen tersebut?',
    options: [
      { key: 'A', text: 'Kardiotoksisitas (penurunan fraksi ejeksi ventrikel kiri / LVEF)' },
      { key: 'B', text: 'Nefrotoksisitas' },
      { key: 'C', text: 'Ototoksisitas' },
      { key: 'D', text: 'Fibrosis paru' },
      { key: 'E', text: 'Neuritis optik' }
    ],
    correctAnswer: 'A',
    explanation: 'Trastuzumab dan Doksorubisin (golongan antrasiklin) keduanya bersifat KARDIOTOKSIK. Doksorubisin menyebabkan kerusakan miokardium ireversibel terkait dosis kumulatif melalui stres oksidatif radikal bebas, sedangkan Trastuzumab mengganggu pensinyalan perbaikan miosit HER2/neuregulin (disfungsi miokard reversible). Kombinasi keduanya meningkatkan risiko gagal jantung kongestif secara signifikan.',
    clinicalReference: 'ASCO Clinical Practice Guideline: Prevention and Monitoring of Cardiac Dysfunction in Survivors of Adult Cancer',
    difficulty: 'Mudah'
  },
  {
    id: 'q-442',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Untuk meminimalkan pembentukan radikal bebas dan kardiotoksisitas kardiomiopati kumulatif akibat Doksorubisin dosis tinggi (> 300 mg/m2), apoteker onkologi merekomendasikan agen kardioprotektor pengkhelat besi intraseluler.',
    question: 'Obat kardioprotektor spesifik apakah yang dimaksud?',
    options: [
      { key: 'A', text: 'Deksrazoksan' },
      { key: 'B', text: 'Mesna' },
      { key: 'C', text: 'Amifostin' },
      { key: 'D', text: 'Leukovorin' },
      { key: 'E', text: 'Filgrastim' }
    ],
    correctAnswer: 'A',
    explanation: 'DEKSRAZOKSAN adalah agen kardioprotektor spesifik yang diindikasikan untuk mencegah atau mengurangi insidensi kardiomiopati akibat Doksorubisin pada pasien yang menerima dosis kumulatif tinggi. Deksrazoksan dihidrolisis intraseluler menjadi senyawa pengkhelat besi yang mencegah interaksi besi dengan antrasiklin dalam membentuk radikal bebas reaktif superoksida.',
    clinicalReference: 'FDA Prescribing Information Zinecard / Savene & NCCN Guidelines',
    difficulty: 'Sedang'
  },
  {
    id: 'q-443',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien limfoma menerima regimen kemoterapi berisiko tinggi yang mengandung Siklofosfamid dosis tinggi. Pasien berisiko mengalami komplikasi sistitis hemoragik akibat akumulasi metabolit akrolein di kandung kemih.',
    question: 'Uroprotektor spesifik manakah yang harus diinfuskan bersama siklofosfamid untuk menginaktivasi akrolein?',
    options: [
      { key: 'A', text: 'Mesna (Natrium 2-merkaptoetanasulfonat)' },
      { key: 'B', text: 'Deksrazoksan' },
      { key: 'C', text: 'Rasburikase' },
      { key: 'D', text: 'Kalsium Folinat' },
      { key: 'E', text: 'Asetilsistein' }
    ],
    correctAnswer: 'A',
    explanation: 'MESNA (Sodium 2-mercaptoethanesulfonate) adalah agen uroprotektor spesifik yang mengikat metabolit toksik akrolein dari metabolisme ifosfamid dan siklofosfamid di saluran kemih. Gugus tiol bebas (-SH) pada Mesna bereaksi dengan ikatan rangkap akrolein membentuk konjugat nontoksik yang stabil, mencegah sistitis hemoragik nekrotik pada buli-buli.',
    clinicalReference: 'NCCN Guidelines: Prevention and Management of Chemotherapy-Induced Toxicities',
    difficulty: 'Mudah'
  },
  {
    id: 'q-444',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien osteosarkoma menerima Metotreksat dosis sangat tinggi (HDMTX > 1000 mg/m2). Untuk menyelamatkan sel-sel normal tubuh dari toksisitas mieloablatif mematikan akibat hambatan enzim dihidrofolat reduktase (DHFR), apoteker menyiapkan terapi Leucovorin Rescue.',
    question: 'Bentuk aktif koenzim folat apakah yang terkandung dalam Leucovorin (Kalsium Folinat)?',
    options: [
      { key: 'A', text: 'Asam 5-formiltetrahidrofolat' },
      { key: 'B', text: 'Asam folat murni' },
      { key: 'C', text: 'Asam dihidrofolat' },
      { key: 'D', text: 'Sianokobalamin' },
      { key: 'E', text: 'Piridoksal fosfat' }
    ],
    correctAnswer: 'A',
    explanation: 'LEUKOVORIN (Kalsium Folinat / Folinic Acid) adalah asam 5-formiltetrahidrofolat, suatu turunan tereduksi aktif dari asam folat. Leucovorin tidak memerlukan enzim Dihidrofolat Reduktase (DHFR) untuk dikonversi menjadi bentuk aktif koenzim tetrahidrofolat, sehingga mampu "menyelamatkan" (rescue) sel-sel sehat sumsum tulang dan mukosa GI dari kematian sel akibat hambatan DHFR oleh metotreksat.',
    clinicalReference: 'Goodman & Gilman’s The Pharmacological Basis of Therapeutics & NCCN Guidelines',
    difficulty: 'Sedang'
  },
  {
    id: 'q-445',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien leukemia mieloblastik akut (AML) dengan jumlah leukosit 120.000/uL mengalami Sindrom Lisis Tumor (Tumor Lysis Syndrome / TLS) beberapa jam setelah inisiasi kemoterapi. Kadar asam urat serum melonjak drastis hingga 16 mg/dL disertai gagal ginjal akut anuria akibat presipitasi kristal asam urat.',
    question: 'Enzim urat oksidase rekombinan manakah yang mampu mengonversi asam urat yang telah terbentuk menjadi alantoin yang 10 kali lipat lebih larut air untuk eliminasi ginjal cepat?',
    options: [
      { key: 'A', text: 'Rasburikase IV' },
      { key: 'B', text: 'Alopurinol oral' },
      { key: 'C', text: 'Febuksostat oral' },
      { key: 'D', text: 'Kolkisin' },
      { key: 'E', text: 'Probenesid' },
    ],
    correctAnswer: 'A',
    explanation: 'RASBURIKASE adalah enzim urat oksidase rekombinan yang bekerja mengkatalisis pemecahan asam urat enzimatik menjadi senyawa ALANTOIN yang sangat larut dalam air sehingga mudah diekskresikan melalui ginjal. Alopurinol dan Febuksostat hanya menghambat sintesis baru asam urat melalui hambatan xantin oksidase dan tidak dapat mendegradasi asam urat yang sudah beredar dalam sirkulasi.',
    clinicalReference: 'British Committee for Standards in Haematology Guidelines on the Management of TLS',
    difficulty: 'Sedang'
  },
  {
    id: 'q-446',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien laki-laki 35 tahun penderita leukemia promielositik akut (APL) yang diterapi dengan All-Trans Retinoic Acid (ATRA) dan Arsenik Trioksida mengeluhkan demam mendadak, kenaikan berat badan > 5 kg akibat retensi cairan, sesak napas, efusi pleura, dan infiltrat paru (Differensiasi Syndrome / ATRA Syndrome).',
    question: 'Farmakoterapi lini pertama gawat darurat yang harus segera diberikan untuk mengatasi Differentiation Syndrome adalah:',
    options: [
      { key: 'A', text: 'Deksametason 10 mg IV setiap 12 jam selama minimal 3 hari' },
      { key: 'B', text: 'Antibiotik Meropenem 1 g tiap 8 jam' },
      { key: 'C', text: 'Furosemid 20 mg monoterapi' },
      { key: 'D', text: 'Inhalasi Salbutamol' },
      { key: 'E', text: 'Klorfeniramin maleat oral' }
    ],
    correctAnswer: 'A',
    explanation: 'DIFFERENTIATION SYNDROME (sebelumnya dikenal sebagai sindrom ATRA) adalah komplikasi inflamasi sistemik berat yang mengancam jiwa akibat pelepasan sitokin masif oleh sel promielosit yang berdiferensiasi. Tatalaksana baku emasnya adalah KORTIKOSTEROID DOSIS TINGGI: DEKSAMETASON 10 mg IV tiap 12 jam segera saat kecurigaan klinis pertama muncul.',
    clinicalReference: 'NCCN Guidelines: Acute Myeloid Leukemia & ELN Recommendations',
    difficulty: 'Sedang'
  },
  {
    id: 'q-447',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang wanita 48 tahun dengan Ca Mammae menerima kemoterapi Cisplatin dosis tinggi. Regimen antiemetik profilaksis untuk kemoterapi berpotensi emetogenik tinggi (Highly Emetogenic Chemotherapy / HEC) diresepkan apoteker.',
    question: 'Kombinasi empat obat (Quadruple Antiemetic Regimen) baku menurut pedoman ASCO/NCCN 2024 terdiri dari:',
    options: [
      { key: 'A', text: 'NK-1 Receptor Antagonist (Aprepitant) + 5-HT3 Antagonist (Ondansetron/Palonosetron) + Deksametason + Olanzapin' },
      { key: 'B', text: 'Metoklopramid + Domperidon + Ondansetron + Difenhidramin' },
      { key: 'C', text: 'Ondansetron monoterapi dosis ganda' },
      { key: 'D', text: 'Deksametason + Prometasin + Piridoksin + Antasida' },
      { key: 'E', text: 'Loperamid + Hiosin + Parasetamol + Deksametason' }
    ],
    correctAnswer: 'A',
    explanation: 'Pedoman ASCO, MASCC, dan NCCN merekomendasikan KOMBINASI 4 OBAT (Quadruple therapy) untuk pencegahan mual muntah akibat regimen kemoterapi Highly Emetogenic Chemotherapy (HEC seperti Cisplatin, Doksorubisin-Siklofosfamid): 1) Antagonis Reseptor NK-1 (Aprepitant/Fosaprepitant), 2) Antagonis Reseptor 5-HT3 (Palonosetron/Ondansetron), 3) Deksametason, dan 4) OLANZAPIN (antipsikotik atipikal penghambat multireseptor dopaminergik/serotonergik).',
    clinicalReference: 'ASCO Antiemetic Guideline Update & NCCN Antiemesis Guidelines',
    difficulty: 'Sedang'
  },
  {
    id: 'q-448',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien kanker kolorektal menerima infus Irinotekan. Satu jam setelah infus dimulai, pasien mengalami sindrom kolinergik akut berupa kram perut hebat, diare profus akut, keringat dingin, dan lakrimasi.',
    question: 'Obat antimuskarinik apakah yang harus segera diinjeksikan untuk mengatasi diare akut akibat irinotekan tersebut?',
    options: [
      { key: 'A', text: 'Atropin Sulfat 0,25 - 1 mg IV/SC' },
      { key: 'B', text: 'Loperamid 4 mg' },
      { key: 'C', text: 'Neostigmin IV' },
      { key: 'D', text: 'Pilokarpin' },
      { key: 'E', text: 'Fisostigmin' }
    ],
    correctAnswer: 'A',
    explanation: 'Irinotekan menyebabkan dua jenis diare: 1) Diare akut (muncul <= 24 jam) yang diperantarai oleh inhibisi sementara asetilkolinesterase (sindrom kolinergik akut), diterapi dengan ATROPIN SULFAT subkutan atau intravena; 2) Diare lambat (delayed diarrhea, > 24 jam) yang disebabkan oleh iritasi mukosa langsung oleh metabolit aktif SN-38 di usus, yang diterapi agresif dengan LOPERAMID dosis tinggi.',
    clinicalReference: 'NCCN Guidelines for Colon Cancer & Lexicomp Drug Information',
    difficulty: 'Sedang'
  },
  {
    id: 'q-449',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pada kasus diare lambat (delayed diarrhea) akibat Irinotekan yang timbul pada hari ke-3 pasca-kemoterapi, protokol penatalaksanaan diare agresif loperamid direkomendasikan.',
    question: 'Bagaimanakah aturan pemakaian Loperamid dosis tinggi khusus kasus delayed diarrhea akibat kemoterapi menurut pedoman onkologi?',
    options: [
      { key: 'A', text: 'Dosis awal 4 mg, diikuti 2 mg setiap 2 jam (atau 4 mg tiap 4 jam malam hari) hingga bebas diare selama 12 jam berturut-turut' },
      { key: 'B', text: 'Maksimal 16 mg per minggu' },
      { key: 'C', text: '1 tablet 2 mg hanya jika buang air besar cair' },
      { key: 'D', text: 'Hentikan setelah 1 dosis karena risiko ileus paralitik' },
      { key: 'E', text: 'Diberikan bersamaan dengan antibiotik tetrasiklin' }
    ],
    correctAnswer: 'A',
    explanation: 'Delayed diarrhea akibat irinotekan dapat menyebabkan dehidrasi dan syok septik mematikan jika tidak ditangani agresif. Protokol standarnya adalah inisiasi LOPERAMID 4 mg pada tanda diare cair pertama, kemudian dilanjutkan 2 mg SETIAP 2 JAM sampai pasien bebas diare minimal selama 12 jam penuh (dosis ini melampaui batas maksimal reguler 16 mg/hari pada diare non-kemoterapi).',
    clinicalReference: 'ASCO/ESMO Clinical Practice Guidelines on Diarrhea & Prescribing Information Camptosar',
    difficulty: 'Sedang'
  },
  {
    id: 'q-450',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien pria 60 tahun dengan infark serebral non-kardioemboli akut dianalisis profil farmakogenomiknya sebelum peresepan Klopidogrel. Hasil tes laboratorium menunjukkan alel CYP2C19 *2/*2 (CYP2C19 Poor Metabolizer).',
    question: 'Rekomendasi farmakoterapi manakah yang paling tepat berdasarkan Clinical Pharmacogenetics Implementation Consortium (CPIC) Guidelines?',
    options: [
      { key: 'A', text: 'Hindari Klopidogrel karena tidak dapat dikonversi menjadi metabolit aktif; beralih ke antiplatelet alternatif seperti Tikagrelor atau Prasugrel' },
      { key: 'B', text: 'Naikkan dosis Klopidogrel menjadi 4 kali lipat' },
      { key: 'C', text: 'Lanjutkan Klopidogrel dengan tambahan Omeprazole dosis tinggi' },
      { key: 'D', text: 'Berikan Klopidogrel bersama infus natrium bikarbonat' },
      { key: 'E', text: 'Tetap berikan Klopidogrel 75 mg karena mutasi genetik tidak bermakna klinis' }
    ],
    correctAnswer: 'A',
    explanation: 'Klopidogrel adalah prodrug yang membutuhkan bioaktivasi dua tahap oleh enzim hepar, terutama CYP2C19. Pasien dengan fenotipe CYP2C19 Poor Metabolizer (alel *2/*2 atau *2/*3) tidak mampu membentuk metabolit aktif klopidogrel secara adekuat sehingga efikasi inhibisi platelet sangat rendah dan risiko trombosis stent/stroke berulang sangat tinggi. CPIC merekomendasikan penggantian ke TIKAGRELOR atau PRASUGREL yang tidak bergantung pada bioaktivasi CYP2C19.',
    clinicalReference: 'CPIC Guideline for CYP2C19 Genotype and Clopidogrel Therapy Update 2024',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-451',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien laki-laki 42 tahun keturunan Asia Timur akan memulai terapi Karbamazepin untuk neuralgia trigeminal. Sebelum memulai terapi, dilakukan skrining genetik alel HLA.',
    question: 'Alel genetik human leukocyte antigen manakah yang jika positif berisiko tinggi memicu Sindrom Stevens-Johnson (SJS) dan Toxic Epidermal Necrolysis (TEN) fatal terhadap karbamazepin?',
    options: [
      { key: 'A', text: 'HLA-B*1502' },
      { key: 'B', text: 'HLA-B*5701' },
      { key: 'C', text: 'HLA-B*5801' },
      { key: 'D', text: 'HLA-DQ2' },
      { key: 'E', text: 'HLA-DR4' }
    ],
    correctAnswer: 'A',
    explanation: 'Alel HLA-B*1502 sangat prevalen pada populasi Asia (termasuk Indonesia) dan berikatan kuat dengan risiko SJS/TEN berat akibat Karbamazepin. FDA dan CPIC mewajibkan skrining alel HLA-B*1502; jika pasien positif membawa alel tersebut, Karbamazepin KONTRAINDIKASI MUTLAK. (Sebagai perbandingan: HLA-B*5701 untuk Abacavir, dan HLA-B*5801 untuk Alopurinol).',
    clinicalReference: 'CPIC Guideline for HLA-B Genotype and Carbamazepine Dosing & FDA Boxed Warning',
    difficulty: 'Sedang'
  },
  {
    id: 'q-452',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien HIV positif akan memulai terapi Antiretroviral (ARV) lini pertama yang mengandung Abakavir (ABC).',
    question: 'Pemeriksaan alel genetik apakah yang wajib dilakukan untuk mencegah reaksi hipersensitivitas multisistemik fatal (fever, rash, GI symptoms, respiratory distress) terhadap abakavir?',
    options: [
      { key: 'A', text: 'HLA-B*5701' },
      { key: 'B', text: 'HLA-B*1502' },
      { key: 'C', text: 'HLA-B*5801' },
      { key: 'D', text: 'CYP2D6 *4' },
      { key: 'E', text: 'TPMT deficient' }
    ],
    correctAnswer: 'A',
    explanation: 'Skrining alel HLA-B*5701 WAJIB dilakukan sebelum meresepkan ABAKAVIR. Pasien yang positif membawa alel HLA-B*5701 memiliki risiko hampir 50% mengalami Reaksi Hipersensitivitas Abakavir (Abacavir Hypersensitivity Reaction) yang dapat fatal pada pemaparan ulang. Jika positif, abakavir tidak boleh diresepkan selamanya.',
    clinicalReference: 'CPIC Guidelines for HLA-B*5701 and Abacavir & WHO Consolidated Guidelines on HIV',
    difficulty: 'Sedang'
  },
  {
    id: 'q-453',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien penderita Gout Kronis dengan penyakit ginjal kronik (CKD stadium 3) akan diresepkan Alopurinol untuk menurunkan kadar asam urat 11 mg/dL. Di populasi Asia Tenggara, prevalensi reaksi kulit berat (Severe Cutaneous Adverse Reactions / SCAR) akibat alopurinol tinggi.',
    question: 'Alel genetik apakah yang terkait dengan hipersensitivitas berat SCAR terhadap alopurinol?',
    options: [
      { key: 'A', text: 'HLA-B*5801' },
      { key: 'B', text: 'HLA-B*1502' },
      { key: 'C', text: 'HLA-B*5701' },
      { key: 'D', text: 'VKORC1' },
      { key: 'E', text: 'CYP2C9 *3' }
    ],
    correctAnswer: 'A',
    explanation: 'Alel HLA-B*5801 sangat berasosiasi dengan timbulnya Severe Cutaneous Adverse Reactions (SCAR seperti SJS, TEN, dan DRESS) akibat ALOPURINOL, terutama pada individu keturunan Han Cina, Korea, Thailand, dan Asia Tenggara lainnya dengan gangguan fungsi ginjal. Jika pasien positif HLA-B*5801, alopurinol harus dihindari dan dapat dipertimbangkan alternatif seperti Febuksostat.',
    clinicalReference: '2020 American College of Rheumatology (ACR) Guideline for the Management of Gout',
    difficulty: 'Sedang'
  },
  {
    id: 'q-454',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien anak 8 tahun dengan Leukemia Limfoblastik Akut (ALL) akan menerima terapi rumatan dengan 6-Merkaptopurin (6-MP). Sebelum inisiasi terapi, diukur aktivitas enzim Tiopurin Metiltransferase (TPMT) dan NUDT15.',
    question: 'Apakah konsekuensi klinis fatal jika pasien dengan defisiensi homozigot enzim TPMT diberikan 6-merkaptopurin dosis standar?',
    options: [
      { key: 'A', text: 'Mielosupresi berat (pansitopenia fatal akibat penumpukan tioguanin nukleotida toksik)' },
      { key: 'B', text: 'Gagal ginjal akut nefrolitiasis' },
      { key: 'C', text: 'Hipertensi krisis' },
      { key: 'D', text: 'Ulkus peptikum perforasi' },
      { key: 'E', text: 'Katarak kongenital' }
    ],
    correctAnswer: 'A',
    explanation: 'Enzim TPMT memetabolisme 6-merkaptopurin menjadi metabolit inaktif 6-metilmerkaptopurin. Pada pasien defisiensi TPMT (poor metabolizer), jalur inaktivasi terhambat sehingga sebagian besar obat dialihkan ke jalur pembentukan metabolit aktif toksik Thioguanine Nucleotides (TGN), menyebabkan penekanan sumsum tulang belakang (mielosupresi dan pansitopenia masif) yang mengancam jiwa. Dosis harus diturunkan drastis hingga 90%.',
    clinicalReference: 'CPIC Guideline for Thiopurine Methyltransferase (TPMT) and Thiopurine Dosing Update',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-455',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang wanita 32 tahun penderita Myasthenia Gravis mengalami Krisis Miastenik akut dengan sesak napas berat dan kelemahan otot orofaringeal.',
    question: 'Obat inhibitor asetilkolinesterase perifer kerja sedang manakah yang menjadi terapi lini pertama untuk meningkatkan transmisi neuromuskular pada myasthenia gravis?',
    options: [
      { key: 'A', text: 'Piridostigmin Bromida oral/IV' },
      { key: 'B', text: 'Edrofonium klorida' },
      { key: 'C', text: 'Suksinilkolin' },
      { key: 'D', text: 'Pankuronium' },
      { key: 'E', text: 'Atropin sulfat dosis tinggi' }
    ],
    correctAnswer: 'A',
    explanation: 'PIRIDOSTIGMIN BROMIDA adalah antikolinesterase reversibel perifer pilihan utama untuk tatalaksana simptomatik jangka panjang myasthenia gravis. Piridostigmin menghambat hidrolisis asetilkolin di celah sinaps taut neuromuskular (neuromuscular junction), memperpanjang masa kerja asetilkolin pada reseptor nikotinik otot lurik. Edrofonium hanya digunakan untuk uji diagnostik Tensilon test karena masa kerjanya yang sangat singkat (menit).',
    clinicalReference: 'International Consensus Guidance for Management of Myasthenia Gravis & PERDOSSI',
    difficulty: 'Sedang'
  },
  {
    id: 'q-456',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Apoteker bangsal saraf membedakan antara Krisis Miastenik (kekurangan stimulasi asetilkolin) dan Krisis Kolinergik (kelebihan dosis obat antikolinesterase).',
    question: 'Tanda klinis apakah yang khas menandakan terjadinya Krisis Kolinergik akibat toksisitas piridostigmin berlebih?',
    options: [
      { key: 'A', text: 'Fasikulasi otot lurik, pupil miosis, hipersalivasi, berkeringat basah, dan kram diare' },
      { key: 'B', text: 'Pupil midriasis dan kulit sangat kering' },
      { key: 'C', text: 'Retensi urin akut dan konstipasi' },
      { key: 'D', text: 'Hipertensi berat dan takikardia' },
      { key: 'E', text: 'Tremor kasar tanpa sekret bronkus' }
    ],
    correctAnswer: 'A',
    explanation: 'Krisis kolinergik disebabkan oleh akumulasi asetilkolin berlebih akibat overdosis piridostigmin/neostigmin. Ciri khasnya adalah stimulasi berlebih reseptor nikotinik (fasikulasi otot, kedutan, kelemahan flaksid) dan reseptor muskarinik (pupil miosis, salivasi berlebih, lakrimasi, bradikardia, keringat deras, hiperperistaltik usus/diare). Jika timbul tanda ini, obat antikolinesterase harus segera dihentikan dan diberikan atropin.',
    clinicalReference: 'Merritt’s Neurology & Goodman & Gilman’s The Pharmacological Basis of Therapeutics',
    difficulty: 'Sedang'
  },
  {
    id: 'q-457',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien wanita 29 tahun dengan Multipel Sklerosis bentuk Relapsing-Remitting (RRMS) mengalami serangan kekambuhan (relapse) akut dengan gejala neuritis optik dan paralisis motorik progresif cepat.',
    question: 'Kortikosteroid pulsa intravena dosis tinggi lini pertama yang diindikasikan untuk mempercepat pemulihan defisit neurologis serangan akut adalah:',
    options: [
      { key: 'A', text: 'Metilprednisolon IV 1000 mg (1 gram) per hari selama 3 - 5 hari' },
      { key: 'B', text: 'Prednison oral 5 mg per hari' },
      { key: 'C', text: 'Hidrokortison IV 25 mg' },
      { key: 'D', text: 'Deksametason oral 0,5 mg' },
      { key: 'E', text: 'Triamsinolon inhalasi' }
    ],
    correctAnswer: 'A',
    explanation: 'Terapi baku emas untuk eksaserbasi/relaps akut Multipel Sklerosis adalah KORTIKOSTEROID DOSIS TINGGI PULSATILE: METILPREDNISOLON INTRAVENA 500 - 1000 mg/hari selama 3 hingga 5 hari berturut-turut. Terapi ini menstabilkan sawar darah otak, menekan inflamasi autoimun akut pada selubung mielin, dan mempercepat resolusi gangguan fungsional.',
    clinicalReference: 'Consortium of Multiple Sclerosis Centers (CMSC) Guidelines & PERDOSSI',
    difficulty: 'Sedang'
  },
  {
    id: 'q-458',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien wanita 30 tahun penderita artritis reumatoid merencanakan kehamilan dalam 6 bulan ke depan. Pasien saat ini rutin meminum Metotreksat 15 mg per minggu.',
    question: 'Berapa lama interval waktu minimal Metotreksat harus dihentikan sebelum konsepsi/kehamilan karena efek teratogenik dan abortifasien kuatnya?',
    options: [
      { key: 'A', text: 'Minimal dihentikan 3 hingga 6 bulan sebelum konsepsi, disertai suplementasi asam folat' },
      { key: 'B', text: 'Cukup dihentikan 2 hari sebelum berhubungan intim' },
      { key: 'C', text: 'Dihentikan saat hasil tes kehamilan positif' },
      { key: 'D', text: 'Tidak perlu dihentikan karena aman pada trimester awal' },
      { key: 'E', text: 'Dosisnya cukup diturunkan separuhnya' }
    ],
    correctAnswer: 'A',
    explanation: 'Metotreksat merupakan KONTRAINDIKASI MUTLAK PADA KEHAMILAN (Kategori X FDA) karena bersifat teratogenik berat (menyebabkan malformasi kraniofasial, retardasi mental, defek tuba neural) dan abortifasien. Pedoman ACR merekomendasikan penghentian metotreksat MINIMAL 3 BULAN (idealnya 3-6 bulan) sebelum wanita merencanakan konsepsi.',
    clinicalReference: 'American College of Rheumatology (ACR) Guideline for Reproductive Health in Rheumatic Diseases',
    difficulty: 'Mudah'
  },
  {
    id: 'q-459',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien penderita artritis reumatoid aktif yang mengonsumsi Leflunomid ingin segera hamil tanpa menunggu periode pembersihan obat alami (yang memakan waktu hingga 2 tahun karena eliminasi enterohepatik yang sangat lambat).',
    question: 'Resin pengikat asam empedu manakah yang digunakan dalam protokol pencucian cepat (washout protocol) Leflunomid untuk mempercepat eliminasi metabolit aktif teriflunomid?',
    options: [
      { key: 'A', text: 'Kolestiramin oral 8 gram 3 kali sehari selama 11 hari' },
      { key: 'B', text: 'Karbon aktif 100 gram' },
      { key: 'C', text: 'Simvastatin oral' },
      { key: 'D', text: 'Parafin cair' },
      { key: 'E', text: 'Polietilen glikol' }
    ],
    correctAnswer: 'A',
    explanation: 'Metabolit aktif leflunomid (teriflunomid) mengalami sirkulasi enterohepatik intensif dengan waktu paruh eliminasi hingga 2-4 minggu, sehingga membutuhkan waktu hingga 2 tahun untuk turun di bawah 0,02 mg/L. Protokol washout cepat standar FDA adalah pemberian KOLESTIRAMIN 8 gram 3 kali sehari selama 11 hari berturut-turut untuk mengikat metabolit di lumen usus dan mencegah reabsorpsi.',
    clinicalReference: 'FDA Leflunomide (Arava) Full Prescribing Information & ACR Guidelines',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-460',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pria 50 tahun dengan Gout Artritis Akut memiliki riwayat ulkus peptikum lambung aktif dan CKD stadium 4 (eGFR 22 mL/min). Dokter meminta saran alternatif analgesik inflamasi karena NSAID dan Kolkisin dosis penuh dikontraindikasikan.',
    question: 'Pilihan farmakoterapi lini pertama yang paling aman dan efektif untuk serangan asam urat akut pada pasien komorbiditas ginjal dan lambung berat adalah:',
    options: [
      { key: 'A', text: 'Kortikosteroid sistemik (Prednison oral 30 - 35 mg/hari selama 5 hari atau Metilprednisolon)' },
      { key: 'B', text: 'Indometasin oral 50 mg 3 kali sehari' },
      { key: 'C', text: 'Kolkisin 1 mg tiap 2 jam hingga diare' },
      { key: 'D', text: 'Asam Mefenamat 500 mg' },
      { key: 'E', text: 'Alopurinol dosis tinggi 600 mg langsung' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan 2020 ACR Gout Guidelines, KORTIKOSTEROID SISTEMIK (Prednison oral 30-35 mg/hari selama 5 hari lalu dihentikan, atau injeksi triamsinolon intra-artikular) adalah pilihan lini pertama yang sangat dianjurkan untuk mengatasi serangan artritis gout akut pada pasien dengan kontraindikasi terhadap NSAID (riwayat perdarahan lambung/CKD) dan Kolkisin (klirens ginjal rendah memicu miopati). Alopurinol tidak boleh dimulai dosis tinggi saat serangan akut meledak.',
    clinicalReference: '2020 American College of Rheumatology Guideline for the Management of Gout',
    difficulty: 'Mudah'
  },
  {
    id: 'q-461',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Apoteker mengevaluasi terapi profilaksis serangan berulang (flare prevention) saat inisiasi obat penurun asam urat (Urate-Lowering Therapy / ULT seperti Alopurinol) pada pasien gout.',
    question: 'Berapa lama terapi antiinflamasi profilaksis profilaksis (Kolkisin dosis rendah 0,5 mg 1-2x/hari) harus diberikan bersamaan dengan titrasi awal alopurinol?',
    options: [
      { key: 'A', text: 'Minimal 3 hingga 6 bulan dilanjutkan evaluasi klinis kadar asam urat target' },
      { key: 'B', text: 'Hanya selama 3 hari pertama' },
      { key: 'C', text: 'Selama 1 tahun penuh tanpa henti' },
      { key: 'D', text: 'Tidak perlu profilaksis jika asam urat tinggi' },
      { key: 'E', text: 'Cukup 1 minggu' }
    ],
    correctAnswer: 'A',
    explanation: 'Inisiasi obat penurun asam urat (ULT) melarutkan kristal monosodium urat dari tofus yang dapat memicu serangan gout akut reaktif (paradoxical flare). ACR merekomendasikan pemberian terapi profilaksis antiinflamasi (Kolkisin dosis rendah 0,5-1 mg/hari atau NSAID dosis rendah) selama MINIMAL 3 SAMPAI 6 BULAN secara kontinu saat memulai dan menitrasi dosis ULT.',
    clinicalReference: '2020 American College of Rheumatology Guideline for the Management of Gout',
    difficulty: 'Sedang'
  },
  {
    id: 'q-462',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien wanita 55 tahun penderita Hipotiroidisme primer telah meminum Levotiroksin tablet 100 mcg per hari. Pasien baru saja diresepkan Kalsium Karbonat 500 mg dan Fero Sulfat 300 mg untuk pengobatan osteoporosis dan anemia defisiensi besi.',
    question: 'Apakah instruksi pemakaian yang wajib diedukasikan apoteker mengenai aturan minum levotiroksin bersama suplemen kalsium dan besi?',
    options: [
      { key: 'A', text: 'Levotiroksin diminum pagi hari saat perut kosong (30-60 menit sebelum sarapan), dan beri jeda minimal 4 jam sebelum meminum kalsium atau zat besi' },
      { key: 'B', text: 'Semua obat diminum bersamaan saat makan siang agar praktis' },
      { key: 'C', text: 'Kalsium diminum pagi hari sebelum makan, levotiroksin setelah makan malam' },
      { key: 'D', text: 'Hentikan levotiroksin selama terapi suplemen besi' },
      { key: 'E', text: 'Kalsium dilarutkan bersama susu murni' }
    ],
    correctAnswer: 'A',
    explanation: 'Kation polivalen seperti Kalsium (Ca2+) dan Besi (Fe2+) membentuk kompleks khelat yang tidak larut dengan LEVOTIROKSIN di lumen saluran cerna, sehingga menurunkan bioavailabilitas levotiroksin secara drastis hingga memicu kegagalan terapi hipotiroid. Pasien harus mengonsumsi levotiroksin pada pagi hari dalam kondisi perut kosong, dan memberi JEDA MINIMAL 4 JAM sebelum meminum suplemen kalsium atau zat besi.',
    clinicalReference: 'American Thyroid Association (ATA) Guidelines for Hypothyroidism Management',
    difficulty: 'Mudah'
  },
  {
    id: 'q-463',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang wanita 26 tahun hamil trimester pertama (usia gestasi 8 minggu) terdiagnosis hipertiroidisme (Penyakit Graves) aktif dengan TSH tertekan < 0,01 mIU/L dan Free T4 meningkat 3,2 ng/dL.',
    question: 'Obat antitiroid pilihan pertama manakah yang direkomendasikan American Thyroid Association (ATA) khusus untuk trimester pertama kehamilan?',
    options: [
      { key: 'A', text: 'Propiltiourasil (PTU)' },
      { key: 'B', text: 'Metimazol' },
      { key: 'C', text: 'Tiamazol' },
      { key: 'D', text: 'Radioactive Iodine (I-131)' },
      { key: 'E', text: 'Kalium Iodida pekat' }
    ],
    correctAnswer: 'A',
    explanation: 'PROPILTIOURASIL (PTU) adalah antitiroid pilihan utama pada TRIMESTER PERTAMA KEHAMILAN karena transfer plasentanya lebih rendah dan tidak terkait dengan malformasi kongenital embriopati berat seperti pada Metimazol (aplasia kutis kongenita dan atresia koana/esofagus). Pada trimester kedua dan ketiga, pengobatan dapat dialihkan kembali ke Metimazol untuk menghindari risiko hepatotoksisitas maternal akibat PTU.',
    clinicalReference: '2017 Guidelines of the American Thyroid Association for the Diagnosis and Management of Thyroid Disease During Pregnancy',
    difficulty: 'Mudah'
  },
  {
    id: 'q-464',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien hipertiroidisme yang mengonsumsi Metimazol 30 mg/hari datang ke instalasi gawat darurat dengan demam tinggi 39°C, menggigil hebat, dan sakit tenggorokan berat (faringitis ulseratif). Hitung darah lengkap menunjukkan jumlah leukosit 1.200/uL dan Absolute Neutrophil Count (ANC) 150 sel/uL.',
    question: 'Efek samping hematologi idiosyncratic berbahaya apakah yang sedang dialami pasien dan tindakan apa yang harus segera diambil?',
    options: [
      { key: 'A', text: 'Agranulositosis; segera hentikan Metimazol permanen, lakukan isolasi protektif, dan berikan antibiotik spektrum luas' },
      { key: 'B', text: 'Anemia hemolitik autoimun; tingkatkan dosis metimazol' },
      { key: 'C', text: 'Trombositopenia esensial; berikan transfusi trombosit' },
      { key: 'D', text: 'Leukemia akut; rujuk untuk kemoterapi' },
      { key: 'E', text: 'Infeksi virus musiman; cukup berikan parasetamol oral' }
    ],
    correctAnswer: 'A',
    explanation: 'AGRANULOSITOSIS (ANC < 500 sel/uL) adalah efek samping langka namun sangat mematikan dari antitiroid tionamid (Metimazol dan PTU). Pasien biasanya datang dengan demam mendadak dan sakit tenggorokan hebat. Jika dicurigai agranulositosis, obat antitiroid HARUS SEGERA DIHENTIKAN PERMANEN, pasien dirawat, dan diberikan terapi suportif (G-CSF/antibiotik empiris). Pasien dilarang beralih ke tionamid lain.',
    clinicalReference: 'ATA Guidelines for the Management of Hyperthyroidism and Other Causes of Thyrotoxicosis',
    difficulty: 'Mudah'
  },
  {
    id: 'q-465',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang wanita 45 tahun mengalami Badai Tiroid (Thyroid Storm) dengan hipertermia 40°C, takikardia 160 bpm, agitasi delirium, dan ikterus (Skor Burch-Wartofsky 65). Regimen farmakoterapi multimodal segera disiapkan di ICU.',
    question: 'Apakah urutan pemberian farmakoterapi yang benar untuk memblokade sintesis dan pelepasan hormon tiroid pada thyroid storm?',
    options: [
      { key: 'A', text: 'Berikan Tionamid (PTU dosis tinggi) terlebih dahulu, dan beri jeda minimal 1 jam sebelum pemberian larutan Kalium Iodida (Lugol/SSKI)' },
      { key: 'B', text: 'Berikan larutan Kalium Iodida terlebih dahulu, baru 2 jam kemudian berikan PTU' },
      { key: 'C', text: 'Berikan Kalium Iodida saja tanpa tionamid' },
      { key: 'D', text: 'Hanya berikan Parasetamol dan Kompres dingin' },
      { key: 'E', text: 'Berikan terapi Levotiroksin IV' }
    ],
    correctAnswer: 'A',
    explanation: 'Pada Thyroid Storm, TIONAMID (PTU dosis loading 500-1000 mg) HARUS DIBERIKAN MINIMAL 1 JAM SEBELUM PEMBERIAN IODIDA ANORGANIK (Lugol / SSKI). Jika iodida diberikan lebih dulu atau bersamaan tanpa memblokir sintesis tiroid, kelebihan iodida tersebut justru akan menjadi substrat sintesis hormon tiroid baru (efek Jod-Basedow), memperparah badai tiroid.',
    clinicalReference: 'Japan Thyroid Association & Endocrine Society Guidelines for Thyroid Storm Management',
    difficulty: 'Sedang'
  },
  {
    id: 'q-466',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien lansia 72 tahun dengan riwayat ulkus peptikum dan osteoartritis lutut berat memerlukan terapi antiinflamasi nonsteroid. Dokter memilih Celecoxib (penghambat selektif COX-2) untuk mengurangi risiko ulkus lambung.',
    question: 'Peringatan kardiovaskular apakah yang harus dipertimbangkan apoteker sebelum memberikan celecoxib pada lansia dengan hipertensi?',
    options: [
      { key: 'A', text: 'Peningkatan risiko trombosis arteri miokard dan stroke iskemik akibat ketidakseimbangan sintesis tromboksan A2 trombosit vs prostasiklin vaskular' },
      { key: 'B', text: 'Hipotensi ortostatik parah' },
      { key: 'C', text: 'Peningkatan perdarahan spontan' },
      { key: 'D', text: 'Penyusutan massa otot jantung' },
      { key: 'E', text: 'Blok atrioventrikular total' }
    ],
    correctAnswer: 'A',
    explanation: 'Penghambat selektif COX-2 (seperti Celecoxib dan Etoricoxib) menghambat sintesis Prostasiklin (PGI2, vasodilator dan anti-agregasi trombosit yang dimediasi COX-2 pada endotel pembuluh darah), namun TIDAK menghambat Tromboksan A2 (TXA2, vasokonstriktor dan pro-trombosis yang dimediasi COX-1 pada trombosit). Ketidakseimbangan hemostasis ini meningkatkan risiko kejadian kardiovaskular mayor (infark miokard dan stroke).',
    clinicalReference: 'FDA Boxed Warning on NSAIDs and Cardiovascular Risk & AHA Scientific Statement',
    difficulty: 'Mudah'
  },
  {
    id: 'q-467',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien laki-laki 68 tahun dengan hipertensi, penyakit jantung koroner pasca-stent, dan penyakit ginjal kronik stadium 3 mengeluhkan nyeri pinggang akut. Pasien meminta obat pereda nyeri ke apotek.',
    question: 'Golongan analgesik manakah yang merupakan kontraindikasi relatif/mutlak karena risiko penurunan laju filtrasi glomerulus dan vasokonstriksi arteriol aferen ginjal?',
    options: [
      { key: 'A', text: 'Semua NSAID sistemik (Ketorolak, Diklofenak, Ibuprofen, Meloksikam)' },
      { key: 'B', text: 'Parasetamol oral' },
      { key: 'C', text: 'Tramadol dosis rendah' },
      { key: 'D', text: 'Lidokain koyo topikal' },
      { key: 'E', text: 'Glukosamin sulfat' }
    ],
    correctAnswer: 'A',
    explanation: 'Pada kondisi CKD dan gagal jantung, perfusi glomerulus sangat bergantung pada sintesis Prostaglandin renal yang memediasi vasodilatasi arteriol aferen. Semua golongan NSAID (non-selektif maupun COX-2 selektif) menghambat sintesis prostaglandin ginjal, memicu vasokonstriksi arteriol aferen berat yang berujung pada Acute Kidney Injury (AKI pre-renal) dan perburukan retensi cairan/hipertensi.',
    clinicalReference: 'KDIGO Clinical Practice Guideline for Acute Kidney Injury & JNC 8',
    difficulty: 'Mudah'
  },
  {
    id: 'q-468',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien laki-laki 38 tahun didiagnosis Skizofrenia episode akut dengan halusinasi dengar auditorik dan waham kejar agresif. Pasien diresepkan Haloperidol 5 mg 2 kali sehari. Pada hari ke-3, pasien mengalami leher terpuntir kaku ke samping (tortikolis), deviasi bola mata ke atas tanpa kendali (krisis okulogirik), dan kesulitan berbicara.',
    question: 'Reaksi efek samping ekstrapiramidal akut jenis apakah yang dialami pasien dan obat apakah penawarnya?',
    options: [
      { key: 'A', text: 'Distonia Akut; berikan antikolinergik sentral Difenhidramin 50 mg IV/IM atau Triheksifenidil' },
      { key: 'B', text: 'Akatisia; berikan Parasetamol' },
      { key: 'C', text: 'Diskinesia Tardif; berikan Haloperidol dosis dobel' },
      { key: 'D', text: 'Sindrom Neuroleptik Maligna; berikan Bromokriptin langsung' },
      { key: 'E', text: 'Parkinsonisme; berikan Levodopa oral' }
    ],
    correctAnswer: 'A',
    explanation: 'DISTONIA AKUT adalah kontraksi otot involunter yang kaku dan menyakitkan (tortikolis, krisis okulogirik, trismus) yang muncul dalam hitungan jam hingga beberapa hari pasca-inisiasi antipsikotik potensi tinggi akibat blokade reseptor dopamin D2 masif di jalur nigrostriatal. Terapi lini pertama gawat darurat adalah ANTIDOT ANTIKOLINERGIK SENTRAL seperti DIFENHIDRAMIN 50 mg IM/IV atau TRIHEKSIFENIDIL oral.',
    clinicalReference: 'APA Practice Guideline for the Treatment of Patients with Schizophrenia & PDSKJI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-469',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien skizofrenia yang telah menerima Haloperidol selama 2 minggu mengeluhkan rasa gelisah motorik ekstrem di kedua tungkai kaki, ketidakmampuan untuk duduk diam, dan dorongan tak tertahankan untuk terus mondar-mandir (Akatisia Motorik).',
    question: 'Farmakoterapi lini pertama yang paling efektif untuk meredakan gejala akatisia imbas antipsikotik adalah:',
    options: [
      { key: 'A', text: 'Beta-Blocker lipofilik (Propranolol 20 - 40 mg/hari)' },
      { key: 'B', text: 'Naikkan dosis Haloperidol' },
      { key: 'C', text: 'Karbamazepin' },
      { key: 'D', text: 'Metoklopramid' },
      { key: 'E', text: 'Klorpromazin' }
    ],
    correctAnswer: 'A',
    explanation: 'AKATISIA adalah efek samping motorik subjektif berupa rasa resah/gelisah motorik hebat. Pilihan farmakoterapi lini pertama baku untuk akatisia adalah BETA-BLOCKER LIPOFILIK yang menembus sawar darah otak seperti PROPRANOLOL (20-60 mg/hari) atau Benzodiazepin jangka pendek jika ada kecemasan berat.',
    clinicalReference: 'Maudsley Prescribing Guidelines in Psychiatry 14th Edition',
    difficulty: 'Sedang'
  },
  {
    id: 'q-470',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien di bangsal psikiatri yang sedang diterapi Flufenazin dekanoat mendadak mengalami demam sangat tinggi 40,2°C, rigiditas otot seperti pipa timah (lead-pipe rigidity), instabilitas otonom (tekanan darah fluktuatif ekstrem, diaforesis deras), delirium, dan kadar Creatine Kinase (CK) serum melonjak hingga 25.000 U/L.',
    question: 'Kegawatdaruratan psikiatri apakah yang sedang terjadi dan obat pelemas otot skeletal apakah yang bekerja menghambat pelepasan kalsium dari retikulum sarkoplasma untuk mengatasinya?',
    options: [
      { key: 'A', text: 'Sindrom Neuroleptik Maligna (NMS); berikan Dantrolen IV dan hentikan antipsikotik segera' },
      { key: 'B', text: 'Sindrom Serotonin; berikan Siproheptadin' },
      { key: 'C', text: 'Hipertermia Maligna anestesi; berikan Suksinilkolin' },
      { key: 'D', text: 'Toksisitas Litium; berikan Hemodialisis saja' },
      { key: 'E', text: 'Ensefalitis virus; berikan Asiklovir' }
    ],
    correctAnswer: 'A',
    explanation: 'Gejala demam ekstrem, kekakuan otot lead-pipe rigidity, lonjakan enzim CK akibat rhabdomyolysis, dan instabilitas otonom pasca-antipsikotik khas untuk SINDROM NEUROLEPTIK MALIGNA (Neuroleptic Malignant Syndrome / NMS). Tindakan darurat: 1) Hentikan segera semua antipsikotik, 2) Pendinginan aktif, 3) Berikan DANTROLEN intravena (relaksan otot skelet via ryanodine receptor) dan/atau agonis dopamin BROMOKRIPTIN.',
    clinicalReference: 'DSM-5-TR & Critical Care Management of Neuroleptic Malignant Syndrome',
    difficulty: 'Sedang'
  },
  {
    id: 'q-471',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien skizofrenia refrakter yang gagal merespon 3 jenis antipsikotik berbeda diputuskan untuk memulai Klosapin (Clozapine). Apoteker mengingatkan tim medis mengenai protokol pemantauan darah ketat.',
    question: 'Pemeriksaan hematologi apakah yang wajib dilakukan mingguan selama 6 bulan pertama penggunaan klosapin untuk mendeteksi risiko agranulositosis fatal?',
    options: [
      { key: 'A', text: 'Absolute Neutrophil Count (ANC) / Hitung Jenis Neutrofil Mutlak' },
      { key: 'B', text: 'Hitung Trombosit saja' },
      { key: 'C', text: 'Hematokrit dan Eritrosit' },
      { key: 'D', text: 'Kadar Asam Folat serum' },
      { key: 'E', text: 'Uji Laju Endap Darah (LED)' }
    ],
    correctAnswer: 'A',
    explanation: 'KLOSAPIN adalah antipsikotik atipikal paling efektif untuk skizofrenia refrakter dan pencegahan bunuh diri, namun membawa risiko agranulositosis fatal (sekitar 1-2% pasien). FDA Clozapine REMS dan pedoman internasional mewajibkan pemantauan ABSOLUTE NEUTROPHIL COUNT (ANC): inisiasi hanya jika ANC >= 1.500/uL, dipantau setiap minggu selama 6 bulan pertama, setiap 2 minggu pada bulan ke-6 hingga 12, dan setiap 4 minggu setelahnya.',
    clinicalReference: 'FDA Clozapine Risk Evaluation and Mitigation Strategy (REMS) & APA Guidelines',
    difficulty: 'Mudah'
  },
  {
    id: 'q-472',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien depresi yang sedang mengonsumsi Fluoksetin (SSRI) 40 mg/hari tidak sengaja mengonsumsi analgesik Tramadol 100 mg dan suplemen herbal St. John’s Wort. Dalam beberapa jam pasien dilarikan ke IGD dengan klonus spontan, hiperrefleksia tungkai bawah, pupil midriasis, tremor, diaforesis, dan hipertermia (Kriteria Hunter positif).',
    question: 'Antidot antagonis reseptor serotonin 5-HT2A manakah yang direkomendasikan untuk tatalaksana Sindrom Serotonin sedang hingga berat?',
    options: [
      { key: 'A', text: 'Siproheptadin oral' },
      { key: 'B', text: 'Dantrolen IV' },
      { key: 'C', text: 'Flumazenil IV' },
      { key: 'D', text: 'Nalokson IV' },
      { key: 'E', text: 'Atropin sulfat' }
    ],
    correctAnswer: 'A',
    explanation: 'Pasien mengalami SINDROM SEROTONIN (Serotonin Toxicity) akibat interaksi farmakodinamik sinergis antara SSRI, Tramadol (penghambat reuptake serotonin), dan St. John’s Wort. Selain penghentian obat pemicu dan sedasi dengan benzodiazepin, antidot spesifik antagonis reseptor serotonin 5-HT2A adalah SIPROHEPTADIN (Cyproheptadine oral).',
    clinicalReference: 'The New England Journal of Medicine: The Serotonin Syndrome Review & Hunter Criteria',
    difficulty: 'Sedang'
  },
  {
    id: 'q-473',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien penderita Gangguan Bipolar yang mengonsumsi Litium Karbonat 400 mg 2 kali sehari mengalami gastroenteritis akut dehidrasi dan mengonsumsi Ibuprofen untuk meredakan pusing. Pasien dibawa ke IGD dengan ataksia kasar, nistagmus, disartria, dan kadar Litium serum terukur 2,8 mEq/L (toksisitas litium berat).',
    question: 'Tindakan eliminasi aktif apakah yang paling efektif untuk membuang kelebihan litium dalam darah pada toksisitas berat dengan gangguan neurologis?',
    options: [
      { key: 'A', text: 'Hemodialisis darurat (Cito)' },
      { key: 'B', text: 'Pemberian Karbon Aktif oral' },
      { key: 'C', text: 'Alkalinisasi urin dengan natrium bikarbonat saja' },
      { key: 'D', text: 'Diuresis paksa dengan Furosemid dosis tinggi' },
      { key: 'E', text: 'Pemberian resin penukar kation' }
    ],
    correctAnswer: 'A',
    explanation: 'LITIUM adalah kation monovalen kecil dengan volume distribusi kecil, ikatan protein plasma nol, dan diekskresikan 100% oleh ginjal. Karena tidak terikat protein dan molekulnya kecil, Litium SANGAT MUDAH DIBUANG DENGAN HEMODIALISIS. Pada kadar litium > 2,5 mEq/L dengan gejala neurologis atau > 4,0 mEq/L terlepas dari gejala, HEMODIALISIS adalah terapi baku emas penyelamat nyawa.',
    clinicalReference: 'Extracorporeal Treatments in Poisoning (EXTRIP) Workgroup Guidelines for Lithium Toxicity',
    difficulty: 'Sedang'
  }
];
