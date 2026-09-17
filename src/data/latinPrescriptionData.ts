import { LatinAbbreviation, LatinCategoryKey, SignaTranslationResult } from '../types';

export const LATIN_CATEGORIES: { key: LatinCategoryKey; label: string; icon: string; description: string }[] = [
  { key: 'all', label: 'Semua Kategori', icon: 'Sparkles', description: 'Semua singkatan Latin resep farmasi' },
  { key: 'waktu', label: 'Waktu & Aturan Minum', icon: 'Clock', description: 'Frekuensi minum, waktu sebelum/sesudah makan, & saat tidur' },
  { key: 'racikan', label: 'Perintah Racikan & Puyer', icon: 'FlaskConical', description: 'Metode pembuatan, pembagian dosis, d.t.d., & cangkang kapsul' },
  { key: 'sediaan', label: 'Bentuk Sediaan Obat', icon: 'Pill', description: 'Puyer, kapsul, tablet, salep, sirup, tetes, & supositoria' },
  { key: 'rute', label: 'Rute & Organ Tubuh', icon: 'Target', description: 'Mata, telinga, hidung, oral, pemakaian luar, rektal, & injeksi' },
  { key: 'takaran', label: 'Takaran & Sendok Obat', icon: 'Scale', description: 'Sendok makan (C), sendok teh (cth), sendok bubur (cp), tetes, & satuan' },
  { key: 'legalitas', label: 'Legalitas & Pengulangan', icon: 'FileText', description: 'Iterasi (iter), detur (det), ne det, cito!, P.I.M., & salinan resep' },
  { key: 'umum', label: 'Istilah Umum & Farmakope', icon: 'BookOpen', description: 'Pelarut, bahan alam, instruksi pengocokan, & catatan peracikan' }
];

