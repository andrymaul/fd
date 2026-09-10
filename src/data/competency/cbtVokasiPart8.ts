import { ExamQuestion } from '../competencyExamData';

/**
 * BANK SOAL CBT UKTVF / APDFI (UJI KOMPETENSI TENAGA VOKASI FARMASI D3)
 * BAGIAN 8: FARMASI BAHAN ALAM, FITOKIMIA, METODE EKSTRAKSI, MIKROSKOPIK SIMPLISIA & STANDARISASI OBAT TRADISIONAL
 * Standar Nasional Asosiasi Pendidikan Diploma Farmasi Indonesia (APDFI), Materia Medika Indonesia & Monografi Ekstrak Tumbuhan Obat BPOM RI
 */
export const CBT_VOKASI_PART_8: ExamQuestion[] = [
  {
    id: 'q-1074',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Seorang TTK di laboratorium fitokimia mengekstraksi 50 gram serbuk rimpang temulawak menggunakan pelarut etanol 70% di dalam bejana tertutup pada suhu kamar dengan pengadukan berkala selama 3 hari, terlindung dari cahaya matahari langsung.',
    question: 'Apakah nama metode ekstraksi dingin yang dilakukan oleh TTK tersebut?',
    options: [
      { key: 'A', text: 'Maserasi' },
      { key: 'B', text: 'Sokletasi' },
      { key: 'C', text: 'Refluks' },
      { key: 'D', text: 'Destilasi uap' },
      { key: 'E', text: 'Dekokta' },
    ],
    correctAnswer: 'A',
    explanation:
      'Maserasi adalah metode ekstraksi dingin yang paling sederhana di mana simplisia direndam dalam cairan penyari (pelarut) pada temperatur ruangan (15 - 25°C) dengan pengadukan berulang secara periodik selama beberapa hari. Metode ini sangat ideal untuk simplisia yang mengandung zat aktif termolabil.',
    clinicalReference:
      'Farmakope Herbal Indonesia Edisi II & Monografi Ekstrak Tumbuhan Obat BPOM RI',
    difficulty: 'Mudah',
  },
  {
    id: 'q-1075',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'TTK melakukan ekstraksi senyawa aktif dari kulit batang kina menggunakan alat kaca bersambung yang terdiri atas labu alas bulat, wadah ekstraksi bersifon, dan kondensor pendingin bola di bagian atas. Pelarut organik dipanaskan hingga menguap, mengembun, membasahi simplisia, dan secara otomatis tersedot kembali ke labu saat cairan mencapai puncak sifon.',
    question: 'Apakah nama metode dan alat ekstraksi tersebut?',
    options: [
      { key: 'A', text: 'Sokletasi (Soxhlet Extraction)' },
      { key: 'B', text: 'Maserasi kinetik' },
      { key: 'C', text: 'Infusa' },
      { key: 'D', text: 'Perkolasi terbuka' },
      { key: 'E', text: 'Destilasi Stahl' },
    ],
    correctAnswer: 'A',
    explanation:
      'Sokletasi adalah metode ekstraksi berkesinambungan (kontinyu) menggunakan alat Soxhlet. Uap pelarut menguap ke kondensor, terkondensasi menetes membasahi simplisia dalam thimble selulosa, dan setelah mencapai ketinggian pipa sifon, seluruh ekstrak akan tersedot turun ke labu penampung. Keuntungannya adalah hemat pelarut dan ekstraksi berlangsung sempurna.',
    clinicalReference:
      'Harborne JB. Metode Fitokimia: Penuntun Cara Modern Menganalisis Tumbuhan',
    difficulty: 'Mudah',
  },
  {
    id: 'q-1076',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'TTK menyiapkan sediaan tradisional dari daun kumis kucing menurut petunjuk Farmakope Indonesia dengan merebus serbuk simplisia dalam panci infusa berisi air pada penangas air bersuhu 90°C selama 15 menit terhitung sejak suhu mencapai 90°C.',
    question:
      'Apakah nama bentuk sediaan cair sari tradisional yang dihasilkan tersebut?',
    options: [
      { key: 'A', text: 'Infusa' },
      { key: 'B', text: 'Dekokta' },
      { key: 'C', text: 'Maserat' },
      { key: 'D', text: 'Perkolat' },
      { key: 'E', text: 'Tingtur' },
    ],
    correctAnswer: 'A',
    explanation:
      'Infusa (infus) adalah sediaan cair yang dibuat dengan mengekstraksi simplisia nabati dengan air pada suhu 90°C selama 15 menit. Jika ekstraksi air dilakukan pada suhu 90°C selama 30 menit (biasanya untuk bahan keras seperti kulit kayu/korteks, kayu/lignum, akar/radiks), sediaan disebut Dekokta (dekok).',
    clinicalReference:
      'Farmakope Indonesia Edisi VI & Formularium Ramuan Obat Tradisional Kemenkes',
    difficulty: 'Mudah',
  },
  {
    id: 'q-1077',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'Pada pembuatan sediaan sari kayu manis (Cinnamomi Cortex) dan kulit batang kina, TTK melakukan penyarian dengan air pada suhu 90°C selama 30 menit.',
    question: 'Mengapa bahan simplisia tersebut disari dengan metode dekokta?',
    options: [
      {
        key: 'A',
        text: 'Karena simplisia memiliki jaringan keras, liat, dan dinding sel berkayu tebal sehingga butuh waktu pemanasan lebih lama',
      },
      {
        key: 'B',
        text: 'Karena simplisia mudah larut dalam waktu 1 menit',
      },
      {
        key: 'C',
        text: 'Untuk menghilangkan seluruh rasa pahit dan aroma',
      },
      {
        key: 'D',
        text: 'Agar seluruh zat aktif menguap ke udara bebas',
      },
      {
        key: 'E',
        text: 'Karena dekokta menggunakan pelarut alkohol murni',
      },
    ],
    correctAnswer: 'A',
    explanation:
      'Dekokta dikhususkan untuk simplisia nabati yang keras, liat, dan berdinding sel tebal seperti korteks (kulit batang), lignum (kayu), semen (biji keras), atau radiks (akar keras) yang memerlukan penetrasi air dan waktu pemanasan lebih lama (30 menit pada 90°C) agar metabolit sekunder dapat terekstraksi optimal.',
    clinicalReference: 'Farmakope Herbal Indonesia & Voigt R. Teknologi Farmasi',
    difficulty: 'Mudah',
  },
  {
    id: 'q-1078',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'Seorang TTK melakukan isolasi minyak atsiri dari bunga cengkeh (Syzygium aromaticum) menggunakan bejana ketel destilasi dengan memanaskan campuran bunga cengkeh dan air suling secara bersamaan.',
    question:
      'Apakah nama metode pemisahan minyak atsiri menggunakan penguapan bersama uap air tersebut?',
    options: [
      { key: 'A', text: 'Destilasi Uap-Air / Destilasi Air' },
      { key: 'B', text: 'Maserasi digesti' },
      { key: 'C', text: 'Sokletasi bertingkat' },
      { key: 'D', text: 'Sentrifugasi ultra' },
      { key: 'E', text: 'Kristalisasi beku' },
    ],
    correctAnswer: 'A',
    explanation:
      'Destilasi air / uap-air (Hydrodistillation) adalah metode utama isolasi minyak atsiri dari tanaman. Uap air yang terbentuk membawa senyawa volatil minyak atsiri menguap pada suhu di bawah titik didih masing-masing komponennya, lalu terkondensasi dan dipisahkan dalam buret penampung (alat Stahl atau Clevenger).',
    clinicalReference:
      'Farmakope Herbal Indonesia Edisi II, Penetapan Kadar Minyak Atsiri',
    difficulty: 'Mudah',
  },
  {
    id: 'q-1079',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'Minyak atsiri daun nilam yang ditampung dalam buret pemisah memiliki massa jenis lebih besar daripada air suling (BJ > 1,000 g/mL), sehingga lapisan minyak berada di bawah lapisan air.',
    question:
      'Komponen kimia utama apakah yang memberikan aroma khas dan mendominasi minyak nilam (Pogostemon cablin)?',
    options: [
      { key: 'A', text: 'Patchouli alcohol (Patchoulol)' },
      { key: 'B', text: 'Eugenol' },
      { key: 'C', text: 'Sitronelal' },
      { key: 'D', text: 'Kurkumin' },
      { key: 'E', text: 'Menthol' },
    ],
    correctAnswer: 'A',
    explanation:
      'Patchouli alcohol (Patchoulol) adalah senyawa seskuiterpen alkohol yang merupakan komponen utama dan senyawa penentu mutu (marker) dari minyak nilam (Pogostemon cablin) dengan kadar standar ekspor minimal 30-32%.',
    clinicalReference:
      'Standar Nasional Indonesia (SNI 06-2385-2006) Minyak Nilam',
    difficulty: 'Sedang',
  },
  {
    id: 'q-1080',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'TTK melakukan ekstraksi simplisia daun digitalis (Digitalis purpurea) menggunakan bejana perkolator berbentuk kerucut terbalik. Pelarut dialirkan dari atas menetes secara lambat dan teratur melalui kran bawah.',
    question: 'Berapakah kecepatan penetesan perkolat yang ideal menurut Farmakope untuk perkolasi skala laboratorium?',
    options: [
      { key: 'A', text: '1 - 2 mL per menit (sekitar 20 - 40 tetes per menit)' },
      { key: 'B', text: '100 mL per detik' },
      { key: 'C', text: '1 tetes per jam' },
      { key: 'D', text: '50 mL per menit' },
      { key: 'E', text: 'Bebas dibuka penuh tanpa pembatasan' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pada proses perkolasi, kecepatan aliran perkolat diatur lambat (biasanya 1 hingga 2 mL per menit untuk 1.000 g simplisia atau sekitar 20 - 40 tetes per menit) agar terjadi kontak keseimbangan yang optimal antara pelarut segar dengan sel simplisia.',
    clinicalReference:
      'Farmakope Indonesia & Voigt R. Buku Pelajaran Teknologi Farmasi',
    difficulty: 'Sedang',
  },
  {
    id: 'q-1081',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'Seorang TTK melakukan uji skrining fitokimia golongan alkaloid terhadap ekstrak daun tapak dara (Catharanthus roseus). Ekstrak dilarutkan dalam asam klorida encer lalu dibagi ke dalam tabung reaksi dan ditetesi Pereaksi Mayer.',
    question:
      'Apakah hasil pengamatan positif yang menunjukkan keberadaan alkaloid dengan pereaksi Mayer?',
    options: [
      { key: 'A', text: 'Terbentuk endapan putih atau kekuningan' },
      { key: 'B', text: 'Terbentuk endapan merah bata atau jingga' },
      { key: 'C', text: 'Terbentuk warna hijau kehitaman' },
      { key: 'D', text: 'Terbentuk busa tebal stabil' },
      { key: 'E', text: 'Larutan berubah menjadi ungu menyala' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pereaksi Mayer (Kalium tetraiodomerkurat(II)) bereaksi positif dengan alkaloid membentuk endapan putih atau putih kekuningan. Pereaksi Dragendorff (Kalium bismut iodida) membentuk endapan jingga hingga merah bata, dan Pereaksi Wagner (Iodium-Kalium Iodida) membentuk endapan cokelat tua/hitam.',
    clinicalReference:
      'Harborne JB. Metode Fitokimia & Materia Medika Indonesia',
    difficulty: 'Mudah',
  },
  {
    id: 'q-1082',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'Pada tabung kedua uji alkaloid, TTK meneteskan Pereaksi Dragendorff ke dalam filtrat asam ekstrak daun tapak dara.',
    question:
      'Apakah warna endapan yang terbentuk sebagai indikator positif pereaksi Dragendorff?',
    options: [
      { key: 'A', text: 'Endapan jingga hingga merah bata' },
      { key: 'B', text: 'Endapan putih susu' },
      { key: 'C', text: 'Endapan biru tua' },
      { key: 'D', text: 'Warna ungu muda' },
      { key: 'E', text: 'Busa putih' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pereaksi Dragendorff (larutan bismut subnitrat dalam asam nitrat/asetat dan kalium iodida) bereaksi dengan alkaloid membentuk kompleks garam kalium-alkaloid-bismut iodida yang mengendap berwarna jingga kemerahan (merah bata).',
    clinicalReference:
      'Harborne JB. Metode Fitokimia: Penuntun Cara Modern Menganalisis Tumbuhan',
    difficulty: 'Mudah',
  },
  {
    id: 'q-1083',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'TTK melakukan identifikasi golongan senyawa flavonoid pada ekstrak daun jambu biji menggunakan uji Shinoda (Uji Wilstatter). Ke dalam 2 mL filtrat ekstrak ditambahkan serbuk logam magnesium (Mg) dan beberapa tetes Asam Klorida (HCl) pekat.',
    question:
      'Apakah perubahan warna larutan yang menandakan reaksi positif flavonoid pada uji Shinoda?',
    options: [
      { key: 'A', text: 'Terbentuk warna merah, magenta, atau merah jingga' },
      { key: 'B', text: 'Terbentuk warna biru gelap' },
      { key: 'C', text: 'Terbentuk endapan hitam pekat' },
      { key: 'D', text: 'Larutan menjadi bening tanpa warna' },
      { key: 'E', text: 'Terbentuk endapan gelatin putih' },
    ],
    correctAnswer: 'A',
    explanation:
      'Uji Shinoda (reduksi magnesium-HCl pekat) mereduksi inti benzopiron flavonoid (khususnya flavon, flavonol, flavanon) membentuk garam flavilium yang berwarna merah intens, jingga, magenta, atau merah muda.',
    clinicalReference:
      'Harborne JB. Metode Fitokimia & Materia Medika Indonesia',
    difficulty: 'Mudah',
  },
  {
    id: 'q-1084',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'TTK menguji adanya tanin dalam rebusan daun sirih merah. Larutan ekstrak ditambahkan 2 tetes larutan Besi(III) Klorida (FeCl3) 1%. Teramati larutan seketika berubah warna menjadi hijau kehitaman.',
    question: 'Jenis tanin apakah yang memberikan respon warna hijau kehitaman dengan pereaksi FeCl3?',
    options: [
      { key: 'A', text: 'Tanin terkondensasi (Katekol)' },
      { key: 'B', text: 'Tanin terhidrolisis (Gallotanin)' },
      { key: 'C', text: 'Tanin semu (Pseudotanin)' },
      { key: 'D', text: 'Saponin steroid' },
      { key: 'E', text: 'Alkaloid piperin' },
    ],
    correctAnswer: 'A',
    explanation:
      'Dengan penambahan FeCl3, tanin terkondensasi (katekol / proantosianidin) menghasilkan warna hijau kehitaman atau cokelat kehijauan. Sebaliknya, tanin terhidrolisis (gallotanin / asam elagat) menghasilkan warna biru tua kehitaman.',
    clinicalReference:
      'Trease and Evans Pharmacognosy & Materia Medika Indonesia',
    difficulty: 'Sedang',
  },
  {
    id: 'q-1085',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'Selain uji warna dengan FeCl3, keberadaan tanin sejati dibuktikan dengan kemampuannya mengendapkan larutan protein.',
    question:
      'Larutan reagen protein apakah yang lazim digunakan untuk uji konfirmasi pengendapan tanin tersebut?',
    options: [
      { key: 'A', text: 'Larutan Gelatin 1%' },
      { key: 'B', text: 'Larutan Glukosa 10%' },
      { key: 'C', text: 'Larutan Natrium Klorida jenuh' },
      { key: 'D', text: 'Larutan Kanji amilum' },
      { key: 'E', text: 'Larutan Kloroform' },
    ],
    correctAnswer: 'A',
    explanation:
      'Tanin adalah polifenol dengan kemampuan mengikat dan mengendapkan protein. Uji baku pembeda tanin sejati dari polifenol sederhana adalah Uji Gelatin: penambahan larutan gelatin 1% (yang mengandung NaCl 10%) ke dalam ekstrak akan menghasilkan endapan putih flokulan.',
    clinicalReference: 'Materia Medika Indonesia & Harborne JB',
    difficulty: 'Mudah',
  },
  {
    id: 'q-1086',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'Dalam pengujian ekstrak buah lerak (Sapindus rarak) dan rimpang ginseng, TTK memasukkan 10 mL filtrat ekstrak ke dalam tabung reaksi bertutup, mengocoknya vertikal secara kuat selama 10 detik, lalu menambahkan 1 tetes HCl 2N.',
    question:
      'Apakah hasil pengamatan uji buih (metode Forth) yang membuktikan adanya senyawa saponin?',
    options: [
      {
        key: 'A',
        text: 'Terbentuk busa/buih stabil setinggi minimal 1 cm yang bertahan lebih dari 10 menit dan tidak hilang dengan penambahan HCl',
      },
      {
        key: 'B',
        text: 'Busa langsung hilang seketika dalam 2 detik',
      },
      {
        key: 'C',
        text: 'Cairan memisah menjadi dua lapisan minyak dan air',
      },
      {
        key: 'D',
        text: 'Larutan membeku menjadi agar-agar',
      },
      {
        key: 'E',
        text: 'Terbentuk uap gas belerang menyengat',
      },
    ],
    correctAnswer: 'A',
    explanation:
      'Saponin adalah glikosida surfaktan alami (amfifilik) yang menurunkan tegangan permukaan air. Pada uji buih (Forth test), pengocokan kuat akan membentuk busa tebal setinggi minimal 1 cm yang stabil (bertahan minimal 10 menit) dan tidak hilang saat diasamkan dengan beberapa tetes HCl encer.',
    clinicalReference:
      'Materia Medika Indonesia Jilid VI & Farmakope Herbal Indonesia',
    difficulty: 'Mudah',
  },
  {
    id: 'q-1087',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'TTK melakukan uji Borntrager terhadap ekstrak daun jati cina (Cassia senna). Ekstrak dididihkan dengan KOH lalu diasamkan dan diekstraksi dengan benzena, kemudian fase benzena dipisahkan dan ditambahkan amonia encer.',
    question:
      'Golongan metabolit sekunder apakah yang diidentifikasi oleh uji Borntrager yang menghasilkan warna merah muda pada lapisan air/amonia?',
    options: [
      { key: 'A', text: 'Glikosida Antrakuinon' },
      { key: 'B', text: 'Minyak atsiri monoterpen' },
      { key: 'C', text: 'Alkaloid indol' },
      { key: 'D', text: 'Karbohidrat pati' },
      { key: 'E', text: 'Pektin' },
    ],
    correctAnswer: 'A',
    explanation:
      'Uji Borntrager spesifik untuk mendeteksi aglikon antrakuinon bebas (seperti emodin, senidin, aloe-emodin). Penambahan amonia atau KOH alkali akan membentuk senyawa fenolat terionisasi berwarna merah muda, merah ceri, atau merah violet pada lapisan berair.',
    clinicalReference:
      'Harborne JB. Metode Fitokimia & Evans WC. Trease and Evans Pharmacognosy',
    difficulty: 'Sedang',
  },
  {
    id: 'q-1088',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'Pengujian fitokimia steroid dan triterpenoid pada ekstrak pegagan (Centella asiatica) dilakukan dengan mereaksikan residu ekstrak bebas air dengan beberapa tetes asam asetat anhidrida dan asam sulfat pekat (Pereaksi Liebermann-Burchard).',
    question:
      'Perubahan warna apakah yang terbentuk jika sampel mengandung senyawa triterpenoid?',
    options: [
      { key: 'A', text: 'Merah, merah muda keunguan, atau jingga kecokelatan' },
      { key: 'B', text: 'Hijau atau biru' },
      { key: 'C', text: 'Putih susu' },
      { key: 'D', text: 'Kuning jernih stabil' },
      { key: 'E', text: 'Hitam legam' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pada uji Liebermann-Burchard (asam asetat anhidrida + H2SO4 pekat): senyawa triterpenoid menghasilkan cincin warna merah, merah muda keunguan, atau jingga; sedangkan steroid menghasilkan warna hijau atau biru kehijauan.',
    clinicalReference:
      'Harborne JB. Metode Fitokimia & Monografi Ekstrak Tumbuhan Obat BPOM',
    difficulty: 'Sedang',
  },
  {
    id: 'q-1089',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'Seorang TTK memeriksa preparat serbuk simplisia rimpang temulawak (Curcuma xanthorrhiza Rhizoma) di bawah mikroskop optik perbesaran 400x dengan reagen kloralhidrat LP.',
    question:
      'Fragmen pengenal mikroskopik khas apakah yang menjadi penanda utama identifikasi temulawak?',
    options: [
      {
        key: 'A',
        text: 'Fragmen rambut penutup bertanduk, butir amilum berbentuk pipih bulat panjang dengan hilus eksentrik, dan sel parenkim berisi zat warna kuning kurkuminoid',
      },
      {
        key: 'B',
        text: 'Rambut kelenjar tipe bintang (bintang bersel banyak)',
      },
      {
        key: 'C',
        text: 'Sklereida berbentuk huruf U berdinding tebal',
      },
      {
        key: 'D',
        text: 'Kristal kalsium oksalat bentuk roset sangat besar',
      },
      {
        key: 'E',
        text: 'Stomata tipe parasitik tanpa amilum',
      },
    ],
    correctAnswer: 'A',
    explanation:
      'Fragmen mikroskopik khas temulawak (Curcuma xanthorrhiza) meliputi: rambut penutup berbentuk kerucut pendek berdinding tebal, butir amilum besar berbentuk bulat telur pipih dengan lamela dan hilus di ujung (eksentrik), sel-sel parenkim korteks yang terisi kurkuminoid berwarna kuning jingga, dan berkas pembuluh tangga/jala.',
    clinicalReference:
      'Materia Medika Indonesia Jilid I & Farmakope Herbal Indonesia',
    difficulty: 'Sedang',
  },
  {
    id: 'q-1090',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'Pada pengamatan mikroskopik serbuk simplisia rimpang jahe (Zingiber officinale Rhizoma), TTK menemukan fragmen khas yang membedakannya dari rimpang lainnya.',
    question:
      'Fragmen serbuk mikroskopik apakah yang menjadi penciri utama rimpang jahe?',
    options: [
      {
        key: 'A',
        text: 'Serabut sklerenkim dengan salah satu dinding berombak (bergigi) dan sel minyak berbentuk bulat lonjong',
      },
      {
        key: 'B',
        text: 'Trikoma rambut bintang',
      },
      {
        key: 'C',
        text: 'Kristal kalsium oksalat bentuk pasir melimpah',
      },
      {
        key: 'D',
        text: 'Kelenjar minyak skizolisigen raksasa',
      },
      {
        key: 'E',
        text: 'Parenkim bersayap hijau tua',
      },
    ],
    correctAnswer: 'A',
    explanation:
      'Penciri mikroskopik rimpang jahe (Zingiber officinale) antara lain: serabut sklerenkim panjang yang salah satu dindingnya berombak/bergigi (dentate sclerenchymatous fibers), butir amilum berbentuk lonjong dengan puting di salah satu ujungnya, sel sekresi berisi minyak atsiri dan oleoresin gingerol.',
    clinicalReference:
      'Materia Medika Indonesia Jilid I & Farmakope Herbal Indonesia',
    difficulty: 'Sedang',
  },
  {
    id: 'q-1091',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'TTK mengamati serbuk daun kumis kucing (Orthosiphonis staminei Folium) di bawah mikroskop.',
    question:
      'Fragmen trikoma kelenjar (rambut kelenjar) tipe apakah yang khas ditemukan pada famili Lamiaceae seperti kumis kucing?',
    options: [
      {
        key: 'A',
        text: 'Rambut kelenjar (rambut sisik) bertangkai pendek dengan kepala bersel 4 atau 8 (tipe Lamiaceae)',
      },
      {
        key: 'B',
        text: 'Rambut penutup bersel satu berduri kutil (verukosa)',
      },
      {
        key: 'C',
        text: 'Rambut bintang multiseluler bertingkat',
      },
      {
        key: 'D',
        text: 'Rambut bercabang garpu',
      },
      {
        key: 'E',
        text: 'Kelenjar berleher spiral panjang',
      },
    ],
    correctAnswer: 'A',
    explanation:
      'Daun kumis kucing (Orthosiphon stamineus, suku Lamiaceae) memiliki rambut kelenjar tipe Lamiaceae yang sangat khas, yaitu bertangkai pendek bersel 1 dengan kepala kelenjar multiseluler berbentuk piringan bundar bersel 4 sampai 8 sel pensekresi, serta sel rambut penutup bersel 1-3.',
    clinicalReference:
      'Materia Medika Indonesia Jilid II & Farmakope Herbal Indonesia',
    difficulty: 'Tinggi',
  },
  {
    id: 'q-1092',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'Pada identifikasi mikroskopik serbuk daun jati belanda (Guazumae ulmifoliae Folium) yang lazim digunakan sebagai herbal pelangsing, ditemukan fragmen trikoma yang sangat spesifik.',
    question:
      'Apakah bentuk rambut penutup spesifik pada daun jati belanda tersebut?',
    options: [
      { key: 'A', text: 'Rambut penutup berbentuk bintang (rambut bintang / stellate hair)' },
      { key: 'B', text: 'Rambut jarum tunggal lurus' },
      { key: 'C', text: 'Rambut kait menyerupai kail pancing' },
      { key: 'D', text: 'Rambut tumpul bersel banyak berinti dua' },
      { key: 'E', text: 'Rambut gelembung air' },
    ],
    correctAnswer: 'A',
    explanation:
      'Fragmen pengenal utama serbuk daun jati belanda (Guazuma ulmifolia) adalah rambut penutup berbentuk bintang (stellate hairs / rambut bintang) yang terdiri atas kumpulan beberapa rambut penutup yang bersatu di pangkalnya menyerupai bintang.',
    clinicalReference:
      'Materia Medika Indonesia Jilid III & Atlas Mikroskopi Tumbuhan Obat',
    difficulty: 'Mudah',
  },
  {
    id: 'q-1093',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'TTK memeriksa serbuk kulit kayu manis (Cinnamomi burmannii Cortex). Pada preparat teramati sel batu (sklereida) dengan penebalan dinding lignifikasi yang khas menyerupai huruf U.',
    question:
      'Apakah fungsi penambahan larutan Floroglusin-HCl pada preparat mikroskopik simplisia jaringan berkayu?',
    options: [
      { key: 'A', text: 'Memberikan warna merah ceri pada jaringan terlignifikasi (sel batu, serabut sklerenkim, dan trakea xylem)' },
      { key: 'B', text: 'Mewarnai butir amilum menjadi biru gelap' },
      { key: 'C', text: 'Melarutkan seluruh selulosa' },
      { key: 'D', text: 'Menghilangkan kristal kalsium oksalat' },
      { key: 'E', text: 'Mengawetkan preparat agar tidak kering' },
    ],
    correctAnswer: 'A',
    explanation:
      'Reagen Floroglusin-HCl (campuran larutan floroglusinol 1% dalam alkohol dan asam klorida pekat) digunakan dalam mikroskopi botani farmasi untuk mewarnai lignin secara spesifik, menghasilkan warna merah muda hingga merah ceri pada sel sklerenkim, sklereida, dan xilem.',
    clinicalReference:
      'Materia Medika Indonesia & Evans WC. Pharmacognosy',
    difficulty: 'Sedang',
  },
  {
    id: 'q-1094',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'Untuk melihat preparat fragmen jaringan simplisia agar jernih dan bebas dari butir amilum yang menumpuk, TTK menetesi preparat dengan larutan Kloralhidrat LP di atas kaca objek lalu menghangatkannya perlahan di atas api spiritus.',
    question: 'Apakah fungsi utama larutan Kloralhidrat LP dalam analisis mikroskopi simplisia?',
    options: [
      { key: 'A', text: 'Sebagai media penjernih (clearing agent) yang melarutkan amilum dan protein sehingga dinding sel terlihat jelas' },
      { key: 'B', text: 'Sebagai pewarna inti sel' },
      { key: 'C', text: 'Sebagai pereaksi uji saponin' },
      { key: 'D', text: 'Untuk membunuh bakteri patogen' },
      { key: 'E', text: 'Untuk mengentalkan cairan sel' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kloralhidrat LP adalah agen penjernih (clearing agent) standar dalam farmakognosi mikroskopik. Pemanasan lembut bersama kloralhidrat akan melarutkan butir-butir pati, tetes minyak, dan protein yang menghalangi pandangan, sehingga batas dinding sel, stomata, dan kristal kalsium oksalat tampak kontras dan jernih.',
    clinicalReference:
      'Farmakope Herbal Indonesia & Materia Medika Indonesia',
    difficulty: 'Mudah',
  },
  {
    id: 'q-1095',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'Dalam standarisasi ekstrak kental daun sambiloto (Andrographis paniculata), TTK melakukan pengujian parameter spesifik dan non-spesifik menurut pedoman BPOM.',
    question:
      'Senyawa marker (senyawa identitas penanda aktif) apakah yang kadarnya ditetapkan dalam ekstrak daun sambiloto?',
    options: [
      { key: 'A', text: 'Andrografolid' },
      { key: 'B', text: 'Kurkuminoid' },
      { key: 'C', text: 'Kuersetin' },
      { key: 'D', text: 'Piperin' },
      { key: 'E', text: 'Mangiferin' },
    ],
    correctAnswer: 'A',
    explanation:
      'Andrografolid adalah senyawa diterpen lakton yang merupakan komponen aktif utama (marker compound) dan penanggung jawab rasa pahit serta aktivitas imunomodulator/antiinflamasi dari daun sambiloto (Andrographis paniculata).',
    clinicalReference:
      'Farmakope Herbal Indonesia Edisi II & Monografi Ekstrak Tumbuhan Obat BPOM',
    difficulty: 'Mudah',
  },
  {
    id: 'q-1096',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'TTK melakukan pengujian penetapan Susut Pengeringan (Loss on Drying) terhadap simplisia serbuk rimpang kencur (Kaempferia galanga) menggunakan oven pada suhu 105°C hingga diperoleh bobot konstan.',
    question: 'Apakah yang diukur pada pengujian penetapan Susut Pengeringan tersebut?',
    options: [
      { key: 'A', text: 'Seluruh zat yang menguap pada suhu 105°C, termasuk air bebas dan senyawa volatil (minyak atsiri)' },
      { key: 'B', text: 'Hanya air murni secara selektif' },
      { key: 'C', text: 'Kadar abu anorganik' },
      { key: 'D', text: 'Kadar logam berat' },
      { key: 'E', text: 'Kadar serat kasar' },
    ],
    correctAnswer: 'A',
    explanation:
      'Susut Pengeringan (Loss on Drying) mengukur semua senyawa yang dapat menguap pada temperatur 105°C, yang meliputi air dan komponen volatil lainnya (seperti minyak atsiri dan alkohol residu). Berbeda dengan uji kadar air (metode Karl Fischer atau destilasi toluen) yang mengukur molekul air saja.',
    clinicalReference:
      'Farmakope Herbal Indonesia Edisi II & Farmakope Indonesia Edisi VI',
    difficulty: 'Sedang',
  },
  {
    id: 'q-1097',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'Untuk simplisia yang mengandung minyak atsiri dalam jumlah tinggi (seperti bunga cengkeh atau biji pala), penentuan kadar air tidak boleh menggunakan oven susut pengeringan karena minyak atsiri akan ikut menguap.',
    question:
      'Metode apakah yang resmi digunakan untuk menetapkan kadar air simplisia yang kaya minyak atsiri menurut Farmakope Herbal Indonesia?',
    options: [
      { key: 'A', text: 'Metode Destilasi Toluen (Destilasi Azeotropik)' },
      { key: 'B', text: 'Pemanasan microwave' },
      { key: 'C', text: 'Kromatografi gas detektor nyala' },
      { key: 'D', text: 'Spektrofotometri UV-Vis' },
      { key: 'E', text: 'Penyaringan corong buchner' },
    ],
    correctAnswer: 'A',
    explanation:
      'Penetapan kadar air untuk bahan yang mengandung minyak atsiri dilakukan dengan metode Destilasi Toluen (destilasi azeotropik). Toluen dan air membentuk campuran azeotrop yang menguap bersama; setelah dikondensasikan pada tabung penerima berskala, air memisah di dasar tabung dan volumenya dapat dibaca secara presisi.',
    clinicalReference:
      'Farmakope Herbal Indonesia Edisi II, Penetapan Kadar Air Metode Destilasi Toluen',
    difficulty: 'Sedang',
  },
  {
    id: 'q-1098',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'TTK menimbang 2 gram ekstrak herba meniran, memijarkannya dalam krus platina/silika di dalam tanur muffle furnace pada suhu 600°C perlahan hingga arang habis dan abu berwarna putih kelabu.',
    question: 'Apakah parameter standarisasi ekstrak yang sedang ditetapkan oleh TTK tersebut?',
    options: [
      { key: 'A', text: 'Kadar Abu Total' },
      { key: 'B', text: 'Kadar Sari Larut Air' },
      { key: 'C', text: 'Cemaran Mikroba' },
      { key: 'D', text: 'Kadar Minyak Lemak' },
      { key: 'E', text: 'Kadar Flavonoid' },
    ],
    correctAnswer: 'A',
    explanation:
      'Penetapan Kadar Abu Total bertujuan memberikan gambaran kandungan mineral internal (fisiologis) dan mineral eksternal (non-fisiologis seperti tanah/pasir) yang tertinggal setelah zat organik terbakar sempurna pada pemanasan suhu tinggi 500 - 600°C.',
    clinicalReference:
      'Parameter Standar Umum Ekstrak Tumbuhan Obat BPOM RI & Farmakope Herbal Indonesia',
    difficulty: 'Mudah',
  },
  {
    id: 'q-1099',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'Setelah pengujian kadar abu total, abu yang dihasilkan dilarutkan dalam asam klorida encer panas, disaring melalui kertas saring bebas abu, dan dipijarkan kembali.',
    question: 'Apakah tujuan penetapan Kadar Abu Tidak Larut Asam?',
    options: [
      { key: 'A', text: 'Menentukan tingkat kontaminasi kotoran mineral eksternal berupa silika, pasir, dan tanah pada simplisia' },
      { key: 'B', text: 'Mengukur kadar kalsium dalam sel' },
      { key: 'C', text: 'Mengukur keasaman ekstrak' },
      { key: 'D', text: 'Mengidentifikasi jenis logam berat timbal' },
      { key: 'E', text: 'Memastikan tidak ada serangga' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kadar Abu Tidak Larut Asam mengukur sisa abu anorganik yang tidak larut dalam HCl encer, yang utamanya merupakan senyawa silikat / silika (pasir, debu tanah). Nilai ini menunjukkan tingkat kebersihan saat pemanenan dan pencucian simplisia dari kontaminasi tanah.',
    clinicalReference:
      'Farmakope Herbal Indonesia Edisi II & Materia Medika Indonesia',
    difficulty: 'Sedang',
  },
  {
    id: 'q-1100',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'Sebuah produk obat tradisional di pasaran mencantumkan logo berupa lingkaran berwarna hijau dengan gambar ranting pohon daun tiga berwarna hijau di bagian sudut kiri atas kemasannya.',
    question: 'Apakah kategori dan dasar klaim khasiat dari produk obat tradisional berlogo tersebut?',
    options: [
      { key: 'A', text: 'Jamu (Klaim khasiat dibuktikan secara empiris turun-temurun minimal 3 generasi)' },
      { key: 'B', text: 'Obat Herbal Terstandar (Uji praklinis pada hewan)' },
      { key: 'C', text: 'Fitofarmaka (Uji klinis pada manusia)' },
      { key: 'D', text: 'Suplemen Kesehatan Impor' },
      { key: 'E', text: 'Obat Keras Narkotika' },
    ],
    correctAnswer: 'A',
    explanation:
      'Logo ranting pohon dengan dedaunan hijau di dalam lingkaran hijau adalah logo Jamu. Jamu adalah obat bahan alam Indonesia yang keamanan dan khasiatnya dibuktikan secara empiris / turun-temurun berdasarkan pengalaman penggunaan tradisional minimal selama tiga generasi.',
    clinicalReference:
      'Peraturan BPOM RI No. 32 Tahun 2019 tentang Persyaratan Keamanan dan Mutu Obat Tradisional',
    difficulty: 'Mudah',
  },
  {
    id: 'q-1101',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'Produk sirup herbal pereda batuk di apotek mencantumkan logo lingkaran berisi tiga pasang bintang berwarna hijau (jari-jari 6).',
    question: 'Apakah nama kelompok obat herbal tersebut dan apakah syarat ilmiah pembuktiannya menurut BPOM?',
    options: [
      { key: 'A', text: 'Obat Herbal Terstandar / OHT (Telah dibuktikan keamanan dan khasiatnya secara ilmiah melalui uji praklinis pada hewan uji serta bahan bakunya terstandarisasi)' },
      { key: 'B', text: 'Jamu gendong tradisional' },
      { key: 'C', text: 'Fitofarmaka uji klinis rumah sakit' },
      { key: 'D', text: 'Kosmetik herbal' },
      { key: 'E', text: 'Pangan olahan khusus' },
    ],
    correctAnswer: 'A',
    explanation:
      'Obat Herbal Terstandar (OHT) memiliki logo lingkaran hijau berisi 3 pasang bintang hijau. Persyaratan OHT: telah dibuktikan keamanan dan khasiatnya secara ilmiah melalui uji praklinis (in vivo pada hewan uji laboratorium) serta bahan baku simplisia/ekstrak yang digunakan telah distandarisasi.',
    clinicalReference:
      'Keputusan Kepala BPOM RI tentang Ketentuan Pokok Pengelompokan Obat Bahan Alam',
    difficulty: 'Mudah',
  },
  {
    id: 'q-1102',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'Suatu sediaan kapsul imunomodulator ekstrak herba meniran (Phyllanthus niruri) telah melewati uji praklinis toksisitas pada hewan dan uji klinis multisenter fase I, II, dan III pada pasien manusia, serta bahan baku dan produk jadinya terstandarisasi secara ketat.',
    question: 'Apakah nama golongan obat tradisional tersebut dan apakah logonya?',
    options: [
      { key: 'A', text: 'Fitofarmaka (Logo lingkaran hijau dengan gambar jari-jari daun membentuk bintang/kristal salju hijau)' },
      { key: 'B', text: 'Jamu (Logo pohon hijau)' },
      { key: 'C', text: 'OHT (Logo 3 pasang bintang)' },
      { key: 'D', text: 'Obat generik berlogo' },
      { key: 'E', text: 'Obat Bebas Terbatas' },
    ],
    correctAnswer: 'A',
    explanation:
      'Fitofarmaka adalah obat bahan alam yang telah dibuktikan keamanan dan khasiatnya secara ilmiah melalui uji praklinis dan uji klinis pada manusia, serta bahan baku dan produk jadinya telah terstandarisasi. Logonya berupa lingkaran hijau berisi jari-jari daun yang membentuk kristal es/salju (bintang bersudut banyak) berwarna hijau.',
    clinicalReference:
      'Peraturan BPOM RI tentang Kriteria dan Tata Laksana Registrasi Obat Tradisional',
    difficulty: 'Mudah',
  },
  {
    id: 'q-1103',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'Dalam pengawasan rutin BPOM terhadap peredaran jamu pegal linu tradisional, ditemukan sampel jamu cair yang dicampur dengan Bahan Kimia Obat (BKO) secara ilegal untuk memberikan efek pereda nyeri instan (cespleng).',
    question:
      'Bahan Kimia Obat (BKO) analgesik/antiinflamasi ilegal manakah yang paling sering dicampurkan ke dalam jamu pegal linu asam urat?',
    options: [
      { key: 'A', text: 'Parasetamol, Fenilbutazon, atau Deksametason' },
      { key: 'B', text: 'Amoksisilin' },
      { key: 'C', text: 'Vitamin C' },
      { key: 'D', text: 'Glukosa' },
      { key: 'E', text: 'Minyak kelapa' },
    ],
    correctAnswer: 'A',
    explanation:
      'Menurut peraturan BPOM, obat tradisional dilarang keras mengandung Bahan Kimia Obat (BKO). Pada jamu pegal linu/encok/asam urat, BKO yang sering disalahgunakan secara ilegal adalah parasetamol, fenilbutazon, natrium diklofenak, piroksikam, dan kortikosteroid seperti deksametason.',
    clinicalReference:
      'Public Warning Badan Pengawas Obat dan Makanan (BPOM) RI tentang Obat Tradisional Mengandung BKO',
    difficulty: 'Mudah',
  },
  {
    id: 'q-1104',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'BKO lain yang kerap ditemukan dalam jamu stamina pria/vitalitas secara ilegal adalah sildenafil sitrat atau tadalafil.',
    question: 'Apakah risiko bahaya kardiovaskular fatal dari konsumsi jamu yang dicemari sildenafil sitrat tanpa resep dokter?',
    options: [
      { key: 'A', text: 'Hipotensi mendadak, syok sirkulasi, infark miokard akut, dan aritmia' },
      { key: 'B', text: 'Anemia defisiensi besi' },
      { key: 'C', text: 'Hipotiroidisme primer' },
      { key: 'D', text: 'Pertumbuhan rambut berlebih' },
      { key: 'E', text: 'Konstipasi ringan' },
    ],
    correctAnswer: 'A',
    explanation:
      'Sildenafil sitrat adalah vasodilator selektif fosfodiesterase-5 (PDE-5 inhibitor). Jika dikonsumsi tanpa kontrol, terutama oleh penderita gangguan jantung atau bersama obat nitrat (seperti ISDN), dapat memicu hipotensi berat mendadak, iskemia miokard, serangan jantung fatal, atau stroke.',
    clinicalReference:
      'Badan POM RI Public Warning & Pusat Informasi Obat Nasional (PIONAS)',
    difficulty: 'Mudah',
  },
  {
    id: 'q-1105',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'Dalam pembuatan ekstrak daun jambu monyet, TTK melakukan pemekatan ekstrak cair menggunakan alat penguap berputar dengan labu berputar di bawah tekanan vakum dan pemanasan penangas air bersuhu 45°C.',
    question: 'Apakah nama instrumen laboratorium pemekat ekstrak tersebut?',
    options: [
      { key: 'A', text: 'Rotary Evaporator (Rotavapor)' },
      { key: 'B', text: 'Autoklaf' },
      { key: 'C', text: 'Centrifuge' },
      { key: 'D', text: 'Viskometer Brookfield' },
      { key: 'E', text: 'Kromatografi Cair Kinerja Tinggi (KCKT)' },
    ],
    correctAnswer: 'A',
    explanation:
      'Rotary Evaporator (Rotavapor) adalah alat yang digunakan untuk memisahkan dan menguapkan pelarut dari ekstrak secara efisien pada suhu rendah (biasanya 40-50°C) dengan memanfaatkan penurunan titik didih pelarut di bawah tekanan vakum dan perputaran labu alas bulat untuk memperluas area permukaan penguapan.',
    clinicalReference:
      'Voigt R. Buku Pelajaran Teknologi Farmasi & Harborne JB',
    difficulty: 'Mudah',
  },
  {
    id: 'q-1106',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'TTK melakukan analisis kualitatif ekstrak kunyit menggunakan Kromatografi Lapis Tipis (KLT) dengan silika gel F254 sebagai fase diam dan kloroform-metanol (95:5) sebagai fase gerak. Noda kurkumin bergerak menempuh jarak 4,8 cm, sedangkan pelarut bergerak menempuh jarak 8,0 cm dari garis awal.',
    question: 'Berapakah nilai Retardation Factor (Rf) noda kurkumin tersebut?',
    options: [
      { key: 'A', text: '0,60' },
      { key: 'B', text: '1,67' },
      { key: 'C', text: '0,48' },
      { key: 'D', text: '0,80' },
      { key: 'E', text: '0,38' },
    ],
    correctAnswer: 'A',
    explanation:
      'Nilai Rf dihitung dengan rumus: Rf = Jarak tempuh zat (noda) / Jarak tempuh garis pelarut (fase gerak) = 4,8 cm / 8,0 cm = 0,60. Nilai Rf selalu berkisar antara 0,00 hingga 1,00.',
    clinicalReference:
      'Harborne JB. Metode Fitokimia & Farmakope Herbal Indonesia',
    difficulty: 'Mudah',
  },
  {
    id: 'q-1107',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'Pada pengamatan plat KLT di bawah sinar ultraviolet dengan panjang gelombang 254 nm, plat silika gel GF254 berpendar hijau sedangkan noda senyawa tampak gelap (terjadi pemadaman fluoresensi / quenching).',
    question: 'Apakah fungsi penambahan indikator seng silikat berfluoresensi pada pelat silika gel F254 tersebut?',
    options: [
      { key: 'A', text: 'Sebagai indikator fluoresensi untuk mendeteksi senyawa yang memiliki ikatan rangkap terkonjugasi atau cincin aromatis melalui peredupan emisi cahaya hijau' },
      { key: 'B', text: 'Untuk mengikat partikel silika agar tidak rontok' },
      { key: 'C', text: 'Untuk mempercepat laju elusi pelarut' },
      { key: 'D', text: 'Untuk mengawetkan plat dari udara lembab' },
      { key: 'E', text: 'Sebagai pereaksi semprot kimiawi' },
    ],
    correctAnswer: 'A',
    explanation:
      'Indikator F254 (seperti zinc silicate berfosfor) pada plat KLT akan berpendar (fluoresensi) warna hijau terang bila disinari UV 254 nm. Senyawa organik yang memiliki ikatan rangkap terkonjugasi akan menyerap radiasi UV tersebut sehingga menghalangi fluoresensi plat, terlihat sebagai bercak gelap/hitam (fluorescence quenching).',
    clinicalReference: 'Stahl E. Thin-Layer Chromatography & Farmakope Indonesia',
    difficulty: 'Sedang',
  },
  {
    id: 'q-1108',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'TTK melakukan standarisasi cemaran logam berat pada ekstrak pegagan menggunakan instrumen Spektrofotometri Serapan Atom (AAS).',
    question: 'Logam berat beracun manakah yang batas maksimal cemarannya wajib diuji pada produk obat herbal menurut BPOM?',
    options: [
      { key: 'A', text: 'Timbal (Pb), Kadmium (Cd), Arsen (As), dan Raksa (Hg)' },
      { key: 'B', text: 'Besi, Seng, Magnesium, dan Kalsium' },
      { key: 'C', text: 'Natrium, Kalium, Klorida, dan Bikarbonat' },
      { key: 'D', text: 'Emas, Platina, Perak, dan Tembaga murni' },
      { key: 'E', text: 'Karbon, Oksigen, Hidrogen, dan Nitrogen' },
    ],
    correctAnswer: 'A',
    explanation:
      'Menurut Peraturan BPOM No. 32 Tahun 2019, batas cemaran logam berat yang wajib diuji pada bahan baku dan produk obat tradisional adalah Timbal (Pb <= 10 mg/kg), Kadmium (Cd <= 0,3 mg/kg), Arsen (As <= 5 mg/kg), dan Raksa/Merkuri (Hg <= 0,5 mg/kg).',
    clinicalReference:
      'Peraturan BPOM RI No. 32 Tahun 2019 tentang Standar Keamanan dan Mutu Obat Tradisional',
    difficulty: 'Mudah',
  },
  {
    id: 'q-1109',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'Dalam pengujian mikrobiologi sediaan jamu serbuk seduhan, TTK melakukan pemupukan sampel pada media agar untuk menghitung jumlah koloni bakteri aerob mesofil.',
    question: 'Apakah nama uji kuantitatif cemaran mikroba tersebut?',
    options: [
      { key: 'A', text: 'Angka Lempeng Total (ALT)' },
      { key: 'B', text: 'Angka Kapang Khamir (AKK)' },
      { key: 'C', text: 'Uji Pirogen Kelinci' },
      { key: 'D', text: 'Most Probable Number (MPN) Coliform' },
      { key: 'E', text: 'Uji Sterilitas Membran' },
    ],
    correctAnswer: 'A',
    explanation:
      'Angka Lempeng Total (ALT) adalah metode kuantitatif untuk menghitung total mikroba bakteri aerob mesofil per gram atau per mL sampel sediaan jamu setelah diinkubasi pada media Plate Count Agar (PCA) bersuhu 35-37°C selama 24 - 48 jam.',
    clinicalReference:
      'Farmakope Herbal Indonesia Edisi II, Uji Batas Mikroba',
    difficulty: 'Mudah',
  },
  {
    id: 'q-1110',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'Menurut standar BPOM, obat tradisional tidak boleh mengandung bakteri patogen tertentu yang berbahaya bagi saluran cerna.',
    question: 'Bakteri patogen enterik gram negatif manakah yang persyaratannya harus negatif (bebas cemaran dalam 1 gram sampel)?',
    options: [
      { key: 'A', text: 'Salmonella spp. dan Escherichia coli' },
      { key: 'B', text: 'Lactobacillus acidophilus' },
      { key: 'C', text: 'Bifidobacterium bifidum' },
      { key: 'D', text: 'Saccharomyces cerevisiae' },
      { key: 'E', text: 'Streptococcus thermophilus' },
    ],
    correctAnswer: 'A',
    explanation:
      'Sediaan obat tradisional dipersyaratkan mutlak bebas (negatif per gram sampel) dari bakteri patogen berbahaya seperti Salmonella spp., Escherichia coli, Shigella, serta Pseudomonas aeruginosa dan Staphylococcus aureus untuk sediaan topikal.',
    clinicalReference:
      'Peraturan BPOM RI No. 32 Tahun 2019 Persyaratan Mutu Obat Tradisional',
    difficulty: 'Mudah',
  },
  {
    id: 'q-1111',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'Simplisia biji klabet atau rimpang yang disimpan dalam gudang bersuhu hangat dan lembap rentan ditumbuhi kapang Aspergillus flavus yang menghasilkan toksin karsinogenik berbahaya.',
    question: 'Apakah nama mikotoksin yang wajib diuji pada simplisia nabati tersebut?',
    options: [
      { key: 'A', text: 'Aflatoksin (B1, B2, G1, G2)' },
      { key: 'B', text: 'Botulinum toksin' },
      { key: 'C', text: 'Tetrodotoksin' },
      { key: 'D', text: 'Strikno-toksin' },
      { key: 'E', text: 'Ergotamin tartrat' },
    ],
    correctAnswer: 'A',
    explanation:
      'Aflatoksin adalah kelompok mikotoksin sangat beracun dan karsinogenik yang diproduksi oleh kapang Aspergillus flavus dan Aspergillus parasiticus. Batas cemaran total aflatoksin (B1 + B2 + G1 + G2) pada obat tradisional menurut BPOM adalah maksimal 20 mcg/kg (dengan B1 maksimal 5 mcg/kg).',
    clinicalReference:
      'Peraturan BPOM RI No. 32 Tahun 2019 & WHO Guidelines for Herbal Medicine Quality',
    difficulty: 'Mudah',
  },
  {
    id: 'q-1112',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'Dalam proses pembuatan simplisia rimpang kunyit, rimpang segar setelah dipanen dicuci bersih, kemudian diiris membujur/melintang tipis lalu dikeringkan.',
    question:
      'Apakah tujuan utama dari proses perajangan (slicing) rimpang segar sebelum pengeringan?',
    options: [
      {
        key: 'A',
        text: 'Memperluas luas permukaan bahan sehingga mempercepat proses penguapan air selama pengeringan',
      },
      {
        key: 'B',
        text: 'Mengubah warna kunyit menjadi merah muda',
      },
      {
        key: 'C',
        text: 'Membunuh seluruh sel tanaman agar mati seketika',
      },
      {
        key: 'D',
        text: 'Menghilangkan aroma minyak atsiri',
      },
      {
        key: 'E',
        text: 'Menurunkan kandungan kurkumin',
      },
    ],
    correctAnswer: 'A',
    explanation:
      'Perajangan rimpang bertujuan memperbesar luas permukaan kontak dengan udara pengering, memperpendek jarak difusi air dari bagian dalam rimpang ke permukaan, sehingga proses pengeringan berlangsung lebih cepat dan mencegah kebusukan atau pertumbuhan jamur.',
    clinicalReference:
      'Pedoman Pascapanen Tanaman Obat Kementan RI & Materia Medika Indonesia',
    difficulty: 'Mudah',
  },
  {
    id: 'q-1113',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'Pengeringan simplisia daun teh atau daun salam sebaiknya tidak dilakukan di bawah sinar matahari langsung yang terik.',
    question:
      'Bagaimanakah metode pengeringan yang tepat untuk simplisia yang kaya akan minyak atsiri dan zat aktif termolabil?',
    options: [
      { key: 'A', text: 'Diangin-anginkan di tempat teduh berventilasi baik atau oven bersuhu rendah (30° - 40°C)' },
      { key: 'B', text: 'Dipanaskan di atas wajan penggorengan tanpa minyak' },
      { key: 'C', text: 'Dibasahi air panas 100°C berulang-ulang' },
      { key: 'D', text: 'Dijemur di atas aspal panas siang hari terik' },
      { key: 'E', text: 'Dimasukkan ke dalam lemari pendingin' },
    ],
    correctAnswer: 'A',
    explanation:
      'Simplisia yang mengandung minyak atsiri volatil atau zat aktif termolabil tidak boleh dijemur di bawah sinar matahari langsung karena sinar UV dan panas ekstrem dapat merusak senyawa aktif dan menguapkan minyak atsiri. Pengeringan dilakukan dengan cara diangin-anginkan di tempat terlindung dari sinar matahari langsung atau memakai oven sirkulasi udara terkontrol suhu 30-40°C.',
    clinicalReference: 'Pedoman Penanganan Pascapanen Tanaman Obat Balittro',
    difficulty: 'Mudah',
  },
  {
    id: 'q-1114',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'Pada tahap pascapanen pembuatan simplisia, dilakukan pemisahan benda asing seperti kerikil, tanah, rumput liar, serta bagian tanaman yang rusak/busuk setelah proses pengeringan.',
    question: 'Apakah nama tahap pembersihan akhir tersebut?',
    options: [
      { key: 'A', text: 'Sortasi kering' },
      { key: 'B', text: 'Sortasi basah' },
      { key: 'C', text: 'Perajangan' },
      { key: 'D', text: 'Pencucian' },
      { key: 'E', text: 'Pengepakan' },
    ],
    correctAnswer: 'A',
    explanation:
      'Sortasi basah dilakukan sebelum pengeringan saat bahan masih segar untuk memisahkan kotoran fisik dan bagian tanaman yang tidak diinginkan. Sedangkan Sortasi kering dilakukan setelah pengeringan untuk memisahkan benda asing, bagian tanaman yang gosong, atau kotoran yang tertinggal sebelum pengemasan.',
    clinicalReference:
      'Materia Medika Indonesia & Pedoman Pascapanen Tanaman Obat',
    difficulty: 'Mudah',
  },
  {
    id: 'q-1115',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'Berapakah standar kadar air maksimal simplisia nabati secara umum menurut Farmakope Herbal Indonesia agar aman dari kerusakan enzimatis dan pertumbuhan kapang selama penyimpanan?',
    question: 'Berapakah batas kadar air maksimal simplisia nabati?',
    options: [
      { key: 'A', text: 'Tidak lebih dari 10%' },
      { key: 'B', text: 'Tidak lebih dari 50%' },
      { key: 'C', text: 'Tidak lebih dari 25%' },
      { key: 'D', text: 'Harus tepat 0,0%' },
      { key: 'E', text: 'Bebas berapa saja' },
    ],
    correctAnswer: 'A',
    explanation:
      'Batas kadar air maksimum untuk sebagian besar simplisia nabati adalah tidak lebih dari 10% (kecuali dinyatakan lain dalam monografi tertentu). Kadar air di bawah 10% menghambat reaksi hidrolisis enzimatik endogen dan menghentikan pertumbuhan kapang/bakteri.',
    clinicalReference:
      'Farmakope Herbal Indonesia Edisi II & Materia Medika Indonesia',
    difficulty: 'Mudah',
  },
  {
    id: 'q-1116',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'TTK mengekstraksi senyawa antosianin dari kelopak bunga rosella (Hibiscus sabdariffa) yang berwarna merah tua.',
    question:
      'Pelarut apakah yang paling efektif untuk mengekstraksi pigmen antosianin polar yang stabil?',
    options: [
      { key: 'A', text: 'Air atau etanol asam (dengan penambahan sedikit asam sitrat/HCl encer)' },
      { key: 'B', text: 'Kloroform murni' },
      { key: 'C', text: 'Heksana murni' },
      { key: 'D', text: 'Petroleum eter' },
      { key: 'E', text: 'Benzena' },
    ],
    correctAnswer: 'A',
    explanation:
      'Antosianin adalah glikosida flavonoid polar larut air yang bertanggung jawab atas warna merah/ungu pada kelopak bunga. Antosianin berada dalam bentuk kation flavilium yang stabil pada suasana asam (pH 1-3), sehingga pelarut terbaiknya adalah air atau etanol yang diasamkan dengan sedikit asam sitrat atau HCl.',
    clinicalReference:
      'Harborne JB. Metode Fitokimia: Penuntun Cara Modern Menganalisis Tumbuhan',
    difficulty: 'Sedang',
  },
  {
    id: 'q-1117',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'Dalam proses ekstraksi bertingkat serbuk daun sirih merah, TTK menggunakan pelarut berturut-turut mulai dari heksana, etil asetat, hingga etanol 96%.',
    question:
      'Apakah prinsip pemisahan kelompok metabolit sekunder pada metode ekstraksi bertingkat tersebut?',
    options: [
      {
        key: 'A',
        text: 'Pemisahan berdasarkan kenaikan tingkat kepolaran pelarut (non-polar -> semi-polar -> polar)',
      },
      {
        key: 'B',
        text: 'Pemisahan berdasarkan perbedaan titik beku cairan',
      },
      {
        key: 'C',
        text: 'Pemisahan berdasarkan warna cairan pelarut',
      },
      {
        key: 'D',
        text: 'Pemisahan berdasarkan bau pelarut',
      },
      {
        key: 'E',
        text: 'Pemisahan tanpa aturan ilmiah',
      },
    ],
    correctAnswer: 'A',
    explanation:
      'Ekstraksi bertingkat menggunakan pelarut dengan urutan gradien polaritas meningkat: 1) Heksana (non-polar) melarutkan lemak, klorofil, lilin, dan minyak atsiri; 2) Etil asetat (semi-polar) melarutkan aglikon flavonoid, terpenoid, dan steroid; 3) Etanol/metanol (polar) melarutkan glikosida, tanin, dan senyawa gula.',
    clinicalReference:
      'Harborne JB. Metode Fitokimia & Stahl E',
    difficulty: 'Sedang',
  },
  {
    id: 'q-1118',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'Sebuah industri ekstrak bahan alam memproduksi ekstrak kering daun teh hijau dengan mengeringkan ekstrak cair menjadi serbuk halus seketika menggunakan semprotan udara panas berkecepatan tinggi.',
    question: 'Apakah nama teknologi pengeringan ekstrak tersebut?',
    options: [
      { key: 'A', text: 'Spray Drying (Pengeringan Semprot)' },
      { key: 'B', text: 'Maserasi kinetik' },
      { key: 'C', text: 'Kristalisasi beku' },
      { key: 'D', text: 'Penguapan penangas air terbuka' },
      { key: 'E', text: 'Penjemuran matahari' },
    ],
    correctAnswer: 'A',
    explanation:
      'Spray Drying (pengering semprot) menyemprotkan larutan ekstrak menjadi kabut tetesan mikro (atomisasi) ke dalam ruang pengering berisi udara panas, sehingga pelarut menguap dalam hitungan detik menghasilkan serbuk kering partikel sferis yang seragam tanpa merusak senyawa termolabil.',
    clinicalReference:
      'Lachman L. Teori dan Praktek Farmasi Industri & Voigt R',
    difficulty: 'Mudah',
  },
  {
    id: 'q-1119',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'Sebagai alternatif pengeringan untuk ekstrak senyawa yang sangat rentan rusak oleh suhu panas, digunakan metode pengeringan sublimasi beku di bawah ruang hampa udara.',
    question: 'Apakah nama alat pengering sublimasi beku tersebut?',
    options: [
      { key: 'A', text: 'Freeze Dryer (Liofilisator)' },
      { key: 'B', text: 'Fluid Bed Dryer' },
      { key: 'C', text: 'Oven vakum' },
      { key: 'D', text: 'Desikator silika' },
      { key: 'E', text: 'Lemari pengering baki' },
    ],
    correctAnswer: 'A',
    explanation:
      'Freeze Drying (Liofilisasi) adalah proses pengeringan di mana bahan dibekukan terlebih dahulu di bawah titik eutektik, lalu tekanan diturunkan hingga vakum tinggi sehingga pelarut es langsung menyublim menjadi uap gas tanpa melewati fase cair. Sangat ideal untuk senyawa labil panas tinggi.',
    clinicalReference: 'Aulton ME. Pharmaceutics & Voigt R. Teknologi Farmasi',
    difficulty: 'Mudah',
  },
  {
    id: 'q-1120',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'TTK melakukan pengujian kemurnian minyak cengkeh dengan mengukur indeks bias cairan menggunakan alat Refraktometer Abbe pada suhu 20°C.',
    question:
      'Senyawa fenolat volatil apakah yang menjadi komponen utama minyak cengkeh dengan kadar minimal 75% menurut Farmakope Herbal Indonesia?',
    options: [
      { key: 'A', text: 'Eugenol' },
      { key: 'B', text: 'Sitronelol' },
      { key: 'C', text: 'Kamfer' },
      { key: 'D', text: 'Kurkumin' },
      { key: 'E', text: 'Kariofilen oksida' },
    ],
    correctAnswer: 'A',
    explanation:
      'Eugenol adalah senyawa fenol alil yang mendominasi minyak cengkeh (Syzygium aromaticum) dengan persentase 70-85% dan memberikan aroma khas pedas hangat serta berkhasiat sebagai analgesik lokal gigi dan antiseptik.',
    clinicalReference:
      'Farmakope Herbal Indonesia Edisi II, Minyak Atsiri Cengkeh',
    difficulty: 'Mudah',
  },
  {
    id: 'q-1121',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'Pada pengujian organoleptis ekstrak rimpang jahe merah, TTK mengevaluasi warna, bau, dan rasa.',
    question: 'Golongan senyawa kimia apakah yang bertanggung jawab atas sensasi rasa pedas membakar pada rimpang jahe?',
    options: [
      { key: 'A', text: 'Gingerol dan Shogaol' },
      { key: 'B', text: 'Kurkumin dan Desmetoksikurkumin' },
      { key: 'C', text: 'Kapsaisin' },
      { key: 'D', text: 'Sinamil aldehid' },
      { key: 'E', text: 'Mentol' },
    ],
    correctAnswer: 'A',
    explanation:
      'Rasa pedas tajam dan sifat termogenik rimpang jahe (Zingiber officinale) disebabkan oleh oleoresin golongan fenilalkilketon, terutama Gingerol pada jahe segar yang dapat terdehidrasi menjadi Shogaol pada pemanasan atau pengeringan.',
    clinicalReference:
      'Farmakope Herbal Indonesia Edisi II & Trease and Evans Pharmacognosy',
    difficulty: 'Mudah',
  },
  {
    id: 'q-1122',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'Sebaliknya, rasa pedas menyengat pada buah cabai merah (Capsicum annuum) disebabkan oleh senyawa alkaloid spesifik.',
    question: 'Apakah nama senyawa kimia pedas pada buah cabai tersebut?',
    options: [
      { key: 'A', text: 'Kapsaisin (Capsaicin)' },
      { key: 'B', text: 'Piperin' },
      { key: 'C', text: 'Gingerol' },
      { key: 'D', text: 'Alisin' },
      { key: 'E', text: 'Sinigrin' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kapsaisin (8-metil-N-vanilil-6-nonenamida) adalah zat kimia pedas utama dalam buah cabai genus Capsicum yang bekerja merangsang reseptor TRPV1 pada ujung saraf sensoris perifer.',
    clinicalReference: 'Materia Medika Indonesia & Evans WC. Pharmacognosy',
    difficulty: 'Mudah',
  },
  {
    id: 'q-1123',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'TTK melakukan isolasi kristal piperin dari serbuk lada hitam (Piperis nigri Fructus) menggunakan ekstraksi sokletasi dengan pelarut etanol 96%, diikuti penambahan KOH alkoholik untuk mengendapkan resin.',
    question:
      'Bentuk kristal apakah yang terbentuk dari senyawa piperin murni hasil isolasi?',
    options: [
      { key: 'A', text: 'Kristal jarum berwarna kuning muda transparan' },
      { key: 'B', text: 'Serbuk amorf hitam legam' },
      { key: 'C', text: 'Minyak cair kental merah' },
      { key: 'D', text: 'Cairan gas menguap' },
      { key: 'E', text: 'Gel kenyal tak berwarna' },
    ],
    correctAnswer: 'A',
    explanation:
      'Piperin adalah alkaloid amida utama lada hitam dan lada putih yang mengkristal dalam bentuk jarum monoklinik berwarna kuning muda atau krem dengan titik leleh sekitar 128 - 130°C.',
    clinicalReference:
      'Vogel\'s Textbook of Practical Organic Chemistry & Farmakope Herbal Indonesia',
    difficulty: 'Sedang',
  },
  {
    id: 'q-1124',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'Dalam pembuatan jamu serbuk seduhan untuk sariawan, digunakan simplisia rimpang kunyit dan asam jawa.',
    question: 'Apakah nama latin simplisia untuk rimpang kunyit menurut Materia Medika Indonesia?',
    options: [
      { key: 'A', text: 'Curcumae domesticae Rhizoma (atau Curcumae longae Rhizoma)' },
      { key: 'B', text: 'Curcumae xanthorrhizae Rhizoma' },
      { key: 'C', text: 'Zingiberis officinalidis Rhizoma' },
      { key: 'D', text: 'Kaempferiae galangae Rhizoma' },
      { key: 'E', text: 'Alpiniae galangae Rhizoma' },
    ],
    correctAnswer: 'A',
    explanation:
      'Nama simplisia resmi rimpang kunyit adalah Curcumae domesticae Rhizoma (atau Curcumae longae Rhizoma). Curcumae xanthorrhizae Rhizoma adalah temulawak, Zingiberis Rhizoma adalah jahe, Kaempferiae Rhizoma adalah kencur, dan Alpiniae galangae Rhizoma adalah lengkuas.',
    clinicalReference:
      'Materia Medika Indonesia Jilid I & Farmakope Herbal Indonesia',
    difficulty: 'Mudah',
  },
  {
    id: 'q-1125',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'Simplisia daun tempuyung (Sonchi arvensidis Folium) dan herba kumis kucing sering dikombinasikan dalam obat tradisional untuk membantu melancarkan buang air kecil dan meluruhkan batu ginjal.',
    question: 'Apakah istilah farmakologis untuk efek memperbanyak pengeluaran air kemih (peluruh kencing) tersebut?',
    options: [
      { key: 'A', text: 'Diuretika' },
      { key: 'B', text: 'Antipiretika' },
      { key: 'C', text: 'Analgetika' },
      { key: 'D', text: 'Sedativa' },
      { key: 'E', text: 'Laksativa' },
    ],
    correctAnswer: 'A',
    explanation:
      'Diuretika adalah istilah untuk senyawa atau sediaan yang mempercepat pembentukan dan pengeluaran urin oleh ginjal. Flavonoid dan kalium tinggi dalam tempuyung dan kumis kucing memberikan efek diuretik alami.',
    clinicalReference:
      'Materia Medika Indonesia & Formularium Ramuan Obat Tradisional Kemenkes',
    difficulty: 'Mudah',
  },
  {
    id: 'q-1126',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'Pada penomoran izin edar obat tradisional oleh BPOM, kemasan jamu dalam negeri mencantumkan kode nomor registrasi resmi.',
    question: 'Kombinasi dua huruf alfabet awal apakah yang menandakan produk Jamu buatan dalam negeri berizin edar BPOM?',
    options: [
      { key: 'A', text: 'TR (Tradisional Dalam Negeri)' },
      { key: 'B', text: 'TI (Tradisional Impor)' },
      { key: 'C', text: 'TL (Tradisional Lisensi)' },
      { key: 'D', text: 'HT (Herbal Terstandar)' },
      { key: 'E', text: 'FF (Fitofarmaka)' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kode registrasi obat tradisional BPOM: TR = Obat Tradisional produksi dalam negeri (Jamu lokal); TI = Obat Tradisional Impor; TL = Obat Tradisional Lisensi; HT = Obat Herbal Terstandar; FF = Fitofarmaka; SD = Suplemen Dalam Negeri; SI = Suplemen Impor.',
    clinicalReference:
      'Peraturan Kepala BPOM RI tentang Tata Laksana Registrasi Obat Tradisional',
    difficulty: 'Mudah',
  },
  {
    id: 'q-1127',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'Suatu produk fitofarmaka buatan Indonesia yang beredar secara legal di apotek memiliki nomor registrasi dari Badan POM.',
    question: 'Huruf alfabet awal apakah yang tercantum pada nomor registrasi produk Fitofarmaka BPOM?',
    options: [
      { key: 'A', text: 'FF' },
      { key: 'B', text: 'HT' },
      { key: 'C', text: 'TR' },
      { key: 'D', text: 'DKL' },
      { key: 'E', text: 'GBL' },
    ],
    correctAnswer: 'A',
    explanation:
      'Nomor izin edar BPOM untuk produk Fitofarmaka selalu diawali dengan kode "FF" diikuti sembilan digit angka (contoh: POM FF. 123456789).',
    clinicalReference:
      'Petunjuk Teknis Registrasi Obat Tradisional BPOM RI',
    difficulty: 'Mudah',
  },
  {
    id: 'q-1128',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'TTK melakukan ekstraksi minyak lemak dari biji jarak (Ricini Semen) dengan cara pemerasan mekanis menggunakan mesin kempa hidrolik dingin.',
    question:
      'Senyawa toksik mematikan (toksalbumin protein) apakah yang terdapat dalam biji jarak sehingga sisa bungkil padat hasil pemerasan tidak boleh dikonsumsi?',
    options: [
      { key: 'A', text: 'Risin (Ricin)' },
      { key: 'B', text: 'Asam risinoleat' },
      { key: 'C', text: 'Glukosida sianogenik' },
      { key: 'D', text: 'Solanin' },
      { key: 'E', text: 'Atropin' },
    ],
    correctAnswer: 'A',
    explanation:
      'Biji jarak (Ricinus communis) mengandung toksalbumin berbahaya bernama Risin (Ricin) yang merupakan racun protein ribosome-inactivating sangat poten. Risin tidak larut dalam minyak jarak dingin hasil kempa (minyak jarak murni bebas risin), namun tetap tertinggal dalam bungkil ampas biji.',
    clinicalReference: 'Trease and Evans Pharmacognosy & Farmakope Indonesia',
    difficulty: 'Sedang',
  },
  {
    id: 'q-1129',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'Singkong karet (Manihot esculenta) liar atau biji apel mengandung senyawa yang dapat melepaskan gas racun asam sianida (HCN) bila terhidrolisis oleh enzim hidrolase saat sel tanaman hancur.',
    question: 'Golongan glikosida apakah yang membebaskan asam sianida (HCN) tersebut?',
    options: [
      { key: 'A', text: 'Glikosida Sianogenik (misalnya Linamarin dan Amigdalin)' },
      { key: 'B', text: 'Glikosida Antrakuinon' },
      { key: 'C', text: 'Glikosida Jantung' },
      { key: 'D', text: 'Glikosida Flavonoid' },
      { key: 'E', text: 'Glikosida Saponin' },
    ],
    correctAnswer: 'A',
    explanation:
      'Glikosida sianogenik (seperti linamarin pada singkong dan amigdalin pada biji apel/almond pahit) akan terurai oleh enzim beta-glukosidase menjadi glukosa, aseton, dan gas beracun asam sianida (HCN).',
    clinicalReference: 'Evans WC. Trease and Evans Pharmacognosy',
    difficulty: 'Mudah',
  },
  {
    id: 'q-1130',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'Untuk mendeteksi keberadaan asam sianida (HCN) dari daun ubi kayu liar, TTK menggunakan kertas saring yang telah dicelupkan ke dalam larutan asam pikrat jenuh dan natrium karbonat.',
    question:
      'Apakah nama uji strip warna kertas asam pikrat tersebut dan bagaimana perubahan warnanya jika positif HCN?',
    options: [
      { key: 'A', text: 'Uji Kertas Pikrat (Guignard Test): warna kuning berubah menjadi merah bata / merah kecokelatan' },
      { key: 'B', text: 'Uji Biuret: warna biru menjadi violet' },
      { key: 'C', text: 'Uji Fehling: endapan hijau menjadi kuning' },
      { key: 'D', text: 'Uji Ninhidrin: larutan menjadi bening' },
      { key: 'E', text: 'Uji Molisch: tidak ada perubahan warna' },
    ],
    correctAnswer: 'A',
    explanation:
      'Uji Guignard (kertas asam pikrat-natrium karbonat) digunakan untuk mendeteksi uap HCN. Reaksi gas HCN dengan natrium pikrat akan mengubah warna kertas saring dari kuning cerah menjadi merah jingga hingga merah kecokelatan akibat pembentukan natrium isopurpurat.',
    clinicalReference:
      'Harborne JB. Metode Fitokimia & Materia Medika Indonesia',
    difficulty: 'Sedang',
  },
  {
    id: 'q-1131',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'Simplisia daun beluntas (Plucheae indicae Folium) sering dimanfaatkan masyarakat sebagai deodoran alami untuk mengatasi bau badan.',
    question: 'Kandungan kimia metabolit sekunder apakah yang berperan utama memberikan sifat antibakteri terhadap kuman penyebab bau keringat?',
    options: [
      { key: 'A', text: 'Minyak atsiri, Tanin, dan Flavonoid' },
      { key: 'B', text: 'Pati amilum saja' },
      { key: 'C', text: 'Kalsium karbonat' },
      { key: 'D', text: 'Asam lemak jenuh' },
      { key: 'E', text: 'Serat selulosa murni' },
    ],
    correctAnswer: 'A',
    explanation:
      'Daun beluntas mengandung minyak atsiri fenolik, senyawa tanin astringen, dan flavonoid yang memiliki aktivitas antibakteri kuat terhadap bakteri komensal kulit pemecah keringat (seperti Staphylococcus epidermidis dan Corynebacterium).',
    clinicalReference:
      'Materia Medika Indonesia & Tanaman Obat Indonesia Kemenkes',
    difficulty: 'Mudah',
  },
  {
    id: 'q-1132',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'TTK di industri obat tradisional menyiapkan Cara Pembuatan Obat Tradisional yang Baik (CPOTB) pada fasilitas produksi cairan obat dalam (sirup herbal).',
    question:
      'Apakah sertifikat resmi yang wajib dimiliki oleh industri obat tradisional dari BPOM untuk menjamin bahwa seluruh proses produksi memenuhi standar mutu?',
    options: [
      { key: 'A', text: 'Sertifikat CPOTB (Cara Pembuatan Obat Tradisional yang Baik)' },
      { key: 'B', text: 'Surat Izin Mengemudi' },
      { key: 'C', text: 'Sertifikat Kalibrasi Termometer' },
      { key: 'D', text: 'Izin Mendirikan Bangunan (IMB)' },
      { key: 'E', text: 'Nomor Pokok Wajib Pajak (NPWP)' },
    ],
    correctAnswer: 'A',
    explanation:
      'Industri Obat Tradisional (IOT) dan Usaha Kecil Obat Tradisional (UKOT) wajib menerapkan dan memiliki sertifikat CPOTB (Cara Pembuatan Obat Tradisional yang Baik) dari Badan POM RI untuk menjamin produk obat tradisional dibuat secara konsisten dan memenuhi standar mutu serta keamanan yang ditetapkan.',
    clinicalReference:
      'Peraturan BPOM RI tentang Pedoman Cara Pembuatan Obat Tradisional yang Baik (CPOTB)',
    difficulty: 'Mudah',
  },
  {
    id: 'q-1133',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette:
      'Dalam kemasan sediaan kapsul ekstrak herba pegagan terstandar, dicantumkan klaim khasiat: "Secara tradisional digunakan untuk membantu sirkulasi darah".',
    question:
      'Berdasarkan ketentuan BPOM, mengapa kalimat "secara tradisional digunakan untuk..." wajib dicantumkan pada kemasan obat bahan alam kelompok Jamu?',
    options: [
      {
        key: 'A',
        text: 'Karena dasar klaim khasiatnya berpijak pada bukti empiris penggunaan turun-temurun, bukan hasil uji klinis modern pada manusia',
      },
      {
        key: 'B',
        text: 'Untuk menarik minat wisatawan mancanegara saja',
      },
      {
        key: 'C',
        text: 'Karena produk tidak memiliki tanggal kedaluwarsa',
      },
      {
        key: 'D',
        text: 'Agar produk tidak dikenakan pajak pertambahan nilai',
      },
      {
        key: 'E',
        text: 'Sebagai tanda bahwa produk diracik manual tanpa mesin',
      },
    ],
    correctAnswer: 'A',
    explanation:
      'Frasa "Secara tradisional digunakan untuk..." adalah redaksi resmi yang diwajibkan oleh BPOM untuk sediaan kelompok Jamu. Hal ini bertujuan memberikan informasi yang jujur kepada konsumen bahwa klaim khasiat tersebut didasarkan pada data empiris sejarah pemakaian turun-temurun antargenerasi di Indonesia, membedakannya dari klaim ilmiah teruji klinis (Fitofarmaka).',
    clinicalReference:
      'Keputusan Kepala BPOM RI tentang Pedoman Klaim Khasiat Obat Tradisional',
    difficulty: 'Mudah',
  },
];
