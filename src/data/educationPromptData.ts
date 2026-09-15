export interface HealthTopicPreset {
  id: string;
  category: 'dagusibu' | 'chronic' | 'otc' | 'special-pop' | 'safety' | 'general';
  title: string;
  tagline: string;
  badge: string;
  clinicalPoints: string[];
  keyKeywords: string;
  suggestedDosAndDonts: {
    dos: string[];
    donts: string[];
  };
  visualIdea: string;
}

export interface MediaTypeOption {
  id: 'poster' | 'leaflet' | 'carousel' | 'video-script' | 'whatsapp' | 'rollup-banner';
  name: string;
  description: string;
  aspectRatio: string;
  targetLength: string;
  iconName: string;
  badge: string;
  promptInstructions: string;
}

export interface TargetAudienceOption {
  id: 'general' | 'elderly' | 'mothers' | 'youth' | 'chronic-patients' | 'healthcare-workers';
  name: string;
  description: string;
  readingLevel: string;
  vocabularyFocus: string;
}

export interface CommunicationToneOption {
  id: 'empathetic' | 'informative' | 'persuasive' | 'casual' | 'urgent';
  name: string;
  description: string;
  styleKeywords: string;
}

export const HEALTH_TOPIC_PRESETS: HealthTopicPreset[] = [
  {
    id: 'dagusibu-dasar',
    category: 'dagusibu',
    title: 'DAGUSIBU: Dapatkan, Gunakan, Simpan, Buang Obat dengan Benar',
    tagline: 'Gerakan Masyarakat Cerdas Menggunakan Obat (GeMa CerMat) IAI & Kemenkes',
    badge: 'GeMa CerMat',
    keyKeywords: 'dagusibu, apotek resmi, cara minum obat, penyimpanan obat, pembuangan limbah obat',
    clinicalPoints: [
      'Dapatkan: Selalu beli obat di sarana resmi (Apotek berizin dengan Apoteker berpraktek), periksa NIE BPOM & tanggal kadaluarsa.',
      'Gunakan: Minum obat sesuai dosis, frekuensi, dan instruksi waktu (sebelum/sesudah makan, antibiotik wajib tuntas).',
      'Simpan: Simpan di tempat sejuk, kering, terlindung dari sinar matahari langsung, jauhkan dari jangkauan anak-anak. Jangan simpan semua obat di kulkas.',
      'Buang: Rusak kemasan, hilangkan label identitas resep, campur obat sisa dengan tanah/kopi, buang secara aman.'
    ],
    suggestedDosAndDonts: {
      dos: [
        'Tanyakan selalu aturan pakai obat kepada Apoteker saat penyerahan resep.',
        'Simpan obat dalam kemasan aslinya lengkap dengan brosur petunjuk.',
        'Hancurkan tablet/isi kapsul sebelum dibuang ke tempat sampah tertutup.'
      ],
      donts: [
        'Jangan membeli obat keras di warung bebas atau toko online tanpa resep dokter.',
        'Jangan membuang obat antibiotik cair langsung ke saluran air/kloset.',
        'Jangan berbagi obat resep pribadi kepada anggota keluarga lain.'
      ]
    },
    visualIdea: 'Infografis 4 kuadran ceria berwarna teal dan amber dengan ikon rumah obat, jam minum obat, kotak obat terkunci, dan tempat sampah daur ulang ramah lingkungan.'
  },
  {
    id: 'amr-antibiotik',
    category: 'safety',
    title: 'Bijak Gunakan Antibiotik: Hentikan Bahaya Resistensi Bakteri (AMR)',
    tagline: 'Antibiotik Bukan Obat Sakit Kepala, Demam Biasa, atau Flu Batuk Pilek!',
    badge: 'Global AMR',
    keyKeywords: 'antibiotik, resistensi bakteri, amr, superbug, infeksi virus vs bakteri',
    clinicalPoints: [
      'Antibiotik HANYA membunuh bakteri, sama sekali TIDAK MEMPAN terhadap infeksi virus seperti flu, batuk pilek, dan COVID-19.',
      'Konsumsi antibiotik sembarangan memicu resistensi bakteri (bakteri kebal/superbug) sehingga kelak infeksi biasa menjadi mematikan.',
      'Antibiotik adalah OBAT KERAS (Lingkaran Merah K) yang mutlak memerlukan resep dokter dan asesmen laboratorium.',
      'Bila diresepkan dokter, habiskan seluruh dosis antibiotik meskipun gejala sudah terasa sembuh.'
    ],
    suggestedDosAndDonts: {
      dos: [
        'Habiskan seluruh antibiotik sesuai petunjuk dokter dan Apoteker.',
        'Istirahat cukup dan konsumsi cairan hangat saat terserang batuk pilek flu biasa.',
        'Tanyakan pada dokter: Apakah antibiotik ini benar-benar diperlukan?'
      ],
      donts: [
        'Jangan pernah membeli antibiotik (seperti Amoxicillin/Cefixime) tanpa resep.',
        'Jangan menghentikan antibiotik di tengah jalan saat badan sudah enakan.',
        'Jangan menyimpan sisa antibiotik untuk dipakai di kemudian hari.'
      ]
    },
    visualIdea: 'Ilustrasi mikroba bakteri yang mengenakan perisai zirah kebal melawan obat, dengan diagram perbandingan infeksi virus vs bakteri dan stempel merah peringatan bahaya resistensi.'
  },
  {
    id: 'hipertensi-kepatuhan',
    category: 'chronic',
    title: 'Hipertensi "The Silent Killer": Rutin Minum Obat Lindungi Jantung & Ginjal',
    tagline: 'Tekanan Darah Terkontrol, Hidup Tenang Tanpa Ancaman Stroke!',
    badge: 'Kardiovaskular',
    keyKeywords: 'hipertensi, tekanan darah tinggi, amlodipine, candesartan, kepatuhan minum obat, stroke, gagal ginjal',
    clinicalPoints: [
      'Hipertensi sering kali TANPA GEJALA (tidak pusing bukan berarti tekanan darah normal).',
      'Obat antihipertensi bertujuan menjaga tekanan darah stabil target < 130/80 mmHg untuk mencegah stroke, serangan jantung, dan gagal ginjal.',
      'Obat darah tinggi TIDAK MERUSAK GINJAL, justru tekanan darah tinggi yang tidak diobati yang menghancurkan pembuluh darah ginjal.',
      'Minum obat secara rutin pada jam yang sama setiap hari seumur hidup, jangan berhenti tanpa instruksi dokter.'
    ],
    suggestedDosAndDonts: {
      dos: [
        'Ukur tekanan darah secara berkala di rumah (home blood pressure monitoring).',
        'Minum obat pada jam yang sama setiap hari (misal tiap pagi setelah sarapan).',
        'Batasi konsumsi garam maksimal 1 sendok teh (5 gram / 2000 mg natrium) per hari.'
      ],
      donts: [
        'Jangan menghentikan obat sendiri hanya karena merasa badan sudah segar.',
        'Jangan mendobelkan dosis bila lupa minum obat kemarin.',
        'Jangan mengonsumsi obat herbal penurun tensi tanpa konsultasi dokter/Apoteker.'
      ]
    },
    visualIdea: 'Diagram anatomi pembuluh darah yang sehat vs pembuluh darah kaku tersumbat, tensimeter digital menunjukkan angka 120/80 mmHg, dan perisai perlindungan organ jantung dan ginjal.'
  },
  {
    id: 'diabetes-hipoglikemia',
    category: 'chronic',
    title: 'Sahabat Diabetes: Kendalikan Gula Darah & Kenali Tanda Bahaya Hipoglikemia',
    tagline: 'Manajemen Gula Darah Stabil: Tetap Bugar, Produktif, dan Bebas Komplikasi',
    badge: 'Endokrin',
    keyKeywords: 'diabetes melitus, metformin, insulin, hipoglikemia, gula darah drop, keringat dingin',
    clinicalPoints: [
      'Disiplin waktu makan bersamaan dengan jadwal konsumsi obat antidiabetes (Metformin bersama/sesudah makan, Glimepiride 15-30 menit sebelum sarapan).',
      'Kenali gejala HIPOGLIKEMIA (gula darah drop < 70 mg/dL): keringat dingin gemetar, jantung berdebar kencang, pandangan kabur, dan rasa lapar mendadak.',
      'Pertolongan pertama hipoglikemia dengan ATURAN 15: Konsumsi 15 gram karbohidrat cepat serap (1 sendok makan gula pasir atau 1/2 cangkir teh manis/jus buah), tunggu 15 menit, lalu cek kembali gula darah.',
      'Rutin periksa HbA1c setiap 3 bulan sekali dengan target < 7.0%.'
    ],
    suggestedDosAndDonts: {
      dos: [
        'Selalu bawa permen atau saset gula pasir kemana pun Anda bepergian.',
        'Lakukan olahraga ringan teratur 30 menit sehari minimal 5 hari seminggu.',
        'Periksa kaki setiap hari untuk mendeteksi luka gores sedini mungkin.'
      ],
      donts: [
        'Jangan melewatkan jadwal makan setelah meminum obat pemacu insulin.',
        'Jangan berjalan tanpa alas kaki meskipun di dalam rumah.',
        'Jangan sembarangan menambah dosis insulin bila hasil gula darah sesaat tinggi.'
      ]
    },
    visualIdea: 'Infografis dinamis menunjukkan grafik kadar gula darah ideal, ikon jam piring makan teratur, serta panduan langkah darurat 1-2-3 penyelamatan saat serangan hipoglikemia.'
  },
  {
    id: 'gerd-vs-maag',
    category: 'otc',
    title: 'Bedanya GERD vs Maag Biasa: Jangan Salah Waktu Minum Obat Lambung!',
    tagline: 'Beda Gejala, Beda Obat, dan Beda Jam Minumnya Agar Cepat Pulih!',
    badge: 'Lambung & GERD',
    keyKeywords: 'maag, gastritis, gerd, ulu hati, asam lambung naik, antasida, omeprazole, sukralfat tablet dowa',
    clinicalPoints: [
      'Maag (Dispepsia) adalah peradangan dinding lambung dengan rasa nyeri/perih di ulu hati dan begah kembung.',
      'GERD adalah naiknya asam lambung ke kerongkongan disertai rasa panas terbakar di dada (heartburn) dan rasa asam/pahit di pangkal lidah.',
      'Waktu minum obat lambung sangat spesifik: Antasida (saat perut kosong 1 jam ac atau 2 jam pc dan dikunyah), PPI Omeprazole (30-60 menit sebelum sarapan pagi).',
      'Sukralfat tablet (DOWA 2 maks 20 tab): Diminum dengan air saat perut kosong 1 jam sebelum makan atau sebelum tidur, jeda 2 jam dari antasida.'
    ],
    suggestedDosAndDonts: {
      dos: [
        'Makan dengan porsi kecil namun sering (small frequent meals).',
        'Tinggikan kepala saat tidur 15-20 cm dengan bantal bertingkat/baji.',
        'Kunyah tablet antasida sampai benar-benar lumat sebelum ditelan.'
      ],
      donts: [
        'Jangan langsung berbaring tidur dalam rentang waktu 2-3 jam setelah makan.',
        'Jangan minum obat antasida dan sukralfat secara bersamaan tanpa jeda.',
        'Hindari pemicu: kopi pekat, cokelat, gorengan berlemak, dan cabai pedas.'
      ]
    },
    visualIdea: 'Diagram perbandingan anatomis: lambung dengan erosi dinding vs sfingter esofagus bawah yang melemah memicu asam lambung naik ke dada, disertai garis waktu jam minum obat.'
  },
  {
    id: 'puasa-ramadhan',
    category: 'general',
    title: 'Panduan Cermat Aturan Minum Obat Saat Menjalankan Ibadah Puasa Ramadhan',
    tagline: 'Ibadah Puasa Lancar, Terapi Obat Tetap Terjaga dan Terkontrol Sempurna',
    badge: 'Ramadhan Sehat',
    keyKeywords: 'minum obat saat puasa, jadwal obat ramadhan, sahur dan buka puasa, obat hipertensi puasa',
    clinicalPoints: [
      'Perubahan jam minum obat dari rentang 24 jam menjadi rentang 10,5 jam (antara waktu berbuka puasa hingga sahur).',
      'Obat 1x sehari: Diminum saat berbuka puasa atau saat sahur (konsisten setiap hari).',
      'Obat 2x sehari: Diminum 1 dosis saat berbuka puasa dan 1 dosis saat sahur (rentang waktu sekitar 10-12 jam).',
      'Obat 3x sehari: KONSULTASIKAN KE APOTEKER untuk diganti ke sediaan lepas lambat (extended-release) atau obat 1x-2x sehari. Bila tidak bisa diubah, bagi interval: saat buka (pukul 18.00), sebelum tidur (pukul 23.00), dan saat sahur (pukul 04.00).'
    ],
    suggestedDosAndDonts: {
      dos: [
        'Konsultasikan seluruh regimen obat rutin ke Apoteker 1-2 minggu sebelum Ramadhan.',
        'Perbanyak minum air putih 8 gelas per malam dengan pola 2-4-2 (2 buka, 4 malam, 2 sahur).',
        'Segera batalkan puasa bila timbul tanda hipoglikemia berat atau dehidrasi akut.'
      ],
      donts: [
        'Jangan meminum sekaligus 3 dosis obat saat sahur!',
        'Jangan menghentikan obat rutin tanpa rekomendasi dokter/Apoteker.',
        'Hindari konsumsi makanan manis berlebihan saat berbuka yang memicu lonjakan gula darah drastis.'
      ]
    },
    visualIdea: 'Visual jam dinding estetik islami dengan pembagian waktu sahur (04.00), buka puasa (18.00), dan malam (22.00) lengkap dengan ikon gelas air dan kapsul obat.'
  },
  {
    id: 'bumil-busui-safety',
    category: 'special-pop',
    title: 'Keamanan Obat bagi Ibu Hamil & Menyusui: Lindungi Buah Hati Sejak Dini',
    tagline: 'Cerdas Memilih Obat yang Aman untuk Janin dan Bayi ASI Eksklusif',
    badge: 'Bumil & Busui',
    keyKeywords: 'keamanan obat ibu hamil, menyusui, teratogenik, fda kategori x, parasetamol bumil',
    clinicalPoints: [
      'Trimester pertama (minggu ke-1 hingga ke-12) adalah masa paling kritis organogenesis janin yang sangat rentan terhadap efek teratogenik obat.',
      'Hindari obat kategori X (seperti Isotretinoin, Statin, Warfarin, Methotrexate) yang terbukti mutlak memicu cacat bawaan lahir.',
      'Analgesik pilihan pertama untuk sakit kepala/demam ibu hamil adalah Parasetamol dosis terendah dalam durasi sesingkat mungkin.',
      'Hati-hati obat batuk pilek: dekongestan Pseudoefedrin dapat menurunkan aliran darah plasenta, hindari obat bebas kombo tanpa konsultasi Apoteker.'
    ],
    suggestedDosAndDonts: {
      dos: [
        'Selalu informasikan usia kehamilan atau status menyusui kepada dokter dan Apoteker.',
        'Utamakan terapi non-farmakologi (kompres hangat, istirahat cukup, hidrasi oral).',
        'Minum obat tepat setelah menyusui agar kadar obat dalam ASI saat sesi menyusui berikutnya berada di titik terendah.'
      ],
      donts: [
        'Jangan mengonsumsi obat antinyeri NSAID (Ibuprofen, Asam Mefenamat) terutama di trimester ke-3 (risiko penutupan dini duktus arteriosus).',
        'Jangan minum jamu rebusan atau suplemen herbal tanpa bukti keamanan ilmiah.',
        'Jangan minum obat antibiotik golongan Tetrasiklin (memicu pewarnaan gigi permanen janin).'
      ]
    },
    visualIdea: 'Ilustrasi lembut seorang ibu hamil dan ibu menyusui dikelilingi perisai pelindung floral, dengan tabel warna hijau (aman) vs merah (bahaya teratogenik) dan lencana apoteker ramah.'
  },
  {
    id: 'inhaler-asma',
    category: 'otc',
    title: 'Teknik Tepat Pakai Inhaler Asma (MDI & DPI): Obat Masuk Paru, Bukan Tertelan!',
    tagline: '70% Pasien Asma Salah Menggunakan Inhaler! Kuasai 5 Langkah Benar',
    badge: 'Respirasi & Asma',
    keyKeywords: 'inhaler asma, mdi, dry powder inhaler, seretide, symbicort, ventolin, cara pakai inhaler, kumur mulut',
    clinicalPoints: [
      'Kocok inhaler MDI 5 detik, hembuskan napas maksimal membuang udara dari paru-paru.',
      'Kunci koordinasi: Mulai tarik napas perlahan melalui mulut BERSAMAAN dengan menekan kanister inhaler (tekan sekali).',
      'Tarik napas dalam-dalam selama 3-5 detik, lalu TAHAN NAPAS selama 10 detik agar partikel obat mengendap di bronkus paru.',
      'Wajib KUMUR-KUMUR dan buang airnya setelah menggunakan inhaler kortikosteroid untuk mencegah sariawan jamur (candidiasis oral) dan suara serak.'
    ],
    suggestedDosAndDonts: {
      dos: [
        'Gunakan alat bantu Spacer terutama pada anak-anak atau lansia dengan koordinasi napas terbatas.',
        'Bersihkan mouthpiece seminggu sekali dengan kain kering bersih.',
        'Kumur dan buang air setelah menghirup inhaler pencegah (inhaler steroid).'
      ],
      donts: [
        'Jangan menekan inhaler sebelum mulai menarik napas (obat akan mengendap di tenggorokan).',
        'Jangan langsung menghembuskan napas terburu-buru setelah menghirup obat.',
        'Jangan menelan air kumuran sisa inhaler steroid.'
      ]
    },
    visualIdea: 'Diagram infografis 5 langkah kartun berurutan: 1. Kocok, 2. Buang napas, 3. Tekan & Tarik, 4. Tahan 10 detik, 5. Kumur mulut, dengan ilustrasi saluran bronkus paru yang melebar lega.'
  },
  {
    id: 'interaksi-makanan',
    category: 'safety',
    title: 'Waspada Interaksi Obat dengan Makanan, Susu, dan Jus Buah Segar',
    tagline: 'Minum Obat dengan Minuman yang Salah Bisa Bikin Obat Gagal Bekerja!',
    badge: 'Keamanan Obat',
    keyKeywords: 'interaksi obat makanan, susu dan antibiotik, ciprofloxacin dan kalsium, jeruk bali grapefruit, kopi dan teofilin',
    clinicalPoints: [
      'Susu & Produk Kalsium Tinggi: Mengikat antibiotik Ciprofloxacin, Tetrasiklin, dan Suplemen Besi membentuk kelat tak larut sehingga obat gagal diserap (beri jeda 2 jam).',
      'Jus Jeruk Bali / Grapefruit: Menghambat enzim CYP3A4 di usus, menyebabkan penumpukan kadar obat Statin (Simvastatin) dan Amlodipine hingga dosis toksik berbahaya.',
      'Kopi & Teh Pekat: Tanin dalam teh mengendapkan zat besi, kafein meningkatkan risiko tremor dan takikardia jika digabung obat asma atau dekongestan.',
      'Sayuran Hijau Tinggi Vitamin K (Bayam, Brokoli): Menetralkan khasiat obat pengencer darah Warfarin dan meningkatkan risiko bekuan darah.'
    ],
    suggestedDosAndDonts: {
      dos: [
        'Selalu minum obat dengan segelas AIR PUTIH BIASA (hangat atau suhu ruang).',
        'Beri jeda minimal 2 jam antara minum obat dan konsumsi susu atau produk antasida.',
        'Tanyakan kepada Apoteker apakah obat Anda harus diminum sebelum atau sesudah makan.'
      ],
      donts: [
        'Jangan pernah menelan obat menggunakan susu, jus jeruk, teh manis pekat, atau kopi.',
        'Jangan mengonsumsi alkohol bersamaan dengan obat pereda nyeri (risiko kerusakan hati/lambung berat).',
        'Jangan makan pisang atau makanan tinggi kalium berlebih saat mengonsumsi obat Spironolactone/ACE-Inhibitor.'
      ]
    },
    visualIdea: 'Tabel visual perbandingan: Kiri = Ikon Gelas Air Putih (Centang Hijau Aman), Kanan = Ikon Susu, Jus Grapefruit, Teh, Kopi (Tanda Silang Merah Bahaya Khelasi) dengan panah peringatan farmakologi.'
  },
  {
    id: 'bud-vs-ed',
    category: 'dagusibu',
    title: 'Beyond Use Date (BUD) vs Expired Date (ED): Jangan Sampai Keliru!',
    tagline: 'Obat Sirup Kering & Tetes Mata yang Sudah Dibuka Tidak Berlaku Sampai Tanggal di Dus!',
    badge: 'Stabilitas USP',
    keyKeywords: 'beyond use date, expired date, bud racikan, sirup kering antibiotik, tetes mata minidose multidose, stabilitas obat',
    clinicalPoints: [
      'Expired Date (ED) adalah tanggal batas kadaluarsa obat selama kemasan MASIH TERSEGEL rapat dari pabrik.',
      'Beyond Use Date (BUD) adalah batas waktu obat aman digunakan SETELAH SEGEL DIBUKA atau setelah obat diracik.',
      'Sirup Kering Antibiotik (Amoxicillin, Cefixime sirup): Hanya bertahan 7 HARI pada suhu ruang (atau 14 hari di kulkas) setelah dicampur air!',
      'Tetes Mata Multidose (botol biasa): Hanya bertahan MAKSIMAL 28 HARI (1 bulan) setelah segel dibuka karena risiko kontaminasi bakteri.',
      'Tetes Mata Minidose (strip tanpa pengawet): Hanya bertahan MAKSIMAL 3 x 24 JAM setelah tutup dibuka.'
    ],
    suggestedDosAndDonts: {
      dos: [
        'Tuliskan TANGGAL BUKA segel dengan spidol pada botol obat sirup atau tetes mata.',
        'Simpan sediaan racikan sesuai instruksi etiket Apoteker (salep, sirup, puyer).',
        'Segera buang obat bila warnanya berubah, berbau asam, atau terdapat endapan menggumpal.'
      ],
      donts: [
        'Jangan memakai tetes mata yang sudah dibuka 3 bulan lalu meskipun tanggal ED di dus masih 2 tahun lagi!',
        'Jangan menyimpan sirup kering antibiotik sisa di kulkas untuk diminum bulan depan.',
        'Jangan membiarkan ujung penetes tetes mata menyentuh kelopak mata atau tangan.'
      ]
    },
    visualIdea: 'Infografis kartu kalender: Membandingkan segel tertutup (ED Pabrik 2028) vs segel dibuka (BUD 28 Hari dengan stiker pengingat tanggal buka), dilengkapi ikon botol tetes mata dan sirup kering.'
  }
];

