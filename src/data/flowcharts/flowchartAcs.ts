import { DiseaseFlowchartData } from '../clinicalFlowchartData';

/**
 * Algoritma Interaktif Klinis: Sindrom Koroner Akut (SKA: STEMI, NSTEMI & UAP)
 * Standar Konsensus PERKI 2023 / ESC Acute Coronary Syndromes Guidelines 2023
 */
export const FLOWCHART_ACS: DiseaseFlowchartData = {
  id: 'flowchart-acs',
  diseaseName: 'Sindrom Koroner Akut (SKA: STEMI, NSTEMI & UAP)',
  shortSubtitle: 'Algoritma Penanganan Gawat Darurat, Reperfusi Cepat (PCI vs Fibrinolisis), DAPT, dan Pencegahan Sekunder EBM',
  category: 'Kardiovaskular',
  icd10: 'I21.9 (Acute Myocardial Infarction)',
  bannerGradient: 'from-rose-950 via-slate-950 to-red-950',
  accentColor: 'rose',
  classificationTitle: 'Klasifikasi Spektrum Klinis Sindrom Koroner Akut & Stratifikasi Killip',
  classificationLevels: [
    {
      id: 'class-stemi',
      label: 'STEMI (ST-ELEVATION MI)',
      criteria: 'Nyeri dada tipikal iskemik + Elevasi segmen ST persisten pada EKG 12 sandapan (>= 2 mm pada pria V2-V3, >= 1.5 mm pada wanita) atau Left Bundle Branch Block (LBBB) baru',
      badgeColor: 'bg-rose-600 text-white',
      textColor: 'text-rose-800 dark:text-rose-300',
      bgColor: 'bg-rose-50/80 dark:bg-rose-950/40',
      borderColor: 'border-rose-300 dark:border-rose-700',
      clinicalAction: 'REPERFUSI EMERGENSI SEGERA! Target Door-to-Balloon (Primary PCI) <= 90-120 menit atau Door-to-Needle (Fibrinolisis) <= 30 menit.'
    },
    {
      id: 'class-nstemi',
      label: 'NSTEMI (NON-ST ELEVATION MI)',
      criteria: 'Nyeri dada iskemik + Depresi segmen ST atau inversi gelombang T dinamis + Peningkatan biomarker nekrosis miokardial (Kadar Troponin I/T positif tinggi)',
      badgeColor: 'bg-orange-500 text-white',
      textColor: 'text-orange-800 dark:text-orange-300',
      bgColor: 'bg-orange-50/80 dark:bg-orange-950/40',
      borderColor: 'border-orange-300 dark:border-orange-700',
      clinicalAction: 'Stratifikasi Skor GRACE. Tindakan invasif angiografi koroner dini (< 24 jam pada risiko tinggi) + DAPT + Antikoagulan.'
    },
    {
      id: 'class-uap',
      label: 'UNSTABLE ANGINA PECTORIS (UAP)',
      criteria: 'Angina pektoris saat istirahat (> 20 menit) atau crescendo angina TANPA peningkatan biomarker nekrosis miokardial (Troponin negatif)',
      badgeColor: 'bg-amber-500 text-slate-900',
      textColor: 'text-amber-800 dark:text-amber-300',
      bgColor: 'bg-amber-50/80 dark:bg-amber-950/40',
      borderColor: 'border-amber-300 dark:border-amber-700',
      clinicalAction: 'Tirah baring, terapi anti-iskemik oral/SL, DAPT, antikoagulasi, dan evaluasi uji latih jantung (treadmill) atau angiografi elektif.'
    },
    {
      id: 'killip-shock',
      label: 'KILLIP KELAS IV (SYOK KARDIOGENIK)',
      criteria: 'Hipotensi berat (TD Sistolik < 90 mmHg), oliguria, akral dingin basah, takikardia, sianosis akibat kegagalan pompa ventrikel kiri',
      badgeColor: 'bg-purple-700 text-white',
      textColor: 'text-purple-800 dark:text-purple-300',
      bgColor: 'bg-purple-50/80 dark:bg-purple-950/40',
      borderColor: 'border-purple-300 dark:border-purple-700',
      clinicalAction: 'Inotropik/vasopresor IV (Norepinefrin/Dobutamin), IABP / Impella mekanik, PCI darurat segera di laboratorium kateterisasi.'
    }
  ],
  flowchartTitle: 'Algoritma Keputusan Penanganan Klinis Sindrom Koroner Akut',
  lifestyleModifications: [
    {
      title: 'Hentikan Merokok Mutlak & Segera',
      impact: 'Menurunkan Kematian Berulang 50% dalam 1 Tahun',
      details: 'Rokok memicu disfungsi endotel, vasokonstriksi koroner mendadak, dan hiperkoagulabilitas trombosit.'
    },
    {
      title: 'Diet Jantung Sehat Rendah Lemak & Kolesterol',
      impact: 'Menstabilkan Plak Aterosklerotik',
      details: 'Gantikan lemak jenuh dengan lemak tak jenuh ganda/tunggal (minyak zaitun, ikan salmon), tinggi serat larut air.'
    },
    {
      title: 'Aktivitas Fisik Bertahap Terbimbing',
      impact: 'Memperbaiki Kolateralisasi Vaskular',
      details: 'Mulai program rehabilitasi jantung fase 2 setelah fase rawat inap, jalan santai 30 menit/hari minimal 5 kali/minggu.'
    },
    {
      title: 'Pengendalian Stres & Relaksasi',
      impact: 'Menekan Lonjakan Katekolamin Simpatis',
      details: 'Teknik pernapasan dalam, istirahat cukup, dan menghindari beban kerja berlebihan pada masa pemulihan.'
    }
  ],
  comorbidProfiles: [
    {
      name: 'Pasien dengan Risiko Perdarahan Tinggi (HBR)',
      icon: '🩸',
      targetBP: 'PRECISE-DAPT Score >= 25',
      firstLineDrug: 'Klopidogrel 75 mg + Aspirin 80 mg (DAPT Dipersingkat 1-3 Bulan)',
      rationale: 'Klopidogrel memiliki risiko perdarahan mayor yang lebih rendah dibanding Tikagrelor/Prasugrel pada pasien usia lanjut atau riwayat anemia/stroke.'
    },
    {
      name: 'Pasca Pemasangan Stent Koroner (PCI-DES)',
      icon: '🫀',
      targetBP: 'DAPT Standar 12 Bulan',
      firstLineDrug: 'Tikagrelor 2x90 mg + Aspirin 80-100 mg',
      rationale: 'Tikagrelor menurunkan angka kematian kardiovaskular dan trombosis stent secara superior dibanding klopidogrel (PLATO Trial).'
    },
    {
      name: 'Pasien dengan Fibrilasi Atrium (AF + ACS)',
      icon: '⚡',
      targetBP: 'Triple Therapy Singkat -> Double Therapy',
      firstLineDrug: 'DOAC (Rivaroxaban 15 mg / Apixaban 5 mg) + Klopidogrel 75 mg',
      rationale: 'Kombinasi antikoagulan oral non-vitamin K + single antiplatelet (Klopidogrel) mencegah stroke AF sekaligus trombosis stent.'
    },
    {
      name: 'Ulkus Peptikum / Dispepsia Berat',
      icon: '🛡️',
      targetBP: 'Gastroproteksi Terpilih',
      firstLineDrug: 'Pantoprazole 40 mg 1x sehari',
      rationale: 'Pantoprazole tidak menghambat metabolisme bioaktivasi Klopidogrel di CYP2C19 (hindari Omeprazole).'
    }
  ],
  flowchartSteps: [
    {
      stepId: 'step-1-fona-initial',
      stepNumber: 1,
      stageBadge: 'PENANGANAN AWAL GAWAT DARURAT',
      title: 'Langkah 1: Penilaian Cepat & FONA (Tindakan 10 Menit Pertama)',
      subtitle: 'Diagnosis Klinis Cepat dan Tindakan Medis Segera di IGD',
      timeline: 'Menit ke 0 - 10 di IGD',
      description: 'Rekam EKG 12 sandapan dalam <= 10 menit sejak kedatangan. Berikan terapi inisiasi gawat darurat untuk meredakan iskemia miokard dan membatasi perluasan infark.',
      branchType: 'single',
      targetBP: 'Nyeri dada teratasi, SaO2 >= 90%, TD Sistolik > 100 mmHg',
      drugs: [
        {
          drugName: 'Aspirin (Asam Asetilsalisilat) Kunyah',
          dosage: '160 - 320 mg PO DIKUNYAH SEGERA (bukan ditelan utuh)',
          role: 'Antiplatelet Cepat: Menghambat tromboksan A2 dalam hitungan menit',
          fornasTier: 'Faskes 1',
          isPreferred: true
        },
        {
          drugName: 'Isosorbide Dinitrate (ISDN) Sublingual',
          dosage: '5 mg SL di bawah lidah (dapat diulang tiap 5 menit, maks 3 kali)',
          role: 'Vasodilator Koroner: Meringankan iskemia & menurunkan preload',
          fornasTier: 'Faskes 1',
          isPreferred: true
        },
        {
          drugName: 'Morphine Sulfate Injeksi IV',
          dosage: '2 - 4 mg IV pelan (diberikan HANYA jika nyeri dada hebat tidak merespon nitrat)',
          role: 'Analgetik Opioid & Ansiolitik Simpatolitik',
          fornasTier: 'Faskes 2/3',
          isPreferred: false
        }
      ],
      escalationTrigger: 'Periksa EKG: Jika terdapat STEMI, SEGERA LANJUT KE LANGKAH 2 (Aktivasi Tim Reperfusi Cepat). Jika NSTEMI/UAP, siapkan DAPT dan antikoagulan.',
      clinicalPearls: 'Pemberian Oksigen HANYA diindikasikan jika saturasi O2 < 90% atau ada tanda distres nafas. Oksigen rutin pada normoksia menyebabkan hiperoksia vasokonstriksi koroner paradoksal.'
    },
    {
      stepId: 'step-2-reperfusion',
      stepNumber: 2,
      stageBadge: 'REPERFUSI EMERGENSI (STEMI)',
      title: 'Langkah 2: Stratifikasi Strategi Reperfusi (Primary PCI vs Fibrinolisis)',
      subtitle: 'Memulihkan Aliran Darah Koroner (Time is Muscle)',
      timeline: 'Door-to-Balloon <= 90-120 mnt | Door-to-Needle <= 30 mnt',
      description: 'Pada pasien STEMI dengan onset serangan < 12 jam, reperfusi mekanik (Primary PCI) adalah pilihan baku emas nomor satu jika dapat dilakukan dalam waktu <= 120 menit.',
      branchType: 'escalation',
      targetBP: 'TIMI Flow Grade 3 pada arteri koroner penyebab, resolusi elevasi ST > 50%',
      drugs: [
        {
          drugName: 'Primary PCI (Intervensi Koroner Perkutan)',
          dosage: 'Kateterisasi emergensi + Pemasangan Drug-Eluting Stent (DES)',
          role: 'Baku Emas Pilihan Utama (Waktu tempuh ke cath lab <= 120 menit)',
          fornasTier: 'Faskes 3',
          isPreferred: true
        },
        {
          drugName: 'Streptokinase Injeksi IV',
          dosage: '1.500.000 Unit (1.5 juta IU) dalam 100 mL Dextrose 5% / NaCl 0.9% IV drip selama 60 menit',
          role: 'Fibrinolitik Alternatif jika Primary PCI tidak dapat dicapai dalam 120 menit',
          fornasTier: 'Faskes 2/3',
          isPreferred: false
        },
        {
          drugName: 'Alteplase (rt-PA) Injeksi IV',
          dosage: 'Bolus 15 mg IV, lalu drip 0.75 mg/kgBB (maks 50 mg) selama 30 mnt, lanjut 0.5 mg/kgBB (maks 35 mg) selama 60 mnt',
          role: 'Fibrinolitik Spesifik Fibrin Rekombinan',
          fornasTier: 'Faskes 3',
          isPreferred: false
        }
      ],
      escalationTrigger: 'Jika fibrinolisis gagal (elevasi segmen ST tidak turun > 50% dalam 60-90 menit), SEGERA LAKUKAN RESCUE PCI.',
      clinicalPearls: 'Kontraindikasi Mutlak Fibrinolisis: Riwayat perdarahan intrakranial (stroke hemoragik kapan pun), stroke iskemik dalam 6 bulan terakhir, malformasi arteriovenosa serebral, perdarahan internal aktif, atau diseksi aorta.'
    },
    {
      stepId: 'step-3-dapt-anticoagulation',
      stepNumber: 3,
      stageBadge: 'DAPT & ANTIKOAGULASI',
      title: 'Langkah 3: Dual Antiplatelet Therapy (DAPT) & Antikoagulan Parenteral',
      subtitle: 'Pencegahan Agregasi Trombosit Masif dan Trombosis Berulang',
      timeline: 'Segera saat diagnosis s/d Hari ke 2-8 Rawat Inap',
      description: 'Seluruh pasien SKA tanpa kontraindikasi wajib menerima kombinasi Aspirin ditambah Inhibitor P2Y12 kuat, disertai antikoagulasi parenteral selama perawatan akut.',
      branchType: 'single',
      targetBP: 'Pencegahan trombosis stent, pemantauan tidak ada perdarahan mayor',
      drugs: [
        {
          drugName: 'Ticagrelor (Dosis Muat)',
          dosage: '180 mg PO dosis tunggal saat diagnosis, dilanjutkan 2 x 90 mg PO per hari',
          role: 'Inhibitor P2Y12 Pilihan Utama (Reversibel, Onset Cepat)',
          fornasTier: 'Faskes 2/3',
          isPreferred: true
        },
        {
          drugName: 'Clopidogrel (Dosis Muat)',
          dosage: '300 mg (jika fibrinolisis usia > 75 th) atau 600 mg PO loading, lanjut 75 mg 1x/hari',
          role: 'Inhibitor P2Y12 Alternatif (jika Tikagrelor kontraindikasi atau risiko perdarahan tinggi)',
          fornasTier: 'Faskes 1',
          isPreferred: false
        },
        {
          drugName: 'Enoxaparin (LMWH)',
          dosage: '30 mg IV bolus dilanjutkan 1 mg/kgBB SC tiap 12 jam (pada lansia >= 75 th tanpa bolus)',
          role: 'Antikoagulan Parenteral Pilihan Utama selama rawat inap',
          fornasTier: 'Faskes 2/3',
          isPreferred: true
        },
        {
          drugName: 'Fondaparinux Injeksi SC',
          dosage: '2.5 mg SC sekali sehari',
          role: 'Antikoagulan Pilihan pada NSTEMI (Risiko perdarahan terendah)',
          fornasTier: 'Faskes 2/3',
          isPreferred: false
        }
      ],
      escalationTrigger: 'Lanjutkan DAPT minimal selama 12 BULAN pasca-SKA kecuali terdapat risiko perdarahan berlebih.',
      clinicalPearls: 'Tikagrelor dapat memicu efek samping dispnea (rasa sesak nafas) sentral yang biasanya bersifat sementara dan tidak berbahaya; edukasi pasien agar tidak menghentikan obat sendiri.'
    },
    {
      stepId: 'step-4-secondary-prevention',
      stepNumber: 4,
      stageBadge: 'PREVENSI SEKUNDER',
      title: 'Langkah 4: Terapi Pemeliharaan Sekunder & Proteksi Organ Jangka Panjang',
      subtitle: 'Stabilisasi Plak Ateroma dan Pencegahan Remodelling Ventrikel',
      timeline: 'Hari ke-1 Rawat Inap s/d Seumur Hidup',
      description: 'Regimen standar kepulangan pasca-SKA terdiri dari 4 serangkai: Aspirin + Tikagrelor (selama 12 bulan) + Statin Intensitas Tinggi + Beta Blocker + ACEI/ARB.',
      branchType: 'single',
      targetBP: 'Target LDL-C < 55 mg/dL (dan penurunan >= 50% dari baseline), TD < 130/80 mmHg',
      drugs: [
        {
          drugName: 'Atorvastatin / Rosuvastatin (High Intensity)',
          dosage: 'Atorvastatin 40 - 80 mg PO 1x sehari malam, atau Rosuvastatin 20 - 40 mg 1x sehari malam',
          role: 'Statin Intensitas Tinggi Wajib Sejak Hari Pertama tanpa melihat kadar awal kolesterol',
          fornasTier: 'Faskes 1/2',
          isPreferred: true
        },
        {
          drugName: 'Bisoprolol / Carvedilol',
          dosage: 'Bisoprolol 2.5 - 10 mg PO 1x sehari pagi',
          role: 'Beta Blocker: Mengurangi konsumsi O2 miokard dan mencegah aritmia fatal',
          fornasTier: 'Faskes 1',
          isPreferred: true
        },
        {
          drugName: 'Ramipril / Captopril',
          dosage: 'Ramipril 2.5 - 10 mg PO 1x sehari (atau Candesartan jika batuk ACEI)',
          role: 'Penghambat RAS: Mencegah remodelling ventrikel kiri pasca-infark',
          fornasTier: 'Faskes 1',
          isPreferred: true
        }
      ],
      escalationTrigger: 'Periksa lipid profil 4-6 minggu pasca-SKA. Jika target LDL-C < 55 mg/dL BELUM tercapai dengan statin maksimal, TAMBAHKAN EZETIMIBE 10 mg.',
      clinicalPearls: 'Statin intensitas tinggi bukan sekadar penurun kolesterol, melainkan penstabil plak koroner akut (pleiotropic effect) yang mencegah ruptur plak baru.'
    }
  ],
  drugClassificationTable: [
    {
      id: 'class-antiplatelet-acs',
      drugClass: 'Antiplatelet Oral (Inhibitor Reseptor P2Y12 & COX-1)',
      classCategory: 'other',
      exampleDrugs: [
        { name: 'Aspirin', dailyDosage: 'Loading 160-320 mg kunyah, rumatan 80-100 mg 1x/hari', fornasTier: 'Faskes 1' },
        { name: 'Ticagrelor', dailyDosage: 'Loading 180 mg, rumatan 2x90 mg/hari', fornasTier: 'Faskes 2/3' },
        { name: 'Clopidogrel', dailyDosage: 'Loading 300-600 mg, rumatan 75 mg 1x/hari', fornasTier: 'Faskes 1' }
      ],
      mechanismOfAction: 'Aspirin mengasetilasi enzim COX-1 secara ireversibel (menghambat TxA2). Tikagrelor/Klopidogrel menghambat reseptor ADP P2Y12 pada membran trombosit.',
      clinicalIndications: 'Pencegahan primer dan sekunder trombosis arteri koroner dan trombosis stent pasca-PCI.',
      adverseEffects: 'Perdarahan saluran cerna, hematoma, dispnea (khusus Tikagrelor), memar subkutan.',
      contraindications: 'Perdarahan patologis aktif (ulkus lambung aktif, perdarahan intrakranial), riwayat hemofilia.',
      monitoringKey: 'Tanda-tanda perdarahan (melena, hematuria), hitung hemoglobin dan trombosit berkala.'
    },
    {
      id: 'class-anticoagulant-acs',
      drugClass: 'Antikoagulan Parenteral (LMWH, UFH & Pentasakarida)',
      classCategory: 'other',
      exampleDrugs: [
        { name: 'Enoxaparin (LMWH)', dailyDosage: '1 mg/kgBB SC tiap 12 jam', fornasTier: 'Faskes 2/3' },
        { name: 'Fondaparinux', dailyDosage: '2.5 mg SC 1x/hari', fornasTier: 'Faskes 2/3' },
        { name: 'Unfractionated Heparin (UFH)', dailyDosage: 'Bolus 60 U/kg lanjut drip 12 U/kg/jam (target aPTT 1.5-2.0x kontrol)', fornasTier: 'Faskes 2/3' }
      ],
      mechanismOfAction: 'Meningkatkan aktivitas Antitrombin III untuk menginaktivasi Faktor Xa dan Trombin (Faktor IIa).',
      clinicalIndications: 'Mencegah pembentukan dan perluasan trombus fibrin intraluminal koroner selama fase akut SKA.',
      adverseEffects: 'Perdarahan mayor, Heparin-Induced Thrombocytopenia (HIT - lebih sering pada UFH dibanding LMWH).',
      contraindications: 'Riwayat HIT, perdarahan masif, gangguan koagulasi berat, gagal ginjal terminal (Enoxaparin butuh penyesuaian dosis jika CrCl < 30).',
      monitoringKey: 'Kadar trombosit (skrining HIT), hemoglobin, fungsi ginjal.'
    },
    {
      id: 'class-fibrinolytic',
      drugClass: 'Fibrinolitik / Trombolitik Parenteral',
      classCategory: 'other',
      exampleDrugs: [
        { name: 'Streptokinase', dailyDosage: '1.500.000 Unit IV drip selama 60 menit', fornasTier: 'Faskes 2/3' },
        { name: 'Alteplase (rt-PA)', dailyDosage: 'Protokol berat badan akselerasi maks 100 mg IV dalam 90 menit', fornasTier: 'Faskes 3' }
      ],
      mechanismOfAction: 'Mengubah plasminogen menjadi plasmin aktif yang memecah jaring-jaring fibrin pada trombus koroner (lisis bekuan darah).',
      clinicalIndications: 'Reperfusi emergensi pada STEMI onset < 12 jam jika Primary PCI tidak dapat dilakukan dalam waktu <= 120 menit.',
      adverseEffects: 'Perdarahan intrakranial (1-2%), hipotensi, reaksi alergi/anafilaksis (khusus Streptokinase).',
      contraindications: 'Riwayat stroke hemoragik, stroke iskemik < 6 bulan, diseksi aorta, trauma kepala berat < 3 bulan.',
      monitoringKey: 'Pemantauan kesadaran neurologis ketat (tanda stroke hemoragik), EKG resolusi ST 60-90 menit.'
    },
    {
      id: 'class-high-statin',
      drugClass: 'Statin Intensitas Tinggi (Pencegahan Sekunder)',
      classCategory: 'other',
      exampleDrugs: [
        { name: 'Atorvastatin', dailyDosage: '40 - 80 mg 1x/hari malam', fornasTier: 'Faskes 1/2' },
        { name: 'Rosuvastatin', dailyDosage: '20 - 40 mg 1x/hari malam', fornasTier: 'Faskes 2/3' }
      ],
      mechanismOfAction: 'Inhibitor kompetitif enzim HMG-CoA reduktase; menurunkan sintesis kolesterol hepar, meningkatkan reseptor LDL, dan menstabilkan plak ateroma.',
      clinicalIndications: 'Wajib dimulai pada seluruh pasien pasca-SKA tanpa memandang kadar kolesterol awal. Menurunkan LDL-C >= 50%.',
      adverseEffects: 'Mialgia, peningkatan enzim transaminase SGOT/SGPT, rhabdomyolisis (jarang).',
      contraindications: 'Penyakit hati aktif dekompensasi, kehamilan dan menyusui.',
      monitoringKey: 'Profil lipid 4-6 minggu pasca inisiasi, uji fungsi hati awal.'
    }
  ],
  ebmReferences: [
    {
      id: 'ref-perki-acs-2023',
      title: 'Pedoman Tata Laksana Sindrom Koroner Akut 2023',
      organization: 'Perhimpunan Dokter Spesialis Kardiovaskular Indonesia (PERKI)',
      year: '2023',
      scope: 'Nasional',
      summary: 'Konsensus nasional penanganan kegawatdaruratan SKA, strategi reperfusi PCI primer vs fibrinolisis, dan protokol DAPT terkini.',
      evidenceLevel: 'Kelas I, Level A'
    },
    {
      id: 'ref-esc-acs-2023',
      title: '2023 ESC Guidelines for the Management of Acute Coronary Syndromes',
      organization: 'European Society of Cardiology (ESC)',
      year: '2023',
      scope: 'Internasional',
      summary: 'Pedoman global penatalaksanaan komprehensif STEMI dan NSTEMI-ACS, strategi DAPT individual terarah, dan target agresif LDL-C < 55 mg/dL.',
      evidenceLevel: 'Class I, Level A'
    }
  ]
};
