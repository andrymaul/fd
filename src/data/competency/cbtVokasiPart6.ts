import { ExamQuestion } from '../competencyExamData';

/**
 * BANK SOAL CBT UKTVF / APDFI (UJI KOMPETENSI TENAGA VOKASI FARMASI D3)
 * BAGIAN 6: ALAT KESEHATAN (BMHP), MANAJEMEN LOGISTIK, RANTAI DINGIN (COLD CHAIN) & REGULASI FARMASI
 * Standar Nasional Asosiasi Pendidikan Diploma Farmasi Indonesia (APDFI) & Standar Pengelolaan Alkes & Perbekalan Farmasi
 */
export const CBT_VOKASI_PART_6: ExamQuestion[] = [
  {
    id: 'q-954',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Seorang perawat ruang rawat bedah meminta alat kesehatan ke depo farmasi untuk pasien retensi urin pasca operasi reseksi prostat (TURP). Perawat meminta kateter urin yang memiliki 3 percabangan (lumen): satu untuk aliran drainase urin, satu untuk balon fiksasi, dan satu untuk irigasi kandung kemih kontinu dengan larutan saline steril.',
    question: 'Apakah nama jenis kateter urin yang tepat diserahkan oleh TTK?',
    options: [
      { key: 'A', text: 'Folley Catheter 3-Way' },
      { key: 'B', text: 'Folley Catheter 2-Way' },
      { key: 'C', text: 'Nelaton Catheter' },
      { key: 'D', text: 'Condom Catheter' },
      { key: 'E', text: 'Suction Catheter' }
    ],
    correctAnswer: 'A',
    explanation: 'Folley Catheter 3-way (kateter folley 3 saluran) dirancang khusus untuk kasus yang memerlukan irigasi kandung kemih terus-menerus (continuous bladder irrigation), misalnya pasca operasi prostat guna mencegah terbentuknya bekuan darah (blood clot). Lumen 1 untuk drainase urin, lumen 2 untuk pengisian balon fiksasi (balon retensi), dan lumen 3 untuk jalur masuk cairan irigasi steril.',
    clinicalReference: 'Pedoman Pengelolaan Alat Kesehatan Kemenkes RI & Buku Ajar Keperawatan Medikal Bedah',
    difficulty: 'Mudah'
  },
  {
    id: 'q-955',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Dalam pengisian balon fiksasi pada Folley Catheter 2-way ukuran 16 Fr yang telah terpasang pada saluran kemih pasien, perawat meminta cairan steril untuk mengembangkan balon penahan tersebut.',
    question: 'Cairan steril manakah yang tepat digunakan untuk mengisi balon fiksasi kateter folley agar tidak terjadi kristalisasi penyumbat saluran balon?',
    options: [
      { key: 'A', text: 'Aqua Pro Injection (Air steril untuk injeksi)' },
      { key: 'B', text: 'Larutan Natrium Klorida (NaCl 0,9%)' },
      { key: 'C', text: 'Larutan Dextrose 5%' },
      { key: 'D', text: 'Larutan Povidone Iodine 10%' },
      { key: 'E', text: 'Alkohol 70%' }
    ],
    correctAnswer: 'A',
    explanation: 'Untuk mengembangkan balon fiksasi kateter folley, cairan yang direkomendasikan adalah air steril untuk injeksi (Aqua Pro Injection / Sterile Water). Penggunaan larutan garam fisiologis (NaCl 0,9%) tidak dianjurkan karena partikel garam natrium klorida dapat mengkristal seiring waktu di dalam saluran mikro kateter, sehingga balon sulit dikempiskan saat pelepasan kateter.',
    clinicalReference: 'Standar Operasional Prosedur Pemasangan Kateter Kemenkes RI & CDC Guidelines for CAUTI',
    difficulty: 'Sedang'
  },
  {
    id: 'q-956',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'TTK di gudang instalasi farmasi menerima paket pengiriman vaksin dari Dinas Kesehatan. Saat memeriksa indikator Vaccine Vial Monitor (VVM) pada botol vaksin Hepatitis B, TTK melihat persegi di dalam lingkaran berwarna lebih terang daripada lingkaran di luarnya, dan tanggal kadaluarsa masih 1 tahun lagi.',
    question: 'Bagaimanakah kategori status VVM tersebut dan tindakan apa yang harus diambil oleh TTK?',
    options: [
      { key: 'A', text: 'Kondisi A, vaksin berkualitas baik dan dapat digunakan' },
      { key: 'B', text: 'Kondisi B, vaksin harus segera dibuang' },
      { key: 'C', text: 'Kondisi C, vaksin rusak karena paparan panas' },
      { key: 'D', text: 'Kondisi D, vaksin tidak boleh digunakan' },
      { key: 'E', text: 'Kondisi kedaluwarsa, wajib dimusnahkan' }
    ],
    correctAnswer: 'A',
    explanation: 'Kriteria interpretasi VVM (Vaccine Vial Monitor): Kondisi A: Persegi di dalam lingkaran berwarna putih/jauh lebih terang daripada lingkaran luar (vaksin aman dipakai); Kondisi B: Persegi mulai menggelap tapi masih lebih terang dari lingkaran luar (vaksin boleh dipakai, prioritaskan segera digunakan lebih dulu); Kondisi C: Warna persegi sama gelap dengan lingkaran luar (vaksin rusak terpapar panas, JANGAN digunakan); Kondisi D: Persegi lebih gelap dari lingkaran luar (vaksin rusak parah, JANGAN digunakan).',
    clinicalReference: 'Pedoman Pengelolaan Vaksin & Rantai Dingin Kemenkes RI & WHO Vaccine Management',
    difficulty: 'Mudah'
  },
  {
    id: 'q-957',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Di gudang farmasi puskesmas, TTK sedang mengatur penyimpanan vaksin di dalam lemari es (chiller) bersuhu 2°C s/d 8°C. TTK memisahkan vaksin yang sensitif terhadap suhu beku (freeze-sensitive) agar tidak diletakkan dekat evaporator pendingin.',
    question: 'Manakah di antara vaksin berikut yang tergolong sensitif beku (Freeze-Sensitive) dan akan rusak/menggumpal bila terkena suhu di bawah 0°C?',
    options: [
      { key: 'A', text: 'Vaksin DPT-HB-Hib dan Tetanus Toksoid (TT)' },
      { key: 'B', text: 'Vaksin Polio Oral (bOPV)' },
      { key: 'C', text: 'Vaksin Campak Kering' },
      { key: 'D', text: 'Vaksin BCG serbuk kering' },
      { key: 'E', text: 'Vaksin Yellow Fever' }
    ],
    correctAnswer: 'A',
    explanation: 'Vaksin yang menggunakan adjuvan aluminium (seperti DPT, Hepatitis B, TT, DTP-HB-Hib, dan IPV) sangat sensitif terhadap pembekuan (freeze-sensitive). Pembekuan menyebabkan kristal adjuvan aluminium pecah dan membentuk gumpalan kasar yang menurunkan efikasi serta meningkatkan reaksi lokal bengkak steril pasca imunisasi. Sebaliknya, OPV dan Campak adalah vaksin heat-sensitive yang tahan beku.',
    clinicalReference: 'Petunjuk Teknis Imunisasi Dasar & Pengelolaan Cold Chain Kemenkes RI',
    difficulty: 'Sedang'
  },
  {
    id: 'q-958',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Untuk membuktikan apakah vaksin Hepatitis B yang dicurigai pernah membeku masih layak digunakan atau sudah rusak, TTK melakukan pengujian fisik sederhana dengan membandingkannya terhadap botol kontrol yang sengaja dibekukan.',
    question: 'Apakah nama uji kocok fisik tersebut dalam prosedur standar rantai dingin vaksin?',
    options: [
      { key: 'A', text: 'Shake Test (Uji Kocok Vaksin)' },
      { key: 'B', text: 'Sedimentation Rate Test' },
      { key: 'C', text: 'Turbidity Test' },
      { key: 'D', text: 'Centrifugation Test' },
      { key: 'E', text: 'Thermal Inactivation Test' },
    ],
    correctAnswer: 'A',
    explanation: 'Shake Test (Uji Kocok) adalah protokol baku WHO dan Kemenkes RI untuk memvalidasi kerusakan vaksin akibat pembekuan. Vaksin uji dan kontrol dibekukan lalu dicairkan, dikocok bersamaan, dan diamati kecepatan sedimentasinya. Jika vaksin uji mengendap sama cepat atau lebih cepat dari kontrol beku (> 15 menit), maka vaksin dinyatakan rusak dan tidak boleh digunakan.',
    clinicalReference: 'WHO Guidelines on Shake Test for Freeze-Sensitive Vaccines & Permenkes 12/2017',
    difficulty: 'Sedang'
  },
  {
    id: 'q-959',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Dalam pengadaan sediaan Narkotika (Morfin sulfat tablet dan Fentanil injeksi) dari Pedagang Besar Farmasi (PBF) Kimia Farma, TTK menyiapkan dokumen Surat Pesanan resmi.',
    question: 'Berapakah jumlah rangkap Surat Pesanan (SP) Narkotika model N-9 yang wajib dibuat dan berapa jenis obat narkotika maksimal per lembar SP?',
    options: [
      { key: 'A', text: 'Dibuat rangkap 4 dan hanya untuk 1 jenis obat narkotika' },
      { key: 'B', text: 'Dibuat rangkap 3 dan maksimal untuk 3 jenis obat' },
      { key: 'C', text: 'Dibuat rangkap 2 dan boleh untuk semua obat narkotika' },
      { key: 'D', text: 'Dibuat rangkap 5 dan hanya untuk 2 jenis obat' },
      { key: 'E', text: 'Dibuat rangkap 1 asli tanpa arsip' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Permenkes No. 3 Tahun 2015 dan Permenkes No. 5 Tahun 2023 tentang Peredaran, Penyimpanan, Pemusnahan, dan Pelaporan Narkotika, Psikotropika, dan Prekursor Farmasi: Surat Pesanan Narkotika wajib menggunakan formulir khusus N-9, dibuat sekurang-kurangnya rangkap 4 (empat), dan 1 lembar SP hanya boleh digunakan untuk memesan 1 (satu) jenis sediaan narkotika.',
    clinicalReference: 'Permenkes No. 3 Tahun 2015 & Permenkes No. 5 Tahun 2023',
    difficulty: 'Mudah'
  },
  {
    id: 'q-960',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Di apotek, TTK bertugas melakukan pelaporan penggunaan dan mutasi sediaan Narkotika dan Psikotropika secara elektronik kepada Kementerian Kesehatan dan BPOM melalui aplikasi resmi SIPNAP.',
    question: 'Kapankah batas akhir pelaporan SIPNAP rutin setiap bulannya?',
    options: [
      { key: 'A', text: 'Paling lambat tanggal 10 bulan berikutnya' },
      { key: 'B', text: 'Paling lambat tanggal 1 bulan berikutnya' },
      { key: 'C', text: 'Paling lambat tanggal 15 bulan berikutnya' },
      { key: 'D', text: 'Paling lambat tanggal 25 bulan berjalan' },
      { key: 'E', text: 'Setiap akhir tahun kalender' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Permenkes No. 3 Tahun 2015 pasal 45, Apotek, Instalasi Farmasi Rumah Sakit, dan Puskesmas wajib membuat dan mengirimkan laporan bulanan pemasukan dan penggunaan Narkotika dan Psikotropika secara elektronik (SIPNAP) paling lambat tanggal 10 setiap bulannya kepada Kepala Dinas Kesehatan Kabupaten/Kota dengan tembusan Kepala Balai POM setempat.',
    clinicalReference: 'Permenkes No. 3 Tahun 2015 tentang Pelaporan Narkotika dan Psikotropika (SIPNAP)',
    difficulty: 'Mudah'
  },
  {
    id: 'q-961',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Dalam penyimpanan obat di gudang instalasi farmasi, TTK mendapati dua obat dengan kemasan dan pelafalan nama yang mirip (LASA/Look Alike Sound Alike), yaitu Asam Mefenamat dan Asam Traneksamat.',
    question: 'Metode penulisan apakah yang direkomendasikan oleh standar keselamatan pasien untuk membedakan nama kedua obat tersebut pada label rak obat?',
    options: [
      { key: 'A', text: 'Tall Man Lettering' },
      { key: 'B', text: 'Underline Font' },
      { key: 'C', text: 'Bold Italic Font' },
      { key: 'D', text: 'Barcode Matrix' },
      { key: 'E', text: 'Monospace Formatting' }
    ],
    correctAnswer: 'A',
    explanation: 'Tall Man Lettering adalah teknik penulisan nama obat LASA (Look-Alike Sound-Alike) dengan mengkapitalisasi bagian huruf yang berbeda untuk menarik perhatian visual staf farmasi dan mencegah salah ambil (dispensing error). Contoh: asam MEFENAMAT vs asam TRANEKSAMAT; predniSONE vs prednisoLONE.',
    clinicalReference: 'ISMP Guidelines for Tall Man Lettering & Permenkes No. 11/2017 Keselamatan Pasien',
    difficulty: 'Mudah'
  },
  {
    id: 'q-962',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Seorang perawat di unit rawat inap anak meminta set infus untuk pasien balita usia 18 bulan yang membutuhkan infus cairan rumatan dengan tetesan lambat dan presisi tinggi.',
    question: 'Jenis set infus manakah yang tepat diserahkan oleh TTK?',
    options: [
      { key: 'A', text: 'Microdrip Infusion Set (Faktor tetes 60 tetes/mL)' },
      { key: 'B', text: 'Macrodrip Infusion Set (Faktor tetes 20 tetes/mL)' },
      { key: 'C', text: 'Blood Transfusion Set' },
      { key: 'D', text: 'Three-Way Stopcock Extension' },
      { key: 'E', text: 'Y-Site Co-infusion Set' }
    ],
    correctAnswer: 'A',
    explanation: 'Microdrip Infusion Set (infus set mikrodrip/pediatrik) memiliki penetes jarum halus di dalam ruang tetung (drip chamber) yang menghasilkan tetesan berukuran kecil, yaitu 60 tetes setara dengan 1 mL (faktor tetes 60 tts/mL). Alat ini digunakan untuk anak-anak dan pasien yang membutuhkan kontrol volume cairan infus yang ketat.',
    clinicalReference: 'Buku Ajar Farmasi Klinis & Alat Kesehatan Pediatrik',
    difficulty: 'Mudah'
  },
  {
    id: 'q-963',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'TTK sedang menyiapkan jarum infus intravena (IV Cannula / Abocath) untuk pasien dewasa di UGD yang mengalami dehidrasi berat dan memerlukan rehidrasi cairan dalam jumlah besar dan cepat.',
    question: 'Ukuran nomor gauge (G) IV Cannula manakah yang memiliki diameter lumen paling besar untuk mengalirkan cairan volume besar secara cepat?',
    options: [
      { key: 'A', text: '18 G (Warna Hijau)' },
      { key: 'B', text: '20 G (Warna Pink)' },
      { key: 'C', text: '22 G (Warna Biru)' },
      { key: 'D', text: '24 G (Warna Kuning)' },
      { key: 'E', text: '26 G (Warna Ungu)' }
    ],
    correctAnswer: 'A',
    explanation: 'Pada jarum dan kanula infus, ukuran Gauge (G) berbanding terbalik dengan diameter lumen: semakin kecil nomor gauge, semakin besar diameter lubang jarum. Ukuran 18G (hijau) memiliki diameter jauh lebih besar daripada 20G (pink), 22G (biru), dan 24G (kuning), sehingga ideal untuk resusitasi cairan cepat, transfusi darah, dan persiapan operasi bedah.',
    clinicalReference: 'Katalog Standar Alat Kesehatan Depkes RI & Intravenous Therapy Guidelines',
    difficulty: 'Sedang'
  },
  {
    id: 'q-964',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Di gudang apotek, TTK memeriksa sisa stok tablet Parasetamol 500 mg. Rata-rata pemakaian parasetamol adalah 20 strip per hari, waktu tunggu pemesanan (Lead Time) dari PBF adalah 3 hari, dan buffer stock ditetapkan sebesar 40 strip.',
    question: 'Berapakah titik pemesanan kembali (Reorder Point / ROP) untuk tablet parasetamol tersebut?',
    options: [
      { key: 'A', text: '100 strip' },
      { key: 'B', text: '60 strip' },
      { key: 'C', text: '80 strip' },
      { key: 'D', text: '120 strip' },
      { key: 'E', text: '40 strip' }
    ],
    correctAnswer: 'A',
    explanation: 'Rumus Reorder Point (ROP): ROP = (Lead Time x Pemakaian Rata-rata per hari) + Buffer Stock (Safety Stock). ROP = (3 hari x 20 strip/hari) + 40 strip = 60 strip + 40 strip = 100 strip. Ketika stok tersisa 100 strip, TTK harus segera membuat surat pesanan baru ke PBF.',
    clinicalReference: 'Pedoman Manajemen Pengelolaan Obat di Apotek Kemenkes RI & Permenkes 73/2016',
    difficulty: 'Sedang'
  },
  {
    id: 'q-965',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Seorang dokter bedah meminta benang bedah yang dapat diserap sendiri oleh jaringan tubuh secara alami (absorbable suture) untuk menjahit lapisan subkutan pada luka operasi usus buntu.',
    question: 'Manakah di antara jenis benang bedah berikut yang tergolong benang yang dapat diserap tubuh (Absorbable)?',
    options: [
      { key: 'A', text: 'Catgut Chromic' },
      { key: 'B', text: 'Silk (Sutera)' },
      { key: 'C', text: 'Prolene (Polipropilen)' },
      { key: 'D', text: 'Nylon (Poliamida)' },
      { key: 'E', text: 'Stainless Steel Wire' }
    ],
    correctAnswer: 'A',
    explanation: 'Benang bedah Absorbable (dapat diserap tubuh melalui enzimatis atau hidrolisis) meliputi: Catgut Chromic, Catgut Plain, Polyglycolic acid (PGA/Dexon), dan Polyglactin 910 (Vicryl). Sebaliknya Silk (sutera), Prolene, Nylon, dan Kawat baja adalah jenis Non-Absorbable (tidak dapat diserap tubuh dan harus diangkat bila dipasang di kulit luar).',
    clinicalReference: 'Katalog Alat Kesehatan Bedah Kemenkes RI & Surgical Suture Standards USP',
    difficulty: 'Mudah'
  },
  {
    id: 'q-966',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'TTK di apotek sedang menyusun obat sirup batuk yang baru datang dari PBF ke atas rak penyimpanan. Di rak sudah terdapat sisa 5 botol dengan ED Desember 2026, sedangkan obat yang baru datang memiliki ED Juni 2027.',
    question: 'Prinsip penataan obat apakah yang diterapkan oleh TTK bila obat dengan ED Desember 2026 diletakkan di barisan paling depan agar keluar lebih dahulu?',
    options: [
      { key: 'A', text: 'FEFO (First Expired First Out)' },
      { key: 'B', text: 'FIFO (First In First Out)' },
      { key: 'C', text: 'LIFO (Last In First Out)' },
      { key: 'D', text: 'Alphabetical Order saja' },
      { key: 'E', text: 'Berdasarkan harga termahal' }
    ],
    correctAnswer: 'A',
    explanation: 'Prinsip FEFO (First Expired, First Out) mengutamakan pengeluaran obat yang memiliki tanggal kadaluarsa paling dekat/dini terlebih dahulu ke tangan pasien, terlepas dari kapan waktu obat tersebut tiba di apotek. Hal ini bertujuan mencegah kerugian akibat obat kedaluwarsa di rak penyimpanan.',
    clinicalReference: 'Permenkes No. 73 Tahun 2016 tentang Standar Pelayanan Kefarmasian di Apotek',
    difficulty: 'Mudah'
  },
  {
    id: 'q-967',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Dalam penyimpanan obat-obat khusus di instalasi farmasi rumah sakit, TTK bertugas mematuhi persyaratan lemari penyimpanan sediaan Narkotika sesuai regulasi.',
    question: 'Persyaratan fisik manakah yang wajib dipenuhi untuk lemari penyimpanan narkotika menurut Permenkes No. 3 Tahun 2015?',
    options: [
      { key: 'A', text: 'Terbuat dari kayu/besi yang kuat, memiliki 2 pintu dengan kunci ganda berbeda, dan menempel pada dinding/lantai' },
      { key: 'B', text: 'Lemari kaca transparan terbuka agar mudah terlihat oleh semua staf' },
      { key: 'C', text: 'Boleh disimpan di laci meja kasir yang tidak terkunci' },
      { key: 'D', text: 'Diletakkan di ruang tunggu pasien agar mudah diakses' },
      { key: 'E', text: 'Cukup menggunakan kotak kardus tebal bersegel isolasi' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Permenkes No. 3 Tahun 2015 pasal 26: Lemari khusus penyimpanan narkotika harus terbuat dari bahan yang kuat (besi atau kayu tebal), tidak mudah dipindahkan dan diletakkan di tempat yang aman/tidak terlihat umum, menempel pada tembok atau lantai, serta dilengkapi dengan 2 (dua) buah kunci yang berbeda dan dipegang oleh penanggung jawab.',
    clinicalReference: 'Permenkes No. 3 Tahun 2015 tentang Pengelolaan Narkotika dan Psikotropika',
    difficulty: 'Mudah'
  },
  {
    id: 'q-968',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'TTK menerima permintaan alat bantu pernafasan dari dokter IGD untuk pasien anak yang menderita asma akut. Pasien memerlukan pemberian obat bronkodilator cair melalui penguapan udara bertekanan menjadi kabut partikel aerosol halus.',
    question: 'Apakah nama alat kesehatan aerosol generator yang dimaksud?',
    options: [
      { key: 'A', text: 'Nebulizer' },
      { key: 'B', text: 'Spirometer' },
      { key: 'C', text: 'Ventilator Mekanik' },
      { key: 'D', text: 'Suction Pump' },
      { key: 'E', text: 'Infusion Pump' }
    ],
    correctAnswer: 'A',
    explanation: 'Nebulizer adalah alat medis yang mengubah cairan obat inhalasi (misalnya salbutamol respules) menjadi partikel kabut aerosol mikro (diameter 1-5 mikron) menggunakan kompresor udara atau gelombang ultrasonik, sehingga obat mudah dihirup sampai ke percabangan bronkus dan alveoli paru.',
    clinicalReference: 'Buku Katalog Alat Kesehatan Terapi Pernapasan Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-969',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien diabetes melitus tipe 1 memerlukan penyuntikan insulin harian secara mandiri di rumah menggunakan jarum suntik disposable (spuit insulin).',
    question: 'Berapakah kapasitas volume total spuit insulin standar yang memiliki kalibrasi skala 100 Unit (100 IU)?',
    options: [
      { key: 'A', text: '1 mL' },
      { key: 'B', text: '3 mL' },
      { key: 'C', text: '5 mL' },
      { key: 'D', text: '2 mL' },
      { key: 'E', text: '0,1 mL' }
    ],
    correctAnswer: 'A',
    explanation: 'Spuit insulin U-100 standar memiliki kapasitas volume total 1 mL, di mana 1 mL setara dengan 100 Unit Insulin (U-100). Setiap tanda garis kecil (skala strip) umumnya mewakili 1 atau 2 unit insulin untuk memastikan ketelitian dosis mikro.',
    clinicalReference: 'Pedoman Terapi Insulin pada Diabetes Melitus PERKENI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-970',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Di gudang farmasi rumah sakit, TTK menemukan 10 strip tablet Ranitidin yang mengalami perubahan fisik kemasan menggembung dan rusak sebelum waktu kadaluarsa. TTK memindahkan obat tersebut ke area karantina sebelum dilakukan pemusnahan.',
    question: 'Mengapa obat yang rusak atau kadaluarsa harus dipisahkan ke lemari/area karantina khusus terpisah?',
    options: [
      { key: 'A', text: 'Mencegah obat rusak terambil secara tidak sengaja dan diserahkan kepada pasien' },
      { key: 'B', text: 'Agar obat rusak dapat diperbaiki kembali' },
      { key: 'C', text: 'Untuk dipajang di ruang pimpinan' },
      { key: 'D', text: 'Mempercepat penguapan zat aktif' },
      { key: 'E', text: 'Agar dapat dijual dengan diskon besar' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Cara Distribusi Obat yang Baik (CDOB) dan Standar Pelayanan Farmasi, semua produk yang rusak, kedaluwarsa, atau ditarik dari peredaran (recall) wajib segera dikarantina di area terpisah terkunci dan diberi penandaan jelas "RUSAK/KADALUARSA - JANGAN DIJUAL", untuk mengeliminasi risiko kesalahan dispensing kepada pasien.',
    clinicalReference: 'Petunjuk Teknis CDOB BPOM RI & Permenkes No. 73/2016',
    difficulty: 'Mudah'
  },
  {
    id: 'q-971',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Dalam penanganan limbah medis padat di apotek dan laboratorium peracikan, TTK membuang jarum suntik bekas pakai (needle) dan pecahan ampul kaca ke wadah khusus.',
    question: 'Wadah limbah medis jenis apakah yang wajib digunakan untuk membuang benda tajam tersebut?',
    options: [
      { key: 'A', text: 'Safety Box (wadah khusus tahan tusukan dan tahan air berwarna kuning)' },
      { key: 'B', text: 'Kantong plastik hitam biasa' },
      { key: 'C', text: 'Tempat sampah daur ulang terbuka' },
      { key: 'D', text: 'Kotak kardus bekas mie instan' },
      { key: 'E', text: 'Wastafel pembuangan air mengalir' }
    ],
    correctAnswer: 'A',
    explanation: 'Semua limbah medis benda tajam (jarum suntik, lanset, pisau bedah bisturi, pecahan ampul kaca) wajib langsung dibuang ke dalam Safety Box tahan tusukan dan tahan air (puncture-proof & leak-proof) bertanda biohazard kuning tanpa menutup kembali jarum suntik (no recapping) untuk mencegah luka tertusuk jarum (needle stick injury).',
    clinicalReference: 'Permenkes No. 2 Tahun 2023 tentang Kesehatan Lingkungan & Pedoman Pengelolaan Limbah Fasyankes',
    difficulty: 'Mudah'
  },
  {
    id: 'q-972',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'TTK bertugas mencatat kartu stok obat di instalasi farmasi. Setiap kali ada obat masuk dari penerimaan PBF atau obat keluar karena resep pasien, TTK wajib segera mencatat transaksi tersebut.',
    question: 'Informasi manakah yang TIDAK wajib tercantum pada kartu stok manual sediaan obat di apotek?',
    options: [
      { key: 'A', text: 'Nomor telepon pribadi seluruh pasien pembeli' },
      { key: 'B', text: 'Tanggal mutasi (masuk/keluar)' },
      { key: 'C', text: 'Nomor batch obat' },
      { key: 'D', text: 'Tanggal kadaluarsa (Expired Date)' },
      { key: 'E', text: 'Jumlah masuk, jumlah keluar, dan sisa stok akhir' }
    ],
    correctAnswer: 'A',
    explanation: 'Kartu stok obat berfungsi untuk merekam mutasi perbekalan farmasi per batch. Elemen wajib kartu stok: Nama obat, bentuk sediaan, tanggal transaksi, nomor batch, tanggal kadaluarsa (ED), nama PBF pengirim / nomor resep keluar, jumlah masuk, jumlah keluar, sisa saldo, dan paraf petugas. Nomor telepon seluruh pasien pembeli tidak dicantumkan di kartu stok.',
    clinicalReference: 'Permenkes No. 73 Tahun 2016 tentang Standar Pelayanan Kefarmasian di Apotek',
    difficulty: 'Mudah'
  },
  {
    id: 'q-973',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Dalam proses pemusnahan obat Narkotika dan Psikotropika yang telah kadaluarsa di apotek, proses pemusnahan harus dibuatkan Berita Acara Pemusnahan (BAP) resmi.',
    question: 'Pihak saksi manakah yang wajib dihadirkan saat pemusnahan obat narkotika di apotek menurut Permenkes No. 3 Tahun 2015?',
    options: [
      { key: 'A', text: 'Petugas Dinas Kesehatan Kabupaten/Kota dan/atau Balai Besar POM setempat' },
      { key: 'B', text: 'Ketua RT dan RW lingkungan setempat' },
      { key: 'C', text: 'Pihak distributor PBF penyalur' },
      { key: 'D', text: 'Pasien pembeli obat' },
      { key: 'E', text: 'Cukup disaksikan oleh staf kasir apotek' }
    ],
    correctAnswer: 'A',
    explanation: 'Pemusnahan Narkotika, Psikotropika, dan Prekursor Farmasi di Apotek wajib disaksikan oleh petugas dari Dinas Kesehatan Kabupaten/Kota dan/atau Balai Besar POM setempat. Berita Acara Pemusnahan (BAP) dibuat rangkap 4 dan ditandatangani oleh Apoteker Penanggung Jawab serta saksi-saksi resmi tersebut.',
    clinicalReference: 'Permenkes No. 3 Tahun 2015 tentang Tata Cara Pemusnahan Narkotika & Psikotropika',
    difficulty: 'Sedang'
  },
  {
    id: 'q-974',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Seorang TTK di bagian logistik farmasi sedang menghitung nilai persediaan obat menggunakan metode analisis Pareto / ABC. Kategori obat kelompok A memiliki karakteristik nilai investasi biaya yang sangat besar.',
    question: 'Berapakah persentase kumulatif nilai investasi modal yang diserap oleh kelompok obat Kategori A pada analisis ABC?',
    options: [
      { key: 'A', text: 'Menyerap sekitar 70% - 80% dari total dana persediaan' },
      { key: 'B', text: 'Hanya menyerap 5% - 10% dari total dana' },
      { key: 'C', text: 'Menyerap tepat 50% dari total dana' },
      { key: 'D', text: 'Menyerap kurang dari 2% dari total dana' },
      { key: 'E', text: 'Menyerap 100% dari seluruh dana apotek' }
    ],
    correctAnswer: 'A',
    explanation: 'Dalam analisis ABC (Pareto): Kelompok A menyerap sekitar 70-80% dari total anggaran biaya belanja obat, meskipun jumlah jenis itemnya hanya sekitar 10-20% dari total variasi obat. Oleh karena itu, obat kelompok A memerlukan pengawasan ketat, pengendalian persediaan intensif, dan pengetatan buffer stock.',
    clinicalReference: 'Pedoman Manajemen Pengelolaan Logistik Obat Rumah Sakit Kemenkes RI',
    difficulty: 'Sedang'
  },
  {
    id: 'q-975',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Di depo rawat inap rumah sakit, perawat meminta selang NGT (Nasogastric Tube) untuk pasien dewasa yang membutuhkan bantuan asupan nutrisi enteral cair.',
    question: 'Satuan ukuran apakah yang digunakan untuk menyatakan diameter luar selang NGT atau kateter folley?',
    options: [
      { key: 'A', text: 'French (Fr / Ch)' },
      { key: 'B', text: 'Gauge (G)' },
      { key: 'C', text: 'Inch (in)' },
      { key: 'D', text: 'Milimeter of mercury (mmHg)' },
      { key: 'E', text: 'Lumen per meter (Lpm)' }
    ],
    correctAnswer: 'A',
    explanation: 'Ukuran kateter urin, selang NGT/OGT, dan suction tube dinyatakan dalam skala French (disingkat Fr atau Ch/Charriere). Skala French didefinisikan sebagai: 1 Fr = 1/3 milimeter diameter luar. Contoh: NGT ukuran 18 Fr memiliki diameter luar 6 mm (18 x 1/3 mm). Semakin besar angka Fr, semakin besar diameter selangnya.',
    clinicalReference: 'Kamus Alat Kesehatan & Standar Medis Internasional ISO',
    difficulty: 'Sedang'
  },
  {
    id: 'q-976',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'TTK memeriksa termometer min-max pada lemari pendingin vaksin (chiller) di instalasi farmasi puskesmas setiap pagi dan sore hari.',
    question: 'Rentang suhu standar berapakah yang harus dijaga pada lemari pendingin penyimpanan vaksin umum (seperti DPT, Hepatitis B, Campak, TT)?',
    options: [
      { key: 'A', text: '+2 derajat C sampai +8 derajat C' },
      { key: 'B', text: '-20 derajat C sampai -10 derajat C' },
      { key: 'C', text: '+15 derajat C sampai +25 derajat C' },
      { key: 'D', text: '0 derajat C sampai +2 derajat C' },
      { key: 'E', text: '+8 derajat C sampai +15 derajat C' }
    ],
    correctAnswer: 'A',
    explanation: 'Standar suhu penyimpanan rantai dingin (cold chain) untuk sebagian besar vaksin program imunisasi rutin Kemenkes RI (Hepatitis B, DPT-HB-Hib, TT, DT, BCG, Campak, IPV) di puskesmas adalah pada suhu sejuk/chiller antara +2°C sampai dengan +8°C.',
    clinicalReference: 'Permenkes No. 12 Tahun 2017 tentang Penyelenggaraan Imunisasi',
    difficulty: 'Mudah'
  },
  {
    id: 'q-977',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien pasca operasi ortopedi tulang paha meminta tongkat ketiak penyangga tubuh saat berjalan (kruk penyangga jalan).',
    question: 'Apakah nama alat kesehatan rehabilitasi medik tersebut?',
    options: [
      { key: 'A', text: 'Crutches (Kruk)' },
      { key: 'B', text: 'Walker' },
      { key: 'C', text: 'Wheelchair' },
      { key: 'D', text: 'Arm Sling' },
      { key: 'E', text: 'Collar Neck' }
    ],
    correctAnswer: 'A',
    explanation: 'Crutches (kruk / tongkat ketiak) adalah alat bantu mobilitas berjalan yang disandarkan pada bawah ketiak dan digenggam dengan tangan untuk menopang sebagian atau seluruh berat badan pasien yang mengalami fraktur/cedera ekstremitas bawah.',
    clinicalReference: 'Katalog Alat Kesehatan Ortopedi & Rehabilitasi Medis Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-978',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Dalam proses penerimaan sediaan injeksi antibiotik seftriakson serbuk steril dari kurir PBF, TTK wajib mencocokkan dokumen pengiriman dengan pesanan.',
    question: 'Dokumen apakah yang dibawa oleh kurir pengantar PBF yang wajib diverifikasi dan ditandatangani oleh tenaga kefarmasian penerima?',
    options: [
      { key: 'A', text: 'Surat Jalan / Faktur Pengiriman Barang PBF' },
      { key: 'B', text: 'Surat Izin Praktik Dokter (SIP)' },
      { key: 'C', text: 'Buku Registrasi Narkotika' },
      { key: 'D', text: 'Kartu Stok Gudang' },
      { key: 'E', text: 'Surat Izin Operasional Apotek' }
    ],
    correctAnswer: 'A',
    explanation: 'Saat penerimaan barang dari PBF, TTK memeriksa kebenaran fisik barang terhadap Faktur / Surat Jalan PBF (nama obat, bentuk sediaan, kekuatan, jumlah, nomor batch, ED, kondisi kemasan). Setelah sesuai, TTK/Apoteker membubuhkan tanda tangan, nomor SIPTTK/SIPA, tanggal penerimaan, dan stempel apotek/RS.',
    clinicalReference: 'Standar Operasional Prosedur Penerimaan Barang CDOB BPOM RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-979',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Di depo farmasi bedah, TTK menyiapkan blood administration set untuk pasien yang akan menerima transfusi darah lengkap (Whole Blood).',
    question: 'Komponen khusus apakah yang membedakan set transfusi darah (blood set) dengan set infus cairan biasa (macrodrip set)?',
    options: [
      { key: 'A', text: 'Adanya saringan filter mesh mikro di dalam drip chamber untuk menyaring bekuan fibrin' },
      { key: 'B', text: 'Selang blood set terbuat dari kawat logam tembaga' },
      { key: 'C', text: 'Tidak memiliki roller klem pengatur tetesan' },
      { key: 'D', text: 'Jarum suntik menyatu mati dan tidak dapat dilepas' },
      { key: 'E', text: 'Panjang selang hanya 10 sentimeter' }
    ],
    correctAnswer: 'A',
    explanation: 'Blood Administration Set (set transfusi darah) dilengkapi dengan saringan filter khusus (pore size sekitar 170-200 mikron) di dalam ruang tetung (drip chamber) yang berfungsi menyaring bekuan fibrin, agregat sel darah, dan debris mikro agar tidak masuk ke dalam sirkulasi darah vena pasien.',
    clinicalReference: 'Standar Prosedur Operasional Transfusi Darah Kemenkes RI & AABB Standards',
    difficulty: 'Sedang'
  },
  {
    id: 'q-980',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Dalam sistem distribusi obat untuk pasien rawat inap di rumah sakit, TTK menyiapkan obat yang dikemas dalam dosis tunggal untuk setiap satu kali waktu minum pasien (pagi, siang, malam) dalam kantong terpisah.',
    question: 'Apakah nama sistem distribusi obat rawat inap yang paling efektif menurunkan angka medication error tersebut?',
    options: [
      { key: 'A', text: 'Unit Dose Dispensing (UDD)' },
      { key: 'B', text: 'Ward Floor Stock System' },
      { key: 'C', text: 'Individual Prescription System' },
      { key: 'D', text: 'Once Daily Bulk System' },
      { key: 'E', text: 'Emergency Kit Box' }
    ],
    correctAnswer: 'A',
    explanation: 'Unit Dose Dispensing (UDD) adalah metode pendistribusian perbekalan farmasi di mana obat disiapkan, dikemas, dan diberi etiket dalam unit dosis tunggal siap pakai untuk satu kali waktu konsumsi pasien. Sistem UDD terbukti paling efektif menurunkan angka kesalahan pemberian obat (medication error) hingga di bawah 1%.',
    clinicalReference: 'Permenkes No. 72 Tahun 2016 tentang Standar Pelayanan Kefarmasian di Rumah Sakit',
    difficulty: 'Mudah'
  },
  {
    id: 'q-981',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'TTK memeriksa ruang penyimpanan sediaan obat di apotek. Diketahui termometer ruangan menunjukkan suhu 22°C dan kelembaban relatif 55%.',
    question: 'Menurut Farmakope Indonesia Edisi VI, rentang suhu berapakah yang didefinisikan sebagai Suhu Ruang Terkendali (Controlled Room Temperature)?',
    options: [
      { key: 'A', text: '20 derajat C sampai 25 derajat C' },
      { key: 'B', text: '2 derajat C sampai 8 derajat C' },
      { key: 'C', text: '8 derajat C sampai 15 derajat C' },
      { key: 'D', text: '30 derajat C sampai 40 derajat C' },
      { key: 'E', text: '-20 derajat C sampai 0 derajat C' }
    ],
    correctAnswer: 'A',
    explanation: 'Definisi suhu penyimpanan Farmakope Indonesia VI: Suhu dingin/beku: -25°C s/d -10°C; Suhu dingin (lemari pendingin): 2°C s/d 8°C; Suhu sejuk: 8°C s/d 15°C; Suhu ruang terkendali (Controlled Room Temperature): 20°C s/d 25°C; Suhu hangat: 30°C s/d 40°C.',
    clinicalReference: 'Farmakope Indonesia Edisi VI Bagian Ketentuan Umum Penyimpanan',
    difficulty: 'Mudah'
  },
  {
    id: 'q-982',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Seorang perawat anestesi meminta alat penutup luka pasca operasi bedah plastik yang bersifat transparan, kedap air, namun tetap permeabel terhadap uap air dan oksigen.',
    question: 'Apakah nama balutan luka transparan steril (transparent film dressing) tersebut?',
    options: [
      { key: 'A', text: 'Tegaderm / Film Dressing' },
      { key: 'B', text: 'Kasa hidrofil steril' },
      { key: 'C', text: 'Elastic Bandage (Perban elastis)' },
      { key: 'D', text: 'Kapas putih pembalut' },
      { key: 'E', text: 'Plester zinc oxide kain' }
    ],
    correctAnswer: 'A',
    explanation: 'Tegaderm (Transparent Polyurethane Film Dressing) adalah balutan luka modern berbahan film poliuretan transparan steril yang berperekat. Karakteristiknya kedap air dan bakteri (waterproof & barrier terhadap mikroba), tetapi semi-permeabel terhadap pertukaran gas uap air dan oksigen, serta memungkinkan inspeksi visual luka tanpa membuka balutan.',
    clinicalReference: 'Katalog Alat Kesehatan Perawatan Luka Modern & Pedoman Balutan Bedah',
    difficulty: 'Mudah'
  },
  {
    id: 'q-983',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Dalam pengadaan obat sirup obat batuk yang mengandung Dekstrometorfan tunggal dan Tramadol tablet di apotek, TTK menyiapkan formulir surat pesanan khusus.',
    question: 'Termasuk dalam kelompok pengawasan manakah obat Tramadol dan Dekstrometorfan menurut Peraturan BPOM No. 10 Tahun 2019?',
    options: [
      { key: 'A', text: 'Obat-Obat Tertentu (OOT) yang sering disalahgunakan' },
      { key: 'B', text: 'Narkotika Golongan II' },
      { key: 'C', text: 'Psikotropika Golongan I' },
      { key: 'D', text: 'Prekursor Farmasi Tabel 1' },
      { key: 'E', text: 'Obat Bebas Tanpa Pengawasan' }
    ],
    correctAnswer: 'A',
    explanation: 'Menurut Peraturan BPOM No. 10 Tahun 2019 tentang Pedoman Pengelolaan Obat-Obat Tertentu yang Sering Disalahgunakan (OOT), obat yang masuk kelompok OOT adalah: Tramadol, Triheksifenidil, Klorpromazin, Amitriptilin, Haloperidol, dan Dekstrometorfan. Pengadaan OOT wajib menggunakan Surat Pesanan (SP) khusus OOT.',
    clinicalReference: 'Peraturan BPOM No. 10 Tahun 2019 tentang Pengelolaan Obat-Obat Tertentu (OOT)',
    difficulty: 'Mudah'
  },
  {
    id: 'q-984',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Di depo rawat inap, TTK memeriksa isi Kotak Obat Kedaruratan (Emergency Kit Box) yang ditempatkan di ruang perawatan intensif (ICU).',
    question: 'Ketentuan pengelolaan manakah yang wajib dipenuhi untuk Kotak Obat Emergensi di ruang rawat?',
    options: [
      { key: 'A', text: 'Terkunci dengan segel plastik bernomor seri yang mudah dipatahkan saat kedaruratan' },
      { key: 'B', text: 'Dibiarkan terbuka bebas tanpa kunci agar perawat mudah meminjam' },
      { key: 'C', text: 'Boleh dipinjam untuk terapi rutin pasien rawat jalan' },
      { key: 'D', text: 'Hanya diperiksa stoknya satu kali dalam setahun' },
      { key: 'E', text: 'Disimpan di dalam lemari berkas administrasi terkunci rapat' }
    ],
    correctAnswer: 'A',
    explanation: 'Emergency Kit Box (troli/kit emergensi) harus selalu siap pakai saat terjadi kondisi henti jantung/napas mendadak. Kotak harus disegel dengan segel plastik khusus ber nomor seri (disposable tamper-evident seal). Bila segel rusak/terbuka, perawat dan TTK wajib segera mengisi ulang obat yang terpakai dan menyegelnya kembali.',
    clinicalReference: 'Permenkes No. 72 Tahun 2016 & Standar Akreditasi Rumah Sakit (STARKES KARS)',
    difficulty: 'Mudah'
  },
  {
    id: 'q-985',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien datang ke apotek ingin meminjam kursi roda (wheelchair) untuk kakeknya yang lumpuh akibat stroke. Pasien menanyakan bagian kursi roda yang berfungsi menahan putaran roda saat pasien hendak duduk atau berdiri.',
    question: 'Apakah nama komponen pengaman pada kursi roda tersebut?',
    options: [
      { key: 'A', text: 'Wheel Lock / Hand Brake (Tuas Rem Roda)' },
      { key: 'B', text: 'Footrest (Pijakan kaki)' },
      { key: 'C', text: 'Castor Wheels (Roda depan kecil)' },
      { key: 'D', text: 'Armrest (Bantalan tangan)' },
      { key: 'E', text: 'Push Rim (Cincin pendorong roda)' }
    ],
    correctAnswer: 'A',
    explanation: 'Wheel lock / Hand brake (rem roda) adalah tuas mekanis yang mengunci roda belakang kursi roda agar tidak bergeser saat pasien melakukan perpindahan posisi (transfer) dari tempat tidur ke kursi roda atau sebaliknya, untuk mencegah risiko jatuh (fall risk).',
    clinicalReference: 'Panduan Keselamatan Pasien & Alat Bantu Mobilitas Medis',
    difficulty: 'Mudah'
  },
  {
    id: 'q-986',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Dalam pengadaan sediaan obat Prekursor Farmasi (tablet Pseudoefedrin HCl dan Efedrin HCl) di apotek, TTK menyiapkan surat pesanan khusus prekursor.',
    question: 'Berapakah jumlah minimal rangkap Surat Pesanan (SP) Prekursor Farmasi menurut peraturan perundang-undangan?',
    options: [
      { key: 'A', text: 'Rangkap 3' },
      { key: 'B', text: 'Rangkap 1' },
      { key: 'C', text: 'Rangkap 2' },
      { key: 'D', text: 'Rangkap 5' },
      { key: 'E', text: 'Rangkap 6' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Permenkes No. 3 Tahun 2015, Surat Pesanan Prekursor Farmasi dan Psikotropika wajib dibuat sekurang-kurangnya rangkap 3 (tiga): lembar asli dan tembusan untuk PBF penyalur, serta 1 lembar arsip apotek penanggung jawab.',
    clinicalReference: 'Permenkes No. 3 Tahun 2015 tentang Tata Cara Pemesanan Prekursor Farmasi',
    difficulty: 'Mudah'
  },
  {
    id: 'q-987',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'TTK di instalasi farmasi sedang melakukan stok opname tahunan (stock opname) pada seluruh persediaan obat dan alat kesehatan di apotek.',
    question: 'Tujuan utama apakah yang dicapai dari pelaksanaan kegiatan Stock Opname berkala di apotek?',
    options: [
      { key: 'A', text: 'Mencocokkan jumlah fisik obat riil di rak dengan catatan saldo kartu stok/sistem komputer' },
      { key: 'B', text: 'Menaikkan harga jual obat secara serentak' },
      { key: 'C', text: 'Membersihkan debu pada lantai apotek' },
      { key: 'D', text: 'Menghabiskan seluruh anggaran kas apotek' },
      { key: 'E', text: 'Mengganti seluruh staf apotek dengan staf baru' }
    ],
    correctAnswer: 'A',
    explanation: 'Stock opname adalah kegiatan penghitungan fisik perbekalan farmasi secara langsung di rak penyimpanan dan mencocokkannya dengan saldo buku kartu stok atau sistem informasi manajemen apotek. Tujuannya adalah mendeteksi selisih stok (kurang/lebih), mencegah kehilangan/kebocoran, dan mengidentifikasi obat kedaluwarsa/rusak.',
    clinicalReference: 'Permenkes No. 73 Tahun 2016 tentang Standar Pelayanan Kefarmasian di Apotek',
    difficulty: 'Mudah'
  },
  {
    id: 'q-988',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien pasca operasi pengangkatan kandung kemih (kolostomi) datang ke apotek membeli kantong penampung feses buatan yang ditempelkan pada dinding perut (stoma).',
    question: 'Apakah nama alat kesehatan habis pakai penampung kotoran stoma tersebut?',
    options: [
      { key: 'A', text: 'Colostomy Bag' },
      { key: 'B', text: 'Urinal Bag' },
      { key: 'C', text: 'Bedpan (Pispot)' },
      { key: 'D', text: 'Suction Liner' },
      { key: 'E', text: 'Drainage Bag' }
    ],
    correctAnswer: 'A',
    explanation: 'Colostomy Bag (kantong kolostomi) adalah kantong medis berperekat hidrokoloid yang dipasang pada lubang buatan di dinding perut (stoma kolon) untuk menampung feses/kotoran pasien yang saluran pembuangan alaminya tidak berfungsi sementara atau permanen pasca operasi saluran cerna.',
    clinicalReference: 'Katalog Alat Kesehatan Perawatan Stoma Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-989',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Di depo bedah, dokter memerlukan benang jahit bedah sintetis yang tidak dapat diserap tubuh (non-absorbable) berwarna biru tua yang memiliki kekuatan regang sangat tinggi untuk penutupan fasia dinding abdomen.',
    question: 'Apakah nama benang bedah sintetis monofilamen non-absorbable yang dimaksud?',
    options: [
      { key: 'A', text: 'Prolene (Polypropylene)' },
      { key: 'B', text: 'Catgut Plain' },
      { key: 'C', text: 'Catgut Chromic' },
      { key: 'D', text: 'Vicryl (Polyglactin)' },
      { key: 'E', text: 'Monocryl (Poliglecaprone)' }
    ],
    correctAnswer: 'A',
    explanation: 'Prolene (polipropilen) adalah benang bedah monofilamen sintetis non-absorbable berwarna biru yang terkenal dengan kekuatan regang tinggi, reaksi jaringan minimal, dan permukaan sangat licin. Benang ini sering digunakan untuk jahitan kardiovaskular, hernia, dan penutupan fasia dinding perut.',
    clinicalReference: 'Surgical Suture Manual & USP Absorbable and Non-Absorbable Sutures',
    difficulty: 'Sedang'
  },
  {
    id: 'q-990',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Dalam penyerahan obat sirup multivitamin anak yang botolnya baru dikeluarkan dari karton pengiriman PBF, TTK memeriksa segel pengaman tutup botol untuk memastikan keutuhan sediaan.',
    question: 'Apakah istilah untuk kemasan primer penutup botol yang menunjukkan tanda kerusakan bila telah dibuka sebelumnya?',
    options: [
      { key: 'A', text: 'Tamper-Evident Packaging' },
      { key: 'B', text: 'Child-Resistant Packaging' },
      { key: 'C', text: 'Bulk Packaging' },
      { key: 'D', text: 'Multi-dose Packaging' },
      { key: 'E', text: 'Unit Dose Packaging' }
    ],
    correctAnswer: 'A',
    explanation: 'Tamper-Evident Packaging (kemasan dengan penanda perusakan) adalah desain kemasan farmasi yang memiliki segel penghalang (seperti cincin plastik yang putus saat tutup diputar atau segel aluminium foil di mulut botol) yang memberikan bukti visual jelas kepada konsumen bila sediaan telah dibuka atau dirusak sebelumnya.',
    clinicalReference: 'CPOB BPOM RI & USP Standards for Packaging and Storage',
    difficulty: 'Mudah'
  },
  {
    id: 'q-991',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien datang ke apotek membawa resep yang berisi tablet Diazepam 2 mg dan Alprazolam 0,5 mg. TTK memeriksa keabsahan resep dan persyaratan legalitasnya.',
    question: 'Termasuk dalam golongan obat apakah Diazepam dan Alprazolam menurut UU No. 5 Tahun 1997?',
    options: [
      { key: 'A', text: 'Psikotropika Golongan IV' },
      { key: 'B', text: 'Narkotika Golongan I' },
      { key: 'C', text: 'Psikotropika Golongan II' },
      { key: 'D', text: 'Obat Bebas Terbatas' },
      { key: 'E', text: 'Prekursor Farmasi' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan UU No. 5 Tahun 1997 tentang Psikotropika dan perubahannya, Diazepam dan Alprazolam adalah obat golongan benzodiazepin yang berkhasiat terapi ansiolitik dan sedatif, dan diklasifikasikan sebagai Psikotropika Golongan IV.',
    clinicalReference: 'Undang-Undang Republik Indonesia No. 5 Tahun 1997 tentang Psikotropika',
    difficulty: 'Mudah'
  },
  {
    id: 'q-992',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Dalam sistem manajemen logistik farmasi rumah sakit, TTK bertugas memisahkan obat berdasarkan metode analisis VEN (Vital, Esensial, Non-Esensial).',
    question: 'Manakah contoh obat yang masuk dalam kategori "Vital (V)" karena bersifat menyelamatkan nyawa (life-saving drugs)?',
    options: [
      { key: 'A', text: 'Injeksi Epinefrin (Adrenalin) dan Injeksi Atropin Sulfat' },
      { key: 'B', text: 'Tablet Multivitamin dan Suplemen Kalsium' },
      { key: 'C', text: 'Krim Pemutih Wajah Hidrokuinon' },
      { key: 'D', text: 'Permen Pelega Tenggorokan' },
      { key: 'E', text: 'Minyak Kayu Putih' }
    ],
    correctAnswer: 'A',
    explanation: 'Dalam analisis VEN: Kategori V (Vital) adalah obat-obatan yang wajib tersedia karena bersifat menyelamatkan hidup (life-saving drugs), jika tidak ada dapat menyebabkan kematian pasien seketika (contoh: epinefrin untuk syok anafilaktik, atropin untuk henti jantung, insulin untuk ketoasidosis, anti-bisa ular).',
    clinicalReference: 'Pedoman Pengelolaan Obat di Rumah Sakit Ditjen Binfar Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-993',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien datang ke apotek ingin membeli alat tes kehamilan mandiri (Rapid Pregnancy Test Strip) yang menggunakan sampel air seni/urin di pagi hari.',
    question: 'Hormon biologis apakah yang dideteksi oleh strip tes kehamilan mandiri tersebut pada urine wanita hamil?',
    options: [
      { key: 'A', text: 'hCG (Human Chorionic Gonadotropin)' },
      { key: 'B', text: 'LH (Luteinizing Hormone)' },
      { key: 'C', text: 'FSH (Follicle Stimulating Hormone)' },
      { key: 'D', text: 'Prolaktin' },
      { key: 'E', text: 'Oksitosin' }
    ],
    correctAnswer: 'A',
    explanation: 'Alat strip uji kehamilan cepat (pregnancy test strip) menggunakan antibodi monoklonal spesifik untuk mendeteksi hormon human Chorionic Gonadotropin (hCG) yang disintesis oleh sel sinsitiotrofoblas plasenta segera setelah terjadinya implantasi embrio pada dinding rahim.',
    clinicalReference: 'Panduan Pemeriksaan Diagnostik In Vitro Sederhana Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-994',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Dalam penyimpanan obat injeksi Insulin pen (Glargine / Aspart) yang BELUM DIGUNAKAN (masih tersegel baru dari PBF), TTK menyimpannya pada lemari es.',
    question: 'Berapakah suhu penyimpanan yang benar untuk insulin pen yang belum dibuka?',
    options: [
      { key: 'A', text: 'Suhu 2 derajat C sampai 8 derajat C (jangan dibekukan)' },
      { key: 'B', text: 'Suhu -20 derajat C (dibekukan di freezer)' },
      { key: 'C', text: 'Suhu 25 derajat C sampai 30 derajat C' },
      { key: 'D', text: 'Suhu di atas 40 derajat C' },
      { key: 'E', text: 'Bebas pada suhu berapa saja' }
    ],
    correctAnswer: 'A',
    explanation: 'Insulin adalah sediaan hormon peptida yang termolabil. Insulin pen yang belum dibuka (unopened) wajib disimpan di lemari pendingin pada suhu 2°C s/d 8°C dan TIDAK BOLEH dibekukan. Setelah segel dibuka untuk pemakaian harian pasien, insulin pen stabil pada suhu ruang terkendali (15-30°C) selama 28 hari.',
    clinicalReference: 'Panduan Terapi Insulin PERKENI & Monografi Insulin AHFS',
    difficulty: 'Mudah'
  },
  {
    id: 'q-995',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Di instalasi farmasi rumah sakit, TTK menemukan obat injeksi kemoterapi sitotoksik (Doxorubicin dan Cisplatin) yang tertumpah di atas meja penyiapan obat kanker.',
    question: 'Alat pelindung diri (APD) dan paket perlengkapan darurat apakah yang wajib digunakan untuk membersihkan tumpahan obat kanker tersebut?',
    options: [
      { key: 'A', text: 'Cytotoxic Spill Kit lengkap dengan sarung tangan ganda dan masker respirator N95' },
      { key: 'B', text: 'Cukup menggunakan kain lap pel biasa dan air keran' },
      { key: 'C', text: 'Tisu dapur kering tanpa sarung tangan' },
      { key: 'D', text: 'Penyedot debu (vacuum cleaner) rumah tangga' },
      { key: 'E', text: 'Disemprot dengan cairan parfum ruangan' }
    ],
    correctAnswer: 'A',
    explanation: 'Obat sitotoksik/kemoterapi memiliki sifat karsinogenik, mutagenik, dan teratogenik. Setiap insiden tumpahan obat sitotoksik wajib ditangani menggunakan Spill Kit Sitotoksik khusus yang berisi: sarung tangan kemoterapi ganda, gaun pelindung kedap air, masker N95, kacamata goggle, bantalan absorben penyerap, serbuk pengeras cairan, dan kantong limbah sitotoksik bertanda ungu.',
    clinicalReference: 'Pedoman Penanganan Obat Sitotoksik Kemenkes RI & NIOSH Hazardous Drugs',
    difficulty: 'Sedang'
  },
  {
    id: 'q-996',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'TTK memeriksa surat pesanan (SP) obat flu yang mengandung pseudoefedrin HCl dari PBF. TTK memeriksa keabsahan identitas penanggung jawab pada formulir SP.',
    question: 'Siapakah pejabat kefarmasian yang berwenang menandatangani Surat Pesanan obat di apotek sesuai peraturan perundang-undangan?',
    options: [
      { key: 'A', text: 'Apoteker Penanggung Jawab Apotek (Apoteker Pemegang SIPA)' },
      { key: 'B', text: 'Pemilik Sarana Apotek (PSA) non-farmasi' },
      { key: 'C', text: 'Staf kasir apotek' },
      { key: 'D', text: 'Petugas kebersihan apotek' },
      { key: 'E', text: 'Tenaga administrasi gudang' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Permenkes No. 73 Tahun 2016 dan ketentuan CDOB BPOM: Pemesanan sediaan farmasi (khususnya obat keras, narkotika, psikotropika, dan prekursor) wajib ditandatangani oleh Apoteker Penanggung Jawab Apotek (APJ) dengan mencantumkan nama lengkap, nomor SIPA, nomor STRA, dan stempel apotek.',
    clinicalReference: 'Permenkes No. 73 Tahun 2016 & Petunjuk Pelaksanaan CDOB BPOM RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-997',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien datang ke apotek membawa resep alat kesehatan berupa "Spuit 3 cc No. V". Pasien menanyakan maksud dari singkatan "cc" pada ukuran spuit tersebut.',
    question: 'Satuan mililiter (mL) berapakah yang setara dengan 1 cc (cubic centimeter)?',
    options: [
      { key: 'A', text: '1 mL' },
      { key: 'B', text: '10 mL' },
      { key: 'C', text: '0,1 mL' },
      { key: 'D', text: '0,01 mL' },
      { key: 'E', text: '100 mL' }
    ],
    correctAnswer: 'A',
    explanation: 'Satu centimeter kubik (1 cm³ / 1 cc) secara volume tepat setara dengan 1 mililiter (1 mL). Jadi spuit 3 cc adalah spuit suntik berkapasitas volume total 3 mililiter.',
    clinicalReference: 'Farmakope Indonesia Edisi VI & Satuan Metrik Farmasetika',
    difficulty: 'Mudah'
  },
  {
    id: 'q-998',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Dalam pengawasan obat beredar oleh BPOM, ditemukan sediaan sirup parasetamol anak yang terkontaminasi cemaran Etilen Glikol (EG) dan Dietilen Glikol (DEG) melebihi batas aman toleransi, sehingga BPOM menerbitkan instruksi penarikan obat (Recall) secara nasional.',
    question: 'Tindakan segera apakah yang wajib dilakukan oleh TTK di apotek saat menerima surat edaran penarikan produk (mandatory recall) dari BPOM?',
    options: [
      { key: 'A', text: 'Segera menghentikan penjualan, menarik produk dari rak display, mengkarantina, dan meretur ke PBF penyalur' },
      { key: 'B', text: 'Tetap menjual produk dengan memberi potongan diskon 50%' },
      { key: 'C', text: 'Membuang produk ke selokan umum di depan apotek' },
      { key: 'D', text: 'Menyimpan produk di rumah pribadi' },
      { key: 'E', text: 'Mengganti label nama pabrik pada kemasan botol' }
    ],
    correctAnswer: 'A',
    explanation: 'Bila ada penarikan obat (product recall) oleh BPOM atau produsen: Fasilitas pelayanan kefarmasian wajib segera menghentikan penyaluran/penjualan, menyisihkan seluruh stok dari rak penjualan, mencatat jumlah stok fisik, menyimpannya di tempat karantina khusus dengan penandaan jelas, dan memproses pengembalian (retur) kepada PBF penyalur disertai berita acara resmi.',
    clinicalReference: 'Peraturan BPOM tentang Tata Cara Penarikan dan Pemusnahan Obat yang Tidak Memenuhi Standar',
    difficulty: 'Mudah'
  },
  {
    id: 'q-999',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien datang ke apotek ingin membeli tensimeter digital mandiri untuk memantau tekanan darah tinggi di rumah. Pasien bertanya mengenai manset lengan (cuff) yang tepat.',
    question: 'Instruksi penggunaan tensimeter digital manakah yang paling tepat dijelaskan oleh TTK?',
    options: [
      { key: 'A', text: 'Manset dipasang melingkar pada lengan atas sejajar dengan posisi jantung, pasien duduk tenang dan tidak berbicara' },
      { key: 'B', text: 'Manset dipasang pada pergelangan kaki sambil berdiri' },
      { key: 'C', text: 'Pengukuran dilakukan tepat setelah selesai berlari kencang' },
      { key: 'D', text: 'Pasien harus terus berbicara saat manset sedang memompa udara' },
      { key: 'E', text: 'Manset dipasang sangat longgar agar udara bebas keluar masuk' }
    ],
    correctAnswer: 'A',
    explanation: 'Pengukuran tekanan darah yang akurat: Pasien duduk istirahat tenang minimal 5 menit sebelum pengukuran, posisi manset dipasang pada lengan atas sekitar 2-3 cm di atas lekukan siku dan sejajar dengan tinggi jantung, kedua kaki menapak di lantai (tidak menyilang), dan pasien tidak boleh bergerak atau berbicara saat pengukuran berlangsung.',
    clinicalReference: 'Panduan Pengukuran Tekanan Darah Mandiri di Rumah (AMPA) PERKI & AHA Guidelines',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1000',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Dalam sistem pengarsipan resep di apotek, resep-resep yang telah dilayani disusun rapi menurut urutan tanggal dan nomor urut penerimaan resep.',
    question: 'Berapa tahun lamakah batas waktu minimal penyimpanan arsip resep di apotek sebelum boleh dimusnahkan menurut Permenkes No. 73 Tahun 2016?',
    options: [
      { key: 'A', text: '5 tahun' },
      { key: 'B', text: '1 tahun' },
      { key: 'C', text: '2 tahun' },
      { key: 'D', text: '10 tahun' },
      { key: 'E', text: '20 tahun' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Permenkes No. 73 Tahun 2016 tentang Standar Pelayanan Kefarmasian di Apotek: Resep yang telah dilayani harus disimpan sekurang-kurangnya selama 5 (lima) tahun dan disusun berurutan berdasarkan tanggal dan nomor urut. Setelah melewati masa simpan 5 tahun, resep dapat dimusnahkan dengan cara dibakar atau dihancurkan dengan membuat Berita Acara Pemusnahan Resep.',
    clinicalReference: 'Permenkes No. 73 Tahun 2016 tentang Standar Pelayanan Kefarmasian di Apotek',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1001',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien pasca stroke memerlukan latihan pernapasan untuk melatih kapasitas ekspansi paru dan kekuatan otot pernapasan. Dokter meresepkan alat latihan pernapasan dengan 3 bola warna-warni yang terangkat saat pasien menghirup napas kuat.',
    question: 'Apakah nama alat terapi latihan pernapasan insentif tersebut?',
    options: [
      { key: 'A', text: 'Incentive Spirometer (Spirometri Insentif)' },
      { key: 'B', text: 'Peak Flow Meter' },
      { key: 'C', text: 'Pulse Oximeter' },
      { key: 'D', text: 'Nebulizer Compressor' },
      { key: 'E', text: 'Nasal Cannula' }
    ],
    correctAnswer: 'A',
    explanation: 'Incentive Spirometer (Triflo / 3-ball spirometer) adalah alat fisioterapi napas yang dirancang untuk melatih pasien mengambil napas dalam secara perlahan dan maksimal. Aliran udara hisapan pasien akan mengangkat 1, 2, atau 3 bola plastik untuk mencegah atelektasis (kolaps paru) pasca operasi.',
    clinicalReference: 'Katalog Alat Kesehatan Fisioterapi Dada & Panduan Rehabilitasi Medis',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1002',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Di gudang apotek, TTK mencatat suhu penyimpanan pada kartu suhu ruangan setiap hari. Suhu ruangan penyimpanan obat yang ideal dijaga agar mutu sediaan tablet tidak mengalami hidrolisis.',
    question: 'Faktor lingkungan fisik apakah yang paling sering mempercepat degradasi hidrolisis pada sediaan tablet effervescent dan kapsul gelatin lunak?',
    options: [
      { key: 'A', text: 'Kelembaban udara (Humidity) yang tinggi' },
      { key: 'B', text: 'Tingkat kebisingan ruangan' },
      { key: 'C', text: 'Tekanan udara barometer rendah' },
      { key: 'D', text: 'Warna cat dinding ruangan' },
      { key: 'E', text: 'Intensitas sinyal nirkabel wifi' }
    ],
    correctAnswer: 'A',
    explanation: 'Kelembaban udara relatif (Relative Humidity / RH) yang tinggi merupakan pemicu utama reaksi hidrolisis pada senyawa obat yang peka air (seperti asam asetilsalisilat, antibiotik beta-laktam, dan tablet efervesen). Gelatin pada cangkang kapsul juga menyerap uap air sehingga melunak, melekat, dan mudah ditumbuhi jamur.',
    clinicalReference: 'Farmakope Indonesia Edisi VI & CPOB Stabilitas Obat',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1003',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Dalam penyerahan sediaan injeksi Epinefrin (Adrenalin 1 mg/mL) di depo IGD, TTK memeriksa kondisi ampul kaca. Pada ampul tertera tanggal ED dan nomor batch produksi.',
    question: 'Apakah definisi resmi dari "Nomor Batch" (Lot Number) pada kemasan produk farmasi menurut CPOB?',
    options: [
      { key: 'A', text: 'Penandaan angka/huruf khas yang menunjukkan identitas riwayat satu siklus proses produksi obat yang seragam' },
      { key: 'B', text: 'Nomor izin edar dari Badan POM' },
      { key: 'C', text: 'Nomor telepon pengaduan konsumen pabrik' },
      { key: 'D', text: 'Kode harga eceran tertinggi di apotek' },
      { key: 'E', text: 'Nomor urut faktur pembayaran barang' }
    ],
    correctAnswer: 'A',
    explanation: 'Nomor Batch (Lot Number) adalah kombinasi khas dari angka, huruf, atau keduanya yang memungkinkan penelusuran riwayat lengkap pembuatan suatu siklus produksi (batch), termasuk pengolahan, pengemasan, pengujian laboratorium, dan distribusi sediaan farmasi yang memiliki sifat homogen dan seragam.',
    clinicalReference: 'Pedoman CPOB Edisi Terbaru Badan POM RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1004',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien datang ke apotek membawa resep dokter untuk membeli alat pengukur kadar saturasi oksigen darah perifer tanpa mengambil darah (non-invasif) yang dijepitkan pada ujung jari tangan.',
    question: 'Apakah nama alat kesehatan diagnostik portabel tersebut?',
    options: [
      { key: 'A', text: 'Pulse Oximeter (Oksimeter Denyut)' },
      { key: 'B', text: 'Glukometer' },
      { key: 'C', text: 'Termometer Inframerah' },
      { key: 'D', text: 'Tensimeter Aneroid' },
      { key: 'E', text: 'Holter Monitor' }
    ],
    correctAnswer: 'A',
    explanation: 'Pulse Oximeter adalah alat diagnostik non-invasif yang mengukur persentase saturasi oksigen dalam hemoglobin darah arteri (SpO2) dan denyut nadi dengan memancarkan berkas cahaya merah dan inframerah melalui anyaman kapiler bantalan kuku ujung jari tangan.',
    clinicalReference: 'Panduan Penggunaan Alat Monitoring Respirasi Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1005',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'TTK di instalasi farmasi rumah sakit menyiapkan set infus darah (blood set) dan kantong darah Packed Red Cells (PRC) untuk pasien anemia berat pasca kecelakaan.',
    question: 'Cairan infus intravena manakah yang HANYA SATU-SATUNYA diperbolehkan dibilaskan bersamaan pada jalur transfusi darah tanpa menyebabkan aglutinasi atau hemolisis sel darah merah?',
    options: [
      { key: 'A', text: 'Larutan Natrium Klorida 0,9% (Normal Saline)' },
      { key: 'B', text: 'Larutan Dextrose 5% dalam air' },
      { key: 'C', text: 'Larutan Ringer Laktat (RL)' },
      { key: 'D', text: 'Larutan Dextrose 10%' },
      { key: 'E', text: 'Larutan Natrium Bikarbonat 8,4%' }
    ],
    correctAnswer: 'A',
    explanation: 'Hanya larutan NaCl 0,9% (Normal Saline) yang kompatibel dan aman digunakan sebagai cairan pembilas (flushing) pada jalur transfusi darah. Larutan Dextrose 5% dapat memicu hemolisis (pecahnya sel darah merah) karena bersifat hipotonik in vitro, sedangkan Ringer Laktat mengandung ion Ca2+ yang dapat berikatan dengan antikoagulan sitrat dalam darah dan memicu pembentukan bekuan darah (clotting).',
    clinicalReference: 'Panduan Transfusi Darah Klinis Kemenkes RI & AABB Guidelines',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1006',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Di apotek, seorang TTK menerima resep yang mengandung sirup Efedrin HCl. Dalam pelaporan SIPNAP, efedrin digolongkan secara terpisah.',
    question: 'Apakah penggolongan resmi untuk Efedrin dan Pseudoefedrin menurut Undang-Undang Republik Indonesia?',
    options: [
      { key: 'A', text: 'Prekursor Farmasi Tabel 1' },
      { key: 'B', text: 'Narkotika Golongan I' },
      { key: 'C', text: 'Narkotika Golongan III' },
      { key: 'D', text: 'Psikotropika Golongan I' },
      { key: 'E', text: 'Obat Bebas Murni' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Peraturan Pemerintah No. 44 Tahun 2010 dan UU No. 35 Tahun 2009 tentang Narkotika: Efedrin, Pseudoefedrin, Norefedrin, Ergotamin, dan Ergometrin digolongkan sebagai Prekursor Farmasi Tabel 1 karena dapat digunakan sebagai bahan baku pemula pembuatan narkotika sintetis (seperti metamfetamin/sabu).',
    clinicalReference: 'Peraturan Pemerintah RI No. 44 Tahun 2010 tentang Prekursor Farmasi',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1007',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien datang ke apotek membawa strip tes kolesterol darah mandiri yang kodenya tidak sesuai dengan mesin pengukur. TTK membantu memasukkan cip pengkodean (code chip).',
    question: 'Mengapa cip pengkodean (code chip / kalibrator) harus dipasang dan dicocokkan nomor kodenya pada alat tes cepat (rapid test meter)?',
    options: [
      { key: 'A', text: 'Mengalibrasi kepekaan optik dan kurva pembacaan enzim alat sesuai nomor lot strip' },
      { key: 'B', text: 'Memberi daya baterai tambahan pada alat pengukur' },
      { key: 'C', text: 'Membersihkan kotoran darah pada lensa baca alat' },
      { key: 'D', text: 'Mengubah satuan mg/dL menjadi satuan persen' },
      { key: 'E', text: 'Merekam nama lengkap pasien secara nirkabel' }
    ],
    correctAnswer: 'A',
    explanation: 'Code chip (cip kalibrasi) berisi data parameter kalibrasi kurva regresi enzimatis yang spesifik untuk setiap lot produksi strip reagen. Pemasangan cip memastikan fotometer/amperometer alat membaca sinyal listrik reaksi secara tepat dan akurat sesuai karakteristik lot batch tersebut.',
    clinicalReference: 'Panduan Uji Mandiri Diagnostik In-Vitro POCT Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1008',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Dalam penyiapan perbekalan farmasi untuk pasien bedah sesar (Sectio Caesarea), TTK menyiapkan sediaan injeksi Oksitosin 10 IU/mL ampul.',
    question: 'Berapakah suhu penyimpanan yang wajib dipatuhi untuk menjaga stabilitas sediaan hormon Oksitosin injeksi?',
    options: [
      { key: 'A', text: 'Suhu dingin 2 derajat C sampai 8 derajat C (chiller)' },
      { key: 'B', text: 'Suhu beku di bawah -10 derajat C' },
      { key: 'C', text: 'Suhu ruang hangat 30 derajat C sampai 35 derajat C' },
      { key: 'D', text: 'Suhu ruang terbuka terkena cahaya' },
      { key: 'E', text: 'Bebas disimpan tanpa pendingin' }
    ],
    correctAnswer: 'A',
    explanation: 'Injeksi Oksitosin adalah hormon peptida uterotonika yang sangat rentan mengalami degradasi termal bila terpapar panas. Berdasarkan standar Farmakope dan CPOB, sediaan injeksi oksitosin wajib disimpan dalam lemari pendingin pada suhu 2°C s/d 8°C dan terlindung dari cahaya guna mencegah hilangnya potensi obat penanganan perdarahan pasca persalinan.',
    clinicalReference: 'WHO Guidelines for Oxytocin Storage & Formularium Nasional Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1009',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Seorang TTK di instalasi farmasi memeriksa kemasan tablet hisap Dequalinium Klorida. Pada kemasan terdapat lingkaran hijau dengan garis tepi hitam tebal.',
    question: 'Termasuk dalam golongan obat apakah sediaan dengan penandaan lingkaran hijau garis tepi hitam tersebut?',
    options: [
      { key: 'A', text: 'Obat Bebas' },
      { key: 'B', text: 'Obat Bebas Terbatas' },
      { key: 'C', text: 'Obat Keras' },
      { key: 'D', text: 'Obat Narkotika' },
      { key: 'E', text: 'Obat Psikotropika' }
    ],
    correctAnswer: 'A',
    explanation: 'Golongan Obat Bebas ditandai dengan lingkaran berwarna hijau dengan garis tepi berwarna hitam tebal. Obat Bebas dapat dibeli secara bebas di apotek, toko obat berizin, maupun swalayan tanpa resep dokter.',
    clinicalReference: 'Keputusan Menteri Kesehatan RI tentang Tanda Khusus Obat Bebas dan Terbatas',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1010',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Dalam pengelolaan obat di puskesmas, TTK menemukan vaksin Campak yang tersisa setelah pelayanan imunisasi posyandu selesai pada siang hari.',
    question: 'Berapa jamkah batas maksimal penggunaan vaksin Campak cair setelah dilarutkan dengan pelarutnya menurut pedoman rantai dingin Kemenkes RI?',
    options: [
      { key: 'A', text: 'Maksimal 6 jam setelah dilarutkan' },
      { key: 'B', text: 'Maksimal 24 jam setelah dilarutkan' },
      { key: 'C', text: 'Maksimal 3 hari setelah dilarutkan' },
      { key: 'D', text: 'Maksimal 7 hari setelah dilarutkan' },
      { key: 'E', text: 'Dapat digunakan sampai 1 bulan berikutnya' }
    ],
    correctAnswer: 'A',
    explanation: 'Vaksin Campak (dan vaksin BCG) adalah vaksin hidup yang dilemahkan dalam bentuk serbuk liofilisasi kering tanpa bahan pengawet. Setelah dilarutkan dengan pelarut khususnya, vaksin harus disimpan dalam suhu 2-8°C dan hanya boleh digunakan maksimal selama 6 jam. Sisa vaksin setelah 6 jam wajib dibuang karena potensi bakterisida hilang dan risiko kontaminasi toksik syok sindrom.',
    clinicalReference: 'Petunjuk Teknis Pelaksanaan Imunisasi Kemenkes RI & WHO Multi-Dose Vial Policy',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1011',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien datang ke apotek ingin membeli perban elastis (Elastic Bandage / Tensocrepe) ukuran 4 inci untuk membebat pergelangan kakinya yang mengalami cedera terkilir (sprain ankle).',
    question: 'Fungsi utama apakah yang diberikan oleh perban elastis pada penanganan awal cedera terkilir tersebut?',
    options: [
      { key: 'A', text: 'Memberikan kompresi untuk membatasi pembengkakan dan menstabilkan persendian' },
      { key: 'B', text: 'Membunuh bakteri patogen pada kulit luar' },
      { key: 'C', text: 'Menghangatkan sendi sampai suhu 45 derajat C' },
      { key: 'D', text: 'Menggantikan fungsi gips semen tulang yang patah' },
      { key: 'E', text: 'Menghilangkan rasa nyeri secara biokimiawi sistemik' }
    ],
    correctAnswer: 'A',
    explanation: 'Perban elastis (elastic bandage) digunakan pada protokol tatalaksana cedera RICE (Rest, Ice, Compression, Elevation). Fungsi perban elastis adalah memberikan tekanan mekanis (compression) yang merata untuk mengurangi penumpukan cairan edema / pembengkakan dan menyangga stabilitas ligamentum sendi yang teregang.',
    clinicalReference: 'Katalog Alat Kesehatan Imobilisasi & Pedoman Pertolongan Pertama Pada Cedera',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1012',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'TTK di bagian pengadaan obat apotek sedang menghitung jumlah persediaan pengaman (Buffer Stock / Safety Stock) untuk sirup antibiotik.',
    question: 'Faktor ketidakpastian utama apakah yang diantisipasi oleh penetapan Safety Stock dalam manajemen rantai pasok farmasi?',
    options: [
      { key: 'A', text: 'Keterlambatan pengiriman dari PBF (lead time delay) dan lonjakan kebutuhan mendadak' },
      { key: 'B', text: 'Kenaikan tarif pajak penghasilan apotek' },
      { key: 'C', text: 'Perubahan warna logo apotek' },
      { key: 'D', text: 'Penurunan harga obat oleh pabrik' },
      { key: 'E', text: 'Penggantian kemasan sekunder kardus' }
    ],
    correctAnswer: 'A',
    explanation: 'Safety Stock (persediaan pengaman) adalah cadangan stok obat yang disimpan untuk melindungi apotek/RS dari risiko kekosongan obat (stockout) yang disebabkan oleh dua faktor utama: keterlambatan pengiriman barang oleh distributor (lead time variation) dan lonjakan peningkatan konsumsi/resep pasien yang tidak terduga.',
    clinicalReference: 'Pedoman Pengelolaan Persediaan Farmasi Terpadu Kemenkes RI',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1013',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien yang terbaring lama di tempat tidur (bedridden) berisiko tinggi mengalami luka lecet akibat penekanan jaringan berkepanjangan (ulkus dekubitus). Dokter menyarankan keluarga pasien menyewa kasur udara khusus dengan kompresor otomatis.',
    question: 'Apakah nama alat kesehatan tempat tidur anti-dekubitus tersebut?',
    options: [
      { key: 'A', text: 'Decubitus Air Mattress (Kasur Anti-Dekubitus)' },
      { key: 'B', text: 'Heating Pad' },
      { key: 'C', text: 'Examination Bed' },
      { key: 'D', text: 'Spinal Traction Table' },
      { key: 'E', text: 'Stretcher Bed' }
    ],
    correctAnswer: 'A',
    explanation: 'Decubitus Air Mattress (kasur angin anti-dekubitus) adalah matras medis bergelombang yang dihubungkan dengan pompa kompresor udara elektrik. Kompresor secara berkala memompa dan mengempiskan kolom-kolom kantong udara secara bergantian, sehingga titik tekanan pada tubuh pasien berpindah-pindah dan sirkulasi darah kapiler kulit terjaga.',
    clinicalReference: 'Katalog Alat Kesehatan Perawatan Pasien Rawat Tirah Baring Kemenkes RI',
    difficulty: 'Mudah'
  }
];
