import { ExamQuestion } from '../competencyExamData';

/**
 * Bank Soal Kasus Vignette CBT Bagian 12 (Nomor q-474 s/d q-533)
 * Cetak Biru Resmi UKOMNAS 2026: UKMPPAI (Apoteker) & UKTVF/UKTVK (Vokasi TTK)
 * Fokus: Nutrisi Parenteral Total (TPN), Pemantauan Kadar Obat Terapeutik (TDM), Geriatri & Polifarmasi, serta Swamedikasi DOWA Komunitas
 * Total: 60 Butir Soal Vignette Terstandar
 */
export const CBT_EXPANSION_PART_12: ExamQuestion[] = [
  // =========================================================================
  // 🧪 TOTAL PARENTERAL NUTRITION (TPN) & KLINIS KHUSUS (q-474 s/d q-488)
  // =========================================================================
  {
    id: 'q-474',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien laki-laki 45 tahun pasca-reseksi usus halus masif akibat volvulus nekrotik dirawat di ICU dan membutuhkan Nutrisi Parenteral Total (TPN) jangka panjang. Pasien memiliki akses vena perifer saja saat ini. Apoteker diminta menghitung batasan osmolaritas formula TPN.',
    question: 'Berapakah batas maksimal osmolaritas larutan nutrisi parenteral yang aman diberikan melalui vena perifer untuk mencegah flebitis dan trombosis vaskular?',
    options: [
      { key: 'A', text: 'Maksimal 900 mOsm/L' },
      { key: 'B', text: 'Maksimal 1800 mOsm/L' },
      { key: 'C', text: 'Maksimal 2500 mOsm/L' },
      { key: 'D', text: 'Maksimal 500 mOsm/L' },
      { key: 'E', text: 'Tidak ada batasan osmolaritas pada vena perifer' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan pedoman ASPEN (American Society for Parenteral and Enteral Nutrition) dan ESPEN, batas maksimal osmolaritas larutan yang diizinkan untuk infus melalui vena perifer adalah 900 mOsm/L. Formula dengan osmolaritas di atas 900 mOsm/L (hipertonik tinggi) harus diinfuskan melalui jalur vena sentral (Central Venous Catheter / CVC) dengan ujung kateter pada vena kava superior untuk mencegah flebitis kimiawi dan sklerosis vena.',
    clinicalReference: 'ASPEN Guidelines for the Use of Parenteral and Enteral Nutrition in Adult and Pediatric Patients',
    difficulty: 'Mudah'
  },
  {
    id: 'q-475',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Dalam penyusunan formula TPN untuk pasien kritis dengan sepsis berat dan katabolisme protein tinggi, apoteker menghitung rasio Kalori Non-Protein terhadap Nitrogen (NPC:N ratio). Pasien menerima 1800 kkal dari karbohidrat dan lipid, serta 15 gram nitrogen dari asam amino.',
    question: 'Berapakah rasio NPC:N formula tersebut dan apakah sudah sesuai target untuk kondisi stres metabolik berat?',
    options: [
      { key: 'A', text: '120:1, sesuai target untuk kondisi stres katabolik berat (rentang target 80:1 hingga 120:1)' },
      { key: 'B', text: '150:1, hanya sesuai untuk pasien stabil normal' },
      { key: 'C', text: '300:1, terlalu tinggi karbohidrat' },
      { key: 'D', text: '50:1, terlalu rendah kalori' },
      { key: 'E', text: '200:1, sesuai untuk pemeliharaan rutin' }
    ],
    correctAnswer: 'A',
    explanation: 'Rasio NPC:N dihitung dengan membagi Kalori Non-Protein (Karbohidrat + Lemak) dengan gram Nitrogen: 1800 / 15 = 120:1. Pada kondisi pasien normal/stabil tanpa stres, rasio ideal adalah 150:1 hingga 200:1. Namun pada pasien stres katabolik berat, sepsis, atau trauma berat, rasio NPC:N yang direkomendasikan adalah lebih rendah yaitu 80:1 hingga 120:1 untuk memastikan penyediaan asam amino yang cukup guna sintesis protein dan penyembuhan jaringan.',
    clinicalReference: 'ESPEN guideline on clinical nutrition in the intensive care unit & ASPEN',
    difficulty: 'Sedang'
  },
  {
    id: 'q-476',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang apoteker mencampur formula TPN yang mengandung Kalsium Glukonat dan Kalium Fosfat. Apoteker mewaspadai risiko presipitasi kimiawi yang dapat memicu emboli mikro kristal di kapiler paru.',
    question: 'Faktor formulasi manakah yang dapat MENURUNKAN risiko presipitasi kalsium-fosfat dalam larutan TPN?',
    options: [
      { key: 'A', text: 'pH larutan yang lebih asam dan konsentrasi asam amino yang lebih tinggi' },
      { key: 'B', text: 'Peningkatan pH larutan menjadi basa (> 7,5)' },
      { key: 'C', text: 'Peningkatan suhu penyimpanan menjadi hangat (40°C)' },
      { key: 'D', text: 'Penggunaan garam Kalsium Klorida dibandingkan Kalsium Glukonat' },
      { key: 'E', text: 'Pencampuran kalsium dan fosfat secara langsung dalam wadah pekat sebelum pengenceran' }
    ],
    correctAnswer: 'A',
    explanation: 'Presipitasi Kalsium Fosfat (CaHPO4) sangat dipengaruhi oleh pH, konsentrasi asam amino, suhu, dan jenis garam. Pada pH lebih asam (< 6,0), fosfat berada dalam bentuk monofosfat (H2PO4-) yang larut, sedangkan pada pH basa terbentuk ion dibasic/tribasic (HPO4 2- / PO4 3-) yang mudah mengendap dengan kalsium. Konsentrasi asam amino yang tinggi bertindak sebagai buffer dan pelindung khelat, mencegah presipitasi. Kalsium Glukonat lebih aman daripada Kalsium Klorida karena derajat disosiasinya lebih rendah.',
    clinicalReference: 'Trissel’s Stability of Compounded Formulations & ASPEN Safe Practices for Enteral and Parenteral Nutrition',
    difficulty: 'Sedang'
  },
  {
    id: 'q-477',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Dalam urutan penambahan elektrolit pada proses peracikan TPN di Clean Room Laminar Air Flow (LAF), apoteker menerapkan prinsip aseptis dispensing standar USP <797>.',
    question: 'Bagaimanakah urutan pencampuran elektrolit kalsium dan fosfat yang benar dalam larutan TPN untuk menghindari terjadinya presipitasi lokal?',
    options: [
      { key: 'A', text: 'Tambahkan fosfat di awal ke dalam volume besar cairan dasar asam amino/dekstrosa, kocok rata, lalu tambahkan kalsium pada tahap akhir setelah volume cairan hampir penuh' },
      { key: 'B', text: 'Campurkan kalsium dan fosfat terlebih dahulu di dalam satu spuit sebelum dimasukkan ke kantong TPN' },
      { key: 'C', text: 'Tambahkan kalsium klorida murni di awal larutan kosong' },
      { key: 'D', text: 'Tambahkan kalsium dan fosfat bersamaan ke dalam emulsi lipid pekat' },
      { key: 'E', text: 'Elektrolit kalsium dan fosfat tidak boleh dimasukkan dalam satu sediaan nutrisi' }
    ],
    correctAnswer: 'A',
    explanation: 'Untuk mencegah presipitasi fisik kalsium-fosfat, senyawa FOSFAT harus dimasukkan lebih dahulu ke dalam larutan asam amino atau dekstrosa dengan volume pengenceran yang besar, diaduk hingga homogen sempurna, dan senyawa KALSIUM (kalsium glukonat) ditambahkan paling akhir setelah volume larutan mendekati volume total dan diencerkan secara maksimal.',
    clinicalReference: 'USP General Chapter <797> Pharmaceutical Compounding - Sterile Preparations & ASPEN',
    difficulty: 'Mudah'
  },
  {
    id: 'q-478',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien kanker lambung dengan kaheksia berat (status gizi sangat buruk, IMT 14 kg/m2) telah berpuasa selama 2 minggu. Pada hari ke-2 pemberian infus TPN dekstrosa pekat, pasien mendadak mengalami kelemahan otot pernapasan, aritmia ventrikel, kejang, dan kadar Fosfat serum anjlok menjadi 0,8 mg/dL (normal 2,5-4,5 mg/dL).',
    question: 'Sindrom metabolik apakah yang sedang terjadi dan defisiensi mikronutrien apakah yang harus dicegah dengan pemberian sebelum inisiasi TPN?',
    options: [
      { key: 'A', text: 'Refeeding Syndrome; suplementasi Tiamin (Vitamin B1) sebelum pemberian nutrisi' },
      { key: 'B', text: 'Ketoasidosis Diabetik; berikan insulin reguler bolus masif' },
      { key: 'C', text: 'Syok Kardiogenik; berikan dobutamin' },
      { key: 'D', text: 'Toksisitas lipid; hentikan emulsi lemak' },
      { key: 'E', text: 'Sindrom Uremik; lakukan hemodialisis' }
    ],
    correctAnswer: 'A',
    explanation: 'REFEEDING SYNDROME terjadi ketika pasien malnutrisi kronis menerima asupan karbohidrat tinggi secara mendadak. Lonjakan insulin memicu pergeseran cepat fosfat, kalium, dan magnesium dari ekstraseluler ke intraseluler untuk proses glikolisis dan fosforilasi, memicu HIPOFOSFATEMIA berat, aritmia, henti napas, dan kematian. Protokol ASPEN/NICE mewajibkan pemeriksaan elektrolit, inisiasi kalori secara bertahap (start low, go slow), dan pemberian TIAMIN (Vitamin B1) intravena sebelum nutrisi dimulai.',
    clinicalReference: 'NICE Clinical Guideline: Nutrition support for adults & ASPEN Consensus Recommendations on Refeeding Syndrome',
    difficulty: 'Sedang'
  },
  {
    id: 'q-479',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Rumah sakit menggunakan emulsi lipid generasi baru SMOFlipid 20% untuk nutrisi parenteral pasien bedah digestif dengan inflamasi sistemik.',
    question: 'Kombinasi 4 sumber minyak apakah yang terkandung dalam akronim SMOF?',
    options: [
      { key: 'A', text: 'Soybean oil, Medium-chain triglycerides (MCT), Olive oil, dan Fish oil' },
      { key: 'B', text: 'Sunflower oil, Mineral oil, Oleic acid, dan Flaxseed oil' },
      { key: 'C', text: 'Sesame oil, Maize oil, Olive oil, dan Fish oil' },
      { key: 'D', text: 'Soybean oil, Myristic acid, Octanoic acid, dan Fat emulsion' },
      { key: 'E', text: 'Safflower oil, MCT, Omega-6, dan Fatty acid' }
    ],
    correctAnswer: 'A',
    explanation: 'SMOFlipid terdiri dari: Soybean oil 30% (asam lemak esensial omega-6), Medium-chain triglycerides / MCT 30% (energi cepat siap pakai), Olive oil 25% (asam lemak tak jenuh tunggal omega-9 tahan peroksidasi lipid), dan Fish oil 15% (kaya asam lemak omega-3 EPA dan DHA yang bersifat antiinflamasi dan imunomodulasi).',
    clinicalReference: 'ESPEN Guidelines on Parenteral Nutrition & Prescribing Information SMOFlipid',
    difficulty: 'Mudah'
  },
  // =========================================================================
  // 🔬 THERAPEUTIC DRUG MONITORING (TDM) FARMAKOKINETIKA (q-480 s/d q-495)
  // =========================================================================
  {
    id: 'q-480',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien 56 tahun dengan bakteremia Pseudomonas aeruginosa menerima Gentamisin dosis konvensional 100 mg IV setiap 8 jam. Apoteker TDM merencanakan pengambilan sampel darah untuk mengukur kadar puncak (Peak) dan kadar palung (Trough).',
    question: 'Kapan waktu pengambilan sampel darah yang paling tepat untuk mengukur konsentrasi Peak dan Trough Gentamisin pada infus intermiten 30 menit?',
    options: [
      { key: 'A', text: 'Peak: 30 menit setelah infus selesai; Trough: 30 menit tepat sebelum jadwal dosis berikutnya' },
      { key: 'B', text: 'Peak: di tengah-tengah infus; Trough: 2 jam setelah infus selesai' },
      { key: 'C', text: 'Peak: sesaat sebelum infus dimulai; Trough: 4 jam kemudian' },
      { key: 'D', text: 'Peak dan Trough diambil bersamaan pada akhir infus' },
      { key: 'E', text: 'Kadar gentamisin cukup diukur acak kapan saja' }
    ],
    correctAnswer: 'A',
    explanation: 'Untuk antibiotik aminoglikosida (Gentamisin/Tobramisin/Amikasin): Kadar PEAK (puncak) diukur 30 menit SETELAH INFUS 30 MENIT SELESAI (untuk memastikan fase distribusi jaringan telah lengkap, mencerminkan efikasi bakterisidal Cmax/MIC); sedangkan kadar TROUGH (palung) diukur dalam rentang 30 menit SEBELUM DOSIS BERIKUTNYA DIBERIKAN (mencerminkan eliminasi obat dan risiko akumulasi nefrotoksisitas/ototoksisitas jika trough > 2 mcg/mL).',
    clinicalReference: 'ASHP Clinical Practice Guidelines on Therapeutic Monitoring of Aminoglycosides',
    difficulty: 'Mudah'
  },
  {
    id: 'q-481',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Hasil TDM Gentamisin dosis terbagi pada pasien di atas menunjukkan kadar Trough terukur 2,8 mcg/mL (target batas aman trough < 1,0 - 2,0 mcg/mL), sedangkan kadar Peak terukur 7,5 mcg/mL (target peak 6 - 8 mcg/mL). Fungsi ginjal pasien stabil.',
    question: 'Penyesuaian regimen dosis manakah yang paling rasional direkomendasikan apoteker?',
    options: [
      { key: 'A', text: 'Perpanjang interval pemberian (misalnya dari tiap 8 jam menjadi tiap 12 jam atau beralih ke Extended-Interval Dosing sekali sehari) tanpa menurunkan dosis individual' },
      { key: 'B', text: 'Turunkan dosis per kali pemberian dan perpendek interval menjadi tiap 4 jam' },
      { key: 'C', text: 'Naikkan dosis gentamisin menjadi 200 mg tiap 8 jam' },
      { key: 'D', text: 'Hentikan gentamisin permanen dan ganti dengan antibiotik nefrotoksik lain' },
      { key: 'E', text: 'Tidak perlu penyesuaian karena nilai peak sudah tercapai' }
    ],
    correctAnswer: 'A',
    explanation: 'Kadar Trough yang tinggi (> 2 mcg/mL) menandakan waktu klirens tubuh belum cukup untuk mengeliminasi obat ke level aman sebelum dosis baru masuk. Karena kadar Peak sudah berada dalam target terapeutik optimal (7,5 mcg/mL), menurunkan dosis akan menurunkan efikasi bakterisidal. Solusi farmakokinetika yang benar adalah MEMPERPANJANG INTERVAL PEMBERIAN (misal dari q8h ke q12h atau q24h) agar ginjal memiliki waktu eliminasi lebih lama sehingga kadar palung turun ke batas aman (< 1 mcg/mL).',
    clinicalReference: 'Applied Pharmacokinetics & Pharmacodynamics: Principles of Therapeutic Drug Monitoring',
    difficulty: 'Sedang'
  },
  {
    id: 'q-482',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien dengan infeksi MRSA berat (pneumonia nosokomial) menerima Vankomisin intravena. Sesuai Pedoman Konsensus Bersama IDSA/ASHP/PIDS/SIDP 2020 terkini untuk infeksi MRSA invasif berat, target pemantauan efikasi dan keamanan vankomisin telah diperbarui.',
    question: 'Parameter farmakokinetik-farmakodinamik (PK/PD) manakah yang menjadi target pemantauan baku emas vankomisin untuk mencapai efikasi maksimal sekaligus meminimalkan Acute Kidney Injury (AKI)?',
    options: [
      { key: 'A', text: 'Rasio AUC24 / MIC sebesar 400 hingga 600 mg.h/L (diasumsikan MIC = 1 mg/L)' },
      { key: 'B', text: 'Kadar Trough statis 15 - 20 mcg/mL monoterapi' },
      { key: 'C', text: 'Kadar Peak > 80 mcg/mL' },
      { key: 'D', text: 'Kadar Trough < 5 mcg/mL' },
      { key: 'E', text: 'Waktu di atas MIC (T > MIC) 100%' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Pedoman Konsensus IDSA/ASHP 2020, target pemantauan Vankomisin untuk infeksi MRSA serius adalah RASIO AUC24/MIC DENGAN TARGET 400 - 600 mg.jam/L (menggunakan estimasi Bayesian). Panduan ini secara eksplisit TIDAK LAGI MEREKOMENDASIKAN penargetan kadar Trough palung 15-20 mcg/mL karena terbukti meningkatkan risiko nefrotoksisitas AKI tanpa meningkatkan efikasi klinis.',
    clinicalReference: 'Therapeutic monitoring of vancomycin for serious methicillin-resistant Staphylococcus aureus infections: A revised consensus guideline (IDSA/ASHP 2020)',
    difficulty: 'Sedang'
  },
  {
    id: 'q-483',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien wanita 42 tahun penderita epilepsi dengan hipoalbuminemia berat (Albumin serum terukur 2,0 g/dL; nilai normal 4,0 g/dL) mengonsumsi Fenitoin kapsul. Hasil laboratorium menunjukkan total konsentrasi Fenitoin plasma adalah 8 mcg/mL (rentang normal total 10 - 20 mcg/mL). Pasien tampak mengantuk dan ataksia.',
    question: 'Berapakah konsentrasi Fenitoin terhitung yang telah dikoreksi terhadap hipoalbuminemia menggunakan rumus Winter-Tozer?',
    options: [
      { key: 'A', text: '16 mcg/mL (berada dalam rentang terapi aman)' },
      { key: 'B', text: '8 mcg/mL (tetap sub-terapeutik)' },
      { key: 'C', text: '4 mcg/mL' },
      { key: 'D', text: '24 mcg/mL' },
      { key: 'E', text: '32 mcg/mL' }
    ],
    correctAnswer: 'A',
    explanation: 'Fenitoin berikatan kuat dengan albumin serum (sekitar 90%). Pada hipoalbuminemia, fraksi obat bebas aktif (free drug) meningkat drastis meskipun kadar total terbaca rendah. Menggunakan rumus Winter-Tozer: C_koreksi = C_terukur / [(0,2 x Albumin) + 0,1] = 8 / [(0,2 x 2,0) + 0,1] = 8 / [0,4 + 0,1] = 8 / 0,5 = 16 mcg/mL. Jadi konsentrasi efektif riil pasien adalah 16 mcg/mL (terapeutik), sehingga peningkatan dosis TIDAK boleh dilakukan karena akan memicu intoksikasi berat.',
    clinicalReference: 'Winter-Tozer Equation for Phenytoin Adjustment & Applied Clinical Pharmacokinetics',
    difficulty: 'Sedang'
  },
  {
    id: 'q-484',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Apoteker menjelaskan kepada dokter mengapa penambahan dosis Fenitoin harian sebesar 20% (dari 300 mg menjadi 360 mg/hari) dapat melipatgandakan konsentrasi plasma fenitoin pasien dari 12 mcg/mL menjadi 28 mcg/mL (toksisitas nistagmus dan letargi).',
    question: 'Prinsip eliminasi farmakokinetik non-linier apakah yang mendasari fenomena tersebut?',
    options: [
      { key: 'A', text: 'Kinetika Michaelis-Menten (kapasitas enzim metabolisme hepar jenuh pada rentang dosis terapeutik)' },
      { key: 'B', text: 'Kinetika orde pertama linier' },
      { key: 'C', text: 'Auto-induksi enzim metabolisme' },
      { key: 'D', text: 'Penurunan absorbsi di usus halus' },
      { key: 'E', text: 'Peningkatan klirens ekskresi ginjal' }
    ],
    correctAnswer: 'A',
    explanation: 'Fenitoin mengikuti model kinetika eliminasi saturable (kapasitas jenuh) Michaelis-Menten. Pada konsentrasi rendah, eliminasi berlangsung seperti orde satu (linier). Namun pada konsentrasi terapeutik (10-20 mcg/mL), enzim pemetabolisme di hepar (CYP2C9/2C19) mulai mengalami kejenuhan (mendekati laju reaksi maksimum Vmax). Akibatnya, kenaikan dosis yang sangat kecil sekalipun dapat menyebabkan lonjakan konsentrasi plasma yang tidak proporsional dan toksik.',
    clinicalReference: 'Goodman & Gilman’s The Pharmacological Basis of Therapeutics & Clinical Pharmacokinetics',
    difficulty: 'Mudah'
  },
  {
    id: 'q-485',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien 68 tahun dengan Gagal Jantung Kongestif (HFrEF) dan Fibrilasi Atrium menerima terapi Digoksin tablet 0,25 mg 1 kali sehari. Apoteker mengevaluasi hasil laboratorium TDM kadar serum digoksin.',
    question: 'Berapakah rentang konsentrasi serum terapeutik target Digoksin yang direkomendasikan pada pasien gagal jantung kronis untuk meminimalkan mortalitas (studi DIG)?',
    options: [
      { key: 'A', text: '0,5 hingga 0,9 ng/mL' },
      { key: 'B', text: '1,5 hingga 2,5 ng/mL' },
      { key: 'C', text: '3,0 hingga 5,0 ng/mL' },
      { key: 'D', text: '0,1 hingga 0,3 ng/mL' },
      { key: 'E', text: 'Bebas target asalkan detak jantung lambat' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan analisis post-hoc uji klinis DIG dan pedoman ACC/AHA/ESC, target konsentrasi serum Digoksin untuk GAGAL JANTUNG KRONIS adalah 0,5 - 0,9 ng/mL. Kadar digoksin di atas 1,0 ng/mL (terutama > 1,2 ng/mL) berkorelasi dengan peningkatan mortalitas kardiovaskular dan aritmia tanpa memberikan manfaat inotropik tambahan.',
    clinicalReference: 'AHA/ACC Heart Failure Guidelines & The Digitalis Investigation Group (DIG) Trial',
    difficulty: 'Sedang'
  },
  {
    id: 'q-486',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien yang meminum digoksin pada kasus di atas mengalami aritmia ventrikel baru dan baru saja mulai meminum Amiodaron 200 mg/hari. Apoteker menjelaskan adanya interaksi obat farmakokinetik antara digoksin dan amiodaron.',
    question: 'Mekanisme interaksi apakah yang terjadi dan tindakan penyesuaian dosis apa yang wajib dilakukan?',
    options: [
      { key: 'A', text: 'Amiodaron menghambat P-glikoprotein (P-gp) ginjal dan ekstra-renal sehingga menurunkan klirens digoksin; dosis digoksin harus diturunkan sebesar 30% hingga 50%' },
      { key: 'B', text: 'Amiodaron mempercepat metabolisme digoksin sehingga dosis digoksin harus digandakan' },
      { key: 'C', text: 'Amiodaron mengendapkan digoksin di lambung' },
      { key: 'D', text: 'Tidak ada interaksi bermakna antara amiodaron dan digoksin' },
      { key: 'E', text: 'Digoksin menurunkan absorpsi amiodaron' }
    ],
    correctAnswer: 'A',
    explanation: 'Amiodaron merupakan penghambat poten efflux transporter P-glikoprotein (P-gp) di tubulus ginjal dan saluran cerna. Penghambatan ini menurunkan ekskresi renal digoksin dan meningkatkan bioavailabilitasnya, menyebabkan lonjakan kadar serum digoksin hingga 70-100% (toksisitas digitalis). Pedoman merekomendasikan PENURUNAN DOSIS DIGOKSIN SEBESAR 30 - 50% saat terapi amiodaron dimulai, disertai pemantauan kadar serum digoksin.',
    clinicalReference: 'Lexicomp Drug Interactions & AHA Heart Failure Scientific Statement',
    difficulty: 'Sedang'
  },
  {
    id: 'q-487',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien penderita asma kronis meminum Teofilin tablet lepas lambat. Pasien mengalami infeksi saluran napas dan diresepkan antibiotik Siprofloksasin 500 mg 2 kali sehari oleh dokter. Tiga hari kemudian, pasien dilarikan ke IGD dengan takikardia, tremor hebat, mual muntah persisten, dan kejang.',
    question: 'Interaksi farmakokinetik apakah yang menyebabkan intoksikasi akut teofilin pada pasien tersebut?',
    options: [
      { key: 'A', text: 'Siprofloksasin menghambat kuat enzim CYP1A2 di hepar sehingga menurunkan klirens metabolisme teofilin dan melipatgandakan kadarnya' },
      { key: 'B', text: 'Siprofloksasin meningkatkan absorpsi teofilin di lambung' },
      { key: 'C', text: 'Siprofloksasin menggantikan teofilin dari ikatan protein plasma' },
      { key: 'D', text: 'Teofilin memicu resistensi siprofloksasin' },
      { key: 'E', text: 'Siprofloksasin merusak glomerulus ginjal' }
    ],
    correctAnswer: 'A',
    explanation: 'Teofilin dimetabolisme di hati terutama oleh enzim sitokrom P450 isoform CYP1A2 (> 80%). Antibiotik fluorokuinolon SIPROFLOKSASIN adalah inhibitor kuat CYP1A2. Ko-administrasi keduanya menyebabkan penurunan klirens teofilin hingga 30-50%, memicu lonjakan konsentrasi serum teofilin ke tingkat toksik (> 20 mcg/mL) yang bermanifestasi sebagai aritmia ventrikel dan kejang refrakter.',
    clinicalReference: 'Stockley’s Drug Interactions & Clinical Pharmacokinetics of Theophylline',
    difficulty: 'Mudah'
  },
  {
    id: 'q-488',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien baru didiagnosis epilepsi fokal dan mulai diterapi Karbamazepin 200 mg 2 kali sehari. Pada minggu ke-3 terapi, konsentrasi serum karbamazepin turun signifikan dari 8 mcg/mL menjadi 4 mcg/mL meskipun pasien patuh minum obat.',
    question: 'Fenomena farmakokinetika apakah yang khas terjadi pada terapi awal karbamazepin?',
    options: [
      { key: 'A', text: 'Auto-induksi enzim sitokrom CYP3A4 oleh molekul karbamazepin itu sendiri' },
      { key: 'B', text: 'Toleransi farmakodinamik reseptor GABA' },
      { key: 'C', text: 'Gangguan penyerapan obat akibat makanan' },
      { key: 'D', text: 'Eliminasi renal mendadak' },
      { key: 'E', text: 'Degradasi obat di saluran cerna' }
    ],
    correctAnswer: 'A',
    explanation: 'Karbamazepin memiliki sifat unik AUTO-INDUKSI (autoinduction), di mana karbamazepin menginduksi enzim metabolismenya sendiri (terutama CYP3A4 di hepar). Proses auto-induksi ini dimulai dalam beberapa hari dan mencapai kapasitas puncak setelah 2 hingga 4 minggu terapi, menyebabkan waktu paruh karbamazepin memendek dari awal 35-40 jam menjadi hanya 12-17 jam. Akibatnya, kadar serum turun dan dosis pemeliharaan perlu dititrasi naik.',
    clinicalReference: 'Applied Pharmacokinetics: Principles of Therapeutic Drug Monitoring & PERDOSSI',
    difficulty: 'Sedang'
  },
  // =========================================================================
  // 👴 GERIATRI, POLIFARMASI & BEERS CRITERIA (q-489 s/d q-503)
  // =========================================================================
  {
    id: 'q-489',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang wanita 78 tahun dengan demensia Alzheimer ringan dan riwayat jatuh berulang mengalami insomnia. Keluarga meminta dokter meresepkan obat tidur Diazepam.',
    question: 'Berdasarkan AGS Beers Criteria 2023, mengapa golongan Benzodiazepin kerja panjang (seperti Diazepam) harus DIHINDARI pada populasi geriatri?',
    options: [
      { key: 'A', text: 'Meningkatkan risiko sedasi berlebih di siang hari, gangguan kognitif, ataksia motorik, dan fraktur tulang akibat jatuh' },
      { key: 'B', text: 'Memicu hipertensi urgensi resisten' },
      { key: 'C', text: 'Menyebabkan hiperglikemia diabetik akut' },
      { key: 'D', text: 'Merusak mukosa lambung dan memicu perforasi usus' },
      { key: 'E', text: 'Menyebabkan hiperkalemia berat' }
    ],
    correctAnswer: 'A',
    explanation: 'AGS Beers Criteria 2023 secara tegas mengategorikan Benzodiazepin (terutama kerja panjang seperti Diazepam, Klordiazepoksid, Flurazepam) sebagai obat yang HARUS DIHINDARI pada lansia. Lansia mengalami penurunan klirens hepar dan peningkatan sensitivitas reseptor SSP terhadap benzodiazepin, yang secara signifikan meningkatkan risiko delirium, perburukan demensia, ataksia gaya berjalan, serta risiko JATUH dan FRAKTUR TULANG PANGGUL.',
    clinicalReference: '2023 American Geriatrics Society Beers Criteria for Potentially Inappropriate Medication Use in Older Adults',
    difficulty: 'Mudah'
  },
  {
    id: 'q-490',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang kakek 74 tahun dengan Benign Prostatic Hyperplasia (BPH) dan inkontinensia urin mengeluhkan bersin-bersin dan hidung gatal karena alergi. Pasien membeli tablet Difenhidramin di warung.',
    question: 'Komplikasi akut urologis dan neurologis apakah yang berisiko tinggi timbul akibat efek antikolinergik kuat difenhidramin pada pasien lansia dengan BPH?',
    options: [
      { key: 'A', text: 'Retensi urin akut (anuria akibat paralisis otot detrusor) dan konfusi mental/delirium' },
      { key: 'B', text: 'Inkontinensia urin berlebih dan diare' },
      { key: 'C', text: 'Priapismus persisten' },
      { key: 'D', text: 'Gagal ginjal akut nefrotik' },
      { key: 'E', text: 'Hipotermia berat' }
    ],
    correctAnswer: 'A',
    explanation: 'Antihistamin generasi pertama (seperti Difenhidramin, Klorfeniramin, Hidroksizin) memiliki beban antikolinergik sentral dan perifer yang sangat kuat. Pada lansia pria dengan BPH, hambatan reseptor muskarinik M3 melumpuhkan kontraksi otot detrusor kandung kemih dan mengencangkan sfingter internal, mencetuskan RETENSI URIN AKUT yang membutuhkan pemasangan kateter segera, serta memicu konstipasi, mulut kering, dan delirium akut.',
    clinicalReference: 'AGS Beers Criteria 2023 & STOPP/START criteria version 3',
    difficulty: 'Mudah'
  },
  {
    id: 'q-491',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien wanita 80 tahun menderita diabetes melitus tipe 2 dan telah meminum Glibenklamid 5 mg/hari selama 10 tahun. Pasien sering ditemukan bingung, lemas, dan berkeringat dingin pada pagi hari.',
    question: 'Mengapa Glibenklamid dikontraindikasikan pada populasi geriatri menurut Beers Criteria dan apa rekomendasi penggantian obatnya?',
    options: [
      { key: 'A', text: 'Glibenklamid memiliki waktu paruh biologis dan metabolit aktif yang sangat panjang sehingga memicu hipoglikemia berat berkepanjangan; ganti dengan Glimepirid dosis rendah atau Gliklazid' },
      { key: 'B', text: 'Glibenklamid menyebabkan kenaikan berat badan ekstrem; ganti dengan insulin basal dosis ganda' },
      { key: 'C', text: 'Glibenklamid memicu pankreatitis hemoragik; ganti dengan Pioglitazon' },
      { key: 'D', text: 'Glibenklamid tidak efektif pada lansia; ganti dengan Glukagon' },
      { key: 'E', text: 'Glibenklamid merusak retina mata' }
    ],
    correctAnswer: 'A',
    explanation: 'Glibenklamid (Glyburide) memiliki waktu paruh eliminasi panjang dan menghasilkan metabolit aktif yang diekskresikan melalui ginjal. Penurunan fungsi ginjal fisiologis pada lansia menyebabkan akumulasi metabolit dan risiko HIPOGLIKEMIA BERKEPANJANGAN yang dapat berakibat fatal atau memicu koma dan stroke iskemik. Pilihan sulfonilurea yang lebih aman pada lansia adalah GLIKLAZID atau GLIMEPIRID (dosis awal rendah) karena waktu paruh lebih pendek.',
    clinicalReference: 'AGS Beers Criteria 2023 & Konsensus Pengelolaan DM Tipe 2 Lansia PERKENI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-492',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien 82 tahun dengan demensia mengalami agitasi perilaku (Behavioral and Psychological Symptoms of Dementia / BPSD). Keluarga mendesak dokter untuk meresepkan antipsikotik atipikal (Risperidon atau Olanzapin).',
    question: 'Peringatan kotak hitam (FDA Black Box Warning) apakah yang tercantum pada penggunaan antipsikotik untuk psikosis terkait demensia pada lansia?',
    options: [
      { key: 'A', text: 'Peningkatan risiko kematian (mortalitas menyeluruh) akibat kejadian kardiovaskular mayor dan stroke serebrovaskular' },
      { key: 'B', text: 'Peningkatan risiko kebutaan ireversibel' },
      { key: 'C', text: 'Peningkatan risiko gagal hati akut' },
      { key: 'D', text: 'Risiko fibrosis retroperitoneal' },
      { key: 'E', text: 'Risiko osteosarkoma tulang' }
    ],
    correctAnswer: 'A',
    explanation: 'Semua obat antipsikotik (baik tipikal generasi pertama maupun atipikal generasi kedua) memiliki FDA Boxed Warning mengenai PENINGKATAN RISIKO MORTALITAS dan KEJADIAN SEREBROVASKULAR (Stroke dan TIA) pada pasien lansia dengan psikosis terkait demensia. Antipsikotik hanya boleh digunakan sebagai pilihan terakhir jika intervensi non-farmakologis gagal dan perilaku pasien membahayakan diri sendiri atau orang lain, dengan dosis terendah dan durasi sesingkat mungkin.',
    clinicalReference: 'FDA Black Box Warning on Antipsychotics in Dementia-Related Psychosis & APA Practice Guideline',
    difficulty: 'Sedang'
  },
  {
    id: 'q-493',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Apoteker klinis di poliklinik geriatri melakukan program de-prescribing pada pasien 75 tahun yang telah mengonsumsi Omeprazole 20 mg/hari selama 3 tahun berturut-turut tanpa indikasi endoskopi yang jelas (tidak ada riwayat ulkus aktif atau sindrom Zollinger-Ellison).',
    question: 'Risiko efek samping jangka panjang apakah yang terdokumentasi dari penggunaan kronis Proton Pump Inhibitors (PPI) pada populasi geriatri?',
    options: [
      { key: 'A', text: 'Hipomagnesemia, defisiensi vitamin B12, osteoporosis dengan peningkatan risiko fraktur panggul, dan infeksi Clostridioides difficile' },
      { key: 'B', text: 'Hiperkalsemia dan batu ginjal kalsium' },
      { key: 'C', text: 'Hipertensi pulmonal dan polisitemia' },
      { key: 'D', text: 'Pankreatitis nekrotikans dan hipotiroid' },
      { key: 'E', text: 'Katarak subkapsular dan glaukoma' }
    ],
    correctAnswer: 'A',
    explanation: 'Supresi asam lambung kronis oleh PPI menghambat absorpsi mineral dan vitamin yang bergantung pada lingkungan asam (Vitamin B12, Besi, Kalsium, dan Magnesium), meningkatkan risiko osteopenia dan FRAKTUR PANGGUL, serta memicu HIPOMAGNESEMIA berat. Selain itu, hilangnya pertahanan asam lambung memudahkan kolonisasi bakteri enterik patogen seperti CLOSTRIDIOIDES DIFFICILE colitis dan pneumonia aspirasi.',
    clinicalReference: 'American Gastroenterological Association (AGA) Clinical Practice Update on De-prescribing PPIs & Beers Criteria',
    difficulty: 'Mudah'
  },
  {
    id: 'q-494',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Dalam skrining preskripsi geriatri menggunakan kriteria STOPP (Screening Tool of Older Persons’ Prescriptions) versi 3, apoteker menemukan peresepan kombinasi NSAID oral harian (Piroksikam 20 mg) bersamaan dengan Warfarin dan Aspirin.',
    question: 'Mengapa kombinasi obat tersebut dikategorikan sebagai kriteria STOPP mutlak yang harus dihentikan?',
    options: [
      { key: 'A', text: 'Peningkatan eksponensial risiko perdarahan saluran cerna masif yang fatal' },
      { key: 'B', text: 'Penurunan efektivitas antikoagulan warfarin' },
      { key: 'C', text: 'Peningkatan laju pembentukan trombus arteri' },
      { key: 'D', text: 'Penurunan absorbsi aspirin' },
      { key: 'E', text: 'Piroksikam memicu degradasi warfarin di usus' }
    ],
    correctAnswer: 'A',
    explanation: 'Kriteria STOPP versi 3 secara eksplisit melarang peresepan NSAID bersamaan dengan antikoagulan (Warfarin/DOAC) atau dual antiplatelet tanpa perlindungan mukosa lambung yang sangat ketat, karena sinergi erosi mukosa lambung oleh NSAID dengan hambatan hemostasis oleh warfarin/aspirin melipatgandakan risiko PERDARAHAN GASTROINTESTINAL FATAL hingga lebih dari 5-10 kali lipat.',
    clinicalReference: 'STOPP/START criteria for potentially inappropriate medications in older people: version 3 (European Geriatric Medicine 2023)',
    difficulty: 'Mudah'
  },
  {
    id: 'q-495',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Apoteker mengevaluasi kriteria START (Screening Tool to Alert doctors to Right Treatment) versi 3 pada pasien 72 tahun dengan riwayat Infark Miokard Akut 6 bulan lalu, fraksi ejeksi 50%, tanpa kontraindikasi.',
    question: 'Terapi pemeliharaan kardioprotektif kombinasi manakah yang tergolong sebagai indikasi mutlak START yang wajib ada dalam resep?',
    options: [
      { key: 'A', text: 'Statin intensitas tinggi, Beta-blocker, ACE-Inhibitor/ARB, dan Antiplatelet (Aspirin)' },
      { key: 'B', text: 'Digoksin dan Furosemid saja' },
      { key: 'C', text: 'Kalsium Channel Blocker Diltiazem monoterapi' },
      { key: 'D', text: 'Kombinasi 3 jenis NSAID' },
      { key: 'E', text: 'Suplemen multivitamin dosis tinggi saja' }
    ],
    correctAnswer: 'A',
    explanation: 'Kriteria START versi 3 mengidentifikasi obat-obatan penting yang berpotensi terlewatkan (omission errors). Pasien pasca-infark miokard koroner wajib menerima 4 pilar prevensi sekunder: 1) Antiplatelet (Aspirin), 2) Statin intensitas tinggi (pencegahan plak aterosklerosis), 3) Beta Blocker (menurunkan kebutuhan oksigen miokard dan aritmia), dan 4) ACE Inhibitor/ARB (remodeling ventrikel).',
    clinicalReference: 'STOPP/START criteria version 3 (2023) & ESC Guidelines for the Management of Acute Coronary Syndromes',
    difficulty: 'Mudah'
  },
  // =========================================================================
  // 💊 SWAMEDIKASI, DOWA & PELAYANAN KOMUNITAS (q-496 s/d q-533)
  // =========================================================================
  {
    id: 'q-496',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang ibu datang ke apotek mengeluhkan anak perempuannya yang berusia 8 tahun sering menggaruk kepala. Pada pemeriksaan visual rambut, ditemukan kutu rambut hidup dan butiran telur putih yang menempel erat pada batang rambut (Pediculosis capitis).',
    question: 'Pedikulosida topikal lini pertama yang paling aman, efektif, dan dapat diserahkan apoteker untuk swamedikasi pedikulosis adalah:',
    options: [
      { key: 'A', text: 'Lotion Permetrin 1% (dioleskan pada rambut basah yang telah dikeramas, diamkan 10 menit lalu dibilas, ulangi hari ke-7 hingga ke-9)' },
      { key: 'B', text: 'Salep 2-4 belerang' },
      { key: 'C', text: 'Krim Hidrokortison 1%' },
      { key: 'D', text: 'Krim Ketokonazol 2%' },
      { key: 'E', text: 'Minyak tanah' }
    ],
    correctAnswer: 'A',
    explanation: 'PERMETRIN LOTION 1% adalah terapi lini pertama pilihan utama untuk kutu rambut (Pediculosis capitis) menurut AAP (American Academy of Pediatrics) dan CDC. Cara penggunaan: aplikasikan pada rambut dan kulit kepala yang telah dicuci bersih dengan sampo tanpa kondisioner, biarkan selama 10 menit, lalu bilas air bersih. Aplikasi harus diulang 7-9 hari kemudian untuk membunuh nimfa kutu yang baru menetas dari telur yang tersisa.',
    clinicalReference: 'AAP Clinical Report: Head Lice & CDC Parasites - Lice',
    difficulty: 'Mudah'
  },
  {
    id: 'q-497',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang santri pesantren berusia 16 tahun datang ke apotek dengan keluhan gatal hebat terutama pada malam hari di sela-sela jari tangan, pergelangan tangan, dan lipatan ketiak. Terlihat lesi kanalikuli (terowongan kecil kemerahan) dengan papul dan ekskoriasi. Teman sekamarnya juga mengalami keluhan serupa (Skabies / Kudis).',
    question: 'Skabisida topikal lini pertama baku emas apakah yang harus diberikan apoteker beserta instruksi cara pemakaiannya?',
    options: [
      { key: 'A', text: 'Krim Permetrin 5%, dioleskan merata ke seluruh tubuh dari leher hingga ujung jari kaki, didiamkan selama 8-14 jam (semalam) sebelum dibilas, dan diulang 7 hari kemudian' },
      { key: 'B', text: 'Krim Permetrin 1%, dioleskan hanya pada sela jari selama 10 menit' },
      { key: 'C', text: 'Salep Gentamisin dioleskan 3 kali sehari' },
      { key: 'D', text: 'Krim Betametason 0,1% dioleskan tebal' },
      { key: 'E', text: 'Bedak Salisil tabur setiap mandi' }
    ],
    correctAnswer: 'A',
    explanation: 'KRIM PERMETRIN 5% adalah skabisida lini pertama (gold standard). Aturan pemakaian yang benar: dioleskan merata ke SELURUH KULIT TUBUH DARI BAWAH DAGU / LEHER HINGGA TELAPAK KAKI (termasuk sela jari, ketiak, umbilikus, dan genitalia), didiamkan selama 8-14 JAM (idealnya semalam saat tidur), lalu dibilas bersih saat mandi pagi. Pengobatan diulang 7 hari kemudian untuk memutus siklus hidup tungau Sarcoptes scabiei. Seluruh anggota keluarga/kontak erat harus diobati serentak, dan pakaian/sprei dicuci air panas (> 60°C).',
    clinicalReference: 'CDC Parasites - Scabies Treatment & Panduan Praktik Klinis PERDOSKI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-498',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang wanita 24 tahun datang ke apotek mencari kontrasepsi darurat oral setelah mengalami kegagalan kondom (robek) saat berhubungan intim 24 jam yang lalu. Pasien sedang tidak ingin hamil.',
    question: 'Regimen kontrasepsi darurat oral tunggal manakah yang dapat diserahkan apoteker dengan efikasi tertinggi jika diminum dalam kurun waktu 72 jam pasca-sanggama?',
    options: [
      { key: 'A', text: 'Levonorgestrel 1,5 mg tablet dosis tunggal' },
      { key: 'B', text: 'Etinilestradiol 50 mcg 10 tablet sekaligus' },
      { key: 'C', text: 'Medroksiprogesteron asetat injeksi IM' },
      { key: 'D', text: 'Pil KB kombinasi diminum 1 tablet saja' },
      { key: 'E', text: 'Misoprostol 200 mcg oral' }
    ],
    correctAnswer: 'A',
    explanation: 'LEVONORGESTREL 1,5 mg tablet dosis tunggal (atau 0,75 mg dua tablet berselang 12 jam) adalah metode kontrasepsi darurat oral pilihan utama menurut WHO dan CDC. Obat ini bekerja terutama dengan menghambat atau menunda ovulasi dan pengeluaran sel telur, serta mengentalkan lendir serviks jika dikonsumsi dalam jendela waktu 72 jam (3 hari) pasca-sanggama tanpa pelindung. Obat ini tidak memiliki efek aborsi jika implantasi sudah terjadi.',
    clinicalReference: 'WHO Fact Sheet: Emergency Contraception & CDC Selected Practice Recommendations for Contraceptive Use',
    difficulty: 'Mudah'
  },
  {
    id: 'q-499',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang pasien datang ke apotek ingin membeli Omeprazole kapsul tanpa resep dokter untuk mengatasi keluhan nyeri ulu hati dan sensasi terbakar di dada (heartburn) yang sering kambuh.',
    question: 'Berdasarkan Kepmenkes No. 924/1993 tentang Daftar Obat Wajib Apotek No. 2 (DOWA 2), berapakah batas jumlah maksimal sediaan Omeprazole 20 mg yang boleh diserahkan apoteker tanpa resep dokter?',
    options: [
      { key: 'A', text: 'Maksimal 7 tablet/kapsul' },
      { key: 'B', text: 'Maksimal 20 tablet/kapsul' },
      { key: 'C', text: 'Maksimal 30 tablet/kapsul' },
      { key: 'D', text: 'Maksimal 10 tablet/kapsul' },
      { key: 'E', text: 'Tidak boleh diserahkan sama sekali' }
    ],
    correctAnswer: 'A',
    explanation: 'Sesuai Keputusan Menteri Kesehatan RI No. 924/MENKES/PER/X/1993 tentang DOWA No. 2, OMEPRAZOLE 20 mg dapat diserahkan oleh apoteker di apotek tanpa resep dokter dengan jumlah MAKSIMAL 7 TABLET/KAPSUL untuk pengobatan jangka pendek gangguan asam lambung.',
    clinicalReference: 'Keputusan Menteri Kesehatan RI No. 924/MENKES/PER/X/1993 tentang DOWA No. 2',
    difficulty: 'Mudah'
  },
  {
    id: 'q-500',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang pasien wanita mengeluhkan nyeri haid (dismenorea primer) dan ingin membeli Asam Mefenamat 500 mg di apotek tanpa resep dokter.',
    question: 'Berdasarkan Kepmenkes No. 347/1990 tentang DOWA No. 1, berapakah batas jumlah maksimal tablet Asam Mefenamat yang boleh diserahkan apoteker?',
    options: [
      { key: 'A', text: 'Maksimal 20 tablet' },
      { key: 'B', text: 'Maksimal 10 tablet' },
      { key: 'C', text: 'Maksimal 7 tablet' },
      { key: 'D', text: 'Maksimal 30 tablet' },
      { key: 'E', text: 'Maksimal 5 tablet' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Keputusan Menteri Kesehatan No. 347/MenKes/SK/VII/1990 tentang Obat Wajib Apotek No. 1 (DOWA 1), ASAM MEFENAMAT dapat diserahkan tanpa resep dokter untuk indikasi nyeri akut ringan-sedang dengan jumlah MAKSIMAL 20 TABLET.',
    clinicalReference: 'Kepmenkes No. 347/MenKes/SK/VII/1990 tentang Daftar Obat Wajib Apotek No. 1',
    difficulty: 'Mudah'
  },
  {
    id: 'q-501',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang pasien pria dewasa datang ke apotek ingin membeli Ranitidin 150 mg untuk dispepsia ringan tanpa resep dokter.',
    question: 'Berdasarkan Kepmenkes No. 1176/1999 tentang DOWA No. 3, berapakah batas maksimal penyerahan tablet Ranitidin 150 mg oleh apoteker?',
    options: [
      { key: 'A', text: 'Maksimal 10 tablet' },
      { key: 'B', text: 'Maksimal 20 tablet' },
      { key: 'C', text: 'Maksimal 7 tablet' },
      { key: 'D', text: 'Maksimal 30 tablet' },
      { key: 'E', text: 'Maksimal 14 tablet' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Kepmenkes No. 1176/MENKES/SK/X/1999 tentang DOWA No. 3, obat antagonis reseptor H2 RANITIDIN 150 mg dapat diserahkan oleh apoteker tanpa resep dokter dengan jumlah MAKSIMAL 10 TABLET.',
    clinicalReference: 'Kepmenkes No. 1176/MENKES/SK/X/1999 tentang DOWA No. 3',
    difficulty: 'Mudah'
  },
  {
    id: 'q-502',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang ibu membawa bayi berusia 7 bulan dengan bercak-bercak putih tebal menyerupai dadih susu di lidah dan mukosa pipi dalam yang sulit dikikis dan mudah berdarah (Kandidiasis Oral / Oral Thrush). Bayi tampak rewel saat menyusu.',
    question: 'Antijamur suspensi oral topikal lini pertama manakah yang aman dan diindikasikan untuk oral thrush pada bayi?',
    options: [
      { key: 'A', text: 'Suspensi Nistatin 100.000 IU/mL (diteteskan ke dalam mulut 1-2 mL 4 kali sehari setelah menyusu, ditahan sebentar lalu ditelan)' },
      { key: 'B', text: 'Tablet Flukonazol 200 mg digerus' },
      { key: 'C', text: 'Gentian violet 5% dioleskan tebal' },
      { key: 'D', text: 'Suspensi Griseofulvin' },
      { key: 'E', text: 'Krim Ketokonazol topikal kulit' }
    ],
    correctAnswer: 'A',
    explanation: 'SUSPENSI NISTATIN ORAL (100.000 IU/mL) adalah terapi lini pertama yang aman untuk kandidiasis oral (oral thrush) pada bayi dan anak. Nistatin bekerja lokal pada mukosa oral karena tidak diabsorpsi secara sistemik dari saluran cerna. Edukasi penting: bersihkan rongga mulut bayi dari sisa susu terlebih dahulu, teteskan suspensi pada area lesi secara merata, dan jangan langsung disusui/diberi minum minimal 15-30 menit setelah aplikasi.',
    clinicalReference: 'IDSA Clinical Practice Guideline for the Management of Candidiasis & Buku Saku Pelayanan Kesehatan Anak di RS Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-503',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang atlet pelari mengeluhkan kulit telapak dan sela jari kaki yang gatal, bersisik, mengelupas, dan maserasi putih berbau (Tinea pedis / Kutu Air). Pasien membeli krim Mikonazol Nitrat 2% di apotek.',
    question: 'Berapa lama instruksi durasi minimal penggunaan krim antijamur topikal yang harus diedukasikan apoteker untuk mencegah kekambuhan infeksi jamur dermatofita?',
    options: [
      { key: 'A', text: 'Dioleskan 2 kali sehari secara teratur dan dilanjutkan minimal 1 hingga 2 minggu SETELAH semua gejala klinis dan gatal hilang sepenuhnya' },
      { key: 'B', text: 'Segera hentikan begitu rasa gatal hilang pada hari ke-2' },
      { key: 'C', text: 'Hanya dioleskan saat kaki terasa gatal saja' },
      { key: 'D', text: 'Cukup digunakan selama 3 hari berturut-turut' },
      { key: 'E', text: 'Digunakan terus menerus selama 1 tahun tanpa henti' }
    ],
    correctAnswer: 'A',
    explanation: 'Pada infeksi jamur dermatofitosis (Tinea pedis, Tinea kruris, Tinea korporis), elemen hifa jamur masih dapat bertahan di lapisan stratum korneum yang lebih dalam meskipun gejala gatal dan eritema telah mereda. Untuk mencegah relaps (kekambuhan), apoteker WAJIB mengedukasi pasien agar melanjutkan pengolesan krim antijamur MINIMAL 1 HINGGA 2 MINGGU SETELAH SELURUH LESI KULIT SEMBUH SECARA KLINIS.',
    clinicalReference: 'Panduan Praktik Klinis Dokter Spesialis Kulit dan Kelamin Indonesia (PERDOSKI) & British Association of Dermatologists',
    difficulty: 'Mudah'
  },
  {
    id: 'q-504',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang pasien datang ke apotek mengeluhkan batuk kering menggelitik yang sangat mengganggu tidur malam tanpa disertai dahak sama sekali pasca-sembuh dari flu ringan.',
    question: 'Zat antitusif supresan batuk sentral non-narkotik manakah yang bekerja menekan refleks batuk di medula oblongata yang tepat direkomendasikan apoteker?',
    options: [
      { key: 'A', text: 'Dekstrometorfan HBr' },
      { key: 'B', text: 'Gliseril Guaiakolat (Guaifenesin)' },
      { key: 'C', text: 'Ambroksol HCl' },
      { key: 'D', text: 'Bromheksin HCl' },
      { key: 'E', text: 'Asetilsistein' }
    ],
    correctAnswer: 'A',
    explanation: 'DEKSTROMETORFAN HBr adalah antitusif sentral non-narkotik yang bekerja menaikkan ambang rangsang refleks batuk di pusat batuk medula oblongata batang otak. Obat ini sangat tepat untuk batuk kering (non-produktif). Sebaliknya, Gliseril guaiakolat, Ambroksol, Bromheksin, dan Asetilsistein adalah ekspektoran dan mukolitik yang diindikasikan untuk batuk berdahak (produktif).',
    clinicalReference: 'AHFS Drug Information & ISO Farmakoterapi',
    difficulty: 'Mudah'
  },
  {
    id: 'q-505',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang pasien datang ke apotek dengan keluhan batuk berdahak kental yang sangat sulit dikeluarkan dari saluran napas.',
    question: 'Obat mukolitik manakah yang bekerja memutus ikatan disulfida (-S-S-) pada mukoprotein sputum sehingga viskositas dahak menurun drastis dan mudah dibatukkan?',
    options: [
      { key: 'A', text: 'Asetilsistein' },
      { key: 'B', text: 'Dekstrometorfan HBr' },
      { key: 'C', text: 'Noskapin' },
      { key: 'D', text: 'Difenidramin HCl' },
      { key: 'E', text: 'Kodein Fosfat' }
    ],
    correctAnswer: 'A',
    explanation: 'ASETILSISTEIN (N-Acetylcysteine / NAC) adalah agen MUKOLITIK sejati yang memiliki gugus sulfhidril (-SH) bebas. Gugus ini memutus jembatan ikatan disulfida antar-rantai mukoprotein pada mukus kental, mengubah struktur gel sputum menjadi cair sehingga mudah diekspektorasikan keluar dari cabang bronkus.',
    clinicalReference: 'Goodman & Gilman’s The Pharmacological Basis of Therapeutics & GOLD Guidelines',
    difficulty: 'Mudah'
  },
  {
    id: 'q-506',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang wanita hamil 10 minggu mengeluhkan mual muntah di pagi hari (morning sickness) yang mengganggu asupan nutrisinya.',
    question: 'Kombinasi mikronutrien dan antihistamin generasi pertama lini pertama yang direkomendasikan ACOG untuk mual muntah kehamilan adalah:',
    options: [
      { key: 'A', text: 'Piridoksin (Vitamin B6) 10-25 mg dikombinasikan dengan Doksilamin suksinat' },
      { key: 'B', text: 'Ondansetron 8 mg 3 kali sehari' },
      { key: 'C', text: 'Metoklopramid bolus IV' },
      { key: 'D', text: 'Misoprostol oral' },
      { key: 'E', text: 'Domperidon tablet 20 mg' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan pedoman ACOG (American College of Obstetricians and Gynecologists), farmakoterapi lini pertama yang terbukti aman dan efektif untuk mual muntah kehamilan (Nausea and Vomiting of Pregnancy / NVP) adalah PIRIDOKSIN (Vitamin B6) monoterapi atau dikombinasikan dengan antihistamin DOKSILAMIN SUKSINAT. Ondansetron dihindari pada trimester pertama awal jika memungkinkan karena sedikit peningkatan risiko celah bibir/palatum janin.',
    clinicalReference: 'ACOG Practice Bulletin No. 189: Nausea and Vomiting of Pregnancy',
    difficulty: 'Mudah'
  },
  {
    id: 'q-507',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang pasien dewasa datang ke apotek mengeluhkan diare cair akut 4 kali dalam 6 jam terakhir setelah makan makanan pedas di warung tenda, tanpa demam, tanpa lendir, dan tanpa darah (diare non-spesifik).',
    question: 'Antidiare agonis reseptor mu-opioid usus perifer yang bekerja memperlambat motilitas peristaltik dan meningkatkan waktu transit feses adalah:',
    options: [
      { key: 'A', text: 'Loperamid HCl' },
      { key: 'B', text: 'Oralit glukosa-elektrolit' },
      { key: 'C', text: 'Siprofloksasin' },
      { key: 'D', text: 'Attapulgit' },
      { key: 'E', text: 'Karbon aktif' }
    ],
    correctAnswer: 'A',
    explanation: 'LOPERAMID HCl adalah antimotilitas derivat opioid sintetis yang bekerja secara selektif pada reseptor mu-opioid di pleksus saraf mienterik dinding usus, menurunkan motilitas peristaltik propulsif, memperpanjang waktu transit fekal, dan meningkatkan tonus sfingter ani. Loperamid KONTRAINDIKASI pada diare berdarah (disentri) atau infeksi invasif toksik.',
    clinicalReference: 'ACG Clinical Guideline: Diagnosis, Treatment, and Prevention of Acute Diarrheal Infections in Adults',
    difficulty: 'Mudah'
  },
  {
    id: 'q-508',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang ibu membawa balita 2 tahun yang mengalami diare cair akut sejak 1 hari lalu ke apotek. Apoteker memberikan oralit dan suplemen Zinc dispersible tablet 20 mg.',
    question: 'Berapa hari suplementasi tablet Zinc harus dihabiskan oleh anak sesuai rekomendasi baku WHO dan Kemenkes RI?',
    options: [
      { key: 'A', text: 'Wajib diminum rutin selama 10 hari berturut-turut meskipun diare sudah berhenti' },
      { key: 'B', text: 'Hanya diminum selama anak buang air besar cair (1-2 hari)' },
      { key: 'C', text: 'Diminum selama 3 hari saja' },
      { key: 'D', text: 'Diminum selama 1 bulan penuh' },
      { key: 'E', text: 'Cukup diminum 1 kali dosis tunggal' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan pedoman baku LINTAS DIARE Kemenkes RI dan WHO, suplementasi ZINC tablet dispersibel (dosis 10 mg/hari untuk bayi < 6 bulan, dan 20 mg/hari untuk anak >= 6 bulan) HARUS DIBERIKAN RUTIN SELAMA 10 HARI PENUH, meskipun diare sudah sembuh dalam 1-2 hari pertama. Hal ini mutlak diperlukan untuk meregenerasi epitel mukosa usus yang rusak serta meningkatkan imunitas anak guna mencegah kekambuhan diare dalam 2-3 bulan ke depan.',
    clinicalReference: 'Buku Saku Manajemen Diare Balita Kemenkes RI & WHO Diarrhoea Management Guidelines',
    difficulty: 'Mudah'
  },
  {
    id: 'q-509',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang pasien wanita pekerja kantoran 30 tahun mengeluhkan konstipasi fungsional karena kurang asupan serat dan air. Apoteker merekomendasikan laksatif osmotik sintetik yang difermentasi oleh flora usus menjadi asam organik rantai pendek.',
    question: 'Laksatif osmotik sirup disakarida manakah yang aman dan bekerja dengan meningkatkan volume air feses di lumen kolon?',
    options: [
      { key: 'A', text: 'Laktulosa sirup' },
      { key: 'B', text: 'Bisakodil tablet salut enterik' },
      { key: 'C', text: 'Minyak jarak (Castor oil)' },
      { key: 'D', text: 'Senna tablet' },
      { key: 'E', text: 'Gliserin supositoria' }
    ],
    correctAnswer: 'A',
    explanation: 'LAKTULOSA adalah disakarida sintetis (galaktosa-fruktosa) yang tidak diserap di usus halus. Di kolon, laktulosa diuraikan oleh bakteri kolon menjadi asam lemak rantai pendek (asam laktat, asam asetat), menciptakan gradien tekanan osmotik tinggi yang menarik air ke dalam lumen feses sehingga melunakkan konsistensi feses dan merangsang peristaltik usus.',
    clinicalReference: 'AGA Clinical Practice Guideline on the Medical Management of Constipation',
    difficulty: 'Mudah'
  },
  {
    id: 'q-510',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang pasien datang ke apotek membeli obat tetes telinga yang mengandung Karbamid Peroksida untuk membersihkan gumpalan kotoran telinga yang keras dan menyumbat liang telinga (Serumen Obsturans).',
    question: 'Instruksi pemakaian dan mekanisme kerja karbamid peroksida tetes telinga yang tepat diedukasikan apoteker adalah:',
    options: [
      { key: 'A', text: 'Teteskan ke liang telinga, tahan posisi kepala miring selama beberapa menit; karbamid peroksida melepaskan gelembung oksigen mikroaktif yang melunakkan dan menghancurkan gumpalan lilin serumen' },
      { key: 'B', text: 'Teteskan sambil mengorek telinga dengan lidi kapas tajam secara bersamaan' },
      { key: 'C', text: 'Obat harus ditelan bersama air hangat' },
      { key: 'D', text: 'Hanya boleh digunakan jika gendang telinga robek atau perforasi' },
      { key: 'E', text: 'Langsung dibilas dengan alkohol 70% sesaat setelah diteteskan' }
    ],
    correctAnswer: 'A',
    explanation: 'Karbamid peroksida adalah agen serumenolitik yang ketika berkontak dengan kelembaban melepaskan hidrogen peroksida dan urea. Pelepasan gelembung oksigen efervesen mikroaktif melunakkan, melarutkan, dan mengfragmentasi sumbatan serumen yang mengeras sehingga mudah dikeluarkan dengan irigasi air hangat. Obat ini KONTRAINDIKASI jika dicurigai ada perforasi membran timpani.',
    clinicalReference: 'American Academy of Otolaryngology - Head and Neck Surgery (AAO-HNS) Clinical Practice Guideline: Cerumen Impaction',
    difficulty: 'Mudah'
  },
  {
    id: 'q-511',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang pasien wanita mengeluhkan mata merah, terasa berpasir, dan kering akibat terlalu lama menatap layar komputer di ruang ber-AC (Sindrom Mata Kering / Dry Eye Syndrome).',
    question: 'Obat tetes mata bebas tanpa vasokonstriktor manakah yang tepat direkomendasikan apoteker untuk melumasi permukaan kornea?',
    options: [
      { key: 'A', text: 'Tetes mata Air Mata Buatan (Artificial Tears mengandung Natrium Hialuronat atau Karboksimetilselulosa / CMC)' },
      { key: 'B', text: 'Tetes mata Tetrahidrozolin HCl' },
      { key: 'C', text: 'Tetes mata Gentamisin sulfat' },
      { key: 'D', text: 'Tetes mata Deksametason natrium fosfat' },
      { key: 'E', text: 'Tetes mata Kloramfenikol' }
    ],
    correctAnswer: 'A',
    explanation: 'AIR MATA BUATAN (Artificial Tears) yang mengandung polimer lubrikan seperti Natrium Hialuronat, Karboksimetilselulosa (CMC), atau Hidroksipropil Metilselulosa (HPMC) adalah terapi pilihan lini pertama untuk mata kering. Obat tetes yang mengandung dekongestan vasokonstriktor (Tetrahidrozolin) TIDAK BOLEH digunakan untuk mata kering karena dapat memicu efek rebound hyperemia dan memperburuk kekeringan kornea.',
    clinicalReference: 'Tear Film & Ocular Surface Society (TFOS) Dry Eye Workshop (DEWS II) Guidelines',
    difficulty: 'Mudah'
  },
  {
    id: 'q-512',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang pasien mengeluhkan hidung tersumbat total akibat rinitis alergi dan meminta semprot hidung Oksimetazolin HCl di apotek. Apoteker memberikan edukasi mengenai batas maksimal durasi penggunaan semprot hidung dekongestan topikal.',
    question: 'Mengapa semprot hidung Oksimetazolin tidak boleh digunakan lebih dari 3 hingga 5 hari berturut-turut?',
    options: [
      { key: 'A', text: 'Mencegah terjadinya Rhinitis Medicamentosa (rebound vasodilation sumbatan hidung yang lebih parah akibat takifilaksis reseptor alfa-adrenergik)' },
      { key: 'B', text: 'Mencegah terjadinya polip hidung instan' },
      { key: 'C', text: 'Mencegah perforasi septum nasal dalam 24 jam' },
      { key: 'D', text: 'Mencegah anosmia permanen genetik' },
      { key: 'E', text: 'Mencegah pneumonia aspirasi' }
    ],
    correctAnswer: 'A',
    explanation: 'Penggunaan dekongestan topikal nasal (Oksimetazolin, Xilometazolin) lebih dari 3-5 hari berturut-turut menyebabkan penurunan regulasi (down-regulation) dan desensitisasi reseptor alfa-adrenergik mukosa hidung (takifilaksis). Ketika efek obat habis, terjadi vasodilatasi rebound masif mukosa hidung yang disebut RHINITIS MEDICAMENTOSA, menyebabkan hidung tersumbat kronis yang resisten.',
    clinicalReference: 'International Consensus Statement on Allergy and Rhinology: Allergic Rhinitis (ICAR-Allergic Rhinitis)',
    difficulty: 'Mudah'
  },
  {
    id: 'q-513',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang wanita 26 tahun mengeluhkan keputihan kental putih bergumpal seperti keju (cottage-cheese discharge) disertai rasa gatal dan panas terbakar hebat di area vulvovaginal (Kandidiasis Vulvovaginal). Pasien tidak sedang hamil.',
    question: 'Antijamur azol ovula sediaan topikal manakah yang dapat direkomendasikan apoteker untuk terapi intravaginal?',
    options: [
      { key: 'A', text: 'Klotrimazol tablet vagina / ovula 500 mg dosis tunggal sebelum tidur (atau Klotrimazol 100 mg selama 6 hari)' },
      { key: 'B', text: 'Metronidazol ovula 500 mg' },
      { key: 'C', text: 'Amoksisilin kapsul' },
      { key: 'D', text: 'Asiklovir krim' },
      { key: 'E', text: 'Permetrin krim vagina' }
    ],
    correctAnswer: 'A',
    explanation: 'KLOTRIMAZOL ovula / tablet vaginal (500 mg dosis tunggal atau 100 mg malam hari selama 6 hari) atau Mikonazol ovula adalah terapi lini pertama yang sangat efektif untuk Kandidiasis Vulvovaginal tanpa komplikasi. Metronidazol diindikasikan untuk Vaginosis Bakterialis atau Trikomoniasis, bukan untuk infeksi jamur Candida.',
    clinicalReference: 'CDC Sexually Transmitted Infections Treatment Guidelines: Vulvovaginal Candidiasis',
    difficulty: 'Mudah'
  },
  {
    id: 'q-514',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang pasien datang ke apotek dengan keluhan rasa panas dan nyeri terbakar saat buang air kecil (disuria) setelah berhubungan intim. Pasien meminta antibiotik Amoksisilin tanpa resep dokter.',
    question: 'Tindakan profesional apakah yang wajib diambil oleh apoteker komunitas?',
    options: [
      { key: 'A', text: 'Menolak penyerahan antibiotik tanpa resep dokter, menjelaskan bahaya resistensi antimikroba, menganjurkan hidrasi banyak air putih, dan merujuk pasien ke dokter untuk urinalisis' },
      { key: 'B', text: 'Memberikan Amoksisilin 500 mg 1 strip (10 tablet)' },
      { key: 'C', text: 'Mengganti dengan Siprofloksasin 500 mg' },
      { key: 'D', text: 'Memberikan Deksametason tablet' },
      { key: 'E', text: 'Memberikan jamu pegal linu kemasan sachet' }
    ],
    correctAnswer: 'A',
    explanation: 'Antibiotik adalah OBAT KERAS yang TIDAK TERMASUK dalam Daftar Obat Wajib Apotek (DOWA) untuk indikasi infeksi saluran kemih sistemik. Penyerahan antibiotik tanpa resep melanggar Permenkes No. 73/2016 dan berkontribusi langsung terhadap resistensi bakteri antimikroba (AMR). Apoteker wajib mengedukasi pasien, menyarankan hidrasi cairan yang adekuat, dan segera merujuk pasien ke fasilitas pelayanan kesehatan untuk pemeriksaan penunjang (urinalisis/kultur urin).',
    clinicalReference: 'Permenkes No. 73 Tahun 2016 tentang Standar Pelayanan Kefarmasian di Apotek & Pedoman Pengendalian Resistensi Antimikroba Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-515',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang pasien mengeluhkan nyeri kepala tegang (tension headache) dan ingin membeli kombinasi Parasetamol dan Kafein di apotek.',
    question: 'Apakah rasionalitas farmakologis penambahan Kafein 50-65 mg pada tablet kombinasi parasetamol?',
    options: [
      { key: 'A', text: 'Kafein bekerja sebagai ajuvan analgesik yang mempercepat absorpsi parasetamol dan memicu vasokonstriksi pembuluh darah serebral sehingga meningkatkan efikasi analgesik sekitar 40%' },
      { key: 'B', text: 'Kafein berfungsi sebagai pengawet tablet' },
      { key: 'C', text: 'Kafein menurunkan eliminasi parasetamol di ginjal' },
      { key: 'D', text: 'Kafein menghilangkan efek hepatotoksik parasetamol' },
      { key: 'E', text: 'Kafein merangsang nafsu makan' }
    ],
    correctAnswer: 'A',
    explanation: 'KAFEIN (50-65 mg per dosis) bertindak sebagai ajuvan analgesik sinergis. Kafein mempercepat absorpsi analgesik di saluran cerna dan memicu vasokonstriksi pembuluh darah kranial melalui blokade reseptor adenosin, meningkatkan potensi peredaan nyeri parasetamol atau asetosal hingga sekitar 40% pada nyeri kepala tipe tegang dan migrain.',
    clinicalReference: 'Cochrane Database of Systematic Reviews: Caffeine as an analgesic adjuvant for acute pain in adults',
    difficulty: 'Mudah'
  },
  {
    id: 'q-516',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang pasien penderita asma datang ke apotek untuk menebus inhaler pereda Salbutamol MDI. Apoteker melakukan penilaian teknik penggunaan inhaler dan mendapati pasien sering menyemprotkan obat tanpa koordinasi napas yang pas.',
    question: 'Alat bantu tambahan (inhalation aid device) apakah yang direkomendasikan apoteker untuk mengatasi masalah koordinasi hisapan tangan-mulut dan meningkatkan deposisi obat ke paru-paru?',
    options: [
      { key: 'A', text: 'Spacer (Valved Holding Chamber)' },
      { key: 'B', text: 'Peak Flow Meter' },
      { key: 'C', text: 'Spirometer portabel' },
      { key: 'D', text: 'Sungkup oksigen Venturi' },
      { key: 'E', text: 'Plester plasebo' }
    ],
    correctAnswer: 'A',
    explanation: 'SPACER (Valved Holding Chamber) adalah tabung perantara yang dipasangkan pada mouthpiece inhaler aerosol bertekanan (pMDI). Spacer menahan suspensi aerosol dalam bilik chamber sehingga pasien dapat menghirup partikel obat secara perlahan dan dalam tanpa memerlukan koordinasi ketat antara menekan kanister inhaler dengan menarik napas, serta mengurangi deposisi obat di orofaring.',
    clinicalReference: 'GINA 2024 Global Strategy for Asthma Management and Prevention',
    difficulty: 'Mudah'
  },
  {
    id: 'q-517',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang pasien pria dewasa mengeluhkan benjolan wasir di anus yang keluar saat BAB namun masih dapat masuk kembali secara spontan (Hemoroid Interna Derajat 2) disertai rasa perih dan gatal.',
    question: 'Bentuk sediaan dan cara penggunaan sediaan obat antihemoroid topikal lokal yang paling tepat diedukasikan apoteker adalah:',
    options: [
      { key: 'A', text: 'Supositoria rektal dimasukkan ke dalam lubang anus malam hari menjelang tidur setelah buang air besar' },
      { key: 'B', text: 'Supositoria rektal ditelan bersama air' },
      { key: 'C', text: 'Krim antihemoroid diminum 2 sendok teh' },
      { key: 'D', text: 'Enema fosfat diinjeksikan subkutan' },
      { key: 'E', text: 'Tablet salut enterik dilarutkan ke air rendaman' }
    ],
    correctAnswer: 'A',
    explanation: 'Untuk hemoroid interna derajat 1-2, SUPOSITORIA REKTAL adalah sediaan pilihan utama. Edukasi pemakaian: cuci tangan, buka pembungkus supositoria, pasien berbaring miring dengan satu lutut ditekuk (posisi Sims), masukkan bagian ujung supositoria yang meruncing sedalam 2-3 cm ke dalam sfingter anus, dan pertahankan posisi berbaring selama 10-15 menit agar basis supositoria meleleh dan zat aktif kontak maksimal dengan pleksus hemoroidalis.',
    clinicalReference: 'ASCRS Clinical Practice Guidelines for the Management of Hemorrhoids',
    difficulty: 'Mudah'
  },
  {
    id: 'q-518',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang ibu datang ke apotek ingin membeli suplemen Vitamin A kapsul untuk anaknya yang berusia 18 bulan dalam program Bulan Kapsul Vitamin A nasional Kemenkes RI.',
    question: 'Warna kapsul dan dosis Vitamin A manakah yang ditujukan untuk anak usia 12 hingga 59 bulan?',
    options: [
      { key: 'A', text: 'Kapsul Merah (dosis 200.000 IU)' },
      { key: 'B', text: 'Kapsul Biru (dosis 100.000 IU)' },
      { key: 'C', text: 'Kapsul Kuning (dosis 50.000 IU)' },
      { key: 'D', text: 'Kapsul Hijau (dosis 20.000 IU)' },
      { key: 'E', text: 'Kapsul Putih (dosis 10.000 IU)' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan program nasional Kemenkes RI: KAPSUL MERAH (dosis 200.000 IU) diberikan untuk anak balita usia 12-59 bulan dan ibu nifas; sedangkan KAPSUL BIRU (dosis 100.000 IU) diberikan untuk bayi usia 6-11 bulan, dibagikan serentak setiap bulan Februari dan Agustus di Posyandu/Puskesmas.',
    clinicalReference: 'Panduan Manajemen Suplementasi Vitamin A Kemenkes RI & WHO Guidelines',
    difficulty: 'Mudah'
  },
  {
    id: 'q-519',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang pasien penderita ulkus lambung kronis yang mengonsumsi Sukralfat suspensi datang ke apotek mengeluhkan obatnya tidak bekerja optimal karena diminum bersamaan dengan makan siang dan antasida.',
    question: 'Edukasi cara minum suspensi Sukralfat yang benar menurut prinsip biofarmasetika adalah:',
    options: [
      { key: 'A', text: 'Diminum saat lambung kosong (minimal 1 jam sebelum makan atau 2 jam setelah makan), dan beri jeda minimal 1-2 jam dengan antasida' },
      { key: 'B', text: 'Diminum bersamaan dengan suapan makanan berlemak' },
      { key: 'C', text: 'Dicampur langsung ke dalam antasida cair' },
      { key: 'D', text: 'Diminum hanya setelah makan malam kenyang' },
      { key: 'E', text: 'Dilarutkan dalam susu sapi murni' }
    ],
    correctAnswer: 'A',
    explanation: 'SUKRALFAT membutuhkan suasana asam lambung (pH < 4) untuk mengalami polimerisasi silang membentuk gel/pasta kental yang menempel kuat melapisi kawah luka ulkus mukosa lambung. Jika diminum bersama makanan atau bersamaan dengan antasida yang menetralkan asam, proses polimerisasi protektif ini terhambat. Oleh karena itu, sukralfat HARUS diminum saat perut kosong (1 jam a.c.) dan berjarak minimal 1-2 jam dari antasida.',
    clinicalReference: 'Goodman & Gilman’s Pharmacological Basis of Therapeutics & AHFS',
    difficulty: 'Mudah'
  },
  {
    id: 'q-520',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang pasien wanita 22 tahun mengeluhkan jerawat meradang papulopustular di area wajah (Acne Vulgaris derajat ringan-sedang). Pasien membeli gel Benzoil Peroksida 2,5% di apotek.',
    question: 'Edukasi pemakaian dan efek samping awal apakah yang wajib disampaikan apoteker kepada pasien?',
    options: [
      { key: 'A', text: 'Oleskan tipis pada area berjerawat malam hari setelah mencuci muka; sensasi kulit kering, kemerahan ringan, dan mengelupas di awal pemakaian adalah normal; gunakan tabir surya di siang hari dan hati-hati dapat memutihkan serat kain/pakaian' },
      { key: 'B', text: 'Oleskan tebal ke seluruh wajah 5 kali sehari' },
      { key: 'C', text: 'Obat ini harus ditelan sebelum makan' },
      { key: 'D', text: 'Dapat langsung dioleskan pada luka terbuka' },
      { key: 'E', text: 'Tidak perlu menggunakan pelembab sama sekali' }
    ],
    correctAnswer: 'A',
    explanation: 'BENZOIL PEROKSIDA bekerja melepaskan radikal bebas oksigen aktif yang bersifat bakterisidal terhadap Cutibacterium acnes dan bersifat keratolitik ringan. Pasien harus diedukasikan mengenai efek samping adaptasi berupa kulit kering dan eritema ringan pada minggu-minggu awal, anjuran menggunakan sunscreen (karena fotosensitivitas), serta sifat zatnya yang dapat melunturkan/memutihkan warna kain (bleaching effect pada handuk/baju).',
    clinicalReference: 'AAD Guidelines of Care for the Management of Acne Vulgaris',
    difficulty: 'Mudah'
  },
  {
    id: 'q-521',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang pasien datang ke apotek ingin membeli sediaan Salep Mata Kloramfenikol steril untuk iritasi matanya. Apoteker memberikan konseling mengenai Beyond Use Date (BUD) sediaan salep mata setelah kemasan dibuka.',
    question: 'Berapakah batas waktu maksimal penggunaan (BUD) salep mata multi-dose konvensional yang mengandung pengawet setelah segel wadah pertama kali dibuka?',
    options: [
      { key: 'A', text: 'Maksimal 28 hari (4 minggu) setelah kemasan dibuka' },
      { key: 'B', text: 'Hingga tanggal kedaluwarsa pabrik tercapai (2 tahun)' },
      { key: 'C', text: 'Maksimal 24 jam' },
      { key: 'D', text: 'Maksimal 6 bulan' },
      { key: 'E', text: 'Hanya boleh dipakai 3 hari' }
    ],
    correctAnswer: 'A',
    explanation: 'Sesuai standar Farmakope Indonesia VI dan USP <795>/<797>, sediaan obat mata (tetes mata dan salep mata) multi-dose yang mengandung antimikroba pengawet memiliki batas waktu Beyond Use Date (BUD) MAKSIMAL 28 HARI (4 MINGGU) setelah segel kemasan dibuka, karena risiko kontaminasi mikroba patogen dari lingkungan luar selama pemakaian berulang.',
    clinicalReference: 'Farmakope Indonesia Edisi VI & USP General Chapters on Beyond-Use Dating',
    difficulty: 'Mudah'
  },
  {
    id: 'q-522',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang pasien wanita mengeluhkan nyeri perut bawah melilit dan kram saat awal menstruasi. Pasien meminta obat antispasmodik di apotek.',
    question: 'Obat antispasmodik relaksan otot polos saluran cerna dan genitourinari golongan antikolinergik manakah yang tepat diberikan apoteker?',
    options: [
      { key: 'A', text: 'Hiosin Butilbromida (Hyoscine Butylbromide / Skopolamin)' },
      { key: 'B', text: 'Loperamid' },
      { key: 'C', text: 'Metoklopramid' },
      { key: 'D', text: 'Domperidon' },
      { key: 'E', text: 'Ondansetron' }
    ],
    correctAnswer: 'A',
    explanation: 'HIOSIN BUTILBROMIDA (Hyoscine-N-butylbromide) adalah turunan amonium kuaterner semisintetik dari skopolamin yang bekerja sebagai antispasmodik dengan memblokir reseptor muskarinik pada otot polos viseral traktus gastrointestinal, empedu, dan genitourinari. Obat ini merelaksasikan spasme kram perut dan kram uterus tanpa menembus sawar darah otak.',
    clinicalReference: 'AHFS Drug Information & Martindale: The Complete Drug Reference',
    difficulty: 'Mudah'
  },
  {
    id: 'q-523',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang pasien yang akan bepergian naik kapal feri laut selama 6 jam datang ke apotek untuk membeli obat pencegah mabuk perjalanan (Motion Sickness).',
    question: 'Obat antihistamin generasi pertama dengan efek sedatif dan antivertigo manakah yang paling efektif diminum 30-60 menit sebelum keberangkatan?',
    options: [
      { key: 'A', text: 'Dimenhidrinat 50 mg' },
      { key: 'B', text: 'Setirizin 10 mg' },
      { key: 'C', text: 'Loratadin 10 mg' },
      { key: 'D', text: 'Feksofenadin 180 mg' },
      { key: 'E', text: 'Parasetamol 500 mg' }
    ],
    correctAnswer: 'A',
    explanation: 'DIMENHIDRINAT (garam teoklat dari difenhidramin) adalah antihistamin H1 generasi pertama yang menembus susunan saraf pusat dan memiliki aktivitas antikolinergik kuat di nukleus vestibularis batang otak, sangat efektif mencegah mabuk perjalanan (motion sickness) jika diminum 30-60 menit SEBELUM perjalanan dimulai. Antihistamin generasi kedua (seperti Setirizin, Loratadin) TIDAK EFEKTIF untuk motion sickness karena tidak menembus sawar darah otak.',
    clinicalReference: 'CDC Yellow Book: Health Information for International Travel & Goodman & Gilman',
    difficulty: 'Mudah'
  },
  {
    id: 'q-524',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang kakek penderita radang sendi gout yang mengonsumsi Allopurinol 100 mg/hari datang ke apotek ingin membeli obat batuk hitam (OBH sirup) yang mengandung Amonium Klorida dan Gliseril Guaiakolat.',
    question: 'Peringatan apakah yang harus diperhatikan apoteker terkait kandungan sirup OBH pada pasien yang memiliki riwayat gangguan fungsi hepar atau ginjal berat?',
    options: [
      { key: 'A', text: 'Amonium klorida dapat dimetabolisme menjadi urea di hepar dan melepaskan ion hidrogen/klorida yang berisiko memicu asidosis metabolik serta memperberat beban ginjal' },
      { key: 'B', text: 'Gliseril guaiakolat memicu kristaluria gout' },
      { key: 'C', text: 'OBH menyebabkan hipertensi maligna' },
      { key: 'D', text: 'Amonium klorida menghancurkan trombosit darah' },
      { key: 'E', text: 'Sirup OBH mengikat asam urat darah secara permanen' }
    ],
    correctAnswer: 'A',
    explanation: 'Amonium Klorida dalam sirup OBH bekerja sebagai ekspektoran refleks mukosa lambung. Di hepar, ion amonium dikonversi menjadi urea dan melepaskan ion H+ serta Cl- bebas yang dapat memicu atau memperparah ASIDOSIS METABOLIK hiperkloremik pada pasien dengan insufisiensi ginjal atau kegagalan hati berat.',
    clinicalReference: 'Farmakope Indonesia VI & Martindale: The Complete Drug Reference',
    difficulty: 'Sedang'
  },
  {
    id: 'q-525',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang pasien datang ke apotek membawa resep krim racikan yang mengandung Hidrokortison 1% dan Asam Salisilat 2% untuk mengatasi dermatitis eksim kering hiperkeratotik.',
    question: 'Apakah fungsi penambahan Asam Salisilat 2% dalam kombinasi dengan kortikosteroid topikal tersebut?',
    options: [
      { key: 'A', text: 'Sebagai agen keratolitik yang melarutkan semen antar-korneosit stratum korneum sehingga meningkatkan penetrasi dan absorpsi hidrokortison ke dermis' },
      { key: 'B', text: 'Sebagai pengawet antimikroba sediaan krim' },
      { key: 'C', text: 'Sebagai antioksidan pencegah tengik' },
      { key: 'D', text: 'Sebagai emulgator penstabil emulsi' },
      { key: 'E', text: 'Sebagai pewangi sediaan' }
    ],
    correctAnswer: 'A',
    explanation: 'Asam Salisilat pada konsentrasi 1-3% bertindak sebagai KERATOLITIK ringan yang mengelupas keratin tanduk stratum korneum yang menebal pada lesi eksim kronis. Efek keratolitik ini membuka sawar epidermal kulit sehingga sangat meningkatkan bioavailabilitas penetrasi transdermal kortikosteroid (Hidrokortison) ke dalam jaringan dermis yang meradang.',
    clinicalReference: 'British Association of Dermatologists Guidelines for the Management of Eczema',
    difficulty: 'Mudah'
  },
  {
    id: 'q-526',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang ibu membeli termometer digital dan sirup Parasetamol untuk anak balitanya yang demam tinggi 38,5°C pasca-imunisasi DPT. Berat badan anak 12 kg.',
    question: 'Berapakah dosis sekali minum Parasetamol sirup (120 mg/5 mL) yang tepat untuk anak tersebut berdasarkan dosis standar pediatrik (10 - 15 mg/kgBB/kali)?',
    options: [
      { key: 'A', text: '1 sendok takar (5 mL = 120 mg) hingga 1,5 sendok takar (7,5 mL = 180 mg) tiap 4-6 jam' },
      { key: 'B', text: 'setengah sendok teh (2,5 mL = 60 mg) saja' },
      { key: 'C', text: '3 sendok takar penuh (15 mL = 360 mg)' },
      { key: 'D', text: '1 tetes pipet (0,5 mL)' },
      { key: 'E', text: '1 botol sekaligus' }
    ],
    correctAnswer: 'A',
    explanation: 'Dosis baku parasetamol pediatrik adalah 10 - 15 mg/kgBB per kali pemberian. Untuk anak dengan berat badan 12 kg: Dosis minimal = 12 kg x 10 mg = 120 mg (setara 5 mL atau 1 sendok takar); Dosis maksimal = 12 kg x 15 mg = 180 mg (setara 7,5 mL atau 1,5 sendok takar). Diberikan setiap 4-6 jam jika demam, maksimal 4-5 kali dalam 24 jam.',
    clinicalReference: 'WHO Pocket Book of Hospital Care for Children & Formularium Spesialistik IDAI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-527',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang pasien datang ke apotek membawa resep tetes telinga Ofloksasin untuk otitis eksterna difusa. Apoteker memberikan konseling cara meneteskan obat tetes telinga pada pasien dewasa.',
    question: 'Bagaimanakah teknik penarikan daun telinga (pinna) yang benar saat meneteskan obat tetes telinga pada orang dewasa?',
    options: [
      { key: 'A', text: 'Tarik daun telinga ke arah ATAS dan BELAKANG untuk meluruskan liang telinga' },
      { key: 'B', text: 'Tarik daun telinga ke arah BAWAH dan BELAKANG' },
      { key: 'C', text: 'Tarik daun telinga ke arah DEPAN menutupi pipi' },
      { key: 'D', text: 'Tekan tragus kuat-kuat sebelum meneteskan' },
      { key: 'E', text: 'Tidak perlu menarik daun telinga sama sekali' }
    ],
    correctAnswer: 'A',
    explanation: 'Secara anatomi liang telinga: Pada ORANG DEWASA dan anak di atas 3 tahun, daun telinga (pinna) ditarik ke arah ATAS DAN BELAKANG (upward and backward) untuk meluruskan liang telinga auditori eksternal agar cairan tetes dapat mengalir lancar menuju membran timpani. Sebaliknya, pada BAYI dan anak di bawah 3 tahun, daun telinga ditarik ke arah BAWAH DAN BELAKANG (downward and backward).',
    clinicalReference: 'CDC & Clinical Skills in Pharmacy Practice',
    difficulty: 'Mudah'
  },
  {
    id: 'q-528',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang pasien lansia datang ke apotek ingin membeli suplemen Glukosamin dan Kondroitin Sulfat untuk meredakan nyeri lutut osteoartritis kronisnya. Pasien memiliki riwayat alergi anafilaksis berat terhadap makanan laut (seafood/udang/kepiting).',
    question: 'Peringatan keamanan apakah yang wajib disampaikan apoteker terkait bahan baku asal glukosamin konvensional?',
    options: [
      { key: 'A', text: 'Sebagian besar bahan baku glukosamin diekstraksi dari cangkang kitin hewan krustasea (udang dan kepiting) sehingga berisiko mencetuskan reaksi alergi silang yang berbahaya' },
      { key: 'B', text: 'Glukosamin memicu gagal ginjal anuria' },
      { key: 'C', text: 'Glukosamin menurunkan tekanan darah drastis' },
      { key: 'D', text: 'Glukosamin tidak memiliki hubungan dengan alergi makanan' },
      { key: 'E', text: 'Glukosamin menyebabkan perdarahan lambung spontan' }
    ],
    correctAnswer: 'A',
    explanation: 'Suplemen Glukosamin komersial secara umum diproduksi melalui hidrolisis kitin dari eksoskeleton (cangkang) hewan laut krustasea laut seperti kepiting, lobster, dan udang. Pasien dengan riwayat hipersensitivitas anafilaktoid terhadap makanan laut berisiko mengalami reaksi alergi berat akibat sisa protein krustasea. Apoteker harus menyarankan produk glukosamin vegetarian berbasis fermentasi jagung atau alternatif lain.',
    clinicalReference: 'Natural Medicines Comprehensive Database & OARSI Guidelines for the Management of Osteoarthritis',
    difficulty: 'Mudah'
  },
  {
    id: 'q-529',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang pasien datang ke apotek membeli koyo hangat antinyeri (Methyl Salicylate + Capsaicin). Pasien bertanya apakah aman menempelkan bantal pemanas listrik (heating pad) di atas koyo tersebut agar lebih hangat.',
    question: 'Edukasi bahaya apakah yang harus diperingatkan apoteker mengenai penempelan bantal pemanas di atas koyo metil salisilat?',
    options: [
      { key: 'A', text: 'Pemberian panas eksternal meningkatkan vasodilatasi kulit dan absorpsi transdermal metil salisilat secara masif ke sirkulasi sistemik sehingga memicu luka bakar kimiawi derajat dua dan intoksikasi salisilat sistemik fatal' },
      { key: 'B', text: 'Pemanas akan menginaktivasi khasiat koyo menjadi tawar' },
      { key: 'C', text: 'Pemanas menyebabkan koyo meleleh menjadi racun di udara' },
      { key: 'D', text: 'Aman dan sangat dianjurkan untuk mempercepat kesembuhan' },
      { key: 'E', text: 'Pemanas akan mengubah kapsaisin menjadi glukosa' }
    ],
    correctAnswer: 'A',
    explanation: 'FDA telah mengeluarkan peringatan publik resmi mengenai bahaya luka bakar kimiawi derajat dua dan tiga serta toksisitas salisilat sistemik (tinnitus, asidosis metabolik) jika plester/koyo atau balsam yang mengandung Metil Salisilat dan Mentol/Kapsaisin dipanaskan dengan heating pad atau dibalut rapat (occlusion). Panas dan oklusi meningkatkan permeabilitas kulit dan penetrasi salisilat secara drastis.',
    clinicalReference: 'FDA Drug Safety Communication: Rare cases of serious burns with the use of over-the-counter topical muscle and joint pain relievers',
    difficulty: 'Sedang'
  },
  {
    id: 'q-530',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang pasien penderita diabetes melitus tipe 1 datang ke apotek menebus insulin pen reguler dan glargine. Pasien bertanya tentang cara penyimpanan insulin pen yang SEDANG DIGUNAKAN (in-use pen).',
    question: 'Bagaimanakah instruksi penyimpanan yang benar untuk insulin pen yang sedang aktif digunakan sehari-hari?',
    options: [
      { key: 'A', text: 'Simpan pada suhu ruangan sejuk (15°C - 30°C) terlindung dari panas dan cahaya matahari langsung, tahan hingga 28 hari (tidak perlu disimpan di lemari pendingin kulkas)' },
      { key: 'B', text: 'Wajib disimpan di dalam freezer sampai beku' },
      { key: 'C', text: 'Harus selalu disimpan di rak pintu kulkas sebelum dan sesudah disuntikkan' },
      { key: 'D', text: 'Hanya tahan selama 24 jam' },
      { key: 'E', text: 'Harus dijemur di bawah sinar matahari pagi' }
    ],
    correctAnswer: 'A',
    explanation: 'Insulin pen yang BELUM DIBUKA (unopened) wajib disimpan di lemari pendingin (suhu 2°C - 8°C) dan tahan hingga tanggal kedaluwarsa pabrik. Namun, insulin pen yang SEDANG AKTIF DIGUNAKAN (in-use) disimpan pada SUHU RUANGAN SEJUK (15°C - 30°C) selama maksimal 28 HARI (atau hingga 42/56 hari untuk beberapa analog tertentu). Menyuntikkan insulin yang dingin dari kulkas menimbulkan nyeri dan iritasi lokal pada jaringan subkutan.',
    clinicalReference: 'ADA Standards of Care in Diabetes & Pedoman Pengelolaan dan Penyimpanan Insulin Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-531',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang pasien menyuntikkan insulin subkutan setiap hari pada satu titik yang sama di perut sekitar pusar tanpa pernah berpindah tempat selama 6 bulan. Pada pemeriksaan teraba benjolan bantalan lemak yang mengeras di bawah kulit (Lipohipertrofi).',
    question: 'Apakah dampak farmakokinetik klinis dari lipohipertrofi terhadap kontrol gula darah dan apa edukasi pencegahannya?',
    options: [
      { key: 'A', text: 'Penyerapan insulin menjadi tidak menentu dan lambat memicu fluktuasi glukosa darah tak terkontrol; edukasikan rotasi lokasi penyuntikan minimal berjarak 1-2 cm dari titik sebelumnya' },
      { key: 'B', text: 'Penyerapan insulin menjadi sangat cepat memicu hipoglikemia permanen' },
      { key: 'C', text: 'Insulin rusak total dan tidak ada yang terserap' },
      { key: 'D', text: 'Benjolan lemak akan berubah menjadi sel ganas karsinoma' },
      { key: 'E', text: 'Tidak ada pengaruh bermakna terhadap absorbsi' }
    ],
    correctAnswer: 'A',
    explanation: 'Penyuntikan insulin berulang kali pada lokasi subkutan yang sama memicu pembentukan LIPOHIPERTROFI (akumulasi jaringan fibrotik dan adiposit berlebih akibat efek anabolik lokal insulin). Jaringan ini menyebabkan absorpsi insulin menjadi sangat tidak terduga dan bervariasi (erratic absorption), memicu episode hiperglikemia yang tak jelas sebabnya berseling dengan hipoglikemia mendadak. Pasien wajib melakukan ROTASI LOKASI PENYUNTIKAN secara sistematis.',
    clinicalReference: 'Forum for Injection Technique and Therapy Expert Recommendations (FITTER) International & ADA',
    difficulty: 'Mudah'
  },
  {
    id: 'q-532',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang pasien datang ke apotek ingin membeli tablet hisap antiseptik tenggorokan Dequalinium Klorida untuk mengatasi sakit tenggorokan ringan tanpa demam.',
    question: 'Bagaimanakah instruksi penggunaan sediaan tablet hisap (lozenges/troches) yang benar agar mencapai efikasi optimal?',
    options: [
      { key: 'A', text: 'Hisap perlahan di dalam rongga mulut hingga larut habis secara bertahap, jangan dikunyah atau ditelan utuh, dan hindari makan/minum minimal 15-30 menit setelahnya' },
      { key: 'B', text: 'Kunyahlah dengan cepat menggunakan gigi geraham lalu telan bersama air' },
      { key: 'C', text: 'Telanlah utuh dengan satu gelas air dingin' },
      { key: 'D', text: 'Larutkan terlebih dahulu ke dalam air mendidih' },
      { key: 'E', text: 'Gunakan sebagai obat kumur lalu buang segera' }
    ],
    correctAnswer: 'A',
    explanation: 'Tablet hisap (lozenges) diformulasikan untuk melepaskan zat aktif antiseptik/anestetik lokal secara perlahan dan berkesinambungan di rongga orofaring. Pasien harus mengisap tablet perlahan hingga larut sempurna di mulut tanpa mengunyah atau menelannya utuh, serta menghindari makan atau minum sesaat setelahnya agar zat aktif tidak terbilas dari mukosa tenggorokan.',
    clinicalReference: 'Remington: The Science and Practice of Pharmacy & ISO Farmakoterapi',
    difficulty: 'Mudah'
  },
  {
    id: 'q-533',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang wanita 28 tahun yang sedang mengonsumsi pil kontrasepsi oral kombinasi (Etinilestradiol + Levonorgestrel) datang ke apotek dengan keluhan lupa meminum 1 butir pil aktif hormon pada jadwal kemarin malam (keterlambatan sekitar 16 jam).',
    question: 'Edukasi tindakan apakah yang harus disampaikan apoteker sesuai panduan baku rekomendasi kontrasepsi WHO?',
    options: [
      { key: 'A', text: 'Segera minum 1 pil yang terlupa saat teringat sekarang, dan minum pil berikutnya sesuai jadwal biasa (walaupun berarti meminum 2 pil dalam 1 hari); tidak diperlukan metode kontrasepsi cadangan' },
      { key: 'B', text: 'Buang sisa bungkus pil dan mulai dari bungkus baru bulan depan' },
      { key: 'C', text: 'Hentikan pil selama 7 hari penuh' },
      { key: 'D', text: 'Minum 5 pil sekaligus sekarang' },
      { key: 'E', text: 'Ganti langsung dengan kontrasepsi mantap' }
    ],
    correctAnswer: 'A',
    explanation: 'Sesuai pedoman WHO dan CDC: Jika pasien LUPA 1 PIL HORMON AKTIF (< 48 jam sejak jadwal minum yang terlewat): Pasien harus SEGERA MEMINUM PIL YANG TERLUPA SAAT TERINGAT (meskipun harus meminum 2 pil dalam satu hari yang sama), lalu lanjutkan pil berikutnya sesuai jadwal rutin. Pasien tetap terlindungi dari kehamilan dan TIDAK memerlukan metode kontrasepsi penghalang cadangan (seperti kondom).',
    clinicalReference: 'CDC Selected Practice Recommendations for Contraceptive Use & WHO Selected Practice Recommendations',
    difficulty: 'Mudah'
  }
];
