import { ExamQuestion } from '../competencyExamData';

/**
 * BANK SOAL CBT UKTVF / APDFI (UJI KOMPETENSI TENAGA VOKASI FARMASI D3)
 * BAGIAN 3: AUTENTIK TANGKAPAN LAYAR UJIAN.APDFI.OR.ID
 * Sesuai Standar Kurikulum & Blueprint Nasional APDFI (Asosiasi Pendidikan Diploma Farmasi Indonesia)
 * Meliputi: Pelayanan Resep & Iterasi, Alkes & Gudang, QC & Formulasi, DOWA, dan Bahan Alam FHI
 */
export const CBT_VOKASI_PART_3: ExamQuestion[] = [
  {
    id: 'q-774',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Sejumlah tablet salut ekstrak sambiloto dievaluasi dengan cara diletakkan ke dalam tabung keranjang dan dimasukkan ke dalam bejana yang telah diisi air bersuhu 37 ± 2 °C. Tinggi air dalam alat disintegrant tester tidak kurang dari 15 cm sehingga tabung dapat naik turun dengan jarak 7,5 cm. Tablet dinyatakan hancur apabila tidak ada bagian tablet yang tertinggal di atas kasa kawat pada waktu tertentu sesuai Farmakope Indonesia.',
    question: 'Berapa menit waktu maksimal yang dipersyaratkan untuk evaluasi sediaan tablet salut tersebut?',
    options: [
      { key: 'A', text: '10 menit' },
      { key: 'B', text: '15 menit' },
      { key: 'C', text: '30 menit' },
      { key: 'D', text: '45 menit' },
      { key: 'E', text: '60 menit' }
    ],
    correctAnswer: 'C',
    explanation: 'Menurut Farmakope Indonesia (FI) dan standar evaluasi mutu fisik tablet, waktu hancur untuk tablet salut selaput (film coated tablet) atau salut gula (sugar coated) umumnya tidak lebih dari 30 menit (kecuali dinyatakan lain dalam monografi hingga 60 menit untuk salut gula tebal). Sedangkan tablet tidak bersalut (uncoated) memiliki batas waktu hancur maksimal 15 menit.',
    clinicalReference: 'Farmakope Indonesia Edisi VI (Uji Waktu Hancur Tablet <1251>) & Blueprint APDFI QC Farmasi',
    difficulty: 'Sedang'
  },
  {
    id: 'q-775',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Pasien datang ke apotek membawa resep dokter spesialis jiwa. TTK melakukan skrining resep dan perhitungan harga. Setelah dihitung harga obat dari resep yang dibawa, ternyata pasien hanya membeli setengah resep saja karena alasan keuangan dan sisanya akan diambil 2 hari kemudian. Resep asli tertulis:\nIter 2 kali\nR/ Sizoril 25 mg No XX\nS 2 dd 1 tab\nSetelah menyiapkan obat, tugas TTK apotek tersebut adalah membuat salinan resep (copy resep) yang baru.',
    question: 'Apakah tanda yang tepat dituliskan pada salinan resep baru tersebut?',
    options: [
      { key: 'A', text: 'det' },
      { key: 'B', text: 'did' },
      { key: 'C', text: 'det orig' },
      { key: 'D', text: 'det iter 1 kali' },
      { key: 'E', text: 'det iter 2 kali' }
    ],
    correctAnswer: 'B',
    explanation: 'Karena pasien baru menebus separuh (10 tablet dari 20 tablet resep asli), maka pada salinan resep ditulis tanda "did" (da in dimidio = berikan setengahnya). Jika resep asli ditebus penuh 20 tablet pertama kali pada resep yang ada tanda iter, barulah ditulis "det orig" (detur originale).',
    clinicalReference: 'Petunjuk Teknis Standar Pelayanan Kefarmasian di Apotek (Permenkes 73/2016) & Ketentuan Salinan Resep',
    difficulty: 'Sedang'
  },
  {
    id: 'q-776',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Pasien datang ke apotek mengeluh sesak saat bernafas. Pasien mengatakan bahwa ia memiliki riwayat asma kambuhan dan biasa mengonsumsi tablet salbutamol. TTK membantu apoteker untuk menyiapkan obat salbutamol sesuai dengan Keputusan Menteri Kesehatan No. 347/MenKes/SK/VII/1990 tentang Obat Wajib Apotek No. 1 (DOWA 1).',
    question: 'Berapakah jumlah maksimal tablet obat yang dapat diberikan kepada pasien tersebut tanpa resep dokter?',
    options: [
      { key: 'A', text: '5 tablet' },
      { key: 'B', text: '10 tablet' },
      { key: 'C', text: '15 tablet' },
      { key: 'D', text: '20 tablet' },
      { key: 'E', text: '25 tablet' }
    ],
    correctAnswer: 'D',
    explanation: 'Berdasarkan Kepmenkes No. 347/Menkes/SK/VII/1990 tentang Daftar Obat Wajib Apotek No. 1 (DOWA 1), Salbutamol sediaan oral dapat diserahkan tanpa resep dokter maksimal sebanyak 20 tablet atau 1 botol sirup, dengan catatan pasien telah pernah menggunakan obat tersebut atas resep dokter sebelumnya.',
    clinicalReference: 'Keputusan Menteri Kesehatan RI No. 347/Menkes/SK/VII/1990 tentang Obat Wajib Apotek No. 1',
    difficulty: 'Mudah'
  },
  {
    id: 'q-777',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Industri obat tradisional menggunakan rimpang lengkuas (Alpinia galanga) sebagai bahan baku sediaan jamu pegal linu. Bahan tersebut harus dipanen pada waktu tertentu untuk memenuhi persyaratan mutu, karena waktu panen sangat mempengaruhi kualitas dan kadar metabolit sekunder minyak atsiri dan flavonoid yang diharapkan.',
    question: 'Kapan waktu panen yang tepat untuk bahan baku rimpang tersebut?',
    options: [
      { key: 'A', text: 'Saat sore hari' },
      { key: 'B', text: 'Saat batang masih muda' },
      { key: 'C', text: 'Ketika pagi hari saat bunga mekar' },
      { key: 'D', text: 'Saat awal bentuk vegetatif' },
      { key: 'E', text: 'Saat bagian daun tanaman mulai menguning dan mengering' },
    ],
    correctAnswer: 'E',
    explanation: 'Pada tanaman rimpang (Rhizoma seperti lengkuas, temulawak, jahe, kunyit), waktu panen optimal dilakukan pada akhir masa vegetatif tanaman saat proses fotosintesis telah melambat dan cadangan makanan serta senyawa metabolit sekunder terakumulasi maksimal di dalam rimpang, ditandai dengan bagian daun dan batang di atas tanah mulai menguning dan mengering (senescence).',
    clinicalReference: 'Pedoman Budidaya dan Pasca Panen Tanaman Obat yang Baik (GACP) Kemenkes & Farmakope Herbal Indonesia',
    difficulty: 'Sedang'
  },
  {
    id: 'q-778',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Kegiatan yang terkait dengan penyimpanan obat atau bahan obat di gudang industri farmasi harus memastikan terpenuhinya kondisi penyimpanan yang dipersyaratkan. Salah satunya adalah dengan memberikan penandaan label pada status bahan/produk yang dipisahkan secara fisik di area khusus, sementara menunggu keputusan pelulusan atau penolakan dari Bagian Pemastian Mutu (QA/QC).',
    question: 'Apakah label status yang dimaksud dalam prosedur penyimpanan CPOB tersebut?',
    options: [
      { key: 'A', text: 'Label Ditarik' },
      { key: 'B', text: 'Label Ditolak (Merah)' },
      { key: 'C', text: 'Label Karantina (Kuning)' },
      { key: 'D', text: 'Label Diluluskan (Hijau)' },
      { key: 'E', text: 'Label Dikembalikan' }
    ],
    correctAnswer: 'C',
    explanation: 'Sesuai Pedoman CPOB (Cara Pembuatan Obat yang Baik), bahan awal atau produk ruahan yang baru diterima dan masih dalam proses pengujian laboratorium mutu diberi label "KARANTINA" (berwarna kuning). Setelah hasil uji laboratorium QC keluar dan disetujui, label diganti menjadi "DILULUSKAN" (hijau), atau "DITOLAK" (merah) jika tidak memenuhi spesifikasi.',
    clinicalReference: 'Pedoman Cara Pembuatan Obat yang Baik (CPOB) BPOM RI - Bab Pengawasan Mutu & Manajemen Bahan',
    difficulty: 'Mudah'
  },
  {
    id: 'q-779',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Pati, seng oksida (ZnO), kalsium karbonat, dan ekstrak daun sirih merupakan zat terdispersi yang dapat diformulasikan menjadi sediaan semisolida antiseptik topikal. Karakteristik serbuk bahan tersebut tidak larut dalam pembawa hidrokarbon, sehingga sediaan mengandung fraksi zat padat lebih dari 50% yang menyebabkan massa sediaan bersifat kaku dan kental sebagai hasil interaksi langsung antarpartikel padat.',
    question: 'Apakah jenis bentuk sediaan semisolida yang dimaksud?',
    options: [
      { key: 'A', text: 'Gel' },
      { key: 'B', text: 'Krim' },
      { key: 'C', text: 'Pasta' },
      { key: 'D', text: 'Salep' },
      { key: 'E', text: 'Suppositoria' }
    ],
    correctAnswer: 'C',
    explanation: 'Menurut Farmakope Indonesia Edisi VI, Pasta adalah sediaan semipadat yang mengandung satu atau lebih bahan obat yang ditujukan untuk pemakaian topikal, dengan konsentrasi bahan padat yang tinggi (umumnya 25% hingga > 50%), sehingga sediaannya lebih kaku, padat, dan memiliki daya lekat serta absorpsi cairan eksudat luka yang lebih baik dibanding salep biasa.',
    clinicalReference: 'Farmakope Indonesia Edisi VI (Monografi Sediaan Semipadat Topikal) & Ansel Bentuk Sediaan Farmasi',
    difficulty: 'Mudah'
  },
  {
    id: 'q-780',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'TTK yang bekerja di laboratorium farmasi akan menyimpan bahan kimia Kalsium Klorida (CaCl2). Berdasarkan pustaka Farmakope, zat ini memiliki sifat fisika sangat higroskopis (deliquescent) yang mudah menarik uap air dari udara sekitar hingga membentuk larutan pekat.',
    question: 'Dimanakah tempat penyimpanan yang paling tepat untuk bahan obat tersebut?',
    options: [
      { key: 'A', text: 'Desikator bertutup rapat' },
      { key: 'B', text: 'Rak terbuka' },
      { key: 'C', text: 'Lemari kaca biasa' },
      { key: 'D', text: 'Lemari asam' },
      { key: 'E', text: 'Lemari narkotika' }
    ],
    correctAnswer: 'A',
    explanation: 'Zat yang bersifat sangat higroskopis atau mencair bila terpapar kelembapan udara (deliquescent) seperti Kalsium Klorida murni harus disimpan di dalam desikator bertutup rapat yang berisi zat pengering (silica gel aktif atau kalsium oksida) untuk mencegah penyerapan uap air dari udara bebas.',
    clinicalReference: 'Farmakope Indonesia Edisi VI & Pedoman Keselamatan Kerja Laboratorium Kimia Farmasi',
    difficulty: 'Mudah'
  },
  {
    id: 'q-781',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Dalam pengujian parameter non-spesifik ekstrak bahan alam di laboratorium QC, TTK melakukan penentuan susut pengeringan sampel ekstrak. Pengukuran dilakukan dengan metode replikasi penimbangan (tiga kali ulangan / triplo) untuk mengeliminasi variasi acak kesalahan pengukuran.',
    question: 'Apakah parameter nilai statistik yang akan dihasilkan dari proses analisis replikasi tersebut?',
    options: [
      { key: 'A', text: 'Mean (rata-rata) dan Standar Deviasi (SD)' },
      { key: 'B', text: 'Mean dan varian' },
      { key: 'C', text: 'Mean tunggal' },
      { key: 'D', text: 'Standar deviasi tunggal' },
      { key: 'E', text: 'Median dan kuartil' }
    ],
    correctAnswer: 'A',
    explanation: 'Dalam analisis laboratorium farmasi, data hasil replikasi (ulangan triplo) dilaporkan sebagai nilai pemusatan data yaitu Rata-rata (Mean) beserta sebaran datanya yaitu Standar Deviasi (SD / simpangan baku) atau %RSD (% Relatif Standar Deviasi / Koefisien Variasi) untuk menggambarkan derajat presisi metode pengujian.',
    clinicalReference: 'Farmakope Herbal Indonesia Edisi II (Metode Analisis Ekstrak) & Validasi Metode Analisis ICH Q2',
    difficulty: 'Mudah'
  },
  {
    id: 'q-782',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Pasien dengan diagnosa hipertensi datang ke apotek membawa resep:\nR/ Captopril 25 mg tab XXX\nS 3 dd 1 tab\nDi apotek sediaan Captopril 25 mg sedang kosong, yang tersedia adalah Captopril 12,5 mg dan 50 mg. Setelah berkonsultasi dan disetujui oleh apoteker, TTK diberikan izin untuk menyiapkan sediaan Captopril 12,5 mg.',
    question: 'Berapa jumlah tablet Captopril 12,5 mg yang harus diserahkan kepada pasien?',
    options: [
      { key: 'A', text: '10 tablet' },
      { key: 'B', text: '15 tablet' },
      { key: 'C', text: '30 tablet' },
      { key: 'D', text: '60 tablet' },
      { key: 'E', text: '90 tablet' }
    ],
    correctAnswer: 'D',
    explanation: 'Dosis total yang dibutuhkan pada resep: 30 tablet x 25 mg = 750 mg Captopril. Karena menggunakan sediaan berkekuatan 12,5 mg per tablet, maka jumlah tablet yang harus diserahkan = 750 mg / 12,5 mg = 60 tablet. Aturan pakai pada etiket disesuaikan menjadi: Sehari 3 x 2 tablet.',
    clinicalReference: 'Perhitungan Farmasetik Dasar & Standar Pelayanan Resep Apotek Permenkes 73/2016',
    difficulty: 'Mudah'
  },
  {
    id: 'q-783',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Ruang bersalin di RSIA mengajukan permintaan desinfektan kepada TTK di gudang instalasi farmasi berupa alkohol 70% sebanyak 3 liter (3.000 mL). Namun, stok yang tersedia di gudang farmasi saat ini hanya ada alkohol berkadar 96% v/v.',
    question: 'Apakah tindakan profesional yang tepat dilakukan oleh TTK di gudang farmasi?',
    options: [
      { key: 'A', text: 'Meminta perawat melapor kepada Kepala Instalasi Farmasi' },
      { key: 'B', text: 'Menyerahkan alkohol 96% langsung tanpa pengenceran' },
      { key: 'C', text: 'Meminta kurir membeli alkohol 70% di rumah sakit terdekat' },
      { key: 'D', text: 'Menolak permintaan karena sediaan 70% sedang kosong' },
      { key: 'E', text: 'Melakukan pengenceran alkohol 96% menjadi alkohol 70% menggunakan aquadest sesuai kebutuhan 3 liter' }
    ],
    correctAnswer: 'E',
    explanation: 'Salah satu kompetensi teknis TTK di rumah sakit adalah melakukan pengenceran larutan desinfektan dan antiseptik non-steril. Menggunakan rumus pengenceran V1 x C1 = V2 x C2: V1 x 96% = 3.000 mL x 70% -> V1 = 2.187,5 mL alkohol 96% yang diencerkan dengan aquadest hingga volume akhir 3.000 mL (3 liter).',
    clinicalReference: 'Pedoman Penyiapan & Pengenceran Larutan Antiseptik Rumah Sakit & Farmakope Indonesia',
    difficulty: 'Mudah'
  },
  {
    id: 'q-784',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'TTK diminta oleh apoteker pengelola apotek untuk membantu menyusun laporan berkala obat golongan prekursor farmasi. Dalam menyusun laporan tersebut, data transaksi mutasi diambil dari catatan kartu stok obat.',
    question: 'Manakah kartu stok obat berikut yang harus diambil oleh TTK tersebut?',
    options: [
      { key: 'A', text: 'Codein' },
      { key: 'B', text: 'Tramadol' },
      { key: 'C', text: 'Alprazolam' },
      { key: 'D', text: 'Pseudoephedrine' },
      { key: 'E', text: 'Dekstrometorfan' }
    ],
    correctAnswer: 'D',
    explanation: 'Berdasarkan PP No. 44 Tahun 2010 dan Permenkes No. 3 Tahun 2015, Pseudoephedrine tergolong sebagai PREKURSOR FARMASI (bersama efedrin, norefedrin, ergometrin, ergotamin, kalium permanganat). Codein adalah Narkotika; Alprazolam adalah Psikotropika; sedangkan Tramadol dan Dekstrometorfan adalah Obat-Obat Tertentu (OOT).',
    clinicalReference: 'Peraturan Pemerintah No. 44 Tahun 2010 tentang Prekursor Farmasi & Permenkes No. 3 Tahun 2015',
    difficulty: 'Mudah'
  },
  {
    id: 'q-785',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Seorang TTK bekerja pada bagian R&D industri farmasi membuat sediaan gel Natrium Diklofenak menggunakan basis polimer hidrofilik Carbomer. Polimer gel kering tersebut mampu mengabsorpsi pelarut air ke dalam jaringannya sehingga terjadi peningkatan volume dan pembentukan struktur massa semipadat yang kental dan jernih.',
    question: 'Apakah nama peristiwa atau karakteristik fisik sediaan yang terjadi tersebut?',
    options: [
      { key: 'A', text: 'Reologi' },
      { key: 'B', text: 'Relaksasi gel' },
      { key: 'C', text: 'Flokulasi' },
      { key: 'D', text: 'Sineresis' },
      { key: 'E', text: 'Swelling (Penggembungan)' }
    ],
    correctAnswer: 'E',
    explanation: 'Swelling (penggembungan) adalah peristiwa di mana partikel polimer hidrokoloid gelling agent (seperti karbomer, CMC-Na, HPMC) mengabsorpsi cairan pelarut sehingga volume dan ukuran molekul polimer membesar membentuk gel. Sebaliknya, Sineresis adalah peristiwa keluarnya cairan dari gel akibat pengerutan matriks polimer saat didiamkan.',
    clinicalReference: 'Martin Farmasi Fisika dan Ilmu Farmasetika (Sistem Dispersi Koloid & Gel)',
    difficulty: 'Sedang'
  },
  {
    id: 'q-786',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Industri obat tradisional mengembangkan formulasi tablet kunyah (chewable tablet) dari ekstrak benalu teh (Scurrula atropurpurea). Formulator membutuhkan bahan pengisi serbuk putih dengan kompresibilitas baik, berasa manis dan memberikan sensasi dingin di mulut, rendah kalori, non-kariogenik (tidak merusak gigi), serta efektif menutupi rasa pahit ekstrak.',
    question: 'Apakah bahan pengisi (diluent) yang paling tepat digunakan?',
    options: [
      { key: 'A', text: 'Dekstrosa' },
      { key: 'B', text: 'Glukosa' },
      { key: 'C', text: 'Laktosa' },
      { key: 'D', text: 'Manitol' },
      { key: 'E', text: 'Sorbitol' }
    ],
    correctAnswer: 'D',
    explanation: 'Manitol merupakan bahan pengisi pilihan utama (gold standard) untuk sediaan tablet kunyah (chewable tablet). Manitol memiliki panas pelarutan negatif (negative heat of solution) yang memberikan rasa dingin menyegarkan di mulut (cooling sensation), rasa manis menyenangkan (~70% manis sukrosa), tidak memicu karies gigi, dan higroskopisitas sangat rendah.',
    clinicalReference: 'Handbook of Pharmaceutical Excipients (Monografi Mannitol) & Formulasi Sediaan Padat',
    difficulty: 'Mudah'
  },
  {
    id: 'q-787',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Seorang TTK di laboratorium mikrobiologi QC melakukan pengujian angka cemaran kapang/khamir (AKK) pada ekstrak herbal. Dari cawan petri pengenceran 10^-1 didapatkan jumlah koloni rata-rata sebanyak 1,6 koloni.',
    question: 'Berapakah jumlah angka kapang/khamir (koloni/g) sampel ekstrak tersebut?',
    options: [
      { key: 'A', text: '1,5 x 10^1 koloni/g' },
      { key: 'B', text: '1,6 x 10^1 koloni/g' },
      { key: 'C', text: '1,7 x 10^1 koloni/g' },
      { key: 'D', text: '1,5 x 10^2 koloni/g' },
      { key: 'E', text: '1,6 x 10^2 koloni/g' }
    ],
    correctAnswer: 'B',
    explanation: 'Perhitungan angka cemaran mikroba (koloni/g): Jumlah Koloni x (1 / Faktor Pengenceran) = 1,6 x (1 / 10^-1) = 1,6 x 10^1 koloni/g (atau 16 koloni/g).',
    clinicalReference: 'Farmakope Herbal Indonesia Edisi II (Metode Uji Angka Kapang Khamir AKK)',
    difficulty: 'Mudah'
  },
  {
    id: 'q-788',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Seorang TTK akan meracik sediaan gel antiseptik sebanyak 50 mL dengan formula:\nEkstrak herbal 1 g\nCarbopol 940 0,5%\nPropilenglikol 4%\nTrietanolamin 1%\nMetilparaben 0,2%\nPropilparaben 0,02%\nAquadest ad 100%\nDalam formula tersebut, bahan manakah yang berfungsi sebagai humektan dan berapa gram kebutuhannya?',
    question: 'Berapa gram kebutuhan bahan humektan yang diperlukan untuk pembuatan 50 mL sediaan gel tersebut?',
    options: [
      { key: 'A', text: '2 gram (Propilenglikol)' },
      { key: 'B', text: '4 gram (Propilenglikol)' },
      { key: 'C', text: '6 gram (Propilenglikol)' },
      { key: 'D', text: '0,5 gram (Carbopol)' },
      { key: 'E', text: '1 gram (Trietanolamin)' }
    ],
    correctAnswer: 'A',
    explanation: 'Bahan yang berfungsi sebagai humektan (penjaga kelembapan agar gel tidak cepat kering) adalah Propilenglikol dengan konsentrasi 4% b/v. Untuk volume pembuatan 50 mL: Kebutuhan = 4% x 50 mL = (4 / 100) x 50 = 2 gram.',
    clinicalReference: 'Handbook of Pharmaceutical Excipients (Propylene Glycol as Humectant) & Perhitungan Farmasetika',
    difficulty: 'Mudah'
  },
  {
    id: 'q-789',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Pasien datang ke apotek membawa resep dokter:\nR/ Azithromycin 500 mg tab No V\nS 1 dd 1 tab\nR/ Paracetamol 500 mg tab No X\nS 3 dd 1 tab\nR/ Vitamin C tab No XXX\nS 2 dd 1 tab\nSaat skrining harga, pasien mengaku uangnya tidak mencukupi dan memutuskan hanya ingin menebus obat golongan antibiotik saja.',
    question: 'Berapa jumlah tablet obat yang diserahkan TTK kepada pasien tersebut?',
    options: [
      { key: 'A', text: '5 tablet' },
      { key: 'B', text: '6 tablet' },
      { key: 'C', text: '10 tablet' },
      { key: 'D', text: '20 tablet' },
      { key: 'E', text: '30 tablet' }
    ],
    correctAnswer: 'A',
    explanation: 'Obat golongan antibiotik pada resep tersebut adalah Azithromycin 500 mg tab No V (angka romawi V = 5). Paracetamol adalah analgetik antipiretik, sedangkan Vitamin C adalah suplemen. Maka obat yang diserahkan adalah 5 tablet Azithromycin dengan edukasi wajib dihabiskan.',
    clinicalReference: 'Pedoman Pelayanan Farmasi Komunitas & Terapi Antimikroba Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-790',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Bagian Quality Control (QC) di industri farmasi akan melakukan uji sterilitas sediaan steril injeksi omeprazol vial. Pengujian sterilitas dilakukan menggunakan metode inokulasi langsung untuk mendeteksi potensi adanya kontaminasi fungi (kapang dan ragi/khamir) serta bakteri aerob.',
    question: 'Apakah media pembiakan yang dipersyaratkan Farmakope Indonesia untuk uji kontaminasi fungi tersebut?',
    options: [
      { key: 'A', text: 'Nutrient Broth (NB)' },
      { key: 'B', text: 'Fluid Thioglycollate Medium (FTM)' },
      { key: 'C', text: 'Soybean Dextrose Broth' },
      { key: 'D', text: 'Soybean-Casein Digest Medium (SCDM / TSB)' },
      { key: 'E', text: 'Potato Dextrose Digest Medium' }
    ],
    correctAnswer: 'D',
    explanation: 'Menurut Farmakope Indonesia Edisi VI (Uji Sterilitas <71>), media baku yang digunakan adalah: 1) Fluid Thioglycollate Medium (FTM) diinkubasi pada 30-35 °C utamanya untuk bakteri anaerob dan aerob; 2) Soybean-Casein Digest Medium (SCDM / Tryptic Soy Broth) diinkubasi pada 20-25 °C untuk kapang/fungi dan bakteri aerob.',
    clinicalReference: 'Farmakope Indonesia Edisi VI (Bab Uji Sterilitas <71>) & Pedoman CPOB Sediaan Steril',
    difficulty: 'Sedang'
  },
  {
    id: 'q-791',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Salah satu parameter spesifikasi non-spesifik ekstrak herbal adalah residu pestisida (golongan organoklorin, organofosfat, dan karbamat) yang harus diuji untuk menjamin keamanan bahan baku fitofarmaka dari paparan racun pertanian.',
    question: 'Apakah instrumen metode analisis baku yang dipersyaratkan Farmakope Herbal Indonesia untuk penentuan residu pestisida tersebut?',
    options: [
      { key: 'A', text: 'Spektrofotometri Serapan Atom (SSA)' },
      { key: 'B', text: 'Kromatografi Lapis Tipis (KLT) Preparatif' },
      { key: 'C', text: 'Kromatografi Gas (Gas Chromatography / GC)' },
      { key: 'D', text: 'Potensiometri Elektrokimia' },
      { key: 'E', text: 'Analisis Termal Gravimetri' }
    ],
    correctAnswer: 'C',
    explanation: 'Menurut Farmakope Herbal Indonesia (FHI) dan WHO Guidelines on Good Agricultural and Collection Practices, analisis residu pestisida (organoklorin, organofosfat, piretroid) dilakukan menggunakan metode Kromatografi Gas (GC) yang dilengkapi detektor penangkap elektron (ECD), detektor fotometri nyala (FPD), atau GC-MS.',
    clinicalReference: 'Farmakope Herbal Indonesia Edisi II (Pengujian Residu Pestisida) & Standar Mutu Ekstrak BPOM',
    difficulty: 'Sedang'
  },
  {
    id: 'q-792',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'TTK di bagian produksi industri farmasi diminta menyiapkan formula suppositoria Natrium Diklofenak dengan karakteristik pelepasan menggunakan basis suppositoria larut air (water-soluble base). Basis ini tidak meleleh pada suhu tubuh melainkan melarut perlahan di dalam cairan mukosa rektum.',
    question: 'Apakah jenis basis yang digunakan dalam sediaan suppositoria tersebut?',
    options: [
      { key: 'A', text: 'Gliseril monostearat' },
      { key: 'B', text: 'Polioksil 40 stearat' },
      { key: 'C', text: 'Adeps Solidus' },
      { key: 'D', text: 'Oleum Cacao' },
      { key: 'E', text: 'Polietilenglikol (PEG / Makrogol)' }
    ],
    correctAnswer: 'E',
    explanation: 'Polietilenglikol (PEG / Macrogol) merupakan basis suppositoria sintetis yang larut air (water-soluble/water-miscible base). Keunggulannya tidak meleleh pada suhu tubuh melainkan larut perlahan dalam sekret rektal, titik lebur tinggi sehingga tidak memerlukan penyimpanan kulkas ketat, dan tidak mudah tengik dibanding Oleum Cacao (basis lemak).',
    clinicalReference: 'Farmakope Indonesia Edisi VI (Monografi Suppositoria) & Lachman Teori dan Praktik Farmasi Industri',
    difficulty: 'Mudah'
  },
  {
    id: 'q-793',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'TTK yang bertugas di gudang farmasi rumah sakit memeriksa kiriman obat kapsul antibiotik. Pada saat penerimaan barang, ditemukan rembesan cairan pada karton luar dan kondisi ruang penyimpanan lembap. TTK melakukan pemeriksaan fisik untuk memastikan apakah terjadi kerusakan pada cangkang kapsul gelatin.',
    question: 'Apakah ciri fisik yang mengindikasikan terjadinya kerusakan pada kapsul tersebut?',
    options: [
      { key: 'A', text: 'Box kapsul kering dan bersih' },
      { key: 'B', text: 'Cangkang kapsul mengkilap dan keras' },
      { key: 'C', text: 'Kapsul dalam kondisi padat dan tidak lengket' },
      { key: 'D', text: 'Kapsul dalam blister lembek saat ditekan dan saling menempel' },
      { key: 'E', text: 'Serbuk di dalam kapsul tidak berubah warna' }
    ],
    correctAnswer: 'D',
    explanation: 'Cangkang kapsul terbuat dari gelatin yang bersifat higroskopis. Jika terpapar kelembapan tinggi atau rembesan cairan, cangkang akan menyerap air sehingga menjadi lembek/lunak saat ditekan, lengket satu sama lain, berubah bentuk, dan kehilangan integritas perlindungannya.',
    clinicalReference: 'Petunjuk Teknis CDOB (Cara Distribusi Obat yang Baik) & Standar Penyimpanan Obat Kemenkes',
    difficulty: 'Mudah'
  },
  {
    id: 'q-794',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'TTK di industri farmasi bersama Apoteker memproduksi sediaan Ibuprofen suspensi/sirup oral anak. TTK diminta memberikan saran terkait pemilihan kemasan primer kaca yang tepat untuk melindungi sediaan dari cahaya dan interaksi kimia selama masa simpan.',
    question: 'Apakah tipe wadah gelas yang dipersyaratkan Farmakope Indonesia untuk sediaan cair oral non-parenteral tersebut?',
    options: [
      { key: 'A', text: 'Gelas Tipe I (Borosilikat)' },
      { key: 'B', text: 'Gelas Tipe II (Soda Lime terolah sulfur)' },
      { key: 'C', text: 'Gelas Tipe III (Soda Lime biasa)' },
      { key: 'D', text: 'Gelas Tipe NP (Gelas kaca non-dinding)' },
      { key: 'E', text: 'Gelas Kuarsa silika murni' }
    ],
    correctAnswer: 'C',
    explanation: 'Berdasarkan Farmakope Indonesia, wadah Gelas Tipe III (soda-lime glass) adalah wadah kaca dengan resistensi hidrolitik sedang yang dirancang khusus untuk sediaan non-parenteral (seperti sirup oral, eliksir, suspensi). Gelas Tipe I untuk parenteral/injeksi pH sensitif, sedangkan Gelas Tipe II untuk sediaan parenteral dapar asam.',
    clinicalReference: 'Farmakope Indonesia Edisi VI (Uji Wadah Kaca <1271>) & CPOB Bahan Pengemas',
    difficulty: 'Sedang'
  },
  {
    id: 'q-795',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'TTK di apotek menerima salinan resep:\nIter 1x\nR/ Tamofen 20 mg No XXX\nS. sdd. I\n-det-\n----\nIter 1x\nR/ Theragran M No XXX\nS. sdd. I\n-det XX-\nPasien bermaksud menebus sisa obat ke-2 (Theragran M).',
    question: 'Berapa jumlah tablet obat ke-2 (Theragran M) yang masih dapat diambil oleh pasien?',
    options: [
      { key: 'A', text: '10 tablet' },
      { key: 'B', text: '20 tablet' },
      { key: 'C', text: '30 tablet' },
      { key: 'D', text: '40 tablet' },
      { key: 'E', text: '60 tablet' }
    ],
    correctAnswer: 'D',
    explanation: 'Pada resep tertulis: "Iter 1x R/ Theragran M No XXX", artinya pasien berhak memperoleh 1x resep asli (30 tab) + 1x pengulangan/iterasi (30 tab) = total 60 tablet. Tanda "-det XX-" menunjukkan bahwa pasien baru mengambil 20 tablet. Maka sisa obat yang masih dapat diambil = 60 - 20 = 40 tablet.',
    clinicalReference: 'Ketentuan Penulisan & Pembacaan Salinan Resep (Kepmenkes & Farmakope Indonesia)',
    difficulty: 'Sedang'
  },
  {
    id: 'q-796',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Pasien datang ke apotek membawa salinan resep:\nIter 1x\nR/ Asam Folat 1 mg No XXX\nS 1 dd 1\ndet X\nPasien ingin menebus seluruh sisa obat asam folat yang menjadi haknya.',
    question: 'Berapa jumlah sisa obat asam folat yang dapat diambil oleh pasien?',
    options: [
      { key: 'A', text: '10 tablet' },
      { key: 'B', text: '20 tablet' },
      { key: 'C', text: '30 tablet' },
      { key: 'D', text: '50 tablet' },
      { key: 'E', text: '60 tablet' }
    ],
    correctAnswer: 'D',
    explanation: 'Dengan tanda Iter 1x untuk R/ No XXX (30 tab), total obat yang boleh diambil adalah 30 + 30 = 60 tablet. Tanda "det X" menunjukkan obat yang sudah diambil baru 10 tablet. Sisa obat yang dapat ditebus = 60 - 10 = 50 tablet.',
    clinicalReference: 'Prinsip Dispensing & Administrasi Resep Apotek Komunitas',
    difficulty: 'Mudah'
  },
  {
    id: 'q-797',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'TTK di apotek menerima kiriman barang dari Pedagang Besar Farmasi (PBF):\n1) Paracetamol Tablet (5 box)\n2) Amoxicillin Tablet (2 box)\n3) OBH Sirup (5 botol)\n4) Thermometer digital (10 buah)\nSebelum menandatangani faktur dan mencatat mutasi ke kartu stok, petugas apotek harus melakukan verifikasi kebenaran jenis dan jumlah barang.',
    question: 'Dokumen apakah yang menjadi acuan utama TTK dalam mencocokkan kiriman barang tersebut?',
    options: [
      { key: 'A', text: 'Buku kartu stok' },
      { key: 'B', text: 'Buku catatan defekta' },
      { key: 'C', text: 'Surat Pesanan (SP) apotek yang bersangkutan' },
      { key: 'D', text: 'Buku rekapitulasi penjualan' },
      { key: 'E', text: 'Buku kas pembelian' }
    ],
    correctAnswer: 'C',
    explanation: 'Saat penerimaan barang dari PBF, dokumen pembanding utama yang dicocokkan dengan faktur dan fisik barang adalah Surat Pesanan (SP) asli milik apotek untuk memastikan tidak ada kesalahan nama barang, kekuatan sediaan, jumlah kemasan, maupun harga diskon yang disepakati.',
    clinicalReference: 'Petunjuk Teknis CDOB Badan POM & Permenkes No. 73 Tahun 2016 (Pengelolaan Sediaan Farmasi)',
    difficulty: 'Mudah'
  },
  {
    id: 'q-798',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Kandungan senyawa aktif antioksidan pada ekstrak daun kelor (Moringa oleifera) dianalisis menggunakan metode Kromatografi Lapis Tipis (KLT). Ekstrak dan 5 larutan baku pembanding ditotolkan pada plat silika gel 60 F254. Setelah elusi, kromatogram menunjukkan bercak ekstrak daun kelor memiliki jarak migrasi dan nilai Rf yang identik horizontal dengan baku pembanding C (Antosianin).',
    question: 'Apakah golongan senyawa aktif yang teridentifikasi dalam ekstrak daun kelor tersebut?',
    options: [
      { key: 'A', text: 'Beta-Karotena' },
      { key: 'B', text: 'Antosianin' },
      { key: 'C', text: 'Xantofil' },
      { key: 'D', text: 'Resin' },
      { key: 'E', text: 'Lesitin' }
    ],
    correctAnswer: 'B',
    explanation: 'Pada analisis KLT kualitatif, identifikasi suatu senyawa didasarkan pada kesamaan nilai Rf (Retention Factor) dan warna bercak antara sampel uji dengan senyawa baku pembanding yang dielusi bersamaan pada plat yang sama.',
    clinicalReference: 'Farmakope Herbal Indonesia Edisi II (Metode Kromatografi Lapis Tipis <211>)',
    difficulty: 'Mudah'
  },
  {
    id: 'q-799',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien wanita berusia 28 tahun yang sedang hamil trimester kedua datang ke apotek. Pasien memiliki riwayat hipertensi kronis. Apoteker mengingatkan TTK agar berhati-hati karena antihipertensi golongan ACE-Inhibitor mutlak dikontraindikasikan (teratogenik fetopati ginjal janin).',
    question: 'Manakah obat antihipertensi berikut yang tergolong dalam golongan ACE-Inhibitor tersebut?',
    options: [
      { key: 'A', text: 'Losartan' },
      { key: 'B', text: 'Captopril' },
      { key: 'C', text: 'Amlodipin' },
      { key: 'D', text: 'Propranolol' },
      { key: 'E', text: 'Metildopa' }
    ],
    correctAnswer: 'B',
    explanation: 'Captopril adalah antihipertensi golongan ACE-Inhibitor (diakhiri -pril) yang dikontraindikasikan pada kehamilan karena risiko gagal ginjal janin, oligohidramnion, dan kematian perinatal. Losartan adalah ARB; Amlodipin adalah CCB; Propranolol adalah Beta Blocker; sedangkan Metildopa adalah obat pilihan aman pada kehamilan.',
    clinicalReference: 'Buku Panduan Tata Laksana Hipertensi Perki & PNPK Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-800',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'TTK di industri farmasi diminta menyiapkan bahan eksipien untuk pembuatan sediaan salep antibiotik kombinasi basitrasin dan polimiksin B sulfat dengan basis berlemak. Untuk mencegah terjadinya ketengikan oksidatif pada basis minyak mineral/lemak, formula ditambahkan bahan Butylated Hydroxyanisole (BHA).',
    question: 'Apakah fungsi utama dari bahan Butylated Hydroxyanisole (BHA) tersebut?',
    options: [
      { key: 'A', text: 'Pewangi sediaan' },
      { key: 'B', text: 'Antioksidan fase minyak' },
      { key: 'C', text: 'Humektan' },
      { key: 'D', text: 'Basis salep' },
      { key: 'E', text: 'Kosolven pelarut' }
    ],
    correctAnswer: 'B',
    explanation: 'Butylated Hydroxyanisole (BHA) dan Butylated Hydroxytoluene (BHT) adalah antioksidan sintetik larut lemak yang berfungsi memutus rantai radikal bebas autooksidasi asam lemak tak jenuh, sehingga mencegah bau tengik dan degradasi kimia pada basis salep berlemak.',
    clinicalReference: 'Handbook of Pharmaceutical Excipients (Monografi BHA) & Formulasi Sediaan Semisolid',
    difficulty: 'Mudah'
  },
  {
    id: 'q-801',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'TTK di laboratorium pengujian mutu bahan alam melakukan penetapan kadar kuantitatif senyawa aktif. Ekstrak ditambahkan reagen aluminium klorida (AlCl3) 10% dan natrium asetat 1 M, diinkubasi selama 30 menit hingga membentuk kompleks khelat berwarna kuning stabil, lalu diukur absorbansinya pada panjang gelombang 415 nm terhadap baku Quercetin.',
    question: 'Apakah uji penentuan kadar senyawa metabolit yang dilaksanakan oleh TTK tersebut?',
    options: [
      { key: 'A', text: 'Flavonoid total' },
      { key: 'B', text: 'Tanin total' },
      { key: 'C', text: 'Alkaloid total' },
      { key: 'D', text: 'Steroid' },
      { key: 'E', text: 'Saponin' }
    ],
    correctAnswer: 'A',
    explanation: 'Metode kolorimetri aluminium klorida (AlCl3) dengan baku pembanding Kuersetin (Quercetin) merupakan metode baku Farmakope Herbal Indonesia untuk penetapan kadar Flavonoid Total. Ion Al3+ membentuk kompleks khelat stabil dengan gugus C-4 keto dan C-3 atau C-5 hidroksil dari flavonoid.',
    clinicalReference: 'Farmakope Herbal Indonesia Edisi II (Metode Penetapan Kadar Flavonoid Total)',
    difficulty: 'Sedang'
  },
  {
    id: 'q-802',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'TTK melakukan evaluasi fisik sediaan krim tipe minyak dalam air (M/A) dengan komposisi: Asam stearat 2,7 g, Cera alba 0,36 g, Vaselin album 1,44 g, Oleum kakao 0,9 g, Trietanolamin 0,27 g, Gliserin 2,7 g, pengawet dan aquadest ad 20 g. Hasil uji viskositas menunjukkan sediaan terlalu encer. TTK diminta meningkatkan kekentalan krim tersebut.',
    question: 'Bahan manakah yang perlu ditambah bobotnya untuk meningkatkan konsistensi kekentalan krim tersebut?',
    options: [
      { key: 'A', text: 'Asam stearat' },
      { key: 'B', text: 'Aquadest' },
      { key: 'C', text: 'Gliserin' },
      { key: 'D', text: 'Trietanolamin' },
      { key: 'E', text: 'Nipagin' }
    ],
    correctAnswer: 'A',
    explanation: 'Asam stearat merupakan komponen pembentuk struktur fase minyak utama pada vanishing cream yang bereaksi sebagian dengan trietanolamin membentuk sabun emulgator, sementara sisa asam stearat bebas berfungsi sebagai stiffening agent (zat pemadat/pengental krim). Menambah asam stearat akan menaikkan viskositas sediaan secara signifikan.',
    clinicalReference: 'Formulasi Krim Kosmetika & Semisolid Lachman Industri Farmasi',
    difficulty: 'Sedang'
  },
  {
    id: 'q-803',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Dalam evaluasi fisik tablet parasetamol 500 mg, TTK mengambil 20 tablet, membersihkan debunya, lalu menimbangnya (W1 = 12,50 g). Tablet dimasukkan ke dalam alat friabilator roche yang diputar dengan kecepatan 25 rpm selama 4 menit (100 putaran). Setelah selesai, tablet dibersihkan dari serpihan debu dan ditimbang kembali (W2 = 12,42 g).',
    question: 'Berapakah persentase kerapuhan (keregasan/friabilitas) tablet tersebut dan apakah memenuhi syarat Farmakope?',
    options: [
      { key: 'A', text: '0,64% (Memenuhi syarat, < 1,0%)' },
      { key: 'B', text: '0,80% (Memenuhi syarat, < 1,0%)' },
      { key: 'C', text: '1,20% (Tidak memenuhi syarat)' },
      { key: 'D', text: '1,50% (Tidak memenuhi syarat)' },
      { key: 'E', text: '2,10% (Tidak memenuhi syarat)' }
    ],
    correctAnswer: 'A',
    explanation: 'Rumus Kerapuhan (Friabilitas) = ((W1 - W2) / W1) x 100% = ((12,50 - 12,42) / 12,50) x 100% = (0,08 / 12,50) x 100% = 0,64%. Kriteria keberterimaan menurut Farmakope Indonesia adalah kerapuhan tablet tidak boleh lebih dari 1,0% (< 1,0%). Maka sediaan memenuhi syarat.',
    clinicalReference: 'Farmakope Indonesia Edisi VI (Uji Kerapuhan Tablet <1261>)',
    difficulty: 'Sedang'
  },
  {
    id: 'q-804',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Uji sifat alir serbuk granul amoksisilin dilakukan menggunakan metode corong alir. Dari hasil pengukuran diperoleh tinggi kerucut tumpukan serbuk (h) = 3 cm dan jari-jari lingkaran tumpukan (r) = 5,2 cm. Diketahui rumus tan alfa = h / r, menghasilkan sudut diam sebesar 30 derajat.',
    question: 'Bagaimanakah kategori sifat alir serbuk granul tersebut?',
    options: [
      { key: 'A', text: 'Sangat baik' },
      { key: 'B', text: 'Baik' },
      { key: 'C', text: 'Cukup' },
      { key: 'D', text: 'Buruk' },
      { key: 'E', text: 'Sangat buruk' }
    ],
    correctAnswer: 'A',
    explanation: 'Menurut standar Farmakope dan USP untuk sudut diam (angle of repose): 25° - 30° = Sangat Baik (Excellent); 31° - 35° = Baik (Good); 36° - 40° = Cukup (Fair); 41° - 45° = Buruk (Passable); > 45° = Sangat Buruk (Poor). Karena sudut diamnya 30°, sifat alirnya tergolong Sangat Baik.',
    clinicalReference: 'Farmakope Indonesia Edisi VI (Karakterisasi Sifat Alir Serbuk <1174>)',
    difficulty: 'Sedang'
  },
  {
    id: 'q-805',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'TTK melakukan evaluasi kompresibilitas serbuk obat menggunakan alat Tapped Density Tester. Diperoleh kerapatan curah sebelum pemampatan (bulk density / Po) = 0,45 g/mL, dan kerapatan mampat setelah 500 ketukan (tapped density / Pt) = 0,55 g/mL.',
    question: 'Berapakah nilai Indeks Kompresibilitas Carr (% Carr\'s Index) dari serbuk tersebut?',
    options: [
      { key: 'A', text: '12,5%' },
      { key: 'B', text: '15,0%' },
      { key: 'C', text: '18,18%' },
      { key: 'D', text: '22,22%' },
      { key: 'E', text: '25,5%' }
    ],
    correctAnswer: 'C',
    explanation: 'Rumus Indeks Carr (%): ((Pt - Po) / Pt) x 100% = ((0,55 - 0,45) / 0,55) x 100% = (0,10 / 0,55) x 100% = 18,18%.',
    clinicalReference: 'Farmakope Indonesia Edisi VI (Uji Kerapatan Mampat Serbuk) & USP <1174>',
    difficulty: 'Sedang'
  },
  {
    id: 'q-806',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Dalam pengujian kadar air simplisia rimpang jahe yang mengandung minyak atsiri mudah menguap, TTK tidak boleh menggunakan metode gravimetri pengeringan oven biasa karena minyak atsiri akan ikut menguap dan menimbulkan galat positif semu.',
    question: 'Apakah metode penetapan kadar air yang dipersyaratkan Farmakope Herbal Indonesia untuk simplisia tersebut?',
    options: [
      { key: 'A', text: 'Destilasi azeotropik dengan pelarut Toluen' },
      { key: 'B', text: 'Titrasi Karl Fischer' },
      { key: 'C', text: 'Pemanasan oven 105 °C' },
      { key: 'D', text: 'Kromatografi Gas' },
      { key: 'E', text: 'Spektrometri IR' }
    ],
    correctAnswer: 'A',
    explanation: 'Untuk simplisia atau ekstrak yang mengandung minyak atsiri (senyawa volatil), Farmakope Herbal Indonesia menetapkan metode Destilasi Toluen (azeotropic distillation) menggunakan aparatus Dean-Stark. Toluen membentuk campuran azeotrop dengan air yang mendidih bersama, lalu air terpisah di tabung penampung berskala.',
    clinicalReference: 'Farmakope Herbal Indonesia Edisi II (Penetapan Kadar Air Metode Destilasi Toluen)',
    difficulty: 'Sedang'
  },
  {
    id: 'q-807',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Pasien membawa resep racikan salep kloramfenikol dan hidrokortison dengan basis vaselin album yang diracik di apotek pada tanggal 10 September 2026. Sediaan tidak mengandung air (non-aqueous topical formulation).',
    question: 'Berapakah batas waktu penggunaan maksimal (Beyond Use Date / BUD) untuk sediaan racikan semi-padat non-air tersebut?',
    options: [
      { key: 'A', text: '7 hari' },
      { key: 'B', text: '14 hari' },
      { key: 'C', text: '30 hari' },
      { key: 'D', text: '90 hari' },
      { key: 'E', text: '6 bulan' }
    ],
    correctAnswer: 'C',
    explanation: 'Berdasarkan pedoman USP <795> dan Kemenkes RI tentang Beyond Use Date racikan non-steril: Untuk sediaan topikal semisolid berbahan dasar air (krim/gel) BUD adalah maksimal 30 hari. Untuk racikan topikal tanpa air (salep basis hidrokarbon murni) dapat mencapai hingga 90 hari atau maksimal 30 hari jika ada campuran bahan aktif menurut konsensus dispensing apotek di Indonesia.',
    clinicalReference: 'Petunjuk Teknis Standar Pelayanan Kefarmasian Apotek Kemenkes RI (Bab BUD Racikan)',
    difficulty: 'Mudah'
  },
  {
    id: 'q-808',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Seorang TTK di instalasi farmasi rumah sakit bertugas menyiapkan sediaan obat kemoterapi sitostatika (vinkristin, doksorubisin) di ruang pencampuran aseptik (cleanroom). Ruangan tersebut harus dilengkapi dengan alat pengendali aliran udara khusus untuk melindungi petugas dari paparan aerosol karsinogenik.',
    question: 'Apakah nama alat isolator berventilasi bertekanan negatif yang digunakan untuk penanganan obat sitostatika tersebut?',
    options: [
      { key: 'A', text: 'Laminar Air Flow (LAF) Horizontal' },
      { key: 'B', text: 'Biological Safety Cabinet (BSC) Kelas II' },
      { key: 'C', text: 'Lemari Asam Kimia Biasa' },
      { key: 'D', text: 'Autoklaf Vertikal' },
      { key: 'E', text: 'Oven Sterilisasi Udara Panas' }
    ],
    correctAnswer: 'B',
    explanation: 'Penanganan dan pencampuran obat sitostatika wajib dilakukan di dalam Biological Safety Cabinet (BSC) Kelas II (tipe B2 atau A2 dengan buangan ke luar) yang memiliki aliran udara vertikal ke bawah dengan tekanan negatif, filter HEPA, dan exhaust keluar gedung untuk melindungi petugas, produk, dan lingkungan.',
    clinicalReference: 'Pedoman Penanganan Obat Sitostatika di Rumah Sakit Kemenkes RI & CPOB',
    difficulty: 'Sedang'
  },
  {
    id: 'q-809',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Pasien penderita angina pectoris stabil datang ke apotek menebus resep Isosorbid Dinitrat (ISDN) 5 mg tablet. TTK diminta apoteker untuk memberikan edukasi mengenai cara penggunaan obat yang tepat saat serangan nyeri dada mendadak muncul.',
    question: 'Bagaimanakah instruksi cara penggunaan tablet ISDN yang benar kepada pasien?',
    options: [
      { key: 'A', text: 'Ditelan utuh bersama 1 gelas air mineral' },
      { key: 'B', text: 'Dikunyah halus sebelum ditelan' },
      { key: 'C', text: 'Dilarutkan dalam segelas air hangat' },
      { key: 'D', text: 'Diselipkan di bawah lidah sampai larut sempurna tanpa ditelan' },
      { key: 'E', text: 'Dihisap perlahan seperti permen' }
    ],
    correctAnswer: 'D',
    explanation: 'Tablet ISDN untuk serangan angina digunakan secara sublingual (diletakkan di bawah lidah). Obat diabsorpsi sangat cepat melalui pembuluh darah mukosa sublingual langsung ke sirkulasi sistemik tanpa mengalami metabolisme lintas pertama di hati (first-pass metabolism), memberikan onset kerja cepat (1-3 menit).',
    clinicalReference: 'PIO & Konseling Obat Kardiovaskular Kemenkes RI & Petunjuk Klinis Angina Pectoris',
    difficulty: 'Mudah'
  },
  {
    id: 'q-810',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Ibu membawa balita berusia 18 bulan ke apotek menebus resep tetes telinga Otopain untuk mengobati radang liang telinga luar (otitis eksterna). TTK memberikan informasi cara meneteskan obat telinga pada balita.',
    question: 'Bagaimanakah teknik memposisikan daun telinga (pinna) balita saat penetesan obat?',
    options: [
      { key: 'A', text: 'Ditarik lurus ke atas dan ke belakang' },
      { key: 'B', text: 'Ditarik ke bawah dan ke belakang' },
      { key: 'C', text: 'Ditekan ke arah pipi depan' },
      { key: 'D', text: 'Ditarik ke depan menutup liang telinga' },
      { key: 'E', text: 'Dibiarkan posisi normal tanpa ditarik' }
    ],
    correctAnswer: 'B',
    explanation: 'Anatomi saluran telinga luar pada anak berusia di bawah 3 tahun mengarah ke atas dan belakang. Untuk meluruskan liang telinga agar tetesan obat masuk maksimal, daun telinga ditarik ke ARAH BAWAH DAN BELAKANG. Pada dewasa dan anak > 3 tahun, daun telinga ditarik ke ARAH ATAS DAN BELAKANG.',
    clinicalReference: 'Petunjuk Teknis Pemberian Informasi Obat (PIO) Sediaan Tetes Telinga Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-811',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Dokter meresepkan Ceftriaxone 1 g serbuk injeksi untuk pasien rawat inap. Perawat meminta cairan infus Ringer Laktat (RL) untuk melarutkan seftriakson tersebut. TTK di depo rawat inap menolak pemberian RL dan menyarankan diganti cairan infus Dextrose 5% atau NaCl 0,9%.',
    question: 'Apakah alasan ilmiah mendasar terjadinya inkompatibilitas fatal antara Ceftriaxone dan Ringer Laktat?',
    options: [
      { key: 'A', text: 'Terjadi pengendapan garam kalsium-seftriakson yang mematikan di paru dan ginjal' },
      { key: 'B', text: 'Ringer Laktat mereduksi potensi antibiotik seftriakson menjadi nol' },
      { key: 'C', text: 'Terjadi perubahan warna larutan menjadi gelap tanpa endapan' },
      { key: 'D', text: 'Ceftriaxone meningkatkan osmolaritas RL memicu flebitis' },
      { key: 'E', text: 'Ringer Laktat mempercepat ekskresi ginjal seftriakson' }
    ],
    correctAnswer: 'A',
    explanation: 'Ceftriaxone tidak boleh dicampur atau diberikan bersamaan dengan larutan yang mengandung kalsium (seperti Ringer Laktat, Ringer Fundin, Ca-glukonat) melalui jalur infus yang sama karena risiko tinggi terbentuknya presipitasi garam kalsium-seftriakson yang tidak larut, yang dapat menyebabkan emboli paru dan kerusakan ginjal fatal.',
    clinicalReference: 'FDA Safety Alert (Ceftriaxone and Calcium Interactions) & Pedoman Inkompatibilitas IV',
    difficulty: 'Sedang'
  },
  {
    id: 'q-812',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'TTK di instalasi farmasi dinas kesehatan mengelola penyimpanan vaksin program imunisasi nasional. Terdapat vaksin Polio Oral (OPV), Campak, BCG, Hepatitis B, dan DPT-HB-Hib.',
    question: 'Manakah vaksin berikut yang tergolong "freeze-sensitive" (peka beku) dan mutlak TIDAK BOLEH disimpan di freezer beku?',
    options: [
      { key: 'A', text: 'Vaksin Polio Oral (OPV)' },
      { key: 'B', text: 'Vaksin DPT-HB-Hib' },
      { key: 'C', text: 'Vaksin Campak' },
      { key: 'D', text: 'Vaksin BCG' },
      { key: 'E', text: 'Vaksin Yellow Fever' }
    ],
    correctAnswer: 'B',
    explanation: 'Vaksin yang mengandung ajuvan aluminium (seperti DPT-HB-Hib, Hepatitis B, Tetanus Toxoid, IPV) bersifat PEKA BEKU (freeze-sensitive). Pembekuan akan merusak struktur ikatan ajuvan aluminium dan menurunkan potensi antigen secara ireversibel. Vaksin ini harus disimpan pada suhu 2 °C s/d 8 °C di chiller, bukan di freezer.',
    clinicalReference: 'Permenkes No. 12 Tahun 2017 tentang Penyelenggaraan Imunisasi (Manajemen Cold Chain)',
    difficulty: 'Sedang'
  },
  {
    id: 'q-813',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Untuk mendeteksi apakah vaksin peka beku (seperti DPT atau Hepatitis B) pernah mengalami kerusakan akibat terpapar suhu di bawah titik beku selama pengiriman, TTK melakukan pengujian fisik sederhana di instalasi farmasi.',
    question: 'Apakah nama uji fisik validasi rantai dingin tersebut?',
    options: [
      { key: 'A', text: 'Uji Kocok (Shake Test)' },
      { key: 'B', text: 'Uji Sentrifugasi' },
      { key: 'C', text: 'Uji Viskositas' },
      { key: 'D', text: 'Uji Kejernihan Larutan' },
      { key: 'E', text: 'Uji pH meter' }
    ],
    correctAnswer: 'A',
    explanation: 'Uji Kocok (Shake Test) adalah metode baku WHO dan Kemenkes untuk menentukan apakah vaksin yang dicurigai membeku telah rusak. Vaksin dikocok bersamaan dengan vial kontrol beku, lalu diamati laju sedimentasinya. Jika suspensi mengendap lebih cepat dari kontrol dan cairan atasnya jernih, vaksin dinyatakan rusak dan harus dibuang.',
    clinicalReference: 'WHO Guidelines for the Shake Test on Adsorbed Vaccines & Permenkes Imunisasi',
    difficulty: 'Mudah'
  },
  {
    id: 'q-814',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Pasien membawa salinan resep dari apotek lain yang berisi obat sediaan narkotika Codein 10 mg sebanyak 10 tablet. Pasien bermaksud menebus sisa obat yang tertulis dalam salinan resep tersebut di apotek Anda.',
    question: 'Bagaimanakah ketentuan perundang-undangan farmasi dalam melayani salinan resep narkotika tersebut?',
    options: [
      { key: 'A', text: 'Dapat dilayani seluruhnya jika salinan resep bertanda tangan apoteker' },
      { key: 'B', text: 'Hanya dapat dilayani setengahnya saja' },
      { key: 'C', text: 'Dapat dilayani dengan meminta KTP dan nomor telepon pasien' },
      { key: 'D', text: 'Ditolak, karena salinan resep narkotika hanya boleh ditebus di apotek yang menyimpan resep aslinya' },
      { key: 'E', text: 'Dapat dilayani jika ditebus oleh dokter yang meresepkan' }
    ],
    correctAnswer: 'D',
    explanation: 'Berdasarkan Permenkes No. 9 Tahun 2015 dan UU Narkotika No. 35 Tahun 2009, apotek DILARANG melayani salinan resep yang mengandung Narkotika kecuali salinan resep tersebut dibuat oleh apotek itu sendiri yang masih menyimpan resep aslinya dan obatnya belum diambil seluruhnya.',
    clinicalReference: 'UU RI No. 35 Tahun 2009 tentang Narkotika & Permenkes No. 9 Tahun 2015',
    difficulty: 'Mudah'
  },
  {
    id: 'q-815',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'TTK membantu apoteker menyiapkan Surat Pesanan (SP) untuk pengadaan sediaan obat Fentanil injeksi dan Morfin tablet ke Pedagang Besar Farmasi (PBF) Kimia Farma.',
    question: 'Apakah format dokumen Surat Pesanan yang wajib digunakan dan berapa jenis sediaan zat aktif yang diperbolehkan dalam 1 lembar SP tersebut?',
    options: [
      { key: 'A', text: 'Surat Pesanan Narkotika (Formulir N-9), 1 lembar SP hanya untuk 1 jenis sediaan zat aktif' },
      { key: 'B', text: 'Surat Pesanan Narkotika, 1 lembar SP boleh memuat maksimal 3 jenis zat aktif' },
      { key: 'C', text: 'Surat Pesanan Psikotropika, boleh digabung dengan prekursor' },
      { key: 'D', text: 'Surat Pesanan Biasa rangkap 2' },
      { key: 'E', text: 'Surat Pesanan Prekursor rangkap 3' }
    ],
    correctAnswer: 'A',
    explanation: 'Surat Pesanan Narkotika menggunakan formulir resmi khusus (Model N-9) yang dibuat rangkap 4 (atau 5) dan sesuai peraturan 1 lembar SP Narkotika HANYA BOLEH digunakan untuk memesan 1 (satu) jenis sediaan zat aktif narkotika.',
    clinicalReference: 'Permenkes No. 3 Tahun 2015 tentang Peredaran, Penyimpanan, Pemusnahan, dan Pelaporan Narkotika',
    difficulty: 'Mudah'
  },
  {
    id: 'q-816',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Setiap bulannya, apotek wajib melaporkan pemasukan dan penggunaan sediaan Narkotika dan Psikotropika secara elektronik kepada Kementerian Kesehatan dan Badan POM melalui aplikasi SIPNAP.',
    question: 'Paling lambat tanggal berapakah pelaporan SIPNAP rutin tersebut wajib disampaikan setiap bulannya?',
    options: [
      { key: 'A', text: 'Tanggal 5 bulan berikutnya' },
      { key: 'B', text: 'Tanggal 10 bulan berikutnya' },
      { key: 'C', text: 'Tanggal 15 bulan berikutnya' },
      { key: 'D', text: 'Tanggal 20 bulan berikutnya' },
      { key: 'E', text: 'Tanggal 25 bulan berikutnya' }
    ],
    correctAnswer: 'B',
    explanation: 'Sesuai Permenkes No. 3 Tahun 2015, Apotek, Puskesmas, dan Instalasi Farmasi Rumah Sakit/Klinik wajib membuat dan mengirimkan laporan pemasukan dan penyerahan/penggunaan Narkotika dan Psikotropika setiap bulan secara elektronik (SIPNAP) paling lambat tanggal 10 bulan berikutnya.',
    clinicalReference: 'Permenkes No. 3 Tahun 2015 Pasal 45 (Pelaporan SIPNAP Narkotika & Psikotropika)',
    difficulty: 'Mudah'
  },
  {
    id: 'q-817',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien datang ke apotek mengeluhkan nyeri ulu hati dan mual. Pasien meminta obat Omeprazol kapsul tanpa resep dokter. Berdasarkan Keputusan Menteri Kesehatan No. 924/MENKES/PER/X/1993 tentang Daftar Obat Wajib Apotek No. 2 (DOWA 2), Omeprazol dapat diberikan oleh apoteker.',
    question: 'Berapakah jumlah maksimal penyerahan obat Omeprazol tersebut tanpa resep dokter?',
    options: [
      { key: 'A', text: '7 kapsul' },
      { key: 'B', text: '10 kapsul' },
      { key: 'C', text: '14 kapsul' },
      { key: 'D', text: '20 kapsul' },
      { key: 'E', text: '30 kapsul' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Permenkes No. 924/Menkes/Per/X/1993 tentang Obat Wajib Apotek No. 2 (DOWA 2), Omeprazol sediaan 20 mg maksimal penyerahan tanpa resep dokter adalah 7 tablet/kapsul untuk penggunaan 1 minggu.',
    clinicalReference: 'Permenkes No. 924/Menkes/Per/X/1993 tentang Daftar Obat Wajib Apotek No. 2',
    difficulty: 'Mudah'
  },
  {
    id: 'q-818',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Pasien dewasa mengeluhkan nyeri gigi berdenyut dan meminta obat antinyeri Ibuprofen berkekuatan 400 mg tanpa resep dokter. TTK mengecek batasan penyerahan resmi dalam ketentuan Daftar Obat Wajib Apotek No. 2 (DOWA 2).',
    question: 'Berapakah jumlah maksimal tablet Ibuprofen 400 mg yang boleh diserahkan?',
    options: [
      { key: 'A', text: '5 tablet' },
      { key: 'B', text: '10 tablet' },
      { key: 'C', text: '15 tablet' },
      { key: 'D', text: '20 tablet' },
      { key: 'E', text: '30 tablet' }
    ],
    correctAnswer: 'B',
    explanation: 'Berdasarkan DOWA 2: Ibuprofen tablet 400 mg diserahkan maksimal 10 tablet. Sedangkan Ibuprofen tablet 200 mg (DOWA 1) diserahkan maksimal 20 tablet.',
    clinicalReference: 'Keputusan Menteri Kesehatan tentang Obat Wajib Apotek No. 1 dan No. 2',
    difficulty: 'Mudah'
  },
  {
    id: 'q-819',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Pasien datang ke apotek ingin membeli obat maag Ranitidin 150 mg tablet tanpa membawa resep dokter untuk mengatasi keluhan tukak lambung kambuhannya.',
    question: 'Berdasarkan Kepmenkes DOWA No. 1, berapakah batas maksimal penyerahan Ranitidin 150 mg?',
    options: [
      { key: 'A', text: '5 tablet' },
      { key: 'B', text: '10 tablet' },
      { key: 'C', text: '14 tablet' },
      { key: 'D', text: '20 tablet' },
      { key: 'E', text: '30 tablet' }
    ],
    correctAnswer: 'B',
    explanation: 'Berdasarkan Kepmenkes No. 347/Menkes/SK/VII/1990 (DOWA 1), Ranitidin berkekuatan 150 mg maksimal penyerahan tanpa resep dokter adalah sebanyak 10 tablet.',
    clinicalReference: 'Daftar Obat Wajib Apotek No. 1 Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-820',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Seorang anak berusia 4 tahun dengan berat badan 16 kg menderita demam tinggi (suhu 38,8 °C). Dokter meresepkan sirup parasetamol (120 mg / 5 mL). Dosis lazim parasetamol anak adalah 10 s/d 15 mg/kgBB per kali pemberian.',
    question: 'Berapakah volume sirup parasetamol (mL) yang tepat diberikan untuk satu kali minum (dengan dosis 15 mg/kgBB)?',
    options: [
      { key: 'A', text: '2,5 mL (1/2 sendok takar)' },
      { key: 'B', text: '5,0 mL (1 sendok takar)' },
      { key: 'C', text: '7,5 mL (1 1/2 sendok takar)' },
      { key: 'D', text: '10,0 mL (2 sendok takar)' },
      { key: 'E', text: '12,5 mL (2 1/2 sendok takar)' }
    ],
    correctAnswer: 'D',
    explanation: 'Dosis anak per kali = 16 kg x 15 mg/kgBB = 240 mg. Kekuatan sirup = 120 mg / 5 mL (artinya 24 mg/mL). Volume yang dibutuhkan = 240 mg / 24 mg/mL = 10 mL (setara dengan 2 sendok takar sirup @ 5 mL).',
    clinicalReference: 'Pedoman Pelayanan Farmasi Pediatri & Formularium Nasional Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-821',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Dalam resep racikan puyer anak tertulis bahan aktif Luminal (Fenobarbital) sebesar 10 mg. Timbangan analitik manual di laboratorium apotek memiliki batas penimbangan terkecil (kepekaan minimum) sebesar 50 mg. Oleh karena itu, TTK harus melakukan pengenceran bertingkat (triturasi).',
    question: 'Jika ditimbang Luminal 50 mg dan Saccharum Lactis (SL) 450 mg (total massa 500 mg), berapa miligram campuran triturasi yang harus diambil untuk mendapatkan 10 mg zat aktif Luminal?',
    options: [
      { key: 'A', text: '50 mg' },
      { key: 'B', text: '75 mg' },
      { key: 'C', text: '100 mg' },
      { key: 'D', text: '150 mg' },
      { key: 'E', text: '200 mg' }
    ],
    correctAnswer: 'C',
    explanation: 'Rumus Pengenceran Serbuk: Massa yang diambil = (Dosis yang dibutuhkan / Massa zat murni ditimbang) x Total massa campuran = (10 mg / 50 mg) x 500 mg = 1/5 x 500 mg = 100 mg.',
    clinicalReference: 'Ilmu Meracik Obat (Teori dan Praktik Pengenceran Bahan Keras) Moh. Anief',
    difficulty: 'Sedang'
  },
  {
    id: 'q-822',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Untuk mendeteksi keberadaan golongan alkaloid pada ekstrak daun kecubung (Datura metel), TTK menambahkan beberapa tetes larutan kalium iodida dan iodium ke dalam filtrat asam ekstrak.',
    question: 'Apakah nama pereaksi penguji alkaloid tersebut dan bagaimanakah hasil reaksi positifnya?',
    options: [
      { key: 'A', text: 'Pereaksi Mayer, endapan putih kekuningan' },
      { key: 'B', text: 'Pereaksi Dragendorff, endapan jingga merah kecoklatan' },
      { key: 'C', text: 'Pereaksi Bouchardat, endapan coklat kehitaman' },
      { key: 'D', text: 'Pereaksi Wagner, endapan hijau terang' },
      { key: 'E', text: 'Pereaksi Molisch, cincin ungu' }
    ],
    correctAnswer: 'C',
    explanation: 'Pereaksi Bouchardat mengandung larutan iodium dalam kalium iodida yang memberikan endapan berwarna coklat kehitaman jika bereaksi positif dengan alkaloid. Pereaksi Mayer (kalium tetraiodomerkurat) memberikan endapan putih; Dragendorff (kalium bismut iodida) memberikan endapan jingga coklat; Wagner memberikan endapan coklat kemerahan.',
    clinicalReference: 'Farmakope Herbal Indonesia Edisi II (Metode Skrining Fitokimia Golongan Alkaloid)',
    difficulty: 'Sedang'
  },
  {
    id: 'q-823',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Dalam uji fitokimia simplisia daun bidara, serbuk simplisia dimasukkan tabung reaksi berisi 10 mL air panas, dikocok vertikal kuat selama 10 detik, lalu ditambahkan 1 tetes asam klorida 2 N (HCl 2 N).',
    question: 'Pengamatan terbentuknya busa madu setinggi minimal 1 cm yang stabil tidak hilang selama 15 menit menunjukkan adanya kandungan metabolit sekunder apa?',
    options: [
      { key: 'A', text: 'Minyak atsiri' },
      { key: 'B', text: 'Alkaloid' },
      { key: 'C', text: 'Flavonoid' },
      { key: 'D', text: 'Saponin' },
      { key: 'E', text: 'Tanin' }
    ],
    correctAnswer: 'D',
    explanation: 'Uji busa (Froth test) merupakan metode identifikasi khas senyawa Saponin. Saponin adalah glikosida amfifilik yang memiliki gugus hidrofilik dan lipofilik sehingga menurunkan tegangan permukaan air dan membentuk busa busa stabil (koloid busa) yang tahan terhadap penambahan asam encer selama minimal 15 menit.',
    clinicalReference: 'Farmakope Herbal Indonesia Edisi II & Harborne Metode Fitokimia',
    difficulty: 'Mudah'
  },
  {
    id: 'q-824',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'TTK membuat sediaan galenika daun kumis kucing (Orthosiphonis Staminei Folium) yang bertekstur lunak dan tidak keras dengan pelarut air mendidih menggunakan panci infusa pada suhu penangas air 90 °C selama 15 menit.',
    question: 'Apakah nama metode ekstraksi tradisional tersebut?',
    options: [
      { key: 'A', text: 'Maserasi' },
      { key: 'B', text: 'Perkolasi' },
      { key: 'C', text: 'Infusa' },
      { key: 'D', text: 'Dekokta' },
      { key: 'E', text: 'Sokletasi' }
    ],
    correctAnswer: 'C',
    explanation: 'Menurut Farmakope Indonesia, Infusa (infundasi) adalah sediaan cair yang dibuat dengan menyari simplisia nabati dengan air pada suhu 90 °C selama 15 menit terhitung sejak panci mencapai suhu 90 °C. Jika ekstraksi berlangsung selama 30 menit pada 90 °C, metode tersebut dinamakan Dekokta (lazim untuk bagian keras seperti kulit kayu/batang/akar).',
    clinicalReference: 'Farmakope Indonesia Edisi VI & Formularium Ramuan Obat Tradisional Indonesia Kemenkes',
    difficulty: 'Mudah'
  },
  {
    id: 'q-825',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Bagian pasca-panen simplisia industri obat tradisional sedang mengeringkan simplisia daun sirih merah (Piper crocatum). Agar minyak atsiri dan senyawa flavonoid tidak rusak atau menguap akibat panas berlebih dan radiasi sinar ultraviolet, simplisia tidak dijemur langsung di bawah terik matahari terbuka.',
    question: 'Bagaimanakah metode pengeringan yang tepat untuk simplisia daun tersebut?',
    options: [
      { key: 'A', text: 'Dijemur langsung di atas aspal jalanan' },
      { key: 'B', text: 'Dikeringkan menggunakan oven suhu 100 °C' },
      { key: 'C', text: 'Diangin-anginkan di tempat teduh atau dijemur di bawah naungan kain hitam / lemari pengering 40-50 °C' },
      { key: 'D', text: 'Dibakar cepat menggunakan api bebas' },
      { key: 'E', text: 'Dibiarkan basah di dalam karung tertutup rapat' }
    ],
    correctAnswer: 'C',
    explanation: 'Untuk simplisia daun (folium), herba, dan bunga yang mengandung senyawa termolabil serta minyak atsiri, pengeringan dilakukan dengan cara diangin-anginkan di tempat teduh, menggunakan lemari pengering dengan sirkulasi udara terkontrol pada suhu 40 °C - 50 °C, atau dijemur di bawah sinar matahari dengan ditutup kain hitam/net pelindung untuk menyaring radiasi UV langsung.',
    clinicalReference: 'Pedoman Pasca Panen Tanaman Obat BPOM & Pedoman Pembuatan Simplisia Balittro',
    difficulty: 'Mudah'
  },
  {
    id: 'q-826',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Dalam pembuatan sediaan suspensi oral antasida, TTK menambahkan bahan Sodium Carboxymethylcellulose (CMC-Na) dengan konsentrasi 1% b/v untuk memperlambat laju sedimentasi partikel terdispersi dan mempermudah suspensi terdispersi kembali saat botol dikocok.',
    question: 'Apakah fungsi farmasetik dari bahan CMC-Na dalam sediaan suspensi tersebut?',
    options: [
      { key: 'A', text: 'Suspending agent (zat pensuspensi peningkat viskositas)' },
      { key: 'B', text: 'Wetting agent (zat pembasah)' },
      { key: 'C', text: 'Flocculating agent' },
      { key: 'D', text: 'Pengawet antimikroba' },
      { key: 'E', text: 'Dapar pengatur pH' }
    ],
    correctAnswer: 'A',
    explanation: 'CMC-Na (Carboxymethylcellulose Sodium) adalah polimer hidrofilik yang larut dalam air membentuk larutan koloid kental yang berfungsi sebagai Suspending Agent (zat pensuspensi). Menurut Hukum Stokes, peningkatan viskositas medium dispersi akan menurunkan laju pengendapan partikel padat.',
    clinicalReference: 'Farmasi Fisika Sediaan Suspensi & Handbook of Pharmaceutical Excipients',
    difficulty: 'Mudah'
  },
  {
    id: 'q-827',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'TTK di apotek menerima resep salep mata steril Kloramfenikol 1%. Pada saat penyerahan kepada pasien, TTK memberikan informasi mengenai batas waktu simpan setelah kemasan tube salep mata pertama kali dibuka oleh pasien di rumah.',
    question: 'Berapakah batas waktu Beyond Use Date (BUD) maksimal sediaan salep/tetes mata steril tersebut setelah dibuka?',
    options: [
      { key: 'A', text: '7 hari' },
      { key: 'B', text: '14 hari' },
      { key: 'C', text: '28 hari (4 minggu)' },
      { key: 'D', text: '60 hari' },
      { key: 'E', text: 'Sampai tanggal kedaluwarsa pabrik tercapai' }
    ],
    correctAnswer: 'C',
    explanation: 'Sediaan tetes mata atau salep mata steril dalam kemasan multidose (yang mengandung pengawet seperti benzalkonium klorida) memiliki Beyond Use Date (BUD) maksimal 28 hari (4 minggu) setelah segel kemasan pertama kali dibuka, untuk menghindari kontaminasi mikroba patogen pada mata.',
    clinicalReference: 'Pedoman Beyond Use Date (BUD) Sediaan Farmasi Kemenkes RI & USP <797>',
    difficulty: 'Mudah'
  },
  {
    id: 'q-828',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Sebuah apotek baru didirikan dan TTK membantu apoteker menata lemari penyimpanan obat. Berdasarkan Permenkes No. 73 Tahun 2016, salah satu prinsip penyimpanan obat adalah penataan alfabetis dan rotasi tanggal kedaluwarsa.',
    question: 'Apakah sistem rotasi persediaan yang mendahulukan pengeluaran obat dengan tanggal kedaluwarsa paling dekat terlepas dari waktu masuk barang?',
    options: [
      { key: 'A', text: 'FIFO (First In First Out)' },
      { key: 'B', text: 'FEFO (First Expired First Out)' },
      { key: 'C', text: 'LIFO (Last In First Out)' },
      { key: 'D', text: 'HIFO (Highest In First Out)' },
      { key: 'E', text: 'Just In Time' }
    ],
    correctAnswer: 'B',
    explanation: 'FEFO (First Expired First Out) adalah sistem manajemen logistik di mana obat yang memiliki tanggal kedaluwarsa (expired date) lebih dekat harus dikeluarkan dan diserahkan terlebih dahulu ke pasien atau unit layanan guna mencegah penumpukan obat kedaluwarsa di rak penyimpanan.',
    clinicalReference: 'Permenkes No. 73 Tahun 2016 tentang Standar Pelayanan Kefarmasian di Apotek',
    difficulty: 'Mudah'
  },
  {
    id: 'q-829',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Obat-obat yang memiliki rupa mirip, kemasan mirip, atau pelafalan nama yang terdengar serupa (LASA / Look Alike Sound Alike) berisiko tinggi menimbulkan kesalahan pemberian obat (medication error).',
    question: 'Strategi penulisan huruf apakah yang direkomendasikan WHO dan Kemenkes pada label obat LASA untuk membedakan perbedaannya?',
    options: [
      { key: 'A', text: 'Font miring (Italic)' },
      { key: 'B', text: 'Tall Man Lettering (huruf kapital pada suku kata pembeda)' },
      { key: 'C', text: 'Garis bawah tebal' },
      { key: 'D', text: 'Huruf Arab' },
      { key: 'E', text: 'Font berukuran mikro' }
    ],
    correctAnswer: 'B',
    explanation: 'Tall Man Lettering adalah teknik penulisan nama obat LASA dengan menggunakan kombinasi huruf KAPITAL TEBAL pada bagian suku kata yang membedakan (misalnya: efeDRIN vs epiNEFRIN, hidrOXIzin vs hidrALAzine) untuk menarik perhatian visual staf farmasi dan mencegah kesalahan pengambilan obat.',
    clinicalReference: 'Pedoman Keselamatan Pasien Rumah Sakit Kemenkes RI & ISMP Tall Man Lettering',
    difficulty: 'Mudah'
  },
  {
    id: 'q-830',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Pasien penderita tuberkulosis (TBC) kategori 1 yang sedang menjalani fase intensif mengonsumsi obat Rifampisin, Isoniazid, Pirazinamid, dan Etambutol. Pasien datang ke apotek dengan cemas karena urin, keringat, dan air matanya berwarna merah kemerahan.',
    question: 'Manakah obat anti tuberkulosis (OAT) yang menjadi penyebab perubahan warna cairan tubuh tersebut dan apa edukasi TTK yang tepat?',
    options: [
      { key: 'A', text: 'Isoniazid; segera hentikan obat' },
      { key: 'B', text: 'Rifampisin; efek samping lazim tidak berbahaya, obat tetap diminum teratur' },
      { key: 'C', text: 'Etambutol; gejala awal kerusakan saraf optik' },
      { key: 'D', text: 'Pirazinamid; tanda gagal ginjal akut' },
      { key: 'E', text: 'Streptomisin; tanda kerusakan ginjal' }
    ],
    correctAnswer: 'B',
    explanation: 'Rifampisin diekskresikan melalui urin, air liur, keringat, feses, dan air mata dengan menghasilkan metabolit berwarna jingga-kemerahan. Ini adalah efek samping farmakologis normal yang tidak berbahaya dan tidak menimbulkan kerusakan organ. TTK mengedukasi pasien agar tidak panik dan obat harus tetap diminum rutin sesuai jadwal.',
    clinicalReference: 'Petunjuk Teknis Tata Laksana Tuberkulosis Kemenkes RI & PNPK TB',
    difficulty: 'Mudah'
  },
  {
    id: 'q-831',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Pasien penderita diabetes melitus tipe 2 yang sedang mengonsumsi tablet Glibenklamid 5 mg datang ke apotek dalam kondisi lemas, gemetar, berkeringat dingin, jantung berdebar, dan pusing setelah terlambat makan siang.',
    question: 'Kondisi kegawatdaruratan apakah yang sedang dialami pasien dan pertolongan pertama apa yang harus segera diberikan di apotek?',
    options: [
      { key: 'A', text: 'Hiperglikemia; segera minum suntikan insulin' },
      { key: 'B', text: 'Hipoglikemia; segera berikan minuman manis berkalori (air gula atau sirup)' },
      { key: 'C', text: 'Ketoasidosis; segera minum air garam' },
      { key: 'D', text: 'Syok anafilaksis; berikan injeksi epinefrin' },
      { key: 'E', text: 'Hipertensi krisis; berikan kaptopril sublingual' }
    ],
    correctAnswer: 'B',
    explanation: 'Glibenklamid adalah antidiabetes golongan sulfonilurea yang merangsang sekresi insulin endogen. Terlambat makan dapat memicu HIPOGLIKEMIA (kadar glukosa darah < 70 mg/dL) dengan tanda neuroglikopenik (pusing, lemas, gemetar, keringat dingin). Pertolongan pertamanya adalah aturan "Rule of 15": segera minum 15-20 gram karbohidrat murni cepat serap (seperti 1 gelas air gula atau 1/2 gelas sirup manis).',
    clinicalReference: 'Konsensus Pengelolaan dan Pencegahan DM Tipe 2 di Indonesia PERKENI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-832',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Berdasarkan Undang-Undang Kesehatan No. 17 Tahun 2023, masa berlaku Surat Tanda Registrasi Tenaga Medis dan Tenaga Kesehatan (termasuk STR Tenaga Vokasi Farmasi / STRTTK) kini telah mengalami perubahan regulasi.',
    question: 'Berapa lamakah masa berlaku STR Tenaga Teknis Kefarmasian (STRTTK) menurut peraturan perundang-undangan terbaru?',
    options: [
      { key: 'A', text: '3 tahun' },
      { key: 'B', text: '5 tahun' },
      { key: 'C', text: '10 tahun' },
      { key: 'D', text: 'Seumur hidup' },
      { key: 'E', text: 'Hanya berlaku selama bekerja di fasyankes' }
    ],
    correctAnswer: 'D',
    explanation: 'Berdasarkan Pasal 260 ayat (4) Undang-Undang No. 17 Tahun 2023 tentang Kesehatan, Surat Tanda Registrasi (STR) bagi tenaga medis dan tenaga kesehatan (termasuk Apoteker dan TTK) berlaku SEUMUR HIDUP, sepanjang memenuhi persyaratan yang ditentukan.',
    clinicalReference: 'Undang-Undang Republik Indonesia No. 17 Tahun 2023 tentang Kesehatan',
    difficulty: 'Mudah'
  },
  {
    id: 'q-833',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Menurut ketentuan Farmakope Indonesia Edisi VI, suatu wadah sediaan obat yang dapat mencegah masuknya zat cair, zat padat, dan mencegah menguapnya bahan atau hilangnya zat aktif selama penanganan, pengangkutan, penyimpanan, dan distribusi dinamakan wadah dengan spesifikasi apa?',
    question: 'Apakah klasifikasi wadah yang dimaksud dalam monografi Farmakope tersebut?',
    options: [
      { key: 'A', text: 'Wadah tertutup baik' },
      { key: 'B', text: 'Wadah tertutup rapat' },
      { key: 'C', text: 'Wadah tertutup kedap' },
      { key: 'D', text: 'Wadah dosis tunggal' },
      { key: 'E', text: 'Wadah satuan ganda' }
    ],
    correctAnswer: 'B',
    explanation: 'Menurut Farmakope Indonesia: 1) Wadah Tertutup Baik melindungi isi dari masuknya zat padat dan mencegah hilangnya zat selama penanganan; 2) Wadah Tertutup Rapat melindungi isi dari masuknya zat cair, padat, atau uap, mencegah hilangnya zat, dan mencegah pelapukan/kelembapan; 3) Wadah Tertutup Kedap (hermetis) mencegah tembusnya udara atau gas lain selama penyimpanan.',
    clinicalReference: 'Farmakope Indonesia Edisi VI (Ketentuan Umum Wadah dan Penyimpanan)',
    difficulty: 'Sedang'
  }
];
