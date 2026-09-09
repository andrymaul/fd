import { ExamQuestion } from '../competencyExamData';

/**
 * Bank Soal Kasus Vignette CBT Bagian 7 (Nomor q-336 s/d q-385)
 * Rekonstruksi Ujian Nasional Resmi UKMPPAI (Apoteker) & UKTVK (Vokasi TTK)
 * 50 Soal Kasus Formulasi Industri, Kinetika Stabilitas, dan Farmasi Bahan Alam / Fitofarmaka
 */
export const CBT_EXPANSION_PART_7: ExamQuestion[] = [
  // =========================================================================
  // ⚗️ FORMULASI SEDIAAN CAIR, SEMISOLID, RHEOLOGI & STABILITAS
  // =========================================================================
  {
    id: 'q-336',
    domainId: 'teknologi',
    targetExam: 'all',
    vignette: 'Apoteker R&D memformulasi suspensi rekonstitusi Amoksisilin 125 mg/5 mL. Berdasarkan Hukum Stokes, laju pengendapan partikel berbanding lurus dengan kuadrat diameter partikel dan perbedaan massa jenis, serta berbanding terbalik dengan viskositas pembawa.',
    question: 'Upaya formulasi manakah yang paling tepat dilakukan untuk memperlambat laju sedimentasi partikel suspensi agar tidak cepat mengendap?',
    options: [
      { key: 'A', text: 'Memperkecil ukuran partikel zat aktif (mikronisasi) dan meningkatkan viskositas pembawa dengan suspending agent' },
      { key: 'B', text: 'Memperbesar ukuran partikel zat aktif agar cepat mengendap dan mudah terbasahi' },
      { key: 'C', text: 'Menurunkan viskositas pembawa hingga mendekati air murni' },
      { key: 'D', text: 'Menaikkan suhu penyimpanan suspensi hingga 50°C' },
      { key: 'E', text: 'Menghilangkan bahan pembasah (wetting agent) dari formula' },
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Hukum Stokes: V = [d^2 x (rho_s - rho_o) x g] / (18 x eta), di mana V = kecepatan sedimentasi, d = diameter partikel, dan eta = viskositas cairan pembawa. Untuk memperlambat laju sedimentasi (V kecil), formulator dapat: (1) MEMPERKECIL DIAMETER PARTIKEL (d) melalui proses mikronisasi/penggilingan; dan (2) MENINGKATKAN VISKOSITAS MEDIUM DISPERSI (eta) dengan menambahkan suspending agent (seperti Na-CMC, Xanthan Gum, PGA).',
    clinicalReference: 'Martin Farmasi Fisika dan Ilmu Farmasetika & Ansel Pengantar Bentuk Sediaan Farmasi',
    difficulty: 'Mudah'
  },
  {
    id: 'q-337',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Dalam evaluasi fisik sediaan suspensi Antasida, apoteker membandingkan dua tipe suspensi: Suspensi A membentuk endapan yang cepat namun sangat mudah terdispersi kembali (re-dispersible) hanya dengan pengocokan ringan. Sedangkan Suspensi B mengendap sangat lambat namun setelah beberapa minggu membentuk endapan padat keras di dasar botol yang tidak dapat terdispersi kembali (caking).',
    question: 'Apakah tipe sistem suspensi pada Suspensi A dan Suspensi B tersebut?',
    options: [
      { key: 'A', text: 'Suspensi A adalah Sistem Terflokulasi; Suspensi B adalah Sistem Deflokulasi' },
      { key: 'B', text: 'Suspensi A adalah Sistem Deflokulasi; Suspensi B adalah Sistem Terflokulasi' },
      { key: 'C', text: 'Kedua suspensi adalah emulsi w/o' },
      { key: 'D', text: 'Suspensi A adalah larutan sejati; Suspensi B adalah koloid liofil' },
      { key: 'E', text: 'Suspensi A adalah pasta; Suspensi B adalah magma' }
    ],
    correctAnswer: 'A',
    explanation: 'Dalam sistem suspensi farmasi: (1) SISTEM TERFLOKULASI (Suspensi A): Partikel membentuk gumpalan longgar (flokul) yang berikatan lemah, laju sedimentasi cepat, supernatan jernih, namun TIDAK MEMBENTUK CAKE DAN SANGAT MUDAH DIDISPERSチェKAN KEMBALI dengan sedikit kocokan. (2) SISTEM DEFLOKULASI (Suspensi B): Partikel terpisah bebas satu sama lain, laju pengendapan lambat, supernatan keruh, namun saat mengendap partikel mengisi rongga di bawah membentuk agregat kompak ireversibel yang keras (CAKE) dan tidak dapat diredispersikan kembali.',
    clinicalReference: 'Martin Farmasi Fisika & Lachman Teori dan Praktik Farmasi Industri',
    difficulty: 'Sedang'
  },
  {
    id: 'q-338',
    domainId: 'teknologi',
    targetExam: 'all',
    vignette: 'Sebuah emulsi minyak ikan tipe m/a yang disimpan di gudang farmasi menunjukkan pemisahan lapisan: globul-globul minyak terkonsentrasi berkumpul di permukaan atas membentuk lapisan pekat, namun lapisan tersebut dapat menyatu homogen kembali setelah botol dikocok kuat.',
    question: 'Apakah nama fenomena ketidakstabilan fisik emulsi yang bersifat reversibel tersebut?',
    options: [
      { key: 'A', text: 'Creaming' },
      { key: 'B', text: 'Cracking (Breaking)' },
      { key: 'C', text: 'Inversi Fase' },
      { key: 'D', text: 'Koalesensi' },
      { key: 'E', text: 'Flokulasi ireversibel' }
    ],
    correctAnswer: 'A',
    explanation: 'CREAMING adalah pemisahan fisik emulsi di mana globul-globul fase terdispersi terkonsentrasi bergerak ke permukaan atas (upward creaming pada emulsi m/a karena massa jenis minyak lebih ringan daripada air) atau ke dasar wadah (sedimentation pada emulsi a/m). Ciri khas creaming adalah BERSIFAT REVERSIBEL (dapat didispersikan homogen kembali dengan pengocokan). Sebaliknya, CRACKING / BREAKING adalah fenomena ireversibel akibat rusaknya lapisan film emulsifier antarmuka di mana globul menyatu permanen dan tidak dapat diperbaiki dengan pengocokan.',
    clinicalReference: 'Ansel Bentuk Sediaan Farmasi & Lieberman Pharmaceutical Dosage Forms: Disperse Systems',
    difficulty: 'Mudah'
  },
  {
    id: 'q-339',
    domainId: 'teknologi',
    targetExam: 'all',
    vignette: 'Apoteker R&D menguji sifat aliran (rheologi) dari sediaan gel Na-diklofenak 1% menggunakan Viskometer Brookfield. Hasil pengukuran menunjukkan bahwa semakin tinggi kecepatan geser (shear rate / pengadukan) yang diberikan, viskositas gel menjadi semakin menurun encer, dan setelah pengadukan dihentikan viskositas membutuhkan waktu pemulihan tertentu untuk kembali mengental seperti semula.',
    question: 'Apakah tipe aliran rheologi non-Newtonian yang dimiliki oleh gel tersebut?',
    options: [
      { key: 'A', text: 'Tiksotropik (dengan sifat dasar Pseudoplastis)' },
      { key: 'B', text: 'Aliran Newtonian murni' },
      { key: 'C', text: 'Dilatan (shear-thickening)' },
      { key: 'D', text: 'Plastis Bingham tanpa histeresis' },
      { key: 'E', text: 'Rheopeksi' }
    ],
    correctAnswer: 'A',
    explanation: 'Aliran TIKSOTROPIK (Thixotropy) adalah fenomena rheologi yang ideal untuk sediaan farmasi semisolida dan suspensi. Gel memiliki sifat PSEUDOPLASTIS (shear-thinning: viskositas menurun saat diberikan gaya geser/dikocok/dioleskan sehingga mudah diratakan pada kulit), dan memiliki sifat TIKSOTROPIK yaitu pemulihan struktur gel memerlukan waktu (time-dependent hysteresis loop) sehingga zat aktif tidak langsung mengalir menetes saat dioleskan.',
    clinicalReference: 'Sinko: Martin Farmasi Fisika dan Ilmu Farmasetika Edisi 5',
    difficulty: 'Sedang'
  },
  {
    id: 'q-340',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Apoteker memformulasi 100 gram emulsi tipe m/a yang membutuhkan Nilai HLB butuh (RHLB) sebesar 12. Emulsifier yang digunakan adalah kombinasi Tween 80 (HLB = 15,0) dan Span 80 (HLB = 4,3) dengan jumlah total emulgator 5 gram.',
    question: 'Berapakah jumlah Tween 80 dan Span 80 yang harus ditimbang secara berturut-turut untuk mencapai HLB butuh tersebut?',
    options: [
      { key: 'A', text: 'Tween 80 = 3,60 g ; Span 80 = 1,40 g' },
      { key: 'B', text: 'Tween 80 = 2,50 g ; Span 80 = 2,50 g' },
      { key: 'C', text: 'Tween 80 = 1,40 g ; Span 80 = 3,60 g' },
      { key: 'D', text: 'Tween 80 = 4,20 g ; Span 80 = 0,80 g' },
      { key: 'E', text: 'Tween 80 = 3,00 g ; Span 80 = 2,00 g' }
    ],
    correctAnswer: 'A',
    explanation: 'Metode Aligasi HLB: Selisih Tween 80 (15,0) terhadap target (12,0) = 15,0 - 12,0 = 3,0 bagian Span 80. Selisih target (12,0) terhadap Span 80 (4,3) = 12,0 - 4,3 = 7,7 bagian Tween 80. Total bagian = 7,7 + 3,0 = 10,7 bagian. Fraksi Tween 80 = (7,7 / 10,7) x 5 gram = 3,598 gram (~3,60 gram). Fraksi Span 80 = (3,0 / 10,7) x 5 gram = 1,402 gram (~1,40 gram).',
    clinicalReference: 'Kalkulasi Farmasetik Howard C. Ansel & Remington The Science and Practice of Pharmacy',
    difficulty: 'Sedang'
  },
  {
    id: 'q-341',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Sebuah larutan injeksi antibiotik mengalami degradasi mengikuti kinetika reaksi orde satu dengan konstanta laju eliminasi degradasi k = 0,0231 hari^-1 pada suhu kamar 25°C. Konsentrasi awal obat adalah 100 mg/mL.',
    question: 'Berapakah perkiraan umur simpan (shelf-life / t90) sediaan injeksi tersebut sebelum kadaluwarsa (konsentrasi tersisa 90%)?',
    options: [
      { key: 'A', text: '4,5 hari' },
      { key: 'B', text: '30 hari' },
      { key: 'C', text: '15 hari' },
      { key: 'D', text: '60 hari' },
      { key: 'E', text: '10 hari' }
    ],
    correctAnswer: 'A',
    explanation: 'Rumus Umur Simpan Orde Satu (t90): t90 = -ln(0,90) / k = 0,10536 / k. Dengan k = 0,0231 hari^-1: t90 = 0,10536 / 0,0231 = 4,56 hari (~4,5 hari). (Sebagai perbandingan, waktu paruh t1/2 orde satu = 0,693 / k = 0,693 / 0,0231 = 30 hari).',
    clinicalReference: 'Martin Farmasi Fisika & Connors Chemical Stability of Pharmaceuticals',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-342',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Berdasarkan pedoman uji stabilitas ASEAN Guideline on Stability Study of Drug Product, Indonesia dan negara-negara Asia Tenggara lainnya masuk dalam Zona Iklim IVb (iklim panas dan sangat lembap).',
    question: 'Berapakah kondisi suhu dan kelembapan relatif (% RH) standar untuk pengujian stabilitas jangka panjang (long-term real-time stability) dan uji dipercepat (accelerated stability) pada Zona IVb?',
    options: [
      { key: 'A', text: 'Jangka panjang: 30°C ± 2°C / 75% ± 5% RH ; Uji Dipercepat: 40°C ± 2°C / 75% ± 5% RH' },
      { key: 'B', text: 'Jangka panjang: 25°C ± 2°C / 60% ± 5% RH ; Uji Dipercepat: 40°C ± 2°C / 75% ± 5% RH' },
      { key: 'C', text: 'Jangka panjang: 30°C ± 2°C / 65% ± 5% RH ; Uji Dipercepat: 45°C ± 2°C / 75% ± 5% RH' },
      { key: 'D', text: 'Jangka panjang: 20°C ± 2°C / 50% ± 5% RH ; Uji Dipercepat: 35°C ± 2°C / 60% ± 5% RH' },
      { key: 'E', text: 'Jangka panjang: 40°C ± 2°C / 75% ± 5% RH ; Uji Dipercepat: 50°C ± 2°C / 85% ± 5% RH' }
    ],
    correctAnswer: 'A',
    explanation: 'Sesuai Pedoman Uji Stabilitas Produk Obat BPOM RI dan ASEAN Guideline (Zone IVb: Hot and Very Humid): Kondisi penyimpanan UJI STABILITAS JANGKA PANJANG (Real-Time Long-Term) adalah 30°C ± 2°C dengan kelembapan relatif 75% ± 5% RH. Sedangkan untuk UJI STABILITAS DIPERCEPAT (Accelerated Testing) adalah 40°C ± 2°C dengan kelembapan relatif 75% ± 5% RH selama minimal 6 bulan.',
    clinicalReference: 'Petunjuk Operasional Penerapan Pedoman Uji Stabilitas Obat BPOM RI & ASEAN Stability Guidelines',
    difficulty: 'Sedang'
  },

  // =========================================================================
  // 🌿 FARMASI BAHAN ALAM, SENYAWA MARKER & STANDARDISASI
  // =========================================================================
  {
    id: 'q-343',
    domainId: 'bahan_alam',
    targetExam: 'all',
    vignette: 'Apoteker bagian R&D industri obat tradisional melakukan ekstraksi herba Sambiloto (Andrographis paniculata) untuk menghasilkan ekstrak terstandar yang berkhasiat imunomodulator dan antiinflamasi.',
    question: 'Senyawa marker aktif spesifik golongan lakton diterpen apakah yang dijadikan parameter penetapan kadar pada ekstrak herba Sambiloto menurut Farmakope Herbal Indonesia?',
    options: [
      { key: 'A', text: 'Andrografolid' },
      { key: 'B', text: 'Kurkuminoid' },
      { key: 'C', text: 'Kuersetin' },
      { key: 'D', text: 'Sinensetin' },
      { key: 'E', text: 'Asiatikosida' }
    ],
    correctAnswer: 'A',
    explanation: 'Senyawa marker aktif utama dari herba Sambiloto (Andrographis paniculata (Burm.f.) Nees) adalah ANDROGRAFOLID, suatu senyawa lakton diterpenoid bisiklik yang memiliki rasa sangat pahit dan bertanggung jawab atas aktivitas farmakologis imunomodulator, hepatoprotektor, dan antiinflamasi. Berdasarkan Farmakope Herbal Indonesia (FHI), ekstrak kental herba sambiloto dipersyaratkan mengandung kadar andrografolid tidak kurang dari kadar standar yang ditetapkan (lazimnya >= 9,20%).',
    clinicalReference: 'Farmakope Herbal Indonesia (FHI) Edisi II Kementerian Kesehatan RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-344',
    domainId: 'bahan_alam',
    targetExam: 'all',
    vignette: 'Dalam standardisasi ekstrak rimpang Temulawak (Curcuma xanthorrhiza Roxb.) sebagai bahan baku sediaan fitofarmaka hepatoprotektor, apoteker menetapkan kadar senyawa penanda pembeda.',
    question: 'Senyawa marker spesifik golongan seskuiterpen fenolik manakah yang hanya ditemukan pada Temulawak dan TIDAK DITEMUKAN pada Kunyit (Curcuma longa)?',
    options: [
      { key: 'A', text: 'Xanthorrhizol' },
      { key: 'B', text: 'Kurkumin' },
      { key: 'C', text: 'Desmetoksikurkumin' },
      { key: 'D', text: 'Bisdesmetoksikurkumin' },
      { key: 'E', text: 'Turmeron' }
    ],
    correctAnswer: 'A',
    explanation: 'XANTHORRHIZOL adalah senyawa marker pembeda spesifik (unique chemical marker) dari rimpang Temulawak (Curcuma xanthorrhiza) yang tergolong dalam seskuiterpen bisabolan. Kurkuminoid (kurkumin dan desmetoksikurkumin) terdapat pada temulawak maupun kunyit, tetapi Xanthorrhizol HANYA ADA PADA TEMULAWAK dan tidak dijumpai pada kunyit biasa, sehingga xanthorrhizol digunakan sebagai biomarker autentikasi untuk membedakan temulawak dari pemalsuan kunyit.',
    clinicalReference: 'Farmakope Herbal Indonesia & Monografi Ekstrak Tumbuhan Obat Indonesia Badan POM',
    difficulty: 'Sedang'
  },
  {
    id: 'q-345',
    domainId: 'bahan_alam',
    targetExam: 'ukmppai',
    vignette: 'Sebuah industri fitofarmaka mengembangkan kapsul ekstrak daun Kumis Kucing (Orthosiphon stamineus) sebagai diuretik dan peluruh batu ginjal. Apoteker QC melakukan penetapan kadar senyawa marker menggunakan Kromatografi Cair Kinerja Tinggi (KCKT/HPLC).',
    question: 'Senyawa marker aktif golongan flavon polimetoksigliserida manakah yang dianalisis pada daun Kumis Kucing tersebut?',
    options: [
      { key: 'A', text: 'Sinensetin' },
      { key: 'B', text: 'Rutin' },
      { key: 'C', text: 'Hesperidin' },
      { key: 'D', text: 'Antosianin' },
      { key: 'E', text: 'Galanin' }
    ],
    correctAnswer: 'A',
    explanation: 'Senyawa marker resmi untuk daun Kumis Kucing (Orthosiphon stamineus Benth. / Clerodendranthus spicatus) menurut Farmakope Herbal Indonesia adalah SINENSETIN, yaitu senyawa flavonoid lipofilik golongan polimetoksiflavon (3\',4\',5,6,7-pentamethoksiflavon). Sinensetin memiliki aktivitas diuretik, menghambat agregasi kristal kalsium oksalat, dan menghambat enzim prostaglandin E2.',
    clinicalReference: 'Farmakope Herbal Indonesia Edisi II & Materia Medika Indonesia',
    difficulty: 'Sedang'
  },
  {
    id: 'q-346',
    domainId: 'bahan_alam',
    targetExam: 'all',
    vignette: 'Apoteker QC industri obat herbal melakukan uji parameter non-spesifik terhadap simplisia daun Jambu Biji. Dari penimbangan serbuk simplisia sebelum dan sesudah dipanaskan pada tanur suhu 600°C, didapatkan abu sisa yang kemudian dilarutkan dalam Asam Klorida encer p.a.',
    question: 'Uji parameter apakah yang mengukur residu anorganik yang tidak larut dalam asam klorida encer tersebut, serta apakah arti biologis dari parameter tersebut?',
    options: [
      { key: 'A', text: 'Kadar Abu Tidak Larut Asam, untuk mengukur tingkat cemaran silika, pasir, dan tanah pada simplisia' },
      { key: 'B', text: 'Kadar Abu Total, untuk mengukur seluruh kandungan organik simplisia' },
      { key: 'C', text: 'Susut Pengeringan, untuk mengukur seluruh senyawa volatil' },
      { key: 'D', text: 'Kadar Air Distilasi, untuk menghitung jumlah air bebas' },
      { key: 'E', text: 'Kadar Sari Larut Etanol, untuk mengetahui kelarutan flavonoid' }
    ],
    correctAnswer: 'A',
    explanation: 'KADAR ABU TIDAK LARUT ASAM (Acid-Insoluble Ash) adalah parameter non-spesifik standar Farmakope Herbal yang bertujuan untuk mengevaluasi TINGKAT CEMARAN SILIKA, PASIR, DEBU, DAN TANAH (unsur mineral logam tidak larut asam) yang mengotori simplisia selama proses panen, pencucian, atau pengeringan. Kadar abu total menunjukkan kandungan mineral internal dan eksternal, sedangkan bagian yang tidak larut asam khusus mendeteksi pengotor silikat tanah.',
    clinicalReference: 'Farmakope Herbal Indonesia & Parameter Standar Umum Ekstrak Tumbuhan Obat BPOM RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-347',
    domainId: 'bahan_alam',
    targetExam: 'all',
    vignette: 'Dalam pembuatan ekstrak daun Sirih Merah, industri farmasi membandingkan metode ekstraksi dingin dan panas. Apoteker memilih metode ekstraksi dingin maserasi kinetik (dengan pengadukan kontinu) karena daun sirih merah mengandung senyawa minyak atsiri fenolik yang mudah menguap dan rusak oleh pemanasan tinggi.',
    question: 'Apakah keuntungan utama metode maserasi dibandingkan metode perkolasi atau sokletasi?',
    options: [
      { key: 'A', text: 'Peralatan sederhana, biaya operasional murah, dan aman untuk senyawa yang termolabil (tidak tahan panas)' },
      { key: 'B', text: 'Penyarian selalu sempurna 100% tanpa sisa zat aktif' },
      { key: 'C', text: 'Menggunakan pelarut dalam jumlah yang sangat sedikit' },
      { key: 'D', text: 'Waktu ekstraksi paling cepat hanya 5 menit' },
      { key: 'E', text: 'Langsung menghasilkan ekstrak kering tanpa perlu pemekatan' }
    ],
    correctAnswer: 'A',
    explanation: 'MASERASI adalah metode ekstraksi dingin dengan cara merendam serbuk simplisia dalam pelarut penyari pada suhu kamar. Keuntungan utamanya adalah PERALATAN DAN OPERASIONAL SANGAT SEDERHANA, BIAYA HEMAT, SERTA SANGAT COCOK UNTUK SENYAWA YANG TERMOLABIL (rusak oleh suhu panas tinggi seperti minyak atsiri dan glikosida tertentu). Kelemahannya adalah membutuhkan waktu perendaman relatif lama (3-5 hari) dan penyarian kurang tuntas dibandingkan perkolasi.',
    clinicalReference: 'Departemen Kesehatan RI: Parameter Standar Umum Ekstrak Tumbuhan Obat',
    difficulty: 'Mudah'
  },
  {
    id: 'q-348',
    domainId: 'bahan_alam',
    targetExam: 'ukmppai',
    vignette: 'Apoteker di industri jamu melakukan uji cemaran mikotoksin karsinogenik terhadap simplisia rimpang Jahe dan Temulawak yang telah disimpan selama 6 bulan di gudang simplisia dengan kelembapan tinggi.',
    question: 'Mikotoksin berbahaya apakah yang diproduksi oleh kapang Aspergillus flavus dan Aspergillus parasiticus yang dibatasi secara sangat ketat oleh BPOM RI (maksimal 20 ppb total)?',
    options: [
      { key: 'A', text: 'Aflatoksin (B1, B2, G1, G2)' },
      { key: 'B', text: 'Okratoksin A' },
      { key: 'C', text: 'Patulin' },
      { key: 'D', text: 'Fumonisin' },
      { key: 'E', text: 'Zearalenon' }
    ],
    correctAnswer: 'A',
    explanation: 'AFLATOKSIN (terdiri dari Aflatoksin B1, B2, G1, dan G2) adalah mikotoksin sangat toksik dan bersifat karsinogenik kuat (penyebab karsinoma hepatoseluler primer) yang dihasilkan oleh kapang Aspergillus flavus dan A. parasiticus yang mencemari kacang-kacangan, jagung, dan rimpang simplisia pada kondisi penyimpanan lembap. Peraturan BPOM No. 32 Tahun 2019 tentang Persyaratan Keamanan Obat Tradisional menetapkan batas cemaran Aflatoksin total (B1+B2+G1+G2) TIDAK LEBIH DARI 20 mcg/kg (ppb) dan Aflatoksin B1 tidak lebih dari 5 mcg/kg (ppb).',
    clinicalReference: 'Peraturan Badan POM No. 32 Tahun 2019 tentang Persyaratan Keamanan dan Mutu Obat Tradisional',
    difficulty: 'Mudah'
  },
  {
    id: 'q-349',
    domainId: 'bahan_alam',
    targetExam: 'all',
    vignette: 'Dalam pengujian kualitatif skrining fitokimia ekstrak kulit buah Manggis (Garcinia mangostana), apoteker menambahkan beberapa tetes larutan Besi(III) Klorida (FeCl3) 1% ke dalam tabung reaksi berisi filtrat ekstrak. Terbentuk warna biru kehitaman yang pekat.',
    question: 'Golongan metabolit sekunder polifenol apakah yang memberikan reaksi positif warna biru kehitaman atau hijau pekat dengan pereaksi FeCl3 tersebut?',
    options: [
      { key: 'A', text: 'Tanin dan senyawa polifenolat' },
      { key: 'B', text: 'Alkaloid nitrogen' },
      { key: 'C', text: 'Saponin steroid' },
      { key: 'D', text: 'Minyak atsiri terpenoid' },
      { key: 'E', text: 'Karbohidrat amilum' }
    ],
    correctAnswer: 'A',
    explanation: 'Pereaksi Besi(III) Klorida (FeCl3) adalah uji khas untuk mendeteksi gugus fenolik bebas, khususnya golongan TANIN dan senyawa POLIFENOL. Ion Fe3+ membentuk kompleks koordinasi berwarna dengan gugus hidroksil fenolik: Tanin terhidrolisis (gallotanin/ellagitanin) memberikan warna BIRU TUA KEHITAMAN, sedangkan tanin terkondensasi (katekin/proantosianidin) memberikan warna HIJAU KEHITAMAN.',
    clinicalReference: 'Harborne J.B. Metode Fitokimia & Penuntun Praktikum Fitokimia Bahan Alam',
    difficulty: 'Mudah'
  },
  {
    id: 'q-350',
    domainId: 'bahan_alam',
    targetExam: 'ukmppai',
    vignette: 'Apoteker R&D mengisolasi senyawa antioksidan likopen dari buah tomat dan kurkuminoid dari rimpang kunyit menggunakan metode Ekstraksi Fluida Superkritis (Supercritical Fluid Extraction / SFE).',
    question: 'Gas inert manakah yang paling umum digunakan sebagai fluida superkritis dalam industri farmasi karena tidak beracun, tidak mudah terbakar, ramah lingkungan, dan memiliki titik kritis yang mudah dicapai (Tc = 31,1°C dan Pc = 73,8 bar)?',
    options: [
      { key: 'A', text: 'Karbon Dioksida (CO2)' },
      { key: 'B', text: 'Nitrogen Cair (N2)' },
      { key: 'C', text: 'Argon (Ar)' },
      { key: 'D', text: 'Helium (He)' },
      { key: 'E', text: 'Metana (CH4)' }
    ],
    correctAnswer: 'A',
    explanation: 'KARBON DIOKSIDA (CO2) adalah gas pilihan utama dalam Supercritical Fluid Extraction (SFE) industri farmasi karena memiliki kondisi titik kritis yang ramah untuk senyawa termolabil (suhu kritis Tc = 31,1°C dan tekanan kritis Pc = 73,8 bar), bersifat non-toksik, tidak mudah terbakar (non-flammable), murah, murni, dan mudah dihilangkan sepenuhnya dari ekstrak cukup dengan menurunkan tekanan (menjadi gas kembali tanpa meninggalkan residu pelarut organik beracun).',
    clinicalReference: 'Sarker & Nahar: Chemistry for Pharmacy Students & Modern Extraction Techniques',
    difficulty: 'Sedang'
  },
  {
    id: 'q-351',
    domainId: 'bahan_alam',
    targetExam: 'all',
    vignette: 'Dalam identifikasi fitokimia senyawa golongan alkaloid dari ekstrak kulit batang Kina (Cinchona succirubra), analis menambahkan beberapa tetes Pereaksi Dragendorff.',
    question: 'Apakah hasil positif yang terbentuk pada pengujian alkaloid dengan pereaksi Dragendorff (Kalium Bismut Iodida)?',
    options: [
      { key: 'A', text: 'Endapan jingga kecokelatan sampai merah bata' },
      { key: 'B', text: 'Endapan putih kekuningan (krem)' },
      { key: 'C', text: 'Endapan cokelat kehitaman' },
      { key: 'D', text: 'Larutan berwarna hijau zamrud' },
      { key: 'E', text: 'Busa persisten setinggi 2 cm' }
    ],
    correctAnswer: 'A',
    explanation: 'Pereaksi DRAGENDORFF (Kalium Bismut Iodida) bereaksi dengan nitrogen tersier atau kuaterner pada struktur ALKALOID membentuk endapan amorf berwarna JINGGA KECOKELATAN HINGGA MERAH BATA (precipitate of potassium bismuth iodide alkaloid complex). Sebagai pembanding: Pereaksi MAYER (Kalium Merkuri Iodida) menghasilkan endapan PUTIH KEKUNINGAN (KREM), sedangkan Pereaksi WAGNER (Iodin dalam KI) menghasilkan endapan COKELAT TUA.',
    clinicalReference: 'Harborne J.B. Metode Fitokimia Penuntun Cara Modern Menganalisis Tumbuhan & Farmakope Herbal Indonesia',
    difficulty: 'Mudah'
  },
  {
    id: 'q-352',
    domainId: 'bahan_alam',
    targetExam: 'all',
    vignette: 'Dalam uji penapisan fitokimia serbuk simplisia daun Senna (Cassia senna) yang berkhasiat sebagai laksatif stimulan, analis melakukan Uji Borntrager dengan menambahkan larutan KOH encer ke dalam fase eter hasil hidrolisis asam.',
    question: 'Golongan senyawa metabolit sekunder apakah yang memberikan reaksi positif warna merah muda hingga merah intens pada lapisan air pada Uji Borntrager?',
    options: [
      { key: 'A', text: 'Antrakuinon (seperti Senosida dan Emodin)' },
      { key: 'B', text: 'Saponin triterpenoid' },
      { key: 'C', text: 'Minyak atsiri mono-terpen' },
      { key: 'D', text: 'Flavonoid kalkon' },
      { key: 'E', text: 'Kumarin lakton' }
    ],
    correctAnswer: 'A',
    explanation: 'Uji BORNTRAGER adalah reaksi identifikasi spesifik untuk senyawa golongan ANTRAKUINON (bebas atau aglikon). Aglikon antrakuinon diekstraksi dengan pelarut organik non-polar (eter/kloroform), kemudian dikocok dengan larutan basa (KOH, NaOH, atau Amonia). Terjadinya deprotonasi gugus hidroksi fenolik pada inti antrasena membentuk ion fenolat yang terdelokalisasi menghasilkan WARNA MERAH MUDA, MERAH INTENS, ATAU VIOLET pada lapisan air alkali.',
    clinicalReference: 'Evans W.C. Trease and Evans Pharmacognosy 16th Edition & Materia Medika Indonesia',
    difficulty: 'Mudah'
  },
  {
    id: 'q-353',
    domainId: 'bahan_alam',
    targetExam: 'all',
    vignette: 'Uji busa dilakukan dengan mengocok vertikal 10 mL filtrat rebusan daun Pegagan (Centella asiatica) di dalam tabung reaksi selama 10 detik. Terbentuk busa setinggi 1,5 cm yang tetap stabil setelah penambahan 1 tetes HCl 2N dan didiamkan selama 10 menit.',
    question: 'Golongan senyawa apakah yang memiliki sifat surfaktan alami (amfifilik) sehingga menghasilkan busa persisten yang tahan asam tersebut?',
    options: [
      { key: 'A', text: 'Saponin' },
      { key: 'B', text: 'Tanin' },
      { key: 'C', text: 'Alkaloid' },
      { key: 'D', text: 'Pektin' },
      { key: 'E', text: 'Lilin (Wax)' }
    ],
    correctAnswer: 'A',
    explanation: 'SAPONIN adalah glikosida alami yang memiliki struktur amfifilik (aglikon sapogenin yang lipofilik berikatan dengan rantai gula glikon yang hidrofilik), sehingga bertindak sebagai SURFAKTAN ALAMI yang menurunkan tegangan permukaan air. Ciri khas pengujian saponin menurut Farmakope Herbal Indonesia adalah terbentuknya BUSA PERSISTEN (tinggi minimal 1 cm yang stabil selama minimal 10 menit) dan TIDAK HILANG DENGAN PENAMBAHAN 1 TETES ASAM KLORIDA (HCl) 2 N.',
    clinicalReference: 'Farmakope Herbal Indonesia Edisi II Lampiran Penapisan Fitokimia',
    difficulty: 'Mudah'
  },
  {
    id: 'q-354',
    domainId: 'bahan_alam',
    targetExam: 'ukmppai',
    vignette: 'Apoteker kontrol kualitas menguji ekstrak Meniran (Phyllanthus niruri L.) yang digunakan sebagai sediaan fitofarmaka imunostimulan terdaftar BPOM.',
    question: 'Senyawa marker lignan manakah yang dipersyaratkan kadarnya dalam standardisasi ekstrak herba Meniran menurut Farmakope Herbal Indonesia?',
    options: [
      { key: 'A', text: 'Filantin dan Hipofilantin' },
      { key: 'B', text: 'Andrografolid' },
      { key: 'C', text: 'Asiatikosida' },
      { key: 'D', text: 'Kuersetin' },
      { key: 'E', text: 'Sinensetin' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Farmakope Herbal Indonesia, senyawa marker aktif utama untuk herba Meniran (Phyllanthus niruri) adalah golongan senyawa lignan yaitu FILANTIN dan HIPOFILANTIN. Senyawa ini terbukti memiliki aktivitas imunomodulator (menstimulasi proliferasi sel limfosit T dan B serta sitokin fagositosis) dan hepatoprotektor. Penetapan kadarnya dilakukan secara resmi menggunakan metode Kromatografi Cair Kinerja Tinggi (KCKT/HPLC).',
    clinicalReference: 'Farmakope Herbal Indonesia (FHI) Edisi II & Monografi Ekstrak Tumbuhan Obat BPOM',
    difficulty: 'Sedang'
  },
  {
    id: 'q-355',
    domainId: 'bahan_alam',
    targetExam: 'all',
    vignette: 'Dalam formulasi fitofarmaka antidiabetes dari daun Salam (Syzygium polyanthum) dan herba Pegagan (Centella asiatica), apoteker menetapkan senyawa marker aktif golongan triterpenoid pentasiklik pada Pegagan.',
    question: 'Senyawa triterpenoid glikosida manakah yang menjadi penanda mutu utama Pegagan yang berkhasiat memicu biosintesis kolagen dan memperbaiki mikrosirkulasi vaskular?',
    options: [
      { key: 'A', text: 'Asiatikosida (dan Madekasosida)' },
      { key: 'B', text: 'Alisin' },
      { key: 'C', text: 'Piperin' },
      { key: 'D', text: 'Ginsenosida' },
      { key: 'E', text: 'Morfin' }
    ],
    correctAnswer: 'A',
    explanation: 'ASIATIKOSIDA (Asiaticoside) bersama asam asiatik dan madekasosida adalah senyawa triterpenoid saponin pentasiklik utama yang menjadi senyawa penanda (marker) resmi herba Pegagan (Centella asiatica (L.) Urban). Asiatikosida merangsang sintesis kolagen tipe I dan fibronektin pada fibroblas, mempercepat reepitelisasi luka, meningkatkan kekuatan regang jaringan, serta memiliki efek neuroprotektif.',
    clinicalReference: 'WHO Monographs on Selected Medicinal Plants Vol 1 & Farmakope Herbal Indonesia',
    difficulty: 'Mudah'
  },
  {
    id: 'q-356',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Sebuah industri farmasi memproduksi tablet salut enterik Natrium Diklofenak 50 mg untuk mencegah pelepasan zat aktif di lambung yang dapat memicu iritasi ulkus lambung.',
    question: 'Polimer penyalut enterik manakah yang larut pada pH usus halus (pH >= 5,5 - 6,8) namun TIDAK LARUT dalam cairan asam lambung (pH 1,2)?',
    options: [
      { key: 'A', text: 'Metakrilat Kopolimer (Eudragit L 100 / Eudragit S 100) atau Cellulose Acetate Phthalate (CAP)' },
      { key: 'B', text: 'Hidroksipropil Metilselulosa (HPMC E5)' },
      { key: 'C', text: 'Polivinilpirolidon (PVP K-30)' },
      { key: 'D', text: 'Polietilen Glikol (PEG 4000)' },
      { key: 'E', text: 'Gelatin Bloom 200' }
    ],
    correctAnswer: 'A',
    explanation: 'Penyalutan enterik (enteric coating) menggunakan polimer yang memiliki gugus karboksilat bebas yang tidak terionisasi pada pH asam lambung (pH 1-3) sehingga TIDAK LARUT di lambung. Saat tablet memasuki duodenum/jejunum (pH > 5,5 - 6,8), gugus karboksilat terionisasi menjadi bentuk garam bermuatan negatif yang larut air, sehingga salut pecah dan obat dilepaskan. Contoh polimer enterik standar adalah EUDRAGIT L 100 / L 30 D-55, EUDRAGIT S 100, Cellulose Acetate Phthalate (CAP), dan Hydroxypropyl Methylcellulose Phthalate (HPMCP). HPMC biasa larut pada semua pH.',
    clinicalReference: 'Aulton Pharmaceutics: The Design and Manufacture of Medicines & Lachman Teori dan Praktik Farmasi Industri',
    difficulty: 'Sedang'
  },
  {
    id: 'q-357',
    domainId: 'teknologi',
    targetExam: 'all',
    vignette: 'Apoteker di bagian peracikan sediaan semisolida memformulasi salep hidrokortison 1%. Basis salep yang dipilih adalah Vaselin Putih (White Petrolatum / Vaselin album).',
    question: 'Termasuk dalam golongan basis salep apakah Vaselin Putih menurut klasifikasi Farmakope Indonesia?',
    options: [
      { key: 'A', text: 'Basis Hidrokarbon (Bersifat oklusif, berminyak, emolien kuat, dan sukar dicuci dengan air)' },
      { key: 'B', text: 'Basis Absorpsi' },
      { key: 'C', text: 'Basis yang Dapat Dicuci dengan Air' },
      { key: 'D', text: 'Basis Larut Air' },
      { key: 'E', text: 'Basis Gel Anorganik' }
    ],
    correctAnswer: 'A',
    explanation: 'Empat kelompok basis salep menurut Farmakope Indonesia VI / USP: (1) BASIS HIDROKARBON (contoh: Vaselin album, Vaselin flavum, Parafin cair): Bersifat bebas air, emolien kuat, sangat oklusif (mencegah penguapan air kulit), tidak menyerap air, dan SANGAT SUKAR DICUCI DENGAN AIR; (2) BASIS ABSORPSI (contoh: Adeps lanae, Lanolin, Hydrophilic Petrolatum): Mampu menyerap sejumlah air; (3) BASIS DAPAT DICUCI DENGAN AIR (contoh: Vanishing cream, Salep hidrofilik); (4) BASIS LARUT AIR (contoh: Polietilen Glikol / PEG ointment).',
    clinicalReference: 'Farmakope Indonesia Edisi VI & Ansel Bentuk Sediaan Farmasi',
    difficulty: 'Mudah'
  },
  {
    id: 'q-358',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Dalam pembuatan supositoria Rektal menggunakan basis Lemak Cokelat (Oleum Cacao), apoteker mengontrol suhu peleburan dengan sangat hati-hati tidak melebihi 35°C.',
    question: 'Apakah risiko fisik yang terjadi jika Oleum Cacao dipanaskan berlebihan hingga mencair sempurna pada suhu > 36°C?',
    options: [
      { key: 'A', text: 'Terbentuk bentuk kristal polimorfi metastabil (alfa dan gamma) dengan titik leleh turun drastis (22 - 24°C) sehingga supositoria mencair pada suhu kamar' },
      { key: 'B', text: 'Titik leleh supositoria naik drastis menjadi 70°C' },
      { key: 'C', text: 'Supositoria meledak saat didinginkan' },
      { key: 'D', text: 'Supositoria mengalami kristalisasi permanen menjadi batu' },
      { key: 'E', text: 'Zat aktif terhidrolisis menjadi gas' }
    ],
    correctAnswer: 'A',
    explanation: 'Oleum Cacao (Theobroma Oil) memiliki sifat POLIMORFISME dengan 4 bentuk kristal: gamma (leleh 18°C), alfa (leleh 22°C), beta-prime (leleh 28°C), dan beta stabil (leleh 34,5°C). Jika dipanaskan berlebihan (> 36°C), seluruh inti kristal beta yang stabil akan hancur lebur. Saat didinginkan kembali secara cepat, terbentuk bentuk kristal METASTABIL (alfa dan gamma) yang MEMILIKI TITIK LELEH SANGAT RENDAH (22-24°C) sehingga supositoria MENCAIR PADA SUHU KAMAR dan gagal memadat dalam cetakan.',
    clinicalReference: 'Ansel Bentuk Sediaan Farmasi & Allen The Art, Science, and Technology of Pharmaceutical Compounding',
    difficulty: 'Sedang'
  },
  {
    id: 'q-359',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Industri farmasi memproduksi sediaan injeksi sefotaksim steril yang tidak stabil terhadap panas dalam bentuk larutan air, sehingga dikeringkan menjadi serbuk beku kering steril (Liofilisasi / Freeze Drying).',
    question: 'Manakah urutan 3 tahapan proses liofilisasi yang benar dari awal hingga akhir?',
    options: [
      { key: 'A', text: 'Pembekuan (Freezing) -> Pengeringan Primer Sublimasi Es (Primary Drying) -> Pengeringan Sekunder Desorpsi Air Terikat (Secondary Drying)' },
      { key: 'B', text: 'Penguapan Termal -> Kondensasi -> Filtrasi Membran' },
      { key: 'C', text: 'Sentrifugasi -> Kristalisasi -> Pemanasan Autoklaf' },
      { key: 'D', text: 'Semprot Kering (Spray Drying) -> Granulasi -> Pengayakan' },
      { key: 'E', text: 'Evaporasi Vakum -> Presipitasi -> Dekantasi' }
    ],
    correctAnswer: 'A',
    explanation: 'LIOFILISASI (FREEZE DRYING) adalah proses pengeringan zat aktif termolabil melalui 3 tahapan berurutan: (1) FREEZING: Larutan dibekukan hingga di bawah titik eutektik (biasanya -40°C hingga -50°C) membentuk es padat; (2) PRIMARY DRYING: Pengeringan primer di bawah tekanan vakum tinggi di mana air dihilangkan melalui proses SUBLIMASI LANGSUNG (dari es padat menjadi uap air tanpa melewati fase cair); (3) SECONDARY DRYING: Pengeringan sekunder pada suhu sedikit dinaikkan untuk menghilangkan molekul air terikat (DESORPSI) hingga kadar air residu < 1-3%.',
    clinicalReference: 'Aulton Pharmaceutics & Nail SL et al. Fundamentals of freeze-drying',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-360',
    domainId: 'teknologi',
    targetExam: 'all',
    vignette: 'Dalam formulasi inhaler dosis terukur (Metered Dose Inhaler / MDI) Salbutamol, industri farmasi mengganti propelan lama Klorofluorokarbon (CFC) dengan propelan modern yang ramah lingkungan.',
    question: 'Propelan gas apakah yang digunakan sebagai pengganti CFC karena tidak merusak lapisan ozon stratosfer bumi?',
    options: [
      { key: 'A', text: 'Hidrofluoroalkana (HFA 134a atau HFA 227)' },
      { key: 'B', text: 'Gas Karbon Monoksida' },
      { key: 'C', text: 'Gas Klorin murni' },
      { key: 'D', text: 'Gas Metana terkompresi' },
      { key: 'E', text: 'Nitrogen Oksida (N2O)' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Protokol Montreal PBB, propelan CFC (Klorofluorokarbon seperti CFC-11 dan CFC-12) dilarang digunakan dalam MDI karena atom klorinnya mengkatalisis penguraian lapisan ozon atmosfer bumi. Sebagai pengganti yang aman bagi lingkungan dan pasien, industri farmasi menggunakan propelan HIDROFLUOROALKANA (HFA), khususnya HFA-134a (1,1,1,2-tetrafluoroetana) dan HFA-227 (heptafluoropropana) yang bebas klorin dan tidak memiliki potensi penipisan ozon (Ozone Depletion Potential / ODP = 0).',
    clinicalReference: 'Newman SP: Aerosols and the Lung & British Pharmacopoeia Inhalations Monograph',
    difficulty: 'Mudah'
  }
];