export const LATIN_ABBREVIATIONS: LatinAbbreviation[] = [
  // ==================== WAKTU & ATURAN MINUM ====================
  {
    id: 'waktu-ac',
    abbr: 'a.c.',
    altAbbr: ['ac', 'ante coenam', 'a.coen.'],
    fullLatin: 'ante coenam',
    indonesianMeaning: 'sebelum makan',
    category: 'waktu',
    categoryLabel: 'Waktu & Aturan Minum',
    explanation: 'Diminum dalam kondisi lambung kosong, umumnya 30-60 menit sebelum jadwal makan. Contoh: Omeprazole, Sukralfat, Domperidon, Glimepirid.',
    exampleInRecipe: 's. 1 d.d. caps I a.c. (30 mnt a.c.)',
    recipeTranslation: 'Tandailah: 1 kali sehari 1 kapsul sebelum makan (30 menit sebelum makan)',
    tags: ['lambung kosong', 'sebelum makan', 'maag', 'absorpsi']
  },
  {
    id: 'waktu-pc',
    abbr: 'p.c.',
    altAbbr: ['pc', 'post coenam', 'p.coen.'],
    fullLatin: 'post coenam',
    indonesianMeaning: 'sesudah makan',
    category: 'waktu',
    categoryLabel: 'Waktu & Aturan Minum',
    explanation: 'Diminum segera setelah makan atau 15-30 menit setelah makan untuk mencegah iritasi lambung (NSAID) atau memaksimalkan absorpsi dengan lemak.',
    exampleInRecipe: 's. 3 d.d. tab I p.c.',
    recipeTranslation: 'Tandailah: 3 kali sehari 1 tablet sesudah makan',
    tags: ['sesudah makan', 'iritasi lambung', 'nsaid', 'analgesik']
  },
  {
    id: 'waktu-dc',
    abbr: 'd.c.',
    altAbbr: ['dc', 'durante coenam'],
    fullLatin: 'durante coenam',
    indonesianMeaning: 'pada waktu sedang makan (bersama suapan pertama/tengah makan)',
    category: 'waktu',
    categoryLabel: 'Waktu & Aturan Minum',
    explanation: 'Diminum bersamaan dengan makanan, misalnya pada suapan pertama makanan. Contoh: Akarbosa (Acarbose) untuk menghambat alfa-glukosidase.',
    exampleInRecipe: 's. 3 d.d. tab I d.c. (suapan pertama)',
    recipeTranslation: 'Tandailah: 3 kali sehari 1 tablet bersama suapan pertama makan',
    tags: ['bersama makan', 'akarbosa', 'diabetes']
  },
  {
    id: 'waktu-ic',
    abbr: 'i.c.',
    altAbbr: ['ic', 'inter coenam'],
    fullLatin: 'inter coenam',
    indonesianMeaning: 'di antara dua waktu makan',
    category: 'waktu',
    categoryLabel: 'Waktu & Aturan Minum',
    explanation: 'Diminum di sela-sela waktu makan (misal antara sarapan dan makan siang) agar lambung berada dalam kondisi relatif tenang/kosong.',
    exampleInRecipe: 's. 2 d.d. tab I i.c.',
    recipeTranslation: 'Tandailah: 2 kali sehari 1 tablet di antara dua waktu makan',
    tags: ['antara makan', 'lambung']
  },
  {
    id: 'waktu-om',
    abbr: 'o.m.',
    altAbbr: ['om', 'omni mane'],
    fullLatin: 'omni mane',
    indonesianMeaning: 'tiap pagi hari',
    category: 'waktu',
    categoryLabel: 'Waktu & Aturan Minum',
    explanation: 'Diminum rutin setiap pagi hari saat bangun tidur atau setelah sarapan. Cocok untuk diuretik (Furosemid) agar tidak mengganggu tidur malam karena buang air kecil.',
    exampleInRecipe: 's. 1 d.d. tab I o.m.',
    recipeTranslation: 'Tandailah: 1 kali sehari 1 tablet setiap pagi hari',
    tags: ['pagi', 'diuretik', 'rutin']
  },
  {
    id: 'waktu-on',
    abbr: 'o.n.',
    altAbbr: ['on', 'omni nocte'],
    fullLatin: 'omni nocte',
    indonesianMeaning: 'tiap malam hari',
    category: 'waktu',
    categoryLabel: 'Waktu & Aturan Minum',
    explanation: 'Diminum setiap malam hari menjelang istirahat malam. Contoh: obat kolesterol (Simvastatin karena sintesis kolesterol puncak di malam hari) atau obat yang menyebabkan kantuk.',
    exampleInRecipe: 's. 1 d.d. tab I o.n. (sebelum tidur)',
    recipeTranslation: 'Tandailah: 1 kali sehari 1 tablet tiap malam hari',
    tags: ['malam', 'kolesterol', 'statin', 'sedatif']
  },
  {
    id: 'waktu-hs',
    abbr: 'h.s.',
    altAbbr: ['hs', 'hora somni', 'v.s.', 'vespere somni'],
    fullLatin: 'hora somni',
    indonesianMeaning: 'pada waktu hendak tidur / menjelang tidur malam',
    category: 'waktu',
    categoryLabel: 'Waktu & Aturan Minum',
    explanation: 'Diminum sekitar 30 menit sebelum berbaring tidur. Sangat umum untuk hipnotik-sedatif, antialergi generasi pertama (CTM), dan supositoria.',
    exampleInRecipe: 's. 1 d.d. tab I h.s.',
    recipeTranslation: 'Tandailah: 1 kali sehari 1 tablet pada waktu hendak tidur malam',
    tags: ['tidur', 'malam', 'sedatif', 'antihistamin']
  },
  {
    id: 'waktu-m-et-v',
    abbr: 'm. et v.',
    altAbbr: ['m et v', 'mane et vespere', 'm.v.'],
    fullLatin: 'mane et vespere',
    indonesianMeaning: 'pagi dan sore (atau pagi dan malam)',
    category: 'waktu',
    categoryLabel: 'Waktu & Aturan Minum',
    explanation: 'Diberikan dengan jeda waktu seimbang antara pagi hari dan sore/malam hari (selang 12 jam).',
    exampleInRecipe: 's. 2 d.d. tab I m. et v.',
    recipeTranslation: 'Tandailah: 2 kali sehari 1 tablet pagi dan sore hari',
    tags: ['pagi sore', '12 jam', 'teratur']
  },
  {
    id: 'waktu-prn',
    abbr: 'p.r.n.',
    altAbbr: ['prn', 'pro re nata'],
    fullLatin: 'pro re nata',
    indonesianMeaning: 'jika diperlukan / bila perlu (misal jika demam atau nyeri)',
    category: 'waktu',
    categoryLabel: 'Waktu & Aturan Minum',
    explanation: 'Tidak harus dihabiskan. Obat hanya diminum jika gejala muncul (seperti Parasetamol untuk demam atau Ibuprofen untuk nyeri) dengan batas jeda waktu minimal.',
    exampleInRecipe: 's. p.r.n. tab I (febr./dol.) max 3 d.d.',
    recipeTranslation: 'Tandailah: bila perlu 1 tablet (jika demam/nyeri) maksimal 3 kali sehari',
    tags: ['bila perlu', 'analgesik', 'antipiretik', 'parasetamol']
  },
  {
    id: 'waktu-sos',
    abbr: 's.o.s.',
    altAbbr: ['sos', 'si opus sit'],
    fullLatin: 'si opus sit',
    indonesianMeaning: 'jika mendesak / bila keadaan darurat membutuhkan',
    category: 'waktu',
    categoryLabel: 'Waktu & Aturan Minum',
    explanation: 'Mirip dengan p.r.n., tetapi biasanya digunakan pada kondisi yang lebih urgen / emergency, misal ISDN sublingual saat nyeri dada angina.',
    exampleInRecipe: 's. s.o.s. tab I subling. (bila nyeri dada)',
    recipeTranslation: 'Tandailah: bila darurat/nyeri dada 1 tablet di bawah lidah',
    tags: ['darurat', 'angina', 'urgens', 'isdn']
  },
  {
    id: 'waktu-uc',
    abbr: 'u.c.',
    altAbbr: ['uc', 'usus cognitus', 'not. us.'],
    fullLatin: 'usus cognitus',
    indonesianMeaning: 'pemakaian sudah diketahui (aturan pakai sudah dijelaskan)',
    category: 'waktu',
    categoryLabel: 'Waktu & Aturan Minum',
    explanation: 'Digunakan jika pasien sudah sangat familiar dengan cara pakainya (misal obat rutin kronis) atau dokter telah menjelaskan langsung secara lisan.',
    exampleInRecipe: 's. u.c.',
    recipeTranslation: 'Tandailah: pemakaian sudah tahu',
    tags: ['sudah tahu', 'rutin', 'edukasi']
  },
  {
    id: 'waktu-sdd',
    abbr: 's.d.d.',
    altAbbr: ['sdd', 'semel in d.', 'semel de die', '1 d.d.'],
    fullLatin: 'semel de die',
    indonesianMeaning: '1 kali sehari (tiap 24 jam)',
    category: 'waktu',
    categoryLabel: 'Waktu & Aturan Minum',
    explanation: 'Diminum satu kali dalam jangka waktu 24 jam pada jam yang konsisten setiap harinya.',
    exampleInRecipe: 's. 1 d.d. tab I (tiap 24 jam)',
    recipeTranslation: 'Tandailah: 1 kali sehari 1 tablet pada jam yang sama',
    tags: ['1 kali', '24 jam', 'harian']
  },
  {
    id: 'waktu-bdd',
    abbr: 'b.d.d.',
    altAbbr: ['bdd', 'b.i.d.', 'bid', 'bis de die', 'bis in die', '2 d.d.'],
    fullLatin: 'bis de die / bis in die',
    indonesianMeaning: '2 kali sehari (tiap 12 jam)',
    category: 'waktu',
    categoryLabel: 'Waktu & Aturan Minum',
    explanation: 'Diminum dua kali sehari dengan jarak antar minum yang ideal adalah 12 jam (misal jam 07.00 pagi dan jam 19.00 malam).',
    exampleInRecipe: 's. 2 d.d. tab I p.c.',
    recipeTranslation: 'Tandailah: 2 kali sehari 1 tablet sesudah makan (selang 12 jam)',
    tags: ['2 kali', '12 jam', 'antibiotik']
  },
  {
    id: 'waktu-tdd',
    abbr: 't.d.d.',
    altAbbr: ['tdd', 't.i.d.', 'tid', 'ter de die', 'ter in die', '3 d.d.'],
    fullLatin: 'ter de die / ter in die',
    indonesianMeaning: '3 kali sehari (tiap 8 jam)',
    category: 'waktu',
    categoryLabel: 'Waktu & Aturan Minum',
    explanation: 'Diminum tiga kali sehari dengan jarak waktu ideal setiap 8 jam (misal jam 06.00, 14.00, dan 22.00) agar kadar obat stabil di dalam darah.',
    exampleInRecipe: 's. 3 d.d. cth I p.c.',
    recipeTranslation: 'Tandailah: 3 kali sehari 1 sendok teh (5 mL) sesudah makan (tiap 8 jam)',
    tags: ['3 kali', '8 jam', 'puyer', 'sirup']
  },
  {
    id: 'waktu-qdd',
    abbr: 'q.d.d.',
    altAbbr: ['qdd', 'q.i.d.', 'qid', 'quater de die', 'quater in die', '4 d.d.'],
    fullLatin: 'quater de die / quater in die',
    indonesianMeaning: '4 kali sehari (tiap 6 jam)',
    category: 'waktu',
    categoryLabel: 'Waktu & Aturan Minum',
    explanation: 'Diminum empat kali sehari dengan interval ideal setiap 6 jam (misal jam 06.00, 12.00, 18.00, 24.00). Sering untuk Amoksisilin, Eritromisin, atau Parasetamol.',
    exampleInRecipe: 's. 4 d.d. pulv I p.c.',
    recipeTranslation: 'Tandailah: 4 kali sehari 1 bungkus puyer sesudah makan (tiap 6 jam)',
    tags: ['4 kali', '6 jam', 'amoksisilin']
  },
  {
    id: 'waktu-qh',
    abbr: 'q.h.',
    altAbbr: ['qh', 'quaque hora', '1 q.h.'],
    fullLatin: 'quaque hora',
    indonesianMeaning: 'tiap jam (setiap 1 jam sekali)',
    category: 'waktu',
    categoryLabel: 'Waktu & Aturan Minum',
    explanation: 'Digunakan untuk terapi intensif jangka pendek, seperti tetes mata steroid/antibiotik pada ulkus kornea berat atau dehidrasi oralit.',
    exampleInRecipe: 's. q.h. gtt II o.d.',
    recipeTranslation: 'Tandailah: tiap 1 jam teteskan 2 tetes pada mata kanan',
    tags: ['tiap jam', 'tetes mata', 'intensif']
  },
  {
    id: 'waktu-q2h',
    abbr: 'q.2.h.',
    altAbbr: ['q2h', 'quaque secunda hora'],
    fullLatin: 'quaque secunda hora',
    indonesianMeaning: 'tiap 2 jam sekali',
    category: 'waktu',
    categoryLabel: 'Waktu & Aturan Minum',
    explanation: 'Diberikan dengan interval setiap 2 jam sekali pada waktu terjaga.',
    exampleInRecipe: 's. q.2.h. gtt I o.s.',
    recipeTranslation: 'Tandailah: tiap 2 jam 1 tetes pada mata kiri',
    tags: ['tiap 2 jam', 'interval']
  },
  {
    id: 'waktu-q4h',
    abbr: 'q.4.h.',
    altAbbr: ['q4h', 'quaque quarta hora'],
    fullLatin: 'quaque quarta hora',
    indonesianMeaning: 'tiap 4 jam sekali',
    category: 'waktu',
    categoryLabel: 'Waktu & Aturan Minum',
    explanation: 'Diberikan setiap 4 jam (total 6 kali dalam 24 jam). Sering digunakan untuk Asiklovir oral (Acyclovir 200 mg q4h saat bangun tidur).',
    exampleInRecipe: 's. q.4.h. tab I (saat terjaga)',
    recipeTranslation: 'Tandailah: tiap 4 jam 1 tablet waktu bangun',
    tags: ['tiap 4 jam', 'asiklovir', 'antivirus']
  },
  {
    id: 'waktu-qd',
    abbr: 'q.d.',
    altAbbr: ['qd', 'quaque die', 'q1d'],
    fullLatin: 'quaque die',
    indonesianMeaning: 'setiap hari (1 kali sehari)',
    category: 'waktu',
    categoryLabel: 'Waktu & Aturan Minum',
    explanation: 'Artinya setiap hari (sekali sehari). Namun terdaftar dalam ISMP "Do Not Use List" karena tulisan tangan q.d. sering terbaca keliru sebagai q.i.d. (4 kali sehari) atau q.o.d. (selang sehari).',
    exampleInRecipe: 's. q.d. tab I (Disarankan tulis: 1 x sehari)',
    recipeTranslation: 'Tandailah: 1 kali sehari 1 tablet (Gunakan singkatan aman: 1 d.d. / 1x sehari)',
    isHighAlertWarning: true,
    warningDetails: 'ISMP & KARS HIGH-ALERT WARNING: Singkatan "q.d." dilarang dalam akreditasi rumah sakit karena rawan salah baca menjadi "q.i.d." (4 kali sehari) yang memicu overdosis 400%!',
    tags: ['bahaya', 'ismp', 'kars', 'do not use']
  },
  {
    id: 'waktu-qod',
    abbr: 'q.o.d.',
    altAbbr: ['qod', 'quaque altera die'],
    fullLatin: 'quaque altera die',
    indonesianMeaning: 'selang-seling sehari (setiap dua hari sekali)',
    category: 'waktu',
    categoryLabel: 'Waktu & Aturan Minum',
    explanation: 'Diminum berselang 1 hari (hari ini minum, besok tidak, lusa minum). Biasa untuk terapi kortikosteroid dosis selang-seling.',
    exampleInRecipe: 's. q.o.d. tab I mane p.c.',
    recipeTranslation: 'Tandailah: selang satu hari 1 tablet pagi sesudah makan',
    isHighAlertWarning: true,
    warningDetails: 'ISMP HIGH-ALERT: Singkatan "q.o.d." rawan salah baca sebagai "q.d." (tiap hari) karena huruf "o" bisa tampak menyerupai titik. Dianjurkan menulis "setiap 2 hari sekali".',
    tags: ['selang sehari', 'kortikosteroid', 'ismp']
  },
  {
    id: 'waktu-statim',
    abbr: 'stat.',
    altAbbr: ['stat', 'statim'],
    fullLatin: 'statim',
    indonesianMeaning: 'segera / saat ini juga tanpa ditunda',
    category: 'waktu',
    categoryLabel: 'Waktu & Aturan Minum',
    explanation: 'Dosis awal (loading dose) atau injeksi emergensi yang harus langsung diberikan detik itu juga pada pasien.',
    exampleInRecipe: 'inj. Diazepam 10 mg stat. i.v.',
    recipeTranslation: 'Suntikkan Diazepam 10 mg segera secara intravena',
    tags: ['segera', 'loading dose', 'emergensi', 'ugd']
  },
  {
    id: 'waktu-fi',
    abbr: 'f.i.',
    altAbbr: ['fi', 'febri incidente'],
    fullLatin: 'febri incidente',
    indonesianMeaning: 'pada waktu demam menyerang',
    category: 'waktu',
    categoryLabel: 'Waktu & Aturan Minum',
    explanation: 'Diberikan hanya apabila suhu tubuh anak/pasien naik mengalami demam (misal puyer parasetamol atau diazepam profilaksis kejang demam).',
    exampleInRecipe: 's. f.i. pulv I p.r.n.',
    recipeTranslation: 'Tandailah: bila demam berikan 1 bungkus puyer',
    tags: ['demam', 'anak', 'kejang demam', 'puyer']
  },
  {
    id: 'waktu-prim-m',
    abbr: 'prim. m.',
    altAbbr: ['primo mane', 'prim. mane'],
    fullLatin: 'primo mane',
    indonesianMeaning: 'pagi-pagi sekali sewaktu bangun tidur',
    category: 'waktu',
    categoryLabel: 'Waktu & Aturan Minum',
    explanation: 'Diminum begitu mata terbuka di pagi hari, sebelum sarapan atau beraktivitas. Sangat tepat untuk Levotiroksin atau Alendronat (obat osteoporosis).',
    exampleInRecipe: 's. 1 d.d. tab I prim. m. (30 mnt sblm sarapan)',
    recipeTranslation: 'Tandailah: 1 kali sehari 1 tablet pagi-pagi sekali 30 menit sebelum sarapan',
    tags: ['pagi sekali', 'levotiroksin', 'osteoporosis']
  },
  {
    id: 'waktu-haust',
    abbr: 'haust.',
    altAbbr: ['haustus'],
    fullLatin: 'haustus',
    indonesianMeaning: 'diminum sekaligus habis (sekali teguk)',
    category: 'waktu',
    categoryLabel: 'Waktu & Aturan Minum',
    explanation: 'Cairan atau suspensi obat yang dirancang untuk langsung dihabiskan dalam 1 kali minum, tidak boleh dibagi-bagi.',
    exampleInRecipe: 's. haust. stat.',
    recipeTranslation: 'Tandailah: diminum sekaligus habis segera',
    tags: ['sekaligus', 'sekali teguk']
  },

  // ==================== PERINTAH RACIKAN & FORMULASI ====================
  {
    id: 'racikan-mfla',
    abbr: 'm.f.l.a.',
    altAbbr: ['mfla', 'misce fac lege artis', 'm.f.l.art.'],
    fullLatin: 'misce fac lege artis',
    indonesianMeaning: 'campur dan buatlah menurut aturan keahlian / seni kefarmasian',
    category: 'racikan',
    categoryLabel: 'Perintah Racikan & Formulasi',
    explanation: 'Instruksi fundamental dokter kepada apoteker/asisten apoteker untuk meracik sediaan secara homogen, stabil, dan memenuhi standar Farmakope Indonesia.',
    exampleInRecipe: 'm.f.l.a. pulv. d.t.d. No. X da in caps.',
    recipeTranslation: 'Campur dan buatlah menurut aturan seni serbuk puyer dengan dosis demikian sebanyak 10 bungkus masukkan ke dalam cangkang kapsul',
    tags: ['racikan', 'puyer', 'seni farmasi', 'wajib']
  },
  {
    id: 'racikan-dtd',
    abbr: 'd.t.d.',
    altAbbr: ['dtd', 'da tales doses', 'd.t.dos.'],
    fullLatin: 'da tales doses',
    indonesianMeaning: 'berikan dalam dosis demikian (bobot/dosis per satu bungkus)',
    category: 'racikan',
    categoryLabel: 'Perintah Racikan & Formulasi',
    explanation: 'SANGAT PENTING: Jika ada d.t.d., jumlah miligram pada resep adalah dosis untuk SATU bungkus/kapsul. Total bahan yang ditimbang = dosis tertulis dikalikan jumlah nomor (No. X). Jika TANPA d.t.d., dosis tertulis adalah untuk SELURUH puyer yang kemudian dibagi rata.',
    exampleInRecipe: 'Paracetamol 250 mg \n m.f. pulv. d.t.d. No. X',
    recipeTranslation: 'Ambillah Parasetamol 250 mg per bungkus, buatlah serbuk bagi dengan takaran demikian sebanyak 10 bungkus (Total timbang = 2500 mg)',
    tags: ['dtd', 'dosis puyer', 'perhitungan racikan', 'krusial']
  },
  {
    id: 'racikan-da-in-caps',
    abbr: 'da in caps.',
    altAbbr: ['da in caps', 'da in capsulas', 'd.i.caps.'],
    fullLatin: 'da in capsulas',
    indonesianMeaning: 'masukkan ke dalam cangkang kapsul',
    category: 'racikan',
    categoryLabel: 'Perintah Racikan & Formulasi',
    explanation: 'Serbuk racikan tidak dibungkus kertas perkamen puyer, melainkan dimasukkan ke cangkang kapsul keras (gelatin) sesuai nomor ukuran kapsul (00, 0, 1, 2, dst.).',
    exampleInRecipe: 'm.f.l.a. pulv. d.t.d. No. XV da in caps.',
    recipeTranslation: 'Campur dan buatlah menurut aturan seni serbuk bagi takaran demikian sebanyak 15 bungkus, masukkan ke dalam cangkang kapsul',
    tags: ['kapsul', 'cangkang', 'racikan kapsul']
  },
  {
    id: 'racikan-aa',
    abbr: 'aa',
    altAbbr: ['ana', 'a.a.'],
    fullLatin: 'ana',
    indonesianMeaning: 'masing-masing sama banyak',
    category: 'racikan',
    categoryLabel: 'Perintah Racikan & Formulasi',
    explanation: 'Dituliskan di belakang dua atau lebih bahan obat, artinya masing-masing bahan obat tersebut diambil dalam jumlah yang sama dengan angka yang tertera.',
    exampleInRecipe: 'Dexamethasone 0.5 mg \n Salbutamol 2 mg \n aa d.t.d. No. X',
    recipeTranslation: 'Masing-masing bahan diambil sejumlah tertulis (masing-masing 10 tablet)',
    tags: ['sama banyak', 'ana', 'bobot']
  },
  {
    id: 'racikan-aa-ad',
    abbr: 'aa ad',
    altAbbr: ['ana ad', 'a.a. ad'],
    fullLatin: 'ana ad',
    indonesianMeaning: 'masing-masing sama banyak sampai berat/volume tertentu',
    category: 'racikan',
    categoryLabel: 'Perintah Racikan & Formulasi',
    explanation: 'Digunakan pada kombinasi pembawa/basis salep atau sirup, di mana selisih sisa bobot dibagi sama rata di antara komponen pembawa tersebut.',
    exampleInRecipe: 'Vaselin album \n Adeps lanae aa ad 50 g',
    recipeTranslation: 'Vaselin album dan Adeps lanae masing-masing sama banyak hingga mencapai total 50 gram',
    tags: ['basis', 'salep', 'pembawa']
  },
  {
    id: 'racikan-ad',
    abbr: 'ad',
    altAbbr: ['ad.'],
    fullLatin: 'ad',
    indonesianMeaning: 'sampai / genapkan hingga',
    category: 'racikan',
    categoryLabel: 'Perintah Racikan & Formulasi',
    explanation: 'Menunjukkan batas akhir volume atau berat total. Contoh: "Aqua dest. ad 100 mL" artinya tambahkan aquadest secukupnya hingga volume total larutan tepat 100 mL.',
    exampleInRecipe: 'Sirupus Simplex ad 100 mL',
    recipeTranslation: 'Tambahkan Sirup Simpleks hingga volume total menjadi 100 mL',
    tags: ['genapkan', 'volume total', 'sirup']
  },
  {
    id: 'racikan-qs',
    abbr: 'q.s.',
    altAbbr: ['qs', 'quantum satis', 'quantum sufficit'],
    fullLatin: 'quantum satis / quantum sufficit',
    indonesianMeaning: 'secukupnya / dalam jumlah yang memadai',
    category: 'racikan',
    categoryLabel: 'Perintah Racikan & Formulasi',
    explanation: 'Digunakan untuk bahan tambahan seperti zat pewarna (corrigens coloris), pemanis (corrigens saporis), atau pembawa suspensi (PGA/CMC-Na) yang ditambahkan secukupnya sampai sediaan memenuhi syarat.',
    exampleInRecipe: 'Sirupus Thymi q.s. \n m.f. potio 100 mL',
    recipeTranslation: 'Sirup Thymi secukupnya, campur dan buatlah sirup obat minum 100 mL',
    tags: ['secukupnya', 'pembantu', 'perasa']
  },
  {
    id: 'racikan-div-in-part-aeq',
    abbr: 'div. in part. aeq.',
    altAbbr: ['divide in partes aequales', 'div in part aeq'],
    fullLatin: 'divide in partes aequales',
    indonesianMeaning: 'bagilah menjadi bagian-bagian yang sama rata',
    category: 'racikan',
    categoryLabel: 'Perintah Racikan & Formulasi',
    explanation: 'Menegaskan bahwa total campuran obat yang telah digerus harus dibagi rata ke sejumlah bungkus yang diminta (metode puyer tanpa d.t.d.).',
    exampleInRecipe: 'm.f. pulv. div. in part. aeq. No. X',
    recipeTranslation: 'Campur dan buatlah serbuk, lalu bagilah menjadi 10 bagian yang sama rata',
    tags: ['bagi rata', 'puyer', 'timbangan']
  },
  {
    id: 'racikan-da-in-duplo',
    abbr: 'da in 2plo',
    altAbbr: ['da in duplo', 'in duplo', 'da in 2 plo'],
    fullLatin: 'da in duplo',
    indonesianMeaning: 'berikan dua kali lipat banyaknya',
    category: 'racikan',
    categoryLabel: 'Perintah Racikan & Formulasi',
    explanation: 'Dokter meminta apotek membuatkan resep dengan jumlah obat 2x lipat dari jumlah nomor sediaan yang tertera.',
    exampleInRecipe: 'R/ Salep 2-4 No. I da in 2plo',
    recipeTranslation: 'Buatkan Salep 2-4 sebanyak 2 kali lipat formula aslinya (2 pot)',
    tags: ['dua kali', 'kelipatan', 'salep']
  },
  {
    id: 'racikan-da-in-dimidio',
    abbr: 'da in dim.',
    altAbbr: ['da in dimidio', 'in dimidio'],
    fullLatin: 'da in dimidio',
    indonesianMeaning: 'berikan separuhnya (setengah dari jumlah)',
    category: 'racikan',
    categoryLabel: 'Perintah Racikan & Formulasi',
    explanation: 'Apotek diperintahkan memberikan setengah dari jumlah sediaan resep, biasanya atas pertimbangan masa kadaluarsa (BUD) atau permintaan pasien.',
    exampleInRecipe: 'm.f. pulv. d.t.d. No. XX da in dim.',
    recipeTranslation: 'Buatlah puyer takaran demikian sebanyak 20 bungkus, berikan separuhnya saja (10 bungkus)',
    tags: ['setengah', 'separuh', 'hemat']
  },
  {
    id: 'racikan-recenter',
    abbr: 'rec.',
    altAbbr: ['recenter', 'par. rec.'],
    fullLatin: 'recenter',
    indonesianMeaning: 'dibuat segar / baru diracik saat hendak diserahkan',
    category: 'racikan',
    categoryLabel: 'Perintah Racikan & Formulasi',
    explanation: 'Untuk sediaan yang tidak stabil jika disimpan lama, seperti suspensi rekonstitusi kloramfenikol atau emulsi tanpa pengawet.',
    exampleInRecipe: 'paratus recenter (recenter paratus)',
    recipeTranslation: 'Harus dibuat baru secara mendadak / segar saat diracik',
    tags: ['segar', 'baru', 'stabilitas', 'bud']
  },
  {
    id: 'racikan-subtilis',
    abbr: 'subt.',
    altAbbr: ['subtilis', 'pulv. subt.'],
    fullLatin: 'subtilis',
    indonesianMeaning: 'sangat halus (diayak dengan ayakan standar)',
    category: 'racikan',
    categoryLabel: 'Perintah Racikan & Formulasi',
    explanation: 'Khususnya untuk serbuk tabur (pulvis adspersorius) agar tidak menimbulkan iritasi mekanik pada luka kulit (harus lolos ayakan B40/B100).',
    exampleInRecipe: 'm.f. pulv. subt. adsp. 50 g',
    recipeTranslation: 'Campur dan buatlah serbuk tabur yang sangat halus 50 gram',
    tags: ['halus', 'serbuk tabur', 'ayakan']
  },
  {
    id: 'racikan-sine',
    abbr: 'sine',
    altAbbr: ['s.'],
    fullLatin: 'sine',
    indonesianMeaning: 'tanpa / hilangkan bahan...',
    category: 'racikan',
    categoryLabel: 'Perintah Racikan & Formulasi',
    explanation: 'Instruksi untuk meracik formula standar tanpa mengikutsertakan salah satu komponen tertentu (misal pasien alergi menthol: Unguentum contra tussim sine mentholo).',
    exampleInRecipe: 'R/ OBH 100 mL sine Ammon. Chlorid.',
    recipeTranslation: 'Buatkan OBH 100 mL tanpa Amonium Klorida',
    tags: ['tanpa', 'alergi', 'modifikasi formula']
  },

  // ==================== BENTUK SEDIAAN OBAT ====================
  {
    id: 'sediaan-pulv',
    abbr: 'pulv.',
    altAbbr: ['pulv', 'pulvis', 'pulveres'],
    fullLatin: 'pulvis (tunggal) / pulveres (jamak)',
    indonesianMeaning: 'serbuk tak terbagi (pulvis) / serbuk bagi / puyer (pulveres)',
    category: 'sediaan',
    categoryLabel: 'Bentuk Sediaan Obat',
    explanation: 'Bentuk sediaan padat berupa serbuk. Jika pulveres (jamak), berarti puyer yang dibagi-bagi ke dalam kertas perkamen khusus anak/pasien geriatri.',
    exampleInRecipe: 'm.f.l.a. pulv. d.t.d. No. XII',
    recipeTranslation: 'Campur dan buatlah serbuk bagi/puyer takaran demikian sebanyak 12 bungkus',
    tags: ['puyer', 'serbuk', 'pediatri']
  },
  {
    id: 'sediaan-pulv-adsp',
    abbr: 'pulv. adsp.',
    altAbbr: ['pulvis adspersorius'],
    fullLatin: 'pulvis adspersorius',
    indonesianMeaning: 'serbuk tabur untuk pemakaian luar',
    category: 'sediaan',
    categoryLabel: 'Bentuk Sediaan Obat',
    explanation: 'Serbuk tak terbagi yang digunakan langsung pada permukaan kulit (misal bedak salisil talkum). Tidak boleh dipakai pada luka terbuka berdarah.',
    exampleInRecipe: 's. u.e. pulv. adsp.',
    recipeTranslation: 'Tandailah: obat luar, taburkan serbuk tabur pada kulit',
    tags: ['bedak', 'serbuk tabur', 'salisil']
  },
  {
    id: 'sediaan-caps',
    abbr: 'caps.',
    altAbbr: ['caps', 'capsulae'],
    fullLatin: 'capsulae',
    indonesianMeaning: 'kapsul',
    category: 'sediaan',
    categoryLabel: 'Bentuk Sediaan Obat',
    explanation: 'Sediaan padat berbungkus cangkang keras gelatin atau pati lunak (softgel) untuk menutupi rasa pahit dan bau tidak sedap bahan aktif.',
    exampleInRecipe: 's. 2 d.d. caps I p.c.',
    recipeTranslation: 'Tandailah: 2 kali sehari 1 kapsul sesudah makan',
    tags: ['kapsul', 'cangkang']
  },
  {
    id: 'sediaan-tab',
    abbr: 'tab.',
    altAbbr: ['tab', 'tabulae', 'compr.', 'compressi'],
    fullLatin: 'tabulae / compressi',
    indonesianMeaning: 'tablet kempa',
    category: 'sediaan',
    categoryLabel: 'Bentuk Sediaan Obat',
    explanation: 'Sediaan padat kompak pipih hasil cetak kempa mesin. Termasuk tablet salut selaput (FC), salut enterik (EC), maupun lepas lambat (SR/XR).',
    exampleInRecipe: 's. 1 d.d. tab I',
    recipeTranslation: 'Tandailah: 1 kali sehari 1 tablet',
    tags: ['tablet', 'padat']
  },
  {
    id: 'sediaan-troch',
    abbr: 'troch.',
    altAbbr: ['trochisci', 'lozenge'],
    fullLatin: 'trochisci',
    indonesianMeaning: 'tablet hisap (lozenge)',
    category: 'sediaan',
    categoryLabel: 'Bentuk Sediaan Obat',
    explanation: 'Tablet yang dirancang untuk dihisap perlahan di dalam rongga mulut guna melepaskan antiseptik/anestetik lokal untuk radang tenggorokan (contoh: Degirol, SP Troches, FG Troches).',
    exampleInRecipe: 's. 4 d.d. troch I (hisap perlahan)',
    recipeTranslation: 'Tandailah: 4 kali sehari 1 tablet hisap perlahan di mulut',
    tags: ['tablet hisap', 'tenggorokan', 'lozenge']
  },
  {
    id: 'sediaan-pil',
    abbr: 'pil.',
    altAbbr: ['pilulae'],
    fullLatin: 'pilulae',
    indonesianMeaning: 'pil bulat kecil',
    category: 'sediaan',
    categoryLabel: 'Bentuk Sediaan Obat',
    explanation: 'Sediaan padat berbentuk bola kecil berbobot 100-500 mg yang dibuat menggunakan zat pengikat dan pembulat.',
    exampleInRecipe: 's. 3 d.d. pil II',
    recipeTranslation: 'Tandailah: 3 kali sehari 2 butir pil',
    tags: ['pil', 'jamu']
  },
  {
    id: 'sediaan-sol',
    abbr: 'sol.',
    altAbbr: ['solutio'],
    fullLatin: 'solutio',
    indonesianMeaning: 'larutan (fase tunggal cair)',
    category: 'sediaan',
    categoryLabel: 'Bentuk Sediaan Obat',
    explanation: 'Sediaan cair yang mengandung satu atau lebih zat kimia terlarut secara homogen sempurna dalam pelarut air atau hidroalkohol.',
    exampleInRecipe: 'm.f. sol. 100 mL',
    recipeTranslation: 'Campur dan buatlah larutan 100 mL',
    tags: ['larutan', 'cair', 'homogen']
  },
  {
    id: 'sediaan-susp',
    abbr: 'susp.',
    altAbbr: ['suspensio'],
    fullLatin: 'suspensio',
    indonesianMeaning: 'suspensi (partikel padat terdispersi dalam cairan)',
    category: 'sediaan',
    categoryLabel: 'Bentuk Sediaan Obat',
    explanation: 'Sediaan cair mengandung partikel padat halus tidak larut yang terdispersi dalam fase cair. Wajib diberi etiket: "KOCOK DAHULU" (Agita ante sumendum).',
    exampleInRecipe: 's. 3 d.d. cth I p.c. (agit.)',
    recipeTranslation: 'Tandailah: 3 kali sehari 1 sendok teh sesudah makan (kocok dahulu)',
    tags: ['suspensi', 'kocok dahulu', 'antasida', 'sukralfat']
  },
  {
    id: 'sediaan-emuls',
    abbr: 'emuls.',
    altAbbr: ['emulsum'],
    fullLatin: 'emulsum',
    indonesianMeaning: 'emulsi (minyak dan air dengan emulgator)',
    category: 'sediaan',
    categoryLabel: 'Bentuk Sediaan Obat',
    explanation: 'Sistem dua fase cair yang tidak saling bercampur (minyak dalam air atau air dalam minyak) yang distabilkan dengan zat pengemulsi (seperti gom arab / pulvis gummi arabici).',
    exampleInRecipe: 'm.f. emuls. 150 mL',
    recipeTranslation: 'Campur dan buatlah sediaan emulsi 150 mL',
    tags: ['emulsi', 'minyak ikan', 'pga']
  },
  {
    id: 'sediaan-syr',
    abbr: 'syr.',
    altAbbr: ['sirupus'],
    fullLatin: 'sirupus',
    indonesianMeaning: 'sirup (cairan manis pekat)',
    category: 'sediaan',
    categoryLabel: 'Bentuk Sediaan Obat',
    explanation: 'Larutan gula pekat (sukrosa 64-66% untuk Sirupus Simplex) yang berfungsi sebagai pembawa sekaligus pemanis dan pengawet alami.',
    exampleInRecipe: 's. 3 d.d. cth I syr.',
    recipeTranslation: 'Tandailah: 3 kali sehari 1 sendok teh sirup',
    tags: ['sirup', 'manis', 'sukrosa']
  },
  {
    id: 'sediaan-gtt',
    abbr: 'gtt.',
    altAbbr: ['guttae', 'gtt'],
    fullLatin: 'guttae',
    indonesianMeaning: 'tetes / obat tetes',
    category: 'sediaan',
    categoryLabel: 'Bentuk Sediaan Obat',
    explanation: 'Sediaan tetes untuk oral (pediatrik drops), mata (guttae ophthalmicae), telinga (guttae auriculares), atau hidung (guttae nasales).',
    exampleInRecipe: 's. 3 d.d. gtt II auric. dext.',
    recipeTranslation: 'Tandailah: 3 kali sehari 2 tetes pada telinga kanan',
    tags: ['tetes', 'telinga', 'mata', 'hidung']
  },
  {
    id: 'sediaan-ungt',
    abbr: 'ungt.',
    altAbbr: ['unguentum'],
    fullLatin: 'unguentum',
    indonesianMeaning: 'salep berlemak',
    category: 'sediaan',
    categoryLabel: 'Bentuk Sediaan Obat',
    explanation: 'Sediaan setengah padat berbasis lemak/hidrokarbon (vaselin) yang tidak tembus air (oklusif), sangat cocok untuk lesi kulit kering, bersisik, atau kronis.',
    exampleInRecipe: 's. 2 d.d. ungt. part. dol.',
    recipeTranslation: 'Tandailah: 2 kali sehari oleskan tipis salep pada bagian kulit yang sakit',
    tags: ['salep', 'kulit kering', 'vaselin']
  },
  {
    id: 'sediaan-crem',
    abbr: 'crem.',
    altAbbr: ['cremor'],
    fullLatin: 'cremor',
    indonesianMeaning: 'krim (emulsi setengah padat m/a atau a/m)',
    category: 'sediaan',
    categoryLabel: 'Bentuk Sediaan Obat',
    explanation: 'Sediaan setengah padat mengandung air banyak, nyaman dicuci, cocok untuk lesi kulit akut, basah, berair, atau area lipatan tubuh.',
    exampleInRecipe: 's. 2 d.d. crem. u.e. loc. aegr.',
    recipeTranslation: 'Tandailah: 2 kali sehari oleskan krim obat luar pada area yang sakit',
    tags: ['krim', 'lesi basah', 'lipatan']
  },
  {
    id: 'sediaan-gel',
    abbr: 'gel.',
    altAbbr: ['gelatina', 'jelly'],
    fullLatin: 'gelatina',
    indonesianMeaning: 'gel hidrofilik dingin tanpa lemak',
    category: 'sediaan',
    categoryLabel: 'Bentuk Sediaan Obat',
    explanation: 'Basis semi padat polimer jernih hidrofilik (karbomer/HPMC) yang memberikan sensasi dingin dan cepat kering (contoh: Bioplacenton, Voltaren Gel).',
    exampleInRecipe: 's. 3 d.d. gel. u.e.',
    recipeTranslation: 'Tandailah: 3 kali sehari oleskan gel tipis pada kulit',
    tags: ['gel', 'dingin', 'luka bakar']
  },
  {
    id: 'sediaan-pasta',
    abbr: 'pasta',
    altAbbr: ['past.'],
    fullLatin: 'pasta',
    indonesianMeaning: 'pasta tebal (mengandung serbuk padat >50%)',
    category: 'sediaan',
    categoryLabel: 'Bentuk Sediaan Obat',
    explanation: 'Sediaan semi padat dengan konsentrasi serbuk padat tinggi (contoh: Zinc Oxide pasta) yang bersifat menyerap cairan dan melindungi kulit.',
    exampleInRecipe: 'm.f. pasta 30 g',
    recipeTranslation: 'Campur dan buatlah sediaan pasta 30 gram',
    tags: ['pasta', 'seng oksida', 'pelindung kulit']
  },
  {
    id: 'sediaan-supp',
    abbr: 'supp.',
    altAbbr: ['suppositoria'],
    fullLatin: 'suppositoria',
    indonesianMeaning: 'supositoria (dimasukkan lewat dubur/anus)',
    category: 'sediaan',
    categoryLabel: 'Bentuk Sediaan Obat',
    explanation: 'Sediaan padat berbentuk torpedo yang meleleh pada suhu tubuh manusia (37°C) berbasis oleum cacao atau PEG untuk dimasukkan ke rektum.',
    exampleInRecipe: 's. 1 d.d. supp I nocte (post defecat.)',
    recipeTranslation: 'Tandailah: 1 kali sehari 1 supositoria malam hari lewat dubur setelah BAB',
    tags: ['supositoria', 'anus', 'rektal', 'demam anak']
  },
  {
    id: 'sediaan-ovula',
    abbr: 'ovula',
    altAbbr: ['ovul.'],
    fullLatin: 'ovula',
    indonesianMeaning: 'supositoria vagina (ovula)',
    category: 'sediaan',
    categoryLabel: 'Bentuk Sediaan Obat',
    explanation: 'Sediaan padat oval berbentuk telur untuk dimasukkan ke dalam liang vagina, umumnya untuk kandidiasis/trikomoniasis (contoh: Nistatin, Metronidazol ovula).',
    exampleInRecipe: 's. 1 d.d. ovula I nocte h.s.',
    recipeTranslation: 'Tandailah: 1 kali sehari 1 ovula dimasukkan ke vagina malam sebelum tidur',
    tags: ['ovula', 'vagina', 'keputihan']
  },
  {
    id: 'sediaan-enema',
    abbr: 'enema',
    altAbbr: ['clysma', 'klysma'],
    fullLatin: 'enema / clysma',
    indonesianMeaning: 'enema (cairan pencahar rektal lewat dubur)',
    category: 'sediaan',
    categoryLabel: 'Bentuk Sediaan Obat',
    explanation: 'Cairan yang disemprotkan ke dalam rektum untuk memicu defekasi pada konstipasi berat atau persiapan kolonoskopi (contoh: Microlax enema).',
    exampleInRecipe: 's. p.r.n. enema I rectal',
    recipeTranslation: 'Tandailah: bila sulit BAB gunakan 1 tube enema lewat dubur',
    tags: ['enema', 'konstipasi', 'dubur']
  },
  {
    id: 'sediaan-inj',
    abbr: 'inj.',
    altAbbr: ['injectio'],
    fullLatin: 'injectio',
    indonesianMeaning: 'suntikan / larutan injeksi steril',
    category: 'sediaan',
    categoryLabel: 'Bentuk Sediaan Obat',
    explanation: 'Sediaan steril bebas pirogen untuk disuntikkan menembus kulit atau mukosa (IV, IM, SC).',
    exampleInRecipe: 'inj. Ondansetron 4 mg amp. No. I',
    recipeTranslation: 'Injeksi Ondansetron 4 mg ampul nomor 1',
    tags: ['injeksi', 'steril', 'ampul', 'vial']
  },
  {
    id: 'sediaan-inf',
    abbr: 'inf.',
    altAbbr: ['infusum'],
    fullLatin: 'infusum',
    indonesianMeaning: 'infus intravena steril / rebusan herba (infusa)',
    category: 'sediaan',
    categoryLabel: 'Bentuk Sediaan Obat',
    explanation: 'Dapat berarti cairan infus intravena volume besar (RL, NaCl 0.9%, D5%) di rumah sakit, atau sediaan rebusan daun simplisia 15 menit 90°C.',
    exampleInRecipe: 'inf. NaCl 0.9% 500 mL / 24 jam',
    recipeTranslation: 'Infus NaCl 0.9% 500 mL habiskan dalam 24 jam',
    tags: ['infus', 'iv', 'cairan parenteral']
  },
  {
    id: 'sediaan-collyr',
    abbr: 'collyr.',
    altAbbr: ['collyrium'],
    fullLatin: 'collyrium',
    indonesianMeaning: 'obat cuci mata (larutan steril pembersih mata)',
    category: 'sediaan',
    categoryLabel: 'Bentuk Sediaan Obat',
    explanation: 'Larutan steril jernih isotonis untuk membilas kotoran atau iritan dari bola mata (contoh: Y-Rins cuci mata).',
    exampleInRecipe: 's. collyr. ad ocul.',
    recipeTranslation: 'Tandailah: untuk obat cuci mata steril',
    tags: ['cuci mata', 'steril']
  },
  {
    id: 'sediaan-garg',
    abbr: 'garg.',
    altAbbr: ['gargarisma'],
    fullLatin: 'gargarisma',
    indonesianMeaning: 'obat kumur di tenggorokan (tidak boleh ditelan)',
    category: 'sediaan',
    categoryLabel: 'Bentuk Sediaan Obat',
    explanation: 'Cairan antiseptik yang digunakan untuk berkumur sampai ke pangkal tenggorokan (gargle), lalu dimuntahkan keluar dan TIDAK BOLEH DITELAN.',
    exampleInRecipe: 's. 3 d.d. garg. 15 mL (jangan ditelan)',
    recipeTranslation: 'Tandailah: 3 kali sehari kumur di pangkal tenggorokan 15 mL, jangan ditelan',
    tags: ['obat kumur', 'tenggorokan', 'povidon iodin']
  },

  // ==================== RUTE & ORGAN TUBUH ====================
  {
    id: 'rute-od',
    abbr: 'o.d.',
    altAbbr: ['od', 'oculus dexter', 'ocul. dext.'],
    fullLatin: 'oculus dexter',
    indonesianMeaning: 'mata kanan',
    category: 'rute',
    categoryLabel: 'Rute & Organ Tubuh',
    explanation: 'Aplikasi tetes atau salep khusus pada mata sebelah kanan.',
    exampleInRecipe: 's. 3 d.d. gtt II o.d.',
    recipeTranslation: 'Tandailah: 3 kali sehari 2 tetes pada mata kanan',
    isHighAlertWarning: true,
    warningDetails: 'ISMP & KARS HIGH-ALERT WARNING: Singkatan "o.d." rawan tertukar dengan "a.d." (telinga kanan) atau "o.s." (mata kiri). Sangat disarankan menulis lengkap "mata kanan".',
    tags: ['mata kanan', 'mata', 'ismp']
  },
  {
    id: 'rute-os',
    abbr: 'o.s.',
    altAbbr: ['os', 'oculus sinister', 'ocul. sinist.'],
    fullLatin: 'oculus sinister',
    indonesianMeaning: 'mata kiri',
    category: 'rute',
    categoryLabel: 'Rute & Organ Tubuh',
    explanation: 'Aplikasi tetes atau salep khusus pada mata sebelah kiri.',
    exampleInRecipe: 's. 2 d.d. gtt I o.s.',
    recipeTranslation: 'Tandailah: 2 kali sehari 1 tetes pada mata kiri',
    isHighAlertWarning: true,
    warningDetails: 'ISMP & KARS HIGH-ALERT: Singkatan "o.s." rawan tertukar dengan "a.s." (telinga kiri) atau "o.d." (mata kanan). Dianjurkan menulis kata penuh "mata kiri".',
    tags: ['mata kiri', 'mata', 'ismp']
  },
  {
    id: 'rute-ou',
    abbr: 'o.u.',
    altAbbr: ['ou', 'oculus uterque', 'ocul. utr.'],
    fullLatin: 'oculus uterque',
    indonesianMeaning: 'kedua belah mata (mata kanan dan kiri)',
    category: 'rute',
    categoryLabel: 'Rute & Organ Tubuh',
    explanation: 'Aplikasi obat tetes/salep pada kedua mata pasien.',
    exampleInRecipe: 's. 3 d.d. gtt I o.u.',
    recipeTranslation: 'Tandailah: 3 kali sehari 1 tetes pada kedua mata',
    isHighAlertWarning: true,
    warningDetails: 'ISMP HIGH-ALERT: Singkatan "o.u." rawan tertukar dengan "a.u." (kedua telinga). Dianjurkan menulis "kedua mata".',
    tags: ['kedua mata', 'mata', 'ismp']
  },
  {
    id: 'rute-ad',
    abbr: 'a.d.',
    altAbbr: ['ad', 'auris dextra', 'auric. dext.'],
    fullLatin: 'auris dextra',
    indonesianMeaning: 'telinga kanan',
    category: 'rute',
    categoryLabel: 'Rute & Organ Tubuh',
    explanation: 'Obat tetes telinga diteteskan ke liang telinga sebelah kanan.',
    exampleInRecipe: 's. 3 d.d. gtt II a.d.',
    recipeTranslation: 'Tandailah: 3 kali sehari 2 tetes pada telinga kanan',
    isHighAlertWarning: true,
    warningDetails: 'ISMP & KARS HIGH-ALERT: Rawan tertukar dengan "o.d." (mata kanan). Tetes telinga yang asam berbahaya jika tertetes ke mata!',
    tags: ['telinga kanan', 'telinga', 'ismp']
  },
  {
    id: 'rute-as',
    abbr: 'a.s.',
    altAbbr: ['as', 'auris sinistra', 'auric. sinist.', 'aur. laev.'],
    fullLatin: 'auris sinistra / auris laeva',
    indonesianMeaning: 'telinga kiri',
    category: 'rute',
    categoryLabel: 'Rute & Organ Tubuh',
    explanation: 'Obat tetes telinga diteteskan ke telinga sebelah kiri.',
    exampleInRecipe: 's. 2 d.d. gtt II a.s.',
    recipeTranslation: 'Tandailah: 2 kali sehari 2 tetes pada telinga kiri',
    isHighAlertWarning: true,
    warningDetails: 'ISMP HIGH-ALERT: Rawan tertukar dengan "o.s." (mata kiri). Tulis jelas "telinga kiri".',
    tags: ['telinga kiri', 'telinga', 'ismp']
  },
  {
    id: 'rute-au',
    abbr: 'a.u.',
    altAbbr: ['au', 'auris utraque', 'auric. utr.'],
    fullLatin: 'auris utraque',
    indonesianMeaning: 'kedua belah telinga (kanan dan kiri)',
    category: 'rute',
    categoryLabel: 'Rute & Organ Tubuh',
    explanation: 'Diteteskan pada kedua liang telinga pasien.',
    exampleInRecipe: 's. 2 d.d. gtt II a.u.',
    recipeTranslation: 'Tandailah: 2 kali sehari 2 tetes pada kedua telinga',
    isHighAlertWarning: true,
    warningDetails: 'ISMP HIGH-ALERT: Rawan tertukar dengan "o.u." (kedua mata). Tulis jelas "kedua telinga".',
    tags: ['kedua telinga', 'telinga']
  },
  {
    id: 'rute-nas',
    abbr: 'nasal.',
    altAbbr: ['ad nas.', 'nasales'],
    fullLatin: 'nasalis / ad nares',
    indonesianMeaning: 'pada lubang hidung',
    category: 'rute',
    categoryLabel: 'Rute & Organ Tubuh',
    explanation: 'Untuk tetes hidung (guttae nasales) atau semprotan hidung dekongestan/steroid alergi (Oksimetazolin, Flutikason).',
    exampleInRecipe: 's. 2 d.d. spray I nasal. dext. et sinist.',
    recipeTranslation: 'Tandailah: 2 kali sehari 1 semprotan pada hidung kanan dan kiri',
    tags: ['hidung', 'spray', 'tetes hidung']
  },
  {
    id: 'rute-ue',
    abbr: 'u.e.',
    altAbbr: ['ue', 'usus externus', 'ad us. ext.'],
    fullLatin: 'usus externus',
    indonesianMeaning: 'pemakaian luar (tidak boleh ditelan/diminum)',
    category: 'rute',
    categoryLabel: 'Rute & Organ Tubuh',
    explanation: 'Ditempelkan ETIKET BIRU. Digunakan di luar saluran cerna (kulit, rambut, kuku, antiseptik luar). Jika terminum dapat menyebabkan keracunan.',
    exampleInRecipe: 's. u.e. 2 d.d. loc. dol.',
    recipeTranslation: 'Tandailah: untuk pemakaian luar 2 kali sehari pada bagian yang sakit',
    tags: ['obat luar', 'etiket biru', 'kulit']
  },
  {
    id: 'rute-ui',
    abbr: 'u.i.',
    altAbbr: ['ui', 'usus internus', 'ad us. int.'],
    fullLatin: 'usus internus',
    indonesianMeaning: 'pemakaian dalam (diminum lewat mulut ke saluran cerna)',
    category: 'rute',
    categoryLabel: 'Rute & Organ Tubuh',
    explanation: 'Ditempelkan ETIKET PUTIH. Obat oral yang masuk ke lambung dan saluran pencernaan.',
    exampleInRecipe: 's. u.i. 3 d.d. tab I',
    recipeTranslation: 'Tandailah: untuk pemakaian dalam 3 kali sehari 1 tablet',
    isHighAlertWarning: true,
    warningDetails: 'CATATAN KHUSUS: Singkatan "U.I." jika ditulis kapital juga sering diartikan sebagai "Unit Internasional" (International Unit). Di ISMP, penulisan "U" atau "IU" dilarang.',
    tags: ['pemakaian dalam', 'etiket putih', 'oral']
  },
  {
    id: 'rute-subling',
    abbr: 'subling.',
    altAbbr: ['sublingual', 'sub ling.'],
    fullLatin: 'sub lingua',
    indonesianMeaning: 'di bawah lidah (dibiarkan larut jangan ditelan langsung)',
    category: 'rute',
    categoryLabel: 'Rute & Organ Tubuh',
    explanation: 'Diserap langsung melalui pembuluh darah kapiler sublingual vena cava untuk menghindari eliminasi lintas pertama di hati (first-pass metabolism). Contoh: ISDN, Nitrogliserin.',
    exampleInRecipe: 's. s.o.s. tab I subling. (bila nyeri dada)',
    recipeTranslation: 'Tandailah: bila perlu hisap 1 tablet di bawah lidah',
    tags: ['bawah lidah', 'isdn', 'angina']
  },
  {
    id: 'rute-bucc',
    abbr: 'bucc.',
    altAbbr: ['buccal', 'in bucc.'],
    fullLatin: 'buccalis',
    indonesianMeaning: 'diselipkan di antara pipi dan gusi',
    category: 'rute',
    categoryLabel: 'Rute & Organ Tubuh',
    explanation: 'Dibiarkan melekat dan larut perlahan di dinding mukosa pipi dalam.',
    exampleInRecipe: 's. 1 d.d. tab I bucc.',
    recipeTranslation: 'Tandailah: 1 kali sehari 1 tablet selipkan di sela gusi dan pipi',
    tags: ['bukal', 'gusi', 'pipi']
  },
  {
    id: 'rute-iv',
    abbr: 'i.v.',
    altAbbr: ['iv', 'intra venam'],
    fullLatin: 'intra venam',
    indonesianMeaning: 'ke dalam pembuluh darah balik (vena)',
    category: 'rute',
    categoryLabel: 'Rute & Organ Tubuh',
    explanation: 'Injeksi atau infus langsung ke sirkulasi darah vena, bioavailabilitas 100%, mula kerja instan.',
    exampleInRecipe: 'inj. Ceftriaxone 1 g i.v. / 24 jam',
    recipeTranslation: 'Injeksi Ceftriaxone 1 gram melalui pembuluh vena tiap 24 jam',
    tags: ['intravena', 'suntikan vena', 'rs']
  },
  {
    id: 'rute-im',
    abbr: 'i.m.',
    altAbbr: ['im', 'intra musculum'],
    fullLatin: 'intra musculum',
    indonesianMeaning: 'ke dalam jaringan otot tebal (intramuskular)',
    category: 'rute',
    categoryLabel: 'Rute & Organ Tubuh',
    explanation: 'Disuntikkan ke otot deltoid lengan atas, gluteus bokong, atau paha vastus lateralis (vaksin, vit B kompleks, antibiotik depo).',
    exampleInRecipe: 'inj. Ketorolac 30 mg i.m. stat.',
    recipeTranslation: 'Suntikkan Ketorolac 30 mg ke dalam otot segera',
    tags: ['intramuskular', 'otot', 'suntikan']
  },
  {
    id: 'rute-sc',
    abbr: 's.c.',
    altAbbr: ['sc', 'sub cutem', 'subkutan'],
    fullLatin: 'sub cutem',
    indonesianMeaning: 'di bawah lapisan kulit lemak (subkutan)',
    category: 'rute',
    categoryLabel: 'Rute & Organ Tubuh',
    explanation: 'Disuntikkan dengan sudut 45 atau 90 derajat ke jaringan lemak bawah kulit (Insulin, Heparin/LMWH, vaksin campak).',
    exampleInRecipe: 'inj. Novorapid 6 IU s.c. a.c.',
    recipeTranslation: 'Suntikkan Novorapid 6 unit di bawah kulit sebelum makan',
    tags: ['subkutan', 'insulin', 'heparin']
  },
  {
    id: 'rute-ic',
    abbr: 'i.c.',
    altAbbr: ['ic', 'intra cutan', 'intradermal'],
    fullLatin: 'intra cutan',
    indonesianMeaning: 'ke dalam lapisan kulit dermis (intrakutan / skin test)',
    category: 'rute',
    categoryLabel: 'Rute & Organ Tubuh',
    explanation: 'Penyuntikan sangat dangkal untuk uji alergi (skin test antibiotik) atau vaksin Mantoux/BCG.',
    exampleInRecipe: 'skin test Amoxicillin 0.1 mL i.c.',
    recipeTranslation: 'Lakukan uji kulit Amoksisilin 0.1 mL ke dalam kulit',
    tags: ['skin test', 'intrakutan', 'alergi']
  },

  // ==================== TAKARAN & SENDOK OBAT ====================
  {
    id: 'takaran-c',
    abbr: 'C.',
    altAbbr: ['C', 'cochl.', 'cochlear', 'cochlear cibarium', 'c.cib.'],
    fullLatin: 'cochlear / cochlear cibarium',
    indonesianMeaning: 'sendok makan (standar Farmakope Indonesia = 15 mL)',
    category: 'takaran',
    categoryLabel: 'Takaran & Sendok Obat',
    explanation: 'Satu sendok makan resmi dalam farmasi adalah volume 15 mililiter (bukan sendok makan logam makan nasi di rumah tangga yang bervariasi antara 8-12 mL). Edukasikan pasien untuk memakai sendok takar obat berskala.',
    exampleInRecipe: 's. 3 d.d. C I p.c.',
    recipeTranslation: 'Tandailah: 3 kali sehari 1 sendok makan (15 mL) sesudah makan',
    tags: ['sendok makan', '15 ml', 'takaran resmi']
  },
  {
    id: 'takaran-cth',
    abbr: 'cth.',
    altAbbr: ['cth', 'cochl. th.', 'cochlear theae'],
    fullLatin: 'cochlear theae',
    indonesianMeaning: 'sendok teh (standar Farmakope Indonesia = 5 mL)',
    category: 'takaran',
    categoryLabel: 'Takaran & Sendok Obat',
    explanation: 'Satu sendok teh resmi dalam farmasi setara dengan 5 mililiter. PENTING: Sendok teh dapur rumah tangga sering hanya berukuran 2.5 - 3 mL, sehingga berisiko underdosing pada anak jika tidak menggunakan pipet/sendok takar bergaris.',
    exampleInRecipe: 's. 3 d.d. cth I p.c.',
    recipeTranslation: 'Tandailah: 3 kali sehari 1 sendok teh (5 mL) sesudah makan',
    tags: ['sendok teh', '5 ml', 'anak', 'sirup']
  },
  {
    id: 'takaran-cp',
    abbr: 'c.p.',
    altAbbr: ['cp', 'cochl. p.', 'cochlear pultis'],
    fullLatin: 'cochlear pultis',
    indonesianMeaning: 'sendok bubur (standar Farmakope Indonesia = 8 mL)',
    category: 'takaran',
    categoryLabel: 'Takaran & Sendok Obat',
    explanation: 'Takaran 8 mililiter (sering juga diartikan sendok hidangan pencuci mulut / dessert spoon). Jarang digunakan saat ini, disarankan menggunakan spuit oral/gelas takar bertanda 8 mL.',
    exampleInRecipe: 's. 2 d.d. c.p. I p.c.',
    recipeTranslation: 'Tandailah: 2 kali sehari 1 sendok bubur (8 mL) sesudah makan',
    tags: ['sendok bubur', '8 ml']
  },
  {
    id: 'takaran-corig',
    abbr: 'c.orig.',
    altAbbr: ['cochlear originale', 'c. orig'],
    fullLatin: 'cochlear originale',
    indonesianMeaning: 'sendok asli bawaan dari pabrik obat',
    category: 'takaran',
    categoryLabel: 'Takaran & Sendok Obat',
    explanation: 'Gunakan sendok takar khusus atau gelas takar plastik yang sudah disertakan langsung di dalam dus kemasan pabrik obat tersebut.',
    exampleInRecipe: 's. 1 d.d. c.orig. I p.c.',
    recipeTranslation: 'Tandailah: 1 kali sehari 1 sendok takar asli bawaan kemasan',
    tags: ['sendok asli', 'pabrik', 'takar']
  },
  {
    id: 'takaran-gtt-satuan',
    abbr: 'gtt.',
    altAbbr: ['gutta', 'guttae'],
    fullLatin: 'guttae',
    indonesianMeaning: 'tetes (standar penetes resmi FI = 1 mL air setara 20 tetes)',
    category: 'takaran',
    categoryLabel: 'Takaran & Sendok Obat',
    explanation: 'Penetes baku Farmakope Indonesia mengukur bahwa 1 gram (1 mL) air murni pada 20°C menghasilkan 20 tetes. Namun untuk larutan kental/alkohol, jumlah tetes per mL akan berbeda.',
    exampleInRecipe: 's. 3 d.d. gtt XV (15 tetes)',
    recipeTranslation: 'Tandailah: 3 kali sehari 15 tetes',
    tags: ['tetes', 'guttae', 'pediatrik']
  },
  {
    id: 'takaran-no',
    abbr: 'No.',
    altAbbr: ['Nr.', 'numero'],
    fullLatin: 'numero',
    indonesianMeaning: 'jumlah sebanyak (angka romawi atau arab)',
    category: 'takaran',
    categoryLabel: 'Takaran & Sendok Obat',
    explanation: 'Menunjukkan kuantitas unit obat yang harus disiapkan dan diserahkan. Biasanya dituliskan dengan angka romawi (X = 10, XV = 15, XX = 20, XXX = 30).',
    exampleInRecipe: 'Paracetamol tab 500 mg No. X',
    recipeTranslation: 'Parasetamol tablet 500 mg jumlah 10 tablet',
    tags: ['jumlah', 'nomor', 'angka romawi']
  },
  {
    id: 'takaran-part-dol',
    abbr: 'part. dol.',
    altAbbr: ['parti dolenti', 'p. dol.'],
    fullLatin: 'parti dolenti',
    indonesianMeaning: 'pada bagian tubuh yang terasa sakit',
    category: 'takaran',
    categoryLabel: 'Takaran & Sendok Obat',
    explanation: 'Dioleskan hanya pada lokasi kulit atau persendian yang terasa nyeri/sakit.',
    exampleInRecipe: 's. 3 d.d. ungt. part. dol.',
    recipeTranslation: 'Tandailah: 3 kali sehari oleskan salep pada bagian yang sakit',
    tags: ['bagian sakit', 'nyeri', 'salep']
  },
  {
    id: 'takaran-loc-aegr',
    abbr: 'loc. aegr.',
    altAbbr: ['locus aeger'],
    fullLatin: 'locus aeger',
    indonesianMeaning: 'pada lokasi tempat yang sakit / luka',
    category: 'takaran',
    categoryLabel: 'Takaran & Sendok Obat',
    explanation: 'Mirip dengan parti dolenti, dioleskan terlokalisir pada area infeksi/luka kulit.',
    exampleInRecipe: 's. 2 d.d. crem. loc. aegr.',
    recipeTranslation: 'Tandailah: 2 kali sehari oleskan krim pada area yang sakit',
    tags: ['lokasi sakit', 'luka', 'krim']
  },

  // ==================== LEGALITAS & PENGULANGAN RESEP ====================
  {
    id: 'legalitas-iter',
    abbr: 'iter',
    altAbbr: ['iteratio', 'iteretur'],
    fullLatin: 'iteratio / iteretur',
    indonesianMeaning: 'boleh diulang pengambilannya',
    category: 'legalitas',
    categoryLabel: 'Legalitas & Pengulangan Resep',
    explanation: 'Tanda legal dokter yang memperbolehkan apotek menyerahkan ulang obat tanpa resep baru. Perhitungan: "iter 1x" artinya pasien berhak mengambil TOTAL 2 kali (1 resep asli + 1 kali pengulangan). "iter 2x" artinya total 3 kali ambil.',
    exampleInRecipe: 'iter 2x (Total pasien dapat mengambil 3x jumlah resep)',
    recipeTranslation: 'Boleh diulang 2 kali (Pasien total berhak menebus 3 kali)',
    tags: ['iter', 'ulang', 'salinan resep', 'legal']
  },
  {
    id: 'legalitas-ne-det',
    abbr: 'ne det',
    altAbbr: ['nedet', 'ne detur', 'n.d.'],
    fullLatin: 'ne detur',
    indonesianMeaning: 'belum diserahkan / jangan diserahkan',
    category: 'legalitas',
    categoryLabel: 'Legalitas & Pengulangan Resep',
    explanation: 'Ditulis pada salinan resep (copy resep) oleh apoteker untuk menandakan bahwa obat pada baris tersebut sama sekali BELUM ditebus atau diambil oleh pasien.',
    exampleInRecipe: 's. 1 d.d. tab I - ne det',
    recipeTranslation: 'Obat pada resep ini belum diserahkan ke pasien',
    tags: ['belum ditebus', 'salinan resep', 'copy resep']
  },
  {
    id: 'legalitas-det',
    abbr: 'det',
    altAbbr: ['detur'],
    fullLatin: 'detur',
    indonesianMeaning: 'sudah diserahkan kepada pasien',
    category: 'legalitas',
    categoryLabel: 'Legalitas & Pengulangan Resep',
    explanation: 'Ditulis pada salinan resep untuk menandakan bahwa seluruh obat pada baris tersebut sudah diserahkan kepada pasien.',
    exampleInRecipe: 'Amlodipine 10 mg No. XXX - det',
    recipeTranslation: 'Amlodipin 10 mg sebanyak 30 tablet sudah diserahkan seluruhnya',
    tags: ['sudah diserahkan', 'lunas obat', 'copy resep']
  },
  {
    id: 'legalitas-det-orig',
    abbr: 'det. orig.',
    altAbbr: ['detur originale'],
    fullLatin: 'detur originale',
    indonesianMeaning: 'sudah diserahkan sejumlah resep aslinya',
    category: 'legalitas',
    categoryLabel: 'Legalitas & Pengulangan Resep',
    explanation: 'Pada resep bertanda iter, tulisan "det orig" menandakan resep asli sudah ditebus, dan sisa pengulangannya masih bisa diambil pada kunjungan berikutnya.',
    exampleInRecipe: 'iter 1x - det. orig. (sisa 1x pengulangan lagi)',
    recipeTranslation: 'Resep aslinya sudah diambil, masih berhak menebus 1 kali lagi',
    tags: ['resep asli', 'iter', 'sisa']
  },
  {
    id: 'legalitas-det-portionem',
    abbr: 'det. port.',
    altAbbr: ['detur portionem'],
    fullLatin: 'detur portionem',
    indonesianMeaning: 'sudah diserahkan sebagian (sebutkan jumlahnya)',
    category: 'legalitas',
    categoryLabel: 'Legalitas & Pengulangan Resep',
    explanation: 'Jika pasien hanya mampu menebus sebagian obat (misal resep 30 tablet, pasien baru menebus 10 tablet karena keterbatasan biaya), apoteker menulis "det X" atau "det portionem X".',
    exampleInRecipe: 'Amoxicillin No. XXX - det X (sisa ne det XX)',
    recipeTranslation: 'Dari 30 tablet, baru diserahkan 10 tablet (sisa belum diambil 20 tablet)',
    tags: ['sebagian', 'cicil resep', 'tebus separuh']
  },
  {
    id: 'legalitas-cito',
    abbr: 'cito!',
    altAbbr: ['cito'],
    fullLatin: 'cito',
    indonesianMeaning: 'segera / cepat (prioritas pelayanan pertama)',
    category: 'legalitas',
    categoryLabel: 'Legalitas & Pengulangan Resep',
    explanation: 'Resep dokter bertanda cito! WAJIB didahulukan peracikannya dan penyerahannya di atas seluruh antrean resep biasa karena menyangkut kegawatdaruratan pasien.',
    exampleInRecipe: 'CITO! R/ Injeksi Furosemid amp No. II',
    recipeTranslation: 'SEGERA! Dahulukan antrean resep ini tanpa ditunda',
    tags: ['prioritas', 'segera', 'antrean pertama', 'cito']
  },
  {
    id: 'legalitas-pim',
    abbr: 'P.I.M.',
    altAbbr: ['PIM', 'periculum in mora'],
    fullLatin: 'periculum in mora',
    indonesianMeaning: 'berbahaya bila ditunda (prioritas di atas cito!)',
    category: 'legalitas',
    categoryLabel: 'Legalitas & Pengulangan Resep',
    explanation: 'Tingkat urgensi tertinggi dalam resep farmasi. Keterlambatan obat hitungan menit dapat mengancam keselamatan nyawa pasien. Urutan prioritas resep: P.I.M. > Statim > Cito! > Urgens.',
    exampleInRecipe: 'P.I.M.! R/ Injeksi Epinefrin 1:1000 No. I',
    recipeTranslation: 'BAHAYA BILA DITUNDA! Layani detik ini juga di atas semua antrean',
    tags: ['nyawa', 'kegawatan', 'tertinggi', 'pim']
  },
  {
    id: 'legalitas-urgens',
    abbr: 'urgens',
    altAbbr: ['urg.'],
    fullLatin: 'urgens',
    indonesianMeaning: 'mendesak / penting untuk segera diserahkan',
    category: 'legalitas',
    categoryLabel: 'Legalitas & Pengulangan Resep',
    explanation: 'Menandakan resep mendesak, setara urgensinya dengan tanda cito.',
    exampleInRecipe: 'Urgens! R/ Salbutamol Nebules No. II',
    recipeTranslation: 'Mendesak! Segera siapkan obat untuk pasien',
    tags: ['mendesak', 'urgens']
  },
  {
    id: 'legalitas-ni',
    abbr: 'N.I.',
    altAbbr: ['non iter.', 'non iteretur', 'ne iteretur'],
    fullLatin: 'non iteretur',
    indonesianMeaning: 'tidak boleh diulang sama sekali',
    category: 'legalitas',
    categoryLabel: 'Legalitas & Pengulangan Resep',
    explanation: 'Semua resep Narkotika (Opiat) dan Psikotropika berdasarkan UU Narkotika secara mutlak bertanda Non Iteretur (tidak boleh diulang dengan salinan resep, wajib resep baru dokter).',
    exampleInRecipe: 'N.I. (Non Iteretur) R/ Codein tab 10 mg No. X',
    recipeTranslation: 'Tidak boleh diulang tanpa resep asli baru dari dokter',
    tags: ['narkotika', 'psikotropika', 'larangan iter', 'undang-undang']
  },
  {
    id: 'legalitas-recipe',
    abbr: 'R/',
    altAbbr: ['recipe'],
    fullLatin: 'recipe',
    indonesianMeaning: 'ambillah (tanda pembuka setiap resep dokter / invocatio)',
    category: 'legalitas',
    categoryLabel: 'Legalitas & Pengulangan Resep',
    explanation: 'Simbol wajib di awal penulisan setiap item obat. Secara historis melambangkan doa kesembuhan dari dewa Jupiter (simbol Ra/Jupiter).',
    exampleInRecipe: 'R/ Paracetamol 500 mg No. X',
    recipeTranslation: 'Ambillah Parasetamol 500 mg sebanyak 10 tablet',
    tags: ['recipe', 'invocatio', 'resep dokter']
  },
  {
    id: 'legalitas-signa',
    abbr: 'S.',
    altAbbr: ['signa', 's.'],
    fullLatin: 'signa',
    indonesianMeaning: 'tandailah (aturan pakai untuk pasien / signatura)',
    category: 'legalitas',
    categoryLabel: 'Legalitas & Pengulangan Resep',
    explanation: 'Perintah dokter kepada farmasi mengenai instruksi yang harus dituliskan pada etiket obat pasien (frekuensi, dosis, rute, dan waktu minum).',
    exampleInRecipe: 'S. 3 d.d. tab I p.c.',
    recipeTranslation: 'Tandailah: 3 kali sehari 1 tablet sesudah makan',
    tags: ['signatura', 'etiket', 'aturan pakai']
  },
  {
    id: 'legalitas-copia',
    abbr: 'copia',
    altAbbr: ['c.r.', 'apograph', 'exemplum'],
    fullLatin: 'copia recepti / apographum',
    indonesianMeaning: 'salinan resep resmi dari apotek',
    category: 'legalitas',
    categoryLabel: 'Legalitas & Pengulangan Resep',
    explanation: 'Salinan sah resep asli yang memuat cap stempel apotek, paraf/tanda tangan Apoteker Penanggung Jawab (SIPA), nomor resep, dan status penyerahan (det / ne det).',
    exampleInRecipe: 'Copia Recepti No. Resep: 1042/APT/2026',
    recipeTranslation: 'Salinan resep resmi apotek',
    tags: ['salinan resep', 'copy resep', 'apoteker']
  },
  {
    id: 'legalitas-pro',
    abbr: 'pro',
    altAbbr: ['pro:'],
    fullLatin: 'pro',
    indonesianMeaning: 'untuk / atas nama pasien (inscriptio)',
    category: 'legalitas',
    categoryLabel: 'Legalitas & Pengulangan Resep',
    explanation: 'Bagian identitas pasien yang wajib mencantumkan nama lengkap, umur (atau tanggal lahir), dan berat badan (khusus pasien anak) guna skrining dosis berlebih.',
    exampleInRecipe: 'Pro: An. Kevin (4 tahun / 15 kg)',
    recipeTranslation: 'Untuk pasien: An. Kevin (4 tahun / 15 kg)',
    tags: ['identitas pasien', 'inscriptio', 'umur', 'berat badan']
  },

  // ==================== ISTILAH UMUM & FARMAKOPE ====================
  {
    id: 'umum-agit',
    abbr: 'agit.',
    altAbbr: ['agita', 'agitandus', 'agita ante sumendum'],
    fullLatin: 'agita ante sumendum',
    indonesianMeaning: 'kocok dahulu sebelum diminum/dipakai',
    category: 'umum',
    categoryLabel: 'Istilah Umum & Farmakope',
    explanation: 'Wajib dituliskan pada label etiket seluruh sediaan suspensi, emulsi, dan campuran cairan yang mudah mengendap (caking).',
    exampleInRecipe: 's. agit. 3 d.d. cth I',
    recipeTranslation: 'Tandailah: kocok dahulu sebelum diminum 3 kali sehari 1 sendok teh',
    tags: ['kocok dahulu', 'suspensi', 'etiket']
  },
  {
    id: 'umum-aq-dest',
    abbr: 'aq. dest.',
    altAbbr: ['aqua destillata', 'aq dest'],
    fullLatin: 'aqua destillata',
    indonesianMeaning: 'air suling murni / aquadest',
    category: 'umum',
    categoryLabel: 'Istilah Umum & Farmakope',
    explanation: 'Air yang dimurnikan melalui proses distilasi, bebas mineral untuk melarutkan sediaan obat oral atau sirup rekonstitusi.',
    exampleInRecipe: 'Aqua dest. ad 100 mL',
    recipeTranslation: 'Tambahkan air suling murni sampai volume total 100 mL',
    tags: ['aquadest', 'air suling', 'pelarut']
  },
  {
    id: 'umum-aq-bidest',
    abbr: 'aq. bidest.',
    altAbbr: ['aqua bidestillata'],
    fullLatin: 'aqua bidestillata',
    indonesianMeaning: 'air suling dua kali (bebas pirogen / aqua pro injectione)',
    category: 'umum',
    categoryLabel: 'Istilah Umum & Farmakope',
    explanation: 'Air murni hasil dua kali penyulingan yang disterilkan dan bebas pirogen, digunakan khusus untuk pelarut obat suntik/injeksi (Water for Injection).',
    exampleInRecipe: 'dissolve in aq. bidest. steril 5 mL',
    recipeTranslation: 'Larutkan dalam 5 mL air suling steril bebas pirogen',
    tags: ['steril', 'wfi', 'injeksi']
  },
  {
    id: 'umum-aq-ferv',
    abbr: 'aq. ferv.',
    altAbbr: ['aqua fervida'],
    fullLatin: 'aqua fervida',
    indonesianMeaning: 'air panas / mendidih',
    category: 'umum',
    categoryLabel: 'Istilah Umum & Farmakope',
    explanation: 'Digunakan untuk melarutkan bahan obat yang sukar larut dalam air dingin (misal melarutkan Asam Borat atau mengembangkan PGS/Gom Arab).',
    exampleInRecipe: 'solv. in aq. ferv. q.s.',
    recipeTranslation: 'Larutkan dalam air panas secukupnya',
    tags: ['air panas', 'pelarutan']
  },
  {
    id: 'umum-alb',
    abbr: 'alb.',
    altAbbr: ['albus'],
    fullLatin: 'albus',
    indonesianMeaning: 'putih (misal Vaselin album)',
    category: 'umum',
    categoryLabel: 'Istilah Umum & Farmakope',
    explanation: 'Menunjukkan warna bahan baku farmasi yang telah dimurnikan / diputihkan (contoh: Vaselinum album lebih murni dibandingkan Vaselinum flavum kuning).',
    exampleInRecipe: 'Vaselin alb. 20 g',
    recipeTranslation: 'Vaselin putih murni 20 gram',
    tags: ['warna', 'putih', 'vaselin']
  },
  {
    id: 'umum-flav',
    abbr: 'flav.',
    altAbbr: ['flavus'],
    fullLatin: 'flavus',
    indonesianMeaning: 'kuning (misal Cera flava / Vaselin flavum)',
    category: 'umum',
    categoryLabel: 'Istilah Umum & Farmakope',
    explanation: 'Bahan baku berwana kuning alami (seperti lilin lebah kuning Cera flava atau vaselin kuning).',
    exampleInRecipe: 'Cera flava 5 g',
    recipeTranslation: 'Malam kuning (lilin lebah) 5 gram',
    tags: ['warna', 'kuning', 'cera']
  },
  {
    id: 'umum-semis',
    abbr: 'ss.',
    altAbbr: ['semis', 'semi', 'dimid.'],
    fullLatin: 'semis',
    indonesianMeaning: 'setengah / separuh bagian (1/2)',
    category: 'umum',
    categoryLabel: 'Istilah Umum & Farmakope',
    explanation: 'Menunjukkan takaran separuh (0.5), sering ditulis tab ss. (setengah tablet) atau Cth ss. (setengah sendok teh = 2.5 mL).',
    exampleInRecipe: 's. 2 d.d. tab ss. p.c.',
    recipeTranslation: 'Tandailah: 2 kali sehari setengah (1/2) tablet sesudah makan',
    tags: ['setengah', 'separuh', 'dosis kecil']
  },
  {
    id: 'umum-gtt-ismp',
    abbr: 'U',
    altAbbr: ['Unit', 'IU'],
    fullLatin: 'Unit / International Unit',
    indonesianMeaning: 'Unit / Satuan Internasional',
    category: 'umum',
    categoryLabel: 'Istilah Umum & Farmakope',
    explanation: 'Simbol "U" atau "IU" untuk Insulin atau Heparin sangat berbahaya karena sering terbaca sebagai angka "0" (nol), huruf "4", atau singkatan "IV" (intravena). Akibatnya dosis 10 U disuntikkan menjadi 100 U yang memicu syok hipoglikemia fatal.',
    exampleInRecipe: 'Dilarang menulis: Insulin 10 U (Wajib tulis: Insulin 10 unit)',
    recipeTranslation: 'Wajib dieja lengkap sebagai: 10 UNIT',
    isHighAlertWarning: true,
    warningDetails: 'ISMP DO NOT USE LIST #1: Dilarang keras menyingkat kata "Unit" menjadi huruf "U" atau "IU"! Rawan salah interpretasi menjadi angka 0 sehingga pasien menerima dosis 10x lipat lebih tinggi!',
    tags: ['ismp', 'high alert', 'insulin', 'kars', 'fatal']
  },
  {
    id: 'umum-ms-ismp',
    abbr: 'MS / MgSO4',
    altAbbr: ['MS', 'MSO4', 'MgSO4'],
    fullLatin: 'Morphine Sulfate / Magnesium Sulfate',
    indonesianMeaning: 'Morfin Sulfat atau Magnesium Sulfat',
    category: 'umum',
    categoryLabel: 'Istilah Umum & Farmakope',
    explanation: 'Singkatan "MS" atau "MSO4" bisa berarti Morfin Sulfat (analgesik narkotika kuat) ATAU Magnesium Sulfat (antikonvulsan preeklampsia). Salah interpretasi singkatan ini telah memicu kematian pasien di berbagai rumah sakit dunia.',
    exampleInRecipe: 'Dilarang: Inj. MS 10 mg (Wajib tulis lengkap: Morfin Sulfat atau Magnesium Sulfat)',
    recipeTranslation: 'Wajib tulis nama obat secara utuh tanpa singkatan kimia',
    isHighAlertWarning: true,
    warningDetails: 'ISMP & KARS HIGH-ALERT WARNING: Singkatan "MS" vs "MgSO4" sangat berbahaya dan dilarang digunakan di lembar resep maupun instruksi medik!',
    tags: ['morfin', 'magnesium sulfat', 'ismp', 'kematian']
  },
  {
    id: 'umum-microgram',
    abbr: 'µg / ug',
    altAbbr: ['µg', 'ug', 'mcg'],
    fullLatin: 'microgramma',
    indonesianMeaning: 'mikrogram (seperseribu miligram)',
    category: 'umum',
    categoryLabel: 'Istilah Umum & Farmakope',
    explanation: 'Simbol "µg" pada tulisan tangan dokter sering terbaca sebagai "mg" (miligram). Salah baca ini menyebabkan pasien mendapat dosis 1000 kali lipat lebih banyak (overdosis 1000x)! Standar akreditasi mewajibkan penulisan "mcg" atau dieja "mikrogram".',
    exampleInRecipe: 'Dilarang menulis: Digoxin 100 µg (Wajib tulis: Digoxin 100 mcg)',
    recipeTranslation: 'Wajib ditulis "mcg" atau dieja "mikrogram"',
    isHighAlertWarning: true,
    warningDetails: 'ISMP & KARS HIGH-ALERT: Simbol "µg" rawan terbaca sebagai "mg", berisiko overdosis 1000 kali lipat pada obat indeks terapi sempit (Digoksin, Fentanil, Levotiroksin)!',
    tags: ['mikrogram', 'mcg', 'digoksin', 'ismp']
  }
];

