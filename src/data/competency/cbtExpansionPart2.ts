import { ExamQuestion } from '../competencyExamData';

/**
 * Bank Soal Latihan CBT Tambahan Bagian 2 (40 Soal Baru: q-132 s.d. q-171)
 * Modul Pusat Belajar Uji Kompetensi Farmasi (UKMPPAI & UKTVF)
 * Disusun berdasarkan blueprint 4 Domain Nasional dengan Vignette Klinis/Industri Realistis
 */
export const CBT_EXPANSION_PART_2: ExamQuestion[] = [
  // =========================================================================
  // DOMAIN 1: FARMASI KLINIS & FARMAKOTERAPI (20 SOAL: q-132 s.d. q-151)
  // =========================================================================
  {
    id: 'q-132',
    domainId: 'klinis',
    vignette: 'Seorang wanita 28 tahun dibawa ke IGD setelah tersengat lebah. Pasien tampak sangat gelisah, sesak nafas berat, stridor, bengkak pada bibir dan kelopak mata, serta timbul urtikaria luas di seluruh tubuh. Tekanan darah 75/45 mmHg, denyut nadi 130 kali/menit, frekuensi napas 32 kali/menit, dan SpO2 88%. Dokter mendiagnosis syok anafilaksis.',
    question: 'Tindakan farmakoterapi lini pertama gawat darurat yang PALING TEPAT dan SEGERA diberikan adalah?',
    options: [
      { key: 'A', text: 'Difenhidramin 50 mg intravena bolus lambat' },
      { key: 'B', text: 'Deksametason 10 mg intravena' },
      { key: 'C', text: 'Epinefrin 1:1.000 dosis 0,3-0,5 mg intramuskular di paha anterolateral' },
      { key: 'D', text: 'Epinefrin 1:10.000 dosis 1 mg intravena bolus cepat' },
      { key: 'E', text: 'Nebulisasi Salbutamol 5 mg + Ipratropium 0,5 mg' }
    ],
    correctAnswer: 'C',
    explanation: 'Lini pertama mutlak untuk syok anafilaksis adalah Epinefrin (Adrenalin) larutan 1:1.000 (1 mg/mL) dengan dosis 0,3 - 0,5 mg secara INTRAMUSKULAR (IM) di paha anterolateral (vastus lateralis). Rute IM menghasilkan absorbsi dan konsentrasi puncak plasma jauh lebih cepat dibanding subkutan. Antihistamin dan kortikosteroid hanya berperan sebagai terapi lini kedua untuk mencegah reaksi bifasik lanjutan dan bekerja terlalu lambat untuk mengatasi kolaps kardiovaskular akut.',
    clinicalReference: 'World Allergy Organization (WAO) Anaphylaxis Guidelines & Resuscitation Council UK',
    difficulty: 'Sedang'
  },
  {
    id: 'q-133',
    domainId: 'klinis',
    vignette: 'Seorang pasien laki-laki 54 tahun dengan sirosis hepatis stadium lanjut dibawa keluarganya ke rumah sakit karena mengalami penurunan kesadaran, disorientasi waktu dan tempat, serta menunjukkan gerakan flapping tremor (asteriksis) pada kedua tangannya. Hasil lab menunjukkan kadar amonia serum 165 mcg/dL (normal: 15-45 mcg/dL). Pasien didiagnosis Ensefalopati Hepatik.',
    question: 'Obat lini pertama manakah yang bekerja menurunkan kadar amonia melalui mekanisme penjebakan ion (ammonia trapping) di lumen kolon?',
    options: [
      { key: 'A', text: 'Furosemid' },
      { key: 'B', text: 'Laktulosa' },
      { key: 'C', text: 'Spironolakton' },
      { key: 'D', text: 'Propranolol' },
      { key: 'E', text: 'Asam Ursodeoksikolat' }
    ],
    correctAnswer: 'B',
    explanation: 'Laktulosa sirup adalah lini pertama ensefalopati hepatik. Di kolon, laktulosa difermentasi oleh flora normal usus menjadi asam laktat dan asam asetat sehingga menurunkan pH lumen usus (< 5,0). Suasana asam ini mengubah amonia yang mudah diserap (NH3) menjadi ion amonium bermuatan (NH4+) yang tidak dapat menembus sawar mukosa usus (ammonia trapping), lalu dikeluarkan bersama feses dengan target BAB lembek 2-3 kali per hari.',
    clinicalReference: 'AASLD Practice Guideline: Hepatic Encephalopathy in Chronic Liver Disease',
    difficulty: 'Sedang'
  },
  {
    id: 'q-134',
    domainId: 'klinis',
    vignette: 'Seorang pasien wanita berusia 30 tahun yang sedang hamil trimester kedua (usia kehamilan 18 minggu) datang ke puskesmas dengan keluhan nyeri saat buang air kecil (disuria), anyang-anyangan, dan frekuensi berkemih meningkat. Tidak ada demam maupun nyeri ketok pinggang. Urinalisis: Leukosit esterase positif dan bakteriuria bermakna (> 10^5 CFU/mL). Kultur urin menunjukkan Escherichia coli.',
    question: 'Antibiotik manakah yang PALING AMAN dan TEPAT diresepkan untuk pasien tersebut?',
    options: [
      { key: 'A', text: 'Siprofloksasin' },
      { key: 'B', text: 'Doksisiklin' },
      { key: 'C', text: 'Kotrimoksazol' },
      { key: 'D', text: 'Sefaleksin' },
      { key: 'E', text: 'Gentamisin' }
    ],
    correctAnswer: 'D',
    explanation: 'Pada ibu hamil, ISK (termasuk bakteriuria asimtomatik) wajib diobati tuntas karena berisiko tinggi memicu pielonefritis dan kelahiran prematur. Sefaleksin (atau Amoksisilin-Klavulanat dan Fosfomisin) tergolong Kategori Kehamilan B dan aman. Siprofloksasin (Fluorokuinolon) kontraindikasi karena merusak kartilago artikular janin; Doksisiklin (Tetrasiklin) kontraindikasi karena memicu pewarnaan gigi permanen dan displasia tulang; Kotrimoksazol kontraindikasi pada trimester 1 (antagonis folat) dan trimester 3 (memicu kernikterus).',
    clinicalReference: 'ACOG Practice Bulletin: Urinary Tract Infections in Pregnancy',
    difficulty: 'Sedang'
  },
  {
    id: 'q-135',
    domainId: 'klinis',
    vignette: 'Seorang pasien pria 65 tahun penderita Fibrilasi Atrium Non-Valvular rutin meminum Rivaroxaban 20 mg sekali sehari. Pasien mengalami kecelakaan lalu lintas dan mengalami perdarahan intraserebral akut masif yang mengancam nyawa. Dokter bedah saraf meminta apoteker menyiapkan zat pembalik (reversal agent/antidotum) spesifik untuk menetralkan efek antikoagulan Rivaroxaban segera sebelum operasi kraniotomi darurat.',
    question: 'Antidotum spesifik manakah yang bekerja sebagai umpan protein rekombinan (decoy receptor) terhadap inhibitor Faktor Xa tersebut?',
    options: [
      { key: 'A', text: 'Protamin Sulfat' },
      { key: 'B', text: 'Idarucizumab' },
      { key: 'C', text: 'Fitomenadion (Vitamin K1)' },
      { key: 'D', text: 'Andexanet Alfa' },
      { key: 'E', text: 'Asam Traneksamat' }
    ],
    correctAnswer: 'D',
    explanation: 'Andexanet alfa adalah molekul rekombinan Faktor Xa inaktif termodifikasi yang bertindak sebagai "decoy receptor" untuk mengikat dan menetralkan obat penghambat Faktor Xa langsung (Rivaroxaban dan Apixaban). Idarucizumab adalah antidotum spesifik khusus untuk Dabigatran (penghambat trombin); Protamin sulfat khusus untuk Heparin; Vitamin K1 khusus untuk Warfarin.',
    clinicalReference: 'AHA/ACC Guideline for the Management of Patients With Atrial Fibrillation & US FDA Prescribing Information',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-136',
    domainId: 'klinis',
    vignette: 'Seorang wanita 26 tahun terdiagnosis Grave\'s disease dan saat ini sedang hamil usia 8 minggu (trimester pertama). Dokter berdiskusi dengan apoteker mengenai pemilihan obat antitiroid yang paling aman untuk ibu dan janin pada fase awal kehamilan ini.',
    question: 'Obat antitiroid pilihan pertama manakah yang direkomendasikan khusus pada trimester pertama kehamilan?',
    options: [
      { key: 'A', text: 'Metimazol' },
      { key: 'B', text: 'Propiltiourasil (PTU)' },
      { key: 'C', text: 'Larutan Lugol' },
      { key: 'D', text: 'Radioaktif Iodium-131' },
      { key: 'E', text: 'Karbimazol' }
    ],
    correctAnswer: 'B',
    explanation: 'Propiltiourasil (PTU) adalah obat antitiroid pilihan utama pada trimester pertama kehamilan karena memiliki ikatan protein plasma yang lebih kuat sehingga transfer melewati plasenta lebih sedikit dibanding Metimazol. Metimazol pada trimester pertama berhubungan dengan kelainan kongenital embriopati (aplasia cutis kongenita dan atresia esofagus/koana). Pada trimester kedua dan ketiga, pasien disarankan beralih ke Metimazol untuk menghindari risiko hepatotoksisitas berat PTU pada ibu.',
    clinicalReference: 'American Thyroid Association (ATA) Guidelines on Thyroid Disorders During Pregnancy',
    difficulty: 'Sedang'
  },
  {
    id: 'q-137',
    domainId: 'klinis',
    vignette: 'Seorang pasien kanker paru 55 tahun dijadwalkan menjalani siklus kemoterapi dengan regimen berbasis Cisplatin dosis tinggi (75 mg/m2). Cisplatin diketahui memiliki potensi emetogenik sangat tinggi (High Emetogenic Chemotherapy / HEC > 90%). Apoteker merancang protokol antiemetik preventif sebelum kemoterapi dimulai.',
    question: 'Kombinasi baku emas tiga obat (triple therapy) manakah yang wajib diberikan sebagai profilaksis CINV pada pasien tersebut?',
    options: [
      { key: 'A', text: 'Metoklopramid + Domperidon + Deksametason' },
      { key: 'B', text: 'Ondansetron + Aprepitant + Deksametason' },
      { key: 'C', text: 'Difenhidramin + Dimenhidrinat + Lorazepam' },
      { key: 'D', text: 'Ondansetron + Metoklopramid + Haloperidol' },
      { key: 'E', text: 'Aprepitant + Deksametason + Klorpromazin' }
    ],
    correctAnswer: 'B',
    explanation: 'Panduan internasional ASCO dan NCCN merekomendasikan profilaksis antiemetik tripel kombinasi untuk kemoterapi emetogenik sangat tinggi (HEC): (1) Antagonis reseptor NK1 (Aprepitant atau Fosaprepitant), (2) Antagonis reseptor 5-HT3 (Ondansetron, Granisetron, atau Palonosetron), dan (3) Kortikosteroid (Deksametason). Kombinasi ini memberikan blokade sinergis terhadap jalur emetogenik perifer di saluran cerna dan sentral di CTZ batang otak.',
    clinicalReference: 'ASCO Antiemetics: American Society of Clinical Oncology Clinical Practice Guideline Update',
    difficulty: 'Sedang'
  },
  {
    id: 'q-138',
    domainId: 'klinis',
    vignette: 'Seorang pasien kanker payudara menerima infus Doksorubisin melalui vena perifer di lengan bawah. Setelah 15 menit, pasien mengeluh sensasi terbakar hebat dan bengkak kemerahan di sekitar lokasi insersi kateter. Perawat menghentikan infus dan memastikan terjadi ekstravasasi sitostatika golongan antrasiklin.',
    question: 'Tindakan penanganan non-farmakologis dan antidotum farmakologis spesifik manakah yang paling tepat untuk ekstravasasi Doksorubisin tersebut?',
    options: [
      { key: 'A', text: 'Kompres hangat kering + Injeksi Hialuronidase subkutan' },
      { key: 'B', text: 'Kompres dingin kering (es) + Infus Dexrazoxane' },
      { key: 'C', text: 'Kompres hangat basah + Injeksi Natrium Tiosulfat' },
      { key: 'D', text: 'Kompres dingin basah + Injeksi Mesna subkutan' },
      { key: 'E', text: 'Pemasangan torniket ketat di proksimal lengan' }
    ],
    correctAnswer: 'B',
    explanation: 'Doksorubisin (antrasiklin) adalah vesikan kuat yang mengikat DNA jaringan dan memicu nekrosis ulseratif progresif. Ekstravasasi antrasiklin memerlukan KOMPRES DINGIN KERING (es selama 15-20 menit 4x/hari untuk melokalisir obat) dan pemberian antidotum spesifik DEXRAZOXANE IV (Totect/Savene) dalam waktu < 6 jam pasca kejadian. Sebaliknya, kompres hangat + Hialuronidase digunakan khusus untuk ekstravasasi Vinka Alkaloid (Vinkristin).',
    clinicalReference: 'ESMO-EONS Clinical Practice Guidelines: Management of Chemotherapy Extravasation',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-139',
    domainId: 'klinis',
    vignette: 'Seorang pemuda 22 tahun dilarikan ke IGD dengan keluhan leher terpuntir kaku ke arah kanan (tortikolis spastik), lidah menjulur kaku keluar mulut, dan kedua bola mata melirik ke atas tidak bisa diturunkan (krisis okulogirik). Pasien sebelumnya diketahui meminum Haloperidol 5 mg dan Metoklopramid 10 mg 4 jam yang lalu. Dokter mendiagnosis Distonia Akut.',
    question: 'Obat darurat manakah yang bekerja cepat meredakan spasme distonia akut tersebut?',
    options: [
      { key: 'A', text: 'Difenhidramin 50 mg intravena/intramuskular' },
      { key: 'B', text: 'Levodopa 100 mg per oral' },
      { key: 'C', text: 'Propranolol 40 mg per oral' },
      { key: 'D', text: 'Nalokson 0,4 mg intravena' },
      { key: 'E', text: 'Flumazenil 0,5 mg intravena' }
    ],
    correctAnswer: 'A',
    explanation: 'Distonia akut adalah bentuk sindrom ekstrapiramidal (EPS) onset cepat akibat blokade reseptor dopamin D2 sentral oleh Haloperidol dan Metoklopramid, yang menyebabkan dominasi kolinergik akut di ganglia basalis. Terapi pembalik darurat pilihan utama adalah agen antikolinergik kerja cepat, yaitu DIFENHIDRAMIN 50 mg IV/IM atau Benztropin 1-2 mg IV/IM, yang akan merelaksasi spasme distonik otot dalam hitungan menit.',
    clinicalReference: 'Maudsley Prescribing Guidelines in Psychiatry & APA Practice Guideline for Schizophrenia',
    difficulty: 'Sedang'
  },
  {
    id: 'q-140',
    domainId: 'klinis',
    vignette: 'Seorang pasien anak laki-laki 8 tahun penderita Leukemia Limfoblastik Akut (ALL) baru saja memulai fase induksi kemoterapi. Hasil pemeriksaan darah 24 jam kemudian menunjukkan: Kalium 6,4 mEq/L, Asam Urat 10,8 mg/dL, Fosfat 5,8 mg/dL, dan Kalsium 6,5 mg/dL. Dokter mendiagnosis Sindrom Lisis Tumor (TLS).',
    question: 'Obat manakah yang bekerja secara enzimatik memecah asam urat yang sudah beredar di plasma menjadi senyawa alantoin yang sangat mudah larut air?',
    options: [
      { key: 'A', text: 'Allopurinol' },
      { key: 'B', text: 'Febuxostat' },
      { key: 'C', text: 'Probenesid' },
      { key: 'D', text: 'Rasburicase' },
      { key: 'E', text: 'Kolkisin' }
    ],
    correctAnswer: 'D',
    explanation: 'Rasburicase adalah enzim rekombinan urat oksidase (urate oxidase) yang mengkatalisis konversi enzimatik asam urat menjadi ALANTOIN. Alantoin bersifat 5-10 kali lebih larut air daripada asam urat sehingga mudah diekskresikan lewat urin tanpa memicu nefropati kristal. Allopurinol hanya menghambat enzim xantin oksidase (mencegah pembentukan asam urat baru), tetapi tidak dapat mengeliminasi asam urat yang sudah terbentuk masif.',
    clinicalReference: 'British Committee for Standards in Haematology (BCSH) Guidelines on Tumor Lysis Syndrome',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-141',
    domainId: 'klinis',
    vignette: 'Seorang pasien wanita 72 tahun penderita osteoporosis berat datang ke apotek untuk menebus resep Alendronat tablet 70 mg (diminum sekali seminggu). Apoteker memberikan konseling cara minum obat untuk mencegah komplikasi ulserasi esofagus berat.',
    question: 'Instruksi penggunaan yang PALING TEPAT disampaikan kepada pasien tersebut adalah?',
    options: [
      { key: 'A', text: 'Diminum malam hari sebelum tidur bersama segelas susu' },
      { key: 'B', text: 'Diminum pagi hari saat perut kosong dengan segelas penuh air putih, dan wajib tetap dalam posisi tegak (duduk/berdiri) minimal 30 menit' },
      { key: 'C', text: 'Dikunyah halus bersama makanan berlemak untuk meningkatkan bioavailabilitas' },
      { key: 'D', text: 'Diminum bersamaan dengan suplemen Kalsium dan Vitamin D3 di pagi hari' },
      { key: 'E', text: 'Dilarutkan dalam jus jeruk untuk meningkatkan kelarutan asam' }
    ],
    correctAnswer: 'B',
    explanation: 'Bisfosfonat oral (Alendronat) memiliki bioavailabilitas sangat rendah (< 1%) dan berisiko tinggi memicu esofagitis ulseratif parah jika menempel di mukosa esofagus. Pasien wajib meminumnya di pagi hari segera setelah bangun tidur dengan segelas penuh air putih murni (minimal 200 mL), tidak boleh makan/minum apapun selama minimal 30 menit, dan WAJIB TETAP TEGAK (tidak boleh berbaring) selama minimal 30 menit agar gravitasi meluncurkan tablet ke lambung.',
    clinicalReference: 'AACE/ACE Clinical Practice Guidelines for the Diagnosis and Treatment of Postmenopausal Osteoporosis',
    difficulty: 'Mudah'
  },
  {
    id: 'q-142',
    domainId: 'klinis',
    vignette: 'Seorang pasien pria 60 tahun dengan riwayat sirosis hepatis dan asites masif diresepkan kombinasi diuretik oral Furosemid dan Spironolakton. Apoteker memeriksa kesesuaian dosis berdasarkan rasio baku yang direkomendasikan panduan klinis hepatologi.',
    question: 'Berapakah rasio perbandingan dosis baku Spironolakton terhadap Furosemid untuk menjaga normokalemia pada pasien asites sirosis?',
    options: [
      { key: 'A', text: '20 mg Spironolakton : 40 mg Furosemid' },
      { key: 'B', text: '50 mg Spironolakton : 50 mg Furosemid' },
      { key: 'C', text: '100 mg Spironolakton : 40 mg Furosemid' },
      { key: 'D', text: '200 mg Spironolakton : 20 mg Furosemid' },
      { key: 'E', text: '40 mg Spironolakton : 100 mg Furosemid' }
    ],
    correctAnswer: 'C',
    explanation: 'Rasio baku lini pertama diuretik untuk asites akibat sirosis hepatis adalah SPIRONOLAKTON 100 mg berbanding FUROSEMID 40 mg (rasio 100:40). Rasio ini dipilih karena Spironolakton (antagonis aldosteron hemat kalium) mengatasi hiperaldosteronisme sekunder pemicu utama asites, sementara Furosemid (diuretik loop boros kalium) mempercepat natriuresis. Rasio 100:40 mempertahankan homeostasis kalium darah tetap stabil (mencegah hipo maupun hiperkalemia).',
    clinicalReference: 'AASLD Guidelines on the Management of Adult Patients with Ascites Due to Cirrhosis',
    difficulty: 'Sedang'
  },
  {
    id: 'q-143',
    domainId: 'klinis',
    vignette: 'Seorang pasien perempuan 35 tahun datang ke klinik dengan keluhan demam, menggigil hebat, mual, dan nyeri ketok pinggang kanan (CVA tenderness positif). Urinalisis menunjukkan piuria masif dan leukosit silinder (white blood cell casts). Pasien didiagnosis Pielonefritis Akut tanpa komplikasi dan tidak memerlukan rawat inap.',
    question: 'Antibiotik oral lini pertama manakah yang direkomendasikan panduan IDSA untuk tata laksana rawat jalan pasien tersebut?',
    options: [
      { key: 'A', text: 'Nitrofurantoin 100 mg 2x/hari' },
      { key: 'B', text: 'Siprofloksasin 500 mg 2x/hari selama 7 hari' },
      { key: 'C', text: 'Amoksisilin 500 mg 3x/hari' },
      { key: 'D', text: 'Fosfomisin trometamol 3 g dosis tunggal' },
      { key: 'E', text: 'Eritromisin 500 mg 4x/hari' }
    ],
    correctAnswer: 'B',
    explanation: 'Fluorokuinolon oral (Siprofloksasin 500 mg 2x/hari selama 7 hari atau Levofloksasin 750 mg 1x/hari selama 5 hari) adalah lini pertama untuk Pielonefritis Akut tanpa komplikasi pada pasien rawat jalan non-hamil (dengan syarat laju resistensi lokal < 10%). Nitrofurantoin dan Fosfomisin KONTRAINDIKASI untuk pielonefritis karena kadar jaringan di parenkim ginjal tidak adekuat (hanya terkonsentrasi di kandung kemih).',
    clinicalReference: 'IDSA International Clinical Practice Guidelines for the Treatment of Acute Pyelonephritis',
    difficulty: 'Sedang'
  },
  {
    id: 'q-144',
    domainId: 'klinis',
    vignette: 'Seorang pasien pria 67 tahun dengan gagal jantung kronis fraksi ejeksi rendah (HFrEF) rutin mengonsumsi Digoksin 0,25 mg dan Furosemid 40 mg 1x/hari. Pasien mengeluh mual, muntah, penglihatan tampak kekuningan/kehijauan (halo vision), dan denyut nadi teraba sangat lambat (bradikardia 44 bpm). EKG menunjukkan aritmia ventrikel. Hasil lab menunjukkan Kalium serum 2,7 mEq/L (hipokalemia).',
    question: 'Faktor pemicu utama manakah yang menyebabkan intoksikasi fatal glikosida jantung Digoksin pada pasien tersebut?',
    options: [
      { key: 'A', text: 'Hiponatremia akibat retensi cairan' },
      { key: 'B', text: 'Hipokalemia akibat penggunaan Furosemid yang meningkatkan ikatan Digoksin pada pompa Na+/K+-ATPase miokard' },
      { key: 'C', text: 'Hiperkalsemia akibat gangguan penyerapan lambung' },
      { key: 'D', text: 'Asidosis metabolik' },
      { key: 'E', text: 'Peningkatan klirens ginjal terhadap digoksin' }
    ],
    correctAnswer: 'B',
    explanation: 'Digoksin dan ion Kalium berkompetisi menduduki sisi ikatan yang sama pada enzim Na+/K+-ATPase miokard. Furosemid (diuretik loop boros kalium) memicu hipokalemia (< 3,5 mEq/L). Pada kondisi hipokalemia, tidak ada ion kalium yang menyaingi digoksin, sehingga ikatan digoksin pada pompa Na+/K+-ATPase meningkat drastis memicu intoksikasi digoksin berat (aritmia fatal, penglihatan halo xanthopsia). Antidotum spesifik intoksikasi digoksin berat adalah Digoxin Immune Fab (DigiFab).',
    clinicalReference: 'Goodman & Gilman\'s: The Pharmacological Basis of Therapeutics & AHA Heart Failure Scientific Statement',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-145',
    domainId: 'klinis',
    vignette: 'Seorang pasien wanita 48 tahun dengan Ca Mammae stadium lanjut mengalami komplikasi Hiperkalsemia Malignansi dengan kadar kalsium serum terkoreksi 14,2 mg/dL. Pasien tampak letargi dan mengalami dehidrasi berat. Dokter meminta apoteker menyiapkan regimen hidrasi cairan dan terapi spesifik penurun kalsium dengan durasi kerja panjang.',
    question: 'Obat golongan bisfosfonat intravena poten manakah yang menjadi baku emas lini pertama penanganan hiperkalsemia malignansi?',
    options: [
      { key: 'A', text: 'Asam Zoledronat 4 mg IV infus' },
      { key: 'B', text: 'Alendronat 70 mg per oral' },
      { key: 'C', text: 'Kalsitonin oral 200 IU' },
      { key: 'D', text: 'Kalsitriol 0,5 mcg IV' },
      { key: 'E', text: 'Kalsium Karbonat 500 mg IV' }
    ],
    correctAnswer: 'A',
    explanation: 'Asam Zoledronat (Zometa) 4 mg diberikan secara infus intravena selama minimal 15 menit bersamaan dengan rehidrasi NaCl 0,9% masif merupakan lini pertama hiperkalsemia malignansi. Zoledronat menghambat resorpsi tulang oleh osteoklas secara poten, menormalkan kadar kalsium serum dalam 2-4 hari dengan durasi proteksi bertahan hingga 3-4 minggu.',
    clinicalReference: 'Endocrine Society Clinical Practice Guideline: Treatment of Hypercalcemia of Malignancy',
    difficulty: 'Sedang'
  },
  {
    id: 'q-146',
    domainId: 'klinis',
    vignette: 'Seorang pasien pria 50 tahun penderita HIV/AIDS dengan CD4 45 sel/mcL mengalami pneumonia berat akibat infeksi oportunistik Pneumocystis jirovecii (PJP). Analisis gas darah menunjukkan hipoksemia berat dengan tekanan parsial oksigen arteri (PaO2) 62 mmHg pada udara ruangan.',
    question: 'Selain antibiotik Kotrimoksazol (TMP-SMX) intravena dosis tinggi, terapi ajuvan manakah yang terbukti menurunkan mortalitas jika diberikan dalam 72 jam pertama pada PJP derajat sedang-berat?',
    options: [
      { key: 'A', text: 'Kortikosteroid sistemik (Prednison / Metilprednisolon)' },
      { key: 'B', text: 'Gansiklovir IV' },
      { key: 'C', text: 'Flukonazol IV' },
      { key: 'D', text: 'Inhalasi Pentamidin' },
      { key: 'E', text: 'Oksigen hiperbarik' }
    ],
    correctAnswer: 'A',
    explanation: 'Pada pneumonia Pneumocystis jirovecii (PJP) derajat sedang hingga berat (didefinisikan dengan PaO2 < 70 mmHg atau gradien alveolar-arterial A-a DO2 >= 35 mmHg), penambahan KORTIKOSTEROID SISTEMIK (Prednison oral atau Metilprednisolon IV) sebelum atau bersamaan dengan Kotrimoksazol dosis tinggi terbukti secara signifikan menurunkan mortalitas dan gagal napas. Kortikosteroid meredam inflamasi paru hebat yang dipicu oleh lisisnya organisme jamur setelah terpapar antibiotik.',
    clinicalReference: 'NIH/CDC/IDSA Guidelines for the Prevention and Treatment of Opportunistic Infections in Adults with HIV',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-147',
    domainId: 'klinis',
    vignette: 'Seorang pasien wanita 29 tahun dengan riwayat asma persisten sedang datang ke apotek untuk berkonsultasi mengenai rencana kehamilannya. Pasien khawatir obat asma yang dikonsumsinya dapat membahayakan janin.',
    question: 'Rekomendasi farmakoterapi asma manakah yang paling tepat dan memiliki profil keamanan paling luas terdokumentasi pada kehamilan?',
    options: [
      { key: 'A', text: 'Menghentikan seluruh inhaler steroid dan hanya menggunakan obat minum herbal' },
      { key: 'B', text: 'Melanjutkan inhalasi Budesonid (Kategori Kehamilan B) dan Salbutamol PRN karena hipoksia akibat asma tidak terkontrol jauh lebih berbahaya bagi janin' },
      { key: 'C', text: 'Mengganti dengan Teofilin oral dosis tinggi' },
      { key: 'D', text: 'Mengganti dengan Kortikosteroid oral Deksametason harian' },
      { key: 'E', text: 'Menggunakan SABA monoterapi dosis maksimal tanpa kortikosteroid' }
    ],
    correctAnswer: 'B',
    explanation: 'Panduan GINA dan ACOG menegaskan bahwa pengendalian asma yang buruk dengan risiko hipoksia janin jauh lebih berbahaya daripada potensi efek samping obat asma inhalasi. Budesonid adalah kortikosteroid inhalasi pilihan utama pada kehamilan (Kategori B FDA) dengan data keamanan paling luas. Salbutamol inhaler aman digunakan sebagai pereda darurat.',
    clinicalReference: 'Global Initiative for Asthma (GINA 2024) Management in Pregnancy & ACOG Guidelines',
    difficulty: 'Mudah'
  },
  {
    id: 'q-148',
    domainId: 'klinis',
    vignette: 'Seorang pria 55 tahun penderita tuberkulosis paru (TB) sedang menjalani pengobatan kategori 1 fase intensif (2RHZE). Pasien datang ke klinik mengeluhkan nyeri sendi hebat, bengkak, dan kemerahan pada ibu jari kaki kanan (podagra). Hasil laboratorium menunjukkan asam urat serum melonjak menjadi 11,2 mg/dL.',
    question: 'Obat antituberkulosis (OAT) manakah yang menjadi penyebab utama efek samping hiperurisemia dan serangan gout akut tersebut?',
    options: [
      { key: 'A', text: 'Rifampisin' },
      { key: 'B', text: 'Isoniazid' },
      { key: 'C', text: 'Pirazinamid' },
      { key: 'D', text: 'Etambutol' },
      { key: 'E', text: 'Streptomisin' }
    ],
    correctAnswer: 'C',
    explanation: 'Pirazinamid (PZA) dimetabolisme menjadi asam pirazinoat yang secara kompetitif menghambat sekresi asam urat di tubulus ginjal, sehingga menyebabkan retensi asam urat dan hiperurisemia pada sebagian besar pasien. Jika terjadi artritis gout akut simptomatik, Pirazinamid dapat diterapi dengan analgesik/anti-inflamasi (NSAID atau Kolkisin/Allopurinol) tanpa harus menghentikan OAT kecuali nyeri tidak terkontrol.',
    clinicalReference: 'WHO Guidelines for the Treatment of Drug-Susceptible Tuberculosis & PNPK TB Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-149',
    domainId: 'klinis',
    vignette: 'Seorang anak laki-laki berusia 5 tahun (BB 18 kg) dibawa ke puskesmas karena demam tinggi 39,2°C akibat tonsilofaringitis akut. Dokter meresepkan Parasetamol sirup (120 mg/5 mL) dengan dosis standar 15 mg/kgBB per kali pemberian, diminum tiap 6 jam bila demam.',
    question: 'Berapakah volume sirup Parasetamol (dalam mL) yang harus diminum anak tersebut untuk satu kali pemberian?',
    options: [
      { key: 'A', text: '5,0 mL' },
      { key: 'B', text: '7,5 mL' },
      { key: 'C', text: '10,0 mL' },
      { key: 'D', text: '11,25 mL' },
      { key: 'E', text: '12,5 mL' }
    ],
    correctAnswer: 'D',
    explanation: 'Perhitungan dosis anak: Dosis sekali minum = 18 kg × 15 mg/kgBB = 270 mg. Sediaan sirup Parasetamol memiliki konsentrasi 120 mg per 5 mL (24 mg/mL). Volume yang dibutuhkan = 270 mg / 24 mg/mL = 11,25 mL per kali minum (atau [270 mg / 120 mg] × 5 mL = 11,25 mL).',
    clinicalReference: 'BNF for Children (BNFC) & Standar Dosis Pediatri IDAI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-150',
    domainId: 'klinis',
    vignette: 'Seorang pasien wanita 52 tahun dengan ulkus peptikum kronis dinyatakan positif terinfeksi bakteri Helicobacter pylori melalui uji Urea Breath Test (UBT). Pasien tidak memiliki riwayat alergi obat apapun.',
    question: 'Regimen terapi tripel baku lini pertama (Triple Therapy) manakah yang direkomendasikan selama 14 hari penuh untuk eradikasi H. pylori?',
    options: [
      { key: 'A', text: 'Omeprazole + Amoksisilin + Klaritromisin' },
      { key: 'B', text: 'Lansoprazole + Siprofloksasin + Metronidazol' },
      { key: 'C', text: 'Ranitidin + Tetrasiklin + Kotrimoksazol' },
      { key: 'D', text: 'Antasida + Sukralfat + Bismut Subsalisilat' },
      { key: 'E', text: 'Pantoprazole + Doksisiklin + Seftriakson' }
    ],
    correctAnswer: 'A',
    explanation: 'Regimen standar tripel lini pertama eradikasi H. pylori (jika resistensi klaritromisin lokal < 15%) terdiri dari: (1) PPI dosis ganda (misal Omeprazole 20 mg bid atau Lansoprazole 30 mg bid), (2) Amoksisilin 1.000 mg bid, dan (3) Klaritromisin 500 mg bid, diberikan selama 14 HARI PENUH. Jika pasien alergi penisilin, amoksisilin digantikan dengan Metronidazol 500 mg bid.',
    clinicalReference: 'ACG Clinical Guideline: Treatment of Helicobacter pylori Infection & Konsensus Nasional PGI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-151',
    domainId: 'klinis',
    vignette: 'Seorang pria 70 tahun penderita Benign Prostatic Hyperplasia (BPH) dengan keluhan sulit buang air kecil (retensi urin) dan nokturia. Dokter meresepkan Tamsulosin 0,4 mg sekali sehari.',
    question: 'Bagaimanakah mekanisme kerja farmakologi Tamsulosin dalam meredakan obstruksi aliran urin pada pasien BPH?',
    options: [
      { key: 'A', text: 'Menghambat enzim 5-alfa reduktase sehingga mengecilkan volume jaringan stroma prostat' },
      { key: 'B', text: 'Antagonis selektif reseptor alfa-1A adrenergik yang merelaksasi otot polos leher kandung kemih dan stroma prostat' },
      { key: 'C', text: 'Agonis reseptor muskarinik M3 di otot detrusor kandung kemih' },
      { key: 'D', text: 'Inhibitor enzim fosfodiesterase-5 (PDE-5) di uretra' },
      { key: 'E', text: 'Antagonis hormon androgen di reseptor testosteron' }
    ],
    correctAnswer: 'B',
    explanation: 'Tamsulosin adalah antagonis reseptor alfa-1 adrenergik yang sangat selektif pada subtipe ALFA-1A yang dominan ditemukan di leher kandung kemih (bladder neck) dan stroma kelenjar prostat. Hambatan pada reseptor ini merelaksasi tonus otot polos uretra prostatika, menurunkan resistensi aliran urin, dan meningkatkan laju pancaran urin (Qmax) tanpa memicu efek samping hipotensi ortostatik berat sebesar alfa-bloker non-selektif (Doxazosin/Terazosin).',
    clinicalReference: 'AUA Guideline on the Management of Benign Prostatic Hyperplasia',
    difficulty: 'Sedang'
  },

  // =========================================================================
  // DOMAIN 2: MANAJEMEN FARMASI, FARMAKOEKONOMI & REGULASI (10 SOAL: q-152 s.d. q-161)
  // =========================================================================
  {
    id: 'q-152',
    domainId: 'manajemen',
    vignette: 'Apoteker di instalasi farmasi rumah sakit sedang menyiapkan obat sitostatika Paclitaxel dan Cisplatin untuk kemoterapi pasien kanker serviks. Rekonstitusi wajib dilakukan di dalam ruang bersih bertekanan negatif dan kabinet khusus untuk menjamin perlindungan personel, produk, dan lingkungan.',
    question: 'Tipe Biological Safety Cabinet (BSC) manakah yang paling tepat digunakan karena membuang 100% udara ke luar gedung tanpa resirkulasi?',
    options: [
      { key: 'A', text: 'Laminar Air Flow (LAF) Horizontal' },
      { key: 'B', text: 'Laminar Air Flow (LAF) Vertikal' },
      { key: 'C', text: 'BSC Kelas I' },
      { key: 'D', text: 'BSC Kelas II Tipe A2' },
      { key: 'E', text: 'BSC Kelas II Tipe B2' }
    ],
    correctAnswer: 'E',
    explanation: 'Biological Safety Cabinet (BSC) KELAS II TIPE B2 adalah standar baku untuk pencampuran obat berbahaya dan sitostatika yang menghasilkan uap atau aerosol kimia toksik, karena 100% ALIRAN UDARA DIBUANG TOTAL KE LUAR GEDUNG (total exhaust) melalui cerobong khusus dengan filter HEPA tanpa ada udara yang diresirkulasi kembali ke dalam kabinet. LAF horizontal dilarang keras karena meniupkan udara langsung ke arah operator.',
    clinicalReference: 'Pedoman Penanganan Sediaan Sitostatika Kemenkes RI & USP Chapter <800> Hazardous Drugs',
    difficulty: 'Sedang'
  },
  {
    id: 'q-153',
    domainId: 'manajemen',
    vignette: 'Petugas puskesmas memeriksa botol vaksin DPT-HB-Hib di dalam lemari es penyimpanan. Pada botol vaksin terdapat indikator Vaccine Vial Monitor (VVM). Terlihat bahwa warna persegi/kotak di dalam lingkaran telah berubah menjadi berwarna SAMA GELAPNYA dengan lingkaran luar.',
    question: 'Berdasarkan interpretasi kondisi VVM tersebut, keputusan apakah yang harus diambil oleh apoteker pengelola vaksin?',
    options: [
      { key: 'A', text: 'Vaksin masih dalam kondisi A, dapat digunakan segera' },
      { key: 'B', text: 'Vaksin dalam kondisi B, gunakan lebih dulu (EEFO)' },
      { key: 'C', text: 'Vaksin berada pada kondisi C, sudah mencapai batas diskard dan TIDAK BOLEH DIGUNAKAN' },
      { key: 'D', text: 'Vaksin wajib dilakukan uji kocok (shake test) terlebih dahulu' },
      { key: 'E', text: 'Vaksin disimpan kembali ke dalam freezer suhu -20°C' }
    ],
    correctAnswer: 'C',
    explanation: 'Pada indikator VVM: Kondisi A (kotak lebih terang/putih dari lingkaran) = gunakan; Kondisi B (kotak mulai gelap tapi masih lebih terang dari lingkaran) = gunakan lebih dulu; Kondisi C (KOTAK BERWARNA SAMA GELAP DENGAN LINGKARAN) = TITIK BATAS DISKARD (JANGAN GUNAKAN); Kondisi D (kotak lebih gelap dari lingkaran) = MUTLAK TIDAK BOLEH DIGUNAKAN. Kondisi C menandakan vaksin telah terpapar akumulasi panas yang merusak potensi antigeniknya.',
    clinicalReference: 'Petunjuk Teknis Pengelolaan Rantai Dingin Vaksin Kemenkes RI & WHO Guidelines',
    difficulty: 'Mudah'
  },
  {
    id: 'q-154',
    domainId: 'manajemen',
    vignette: 'Tim Komite Farmasi dan Terapi (KFT) rumah sakit melakukan evaluasi penggunaan antibiotik Seftriakson injeksi (vial 1 gram) di ruang rawat inap bedah selama periode 1 bulan (30 hari). Total Seftriakson yang digunakan adalah 600 vial (600 gram). Jumlah hari rawat seluruh pasien di ruang tersebut adalah 1.000 hari rawat. Standar Defined Daily Dose (DDD) WHO untuk Seftriakson adalah 2 gram.',
    question: 'Berapakah nilai DDD Seftriakson per 100 hari rawat pasien (DDD / 100 patient-days) di ruangan tersebut?',
    options: [
      { key: 'A', text: '15 DDD / 100 patient-days' },
      { key: 'B', text: '30 DDD / 100 patient-days' },
      { key: 'C', text: '45 DDD / 100 patient-days' },
      { key: 'D', text: '60 DDD / 100 patient-days' },
      { key: 'E', text: '300 DDD / 100 patient-days' }
    ],
    correctAnswer: 'B',
    explanation: 'Perhitungan DDD: (1) Total gram Seftriakson = 600 gram. (2) Total unit DDD = 600 gram / 2 gram (standar WHO) = 300 DDD. (3) DDD per 100 patient-days = (Total DDD / Total Hari Rawat) × 100 = (300 / 1.000) × 100 = 30 DDD / 100 patient-days.',
    clinicalReference: 'WHO Collaborating Centre for Drug Statistics Methodology & Pedoman PPRA Kemenkes RI',
    difficulty: 'Sedang'
  },
  {
    id: 'q-155',
    domainId: 'manajemen',
    vignette: 'Apoteker pengelola apotek sedang menghitung titik impas atau Break-Even Point (BEP) operasional apotek untuk tahun berjalan. Data keuangan menunjukkan: Total Biaya Tetap (Fixed Cost) = Rp 120.000.000 per tahun. Biaya Variabel adalah 70% dari total penjualan (Variable Cost Ratio = 0,70).',
    question: 'Berapakah nilai omzet penjualan minimal (dalam Rupiah) yang harus dicapai apotek tersebut agar mencapai titik impas (BEP)?',
    options: [
      { key: 'A', text: 'Rp 171.428.000' },
      { key: 'B', text: 'Rp 240.000.000' },
      { key: 'C', text: 'Rp 360.000.000' },
      { key: 'D', text: 'Rp 400.000.000' },
      { key: 'E', text: 'Rp 600.000.000' }
    ],
    correctAnswer: 'D',
    explanation: 'Rumus BEP Rupiah = Biaya Tetap / [1 - (Biaya Variabel / Total Penjualan)] = Biaya Tetap / [1 - Variable Cost Ratio] = Rp 120.000.000 / (1 - 0,70) = Rp 120.000.000 / 0,30 = Rp 400.000.000 per tahun.',
    clinicalReference: 'Modul Manajemen Farmasi Bisnis IAI & Standar Akuntansi Keuangan Apotek',
    difficulty: 'Sedang'
  },
  {
    id: 'q-156',
    domainId: 'manajemen',
    vignette: 'Seorang dokter spesialis bedah ortopedi meresepkan Fentanil Injeksi 50 mcg/mL sebanyak 5 ampul dan Morfin tablet 10 mg sebanyak 10 tablet untuk pasien pasca-operasi rekonstruksi fraktur. Apoteker menyiapkan Surat Pesanan (SP) untuk memesan obat tersebut ke distributor resmi.',
    question: 'Distributor PBF tunggal BUMN manakah yang berwenang menyalurkan obat golongan Narkotika di Indonesia dan berapakah jumlah maksimal jenis obat narkotika per lembar Surat Pesanan?',
    options: [
      { key: 'A', text: 'PT. Enseval Putera Megatrading dan maksimal 3 jenis obat' },
      { key: 'B', text: 'PT. Kimia Farma Trading & Distribution dan maksimal 1 jenis obat' },
      { key: 'C', text: 'PT. Kimia Farma Trading & Distribution dan maksimal 3 jenis obat' },
      { key: 'D', text: 'Seluruh PBF berizin PBF Cabang dan maksimal 1 jenis obat' },
      { key: 'E', text: 'PT. Rajawali Nusindo dan maksimal 2 jenis obat' }
    ],
    correctAnswer: 'B',
    explanation: 'Sesuai UU Narkotika No. 35 Tahun 2009 dan Permenkes No. 3 Tahun 2015, peredaran dan penyaluran bahan baku dan sediaan jadi NARKOTIKA di Indonesia dimonopoli oleh PBF milik BUMN yaitu PT. Kimia Farma Trading & Distribution (KFTD). Surat Pesanan (SP) Narkotika dibuat khusus terpisah rangkap 4, dan SATU LEMBAR SP HANYA BOLEH MEMUAT 1 (SATU) JENIS OBAT NARKOTIKA.',
    clinicalReference: 'Permenkes RI No. 3 Tahun 2015 tentang Peredaran, Penyimpanan, Pemusnahan, dan Pelaporan Narkotika, Psikotropika, dan Prekursor Farmasi',
    difficulty: 'Mudah'
  },
  {
    id: 'q-157',
    domainId: 'manajemen',
    vignette: 'Apoteker di rumah sakit melakukan evaluasi persediaan obat dengan metode analisis ABC (Pareto) berdasarkan nilai investasi penyerapan anggaran tahunan. Data menunjukkan bahwa kelompok obat tertentu menyerap 70-80% dari total anggaran pengadaan obat rumah sakit, meskipun jumlah jenis obatnya hanya berkisar 10-20% dari total item.',
    question: 'Kelompok obat dalam analisis Pareto tersebut diklasifikasikan ke dalam kategori?',
    options: [
      { key: 'A', text: 'Kelompok A' },
      { key: 'B', text: 'Kelompok B' },
      { key: 'C', text: 'Kelompok C' },
      { key: 'D', text: 'Kelompok V (Vital)' },
      { key: 'E', text: 'Kelompok E (Esensial)' }
    ],
    correctAnswer: 'A',
    explanation: 'Dalam analisis ABC (Pareto): Kelompok A menyerap 70 - 80% total anggaran belanja dengan jumlah item hanya 10 - 20% (pengendalian sangat ketat, negosiasi harga agresif); Kelompok B menyerap 15 - 20% anggaran dengan jumlah item 20 - 30%; Kelompok C menyerap 5 - 10% anggaran dengan jumlah item terbanyak (50 - 70%). Kategori Vital dan Esensial merupakan klasifikasi VEN berdasarkan dampak klinis kritis obat.',
    clinicalReference: 'Pedoman Pengelolaan Perbekalan Farmasi di RS Kemenkes RI & Manajemen Logistik Farmasi',
    difficulty: 'Mudah'
  },
  {
    id: 'q-158',
    domainId: 'manajemen',
    vignette: 'Sebuah apotek memiliki rata-rata penjualan tablet Amlodipin 10 mg sebanyak 30 strip per hari. Waktu tunggu pengiriman dari PBF (Lead Time) adalah 3 hari kerja. Apoteker menetapkan jumlah persediaan pengaman (Safety Stock) sebanyak 60 strip untuk mengantisipasi keterlambatan kirim.',
    question: 'Berapakah batas titik pemesanan kembali (Reorder Point / ROP) untuk Amlodipin 10 mg tersebut?',
    options: [
      { key: 'A', text: '90 strip' },
      { key: 'B', text: '120 strip' },
      { key: 'C', text: '150 strip' },
      { key: 'D', text: '180 strip' },
      { key: 'E', text: '210 strip' }
    ],
    correctAnswer: 'C',
    explanation: 'Rumus Reorder Point (ROP) = (Lead Time × Rata-rata Pemakaian Harian) + Safety Stock. ROP = (3 hari × 30 strip/hari) + 60 strip = 90 strip + 60 strip = 150 strip. Saat sisa persediaan di rak mencapai 150 strip, apoteker harus segera menerbitkan surat pesanan baru ke PBF.',
    clinicalReference: 'Quick: Managing Drug Supply, Management Sciences for Health (MSH)',
    difficulty: 'Mudah'
  },
  {
    id: 'q-159',
    domainId: 'manajemen',
    vignette: 'Apoteker penanggung jawab apotek mendapati adanya 5 botol sirup parasetamol dan 2 strip antibiotik amoksisilin yang telah melewati tanggal kadaluarsa (expired) serta rusak fisiknya. Apoteker bermaksud melakukan pemusnahan obat-obat non-narkotika tersebut sesuai regulasi Permenkes.',
    question: 'Pihak manakah yang wajib dihadirkan sebagai saksi resmi dalam pembuatan Berita Acara Pemusnahan obat non-narkotika/psikotropika di apotek?',
    options: [
      { key: 'A', text: 'Pejabat Balai POM dan Kepolisian Republik Indonesia' },
      { key: 'B', text: 'Petugas Dinas Kesehatan Kabupaten/Kota dan/atau Balai Besar/Balai POM setempat' },
      { key: 'C', text: 'Hanya dihadiri oleh pemilik sarana apotek (PSA)' },
      { key: 'D', text: 'Kementerian Kesehatan RI' },
      { key: 'E', text: 'Pengurus Cabang Ikatan Apoteker Indonesia (PC IAI) saja' }
    ],
    correctAnswer: 'B',
    explanation: 'Sesuai Permenkes No. 73 Tahun 2016 tentang Standar Pelayanan Kefarmasian di Apotek (Pasal 8), pemusnahan obat selain narkotika dan psikotropika dilakukan oleh Apoteker dan disaksikan oleh tenaga kefarmasian lain dan/atau petugas dari DINAS KESEHATAN KABUPATEN/KOTA dan/atau BALAI BESAR/BALAI POM setempat, dibuktikan dengan Berita Acara Pemusnahan.',
    clinicalReference: 'Permenkes RI No. 73 Tahun 2016 tentang Standar Pelayanan Kefarmasian di Apotek',
    difficulty: 'Sedang'
  },
  {
    id: 'q-160',
    domainId: 'manajemen',
    vignette: 'Dalam studi Farmakoekonomi untuk pemilihan obat antidiabetes lini kedua antara Regimen A dan Regimen B: Regimen A membutuhkan biaya total Rp 6.000.000 dengan efikasi penurunan HbA1c sebesar 1,2%. Regimen B membutuhkan biaya total Rp 9.000.000 dengan efikasi penurunan HbA1c sebesar 1,8%.',
    question: 'Berapakah nilai Incremental Cost-Effectiveness Ratio (ICER) untuk peralihan dari Regimen A ke Regimen B?',
    options: [
      { key: 'A', text: 'Rp 2.500.000 per 1% penurunan HbA1c' },
      { key: 'B', text: 'Rp 3.000.000 per 1% penurunan HbA1c' },
      { key: 'C', text: 'Rp 5.000.000 per 1% penurunan HbA1c' },
      { key: 'D', text: 'Rp 6.000.000 per 1% penurunan HbA1c' },
      { key: 'E', text: 'Rp 15.000.000 per 1% penurunan HbA1c' }
    ],
    correctAnswer: 'C',
    explanation: 'Rumus ICER = (Biaya B - Biaya A) / (Efek B - Efek A) = (Rp 9.000.000 - Rp 6.000.000) / (1,8% - 1,2%) = Rp 3.000.000 / 0,6% = Rp 5.000.000 per 1% penurunan HbA1c tambahan.',
    clinicalReference: 'Pedoman Penerapan Kajian Farmakoekonomi Kemenkes RI & Drummond: Methods for the Economic Evaluation of Health Care Programmes',
    difficulty: 'Sedang'
  },
  {
    id: 'q-161',
    domainId: 'manajemen',
    vignette: 'Apoteker di apotek menerima resep dokter yang mengandung obat Pseudoefedrin HCl 30 mg dalam bentuk tablet campuran dengan Triprolidin. Apoteker menyadari bahwa Pseudoefedrin termasuk dalam kategori golongan obat dengan pengawasan khusus penyalahgunaan.',
    question: 'Berdasarkan regulasi perundang-undangan farmasi di Indonesia, Pseudoefedrin digolongkan ke dalam kelompok?',
    options: [
      { key: 'A', text: 'Narkotika Golongan III' },
      { key: 'B', text: 'Psikotropika Golongan IV' },
      { key: 'C', text: 'Prekursor Farmasi' },
      { key: 'D', text: 'Obat-Obat Tertentu (OOT)' },
      { key: 'E', text: 'Obat Keras Terbatas W' }
    ],
    correctAnswer: 'C',
    explanation: 'Pseudoefedrin, Efedrin, Norefedrin/Fenilpropanolamin, dan Ergotamin digolongkan sebagai PREKURSOR FARMASI (zat kimia awal pembuat narkotika ilegal methamphetamine/shabu) sesuai PP No. 44 Tahun 2010. Sedangkan Tramadol, Triheksifenidil, Klorpromazin, Haloperidol, Amitriptilin, dan Dekstrometorfan digolongkan sebagai Obat-Obat Tertentu (OOT) sesuai Peraturan BPOM No. 10 Tahun 2019.',
    clinicalReference: 'Peraturan Pemerintah RI No. 44 Tahun 2010 tentang Prekursor & Peraturan BPOM No. 10 Tahun 2019 tentang Kriteria OOT',
    difficulty: 'Mudah'
  },

  // =========================================================================
  // DOMAIN 3: TEKNOLOGI FARMASI & CPOB (5 SOAL: q-162 s.d. q-166)
  // =========================================================================
  {
    id: 'q-162',
    domainId: 'teknologi',
    vignette: 'Bagian RnD industri farmasi sedang melakukan Uji Disolusi Terbanding (UDT) terhadap tablet copy Furosemid 40 mg generik berbanding dengan tablet Furosemid inovator (Lasix) pada media dapar fosfat pH 6,8. Hasil perhitungan perbandingan kurva profil disolusi menunjukkan nilai similarity factor f2 sebesar 64,5 dan difference factor f1 sebesar 6,2.',
    question: 'Berdasarkan kriteria pedoman bioekivalensi BPOM, bagaimanakah kesimpulan ekivalensi in vitro profil disolusi kedua produk tersebut?',
    options: [
      { key: 'A', text: 'Profil disolusi tidak ekivalen karena f2 harus tepat bernilai 100' },
      { key: 'B', text: 'Profil disolusi ekivalen (mirip) karena f2 berada pada rentang 50-100 dan f1 berada pada rentang 0-15' },
      { key: 'C', text: 'Profil disolusi tidak ekivalen karena f1 melebihi angka 5' },
      { key: 'D', text: 'Uji harus diulang menggunakan 24 tablet tambahan' },
      { key: 'E', text: 'Produk dinyatakan bioekivalen in vivo langsung tanpa uji klinik' }
    ],
    correctAnswer: 'B',
    explanation: 'Kriteria keberterimaan Uji Disolusi Terbanding (UDT) BPOM: Nilai Faktor Kemiripan (similarity factor f2) dinyatakan ekivalen / mirip jika berada pada rentang 50 HINGGA 100 (50 <= f2 <= 100). Nilai f2 = 64,5 memenuhi syarat ini. Sementara nilai Faktor Perbedaan (difference factor f1) dinyatakan dapat diterima jika bernilai 0 HINGGA 15 (0 <= f1 <= 15). Maka kedua sediaan disimpulkan memiliki profil pelepasan obat ekivalen secara in vitro.',
    clinicalReference: 'Peraturan BPOM RI No. 24 Tahun 2022 tentang Pedoman Uji Bioekivalensi & WHO TRS 992',
    difficulty: 'Sedang'
  },
  {
    id: 'q-163',
    domainId: 'teknologi',
    vignette: 'Departemen Pemastian Mutu (QA) industri farmasi sedang melakukan validasi pembersihan mesin cetak tablet rotary yang digunakan bersama untuk mencetak Parasetamol 500 mg (Produk A) dan Amlodipin 10 mg (Produk B). Apoteker menghitung batas residu maksimum Parasetamol yang boleh tertinggal (MACO) pada bets Amlodipin berikutnya.',
    question: 'Kriteria batas residu maksimum berdasarkan dosis terapeutik menetapkan bahwa residu produk sebelumnya tidak boleh melebihi fraksi berapa dari dosis harian minimalnya di dalam dosis harian produk berikutnya?',
    options: [
      { key: 'A', text: '1/10 dosis' },
      { key: 'B', text: '1/100 dosis' },
      { key: 'C', text: '1/1.000 dosis' },
      { key: 'D', text: '1/10.000 dosis' },
      { key: 'E', text: '1/100.000 dosis' }
    ],
    correctAnswer: 'C',
    explanation: 'Sesuai pedoman CPOB dan PIC/S mengenai Validasi Pembersihan, batas kontaminasi silang residu obat aktif (MACO) berdasarkan kriteria dosis terapeutik menetapkan bahwa tidak lebih dari 1/1.000 (0,001) dari dosis harian terapeutik minimal produk sebelumnya (Produk A) yang boleh terbawa ke dalam dosis harian maksimal produk berikutnya (Produk B).',
    clinicalReference: 'CPOB 2018 Aneks 8 Validasi Pembersihan & PIC/S PI 006-3',
    difficulty: 'Sedang'
  },
  {
    id: 'q-164',
    domainId: 'teknologi',
    vignette: 'Dalam proses pencetakan tablet Ibuprofen 400 mg pada mesin cetak rotary berkecepatan tinggi, operator produksi melaporkan bahwa bagian mahkota atas tablet terbelah dan terlepas secara horizontal dari badan utama tablet segera setelah keluar dari ruang die cetakan.',
    question: 'Kerusakan fisik tablet akibat terjebaknya udara (air entrapment) saat kompresi massa granul tersebut dinamakan?',
    options: [
      { key: 'A', text: 'Sticking' },
      { key: 'B', text: 'Picking' },
      { key: 'C', text: 'Capping' },
      { key: 'D', text: 'Mottling' },
      { key: 'E', text: 'Bridging' }
    ],
    correctAnswer: 'C',
    explanation: 'Capping adalah pemisahan atau pelepasan sebagian atau seluruh mahkota atas (top crown) atau bawah tablet dari badan tablet. Penyebab utamanya adalah terperangkapnya udara (air entrapment) di dalam massa serbuk/granul saat punch menekan ke dalam die, fine/serbuk halus terlalu banyak, atau elastisitas granul terlalu tinggi. Lamination adalah pemisahan tablet menjadi beberapa lapisan horizontal berlapis.',
    clinicalReference: 'Lachman: The Theory and Practice of Industrial Pharmacy & Farmakope Indonesia VI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-165',
    domainId: 'teknologi',
    vignette: 'Industri farmasi memproduksi infus Ringer Laktat 500 mL dalam botol kaca. Sediaan ini memiliki karakteristik zat aktif anorganik yang stabil terhadap suhu tinggi dan kelembapan.',
    question: 'Metode sterilisasi akhir (terminal sterilization) baku manakah yang wajib dipilih sesuai prinsip prioritas CPOB?',
    options: [
      { key: 'A', text: 'Filtrasi membran steril 0,22 mikron secara aseptis' },
      { key: 'B', text: 'Panas basah menggunakan Autoklaf suhu 121°C selama 15 menit' },
      { key: 'C', text: 'Panas kering menggunakan Oven suhu 160°C selama 2 jam' },
      { key: 'D', text: 'Radiasi sinar Gamma dosis 25 kGy' },
      { key: 'E', text: 'Gas Etilen Oksida' }
    ],
    correctAnswer: 'B',
    explanation: 'Sesuai CPOB dan Farmakope, sterilisasi panas basah menggunakan uap bertekanan (Autoklaf 121°C selama 15 menit atau F0 >= 8 menit) adalah METODE PILIHAN UTAMA (Gold Standard Terminal Sterilization) untuk produk parenteral cair berbasis air yang stabil terhadap panas. Filtrasi membran aseptis hanya digunakan jika zat aktif tidak tahan panas (termolabil).',
    clinicalReference: 'CPOB 2018 Aneks 1 Pembuatan Produk Steril & Farmakope Indonesia Edisi VI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-166',
    domainId: 'teknologi',
    vignette: 'Dalam pengujian pirogen dan endotoksin bakteri pada sediaan injeksi Seftriakson, analis laboratorium mikrobiologi menggunakan pereaksi Limulus Amebocyte Lysate (LAL). Setelah inkubasi tabung pada suhu 37°C selama 60 menit, tabung dibalik perlahan 180 derajat dan diamati terbentuknya gel padat kokoh yang tidak jatuh.',
    question: 'Metode pengujian endotoksin LAL manakah yang ditunjukkan oleh prinsip pembentukan gel padat tersebut?',
    options: [
      { key: 'A', text: 'Metode Turbidimetri' },
      { key: 'B', text: 'Metode Kromogenik Kolorimetri' },
      { key: 'C', text: 'Metode Jendal Gel (Gel-Clot Method)' },
      { key: 'D', text: 'Uji Pirogen Kelinci In Vivo' },
      { key: 'E', text: 'Metode Spektrofotometri UV' }
    ],
    correctAnswer: 'C',
    explanation: 'Metode Jendal Gel (Gel-Clot Method) adalah metode baku pembanding resmi dalam Farmakope untuk uji endotoksin bakteri. Reaksi koagulasi antara endotoksin lipopolisakarida dengan lisat amebosit Limulus polyphemus membentuk jendal gel stabil yang mempertahankan bentuknya saat tabung reaksi dibalik 180 derajat.',
    clinicalReference: 'Farmakope Indonesia Edisi VI Lampiran <51> Uji Endotoksin Bakteri',
    difficulty: 'Mudah'
  },

  // =========================================================================
  // DOMAIN 4: FARMASI BAHAN ALAM & FITOFARMAKA (5 SOAL: q-167 s.d. q-171)
  // =========================================================================
  {
    id: 'q-167',
    domainId: 'bahan_alam',
    vignette: 'Seorang mahasiswa farmasi melakukan skrining fitokimia pada ekstrak daun jambu biji (Psidium guajava). Ke dalam tabung reaksi berisi ekstrak ditambahkan serbuk pita logam Magnesium (Mg) dan beberapa tetes Asam Klorida (HCl) pekat. Beberapa detik kemudian terbentuk larutan berwarna merah jingga menyala.',
    question: 'Reaksi Shinoda (Wilstatter) tersebut membuktikan keberadaan golongan senyawa metabolit sekunder apakah?',
    options: [
      { key: 'A', text: 'Alkaloid' },
      { key: 'B', text: 'Saponin' },
      { key: 'C', text: 'Flavonoid' },
      { key: 'D', text: 'Tanin' },
      { key: 'E', text: 'Steroid' }
    ],
    correctAnswer: 'C',
    explanation: 'Uji Shinoda (Wilstatter test) adalah reaksi khas untuk identifikasi golongan FLAVONOID. Penambahan pita logam Magnesium (Mg) dan HCl pekat mereduksi inti benzopiron flavonol/flavanon menjadi ion garam flavilium (garam antosianidin) yang memancarkan warna khas merah, merah jingga, atau merah magenta.',
    clinicalReference: 'Farmakope Herbal Indonesia (FHI) Edisi II & Harborne: Phytochemical Methods',
    difficulty: 'Mudah'
  },
  {
    id: 'q-168',
    domainId: 'bahan_alam',
    vignette: 'Analis QC industri obat tradisional melakukan pemisahan senyawa marker ekstrak temulawak menggunakan Kromatografi Lapis Tipis (KLT) fase normal dengan lempeng Silika Gel 60 F254 dan eluen Kloroform : Metanol (95:5). Jarak rambat garis depan pelarut (solvent front) dari garis batas awal adalah 8,0 cm. Bercak senyawa kurkuminoid terdeteksi merambat sejauh 4,8 cm.',
    question: 'Berapakah nilai Retardation Factor (Rf) bercak senyawa kurkuminoid tersebut?',
    options: [
      { key: 'A', text: '0,40' },
      { key: 'B', text: '0,50' },
      { key: 'C', text: '0,60' },
      { key: 'D', text: '0,75' },
      { key: 'E', text: '1,67' }
    ],
    correctAnswer: 'C',
    explanation: 'Rumus Retardation Factor (Rf) = Jarak rambat noda zat aktif / Jarak rambat garis depan pelarut = 4,8 cm / 8,0 cm = 0,60. Nilai Rf tidak memiliki satuan dan selalu berkisar antara 0,00 hingga 1,00.',
    clinicalReference: 'Farmakope Herbal Indonesia (FHI) Edisi II Monografi Ekstrak Temulawak',
    difficulty: 'Mudah'
  },
  {
    id: 'q-169',
    domainId: 'bahan_alam',
    vignette: 'Laboratorium toksikologi menguji keamanan ekstrak etanol daun sirih merah secara in vivo pada 3 kelompok mencit betina menggunakan metode OECD 423. Pemberian dosis tunggal oral tertinggi 5.000 mg/kgBB (uji batas / limit test) tidak menunjukkan adanya kematian hewan coba maupun tanda klinis toksik hingga hari ke-14.',
    question: 'Berdasarkan klasifikasi Globally Harmonized System (GHS) dan pedoman BPOM, ekstrak tersebut dikategorikan sebagai?',
    options: [
      { key: 'A', text: 'Kategori 1 (Sangat Toksik Fatal)' },
      { key: 'B', text: 'Kategori 2 (Toksik Tinggi)' },
      { key: 'C', text: 'Kategori 3 (Toksik Sedang)' },
      { key: 'D', text: 'Kategori 4 (Berbahaya Ringan)' },
      { key: 'E', text: 'Kategori 5 / Tidak Toksik (Praktis Tidak Beracun, LD50 > 5.000 mg/kgBB)' }
    ],
    correctAnswer: 'E',
    explanation: 'Sesuai pedoman OECD 423 dan Peraturan BPOM No. 10 Tahun 2022 tentang Uji Toksisitas Nonklinik, jika sediaan pada dosis uji batas (limit dose) 5.000 mg/kgBB (5 g/kgBB) tidak menimbulkan kematian pada hewan uji, maka nilai LD50 semu sediaan dinyatakan > 5.000 mg/kgBB dan diklasifikasikan ke dalam Kategori 5 (Praktis Tidak Beracun / Unclassified Non-toxic).',
    clinicalReference: 'Peraturan BPOM RI No. 10 Tahun 2022 & OECD Guideline 423 for Testing of Chemicals',
    difficulty: 'Sedang'
  },
  {
    id: 'q-170',
    domainId: 'bahan_alam',
    vignette: 'Seorang pasien pria 50 tahun pasca-transplantasi ginjal rutin meminum imunosupresan Siklosporin untuk mencegah rejeksi organ. Pasien mengeluh suasana hati sering murung dan berinisiatif membeli sendiri suplemen herbal St. John\'s Wort (Hypericum perforatum) di toko herbal. Satu bulan kemudian, kadar plasma Siklosporin turun drastis di bawah target terapeutik dan timbul tanda penolakan akut ginjal cangkok.',
    question: 'Mekanisme interaksi farmakokinetik apakah yang mendasari penurunan drastis kadar Siklosporin akibat suplemen herbal St. John\'s Wort tersebut?',
    options: [
      { key: 'A', text: 'Inhibisi enzim CYP3A4 dan penurunan klirens hepar' },
      { key: 'B', text: 'Induksi kuat enzim sitokrom P450 CYP3A4 dan transporter efluks P-Glikoprotein (P-gp)' },
      { key: 'C', text: 'Pengikatan khelat di lumen lambung yang menghalangi absorpsi' },
      { key: 'D', text: 'Kompetisi ekskresi tubulus ginjal' },
      { key: 'E', text: 'Penurunan motilitas usus halus' }
    ],
    correctAnswer: 'B',
    explanation: 'St. John\'s Wort (Hypericum perforatum) mengandung senyawa hiperforin yang merupakan INDUKTOR KUAT reseptor nuklir PXR, memicu upregulasi ekspresi enzim metabolisme CYP3A4 di hepar/usus dan transporter efluks P-glikoprotein (P-gp). Akibatnya, metabolisme lintas pertama dan pembuangan Siklosporin melonjak drastis, menyebabkan kadar obat dalam darah anjlok hingga memicu rejeksi organ transplantasi.',
    clinicalReference: 'Stockley\'s Drug Interactions & US FDA Public Health Advisory on St. John\'s Wort',
    difficulty: 'Sedang'
  },
  {
    id: 'q-171',
    domainId: 'bahan_alam',
    vignette: 'Seorang pria 68 tahun yang rutin mengonsumsi obat antiplatelet Aspirin 80 mg pasca stroke iskemik mengonsumsi suplemen ekstrak Ginkgo biloba dosis tinggi selama 3 minggu untuk memperbaiki daya ingat. Pasien datang ke IGD dengan hematuria masif (kencing darah) dan epistaksis (mimisan) yang sulit berhenti.',
    question: 'Kandungan zat aktif manakah dalam Ginkgo biloba yang bekerja menghambat Platelet-Activating Factor (PAF) sehingga meningkatkan risiko perdarahan bila dikombinasikan dengan Aspirin?',
    options: [
      { key: 'A', text: 'Kurkuminoid' },
      { key: 'B', text: 'Ginkgolida B' },
      { key: 'C', text: 'Andrografolid' },
      { key: 'D', text: 'Kuersetin' },
      { key: 'E', text: 'Asiatikosida' }
    ],
    correctAnswer: 'B',
    explanation: 'Ginkgo biloba mengandung senyawa terpenoid lakton spesifik yaitu GINKGOLIDA B yang merupakan antagonis poten reseptor Platelet-Activating Factor (PAF). Ketika digabungkan dengan Aspirin (inhibitor sintesis tromboksan A2 via COX-1), terjadi sinergi penghambatan agregasi trombosit ganda yang melipatgandakan risiko perdarahan spontan mayor.',
    clinicalReference: 'Natural Medicines Comprehensive Database & WHO Monographs on Selected Medicinal Plants',
    difficulty: 'Sedang'
  }
];
