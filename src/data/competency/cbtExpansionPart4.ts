import { ExamQuestion } from '../competencyExamData';

/**
 * Bank Soal Kasus Vignette CBT Bagian 4 (Nomor q-222 s/d q-265)
 * Rekonstruksi Soal Ujian (FR / Field Report) UKMPPAI (Apoteker) & UKTVK (Vokasi TTK)
 * 44 Soal Kasus Nyata Baru Tanpa Duplikasi:
 * - 16 Soal Kasus Farmasi Klinis & Farmakoterapi Lanjutan
 * - 10 Soal Kasus Manajemen Farmasi, Regulasi & Farmakoekonomi
 * - 10 Soal Kasus Teknologi Farmasi, CPOB & Formulasi Industri
 * - 8 Soal Kasus Farmasi Bahan Alam, Fitofarmaka & Standardisasi Mutu
 */
export const CBT_EXPANSION_PART_4: ExamQuestion[] = [
  // =========================================================================
  // 🩺 DOMAIN 1: FARMASI KLINIS & FARMAKOTERAPI (16 SOAL KASUS FR REKONSTRUKSI)
  // =========================================================================
  {
    id: 'q-222',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien laki-laki berusia 58 tahun dilarikan ke IGD dengan keluhan sakit kepala berdenyut hebat, pandangan kabur, dan gelisah. Pemeriksaan fisik menunjukkan Tekanan Darah 220/130 mmHg, laju napas 24 x/menit, dan terdapat papiledema grade III pada funduskopi (Ensefalopati Hipertensi). Dokter mendiagnosis Hipertensi Emergensi dan berdiskusi dengan apoteker IGD mengenai target dan pilihan obat antihipertensi parenteral.',
    question: 'Berapakah target penurunan Mean Arterial Pressure (MAP) yang direkomendasikan pada 1 jam pertama, serta obat intravena pilihan utama yang tepat?',
    options: [
      { key: 'A', text: 'Turunkan MAP maksimal 20-25% dengan infus Nikardipin IV kontinu' },
      { key: 'B', text: 'Turunkan MAP langsung ke < 120/80 mmHg dalam 1 jam pertama dengan Kaptopril sublingual' },
      { key: 'C', text: 'Turunkan MAP sebesar 50% dalam 30 menit pertama dengan Nifedipin oral kapsul kunyah' },
      { key: 'D', text: 'Turunkan TD Sistolik menjadi < 90 mmHg dengan Furosemid bolus IV cepat' },
      { key: 'E', text: 'Pertahankan MAP tanpa penurunan selama 24 jam pertama dengan infus Amlodipin IV' }
    ],
    correctAnswer: 'A',
    explanation: 'Pada krisis hipertensi emergensi (TD > 180/120 mmHg disertai Target Organ Damage akut seperti ensefalopati/papiledema), penurunan tekanan darah harus terkontrol: MAP diturunkan maksimal 20% - 25% pada 1 jam pertama (atau TDS diturunkan menjadi 160/100 mmHg dalam 2-6 jam) menggunakan antihipertensi parenteral titrasi seperti NIKARDIPIN IV atau Nitrogliserin IV. Penurunan tekanan darah yang terlalu drastis (seperti penggunaan Nifedipin sublingual) DILARANG KERAS karena dapat memicu hipoperfusi serebral, infark miokard akut, dan stroke iskemik.',
    clinicalReference: 'Pedoman Konsensus Penatalaksanaan Krisis Hipertensi PERKI & AHA/ACC Hypertension Guidelines',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-223',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang petani berusia 42 tahun dibawa ke IGD setelah pingsan di ladang saat menyemprot hama tanpa masker pelindung. Pasien tampak berkeringat deras, hipersalivasi (air liur menetes berlebihan), pupil miosis pinpoint (1 mm), terdengar ronkhi basah di kedua lapang paru (bronkorea berat), bradikardia (nadi 46 x/menit), serta feses dan urin keluar secara involunter (inkontinensia). Dokter mendiagnosis keracunan insektisida organofosfat akut.',
    question: 'Kombinasi terapi antidotum spesifik apakah yang paling tepat diberikan segera kepada pasien tersebut?',
    options: [
      { key: 'A', text: 'Nalokson IV + Natrium Bikarbonat IV' },
      { key: 'B', text: 'Atropin Sulfat IV + Pralidoksim (2-PAM) IV' },
      { key: 'C', text: 'N-Asetilsistein IV + Deferoksamin IM' },
      { key: 'D', text: 'Flumazenil IV + Kalsium Glukonat IV' },
      { key: 'E', text: 'Piridoksin (Vit B6) IV + Metilen Biru IV' }
    ],
    correctAnswer: 'B',
    explanation: 'Keracunan organofosfat menyebabkan inhibisi enzim asetilkolinesterase (AChE) yang mengakibatkan krisis kolinergik hebat (gejala DUMBELS / SLUDGE: Salivasi, Lakrimasi, Urinasi, Defekasi, GI upset, Emesis, Bronkorea, Bradikardia, Miosis). Tata laksana spesifik adalah: (1) ATROPIN SULFAT IV sebagai antagonis kompetitif reseptor muskarinik untuk mengatasi hipersekresi bronkus dan bradikardia; serta (2) PRALIDOKSIM (2-PAM) IV sebagai reaktivator enzim asetilkolinesterase sebelum terjadi ikatan ireversibel (aging enzyme).',
    clinicalReference: 'WHO Guidelines on the Clinical Management of Acute Poisoning & Farmakologi Dasar dan Klinik Katzung',
    difficulty: 'Sedang'
  },
  {
    id: 'q-224',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien laki-laki berusia 64 tahun penderita Penyakit Ginjal Kronis (PGK Stage 5 on HD reguler) dibawa ke instalasi gawat darurat dengan keluhan lemas ekstrem dan dada berdebar. Pemeriksaan laboratorium cito menunjukkan kadar Kalium serum 7,3 mEq/L (nilai rujukan: 3,5 - 5,0 mEq/L). Gambaran rekam jantung (EKG) menunjukkan gelombang T lancip dan tinggi (tall peaked T-waves) serta pemanjangan interval PR.',
    question: 'Obat darurat intravena manakah yang pertama kali WAJIB diinjeksikan untuk menstabilkan membran miokardium jantung sebelum terapi eliminasi kalium?',
    options: [
      { key: 'A', text: 'Injeksi Insulin Reguler 10 IU dalam Dekstrosa 50%' },
      { key: 'B', text: 'Injeksi Kalsium Glukonat 10% IV perlahan' },
      { key: 'C', text: 'Injeksi Furosemid 80 mg IV bolus' },
      { key: 'D', text: 'Nebulisasi Salbutamol 10 mg' },
      { key: 'E', text: 'Suspensi Natrium Polistiren Sulfonat oral' }
    ],
    correctAnswer: 'B',
    explanation: 'Pada hiperkalemia berat akut (> 6,5 mEq/L) dengan perubahan EKG (peaked T-wave), prioritas tindakan pertama adalah STABILISASI MEMBRAN MIOKARDIUM JANTUNG menggunakan KALSIUM GLUKONAT 10% IV (10 mL dalam 2-5 menit). Kalsium glukonat mengembalikan gradien potensial ambang membran jantung untuk mencegah aritmia fatal (seperti fibrilasi ventrikel atau henti jantung), meskipun tidak menurunkan kadar kalium serum. Setelah membran stabil, baru diberikan terapi pergeseran kalium intrasel (Insulin + Dekstrosa, Salbutamol) dan eliminasi kalium (Hemodialisis / Furosemid).',
    clinicalReference: 'KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of CKD & AHA ACLS Guidelines',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-225',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang pasien laki-laki berusia 35 tahun didiagnosis menderita Kusta / Lepra tipe Multibasiler (MB) dengan tanda klinis bercak kusta > 5 lesi dan BTA kerokan jaringan kulit positif. Pasien menerima paket obat Multi Drug Therapy (MDT) untuk Kusta MB dari apotek puskesmas.',
    question: 'Komposisi regimen obat standar Kemenkes/WHO untuk pasien tersebut serta efek samping perubahan warna kulit kemerahan/kehitaman disebabkan oleh obat apa?',
    options: [
      { key: 'A', text: 'Rifampisin + Dapson; perubahan warna kulit akibat Dapson' },
      { key: 'B', text: 'Rifampisin + Ofloksasin + Minosiklin; perubahan warna kulit akibat Ofloksasin' },
      { key: 'C', text: 'Rifampisin + Dapson + Klofazimin; perubahan warna kulit akibat Klofazimin' },
      { key: 'D', text: 'Isoniazid + Rifampisin + Pirazinamid; perubahan warna kulit akibat Rifampisin' },
      { key: 'E', text: 'Dapson + Klofazimin saja; perubahan warna kulit akibat Dapson' }
    ],
    correctAnswer: 'C',
    explanation: 'Regimen standar Kemenkes RI / WHO untuk Kusta tipe Multibasiler (MB) dewasa terdiri dari kombinasi 3 obat: RIFAMPISIN (600 mg/bulan diawasi), DAPSON (100 mg/hari diminum mandiri), dan KLOFAZIMIN (300 mg/bulan diawasi + 50 mg/hari diminum mandiri) selama 12 bulan / 12 blister. Efek samping pigmentasi kulit (kulit menjadi kemerahan hingga kecokelatan/kehitaman) serta perubahan warna keringat/urin khas disebabkan oleh KLOFAZIMIN (Lamprene), yang bersifat reversibel setelah terapi selesai.',
    clinicalReference: 'Pedoman Nasional Pengendalian Penyakit Kusta Kementerian Kesehatan RI',
    difficulty: 'Sedang'
  },
  {
    id: 'q-226',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang anak laki-laki berusia 7 tahun dengan riwayat epilepsi mengalami kejang tonik-klonik umum yang tidak kunjung berhenti selama lebih dari 8 menit di ruang rawat inap. Pasien dinyatakan mengalami Status Epileptikus dini. Perawat telah memasang akses vena perifer (IV line).',
    question: 'Obat antikonvulsan lini pertama manakah yang harus segera diberikan secara intravena oleh tim medis?',
    options: [
      { key: 'A', text: 'Fenitoin IV bolus cepat' },
      { key: 'B', text: 'Diazepam IV (atau Lorazepam IV)' },
      { key: 'C', text: 'Fenobarbital IV pelan' },
      { key: 'D', text: 'Asam Valproat drip infus' },
      { key: 'E', text: 'Levetirasetam oral tablet' }
    ],
    correctAnswer: 'B',
    explanation: 'Pada Status Epileptikus (kejang berlangsung > 5 menit tanpa pemulihan kesadaran), terapi emergensi lini pertama (Fase 1: 0 - 5/10 menit) adalah golongan Benzodiazepin kerja cepat: DIAZEPAM IV (0,2 - 0,5 mg/kgBB) atau LORAZEPAM IV. Jika kejang tetap berlanjut setelah 10-20 menit (Fase 2), barulah diberikan antikonvulsan lini kedua seperti Fenitoin IV / Fosfenitoin atau Valproat IV atau Levetirasetam IV.',
    clinicalReference: 'Pedoman Tatalaksana Status Epileptikus PERDOSSI & American Epilepsy Society (AES) Guidelines',
    difficulty: 'Sedang'
  },
  {
    id: 'q-227',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien wanita berusia 52 tahun dengan riwayat penggantian katup jantung mekanik mitral (mechanical prosthetic mitral valve) 6 bulan yang lalu rutin mengonsumsi Warfarin. Saat kontrol ke dokter spesialis jantung, pasien menanyakan apakah ia bisa beralih ke obat antikoagulan oral baru (DOAC/NOAC) seperti Rivaroxaban atau Dabigatran agar tidak perlu rutin tes darah INR.',
    question: 'Bagaimanakah rekomendasi apoteker klinis yang tepat berdasarkan bukti ilmiah terkini?',
    options: [
      { key: 'A', text: 'Boleh beralih ke Dabigatran 150 mg 2x sehari karena terbukti lebih aman' },
      { key: 'B', text: 'Boleh beralih ke Rivaroxaban 20 mg 1x sehari karena tidak memerlukan monitoring lab' },
      { key: 'C', text: 'KONTRAINDIKASI MUTLAK; pasien katup mekanik WAJIB tetap menggunakan Warfarin dengan target INR 2,5 - 3,5' },
      { key: 'D', text: 'Boleh mengganti Warfarin dengan kombinasi Aspirin + Klopidogrel dosis tinggi' },
      { key: 'E', text: 'Warfarin dihentikan dan cukup diganti Heparin subkutan mingguan' }
    ],
    correctAnswer: 'C',
    explanation: 'Pasien dengan katup jantung buatan mekanik (mechanical prosthetic heart valve) merupakan KONTRAINDIKASI MUTLAK untuk penggunaan obat antikoagulan oral non-vitamin K (NOAC/DOAC seperti Dabigatran, Rivaroxaban, Apixaban). Uji klinis RE-ALIGN menunjukkan DOAC pada katup mekanik meningkatkan risiko tromboemboli (stroke) dan perdarahan mayor secara signifikan. Standar baku emas satu-satunya adalah Vitamin K Antagonist (WARFARIN) dengan target INR terapeutik 2,5 - 3,5 (untuk katup mitral mekanik).',
    clinicalReference: 'AHA/ACC Guideline for the Management of Patients With Valvular Heart Disease & Panduan PERKI',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-228',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang balita perempuan berusia 3 tahun (BB 14 kg) dilarikan ke instalasi darurat karena menelan sekitar 20 tablet suplemen tambah darah milik ibunya (Ferro Sulfat 300 mg) sekitar 2 jam yang lalu. Anak muntah-muntah berdarah (hematemesis), nyeri perut hebat, dan tampak letargis. Kadar serum besi (iron) terukur 550 mcg/dL (toksik berat).',
    question: 'Antidotum kelasi spesifik apakah yang diindikasikan untuk mengatasi intoksikasi besi akut pada anak tersebut?',
    options: [
      { key: 'A', text: 'Dimerkaprol (BAL)' },
      { key: 'B', text: 'Deferoksamin (Desferal)' },
      { key: 'C', text: 'Kalsium Dinatrium Edetat (Ca-EDTA)' },
      { key: 'D', text: 'Penisilamin' },
      { key: 'E', text: 'Natrium Tiosulfat' }
    ],
    correctAnswer: 'B',
    explanation: 'Antidotum spesifik lini pertama untuk keracunan zat besi (Iron Overload / acute iron toxicity) adalah DEFEROKSAMIN (Desferal). Deferoksamin mengikat ion besi bebas (Fe3+) membentuk kompleks khelat stabil ferioksamin yang larut dalam air dan diekskresikan melalui ginjal. Tanda khas keberhasilan terapi khelasi ini adalah urin pasien akan berubah warna menjadi merah kemerahan muda seperti warna anggur mawar (vin rosé urine).',
    clinicalReference: 'Nelson Textbook of Pediatrics & Goldfrank\'s Toxicologic Emergencies',
    difficulty: 'Sedang'
  },
  {
    id: 'q-229',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang wanita berusia 48 tahun penderita migrain akut berulang datang ke apotek ingin menebus resep Sumatriptan tablet 50 mg. Saat skrining riwayat penyakit, apoteker menemukan bahwa pasien memiliki riwayat Penyakit Jantung Koroner (PJK) pasca pemasangan stent koroner 1 tahun lalu serta riwayat Angina Pektoris tidak stabil.',
    question: 'Mengapa apoteker wajib merekomendasikan penggantian obat Sumatriptan pada pasien tersebut?',
    options: [
      { key: 'A', text: 'Sumatriptan menyebabkan depresi pernapasan berat' },
      { key: 'B', text: 'Sumatriptan mengaktivasi reseptor 5-HT1B/1D yang menyebabkan vasokonstriksi arteri koroner dan risiko infark miokard' },
      { key: 'C', text: 'Sumatriptan merusak fungsi ginjal secara mendadak' },
      { key: 'D', text: 'Sumatriptan menurunkan kadar gula darah hingga hipoglikemia' },
      { key: 'E', text: 'Sumatriptan meningkatkan clearance klopidogrel di hati' }
    ],
    correctAnswer: 'B',
    explanation: 'Golongan Triptan (Sumatriptan, Zolmitriptan) adalah agonis selektif reseptor serotonin 5-HT1B dan 5-HT1D. Selain menyebabkan vasokonstriksi pembuluh darah intrakranial untuk meredakan migrain, triptan juga memicu VASOKONSTRIKSI ARTERI KORONER. Oleh karena itu, Triptan KONTRAINDIKASI MUTLAK pada pasien dengan riwayat Penyakit Jantung Koroner (PJK), angina pektoris, riwayat infark miokard, dan hipertensi tidak terkontrol karena dapat mencetuskan iskemia miokard akut.',
    clinicalReference: 'American Headache Society (AHS) Guidelines & British National Formulary (BNF)',
    difficulty: 'Sedang'
  },
  {
    id: 'q-230',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang laki-laki berusia 50 tahun datang ke klinik dengan keluhan nyeri hebat, bengkak merah, dan panas pada pangkal ibu jari kaki kanan (podagra akut) yang muncul mendadak sejak tadi malam. Hasil laboratorium menunjukkan kadar asam urat darah 9,8 mg/dL. Dokter mendiagnosis serangan Artritis Gout Akut dan berencana meresepkan Alopurinol 300 mg dan Meloksikam 15 mg.',
    question: 'Apakah pertimbangan klinis apoteker mengenai inisiasi pemberian Alopurinol pada saat serangan gout akut?',
    options: [
      { key: 'A', text: 'Alopurinol harus segera diberikan dosis ganda untuk menghancurkan tofus' },
      { key: 'B', text: 'Alopurinol TIDAK BOLEH diinisiasi saat serangan akut karena dapat memicu fluktuasi kristal urat dan memperparah peradangan' },
      { key: 'C', text: 'Alopurinol aman diberikan bersamaan tanpa perlu obat antiinflamasi' },
      { key: 'D', text: 'Alopurinol harus diganti dengan Probenesid dosis maksimal' },
      { key: 'E', text: 'Alopurinol hanya boleh diberikan jika fungsi ginjal eGFR < 15 mL/menit' }
    ],
    correctAnswer: 'B',
    explanation: 'Pada serangan Artritis Gout AKUT, fokus utama terapi adalah meredakan nyeri dan inflamasi menggunakan Kolkisin, NSAID (misal Meloksikam/Indometasin), atau Kortikosteroid oral. Inisiasi obat penurun asam urat (Urate Lowering Therapy seperti ALOPURINOL) TIDAK BOLEH DIMULAI pada saat fase akut sedang memuncak, karena penurunan cepat kadar asam urat serum memobilisasi kristal monosodium urat dari jaringan ke sinovial sehingga memperpanjang dan memperparah fase nyeri akut. Alopurinol baru diinisiasi 2-4 minggu setelah serangan akut reda sempurna.',
    clinicalReference: 'Pedoman Diagnosis dan Pengelolaan Gout Rekomendasi IRA (Ikatan Reumatologi Indonesia) & ACR Guidelines',
    difficulty: 'Sedang'
  },
  {
    id: 'q-231',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang ibu hamil trimester pertama (usia kehamilan 10 minggu) terbukti secara serologis terinfeksi parasit Toxoplasma gondii akut (IgM positif tinggi dengan IgG aviditas rendah). Dokter ingin mencegah transmisi vertikal infeksi parasit dari ibu ke janin yang dapat menyebabkan mikrosefali dan korioretinitis.',
    question: 'Obat antimikroba pilihan utama yang aman digunakan untuk mencegah transmisi toksoplasmosis plasenta pada trimester pertama kehamilan adalah?',
    options: [
      { key: 'A', text: 'Kotrimoksazol (Sulfametoksazol-Trimetoprim)' },
      { key: 'B', text: 'Spiramisin' },
      { key: 'C', text: 'Pirimetamin + Sulfadiazin' },
      { key: 'D', text: 'Doksisiklin' },
      { key: 'E', text: 'Kloramfenikol' }
    ],
    correctAnswer: 'B',
    explanation: 'SPIRAMISIN (antibiotik golongan makrolida) adalah obat pilihan utama untuk infeksi Toksoplasmosis akut pada ibu hamil trimester pertama di mana transmisi plasenta belum terjadi ke janin. Spiramisin terkonsentrasi sangat tinggi di jaringan plasenta sehingga efektif mencegah transmisi parasit ke janin tanpa menimbulkan efek teratogenik. Sementara kombinasi Pirimetamin-Sulfadiazin bersifat teratogenik antagonis folat sehingga baru dipertimbangkan setelah trimester kedua jika janin telah terbukti terinfeksi (PCR cairan amnion positif).',
    clinicalReference: 'ACOG Practice Bulletin on Toxoplasmosis in Pregnancy & Pedoman Kemenkes RI',
    difficulty: 'Sedang'
  },
  {
    id: 'q-232',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang wanita berusia 26 tahun hamil trimester kedua didiagnosis menderita Sifilis sekunder (titer VDRL 1:32 dan TPHA reaktif). Dokter berdiskusi dengan apoteker di instalasi farmasi mengenai pemilihan antibiotik lini pertama yang paling aman bagi ibu dan janin.',
    question: 'Antibiotik lini pertama pilihan utama manakah yang direkomendasikan sesuai pedoman nasional dan internasional?',
    options: [
      { key: 'A', text: 'Doksisiklin 100 mg oral 2x sehari selama 14 hari' },
      { key: 'B', text: 'Benzatin Penisilin G 2,4 juta IU intramuskular dosis tunggal' },
      { key: 'C', text: 'Siprofloksasin 500 mg oral 2x sehari selama 7 hari' },
      { key: 'D', text: 'Gentamisin 80 mg IV tiap 8 jam selama 10 hari' },
      { key: 'E', text: 'Tetrasiklin 500 mg oral 4x sehari selama 14 hari' }
    ],
    correctAnswer: 'B',
    explanation: 'BENZATIN PENISILIN G 2,4 juta IU IM dosis tunggal adalah lini pertama pilihan utama untuk pengobatan Sifilis primer, sekunder, atau laten dini pada populasi umum maupun IBU HAMIL. Penisilin dapat menembus plasenta dan menyembuhkan infeksi janin serta mencegah sifilis kongenital. Doksisiklin dan Tetrasiklin KONTRAINDIKASI pada kehamilan karena merusak pertumbuhan tulang dan menyebabkan pewarnaan kuning permanen pada benih gigi janin.',
    clinicalReference: 'Pedoman Tata Laksana Infeksi Menular Seksual Kemenkes RI & CDC STI Treatment Guidelines',
    difficulty: 'Mudah'
  },
  {
    id: 'q-233',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien laki-laki berusia 54 tahun dengan riwayat dislipidemia campuran (LDL 185 mg/dL, Trigliserida 580 mg/dL) mengonsumsi kombinasi Atorvastatin 40 mg dan Gemfibrozil 600 mg. Dua minggu kemudian, pasien datang ke IGD dengan keluhan nyeri otot hebat (myalgia menyeluruh), kelemahan otot tungkai, dan urin berwarna gelap kecokelatan seperti air teh. Pemeriksaan laboratorium menunjukkan kadar serum Kreatin Kinase (CK) meningkat 25 kali lipat di atas batas normal (diagnosis: Rhabdomyolysis akut).',
    question: 'Mekanisme interaksi farmakokinetik apakah yang mendasari peningkatan toksisitas statin akibat pemberian bersama Gemfibrozil?',
    options: [
      { key: 'A', text: 'Gemfibrozil menginduksi enzim CYP3A4 sehingga mempercepat metabolisme statin' },
      { key: 'B', text: 'Gemfibrozil menghambat glukuronidasi statin dan menghambat transporter influks hepatik OATP1B1 sehingga kadar statin plasma melonjak drastis' },
      { key: 'C', text: 'Gemfibrozil meningkatkan pengikatan protein plasma statin sebesar 99%' },
      { key: 'D', text: 'Gemfibrozil mempercepat ekskresi asam urat di tubulus ginjal' },
      { key: 'E', text: 'Gemfibrozil mengkelat molekul statin di saluran cerna membentuk senyawa tak larut' }
    ],
    correctAnswer: 'B',
    explanation: 'GEMFIBROZIL menghambat enzim glukuronosiltransferase (UGT2B7) yang bertanggung jawab terhadap glukuronidasi statin, sekaligus merupakan inhibitor kuat transporter uptake hepatik OATP1B1. Akibatnya, pembersihan statin terhambat dan konsentrasi plasma statin (termasuk Atorvastatin/Simvastatin) meningkat drastis hingga 2-3 kali lipat, memicu kerusakan membran sel otot lurik dan RHABDOMYOLYSIS berat (mioglobinuria). Jika kombinasi statin dan fibrat mutlak diperlukan, pilihan fibrat yang jauh lebih aman adalah FENOFIBRAT.',
    clinicalReference: 'AHA/ACC Cholesterol Guidelines & Drug Interactions Analysis and Management (Hansten & Horn)',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-234',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien wanita berusia 62 tahun datang ke IGD mata dengan keluhan mata kanan sangat nyeri mendadak, mata merah berair, sakit kepala separuh, mual muntah, dan melihat lingkaran pelangi di sekitar cahaya lampu (halo). Tekanan Intraokular (TIO) mata kanan terukur 54 mmHg (normal: 10 - 21 mmHg). Dokter spesialis mata mendiagnosis Glaukoma Sudut Tertutup Akut (Acute Angle-Closure Glaucoma).',
    question: 'Obat sistemik golongan penghambat anhidrase karbonat manakah yang diberikan sebagai terapi darurat untuk menurunkan produksi cairan humor akuos secara cepat?',
    options: [
      { key: 'A', text: 'Manitol oral sirup' },
      { key: 'B', text: 'Asetazolamid oral / IV' },
      { key: 'C', text: 'Latanoprost tetes mata' },
      { key: 'D', text: 'Atropin Sulfat tetes mata' },
      { key: 'E', text: 'Furosemid intramuskular' }
    ],
    correctAnswer: 'B',
    explanation: 'Tata laksana darurat Glaukoma Sudut Tertutup Akut bertujuan menurunkan tekanan intraokular secara cepat untuk mencegah kebutaan permanen saraf optik. Terapi sistemik lini pertama mencakup ASETAZOLAMID (Diamox) 500 mg IV/oral, yang bekerja menghambat enzim karbonik anhidrase pada korpus siliaris sehingga menurunkan sekresi aqueous humor hingga 50-60%. Terapi topikal pendukung meliputi Timolol tetes mata (beta blocker) dan Pilokarpin tetes mata (miotikum). Atropin KONTRAINDIKASI MUTLAK karena menyebabkan midriasis yang mempersempit sudut bilik mata depan.',
    clinicalReference: 'American Academy of Ophthalmology (AAO) Preferred Practice Pattern Glaucoma',
    difficulty: 'Sedang'
  },
  {
    id: 'q-235',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien laki-laki berusia 68 tahun penderita kanker kolorektal metastatik menerima kemoterapi berbasis regimen FOLFIRI (5-Fluorourasil, Leucovorin, dan Irinotekan). Dua jam setelah infus Irinotekan berjalan, pasien mendadak mengalami kram perut hebat, diare cair akut, keringat dingin membanjiri tubuh, hipersalivasi, dan bradikardia (Early Diarrhea / sindrom kolinergik akut).',
    question: 'Obat apakah yang harus segera diinjeksikan untuk mengatasi sindrom kolinergik akut akibat Irinotekan tersebut?',
    options: [
      { key: 'A', text: 'Loperamid oral dosis tinggi' },
      { key: 'B', text: 'Atropin Sulfat subkutan atau intravena' },
      { key: 'C', text: 'Ondansetron IV bolus' },
      { key: 'D', text: 'Difenoksilat-Atropin tablet kunyah' },
      { key: 'E', text: 'Metoklopramid IV pelan' }
    ],
    correctAnswer: 'B',
    explanation: 'Kemoterapi IRINOTEKAN memiliki efek samping diare bifasik yang khas: (1) Diare Dini (Early Diarrhea) yang terjadi dalam < 24 jam pertama akibat inhibisi enzim asetilkolinesterase oleh struktur mirip piperidin pada metabolit SN-38 (krisis kolinergik akut: kram perut, salivasi, diare cair, bradikardia). Penanganannya adalah ATROPIN SULFAT (0,25 - 1 mg SC/IV). Sedangkan (2) Diare Lambat (Late Diarrhea) terjadi > 24 jam akibat toksisitas mukosa usus yang ditangani dengan LOPERAMID dosis tinggi (4 mg inisial lalu 2 mg tiap 2 jam).',
    clinicalReference: 'NCCN Clinical Practice Guidelines in Oncology: Colon Cancer & ESMO Clinical Practice Guidelines',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-236',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien wanita berusia 72 tahun dengan riwayat depresi mayor mengalami penurunan nafsu makan drastis hingga berat badan turun 8 kg dalam 2 bulan terakhir, disertai insomnia berat (sulit tidur sepanjang malam). Dokter ingin memberikan antidepresan yang dapat sekaligus mengatasi depresi, memperbaiki nafsu makan, dan membantu tidur malam tanpa efek samping antikolinergik yang memberatkan jantung.',
    question: 'Antidepresan golongan Noradrenergic and Specific Serotonergic Antidepressant (NaSSA) manakah yang paling sesuai dengan profil klinis pasien tersebut?',
    options: [
      { key: 'A', text: 'Fluoksetin' },
      { key: 'B', text: 'Sertralin' },
      { key: 'C', text: 'Mirtazapin' },
      { key: 'D', text: 'Duloksetin' },
      { key: 'E', text: 'Amitriptilin' }
    ],
    correctAnswer: 'C',
    explanation: 'MIRTAZAPIN (antidepresan golongan NaSSA) bekerja sebagai antagonis presinaptik reseptor alfa-2 adrenergik sentral serta antagonis reseptor 5-HT2, 5-HT3, dan H1-histamin. Efek antagonis H1 dan 5-HT2C menghasilkan profil klinis yang sangat menguntungkan bagi pasien lansia depresi dengan insomnia dan anoreksia/kaheksia, yaitu meningkatkan nafsu makan (weight gain) dan memberikan efek sedasi yang menenangkan tidur di malam hari tanpa menyebabkan hipotensi ortostatik atau aritmia seperti antidepresan trisiklik.',
    clinicalReference: 'APA Practice Guideline for the Treatment of Patients With Major Depressive Disorder',
    difficulty: 'Sedang'
  },
  {
    id: 'q-237',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang pasien laki-laki berusia 38 tahun datang ke instalasi gawat darurat dengan luka robek dalam kotor akibat tertusuk paku berkarat di area proyek konstruksi 4 jam yang lalu. Pasien tidak mengingat riwayat vaksinasi tetanus toksoid terakhirnya (kemungkinan > 10 tahun yang lalu atau belum lengkap).',
    question: 'Kombinasi imunoprofilaksis darurat apakah yang wajib diberikan segera kepada pasien untuk mencegah infeksi Clostridium tetani?',
    options: [
      { key: 'A', text: 'Cukup antibiotik Amoksisilin oral selama 5 hari tanpa vaksin' },
      { key: 'B', text: 'Vaksin Tetanus Toksoid (TT) IM bersamaan dengan Human Tetanus Immunoglobulin (HTIG) IM pada sisi lokasi injeksi yang berbeda' },
      { key: 'C', text: 'Hanya Human Tetanus Immunoglobulin (HTIG) saja tanpa vaksin' },
      { key: 'D', text: 'Injeksi ATS (Serum Anti Tetanus) dicampur dalam satu spuit dengan vaksin TT' },
      { key: 'E', text: 'Pemberian Salep Kloramfenikol topikal tebal pada area luka' }
    ],
    correctAnswer: 'B',
    explanation: 'Pada luka kotor / rentan tetanus (tetanus-prone wound) dengan riwayat imunisasi tidak jelas atau < 3 dosis, tatalaksana profilaksis yang wajib diberikan adalah KOMBINASI: (1) Imunisasi Pasif dengan Human Tetanus Immunoglobulin (HTIG 250 - 500 IU IM) untuk perlindungan antibodi langsung; dan (2) Imunisasi Aktif dengan Vaksin Tetanus Toksoid (TT / Td 0,5 mL IM) untuk membangun kekebalan jangka panjang. Keduanya WAJIB disuntikkan pada LOKASI ANATOMIS BERBEDA (misal deltoid kanan dan kiri) menggunakan spuit terpisah agar antibodi HTIG tidak menetralkan antigen vaksin TT.',
    clinicalReference: 'CDC Guidelines for Wound Management and Tetanus Prophylaxis & Pedoman Kemenkes RI',
    difficulty: 'Sedang'
  },

  // =========================================================================
  // 💼 DOMAIN 2: MANAJEMEN FARMASI, REGULASI & FARMAKOEKONOMI (10 SOAL KASUS FR)
  // =========================================================================
  {
    id: 'q-238',
    domainId: 'manajemen',
    targetExam: 'all',
    vignette: 'Apoteker di instalasi farmasi rumah sakit menghitung titik pemesanan kembali (Reorder Point / ROP) untuk antibiotik Seftriakson 1 g vial. Diketahui rata-rata penggunaan Seftriakson adalah 50 vial per hari. Waktu tunggu (Lead Time) pengiriman dari distributor PBF adalah 4 hari kerja. Apoteker menetapkan jumlah Stok Pengaman (Safety Stock) setara dengan kebutuhan penggunaan selama 3 hari.',
    question: 'Berapakah nilai Reorder Point (ROP) Seftriakson vial yang harus ditetapkan dalam sistem informasi farmasi?',
    options: [
      { key: 'A', text: '200 vial' },
      { key: 'B', text: '250 vial' },
      { key: 'C', text: '350 vial' },
      { key: 'D', text: '400 vial' },
      { key: 'E', text: '500 vial' }
    ],
    correctAnswer: 'C',
    explanation: 'Rumus Reorder Point (ROP) adalah: ROP = (Lead Time x Pemakaian Rata-Rata per Hari) + Safety Stock. Diketahui: Pemakaian harian = 50 vial/hari; Lead Time = 4 hari -> Kebutuhan selama Lead Time = 4 x 50 = 200 vial; Safety Stock = 3 hari x 50 vial/hari = 150 vial. Maka ROP = 200 + 150 = 350 vial. Saat stok tersisa 350 vial, apoteker harus segera menerbitkan Surat Pesanan baru.',
    clinicalReference: 'Buku Ajar Manajemen Farmasi & Pedoman Pengelolaan Perbekalan Farmasi Rumah Sakit Kemenkes RI',
    difficulty: 'Sedang'
  },
  {
    id: 'q-239',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Komite Farmasi dan Terapi (KFT) rumah sakit melakukan evaluasi Cost-Utility Analysis (CUA) antara Terapi Standar (Obat A) dibandingkan Terapi Inovatif Baru (Obat B) untuk pasien gagal jantung kronis. Biaya total terapi Obat A adalah Rp 25.000.000 dengan outcome 3,0 QALY (Quality-Adjusted Life Years). Sedangkan biaya total Obat B adalah Rp 45.000.000 dengan outcome 4,0 QALY.',
    question: 'Berapakah nilai Incremental Cost-Utility Ratio (ICUR) dari penerapan Terapi Obat B dibandingkan Terapi Obat A?',
    options: [
      { key: 'A', text: 'Rp 10.000.000 per QALY' },
      { key: 'B', text: 'Rp 15.000.000 per QALY' },
      { key: 'C', text: 'Rp 20.000.000 per QALY' },
      { key: 'D', text: 'Rp 25.000.000 per QALY' },
      { key: 'E', text: 'Rp 70.000.000 per QALY' }
    ],
    correctAnswer: 'C',
    explanation: 'Rumus Incremental Cost-Utility Ratio (ICUR) adalah: ICUR = (Biaya Obat B - Biaya Obat A) / (Outcome QALY Obat B - Outcome QALY Obat A). ICUR = (Rp 45.000.000 - Rp 25.000.000) / (4,0 - 3,0) = Rp 20.000.000 / 1,0 QALY = Rp 20.000.000 per QALY. Nilai ini kemudian dibandingkan dengan ambang batas (threshold) Willingness-To-Pay (WTP) nasional (1 - 3 kali PDB per kapita).',
    clinicalReference: 'Pedoman Penerapan Kajian Farmakoekonomi Kementerian Kesehatan RI',
    difficulty: 'Sedang'
  },
  {
    id: 'q-240',
    domainId: 'manajemen',
    targetExam: 'all',
    vignette: 'Apoteker Penanggung Jawab Apotek (APA) menghitung harga jual obat racikan sirup kering amoksisilin. Harga Netto Apotek (HNA) dari PBF adalah Rp 20.000 per botol (belum termasuk PPN 11%). Apotek menetapkan margin keuntungan sebesar 25% dari HNA, biaya tuslah (jasa pelayanan farmasi) Rp 3.000, dan biaya embalase sendok takar Rp 1.000.',
    question: 'Berapakah total harga yang harus dibayar oleh pasien untuk 1 botol obat tersebut?',
    options: [
      { key: 'A', text: 'Rp 28.000' },
      { key: 'B', text: 'Rp 29.200' },
      { key: 'C', text: 'Rp 31.200' },
      { key: 'D', text: 'Rp 32.000' },
      { key: 'E', text: 'Rp 35.000' }
    ],
    correctAnswer: 'C',
    explanation: 'Perhitungan Harga Jual Apotek (HJA): HNA = Rp 20.000. Margin keuntungan 25% = 0,25 x Rp 20.000 = Rp 5.000 -> Harga sebelum PPN = Rp 25.000. Ditambah PPN 11% = 11% x Rp 25.000 = Rp 2.750 (atau HNA + PPN 11% = Rp 22.200; dengan margin 25% = 1,25 x 22.200 = Rp 27.200). Ditambah biaya tuslah (Rp 3.000) dan embalase (Rp 1.000) -> Total HJA = Rp 27.200 + Rp 4.000 = Rp 31.200.',
    clinicalReference: 'Standar Pelayanan Kefarmasian di Apotek Permenkes No. 73 Tahun 2016 & UU Perpajakan HPP PPN 11%',
    difficulty: 'Sedang'
  },
  {
    id: 'q-241',
    domainId: 'manajemen',
    targetExam: 'all',
    vignette: 'Apoteker di Apotek ingin melakukan pemesanan sediaan obat batuk pilek yang mengandung Pseudoefedrin HCl tablet dan Dekstrometorfan HBr sirup ke Pedagang Besar Farmasi (PBF). Apoteker menyiapkan format Surat Pesanan (SP) yang sesuai dengan peraturan perundang-undangan farmasi di Indonesia.',
    question: 'Berdasarkan regulasi Badan POM RI, bagaimanakah ketentuan penerbitan Surat Pesanan Prekursor Farmasi yang benar?',
    options: [
      { key: 'A', text: 'Dibuat dalam 1 lembar tanpa tembusan dan hanya boleh memuat 1 item obat' },
      { key: 'B', text: 'Dibuat sekurang-kurangnya rangkap 3, boleh memuat lebih dari satu item obat prekursor, dan ditandatangani oleh Apoteker dengan mencantumkan nomor SIPA' },
      { key: 'C', text: 'Boleh digabungkan dalam satu surat pesanan bersama obat Narkotika' },
      { key: 'D', text: 'Boleh ditandatangani oleh Tenaga Teknis Kefarmasian tanpa izin apoteker' },
      { key: 'E', text: 'Hanya dapat dipesan ke Kimia Farma Trading & Distribution' }
    ],
    correctAnswer: 'B',
    explanation: 'Sesuai Peraturan Badan POM RI tentang Pengelolaan Obat, Bahan Obat, Narkotika, Psikotropika, dan Prekursor Farmasi di Fasilitas Pelayanan Kefarmasian: Surat Pesanan (SP) Prekursor Farmasi dibuat terpisah dari obat lain, sekurang-kurangnya RANGKAP 3 (asli untuk PBF, arsip apotek, dan arsip administrasi), DAPAT MEMUAT LEBIH DARI SATU JENIS item obat jadi prekursor, dan WAJIB ditandatangani oleh Apoteker Penanggung Jawab dengan mencantumkan nama jelas, nomor SIPA, dan stempel apotek. (Berbeda dengan SP Narkotika yang khusus hanya boleh memuat 1 jenis obat narkotika).',
    clinicalReference: 'Peraturan Badan POM No. 24 Tahun 2021 & Permenkes No. 3 Tahun 2015',
    difficulty: 'Mudah'
  },
  {
    id: 'q-242',
    domainId: 'manajemen',
    targetExam: 'all',
    vignette: 'Petugas vaksin puskesmas mencurigai termostat kulkas vaksin mengalami gangguan sehingga suhu penyimpanan turun hingga -3°C selama 4 jam. Kulkas tersebut berisi Vaksin DPT-HB-Hib, Vaksin Hepatitis B, Vaksin TT, dan Vaksin Polio Oral (bOPV). Apoteker melakukan uji kocok (Shake Test) sebelum memutuskan kelayakan vaksin.',
    question: 'Vaksin manakah yang tergolong sensitif beku (Freeze-Sensitive) dan berisiko mengalami kerusakan potensi permanen jika terjadi pembekuan?',
    options: [
      { key: 'A', text: 'Hanya Vaksin Polio Oral (bOPV)' },
      { key: 'B', text: 'Vaksin DPT-HB-Hib, Vaksin Hepatitis B, dan Vaksin TT (vaksin yang mengandung adsorben alumunium)' },
      { key: 'C', text: 'Semua vaksin aman dan tahan beku tanpa batas waktu' },
      { key: 'D', text: 'Vaksin Campak dan BCG saja' },
      { key: 'E', text: 'Hanya vaksin pelarut air suling' }
    ],
    correctAnswer: 'B',
    explanation: 'Vaksin diklasifikasikan menjadi dua golongan stabilitas suhu: (1) Vaksin Sensitif Beku (Freeze-Sensitive): DPT-HB-Hib, Hepatitis B, TT, DT, Td, dan HPV yang mengandung adjuvan garam aluminium. Jika membeku, ikatan partikel adjuvan akan rusak membentuk gumpalan kasar, menurunkan potensi imunogenik, dan memicu reaksi lokal abses. Vaksin ini WAJIB disimpan pada suhu +2°C hingga +8°C dan TIDAK BOLEH MEMBEKU. (2) Vaksin Sensitif Panas (Heat-Sensitive): Polio (bOPV), Campak/MR, BCG yang dapat disimpan pada suhu beku (-15°C s/d -25°C).',
    clinicalReference: 'Petunjuk Teknis Manajemen Cold Chain Vaksin Kementerian Kesehatan RI & WHO Vaccine Storage Guidelines',
    difficulty: 'Sedang'
  },
  {
    id: 'q-243',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Sebuah apotek baru sedang menyusun analisis kelayakan finansial. Biaya Tetap (Fixed Cost) operasional tahunan apotek diperkirakan sebesar Rp 72.000.000 per tahun. Biaya Variabel (Variable Cost) diketahui sebesar 70% dari total omzet penjualan (Variable Cost Ratio = 0,70).',
    question: 'Berapakah nilai Penjualan Titik Impas (Break-Even Point / BEP) dalam rupiah per tahun yang harus dicapai apotek tersebut agar tidak mengalami kerugian?',
    options: [
      { key: 'A', text: 'Rp 144.000.000' },
      { key: 'B', text: 'Rp 216.000.000' },
      { key: 'C', text: 'Rp 240.000.000' },
      { key: 'D', text: 'Rp 288.000.000' },
      { key: 'E', text: 'Rp 320.000.000' }
    ],
    correctAnswer: 'C',
    explanation: 'Rumus Break-Even Point (BEP) dalam nilai Rupiah adalah: BEP (Rp) = Biaya Tetap (Fixed Cost) / (1 - Variable Cost Ratio). Diketahui: Fixed Cost = Rp 72.000.000; VC Ratio = 0,70. Maka BEP = 72.000.000 / (1 - 0,70) = 72.000.000 / 0,30 = Rp 240.000.000 per tahun (atau Rp 20.000.000 per bulan). Pada omzet tersebut apotek mencapai titik impas (laba operasional = 0).',
    clinicalReference: 'Financial Management for Pharmacists & Manajemen Farmasi Teori dan Penerapan',
    difficulty: 'Sedang'
  },
  {
    id: 'q-244',
    domainId: 'manajemen',
    targetExam: 'all',
    vignette: 'Instalasi Farmasi Rumah Sakit melakukan analisis matriks kombinasi VEN (Vital, Esensial, Non-esensial) dan ABC (berdasarkan nilai investasi) terhadap data anggaran perbekalan farmasi tahun lalu. Obat Kanker Trastuzumab IV masuk ke dalam kategori kelompok "VA" (Vital - A).',
    question: 'Bagaimanakah prioritas strategi pengendalian dan pengadaan yang paling tepat untuk kelompok obat VA tersebut?',
    options: [
      { key: 'A', text: 'Dihilangkan dari formularium rumah sakit karena biayanya terlalu menyerap anggaran' },
      { key: 'B', text: 'Pengendalian stok dilakukan sangat ketat (ketat harian), pengadaan secara terencana berkala/Just-In-Time dengan buffer stock minimal yang terukur, dan tidak boleh terjadi kekosongan sama sekali' },
      { key: 'C', text: 'Dipesan dalam jumlah sangat besar sekaligus 1 tahun ke depan untuk mendapatkan diskon maksimal' },
      { key: 'D', text: 'Diserahkan pengadaannya kepada pihak keluarga pasien secara mandiri' },
      { key: 'E', text: 'Dibiarkan kosong dan hanya dipesan jika pasien sudah berada di ruang operasi' }
    ],
    correctAnswer: 'B',
    explanation: 'Kategori VA (Vital - A) adalah obat yang sangat krusial untuk menyelamatkan nyawa (life-saving/vital) tetapi menyerap persentase anggaran belanja terbesar (kelompok A menyerap ~70% dari total dana). Strategi manajerial kelompok VA: Stok TIDAK BOLEH KOSONG karena menyangkut keselamatan pasien, namun pemesanan harus dikendalikan secara sangat ketat (monitoring ketat harian/mingguan), pengadaan bertahap (Just-In-Time/konsinyasi) untuk mencegah pembekuan modal kerja dan kerugian akibat obat rusak/kadaluwarsa.',
    clinicalReference: 'Managing Drug Supply (Management Sciences for Health - MSH) & Pedoman Pengelolaan Obat Kemenkes',
    difficulty: 'Mudah'
  },
  {
    id: 'q-245',
    domainId: 'manajemen',
    targetExam: 'all',
    vignette: 'Apotek memiliki persediaan 2 botol Morfin sirup dan 5 ampul Petidin injeksi yang telah melewati tanggal kedaluwarsa (ED). Apoteker Penanggung Jawab Apotek (APA) akan melakukan pemusnahan perbekalan farmasi tersebut sesuai regulasi resmi.',
    question: 'Siapakah pihak saksi resmi yang WAJIB dihadirkan dan menandatangani Berita Acara Pemusnahan Narkotika?',
    options: [
      { key: 'A', text: 'Ketua RT setempat dan aparat kepolisian sektor' },
      { key: 'B', text: 'Petugas dari Dinas Kesehatan Kabupaten/Kota dan/atau Balai Besar POM setempat' },
      { key: 'C', text: 'Pemilik Sarana Apotek (PSA) dan staf kasir' },
      { key: 'D', text: 'Sales representative dari PBF distributor terkait saja' },
      { key: 'E', text: 'Cukup Apoteker Penanggung Jawab sendiri tanpa saksi luar' }
    ],
    correctAnswer: 'B',
    explanation: 'Berdasarkan Peraturan Menteri Kesehatan RI No. 3 Tahun 2015 tentang Peredaran, Penyimpanan, Pemusnahan, dan Pelaporan Narkotika, Psikotropika, dan Prekursor Farmasi: Pemusnahan Narkotika dan Psikotropika di apotek WAJIB disaksikan oleh petugas resmi dari DINAS KESEHATAN KABUPATEN/KOTA dan/atau BALAI BESAR/BALAI PENGAWAS OBAT DAN MAKANAN (BPOM) setempat, serta dituangkan dalam Berita Acara Pemusnahan yang dibuat dalam rangkap 3.',
    clinicalReference: 'Permenkes RI No. 3 Tahun 2015 Pasal 38 - 42 & UU No. 35 Tahun 2009 tentang Narkotika',
    difficulty: 'Mudah'
  },
  {
    id: 'q-246',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Rumah Sakit Tipe B menerapkan sistem distribusi perbekalan farmasi untuk pasien rawat inap menggunakan sistem Unit Dose Dispensing (UDD) menggantikan sistem Individual Prescription dan Floor Stock.',
    question: 'Keunggulan utama sistem Unit Dose Dispensing (UDD) yang paling berdampak langsung terhadap Patient Safety adalah?',
    options: [
      { key: 'A', text: 'Mempercepat perawat meracik sendiri obat puyer di ruang bangsal' },
      { key: 'B', text: 'Menurunkan angka kesalahan pemberian obat (Medication Error) karena obat disiapkan farmasi dalam dosis tunggal siap konsumsi per waktu minum' },
      { key: 'C', text: 'Meniadakan peran apoteker di ruang rawat inap' },
      { key: 'D', text: 'Mengharuskan pasien membeli seluruh stok obat 1 bulan di muka' },
      { key: 'E', text: 'Meningkatkan biaya obat yang terbuang saat pasien pulang' }
    ],
    correctAnswer: 'B',
    explanation: 'Sistem Unit Dose Dispensing (UDD) adalah metode distribusi obat di mana sediaan obat disiapkan dan dikemas oleh instalasi farmasi dalam bentuk satuan dosis terbagi tunggal siap pakai untuk satu kali waktu pemberian (per waktu minum per pasien). Keunggulan utama UDD: (1) Menurunkan kejadian Medication Error secara drastis (dosis, rute, waktu telah diverifikasi farmasi); (2) Menghilangkan stok obat berlebih di bangsal perawat; (3) Pasien hanya membayar obat yang benar-benar dikonsumsi; dan (4) Memperluas waktu perawat untuk asuhan keperawatan langsung.',
    clinicalReference: 'Standar Pelayanan Kefarmasian di Rumah Sakit Permenkes No. 72 Tahun 2016 & ASHP Guidelines on UDD',
    difficulty: 'Mudah'
  },
  {
    id: 'q-247',
    domainId: 'manajemen',
    targetExam: 'all',
    vignette: 'Sebuah apotek melayani resep dokter setiap hari. Berdasarkan Permenkes No. 73 Tahun 2016 tentang Standar Pelayanan Kefarmasian di Apotek, resep yang telah dilayani harus diarsipkan secara teratur dan disimpan selama jangka waktu tertentu sebelum diperbolehkan untuk dimusnahkan.',
    question: 'Berapakah masa penyimpanan minimal arsip resep di apotek sebelum dapat dilakukan pemusnahan resmi?',
    options: [
      { key: 'A', text: '1 tahun' },
      { key: 'B', text: '2 tahun' },
      { key: 'C', text: '3 tahun' },
      { key: 'D', text: '5 tahun' },
      { key: 'E', text: '10 tahun' }
    ],
    correctAnswer: 'D',
    explanation: 'Sesuai dengan ketentuan peraturan perundang-undangan farmasi di Indonesia (Permenkes No. 73 Tahun 2016 dan Permenkes No. 9 Tahun 2014): Resep yang telah dilayani di apotek WAJIB disimpan sekurang-kurangnya selama 5 (LIMA) TAHUN. Resep yang telah melewati batas simpan 5 tahun dapat dimusnahkan dengan cara dibakar atau ditanam dengan membuat Berita Acara Pemusnahan Resep.',
    clinicalReference: 'Permenkes RI No. 73 Tahun 2016 tentang Standar Pelayanan Kefarmasian di Apotek',
    difficulty: 'Mudah'
  },

  // =========================================================================
  // 🧪 DOMAIN 3: TEKNOLOGI FARMASI, CPOB & FORMULASI INDUSTRI (10 SOAL KASUS FR)
  // =========================================================================
  {
    id: 'q-248',
    domainId: 'teknologi',
    targetExam: 'all',
    vignette: 'Formulator di bagian Research and Development (R&D) industri farmasi sedang mendesain sediaan emulsi tipe M/A (Minyak dalam Air) sebanyak 100 gram dengan nilai HLB butuh (Required HLB) sebesar 12,0. Formulator menggunakan kombinasi dua surfaktan: Tween 80 (nilai HLB = 15,0) dan Span 80 (nilai HLB = 4,3). Total surfaktan campuran yang digunakan dalam formula adalah 5,0 gram.',
    question: 'Berapakah bobot Tween 80 dan Span 80 yang harus ditimbang masing-masing oleh staf formulasi?',
    options: [
      { key: 'A', text: 'Tween 80 = 2,50 g dan Span 80 = 2,50 g' },
      { key: 'B', text: 'Tween 80 = 3,60 g dan Span 80 = 1,40 g' },
      { key: 'C', text: 'Tween 80 = 1,40 g dan Span 80 = 3,60 g' },
      { key: 'D', text: 'Tween 80 = 4,20 g dan Span 80 = 0,80 g' },
      { key: 'E', text: 'Tween 80 = 3,00 g dan Span 80 = 2,00 g' }
    ],
    correctAnswer: 'B',
    explanation: 'Perhitungan HLB Campuran metode aligasi / aljabar: Misalkan bobot Tween 80 = x gram, maka bobot Span 80 = (5 - x) gram. Persamaan: (x * 15,0) + [(5 - x) * 4,3] = 5,0 * 12,0 -> 15x + 21,5 - 4,3x = 60 -> 10,7x = 38,5 -> x = 38,5 / 10,7 = 3,60 gram Tween 80. Bobot Span 80 = 5,0 - 3,60 = 1,40 gram.',
    clinicalReference: 'Martin\'s Physical Pharmacy and Pharmaceutical Sciences & Farmakope Indonesia VI',
    difficulty: 'Sedang'
  },
  {
    id: 'q-249',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Apoteker di laboratorium formulasi steril rumah sakit akan menyiapkan 100 mL larutan injeksi Atropin Sulfat 1% b/v. Diketahui nilai penurunan titik beku larutan Atropin Sulfat 1% (ptb b1) adalah 0,07°C. Nilai penurunan titik beku larutan NaCl 1% (ptb b2) adalah 0,576°C. Titik beku cairan darah dan air mata normal adalah 0,52°C.',
    question: 'Berapakah jumlah Natrium Klorida (NaCl) yang harus ditambahkan agar larutan injeksi 100 mL tersebut menjadi isotonis?',
    options: [
      { key: 'A', text: '0,450 gram' },
      { key: 'B', text: '0,520 gram' },
      { key: 'C', text: '0,781 gram' },
      { key: 'D', text: '0,900 gram' },
      { key: 'E', text: '1,200 gram' }
    ],
    correctAnswer: 'C',
    explanation: 'Perhitungan tonisitas metode penurunan titik beku: Rumus W = (0,52 - a) / b, di mana: a = penurunan titik beku zat aktif = (1% * 0,07°C) = 0,07°C; b = penurunan titik beku zat pengisotonis (NaCl 1%) = 0,576°C. Maka W = (0,52 - 0,07) / 0,576 = 0,45 / 0,576 = 0,781 gram NaCl per 100 mL larutan.',
    clinicalReference: 'Farmakope Indonesia Edisi VI (Lampiran Tonisitas) & Teori dan Praktik Farmasi Industri Lachman',
    difficulty: 'Sedang'
  },
  {
    id: 'q-250',
    domainId: 'teknologi',
    targetExam: 'all',
    vignette: 'Pada proses pencetakan tablet Parasetamol 500 mg pada mesin cetak rotary berkecepatan tinggi, operator produksi menemukan bagian atas permukaan tablet terbelah atau terlepas membentuk tudung / mahkota (Crown separation). Bagian Pemastian Mutu (QA) mencatat kerusakan fisik tablet tersebut.',
    question: 'Apakah nama kerusakan fisik tablet tersebut dan faktor penyebab utamanya?',
    options: [
      { key: 'A', text: 'Mottling akibat distribusi zat warna yang tidak merata' },
      { key: 'B', text: 'Sticking akibat massa granul terlalu lembab dan menempel pada punch' },
      { key: 'C', text: 'Capping akibat udara yang terjebak di dalam massa cetak (air entrapment) dan kadar air granul terlalu kering' },
      { key: 'D', text: 'Whiskering akibat punch bawah mengalami keausan' },
      { key: 'E', text: 'Chipping akibat sudut punch terlalu tajam' }
    ],
    correctAnswer: 'C',
    explanation: 'CAPPING adalah fenomena terlepasnya sebagian atau seluruh bagian atas/bawah permukaan tablet menyerupai penutup/topi (mahkota). Penyebab utama capping adalah udara yang terjebak di dalam rongga die saat kompresi berkecepatan tinggi (air entrapment) serta kadar air granul yang terlalu rendah (overdrying / granul terlalu kering) atau jumlah fines (serbuk halus) berlebihan. Solusinya adalah menambahkan pre-kompresi, memperlambat kecepatan putar cetak, menurunkan jumlah fines, atau menambah kelembaban granul (moisture content).',
    clinicalReference: 'The Theory and Practice of Industrial Pharmacy (Lachman & Lieberman) & CPOB Badan POM RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-251',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Seksi Pengawasan Mutu (QC) industri farmasi sedang melakukan evaluasi kebocoran pada wadah sediaan injeksi ampul kaca 2 mL Seftriakson pasca proses sterilisasi akhir. Ampul-ampul dimasukkan ke dalam bejana tertutup berisi larutan zat warna tertentu, kemudian bejana divakumkan hingga tekanan negatif tertentu lalu dikembalikan ke tekanan normal.',
    question: 'Larutan zat warna spesifik apakah yang resmi digunakan dalam uji kebocoran ampul tersebut serta tanda ampul dinyatakan bocor?',
    options: [
      { key: 'A', text: 'Larutan Rhodamin B 1%; ampul bocor memancarkan fluoresensi' },
      { key: 'B', text: 'Larutan Metilen Biru (Methylene Blue) 0,1%; ampul bocor jika larutan di dalam ampul berubah menjadi warna biru' },
      { key: 'C', text: 'Larutan Kalium Permanganat 0,5%; ampul bocor jika timbul endapan cokelat' },
      { key: 'D', text: 'Larutan Iodin 2%; ampul bocor jika terjadi perubahan aroma' },
      { key: 'E', text: 'Larutan Fenolftalein 1%; ampul bocor jika larutan berwarna merah muda' }
    ],
    correctAnswer: 'B',
    explanation: 'Uji kebocoran wadah ampul kaca (Methylene Blue Dye Immersion Test) dilakukan dengan merendam ampul dalam larutan METILEN BIRU (konsentrasi 0,05% - 0,1%) di dalam bejana vakum. Saat divakumkan (misal 70 kPa), udara di dalam ampul yang bocor akan keluar. Ketika tekanan vakum dilepaskan ke tekanan atmosfer, larutan metilen biru di luar ampul akan tersedot masuk ke dalam ampul yang bocor sehingga cairan steril di dalam ampul terwarnai BIRU.',
    clinicalReference: 'Farmakope Indonesia Edisi VI & United States Pharmacopeia (USP <1207> Package Integrity)',
    difficulty: 'Mudah'
  },
  {
    id: 'q-252',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Berdasarkan Pedoman CPOB 2024, tata udara ruang bersih industri farmasi (HVAC System) harus dirancang untuk mencegah kontaminasi dan kontaminasi silang antar ruangan produksi. Pada ruang pembuatan sediaan padat (ruang penimbangan dan pencetakan tablet), dirancang perbedaan tekanan udara khusus terhadap koridor bersih di sekitarnya.',
    question: 'Bagaimanakah prinsip pengaturan tekanan udara pada ruang pengolahan tablet yang menghasilkan debu dibandingkan koridor bersih?',
    options: [
      { key: 'A', text: 'Ruang produksi tablet bertekanan POSITIF terhadap koridor agar udara bersih masuk' },
      { key: 'B', text: 'Ruang produksi tablet bertekanan NEGATIF terhadap koridor untuk mengurung debu (containment) agar partikel obat tidak keluar mencemari koridor' },
      { key: 'C', text: 'Tekanan udara dibuat sama persis (nol Pascal) tanpa perbedaan tekanan' },
      { key: 'D', text: 'Koridor dibuat bertekanan vakum mutlak' },
      { key: 'E', text: 'Tekanan udara tidak diatur dan cukup menggunakan jendela terbuka' }
    ],
    correctAnswer: 'B',
    explanation: 'Pada fasilitas produksi sediaan padat (tablet/kapsul/serbuk) yang menghasilkan debu partikulat, ruang penimbangan dan pencetakan harus dirancang memiliki TEKANAN UDARA NEGATIF (tekanan lebih rendah ~10-15 Pa) terhadap koridor bersih (Air Corridor). Tujuannya adalah sistem pengurungan debu (containment): aliran udara mengalir dari koridor bertekanan lebih tinggi ke dalam ruang berdebu sehingga debu obat tidak keluar mencemari koridor atau ruang produksi produk lain (mencegah kontaminasi silang cross-contamination).',
    clinicalReference: 'Pedoman Cara Pembuatan Obat yang Baik (CPOB 2024) Badan POM RI Bab Bangunan dan Fasilitas',
    difficulty: 'Sedang'
  },
  {
    id: 'q-253',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Apoteker formulasi industri farmasi merancang formula sediaan Salep Mata Kloramfenikol steril. Basis salep yang digunakan adalah kombinasi Vaselin Kuning, Parafin Cair, dan Lanolin Anhidrat (basis hidrokarbon anhidrat hidrofobik).',
    question: 'Metode sterilisasi akhir apakah yang paling tepat untuk mensterilkan basis salep mata berlemak/minyak tersebut?',
    options: [
      { key: 'A', text: 'Panas Basah menggunakan Autoklaf suhu 121°C selama 15 menit' },
      { key: 'B', text: 'Panas Kering menggunakan Oven suhu 160°C selama minimal 2 jam (atau 170°C selama 1 jam)' },
      { key: 'C', text: 'Filtrasi membran membran filter ukuran pori 0,22 mikron' },
      { key: 'D', text: 'Radiasi sinar Ultraviolet selama 10 menit' },
      { key: 'E', text: 'Gas Etilen Oksida pada suhu ruang' }
    ],
    correctAnswer: 'B',
    explanation: 'Basis salep berlemak, minyak, dan serbuk hidrofobik tidak dapat disterilkan dengan Autoklaf (panas basah) karena uap air bertekanan tidak dapat menembus ke dalam molekul lipid minyak/vaselin, serta air dapat memicu hidrolisis. Oleh karena itu, sterilisasi yang valid untuk sediaan minyak, lemak anhidrat, dan basis salep adalah STERILISASI PANAS KERING (Dry Heat Sterilization) menggunakan OVEN pada suhu 160°C selama minimal 120 menit atau 170°C selama 60 menit.',
    clinicalReference: 'Farmakope Indonesia Edisi VI (Lampiran Metode Sterilisasi <1371>) & CPOB Steril',
    difficulty: 'Sedang'
  },
  {
    id: 'q-254',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Bagian R&D industri farmasi melakukan Uji Disolusi Terbanding (UDT / In Vitro Equivalence) antara tablet Kaptopril inovator (originator) dengan tablet Kaptopril copy (generik yang dikembangkan) pada 3 pH berbeda (pH 1,2; pH 4,5; dan pH 6,8). Dari perhitungan kurva pelepasan obat, diperoleh nilai Faktor Similaritas (Similarity Factor / f2).',
    question: 'Berapakah batas rentang nilai f2 yang dipersyaratkan Badan POM agar kedua profil disolusi dinyatakan serupa (ekuivalen/similar)?',
    options: [
      { key: 'A', text: 'f2 < 30' },
      { key: 'B', text: '30 <= f2 < 50' },
      { key: 'C', text: '50 <= f2 <= 100' },
      { key: 'D', text: 'f2 > 120' },
      { key: 'E', text: 'f2 bernilai negatif' }
    ],
    correctAnswer: 'C',
    explanation: 'Sesuai Pedoman Uji Bioekivalensi Badan POM RI: Profil disolusi antara produk uji (copy) dan produk pembanding (inovator) dinyatakan IDENTIK / SIMILAR / EKIVALEN secara in vitro apabila nilai FAKTOR SIMILARITAS (f2) berada pada rentang: 50 <= f2 <= 100. Nilai f2 sebesar 50 merefleksikan perbedaan rata-rata pelepasan obat tidak lebih dari 10% pada setiap titik waktu sampling.',
    clinicalReference: 'Peraturan Badan POM tentang Pedoman Uji Bioekivalensi (BE) & WHO Guidelines on Dissolution Testing',
    difficulty: 'Mudah'
  },
  {
    id: 'q-255',
    domainId: 'teknologi',
    targetExam: 'all',
    vignette: 'Sediaan emulsi minyak ikan yang disimpan pada suhu ruang selama 2 minggu menunjukkan fenomena pemisahan: lapisan globul-globul minyak yang lebih ringan terkonsentrasi di bagian atas wadah botol. Namun, setelah botol dikocok secara manual selama beberapa detik, sediaan emulsi kembali homogen sempurna seperti sedia kala.',
    question: 'Fenomena ketidakstabilan fisik emulsi apakah yang terjadi pada sediaan tersebut?',
    options: [
      { key: 'A', text: 'Cracking (Breaking) yang bersifat ireversibel' },
      { key: 'B', text: 'Creaming yang bersifat reversibel' },
      { key: 'C', text: 'Inversi fase dari M/A menjadi A/M' },
      { key: 'D', text: 'Koalesensi permanen' },
      { key: 'E', text: 'Flokulasi ireversibel' }
    ],
    correctAnswer: 'B',
    explanation: 'CREAMING adalah pemisahan emulsi menjadi dua lapisan di mana fase terdispersi berkonsentrasi di bagian permukaan (upward creaming) atau di bagian dasar (sedimentation) akibat perbedaan densitas fase minyak dan air (Hukum Stokes). Ciri khas mutlak Creaming adalah bersifat REVERSIBEL (dapat didispersikan kembali menjadi homogen hanya dengan pengocokan ringan). Berbeda dengan CRACKING / BREAKING di mana film antarmuka surfaktan rusak permanen sehingga emulsi pecah dan tidak dapat homogen kembali dengan pengocokan.',
    clinicalReference: 'Physical Pharmacy (Sinko/Martin) & Farmakope Indonesia Edisi VI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-256',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Industri farmasi sedang melakukan validasi proses pembersihan (Cleaning Validation) pada mesin cetak tablet setelah proses pembuatan tablet Parasetamol sebelum digunakan untuk memproduksi tablet Deksametason. Staf pemastian mutu menghitung batas residu maksimum yang diizinkan (Maximum Allowable Carryover / MACO).',
    question: 'Metode pengambilan sampel residu (sampling method) manakah yang merupakan metode pilihan utama yang paling akurat untuk menguji residu pada permukaan alat yang sulit dibersihkan?',
    options: [
      { key: 'A', text: 'Metode Bilasan Akhir (Rinse Sampling)' },
      { key: 'B', text: 'Metode Usap (Swab Sampling)' },
      { key: 'C', text: 'Pemeriksaan visual mata telanjang saja' },
      { key: 'D', text: 'Pengambilan sampel udara ruang' },
      { key: 'E', text: 'Metode pengendapan cawan papar' }
    ],
    correctAnswer: 'B',
    explanation: 'Dalam validasi pembersihan CPOB, METODE USAP (SWAB SAMPLING) adalah metode baku emas pilihan utama untuk menguji residu zat aktif maupun deterjen pada permukaan alat/mesin. Keunggulan metode usap adalah mampu melepaskan residu yang terikat kuat atau menempel pada area kritis yang sulit terbilas (critical worst-case locations). Metode bilas (rinse sampling) digunakan sebagai pelengkap untuk area luas atau pipa tertutup yang tidak terjangkau usapan.',
    clinicalReference: 'Petunjuk Operasional Penerapan CPOB Badan POM RI Jilid I & PIC/S Validation Guidelines',
    difficulty: 'Sedang'
  },
  {
    id: 'q-257',
    domainId: 'teknologi',
    targetExam: 'all',
    vignette: 'Pada pengujian In-Process Control (IPC) keregasan tablet (friability), analis mutu mengambil sampel 20 tablet Asam Mefenamat 500 mg dengan total bobot awal 12,50 gram. Tablet dimasukkan ke dalam alat Friabilator Roche yang diputar pada kecepatan 25 rpm selama 4 menit (100 putaran). Setelah tablet dikeluarkan dan dibersihkan dari debu pengikis, total bobot akhir tablet adalah 12,42 gram. Tidak ada tablet yang pecah terbelah.',
    question: 'Berapakah persentase nilai keregasan tablet serta kesimpulan kelulusan mutunya berdasarkan Farmakope Indonesia?',
    options: [
      { key: 'A', text: 'Keregasan = 0,64%; Memenuhi Syarat (karena < 1,0%)' },
      { key: 'B', text: 'Keregasan = 1,25%; Tidak Memenuhi Syarat' },
      { key: 'C', text: 'Keregasan = 0,08%; Memenuhi Syarat' },
      { key: 'D', text: 'Keregasan = 2,50%; Tidak Memenuhi Syarat' },
      { key: 'E', text: 'Keregasan = 0,80%; Tidak Memenuhi Syarat' }
    ],
    correctAnswer: 'A',
    explanation: 'Rumus Persentase Keregasan (Friability): % Friabilitas = [(Bobot Awal - Bobot Akhir) / Bobot Awal] x 100%. % Friabilitas = [(12,50 g - 12,42 g) / 12,50 g] x 100% = [0,08 / 12,50] x 100% = 0,64%. Persyaratan resmi Farmakope Indonesia Edisi VI dan USP: Nilai keregasan tablet yang dapat diterima (lulus uji) adalah TIDAK LEBIH DARI 1,0% (<= 1,0%) dan tidak boleh ada tablet yang patah/retak. Maka tablet dinyatakan MEMENUHI SYARAT.',
    clinicalReference: 'Farmakope Indonesia Edisi VI (Uji Keregasan Tablet <1191>)',
    difficulty: 'Mudah'
  },

  // =========================================================================
  // 🌿 DOMAIN 4: FARMASI BAHAN ALAM & FITOFARMAKA (8 SOAL KASUS FR REKONSTRUKSI)
  // =========================================================================
  {
    id: 'q-258',
    domainId: 'bahan_alam',
    targetExam: 'all',
    vignette: 'Analis kontrol mutu ekstrak bahan alam di industri obat tradisional melakukan pengujian parameter non-spesifik berupa penetapan Kadar Abu Total pada simplisia daun Jati Belanda (Guazumae ulmifoliae Folium). Simplisia dipanaskan dan dipijarkan perlahan di dalam krus silika pada suhu 600°C di dalam tanur muffle hingga arang habis dan diperoleh abu berwarna putih abu-abu konstan.',
    question: 'Apakah tujuan penetapan Kadar Abu Total dalam standardisasi simplisia bahan alam?',
    options: [
      { key: 'A', text: 'Mengukur sisa pelarut organik etanol yang mudah menguap' },
      { key: 'B', text: 'Memberikan gambaran kandungan mineral anorganik internal alami maupun kontaminan anorganik eksternal (pasir, tanah, silikat)' },
      { key: 'C', text: 'Menetapkan kadar air bebas di dalam simplisia' },
      { key: 'D', text: 'Menghitung kandungan senyawa flavonoid total' },
      { key: 'E', text: 'Menguji keberadaan cemaran mikroba patogen Salmonella' }
    ],
    correctAnswer: 'B',
    explanation: 'Penetapan KADAR ABU TOTAL adalah parameter non-spesifik resmi yang bertujuan memberikan gambaran jumlah kandungan mineral anorganik secara keseluruhan, yang mencakup mineral internal (garam kalium, kalsium, magnesium alami jaringan tumbuhan) serta pengotor/kontaminan eksternal anorganik (tanah, pasir silikat, debu) yang tidak terbakar saat pemijaran tanur muffle pada suhu 500-600°C.',
    clinicalReference: 'Parameter Standar Umum Ekstrak Tumbuhan Obat Badan POM RI & Farmakope Herbal Indonesia Edisi II',
    difficulty: 'Sedang'
  },
  {
    id: 'q-259',
    domainId: 'bahan_alam',
    targetExam: 'all',
    vignette: 'Industri herbal sedang merancang proses ekstraksi daun Kumis Kucing (Orthosiphon stamineus) yang mengandung senyawa aktif Sinensetin dan senyawa fenolik yang peka terhadap degradasi termal (termolabil). Formulator ingin memilih metode ekstraksi dingin yang tidak menggunakan pemanasan untuk menjaga keutuhan struktur molekul aktif.',
    question: 'Metode ekstraksi dingin pilihan manakah yang paling sesuai untuk simplisia dengan kandungan senyawa termolabil tersebut?',
    options: [
      { key: 'A', text: 'Sokletasi' },
      { key: 'B', text: 'Refluks' },
      { key: 'C', text: 'Infudasi (suhu 90°C)' },
      { key: 'D', text: 'Maserasi atau Perkolasi pada suhu ruang' },
      { key: 'E', text: 'Dekoktasi (suhu 90°C selama 30 menit)' }
    ],
    correctAnswer: 'D',
    explanation: 'Metode ekstraksi bahan alam diklasifikasikan menjadi: (1) Ekstraksi Cara Dingin (suhu ruang 15-30°C): MASERASI (perendaman) dan PERKOLASI (penetesan pelarut mengalir), yang sangat ideal untuk senyawa-senyawa yang rentan rusak oleh suhu tinggi (termolabil). (2) Ekstraksi Cara Panas: Sokletasi, Refluks, Digesti, Infudasi, dan Dekoktasi yang menggunakan pemanasan kontinu sehingga dapat mendegradasi senyawa fenolik termolabil.',
    clinicalReference: 'Farmakope Herbal Indonesia Edisi II & Pedoman Teknologi Formulasi Ekstrak BPOM RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-260',
    domainId: 'bahan_alam',
    targetExam: 'all',
    vignette: 'Seorang pasien penderita hipertensi derajat 1 rutin mengonsumsi herba Seledri (Apium graveolens) yang telah diproduksi dalam sediaan kapsul Fitofarmaka. Senyawa aktif marker di dalam seledri diketahui bekerja merelaksasi otot polos pembuluh darah dan menurunkan resistensi perifer.',
    question: 'Senyawa marker aktif spesifik golongan flavonoid apakah yang terkandung dalam herba Seledri tersebut?',
    options: [
      { key: 'A', text: 'Kurkuminoid' },
      { key: 'B', text: 'Apigenin' },
      { key: 'C', text: 'Andrografolid' },
      { key: 'D', text: 'Filantin' },
      { key: 'E', text: 'Alisin' }
    ],
    correctAnswer: 'B',
    explanation: 'Senyawa penanda (marker) aktif spesifik dari herba Seledri (Apium graveolens) adalah APIGENIN (senyawa flavon/flavonoid). Apigenin terbukti memiliki aktivitas antihipertensi melalui mekanisme vasodilatasi, penghambatan kanal kalsium, serta stimulasi produksi Nitric Oxide (NO) endotel. (Sebagai perbandingan: Kurkuminoid pada Curcuma; Andrografolid pada Sambiloto; Filantin pada Meniran; Alisin pada Bawang Putih).',
    clinicalReference: 'Farmakope Herbal Indonesia Edisi II & Monografi Ekstrak Tumbuhan Obat Indonesia BPOM',
    difficulty: 'Mudah'
  },
  {
    id: 'q-261',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Petugas laboratorium pengujian mutu obat tradisional menguji simplisia rimpang Jahe dan rimpang Temulawak yang disimpan di gudang yang lembab. Pengujian cemaran mikrobiologi dilakukan untuk mendeteksi keberadaan kapang penghasil mikotoksin Aflatoksin yang bersifat hepatotoksik dan karsinogenik kuat.',
    question: 'Spesies kapang utama manakah yang memproduksi cemaran Aflatoksin B1, B2, G1, dan G2 pada bahan alam?',
    options: [
      { key: 'A', text: 'Candida albicans' },
      { key: 'B', text: 'Aspergillus flavus dan Aspergillus parasiticus' },
      { key: 'C', text: 'Escherichia coli' },
      { key: 'D', text: 'Pseudomonas aeruginosa' },
      { key: 'E', text: 'Staphylococcus aureus' }
    ],
    correctAnswer: 'B',
    explanation: 'Aflatoksin adalah mikotoksin karsinogenik kelompok 1 (IARC) yang dihasilkan oleh pertumbuhan jamur kapang kontaminan ASPERGILLUS FLAVUS dan ASPERGILLUS PARASITICUS pada simplisia bahan alam nabati, kacang-kacangan, dan rempah-rempah yang disimpan pada kelembaban tinggi. Badan POM RI menetapkan batas maksimal cemaran Aflatoksin total (B1 + B2 + G1 + G2) tidak lebih dari 20 mcg/kg dan Aflatoksin B1 tidak lebih dari 5 mcg/kg.',
    clinicalReference: 'Peraturan Badan POM tentang Persyaratan Mutu Obat Bahan Alam & Farmakope Herbal Indonesia',
    difficulty: 'Sedang'
  },
  {
    id: 'q-262',
    domainId: 'bahan_alam',
    targetExam: 'all',
    vignette: 'Pada penelitian fraksinasi ekstrak kental etanol daun Kelor (Moringa oleifera), peneliti melakukan ekstraksi cair-cair (fraksinasi bertingkat) di dalam corong pisah menggunakan tiga pelarut dengan tingkat kepolaran yang berbeda secara bertahap: n-Heksana, Etil Asetat, dan Air.',
    question: 'Bagaimanakah urutan kepolaran ketiga pelarut tersebut dari yang paling non-polar hingga yang paling polar?',
    options: [
      { key: 'A', text: 'Air < Etil Asetat < n-Heksana' },
      { key: 'B', text: 'n-Heksana (Non-polar) < Etil Asetat (Semi-polar) < Air (Polar)' },
      { key: 'C', text: 'Etil Asetat < Air < n-Heksana' },
      { key: 'D', text: 'n-Heksana < Air < Etil Asetat' },
      { key: 'E', text: 'Semua pelarut memiliki indeks polaritas yang setara' }
    ],
    correctAnswer: 'B',
    explanation: 'Urutan kepolaran pelarut organik (tingkat polaritas) pada fraksinasi bertingkat dari yang paling non-polar hingga polar: n-HEKSANA (indeks polaritas 0,1; melarutkan lemak, klorofil, lilin) < ETIL ASETAT (indeks polaritas 4,4; semi-polar, melarutkan aglikon flavonoid, terpenoid, steroid) < AIR / METANOL (indeks polaritas 10,2 / 5,1; polar, melarutkan glukosida flavonoid, tanin, saponin, gula).',
    clinicalReference: 'Buku Metode Fitokimia (J.B. Harborne) & Buku Ajar Kimia Bahan Alam',
    difficulty: 'Mudah'
  },
  {
    id: 'q-263',
    domainId: 'bahan_alam',
    targetExam: 'all',
    vignette: 'Analis farmasi melakukan identifikasi senyawa kuersetin pada ekstrak daun jambu biji menggunakan Kromatografi Lapis Tipis (KLT) silika gel GF254 dengan fase gerak kloroform-metanol-asam format. Jarak rambat eluen dari garis penotolan awal hingga garis batas depan pelarut adalah 10,0 cm. Bercak noda analit kuersetin merambat sejauh 6,5 cm dari garis awal.',
    question: 'Berapakah nilai Retardation Factor (Rf) bercak kuersetin tersebut?',
    options: [
      { key: 'A', text: '0,35' },
      { key: 'B', text: '0,65' },
      { key: 'C', text: '1,54' },
      { key: 'D', text: '6,50' },
      { key: 'E', text: '10,00' }
    ],
    correctAnswer: 'B',
    explanation: 'Rumus Retardation Factor (Rf) pada KLT: Rf = Jarak tempuh zat terlarut (analit) / Jarak tempuh fase gerak (pelarut). Diketahui: Jarak tempuh kuersetin = 6,5 cm; Jarak tempuh eluen pelarut = 10,0 cm. Maka nilai Rf = 6,5 / 10,0 = 0,65. Nilai Rf selalu berkisar antara 0,00 hingga 1,00.',
    clinicalReference: 'Farmakope Indonesia Edisi VI (Kromatografi <341>) & Analisis Farmasi Kualitatif',
    difficulty: 'Mudah'
  },
  {
    id: 'q-264',
    domainId: 'bahan_alam',
    targetExam: 'all',
    vignette: 'Obat herbal terstandar di Indonesia dikelompokkan menjadi Jamu, Obat Herbal Terstandar (OHT), dan Fitofarmaka berdasarkan tingkat pembuktian ilmiah khasiat dan keamanannya.',
    question: 'Kategori obat bahan alam manakah yang telah dibuktikan efektivitas dan keamanannya melalui UJI KLINIS pada manusia serta memiliki logo lingkaran dengan kristal es salju berwarna hijau?',
    options: [
      { key: 'A', text: 'Jamu' },
      { key: 'B', text: 'Obat Herbal Terstandar (OHT)' },
      { key: 'C', text: 'Fitofarmaka' },
      { key: 'D', text: 'Suplemen Makanan Impor' },
      { key: 'E', text: 'Obat Kuasi' }
    ],
    correctAnswer: 'C',
    explanation: 'Hierarki obat bahan alam Indonesia: (1) JAMU: Klaim khasiat empiris turun-temurun, logo ranting pohon berdaun hijau; (2) OHT (Obat Herbal Terstandar): Telah lulus uji praklinis (hewan coba), bahan baku terstandar, logo jari-jari daun 3 pasang bintang; (3) FITOFARMAKA: Tingkat pembuktian ilmiah tertinggi yang TELAH LULUS UJI KLINIS pada manusia, bahan baku dan proses produksi terstandar CPOB/CPOTB, dengan logo lingkaran hijau berisi kristal es salju (snowflake) berwarna hijau.',
    clinicalReference: 'Peraturan Badan POM No. 25 Tahun 2021 tentang Kriteria dan Tata Laksana Registrasi Obat Bahan Alam',
    difficulty: 'Mudah'
  },
  {
    id: 'q-265',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Peneliti laboratorium farmasi bahan alam melakukan uji skrining toksisitas akut pendahuluan dan potensi sitotoksik terhadap ekstrak rimpang Temu Kunci menggunakan larva udang laut Artemia salina Leach yang baru menetas.',
    question: 'Apakah nama metode pengujian bioaktivitas menggunakan larva udang tersebut serta parameter toksisitas yang ditentukan?',
    options: [
      { key: 'A', text: 'Brine Shrimp Lethality Test (BSLT) dengan parameter LC50 (Lethal Concentration 50)' },
      { key: 'B', text: 'Ames Test dengan parameter koloni mutan histidin' },
      { key: 'C', text: 'MTT Assay dengan parameter densitas optik sel kanker HeLa' },
      { key: 'D', text: 'Uji Draize dengan parameter iritasi mata kelinci' },
      { key: 'E', text: 'Uji Piogenik Kelinci dengan kenaikan suhu rektal' }
    ],
    correctAnswer: 'A',
    explanation: 'BRINE SHRIMP LETHALITY TEST (BSLT) adalah metode uji hayati cepat, murah, dan terpercaya yang menggunakan larva udang laut Artemia salina Leach untuk skrining awal bioaktivitas dan potensi sitotoksik/antikanker ekstrak tumbuhan. Parameter yang dihitung adalah nilai LC50 (Lethal Concentration 50), yaitu konsentrasi ekstrak yang menyebabkan kematian 50% populasi larva udang setelah 24 jam pemaparan. Ekstrak dinyatakan berpotensi toksik/aktif jika memiliki nilai LC50 < 1000 mcg/mL.',
    clinicalReference: 'Meyer et al. Brine Shrimp: A Convenient General Bioassay for Active Plant Constituents & Pedoman Uji Toksikologi BPOM',
    difficulty: 'Mudah'
  }
];
