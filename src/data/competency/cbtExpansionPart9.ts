import { ExamQuestion } from '../competencyExamData';

/**
 * Bank Soal Kasus Vignette CBT Bagian 9 (Nomor q-386 s/d q-430)
 * Rekonstruksi Ujian Nasional Resmi UKMPPAI (Apoteker) & UKTVK (Vokasi TTK)
 * 45 Soal Kasus Nyata Komprehensif Lintas 4 Domain Blueprint Nasional
 */
export const CBT_EXPANSION_PART_9: ExamQuestion[] = [
  // =========================================================================
  // 🩺 FARMASI KLINIS & FARMAKOTERAPI LANJUTAN
  // =========================================================================
  {
    id: 'q-386',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien laki-laki berusia 58 tahun dengan gagal jantung fraksi ejeksi menurun (HFrEF) mengonsumsi Spironolakton 25 mg/hari, Bisoprolol 5 mg/hari, dan Kandesartan 16 mg/hari. Setelah 6 bulan, pasien mengeluhkan nyeri dan pembesaran payudara bilateral (ginekomastia).',
    question: 'Obat antagonis reseptor mineralokortikoid (MRA) selektif manakah yang paling tepat direkomendasikan apoteker sebagai pengganti Spironolakton untuk mengatasi ginekomastia tersebut?',
    options: [
      { key: 'A', text: 'Eplerenon 25 - 50 mg/hari' },
      { key: 'B', text: 'Furosemid 40 mg/hari' },
      { key: 'C', text: 'Hidroklorotiazid 25 mg/hari' },
      { key: 'D', text: 'Amilorid 5 mg/hari' },
      { key: 'E', text: 'Asetazolamid 250 mg/hari' }
    ],
    correctAnswer: 'A',
    explanation: 'Spironolakton adalah antagonis aldosteron non-selektif yang juga berikatan dengan reseptor androgen dan progesteron, sehingga memicu efek samping endokrin berupa ginekomastia, mastodinia (nyeri payudara), dan disfungsi ereksi pada pria (sekitar 10% pasien). EPLERENON adalah Mineralocorticoid Receptor Antagonist (MRA) generasi kedua yang SANGAT SELEKTIF terhadap reseptor aldosteron dengan afinitas sangat rendah terhadap reseptor androgen/progesteron, sehingga TIDAK MENYEBABKAN GINEKOMASTIA dan merupakan alternatif lini pertama resmi.',
    clinicalReference: 'Pedoman Penatalaksanaan Gagal Jantung PERKI & ESC Heart Failure Guidelines',
    difficulty: 'Sedang'
  },
  {
    id: 'q-387',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien pria berusia 52 tahun dengan Hipertensi Resisten memiliki tekanan darah 158/98 mmHg meskipun telah patuh mengonsumsi 3 kombinasi obat antihipertensi dosis maksimal yang mencakup ACEI (Ramipril 10 mg), CCB (Amlodipin 10 mg), dan Diuretik Tiazid (Klortalidon 25 mg). Fungsi ginjal normal (eGFR 75 mL/min) dan Kalium serum 4,2 mEq/L.',
    question: 'Berdasarkan pedoman konsensus tata laksana hipertensi resisten (AHA dan PERKI), obat lini ke-4 manakah yang paling efektif ditambahkan ke dalam regimen terapi?',
    options: [
      { key: 'A', text: 'Spironolakton dosis rendah (25 - 50 mg/hari)' },
      { key: 'B', text: 'Propranolol 40 mg bid' },
      { key: 'C', text: 'Klonidin 0,15 mg bid' },
      { key: 'D', text: 'Doksazosin 2 mg/hari' },
      { key: 'E', text: 'Reserpin 0,25 mg/hari' }
    ],
    correctAnswer: 'A',
    explanation: 'Definisi Hipertensi Resisten adalah tekanan darah yang tetap berada di atas target (>= 140/90 mmHg) meskipun telah menggunakan 3 kelas antihipertensi berbeda dengan dosis optimal yang salah satunya adalah diuretik. Pedoman AHA/ACC dan PERKI merekomendasikan SPIRONOLAKTON DOSIS RENDAH (25-50 mg/hari) sebagai OBAT LINI KEEMPAT PILIHAN UTAMA. Uji klinis PATHWAY-2 membuktikan bahwa spironolakton secara signifikan lebih superior dibanding beta-blocker atau alfa-blocker dalam menurunkan tekanan darah pada hipertensi resisten yang didasari oleh retensi natrium terselubung.',
    clinicalReference: 'Management of Resistant Hypertension: A Scientific Statement From the American Heart Association (AHA) & Konsensus PERKI',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-388',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang pasien laki-laki berusia 35 tahun terdiagnosis Malaria Vivax tanpa komplikasi di puskesmas setelah pemeriksaan apusan darah tepi menemukan parasit Plasmodium vivax stadium trofozoit dan skizon.',
    question: 'Obat antimalaria golongan 8-aminokuinolin apakah yang WAJIB diminum selama 14 hari berturut-turut untuk membunuh stadium hipnozoit di sel hati guna mencegah kekambuhan (relaps)?',
    options: [
      { key: 'A', text: 'Primakuin 0,25 mg basa/kgBB/hari selama 14 hari' },
      { key: 'B', text: 'Dihidroartemisinin monoterapi' },
      { key: 'C', text: 'Klorokuin selama 3 hari saja' },
      { key: 'D', text: 'Kina sulfat selama 7 hari' },
      { key: 'E', text: 'Doksisiklin 100 mg selama 7 hari' }
    ],
    correctAnswer: 'A',
    explanation: 'Plasmodium vivax dan Plasmodium ovale memiliki bentuk dorman di sel parenkim hati yang disebut HIPNOZOIT, yang dapat mengalami reaktivasi berbulan-bulan hingga bertahun-tahun kemudian dan menyebabkan kekambuhan (relaps). PRIMAKUIN adalah satu-satunya obat hipnozoitosida jaringan yang wajib diberikan dengan dosis 0,25 mg basa/kgBB/hari SELAMA 14 HARI PENUH (dikombinasikan dengan DHP selama 3 hari pertama) untuk mengeradikasi seluruh hipnozoit hepar (anti-relapse therapy). Catatan: Skrining defisiensi G6PD dianjurkan untuk mencegah hemolisis masif.',
    clinicalReference: 'Pedoman Penatalaksanaan Kasus Malaria Kementerian Kesehatan RI & WHO Guidelines for Malaria',
    difficulty: 'Mudah'
  },
  {
    id: 'q-389',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien korban keracunan minuman keras oplosan yang mengandung Metanol dibawa ke IGD dalam kondisi asidosis metabolik berat (pH 7,05, anion gap tinggi), nafas Kussmaul, dan penurunan visus penglihatan berupa pandangan bersalju (snowstorm vision).',
    question: 'Antidotum spesifik manakah yang bekerja menghambat enzim alkohol dehidrogenase (ADH) secara kompetitif untuk mencegah konversi metanol menjadi asam format yang sangat toksik terhadap saraf mata?',
    options: [
      { key: 'A', text: 'Fomepizol IV (atau Etanol 10% IV/oral)' },
      { key: 'B', text: 'N-Asetilsistein IV' },
      { key: 'C', text: 'Atropin Sulfat IV' },
      { key: 'D', text: 'Nalokson IV' },
      { key: 'E', text: 'Piridoksin IV' }
    ],
    correctAnswer: 'A',
    explanation: 'Toksisitas metanol bukan disebabkan oleh metanol murni, melainkan oleh metabolitnya: Metanol dioksidasi oleh enzim ALKOHOL DEHIDROGENASE (ADH) menjadi formaldehida, lalu menjadi ASAM FORMAT yang sangat toksik dan memicu kebutaan permanen (kerusakan nervus optikus dan retina) serta asidosis metabolik fatal. FOMEPIZOL (4-metilpirazol) adalah inhibitor kompetitif kuat enzim alkohol dehidrogenase (afinitas 8000x lebih tinggi dari metanol) yang mencegah pembentukan asam format. Jika fomepizol tidak tersedia, ETANOL dapat digunakan karena memiliki afinitas 10-20x lebih tinggi dibanding metanol terhadap ADH.',
    clinicalReference: 'American Academy of Clinical Toxicology (AACT) Practice Guidelines on the Treatment of Methanol Poisoning',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-390',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang pasien DM tipe 1 yang menggunakan insulin mengalami episode hipoglikemia ringan di rumah dengan kadar glukosa darah kapiler 58 mg/dL. Pasien masih dalam keadaan sadar penuh, merasa gemetar, lapar, dan berkeringat dingin.',
    question: 'Berdasarkan "Aturan 15" (Rule of 15) tatalaksana hipoglikemia sadar ADA dan PERKENI, apakah tindakan awal yang paling tepat dilakukan?',
    options: [
      { key: 'A', text: 'Berikan 15 gram karbohidrat kerja cepat (misal: 1/2 cangkir jus buah atau 3-4 sendok teh gula pasir dilarutkan dalam air), tunggu 15 menit, lalu periksa ulang glukosa darah' },
      { key: 'B', text: 'Segera suntikkan Glukagon 1 mg intramuskular' },
      { key: 'C', text: 'Segera berikan makanan berlemak tinggi seperti 1 batang cokelat susu utuh' },
      { key: 'D', text: 'Suntikkan insulin tambahan 4 unit untuk menstabilkan hormon' },
      { key: 'E', text: 'Minum 1 liter air putih hangat dan tidur berbaring selama 1 jam' }
    ],
    correctAnswer: 'A',
    explanation: 'Pedoman ADA dan PERKENI menetapkan "ATURAN 15" (RULE OF 15) untuk hipoglikemia pada pasien sadar (GDS < 70 mg/dL): (1) Konsumsi 15 GRAM KARBOHIDRAT CEPAT SERAP / GLUKOSA MURNI (misal: 150-200 mL jus buah manis, 3-4 tablet glukosa, atau 1 sendok makan gula pasir / madu); (2) TUNGGU SELAMA 15 MENIT; (3) Cek ulang glukosa darah kapiler. Jika masih < 70 mg/dL, ulangi pemberian 15 gram karbohidrat lagi. Hindari makanan berlemak tinggi (seperti cokelat batangan/kue donat) karena lemak memperlambat pengosongan lambung dan absorpsi glukosa.',
    clinicalReference: 'ADA Standards of Care in Diabetes & Pedoman Pengelolaan Diabetes Mellitus PERKENI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-391',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien leukemia yang menerima kemoterapi induksi agresif mengalami Sindrom Lisis Tumor (Tumor Lysis Syndrome / TLS) yang ditandai dengan hiperurisemia berat (asam urat serum 14,5 mg/dL), hiperkalemia, dan hiperfosfatemia akibat lisis masif sel ganas.',
    question: 'Obat enzim rekombinan urat oksidase intravena manakah yang bekerja secara langsung mengubah asam urat yang sudah terbentuk menjadi alantoin yang sangat larut air dan mudah diekskresikan melalui urin?',
    options: [
      { key: 'A', text: 'Rasburikase' },
      { key: 'B', text: 'Alopurinol' },
      { key: 'C', text: 'Febuksostat' },
      { key: 'D', text: 'Probenesid' },
      { key: 'E', text: 'Peglotikase oral' }
    ],
    correctAnswer: 'A',
    explanation: 'Alopurinol dan Febuksostat hanya menghambat pembentukan asam urat baru melalui enzim xantin oksidase tetapi TIDAK DAPAT MENGURAIKAN asam urat yang sudah beredar di darah. RASBURIKASE adalah enzim urat oksidase rekombinan (recombinant urate oxidase) yang secara enzimatik MENGKATALISIS KONVERSI ASAM URAT MENJADI ALANTOIN. Alantoin memiliki kelarutan dalam air 5-10 kali lebih tinggi daripada asam urat, sehingga langsung diekskresi via ginjal tanpa mengkristal di tubulus, menjadikannya terapi baku emas untuk kegawatdaruratan Tumor Lysis Syndrome.',
    clinicalReference: 'Guidelines for the Management of Pediatric and Adult Tumor Lysis Syndrome & British Journal of Haematology',
    difficulty: 'Sedang'
  },
  {
    id: 'q-392',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang pasien wanita berusia 46 tahun datang ke poliklinik saraf dengan keluhan nyeri menusuk tajam seperti sengatan listrik paroksismal pada pipi kanan dan rahang bawah saat mengunyah atau menyikat gigi (Trigeminal Neuralgia).',
    question: 'Obat lini pertama pilihan utama manakah yang direkomendasikan untuk neuralgia trigeminal?',
    options: [
      { key: 'A', text: 'Karbamazepin 100 - 200 mg bid (titrasi bertahap)' },
      { key: 'B', text: 'Parasetamol 500 mg qid' },
      { key: 'C', text: 'Asam Mefenamat 500 mg tid' },
      { key: 'D', text: 'Ibuprofen 400 mg tid' },
      { key: 'E', text: 'Kodein 10 mg tid' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan pedoman American Academy of Neurology (AAN) dan European Academy of Neurology (EAN), KARBAMAZEPIN (dosis awal 100-200 mg dua kali sehari dititrasi hingga 400-1200 mg/hari) atau Okskarbazepin adalah terapi lini pertama baku emas untuk Trigeminal Neuralgia. Karbamazepin bekerja memblokade kanal natrium berpintu tegangan (voltage-gated sodium channels) pada membran serabut saraf trigeminus yang hiperaktif, menekan transmisi impuls nyeri paroksismal.',
    clinicalReference: 'AAN/EFNS Guideline on Trigeminal Neuralgia Management & BNF Guidelines',
    difficulty: 'Mudah'
  },

  // =========================================================================
  // 📋 MANAJEMEN, REGULASI & KONSELING FARMASI
  // =========================================================================
  {
    id: 'q-393',
    domainId: 'manajemen',
    targetExam: 'all',
    vignette: 'Pasien penderita Angina Pektoris stabil diresepkan tablet Nitrogliserin (NTG) 0,5 mg sublingual untuk mengatasi serangan nyeri dada akut di rumah.',
    question: 'Edukasi penyimpanan obat manakah yang WAJIB ditekankan apoteker saat menyerahkan tablet Nitrogliserin sublingual?',
    options: [
      { key: 'A', text: 'Simpan tetap di dalam botol kaca gelap aslinya, tutup rapat terlindung dari cahaya dan panas, dan buang 3 - 6 bulan setelah botol pertama kali dibuka' },
      { key: 'B', text: 'Pindahkan ke kotak pil harian plastik bening agar mudah diambil saat serangan' },
      { key: 'C', text: 'Simpan di freezer lemari es suhu -10°C' },
      { key: 'D', text: 'Boleh disimpan di saku celana dekat tubuh sepanjang hari' },
      { key: 'E', text: 'Larutkan seluruh tablet ke dalam air minum dan simpan di termos' }
    ],
    correctAnswer: 'A',
    explanation: 'Nitrogliserin (NTG) adalah senyawa yang sangat mudah menguap (volatil) dan terdegradasi oleh paparan cahaya, udara, panas, serta plastik polimer. Pasien WAJIB DIEDUKASI untuk: (1) Menyimpan tablet NTG TETAP DI DALAM WADAH BOTOL KACA GELAM AMBER ASLINYA dengan tutup ulir rapat; (2) JANGAN dipindahkan ke wadah plastik obat harian; (3) Hindari penyimpanan di saku celana (terpapar panas tubuh); (4) Segera ganti dan BUANG SISA TABLET SETELAH 3 - 6 BULAN SEJAK WADAH DIBUKA karena potensinya sudah hilang.',
    clinicalReference: 'AHA Guidelines for the Management of Patients With Chronic Stable Angina & USP Drug Information',
    difficulty: 'Mudah'
  },
  {
    id: 'q-394',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Dalam rangka pengawasan keamanan dan keaslian obat yang beredar di Indonesia, Badan POM menerapkan ketentuan pencantuman 2D Barcode (QR Code) pada kemasan obat sesuai Peraturan BPOM No. 22 Tahun 2022.',
    question: 'Apakah dua metode penerapan 2D Barcode yang ditetapkan oleh Badan POM untuk obat yang beredar di Indonesia?',
    options: [
      { key: 'A', text: 'Metode Otentikasi (Track and Trace) dan Metode Identifikasi' },
      { key: 'B', text: 'Metode Barcode Garis Hitam Putih dan Metode RFID chip' },
      { key: 'C', text: 'Metode Cetak Emboss dan Metode Cetak Tinta Simpatik' },
      { key: 'D', text: 'Metode Laser Hologram dan Metode Pita Cukai' },
      { key: 'E', text: 'Metode Serialisasi Ekspor dan Metode Domestik' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Peraturan Badan POM No. 22 Tahun 2022 tentang Penerapan 2D Barcode dalam Pengawasan Obat dan Makanan: Terdapat 2 metode: (1) METODE OTENTIKASI (Track and Trace serialisasi unik per kemasan): Wajib untuk obat keras, narkotika, psikotropika, dan produk biologi guna memverifikasi keaslian dan melacak peredaran obat hingga ke fasilitas pelayanan farmasi; (2) METODE IDENTIFIKASI (Nomor Izin Edar): Digunakan untuk obat bebas dan obat bebas terbatas untuk memudahkan konsumen membaca informasi produk melalui aplikasi BPOM Mobile.',
    clinicalReference: 'Peraturan Badan POM No. 22 Tahun 2022 tentang Penerapan 2D Barcode dalam Pengawasan Obat dan Makanan',
    difficulty: 'Sedang'
  },
  {
    id: 'q-395',
    domainId: 'manajemen',
    targetExam: 'all',
    vignette: 'Apoteker melakukan konseling penggunaan Inhaler Metered-Dose Inhaler (MDI) Salbutamol kepada seorang anak penderita asma. Untuk memaksimalkan deposisi obat ke saluran napas bawah dan mengurangi deposisi di orofaring, apoteker menganjurkan penggunaan alat bantu Spacer (Valved Holding Chamber).',
    question: 'Apakah manfaat klinis utama penggunaan alat Spacer pada penggunaan inhaler MDI?',
    options: [
      { key: 'A', text: 'Memperlambat kecepatan semprotan aerosol dan mengeliminasi ketergantungan koordinasi antara penekanan kanister dengan tarikan napas' },
      { key: 'B', text: 'Mengubah obat bentuk cair menjadi serbuk kering' },
      { key: 'C', text: 'Meningkatkan dosis obat hingga 5 kali lipat' },
      { key: 'D', text: 'Mencegah obat masuk ke paru-paru' },
      { key: 'E', text: 'Menggantikan kebutuhan gas propelan' }
    ],
    correctAnswer: 'A',
    explanation: 'Spacer (Valved Holding Chamber) adalah tabung perantara yang dipasang pada mouth-piece inhaler MDI. Manfaat utamanya: (1) MEMPERLAMBAT KECEPATAN AEROSOL sehingga partikel besar mengendap di dinding tabung, mengurangi impaksi obat di mulut dan tenggorokan (mencegah efek samping lokal sariawan/kandidiasis dan suara serak); (2) MENGHILANGKAN KEBUTUHAN KOORDINASI TANGAN-NAPAS yang rumit (sangat krusial untuk anak-anak dan lansia); serta (3) MENINGKATKAN FRAKSI DEPOSISI OBAT KE PARU-PARU HINGGA 2 KALI LIPAT.',
    clinicalReference: 'Global Initiative for Asthma (GINA) Report 2024 & Pedoman Diagnosis dan Penatalaksanaan Asma PDPI',
    difficulty: 'Mudah'
  },

  // =========================================================================
  // 📋 TEKNOLOGI FARMASI & DISPERSI KHUSUS
  // =========================================================================
  {
    id: 'q-396',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Industri farmasi memproduksi tablet lepas lambat Nifedipin menggunakan teknologi Sistem Pompa Osmotik (Oral Osmotic Delivery System / OROS). Tablet dilapisi membran semipermeabel yang memiliki lubang mikro (micro-orifice) yang dibuat dengan sinar laser.',
    question: 'Bagaimanakah mekanisme pelepasan zat aktif dari tablet sistem OROS di dalam saluran cerna?',
    options: [
      { key: 'A', text: 'Air dari lumen usus berdifusi menembus membran semipermeabel, memicu pengembangan lapisan osmotik polimer yang mendorong suspensi obat keluar secara konstan melalui lubang laser mengikuti kinetika orde nol' },
      { key: 'B', text: 'Membran tablet tererosi perlahan oleh enzim protease lambung' },
      { key: 'C', text: 'Obat terlepas melalui proses penghancuran cepat di lambung' },
      { key: 'D', text: 'Zat aktif menguap melalui pori-pori tablet akibat panas tubuh' },
      { key: 'E', text: 'Obat berdifusi bebas tanpa pengaruh tekanan osmotik' }
    ],
    correctAnswer: 'A',
    explanation: 'Teknologi OROS (Oral Osmotic System) adalah sistem penghantaran obat lepas terkontrol canggih: Tablet terdiri dari inti dwi-lapis (lapisan obat dan lapisan pendorong osmotik/push layer) yang diselubungi membran semipermeabel kaku dengan lubang mikroskopis hasil bor laser. Air masuk menembus membran karena gradien osmotik, menghidrasi push layer hingga MENGEMBANG DAN MEMOMPA LARUTAN/SUSPENSI OBAT KELUAR SECARA KONTINU DENGAN LAJU TETAP (Kinetika Pelepasan Orde Nol / Zero-Order) tanpa dipengaruhi oleh pH saluran cerna, motilitas usus, ataupun adanya makanan.',
    clinicalReference: 'Theeuwes F: Elementary Osmotic Pump & Modern Pharmaceutics Gilbert S. Banker',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-397',
    domainId: 'teknologi',
    targetExam: 'all',
    vignette: 'Berdasarkan Farmakope Indonesia Edisi VI, uji waktu hancur tablet dilakukan pada media air suhu 37°C ± 2°C menggunakan alat Disintegration Tester keranjang 6 tabung.',
    question: 'Berapakah batas waktu hancur standar untuk tablet tidak bersalut (uncoated tablets) menurut Farmakope Indonesia?',
    options: [
      { key: 'A', text: 'Tidak lebih dari 15 menit' },
      { key: 'B', text: 'Tidak lebih dari 30 menit' },
      { key: 'C', text: 'Tidak lebih dari 60 menit' },
      { key: 'D', text: 'Tidak lebih dari 5 menit' },
      { key: 'E', text: 'Tidak lebih dari 2 jam' }
    ],
    correctAnswer: 'A',
    explanation: 'Ketentuan Waktu Hancur Tablet menurut Farmakope Indonesia Edisi VI dan Farmakope Eropa: (1) TABLET TIDAK BERSALUT: TIDAK LEBIH DARI 15 MENIT; (2) Tablet Salut Selaput (Film-coated): Tidak lebih dari 30 menit; (3) Tablet Salut Gula (Dragee): Tidak lebih dari 60 menit; (4) Tablet Efervesen: Tidak lebih dari 5 menit dalam air suhu 15-25°C; (5) Tablet Salut Enterik: Tahan tidak hancur selama 60 menit dalam asam lambung (HCl 0,1 N) dan wajib hancur dalam dapar fosfat pH 6,8 dalam waktu < 60 menit.',
    clinicalReference: 'Farmakope Indonesia Edisi VI Lampiran <1251> Waktu Hancur & USP <701> Disintegration',
    difficulty: 'Mudah'
  },

  // =========================================================================
  // 🌿 FARMASI BAHAN ALAM & HERBAL FITOFARMAKA
  // =========================================================================
  {
    id: 'q-398',
    domainId: 'bahan_alam',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien yang rutin mengonsumsi obat antikoagulan Warfarin dan kontrasepsi oral meminum suplemen herbal St. John\'s Wort (Hypericum perforatum) untuk mengatasi rasa cemas dan depresi ringan. Beberapa minggu kemudian pasien mengalami penurunan drastis nilai INR dan terjadi kehamilan tidak direncanakan (kegagalan kontrasepsi).',
    question: 'Apakah mekanisme interaksi farmakokinetik utama antara St. John\'s Wort dengan obat-obatan tersebut?',
    options: [
      { key: 'A', text: 'Kandungan hiperforin menginduksi kuat enzim sitokrom CYP3A4 dan P-glikoprotein di usus dan hepar, mempercepat metabolisme dan klirens obat lain' },
      { key: 'B', text: 'Menghambat enzim CYP2C9 sehingga kadar obat meningkat' },
      { key: 'C', text: 'Mengkelat obat di saluran cerna membentuk senyawa tidak larut' },
      { key: 'D', text: 'Menghambat ekskresi ginjal dari metabolit aktif' },
      { key: 'E', text: 'Bersaing pada ikatan protein plasma albumin' }
    ],
    correctAnswer: 'A',
    explanation: 'ST. JOHN\'S WORT (Hypericum perforatum) mengandung senyawa HIPERFORIN yang merupakan ligan poten reseptor Pregnane X Receptor (PXR). Aktivasi PXR MENGINDUKSI EKSPRESI ENZIM SITOKROM CYP3A4, CYP2C9, DAN TRANSPORTER EFFLUX P-GLIKOPROTEIN (P-gp) SECARA MASIF. Akibatnya, metabolisme obat-obat substrat CYP3A4/P-gp (seperti Warfarin, kontrasepsi hormonal oral, Siklosporin, Digoksin, Antiretroviral HIV) meningkat pesat sehingga kadar obat dalam darah anjlok di bawah ambang terapeutik dan menyebabkan kegagalan terapi fatal.',
    clinicalReference: 'Stockley Herbal Drug Interactions & Natural Medicines Comprehensive Database',
    difficulty: 'Sedang'
  },
  {
    id: 'q-399',
    domainId: 'bahan_alam',
    targetExam: 'all',
    vignette: 'Dalam pengujian simplisia bawang putih (Allium sativum L.) yang berkhasiat sebagai antihipertensi dan antiaterosklerosis, senyawa aktif pembawa aroma khas belerang baru terbentuk ketika umbi bawang putih dimemarkan atau dihancurkan.',
    question: 'Senyawa aktif organosulfur apakah yang terbentuk dari prekursor aliin melalui katalisis enzim aliinase saat dinding sel bawang putih dihancurkan?',
    options: [
      { key: 'A', text: 'Alisin (Diallyl thiosulfinate)' },
      { key: 'B', text: 'Kuersetin' },
      { key: 'C', text: 'Piperin' },
      { key: 'D', text: 'Kurkumin' },
      { key: 'E', text: 'Eugenol' }
    ],
    correctAnswer: 'A',
    explanation: 'Pada umbi bawang putih utuh, senyawa ALIIN (S-allyl-L-cysteine sulfoxide) tersimpan terpisah di sitoplasma, sedangkan enzim ALIINASE berada di dalam vakuola sel. Ketika bawang putih dimemarkan, dipotong, atau dikunyah, dinding sel rusak sehingga enzim aliinase kontak dengan aliin dan dengan cepat mengubahnya menjadi ALISIN (Diallyl thiosulfinate). Alisin adalah senyawa organosulfur aktif biologis utama yang bertanggung jawab atas aroma menyengat khas serta efek antibakteri, penurunan agregasi trombosit, dan efek kardioprotektor.',
    clinicalReference: 'Heinrich M: Fundamentals of Pharmacognosy and Phytotherapy & WHO Monographs on Medicinal Plants',
    difficulty: 'Mudah'
  },
  {
    id: 'q-400',
    domainId: 'bahan_alam',
    targetExam: 'all',
    vignette: 'Suplemen beras ragi merah (Red Yeast Rice) yang dihasilkan dari fermentasi beras oleh kapang Monascus purpureus telah lama digunakan di masyarakat sebagai penurun kadar kolesterol darah.',
    question: 'Senyawa aktif apakah yang terkandung dalam beras ragi merah yang memiliki struktur kimia dan mekanisme kerja identik dengan obat statin penurun kolesterol Lovastatin?',
    options: [
      { key: 'A', text: 'Monakolin K' },
      { key: 'B', text: 'Ginkgolid B' },
      { key: 'C', text: 'Kapsaisin' },
      { key: 'D', text: 'Silimarin' },
      { key: 'E', text: 'Asiatikosida' }
    ],
    correctAnswer: 'A',
    explanation: 'Beras ragi merah (Red Yeast Rice / Angkak) menghasilkan pigmen merah dan metabolit sekunder MONAKOLIN K. Senyawa Monakolin K secara kimiawi IDENTIK DENGAN LOVASTATIN murni (inhibitor kompetitif enzim HMG-CoA Reduktase). Karena memiliki mekanisme dan struktur molekul yang sama persis dengan statin, suplemen ini efektif menurunkan kolesterol LDL namun juga membawa risiko efek samping myopathy dan rhabdomyolysis yang sama bila dikonsumsi tanpa pengawasan tenaga medis.',
    clinicalReference: 'EFSA Scientific Opinion on the substantiation of health claims related to monacolin K from red yeast rice & Goodman & Gilman',
    difficulty: 'Mudah'
  }
];