export const MEDIA_TYPE_OPTIONS: MediaTypeOption[] = [
  {
    id: 'poster',
    name: 'Poster Edukasi Faskes (A3 / A4)',
    description: 'Format cetak dinding untuk ruang tunggu Apotek, Klinik, Puskesmas, atau Rumah Sakit.',
    aspectRatio: 'Portrait 3:4 atau 1:√2 (A3/A4 Cetak)',
    targetLength: '1 Halaman (Headline besar, 3-5 Poin Ringkas, Visual Dominan, CTA)',
    iconName: 'Layout',
    badge: 'Cetak & Dinding',
    promptInstructions: `Rancang naskah teks dan tata letak untuk POSTER EDUKASI KESEHATAN FARMASI ukuran cetak A3/A4.
Format harus memiliki:
1. JUDUL POSTER (HEADLINE): Maksimal 8-10 kata, sangat mencolok, menggugah rasa ingin tahu, dan mudah dibaca dari jarak 2 meter.
2. SUB-HEADLINE: 1 kalimat penjelas yang memperjelas urgensi topik.
3. 3-5 POIN INTI EDUKASI: Disusun berurutan dengan ikon/nomor penanda, bahasa awam yang komunikatif, ringkas (maksimal 2 kalimat per poin).
4. BOKS PERBANDINGAN "APA YANG BOLEH & JANGAN DILAKUKAN" (DO'S & DON'TS): Format 2 kolom yang sangat kontras dan mudah dipindai mata pasien.
5. CALL TO ACTION (CTA): Ajakan berkonsultasi dengan Apoteker di Apotek / Faskes.
6. PROMPT VISUAL AI (DALL-E 3 / Midjourney / Canva): Berikan prompt bahasa Inggris terperinci untuk membuat grafis ilustrasi latar poster yang bersih, profesional, modern, dan bernuansa medis.`
  },
  {
    id: 'leaflet',
    name: 'Leaflet / Brosur Pasien (Lipat Tiga / Tri-Fold)',
    description: 'Format edukasi bawa pulang lipat 3 (6 panel) yang dibagikan saat penyerahan obat (dispensing).',
    aspectRatio: 'Landscape Tri-fold (6 Halaman Panel)',
    targetLength: '6 Panel Terstruktur (Cover, Pengantar, 3 Panel Isi, Panel Kontak)',
    iconName: 'BookOpen',
    badge: 'Lipat 3 (Tri-Fold)',
    promptInstructions: `Rancang konten lengkap untuk LEAFLET / BROSUR PASIEN LIPAT TIGA (TRI-FOLD BROCHURE - 6 PANEL).
Strukturkan konten ke dalam 6 Panel yang jelas:
- PANEL 1 (COVER DEPAN): Judul utama menarik, tagline, ilustrasi utama, dan logo/nama sarana farmasi.
- PANEL 2 (KENALI MASALAH): Definisi penyakit/kondisi dalam bahasa awam, fakta penting, dan gejala umum.
- PANEL 3 (CARA KERJA & PENGGUNAAN OBAT): Aturan pakai, waktu minum yang tepat, durasi terapi.
- PANEL 4 (PANTANGAN & INTERAKSI OBAT): Hal yang wajib dihindari, interaksi makanan/minuman, efek samping yang perlu diwaspadai.
- PANEL 5 (TIPS HIDUP SEHAT & KAPAN KE DOKTER): Terapi non-farmakologi dan tanda bahaya (Red Flags) darurat.
- PANEL 6 (COVER BELAKANG / KONTAK): Tanya Apoteker Anda, alamat faskes, nomor konsultasi WhatsApp, dan catatan edukasi resmi.`
  },
  {
    id: 'carousel',
    name: 'Infografis Carousel Instagram (10 Slide)',
    description: 'Format konten edukasi media sosial multi-slide swipe yang interaktif dan viral.',
    aspectRatio: 'Square 1:1 atau Portrait 4:5 (10 Slide)',
    targetLength: '10 Slide Ringkas (Hook, Body Swipe, Summary, CTA)',
    iconName: 'Instagram',
    badge: 'Instagram 10 Slide',
    promptInstructions: `Rancang naskah CAROUSEL INSTAGRAM EDUKASI FARMASI (10 SLIDE BERURUTAN) dengan retention rate tinggi:
- SLIDE 1 (HOOK / COVER): Judul provokatif/pertanyaan yang menghentikan scroll jari netizen (Stop Scrolling Hook).
- SLIDE 2 (EMPATHY / PROBLEM): Cerita masalah nyata atau mitos keliru yang sering dipercaya masyarakat.
- SLIDE 3 (FAKTA ILMIAH AWAM): Penjelasan medis/farmasi mengapa hal tersebut berbahaya atau penting.
- SLIDE 4 - 7 (LANGKAH SOLUSI PRAKTIS): 1 slide per solusi/langkah praktis, teks padat maksimal 20 kata per slide.
- SLIDE 8 (DO'S & DON'TS SUMMARY): Rangkuman cepat boleh vs jangan dalam bentuk infografis.
- SLIDE 9 (ACTION CHECKLIST): Hal yang harus dilakukan pasien mulai hari ini.
- SLIDE 10 (CALL TO ACTION & ENGAGEMENT): Ajakan Save post ini, Share ke keluarga/teman yang butuh, dan konsultasikan ke Apoteker di kolom komentar.
Sertakan juga CAPTION INSTAGRAM lengkap dengan hashtag relevan.`
  },
  {
    id: 'video-script',
    name: 'Naskah Video Singkat (TikTok / Reels / Shorts 60 Detik)',
    description: 'Naskah skrip video vertikal 9:16 untuk Apoteker konten kreator dengan hook 3 detik.',
    aspectRatio: 'Vertikal 9:16 (Durasi 45-60 Detik)',
    targetLength: 'Skrip Tabel (Waktu Detik, Visual/Aksi Kamera, Audio/Dialog Apoteker)',
    iconName: 'Video',
    badge: 'TikTok & Reels 60s',
    promptInstructions: `Buatkan NASKAH / SCRIPT VIDEO PENDEK (TIKTOK / REELS / YOUTUBE SHORTS) DURASI 45-60 DETIK yang dinamis dan edukatif.
Gunakan format tabel naskah profesional:
1. KOLOM 1: Waktu (Detik)
2. KOLOM 2: Adegan Visual & Gerakan Kamera (On-Screen Action, Gesture, B-Roll, Teks Layar Pop-up)
3. KOLOM 3: Dialog Suara / Audio Apoteker (Voice-over atau Bicara langsung di depan kamera)
4. KOLOM 4: Sound Effect & Musik Latar (SFX & Tone BGM)

Wajib memiliki:
- HOOK 0-3 DETIK: Pertanyaan mengejutkan atau pernyataan counter-intuitive yang memikat penonton tidak swipe away.
- BODY 3-40 DETIK: Penjelasan ringkas, visualisasi analogi sederhana (contoh perbandingan nyata).
- CLIMAX 40-50 DETIK: Tips utama atau kunci keselamatan pasien.
- CTA 50-60 DETIK: Ajakan follow akun dan konsultasi obat ke Apoteker terdekat.`
  },
  {
    id: 'whatsapp',
    name: 'Broadcast WhatsApp Edukasi Pasien',
    description: 'Format pesan teks WhatsApp berformat rapi (tebal, miring, list) untuk grup pasien kronis.',
    aspectRatio: 'Mobile Chat Text (Formatted Markdown)',
    targetLength: 'Pesan Singkat Mudah Dibaca (Scannable with Emojis)',
    iconName: 'MessageSquare',
    badge: 'WhatsApp Broadcast',
    promptInstructions: `Tuliskan PESAN EDUKASI BROADCAST WHATSAPP PASIEN yang ramah, hangat, dan mudah dibaca di layar HP:
1. Menggunakan format WhatsApp resmi: *Tebal*, _Miring_, dan list nomor/emoji yang rapi.
2. Salam pembuka hangat dari Apoteker kepada pasien sahabat apotek.
3. Inti pesan edukasi tidak lebih dari 300 kata, menggunakan kalimat pendek-pendek (maksimal 2 baris per paragraf agar tidak melelahkan mata).
4. Poin-poin penting yang mudah diingat pasien.
5. Tombol atau ajakan: Silakan balas pesan ini bila Bapak/Ibu ingin berkonsultasi mengenai aturan minum obat.
6. Salam penutup profesional: Apoteker Penanggung Jawab Apotek.`
  },
  {
    id: 'rollup-banner',
    name: 'Standing Rollup Banner Penyuluhan (85 x 200 cm)',
    description: 'Format spanduk berdiri vertikal untuk pameran kesehatan, posyandu lansia, atau lobi apotek.',
    aspectRatio: 'Vertikal Tinggi 85x200 cm (Rasio ~1:2.35)',
    targetLength: 'Hierarki Vertikal 4 Tingkat (Header, Hero Message, 4 Poin Infografis, Footer)',
    iconName: 'Flag',
    badge: 'Standing Banner',
    promptInstructions: `Rancang tata letak dan naskah STANDING ROLLUP BANNER UKURAN 85 x 200 cm untuk penyuluhan kesehatan:
- TINGKAT 1 (EYE LEVEL ATAS): Judul besar banner, logo Apotek/Faskes, dan pesan utama yang terbaca jelas dari jarak 5 meter.
- TINGKAT 2 (TENGAH ATAS): Ilustrasi utama/infografis piktogram yang memvisualisasikan topik.
- TINGKAT 3 (TENGAH BAWAH): 4 Kotak ringkasan tips penting dengan ikon grafis besar dan poin teks singkat padat.
- TINGKAT 4 (BAWAH): Informasi kontak layanan konsultasi farmasi, media sosial, dan tagline keselamatan pasien.`
  }
];

