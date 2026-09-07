import { 
  SwamedikasiProtocol, 
  SwamedikasiCategoryKey, 
  SwamedikasiComorbidType, 
  DecisionTreeNode, 
  SwamedikasiOwaDetails, 
  SwamedikasiComorbidWarning 
} from '../types';

const RAW_SWAMEDIKASI_PROTOCOLS: SwamedikasiProtocol[] = [
  // ============================================================================
  // 1. DEMAM & NYERI (PAIN & FEVER)
  // ============================================================================
  {
    id: 'swam-demam-dewasa',
    title: 'Demam & Panas Dingin (Meriang Dewasa)',
    category: 'pain-fever',
    categoryLabel: 'Demam & Nyeri',
    iconName: 'Flame',
    quickSummary: 'Peningkatan suhu tubuh di atas 37.5°C disertai meriang, menggigil ringan, atau pegal-pegal yang umumnya dipicu infeksi virus saluran napas atau kelelahan.',
    laymanKeywords: ['demam', 'panas', 'meriang', 'panas dingin', 'menggigil', 'sumeng', 'badan anget'],
    typicalSymptoms: [
      'Suhu tubuh terukur 37.5°C – 38.5°C',
      'Badan terasa meriang atau menggigil ringan',
      'Pegal-pegal pada persendian dan otot',
      'Nafsu makan sedikit menurun',
      'Sakit kepala ringan'
    ],
    redFlags: [
      'Demam tinggi > 39°C yang tidak turun dengan obat penurun panas',
      'Demam sudah berlangsung > 3 hari berturut-turut tanpa perbaikan',
      'Disertai kaku kuduk / leher kaku tidak bisa ditekuk ke dada',
      'Disertai ruam bintik-bintik merah di kulit yang tidak hilang saat ditekan gelas kaca',
      'Disertai kejang, linglung, mengigau, atau penurunan kesadaran',
      'Disertai sesak napas berat atau muntah terus menerus tidak bisa masuk cairan'
    ],
    maxSelfMedDays: 3,
    recommendedDrugs: [
      {
        genericName: 'Parasetamol (Acetaminophen)',
        brandExamples: ['Panadol', 'Sanmol', 'Biogesic', 'Dumin', 'Paracetamol Kimia Farma'],
        bpomClass: 'Obat Bebas (Hijau)',
        isFirstLine: true,
        comorbidWarnings: [
          { comorbid: 'hipertensi', status: 'aman', note: 'Pilihan analgesik-antipiretik paling aman untuk penderita tekanan darah tinggi.' },
          { comorbid: 'maag', status: 'aman', note: 'Aman di lambung, tidak mengikis mukosa gaster seperti NSAID.' },
          { comorbid: 'asma', status: 'aman', note: 'Tidak memicu bronkospasme pada mayoritas penderita asma.' },
          { comorbid: 'hamil', status: 'aman', note: 'Pilihan lini pertama paling aman untuk seluruh trimester kehamilan dan menyusui.' }
        ],
        dosageGuideline: 'Dewasa: 500–1000 mg tiap 4–6 jam. Anak: 10–15 mg/kgBB tiap 4–6 jam.',
        dosageDetails: {
          adult: '500 mg – 1000 mg tiap 4–6 jam bila demam/nyeri. Maksimal 4000 mg (4 gram) per 24 jam.',
          pediatric: '10–15 mg/kgBB per kali minum tiap 4–6 jam (maks 5 kali/24 jam). Sirup 120 mg/5 mL: Anak 1–2 th: 5 mL; 3–6 th: 7.5 mL; 7–12 th: 10–15 mL.',
          infant: 'Bayi 0–3 bln: 10 mg/kgBB (atau 0.4–0.6 mL drop 100 mg/mL) tiap 6–8 jam bila demam pasca imunisasi atas arahan dokter. Bayi 3–12 bln: 0.6–1.2 mL drops (60–120 mg) tiap 4–6 jam (maks 4x/24 jam).',
          pregnancy: 'Kategori B (Pilihan Utama). Analgesik-antipiretik lini pertama paling aman untuk seluruh trimester kehamilan dan ibu menyusui.',
          geriatric: '500 mg tiap 6–8 jam (Maksimal 2000–3000 mg/24 jam). Lebih aman untuk lambung, waspada gangguan hepar/ginjal berat.'
        },
        timing: 'Dapat diminum sebelum atau sesudah makan.',
        cautionNotes: 'Paling aman untuk lambung dan ibu hamil. Hindari konsumsi berlebih bila ada riwayat gangguan fungsi hati.',
        targetDrugId: 'drug-paracetamol'
      },
      {
        genericName: 'Ibuprofen 200 mg / 400 mg',
        brandExamples: ['Proris', 'Farsifen', 'Ibuprofen Kimia Farma', 'Bodrex Extra (kombinasi)'],
        bpomClass: 'Obat Bebas Terbatas (Biru)',
        isFirstLine: false,
        comorbidWarnings: [
          { comorbid: 'maag', status: 'kontraindikasi', note: 'KONTRAINDIKASI MUTLAK pada riwayat tukak lambung aktif; risiko perdarahan saluran cerna.' },
          { comorbid: 'hipertensi', status: 'hati-hati', note: 'Dapat menyebabkan retensi natrium & menaikkan tekanan darah.' },
          { comorbid: 'asma', status: 'hati-hati', note: 'Risiko mencetuskan serangan asma akut (NSAID-exacerbated respiratory disease).' },
          { comorbid: 'ginjal', status: 'kontraindikasi', note: 'Menghambat prostaglandin ginjal, menurunkan laju filtrasi glomerulus.' },
          { comorbid: 'hamil', status: 'kontraindikasi', note: 'KONTRAINDIKASI MUTLAK pada Trimester 3 (risiko penutupan dini duktus arteriosus janin).' }
        ],
        dosageGuideline: 'Dewasa: 200–400 mg tiap 6–8 jam. Anak > 6 bln: 5–10 mg/kgBB tiap 6–8 jam sesudah makan.',
        dosageDetails: {
          adult: '200 mg – 400 mg tiap 6–8 jam sesudah makan. Maksimal 1200 mg per 24 jam untuk swamedikasi.',
          pediatric: 'Hanya untuk usia > 6 bulan: 5–10 mg/kgBB per kali minum tiap 6–8 jam sesudah makan. Sirup 100 mg/5 mL: 1–2 th: 2.5 mL; 3–7 th: 5 mL; 8–12 th: 10 mL.',
          infant: 'Bayi < 6 bulan: KONTRAINDIKASI MUTLAK. Bayi 6–12 bulan: 5 mg/kgBB (sirup drops) tiap 6–8 jam sesudah minum ASI/makan.',
          pregnancy: 'Trimester 1 & 2: Kategori C (gunakan hanya bila darurat). Trimester 3: KONTRAINDIKASI MUTLAK (risiko penutupan dini duktus arteriosus). Aman untuk menyusui.',
          geriatric: 'Dosis awal 200 mg sesudah makan. Waspada iritasi lambung, retensi cairan, dan penurunan laju filtrasi ginjal.'
        },
        timing: 'WAJIB diminum SEGERA SESUDAH MAKAN atau bersama makanan.',
        cautionNotes: 'Hindari bila ada riwayat sakit maag kronis, tukak lambung aktif, atau dicurigai demam berdarah dengue (DBD).',
        targetDrugId: 'drug-ibuprofen'
      }
    ],
    nonPharmacolTherapy: [
      'Kompres hangat pada dahi, ketiak, dan lipat paha (JANGAN gunakan kompres air es atau alkohol).',
      'Minum banyak air putih hangat (minimal 2 - 2.5 liter per hari) untuk mencegah dehidrasi.',
      'Kenakan pakaian tipis dan menyerap keringat, jangan berselimut terlalu tebal.',
      'Istirahat tirah baring yang cukup (tidur 7-8 jam).'
    ],
    contraindicatedForSelfMed: [
      'JANGAN mengonsumsi Antibiotik (seperti Amoksisilin) secara mandiri karena demam akut mayoritas disebabkan oleh virus yang tidak mempan antibiotik.',
      'JANGAN gunakan Aspirin pada anak/remaja karena risiko Sindrom Reye yang mematikan.'
    ],
    specialPopulations: {
      pregnancyWarning: 'Parasetamol adalah pilihan obat lini pertama yang paling aman selama kehamilan (Kategori B). Hindari Ibuprofen terutama pada trimester ke-3.',
      pediatricWarning: 'Gunakan sediaan sirup atau drop dengan penakar dosis berbasis berat badan anak (10-15 mg/kgBB).',
      geriatricWarning: 'Perhatikan fungsi ginjal dan hepar; prioritaskan Parasetamol dosis terendah efektif.'
    },
    whenToSeeDoctor: [
      'Demam belum reda setelah 3 hari swamedikasi.',
      'Suhu tubuh melonjak melebihi 39.5°C.',
      'Muncul tanda perdarahan (gusi berdarah, mimisan, bintik merah petekie).'
    ],
    gemaCermatTips: [
      'DA: Dapatkan obat hanya di Apotek resmi atau Toko Obat berizin.',
      'GU: Gunakan termometer digital untuk mengukur suhu secara obyektif.',
      'SI: Simpan obat di tempat kering dan sejuk terhindar dari sinar matahari langsung.',
      'BU: Buang sediaan yang telah kadaluarsa atau mengalami perubahan bau dan warna.'
    ]
  },
  {
    id: 'swam-sakit-kepala',
    title: 'Sakit Kepala Tegang & Pusing Ringan (Tension Headache)',
    category: 'pain-fever',
    categoryLabel: 'Demam & Nyeri',
    iconName: 'Activity',
    quickSummary: 'Nyeri tumpul seperti diikat tali di sekeliling kepala atau tengkuk leher, sering dipicu oleh kelelahan, kurang tidur, stres, atau menatap layar gadget terlalu lama.',
    laymanKeywords: ['sakit kepala', 'pusing', 'nyut nyutan', 'kepala berat', 'migrain', 'tengkuk kaku'],
    typicalSymptoms: [
      'Rasa tertekan atau diikat kencang di dahi atau belakang kepala',
      'Nyeri terasa di kedua sisi kepala dengan intensitas ringan-sedang',
      'Tidak disertai mual atau muntah hebat',
      'Sensitif terhadap suara bising atau cahaya terang'
    ],
    redFlags: [
      'Sakit kepala mendadak yang sangat hebat seperti tersambar petir ("Thunderclap Headache")',
      'Disertai kelemahan separuh badan, bicara pelo, atau pandangan kabur mendadak (tanda Stroke)',
      'Disertai demam tinggi mendadak dan leher kaku tidak bisa digerakkan',
      'Sakit kepala pasca cedera benturan kepala',
      'Sakit kepala yang semakin memberat dari hari ke hari pada usia > 50 tahun'
    ],
    maxSelfMedDays: 3,
    recommendedDrugs: [
      {
        genericName: 'Parasetamol 500 mg',
        brandExamples: ['Panadol Biru', 'Sanmol', 'Biogesic', 'Paramol'],
        bpomClass: 'Obat Bebas (Hijau)',
        dosageGuideline: 'Dewasa: 1–2 tablet (500–1000 mg) tiap 6 jam. Anak: 10–15 mg/kgBB per kali minum.',
        dosageDetails: {
          adult: '1 – 2 tablet (500 mg – 1000 mg) tiap 6 jam bila nyeri timbul. Maksimal 4000 mg per 24 jam.',
          pediatric: 'Anak 6–12 th: 1/2 – 1 tablet (250–500 mg) tiap 6 jam. Anak < 6 th: gunakan sediaan sirup 120 mg/5 mL (5–7.5 mL).',
          infant: 'Bayi < 1 tahun: Jarang terjadi tension headache murni. Bila rewel/demam, berikan drops 10–15 mg/kgBB dan segera evaluasi ke dokter anak.',
          pregnancy: 'Kategori B (Pilihan Teraman). Lini pertama pereda sakit kepala untuk ibu hamil dan menyusui.',
          geriatric: '1 tablet (500 mg) tiap 6–8 jam. Pilihan utama pereda nyeri kepala lansia tanpa mengganggu lambung atau tekanan darah.'
        },
        timing: 'Dapat diminum sebelum atau sesudah makan.',
        cautionNotes: 'Pilihan teraman untuk sakit kepala tanpa iritasi lambung.',
        targetDrugId: 'drug-paracetamol'
      },
      {
        genericName: 'Parasetamol + Kafein',
        brandExamples: ['Panadol Extra', 'Bodrex', 'Paramex', 'Saridon'],
        bpomClass: 'Obat Bebas (Hijau)',
        dosageGuideline: 'Dewasa: 1 kaplet tiap 6–8 jam bila sakit kepala terasa berdenyut.',
        dosageDetails: {
          adult: '1 kaplet tiap 6–8 jam bila sakit kepala terasa berdenyut kuat (maksimal 4 kaplet per 24 jam).',
          pediatric: 'TIDAK DIANJURKAN untuk anak usia < 12 tahun karena kandungan kafein stimulan.',
          infant: 'KONTRAINDIKASI MUTLAK untuk bayi dan balita.',
          pregnancy: 'Hindari penggunaan rutin karena kafein dosis tinggi menembus plasenta. Gunakan parasetamol tunggal murni.',
          geriatric: 'Gunakan hati-hati bila lansia memiliki riwayat aritmia jantung, palpitasi, atau insomnia.'
        },
        timing: 'Diminum sesudah makan.',
        cautionNotes: 'Kafein meningkatkan efek antinyeri (analgesic booster). Hindari diminum sebelum tidur karena dapat menyebabkan susah tidur.',
        targetDrugId: 'drug-paracetamol'
      },
      {
        genericName: 'Ibuprofen 200 mg / 400 mg',
        brandExamples: ['Proris', 'Bodrex Extra', 'Farsifen'],
        bpomClass: 'Obat Bebas Terbatas (Biru)',
        dosageGuideline: 'Dewasa: 200–400 mg tiap 6–8 jam sesudah makan bila nyeri disertai kaku otot.',
        dosageDetails: {
          adult: '200 mg – 400 mg tiap 6–8 jam sesudah makan bila nyeri disertai ketegangan otot leher/tengkuk.',
          pediatric: 'Anak > 6 bln: 5–10 mg/kgBB per kali minum sesudah makan. Di bawah 6 bln: KONTRAINDIKASI.',
          infant: 'Bayi < 6 bulan: KONTRAINDIKASI MUTLAK. Bayi 6–12 bulan: 5 mg/kgBB atas petunjuk dokter.',
          pregnancy: 'Hindari pada trimester 3 (Kategori D - memicu komplikasi sirkulasi janin). Trimester 1-2 gunakan parasetamol saja.',
          geriatric: '200 mg sesudah makan. Hindari pada lansia dengan riwayat ulkus peptikum atau gangguan fungsi ginjal.'
        },
        timing: 'WAJIB sesudah makan.',
        cautionNotes: 'Hindari bila ada riwayat sakit maag / tukak lambung.',
        targetDrugId: 'drug-ibuprofen'
      }
    ],
    nonPharmacolTherapy: [
      'Istirahat di ruangan yang tenang, gelap, dan sejuk.',
      'Pijat relaksasi lembut pada otot pelipis, dahi, dan tengkuk leher.',
      'Kompres hangat pada leher belakang atau kompres dingin pada dahi.',
      'Cukupi kebutuhan cairan (dehidrasi adalah pemicu utama sakit kepala tegang).',
      'Batasi waktu menatap layar smartphone/komputer setiap 20 menit (aturan 20-20-20).'
    ],
    contraindicatedForSelfMed: [
      'Jangan mengonsumsi obat sakit kepala kombinasi secara terus-menerus > 10 hari per bulan untuk mencegah sakit kepala ketergantungan obat (Medication-Overuse Headache).'
    ],
    specialPopulations: {
      pregnancyWarning: 'Parasetamol adalah pilihan tunggal yang aman. Jangan gunakan sediaan kombinasi kafein tinggi atau ibuprofen pada kehamilan.',
      pediatricWarning: 'Gunakan Parasetamol sirup dosis anak. Hindari aspirin.',
      geriatricWarning: 'Waspadai hipertensi tidak terkontrol sebagai penyebab sakit kepala pada lansia; cek tekanan darah.'
    },
    whenToSeeDoctor: [
      'Nyeri kepala tidak berkurang setelah 3 hari minum obat.',
      'Frekuensi sakit kepala terjadi lebih dari 3 kali dalam seminggu.',
      'Nyeri kepala disertai gangguan penglihatan atau kebas wajah.'
    ]
  },
  {
    id: 'swam-sakit-gigi',
    title: 'Sakit Gigi & Nyeri Gusi Sementara',
    category: 'pain-fever',
    categoryLabel: 'Demam & Nyeri',
    iconName: 'Smile',
    quickSummary: 'Nyeri berdenyut pada gigi berlubang atau gusi meradang. Obat swamedikasi HANYA pereda nyeri darurat sementara sebelum pemeriksaan ke Dokter Gigi.',
    laymanKeywords: ['sakit gigi', 'gigi ngilu', 'gusi bengkak', 'gigi bolong', 'gigi berdenyut'],
    typicalSymptoms: [
      'Nyeri berdenyut pada gigi saat mengunyah atau terkena makanan manis/dingin',
      'Gusi di sekitar gigi berlubang tampak kemerahan atau agak bengkak',
      'Nyeri menjalar hingga ke rahang atau pelipis'
    ],
    redFlags: [
      'Bengkak pipi/wajah meluas hingga mata atau bawah leher (tanda abses menyebar)',
      'Sulit membuka mulut (trismus) atau sulit menelan air liur',
      'Disertai demam tinggi menggigil',
      'Sesak napas akibat pembengkakan dasar mulut (Angina Ludwig - DARURAT MEDIS)'
    ],
    maxSelfMedDays: 2,
    recommendedDrugs: [
      {
        genericName: 'Asam Mefenamat 500 mg',
        brandExamples: ['Ponstan', 'Mefinal', 'Asam Mefenamat Kimia Farma'],
        bpomClass: 'Obat Wajib Apotek (OWA)',
        dosageGuideline: 'Dewasa: 500 mg awal, lalu 250–500 mg tiap 6 jam. Anak > 14 th dosis dewasa.',
        dosageDetails: {
          adult: 'Dosis awal 500 mg, dilanjutkan 250–500 mg tiap 6 jam bila nyeri hebat (maksimal 7 hari).',
          pediatric: 'Anak > 14 tahun: sama dengan dewasa. Anak < 14 tahun: KONTRAINDIKASI untuk swamedikasi sakit gigi tanpa pengawasan dokter gigi.',
          infant: 'KONTRAINDIKASI MUTLAK untuk bayi dan balita.',
          pregnancy: 'Kategori C (Trimester 1 & 2), Kategori D (Trimester 3 - KONTRAINDIKASI). Sebaiknya gunakan parasetamol.',
          geriatric: 'Gunakan dosis terendah 250 mg sesudah makan. Risiko tinggi iritasi lambung dan penurunan klirens ginjal.'
        },
        timing: 'WAJIB diminum SEGERA SESUDAH MAKAN dengan segelas air.',
        cautionNotes: 'Dapat diperoleh melalui Apoteker (Maksimal 20 tablet OWA). KONTRAINDIKASI pada tukak lambung aktif dan asma sensitif NSAID.',
        targetDrugId: 'drug-mefenamic-acid'
      },
      {
        genericName: 'Parasetamol 500 mg',
        brandExamples: ['Panadol', 'Sanmol', 'Dumin'],
        bpomClass: 'Obat Bebas (Hijau)',
        dosageGuideline: 'Dewasa: 500–1000 mg tiap 6 jam. Anak: 10–15 mg/kgBB per kali minum.',
        dosageDetails: {
          adult: '500 mg – 1000 mg tiap 6 jam sebagai alternatif aman bagi penderita maag atau ibu hamil.',
          pediatric: 'Anak 6–12 th: 250–500 mg tiap 6 jam. Anak 1–5 th: gunakan sirup 120 mg/5 mL (5–7.5 mL).',
          infant: 'Bayi tumbuh gigi (teething): Parasetamol drops 10–15 mg/kgBB tiap 6 jam bila demam dan sangat rewel.',
          pregnancy: 'Kategori B (Paling Aman). Pilihan antinyeri lini pertama saat sakit gigi selama kehamilan.',
          geriatric: '500 mg tiap 6–8 jam. Sangat aman bagi lambung lansia.'
        },
        timing: 'Sebelum atau sesudah makan.',
        cautionNotes: 'Aman untuk lambung.',
        targetDrugId: 'drug-paracetamol'
      },
      {
        genericName: 'Obat Kumur Povidone Iodine 1% / Chlorhexidine 0.2%',
        brandExamples: ['Betadine Obat Kumur', 'Minosep Gargle'],
        bpomClass: 'Obat Bebas Terbatas (Biru)',
        dosageGuideline: 'Kumur 10–15 mL selama 30 detik pada area gigi berlubang 3–4 kali sehari. JANGAN DITELAN.',
        dosageDetails: {
          adult: 'Kumur 10–15 mL selama 30–60 detik lalu buang (jangan ditelan), 3–4 kali sehari sesudah sikat gigi.',
          pediatric: 'Hanya untuk anak > 6 tahun yang sudah mampu berkumur tanpa menelan (5–10 mL). Anak < 6 th: TIDAK DIANJURKAN.',
          infant: 'KONTRAINDIKASI MUTLAK sediaan obat kumur (risiko aspirasi dan tertelan).',
          pregnancy: 'Kategori C (Povidone Iodine). Hindari pemakaian berlebih/jangka panjang karena iodin diserap mukosa dan mempengaruhi tiroid janin. Chlorhexidine lebih aman.',
          geriatric: '10 mL kumur perlahan. Pastikan reflek menelan baik agar tidak tersedak.'
        },
        timing: 'Sesudah sikat gigi.',
        cautionNotes: 'Membunuh bakteri patogen penyebab radang gusi dan bau busuk.',
        targetDrugId: 'drug-fornas-povidone-iodine'
      }
    ],
    nonPharmacolTherapy: [
      'Kumur air garam hangat (1/2 sendok teh garam dalam segelas air hangat) untuk meredakan radang gusi.',
      'Kompres dingin pada pipi luar yang sakit (15 menit on / 15 menit off).',
      'Tinggikan posisi kepala saat tidur menggunakan bantal ganda untuk mengurangi tekanan denyutan di gigi.',
      'Hindari makanan/minuman terlalu manis, terlalu panas, atau terlalu dingin.'
    ],
    contraindicatedForSelfMed: [
      'JANGAN menaruh tablet obat (seperti aspirin atau puyer) langsung ke dalam lubang gigi karena asamnya akan membakar mukosa gusi!',
      'JANGAN membeli antibiotik (Amoksisilin/Siprofloksasin) sendiri tanpa resep dokter gigi.'
    ],
    specialPopulations: {
      pregnancyWarning: 'Gunakan Parasetamol. Hindari Asam Mefenamat pada trimester 3.',
      pediatricWarning: 'Parasetamol sirup dosis sesuai berat badan.',
      geriatricWarning: 'Waspadai riwayat perdarahan lambung bila menggunakan Asam Mefenamat.'
    },
    whenToSeeDoctor: [
      'Segera buat janji temu dengan Dokter Gigi karena obat hanya menutupi rasa sakit, tidak menyembuhkan lubang gigi.',
      'Pipi mulai tampak bengkak atau keluar nanah dari gusi.'
    ]
  },
  {
    id: 'swam-dismenore',
    title: 'Nyeri Haid Primer (Dismenore)',
    category: 'pain-fever',
    categoryLabel: 'Demam & Nyeri',
    iconName: 'HeartHandshake',
    quickSummary: 'Kram perut bawah saat menstruasi akibat pelepasan prostaglandin alami rahim tanpa kelainan organ panggul.',
    laymanKeywords: ['nyeri haid', 'kram menstruasi', 'dismenore', 'perut kram datang bulan', 'senggugut'],
    typicalSymptoms: [
      'Kram berdenyut di perut bagian bawah menjelang atau 1-2 hari pertama menstruasi',
      'Nyeri menjalar ringan ke punggung bawah atau paha',
      'Dapat disertai lemas, pegal, atau sedikit mual'
    ],
    redFlags: [
      'Nyeri haid yang sangat ekstrem hingga pingsan atau tidak bisa bangun tidur',
      'Nyeri haid yang baru pertama kali muncul pada usia > 25 tahun',
      'Disertai perdarahan haid yang sangat banyak (ganti pembalut tiap 1 jam)',
      'Nyeri saat buang air besar atau berhubungan intim (curiga Endometriosis)'
    ],
    maxSelfMedDays: 3,
    recommendedDrugs: [
      {
        genericName: 'Ibuprofen 200 mg / 400 mg',
        brandExamples: ['Proris 200', 'Farsifen 400', 'Feminax (kombinasi parasetamol+ekstrak hiosiamin)'],
        bpomClass: 'Obat Bebas Terbatas (Biru)',
        dosageGuideline: 'Dewasa: 200–400 mg saat kram mulai terasa, lalu tiap 6–8 jam sesudah makan.',
        dosageDetails: {
          adult: '200 mg – 400 mg diminum pada awal terasa kram menstruasi, dilanjutkan tiap 6–8 jam bila perlu (maks 1200 mg/24 jam).',
          pediatric: 'Remaja putri usia menarche (> 12 th): 200 mg tiap 6–8 jam sesudah makan.',
          infant: 'KONTRAINDIKASI / Tidak relevan (belum memasuki masa pubertas/menarche).',
          pregnancy: 'KONTRAINDIKASI MUTLAK! Dismenore tidak terjadi saat hamil. Jika nyeri perut kram hebat saat hamil/terlambat haid, segera ke dokter (curiga abortus/ektopik).',
          geriatric: 'Tidak relevan (pasca menopause).'
        },
        timing: 'Diminum SEGERA SESUDAH MAKAN.',
        cautionNotes: 'Pilihan lini pertama paling efektif karena menghambat sintesis prostaglandin rahim secara langsung.',
        targetDrugId: 'drug-ibuprofen'
      },
      {
        genericName: 'Asam Mefenamat 500 mg',
        brandExamples: ['Ponstan', 'Mefinal', 'Asam Mefenamat Generik'],
        bpomClass: 'Obat Wajib Apotek (OWA)',
        dosageGuideline: 'Dewasa: 500 mg diminum 3 kali sehari sesudah makan (maks 3 hari haid pertama).',
        dosageDetails: {
          adult: 'Dosis awal 500 mg, dilanjutkan 250–500 mg tiap 6–8 jam sesudah makan (maksimal 3 hari pertama masa haid).',
          pediatric: 'Remaja putri > 14 tahun: 250–500 mg 3 kali sehari sesudah makan.',
          infant: 'KONTRAINDIKASI MUTLAK.',
          pregnancy: 'KONTRAINDIKASI MUTLAK pada kehamilan.',
          geriatric: 'Tidak relevan (pasca menopause).'
        },
        timing: 'WAJIB sesudah makan.',
        cautionNotes: 'Maksimal penggunaan 3 hari pertama masa haid. Catatan OWA: Maksimal penyerahan 20 tablet.',
        targetDrugId: 'drug-mefenamic-acid'
      }
    ],
    nonPharmacolTherapy: [
      'Kompres hangat (bantal pemanas / botol air hangat) di atas perut bawah.',
      'Minum air jahe hangat atau teh chamomile untuk merilekskan otot rahim.',
      'Lakukan peregangan ringan (yoga child pose atau jalan santai).',
      'Kurangi asupan garam dan kafein selama masa haid untuk mengurangi kembung.'
    ],
    contraindicatedForSelfMed: [
      'Hindari penggunaan NSAID bila memiliki riwayat tukak lambung akut.'
    ],
    specialPopulations: {
      pregnancyWarning: 'Hanya terjadi pada wanita tidak hamil. Bila sedang terlambat haid dan nyeri perut hebat, lakukan tes kehamilan (curiga kehamilan ektopik).',
      pediatricWarning: 'Aman untuk remaja putri usia menarche > 12 tahun dengan dosis sesuai BB.',
      geriatricWarning: 'Tidak relevan (pasca menopause).'
    },
    whenToSeeDoctor: [
      'Nyeri tidak reda meski telah meminum obat antinyeri maksimal.',
      'Nyeri haid bertambah parah dari siklus ke siklus.'
    ]
  },

  // ============================================================================
  // 2. SALURAN CERNA (DIGESTIVE & GI)
  // ============================================================================
  {
    id: 'swam-maag-dispepsia',
    title: 'Maag Akut, Perut Perih & Asam Lambung (Dispepsia)',
    category: 'digestive',
    categoryLabel: 'Saluran Cerna',
    iconName: 'ShieldAlert',
    quickSummary: 'Rasa terbakar atau perih di ulu hati, mual, dan rasa cepat kenyang yang dipicu oleh asam lambung berlebih, telat makan, stres, atau makanan pedas/kopi.',
    laymanKeywords: ['maag', 'asam lambung', 'ulu hati perih', 'nyeri lambung', 'gerd', 'perut perih'],
    typicalSymptoms: [
      'Rasa perih, panas, atau nyeri menusuk di ulu hati (tengah atas perut)',
      'Rasa cepat kenyang atau begah setelah makan',
      'Mual ringan terutama saat perut kosong atau terlambat makan',
      'Sering bersendawa asam'
    ],
    redFlags: [
      'Muntah darah berwarna merah segar atau muntah hitam seperti ampas kopi',
      'Buang air besar berwarna hitam pekat lengket seperti aspal (Melena)',
      'Nyeri ulu hati yang menjalar ke dada kiri, bahu, atau rahang disertai keringat dingin (TANDA SERANGAN JANTUNG - SEGERA KE UGD)',
      'Sulit menelan makanan atau makanan terasa tersangkut di kerongkongan',
      'Penurunan berat badan drastis tanpa sebab yang jelas'
    ],
    maxSelfMedDays: 3,
    recommendedDrugs: [
      {
        genericName: 'Antasida DOEN (Aluminium Hidroksida + Magnesium Hidroksida + Simetikon)',
        brandExamples: ['Mylanta', 'Promag', 'Polysilane', 'Gastrucid', 'Antasida DOEN Generik'],
        bpomClass: 'Obat Bebas (Hijau)',
        dosageGuideline: 'Dewasa: 1–2 tab kunyah / 5–10 mL suspensi. Anak 6–12 th: 1/2–1 tab / 2.5–5 mL suspensi.',
        dosageDetails: {
          adult: '1–2 tablet kunyah ATAU 1–2 sendok takar (5–10 mL) suspensi 3–4 kali sehari.',
          pediatric: 'Anak 6–12 th: 1/2 – 1 tablet kunyah atau 2.5–5 mL suspensi (3–4 kali sehari). Anak < 6 th: Tidak dianjurkan swamedikasi tanpa resep dokter.',
          infant: 'KONTRAINDIKASI untuk swamedikasi bayi! Kolik atau gumoh pada bayi bukan maag, atasi dengan menyendawakan atau drops simetikon khusus bayi.',
          pregnancy: 'Kategori B (Relatif Aman). Pilihan antasida aman untuk mengatasi heartburn/heartburn kehamilan, hindari penggunaan berlebih atau jangka panjang.',
          geriatric: '1 tablet kunyah atau 5 mL suspensi saat ada keluhan. Waspadai sembelit (dari aluminium) atau diare (dari magnesium).'
        },
        timing: 'WAJIB DIMINUM SAAT PERUT KOSONG: 1 jam SEBELUM makan atau 2 jam SESUDAH makan dan menjelang tidur malam. Tablet WAJIB DIKUNYAH sampai halus sebelum ditelan.',
        cautionNotes: 'Bekerja cepat menetralkan asam lambung secara lokal dalam 15-30 menit.',
        targetDrugId: 'drug-antacid'
      },
      {
        genericName: 'Famotidin 20 mg / 40 mg',
        brandExamples: ['Famocid', 'H2-Blocker Famotidine'],
        bpomClass: 'Obat Wajib Apotek (OWA)',
        dosageGuideline: 'Dewasa: 20 mg diminum 1-2 kali sehari bila antasida kunyah kurang mempan.',
        dosageDetails: {
          adult: '20 mg diminum 1–2 kali sehari bila antasida kunyah kurang mempan (maksimal 40 mg per hari).',
          pediatric: 'TIDAK DIANJURKAN untuk anak usia < 12 tahun pada swamedikasi apotek.',
          infant: 'KONTRAINDIKASI MUTLAK untuk swamedikasi bayi.',
          pregnancy: 'Kategori B. Digunakan bila antasida tidak efektif meredakan gejala, atas pertimbangan dokter.',
          geriatric: '20 mg sekali sehari sebelum tidur. Perlu penyesuaian dosis bila klirens kreatinin < 50 mL/menit.'
        },
        timing: 'Diminum 30-60 menit sebelum makan.',
        cautionNotes: 'Penghambat reseptor H2 yang menurunkan produksi asam lambung hingga 10-12 jam. Catatan OWA: Maksimal penyerahan 10 tablet.',
        targetDrugId: 'drug-famotidine'
      }
    ],
    nonPharmacolTherapy: [
      'Makan teratur dengan porsi kecil namun sering (small frequent meals: 4-5 kali sehari).',
      'Hindari makanan pemicu: makanan pedas, asam (jeruk/tomat), gorengan berlemak, cokelat, kopi, dan minuman bersoda.',
      'Jangan langsung berbaring tidur minimal 2–3 jam setelah selesai makan untuk mencegah asam lambung naik ke kerongkongan.',
      'Tinggikan posisi kepala saat tidur sekitar 15-20 cm (gunakan bantal baji).',
      'Kelola stres dan hindari merokok.'
    ],
    contraindicatedForSelfMed: [
      'JANGAN mengonsumsi obat antinyeri NSAID (seperti Asam Mefenamat, Ibuprofen, Natrium Diklofenak, Aspirin) karena akan memperparah luka lambung secara drastis!'
    ],
    specialPopulations: {
      pregnancyWarning: 'Antasida sediaan aluminium/magnesium aman untuk ibu hamil pada dosis anjuran. Hindari antasida berbasis natrium bikarbonat.',
      pediatricWarning: 'Konsultasikan ke dokter spesialis anak bila anak mengeluh sakit perut berulang.',
      geriatricWarning: 'Waspadai efek samping sembelit (dari aluminium) atau diare (dari magnesium).'
    },
    whenToSeeDoctor: [
      'Keluhan lambung tidak membaik setelah 3 hari swamedikasi.',
      'Nyeri perut sangat hebat mendadak seperti ditusuk jarum.',
      'Timbul tanda muntah darah atau BAB hitam.'
    ]
  },
  {
    id: 'swam-kembung-masuk-angin',
    title: 'Perut Kembung, Begah & "Masuk Angin"',
    category: 'digestive',
    categoryLabel: 'Saluran Cerna',
    iconName: 'Wind',
    quickSummary: 'Penumpukan gas berlebih di dalam saluran pencernaan yang menyebabkan perut terasa membesar, kencang, bersendawa terus menerus, atau sering buang angin.',
    laymanKeywords: ['kembung', 'masuk angin', 'perut begah', 'perut penuh', 'gas lambung', 'sendawa'],
    typicalSymptoms: [
      'Perut terasa padat, kencang, dan berbunyi gemuruh (borborygmi)',
      'Sering bersendawa atau buang angin namun rasa begah belum plong',
      'Rasa mual ringan tanpa muntah'
    ],
    redFlags: [
      'Perut membuncit keras seperti papan disertai tidak bisa buang angin dan tidak bisa BAB sama sekali (curiga Ileus Obstruksi - DARURAT)',
      'Nyeri perut yang sangat tajam dan mendadak',
      'Disertai muntah berwarna kehijauan atau feses berdarah'
    ],
    maxSelfMedDays: 3,
    recommendedDrugs: [
      {
        genericName: 'Simetikon (Dimetikon Aktif)',
        brandExamples: ['Disflatyl', 'Polysilane (kombinasi)', 'Gazero'],
        bpomClass: 'Obat Bebas (Hijau)',
        dosageGuideline: 'Dewasa: 1–2 tablet kunyah (40–80 mg). Bayi < 1 th: drops 20 mg (0.3 mL).',
        dosageDetails: {
          adult: '1–2 tablet kunyah (40 mg – 80 mg) dikunyah setelah makan dan sebelum tidur malam (maks 500 mg/24 jam).',
          pediatric: 'Anak 2–12 tahun: 40 mg dikunyah 3–4 kali sehari sesudah makan.',
          infant: 'Bayi < 1 tahun: Tetes Simetikon khusus bayi (Drops 40 mg/0.6 mL): berikan 0.3 mL (20 mg) dicampurkan dalam susu/ASI atau diteteskan langsung ke mulut saat kolik, maks 240 mg/hari.',
          pregnancy: 'Kategori B (Sangat Aman). Bekerja lokal memecah gelembung gas secara fisika tanpa diserap darah sistemik.',
          geriatric: '40–80 mg sesudah makan. Sangat aman bagi lansia dengan motilitas saluran cerna yang melambat.'
        },
        timing: 'Diminum/dikunyah sesudah makan.',
        cautionNotes: 'Memecah gelembung gas di usus sehingga gas mudah dikeluarkan lewat sendawa atau flatus.',
        targetDrugId: 'drug-antacid'
      },
      {
        genericName: 'Minyak Kayu Putih / Minyak Telon / Aromaterapi Herbal',
        brandExamples: ['Minyak Kayu Putih Cap Lang', 'FreshCare', 'Tolak Angin'],
        bpomClass: 'Obat Bebas (Hijau)',
        dosageGuideline: 'Oleskan dan pijat lembut searah jarum jam pada area perut, punggung, dan dada.',
        dosageDetails: {
          adult: 'Oleskan dan pijat lembut searah jarum jam pada area perut, punggung, dan dada.',
          pediatric: 'Minyak telon atau minyak kayu putih dioleskan secukupnya pada perut dan punggung anak.',
          infant: 'HANYA gunakan Minyak Telon lembut khusus bayi. DILARANG menggunakan minyak kayu putih pekat, balsem panas, atau minyak atsiri murni karena berisiko iritasi kulit dan laringospasme napas.',
          pregnancy: 'Aman dioleskan secara topikal untuk menghangatkan perut dan meredakan mual.',
          geriatric: 'Oleskan secukupnya pada area perut dan dada.'
        },
        timing: 'Kapan saja saat perut terasa kembung.',
        cautionNotes: 'Hanya untuk pemakaian luar.',
        targetDrugId: 'drug-herbal'
      }
    ],
    nonPharmacolTherapy: [
      'Minum air rebusan jahe hangat atau teh peppermint hangat untuk merelaksasi otot usus.',
      'Berjalan santai kaki selama 10-15 menit untuk membantu pergerakan peristaltik gas usus keluar.',
      'Hindari makan terburu-buru, jangan berbicara saat mengunyah makanan, dan hindari minum menggunakan sedotan (aerofagia).',
      'Batasi makanan penghasil gas: kol, kubis, brokoli, ubi, nangka, durian, dan minuman berkarbonasi.'
    ],
    contraindicatedForSelfMed: [
      'Hindari konsumsi minuman bersoda karena akan menambah volume gas di lambung.'
    ],
    specialPopulations: {
      pregnancyWarning: 'Simetikon aman untuk ibu hamil karena bekerja secara fisik lokal tanpa diserap ke peredaran darah.',
      pediatricWarning: 'Gunakan minyak telon atau tetes simetikon khusus bayi/anak.',
      geriatricWarning: 'Aman digunakan pada lansia.'
    },
    whenToSeeDoctor: [
      'Kembung menetap lebih dari 3 hari.',
      'Perut tampak membengkak keras dan tidak bisa buang angin.'
    ]
  },
  {
    id: 'swam-diare-dewasa',
    title: 'Diare Akut Ringan Dewasa (Mencret Non-Spesifik)',
    category: 'digestive',
    categoryLabel: 'Saluran Cerna',
    iconName: 'Droplet',
    quickSummary: 'BAB cair lebih dari 3 kali dalam 24 jam tanpa lendir dan tanpa darah, umumnya akibat salah makan, keracunan makanan ringan, atau infeksi virus saluran cerna.',
    laymanKeywords: ['diare', 'mencret', 'buang air cair', 'murus', 'keracunan makanan'],
    typicalSymptoms: [
      'Feses bertekstur lembek atau cair frekuensi 3–5 kali sehari',
      'Mules atau kram perut sesaat sebelum BAB',
      'Rasa haus yang meningkat',
      'Badan terasa agak lemas'
    ],
    redFlags: [
      'Feses bercampur DARAH segar atau berlendir pekat (Tanda Disentri / Kolitis)',
      'Tanda dehidrasi sedang-berat: mata cekung, kulit dicubit lambat kembali, bibir sangat kering pecah-pecah, urin sangat pekat/tidak kencing > 8 jam',
      'Disertai demam tinggi menggigil > 38.5°C',
      'Muntah terus-menerus hingga tidak ada cairan yang bisa masuk',
      'Diare tidak berhenti setelah 2 hari'
    ],
    maxSelfMedDays: 2,
    recommendedDrugs: [
      {
        genericName: 'Oralit (Oral Rehydration Salts / ORS)',
        brandExamples: ['Oralit Generik Kemenkes', 'Pharolit', 'Corsalit'],
        bpomClass: 'Obat Bebas (Hijau)',
        dosageGuideline: 'Dewasa: 1–2 sachet (200–400 mL) tiap BAB cair. Anak: 1/2–1 sachet tiap BAB cair.',
        dosageDetails: {
          adult: '1–2 sachet dilarutkan dalam 200–400 mL air matang, diminum tiap kali selesai BAB cair.',
          pediatric: 'Anak 1–5 th: 100–200 mL tiap BAB cair. Anak > 5 th: 200 mL tiap BAB cair. Berikan sesendok demi sesendok.',
          infant: 'Bayi < 1 tahun: 50–100 mL larutan oralit tiap kali BAB cair. Berikan sesendok teh atau pipet tiap 1–2 menit perlahan agar bayi tidak muntah.',
          pregnancy: 'Kategori A/B (Sangat Aman & Wajib). Mencegah dehidrasi berat dan ketidakseimbangan elektrolit pada ibu & janin.',
          geriatric: '1 sachet (200 mL) tiap BAB cair. Pantau asupan cairan terutama jika ada riwayat gagal jantung kongestif.'
        },
        timing: 'Segera diminum perlahan sedikit demi sedikit.',
        cautionNotes: 'PILAR UTAMA SWAMEDIKASI DIARE. Mencegah dehidrasi yang mengancam jiwa.',
        targetDrugId: 'drug-oral-rehydration-salts'
      },
      {
        genericName: 'Attapulgite Aktif / Karbon Aktif (Norit)',
        brandExamples: ['Entrostop', 'New Diatabs', 'Norit', 'Biodiar'],
        bpomClass: 'Obat Bebas (Hijau)',
        dosageGuideline: 'Dewasa: 2 tablet tiap selesai BAB cair (maks 12 tab/24 jam). Anak 6–12 th: 1 tablet.',
        dosageDetails: {
          adult: '2 tablet setelah BAB cair pertama, lalu 2 tablet setiap selesai BAB cair berikutnya. Maksimal 12 tablet per 24 jam.',
          pediatric: 'Anak 6–12 tahun: 1 tablet tiap kali BAB cair (maksimal 6 tablet per 24 jam). Anak < 6 tahun: TIDAK DIANJURKAN tanpa petunjuk dokter.',
          infant: 'KONTRAINDIKASI MUTLAK pada bayi < 1 tahun (risiko impaksi feses, obstruksi usus, dan penutupan gejala klinis dehidrasi berat).',
          pregnancy: 'Kategori B (Aman). Bekerja lokal sebagai absorben di lumen usus tanpa diserap sistemik ke janin.',
          geriatric: '1–2 tablet tiap BAB cair (maksimal 8 tablet/24 jam). Pastikan diimbangi asupan oralit yang cukup.'
        },
        timing: 'Diminum dengan air putih.',
        cautionNotes: 'Bekerja menyerap racun dan bakteri di lumen usus serta memadatkan konsistensi tinja.',
        targetDrugId: 'drug-antidiarrheal'
      }
    ],
    nonPharmacolTherapy: [
      'Minum banyak cairan elektrolit: Oralit, kuah sup kaldu bening, air kelapa muda, atau air tajin.',
      'Terapkan pola makan BRAT diet (Banana/Pisang, Rice/Nasi putih, Applesauce/Saus apel, Toast/Roti tawar panggang).',
      'Hindari susu sapi, makanan pedas, gorengan berminyak, kopi, dan sayuran berserat kasar sementara waktu.',
      'Cuci tangan dengan sabun dan air mengalir sebelum makan dan setelah dari toilet.'
    ],
    contraindicatedForSelfMed: [
      'JANGAN gunakan Loperamid (Imodium) secara sembarangan jika diare disertai demam atau darah, karena akan menahan racun bakteri di dalam usus!',
      'JANGAN minum Antibiotik (seperti Kotrimoksazol, Ciprofloxacin) tanpa anjuran dokter.'
    ],
    specialPopulations: {
      pregnancyWarning: 'Oralit SANGAT AMAN dan wajib diberikan. Hindari obat anti-motilitas loperamid.',
      pediatricWarning: 'PADA ANAK WAJIB MENGGUNAKAN PROTOKOL ZINC + ORALIT (Lihat modul Diare Anak).',
      geriatricWarning: 'Lansia sangat cepat mengalami dehidrasi dan gangguan elektrolit; pantau frekuensi kencing.'
    },
    whenToSeeDoctor: [
      'Diare berlangsung > 48 jam (2 hari).',
      'Timbul tanda dehidrasi (pusing melayang, lemas tidak bertenaga).',
      'Feses berwarna merah darah atau hitam.'
    ]
  },
  {
    id: 'swam-sembelit-konstipasi',
    title: 'Konstipasi / Sembelit Ringan (Susah Buang Air Besar)',
    category: 'digestive',
    categoryLabel: 'Saluran Cerna',
    iconName: 'Archive',
    quickSummary: 'Frekuensi BAB kurang dari 3 kali seminggu dengan feses yang keras, kering, dan sulit atau sakit saat dikeluarkan.',
    laymanKeywords: ['sembelit', 'susah bab', 'konstipasi', 'feses keras', 'bebelen', 'buang air besar keras', 'microlax', 'enema gel'],
    typicalSymptoms: [
      'Frekuensi buang air besar < 3 kali dalam seminggu',
      'Feses berbentuk bulat kecil keras seperti kotoran kambing (Bristol Stool Type 1-2)',
      'Harus mengejan kuat saat buang air besar',
      'Sensasi tidak tuntas setelah buang air besar'
    ],
    redFlags: [
      'Disertai perdarahan rektal merah segar dalam jumlah banyak',
      'Disertai nyeri perut melilit yang sangat hebat dan perut membuncit tegang',
      'Konstipasi mendadak pada usia > 50 tahun yang tidak pernah dialami sebelumnya',
      'Disertai penurunan berat badan drastis tanpa sebab'
    ],
    maxSelfMedDays: 3,
    recommendedDrugs: [
      {
        genericName: 'Enema Gel Rektal (Na Lauril Sulfoasetat 45 mg + Na Sitrat 450 mg + Sorbitol 4.465 mg)',
        brandExamples: ['Microlax Enema Tube 5 mL'],
        bpomClass: 'Obat Bebas Terbatas (Biru)',
        dosageGuideline: 'Dewasa: 1 tube (5 mL). Anak 1–3 th: 1/2 tube. Anak > 3 th: 1 tube dimasukkan ke dubur.',
        dosageDetails: {
          adult: '1 tube (5 mL) sekali pakai. Masukkan seluruh panjang pipa aplikator ke dalam anus/dubur.',
          pediatric: 'Anak > 3 tahun: 1 tube (5 mL); Anak 1–3 tahun: 1/2 tube (masukkan hanya 1/2 panjang pipa aplikator).',
          infant: 'Bayi < 1 th: Hanya atas petunjuk dokter. Bila diresepkan dokter, gunakan maksimal 1/3–1/2 tube dengan ujung pipa dilumasi gel dan dimasukkan hanya 1/3 panjang pipa.',
          pregnancy: 'Kategori B (Aman digunakan sesaat). Bekerja lokal di rektum tanpa diserap ke peredaran darah, aman untuk ibu hamil & menyusui.',
          geriatric: '1 tube (5 mL). Pilihan aman untuk lansia imobilisasi/tirah baring karena melunakkan feses lokal tanpa memicu kram usus atau dehidrasi.'
        },
        timing: 'Bekerja sangat cepat melunakkan tinja dalam waktu 5–15 menit setelah dimasukkan.',
        cautionNotes: 'Pencet sedikit gel keluar untuk melicinkan pipa. Masukkan pipa ke anus, tekan tube hingga habis, dan TETAP TEKAN tube saat dicabut agar cairan tidak tersedot kembali.',
        targetDrugId: 'drug-laxative'
      },
      {
        genericName: 'Bisakodil Suppositoria (Rektal)',
        brandExamples: ['Dulcolax Suppositoria Dewasa / Anak', 'Stolax'],
        bpomClass: 'Obat Bebas Terbatas (Biru)',
        dosageGuideline: 'Dewasa: 1 suppo dewasa (10 mg); Anak 6–12 th: 1 suppo anak (5 mg) dimasukkan ke dubur.',
        dosageDetails: {
          adult: '1 suppositoria dewasa (10 mg) sekali sehari dimasukkan ke dalam lubang dubur/anus. Efek timbul dalam 15–60 menit.',
          pediatric: 'Anak 6–12 tahun: 1 suppositoria anak (5 mg) sekali sehari. Anak < 6 tahun: Tidak dianjurkan sediaan dewasa tanpa resep dokter.',
          infant: 'KONTRAINDIKASI MUTLAK pada bayi < 1 tahun (risiko iritasi mukosa rektum dan proktitis).',
          pregnancy: 'Kategori C (Gunakan hati-hati). Hindari penggunaan mandiri tanpa petunjuk dokter. Lebih disarankan menggunakan laktulosa sirup atau suplemen serat.',
          geriatric: '1 suppositoria dewasa (10 mg) bila perlu. Pastikan pasien dekat toilet karena onset cepat (15-60 menit) dan kecukupan hidrasi terjaga.'
        },
        timing: 'Bekerja cepat merangsang BAB dalam waktu 15–60 menit setelah dimasukkan.',
        cautionNotes: 'Buka kemasan foil dan basahi sedikit ujung suppositoria dengan air sebelum dimasukkan perlahan ke dubur.',
        targetDrugId: 'drug-laxative'
      },
      {
        genericName: 'Sirup Laktulosa',
        brandExamples: ['Duphalac', 'Lactulax', 'Constipen'],
        bpomClass: 'Obat Bebas (Hijau)',
        dosageGuideline: 'Dewasa: 15–30 mL/hari. Anak: 5–15 mL/hari (sesuai usia) diminum pagi hari.',
        dosageDetails: {
          adult: 'Dosis awal: 15–30 mL per hari (1–2 sendok makan) diminum pagi hari. Dosis pemeliharaan: 10–15 mL per hari.',
          pediatric: 'Anak 1–6 th: 5–10 mL/hari; Anak 7–14 th: 10–15 mL/hari (dapat dicampur air atau jus buah).',
          infant: 'Bayi < 1 th: 2.5–5 mL per hari dosis tunggal pagi hari (dapat dicampur ASI atau air matang) atas petunjuk tenaga medis.',
          pregnancy: 'Kategori B (Pilihan Utama / Paling Aman). Lini pertama untuk ibu hamil & menyusui karena tidak diserap ke sirkulasi darah sistemik.',
          geriatric: 'Dosis awal 15 mL/hari di pagi hari. Pilihan paling fisiologis untuk lansia dengan konstipasi kronik tanpa memicu kram atau dehidrasi mendadak.'
        },
        timing: 'Diminum saat sarapan pagi atau sebelum tidur malam.',
        cautionNotes: 'Pencahar osmotik alami yang melunakkan feses. Bekerja lembut dalam 24–48 jam tanpa memicu kram perut.',
        targetDrugId: 'drug-lactulose'
      },
      {
        genericName: 'Bisakodil Tablet Oral',
        brandExamples: ['Dulcolax Tablet', 'Laxana'],
        bpomClass: 'Obat Bebas Terbatas (Biru)',
        dosageGuideline: 'Dewasa: 1–2 tablet (5–10 mg); Anak 6–12 th: 1 tablet (5 mg) malam sebelum tidur.',
        dosageDetails: {
          adult: '1–2 tablet (5–10 mg) diminum malam hari sebelum tidur. Bekerja dalam 6–12 jam (efek BAB terasa keesokan paginya).',
          pediatric: 'Anak 6–12 tahun: 1 tablet (5 mg) malam hari sebelum tidur. Anak < 6 tahun: KONTRAINDIKASI tablet oral (gunakan laktulosa sirup).',
          infant: 'KONTRAINDIKASI MUTLAK pada bayi dan balita (risiko tersedak/aspirasi tablet dan kram usus parah).',
          pregnancy: 'Kategori C (Hindari Swamedikasi Mandiri). Dapat memicu refleks kontraksi otot rahim. Gunakan laktulosa atau serat alami.',
          geriatric: 'Mulai dari dosis terendah 1 tablet (5 mg) malam hari. Hindari konsumsi rutin > 7 hari agar tidak memicu atoni kolon & hipokalemia.'
        },
        timing: 'Telan utuh dengan segelas air putih. JANGAN DIKUNYAH dan JANGAN DIMINUM BERSAMAAN DENGAN SUSU/ANTASIDA.',
        cautionNotes: 'Bekerja dalam 6–12 jam (efek BAB terasa keesokan paginya). Jeda minimal 1 jam jika minum susu atau antasida.',
        targetDrugId: 'drug-laxative'
      }
    ],
    nonPharmacolTherapy: [
      'Tingkatkan konsumsi makanan tinggi serat: pepaya matang, apel, pir, oatmeal, sayuran hijau, dan agar-agar.',
      'Minum air putih minimal 2 - 2.5 liter per hari (serat butuh banyak air agar tidak menggumpal keras).',
      'Gunakan posisi jongkok saat buang air besar (atau gunakan bangku kecil di bawah kaki saat duduk di kloset duduk) untuk meluruskan poros rektum.',
      'Jangan menunda keinginan untuk buang air besar.',
      'Lakukan aktivitas fisik jalan kaki 30 menit per hari untuk menstimulasi peristaltik usus.'
    ],
    contraindicatedForSelfMed: [
      'JANGAN menggunakan pencahar rektal atau stimulan lebih dari 7 hari berturut-turut untuk mencegah ketergantungan usus (Lazy Bowel Syndrome).'
    ],
    specialPopulations: {
      pregnancyWarning: 'Laktulosa atau suplemen serat adalah pilihan paling aman untuk ibu hamil. Microlax dapat digunakan jika ada impaksi feses rektal. Hindari bisakodil oral dosis tinggi.',
      pediatricWarning: 'Microlax tube dapat digunakan pada anak > 1 tahun (gunakan 1/2 pipa untuk usia 1-3 tahun). Sirup laktulosa juga sangat aman untuk anak.',
      geriatricWarning: 'Microlax dan Laktulosa sangat cocok untuk lansia karena melunakkan feses tanpa memicu kram atau dehidrasi mendadak.'
    },
    whenToSeeDoctor: [
      'Sembelit tidak kunjung teratasi setelah 7 hari terapi.',
      'Muncul darah merah segar pada kloset atau feses.'
    ]
  },

  // ============================================================================
  // 3. SALURAN NAPAS & THT (RESPIRATORY & FLU)
  // ============================================================================
  {
    id: 'swam-flu-hidung-tersumbat',
    title: 'Flu, Bersin & Hidung Tersumbat (Common Cold)',
    category: 'respiratory',
    categoryLabel: 'Saluran Napas / THT',
    iconName: 'CloudRain',
    quickSummary: 'Infeksi virus saluran napas atas akut yang ditandai dengan hidung mampet, ingus encer mengalir, bersin-bersin, dan kepala agak pusing.',
    laymanKeywords: ['flu', 'pilek', 'hidung tersumbat', 'bersin bersin', 'hidung mampet', 'meler', 'common cold'],
    typicalSymptoms: [
      'Hidung tersumbat bergantian kiri dan kanan',
      'Cairan ingus encer bening mengalir (rinorea)',
      'Bersin-bersin berulang terutama pagi hari atau saat udara dingin',
      'Mata berair dan rasa tidak nyaman di tenggorokan'
    ],
    redFlags: [
      'Sesak napas, napas berbunyi mengi (wheezing), atau napas cepat terengah-engah',
      'Ingus kental berbau busuk disertai nyeri tekan hebat di pipi/dahi > 10 hari (curiga Sinusitis Bakterial Akut)',
      'Batuk darah atau dahak bercampur darah segar',
      'Demam tinggi > 38.5°C yang berlangsung lebih dari 3 hari'
    ],
    maxSelfMedDays: 5,
    recommendedDrugs: [
      {
        genericName: 'Pseudoefedrin + Klorfeniramin (CTM) / Parasetamol',
        brandExamples: ['Rhinos Junior', 'Decolgen', 'Neozep Forte', 'Procold Flu', 'Bodrex Flu & Batuk'],
        bpomClass: 'Obat Bebas Terbatas (Biru)',
        dosageGuideline: 'Dewasa: 1 kaplet 3 kali sehari. Anak: gunakan sirup flu anak berlabel resmi.',
        dosageDetails: {
          adult: '1 kaplet diminum 3 kali sehari sesudah makan.',
          pediatric: 'Anak 6–12 tahun: 1/2 dosis dewasa (sirup flu 5 mL 3x sehari). Anak 2–6 tahun: 2.5 mL sirup flu anak atas anjuran dokter.',
          infant: 'KONTRAINDIKASI MUTLAK pada bayi < 2 tahun (risiko depresi napas, aritmia jantung, dan kejang). Hindari swamedikasi dekongestan oral pada bayi.',
          pregnancy: 'Kategori C. Hindari dekongestan oral (pseudoefedrin) pada trimester 1 karena risiko vasokonstriksi plasenta. Pilih Nasal Saline Spray.',
          geriatric: 'Hati-hati: Pseudoefedrin dapat menaikkan tekanan darah dan memicu retensi urine pada lansia dengan BPH.'
        },
        timing: 'Diminum sesudah makan.',
        cautionNotes: 'Pseudoefedrin melegakan hidung mampet, CTM meredakan bersin dan ingus meler. Waspadai efek mengantuk.',
        targetDrugId: 'drug-chlorpheniramine-maleate'
      },
      {
        genericName: 'Semprot Hidung Air Laut Alami (Nasal Saline Spray)',
        brandExamples: ['Sterimar Nasal Spray', 'Aqua Maris', 'Breathy Tetes Hidung NaCl'],
        bpomClass: 'Obat Bebas (Hijau)',
        dosageGuideline: 'Semprotkan 1–2 kali ke masing-masing lubang hidung 3–4 kali sehari.',
        dosageDetails: {
          adult: 'Semprotkan 1–2 kali semprot ke masing-masing lubang hidung 3–4 kali sehari.',
          pediatric: 'Anak 1–12 tahun: 1–2 semprot/tetes ke tiap lubang hidung 3–4 kali sehari sebelum makan/tidur.',
          infant: 'Bayi 0–12 bulan: 1–2 tetes cairan NaCl 0.9% (Breathy Drops) ke tiap lubang hidung sebelum menyusu dan sebelum tidur untuk melunakkan kerak ingus (100% aman).',
          pregnancy: 'Kategori A (100% Aman). Pilihan lini pertama paling aman untuk hidung tersumbat sepanjang kehamilan.',
          geriatric: 'Semprotkan sesuai kebutuhan. Sangat aman tanpa interaksi dengan obat hipertensi.'
        },
        timing: 'Kapan saja saat hidung mampet atau kering.',
        cautionNotes: 'Sangat aman tanpa efek samping obat; mengencerkan lendir dan membersihkan alergen di rongga hidung.',
        targetDrugId: 'drug-fornas-sodium-chloride'
      },
      {
        genericName: 'Oksimetazolin Semprot Hidung 0.05%',
        brandExamples: ['Iliadin Spray / Drop', 'Afrin'],
        bpomClass: 'Obat Bebas Terbatas (Biru)',
        dosageGuideline: 'Dewasa: 2-3 semprot tiap lubang hidung, maks 2x sehari. Maksimal 3 HARI.',
        dosageDetails: {
          adult: '2–3 semprot pada tiap lubang hidung, maksimal 2 kali sehari (pagi dan malam). MAKSIMAL 3 HARI.',
          pediatric: 'Anak 2–6 tahun: gunakan sediaan khusus anak 0.025% (Iliadin Drop Anak 1–2 tetes). Anak 6–12 th: 2–3 tetes 0.025% maks 2x sehari (maks 3 hari).',
          infant: 'KONTRAINDIKASI MUTLAK pada bayi < 2 tahun (risiko depresi SSP parah, bradikardia, hipotermia, dan koma).',
          pregnancy: 'Kategori C. Hindari penggunaan rutin swamedikasi; lebih aman gunakan nasal saline.',
          geriatric: 'Gunakan maksimal 2 hari. Hati-hati bila ada glaukoma sudut sempit atau penyakit kardiovaskular.'
        },
        timing: 'Sebelum tidur atau saat hidung sangat mampet.',
        cautionNotes: 'SANGAT MELEGAKAN HIDUNG DALAM HITUNGAN MENIT. PERINGATAN KERAS: JANGAN GUNAKAN LEBIH DARI 3 HARI BERTURUT-TURUT untuk mencegah Rhinitis Medicamentosa (hidung tambah mampet parah).',
        targetDrugId: 'drug-nasal-decongestant'
      }
    ],
    nonPharmacolTherapy: [
      'Menghirup uap air panas dari mangkuk (bisa diteteskan minyak kayu putih / menthol) dengan kepala ditutup handuk.',
      'Minum banyak air putih hangat, teh jahe madu, atau sup ayam hangat.',
      'Gunakan pelembap udara ruangan (humidifier) bila udara kamar ber-AC kering.',
      'Tidur dengan bantal lebih tinggi untuk melancarkan saluran napas.'
    ],
    contraindicatedForSelfMed: [
      'JANGAN mengonsumsi Antibiotik! Flu disebabkan oleh Virus (Rhinovirus, Influenza), antibiotik TIDAK AKAN membunuh virus dan hanya merusak bakteri baik usus.'
    ],
    specialPopulations: {
      pregnancyWarning: 'Gunakan Nasal Saline Spray (Sterimar/Breathy) yang 100% aman tanpa bahan kimia obat. Hindari Pseudoefedrin oral pada trimester pertama.',
      pediatricWarning: 'Gunakan sediaan tetes hidung NaCl fisiologis (Breathy Drops) atau sirup flu anak berlabel resmi.',
      geriatricWarning: 'Hati-hati Pseudoefedrin oral dapat menaikkan tekanan darah dan retensi urin pada lansia dengan pembesaran prostat (BPH).'
    },
    whenToSeeDoctor: [
      'Gejala flu tidak kunjung membaik setelah 7-10 hari.',
      'Muncul nyeri telinga hebat atau nyeri di sekitar mata dan dahi.'
    ]
  },
  {
    id: 'swam-batuk-berdahak',
    title: 'Batuk Berdahak (Productive Cough)',
    category: 'respiratory',
    categoryLabel: 'Saluran Napas / THT',
    iconName: 'Activity',
    quickSummary: 'Batuk yang disertai dahak/lendir kental di tenggorokan atau saluran napas, membutuhkan obat pengencer dan pengeluar dahak (mukolitik & ekspektoran).',
    laymanKeywords: ['batuk berdahak', 'batuk lendir', 'dahak kental', 'tenggorokan ganjel', 'batuk basah'],
    typicalSymptoms: [
      'Batuk berbunyi basah/grok-grok',
      'Dahak putih atau kekuningan yang terasa mengganjal di tenggorokan',
      'Dada terasa berat akibat tumpukan lendir'
    ],
    redFlags: [
      'Dahak bercampur DARAH segar atau berwarna kecokelatan berkarat',
      'Batuk berlangsung lebih dari 2 minggu (curiga Tuberkulosis / TB Paru)',
      'Disertai sesak napas berat atau bunyi mengi',
      'Disertai penurunan berat badan dan keringat malam hari'
    ],
    maxSelfMedDays: 5,
    recommendedDrugs: [
      {
        genericName: 'Guaifenesin (Glyceryl Guaiacolate / GG)',
        brandExamples: ['Guaifenesin Generik Kimia Farma', 'Bisolvon Extra', 'OBH Combi Batuk Berdahak'],
        bpomClass: 'Obat Bebas (Hijau)',
        dosageGuideline: 'Dewasa: 100–200 mg tiap 4–6 jam. Anak 6–12 th: 50–100 mg tiap 4–6 jam.',
        dosageDetails: {
          adult: '100 mg – 200 mg tiap 4–6 jam (maksimal 1200 mg per hari) diminum dengan segelas penuh air.',
          pediatric: 'Anak 6–12 th: 50–100 mg tiap 4–6 jam; Anak 2–6 th: 25–50 mg tiap 4–6 jam (gunakan sirup obat). Anak 1–2 th: hanya atas anjuran dokter.',
          infant: 'KONTRAINDIKASI MUTLAK swamedikasi pada bayi < 1 tahun. Utamakan hidrasi ASI/cairan hangat dan fisioterapi tepuk punggung lembut.',
          pregnancy: 'Kategori C. Hindari penggunaan berlebih pada trimester pertama. Utamakan minum banyak air hangat.',
          geriatric: '100 mg tiap 6 jam. Pastikan hidrasi cairan cukup agar lendir efektif mencair.'
        },
        timing: 'Diminum sesudah makan dengan segelas penuh air putih.',
        cautionNotes: 'Ekspektoran yang merangsang aliran cairan saluran napas sehingga dahak mudah dibatukkan keluar.',
        targetDrugId: 'drug-guaifenesin'
      },
      {
        genericName: 'Bromheksin HCl 8 mg',
        brandExamples: ['Bisolvon Tablet / Sirup', 'Hustab', 'Mucohexin'],
        bpomClass: 'Obat Bebas Terbatas (Biru)',
        dosageGuideline: 'Dewasa: 1 tablet (8 mg) 3 kali sehari. Anak 6–12 th: 1/2 tab (4 mg) 3x sehari.',
        dosageDetails: {
          adult: '1 tablet (8 mg) 3 kali sehari sesudah makan.',
          pediatric: 'Anak 6–12 tahun: 1/2 tablet (4 mg) atau 5 mL sirup 3 kali sehari. Anak 2–6 th: 2.5 mL sirup 3 kali sehari.',
          infant: 'Bayi < 1 tahun: KONTRAINDIKASI swamedikasi tanpa instruksi dokter anak (bila diresepkan dokter, sediaan eliksir 1.25 mg 2–3x sehari).',
          pregnancy: 'Kategori B (Relatif Aman). Konsultasikan dengan dokter bila digunakan pada trimester pertama.',
          geriatric: '1 tablet 3 kali sehari. Aman dan tidak memicu kantuk atau retensi urin.'
        },
        timing: 'Diminum sesudah makan.',
        cautionNotes: 'Mukolitik yang memutus ikatan serat mukopolisakarida sehingga dahak menjadi encer.',
        targetDrugId: 'drug-bromhexine'
      },
      {
        genericName: 'Asetilsistein 200 mg',
        brandExamples: ['Fluimucil', 'N-Ace', 'Acetin'],
        bpomClass: 'Obat Wajib Apotek (OWA)',
        dosageGuideline: 'Dewasa: 1 kapsul / sachet 200 mg 3 kali sehari sesudah makan.',
        dosageDetails: {
          adult: '1 kapsul / sachet effervescent 200 mg diminum 3 kali sehari sesudah makan (maks 600 mg/hari).',
          pediatric: 'Anak > 6 tahun: 200 mg 2 kali sehari. Anak 2–6 th: 100 mg 2–3 kali sehari (hanya atas resep dokter).',
          infant: 'KONTRAINDIKASI MUTLAK pada bayi < 2 tahun (kemampuan batuk belum matang, risiko obstruksi bronkial masif oleh lendir cair).',
          pregnancy: 'Kategori B. Pilihan mukolitik yang cukup aman bila batuk berdahak kental tidak membaik.',
          geriatric: '200 mg 2–3 kali sehari. Pilihan baik untuk lansia dengan PPOK atau bronkitis kronis.'
        },
        timing: 'Larutkan dalam 1/2 gelas air putih sesudah makan.',
        cautionNotes: 'Mukolitik poten pengencer lendir kental. Sesuai DOWA No. 1, penyerahan oleh Apoteker maksimal 20 kapsul.',
        targetDrugId: 'drug-acetylcysteine'
      }
    ],
    nonPharmacolTherapy: [
      'MINUM BANYAK AIR HANGAT (minimal 2.5 - 3 liter sehari) — air putih hangat adalah pengencer dahak alami terbaik di dunia.',
      'Minum air madu hangat perasan lemon (1-2 sendok makan madu terbukti klinis meredakan frekuensi batuk).',
      'Lakukan fisioterapi dada tepuk punggung lembut saat posisi tengkurap untuk membantu melepaskan dahak anak.',
      'Hindari rokok, paparan asap rokok, debu, dan es.'
    ],
    contraindicatedForSelfMed: [
      'JANGAN minum obat penekan batuk kering (seperti Dekstrometorfan) untuk batuk berdahak, karena dahak akan tertahan di paru-paru dan memicu infeksi radang paru (Pneumonia).'
    ],
    specialPopulations: {
      pregnancyWarning: 'Guaifenesin dan Bromheksin dapat digunakan dengan anjuran dokter. Utamakan minum banyak air hangat dan madu.',
      pediatricWarning: 'JANGAN berikan madu pada bayi usia < 1 tahun karena risiko Botulisme bayi. Gunakan sirup tetes pengencer dahak dosis anak.',
      geriatricWarning: 'Pastikan asupan cairan cukup saat meminum obat mukolitik.'
    },
    whenToSeeDoctor: [
      'Batuk berdahak tidak kunjung sembuh setelah 2 minggu.',
      'Dahak bercampur darah atau berbau busuk.'
    ]
  },
  {
    id: 'swam-batuk-kering',
    title: 'Batuk Kering & Gatal Tenggorokan (Non-Productive Cough)',
    category: 'respiratory',
    categoryLabel: 'Saluran Napas / THT',
    iconName: 'MicOff',
    quickSummary: 'Batuk tanpa lendir/dahak yang terasa menggelitik atau gatal di tenggorokan, seringkali timbul malam hari dan mengganggu tidur.',
    laymanKeywords: ['batuk kering', 'batuk gatal', 'batuk malam', 'batuk terus terusan', 'tenggorokan gatal'],
    typicalSymptoms: [
      'Batuk tanpa keluar dahak',
      'Sensasi geli atau gatal menusuk di pangkal tenggorokan',
      'Batuk bertambah parah saat berbaring atau terpapar udara dingin AC'
    ],
    redFlags: [
      'Batuk menggonggong melengking tajam pada anak (Croup / Pertusis)',
      'Disertai sesak napas atau bibir tampak membiru',
      'Batuk yang muncul setelah minum obat darah tinggi golongan ACE-Inhibitor (Captopril, Ramipril)',
      'Batuk kering kronis > 3 minggu'
    ],
    maxSelfMedDays: 5,
    recommendedDrugs: [
      {
        genericName: 'Dekstrometorfan HBr 15 mg',
        brandExamples: ['Bisolvon Antitusif', 'Vicks Formula 44 Batuk Kering', 'Dextromethorphan HBr Generik'],
        bpomClass: 'Obat Bebas Terbatas (Biru)',
        dosageGuideline: 'Dewasa: 15–30 mg tiap 6–8 jam. Anak 6–12 th: 7.5–15 mg tiap 6–8 jam.',
        dosageDetails: {
          adult: '15 mg – 30 mg tiap 6–8 jam bila batuk kering mengganggu tidur (maksimal 120 mg per hari).',
          pediatric: 'Anak 6–12 tahun: 7.5 mg – 15 mg tiap 6–8 jam. Anak < 6 tahun: KONTRAINDIKASI untuk swamedikasi mandiri.',
          infant: 'KONTRAINDIKASI MUTLAK pada bayi < 2 tahun (risiko depresi napas fatal, hipotermia, dan apneu).',
          pregnancy: 'Kategori C. Hindari penggunaan mandiri, gunakan hanya bila sangat mengganggu tidur atas izin dokter.',
          geriatric: '15 mg sebelum tidur. Waspadai rasa kantuk, pusing sempoyongan, dan risiko jatuh pada lansia.'
        },
        timing: 'Diminum sebelum atau sesudah makan.',
        cautionNotes: 'Antitusif yang menekan refleks batuk di pusat saraf otak. Dapat menimbulkan kantuk ringan.',
        targetDrugId: 'drug-antitussive'
      },
      {
        genericName: 'Madu Murni Alami (Clinical Honey Therapy)',
        brandExamples: ['Madu Uray', 'Madu Nusantara', 'TJ Madu Murni'],
        bpomClass: 'Obat Bebas (Hijau)',
        dosageGuideline: '1 - 2 sendok teh (5 - 10 mL) diminum 30 menit sebelum tidur malam.',
        dosageDetails: {
          adult: '1–2 sendok makan diminum langsung atau dicampur air hangat perasan lemon sebelum tidur.',
          pediatric: 'Anak usia > 1 tahun: 1–2 sendok teh (5–10 mL) 30 menit sebelum tidur.',
          infant: 'KONTRAINDIKASI MUTLAK pada bayi < 1 tahun karena risiko spora Clostridium botulinum yang memicu Botulisme Bayi (kelumpuhan otot flaksid fatal).',
          pregnancy: 'Kategori A (Alami & Aman). Pilihan antitusif paling aman untuk meredakan batuk kering selama hamil.',
          geriatric: '1 sendok makan sebelum tidur. Jika penderita diabetes, pantau kadar gula darah.'
        },
        timing: 'Sebelum tidur atau saat tenggorokan terasa gatal.',
        cautionNotes: 'Rekomendasi WHO dan American Academy of Pediatrics (AAP) yang terbukti sama efektifnya dengan obat kimia dalam meredakan batuk malam.',
        targetDrugId: 'drug-herbal'
      }
    ],
    nonPharmacolTherapy: [
      'Hisap permen pelega tenggorokan (lozenges) atau permen herbal untuk merangsang produksi air liur melumasi tenggorokan.',
      'Minum air hangat sedikit-sedikit namun sering.',
      'Gunakan humidifier ruangan untuk mencegah tenggorokan kering saat tidur.',
      'Hindari makanan berminyak, gorengan krispi, dan makanan manis berlebih yang memicu gatal.'
    ],
    contraindicatedForSelfMed: [
      'JANGAN berikan Madu pada bayi di bawah usia 1 tahun (risiko spora Clostridium botulinum).'
    ],
    specialPopulations: {
      pregnancyWarning: 'Utamakan terapi non-obat madu hangat dan uap air. Konsultasikan bila butuh antitusif.',
      pediatricWarning: 'Madu sangat baik untuk anak usia > 1 tahun.',
      geriatricWarning: 'Periksa apakah pasien mengonsumsi obat Captopril; jika ya, batuk kering adalah efek samping obat yang harus dikonsultasikan ke dokter untuk diganti.'
    },
    whenToSeeDoctor: [
      'Batuk kering tidak reda setelah 5 hari.',
      'Batuk menyebabkan sesak napas atau muntah.'
    ]
  },
  {
    id: 'swam-radang-tenggorokan',
    title: 'Radang Tenggorokan Ringan (Sore Throat)',
    category: 'respiratory',
    categoryLabel: 'Saluran Napas / THT',
    iconName: 'Thermometer',
    quickSummary: 'Tenggorokan terasa perih, sakit saat menelan makanan/minuman, dan kering yang umumnya dipicu infeksi virus faringitis akut.',
    laymanKeywords: ['radang tenggorokan', 'sakit menelan', 'tenggorokan sakit', 'tenggorokan perih', 'faringitis'],
    typicalSymptoms: [
      'Rasa sakit atau perih saat menelan',
      'Tenggorokan tampak agak kemerahan',
      'Suara sedikit serak',
      'Demam sumeng-sumeng ringan'
    ],
    redFlags: [
      'Tampak bercak putih/nanah (eksudat) pada amandel atau dinding tenggorokan (curiga Faringitis Streptokokus)',
      'Sangat sulit menelan air liur hingga air liur menetes keluar (Drooling)',
      'Leher bengkak besar di salah satu sisi',
      'Mulut sulit dibuka lebar'
    ],
    maxSelfMedDays: 3,
    recommendedDrugs: [
      {
        genericName: 'Dequalinium Klorida / Fradiomisin Tablet Hisap (Lozenges)',
        brandExamples: ['Degirol', 'FG Troches', 'Strepsils', 'SP Troches'],
        bpomClass: 'Obat Bebas / Bebas Terbatas',
        dosageGuideline: 'Dewasa: 1 tablet dihisap perlahan di dalam mulut tiap 3–4 jam. Maksimal 6–8 tablet hisap per hari.',
        dosageDetails: {
          adult: '1 tablet dihisap perlahan di dalam mulut tiap 3–4 jam bila terasa nyeri/mengganjal. Maksimal 6–8 tablet hisap per hari.',
          pediatric: 'Anak > 6 tahun: 1 tablet dihisap tiap 4–6 jam (maks 4–5 tab/hari). Anak < 6 tahun: KONTRAINDIKASI karena risiko tersedak (choking hazard).',
          infant: 'KONTRAINDIKASI MUTLAK pada bayi < 1 tahun (risiko fatal aspirasi/tersedak). Berikan ASI hangat atau cairan hangat.',
          pregnancy: 'Kategori B (Aman). Bekerja lokal sebagai antiseptik rongga orofaring tanpa absorpsi sistemik bermakna.',
          geriatric: '1 tablet hisap tiap 4–6 jam. Pastikan refleks menelan baik dan tidak tertidur saat menghisap lozenges.'
        },
        timing: 'Dihisap perlahan di mulut seperti permen, JANGAN DIKUNYAH ATAU DITELAN UTUH.',
        cautionNotes: 'Antiseptik lokal yang membunuh kuman di rongga mulut dan tenggorokan.',
        targetDrugId: 'drug-lozenges'
      },
      {
        genericName: 'Obat Kumur Povidone Iodine 1%',
        brandExamples: ['Betadine Obat Kumur', 'Gargle Antiseptik'],
        bpomClass: 'Obat Bebas Terbatas (Biru)',
        dosageGuideline: 'Tuang 15 mL ke tutup botol, kumur dan tengadahkan kepala ke atas sambil berucap "ahhh" (gargling) selama 30 detik, 3 kali sehari. BUANG / JANGAN DITELAN.',
        dosageDetails: {
          adult: '15 mL dikumur dan ditengadahkan ke tenggorokan (gargle) selama 30 detik, 3–4 kali sehari sesudah sikat gigi. LALU BUANG / JANGAN DITELAN.',
          pediatric: 'Anak > 6 tahun: 10 mL kumur di bawah pengawasan orang tua. Anak < 6 tahun: TIDAK DIANJURKAN karena belum mampu berkumur tanpa menelan cairan.',
          infant: 'KONTRAINDIKASI MUTLAK pada bayi < 1 tahun (risiko tertelan dan disfungsi tiroid akibat absorpsi iodin berlebih).',
          pregnancy: 'Kategori C (Gunakan sangat terbatas). Hindari penggunaan rutin jangka panjang (> 7 hari) karena iodin dapat menembus plasenta dan memengaruhi tiroid janin.',
          geriatric: '15 mL gargle 2–3 kali sehari. Pastikan refleks berkumur baik agar tidak tersedak ke saluran napas.'
        },
        timing: 'Sesudah sikat gigi.',
        cautionNotes: 'Membunuh 99% virus dan kuman di area orofaring.',
        targetDrugId: 'drug-fornas-povidone-iodine'
      },
      {
        genericName: 'Parasetamol 500 mg',
        brandExamples: ['Panadol', 'Sanmol'],
        bpomClass: 'Obat Bebas (Hijau)',
        dosageGuideline: 'Dewasa: 500 mg diminum tiap 6 jam bila nyeri menelan terasa mengganggu.',
        dosageDetails: {
          adult: '500 mg – 1000 mg tiap 4–6 jam bila nyeri menelan mengganggu makan/minum. Maksimal 4000 mg/24 jam.',
          pediatric: '10–15 mg/kgBB tiap 4–6 jam (Sirup 120 mg/5 mL: Anak 1–2 th: 5 mL; 3–6 th: 7.5 mL; 7–12 th: 10–15 mL).',
          infant: 'Bayi 0–3 bln: 10 mg/kgBB (atau drops 0.4–0.6 mL); Bayi 3–12 bln: drops 0.6–1.2 mL (60–120 mg) tiap 6–8 jam bila nyeri/demam rewel.',
          pregnancy: 'Kategori B (Pilihan Utama). Analgesik paling aman untuk meredakan nyeri tenggorokan pada ibu hamil dan menyusui.',
          geriatric: '500 mg tiap 6–8 jam (maksimal 2000–3000 mg/24 jam). Lebih aman untuk lambung dibanding NSAID.'
        },
        timing: 'Sesudah makan.',
        cautionNotes: 'Meredakan rasa sakit dan nyeri saat menelan.',
        targetDrugId: 'drug-paracetamol'
      }
    ],
    nonPharmacolTherapy: [
      'Kumur air garam hangat 3-4 kali sehari (1/2 sdt garam dalam 200 mL air hangat).',
      'Konsumsi makanan yang bertekstur lembut dan berkuah hangat (bubur, sup ayam, puding).',
      'Minum banyak air putih hangat dan hindari gorengan renyah, kerupuk, atau makanan yang menggores tenggorokan.',
      'Istirahatkan suara / jangan berteriak atau bicara terlalu banyak.'
    ],
    contraindicatedForSelfMed: [
      'SANGAT PENTING: JANGAN MEMBELI ANTIBIOTIK SENDIRI! Mayoritas radang tenggorokan akut (85-90%) disebabkan oleh VIRUS. Antibiotik tidak akan mempercepat kesembuhan dan justru memicu resistensi kuman kebal obat.'
    ],
    specialPopulations: {
      pregnancyWarning: 'Aman menggunakan tablet hisap Dequalinium dan kumur air garam.',
      pediatricWarning: 'Hati-hati tablet hisap pada balita karena berisiko tersedak.',
      geriatricWarning: 'Aman digunakan.'
    },
    whenToSeeDoctor: [
      'Sakit menelan sangat berat hingga tidak bisa minum air.',
      'Demam tinggi > 38.5°C tidak turun setelah 3 hari.',
      'Amandel tampak membengkak besar dengan bercak nanah putih.'
    ]
  },

  // ============================================================================
  // 4. KULIT & ALERGI (SKIN & ALLERGY)
  // ============================================================================
  {
    id: 'swam-biduran-alergi',
    title: 'Biduran, Bentol & Gatal Alergi (Urtikaria Akut)',
    category: 'skin-allergy',
    categoryLabel: 'Kulit & Alergi',
    iconName: 'Sparkles',
    quickSummary: 'Bercak bentol kemerahan yang gatal dan menonjol di kulit akibat pelepasan histamin yang dipicu makanan (seafood, telur), udara dingin, atau gigitan serangga.',
    laymanKeywords: ['biduran', 'kaligata', 'bentol gatal', 'alergi kulit', 'gatal kemerahan', 'urtikaria'],
    typicalSymptoms: [
      'Bentol-bentol merah menonjol berbatas tegas (plak urtika) di berbagai bagian tubuh',
      'Rasa gatal yang sangat intens dan panas',
      'Bentol dapat berpindah-pindah lokasi dan menghilang dalam beberapa jam'
    ],
    redFlags: [
      'Bibir, kelopak mata, lidah, atau tenggorokan membengkak mendadak (Angioedema)',
      'Disertai SESAK NAPAS, mengi, atau dada terasa tercekik (TANDA REAKSI ANAFILAKSIS - SEGERA KE UGD)',
      'Disertai pusing melayang hebat, pingsan, atau tensi anjlok mendadak'
    ],
    maxSelfMedDays: 3,
    recommendedDrugs: [
      {
        genericName: 'Setirizin HCl 10 mg',
        brandExamples: ['Incidal-OD', 'Ryvel', 'Cerini', 'Cetirizine Kimia Farma'],
        bpomClass: 'Obat Wajib Apotek (OWA)',
        dosageGuideline: 'Dewasa: 10 mg 1x sehari. Anak 6–12 th: 5 mg 2x / 10 mg 1x sehari.',
        dosageDetails: {
          adult: '1 tablet (10 mg) diminum SEKALI SEHARI pada malam hari sebelum tidur (maks 10 mg/hari).',
          pediatric: 'Anak 6–12 th: 5 mg (1/2 tab atau 5 mL sirup) 2x sehari atau 10 mg 1x sehari. Anak 2–6 th: 2.5 mg 2x sehari (sirup drops).',
          infant: 'Bayi 6–12 bulan: 2.5 mg (drops) 1x sehari HANYA atas resep dokter. Bayi < 6 bulan: KONTRAINDIKASI MUTLAK untuk swamedikasi.',
          pregnancy: 'Kategori B (Pilihan Teraman). Antihistamin generasi ke-2 paling aman dan minim sedasi pada kehamilan & laktasi.',
          geriatric: 'Dosis awal 5 mg sekali sehari pada malam hari. Waspadai penurunan klirens ginjal.'
        },
        timing: 'Diminum sebelum tidur.',
        cautionNotes: 'Antihistamin generasi ke-2 yang cepat menghentikan gatal bentol dengan efek mengantuk minimal. Sesuai DOWA No. 3, penyerahan oleh Apoteker maksimal 10 tablet.',
        targetDrugId: 'drug-cetirizine'
      },
      {
        genericName: 'Klorfeniramin Maleat (CTM) 4 mg',
        brandExamples: ['CTM Generik', 'Chlorpheniramine'],
        bpomClass: 'Obat Bebas Terbatas (Biru)',
        dosageGuideline: 'Dewasa: 1 tablet (4 mg) 3 kali sehari. Anak 6–12 th: 1/2 tablet (2 mg) 3x sehari.',
        dosageDetails: {
          adult: '1 tablet (4 mg) 3–4 kali sehari sesudah makan (maksimal 24 mg per 24 jam).',
          pediatric: 'Anak 6–12 tahun: 1/2 tablet (2 mg) 3–4 kali sehari. Anak 2–6 tahun: 1 mg (sirup) 3 kali sehari.',
          infant: 'KONTRAINDIKASI MUTLAK pada bayi < 2 tahun (risiko depresi pernapasan fatal dan eksitasi SSP paradoksal).',
          pregnancy: 'Kategori B. Dapat digunakan bila sangat diperlukan, namun prioritaskan setirizin untuk menghindari sedasi.',
          geriatric: 'HINDARI PADA LANSIA (Beers Criteria). Efek antikolinergik memicu kantuk berat, delirium/kebingungan, retensi urin, dan risiko jatuh fatal.'
        },
        timing: 'Diminum sesudah makan.',
        cautionNotes: 'Sangat efektif namun MENYEBABKAN KANTUK BERAT. DILARANG MENGEMUDI atau mengoperasikan mesin setelah minum obat ini.',
        targetDrugId: 'drug-chlorpheniramine-maleate'
      },
      {
        genericName: 'Losio Calamine / Bedak Salisil 2%',
        brandExamples: ['Caladine Lotion', 'Bedak Salicyl KF', 'Herocyn'],
        bpomClass: 'Obat Bebas (Hijau)',
        dosageGuideline: 'Oleskan atau taburkan tipis merata pada kulit yang gatal 2–4 kali sehari.',
        dosageDetails: {
          adult: 'Oleskan losio atau taburkan bedak tipis merata pada kulit yang gatal 2–4 kali sehari setelah mandi.',
          pediatric: 'Anak usia > 2 tahun: oleskan losio tipis 2–4 kali sehari. Hindari bedak berterbangan terhirup saluran napas anak.',
          infant: 'Bayi < 1 th: Gunakan losio kalamin khusus bayi (liquid powder) tipis. KONTRAINDIKASI bedak tabur dan salisil pekat (risiko aspirasi paru & toksisitas salisilat).',
          pregnancy: 'Kategori A (Aman Topikal). Sangat aman meredakan gatal alergi selama masa kehamilan.',
          geriatric: 'Oleskan lembut. Hindari penggunaan pada kulit lansia yang sangat kering/bersisik berat.'
        },
        timing: 'Kapan saja saat kulit terasa gatal.',
        cautionNotes: 'Memberikan efek sejuk dingin (cooling effect) lokal yang menenangkan rasa gatal.',
        targetDrugId: 'drug-salicyl-powder'
      }
    ],
    nonPharmacolTherapy: [
      'Kompres dingin dengan handuk basah pada area kulit yang bentol untuk meredakan rasa terbakar dan gatal.',
      'Identifikasi dan hindari pemicu alergi (misal seafood udang/kepiting, debu, tungau, dingin).',
      'Gunakan pakaian longgar berbahan katun lembut yang menyerap keringat.',
      'JANGAN MENGGARUK kulit yang bentol karena dapat menyebabkan luka lecet dan infeksi bakteri sekunder.'
    ],
    contraindicatedForSelfMed: [
      'JANGAN mengoleskan balsem panas atau minyak panas pada biduran karena vasodilatasi panas akan memperparah rasa gatal dan bengkak.'
    ],
    specialPopulations: {
      pregnancyWarning: 'Klorfeniramin (CTM) dan Loratadin/Setirizin tergolong aman pada kehamilan setelah konsultasi.',
      pediatricWarning: 'Gunakan Setirizin sirup dosis anak sesuai berat badan.',
      geriatricWarning: 'Hindari CTM pada lansia karena risiko jatuh akibat kantuk dan kebingungan; prioritaskan Setirizin.'
    },
    whenToSeeDoctor: [
      'Biduran tidak kunjung membaik setelah 3 hari.',
      'Muncul pembengkakan di bibir atau kesulitan bernapas (SEGERA KE UGD).'
    ]
  },
  {
    id: 'swam-jamur-kadas-kurap',
    title: 'Kadas, Kurap & Kutu Air (Tinea / Infeksi Jamur Kulit)',
    category: 'skin-allergy',
    categoryLabel: 'Kulit & Alergi',
    iconName: 'ShieldCheck',
    quickSummary: 'Infeksi jamur dermatofita superfisial pada kulit yang menimbulkan bercak melingkar kemerahan berbatas tegas dengan tepi aktif yang sangat gatal terutama saat berkeringat.',
    laymanKeywords: ['kadas', 'kurap', 'kutu air', 'jamur kulit', 'panu', 'tinea', 'gatal selangkangan'],
    typicalSymptoms: [
      'Bercak kemerahan berbentuk cincin melingkar dengan tepi lebih merah dan bersisik (central clearing)',
      'Gatal hebat terutama saat badan berkeringat atau lembap',
      'Pada kutu air: kulit sela-sela jari kaki mengelupas, memutih basah, dan perih'
    ],
    redFlags: [
      'Area infeksi membengkak merah panas keluar nanah (infeksi bakteri sekunder selulitis)',
      'Terjadi pada pasien diabetes melitus yang memiliki luka di kaki',
      'Ruam jamur meluas ke seluruh tubuh dengan daya tahan tubuh menurun'
    ],
    maxSelfMedDays: 7,
    recommendedDrugs: [
      {
        genericName: 'Krim Mikonazol Nitrat 2%',
        brandExamples: ['Daktarin Krim', 'Kalpanax Krim', 'Miconazole OGB'],
        bpomClass: 'Obat Bebas Terbatas (Biru)',
        dosageGuideline: 'Oleskan tipis merata pada area kulit yang berjamur 2 kali sehari (pagi dan malam) setelah mandi.',
        dosageDetails: {
          adult: 'Oleskan tipis merata pada area lesi jamur dan 1–2 cm area sekitarnya 2 kali sehari (pagi dan malam) sesudah mandi selama 2–4 minggu.',
          pediatric: 'Anak > 2 tahun: oleskan tipis merata 2 kali sehari sesudah mandi pada kulit yang sudah dikeringkan.',
          infant: 'Bayi < 1 tahun: Aman dioleskan sangat tipis 1–2x sehari untuk ruam popok akibat infeksi Candida (moniliasis) atas saran dokter. Hindari olesan tebal.',
          pregnancy: 'Kategori B (Pilihan Utama). Sangat aman digunakan pada seluruh trimester kehamilan & menyusui karena absorpsi sistemik sangat minim (< 1%).',
          geriatric: 'Oleskan 2 kali sehari. Pastikan kulit dikeringkan sempurna sebelum mengoleskan obat.'
        },
        timing: 'Sesudah mandi saat kulit sudah kering bersih.',
        cautionNotes: 'SANGAT PENTING: Teruskan pemakaian selama minimal 1-2 minggu SETELAH gejalanya hilang untuk memastikan spora jamur mati tuntas dan tidak kambuh lagi.',
        targetDrugId: 'drug-antifungal-topical'
      },
      {
        genericName: 'Krim Klotrimazol 1%',
        brandExamples: ['Canesten Krim', 'Clotrimazole Generik'],
        bpomClass: 'Obat Bebas Terbatas (Biru)',
        dosageGuideline: 'Oleskan tipis 2-3 kali sehari pada lesi jamur.',
        dosageDetails: {
          adult: 'Oleskan tipis merata 2–3 kali sehari pada lesi jamur selama 2–4 minggu.',
          pediatric: 'Anak > 2 tahun: oleskan tipis 2 kali sehari sesudah mandi.',
          infant: 'Bayi < 1 tahun: dapat digunakan tipis 1–2 kali sehari untuk ruam jamur popok atas petunjuk tenaga medis.',
          pregnancy: 'Kategori B. Pilihan antijamur topikal yang sangat aman untuk ibu hamil.',
          geriatric: 'Oleskan tipis 2 kali sehari pada area jamur yang bersih dan kering.'
        },
        timing: 'Sesudah mandi.',
        cautionNotes: 'Pilihan antijamur topikal spektrum luas yang aman.',
        targetDrugId: 'drug-antifungal-topical'
      },
      {
        genericName: 'Krim Ketokonazol 2% (Ketoconazole Cream 2%)',
        brandExamples: ['Mycoral Krim', 'Fungiderm', 'Formyco', 'Ketoconazole OGB'],
        bpomClass: 'Obat Wajib Apotek (OWA)',
        dosageGuideline: 'Oleskan tipis pada lesi 1–2 kali sehari selama 2–3 minggu.',
        dosageDetails: {
          adult: 'Oleskan tipis merata pada lesi jamur 1–2 kali sehari selama 2–3 minggu.',
          pediatric: 'Anak > 2 tahun: oleskan tipis 1 kali sehari sesudah mandi.',
          infant: 'KONTRAINDIKASI untuk swamedikasi pada bayi < 2 tahun (utamakan mikonazol atau nistatin atas rekomendasi dokter).',
          pregnancy: 'Kategori C. Hindari pada trimester 1; lebih disarankan menggunakan mikonazol atau klotrimazol.',
          geriatric: 'Oleskan tipis 1 kali sehari pada kulit yang kering.'
        },
        timing: 'Sesudah mandi saat kulit kering.',
        cautionNotes: 'Antijamur imidazol berspektrum luas. Sesuai DOWA No. 3, penyerahan oleh Apoteker maksimal 1 tube tanpa resep dokter.',
        targetDrugId: 'drug-ketoconazole'
      }
    ],
    nonPharmacolTherapy: [
      'Jaga area kulit selalu kering dan bersih. Keringkan sela-sela jari kaki dan selangkangan dengan handuk bersih setelah mandi.',
      'Gunakan pakaian dalam dan pakaian yang longgar menyerap keringat (katun).',
      'Ganti pakaian dan kaus kaki setiap hari; jangan gunakan pakaian yang masih lembap.',
      'Hindari berbagi handuk, pakaian, atau sandal dengan orang lain.',
      'Jemur sepatu di bawah sinar matahari secara berkala.'
    ],
    contraindicatedForSelfMed: [
      'JANGAN PERNAH MENGGUNAKAN SALEP STEROID (seperti Deksametason atau Betametason) untuk kadas/kurap! Steroid akan menyuburkan jamur sehingga kurap menjadi tidak berbatas tegas dan tambah ganas (Tinea Incognito).'
    ],
    specialPopulations: {
      pregnancyWarning: 'Krim Mikonazol dan Klotrimazol topikal aman digunakan pada ibu hamil.',
      pediatricWarning: 'Aman untuk anak-anak dengan olesan tipis.',
      geriatricWarning: 'Aman digunakan.'
    },
    whenToSeeDoctor: [
      'Infeksi jamur tidak membaik setelah 2 minggu pemakaian rutin salep antijamur.',
      'Timbul luka bernanah atau nyeri membengkak di sekitar lesi.'
    ]
  },
  {
    id: 'swam-luka-bakar-lecet',
    title: 'Luka Bakar Ringan & Luka Lecet Teriris',
    category: 'skin-allergy',
    categoryLabel: 'Kulit & Alergi',
    iconName: 'Bandage',
    quickSummary: 'Luka bakar derajat 1 (kulit merah perih tanpa melepuh besar akibat cipratan minyak panas atau knalpot) dan luka lecet teriris pisau dapur.',
    laymanKeywords: ['luka bakar', 'luka lecet', 'kena knalpot', 'kena minyak panas', 'teriris pisau', 'luka gores'],
    typicalSymptoms: [
      'Luka bakar derajat 1: Kulit memerah, perih, dan sedikit bengkak tanpa ada luka robek',
      'Luka lecet: Lapisan kulit ari terkelupas dengan bintik darah sedikit'
    ],
    redFlags: [
      'Luka bakar derajat 2-3: Kulit melepuh luas berisi cairan atau kulit tampak putih pucat gosong hangus',
      'Luka bakar mengenai area wajah, sendi utama, selangkangan, atau melingkar di tangan/kaki',
      'Luka tusukan paku berkarat (risiko infeksi Tetanus - SEGERA SUNTIK ATS / TT)',
      'Luka kotor berdarah hebat yang tidak berhenti setelah ditekan 10 menit'
    ],
    maxSelfMedDays: 5,
    recommendedDrugs: [
      {
        genericName: 'Gel Ekstrak Plasenta + Neomisin Sulfat',
        brandExamples: ['Bioplacenton Gel'],
        bpomClass: 'Obat Bebas Terbatas (Biru)',
        dosageGuideline: 'Oleskan tipis merata pada area luka 4–6 kali sehari.',
        dosageDetails: {
          adult: 'Oleskan tipis merata pada area luka bakar derajat 1 atau luka lecet yang sudah dicuci bersih 4–6 kali sehari.',
          pediatric: 'Anak > 2 tahun: oleskan tipis 3–4 kali sehari pada luka lecet bersih yang sudah dialiri air.',
          infant: 'Bayi < 1 tahun: Gunakan HANYA atas petunjuk dokter. Hindari pemakaian luas karena kulit bayi tipis berisiko absorpsi neomisin (ototoksisitas).',
          pregnancy: 'Kategori C (Gunakan terbatas pada area kecil). Hindari pemakaian pada luka luas untuk mencegah absorpsi sistemik neomisin.',
          geriatric: 'Oleskan tipis 3–4 kali sehari. Pantau proses penyembuhan luka secara berkala terutama pada lansia penderita diabetes.'
        },
        timing: 'Setelah luka dicuci bersih dengan air mengalir.',
        cautionNotes: 'Gel berbasis air yang sejuk, mempercepat granulasi penyembuhan jaringan luka dan mencegah infeksi bakteri.',
        targetDrugId: 'drug-topical-wound'
      },
      {
        genericName: 'Povidone Iodine 10% Antiseptik Luka',
        brandExamples: ['Betadine Larutan Antiseptik', 'Antisep'],
        bpomClass: 'Obat Bebas Terbatas (Biru)',
        dosageGuideline: 'Teteskan pada kasa steril lalu usapkan lembut pada luka lecet bersih.',
        dosageDetails: {
          adult: 'Teteskan pada kasa steril lalu usapkan lembut pada luka lecet bersih 1–2 kali sehari. Dapat ditutup perban steril bila perlu.',
          pediatric: 'Anak > 2 tahun: usapkan lembut pada luka lecet kecil 1–2 kali sehari sesudah dicuci air mengalir.',
          infant: 'Bayi < 1 tahun: Hindari penggunaan pada luka luas atau berulang (risiko absorpsi transkutan iodin yang memicu hipotiroidisme neonatus). Utamakan saline steril.',
          pregnancy: 'Kategori C (Hindari penggunaan rutin/luas). Iodin dapat menembus kulit dan plasenta yang berpotensi memengaruhi fungsi kelenjar tiroid janin.',
          geriatric: 'Usapkan pada luka lecet kecil 1 kali sehari. Hindari plester perekat terlalu kencang pada kulit lansia yang rapuh.'
        },
        timing: 'Saat membersihkan luka.',
        cautionNotes: 'Membunuh bakteri pada luka lecet terbuka.',
        targetDrugId: 'drug-fornas-povidone-iodine'
      }
    ],
    nonPharmacolTherapy: [
      'PERTOLONGAN PERTAMA LUKA BAKAR: SEGERA SIRAM / ALIRKAN AIR BERSIH SUHU RUANG SELAMA 15–20 MENIT! Hal ini menghentikan proses kerusakan panas ke jaringan dalam.',
      'JANGAN mengoleskan pasta gigi (odol), mentega, kecap, atau tepung pada luka bakar karena memicu infeksi berat dan menjebak panas!',
      'Jangan memecahkan gelembung luka bakar (bula) karena lapisan kulit melepuh adalah perban alami pelindung dari kuman.',
      'Tutup luka dengan kasa steril kering bila perlu.'
    ],
    contraindicatedForSelfMed: [
      'DILARANG menaburkan serbuk kopi atau odol ke luka terbuka.'
    ],
    specialPopulations: {
      pregnancyWarning: 'Bioplacenton gel dan Povidone Iodine aman untuk luka ringan.',
      pediatricWarning: 'Hati-hati pencegahan anak menyentuh luka bakar.',
      geriatricWarning: 'Penyembuhan luka pada lansia dan penderita diabetes lebih lambat; pantau ketat tanda infeksi.'
    },
    whenToSeeDoctor: [
      'Luka bakar tampak melepuh besar berdiameter > 5 cm.',
      'Luka bernanah, berbau, atau terasa berdenyut sangat sakit.'
    ]
  },

  // ============================================================================
  // 5. MATA & TELINGA (EYE & EAR)
  // ============================================================================
  {
    id: 'swam-mata-merah-iritasi',
    title: 'Mata Merah Iritasi Ringan & Kering (Mata Lelah Gadget)',
    category: 'eye-ear',
    categoryLabel: 'Mata & Telinga',
    iconName: 'Eye',
    quickSummary: 'Mata merah, perih, berpasir, atau gatal akibat paparan debu, asap kendaraan, angin, klorin kolam renang, atau menatap layar gadget terlalu lama.',
    laymanKeywords: ['mata merah', 'mata perih', 'mata kelilipan', 'mata kering', 'mata lelah', 'iritasi mata'],
    typicalSymptoms: [
      'Mata tampak kemerahan pada bagian putihnya (sklera)',
      'Terasa mengganjal seperti ada pasir atau kelilipan',
      'Mata berair namun tidak mengeluarkan belek nanah hijau',
      'Pandangan tidak kabur'
    ],
    redFlags: [
      'Penurunan tajam ketajaman penglihatan (pandangan mendadak buram/kabur)',
      'Nyeri bola mata yang sangat hebat menusuk hingga ke kepala',
      'Keluar kotoran belek kental berwarna kuning kehijauan yang membuat kelopak mata menempel saat bangun tidur (Konjungtivitis Bakterial)',
      'Mata sangat sensitif terhadap cahaya hingga tidak bisa membuka mata (Fotofobia hebat - curiga Ulkus Kornea)',
      'Mata terkena cipratan bahan kimia asam/basa (DARURAT SEGERA BILAS AIR 15 MENIT LALU KE RS)'
    ],
    maxSelfMedDays: 3,
    recommendedDrugs: [
      {
        genericName: 'Tetes Mata Tetrahidrozolin HCl 0.05%',
        brandExamples: ['Insto Regular', 'Visine', 'Rohto Tetes Mata'],
        bpomClass: 'Obat Bebas Terbatas (Biru)',
        dosageGuideline: 'Teteskan 1–2 tetes pada mata yang merah 2–3 kali sehari.',
        dosageDetails: {
          adult: 'Teteskan 1–2 tetes pada mata yang merah 2–3 kali sehari. MAKSIMAL 3 HARI BERTURUT-TURUT.',
          pediatric: 'Anak > 6 tahun: 1 tetes 2 kali sehari (maksimal 2–3 hari). Anak < 6 tahun: KONTRAINDIKASI untuk swamedikasi mandiri.',
          infant: 'KONTRAINDIKASI MUTLAK pada bayi < 2 tahun (risiko fatal depresi SSP, bradikardia berat, hipotermia, dan koma akibat absorpsi sistemik).',
          pregnancy: 'Kategori C. Hindari penggunaan rutin pada kehamilan; prioritaskan tetes mata air mata buatan (artificial tears).',
          geriatric: 'Gunakan sangat hati-hati (maksimal 2 hari). KONTRAINDIKASI bila ada riwayat glaukoma sudut tertutup atau penyakit kardiovaskular.'
        },
        timing: 'Saat mata merah iritasi.',
        cautionNotes: 'Dekongestan mata yang menyempitkan pembuluh darah konjungtiva sehingga mata cepat putih kembali. PERINGATAN: Jangan gunakan lebih dari 3 hari berturut-turut.',
        targetDrugId: 'drug-eye-drops'
      },
      {
        genericName: 'Tetes Mata Air Mata Buatan (Artificial Tears: Carboxymethylcellulose / HPMC)',
        brandExamples: ['Cendo Cenfresh', 'Insto Dry Eyes', 'Rohto Dryfresh', 'Tears Naturale'],
        bpomClass: 'Obat Bebas (Hijau)',
        dosageGuideline: 'Teteskan 1–2 tetes pada masing-masing mata 3–4 kali sehari atau kapan saja saat mata terasa kering mengganjal.',
        dosageDetails: {
          adult: 'Teteskan 1–2 tetes pada masing-masing mata 3–4 kali sehari atau kapan saja saat mata terasa kering mengganjal.',
          pediatric: 'Anak 1–12 tahun: 1 tetes pada masing-masing mata 2–3 kali sehari saat mata perih mengganjal.',
          infant: 'Bayi < 1 tahun: 1 tetes sediaan minidose BEBAS PENGAWET (Preservative-Free) bila mata kering/terpapar debu, lalu usap lembut dengan kassa steril.',
          pregnancy: 'Kategori A (100% Aman). Pilihan lini pertama paling aman untuk keluhan mata kering selama kehamilan & laktasi.',
          geriatric: 'Teteskan 1–2 tetes 3–4 kali sehari. Sangat dianjurkan untuk sindrom mata kering (keratokonjungtivitis sika) yang sering dialami lansia.'
        },
        timing: 'Kapan saja.',
        cautionNotes: '100% aman melumasi bola mata tanpa bahan kimia vasokonstriktor; sangat dianjurkan untuk pekerja komputer.',
        targetDrugId: 'drug-artificial-tears'
      }
    ],
    nonPharmacolTherapy: [
      'Lepaskan lensa kontak (softlens) saat mata sedang merah atau iritasi.',
      'Kompres dingin dengan kapas basah pada kelopak mata terpejam selama 5-10 menit untuk meredakan rasa panas.',
      'Terapkan aturan 20-20-20: Setiap 20 menit menatap layar, alihkan pandangan ke objek sejauh 20 kaki (6 meter) selama 20 detik.',
      'Hindari mengucek mata dengan tangan.'
    ],
    contraindicatedForSelfMed: [
      'JANGAN menggunakan tetes mata yang mengandung Antibiotik atau Kortikosteroid (seperti Cendo Xitrol) tanpa resep dokter spesialis mata karena dapat memicu Kebutaan Glaukoma dan Katarak!'
    ],
    specialPopulations: {
      pregnancyWarning: 'Tetes mata air mata buatan (Artificial tears) sangat aman untuk ibu hamil.',
      pediatricWarning: 'Gunakan sediaan air mata buatan dosis anak; hindari tetes mata vasokonstriktor.',
      geriatricWarning: 'Waspadai gejala glaukoma sudut tertutup pada lansia; jangan gunakan tetes mata tetrahidrozolin bila ada riwayat glaukoma.'
    },
    whenToSeeDoctor: [
      'Mata merah tidak membaik setelah 3 hari pemakaian tetes mata.',
      'Penglihatan menjadi buram atau timbul rasa nyeri hebat di bola mata.'
    ]
  },

  // ============================================================================
  // 6. MULUT & BIBIR (ORAL & MOUTH)
  // ============================================================================
  {
    id: 'swam-sariawan-mulut',
    title: 'Sariawan & Bibir Pecah-Pecah (Stomatitis Aftosa Ringan)',
    category: 'mouth-oral',
    categoryLabel: 'Mulut & Bibir',
    iconName: 'Smile',
    quickSummary: 'Luka ulkus kecil dangkal berwarna putih kekuningan dengan pinggiran merah meradang di bibir dalam, pipi dalam, atau lidah yang perih saat makan makanan asin/pedas.',
    laymanKeywords: ['sariawan', 'bibir pecah pecah', 'panas dalam', 'sariawan lidah', 'sakit sariawan'],
    typicalSymptoms: [
      'Luka cekung bulat kecil diameter < 1 cm di dinding mukosa mulut',
      'Rasa perih menyengat saat makan makanan asin, pedas, atau asam',
      'Bibir kering mengelupas dan pecah-pecah'
    ],
    redFlags: [
      'Sariawan berukuran besar > 1 cm yang tidak sembuh-sembuh lebih dari 2 minggu (curiga Keganasan / Kanker Mulut)',
      'Sariawan berjumlah sangat banyak menyebar hingga ke langit-langit mulut dan tenggorokan',
      'Disertai demam tinggi dan pembengkakan kelenjar getah bening leher',
      'Sariawan disertai luka serupa di area kelamin (Sindrom Behcet)'
    ],
    maxSelfMedDays: 7,
    recommendedDrugs: [
      {
        genericName: 'Triamsinolon Asetonida Salep Mulut 0.1% (Oral Paste)',
        brandExamples: ['Kenalog in Orabase', 'Triamcinolone Acetonide Pasta Oral'],
        bpomClass: 'Obat Wajib Apotek (OWA)',
        dosageGuideline: 'Oleskan sedikit tipis pasta pada luka sariawan sebelum tidur malam (dan 2-3 kali sehari sesudah makan). JANGAN DIGOSOK, cukup ditepuk lembut hingga membentuk lapisan pelindung.',
        dosageDetails: {
          adult: 'Oleskan sedikit tipis pasta pada luka sariawan sebelum tidur malam (dan 2–3 kali sehari sesudah makan). Tepuk lembut, JANGAN DIGOSOK.',
          pediatric: 'Anak > 6 tahun: oleskan tipis 1–2 kali sehari sesudah makan. Anak < 6 tahun: hindari penggunaan kortikosteroid oral mandiri.',
          infant: 'KONTRAINDIKASI MUTLAK pada bayi < 2 tahun (risiko tertelan kortikosteroid, supresi adrenal, dan eksaserbasi oral thrush jamur).',
          pregnancy: 'Kategori C (Gunakan terbatas). Hindari pemakaian rutin; utamakan gel pelindung luka non-steroid seperti Aloclair.',
          geriatric: 'Oleskan tipis sebelum tidur. Waspadai risiko kandidiasis oral bila digunakan berkepanjangan.'
        },
        timing: 'Sesudah makan dan sebelum tidur malam.',
        cautionNotes: 'Pasta perekat khusus mukosa mulut yang meredakan radang. Sesuai DOWA No. 2, penyerahan oleh Apoteker maksimal 1 tube tanpa resep.',
        targetDrugId: 'drug-topical-oral'
      },
      {
        genericName: 'Gel Asam Hialuronat / Ekstrak Lidah Buaya',
        brandExamples: ['Aloclair Plus Gel / Spray', 'Enkasari'],
        bpomClass: 'Obat Bebas (Hijau)',
        dosageGuideline: 'Oleskan 1–2 tetes gel langsung pada luka sariawan 3–4 kali sehari.',
        dosageDetails: {
          adult: 'Oleskan 1–2 tetes gel langsung pada luka sariawan 3–4 kali sehari (hindari makan/minum 15 menit pasca aplikasi).',
          pediatric: 'Anak 1–12 tahun: oleskan 1–2 tetes pada sariawan 2–3 kali sehari. Sangat aman dan tidak menimbulkan rasa perih.',
          infant: 'Bayi > 6 bulan: aman dioleskan tipis 1–2 tetes dengan cotton bud bersih sebelum menyusu/makan (bebas alkohol, aman bila tertelan sedikit).',
          pregnancy: 'Kategori A (100% Aman). Pilihan pelindung sariawan paling aman selama masa kehamilan & menyusui.',
          geriatric: 'Oleskan 3–4 kali sehari untuk meredakan nyeri luka gesekan gigi tiruan/kawat gigi.'
        },
        timing: 'Kapan saja saat terasa perih.',
        cautionNotes: 'Membentuk lapisan pelindung transparan di atas saraf sariawan sehingga rasa perih langsung hilang.',
        targetDrugId: 'drug-topical-oral'
      },
      {
        genericName: 'Petroleum Jelly Murni / Lip Balm Pelembap Bibir',
        brandExamples: ['Vaseline Petroleum Jelly', 'Sebamed Lip Defense'],
        bpomClass: 'Obat Bebas (Hijau)',
        dosageGuideline: 'Oleskan merata pada bibir yang kering pecah-pecah sesering mungkin.',
        dosageDetails: {
          adult: 'Oleskan merata pada bibir yang kering pecah-pecah sesering mungkin atau sebelum tidur.',
          pediatric: 'Oleskan tipis pada bibir anak saat cuaca kering atau bibir mengelupas.',
          infant: 'Bayi < 1 tahun: Aman dioleskan sangat tipis pada bibir kering atau kulit pipi lecet akibat air liur (drool rash).',
          pregnancy: 'Kategori A (Aman). Pelembap oklusif paling aman untuk bibir pecah-pecah selama hamil.',
          geriatric: 'Oleskan merata pada bibir lansia yang kering.'
        },
        timing: 'Kapan saja bibir terasa kering.',
        cautionNotes: 'Mengunci kelembapan alami bibir dan mempercepat penyembuhan kulit bibir yang terkelupas.',
        targetDrugId: 'drug-topical-skin'
      }
    ],
    nonPharmacolTherapy: [
      'Kumur air garam hangat 2-3 kali sehari untuk menjaga kebersihan rongga mulut.',
      'Gunakan sikat gigi berbulu ekstra lembut (soft/ultra-soft) agar tidak melukai dinding mulut.',
      'Hindari makanan pedas, asam, asin menyengat, dan keripik tajam yang memperparah sariawan.',
      'Perbanyak konsumsi makanan tinggi Vitamin C, Vitamin B12, Asam Folat, dan Zat Besi.',
      'Cukupi minum air putih 2 liter sehari.'
    ],
    contraindicatedForSelfMed: [
      'JANGAN MENETESKAN ALBOTHYL (Policresulen konsentrat) pada sariawan! BPOM RI telah membekukan izinnya karena bahan kaustik tersebut membakar jaringan sehat dan memperdalam luka sariawan.'
    ],
    specialPopulations: {
      pregnancyWarning: 'Aloclair gel dan kumur air garam sangat aman untuk ibu hamil.',
      pediatricWarning: 'Aloclair gel aman untuk anak-anak karena tidak perih dan aman bila tertelan sedikit.',
      geriatricWarning: 'Periksa apakah ada kawat gigi atau gigi palsu yang tajam menggesek mukosa.'
    },
    whenToSeeDoctor: [
      'Sariawan tidak kunjung sembuh dalam waktu 2 minggu.',
      'Sariawan sangat sakit hingga tidak bisa makan dan minum sama sekali.'
    ]
  },

  // ============================================================================
  // 7. PENCERNAAN & KESEHATAN ANAK (PEDIATRIC HEALTH)
  // ============================================================================
  {
    id: 'swam-diare-anak-zinc',
    title: 'Diare Balita & Anak (Protokol Nasional Kemenkes RI)',
    category: 'pediatric',
    categoryLabel: 'Kesehatan Anak & Pediatrik',
    iconName: 'Baby',
    quickSummary: 'Tata laksana resmi wajib diare anak sesuai standar Kemenkes RI dan WHO menggunakan kombinasi ORALIT dan ZINC SELAMA 10 HARI PENUH untuk mencegah kematian akibat dehidrasi.',
    laymanKeywords: ['diare anak', 'mencret anak', 'diare balita', 'zinc diare', 'oralit anak'],
    typicalSymptoms: [
      'Anak BAB cair lebih sering dari biasanya (> 3 kali sehari)',
      'Anak tampak rewel dan kehausan',
      'Nafsu makan berkurang'
    ],
    redFlags: [
      'TANDA DEHIDRASI BERAT: Anak lemas lunglai terkulai tidak sadar, mata sangat cekung, tidak keluar air mata saat menangis, cubitan kulit perut kembali sangat lambat (> 2 detik) - SEGERA KE UGD/RS!',
      'Anak tidak mau minum sama sekali atau muntah setiap kali minum',
      'Tinja bercampur DARAH segar',
      'Disertai kejang atau demam sangat tinggi > 39°C'
    ],
    maxSelfMedDays: 2,
    recommendedDrugs: [
      {
        genericName: 'Zinc Sulfat 20 mg Tablet Dispersible (Zink Elemental)',
        brandExamples: ['Zinkid 20 mg', 'Zincpro Dispersible', 'L-Zinc Sirup', 'Zinc Sulfat Kemenkes Generik'],
        bpomClass: 'Obat Bebas Terbatas (Biru)',
        dosageGuideline: 'Bayi < 6 bln: 10 mg/hari; Anak >= 6 bln – 5 th: 20 mg/hari. Wajib 10 HARI PENUH.',
        dosageDetails: {
          adult: '20 mg (1 tablet dispersible) sekali sehari selama 10 hari bila mengalami diare akut.',
          pediatric: 'Balita 1–5 tahun: 20 mg (1 tablet dispersible utuh) dilarutkan dalam 1 sendok makan air matang/ASI/oralit, 1 kali sehari selama 10 HARI PENUH.',
          infant: 'Bayi < 6 bulan: 10 mg (1/2 tablet) dilarutkan dalam 1 sendok ASI/air matang 1x/hari. Bayi 6–12 bulan: 20 mg (1 tablet) 1x/hari. WAJIB 10 HARI PENUH walau diare sudah reda.',
          pregnancy: 'Kategori A/C. Suplementasi zink 10–20 mg aman dan memenuhi Angka Kecukupan Gizi (AKG) ibu hamil.',
          geriatric: '20 mg sekali sehari selama 10 hari untuk regenerasi mukosa saluran cerna.'
        },
        timing: 'Larutkan tablet dalam 1 sendok makan air matang, ASI, atau larutan oralit. WAJIB DIMINUMKAN SELAMA 10 HARI PENUH MESKIPUN DIARE SUDAH BERHENTI.',
        cautionNotes: 'Merupakan pilar wajib Kemenkes & WHO: Zink memperbaiki epitel vili usus yang rusak dan mencegah kekambuhan diare selama 2-3 bulan ke depan.',
        targetDrugId: 'drug-zinc-sulfate'
      },
      {
        genericName: 'Oralit Osmolaritas Rendah (Low Osmolarity ORS)',
        brandExamples: ['Oralit Kemenkes', 'Pharolit Rasa Jeruk', 'Pedialyte'],
        bpomClass: 'Obat Bebas (Hijau)',
        dosageGuideline: 'Anak < 1 th: 50–100 mL tiap BAB; Anak 1–5 th: 100–200 mL tiap BAB.',
        dosageDetails: {
          adult: '1–2 gelas (200–400 mL) tiap kali buang air besar cair.',
          pediatric: 'Anak 1–5 tahun: 100–200 mL tiap BAB cair. Berikan sedikit demi sedikit sesendok demi sesendok.',
          infant: 'Bayi < 1 tahun: 50–100 mL larutan oralit tiap kali selesai BAB cair. Berikan sesendok teh atau pipet tiap 1–2 menit perlahan agar bayi tidak muntah.',
          pregnancy: 'Kategori A. Sangat aman dan krusial menjaga keseimbangan cairan & elektrolit ibu dan janin.',
          geriatric: '1 gelas (200 mL) tiap BAB cair. Hindari dehidrasi akut yang dapat mencetuskan syok hipovolemik.'
        },
        timing: 'Berikan sedikit-sedikit tapi sering dengan sendok atau cangkir.',
        cautionNotes: 'Mencegah dan mengatasi dehidrasi. Jika anak muntah, tunggu 10 menit lalu berikan kembali perlahan.',
        targetDrugId: 'drug-oral-rehydration-salts'
      }
    ],
    nonPharmacolTherapy: [
      'TERUSKAN PEMBERIAN ASI DAN MAKANAN: Jangan pernah memuasakan anak yang sedang diare! ASI memberikan antibodi perlindungan alami.',
      'Berikan cairan rumah tangga tambahan: kuah sup kaldu bening, air tajin, atau air matang.',
      'Jaga kebersihan botol susu, rebus dot dengan air mendidih, dan cuci tangan sebelum menyiapkan makanan anak.',
      'Ganti popok sesering mungkin dan oleskan petroleum jelly atau baby cream untuk mencegah lecet bokong.'
    ],
    contraindicatedForSelfMed: [
      'DILARANG KERAS MEMBERIKAN OBAT MAMPET DIARE (seperti Loperamid / Imodium) pada bayi dan balita karena dapat memicu kelumpuhan usus fatal (Ileus Paralitik)!',
      'JANGAN memberikan antibiotik sendiri tanpa pemeriksaan feses oleh dokter.'
    ],
    specialPopulations: {
      pregnancyWarning: 'Protokol khusus untuk anak balita.',
      pediatricWarning: 'Patuhi dosis zink 10 hari berturut-turut sampai tuntas.',
      geriatricWarning: 'Tidak relevan.'
    },
    whenToSeeDoctor: [
      'Anak tampak sangat lemas, mengantuk terus, dan tidak mau minum.',
      'Mata anak menjadi sangat cekung dan tidak kencing lebih dari 6 jam.',
      'Diare tidak membaik dalam waktu 2 hari.'
    ],
    gemaCermatTips: [
      'Ingat 5 Langkah Tuntaskan Diare Kemenkes RI (LINTAS DIARE): 1. Oralit, 2. Zinc 10 hari, 3. Teruskan ASI/Makan, 4. Antibiotik HANYA atas indikasi dokter, 5. Nasihat ibu/pengasuh.'
    ]
  },
  {
    id: 'swam-ruam-popok-bayi',
    title: 'Ruam Popok pada Bayi (Diaper Rash)',
    category: 'pediatric',
    categoryLabel: 'Kesehatan Anak & Pediatrik',
    iconName: 'Baby',
    quickSummary: 'Kulit bokong, lipat paha, dan area popok bayi tampak kemerahan, lecet, dan perih akibat kelembapan urin/feses dan gesekan popok.',
    laymanKeywords: ['ruam popok', 'pantat bayi merah', 'diaper rash', 'kulit selangkangan lecet bayi'],
    typicalSymptoms: [
      'Kulit area tertutup popok berwarna merah meradang',
      'Bayi menangis atau rewel saat area popok dibersihkan atau diganti',
      'Kulit terasa hangat saat disentuh'
    ],
    redFlags: [
      'Bercak merah meluas disertai bintik-bintik nanah kecil (Pustula)',
      'Ruam sangat merah terang di lipatan kulit dengan bintik satelit (Infeksi Jamur Candida)',
      'Bayi mengalami demam',
      'Ruam melepuh atau kulit terkelupas parah berdarah'
    ],
    maxSelfMedDays: 3,
    recommendedDrugs: [
      {
        genericName: 'Salep Zinc Oxide + Dexpanthenol',
        brandExamples: ['Zwitsal Baby Rash Cream', 'Bepanthen Salep Ruam Popok', 'SudoCream', 'Cussons Baby Diaper Rash'],
        bpomClass: 'Obat Bebas (Hijau)',
        dosageGuideline: 'Oleskan tipis merata pada seluruh area kulit bokong dan lipat paha yang bersih dan kering SETIAP KALI MENGGANTI POPOK.',
        dosageDetails: {
          adult: 'Oleskan tipis pada lipatan kulit yang mengalami lecet gesekan, maserasi lembap, atau dermatitis kontak.',
          pediatric: 'Balita: oleskan tipis merata pada area bokong dan lipatan paha tiap kali mengganti popok celana.',
          infant: 'Bayi newborn & < 1 tahun: Oleskan tipis merata pada bokong, selangkangan, dan lipatan genital yang bersih dan kering SETIAP KALI MENGGANTI POPOK (terutama sebelum tidur malam).',
          pregnancy: 'Kategori A (100% Aman). Pelindung barrier kulit alami yang sangat aman.',
          geriatric: 'Oleskan merata pada lansia pemakai popok dewasa atau tirah baring untuk mencegah dermatitis inkontinensia & lecet dekubitus.'
        },
        timing: 'Setelah bokong dibersihkan dan dikeringkan.',
        cautionNotes: 'Membentuk lapisan perisai pelindung tahan air (waterproof barrier) dari kontak langsung dengan asam urin dan feses.',
        targetDrugId: 'drug-zinc-oxide'
      }
    ],
    nonPharmacolTherapy: [
      'GANTI POPOK LEBIH SERING (setiap 2-3 jam atau segera setelah bayi BAB).',
      'Bersihkan bokong bayi dengan AIR HANGAT BERSIH dan kapas bulat. Hindari penggunaan tisu basah yang mengandung alkohol atau pewangi yang menyengat.',
      'Keringkan kulit dengan cara DITEPUK-TEPUK LEMBUT menggunakan handuk katun halus, JANGAN DIGOSOK.',
      'Biarkan bokong bayi diangin-anginkan bebas tanpa popok selama 15-30 menit beberapa kali sehari (Diaper-Free Time).',
      'Pilih ukuran popok yang pas, jangan terlalu ketat.'
    ],
    contraindicatedForSelfMed: [
      'JANGAN menaburkan bedak tabur (talcum powder) pada area selangkangan bayi yang lecet karena partikel bedak dapat terhirup ke paru-paru bayi dan memperparah iritasi bila terkena urin.'
    ],
    specialPopulations: {
      pregnancyWarning: 'Khusus untuk bayi dan anak.',
      pediatricWarning: 'Sangat aman digunakan sejak bayi baru lahir (newborn).',
      geriatricWarning: 'Dapat juga digunakan untuk lansia tirah baring yang memakai popok dewasa.'
    },
    whenToSeeDoctor: [
      'Ruam popok tidak membaik setelah 3 hari perawatan mandiri.',
      'Ruam tampak melepuh, bernanah, atau bayi mengalami demam.'
    ]
  },

  // ============================================================================
  // 8. KEBUGARAN & PERJALANAN (MOTION & TRAVEL)
  // ============================================================================
  {
    id: 'swam-mabuk-perjalanan',
    title: 'Mabuk Perjalanan (Motion Sickness: Mobil, Kapal, Pesawat)',
    category: 'motion-fatigue',
    categoryLabel: 'Kebugaran & Perjalanan',
    iconName: 'Compass',
    quickSummary: 'Rasa pusing berputar, mual, keringat dingin, dan muntah saat bepergian akibat ketidaksesuaian sinyal gerak antara mata dan cairan telinga bagian dalam.',
    laymanKeywords: ['mabuk perjalanan', 'mabuk mobil', 'mabuk laut', 'mual perjalanan', 'antimo', 'mual di jalan'],
    typicalSymptoms: [
      'Pusing melayang dan rasa tidak nyaman di perut',
      'Mual dan muntah saat kendaraan melaju atau bergoyang',
      'Keringat dingin dan wajah tampak pucat',
      'Sering menguap dan mengantuk'
    ],
    redFlags: [
      'Muntah terus-menerus hingga lemas parah dan dehidrasi',
      'Pusing berputar hebat (Vertigo) yang menetap berhari-hari setelah perjalanan selesai',
      'Disertai telinga berdenging hebat atau gangguan pendengaran mendadak'
    ],
    maxSelfMedDays: 2,
    recommendedDrugs: [
      {
        genericName: 'Dimenhidrinat 50 mg',
        brandExamples: ['Antimo Tablet', 'Dimenhydrinate OGB'],
        bpomClass: 'Obat Bebas Terbatas (Biru)',
        dosageGuideline: '• Dewasa & Anak > 12 tahun: 1 tablet (50 mg) diminum 30 MENIT SEBELUM BERANGKAT PERJALANAN. Jika perjalanan panjang, dapat diulang tiap 4–6 jam (maksimal 400 mg/hari).\n• Anak 8–12 tahun: 1/2 tablet (25 mg).',
        dosageDetails: {
          adult: '1 tablet (50 mg) diminum 30–60 menit sebelum keberangkatan perjalanan. Dapat diulang tiap 4–6 jam bila perjalanan panjang (maks 400 mg/hari).',
          pediatric: 'Anak 8–12 tahun: 1/2 tablet (25 mg) 30 menit sebelum berangkat. Anak 2–6 tahun: gunakan sirup anak (1 sachet Antimo Anak 5 mL = 12.5 mg).',
          infant: 'KONTRAINDIKASI MUTLAK pada bayi < 2 tahun (risiko eksitasi SSP paradoksal, kejang, dan depresi pernapasan berat).',
          pregnancy: 'Kategori B (Relatif Aman). Dapat digunakan bila darurat atas izin dokter; prioritaskan jahe & aromaterapi.',
          geriatric: 'Dosis awal 25 mg (1/2 tab). HINDARI PADA LANSIA BILA MEMUNGKINKAN (Beers Criteria: efek antikolinergik memicu delirium & retensi urin).'
        },
        timing: 'WAJIB DIMINUM 30–60 MENIT SEBELUM MEMULAI PERJALANAN (bukan setelah muntah di jalan).',
        cautionNotes: 'SANGAT MENYEBABKAN KANTUK. DILARANG MENGEMUDIKAN KENDARAAN.',
        targetDrugId: 'drug-dimenhydrinate'
      },
      {
        genericName: 'Permen Jahe / Minyak Aromaterapi Kayu Putih',
        brandExamples: ['Permen Jahe Ting-Ting', 'FreshCare Minyak Angin', 'Aromaterapi Roll-on'],
        bpomClass: 'Obat Bebas (Hijau)',
        dosageGuideline: 'Hisap permen jahe atau hirup aroma minyak angin pada hidung saat mulai terasa mual.',
        dosageDetails: {
          adult: 'Hisap 1–2 butir permen jahe atau oleskan minyak angin aromaterapi pada pelipis dan leher saat mulai terasa mual.',
          pediatric: 'Anak > 2 tahun: hisap permen jahe atau oleskan minyak angin anak lembut pada leher/dada.',
          infant: 'KONTRAINDIKASI minyak kayu putih/menthol pekat di dekat hidung/wajah bayi < 1 tahun (risiko spasme laring mendadak). Gunakan minyak telon bayi pada perut.',
          pregnancy: 'Kategori A (Alami & Paling Aman). Pilihan lini pertama terbaik untuk meredakan mual mabuk perjalanan pada ibu hamil.',
          geriatric: 'Gunakan permen jahe atau minyak angin aromaterapi sesuai kenyamanan.'
        },
        timing: 'Selama perjalanan.',
        cautionNotes: 'Jahe terbukti secara klinis menenangkan motilitas lambung dan mengurangi rasa mual.',
        targetDrugId: 'drug-herbal'
      }
    ],
    nonPharmacolTherapy: [
      'PILIH POSISI DUDUK DENGAN GUNCANGAN PALING MINIMAL: Duduk di kursi depan pada mobil/bus, di area sayap pada pesawat, atau di dek tengah pada kapal laut.',
      'Arahkan pandangan ke luar jendela melihat garis cakrawala yang stabil di kejauhan. JANGAN MEMBACA BUKU ATAU BERMAIN SMARTPHONE saat kendaraan melaju.',
      'Pastikan ventilasi udara mengalir segar (buka sedikit jendela atau arahkan AC ke wajah).',
      'Makan makanan ringan sebelum berangkat, jangan bepergian dengan perut yang benar-benar kosong atau terlalu kenyang makanan berlemak.'
    ],
    contraindicatedForSelfMed: [
      'Hindari konsumsi alkohol atau makanan porsi sangat besar sebelum melakukan perjalanan.'
    ],
    specialPopulations: {
      pregnancyWarning: 'Minyak aromaterapi dan permen jahe sangat aman untuk ibu hamil. Dimenhidrinat tergolong Kategori B (cukup aman) bila sangat dibutuhkan.',
      pediatricWarning: 'Gunakan Antimo Anak sediaan sachet cair rasa stroberi (dosis 1 sachet untuk anak usia 2-6 tahun).',
      geriatricWarning: 'Waspadai efek mengantuk dan retensi urin pada lansia.'
    },
    whenToSeeDoctor: [
      'Muntah tidak berhenti berjam-jam setelah perjalanan selesai.',
      'Disertai kelemahan tubuh atau telinga berdenging berat.'
    ]
  },
  // ============================================================================
  // 9. NYERI OTOT, KESELEO & PEGAL LINU (MUSCULOSKELETAL)
  // ============================================================================
  {
    id: 'swam-nyeri-otot-keseleo',
    title: 'Nyeri Otot, Keseleo & Pegal Linu (Myalgia & Sprain)',
    category: 'pain-fever',
    categoryLabel: 'Demam & Nyeri',
    iconName: 'Flame',
    quickSummary: 'Cedera regangan otot (strain) atau ligamen sendi (sprain) ringan akibat aktivitas olahraga, mengangkat beban dengan posisi salah, kelelahan fisik, atau postur tidur yang keliru.',
    laymanKeywords: ['keseleo', 'terkilir', 'pegal linu', 'otot ketarik', 'nyeri otot', 'salah bantal', 'encok', 'nyeri sendi', 'kram otot', 'badan remuk'],
    typicalSymptoms: [
      'Nyeri tekan lokal pada area otot atau persendian yang terkena',
      'Bengkak ringan atau kemerahan lokal di sekitar sendi (misal pergelangan kaki / bahu / pinggang)',
      'Kekakuan gerak dan rasa pegal atau ngilu saat digerakkan',
      'Tidak disertai perubahan bentuk tulang (deformitas) atau bunyi berderak (krepitasi)'
    ],
    redFlags: [
      'Terlihat perubahan bentuk sendi atau tulang yang tidak wajar (deformitas / dislokasi / kecurigaan fraktur)',
      'Ketidakmampuan sama sekali untuk menumpu berat badan atau berjalan lebih dari 4 langkah (Kriteria Ottawa Ankle Rules)',
      'Mati rasa (baal), kesemutan parah, atau ujung jari pucat dan dingin di bawah area cedera',
      'Nyeri hebat yang tidak tertahankan meskipun sudah minum pereda nyeri',
      'Bengkak dan lebam lebam meluas dengan sangat cepat dalam 1-2 jam pertama'
    ],
    maxSelfMedDays: 3,
    recommendedDrugs: [
      {
        genericName: 'Natrium Diklofenak Gel 1% (Diclofenac Sodium Gel)',
        brandExamples: ['Voltaren Emulgel', 'Flamar Gel', 'Diflam Gel', 'Cataflam Gel'],
        bpomClass: 'Obat Wajib Apotek (OWA)',
        dosageGuideline: 'Dewasa & anak > 12 th: Oleskan tipis 2 - 4 gram (seukuran buah ceri/ruas jari) pada area nyeri 3 - 4 kali sehari. Pijat lembut hingga meresap.',
        dosageDetails: {
          adult: 'Oleskan tipis 2–4 gram (seukuran ruas jari) pada area sendi/otot yang nyeri 3–4 kali sehari. Pijat lembut hingga meresap.',
          pediatric: 'Anak > 12 tahun: oleskan tipis 2–3 kali sehari. Anak < 12 tahun: KONTRAINDIKASI untuk swamedikasi mandiri tanpa anjuran dokter.',
          infant: 'KONTRAINDIKASI MUTLAK pada bayi dan balita < 6 tahun.',
          pregnancy: 'Kategori C (Trimester 1 & 2). Trimester 3: KONTRAINDIKASI MUTLAK (risiko penutupan dini duktus arteriosus janin).',
          geriatric: 'Oleskan tipis 2–3 kali sehari. Pilihan analgesik topikal yang jauh lebih aman untuk lambung dibanding NSAID oral.'
        },
        timing: 'Gunakan sesudah mandi atau membersihkan kulit. Cuci tangan sesudah mengoleskan.',
        cautionNotes: 'Hanya untuk kulit utuh! JANGAN dioleskan pada luka terbuka, luka lecet, atau selaput lendir. Sesuai DOWA No. 2, penyerahan oleh Apoteker maksimal 1 tube tanpa resep.',
        targetDrugId: 'drug-diclofenac'
      },
      {
        genericName: 'Krim / Gel Metil Salisilat + Menthol (Counter-Irritant)',
        brandExamples: ['Counterpain', 'Hotin D Cream', 'Neo Rheumacyl', 'Salonpas Gel'],
        bpomClass: 'Obat Bebas (Hijau)',
        dosageGuideline: 'Oleskan secukupnya pada bagian yang pegal 2 - 3 kali sehari.',
        dosageDetails: {
          adult: 'Oleskan secukupnya pada otot yang pegal atau kaku 2–3 kali sehari.',
          pediatric: 'Anak > 6 tahun: oleskan tipis. Anak < 6 tahun: gunakan balsam anak berformulasi lembut khusus.',
          infant: 'KONTRAINDIKASI MUTLAK pada bayi < 2 tahun (risiko fatal spasme laring, apneu mendadak, dan toksisitas salisilat transkutan).',
          pregnancy: 'Kategori C. Hindari pemakaian pada area luas dan jangan gunakan pada area perut/payudara.',
          geriatric: 'Oleskan secukupnya. Hindari bila kulit lansia sangat tipis, pecah-pecah, atau mudah lebam.'
        },
        timing: 'Gunakan saat otot terasa kaku atau pegal.',
        cautionNotes: 'Sensasi hangat/dingin mengalihkan rangsang nyeri otot. Hindari kontak dengan mata, wajah, dan area kulit sensitif.',
        targetDrugId: 'drug-methylsalicylate'
      },
      {
        genericName: 'Ibuprofen 200 mg – 400 mg (Anti-Inflamasi Oral)',
        brandExamples: ['Proris 200 mg', 'Farsifen', 'Ibuprofen Kimia Farma'],
        bpomClass: 'Obat Bebas Terbatas (Biru)',
        dosageGuideline: 'Dewasa: 200 mg – 400 mg tiap 6–8 jam bila nyeri sedang dan memerlukan pereda radang sistemik.',
        dosageDetails: {
          adult: '200 mg – 400 mg tiap 6–8 jam SEGERA SESUDAH MAKAN bila nyeri/bengkak sedang. Maksimal 1200 mg per 24 jam.',
          pediatric: 'Anak > 6 bulan: 5–10 mg/kgBB per kali minum tiap 6–8 jam sesudah makan (Sirup 100 mg/5 mL). Anak < 6 bulan: KONTRAINDIKASI.',
          infant: 'Bayi < 6 bulan: KONTRAINDIKASI MUTLAK. Bayi 6–12 bulan: 5 mg/kgBB (sirup drops) tiap 6–8 jam hanya jika diresepkan dokter.',
          pregnancy: 'Trimester 1 & 2: Kategori C. Trimester 3: KONTRAINDIKASI MUTLAK (risiko oligohidramnion & penutupan duktus arteriosus janin).',
          geriatric: 'Mulai dari dosis terendah 200 mg sesudah makan. Waspada iritasi lambung, retensi cairan, dan penurunan fungsi ginjal.'
        },
        timing: 'WAJIB diminum SEGERA SESUDAH MAKAN.',
        cautionNotes: 'Hindari bila ada riwayat maag kronis, tukak lambung aktif, atau gangguan fungsi ginjal.',
        targetDrugId: 'drug-ibuprofen'
      }
    ],
    nonPharmacolTherapy: [
      'Protokol R.I.C.E. pada 48 jam pertama cedera: (1) Rest: Istirahatkan sendi/otot yang cedera. (2) Ice: Kompres es batu dibungkus handuk selama 15-20 menit tiap 2-3 jam (JANGAN tempelkan es langsung ke kulit). (3) Compression: Balut dengan perban elastis (tensocrepe) secara pas dan tidak terlalu kencang. (4) Elevation: Posisikan sendi yang cedera lebih tinggi dari posisi jantung.',
      'HINDARI H.A.R.M. pada 48 jam pertama cedera akut: Heat (kompres panas), Alcohol, Running (olahraga berat), Massage (pijat urut keras pada bagian yang bengkak baru karena memicu robekan pembuluh darah dan memperparah perdarahan internal).'
    ],
    contraindicatedForSelfMed: [
      'DILARANG memijat/mengurut paksa area yang baru saja bengkak atau dicurigai patah tulang.',
      'JANGAN gunakan koyo panas atau balsam panas pada cedera baru kurang dari 24-48 jam pertama karena memicu vasodilatasi dan memperparah pembengkakan.'
    ],
    specialPopulations: {
      pregnancyWarning: 'Gunakan kompres dingin dan Parasetamol oral. Hindari NSAID topikal berlebihan dan NSAID oral terutama trimester ke-3.',
      pediatricWarning: 'Pada anak, cedera sendi harus diperiksa dokter untuk menyingkirkan cedera lempeng pertumbuhan tulang (growth plate injury).',
      geriatricWarning: 'Periksa risiko jatuh dan osteoporosis jika terjadi cedera sendi panggul atau pergelangan tangan.'
    },
    whenToSeeDoctor: [
      'Bengkak dan nyeri tidak berkurang setelah 3 hari swamedikasi.',
      'Kaki atau tangan tidak bisa digerakkan sama sekali.',
      'Timbul lebam kebiruan yang sangat luas atau mati rasa.'
    ],
    gemaCermatTips: [
      'DA: Dapatkan perban elastis dan gel NSAID di apotek terdekat.',
      'GU: Gunakan kompres es terlebih dahulu pada cedera baru, kompres hangat hanya untuk kekakuan otot kronis.',
      'SI: Simpan gel pereda nyeri tertutup rapat pada suhu kamar terhindar dari panas.',
      'BU: Tutup rapat tube gel agar tidak mengering dan buang jika telah lewat masa simpan.'
    ]
  },
  // ============================================================================
  // 10. WASIR / AMBEIEN RINGAN (HEMORRHOIDS)
  // ============================================================================
  {
    id: 'swam-wasir-hemoroid',
    title: 'Wasir / Ambeien Ringan (Hemoroid Derajat 1–2)',
    category: 'digestive',
    categoryLabel: 'Saluran Cerna & Maag',
    iconName: 'ShieldAlert',
    quickSummary: 'Pelebaran pembuluh darah vena (varises) di sekitar anus dan rektum bagian bawah yang memicu rasa mengganjal, gatal, atau perih, sering dipicu oleh mengejan terlalu keras saat sembelit kronis, kehamilan, atau duduk terlalu lama.',
    laymanKeywords: ['wasir', 'ambeien', 'hemoroid', 'anus perih', 'benjolan anus', 'bab berdarah', 'dubur perih', 'susah bab mengejan'],
    typicalSymptoms: [
      'Rasa mengganjal, perih, atau gatal di sekitar lubang anus (pruritus ani)',
      'Bercak darah merah segar menetes di kloset atau menempel pada tisu toilet sesudah BAB (tanpa bercampur dengan feses)',
      'Benjolan lunak kecil di tepi anus yang dapat masuk kembali sendiri (Derajat 1-2)',
      'Nyeri atau rasa tidak nyaman saat duduk di permukaan keras'
    ],
    redFlags: [
      'Perdarahan rektal merah segar yang sangat banyak atau memancar deras hingga menyebabkan lemas dan pucat',
      'Feses berwarna hitam pekat seperti aspal atau ter (melena - indikasi perdarahan saluran cerna atas)',
      'Benjolan anus membengkak besar, berwarna keunguan gelap, dan nyeri luar biasa (indikasi trombosis hemoroid eksterna akut)',
      'Benjolan keluar dari anus dan TIDAK BISA didorong masuk kembali (Derajat 4 / hemoroid tercekik strangulata)',
      'Disertai demam, menggigil, atau nanah berbau busuk dari sekitar anus (indikasi abses perianal)'
    ],
    maxSelfMedDays: 5,
    recommendedDrugs: [
      {
        genericName: 'Antihemoroid Supositoria / Salep Rektal',
        brandExamples: ['Borraginol-N', 'Borraginol-S', 'Faktu Salep/Supp', 'Anusol'],
        bpomClass: 'Obat Bebas Terbatas (Biru)',
        dosageGuideline: 'Dewasa: 1 suppo ke dalam anus 1–2x sehari sesudah BAB atau malam sebelum tidur.',
        dosageDetails: {
          adult: '1 supositoria dimasukkan ke dalam liang anus 1–2 kali sehari (sesudah BAB atau malam sebelum tidur). Salep dioleskan tipis 2–3x sehari.',
          pediatric: 'Kasus wasir sangat jarang pada anak. Hindari pemakaian mandiri tanpa pemeriksaan dokter spesialis anak.',
          infant: 'KONTRAINDIKASI MUTLAK pada bayi < 1 tahun (risiko cedera mukosa anorektal & absorpsi kortikosteroid). Periksa ke dokter bila ada perdarahan rektal.',
          pregnancy: 'Kategori B/C. Sering terjadi pada trimester 3. Pilih sediaan tanpa kortikosteroid kuat (misal Borraginol-S) atas anjuran dokter kandungan.',
          geriatric: '1 supositoria sehari. Pastikan higiene perianal terjaga dan gunakan pelicin/air saat memasukkan supositoria.'
        },
        timing: 'Sebaiknya digunakan setelah buang air besar dan membersihkan area perianal.',
        cautionNotes: 'Simpan sediaan supositoria di lemari pendingin (bukan freezer) agar tetap padat dan mudah dimasukkan. Cuci tangan sebelum dan sesudah aplikasi.',
        targetDrugId: 'drug-antihemoroid'
      },
      {
        genericName: 'Fraksi Flavonoid Murni Terfraksinasi (Diosmin 90% + Hesperidin 10% 500 mg)',
        brandExamples: ['Ardium 500 mg', 'Rhodium', 'Venaron (ekstrak Sophora japonica)'],
        bpomClass: 'Suplemen Kesehatan (POM SD)',
        dosageGuideline: 'Akut: 6 tab/hari (4 hari), lalu 4 tab/hari (3 hari), pemeliharaan 2 tab/hari.',
        dosageDetails: {
          adult: 'Fase akut: 6 tablet per hari (dibagi 3x2 tab) selama 4 hari pertama, lalu 4 tablet per hari (2x2 tab) selama 3 hari berikutnya.',
          pediatric: 'TIDAK DIANJURKAN untuk anak usia < 18 tahun.',
          infant: 'KONTRAINDIKASI MUTLAK pada bayi dan balita.',
          pregnancy: 'Kategori B. Bukti klinis menunjukkan aman untuk wasir akut trimester ke-3 atas anjuran dokter kandungan.',
          geriatric: 'Dosis sama dengan dewasa. Aman dan tidak memicu kantuk atau interaksi kardiovaskular.'
        },
        timing: 'Diminum bersama makanan atau sesudah makan.',
        cautionNotes: 'Meningkatkan tonus dinding pembuluh darah vena dan mempercepat resolusi edema perianal. Sangat efektif dikombinasikan dengan terapi topikal.',
        targetDrugId: 'drug-flavonoid'
      },
      {
        genericName: 'Suplemen Serat Alami Psyllium Husk',
        brandExamples: ['Vegeta Herbal', 'Fiber Drink', 'Metamucil'],
        bpomClass: 'Obat Bebas (Hijau)',
        dosageGuideline: 'Dewasa: 1 sachet dilarutkan dalam 200–250 mL air dingin 1x sehari malam.',
        dosageDetails: {
          adult: '1 sachet dilarutkan dalam 200–250 mL air putih dingin diminum 1 kali sehari malam hari sebelum tidur.',
          pediatric: 'Anak 6–12 tahun: 1/2 sachet per hari dilarutkan dalam segelas penuh air. Anak < 6 th: konsultasikan ke dokter.',
          infant: 'KONTRAINDIKASI MUTLAK pada bayi < 1 tahun (risiko impaksi feses dan sumbatan saluran cerna).',
          pregnancy: 'Kategori A/B (Lini Pertama Paling Aman). Pilihan suplemen serat teraman untuk ibu hamil & menyusui guna mencegah mengejan saat BAB.',
          geriatric: '1 sachet per hari. WAJIB diminum dengan air yang cukup dan diiringi 1 gelas air putih tambahan untuk mencegah sumbatan bolus serat.'
        },
        timing: 'Minum SEGERA sesudah diaduk sebelum mengental, diikuti 1 gelas air putih tambahan.',
        cautionNotes: 'Melunakkan konsistensi tinja sehingga pasien tidak perlu mengejan keras yang memperburuk wasir.',
        targetDrugId: 'drug-psyllium'
      }
    ],
    nonPharmacolTherapy: [
      'Sitz Bath (Rendam Bokong): Duduk berendam dalam baskom air hangat selama 15-20 menit 2-3 kali sehari, terutama setelah buang air besar, untuk mengendurkan sfingter ani dan meredakan nyeri.',
      'Tingkatkan asupan serat harian (25-30 gram/hari) dari pepaya, pisang, sayuran hijau, oatmeal, dan agar-agar, serta minum air putih minimal 2 - 2.5 liter per hari.',
      'JANGAN MENGEJAN TERLALU KERAS (menahan napas sambil mengejan meningkatkan tekanan pleksus hemoroidalis).',
      'Gunakan toilet jongkok atau letakkan bangku kecil penyangga kaki saat buang air di kloset duduk untuk membentuk sudut anorektal 35° yang mempermudah defekasi.',
      'Hindari duduk di kloset terlalu lama sambil bermain smartphone (maksimal 5-10 menit).'
    ],
    contraindicatedForSelfMed: [
      'JANGAN menahan buang air besar karena tinja akan mengering dan semakin keras melukai dinding anus.',
      'JANGAN menggunakan sabun mandi wangi keras atau menggosok area anus dengan tisu kasar beralkohol.'
    ],
    specialPopulations: {
      pregnancyWarning: 'Wasir sangat sering terjadi pada trimester 3 akibat tekanan rahim ke vena cava. Utamakan sitz bath air hangat, diet serat tinggi, dan supositoria antihemoroid ringan atas petunjuk nakes.',
      pediatricWarning: 'Wasir sangat jarang pada anak; bila ada benjolan anus pada anak wajib diperiksa dokter spesialis anak/bedah anak.',
      geriatricWarning: 'Waspadai perdarahan rektal pada lansia; wajib penapisan karsinoma kolorektal jika perdarahan terus berulang.'
    },
    whenToSeeDoctor: [
      'Perdarahan tidak kunjung berhenti setelah 5 hari.',
      'Benjolan anus semakin membesar dan nyeri hebat hingga tidak bisa duduk.',
      'Tinja berwarna kehitaman atau lendir bercampur darah.'
    ],
    gemaCermatTips: [
      'DA: Beli supositoria di apotek dan pastikan disimpan dingin sebelum digunakan.',
      'GU: Buka bungkus supositoria dan basahi ujungnya dengan sedikit air sebelum dimasukkan perlahan ke anus.',
      'SI: Simpan supositoria di lemari es (suhu 2–8°C). Simpan salep di tempat sejuk di bawah 25°C.',
      'BU: Buang aplikator salep yang kotor dan jangan digunakan bergantian dengan orang lain.'
    ]
  },
  // ============================================================================
  // 11. BIANG KERINGAT / GATAL BUNTET (MILIARIA RUBRA)
  // ============================================================================
  {
    id: 'swam-biang-keringat',
    title: 'Biang Keringat / Gatal Buntet (Miliaria Rubra)',
    category: 'skin-allergy',
    categoryLabel: 'Kulit & Alergi',
    iconName: 'Sparkles',
    quickSummary: 'Penyumbatan saluran kelenjar keringat (ekrin) akibat cuaca panas lembap tropis, pakaian ketat, atau demam, sehingga keringat terperangkap di bawah lapisan kulit dan memicu bintik-bintik merah gatal.',
    laymanKeywords: ['biang keringat', 'keringat buntet', 'bintik merah', 'gatal keringat', 'miliaria', 'bruntusan panas', 'kulit perih'],
    typicalSymptoms: [
      'Bintil-bintil kecil kemerahan (papul merah) berukuran 1-2 mm yang terasa gatal atau pedih seperti tertusuk jarum',
      'Sering muncul di area lipatan kulit: leher, dada, punggung, lipat siku, ketiak, dan selangkangan',
      'Rasa gatal dan perih semakin menyengat saat tubuh berkeringat atau berada di tempat panas'
    ],
    redFlags: [
      'Bintil berubah menjadi lenting bernanah kuning keruh (pustul) disertai kerak kekuningan (indikasi infeksi bakteri sekunder / impetigo)',
      'Disertai demam tinggi, menggigil, atau anak menjadi rewel lemas',
      'Area kulit di sekitar bintil membengkak merah, hangat saat diraba, dan terasa sangat nyeri (selulitis)'
    ],
    maxSelfMedDays: 4,
    recommendedDrugs: [
      {
        genericName: 'Losio Kalamin + Seng Oksida (Calamine Lotion)',
        brandExamples: ['Caladine Lotion', 'Caladryl', 'Konicare Minyak Telon Plus'],
        bpomClass: 'Obat Bebas (Hijau)',
        dosageGuideline: 'Kocok botol terlebih dahulu, oleskan tipis merata pada area kulit yang gatal 2 - 4 kali sehari setelah mandi.',
        dosageDetails: {
          adult: 'Kocok botol, lalu oleskan tipis merata pada area bruntusan biang keringat 2–4 kali sehari setelah mandi.',
          pediatric: 'Anak > 2 tahun: oleskan tipis pada leher, dada, atau punggung yang gatal setelah mandi dan dikeringkan.',
          infant: 'Bayi < 1 tahun: Gunakan losio kalamin khusus bayi (Caladine Baby Liquid Powder) tipis. Hindari sediaan yang mengandung menthol pekat.',
          pregnancy: 'Kategori A (Aman). Sangat aman meredakan biang keringat dan rasa gerah selama kehamilan.',
          geriatric: 'Oleskan lembut pada kulit yang bersih. Hindari area kulit lansia yang sangat kering bersisik.'
        },
        timing: 'Oleskan saat kulit dalam keadaan bersih dan kering.',
        cautionNotes: 'Memberikan efek sejuk menyegarkan, meredakan rasa terbakar, dan mengeringkan lenting biang keringat. JANGAN dioleskan pada luka terbuka atau basah bernanah.',
        targetDrugId: 'drug-calamine'
      },
      {
        genericName: 'Bedak Salisil 2% (Salicylic Acid Powder)',
        brandExamples: ['Bedak Salicyl Kimia Farma', 'Bedak Herocyn', 'Caladine Powder'],
        bpomClass: 'Obat Bebas (Hijau)',
        dosageGuideline: 'Taburkan dan usapkan tipis pada area tubuh yang gatal setelah mandi dan kulit dikeringkan handuk.',
        dosageDetails: {
          adult: 'Taburkan dan usapkan tipis pada area tubuh yang gatal setelah mandi dan kulit dikeringkan handuk.',
          pediatric: 'Anak > 3 tahun: taburkan tipis pada punggung/dada. JANGAN ditaburkan dekat wajah agar tidak terhirup.',
          infant: 'KONTRAINDIKASI MUTLAK pada bayi < 2 tahun (risiko aspirasi partikel bedak ke paru-paru dan risiko toksisitas salisilat transkutan).',
          pregnancy: 'Kategori C. Hindari penggunaan bedak salisil pada area tubuh yang luas; gunakan losio kalamin.',
          geriatric: 'Taburkan tipis pada lipatan tubuh yang lembap berkeringat.'
        },
        timing: 'Gunakan setelah mandi pagi dan sore.',
        cautionNotes: 'Membantu menyerap keringat dan bersifat keratolitik ringan membersihkan sumbatan pori. Hati-hati jangan sampai terhirup oleh hidung bayi.',
        targetDrugId: 'drug-salicyl'
      }
    ],
    nonPharmacolTherapy: [
      'Pindahkan pasien ke ruangan dengan sirkulasi udara sejuk, ber-AC, atau gunakan kipas angin untuk menghentikan produksi keringat berlebih.',
      'Gunakan pakaian longgar berbahan katun alami yang menyerap keringat dan lembut di kulit. Ganti baju segera bila basah oleh keringat.',
      'Mandi dengan air sejuk (tidak terlalu dingin atau terlalu panas) menggunakan sabun lembut tanpa pewangi tajam.',
      'Hindari mengeringkan tubuh dengan menggosok handuk terlalu kasar; tepuk-tepuk lembut kulit dengan handuk bersih.'
    ],
    contraindicatedForSelfMed: [
      'JANGAN mengoleskan salep atau minyak kental (seperti petroleum jelly atau minyak urut panas) pada area biang keringat karena akan semakin menyumbat muara pori keringat.',
      'JANGAN menaburkan bedak tabur langsung ke wajah atau dekat hidung bayi untuk mencegah risiko aspirasi saluran napas.'
    ],
    specialPopulations: {
      pregnancyWarning: 'Losio kalamin sangat aman digunakan oleh ibu hamil dan menyusui.',
      pediatricWarning: 'Pada bayi, hindari bedak tabur bila kulit basah atau di lipatan kelamin; prioritaskan losio cair kalamin atau kompres air sejuk.',
      geriatricWarning: 'Kulit lansia cenderung lebih kering; gunakan losio yang melembabkan tanpa menthol berlebihan.'
    },
    whenToSeeDoctor: [
      'Biang keringat tidak membaik setelah 4 hari perawatan mandiri.',
      'Bintik kemerahan mengeluarkan nanah atau luka lecet meluas.',
      'Anak mengalami demam dan tampak kesakitan.'
    ],
    gemaCermatTips: [
      'DA: Beli losio kalamin atau bedak salisil yang tersegel rapi di apotek.',
      'GU: Selalu kocok losio sebelum dituangkan dan keringkan kulit sebelum mengoleskannya.',
      'SI: Simpan botol tertutup rapat pada suhu ruang sejuk.',
      'BU: Buang sediaan bila cairan losio mengeras, berbau tengik, atau terpisah tidak bisa tercampur.'
    ]
  },
  // ============================================================================
  // 12. KUDIS / GATAL MALAM HARI (SKABIES)
  // ============================================================================
  {
    id: 'swam-skabies-kudis',
    title: 'Kudis / Gatal Malam Hari (Skabies Sarcoptes)',
    category: 'skin-allergy',
    categoryLabel: 'Kulit & Alergi',
    iconName: 'Sparkles',
    quickSummary: 'Infestasi kutu parasit Sarcoptes scabiei var. hominis yang membuat terowongan mikroskopis di bawah lapisan epidermis kulit, menimbulkan rasa gatal luar biasa yang memuncak di malam hari dan menular dengan mudah di lingkungan keluarga serumah, asrama, atau pondok pesantren.',
    laymanKeywords: ['kudis', 'skabies', 'gatal malam', 'kutu kasur', 'buduk', 'gatal sela jari', 'bintil gatal', 'gatal asrama'],
    typicalSymptoms: [
      'Gatal intensif terutama pada malam hari (pruritus nokturnal)',
      'Bintil kemerahan, vesikel kecil, dan garis terowongan halus berwarna abu-abu/putih (kanalikulus)',
      'Predileksi khas di sela-sela jari tangan, pergelangan tangan bagian volar, ketiak, sekitar pusar, bokong, dan area genitalia pria',
      'Terdapat anggota keluarga atau teman satu kamar/asrama yang mengalami keluhan gatal serupa'
    ],
    redFlags: [
      'Infeksi sekunder bakteri berat: timbul luka bernanah kuning tebal, bengkak, dan nyeri hebat (impetiginisasi/pioderma)',
      'Kerak tebal bersisik abu-abu luas di seluruh tubuh dan kuku (Norwegian / Crusted Scabies pada lansia atau penderita defisiensi imun)',
      'Disertai demam tinggi atau pembesaran kelenjar getah bening di lipat paha/ketiak'
    ],
    maxSelfMedDays: 7,
    recommendedDrugs: [
      {
        genericName: 'Permetrin Krim 5% (Permethrin Cream 5%)',
        brandExamples: ['Scabimite Krim 5%', 'Permethrin OGB 5%'],
        bpomClass: 'Obat Wajib Apotek (OWA)',
        dosageGuideline: 'Oleskan tipis merata ke SELURUH TUBUH dari bawah leher hingga ujung jari kaki (termasuk sela jari, lipat ketiak, pusar, bokong, dan lipatan kuku). Biarkan selama 8–12 jam (biasanya dipakai malam sebelum tidur), lalu bilas bersih saat mandi pagi.',
        dosageDetails: {
          adult: 'Oleskan tipis merata ke SELURUH TUBUH dari bawah leher hingga ujung jari kaki (termasuk sela jari, ketiak, pusar, bokong, lipatan kuku). Diamkan 8–12 jam malam hari, lalu bilas bersih. Ulangi hari ke-7.',
          pediatric: 'Anak > 2 tahun: oleskan merata dari leher hingga ujung jari kaki selama 8–12 jam, bilas bersih saat mandi pagi. Ulangi 7 hari kemudian.',
          infant: 'Bayi 2 bulan – 2 tahun: DI BAWAH PENGAWASAN DOKTER. Pada bayi, olesan HARUS MENCAKUP kulit kepala, dahi, pelipis, dan leher (hindari mata & mulut), diamkan 8 jam lalu bilas. Bayi < 2 bulan: KONTRAINDIKASI (gunakan salep sulfur 5%).',
          pregnancy: 'Kategori B (Pilihan Teraman bila skabies aktif). Absorpsi sistemik sangat minim (< 2%). Alternatif: salep sulfur presipitatum 5–10%.',
          geriatric: 'Oleskan merata dari leher ke bawah. Pada lansia tirah baring/imunokompromais, waspadai Scabies Krustosa yang butuh penanganan dokter.'
        },
        timing: 'Digunakan 1 kali seminggu. WAJIB diulang 1 kali lagi pada hari ke-7 untuk membunuh kutu yang baru menetas dari telur.',
        cautionNotes: 'Baku emas terapi skabies dunia. Sesuai DOWA No. 3, penyerahan oleh Apoteker maksimal 1 tube tanpa resep. SELURUH ANGGOTA KELUARGA/SERUMAH WAJIB DIOBATI SERENTAK meskipun belum bergejala.',
        targetDrugId: 'drug-permethrin'
      },
      {
        genericName: 'Cetirizine 10 mg / Loratadine 10 mg',
        brandExamples: ['Incidal-OD', 'Ryvel', 'Cerini', 'Cetirizine Kimia Farma'],
        bpomClass: 'Obat Wajib Apotek (OWA)',
        dosageGuideline: 'Dewasa & anak > 12 th: 1 tablet (10 mg) diminum 1 kali sehari pada malam hari untuk meredakan rasa gatal agar pasien bisa tidur nyenyak.',
        dosageDetails: {
          adult: '1 tablet (10 mg) diminum 1 kali sehari pada malam hari sesudah makan untuk meredakan rasa gatal nokturnal.',
          pediatric: 'Anak 6–12 th: 5 mg 2x sehari atau 10 mg 1x sehari (sirup/tablet). Anak 2–6 th: 2.5 mg 2x sehari (sirup drops).',
          infant: 'Bayi 6–12 bulan: 2.5 mg drops 1x sehari HANYA atas instruksi dokter. Bayi < 6 bulan: KONTRAINDIKASI untuk swamedikasi.',
          pregnancy: 'Kategori B (Pilihan Antihistamin Paling Aman). Mengurangi gatal hebat agar ibu hamil dapat beristirahat.',
          geriatric: 'Dosis awal 5 mg sekali sehari pada malam hari. Waspadai penurunan laju klirens ginjal.'
        },
        timing: 'Diminum malam hari sesudah makan.',
        cautionNotes: 'Meredakan reaksi hipersensitivitas alergi terhadap kotoran dan telur kutu. Sesuai DOWA No. 3, penyerahan oleh Apoteker maksimal 10 tablet.',
        targetDrugId: 'drug-cetirizine'
      }
    ],
    nonPharmacolTherapy: [
      'SANITASI PAKAIAN & SPREI SERENTAK: Cuci semua pakaian, sprei, sarung bantal, selimut, dan handuk yang digunakan dalam 3 hari terakhir dengan AIR PANAS minimal suhu 60°C lalu setrika panas.',
      'Barang yang tidak bisa dicuci (misal boneka atau jaket tebal) masukkan ke dalam kantong plastik hitam besar, ikat rapat, dan diamkan selama minimal 72 jam (kutu akan mati tanpa inang manusia dalam 3 hari).',
      'Jemur kasur dan bantal di bawah terik sinar matahari langsung sambil dipukul-pukul.',
      'Potong kuku tangan pendek dan jaga kebersihan tangan untuk mencegah luka robek akibat garukan yang memicu infeksi bakteri.'
    ],
    contraindicatedForSelfMed: [
      'JANGAN mengoleskan salep steroid potensi kuat (seperti Deksametason / Betametason) tanpa izin dokter karena akan menyamarkan tanda klinis (Scabies incognito) dan menyuburkan parasit.',
      'JANGAN hanya mengobati 1 orang penderita bila tinggal bersama; bila tidak diobati serentak, fenomena "pingpong" penularan bolak-balik akan terus terjadi.'
    ],
    specialPopulations: {
      pregnancyWarning: 'Permetrin 5% tergolong Kategori B (cukup aman) bila sangat diperlukan atas anjuran dokter/apoteker. Alternatif tradisional yang aman adalah salep sulfur presipitatum 5-10%.',
      pediatricWarning: 'Pada bayi dan anak di bawah 2 tahun, aplikasi permetrin harus di bawah pengawasan dokter dan mencakup area kepala/leher.',
      geriatricWarning: 'Waspadai kulit kering pada lansia; berikan pelembab pasca mandi bilasan permetrin.'
    },
    whenToSeeDoctor: [
      'Gatal dan lesi kulit belum membaik setelah 2 siklus pengobatan (14 hari).',
      'Kulit mengeluarkan nanah kuning berbau dan bengkak merah meluas.',
      'Terjadi pada bayi usia di bawah 2 bulan.'
    ],
    gemaCermatTips: [
      'DA: Dapatkan krim Permetrin 5% resmi di apotek dan pastikan berkonsultasi dengan Apoteker.',
      'GU: Pastikan kulit dingin dan kering sebelum mengoleskan krim, jangan langsung oles sesudah mandi air panas.',
      'SI: Simpan tube krim pada suhu ruangan di bawah 30°C terlindung dari cahaya.',
      'BU: Buang tube obat yang sudah kosong ke tempat sampah medis/tertutup.'
    ]
  },
  // ============================================================================
  // 13. JERAWAT RINGAN–SEDANG (ACNE VULGARIS)
  // ============================================================================
  {
    id: 'swam-jerawat-ringan',
    title: 'Jerawat Ringan–Sedang (Acne Vulgaris Papulopustular)',
    category: 'skin-allergy',
    categoryLabel: 'Kulit & Alergi',
    iconName: 'Sparkles',
    quickSummary: 'Peradangan kronis folikel pilosebasea akibat hiperkeratinisasi pori, produksi sebum berlebih, dan proliferasi bakteri Cutibacterium acnes yang membentuk komedo, papul merah, dan pustul kecil di wajah.',
    laymanKeywords: ['jerawat', 'bruntusan', 'komedo', 'muka berminyak', 'acne', 'bintil wajah', 'jerawat radang'],
    typicalSymptoms: [
      'Komedo terbuka (blackhead) dan komedo tertutup (whitehead)',
      'Benjolan kecil merah meradang (papul) berdiameter < 5 mm di area dahi, pipi, hidung, atau dagu',
      'Lenting kecil berisi cairan putih/nanah ringan (pustul superfisial)',
      'Kulit wajah terasa berminyak dan sedikit perih saat tersentuh'
    ],
    redFlags: [
      'Jerawat berukuran besar, dalam, sangat keras dan nyeri (kista dan nodul nodulokistik > 5 mm)',
      'Jerawat meninggalkan jaringan parut cekung dalam (bopeng atrofis) atau keloid menonjol',
      'Jerawat muncul mendadak sangat banyak disertai tanda hiperandrogenisme pada wanita (rambut tumbuh di dagu/kumis, menstruasi tidak teratur)'
    ],
    maxSelfMedDays: 14,
    recommendedDrugs: [
      {
        genericName: 'Benzoil Peroksida 2.5% – 5% Gel (Benzoyl Peroxide)',
        brandExamples: ['Benzolac 2.5% / 5%', 'Benzolac-CL', 'Oxy 5', 'Acnes Sealing Jell'],
        bpomClass: 'Obat Bebas Terbatas (Biru)',
        dosageGuideline: 'Oleskan tipis HANYA pada titik jerawat yang meradang 1 - 2 kali sehari setelah mencuci muka dan mengeringkannya.',
        dosageDetails: {
          adult: 'Oleskan tipis HANYA pada titik jerawat yang meradang 1–2 kali sehari setelah mencuci muka dan mengeringkannya.',
          pediatric: 'Anak > 12 tahun: oleskan tipis 1 kali sehari malam hari pada jerawat aktif. Anak < 12 th: konsultasikan ke dokter.',
          infant: 'KONTRAINDIKASI MUTLAK pada bayi < 1 tahun (jerawat neonatus/milia bersifat fisiologis dan akan sembuh mandiri dengan air bersih tanpa obat keras).',
          pregnancy: 'Kategori C (Gunakan terbatas). Gunakan tipis bila diizinkan dokter; alternatif lebih aman adalah Asam Azelat.',
          geriatric: 'Jerawat jarang pada lansia; oleskan tipis bila terbukti lesi inflamasi dan kulit tidak terlalu kering.'
        },
        timing: 'Gunakan malam hari sebelum tidur. Mulai dengan konsentrasi rendah 2.5% untuk menguji sensitivitas kulit.',
        cautionNotes: 'Bersifat bakterisidal kuat terhadap C. acnes dan komedolitik. Dapat memutihkan (bleaching) warna kain/pakaian/bantal bila terkena. Gunakan tabir surya di siang hari karena kulit menjadi lebih sensitif sinar UV.',
        targetDrugId: 'drug-benzoylperoxide'
      },
      {
        genericName: 'Asam Salisilat 2% Gel / Pembersih Wajah (Salicylic Acid)',
        brandExamples: ['Acnes Creamy Wash', 'Clean & Clear Spot Gel', 'CeraVe Blemish Control', 'Sebamed Clear Face'],
        bpomClass: 'Obat Bebas (Hijau)',
        dosageGuideline: 'Gunakan sabun pembersih 2 kali sehari (pagi dan malam). Untuk gel totol, oleskan 1-2 kali sehari.',
        dosageDetails: {
          adult: 'Gunakan sabun pembersih 2 kali sehari (pagi & malam). Untuk gel totol, oleskan tipis 1–2 kali sehari pada area komedo/jerawat.',
          pediatric: 'Anak > 12 tahun: gunakan sabun pembersih 1–2 kali sehari. Anak < 12 tahun: utamakan sabun pembersih lembut tanpa zat aktif asam.',
          infant: 'KONTRAINDIKASI MUTLAK pada bayi < 2 tahun (risiko toksisitas salisilat transkutan).',
          pregnancy: 'Kategori C. Formulasi pembersih bilas atau totol kecil konsentrasi <= 2% berisiko minimal, namun hindari peeling luas.',
          geriatric: 'Gunakan pembersih berpelembab agar tidak mengikis lapisan lemak kulit lansia yang tipis.'
        },
        timing: 'Saat mencuci muka.',
        cautionNotes: 'Beta Hydroxy Acid (BHA) yang larut dalam minyak, mampu masuk membersihkan sebum di dalam pori-pori dan meredakan komedo.',
        targetDrugId: 'drug-salicylicacid'
      }
    ],
    nonPharmacolTherapy: [
      'Cuci muka maksimal 2 kali sehari dengan air suam-suam kuku dan sabun pembersih lembut ber-pH seimbang (pH 5.5). JANGAN mencuci muka terlalu sering (lebih dari 3 kali) karena merusak barrier kulit.',
      'HINDARI MEMENCET ATAU MENCOBEK JERAWAT SENDIRI karena mendorong bakteri masuk lebih dalam ke dermis, memperparah radang, dan menimbulkan bekas bopeng permanen.',
      'Gunakan produk pelembab dan tabir surya berlabel "Non-Comedogenic" dan "Oil-Free".',
      'Ganti sarung bantal minimal seminggu sekali dan hindari menempelkan layar smartphone kotor ke pipi.',
      'Kurangi makanan berpati tinggi / indeks glikemik tinggi dan produk susu berlebih yang memicu lonjakan insulin-like growth factor (IGF-1).'
    ],
    contraindicatedForSelfMed: [
      'JANGAN mengoleskan pasta gigi, bawang putih mentah, atau getah tumbuhan ke jerawat karena menyebabkan dermatitis kontak iritan berat dan luka bakar kimiawi.',
      'JANGAN membeli kapsul antibiotik oral (seperti Doksisiklin) sembarangan tanpa periksa ke dokter.'
    ],
    specialPopulations: {
      pregnancyWarning: 'Asam Salisilat topikal konsentrasi rendah (< 2%) dan Asam Azelat relatif aman. Benzoil peroksida Kategori C (gunakan tipis bila disetujui dokter). KONTRAINDIKASI MUTLAK: Retinoid oral (Isotretinoin - teratogenik parah).',
      pediatricWarning: 'Jerawat pada anak pra-pubertas (< 9 tahun) memerlukan evaluasi dokter anak untuk menyingkirkan kelainan hormonal.',
      geriatricWarning: 'Jerawat jarang pada lansia; singkirkan diagnosis rosasea atau dermatitis perioral.'
    },
    whenToSeeDoctor: [
      'Jerawat tidak membaik setelah 6–8 minggu penggunaan produk bebas.',
      'Timbul benjolan nodul kistik besar di bawah kulit.',
      'Jerawat menimbulkan bekas luka cekung/bopeng yang dalam.'
    ],
    gemaCermatTips: [
      'DA: Beli gel jerawat di apotek resmi, hindari krim racikan pemutih online tanpa nomor BPOM.',
      'GU: Oleskan tipis pada jerawat, jangan digosok keras.',
      'SI: Simpan gel pada suhu sejuk di bawah 25°C terhindar dari panas.',
      'BU: Buang bila isi gel berubah warna menjadi kekuningan pekat atau mencair berbau asam.'
    ]
  },
  // ============================================================================
  // 14. KUTU RAMBUT KEPALA (PEDIKULOSIS KAPITIS)
  // ============================================================================
  {
    id: 'swam-kutu-rambut',
    title: 'Kutu Rambut Kepala (Pedikulosis Kapitis)',
    category: 'skin-allergy',
    categoryLabel: 'Kulit & Alergi',
    iconName: 'Sparkles',
    quickSummary: 'Infestasi parasit Pediculus humanus capitis pada kulit kepala dan helai rambut, menular melalui kontak langsung kepala-ke-kepala atau penggunaan bersama sisir, topi, jilbab, dan bantal.',
    laymanKeywords: ['kutu rambut', 'kutu kepala', 'ketombe kutu', 'gatal kepala', 'pedikulosis', 'telur kutu', 'sisir serit'],
    typicalSymptoms: [
      'Gatal intens pada kulit kepala, terutama di area belakang telinga dan tengkuk leher',
      'Terlihat kutu kecil seukuran biji wijen merayap di kulit kepala',
      'Telur kutu (nits) berbentuk oval kecil berwarna putih/abu-abu yang menempel erat pada batang rambut dan sulit digeser (berbeda dengan ketombe yang mudah rontok)',
      'Luka lecet kecil akibat garukan kuku di kulit kepala'
    ],
    redFlags: [
      'Infeksi sekunder pada kulit kepala: luka lecet mengeluarkan nanah, berkerak basah, atau berbau busuk',
      'Terjadi pembengkakan kelenjar getah bening di leher belakang yang nyeri',
      'Infestasi mengenai bulu mata atau alis mata (memerlukan penanganan dokter khusus)'
    ],
    maxSelfMedDays: 7,
    recommendedDrugs: [
      {
        genericName: 'Permetrin 1% Losio Rambut (Permethrin 1% Lotion)',
        brandExamples: ['Peditox Losio'],
        bpomClass: 'Obat Bebas Terbatas (Biru)',
        dosageGuideline: 'Keramas rambut dengan sampo biasa (tanpa kondisioner), bilas dan keringkan dengan handuk hingga lembap. Aplikasikan losio permetrin merata ke seluruh kulit kepala dan rambut terutama belakang telinga dan tengkuk. Diamkan selama 10 MENIT, lalu bilas bersih dengan air hangat.',
        dosageDetails: {
          adult: 'Keramas tanpa kondisioner, keringkan hingga lembap. Oleskan losio merata ke rambut & kulit kepala, diamkan 10 menit, lalu bilas air hangat. Wajib diulang hari ke-7.',
          pediatric: 'Anak > 2 tahun: aplikasikan merata pada kulit kepala lembap selama 10 menit, bilas bersih. Lindungi mata anak dengan handuk kering. Ulangi hari ke-7.',
          infant: 'Bayi < 6 bulan: KONTRAINDIKASI losio kimia permetrin. Gunakan terapi mekanis sisir serit basah (wet combing) dengan minyak zaitun atau minyak kelapa (VCO).',
          pregnancy: 'Kategori B (Relatif Aman). Terapi pilihan lini pertama paling aman adalah sisir serit basah (wet combing) dengan kondisioner bebas pewangi.',
          geriatric: 'Aman digunakan sesuai petunjuk. Pastikan tidak terkena area mata.'
        },
        timing: 'Gunakan 1 kali, dan WAJIB diulang 1 kali lagi pada HARI KE-7 sampai KE-9 untuk membasmi kutu yang baru menetas dari telur yang tersisa.',
        cautionNotes: 'Hati-hati jangan sampai cairan obat mengenai mata. JANGAN gunakan kondisioner sebelum obat karena menghambat ikatan permetrin pada rambut.',
        targetDrugId: 'drug-permethrin-1'
      }
    ],
    nonPharmacolTherapy: [
      'Sisir Serit Basah (Wet Combing): Sisir rambut yang telah dibasahi kondisioner menggunakan sisir serit bergigi sangat rapat (jarak antargigi < 0.3 mm) dari akar rambut hingga ujung helai setiap 3-4 hari selama 2 minggu.',
      'Rendam semua sisir, sikat rambut, dan ikat rambut dalam air panas minimal suhu 60°C selama 10 menit.',
      'Cuci sprei, sarung bantal, topi, jilbab, dan handuk yang dipakai dalam 48 jam terakhir dengan air panas dan keringkan dengan pengering panas / setrika.',
      'Periksa seluruh anggota keluarga serumah dan obati serentak bila ditemukan kutu atau telur kutu aktif.'
    ],
    contraindicatedForSelfMed: [
      'DILARANG menggunakan minyak tanah, pestisida tanaman, insektisida semprot nyamuk, atau kapur ajaib di kepala karena sangat beracun dan memicu kerusakan saraf serta luka bakar kimiawi.'
    ],
    specialPopulations: {
      pregnancyWarning: 'Wet combing (sisir serit basah) adalah terapi lini pertama yang paling aman. Permetrin 1% topikal tergolong Kategori B bila sangat diperlukan.',
      pediatricWarning: 'Aman untuk anak usia di atas 2 bulan. Pada bayi di bawah 2 bulan, gunakan sisir serit manual saja.',
      geriatricWarning: 'Aman digunakan sesuai dosis.'
    },
    whenToSeeDoctor: [
      'Kutu masih aktif bergerak setelah 2 siklus pengobatan dengan permetrin (indikasi resistensi).',
      'Kulit kepala timbul nanah dan radang berat.'
    ],
    gemaCermatTips: [
      'DA: Dapatkan losio antikutu resmi Peditox di apotek.',
      'GU: Gunakan handuk pelindung wajah saat mengoleskan losio agar tidak menetes ke mata.',
      'SI: Simpan botol obat di tempat sejuk terhindar dari jangkauan anak-anak.',
      'BU: Buang botol bekas dan sisir yang patah ke tempat sampah tertutup.'
    ]
  },
  // ============================================================================
  // 15. KOTORAN TELINGA MENGERAS (SERUMEN OBTURANS)
  // ============================================================================
  {
    id: 'swam-serumen-telinga',
    title: 'Kotoran Telinga Mengeras (Serumen Obturans Ringan)',
    category: 'eye-ear',
    categoryLabel: 'Mata & Telinga',
    iconName: 'Eye',
    quickSummary: 'Penumpukan dan pengerasan lilin kelenjar serumen di dalam liang telinga luar yang menyumbat konduksi suara, sering dipicu oleh kebiasaan mengorek liang telinga dengan cotton bud atau penggunaan earphone / earplug terlalu sering.',
    laymanKeywords: ['telinga tersumbat', 'kotoran telinga', 'serumen', 'telinga budeg', 'congek kering', 'telinga mendengung', 'tetes telinga'],
    typicalSymptoms: [
      'Pendengaran terasa berkurang atau tersumbat seperti kemasukan air di salah satu telinga',
      'Sensasi telinga penuh atau berdenging halus (tinnitus ringan)',
      'Rasa sedikit gatal di dalam liang telinga tanpa rasa nyeri berdenyut',
      'Tidak ada cairan nanah atau darah yang keluar dari telinga'
    ],
    redFlags: [
      'Nyeri telinga hebat berdenyut (otalgia akut) atau nyeri saat daun telinga ditarik',
      'Keluar cairan nanah kuning-kehijauan, berbau busuk, atau bercampur darah (otitis media / eksterna)',
      'Riwayat gendang telinga robek / bolong (perforasi membran timpani)',
      'Disertai pusing berputar hebat (vertigo), mual muntah, atau demam'
    ],
    maxSelfMedDays: 3,
    recommendedDrugs: [
      {
        genericName: 'Karbogliserin 10% Tetes Telinga (Carboglycerin Ear Drops)',
        brandExamples: ['Vital Ear Drops (Karbogliserin)', 'Forumen Tetes Telinga (Docusate Sodium)', 'Solwax Tetes'],
        bpomClass: 'Obat Bebas (Hijau)',
        dosageGuideline: 'Teteskan 2 - 4 tetes ke dalam liang telinga yang tersumbat, biarkan selama 5 - 10 menit dengan posisi kepala miring, gunakan 2 - 3 kali sehari selama maksimal 3 hari.',
        dosageDetails: {
          adult: 'Teteskan 2–4 tetes ke dalam liang telinga yang tersumbat, pertahankan posisi kepala miring 5–10 menit, gunakan 2–3 kali sehari (maksimal 3 hari).',
          pediatric: 'Anak > 3 tahun: 1–2 tetes 2 kali sehari selama 2–3 hari (tarik daun telinga ke arah belakang dan bawah). Anak < 3 th: konsultasikan ke dokter.',
          infant: 'KONTRAINDIKASI MUTLAK swamedikasi pada bayi < 1 tahun (liang telinga bayi sempit; pembersihan serumen wajib dilakukan oleh dokter spesialis THT).',
          pregnancy: 'Kategori A (Aman). Bekerja lokal melunakkan serumen tanpa absorpsi sistemik ke janin.',
          geriatric: 'Teteskan 2–3 tetes 2 kali sehari. Bila serumen keras tidak keluar setelah 3 hari, bawa ke klinik/dokter THT untuk ekstraksi.'
        },
        timing: 'Gunakan dalam posisi berbaring miring.',
        cautionNotes: 'HANYA digunakan bila GENDANG TELINGA UTUH dan TIDAK NYERI. Berfungsi melunakkan gumpalan serumen agar dapat keluar secara alami.',
        targetDrugId: 'drug-carboglycerin'
      }
    ],
    nonPharmacolTherapy: [
      'STOP MENGOREK TELINGA DENGAN COTTON BUD, penjepit kertas, bulu ayam, atau korek kuping besi! Mengorek justru mendorong serumen masuk lebih dalam dan memadatkannya di dekat gendang telinga.',
      'Saat meneteskan obat, miringkan kepala atau berbaring miring ke samping. Tarik daun telinga ke arah belakang dan atas (untuk dewasa) agar liang telinga lurus, lalu teteskan obat.',
      'Setelah 10 menit, miringkan kepala ke arah berlawanan di atas tisu bersih agar sisa cairan obat dan lelehan serumen yang melunak dapat keluar.'
    ],
    contraindicatedForSelfMed: [
      'DILARANG menggunakan terapi "Ear Candling" (lilin telinga) karena terbukti berbahaya, tidak efektif, dan berisiko menyebabkan luka bakar gendang telinga serta sumbatan lilin leleh.',
      'DILARANG meneteskan obat bila ada riwayat gendang telinga berlubang atau telinga sedang nyeri radang.'
    ],
    specialPopulations: {
      pregnancyWarning: 'Tetes telinga pelunak serumen bekerja lokal dan sangat aman untuk ibu hamil.',
      pediatricWarning: 'Pada anak di bawah 3 tahun, tarik daun telinga ke arah belakang dan BAWAH. Hindari manipulasi alat sendiri pada liang telinga anak yang sempit.',
      geriatricWarning: 'Serumen pada lansia cenderung lebih kering dan keras; bila 3 hari tidak keluar, bawa ke dokter THT untuk irigasi/suction.'
    },
    whenToSeeDoctor: [
      'Kotoran telinga tidak keluar dan pendengaran tetap tersumbat setelah 3 hari penetesan obat.',
      'Timbul nyeri, pusing berputar, atau keluar cairan nanah.'
    ],
    gemaCermatTips: [
      'DA: Beli tetes telinga resmi di apotek berizin.',
      'GU: Hangatkan botol tetes telinga dengan menggenggamnya di telapak tangan selama 1-2 menit sebelum diteteskan untuk mencegah sensasi pusing akibat cairan dingin.',
      'SI: Tutup rapat botol dan simpan di tempat kering suhu ruang di bawah 30°C.',
      'BU: Tetes telinga yang sudah dibuka segelnya hanya boleh digunakan maksimal 28 hari (1 bulan).'
    ]
  },
  // ============================================================================
  // 16. RADANG GUSI RINGAN & BAU MULUT (GINGIVITIS & HALITOSIS)
  // ============================================================================
  {
    id: 'swam-radang-gusi-halitosis',
    title: 'Radang Gusi Ringan & Bau Mulut (Gingivitis & Halitosis)',
    category: 'mouth-oral',
    categoryLabel: 'Mulut & Sariawan',
    iconName: 'Smile',
    quickSummary: 'Peradangan tepi gusi (gingiva) akibat penumpukan plak bakteri dan sisa makanan yang menghasilkan senyawa sulfur volatil (VSC) pemicu bau mulut tak sedap dan gusi mudah berdarah saat menyikat gigi.',
    laymanKeywords: ['radang gusi', 'gusi berdarah', 'bau mulut', 'gingivitis', 'halitosis', 'gusi bengkak', 'obat kumur', 'plak gigi'],
    typicalSymptoms: [
      'Gusi tampak merah merona, agak membengkak di batas gigi',
      'Gusi mudah berdarah saat menyikat gigi atau menggunakan benang gigi',
      'Bau napas tidak sedap (halitosis) yang menetap',
      'Rasa tidak nyaman atau ngilu ringan pada gusi saat mengunyah'
    ],
    redFlags: [
      'Gusi membengkak besar berisi nanah kuning berdenyut hebat (abses gusi / abses periodontal)',
      'Gigi menjadi goyang parah atau tampak merenggang (indikasi periodontitis lanjut dengan kerusakan tulang rahang)',
      'Disertai pembengkakan pipi, demam, atau kesulitan membuka mulut (trismus)',
      'Perdarahan gusi spontan yang banyak tanpa menyikat gigi (waspadai kelainan koagulasi atau leukemia)'
    ],
    maxSelfMedDays: 5,
    recommendedDrugs: [
      {
        genericName: 'Klorheksidin Glukonat 0.1% – 0.2% Obat Kumur (Chlorhexidine Mouthwash)',
        brandExamples: ['Minosep Obat Kumur 0.1% / 0.2%', 'Oral-B Chlorhexidine', 'Hexadol Gargle (Hexetidine)'],
        bpomClass: 'Obat Bebas Terbatas (Biru)',
        dosageGuideline: 'Kumur-kumur dengan 10–15 mL larutan selama 30–60 detik, 2 kali sehari (pagi dan malam setelah menyikat gigi). JANGAN DITELAN.',
        dosageDetails: {
          adult: 'Kumur-kumur 10–15 mL selama 30–60 detik, 2 kali sehari (pagi dan malam sesudah menyikat gigi). LALU BUANG / JANGAN DITELAN.',
          pediatric: 'Anak > 6 tahun: 5–10 mL kumur di bawah pengawasan orang tua. Anak < 6 tahun: KONTRAINDIKASI karena belum mampu berkumur tanpa menelan.',
          infant: 'KONTRAINDIKASI MUTLAK pada bayi < 1 tahun (risiko fatal tersedak dan tertelan ke saluran cerna).',
          pregnancy: 'Kategori B (Aman Digunakan). Terapi pilihan utama untuk pregnancy gingivitis tanpa diserap ke peredaran darah sistemik.',
          geriatric: 'Kumur 10–15 mL 2 kali sehari. Sangat membantu kontrol plak pada lansia dengan keterbatasan motorik menyikat gigi.'
        },
        timing: 'Gunakan setelah menyikat gigi. Tunggu 30 menit sebelum makan atau minum.',
        cautionNotes: 'Baku emas antiseptik rongga mulut pembasmi plak bakteri. Penggunaan jangka panjang (> 2 minggu) dapat menimbulkan noda cokelat sementara pada enamel gigi yang dapat dibersihkan dokter gigi.',
        targetDrugId: 'drug-chlorhexidine'
      },
      {
        genericName: 'Povidone Iodine 1% Obat Kumur (Gargle)',
        brandExamples: ['Betadine Obat Kumur 1%', 'Povidone Iodine Gargle OGB'],
        bpomClass: 'Obat Bebas Terbatas (Biru)',
        dosageGuideline: 'Tuangkan 10–15 mL ke tutup botol, kumur dan lakukan gargle di tenggorokan selama 30 detik 3–4 kali sehari. JANGAN DITELAN.',
        dosageDetails: {
          adult: 'Tuang 10–15 mL ke tutup botol, kumur dan gargle di tenggorokan selama 30 detik 2–3 kali sehari. BUANG / JANGAN DITELAN.',
          pediatric: 'Anak > 6 tahun: 5–10 mL kumur di bawah pengawasan. Anak < 6 tahun: TIDAK DIANJURKAN karena risiko tertelan cairan iodin.',
          infant: 'KONTRAINDIKASI MUTLAK pada bayi < 1 tahun (risiko tertelan dan disfungsi tiroid akibat absorpsi iodin).',
          pregnancy: 'Kategori C (Gunakan terbatas). Hindari penggunaan harian > 7 hari agar tidak memengaruhi kelenjar tiroid janin.',
          geriatric: 'Kumur 10 mL 2 kali sehari. Pastikan pasien memiliki refleks menelan dan meludah yang baik.'
        },
        timing: 'Gunakan setelah makan atau membersihkan mulut.',
        cautionNotes: 'Antiseptik berspektrum luas. Tidak dianjurkan untuk penderita gangguan tiroid berat atau alergi iodium.',
        targetDrugId: 'drug-povidone-iodine'
      }
    ],
    nonPharmacolTherapy: [
      'Sikat gigi teratur 2 kali sehari (pagi setelah sarapan dan malam sebelum tidur) dengan sikat gigi berbulu lembut (soft) dan pasta gigi berfluoride.',
      'Gunakan benang gigi (dental floss) setiap malam untuk membersihkan plak dan sisa makanan di sela-sela gigi yang tidak terjangkau bulu sikat.',
      'Bersihkan permukaan lidah dengan pembersih lidah (tongue scraper) dari belakang ke depan, karena 80% bakteri pemicu bau mulut hidup di lapisan lidah.',
      'Minum banyak air putih untuk mencegah mulut kering (xerostomia) yang menyuburkan bakteri anaerob pembusuk.'
    ],
    contraindicatedForSelfMed: [
      'JANGAN menelan cairan obat kumur antiseptik.',
      'JANGAN menusuk atau mencongkel gusi yang bengkak dengan tusuk gigi tajam karena memasukkan bakteri patogen ke jaringan gusi lebih dalam.'
    ],
    specialPopulations: {
      pregnancyWarning: 'Gingivitis kehamilan sering terjadi akibat lonjakan hormon progesteron. Klorheksidin kumur aman digunakan secara lokal.',
      pediatricWarning: 'Hindari obat kumur pada anak di bawah 6 tahun karena refleks menelan belum sempurna.',
      geriatricWarning: 'Periksa kebersihan gigi tiruan (gigi palsu) lepasan; rendam gigi tiruan dalam larutan pembersih khusus setiap malam.'
    },
    whenToSeeDoctor: [
      'Gusi masih berdarah dan bau mulut menetap setelah 5 hari perawatan mandiri.',
      'Muncul benjolan abses bernanah atau gigi terasa goyang.',
      'Lakukan pembersihan karang gigi (scaling) rutin ke dokter gigi setiap 6 bulan sekali.'
    ],
    gemaCermatTips: [
      'DA: Beli obat kumur berlogo lingkaran biru berizin BPOM di apotek.',
      'GU: Perhatikan tanda peringatan P.No.2: Awas! Obat Keras. Hanya untuk kumur, jangan ditelan.',
      'SI: Simpan botol obat kumur tertutup rapat di tempat sejuk.',
      'BU: Jangan gunakan obat kumur yang cairan di dalamnya sudah berubah keruh atau melewati masa kedaluwarsa.'
    ]
  },
  // ============================================================================
  // 17. INFEKSI CACINGAN ANAK & DEWASA (ENTEROBIASIS & ASCARIASIS)
  // ============================================================================
  {
    id: 'swam-cacingan-anak-dewasa',
    title: 'Infeksi Cacingan Anak & Dewasa (Enterobiasis & Askariasis)',
    category: 'pediatric',
    categoryLabel: 'Kesehatan Anak (Balita)',
    iconName: 'Baby',
    quickSummary: 'Infestasi cacing parasit saluran cerna (tersering Enterobius vermicularis / cacing kremi dan Ascaris lumbricoides / cacing gelang) akibat menelan telur cacing dari tangan kotor, tanah, atau makanan yang terkontaminasi.',
    laymanKeywords: ['cacingan', 'obat cacing', 'cacing kremi', 'gatal dubur', 'cacing gelang', 'perut buncit anak', 'anak kurus', 'combantrin'],
    typicalSymptoms: [
      'Gatal intens di sekitar anus terutama pada malam hari saat cacing betina bermigrasi keluar bertelur (gejala khas cacing kremi)',
      'Anak tampak gelisah, rewel, dan sering menggaruk pantat/anus',
      'Nafsu makan menurun atau berat badan sulit naik meskipun makan banyak',
      'Terkadang terlihat cacing kecil putih menyerupai parutan kelapa pada tinja atau anus'
    ],
    redFlags: [
      'Muntah yang mengeluarkan cacing atau cacing keluar dari hidung',
      'Perut kembung membuncit keras disertai nyeri kolik hebat dan tidak bisa buang angin / BAB (indikasi ileus obstruksi cacing masif)',
      'Anak mengalami anemia berat (pucat, lemas, konjungtiva mata putih) atau gizi buruk stunting'
    ],
    maxSelfMedDays: 1,
    recommendedDrugs: [
      {
        genericName: 'Pirantel Pamoat (Pyrantel Pamoate)',
        brandExamples: ['Combantrin Tablet 125 mg / 250 mg', 'Combantrin Sirup 125 mg/5 mL', 'Konvermex'],
        bpomClass: 'Obat Bebas (Hijau)',
        dosageGuideline: 'Dosis tunggal 10 mg/kgBB: Anak 2–6 th: 1 tablet 125 mg (atau 5 mL sirup). Anak 6–12 th: 2 tablet 125 mg (atau 1 tablet 250 mg / 10 mL sirup). Dewasa (> 12 th): 3–4 tablet 125 mg (atau 1.5–2 tablet 250 mg) diminum sekaligus dalam 1 kali minum.',
        dosageDetails: {
          adult: '3–4 tablet 125 mg (atau 1.5–2 tablet 250 mg) diminum sekaligus (dosis tunggal 10 mg/kgBB, maksimal 1000 mg) malam hari.',
          pediatric: 'Dosis tunggal 10 mg/kgBB: Anak 2–6 th: 1 tab 125 mg (atau 5 mL sirup 125 mg/5 mL); Anak 6–12 th: 2 tab 125 mg (atau 10 mL sirup).',
          infant: 'KONTRAINDIKASI MUTLAK swamedikasi pada bayi < 2 tahun (terutama < 6 bulan). Terapi cacingan bayi wajib melalui resep dan pemantauan dokter anak.',
          pregnancy: 'Kategori C. KONTRAINDIKASI MUTLAK pada Trimester 1 (potensi teratogenik). Trimester 2 & 3 hanya bila infestasi berat atas izin dokter spesialis kandungan.',
          geriatric: 'Dosis tunggal 10 mg/kgBB. Aman tanpa penyesuaian dosis khusus, waspadai bila ada gangguan hepar berat.'
        },
        timing: 'Diminum sekaligus (dosis tunggal) sebelum atau sesudah makan, dianjurkan malam hari sebelum tidur.',
        cautionNotes: 'Melumpuhkan cacing sehingga terbawa keluar bersama tinja tanpa perlu obat pencahar. Dianjurkan diulang 1 kali lagi setelah 2 minggu pada cacing kremi untuk membasmi telur yang baru menetas.',
        targetDrugId: 'drug-pyrantel'
      },
      {
        genericName: 'Mebendazol 500 mg / Albendazol 400 mg',
        brandExamples: ['Vermox 500 mg', 'Albendazole OGB 400 mg'],
        bpomClass: 'Obat Wajib Apotek (OWA)',
        dosageGuideline: 'Dewasa & anak > 2 tahun: 1 tablet 500 mg (Mebendazol) atau 400 mg (Albendazol) kunyah dosis tunggal.',
        dosageDetails: {
          adult: '1 tablet 500 mg (Mebendazol) atau 400 mg (Albendazol) dikunyah atau ditelan dosis tunggal sesudah makan.',
          pediatric: 'Anak > 2 tahun: 1 tablet kunyah dosis tunggal (Mebendazol 500 mg atau Albendazol 400 mg). Anak 1–2 tahun: Albendazol 200 mg dosis tunggal atas saran dokter.',
          infant: 'KONTRAINDIKASI MUTLAK pada bayi < 1 tahun (risiko kejang/neurotoksisitas dan belum matangnya fungsi hepar).',
          pregnancy: 'Kategori C. KONTRAINDIKASI MUTLAK pada Trimester 1 (potensi teratogenesis). Hindari swamedikasi selama kehamilan & menyusui.',
          geriatric: 'Dosis tunggal 1 tablet. Aman tanpa interaksi sedatif atau kardiovaskular.'
        },
        timing: 'Dapat dikunyah atau ditelan bersama air.',
        cautionNotes: 'Obat cacing berspektrum luas. Sesuai DOWA No. 1, penyerahan Mebendazol oleh Apoteker maksimal 6 tablet tanpa resep dokter.',
        targetDrugId: 'drug-mebendazole'
      }
    ],
    nonPharmacolTherapy: [
      'Cuci tangan dengan sabun dan air mengalir sebelum makan, sebelum menyiapkan makanan, dan sesudah buang air besar.',
      'Gunting kuku anak secara rutin dan pendek, cegah kebiasaan menghisap jari atau menggigit kuku.',
      'Selalu gunakan alas kaki (sandal/sepatu) saat bermain di luar rumah atau menginjak tanah.',
      'Cuci pakaian dalam, celana tidur, dan sprei penderita dengan air panas untuk mematikan telur cacing kremi yang menempel.',
      'Obati SELURUH ANGGOTA KELUARGA serumah pada saat yang sama jika ada anggota keluarga yang positif cacing kremi.'
    ],
    contraindicatedForSelfMed: [
      'TIDAK DIANJURKAN untuk anak usia di bawah 1–2 tahun tanpa pengawasan dokter.',
      'JANGAN memberikan obat cacing pada ibu hamil trimester pertama.'
    ],
    specialPopulations: {
      pregnancyWarning: 'KONTRAINDIKASI pada kehamilan trimester pertama (potensi teratogenik). Bila sangat perlu pada trimester 2-3 wajib atas anjuran dokter spesialis kandungan.',
      pediatricWarning: 'Pada anak usia 1-2 tahun, dosis Albendazol adalah 200 mg dosis tunggal. Di bawah 1 tahun wajib konsultasi dokter.',
      geriatricWarning: 'Aman diberikan sesuai dosis dewasa normal.'
    },
    whenToSeeDoctor: [
      'Gejala tidak mereda setelah 2 minggu pemberian obat cacing.',
      'Anak menunjukkan tanda anemia, lemas, atau perut membesar tidak normal.'
    ],
    gemaCermatTips: [
      'DA: Beli obat cacing terdaftar BPOM di apotek resmi.',
      'GU: Pastikan dosis sesuai berat badan dan usia anak; tidak perlu puasa atau minum obat pencahar.',
      'SI: Simpan sediaan sirup dan tablet di tempat kering di bawah 30°C.',
      'BU: Buang sisa sirup yang telah dibuka lebih dari 1 bulan.'
    ]
  },
  // ============================================================================
  // 18. RHINITIS ALERGI & BERSIN PAGI HARI (ALLERGIC RHINITIS)
  // ============================================================================
  {
    id: 'swam-rhinitis-alergi',
    title: 'Rhinitis Alergi & Bersin Pagi Hari (Allergic Rhinitis)',
    category: 'respiratory',
    categoryLabel: 'Flu, Batuk & THT',
    iconName: 'CloudRain',
    quickSummary: 'Reaksi inflamasi saluran napas atas yang diperantarai antibodi IgE akibat paparan alergen inhalan (seperti tungau debu rumah, serpihan kulit hewan, spora jamur, atau udara dingin), memicu bersin beruntun dan ingus encer bening tanpa demam.',
    laymanKeywords: ['bersin pagi', 'rhinitis alergi', 'hidung meler', 'hidung gatal', 'hidung tersumbat alergi', 'ingus bening', 'alergi debu', 'alergi dingin'],
    typicalSymptoms: [
      'Bersin-bersin berturut-turut (> 4-5 kali) terutama saat bangun tidur di pagi hari atau terpapar debu/dingin',
      'Hidung meler dengan ingus encer, cair, dan bening (rinorea encer)',
      'Hidung tersumbat bergantian dan rasa gatal di langit-langit mulut atau mata berair',
      'TIDAK DISERTAI DEMAM, batuk dahak kental, atau pegal linu meriang (membedakannya dari flu/common cold infeksi)'
    ],
    redFlags: [
      'Ingus berubah menjadi kental kuning-kehijauan berbau busuk disertai nyeri tekan di pipi/dahi (indikasi sinusitis bakteri akut)',
      'Hidung tersumbat hanya pada satu sisi saja (unilateral) menetap atau disertai mimisan berulang',
      'Disertai sesak napas berat berbunyi mengi / bengek (indikasi asma bronkial yang teraktivasi)'
    ],
    maxSelfMedDays: 3,
    recommendedDrugs: [
      {
        genericName: 'Cetirizine 10 mg / Loratadine 10 mg',
        brandExamples: ['Incidal-OD', 'Ryvel', 'Cerini', 'Claritine', 'Loratadine OGB'],
        bpomClass: 'Obat Wajib Apotek (OWA)',
        dosageGuideline: 'Dewasa & anak > 12 th: 1 tablet (10 mg) diminum 1 kali sehari. Cetirizine diminum malam hari, Loratadine dapat diminum pagi hari.',
        dosageDetails: {
          adult: '1 tablet (10 mg) diminum 1 kali sehari sesudah makan (Cetirizine dianjurkan malam hari, Loratadine pagi hari).',
          pediatric: 'Anak 6–12 tahun: 5 mg 2x sehari atau 10 mg 1x sehari (sirup/tablet). Anak 2–6 th: 2.5 mg 2x sehari (sirup drops).',
          infant: 'Bayi 6–12 bulan: 2.5 mg drops 1x sehari HANYA atas instruksi dokter. Bayi < 6 bulan: KONTRAINDIKASI untuk swamedikasi mandiri.',
          pregnancy: 'Kategori B (Pilihan Antihistamin Paling Aman). Loratadine & Setirizin terbukti aman dan minim sedasi selama kehamilan & menyusui.',
          geriatric: 'Dosis awal 5 mg sekali sehari. Pilihan aman untuk lansia tanpa risiko efek antikolinergik seperti CTM.'
        },
        timing: 'Diminum sesudah makan.',
        cautionNotes: 'Antihistamin generasi kedua yang tidak menyebabkan kantuk berat (non-sedating / low-sedating). Sesuai DOWA No. 3, penyerahan oleh Apoteker maksimal 10 tablet.',
        targetDrugId: 'drug-cetirizine'
      },
      {
        genericName: 'Semprot Hidung Larutan Saline Isotonik (Nasal Saline Spray / NaCl 0.9%)',
        brandExamples: ['Sterimar Nasal Spray', 'Breathy Nasal Spray', 'Aqua Maris', 'Bigroot Nose Hygiene'],
        bpomClass: 'Obat Bebas (Hijau)',
        dosageGuideline: 'Semprotkan 1 - 2 semprotan ke masing-masing lubang hidung 2 - 3 kali sehari.',
        dosageDetails: {
          adult: 'Semprotkan 1–2 semprotan ke masing-masing lubang hidung 2–3 kali sehari saat hidung tersumbat atau setelah terpapar debu.',
          pediatric: 'Anak 1–12 tahun: 1–2 semprot/tetes ke tiap lubang hidung 2–3 kali sehari.',
          infant: 'Bayi < 1 tahun: 1–2 tetes sediaan drops NaCl 0.9% (Breathy Drops) ke tiap lubang hidung sebelum menyusu dan sebelum tidur (100% aman).',
          pregnancy: 'Kategori A (100% Aman). Terapi cuci hidung lini pertama paling aman sepanjang masa kehamilan.',
          geriatric: 'Semprotkan sesuai kebutuhan. Sangat aman dan tidak memicu interaksi dengan obat darah tinggi atau jantung.'
        },
        timing: 'Gunakan saat hidung terasa tersumbat atau setelah terpapar debu.',
        cautionNotes: 'Membilas dan membersihkan partikel alergen debu dari mukosa hidung, melembabkan saluran napas, dan mengecilkan edema tanpa risiko efek rebound (rhinitis medicamentosa). Sangat aman digunakan jangka panjang.',
        targetDrugId: 'drug-saline'
      }
    ],
    nonPharmacolTherapy: [
      'HINDARI ALERGEN PEMICU: Cuci sprei dan sarung bantal minimal seminggu sekali dengan air hangat (> 55°C) untuk membunuh tungau debu rumah.',
      'Gunakan masker saat membersihkan rumah atau menyapu debu.',
      'Hindari penggunaan karpet berbulu tebal atau boneka di dalam kamar tidur anak penderita alergi.',
      'Jaga ventilasi udara kamar tetap kering dan terpapar sinar matahari untuk mencegah kelembapan dan pertumbuhan spora jamur.',
      'Hindari paparan asap rokok dan wewangian aerosol semprot yang tajam.'
    ],
    contraindicatedForSelfMed: [
      'JANGAN menggunakan tetes/semprot hidung dekongestan topikal (seperti Oksimetazolin / Iliadin) lebih dari 3–5 hari berturut-turut karena berisiko memicu rhinitis medikamentosa (hidung tersumbat permanen yang semakin parah).',
      'JANGAN membeli antibiotik untuk alergi karena alergi BUKAN disebabkan oleh infeksi bakteri.'
    ],
    specialPopulations: {
      pregnancyWarning: 'Cuci hidung semprot saline adalah pilihan utama yang 100% aman. Loratadine dan Cetirizine tergolong Kategori B (cukup aman bila disetujui dokter). Hindari dekongestan oral Pseudoefedrin pada trimester 1.',
      pediatricWarning: 'Gunakan Breathy drop/spray saline untuk bayi dan anak. Sediaan sirup Cetirizine tersedia untuk anak > 2 tahun.',
      geriatricWarning: 'Prioritaskan antihistamin generasi kedua untuk menghindari efek samping antikolinergik (mulut kering, retensi urin, bingung) pada lansia.'
    },
    whenToSeeDoctor: [
      'Gejala alergi tidak membaik setelah 3 hari pengobatan mandiri.',
      'Gejala sangat mengganggu tidur dan aktivitas kerja harian (memerlukan kortikosteroid nasal spray resep dokter).',
      'Timbul nyeri wajah atau sesak napas mengi.'
    ],
    gemaCermatTips: [
      'DA: Beli obat antihistamin dan semprot saline di apotek resmi.',
      'GU: Embuskan napas keluar sebelum menyemprotkan saline, dan posisikan kepala tegak bukan menengadah ke belakang.',
      'SI: Simpan botol semprot saline pada suhu ruangan dan bersihkan ujung nosel setelah digunakan.',
      'BU: Buang semprot hidung bila botol telah terbuka lebih dari 3–6 bulan.'
    ]
  },
  // ============================================================================
  // 9. KESEHATAN WANITA & REPRODUKSI (WOMEN'S HEALTH)
  // ============================================================================
  {
    id: 'swam-keputihan-kandidiasis',
    title: 'Keputihan Fisiologis & Jamur Ringan (Kandidiasis Vulvovaginal)',
    category: 'womens-health',
    categoryLabel: 'Kesehatan Wanita',
    iconName: 'Heart',
    quickSummary: 'Keluarnya cairan putih kental seperti butiran susu atau keju cottage dari kewanitaan disertai rasa gatal atau perih, tanpa bau busuk menyengat.',
    laymanKeywords: ['keputihan', 'gatal vagina', 'jamur vagina', 'kewanitaan', 'candidiasis', 'gatal selangkangan'],
    typicalSymptoms: [
      'Cairan putih pekat bergumpal seperti keju cottage / endapan susu',
      'Rasa gatal, panas, atau iritasi pada area bibir kemaluan (vulva)',
      'Tidak berbau busuk menyengat (hanya sedikit asam normal)',
      'Sensasi sedikit perih saat buang air kecil atau saat bersenggama'
    ],
    redFlags: [
      'Cairan kewanitaan berbau busuk amis atau anyir menyengat (curiga Vaginosis Bakterial)',
      'Cairan berwarna kuning kehijauan atau berbusa banyak (curiga Trikomoniasis / IMS)',
      'Disertai demam tinggi, menggigil, atau nyeri panggul / perut bawah hebat (tanda PID)',
      'Terjadi perdarahan abnormal di luar siklus menstruasi',
      'Pasien sedang hamil trimester pertama (wajib evaluasi dokter spesialis obstetri)'
    ],
    maxSelfMedDays: 3,
    recommendedDrugs: [
      {
        genericName: 'Klotrimazol Vaginal Tablet 100 mg / Krim 1%',
        brandExamples: ['Canesten Vaginal', 'Canesten Krim', 'Cotriderm'],
        bpomClass: 'Obat Wajib Apotek (OWA)',
        isFirstLine: true,
        owaDetails: {
          owaNumber: 1,
          skMenkes: 'Kepmenkes RI No. 347/Menkes/SK/VII/1990 (DOWA 1)',
          maxDispense: 'Maksimal 1 tube krim / 1 strip (6 tablet vaginal)',
          patientNotesRequired: true,
          clinicalConditions: 'Hanya untuk pengobatan ulangan kandidiasis vulvovaginal yang pernah didiagnosis awal oleh dokter.'
        },
        comorbidWarnings: [
          { comorbid: 'hamil', status: 'hati-hati', note: 'Hindari penggunaan aplikator plastik keras pada kehamilan; masukkan tablet secara manual dengan jari tangan bersih.' },
          { comorbid: 'diabetes', status: 'hati-hati', note: 'Kadar gula darah tinggi memicu kekambuhan jamur rekuren; kontrol glikemik ketat diperlukan.' },
          { comorbid: 'maag', status: 'aman', note: 'Sediaan topikal lokal tanpa efek iritasi lambung.' }
        ],
        dosageGuideline: '1 tablet vaginal 100 mg dimasukkan malam hari sebelum tidur selama 6 malam berturut-turut, atau krim dioleskan tipis 2–3 kali sehari.',
        dosageDetails: {
          adult: '1 tablet vaginal dimasukkan jauh ke dalam rongga kewanitaan sebelum tidur malam selama 6 malam berturut-turut.',
          pediatric: 'KONTRAINDIKASI pada anak-anak di bawah 12 tahun tanpa indikasi spesifik dokter.',
          pregnancy: 'Kategori B. Aman digunakan pada trimester 2 dan 3, namun HINDARI aplikator; gunakan jari tangan yang telah dicuci bersih.',
          geriatric: 'Dosis sama dengan dewasa. Perhatikan atrofi mukosa pasca-menopause.'
        },
        timing: 'Gunakan malam hari menjelang tidur dalam posisi berbaring telentang dengan kedua lutut ditekuk.',
        cautionNotes: 'Gunakan pembalut tipis untuk menampung residu tablet yang luruh. Jangan melakukan hubungan seksual selama masa terapi.',
        targetDrugId: 'drug-clotrimazole'
      },
      {
        genericName: 'Nistatin Ovula / Vaginal Tablet 100.000 IU',
        brandExamples: ['Flagystatin (kombinasi)', 'Nystatin Vaginal', 'Candistatin'],
        bpomClass: 'Obat Wajib Apotek (OWA)',
        isFirstLine: false,
        owaDetails: {
          owaNumber: 1,
          skMenkes: 'Kepmenkes RI No. 347/Menkes/SK/VII/1990 (DOWA 1)',
          maxDispense: 'Maksimal 1 strip (6 ovula)',
          patientNotesRequired: true,
          clinicalConditions: 'Antijamur polien spesifik candida untuk pengobatan keputihan jamur berulang.'
        },
        comorbidWarnings: [
          { comorbid: 'hamil', status: 'aman', note: 'Tidak diserap ke dalam peredaran darah janin (Kategori B).' },
          { comorbid: 'diabetes', status: 'hati-hati', note: 'Periksa kepatuhan diet rendah gula bila keputihan berulang > 4 kali setahun.' }
        ],
        dosageGuideline: '1 ovula dimasukkan ke vagina malam hari selama 7–14 hari.',
        dosageDetails: {
          adult: '1 ovula (100.000 IU) dimasukkan dalam posisi telentang sebelum tidur malam selama 7–14 malam.',
          pediatric: 'Tidak direkomendasikan untuk anak-anak.',
          pregnancy: 'Aman untuk ibu hamil trimester 2 dan 3 atas petunjuk nakes.',
          geriatric: 'Gunakan secara higienis sesuai petunjuk.'
        },
        timing: 'Dimasukkan menjelang tidur malam hari.',
        cautionNotes: 'Simpan di tempat sejuk (kulkas pintu bawah bukan freezer) agar sediaan ovula tetap padat dan mudah dimasukkan.'
      }
    ],
    nonPharmacolTherapy: [
      'Gunakan pakaian dalam berbahan katun 100% yang longgar dan menyerap keringat.',
      'Basuh area kewanitaan selalu dari arah DEPAN ke BELAKANG dengan air bersih mengalir.',
      'Keringkan area genital dengan handuk bersih khusus sebelum mengenakan pakaian dalam.',
      'HINDARI penggunaan sabun pembersih berpewangi tajam (douching) karena mematikan bakteri baik Lactobacillus penghasil asam protektif.'
    ],
    contraindicatedForSelfMed: [
      'JANGAN mengonsumsi antibiotik oral (seperti Amoksisilin/Ciprofloxacin) secara mandiri karena mematikan flora normal dan memperparah infeksi jamur.',
      'JANGAN melakukan douching vagina agresif saat mengalami keputihan.'
    ],
    specialPopulations: {
      pregnancyWarning: 'Klotrimazol dan Nistatin topikal aman pada trimester 2–3, namun DILARANG menggunakan stik aplikator karena risiko mekanik pada leher rahim.',
      pediatricWarning: 'Keputihan pada anak balita membutuhkan rujukan dokter anak untuk menepis benda asing atau vulvovaginitis non-spesifik.',
      geriatricWarning: 'Pada wanita menopause, keputihan sering disertai atrofi vagina yang memerlukan terapi hormon lokal dari dokter Sp.OG.'
    },
    whenToSeeDoctor: [
      'Gejala gatal dan keputihan tidak berkurang setelah 3 hari swamedikasi.',
      'Cairan berubah warna menjadi hijau pekat, berbusa, atau berbau busuk menyengat.',
      'Timbul luka lepuh melepuh di bibir kemaluan (curiga Herpes Genitalis).'
    ],
    gemaCermatTips: [
      'DA: Beli sediaan ovula/vaginal tablet hanya di Apotek resmi dengan segel utuh.',
      'GU: Cuci tangan dengan sabun sebelum dan sesudah memasukkan obat vaginal.',
      'SI: Simpan sediaan ovula pada suhu sejuk terhindar dari panas agar tidak meleleh.',
      'BU: Buang aplikator sekali pakai pada tempat sampah tertutup.'
    ]
  },
  {
    id: 'swam-morning-sickness',
    title: 'Mual Muntah Trimester Pertama Kehamilan (Morning Sickness Ringan)',
    category: 'womens-health',
    categoryLabel: 'Kesehatan Wanita',
    iconName: 'Heart',
    quickSummary: 'Sensasi mual dan muntah ringan pada ibu hamil di pagi hari atau saat mencium aroma tertentu pada usia kehamilan minggu ke-6 hingga ke-12.',
    laymanKeywords: ['mual hamil', 'muntah hamil', 'morning sickness', 'ngidam mual', 'eneg hamil', 'hamil muda'],
    typicalSymptoms: [
      'Mual terutama saat bangun tidur di pagi hari atau saat perut kosong',
      'Sensitif terhadap aroma masakan tertentu, asap rokok, atau parfum',
      'Muntah 1–2 kali sehari tanpa tanda lemas berat',
      'Nafsu makan sedikit berkurang namun masih bisa minum cairan'
    ],
    redFlags: [
      'Muntah hebat lebih dari 4–5 kali sehari (Hiperemesis Gravidarum)',
      'Tidak ada cairan atau makanan yang dapat masuk sama sekali selama > 12 jam',
      'Air seni berwarna sangat gelap pekat atau tidak buang air kecil > 8 jam',
      'Berat badan turun drastis lebih dari 5% dari berat badan sebelum hamil',
      'Mata cekung, kulit sangat kering, pusing berputar saat berdiri mendadak'
    ],
    maxSelfMedDays: 3,
    recommendedDrugs: [
      {
        genericName: 'Piridoksin HCl (Vitamin B6) 10–25 mg',
        brandExamples: ['Vitamin B6 Kimia Farma', 'Pyridoxine IPI', 'Anvomer B6 (kombinasi)'],
        bpomClass: 'Obat Bebas (Hijau)',
        isFirstLine: true,
        comorbidWarnings: [
          { comorbid: 'hamil', status: 'aman', note: 'Terapi lini pertama resmi menurut American College of Obstetricians and Gynecologists (ACOG) untuk mual kehamilan (Kategori A).' },
          { comorbid: 'maag', status: 'aman', note: 'Aman untuk mukosa lambung pada dosis terapi anjuran.' },
          { comorbid: 'hipertensi', status: 'aman', note: 'Tidak memengaruhi tekanan darah.' }
        ],
        dosageGuideline: '10–25 mg diminum 3 kali sehari (tiap 8 jam). Maksimal 100 mg per hari.',
        dosageDetails: {
          adult: '10–25 mg tiap 8 jam bila mual.',
          pediatric: 'Hanya untuk indikasi defisiensi vitamin atas anjuran dokter.',
          pregnancy: 'Kategori A. Sangat aman dan merupakan lini pertama terapi farmakologi mual kehamilan.',
          geriatric: '10–25 mg per hari sesuai kebutuhan nutrisi.'
        },
        timing: 'Diminum 30 menit sebelum makan atau bersama sedikit biskuit kering.',
        cautionNotes: 'Hindari konsumsi vitamin B6 melebihi 100 mg/hari jangka panjang untuk menghindari risiko neuropati sensorik.',
        targetDrugId: 'drug-vitamin-b6'
      }
    ],
    nonPharmacolTherapy: [
      'Makan dalam porsi kecil namun sering (5–6 kali sehari) agar lambung tidak pernah benar-benar kosong.',
      'Konsumsi biskuit krakers tawar kering atau roti panggang sebelum beranjak dari ranjang di pagi hari.',
      'Minum air rebusan jahe hangat atau konsumsi permen jahe alami untuk meredakan kram lambung.',
      'Hindari makanan berminyak, bersantan pekat, atau berbau bumbu tajam yang memicu rasa eneg.'
    ],
    contraindicatedForSelfMed: [
      'JANGAN mengonsumsi obat antiemetik keras (seperti Ondansetron atau Metoklopramid) tanpa resep dan pengawasan dokter spesialis kandungan.',
      'JANGAN berpuasa atau membiarkan perut kosong lebih dari 3–4 jam di siang hari.'
    ],
    specialPopulations: {
      pregnancyWarning: 'Vitamin B6 10–25 mg adalah terapi farmakologis lini pertama yang paling aman selama kehamilan.',
      pediatricWarning: 'Tidak berlaku untuk populasi anak.',
      geriatricWarning: 'Tidak berlaku untuk populasi geriatri.'
    },
    whenToSeeDoctor: [
      'Muntah bertambah sering (> 5 kali sehari) sehingga tidak ada cairan yang masuk.',
      'Berat badan ibu menurun drastis dalam 1 minggu.',
      'Badan terasa sangat lemas dan pandangan berkunang-kunang.'
    ],
    gemaCermatTips: [
      'DA: Beli tablet vitamin B6 di apotek resmi.',
      'GU: Gunakan dosis 10–25 mg tiap 8 jam, jangan melebihi dosis anjuran.',
      'SI: Simpan tablet di tempat kering dan sejuk terhindar dari panas.',
      'BU: Buang sediaan bila tablet telah berubah warna atau hancur.'
    ]
  },
  {
    id: 'swam-sindrom-pms',
    title: 'Sindrom Pra-Menstruasi (PMS, Begah & Nyeri Payudara Ringan)',
    category: 'womens-health',
    categoryLabel: 'Kesehatan Wanita',
    iconName: 'Heart',
    quickSummary: 'Kumpulan keluhan fisik dan emosional seperti perut begah, payudara mengencang nyeri, dan lelah yang muncul 1–2 minggu sebelum siklus haid.',
    laymanKeywords: ['pms', 'nyeri payudara', 'haid begah', 'mood swing haid', 'sebelum haid', 'badan pegal haid'],
    typicalSymptoms: [
      'Payudara terasa kencang, bengkak, dan sedikit nyeri saat tersentuh (mastalgia ringan)',
      'Perut terasa begah, kembung, atau menahan cairan',
      'Sakit kepala ringan atau pegal pada pinggang bawah',
      'Perubahan suasana hati (mood swing) dan kelelahan ringan menjelang haid'
    ],
    redFlags: [
      'Gejala depresi berat, keputusasaan ekstrem, atau dorongan melukai diri (PMDD / Premenstrual Dysphoric Disorder)',
      'Nyeri panggul hebat yang tidak membaik dan semakin parah tiap bulan (curiga Endometriosis)',
      'Terdapat benjolan keras soliter pada payudara yang tidak mengecil pasca menstruasi selesai',
      'Perdarahan banyak di luar siklus menstruasi normal'
    ],
    maxSelfMedDays: 3,
    recommendedDrugs: [
      {
        genericName: 'Kalsium Karbonat 500 mg + Vitamin D3',
        brandExamples: ['Cal-95', 'CDR', 'Calcichew', 'Calporis'],
        bpomClass: 'Suplemen Kesehatan (POM SD)',
        isFirstLine: true,
        comorbidWarnings: [
          { comorbid: 'ginjal', status: 'hati-hati', note: 'Hindari dosis kalsium tinggi pada riwayat batu ginjal kalsium oksalat.' },
          { comorbid: 'maag', status: 'aman', note: 'Kalsium karbonat juga berfungsi sebagai antasida pengikat asam lambung ringan.' }
        ],
        dosageGuideline: '500–1000 mg kalsium elemental per hari.',
        dosageDetails: {
          adult: '500–1000 mg per hari diminum bersama atau sesudah makan.',
          pediatric: 'Sesuai kebutuhan RDA anak.',
          pregnancy: 'Aman dan dianjurkan memenuhi kebutuhan kalsium maternal (1000–1200 mg/hari).',
          geriatric: 'Sangat baik untuk pencegahan osteoporosis.'
        },
        timing: 'Diminum bersama makanan utama untuk absorpsi optimal.',
        cautionNotes: 'Beri jeda 2 jam bila sedang mengonsumsi suplemen zat besi atau antibiotik tetrasiklin/kuinolon.'
      },
      {
        genericName: 'Parasetamol 500 mg',
        brandExamples: ['Panadol', 'Sanmol', 'Biogesic'],
        bpomClass: 'Obat Bebas (Hijau)',
        isFirstLine: false,
        comorbidWarnings: [
          { comorbid: 'maag', status: 'aman', note: 'Pilihan analgesik paling aman untuk nyeri payudara tanpa memicu iritasi lambung.' },
          { comorbid: 'hipertensi', status: 'aman', note: 'Aman untuk penderita darah tinggi.' }
        ],
        dosageGuideline: '500 mg tiap 6–8 jam bila pegal atau nyeri payudara mengganggu.',
        dosageDetails: {
          adult: '500 mg tiap 6–8 jam (maksimal 4000 mg/24 jam).',
          pediatric: 'Tidak diindikasikan untuk PMS anak.',
          pregnancy: 'Kategori B.',
          geriatric: '500 mg tiap 8 jam.'
        },
        timing: 'Diminum sesudah makan.',
        cautionNotes: 'Gunakan hanya bila nyeri payudara atau pegal pinggang terasa mengganggu.'
      }
    ],
    nonPharmacolTherapy: [
      'Kurangi asupan garam / makanan asin tinggi natrium 1–2 minggu sebelum haid untuk mencegah retensi cairan dan begah.',
      'Gunakan bra yang nyaman dan suportif tanpa kawat penekan saat payudara terasa kencang.',
      'Batasi konsumsi kafein (kopi, teh pekat, minuman berenergi) dan cokelat yang dapat memperparah sensitivitas payudara.',
      'Lakukan olahraga aerobik ringan secara teratur (jalan santai, yoga, bersepeda santai).'
    ],
    contraindicatedForSelfMed: [
      'JANGAN mengonsumsi obat diuretik peluruh kencing keras tanpa resep dokter.',
      'JANGAN mengonsumsi obat penenang tidur secara mandiri.'
    ],
    specialPopulations: {
      pregnancyWarning: 'Bila haid terlambat disertai mual, lakukan tes kehamilan mandiri (test pack).',
      pediatricWarning: 'Tidak relevan untuk anak pra-pubertas.',
      geriatricWarning: 'Tidak terjadi pada wanita pasca menopause.'
    },
    whenToSeeDoctor: [
      'Gejala emosional sangat parah mengganggu pekerjaan dan hubungan sosial.',
      'Ditemukan benjolan padat terlokalisir pada payudara.',
      'Nyeri panggul hebat yang tidak tertahankan saat haid.'
    ],
    gemaCermatTips: [
      'DA: Beli suplemen kalsium dan parasetamol di apotek terpercaya.',
      'GU: Minum suplemen kalsium bersama makanan untuk penyerapan optimal.',
      'SI: Simpan pada suhu kamar di tempat kering.',
      'BU: Buang bila telah melewati tanggal kadaluarsa.'
    ]
  },

  // ============================================================================
  // 10. PROTOKOL TAMBAHAN KULIT, NYERI, MULUT, ANAK & KEBUGARAN
  // ============================================================================
  {
    id: 'swam-ketombe-seboroik',
    title: 'Ketombe Membandel & Kulit Kepala Gatal (Dermatitis Seboroik Ringan)',
    category: 'skin-allergy',
    categoryLabel: 'Kulit & Alergi',
    iconName: 'Sparkles',
    quickSummary: 'Serpihan putih keabuan atau kekuningan berminyak pada kulit kepala yang disertai rasa gatal, dipicu kolonisasi jamur Malassezia dan kelebihan sebum.',
    laymanKeywords: ['ketombe', 'kulit kepala gatal', 'ketombe rontok', 'kulit kepala berminyak', 'seboroik', 'ketombe putih'],
    typicalSymptoms: [
      'Serpihan putih atau kekuningan berminyak yang berjatuhan di kerah baju atau bahu',
      'Rasa gatal pada kulit kepala yang semakin hebat saat berkeringat',
      'Kulit kepala tampak sedikit kemerahan atau bersisik halus',
      'Rambut terasa lepek dan berminyak'
    ],
    redFlags: [
      'Muncul keropeng kuning bernanah tebal dan berbau (infeksi bakteri sekunder)',
      'Kerontokan rambut berpola pitak melingkar (curiga Tinea Kapitis jamur rambut)',
      'Kemerahan dan sisik tebal meluas ke seluruh dahi, alis, belakang telinga, dan dada',
      'Tidak ada perbaikan sama sekali setelah 2–3 minggu pemakaian teratur'
    ],
    maxSelfMedDays: 7,
    recommendedDrugs: [
      {
        genericName: 'Sampo Ketokonazol 2%',
        brandExamples: ['Nizoral Sampo', 'Ketomed 2%', 'Fungasol Sampo'],
        bpomClass: 'Obat Wajib Apotek (OWA)',
        isFirstLine: true,
        owaDetails: {
          owaNumber: 2,
          skMenkes: 'Kepmenkes RI No. 924/Menkes/SK/X/1993 (DOWA 2)',
          maxDispense: 'Maksimal 1 botol (100 mL)',
          patientNotesRequired: true,
          clinicalConditions: 'Dermatitis seboroik dan ketombe membandel; gunakan 2 kali seminggu selama 2–4 minggu.'
        },
        comorbidWarnings: [
          { comorbid: 'hamil', status: 'aman', note: 'Absorpsi sistemik melalui kulit kepala sangat minimal; aman pada penggunaan bilas.' },
          { comorbid: 'asma', status: 'aman', note: 'Hindari menghirup busa sampo.' }
        ],
        dosageGuideline: 'Gunakan keramas 2 kali seminggu selama 2–4 minggu. Diamkan busa 3–5 menit sebelum dibilas bersih.',
        dosageDetails: {
          adult: 'Keramas 2 kali seminggu, diamkan busa 3–5 menit di kulit kepala, lalu bilas hingga bersih.',
          pediatric: 'Tidak dianjurkan untuk anak < 12 tahun tanpa petunjuk dokter spesialis kulit.',
          pregnancy: 'Kategori C (topikal). Absorpsi sistemik sangat kecil, relatif aman bila dibilas bersih.',
          geriatric: 'Gunakan sesuai anjuran dewasa.'
        },
        timing: 'Gunakan saat mandi keramas, diamkan 3–5 menit agar zat antijamur bekerja membunuh Malassezia.',
        cautionNotes: 'Hindari kontak dengan mata. Bila terkena mata, segera bilas dengan air bersih mengalir.',
        targetDrugId: 'drug-ketoconazole'
      },
      {
        genericName: 'Selenium Sulfida 1%–1.8%',
        brandExamples: ['Selsun Blue', 'Selsun Yellow', 'Selsun 7 Flowers'],
        bpomClass: 'Obat Bebas Terbatas (Biru)',
        isFirstLine: false,
        dosageGuideline: 'Gunakan keramas 2 kali seminggu. Kocok botol sebelum digunakan.',
        dosageDetails: {
          adult: 'Keramas 2 kali seminggu, diamkan 2–3 menit sebelum dibilas.',
          pediatric: 'Gunakan dengan hati-hati pada remaja > 12 tahun.',
          pregnancy: 'Gunakan secukupnya dan bilas hingga bersih.',
          geriatric: 'Gunakan sesuai petunjuk.'
        },
        timing: 'Gunakan saat mandi keramas.',
        cautionNotes: 'Lepas perhiasan logam sebelum keramas karena selenium sulfida dapat memudarkan kilau logam mulia.'
      }
    ],
    nonPharmacolTherapy: [
      'Jangan menggaruk kulit kepala dengan kuku tajam karena memicu luka lecet dan infeksi bakteri sekunder.',
      'Hindari penggunaan produk penata rambut berminyak (minyak rambut pomade padat, wax) selama pengobatan.',
      'Keramas secara teratur setelah berolahraga atau berkeringat banyak.',
      'Kelola stres psikologis dan tidur cukup, karena stres memicu lonjakan produksi hormon sebum kulit kepala.'
    ],
    contraindicatedForSelfMed: [
      'JANGAN menggaruk keras kulit kepala hingga berdarah.',
      'JANGAN mengoleskan salep steroid keras tanpa resep dokter ke kulit kepala.'
    ],
    specialPopulations: {
      pregnancyWarning: 'Sampo antijamur ketokonazol/selenium sulfida aman digunakan karena langsung dibilas bersih.',
      pediatricWarning: 'Pada bayi dengan kerak kepala kekuningan (Cradle Cap), gunakan baby oil hangat dan sisir halus, bukan sampo ketokonazol.',
      geriatricWarning: 'Gunakan sampo pelembap bila kulit kepala terasa sangat kering.'
    },
    whenToSeeDoctor: [
      'Kulit kepala membengkak merah dan mengeluarkan nanah.',
      'Muncul kebotakan berpola pitak bulat.',
      'Ketombe tidak membaik setelah 4 minggu pengobatan.'
    ],
    gemaCermatTips: [
      'DA: Beli sampo antijamur berizin BPOM di apotek resmi.',
      'GU: Diamkan busa selama 3–5 menit agar obat meresap efektif ke folikel.',
      'SI: Simpan botol tertutup rapat pada suhu kamar.',
      'BU: Buang bila cairan sampo memisah dan berbau menyengat.'
    ]
  },
  {
    id: 'swam-eksim-dermatitis-kontak',
    title: 'Eksim Ringan & Dermatitis Kontak Iritan/Alergi',
    category: 'skin-allergy',
    categoryLabel: 'Kulit & Alergi',
    iconName: 'Sparkles',
    quickSummary: 'Peradangan kulit lokal berupa kemerahan, gatal, kering, atau bersisik pasca kontak dengan zat iritan seperti sabun deterjen atau bahan kimia rumah tangga.',
    laymanKeywords: ['eksim', 'gatal deterjen', 'dermatitis kontak', 'kulit mengelupas', 'alergi sabun', 'kulit pecah perih'],
    typicalSymptoms: [
      'Kulit kemerahan, kering, dan gatal tajam pada area kontak (misal telapak tangan)',
      'Kulit tampak pecah-pecah halus atau bersisik',
      'Sensasi perih terbakar saat terkena air atau sabun',
      'Batas ruam umumnya jelas sesuai area terpapar bahan iritan'
    ],
    redFlags: [
      'Muncul bintil bernanah atau keropeng kuning madu (infeksi Impetigo sekunder)',
      'Ruam meluas ke wajah, kelopak mata, atau area genital',
      'Kulit melepuh luas seperti luka bakar',
      'Disertai demam tinggi atau pembengkakan kelenjar getah bening'
    ],
    maxSelfMedDays: 5,
    recommendedDrugs: [
      {
        genericName: 'Hidrokortison Krim 1% / 2.5%',
        brandExamples: ['Hydrocortisone Kimia Farma', 'Dermacoid', 'Calacort'],
        bpomClass: 'Obat Wajib Apotek (OWA)',
        isFirstLine: true,
        owaDetails: {
          owaNumber: 1,
          skMenkes: 'Kepmenkes RI No. 347/Menkes/SK/VII/1990 (DOWA 1)',
          maxDispense: 'Maksimal 1 tube (5–15 gram)',
          patientNotesRequired: true,
          clinicalConditions: 'Kortikosteroid potensi rendah untuk eksema/dermatitis kontak ringan; durasi maksimal 7 hari, bukan untuk infeksi jamur/virus.'
        },
        comorbidWarnings: [
          { comorbid: 'diabetes', status: 'hati-hati', note: 'Waspada peningkatan risiko infeksi bakteri/jamur sekunder pada kulit penderita diabetes.' },
          { comorbid: 'hamil', status: 'aman', note: 'Kortikosteroid potensi rendah (Kategori C) aman dioleskan tipis pada area terbatas jangka pendek < 7 hari.' }
        ],
        dosageGuideline: 'Oleskan tipis-tipis pada area kulit yang meradang 1–2 kali sehari. Maksimal 7 hari penggunaan.',
        dosageDetails: {
          adult: 'Oleskan tipis merata pada area radang 1–2 kali sehari selama 3–7 hari.',
          pediatric: 'Gunakan sediaan 1% secara tipis 1 kali sehari, maksimal 3–5 hari di bawah pantauan.',
          pregnancy: 'Kategori C. Gunakan potensi terendah (1%) tipis-tipis hanya pada area lesi terbatas.',
          geriatric: 'Kulit lansia lebih tipis; oleskan sangat tipis untuk mencegah atrofi kulit.'
        },
        timing: 'Oleskan sesudah mandi pada kulit yang telah dikeringkan lembut.',
        cautionNotes: 'JANGAN dioleskan pada luka terbuka bernanah, jerawat, atau infeksi jamur/cacar air karena kortikosteroid menurunkan imunitas lokal.',
        targetDrugId: 'drug-hydrocortisone'
      },
      {
        genericName: 'Krim Pelembap Emolien Ceramide / Petroleum Jelly',
        brandExamples: ['Vaseline Petroleum Jelly', 'Cerave Moisturizing Cream', 'Noroid'],
        bpomClass: 'Obat Bebas (Hijau)',
        isFirstLine: false,
        dosageGuideline: 'Oleskan sesering mungkin (3–4 kali sehari) untuk memulihkan sawar pelindung kulit (skin barrier).',
        dosageDetails: {
          adult: 'Oleskan bebas sesering mungkin setelah mencuci tangan atau mandi.',
          pediatric: 'Sangat aman untuk bayi dan anak-anak.',
          pregnancy: '100% aman untuk ibu hamil dan menyusui.',
          geriatric: 'Sangat direkomendasikan untuk xerosis / kulit kering lansia.'
        },
        timing: 'Oleskan segera setelah kulit terkena air saat pori-pori masih lembap.',
        cautionNotes: 'Pelembap adalah terapi pilar utama untuk mencegah kekambuhan eksim berulang.'
      }
    ],
    nonPharmacolTherapy: [
      'Identifikasi dan HINDARI zat pemicu (misal gunakan sarung tangan karet berlapis katun saat mencuci piring atau baju).',
      'Gunakan sabun mandi berformula lembut (hypoallergenic, bebas pewangi, SLS-free, ber-pH 5.5).',
      'Hindari mandi dengan air yang terlalu panas karena melarutkan lapisan lipid pelindung alami kulit.',
      'Oleskan pelembap tebal sesering mungkin terutama setelah tangan terkena air.'
    ],
    contraindicatedForSelfMed: [
      'JANGAN mengoleskan hidrokortison pada luka bernanah atau area berjamur.',
      'JANGAN menutup luka olesan hidrokortison dengan perban kedap udara (oklusif) tanpa anjuran dokter.'
    ],
    specialPopulations: {
      pregnancyWarning: 'Hidrokortison 1% aman digunakan secara tipis lokal pada area kecil.',
      pediatricWarning: 'Gunakan potensi terendah (1%) dan hindari penggunaan berlebih pada lipatan paha anak.',
      geriatricWarning: 'Prioritaskan pelembap tebal emolien untuk menjaga kelembapan kulit lansia yang menipis.'
    },
    whenToSeeDoctor: [
      'Muncul nanah kuning atau tanda infeksi bakteri.',
      'Eksim meluas ke wajah atau seluruh tubuh.',
      'Keluhan tidak membaik setelah 5–7 hari pemakaian hidrokortison.'
    ],
    gemaCermatTips: [
      'DA: Beli krim hidrokortison resmi di apotek berizin.',
      'GU: Oleskan tipis saja seukuran ujung jari (finger-tip unit).',
      'SI: Simpan tube tertutup rapat pada suhu kamar terhindar sinar matahari.',
      'BU: Buang bila isi krim telah berubah warna atau mengeluarkan cairan terpisah.'
    ]
  },
  {
    id: 'swam-mata-ikan-kapalan',
    title: 'Mata Ikan, Kapalan & Kutil Telapak Kaki (Clavus & Callus)',
    category: 'skin-allergy',
    categoryLabel: 'Kulit & Alergi',
    iconName: 'Sparkles',
    quickSummary: 'Penebalan lapisan tanduk kulit (hiperkeratosis) pada telapak kaki atau jari kaki akibat tekanan dan gesekan berulang dari alas kaki sempit.',
    laymanKeywords: ['mata ikan', 'kapalan', 'kutil kaki', 'callus', 'clavus', 'kulit kaki tebal', 'telapak kaki sakit'],
    typicalSymptoms: [
      'Penebalan kulit berbentuk bulat mengeras di telapak kaki atau sisi jari kaki',
      'Nyeri tajam menusuk saat berjalan menapak atau saat tertekan sepatu',
      'Permukaan kulit kasar, keras, dan berwarna kekuningan',
      'Terdapat titik pusat keras (inti kerucut keratin) di bagian tengah'
    ],
    redFlags: [
      'PASIEN MENDERITA DIABETES MELITUS: KONTRAINDIKASI MUTLAK swamedikasi mandiri (risiko luka terbuka yang tidak sembuh, ulkus gangren, dan amputasi kaki)',
      'Mata ikan membengkak merah, bernanah, berdarah, atau terasa panas berdenyut',
      'Pasien memiliki gangguan sirkulasi pembuluh darah tepi (Penyakit Arteri Perifer)',
      'Mata ikan berlokasi di area wajah atau kemaluan'
    ],
    maxSelfMedDays: 7,
    recommendedDrugs: [
      {
        genericName: 'Larutan Keratolitik Asam Salisilat 10%–20% + Asam Laktat',
        brandExamples: ['Callusol', 'Kaltrofen Larutan', 'Collomack'],
        bpomClass: 'Obat Bebas Terbatas (Biru)',
        isFirstLine: true,
        comorbidWarnings: [
          { comorbid: 'diabetes', status: 'kontraindikasi', note: 'KONTRAINDIKASI MUTLAK! Penderita diabetes dilarang menggunakan keratolitik mandiri karena risiko neuropati dan ulkus diabetikum gangren amputasi. Wajib ke klinik spesialis perawatan kaki!' },
          { comorbid: 'ginjal', status: 'aman', note: 'Aman untuk penggunaan topikal lokal terbatas.' },
          { comorbid: 'hamil', status: 'hati-hati', note: 'Gunakan hanya pada area lesi kecil terbatas, hindari pemakaian luas.' }
        ],
        dosageGuideline: 'Oleskan 1–2 tetes tepat pada mata ikan 1–2 kali sehari setelah direndam air hangat.',
        dosageDetails: {
          adult: 'Rendam kaki di air hangat 5–10 menit, keringkan, oleskan vaseline di sekeliling kulit sehat, lalu teteskan obat tepat pada mata ikan 1–2 kali sehari.',
          pediatric: 'Tidak dianjurkan untuk anak-anak balita.',
          pregnancy: 'Gunakan hati-hati pada lesi terbatas.',
          geriatric: 'Hati-hati pada lansia dengan penurunan sensasi rasa kaki.'
        },
        timing: 'Gunakan malam hari sebelum tidur, tutup dengan plester bila perlu.',
        cautionNotes: 'Lindungi kulit sehat di sekitar mata ikan dengan mengoleskan petroleum jelly / vaseline agar kulit normal tidak ikut mengelupas teriritasi.',
        targetDrugId: 'drug-salicylic-acid'
      }
    ],
    nonPharmacolTherapy: [
      'Rendam kaki dalam air hangat suam-suam kuku selama 10–15 menit sebelum mengoleskan obat agar lapisan tanduk melunak.',
      'Gunakan batu apung atau kikir kaki secara lembut untuk mengikis lapisan kulit mati yang telah melunak (JANGAN gunakan gunting kuku atau silet!).',
      'Ganti alas kaki dengan sepatu yang berujung lebar, empuk, dan pas di kaki tanpa menjepit jari.',
      'Gunakan bantalan silikon pelindung (foot pad) untuk mengurangi beban tekanan pada area mata ikan saat berjalan.'
    ],
    contraindicatedForSelfMed: [
      'DILARANG KERAS memotong, mencungkil, atau mengiris mata ikan dengan silet, gunting, atau jarum sendiri karena risiko infeksi berat!',
      'DILARANG digunakan mandiri oleh penderita Diabetes Melitus.'
    ],
    specialPopulations: {
      pregnancyWarning: 'Gunakan hanya pada area lesi yang terbatas.',
      pediatricWarning: 'Konsultasikan dengan dokter spesialis anak bila terjadi pada anak-anak.',
      geriatricWarning: 'Periksa sirkulasi nadi kaki dan riwayat diabetes sebelum penggunaan.'
    },
    whenToSeeDoctor: [
      'Pasien memiliki riwayat diabetes melitus atau gangguan sirkulasi darah.',
      'Timbul tanda infeksi bakteri (merah bengkak, nyeri berdenyut, nanah).',
      'Mata ikan tidak kunjung menipis setelah 1–2 minggu pemakaian teratur.'
    ],
    gemaCermatTips: [
      'DA: Beli larutan keratolitik di apotek berizin.',
      'GU: Oleskan hanya tepat pada mata ikan, jangan terkena kulit sehat sekitarnya.',
      'SI: Simpan botol tertutup rapat dan jauhkan dari api karena larutan mudah menguap.',
      'BU: Buang botol bila larutan telah mengering atau mengkristal.'
    ]
  },
  {
    id: 'swam-herpes-labialis',
    title: 'Lepuh Panas Dingin / Herpes Bibir (Herpes Labialis / Cold Sore)',
    category: 'mouth-oral',
    categoryLabel: 'Mulut & Sariawan',
    iconName: 'Smile',
    quickSummary: 'Kumpulan lepuhan lenting kecil berisi cairan di tepi bibir luar yang terasa panas, gatal, atau perih, dipicu reaktivasi virus Herpes Simplex tipe 1 (HSV-1).',
    laymanKeywords: ['herpes bibir', 'cold sore', 'lepuh bibir', 'panas dalam bibir', 'lenting bibir', 'cacar bibir'],
    typicalSymptoms: [
      'Sensasi kesemutan, gatal, atau rasa panas terbakar di tepi bibir 1–2 hari sebelum lenting muncul (fase prodromal)',
      'Muncul kelompok lenting lepuh kecil berisi cairan jernih di tepi bibir luar',
      'Lenting pecah dalam beberapa hari meninggalkan keropeng tipis kekuningan',
      'Nyeri atau perih saat tersenyum, berbicara, atau makan makanan asin/pedas'
    ],
    redFlags: [
      'Lenting herpes muncul di dekat kelopak mata atau bola mata (HERPES KERATITIS: ANCAMAN KEBUTAAN DARURAT, segera ke IGD/Sp.M!)',
      'Pasien memiliki sistem imun rendah (sedang kemoterapi, HIV, obat imunosupresan)',
      'Lesi tidak kunjung sembuh atau semakin meluas setelah > 10–14 hari',
      'Disertai demam tinggi mendadak atau leher kaku tidak bisa ditekuk'
    ],
    maxSelfMedDays: 5,
    recommendedDrugs: [
      {
        genericName: 'Asiklovir Krim 5%',
        brandExamples: ['Zovirax Krim', 'Clinovir', 'Poviral Krim', 'Aciclovir Indo Farma'],
        bpomClass: 'Obat Wajib Apotek (OWA)',
        isFirstLine: true,
        owaDetails: {
          owaNumber: 2,
          skMenkes: 'Kepmenkes RI No. 924/Menkes/SK/X/1993 (DOWA 2)',
          maxDispense: 'Maksimal 1 tube (5 gram)',
          patientNotesRequired: true,
          clinicalConditions: 'Herpes labialis bibir rekuren yang pernah didiagnosis dokter; oleskan sedini mungkin saat sensasi kesemutan muncul.'
        },
        comorbidWarnings: [
          { comorbid: 'hamil', status: 'aman', note: 'Kategori B. Absorpsi sistemik dari krim sangat minimal, aman untuk ibu hamil.' },
          { comorbid: 'maag', status: 'aman', note: 'Sediaan topikal lokal tanpa efek samping lambung.' }
        ],
        dosageGuideline: 'Oleskan tipis-tipis pada lesi 5 kali sehari (tiap 4 jam tanpa dosis malam) selama 4–5 hari.',
        dosageDetails: {
          adult: 'Oleskan tipis 5 kali sehari dengan interval 4 jam selama 4–5 hari berturut-turut.',
          pediatric: 'Dosis sama dengan dewasa pada anak usia > 2 tahun.',
          pregnancy: 'Kategori B. Aman digunakan secara topikal pada bibir.',
          geriatric: 'Gunakan sesuai dosis anjuran dewasa.'
        },
        timing: 'Oleskan sedini mungkin segera setelah terasa kesemutan / gatal (tahap prodromal) sebelum lepuhan membesar.',
        cautionNotes: 'Gunakan cotton bud atau jari yang dicuci bersih saat mengoleskan obat agar virus tidak menular ke bagian tubuh lain atau ke mata.',
        targetDrugId: 'drug-acyclovir'
      }
    ],
    nonPharmacolTherapy: [
      'Kompres es batu yang dibungkus kain bersih pada bibir selama 5–10 menit untuk meredakan bengkak dan rasa panas terbakar.',
      'JANGAN memencet, menusuk, atau mengelupas lenting dan keropeng bibir karena mempercepat penularan dan memicu infeksi sekunder.',
      'Gunakan peralatan makan, gelas, handuk, dan lip balm pribadi tanpa berbagi dengan orang lain.',
      'Gunakan tabir surya bibir (lip balm ber-SPF) bila pemicu herpes adalah paparan sinar matahari terik.'
    ],
    contraindicatedForSelfMed: [
      'JANGAN mengoleskan salep kortikosteroid pada lepuh herpes karena memicu penyebaran virus secara masif!',
      'JANGAN menggosok mata setelah menyentuh bibir yang terkena herpes.'
    ],
    specialPopulations: {
      pregnancyWarning: 'Krim asiklovir topikal aman untuk kehamilan Kategori B.',
      pediatricWarning: 'Hindari bayi mencium penderita herpes bibir aktif (risiko infeksi herpes neonatal berbahaya).',
      geriatricWarning: 'Gunakan secara teratur sedini mungkin.'
    },
    whenToSeeDoctor: [
      'Lenting muncul di dekat area mata atau hidung bagian atas.',
      'Lesi tidak sembuh dalam 10 hari atau semakin meluas bernanah.',
      'Penderita memiliki penyakit imunodefisiensi.'
    ],
    gemaCermatTips: [
      'DA: Beli krim asiklovir resmi di apotek.',
      'GU: Oleskan 5 kali sehari tiap 4 jam secara teratur.',
      'SI: Simpan tube tertutup rapat pada suhu kamar.',
      'BU: Buang sisa salep bila telah dibuka lebih dari 30 hari.'
    ]
  },
  {
    id: 'swam-asam-urat-akut',
    title: 'Nyeri Sendi Asam Urat Akut Ringan (Gout Flare-up Sementara)',
    category: 'pain-fever',
    categoryLabel: 'Demam & Nyeri',
    iconName: 'Flame',
    quickSummary: 'Nyeri hebat mendadak, bengkak kemerahan, dan rasa panas pada satu persendian (paling sering jempol kaki/podagra) akibat penumpukan kristal monosodium urat.',
    laymanKeywords: ['asam urat', 'jempol kaki bengkak', 'gout', 'sendi linu panas', 'kaki bengkak asam urat', 'nyeri sendi jempol'],
    typicalSymptoms: [
      'Nyeri sendi hebat mendadak yang sering menyerang tengah malam atau dini hari',
      'Sendi pangkal jempol kaki tampak merah padam, bengkak, dan sangat sensitif disentuh bahkan oleh sehelai kain',
      'Rasa panas membakar pada sendi yang meradang',
      'Sering dipicu pasca pesta makanan tinggi purin (jeroan, emping, seafood, kuah santan kental)'
    ],
    redFlags: [
      'Sendi bengkak merah disertai demam tinggi menggigil (curiga ARTRITIS SEPTIK infeksi sendi akut: DARURAT MEDIS!)',
      'Terdapat benjolan tofus keras yang pecah mengeluarkan cairan seperti kapur putih bernanah',
      'Nyeri tidak berkurang sama sekali dalam 3 hari atau menyerang lebih dari 2 sendi besar',
      'Pasien memiliki riwayat gagal ginjal kronis (CKD)'
    ],
    maxSelfMedDays: 3,
    recommendedDrugs: [
      {
        genericName: 'Parasetamol 500–1000 mg',
        brandExamples: ['Panadol', 'Sanmol', 'Biogesic', 'Dumin'],
        bpomClass: 'Obat Bebas (Hijau)',
        isFirstLine: true,
        comorbidWarnings: [
          { comorbid: 'maag', status: 'aman', note: 'Pilihan analgesik paling aman untuk lambung dibanding NSAID oral.' },
          { comorbid: 'ginjal', status: 'aman', note: 'Jauh lebih aman untuk fungsi ginjal penderita asam urat dibanding obat pereda nyeri NSAID keras.' },
          { comorbid: 'hipertensi', status: 'aman', note: 'Tidak memicu lonjakan tekanan darah.' }
        ],
        dosageGuideline: '500–1000 mg tiap 6–8 jam bila nyeri (maksimal 4000 mg/24 jam).',
        dosageDetails: {
          adult: '500–1000 mg tiap 6–8 jam bila nyeri sendi terasa.',
          pediatric: 'Tidak diindikasikan untuk penyakit gout anak.',
          pregnancy: 'Kategori B.',
          geriatric: '500 mg tiap 8 jam.'
        },
        timing: 'Diminum sesudah makan dengan segelas air putih hangat.',
        cautionNotes: 'PERINGATAN KRITIS: JANGAN meminum Allopurinol pada saat serangan asam urat akut sedang berlangsung! Allopurinol justru melarutkan kristal urat secara mendadak yang memicu peradangan semakin hebat.'
      },
      {
        genericName: 'Natrium Diklofenak Gel 1% Topikal',
        brandExamples: ['Voltaren Gel', 'Flamar Gel', 'Cataflam Gel'],
        bpomClass: 'Obat Bebas Terbatas (Biru)',
        isFirstLine: false,
        comorbidWarnings: [
          { comorbid: 'maag', status: 'aman', note: 'Sediaan gel topikal memiliki absorpsi sistemik sangat kecil (< 6%) sehingga jauh lebih ramah lambung dibanding tablet oral.' },
          { comorbid: 'ginjal', status: 'aman', note: 'Efek samping renal minimal pada penggunaan topikal lokal.' }
        ],
        dosageGuideline: 'Oleskan tipis pada sendi yang nyeri 3–4 kali sehari secara lembut tanpa memijat keras.',
        dosageDetails: {
          adult: 'Oleskan 2–4 gram gel tipis pada sendi 3–4 kali sehari.',
          pediatric: 'Tidak untuk anak-anak.',
          pregnancy: 'Hindari pada trimester ke-3 kehamilan.',
          geriatric: 'Pilihan topikal yang sangat baik untuk lansia menghindari efek samping NSAID oral.'
        },
        timing: 'Oleskan lembut setelah kompres dingin.',
        cautionNotes: 'HANYA untuk pemakaian luar pada kulit utuh. Jangan diurut atau dipijat paksa.'
      }
    ],
    nonPharmacolTherapy: [
      'Istirahatkan sendi yang meradang (elevasi kaki lebih tinggi saat berbaring).',
      'Kompres dingin dengan handuk basah es selama 15–20 menit untuk mengurangi bengkak dan rasa panas terbakar (JANGAN gunakan kompres air panas!).',
      'Minum banyak air putih (minimal 2.5–3 liter per hari) untuk membantu ginjal mengekskresikan asam urat melalui urin.',
      'Hindari total makanan tinggi purin (jeroan, otak, hati, kerang, kepiting, bebek, emping melinjo, dan minuman beralkohol/soda).'
    ],
    contraindicatedForSelfMed: [
      'DILARANG KERAS memulai konsumsi Allopurinol saat serangan akut baru terjadi! Allopurinol hanya boleh dimulai 2–3 minggu setelah fase nyeri akut reda atas petunjuk dokter.',
      'DILARANG mengurut atau memijat keras sendi yang sedang bengkak meradang karena memperparah kerusakan kartilago sendi.'
    ],
    specialPopulations: {
      pregnancyWarning: 'Gout sangat jarang terjadi pada wanita usia subur.',
      pediatricWarning: 'Nyeri sendi anak bukan asam urat; wajib diperiksa dokter anak.',
      geriatricWarning: 'Hindari obat anti-inflamasi NSAID oral dosis tinggi karena memicu perdarahan lambung dan gagal ginjal akut lansia.'
    },
    whenToSeeDoctor: [
      'Nyeri sendi tidak berkurang dalam 3 hari swamedikasi.',
      'Disertai demam tinggi menggigil atau sendi bernanah.',
      'Nyeri menyerang lebih dari 2 persendian tubuh.'
    ],
    gemaCermatTips: [
      'DA: Beli obat pereda nyeri dan gel di apotek resmi.',
      'GU: Minum banyak air putih untuk membantu klirens asam urat.',
      'SI: Simpan gel pada suhu sejuk terhindar dari panas.',
      'BU: Buang sisa obat bila telah melewati masa kadaluarsa.'
    ]
  },
  {
    id: 'swam-migrain-ringan',
    title: 'Migrain Akut Ringan (Sakit Kepala Sebelah Berdenyut)',
    category: 'pain-fever',
    categoryLabel: 'Demam & Nyeri',
    iconName: 'Flame',
    quickSummary: 'Sakit kepala berdenyut sedang berulang yang umumnya menyerang satu sisi kepala, sering disertai sensitivitas terhadap cahaya terang dan suara bising.',
    laymanKeywords: ['migrain', 'sakit kepala sebelah', 'kepala nyut nyutan', 'kepala berdenyut', 'silau pusing', 'migrain mual'],
    typicalSymptoms: [
      'Nyeri kepala berdenyut intensitas sedang di satu sisi pelipis atau di belakang bola mata',
      'Sensitif terhadap cahaya terang (fotofobia) dan suara bising (fonofobia)',
      'Rasa mual ringan tanpa muntah berulang',
      'Nyeri memberat saat melakukan aktivitas fisik ringan seperti menaiki tangga'
    ],
    redFlags: [
      'Sakit kepala mendadak yang sangat hebat seperti tersambar petir ("Thunderclap Headache")',
      'Disertai kelemahan separuh tubuh, wajah mencong, atau bicara pelo (TANDA STROKE DARURAT)',
      'Disertai leher kaku tidak bisa ditekuk dan demam tinggi mendadak (curiga Meningitis)',
      'Aura visual (pandangan berkunang-kunang) berlangsung lebih dari 60 menit'
    ],
    maxSelfMedDays: 3,
    recommendedDrugs: [
      {
        genericName: 'Kombinasi Parasetamol 500 mg + Kafein 50–65 mg',
        brandExamples: ['Panadol Extra Merah', 'Bodrex Migra', 'Saridon', 'Paramex'],
        bpomClass: 'Obat Bebas Terbatas (Biru)',
        isFirstLine: true,
        comorbidWarnings: [
          { comorbid: 'hipertensi', status: 'hati-hati', note: 'Kandungan kafein dapat memicu kenaikan tekanan darah sementara pada hipertensi tidak terkontrol.' },
          { comorbid: 'maag', status: 'aman', note: 'Lebih ramah lambung dibanding analgesik golongan NSAID.' },
          { comorbid: 'glaukoma', status: 'hati-hati', note: 'Batasi konsumsi kafein berlebih.' }
        ],
        dosageGuideline: '1 kaplet diminum sedini mungkin saat migrain mulai terasa. Dapat diulang tiap 6–8 jam bila perlu (maksimal 4 kaplet/24 jam).',
        dosageDetails: {
          adult: '1 kaplet tiap 6–8 jam bila migrain menyerang. Maksimal 4 kaplet per 24 jam.',
          pediatric: 'Tidak dianjurkan untuk anak < 12 tahun karena kandungan kafein.',
          pregnancy: 'Batasi kafein selama kehamilan; prioritaskan Parasetamol tunggal murni.',
          geriatric: 'Gunakan parasetamol tunggal tanpa kafein bila ada riwayat insomnia atau aritmia.'
        },
        timing: 'Diminum sesudah makan dengan segelas air putih.',
        cautionNotes: 'Hindari konsumsi bersamaan dengan kopi, teh pekat, atau minuman berenergi agar asupan kafein harian tidak berlebihan.',
        targetDrugId: 'drug-paracetamol-caffeine'
      },
      {
        genericName: 'Ibuprofen 200–400 mg',
        brandExamples: ['Proris', 'Brufen', 'Farsifen'],
        bpomClass: 'Obat Bebas Terbatas (Biru)',
        isFirstLine: false,
        comorbidWarnings: [
          { comorbid: 'maag', status: 'kontraindikasi', note: 'KONTRAINDIKASI MUTLAK pada tukak lambung aktif atau riwayat maag berat.' },
          { comorbid: 'hipertensi', status: 'hati-hati', note: 'Waspada retensi natrium dan penurunan efek obat antihipertensi.' },
          { comorbid: 'ginjal', status: 'kontraindikasi', note: 'Hindari pada penurunan fungsi ginjal.' }
        ],
        dosageGuideline: '200–400 mg sesudah makan tiap 6–8 jam.',
        dosageDetails: {
          adult: '200–400 mg tiap 6–8 jam sesudah makan (maksimal 1200 mg/hari swamedikasi).',
          pediatric: 'Gunakan sesuai dosis berat badan anak bila dianjurkan dokter.',
          pregnancy: 'KONTRAINDIKASI pada trimester ke-3 kehamilan.',
          geriatric: 'Gunakan dosis terendah efektif.'
        },
        timing: 'WAJIB diminum SEGERA SESUDAH MAKAN.',
        cautionNotes: 'Hentikan bila timbul nyeri ulu hati atau kembung perih.'
      }
    ],
    nonPharmacolTherapy: [
      'Istirahat berbaring di dalam kamar yang gelap, tenang, dan sejuk tanpa suara bising.',
      'Kompres dingin dengan kain basah atau es pada dahi dan pelipis selama 15 menit.',
      'Pijat lembut area tengkuk leher dan pelipis dengan minyak aromaterapi peppermint.',
      'Cukupi hidrasi dengan minum air putih hangat dan hindari pemicu migrain (keju tua, MSG berlebih, cokelat, terlambat makan).'
    ],
    contraindicatedForSelfMed: [
      'JANGAN mengonsumsi obat sakit kepala kombinasi lebih dari 3 hari berturut-turut karena risiko rebound headache (Medication Overuse Headache).',
      'JANGAN beraktivitas di bawah terik matahari saat migrain sedang memuncak.'
    ],
    specialPopulations: {
      pregnancyWarning: 'Prioritaskan Parasetamol tunggal murni Kategori B; hindari kombinasi kafein tinggi dan NSAID pada trimester 3.',
      pediatricWarning: 'Migrain anak memerlukan evaluasi dokter spesialis saraf anak.',
      geriatricWarning: 'Waspada sakit kepala onset baru pada usia > 50 tahun (curiga arteritis temporalis atau kelainan intrakranial).'
    },
    whenToSeeDoctor: [
      'Sakit kepala mendadak sangat hebat tak tertahankan.',
      'Disertai gangguan penglihatan permanen, bicara pelo, atau kelemahan separuh badan.',
      'Migrain tidak membaik dalam 3 hari pengobatan.'
    ],
    gemaCermatTips: [
      'DA: Beli obat pereda migrain berlabel resmi di apotek.',
      'GU: Minum segera pada fase awal serangan sebelum nyeri menjadi sangat berat.',
      'SI: Simpan pada tempat sejuk terhindar dari panas.',
      'BU: Buang bila telah kadaluarsa.'
    ]
  },
  {
    id: 'swam-anemia-kelelahan',
    title: 'Kelelahan Fisik & Anemia Defisiensi Besi Ringan',
    category: 'pain-fever',
    categoryLabel: 'Demam & Nyeri',
    iconName: 'Flame',
    quickSummary: 'Kondisi tubuh lemas, cepat lelah, wajah pucat, dan sulit konsentrasi akibat kekurangan zat besi atau perdarahan menstruasi yang cukup banyak.',
    laymanKeywords: ['kurang darah', 'anemia', 'badan lemas', 'pucat 5l', 'capek terus', 'penambah darah', 'lemah letih lesu'],
    typicalSymptoms: [
      'Sindrom 5L: Lemah, Letih, Lesu, Lelah, dan Lalai / Kurang Konsentrasi',
      'Kelopak mata bagian dalam (konjungtiva) dan dasar kuku tampak pucat',
      'Sering merasa pusing melayang saat berdiri mendadak dari posisi duduk',
      'Jantung berdebar lebih cepat saat melakukan aktivitas fisik ringan'
    ],
    redFlags: [
      'Feses berwarna hitam pekat lengket seperti aspal/ter (Melena: tanda perdarahan saluran cerna atas darurat)',
      'Sesak napas berat saat istirahat atau nyeri dada seperti tertekan beban berat',
      'Kelelahan ekstrem disertai penurunan berat badan drastis tanpa sebab yang jelas',
      'Tidak ada perbaikan kadar Hb setelah konsumsi suplemen rutin 2–4 minggu'
    ],
    maxSelfMedDays: 14,
    recommendedDrugs: [
      {
        genericName: 'Ferro Fumarat / Sulfat + Asam Folat + Vitamin C',
        brandExamples: ['Sangobion', 'Maltofer', 'Sakatonik Liver', 'Feroglobin'],
        bpomClass: 'Suplemen Kesehatan (POM SD)',
        isFirstLine: true,
        comorbidWarnings: [
          { comorbid: 'maag', status: 'hati-hati', note: 'Zat besi dapat memicu mual atau perih lambung; WAJIB diminum segera sesudah makan.' },
          { comorbid: 'ginjal', status: 'hati-hati', note: 'Gunakan sesuai anjuran dosis RDA suplementasi.' }
        ],
        dosageGuideline: '1 kapsul per hari diminum sesudah makan.',
        dosageDetails: {
          adult: '1 kapsul sekali sehari sesudah makan utama.',
          pediatric: 'Gunakan sediaan sirup zat besi khusus anak dengan dosis berbasis berat badan.',
          pregnancy: 'Sangat dianjurkan untuk pencegahan anemia maternal dan stunting janin.',
          geriatric: '1 kapsul sehari sesudah makan; perhatikan pencegahan konstipasi.'
        },
        timing: 'Diminum segera SESUDAH MAKAN bersama air putih atau jus jeruk (Vitamin C meningkatkan absorpsi zat besi).',
        cautionNotes: 'HINDARI meminum suplemen besi bersamaan dengan teh, kopi, atau susu karena tanin dan kalsium menghambat penyerapan zat besi hingga 70%. Feses akan berwarna lebih gelap/kehitaman dan hal ini NORMAL tidak berbahaya.'
      }
    ],
    nonPharmacolTherapy: [
      'Tingkatkan konsumsi makanan kaya zat besi heme yang mudah diserap: daging merah tanpa lemak, hati ayam, telur, dan ikan.',
      'Konsumsi sayuran hijau gelap (bayam, brokoli) bersama makanan kaya vitamin C (jeruk, jambu biji, tomat) untuk meningkatkan absorpsi zat besi non-heme.',
      'HINDARI kebiasaan minum teh atau kopi langsung sesudah makan (beri jeda minimal 2 jam).',
      'Istirahat tidur malam yang cukup dan teratur (7–8 jam per hari).'
    ],
    contraindicatedForSelfMed: [
      'JANGAN mengonsumsi suplemen besi berlebih pada pasien dengan penyakit kelebihan zat besi genetik (Hemokromatosis / Thalasemia Mayor) tanpa anjuran dokter hematologi.',
      'JANGAN meminum zat besi bersamaan dengan obat maag antasida.'
    ],
    specialPopulations: {
      pregnancyWarning: 'Suplementasi zat besi dan asam folat adalah program wajib nasional pencegahan anemia kehamilan dan stunting.',
      pediatricWarning: 'Gunakan sediaan tetes/sirup besi khusus anak di bawah pengawasan posyandu/puskesmas.',
      geriatricWarning: 'Anemia pada lansia pria atau wanita pasca menopause wajib diinvestigasi dokter untuk menepis perdarahan saluran cerna tersembunyi.'
    },
    whenToSeeDoctor: [
      'Feses berwarna hitam pekat seperti ter.',
      'Sesak napas saat istirahat atau pingsan.',
      'Kelelahan tidak membaik setelah 2 minggu suplementasi.'
    ],
    gemaCermatTips: [
      'DA: Beli suplemen tambah darah berizin POM SD di apotek resmi.',
      'GU: Minum bersama air jeruk atau sesudah makan.',
      'SI: Simpan tertutup rapat terhindar dari kelembapan.',
      'BU: Buang bila kapsul telah lembek atau berubah bau.'
    ]
  },
  {
    id: 'swam-oral-thrush-bayi',
    title: 'Jamur Putih Lidah & Rongga Mulut Bayi (Oral Thrush / Kandidiasis Oral)',
    category: 'pediatric',
    categoryLabel: 'Kesehatan Anak (Balita)',
    iconName: 'Baby',
    quickSummary: 'Bercak putih menyerupai sisa endapan susu pada lidah, pipi bagian dalam, atau gusi bayi yang disebabkan pertumbuhan jamur Candida albicans.',
    laymanKeywords: ['jamur lidah bayi', 'lidah putih bayi', 'oral thrush', 'sariawan bayi', 'mulut putih bayi', 'jamur susu bayi'],
    typicalSymptoms: [
      'Bercak putih tebal seperti dadih susu pada lidah, dinding pipi dalam, atau langit-langit mulut',
      'Bercak TIDAK mudah lepas saat diusap lembut dengan kain kassa basah',
      'Bila dipaksa dikerok, permukaan di bawahnya tampak merah dan dapat sedikit berdarah',
      'Bayi tampak rewel atau gelisah saat menyusu karena rongga mulut terasa perih'
    ],
    redFlags: [
      'Bayi menolak menyusu sama sekali dan tampak sangat lemas',
      'Tanda dehidrasi: ubun-ubun kepala cekung, air mata tidak keluar saat menangis, popok kering > 6 jam',
      'Bercak jamur menjalar ke tenggorokan menyebabkan bayi tersedak atau sulit bernapas',
      'Bayi berusia di bawah 1 bulan (neonatus) disertai demam > 38°C'
    ],
    maxSelfMedDays: 5,
    recommendedDrugs: [
      {
        genericName: 'Nistatin Suspensi Drop 100.000 IU/mL',
        brandExamples: ['Candistatin Drop', 'Nymico Drop', 'Nystatin Drop Kimia Farma'],
        bpomClass: 'Obat Wajib Apotek (OWA)',
        isFirstLine: true,
        owaDetails: {
          owaNumber: 1,
          skMenkes: 'Kepmenkes RI No. 347/Menkes/SK/VII/1990 (DOWA 1)',
          maxDispense: 'Maksimal 1 botol (12 mL)',
          patientNotesRequired: true,
          clinicalConditions: 'Oral thrush pada bayi dan anak yang telah dipastikan bukan sekadar residu susu biasa.'
        },
        comorbidWarnings: [
          { comorbid: 'hamil', status: 'aman', note: 'Aman untuk ibu menyusui bila dioleskan tipis pada puting payudara yang terinfeksi jamur.' },
          { comorbid: 'maag', status: 'aman', note: 'Nistatin tidak diserap ke dalam sirkulasi darah sistemik.' }
        ],
        dosageGuideline: 'Bayi: 1 mL (100.000 IU) diteteskan pada rongga mulut 4 kali sehari sesudah minum susu.',
        dosageDetails: {
          adult: '4–6 mL diteteskan dan dikumur perlahan 4 kali sehari.',
          pediatric: 'Anak: 1 mL diteteskan ke dalam mulut 4 kali sehari.',
          infant: 'Bayi: 1 mL diteteskan 4 kali sehari (0.5 mL di tiap sisi pipi dalam) sesudah minum ASI/susu. Lanjutkan hingga 48 jam setelah lesi hilang.',
          pregnancy: 'Kategori B. Sangat aman.',
          geriatric: 'Gunakan sesuai dosis dewasa.'
        },
        timing: 'Diteteskan SESUDAH bayi menyusu agar obat tidak langsung terbilas oleh air susu.',
        cautionNotes: 'Teteskan perlahan pada kedua sisi dinding pipi dalam. Kocok botol terlebih dahulu sebelum digunakan.',
        targetDrugId: 'drug-nystatin-drop'
      }
    ],
    nonPharmacolTherapy: [
      'Bersihkan puting payudara ibu dengan air hangat bersih sebelum dan sesudah menyusui.',
      'Sterilkan botol susu, dot kempeng (pacifier), dan alat pompa ASI dengan air mendidih secara rutin tiap hari.',
      'Bersihkan sisa susu pada rongga mulut bayi dengan kain kassa steril yang dibasahi air matang hangat secara lembut.',
      'Obati puting ibu bila puting tampak merah, lecet, atau gatal agar tidak terjadi infeksi silang bolak-balik antara ibu dan bayi.'
    ],
    contraindicatedForSelfMed: [
      'JANGAN mengerok paksa bercak putih jamur dengan benda tajam atau kuku karena memicu luka berdarah dan infeksi sekunder.',
      'JANGAN memberikan madu pada bayi usia di bawah 1 tahun karena risiko keracunan Botulisme bayi!'
    ],
    specialPopulations: {
      pregnancyWarning: 'Ibu menyusui dapat mengoleskan nistatin pada puting bila mengalami infeksi jamur payudara.',
      pediatricWarning: 'Nistatin suspensi adalah pilihan obat antijamur mulut paling aman untuk bayi dan balita.',
      geriatricWarning: 'Pada lansia pengguna gigi tiruan (denture stomatitis), rendam gigi tiruan dalam larutan antiseptik.'
    },
    whenToSeeDoctor: [
      'Bayi menolak minum ASI sama sekali dan menunjukkan tanda dehidrasi.',
      'Bercak jamur tidak berkurang setelah 5 hari pengobatan nistatin.',
      'Bayi mengalami demam tinggi.'
    ],
    gemaCermatTips: [
      'DA: Beli suspensi nistatin di apotek resmi.',
      'GU: Kocok botol dan gunakan pipet takar bersih sesudah menyusu.',
      'SI: Simpan pada suhu sejuk terhindar sinar matahari langsung.',
      'BU: Buang suspensi tetes bila botol telah terbuka lebih dari 14–30 hari.'
    ]
  },
  {
    id: 'swam-insomnia-sementara',
    title: 'Susah Tidur / Insomnia Akut Sementara (Transient Insomnia)',
    category: 'motion-fatigue',
    categoryLabel: 'Mabuk & Perjalanan',
    iconName: 'Compass',
    quickSummary: 'Kesulitan untuk memulai tidur atau mempertahankan tidur nyenyak yang berlangsung 1–3 malam akibat stres situasional, jet lag perjalanan, atau pergantian jadwal kerja shift.',
    laymanKeywords: ['susah tidur', 'insomnia', 'sulit tidur malam', 'jetlag tidur', 'mata melek malam', 'tidur tidak nyenyak'],
    typicalSymptoms: [
      'Membutuhkan waktu lebih dari 30–45 menit untuk dapat terlelap di tempat tidur',
      'Sering terbangun di tengah malam dan sulit untuk tertidur kembali',
      'Bangun tidur di pagi hari dengan perasaan tubuh belum segar dan lesu',
      'Merasa mengantuk di siang hari namun kembali sulit tidur saat malam hari'
    ],
    redFlags: [
      'Insomnia telah berlangsung lebih dari 3–4 minggu terus-menerus (Insomnia Kronis)',
      'Disertai perasaan depresi berat, keputusasaan mendalam, atau pikiran menyakiti diri',
      'Terbangun di malam hari dengan rasa tercekik, megap-megap, atau mendengkur sangat keras (Sleep Apnea)',
      'Adanya riwayat ketergantungan obat penenang psikotropika / benzodiazepin'
    ],
    maxSelfMedDays: 3,
    recommendedDrugs: [
      {
        genericName: 'Ekstrak Herbal Chamomile / Valerian Root',
        brandExamples: ['Lelap', 'Sleepeasy', 'Teh Chamomile Organik'],
        bpomClass: 'Suplemen Kesehatan (POM SD)',
        isFirstLine: true,
        comorbidWarnings: [
          { comorbid: 'maag', status: 'aman', note: 'Membantu merelaksasi otot saluran cerna dan lambung.' },
          { comorbid: 'hipertensi', status: 'aman', note: 'Memberikan efek relaksasi yang baik untuk tensi.' }
        ],
        dosageGuideline: '1–2 kaplet diminum 30–60 menit sebelum tidur malam.',
        dosageDetails: {
          adult: '1–2 kaplet herbal 30–60 menit sebelum waktu tidur.',
          pediatric: 'Tidak dianjurkan untuk anak-anak.',
          pregnancy: 'Konsultasikan dengan dokter spesialis kandungan sebelum konsumsi.',
          geriatric: '1 kaplet sebelum tidur; amati efek kantuk keesokan pagi.'
        },
        timing: 'Diminum 30–60 menit sebelum tidur malam dengan segelas air hangat.',
        cautionNotes: 'Bekerja secara alami menenangkan sistem saraf pusat tanpa efek ketergantungan berat.'
      },
      {
        genericName: 'Difenhidramin HCl 25–50 mg',
        brandExamples: ['Diphenhydramine Phapros', 'Benadryl', 'Valdres'],
        bpomClass: 'Obat Bebas Terbatas (Biru)',
        isFirstLine: false,
        comorbidWarnings: [
          { comorbid: 'glaukoma', status: 'kontraindikasi', note: 'KONTRAINDIKASI MUTLAK! Efek antikolinergik kuat memicu midriasis dan kenaikan tekanan bola mata pada glaukoma sudut sempit.' },
          { comorbid: 'ginjal', status: 'hati-hati', note: 'Waspada retensi urin terutama pada pria lansia dengan pembesaran prostat (BPH).' }
        ],
        dosageGuideline: '25–50 mg diminum 30 menit sebelum tidur. HANYA untuk penggunaan jangka pendek maksimal 2–3 malam berturut-turut.',
        dosageDetails: {
          adult: '25–50 mg 30 menit sebelum tidur. Maksimal 2–3 malam.',
          pediatric: 'KONTRAINDIKASI untuk sleep aid pada anak-anak (dapat memicu efek paradoksal hiperaktif).',
          pregnancy: 'Kategori B. Hindari penggunaan rutin.',
          geriatric: 'Hati-hati pada lansia; risiko kebingungan nokturnal dan jatuh dari tempat tidur (Kriteria Beers).'
        },
        timing: 'Diminum tepat 30 menit sebelum berbaring tidur.',
        cautionNotes: 'DILARANG mengemudikan kendaraan atau mengoperasikan mesin keesokan paginya bila masih terasa kantuk sisa (hangover effect).'
      }
    ],
    nonPharmacolTherapy: [
      'Terapkan Sleep Hygiene: jadwalkan waktu tidur dan bangun yang sama setiap hari (termasuk di akhir pekan).',
      'HINDARI menatap layar gadget (smartphone, laptop, TV) minimal 1 jam sebelum tidur karena sinar biru (blue light) menekan produksi hormon tidur alami melatonin.',
      'Pastikan kamar tidur gelap, tenang, hening, dan bersuhu sejuk nyaman.',
      'HINDARI konsumsi kafein (kopi, teh, soda) dan makan makanan berat minimal 4–6 jam sebelum waktu tidur.'
    ],
    contraindicatedForSelfMed: [
      'JANGAN mengonsumsi obat tidur golongan psikotropika (seperti Alprazolam, Diazepam) tanpa resep dokter spesialis jiwa/saraf!',
      'JANGAN mengonsumsi alkohol sebagai sarana pembantu tidur karena merusak arsitektur tidur REM.'
    ],
    specialPopulations: {
      pregnancyWarning: 'Prioritaskan teknik relaksasi non-obat, mandi air hangat, dan bantal tidur ergonomis.',
      pediatricWarning: 'Insomnia anak balita wajib ditangani melalui pembiasaan rutinitas tidur (bedtime routine), bukan obat tidur.',
      geriatricWarning: 'Lansia rentan mengalami kantuk berkepanjangan dan jatuh; prioritaskan teh herbal chamomile.'
    },
    whenToSeeDoctor: [
      'Insomnia berlangsung lebih dari 3–4 minggu terus-menerus.',
      'Disertai gangguan kecemasan berat, depresi, atau serangan panik.',
      'Tidur terganggu akibat sesak napas atau mendengkur hebat (Sleep Apnea).'
    ],
    gemaCermatTips: [
      'DA: Beli suplemen herbal tidur berizin POM di apotek terpercaya.',
      'GU: Gunakan hanya untuk jangka pendek maksimal 2–3 malam saat darurat.',
      'SI: Simpan tertutup rapat terhindar dari panas.',
      'BU: Buang bila telah melewati tanggal kadaluarsa.'
    ]
  }
];

