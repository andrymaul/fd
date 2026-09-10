// === CLINICAL FLOWCHART & DRUG CLASSIFICATION DATABASE (EBM VERIFIED) ===
// Basis data alur keputusan klinis, klasifikasi derajat penyakit,
// tabel penggolongan obat lengkap, dan bukti literatur konsensus nasional & internasional.

import { FLOWCHART_HFREF } from './flowcharts/flowchartHfref';
import { FLOWCHART_ACS } from './flowcharts/flowchartAcs';
import { FLOWCHART_ASTHMA } from './flowcharts/flowchartAsthma';
import { FLOWCHART_DYSLIPIDEMIA } from './flowcharts/flowchartDyslipidemia';
import { FLOWCHART_COPD } from './flowcharts/flowchartCopd';
import { FLOWCHART_CKD } from './flowcharts/flowchartCkd';
import { FLOWCHART_STROKE } from './flowcharts/flowchartStroke';
import { FLOWCHART_TB } from './flowcharts/flowchartTb';
import { FLOWCHART_GERD } from './flowcharts/flowchartGerd';
import { FLOWCHART_GOUT } from './flowcharts/flowchartGout';

export interface DiseaseClassificationLevel {
  id: string;
  label: string;
  systolic?: string;
  diastolic?: string;
  criteria?: string;
  badgeColor: string; // Tailwind class
  textColor: string;
  bgColor: string;
  borderColor: string;
  clinicalAction: string;
}

export interface FlowchartBranchDrug {
  drugName: string;
  dosage: string;
  role: string;
  fornasTier?: string;
  isPreferred?: boolean;
}

export interface FlowchartNode {
  stepId: string;
  stepNumber: number;
  stageBadge: string;
  title: string;
  subtitle: string;
  timeline?: string;
  description: string;
  branchType?: 'general' | 'comorbid' | 'single' | 'escalation' | 'resistant';
  comorbidTarget?: string;
  targetBP?: string;
  drugs: FlowchartBranchDrug[];
  escalationTrigger: string;
  clinicalPearls: string;
}

export interface DrugClassificationRow {
  id: string;
  drugClass: string;
  classCategory: 'acei' | 'arb' | 'ccb-dhp' | 'ccb-non-dhp' | 'diuretic-thiazide' | 'diuretic-loop' | 'diuretic-mra' | 'beta-blocker' | 'alpha-blocker' | 'central-agonist' | 'other';
  exampleDrugs: {
    name: string;
    dailyDosage: string;
    fornasTier: string;
  }[];
  mechanismOfAction: string;
  clinicalIndications: string; // Keunggulan klinis & organ protection
  adverseEffects: string; // Efek samping khas
  contraindications: string; // Kontraindikasi mutlak & relatif
  monitoringKey: string;
}

export interface VerifiedEbmReference {
  id: string;
  title: string;
  organization: string;
  year: string;
  citationNumber?: string;
  scope: 'Nasional' | 'Internasional';
  summary: string;
  evidenceLevel: string; // e.g. "Class I, Level A"
  url?: string;
}

export interface DiseaseFlowchartData {
  id: string;
  diseaseName: string;
  shortSubtitle: string;
  category: string;
  icd10: string;
  bannerGradient: string;
  accentColor: string;
  classificationTitle: string;
  classificationLevels: DiseaseClassificationLevel[];
  flowchartTitle: string;
  lifestyleModifications: {
    title: string;
    impact: string;
    details: string;
  }[];
  comorbidProfiles: {
    name: string;
    icon: string;
    targetBP: string;
    firstLineDrug: string;
    rationale: string;
  }[];
  flowchartSteps: FlowchartNode[];
  drugClassificationTable: DrugClassificationRow[];
  ebmReferences: VerifiedEbmReference[];
  calculatorQuickLink?: {
    type: string;
    label: string;
  };
}