export const TARGET_AUDIENCE_OPTIONS: TargetAudienceOption[] = [
  {
    id: 'general',
    name: 'Masyarakat Umum / Pasien Awam Dewasa',
    description: 'Bahasa populer sehari-hari, jelas, tanpa istilah medis latin yang rumit.',
    readingLevel: 'Menengah Awam (SMP-SMA)',
    vocabularyFocus: 'Hindari jargon seperti "farmakokinetik", ganti dengan "cara kerja obat di tubuh".'
  },
  {
    id: 'elderly',
    name: 'Pasien Lansia / Geriatri (Usia > 60 Tahun)',
    description: 'Sangat empatik, sopan, font besar bila dicetak, kalimat pendek, instruksi sederhana.',
    readingLevel: 'Sangat Mudah Dipahami & Menenangkan',
    vocabularyFocus: 'Gunakan analogi ramah, fokus pada keselamatan minum obat dan pencegahan lupa.'
  },
  {
    id: 'mothers',
    name: 'Ibu Hamil, Ibu Menyusui & Orang Tua Balita',
    description: 'Fokus pada keselamatan janin dan tumbuh kembang anak, menenangkan kekhawatiran ibu.',
    readingLevel: 'Komunikatif, Keibuan, Penuh Perhatian',
    vocabularyFocus: 'Keamanan laktasi, efek samping minimal, dosis akurat berdasarkan berat badan anak.'
  },
  {
    id: 'youth',
    name: 'Remaja & Generasi Muda (Gen-Z / Milenial)',
    description: 'Gaya santai, kekinian, relevan dengan gaya hidup modern, to-the-point.',
    readingLevel: 'Santai, Visual-Oriented, Dinamis',
    vocabularyFocus: 'Kaitan obat dengan produktivitas, begadang, kopi, gaya hidup sehat tanpa menggurui.'
  },
  {
    id: 'chronic-patients',
    name: 'Pasien Penyakit Kronis (Hipertensi, DM, Jantung)',
    description: 'Menekankan pentingnya kepatuhan jangka panjang dan pencegahan komplikasi fatal.',
    readingLevel: 'Edukasi Terarah & Membangun Motivasi',
    vocabularyFocus: 'Kepatuhan rutin, target laboratorium (tensi/gula darah), sinergi gaya hidup.'
  },
  {
    id: 'healthcare-workers',
    name: 'Kader Posyandu & Tenaga Medis Faskes',
    description: 'Dapat memuat dasar pedoman teknis klinis dan tips penyuluhan ke masyarakat.',
    readingLevel: 'Semi-Teknis & Panduan Edukator',
    vocabularyFocus: 'Standar regulasi Kemenkes, konseling terstruktur, cara deteksi red flags.'
  }
];

