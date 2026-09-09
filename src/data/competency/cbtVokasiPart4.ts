import { ExamQuestion } from '../competencyExamData';

/**
 * BANK SOAL CBT UKTVF / APDFI (UJI KOMPETENSI TENAGA VOKASI FARMASI D3)
 * BAGIAN 4: EVALUASI MUTU, PERACIKAN, LOGISTIK RUMAH SAKIT & ALKES MEDIS
 * Standar Nasional Asosiasi Pendidikan Diploma Farmasi Indonesia (APDFI)
 * Meliputi: Alkes BMHP, Peracikan Sediaan, QC Steril/Nonsteril, DOWA & Manajemen Apotek
 */
export const CBT_VOKASI_PART_4: ExamQuestion[] = [
  {
    id: 'q-834',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Dalam pembuatan sediaan emulsi tipe minyak dalam air (M/A) minyak ikan (Oleum Iecoris Aselli) di laboratorium farmasetika, TTK menggunakan gom arab (PGA) sebagai emulgator alami untuk membentuk korpus emulsi primer yang stabil sebelum diencerkan.',
    question: 'Berapakah perbandingan bobot antara Minyak : Air : Gom Arab (PGA) yang tepat untuk membuat korpus emulsi primer minyak lemak tersebut?',
    options: [
      { key: 'A', text: '4 : 2 : 1' },
      { key: 'B', text: '3 : 2 : 1' },
      { key: 'C', text: '2 : 2 : 1' },
      { key: 'D', text: '1 : 1 : 1' },
      { key: 'E', text: '4 : 1 : 2' }
    ],
    correctAnswer: 'A',
    explanation: 'Aturan baku farmasetika Continental Method (metode gom kering) untuk pembuatan korpus emulsi primer dari minyak lemak (fixed oils seperti oleum iecoris aselli, oleum olivarum, oleum arachidis) menggunakan perbandingan 4 bagian Minyak : 2 bagian Air : 1 bagian Gom Arab (4:2:1). Untuk minyak atsiri perbandingannya adalah 2:2:1, dan untuk minyak mineral (parafin cair) adalah 3:2:1.',
    clinicalReference: 'Farmakope Indonesia Edisi III & Remington: The Science and Practice of Pharmacy',
    difficulty: 'Sedang'
  },
  {
    id: 'q-835',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Seorang TTK mengamati sampel emulsi minyak ikan yang telah disimpan selama 2 minggu di rak laboratorium. Terlihat adanya pemisahan fase minyak yang berada di lapisan atas dan fase air di bawah, namun ketika botol dikocok ringan beberapa kali, sediaan kembali menyatu homogen seperti semula.',
    question: 'Fenomena ketidakstabilan fisik emulsi apakah yang terjadi pada sediaan tersebut?',
    options: [
      { key: 'A', text: 'Cracking (Breaking)' },
      { key: 'B', text: 'Creaming' },
      { key: 'C', text: 'Inversi fase' },
      { key: 'D', text: 'Koalesensi permanen' },
      { key: 'E', text: 'Caking' }
    ],
    correctAnswer: 'B',
    explanation: 'Creaming adalah fenomena pemisahan emulsi di mana tetesan fase terdispersi berkumpul di permukaan atas (upward creaming) atau dasar wadah karena perbedaan massa jenis, namun lapisan antarmuka emulgator masih utuh sehingga sediaan bersifat REVERSIBEL (dapat terdispersi homogen kembali dengan pengocokan ringan). Berbeda dengan Cracking yang bersifat ireversibel.',
    clinicalReference: 'Martin Farmasi Fisika & Lachman Teori dan Praktik Farmasi Industri',
    difficulty: 'Mudah'
  },
  {
    id: 'q-836',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Pada sediaan emulsi parafin cair yang disimpan pada suhu ekstrem, lapisan film monomolekuler emulgator pada permukaan tetesan minyak mengalami kerusakan total, sehingga globul-globul minyak bergabung membentuk lapisan minyak bebas yang terpisah secara permanen dan tidak dapat disatukan lagi meskipun dikocok kuat.',
    question: 'Apakah nama fenomena kerusakan emulsi yang bersifat ireversibel tersebut?',
    options: [
      { key: 'A', text: 'Flokulasi' },
      { key: 'B', text: 'Creaming' },
      { key: 'C', text: 'Cracking (Breaking)' },
      { key: 'D', text: 'Swelling' },
      { key: 'E', text: 'Tiksotropi' }
    ],
    correctAnswer: 'C',
    explanation: 'Cracking atau Breaking adalah peristiwa rusaknya lapisan pelindung emulgator di sekeliling tetesan globul yang diikuti penggabungan globul (koalesensi sempurna) sehingga fase minyak dan fase air memisah secara permanen dan IREVERSIBEL (tidak dapat kembali homogen dengan pengocokan). Sediaan harus dibuang dan diformulasi ulang.',
    clinicalReference: 'Ilmu Resep & Bentuk Sediaan Farmasi Semisolid dan Cair',
    difficulty: 'Mudah'
  },
  {
    id: 'q-837',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Dalam formulasi sediaan suspensi kloramfenikol palmitat, sistem dispersi yang terbentuk adalah suspensi deflokulasi. Partikel-partikel obat mengendap secara lambat membentuk endapan kompak padat di dasar botol yang sangat sulit atau tidak dapat didispersikan kembali saat botol dikocok.',
    question: 'Apakah istilah farmasetik untuk endapan keras yang tidak dapat terdispersi kembali tersebut?',
    options: [
      { key: 'A', text: 'Flokulat' },
      { key: 'B', text: 'Caking (Clay)' },
      { key: 'C', text: 'Creaming' },
      { key: 'D', text: 'Sineresis' },
      { key: 'E', text: 'Swelling' }
    ],
    correctAnswer: 'B',
    explanation: 'Caking (agregat kompak / clay) adalah pembentukan endapan keras yang terjadi pada sistem suspensi deflokulasi, di mana partikel-partikel terdispersi mengisi rongga-rongga antarpartikel sehingga terjadi penggabungan kristal yang rapat akibat gaya tarik Van der Waals yang kuat, menyebabkan endapan tidak dapat didispersikan kembali.',
    clinicalReference: 'Martin Farmasi Fisika (Sistem Dispersi Kasar Suspensi Farmasi)',
    difficulty: 'Mudah'
  },
  {
    id: 'q-838',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'TTK di instalasi farmasi rumah sakit diminta menyiapkan alat-alat gelas laboratorium (labu ukur, cawan porselen, pipet ukur) dan serbuk steril yang tahan pemanasan tinggi tanpa air.',
    question: 'Apakah metode sterilisasi yang paling tepat digunakan untuk alat gelas laboratorium tersebut dan berapa suhunya?',
    options: [
      { key: 'A', text: 'Autoklaf uap air panas bertekanan 121 °C selama 15 menit' },
      { key: 'B', text: 'Oven sterilisasi udara panas kering 160 °C - 170 °C selama 1 - 2 jam' },
      { key: 'C', text: 'Penyinaran lampu ultraviolet selama 30 menit' },
      { key: 'D', text: 'Filtrasi membran bakteri 0,22 mikrometer' },
      { key: 'E', text: 'Gas etilen oksida suhu ruang' }
    ],
    correctAnswer: 'B',
    explanation: 'Alat-alat gelas laboratorium, porselen, jarum logam, serta bahan minyak atau serbuk tahan panas disterilisasi menggunakan metode Panas Kering (Dry Heat Sterilization) menggunakan Oven pada suhu 160 °C s/d 170 °C selama minimal 1-2 jam (atau 180 °C selama 30 menit). Panas kering membunuh mikroba melalui proses oksidasi protein sel.',
    clinicalReference: 'Farmakope Indonesia Edisi VI (Bab Sterilisasi Panas Kering <1371>) & CPOB',
    difficulty: 'Sedang'
  },
  {
    id: 'q-839',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Bagian produksi sediaan steril rumah sakit memproses larutan injeksi vitamin C dan insulin yang memiliki sifat termolabil (rusak bila dipanaskan dengan autoklaf maupun oven).',
    question: 'Apakah metode sterilisasi non-termal yang dipersyaratkan Farmakope Indonesia untuk larutan termolabil tersebut?',
    options: [
      { key: 'A', text: 'Filtrasi membran steril dengan ukuran pori 0,22 mikrometer' },
      { key: 'B', text: 'Pemanasan uap mengalir 100 °C (Tyndalisasi)' },
      { key: 'C', text: 'Radiasi sinar infra merah' },
      { key: 'D', text: 'Pasteurisasi 65 °C selama 30 menit' },
      { key: 'E', text: 'Filtrasi membran kasar 5,0 mikrometer' }
    ],
    correctAnswer: 'A',
    explanation: 'Untuk sediaan larutan obat yang tidak tahan pemanasan (termolabil), sterilisasi dilakukan secara mekanik dengan metode Filtrasi Membran Aseptik menggunakan saringan membran steril berukuran pori nominal 0,22 mikrometer (atau 0,2 mikrometer) yang mampu menahan bakteri patogen dan spora.',
    clinicalReference: 'Farmakope Indonesia Edisi VI (Sterilisasi dengan Penyaringan <1371>)',
    difficulty: 'Mudah'
  },
  {
    id: 'q-840',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Dalam peracikan suppositoria dengan basis Oleum Cacao (lemak coklat), TTK harus sangat berhati-hati saat melebur basis di atas penangas air (water bath) dan menjaga suhu tidak melebihi 35 °C.',
    question: 'Apakah yang akan terjadi jika Oleum Cacao dipanaskan hingga melebihi suhu leburnya (> 36 °C)?',
    options: [
      { key: 'A', text: 'Oleum Cacao menguap habis menjadi gas' },
      { key: 'B', text: 'Terbentuk bentuk polimorfisme metastabil (alfa dan gamma) dengan titik lebur sangat rendah sehingga sediaan tidak mau membeku pada suhu kamar' },
      { key: 'C', text: 'Titik lebur Oleum Cacao naik drastis menjadi di atas 50 °C' },
      { key: 'D', text: 'Oleum Cacao berubah menjadi sediaan gel hidrofilik' },
      { key: 'E', text: 'Terjadi pengendapan kristal garam' }
    ],
    correctAnswer: 'B',
    explanation: 'Oleum Cacao memiliki sifat polimorfisme (banyak bentuk kristal). Pemanasan berlebih di atas 36 °C akan merusak kristal inti stabil (bentuk beta dengan titik lebur 34-35 °C) dan beralih ke bentuk kristal metastabil (alfa titik lebur 22 °C dan gamma 18 °C). Akibatnya suppositoria cair dan gagal memadat pada suhu kamar.',
    clinicalReference: 'Farmakope Indonesia Edisi VI & Teori Formulasi Suppositoria Lachman',
    difficulty: 'Sedang'
  },
  {
    id: 'q-841',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Seorang TTK di apotek menerima lembar resep dari dokter spesialis penyakit dalam. TTK melakukan pengkajian awal (skrining administratif) sesuai Permenkes No. 73 Tahun 2016 sebelum menyiapkan obat.',
    question: 'Manakah data berikut yang merupakan unsur pengkajian administratif resep?',
    options: [
      { key: 'A', text: 'Nama dokter, nomor SIP, alamat, tanggal resep, paraf dokter, nama, umur dan berat badan pasien' },
      { key: 'B', text: 'Kesesuaian dosis terapi dan waktu penggunaan obat' },
      { key: 'C', text: 'Interaksi obat dan efek samping obat' },
      { key: 'D', text: 'Inkompatibilitas fisikokimia campuran bahan obat' },
      { key: 'E', text: 'Bentuk sediaan dan stabilitas sediaan obat' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Permenkes No. 73 Tahun 2016, pengkajian resep meliputi 3 aspek: 1) Administratif (nama/SIP/alamat dokter, tanggal, paraf, nama/umur/jenis kelamin/BB pasien); 2) Farmasetik (bentuk dan kekuatan sediaan, dosis, jumlah, stabilitas, inkompatibilitas); 3) Klinis (indikasi, dosis, duplikasi, alergi, interaksi obat).',
    clinicalReference: 'Permenkes No. 73 Tahun 2016 tentang Standar Pelayanan Kefarmasian di Apotek',
    difficulty: 'Mudah'
  },
  {
    id: 'q-842',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Saat melakukan pemeriksaan stok berkala (stock opname), TTK menemukan 15 botol sirup parasetamol dan 8 strip antibiotik yang telah melewati tanggal kedaluwarsa (expired date). Obat-obat tersebut segera dikeluarkan dari etalase penjualan.',
    question: 'Dimanakah obat kedaluwarsa tersebut harus disimpan sementara sebelum dilakukan proses pemusnahan resmi?',
    options: [
      { key: 'A', text: 'Di lantai gudang dekat pintu keluar' },
      { key: 'B', text: 'Di area/lemari karantina khusus yang terpisah secara fisik dan terkunci, berlabel "OBAT KADALUWARSA / RUSAK - JANGAN DIJUAL"' },
      { key: 'C', text: 'Digabung di rak obat bebas' },
      { key: 'D', text: 'Disimpan di toilet apotek' },
      { key: 'E', text: 'Langsung dibuang ke bak sampah umum' }
    ],
    correctAnswer: 'B',
    explanation: 'Sesuai standar CDOB (Cara Distribusi Obat yang Baik) dan Permenkes 73/2016, obat kedaluwarsa, rusak, atau ditarik (recall) wajib segera dipisahkan secara fisik dan disimpan di area atau lemari karantina terpisah, terkunci, serta diberi label identitas penandaan yang jelas agar tidak tertukar atau terdistribusi kembali ke pasien.',
    clinicalReference: 'Pedoman Teknis CDOB Badan POM & Permenkes No. 73 Tahun 2016',
    difficulty: 'Mudah'
  },
  {
    id: 'q-843',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Apoteker bersama TTK di apotek akan melakukan pemusnahan obat kedaluwarsa golongan obat keras non-narkotika. Berdasarkan Permenkes No. 73 Tahun 2016, pemusnahan obat di apotek harus memenuhi prosedur legal yang berlaku.',
    question: 'Siapakah saksi yang dipersyaratkan dalam pemusnahan obat keras non-narkotika/psikotropika di apotek dan dokumen apa yang wajib dibuat?',
    options: [
      { key: 'A', text: 'Disaksikan oleh Tenaga Teknis Kefarmasian (TTK) lain yang memiliki STRTTK dan dibuat Berita Acara Pemusnahan (BAP)' },
      { key: 'B', text: 'Wajib disaksikan oleh pejabat polisi dan kepala desa' },
      { key: 'C', text: 'Cukup disaksikan oleh kasir apotek tanpa dokumen' },
      { key: 'D', text: 'Wajib mengundang perwakilan Kementerian Kesehatan dari Jakarta' },
      { key: 'E', text: 'Disaksikan oleh pasien apotek' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Permenkes No. 73 Tahun 2016, pemusnahan obat selain narkotika dan psikotropika di apotek dilakukan oleh Apoteker Pengelola Apotek (APA) dan disaksikan oleh sekurang-kurangnya seorang petugas kefarmasian (TTK) yang memiliki STRTTK, dengan membuat Berita Acara Pemusnahan (BAP) rangkap yang dilaporkan ke Dinkes Kabupaten/Kota dan Balai POM.',
    clinicalReference: 'Permenkes No. 73 Tahun 2016 Pasal 8 (Pemusnahan dan Penarikan Sediaan Farmasi)',
    difficulty: 'Sedang'
  },
  {
    id: 'q-844',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'TTK di apotek menyiapkan dokumen Surat Pesanan untuk obat golongan Obat-Obat Tertentu (OOT) sesuai Peraturan Badan Pengawas Obat dan Makanan (BPOM) No. 10 Tahun 2019.',
    question: 'Manakah kelompok obat berikut yang seluruhnya termasuk dalam kategori Obat-Obat Tertentu (OOT) yang kerap disalahgunakan?',
    options: [
      { key: 'A', text: 'Tramadol, Triheksifenidil, Klorpromazin, Amitriptilin, Haloperidol, dan Dekstrometorfan' },
      { key: 'B', text: 'Diazepam, Alprazolam, Klobazam, Lorazepam' },
      { key: 'C', text: 'Kodein, Morfin, Petidin, Fentanil' },
      { key: 'D', text: 'Pseudoefedrin, Efedrin, Fenilpropanolamin' },
      { key: 'E', text: 'Amoksisilin, Siprofloksasin, Sefadroksil' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Peraturan BPOM No. 10 Tahun 2019, kriteria Obat-Obat Tertentu (OOT) yang sering disalahgunakan terdiri atas 6 zat aktif: Tramadol, Triheksifenidil, Klorpromazin, Amitriptilin, Haloperidol, dan Dekstrometorfan.',
    clinicalReference: 'Peraturan BPOM No. 10 Tahun 2019 tentang Pedoman Pengelolaan Obat-Obat Tertentu (OOT)',
    difficulty: 'Mudah'
  },
  {
    id: 'q-845',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Di rumah sakit, penanganan limbah medis padat berbahaya dan beracun (B3) dikelola berdasarkan jenis risiko bahayanya dengan menggunakan kantong plastik berstandar warna internasional.',
    question: 'Warna kantong plastik manakah yang digunakan khusus untuk wadah limbah sitotoksik / sitostatika kemoterapi karsinogenik?',
    options: [
      { key: 'A', text: 'Kuning (Infeksius)' },
      { key: 'B', text: 'Ungu (Sitotoksik / Sitostatika)' },
      { key: 'C', text: 'Merah (Radioaktif)' },
      { key: 'D', text: 'Cokelat (Kimia / Farmasi kedaluwarsa)' },
      { key: 'E', text: 'Hitam (Domestik non-medis)' }
    ],
    correctAnswer: 'B',
    explanation: 'Menurut Permenkes No. 2 Tahun 2023 dan standar pengelolaan limbah B3 medis: Kantong UNGU digunakan untuk limbah sitotoksik/sitostatika; KUNING untuk limbah medis infeksius/patologi; MERAH untuk radioaktif; COKELAT untuk kimia/farmasi non-sitotoksik; dan HITAM untuk limbah domestik umum.',
    clinicalReference: 'Permenkes No. 2 Tahun 2023 tentang Kesehatan Lingkungan & Pengelolaan Limbah Fasyankes',
    difficulty: 'Mudah'
  },
  {
    id: 'q-846',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Seorang TTK melakukan uji skrining fitokimia senyawa triterpenoid dan steroid pada ekstrak herba pegagan (Centella asiatica). Ekstrak dilarutkan dalam kloroform, ditambahkan 2 mL asam asetat anhidrat, lalu ditetesi 1 mL asam sulfat pekat (H2SO4 pekat) secara perlahan melalui dinding tabung.',
    question: 'Apakah nama reaksi uji fitokimia tersebut dan bagaimanakah pengamatan warna untuk triterpenoid?',
    options: [
      { key: 'A', text: 'Uji Liebermann-Burchard; terbentuk warna merah keunguan' },
      { key: 'B', text: 'Uji Salkowski; terbentuk warna biru muda' },
      { key: 'C', text: 'Uji Wilstatter; terbentuk warna merah kersen' },
      { key: 'D', text: 'Uji Bate-Smith; terbentuk warna jingga' },
      { key: 'E', text: 'Uji Molisch; terbentuk cincin coklat' }
    ],
    correctAnswer: 'A',
    explanation: 'Reaksi Liebermann-Burchard menggunakan asam asetat anhidrat dan H2SO4 pekat. Hasil positif untuk senyawa Triterpenoid ditandai dengan terbentuknya cincin atau larutan berwarna MERAH KEUNGUAN, sedangkan untuk Steroid menghasilkan warna HIJAU KEBIRUAN.',
    clinicalReference: 'Farmakope Herbal Indonesia Edisi II (Metode Identifikasi Fitokimia Steroid/Triterpenoid)',
    difficulty: 'Sedang'
  },
  {
    id: 'q-847',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'TTK di laboratorium fitokimia mengekstraksi senyawa kurkuminoid dari rimpang kunyit yang bersifat termolabil. Serbuk simplisia direndam dalam pelarut etanol 96% dalam bejana tertutup terlindung dari cahaya matahari dengan pengocokan berulang selama 3 hari pada suhu kamar.',
    question: 'Apakah nama metode ekstraksi dingin yang dilakukan oleh TTK tersebut?',
    options: [
      { key: 'A', text: 'Maserasi' },
      { key: 'B', text: 'Sokletasi' },
      { key: 'C', text: 'Refluks' },
      { key: 'D', text: 'Perkolasi' },
      { key: 'E', text: 'Dekokta' }
    ],
    correctAnswer: 'A',
    explanation: 'Maserasi adalah metode ekstraksi sederhana secara dingin dengan cara merendam serbuk simplisia dalam cairan penyari (pelarut organik/air) pada suhu kamar (15-25 °C) disertai pengadukan berulang, sangat cocok untuk simplisia yang mengandung zat aktif yang tidak tahan panas (termolabil).',
    clinicalReference: 'Farmakope Herbal Indonesia Edisi II & Pedoman Teknologi Ekstraksi BPOM RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-848',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Untuk mengekstraksi senyawa alkaloid piperin dari buah lada hitam (Piperis Nigri Fructus) menggunakan pelarut etanol dalam jumlah terbatas, TTK menggunakan alat gelas khusus yang dilengkapi kondensor pendingin bola dan sifon peluap sirkulasi otomatis yang bekerja secara berkesinambungan.',
    question: 'Apakah nama metode ekstraksi panas berkesinambungan tersebut?',
    options: [
      { key: 'A', text: 'Sokletasi (Soxhletation)' },
      { key: 'B', text: 'Maserasi kinetik' },
      { key: 'C', text: 'Destilasi uap' },
      { key: 'D', text: 'Infusa' },
      { key: 'E', text: 'Digesti' }
    ],
    correctAnswer: 'A',
    explanation: 'Sokletasi adalah metode ekstraksi panas kontinu berulang menggunakan alat Soxhlet. Pelarut dalam labu dipanaskan menguap ke kondensor, terkondensasi membasahi simplisia di selongsong (thimble), dan setelah cairan mencapai puncak sifon, cairan penyari bersama ekstrak akan meluap kembali ke labu penampung secara siklik.',
    clinicalReference: 'Farmakope Herbal Indonesia Edisi II (Metode Sokletasi Ekstrak Bahan Alam)',
    difficulty: 'Mudah'
  },
  {
    id: 'q-849',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Dalam pengembangan obat herbal terstandar (OHT) menjadi Fitofarmaka, peneliti melakukan pengujian keamanan produk dengan memberikan ekstrak dosis bertingkat pada hewan uji tikus selama 90 hari berturut-turut untuk mengevaluasi profil toksisitas pada organ vital dan menetapkan batas NOAEL.',
    question: 'Apakah nama tingkatan uji toksisitas 90 hari tersebut?',
    options: [
      { key: 'A', text: 'Uji Toksisitas Akut (24 jam)' },
      { key: 'B', text: 'Uji Toksisitas Subkronis (90 hari)' },
      { key: 'C', text: 'Uji Toksisitas Kronis (seumur hidup > 6-12 bulan)' },
      { key: 'D', text: 'Uji Teratogenisitas' },
      { key: 'E', text: 'Uji Mutagenisitas Ames' }
    ],
    correctAnswer: 'B',
    explanation: 'Berdasarkan pedoman BPOM dan OECD 408, Uji Toksisitas Subkronis dilakukan dengan pemberian sediaan uji setiap hari secara berulang pada hewan pengerat selama kurun waktu 90 hari (3 bulan) untuk mengevaluasi efek toksik organ sasaran, kelainan hematologi, biokimia klinis, dan menentukan dosis NOAEL (No Observed Adverse Effect Level).',
    clinicalReference: 'Peraturan BPOM No. 7 Tahun 2014 tentang Pedoman Uji Toksisitas Nonklinik',
    difficulty: 'Sedang'
  },
  {
    id: 'q-850',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Laporan keuangan apotek per 31 Desember 2025 menunjukkan data:\nNilai Persediaan Awal = Rp 50.000.000,-\nPembelian Bersih selama tahun 2025 = Rp 300.000.000,-\nNilai Persediaan Akhir pada stock opname = Rp 70.000.000,-',
    question: 'Berapakah nilai Harga Pokok Penjualan (HPP) apotek tersebut?',
    options: [
      { key: 'A', text: 'Rp 280.000.000,-' },
      { key: 'B', text: 'Rp 320.000.000,-' },
      { key: 'C', text: 'Rp 350.000.000,-' },
      { key: 'D', text: 'Rp 370.000.000,-' },
      { key: 'E', text: 'Rp 420.000.000,-' }
    ],
    correctAnswer: 'A',
    explanation: 'Rumus Harga Pokok Penjualan (HPP) = Persediaan Awal + Pembelian Bersih - Persediaan Akhir = Rp 50.000.000 + Rp 300.000.000 - Rp 70.000.000 = Rp 280.000.000,-.',
    clinicalReference: 'Manajemen Keuangan & Logistik Farmasi Apotek Komunitas',
    difficulty: 'Sedang'
  },
  {
    id: 'q-851',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Apotek membeli obat sirup parasetamol dari PBF dengan harga netto apotek (HNA) termasuk PPN 11% sebesar Rp 20.000,- per botol. Apotek menetapkan margin laba kotor penjualan sebesar 25% dari harga beli.',
    question: 'Berapakah Harga Jual Apotek (HJA) per botol obat sirup tersebut kepada pasien?',
    options: [
      { key: 'A', text: 'Rp 22.500,-' },
      { key: 'B', text: 'Rp 25.000,-' },
      { key: 'C', text: 'Rp 27.500,-' },
      { key: 'D', text: 'Rp 30.000,-' },
      { key: 'E', text: 'Rp 32.000,-' }
    ],
    correctAnswer: 'B',
    explanation: 'Harga Jual Apotek (HJA) = Harga Beli x (1 + Margin Laba) = Rp 20.000 x (1 + 0,25) = Rp 20.000 x 1,25 = Rp 25.000,- per botol.',
    clinicalReference: 'Buku Ajar Manajemen Farmasi & Perhitungan Harga Jual Apotek',
    difficulty: 'Mudah'
  },
  {
    id: 'q-852',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien datang ke apotek pada malam hari mengeluhkan serangan sesak asma akut dan meminta suppositoria Aminofilin tanpa resep dokter karena apotek jauh dari rumah sakit. TTK mengecek batasan legal dalam Kepmenkes DOWA No. 1.',
    question: 'Berapakah jumlah maksimal sediaan Aminofilin suppositoria yang boleh diserahkan oleh apoteker kepada pasien?',
    options: [
      { key: 'A', text: '1 suppositoria' },
      { key: 'B', text: '2 suppositoria' },
      { key: 'C', text: '3 suppositoria' },
      { key: 'D', text: '5 suppositoria' },
      { key: 'E', text: '6 suppositoria' }
    ],
    correctAnswer: 'C',
    explanation: 'Berdasarkan Keputusan Menteri Kesehatan No. 347/MenKes/SK/VII/1990 (DOWA 1), sediaan Aminofilin suppositoria dapat diserahkan tanpa resep dokter maksimal sebanyak 3 suppositoria untuk penanganan darurat serangan asma.',
    clinicalReference: 'Daftar Obat Wajib Apotek No. 1 Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-853',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Pasien datang ke apotek mengeluhkan konstipasi berat dan meminta obat pencahar suppositoria Bisakodil (Dulcolax suppositoria) tanpa membawa resep dokter.',
    question: 'Berdasarkan ketentuan DOWA No. 1, berapakah jumlah maksimal Bisakodil suppositoria yang dapat diberikan?',
    options: [
      { key: 'A', text: '1 suppositoria' },
      { key: 'B', text: '2 suppositoria' },
      { key: 'C', text: '3 suppositoria' },
      { key: 'D', text: '5 suppositoria' },
      { key: 'E', text: '6 suppositoria' }
    ],
    correctAnswer: 'C',
    explanation: 'Berdasarkan Kepmenkes DOWA No. 1, Bisakodil sediaan suppositoria dapat diserahkan tanpa resep dokter maksimal sebanyak 3 suppositoria.',
    clinicalReference: 'Daftar Obat Wajib Apotek No. 1 Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-854',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Pasien penderita rinitis alergi datang ke apotek meminta tablet Cetirizine 10 mg tanpa membawa resep dokter untuk mengatasi bersin-bersin dan hidung berair kambuhannya. TTK memeriksa ketentuan dalam Daftar Obat Wajib Apotek No. 3 (DOWA 3).',
    question: 'Berapakah jumlah maksimal penyerahan Cetirizine 10 mg tablet menurut DOWA 3?',
    options: [
      { key: 'A', text: '5 tablet' },
      { key: 'B', text: '10 tablet' },
      { key: 'C', text: '15 tablet' },
      { key: 'D', text: '20 tablet' },
      { key: 'E', text: '30 tablet' }
    ],
    correctAnswer: 'B',
    explanation: 'Berdasarkan Keputusan Menteri Kesehatan No. 1176/Menkes/SK/X/1999 tentang Obat Wajib Apotek No. 3 (DOWA 3), Cetirizine tablet diserahkan tanpa resep dokter maksimal sebanyak 10 tablet (atau 1 botol sirup) untuk mengatasi gejala alergi.',
    clinicalReference: 'Kepmenkes No. 1176/Menkes/SK/X/1999 tentang Obat Wajib Apotek No. 3',
    difficulty: 'Mudah'
  },
  {
    id: 'q-855',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Pasien remaja perempuan datang ke apotek mengeluhkan jerawat meradang di pipi dan meminta obat oles Klindamisin gel tanpa membawa resep dokter.',
    question: 'Berdasarkan ketentuan DOWA No. 2, berapakah jumlah maksimal penyerahan Klindamisin sediaan topikal tanpa resep dokter?',
    options: [
      { key: 'A', text: '1 tube' },
      { key: 'B', text: '2 tube' },
      { key: 'C', text: '3 tube' },
      { key: 'D', text: '4 tube' },
      { key: 'E', text: 'Tidak boleh diserahkan sama sekali' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Kepmenkes No. 924/Menkes/Per/X/1993 (DOWA 2), Klindamisin sediaan topikal untuk jerawat (acne vulgaris) dapat diserahkan tanpa resep dokter maksimal sebanyak 1 tube.',
    clinicalReference: 'Daftar Obat Wajib Apotek No. 2 Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-856',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Dalam peracikan salep 2-4 (Asam Salisilat 2% dan Belerang Endap / Sulfur Praecipitatum 4% dalam basis vaselin album), TTK harus memastikan partikel serbuk belerang halus dan homogen serta tidak berpasir pada kulit pasien.',
    question: 'Bagaimanakah teknik peracikan serbuk belerang endap (sulfur) yang benar pada mortir sebelum dicampur dengan basis vaselin?',
    options: [
      { key: 'A', text: 'Dilarutkan langsung dengan alkohol 96%' },
      { key: 'B', text: 'Ditetesi sedikit cairan pembasah parafin cair (minyak mineral) lalu digerus halus sebelum ditambahkan vaselin' },
      { key: 'C', text: 'Dipanaskan di atas cawan penguap sampai meleleh' },
      { key: 'D', text: 'Dicampur langsung dengan vaselin padat tanpa pembasah' },
      { key: 'E', text: 'Dilarutkan dalam air mendidih' }
    ],
    correctAnswer: 'B',
    explanation: 'Sulfur praecipitatum tidak larut dalam air maupun alkohol. Untuk mencegah sensasi kasar/berpasir pada sediaan salep, sulfur digerus terlebih dahulu menggunakan sedikit zat pembasah yang cocok (seperti parafin cair / minyak mineral secukupnya) menggunakan prinsip levigasi hingga membentuk pasta halus sebelum dicampurkan homogen dengan basis vaselin.',
    clinicalReference: 'Ilmu Meracik Obat Teori dan Praktik (Teknik Peracikan Salep) Moh. Anief',
    difficulty: 'Sedang'
  },
  {
    id: 'q-857',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Pasien rawat inap dewasa membutuhkan terapi cairan infus Ringer Laktat sebanyak 1.000 mL yang harus habis diinfuskan dalam waktu 8 jam. Selang infus yang digunakan adalah infus set makrodrip standar dewasa dengan faktor tetes 20 tetes/mL.',
    question: 'Berapakah kecepatan aliran tetesan infus (tetes per menit / tpm) yang harus diatur oleh perawat?',
    options: [
      { key: 'A', text: '21 tetes/menit' },
      { key: 'B', text: '35 tetes/menit' },
      { key: 'C', text: '42 tetes/menit' },
      { key: 'D', text: '50 tetes/menit' },
      { key: 'E', text: '60 tetes/menit' }
    ],
    correctAnswer: 'C',
    explanation: 'Rumus Tetesan Infus: Laju Tetes (tpm) = (Volume Infus (mL) x Faktor Tetes) / (Waktu (jam) x 60 menit) = (1.000 mL x 20) / (8 x 60) = 20.000 / 480 = 41,66 tetes/menit ~ dibulatkan menjadi 42 tetes per menit.',
    clinicalReference: 'Pedoman Terapi Cairan Intravena Rumah Sakit & Perhitungan Farmasetika Klinis',
    difficulty: 'Sedang'
  },
  {
    id: 'q-858',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'TTK di depo farmasi rawat jalan menyiapkan alat kesehatan suntik untuk pasien anak penderita diabetes tipe 1 yang membutuhkan suntikan insulin rutin subkutan setiap hari.',
    question: 'Berapakah ukuran jarum suntik (needle gauge / G) yang paling tepat direkomendasikan agar meminimalkan rasa nyeri pada penyuntikan subkutan anak tersebut?',
    options: [
      { key: 'A', text: '18 G' },
      { key: 'B', text: '21 G' },
      { key: 'C', text: '23 G' },
      { key: 'D', text: '25 G' },
      { key: 'E', text: '31 G (jarum sangat halus / ultrafine)' }
    ],
    correctAnswer: 'E',
    explanation: 'Pada jarum suntik medis, semakin besar angka Gauge (G), semakin kecil diameter luarnya (semakin halus jarumnya). Jarum insulin subkutan pediatrik menggunakan ukuran ultrafine antara 30 G s/d 32 G (panjang 4-6 mm) untuk memastikan obat masuk ke lapisan subkutan dengan rasa sakit yang minimal.',
    clinicalReference: 'Pedoman Konseling Injeksi Insulin Diabetes Mellitus Kemenkes & Blueprint Alkes APDFI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-859',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Dalam pembuatan sediaan tetes mata steril Kloramfenikol 0,5%, formula sediaan harus memiliki tekanan osmosis yang setara dengan cairan mata (isotonis terhadap larutan NaCl 0,9%) agar tidak menimbulkan iritasi nyeri dan rasa perih pada mata pasien.',
    question: 'Bahan pembantu pengisotonis apakah yang paling lazim ditambahkan dalam formula sediaan tetes mata tersebut?',
    options: [
      { key: 'A', text: 'Natrium Klorida (NaCl)' },
      { key: 'B', text: 'Asam Sitrat' },
      { key: 'C', text: 'Metilselulosa' },
      { key: 'D', text: 'Polietilenglikol' },
      { key: 'E', text: 'Propilenglikol' }
    ],
    correctAnswer: 'A',
    explanation: 'Natrium Klorida (NaCl) murni adalah zat pengatur tonisitas (tonicity adjusting agent) standar yang paling luas digunakan untuk membuat larutan oftalmik dan parenteral menjadi isotonis (setara dengan tekanan osmosis NaCl 0,9% b/v).',
    clinicalReference: 'Farmakope Indonesia Edisi VI (Monografi Tetes Mata Steril) & Teori Tonisitas',
    difficulty: 'Mudah'
  },
  {
    id: 'q-860',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'TTK memeriksa kemasan produk jamu kemasan sachet yang beredar di apotek. Pada kemasannya tertera logo resmi berupa ranting daun hijau dalam lingkaran bergaris tepi hijau dengan tulisan "JAMU" di bawahnya.',
    question: 'Berdasarkan peraturan Badan POM, apakah klaim khasiat dan dasar pembuktian ilmiah untuk sediaan obat bahan alam berkategori "Jamu" tersebut?',
    options: [
      { key: 'A', text: 'Telah teruji klinis pada manusia secara acak tersamar ganda' },
      { key: 'B', text: 'Telah melalui uji praklinis pada hewan uji dan standarisasi bahan baku' },
      { key: 'C', text: 'Dibuktikan keamanannya dan khasiatnya secara empiris turun-temurun minimal 3 generasi' },
      { key: 'D', text: 'Mengandung senyawa sintetik murni' },
      { key: 'E', text: 'Setara dengan obat keras kimiawi' }
    ],
    correctAnswer: 'C',
    explanation: 'Menurut Peraturan BPOM tentang Obat Bahan Alam: 1) Jamu (logo pohon ranting hijau) dibuktikan secara empiris turun-temurun berdasarkan data historis penggunaan minimal 3 generasi; 2) Obat Herbal Terstandar / OHT (logo 3 bintang) teruji praklinik pada hewan dan ekstrak terstandar; 3) Fitofarmaka (logo kristal salju) telah lolos uji klinis pada manusia.',
    clinicalReference: 'Peraturan Badan POM No. 25 Tahun 2021 tentang Kriteria dan Tata Laksana Registrasi Obat Bahan Alam',
    difficulty: 'Mudah'
  },
  {
    id: 'q-861',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Dalam rangka standardisasi ekstrak etanol daun jati belanda (Guazuma ulmifolia), TTK melakukan penetapan kadar abu total di laboratorium. Cawan silika pijar yang berisi 2 gram ekstrak dipanaskan secara perlahan hingga arang habis, kemudian dipijarkan dalam tanur muffle furnace pada suhu 600 ± 25 °C hingga terbentuk abu putih bebas karbon.',
    question: 'Apakah tujuan dilakukannya pengujian kadar abu total tersebut?',
    options: [
      { key: 'A', text: 'Mengetahui kandungan bahan anorganik (mineral internal dan eksternal) dalam simplisia' },
      { key: 'B', text: 'Mengukur kadar air yang tersisa dalam ekstrak' },
      { key: 'C', text: 'Menghitung rendemen senyawa flavonoid' },
      { key: 'D', text: 'Mengetahui angka kapang khamir' },
      { key: 'E', text: 'Menghilangkan residu pestisida' }
    ],
    correctAnswer: 'A',
    explanation: 'Penetapan kadar abu total bertujuan memberikan gambaran kandungan mineral internal (unsur anorganik fisiologis tanaman) serta mineral eksternal yang berasal dari pengotor pasir, debu, atau tanah silikat yang menempel pada simplisia selama proses pengumpulan dan pengolahan.',
    clinicalReference: 'Farmakope Herbal Indonesia Edisi II (Penetapan Kadar Abu Total)',
    difficulty: 'Sedang'
  },
  {
    id: 'q-862',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'TTK di instalasi farmasi rumah sakit memeriksa buku defekta dan melakukan pemesanan obat cacing Albendazol tablet. Lead time (waktu tunggu pengiriman PBF) adalah 3 hari, dan rata-rata penggunaan obat per hari adalah 20 tablet. Apotek menetapkan safety stock (stok pengaman) sebesar 40 tablet.',
    question: 'Pada sisa stok berapa tablet titik pemesanan kembali (Reorder Point / ROP) harus segera dilakukan oleh TTK?',
    options: [
      { key: 'A', text: '60 tablet' },
      { key: 'B', text: '80 tablet' },
      { key: 'C', text: '100 tablet' },
      { key: 'D', text: '120 tablet' },
      { key: 'E', text: '150 tablet' }
    ],
    correctAnswer: 'C',
    explanation: 'Rumus Reorder Point (ROP) = (Penggunaan Harian x Lead Time) + Safety Stock = (20 tablet/hari x 3 hari) + 40 tablet = 60 + 40 = 100 tablet. Maka pemesanan kembali harus dilakukan saat sisa stok di rak mencapai 100 tablet.',
    clinicalReference: 'Manajemen Logistik Farmasi Rumah Sakit & Pedoman Pengendalian Persediaan',
    difficulty: 'Mudah'
  },
  {
    id: 'q-863',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Dalam pembuatan tablet Parasetamol 500 mg metode granulasi basah, TTK menemukan masalah di mana massa cetak tablet menempel pada permukaan punch atas dan bawah mesin cetak tablet sehingga permukaan tablet menjadi buram dan tergores.',
    question: 'Apakah nama cacat fisik tablet tersebut dan bahan eksipien apakah yang perlu ditambahkan atau ditingkatkan konsentrasinya untuk mengatasinya?',
    options: [
      { key: 'A', text: 'Sticking / Picking; tingkatkan konsentrasi lubrikan Magnesium Stearat' },
      { key: 'B', text: 'Capping; tingkatkan bahan pengikat PVP' },
      { key: 'C', text: 'Mottling; tambahkan zat pewarna' },
      { key: 'D', text: 'Laminating; kurangi tekanan kompresi' },
      { key: 'E', text: 'Bridging; tambahkan zat pengisi' }
    ],
    correctAnswer: 'A',
    explanation: 'Sticking adalah kondisi massa granul menempel pada dinding cetakan die atau permukaan punch, sedangkan Picking adalah menempelnya sebagian massa pada logo punch. Penyebab utamanya adalah granul masih basah (kelembapan tinggi) atau kurangnya konsentrasi lubrikan. Solusinya adalah mengeringkan granul optimal dan meningkatkan konsentrasi anti-adheren/lubrikan seperti Magnesium Stearat (0,5-1%) atau Talk.',
    clinicalReference: 'Lachman Teori dan Praktik Farmasi Industri (Cacat Fisik Tablet & Formulasi Granul)',
    difficulty: 'Sedang'
  },
  {
    id: 'q-864',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Dalam pembuatan sediaan emulsi tipe M/A, dibutuhkan nilai RHLB (Required Hydrophilic-Lipophilic Balance) sebesar 12,0. Formulator menggunakan kombinasi dua surfaktan: Tween 80 (nilai HLB = 15,0) dan Span 80 (nilai HLB = 4,5). Jumlah total campuran surfaktan yang ditimbang adalah 5 gram.',
    question: 'Berapakah bobot masing-masing Tween 80 dan Span 80 yang harus ditimbang oleh TTK?',
    options: [
      { key: 'A', text: 'Tween 80 = 3,57 gram dan Span 80 = 1,43 gram' },
      { key: 'B', text: 'Tween 80 = 2,50 gram dan Span 80 = 2,50 gram' },
      { key: 'C', text: 'Tween 80 = 1,43 gram dan Span 80 = 3,57 gram' },
      { key: 'D', text: 'Tween 80 = 4,00 gram dan Span 80 = 1,00 gram' },
      { key: 'E', text: 'Tween 80 = 3,00 gram dan Span 80 = 2,00 gram' }
    ],
    correctAnswer: 'A',
    explanation: 'Perhitungan aligasi HLB campuran: Bagian Tween 80 = (HLB butuh - HLB Span) / (HLB Tween - HLB Span) = (12 - 4,5) / (15 - 4,5) = 7,5 / 10,5 = 0,7143 (71,43%). Maka bobot Tween 80 = 0,7143 x 5 gram = 3,57 gram. Bobot Span 80 = 5 gram - 3,57 gram = 1,43 gram.',
    clinicalReference: 'Martin Farmasi Fisika & Teori Formulasi Sistem Emulsi',
    difficulty: 'Sedang'
  },
  {
    id: 'q-865',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'TTK di apotek meracik resep tetes mata steril berisi Atropin Sulfat 1% b/v sebanyak 20 mL. Diketahui nilai ekivalensi NaCl (E) Atropin Sulfat adalah 0,13. Sediaan harus dibuat isotonis setara dengan larutan NaCl 0,9% b/v.',
    question: 'Berapakah bobot NaCl yang harus ditambahkan ke dalam sediaan tersebut agar menjadi larutan isotonis?',
    options: [
      { key: 'A', text: '0,180 gram' },
      { key: 'B', text: '0,154 gram' },
      { key: 'C', text: '0,126 gram' },
      { key: 'D', text: '0,090 gram' },
      { key: 'E', text: '0,026 gram' }
    ],
    correctAnswer: 'B',
    explanation: 'Perhitungan tonisitas metode ekivalensi NaCl: Kebutuhan NaCl untuk 20 mL larutan isotonis 0,9% = (0,9 g / 100 mL) x 20 mL = 0,180 g. Bobot Atropin Sulfat = (1 g / 100 mL) x 20 mL = 0,20 g. Kesetaraan Atropin Sulfat terhadap NaCl = 0,20 g x 0,13 = 0,026 g NaCl. Maka NaCl yang harus ditambahkan = 0,180 g - 0,026 g = 0,154 gram (154 mg).',
    clinicalReference: 'Farmakope Indonesia Edisi VI (Perhitungan Tonisitas & Osmolaritas Sediaan Mata)',
    difficulty: 'Sedang'
  },
  {
    id: 'q-866',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien anak penderita leukemia berusia 6 tahun dengan tinggi badan 100 cm dan berat badan 16 kg akan menjalani terapi kemoterapi. Protokol dosis dokter menetapkan dosis Metotreksat adalah 50 mg/m² Luas Permukaan Tubuh (BSA).',
    question: 'Berapakah dosis Metotreksat yang harus disiapkan untuk pasien tersebut berdasarkan rumus Mosteller?',
    options: [
      { key: 'A', text: '22,5 mg' },
      { key: 'B', text: '33,3 mg' },
      { key: 'C', text: '40,0 mg' },
      { key: 'D', text: '50,0 mg' },
      { key: 'E', text: '66,7 mg' }
    ],
    correctAnswer: 'B',
    explanation: 'Rumus Mosteller BSA = akar kuadrat ((Tinggi badan (cm) x Berat badan (kg)) / 3600) = akar kuadrat ((100 x 16) / 3600) = akar kuadrat (1600 / 3600) = akar kuadrat (0,4444) = 0,6667 m². Dosis obat = 50 mg/m² x 0,6667 m² = 33,33 mg ~ dibulatkan menjadi 33,3 mg.',
    clinicalReference: 'Pedoman Rekonstitusi Obat Sitostatika & Perhitungan Onkologi Pediatrik',
    difficulty: 'Sedang'
  },
  {
    id: 'q-867',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien wanita berusia 60 tahun dengan berat badan 50 kg dirawat di bangsal penyakit dalam karena infeksi saluran kemih. Hasil pemeriksaan laboratorium menunjukkan kadar kreatinin serum (Scr) pasien adalah 1,5 mg/dL. Dokter merencanakan pemberian antibiotik aminoglikosida yang dieliminasi lewat ginjal.',
    question: 'Berapakah estimasi nilai klirens kreatinin (CrCl) pasien tersebut berdasarkan rumus Cockcroft-Gault?',
    options: [
      { key: 'A', text: '25,2 mL/menit' },
      { key: 'B', text: '31,5 mL/menit' },
      { key: 'C', text: '37,0 mL/menit' },
      { key: 'D', text: '42,5 mL/menit' },
      { key: 'E', text: '48,0 mL/menit' }
    ],
    correctAnswer: 'B',
    explanation: 'Rumus Cockcroft-Gault: CrCl Pria = ((140 - Umur) x BB (kg)) / (72 x Scr) = ((140 - 60) x 50) / (72 x 1,5) = (80 x 50) / 108 = 4000 / 108 = 37,04 mL/menit. Karena pasien adalah WANITA, nilai dikalikan faktor koreksi 0,85: CrCl Wanita = 37,04 x 0,85 = 31,48 mL/menit ~ 31,5 mL/menit.',
    clinicalReference: 'Pedoman Penyesuaian Dosis Obat pada Pasien Gangguan Ginjal Kemenkes RI',
    difficulty: 'Sedang'
  },
  {
    id: 'q-868',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Seorang ibu menebus resep sirup kering Amoksisilin 125 mg/5 mL untuk anaknya di apotek. TTK melakukan rekonstitusi serbuk kering tersebut dengan menambahkan aquadest steril hingga tanda batas 60 mL kemudian mengocoknya homogen.',
    question: 'Berapakah batas waktu penggunaan (Beyond Use Date / BUD) sirup kering antibiotik tersebut setelah direkonstitusi bila disimpan pada suhu kamar sejuk?',
    options: [
      { key: 'A', text: '3 hari' },
      { key: 'B', text: '7 hari' },
      { key: 'C', text: '14 hari' },
      { key: 'D', text: '30 hari' },
      { key: 'E', text: 'Mengikuti tanggal ED pada kemasan pabrik' }
    ],
    correctAnswer: 'B',
    explanation: 'Berdasarkan standar USP <795> dan Farmakope Indonesia, suspensi/sirup kering antibiotik (oral reconstituted antibiotic) memiliki Beyond Use Date (BUD) maksimal 7 hari pada suhu kamar (15-25 °C) atau hingga 14 hari bila disimpan di dalam lemari pendingin suhu 2-8 °C. Setelah 7 hari pada suhu kamar, cincin beta-laktam amoksisilin mengalami hidrolisis cepat sehingga efektivitas antibiotik menurun drastis.',
    clinicalReference: 'USP <795> Pharmaceutical Compounding - Nonsterile Preparations & FI VI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-869',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Bagian Pengawasan Mutu (QC) industri farmasi menguji laju pelepasan zat aktif dari tablet salut enterik dan kapsul keras menggunakan alat uji disolusi terstandar sesuai Farmakope Indonesia Edisi VI.',
    question: 'Apakah nama jenis alat uji disolusi Tipe 1 dan Tipe 2 menurut Farmakope Indonesia Edisi VI?',
    options: [
      { key: 'A', text: 'Tipe 1 = Keranjang (Basket), Tipe 2 = Dayung (Paddle)' },
      { key: 'B', text: 'Tipe 1 = Dayung (Paddle), Tipe 2 = Keranjang (Basket)' },
      { key: 'C', text: 'Tipe 1 = Silinder bolak-balik, Tipe 2 = Sel alir' },
      { key: 'D', text: 'Tipe 1 = Dayung di atas cakram, Tipe 2 = Silinder putar' },
      { key: 'E', text: 'Tipe 1 = Desintegrator, Tipe 2 = Friabilator' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Farmakope Indonesia Edisi VI Lampiran <1231> Uji Disolusi: Alat 1 adalah Keranjang (Basket Apparatus), biasa digunakan untuk kapsul keras atau tablet terapung. Alat 2 adalah Dayung (Paddle Apparatus), paling umum digunakan untuk tablet konvensional dan tablet salut.',
    clinicalReference: 'Farmakope Indonesia Edisi VI (Bab Uji Disolusi <1231>)',
    difficulty: 'Mudah'
  },
  {
    id: 'q-870',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Untuk memastikan kemasan primer strip dan blister tablet tidak bocor saat proses pengemasan (packaging), TTK QC melakukan uji kebocoran (leak test) dengan memasukkan sampel strip ke dalam bejana desikator berisi larutan biru metilen (Methylene Blue 1%) yang dihubungkan dengan pompa vakum.',
    question: 'Bagaimanakah kriteria hasil yang menunjukkan bahwa kemasan strip/blister tersebut mengalami kebocoran?',
    options: [
      { key: 'A', text: 'Larutan metilen biru berubah warna menjadi bening' },
      { key: 'B', text: 'Tablet di dalam rongga blister berubah warna menjadi kebiruan akibat cairan merembes masuk' },
      { key: 'C', text: 'Aluminium foil blister robek berkeping-keping' },
      { key: 'D', text: 'Terjadi pengendapan kristal di dasar bejana' },
      { key: 'E', text: 'Bobot blister bertambah lebih dari 50%' }
    ],
    correctAnswer: 'B',
    explanation: 'Pada uji kebocoran strip/blister (Blue Dye Vacuum Leak Test), tekanan vakum diberikan pada bejana berisi larutan pewarna metilen biru. Jika kemasan memiliki micro-leak (bocor halus), pewarna biru akan tersedot masuk ke dalam kompartemen blister dan mewarnai tablet di dalamnya, menandakan kemasan bocor dan proses sealing harus dikalibrasi ulang.',
    clinicalReference: 'CPOB 2018 (Pengawasan Selama Proses Pengemasan Strip/Blister)',
    difficulty: 'Mudah'
  },
  {
    id: 'q-871',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'TTK memeriksa suhu penyimpanan sediaan farmasi di instalasi farmasi. Pada brosur produk sediaan vaksin hepatitis B dan suppositoria tertera instruksi: "Simpan pada Suhu Dingin (Cold)".',
    question: 'Berapakah rentang suhu yang dimaksud dengan "Suhu Dingin" menurut Farmakope Indonesia Edisi VI?',
    options: [
      { key: 'A', text: 'Kurang dari -20 °C' },
      { key: 'B', text: '-20 °C sampai -10 °C' },
      { key: 'C', text: '2 °C sampai 8 °C' },
      { key: 'D', text: '8 °C sampai 15 °C' },
      { key: 'E', text: '15 °C sampai 30 °C' }
    ],
    correctAnswer: 'C',
    explanation: 'Definisi suhu penyimpanan menurut Farmakope Indonesia Edisi VI: 1) Lemari pembeku (Freezer): antara -25 °C dan -10 °C; 2) Dingin (Cold / Chiller): suhu antara 2 °C dan 8 °C; 3) Sejuk (Cool): suhu antara 8 °C dan 15 °C; 4) Suhu kamar terkendali (Controlled Room Temperature): suhu antara 15 °C dan 30 °C; 5) Hangat: suhu antara 30 °C dan 40 °C.',
    clinicalReference: 'Farmakope Indonesia Edisi VI (Ketentuan Umum - Suhu dan Kelembapan Penyimpanan)',
    difficulty: 'Mudah'
  },
  {
    id: 'q-872',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Apotek akan melakukan pemesanan obat flu dan batuk yang mengandung zat aktif Pseudoefedrin HCl tablet kepada Pedagang Besar Farmasi (PBF). TTK diminta membantu menyiapkan blanko Surat Pesanan (SP).',
    question: 'Bagaimanakah ketentuan administratif penerbitan Surat Pesanan (SP) untuk obat yang mengandung prekursor farmasi sesuai regulasi Badan POM?',
    options: [
      { key: 'A', text: 'Dibuat dalam SP khusus prekursor terpisah dari obat biasa dan ditandatangani oleh Apoteker Penanggung Jawab (APJ) dengan mencantumkan SIPA' },
      { key: 'B', text: 'Boleh digabung bersama obat bebas dan kosmetik dalam satu lembar SP' },
      { key: 'C', text: 'Cukup ditandatangani oleh staf kasir apotek' },
      { key: 'D', text: 'Hanya boleh dipesan secara lisan lewat telepon tanpa dokumen tertulis' },
      { key: 'E', text: 'Harus menggunakan blanko SP N-9 khusus narkotika' }
    ],
    correctAnswer: 'A',
    explanation: 'Sesuai Permenkes No. 3 Tahun 2015 dan Peraturan BPOM No. 24 Tahun 2021, Surat Pesanan Prekursor Farmasi harus dibuat secara khusus dan terpisah dari sediaan farmasi lainnya, dibuat sekurang-kurangnya rangkap 2, serta ditandatangani oleh Apoteker Penanggung Jawab dengan mencantumkan nama jelas, nomor SIPA, dan stempel resmi sarana.',
    clinicalReference: 'Permenkes No. 3 Tahun 2015 & Peraturan BPOM No. 24 Tahun 2021 (Pengelolaan Prekursor Farmasi)',
    difficulty: 'Mudah'
  },
  {
    id: 'q-873',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Seorang anak berusia 10 tahun menderita asma bronkial dan mendapatkan resep serbuk bagi racikan yang mengandung Teofilin. Diketahui Dosis Maksimum (DM) Teofilin untuk orang dewasa adalah 500 mg untuk sekali minum dan 1.000 mg untuk sehari.',
    question: 'Berapakah Dosis Maksimum sekali minum Teofilin untuk anak tersebut berdasarkan perhitungan rumus Dilling?',
    options: [
      { key: 'A', text: '150 mg' },
      { key: 'B', text: '200 mg' },
      { key: 'C', text: '250 mg' },
      { key: 'D', text: '300 mg' },
      { key: 'E', text: '350 mg' }
    ],
    correctAnswer: 'C',
    explanation: 'Rumus Dilling digunakan untuk anak berusia 8 tahun ke atas: Dosis Anak = (n / 20) x Dosis Dewasa (dengan n = umur dalam tahun). Maka DM sekali minum untuk anak 10 tahun = (10 / 20) x 500 mg = 1/2 x 500 mg = 250 mg.',
    clinicalReference: 'Ilmu Meracik Obat (Perhitungan Dosis Maksimum Anak) Moh. Anief',
    difficulty: 'Mudah'
  },
  {
    id: 'q-874',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Seorang bayi berusia 10 bulan mengalami demam pasca imunisasi. Dokter menuliskan resep puyer Parasetamol. Jika dosis lazim Parasetamol untuk orang dewasa adalah 500 mg per kali minum, TTK menghitung dosis bayi menggunakan rumus Fried.',
    question: 'Berapakah dosis Parasetamol per kali minum untuk bayi tersebut berdasarkan perhitungan rumus Fried?',
    options: [
      { key: 'A', text: '16,7 mg' },
      { key: 'B', text: '25,0 mg' },
      { key: 'C', text: '33,3 mg' },
      { key: 'D', text: '41,7 mg' },
      { key: 'E', text: '50,0 mg' }
    ],
    correctAnswer: 'C',
    explanation: 'Rumus Fried digunakan khusus untuk bayi (usia di bawah 1-2 tahun dengan perhitungan bulan): Dosis Bayi = (m / 150) x Dosis Dewasa (dengan m = usia bayi dalam bulan). Maka dosis sekali untuk bayi 10 bulan = (10 / 150) x 500 mg = (1 / 15) x 500 mg = 33,33 mg ~ 33,3 mg.',
    clinicalReference: 'Farmakope Indonesia Edisi III & Farmasetika Dasar Perhitungan Dosis Pediatri',
    difficulty: 'Mudah'
  },
  {
    id: 'q-875',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Simplisia kuncup bunga cengkeh (Syzygii aromatici Flos) mengandung minyak atsiri dengan komponen utama senyawa fenol Eugenol yang berkhasiat sebagai analgesik gigi dan antiseptik.',
    question: 'Metode ekstraksi penyulingan manakah yang paling tepat digunakan untuk mengisolasi minyak atsiri bunga cengkeh tersebut skala laboratorium?',
    options: [
      { key: 'A', text: 'Destilasi Uap dan Air (Water and Steam Distillation)' },
      { key: 'B', text: 'Maserasi dengan kloroform' },
      { key: 'C', text: 'Sokletasi dengan etanol 96%' },
      { key: 'D', text: 'Infusa pada suhu 90 °C' },
      { key: 'E', text: 'Dekokta selama 30 menit' }
    ],
    correctAnswer: 'A',
    explanation: 'Minyak atsiri (volatile oil) yang terkandung dalam simplisia tumbuhan seperti bunga cengkeh diisolasi menggunakan metode penyulingan (destilasi), terutama Destilasi Uap dan Air (Water and Steam Distillation) atau Destilasi Uap Langsung, di mana uap air akan membawa molekul minyak atsiri yang mudah menguap kemudian terkondensasi dan memisah berdasarkan perbedaan massa jenis.',
    clinicalReference: 'Farmakope Herbal Indonesia Edisi II (Metode Isolasi Minyak Atsiri & Monografi Cengkeh)',
    difficulty: 'Mudah'
  },
  {
    id: 'q-876',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'TTK melakukan pengujian skrining fitokimia kandungan tanin pada rebusan daun sirih (Piper betle L.). Ke dalam 2 mL filtrat simplisia ditambahkan beberapa tetes pereaksi Besi(III) Klorida (FeCl3) 1%.',
    question: 'Apakah hasil pengamatan visual yang menunjukkan reaksi positif adanya senyawa golongan tanin / polifenol?',
    options: [
      { key: 'A', text: 'Terbentuk larutan atau endapan berwarna hijau kehitaman atau biru kehitaman pekat' },
      { key: 'B', text: 'Terbentuk endapan merah bata' },
      { key: 'C', text: 'Terbentuk cincin ungu pada batas dua lapisan' },
      { key: 'D', text: 'Larutan berubah menjadi kuning jernih tanpa endapan' },
      { key: 'E', text: 'Terbentuk busa stabil setinggi 2 cm' }
    ],
    correctAnswer: 'A',
    explanation: 'Uji tanin menggunakan larutan FeCl3 1%. Ion Fe3+ akan membentuk senyawa kompleks kelat dengan gugus hidroksil fenolik pada molekul tanin. Tanin terhidrolisis (gallotannin) menghasilkan warna biru kehitaman, sedangkan tanin terkondensasi (katekol) menghasilkan warna hijau kehitaman.',
    clinicalReference: 'Farmakope Herbal Indonesia Edisi II (Metode Uji Fitokimia Tanin dan Polifenol)',
    difficulty: 'Mudah'
  },
  {
    id: 'q-877',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Dalam pengujian mutu simplisia serbuk rimpang temulawak (Curcumae xanthorrhizae Rhizoma) secara mikroskopis menggunakan reagen kloral hidrat di bawah mikroskop optik perbesaran 400x, TTK mencari fragmen diagnostik khas rimpang.',
    question: 'Fragmen diagnostik apakah yang menjadi penanda mikroskopis utama untuk identifikasi simplisia temulawak?',
    options: [
      { key: 'A', text: 'Butir amilum berbentuk pipih lonjong bulat telur dengan tonjolan di salah satu ujung dan sel sekresi berisi kurkuminoid kuning jingga' },
      { key: 'B', text: 'Rambut kelenjar tipe Asteraceae' },
      { key: 'C', text: 'Sistolit kalsium karbonat' },
      { key: 'D', text: 'Kristal kalsium oksalat bentuk jarum berberkas' },
      { key: 'E', text: 'Stomata tipe parasitik' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Farmakope Herbal Indonesia Edisi II, fragmen diagnostik serbuk Curcumae xanthorrhizae Rhizoma meliputi: butir pati (amilum) tunggal berbentuk lonjong/bulat telur pipih dengan lamela dan hilus eksentris di ujung, fragmen parenkim korteks, serta sel sekresi berisi minyak atsiri dan damar berwarna kuning jingga (kurkuminoid).',
    clinicalReference: 'Farmakope Herbal Indonesia Edisi II (Monografi Temulawak Curcuma xanthorrhiza)',
    difficulty: 'Sedang'
  },
  {
    id: 'q-878',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien pria pasca operasi reseksi prostat transuretral (TURP) di ruang bedah membutuhkan kateter urin menetap jenis Foley Catheter model 3 saluran (3-way catheter). TTK di depo farmasi bedah menyiapkan alkes tersebut.',
    question: 'Apakah fungsi dari masing-masing 3 lumen/saluran pada kateter Foley 3-way tersebut?',
    options: [
      { key: 'A', text: 'Satu lumen untuk drainase urin, satu lumen untuk pengisian balon fiksasi, dan satu lumen untuk irigasi/pembilasan kandung kemih' },
      { key: 'B', text: 'Dua lumen untuk pengeluaran urin dan satu untuk penyuntikan antibiotik' },
      { key: 'C', text: 'Tiga lumen seluruhnya untuk pengeluaran urin secara bersamaan' },
      { key: 'D', text: 'Satu lumen untuk udara, satu lumen untuk darah, satu lumen untuk feses' },
      { key: 'E', text: 'Satu lumen untuk kamera endoskopi, satu untuk pisau bedah, satu untuk urin' }
    ],
    correctAnswer: 'A',
    explanation: 'Kateter Foley 3-way memiliki tiga percabangan (lumen): 1) Lumen drainase urine (mengalirkan air seni ke urobag); 2) Lumen inflasi balon fiksasi (diisi aquadest steril 10-30 mL agar kateter tidak terlepas dari kandung kemih); 3) Lumen irigasi (mengalirkan cairan irigasi seperti NaCl 0,9% steril secara kontinu untuk membilas bekuan darah pasca operasi kandung kemih/prostat).',
    clinicalReference: 'Katalog Alat Kesehatan Standar RS Kemenkes RI & Blueprint Alkes Vokasi Farmasi',
    difficulty: 'Sedang'
  },
  {
    id: 'q-879',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Pasien penderita diabetes melitus tipe 1 baru mendapatkan terapi insulin reguler vial 10 mL berkekuatan 100 Unit/mL (U-100). TTK menyerahkan alat suntik spuit insulin disposable kepada pasien.',
    question: 'Berapakah kapasitas volume total dan pembagian skala unit pada spuit insulin standar U-100 ukuran 1 mL?',
    options: [
      { key: 'A', text: 'Kapasitas 1 mL dengan total skala 100 Unit' },
      { key: 'B', text: 'Kapasitas 3 mL dengan total skala 300 Unit' },
      { key: 'C', text: 'Kapasitas 5 mL dengan total skala 50 Unit' },
      { key: 'D', text: 'Kapasitas 0,1 mL dengan total skala 10 Unit' },
      { key: 'E', text: 'Kapasitas 2 mL dengan total skala 20 Unit' }
    ],
    correctAnswer: 'A',
    explanation: 'Spuit insulin standar U-100 berkapasitas total 1,0 mL yang dikalibrasi presisi menjadi 100 Unit insulin (1 mL = 100 Unit). Jarum pada spuit insulin umumnya berukuran halus (gauge 29G-31G) dan fixed (melekat permanen) dengan dead-space minimal untuk mencegah kesalahan dosis injeksi.',
    clinicalReference: 'Pedoman Penatalaksanaan Diabetes Mellitus Tipe 1 & Standar Alkes Injeksi Insulin',
    difficulty: 'Mudah'
  },
  {
    id: 'q-880',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Di ruang ICU, perawat meminta selang penduga lambung (Nasogastric Tube / NGT) ukuran French 16 (16 Fr) untuk pasien dewasa koma yang memerlukan nutrisi enteral cair. TTK memeriksa stok alkes NGT di depo farmasi.',
    question: 'Bagaimanakah prinsip pembacaan skala French (Fr) pada alat kesehatan berbentuk selang kateter medis?',
    options: [
      { key: 'A', text: '1 French setara dengan diameter luar 0,33 mm (1/3 mm); semakin besar nomor Fr, semakin besar diameter luar selang' },
      { key: 'B', text: 'Semakin besar nomor French, semakin kecil diameter selang' },
      { key: 'C', text: 'French menunjukkan panjang selang dalam satuan sentimeter' },
      { key: 'D', text: 'French menunjukkan volume cairan yang dapat ditampung dalam satuan mililiter' },
      { key: 'E', text: '1 French setara dengan 1 inci' }
    ],
    correctAnswer: 'A',
    explanation: 'Skala French (Fr atau Ch / Charrière) digunakan untuk mengukur diameter luar instrumen silindris (kateter, NGT). Nilai 1 Fr = 0,333 mm (1/3 mm). Sebagai contoh, NGT 16 Fr memiliki diameter luar 16 x 0,333 mm = 5,33 mm. Pada skala French, semakin besar nilai angka, semakin besar diameter luar selang (berkebalikan dengan Gauge pada jarum suntik).',
    clinicalReference: 'Pedoman Pengetahuan Alat Kesehatan dan BMHP Asosiasi Pendidikan Vokasi Farmasi',
    difficulty: 'Sedang'
  },
  {
    id: 'q-881',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien anak balita di bangsal anak memiliki pembuluh darah vena yang sangat kecil dan rapuh sehingga sulit dipasangi kanula intravena (abocath) biasa. Perawat membutuhkan jarum suntik bersayap fleksibel dengan selang pendek untuk memfasilitasi injeksi obat.',
    question: 'Apakah nama alat kesehatan habis pakai yang paling tepat digunakan untuk kondisi tersebut?',
    options: [
      { key: 'A', text: 'Wing Needle (Butterfly Needle / Winged Infusion Set)' },
      { key: 'B', text: 'Spinal Needle 25G' },
      { key: 'C', text: 'Trocar kateter' },
      { key: 'D', text: 'Endotracheal Tube (ETT)' },
      { key: 'E', text: 'Umbilical Catheter' }
    ],
    correctAnswer: 'A',
    explanation: 'Wing Needle (jarum kupu-kupu / butterfly needle / winged infusion set) adalah jarum berukuran kecil dan pendek yang dilengkapi dua sayap plastik fleksibel serta selang penyambung bening. Alat ini sangat ideal untuk pungsi vena, pengambilan sampel darah, atau injeksi cairan pada pasien pediatri, geriatri, atau pasien dengan pembuluh vena superfisial yang sulit dan mudah kolaps.',
    clinicalReference: 'Standar Prosedur Operasional Terapi Vena Pediatrik & Katalog BMHP Farmasi RS',
    difficulty: 'Mudah'
  },
  {
    id: 'q-882',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien datang ke apotek membeli antasida suspensi dan tablet kunyah yang mengandung kombinasi Aluminium Hidroksida dan Magnesium Hidroksida untuk mengatasi keluhan nyeri ulu hati dan perut kembung.',
    question: 'Bagaimanakah instruksi penggunaan yang tepat yang harus disampaikan oleh TTK saat penyerahan obat antasida tablet kunyah?',
    options: [
      { key: 'A', text: 'Tablet harus dikunyah halus terlebih dahulu sebelum ditelan, diminum 1 jam sebelum makan atau 2 jam setelah makan dan menjelang tidur' },
      { key: 'B', text: 'Tablet ditelan utuh bersama segelas air susu sebelum tidur' },
      { key: 'C', text: 'Tablet dilarutkan dalam air mendidih' },
      { key: 'D', text: 'Tablet diselipkan di bawah lidah sampai larut' },
      { key: 'E', text: 'Diminum hanya saat lambung terisi makanan penuh di tengah-tengah makan' }
    ],
    correctAnswer: 'A',
    explanation: 'Antasida bekerja secara kimiawi menetralkan asam lambung (HCl). Agar bekerja optimal dengan luas permukaan kontak yang besar, tablet antasida kunyah WAJIB dikunyah sampai lumat sebelum ditelan. Waktu terbaik meminum antasida adalah saat lambung mulai kosong yaitu 1 jam sebelum makan atau 2 jam setelah makan, serta malam hari menjelang tidur ketika sekresi asam basal meningkat.',
    clinicalReference: 'Pelayanan Informasi Obat (PIO) Ikatan Apoteker Indonesia & Modul Farmakologi Klinis',
    difficulty: 'Mudah'
  },
  {
    id: 'q-883',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Pasien dewasa mengeluhkan nyeri perut melilit akibat kram/spasme otot saluran cerna dan meminta obat antispasmodik Papaverin HCl tablet tanpa membawa resep dokter.',
    question: 'Berdasarkan Keputusan Menteri Kesehatan tentang Daftar Obat Wajib Apotek No. 1 (DOWA 1), berapakah jumlah maksimal tablet Papaverin HCl yang boleh diserahkan oleh apotek?',
    options: [
      { key: 'A', text: '5 tablet' },
      { key: 'B', text: '10 tablet' },
      { key: 'C', text: '15 tablet' },
      { key: 'D', text: '20 tablet' },
      { key: 'E', text: '30 tablet' }
    ],
    correctAnswer: 'D',
    explanation: 'Berdasarkan Keputusan Menteri Kesehatan RI No. 347/MenKes/SK/VII/1990 tentang Obat Wajib Apotek No. 1 (DOWA 1), sediaan Papaverin HCl tablet diizinkan untuk diserahkan tanpa resep dokter maksimal sebanyak 20 tablet sebagai obat antispasmodik saluran cerna.',
    clinicalReference: 'Kepmenkes No. 347/MenKes/SK/VII/1990 tentang Daftar Obat Wajib Apotek No. 1',
    difficulty: 'Sedang'
  },
  {
    id: 'q-884',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien datang ke apotek meminta Ketoconazole tablet 200 mg sebanyak 1 strip dan Ketoconazole krim 2% sebanyak 1 tube tanpa membawa resep dokter untuk mengobati infeksi jamur kulit yang dideritanya.',
    question: 'Bagaimanakah tindakan TTK di apotek berdasarkan ketentuan regulasi Daftar Obat Wajib Apotek (DOWA)?',
    options: [
      { key: 'A', text: 'Hanya boleh menyerahkan Ketoconazole krim maksimal 1 tube, sedangkan Ketoconazole tablet oral ditolak karena bukan DOWA dan wajib resep dokter' },
      { key: 'B', text: 'Boleh menyerahkan kedua sediaan tersebut masing-masing 1 kemasan' },
      { key: 'C', text: 'Boleh menyerahkan Ketoconazole tablet 20 tablet tanpa resep' },
      { key: 'D', text: 'Menolak kedua sediaan karena seluruh sediaan antijamur wajib resep dokter' },
      { key: 'E', text: 'Menyerahkan Ketoconazole krim maksimal 5 tube' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Keputusan Menteri Kesehatan tentang DOWA No. 2 (Kepmenkes No. 924/Menkes/Per/X/1993), Ketoconazole yang termasuk obat wajib apotek HANYA sediaan topikal (krim) dengan batas maksimal penyerahan 1 tube. Ketoconazole tablet oral memiliki risiko hepatotoksisitas berat (kerusakan hati fatal) sehingga berstatus obat keras murni yang mutlak memerlukan resep dokter.',
    clinicalReference: 'Kepmenkes No. 924/Menkes/Per/X/1993 tentang DOWA 2 & BPOM Safety Alert Ketoconazole Oral',
    difficulty: 'Sedang'
  },
  {
    id: 'q-885',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Pasien pria dewasa penderita tukak lambung kambuhan datang ke apotek ingin membeli obat Ranitidin 150 mg tablet tanpa resep dokter. TTK mengecek batasan penyerahan pada lampiran regulasi DOWA No. 3.',
    question: 'Berapakah jumlah maksimal tablet Ranitidin 150 mg yang boleh diserahkan kepada pasien menurut DOWA No. 3?',
    options: [
      { key: 'A', text: '5 tablet' },
      { key: 'B', text: '10 tablet' },
      { key: 'C', text: '15 tablet' },
      { key: 'D', text: '20 tablet' },
      { key: 'E', text: '30 tablet' }
    ],
    correctAnswer: 'B',
    explanation: 'Berdasarkan Kepmenkes No. 1176/Menkes/SK/X/1999 tentang Obat Wajib Apotek No. 3 (DOWA 3), Ranitidin tablet 150 mg dapat diserahkan oleh apotek tanpa resep dokter maksimal sebanyak 10 tablet untuk pengobatan lanjutan gangguan asam lambung / tukak lambung.',
    clinicalReference: 'Kepmenkes No. 1176/Menkes/SK/X/1999 tentang Daftar Obat Wajib Apotek No. 3',
    difficulty: 'Mudah'
  },
  {
    id: 'q-886',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Di pabrik farmasi yang memproduksi sediaan tablet dan serbuk oral (ruang bersih Kelas E non-steril), sistem tata udara (HVAC) dirancang untuk mencegah terjadinya kontaminasi silang (cross-contamination) partikel debu antar ruang.',
    question: 'Bagaimanakah pengaturan perbedaan tekanan udara (differential pressure) antara ruang pengolahan serbuk berdebu terhadap koridor bersih di sekitarnya?',
    options: [
      { key: 'A', text: 'Ruang proses berdebu memiliki tekanan udara lebih rendah (negatif) dibanding koridor, sehingga debu tidak keluar mencemari koridor' },
      { key: 'B', text: 'Ruang proses berdebu memiliki tekanan udara jauh lebih tinggi (positif) dibanding koridor' },
      { key: 'C', text: 'Tekanan udara dibuat sama persis 0 Pascal tanpa perbedaan' },
      { key: 'D', text: 'Koridor diatur bertekanan vakum mutlak' },
      { key: 'E', text: 'Udara dari ruang pengolahan langsung dialirkan ke koridor umum' }
    ],
    correctAnswer: 'A',
    explanation: 'Sesuai Pedoman CPOB 2018 untuk fasilitas pengolahan sediaan padat oral (berdebu), ruang proses dirancang bertekanan LEBIH RENDAH (negatif relatif) terhadap koridor (koridor bertekanan lebih tinggi / sistem cascade sink). Tujuannya adalah memastikan udara bersih mengalir dari koridor masuk ke ruang pengolahan, mencegah partikel debu obat keluar mencemari koridor dan ruang produksi lainnya.',
    clinicalReference: 'Pedoman Cara Pembuatan Obat yang Baik (CPOB) 2018 - Tata Udara Fasilitas Nonsteril',
    difficulty: 'Sedang'
  },
  {
    id: 'q-887',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Dalam praktikum fitokimia di laboratorium vokasi farmasi, mahasiswa mengekstraksi 400 gram serbuk rimpang kencur (Kaempferia galanga) menggunakan metode maserasi cairan penyari etanol 96%. Setelah disaring dan dipekatkan dengan rotary vacuum evaporator, diperoleh ekstrak kental kencur seberat 52 gram.',
    question: 'Berapakah persentase rendemen ekstrak kental yang dihasilkan dari proses tersebut?',
    options: [
      { key: 'A', text: '7,7%' },
      { key: 'B', text: '10,4%' },
      { key: 'C', text: '13,0%' },
      { key: 'D', text: '15,6%' },
      { key: 'E', text: '20,8%' }
    ],
    correctAnswer: 'C',
    explanation: 'Rumus Persentase Rendemen Ekstrak = (Bobot Ekstrak Kental yang Diperoleh (g) / Bobot Serbuk Simplisia Kering Awal (g)) x 100% = (52 gram / 400 gram) x 100% = 0,13 x 100% = 13,0%.',
    clinicalReference: 'Farmakope Herbal Indonesia Edisi II (Pedoman Pembuatan dan Evaluasi Ekstrak Bahan Alam)',
    difficulty: 'Mudah'
  },
  {
    id: 'q-888',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'TTK bagian QC industri farmasi melakukan pengujian waktu hancur sediaan suppositoria pada bejana penangas air yang dipertahankan suhunya pada 36,5 °C s/d 37,5 °C sesuai monografi Farmakope Indonesia Edisi VI.',
    question: 'Berapakah batas waktu hancur maksimum yang dipersyaratkan masing-masing untuk suppositoria dengan basis lemak lipofilik dan basis larut air hidrofilik?',
    options: [
      { key: 'A', text: 'Maksimal 30 menit untuk basis lemak, dan maksimal 60 menit untuk basis larut air' },
      { key: 'B', text: 'Maksimal 15 menit untuk basis lemak, dan maksimal 15 menit untuk basis larut air' },
      { key: 'C', text: 'Maksimal 45 menit untuk basis lemak, dan maksimal 90 menit untuk basis larut air' },
      { key: 'D', text: 'Maksimal 60 menit untuk basis lemak, dan maksimal 30 menit untuk basis larut air' },
      { key: 'E', text: 'Maksimal 10 menit untuk basis lemak, dan maksimal 120 menit untuk basis larut air' }
    ],
    correctAnswer: 'A',
    explanation: 'Menurut Farmakope Indonesia Edisi VI dan British Pharmacopoeia (BP): Waktu hancur sediaan suppositoria berbasis lemak (lipofilik seperti oleum cacao / ester asam lemak) adalah tidak lebih dari 30 menit. Sedangkan untuk suppositoria berbasis larut air (hidrofilik seperti PEG atau gelatin tergliserinasi) adalah tidak lebih dari 60 menit.',
    clinicalReference: 'Farmakope Indonesia Edisi VI (Uji Waktu Hancur Suppositoria dan Pesari)',
    difficulty: 'Sedang'
  },
  {
    id: 'q-889',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Dalam pengujian keseragaman sediaan metode keragaman bobot terhadap 20 tablet Parasetamol tidak berselaput dengan bobot rata-rata 600 mg (> 300 mg), TTK menimbang tablet satu persatu dan menghitung persen penyimpangan bobotnya.',
    question: 'Berapakah batas persentase penyimpangan bobot rata-rata yang diperbolehkan untuk Kolom A dan Kolom B menurut Farmakope Indonesia?',
    options: [
      { key: 'A', text: 'Tidak boleh lebih dari 2 tablet menyimpang > 5% (Kolom A), dan tidak boleh 1 tablet pun menyimpang > 10% (Kolom B)' },
      { key: 'B', text: 'Tidak boleh lebih dari 2 tablet menyimpang > 7,5% (Kolom A), dan tidak boleh 1 tablet pun menyimpang > 15% (Kolom B)' },
      { key: 'C', text: 'Tidak boleh lebih dari 1 tablet menyimpang > 10% (Kolom A), dan tidak boleh 1 tablet pun menyimpang > 20% (Kolom B)' },
      { key: 'D', text: 'Seluruh tablet harus memiliki bobot yang tepat sama 100%' },
      { key: 'E', text: 'Tidak boleh lebih dari 5 tablet menyimpang > 5%' }
    ],
    correctAnswer: 'A',
    explanation: 'Menurut Farmakope Indonesia III & VI, untuk tablet tidak berselaput dengan bobot rata-rata di atas 300 mg: Pada kolom A penyimpangan maksimum 5% (maksimal 2 tablet yang boleh menyimpang), dan pada kolom B penyimpangan maksimum 10% (tidak boleh ada satu tablet pun yang menyimpang lebih dari 10%).',
    clinicalReference: 'Farmakope Indonesia Edisi III / VI (Keseragaman Bobot Tablet Tidak Berselaput)',
    difficulty: 'Sedang'
  },
  {
    id: 'q-890',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Dalam implementasi Sasaran Keselamatan Pasien (SKP) di rumah sakit, pengelolaan obat-obatan berkewaspadaan tinggi (High Alert Medications) harus diawasi ketat, terutama sediaan elektrolit konsentrat pekat seperti Kalium Klorida (KCl) 7,46%, NaCl 3%, dan Dekstrosa 40%.',
    question: 'Bagaimanakah regulasi standar penyimpanan larutan elektrolit konsentrat pekat tersebut di rumah sakit?',
    options: [
      { key: 'A', text: 'Tidak boleh disimpan di ruang rawat inap umum, hanya disimpan di instalasi/depo farmasi dan unit khusus (ICU/IGD) dengan akses terbatas dan berlabel "HIGH ALERT" merah' },
      { key: 'B', text: 'Boleh disimpan bebas di troli tindakan setiap bangsal rawat inap' },
      { key: 'C', text: 'Disimpan berdampingan dengan larutan infus NaCl 0,9% biasa' },
      { key: 'D', text: 'Boleh diserahkan langsung kepada keluarga pasien untuk diinjeksikan sendiri' },
      { key: 'E', text: 'Disimpan di lemari es obat tanpa penandaan khusus' }
    ],
    correctAnswer: 'A',
    explanation: 'Sesuai Standar Nasional Akreditasi Rumah Sakit (SNARS) dan Kemenkes SKP 3 (Peningkatan Keamanan Obat High Alert): Elektrolit konsentrat pekat (seperti KCl 7,46%, NaCl hipertonik > 0,9%) TIDAK BOLEH disimpan di ruang rawat inap umum. Elektrolit konsentrat hanya boleh disimpan di Instalasi Farmasi dan unit perawatan kritis tertentu (ICU, ICCU, IGD, Kamar Operasi) dengan akses terbatas, diberi label merah mencolok "HIGH ALERT - ELEKTROLIT KONSENTRAT PEKAT - HARUS DIENCERKAN SEBELUM DIGUNAKAN".',
    clinicalReference: 'Standar Akreditasi Kemenkes RI (Sasaran Keselamatan Pasien 3 - Keamanan Obat High Alert)',
    difficulty: 'Mudah'
  },
  {
    id: 'q-891',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'TTK di instalasi farmasi rumah sakit menyiapkan etiket untuk dua resep dokter: Resep 1 berisi tablet Captopril 25 mg untuk hipertensi, dan Resep 2 berisi salep Gentamisin 0,1% untuk infeksi luka kulit.',
    question: 'Apakah warna etiket yang benar yang harus ditempelkan masing-masing pada wadah sediaan Resep 1 dan Resep 2 sesuai peraturan kefarmasian?',
    options: [
      { key: 'A', text: 'Etiket PUTIH untuk Resep 1 (tablet Captopril), dan Etiket BIRU untuk Resep 2 (salep Gentamisin)' },
      { key: 'B', text: 'Etiket BIRU untuk Resep 1, dan Etiket PUTIH untuk Resep 2' },
      { key: 'C', text: 'Kedua sediaan menggunakan etiket KUNING' },
      { key: 'D', text: 'Kedua sediaan menggunakan etiket PUTIH' },
      { key: 'E', text: 'Etiket MERAH untuk Resep 1, dan Etiket HIJAU untuk Resep 2' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan aturan kefarmasian dan Permenkes tentang Pelayanan Kefarmasian: Etiket PUTIH digunakan khusus untuk obat dalam (sediaan oral yang ditelan melewati saluran cerna seperti tablet, kapsul, sirup oral); sedangkan Etiket BIRU digunakan khusus untuk obat luar (sediaan topikal, injeksi parenteral, tetes mata/telinga/hidung, suppositoria, ovula, inhalasi).',
    clinicalReference: 'Kepmenkes No. 280/Menkes/SK/V/1981 & Permenkes No. 73 Tahun 2016 (Penandaan dan Etiket Obat)',
    difficulty: 'Mudah'
  },
  {
    id: 'q-892',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien remaja dengan riwayat asma bronkial menebus resep obat inhaler Salbutamol Metered Dose Inhaler (MDI) di apotek. TTK memberikan penjelasan (edukasi cara pakai) mengenai urutan langkah penggunaan inhaler aerosol yang tepat.',
    question: 'Bagaimanakah urutan langkah penggunaan inhaler MDI yang benar untuk diedukasikan kepada pasien?',
    options: [
      { key: 'A', text: 'Buka penutup dan kocok inhaler -> hembuskan nafas maksimal -> letakkan mouthpiece di mulut rapat-rapat -> tekan canister bersamaan dengan menarik nafas lambat dan dalam -> tahan nafas selama 5-10 detik -> hembuskan nafas perlahan dan berkumur' },
      { key: 'B', text: 'Langsung semprotkan ke mulut tanpa dikocok -> telan udara sebanyak-banyaknya' },
      { key: 'C', text: 'Tarik nafas dulu sampai penuh -> tekan tombol inhaler -> segera keluarkan nafas seketika' },
      { key: 'D', text: 'Semprotkan obat ke dalam gelas air minum lalu diminum' },
      { key: 'E', text: 'Inhaler dihirup lewat hidung dengan mata tertutup' }
    ],
    correctAnswer: 'A',
    explanation: 'Urutan penggunaan MDI yang benar: 1) Buka penutup dan kocok tabung inhaler (3-5 detik); 2) Buang/hembuskan nafas maksimal lewat mulut; 3) Rapatkan bibir melingkari corong mouthpiece; 4) Tekan canister satu kali BERSAMAAN dengan menghirup nafas perlahan dan dalam lewat mulut (koordinasi aktuasi-inhalasi); 5) Lepas corong dan tahan nafas selama 5-10 detik agar partikel obat mengendap di saluran bronkus; 6) Buang nafas perlahan dan berkumur dengan air bersih untuk mencegah efek samping lokal.',
    clinicalReference: 'GINA (Global Initiative for Asthma) Guidelines & Petunjuk Praktis Penggunaan Inhaler Kemenkes',
    difficulty: 'Sedang'
  },
  {
    id: 'q-893',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Seorang Tenaga Teknis Kefarmasian (TTK) yang bertugas di apotek didatangi oleh seorang tetangga pasien. Tetangga tersebut memaksa meminta informasi mengenai riwayat resep dan jenis penyakit yang diderita oleh salah satu pasien terinfeksi HIV/AIDS yang rutin mengambil obat Antiretroviral (ARV) di apotek tersebut.',
    question: 'Bagaimanakah sikap dan tindakan etis yang wajib dilakukan oleh TTK sesuai kode etik profesi dan Undang-Undang Kesehatan No. 17 Tahun 2023?',
    options: [
      { key: 'A', text: 'Menolak secara tegas dan sopan untuk membuka informasi pasien tersebut karena tenaga kefarmasian wajib menjaga kerahasiaan data kesehatan dan rekam medis pasien' },
      { key: 'B', text: 'Menceritakan secara detail riwayat obat pasien karena tetangganya berniat baik' },
      { key: 'C', text: 'Memberikan informasi dengan meminta bayaran sejumlah uang' },
      { key: 'D', text: 'Memperlihatkan lembaran resep asli dokter kepada penanya' },
      { key: 'E', text: 'Menyuruh tetangga tersebut mencari sendiri informasi di komputer apotek' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Undang-Undang Kesehatan No. 17 Tahun 2023 dan Kode Etik Tenaga Teknis Kefarmasian Indonesia (PAFI): Tenaga medis dan tenaga kesehatan wajib menjaga kerahasiaan kesehatan pribadi pasien, riwayat pengobatan, dan resep farmasi. Rahasia kedokteran/kefarmasian hanya boleh dibuka untuk kepentingan kesehatan pasien sendiri, pemenuhan permintaan aparatur penegak hukum yang sah, atau atas persetujuan tertulis dari pasien.',
    clinicalReference: 'Undang-Undang Republik Indonesia No. 17 Tahun 2023 tentang Kesehatan & Kode Etik PAFI',
    difficulty: 'Mudah'
  }
];