// =========================================================================
// UTILITY FUNCTIONS: SEARCH & INTERACTIVE SIGNA PARSER
// =========================================================================

export function searchLatinAbbreviations(
  query: string, 
  category: LatinCategoryKey = 'all'
): LatinAbbreviation[] {
  const cleanQ = query.toLowerCase().trim();
  
  return LATIN_ABBREVIATIONS.filter((item) => {
    const matchesCategory = category === 'all' || item.category === category;
    if (!matchesCategory) return false;
    
    if (!cleanQ) return true;

    const matchAbbr = item.abbr.toLowerCase().includes(cleanQ);
    const matchAlt = item.altAbbr?.some((alt) => alt.toLowerCase().includes(cleanQ));
    const matchFullLatin = item.fullLatin.toLowerCase().includes(cleanQ);
    const matchMeaning = item.indonesianMeaning.toLowerCase().includes(cleanQ);
    const matchExplanation = item.explanation.toLowerCase().includes(cleanQ);
    const matchTags = item.tags?.some((t) => t.toLowerCase().includes(cleanQ));

    return matchAbbr || matchAlt || matchFullLatin || matchMeaning || matchExplanation || matchTags;
  });
}

/**
 * Interactive Signa Translator Engine
 * Parses raw doctor prescription signa string and translates into human-readable Indonesian instructions.
 */