export const SWAMEDIKASI_CATEGORIES = [
  { key: 'all', label: 'Semua Keluhan', icon: 'Sparkles', count: 42 },
  { key: 'pain-fever', label: 'Demam & Nyeri', icon: 'Flame', count: 8 },
  { key: 'digestive', label: 'Saluran Cerna & Maag', icon: 'ShieldAlert', count: 5 },
  { key: 'respiratory', label: 'Flu, Batuk & THT', icon: 'CloudRain', count: 5 },
  { key: 'skin-allergy', label: 'Kulit & Alergi', icon: 'Sparkles', count: 10 },
  { key: 'eye-ear', label: 'Mata & Telinga', icon: 'Eye', count: 2 },
  { key: 'mouth-oral', label: 'Mulut & Sariawan', icon: 'Smile', count: 3 },
  { key: 'pediatric', label: 'Kesehatan Anak (Balita)', icon: 'Baby', count: 4 },
  { key: 'motion-fatigue', label: 'Mabuk & Perjalanan', icon: 'Compass', count: 2 },
  { key: 'womens-health', label: 'Kesehatan Wanita', icon: 'Heart', count: 3 }
];

export interface ComorbidOptionMeta {
  id: SwamedikasiComorbidType;
  label: string;
  badgeLabel: string;
  icon: string;
  shortDesc: string;
  dangerDrugClass: string;
  safeAlternatives: string;
}

