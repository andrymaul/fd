import { ExamQuestion } from '../competencyExamData';

/**
 * BANK SOAL CBT UKTVF / APDFI (UJI KOMPETENSI TENAGA VOKASI FARMASI D3)
 * BAGIAN 1: ALKES, PRAKTIK KOMUNITAS, DISPENSING RESEP, PERHITUNGAN FARMASETIK & DOWA
 * Diadopsi langsung dari Bank Soal Try Out Resmi APDFI (Asosiasi Pendidikan Diploma Farmasi Indonesia)
 * Standar Nasional Vokasi Farmasi Indonesia
 */
export const CBT_VOKASI_PART_1: ExamQuestion[] = [
  {
    id: 'q-654',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'TTK di instalasi farmasi rumah sakit menerima permintaan alat kesehatan dari unit gawat darurat (UGD) untuk menangani pasien kecelakaan lalu lintas yang mengalami perdarahan hebat pada ekstremitas bawah. Alat tersebut dipasang melingkar pada paha proksimal pasien untuk membendung aliran darah arteri secara temporer sampai tindakan ligasi dilakukan di ruang operasi.',
    question: 'Apakah nama alat kesehatan yang dimaksud?',
    options: [
      { key: 'A', text: 'Tourniquet' },
      { key: 'B', text: 'Windring' },
      { key: 'C', text: 'Lancing device' },
      { key: 'D', text: 'Reflex hammer' },
      { key: 'E', text: 'Spirometer' }
    ],
    correctAnswer: 'A',
    explanation: 'Tourniquet (torniket) adalah alat medis elastis/mekanis bertekanan yang digunakan untuk mengontrol atau menghentikan perdarahan arteri eksternal masif pada anggota gerak (tangan atau kaki). Windring adalah bantal duduk berbentuk donat untuk pasien wasir/dekubitus; Lancing device adalah alat penusuk lanset; Reflex hammer adalah palu uji refleks patella; Spirometer adalah alat pengukur kapasitas paru.',
    clinicalReference: 'Pedoman Pengelolaan Alat Kesehatan & Kedaruratan Medis Kemenkes RI & Blueprint APDFI Alkes',
    difficulty: 'Mudah'
  },
  {
    id: 'q-655',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'TTK di instalasi bedah menyiapkan daftar alat kesehatan benang jahit bedah (suture) untuk pengadaan rutin. Dokter bedah meminta disiapkan benang jahit yang berasal dari bahan submukosa usus domba/hewan mamalia (bahan alami), berwarna putih kekuningan, dan dapat diabsorpsi secara enzimatik oleh tubuh tanpa memerlukan pengangkatan jahitan, cocok untuk jaringan superficial subkutan dengan tegangan minimal.',
    question: 'Apakah nama alat kesehatan benang bedah tersebut?',
    options: [
      { key: 'A', text: 'Plain catgut' },
      { key: 'B', text: 'Ethibond' },
      { key: 'C', text: 'Ethilon' },
      { key: 'D', text: 'Vicryl' },
      { key: 'E', text: 'Silk' }
    ],
    correctAnswer: 'A',
    explanation: 'Plain Catgut adalah benang jahit bedah alami yang dapat diserap tubuh (absorbable suture), terbuat dari kolagen jaringan ikat sub-mukosa usus domba/sapi murni tanpa perlakuan garam kromium, diserap cepat dalam 7-10 hari. Sebaliknya, Chromic Catgut dilapisi garam kromium untuk memperlambat absorpsi (21-28 hari); Vicryl adalah sintetis absorbable (Poliglaktin 910); Silk adalah alami non-absorbable (sutra); Ethilon adalah sintetis non-absorbable (nilon).',
    clinicalReference: 'Farmakope Indonesia Edisi VI (Monografi Benang Bedah Absorbable) & Pedoman Alkes Bedah',
    difficulty: 'Mudah'
  },
  {
    id: 'q-656',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Seorang dokter spesialis bedah vaskular meminta TTK di depo kamar operasi menyiapkan benang bedah yang terbuat dari bahan alami protein serat sutra (Bombyx mori), bersifat fleksibel dengan penanganan ikatan (knot security) yang sangat kuat, tetapi tidak dapat diserap oleh tubuh (non-absorbable) untuk keperluan ligasi permanen pembuluh darah arteri.',
    question: 'Apakah nama alat kesehatan benang bedah yang dimaksud?',
    options: [
      { key: 'A', text: 'Ethilon' },
      { key: 'B', text: 'Vitalene' },
      { key: 'C', text: 'Ethibond' },
      { key: 'D', text: 'Silk (Sutera bedah)' },
      { key: 'E', text: 'Vicryl' }
    ],
    correctAnswer: 'D',
    explanation: 'Silk (benang sutra bedah) merupakan jenis benang bedah alami (protein fibroin sutra kepompong ulat sutra) yang bersifat TIDAK DAPAT DISERAP (non-absorbable natural suture). Keunggulan utamanya adalah kelenturan tinggi dan keamanan simpul (knot security) yang sangat baik untuk ligasi pembuluh darah. Ethilon adalah nilon sintetis non-absorbable, sedangkan Vicryl adalah asam poliglikolat sintetis absorbable.',
    clinicalReference: 'Farmakope Indonesia VI (Benang Sutera Bedah / Surgical Silk) & Materi APDFI Bedah',
    difficulty: 'Mudah'
  },
  {
    id: 'q-657',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'TTK di instalasi farmasi rawat inap menyiapkan permintaan alat kesehatan kateter urin untuk pasien pasca stroke yang mengalami retensi urin akut. Kateter ini dirancang menetap di dalam kandung kemih dan memiliki percabangan balon di ujung distal yang dikembangkan dengan akuades steril agar kateter terfiksasi dan tidak mudah lepas atau bocor.',
    question: 'Apakah nama kateter yang dimaksud?',
    options: [
      { key: 'A', text: 'Intermittent catheter (Nelaton)' },
      { key: 'B', text: 'Foley catheter (Indwelling catheter)' },
      { key: 'C', text: 'Condom catheter' },
      { key: 'D', text: 'Rectal tube' },
      { key: 'E', text: 'Urinal bag' }
    ],
    correctAnswer: 'B',
    explanation: 'Foley Catheter (dikenal juga sebagai balon kateter atau indwelling catheter) adalah kateter fleksibel menetap yang memiliki balon tiup di ujungnya untuk fiksasi intravesika mencegah tergelincir keluar dari kandung kemih. Nelaton (straight/intermittent catheter) tidak berbalon dan hanya untuk pengosongan sesaat. Condom catheter adalah selubung eksternal khusus pria.',
    clinicalReference: 'Katalog Alat Kesehatan Standar RS Kemenkes RI & Soal CBT Uji Kompetensi APDFI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-658',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'TTK di instalasi gawat darurat diminta menyiapkan alat resusitasi manual darurat. Alat ini berbentuk kantong balon elastis mandiri dengan katup satu arah dan masker wajah anatomis, berfungsi memberikan ventilasi tekanan positif oksigen secara manual berulang-ulang pada pasien yang mengalami henti napas (apnea).',
    question: 'Apakah nama alat kesehatan resusitasi darurat tersebut?',
    options: [
      { key: 'A', text: 'Spirometer' },
      { key: 'B', text: 'Nebulizer' },
      { key: 'C', text: 'Ventilator mekanik' },
      { key: 'D', text: 'Ambu bag (Bag-Valve-Mask / BVM)' },
      { key: 'E', text: 'Nasal kanul' }
    ],
    correctAnswer: 'D',
    explanation: 'Ambu Bag (dikenal secara klinis sebagai Bag-Valve-Mask / BVM resuscitator) adalah alat bantu napas darurat manual berkatup searah yang dipompa secara ritmis menggunakan tangan untuk memberikan udara/oksigen bertekanan positif ke saluran napas pasien apnea atau henti jantung.',
    clinicalReference: 'AHA CPR Guidelines & Standar Peralatan IGD Permenkes No. 47 Tahun 2018',
    difficulty: 'Mudah'
  },
  {
    id: 'q-659',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'TTK di sentral sterilisasi (CSSD) dan instrumen bedah memilah berbagai instrumen tajam pasca operasi. Salah satu gunting bedah memiliki bilah melengkung halus dengan ujung runcing/tumpul khusus yang dirancang untuk memotong dan mendiseksi lapisan jaringan biologis lunak tanpa merusak struktur sekitarnya.',
    question: 'Apakah nama gunting bedah yang dimaksud?',
    options: [
      { key: 'A', text: 'Dissecting scissor (Gunting Metzenbaum / Mayo)' },
      { key: 'B', text: 'Bandage scissor (Gunting perban Lister)' },
      { key: 'C', text: 'Verband scissor' },
      { key: 'D', text: 'Episiotomy scissor' },
      { key: 'E', text: 'Wire cutting scissor' }
    ],
    correctAnswer: 'A',
    explanation: 'Dissecting Scissor (misalnya gunting Metzenbaum atau Mayo) dirancang khusus untuk membedah/mendiseksi dan memotong jaringan lunak tubuh. Sebaliknya, Bandage Scissor (gunting perban Lister) memiliki ujung tumpul berkait/penahan mendatar untuk menggunting kasa/perban tanpa menusuk kulit pasien.',
    clinicalReference: 'Standar Manajemen Instrumen Bedah Depkes RI & APDFI Alat Kesehatan',
    difficulty: 'Mudah'
  },
  {
    id: 'q-660',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien lanjut usia penderita diabetes melitus tipe 2 datang ke apotek membawa resep dokter berisi tablet Glimepirid 2 mg sekali sehari dan tablet Amlodipin 5 mg sekali sehari. TTK menjelaskan mekanisme dan golongan obat tersebut.',
    question: 'Apakah golongan farmakologi dari obat diabetes Glimepirid tersebut?',
    options: [
      { key: 'A', text: 'Biguanid' },
      { key: 'B', text: 'Sulfonilurea' },
      { key: 'C', text: 'Meglitinid' },
      { key: 'D', text: 'Tiazolidindion' },
      { key: 'E', text: 'Inhibitor DPP-4' }
    ],
    correctAnswer: 'B',
    explanation: 'Glimepirid adalah antidiabetik oral turunan Sulfonilurea generasi kedua/ketiga yang bekerja sebagai sekretagog insulin dengan cara menutup kanal K-ATP pada sel beta pankreas, memicu depolarisasi membran dan sekresi insulin endogen.',
    clinicalReference: 'Panduan Praktik Klinis Pengelolaan DM Tipe 2 PERKENI & Farmakologi Dasar',
    difficulty: 'Mudah'
  },
  {
    id: 'q-661',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Seorang wanita berusia 32 tahun datang berobat ke dokter karena mengeluh diare akut tanpa darah, mual, dan kram perut sejak pagi. Dokter meresepkan suspensi Kaolin-Pektin serta garam oralit rehidrasi.',
    question: 'Bagaimanakah mekanisme kerja antidiare Kaolin-Pektin dalam meredakan keluhan pasien?',
    options: [
      { key: 'A', text: 'Adsorben toksin dan mikroorganisme di saluran cerna' },
      { key: 'B', text: 'Agonis reseptor opioid motilitas usus' },
      { key: 'C', text: 'Peningkatan motilitas peristaltik usus' },
      { key: 'D', text: 'Pencahar osmotik penarik cairan' },
      { key: 'E', text: 'Penekan sekresi asam klorida lambung' }
    ],
    correctAnswer: 'A',
    explanation: 'Kaolin (aluminium silikat hidrat) dan Pektin bekerja secara fisikokimia sebagai ADSORBEN yang melapisi mukosa usus dan mengikat/menyerap toksin, bakteri, serta cairan berlebih di lumen usus, kemudian mengeluarkannya bersama feses.',
    clinicalReference: 'Farmakologi dan Terapi FKUI & Monografi Obat Diare Bebas Terbatas',
    difficulty: 'Mudah'
  },
  {
    id: 'q-662',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Seorang wanita berusia 60 tahun dengan riwayat penyakit gastritis erosif dan tukak lambung kronis mengeluh nyeri sendi lutut hebat akibat osteoartritis. Pasien membawa resep berisi: Amlodipin 5 mg 1x1, Parasetamol 500 mg 3x1, Meloksikam 7,5 mg 1x1, Glukosamin 500 mg 1x1, dan Neurobion tablet 1x1.',
    question: 'Obat manakah dalam resep tersebut yang memiliki kontraindikasi relatif/kehati-hatian tinggi terhadap kondisi riwayat lambung pasien?',
    options: [
      { key: 'A', text: 'Amlodipin' },
      { key: 'B', text: 'Parasetamol' },
      { key: 'C', text: 'Meloksikam' },
      { key: 'D', text: 'Glukosamin' },
      { key: 'E', text: 'Neurobion' }
    ],
    correctAnswer: 'C',
    explanation: 'Meloksikam adalah obat antiinflamasi non-steroid (AINS) yang menghambat sintesis prostaglandin mukoprotektif lambung melalui inhibisi enzim siklooksigenase (COX). Pada pasien dengan riwayat tukak lambung aktif/gastritis berat, penggunaan AINS dapat mencetuskan perdarahan saluran cerna dan perforasi lambung.',
    clinicalReference: 'Goodman & Gilman Farmakologi Manual & Modul Skrining Klinis APDFI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-663',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien datang ke apotek mengeluh nyeri ulu hati dan sensasi rasa panas terbakar di perut setelah makan makanan pedas dan asam. TTK menyerahkan tablet kunyah Antasida DOEN (Aluminium Hidroksida & Magnesium Hidroksida).',
    question: 'Informasi cara penggunaan obat yang paling tepat disampaikan oleh TTK kepada pasien adalah?',
    options: [
      { key: 'A', text: 'Diminum segera setelah makan kenyang bersama segelas air teh' },
      { key: 'B', text: 'Diminum pagi hari sebelum bangun tidur ditelan utuh' },
      { key: 'C', text: 'Obat harus dihabiskan selama 7 hari berturut-turut' },
      { key: 'D', text: 'Tablet harus dikunyah terlebih dahulu dan diminum saat lambung kosong (1 jam ac atau 2 jam pc)' },
      { key: 'E', text: 'Diminum menjelang tidur malam dilarutkan dalam susu sapi hangat' },
    ],
    correctAnswer: 'D',
    explanation: 'Tablet antasida harus DIKUNYAH sampai lumat sebelum ditelan agar partikel aktif terdispersi luas di lumen lambung sehingga reaksi netralisasi asam HCl berlangsung optimal. Antasida paling efektif bekerja saat lambung kosong (1 jam sebelum makan atau 2 jam setelah makan dan sebelum tidur). Tidak boleh diminum bersama susu/teh karena kation divalen dapat mengkelat/mengganggu absorbsi.',
    clinicalReference: 'Petunjuk Pelayanan Swamedikasi Kemenkes RI & Blueprint CBT Vokasi',
    difficulty: 'Mudah'
  },
  {
    id: 'q-664',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Seorang ibu membawa bayi berusia 1 bulan ke Puskesmas untuk mendapatkan imunisasi dasar pencegahan penyakit tuberkulosis (TBC) paru berat seperti meningitis TB dan TB milier.',
    question: 'Vaksin apakah yang wajib diberikan kepada bayi tersebut?',
    options: [
      { key: 'A', text: 'BCG (Bacillus Calmette-Guérin)' },
      { key: 'B', text: 'Polio (bOPV)' },
      { key: 'C', text: 'Hepatitis B' },
      { key: 'D', text: 'DPT-HB-Hib' },
      { key: 'E', text: 'Campak Rubella (MR)' }
    ],
    correctAnswer: 'A',
    explanation: 'Vaksin BCG (Bacillus Calmette-Guérin) adalah vaksin bakteri hidup yang dilemahkan (Mycobacterium bovis) untuk memberikan proteksi spesifik terhadap infeksi tuberkulosis (TBC) berat pada anak. Diberikan secara intrakutan (IC) pada lengan kanan atas dengan dosis 0,05 mL.',
    clinicalReference: 'Permenkes RI No. 12 Tahun 2017 tentang Penyelenggaraan Imunisasi',
    difficulty: 'Mudah'
  },
  {
    id: 'q-665',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Seorang laki-laki berumur 35 tahun datang ke apotek menebus resep dokter berisi tablet Ranitidin 150 mg untuk mengatasi rasa panas di dada (heartburn) dan hiperasiditas lambung.',
    question: 'Apakah golongan farmakologi dari obat Ranitidin tersebut?',
    options: [
      { key: 'A', text: 'Antasida penetralisir asam' },
      { key: 'B', text: 'Antagonis reseptor Histamin H2 (H2-Blocker)' },
      { key: 'C', text: 'Antimuskarinik antikolinergik' },
      { key: 'D', text: 'Analog Prostaglandin E1' },
      { key: 'E', text: 'Penghambat Pompa Proton (PPI)' }
    ],
    correctAnswer: 'B',
    explanation: 'Ranitidin adalah senyawa Antagonis Reseptor H2 (H2-Receptor Antagonist / H2RA) yang bekerja secara kompetitif menghambat histamin pada reseptor H2 sel parietal lambung, sehingga menurunkan sekresi asam basal dan nokturnal lambung.',
    clinicalReference: 'Farmakope Indonesia & Farmakologi Dasar Terapi Katzung',
    difficulty: 'Mudah'
  },
  {
    id: 'q-666',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Pasien wanita 45 tahun datang ke klinik paru RS dengan keluhan batuk berdahak disertai bercak darah sejak 3 minggu, demam subfebris sore hari, dan keringat malam. Dokter mendiagnosis TBC paru aktif. Berdasarkan catatan rekam medis, pasien pernah menjalani pengobatan OAT lengkap 1 tahun yang lalu dan dinyatakan sembuh.',
    question: 'Apakah kategori kasus pasien tuberkulosis tersebut berdasarkan pedoman nasional penanggulangan TB?',
    options: [
      { key: 'A', text: 'Kasus Baru' },
      { key: 'B', text: 'Kasus Kambuh (Relaps)' },
      { key: 'C', text: 'Kasus Pindahan (Transfer In)' },
      { key: 'D', text: 'Kasus Gagal Pengobatan (Treatment Failure)' },
      { key: 'E', text: 'Kasus Putus Berobat (Loss to Follow-up)' }
    ],
    correctAnswer: 'B',
    explanation: 'Kasus Kambuh (Relaps) adalah pasien tuberkulosis yang sebelumnya pernah diobati dengan OAT dan telah dinyatakan sembuh atau pengobatan lengkap pada akhir pengobatan terakhirnya, kemudian saat ini kembali didiagnosis TB dengan hasil BTA/TCM positif.',
    clinicalReference: 'Permenkes No. 67 Tahun 2016 tentang Penanggulangan Tuberkulosis & Pedoman Kemenkes TB',
    difficulty: 'Sedang'
  },
  {
    id: 'q-667',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien datang ke apotek ingin membeli produk fitofarmaka herbal untuk membantu mengatasi diare cair non-spesifik. TTK merekomendasikan kapsul antidiare yang mengandung ekstrak Psidii folium.',
    question: 'Bagian tanaman (morfologi organ) apakah yang digunakan sebagai bahan simplisia Psidii folium tersebut?',
    options: [
      { key: 'A', text: 'Radix (Akar)' },
      { key: 'B', text: 'Cortex (Kulit batang)' },
      { key: 'C', text: 'Flos (Bunga)' },
      { key: 'D', text: 'Semen (Biji)' },
      { key: 'E', text: 'Folium (Daun)' }
    ],
    correctAnswer: 'E',
    explanation: 'Psidii folium adalah simplisia dari daun tanaman jambu biji (Psidium guajava L.). Daun jambu biji kaya akan senyawa tannin yang bersifat adstringen untuk menciutkan pori mukosa usus dan mengendapkan protein patogen pada diare.',
    clinicalReference: 'Materia Medika Indonesia (MMI) Jilid I & Farmakope Herbal Indonesia Edisi II',
    difficulty: 'Mudah'
  },
  {
    id: 'q-668',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Seorang TTK di ruang peracikan apotek menerima resep krim dermatologis berikut:\nR/ Emulgid 15 g\nOleum Caryophylli 15 g\nCetaceum 0,8 g\nAquadest 1 g\nSulfur praecipitatum 2 g\nm.f. cream da in pot\nS.u.e.\nBagaimanakah perlakuan fisik terhadap bahan Emulgid pada tahap peracikan resep krim tersebut?',
    question: 'Bagaimanakah perlakuan awal terhadap bahan Emulgid?',
    options: [
      { key: 'A', text: 'Digerus langsung bersama sulfur kering' },
      { key: 'B', text: 'Dilebur di atas penangas air bersama fase minyak' },
      { key: 'C', text: 'Dikocok kuat dalam botol bersama aquadest' },
      { key: 'D', text: 'Disaring menggunakan kertas saring basah' },
      { key: 'E', text: 'Dilarutkan dalam alkohol 70% dingin' }
    ],
    correctAnswer: 'B',
    explanation: 'Emulgid (self-emulsifying wax / campuran setil-stearil alkohol dan natrium alkilsulfat) merupakan emulgator dan pembawa fase lipofil berbobot padat yang harus DILEBUR terlebih dahulu di atas cawan penguap pada penangas air (waterbath) bersama komponen fase minyak lainnya (seperti cetaceum) sebelum diemulsikan dengan fase air panas.',
    clinicalReference: 'Ilmu Meracik Obat (Moh. Anief) & Farmakope Indonesia Edisi III',
    difficulty: 'Sedang'
  },
  {
    id: 'q-669',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Seorang anak berusia 5 tahun dengan berat badan 18 kg mengalami kejang demam sederhana. Dokter meresepkan puyer dengan signa:\nR/ Luminal 15 mg\nParasetamol 125 mg\nm.f. pulv. dtd. No. X\nS. 3 dd pulv 1 p.r.n.\nTTK menyiapkan obat dan menuliskan etiket.',
    question: 'Bagaimanakah penulisan aturan pakai yang benar pada etiket dan edukasi kepada orang tua pasien?',
    options: [
      { key: 'A', text: 'Sehari 3 kali 1 bungkus diminum sebelum makan pagi, siang, dan malam' },
      { key: 'B', text: 'Sehari 3 kali 1 bungkus diminum sesudah makan secara teratur harus habis' },
      { key: 'C', text: 'Sehari 3 kali 1 bungkus diminum hanya bila demam atau timbul kejang (jika perlu)' },
      { key: 'D', text: 'Sehari 1 bungkus diminum sebelum tidur malam' },
      { key: 'E', text: 'Sehari 3 kali 1 bungkus setiap 4 jam sekali tanpa jeda' }
    ],
    correctAnswer: 'C',
    explanation: 'Singkatan latin "p.r.n." adalah singkatan dari "pro re nata" yang berarti "bila diperlukan" atau "jika timbul keluhan". Dengan demikian, signa "S 3 dd pulv 1 prn" diartikan diminum sehari maksimal 3 kali 1 bungkus HANYA jika pasien mengalami demam atau kejang.',
    clinicalReference: 'Pedoman Peresepan Latin & Komunikasi Informasi Obat Kemenkes',
    difficulty: 'Mudah'
  },
  {
    id: 'q-670',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Seorang TTK menerima resep dermatologi:\nR/ Benzocain 0,75 g\nAsam salisilat 0,75 g\nAsam benzoat 1,5 g\nCamphor 1 g\nMetil salisilat q.s.\nTalk q.s. ad 30 g\nm.f. pulv. adsp.\nS.u.e (Bedak tabur gatal)\nPro: Sdr. Andi (25 th)',
    question: 'Apakah bentuk sediaan padat yang diminta dokter dalam resep tersebut?',
    options: [
      { key: 'A', text: 'Pulvis adspersorius (Serbuk tabur tidak terbagi)' },
      { key: 'B', text: 'Pulveres (Serbuk terbagi dalam bungkus kertas perkamen)' },
      { key: 'C', text: 'Unguentum (Salep berlemak)' },
      { key: 'D', text: 'Krim O/W' },
      { key: 'E', text: 'Pasta zat padat tinggi' }
    ],
    correctAnswer: 'A',
    explanation: 'Pulvis adspersorius adalah serbuk tabur bebas butiran kasar yang digunakan untuk pemakaian luar pada kulit (S.u.e = signa usus externus). Menggunakan basis talk venetum yang disaring melalui ayakan mesh 100.',
    clinicalReference: 'Farmakope Indonesia Edisi V & Buku Pedoman Formulasi Sediaan Semisolid-Padat',
    difficulty: 'Mudah'
  },
  {
    id: 'q-671',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Seorang TTK penanggung jawab pengadaan di apotek membeli obat Parasetamol sirup sebanyak 20 botol secara kredit dengan termin pembayaran 30 hari (net 30) dari Pedagang Besar Farmasi (PBF) resmi.',
    question: 'Bukti transaksi legal apakah yang pertama kali diterima apotek saat barang diserahkan oleh kurir PBF?',
    options: [
      { key: 'A', text: 'Kuitansi lunas bertanda tangan materai' },
      { key: 'B', text: 'Faktur penjualan asli beserta copy faktur dari PBF' },
      { key: 'C', text: 'Bilyet giro kosong' },
      { key: 'D', text: 'Surat penarikan barang konsinyasi' },
      { key: 'E', text: 'Nota kredit retur barang' }
    ],
    correctAnswer: 'B',
    explanation: 'Pada transaksi pembelian kredit dari PBF, saat pengiriman obat pihak apotek menerima Faktur Penjualan (asli/copy faktur) yang mencantumkan nama obat, batch, ED, kuantitas, harga, PPN, dan tanggal jatuh tempo. Kuitansi pelunasan baru diberikan setelah apotek menyelesaikan pembayaran pada hari ke-30.',
    clinicalReference: 'Petunjuk Teknis CDOB BPOM RI & Manajemen Farmasi Komunitas',
    difficulty: 'Mudah'
  },
  {
    id: 'q-672',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'TTK di bagian penerimaan apotek menerima Amoksisilin 500 mg sebanyak 3 box (@ 100 kaplet) dari PBF. Pada dokumen faktur tertulis total harga netto sebelum pajak adalah Rp 300.000,-. Faktur tersebut dikenakan PPN sebesar 10%.',
    question: 'Berapakah harga beli amoksisilin per box setelah dikenakan Pajak Pertambahan Nilai (PPN)?',
    options: [
      { key: 'A', text: 'Rp 100.000,-' },
      { key: 'B', text: 'Rp 105.000,-' },
      { key: 'C', text: 'Rp 110.000,-' },
      { key: 'D', text: 'Rp 300.000,-' },
      { key: 'E', text: 'Rp 330.000,-' }
    ],
    correctAnswer: 'C',
    explanation: 'Harga 3 box sebelum PPN = Rp 300.000 -> Harga 1 box = Rp 300.000 / 3 = Rp 100.000. PPN 10% = 10% x Rp 100.000 = Rp 10.000. Maka harga beli per box setelah pajak = Rp 100.000 + Rp 10.000 = Rp 110.000,-.',
    clinicalReference: 'Undang-Undang Harmonisasi Peraturan Perpajakan & Perhitungan Farmasetik APDFI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-673',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Seorang TTK meracik sediaan suspensi oral berikut di laboratorium farmasetika apotek:\nR/ Asam Mefenamat 0,05 g / 5 mL\nPulvis Gummi Arabici (PGA) 1%\nPropilenglikol 15%\nSirup Simplex 20 mL\nAqua destilata ad 60 mL\nm.f. suspensio\nS. 3 dd Cth I',
    question: 'Berapakah bobot suspending agent (PGA) yang harus ditimbang untuk meracik resep suspensi tersebut?',
    options: [
      { key: 'A', text: '0,06 gram' },
      { key: 'B', text: '0,60 gram' },
      { key: 'C', text: '1,00 gram' },
      { key: 'D', text: '6,00 gram' },
      { key: 'E', text: '9,00 gram' }
    ],
    correctAnswer: 'B',
    explanation: 'Volume total suspensi = 60 mL. Konsentrasi PGA = 1% (% b/v). Jumlah PGA yang ditimbang = 1% x 60 mL = (1 / 100) x 60 = 0,60 gram (600 mg). Air untuk membuat korpus emulsi/mucilago PGA adalah 1,5 x bobot PGA.',
    clinicalReference: 'Ilmu Meracik Obat Farmakope Indonesia & Hitungan Farmasetik APDFI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-674',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'TTK yang bertugas di instalasi farmasi rumah sakit menyiapkan obat untuk pasien rawat inap menggunakan sistem distribusi Unit Dose Dispensing (UDD) berdasarkan instruksi medik terintegrasi.',
    question: 'Kapan obat UDD tersebut diserahkan dan diberikan kepada pasien?',
    options: [
      { key: 'A', text: 'Sekaligus untuk kebutuhan 7 hari ke depan saat pasien masuk' },
      { key: 'B', text: 'Setiap 1 hari sekali dalam bentuk wadah kotak harian' },
      { key: 'C', text: 'Setiap waktu minum obat dalam dosis tunggal siap pakai' },
      { key: 'D', text: 'Setiap ada permintaan lisan dari keluarga pasien' },
      { key: 'E', text: 'Saat pasien dinyatakan pulang oleh dokter spesialis' }
    ],
    correctAnswer: 'C',
    explanation: 'Unit Dose Dispensing (UDD) adalah metode pendistribusian obat di rumah sakit di mana obat disiapkan dan diserahkan dalam bentuk wadah tunggal berisi dosis yang telah ditentukan untuk SETIAP KALI WAKTU MINUM OBAT pasien. Sistem ini memiliki tingkat medication error paling rendah.',
    clinicalReference: 'Permenkes RI No. 72 Tahun 2016 tentang Standar Pelayanan Kefarmasian di RS',
    difficulty: 'Mudah'
  },
  {
    id: 'q-675',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Seorang TTK mendapatkan resep peracikan balsam analgesik topikal:\nR/ Kamfer 2%\nMenthol 2%\nMetil Salisilat 10%\nVaselin album ad 40 gram\nm.f. balsam s.u.e.',
    question: 'Berapakah jumlah serbuk kamfer yang harus ditimbang oleh TTK tersebut?',
    options: [
      { key: 'A', text: '0,08 gram' },
      { key: 'B', text: '0,80 gram' },
      { key: 'C', text: '8,00 gram' },
      { key: 'D', text: '80 mg' },
      { key: 'E', text: '8 mg' }
    ],
    correctAnswer: 'B',
    explanation: 'Total sediaan balsam = 40 gram. Persentase kamfer = 2%. Bobot kamfer = 2% x 40 gram = (2 / 100) x 40 = 0,80 gram (atau 800 mg). Kamfer dan menthol akan mengalami peristiwa eutektik (mencair bersama).',
    clinicalReference: 'Formularium Nasional (Fornas) & Hitungan Farmasi Vokasi',
    difficulty: 'Mudah'
  },
  {
    id: 'q-676',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Komposisi suatu sirup obat flu dan batuk kombinasi mengandung: Parasetamol 500 mg, Fenilpropanolamin HCl 15 mg, Deksklorfeniramin maleat (CTM) 2 mg, Dekstrometorfan HBr 15 mg, dan Gliseril Guaiakolat (GG) 50 mg per 5 mL.',
    question: 'Komponen zat aktif manakah yang memiliki indikasi primer spesifik sebagai antitusif penekan refleks batuk kering pada susunan saraf pusat?',
    options: [
      { key: 'A', text: 'Parasetamol' },
      { key: 'B', text: 'Fenilpropanolamin HCl' },
      { key: 'C', text: 'Deksklorfeniramin maleat' },
      { key: 'D', text: 'Dekstrometorfan HBr' },
      { key: 'E', text: 'Gliseril guaiakolat' }
    ],
    correctAnswer: 'D',
    explanation: 'Dekstrometorfan HBr adalah obat golongan antitusif non-narkotik yang bekerja secara sentral pada medula oblongata menaikkan ambang rangsang refleks batuk kering. Gliseril Guaiakolat (Guaifenesin) adalah ekspektoran; Fenilpropanolamin adalah dekongestan nasal; Deksklorfeniramin adalah antihistamin H1; Parasetamol adalah antipiretik-analgetik.',
    clinicalReference: 'Farmakope Indonesia & Farmakologi Dasar Kemenkes',
    difficulty: 'Mudah'
  },
  {
    id: 'q-677',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Pada proses formulasi sediaan steril injeksi Vitamin C (Asam Askorbat) di industri farmasi, ditambahkan beberapa eksipien seperti Natrium bikarbonat, Natrium metabisulfit, Dapar fosfat, dan dialiri gas nitrogen (N2).',
    question: 'Bahan manakah yang berfungsi spesifik mempertahankan derajat keasaman (pH) sediaan terhadap fluktuasi lingkungan?',
    options: [
      { key: 'A', text: 'Natrium bikarbonat' },
      { key: 'B', text: 'Natrium metabisulfit' },
      { key: 'C', text: 'Dapar fosfat' },
      { key: 'D', text: 'Gas nitrogen' },
      { key: 'E', text: 'Aqua pro injectione' }
    ],
    correctAnswer: 'C',
    explanation: 'Dapar fosfat (phosphate buffer) berfungsi sebagai zat penahan/penyangga pH (buffering agent) untuk menjaga kestabilan pH sediaan pada rentang sempit. Natrium bikarbonat berfungsi membentuk garam natrium askorbat larut air; Natrium metabisulfit adalah antioksidan; Gas nitrogen adalah pemindah udara (mengusir oksigen pencegah oksidasi).',
    clinicalReference: 'Handbook of Pharmaceutical Excipients Edisi 8 & Formulasi Steril CPOB',
    difficulty: 'Sedang'
  },
  {
    id: 'q-678',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Data instalasi farmasi RS menunjukkan bahwa rata-rata penggunaan per bulan tablet Clopidogrel 75 mg adalah 245 box. Waktu tunggu (lead time) pemesanan dari distributor resmi adalah 2 bulan.',
    question: 'Berapakah jumlah stok pengaman (safety stock) minimum yang perlu disiapkan untuk mencegah stock-out selama masa tunggu tersebut?',
    options: [
      { key: 'A', text: '245 box' },
      { key: 'B', text: '360 box' },
      { key: 'C', text: '490 box' },
      { key: 'D', text: '735 box' },
      { key: 'E', text: '980 box' }
    ],
    correctAnswer: 'C',
    explanation: 'Stok Pengaman (Safety Stock / Buffer Stock) untuk mengantisipasi lead time = Rata-rata penggunaan per periode x Lead Time (waktu tunggu). Safety Stock = 245 box/bulan x 2 bulan = 490 box.',
    clinicalReference: 'Pedoman Pengelolaan Obat dan Perbekalan Kesehatan Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-679',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Seorang TTK di gudang instalasi farmasi rumah sakit menerima sejumlah sediaan parenteral ampul darurat, antara lain Injeksi Dobutamin 250 mg/5 mL dan Injeksi Dopamin 200 mg/5 mL. Kedua obat memiliki kemasan dan pengucapan nama yang sangat mirip.',
    question: 'Apakah tindakan keselamatan pasien (patient safety) yang wajib dilakukan oleh TTK saat menata obat tersebut?',
    options: [
      { key: 'A', text: 'Memberikan stiker penandaan LASA (Look-Alike Sound-Alike) dan Tall Man Lettering serta tidak meletakkannya bersebelahan' },
      { key: 'B', text: 'Menyimpan sediaan di lemari khusus narkotika double lock' },
      { key: 'C', text: 'Menyimpan sediaan di suhu beku freezer -20 C' },
      { key: 'D', text: 'Memberi label limbah B3 berwarna cokelat' },
      { key: 'E', text: 'Menyerahkan langsung ke keluarga pasien tanpa resep' }
    ],
    correctAnswer: 'A',
    explanation: 'Dobutamin dan Dopamin merupakan obat kategori High Alert yang memiliki nama dan kemasan mirip (LASA / NORUM: Nama Obat Rupa Ucapan Mirip). Regulasi Kemenkes mewajibkan pemberian label LASA berwarna cerah, penerapan penulisan Tall Man Lettering (DOBUTamin vs DOPAMin), serta dilarang diletakkan bersebelahan secara fisik di rak penyimpanan.',
    clinicalReference: 'Permenkes No. 72 Tahun 2016 & Sasaran Keselamatan Pasien (SKP 3)',
    difficulty: 'Mudah'
  },
  {
    id: 'q-680',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Seorang pelanggan apotek menyerahkan resep berisi tablet Loperamid HCl 2 mg (Imodium). Setelah melakukan dispensing obat, TTK memberikan edukasi mengenai cara penggunaan dan efek samping yang perlu diwaspadai jika obat digunakan berlebihan atau dalam jangka panjang tanpa rekomendasi dokter.',
    question: 'Apakah efek samping yang paling lazim terjadi akibat penggunaan Loperamid berlebihan?',
    options: [
      { key: 'A', text: 'Konstipasi parah (sembelit) dan paralisis ileus' },
      { key: 'B', text: 'Mual muntah disertai urin berwarna merah pekat' },
      { key: 'C', text: 'Hipotensi ortostatik mendadak' },
      { key: 'D', text: 'Kencing batu asam jengkolat' },
      { key: 'E', text: 'Ruam hipersensitivitas Steven-Johnson syndrome' }
    ],
    correctAnswer: 'A',
    explanation: 'Loperamid adalah agonis reseptor mu-opioid perifer di plexus myentericus dinding usus yang menghambat gerakan peristaltik usus halus dan kolon secara kuat. Penggunaan dosis berlebih atau tanpa aturan dapat memicu konstipasi hebat bahkan ileus paralitik toksik (terutama jika diare disebabkan kuman invasif).',
    clinicalReference: 'BNF (British National Formulary) & Farmakologi UI Diare',
    difficulty: 'Mudah'
  },
  {
    id: 'q-681',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Seorang TTK menghitung dosis Capecitabine per oral untuk pasien kanker kolorektal berdasarkan Luas Permukaan Tubuh (Body Surface Area / BSA). Dosis yang diresepkan adalah 750 mg/m2 diberikan 2 kali sehari. Pasien memiliki berat badan 50 kg dan tinggi badan 160 cm. (Petunjuk: Nilai BSA menurut rumus Mosteller = akar[(Tinggi x Berat)/3600]).',
    question: 'Berapakah dosis Capecitabine untuk SATU KALI MINUM pasien tersebut?',
    options: [
      { key: 'A', text: '750 mg' },
      { key: 'B', text: '1117,5 mg' },
      { key: 'C', text: '1462,5 mg' },
      { key: 'D', text: '1670,5 mg' },
      { key: 'E', text: '2235,0 mg' }
    ],
    correctAnswer: 'B',
    explanation: 'BSA Mosteller = akar[(160 x 50) / 3600] = akar[8000 / 3600] = akar[2,222] = 1,49 m2. Dosis satu kali minum = 750 mg/m2 x 1,49 m2 = 1.117,5 mg.',
    clinicalReference: 'Clinical Oncology Pharmacy & Pedoman Perhitungan Dosis Sitostatika Kemenkes',
    difficulty: 'Sedang'
  },
  {
    id: 'q-682',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Seorang TTK yang bertugas di instalasi farmasi darurat menerima resep tertulis tanda peringatan CITO / P.I.M di sudut kanan atas resep dokter bedah.',
    question: 'Apakah kepanjangan dan arti dari istilah latin P.I.M dalam resep darurat tersebut?',
    options: [
      { key: 'A', text: 'Periculum in mora (Berbahaya jika ditunda / segera layani)' },
      { key: 'B', text: 'Pro re nata (Jika diperlukan)' },
      { key: 'C', text: 'In manus medici (Serahkan ke tangan dokter)' },
      { key: 'D', text: 'Usus cognitus (Pemakaian sudah diketahui)' },
      { key: 'E', text: 'Mihi ipsi (Untuk diri dokter sendiri)' }
    ],
    correctAnswer: 'A',
    explanation: 'P.I.M singkatan dari Periculum In Mora yang berarti "adanya bahaya bila ditunda". Resep dengan tanda ini harus didahulukan pelayanannya setara dengan Cito! (segera), Statim (penting), dan Urgens (mendesak).',
    clinicalReference: 'Ilmu Resep & Bahasa Latin Farmasi Kedokteran',
    difficulty: 'Mudah'
  },
  {
    id: 'q-683',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'TTK menerima resep puyer anak:\nR/ Kotrimoksazol (Trimetoprim / TMP) 40 mg\nm.f. pulv. dtd. No. XVI\nDi apotek hanya tersedia tablet Kotrimoksazol Forte (mengandung Trimetoprim 160 mg dan Sulfametoksazol 800 mg per tablet).',
    question: 'Berapakah jumlah tablet Kotrimoksazol Forte yang harus diambil untuk meracik resep tersebut?',
    options: [
      { key: 'A', text: '1 tablet' },
      { key: 'B', text: '2 tablet' },
      { key: 'C', text: '4 tablet' },
      { key: 'D', text: '8 tablet' },
      { key: 'E', text: '16 tablet' }
    ],
    correctAnswer: 'C',
    explanation: 'Kebutuhan TMP per bungkus = 40 mg. Jumlah puyer (dtd No. XVI) = 16 bungkus. Total TMP yang dibutuhkan = 40 mg x 16 = 640 mg TMP. Kekuatan Kotrimoksazol Forte per tablet = 160 mg TMP. Jumlah tablet yang diambil = 640 mg / 160 mg = 4 tablet Forte.',
    clinicalReference: 'Perhitungan Farmasetika Dasar & Blueprint APDFI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-684',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Seorang TTK menyiapkan resep racikan puyer: R/ Prednison 1/5 tab; m.f. pulv. dtd. No. XXVII. Di apotek tersedia tablet Prednison dengan kekuatan 5 mg per tablet. Jumlah tablet utuh yang dibutuhkan adalah 5,4 tablet, sehingga diperlukan pengenceran untuk sisa 0,4 tablet (2 mg zat aktif). TTK menimbang 1 tablet prednison 5 mg (bobot tablet 200 mg), digerus bersama laktosa hingga bobot campuran 500 mg.',
    question: 'Berapakah bobot campuran pengenceran (dalam mg) yang harus diambil untuk mewakili 0,4 tablet (2 mg) prednison tersebut?',
    options: [
      { key: 'A', text: '100 mg' },
      { key: 'B', text: '200 mg' },
      { key: 'C', text: '300 mg' },
      { key: 'D', text: '400 mg' },
      { key: 'E', text: '500 mg' }
    ],
    correctAnswer: 'B',
    explanation: 'Pengenceran serbuk padat (triturasi): 1 tablet (5 mg prednison) diencerkan dengan laktosa ad 500 mg. Fraksi yang dibutuhkan adalah 0,4 bagian tablet (atau 2 mg dari total 5 mg = 2/5). Bobot yang diambil = (2 mg / 5 mg) x 500 mg = 0,4 x 500 mg = 200 mg.',
    clinicalReference: 'Buku Pedoman Peracikan Sediaan Pulveres FI III & APDFI',
    difficulty: 'Sedang'
  },
  {
    id: 'q-685',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien datang ke apotek menceritakan bahwa dirinya merasa sangat mengantuk berat, linglung, dan berhalusinasi setelah meminum obat dari apotek. Setelah dilakukan investigasi resep, diketahui TTK salah membaca tulisan dokter dan menyerahkan tablet Klozapin (antipsikotik atipikal) yang seharusnya diresepkan Klobazam (ansiolitik benzodiazepin). Pasien sempat berobat ke IGD karena kejadian ini namun kondisinya membaik.',
    question: 'Apakah klasifikasi insiden keselamatan pasien (medication error) pada kasus tersebut?',
    options: [
      { key: 'A', text: 'Kejadian Potensial Cedera (KPC)' },
      { key: 'B', text: 'Kejadian Nyaris Cedera (KNC)' },
      { key: 'C', text: 'Kejadian Tidak Cedera (KTC)' },
      { key: 'D', text: 'Kejadian Tidak Diharapkan (KTD)' },
      { key: 'E', text: 'Kejadian Sentinel' }
    ],
    correctAnswer: 'D',
    explanation: 'Kejadian Tidak Diharapkan (KTD / Adverse Event) adalah insiden keselamatan pasien yang mengakibatkan cedera atau efek merugikan yang tidak diharapkan pada pasien akibat tindakan salah pemberian obat yang sempat terminum/terpapar ke pasien.',
    clinicalReference: 'Permenkes No. 11 Tahun 2017 tentang Keselamatan Pasien',
    difficulty: 'Sedang'
  },
  {
    id: 'q-686',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien lanjut usia penderita gagal jantung kongestif (CHF) dirawat inap di rumah sakit karena fraktur femur. Pasien rutin meminum diuretik Furosemid dan Spironolakton di rumah. Namun karena kelalaian proses rekonsiliasi obat saat pulang, terapi diuretiknya tidak dituliskan pada resume pulang. Satu minggu kemudian pasien mengalami edema paru akut dan henti jantung (cardiac arrest) hingga meninggal dunia.',
    question: 'Apakah klasifikasi insiden keselamatan pasien yang paling tepat pada kasus fatal tersebut?',
    options: [
      { key: 'A', text: 'Kejadian Sentinel' },
      { key: 'B', text: 'Kejadian Tidak Diharapkan (KTD)' },
      { key: 'C', text: 'Kejadian Nyaris Cedera (KNC)' },
      { key: 'D', text: 'Kejadian Potensial Cedera (KPC)' },
      { key: 'E', text: 'Kejadian Tidak Cedera (KTC)' }
    ],
    correctAnswer: 'A',
    explanation: 'Kejadian Sentinel adalah suatu Kejadian Tidak Diharapkan (KTD) yang mengakibatkan KEMATIAN, cedera permanen, atau kehilangan fungsi tubuh mayor yang tidak terkait dengan perjalanan alamiah penyakit pasien. Kasus kematian akibat kelalaian rekonsiliasi obat merupakan indikator insiden sentinel yang wajib dilakukan Root Cause Analysis (RCA).',
    clinicalReference: 'Permenkes No. 11 Tahun 2017 & Standar Akreditasi Rumah Sakit (KARS/STARKES)',
    difficulty: 'Mudah'
  },
  {
    id: 'q-687',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien skizofrenia mendapat terapi antipsikotik Haloperidol 5 mg 2 kali sehari. Pada minggu kedua terapi, pasien mengeluhkan kekakuan otot leher kaku, tremor halus pada kedua tangan, dan gerakan tubuh yang gelisah tidak bisa diam (akatisia). Dokter menambahkan Triheksifenidil (THP) 2 mg.',
    question: 'Apakah nama sindrom klinis efek samping yang dialami pasien akibat antagonisme dopamin Haloperidol tersebut?',
    options: [
      { key: 'A', text: 'Sindrom Stevens-Johnson' },
      { key: 'B', text: 'Sindrom Serotonin' },
      { key: 'C', text: 'Efek Ekstrapiramidal (Extrapyramidal Symptoms / EPS)' },
      { key: 'D', text: 'Reye Syndrome' },
      { key: 'E', text: 'Toxic Epidermal Necrolysis' }
    ],
    correctAnswer: 'C',
    explanation: 'Efek Ekstrapiramidal (EPS) merupakan efek samping karakteristik dari antipsikotik tipikal potensi tinggi seperti Haloperidol akibat blokade reseptor dopamin D2 di jalur nigrostriatal otak, meliputi distonia akut, parkinsonisme (tremor, rigiditas), dan akatisia. Triheksifenidil (antikolinergik sentral) diberikan untuk mengembalikan keseimbangan dopamin-asetilkolin.',
    clinicalReference: 'Panduan Praktik Klinis Psikiatri PDSKJI & Farmakologi UI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-688',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Dalam kegiatan pendistribusian obat dan alat kesehatan (kateter, spuit, infus set) di suatu rumah sakit tipe A yang memiliki beberapa gedung rawat inap terpisah, pengelolaan farmasi ditempatkan di satelit/depo farmasi lantai yang melayani ruangan di sekitarnya.',
    question: 'Apakah nama sistem distribusi farmasi rumah sakit tersebut?',
    options: [
      { key: 'A', text: 'Sistem Sentralisasi murni' },
      { key: 'B', text: 'Sistem Desentralisasi (Depo/Satelit Farmasi)' },
      { key: 'C', text: 'Sistem Floor Stock total' },
      { key: 'D', text: 'Sistem Individual Prescribing' },
      { key: 'E', text: 'Sistem Konsinyasi vendor' }
    ],
    correctAnswer: 'B',
    explanation: 'Sistem Desentralisasi adalah sistem distribusi pelayanan kefarmasian di rumah sakit di mana cabang-cabang depo/satelit farmasi didirikan di dekat area perawatan klinis (misal: depo ICU, depo IBS, depo IGD, depo rawat inap anak) untuk mempercepat waktu tunggu penyiapan obat dan alat kesehatan.',
    clinicalReference: 'Permenkes RI No. 72 Tahun 2016 tentang Standar Pelayanan Farmasi di RS',
    difficulty: 'Mudah'
  },
  {
    id: 'q-689',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Suatu sediaan injeksi Furosemid tersedia dengan kekuatan konsentrasi 1% b/v (10 mg/mL) dalam ampul 2 mL. Dokter meresepkan injeksi Furosemid dengan dosis 0,5 mg/kgBB intravena bolus pada pasien gagal jantung kongestif dengan berat badan 68 kg.',
    question: 'Berapakah volume sediaan injeksi (dalam mL) yang harus disiapkan oleh TTK untuk dosis tersebut?',
    options: [
      { key: 'A', text: '1,7 mL' },
      { key: 'B', text: '3,4 mL' },
      { key: 'C', text: '6,8 mL' },
      { key: 'D', text: '13,6 mL' },
      { key: 'E', text: '27,2 mL' }
    ],
    correctAnswer: 'B',
    explanation: 'Dosis yang dibutuhkan = 0,5 mg/kgBB x 68 kg = 34 mg. Konsentrasi Furosemid 1% b/v = 1 gram/100 mL = 1000 mg/100 mL = 10 mg/mL. Volume yang disiapkan = Dosis / Konsentrasi = 34 mg / 10 mg/mL = 3,4 mL.',
    clinicalReference: 'Perhitungan Dosis Farmasi Klinis & Blueprint APDFI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-690',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Seorang TTK di laboratorium farmasetika apotek meracik sediaan krim kortikosteroid dengan mencampurkan 0,45 gram serbuk Hidrokortison Asetat ke dalam basis krim hingga bobot total campuran mencapai 30 gram.',
    question: 'Berapakah persentase kekuatan zat aktif (% b/b) Hidrokortison dalam sediaan krim racikan tersebut?',
    options: [
      { key: 'A', text: '0,5% b/b' },
      { key: 'B', text: '1,0% b/b' },
      { key: 'C', text: '1,5% b/b' },
      { key: 'D', text: '2,0% b/b' },
      { key: 'E', text: '2,5% b/b' }
    ],
    correctAnswer: 'C',
    explanation: 'Persentase kekuatan zat aktif (% b/b) = (Bobot zat aktif / Bobot total sediaan) x 100% = (0,45 gram / 30 gram) x 100% = 0,015 x 100% = 1,5% b/b.',
    clinicalReference: 'Farmakope Indonesia Edisi V & Hitungan Farmasi Vokasi',
    difficulty: 'Mudah'
  },
  {
    id: 'q-691',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien diabetes melitus tipe 2 mengonsumsi obat Acarbose 50 mg bersama suapan pertama makanan utama. Mekanisme kerjanya adalah menghambat hidrolisis karbohidrat kompleks di enterosit usus halus sehingga mencegah lonjakan glukosa darah postprandial.',
    question: 'Apakah golongan farmakologi dari obat antidiabetik oral Acarbose tersebut?',
    options: [
      { key: 'A', text: 'Sulfonilurea' },
      { key: 'B', text: 'Tiazolidindion' },
      { key: 'C', text: 'Penghambat Alfa-Glukosidase' },
      { key: 'D', text: 'Inhibitor SGLT-2' },
      { key: 'E', text: 'Inhibitor DPP-4' }
    ],
    correctAnswer: 'C',
    explanation: 'Acarbose adalah obat golongan Alpha-Glucosidase Inhibitor (Penghambat Enzim Alfa-Glukosidase) yang bekerja secara kompetitif menghambat enzim alfa-glukosidase (maltase, sukrase) pada brush border usus halus, memperlambat pemecahan disakarida/oligosakarida menjadi monosakarida glukosa.',
    clinicalReference: 'Konsensus Pengelolaan DM Tipe 2 PERKENI & Farmakologi Dasar',
    difficulty: 'Mudah'
  },
  {
    id: 'q-692',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien datang ke apotek membawa pen insulin Novorapid FlexPen yang baru dibelinya 3 hari lalu. Pasien mengeluhkan larutan insulin di dalam pen berubah menjadi keruh menggumpal dan terdapat serpihan putih setelah ia meninggalkannya di dashboard mobil yang terjemur panas terik matahari seharian.',
    question: 'Apakah edukasi dan solusi yang paling tepat diberikan oleh TTK?',
    options: [
      { key: 'A', text: 'Segera memasukkan pen insulin ke dalam kompartemen freezer bersuhu -20 C' },
      { key: 'B', text: 'Insulin telah terdenaturasi dan rusak sehingga tidak boleh digunakan lagi dan harus diganti baru' },
      { key: 'C', text: 'Cukup mengganti jarum pen dengan yang baru dan dikocok kuat' },
      { key: 'D', text: 'Mendiamkan insulin pada suhu ruang selama 10 menit sebelum disuntikkan' },
      { key: 'E', text: 'Menghangatkan pen insulin di bawah air panas mengalir' }
    ],
    correctAnswer: 'B',
    explanation: 'Insulin merupakan molekul protein rantai polipeptida yang sangat sensitif terhadap paparan panas ekstrem (> 30 C) dan sinar UV matahari langsung. Suhu panas di dalam mobil tertutup menyebabkan denaturasi protein ireversibel dan agregasi kristal yang menghilangkan bioavailabilitas insulin dan berisiko memicu reaksi imunogenik lokal. Sediaan rusak harus dibuang.',
    clinicalReference: 'Petunjuk Penyimpanan Sediaan Biologis & Cold Chain Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-693',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Salah satu golongan obat antidiabetik oral (ADO) terbaru bekerja secara spesifik menghambat reabsorpsi glukosa di tubulus proksimal ginjal sehingga meningkatkan ekskresi glukosa melalui urin (glukosuria), namun memiliki risiko efek samping infeksi saluran kemih (ISK) dan mikosis genital.',
    question: 'Apakah nama golongan obat antidiabetik yang dimaksud?',
    options: [
      { key: 'A', text: 'Inhibitor SGLT-2 (Sodium-Glucose Co-Transporter 2)' },
      { key: 'B', text: 'Tiazolidindion' },
      { key: 'C', text: 'Inhibitor DPP-4' },
      { key: 'D', text: 'Sulfonilurea' },
      { key: 'E', text: 'Penghambat Alfa-Glukosidase' }
    ],
    correctAnswer: 'A',
    explanation: 'SGLT-2 Inhibitor (seperti Empagliflozin, Dapagliflozin, Canagliflozin) bekerja menghambat kotransporter natrium-glukosa tipe 2 di tubulus ginjal proksimal, menurunkan ambang ginjal terhadap glukosa. Karena glukosa banyak dibuang ke dalam urin, lingkungan saluran kemih menjadi kaya nutrisi yang mendukung pertumbuhan bakteri dan jamur kandida (risiko ISK meningkat).',
    clinicalReference: 'Pedoman Farmakoterapi ADA & PERKENI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-694',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien lanjut usia penderita nyeri kronis berat akibat metastase kanker tulang diresepkan analgetik opioid potensi tinggi dalam bentuk sediaan plester transdermal (patch) yang diganti setiap 72 jam sekali.',
    question: 'Apakah nama obat analgetik opioid sediaan koyo transdermal tersebut?',
    options: [
      { key: 'A', text: 'Fentanil transdermal patch' },
      { key: 'B', text: 'Tramadol' },
      { key: 'C', text: 'Kodein fosfat' },
      { key: 'D', text: 'Petidin HCl' },
      { key: 'E', text: 'Morfin sirup' }
    ],
    correctAnswer: 'A',
    explanation: 'Fentanil (Fentanyl) adalah opioid sintetik kuat (sekitar 80-100 kali lebih poten dari morfin oral) yang memiliki sifat lipofilik tinggi sehingga sangat cocok diformulasikan ke dalam bentuk sediaan transdermal therapeutic system (Durogesic patch) untuk pelepasan lambat terkontrol mengatasi nyeri kronis kanker stadium lanjut.',
    clinicalReference: 'Pedoman Nyeri Kanker WHO & Formularium Nasional Narkotika',
    difficulty: 'Mudah'
  },
  {
    id: 'q-695',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Seorang TTK di gudang farmasi Dinas Kesehatan memeriksa kondisi fisik indikator Vaccine Vial Monitor (VVM) pada botol vaksin Polio. Hasil inspeksi visual menunjukkan warna bujur sangkar di bagian tengah sudah BERUBAH MENJADI LEBIH GELAP dibandingkan dengan warna lingkaran di sekelilingnya (Kondisi VVM tahap D).',
    question: 'Apakah arti dari indikator VVM tersebut dan tindakan apa yang wajib diambil?',
    options: [
      { key: 'A', text: 'Vaksin dalam kondisi sangat baik dan aman digunakan' },
      { key: 'B', text: 'Vaksin harus segera digunakan dalam waktu maksimal 24 jam' },
      { key: 'C', text: 'Vaksin telah terpapar panas kumulatif berlebih, rusak, dan DILARANG digunakan' },
      { key: 'D', text: 'Vaksin harus segera dipindahkan ke dalam freezer suhu -80 C' },
      { key: 'E', text: 'Vaksin hanya boleh digunakan untuk anak berusia di atas 5 tahun' }
    ],
    correctAnswer: 'C',
    explanation: 'Kriteria interpretasi VVM (Vaccine Vial Monitor): Tahap A (bujur sangkar putih terang): gunakan; Tahap B (bujur sangkar mulai gelap tapi lebih terang dari lingkaran): gunakan duluan; Tahap C (warna bujur sangkar sama gelap dengan lingkaran): JANGAN GUNAKAN; Tahap D (warna bujur sangkar LEBIH GELAP dari lingkaran): JANGAN GUNAKAN / RUSAK. Vaksin pada tahap D telah kehilangan potensinya akibat panas kumulatif.',
    clinicalReference: 'WHO Vaccine Management Guide & Permenkes No. 12 Tahun 2017 Imunisasi',
    difficulty: 'Mudah'
  },
  {
    id: 'q-696',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Seorang TTK mendampingi perawat di ruang imunisasi puskesmas menyiapkan vaksin BCG cair setelah dilarutkan dengan pelarut natrium klorida steril khusus. Vaksin ini harus disuntikkan secara tepat pada lapisan dermis kulit.',
    question: 'Apakah rute pemberian vaksin BCG yang dipersyaratkan secara resmi?',
    options: [
      { key: 'A', text: 'Per oral' },
      { key: 'B', text: 'Subkutan (SC)' },
      { key: 'C', text: 'Intrakutan (IC / Intradermal)' },
      { key: 'D', text: 'Intramuskular (IM)' },
      { key: 'E', text: 'Intravena (IV)' }
    ],
    correctAnswer: 'C',
    explanation: 'Vaksin BCG diberikan secara INTRAKUTAN (IC / intradermal) dengan sudut kemiringan jarum 10-15 derajat pada insersi muskulus deltoideus lengan kanan atas. Pemberian yang terlalu dalam (subkutan) dapat menimbulkan abses lokal dan ulserasi berat.',
    clinicalReference: 'Petunjuk Teknis Pelaksanaan Imunisasi Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-697',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'TTK di instalasi farmasi Dinas Kesehatan mengelola cold room dan freezer room untuk vaksin. Terdapat beberapa jenis vaksin: BCG, DPT-HB-Hib, IPV, Polio oral (bOPV), dan Campak Rubella.',
    question: 'Vaksin manakah yang memiliki stabilitas optimal dan wajib disimpan pada suhu beku (freeze room -15 C s/d -25 C)?',
    options: [
      { key: 'A', text: 'BCG' },
      { key: 'B', text: 'IPV' },
      { key: 'C', text: 'DPT-HB-Hib' },
      { key: 'D', text: 'Polio Oral (OPV)' },
      { key: 'E', text: 'Hepatitis B' }
    ],
    correctAnswer: 'D',
    explanation: 'Vaksin Polio Oral (OPV) adalah vaksin hidup yang sangat termolabil dan wajib disimpan pada suhu beku -15 C s/d -25 C di ruang freezer pada level distributor/dinkes. Sebaliknya, vaksin sensitif beku (Freeze-sensitive: DPT-HB-Hib, TT, IPV, Hep B) TIDAK BOLEH DIBEKUKAN dan harus disimpan pada suhu 2 C s/d 8 C.',
    clinicalReference: 'Permenkes No. 12 Tahun 2017 & Modul Pelatihan Rantai Dingin Vaksin Dinkes',
    difficulty: 'Mudah'
  },
  {
    id: 'q-698',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Seorang penderita tuberkulosis paru yang sedang mengonsumsi regimen OAT kategori 1 mengeluhkan rasa kebas, kesemutan, dan rasa terbakar pada kedua telapak kakinya akibat efek neurotoksisitas Isoniazid (INH).',
    question: 'Suplemen vitamin apakah yang harus ditambahkan ke dalam resep untuk mengatasi efek samping neuropati perifer tersebut?',
    options: [
      { key: 'A', text: 'Tiamin (Vitamin B1)' },
      { key: 'B', text: 'Piridoksin (Vitamin B6)' },
      { key: 'C', text: 'Sianokobalamin (Vitamin B12)' },
      { key: 'D', text: 'Asam Folat (Vitamin B9)' },
      { key: 'E', text: 'Riboflavin (Vitamin B2)' }
    ],
    correctAnswer: 'B',
    explanation: 'Isoniazid (INH) berkompetisi dengan piridoksal fosfat dan meningkatkan ekskresi ginjal vitamin B6, memicu defisiensi piridoksin yang berakibat pada neuropati perifer. Suplementasi Piridoksin (Vitamin B6) dosis 10-25 mg/hari rutin diberikan sebagai ko-terapi pencegah/pengobat neuropati perifer akibat INH.',
    clinicalReference: 'Petunjuk Teknis Tatalaksana Tuberkulosis Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-699',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien TBC yang baru menjalani terapi OAT intensif (2RHZE) selama 6 minggu datang kontrol ke poli paru mengeluhkan penurunan ketajaman penglihatan dan kesulitan membedakan warna merah dan hijau (buta warna parsial).',
    question: 'Obat antituberkulosis manakah yang merupakan penyebab utama dari efek samping neuritis retrobulbar optik tersebut?',
    options: [
      { key: 'A', text: 'Isoniazid' },
      { key: 'B', text: 'Rifampisin' },
      { key: 'C', text: 'Pirazinamid' },
      { key: 'D', text: 'Etambutol' },
      { key: 'E', text: 'Streptomisin' }
    ],
    correctAnswer: 'D',
    explanation: 'Etambutol (Ethambutol) memiliki efek samping karakteristik yaitu Neuritis Retrobulbar Optik yang bermanifestasi sebagai penurunan tajam penglihatan, skotoma sentral, dan hilangnya diskriminasi warna merah-hijau. Bila timbul keluhan ini, etambutol harus segera dihentikan.',
    clinicalReference: 'Pedoman Penanggulangan Tuberkulosis Kemenkes RI & Farmakologi FKUI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-700',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Pasien pasca operasi katup jantung mendapat terapi antikoagulan oral Warfarin. TTK di ruang konseling obat mengedukasi pasien agar tidak mengonsumsi sayuran hijau (bayam, brokoli, kangkung) dalam jumlah berlebihan dan berfluktuasi.',
    question: 'Kandungan vitamin apakah dalam sayuran hijau yang bekerja sebagai antagonis fisiologis terhadap efek warfarin?',
    options: [
      { key: 'A', text: 'Vitamin A' },
      { key: 'B', text: 'Vitamin C' },
      { key: 'C', text: 'Vitamin D' },
      { key: 'D', text: 'Vitamin E' },
      { key: 'E', text: 'Vitamin K' }
    ],
    correctAnswer: 'E',
    explanation: 'Warfarin bekerja dengan menghambat enzim Vitamin K Epoxide Reductase (VKOR), mencegah aktivasi faktor pembekuan II, VII, IX, dan X. Konsumsi sayuran hijau yang kaya Vitamin K akan mengantagonis kerja warfarin dan menurunkan nilai INR, meningkatkan risiko pembentukan trombus/stroke iskemik.',
    clinicalReference: 'Guideline CHEST Antithrombotic Therapy & Konseling Obat Vokasi',
    difficulty: 'Mudah'
  },
  {
    id: 'q-701',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien datang ke apotek mengeluhkan diare akut yang sudah dialaminya selama 2 hari setelah makan di warung makan pinggir jalan. TTK menyerahkan tablet Attapulgit sebagai obat bebas.',
    question: 'Bagaimanakah mekanisme kerja zat aktif Attapulgit dalam meredakan diare?',
    options: [
      { key: 'A', text: 'Menghambat motilitas peristaltik otot polos usus' },
      { key: 'B', text: 'Menyerap racun, enterotoksin, dan gas di saluran cerna (adsorben)' },
      { key: 'C', text: 'Menurunkan sekresi asam klorida lambung' },
      { key: 'D', text: 'Membunuh bakteri patogen di kolon' },
      { key: 'E', text: 'Meningkatkan populasi mikroflora Lactobacillus' }
    ],
    correctAnswer: 'B',
    explanation: 'Attapulgit bekerja secara fisika sebagai adsorben yang mengadsorpsi cairan berlebih, toksin bakteri, dan gas penyebab kembung pada lumen saluran cerna serta melindungi mukosa usus dari iritasi.',
    clinicalReference: 'MIMS Indonesia & Farmakologi Swamedikasi Saluran Cerna',
    difficulty: 'Mudah'
  },
  {
    id: 'q-702',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien mengeluh buang air besar menjadi cair (diare ringan) setelah meminum suspensi antasida kombinasi untuk keluhan maag. Pasien diketahui sensitif terhadap salah satu komponen antasida yang bersifat laksatif osmotik.',
    question: 'Zat aktif komponen antasida manakah yang menimbulkan efek laksatif tersebut?',
    options: [
      { key: 'A', text: 'Aluminium Hidroksida' },
      { key: 'B', text: 'Magnesium Hidroksida' },
      { key: 'C', text: 'Kalsium Karbonat' },
      { key: 'D', text: 'Simetikon' },
      { key: 'E', text: 'Natrium Bikarbonat' }
    ],
    correctAnswer: 'B',
    explanation: 'Magnesium Hidroksida memiliki efek samping laksatif (pencahar osmotik garam) karena ion magnesium menarik air ke dalam lumen usus. Sebaliknya, Aluminium Hidroksida memiliki efek samping konstipasi (sembelit). Oleh karena itu keduanya dikombinasikan dalam antasida generik untuk meniadakan efek samping satu sama lain.',
    clinicalReference: 'Farmakope Indonesia & Farmakologi Terapi UI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-703',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Seorang pelanggan apotek membeli obat semprot/tetes hidung Dekongestan Oksimetazolin HCl 0,05% untuk mengatasi hidung tersumbat berat akibat rinitis akut. TTK menyampaikan aturan pakai dan batas maksimal pemakaian tidak boleh lebih dari 3-5 hari berturut-turut.',
    question: 'Efek samping spesifik apakah yang dapat terjadi jika Oksimetazolin topikal digunakan lebih dari 5 hari?',
    options: [
      { key: 'A', text: 'Rhinitis medicamentosa (kongesti balik / rebound vasodilation)' },
      { key: 'B', text: 'Hilangnya indra pendengaran permanen' },
      { key: 'C', text: 'Pendarahan lambung masif' },
      { key: 'D', text: 'Karies gigi akut' },
      { key: 'E', text: 'Bronkospasme asma' }
    ],
    correctAnswer: 'A',
    explanation: 'Penggunaan dekongestan topikal agonis alfa-adrenergik (seperti Oksimetazolin atau Xilometazolin) lebih dari 3-5 hari dapat menimbulkan fenomena takifilaksis berupa Rhinitis Medicamentosa (rebound congestion / hidung kembali tersumbat parah akibat vasodilatasi kompensasi).',
    clinicalReference: 'Buku Saku Swamedikasi IAI & Pedoman THT-KL',
    difficulty: 'Mudah'
  },
  {
    id: 'q-704',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Seorang remaja datang ke apotek mencari sampo antiketombe medis untuk mengatasi kulit kepala yang sangat gatal, bersisik tebal, dan dermatitis seboroik yang tidak mempan dengan sampo biasa. TTK merekomendasikan sampo yang mengandung zat aktif sitostatik/antifungal spesifik.',
    question: 'Zat aktif swamedikasi apakah yang terkandung dalam sampo antiketombe medis tersebut?',
    options: [
      { key: 'A', text: 'Selenium Sulfida (Selenium Sulfide 1% - 2,5%)' },
      { key: 'B', text: 'Natrium Lauril Sulfat' },
      { key: 'C', text: 'Natrium Benzoat' },
      { key: 'D', text: 'Kalsium Karbonat' },
      { key: 'E', text: 'Triklosan' }
    ],
    correctAnswer: 'A',
    explanation: 'Selenium Sulfida (Selenium Sulfide) adalah zat aktif antiketombe dan antiseboroik yang bekerja menghambat proliferasi sel epidermis kulit kepala dan memiliki aktivitas antijamur terhadap Malassezia furfur / Pityrosporum ovale penyebab ketombe membandel.',
    clinicalReference: 'British National Formulary & Pedoman Swamedikasi Farmasi',
    difficulty: 'Mudah'
  },
  {
    id: 'q-705',
    domainId: 'klinis',
    targetExam: 'uktvk',
    vignette: 'Penyakit jantung koroner ditandai dengan proses penumpukan kolesterol, lemak, dan kalsium yang membentuk plak ateroma pada lapisan intima pembuluh darah arteri koroner, menyebabkan penyempitan lumen dan iskemia miokard.',
    question: 'Apakah istilah medis patologis dari proses penimbunan plak lemak tersebut?',
    options: [
      { key: 'A', text: 'Aterosklerosis' },
      { key: 'B', text: 'Agranulositosis' },
      { key: 'C', text: 'Miokarditis' },
      { key: 'D', text: 'Fleboflebitis' },
      { key: 'E', text: 'Osteoartritis' }
    ],
    correctAnswer: 'A',
    explanation: 'Aterosklerosis (Atherosclerosis) adalah kondisi pengerasan dan penyempitan arteri akibat akumulasi plak kolesterol LDL teroksidasi dan jaringan fibrosa di dinding pembuluh darah.',
    clinicalReference: 'Buku Ajar Patofisiologi Robbins & Pedoman PERKI Jantung Koroner',
    difficulty: 'Mudah'
  },
  {
    id: 'q-706',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'TTK di ruang rawat inap anak menyiapkan selang makan khusus yang dimasukkan melalui hidung melewati faring dan esofagus hingga ke dalam lambung pasien anak yang tidak mampu menelan makanan secara oral.',
    question: 'Apakah nama alat kesehatan selang makan tersebut?',
    options: [
      { key: 'A', text: 'Nasogastric Tube (NGT)' },
      { key: 'B', text: 'Endotracheal Tube (ETT)' },
      { key: 'C', text: 'Nasal Cannula' },
      { key: 'D', text: 'Tracheostomy tube' },
      { key: 'E', text: 'Suction catheter' }
    ],
    correctAnswer: 'A',
    explanation: 'Nasogastric Tube (NGT) adalah selang nutrisi/aspirasi yang dipasang dari rongga hidung menuju lambung untuk pemberian makanan cair atau dekompresi cairan lambung.',
    clinicalReference: 'Standar Prosedur Operasional Keperawatan & Farmasi RS',
    difficulty: 'Mudah'
  },
  {
    id: 'q-707',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Dokter bedah meminta TTK menyiapkan benang jahit sintetis absorbable yang terbuat dari kopolimer asam glikolat dan asam laktat (Polyglactin 910) berkekuatan regang tinggi untuk penjahitan fascia abdomen.',
    question: 'Apakah nama dagang generik alat kesehatan benang bedah tersebut?',
    options: [
      { key: 'A', text: 'Vicryl (Polyglactin 910)' },
      { key: 'B', text: 'Silk suture' },
      { key: 'C', text: 'Plain catgut' },
      { key: 'D', text: 'Ethilon' },
      { key: 'E', text: 'Chromic catgut' }
    ],
    correctAnswer: 'A',
    explanation: 'Vicryl adalah benang jahit bedah sintetis teranyam yang dapat diserap (absorbable synthetic braided suture) terbuat dari kopolimer Polyglactin 910, diserap melalui hidrolisis dalam waktu 56-70 hari dengan reaksi jaringan minimal.',
    clinicalReference: 'Farmakope Indonesia Edisi VI & Katalog Alkes Bedah Kemenkes',
    difficulty: 'Mudah'
  },
  {
    id: 'q-708',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Seorang perawat ruang ganti balut luka meminta gunting khusus yang memiliki rancangan bilah bawah mendatar tumpul berkancing bulat untuk memotong balutan perban dan plester tanpa melukai kulit pasien.',
    question: 'Apakah nama jenis gunting perban tersebut?',
    options: [
      { key: 'A', text: 'Bandage scissor (Gunting perban Lister)' },
      { key: 'B', text: 'Dissecting scissor' },
      { key: 'C', text: 'Iris scissor' },
      { key: 'D', text: 'Metzenbaum scissor' },
      { key: 'E', text: 'Episiotomy scissor' }
    ],
    correctAnswer: 'A',
    explanation: 'Bandage Scissor (dikenal sebagai gunting verban Lister) dirancang dengan ujung bilah bawah berpelat tumpul melengkung untuk menyelip di bawah perban dengan aman tanpa menusuk kulit.',
    clinicalReference: 'Katalog Alat Medis Standar RS & Materi Ujian APDFI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-709',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Pasien penderita asma bronkial menjalani uji pemeriksaan fungsi ventilasi paru untuk mengukur Forced Expiratory Volume in 1 second (FEV1) dan Forced Vital Capacity (FVC). TTK mendampingi dokter menyiapkan instrumen diagnostik tersebut.',
    question: 'Apakah nama instrumen medis pengukur kapasitas napas tersebut?',
    options: [
      { key: 'A', text: 'Spirometer' },
      { key: 'B', text: 'Nebulizer ultrasonik' },
      { key: 'C', text: 'Ambu bag' },
      { key: 'D', text: 'Pulse oximeter' },
      { key: 'E', text: 'Peak flow meter manual' }
    ],
    correctAnswer: 'A',
    explanation: 'Spirometer adalah alat diagnostik fisiologi napas yang mencatat volume dan laju aliran udara saat pasien bernapas maksimal untuk menilai derajat obstruksi atau restriksi paru.',
    clinicalReference: 'Pedoman Diagnosis Asma GINA & PDPI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-710',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Seorang pasien datang ke klinik apotek untuk melakukan pemeriksaan glukosa darah sewaktu (GDS) rutin secara mandiri. TTK menyiapkan alat penusuk otomatis berpegas yang dipasangi jarum lancet steril untuk mengambil sampel darah kapiler di ujung jari.',
    question: 'Apakah nama alat penusuk jarum lancet tersebut?',
    options: [
      { key: 'A', text: 'Lancing device' },
      { key: 'B', text: 'Tourniquet' },
      { key: 'C', text: 'Spuit 1 mL' },
      { key: 'D', text: 'Wing needle' },
      { key: 'E', text: 'Vacutainer holder' }
    ],
    correctAnswer: 'A',
    explanation: 'Lancing device (autoclix / pen lancet) adalah alat mekanis berpegas yang memegang jarum lancet steril dan menusukkan jarum dengan kedalaman terukur ke kapiler jari secara cepat dan minim nyeri.',
    clinicalReference: 'Pedoman Pelayanan Laboratorium Sederhana Apotek Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-711',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Pasien datang ke apotek membawa resep yang bertuliskan obat salinan:\nIter 2 kali\nR/ Sizoril (Klozapin) 25 mg tab No. XX\nS. 2 dd 1 tab\n------- det. orig.\nPasien hanya memiliki uang cukup untuk menebus setengah dari resep ulangannya saat ini (10 tablet) dan sisanya akan ditebus minggu depan.',
    question: 'Tanda salinan resep apakah yang wajib dituliskan oleh TTK pada copy resep yang baru diserahkan kepada pasien?',
    options: [
      { key: 'A', text: 'det. orig. + det. iter 1x' },
      { key: 'B', text: 'did (da in dimidio) pada iter 1 kali' },
      { key: 'C', text: 'det. iter 2 kali' },
      { key: 'D', text: 'ne detetur' },
      { key: 'E', text: 'det. in totum' }
    ],
    correctAnswer: 'B',
    explanation: 'Resep dengan keterangan "Iter 2 kali" berarti obat dapat diambil sebanyak 3 kali (1 kali resep asli + 2 kali pengulangan = total 3 x 20 = 60 tab). Tanda "det. orig." menunjukkan resep asli telah diambil (20 tab). Saat pasien mengambil 10 tab dari iterasi pertama (dari total 20 tab), tanda pada iterasi pertama adalah "did" (da in dimidio = berikan setengahnya) atau "det. 10".',
    clinicalReference: 'Ilmu Resep (Syamsuni) & Kaidah Penulisan Salinan Resep Farmasi',
    difficulty: 'Sedang'
  },
  {
    id: 'q-712',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Pasien datang ke apotek mengeluh sesak napas dan mengi karena riwayat asma yang kambuh. Pasien meminta obat tablet Salbutamol tanpa resep dokter. Berdasarkan Keputusan Menteri Kesehatan No. 347/MenKes/SK/VII/1990 tentang Daftar Obat Wajib Apotek No. 1 (DOWA 1), Salbutamol dapat diserahkan oleh apoteker/TTK dengan batasan jumlah tertentu.',
    question: 'Berapakah jumlah maksimal tablet Salbutamol yang dapat diserahkan pada pasien tersebut?',
    options: [
      { key: 'A', text: 'Maksimal 5 tablet' },
      { key: 'B', text: 'Maksimal 10 tablet' },
      { key: 'C', text: 'Maksimal 15 tablet' },
      { key: 'D', text: 'Maksimal 20 tablet' },
      { key: 'E', text: 'Maksimal 30 tablet' }
    ],
    correctAnswer: 'D',
    explanation: 'Berdasarkan Lampiran Kepmenkes No. 347/MenKes/SK/VII/1990 (DOWA No. 1), obat Salbutamol sediaan oral tablet untuk asma dapat diserahkan tanpa resep dokter dengan jumlah MAKSIMAL 20 TABLET.',
    clinicalReference: 'Kepmenkes No. 347/MenKes/SK/VII/1990 tentang DOWA No. 1',
    difficulty: 'Mudah'
  },
  {
    id: 'q-713',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    vignette: 'Pasien penderita hipertensi membawa resep dokter:\nR/ Captopril 25 mg tab No. XXX\nS. 3 dd 1 tab\nDi apotek sediaan Captopril 25 mg sedang kosong, dan yang tersedia adalah Captopril dengan kekuatan 12,5 mg. Apoteker menyetujui penggantian kekuatan sediaan dengan penyesuaian aturan pakai.',
    question: 'Berapa jumlah tablet Captopril 12,5 mg yang harus diserahkan kepada pasien?',
    options: [
      { key: 'A', text: '15 tablet' },
      { key: 'B', text: '30 tablet' },
      { key: 'C', text: '45 tablet' },
      { key: 'D', text: '60 tablet' },
      { key: 'E', text: '90 tablet' }
    ],
    correctAnswer: 'D',
    explanation: 'Kebutuhan total zat aktif = 25 mg x 30 tablet = 750 mg. Kekuatan tablet pengganti = 12,5 mg. Jumlah tablet 12,5 mg yang diserahkan = 750 mg / 12,5 mg = 60 tablet (dengan aturan minum 3 kali sehari 2 tablet).',
    clinicalReference: 'Standar Pelayanan Kefarmasian di Apotek Permenkes No. 73 Tahun 2016',
    difficulty: 'Mudah'
  }
];
