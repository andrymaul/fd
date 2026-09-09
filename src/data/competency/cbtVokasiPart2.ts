import { ExamQuestion } from '../competencyExamData';

/**
 * BANK SOAL CBT UKTVF / APDFI (UJI KOMPETENSI TENAGA VOKASI FARMASI D3)
 * BAGIAN 2: TEKNOLOGI SEDIAAN FARMASI, EVALUASI MUTU QC, FITOKIMIA & BAHAN ALAM TRADISIONAL
 * Diadopsi langsung dari Bank Soal Try Out Resmi APDFI (Asosiasi Pendidikan Diploma Farmasi Indonesia)
 * Standar Nasional Vokasi Farmasi Indonesia
 */
export const CBT_VOKASI_PART_2: ExamQuestion[] = [
  {
    id: 'q-714',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Sejumlah tablet salut ekstrak sambiloto dievaluasi waktu hancurnya dengan menggunakan alat disintegrant tester. Tablet diletakkan ke dalam masing-masing tabung keranjang dan dimasukkan ke dalam bejana yang telah diisi air bersuhu 37 +- 2 derajat Celcius. Keranjang dinaik-turunkan secara mekanis. Tablet dinyatakan hancur sempurna apabila tidak ada bagian massa tablet yang tertinggal di atas kasa kawat.',
    question: 'Berapa menit waktu hancur maksimal yang dipersyaratkan dalam Farmakope untuk tablet salut selaput (film-coated tablet)?',
    options: [
      { key: 'A', text: '10 menit' },
      { key: 'B', text: '15 menit' },
      { key: 'C', text: '30 menit' },
      { key: 'D', text: '45 menit' },
      { key: 'E', text: '60 menit' }
    ],
    correctAnswer: 'C',
    explanation: 'Berdasarkan Farmakope Indonesia Edisi V dan VI, persyaratan uji waktu hancur tablet tidak bersalut adalah tidak lebih dari 15 menit, sedangkan untuk tablet bersalut selaput (film coated tablet) adalah TIDAK LEBIH DARI 30 MENIT. Untuk tablet bersalut gula/salut enterik dipersyaratkan tidak lebih dari 60 menit.',
    clinicalReference: 'Farmakope Indonesia Edisi VI (Uji Waktu Hancur <1251>) & Modul QC APDFI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-715',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Bagian RnD suatu industri farmasi memproduksi sediaan tablet salut film Asam Mefenamat. Formulasi larutan penyalut terdiri dari: Hidroksipropil Metilselulosa (HPMC), Polietilen Glikol 400 (PEG 400), Natrium Laurilsulfat, Titanium Dioksida, FD&C Red Dye No. 3 Lake, dan Akuades.',
    question: 'Bahan manakah dalam formula penyalut tersebut yang berperan spesifik sebagai surfaktan penurun tegangan permukaan (wetting agent)?',
    options: [
      { key: 'A', text: 'HPMC' },
      { key: 'B', text: 'PEG 400' },
      { key: 'C', text: 'Natrium laurilsulfat' },
      { key: 'D', text: 'Titanium dioksida' },
      { key: 'E', text: 'Akuades' }
    ],
    correctAnswer: 'C',
    explanation: 'Natrium Laurilsulfat (Sodium Lauryl Sulfate / SLS) adalah surfaktan anionik yang berfungsi menurunkan tegangan permukaan dan meningkatkan keterbasahan (wetting agent) larutan penyalut terhadap inti tablet. HPMC berfungsi sebagai polimer pembentuk lapisan tipis (film former); PEG 400 sebagai pemlastis (plasticizer); Titanium dioksida sebagai zat pemburam (opacifier); dan FD&C Red sebagai zat pewarna.',
    clinicalReference: 'Handbook of Pharmaceutical Excipients 8th Ed & Teknologi Farmasi Sediaan Padat',
    difficulty: 'Mudah'
  },
  {
    id: 'q-716',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Industri obat tradisional membudidayakan rimpang lengkuas (Alpinia galanga) sebagai bahan baku sediaan jamu. Waktu pemanenan sangat mempengaruhi kadar metabolit sekunder minyak atsiri dan kualitas simplisia rimpang yang dihasilkan.',
    question: 'Kapan waktu pemanenan yang paling tepat untuk simplisia organ rimpang (rhizoma) tersebut?',
    options: [
      { key: 'A', text: 'Saat sore hari menjelang matahari terbenam' },
      { key: 'B', text: 'Saat tanaman baru bertunas batang muda' },
      { key: 'C', text: 'Ketika pagi hari sebelum fotosintesis' },
      { key: 'D', text: 'Pada fase vegetatif aktif berbunga' },
      { key: 'E', text: 'Saat daun dan bagian tanaman di atas tanah mulai mengering (menguning/meranggas)' }
    ],
    correctAnswer: 'E',
    explanation: 'Waktu panen simplisia rimpang (rhizoma) dan umbi akar yang optimal adalah pada akhir masa vegetatif, yaitu ketika daun dan bagian tanaman di atas permukaan tanah MULAI MENGUNING ATAU MENGERING (meranggas). Pada fase ini fotosintesis terhenti dan akumulasi metabolit sekunder cadangan di dalam rimpang telah mencapai kadar maksimum.',
    clinicalReference: 'Pedoman Pasca Panen Tanaman Obat Balittro Kementan & Materia Medika Indonesia',
    difficulty: 'Mudah'
  },
  {
    id: 'q-717',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Kegiatan penyimpanan bahan awal dan produk di industri farmasi harus memenuhi ketentuan CPOB untuk mencegah campur baur. Bahan awal yang baru datang dari pemasok dipisahkan secara fisik dan diberi label status khusus sementara menunggu hasil pengujian laboratorium Quality Control (QC) apakah bahan tersebut diluluskan atau ditolak.',
    question: 'Apakah label status yang wajib dipasang pada wadah bahan tersebut?',
    options: [
      { key: 'A', text: 'DITARIK (Recall)' },
      { key: 'B', text: 'DITOLAK (Rejected - Merah)' },
      { key: 'C', text: 'KARANTINA (Quarantine - Kuning)' },
      { key: 'D', text: 'DILULUSKAN (Released - Hijau)' },
      { key: 'E', text: 'DIKEMBALIKAN (Returned)' }
    ],
    correctAnswer: 'C',
    explanation: 'Sesuai Pedoman CPOB 2018/2024 Bab Pengelolaan Bahan, bahan awal yang baru diterima harus ditempatkan di area KARANTINA dan diberi label status KARANTINA (berwarna kuning) sampai selesai diuji oleh bagian QC dan diputuskan apakah DILULUSKAN (label hijau) atau DITOLAK (label merah).',
    clinicalReference: 'Pedoman CPOB BPOM RI 2024 & Manajemen Pergudangan Farmasi',
    difficulty: 'Mudah'
  },
  {
    id: 'q-718',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Pati, seng oksida, kalsium karbonat, dan ekstrak daun sirih merupakan zat padat terdispersi yang diformulasikan ke dalam sediaan semisolida antiseptik pelindung kulit. Karakteristik formula mengandung zat padat tidak larut lebih dari 50% di dalam basis lemak hidrokarbon sehingga menghasilkan konsistensi massa yang kaku dan daya lekat tinggi.',
    question: 'Apakah nama bentuk sediaan semisolida yang dimaksud?',
    options: [
      { key: 'A', text: 'Gel' },
      { key: 'B', text: 'Krim' },
      { key: 'C', text: 'Pasta' },
      { key: 'D', text: 'Salep' },
      { key: 'E', text: 'Suppositoria' }
    ],
    correctAnswer: 'C',
    explanation: 'Pasta adalah sediaan semipadat yang mengandung substansi zat padat tidak larut dalam konsentrasi besar (biasanya lebih dari 50% atau minimal 25%) yang terdispersi homogen dalam basis salep, menghasilkan massa yang kaku, tebal, dan bersifat menyerap cairan eksudat luka.',
    clinicalReference: 'Farmakope Indonesia Edisi VI & Formularium Nasional',
    difficulty: 'Mudah'
  },
  {
    id: 'q-719',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Seorang TTK yang bertugas di laboratorium farmasetika menyimpan bahan baku Kalsium Klorida anhidrat. Diketahui bahan kimia tersebut memiliki sifat sangat higroskopis dan mudah mencair (deliquescent) bila menyerap uap air dari udara terbuka.',
    question: 'Dimanakah wadah penyimpanan khusus yang paling tepat untuk zat higroskopis tersebut?',
    options: [
      { key: 'A', text: 'Desikator (Eksikator berpengering silika gel)' },
      { key: 'B', text: 'Rak kayu terbuka di suhu kamar' },
      { key: 'C', text: 'Lemari kaca biasa tanpa pengatur kelembaban' },
      { key: 'D', text: 'Lemari asam laboratorium' },
      { key: 'E', text: 'Lemari narkotika kunci ganda' }
    ],
    correctAnswer: 'A',
    explanation: 'Zat yang bersifat higroskopis atau deliquescent (mudah menarik kelembaban udara) harus disimpan dalam wadah tertutup rapat dan ditempatkan di dalam DESIKATOR (eksikator) yang berisi bahan pengering aktif seperti silika gel anhidrat atau kalsium klorida anhidrat untuk menjaga kelembaban relatif tetap rendah.',
    clinicalReference: 'Farmakope Indonesia Edisi VI Tata Cara Penyimpanan Bahan Baku',
    difficulty: 'Mudah'
  },
  {
    id: 'q-720',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Penentuan parameter susut pengeringan (loss on drying) suatu sampel ekstrak bahan alam di laboratorium QC dilakukan replikasi pengukuran sebanyak 3 kali (triplo). Replikasi pengukuran bertujuan untuk mengeliminasi kesalahan acak (random error) dan menjamin presisi data.',
    question: 'Apakah parameter statistik yang dihasilkan dan dilaporkan dari proses pengukuran replikasi tersebut?',
    options: [
      { key: 'A', text: 'Mean (Rata-rata) dan Standar Deviasi (SD)' },
      { key: 'B', text: 'Mean dan Nilai Varian kuadrat' },
      { key: 'C', text: 'Nilai Mean tunggal' },
      { key: 'D', text: 'Standar Deviasi saja' },
      { key: 'E', text: 'Nilai Median data tengah' }
    ],
    correctAnswer: 'A',
    explanation: 'Pada analisis kuantitatif laboratorium dengan pengujian berulang (replikasi), hasil pengujian disajikan dalam bentuk Nilai Rata-rata (Mean) sebagai estimasi nilai sentral dan Standar Deviasi (SD) atau Standar Deviasi Relatif (% RSD) sebagai ukuran presisi/kedekatan antar hasil pengukuran.',
    clinicalReference: 'Validasi Metode Analisis Farmasi AOAC & Farmakope Herbal Indonesia',
    difficulty: 'Mudah'
  },
  {
    id: 'q-721',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Ruang bersalin di RSIA mengajukan permintaan resmi ke gudang farmasi berupa Alkohol 70% sebanyak 3 liter untuk antiseptik kulit. Stok yang tersedia di gudang farmasi hanya Alkohol teknis 96%.',
    question: 'Apakah tindakan teknis yang harus dilakukan oleh TTK di gudang farmasi?',
    options: [
      { key: 'A', text: 'Meminta perawat melapor ke Direktur Rumah Sakit' },
      { key: 'B', text: 'Menyerahkan alkohol 96% langsung sebanyak 3 liter tanpa pengenceran' },
      { key: 'C', text: 'Membeli alkohol jadi di minimarket terdekat' },
      { key: 'D', text: 'Menolak permintaan karena sediaan 70% kosong di gudang' },
      { key: 'E', text: 'Melakukan pengenceran alkohol 96% menjadi 70% dengan akuades sesuai volume yang diminta' }
    ],
    correctAnswer: 'E',
    explanation: 'Tugas kefarmasian TTK meliputi penyiapan dan peracikan sediaan non-steril di rumah sakit, termasuk pengenceran alkohol teknis (96% menjadi 70%) menggunakan rumus pengenceran V1 x M1 = V2 x M2, kemudian mengemas dan memberi etiket antiseptik luar.',
    clinicalReference: 'Standar Pelayanan Kefarmasian Rumah Sakit Permenkes No. 72 Tahun 2016',
    difficulty: 'Mudah'
  },
  {
    id: 'q-722',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'TTK diminta oleh apoteker penanggung jawab apotek untuk membantu menyusun Laporan Penggunaan Prekursor Farmasi bulanan secara elektronik melalui sistem SIPNAP Kemenkes.',
    question: 'Kartu stok obat manakah yang harus diambil oleh TTK untuk pencatatan laporan prekursor tersebut?',
    options: [
      { key: 'A', text: 'Kodein tablet' },
      { key: 'B', text: 'Tramadol kapsul' },
      { key: 'C', text: 'Alprazolam tablet' },
      { key: 'D', text: 'Pseudoefedrin (Pseudoephedrine HCl) sirup/tablet' },
      { key: 'E', text: 'Dekstrometorfan HBr' }
    ],
    correctAnswer: 'D',
    explanation: 'Pseudoefedrin (Pseudoephedrine) dan Efedrin merupakan zat aktif yang digolongkan sebagai PREKURSOR FARMASI Tabel 1 sesuai Peraturan Pemerintah No. 44 Tahun 2010. Kodein adalah Narkotika; Alprazolam adalah Psikotropika; Tramadol adalah Obat-Obat Tertentu (OOT); Dekstrometorfan adalah sediaan bebas terbatas.',
    clinicalReference: 'PP RI No. 44 Tahun 2010 tentang Prekursor & Permenkes No. 3 Tahun 2015',
    difficulty: 'Mudah'
  },
  {
    id: 'q-723',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Seorang TTK bekerja di unit formulasi industri farmasi memproduksi sediaan gel Natrium Diklofenak. Basis polimer hidrofilik mengabsorpsi molekul pelarut air ke dalam jaringannya sehingga polimer meregang dan terjadi pertambahan volume massa sediaan yang signifikan.',
    question: 'Apakah istilah fenomena fisikokimia pembentukan gel tersebut?',
    options: [
      { key: 'A', text: 'Reologi' },
      { key: 'B', text: 'Relaksasi gel' },
      { key: 'C', text: 'Sineresis' },
      { key: 'D', text: 'Tiksotropi' },
      { key: 'E', text: 'Swelling (Pengembangan)' }
    ],
    correctAnswer: 'E',
    explanation: 'Swelling (pengembangan / imbibisi) adalah proses di mana partikel polimer pembentuk gel (gelling agent seperti Karbopol atau Na-CMC) menyerap molekul cairan pelarut ke dalam ruang intermolekulernya, mengakibatkan pertambahan volume massa tanpa terjadi pelarutan sempurna. Sineresis adalah kebalikannya (keluarnya cairan dari gel saat didiamkan).',
    clinicalReference: 'Farmakope Indonesia Edisi VI & Farmasi Fisik Martin Edisi 6',
    difficulty: 'Mudah'
  },
  {
    id: 'q-724',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Suatu industri obat tradisional mengembangkan sediaan tablet kunyah (chewable tablet) ekstrak benalu teh. Eksipien pengisi yang dipilih berupa serbuk putih kristal, memiliki kompresibilitas baik, berasa manis dengan sensasi rasa dingin yang menyegarkan di mulut (cooling sensation), tidak bersifat higroskopis, dan non-kariogenik (tidak menyebabkan karies gigi).',
    question: 'Apakah nama bahan pengisi tablet kunyah yang ideal tersebut?',
    options: [
      { key: 'A', text: 'Dekstrosa' },
      { key: 'B', text: 'Glukosa anhidrat' },
      { key: 'C', text: 'Laktosa monohidrat' },
      { key: 'D', text: 'Manitol' },
      { key: 'E', text: 'Amilum jagung' }
    ],
    correctAnswer: 'D',
    explanation: 'Manitol adalah bahan pengisi standar emas untuk sediaan tablet kunyah (chewable tablet) dan tablet hisap (lozenges) karena memiliki rasa manis yang bersih, panas pelarutan negatif yang memberikan sensasi dingin menyegarkan di lidah (cooling effect), tidak memicu karies gigi, dan memiliki sifat non-higroskopis yang sangat baik.',
    clinicalReference: 'Handbook of Pharmaceutical Excipients 8th Edition & Formulasi Tablet CPOB',
    difficulty: 'Mudah'
  },
  {
    id: 'q-725',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Analis laboratorium mikrobiologi melakukan pengujian cemaran kapang dan khamir (AKK) pada ekstrak etanol batang Boehmeria virgata. Pada cawan petri pengenceran 10^-1 didapatkan data koloni ulangan 1 = 4 koloni, ulangan 2 = 1 koloni, dan ulangan 3 = 0 koloni, dengan rerata 1,6 koloni.',
    question: 'Berapakah jumlah Angka Kapang Khamir (koloni/gram) dari ekstrak tersebut?',
    options: [
      { key: 'A', text: '1,5 x 10^1 koloni/gram' },
      { key: 'B', text: '1,6 x 10^1 koloni/gram (16 koloni/gram)' },
      { key: 'C', text: '1,7 x 10^1 koloni/gram' },
      { key: 'D', text: '1,5 x 10^2 koloni/gram' },
      { key: 'E', text: '1,6 x 10^2 koloni/gram' }
    ],
    correctAnswer: 'B',
    explanation: 'Perhitungan jumlah mikroba (koloni/gram) = Rerata jumlah koloni x (1 / Faktor Pengenceran). Pada pengenceran 10^-1, faktor pengali = 1 / 10^-1 = 10^1. Jumlah cemaran = 1,6 x 10^1 koloni/gram (atau 16 koloni/gram).',
    clinicalReference: 'Farmakope Herbal Indonesia & Uji Mikrobiologi Sediaan Farmasi FI VI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-726',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Seorang TTK membuat formulasi sediaan gel 50 mL dengan formula:\nEkstrak Rimpang 1 g\nCarbopol 940 0,5%\nPropilenglikol 4%\nTrietanolamin 1%\nMetil paraben 0,2%\nPropil paraben 0,02%\nAquadest ad 100%\nDiketahui Propilenglikol berperan sebagai humektan pencegah pengeringan gel.',
    question: 'Berapa gram kah bobot humektan (Propilenglikol) yang harus ditimbang untuk membuat 50 mL sediaan gel tersebut?',
    options: [
      { key: 'A', text: '2 gram' },
      { key: 'B', text: '4 gram' },
      { key: 'C', text: '6 gram' },
      { key: 'D', text: '8 gram' },
      { key: 'E', text: '10 gram' }
    ],
    correctAnswer: 'A',
    explanation: 'Konsentrasi humektan (Propilenglikol) = 4% (% b/v). Volume sediaan gel yang dibuat = 50 mL. Jumlah propilenglikol yang ditimbang = (4 / 100) x 50 mL = 2 gram.',
    clinicalReference: 'Perhitungan Farmasetika & Buku Petunjuk Praktikum Formulasi Gel APDFI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-727',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Pasien datang ke apotek membawa resep:\nR/ Azithromycin 500 mg tab No. V\nS. 1 dd tab 1\nR/ Paracetamol 500 mg tab No. X\nS. 3 dd tab 1\nR/ Vitamin C tab No. XXX\nS. 2 dd tab 1\nR/ Dexamethasone tab No. XI\nS. 3 dd tab 1\nSaat dilakukan skrining harga oleh TTK, pasien menyatakan keterbatasan uang dan hanya ingin menebus obat antibiotik saja.',
    question: 'Berapakah jumlah tablet obat yang diserahkan oleh TTK kepada pasien tersebut?',
    options: [
      { key: 'A', text: '5 tablet' },
      { key: 'B', text: '10 tablet' },
      { key: 'C', text: '11 tablet' },
      { key: 'D', text: '20 tablet' },
      { key: 'E', text: '30 tablet' }
    ],
    correctAnswer: 'A',
    explanation: 'Dalam resep tersebut, satu-satunya obat golongan antibiotik adalah Azithromycin 500 mg dengan jumlah No. V (5 tablet). Parasetamol adalah analgetik, Vitamin C adalah suplemen, dan Deksametason adalah kortikosteroid antiinflamasi. Maka jumlah tablet yang diserahkan adalah 5 tablet.',
    clinicalReference: 'Standar Skrining Resep Apotek Permenkes No. 73 Tahun 2016',
    difficulty: 'Mudah'
  },
  {
    id: 'q-728',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Bagian Quality Control (QC) industri farmasi melakukan uji sterilitas sediaan injeksi Omeprazol steril untuk memastikan tidak adanya kontaminasi mikroorganisme fungi (kapang dan khamir) serta bakteri aerob.',
    question: 'Apakah nama media perbenihan standar yang dipersyaratkan dalam Farmakope untuk mendeteksi kontaminasi kapang/khamir tersebut?',
    options: [
      { key: 'A', text: 'Nutrient Broth (NB)' },
      { key: 'B', text: 'Fluid Thioglycollate Medium (FTM)' },
      { key: 'C', text: 'Soybean-Casein Digest Medium (SCDM / TSB)' },
      { key: 'D', text: 'Potato Dextrose Digest Medium' },
      { key: 'E', text: 'Eosin Methylene Blue Agar' }
    ],
    correctAnswer: 'C',
    explanation: 'Berdasarkan Farmakope Indonesia Edisi VI (Uji Sterilitas <71>), media baku yang digunakan adalah: 1) Media Tioglikolat Cair (Fluid Thioglycollate Medium / FTM) terutama untuk pertumbuhan bakteri anaerob dan aerob; dan 2) Media Soybean-Casein Digest (SCDM / Tryptic Soy Broth) yang diinkubasi pada 20-25 C terutama untuk kapang dan khamir serta bakteri aerob.',
    clinicalReference: 'Farmakope Indonesia Edisi VI (Uji Sterilitas) & Pedoman QC CPOB',
    difficulty: 'Sedang'
  },
  {
    id: 'q-729',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Salah satu parameter uji non-spesifik ekstrak herbal adalah penetapan residu pestisida (golongan organoklorin, organofosfat, dan karbamat) untuk memastikan keamanan ekstrak dari kontaminasi agrokimia.',
    question: 'Metode instrumental analitik baku apakah yang digunakan untuk menetapkan kadar residu pestisida tersebut?',
    options: [
      { key: 'A', text: 'Spektrofotometri Serapan Atom (SSA / AAS)' },
      { key: 'B', text: 'Kromatografi Lapis Tipis (KLT)' },
      { key: 'C', text: 'Kromatografi Gas (Gas Chromatography / GC)' },
      { key: 'D', text: 'Potensiometri Elektrokimia' },
      { key: 'E', text: 'Analisis Termal Diferensial (DTA)' }
    ],
    correctAnswer: 'C',
    explanation: 'Penetapan residu pestisida senyawa volatil semi-volatil (seperti organoklorin dan organofosfat) dilakukan menggunakan Kromatografi Gas (GC) yang dilengkapi dengan detektor selektif seperti Electron Capture Detector (ECD) untuk organoklorin atau Flame Photometric Detector (FPD) / NPD untuk organofosfat.',
    clinicalReference: 'Farmakope Herbal Indonesia & Parameter Standar Umum Ekstrak Tumbuhan Obat BPOM',
    difficulty: 'Sedang'
  },
  {
    id: 'q-730',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'TTK di unit formulasi rumah sakit menyiapkan sediaan suppositoria Natrium Diklofenak dengan menggunakan basis suppositoria larut air (water-soluble base) yang tidak meleleh oleh suhu tubuh melainkan melarut perlahan di dalam cairan mukosa rektum.',
    question: 'Apakah jenis basis suppositoria yang dimaksud?',
    options: [
      { key: 'A', text: 'Oleum Cacao (Lemak Cokelat)' },
      { key: 'B', text: 'Adeps Solidus' },
      { key: 'C', text: 'Polioksietilen stearat' },
      { key: 'D', text: 'Polietilen Glikol (PEG / Carbowax)' },
      { key: 'E', text: 'Lemak sintetis Witepsol' }
    ],
    correctAnswer: 'D',
    explanation: 'Polietilen Glikol (PEG / Macrogol / Carbowax) merupakan basis suppositoria hidrofilik yang LARUT AIR. PEG melepaskan zat aktif dengan cara melarut perlahan di dalam cairan mukosa rektum dan tidak meleleh pada suhu tubuh. Sebaliknya, Oleum Cacao dan Adeps Solidus adalah basis lemak lipofilik yang meleleh pada suhu tubuh (36-37 C).',
    clinicalReference: 'Farmakope Indonesia Edisi V & Sediaan Rektal Farmasetika',
    difficulty: 'Mudah'
  },
  {
    id: 'q-731',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Seorang TTK melakukan pemisahan dan identifikasi senyawa kurkuminoid dari ekstrak rimpang kunyit (Curcuma longa) menggunakan metode Kromatografi Lapis Tipis (KLT).',
    question: 'Bagaimanakah prinsip pemisahan senyawa pada kromatografi tersebut?',
    options: [
      { key: 'A', text: 'Pemisahan komponen campuran berdasarkan perbedaan polaritas dan koefisien distribusi antara fase diam dan fase gerak' },
      { key: 'B', text: 'Pemisahan berdasarkan pengendapan zat oleh pengaruh gravitasi bumi' },
      { key: 'C', text: 'Pemisahan berdasarkan perbedaan titik didih larutan fase gerak' },
      { key: 'D', text: 'Pemisahan berdasarkan perbedaan berat jenis molekul cairan' },
      { key: 'E', text: 'Pemisahan berdasarkan muatan listrik statis lempeng silika' }
    ],
    correctAnswer: 'A',
    explanation: 'Prinsip kromatografi (termasuk KLT) adalah pemisahan komponen kimia dalam suatu campuran berdasarkan perbedaan afinitas, kepolaran, dan koefisien distribusi partisi/adsorpsi senyawa di antara dua fase: fase diam (stationary phase) dan fase gerak (mobile phase).',
    clinicalReference: 'Farmakope Herbal Indonesia & Analisis Instrumen Farmasi',
    difficulty: 'Mudah'
  },
  {
    id: 'q-732',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Bagian R&D industri obat tradisional mengisolasi minyak atsiri sineol dari daun kayu putih (Melaleuca leucadendron) untuk formulasi minyak kayu putih dan balsem analgesik.',
    question: 'Apakah metode pemisahan ekstraksi baku yang digunakan untuk mengisolasi minyak atsiri tersebut?',
    options: [
      { key: 'A', text: 'Infusa' },
      { key: 'B', text: 'Destilasi (Destilasi Uap atau Destilasi Uap-Air)' },
      { key: 'C', text: 'Perkolasi dingin' },
      { key: 'D', text: 'Maserasi kinetik' },
      { key: 'E', text: 'Sokletasi bertingkat' }
    ],
    correctAnswer: 'B',
    explanation: 'Minyak atsiri (essential oil) adalah senyawa volatil yang mudah menguap dan termolabil, sehingga metode ekstraksi standarnya adalah DESTILASI (destilasi air, destilasi uap-air, atau destilasi uap langsung), di mana uap air membawa fraksi minyak atsiri menguap dan terkondensasi menjadi dua lapisan yang terpisah.',
    clinicalReference: 'Materia Medika Indonesia & Teknologi Ekstraksi Minyak Atsiri',
    difficulty: 'Mudah'
  },
  {
    id: 'q-733',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Salah satu komponen utama pada rangkaian aparatus ekstraksi Soxhlet adalah kondensor (pendingin). Kondensor berfungsi mengembunkan uap pelarut panas agar kembali menetes membasahi simplisia.',
    question: 'Cairan apakah yang dialirkan secara kontinu di dalam jaket kondensor tersebut?',
    options: [
      { key: 'A', text: 'Nitrogen cair bersuhu dingin' },
      { key: 'B', text: 'Air dingin mengalir' },
      { key: 'C', text: 'Etanol 96%' },
      { key: 'D', text: 'Etil asetat murni' },
      { key: 'E', text: 'Minyak mineral parafin' }
    ],
    correctAnswer: 'B',
    explanation: 'Kondensor Liebig atau kondensor bola pada alat Soxhlet dialiri AIR DINGIN mengalir (aliran masuk dari pipa bawah dan keluar dari pipa atas) sebagai media pendingin balik untuk mendinginkan dan mengkondensasikan uap pelarut organik panas menjadi fase cair.',
    clinicalReference: 'Petunjuk Praktikum Kimia Bahan Alam & Fitokimia APDFI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-734',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'TTK di industri obat tradisional memproduksi tablet herbal pare (Momordica charantia) dengan metode granulasi basah. Setelah proses pengeringan dan pengayakan massa granul selesai, granul disimpan di ruang karantina untuk diuji sifat fisiknya (kadar air, kecepatan alir, kompresibilitas) sebelum dicetak menjadi tablet.',
    question: 'Apakah status penamaan produk granul yang sedang dikarantina tersebut?',
    options: [
      { key: 'A', text: 'Bahan awal' },
      { key: 'B', text: 'Produk antara (Intermediate Product)' },
      { key: 'C', text: 'Produk ruahan (Bulk Product)' },
      { key: 'D', text: 'Produk jadi (Finished Product)' },
      { key: 'E', text: 'Bahan pengemas' }
    ],
    correctAnswer: 'B',
    explanation: 'Sesuai CPOB: 1) Bahan Awal: bahan baku zat aktif/eksipien; 2) Produk Antara (Intermediate): tiap campuran bahan yang masih memerlukan tahap pengolahan lebih lanjut (misal: massa granul kering sebelum dicetak); 3) Produk Ruahan (Bulk): produk yang telah selesai diolah dan tinggal memerlukan pengemasan (misal: tablet inti sebelum dikemas strip).',
    clinicalReference: 'Pedoman Cara Pembuatan Obat yang Baik (CPOB) BPOM RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-735',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Piperin merupakan senyawa metabolit sekunder bioaktif golongan alkaloid amida basa lemah yang memberikan rasa pedas khas pada buah merica / lada hitam.',
    question: 'Apakah nama tanaman asal (spesies botani) dari simplisia penghasil piperin tersebut?',
    options: [
      { key: 'A', text: 'Piper nigrum L.' },
      { key: 'B', text: 'Pandanus conoideus' },
      { key: 'C', text: 'Piper retrofractum' },
      { key: 'D', text: 'Phaleria macrocarpa' },
      { key: 'E', text: 'Papaver somniferum' }
    ],
    correctAnswer: 'A',
    explanation: 'Piperin diisolasi dari simplisia Piperis nigri fructus yang berasal dari tanaman Piper nigrum L. (lada hitam/merica). Piper retrofractum adalah tanaman cabe jawa; Papaver somniferum adalah penghasil candu/morfin.',
    clinicalReference: 'Materia Medika Indonesia Jilid II & Farmakope Herbal Indonesia',
    difficulty: 'Mudah'
  },
  {
    id: 'q-736',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Seorang TTK mengekstraksi 25 gram serbuk kering kulit buah naga menggunakan metode sokletasi. Hasil ekstrak cair kemudian diuapkan pelarutnya dengan rotary evaporator sehingga diperoleh ekstrak kental sebanyak 3 gram.',
    question: 'Berapakah persentase rendemen (% b/b) dari ekstrak kental tersebut?',
    options: [
      { key: 'A', text: '5,00%' },
      { key: 'B', text: '9,27%' },
      { key: 'C', text: '12,00%' },
      { key: 'D', text: '14,30%' },
      { key: 'E', text: '21,00%' }
    ],
    correctAnswer: 'C',
    explanation: 'Rendemen ekstrak (% b/b) = (Bobot ekstrak kental yang diperoleh / Bobot simplisia awal) x 100% = (3 gram / 25 gram) x 100% = 0,12 x 100% = 12,00%.',
    clinicalReference: 'Pedoman Pengujian Mutu Ekstrak BPOM RI & Hitungan Farmasi Vokasi',
    difficulty: 'Mudah'
  },
  {
    id: 'q-737',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'TTK di laboratorium QC industri obat tradisional melakukan skrining fitokimia simplisia. Serbuk simplisia diekstraksi dengan asam klorida encer 1%, disaring, lalu filtratnya direaksikan dengan pereaksi Mayer (larutan kalium raksa iodida). Hasil reaksi menunjukkan terbentuknya endapan putih kekuningan.',
    question: 'Apakah golongan metabolit sekunder yang teridentifikasi positif pada simplisia tersebut?',
    options: [
      { key: 'A', text: 'Tanin' },
      { key: 'B', text: 'Alkaloid' },
      { key: 'C', text: 'Saponin' },
      { key: 'D', text: 'Flavonoid' },
      { key: 'E', text: 'Terpenoid' }
    ],
    correctAnswer: 'B',
    explanation: 'Reaksi Mayer (kalium tetraiodomerkurat(II)) menghasilkan endapan putih kekuningan bila bereaksi dengan nitrogen basa pada senyawa ALKALOID. Reagen Dragendorff menghasilkan endapan jingga kecokelatan; Bouchardat menghasilkan endapan cokelat.',
    clinicalReference: 'Metode Fitokimia Harborne & Materia Medika Indonesia',
    difficulty: 'Mudah'
  },
  {
    id: 'q-738',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Amilum (pati) adalah karbohidrat simpanan utama pada tumbuhan tingkat tinggi yang tersusun atas dua fraksi polimer glukosa yaitu amilosa dan amilopektin.',
    question: 'Apakah klasifikasi golongan karbohidrat dari amilum tersebut?',
    options: [
      { key: 'A', text: 'Monosakarida' },
      { key: 'B', text: 'Disakarida' },
      { key: 'C', text: 'Oligosakarida' },
      { key: 'D', text: 'Polisakarida' },
      { key: 'E', text: 'Oligopeptida' }
    ],
    correctAnswer: 'D',
    explanation: 'Amilum (pati) adalah makromolekul karbohidrat kompleks golongan POLISAKARIDA yang tersusun dari ribuan monomer glukosa yang terikat oleh ikatan glikosidik alfa-(1->4) dan alfa-(1->6).',
    clinicalReference: 'Biokimia Kedokteran Harper & Farmakope Indonesia Edisi VI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-739',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'TTK menguji filtrat air panas daun teh (Camellia sinensis). Filtrat ditambahkan beberapa tetes larutan Besi(III) Klorida (FeCl3 1%). Hasil reaksi menunjukkan timbulnya larutan dan endapan berwarna hijau kehitaman hingga biru kehitaman.',
    question: 'Apakah golongan metabolit sekunder yang teridentifikasi dalam ekstrak teh tersebut?',
    options: [
      { key: 'A', text: 'Tanin (Senyawa Polifenol)' },
      { key: 'B', text: 'Alkaloid' },
      { key: 'C', text: 'Saponin' },
      { key: 'D', text: 'Steroid' },
      { key: 'E', text: 'Minyak atsiri' }
    ],
    correctAnswer: 'A',
    explanation: 'Reagen Besi(III) Klorida (FeCl3) bereaksi secara khas dengan gugus hidroksil fenolik pada senyawa TANIN / POLIFENOL menghasilkan kompleks besi-fenolat yang berwarna hijau kehitaman (tanin terkondensasi / katekol) atau biru kehitaman (tanin terhidrolisis / pirogalol).',
    clinicalReference: 'Farmakope Herbal Indonesia & Buku Ajar Fitokimia',
    difficulty: 'Mudah'
  },
  {
    id: 'q-740',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Seorang TTK melakukan uji skrining fitokimia ekstrak buah manggis dengan metode busa Forth: 2 mL ekstrak dimasukkan ke tabung reaksi, ditambahkan 10 mL air panas, kemudian dikocok kuat secara vertikal selama 30 detik. Hasil pengamatan menunjukkan terbentuknya busa madu setinggi > 1 cm yang stabil (tidak hilang selama minimal 30 detik) dan tidak hilang pada penambahan 1 tetes HCl 2 N.',
    question: 'Apakah golongan senyawa metabolit sekunder yang dinyatakan positif pada uji tersebut?',
    options: [
      { key: 'A', text: 'Tanin' },
      { key: 'B', text: 'Alkaloid' },
      { key: 'C', text: 'Saponin' },
      { key: 'D', text: 'Flavonoid' },
      { key: 'E', text: 'Glikosida antrakinon' }
    ],
    correctAnswer: 'C',
    explanation: 'Uji busa Forth merupakan uji karakteristik untuk SAPONIN. Saponin adalah glikosida amfifilik yang memiliki gugus gula hidrofilik dan aglikon sapogenin lipofilik, bertindak sebagai surfaktan alami yang menurunkan tegangan permukaan air dan membentuk busa persisten yang stabil.',
    clinicalReference: 'Metode Fitokimia Harborne & MMI Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-741',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Seorang TTK menguji kandungan gula pereduksi pada ekstrak simplisia menggunakan reagen yang mengandung kuprisulfat (CuSO4), natrium karbonat (Na2CO3), dan natrium sitrat dalam suasana alkali lemah. Setelah dipanaskan, terbentuk endapan berwarna merah bata kupro oksida (Cu2O).',
    question: 'Apakah nama pereaksi kimia penguji gula pereduksi tersebut?',
    options: [
      { key: 'A', text: 'Pereaksi Fehling A dan B' },
      { key: 'B', text: 'Pereaksi Liebermann-Burchard' },
      { key: 'C', text: 'Pereaksi Benedict' },
      { key: 'D', text: 'Pereaksi Mayer' },
      { key: 'E', text: 'Pereaksi Dragendorff' }
    ],
    correctAnswer: 'C',
    explanation: 'Pereaksi Benedict mengandung tembaga(II) sulfat, natrium sitrat, dan natrium karbonat. Berfungsi mendeteksi gula pereduksi (monosakarida dan beberapa disakarida) melalui reduksi Cu2+ menjadi endapan merah bata Cu2O.',
    clinicalReference: 'Biokimia Praktikum & Kimia Bahan Alam',
    difficulty: 'Mudah'
  },
  {
    id: 'q-742',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Industri Obat Tradisional (IOT) akan memproduksi tablet effervescent anak penambah nafsu makan sebanyak 1.000 tablet. Dalam formula disebutkan setiap tablet mengandung 100 mg ekstrak kering temulawak (Curcuma xanthorrhiza). Berdasarkan catatan validasi ekstraksi, rendemen ekstrak temulawak adalah 10%.',
    question: 'Berapakah serbuk simplisia temulawak (dalam kg) yang harus disiapkan untuk memenuhi kebutuhan produksi tersebut?',
    options: [
      { key: 'A', text: '0,5 kg' },
      { key: 'B', text: '0,8 kg' },
      { key: 'C', text: '1,0 kg' },
      { key: 'D', text: '1,2 kg' },
      { key: 'E', text: '2,0 kg' }
    ],
    correctAnswer: 'C',
    explanation: 'Kebutuhan ekstrak total = 100 mg x 1.000 tablet = 100.000 mg = 100 gram ekstrak. Rendemen ekstrak = 10% (artinya 100 gram ekstrak dihasilkan dari 100 g / 0,10 = 1.000 gram serbuk simplisia = 1,0 kg simplisia).',
    clinicalReference: 'Hitungan Farmasetika Industri Obat Tradisional APDFI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-743',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Pada pengujian kromatografi lapis tipis (KLT) ekstrak daun singkong, diperoleh data jarak tempuh bercak solut (noda) sebesar 5,3 cm diukur dari garis awal penotolan, dan jarak tempuh eluen pelarut (fase gerak) sebesar 7,9 cm.',
    question: 'Berapakah nilai Retardation Factor (Rf) dan hRf dari senyawa tersebut?',
    options: [
      { key: 'A', text: 'Rf = 0,64 dan hRf = 64' },
      { key: 'B', text: 'Rf = 0,66 dan hRf = 66' },
      { key: 'C', text: 'Rf = 0,67 dan hRf = 67' },
      { key: 'D', text: 'Rf = 0,69 dan hRf = 69' },
      { key: 'E', text: 'Rf = 0,72 dan hRf = 72' }
    ],
    correctAnswer: 'C',
    explanation: 'Nilai Rf (Retardation Factor) = Jarak tempuh bercak / Jarak tempuh pelarut = 5,3 cm / 7,9 cm = 0,6708 = 0,67. Nilai hRf = Rf x 100 = 0,67 x 100 = 67.',
    clinicalReference: 'Farmakope Herbal Indonesia Edisi II Lampiran KLT',
    difficulty: 'Mudah'
  },
  {
    id: 'q-744',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Suatu produk sediaan obat bahan alam dari ekstrak daun Binahong (Anredera cordifolia) telah dibuktikan keamanannya melalui uji toksisitas akut dan subkronis, serta telah dibuktikan khasiatnya melalui uji farmakodinamik pada hewan uji (uji praklinis), dan bahan bakunya telah terstandardisasi.',
    question: 'Apakah golongan kategori obat tradisional resmi untuk produk tersebut?',
    options: [
      { key: 'A', text: 'Jamu' },
      { key: 'B', text: 'Obat Herbal Terstandar (OHT)' },
      { key: 'C', text: 'Fitofarmaka' },
      { key: 'D', text: 'Obat Herbal Asli Indonesia' },
      { key: 'E', text: 'Jamu Saintifikasi' }
    ],
    correctAnswer: 'B',
    explanation: 'Obat Herbal Terstandar (OHT) adalah sediaan obat bahan alam yang telah dibuktikan keamanan dan khasiatnya secara ilmiah melalui uji praklinis (pada hewan coba) dan bahan baku simplisia/ekstraknya telah terstandardisasi (ditandai dengan logo 3 buah bintang berwarna hijau). Fitofarmaka wajib telah melalui uji klinis pada manusia.',
    clinicalReference: 'Peraturan BPOM No. 32 Tahun 2019 tentang Persyaratan Keamanan dan Mutu Obat Tradisional',
    difficulty: 'Mudah'
  },
  {
    id: 'q-745',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Suatu fasilitas produksi obat bahan alam tradisional skala mikro hanya membuat sediaan tradisional bentuk luar seperti Parem, Pilis, dan Tapel tanpa membuat sediaan kapsul atau cairan obat dalam.',
    question: 'Apakah nama izin fasilitas produksi obat tradisional tersebut?',
    options: [
      { key: 'A', text: 'Industri Obat Tradisional (IOT)' },
      { key: 'B', text: 'Industri Ekstrak Bahan Alam (IEBA)' },
      { key: 'C', text: 'Usaha Kecil Obat Tradisional (UKOT)' },
      { key: 'D', text: 'Usaha Mikro Obat Tradisional (UMOT)' },
      { key: 'E', text: 'Industri Jamu Racikan' }
    ],
    correctAnswer: 'D',
    explanation: 'Sesuai Permenkes RI No. 006 Tahun 2012 tentang Industri dan Usaha Obat Tradisional: UMOT (Usaha Mikro Obat Tradisional) adalah usaha yang hanya membuat sediaan obat tradisional dalam bentuk param, tapel, pilis, cairan obat luar, dan rajangan.',
    clinicalReference: 'Permenkes No. 006 Tahun 2012 tentang Industri dan Usaha Obat Tradisional',
    difficulty: 'Mudah'
  },
  {
    id: 'q-746',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'TTK melakukan skrining fitokimia golongan alkaloid dari ekstrak herba sidaguri (Sida rhombifolia) dengan KLT. Pelat silika gel setelah dielusi disemprot dengan reagen penampak bercak khusus alkaloid yang menghasilkan noda bercak berwarna jingga kecokelatan.',
    question: 'Apakah nama pereaksi semprot yang digunakan tersebut?',
    options: [
      { key: 'A', text: 'Anisaldehid-asam sulfat' },
      { key: 'B', text: 'Kalium permanganat' },
      { key: 'C', text: 'Liebermann-Burchard' },
      { key: 'D', text: 'Dragendorff (Kalium bismut subnitrat iodida)' },
      { key: 'E', text: 'Sitroborat' }
    ],
    correctAnswer: 'D',
    explanation: 'Pereaksi Dragendorff (campuran bismut subnitrat, asam asetat glasial, dan kalium iodida) merupakan pereaksi semprot spesifik untuk mendeteksi senyawa alkaloid pada pelat KLT yang ditandai dengan terbentuknya bercak berwarna jingga, oranye, atau cokelat kemerahan.',
    clinicalReference: 'Metode Fitokimia Harborne & Farmakope Herbal Indonesia',
    difficulty: 'Mudah'
  },
  {
    id: 'q-747',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Seorang TTK akan mengekstraksi senyawa metabolit sekunder dari tanaman obat dengan metode maserasi. Berdasarkan literatur, senyawa aktif target memiliki sifat kepolaran semi-polar.',
    question: 'Pelarut organik manakah yang paling ideal digunakan untuk mengekstraksi senyawa semi-polar tersebut?',
    options: [
      { key: 'A', text: 'Air suling panas' },
      { key: 'B', text: 'Metanol murni' },
      { key: 'C', text: 'n-Heksana' },
      { key: 'D', text: 'Etil Asetat' },
      { key: 'E', text: 'Petroleum eter' }
    ],
    correctAnswer: 'D',
    explanation: 'Etil asetat adalah pelarut organik golongan SEMI-POLAR yang sangat efektif untuk menyari metabolit sekunder semi-polar (seperti aglikon flavonoid, terpenoid teroksigenasi). n-Heksana dan petroleum eter adalah pelarut non-polar, sedangkan air dan metanol adalah pelarut polar.',
    clinicalReference: 'Petunjuk Ekstraksi Bahan Alam Depkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-748',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Salah satu sediaan obat herbal terstandar di Indonesia mengandung ekstrak buah adas yang berkhasiat melegakan perut kembung dan memperbaiki sistem pencernaan.',
    question: 'Apakah nama latin tanaman (spesies) dari buah adas tersebut?',
    options: [
      { key: 'A', text: 'Foeniculum vulgare' },
      { key: 'B', text: 'Piper cubeba' },
      { key: 'C', text: 'Curcuma zanthorrhiza' },
      { key: 'D', text: 'Piper nigrum' },
      { key: 'E', text: 'Phaleria macrocarpa' }
    ],
    correctAnswer: 'A',
    explanation: 'Tanaman adas memiliki nama ilmiah Foeniculum vulgare Mill. (suku Apiaceae/Umbelliferae). Bagian yang digunakan adalah buahnya (Foeniculi fructus) yang mengandung minyak adas (anetol dan fenkon).',
    clinicalReference: 'Materia Medika Indonesia Jilid I & Farmakope Herbal Indonesia',
    difficulty: 'Mudah'
  },
  {
    id: 'q-749',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'TTK di industri obat tradisional menyiapkan bahan baku simplisia tanaman Pala (Myristica fragrans) untuk sediaan sirup penenang alami.',
    question: 'Bagian organ tanaman apakah yang dimaksud dengan simplisia Myristicae semen?',
    options: [
      { key: 'A', text: 'Fructus (Buah utuh)' },
      { key: 'B', text: 'Folium (Daun)' },
      { key: 'C', text: 'Flos (Bunga)' },
      { key: 'D', text: 'Semen (Biji)' },
      { key: 'E', text: 'Cortex (Kulit batang)' }
    ],
    correctAnswer: 'D',
    explanation: 'Myristicae semen adalah simplisia dari BIJI (semen) buah tanaman pala (Myristica fragrans Houtt) yang mengandung minyak atsiri miristisin dan safrol. Selubung bijinya disebut arilus atau fuli (Myristicae arillus / macis).',
    clinicalReference: 'Materia Medika Indonesia & Tatanama Latin Simplisia Farmasi',
    difficulty: 'Mudah'
  },
  {
    id: 'q-750',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Salah satu produk Fitofarmaka resmi di Indonesia adalah sediaan kapsul Tensigard yang mengandung kombinasi ekstrak herba seledri (Apium graveolens) dan ekstrak daun kumis kucing (Orthosiphon stamineus).',
    question: 'Apakah indikasi klinis dan khasiat utama yang telah dibuktikan lewat uji klinis pada sediaan fitofarmaka tersebut?',
    options: [
      { key: 'A', text: 'Antidiabetes oral penurun HbA1c' },
      { key: 'B', text: 'Antihipertensi penurun tekanan darah' },
      { key: 'C', text: 'Antihiperlipidemia penurun kolesterol LDL' },
      { key: 'D', text: 'Peluruh batu empedu' },
      { key: 'E', text: 'Imunostimulan daya tahan tubuh' }
    ],
    correctAnswer: 'B',
    explanation: 'Tensigard adalah sediaan fitofarmaka pertama di Indonesia untuk indikasi ANTIHIPERTENSI. Apium graveolens (seledri) mengandung apigenin yang bekerja sebagai vasodilator, dan Orthosiphon stamineus (kumis kucing) mengandung flavonoid sinensetin yang bekerja sebagai diuretik alami.',
    clinicalReference: 'Formularium Obat Herbal Asli Indonesia (FOHAI) Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-751',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Glikosida jantung steroid kardenolida (seperti Digoksin) memiliki daya kerja inotropik positif yang kuat dan spesifik meningkatkan kontraktilitas otot miokardium pada gagal jantung.',
    question: 'Tanaman apakah yang merupakan sumber botani penghasil metabolit sekunder digoksin tersebut?',
    options: [
      { key: 'A', text: 'Orthosiphon stamineus' },
      { key: 'B', text: 'Mangifera indica' },
      { key: 'C', text: 'Zingiber officinale' },
      { key: 'D', text: 'Digitalis lanata' },
      { key: 'E', text: 'Curcuma xanthorrhiza' }
    ],
    correctAnswer: 'D',
    explanation: 'Digoksin diisolasi dari daun tanaman Digitalis lanata (dan Digitalis purpurea / Foxglove). Tanaman ini mengandung glikosida jantung kardenolida yang menghambat pompa Na+/K+-ATPase pada sarkolema sel miokardium.',
    clinicalReference: 'Trease and Evans Pharmacognosy & Farmakope Indonesia VI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-752',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Seorang TTK melakukan pengujian parameter non-spesifik ekstrak kental asam jawa (Tamarindus indica). Sebanyak 2 gram ekstrak dipijarkan di dalam krus silikat pada tanur bersuhu 550 +- 25 C hingga seluruh senyawa karbon organik terdestruksi sempurna dan menguap.',
    question: 'Apakah parameter mutu non-spesifik yang ditentukan dari sisa zat anorganik tersebut?',
    options: [
      { key: 'A', text: 'Kadar air metode Karl Fischer' },
      { key: 'B', text: 'Kadar Abu Total' },
      { key: 'C', text: 'Susut pengeringan' },
      { key: 'D', text: 'Sisa pelarut organik' },
      { key: 'E', text: 'Kadar cemaran timbal' }
    ],
    correctAnswer: 'B',
    explanation: 'Uji Kadar Abu Total adalah parameter non-spesifik yang bertujuan memberikan gambaran kandungan mineral internal (endogen tanaman) dan mineral eksternal anorganik (seperti pasir, tanah silikat) setelah seluruh materi organik diabukan pada suhu tinggi.',
    clinicalReference: 'Parameter Standar Umum Ekstrak Tumbuhan Obat BPOM RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-753',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Sebanyak 5 gram ekstrak herba seledri dimaserasi dengan 100 mL etanol 96% selama 24 jam dengan pengocokan periodik. Filtrat kemudian disaring dan 20 mL filtrat diuapkan di atas cawan penguap hingga kering, lalu residu dikeringkan pada suhu 105 C hingga bobot tetap.',
    question: 'Apakah parameter spesifik ekstrak yang sedang ditentukan oleh TTK tersebut?',
    options: [
      { key: 'A', text: 'Kadar air ekstrak' },
      { key: 'B', text: 'Kadar Senyawa Larut dalam Etanol' },
      { key: 'C', text: 'Uji organoleptik ekstrak' },
      { key: 'D', text: 'Kadar abu tidak larut asam' },
      { key: 'E', text: 'Bobot jenis ekstrak' }
    ],
    correctAnswer: 'B',
    explanation: 'Pengujian tersebut merupakan penentuan parameter spesifik "Kadar Senyawa Larut dalam Etanol" yang mengukur persentase jumlah senyawa bioaktif yang mampu terekstraksi oleh pelarut etanol 96%.',
    clinicalReference: 'Farmakope Herbal Indonesia Edisi II & Monografi Ekstrak BPOM',
    difficulty: 'Mudah'
  },
  {
    id: 'q-754',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Seorang TTK menguji kandungan tanin dalam ekstrak kulit buah delima. Ekstrak dilarutkan dalam air panas, disaring, kemudian filtratnya ditetesi dengan larutan Gelatin 10%. Pengujian ini memberikan hasil positif.',
    question: 'Bagaimanakah perubahan visual yang ditunjukkan pada pengujian gelatin tersebut?',
    options: [
      { key: 'A', text: 'Terbentuk busa stabil madu' },
      { key: 'B', text: 'Terbentuk uap gas amonia' },
      { key: 'C', text: 'Terbentuk endapan putih (presipitasi protein-tanin)' },
      { key: 'D', text: 'Larutan berubah warna menjadi merah muda transparan' },
      { key: 'E', text: 'Terjadi pemisahan dua lapisan minyak dan air' }
    ],
    correctAnswer: 'C',
    explanation: 'Tanin memiliki sifat khas mampu mengikat dan mengendapkan protein (astringensia). Penambahan larutan Gelatin 10% pada filtrat yang mengandung tanin akan membentuk ENDAPAN PUTIH akibat presipitasi ikatan silang antara gugus fenol tanin dengan protein gelatin.',
    clinicalReference: 'Metode Fitokimia Harborne & Materia Medika Indonesia',
    difficulty: 'Mudah'
  },
  {
    id: 'q-755',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Penyarian minyak atsiri dari kuncup bunga cengkeh (Syzygium aromaticum) dilakukan dengan metode destilasi uap-air. Komponen kimia utama dalam minyak cengkeh memiliki aktivitas antiinflamasi dan analgesik lokal pada sakit gigi.',
    question: 'Apakah nama senyawa metabolit fenolik utama tersebut?',
    options: [
      { key: 'A', text: 'Gingerol' },
      { key: 'B', text: 'Kurkumin' },
      { key: 'C', text: 'Xanthorrhizol' },
      { key: 'D', text: 'Eugenol' },
      { key: 'E', text: 'Sinamaldehid' }
    ],
    correctAnswer: 'D',
    explanation: 'Minyak cengkeh (Oleum Caryophylli) mengandung Eugenol (sekitar 70-90%) sebagai komponen fenolik utama yang memberikan khasiat analgesik gigi, antiseptik, dan antiinflamasi.',
    clinicalReference: 'Farmakope Herbal Indonesia & Farmakope Indonesia VI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-756',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Suatu produk fitofarmaka lambung (seperti tablet Disflatyl/Inpepsa herbal) diformulasikan dari ekstrak kulit batang kayu manis nusantara yang berkhasiat mengatasi dispepsia.',
    question: 'Apakah nama ilmiah (spesies botani) dari tanaman kayu manis Indonesia tersebut?',
    options: [
      { key: 'A', text: 'Curcuma longa' },
      { key: 'B', text: 'Caesalpinia sappan' },
      { key: 'C', text: 'Cinnamomum burmannii' },
      { key: 'D', text: 'Cassia angustifolia' },
      { key: 'E', text: 'Capsicum annuum' }
    ],
    correctAnswer: 'C',
    explanation: 'Kayu manis khas Indonesia adalah Cinnamomum burmannii (Nees & T.Nees) Blume (famili Lauraceae). Kulit batangnya (Burmanni cortex) kaya akan sinamaldehid dan eugenol.',
    clinicalReference: 'Materia Medika Indonesia Jilid II & Farmakope Herbal Indonesia',
    difficulty: 'Mudah'
  },
  {
    id: 'q-757',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Sediaan fitofarmaka antinyeri sendi osteoartritis diproduksi dari ekstrak terstandar tanaman jahe (Zingiber officinale).',
    question: 'Organ tumbuhan (simplisia) bagian manakah yang digunakan untuk memproduksi ekstrak jahe tersebut?',
    options: [
      { key: 'A', text: 'Fructus (Buah)' },
      { key: 'B', text: 'Folium (Daun)' },
      { key: 'C', text: 'Bulbus (Umbi lapis)' },
      { key: 'D', text: 'Rhizoma (Rimpang)' },
      { key: 'E', text: 'Cortex (Kulit batang)' }
    ],
    correctAnswer: 'D',
    explanation: 'Zingiberis officinalidis rhizoma adalah simplisia dari bagian RIMPANG (rhizoma) tanaman jahe yang kaya akan senyawa gingerol dan shogaol berkhasiat antiinflamasi melalui inhibisi COX-2 dan TNF-alfa.',
    clinicalReference: 'Farmakope Herbal Indonesia Edisi II',
    difficulty: 'Mudah'
  },
  {
    id: 'q-758',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Pada ekstraksi simplisia menggunakan aparatus Soxhlet kontinu, terdapat pipa kaca kapiler melengkung di samping labu yang berfungsi menampung pelarut kondensat sampai batas atas, lalu mengalirkannya secara otomatis kembali ke labu penampung dan menandai selesainya 1 siklus ekstraksi.',
    question: 'Apakah nama komponen tabung kaca aparatus Soxhlet tersebut?',
    options: [
      { key: 'A', text: 'Kondensor bola' },
      { key: 'B', text: 'Thimble (selongsong simplisia)' },
      { key: 'C', text: 'Pipa Sifon (Siphon tube)' },
      { key: 'D', text: 'Labu alas bulat' },
      { key: 'E', text: 'Mantel pemanas' }
    ],
    correctAnswer: 'C',
    explanation: 'Pipa Sifon (Siphon tube) pada alat ekstraksi Soxhlet berfungsi menampung cairan pelarut yang telah mengekstraksi simplisia di dalam thimble. Ketika permukaan cairan mencapai puncak lengkungan sifon, efek kapiler dan gravitasi menguras seluruh cairan kembali ke labu alas bulat (menandai 1 siklus).',
    clinicalReference: 'Buku Petunjuk Praktikum Fitokimia & Farmasi Bahan Alam',
    difficulty: 'Mudah'
  },
  {
    id: 'q-759',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'TTK melakukan penyulingan minyak atsiri dengan metode distilasi uap dan air terhadap 750 gram simplisia kering daun kayu putih (Melaleuca leucadendron). Dari proses tersebut diperoleh minyak atsiri sebanyak 9,50 mL.',
    question: 'Berapakah persentase rendemen (% v/b) minyak atsiri kayu putih yang diperoleh?',
    options: [
      { key: 'A', text: '0,0126% v/b' },
      { key: 'B', text: '0,126% v/b' },
      { key: 'C', text: '1,27% v/b' },
      { key: 'D', text: '12,67% v/b' },
      { key: 'E', text: '126,7% v/b' }
    ],
    correctAnswer: 'C',
    explanation: 'Persentase rendemen minyak atsiri (% volume per bobot / v/b) = (Volume minyak yang diperoleh / Bobot simplisia awal) x 100% = (9,50 mL / 750 gram) x 100% = 0,012666... x 100% = 1,27% v/b.',
    clinicalReference: 'Farmakope Herbal Indonesia Lampiran Penetapan Kadar Minyak Atsiri',
    difficulty: 'Mudah'
  },
  {
    id: 'q-760',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'TTK bekerja di fasilitas Usaha Mikro Obat Tradisional (UMOT) yang memproduksi sediaan tradisional serupa bedak basah/cair kental dari rimpang lengkuas, jahe, kencur, daun cengkeh, dan pati beras. Sediaan ini digunakan secara turun temurun dengan cara dilumurkan pada bagian tubuh yang sakit, memar, atau pegal-pegal.',
    question: 'Apakah nama bentuk sediaan tradisional Indonesia tersebut?',
    options: [
      { key: 'A', text: 'Pilis' },
      { key: 'B', text: 'Param' },
      { key: 'C', text: 'Tapel' },
      { key: 'D', text: 'Pastiles' },
      { key: 'E', text: 'Pasta' }
    ],
    correctAnswer: 'B',
    explanation: 'Param adalah sediaan obat tradisional berbentuk padat, serbuk, atau bubur kental yang pemakaiannya dilumurkan/dibalurkan pada bagian tubuh (kaki, tangan, sendi) untuk meredakan pegal linu, kelelahan, dan memar.',
    clinicalReference: 'Keputusan Kepala BPOM tentang Bentuk Sediaan Obat Tradisional & UMOT',
    difficulty: 'Mudah'
  },
  {
    id: 'q-761',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Suatu usaha jamu memproduksi sediaan topikal tradisional pasca melahirkan yang mengandung serbuk kunyit, kencur, daun mint, dan bunga kenanga. Sediaan ini digunakan dengan cara dioleskan pada dahi/pelipis ibu yang bertujuan untuk meredakan sakit kepala, pusing, dan mata kunang-kunang.',
    question: 'Apakah nama sediaan tradisional khas Indonesia tersebut?',
    options: [
      { key: 'A', text: 'Pilis' },
      { key: 'B', text: 'Param' },
      { key: 'C', text: 'Tapel' },
      { key: 'D', text: 'Koyo' },
      { key: 'E', text: 'Rajangan' }
    ],
    correctAnswer: 'A',
    explanation: 'Pilis adalah sediaan obat tradisional yang digunakan secara khusus dengan cara DIOLESKAN PADA DAHI dan pelipis wanita setelah melahirkan untuk mengatasi sakit kepala, mata berkunang-kunang, dan melancarkan sirkulasi darah kepala.',
    clinicalReference: 'Peraturan BPOM tentang Obat Tradisional & Blueprint APDFI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-762',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Dalam paket perawatan tradisional ibu nifas pasca bersalin, terdapat sediaan herbal yang terbuat dari sirih, jahe, kapur sirih, jeruk nipis, dan kayu putih. Sediaan ini digunakan dengan cara dibalurkan langsung pada seluruh permukaan kulit perut ibu sebelum memakai bengkung (korset).',
    question: 'Apakah nama sediaan tradisional tersebut?',
    options: [
      { key: 'A', text: 'Pilis' },
      { key: 'B', text: 'Param' },
      { key: 'C', text: 'Tapel' },
      { key: 'D', text: 'Pastiles' },
      { key: 'E', text: 'Suppositoria' }
    ],
    correctAnswer: 'C',
    explanation: 'Tapel adalah sediaan obat tradisional Indonesia yang digunakan secara khusus dengan cara DIOLESKAN PADA AREA PERUT ibu pasca melahirkan untuk mengencangkan otot perut, meredakan nyeri nifas, dan mengecilkan rahim.',
    clinicalReference: 'Buku Etnofarmasi Obat Tradisional Indonesia & Materi APDFI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-763',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Industri obat tradisional membuat sediaan hisap herbal berbentuk lempengan pipih segi empat berbahan dasar gom arab, gelatin, dan sukrosa yang mengandung ekstrak Foeniculi fructus, Glycyrrhizae radix, dan peppermint oil untuk meredakan batuk dan melegakan tenggorokan gatal.',
    question: 'Apakah nama bentuk sediaan padat hisap tersebut?',
    options: [
      { key: 'A', text: 'Tablet effervescent' },
      { key: 'B', text: 'Tablet sublingual' },
      { key: 'C', text: 'Pastiles (Pastilles)' },
      { key: 'D', text: 'Pilulae' },
      { key: 'E', text: 'Kapsul keras' }
    ],
    correctAnswer: 'C',
    explanation: 'Pastiles (Pastilles) adalah sediaan padat hisap berbentuk lempengan pipih segi empat atau lingkaran dengan basis lentur/kenyal (gom arab, gelatin, atau sukrosa) yang dirancang melarut perlahan di dalam mulut untuk memberikan efek lokal pada mukosa tenggorokan.',
    clinicalReference: 'Farmakope Indonesia Edisi V & Buku Bentuk Sediaan Farmasi',
    difficulty: 'Mudah'
  },
  {
    id: 'q-764',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Industri herbal mengembangkan produk minuman kesehatan serbuk granul instan yang mengandung ekstrak jeruk nipis dan kayu manis. Ke dalam formula ditambahkan Natrium Bikarbonat dan Asam Sitrat/Tartrat yang bila dilarutkan dalam air akan melepaskan gelembung gas karbon dioksida (CO2).',
    question: 'Apakah nama bentuk sediaan minuman serbuk tersebut?',
    options: [
      { key: 'A', text: 'Serbuk Efervesen (Effervescent)' },
      { key: 'B', text: 'Serbuk bagi (Pulveres)' },
      { key: 'C', text: 'Pastiles' },
      { key: 'D', text: 'Granul salut enterik' },
      { key: 'E', text: 'Suspensi rekonstitusi' }
    ],
    correctAnswer: 'A',
    explanation: 'Sediaan Efervesen (Effervescent) adalah bentuk sediaan serbuk atau granul yang mengandung campuran asam organik (asam sitrat/tartrat) dan garam karbonat/bikarbonat (natrium bikarbonat) yang bereaksi menghasilkan gas CO2 saat terkena air, memberikan sensasi segar dan mempercepat kelarutan ekstrak.',
    clinicalReference: 'Farmakope Indonesia Edisi VI & Teknologi Farmasi Industri',
    difficulty: 'Mudah'
  },
  {
    id: 'q-765',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Suatu pabrik jamu memproduksi obat tradisional pegal linu berbahan dasar ekstrak meniran dan lempuyang. Produk akhir dicetak dalam bentuk bulatan massa padat kecil berdiameter 5-10 mm dan berwarna cokelat tua.',
    question: 'Apakah nama bentuk sediaan obat tradisional tersebut?',
    options: [
      { key: 'A', text: 'Pastiles' },
      { key: 'B', text: 'Tablet salut selaput' },
      { key: 'C', text: 'Pil (Pilulae)' },
      { key: 'D', text: 'Kapsul gelatin lunak' },
      { key: 'E', text: 'Bolo' }
    ],
    correctAnswer: 'C',
    explanation: 'Pil (Pilulae) adalah sediaan obat tradisional padat berbentuk bulat massa padat kecil dengan berat 100-500 mg yang dibuat dari serbuk simplisia atau ekstrak dengan bantuan bahan pengikat dan bahan penabur (lycopodium/talk).',
    clinicalReference: 'Farmakope Indonesia Edisi III & Formularium Nasional',
    difficulty: 'Mudah'
  },
  {
    id: 'q-766',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'TTK melakukan skrining fitokimia ekstrak daun mengkudu (Morinda citrifolia). Ekstrak dilarutkan dalam kloroform, ditambahkan asam asetat anhidrat, kemudian melalui dinding tabung dialirkan asam sulfat pekat secara hati-hati (Uji Liebermann-Burchard). Hasil pengamatan menunjukkan terbentuknya cincin berwarna violet/ungu kemerahan pada perbatasan dua cairan.',
    question: 'Apakah golongan senyawa metabolit sekunder yang dinyatakan positif dari uji tersebut?',
    options: [
      { key: 'A', text: 'Tanin' },
      { key: 'B', text: 'Saponin' },
      { key: 'C', text: 'Alkaloid' },
      { key: 'D', text: 'Triterpenoid' },
      { key: 'E', text: 'Polifenol' }
    ],
    correctAnswer: 'D',
    explanation: 'Uji Liebermann-Burchard digunakan untuk membedakan triterpenoid dan steroid. Pembentukan cincin/warna merah ungu, violet, atau merah muda menunjukkan adanya senyawa TRITERPENOID, sedangkan warna hijau atau biru menunjukkan adanya senyawa STEROID.',
    clinicalReference: 'Metode Fitokimia Harborne & Analisis Kimia Tumbuhan Obat',
    difficulty: 'Mudah'
  },
  {
    id: 'q-767',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'TTK melakukan identifikasi metabolit sekunder ekstrak kulit jeruk nipis dengan KLT. Pelat silika gel setelah dielusi disemprot dengan larutan AlCl3 dan asam sitroborat. Di bawah lampu sinar UV 366 nm timbul bercak noda yang berfluoresensi kuning kehijauan cerah.',
    question: 'Apakah golongan metabolit sekunder yang teridentifikasi dari pengujian tersebut?',
    options: [
      { key: 'A', text: 'Tanin' },
      { key: 'B', text: 'Saponin' },
      { key: 'C', text: 'Alkaloid' },
      { key: 'D', text: 'Flavonoid' },
      { key: 'E', text: 'Triterpenoid' }
    ],
    correctAnswer: 'D',
    explanation: 'Pereaksi semprot AlCl3 (Aluminium Klorida) dan Sitroborat (asam borat + asam sitrat) merupakan pereaksi khas untuk FLAVONOID. Ion aluminium membentuk kompleks khelat dengan gugus hidroksil fenol dan gugus karbonil pada inti flavon/flavonol yang menghasilkan fluoresensi kuning kehijauan cerah di bawah sinar UV panjang gelombang 366 nm.',
    clinicalReference: 'Kromatografi Lapis Tipis Egon Stahl & Farmakope Herbal Indonesia',
    difficulty: 'Sedang'
  },
  {
    id: 'q-768',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Kulit buah manggis (Garcinia mangostana) kaya akan senyawa santon (mangostin) yang memiliki aktivitas antioksidan penangkal radikal bebas. Uji penentuan aktivitas antioksidan dilakukan secara in vitro menggunakan radikal bebas sintetik stabil berwarna ungu pekat yang akan memudar menjadi kuning jika tereduksi oleh senyawa antioksidan.',
    question: 'Apakah nama metode pengujian antioksidan spektrofotometri in vitro tersebut?',
    options: [
      { key: 'A', text: 'Uji DPPH (2,2-diphenyl-1-picrylhydrazyl)' },
      { key: 'B', text: 'Uji Liebermann-Burchard' },
      { key: 'C', text: 'Uji Keller-Kiliani' },
      { key: 'D', text: 'Uji Mayer' },
      { key: 'E', text: 'Uji Shinoda' }
    ],
    correctAnswer: 'A',
    explanation: 'Metode DPPH (2,2-difenil-1-pikrilhidrazil) adalah metode standar in vitro yang paling luas digunakan untuk mengukur kapasitas antioksidan suatu ekstrak. DPPH bertindak sebagai radikal bebas stabil berwarna ungu pekat (absorbansi puncak ~517 nm) yang akan berubah menjadi kuning pucat sebanding dengan kemampuan donor hidrogen/elektron antioksidan ekstrak.',
    clinicalReference: 'Standard Protocols for Antioxidant Assays & Farmakope Herbal Indonesia',
    difficulty: 'Mudah'
  },
  {
    id: 'q-769',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Seorang TTK mengekstraksi 200 gram serbuk kering daun sirsak (Annona muricata) dengan pelarut etanol 70% menggunakan metode maserasi dingin. Setelah maserat dipekatkan dengan rotary evaporator, diperoleh ekstrak kental daun sirsak sebanyak 30,32 gram.',
    question: 'Berapakah persentase rendemen (% b/b) ekstrak daun sirsak yang diperoleh?',
    options: [
      { key: 'A', text: '10,16%' },
      { key: 'B', text: '12,18%' },
      { key: 'C', text: '13,68%' },
      { key: 'D', text: '15,16%' },
      { key: 'E', text: '17,12%' }
    ],
    correctAnswer: 'D',
    explanation: 'Persentase rendemen (% b/b) = (Bobot ekstrak kental / Bobot simplisia awal) x 100% = (30,32 gram / 200 gram) x 100% = 0,1516 x 100% = 15,16%.',
    clinicalReference: 'Petunjuk Praktikum Fitokimia & Perhitungan Ekstrak Vokasi',
    difficulty: 'Mudah'
  },
  {
    id: 'q-770',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien datang ke apotek mengeluhkan nyeri gigi berdenyut dan meminta obat tablet Asam Mefenamat 500 mg tanpa resep dokter. Berdasarkan Keputusan Menteri Kesehatan No. 924/Menkes/Per/X/1993 tentang Daftar Obat Wajib Apotek No. 2 (DOWA 2), Asam Mefenamat dapat diserahkan dengan batasan jumlah tertentu.',
    question: 'Berapakah jumlah maksimal tablet Asam Mefenamat yang boleh diserahkan kepada pasien tersebut?',
    options: [
      { key: 'A', text: 'Maksimal 5 tablet' },
      { key: 'B', text: 'Maksimal 10 tablet' },
      { key: 'C', text: 'Maksimal 20 tablet' },
      { key: 'D', text: 'Maksimal 30 tablet' },
      { key: 'E', text: 'Maksimal 40 tablet' }
    ],
    correctAnswer: 'C',
    explanation: 'Berdasarkan Keputusan Menteri Kesehatan No. 924/Menkes/Per/X/1993 (DOWA No. 2), obat Asam Mefenamat sediaan tablet dapat diserahkan tanpa resep dokter untuk indikasi nyeri akut dengan jumlah MAKSIMAL 20 TABLET.',
    clinicalReference: 'Kepmenkes No. 924/Menkes/Per/X/1993 tentang DOWA No. 2',
    difficulty: 'Mudah'
  },
  {
    id: 'q-771',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Pasien penderita dispepsia dan refluks lambung datang ke apotek ingin membeli kapsul Omeprazol 20 mg tanpa resep dokter. Berdasarkan Keputusan Menteri Kesehatan No. 1176/Menkes/SK/X/1999 tentang Daftar Obat Wajib Apotek No. 3 (DOWA 3), sediaan Omeprazol dapat diserahkan dengan batasan ketat.',
    question: 'Berapakah jumlah maksimal kapsul Omeprazol 20 mg yang dapat diserahkan kepada pasien tersebut?',
    options: [
      { key: 'A', text: 'Maksimal 7 kapsul' },
      { key: 'B', text: 'Maksimal 10 kapsul' },
      { key: 'C', text: 'Maksimal 14 kapsul' },
      { key: 'D', text: 'Maksimal 20 kapsul' },
      { key: 'E', text: 'Maksimal 30 kapsul' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Kepmenkes No. 1176/Menkes/SK/X/1999 (DOWA No. 3), obat Omeprazol 20 mg untuk dispepsia/hiperasiditas lambung dapat diserahkan tanpa resep dokter maksimal 7 KAPSUL (untuk pengobatan jangka pendek 1 minggu), dengan anjuran konsultasi dokter bila gejala menetap.',
    clinicalReference: 'Kepmenkes No. 1176/Menkes/SK/X/1999 tentang DOWA No. 3',
    difficulty: 'Mudah'
  },
  {
    id: 'q-772',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien datang ke apotek mengeluhkan nyeri ulu hati dan mual. Pasien meminta obat Ranitidin tablet 150 mg tanpa resep. Berdasarkan ketentuan Daftar Obat Wajib Apotek No. 3 (DOWA 3), Ranitidin 150 mg dapat diserahkan oleh apoteker/TTK.',
    question: 'Berapakah jumlah maksimal tablet Ranitidin 150 mg yang boleh diserahkan pada pasien tersebut?',
    options: [
      { key: 'A', text: 'Maksimal 5 tablet' },
      { key: 'B', text: 'Maksimal 10 tablet' },
      { key: 'C', text: 'Maksimal 15 tablet' },
      { key: 'D', text: 'Maksimal 20 tablet' },
      { key: 'E', text: 'Maksimal 30 tablet' }
    ],
    correctAnswer: 'B',
    explanation: 'Sesuai Kepmenkes No. 1176/Menkes/SK/X/1999 (DOWA No. 3), Ranitidin 150 mg dapat diserahkan tanpa resep dokter sebanyak MAKSIMAL 10 TABLET.',
    clinicalReference: 'Kepmenkes No. 1176/Menkes/SK/X/1999 tentang DOWA No. 3',
    difficulty: 'Mudah'
  },
  {
    id: 'q-773',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Dalam penataan obat di gudang dan ruang peracikan apotek, TTK mengutamakan penataan sediaan farmasi di mana obat yang memiliki tanggal kedaluwarsa (expiration date) lebih dekat harus diletakkan di barisan paling depan agar diserahkan terlebih dahulu kepada pasien.',
    question: 'Apakah nama prinsip sistem penataan obat berdasarkan tanggal kedaluwarsa tersebut?',
    options: [
      { key: 'A', text: 'First In First Out (FIFO)' },
      { key: 'B', text: 'First Expired First Out (FEFO)' },
      { key: 'C', text: 'Last In First Out (LIFO)' },
      { key: 'D', text: 'Economic Order Quantity (EOQ)' },
      { key: 'E', text: 'Fast Moving Slow Moving' }
    ],
    correctAnswer: 'B',
    explanation: 'Prinsip FEFO (First Expired First Out) adalah sistem manajemen penyimpanan obat di mana obat yang mendekati tanggal kedaluwarsa diletakkan di depan dan dikeluarkan lebih dulu untuk meminimalkan risiko obat rusak dan kedaluwarsa di gudang. FIFO (First In First Out) mendasarkan pada tanggal kedatangan barang.',
    clinicalReference: 'Permenkes No. 73 Tahun 2016 tentang Standar Pelayanan Farmasi di Apotek',
    difficulty: 'Mudah'
  }
];