export const COMMUNICATION_TONE_OPTIONS: CommunicationToneOption[] = [
  {
    id: 'empathetic',
    name: 'Empatik, Hangat & Menenangkan ❤️',
    description: 'Memberikan rasa aman bagi pasien yang cemas akan penyakit atau efek samping obat.',
    styleKeywords: 'Penuh empati, menyejukkan, mendengarkan, suportif, tidak menakut-nakuti.'
  },
  {
    id: 'informative',
    name: 'Ilmiah Populer, Lugas & Akurat 🔬',
    description: 'Berbasis bukti klinis (Evidence-Based) yang disederhanakan agar logis dan dipercaya.',
    styleKeywords: 'Objektif, berbasis data klinis, terstruktur rapi, edukatif, kredibel.'
  },
  {
    id: 'persuasive',
    name: 'Persuasif & Mengajak Aksi Nyata 🚀',
    description: 'Mendorong perubahan perilaku kepatuhan minum obat dengan motivasi kuat.',
    styleKeywords: 'Menyerukan aksi, membangkitkan kesadaran, inspiratif, solutif.'
  },
  {
    id: 'casual',
    name: 'Santai, Gaul & Akrab (Sahabat Farmasi) 💬',
    description: 'Cocok untuk media sosial agar terasa seperti mengobrol dengan teman apoteker.',
    styleKeywords: 'Kekinian, bahasa mengalir, ada selipan humor santun, tidak kaku.'
  },
  {
    id: 'urgent',
    name: 'Tegas, Waspada & Perhatian Bahaya (Alert) ⚠️',
    description: 'Untuk topik bahaya seperti resistensi antibiotik, obat ilegal, atau tanda bahaya darurat.',
    styleKeywords: 'Serius, tegas, menyoroti risiko fatal, protektif, memberi batas jelas.'
  }
];

