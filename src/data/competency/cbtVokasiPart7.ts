import { ExamQuestion } from '../competencyExamData';

/**
 * BANK SOAL CBT UKTVF / APDFI (UJI KOMPETENSI TENAGA VOKASI FARMASI D3)
 * BAGIAN 7: TEKNOLOGI FARMASI, FORMULASI, KONTROL KUALITAS (QC) & CPOB SEDIAAN STERIL / NON-STERIL
 * Standar Nasional Asosiasi Pendidikan Diploma Farmasi Indonesia (APDFI), Farmakope Indonesia & CPOB BPOM RI
 */
export const CBT_VOKASI_PART_7: ExamQuestion[] = [
  {
    id: 'q-1014',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Seorang TTK di laboratorium QC industri farmasi melakukan pengujian kerapuhan (friability) terhadap 20 tablet ibuprofen 400 mg menggunakan alat Roche Friabilator. Bobot awal tablet sebelum diputar adalah 10,250 gram. Setelah diputar 100 putaran (25 rpm selama 4 menit) dan dibebasdebukan, bobot akhir tablet ditimbang sebesar 10,180 gram.',
    question: 'Berapakah persentase kerapuhan tablet tersebut dan bagaimanakah status pemenuhan syaratnya?',
    options: [
      { key: 'A', text: '0,68% (Memenuhi syarat karena < 1,0%)' },
      { key: 'B', text: '1,36% (Tidak memenuhi syarat karena > 1,0%)' },
      { key: 'C', text: '0,07% (Memenuhi syarat)' },
      { key: 'D', text: '6,83% (Tidak memenuhi syarat)' },
      { key: 'E', text: '0,95% (Tidak memenuhi syarat)' }
    ],
    correctAnswer: 'A',
    explanation: 'Rumus persen kerapuhan: [(Bobot Awal - Bobot Akhir) / Bobot Awal] x 100% = [(10,250 g - 10,180 g) / 10,250 g] x 100% = (0,070 / 10,250) x 100% = 0,683% (~0,68%). Menurut Farmakope Indonesia dan standar formulasi tablet, batas maksimal kerapuhan tablet yang dapat diterima adalah kurang dari 1,0% (atau < 0,8% untuk sediaan tertentu). Jadi tablet tersebut memenuhi syarat.',
    clinicalReference: 'Farmakope Indonesia Edisi VI & Petunjuk Operasional Penerapan CPOB BPOM',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1015',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'TTK melakukan evaluasi waktu hancur terhadap 6 tablet parasetamol 500 mg tanpa salut menggunakan alat Disintegration Tester berisi media air suling bersuhu 37° ± 2°C. Seluruh tablet hancur sempurna pada menit ke-8.',
    question: 'Apakah persyaratan batas waktu hancur untuk tablet tidak bersalut menurut Farmakope Indonesia?',
    options: [
      { key: 'A', text: 'Tidak lebih dari 15 menit' },
      { key: 'B', text: 'Tidak lebih dari 5 menit' },
      { key: 'C', text: 'Tidak lebih dari 30 menit' },
      { key: 'D', text: 'Tidak lebih dari 60 menit' },
      { key: 'E', text: 'Tidak lebih dari 120 menit' }
    ],
    correctAnswer: 'A',
    explanation: 'Menurut Farmakope Indonesia, persyaratan waktu hancur untuk tablet tidak bersalut (uncoated tablet) adalah tidak lebih dari 15 menit. Untuk tablet salut selaput biasanya tidak lebih dari 30 menit, dan tablet salut gula tidak lebih dari 60 menit.',
    clinicalReference: 'Farmakope Indonesia Edisi VI, Uji Waktu Hancur <1251>',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1016',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Pada proses pencetakan tablet asam mefenamat di ruang produksi, TTK mengamati adanya pemisahan bagian atas atau bawah permukaan tablet dari badan utama tablet sesaat setelah keluar dari cetakan (die).',
    question: 'Apakah nama fenomena kerusakan/cacat tablet tersebut?',
    options: [
      { key: 'A', text: 'Capping' },
      { key: 'B', text: 'Mottling' },
      { key: 'C', text: 'Sticking' },
      { key: 'D', text: 'Picking' },
      { key: 'E', text: 'Whiskering' }
    ],
    correctAnswer: 'A',
    explanation: 'Capping adalah pelepasan atau pemisahan bagian atas (mahkota) atau bawah tablet dari badan tablet utama akibat adanya udara yang terjebak (air entrapment) di dalam masa cetak saat kompresi, kelebihan fines (serbuk halus), atau die yang aus. Jika tablet terbelah menjadi beberapa lapisan horizontal, disebut lamination.',
    clinicalReference: 'Lachman L. Teori dan Praktek Farmasi Industri Edisi III',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1017',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Pada proses pembuatan tablet salut vitamin B kompleks yang mengandung zat warna riboflavin, permukaan tablet menunjukkan distribusi warna yang tidak merata (terlihat bercak-bercak terang dan gelap).',
    question: 'Apakah istilah teknis untuk cacat ketidakseragaman warna pada permukaan tablet tersebut?',
    options: [
      { key: 'A', text: 'Mottling' },
      { key: 'B', text: 'Lamination' },
      { key: 'C', text: 'Bridging' },
      { key: 'D', text: 'Orange peel' },
      { key: 'E', text: 'Capping' }
    ],
    correctAnswer: 'A',
    explanation: 'Mottling adalah keadaan di mana distribusi warna pada permukaan tablet tidak merata, dengan adanya bintik-bintik terang atau gelap. Hal ini sering disebabkan oleh migrasi zat warna terlarut selama proses pengeringan granul atau pencampuran zat warna yang tidak homogen.',
    clinicalReference: 'Ansel HC. Pengantar Bentuk Sediaan Farmasi Edisi IV',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1018',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'TTK mengawasi pencetakan tablet cetirizine. Ditemukan massa serbuk menempel pada permukaan punch atas dan bawah, sehingga permukaan tablet tampak berlubang-lubang kecil dan huruf logo tablet tidak tercetak jelas.',
    question: 'Eksipien tablet golongan apakah yang perlu ditambahkan atau ditingkatkan konsentrasinya untuk mengatasi masalah penempelan pada punch (sticking/picking) tersebut?',
    options: [
      { key: 'A', text: 'Lubrikan (pelumas) seperti Magnesium Stearat' },
      { key: 'B', text: 'Disintegran seperti Croscarmellose Sodium' },
      { key: 'C', text: 'Pengisi seperti Laktosa monohidrat' },
      { key: 'D', text: 'Pemanis seperti Aspartam' },
      { key: 'E', text: 'Wetting agent seperti Polisorbat 80' }
    ],
    correctAnswer: 'A',
    explanation: 'Sticking/picking terjadi akibat tingginya adhesi massa granul terhadap permukaan punch dan dinding die cetakan tablet. Solusinya adalah dengan menambahkan atau mengoptimalkan konsentrasi lubrikan/antiadheren seperti Magnesium Stearat (0,5 - 1%) atau Talkum.',
    clinicalReference: 'Lachman L. Teori dan Praktek Farmasi Industri & Handbook of Pharmaceutical Excipients',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1019',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Dalam formulasi tablet amoksisilin 500 mg, digunakan eksipien Sodium Starch Glycolate (Primojel) dengan konsentrasi 4%. Tablet mengalami pengembangan cepat saat kontak dengan air sehingga tablet pecah menjadi partikel-partikel kecil.',
    question: 'Apakah fungsi utama penambahan Sodium Starch Glycolate dalam formula tablet tersebut?',
    options: [
      { key: 'A', text: 'Superdisintegran (penghancur tablet)' },
      { key: 'B', text: 'Binder (pengikat)' },
      { key: 'C', text: 'Diluent (pengisi)' },
      { key: 'D', text: 'Glidan (pelincir)' },
      { key: 'E', text: 'Pewarna' }
    ],
    correctAnswer: 'A',
    explanation: 'Sodium Starch Glycolate (Primojel/Explotab) dan Croscarmellose Sodium (Ac-Di-Sol) adalah superdisintegran yang bekerja dengan mekanisme penyerapan air yang sangat cepat (wicking) dan pengembangan volume yang masif (swelling), menyebabkan tablet hancur seketika saat terkena cairan saluran cerna.',
    clinicalReference: 'Handbook of Pharmaceutical Excipients 8th Edition',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1020',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Seorang TTK melakukan pengujian sifat alir terhadap 100 gram granul tablet antasida dengan melewatkannya pada corong uji alir. Waktu yang diperlukan granul untuk mengalir seluruhnya adalah 8 detik.',
    question: 'Berapakah kecepatan alir granul tersebut dan apakah interpretasi sifat alirnya?',
    options: [
      { key: 'A', text: '12,5 g/detik (Sifat alir sangat baik)' },
      { key: 'B', text: '8,0 g/detik (Sifat alir buruk)' },
      { key: 'C', text: '0,08 g/detik (Sifat alir sangat buruk)' },
      { key: 'D', text: '800 g/detik (Sifat alir sangat baik)' },
      { key: 'E', text: '1,25 g/detik (Sifat alir sedang)' }
    ],
    correctAnswer: 'A',
    explanation: 'Kecepatan alir = Bobot (g) / Waktu (s) = 100 g / 8 s = 12,5 g/detik. Standar farmasetik: laju alir > 10 g/detik dikategorikan sebagai sifat alir yang sangat baik/istimewa.',
    clinicalReference: 'Voigt R. Buku Pelajaran Teknologi Farmasi',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1021',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Granul yang ditumpahkan melalui corong membentuk kerucut dengan tinggi tumpukan kerucut (h) = 3 cm dan jari-jari lingkaran dasar tumpukan (r) = 5,2 cm. Diketahui tan alpha = h / r = 3 / 5,2 = 0,577 (arc tan 0,577 = 30°).',
    question: 'Berdasarkan nilai sudut diam 30° tersebut, bagaimanakah kategori sifat alir granul?',
    options: [
      { key: 'A', text: 'Baik (Good)' },
      { key: 'B', text: 'Sangat buruk (Very poor)' },
      { key: 'C', text: 'Sukar mengalir (Sangat kohesif)' },
      { key: 'D', text: 'Tidak dapat diprediksi' },
      { key: 'E', text: 'Tidak memenuhi syarat cetak' }
    ],
    correctAnswer: 'A',
    explanation: 'Klasifikasi sudut diam (Angle of Repose menurut USP/FI): < 25° = Sangat baik (Excellent); 25° - 30° = Baik (Good); 31° - 40° = Cukup (Passable/Fair); > 40° = Buruk / Sukar mengalir (Poor). Nilai 30° masuk ke dalam kategori "Baik".',
    clinicalReference: 'Farmakope Indonesia Edisi VI & United States Pharmacopeia (USP <1174>)',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1022',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'TTK mengukur kerapatan curah (Bulk Density / Vo) sebesar 100 mL dan kerapatan mampat (Tapped Density / Vt setelah 500 ketukan) sebesar 82 mL untuk massa cetak tablet.',
    question: 'Berapakah nilai Indeks Kompresibilitas Carr (Carr\'s Index) dari massa cetak tersebut?',
    options: [
      { key: 'A', text: '18% (Kategori mudah mengalir / Fair)' },
      { key: 'B', text: '82% (Kategori sangat buruk)' },
      { key: 'C', text: '8,2% (Kategori sangat istimewa)' },
      { key: 'D', text: '25% (Kategori buruk)' },
      { key: 'E', text: '35% (Kategori sangat buruk)' }
    ],
    correctAnswer: 'A',
    explanation: 'Rumus Indeks Carr: [(Vo - Vt) / Vo] x 100% = [(100 - 82) / 100] x 100% = 18%. Rentang Indeks Carr 16 - 20% menunjukkan sifat alir yang cukup baik (fair to passable flow) yang masih layak dikempa.',
    clinicalReference: 'United States Pharmacopeia Powder Flow <1174>',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1023',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Sebuah formula tablet mengandung zat aktif vitamin C 50 mg yang memiliki sifat tidak tahan pemanasan tinggi dan sangat rentan terhidrolisis oleh kelembapan air, namun memiliki kompaktibilitas serbuk yang buruk jika dikempa langsung.',
    question: 'Metode pembuatan tablet manakah yang paling sesuai dipilih untuk formula tersebut?',
    options: [
      { key: 'A', text: 'Granulasi kering (Dry Granulation / Slugger / Roller Compaction)' },
      { key: 'B', text: 'Granulasi basah dengan musilago amili panas' },
      { key: 'C', text: 'Granulasi basah dengan pelarut air suling' },
      { key: 'D', text: 'Pencetakan kempa langsung tanpa perlakuan massa' },
      { key: 'E', text: 'Peleburan (Melt molding)' }
    ],
    correctAnswer: 'A',
    explanation: 'Granulasi kering (slugg/roller compaction) dipilih untuk zat aktif yang peka terhadap kelembaban/air dan tidak tahan panas (termolabil), serta tidak memiliki sifat alir dan kompresibilitas yang memadai untuk dikempa langsung.',
    clinicalReference: 'Lachman L. Teori dan Praktek Farmasi Industri Edisi III',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1024',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Tablet salut enterik natrium diklofenak 50 mg dirancang agar tidak melepaskan zat aktif di lambung yang bersifat asam untuk mencegah iritasi mukosa lambung.',
    question: 'Polimer penyalut manakah yang umum digunakan untuk menghasilkan sifat tahan asam lambung (enteric coated) tersebut?',
    options: [
      { key: 'A', text: 'Selulosa Asetat Ftalat (Cellulose Acetate Phthalate / CAP)' },
      { key: 'B', text: 'Hidroksipropil Metilselulosa (HPMC standard)' },
      { key: 'C', text: 'Polietilen Glikol (PEG 4000)' },
      { key: 'D', text: 'Gelatin Bloom 150' },
      { key: 'E', text: 'Etil Selulosa (pelepas lambat)' }
    ],
    correctAnswer: 'A',
    explanation: 'Selulosa Asetat Ftalat (CAP), Eudragit L/S, dan Hydroxypropyl Methylcellulose Phthalate (HPMCP) adalah polimer enterik yang memiliki gugus karboksilat bebas yang tidak larut pada pH asam lambung (pH 1-3), namun akan terionisasi dan larut pada pH usus yang lebih netral hingga basa (pH > 5,5-6,8).',
    clinicalReference: 'Aulton ME. Pharmaceutics: The Science of Dosage Form Design',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1025',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'TTK melakukan pengujian waktu hancur terhadap sediaan tablet salut enterik. Tablet diuji terlebih dahulu dalam media asam HCl 0,1 N selama 2 jam, kemudian dilanjutkan dalam media dapar fosfat pH 6,8.',
    question: 'Bagaimanakah syarat pemenuhan waktu hancur tablet salut enterik menurut Farmakope Indonesia?',
    options: [
      { key: 'A', text: 'Tidak hancur dalam HCl 0,1 N selama 2 jam, dan hancur dalam dapar fosfat pH 6,8 dalam waktu < 60 menit' },
      { key: 'B', text: 'Harus hancur sempurna dalam asam lambung dalam waktu < 15 menit' },
      { key: 'C', text: 'Tidak hancur di kedua media pengujian selama 4 jam' },
      { key: 'D', text: 'Hancur 50% dalam HCl 0,1 N selama 30 menit' },
      { key: 'E', text: 'Hancur dalam air suling netral dalam waktu 5 menit' }
    ],
    correctAnswer: 'A',
    explanation: 'Menurut Farmakope Indonesia, tablet salut enterik tidak boleh hancur atau menunjukkan tanda-tanda keretakan selama 2 jam perendaman dalam larutan asam (HCl 0,1 N), dan harus hancur sempurna dalam larutan dapar fosfat pH 6,8 dalam waktu tidak lebih dari 60 menit (kecuali dinyatakan lain dalam monografi).',
    clinicalReference: 'Farmakope Indonesia Edisi VI, Uji Waktu Hancur Tablet Salut Enterik',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-1026',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'TTK di apotek menerima resep tablet effervescent vitamin C. Pasien menanyakan cara penggunaan dan berapa lama waktu yang dibutuhkan tablet untuk larut sempurna dalam segelas air dingin.',
    question: 'Berapakah batas waktu kelarutan/dispersi tablet effervescent menurut standar Farmakope?',
    options: [
      { key: 'A', text: 'Kurang dari 5 menit' },
      { key: 'B', text: 'Kurang dari 15 menit' },
      { key: 'C', text: 'Kurang dari 30 menit' },
      { key: 'D', text: 'Kurang dari 60 menit' },
      { key: 'E', text: 'Seketika dalam 1 detik' }
    ],
    correctAnswer: 'A',
    explanation: 'Tablet effervescent harus larut dan terdispersi sempurna dengan melepaskan gas karbon dioksida (CO2) dalam air pada suhu kamar (15 - 25°C) dalam waktu tidak lebih dari 5 menit.',
    clinicalReference: 'Farmakope Indonesia & British Pharmacopoeia (BP)',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1027',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Dalam pembuatan granul effervescent, komponen asam dan basa dicampurkan untuk menghasilkan reaksi pembentukan gas CO2 saat dilarutkan ke dalam air minum.',
    question: 'Kombinasi asam dan basa manakah yang paling baku digunakan dalam formula sediaan effervescent?',
    options: [
      { key: 'A', text: 'Asam Sitrat, Asam Tartrat, dan Natrium Bikarbonat' },
      { key: 'B', text: 'Asam Klorida dan Natrium Hidroksida' },
      { key: 'C', text: 'Asam Sulfat dan Kalsium Karbonat' },
      { key: 'D', text: 'Asam Salisilat dan Natrium Asetat' },
      { key: 'E', text: 'Asam Benzoat dan Kalium Permanganat' }
    ],
    correctAnswer: 'A',
    explanation: 'Sediaan effervescent standar menggunakan kombinasi Asam Sitrat dan Asam Tartrat dengan perbandingan stoikiometri tertentu bersama Natrium Bikarbonat. Asam sitrat saja menghasilkan masa yang lengket dan sukar digranulasi, sedangkan asam tartrat saja menghasilkan granul yang mudah rapuh; kombinasi keduanya menghasilkan sifat fisik granul effervescent yang ideal.',
    clinicalReference: 'Ansel HC. Pengantar Bentuk Sediaan Farmasi',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1028',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Seorang TTK melakukan evaluasi volume sedimentasi terhadap suspensi ibuprofen 100 mg/5 mL yang disimpan dalam gelas ukur 100 mL selama 7 hari. Volume suspensi awal (Vo) adalah 100 mL, dan volume endapan akhir yang teramati (Vu) adalah 85 mL.',
    question: 'Berapakah nilai volume sedimentasi (F) suspensi tersebut dan bagaimana interpretasinya?',
    options: [
      { key: 'A', text: 'F = 0,85 (Suspensi baik karena mendekati 1)' },
      { key: 'B', text: 'F = 1,17 (Suspensi rusak)' },
      { key: 'C', text: 'F = 0,15 (Suspensi tidak baik)' },
      { key: 'D', text: 'F = 8,5 (Suspensi tidak stabil)' },
      { key: 'E', text: 'F = 0,085 (Suspensi caking)' }
    ],
    correctAnswer: 'A',
    explanation: 'Volume sedimentasi dihitung dengan rumus: F = Vu / Vo = 85 mL / 100 mL = 0,85. Nilai F yang ideal adalah mendekati 1 (F = 1 berarti tidak ada supernatan bening terpisah dan sistem tetap homogen). Nilai 0,85 menunjukkan kestabilan fisik suspensi yang baik.',
    clinicalReference: 'Martin A. Farmasi Fisika Edisi Ketiga',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1029',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'TTK mengamati suspensi kotrimoksazol di rak penyimpanan apotek yang telah mengendap. Ketika botol dikocok kuat, endapan partikel di dasar botol tetap memadat menyerupai semen dan tidak dapat terdispersi kembali secara merata.',
    question: 'Apakah nama fenomena ketidakstabilan ireversibel pada suspensi tersebut?',
    options: [
      { key: 'A', text: 'Caking (Clay)' },
      { key: 'B', text: 'Flokulasi' },
      { key: 'C', text: 'Creaming' },
      { key: 'D', text: 'Inversi fase' },
      { key: 'E', text: 'Deflokulasi terbalik' }
    ],
    correctAnswer: 'A',
    explanation: 'Caking (pembentukan clay/endapan keras) adalah kerusakan fisik suspensi di mana partikel yang mengendap pada sistem deflokulasi saling mendekat sangat rapat membentuk ikatan kristal yang padat dan ireversibel, sehingga tidak dapat diredispersikan kembali walaupun dikocok kuat.',
    clinicalReference: 'Sinko PJ. Martin Farmasi Fisika dan Ilmu Farmasetika',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1030',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Dalam merancang suspensi yang baik, formulator sering menambahkan flokulating agent berupa elektrolit bervalensi tinggi agar partikel membentuk gumpalan longgar yang cepat mengendap namun sangat mudah diredispersi.',
    question: 'Bahan manakah di bawah ini yang berfungsi sebagai flokulating agent pada suspensi?',
    options: [
      { key: 'A', text: 'Aluminium Klorida (AlCl3) atau Kalium Dihidrogen Fosfat' },
      { key: 'B', text: 'Gliserin 50%' },
      { key: 'C', text: 'Sirup Simplex 65%' },
      { key: 'D', text: 'Propilenglikol murni' },
      { key: 'E', text: 'Sakarina Natrium' }
    ],
    correctAnswer: 'A',
    explanation: 'Flokulating agent adalah bahan yang menurunkan potensial zeta partikel suspensi hingga batas tertentu, memungkinkan partikel saling tarik-menarik membentuk flokul longgar. Contoh umum adalah elektrolit anorganik bervalensi tinggi seperti garam fosfat, sitrat, atau AlCl3.',
    clinicalReference: 'Martin A. Farmasi Fisika & Voigt R. Teknologi Farmasi',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-1031',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'TTK di bagian R&D memformulasi emulsi minyak ikan dengan tipe minyak dalam air (M/A). Untuk menstabilkan emulsi, dibutuhkan kombinasi emulgator Tween 80 (HLB = 15) dan Span 80 (HLB = 4,3) dengan nilai HLB butuh (RHLB) sebesar 12,0 sebanyak total 5 gram emulgator.',
    question: 'Berapakah jumlah Tween 80 yang harus ditimbang untuk formula tersebut?',
    options: [
      { key: 'A', text: '3,60 gram' },
      { key: 'B', text: '1,40 gram' },
      { key: 'C', text: '2,50 gram' },
      { key: 'D', text: '4,25 gram' },
      { key: 'E', text: '0,75 gram' }
    ],
    correctAnswer: 'A',
    explanation: 'Gunakan rumus aligasi atau rumus aljabar: Tween = A gram, Span = (5 - A) gram. (A x 15) + ((5 - A) x 4,3) = 5 x 12,0 -> 15A + 21,5 - 4,3A = 60 -> 10,7A = 38,5 -> A = 3,598 gram (~3,60 gram). Jadi Tween 80 yang ditimbang adalah 3,60 g dan Span 80 adalah 1,40 g.',
    clinicalReference: 'Ansel HC. Kalkulasi Farmasetik & Teori Sediaan Emulsi',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1032',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Suatu sediaan emulsi parafin cair mengalami pemisahan fase di mana lapisan tetesan minyak yang kurang rapat mengapung ke permukaan atas botol, namun ketika botol dikocok perlahan, sediaan kembali menyatu secara homogen.',
    question: 'Apakah istilah untuk peristiwa pemisahan fase emulsi yang bersifat reversibel tersebut?',
    options: [
      { key: 'A', text: 'Creaming' },
      { key: 'B', text: 'Cracking (Breaking)' },
      { key: 'C', text: 'Koalesensi' },
      { key: 'D', text: 'Inversi fase' },
      { key: 'E', text: 'Flokulasi' }
    ],
    correctAnswer: 'A',
    explanation: 'Creaming adalah pemisahan emulsi menjadi dua lapisan di mana salah satu fase terkonsentrasi di bagian atas atau bawah akibat perbedaan densitas (berat jenis), tetapi lapisan emulsi tersebut masih dapat dihomogenkan kembali dengan pengocokan ringan (bersifat reversibel). Jika sudah membentuk lapisan minyak menyatu utuh dan tidak bisa homogen kembali disebut Cracking/Breaking.',
    clinicalReference: 'Sinko PJ. Martin Farmasi Fisika dan Ilmu Farmasetika',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1033',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'TTK melakukan identifikasi tipe emulsi menggunakan uji kelarutan zat warna. Sampel emulsi ditetesi dengan larutan Metilen Biru di atas kaca objek, dan diamati bahwa warna biru menyebar merata ke seluruh fase kontinu cairan.',
    question: 'Apakah tipe emulsi yang terbukti dari hasil pengujian tersebut?',
    options: [
      { key: 'A', text: 'Minyak dalam air (M/A atau O/W)' },
      { key: 'B', text: 'Air dalam minyak (A/M atau W/O)' },
      { key: 'C', text: 'Emulsi ganda A/M/A' },
      { key: 'D', text: 'Mikroemulsi lipofilik' },
      { key: 'E', text: 'Emulsi tidak stabil' }
    ],
    correctAnswer: 'A',
    explanation: 'Metilen biru adalah zat warna yang larut dalam air. Jika warna biru menyebar merata pada fase luar/kontinu, berarti fase kontinumnya adalah air, yang menandakan emulsi bertipe Minyak dalam Air (M/A). Jika zat warna Sudan III (larut minyak) yang menyebar merata, tipenya adalah Air dalam Minyak (A/M).',
    clinicalReference: 'Voigt R. Buku Pelajaran Teknologi Farmasi',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1034',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Sebuah industri farmasi memproduksi sirup parasetamol. Untuk mencegah pertumbuhan kapang dan ragi, ditambahkan pengawet kombinasi metil paraben (nipagin) dan propil paraben (nipasol).',
    question: 'Berapakah konsentrasi sukrosa standar dalam Sirup Simplex (Sirupus Simplex) menurut Farmakope Indonesia yang mampu memberikan efek self-preserving (awet alami)?',
    options: [
      { key: 'A', text: '65% b/b' },
      { key: 'B', text: '35% b/b' },
      { key: 'C', text: '10% b/b' },
      { key: 'D', text: '85% b/b' },
      { key: 'E', text: '50% b/b' }
    ],
    correctAnswer: 'A',
    explanation: 'Sirup Simplex menurut Farmakope Indonesia dibuat dengan melarutkan 65 bagian sakarosa dalam air murni secukupnya hingga 100 bagian (konsentrasi 65% b/b). Pada konsentrasi ini, tekanan osmotik sangat tinggi sehingga air bebas (water activity / Aw) tidak mencukupi untuk pertumbuhan bakteri dan mikroba.',
    clinicalReference: 'Farmakope Indonesia Edisi III & VI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1035',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Zat aktif loratadine memiliki kelarutan yang sangat buruk dalam air murni. Untuk membuat sediaan sirup obat, TTK menambahkan propilen glikol dan gliserin sebagai pelarut pembantu untuk meningkatkan kelarutan loratadine.',
    question: 'Apakah istilah teknis untuk fenomena peningkatan kelarutan zat aktif dengan penambahan pelarut campur tersebut?',
    options: [
      { key: 'A', text: 'Kosolvensi (Cosolvency)' },
      { key: 'B', text: 'Salting out' },
      { key: 'C', text: 'Kompleksasi' },
      { key: 'D', text: 'Solubilisasi miselar' },
      { key: 'E', text: 'Hidrotropi' }
    ],
    correctAnswer: 'A',
    explanation: 'Kosolvensi adalah peristiwa peningkatan kelarutan suatu zat yang sukar larut dalam air dengan penambahan pelarut lain yang dapat bercampur dengan air (seperti propilen glikol, gliserol, PEG, atau etanol). Pelarut pembantu tersebut disebut kosolven.',
    clinicalReference: 'Sinko PJ. Martin Farmasi Fisika dan Ilmu Farmasetika',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1036',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Dalam pembuatan gel natrium diklofenak 1%, digunakan basis polimer Carbomer 940 (Carbopol). Setelah didispersikan dalam air suling, viskositas campuran masih cair dan pH bersifat sangat asam.',
    question: 'Zat apakah yang harus ditambahkan sebagai agen penetral (neutralizing agent) untuk memicu pembentukan gel (gelling) yang jernih dan kental?',
    options: [
      { key: 'A', text: 'Trietanolamin (TEA) atau NaOH encer' },
      { key: 'B', text: 'Asam Sitrat' },
      { key: 'C', text: 'Asam Asetat Glasial' },
      { key: 'D', text: 'Natrium Klorida' },
      { key: 'E', text: 'Asam Klorida 0,1 N' }
    ],
    correctAnswer: 'A',
    explanation: 'Carbomer (Carbopol) adalah polimer asam poliakrilat yang memerlukan agen pembasa/penetral seperti Trietanolamin (TEA), Aminometil propanol, atau NaOH untuk menetralkan gugus karboksilatnya. Ionisasi gugus asam menyebabkan rantai polimer mengembang dan saling tolak-menolak, membentuk matriks gel yang kental dan transparan pada pH 6-7.',
    clinicalReference: 'Handbook of Pharmaceutical Excipients 8th Edition',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1037',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Sediaan gel lidokain yang disimpan pada suhu ruangan mengalami perubahan fisik di mana cairan pelarut keluar menggenang di permukaan gel sehingga matriks gel tampak mengerut.',
    question: 'Apakah nama fenomena ketidakstabilan fisik pada sediaan gel tersebut?',
    options: [
      { key: 'A', text: 'Sineresis (Syneresis)' },
      { key: 'B', text: 'Swelling (Pengembangan)' },
      { key: 'C', text: 'Tiksotropi' },
      { key: 'D', text: 'Imbibisi' },
      { key: 'E', text: 'Koagulasi' }
    ],
    correctAnswer: 'A',
    explanation: 'Sineresis adalah peristiwa keluarnya cairan fase cair dari dalam struktur matriks gel akibat kontraksi elastis kisi-kisi polimer saat didiamkan. Sebaliknya, pengambilan cairan oleh gel tanpa peningkatan volume yang berarti disebut imbibisi, dan jika disertai peningkatan volume disebut swelling.',
    clinicalReference: 'Martin A. Farmasi Fisika Edisi Ketiga',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1038',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'TTK melakukan peracikan salep sulfur 10% dengan basis Vaselin Album (White Petrolatum). Berdasarkan klasifikasi basis salep menurut Farmakope Indonesia, tergolong ke dalam kelompok apakah Vaselin Album?',
    question: 'Apakah kelompok basis salep dari Vaselin Album?',
    options: [
      { key: 'A', text: 'Basis hidrokarbon (berlemak)' },
      { key: 'B', text: 'Basis serap (absorpsi)' },
      { key: 'C', text: 'Basis yang dapat dicuci dengan air' },
      { key: 'D', text: 'Basis larut air' },
      { key: 'E', text: 'Basis polietilen glikol' }
    ],
    correctAnswer: 'A',
    explanation: 'Empat kelompok basis salep Farmakope Indonesia: 1) Basis hidrokarbon (Vaselin putih/kuning, parafin cair/padat); 2) Basis serap (Adeps lanae, hydrophilic petrolatum); 3) Basis dapat dicuci air (Hydrophilic ointment, vanishing cream); 4) Basis larut air (PEG / Macrogol). Vaselin album tergolong basis hidrokarbon yang bersifat oklusif dan emolien.',
    clinicalReference: 'Farmakope Indonesia Edisi VI & Ansel HC',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1039',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Dalam pembuatan pasta seng oksida (Zinci Oxydi Pasta), formula mengandung 25% serbuk Zink Oksida, 25% Amilum, dan 50% Vaselin Putih.',
    question: 'Karakteristik fisik khas apakah yang membedakan sediaan pasta dari salep biasa?',
    options: [
      { key: 'A', text: 'Mengandung serbuk tak larut dengan persentase tinggi (> 20-50%) sehingga lebih padat, kaku, dan berdaya serap' },
      { key: 'B', text: 'Sangat encer dan mudah mengalir pada suhu ruang' },
      { key: 'C', text: 'Selalu transparan dan bening' },
      { key: 'D', text: 'Berbasis emulsi tipe M/A yang mudah dicuci air' },
      { key: 'E', text: 'Hanya digunakan untuk mata' }
    ],
    correctAnswer: 'A',
    explanation: 'Pasta adalah sediaan semi padat yang mengandung persentase zat padat tak larut dalam jumlah besar (biasanya 20% hingga 50%). Oleh karena itu, pasta memiliki konsistensi yang lebih kaku, padat, kurang berminyak dibanding salep berlemak, serta memiliki daya serap tinggi terhadap eksudat luka.',
    clinicalReference: 'Farmakope Indonesia Edisi VI & Formularium Nasional',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1040',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'TTK menguji daya sebar salep kloramfenikol dengan menempatkan 0,5 gram salep di antara dua lempeng kaca bundar dan dibebani pemberat 150 gram selama 1 menit. Diameter sebaran salep yang terukur adalah 5,8 cm.',
    question: 'Bagaimanakah rentang diameter daya sebar sediaan semi padat yang baik menurut persyaratan farmasetik?',
    options: [
      { key: 'A', text: '5 - 7 cm' },
      { key: 'B', text: '1 - 2 cm' },
      { key: 'C', text: '10 - 12 cm' },
      { key: 'D', text: '0,5 - 1 cm' },
      { key: 'E', text: '15 - 20 cm' }
    ],
    correctAnswer: 'A',
    explanation: 'Daya sebar sediaan semi padat (krim/salep/gel) yang nyaman dioleskan dan mudah merata pada kulit tanpa tekanan berlebih umumnya berada pada rentang diameter 5 hingga 7 cm.',
    clinicalReference: 'Voigt R. Buku Pelajaran Teknologi Farmasi',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1041',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Pengukuran pH sediaan krim pelembap wajah menghasilkan nilai pH 5,5.',
    question: 'Mengapa nilai pH tersebut dinilai ideal dan memenuhi kriteria keamanan aplikasi topikal kulit manusia?',
    options: [
      { key: 'A', text: 'Sesuai dengan rentang pH fisiologis mantel asam kulit (pH 4,5 - 6,5)' },
      { key: 'B', text: 'Menjamin semua bakteri mati seketika' },
      { key: 'C', text: 'Membuat krim terasa sangat dingin' },
      { key: 'D', text: 'Menghilangkan bau minyak pada krim' },
      { key: 'E', text: 'Membuat krim berwarna putih mengkilap' }
    ],
    correctAnswer: 'A',
    explanation: 'Permukaan kulit manusia memiliki lapisan pelindung asam (acid mantle) dengan pH fisiologis antara 4,5 hingga 6,5. Sediaan topikal kulit harus diformulasikan pada rentang pH tersebut untuk mencegah terjadinya iritasi kulit (akibat terlalu asam) atau rasa kering dan terganggunya barrier kulit (akibat terlalu basa).',
    clinicalReference: 'Dermatological Formulations & CPOB BPOM RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1042',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Dalam pembuatan suppositoria parasetamol 125 mg, digunakan basis Olum Cacao (lemak cokelat). TTK harus berhati-hati saat melebur basis agar suhu pemanasan tidak melebihi 35°C.',
    question: 'Apakah risiko yang terjadi jika Oleum Cacao dipanaskan hingga suhu terlalu tinggi (> 36°C)?',
    options: [
      { key: 'A', text: 'Terbentuk bentuk polimorfi alfa/beta-aksen yang memiliki titik leleh rendah (24°C) sehingga suppositoria mencair pada suhu kamar' },
      { key: 'B', text: 'Suppositoria menjadi meledak' },
      { key: 'C', text: 'Parasetamol berubah menjadi gas' },
      { key: 'D', text: 'Suppositoria tidak dapat dikeluarkan dari cetakan selamanya' },
      { key: 'E', text: 'Warna suppositoria berubah menjadi merah terang' }
    ],
    correctAnswer: 'A',
    explanation: 'Oleum Cacao menunjukkan sifat polimorfisme (memiliki beberapa bentuk kristal: gamma, alfa, beta-aksen, dan beta stabil). Bentuk beta stabil meleleh pada 34-35°C. Jika dipanaskan berlebih (>36°C) dan didinginkan cepat, terbentuk polimorf alfa atau beta-aksen yang meleleh pada suhu jauh lebih rendah (~24°C) sehingga suppositoria akan tetap cair dan tidak membeku pada suhu ruang.',
    clinicalReference: 'Ansel HC. Pengantar Bentuk Sediaan Farmasi & Farmakope Indonesia',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1043',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'TTK menghitung faktor pengganti (displacement value) parasetamol dalam basis Oleum Cacao untuk mencetak 10 suppositoria dengan bobot cetakan 2 gram.',
    question: 'Mengapa nilai Displacement Value perlu diperhitungkan dalam formulasi sediaan suppositoria?',
    options: [
      { key: 'A', text: 'Karena volume zat aktif memperhitungkan perbedaan kerapatan jenis (densitas) terhadap basis yang menempati ruang cetakan' },
      { key: 'B', text: 'Untuk mempercepat waktu leleh suppositoria di rektum' },
      { key: 'C', text: 'Untuk meningkatkan rasa manis suppositoria' },
      { key: 'D', text: 'Untuk mengubah warna basis menjadi transparan' },
      { key: 'E', text: 'Sebagai syarat wajib BPOM untuk uji organoleptis' }
    ],
    correctAnswer: 'A',
    explanation: 'Cetakan suppositoria dikalibrasi berdasarkan kapasitas volume, bukan bobot. Karena densitas zat aktif berbeda dari densitas basis (oleum cacao/PEG), penambahan sejumlah zat aktif akan menggeser (displace) volume basis tertentu. Nilai displacement value digunakan untuk menghitung bobot basis yang harus dikurangkan agar dosis zat aktif tetap tepat.',
    clinicalReference: 'Kalkulasi Farmasetik & Farmakope Indonesia',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1044',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Seorang TTK di instalasi farmasi rumah sakit diminta menyiapkan proses sterilisasi infus Ringer Laktat 500 mL dalam botol kaca menggunakan Autoklaf.',
    question: 'Berapakah suhu, tekanan, dan waktu standar sterilisasi panas basah dengan autoklaf menurut Farmakope Indonesia?',
    options: [
      { key: 'A', text: '121°C, tekanan 1 atm (15 psi), selama 15 menit' },
      { key: 'B', text: '100°C, tekanan 0 atm, selama 60 menit' },
      { key: 'C', text: '160°C, tekanan 2 atm, selama 2 jam' },
      { key: 'D', text: '80°C, tekanan 1 atm, selama 30 menit' },
      { key: 'E', text: '180°C, tekanan 5 atm, selama 5 menit' }
    ],
    correctAnswer: 'A',
    explanation: 'Sterilisasi panas basah menggunakan uap air jenuh bertekanan di dalam autoklaf dilakukan pada suhu 121°C (250°F) dengan tekanan uap 1 atm (15 psi gauge) selama minimal 15 menit. Mekanisme kematian mikroba adalah melalui denaturasi dan koagulasi protein struktural seluler mikroorganisme.',
    clinicalReference: 'Farmakope Indonesia Edisi VI, Metode Sterilisasi <1371>',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1045',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'TTK menyiapkan sterilisasi alat gelas laboratorium (erlenmeyer, cawan porselen, pipet ukur) dan serbuk talkum menggunakan oven udara panas (panas kering).',
    question: 'Berapakah suhu dan waktu standar sterilisasi panas kering menggunakan oven menurut Farmakope Indonesia?',
    options: [
      { key: 'A', text: '160°C - 170°C selama 1 hingga 2 jam' },
      { key: 'B', text: '100°C selama 15 menit' },
      { key: 'C', text: '121°C selama 15 menit' },
      { key: 'D', text: '250°C selama 5 detik' },
      { key: 'E', text: '80°C selama 4 jam' }
    ],
    correctAnswer: 'A',
    explanation: 'Sterilisasi panas kering menggunakan oven dilakukan pada suhu 160°C - 170°C selama 1 - 2 jam (atau 180°C selama minimal 30 menit). Metode ini digunakan untuk alat gelas, bahan tahan panas bebas air, minyak lemak, petrolatum, dan serbuk mineral (talk, ZnO) yang tidak dapat ditembus uap air.',
    clinicalReference: 'Farmakope Indonesia Edisi VI & CPOB BPOM',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1046',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Larutan injeksi vitamin C (Asam Askorbat) dan injeksi insulin tidak tahan terhadap pemanasan tinggi (termolabil) dan akan terurai jika disterilisasi akhir dengan autoklaf.',
    question: 'Metode sterilisasi apakah yang paling tepat untuk sediaan cairan yang bersifat termolabil tersebut?',
    options: [
      { key: 'A', text: 'Filtrasi membran steril ukuran pori 0,22 mikrometer (Filtrasi Membran Bakteri)' },
      { key: 'B', text: 'Panas kering oven 170°C' },
      { key: 'C', text: 'Autoklaf 121°C selama 30 menit' },
      { key: 'D', text: 'Penyinaran lampu pijar biasa' },
      { key: 'E', text: 'Pendidihan air pada suhu 70°C' }
    ],
    correctAnswer: 'A',
    explanation: 'Sediaan cairan steril yang mengandung zat aktif termolabil (rusak oleh pemanasan) disterilisasi dengan cara filtrasi aseptis melewati filter membran steril dengan ukuran pori nominal 0,22 mikrometer (atau 0,2 µm), yang secara fisik mampu menahan bakteri.',
    clinicalReference: 'Farmakope Indonesia Edisi VI & Petunjuk Teknis CPOB BPOM RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1047',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Untuk membuktikan bahwa sistem filter membran steril 0,22 mikron tidak mengalami kebocoran sebelum dan sesudah proses filtrasi aseptis cairan injeksi, TTK melakukan pengujian integritas filter.',
    question: 'Apakah nama uji integritas membran filter steril yang paling umum dilakukan di industri farmasi?',
    options: [
      { key: 'A', text: 'Bubble Point Test (Uji Titik Gelembung)' },
      { key: 'B', text: 'Hardness test' },
      { key: 'C', text: 'Friability test' },
      { key: 'D', text: 'Sedimentation test' },
      { key: 'E', text: 'Karl Fischer test' }
    ],
    correctAnswer: 'A',
    explanation: 'Bubble Point Test (Uji Titik Gelembung) dan Forward Flow/Diffusion Test adalah metode validasi integritas membran filter steril non-destruktif yang memastikan tidak ada pori membran yang rusak atau melebihi ukuran spesifikasi (0,22 µm).',
    clinicalReference: 'Pedoman CPOB 2018 Aneks 1 Pembuatan Produk Steril',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1048',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Dalam pengujian sediaan injeksi bebas pirogen, TTK di bagian QC melakukan pengujian in vitro menggunakan pereaksi Limulus Amebocyte Lysate (LAL Test) yang menghasilkan pembentukan gel clot.',
    question: 'Spesies hewan apakah yang menjadi sumber reagen amebosit lisat untuk uji endotoksin bakteri (LAL) tersebut?',
    options: [
      { key: 'A', text: 'Kepiting tapal kuda (Limulus polyphemus)' },
      { key: 'B', text: 'Kelinci albino New Zealand' },
      { key: 'C', text: 'Mencit galur Balb/c' },
      { key: 'D', text: 'Kuda laut' },
      { key: 'E', text: 'Ubur-ubur laut dalam' }
    ],
    correctAnswer: 'A',
    explanation: 'LAL (Limulus Amebocyte Lysate) diperoleh dari ekstrak sel darah biru (amebosit) kepiting tapal kuda (horseshoe crab / Limulus polyphemus). Enzim di dalamnya bereaksi spesifik dengan lipopolisakarida (endotoksin bakteri gram negatif) membentuk gel padat.',
    clinicalReference: 'Farmakope Indonesia Edisi VI, Uji Endotoksin Bakteri <201>',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1049',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Uji pirogen secara in vivo dilakukan dengan menyuntikkan sampel sediaan injeksi ke dalam vena telinga hewan uji dan memantau kenaikan suhu tubuhnya menggunakan termometer rektal.',
    question: 'Hewan uji apakah yang digunakan secara resmi dalam pengujian pirogen in vivo menurut Farmakope Indonesia?',
    options: [
      { key: 'A', text: 'Kelinci sehat (Rabbit Pyrogen Test)' },
      { key: 'B', text: 'Tikus putih jantan' },
      { key: 'C', text: 'Marmot' },
      { key: 'D', text: 'Anjing beagle' },
      { key: 'E', text: 'Kucing domestik' }
    ],
    correctAnswer: 'A',
    explanation: 'Uji pirogen in vivo Farmakope Indonesia menggunakan kelinci dewasa yang sehat. Pirogen memicu kenaikan suhu rektal kelinci yang sangat sensitif terhadap zat pirogenik menyerupai respon tubuh manusia.',
    clinicalReference: 'Farmakope Indonesia Edisi VI, Uji Pirogen <231>',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1050',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Air untuk Injeksi (Water for Injection / WFI) pada fasilitas produksi sediaan steril harus dijaga dalam sistem sirkulasi tertutup (looping system) untuk mencegah pembentukan biofilm mikroorganisme.',
    question: 'Berapakah suhu sirkulasi penyimpanan konstan WFI yang dipersyaratkan oleh CPOB?',
    options: [
      { key: 'A', text: 'Minimal 70°C - 80°C' },
      { key: 'B', text: 'Suhu beku -20°C' },
      { key: 'C', text: 'Suhu kamar 25°C' },
      { key: 'D', text: 'Suhu dingin 2°C - 8°C' },
      { key: 'E', text: 'Suhu sejuk 15°C' }
    ],
    correctAnswer: 'A',
    explanation: 'Menurut CPOB, Air untuk Injeksi (WFI) harus disimpan dan disirkulasikan secara terus menerus pada suhu minimal di atas 70°C (biasanya 80°C) dalam tangki baja tahan karat (SS 316L) untuk mencegah perkembangbiakan mikroba dan kolonisasi biofilm.',
    clinicalReference: 'Pedoman CPOB BPOM & ISPE Water and Steam Systems',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1051',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Menurut pedoman CPOB, ruang bersih industri farmasi diklasifikasikan menjadi Kelas A, B, C, D, dan E berdasarkan jumlah partikel udara dan cemaran mikroba.',
    question: 'Kelas ruang bersih manakah yang digunakan untuk zona kerja pengisian aseptis sediaan steril (misalnya di bawah Laminar Air Flow / LAF)?',
    options: [
      { key: 'A', text: 'Kelas A' },
      { key: 'B', text: 'Kelas C' },
      { key: 'C', text: 'Kelas D' },
      { key: 'D', text: 'Kelas E' },
      { key: 'E', text: 'Kelas F' }
    ],
    correctAnswer: 'A',
    explanation: 'Kelas A adalah zona operasi berisiko tinggi (misalnya zona pengisian aseptis, wadah terbuka, perakitan peralatan steril). Kondisi aliran udara laminar (LAF) dengan kecepatan 0,36 - 0,54 m/s diwajibkan, dengan jumlah partikel non-operasional dan operasional maksimal 3.520 partikel/m3 untuk ukuran >= 0,5 µm.',
    clinicalReference: 'Pedoman CPOB 2018 Aneks 1 Pembuatan Produk Steril',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1052',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Dalam ruang bersih Kelas A, aliran udara bersih disuplai melalui filter udara partikulat berkecepatan efisiensi tinggi untuk menjamin lingkungan kerja bebas kontaminan.',
    question: 'Apakah nama filter udara yang memiliki efisiensi penyaringan minimal 99,97% terhadap partikel berukuran 0,3 mikrometer tersebut?',
    options: [
      { key: 'A', text: 'HEPA filter (High Efficiency Particulate Air)' },
      { key: 'B', text: 'Pre-filter dakron' },
      { key: 'C', text: 'Medium filter karbon aktif' },
      { key: 'D', text: 'Filter kassa kawat tembaga' },
      { key: 'E', text: 'Filter membran selulosa' }
    ],
    correctAnswer: 'A',
    explanation: 'HEPA (High Efficiency Particulate Air) filter adalah filter udara standar di ruang bersih farmasi yang mampu menyaring partikel udara berukuran 0,3 mikron dengan efisiensi minimal 99,97% (bahkan hingga 99,995% untuk grade H14).',
    clinicalReference: 'CPOB 2018 & ISO 14644 Cleanrooms and associated controlled environments',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1053',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Dalam tata letak pabrik farmasi CPOB, ruang pengolahan tablet antibiotik penisilin atau senyawa sitotoksik diatur agar serbuk obat tidak mencemari koridor dan ruangan lainnya.',
    question: 'Bagaimanakah pengaturan perbedaan tekanan udara (differential pressure) di dalam ruang pengolahan debu/serbuk sitotoksik tersebut terhadap koridor luarnya?',
    options: [
      { key: 'A', text: 'Tekanan udara ruangan harus lebih negatif dibanding koridor (P ruangan < P koridor)' },
      { key: 'B', text: 'Tekanan udara ruangan harus jauh lebih positif dibanding koridor' },
      { key: 'C', text: 'Tekanan udara harus sama persis (nol)' },
      { key: 'D', text: 'Tidak perlu ada perbedaan tekanan udara' },
      { key: 'E', text: 'Tekanan udara dihubungkan langsung ke atmosfer luar' }
    ],
    correctAnswer: 'A',
    explanation: 'Untuk ruang pengolahan yang menghasilkan debu atau mengandung zat berbahaya/sensitiser (seperti penisilin atau sitotoksik), ruangan dibuat bertekanan negatif relatif terhadap koridor sekitarnya, sehingga udara mengalir masuk ke dalam ruangan dan debu obat tidak mencemari area koridor (containment). Sebaliknya, ruang produk steril dibuat bertekanan positif.',
    clinicalReference: 'Petunjuk Operasional Penerapan CPOB, Sistem Tata Udara (HVAC)',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1054',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'TTK melakukan pengujian kebocoran pada ampul injeksi kalsium glukonat 10% pasca proses sterilisasi autoklaf dengan metode perendaman dalam larutan metilen biru bertekanan negatif (vacuum).',
    question: 'Bagaimanakah kriteria ampul yang dinyatakan bocor pada pengujian tersebut?',
    options: [
      { key: 'A', text: 'Cairan di dalam ampul berubah warna menjadi biru setelah dibilas bagian luarnya' },
      { key: 'B', text: 'Ampul pecah berkeping-keping' },
      { key: 'C', text: 'Volume cairan bertambah dua kali lipat' },
      { key: 'D', text: 'Terbentuk endapan putih di dasar ampul' },
      { key: 'E', text: 'Larutan di dalam ampul menjadi keruh dan berbusa' }
    ],
    correctAnswer: 'A',
    explanation: 'Uji kebocoran ampul dengan larutan metilen biru 1%: ampul direndam dalam larutan warna dalam bejana vakum. Jika terdapat kebocoran kapiler mikro pada leher ampul, larutan warna biru akan terhisap masuk ke dalam ampul, sehingga larutan di dalam ampul yang bocor akan terkontaminasi warna biru.',
    clinicalReference: 'Voigt R. Buku Pelajaran Teknologi Farmasi',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1055',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Pada pembuatan sediaan injeksi NaCl 0,9%, larutan harus bersifat isotonis dengan cairan tubuh manusia (darah dan air mata).',
    question: 'Berapakah penurunan titik beku darah dan air mata manusia (delta Tf) yang dijadikan acuan larutan isotonis?',
    options: [
      { key: 'A', text: '-0,52°C' },
      { key: 'B', text: '0,00°C' },
      { key: 'C', text: '-1,86°C' },
      { key: 'D', text: '-0,90°C' },
      { key: 'E', text: '-10,0°C' }
    ],
    correctAnswer: 'A',
    explanation: 'Darah dan cairan lakrimal (air mata) manusia memiliki nilai penurunan titik beku (freezing point depression / delta Tf) konstan sebesar -0,52°C, yang setara dengan larutan NaCl 0,9% b/v. Larutan dengan delta Tf = -0,52°C bersifat isotonis.',
    clinicalReference: 'Martin A. Farmasi Fisika & Farmakope Indonesia',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1056',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Seorang TTK diminta menghitung jumlah NaCl yang harus ditambahkan agar 100 mL larutan Atropin Sulfat 1% (nilai E NaCl = 0,13) menjadi larutan isotonis.',
    question: 'Berapakah gram NaCl yang harus ditambahkan ke dalam sediaan tersebut?',
    options: [
      { key: 'A', text: '0,77 gram' },
      { key: 'B', text: '0,90 gram' },
      { key: 'C', text: '0,13 gram' },
      { key: 'D', text: '0,52 gram' },
      { key: 'E', text: '1,03 gram' }
    ],
    correctAnswer: 'A',
    explanation: 'Larutan isotonis 100 mL membutuhkan 0,9 g NaCl. Bobot Atropin Sulfat = 1% x 100 mL = 1 g. Kesetaraan Atropin Sulfat terhadap NaCl = 1 g x 0,13 = 0,13 g. Kekurangan NaCl yang harus ditambahkan = 0,90 g - 0,13 g = 0,77 gram.',
    clinicalReference: 'Ansel HC. Pengantar Bentuk Sediaan Farmasi & Kalkulasi Farmasetik',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1057',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Dalam evaluasi sediaan cair steril (infus dekstrosa 5%), TTK melakukan pemeriksaan partikulat melayang menggunakan latar belakang papan hitam dan putih berlampu terang (inspeksi visual).',
    question: 'Apakah tujuan penggunaan latar belakang warna hitam dan putih secara bergantian dalam uji tersebut?',
    options: [
      { key: 'A', text: 'Latar hitam untuk mendeteksi partikel terang/putih, dan latar putih untuk mendeteksi partikel gelap/hitam' },
      { key: 'B', text: 'Untuk menguji derajat keasaman pH larutan secara visual' },
      { key: 'C', text: 'Untuk memastikan botol tidak berdebu di bagian luarnya' },
      { key: 'D', text: 'Sebagai syarat estetika kemasan sekunder' },
      { key: 'E', text: 'Untuk menghitung kadar zat aktif tanpa spektrofotometer' }
    ],
    correctAnswer: 'A',
    explanation: 'Pemeriksaan kejernihan dan partikulat pada sediaan parenteral dilakukan di depan kotak inspeksi beriluminasi dengan latar belakang kontras ganda: latar hitam untuk mengamati partikel asing berwarna terang/reflektif, dan latar putih untuk mendeteksi partikel asing berwarna gelap/keruh.',
    clinicalReference: 'Farmakope Indonesia Edisi VI, Uji Partikulat dalam Injeksi <751>',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1058',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'TTK melakukan kalibrasi alat uji kekerasan tablet (Hardness Tester). Pengujian dilakukan terhadap 10 tablet amlodipin 10 mg.',
    question: 'Berapakah rentang kekerasan tablet biasa (oral non-kunyah) yang secara umum dianggap ideal dan memenuhi standar manufaktur farmasi?',
    options: [
      { key: 'A', text: '4 - 8 kg/cm2 (atau 40 - 80 N)' },
      { key: 'B', text: '0,5 - 1 kg/cm2' },
      { key: 'C', text: '15 - 25 kg/cm2' },
      { key: 'D', text: '50 - 100 kg/cm2' },
      { key: 'E', text: 'Tidak ada batas kekerasan minimum' }
    ],
    correctAnswer: 'A',
    explanation: 'Kekerasan tablet standar berkisar antara 4 - 8 kg/cm2 (sekitar 40 - 80 Newton). Tablet yang terlalu lunak (< 4 kg) akan mudah rapuh dan sompal saat pengemasan/distribusi, sedangkan yang terlalu keras (> 8-10 kg) dapat memperpanjang waktu hancur dan menghambat disolusi obat.',
    clinicalReference: 'Voigt R. Buku Pelajaran Teknologi Farmasi & Lachman L',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1059',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Dalam pengujian keseragaman sediaan Farmakope Indonesia, terdapat dua metode yaitu Keragaman Bobot (Weight Variation) dan Keseragaman Kandungan (Content Uniformity).',
    question: 'Kapan uji Keseragaman Kandungan (Content Uniformity) dipersyaratkan secara wajib untuk sediaan tablet?',
    options: [
      { key: 'A', text: 'Jika kadar zat aktif kurang dari 25 mg atau proporsi zat aktif kurang dari 25% dari bobot total tablet' },
      { key: 'B', text: 'Hanya jika tablet dibuat dengan metode kempa langsung' },
      { key: 'C', text: 'Hanya untuk tablet salut gula' },
      { key: 'D', text: 'Jika tablet berbobot lebih dari 1000 mg' },
      { key: 'E', text: 'Hanya untuk sediaan jamu herbal' }
    ],
    correctAnswer: 'A',
    explanation: 'Menurut Farmakope Indonesia dan USP, uji Keseragaman Kandungan (Content Uniformity) wajib diterapkan untuk tablet dengan kandungan zat aktif dosis rendah, yaitu < 25 mg atau jika perbandingan zat aktif terhadap bobot total tablet kurang dari 25%. Untuk tablet dosis besar (>= 25 mg dan >= 25%), cukup dilakukan uji Keragaman Bobot.',
    clinicalReference: 'Farmakope Indonesia Edisi VI, Keseragaman Sediaan <911>',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-1060',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'TTK mengoperasikan alat uji disolusi tipe 2 menurut Farmakope Indonesia untuk menguji pelepasan tablet glibenklamid.',
    question: 'Apakah nama komponen pengaduk pada alat disolusi tipe 2 Farmakope Indonesia?',
    options: [
      { key: 'A', text: 'Dayung (Paddle)' },
      { key: 'B', text: 'Keranjang (Basket)' },
      { key: 'C', text: 'Silinder bolak-balik (Reciprocating cylinder)' },
      { key: 'D', text: 'Flow-through cell' },
      { key: 'E', text: 'Magnetic bar stirrer' }
    ],
    correctAnswer: 'A',
    explanation: 'Alat Disolusi Farmakope Indonesia: Alat 1 adalah Tipe Keranjang (Basket), Alat 2 adalah Tipe Dayung (Paddle), Alat 3 adalah Tipe Silinder Bolak-Balik, dan Alat 4 adalah Sel Mengalir (Flow-through cell).',
    clinicalReference: 'Farmakope Indonesia Edisi VI, Uji Disolusi <1231>',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1061',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Pada hasil uji disolusi tahap 1 (S1) terhadap 6 tablet furosemid, dipersyaratkan nilai Q = 80% dalam waktu 30 menit.',
    question: 'Bagaimanakah kriteria penerimaan tahap 1 (S1) menurut Farmakope Indonesia?',
    options: [
      { key: 'A', text: 'Tiap unit tidak kurang dari Q + 5% (yaitu minimal 85%)' },
      { key: 'B', text: 'Rata-rata 6 tablet minimal 70%' },
      { key: 'C', text: 'Tidak ada tablet yang kurang dari Q - 15%' },
      { key: 'D', text: 'Tiap unit cukup mencapai 50%' },
      { key: 'E', text: 'Seluruh tablet harus larut 100% pada menit ke-5' }
    ],
    correctAnswer: 'A',
    explanation: 'Penerimaan disolusi S1 (6 tablet): Setiap unit tablet yang diuji tidak boleh kurang dari nilai Q + 5% (jika Q = 80%, maka setiap tablet minimal terdisolusi 85%). Jika tidak memenuhi S1, pengujian dilanjutkan ke tahap S2 dengan menambah 6 tablet lagi.',
    clinicalReference: 'Farmakope Indonesia Edisi VI, Uji Disolusi <1231>',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-1062',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Di ruang produksi sediaan padat, TTK menemukan bahwa permukaan tablet asam askorbat mengalami gerusan atau sompal di bagian tepi lingkaran setelah keluar dari mesin cetak berkecepatan tinggi.',
    question: 'Apakah nama jenis kerusakan tablet sompal pada bagian tepinya tersebut?',
    options: [
      { key: 'A', text: 'Chipping' },
      { key: 'B', text: 'Binding' },
      { key: 'C', text: 'Mottling' },
      { key: 'D', text: 'Double impression' },
      { key: 'E', text: 'Bridging' }
    ],
    correctAnswer: 'A',
    explanation: 'Chipping adalah kerusakan di mana tepi-tepi tablet terkelupas, sompal, atau pecah-pecah kecil saat keluar dari die atau selama penanganan mekanis, biasanya akibat punch yang rusak atau penyetelan mesin cetak yang kurang tepat.',
    clinicalReference: 'Lachman L. Teori dan Praktek Farmasi Industri',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1063',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Dalam pembuatan kapsul keras di apotek, TTK meracik serbuk parasetamol dan kafein ke dalam cangkang kapsul gelatin keras nomor 0.',
    question: 'Berapakah perkiraan kapasitas volume penampungan rata-rata cangkang kapsul nomor 0 tersebut?',
    options: [
      { key: 'A', text: '0,68 mL (sekitar 400 - 500 mg serbuk)' },
      { key: 'B', text: '1,37 mL' },
      { key: 'C', text: '0,13 mL' },
      { key: 'D', text: '3,00 mL' },
      { key: 'E', text: '0,05 mL' }
    ],
    correctAnswer: 'A',
    explanation: 'Ukuran cangkang kapsul standar dari terbesar ke terkecil adalah: 000 (1,37 mL), 00 (0,95 mL), 0 (0,68 mL ~ 500 mg), 1 (0,50 mL ~ 350 mg), 2 (0,37 mL ~ 250 mg), 3 (0,30 mL ~ 200 mg), 4 (0,21 mL ~ 150 mg), dan 5 (0,13 mL ~ 100 mg). Kapsul no. 0 menampung sekitar 0,68 mL.',
    clinicalReference: 'Ansel HC. Pengantar Bentuk Sediaan Farmasi',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1064',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'TTK memeriksa ruang penyimpanan cangkang kapsul gelatin kosong. Kelembapan udara (RH) di ruangan tersebut tercatat sangat tinggi mencapai 85%.',
    question: 'Apakah risiko yang terjadi pada cangkang kapsul gelatin jika disimpan pada kelembapan udara yang terlalu tinggi?',
    options: [
      { key: 'A', text: 'Cangkang kapsul menyerap air, menjadi lunak, lembek, dan saling menempel' },
      { key: 'B', text: 'Cangkang kapsul menjadi sangat rapuh dan mudah pecah' },
      { key: 'C', text: 'Cangkang kapsul berubah menjadi cair sepenuhnya' },
      { key: 'D', text: 'Warna cangkang kapsul luntur menjadi hitam' },
      { key: 'E', text: 'Volume cangkang kapsul menyusut 90%' }
    ],
    correctAnswer: 'A',
    explanation: 'Cangkang kapsul gelatin mengandung air sekitar 13 - 16%. Jika disimpan pada kelembaban tinggi (RH > 60%), kapsul akan menyerap uap air, kehilangan kekakuan, menjadi lunak, lengket, dan rentan terhadap pertumbuhan jamur. Sebaliknya, pada RH sangat rendah (< 30%), kapsul kehilangan air dan menjadi sangat rapuh (brittle).',
    clinicalReference: 'Lachman L. Teori dan Praktek Farmasi Industri & Farmakope Indonesia',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1065',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Dalam formula suspensi antasida, digunakan bahan gom arab (akasia) yang berfungsi mendispersikan fase padat agar tidak cepat mengendap.',
    question: 'Berapakah perbandingan baku bahan (Minyak : Air : Gom) menurut metode kontinental (metode gom kering) dalam pembuatan emulsi primer minyak lemak?',
    options: [
      { key: 'A', text: '4 : 2 : 1' },
      { key: 'B', text: '1 : 2 : 4' },
      { key: 'C', text: '2 : 2 : 1' },
      { key: 'D', text: '4 : 4 : 2' },
      { key: 'E', text: '3 : 2 : 1' }
    ],
    correctAnswer: 'A',
    explanation: 'Metode kontinental (dry gum method) untuk membuat emulsi primer dari minyak lemak (fixed oil) menggunakan perbandingan baku 4 bagian Minyak : 2 bagian Air : 1 bagian Gom Arab (4:2:1). Untuk minyak atsiri perbandingannya adalah 2:2:1.',
    clinicalReference: 'Ansel HC. Pengantar Bentuk Sediaan Farmasi',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1066',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Seorang TTK melakukan pengujian viskositas terhadap sirup obat batuk menggunakan Viskometer Ostwald pada suhu 25°C.',
    question: 'Hukum fisika dasar apakah yang mendasari prinsip pengukuran viskositas menggunakan Viskometer Kapiler Ostwald?',
    options: [
      { key: 'A', text: 'Hukum Poiseuille' },
      { key: 'B', text: 'Hukum Stokes' },
      { key: 'C', text: 'Hukum Fick I' },
      { key: 'D', text: 'Hukum Raoult' },
      { key: 'E', text: 'Hukum Archimedes' }
    ],
    correctAnswer: 'A',
    explanation: 'Viskometer Ostwald mengukur waktu yang diperlukan oleh sejumlah volume cairan untuk mengalir melalui pipa kapiler vertikal di bawah gaya gravitasi, yang didasarkan pada Hukum Poiseuille. Sedangkan Hukum Stokes mendasari laju pengendapan partikel suspensi.',
    clinicalReference: 'Sinko PJ. Martin Farmasi Fisika dan Ilmu Farmasetika',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1067',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Menurut Hukum Stokes, kecepatan pengendapan (sedimentasi) partikel dalam suspensi dipengaruhi oleh beberapa faktor formulasi.',
    question: 'Tindakan formulasi manakah yang paling efektif untuk memperlambat laju pengendapan partikel zat aktif pada suspensi berdasarkan Hukum Stokes?',
    options: [
      { key: 'A', text: 'Memperkecil ukuran diameter partikel dan meningkatkan viskositas cairan pembawa' },
      { key: 'B', text: 'Memperbesar ukuran partikel menjadi gumpalan kasar' },
      { key: 'C', text: 'Menurunkan viskositas cairan pembawa hingga encer seperti air' },
      { key: 'D', text: 'Meningkatkan percepatan gravitasi bumi' },
      { key: 'E', text: 'Memperbesar perbedaan bobot jenis partikel dengan medium' }
    ],
    correctAnswer: 'A',
    explanation: 'Rumus laju sedimentasi Stokes: v = [d^2 x (rho_s - rho_o) x g] / (18 x eta). Kecepatan pengendapan (v) sebanding dengan kuadrat diameter partikel (d^2) dan berbanding terbalik dengan viskositas pembawa (eta). Jadi memperkecil ukuran partikel dan menaikkan viskositas medium akan memperlambat pengendapan.',
    clinicalReference: 'Martin A. Farmasi Fisika Edisi Ketiga',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1068',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Dalam pembuatan sediaan tetes mata gentamisin sulfat, larutan harus steril, jernih, dan bebas dari partikel asing karena akan diaplikasikan langsung pada kornea mata.',
    question: 'Berapakah batas pH sediaan tetes mata yang dapat ditoleransi oleh mata tanpa menimbulkan rasa pedih dan air mata berlebih?',
    options: [
      { key: 'A', text: 'pH 6,5 - 8,5 (ideal eukinat pH 7,4)' },
      { key: 'B', text: 'pH 2,0 - 3,5' },
      { key: 'C', text: 'pH 9,5 - 11,0' },
      { key: 'D', text: 'pH 1,0 - 2,0' },
      { key: 'E', text: 'pH 12,0 - 13,0' }
    ],
    correctAnswer: 'A',
    explanation: 'pH cairan air mata normal manusia adalah sekitar 7,4. Mata dapat mentoleransi larutan oftalmik dengan rentang pH antara 6,5 hingga 8,5 (bahkan beberapa pustaka menyebutkan 6,0 - 8,0) dengan bantuan kapasitas dapar alami air mata.',
    clinicalReference: 'Farmakope Indonesia Edisi VI & Ansel HC',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1069',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Untuk sediaan tetes mata dosis ganda (multiple dose) tanpa perlakuan sekali pakai (strip minidose), harus ditambahkan bahan pengawet antimikroba.',
    question: 'Pengawet manakah yang paling banyak digunakan dalam sediaan tetes mata dosis ganda pada konsentrasi 0,01% b/v?',
    options: [
      { key: 'A', text: 'Benzalkonium Klorida (BKC)' },
      { key: 'B', text: 'Klorobutanol 5%' },
      { key: 'C', text: 'Formalin' },
      { key: 'D', text: 'Asam Sitrat' },
      { key: 'E', text: 'Etanol 70%' }
    ],
    correctAnswer: 'A',
    explanation: 'Benzalkonium Klorida (BKC) adalah surfaktan kationik garam amonium kuartener yang merupakan pengawet paling lazim digunakan dalam sediaan oftalmik dosis ganda pada konsentrasi lazim 0,01% b/v karena efektivitas spektrum luas dan kestabilannya.',
    clinicalReference: 'Handbook of Pharmaceutical Excipients & Farmakope Indonesia',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1070',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Dalam sistem pengolahan air untuk industri farmasi (Purified Water System), air sumur/PAM dilewatkan melalui membran semipermeabel di bawah tekanan tinggi untuk menghilangkan ion, mineral, dan mikroba.',
    question: 'Apakah nama teknologi pemurnian air farmasi tersebut?',
    options: [
      { key: 'A', text: 'Reverse Osmosis (RO / Osmosis Balik)' },
      { key: 'B', text: 'Destilasi uap sederhana' },
      { key: 'C', text: 'Elektroforesis kapiler' },
      { key: 'D', text: 'Sedimentasi alami' },
      { key: 'E', text: 'Kristalisasi fraksional' }
    ],
    correctAnswer: 'A',
    explanation: 'Reverse Osmosis (RO) adalah proses pemurnian air di mana air dialirkan melewati membran semipermeabel berpori sangat kecil di bawah tekanan hidrostatik melebihi tekanan osmotik, sehingga menyaring ion terlarut, kontaminan organik, dan pirogen untuk menghasilkan Air Murni (Purified Water).',
    clinicalReference: 'CPOB 2018 Sistem Pengolahan Air & ISPE Water System',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1071',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'TTK di bagian Quality Assurance (QA) menyiapkan prototipe dokumen yang memuat instruksi langkah demi langkah secara tertulis mengenai cara pengoperasian alat cetak tablet rotary.',
    question: 'Apakah nama dokumen resmi CPOB tersebut?',
    options: [
      { key: 'A', text: 'Prosedur Operasional Baku (POB / SOP)' },
      { key: 'B', text: 'Dokumen Catatan Bets Produksi' },
      { key: 'C', text: 'Spesifikasi Bahan Awal' },
      { key: 'D', text: 'Sertifikat Analisis (CoA)' },
      { key: 'E', text: 'Laporan Deviasi Bets' }
    ],
    correctAnswer: 'A',
    explanation: 'Prosedur Operasional Baku (POB / Standard Operating Procedure / SOP) adalah instruksi tertulis dan disetujui yang memberikan arahan rinci untuk melaksanakan operasi tertentu (seperti pengoperasian alat, pembersihan, pengujian QC, dan kalibrasi).',
    clinicalReference: 'Pedoman CPOB 2018, Dokumentasi Bab 10',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1072',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'Pada pengujian stabilitas dipercepat (accelerated stability testing) sediaan farmasi di climatic chamber menurut pedoman ICH/ASEAN Q1A, suhu dan kelembapan ruangan diatur pada kondisi ekstrem.',
    question: 'Berapakah suhu dan kelembapan relatif (RH) standar untuk uji stabilitas dipercepat zona IVB (Indonesia)?',
    options: [
      { key: 'A', text: '40°C ± 2°C / 75% RH ± 5%' },
      { key: 'B', text: '25°C ± 2°C / 60% RH ± 5%' },
      { key: 'C', text: '30°C ± 2°C / 65% RH ± 5%' },
      { key: 'D', text: '50°C ± 2°C / 90% RH ± 5%' },
      { key: 'E', text: '60°C ± 2°C / 100% RH' }
    ],
    correctAnswer: 'A',
    explanation: 'Menurut pedoman ASEAN Guideline on Stability Study of Drug Product dan ICH, kondisi uji stabilitas dipercepat (accelerated) adalah suhu 40°C ± 2°C dengan kelembaban relatif 75% RH ± 5% selama 6 bulan. Sedangkan uji stabilitas jangka panjang (real time) untuk Zona IVB adalah 30°C ± 2°C / 75% RH ± 5%.',
    clinicalReference: 'ASEAN Guideline on Stability Study & Petunjuk CPOB BPOM',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1073',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    vignette: 'TTK memeriksa ruang penyangga udara (airlock) yang memisahkan area koridor Kelas C dengan ruang bersih Kelas B di pabrik sediaan steril.',
    question: 'Apakah fungsi utama dari sistem Airlock (ruang antara berpenutup ganda) menurut CPOB?',
    options: [
      { key: 'A', text: 'Mencegah masuknya aliran udara terkontaminasi dari area yang kebersihannya lebih rendah ke area yang lebih bersih saat orang atau barang lewat' },
      { key: 'B', text: 'Tempat istirahat dan makan minum operator produksi' },
      { key: 'C', text: 'Tempat pembuangan limbah sisa bahan kimia' },
      { key: 'D', text: 'Ruangan untuk mencuci botol infus bekas' },
      { key: 'E', text: 'Tempat menyimpan arsip dokumen bets' }
    ],
    correctAnswer: 'A',
    explanation: 'Airlock (ruang penyangga udara) adalah ruang berpenutup dengan dua atau lebih pintu yang diselingi sistem interlock (pintu tidak dapat dibuka bersamaan). Tujuannya adalah mengendalikan aliran udara dan mencegah kontaminasi silang partikel antar ruangan dengan tingkat kebersihan berbeda.',
    clinicalReference: 'Pedoman CPOB 2018 Aneks 1 Pembuatan Produk Steril',
    difficulty: 'Mudah'
  }
];