export function parseAndTranslateSigna(rawSigna: string): SignaTranslationResult {
  if (!rawSigna || !rawSigna.trim()) {
    return {
      original: '',
      translatedText: '',
      detectedTerms: [],
      warnings: [],
      instructionsForLabel: ''
    };
  }

  const cleanInput = rawSigna.trim();
  const normalized = cleanInput
    .replace(/[;,]/g, ' ')
    .replace(/\s+/g, ' ')
    .toLowerCase();

  const detectedTerms: SignaTranslationResult['detectedTerms'] = [];
  const warnings: string[] = [];

  // High-alert checks in the raw string
  if (/\b(q\.?d\.?)\b/i.test(normalized) && !/\bq\.?i\.?d\.?\b/i.test(normalized) && !/\bde die\b/i.test(normalized)) {
    warnings.push('Terdeteksi singkatan rawan bahaya "q.d." (ISMP Do Not Use): Hindari penggunaan q.d., konfirmasi apakah maksud dokter adalah 1 kali sehari (1 d.d.) atau 4 kali sehari (q.i.d.).');
  }
  if (/\b(q\.?o\.?d\.?)\b/i.test(normalized)) {
    warnings.push('Terdeteksi singkatan rawan bahaya "q.o.d." (ISMP): Pastikan apakah maksud dokter adalah selang sehari atau tiap hari.');
  }
  if (/\b(o\.?d\.?|o\.?s\.?|o\.?u\.?)\b/i.test(normalized)) {
    warnings.push('Peringatan singkatan mata/telinga (o.d. / o.s. / a.d.): Konfirmasi organ target pada etiket dengan jelas (Mata Kanan/Kiri vs Telinga Kanan/Kiri).');
  }
  if (/\b(u|iu)\b/i.test(normalized)) {
    warnings.push('Terdeteksi singkatan terlarang "U" / "IU": Tuliskan kata "Unit" secara lengkap pada etiket demi keselamatan pasien.');
  }

  // Tokenization & multi-word matchers
  const tokens = cleanInput.split(/\s+/);

  // Translation segments builder
  let frequencyText = '';
  let unitText = '';
  let timingText = '';
  let routeText = '';
  let conditionText = '';
  let compoundingText = '';

  // Check common patterns
  if (/1\s*d\.?d\.?|semel\s*d\.?d\.?|s\.?d\.?d\.?/i.test(normalized)) {
    frequencyText = '1 kali sehari';
  } else if (/2\s*d\.?d\.?|bis\s*d\.?d\.?|b\.?d\.?d\.?|b\.?i\.?d\.?/i.test(normalized)) {
    frequencyText = '2 kali sehari (selang 12 jam)';
  } else if (/3\s*d\.?d\.?|ter\s*d\.?d\.?|t\.?d\.?d\.?|t\.?i\.?d\.?/i.test(normalized)) {
    frequencyText = '3 kali sehari (tiap 8 jam)';
  } else if (/4\s*d\.?d\.?|quater\s*d\.?d\.?|q\.?d\.?d\.?|q\.?i\.?d\.?/i.test(normalized)) {
    frequencyText = '4 kali sehari (tiap 6 jam)';
  } else if (/q\.?h\.?|q\.?1\.?h\.?/i.test(normalized)) {
    frequencyText = 'tiap 1 jam sekali';
  } else if (/q\.?2\.?h\.?/i.test(normalized)) {
    frequencyText = 'tiap 2 jam sekali';
  } else if (/q\.?4\.?h\.?/i.test(normalized)) {
    frequencyText = 'tiap 4 jam sekali';
  }

  // Check dose units
  if (/tab\s*i\b|tab\s*1\b/i.test(normalized)) {
    unitText = '1 tablet';
  } else if (/tab\s*ii\b|tab\s*2\b/i.test(normalized)) {
    unitText = '2 tablet';
  } else if (/tab\s*ss\b|tab\s*1\/2\b/i.test(normalized)) {
    unitText = 'setengah (1/2) tablet';
  } else if (/caps\s*i\b|caps\s*1\b/i.test(normalized)) {
    unitText = '1 kapsul';
  } else if (/pulv\s*i\b|pulv\s*1\b/i.test(normalized)) {
    unitText = '1 bungkus puyer';
  } else if (/cth\s*i\b|c\.?th\.?\s*i\b/i.test(normalized)) {
    unitText = '1 sendok teh (5 mL)';
  } else if (/cth\s*ii\b|c\.?th\.?\s*ii\b/i.test(normalized)) {
    unitText = '2 sendok teh (10 mL)';
  } else if (/c\s*i\b|cochl\s*i\b/i.test(normalized)) {
    unitText = '1 sendok makan (15 mL)';
  } else if (/c\.?p\.?\s*i\b/i.test(normalized)) {
    unitText = '1 sendok bubur (8 mL)';
  } else if (/gtt\s*i\b/i.test(normalized)) {
    unitText = '1 tetes';
  } else if (/gtt\s*ii\b/i.test(normalized)) {
    unitText = '2 tetes';
  } else if (/gtt\s*iii\b/i.test(normalized)) {
    unitText = '3 tetes';
  }

  // Check meal timing
  if (/\ba\.?c\.?\b/i.test(normalized)) {
    timingText = 'sebelum makan (30 menit sebelum makan)';
  } else if (/\bp\.?c\.?\b/i.test(normalized)) {
    timingText = 'sesudah makan';
  } else if (/\bd\.?c\.?\b/i.test(normalized)) {
    timingText = 'pada waktu sedang makan (bersama suapan pertama)';
  } else if (/\bi\.?c\.?\b/i.test(normalized)) {
    timingText = 'di antara dua waktu makan';
  } else if (/\bh\.?s\.?\b|\bv\.?s\.?\b/i.test(normalized)) {
    timingText = 'malam hari pada waktu hendak tidur';
  } else if (/\bo\.?m\.?\b/i.test(normalized)) {
    timingText = 'pagi hari sewaktu bangun tidur';
  } else if (/\bo\.?n\.?\b/i.test(normalized)) {
    timingText = 'tiap malam hari sebelum tidur';
  } else if (/\bm\.\s*et\s*v\.?\b/i.test(normalized)) {
    timingText = 'pagi dan sore/malam hari';
  }

  // Check conditions
  if (/\bp\.?r\.?n\.?\b/i.test(normalized)) {
    conditionText = 'jika diperlukan (bila timbul keluhan/demam/nyeri)';
  } else if (/\bs\.?o\.?s\.?\b/i.test(normalized)) {
    conditionText = 'bila keadaan darurat membutuhkan';
  } else if (/\bu\.?c\.?\b/i.test(normalized)) {
    conditionText = 'aturan pemakaian sudah dipahami';
  }

  // Check routes
  if (/\bo\.?d\.?\b/i.test(normalized)) {
    routeText = 'pada mata kanan';
  } else if (/\bo\.?s\.?\b/i.test(normalized)) {
    routeText = 'pada mata kiri';
  } else if (/\bo\.?u\.?\b/i.test(normalized)) {
    routeText = 'pada kedua belah mata';
  } else if (/\ba\.?d\.?\b/i.test(normalized)) {
    routeText = 'pada telinga kanan';
  } else if (/\ba\.?s\.?\b/i.test(normalized)) {
    routeText = 'pada telinga kiri';
  } else if (/\ba\.?u\.?\b/i.test(normalized)) {
    routeText = 'pada kedua belah telinga';
  } else if (/\bu\.?e\.?\b/i.test(normalized)) {
    routeText = 'untuk pemakaian luar pada kulit (jangan ditelan)';
  } else if (/subling\.?/i.test(normalized)) {
    routeText = 'hisap di bawah lidah sampai larut';
  } else if (/rectal|per\s*rectum|supp/i.test(normalized)) {
    routeText = 'dimasukkan ke dalam dubur/anus';
  }

  // Check compounding terms
  if (/m\.?f\.?l\.?a\.?/i.test(normalized)) {
    compoundingText = 'Campur dan buatlah menurut aturan seni farmasi';
  }
  if (/d\.?t\.?d\.?/i.test(normalized)) {
    compoundingText += (compoundingText ? ', ' : '') + 'berikan takaran demikian per bungkus';
  }
  if (/da\s*in\s*caps/i.test(normalized)) {
    compoundingText += (compoundingText ? ', ' : '') + 'masukkan ke dalam cangkang kapsul';
  }

  // Match all individual tokens with database entries
  tokens.forEach((token) => {
    const cleanToken = token.replace(/^[sS]\.?\/?/, '').replace(/[.,;:()]/g, '').toLowerCase();
    if (!cleanToken) return;

    const matched = LATIN_ABBREVIATIONS.find(
      (item) =>
        item.abbr.replace(/[.]/g, '').toLowerCase() === cleanToken ||
        item.altAbbr?.some((alt) => alt.replace(/[.]/g, '').toLowerCase() === cleanToken)
    );

    if (matched) {
      detectedTerms.push({
        token,
        matchedItem: matched,
        meaning: matched.indonesianMeaning
      });
    } else {
      detectedTerms.push({
        token,
        meaning: undefined
      });
    }
  });

  // Assemble comprehensive human sentence
  const parts: string[] = [];
  if (frequencyText) parts.push(frequencyText);
  if (unitText) parts.push(unitText);
  if (timingText) parts.push(timingText);
  if (routeText) parts.push(routeText);
  if (conditionText) parts.push(conditionText);

  let translatedText = '';
  if (parts.length > 0) {
    translatedText = 'Tandailah: ' + parts.join(', ');
  } else {
    // Fallback translation from matched tokens
    const meaningfulTokens = detectedTerms
      .filter((t) => t.matchedItem)
      .map((t) => t.matchedItem?.indonesianMeaning);

    translatedText = meaningfulTokens.length > 0
      ? 'Terjemahan kata per kata: ' + meaningfulTokens.join(' • ')
      : 'Belum dapat mengenali struktur signa lengkap. Silakan periksa ejaan singkatan atau gunakan tombol contoh di bawah.';
  }

  if (compoundingText) {
    translatedText = `[Instruksi Racikan: ${compoundingText}] \n${translatedText}`;
  }

  // Generate clear label text
  const labelParts = [];
  if (frequencyText) labelParts.push(frequencyText);
  if (unitText) labelParts.push(unitText);
  if (timingText) labelParts.push(timingText);
  const instructionsForLabel = labelParts.length > 0 ? labelParts.join(' ') : translatedText;

  return {
    original: cleanInput,
    translatedText,
    detectedTerms,
    warnings,
    instructionsForLabel
  };
}

