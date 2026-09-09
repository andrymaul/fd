import { DiseaseFlowchartData } from '../clinicalFlowchartData';

/**
 * Algoritma Interaktif Klinis: Gagal Jantung Fraksi Ejeksi Menurun (HFrEF)
 * Standar Konsensus PERKI 2023 / ESC Heart Failure Guidelines 2023 / ACC/AHA 2022
 */
export const FLOWCHART_HFREF: DiseaseFlowchartData = {
  id: 'flowchart-hfref',
  diseaseName: 'Gagal Jantung Fraksi Ejeksi Menurun (HFrEF / LVEF ≤ 40%)',
  shortSubtitle: 'Algoritma Inisiasi Cepat 4 Pilar Baku Emas (Fantastic Four), Titrasi Dosis Maksimal, dan Terapi Lanjutan EBM',
  category: 'Kardiovaskular',
  icd10: 'I50.2 (Chronic Systolic Heart Failure)',
  bannerGradient: 'from-emerald-950 via-teal-950 to-slate-950',
  accentColor: 'emerald',
  classificationTitle: 'Klasifikasi Derajat Keparahan Klinis (Kombinasi ACC/AHA Stadium & NYHA Functional Class)',
  classificationLevels: [
    {
      id: 'nyha-1',
      label: 'NYHA KELAS I (STADIUM B/C AWAL)',
      criteria: 'Tidak ada batasan aktivitas fisik biasa; aktivitas fisik tidak memicu sesak, kelelahan, atau palpitasi',
      badgeColor: 'bg-emerald-500 text-white',
      textColor: 'text-emerald-700 dark:text-emerald-300',
      bgColor: 'bg-emerald-50/80 dark:bg-emerald-950/40',
      borderColor: 'border-emerald-300 dark:border-emerald-700',
      clinicalAction: 'Inisiasi 4 Pilar Emas lengkap dosis awal, edukasi restriksi garam natrium dan monitoring BB harian.'
    },
    {
      id: 'nyha-2',
      label: 'NYHA KELAS II (RINGAN)',
      criteria: 'Sedikit batasan aktivitas fisik; nyaman saat istirahat, namun aktivitas fisik biasa memicu sesak, lemas, atau palpitasi',
      badgeColor: 'bg-teal-600 text-white',
      textColor: 'text-teal-800 dark:text-teal-300',
      bgColor: 'bg-teal-50/80 dark:bg-teal-950/40',
      borderColor: 'border-teal-300 dark:border-teal-700',
      clinicalAction: 'Titrasi naik dosis 4 Pilar setiap 2-4 minggu. Tambahkan Furosemid PRN jika ada tanda retensi cairan.'
    },
    {
      id: 'nyha-3',
      label: 'NYHA KELAS III (SEDANG-BERAT)',
      criteria: 'Batasan aktivitas fisik bermakna; nyaman saat istirahat, namun aktivitas fisik ringan memicu sesak atau lemas',
      badgeColor: 'bg-amber-500 text-slate-900',
      textColor: 'text-amber-800 dark:text-amber-300',
      bgColor: 'bg-amber-50/80 dark:bg-amber-950/40',
      borderColor: 'border-amber-300 dark:border-amber-700',
      clinicalAction: 'Optimalisasi dosis target 4 pilar. Pertimbangkan terapi tambahan Ivabradin jika HR > 70 bpm atau Vericiguat.'
    },
    {
      id: 'nyha-4',
      label: 'NYHA KELAS IV (BERAT / END-STAGE)',
      criteria: 'Tidak mampu beraktivitas tanpa keluhan; gejala sesak dan lemas tetap ada bahkan saat istirahat berbaring',
      badgeColor: 'bg-rose-600 text-white',
      textColor: 'text-rose-800 dark:text-rose-300',
      bgColor: 'bg-rose-50/80 dark:bg-rose-950/40',
      borderColor: 'border-rose-300 dark:border-rose-700',
      clinicalAction: 'Rawat inap intensif, inotropik IV (Dobutamin/Milrinon), evaluasi implantable device (CRT-D / LVAD / Rujukan Transplantasi).'
    }
  ],
  flowchartTitle: 'Algoritma Keputusan Farmakoterapi HFrEF (The Fantastic Four Protocol)',
  lifestyleModifications: [
    {
      title: 'Restriksi Garam & Natrium',
      impact: 'Mencegah Retensi Cairan & Rehospitalisasi',
      details: 'Batasi asupan garam < 2-3 gram natrium/hari (hindari makanan kaleng, MSG, dan makanan olahan asin).'
    },
    {
      title: 'Restriksi Cairan pada Pasien Lanjut',
      impact: 'Mengurangi Beban Awal Jantung (Preload)',
      details: 'Batasi asupan cairan 1,5 - 2,0 liter/hari pada pasien dengan hiponatremia berat (Na < 130 mEq/L) atau kongesti refrakter.'
    },
    {
      title: 'Pemantauan Berat Badan Harian Mandiri',
      impact: 'Deteksi Dini Dekompensasi Cairan',
      details: 'Timbang BB setiap pagi setelah BAK sebelum sarapan. Jika BB naik > 2 kg dalam 3 hari, hubungi dokter/naikkan dosis diuretik.'
    },
    {
      title: 'Rehabilitasi Kardiovaskular Terstruktur',
      impact: 'Peningkatan Kualitas Hidup & Kapasitas Fungsional',
      details: 'Latihan fisik aerobik teratur intensitas ringan-sedang (berjalan kaki 20-30 menit 3-5 kali seminggu saat kondisi stabil).'
    },
    {
      title: 'Hentikan Merokok & Alkohol',
      impact: 'Mencegah Kardiomiopati Toksik',
      details: 'Hentikan konsumsi alkohol sepenuhnya karena efek depresan langsung terhadap kontraktilitas miokardium.'
    }
  ],
  comorbidProfiles: [
    {
      name: 'Penyakit Ginjal Kronik (CKD)',
      icon: '🫘',
      targetBP: 'eGFR >= 20-30 mL/min',
      firstLineDrug: 'SGLT2i + ARNI Dosis Rendah (Titrasi Hati-hati)',
      rationale: 'SGLT2i (Dapagliflozin/Empagliflozin) terbukti nefroprotektif hingga eGFR 20-25 mL/min. Pantau kalium serum dan kreatinin.'
    },
    {
      name: 'Diabetes Melitus Tipe 2',
      icon: '🩸',
      targetBP: 'HbA1c < 7.0 - 7.5%',
      firstLineDrug: 'SGLT2i (Dapagliflozin 10 mg / Empagliflozin 10 mg) + Metformin',
      rationale: 'SGLT2i memberikan manfaat ganda: glikemia terkontrol dan proteksi gagal jantung superior terlepas dari status DM.'
    },
    {
      name: 'Penyakit Jantung Koroner (CAD / Post-MI)',
      icon: '🫀',
      targetBP: 'HR Istirahat 55 - 60 bpm',
      firstLineDrug: 'Beta Blocker (Bisoprolol/Carvedilol) + ARNI + Aspirin + Statin',
      rationale: 'Menurunkan konsumsi O2 miokard, menstabilkan plak ateroma, dan mencegah aritmia ventrikel letal.'
    },
    {
      name: 'Fibrilasi Atrium (AF)',
      icon: '⚡',
      targetBP: 'Laju Ventrikel < 100-110 bpm',
      firstLineDrug: 'Beta Blocker + DOAC (Rivaroxaban / Apixaban) ± Digoksin',
      rationale: 'Rate control dengan beta blocker dan pencegahan stroke tromboemboli dengan antikoagulan oral non-vitamin K.'
    }
  ],
  flowchartSteps: [
    {
      stepId: 'step-1-fantastic-four',
      stepNumber: 1,
      stageBadge: 'INISIASI CEPAT (MINGGU 0 - 2)',
      title: 'Langkah 1: Inisiasi Segera 4 Pilar Baku Emas (The Fantastic Four)',
      subtitle: 'Memulai Seluruh 4 Golongan Obat Sekaligus atau Sekuens Cepat Pasca Stabilisasi',
      timeline: 'Minggu ke 0 - 2',
      description: 'Pedoman PERKI 2023 dan ESC 2023 merekomendasikan inisiasi CEPAT seluruh 4 pilar utama sejak awal diagnosis HFrEF karena kombinasi ini menurunkan mortalitas kardiovaskular hingga > 60% dalam 30 hari pertama.',
      branchType: 'single',
      targetBP: 'TD Sistolik >= 95-100 mmHg, Laju Nadi 60-70 bpm, Kalium < 5.0 mEq/L',
      drugs: [
        {
          drugName: 'Sacubitril/Valsartan (ARNI)',
          dosage: 'Mulai 24/26 mg atau 49/51 mg PO 2x sehari (atau Ramipril 2.5 mg 1x/hari jika ARNI belum tersedia)',
          role: 'Pilar 1: Modulator Neurohormonal RAS & Neprilisin (Pilihan Utama)',
          fornasTier: 'Faskes 2/3',
          isPreferred: true
        },
        {
          drugName: 'Bisoprolol / Carvedilol',
          dosage: 'Bisoprolol 1.25 - 2.5 mg PO 1x sehari pagi (atau Carvedilol 3.125 mg 2x sehari)',
          role: 'Pilar 2: Beta Blocker Kardioselektif (Diberikan saat kondisi euvolemik/kering)',
          fornasTier: 'Faskes 1',
          isPreferred: true
        },
        {
          drugName: 'Spironolactone',
          dosage: '25 mg PO 1x sehari pagi/siang',
          role: 'Pilar 3: Antagonis Reseptor Mineralokortikoid (MRA)',
          fornasTier: 'Faskes 1',
          isPreferred: true
        },
        {
          drugName: 'Dapagliflozin / Empagliflozin',
          dosage: '10 mg PO 1x sehari pagi dosis tunggal tetap (tidak perlu titrasi dosis)',
          role: 'Pilar 4: SGLT2 Inhibitor (Dosis langsung optimal)',
          fornasTier: 'Faskes 2/3',
          isPreferred: true
        }
      ],
      escalationTrigger: 'Evaluasi klinis dan laboratorium (Tensi, Nadi, Kalium, Kreatinin) dalam 2-4 minggu. Lanjutkan ke Langkah 2 untuk penanganan kongesti atau Langkah 3 untuk titrasi naik dosis.',
      clinicalPearls: 'Perhatian Khusus: Jika beralih dari ACEI (seperti Captopril/Ramipril) ke ARNI (Sacubitril/Valsartan), WAJIB memberi jeda waktu (washout period) minimal 36 JAM untuk mencegah risiko angioedema berat.'
    },
    {
      stepId: 'step-2-decongestion',
      stepNumber: 2,
      stageBadge: 'PENGENDALIAN KONGESTI',
      title: 'Langkah 2: Manajemen Retensi Cairan & Kongesti Paru/Perifer',
      subtitle: 'Titrasi Diuretik Loop untuk Mencapai Kondisi Kering (Euvolemik)',
      timeline: 'Hari ke 1 s/d Minggu ke 2',
      description: 'Diuretik loop digunakan untuk meringankan gejala sesak nafas dan edema kongestif. Diuretik tidak menurunkan mortalitas jangka panjang, sehingga dosis harus diturunkan ke dosis pemeliharaan terendah segera setelah pasien kering.',
      branchType: 'escalation',
      targetBP: 'Berat badan stabil, tidak ada ronki basah basal paru, JVP normal, tidak ada edema pitting pretibial',
      drugs: [
        {
          drugName: 'Furosemide Oral',
          dosage: '20 - 40 mg PO 1-2x sehari pagi/siang (titrasi naik sesuai respon urin)',
          role: 'Diuretik Loop Oral Lini Pertama',
          fornasTier: 'Faskes 1',
          isPreferred: true
        },
        {
          drugName: 'Furosemide Injeksi IV',
          dosage: '20 - 40 mg IV bolus pelan (atau drip kontinu pada dekompensasi akut rawat inap)',
          role: 'Diuretik Loop Parenteral Fase Akut Dekompensasi',
          fornasTier: 'Faskes 1/2',
          isPreferred: false
        }
      ],
      escalationTrigger: 'Segera setelah pasien mencapai status euvolemik (kering), turunkan dosis Furosemid ke dosis terkecil yang mampu mempertahankan bebas edema.',
      clinicalPearls: 'Jangan menunda 4 Pilar Utama hanya karena pasien membutuhkan diuretik. SGLT2i (Dapagliflozin/Empagliflozin) juga memiliki efek diuretik osmotik ringan yang membantu stabilitas cairan.'
    },
    {
      stepId: 'step-3-target-titration',
      stepNumber: 3,
      stageBadge: 'OPTIMALISASI DOSIS',
      title: 'Langkah 3: Titrasi Naik Menuju Dosis Target Maksimal Uji Klinis',
      subtitle: 'Peningkatan Dosis Bertahap Setiap 2 - 4 Minggu',
      timeline: 'Bulan ke 1 - 3',
      description: 'Titrasi dosis ARNI dan Beta Blocker secara bertahap menuju dosis target uji klinis yang memberikan penurunan mortalitas maksimal, selama hemodinamik pasien mentoleransi.',
      branchType: 'single',
      targetBP: 'TD Sistolik >= 95 mmHg, HR 55-60 bpm, Kalium < 5.5 mEq/L, eGFR stabil',
      drugs: [
        {
          drugName: 'Sacubitril/Valsartan (Target Penuh)',
          dosage: 'Titrasi naik bertahap: 24/26 mg -> 49/51 mg -> target maksimal 97/103 mg PO 2x sehari',
          role: 'Target Dosis Maksimal ARNI',
          fornasTier: 'Faskes 2/3',
          isPreferred: true
        },
        {
          drugName: 'Bisoprolol (Target Penuh)',
          dosage: 'Titrasi naik bertahap: 1.25 -> 2.5 -> 5 -> 7.5 -> target maksimal 10 mg PO 1x sehari',
          role: 'Target Dosis Maksimal Beta Blocker',
          fornasTier: 'Faskes 1',
          isPreferred: true
        },
        {
          drugName: 'Spironolactone (Target Penuh)',
          dosage: '25 - 50 mg PO 1x sehari',
          role: 'Target Dosis Maksimal MRA',
          fornasTier: 'Faskes 1',
          isPreferred: true
        }
      ],
      escalationTrigger: 'Jika setelah dosis target 4 pilar tercapai pasien MASIH bergejala (NYHA II-IV, LVEF <= 35%, atau HR istirahat > 70 bpm), lanjut ke Langkah 4.',
      clinicalPearls: 'Peningkatan kreatinin serum hingga <= 30% dari baseline setelah inisiasi ARNI/ACEI dapat diterima dan bukan indikasi penghentian obat, asalkan Kalium serum tetap < 5.5 mEq/L.'
    },
    {
      stepId: 'step-4-advanced-therapies',
      stepNumber: 4,
      stageBadge: 'TERAPI SPESIFIK LANJUTAN',
      title: 'Langkah 4: Terapi Tambahan Spesifik & Rujukan Intervensi Device',
      subtitle: 'Pasien Bergejala Persisten dengan Indikasi Khusus',
      timeline: 'Bulan ke 3 - 6+',
      description: 'Penambahan obat spesifik berdasarkan karakteristik klinis (irama sinus, laju nadi, defisiensi besi) serta rujukan pemasangan piranti kardiovaskular (ICD / CRT).',
      branchType: 'resistant',
      targetBP: 'Perbaikan NYHA Class, Pencegahan Sudden Cardiac Death (SCD)',
      drugs: [
        {
          drugName: 'Ivabradine',
          dosage: 'Mulai 5 mg PO 2x sehari, titrasi hingga 7.5 mg PO 2x sehari bersama makan',
          role: 'Khusus pasien Irama Sinus dengan Laju Nadi Istirahat >= 70 bpm meski dosis Beta Blocker maksimal',
          fornasTier: 'Faskes 2/3',
          isPreferred: false
        },
        {
          drugName: 'Ferric Carboxymaltose IV',
          dosage: 'Dosis tunggal IV terhitung sesuai defisit berat badan dan Hb (biasanya 500-1000 mg)',
          role: 'Khusus pasien dengan Defisiensi Besi (Feritin < 100 ng/mL atau Feritin 100-299 ng/mL + TSAT < 20%)',
          fornasTier: 'Faskes 3',
          isPreferred: false
        },
        {
          drugName: 'Digoxin Oral',
          dosage: '0.125 - 0.25 mg PO 1x sehari (kadar serum terapi sempit 0.5 - 0.9 ng/mL)',
          role: 'Alternatif untuk kontrol laju ventrikel pada AF atau mengurangi gejala dekompensasi persisten',
          fornasTier: 'Faskes 1',
          isPreferred: false
        }
      ],
      escalationTrigger: 'Rujuk ke Konsultan Spesialis Jantung (SpJP K-KV) untuk evaluasi Implantable Cardioverter Defibrillator (ICD) atau Cardiac Resynchronization Therapy (CRT) jika LVEF tetap <= 35% setelah 3 bulan GDMT optimal.',
      clinicalPearls: 'Digoksin memiliki indeks terapi sangat sempit (therapeutic window 0.5-0.9 ng/mL). Waspadai toksisitas digoksin terutama saat pasien mengalami hipokalemia atau dehidrasi.'
    }
  ],
  drugClassificationTable: [
    {
      id: 'class-arni',
      drugClass: 'Angiotensin Receptor-Neprilysin Inhibitor (ARNI)',
      classCategory: 'other',
      exampleDrugs: [
        { name: 'Sacubitril/Valsartan', dailyDosage: '24/26 mg s/d 97/103 mg 2x/hari', fornasTier: 'Faskes 2/3' }
      ],
      mechanismOfAction: 'Blokade ganda: Penghambatan enzim neprilisin (meningkatkan peptida natriuretik endogen ANP/BNP) + Blokade reseptor AT1 angiotensin II.',
      clinicalIndications: 'Pilar 1 HFrEF: Terbukti superior menurunkan mortalitas kardiovaskular 20% dibanding Enalapril (Paradigm-HF). Mengurangi remodelling ventrikel.',
      adverseEffects: 'Hipotensi simtomatik, hiperkalemia, batuk kering ringan, angioedema (jarang).',
      contraindications: 'Riwayat angioedema sebelumnya, pemakaian bersamaan dengan ACEI (< 36 jam), kehamilan trimester 2-3.',
      monitoringKey: 'Tekanan darah istirahat, Kalium serum, Kreatinin serum / eGFR.'
    },
    {
      id: 'class-bb-hf',
      drugClass: 'Beta Blocker Kardioselektif (Gagal Jantung)',
      classCategory: 'beta-blocker',
      exampleDrugs: [
        { name: 'Bisoprolol', dailyDosage: '1.25 - 10 mg 1x/hari pagi', fornasTier: 'Faskes 1' },
        { name: 'Carvedilol', dailyDosage: '3.125 - 25 mg 2x/hari', fornasTier: 'Faskes 1' }
      ],
      mechanismOfAction: 'Blokade reseptor beta-1 adrenergik miokardial; menurunkan tonus simpatis kronik, menurunkan konsumsi O2 miokard, dan anti-aritmia.',
      clinicalIndications: 'Pilar 2 HFrEF: Terbukti menurunkan risiko henti jantung mendadak (sudden cardiac death) dan mortalitas total.',
      adverseEffects: 'Bradikardia, hipotensi, perburukan kongesti awal (jika dimulai saat basah), bronkospasme (pada asma aktif).',
      contraindications: 'Gagal jantung dekompensasi akut basah, AV block derajat 2-3 tanpa pacemaker, bradikardia berat (HR < 50 bpm), asma bronkial berat.',
      monitoringKey: 'Laju denyut jantung (target resting HR 55-60 bpm), tekanan darah, tanda kongesti cairan.'
    },
    {
      id: 'class-mra-hf',
      drugClass: 'Mineralocorticoid Receptor Antagonist (MRA)',
      classCategory: 'diuretic-mra',
      exampleDrugs: [
        { name: 'Spironolactone', dailyDosage: '12.5 - 50 mg 1x/hari', fornasTier: 'Faskes 1' },
        { name: 'Eplerenone', dailyDosage: '25 - 50 mg 1x/hari', fornasTier: 'Faskes 2/3' }
      ],
      mechanismOfAction: 'Antagonis kompetitif reseptor aldosteron di tubulus distal ginjal dan jaringan miokard; menghambat fibrosis interstitial miokard dan retensi natrium.',
      clinicalIndications: 'Pilar 3 HFrEF: Terbukti menurunkan mortalitas 30% pada HFrEF simtomatik (RALES Study). Efek diuretik hemat kalium.',
      adverseEffects: 'Hiperkalemia, ginekomastia dan nyeri payudara (akibat efek antiandrogenik spironolakton; dapat diganti eplerenon), kenaikan kreatinin.',
      contraindications: 'Kalium serum > 5.0 mEq/L, eGFR < 30 mL/min, penggunaan bersama suplemen kalium tinggi.',
      monitoringKey: 'Kalium serum wajib diperiksa pada minggu ke-1, ke-4, dan tiap 3 bulan.'
    },
    {
      id: 'class-sglt2-hf',
      drugClass: 'Sodium-Glucose Cotransporter 2 Inhibitor (SGLT2i)',
      classCategory: 'other',
      exampleDrugs: [
        { name: 'Dapagliflozin', dailyDosage: '10 mg 1x/hari pagi dosis tetap', fornasTier: 'Faskes 2/3' },
        { name: 'Empagliflozin', dailyDosage: '10 mg 1x/hari pagi dosis tetap', fornasTier: 'Faskes 2/3' }
      ],
      mechanismOfAction: 'Inhibisi selektif SGLT2 di tubulus proksimal ginjal; menginduksi glikosuria dan natriuresis osmotik, menurunkan preload dan afterload, memperbaiki bioenergetika miokard.',
      clinicalIndications: 'Pilar 4 HFrEF: Terbukti menurunkan kematian kardiovaskular dan rehospitalisasi pada HFrEF BAIK DENGAN MAUPUN TANPA DIABETES (DAPA-HF & EMPEROR-Reduced).',
      adverseEffects: 'Infeksi mikotik genital (candidiasis), deplesi volume cairan ringan, ketoasidosis euglikemik (sangat jarang pada pasien non-DM).',
      contraindications: 'eGFR < 20 mL/min (dapagliflozin) atau < 20 mL/min (empagliflozin), riwayat asidosis laktat.',
      monitoringKey: 'Edukasi higienitas genital harian, hidrasi cukup, pemantauan eGFR.'
    },
    {
      id: 'class-loop-diuretic',
      drugClass: 'Diuretik Loop (Pengendali Kongesti)',
      classCategory: 'diuretic-loop',
      exampleDrugs: [
        { name: 'Furosemide', dailyDosage: '20 - 80 mg 1-2x/hari oral / IV', fornasTier: 'Faskes 1' }
      ],
      mechanismOfAction: 'Inhibisi kotransporter Na+/K+/2Cl- pada ansa Henle asenden tebal ginjal; menghasilkan natriuresis dan diuresis masif cepat.',
      clinicalIndications: 'Pereda gejala retensi cairan, kongesti paru (edema paru), asites, dan edema tungkai. Dititrasi turun ke dosis terkecil saat euvolemik.',
      adverseEffects: 'Hipokalemia, hipomagnesemia, hiponatremia, dehidrasi, azotemia prerenal, hiperurisemia.',
      contraindications: 'Anuria, hipokalemia berat refrakter, syok hipovolemik.',
      monitoringKey: 'Elektrolit serum (K+, Na+), fungsi ginjal (BUN, SCr), berat badan harian.'
    },
    {
      id: 'class-sinus-node',
      drugClass: 'Sinus Node Inhibitor (HCN Channel Blocker)',
      classCategory: 'other',
      exampleDrugs: [
        { name: 'Ivabradine', dailyDosage: '5 - 7.5 mg 2x/hari bersama makan', fornasTier: 'Faskes 2/3' }
      ],
      mechanismOfAction: 'Inhibisi selektif kanal If (funny current) di nodus sinoatrial (SA node); menurunkan denyut jantung murni tanpa mempengaruhi kontraktilitas miokard.',
      clinicalIndications: 'Pasien HFrEF stabil dengan irama sinus dan denyut jantung istirahat >= 70 bpm meski sudah menggunakan dosis Beta Blocker maksimal atau intoleran.',
      adverseEffects: 'Fenomena visual bercahaya (phosphenes), bradikardia simtomatik, fibrilasi atrium.',
      contraindications: 'Fibrilasi atrium (tidak bekerja pada AF), bradikardia < 50 bpm, syok kardiogenik, angina tidak stabil.',
      monitoringKey: 'Laju denyut jantung dan EKG irama jantung berkala.'
    }
  ],
  ebmReferences: [
    {
      id: 'ref-perki-hf-2023',
      title: 'Pedoman Tata Laksana Gagal Jantung 2023',
      organization: 'Perhimpunan Dokter Spesialis Kardiovaskular Indonesia (PERKI)',
      year: '2023',
      scope: 'Nasional',
      summary: 'Konsensus nasional terbaru yang mewajibkan inisiasi dini 4 Pilar GDMT (Fantastic Four) pada seluruh pasien HFrEF untuk menurunkan mortalitas dan morbiditas rehospitalisasi.',
      evidenceLevel: 'Kelas I, Level A'
    },
    {
      id: 'ref-esc-hf-2023',
      title: 'Focused Update of the 2021 ESC Guidelines for the Diagnosis and Treatment of Acute and Chronic Heart Failure',
      organization: 'European Society of Cardiology (ESC)',
      year: '2023',
      scope: 'Internasional',
      summary: 'Rekomendasi global pilar ARNI, Beta-blocker, MRA, dan SGLT2i sebagai terapi lini pertama mutlak pada fraksi ejeksi ventrikel kiri menurun (LVEF <= 40%).',
      evidenceLevel: 'Class I, Level A'
    }
  ]
};
