import { ExamQuestion } from '../competencyExamData';

/**
 * Bank Soal Kasus Vignette CBT Bagian 3 (Nomor q-172 s/d q-221)
 * Melengkapi total bank soal hingga genap 221 Soal CBT Berstandar Nasional
 * 25 Soal Khusus UKTVK (Vokasi/TTK) + 25 Soal Lanjutan UKMPPAI (Apoteker)
 */
export const CBT_EXPANSION_PART_3: ExamQuestion[] = [
  // =========================================================================
  // 🔬 25 SOAL KHUSUS UKTVK (TENAGA VOKASI KEFARMASIAN / TTK)
  // =========================================================================
  {
    id: 'q-172',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Seorang Tenaga Teknis Kefarmasian (TTK) di laboratorium pengujian mutu makanan sedang menguji sampel bakso daging sapi yang dicurigai mengandung pengawet berbahaya Boraks. Sampel bakso diasamkan dengan asam klorida encer, kemudian diteteskan ke atas kertas kurkumin. Setelah dikeringkan, kertas kurkumin berubah warna menjadi MERAH MAWAR (Rosocyanin). Ketika ditetesi uap larutan Amonia encer, warna merah tersebut berubah seketika menjadi HIJAU KEHITAMAN.',
    question: 'Berdasarkan reaksi warna spesifik tersebut, apakah kesimpulan analisis kualitatif yang dilaporkan oleh TTK?',
    options: [
      { key: 'A', text: 'Sampel positif mengandung Formalin' },
      { key: 'B', text: 'Sampel positif mengandung Natrium Tetraborat (Boraks)' },
      { key: 'C', text: 'Sampel positif mengandung pewarna Rhodamin B' },
      { key: 'D', text: 'Sampel positif mengandung pemanis Siklamat' },
      { key: 'E', text: 'Sampel negatif dan aman dikonsumsi' }
    ],
    correctAnswer: 'B',
    explanation: 'Uji kertas kurkumin (Turmeric paper) adalah metode kualitatif spesifik resmi untuk identifikasi senyawa BORAKS (Natrium Tetraborat) atau Asam Borat. Dalam suasana asam klorida, asam borat bereaksi dengan kurkumin membentuk kompleks khelat berwarna merah mawar yang disebut ROSOCYANIN. Penambahan basa/uap amonia (NH4OH) akan mengubah rosocyanin menjadi garam boron sianin yang berwarna hijau kehitaman atau biru gelap.',
    clinicalReference: 'Pedoman Pengujian Cemaran Bahan Berbahaya Makanan Badan POM RI & Permenkes No. 033/2012',
    difficulty: 'Mudah'
  },
  {
    id: 'q-173',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Analis farmasi di Balai POM sedang menguji sampel mie basah kuning kenyal yang tidak membusuk setelah 3 hari pada suhu ruang. Sampel dipotong halus, ditambahkan air suling, lalu didestilasi. Ke dalam 1 mL filtrat distilat, analis menambahkan larutan Asam Kromatropat dan beberapa tetes Asam Sulfat pekat, kemudian dipanaskan di atas penangas air mendidih selama 10 menit. Larutan uji menghasilkan warna UNGU VIOLET pekat.',
    question: 'Senyawa pengawet non-pangan berbahaya apakah yang terbukti terkandung dalam sampel mie basah tersebut?',
    options: [
      { key: 'A', text: 'Asam Benzoat' },
      { key: 'B', text: 'Boraks' },
      { key: 'C', text: 'Formalin (Formaldehida)' },
      { key: 'D', text: 'Kalium Sorbat' },
      { key: 'E', text: 'Natrium Nitrit' }
    ],
    correctAnswer: 'C',
    explanation: 'Reaksi Asam Kromatropat (Chromotropic Acid Test) adalah reaksi identifikasi spesifik untuk FORMALDEHIDA (Formalin). Dalam suasana asam sulfat pekat panas, formaldehida bereaksi dengan asam 4,5-dihidroksinaftalen-2,7-disulfonat (asam kromatropat) menghasilkan senyawa kondensasi difenilmetan teroksidasi yang berwarna UNGU VIOLET intens.',
    clinicalReference: 'Farmakope Indonesia Edisi VI & Manual Laboratorium Pengujian Toksikologi Pangan BPOM',
    difficulty: 'Mudah'
  },
  {
    id: 'q-174',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Petugas laboratorium pangan menguji kerupuk pasir berwarna merah menyala mencolok. Sampel diekstraksi dengan asam asetat encer, lalu dimasukkan sehelai benang wol bebas lemak dan dididihkan selama 30 menit. Pewarna merah terserap kuat pada serat benang wol dan tidak luntur saat dicuci air mengalir. Setelah serat wol dielusi dengan larutan amonia 10%, eluat diamati di bawah lampu sinar ultraviolet (UV 366 nm) dan memancarkan pendaran fluoresensi KUNING KEMERAHAN cerah.',
    question: 'Pewarna sintetis terlarang untuk tekstil manakah yang terkandung dalam kerupuk tersebut?',
    options: [
      { key: 'A', text: 'Ponceau 4R' },
      { key: 'B', text: 'Amaranth' },
      { key: 'C', text: 'Rhodamin B' },
      { key: 'D', text: 'Eritrosin' },
      { key: 'E', text: 'Allura Red' }
    ],
    correctAnswer: 'C',
    explanation: 'RHODAMIN B adalah zat warna sintetis terlarang untuk pangan yang lazim digunakan pada industri tekstil dan kertas. Ciri khas Rhodamin B adalah warna merah mencolok yang berpendar (fluoresensi kuat kuning-oranye/kemerahan) di bawah radiasi sinar ultraviolet (UV 254 nm atau 366 nm) dan memiliki afinitas tinggi mengikat serat keratin benang wol bebas lemak dalam suasana asam.',
    clinicalReference: 'Peraturan Badan Pengawas Obat dan Makanan tentang Bahan Tambahan Pangan Terlarang',
    difficulty: 'Sedang'
  },
  {
    id: 'q-175',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Tenaga Teknis Kefarmasian menerima resep racikan puyer untuk pasien anak perempuan berusia 6 tahun (BB 20 kg): R/ Atropin Sulfat 0,2 mg; Saccharum Lactis q.s.; m.f. pulv. d.t.d. No. X; S 3 dd pulv I. Di dalam Farmakope Indonesia Edisi III tercantum Dosis Maksimum (DM) Atropin Sulfat untuk orang dewasa adalah 1 mg (sekali) dan 3 mg (sehari). Rumus konversi dosis anak yang digunakan di apotek adalah Rumus Young [n / (n + 12)].',
    question: 'Berapakah persentase pemakaian Dosis Maksimum (% DM) Atropin Sulfat untuk SEKALI MINUM pada pasien anak tersebut?',
    options: [
      { key: 'A', text: '30%' },
      { key: 'B', text: '40%' },
      { key: 'C', text: '60%' },
      { key: 'D', text: '75%' },
      { key: 'E', text: '120%' }
    ],
    correctAnswer: 'C',
    explanation: 'Perhitungan Dosis Maksimum (DM) FI III:\n1. Usia anak n = 6 tahun (menggunakan rumus Young).\n2. Faktor Pengali = n / (n + 12) = 6 / (6 + 12) = 6 / 18 = 1/3 (0,333).\n3. DM 1x Minum Anak = 1/3 × DM Dewasa (1 mg) = 0,333 mg.\n4. Dosis Resep 1x Minum = 0,2 mg.\n5. Persentase % DM 1x Minum = (0,2 mg / 0,333 mg) × 100% = 60,0%.\nKarena 60% < 100%, dosis sekali minum dinyatakan aman (tidak overdosis).',
    clinicalReference: 'Farmakope Indonesia Edisi III: Ketentuan Dosis Maksimum & Pedoman Compounding Farmasi',
    difficulty: 'Sedang'
  },
  {
    id: 'q-176',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Seorang TTK sedang melakukan skrining dosis resep anak usia 10 tahun: R/ Kodein HCl 15 mg; m.f. pulv. d.t.d No. XII; S 3 dd pulv I. Diketahui dalam Farmakope Indonesia Edisi III, Dosis Maksimum (DM) Kodein HCl untuk dewasa adalah 60 mg (sekali) dan 300 mg (sehari). Untuk anak usia 10 tahun (>= 8 tahun), perhitungan DM menggunakan Rumus Dilling [n / 20].',
    question: 'Berapakah persentase pemakaian Dosis Maksimum SEHARI (% DM Sehari) dari resep Kodein tersebut?',
    options: [
      { key: 'A', text: '15%' },
      { key: 'B', text: '30%' },
      { key: 'C', text: '45%' },
      { key: 'D', text: '60%' },
      { key: 'E', text: '75%' }
    ],
    correctAnswer: 'B',
    explanation: 'Perhitungan DM Sehari anak usia 10 tahun:\n1. DM Sehari Anak (Rumus Dilling) = (10 / 20) × DM Dewasa Sehari (300 mg) = 1/2 × 300 mg = 150 mg.\n2. Dosis resep sekali minum = 15 mg.\n3. Dosis resep sehari (S 3 dd pulv I) = 3 × 15 mg = 45 mg.\n4. Persentase % DM Sehari = (45 mg / 150 mg) × 100% = 30%.\nDosis berada dalam batas aman (% DM < 100%).',
    clinicalReference: 'Farmakope Indonesia Edisi III: Daftar Dosis Maksimum Obat Keras Narkotika',
    difficulty: 'Sedang'
  },
  {
    id: 'q-177',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Diterima resep serbuk bagi yang membutuhkan bahan Atropin Sulfat murni sebanyak 10 mg. Timbangan obat halus di laboratorium apotek memiliki batas penimbangan terkecil 50 mg. Untuk mengatasi hal tersebut, TTK melakukan prosedur pengenceran bertingkat (triturasi) dengan menimbang 50 mg Atropin Sulfat dan menambahkan Laktosa serta sedikit serbuk pewarna Carmin hingga bobot total campuran mencapai 500 mg.',
    question: 'Berapakah bobot campuran serbuk pengenceran yang harus diambil untuk dimasukkan ke dalam racikan resep tersebut, serta apakah fungsi utama zat warna Carmin?',
    options: [
      { key: 'A', text: 'Ambil 50 mg; Carmin berfungsi sebagai zat pemanis' },
      { key: 'B', text: 'Ambil 100 mg; Carmin berfungsi sebagai indikator visual homogenitas campuran serbuk' },
      { key: 'C', text: 'Ambil 150 mg; Carmin berfungsi sebagai zat pengawet anti-jamur' },
      { key: 'D', text: 'Ambil 200 mg; Carmin berfungsi untuk mempercepat kelarutan zat aktif' },
      { key: 'E', text: 'Ambil 100 mg; Carmin berfungsi sebagai zat penambah massa bobot puyer' }
    ],
    correctAnswer: 'B',
    explanation: 'Perhitungan Pengenceran Bertingkat:\n• Bobot yang dibutuhkan = 10 mg.\n• Bobot awal zat aktif ditimbang = 50 mg.\n• Bobot total campuran pengenceran = 500 mg.\n• Jumlah campuran yang diambil = (10 mg / 50 mg) × 500 mg = 100 mg.\nFungsi penambahan zat pewarna inert Carmin pada pengenceran obat keras/beracun adalah sebagai INDIKATOR VISUAL HOMOGENITAS; campuran serbuk dinyatakan telah homogen sempurna jika warna merah muda tersebar merata tanpa adanya bintik-bintik putih.',
    clinicalReference: 'Ilmu Meracik Obat (Moh. Anief) & Ketentuan Compounding Farmakope Indonesia',
    difficulty: 'Mudah'
  },
  {
    id: 'q-178',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Seorang analis farmasi sedang menguji angka kesadahan total kalsium dan magnesium pada sampel air baku laboratorium menggunakan metode titrasi kompleksometri. Sebanyak 50 mL sampel air ditambahkan 2 mL larutan dapar salmiak (pH 10) dan seujung sendok indikator Eriochrome Black T (EBT) sehingga larutan berwarna merah anggur. Larutan kemudian dititrasi dengan Dinatrium EDTA 0,01 M standar.',
    question: 'Apakah perubahan warna yang menandakan titik akhir titrasi kompleksometri tersebut tercapai secara tepat?',
    options: [
      { key: 'A', text: 'Dari merah anggur berubah menjadi tidak berwarna bening' },
      { key: 'B', text: 'Dari merah anggur berubah menjadi warna BIRU MURNI' },
      { key: 'C', text: 'Dari merah anggur terbentuk endapan putih' },
      { key: 'D', text: 'Dari merah anggur berubah menjadi kuning jerami' },
      { key: 'E', text: 'Dari merah anggur berubah menjadi merah bata' }
    ],
    correctAnswer: 'B',
    explanation: 'Pada titrasi kompleksometri kesadahan air menggunakan EDTA dan indikator EBT pada suasana dapar basa pH 10, ion Ca2+ dan Mg2+ mula-mula membentuk kompleks lemah dengan EBT yang berwarna MERAH ANGGUR. Saat dititrasi, EDTA yang memiliki konstanta kestabilan khelat jauh lebih kuat akan merebut seluruh ion logam dari EBT. Titik akhir titrasi ditandai dengan terbebasnya molekul indikator EBT bebas yang menghasilkan warna BIRU MURNI.',
    clinicalReference: 'Vogel’s Textbook of Quantitative Chemical Analysis & Standar Pengujian Air Laboratorium SNI',
    difficulty: 'Sedang'
  },
  {
    id: 'q-179',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Departemen QC melakukan penetapan kadar bahan baku Parasetamol secara volumetri menggunakan metode titrasi Nitrimetri. Serbuk sampel dihidrolisis terlebih dahulu dengan asam klorida pekat mendidih untuk mengubah gugus asetilamin menjadi amin aromatik primer, kemudian labu titrasi dimasukkan ke dalam bejana berisi bongkahan es batu hingga suhu mencapai 10°C sebelum dititrasi dengan larutan baku Natrium Nitrit (NaNO2) 0,1 M.',
    question: 'Mengapakah proses titrasi Nitrimetri WAJIB dilaksanakan pada suhu dingin di bawah 15°C?',
    options: [
      { key: 'A', text: 'Untuk mencegah pengendapan parasetamol dari pelarut asam' },
      { key: 'B', text: 'Untuk mencegah penguraian garam diazonium yang tidak stabil dan penguapan asam nitrit' },
      { key: 'C', text: 'Untuk memperlambat reaksi hidrolisis gugus amida' },
      { key: 'D', text: 'Untuk meningkatkan kelarutan gas nitrogen di udara' },
      { key: 'E', text: 'Agar warna indikator kanji iodida tidak memudar' }
    ],
    correctAnswer: 'B',
    explanation: 'Prinsip titrasi Nitrimetri adalah reaksi diazotasi antara gugus amin aromatik primer dengan asam nitrit (HNO2 yang dibentuk in situ dari NaNO2 + HCl) membentuk GARAM DIAZONIUM. Garam diazonium alifatik dan aromatik sangat termolabil (tidak stabil terhadap panas) dan akan terurai menjadi fenol disertai pelepasan gas nitrogen jika suhu di atas 15°C. Selain itu, asam nitrit mudah menguap pada suhu hangat. Oleh karena itu, suhu titrasi wajib dijaga antara 5°C - 15°C menggunakan penangas es.',
    clinicalReference: 'Farmakope Indonesia Edisi VI: Prosedur Titrasi Nitrimetri Diazotasi',
    difficulty: 'Sedang'
  },
  {
    id: 'q-180',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Analis farmasi menguji kadar ion klorida (Cl-) dalam sediaan infus Natrium Klorida 0,9% menggunakan metode titrasi Argentometri Mohr. Sampel diatur pada pH netral 7,0, ditambahkan indikator larutan Kalium Kromat (K2CrO4) 5%, lalu dititrasi dengan larutan standar Perak Nitrat (AgNO3) 0,1 N.',
    question: 'Apakah senyawa dan warna endapan yang terbentuk tepat pada saat titik akhir titrasi Mohr tercapai?',
    options: [
      { key: 'A', text: 'Endapan putih Perak Klorida (AgCl)' },
      { key: 'B', text: 'Endapan MERAH BATA Perak Kromat (Ag2CrO4)' },
      { key: 'C', text: 'Endapan hitam Perak Oksida (Ag2O)' },
      { key: 'D', text: 'Endapan kuning Perak Iodida (AgI)' },
      { key: 'E', text: 'Larutan jernih kompleks perak amonia' }
    ],
    correctAnswer: 'B',
    explanation: 'Pada metode Mohr, ion Cl- bereaksi lebih dulu dengan AgNO3 membentuk endapan putih AgCl (karena Ksp AgCl lebih kecil). Setelah seluruh ion Cl- mengendap sempurna, kelebihan setetes Ag+ akan bereaksi dengan indikator kromat (CrO4 2-) membentuk endapan PERAK KROMAT (Ag2CrO4) yang berwarna MERAH BATA sebagai penanda titik akhir titrasi. Titrasi harus dilakukan pada rentang pH 6,5 - 9,0.',
    clinicalReference: 'Farmakope Indonesia Edisi VI & Kimia Farmasi Kuantitatif',
    difficulty: 'Mudah'
  },
  {
    id: 'q-181',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Seorang staf QC di industri farmasi sedang melakukan In-Process Control (IPC) pengujian waktu hancur sediaan Tablet Salut Enterik Natrium Diklofenak 50 mg menggunakan alat Disintegration Tester. Sebanyak 6 tablet dimasukkan ke dalam keranjang tabung yang dicelupkan ke dalam bejana berisi larutan Asam Klorida 0,1 N suhu 37°C selama 2 jam penuh. Setelah 2 jam, tidak ada satu pun tablet yang hancur atau retak. Selanjutnya keranjang dipindahkan ke bejana berisi larutan dapar fosfat pH 6,8.',
    question: 'Berapakah batas waktu maksimal yang dipersyaratkan Farmakope Indonesia agar seluruh tablet salut enterik tersebut hancur sempurna dalam medium dapar fosfat pH 6,8?',
    options: [
      { key: 'A', text: 'Kurang dari 5 menit' },
      { key: 'B', text: 'Kurang dari 15 menit' },
      { key: 'C', text: 'Kurang dari 30 menit' },
      { key: 'D', text: 'Kurang dari 60 menit' },
      { key: 'E', text: 'Kurang dari 120 menit' }
    ],
    correctAnswer: 'D',
    explanation: 'Berdasarkan Farmakope Indonesia Edisi VI (Lampiran <1251> Uji Waktu Hancur), pengujian tablet salut enterik dilakukan dalam 2 tahap:\n1. Tahap Asam (HCl 0,1 N, 37°C): Selama 2 JAM tidak boleh ada tablet yang hancur, retak, atau melunak.\n2. Tahap Dapar Fosfat pH 6,8: Setelah dipindahkan ke media dapar pH 6,8, seluruh keenam tablet WAJIB HANCUR SEMPURNA dalam waktu KURANG DARI 60 MENIT.',
    clinicalReference: 'Farmakope Indonesia Edisi VI: Uji Waktu Hancur Tablet Salut Enterik',
    difficulty: 'Sedang'
  },
  {
    id: 'q-182',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Analis QC melakukan pengujian kerapuhan (Friability Test) terhadap tablet Parasetamol 500 mg. Sebelum diuji, 20 tablet dibebasdebukan dan ditimbang dengan bobot awal 13,00 gram. Tablet kemudian diputar pada friabilator dengan kecepatan 25 rpm selama 4 menit (100 putaran). Setelah selesai, tablet dibebasdebukan kembali dan ditimbang diperoleh bobot akhir 12,88 gram. Tidak ada tablet yang patah atau terbelah.',
    question: 'Berapakah persentase kerapuhan (% F) tablet tersebut dan bagaimanakah status kelulusan mutunya menurut Farmakope?',
    options: [
      { key: 'A', text: '% F = 0,923% ; Lulus uji kerapuhan (< 1,0%)' },
      { key: 'B', text: '% F = 1,200% ; Tidak lulus uji kerapuhan (> 1,0%)' },
      { key: 'C', text: '% F = 0,120% ; Lulus uji kerapuhan' },
      { key: 'D', text: '% F = 2,500% ; Tidak lulus uji kerapuhan' },
      { key: 'E', text: '% F = 0,085% ; Lulus uji kerapuhan' }
    ],
    correctAnswer: 'A',
    explanation: 'Perhitungan Friabilitas Tablet:\n• Selisih bobot hilang = Bobot Awal - Bobot Akhir = 13,00 g - 12,88 g = 0,12 gram.\n• % Kerapuhan (% F) = (0,12 g / 13,00 g) × 100% = 0,923%.\nPersyaratan resmi Farmakope Indonesia VI: Nilai kerapuhan tablet oral yang dapat diterima adalah KURANG DARI 1,0% dan tidak boleh ada tablet yang mengalami capping atau pecah. Karena 0,923% < 1,0%, bets tablet dinyatakan LULUS.',
    clinicalReference: 'Farmakope Indonesia VI Lampiran <1261> Kerapuhan Tablet & CPOB BPOM',
    difficulty: 'Mudah'
  },
  {
    id: 'q-183',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Pada pengujian keseragaman bobot 20 tablet Antalgin dengan bobot rata-rata 600 mg (bobot > 300 mg), Farmakope Indonesia menetapkan batas penyimpangan Kolom A sebesar 5% dan Kolom B sebesar 10%. Hasil penimbangan 20 tablet menunjukkan ada 1 tablet yang bobotnya menyimpang 7% (antara rentang 5% dan 10%), dan 19 tablet lainnya menyimpang kurang dari 3%. Tidak ada satu pun tablet yang menyimpang di atas 10%.',
    question: 'Apakah kesimpulan evaluasi keseragaman bobot tablet tersebut?',
    options: [
      { key: 'A', text: 'Tidak memenuhi syarat karena ada 1 tablet yang menyimpang > 5%' },
      { key: 'B', text: 'Memenuhi syarat karena tidak lebih dari 2 tablet yang menyimpang di Kolom A dan tidak ada satu pun tablet yang menyimpang di Kolom B' },
      { key: 'C', text: 'Uji harus diulang dengan 50 tablet tambahan' },
      { key: 'D', text: 'Tidak memenuhi syarat karena deviasi harus nol persen' },
      { key: 'E', text: 'Bets tablet harus dilebur dan dicetak ulang' }
    ],
    correctAnswer: 'B',
    explanation: 'Sesuai Farmakope Indonesia, kriteria kelulusan uji keseragaman bobot tablet non-salut adalah:\n1. Tidak boleh lebih dari 2 tablet yang bobotnya menyimpang dari bobot rata-rata lebih besar dari persentase Kolom A (pada kasus ini hanya ada 1 tablet, memenuhi syarat).\n2. Tidak boleh ada satu pun tablet (0 tablet) yang bobotnya menyimpang lebih besar dari persentase Kolom B (pada kasus ini 0 tablet yang > 10%, memenuhi syarat).\nOleh karena itu, bets tablet dinyatakan MEMENUHI SYARAT.',
    clinicalReference: 'Farmakope Indonesia Edisi III: Keseragaman Bobot Tablet',
    difficulty: 'Sedang'
  },
  {
    id: 'q-184',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien datang ke apotek untuk membeli obat kumur antiseptik Povidone Iodine 1% Gargarisma untuk meredakan radang gusi. Pada kemasan primer dan sekunder botol obat kumur tersebut, tertera logo lingkaran biru dengan garis tepi hitam (Obat Bebas Terbatas) disertai kotak tanda peringatan persegi panjang berwarna hitam dengan tulisan putih.',
    question: 'Apakah bunyi teks resmi Tanda Peringatan Khusus yang WAJIB dicantumkan pada kemasan obat kumur tersebut?',
    options: [
      { key: 'A', text: 'P.No 1: Awas! Obat Keras. Bacalah aturan memakainya.' },
      { key: 'B', text: 'P.No 2: Awas! Obat Keras. Hanya untuk kumur, jangan ditelan.' },
      { key: 'C', text: 'P.No 3: Awas! Obat Keras. Hanya untuk bagian luar dari badan.' },
      { key: 'D', text: 'P.No 4: Awas! Obat Keras. Hanya untuk dibakar.' },
      { key: 'E', text: 'P.No 5: Awas! Obat Keras. Tidak boleh ditelan.' }
    ],
    correctAnswer: 'B',
    explanation: 'Berdasarkan Kepmenkes RI No. 2380/A/SK/VI/83 tentang Tanda Peringatan Obat Bebas Terbatas, sediaan obat kumur (Gargarisma / Mouthwash) yang mengandung zat aktif obat keras diwajibkan mencantumkan Peringatan Nomor 2 (P.No 2) yang berbunyi: "P.No. 2: Awas! Obat Keras. Hanya untuk kumur, jangan ditelan."',
    clinicalReference: 'Keputusan Menteri Kesehatan RI tentang Tanda Peringatan pada Kemasan Obat Bebas Terbatas',
    difficulty: 'Mudah'
  },
  {
    id: 'q-185',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Seorang Tenaga Teknis Kefarmasian sedang menyusun etiket dan memeriksa kelengkapan penyerahan sediaan Suppositoria anti-hemoroid (obat wasir rektal) yang tergolong ke dalam golongan Obat Bebas Terbatas di apotek.',
    question: 'Tanda peringatan resmi bernomor berapakah yang wajib tertera pada kemasan sediaan suppositoria wasir tersebut?',
    options: [
      { key: 'A', text: 'P.No 1' },
      { key: 'B', text: 'P.No 3' },
      { key: 'C', text: 'P.No 4' },
      { key: 'D', text: 'P.No 5' },
      { key: 'E', text: 'P.No 6: Awas! Obat Keras. Obat wasir, jangan ditelan.' }
    ],
    correctAnswer: 'E',
    explanation: 'Tanda Peringatan Nomor 6 (P.No 6) berbunyi spesifik: "Awas! Obat Keras. Obat wasir, jangan ditelan." Tanda peringatan ini diwajibkan secara hukum untuk dicantumkan pada kemasan obat wasir/ambeien, khususnya sediaan suppositoria per rektal agar pasien tidak menelan sediaan tersebut lewat mulut.',
    clinicalReference: 'Regulasi Penggolongan Obat Bebas Terbatas Kemenkes RI & Buku Saku Etika Profesi PAFI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-186',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Di laboratorium mikrobiologi farmasi, seorang TTK melakukan pewarnaan Gram terhadap biakan bakteri yang diambil dari sampel nanah abses. Setelah melalui tahapan pengecatan Kristal Violet, penambahan Lugol, pencucian dengan Alkohol 96%, dan pengecatan penutup Safranin, preparat diamati di bawah mikroskop perbesaran 1000x dengan minyak imersi. Terlihat morfologi sel berbentuk bulat berkelompok menyerupai buah anggur berwarna UNGU.',
    question: 'Apakah golongan bakteri dan penyebab warna UNGU tersebut tertahan pada sel bakteri?',
    options: [
      { key: 'A', text: 'Bakteri Gram Negatif ; Dinding sel tipis kaya lipopolisakarida' },
      { key: 'B', text: 'Bakteri Gram Positif ; Dinding sel memiliki lapisan peptidoglikan yang tebal sehingga kompleks kristal violet-iodin tidak luntur oleh alkohol' },
      { key: 'C', text: 'Bakteri Tahan Asam ; Mengandung asam mikolat tinggi' },
      { key: 'D', text: 'Bakteri Gram Negatif ; Mengikat zat warna safranin secara kovalen' },
      { key: 'E', text: 'Bakteri spora anaerob ; Memiliki lapisan korteks kalsium dipikolinat' }
    ],
    correctAnswer: 'B',
    explanation: 'Bakteri Gram-Positif (seperti Staphylococcus aureus) memiliki struktur dinding sel yang tersusun atas lapisan PEPTIDOGLIKAN SANGAT TEBAL (mencapai 40-80 lapis) dengan asam teikoat. Pencucian dengan alkohol mendehidrasi dinding sel peptidoglikan sehingga pori-porinya mengecil dan mengunci kompleks Kristal Violet-Iodin (CV-I) di dalam sel, mempertahankan warna UNGU. Sebaliknya, Gram-negatif dinding peptidoglikannya tipis dan membran luar lipidnya larut oleh alkohol sehingga warna ungu luntur dan terwarnai merah oleh safranin.',
    clinicalReference: 'Mikrobiologi Farmasi Dasar & Farmakope Indonesia Edisi VI Lampiran Uji Batas Mikroba',
    difficulty: 'Sedang'
  },
  {
    id: 'q-187',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Hasil pemeriksaan pewarnaan Gram dari sampel air limbah industri menunjukkan bakteri berbentuk batang (basil) yang berwarna MERAH MUDA terang di bawah mikroskop.',
    question: 'Contoh bakteri patogen Gram-Negatif berbentuk batang manakah yang sesuai dengan karakteristik pewarnaan tersebut?',
    options: [
      { key: 'A', text: 'Staphylococcus epidermidis' },
      { key: 'B', text: 'Bacillus subtilis' },
      { key: 'C', text: 'Escherichia coli' },
      { key: 'D', text: 'Streptococcus pyogenes' },
      { key: 'E', text: 'Clostridium tetani' }
    ],
    correctAnswer: 'C',
    explanation: 'Escherichia coli (serta Pseudomonas aeruginosa dan Salmonella typhi) adalah bakteri Gram-Negatif berbentuk batang (basil) yang pada prosedur pewarnaan Gram akan terwarnai MERAH MUDA karena menyerap zat warna pembanding Safranin setelah kompleks ungu kristal violet dilunturkan oleh pelarut alkohol.',
    clinicalReference: 'Atlas Mikrobiologi Farmasi & Pengujian Mutu Mikrobiologi Sediaan Farmasi',
    difficulty: 'Mudah'
  },
  {
    id: 'q-188',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Bagian formulasi sedang menyiapkan sediaan salep mata steril dengan basis minyak hidrofobik yang terdiri dari Vaselin Kuning (Vaselinum Flavum), Parafin Cair, dan Lemak Bulu Domba (Adeps Lanae). Basis salep minyak tersebut harus disterilisasi sebelum dicampurkan dengan zat aktif antibiotik secara aseptis.',
    question: 'Metode sterilisasi resmi manakah yang WAJIB dipilih untuk mensterilkan basis salep minyak tersebut?',
    options: [
      { key: 'A', text: 'Sterilisasi Uap Basah Autoklaf 121°C selama 15 menit' },
      { key: 'B', text: 'Sterilisasi Panas Kering dengan Oven pada suhu 160°C selama 1-2 jam' },
      { key: 'C', text: 'Filtrasi Membran Steril pori 0,22 μm' },
      { key: 'D', text: 'Radiasi sinar Ultraviolet selama 30 menit' },
      { key: 'E', text: 'Sterilisasi Gas Etilen Oksida suhu 40°C' }
    ],
    correctAnswer: 'B',
    explanation: 'Sediaan dan basis yang bersifat MINYAK, LEMAK, dan SERBUK ANORGANIK KERING (seperti Vaselin, Parafin cair, Adeps lanae, Minyak wijen, Serbuk Zink Oksida) TIDAK BISA ditembus oleh uap air panas bertekanan autoklaf sehingga mikroba di dalam minyak tidak akan mati. Sesuai Farmakope Indonesia, sterilisasi bahan berminyak dan serbuk anhidrat WAJIB menggunakan metode STERILISASI PANAS KERING (Oven) pada suhu minimal 160°C selama minimal 1-2 jam.',
    clinicalReference: 'Farmakope Indonesia Edisi VI Lampiran <1071> Prosedur Sterilisasi Sediaan Farmasi',
    difficulty: 'Sedang'
  },
  {
    id: 'q-189',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Di gudang apotek, TTK menerima pengiriman sediaan Tetes Mata Kloramfenikol sebanyak 2 box dari PBF. Pada stok lama di rak apotek masih tersisa 1 box dengan masa kedaluwarsa (ED) November 2027. Sementara itu, kiriman box baru yang baru datang memiliki masa kedaluwarsa (ED) Juli 2027.',
    question: 'Berdasarkan prinsip Good Distribution Practice (CDOB) dan manajemen logistik apotek, bagaimanakah tindakan penataan stok yang benar?',
    options: [
      { key: 'A', text: 'Meletakkan box baru di belakang stok lama karena datang belakangan (FIFO)' },
      { key: 'B', text: 'Meletakkan box baru (ED Juli 2027) di posisi paling depan untuk dikeluarkan lebih dahulu karena kedaluwarsanya lebih dekat (FEFO)' },
      { key: 'C', text: 'Mencampur kedua box tanpa memperhatikan tanggal kedaluwarsa' },
      { key: 'D', text: 'Mengembalikan box baru ke PBF karena tanggal ED lebih pendek daripada stok lama' },
      { key: 'E', text: 'Menjual box lama terlebih dahulu hingga habis total' }
    ],
    correctAnswer: 'B',
    explanation: 'Prinsip utama rotasi persediaan di sarana pelayanan farmasi adalah FEFO (First Expired First Out), di mana barang yang tanggal kedaluwarsanya LEBIH CEPAT (ED Juli 2027) diletakkan di barisan paling depan dan dikeluarkan lebih dahulu kepada pasien daripada obat yang ED-nya lebih panjang (ED November 2027), meskipun obat tersebut baru saja tiba di gudang. Hal ini bertujuan mencegah kerugian akibat obat kedaluwarsa di rak.',
    clinicalReference: 'Petunjuk Teknis Standar Pelayanan Kefarmasian di Apotek Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-190',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Seorang TTK meracik resep puyer yang memuat kombinasi: R/ Camphora 0,100 g; Mentholum 0,100 g; Paracetamol 0,250 g; m.f. pulv. No. X. Ketika Kamfer dan Mentol digerus bersamaan di dalam mortir, serbuk seketika mencair basah menjadi cairan liat (terjadi penurunan titik lebur di bawah suhu kamar).',
    question: 'Apakah nama fenomena inkompatibilitas fisika tersebut dan bagaimana solusi farmasetis yang tepat untuk mengatasinya?',
    options: [
      { key: 'A', text: 'Efek Salting-Out ; Ditambahkan etanol 96% berlebih' },
      { key: 'B', text: 'Campuran Eutektikum (Eutectic Mixture) ; Diatasi dengan menambahkan zat inert penyerap cairan seperti Magnesium Oksida (MgO) atau Laktosa sebelum dicampur' },
      { key: 'C', text: 'Koagulasi koloid ; Diatasi dengan pemanasan di atas penangas air' },
      { key: 'D', text: 'Reaksi esterifikasi ; Mortir didinginkan dengan es batu' },
      { key: 'E', text: 'Sineresis gel ; Serbuk dikeringkan di oven pengering 105°C' }
    ],
    correctAnswer: 'B',
    explanation: 'Pencampuran Kamfer dan Mentol (atau Timol, Salol, Fenol) menyebabkan pembentukan CAMPURAN EUTEKTIKUM (Eutectic Mixture), di mana interaksi antarmolekul menurunkan titik leleh campuran zat padat hingga berada di bawah suhu kamar sehingga serbuk meleleh mencair. Solusi farmasetis lege artis: Masing-masing zat aktif dilapisi/dicampur terlebih dahulu dengan bahan inert penyerap (seperti Laktosa, Magnesium Karbonat, MgO, atau Aerosil) secara terpisah sebelum digabungkan, atau dibiarkan meleleh lalu diserap dengan adsorben.',
    clinicalReference: 'Ansel’s Pharmaceutical Dosage Forms and Drug Delivery Systems & Ilmu Resep Farmasi',
    difficulty: 'Sedang'
  },
  {
    id: 'q-191',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Sediaan suspensi oral antasida aluminium hidroksida dan magnesium hidroksida diformulasikan dengan pensuspensi polimer hidrofilik CMC-Na. Saat didiamkan di dalam botol kemasan, suspensi memiliki konsistensi kental untuk menahan partikel tidak mengendap. Namun, ketika botol dikocok kuat oleh pasien sebelum diminum, viskositas suspensi menurun drastis menjadi encer sehingga mudah dituang dengan sendok takar. Setelah didiamkan beberapa saat, kekentalan suspensi pulih kembali secara perlahan.',
    question: 'Apakah sifat aliran rheologi dan fenomena fisika yang ditunjukkan oleh sediaan suspensi tersebut?',
    options: [
      { key: 'A', text: 'Aliran Newton dan Dilatan' },
      { key: 'B', text: 'Aliran Pseudoplastis dengan fenomena Tiksotropik (Thixotropy)' },
      { key: 'C', text: 'Aliran Plastis Bingham murni' },
      { key: 'D', text: 'Aliran Antirheopeksi' },
      { key: 'E', text: 'Aliran Turbulen' }
    ],
    correctAnswer: 'B',
    explanation: 'Sediaan suspensi dan emulsi yang baik menunjukkan sifat aliran PSEUDOPLASTIS (Shear-thinning) yang disertai fenomena TIKSOTROPI (Thixotropy). Tiksotropi adalah pemulihan struktur gel/kental yang lambat setelah sebelumnya mengalami pengenceran (sol) akibat pengocokan mekanis (shear rate). Sifat ini ideal karena mencegah caking partikel selama masa simpan, namun sangat mudah dituang saat dikocok.',
    clinicalReference: 'Farmasi Fisik (Martin) & Formulasi Sediaan Cair Farmasi',
    difficulty: 'Sedang'
  },
  {
    id: 'q-192',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Pengujian kimia terhadap sampel minyak goreng curah di pasar tradisional menghasilkan Bilangan Asam sebesar 4,2 mg KOH/gram (standar SNI mensyaratkan maksimal 0,6 mg KOH/gram). Minyak goreng tersebut memiliki bau agak tengik dan warna gelap.',
    question: 'Reaksi kimia perombakan minyak apakah yang menyebabkan tingginya nilai bilangan asam tersebut?',
    options: [
      { key: 'A', text: 'Reaksi Hidrogenasi asam lemak tak jenuh' },
      { key: 'B', text: 'Reaksi HIDROLISIS trigliserida oleh air/kelembaban menghasilkan Asam Lemak Bebas (FFA)' },
      { key: 'C', text: 'Reaksi Saponifikasi sempurna' },
      { key: 'D', text: 'Reaksi Esterifikasi metanol' },
      { key: 'E', text: 'Reaksi Pembentukan misel surfaktan' }
    ],
    correctAnswer: 'B',
    explanation: 'Bilangan Asam mengukur jumlah miligram KOH yang dibutuhkan untuk menetralkan asam lemak bebas dalam 1 gram minyak. Nilai bilangan asam yang tinggi menunjukkan telah terjadi reaksi HIDROLISIS ikatan ester trigliserida oleh adanya air atau pemanasan berulang, yang melepaskan molekul Asam Lemak Bebas (Free Fatty Acids / FFA) dan gliserol, menandakan mutu minyak goreng telah rusak.',
    clinicalReference: 'Standar Nasional Indonesia SNI 3741:2013 Minyak Goreng & Kimia Pangan',
    difficulty: 'Sedang'
  },
  {
    id: 'q-193',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Laboratorium QC menganalisis sediaan suplemen kapsul Minyak Ikan (Fish Oil) yang kaya akan asam lemak omega-3 tak jenuh ganda (EPA dan DHA). Salah satu parameter stabilitas oksidasi yang diuji adalah Angka Peroksida menggunakan metode titrasi iodometri dengan larutan baku Natrium Tiosulfat (Na2S2O3) dan indikator amilum.',
    question: 'Informasi mutu kritis apakah yang ditunjukkan oleh nilai Angka Peroksida pada sediaan minyak ikan?',
    options: [
      { key: 'A', text: 'Tingkat kemurnian protein ikan' },
      { key: 'B', text: 'Derajat KETENGIKAN AWAL dan kerusakan oksidasi radikal bebas pada ikatan rangkap asam lemak' },
      { key: 'C', text: 'Kadar air bebas dalam kapsul' },
      { key: 'D', text: 'Berat molekul rata-rata trigliserida' },
      { key: 'E', text: 'Jumlah vitamin A yang terlarut' }
    ],
    correctAnswer: 'B',
    explanation: 'Angka Peroksida (Peroxide Value) adalah indikator penentu derajat kerusakan OKSIDASI primer dan KETENGIKAN AWAL (Rancidity) pada minyak atau lemak. Asam lemak tak jenuh ganda (seperti omega-3) sangat rentan diserang oksigen membentuk senyawa peroksida dan hidroperoksida radikal bebas yang berbau tengik dan toksik bagi tubuh.',
    clinicalReference: 'Farmakope Herbal Indonesia & Analisis Lipid Pangan',
    difficulty: 'Sedang'
  },
  {
    id: 'q-194',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Dalam praktikum farmakognosi galenika, mahasiswa vokasi membuat Tingtur Digitalis (Tinctura Digitalis) dari serbuk daun Digitalis purpurea yang mengandung glikosida jantung berkhasiat keras.',
    question: 'Berdasarkan ketentuan Farmakope Indonesia Edisi III, berapakah perbandingan rasio berat simplisia nabati terhadap volume tingtur yang dihasilkan untuk sediaan tingtur berkhasiat keras?',
    options: [
      { key: 'A', text: '1 bagian simplisia menghasilkan 2 bagian tingtur (1:2)' },
      { key: 'B', text: '1 bagian simplisia menghasilkan 5 bagian tingtur (1:5)' },
      { key: 'C', text: '1 bagian simplisia menghasilkan 10 BAGIAN TINGTUR (1:10)' },
      { key: 'D', text: '1 bagian simplisia menghasilkan 20 bagian tingtur (1:20)' },
      { key: 'E', text: '1 bagian simplisia menghasilkan 100 bagian tingtur (1:100)' }
    ],
    correctAnswer: 'C',
    explanation: 'Menurut Farmakope Indonesia Edisi III Ketentuan Umum Pembuatan Tingtur:\n• Tingtur yang dibuat dari simplisia BERKHASIAT KERAS (seperti Digitalis, Belladonna, Opium, Stramonium): 1 bagian simplisia diekstraksi hingga menghasilkan 10 BAGIAN TINGTUR (rasio 1:10).\n• Tingtur yang dibuat dari simplisia TIDAK berkhasiat keras (seperti Valeriana, Capsicum): 1 bagian simplisia menghasilkan 5 BAGIAN TINGTUR (rasio 1:5).',
    clinicalReference: 'Farmakope Indonesia Edisi III Bab Sediaan Galenika Tingtur',
    difficulty: 'Mudah'
  },
  {
    id: 'q-195',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Di ruang rawat inap kemoterapi RS, sebuah vial larutan infus Sitostatika Doksorubisin pecah dan menumpahkan cairan merah sitotoksik ke lantai. Tenaga Teknis Kefarmasian bertugas menangani tumpahan tersebut menggunakan Spill Kit Sitostatika.',
    question: 'Warna kantong plastik limbah khusus biohazard apakah yang WAJIB digunakan untuk membungkus pecahan kaca dan kain penyerap tumpahan obat sitostatika tersebut?',
    options: [
      { key: 'A', text: 'Kantong plastik warna Kuning (Limbah Infeksius)' },
      { key: 'B', text: 'Kantong plastik warna UNGU (Limbah Sitotoksik)' },
      { key: 'C', text: 'Kantong plastik warna Merah (Limbah Radioaktif)' },
      { key: 'D', text: 'Kantong plastik warna Hitam (Limbah Domestik)' },
      { key: 'E', text: 'Kantong plastik warna Cokelat (Limbah Kimia Kadaluarsa)' }
    ],
    correctAnswer: 'B',
    explanation: 'Berdasarkan Permenkes No. 7 Tahun 2019 tentang Kesehatan Lingkungan Rumah Sakit, kode warna kantong plastik limbah medis adalah:\n• UNGU: Khusus Limbah Sitotoksik / Sitostatika (obat kemoterapi kanker).\n• KUNING: Limbah Infeksius dan Patologis.\n• COKELAT: Limbah Bahan Kimia dan Farmasi kedaluwarsa non-sitotoksik.\n• MERAH: Limbah Radioaktif nuklir.\n• HITAM: Limbah Domestik / Non-medis biasa.',
    clinicalReference: 'Permenkes No. 7 Tahun 2019 & Pedoman Penanganan Sediaan Sitostatika Rumah Sakit',
    difficulty: 'Mudah'
  },
  {
    id: 'q-196',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Seorang lulusan D3 Farmasi telah lulus Uji Kompetensi Tenaga Vokasi Kefarmasian (UKTVK) dan mengantongi STRTTK seumur hidup dari KTKI. Yang bersangkutan hendak bekerja memberikan pelayanan kefarmasian di Apotek dan Klinik Pratama.',
    question: 'Lembaga manakah yang berwenang menerbitkan Surat Izin Praktik Tenaga Teknis Kefarmasian (SIPTTK) serta berapakah batas maksimal sarana tempat kerja yang diperbolehkan oleh undang-undang?',
    options: [
      { key: 'A', text: 'Diterbitkan oleh PB PAFI, maksimal 1 tempat sarana' },
      { key: 'B', text: 'Diterbitkan oleh Dinas Kesehatan / PTSP Kabupaten/Kota setempat, MAKSIMAL DI 3 TEMPAT FASILITAS' },
      { key: 'C', text: 'Diterbitkan oleh Badan POM RI, maksimal 2 tempat fasilitas' },
      { key: 'D', text: 'Diterbitkan oleh Kementerian Kesehatan RI pusat, maksimal seumur hidup' },
      { key: 'E', text: 'Diterbitkan oleh Pengurus Daerah IAI, maksimal 3 tempat fasilitas' }
    ],
    correctAnswer: 'B',
    explanation: 'Sesuai UU No. 17 Tahun 2023 tentang Kesehatan dan Permenkes terkait registrasi dan izin praktik tenaga kesehatan, SIPTTK (Surat Izin Praktik Tenaga Teknis Kefarmasian) diterbitkan oleh Pemerintah Daerah Kabupaten/Kota melalui Dinas Kesehatan atau Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu (DPMPTSP) setempat dengan masa berlaku 5 TAHUN dan dapat diterbitkan untuk MAKSIMAL 3 TEMPAT fasilitas pelayanan kefarmasian.',
    clinicalReference: 'Undang-Undang Republik Indonesia Nomor 17 Tahun 2023 tentang Kesehatan & PP No. 28/2024',
    difficulty: 'Mudah'
  },

  // =========================================================================
  // 🎓 25 SOAL LANJUTAN UKMPPAI (PROFESI APOTEKER)
  // =========================================================================
  {
    id: 'q-197',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien laki-laki 58 tahun dengan Ventilator-Associated Pneumonia (VAP) akibat Methicillin-Resistant Staphylococcus aureus (MRSA) dirawat di ICU dan diterapi Vankomisin IV 1500 mg tiap 12 jam. Nilai Serum Kreatinin pasien stabil 1,0 mg/dL. Apoteker klinik melakukan pemantauan kadar obat terapeutik (TDM).',
    question: 'Berapakah target rasio farmakokinetik/farmakodinamik (PK/PD) AUC24/MIC serta target kadar palung (trough level) Vankomisin yang direkomendasikan panduan IDSA/ASHP?',
    options: [
      { key: 'A', text: 'AUC24/MIC 100 - 200 mg·h/L ; Trough 5 - 10 mcg/mL' },
      { key: 'B', text: 'AUC24/MIC 400 - 600 mg·h/L ; Trough 15 - 20 mcg/mL' },
      { key: 'C', text: 'AUC24/MIC 800 - 1000 mg·h/L ; Trough 25 - 30 mcg/mL' },
      { key: 'D', text: 'AUC24/MIC > 1200 mg·h/L ; Trough > 35 mcg/mL' },
      { key: 'E', text: 'AUC24/MIC tidak perlu dipantau, cukup pantau suhu tubuh' }
    ],
    correctAnswer: 'B',
    explanation: 'Berdasarkan pedoman konsensus ASHP/IDSA 2020 untuk pemantauan terapeutik Vankomisin pada infeksi MRSA invasif berat, target efikasi PK/PD utama adalah rasio AUC24 / MIC sebesar 400 - 600 mg·h/L (dengan asumsi MIC broth microdilution = 1 mg/L). Jika pemantauan AUC Bayesian tidak dapat dihitung, target kadar trough yang dipertahankan adalah 15 - 20 mcg/mL. Kadar trough > 20 mcg/mL tidak memberi manfaat tambahan dan meningkatkan risiko nefrotoksisitas akut (AKI).',
    clinicalReference: 'Therapeutic Monitoring of Vancomycin for Serious MRSA Infections: 2020 ASHP/IDSA/PIDS Guidelines',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-198',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien pria 45 tahun (BB 70 kg, fungsi ginjal normal CrCl 110 mL/min) dirawat dengan sepsis bakteremia Pseudomonas aeruginosa. Dokter meresepkan Gentamisin IV dengan metode pemberian dosis sekali sehari (Extended-Interval Once-Daily Dosing 5-7 mg/kgBB = 400 mg IV per 24 jam). Apoteker menjelaskan rasionalitas regimen dosis tersebut kepada dokter muda.',
    question: 'Apakah prinsip farmakodinamik utama yang mendasari keunggulan regimen Gentamisin sekali sehari dosis tinggi tersebut?',
    options: [
      { key: 'A', text: 'Aktivitas bakterisidal time-dependent (T > MIC)' },
      { key: 'B', text: 'Aktivitas bakterisidal konsentrasi-dependen (Cmax/MIC tinggi) dan pemanfaatan efek pasca-antibiotik (Post-Antibiotic Effect / PAE) panjang yang menekan nefrotoksisitas' },
      { key: 'C', text: 'Pencegahan hidrolisis cincin aminoglikosida oleh enzim beta-laktamase' },
      { key: 'D', text: 'Peningkatan ikatan protein plasma gentamisin hingga 95%' },
      { key: 'E', text: 'Mempercepat ekskresi bilier melalui siklus enterohepatik' }
    ],
    correctAnswer: 'B',
    explanation: 'Aminoglikosida (Gentamisin, Tobramisin, Amikasin) memiliki pola pembunuhan bakteri KONSENTRASI-DEPENDEN (semakin tinggi rasio Cmax / MIC >= 8-10, semakin cepat bakteri mati) dan memiliki efek Post-Antibiotic Effect (PAE) yang sangat panjang (bakteri tetap tertekan selama beberapa jam meski kadar obat dalam darah telah turun di bawah MIC). Regimen Once-Daily menghasilkan kadar puncak (Peak) sangat tinggi untuk membunuh kuman, sementara kadar palung (Trough) sempat turun mendekati nol (< 1 mcg/mL) sebelum dosis berikutnya, sehingga mencegah penumpukan obat di sel tubulus ginjal dan telinga.',
    clinicalReference: 'Principles and Practice of Infectious Diseases & Applied Clinical Pharmacokinetics',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-199',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien laki-laki 52 tahun penderita sirosis hepatis dekompensata (Child-Pugh Kelas C, skor 12, asites refrakter dan riwayat perdarahan varises esofagus) mengeluhkan nyeri sendi lutut derajat sedang. Dokter meminta saran apoteker mengenai pemilihan obat analgesik yang paling aman.',
    question: 'Golongan obat analgesik manakah yang KONTRAINDIKASI MUTLAK diberikan pada pasien tersebut karena risiko tinggi memicu Gagal Ginjal Sindrom Hepatorenal dan perdarahan saluran cerna masif?',
    options: [
      { key: 'A', text: 'Parasetamol dosis rendah (maksimal 2 g/hari)' },
      { key: 'B', text: 'Non-Steroidal Anti-Inflammatory Drugs (NSAID, seperti Natrium Diklofenak / Meloksikam)' },
      { key: 'C', text: 'Tramadol dosis terbagi' },
      { key: 'D', text: 'Topikal Lidokain Patch 5%' },
      { key: 'E', text: 'Pregabalin dosis rendah' }
    ],
    correctAnswer: 'B',
    explanation: 'Pada pasien sirosis hepatis lanjut (terutama Child-Pugh B dan C), perfusi ginjal sangat bergantung pada sintesis prostaglandin vasodilatator ginjal endogen untuk mengimbangi vasokonstriksi sistemik hebat. Pemberian NSAID menghambat enzim COX, memicu vasokonstriksi arteriol ginjal mendadak yang mengakibatkan SINDROM HEPATORENAL (Hepatorenal Syndrome / AKI fatal), memperburuk retensi cairan/asites, serta melipatgandakan risiko perdarahan varises gastrointestinal.',
    clinicalReference: 'AASLD Practice Guidance on Management of Ascites and Hepatorenal Syndrome & Drug-Induced Liver Injury',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-200',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien wanita 60 tahun dengan sirosis hati stadium Child-Pugh B mengalami insomnia berat. Dokter berencana meresepkan Diazepam 5 mg oral malam hari. Apoteker klinik segera melakukan intervensi penghentian resep.',
    question: 'Apakah komplikasi neurologis berbahaya yang dapat dipicu oleh pemberian obat golongan Benzodiazepin pada pasien sirosis hati tersebut?',
    options: [
      { key: 'A', text: 'Sindrom Guillain-Barre' },
      { key: 'B', text: 'ENSEFALOPATI HEPATIKUM dan KOMA HEPATIKUM' },
      { key: 'C', text: 'Kejang mioklonik' },
      { key: 'D', text: 'Stroke iskemik trombotik' },
      { key: 'E', text: 'Parkinsonisme sekunder' }
    ],
    correctAnswer: 'B',
    explanation: 'Pada pasien penyakit hati kronis/sirosis, klirens metabolik obat-obat sedatif seperti Benzodiazepin (Diazepam, Midazolam) menurun drastis sehingga waktu paruh obat memanjang berhari-hari. Selain itu, sensitivitas reseptor GABA di otak meningkat secara abnormal pada pasien sirosis. Penggunaan benzodiazepin merupakan pencetus iatrogenik utama terjadinya ENSEFALOPATI HEPATIKUM akut hingga koma hepatik fatal.',
    clinicalReference: 'EASL Clinical Practice Guidelines on the Management of Hepatic Encephalopathy',
    difficulty: 'Sedang'
  },
  {
    id: 'q-201',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien wanita 48 tahun penderita karsinoma payudara stadium III menjalani kemoterapi siklus ke-5 dengan protokol AC (Doksorubisin 60 mg/m² + Siklofosfamid 600 mg/m²). Dosis kumulatif doksorubisin pasien saat ini telah mencapai 400 mg/m² (mendekati batas toksisitas kumulatif 450-550 mg/m²). Apoteker onkologi memantau risiko kardiotoksisitas.',
    question: 'Agen kardioprotektor spesifik pengkhelat besi manakah yang disetujui FDA untuk mencegah kardiomiopati dilatasi akibat doksorubisin?',
    options: [
      { key: 'A', text: 'Mesna' },
      { key: 'B', text: 'Leukovorin' },
      { key: 'C', text: 'Deksrazoksan (Dexrazoxane)' },
      { key: 'D', text: 'Amifostin' },
      { key: 'E', text: 'Filgrastim' }
    ],
    correctAnswer: 'C',
    explanation: 'DEKSRAZOKSAN (Zinecard) adalah agen kardioprotektor spesifik yang bekerja sebagai senyawa pengkhelat besi (iron-chelating agent) intraseluler. Doksorubisin memicu kardiotoksisitas melalui pembentukan kompleks doksorubisin-besi yang mengkatalisis radikal bebas oksigen perusak membran sel miosit jantung. Deksrazoksan mengikat besi bebas tersebut sehingga mencegah kerusakan kardiomiopati kumulatif.',
    clinicalReference: 'ASCO Clinical Practice Guideline: Prevention and Monitoring of Cardiac Dysfunction in Survivors of Adult Cancers',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-202',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien anak 12 tahun penderita Limfoma Hodgkin menjalani regimen kemoterapi mengandung Siklofosfamid dosis tinggi (1200 mg/m² IV). Untuk mencegah komplikasi Sistitis Hemoragik (perdarahan kandung kemih parah) akibat metabolit toksik AKROLEIN, apoteker onkologi merekomendasikan pemberian profilaksis.',
    question: 'Obat penawar donor gugus sulfhidril spesifik manakah yang WAJIB diberikan bersamaan dengan siklofosfamid tersebut?',
    options: [
      { key: 'A', text: 'N-Asetilsistein oral' },
      { key: 'B', text: 'MESNA (Sodium 2-mercaptoethanesulfonate) Intravena disertai hidrasi cairan masif' },
      { key: 'C', text: 'Asam Traneksamat IV bolus' },
      { key: 'D', text: 'Vitamin K1 Fitomenadion' },
      { key: 'E', text: 'Deksametason IV' }
    ],
    correctAnswer: 'B',
    explanation: 'Siklofosfamid dan Ifosfamid dimetabolisme di hati menjadi senyawa akrolein (acrolein) yang diekskresikan lewat urin. Akrolein mengikat dinding epitel kandung kemih dan menyebabkan nekrosis ulseratif serta sistitis hemoragik hebat. MESNA (Sodium 2-mercaptoethanesulfonate) menyediakan gugus sulfhidril (-SH) bebas di urin yang berikatan langsung dengan akrolein membentuk tioeter netral nontoksik yang aman dibuang bersama urin.',
    clinicalReference: 'DeVita, Hellman, and Rosenberg’s Cancer: Principles & Practice of Oncology',
    difficulty: 'Sedang'
  },
  {
    id: 'q-203',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Selama pemberian infus kemoterapi Doksorubisin IV pada pasien kanker payudara, kateter vena perifer bergeser sehingga terjadi ekstravasasi obat ke jaringan subkutan lengan bawah. Pasien mengeluh nyeri hebat seperti terbakar, bengkak, dan area kulit tampak merah keunguan (Doksorubisin adalah vesikan DNA-binding kuat).',
    question: 'Apakah tindakan tatalaksana non-farmakologi dan farmakologi darurat yang paling tepat dilakukan oleh tim medis?',
    options: [
      { key: 'A', text: 'Kompres hangat basah dan injeksi hialuronidase subkutan' },
      { key: 'B', text: 'Hentikan infus segera, lakukan aspirasi sisa obat, beri KOMPRES DINGIN/ES selama 15-20 menit 4x/hari, dan berikan DEKSRAZOKSAN IV' },
      { key: 'C', text: 'Lakukan masase kuat pada area bengkak agar obat cepat terserap ke sirkulasi' },
      { key: 'D', text: 'Bilas area dengan infus dekstrosa 50% panas' },
      { key: 'E', text: 'Pasang turniket di bagian proksimal lengan selama 24 jam' }
    ],
    correctAnswer: 'B',
    explanation: 'Doksorubisin adalah vesikan golongan DNA-binding. Pada ekstravasasi doksorubisin, KOMPRES DINGIN (Dry Cold Pack) selama 15-20 menit 4 kali sehari wajib diberikan untuk memicu vasokonstriksi lokal sehingga obat tidak menyebar dan menurunkan aktivitas metabolisme jaringan. Antidotum sistemik spesifiknya adalah DEKSRAZOKSAN IV (Savene) yang diberikan selama 3 hari berturut-turut, atau DMSO 99% topikal.',
    clinicalReference: 'ESMO-EONS Clinical Practice Guidelines: Extravasation of Antineoplastic Agents',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-204',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien leukemia limfoblastik akut mengalami ekstravasasi sediaan Vinkristin (Vinca alkaloid - vesikan non-DNA-binding) di punggung tangan. Perawat hendak meletakkan kantong es batu dingin di atas luka ekstravasasi, namun dicegah oleh apoteker onkologi.',
    question: 'Mengapakah ekstravasasi Vinkristin KONTRAINDIKASI menggunakan kompres dingin, dan bagaimanakah terapi yang benar?',
    options: [
      { key: 'A', text: 'Kompres dingin menyebabkan vinkristin mengkristal ; Beri kompres alkohol' },
      { key: 'B', text: 'Kompres dingin memperparah ulserasi nekrosis lokal ; Terapi yang tepat adalah KOMPRES HANGAT (Warm Pack) dan injeksi HIALURONIDASE subkutan' },
      { key: 'C', text: 'Kompres dingin memicu anafilaksis ; Beri infus epinefrin' },
      { key: 'D', text: 'Kompres dingin melunturkan warna obat ; Cukup dibiarkan tanpa tindakan' },
      { key: 'E', text: 'Vinkristin bukan obat vesikan sehingga tidak perlu kompres apa pun' }
    ],
    correctAnswer: 'B',
    explanation: 'Vinka alkaloid (Vinkristin, Vinblastin, Vinorelbin) adalah vesikan Non-DNA-binding. KONTRAINDIKASI menggunakan kompres dingin karena suhu dingin membatasi perfusi kapiler dan melipatgandakan sitotoksisitas vinkristin pada jaringan lokal, memicu nekrosis kulit berat. Standar penanganan ekstravasasi vinka alkaloid adalah KOMPRES HANGAT (meningkatkan aliran darah sistemik untuk mendispersi obat) ditambah injeksi enzim HIALURONIDASE subkutan untuk memecah asam hialuronat jaringan interstisial.',
    clinicalReference: 'Oncology Nursing Society (ONS) Chemotherapy Extravasation Guidelines',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-205',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien kanker ovarium dijadwalkan menerima kemoterapi Paklitaksel (Taxane) 175 mg/m² infus 3 jam. Paklitaksel diformulasikan menggunakan pelarut Cremophor EL yang memiliki risiko sangat tinggi memicu reaksi hipersensitivitas fatal dan syok anafilaktoid pelepasan histamin.',
    question: 'Kombinasi 3 obat premedikasi manakah yang WAJIB diberikan 30-60 menit sebelum pemberian infus Paklitaksel?',
    options: [
      { key: 'A', text: 'Parasetamol + Asam Mefenamat + Ondansetron' },
      { key: 'B', text: 'DEKSAMETASON IV + DIFENHIDRAMIN IV + ANTAGONIS RESEPTOR H2 (Famotidin/Ranitidin IV)' },
      { key: 'C', text: 'Epinefrin IM + Atropin Sulfat IV + Manitol' },
      { key: 'D', text: 'Mesna IV + Furosemid IV + Kalsium Glukonat' },
      { key: 'E', text: 'Siprofloksasin IV + Seftriakson IV + Metronidazol' }
    ],
    correctAnswer: 'B',
    explanation: 'Untuk mencegah reaksi hipersensitivitas akut akibat pelarut Cremophor EL pada Paklitaksel, protokol resmi mewajibkan premedikasi kombinasi triple: (1) Kortikosteroid: Deksametason 20 mg IV/oral; (2) Antihistamin-1: Difenhidramin 50 mg IV; dan (3) Antihistamin-2: Famotidin 20 mg IV atau Ranitidin 50 mg IV yang diberikan 30 - 60 menit sebelum infus kemoterapi dimulai.',
    clinicalReference: 'NCCN Guidelines: Antiemesis & Hypersensitivity Reactions to Chemotherapy Agents',
    difficulty: 'Sedang'
  },
  {
    id: 'q-206',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Departemen R&D sedang melakukan validasi metode analisis penetapan cemaran senyawa organik obat menggunakan KCKT/HPLC. Dari kurva kalibrasi regresi linier y = 25000x + 120 (di mana y adalah luas area puncak dan x adalah konsentrasi analit dalam ppm), diperoleh nilai kemiringan (Slope / S) = 25.000. Standar Deviasi respon blanko (SD) terukur adalah 75.',
    question: 'Berapakah nilai Batas Deteksi (Limit of Detection / LOD) dari metode analisis tersebut menurut panduan ICH Q2(R1)?',
    options: [
      { key: 'A', text: '0,0030 ppm' },
      { key: 'B', text: '0,0099 ppm' },
      { key: 'C', text: '0,0300 ppm' },
      { key: 'D', text: '0,0990 ppm' },
      { key: 'E', text: '0,3300 ppm' }
    ],
    correctAnswer: 'B',
    explanation: 'Berdasarkan pedoman ICH Q2(R1), rumus Limit of Detection (LOD) berbasis respon blanko dan slope adalah:\nLOD = (3,3 × SD) / Slope (S)\nLOD = (3,3 × 75) / 25.000 = 247,5 / 25.000 = 0,0099 ppm (atau mcg/mL).',
    clinicalReference: 'ICH Harmonised Tripartite Guideline Q2(R1): Validation of Analytical Procedures',
    difficulty: 'Sedang'
  },
  {
    id: 'q-207',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Melanjutkan data validasi metode analisis HPLC pada soal sebelumnya dengan Slope (S) = 25.000 dan Standar Deviasi respon blanko (SD) = 75, apoteker hendak menetapkan konsentrasi terendah di mana analit dapat diukur secara kuantitatif dengan akurasi dan presisi yang dapat diterima (LOQ).',
    question: 'Berapakah nilai Batas Kuantisasi (Limit of Quantification / LOQ) metode tersebut?',
    options: [
      { key: 'A', text: '0,010 ppm' },
      { key: 'B', text: '0,030 ppm' },
      { key: 'C', text: '0,075 ppm' },
      { key: 'D', text: '0,100 ppm' },
      { key: 'E', text: '0,330 ppm' }
    ],
    correctAnswer: 'B',
    explanation: 'Berdasarkan pedoman ICH Q2(R1), rumus Limit of Quantification (LOQ) adalah:\nLOQ = (10 × SD) / Slope (S)\nLOQ = (10 × 75) / 25.000 = 750 / 25.000 = 0,030 ppm (atau mcg/mL).\nNilai LOQ selalu bernilai sekitar 3 kali lipat lebih besar daripada nilai LOD.',
    clinicalReference: 'ICH Q2(R1) Guideline on Validation of Analytical Procedures Text and Methodology',
    difficulty: 'Sedang'
  },
  {
    id: 'q-208',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Dalam pengujian akurasi (kecermatan) metode analisis KCKT untuk sediaan tablet Kaptopril, analis menambahkan sejumlah baku murni analit ke dalam matriks plasebo (metode standard addition / spiking) pada 3 rentang konsentrasi (80%, 100%, 120%) masing-masing dengan 3 replikasi (total 9 penentuan). Hasil perhitungan persentase perolehan kembali rata-rata adalah 99,4% dengan nilai % RSD sebesar 1,1%.',
    question: 'Apakah kesimpulan evaluasi parameter akurasi metode tersebut menurut Farmakope Indonesia VI?',
    options: [
      { key: 'A', text: 'Metode tidak akurat karena perolehan kembali di bawah 100%' },
      { key: 'B', text: 'Metode MEMENUHI SYARAT AKURASI karena nilai perolehan kembali (% Recovery) berada dalam rentang 98,0% - 102,0%' },
      { key: 'C', text: 'Metode harus diulang pada konsentrasi 50% dan 150%' },
      { key: 'D', text: 'Metode hanya memenuhi syarat presisi, bukan akurasi' },
      { key: 'E', text: 'Metode ditolak karena nilai RSD harus tepat 0%' }
    ],
    correctAnswer: 'B',
    explanation: 'Kriteria penerimaan parameter AKURASI (Kecermatan) untuk penetapan kadar bahan baku dan sediaan jadi obat menurut Farmakope Indonesia VI dan ICH Q2 adalah persentase perolehan kembali (% recovery) rata-rata berada dalam rentang 98,0% - 102,0% dengan % RSD <= 2,0%. Nilai 99,4% dengan RSD 1,1% memenuhi seluruh syarat keberterimaan.',
    clinicalReference: 'Farmakope Indonesia Edisi VI: Validasi Prosedur Kompendial & ICH Q2',
    difficulty: 'Mudah'
  },
  {
    id: 'q-209',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Sebuah industri farmasi produsen sediaan injeksi steril melakukan validasi berkala proses pengisian aseptik (Aseptic Process Simulation / Media Fill Test) di ruang bersih Kelas A berlatar belakang Kelas B. Media cair pertumbuhan mikroba SCDM steril diisikan ke dalam 6.000 vial kaca dan ditutup rapat, lalu diinkubasi pada suhu 20-25°C selama 7 hari dilanjutkan 30-35°C selama 7 hari (total 14 hari). Pada inspeksi hari ke-14, ditemukan 1 vial mengalami kekeruhan pertumbuhan mikroba.',
    question: 'Bagaimanakah penilaian status validasi Media Fill tersebut menurut CPOB 2024 Aneks 1?',
    options: [
      { key: 'A', text: 'Lulus karena kontaminasi hanya 1 dari 6.000 vial (< 0,1%)' },
      { key: 'B', text: 'GAGAL MEMENUHI SYARAT CPOB 2024 ; Target keberterimaan adalah NOL KONTAMINASI (0 vial), wajib dilakukan investigasi CAPA dan pengulangan media fill' },
      { key: 'C', text: 'Lulus bersyarat asalkan operator pengisian diganti' },
      { key: 'D', text: 'Lulus jika diuji ulang dengan membran filter' },
      { key: 'E', text: 'Cukup membuang 1 vial yang keruh tersebut' }
    ],
    correctAnswer: 'B',
    explanation: 'Sesuai Pedoman CPOB 2024 Aneks 1 (revisi adopsi PIC/S PE 009-17) mengenai Pembuatan Produk Steril, kriteria penerimaan simulasi proses aseptis (Media Fill) adalah NOL KONTAMINASI MIKROBA (0 unit terkontaminasi). Penemuan meskipun hanya 1 unit wadah yang terkontaminasi mikroba menandakan terjadinya potensi kegagalan integritas proses aseptik yang mengharuskan dilakukannya investigasi deviasi menyeluruh, penetapan tindakan korektif dan pencegahan (CAPA), serta pengulangan Media Fill.',
    clinicalReference: 'Petunjuk Operasional Penerapan Pedoman CPOB 2024 BPOM RI: Aneks 1 Pembuatan Produk Steril',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-210',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Tim pemastian mutu mikrobiologi (QA) meletakkan cawan papar (Settle Plate diameter 90 mm) berisi media agar Soybean-Casein Digest selama 4 jam pada titik kritis Laminar Air Flow (LAF) Kelas A saat proses pengisian salep mata steril.',
    question: 'Berapakah batas rekomendasi cemaran mikroba (batas keberterimaan CFU) untuk cawan papar di zona Kelas A menurut CPOB 2024?',
    options: [
      { key: 'A', text: '< 1 CFU per cawan (Harus 0 koloni / bebas mikroba)' },
      { key: 'B', text: 'Maksimal 5 CFU per cawan' },
      { key: 'C', text: 'Maksimal 10 CFU per cawan' },
      { key: 'D', text: 'Maksimal 50 CFU per cawan' },
      { key: 'E', text: 'Maksimal 100 CFU per cawan' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Pedoman CPOB 2024 Aneks 1 Tabel Batas Yang Direkomendasikan untuk Pemantauan Bioburden Ruang Bersih:\n• Kelas A (Zona Pengisian Aseptis): < 1 CFU per cawan papar 90 mm (artinya target adalah NOL koloni mikroba).\n• Kelas B: 5 CFU per cawan.\n• Kelas C: 50 CFU per cawan.\n• Kelas D: 100 CFU per cawan.',
    clinicalReference: 'CPOB BPOM RI 2024 Aneks 1: Pembuatan Sediaan Steril',
    difficulty: 'Sedang'
  },
  {
    id: 'q-211',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien rawat inap yang diterapi antibiotik Seftriakson IV mendadak mengalami ruam eritema makulopapular gatal di seluruh dada 2 hari setelah obat dimulai. Dokter menghentikan seftriakson (dechallenge positif: gejala ruam mereda dalam 48 jam). Karena dicurigai infeksi lain, dokter sempat memberikan kembali seftriakson secara tidak sengaja, dan ruam langsung muncul kembali dengan cepat (rechallenge positif). Tidak ada faktor perancu obat lain. Apoteker mengevaluasi kausalitas efek samping menggunakan Algoritma Naranjo.',
    question: 'Berdasarkan Algoritma Naranjo, berada pada kategori kausalitas apakah efek samping obat pada pasien tersebut?',
    options: [
      { key: 'A', text: 'Doubtful (Ragu-ragu, skor <= 0)' },
      { key: 'B', text: 'Possible (Cukup mungkin, skor 1-4)' },
      { key: 'C', text: 'Probable (Sangat mungkin, skor 5-8)' },
      { key: 'D', text: 'DEFINITE / PASTI (Skor >= 9)' },
      { key: 'E', text: 'Unclassifiable (Tidak dapat diklasifikasikan)' }
    ],
    correctAnswer: 'D',
    explanation: 'Pada Algoritma Naranjo:\n• Laporan sebelumnya ada (+1)\n• Muncul setelah obat (+2)\n• Membaik saat obat dihentikan / Dechallenge positif (+1)\n• Kambuh saat obat diberikan ulang / Rechallenge positif (+2)\n• Tidak ada penyebab alternatif lain (+2)\n• Terkonfirmasi bukti klinis (+1)\nTotal skor = 9. Skor Naranjo >= 9 diklasifikasikan sebagai DEFINITE (Pasti terbukti ada hubungan kausalitas antara obat dengan kejadian efek samping).',
    clinicalReference: 'Naranjo CA, et al. A method for estimating the probability of adverse drug reactions. Clin Pharmacol Ther',
    difficulty: 'Sedang'
  },
  {
    id: 'q-212',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien epilepsi mengalami lepuh mukosa mulut, mata merah berdarah, dan pelepasan epidermis kulit luas (Sindrom Stevens-Johnson / SJS) 2 minggu setelah memulai Karbamazepin. Dokter berencana melakukan uji provokasi (Rechallenge) untuk memastikan apakah karbamazepin penyebabnya.',
    question: 'Bagaimanakah rekomendasi apoteker klinis terhadap rencana uji provokasi (Rechallenge) tersebut?',
    options: [
      { key: 'A', text: 'Menyetujui asalkan dosis karbamazepin diturunkan setengahnya' },
      { key: 'B', text: 'Menyetujui dengan premedikasi antihistamin' },
      { key: 'C', text: 'MELARANG KERAS RECHALLENGE karena SJS tergolong Severe Cutaneous Adverse Reaction (SCAR) yang mengancam nyawa; pasien harus diberi tanda kontraindikasi seumur hidup' },
      { key: 'D', text: 'Boleh dilakukan jika hasil lab leukosit normal' },
      { key: 'E', text: 'Rechallenge boleh dilakukan melalui rute topikal' }
    ],
    correctAnswer: 'C',
    explanation: 'Pada Adverse Drug Reaction (ADR) berat yang mengancam keselamatan nyawa (Severe Cutaneous Adverse Reactions / SCARs) seperti Sindrom Stevens-Johnson (SJS), Toxic Epidermal Necrolysis (TEN), DRESS syndrome, dan Syok Anafilaksis, UJI PROVOKASI / RECHALLENGE KONTRAINDIKASI MUTLAK karena dapat memicu kematian mendadak (fatalitas tinggi). Obat harus dihentikan permanen dan dicatat sebagai alergi berat seumur hidup.',
    clinicalReference: 'WHO Guidelines for Adverse Drug Reaction Monitoring & Pedoman MESO BPOM RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-213',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Komite Farmasi dan Terapi (KFT) sebuah rumah sakit sedang mempertimbangkan penambahan obat antikanker monoklonal antibodi baru ke dalam formularium. Terapi standar A berbiaya Rp 50.000.000 dengan pertambahan harapan hidup 2 tahun (skor utilitas kualitas hidup 0,5). Terapi baru B berbiaya Rp 110.000.000 dengan pertambahan harapan hidup 3 tahun (skor utilitas kualitas hidup 0,8).',
    question: 'Berapakah nilai Incremental Cost-Utility Ratio (ICUR) dari Terapi B dibandingkan Terapi A per Quality-Adjusted Life Year (QALY)?',
    options: [
      { key: 'A', text: 'Rp 25.000.000 per QALY' },
      { key: 'B', text: 'Rp 42.857.143 per QALY' },
      { key: 'C', text: 'Rp 60.000.000 per QALY' },
      { key: 'D', text: 'Rp 75.000.000 per QALY' },
      { key: 'E', text: 'Rp 100.000.000 per QALY' }
    ],
    correctAnswer: 'B',
    explanation: 'Perhitungan Farmakoekonomi Cost-Utility Analysis (CUA):\n1. QALY Terapi A = 2 tahun × utilitas 0,5 = 1,0 QALY.\n2. QALY Terapi B = 3 tahun × utilitas 0,8 = 2,4 QALY.\n3. Selisih QALY (Delta E) = 2,4 - 1,0 = 1,4 QALY.\n4. Selisih Biaya (Delta C) = Rp 110.000.000 - Rp 50.000.000 = Rp 60.000.000.\n5. ICUR = Delta C / Delta QALY = Rp 60.000.000 / 1,4 QALY = Rp 42.857.143 per tambahan unit QALY.',
    clinicalReference: 'Pedoman Penerapan Kajian Farmakoekonomi Kementerian Kesehatan RI',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-214',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Berdasarkan hasil perhitungan farmakoekonomi di atas (ICUR = Rp 42,8 Juta per QALY), KFT merujuk pada ambang batas kesediaan membayar (Willingness to Pay / WTP Threshold) yang ditetapkan Kemenkes RI dan WHO, di mana Produk Domestik Bruto (PDB) per kapita Indonesia diasumsikan sebesar Rp 75.000.000 per tahun.',
    question: 'Bagaimanakah kesimpulan kelayakan farmakoekonomi dari Terapi B tersebut?',
    options: [
      { key: 'A', text: 'Tidak Cost-Effective karena biayanya lebih mahal dari terapi A' },
      { key: 'B', text: 'SANGAT COST-EFFECTIVE karena nilai ICUR (Rp 42,8 Juta/QALY) berada di bawah 1x PDB per kapita (< Rp 75 Juta)' },
      { key: 'C', text: 'Cost-Neutral tanpa nilai tambah' },
      { key: 'D', text: 'Ditolak karena utilitas tidak boleh dihitung' },
      { key: 'E', text: 'Hanya cost-effective jika harga diturunkan 90%' }
    ],
    correctAnswer: 'B',
    explanation: 'Kriteria ambang batas (threshold) WHO Choosing Interventions that are Cost-Effective (WHO-CHOICE) dan Kemenkes RI menyatakan:\n• Sangat Cost-Effective (Highly Cost-Effective): Nilai ICER / ICUR < 1 × PDB per kapita.\n• Cost-Effective: Nilai ICER antara 1 hingga 3 × PDB per kapita.\n• Tidak Cost-Effective: Nilai ICER > 3 × PDB per kapita.\nKarena ICUR Terapi B (Rp 42,8 Juta) lebih kecil dari 1 × PDB per kapita (Rp 75 Juta), maka intervensi dinilai SANGAT COST-EFFECTIVE dan sangat layak dimasukkan ke formularium.',
    clinicalReference: 'Pedoman Penerapan Kajian Farmakoekonomi Kemenkes RI & WHO-CHOICE Guidelines',
    difficulty: 'Sedang'
  },
  {
    id: 'q-215',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien laki-laki 65 tahun di ICU mengalami syok septik akibat urosepsis Gram-negatif. Pasien telah menerima resusitasi cairan kristaloid 30 mL/kgBB, namun tekanan darah masih 75/45 mmHg dengan Mean Arterial Pressure (MAP) 55 mmHg (target MAP >= 65 mmHg) dan kadar laktat darah meningkat.',
    question: 'Obat vasopressor lini pertama pilihan utama manakah yang WAJIB segera dititrasi melalui infus vena sentral sesuai panduan Surviving Sepsis Campaign (SSC) 2021?',
    options: [
      { key: 'A', text: 'Dopamin IV' },
      { key: 'B', text: 'Norepinefrin (Noradrenalin) IV' },
      { key: 'C', text: 'Epinefrin IV bolus cepat' },
      { key: 'D', text: 'Fenilefrin IV' },
      { key: 'E', text: 'Dobutamin IV' }
    ],
    correctAnswer: 'B',
    explanation: 'Surviving Sepsis Campaign (SSC) 2021 menetapkan NOREPINEFRIN IV sebagai vasopressor lini pertama pilihan utama pada syok septik untuk mencapai target MAP >= 65 mmHg. Norepinefrin merupakan agonis kuat reseptor alfa-1 adrenergik yang menimbulkan vasokonstriksi pembuluh darah perifer untuk menaikkan resistensi vaskular sistemik (SVR), dengan stimulasi beta-1 minimal sehingga risiko aritmia takikardia jauh lebih rendah daripada Dopamin.',
    clinicalReference: 'Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021',
    difficulty: 'Sedang'
  },
  {
    id: 'q-216',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pada pasien syok septik di ICU di atas, infus Norepinefrin telah dititrasi hingga dosis tinggi (0,25 mcg/kg/menit), namun nilai MAP pasien masih berada pada 58 mmHg (belum mencapai target MAP >= 65 mmHg). Intensivis meminta apoteker menyiapkan vasopressor lini kedua untuk dikombinasikan.',
    question: 'Vasopressor tambahan lini kedua spesifik dengan dosis tetap manakah yang direkomendasikan panduan SSC 2021?',
    options: [
      { key: 'A', text: 'Vasopresin IV dengan dosis tetap 0,03 unit/menit' },
      { key: 'B', text: 'Dopamin IV 20 mcg/kg/menit' },
      { key: 'C', text: 'Isoproterenol IV' },
      { key: 'D', text: 'Nikardipin IV' },
      { key: 'E', text: 'Milrinon IV bolus' }
    ],
    correctAnswer: 'A',
    explanation: 'Sesuai panduan SSC 2021, jika target MAP tidak tercapai meski dosis Norepinefrin sudah moderat hingga tinggi, direkomendasikan menambahkan VASOPRESIN IV dengan dosis titrasi tetap 0,03 unit/menit (bukan dititrasi naik-turun). Vasopresin bekerja pada reseptor V1 vaskular yang independen dari sistem adrenergik, efektif menaikkan tekanan darah dan memungkinkan penurunan dosis (sparing effect) katekolamin norepinefrin.',
    clinicalReference: 'Surviving Sepsis Campaign 2021 Update: Vasopressors and Inotropes in Septic Shock',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-217',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien rawat ICU terpasang ventilator mekanis (intubasi endotrakeal). Tim ICU hendak mempertahankan sedasi ringan kooperatif (RASS -1 hingga 0) dan meminimalkan insiden delirium ventilator serta mempercepat ekstubasi.',
    question: 'Obat sedatif agonis selektif alfa-2 adrenergik sentral manakah yang paling direkomendasikan pedoman PADIS 2018 dibanding golongan benzodiazepin?',
    options: [
      { key: 'A', text: 'Midazolam' },
      { key: 'B', text: 'Diazepam' },
      { key: 'C', text: 'Deksedetomidin (Dexmedetomidine)' },
      { key: 'D', text: 'Ketamin' },
      { key: 'E', text: 'Klorpromazin' }
    ],
    correctAnswer: 'C',
    explanation: 'Pedoman PADIS (Pain, Agitation/Sedation, Delirium, Immobility, and Sleep Disruption) 2018 merekomendasikan penggunaan agen sedasi non-benzodiazepin (PROPOFOL atau DEKSMEDETOMIDIN) dibandingkan benzodiazepin (seperti Midazolam/Lorazepam) pada pasien rawat ICU terintubasi. Deksmedetomidin adalah agonis alfa-2 adrenergik sentral selektif yang menghasilkan "sedasi sadar" (pasien tenang namun mudah dibangunkan), tidak menekan dorongan pernapasan, dan terbukti signifikan menurunkan durasi penggunaan ventilator serta menurunkan angka kejadian delirium ICU.',
    clinicalReference: 'Clinical Practice Guidelines for the Prevention and Management of Pain, Agitation/Sedation, Delirium in Adult Patients in the ICU (PADIS 2018)',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-218',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien laki-laki 55 tahun penderita Gagal Ginjal Kronis (CKD Stage 5) rutin menjalani Hemodialisis 2x seminggu. Hasil laboratorium darah: Kadar Kalsium Serum 8,4 mg/dL (normal 8,5 - 10,2 mg/dL) dan Kadar Fosfat Serum 7,2 mg/dL (tinggi / hiperfosfatemia). Dokter meresepkan tablet Kalsium Karbonat (CaCO3) 500 mg 3x sehari sebagai pengikat fosfat (phosphate binder).',
    question: 'Kapan waktu minum tablet Kalsium Karbonat yang WAJIB diedukasikan oleh apoteker agar obat bekerja efektif mengikat fosfat?',
    options: [
      { key: 'A', text: 'Diminum saat perut kosong 1 jam sebelum makan' },
      { key: 'B', text: 'Diminum BERSAMA MAKANAN (pada suapan pertama makanan)' },
      { key: 'C', text: 'Diminum 2 jam sesudah makan' },
      { key: 'D', text: 'Diminum malam hari sebelum tidur bersama segelas susu' },
      { key: 'E', text: 'Diminum hanya pada hari saat jadwal cuci darah (hemodialisis)' }
    ],
    correctAnswer: 'B',
    explanation: 'Sebagai PENGIRAT FOSFAT (Phosphate Binder), Kalsium Karbonat WAJIB DIMINUM BERSAMA MAKANAN (pada suapan pertama makanan). Mekanisme kerjanya adalah mengikat ion fosfat yang terkandung di dalam bolus makanan di lumen saluran cerna lambung-usus membentuk kalsium fosfat yang tidak larut sehingga tidak dapat diserap ke sirkulasi darah dan terbuang lewat feses. Jika diminum saat perut kosong, CaCO3 akan terserap sistemik menjadi suplemen kalsium dan tidak efektif menurunkan fosfat.',
    clinicalReference: 'KDIGO 2024 Clinical Practice Guideline for the Diagnosis, Evaluation, Prevention, and Treatment of CKD-MBD',
    difficulty: 'Sedang'
  },
  {
    id: 'q-219',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien CKD Stage 5 on Hemodialisis yang diterapi Kalsium Karbonat mengalami lonjakan kadar Kalsium Serum menjadi 11,0 mg/dL (hiperkalsemia) dengan kadar Fosfat tetap tinggi 6,8 mg/dL. Nilai perkalian produk Ca × P mencapai 74,8 mg²/dL² (risiko kalsifikasi metastatik vaskular jantung sangat tinggi jika Ca × P > 55 mg²/dL²). Apoteker merekomendasikan penggantian obat pengikat fosfat.',
    question: 'Obat pengikat fosfat bebas kalsium (Non-Calcium Phosphate Binder) pilihan pertama manakah yang tepat direkomendasikan?',
    options: [
      { key: 'A', text: 'Kalsium Asetat' },
      { key: 'B', text: 'Sevelamer Karbonat (Renvela)' },
      { key: 'C', text: 'Aluminium Hidroksida' },
      { key: 'D', text: 'Kalsitriol dosis tinggi' },
      { key: 'E', text: 'Natrium Bikarbonat' }
    ],
    correctAnswer: 'B',
    explanation: 'Pada pasien CKD dengan hiperfosfatemia yang disertai hiperkalsemia (Kalsium > 10,2 mg/dL) atau produk kalsium-fosfat tinggi (Ca × P > 55 mg²/dL²), pengikat fosfat berbasis kalsium KONTRAINDIKASI karena memicu kalsifikasi vaskular arteri koroner dan jaringan lunak. Obat pilihan utama adalah pengikat fosfat non-kalsium yaitu SEVELAMER KARBONAT atau LANTHANUM KARBONAT yang tidak diserap sistemik dan mengikat fosfat usus tanpa menaikkan kadar kalsium darah.',
    clinicalReference: 'KDIGO 2024 Update: Management of Hyperphosphatemia in CKD Stage 5D',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-220',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Apoteker penanggung jawab vaksin di Puskesmas mendapati termometer digital pada kulkas Cold Chain sempat menunjukkan suhu drop hingga -3°C selama 4 jam akibat gangguan thermostat. Di dalam kulkas tersimpan vaksin DTP-HB-Hib (vaksin sensitif beku). Sebelum memutuskan apakah vaksin masih boleh dipakai, apoteker melakukan Uji Kocok (Shake Test) sesuai protokol WHO dengan membandingkan 1 vial uji terhadap 1 vial kontrol beku.',
    question: 'Kondisi fisik pengendapan manakah yang membuktikan bahwa vaksin DTP-HB-Hib tersebut TELAH RUSAK AKIBAT PEMBEKUAN dan tidak boleh diberikan kepada bayi?',
    options: [
      { key: 'A', text: 'Vial uji mengendap jauh lebih lambat daripada vial kontrol beku' },
      { key: 'B', text: 'Vial uji mengendap DENGAN LAJU SAMA CEPAT ATAU LEBIH CEPAT daripada vial kontrol beku, dan cairan di atas endapan menjadi jernih dalam waktu < 15-30 menit' },
      { key: 'C', text: 'Cairan vial uji tetap keruh merata seperti emulsi susu selama lebih dari 1 jam' },
      { key: 'D', text: 'Warna cairan vial uji berubah menjadi merah' },
      { key: 'E', text: 'Terbentuk gelembung gas di dinding vial' }
    ],
    correctAnswer: 'B',
    explanation: 'Pada Uji Kocok (Shake Test) WHO untuk vaksin yang mengandung adjuvan aluminium (sensitif beku seperti DTP-HB-Hib, Hepatitis B, Td): Pembekuan memecah ikatan antigen-adjuvan dan menyebabkan partikel aluminium saling menempel membentuk agregat kristal kasar yang berat. Jika vaksin RUSAK, partikel kasar tersebut akan MENGENDAP SANGAT CEPAT (laju pengendapan sama cepat atau lebih cepat dari vial kontrol beku dalam < 15-30 menit dan supernatan di atasnya jernih). Jika vaksin masih baik, partikel koloidnya halus dan mengendap sangat lambat.',
    clinicalReference: 'WHO Guidelines: The Shake Test Protocol for Freeze-Sensitive Vaccines & Petunjuk Teknis Vaksinasi Kemenkes RI',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-221',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien laki-laki 62 tahun di ruang rawat intensif didiagnosis sepsis berat akibat infeksi Klebsiella pneumoniae yang resisten terhadap seluruh golongan Carbapenem (Meropenem MIC > 16 mg/L / Carbapenem-Resistant Enterobacteriaceae / CRE) dengan mekanisme produksi enzim KPC (Klebsiella pneumoniae carbapenemase).',
    question: 'Kombinasi antibiotik inhibitor beta-laktamase generasi baru manakah yang menjadi terapi definitif lini pertama pilihan untuk strain CRE penghasil enzim KPC tersebut?',
    options: [
      { key: 'A', text: 'Amoksisilin + Asam Klavulanat IV' },
      { key: 'B', text: 'Seftriakson + Sulbaktam IV' },
      { key: 'C', text: 'SEFTAZIDIM + AVIBAKTAM (Ceftazidime-Avibactam) IV' },
      { key: 'D', text: 'Siprofloksasin oral' },
      { key: 'E', text: 'Vankomisin IV' }
    ],
    correctAnswer: 'C',
    explanation: 'Avibaktam adalah non-beta-laktam beta-laktamase inhibitor generasi baru (golongan diazabicyclooctane) yang memiliki kemampuan poten menghambat enzim carbapenemase Kelas A (seperti KPC - Klebsiella pneumoniae carbapenemase) dan Kelas D (OXA-48). Kombinasi SEFTAZIDIM-AVIBAKTAM (Zavicefta) merupakan rekomendasi lini pertama IDSA untuk tata laksana infeksi berat Carbapenem-Resistant Enterobacteriaceae (CRE). Vankomisin tidak aktif terhadap kuman Gram-negatif.',
    clinicalReference: 'Infectious Diseases Society of America (IDSA) 2023 Guidance on the Treatment of Antimicrobial-Resistant Gram-Negative Infections',
    difficulty: 'Tinggi'
  }
];
