import { DiseaseFlowchartData } from '../clinicalFlowchartData';

/**
 * Algoritma Interaktif Klinis: GERD & Dispepsia Fungsional
 * Standar Konsensus Perkumpulan Gastroenterologi Indonesia (PGI-PEGI 2023) & ACG Clinical Guidelines
 */
export const FLOWCHART_GERD: DiseaseFlowchartData = {
  id: 'flowchart-gerd',
  diseaseName: 'Gastroesophageal Reflux Disease (GERD) & Dispepsia',
  shortSubtitle: 'Skrining Alarm Signs, PPI Test Dosis Ganda (2–4 Minggu), Eskalasi P-CAB (Vonoprazan), & Terapi On-Demand',
  category: 'Gastroenterologi & Lambung',
  icd10: 'K21 (Gastro-Esophageal Reflux Disease)',
  bannerGradient: 'from-orange-950 via-slate-950 to-amber-950',
  accentColor: 'orange',
  classificationTitle: 'Klasifikasi Derajat Esofagitis Los Angeles (LA Grade A–D), NERD, & Subtipe Dispepsia Fungsional',
  classificationLevels: [
    {
      id: 'gerd-nerd',
      label: 'NERD (NON-EROSIVE REFLUX DISEASE)',
      criteria: 'Gejala tipikal heartburn (rasa terbakar di dada) dan regurgitasi asam >= 2x seminggu, tanpa kerusakan mukosa esofagus pada endoskopi',
      badgeColor: 'bg-emerald-500 text-white',
      textColor: 'text-emerald-700 dark:text-emerald-300',
      bgColor: 'bg-emerald-50/80 dark:bg-emerald-950/40',
      borderColor: 'border-emerald-300 dark:border-emerald-700',
      clinicalAction: 'Inisiasi PPI dosis standar sekali sehari selama 4–8 minggu. Evaluasi respon gejala klinis dan turunkan ke dosis on-demand bila remisi.'
    },
    {
      id: 'gerd-erosive-mild',
      label: 'ESOFAGITIS EROSIF RINGAN (LA GRADE A & B)',
      criteria: 'Endoskopi menunjukkan satu atau lebih erosi mukosa esofagus <= 5 mm (Grade A) atau > 5 mm tanpa menyatu antar lipatan mukosa (Grade B)',
      badgeColor: 'bg-amber-500 text-slate-900',
      textColor: 'text-amber-800 dark:text-amber-300',
      bgColor: 'bg-amber-50/80 dark:bg-amber-950/40',
      borderColor: 'border-amber-300 dark:border-amber-700',
      clinicalAction: 'PPI dosis standar sekali sehari selama 8 minggu. Mukoprotektor tambahan bila nyeri ulu hati persisten.'
    },
    {
      id: 'gerd-erosive-severe',
      label: 'ESOFAGITIS EROSIF BERAT (LA GRADE C & D)',
      criteria: 'Erosi mukosa menyatu melibatkan >= 75% lingkar esofagus (Grade C) atau erosi melingkar sirkumferensial / ulkus dalam / striktur (Grade D)',
      badgeColor: 'bg-rose-600 text-white',
      textColor: 'text-rose-800 dark:text-rose-300',
      bgColor: 'bg-rose-50/80 dark:bg-rose-950/40',
      borderColor: 'border-rose-300 dark:border-rose-700',
      clinicalAction: 'Inisiasi P-CAB (Vonoprazan 20 mg 1x/hari) atau PPI dosis ganda selama 8 minggu penuh; lanjutkan terapi pemeliharaan kontinu jangka panjang.'
    },
    {
      id: 'gerd-alarm-signs',
      label: 'TANDA BAHAYA (ALARM SIGNS GERD / DISPEPSIA)',
      criteria: 'Disfagia (sulit menelan), odinofagia (sakit menelan), penurunan BB > 10% tanpa sebab, hematemesis/melena, anemia defisiensi besi, usia > 45-50 thn',
      badgeColor: 'bg-red-600 text-white animate-pulse',
      textColor: 'text-red-800 dark:text-red-300',
      bgColor: 'bg-red-50/80 dark:bg-red-950/40',
      borderColor: 'border-red-300 dark:border-red-700',
      clinicalAction: 'RUJUK SEGERA GASTROSKOPI ENDOSKOPI CITO! Wajib menyingkirkan keganasan Adenokarsinoma Esofagus, Kanker Lambung, atau Striktur peptik.'
    }
  ],
  flowchartTitle: 'Algoritma Keputusan Terapi GERD & Dispepsia Konsensus PGI-PEGI 2023',
  lifestyleModifications: [
    {
      title: 'Tinggikan Posisi Kepala Saat Tidur (Elevasi 15–20 cm)',
      impact: 'Mencegah Refluks Nokturnal Secara Gravitasional & Mengurangi Paparan Asam 60%',
      details: 'Gunakan bantal baji (wedge pillow) atau ganjal kaki tempat tidur bagian kepala; hindari menumpuk bantal biasa yang hanya menekuk leher.'
    },
    {
      title: 'Hindari Berbaring Dalam Waktu 2–3 Jam Pasca Makan',
      impact: 'Mencegah Refluks Post-Prandial Saat Tekanan Intragastrik Sedang Maksimal',
      details: 'Makan malam minimal 3 jam sebelum tidur; bagi porsi makan menjadi lebih kecil tetapi lebih sering (small frequent meals).'
    },
    {
      title: 'Penurunan Berat Badan pada Pasien Overweight / Obesitas',
      impact: 'Menurunkan Tekanan Intra-Abdomen & Memperbaiki Tonus Sphincter LES',
      details: 'Penurunan berat badan 5–10% terbukti secara klinis melipatgandakan tingkat keberhasilan remisi gejala GERD.'
    },
    {
      title: 'Hindari Makanan & Minuman Pemicu Relaksasi LES',
      impact: 'Mencegah Relaksasi Sfingter Esofagus Bawah Transien (TLESR)',
      details: 'Batasi kopi, cokelat, peppermint, makanan berlemak tinggi, gorengan, alkohol, rokok, dan minuman bersoda berkarbonasi.'
    }
  ],
  comorbidProfiles: [
    {
      name: 'GERD dengan Dispepsia Fungsional Tipe Postprandial (PDS)',
      icon: '🍽️',
      targetBP: 'Rasa Cepat Kenyang & Begah Pasca Makan',
      firstLineDrug: 'PPI Dosis Standar Pagi + Prokinetik (Domperidone 10 mg atau Itopride 50 mg 3x/hari ac)',
      rationale: 'Kombinasi prokinetik mempercepat laju pengosongan lambung dan mengurangi distensi fundus pemicu refluks.'
    },
    {
      name: 'GERD dengan Nyeri Epigastrium Membandel (EPS) / Gastritis',
      icon: '🔥',
      targetBP: 'Nyeri Ulu Hati Pedih Rasa Terbakar',
      firstLineDrug: 'PPI Dosis Standar + Mukoprotektor (Rebamipide 100 mg 3x/hari atau Sukralfat suspensi)',
      rationale: 'Rebamipide menstimulasi biosintesis prostaglandin mukosa dan membersihkan radikal bebas peradangan mukosa lambung.'
    },
    {
      name: 'GERD Refrakter Terhadap PPI Dosis Ganda (PPI-Resistant)',
      icon: '💊',
      targetBP: 'Respon Parsial / Gagal PPI Konvensional',
      firstLineDrug: 'Ganti ke Potassium-Competitive Acid Blocker: Vonoprazan 20 mg 1x/hari',
      rationale: 'Vonoprazan tidak memerlukan aktivasi asam, memiliki waktu tinggal panjang di kanalikuli sekretori, dan menginhibisi sekresi asam lambung > 90% selama 24 jam.'
    }
  ],
  flowchartSteps: [
    {
      stepId: 'gerd-step-1',
      stepNumber: 1,
      stageBadge: 'Tahap 1: Evaluasi Gejala & Skrining Alarm',
      title: 'Anamnesis Heartburn, Regurgitasi, & Red Flags',
      subtitle: 'Singkirkan Sindrom Koroner Akut (Nyeri Dada Iskemik) & Tanda Bahaya Keganasan',
      description: 'Pastikan keluhan nyeri dada bukan angina pektoris (lakukan EKG bila ada faktor risiko jantung). Skrining tanda bahaya (Alarm Signs). Jika ada tanda bahaya, rujuk segera untuk endoskopi saluran cerna atas (EGD). Jika tanpa tanda bahaya, lanjutkan ke uji diagnostik empiris (PPI Test).',
      branchType: 'general',
      drugs: [],
      escalationTrigger: 'Pasien datang dengan gejala tipikal GERD tanpa tanda bahaya (uncomplicated GERD).',
      clinicalPearls: 'Heartburn akibat GERD dan Angina Pektoris Akut dapat memberikan sensasi klinis yang identik; selalu singkirkan etiologi kardiovaskular akut terlebih dahulu.'
    },
    {
      stepId: 'gerd-step-2',
      stepNumber: 2,
      stageBadge: 'Tahap 2: PPI Test Empiris & Terapi Inisiasi',
      title: 'PPI Dosis Ganda (PPI Test) Selama 2–4 Minggu',
      subtitle: 'Omeprazole 2x20 mg, Lansoprazole 2x30 mg, atau Esomeprazole 2x40 mg ac',
      description: 'Berikan PPI dosis ganda 30-60 menit sebelum sarapan pagi dan makan malam selama 2–4 minggu. Jika gejala berkurang > 50%, diagnosis klinis GERD terkonfirmasi; lanjutkan terapi inisiasi hingga total 8 minggu penuh.',
      branchType: 'single',
      drugs: [
        {
          drugName: 'Lansoprazole',
          dosage: '30 mg per oral dua kali sehari (30–60 menit sebelum makan) selama 4–8 minggu',
          role: 'PPI Generasi 1 Teruji Klinis & Ketersediaan Luas',
          fornasTier: 'Faskes 1/2/3',
          isPreferred: true
        },
        {
          drugName: 'Esomeprazole (Nexium)',
          dosage: '40 mg per oral sekali atau dua kali sehari (ac)',
          role: 'S-Isomer PPI Kendali Asam Lambung Lebih Stabil',
          fornasTier: 'Faskes 2/3',
          isPreferred: true
        },
        {
          drugName: 'Omeprazole',
          dosage: '20 mg per oral dua kali sehari (ac)',
          role: 'Pilihan Pertama Faskes Primer (Puskesmas/Klinik)',
          fornasTier: 'Faskes 1/2/3',
          isPreferred: true
        },
        {
          drugName: 'Antasida Doen Suspensi',
          dosage: '1 - 2 sendok takar (5–10 mL) 3-4 kali sehari saat timbul gejala pedih akut',
          role: 'Pelega Cepat Penetralisir Asam Simtomatik',
          fornasTier: 'Faskes 1/2/3',
          isPreferred: false
        }
      ],
      escalationTrigger: 'Gejala refrakter terhadap PPI dosis ganda setelah 4-8 minggu ATAU esofagitis derajat berat (LA Grade C/D).',
      clinicalPearls: 'Waktu minum PPI SANGAT KRUSIAL: PPI hanya efektif menghambat pompa proton H+/K+-ATPase yang aktif saat makan. Jika diminum sesudah makan, efikasinya anjlok drastis.'
    },
    {
      stepId: 'gerd-step-3',
      stepNumber: 3,
      stageBadge: 'Tahap 3: Terapi P-CAB Generasi Baru',
      title: 'Eskalasi ke Potassium-Competitive Acid Blocker (P-CAB)',
      subtitle: 'Vonoprazan 20 mg Sekali Sehari untuk GERD Refrakter & Esofagitis Berat',
      description: 'Pada pasien yang gagal respon dengan PPI atau terbukti mengalami esofagitis erosif berat (LA Grade C/D), ganti ke Vonoprazan 20 mg sekali sehari selama 8 minggu. P-CAB mengikat kanal kalium secara kompetitif dan reversibel dengan bioavailabilitas cepat sejak dosis pertama.',
      branchType: 'escalation',
      drugs: [
        {
          drugName: 'Vonoprazan (Vocinti)',
          dosage: '20 mg per oral sekali sehari (dapat diminum sebelum atau sesudah makan) selama 8 minggu',
          role: 'P-CAB Terbukti Superior Menyembuhkan Esofagitis Berat LA C/D',
          fornasTier: 'Faskes 3 (Spesialis Penyakit Dalam / KGEH)',
          isPreferred: true
        },
        {
          drugName: 'Rebamipide (Mucosta)',
          dosage: '100 mg per oral tiga kali sehari',
          role: 'Mukoprotektor Sitoprotektif Tambahan',
          fornasTier: 'Faskes 2/3',
          isPreferred: true
        }
      ],
      escalationTrigger: 'Penyembuhan mukosa tercapai setelah 8 minggu; persiapan terapi pemeliharaan jangka panjang.',
      clinicalPearls: 'Vonoprazan memiliki pKa tinggi (9.3) sehingga terakumulasi dalam konsentrasi ratusan kali lipat di kanalikuli sel parietal lambung dan tidak terpengaruh variasi polimorfisme genetik enzim CYP2C19.'
    },
    {
      stepId: 'gerd-step-4',
      stepNumber: 4,
      stageBadge: 'Tahap 4: Terapi Pemeliharaan & Stepping-Down',
      title: 'Titrasi Turun (Step-Down) & Terapi Sesuai Kebutuhan (On-Demand)',
      subtitle: 'Turunkan ke PPI Dosis Standar Harian atau Sesuai Kebutuhan Bila Remisi',
      description: 'Setelah 8 minggu tercapai resolusi gejala: pada NERD atau esofagitis ringan (Grade A/B), turunkan ke terapi On-Demand (minum obat hanya bila timbul keluhan) atau intermiten. Pada esofagitis berat (Grade C/D), lanjutkan terapi pemeliharaan kontinu dosis terendah efektif.',
      branchType: 'comorbid',
      drugs: [
        {
          drugName: 'Lansoprazole Dosis Rendah',
          dosage: '15 - 30 mg per oral PRN saat gejala muncul (On-Demand)',
          role: 'Terapi Pemeliharaan Jangka Panjang',
          fornasTier: 'Faskes 1/2/3',
          isPreferred: true
        },
        {
          drugName: 'Famotidine',
          dosage: '20 - 40 mg per oral malam hari sebelum tidur',
          role: 'Antagonis H2 (H2RA) untuk Nocturnal Acid Breakthrough',
          fornasTier: 'Faskes 1/2/3',
          isPreferred: false
        }
      ],
      escalationTrigger: 'Gejala kambuh berat berulang saat obat dihentikan memerlukan evaluasi pH-metri impedansi esofagus 24 jam.',
      clinicalPearls: 'Penggunaan PPI jangka panjang (> 1 tahun) harus dievaluasi berkala terhadap risiko hipomagnesemia, defisiensi vitamin B12, dan fraktur osteoporosis pada lansia.'
    }
  ],
  drugClassificationTable: [
    {
      id: 'gerd-ppi',
      drugClass: 'Proton Pump Inhibitor (PPI Generasi 1 & 2)',
      classCategory: 'other',
      exampleDrugs: [
        { name: 'Lansoprazole', dailyDosage: '30 mg 1–2x/hari ac', fornasTier: 'Faskes 1/2/3' },
        { name: 'Esomeprazole', dailyDosage: '20–40 mg 1–2x/hari ac', fornasTier: 'Faskes 2/3' },
        { name: 'Omeprazole', dailyDosage: '20 mg 1–2x/hari ac', fornasTier: 'Faskes 1/2/3' },
        { name: 'Pantoprazole', dailyDosage: '40 mg 1x/hari ac', fornasTier: 'Faskes 2/3' }
      ],
      mechanismOfAction: 'Prodrug lipofilik basa lemah yang terakumulasi di kanalikuli asam sel parietal lambung, berikatan kovalen ireversibel dengan gugus sulfhidril pompa H+/K+-ATPase.',
      clinicalIndications: 'Lini pertama pilihan utama untuk inisiasi terapi GERD simtomatik, penyembuhan esofagitis erosif, dan eradikasi H. pylori.',
      adverseEffects: 'Sakit kepala, diare ringan, konstipasi, peningkatan risiko infeksi Clostridium difficile pada rawat inap lama.',
      contraindications: 'Hipersensitivitas terhadap golongan benzimidazol; interaksi CYP2C19 dengan Clopidogrel (paling minimal pada Pantoprazole).',
      monitoringKey: 'Wajib diminum 30-60 menit sebelum makan pagi; evaluasi durasi terapi (maksimal 8 minggu kecuali indikasi esofagitis berat).'
    },
    {
      id: 'gerd-pcab',
      drugClass: 'Potassium-Competitive Acid Blocker (P-CAB)',
      classCategory: 'other',
      exampleDrugs: [
        { name: 'Vonoprazan Fumarate', dailyDosage: '20 mg 1x/hari (akut) atau 10 mg 1x/hari (pemeliharaan)', fornasTier: 'Faskes 3' }
      ],
      mechanismOfAction: 'Inhibisi kompetitif ion K+ pada pompa proton secara reversibel tanpa memerlukan aktivasi asam lambung; onset kerja cepat dalam 2 jam pertama.',
      clinicalIndications: 'GERD refrakter terhadap PPI, esofagitis erosif derajat berat (LA Grade C/D), dan komponen eradikasi H. pylori lini pertama.',
      adverseEffects: 'Diare, nasofaringitis, kembung, hipergastrinemia transien reversibel.',
      contraindications: 'Penggunaan bersamaan dengan Rilpivirine atau Atazanavir (penurunan absorpsi obat HIV).',
      monitoringKey: 'Dapat diminum bebas tanpa keterikatan jadwal makan; pantau respon penyembuhan mukosa pasca 4-8 minggu.'
    },
    {
      id: 'gerd-prokinetics',
      drugClass: 'Prokinetik Gastrointestinal (Antagonis Dopamin D2 & Agonis 5-HT4)',
      classCategory: 'other',
      exampleDrugs: [
        { name: 'Domperidone', dailyDosage: '10 mg 3x/hari ac (sebelum makan)', fornasTier: 'Faskes 1/2/3' },
        { name: 'Itopride HCl', dailyDosage: '50 mg 3x/hari ac', fornasTier: 'Faskes 2/3' }
      ],
      mechanismOfAction: 'Blokade reseptor dopamin D2 perifer dan stimulasi motilitas asetilkolin, meningkatkan tonus LES dan mempercepat waktu pengosongan lambung.',
      clinicalIndications: 'Terapi ajuvan pada GERD dengan komorbid Dispepsia Tipe Postprandial Distress Syndrome (begah, cepat kenyang, kembung).',
      adverseEffects: 'Hiperprolaktinemia (galaktorea, ginekomastia), pemanjangan interval QTc (pada Domperidone dosis > 30 mg/hari).',
      contraindications: 'Perdarahan saluran cerna aktif, obstruksi mekanik usus atau perforasi lambung; pemanjangan interval QT bawaan.',
      monitoringKey: 'Batasi penggunaan Domperidone maksimal 7 hari; jangan kombinasikan dengan obat pemanjang QT lainnya.'
    }
  ],
  ebmReferences: [
    {
      id: 'ref-pegi-gerd-2023',
      title: 'Konsensus Nasional Penatalaksanaan Penyakit Refluks Gastroesofagus (GERD) di Indonesia',
      organization: 'Perkumpulan Gastroenterologi Indonesia (PGI-PEGI)',
      year: '2023',
      scope: 'Nasional',
      summary: 'Konsensus nasional terkini yang mengatur alur diagnostik PPI test empiris 2-4 minggu, kriteria EGD awal, penggunaan P-CAB Vonoprazan untuk kasus refrakter, dan strategi pemeliharaan on-demand.',
      evidenceLevel: 'Konsensus Nasional Terakreditasi Kemenkes RI'
    },
    {
      id: 'ref-acg-gerd-2022',
      title: 'Guidelines for the Diagnosis and Management of Gastroesophageal Reflux Disease',
      organization: 'American College of Gastroenterology (ACG)',
      year: '2022',
      scope: 'Internasional',
      summary: 'Panduan internasional merekomendasikan elevasi kepala saat tidur, penurunan berat badan, kursus terapi PPI inisiasi 8 minggu, dan penghentian PPI bertahap untuk mencegah acid rebound hypersecretion.',
      evidenceLevel: 'Grade 1A Recommendation'
    }
  ]
};