export const POPULAR_SIGNA_PRESETS = [
  {
    label: 'Puyer 3x Sehari sesudah makan (d.t.d.)',
    signa: 'm.f.l.a. pulv. d.t.d. No. X \ns. 3 d.d. pulv I p.c.'
  },
  {
    label: 'Kapsul Racikan 2x Sehari sebelum makan',
    signa: 'm.f.l.a. caps. d.t.d. No. XV \ns. 2 d.d. caps I a.c.'
  },
  {
    label: 'Obat Demam Sirup jika perlu',
    signa: 's. p.r.n. 3 d.d. cth I p.c. (febr.)'
  },
  {
    label: 'Tetes Mata Kanan tiap 2 jam',
    signa: 's. q.2.h. gtt II o.d.'
  },
  {
    label: 'Obat Kolesterol 1x Malam sebelum tidur',
    signa: 's. 1 d.d. tab I h.s. o.n.'
  },
  {
    label: 'Obat Diabetes bersama suapan pertama makan',
    signa: 's. 3 d.d. tab I d.c. (suapan pertama)'
  },
  {
    label: 'Tetes Telinga Kiri 3x Sehari 2 Tetes',
    signa: 's. 3 d.d. gtt II a.s.'
  },
  {
    label: 'Supositoria Rektal jika demam tinggi malam',
    signa: 's. p.r.n. supp I rectal nocte'
  }
];