export const SWAMEDIKASI_COMORBID_OPTIONS: ComorbidOptionMeta[] = [
  {
    id: 'hipertensi',
    label: 'Hipertensi (Tekanan Darah Tinggi)',
    badgeLabel: 'Hipertensi',
    icon: 'HeartPulse',
    shortDesc: 'Waspada dekongestan oral vasokonstriktor & NSAID',
    dangerDrugClass: 'Pseudoefedrin, Fenilefrin, Efedrin, NSAID (Ibuprofen dosis tinggi)',
    safeAlternatives: 'Parasetamol, Saline Nasal Spray, Setirizin tunggal'
  },
  {
    id: 'asma',
    label: 'Asma Bronkial / Alergi Napas',
    badgeLabel: 'Asma',
    icon: 'Wind',
    shortDesc: 'Waspada NSAID mencetuskan bronkospasme akut (AERD)',
    dangerDrugClass: 'Aspirin, Ibuprofen, Asam Mefenamat, Ketoprofen',
    safeAlternatives: 'Parasetamol, Saline Drops'
  },
  {
    id: 'maag',
    label: 'Tukak Lambung / GERD / Gastritis Kronis',
    badgeLabel: 'Maag / Lambung',
    icon: 'Flame',
    shortDesc: 'Kontraindikasi mutlak seluruh analgesik NSAID oral',
    dangerDrugClass: 'Asam Mefenamat, Ibuprofen, Aspirin, Natrium Diklofenak oral',
    safeAlternatives: 'Parasetamol, Antasida DOEN, Sukralfat, Famotidin'
  },
  {
    id: 'ginjal',
    label: 'Gangguan Fungsi Ginjal (CKD / LFG Rendah)',
    badgeLabel: 'Ginjal',
    icon: 'Activity',
    shortDesc: 'Hindari obat nefrotoksik & akumulasi antasida logam',
    dangerDrugClass: 'NSAID oral, Antasida dosis tinggi (Mg & Al), Suplemen kalium',
    safeAlternatives: 'Parasetamol dosis terendah, Terapi non-farmakologi'
  },
  {
    id: 'diabetes',
    label: 'Diabetes Melitus (Gula Darah Tinggi)',
    badgeLabel: 'Diabetes',
    icon: 'Droplets',
    shortDesc: 'Waspada sirup sukrosa pekat & dekongestan simpatomimetik',
    dangerDrugClass: 'Sirup batuk tinggi pemanis gula pasir, Pseudoefedrin',
    safeAlternatives: 'Sediaan tablet/kapsul bebas gula, Saline spray'
  },
  {
    id: 'glaukoma',
    label: 'Glaukoma Sudut Sempit / Retensi Urin',
    badgeLabel: 'Glaukoma',
    icon: 'Eye',
    shortDesc: 'Kontraindikasi antikolinergik & simpatomimetik midriasis',
    dangerDrugClass: 'CTM (Klorfeniramin), Dimenhidrinat, Pseudoefedrin',
    safeAlternatives: 'Setirizin / Loratadin (Antihistamin generasi 2), Tetes mata artificial tears'
  },
  {
    id: 'hamil',
    label: 'Ibu Hamil / Menyusui',
    badgeLabel: 'Bumil / Busui',
    icon: 'Baby',
    shortDesc: 'Prioritaskan kategori A/B teruji, hindari teratogenik',
    dangerDrugClass: 'Ibuprofen (Trimester 3), Asam Mefenamat, Tetrasiklin, Diltiazem',
    safeAlternatives: 'Parasetamol, Antasida, Oralit, Saline nasal drops'
  }
];