export const CLINICAL_FLOWCHART_DATABASE: DiseaseFlowchartData[] = [
  // =======================================================================
  // 1. HIPERTENSI PRIMER & KOMORBID (SESUAI POSTER & KONSENSUS RESMI)
  // =======================================================================
  {
    id: 'flowchart-hypertension',
    diseaseName: 'Hipertensi Primer & Komorbiditas Dewasa',
    shortSubtitle: 'Klasifikasi Derajat, Algoritma Tatalaksana Alur Bertahap, dan Tabel Penggolongan Obat Farmakoterapi',
    category: 'Kardiovaskular',
    icd10: 'I10 (Essential Hypertension)',
    bannerGradient: 'from-blue-900 via-indigo-950 to-slate-950',
    accentColor: 'blue',
    classificationTitle: 'Klasifikasi Derajat Tekanan Darah (Standar PERKI / InaSH / JNC 8 / ESC)',
    classificationLevels: [
      {
        id: 'class-normal',
        label: 'NORMAL',
        systolic: '< 120 mmHg',
        diastolic: '< 80 mmHg',
        criteria: 'Sistolik < 120 DAN Diastolik < 80',
        badgeColor: 'bg-emerald-500 text-white',
        textColor: 'text-emerald-700 dark:text-emerald-300',
        bgColor: 'bg-emerald-50/80 dark:bg-emerald-950/40',
        borderColor: 'border-emerald-300 dark:border-emerald-700',
        clinicalAction: 'Edukasi pola hidup sehat mandiri. Evaluasi ulang tekanan darah secara berkala tiap 1 tahun.'
      },
      {
        id: 'class-preht',
        label: 'PRE-HIPERTENSI / ELEVATED',
        systolic: '120 - 129 mmHg',
        diastolic: '< 80 mmHg (atau 80-89 JNC7)',
        criteria: 'Sistolik 120-129 DAN Diastolik < 80',
        badgeColor: 'bg-amber-400 text-slate-900',
        textColor: 'text-amber-800 dark:text-amber-300',
        bgColor: 'bg-amber-50/80 dark:bg-amber-950/40',
        borderColor: 'border-amber-300 dark:border-amber-700',
        clinicalAction: 'Inisiasi modifikasi gaya hidup (Diet DASH, restriksi natrium). Evaluasi ulang dalam 3-6 bulan.'
      },
      {
        id: 'class-stage1',
        label: 'HIPERTENSI TINGKAT 1',
        systolic: '130 - 139 (AHA) / 140 - 159 (PERKI)',
        diastolic: '80 - 89 (AHA) / 90 - 99 (PERKI)',
        criteria: 'Sistolik 140-159 ATAU Diastolik 90-99 mmHg',
        badgeColor: 'bg-orange-500 text-white',
        textColor: 'text-orange-800 dark:text-orange-300',
        bgColor: 'bg-orange-50/80 dark:bg-orange-950/40',
        borderColor: 'border-orange-300 dark:border-orange-700',
        clinicalAction: 'Modifikasi gaya hidup + Mulai monoterapi (risiko rendah) atau kombinasi ganda dosis rendah (risiko sedang/tinggi).'
      },
      {
        id: 'class-stage2',
        label: 'HIPERTENSI TINGKAT 2',
        systolic: '≥ 140 (AHA) / ≥ 160 (PERKI)',
        diastolic: '≥ 90 (AHA) / ≥ 100 (PERKI)',
        criteria: 'Sistolik ≥ 160 ATAU Diastolik ≥ 100 mmHg',
        badgeColor: 'bg-rose-600 text-white',
        textColor: 'text-rose-800 dark:text-rose-300',
        bgColor: 'bg-rose-50/80 dark:bg-rose-950/40',
        borderColor: 'border-rose-300 dark:border-rose-700',
        clinicalAction: 'Wajib inisiasi kombinasi 2 obat (Single-Pill Combination A+C atau A+D). Evaluasi ketat dalam 1 bulan.'
      },
      {
        id: 'class-crisis',
        label: 'KRISIS HIPERTENSI',
        systolic: '> 180 mmHg',
        diastolic: '> 120 mmHg',
        criteria: 'Sistolik > 180 DAN/ATAU Diastolik > 120',
        badgeColor: 'bg-purple-600 text-white',
        textColor: 'text-purple-800 dark:text-purple-300',
        bgColor: 'bg-purple-50/80 dark:bg-purple-950/40',
        borderColor: 'border-purple-300 dark:border-purple-700',
        clinicalAction: 'Skrining Target Organ Damage (TOD). Bedakan Urgensi (oral) vs Emergensi (IV ICU titrasi MAP 20-25%).'
      }
    ],
    flowchartTitle: 'Algoritma Tatalaksana Farmakoterapi Hipertensi (Pohon Keputusan Klinis)',
    lifestyleModifications: [
      {
        title: 'Restriksi Garam Natrium',
        impact: 'Penurunan Sistolik 5 - 8 mmHg',
        details: 'Batasi asupan garam < 2 gram natrium per hari (setara < 1 sendok teh garam dapur 5 gram/hari).'
      },
      {
        title: 'Diet DASH (Dietary Approaches to Stop Hypertension)',
        impact: 'Penurunan Sistolik 8 - 14 mmHg',
        details: 'Tinggi konsumsi sayur, buah-buahan, biji-bijian, produk susu rendah lemak; kurangi lemak jenuh & kolesterol.'
      },
      {
        title: 'Aktivitas Fisik Aerobik Teratur',
        impact: 'Penurunan Sistolik 4 - 9 mmHg',
        details: 'Olahraga aerobik intensitas sedang 30-45 menit/hari minimal 5 kali per minggu (150 menit/minggu).'
      },
      {
        title: 'Penurunan Berat Badan & Lingkar Pinggang',
        impact: 'Penurunan Sistolik 1 mmHg per 1 kg BB',
        details: 'Target IMT normal 18.5 - 22.9 kg/m²; lingkar pinggang pria < 90 cm, wanita < 80 cm.'
      },
      {
        title: 'Hentikan Merokok & Alkohol',
        impact: 'Proteksi Kardiovaskular Maksimal',
        details: 'Menghentikan vasokonstriksi arteriol akut, menekan adhesi trombosit, dan mencegah plak ateroma.'
      }
    ],
    comorbidProfiles: [
      {
        name: 'Diabetes Melitus (DMT2)',
        icon: '🩸',
        targetBP: '< 130/80 mmHg',
        firstLineDrug: 'ACEi atau ARB + CCB DHP',
        rationale: 'Menurunkan risiko mikroalbuminuria, mencegah nefropati diabetik, dan menurunkan angka mortalitas kardiovaskular.'
      },
      {
        name: 'Penyakit Ginjal Kronik (CKD / Proteinuria)',
        icon: '🫘',
        targetBP: '< 130/80 mmHg (bahkan < 120 bila ditoleransi KDIGO)',
        firstLineDrug: 'ACEi atau ARB (Wajib Titrasi Hati-hati)',
        rationale: 'Vasodilatasi arteriol eferen glomerulus menurunkan tekanan intraglomerular dan memotong proteinuria progresif.'
      },
      {
        name: 'Penyakit Jantung Koroner (CAD / Post-MI)',
        icon: '🫀',
        targetBP: '< 130/80 mmHg (Diastolik jangan < 70)',
        firstLineDrug: 'Beta Blocker (Bisoprolol) + ACEi / ARB',
        rationale: 'Menurunkan konsumsi oksigen miokard, menstabilkan plak, mencegah aritmia ventrikel fatal, dan remodelling ventrikel.'
      },
      {
        name: 'Gagal Jantung (Heart Failure / HFrEF)',
        icon: '❤️‍🩹',
        targetBP: '< 130/80 mmHg',
        firstLineDrug: 'ARNI / ACEi + Beta Blocker + MRA + SGLT2i',
        rationale: '4 Pilar Fantastis menurunkan morbiditas dekompensasi dan mortalitas mortalitas gagal jantung secara signifikan.'
      },
      {
        name: 'Pasca Stroke / TIA',
        icon: '🧠',
        targetBP: '< 130/80 mmHg',
        firstLineDrug: 'ACEi / ARB + Diuretik Tiazid / CCB',
        rationale: 'Menurunkan risiko stroke berulang (recurrent ischemic stroke / intracerebral hemorrhage).'
      },
      {
        name: 'Kehamilan (Gestasional / Kronik)',
        icon: '🤰',
        targetBP: '135/85 mmHg (110-135 / 70-85)',
        firstLineDrug: 'Methyldopa 250-500 mg 2-3x/hr / Labetalol / Nifedipine',
        rationale: 'Aman untuk janin & perfusi uteroplasenta. KONTRAINDIKASI MUTLAK: ACEi, ARB, MRA (Teratogenik & gagal ginjal janin).'
      }
    ],
    flowchartSteps: [
      {
        stepId: 'step-1-initiation',
        stepNumber: 1,
        stageBadge: 'INISIASI TERAPI',
        title: 'Langkah 1: Inisiasi Farmakoterapi Lini Pertama',
        subtitle: 'Kombinasi Ganda Dosis Rendah (SPC) atau Monoterapi Selektif',
        timeline: 'Bulan ke 0 - 1',
        description: 'Pedoman konsensus PERKI/InaSH dan ISH 2020 merekomendasikan inisiasi langsung 2 OBAT (Single Pill Combination / SPC) bagi sebagian besar pasien hipertensi untuk percepatan kontrol tensi dan proteksi vaskular.',
        branchType: 'single',
        targetBP: '< 140/90 mmHg (1 bulan) s/d < 130/80 mmHg (3 bulan)',
        drugs: [
          {
            drugName: 'Candesartan + Amlodipine',
            dosage: 'Candesartan 8 mg PO 1x/hari + Amlodipine 5 mg PO 1x/hari (Pagi/Malam)',
            role: 'Kombinasi ARB + CCB (Pilihan Utama Baku Emas)',
            fornasTier: 'Faskes 1',
            isPreferred: true
          },
          {
            drugName: 'Ramipril + Amlodipine',
            dosage: 'Ramipril 5 mg PO 1x/hari + Amlodipine 5 mg PO 1x/hari',
            role: 'Alternatif Kombinasi ACEi + CCB',
            fornasTier: 'Faskes 1',
            isPreferred: false
          },
          {
            drugName: 'Amlodipine (Monoterapi)',
            dosage: '5 - 10 mg PO 1x/hari',
            role: 'Monoterapi Khusus: Lansia sangat tua (>80 th), frailty, atau Grade 1 risiko sangat rendah',
            fornasTier: 'Faskes 1',
            isPreferred: false
          },
          {
            drugName: 'Candesartan / Valsartan (Monoterapi)',
            dosage: 'Candesartan 8-16 mg PO 1x/hari',
            role: 'Monoterapi Khusus: Pasien pra-dialisis CKD proteinuria awal',
            fornasTier: 'Faskes 1',
            isPreferred: false
          }
        ],
        escalationTrigger: 'Evaluasi setelah 4 MINGGU. Jika tekanan darah BELUM mencapai target (< 140/90 mmHg atau < 130/80 mmHg pada komorbid), WAJIB ESKALASI KE LANGKAH 2.',
        clinicalPearls: 'Kombinasi ARB/ACEi + CCB DHP sangat sinergis karena efek vasodilatasi venula pasca-kapiler oleh ARB/ACEi mencegah retensi cairan interstitial, sehingga mengurangi risiko edema tungkai (ankle edema) akibat Amlodipine hingga > 50%.'
      },
      {
        stepId: 'step-2-titration',
        stepNumber: 2,
        stageBadge: 'TITRASI DOSIS',
        title: 'Langkah 2: Eskalasi Kombinasi Ganda ke Dosis Penuh',
        subtitle: 'Optimalisasi Dosis Regimen Ganda ARB + CCB',
        timeline: 'Bulan ke 1 - 2',
        description: 'Titrasi dosis komponen kombinasi ganda hingga dosis terapeutik maksimal yang aman sebelum menambahkan obat golongan ketiga.',
        branchType: 'escalation',
        targetBP: '< 130/80 mmHg',
        drugs: [
          {
            drugName: 'Candesartan 16 mg + Amlodipine 10 mg',
            dosage: 'Candesartan 16 mg PO 1x/hari + Amlodipine 10 mg PO 1x/hari',
            role: 'Dosis Penuh Kombinasi Ganda ARB + CCB',
            fornasTier: 'Faskes 1',
            isPreferred: true
          },
          {
            drugName: 'Ramipril 10 mg + Amlodipine 10 mg',
            dosage: 'Ramipril 10 mg PO 1x/hari + Amlodipine 10 mg PO 1x/hari',
            role: 'Alternatif Dosis Penuh ACEi + CCB',
            fornasTier: 'Faskes 1',
            isPreferred: false
          }
        ],
        escalationTrigger: 'Evaluasi dalam 4 MINGGU. Jika tensi pasien TETAP ≥ 140/90 mmHg meskipun sudah patuh pada dosis penuh kombinasi ganda, NAIKKAN KE LANGKAH 3 (Triple Therapy).',
        clinicalPearls: 'Verifikasi kepatuhan pasien (adherence check) dan pantau asupan garam dapur diet tersembunyi (makanan instan, kecap, pengawet) sebelum memutuskan kegagalan kombinasi ganda.'
      },
      {
        stepId: 'step-3-triple',
        stepNumber: 3,
        stageBadge: 'KOMBINASI TIGA OBAT',
        title: 'Langkah 3: Terapi Kombinasi Tiga Obat (Triple Therapy)',
        subtitle: 'Kombinasi ARB/ACEi + CCB + Diuretik Tiazid (A + C + D)',
        timeline: 'Bulan ke 2 - 3',
        description: 'Tambahkan diuretik tiazid atau tiazid-like untuk mengatasi retensi volume cairan intravaskular sekunder akibat penurunan curah jantung dan resistensi perifer.',
        branchType: 'escalation',
        targetBP: '< 130/80 mmHg',
        drugs: [
          {
            drugName: 'Candesartan + Amlodipine + Hydrochlorothiazide (HCT)',
            dosage: 'Candesartan 16 mg + Amlodipine 10 mg + HCT 12.5 - 25 mg PO 1x/hari Pagi',
            role: 'Triple Combination Baku Emas (A + C + D)',
            fornasTier: 'Faskes 1',
            isPreferred: true
          },
          {
            drugName: 'Valsartan + Amlodipine + Indapamide',
            dosage: 'Valsartan 160 mg + Amlodipine 10 mg + Indapamide SR 1.5 mg PO 1x/hari Pagi',
            role: 'Triple Therapy Ramah Metabolik (Tiazid-like)',
            fornasTier: 'Faskes 2/3',
            isPreferred: false
          }
        ],
        escalationTrigger: 'Jika setelah 1-3 BULAN pemakaian kombinasi 3 obat dosis optimal (termasuk diuretik) tekanan darah TETAP ≥ 140/90 mmHg, pasien didiagnosis HIPERTENSI RESISTEN → Masuk Langkah 4.',
        clinicalPearls: 'HCT diminum pagi hari untuk menghindari nokturia malam. Waspadai hipokalemia dan hiperurisemia pada pemakaian jangka panjang; lakukan evaluasi elektrolit serum (K+, Na+) dan kreatinin berkala.'
      },
      {
        stepId: 'step-4-resistant',
        stepNumber: 4,
        stageBadge: 'HIPERTENSI RESISTEN & RUJUKAN',
        title: 'Langkah 4: Tatalaksana Hipertensi Resisten & Skrining Sekunder',
        subtitle: 'Penambahan Antagonis Reseptor Mineralokortikoid (MRA) atau Simpatolitik',
        timeline: 'Bulan ke 3 seterusnya',
        description: 'Spironolakton adalah obat lini keempat paling poten dan terbukti secara EBM (studi PATHWAY-2) untuk menembus hipertensi resisten yang dimediasi oleh kelebihan retensi aldosteron.',
        branchType: 'resistant',
        targetBP: '< 130/80 mmHg',
        drugs: [
          {
            drugName: 'Spironolactone',
            dosage: '25 - 50 mg PO sekali sehari pagi/siang',
            role: 'Lini Keempat Utama (MRA Pilihan EBM PATHWAY-2)',
            fornasTier: 'Faskes 1',
            isPreferred: true
          },
          {
            drugName: 'Bisoprolol',
            dosage: '5 - 10 mg PO sekali sehari (Terutama jika HR > 80 bpm, CAD, atau HFrEF)',
            role: 'Beta-Blocker Kardioselektif Alternatif',
            fornasTier: 'Faskes 1',
            isPreferred: false
          },
          {
            drugName: 'Doxazosin / Clonidine',
            dosage: 'Doxazosin 1 - 4 mg PO malam atau Clonidine 0.15 mg PO 2-3x/hari',
            role: 'Alfa-1 Blocker / Agonis Alfa-2 Sentral Pilihan Terakhir',
            fornasTier: 'Faskes 2/3',
            isPreferred: false
          }
        ],
        escalationTrigger: 'Rujuk ke Dokter Spesialis Jantung & Pembuluh Darah (Sp.JP) atau Spesialis Penyakit Dalam Konsultan Ginjal Hipertensi (Sp.PD-KGH).',
        clinicalPearls: 'Syarat wajib sebelum inisiasi Spironolactone: Kadar Kalium serum HARUS < 4.5 mEq/L dan eGFR ≥ 45 mL/min (kontraindikasi relatif jika eGFR < 30 mL/min karena risiko hiperkalemia fatal).'
      }
    ],
    drugClassificationTable: [
      {
        id: 'drug-class-acei',
        drugClass: 'ACE Inhibitor (ACEi)',
        classCategory: 'acei',
        exampleDrugs: [
          { name: 'Captopril', dailyDosage: '12.5 - 50 mg PO 2-3x/hari (1 jam sebelum makan)', fornasTier: 'Faskes 1' },
          { name: 'Ramipril', dailyDosage: '2.5 - 10 mg PO 1x/hari', fornasTier: 'Faskes 1' },
          { name: 'Lisinopril', dailyDosage: '5 - 20 mg PO 1x/hari', fornasTier: 'Faskes 1' }
        ],
        mechanismOfAction: 'Menghambat enzim konversi Angiotensin I menjadi Angiotensin II, menurunkan sekresi aldosteron, dan menghambat degradasi bradikinin (vasodilator endogen).',
        clinicalIndications: 'Pilihan utama pada Diabetes Melitus, Penyakit Ginjal Kronik (menurunkan proteinuria), Pasca Infark Miokard, dan Gagal Jantung.',
        adverseEffects: 'Batuk kering persisten akibat penumpukan bradikinin (5-20% pasien), hiperkalemia, angioedema (jarang namun fatal), hipotensi dosis pertama.',
        contraindications: 'KONTRAINDIKASI MUTLAK pada KEHAMILAN (teratogenik Trimester 2 & 3: oligohidramnion, displasia ginjal), riwayat Angioedema, dan Stenosis Arteri Renalis Bilateral.',
        monitoringKey: 'Kadar Kreatinin serum, eGFR (kenaikan kreatinin <30% masih wajar), dan Kalium serum berkala.'
      },
      {
        id: 'drug-class-arb',
        drugClass: 'Angiotensin Receptor Blocker (ARB)',
        classCategory: 'arb',
        exampleDrugs: [
          { name: 'Candesartan', dailyDosage: '8 - 16 mg PO 1x/hari (maks. 32 mg/hari)', fornasTier: 'Faskes 1' },
          { name: 'Valsartan', dailyDosage: '80 - 160 mg PO 1x/hari (maks. 320 mg/hari)', fornasTier: 'Faskes 1' },
          { name: 'Telmisartan', dailyDosage: '40 - 80 mg PO 1x/hari (Waktu paruh 24 jam)', fornasTier: 'Faskes 2/3' },
          { name: 'Irbesartan', dailyDosage: '150 - 300 mg PO 1x/hari', fornasTier: 'Faskes 1' }
        ],
        mechanismOfAction: 'Memblokade selektif reseptor Angiotensin II tipe 1 (AT1-receptor) pada otot polos vaskular dan kelenjar adrenal tanpa memengaruhi metabolisme bradikinin.',
        clinicalIndications: 'Indikasi sama kuat dengan ACEi (DM, CKD, Gagal Jantung). Sangat direkomendasikan sebagai pengganti ACEi bagi pasien yang mengalami batuk kering.',
        adverseEffects: 'Hiperkalemia, pusing ortostatik, peningkatan ringan kreatinin serum. Insidensi batuk kering SANGAT RENDAH (setara plasebo).',
        contraindications: 'KONTRAINDIKASI MUTLAK pada KEHAMILAN, menyusui, stenosis arteri renalis bilateral, dan DILARANG DIKOMBINASIKAN DENGAN ACEi (Dual-RAS blockade meningkatkan mortalitas & gagal ginjal).',
        monitoringKey: 'Kadar Kalium serum, fungsi ginjal (kreatinin/eGFR), dan tekanan darah ortostatik.'
      },
      {
        id: 'drug-class-ccb-dhp',
        drugClass: 'Calcium Channel Blocker (CCB) - Dihidropiridin (DHP)',
        classCategory: 'ccb-dhp',
        exampleDrugs: [
          { name: 'Amlodipine', dailyDosage: '5 - 10 mg PO 1x/hari pagi atau malam', fornasTier: 'Faskes 1' },
          { name: 'Nifedipine GITS', dailyDosage: '20 - 30 mg PO 1x/hari', fornasTier: 'Faskes 1' },
          { name: 'Nicardipine IV', dailyDosage: 'Injeksi kontinyu titrasi 0.5 - 10 mcg/kg/menit (Krisis Hipertensi)', fornasTier: 'Faskes 2/3' }
        ],
        mechanismOfAction: 'Menghambat influks ion kalsium ekstraseluler melalui saluran lambat L-type channel pada otot polos arteriol vaskular, memicu relaksasi otot polos dan vasodilatasi perifer kuat.',
        clinicalIndications: 'Sangat efektif pada lansia dengan Hipertensi Sistolik Terisolasi (ISH), ras kulit hitam, angina pektoris stabil, dan pasien penyakit vaskular perifer.',
        adverseEffects: 'Edema tungkai perifer pretibial (bukan karena retensi cairan sistemik melainkan ekstravasasi transkapiler), sakit kepala berdenyut, wajah memerah (flushing), takikardia refleks.',
        contraindications: 'Nifedipine kerja cepat (short-acting oral) DILARANG untuk krisis hipertensi karena memicu stroke iskemik mendadak dan infark miokard.',
        monitoringKey: 'Pemeriksaan edema tungkai bilateral dan denyut jantung istirahat.'
      },
      {
        id: 'drug-class-ccb-non-dhp',
        drugClass: 'Calcium Channel Blocker (CCB) - Non-Dihidropiridin',
        classCategory: 'ccb-non-dhp',
        exampleDrugs: [
          { name: 'Diltiazem', dailyDosage: '30 - 60 mg PO 3x/hari atau SR 100 - 200 mg 1x/hari', fornasTier: 'Faskes 1' },
          { name: 'Verapamil', dailyDosage: '80 - 120 mg PO 2-3x/hari atau SR 240 mg 1x/hari', fornasTier: 'Faskes 1' }
        ],
        mechanismOfAction: 'Memiliki selektivitas tinggi pada nodus SA dan AV miokardium di samping vaskular; memberikan efek inotropik negatif, kronotropik negatif, dan dromotropik negatif.',
        clinicalIndications: 'Hipertensi disertai takikardia supraventrikular (SVT), Fibrilasi Atrium (rate control), atau angina stabil pada pasien yang intoleran Beta Blocker.',
        adverseEffects: 'Bradikardia simtomatik, blok atrioventrikular (AV block), konstipasi kronis parah (terutama Verapamil), perburukan gagal jantung kongestif.',
        contraindications: 'KONTRAINDIKASI MUTLAK pada Gagal Jantung dengan Fraksi Ejeksi Rendah (HFrEF EF < 40%), AV Block derajat 2 atau 3 tanpa pacemaker, dan sindrom Sick Sinus.',
        monitoringKey: 'EKG berkala (interval PR) dan denyut jantung (HR jangan < 55 bpm).'
      },
      {
        id: 'drug-class-diuretic-thiazide',
        drugClass: 'Diuretik Tiazid & Tiazid-Like',
        classCategory: 'diuretic-thiazide',
        exampleDrugs: [
          { name: 'Hydrochlorothiazide (HCT)', dailyDosage: '12.5 - 25 mg PO 1x/hari pagi hari', fornasTier: 'Faskes 1' },
          { name: 'Indapamide', dailyDosage: '1.25 - 2.5 mg PO atau SR 1.5 mg 1x/hari pagi', fornasTier: 'Faskes 2/3' },
          { name: 'Chlorthalidone', dailyDosage: '12.5 - 25 mg PO 1x/hari', fornasTier: 'Faskes 2/3' }
        ],
        mechanismOfAction: 'Menghambat kotransporter Na+/Cl- pada tubulus kontortus distal ginjal, meningkatkan ekskresi natrium, klorida, dan air; menurunkan resistensi vaskular jangka panjang.',
        clinicalIndications: 'Komponen penting terapi kombinasi (Lini ketiga A+C+D); sangat efektif pada lansia, osteoporosis (mengurangi ekskresi kalsium urin), dan pencegahan stroke.',
        adverseEffects: 'Hipokalemia, hiponatremia, hiperurisemia (dapat memicu serangan Gout akut), hiperglikemia ringan, dislipidemia, disfungsi ereksi.',
        contraindications: 'Riwayat alergi sulfonamid parah, Gout aktif parah, dan kurang efektif bila klirens kreatinin (eGFR) < 30 mL/menit (harus diganti loop diuretik).',
        monitoringKey: 'Elektrolit serum (K+, Na+), kadar Asam Urat serum, dan Glukosa darah puasa.'
      },
      {
        id: 'drug-class-diuretic-mra',
        drugClass: 'Diuretik Hemat Kalium & MRA (Mineralocorticoid Receptor Antagonist)',
        classCategory: 'diuretic-mra',
        exampleDrugs: [
          { name: 'Spironolactone', dailyDosage: '25 - 50 mg PO 1x/hari pagi/siang', fornasTier: 'Faskes 1' },
          { name: 'Eplerenone', dailyDosage: '25 - 50 mg PO 1x/hari (Selektif tanpa efek ginekomastia)', fornasTier: 'Faskes 2/3' }
        ],
        mechanismOfAction: 'Menginhibisi secara kompetitif reseptor aldosteron pada tubulus pengumpul kortikal ginjal, mencegah retensi natrium dan ekskresi kalium yang dimediasi aldosteron.',
        clinicalIndications: 'OBAT PILIHAN UTAMA untuk HIPERTENSI RESISTEN (Studi PATHWAY-2), Hiperaldosteronisme primer, dan Gagal Jantung HFrEF (menurunkan mortalitas).',
        adverseEffects: 'Hiperkalemia fatal, ginekomastia dan nyeri payudara pada pria (Spironolactone memblokade reseptor androgen), gangguan menstruasi pada wanita.',
        contraindications: 'Kadar Kalium serum awal > 5.0 mEq/L, insufisiensi ginjal berat (eGFR < 30 mL/min), penyakit Addison, atau penggunaan bersamaan dengan suplemen kalium tinggi.',
        monitoringKey: 'Kadar Kalium serum dan Kreatinin pada minggu ke-1, ke-4, dan tiap 3-6 bulan.'
      },
      {
        id: 'drug-class-beta-blocker',
        drugClass: 'Beta-Blocker Kardioselektif (β1-Selective)',
        classCategory: 'beta-blocker',
        exampleDrugs: [
          { name: 'Bisoprolol', dailyDosage: '2.5 - 5 mg PO 1x/hari (maks. 10 mg/hari)', fornasTier: 'Faskes 1' },
          { name: 'Nebivolol', dailyDosage: '2.5 - 5 mg PO 1x/hari (Memiliki efek vasodilator pelepasan NO)', fornasTier: 'Faskes 2/3' },
          { name: 'Atenolol', dailyDosage: '25 - 50 mg PO 1x/hari', fornasTier: 'Faskes 1' },
          { name: 'Carvedilol', dailyDosage: '6.25 - 25 mg PO 2x/hari (Non-selektif + Alfa-1 blocker)', fornasTier: 'Faskes 1' }
        ],
        mechanismOfAction: 'Memblokade reseptor Beta-1 adrenergik miokardium secara kompetitif, menurunkan denyut jantung (kronotropik negatif), kontraktilitas miokard (inotropik negatif), dan sekresi renin.',
        clinicalIndications: 'Bukan lini pertama hipertensi tanpa komplikasi; WAJIB diberikan jika ada komorbiditas: Pasca Infark Miokard (Post-MI), Angina Pektoris, Gagal Jantung HFrEF, atau resting HR > 80 bpm.',
        adverseEffects: 'Bradikardia, kelelahan fisik (fatigue), ekstremitas dingin, bronkospasme (pada dosis tinggi), menutupi gejala peringatan hipoglikemia (kecuali keringat dingin).',
        contraindications: 'Asma bronkial berat aktif (bronkospasme), Bradikardia berat (HR < 50 bpm), AV Block derajat 2 atau 3, syok kardiogenik.',
        monitoringKey: 'Frekuensi denyut nadi istirahat (target 60-70 bpm) dan evaluasi gejala bronkospasme.'
      },
      {
        id: 'drug-class-central-agonist',
        drugClass: 'Agonis Reseptor Alfa-2 Sentral',
        classCategory: 'central-agonist',
        exampleDrugs: [
          { name: 'Metildopa', dailyDosage: '250 - 500 mg PO 2-3x/hari (maks. 2000 mg/hari)', fornasTier: 'Faskes 1' },
          { name: 'Clonidine', dailyDosage: '0.075 - 0.15 mg PO 2x/hari', fornasTier: 'Faskes 1' }
        ],
        mechanismOfAction: 'Menstimulasi reseptor alfa-2 adrenergik sentral di batang otak, menurunkan pelepasan tonus simpatis eferen ke jantung, ginjal, dan pembuluh darah perifer.',
        clinicalIndications: 'Metildopa adalah OBAT PILIHAN PALING AMAN untuk HIPERTENSI PADA KEHAMILAN & PREEKLAMSIA. Clonidine digunakan pada krisis hipertensi urgensi atau hipertensi refrakter.',
        adverseEffects: 'Sedasi berat, mulut kering, depresi mental, edema perifer, anemia hemolitik autoimun positif Coombs test (Metildopa), Rebound Hypertension mendadak bila Clonidine dihentikan tiba-tiba.',
        contraindications: 'Penyakit hati aktif (hepatitis), depresi berat. Clonidine TIDAK BOLEH dihentikan mendadak tanpa tapering off bertahap.',
        monitoringKey: 'Uji fungsi hati (SGOT/SGPT), skrining depresi, dan edukasi kepatuhan minum obat teratur.'
      }
    ],
    ebmReferences: [
      {
        id: 'ref-pnpk-hipertensi',
        title: 'Pedoman Nasional Pelayanan Kedokteran (PNPK) Tata Laksana Hipertensi Dewasa',
        organization: 'Kementerian Kesehatan Republik Indonesia (Kemenkes RI)',
        year: '2023',
        citationNumber: 'Keputusan Menteri Kesehatan RI',
        scope: 'Nasional',
        summary: 'Standar baku nasional pelayanan kedokteran yang menetapkan alur diagnosis bertahap, target kontrol tensi < 140/90 mmHg (atau < 130/80 mmHg pada risiko tinggi), dan pemanfaatan obat esensial FORNAS.',
        evidenceLevel: 'Tingkat Bukti Nasional Standar Tertinggi'
      },
      {
        id: 'ref-perki-inash-2023',
        title: 'Konsensus Penatalaksanaan Hipertensi PERKI & InaSH (Indonesian Society of Hypertension)',
        organization: 'Perhimpunan Dokter Spesialis Kardiovaskular Indonesia (PERKI) & InaSH',
        year: '2023',
        scope: 'Nasional',
        summary: 'Pedoman spesialis jantung Indonesia yang merekomendasikan inisiasi Single Pill Combination (SPC) 2 obat pada mayoritas pasien hipertensi derajat 1 risiko tinggi & derajat 2.',
        evidenceLevel: 'Rekomendasi Kelas I, Level Bukti A'
      },
      {
        id: 'ref-jnc8',
        title: '2014 Evidence-Based Guideline for the Management of High Blood Pressure in Adults (JNC 8)',
        organization: 'Eighth Joint National Committee (JNC 8) - JAMA',
        year: '2014',
        scope: 'Internasional',
        summary: 'Pedoman tonggak sejarah EBM berbasis tinjauan sistematis RCT yang mengidentifikasi 4 kelas obat lini pertama ekuivalen: ACEi, ARB, CCB, dan Diuretik Tiazid.',
        evidenceLevel: 'Rekomendasi Kelas I, Level Bukti A (Meta-Analisis RCT)'
      },
      {
        id: 'ref-ish-2020',
        title: '2020 International Society of Hypertension Global Hypertension Practice Guidelines',
        organization: 'International Society of Hypertension (ISH)',
        year: '2020',
        scope: 'Internasional',
        summary: 'Panduan global yang membagi algoritma terapi menjadi standar "Optimal" dan "Esensial", menegaskan strategi kombinasi ganda sejak awal (Step 1 A+C) dan titrasi triple therapy (Step 3 A+C+D).',
        evidenceLevel: 'Konsensus Global Internasional'
      },
      {
        id: 'ref-esc-2024',
        title: '2024 ESC Guidelines for the Management of Elevated Blood Pressure and Hypertension',
        organization: 'European Society of Cardiology (ESC)',
        year: '2024',
        scope: 'Internasional',
        summary: 'Pedoman Eropa termutakhir yang menetapkan target tekanan darah sistolik intensif 120-129 mmHg jika ditoleransi dengan baik, serta memprioritaskan evaluasi kerusakan organ asimtomatik (HMOD).',
        evidenceLevel: 'Rekomendasi Kelas I, Level Bukti A'
      },
      {
        id: 'ref-acc-aha-2017',
        title: '2017 ACC/AHA/AAPA/ABC/ACPM/AGS/APhA/ASH/ASPC/NMA/PCNA Guideline for High Blood Pressure',
        organization: 'American College of Cardiology & American Heart Association',
        year: '2017',
        scope: 'Internasional',
        summary: 'Mendefinisikan ulang ambang batas Hipertensi Stage 1 mulai dari ≥ 130/80 mmHg berdasarkan bukti uji klinis SPRINT yang menunjukkan proteksi kardiovaskular bermakna.',
        evidenceLevel: 'Rekomendasi Kelas I, Level Bukti A'
      }
    ],
    calculatorQuickLink: {
      type: 'map',
      label: 'Buka Kalkulator Tekanan Arteri Rata-Rata (MAP)'
    }
  },

  // =======================================================================
  // 2. DIABETES MELITUS TIPE 2 (PERKENI 2024 / ADA 2024)
  // =======================================================================
  {
    id: 'flowchart-t2dm',
    diseaseName: 'Diabetes Melitus Tipe 2 (DMT2) Dewasa',
    shortSubtitle: 'Algoritma Pengelolaan Holistik Glikemik, Proteksi Kardio-Renal, dan Terapi Bertahap',
    category: 'Endokrin & Metabolik',
    icd10: 'E11 (Type 2 Diabetes Mellitus)',
    bannerGradient: 'from-amber-900 via-orange-950 to-slate-950',
    accentColor: 'amber',
    classificationTitle: 'Kriteria Diagnosis & Sasaran Kendali Glikemik (PERKENI 2024 / ADA)',
    classificationLevels: [
      {
        id: 'class-normal-glucose',
        label: 'NORMAL GLIKEMIK',
        criteria: 'GDP < 100 mg/dL DAN HbA1c < 5.7%',
        badgeColor: 'bg-emerald-500 text-white',
        textColor: 'text-emerald-700 dark:text-emerald-300',
        bgColor: 'bg-emerald-50/80 dark:bg-emerald-950/40',
        borderColor: 'border-emerald-300 dark:border-emerald-700',
        clinicalAction: 'Edukasi gizi seimbang dan aktivitas fisik. Skrining berkala tiap 3 tahun.'
      },
      {
        id: 'class-prediabetes',
        label: 'PREDIABETES (IFG / IGT)',
        criteria: 'GDP 100-125 mg/dL ATAU HbA1c 5.7 - 6.4%',
        badgeColor: 'bg-amber-400 text-slate-900',
        textColor: 'text-amber-800 dark:text-amber-300',
        bgColor: 'bg-amber-50/80 dark:bg-amber-950/40',
        borderColor: 'border-amber-300 dark:border-amber-700',
        clinicalAction: 'Intensifikasi gaya hidup; pertimbangkan Metformin pada usia <60 tahun atau IMT ≥ 35.'
      },
      {
        id: 'class-dm-controlled',
        label: 'DIABETES TERKONTROL',
        criteria: 'HbA1c < 7.0% (GDP 80-130 mg/dL)',
        badgeColor: 'bg-teal-600 text-white',
        textColor: 'text-teal-800 dark:text-teal-300',
        bgColor: 'bg-teal-50/80 dark:bg-teal-950/40',
        borderColor: 'border-teal-300 dark:border-teal-700',
        clinicalAction: 'Pertahankan regimen farmakoterapi aktif. Evaluasi berkala HbA1c tiap 3-6 bulan.'
      },
      {
        id: 'class-dm-uncontrolled',
        label: 'DIABETES TAK TERKONTROL (HBA1C ≥ 7.0%)',
        criteria: 'HbA1c 7.5% - 9.0% dengan terapi berjalan',
        badgeColor: 'bg-rose-600 text-white',
        textColor: 'text-rose-800 dark:text-rose-300',
        bgColor: 'bg-rose-50/80 dark:bg-rose-950/40',
        borderColor: 'border-rose-300 dark:border-rose-700',
        clinicalAction: 'Wajib eskalasi terapi: tambah obat kedua (SGLT2i / DPP-4i / SU) atau inisiasi insulin basal.'
      },
      {
        id: 'class-dm-hyperglycemic-crisis',
        label: 'DEKOMPENSASI METABOLIK BERAT',
        criteria: 'HbA1c ≥ 9.0% disertai gejala katabolik (BB turun drastis, Ketonuria, KAD / HHS)',
        badgeColor: 'bg-purple-600 text-white',
        textColor: 'text-purple-800 dark:text-purple-300',
        bgColor: 'bg-purple-50/80 dark:bg-purple-950/40',
        borderColor: 'border-purple-300 dark:border-purple-700',
        clinicalAction: 'Inisiasi langsung terapi kombinasi intensif termasuk INSULIN BASAL ± BOLUS.'
      }
    ],
    flowchartTitle: 'Algoritma Farmakoterapi Bertahap DMT2 Dewasa (PERKENI / ADA)',
    lifestyleModifications: [
      {
        title: 'Terapi Nutrisi Medis (TNM)',
        impact: 'Penurunan HbA1c 1.0 - 2.0%',
        details: 'Komposisi karbohidrat kompleks 45-65%, protein 15-20%, lemak sehat 20-25%; batasi sukrosa murni.'
      },
      {
        title: 'Latihan Fisik Aerobik & Beban',
        impact: 'Meningkatkan sensitivitas reseptor insulin perifer',
        details: 'Aktivitas aerobik 150 menit/minggu diselingi latihan beban resistensi 2-3 kali seminggu.'
      },
      {
        title: 'Pemantauan Glukosa Darah Mandiri (PGDM)',
        impact: 'Pencegahan variabilitas glukosa & hipoglikemia',
        details: 'Periksa glukosa puasa dan 2 jam post-prandial secara periodik sesuai regimen terapi.'
      }
    ],
    comorbidProfiles: [
      {
        name: 'Penyakit Kardiovaskular Aterosklerotik (ASCVD)',
        icon: '🫀',
        targetBP: 'HbA1c < 7.0%',
        firstLineDrug: 'SGLT2i (Empagliflozin) atau GLP-1 RA',
        rationale: 'Terbukti menurunkan risiko MACE (kematian CV, infark non-fatal, stroke) secara independen.'
      },
      {
        name: 'Penyakit Ginjal Kronik (CKD / UACR > 30 mg/g)',
        icon: '🫘',
        targetBP: 'HbA1c < 7.0% - 7.5%',
        firstLineDrug: 'SGLT2i (Dapagliflozin / Empagliflozin) + Metformin',
        rationale: 'Memperlambat progresi penurunan eGFR dan menurunkan risiko end-stage renal disease (ESRD).'
      },
      {
        name: 'Gagal Jantung (HFrEF / HFpEF)',
        icon: '❤️‍🩹',
        targetBP: 'HbA1c < 7.5%',
        firstLineDrug: 'SGLT2i (Empagliflozin / Dapagliflozin)',
        rationale: 'Menurunkan rawat inap akibat gagal jantung dan menurunkan mortalitas kardiovaskular.'
      }
    ],
    flowchartSteps: [
      {
        stepId: 'step-t2dm-1',
        stepNumber: 1,
        stageBadge: 'MONOTERAPI AWAL',
        title: 'Langkah 1: Inisiasi Metformin & Modifikasi Gaya Hidup',
        subtitle: 'Lini Pertama Universal Pasca Diagnosis (Bila Tanpa Kontraindikasi Ginjal)',
        timeline: 'Bulan ke 0 - 3',
        description: 'Mulai terapi Metformin dosis rendah bersama makanan untuk meminimalkan efek samping gastrointestinal, kemudian titrasi bertahap.',
        branchType: 'single',
        drugs: [
          {
            drugName: 'Metformin',
            dosage: '500 mg PO 1-2x/hari bersama makan, titrasi bertahap hingga 1000 mg 2x/hari',
            role: 'Lini Pertama Baku Emas (Biguanid)',
            fornasTier: 'Faskes 1',
            isPreferred: true
          }
        ],
        escalationTrigger: 'Jika setelah 3 BULAN terapi Metformin optimal target HbA1c TETAP ≥ 7.0%, lanjutkan ke Langkah 2 (Kombinasi Ganda).',
        clinicalPearls: 'Aman bila eGFR ≥ 45 mL/min. Jika eGFR 30-44 mL/min, batasi dosis maksimal 1000 mg/hari. Hentikan jika eGFR < 30 mL/min karena risiko asidosis laktat.'
      },
      {
        stepId: 'step-t2dm-2',
        stepNumber: 2,
        stageBadge: 'KOMBINASI GANDA',
        title: 'Langkah 2: Terapi Kombinasi Ganda Berbasis Komorbid',
        subtitle: 'Metformin + Agen Kedua (SGLT2i / DPP-4i / Sulfonilurea)',
        timeline: 'Bulan ke 3 - 6',
        description: 'Prioritaskan SGLT2-Inhibitor bila pasien memiliki risiko tinggi penyakit kardiovaskular, gagal jantung, atau penyakit ginjal kronik.',
        branchType: 'comorbid',
        drugs: [
          {
            drugName: 'Metformin + Empagliflozin',
            dosage: 'Metformin 1000 mg 2x/hari + Empagliflozin 10-25 mg 1x/hari Pagi',
            role: 'Prioritas Proteksi Kardio-Renal (SGLT2i)',
            fornasTier: 'Faskes 2/3',
            isPreferred: true
          },
          {
            drugName: 'Metformin + Glimepiride',
            dosage: 'Metformin 1000 mg 2x/hari + Glimepiride 1-4 mg 1x/hari sebelum sarapan',
            role: 'Alternatif Terjangkau Efektif (Sulfonilurea FORNAS)',
            fornasTier: 'Faskes 1',
            isPreferred: false
          },
          {
            drugName: 'Metformin + Linagliptin',
            dosage: 'Metformin 1000 mg 2x/hari + Linagliptin 5 mg 1x/hari',
            role: 'Pilihan Aman Tanpa Risiko Hipoglikemia & Ramah Ginjal (DPP-4i)',
            fornasTier: 'Faskes 2/3',
            isPreferred: false
          },
          {
            drugName: 'Metformin + Acarbose',
            dosage: 'Metformin 1000 mg 2x/hari + Acarbose 50 - 100 mg 3x/hari bersama suapan pertama makan',
            role: 'Spesifik Kontrol Lonjakan Glukosa Makan / GD2PP (AGI FORNAS)',
            fornasTier: 'Faskes 1',
            isPreferred: false
          }
        ],
        escalationTrigger: 'Evaluasi ulang 3 bulan berikutnya. Jika HbA1c MASIH ≥ 7.0%, eskalasi ke Langkah 3.',
        clinicalPearls: 'SGLT2i memberikan bonus penurunan berat badan 2-4 kg dan penurunan tekanan darah sistolik 3-5 mmHg.'
      },
      {
        stepId: 'step-t2dm-3',
        stepNumber: 3,
        stageBadge: 'TRIPLE ORAL / INSULIN BASAL',
        title: 'Langkah 3: Kombinasi Tiga Obat Oral atau Inisiasi Insulin Basal',
        subtitle: 'Intensifikasi Kontrol Glikemik & Menyelamatkan Fungsi Sel Beta',
        timeline: 'Bulan ke 6 - 9',
        description: 'Jika kombinasi 2 obat oral gagal, tambahkan obat oral ketiga dari kelas berbeda atau inisiasi Insulin Basal malam hari.',
        branchType: 'escalation',
        drugs: [
          {
            drugName: 'Metformin + SGLT2i + DPP-4i',
            dosage: 'Kombinasi 3 obat oral dosis optimal',
            role: 'Triple Oral Regimen Bebas Hipoglikemia',
            fornasTier: 'Faskes 2/3',
            isPreferred: false
          },
          {
            drugName: 'Insulin Glargine / Degludec (Basal)',
            dosage: 'Inisiasi 10 Unit (atau 0.1 - 0.2 Unit/kgBB) subkutan 1x/hari malam jam yang sama',
            role: 'Insulin Basal Lini Pertama',
            fornasTier: 'Faskes 1',
            isPreferred: true
          }
        ],
        escalationTrigger: 'Jika dosis insulin basal mencapai > 0.5 U/kgBB/hari atau HbA1c belum tercapai meski gula puasa normal, beralih ke Basal-Bolus.',
        clinicalPearls: 'Titrasi insulin basal mandiri: Naikkan 2 Unit tiap 3 hari sampai target Glukosa Darah Puasa (80-130 mg/dL) tercapai tanpa hipoglikemia nokturnal.'
      },
      {
        stepId: 'step-t2dm-4',
        stepNumber: 4,
        stageBadge: 'INTENSIFIKASI INSULIN',
        title: 'Langkah 4: Intensifikasi Terapi Insulin Prandial & Basal-Bolus Penuh',
        subtitle: 'Mengatasi Overbasalisasi & Mengendalikan Lonjakan Glukosa Post-Prandial',
        timeline: 'Evaluasi berkala tiap 3 bulan',
        description: 'Bila dosis Insulin Basal > 0.5 U/kgBB/hari atau HbA1c belum tercapai meski GDP normal (80-130 mg/dL), intensifikasi dengan menambah Insulin Prandial (Bolus sebelum makan).',
        branchType: 'escalation',
        drugs: [
          {
            drugName: 'Insulin Basal-Plus (Basal + 1 Prandial)',
            dosage: 'Pertahankan Insulin Basal + Tambahkan Insulin Rapid (Aspart/Lispro) 4 Unit sebelum makan porsi terbesar',
            role: 'Intensifikasi Bertahap Basal-Plus',
            fornasTier: 'Faskes 2/3',
            isPreferred: true
          },
          {
            drugName: 'Insulin Basal-Bolus Penuh (MDI)',
            dosage: 'Insulin Basal 1x malam (40-50% total harian) + Insulin Prandial 3x sebelum makan (50-60% dibagi 3 makan)',
            role: 'Regimen Intensif Fisiologis Penuh (Gold Standard)',
            fornasTier: 'Faskes 2/3',
            isPreferred: false
          },
          {
            drugName: 'Insulin Premixed / Ko-formulasi',
            dosage: 'Insulin Campuran (Biphasic 70/30 atau IDegAsp) 1-2x/hari sebelum sarapan dan makan malam',
            role: 'Alternatif Suntikan Lebih Sedikit (Kepatuhan Pasien)',
            fornasTier: 'Faskes 2/3',
            isPreferred: false
          }
        ],
        escalationTrigger: 'Rujuk Sp.PD-KEMD bila terjadi variabilitas glukosa ekstrem, hipoglikemia berulang tidak disadari (hypoglycemia unawareness), atau resistensi insulin berat.',
        clinicalPearls: 'Edukasi "Rule of 15" saat hipoglikemia (< 70 mg/dL): Konsumsi 15-20 gram karbohidrat cepat serap (1 sendok makan gula / 1/2 cangkir jus buah), tunggu 15 menit, dan periksa ulang GDS.'
      }
    ],
    drugClassificationTable: [
      {
        id: 't2dm-biguanide',
        drugClass: 'Biguanid (Metformin)',
        classCategory: 'other',
        exampleDrugs: [
          { name: 'Metformin HCl', dailyDosage: '500 - 1000 mg PO 2-3x/hari (maks. 2550 mg/hari)', fornasTier: 'Faskes 1' }
        ],
        mechanismOfAction: 'Mengurangi produksi glukosa hepatik (glukoneogenesis), meningkatkan ambilan glukosa perifer di otot, dan sedikit menurunkan absorpsi glukosa usus.',
        clinicalIndications: 'Lini pertama farmakoterapi DMT2; netral terhadap berat badan, tidak menyebabkan hipoglikemia monoterapi, terbukti menurunkan angka kematian kardiovaskular jangka panjang.',
        adverseEffects: 'Gangguan cerna (mual, diare, kembung, rasa logam), defisiensi vitamin B12 pada pemakaian jangka panjang, asidosis laktat (sangat jarang namun fatal).',
        contraindications: 'eGFR < 30 mL/min, syok sepsis, gagal hati akut, gagal jantung dekompensasi, kondisi hipoksia jaringan berat.',
        monitoringKey: 'eGFR tahunan dan kadar serum Vitamin B12.'
      },
      {
        id: 't2dm-sglt2i',
        drugClass: 'Sodium-Glucose Cotransporter 2 Inhibitor (SGLT2-i)',
        classCategory: 'other',
        exampleDrugs: [
          { name: 'Empagliflozin', dailyDosage: '10 - 25 mg PO 1x/hari pagi hari', fornasTier: 'Faskes 2/3' },
          { name: 'Dapagliflozin', dailyDosage: '10 mg PO 1x/hari pagi hari', fornasTier: 'Faskes 2/3' }
        ],
        mechanismOfAction: 'Menghambat reabsorpsi glukosa dan natrium pada tubulus proksimal ginjal, memicu glukosuria terukur (ekskresi ~70 gram glukosa/hari) dan natriuresis.',
        clinicalIndications: 'Sangat diutamakan pada DMT2 dengan penyakit kardiovaskular (ASCVD), gagal jantung (HFrEF/HFpEF), atau penyakit ginjal kronik (CKD albuminuria).',
        adverseEffects: 'Infeksi saluran kemih mikotik (ISK jamur genital/kandidiasis), poliuria, deplesi volume intravaskular (hipotensi ortostatik), ketoasidosis diabetik euglikemik (jarang).',
        contraindications: 'eGFR < 20 mL/min (untuk efikasi glikemik, namun proteksi ginjal tetap dipertahankan hingga dialysis), riwayat gangren Fournier.',
        monitoringKey: 'Higienitas perineal, tanda dehidrasi cairan, dan fungsi ginjal berkala.'
      },
      {
        id: 't2dm-glp1ra',
        drugClass: 'GLP-1 Receptor Agonist (Incretin Mimetic)',
        classCategory: 'other',
        exampleDrugs: [
          { name: 'Liraglutide (Victoza)', dailyDosage: '0.6 - 1.8 mg SC 1x/hari kapan saja', fornasTier: 'Faskes 2/3' },
          { name: 'Semaglutide (Ozempic)', dailyDosage: '0.25 - 1.0 mg SC 1x/minggu', fornasTier: 'Faskes 2/3' }
        ],
        mechanismOfAction: 'Mengaktivasi reseptor GLP-1: menstimulasi sekresi insulin glukosa-dependen, menekan sekresi glukagon, memperlambat pengosongan lambung, dan menekan nafsu makan sentral di hipotalamus.',
        clinicalIndications: 'Pasien DMT2 dengan ASCVD tinggi, kebutuhan penurunan berat badan signifikan, dan target reduksi MACE kardiovaskular tinggi.',
        adverseEffects: 'Mual, muntah, diare/konstipasi pada inisiasi awal (titrasi bertahap diperlukan), risiko kolesistitis.',
        contraindications: 'Riwayat karsinoma tiroid medular (MTC) pribadi/keluarga, sindrom MEN 2, riwayat pankreatitis akut.',
        monitoringKey: 'Toleransi gastrointestinal dan titrasi bertahap setiap 4 minggu.'
      },
      {
        id: 't2dm-sulfonylurea',
        drugClass: 'Sulfonilurea Generasi Kedua',
        classCategory: 'other',
        exampleDrugs: [
          { name: 'Glimepiride', dailyDosage: '1 - 4 mg PO 1x/hari sebelum sarapan (maks. 8 mg)', fornasTier: 'Faskes 1' },
          { name: 'Gliclazide MR', dailyDosage: '30 - 120 mg PO 1x/hari pagi bersama sarapan', fornasTier: 'Faskes 1' },
          { name: 'Glibenclamide (Glibenklamid)', dailyDosage: '2.5 - 5 mg PO 1x/hari pagi bersama makan (maks. 10 - 15 mg/hari)', fornasTier: 'Faskes 1' }
        ],
        mechanismOfAction: 'Memblokade kanal K-ATP pada membran sel beta pankreas, memicu depolarisasi membran dan eksositosis sekresi insulin endogen.',
        clinicalIndications: 'Pilihan hemat biaya efektif menurunkan HbA1c dengan cepat bila terapi kombinasi diperlukan dan aksesibilitas terbatas di faskes primer/Puskesmas.',
        adverseEffects: 'Risiko tinggi HIPOGLIKEMIA berat & berkepanjangan (terutama Glibenklamid akibat metabolit aktif) serta penambahan berat badan 1.5 - 3 kg.',
        contraindications: 'Gagal ginjal eGFR < 60 mL/min (hindari Glibenklamid), lansia > 60 tahun (Kriteria Beers / PERKENI menyarankan beralih ke Glimepiride/Gliclazide), wanita hamil/menyusui, gagal hati berat.',
        monitoringKey: 'Gejala hipoglikemia, fungsi ginjal berkala, dan edukasi aturan Rule of 15.'
      },
      {
        id: 't2dm-agi',
        drugClass: 'Penghambat Alfa-Glukosidase (Alpha-Glucosidase Inhibitor / AGI)',
        classCategory: 'other',
        exampleDrugs: [
          { name: 'Acarbose (Glucobay / Erecab)', dailyDosage: 'Inisiasi 50 mg PO 1-3x/hari bersama suapan pertama makan, titrasi hingga 100 mg 3x/hari', fornasTier: 'Faskes 1' }
        ],
        mechanismOfAction: 'Menghambat enzim alfa-glukosidase di brush border mukosa usus halus secara kompetitif dan reversibel, memperlambat pemecahan polisakarida/disakarida menjadi monosakarida, sehingga secara selektif menekan lonjakan glukosa darah post-prandial (GD2PP).',
        clinicalIndications: 'Sangat cocok untuk pola makan masyarakat Indonesia tinggi karbohidrat (nasi/tepung), pasien dengan ekskursi glukosa setelah makan tinggi; netral terhadap berat badan dan bebas risiko hipoglikemia bila monoterapi.',
        adverseEffects: 'Gangguan gastrointestinal akibat fermentasi karbohidrat di kolon (flatus/sering buang angin, perut kembung, borborigmi, feses lembek/diare). Biasanya membaik bertahap setelah beberapa minggu.',
        contraindications: 'Penyakit radang usus kronik (IBD / Kolitis Ulseratif / Crohn), obstruksi usus, hernia dinding perut, sirosis hati, gangguan ginjal berat (CrCl < 25 mL/min).',
        monitoringKey: 'Waktu minum wajib bersama suapan pertama makan utama. PENTING: Jika terjadi hipoglikemia saat kombinasi dengan Sulfonilurea/Insulin, atasi hanya dengan D-Glukosa murni (dekstrosa), BUKAN sukrosa/gula pasir (karena hidrolisis sukrosa dihambat oleh Acarbose).'
      },
      {
        id: 't2dm-tzd',
        drugClass: 'Tiazolidindion (Thiazolidinedione / TZD / Glitazone)',
        classCategory: 'other',
        exampleDrugs: [
          { name: 'Pioglitazone (Actos / Deculin)', dailyDosage: '15 - 30 mg PO 1x/hari kapan saja bersama atau tanpa makan (maks. 45 mg/hari)', fornasTier: 'Faskes 2/3' }
        ],
        mechanismOfAction: 'Agonis selektif reseptor nuklear PPAR-gamma (peroxisome proliferator-activated receptor-gamma), meningkatkan transkripsi gen pengatur metabolisme glukosa dan lipid, meningkatkan sensitivitas insulin perifer di jaringan adiposa, otot rangka, dan hepar (insulin sensitizer murni).',
        clinicalIndications: 'Pasien DMT2 dengan resistensi insulin dominan, perlemakan hati non-alkoholik (NAFLD / MASLD / MASH), dan tidak memiliki riwayat gagal jantung; bebas risiko hipoglikemia bila monoterapi.',
        adverseEffects: 'Retensi cairan dan natrium (edema perifer), peningkatan berat badan (redistribusi lemak subkutan), peningkatan risiko fraktur tulang perifer terutama pada wanita pascamenopause, risiko edema makula diabetik.',
        contraindications: 'Gagal jantung kongestif (NYHA Kelas I - IV: mutlak kontraindikasi karena memicu dekompensasi), riwayat kanker kandung kemih aktif/sebelumnya, gangguan hati aktif (ALT > 2.5x batas atas normal).',
        monitoringKey: 'Tanda-tanda retensi cairan (bengkak tungkai, sesak napas), enzim hepar berkala, dan skrining fraktur tulang.'
      },
      {
        id: 't2dm-dpp4i',
        drugClass: 'Dipeptidyl Peptidase-4 Inhibitor (DPP-4i / Gliptin)',
        classCategory: 'other',
        exampleDrugs: [
          { name: 'Linagliptin', dailyDosage: '5 mg PO 1x/hari (Ekskresi biliar tanpa perlu penyesuaian dosis ginjal)', fornasTier: 'Faskes 2/3' },
          { name: 'Vildagliptin', dailyDosage: '50 mg PO 2x/hari bersama makan', fornasTier: 'Faskes 2/3' }
        ],
        mechanismOfAction: 'Menghambat enzim DPP-4 yang mendegradasi hormon inkretin (GLP-1 dan GIP), memperpanjang kerja inkretin untuk memicu sekresi insulin yang bergantung pada kadar glukosa darah.',
        clinicalIndications: 'Sangat aman untuk lansia karena risiko hipoglikemia sangat minimal; netral terhadap berat badan.',
        adverseEffects: 'Nasofaringitis, sakit kepala, nyeri sendi (artralgia jarang), pankreatitis akut (sangat jarang).',
        contraindications: 'Riwayat pankreatitis akut atau hipersensitivitas obat.',
        monitoringKey: 'Gejala nyeri perut epigastrik tembus ke punggung (skrining amilase/lipase bila curiga pankreatitis).'
      },
      {
        id: 't2dm-insulin-basal',
        drugClass: 'Insulin Basal Analog Panjang & Human Basal',
        classCategory: 'other',
        exampleDrugs: [
          { name: 'Insulin Glargine U100/U300 (Lantus / Toujeo)', dailyDosage: '10 Unit atau 0.1-0.2 U/kgBB SC 1x/hari jam yang sama malam hari', fornasTier: 'Faskes 1' },
          { name: 'Insulin Degludec (Tresiba)', dailyDosage: '10 Unit SC 1x/hari dengan fleksibilitas jam pemberian', fornasTier: 'Faskes 2/3' },
          { name: 'Insulin NPH (Human Basal Intermediate)', dailyDosage: '10 - 20 Unit SC 1-2x/hari sebelum tidur (harus diresuspensi)', fornasTier: 'Faskes 1' }
        ],
        mechanismOfAction: 'Mengikat reseptor tirosin kinase insulin, memicu translokasi transporter GLUT-4 ke membran sel otot dan adiposa, menekan glukoneogenesis hepatik sepanjang 24 jam dengan profil tanpa puncak tajam.',
        clinicalIndications: 'Pasien yang gagal mencapai target glukosa puasa (GDP) dengan terapi oral ganda/tiga, atau pasien dengan dekompensasi metabolik awal.',
        adverseEffects: 'Hipoglikemia nokturnal, penambahan berat badan, lipodistrofi pada lokasi injeksi yang tidak dirotasi.',
        contraindications: 'Episode hipoglikemia aktif.',
        monitoringKey: 'Glukosa darah puasa (GDP) harian, rotasi lokasi penyuntikan, dan kepatuhan teknik injeksi pen.'
      },
      {
        id: 't2dm-insulin-prandial',
        drugClass: 'Insulin Prandial / Bolus Kerja Cepat & Singkat (Rapid & Regular)',
        classCategory: 'other',
        exampleDrugs: [
          { name: 'Insulin Aspart (NovoRapid)', dailyDosage: 'Inisiasi 4 Unit SC 5-15 menit sebelum makan porsi terbesar', fornasTier: 'Faskes 2/3' },
          { name: 'Insulin Lispro (Humalog)', dailyDosage: 'Inisiasi 4 Unit SC segera sebelum makan', fornasTier: 'Faskes 2/3' },
          { name: 'Insulin Reguler Human (Actrapid)', dailyDosage: 'Inisiasi 4 - 6 Unit SC 30 menit sebelum makan', fornasTier: 'Faskes 1' }
        ],
        mechanismOfAction: 'Segera diserap ke sirkulasi kapiler untuk mengontrol lonjakan glukosa darah post-prandial (setelah makan) dengan onset cepat (10-20 menit) dan durasi 3-5 jam.',
        clinicalIndications: 'Intensifikasi regimen Basal-Plus atau Basal-Bolus penuh ketika HbA1c belum tercapai meski gula darah puasa (GDP) telah normal (overbasalisasi).',
        adverseEffects: 'Hipoglikemia post-prandial bila asupan karbohidrat tertunda atau terlambat, peningkatan berat badan.',
        contraindications: 'Episode hipoglikemia aktif.',
        monitoringKey: 'Glukosa darah 2 jam setelah makan (GD2PP) dan kepatuhan waktu penyuntikan terhadap jam makan.'
      },
      {
        id: 't2dm-insulin-premixed',
        drugClass: 'Insulin Premixed & Ko-Formulasi (Campuran Tetap)',
        classCategory: 'other',
        exampleDrugs: [
          { name: 'Biphasic Insulin Aspart 30/70 (NovoMix 30)', dailyDosage: '10-12 Unit SC 1-2x/hari segera sebelum makan pagi dan/atau malam', fornasTier: 'Faskes 2/3' },
          { name: 'Insulin Degludec + Aspart (Ryzodeg)', dailyDosage: '10 Unit SC 1x/hari bersama makan utama porsi terbesar', fornasTier: 'Faskes 2/3' }
        ],
        mechanismOfAction: 'Kombinasi tetap komponen insulin kerja cepat (25-30%) untuk mengontrol glukosa makan dan komponen kerja sedang/panjang (70-75%) untuk kontrol basal dalam satu wadah pen.',
        clinicalIndications: 'Alternatif pasien yang membutuhkan kontrol glukosa basal dan prandial namun enggan atau kesulitan melakukan suntikan multipel (MDI 4x/hari).',
        adverseEffects: 'Risiko hipoglikemia jika jadwal makan tidak teratur atau porsi makan berubah-ubah drastis.',
        contraindications: 'Episode hipoglikemia aktif, ketidakmampuan makan dengan jadwal teratur.',
        monitoringKey: 'Keteraturan waktu makan dan pencegahan hipoglikemia di antara jam makan.'
      }
    ],
    ebmReferences: [
      {
        id: 'ref-perkeni-2024',
        title: 'Pedoman Pengelolaan dan Pencegahan Diabetes Melitus Tipe 2 Dewasa di Indonesia 2024',
        organization: 'Perkumpulan Endokrinologi Indonesia (PERKENI)',
        year: '2024',
        scope: 'Nasional',
        summary: 'Konsensus nasional terkini yang mengadopsi integrasi proteksi kardio-renal dini dengan SGLT2-i dan GLP-1 RA.',
        evidenceLevel: 'Standar EBM Nasional Tertinggi'
      },
      {
        id: 'ref-ada-2024',
        title: 'Standards of Care in Diabetes - 2024',
        organization: 'American Diabetes Association (ADA)',
        year: '2024',
        scope: 'Internasional',
        summary: 'Pedoman global tahunan terdepan yang menekankan manajemen komprehensif kendali glikemik, berat badan, proteksi kardiovaskular, dan fungsi renal.',
        evidenceLevel: 'Kelas I, Tingkat Bukti A (Meta-Analisis RCT Global)'
      }
    ],
    calculatorQuickLink: {
      type: 'hba1c-eag',
      label: 'Buka Kalkulator Estimasi Rata-Rata Glukosa (eAG dari HbA1c)'
    }
  },
  // =======================================================================
  // 3. GAGAL JANTUNG FRAKSI EJEKSI MENURUN (HFrEF)
  // =======================================================================
  FLOWCHART_HFREF,
  // =======================================================================
  // 4. SINDROM KORONER AKUT (SKA: STEMI & NSTEMI/UAP)
  // =======================================================================
  FLOWCHART_ACS,
  // =======================================================================
  // 5. ASMA BRONKIAL DEWASA (GINA 2024 TRACK 1 & 2)
  // =======================================================================
  FLOWCHART_ASTHMA,
  // =======================================================================
  // 6. DISLIPIDEMIA & ASCVD (PERKI 2023 / ESC 2019)
  // =======================================================================
  FLOWCHART_DYSLIPIDEMIA,
  // =======================================================================
  // 7. PENYAKIT PARU OBSTRUKTIF KRONIK (PPOK / COPD - GOLD 2024 / PDPI)
  // =======================================================================
  FLOWCHART_COPD,
  // =======================================================================
  // 8. PENYAKIT GINJAL KRONIK & NEFROPATI DIABETIK (KDIGO 2024 / PERNEFRI)
  // =======================================================================
  FLOWCHART_CKD,
  // =======================================================================
  // 9. STROKE ISKEMIK AKUT & TIA (PERDOSSI / AHA-ASA 2023)
  // =======================================================================
  FLOWCHART_STROKE,
  // =======================================================================
  // 10. TUBERKULOSIS PARU DEWASA & TB-RO (PNPK KEMENKES RI / WHO 2023)
  // =======================================================================
  FLOWCHART_TB,
  // =======================================================================
  // 11. GASTROESOPHAGEAL REFLUX DISEASE (GERD) & DISPEPSIA (PGI-PEGI 2023)
  // =======================================================================
  FLOWCHART_GERD,
  // =======================================================================
  // 12. ARTRITIS GOUT AKUT & HIPERURISEMIA KRONIS (IRA 2023 / ACR)
  // =======================================================================
  FLOWCHART_GOUT
];
