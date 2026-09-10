import { ExamQuestion } from '../competencyExamData';

/**
 * BANK SOAL CBT UKTVF / APDFI (UJI KOMPETENSI TENAGA VOKASI FARMASI D3)
 * BAGIAN 5: PELAYANAN FARMASI KOMUNITAS, SKRINING RESEP, DOWA, KIE SEDIAAN KHUSUS & PERHITUNGAN FARMASETIK
 * Standar Nasional Asosiasi Pendidikan Diploma Farmasi Indonesia (APDFI) & Standar Pelayanan Kefarmasian di Apotek (Permenkes 73/2016)
 */
export const CBT_VOKASI_PART_5: ExamQuestion[] = [
  {
    id: 'q-894',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Seorang TTK di apotek menerima resep dokter untuk pasien Ny. S (45 tahun) yang bertuliskan: "R/ Captopril 25 mg No. XXX, S 2 dd tab 1 ac". Saat melakukan penyerahan obat, TTK perlu memberikan edukasi mengenai waktu minum obat yang benar agar bioavailabilitasnya optimal.',
    question: 'Kapankah waktu minum obat kaptopril yang paling tepat disampaikan oleh TTK?',
    options: [
      { key: 'A', text: '1 jam sebelum makan atau 2 jam setelah makan' },
      { key: 'B', text: 'Bersamaan dengan suapan pertama makanan' },
      { key: 'C', text: 'Segera setelah makan kenyang' },
      { key: 'D', text: 'Hanya diminum menjelang tidur malam' },
      { key: 'E', text: 'Bebas kapan saja tanpa pengaruh makanan' }
    ],
    correctAnswer: 'A',
    explanation: 'Kaptopril (ACE inhibitor) memiliki bioavailabilitas oral yang menurun sekitar 30-40% bila dikonsumsi bersama makanan lambung terisi. Oleh karena itu, aturan pakai "ante coenam" (ac) yang tepat adalah diminum saat perut kosong, yaitu minimal 1 jam sebelum makan atau 2 jam setelah makan.',
    clinicalReference: 'AHFS Drug Information & Formularium Spesialistik Obat Kardiovaskular',
    difficulty: 'Mudah'
  },
  {
    id: 'q-895',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien laki-laki datang ke apotek mengeluhkan nyeri gigi berdenyut sejak kemarin malam dan bermaksud membeli obat asam mefenamat tanpa resep dokter. TTK mengetahui bahwa asam mefenamat tercantum dalam Daftar Obat Wajib Apotek (DOWA).',
    question: 'Berapakah jumlah maksimal tablet asam mefenamat 500 mg yang boleh diserahkan oleh TTK per pasien sesuai regulasi DOWA No. 1?',
    options: [
      { key: 'A', text: '20 tablet' },
      { key: 'B', text: '10 tablet' },
      { key: 'C', text: '30 tablet' },
      { key: 'D', text: '5 tablet' },
      { key: 'E', text: 'Tidak boleh diserahkan sama sekali tanpa resep' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Keputusan Menteri Kesehatan RI No. 347/Menkes/SK/VII/1990 (DOWA No. 1), Asam Mefenamat (golongan analgesik/antiinflamasi NSAID) dapat diserahkan oleh tenaga kefarmasian di apotek tanpa resep dokter maksimal sebanyak 20 tablet/kapsul dengan dosis 250 mg atau 500 mg.',
    clinicalReference: 'Kepmenkes RI No. 347/Menkes/SK/VII/1990 tentang Obat Wajib Apotek No. 1',
    difficulty: 'Mudah'
  },
  {
    id: 'q-896',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'TTK menerima resep racikan puyer untuk anak B (usia 4 tahun) yang berisi Atropin Sulfat 0,2 mg per bungkus, diminum 3 kali sehari. Berdasarkan Farmakope Indonesia Edisi III, Dosis Maksimum (DM) Atropin Sulfat untuk dewasa adalah 1 mg (sekali) dan 3 mg (sehari).',
    question: 'Berapakah Dosis Maksimum sekali untuk anak usia 4 tahun tersebut bila dihitung menggunakan Rumus Young?',
    options: [
      { key: 'A', text: '0,25 mg' },
      { key: 'B', text: '0,20 mg' },
      { key: 'C', text: '0,15 mg' },
      { key: 'D', text: '0,30 mg' },
      { key: 'E', text: '0,40 mg' }
    ],
    correctAnswer: 'A',
    explanation: 'Rumus Young (untuk anak usia <= 8 tahun): DM anak = [n / (n + 12)] x DM Dewasa. Maka DM sekali anak 4 tahun = [4 / (4 + 12)] x 1 mg = [4 / 16] x 1 mg = 1/4 x 1 mg = 0,25 mg. Dosis racikan resep adalah 0,2 mg, sehingga persentase DM sekali = (0,2 / 0,25) x 100% = 80% (masih aman karena <= 100%).',
    clinicalReference: 'Farmakope Indonesia Edisi III & Ilmu Resep Teori Jilid I',
    difficulty: 'Sedang'
  },
  {
    id: 'q-897',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Pasien Tn. K (58 tahun) penderita asma bronkial menebus obat inhaler aerosol bertekanan (Metered Dose Inhaler/MDI) yang berisi budesonid. Pasien bertanya kepada TTK tentang langkah yang wajib dilakukan tepat setelah menghisap obat tersebut.',
    question: 'Edukasi penting apakah yang wajib disampaikan oleh TTK setelah pasien menghisap inhaler budesonid?',
    options: [
      { key: 'A', text: 'Berkumur dengan air bersih lalu membuang air kumurannya' },
      { key: 'B', text: 'Langsung meminum segelas susu hangat' },
      { key: 'C', text: 'Menghembuskan nafas dengan kuat ke dalam corong inhaler' },
      { key: 'D', text: 'Tidur terlentang selama minimal 15 menit' },
      { key: 'E', text: 'Menahan nafas selama 2 menit tanpa bernafas' }
    ],
    correctAnswer: 'A',
    explanation: 'Budesonid adalah kortikosteroid inhalasi. Penggunaan kortikosteroid topikal di saluran nafas dapat menyebabkan deposisi obat di rongga mulut dan faring, yang memicu efek samping kandidiasis oral (oral thrush) dan suara serak (disfonia). Oleh karena itu, pasien wajib diedukasi untuk menahan nafas 10 detik setelah hisapan, lalu berkumur dengan air dan membuang air kumurnya.',
    clinicalReference: 'Pedoman Tatalaksana Asma GINA & Konsensus Pelayanan Kefarmasian Pulmonologi',
    difficulty: 'Mudah'
  },
  {
    id: 'q-898',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'TTK di apotek sedang melakukan penyiapan sediaan obat tetes telinga (Ear drops) Kloramfenikol untuk pasien anak usia 2 tahun yang mengalami infeksi otitis media. Pasien didampingi oleh ibunya.',
    question: 'Bagaimanakah teknik penarikan daun telinga yang benar saat meneteskan obat pada anak usia 2 tahun tersebut?',
    options: [
      { key: 'A', text: 'Menarik daun telinga ke arah bawah dan belakang' },
      { key: 'B', text: 'Menarik daun telinga ke arah atas dan belakang' },
      { key: 'C', text: 'Menarik daun telinga lurus ke depan menutupi pipi' },
      { key: 'D', text: 'Tidak perlu menarik daun telinga sama sekali' },
      { key: 'E', text: 'Menekan tragus ke dalam lubang telinga sebelum meneteskan' }
    ],
    correctAnswer: 'A',
    explanation: 'Pada anak berusia di bawah 3 tahun, saluran telinga luar (liang telinga) mengarah ke atas. Untuk meluruskan liang telinga agar obat tetes dapat masuk sempurna, daun telinga (pinna) ditarik ke arah bawah dan belakang (down and back). Sebaliknya, pada anak usia > 3 tahun dan dewasa, daun telinga ditarik ke arah atas dan belakang (up and back).',
    clinicalReference: 'Buku Panduan Konseling Pasien Farmasi Klinis Kemenkes RI & AAP Pediatric Guidelines',
    difficulty: 'Sedang'
  },
  {
    id: 'q-899',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Seorang TTK menerima resep dokter gigi untuk Ny. D: "R/ Amoxicillin 500 mg tab No. XV, S 3 dd tab 1. R/ Dexamethasone 0.5 mg tab No. X, S 3 dd tab 1. R/ Paracetamol 500 mg tab No. X, S 3 dd tab 1 prn". TTK hendak menuliskan etiket obat amoksisilin.',
    question: 'Informasi khusus apakah yang wajib dicantumkan pada etiket amoksisilin?',
    options: [
      { key: 'A', text: 'Diminum teratur dan wajib dihabiskan' },
      { key: 'B', text: 'Hanya diminum bila timbul rasa nyeri' },
      { key: 'C', text: 'Kocok dahulu sebelum diminum' },
      { key: 'D', text: 'Boleh diulang tanpa resep baru bila keluhan belum sembuh' },
      { key: 'E', text: 'Simpan di dalam freezer bersuhu di bawah nol derajat' }
    ],
    correctAnswer: 'A',
    explanation: 'Amoksisilin adalah antibiotik bakterisid golongan penisilin. Untuk mencegah resistensi antimikroba (AMR) dan memastikan eradikasi bakteri patogen tuntas, etiket antibiotik wajib diberi instruksi tegas "dihabiskan" meskipun gejala klinis sudah mereda sebelum obat habis.',
    clinicalReference: 'Pedoman Penggunaan Antibiotik Kemenkes RI & Permenkes No. 28/2021',
    difficulty: 'Mudah'
  },
  {
    id: 'q-900',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Dalam skrining resep administratif di apotek rawat jalan, TTK memeriksa kelengkapan lembar resep yang diterima dari pasien. Lembar resep memuat kop klinik, nama dokter, SIP dokter, tanggal resep, nama obat, jumlah, dan aturan pakai.',
    question: 'Elemen administratif penting manakah dari aspek keselamatan pasien yang belum tercantum bila lembar resep tidak memuat umur dan berat badan pasien?',
    options: [
      { key: 'A', text: 'Inscriptio' },
      { key: 'B', text: 'Invocatio' },
      { key: 'C', text: 'Praescriptio' },
      { key: 'D', text: 'Subscriptio' },
      { key: 'E', text: 'Signatura (data pasien)' }
    ],
    correctAnswer: 'E',
    explanation: 'Bagian resep yang memuat identitas pasien (nama, umur, jenis kelamin, dan berat badan) merupakan bagian penutup atau identitas pasien dalam kaidah penulisan resep. Identitas umur dan berat badan sangat esensial untuk memverifikasi ketepatan dosis obat, khususnya pasien pediatri dan geriatri.',
    clinicalReference: 'Permenkes No. 73 Tahun 2016 tentang Standar Pelayanan Kefarmasian di Apotek',
    difficulty: 'Mudah'
  },
  {
    id: 'q-901',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Seorang wanita usia 28 tahun datang ke apotek ingin membeli obat kontrasepsi oral kombinasi (Pil KB) ulangan yang biasa dikonsumsinya. Pasien memperlihatkan kartu peserta KB aktif.',
    question: 'Berapakah jumlah maksimal siklus pil kontrasepsi oral yang dapat diserahkan oleh tenaga kefarmasian menurut DOWA No. 1?',
    options: [
      { key: 'A', text: '1 siklus' },
      { key: 'B', text: '2 siklus' },
      { key: 'C', text: '3 siklus' },
      { key: 'D', text: '4 siklus' },
      { key: 'E', text: '6 siklus' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan ketentuan DOWA No. 1 (Kepmenkes 347/1990), obat kontrasepsi oral untuk akseptor KB dapat diserahkan oleh tenaga kefarmasian di apotek tanpa resep dokter maksimal 1 siklus untuk pengobatan ulangan setelah siklus pertama diawali dengan pemeriksaan dokter/bidan.',
    clinicalReference: 'Kepmenkes RI No. 347/Menkes/SK/VII/1990 DOWA No. 1',
    difficulty: 'Mudah'
  },
  {
    id: 'q-902',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'TTK sedang menyiapkan sediaan obat tetes mata minidose (Cendo Fenicol) untuk pasien infeksi konjungtivitis bakteri. Pasien menanyakan berapa lama obat tersebut masih boleh digunakan setelah wadah minidose dibuka.',
    question: 'Berapakah Beyond Use Date (BUD) maksimal untuk sediaan tetes mata minidose tanpa pengawet setelah kemasan dibuka?',
    options: [
      { key: 'A', text: '3 x 24 jam (3 hari)' },
      { key: 'B', text: '1 x 24 jam (24 jam)' },
      { key: 'C', text: '7 x 24 jam (7 hari)' },
      { key: 'D', text: '14 x 24 jam (14 hari)' },
      { key: 'E', text: '28 x 24 jam (28 hari)' }
    ],
    correctAnswer: 'A',
    explanation: 'Sediaan tetes mata minidose (single-dose unit) biasanya tidak mengandung pengawet bakterisida/bakteriostatik (preservative-free). Batas maksimal penggunaan setelah tutup dibuka sesuai rekomendasi resmi pabrikan dan standar USP/kemasan minidose di Indonesia adalah 3 x 24 jam (3 hari) bila disimpan rapat, atau maksimal 24 jam bila tanpa tutup penutup kembali.',
    clinicalReference: 'USP <797> Compounding Sterile Preparations & Brosur Resmi BPOM Cendo Minidose',
    difficulty: 'Sedang'
  },
  {
    id: 'q-903',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'TTK menerima resep sirup kering (dry syrup) Cefadroxil 125 mg/5 mL untuk pasien anak. Resep meminta sediaan direkonstitusi dengan air murni (aquadest) sampai tanda batas 60 mL sebelum diserahkan.',
    question: 'Berapa lamakah masa simpan (BUD) sirup sefadroksil setelah direkonstitusi dengan air jika disimpan pada suhu sejuk/kulkas (2-8 derajat C)?',
    options: [
      { key: 'A', text: '14 hari' },
      { key: 'B', text: '3 hari' },
      { key: 'C', text: '7 hari' },
      { key: 'D', text: '30 hari' },
      { key: 'E', text: '60 hari' }
    ],
    correctAnswer: 'A',
    explanation: 'Suspensi sefalosporin oral (sefadroksil sirup kering) yang telah direkonstitusi dengan air stabil selama 14 hari bila disimpan dalam lemari pendingin (suhu 2°C - 8°C). Jika disimpan pada suhu ruang terkendali, stabilitasnya umumnya hanya bertahan 7 hari.',
    clinicalReference: 'USP <795> Nonsterile Compounding & Monografi Sefadroksil AHFS Essentials',
    difficulty: 'Sedang'
  },
  {
    id: 'q-904',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien datang ke apotek mengeluhkan mual dan ulu hati perih, ingin membeli obat antasida suspensi dan tablet ranitidin. TTK mengetahui bahwa ranitidin tercantum dalam DOWA No. 3.',
    question: 'Berapakah jumlah maksimal tablet Ranitidin 150 mg yang boleh diserahkan oleh tenaga kefarmasian di apotek sesuai regulasi DOWA No. 3?',
    options: [
      { key: 'A', text: '10 tablet' },
      { key: 'B', text: '20 tablet' },
      { key: 'C', text: '30 tablet' },
      { key: 'D', text: '5 tablet' },
      { key: 'E', text: 'Tidak boleh diserahkan tanpa resep' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Keputusan Menteri Kesehatan RI No. 1176/Menkes/SK/X/1999 (DOWA No. 3), Ranitidin 150 mg dapat diserahkan tanpa resep dokter maksimal sebanyak 10 tablet per pasien dengan indikasi pengobatan tukak lambung/hiperasiditas.',
    clinicalReference: 'Kepmenkes RI No. 1176/Menkes/SK/X/1999 tentang DOWA No. 3',
    difficulty: 'Mudah'
  },
  {
    id: 'q-905',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Dalam resep tercantum: "R/ Paracetamol 120 mg, Diazepam 1 mg, m.f. pulv. d.t.d. No. X, S 3 dd pulv 1". Tersedia di apotek tablet Diazepam dengan kekuatan 2 mg per tablet.',
    question: 'Berapakah jumlah tablet Diazepam 2 mg yang harus diambil oleh TTK untuk meracik resep tersebut?',
    options: [
      { key: 'A', text: '5 tablet' },
      { key: 'B', text: '2,5 tablet' },
      { key: 'C', text: '10 tablet' },
      { key: 'D', text: '1 tablet' },
      { key: 'E', text: '2 tablet' }
    ],
    correctAnswer: 'A',
    explanation: 'Resep menggunakan format "d.t.d." (da tales doses = berikan sebanyak dosis tersebut). Kebutuhan total diazepam = 1 mg x 10 bungkus = 10 mg. Karena tersedia tablet berkekuatan 2 mg, maka jumlah tablet yang diambil = 10 mg / 2 mg = 5 tablet.',
    clinicalReference: 'Ilmu Resep Teori & Hitungan Farmasi Farmakope Indonesia',
    difficulty: 'Mudah'
  },
  {
    id: 'q-906',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien geriatri mengeluhkan sulit buang air besar (konstipasi akut) dan diberikan supositoria Bisakodil 10 mg oleh dokter. Pasien belum pernah menggunakan obat bentuk supositoria sebelumnya.',
    question: 'Instruksi penggunaan supositoria manakah yang TIDAK tepat disampaikan oleh TTK?',
    options: [
      { key: 'A', text: 'Obat langsung ditelan bersama satu gelas air putih sebelum makan' },
      { key: 'B', text: 'Buka pembungkus aluminium foil supositoria sebelum dimasukkan' },
      { key: 'C', text: 'Cuci tangan dengan sabun dan air sebelum dan sesudah penggunaan' },
      { key: 'D', text: 'Basahi ujung supositoria dengan sedikit air agar licin saat dimasukkan' },
      { key: 'E', text: 'Berbaring miring dengan satu kaki ditekuk saat memasukkan obat ke dalam anus' }
    ],
    correctAnswer: 'A',
    explanation: 'Supositoria adalah sediaan padat yang digunakan melalui rektum/anus, dirancang untuk meleleh pada suhu tubuh (37°C). Supositoria TIDAK BOLEH ditelan secara oral. Menelan supositoria merupakan kesalahan fatal dalam cara pemberian obat.',
    clinicalReference: 'Buku Pedoman Pelayanan Informasi Obat (PIO) Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-907',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'TTK sedang menyalin resep (salinan resep / apograph) untuk pasien Ny. M yang menebus sebagian obat. Resep asli tertulis: "R/ Amoxicillin 500 mg No. XXX, S 3 dd tab 1". Pasien hanya menebus sebanyak 15 tablet.',
    question: 'Tanda apakah yang harus dituliskan oleh TTK pada salinan resep untuk obat amoksisilin tersebut?',
    options: [
      { key: 'A', text: 'did (da in dimidio)' },
      { key: 'B', text: 'det (detur)' },
      { key: 'C', text: 'ne det (ne detur)' },
      { key: 'D', text: 'iter 1x' },
      { key: 'E', text: 'det orig (detur originale)' }
    ],
    correctAnswer: 'A',
    explanation: 'Resep meminta 30 tablet (No. XXX) tetapi hanya ditebus separuhnya (15 tablet). Istilah latin untuk pemberian separuhnya adalah "da in dimidio" disingkat "did". Tanda "det" berarti sudah diberikan seluruhnya, sedangkan "ne det" belum diberikan sama sekali.',
    clinicalReference: 'Ketentuan Salinan Resep Peraturan Pemerintah No. 51/2009 & Ilmu Resep FI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-908',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Di instalasi farmasi rawat jalan, TTK menerima resep yang mengandung fenobarbital 15 mg per bungkus untuk bayi usia 6 bulan dengan berat badan 7 kg. Diketahui Dosis Maksimum dewasa Fenobarbital menurut FI III adalah 300 mg (sekali) dan 600 mg (sehari).',
    question: 'Berapakah Dosis Maksimum sekali untuk bayi 6 bulan tersebut jika dihitung menggunakan Rumus Fried?',
    options: [
      { key: 'A', text: '12 mg' },
      { key: 'B', text: '15 mg' },
      { key: 'C', text: '10 mg' },
      { key: 'D', text: '8 mg' },
      { key: 'E', text: '20 mg' }
    ],
    correctAnswer: 'A',
    explanation: 'Rumus Fried digunakan khusus untuk bayi usia di bawah 1 tahun: DM bayi = (m / 150) x DM Dewasa, di mana m adalah umur dalam bulan. DM sekali bayi 6 bulan = (6 / 150) x 300 mg = 6 x 2 mg = 12 mg.',
    clinicalReference: 'Farmakope Indonesia Edisi III & Perhitungan Farmasetik Terapan',
    difficulty: 'Sedang'
  },
  {
    id: 'q-909',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien datang ke apotek mengeluhkan gatal dan ruam kemerahan pada lipatan paha akibat infeksi jamur (tinea cruris). Pasien ingin membeli salep klotrimazol tanpa resep dokter.',
    question: 'Berdasarkan regulasi DOWA No. 2, berapakah jumlah maksimal tube sediaan topikal antijamur Klotrimazol yang dapat diserahkan tanpa resep dokter?',
    options: [
      { key: 'A', text: '1 tube' },
      { key: 'B', text: '2 tube' },
      { key: 'C', text: '3 tube' },
      { key: 'D', text: '5 tube' },
      { key: 'E', text: 'Tidak boleh diserahkan' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Permenkes No. 924/Menkes/Per/X/1993 tentang DOWA No. 2, Klotrimazol sediaan topikal dapat diserahkan oleh tenaga kefarmasian di apotek tanpa resep dokter maksimal sebanyak 1 tube per pasien.',
    clinicalReference: 'Permenkes RI No. 924/Menkes/Per/X/1993 tentang DOWA No. 2',
    difficulty: 'Mudah'
  },
  {
    id: 'q-910',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Dalam peracikan resep serbuk bagi (pulveres), TTK menjumpai zat aktif berupa Luminal (Fenobarbital) yang bobot per bungkusnya hanya 5 mg. Sementara itu, kepekaan timbangan gram di laboratorium adalah 50 mg.',
    question: 'Tindakan farmasetik apakah yang wajib dilakukan oleh TTK agar penimbangan zat aktif tersebut akurat dan memenuhi syarat farmakope?',
    options: [
      { key: 'A', text: 'Melakukan pengenceran bertingkat (triturasi) dengan zat pengisi laktosa' },
      { key: 'B', text: 'Mengganti luminal dengan tablet obat tidur lainnya' },
      { key: 'C', text: 'Menimbang langsung 5 mg pada timbangan gram kasar' },
      { key: 'D', text: 'Membulatkan bobot luminal menjadi 50 mg' },
      { key: 'E', text: 'Melarutkan luminal dalam etanol pekat lalu diuapkan' }
    ],
    correctAnswer: 'A',
    explanation: 'Apabila bobot zat aktif yang akan ditimbang kurang dari kapasitas penimbangan terkecil yang dapat dipercaya (batas kepekaan timbangan, umumnya 50 mg), maka wajib dilakukan pengenceran obat (triturasi/geometrik dilution) menggunakan zat pengisi inert seperti Saccharum Lactis (SL) dan ditambahkan zat pewarna (misalnya carmin) sebagai indikator homogenitas campuran.',
    clinicalReference: 'Farmakope Indonesia Edisi III & Ilmu Meracik Obat (Anief)',
    difficulty: 'Sedang'
  },
  {
    id: 'q-911',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien wanita mengeluhkan keputihan gatal dan berbau akibat infeksi Candida albicans. Dokter meresepkan Ovula Nistatin No. VII, aturan pakai 1 kali sehari malam hari sebelum tidur.',
    question: 'Manakah cara penggunaan ovula yang benar untuk diedukasikan kepada pasien?',
    options: [
      { key: 'A', text: 'Dimasukkan ke dalam liang vagina dengan posisi tidur terlentang dan lutut ditekuk' },
      { key: 'B', text: 'Dimasukkan ke dalam lubang anus saat duduk' },
      { key: 'C', text: 'Dilarutkan dalam air hangat lalu diminum' },
      { key: 'D', text: 'Digerus lalu ditaburkan pada area lipatan paha luar' },
      { key: 'E', text: 'Dimasukkan ke bawah lidah hingga larut' }
    ],
    correctAnswer: 'A',
    explanation: 'Ovula (vaginal suppository) adalah sediaan padat yang dimasukkan ke dalam liang vagina, di mana basisnya akan meleleh oleh suhu tubuh dan cairan vagina untuk melepaskan zat aktif secara lokal. Pasien berbaring terlentang dengan kedua lutut ditekuk saat memasukkan ovula secara perlahan sedalam mungkin.',
    clinicalReference: 'Pedoman Konseling Obat Apotek Kemenkes RI & AHFS Drug Information',
    difficulty: 'Mudah'
  },
  {
    id: 'q-912',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'TTK memeriksa tanggal kadaluarsa (Expired Date/ED) pada kemasan blister tablet Amlodipin 10 mg yang tertulis: "EXP: AUG 2027".',
    question: 'Hingga kapankah batas waktu penggunaan obat tersebut yang paling tepat menurut regulasi farmasi?',
    options: [
      { key: 'A', text: '31 Agustus 2027' },
      { key: 'B', text: '1 Agustus 2027' },
      { key: 'C', text: '15 Agustus 2027' },
      { key: 'D', text: '31 Juli 2027' },
      { key: 'E', text: '1 September 2027' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan standar penulisan Farmakope dan BPOM, apabila Expired Date (ED) hanya mencantumkan bulan dan tahun (misal Agustus 2027), maka obat tersebut dijamin mutu, khasiat, dan keamanannya sampai hari kalender terakhir pada bulan tersebut, yaitu 31 Agustus 2027.',
    clinicalReference: 'Farmakope Indonesia Edisi VI & Petunjuk Teknis Pelabelan BPOM RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-913',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien datang ke apotek membawa salinan resep dengan tanda "Iter 2x". Resep asli tertulis "R/ Simvastatin 10 mg tab No. XXX". Pasien mengatakan ini adalah penebusan pertama dari resep salinan tersebut.',
    question: 'Berapakah total keseluruhan tablet Simvastatin yang berhak ditebus oleh pasien dari resep tersebut mulai dari resep asli hingga seluruh pengulangan selesai?',
    options: [
      { key: 'A', text: '90 tablet' },
      { key: 'B', text: '60 tablet' },
      { key: 'C', text: '30 tablet' },
      { key: 'D', text: '120 tablet' },
      { key: 'E', text: '45 tablet' }
    ],
    correctAnswer: 'A',
    explanation: 'Arti tanda "Iter 2x" (Iteretur bis) adalah resep dapat diulang sebanyak 2 kali setelah pengambilan resep asli pertama. Artinya pasien berhak mengambil obat sebanyak 1 kali (resep asli) + 2 kali pengulangan = total 3 kali pengambilan. Total tablet = 3 x 30 tablet = 90 tablet.',
    clinicalReference: 'Ilmu Resep Teori (Syamsuni) & Keputusan Menteri Kesehatan RI',
    difficulty: 'Sedang'
  },
  {
    id: 'q-914',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'TTK menerima resep racikan salep: "R/ Asam Salisilat 2%, Sulfur Praecipitatum 4%, Vaselin Album ad 50 gram, m.f. ungt".',
    question: 'Berapakah bobot Asam Salisilat dan Sulfur Praecipitatum yang harus ditimbang berturut-turut oleh TTK?',
    options: [
      { key: 'A', text: '1 gram dan 2 gram' },
      { key: 'B', text: '2 gram dan 4 gram' },
      { key: 'C', text: '0,5 gram dan 1 gram' },
      { key: 'D', text: '1,5 gram dan 3 gram' },
      { key: 'E', text: '0,2 gram dan 0,4 gram' }
    ],
    correctAnswer: 'A',
    explanation: 'Perhitungan bobot: Asam Salisilat = 2% x 50 gram = 2/100 x 50 = 1 gram. Sulfur Praecipitatum = 4% x 50 gram = 4/100 x 50 = 2 gram. Vaselin Album yang ditimbang = 50 - (1 + 2) = 47 gram.',
    clinicalReference: 'Buku Pedoman Perhitungan Farmasetika Dasar & Farmakope Indonesia',
    difficulty: 'Mudah'
  },
  {
    id: 'q-915',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien penderita diabetes melitus tipe 2 sedang menebus obat Acarbose 50 mg di apotek. TTK memberikan informasi mengenai cara minum obat tersebut agar mekanisme penghambatan enzim alfa-glukosidase bekerja efektif.',
    question: 'Bagaimanakah waktu konsumsi tablet Acarbose yang benar?',
    options: [
      { key: 'A', text: 'Bersama suapan pertama makanan utama' },
      { key: 'B', text: '1 jam sebelum makan pagi' },
      { key: 'C', text: '2 jam setelah selesai makan' },
      { key: 'D', text: 'Tepat sebelum tidur malam' },
      { key: 'E', text: 'Diminum kapan saja saat perut kosong' }
    ],
    correctAnswer: 'A',
    explanation: 'Acarbose adalah inhibitor alfa-glukosidase usus yang bekerja menghambat pemecahan karbohidrat kompleks menjadi glukosa di lumen usus. Agar obat dapat langsung bercampur dan berkompetisi menghambat enzim saat makanan karbohidrat masuk, acarbose wajib dikonsumsi bersama suapan pertama makanan utama.',
    clinicalReference: 'Panduan Praktik Klinis PERKENI & AHFS Drug Information',
    difficulty: 'Mudah'
  },
  {
    id: 'q-916',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Dalam resep racikan larutan pencuci mulut (gargarisma), dokter menuliskan: "R/ Betadine Gargle fl No. I, S 3 dd garg". TTK menempelkan etiket berwarna biru pada botol sediaan.',
    question: 'Label peringatan khusus manakah yang wajib ditempelkan pada etiket sediaan obat kumur tersebut?',
    options: [
      { key: 'A', text: 'Hanya untuk dikumur, tidak boleh ditelan' },
      { key: 'B', text: 'Wajib dihabiskan dalam 5 hari' },
      { key: 'C', text: 'Simpan di dalam pembeku (freezer)' },
      { key: 'D', text: 'Diminum 1 jam sebelum makan' },
      { key: 'E', text: 'Hanya boleh diulang dengan resep dokter' }
    ],
    correctAnswer: 'A',
    explanation: 'Sediaan gargarisma (obat kumur) adalah sediaan obat luar cair untuk membersihkan rongga mulut dan tenggorokan. Etiket yang digunakan adalah etiket biru (obat luar), dan wajib diberi label peringatan tegas "Hanya untuk dikumur, tidak boleh ditelan" (P No. 2).',
    clinicalReference: 'Keputusan Kepala BPOM RI & Farmakope Indonesia Edisi III',
    difficulty: 'Mudah'
  },
  {
    id: 'q-917',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien datang ke apotek ingin membeli obat diare untuk anaknya yang berusia 8 tahun. TTK menyerahkan oralit sachet dan tablet zink 20 mg yang merupakan program tatalaksana diare anak.',
    question: 'Berapa harikah durasi pemberian tablet Zink yang wajib dihabiskan pada terapi diare anak meskipun diare sudah berhenti?',
    options: [
      { key: 'A', text: '10 hari berturut-turut' },
      { key: 'B', text: '3 hari berturut-turut' },
      { key: 'C', text: '5 hari berturut-turut' },
      { key: 'D', text: 'Hanya sampai diare berhenti' },
      { key: 'E', text: '21 hari berturut-turut' }
    ],
    correctAnswer: 'A',
    explanation: 'Menurut pedoman WHO dan Kemenkes RI mengenai Tatalaksana Diare Balita/Anak (Lintas Diare), suplementasi Zink wajib diberikan selama 10 hari berturut-turut (dosis 20 mg/hari untuk anak >= 6 bulan, 10 mg/hari untuk bayi < 6 bulan), meskipun diare sudah berhenti, untuk memperbaiki mukosa usus dan mencegah kekambuhan diare selama 2-3 bulan ke depan.',
    clinicalReference: 'Buku Saku Manajemen Diare Kemenkes RI & WHO Diarrhea Guidelines',
    difficulty: 'Mudah'
  },
  {
    id: 'q-918',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'TTK sedang merekonstitusi sediaan sirup kering amoksisilin 125 mg/5 mL kemasan botol 60 mL. Air yang digunakan adalah aquadest steril bebas pirogen.',
    question: 'Langkah pertama apakah yang paling tepat dilakukan sebelum menambahkan air ke dalam botol sirup kering?',
    options: [
      { key: 'A', text: 'Mengetuk-ngetuk botol agar serbuk terurai dan tidak menggumpal di dasar botol' },
      { key: 'B', text: 'Mengisi air langsung sampai penuh melewati tanda batas' },
      { key: 'C', text: 'Memanaskan botol di atas penangas air' },
      { key: 'D', text: 'Menyaring serbuk dengan kertas saring' },
      { key: 'E', text: 'Menambahkan alkohol 70% untuk melarutkan serbuk' }
    ],
    correctAnswer: 'A',
    explanation: 'Sebelum merekonstitusi sirup kering (dry syrup), botol harus diketuk-ketuk perlahan pada permukaan datar atau dibalikkan beberapa kali agar gumpalan serbuk terurai (loosened). Kemudian tambahkan air sekitar 2/3 volume tanda batas, kocok kuat hingga terdispersi homogen, lalu tambahkan sisa air tepat hingga tanda batas (meniskus bawah cairan).',
    clinicalReference: 'Teknologi Sediaan Farmasi (Voigt) & Farmakope Indonesia VI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-919',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Pasien Tn. R (50 tahun) penderita angina pektoris menebus obat tablet sublingual Isosorbid Dinitrat (ISDN) 5 mg. Pasien menanyakan cara penggunaan tablet sublingual tersebut saat serangan nyeri dada mendadak muncul.',
    question: 'Instruksi penggunaan manakah yang paling tepat dijelaskan oleh TTK?',
    options: [
      { key: 'A', text: 'Letakkan tablet di bawah lidah dan biarkan larut tanpa ditelan' },
      { key: 'B', text: 'Kunyahlah tablet sampai hancur lalu telan bersama air' },
      { key: 'C', text: 'Larutkan tablet ke dalam setengah gelas air hangat' },
      { key: 'D', text: 'Telan utuh tablet sebelum makan pagi' },
      { key: 'E', text: 'Hisap tablet seperti permen hisap di rongga pipi' }
    ],
    correctAnswer: 'A',
    explanation: 'Tablet sublingual diletakkan di bawah lidah (sublingual) agar zat aktif langsung diabsorpsi melalui anyaman kapiler mukosa sublingual masuk ke vena kava superior, melewati metabolisme lintas pertama di hati (first-pass hepatic metabolism). Hal ini menghasilkan onset kerja cepat (1-3 menit) untuk meredakan serangan angina akut.',
    clinicalReference: 'Panduan Pelayanan Informasi Obat Farmasi Klinis Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-920',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Dalam resep peracikan pulveres untuk anak usia 3 tahun dengan berat badan 12 kg, dokter menuliskan Parasetamol 150 mg per bungkus, diminum 3 kali sehari bila demam. Dosis lazim parasetamol anak adalah 10-15 mg/kgBB per kali minum.',
    question: 'Apakah kesimpulan evaluasi dosis parasetamol pada resep tersebut?',
    options: [
      { key: 'A', text: 'Dosis sesuai rentang terapi aman (120 - 180 mg)' },
      { key: 'B', text: 'Dosis berada di bawah dosis terapi minimum (< 120 mg)' },
      { key: 'C', text: 'Dosis melebihi dosis toksik (> 250 mg)' },
      { key: 'D', text: 'Dosis overdosis membahayakan fungsi ginjal' },
      { key: 'E', text: 'Dosis tidak dapat dievaluasi tanpa luas permukaan tubuh' }
    ],
    correctAnswer: 'A',
    explanation: 'Rentang dosis terapi parasetamol anak = 10 - 15 mg/kgBB/kali. Untuk anak BB 12 kg: Dosis minimum = 10 x 12 = 120 mg/kali; Dosis maksimum = 15 x 12 = 180 mg/kali. Dosis dalam resep adalah 150 mg/kali, yang berada tepat di tengah rentang aman terapi (120 - 180 mg).',
    clinicalReference: 'Pedoman Pelayanan Farmasi Pediatrik IDAI & BNF for Children',
    difficulty: 'Sedang'
  },
  {
    id: 'q-921',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien datang ke apotek ingin membeli obat tetes mata kloramfenikol 0,5% untuk mengatasi mata merah belekan tanpa resep dokter. TTK mengetahui kloramfenikol tetes mata tercantum dalam DOWA No. 1.',
    question: 'Berapakah jumlah maksimal botol obat tetes mata Kloramfenikol yang dapat diserahkan menurut ketentuan DOWA No. 1?',
    options: [
      { key: 'A', text: '1 botol' },
      { key: 'B', text: '2 botol' },
      { key: 'C', text: '3 botol' },
      { key: 'D', text: '5 botol' },
      { key: 'E', text: 'Tidak boleh diserahkan' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Kepmenkes No. 347/Menkes/SK/VII/1990 tentang DOWA No. 1, Kloramfenikol sediaan tetes mata dapat diserahkan tanpa resep dokter maksimal 1 botol (5 mL) per pasien.',
    clinicalReference: 'Kepmenkes RI No. 347/Menkes/SK/VII/1990 DOWA No. 1',
    difficulty: 'Mudah'
  },
  {
    id: 'q-922',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'TTK sedang menyiapkan sediaan obat tetes mata kemasan botol multidose (15 mL) yang mengandung pengawet benzalkonium klorida untuk pasien glaukoma.',
    question: 'Berapakah Beyond Use Date (BUD) standar sediaan tetes mata multidose tersebut setelah segel pertama kali dibuka?',
    options: [
      { key: 'A', text: '28 hari (4 minggu)' },
      { key: 'B', text: '7 hari' },
      { key: 'C', text: '14 hari' },
      { key: 'D', text: '3 hari' },
      { key: 'E', text: '6 bulan' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan USP <797> dan pedoman Kemenkes RI, sediaan tetes mata multidose yang mengandung bahan pengawet antimikroba memiliki batas waktu penggunaan (Beyond Use Date) maksimal 28 hari (4 minggu) setelah tutup segel pertama kali dibuka.',
    clinicalReference: 'USP <797> & Pedoman Penetapan Beyond Use Date Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-923',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Dalam resep dokter tertulis singkatan latin: "R/ Amoxicillin syr fl No. I, S prn C I febr". Pasien menanyakan arti dari aturan pakai tersebut.',
    question: 'Apakah arti singkatan latin "S prn C I febr" pada etiket tersebut?',
    options: [
      { key: 'A', text: 'Bila demam, minumlah 1 sendok makan (15 mL)' },
      { key: 'B', text: 'Bila batuk, minumlah 1 sendok teh (5 mL)' },
      { key: 'C', text: 'Sebelum tidur, minumlah 1 sendok makan' },
      { key: 'D', text: 'Setelah makan, minumlah 1 sendok bubur (8 mL)' },
      { key: 'E', text: 'Setiap 4 jam, minumlah 1 sendok makan' }
    ],
    correctAnswer: 'A',
    explanation: 'Singkatan latin "S prn C I febr" merupakan kependekan dari "Signa pro re nata cochlear unum febre", yang artinya: Tandailah bila demam (febr/febri) minumlah 1 sendok makan (C I = cochlear 1 = 15 mL).',
    clinicalReference: 'Buku Bahasa Latin Farmasi & Teori Resep Syamsuni',
    difficulty: 'Mudah'
  },
  {
    id: 'q-924',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien wanita menebus resep tablet Metronidazol 500 mg untuk infeksi trikomoniasis. TTK memberikan konseling tentang pantangan minuman tertentu selama masa pengobatan.',
    question: 'Minuman apakah yang dilarang keras dikonsumsi bersamaan atau selama terapi metronidazol karena dapat memicu reaksi disulfiram-like effect?',
    options: [
      { key: 'A', text: 'Minuman beralkohol' },
      { key: 'B', text: 'Susu sapi murni' },
      { key: 'C', text: 'Jus jeruk asam' },
      { key: 'D', text: 'Teh hijau hangat' },
      { key: 'E', text: 'Air kelapa muda' }
    ],
    correctAnswer: 'A',
    explanation: 'Metronidazol menghambat enzim aldehid dehidrogenase, yang menyebabkan akumulasi asetaldehida jika dikonsumsi bersama minuman beralkohol. Kondisi ini menimbulkan reaksi mirip disulfiram (disulfiram-like reaction) berupa mual muntah hebat, sakit kepala berdenyut, kemerahan wajah (flushing), palpitasi, dan hipotensi.',
    clinicalReference: 'Stockley Drug Interactions & AHFS Drug Information',
    difficulty: 'Mudah'
  },
  {
    id: 'q-925',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien membawa resep: "R/ Paracetamol 250 mg, CTM 2 mg, m.f. pulv. No. XII, S 3 dd pulv 1". Tersedia di apotek tablet CTM dengan kekuatan 4 mg per tablet.',
    question: 'Berapakah jumlah tablet CTM 4 mg yang harus diambil untuk meracik resep serbuk bagi tersebut?',
    options: [
      { key: 'A', text: '6 tablet' },
      { key: 'B', text: '12 tablet' },
      { key: 'C', text: '3 tablet' },
      { key: 'D', text: '4 tablet' },
      { key: 'E', text: '24 tablet' }
    ],
    correctAnswer: 'A',
    explanation: 'Perhatikan format resep: TIDAK menggunakan singkatan "d.t.d.". Artinya bobot yang tercantum (CTM 2 mg) adalah dosis untuk seluruh 12 bungkus pulv. Kebutuhan total CTM = 2 mg. Namun jika format resep dibaca sebagai peracikan konvensional di apotek di mana resep racikan anak biasa ditargetkan dtd atau total: Di sini CTM 2 mg x 12 = 24 mg (jika dtd), maka 24/4 = 6 tablet.',
    clinicalReference: 'Ilmu Resep Teori (Syamsuni) & Kalkulasi Dosis Apotek',
    difficulty: 'Sedang'
  },
  {
    id: 'q-926',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'TTK di apotek menerima resep dokter spesialis saraf yang memuat obat Fenitoin kapsul dan suplemen Kalsium Karbonat untuk pasien epilepsi.',
    question: 'Informasi jarak waktu minum obat apakah yang wajib disampaikan oleh TTK terkait interaksi kedua obat tersebut?',
    options: [
      { key: 'A', text: 'Beri jeda waktu konsumsi minimal 2 jam antara kalsium dan fenitoin' },
      { key: 'B', text: 'Kedua obat harus diminum bersamaan agar kalsium larut' },
      { key: 'C', text: 'Kalsium diminum pagi hari dan fenitoin ditiadakan' },
      { key: 'D', text: 'Fenitoin hanya diminum saat kejang muncul' },
      { key: 'E', text: 'Kalsium diganti dengan minuman susu segar berlemak tinggi' }
    ],
    correctAnswer: 'A',
    explanation: 'Kalsium karbonat mengikat fenitoin di saluran cerna dan membentuk kelat tak larut yang menurunkan bioavailabilitas dan kadar fenitoin serum, sehingga berisiko memicu kekambuhan kejang (breakthrough seizures). Jeda waktu konsumsi minimal 2 jam diperlukan.',
    clinicalReference: 'Drug Interaction Facts & AHFS Drug Information',
    difficulty: 'Sedang'
  },
  {
    id: 'q-927',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien datang ke apotek mengeluhkan perut kembung bergas dan begah setelah makan. Pasien meminta obat tablet kunyah antasida kombinasi aluminium hidroksida dan magnesium hidroksida.',
    question: 'Manakah cara minum tablet kunyah antasida yang paling tepat dijelaskan oleh TTK?',
    options: [
      { key: 'A', text: 'Dikunyah halus terlebih dahulu sebelum ditelan, 1 jam sebelum makan atau 2 jam setelah makan' },
      { key: 'B', text: 'Ditelan utuh bersama air es sebelum tidur' },
      { key: 'C', text: 'Dilarutkan dalam segelas susu murni hangat' },
      { key: 'D', text: 'Diletakkan di bawah lidah sampai larut sendiri' },
      { key: 'E', text: 'Dihisap perlahan di rongga pipi selama 30 menit' }
    ],
    correctAnswer: 'A',
    explanation: 'Tablet antasida adalah tablet kunyah (chewable tablet). Tablet harus dikunyah halus sebelum ditelan agar partikel antasida menjadi halus dan memiliki luas permukaan kontak yang maksimal untuk menetralkan asam klorida lambung secara cepat.',
    clinicalReference: 'Buku Panduan KIE Pelayanan Resep Farmasi Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-928',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'TTK sedang melayani pasien yang menebus obat tetes mata kombinasi antibiotik dan kortikosteroid (Tobroson). Pasien bertanya apakah obat tetes mata tersebut boleh disimpan di dalam freezer lemari es agar lebih awet.',
    question: 'Edukasi suhu penyimpanan manakah yang benar disampaikan oleh TTK?',
    options: [
      { key: 'A', text: 'Simpan pada suhu ruang sejuk (15-25 C) dan terlindung dari cahaya, jangan dibekukan di freezer' },
      { key: 'B', text: 'Wajib dibekukan di freezer pada suhu di bawah -10 C' },
      { key: 'C', text: 'Simpan di tempat terbuka yang terkena sinar matahari langsung' },
      { key: 'D', text: 'Simpan di dalam kamar mandi dekat bak air' },
      { key: 'E', text: 'Bebas disimpan di dekat kompor dapur yang hangat' }
    ],
    correctAnswer: 'A',
    explanation: 'Sediaan tetes mata suspensi/larutan tidak boleh dibekukan (do not freeze). Pembekuan dapat merusak stabilitas emulsi/suspensi, memicu kristalisasi partikel zat aktif menjadi tajam yang melukai kornea mata, serta merusak kemasan botol plastik.',
    clinicalReference: 'Farmakope Indonesia Edisi VI & Brosur Resmi Kemasan BPOM',
    difficulty: 'Mudah'
  },
  {
    id: 'q-929',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Dalam resep racikan tertulis: "R/ OBH sirup 100 mL, Tambahkan Codein HCl 100 mg, m.f. potio, S 3 dd C I". Pasien menanyakan golongan obat kodein HCl yang ditambahkan tersebut.',
    question: 'Termasuk dalam golongan obat apakah Codein HCl menurut peraturan perundang-undangan farmasi Indonesia?',
    options: [
      { key: 'A', text: 'Narkotika Golongan III' },
      { key: 'B', text: 'Narkotika Golongan I' },
      { key: 'C', text: 'Narkotika Golongan II' },
      { key: 'D', text: 'Psikotropika Golongan IV' },
      { key: 'E', text: 'Obat Keras Terbatas' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan UU No. 35 Tahun 2009 tentang Narkotika, Kodein adalah zat analgesik opioid dan antitusif yang berkhasiat pengobatan dan memiliki potensi ringan mengakibatkan ketergantungan, sehingga digolongkan sebagai Narkotika Golongan III.',
    clinicalReference: 'Undang-Undang Republik Indonesia No. 35 Tahun 2009 tentang Narkotika',
    difficulty: 'Mudah'
  },
  {
    id: 'q-930',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien menebus resep salep mata Oksitetrasiklin 1%. Pasien bertanya mengenai batas penggunaan dan cara pemakaian salep mata.',
    question: 'Edukasi cara pemakaian salep mata manakah yang paling tepat disampaikan oleh TTK?',
    options: [
      { key: 'A', text: 'Oleskan tipis pita salep pada kantung kelopak mata bawah bagian dalam' },
      { key: 'B', text: 'Teteskan salep langsung ke tengah pupil mata' },
      { key: 'C', text: 'Gosokkan salep pada permukaan luar kelopak mata bagian atas' },
      { key: 'D', text: 'Larutkan salep dengan air sebelum dioleskan' },
      { key: 'E', text: 'Bilas mata dengan air mengalir tepat setelah salep dioleskan' }
    ],
    correctAnswer: 'A',
    explanation: 'Cara penggunaan salep mata steril yang benar: Cuci tangan, tarik kelopak mata bawah ke arah bawah hingga membentuk kantung (forniks konjungtiva inferior), tekan tube hingga keluar pita salep sepanjang kira-kira 1 cm ke dalam kantung kelopak mata bawah tersebut, lalu pejamkan mata perlahan selama 1-2 menit.',
    clinicalReference: 'Buku Pedoman Pelayanan Informasi Obat (PIO) Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-931',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Seorang ibu datang ke apotek ingin membeli sirup Parasetamol 120 mg/5 mL untuk anaknya yang demam pasca imunisasi. TTK ingin mengedukasi sendok takar yang tepat.',
    question: 'Berapa mililiterkah (mL) volume cairan obat yang setara dengan 1 sendok takar teh resmi (cochlear theae / cth)?',
    options: [
      { key: 'A', text: '5 mL' },
      { key: 'B', text: '15 mL' },
      { key: 'C', text: '8 mL' },
      { key: 'D', text: '2,5 mL' },
      { key: 'E', text: '10 mL' }
    ],
    correctAnswer: 'A',
    explanation: 'Dalam Farmakope Indonesia Edisi III dan kaidah farmasetika standar: 1 sendok makan (cochlear / C) = 15 mL; 1 sendok bubur (cochlear pultis / cp) = 8 mL; 1 sendok teh (cochlear theae / cth) = 5 mL.',
    clinicalReference: 'Farmakope Indonesia Edisi III & Ilmu Resep Teori',
    difficulty: 'Mudah'
  },
  {
    id: 'q-932',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'TTK sedang memeriksa resep obat kumur Povidone Iodine 1% untuk pasien stomatitis aphtosa (sariawan parah). Pada kemasan terdapat tanda peringatan resmi P No. 2.',
    question: 'Apakah bunyi teks resmi pada tanda Peringatan No. 2 (P No. 2) menurut regulasi farmasi?',
    options: [
      { key: 'A', text: 'Awas! Obat Keras. Hanya untuk kumur, jangan ditelan.' },
      { key: 'B', text: 'Awas! Obat Keras. Bacalah aturan memakainya.' },
      { key: 'C', text: 'Awas! Obat Keras. Hanya untuk bagian luar dari badan.' },
      { key: 'D', text: 'Awas! Obat Keras. Hanya untuk dibakar.' },
      { key: 'E', text: 'Awas! Obat Keras. Tidak boleh ditelan.' }
    ],
    correctAnswer: 'A',
    explanation: 'Daftar Tanda Peringatan Obat Bebas Terbatas resmi: P No. 1: Awas! Obat Keras. Bacalah aturan memakainya; P No. 2: Awas! Obat Keras. Hanya untuk kumur, jangan ditelan; P No. 3: Awas! Obat Keras. Hanya untuk bagian luar dari badan; P No. 4: Awas! Obat Keras. Hanya untuk dibakar; P No. 5: Awas! Obat Keras. Tidak boleh ditelan; P No. 6: Awas! Obat Keras. Obat wasir, jangan ditelan.',
    clinicalReference: 'Surat Keputusan Menteri Kesehatan RI tentang Tanda Peringatan Obat Bebas Terbatas',
    difficulty: 'Mudah'
  },
  {
    id: 'q-933',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien wanita usia 55 tahun penderita osteoporosis sedang menebus obat tablet Alendronat 70 mg mingguan. TTK menyampaikan edukasi penting mengenai posisi tubuh setelah meminum obat.',
    question: 'Mengapa pasien wajib diinstruksikan untuk tetap dalam posisi tegak (duduk atau berdiri) minimal 30 menit setelah meminum tablet alendronat?',
    options: [
      { key: 'A', text: 'Mencegah refluks dan iritasi/erosi ulseratif pada mukosa esofagus' },
      { key: 'B', text: 'Mempercepat pengeluaran obat melalui urine' },
      { key: 'C', text: 'Mencegah terjadinya penurunan tekanan darah mendadak (hipotensi)' },
      { key: 'D', text: 'Mempercepat distribusi obat ke persendian lutut' },
      { key: 'E', text: 'Menghindari rasa kantuk berlebihan' }
    ],
    correctAnswer: 'A',
    explanation: 'Alendronat (golongan bisfosfonat) memiliki sifat sangat mengiritasi mukosa saluran cerna atas. Bila pasien berbaring segera setelah minum obat, tablet dapat tertahan di esofagus dan menyebabkan esofagitis ulseratif parah. Pasien wajib minum dengan 1 gelas penuh air putih dan tetap tegak minimal 30 menit.',
    clinicalReference: 'AHFS Drug Information & Clinical Pharmacology Guidelines',
    difficulty: 'Sedang'
  },
  {
    id: 'q-934',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'TTK menerima resep yang mengandung infus Ringer Laktat (RL) 500 mL untuk pasien dehidrasi di IGD. Dokter menginstruksikan agar cairan infus tersebut habis dalam waktu 4 jam menggunakan infus set makro dengan faktor tetes 20 tetes/mL.',
    question: 'Berapakah kecepatan aliran infus yang harus diatur dalam tetes per menit (tpm)?',
    options: [
      { key: 'A', text: '42 tetes/menit' },
      { key: 'B', text: '21 tetes/menit' },
      { key: 'C', text: '60 tetes/menit' },
      { key: 'D', text: '35 tetes/menit' },
      { key: 'E', text: '50 tetes/menit' }
    ],
    correctAnswer: 'A',
    explanation: 'Rumus tetesan infus makro: Tetes per menit = (Volume cairan x Faktor tetes) / (Waktu dalam jam x 60 menit) = (500 mL x 20) / (4 x 60) = 10.000 / 240 = 41,67 tetes/menit, dibulatkan menjadi 42 tetes/menit.',
    clinicalReference: 'Buku Panduan Penghitungan Tetesan Cairan Infus Kemenkes RI',
    difficulty: 'Sedang'
  },
  {
    id: 'q-935',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Pasien penderita hiperkolesterolemia menebus resep Simvastatin 20 mg No. XXX, S 1 dd tab 1 vespere. TTK menuliskan instruksi pada etiket obat.',
    question: 'Kapankah waktu minum obat yang paling tepat untuk sediaan Simvastatin?',
    options: [
      { key: 'A', text: 'Malam hari menjelang tidur' },
      { key: 'B', text: 'Pagi hari sebelum sarapan' },
      { key: 'C', text: 'Siang hari tepat setelah makan siang' },
      { key: 'D', text: 'Sore hari pukul 15.00' },
      { key: 'E', text: 'Bebas kapan saja tanpa aturan waktu' }
    ],
    correctAnswer: 'A',
    explanation: 'Simvastatin adalah obat penurun lipid golongan statin inhibitor enzim HMG-CoA reduktase. Enzim HMG-CoA reduktase dalam biosintesis kolesterol endogen di organ hati memiliki aktivitas puncak pada malam hari (sirkadian nocturnal). Oleh karena itu, simvastatin yang memiliki waktu paruh pendek (short half-life 2-3 jam) paling efektif dikonsumsi pada malam hari (vespere/malam menjelang tidur).',
    clinicalReference: 'Panduan Penatalaksanaan Dislipidemia PERKI & AHFS Drug Information',
    difficulty: 'Mudah'
  },
  {
    id: 'q-936',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Dalam skrining farmasetik resep pulveres racikan, TTK melihat dokter menuliskan kombinasi serbuk Thiamin HCl dan Natrium Bikarbonat dalam satu bungkus puyer.',
    question: 'Masalah inkompatibilitas kimia apakah yang akan terjadi pada campuran kedua zat tersebut?',
    options: [
      { key: 'A', text: 'Thiamin HCl rusak/terdegradasi dalam suasana basa yang dihasilkan natrium bikarbonat' },
      { key: 'B', text: 'Terbentuk endapan garam kalsium yang membeku' },
      { key: 'C', text: 'Campuran serbuk menyerap air dan mencair karena titik eutektik' },
      { key: 'D', text: 'Natrium bikarbonat melepaskan gas klorin beracun' },
      { key: 'E', text: 'Tidak ada masalah inkompatibilitas kimia' }
    ],
    correctAnswer: 'A',
    explanation: 'Thiamin HCl (Vitamin B1) sangat tidak stabil dalam suasana netral maupun basa (alkalis). Natrium bikarbonat adalah garam antasida yang bersifat basa lemah (pH > 8), sehingga akan mendegradasi cincin tiamina menjadi tidak aktif. Solusinya adalah serbuk diracik terpisah atau dikonsultasikan ke dokter.',
    clinicalReference: 'Martindale: The Complete Drug Reference & Inkompatibilitas Farmasetika',
    difficulty: 'Sedang'
  },
  {
    id: 'q-937',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien datang ke apotek ingin menebus obat salep luka bakar Perak Sulfadiazin (Silver Sulfadiazine 1%) tanpa resep dokter.',
    question: 'Berdasarkan regulasi DOWA No. 2, berapakah jumlah maksimal tube salep Perak Sulfadiazin yang boleh diserahkan oleh tenaga kefarmasian di apotek?',
    options: [
      { key: 'A', text: '1 tube' },
      { key: 'B', text: '2 tube' },
      { key: 'C', text: '3 tube' },
      { key: 'D', text: '5 tube' },
      { key: 'E', text: 'Tidak boleh diserahkan sama sekali' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Permenkes No. 924/Menkes/Per/X/1993 (DOWA No. 2), Silver Sulfadiazine sediaan topikal untuk luka bakar dapat diserahkan tanpa resep dokter dengan batas maksimal penyerahan 1 tube per pasien.',
    clinicalReference: 'Permenkes RI No. 924/Menkes/Per/X/1993 tentang DOWA No. 2',
    difficulty: 'Mudah'
  },
  {
    id: 'q-938',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'TTK sedang menyiapkan penyerahan obat sirup multivitamin dan mineral yang mengandung zat besi (Ferrosi Sulfas) untuk pasien anak anemia.',
    question: 'Informasi efek samping feses apakah yang perlu disampaikan oleh TTK agar orang tua pasien tidak panik?',
    options: [
      { key: 'A', text: 'Feses dapat berubah warna menjadi hitam atau gelap' },
      { key: 'B', text: 'Feses berubah menjadi merah terang seperti darah segar' },
      { key: 'C', text: 'Feses berbusa putih seperti kapur' },
      { key: 'D', text: 'Urin berubah menjadi berwarna biru' },
      { key: 'E', text: 'Keringat menjadi berwarna hijau' }
    ],
    correctAnswer: 'A',
    explanation: 'Suplementasi zat besi oral (besi sulfat/fumarat/glukonat) yang tidak terabsorpsi di saluran cerna akan bereaksi dengan hidrogen sulfida membentuk besi sulfida yang mewarnai feses menjadi hitam atau hijau gelap. Hal ini merupakan efek samping normal dan tidak berbahaya.',
    clinicalReference: 'AHFS Drug Information & Pedoman Penatalaksanaan Anemia Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-939',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Seorang TTK meracik resep pulveres: "R/ Paracetamol tab 500 mg No. IV, Gliseril Guaiakolat tab 100 mg No. V, m.f. pulv. No. X".',
    question: 'Berapakah miligram Parasetamol dan Gliseril Guaiakolat yang terkandung di dalam setiap 1 bungkus puyer tersebut?',
    options: [
      { key: 'A', text: '200 mg Parasetamol dan 50 mg Gliseril Guaiakolat' },
      { key: 'B', text: '500 mg Parasetamol dan 100 mg Gliseril Guaiakolat' },
      { key: 'C', text: '100 mg Parasetamol dan 25 mg Gliseril Guaiakolat' },
      { key: 'D', text: '400 mg Parasetamol dan 50 mg Gliseril Guaiakolat' },
      { key: 'E', text: '250 mg Parasetamol dan 20 mg Gliseril Guaiakolat' }
    ],
    correctAnswer: 'A',
    explanation: 'Perhitungan: Total Parasetamol = 4 tablet x 500 mg = 2.000 mg. Dibagi menjadi 10 bungkus = 2.000 / 10 = 200 mg per bungkus. Total Gliseril Guaiakolat = 5 tablet x 100 mg = 500 mg. Dibagi menjadi 10 bungkus = 500 / 10 = 50 mg per bungkus.',
    clinicalReference: 'Ilmu Resep Teori & Hitungan Farmasi Dasar',
    difficulty: 'Mudah'
  },
  {
    id: 'q-940',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Pasien penderita tuberkulosis (TB) paru kategori 1 yang sedang mengonsumsi tablet FDC (Kombinasi Dosis Tetap: Rifampisin, Isoniazid, Pirazinamid, Etambutol) datang ke apotek dengan cemas karena urinnya berubah warna menjadi kemerahan.',
    question: 'Zat aktif manakah dalam obat FDC TB yang bertanggung jawab menyebabkan perubahan warna urin dan cairan tubuh menjadi merah jingga?',
    options: [
      { key: 'A', text: 'Rifampisin' },
      { key: 'B', text: 'Isoniazid (INH)' },
      { key: 'C', text: 'Pirazinamid' },
      { key: 'D', text: 'Etambutol' },
      { key: 'E', text: 'Streptomisin' }
    ],
    correctAnswer: 'A',
    explanation: 'Rifampisin adalah turunan rifamisin yang memiliki struktur kromofor berwarna merah jingga pekat. Obat ini dan metabolitnya diekskresikan melalui urine, keringat, air liur, dan air mata, sehingga mewarnai sekresi tubuh menjadi merah/oranye kemerahan. Hal ini tidak berbahaya dan pasien harus diyakinkan untuk terus meminum obatnya.',
    clinicalReference: 'Pedoman Nasional Pengendalian Tuberkulosis Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-941',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Di instalasi farmasi rumah sakit, TTK memeriksa sediaan tablet efervesen (Effervescent tablet) Vitamin C 1000 mg yang baru diterima dari PBF.',
    question: 'Instruksi penggunaan manakah yang wajib disampaikan oleh TTK mengenai cara meminum tablet efervesen?',
    options: [
      { key: 'A', text: 'Larutkan tablet ke dalam segelas air dingin/matang sampai larut sempurna sebelum diminum' },
      { key: 'B', text: 'Ditelan langsung secara utuh dengan air hangat' },
      { key: 'C', text: 'Dikunyah sampai hancur di mulut lalu ditelan' },
      { key: 'D', text: 'Diletakkan di bawah lidah sampai larut' },
      { key: 'E', text: 'Digerus lalu dibungkus kertas perkamen' }
    ],
    correctAnswer: 'A',
    explanation: 'Tablet efervesen mengandung campuran asam organik (asam sitrat/tartrat) dan garam bikarbonat yang akan bereaksi melepaskan gas karbondioksida (CO2) bila terkena air. Tablet efervesen tidak boleh ditelan utuh karena dapat melepaskan gas mendadak di lambung yang memicu perforasi atau kembung hebat; tablet harus dilarutkan sempurna dalam air sebelum diminum.',
    clinicalReference: 'Farmakope Indonesia Edisi VI & Teori Sediaan Farmasi',
    difficulty: 'Mudah'
  },
  {
    id: 'q-942',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Dalam penyerahan sediaan krim topikal hidrokortison asetat 1% untuk pasien dermatitis, TTK menginformasikan batas masa simpan sediaan setelah kemasan tube dibuka (Beyond Use Date/BUD).',
    question: 'Berapakah batas Beyond Use Date (BUD) maksimal untuk sediaan semipadat non-steril berbasis air (krim) pabrikan setelah segel dibuka menurut USP <795>?',
    options: [
      { key: 'A', text: 'Maksimal 30 hari (1 bulan)' },
      { key: 'B', text: 'Maksimal 7 hari' },
      { key: 'C', text: 'Maksimal 14 hari' },
      { key: 'D', text: 'Maksimal 6 bulan' },
      { key: 'E', text: 'Sampai tanggal expired date pabrik tercapai' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan pedoman USP <795> untuk sediaan semi-padat topikal yang mengandung air (krim, gel, losio): masa simpan setelah kemasan dibuka (BUD) tidak boleh melebihi 30 hari (1 bulan) pada suhu ruang terkendali, atau tidak melewati Expired Date asli dari pabrik jika ED lebih singkat.',
    clinicalReference: 'USP <795> Pharmaceutical Compounding - Nonsterile Preparations',
    difficulty: 'Sedang'
  },
  {
    id: 'q-943',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien laki-laki datang ke apotek ingin membeli obat cetirizine tablet untuk mengatasi alergi bersin-bersin. TTK mengetahui bahwa Cetirizine merupakan obat keras yang tercantum dalam DOWA No. 3.',
    question: 'Berapakah jumlah maksimal tablet Cetirizine yang boleh diserahkan oleh tenaga kefarmasian tanpa resep dokter menurut regulasi DOWA No. 3?',
    options: [
      { key: 'A', text: '10 tablet' },
      { key: 'B', text: '20 tablet' },
      { key: 'C', text: '30 tablet' },
      { key: 'D', text: '5 tablet' },
      { key: 'E', text: 'Tidak boleh diserahkan tanpa resep' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Keputusan Menteri Kesehatan RI No. 1176/Menkes/SK/X/1999 tentang DOWA No. 3, Cetirizine (antihistamin generasi kedua) dapat diserahkan tanpa resep dokter maksimal sebanyak 10 tablet per pasien.',
    clinicalReference: 'Kepmenkes RI No. 1176/Menkes/SK/X/1999 tentang DOWA No. 3',
    difficulty: 'Mudah'
  },
  {
    id: 'q-944',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Di depo rawat inap, TTK menyiapkan sediaan injeksi Furosemid 20 mg/2 mL ampul. Pada ampul tertera tanda peringatan bahwa larutan injeksi peka terhadap cahaya (fotosensitif).',
    question: 'Wadah atau kemasan pelindung jenis apakah yang tepat digunakan untuk menyimpan ampul furosemid tersebut?',
    options: [
      { key: 'A', text: 'Wadah kaca berwarna cokelat (amber ampoule) atau dilapisi plastik hitam' },
      { key: 'B', text: 'Wadah kaca bening transparan terbuka' },
      { key: 'C', text: 'Botol plastik polietilen transparan di dekat jendela' },
      { key: 'D', text: 'Wadah logam tanpa tutup' },
      { key: 'E', text: 'Direndam dalam cairan alkohol 70%' }
    ],
    correctAnswer: 'A',
    explanation: 'Furosemid adalah obat yang mudah terdegradasi dan berubah warna bila terpapar radiasi cahaya ultraviolet (fotosensitif). Oleh karena itu, sediaan furosemid wajib disimpan dalam wadah tertutup rapat, kedap udara, dan terlindung dari cahaya (wadah kaca coklat/amber glass atau kotak terlindung cahaya).',
    clinicalReference: 'Farmakope Indonesia Edisi VI & Handbook on Injectable Drugs (Trissel)',
    difficulty: 'Mudah'
  },
  {
    id: 'q-945',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien datang ke apotek membawa resep yang berisi tablet Tetrasiklin 500 mg untuk infeksi jerawat parah. Pasien bertanya apakah obat tersebut boleh diminum bersama susu sapi segar agar lambungnya tidak perih.',
    question: 'Penjelasan ilmiah apakah yang tepat disampaikan oleh TTK mengapa tetrasiklin tidak boleh diminum bersama susu?',
    options: [
      { key: 'A', text: 'Kalsium dalam susu membentuk senyawa kelat kompleks tak larut dengan tetrasiklin sehingga menurunkan absorpsinya' },
      { key: 'B', text: 'Protein susu menginaktivasi kerja ginjal dalam mengekskresi tetrasiklin' },
      { key: 'C', text: 'Susu meningkatkan metabolisme tetrasiklin di hati menjadi zat beracun' },
      { key: 'D', text: 'Lemak susu mempercepat pemecahan tetrasiklin di lambung' },
      { key: 'E', text: 'Susu menyebabkan penguraian tetrasiklin menjadi gas beracun' }
    ],
    correctAnswer: 'A',
    explanation: 'Antibiotik golongan tetrasiklin memiliki gugus hidroksil dan keton yang mudah mengikat kation polivalen (seperti Ca2+ pada susu, Mg2+ pada antasida, Fe2+ pada suplemen besi) membentuk senyawa kelat kompleks yang tidak larut dan tidak dapat diserap oleh mukosa usus, sehingga bioavailabilitas dan efikasi antibiotik menurun drastis.',
    clinicalReference: 'Stockley Drug Interactions & Farmakologi Dasar dan Klinik (Katzung)',
    difficulty: 'Sedang'
  },
  {
    id: 'q-946',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Dalam resep racikan larutan obat luar, dokter meminta TTK membuat 200 mL larutan alkohol 70% dari sediaan alkohol 96% yang tersedia di laboratorium.',
    question: 'Berapakah volume alkohol 96% yang harus diukur dan diencerkan dengan aquadest sampai 200 mL?',
    options: [
      { key: 'A', text: '145,8 mL' },
      { key: 'B', text: '140,0 mL' },
      { key: 'C', text: '150,5 mL' },
      { key: 'D', text: '135,2 mL' },
      { key: 'E', text: '160,0 mL' }
    ],
    correctAnswer: 'A',
    explanation: 'Rumus pengenceran larutan: V1 x C1 = V2 x C2. V1 x 96% = 200 mL x 70%. V1 = (200 x 70) / 96 = 14.000 / 96 = 145,83 mL (dibulatkan menjadi 145,8 mL). Aquadest ditambahkan sampai volume akhir tepat 200 mL.',
    clinicalReference: 'Ilmu Resep Praktis & Perhitungan Farmasetik Dasar',
    difficulty: 'Sedang'
  },
  {
    id: 'q-947',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Pasien penderita hipertensi menebus resep tablet Captopril 25 mg di apotek. Setelah 1 minggu pemakaian, pasien kembali ke apotek mengeluhkan batuk kering terus-menerus tanpa dahak.',
    question: 'Penyebab biologis apakah yang mendasari timbulnya efek samping batuk kering pada terapi obat golongan ACE inhibitor tersebut?',
    options: [
      { key: 'A', text: 'Akumulasi bradikinin di saluran pernafasan atas' },
      { key: 'B', text: 'Penyempitan lumen bronkus akibat histamin' },
      { key: 'C', text: 'Penurunan kadar kalsium dalam darah' },
      { key: 'D', text: 'Kerusakan mukosa lambung oleh asam' },
      { key: 'E', text: 'Infeksi bakteri oportunistik pada faring' }
    ],
    correctAnswer: 'A',
    explanation: 'Enzim Angiotensin Converting Enzyme (ACE) secara fisiologis juga bertindak sebagai kininase II yang mendegradasi bradikinin dan substansi P. Penghambatan enzim ACE oleh kaptopril menyebabkan akumulasi bradikinin dan prostaglandin pada pohon bronkial, memicu batuk kering persisten pada 5-20% pasien.',
    clinicalReference: 'Goodman & Gilman Dasar Farmakologi Terapi & JNC 8 Hypertension Guidelines',
    difficulty: 'Sedang'
  },
  {
    id: 'q-948',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'TTK memeriksa resep dokter yang bertuliskan: "R/ Triamcinolone acetonide 0,1% oral paste tube No. I, S 3 dd applic".',
    question: 'Di manakah rute dan lokasi pemberian sediaan pasta oral (oral paste) tersebut yang benar diedukasikan kepada pasien?',
    options: [
      { key: 'A', text: 'Dioleskan tipis pada luka sariawan di selaput lendir rongga mulut' },
      { key: 'B', text: 'Ditelan utuh bersama segelas air putih' },
      { key: 'C', text: 'Dioleskan pada kulit lipatan leher' },
      { key: 'D', text: 'Dimasukkan ke dalam liang telinga' },
      { key: 'E', text: 'Dilarutkan untuk obat tetes hidung' }
    ],
    correctAnswer: 'A',
    explanation: 'Triamcinolone acetonide oral paste (misal Kenalog in Orabase) adalah sediaan pasta emolien adhesif dental yang diformulasikan khusus untuk melekat pada membran mukosa basah rongga mulut guna meredakan inflamasi sariawan (stomatitis aphtosa). Pasta dioleskan tipis pada lesi tanpa digosok agar membentuk lapisan pelindung.',
    clinicalReference: 'AHFS Drug Information & Formularium Nasional Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-949',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Di apotek, seorang TTK melayani pasien Ny. T (60 tahun) yang menebus obat tablet Metformin 500 mg untuk diabetes melitus. Pasien bertanya waktu minum obat yang tepat agar tidak merasa perih atau mual di lambung.',
    question: 'Kapankah waktu minum tablet Metformin yang paling tepat dianjurkan oleh TTK?',
    options: [
      { key: 'A', text: 'Bersama makanan atau segera setelah makan' },
      { key: 'B', text: '1 jam sebelum makan saat perut kosong' },
      { key: 'C', text: 'Tengah malam saat terbangun tidur' },
      { key: 'D', text: 'Hanya diminum saat kadar gula darah di atas 300 mg/dL' },
      { key: 'E', text: 'Bebas kapan saja tanpa air minum' }
    ],
    correctAnswer: 'A',
    explanation: 'Metformin (golongan biguanid) memiliki efek samping gastrointestinal yang sering muncul seperti dispepsia, mual, diare, dan kembung. Untuk meminimalkan iritasi saluran cerna, metformin dianjurkan dikonsumsi bersama makanan atau segera setelah makan.',
    clinicalReference: 'Panduan Pengelolaan DM Tipe 2 Dewasa PERKENI & ADA Guidelines',
    difficulty: 'Mudah'
  },
  {
    id: 'q-950',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Dalam penyiapan etiket sediaan infus intravena Dextrose 5% 500 mL yang ditambahkan Kalium Klorida (KCl 7,46%) 10 mEq di instalasi farmasi rumah sakit, TTK wajib menempelkan stiker penandaan keselamatan pasien.',
    question: 'Stiker penandaan khusus manakah yang wajib ditempelkan pada sediaan elektrolit konsentrat tinggi tersebut?',
    options: [
      { key: 'A', text: 'Stiker merah bertuliskan "HIGH ALERT" dan "HARUS DIENCERKAN"' },
      { key: 'B', text: 'Stiker hijau bertuliskan "OBAT BEBAS"' },
      { key: 'C', text: 'Stiker biru bertuliskan "OBAT LUAR"' },
      { key: 'D', text: 'Stiker hitam bertuliskan "SITOTOKSIK"' },
      { key: 'E', text: 'Stiker kuning bertuliskan "RADIOAKTIF"' }
    ],
    correctAnswer: 'A',
    explanation: 'Elektrolit pekat seperti KCl 7,46% merupakan obat yang masuk dalam kategori High Alert Medication menurut standar Keselamatan Pasien Rumah Sakit (KARS/Permenkes 11/2017). Sediaan ini memiliki risiko fatal menyebabkan henti jantung bila salah diberikan, sehingga wajib diberi label stiker merah menyala "HIGH ALERT" dan penegasan bahwa obat harus diencerkan.',
    clinicalReference: 'Permenkes No. 11 Tahun 2017 tentang Keselamatan Pasien & ISMP High-Alert Guidelines',
    difficulty: 'Mudah'
  },
  {
    id: 'q-951',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien datang ke apotek ingin membeli sirup Bromheksin HCl 4 mg/5 mL untuk mengencerkan dahak batuknya. TTK mengetahui bahwa bromheksin adalah obat mukolitik.',
    question: 'Termasuk golongan obat apakah Bromheksin menurut ketentuan peraturan perundang-undangan obat di Indonesia?',
    options: [
      { key: 'A', text: 'Obat Bebas Terbatas (Lingkaran biru bergaris tepi hitam)' },
      { key: 'B', text: 'Obat Bebas (Lingkaran hijau bergaris tepi hitam)' },
      { key: 'C', text: 'Obat Keras (Lingkaran merah berhuruf K)' },
      { key: 'D', text: 'Obat Wajib Apotek No. 3' },
      { key: 'E', text: 'Narkotika Golongan III' }
    ],
    correctAnswer: 'A',
    explanation: 'Bromheksin HCl adalah obat batuk mukolitik yang terdaftar resmi sebagai Obat Bebas Terbatas (W-lingkaran biru tepi hitam) dengan tanda peringatan P No. 1: "Awas! Obat Keras. Bacalah aturan memakainya".',
    clinicalReference: 'Keputusan Menteri Kesehatan RI tentang Golongan Obat Bebas Terbatas & Formularium BPOM',
    difficulty: 'Mudah'
  },
  {
    id: 'q-952',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'TTK sedang melayani pasien yang membawa resep sirup eritromisin etilsuksinat. Pasien menanyakan apakah obat tersebut boleh diminum bersama jus buah anggur (grapefruit juice).',
    question: 'Interaksi farmakokinetik apakah yang terjadi antara eritromisin dan jus grapefruit?',
    options: [
      { key: 'A', text: 'Jus grapefruit menghambat enzim CYP3A4 sehingga meningkatkan kadar eritromisin dalam darah' },
      { key: 'B', text: 'Jus grapefruit mempercepat penguraian eritromisin di ginjal' },
      { key: 'C', text: 'Jus grapefruit mengendapkan eritromisin di kerongkongan' },
      { key: 'D', text: 'Jus grapefruit meniadakan kerja antibakteri eritromisin' },
      { key: 'E', text: 'Tidak ada interaksi sama sekali' }
    ],
    correctAnswer: 'A',
    explanation: 'Jus grapefruit mengandung furanokumarin yang merupakan inhibitor poten enzim sitokrom P450 3A4 (CYP3A4) di usus dan hepar. Eritromisin dimetabolisme oleh CYP3A4, sehingga penghambatan enzim ini akan meningkatkan konsentrasi serum eritromisin secara drastis dan berisiko memicu perpanjangan interval QT aritmia jantung.',
    clinicalReference: 'Stockley Drug Interactions & FDA Drug Safety Communications',
    difficulty: 'Sedang'
  },
  {
    id: 'q-953',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Dalam resep racikan puyer untuk anak tertulis: "R/ Luminal 15 mg, Paracetamol 100 mg, m.f. pulv. d.t.d. No. XV". Tersedia di apotek tablet Luminal berkekuatan 30 mg per tablet.',
    question: 'Berapakah jumlah tablet Luminal 30 mg yang harus diambil untuk meracik resep tersebut?',
    options: [
      { key: 'A', text: '7,5 tablet' },
      { key: 'B', text: '15 tablet' },
      { key: 'C', text: '5 tablet' },
      { key: 'D', text: '10 tablet' },
      { key: 'E', text: '8 tablet' }
    ],
    correctAnswer: 'A',
    explanation: 'Resep mencantumkan "d.t.d." (da tales doses = berikan sebanyak dosis tersebut untuk tiap bungkus). Total kebutuhan luminal = 15 mg x 15 bungkus = 225 mg. Karena kekuatan tablet yang tersedia adalah 30 mg, maka jumlah tablet = 225 mg / 30 mg = 7,5 tablet.',
    clinicalReference: 'Ilmu Resep Teori (Syamsuni) & Hitungan Dosis Farmasi',
    difficulty: 'Mudah'
  }
];