export interface GeneratePromptParams {
  topicTitle: string;
  topicTagline?: string;
  clinicalPoints: string[];
  dosAndDonts?: { dos: string[]; donts: string[] };
  visualIdea?: string;
  mediaType: MediaTypeOption;
  targetAudience: TargetAudienceOption;
  communicationTone: CommunicationToneOption;
  customTopicNotes?: string;
  includeVisualPrompt: boolean;
  includeDosAndDonts: boolean;
  includePharmacyIdentity: boolean;
  pharmacyName?: string;
}

export const buildEducationMasterPrompt = (params: GeneratePromptParams): string => {
  const {
    topicTitle,
    topicTagline,
    clinicalPoints,
    dosAndDonts,
    visualIdea,
    mediaType,
    targetAudience,
    communicationTone,
    customTopicNotes,
    includeVisualPrompt,
    includeDosAndDonts,
    includePharmacyIdentity,
    pharmacyName = 'Farmasi Druggist / Apotek Kita'
  } = params;

  return `### PROMPT PERAN & TUGAS MASTER EDUKATOR FARMASI
Bertindaklah sebagai **Apoteker Spesialis Farmasi Klinis & Praktisi Komunikasi Kesehatan Senior (Senior Health Communication & Clinical Pharmacist Specialist)**. Anda memiliki keahlian mendalam dalam menyederhanakan farmakoterapi kompleks menjadi bahasa yang mudah dicerna, memikat, dan menggerakkan masyarakat untuk patuh minum obat sesuai standar WHO, Kemenkes RI, dan Ikatan Apoteker Indonesia (IAI).

Tugas Anda adalah merancang konten naskah lengkap dan instruksi visual siap pakai untuk:
**${mediaType.name.toUpperCase()}**

---

### PARAMETER KONTEN EDUKASI:
1. **TOPIK UTAMA**: ${topicTitle}
${topicTagline ? `2. **TAGLINE / PESAN KUNCI**: "${topicTagline}"` : ''}
3. **JENIS MEDIA**: ${mediaType.name} (Spesifikasi: ${mediaType.aspectRatio} | ${mediaType.targetLength})
4. **TARGET AUDIENS**: ${targetAudience.name}
   - Tingkat Pemahaman: ${targetAudience.readingLevel}
   - Panduan Gaya Bahasa: ${targetAudience.vocabularyFocus}
5. **TONE & GAYA KOMUNIKASI**: ${communicationTone.name}
   - Karakteristik Bahasa: ${communicationTone.styleKeywords}
${includePharmacyIdentity ? `6. **IDENTITAS PENYELENGGARA**: ${pharmacyName}` : ''}

---

### SUBSTANSI MEDIS & CLINICAL PEARLS YANG WAJIB MASUK:
${clinicalPoints.map((pt, i) => `${i + 1}. ${pt}`).join('\n')}
${customTopicNotes ? `\nCatatan Tambahan Pengguna:\n- ${customTopicNotes}` : ''}

---

### INSTRUKSI SPESIFIK FORMAT FORMATTER (${mediaType.name.toUpperCase()}):
${mediaType.promptInstructions}

${includeDosAndDonts && dosAndDonts ? `### BOKS PERBANDINGAN "DO'S & DON'TS" (WAJIB DISERTAKAN):
- Hal yang Dianjurkan (Boleh/Do):
${dosAndDonts.dos.map(d => `  * ${d}`).join('\n')}
- Hal yang Dilarang (Jangan/Don't):
${dosAndDonts.donts.map(d => `  * ${d}`).join('\n')}
` : ''}

${includeVisualPrompt ? `### INSTRUKSI PROMPT GAMBAR / DESAIN VISUAL AI (DALL-E 3 / MIDJOURNEY / CANVA):
Sertakan blok terpisah di bagian akhir yang berisi "AI Image Generator Prompt" dalam BAHASA INGGRIS yang siap disalin ke Midjourney, DALL-E 3, atau Canva Magic Media.
Arahan visual dasar:
"${visualIdea || 'Desain grafis medis profesional bernuansa clean medical teal and warm amber, infografis minimalis, ilustrasi kartun medis ramah, 8k resolution, vector art style, flat design, white background, no chaotic text.'}"
` : ''}

---

### ATURAN KETAT OUTPUT (OUTPUT CONSTRAINTS):
1. Gunakan Bahasa Indonesia yang luwes, alami, komunikatif, dan bebas dari terjemahan kaku.
2. Hindari singkatan medis yang tidak lazim (misal: "t.i.d", ganti menjadi "3 kali sehari").
3. Pastikan penataan teks memiliki hierarki tipografi yang jelas (Heading 1, Heading 2, Bullet Points, Callouts).
4. Jangan membuat klaim medis berlebihan (overclaim); sertakan etika farmasi dan imbauan konsultasi dengan tenaga kesehatan resmi.
5. Buat konten ini SELESAI SECARA LENGKAP tanpa ada teks placeholder seperti "[Isi sendiri]" atau "[Lanjutkan di sini]". Tuliskan seluruh teksnya dari awal sampai akhir!`;
};

export const getSimulatedOutputPreview = (topic: HealthTopicPreset, media: MediaTypeOption): string => {
  return `### HASIL SIMULASI PREVIEW KONTEN EDUKASI

## 🏷️ Judul Utama (Headline):
# ${topic.title}
*${topic.tagline}*

---

## 🎯 3 Poin Kunci Edukasi untuk Pasien:
1. **Pahami Cara Kerjanya:** ${topic.clinicalPoints[0] || 'Gunakan obat tepat dosis dan waktu.'}
2. **Kunci Disiplin Waktu:** ${topic.clinicalPoints[1] || 'Konsistensi jam minum obat menjaga kadar terapi optimal dalam darah.'}
3. **Jaga Keamanan & Kualitas:** ${topic.clinicalPoints[2] || 'Hindari interaksi makanan dan simpan obat dengan benar.'}

---

## ⚖️ Boks "Boleh vs Jangan" (Do's & Don'ts):
| ✅ Boleh Dilakukan | ❌ Jangan Dilakukan |
| :--- | :--- |
| ${topic.suggestedDosAndDonts.dos[0]} | ${topic.suggestedDosAndDonts.donts[0]} |
| ${topic.suggestedDosAndDonts.dos[1]} | ${topic.suggestedDosAndDonts.donts[1]} |
| ${topic.suggestedDosAndDonts.dos[2]} | ${topic.suggestedDosAndDonts.donts[2]} |

---

## 📢 Pesan Penutup & Call To Action (CTA):
*"Obat adalah sahabat kesembuhan bila digunakan dengan benar, namun bisa berbahaya bila disalahgunakan. Punya pertanyaan tentang resep atau aturan pakai obat Anda? Jangan ragu konsultasikan langsung ke Apoteker kami!"*

---

## 🎨 Prompt Gambar AI (DALL-E 3 / Midjourney / Canva):
\`\`\`text
High quality vector flat design medical illustration for healthcare poster, clean aesthetic, teal and amber palette, friendly clinical pharmacist explaining ${topic.keyKeywords} to an attentive patient, minimalist clean composition, professional infographic layout, modern typography, ultra HD, 8k resolution --ar 3:4 --v 6.0
\`\`\``;
};
