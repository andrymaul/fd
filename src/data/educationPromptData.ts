export interface HealthTopicPreset {
  id: string;
  category: 'dagusibu' | 'chronic' | 'otc' | 'special-pop' | 'safety' | 'general' | 'device' | 'pediatric';
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

export interface RegionalLanguageOption {
  id: 'id-standard' | 'bilingual-javanese' | 'bilingual-sundanese' | 'casual-jakartan';
  name: string;
  description: string;
  promptAddition: string;
}

export const REGIONAL_LANGUAGE_OPTIONS: RegionalLanguageOption[] = [
  {
    id: 'id-standard',
    name: 'Bahasa Indonesia Standar (Baku & Populer)',
    description: 'Format nasional resmi, sopan, lugas, dan mudah dipahami seluruh kalangan masyarakat.',
    promptAddition: 'Gunakan Bahasa Indonesia baku yang luwes, alami, dan komunikatif sesuai kaidah EYD dan etika promkes farmasi.'
  },
  {
    id: 'bilingual-javanese',
    name: 'Bilingual / Selipan Bahasa Jawa (Kromo & Ngoko Alus) 🌾',
    description: 'Sangat cocok untuk lansia, Posyandu, dan warga Jawa Tengah, DIY, & Jawa Timur agar terasa dekat dan akrab.',
    promptAddition: 'Sisipkan sapaan dan frasa Bahasa Jawa halus/krama (seperti "Sugeng enjang Bapak/Ibu", "Mugi-mugi tansah pinaringan kasarasan", "Pramila kedah tertib unjuk obatipun") untuk menghadirkan rasa kekeluargaan yang hangat tanpa menghilangkan kejelasan istilah medis.'
  },
  {
    id: 'bilingual-sundanese',
    name: 'Bilingual / Selipan Bahasa Sunda (Lemes & Ramah) 🍃',
    description: 'Sangat cocok untuk faskes dan apotek di wilayah Jawa Barat dan Banten.',
    promptAddition: 'Sisipkan sapaan dan frasa Bahasa Sunda lemes yang santun dan hangat (seperti "Wilujeng enjing/siang wargi sadaya", "Mugia damang salawasna", "Kade hilap kedah rutin ngaleueut landongna") untuk membangun kedekatan emosional dengan pasien.'
  },
  {
    id: 'casual-jakartan',
    name: 'Bahasa Santai & Gaul Jakarta (Gen-Z & Medsos) 💬',
    description: 'Gaya kasual kekinian (gue-lo / kamu-aku) untuk audiens muda di Instagram, TikTok, dan Twitter/X.',
    promptAddition: 'Gunakan gaya bahasa percakapan kasual santai anak muda masa kini (seperti "Jangan sampe salah ya!", "Btw tau nggak sih?", "Yuk mulai peduli!"), tetap sopan dan kredibel sebagai edukasi apoteker profesional tanpa kesan menggurui.'
  }
];

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
  },
  {
    id: 'tetes-telinga-mata',
    category: 'device',
    title: 'Cara Tepat Pakai Tetes Telinga & Tetes Mata: Jangan Salah Tarik Daun Telinga!',
    tagline: 'Beda Usia Beda Arah Tarik Telinga! Kuasai Teknik Benar Agar Obat Bekerja Efektif',
    badge: 'Sediaan Khusus',
    keyKeywords: 'tetes telinga, tetes mata, teknik tetes telinga anak dewasa, punctal occlusion, jeda tetes mata',
    clinicalPoints: [
      'Tetes Telinga Dewasa: Tarik daun telinga ke ATAS dan ke BELAKANG. Untuk Anak < 3 tahun: Tarik daun telinga ke BAWAH dan ke BELAKANG agar liang telinga lurus.',
      'Hangatkan botol tetes telinga dalam genggaman tangan selama 1-2 menit sebelum diteteskan untuk mencegah sensasi pusing/vertigo akibat cairan dingin di liang telinga.',
      'Tetes Mata: Tarik kelopak mata bawah hingga membentuk kantung, teteskan 1 tetes, lalu pejamkan mata perlahan dan tekan sudut mata bagian dalam (dekat hidung / punctal occlusion) selama 1-2 menit agar obat tidak mengalir ke tenggorokan.',
      'Bila diresepkan > 1 jenis tetes mata, beri jeda minimal 5 menit antar tetes agar obat pertama tidak tercuci atau terbuang.'
    ],
    suggestedDosAndDonts: {
      dos: [
        'Tetap miringkan kepala selama 2-3 menit setelah meneteskan obat telinga agar cairan meresap.',
        'Tekan sudut dalam mata (dekat hidung) setelah tetes mata untuk meminimalkan efek samping sistemik.',
        'Cuci tangan dengan sabun sebelum dan sesudah menggunakan obat tetes.'
      ],
      donts: [
        'Jangan meneteskan obat telinga dingin langsung dari kulkas ke telinga (bisa memicu vertigo mendadak)!',
        'Jangan biarkan ujung botol penetes menyentuh bola mata atau bulu mata.',
        'Jangan menyumbat telinga dengan kapas rapat-rapat yang menyerap obat kembali.'
      ]
    },
    visualIdea: 'Infografis anatomis perbandingan penarikan telinga dewasa (panah ke atas-belakang) vs balita (panah ke bawah-belakang), disertai ilustrasi teknik punctal occlusion pada sudut mata.'
  },
  {
    id: 'supositoria-rektal',
    category: 'device',
    title: 'Teknik Tepat Pakai Supositoria Rektal: Obat Dimasukkan Lewat Anus, Bukan Diminum!',
    tagline: 'Pelepasan Cepat Tanpa Mual Muntah: Panduan Langkah Demi Langkah Pemakaian Supositoria',
    badge: 'Rektal & Supo',
    keyKeywords: 'supositoria, proris supo, dulcolax supo, posisi sims, simpan kulkas, obat lewat anus',
    clinicalPoints: [
      'Supositoria HANYA dimasukkan melalui dubur/anus, TIDAK BOLEH ditelan atau diminum via mulut!',
      'Bila supositoria terasa lembek, masukkan ke dalam kulkas (atau celupkan ke air es) selama beberapa menit sebelum dibuka agar mengeras kembali.',
      'Posisi terbaik: Berbaring miring dengan kaki bagian bawah lurus dan kaki bagian atas ditekuk ke arah dada (Posisi Sims).',
      'Dorong bagian ujung supositoria yang meruncing sedalam 2-3 cm (untuk anak) atau 4-5 cm (untuk dewasa), lalu rapatkan kaki dan tetap berbaring selama 10-15 menit agar obat meleleh dan diserap sempurna.'
    ],
    suggestedDosAndDonts: {
      dos: [
        'Buka kemasan foil sebelum dimasukkan (jangan masukkan bersama bungkusnya!).',
        'Basahi ujung supositoria dengan sedikit air bersih atau pelumas berbahan dasar air (water-based) bila terasa seret.',
        'Gunakan sarung tangan atau cuci tangan bersih sebelum dan sesudah pemakaian.'
      ],
      donts: [
        'Jangan memakai pelumas minyak / vaseline (dapat menghambat pelelehan obat).',
        'Jangan langsung buang air besar atau beranjak berdiri terburu-buru selama 15-20 menit pertama.',
        'Jangan menyimpan supositoria di tempat panas yang terpapar matahari langsung.'
      ]
    },
    visualIdea: 'Ilustrasi ramah kartun medis menunjukkan langkah 1-2-3: 1. Buka foil pembungkus, 2. Posisi berbaring miring satu kaki ditekuk, 3. Relaksasi 15 menit, dengan warna pastel yang sopan dan nyaman dipandang.'
  },
  {
    id: 'diare-anak-zinc',
    category: 'pediatric',
    title: 'Pertolongan Pertama Diare Akut Balita: Rehidrasi Oralit + Zinc Wajib 10 Hari Penuh!',
    tagline: 'Stop Kasih Antibiotik & Antidiare Sembarangan! Kunci Keselamatan Anak Adalah Mencegah Dehidrasi',
    badge: 'Pediatrik & Diare',
    keyKeywords: 'diare balita, oralit, zinc 10 hari, dehidrasi anak, red flags diare, antibiotik diare',
    clinicalPoints: [
      '90% Diare pada anak disebabkan oleh virus (Rotavirus) atau salah makan, SEHINGGA TIDAK BUTUH ANTIBIOTIK dan TIDAK BOLEH DIBERI OBAT ANTIMOTILITAS (seperti Loperamid) karena berbahaya melumpuhkan usus anak.',
      'Pilar Utama 1: ORALIT (Cairan Rehidrasi Oral) diberikan setiap kali anak BAB cair untuk mengganti cairan dan elektrolit yang hilang.',
      'Pilar Utama 2: TABLET ZINC WAJIB 10 HARI PENUH meskipun diare sudah berhenti. Dosis: Usia < 6 bulan = 10 mg/hari; Usia >= 6 bulan = 20 mg/hari. Zinc mempercepat regenerasi epitel usus dan mencegah kekambuhan diare selama 2-3 bulan ke depan.',
      'Waspada TANDA BAHAYA (RED FLAGS): Mata cekung, air mata tidak keluar saat menangis, anak sangat lemas / tidak mau minum, turgor kulit perut lambat kembali, atau BAB disertai darah. Segera ke IGD!'
    ],
    suggestedDosAndDonts: {
      dos: [
        'Larutkan 1 sachet Oralit ke dalam tepat 200 ml air matang (jangan terlalu kental/encer).',
        'Larutkan tablet dispersible Zinc dengan 1 sendok air matang/ASI.',
        'Lanjutkan pemberian ASI dan makanan bergizi porsi kecil sering.'
      ],
      donts: [
        'Jangan memberikan obat antimotilitas (Loperamid) pada anak usia di bawah 12 tahun.',
        'Jangan menghentikan tablet Zinc begitu diare berhenti sebelum 10 hari tuntas.',
        'Jangan memberikan minuman soda manis atau minuman energi sebagai pengganti oralit.'
      ]
    },
    visualIdea: 'Grafik panduan 2 pilar penyelamat diare: Gelas Oralit bertuliskan "Ganti Cairan" dan Tablet Zinc bertuliskan "10 Hari Tuntas", disertai tabel 4 tanda bahaya dehidrasi dengan tanda seru merah.'
  },
  {
    id: 'kepatuhan-oat-tb',
    category: 'chronic',
    title: 'Kepatuhan Pengobatan TB (Tuberkulosis): 6 Bulan Tuntas, Jangan Putus Obat!',
    tagline: 'Urine & Keringat Berwarna Kemerahan Itu Wajar! Kenali Efek Samping Obat TB Tanpa Panik',
    badge: 'Respirasi & TB',
    keyKeywords: 'obat tb, tbc, oat 4kdt, rifampisin urine merah, kepatuhan minum obat tb, tb mdr',
    clinicalPoints: [
      'Pengobatan TB memerlukan waktu MINIMAL 6 BULAN (Fase Intensif 2 bulan + Fase Lanjutan 4 bulan) dengan kombinasi 4KDT (Rifampisin, Isoniazid, Pirazinamid, Etambutol).',
      'Efek Samping Wajar: RIFAMPISIN menyebabkan urine, keringat, air mata, dan air liur berwarna ORANYE-KEMERAHAN. Ini adalah efek metabolisme obat yang sama sekali TIDAK BERBAHAYA, jangan takut dan jangan hentikan obat!',
      'Aturan Minum: Obat TB diserap paling baik saat PERUT KOSONG (1 jam sebelum sarapan pagi atau 2 jam setelah makan malam).',
      'BAHAYA PUTUS OBAT: Berhenti minum obat di bulan ke-2 atau ke-3 karena merasa "sudah sehat" memicu BAKTERI KEBAL OBAT (TB-MDR) yang pengobatannya jauh lebih berat, butuh suntikan, dan waktu 9-24 bulan!'
    ],
    suggestedDosAndDonts: {
      dos: [
        'Minum obat TB setiap hari pada jam yang sama dibantu Pengawas Menelan Obat (PMO).',
        'Konsultasikan ke dokter/Apoteker bila timbul mual hebat, mata/kulit menguning, atau kesemutan.',
        'Gunakan masker dan pastikan ventilasi rumah terpapar sinar matahari pagi.'
      ],
      donts: [
        'Jangan pernah menghentikan obat sendiri hanya karena batuk sudah mereda!',
        'Jangan minum antasida bersamaan dengan obat TB (beri jeda minimal 2 jam).',
        'Jangan panik saat melihat warna kencing berubah menjadi oranye kemerahan.'
      ]
    },
    visualIdea: 'Infografis garis waktu 6 bulan perjuangan sembuh TB, ikon gelas urine oranye dengan label "Efek Wajar Rifampisin - Aman", dan perisai pencegahan TB Kebal Obat.'
  },
  {
    id: 'gout-asam-urat',
    category: 'chronic',
    title: 'Asam Urat: Beda Pencegahan Allopurinol vs Pereda Nyeri Akut Kolkisin & NSAID',
    tagline: 'Jangan Minum Allopurinol Saat Sendi Sedang Meradang Akut! Pahami Beda Fungsinya',
    badge: 'Reumatologi & Gout',
    keyKeywords: 'asam urat, gout arthritis, allopurinol, kolkisin, meloxicam, purin tinggi, nyeri jempol kaki',
    clinicalPoints: [
      'Koleksi Obat Gout terbagi 2: Obat Pereda Nyeri Akut (Kolkisin / NSAID seperti Meloxicam/Celecoxib) dan Obat Penurun Asam Urat Jangka Panjang (Allopurinol / Febuxostat).',
      'ATURAN KRUSIAL: JANGAN MULAI minum Allopurinol saat sendi sedang MERADANG AKUT (bengkak, merah, nyeri panas)! Penurunan kadar asam urat yang mendadak saat fase akut justru memperparah mobilisasi kristal dan memperlama radang sendi.',
      'Bila pasien SUDAH rutin minum Allopurinol sebelum serangan akut, lanjutkan dosis rutin tersebut dan tambahkan obat pereda nyeri/kolkisin atas petunjuk dokter.',
      'Allopurinol diminum SESUDAH MAKAN untuk mengurangi iritasi lambung, dan perbanyak minum air putih minimal 2-2,5 liter sehari untuk mencegah batu ginjal asam urat.'
    ],
    suggestedDosAndDonts: {
      dos: [
        'Minum obat pereda nyeri segera dalam 24 jam pertama saat serangan nyeri sendi terasa.',
        'Perbanyak minum air putih hangat untuk membantu ginjal membuang kelebihan asam urat.',
        'Jaga kadar asam urat darah target < 6.0 mg/dL untuk mencegah terbentuknya tofus.'
      ],
      donts: [
        'Jangan memijat atau mengurut sendi jempol kaki yang sedang bengkak meradang panas!',
        'Hindari makanan tinggi purin ekstrem: jeroan sapi/ayam, emping melinjo, kerang, alkohol/bir.',
        'Jangan menghentikan Allopurinol secara tiba-tiba tanpa evaluasi dokter/Apoteker.'
      ]
    },
    visualIdea: 'Tabel komparasi 2 fase: Kiri = Fase Nyeri Akut (Ikon Sendi Merah Menyala + Kolkisin/NSAID), Kanan = Fase Pemeliharaan Tenang (Ikon Allopurinol + Target Asam Urat < 6 mg/dL + Diet Rendah Purin).'
  },
  {
    id: 'polifarmasi-lansia',
    category: 'safety',
    title: 'Waspada Polifarmasi & Risiko Jatuh Lansia: Panduan Aman Minum Banyak Obat',
    tagline: 'Orang Tua Minum > 5 Jenis Obat Sekaligus? Kenali Tanda Bahaya Interaksi & Lemas',
    badge: 'Geriatri & Beers',
    keyKeywords: 'polifarmasi, geriatri, lansia, risiko jatuh, kriteria beers, hipotensi ortostatik, kotak obat 7 hari',
    clinicalPoints: [
      'Polifarmasi adalah kondisi konsumsi >= 5 macam obat secara bersamaan, sangat rentan memicu interaksi obat berbahaya dan efek samping kumulatif pada lansia.',
      'Hipotensi Ortostatik & Risiko Jatuh: Obat darah tinggi, obat pembesaran prostat (Tamsulosin), dan obat penenang dapat menyebabkan tensi drop saat lansia bangun dari tempat tidur/duduk ke berdiri.',
      'Waspada Efek Antikolinergik: Obat flu yang mengandung CTM, Diphenhydramine, atau obat batuk dapat menyebabkan mulut kering, konstipasi, retensi urine, dan kebingungan (delirium) pada lansia (Kriteria Beers).',
      'Gunakan Pill Box Organizer 7 Hari (Pagi, Siang, Sore, Malam) dan minta peninjauan obat berkala (Medication Therapy Management / MTM) oleh Apoteker minimal 6 bulan sekali.'
    ],
    suggestedDosAndDonts: {
      dos: [
        'Edukasi lansia untuk duduk perlahan di tepi tempat tidur selama 1 menit sebelum berdiri.',
        'Buat daftar lengkap seluruh obat (termasuk herbal & suplemen) dan tunjukkan ke Apoteker.',
        'Pastikan pencahayaan rumah terang dan tidak ada karpet licin di lantai kamar mandi.'
      ],
      donts: [
        'Jangan memberikan obat tidur atau obat flu yang bikin ngantuk tanpa pengawasan medis.',
        'Jangan membagi atau menghancurkan tablet lepas lambat (SR/CR/XR) tanpa arahan Apoteker.',
        'Jangan menyimpan obat lansia di dekat bumbu dapur atau tempat yang mudah tertukar.'
      ]
    },
    visualIdea: 'Ilustrasi hangat seorang Apoteker membantu kakek/nenek menata kotak obat mingguan warna-warni, dengan ikon perisai keselamatan dari bahaya jatuh dan pusing.'
  },
  {
    id: 'kolesterol-statin',
    category: 'chronic',
    title: 'Terapi Kolesterol Statin: Waktu Minum Tepat Malam Hari & Waspada Nyeri Otot',
    tagline: 'Simvastatin vs Atorvastatin: Kenapa Harus Diminum Malam Hari & Apa Bedanya?',
    badge: 'Kardiovaskular',
    keyKeywords: 'kolesterol, ldl, simvastatin, atorvastatin, rosuvastatin, rhabdomyolysis, nyeri otot mialgia, enzim hmg-coa',
    clinicalPoints: [
      'Mengapa Malam Hari? Enzim HMG-CoA Reduktase (pabrik pembentuk kolesterol di organ hati) bekerja paling aktif pada MALAM HARI saat tubuh beristirahat. Oleh karena itu, Simvastatin wajib diminum pada malam hari sebelum tidur.',
      'Pengecualian Atorvastatin & Rosuvastatin: Memiliki waktu paruh (half-life) panjang (> 14 jam), sehingga boleh diminum pagi, siang, atau malam, asalkan KONSISTEN pada jam yang sama setiap hari.',
      'WASPADA EFEK SAMPING MIALGIA: Bila merasakan pegal linu / nyeri otot hebat tanpa sebab olahraga berlebih, atau air kencing berwarna gelap seperti air teh (tanda rhabdomyolysis), segera lapor ke dokter/Apoteker.',
      'PANTANGAN INTERAKSI: Hindari konsumsi jus grapefruit / jeruk bali merah karena menghambat penguraian Statin di usus hingga kadarnya melonjak 3-5 kali lipat berbahaya.'
    ],
    suggestedDosAndDonts: {
      dos: [
        'Minum Simvastatin pada malam hari setelah makan malam atau sebelum tidur.',
        'Kombinasikan dengan pola makan rendah lemak jenuh dan olahraga kardio teratur 150 menit/minggu.',
        'Cek profil lipid berkala (Kolesterol Total, LDL, HDL, Trigliserida) setiap 3-6 bulan.'
      ],
      donts: [
        'Jangan meminum obat Statin bersama jus jeruk bali / grapefruit.',
        'Jangan mengabaikan rasa nyeri otot atau kram betis yang tak wajar.',
        'Jangan berhenti minum Statin hanya karena hasil lab kolesterol sudah normal kembali.'
      ]
    },
    visualIdea: 'Grafik jam dinding malam hari pukul 21.00 dengan ikon organ hati sedang membentuk kolesterol dan molekul statin memblokir pembentukan tersebut, serta tabel waktu minum Simvastatin vs Atorvastatin.'
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
  regionalLanguage?: RegionalLanguageOption;
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
    regionalLanguage,
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
${regionalLanguage && regionalLanguage.id !== 'id-standard' ? `6. **KEARIFAN LOKAL & GAYA BAHASA KHUSUS**: ${regionalLanguage.name}\n   - Arahan: ${regionalLanguage.promptAddition}` : ''}
${includePharmacyIdentity ? `7. **IDENTITAS PENYELENGGARA**: ${pharmacyName}` : ''}

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

export interface StructuredSimulationData {
  whatsappMessage: string;
  carouselSlides: {
    slideNumber: number;
    badge: string;
    title: string;
    subtitle?: string;
    points: string[];
    callout?: string;
    visualNote: string;
  }[];
  caption: string;
  hashtags: string[];
  posterHeadline: string;
  posterSubheadline: string;
  posterTakeaways: { icon: string; title: string; desc: string }[];
  dosAndDonts: { dos: string[]; donts: string[] };
  callToAction: string;
  videoScript: {
    time: string;
    cameraAction: string;
    dialogue: string;
    sfx: string;
  }[];
}

export const getStructuredSimulationData = (
  topic: HealthTopicPreset,
  pharmacyName: string = 'Farmasi Druggist / Apotek'
): StructuredSimulationData => {
  const p1 = topic.clinicalPoints[0] || 'Gunakan obat tepat dosis dan petunjuk Apoteker.';
  const p2 = topic.clinicalPoints[1] || 'Disiplin waktu dan perhatikan cara pemakaian yang benar.';
  const p3 = topic.clinicalPoints[2] || 'Waspadai efek samping dan jangan ragu bertanya.';
  const p4 = topic.clinicalPoints[3] || 'Simpan obat dengan aman dan jangan berbagi obat resep.';

  // WhatsApp Message Formatted
  const whatsappMessage = `*PANDUAN EDUKASI FARMASI: ${topic.title.toUpperCase()}* 💊✨
_${topic.tagline}_

Halo Sahabat Sehat *${pharmacyName}*! 👋
Demi menjaga efektivitas terapi dan keselamatan Anda dalam menggunakan obat, berikut hal penting yang perlu diperhatikan:

📌 *3 Poin Kunci Penggunaan Obat:*
1️⃣ ${p1}
2️⃣ ${p2}
3️⃣ ${p3}

⚖️ *Yang Boleh & Jangan Dilakukan:*
✅ *Dianjurkan:*
• ${topic.suggestedDosAndDonts.dos[0] || 'Minum obat sesuai anjuran'}
• ${topic.suggestedDosAndDonts.dos[1] || 'Tanyakan aturan pakai pada Apoteker'}

❌ *Hindari:*
• ${topic.suggestedDosAndDonts.donts[0] || 'Jangan hentikan obat sembarangan'}
• ${topic.suggestedDosAndDonts.donts[1] || 'Jangan berbagi obat pribadi'}

📢 *Punya pertanyaan seputar obat Anda?*
Silakan balas pesan ini untuk berkonsultasi langsung dengan Apoteker kami. Kami siap membantu Anda!

Salam Sehat & Hangat,
*Apoteker Penanggung Jawab*
_${pharmacyName}_`;

  // Carousel 10 Slides
  const carouselSlides = [
    {
      slideNumber: 1,
      badge: topic.badge,
      title: topic.title,
      subtitle: topic.tagline,
      points: ['Geser untuk panduan lengkap 👉'],
      visualNote: 'Cover dengan headline besar mencolok, ilustrasi 3D modern tenaga farmasi ramah.'
    },
    {
      slideNumber: 2,
      badge: 'Mitos vs Fakta',
      title: 'Masih Sering Salah Paham?',
      subtitle: 'Banyak pasien mengira obat bekerja sama saja bagaimanapun caranya.',
      points: [
        'Faktanya: Waktu, cara pakai, dan interaksi makanan sangat menentukan kesembuhan!',
        'Kesalahan kecil bisa membuat obat gagal bekerja atau memicu efek toksik.'
      ],
      visualNote: 'Ilustrasi perbandingan tanda tanya besar vs lampu ide menyala.'
    },
    {
      slideNumber: 3,
      badge: 'Fakta Ilmiah',
      title: 'Kenapa Hal Ini Sangat Krusial?',
      subtitle: 'Standar Klinis Kemenkes & Farmakope Indonesia',
      points: [p1],
      visualNote: 'Grafik infografis kadar obat dalam tubuh yang stabil vs tidak teratur.'
    },
    {
      slideNumber: 4,
      badge: 'Langkah 1',
      title: 'Kunci Penggunaan Tepat',
      points: [p2],
      callout: '💡 Selalu patuhi jam minum yang sama setiap hari!',
      visualNote: 'Ikon jam dinding berputar dan kapsul obat higienis.'
    },
    {
      slideNumber: 5,
      badge: 'Langkah 2',
      title: 'Perhatikan Keamanan & Interaksi',
      points: [p3],
      callout: '⚠️ Jangan sepelekan interaksi makanan atau minuman pendamping!',
      visualNote: 'Ikon perisai keamanan obat dan gelas air putih.'
    },
    {
      slideNumber: 6,
      badge: 'Langkah 3',
      title: 'Aturan Khusus yang Wajib Diingat',
      points: [p4],
      callout: '📌 Simpan dalam wadah aslinya agar mutu tetap terjamin.',
      visualNote: 'Kotak obat terkunci rapi terhindar dari panas dan cahaya.'
    },
    {
      slideNumber: 7,
      badge: 'Boleh vs Jangan',
      title: 'Do\'s: Hal yang Sangat Dianjurkan',
      points: topic.suggestedDosAndDonts.dos,
      visualNote: 'Tiga centang hijau besar dengan ikon apoteker memberi jempol.'
    },
    {
      slideNumber: 8,
      badge: 'Boleh vs Jangan',
      title: 'Don\'ts: Hal yang Wajib Dihindari',
      points: topic.suggestedDosAndDonts.donts,
      visualNote: 'Tiga tanda silang merah dengan ikon peringatan bahaya.'
    },
    {
      slideNumber: 9,
      badge: 'Action Checklist',
      title: 'Mulai Hari Ini, Praktikkan Ini!',
      points: [
        'Periksa kembali cara dan jadwal minum obat Anda di rumah.',
        'Catat bila ada keluhan atau efek samping yang tidak biasa.',
        'Konsultasikan seluruh regimen obat ke Apoteker terdekat.'
      ],
      callout: 'Pencegahan adalah kunci keselamatan terapi Anda.',
      visualNote: 'Daftar periksa (checklist) centang emas berkilau.'
    },
    {
      slideNumber: 10,
      badge: 'Tanya Apoteker',
      title: 'Konsultasi Gratis dengan Apoteker',
      subtitle: `Layanan Edukasi Pasien di ${pharmacyName}`,
      points: [
        '📌 Save postingan ini agar tidak lupa!',
        '❤️ Like & Share ke keluarga atau teman yang membutuhkan.',
        '💬 Tuliskan pertanyaan Anda di kolom komentar!'
      ],
      callout: '#TanyaApoteker #BijakObat #EdukasiFarmasi',
      visualNote: 'Kartu kontak apotek lengkap dengan logo, tombol bookmark save, dan share.'
    }
  ];

  const caption = `${topic.title} 💊✨\n\n${topic.tagline}\n\nSebagai pasien atau keluarga pendamping, memahami aturan minum obat yang tepat adalah kunci utama kesembuhan.\n\nSimak rangkuman 10 slide di atas dan bagikan kepada orang terdekat Anda!\n\n🏥 ${pharmacyName}\n#TanyaApoteker #SahabatSehat`;

  const hashtags = ['#EdukasiFarmasi', '#TanyaApoteker', '#GeMaCerMat', '#KemenkesRI', '#BijakGunakanObat', '#ApotekerKlinis'];

  // Poster Takeaways
  const posterTakeaways = [
    { icon: 'Pill', title: 'Aturan & Dosis Tepat', desc: p1 },
    { icon: 'Clock', title: 'Kunci Disiplin Waktu', desc: p2 },
    { icon: 'ShieldAlert', title: 'Keamanan & Interaksi', desc: p3 }
  ];

  // Video Teleprompter Script (60s)
  const videoScript = [
    {
      time: '00:00 - 00:05',
      cameraAction: 'Apoteker menatap kamera dengan ekspresi penasaran, memegang kotak obat / sediaan. Teks layar besar pop-up.',
      dialogue: `"Banyak yang belum tahu! Ternyata ${topic.title.split(':')[0]} itu ada aturan khususnya lho! Jangan sampai salah!"`,
      sfx: 'Whoosh + Pop Up SFX'
    },
    {
      time: '00:05 - 00:25',
      cameraAction: 'Cut ke medium shot. Apoteker menunjukkan peragaan atau infografis perbandingan boleh vs jangan.',
      dialogue: `"Poin pertama, ${p1.split('.')[0]}. Yang kedua, ${p2.split('.')[0]}!"`,
      sfx: 'Ding / Checkmark Sound'
    },
    {
      time: '00:25 - 00:45',
      cameraAction: 'Close-up shot. Apoteker memberikan penekanan serius pada aspek keselamatan pasien.',
      dialogue: `"Ingat ya, jangan pernah ${topic.suggestedDosAndDonts.donts[0] || 'menghentikan obat sembarangan'}! Karena ${p3.split('.')[0]}."`,
      sfx: 'Subtle Alert Bell'
    },
    {
      time: '00:45 - 00:60',
      cameraAction: 'Apoteker tersenyum ramah, melambaikan tangan, menunjuk ke bawah / tombol follow & konsultasi.',
      dialogue: `"Punya pertanyaan tentang resep obat Anda? Yuk langsung konsultasikan ke Apoteker di ${pharmacyName}! Follow untuk tips obat lainnya!"`,
      sfx: 'Upbeat Outro BGM'
    }
  ];

  return {
    whatsappMessage,
    carouselSlides,
    caption,
    hashtags,
    posterHeadline: topic.title,
    posterSubheadline: topic.tagline,
    posterTakeaways,
    dosAndDonts: topic.suggestedDosAndDonts,
    callToAction: `Konsultasikan seluruh kebutuhan obat Anda kepada Apoteker di ${pharmacyName}. Kami siap melayani dengan sepenuh hati demi keselamatan terapi Anda.`,
    videoScript
  };
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