export function getProtocolDecisionTree(protocol: SwamedikasiProtocol): DecisionTreeNode[] {
  if (protocol.decisionTree && protocol.decisionTree.length > 0) {
    return protocol.decisionTree;
  }

  const firstLineDrug = protocol.recommendedDrugs.find(d => d.isFirstLine) || protocol.recommendedDrugs[0];
  const secondLineDrug = protocol.recommendedDrugs.find(d => !d.isFirstLine && d !== firstLineDrug) || protocol.recommendedDrugs[1];

  const steps: DecisionTreeNode[] = [
    {
      step: 1,
      stage: 'Anamnesis',
      title: 'Identifikasi Karakteristik & Gejala Pasien (Metode WWHAM)',
      description: `Konfirmasi keluhan khas: ${protocol.typicalSymptoms.slice(0, 3).join(', ')}. Gali informasi usia pasien, durasi sakit, obat yang telah dicoba, serta penyakit kronis penyerta (Hipertensi, Asma, Maag, Ginjal, Kehamilan).`,
      actionType: 'assess',
      badgeText: 'WWHAM Anamnesis'
    },
    {
      step: 2,
      stage: 'Skrining Red Flags',
      title: 'Penapisan Tanda Bahaya (Red Flags - Wajib Segera Rujuk)',
      description: `Cek tanda darurat: ${protocol.redFlags.slice(0, 4).join('; ')}. JIKA PASIEN MEMILIKI SALAH SATU TANDA BAHAYA TERSEBUT: Hentikan swamedikasi dan segera rujuk ke Dokter / IGD!`,
      actionType: 'danger_refer',
      badgeText: 'Triage Darurat',
      note: 'Keselamatan pasien adalah prioritas utama farmasi klinis.'
    },
    {
      step: 3,
      stage: 'Stratifikasi Kasus',
      title: `Verifikasi Kriteria Kelayakan Swamedikasi Mandiri (< ${protocol.maxSelfMedDays} Hari)`,
      description: `Pastikan keluhan tergolong ringan-sedang, belum berlangsung lebih dari ${protocol.maxSelfMedDays} hari, dan pasien tidak memiliki kontraindikasi komorbiditas berat.`,
      actionType: 'assess',
      badgeText: 'Kriteria Kelayakan'
    },
    {
      step: 4,
      stage: 'Lini Pertama',
      title: `Terapi Utama Lini Pertama: ${firstLineDrug ? firstLineDrug.genericName : 'Terapi Simtomatik Standar'}`,
      description: `Berikan ${firstLineDrug ? `${firstLineDrug.genericName} (${firstLineDrug.bpomClass})` : 'obat lini pertama'}. Aturan pakai: ${firstLineDrug?.dosageGuideline || 'Sesuai monografi'}. Waktu minum: ${firstLineDrug?.timing || 'Sesuai petunjuk'}. Sertai edukasi non-farmakologi: ${protocol.nonPharmacolTherapy.slice(0, 2).join('. ')}.`,
      actionType: 'recommend_firstline',
      badgeText: 'Lini 1 Terpilih'
    }
  ];

  if (secondLineDrug) {
    const isOwa = secondLineDrug.bpomClass === 'Obat Wajib Apotek (OWA)';
    steps.push({
      step: 5,
      stage: isOwa ? 'Lini Alternatif/DOWA' : 'Stratifikasi Kasus',
      title: `Pilihan Alternatif / Lini Tambahan: ${secondLineDrug.genericName}`,
      description: `Bila terapi lini 1 belum memadai atau ada indikasi khusus, pertimbangkan ${secondLineDrug.genericName} (${secondLineDrug.bpomClass}). ${secondLineDrug.owaDetails ? `[Regulasi: ${secondLineDrug.owaDetails.skMenkes} - Batas: ${secondLineDrug.owaDetails.maxDispense}].` : ''} Aturan pakai: ${secondLineDrug.dosageGuideline}.`,
      actionType: 'recommend_secondline',
      badgeText: isOwa ? 'Regulasi DOWA' : 'Opsi Tambahan'
    });
  }

  steps.push({
    step: secondLineDrug ? 6 : 5,
    stage: 'Batas Rujukan',
    title: `Batas Waktu Monitoring & Evaluasi (Maksimal ${protocol.maxSelfMedDays} Hari)`,
    description: `Edukasi pasien: Bila gejala tidak membaik atau bertambah parah dalam waktu ${protocol.maxSelfMedDays} hari (${protocol.whenToSeeDoctor[0] || 'keluhan persisten'}), hentikan pengobatan mandiri dan periksakan diri ke dokter.`,
    actionType: 'monitor_days',
    badgeText: `Maks. ${protocol.maxSelfMedDays} Hari`
  });

  return steps;
}

