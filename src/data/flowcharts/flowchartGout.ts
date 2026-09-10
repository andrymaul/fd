import { DiseaseFlowchartData } from '../clinicalFlowchartData';

/**
 * Algoritma Interaktif Klinis: Artritis Gout Akut & Hiperurisemia Kronis
 * Standar Konsensus Indonesian Rheumatology Association (IRA 2023) & ACR Guideline for the Management of Gout
 */
export const FLOWCHART_GOUT: DiseaseFlowchartData = {
  id: 'flowchart-gout',
  diseaseName: 'Artritis Gout Akut & Hiperurisemia Kronis',
  shortSubtitle: 'Tatalaksana Serangan Akut (< 24 Jam), Profilaksis Flare Kolkisin, Titrasi Allopurinol / Febuxostat, & Target Asam Urat',
  category: 'Reumatologi & Muskuloskeletal',
  icd10: 'M10 (Gout Arthritis)',
  bannerGradient: 'from-violet-950 via-slate-950 to-purple-950',
  accentColor: 'violet',
  classificationTitle: 'Klasifikasi Stadium Artritis Gout Akut, Interkritikal, & Kronik Bertofus (Standar IRA / ACR)',
  classificationLevels: [
    {
      id: 'gout-acute-mono',
      label: 'SERANGAN AKUT DINI (< 24 JAM / MONOARTIKULAR)',
      criteria: 'Nyeri sendi hebat mendadak (VAS 7–10), eritema, edema, dan panas lokal (klasik pada sendi MTP-1 / Podagra) awitan < 24–36 jam',
      badgeColor: 'bg-rose-600 text-white animate-pulse',
      textColor: 'text-rose-800 dark:text-rose-300',
      bgColor: 'bg-rose-50/80 dark:bg-rose-950/40',
      borderColor: 'border-rose-300 dark:border-rose-700',
      clinicalAction: 'Inisiasi Segera Kolkisin Dosis Rendah (1.2 mg lanjut 0.6 mg 1 jam kemudian) ATAU NSAID potensi tinggi oral secepat mungkin.'
    },
    {
      id: 'gout-intercritical',
      label: 'PERIODE INTERKRITIKAL (ASIMPTOMATIK DENGAN RISIKO FLARE)',
      criteria: 'Fase bebas gejala nyeri sendi di antara episode serangan akut, namun kadar asam urat serum tetap tinggi (> 7.0 mg/dL pada pria / > 6.0 mg/dL pada wanita)',
      badgeColor: 'bg-amber-500 text-slate-900',
      textColor: 'text-amber-800 dark:text-amber-300',
      bgColor: 'bg-amber-50/80 dark:bg-amber-950/40',
      borderColor: 'border-amber-300 dark:border-amber-700',
      clinicalAction: 'Mulai Urate-Lowering Therapy (ULT: Allopurinol mulai 100 mg/hari) DISERTAI profilaksis flare (Kolkisin 0.5–0.6 mg/hari selama 3–6 bulan).'
    },
    {
      id: 'gout-chronic-tophaceous',
      label: 'GOUT KRONIK BERTOFUS (CHRONIC TOPHACEOUS GOUT)',
      criteria: 'Terdapat deposit tofus subkutan yang teraba pada sendi/daun telinga, bukti erosi sendi pada foto rontgen, atau serangan akut berulang >= 2x setahun',
      badgeColor: 'bg-purple-600 text-white',
      textColor: 'text-purple-800 dark:text-purple-300',
      bgColor: 'bg-purple-50/80 dark:bg-purple-950/40',
      borderColor: 'border-purple-300 dark:border-purple-700',
      clinicalAction: 'Target Asam Urat Agresif < 5.0 mg/dL! Titrasi Allopurinol hingga 300–600 mg/hari atau alihkan ke Febuxostat 80 mg/hari.'
    },
    {
      id: 'gout-asymptomatic-hyperuricemia',
      label: 'HIPERURISEMIA ASIMPTOMATIK (TANPA SERANGAN ARTRITIS)',
      criteria: 'Kadar asam urat serum > 7.0 mg/dL tanpa riwayat serangan radang sendi gout dan tanpa bukti tofus klinis maupun radiologis',
      badgeColor: 'bg-emerald-500 text-white',
      textColor: 'text-emerald-700 dark:text-emerald-300',
      bgColor: 'bg-emerald-50/80 dark:bg-emerald-950/40',
      borderColor: 'border-emerald-300 dark:border-emerald-700',
      clinicalAction: 'TIDAK DIREKOMENDASIKAN OBAT PENURUN ASAM URAT RUTIN (ACR 2020); utamakan modifikasi diet rendah purin dan evaluasi obat pemicu (Tiazid).'
    }
  ],
  flowchartTitle: 'Algoritma Penanganan Serangan Akut Gout & Titrasi Terapi Penurun Asam Urat (ULT) IRA 2023',
  lifestyleModifications: [
    {
      title: 'Restriksi Makanan Tinggi Purin (Jeroan, Kerang, & Daging Merah)',
      impact: 'Menurunkan Kadar Asam Urat Serum 1.0–1.5 mg/dL Secara Alami',
      details: 'Hindari hati, babat, usus, emping melinjo, kerang, sarden, dan daging kambing/sapi olahan berlebih.'
    },
    {
      title: 'HINDARI ALKOHOL (Terutama Bir) & MINUMAN TINGGI FRUKTOSA',
      impact: 'Mencegah Pemicu Serangan Akut Terkuat (Acute Flare Trigger)',
      details: 'Bir mengandung purin tinggi dan alkohol memicu kompetisi ekskresi asam urat di ginjal; sirup jagung tinggi fruktosa (HFCS) memicu sintesis asam urat hepatik.'
    },
    {
      title: 'Tingkatkan Asupan Cairan Air Putih (Minimal 2.5–3.0 Liter/Hari)',
      impact: 'Meningkatkan Klirens Asam Urat Ginjal & Mencegah Nefrolitiasis Batu Asam Urat',
      details: 'Pertahankan hidrasi optimal dan urinasi alkalis; konsumsi produk susu rendah lemak (low-fat milk/yogurt) yang bersifat urikosurik alami.'
    },
    {
      title: 'Penurunan Berat Badan Bertahap pada Pasien Obesitas',
      impact: 'Memperbaiki Sensitivitas Insulin & Menurunkan Resistensi Klirens Urat',
      details: 'Turunkan berat badan secara perlahan (hindari diet keto atau puasa kelaparan ekstrem karena ketosis memicu asam urat melonjak).'
    }
  ],
  comorbidProfiles: [
    {
      name: 'Gout dengan Penyakit Ginjal Kronik (eGFR < 60 mL/min)',
      icon: '🧪',
      targetBP: 'Target Asam Urat < 6.0 mg/dL Tanpa Efek Nefrotoksik',
      firstLineDrug: 'Allopurinol mulai dosis sangat rendah 50 mg/hari ATAU Febuxostat 40 mg/hari (bebas penyesuaian eGFR)',
      rationale: 'Kolkisin dan NSAID berisiko toksisitas berat pada eGFR rendah; Febuxostat dimetabolisme di hati sehingga menjadi pilihan superior pada gangguan ginjal.'
    },
    {
      name: 'Gout dengan Riwayat Ulkus Peptikum / Perdarahan Saluran Cerna',
      icon: '🔥',
      targetBP: 'Hindari NSAID Non-Selektif Konvensional',
      firstLineDrug: 'Kolkisin Dosis Rendah ATAU Kortikosteroid Oral (Metilprednisolon 16–32 mg/hari tapering)',
      rationale: 'Kortikosteroid jangka pendek (5–7 hari) sangat efektif meredakan inflamasi sendi tanpa menimbulkan risiko ulserasi mukosa lambung seperti NSAID.'
    },
    {
      name: 'Gout dengan Etnis Asia Risiko Alergi Berat (Alel HLA-B*5801)',
      icon: '🧬',
      targetBP: 'Pencegahan Sindrom Stevens-Johnson (SJS / TEN)',
      firstLineDrug: 'Febuxostat 40–80 mg 1x/hari ATAU Uji Genetik Skrining HLA-B*5801 sebelum Allopurinol',
      rationale: 'Alel HLA-B*5801 memiliki prevalensi tinggi pada populasi Asia; membawa risiko reaksi hipersensitivitas kutaneus berat fatal terhadap Allopurinol.'
    }
  ],
  flowchartSteps: [
    {
      stepId: 'gout-step-1',
      stepNumber: 1,
      stageBadge: 'Tahap 1: Terapi Serangan Akut (< 24 Jam)',
      title: 'Pemberian Antiinflamasi Dini: Kolkisin, NSAID, atau Steroid',
      subtitle: 'Mulai Pengobatan Segera dalam 24 Jam Pertama Awitan Serangan Nyeri Akut',
      description: 'Pilihan 1: Kolkisin dosis rendah (1.2 mg segera, dilanjutkan 0.6 mg 1 jam kemudian, total 1.8 mg di hari ke-1; lanjut 0.6 mg 1-2x/hari hingga reda). Pilihan 2: NSAID potensi tinggi (Naproxen 500 mg 2x/hari atau Kalium Diklofenak 50 mg 3x/hari). Pilihan 3: Metilprednisolon 16–32 mg/hari tapering 7–10 hari.',
      branchType: 'general',
      drugs: [
        {
          drugName: 'Colchicine (Recolfar)',
          dosage: '1.2 mg stat, lalu 0.6 mg setelah 1 jam (hari ke-1); lanjut 0.5–0.6 mg 1–2x/hari',
          role: 'Lini Pertama Serangan Akut (Dosis Rendah Efektif & Aman)',
          fornasTier: 'Faskes 1/2/3',
          isPreferred: true
        },
        {
          drugName: 'Kalium Diklofenak (Cataflam)',
          dosage: '50 mg per oral 2 - 3 kali sehari sesudah makan selama 3–5 hari',
          role: 'Alternatif NSAID Onset Analgesik Cepat',
          fornasTier: 'Faskes 1/2/3',
          isPreferred: true
        },
        {
          drugName: 'Methylprednisolone Oral',
          dosage: '16 - 32 mg/hari dosis terbagi selama 3 hari, lalu tapering turun dalam 7-10 hari',
          role: 'Pilihan Utama Pasien Kontraindikasi NSAID / Gangguan Ginjal',
          fornasTier: 'Faskes 1/2/3',
          isPreferred: true
        }
      ],
      escalationTrigger: 'Nyeri akut mereda total; persiapan inisiasi terapi jangka panjang penurun asam urat (ULT).',
      clinicalPearls: 'Dosis kolkisin lama (0.5 mg tiap 2 jam hingga diare) SUDAH DITINGGALKAN karena toksisitas tinggi. Regimen dosis rendah (1.2 mg + 0.6 mg) terbukti sama efektifnya dengan efek samping gastrointestinal yang minimal.'
    },
    {
      stepId: 'gout-step-2',
      stepNumber: 2,
      stageBadge: 'Tahap 2: Indikasi & Waktu Memulai ULT',
      title: 'Menentukan Indikasi Urate-Lowering Therapy (ULT)',
      subtitle: 'Indikasi Mutlak: Tofus, Bukti Erosi Radiologis, atau Serangan Berulang >= 2x/Tahun',
      description: 'Inisiasi obat penurun asam urat diindikasikan kuat pada pasien dengan tofus, kerusakan sendi, atau eksaserbasi berulang. KONSENSUS TERBARU (ACR 2020 & IRA 2023): ULT DAPAT DIMULAI SEJAK SERANGAN AKUT MASIH BERLANGSUNG, asalkan antiinflamasi adekuat telah diberikan!',
      branchType: 'single',
      drugs: [],
      escalationTrigger: 'Pasien memenuhi indikasi inisiasi ULT.',
      clinicalPearls: 'Jika pasien SUDAH rutin minum Allopurinol saat serangan akut terjadi: JANGAN PERNAH HENTIKAN Allopurinol! Fluktuasi asam urat akibat penghentian obat justru akan memperparah dan memperpanjang inflamasi sendi.'
    },
    {
      stepId: 'gout-step-3',
      stepNumber: 3,
      stageBadge: 'Tahap 3: Inisiasi & Titrasi Bertahap ULT',
      title: 'Inisiasi Allopurinol Dosis Rendah dengan Titrasi Naik Bertahap',
      subtitle: 'Mulai Allopurinol 100 mg/hari (50 mg bila CKD), Titrasi Tiap 2–4 Minggu',
      description: 'Mulai Allopurinol 100 mg sekali sehari sesudah makan. Periksa kadar asam urat serum tiap 2–4 minggu dan naikkan dosis bertahap (200 mg, 300 mg, hingga maks 600–800 mg/hari) sampai target kadar asam urat serum < 6.0 mg/dL (< 5.0 mg/dL bila ada tofus) tercapai.',
      branchType: 'escalation',
      drugs: [
        {
          drugName: 'Allopurinol (Zyloric / Sinoric)',
          dosage: 'Mulai 100 mg 1x/hari sesudah makan; titrasi naik bertahap tiap 2–4 minggu (maks 600–800 mg/hari)',
          role: 'Lini Pertama Urate-Lowering Therapy (Inhibitor Xantin Oksidase)',
          fornasTier: 'Faskes 1/2/3',
          isPreferred: true
        },
        {
          drugName: 'Febuxostat (Feburic)',
          dosage: '40 mg 1x/hari; dapat dinaikkan ke 80 mg 1x/hari bila target belum tercapai',
          role: 'Lini Pertama Alternatif / Alergi Allopurinol / Gagal Ginjal',
          fornasTier: 'Faskes 2/3',
          isPreferred: true
        },
        {
          drugName: 'Colchicine Profilaksis (Recolfar)',
          dosage: '0.5 - 0.6 mg per oral 1 - 2 kali sehari selama 3 - 6 bulan',
          role: 'Profilaksis Flare Wajib Selama Masa Titrasi ULT',
          fornasTier: 'Faskes 1/2/3',
          isPreferred: true
        }
      ],
      escalationTrigger: 'Pasien mengalami ruam kulit kemerahan, demam, atau gagal mencapai target < 6 mg/dL dengan dosis maksimal toleransi.',
      clinicalPearls: 'WAJIB memberikan profilaksis flare (Kolkisin 0.5 mg 1-2x/hari) selama 3–6 bulan pertama inisiasi ULT. Penurunan asam urat yang cepat melarutkan kristal tofus mikroskopis dan seringkali memicu "mobilization flare" yang disalahartikan sebagai efek samping obat.'
    },
    {
      stepId: 'gout-step-4',
      stepNumber: 4,
      stageBadge: 'Tahap 4: Pemeliharaan Target & Resolusi Tofus',
      title: 'Terapi Pemeliharaan Seumur Hidup & Monitor Target',
      subtitle: 'Pertahankan Asam Urat < 6.0 mg/dL untuk Mencegah Pembentukan Kristal Baru',
      description: 'Lanjutkan dosis rumatan Allopurinol atau Febuxostat jangka panjang. Pantau kadar asam urat serum tiap 6 bulan. Hentikan kolkisin profilaksis setelah 3–6 bulan bila asam urat stabil terkontrol dan tidak ada serangan ulang.',
      branchType: 'comorbid',
      drugs: [],
      escalationTrigger: 'Kadar asam urat stabil tercapai, tidak ada serangan baru, dan tofus mengecil secara bertahap.',
      clinicalPearls: 'Artritis Gout adalah penyakit metabolik kronik kurabel (dapat disembuhkan jika kristal monosodium urat larut total). Menghentikan Allopurinol setelah asam urat normal akan menyebabkan kristal urat menumpuk kembali dalam 1–2 tahun.'
    }
  ],
  drugClassificationTable: [
    {
      id: 'gout-xoi',
      drugClass: 'Inhibitor Xantin Oksidase (Xanthine Oxidase Inhibitors - XOI)',
      classCategory: 'other',
      exampleDrugs: [
        { name: 'Allopurinol', dailyDosage: 'Mulai 100 mg 1x/hari, titrasi hingga 300–800 mg/hari', fornasTier: 'Faskes 1/2/3' },
        { name: 'Febuxostat', dailyDosage: '40–80 mg 1x/hari tanpa keterikatan makanan', fornasTier: 'Faskes 2/3' }
      ],
      mechanismOfAction: 'Inhibisi enzim xantin oksidase yang mengkatalisis konversi hipoxantin menjadi xantin dan xantin menjadi asam urat, menurunkan produksi asam urat tubuh.',
      clinicalIndications: 'Pilihan utama penurun asam urat (ULT) jangka panjang untuk semua pasien artritis gout dengan hiperurisemia.',
      adverseEffects: 'Allopurinol: Hipersensitivitas ruam kulit (SJS/TEN), hepatotoksisitas transien; Febuxostat: peningkatan enzim hati, artralgia ringan.',
      contraindications: 'Riwayat alergi hipersensitivitas berat terhadap allopurinol; penggunaan bersamaan dengan Azathioprine atau 6-Mercaptopurine (interaksi fatal).',
      monitoringKey: 'Kadar asam urat serum tiap 2–4 minggu saat titrasi; fungsi hepar dan ginjal; edukasi pasien segera lapor bila timbul ruam kulit gatal.'
    },
    {
      id: 'gout-colchicine',
      drugClass: 'Antimitotik Antiinflamasi Spesifik Gout (Alkaloid Kolkisin)',
      classCategory: 'other',
      exampleDrugs: [
        { name: 'Colchicine', dailyDosage: 'Akut: 1.2 mg + 0.6 mg (hari 1); Profilaksis: 0.5–0.6 mg 1-2x/hari', fornasTier: 'Faskes 1/2/3' }
      ],
      mechanismOfAction: 'Berikatan dengan tubulin mikrotubulus, menghambat kemotaksis, fagositosis, dan degranulasi neutrofil terhadap kristal monosodium urat (MSU) di rongga sendi.',
      clinicalIndications: 'Lini pertama serangan gout akut (< 24 jam) dan profilaksis flare wajib selama 3-6 bulan pertama inisiasi terapi penurun asam urat.',
      adverseEffects: 'Diare, kram perut, mual, muntah; toksisitas neuromiopati pada penggunaan jangka panjang dengan gangguan ginjal.',
      contraindications: 'Gangguan ginjal dan hati berat yang bersamaan dengan penggunaan inhibitor poten CYP3A4 atau P-glikoprotein (Klaritromisin, Ketokonazol).',
      monitoringKey: 'Konsistensi feses (bila diare terjadi, kurangi dosis); jangan gunakan dosis berlebih.'
    },
    {
      id: 'gout-nsaid',
      drugClass: 'Antiinflamasi Non-Steroid (NSAID Analgesik Poten)',
      classCategory: 'other',
      exampleDrugs: [
        { name: 'Kalium Diklofenak', dailyDosage: '50 mg 2–3x/hari sesudah makan', fornasTier: 'Faskes 1/2/3' },
        { name: 'Naproxen', dailyDosage: '500 mg 2x/hari', fornasTier: 'Faskes 2/3' },
        { name: 'Celecoxib', dailyDosage: '200 mg 1–2x/hari', fornasTier: 'Faskes 2/3' }
      ],
      mechanismOfAction: 'Inhibisi enzim siklooksigenase (COX-1 dan COX-2), menekan sintesis prostaglandin proinflamasi pada sinovium sendi yang meradang.',
      clinicalIndications: 'Lini pertama serangan gout akut pada pasien usia muda tanpa riwayat penyakit ginjal, penyakit kardiovaskular, atau ulkus peptikum.',
      adverseEffects: 'Dispepsia, perdarahan saluran cerna, retensi cairan, peningkatan tekanan darah, penurunan filtrasi ginjal akut.',
      contraindications: 'Ulkus peptikum aktif berdarah, gagal ginjal stadium 3-5, gagal jantung kongestif berat, pasca-CABG.',
      monitoringKey: 'Kreatinin serum; tekanan darah; batasi durasi penggunaan maksimal 5-7 hari.'
    }
  ],
  ebmReferences: [
    {
      id: 'ref-ira-gout-2023',
      title: 'Pedoman Diagnosis & Pengelolaan Artritis Gout di Indonesia',
      organization: 'Indonesian Rheumatology Association (IRA)',
      year: '2023',
      scope: 'Nasional',
      summary: 'Konsensus nasional terkini reumatologi Indonesia mengenai protokol kolkisin dosis rendah serangan akut, pemberian profilaksis flare selama 3-6 bulan, dan target asam urat < 6.0 mg/dL (atau < 5.0 mg/dL pada tofus).',
      evidenceLevel: 'Konsensus Nasional Terakreditasi Kemenkes RI'
    },
    {
      id: 'ref-acr-gout-2020',
      title: '2020 American College of Rheumatology Guideline for the Management of Gout',
      organization: 'American College of Rheumatology (ACR)',
      year: '2020',
      scope: 'Internasional',
      summary: 'Panduan global merekomendasikan strategi treat-to-target titrasi Allopurinol di atas 300 mg/hari bila diperlukan, inisiasi ULT saat serangan akut masih ada, dan tidak mengobati hiperurisemia asimtomatik.',
      evidenceLevel: 'Grade 1A Recommendation'
    }
  ]
};
