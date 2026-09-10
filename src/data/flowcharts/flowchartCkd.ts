import { DiseaseFlowchartData } from '../clinicalFlowchartData';

/**
 * Algoritma Interaktif Klinis: Penyakit Ginjal Kronik & Nefropati Diabetik (PGK / CKD)
 * Standar Konsensus KDIGO 2024 Clinical Practice Guideline & Perhimpunan Nefrologi Indonesia (PERNEFRI)
 */
export const FLOWCHART_CKD: DiseaseFlowchartData = {
  id: 'flowchart-ckd',
  diseaseName: 'Penyakit Ginjal Kronik & Nefropati Diabetik (KDIGO 2024)',
  shortSubtitle: 'Matriks eGFR vs Albuminuria, 4 Pilar Proteksi Kardiorenal (SGLT2i, ACEi/ARB, ns-MRA), & Target Tekanan Darah',
  category: 'Nefrologi & Ginjal',
  icd10: 'N18 (Chronic Kidney Disease)',
  bannerGradient: 'from-purple-950 via-slate-950 to-indigo-950',
  accentColor: 'purple',
  classificationTitle: 'Klasifikasi Stadium PGK Berdasarkan eGFR (G1–G5) & Derajat Albuminuria (A1–A3) KDIGO 2024',
  classificationLevels: [
    {
      id: 'ckd-g1-g2-a1',
      label: 'STADIUM G1–G2 (FUNGSI GINJAL NORMAL/MENURUN RINGAN)',
      criteria: 'eGFR >= 60 mL/min/1.73m² dengan bukti kerusakan ginjal (misal: Albuminuria UACR < 30 mg/g [A1] atau 30-300 mg/g [A2])',
      badgeColor: 'bg-emerald-500 text-white',
      textColor: 'text-emerald-700 dark:text-emerald-300',
      bgColor: 'bg-emerald-50/80 dark:bg-emerald-950/40',
      borderColor: 'border-emerald-300 dark:border-emerald-700',
      clinicalAction: 'Pengendalian faktor risiko (TD < 120 mmHg, HbA1c < 7.0%). Inisiasi ACEi/ARB bila ada albuminuria A2/A3.'
    },
    {
      id: 'ckd-g3a-g3b',
      label: 'STADIUM G3A–G3B (PENURUNAN FUNGSI SEDANG-BERAT)',
      criteria: 'eGFR 30 – 59 mL/min/1.73m² (G3a: 45–59, G3b: 30–44 mL/min) selama minimal 3 bulan',
      badgeColor: 'bg-amber-500 text-slate-900',
      textColor: 'text-amber-800 dark:text-amber-300',
      bgColor: 'bg-amber-50/80 dark:bg-amber-950/40',
      borderColor: 'border-amber-300 dark:border-amber-700',
      clinicalAction: 'Mulai SGLT2-i (Dapagliflozin/Empagliflozin). Titrasi ACEi/ARB ke dosis maksimal toleransi. Skrining komplikasi anemia, hiperkalemia, dan asidosis.'
    },
    {
      id: 'ckd-g4',
      label: 'STADIUM G4 (PENURUNAN FUNGSI BERAT / SEVERE)',
      criteria: 'eGFR 15 – 29 mL/min/1.73m² selama minimal 3 bulan',
      badgeColor: 'bg-orange-600 text-white',
      textColor: 'text-orange-800 dark:text-orange-300',
      bgColor: 'bg-orange-50/80 dark:bg-orange-950/40',
      borderColor: 'border-orange-300 dark:border-orange-700',
      clinicalAction: 'Persiapan terapi pengganti ginjal (RRT / AV Fistula). Penyesuaian ketat dosis obat berbasis klirens ginjal. Batasi asupan protein 0.6–0.8 g/kg/hari.'
    },
    {
      id: 'ckd-g5-esrd',
      label: 'STADIUM G5 (GAGAL GINJAL TERMINAL / ESRD)',
      criteria: 'eGFR < 15 mL/min/1.73m² atau telah menjalani dialisis ginjal rutin (Hemodialisis / CAPD)',
      badgeColor: 'bg-rose-600 text-white',
      textColor: 'text-rose-800 dark:text-rose-300',
      bgColor: 'bg-rose-50/80 dark:bg-rose-950/40',
      borderColor: 'border-rose-300 dark:border-rose-700',
      clinicalAction: 'Inisiasi Dialisis (HD rutin 2x/minggu atau CAPD) atau evaluasi Transplantasi Ginjal. Terapi pengikat fosfat dan analog vitamin D aktif.'
    }
  ],
  flowchartTitle: 'Algoritma 4 Pilar Perlambatan Progresivitas PGK KDIGO 2024 & Manajemen Komplikasi',
  lifestyleModifications: [
    {
      title: 'Restriksi Asupan Natrium (< 2.0 gram Natrium / < 5 gram Garam Dapur)',
      impact: 'Menurunkan Tekanan Darah Sistolik 5–8 mmHg & Mengurangi Albuminuria 20%',
      details: 'Hindari makanan kaleng, kecap asin berlebih, monosodium glutamat (MSG), dan makanan ultra-proses.'
    },
    {
      title: 'Target Asupan Protein Moderat (0.8 g/kg BB/hari)',
      impact: 'Mengurangi Hiperfiltrasi Glomerulus & Akumulasi Toksin Uremik',
      details: 'Untuk PGK non-dialisis stadium G3–G5, batasi protein menjadi 0.8 g/kg/hari (utamakan protein bernilai biologis tinggi). Hindari diet tinggi protein > 1.3 g/kg/hari.'
    },
    {
      title: 'Hindari Nefrotoksin (NSAID & Zat Kontras Radiologi)',
      impact: 'Mencegah Acute-on-Chronic Kidney Injury (AKI on CKD)',
      details: 'Gunakan Parasetamol untuk analgesik lini pertama; hindari Ibuprofen, Natrium Diklofenak, Asam Mefenamat, dan antibiotika aminoglikosida tanpa TDM.'
    },
    {
      title: 'Aktivitas Fisik Aerobik & Kontrol Berat Badan',
      impact: 'Memperbaiki Sensitivitas Insulin & Menurunkan Risiko Kardiovaskular',
      details: 'Latihan intensitas sedang 150 menit per minggu (misal: jalan cepat 30 menit 5 kali seminggu) disesuaikan kapasitas kardiorespirasi pasien.'
    }
  ],
  comorbidProfiles: [
    {
      name: 'PGK dengan Diabetes Melitus Tipe 2 & Albuminuria',
      icon: '🩸',
      targetBP: 'TD < 120 mmHg Sistolik (KDIGO)',
      firstLineDrug: 'SGLT2-i (Dapagliflozin 10 mg) + ACEi/ARB + Finerenone (bila UACR >= 30 mg/g)',
      rationale: 'Kombinasi SGLT2-i dan Finerenone memberikan efek proteksi aditif ganda terhadap laju penurunan eGFR dan kejadian rawat inap kardiovaskular.'
    },
    {
      name: 'PGK dengan Hiperkalemia Kronik (Kalium Darah > 5.0 mEq/L)',
      icon: '⚡',
      targetBP: 'Pertahankan Kalium 4.0 – 5.0 mEq/L',
      firstLineDrug: 'Penukar Kalium Usus (Sodium Zirconium Cyclosilicate / Patiromer) + Diuretik Loop',
      rationale: 'Pengikat kalium memungkinkan terapi nefroprotektif ACEi/ARB/MRA dosis optimal tetap dilanjutkan tanpa penghentian prematur akibat hiperkalemia.'
    },
    {
      name: 'PGK dengan Anemia Defisiensi (Hb < 10 g/dL)',
      icon: '💉',
      targetBP: 'Target Hb 10.0 – 11.5 g/dL (Hindari > 12.0)',
      firstLineDrug: 'Erythropoiesis-Stimulating Agent (Epoetin Alfa/Beta) + Terapi Besi Sukrosa IV',
      rationale: 'Koreksi status besi (Saturasi Transferin >= 20% dan Feritin >= 100 ng/mL) sebelum atau bersamaan inisiasi ESA untuk efikasi eritropoiesis optimal.'
    }
  ],
  flowchartSteps: [
    {
      stepId: 'ckd-step-1',
      stepNumber: 1,
      stageBadge: 'Tahap 1: Evaluasi eGFR & UACR',
      title: 'Penapisan Awal Matriks Risiko Kardiorenal',
      subtitle: 'Kalkulasi eGFR (CKD-EPI 2021) & Rasio Albumin-Kreatinin Urin (UACR)',
      description: 'Lakukan pemeriksaan kreatinin serum berkala untuk menghitung eGFR CKD-EPI dan urine spot untuk rasio UACR. Klasifikasikan pasien ke dalam kategori risiko rendah, sedang, tinggi, atau sangat tinggi sesuai heatmap KDIGO.',
      branchType: 'general',
      drugs: [],
      escalationTrigger: 'eGFR terkonfirmasi < 60 mL/min atau UACR >= 30 mg/g persisten selama >= 3 bulan.',
      clinicalPearls: 'Pemeriksaan urinalisis protein dipstick konvensional seringkali melewatkan mikroalbuminuria dini; UACR adalah baku emas deteksi kebocoran podosit glomerulus.'
    },
    {
      stepId: 'ckd-step-2',
      stepNumber: 2,
      stageBadge: 'Tahap 2: Fondasi Lini Pertama',
      title: 'Inisiasi 2 Pilar Utama: ACEi/ARB & SGLT2 Inhibitor',
      subtitle: 'Titrasi Maksimal Penurun Tekanan Intraglomerulus & Proteksi Hemodinamik',
      description: 'Inisiasi ACEi (Lisinopril/Ramipril) atau ARB (Candesartan/Losartan) pada pasien dengan hipertensi dan albuminuria (UACR >= 30 mg/g). Tambahkan SGLT2 inhibitor (Dapagliflozin 10 mg atau Empagliflozin 10 mg) untuk semua pasien dengan eGFR >= 20 mL/min/1.73m² (dengan atau tanpa DM).',
      branchType: 'single',
      drugs: [
        {
          drugName: 'Dapagliflozin (Forxiga)',
          dosage: '10 mg per oral sekali sehari',
          role: 'Pilar 1: SGLT2-i Terbukti RCT Renal (DAPA-CKD)',
          fornasTier: 'Faskes 2/3',
          isPreferred: true
        },
        {
          drugName: 'Empagliflozin (Jardiance)',
          dosage: '10 mg per oral sekali sehari',
          role: 'Pilar 1 Alternatif: SGLT2-i (EMPA-KIDNEY)',
          fornasTier: 'Faskes 2/3',
          isPreferred: true
        },
        {
          drugName: 'Candesartan Cilexetil',
          dosage: '8 - 16 mg 1x/hari (titrasi hingga 32 mg/hari)',
          role: 'Pilar 2: ARB Lini Pertama Renoprotektif',
          fornasTier: 'Faskes 1/2/3',
          isPreferred: true
        },
        {
          drugName: 'Lisinopril',
          dosage: '10 - 20 mg 1x/hari (maksimal 40 mg/hari)',
          role: 'Pilar 2 Alternatif: ACE Inhibitor Terbukti Renal',
          fornasTier: 'Faskes 1/2/3',
          isPreferred: true
        }
      ],
      escalationTrigger: 'UACR tetap >= 30 mg/g atau eGFR terus menurun meski telah mengonsumsi ACEi/ARB dosis maksimal dan SGLT2-i.',
      clinicalPearls: 'Penurunan eGFR akut hingga 30% pasca inisiasi ACEi/ARB atau SGLT2i adalah fenomena hemodinamik normal yang menandakan penurunan tekanan intraglomerulus protektif (jangan hentikan obat kecuali kenaikan kreatinin > 30% atau kalium > 5.5 mEq/L).'
    },
    {
      stepId: 'ckd-step-3',
      stepNumber: 3,
      stageBadge: 'Tahap 3: Proteksi Lanjutan',
      title: 'Inisiasi Pilar 3 & 4: Non-Steroidal MRA & GLP-1 RA',
      subtitle: 'Finerenone untuk Anti-Fibrosis Glomerulus & Semaglutide untuk Kardio-Metabolik',
      description: 'Pada pasien DM tipe 2 dengan eGFR >= 25 mL/min dan UACR >= 30 mg/g yang masih mengalami albuminuria persisten, tambahkan Finerenone (Non-steroidal MRA). Bila kendali glikemik belum tercapai atau risiko kardiovaskular sangat tinggi, tambahkan GLP-1 RA (Semaglutide/Liraglutide).',
      branchType: 'escalation',
      drugs: [
        {
          drugName: 'Finerenone (Kerendia)',
          dosage: '10 mg 1x/hari (bila eGFR 25–59) atau 20 mg 1x/hari (bila eGFR >= 60 & K+ <= 4.8)',
          role: 'Pilar 3: Non-Steroidal MRA (Trial FIDELIO/FIGARO)',
          fornasTier: 'Faskes 3',
          isPreferred: true
        },
        {
          drugName: 'Semaglutide SC (Ozempic)',
          dosage: '0.25 mg SC 1x/mgg selama 4 mgg, lalu 0.5–1.0 mg SC 1x/mgg',
          role: 'Pilar 4: GLP-1 RA Terbukti Renal (Trial FLOW 2024)',
          fornasTier: 'Faskes 3',
          isPreferred: true
        }
      ],
      escalationTrigger: 'Timbul komplikasi sistemik PGK: Anemia, Asidosis Metabolik, atau Hiperfosfatemia.',
      clinicalPearls: 'Finerenone secara spesifik memblokade inflamasi dan fibrosis interstitial renal yang dimediasi oleh overaktivasi reseptor mineralokortikoid tanpa efek samping ginekomastia khas spironolakton.'
    },
    {
      stepId: 'ckd-step-4',
      stepNumber: 4,
      stageBadge: 'Tahap 4: Penanganan Komplikasi PGK',
      title: 'Terapi Komplikasi Anemia, Asidosis, & Mineral Bone Disease (CKD-MBD)',
      subtitle: 'Koreksi Bikarbonat, Stimulasi Eritropoietin, & Pengikat Fosfat Usus',
      description: 'Pertahankan kadar bikarbonat serum >= 22 mmol/L dengan tablet Natrium Bikarbonat. Terapi anemia jika Hb < 10 g/dL dengan ESA + Besi IV. Kendalikan fosfat serum dengan kalsium karbonat bersama makanan.',
      branchType: 'comorbid',
      drugs: [
        {
          drugName: 'Natrium Bikarbonat (Bicnat) Tablet',
          dosage: '500 - 1000 mg oral 2-3 kali sehari',
          role: 'Koreksi Asidosis Metabolik Renal (Target HCO3 >= 22)',
          fornasTier: 'Faskes 1/2/3',
          isPreferred: true
        },
        {
          drugName: 'Epoetin Alfa (Eprex / Hemapo)',
          dosage: '50 - 100 IU/kg SC 2-3 kali seminggu (titrasi target Hb 10-11.5 g/dL)',
          role: 'Erythropoiesis-Stimulating Agent (ESA) Anemia Renal',
          fornasTier: 'Faskes 2/3 (Hemodialisis)',
          isPreferred: true
        },
        {
          drugName: 'Iron Sucrose IV (Venofer)',
          dosage: '100 mg IV drip lambat selama sesi hemodialisis',
          role: 'Terapi Besi Intravena Pasien PGK Lanjut',
          fornasTier: 'Faskes 2/3',
          isPreferred: true
        },
        {
          drugName: 'Calcium Carbonate (Calos)',
          dosage: '500 mg dikunyah bersama makanan utama 3 kali sehari',
          role: 'Pengikat Fosfat Usus (Phosphate Binder)',
          fornasTier: 'Faskes 1/2/3',
          isPreferred: true
        }
      ],
      escalationTrigger: 'eGFR < 15 mL/min dengan gejala uremia (ensefalopati, perikarditis uremik, kelebihan cairan refrakter diuretik).',
      clinicalPearls: 'Pemberian kalsium karbonat sebagai pengikat fosfat HARUS diminum BERSAMAAN DENGAN MAKANAN agar mengikat fosfat makanan di saluran cerna; jika diminum saat perut kosong fungsinya hanya sebagai suplemen kalsium/antasida.'
    }
  ],
  drugClassificationTable: [
    {
      id: 'ckd-sglt2i',
      drugClass: 'Sodium-Glucose Co-Transporter 2 Inhibitor (SGLT2-i)',
      classCategory: 'other',
      exampleDrugs: [
        { name: 'Dapagliflozin', dailyDosage: '10 mg per oral 1x/hari', fornasTier: 'Faskes 2/3' },
        { name: 'Empagliflozin', dailyDosage: '10 mg per oral 1x/hari', fornasTier: 'Faskes 2/3' }
      ],
      mechanismOfAction: 'Inhibisi transporter SGLT2 di tubulus proksimal, memulihkan umpan balik tubuloglomerulus (TGF), mengkonstriksi arteriol aferen, dan menurunkan tekanan hiperfiltrasi intraglomerulus.',
      clinicalIndications: 'Semua pasien PGK dengan eGFR 20–60 mL/min atau UACR >= 200 mg/g (dengan atau tanpa diabetes); menurunkan mortalitas kardiovaskular dan memperlambat laju menuju cuci darah hingga 40%.',
      adverseEffects: 'Infeksi mikotik genital (candidiasis), deplesi volume intravaskular ringan, euglycemic DKA (jarang pada DM tipe 2).',
      contraindications: 'Diabetes Melitus Tipe 1 (risiko ketoasidosis); riwayat syok sepsis berat.',
      monitoringKey: 'Kebersihan area genital; hidrasi cairan adekuat; hentikan sementara jika pasien puasa panjang atau operasi besar.'
    },
    {
      id: 'ckd-ras-blockers',
      drugClass: 'Penghambat Sistem Renin-Angiotensin (ACEi & ARB)',
      classCategory: 'arb',
      exampleDrugs: [
        { name: 'Candesartan Cilexetil', dailyDosage: '8–32 mg 1x/hari', fornasTier: 'Faskes 1/2/3' },
        { name: 'Lisinopril', dailyDosage: '10–40 mg 1x/hari', fornasTier: 'Faskes 1/2/3' },
        { name: 'Ramipril', dailyDosage: '5–10 mg 1x/hari', fornasTier: 'Faskes 1/2/3' }
      ],
      mechanismOfAction: 'Blokade reseptor AT1 atau penghambatan konversi Angiotensin I ke II, mendilatasi arteriol eferen glomerulus, dan mengurangi tekanan transkapiler podosit ginjal.',
      clinicalIndications: 'Lini pertama hipertensi dengan albuminuria (UACR >= 30 mg/g) pada pasien diabetes maupun non-diabetes.',
      adverseEffects: 'Hiperkalemia, batuk kering persisten (hanya pada ACEi), penurunan eGFR akut < 30% transien.',
      contraindications: 'Kehamilan (teratogenik mutlak); riwayat angioedema; stenosis arteri renalis bilateral.',
      monitoringKey: 'Kalium serum dan kreatinin/eGFR setelah 2–4 minggu inisiasi atau kenaikan dosis.'
    },
    {
      id: 'ckd-ns-mra',
      drugClass: 'Non-Steroidal Mineralocorticoid Receptor Antagonist (ns-MRA)',
      classCategory: 'diuretic-mra',
      exampleDrugs: [
        { name: 'Finerenone', dailyDosage: '10 mg atau 20 mg 1x/hari', fornasTier: 'Faskes 3' }
      ],
      mechanismOfAction: 'Blokade selektif reseptor mineralokortikoid tanpa struktur steroid, menekan ekspresi sitokin pro-inflamasi dan jalur profibrotik pada sel ginjal dan miokardium.',
      clinicalIndications: 'PGK stadium 3–4 terkait Diabetes Tipe 2 dengan albuminuria persisten (UACR >= 30 mg/g) meskipun telah menggunakan ACEi/ARB dosis maksimal.',
      adverseEffects: 'Hiperkalemia (pantau ketat bila kalium basal > 4.8 mEq/L), hipotensi ringan.',
      contraindications: 'Kadar kalium serum basal > 5.0 mEq/L; insufisiensi adrenal.',
      monitoringKey: 'Kadar kalium serum berkala tiap 1 bulan pasca inisiasi dan tiap 4 bulan selama terapi rumatan.'
    },
    {
      id: 'ckd-esa',
      drugClass: 'Erythropoiesis-Stimulating Agent (ESA) & Terapi Besi',
      classCategory: 'other',
      exampleDrugs: [
        { name: 'Epoetin Alfa / Beta', dailyDosage: '2000–4000 IU SC 2-3x/mgg', fornasTier: 'Faskes 2/3' },
        { name: 'Methoxy Polyethylene Glycol-Epoetin Beta (Mircera)', dailyDosage: '50–100 mcg SC 1x/bulan', fornasTier: 'Faskes 3' },
        { name: 'Iron Sucrose IV', dailyDosage: '100 mg IV per sesi dialisis', fornasTier: 'Faskes 2/3' }
      ],
      mechanismOfAction: 'Stimulasi diferensiasi dan proliferasi sel progenitor eritroid sumsum tulang menggantikan defisiensi eritropoietin endogen renal.',
      clinicalIndications: 'Anemia pada PGK bila Hb < 10.0 g/dL setelah defisiensi besi, defisiensi folat, dan perdarahan disingkirkan.',
      adverseEffects: 'Hipertensi perburukan, sakit kepala, peningkatan risiko trombosis vaskular bila target Hb melampaui 12 g/dL.',
      contraindications: 'Hipertensi berat tidak terkontrol; riwayat aplasia sel darah merah murni (PRCA).',
      monitoringKey: 'Kadar Hb tiap 2–4 minggu; target aman 10.0–11.5 g/dL (JANGAN melebihi 12 g/dL karena risiko stroke meningkat).'
    }
  ],
  ebmReferences: [
    {
      id: 'ref-kdigo-2024',
      title: 'KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease',
      organization: 'Kidney Disease: Improving Global Outcomes (KDIGO)',
      year: '2024',
      scope: 'Internasional',
      summary: 'Konsensus global paling mutakhir yang menetapkan 4 pilar farmakoterapi renoprotektif (SGLT2i, ACEi/ARB, ns-MRA, GLP-1RA), target sistolik < 120 mmHg terstandar, dan protokol penanganan komplikasi metabolik.',
      evidenceLevel: 'Level of Evidence A (High-Quality RCTs)'
    },
    {
      id: 'ref-pernefri-ckd',
      title: 'Konsensus Tata Laksana Penyakit Ginjal Kronik di Indonesia',
      organization: 'Perhimpunan Nefrologi Indonesia (PERNEFRI)',
      year: '2023',
      scope: 'Nasional',
      summary: 'Panduan klinis nasional mencakup kriteria rujukan nefrologi, penyesuaian FORNAS BPJS untuk dialisis, penggunaan eritropoietin, dan skrining awal nefropati di fasilitas kesehatan primer.',
      evidenceLevel: 'Konsensus Nasional Terakreditasi Kemenkes RI'
    }
  ]
};