function enrichSwamedikasiProtocols(protocols: SwamedikasiProtocol[]): SwamedikasiProtocol[] {
  return protocols.map((protocol) => {
    const enrichedDrugs = protocol.recommendedDrugs.map((drug, drugIdx) => {
      const gName = drug.genericName.toLowerCase();

      // 1. Determine first-line recommendation if not explicitly set
      let isFirstLine = drug.isFirstLine;
      if (typeof isFirstLine !== 'boolean') {
        if (drugIdx === 0 && !gName.includes('fenilefrin') && !gName.includes('pseudoefedrin')) {
          isFirstLine = true;
        } else if (gName.includes('saline') || gName.includes('parasetamol') || gName.includes('antasida') || gName.includes('oralit') || gName.includes('zinc sulfat') || gName.includes('setirizin')) {
          isFirstLine = true;
        } else {
          isFirstLine = false;
        }
      }

      // 2. Determine OWA Details
      let owaDetails = drug.owaDetails;
      if (!owaDetails && drug.bpomClass === 'Obat Wajib Apotek (OWA)') {
        if (gName.includes('mefenamat')) {
          owaDetails = {
            owaNumber: 1,
            skMenkes: 'Kepmenkes RI No. 347/Menkes/SK/VII/1990 (DOWA 1)',
            maxDispense: 'Maksimal 20 tablet',
            patientNotesRequired: true,
            clinicalConditions: 'Analgesik akut jangka pendek (maks 5-7 hari), hanya untuk pengobatan ulangan yang pernah didiagnosis dokter.'
          };
        } else if (gName.includes('mebendazol')) {
          owaDetails = {
            owaNumber: 1,
            skMenkes: 'Kepmenkes RI No. 347/Menkes/SK/VII/1990 (DOWA 1)',
            maxDispense: 'Maksimal 6 tablet',
            patientNotesRequired: true,
            clinicalConditions: 'Pengobatan infeksi cacing usus keluarga; catat identitas pasien di PMR Apotek.'
          };
        } else if (gName.includes('famotidin')) {
          owaDetails = {
            owaNumber: 2,
            skMenkes: 'Kepmenkes RI No. 924/Menkes/SK/X/1993 (DOWA 2)',
            maxDispense: 'Maksimal 10 tablet',
            patientNotesRequired: true,
            clinicalConditions: 'Pengobatan ulangan hiperasiditas lambung yang telah didiagnosis dokter.'
          };
        } else if (gName.includes('ketokonazol')) {
          owaDetails = {
            owaNumber: 2,
            skMenkes: 'Kepmenkes RI No. 924/Menkes/SK/X/1993 (DOWA 2)',
            maxDispense: 'Maksimal 1 tube (5–15 gram)',
            patientNotesRequired: true,
            clinicalConditions: 'Hanya untuk infeksi jamur kulit dermatofita terbatas (Tinea), bukan mikosis sistemik.'
          };
        } else if (gName.includes('triamsinolon')) {
          owaDetails = {
            owaNumber: 2,
            skMenkes: 'Kepmenkes RI No. 924/Menkes/SK/X/1993 (DOWA 2)',
            maxDispense: 'Maksimal 1 tube (5 gram)',
            patientNotesRequired: true,
            clinicalConditions: 'Stomatitis aftosa rekuren (sariawan berat) tanpa lesi infeksi virus/jamur aktif.'
          };
        } else if (gName.includes('diklofenak')) {
          owaDetails = {
            owaNumber: 2,
            skMenkes: 'Kepmenkes RI No. 924/Menkes/SK/X/1993 (DOWA 2)',
            maxDispense: 'Maksimal 1 tube',
            patientNotesRequired: true,
            clinicalConditions: 'Anti-inflamasi topikal untuk nyeri sendi, terkilir, atau memar tertutup.'
          };
        } else if (gName.includes('asetilsistein')) {
          owaDetails = {
            owaNumber: 3,
            skMenkes: 'Kepmenkes RI No. 1176/Menkes/SK/X/1999 (DOWA 3)',
            maxDispense: 'Maksimal 20 kapsul',
            patientNotesRequired: true,
            clinicalConditions: 'Mukolitik oral untuk batuk berdahak kental akut pada dewasa dan anak > 2 tahun.'
          };
        } else if (gName.includes('setirizin')) {
          owaDetails = {
            owaNumber: 3,
            skMenkes: 'Kepmenkes RI No. 1176/Menkes/SK/X/1999 (DOWA 3)',
            maxDispense: 'Maksimal 10 tablet / 1 botol sirup',
            patientNotesRequired: true,
            clinicalConditions: 'Antihistamin non-sedatif untuk alergi kulit / rhinitis alergi persisten.'
          };
        } else if (gName.includes('permetrin') || gName.includes('gameksan')) {
          owaDetails = {
            owaNumber: 3,
            skMenkes: 'Kepmenkes RI No. 1176/Menkes/SK/X/1999 (DOWA 3)',
            maxDispense: 'Maksimal 1 tube (30 gram)',
            patientNotesRequired: true,
            clinicalConditions: 'Skabies keluarga, aplikasi merata semalaman (8–12 jam) dari leher ke bawah.'
          };
        } else if (gName.includes('klotrimazol')) {
          owaDetails = {
            owaNumber: 1,
            skMenkes: 'Kepmenkes RI No. 347/Menkes/SK/VII/1990 (DOWA 1)',
            maxDispense: 'Maksimal 1 tube krim / 1 strip (6 tab vaginal)',
            patientNotesRequired: true,
            clinicalConditions: 'Hanya untuk pengobatan ulangan kandidiasis vulvovaginal yang pernah didiagnosis dokter.'
          };
        } else if (gName.includes('nistatin')) {
          owaDetails = {
            owaNumber: 1,
            skMenkes: 'Kepmenkes RI No. 347/Menkes/SK/VII/1990 (DOWA 1)',
            maxDispense: 'Maksimal 1 botol suspensi (12 mL) / 1 strip ovula',
            patientNotesRequired: true,
            clinicalConditions: 'Antijamur kandidiasis oral/vaginal ulangan.'
          };
        } else if (gName.includes('hidrokortison')) {
          owaDetails = {
            owaNumber: 1,
            skMenkes: 'Kepmenkes RI No. 347/Menkes/SK/VII/1990 (DOWA 1)',
            maxDispense: 'Maksimal 1 tube (5–15 gram)',
            patientNotesRequired: true,
            clinicalConditions: 'Kortikosteroid potensi rendah untuk eksema/dermatitis kontak ringan (maksimal 7 hari).'
          };
        } else if (gName.includes('asiklovir')) {
          owaDetails = {
            owaNumber: 2,
            skMenkes: 'Kepmenkes RI No. 924/Menkes/SK/X/1993 (DOWA 2)',
            maxDispense: 'Maksimal 1 tube (5 gram)',
            patientNotesRequired: true,
            clinicalConditions: 'Herpes labialis bibir berulang yang pernah didiagnosis dokter.'
          };
        }
      }

      // 3. Determine Comorbid Warnings
      let comorbidWarnings = drug.comorbidWarnings ? [...drug.comorbidWarnings] : [];
      if (comorbidWarnings.length === 0) {
        if (gName.includes('parasetamol')) {
          comorbidWarnings = [
            { comorbid: 'hipertensi', status: 'aman', note: 'Analgesik-antipiretik lini pertama paling aman untuk pasien hipertensi.' },
            { comorbid: 'maag', status: 'aman', note: 'Ramah lambung, tidak mengikis mukosa lambung seperti NSAID.' },
            { comorbid: 'asma', status: 'aman', note: 'Tidak memicu bronkospasme pada mayoritas penderita asma.' },
            { comorbid: 'hamil', status: 'aman', note: 'Lini pertama paling aman untuk seluruh trimester kehamilan dan menyusui (Kategori B).' }
          ];
        } else if (gName.includes('ibuprofen') || gName.includes('mefenamat') || gName.includes('aspirin')) {
          comorbidWarnings = [
            { comorbid: 'maag', status: 'kontraindikasi', note: 'KONTRAINDIKASI MUTLAK pada riwayat tukak lambung, GERD erosif, atau pendarahan saluran cerna.' },
            { comorbid: 'hipertensi', status: 'hati-hati', note: 'Memicu retensi cairan dan dapat menaikkan tekanan darah serta melemahkan obat antihipertensi.' },
            { comorbid: 'asma', status: 'hati-hati', note: 'Waspada risiko bronkospasme akut pada penderita asma sensitif NSAID (AERD).' },
            { comorbid: 'ginjal', status: 'kontraindikasi', note: 'Menghambat prostaglandin renal; risiko penurunan laju filtrasi ginjal akut.' },
            { comorbid: 'hamil', status: 'kontraindikasi', note: 'KONTRAINDIKASI MUTLAK pada Trimester 3 (risiko penutupan dini duktus arteriosus janin).' }
          ];
        } else if (gName.includes('pseudoefedrin') || gName.includes('fenilefrin') || gName.includes('efedrin')) {
          comorbidWarnings = [
            { comorbid: 'hipertensi', status: 'kontraindikasi', note: 'KONTRAINDIKASI MUTLAK! Dekongestan simpatomimetik memicu vasokonstriksi sistemik dan lonjakan tensi (krisis hipertensi).' },
            { comorbid: 'glaukoma', status: 'kontraindikasi', note: 'Memicu midriasis dan peningkatan tekanan intraokular pada glaukoma sudut sempit.' },
            { comorbid: 'diabetes', status: 'hati-hati', note: 'Aktivitas simpatomimetik dapat memicu fluktuasi kadar gula darah.' }
          ];
        } else if (gName.includes('saline') || gName.includes('sodium chloride')) {
          comorbidWarnings = [
            { comorbid: 'hipertensi', status: 'aman', note: 'Lini pertama paling aman untuk penderita darah tinggi karena bekerja murni osmotik lokal.' },
            { comorbid: 'hamil', status: 'aman', note: '100% aman untuk seluruh usia kehamilan dan ibu menyusui tanpa absorpsi sistemik.' },
            { comorbid: 'glaukoma', status: 'aman', note: 'Bebas efek simpatomimetik sehingga aman untuk mata.' }
          ];
        } else if (gName.includes('antasida')) {
          comorbidWarnings = [
            { comorbid: 'maag', status: 'aman', note: 'Terapi penetral asam lambung lini pertama yang bekerja cepat dalam 15–30 menit.' },
            { comorbid: 'ginjal', status: 'hati-hati', note: 'Waspada akumulasi ion aluminium dan magnesium pada gangguan fungsi ginjal lanjut.' },
            { comorbid: 'hamil', status: 'aman', note: 'Aman untuk heartburn kehamilan pada dosis anjuran.' }
          ];
        } else if (gName.includes('famotidin')) {
          comorbidWarnings = [
            { comorbid: 'maag', status: 'aman', note: 'Menurunkan sekresi asam lambung hingga 10–12 jam.' },
            { comorbid: 'ginjal', status: 'hati-hati', note: 'Perlu pengurangan dosis 50% bila klirens kreatinin < 50 mL/menit.' }
          ];
        } else if (gName.includes('setirizin') || gName.includes('loratadin')) {
          comorbidWarnings = [
            { comorbid: 'hipertensi', status: 'aman', note: 'Aman untuk pasien darah tinggi, tidak memiliki efek dekongestan vasokonstriktor.' },
            { comorbid: 'glaukoma', status: 'aman', note: 'Efek antikolinergik minimal dibanding antihistamin generasi pertama.' },
            { comorbid: 'asma', status: 'aman', note: 'Membantu meredakan gejala alergi penyerta tanpa memicu spasme saluran napas.' }
          ];
        } else if (gName.includes('klorfeniramin') || gName.includes('ctm') || gName.includes('dimenhidrinat')) {
          comorbidWarnings = [
            { comorbid: 'glaukoma', status: 'kontraindikasi', note: 'KONTRAINDIKASI MUTLAK pada glaukoma sudut sempit karena efek antikolinergik kuat memicu kenaikan TIO.' },
            { comorbid: 'ginjal', status: 'hati-hati', note: 'Risiko retensi urin pada pembesaran prostat atau gangguan ekskresi.' }
          ];
        } else if (gName.includes('oralit')) {
          comorbidWarnings = [
            { comorbid: 'maag', status: 'aman', note: 'Sangat aman dan esensial mencegah dehidrasi tanpa mengiritasi lambung.' },
            { comorbid: 'hipertensi', status: 'hati-hati', note: 'Perhatikan asupan natrium harian bila dikonsumsi dalam volume sangat besar.' }
          ];
        } else if (gName.includes('zinc')) {
          comorbidWarnings = [
            { comorbid: 'maag', status: 'aman', note: 'Bantu regenerasi epitel mukosa usus pasca-diare.' },
            { comorbid: 'hamil', status: 'aman', note: 'Suplemen mineral esensial yang aman sesuai RDA.' }
          ];
        }
      }

      return {
        ...drug,
        isFirstLine,
        owaDetails,
        comorbidWarnings
      };
    });

    return {
      ...protocol,
      recommendedDrugs: enrichedDrugs,
      decisionTree: getProtocolDecisionTree(protocol)
    };
  });
}

export const SWAMEDIKASI_PROTOCOLS: SwamedikasiProtocol[] = enrichSwamedikasiProtocols(RAW_SWAMEDIKASI_PROTOCOLS);

export function searchSwamedikasiProtocols(query: string): SwamedikasiProtocol[] {
  if (!query || !query.trim()) return SWAMEDIKASI_PROTOCOLS;
  const q = query.toLowerCase().trim();
  return SWAMEDIKASI_PROTOCOLS.filter((p) => {
    return (
      p.title.toLowerCase().includes(q) ||
      p.quickSummary.toLowerCase().includes(q) ||
      p.laymanKeywords.some((k) => k.toLowerCase().includes(q)) ||
      p.typicalSymptoms.some((s) => s.toLowerCase().includes(q)) ||
      p.recommendedDrugs.some(
        (d) =>
          d.genericName.toLowerCase().includes(q) ||
          d.brandExamples.some((b) => b.toLowerCase().includes(q))
      )
    );
  });
}

export function getProtocolsByCategory(category: SwamedikasiCategoryKey): SwamedikasiProtocol[] {
  return SWAMEDIKASI_PROTOCOLS.filter((p) => p.category === category);
}

