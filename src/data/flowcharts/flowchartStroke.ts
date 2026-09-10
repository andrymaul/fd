import { DiseaseFlowchartData } from '../clinicalFlowchartData';

/**
 * Algoritma Interaktif Klinis: Stroke Iskemik Akut & TIA
 * Standar Konsensus Perhimpunan Dokter Spesialis Neurologi Indonesia (PERDOSSI) & AHA/ASA Guidelines 2023
 */
export const FLOWCHART_STROKE: DiseaseFlowchartData = {
  id: 'flowchart-stroke',
  diseaseName: 'Stroke Iskemik Akut & Transient Ischemic Attack (TIA)',
  shortSubtitle: 'Window Period Trombolisis r-tPA (< 4.5 Jam), Protokol DAPT 21 Hari, Statin Intensitas Tinggi, & Target Tekanan Darah',
  category: 'Neurologi & Saraf',
  icd10: 'I63 (Cerebral Infarction / Ischemic Stroke)',
  bannerGradient: 'from-amber-950 via-slate-950 to-orange-950',
  accentColor: 'amber',
  classificationTitle: 'Klasifikasi Waktu Serangan, Derajat Defisit Neurologis NIHSS, & Stratifikasi Risiko TIA (Standar PERDOSSI / AHA-ASA)',
  classificationLevels: [
    {
      id: 'stroke-hyperacute',
      label: 'FASE HIPERAKUT (< 4.5 JAM DARI ONSET)',
      criteria: 'Waktu sejak onset gejala defisit neurologis fokal (atau waktu terakhir pasien terlihat normal) < 4.5 jam',
      badgeColor: 'bg-rose-600 text-white animate-pulse',
      textColor: 'text-rose-800 dark:text-rose-300',
      bgColor: 'bg-rose-50/80 dark:bg-rose-950/40',
      borderColor: 'border-rose-300 dark:border-rose-700',
      clinicalAction: 'KODE STROKE / JALUR CEPAT! Segera CT-scan kepala non-kontras, cek gula darah, dan persiapkan Trombolisis IV r-tPA (Alteplase).'
    },
    {
      id: 'stroke-minor-tia',
      label: 'STROKE ISKEMIK MINOR / TIA RISIKO TINGGI',
      criteria: 'Stroke minor dengan skor NIHSS <= 3 ATAU TIA risiko tinggi dengan skor ABCD2 >= 4 (dalam 24 jam pertama)',
      badgeColor: 'bg-amber-500 text-slate-900',
      textColor: 'text-amber-800 dark:text-amber-300',
      bgColor: 'bg-amber-50/80 dark:bg-amber-950/40',
      borderColor: 'border-amber-300 dark:border-amber-700',
      clinicalAction: 'Mulai Dual Antiplatelet Therapy (DAPT: Aspirin + Clopidogrel) dalam 24 jam pertama dan lanjutkan selama tepat 21 hari.'
    },
    {
      id: 'stroke-mod-severe',
      label: 'STROKE ISKEMIK SEDANG - BERAT (NIHSS > 3)',
      criteria: 'Defisit neurologis fokal signifikan dengan skor NIHSS 4–25; hemiparesis berat, afasia, atau penurunan kesadaran',
      badgeColor: 'bg-orange-600 text-white',
      textColor: 'text-orange-800 dark:text-orange-300',
      bgColor: 'bg-orange-50/80 dark:bg-orange-950/40',
      borderColor: 'border-orange-300 dark:border-orange-700',
      clinicalAction: 'Evaluasi oklusi pembuluh darah besar (LVO) untuk Trombektomi Mekanik (< 24 jam). Monoterapi Antiplatelet. Statin dosis tinggi.'
    },
    {
      id: 'stroke-cardioembolic',
      label: 'STROKE KARDIOEMBOLIK (ATRIAL FIBRILASI)',
      criteria: 'Stroke iskemik dengan konfirmasi Atrial Fibrilasi pada EKG atau bukti trombus intrakardial',
      badgeColor: 'bg-purple-600 text-white',
      textColor: 'text-purple-800 dark:text-purple-300',
      bgColor: 'bg-purple-50/80 dark:bg-purple-950/40',
      borderColor: 'border-purple-300 dark:border-purple-700',
      clinicalAction: 'Inisiasi Antikoagulan Oral (DOAC: Rivaroxaban / Apixaban / Dabigatran atau Warfarin) dengan Aturan 1-3-6-12 Hari pasca-stroke.'
    }
  ],
  flowchartTitle: 'Algoritma Keputusan Terapi Stroke Iskemik Akut PERDOSSI / AHA-ASA 2023',
  lifestyleModifications: [
    {
      title: 'Skrining & Rehabilitasi Disfagia Dini (< 24 Jam)',
      impact: 'Mencegah Pneumonia Aspirasi (Penyebab Mortalitas Pasca-Stroke Terbanyak)',
      details: 'Lakukan bedside swallowing screening (GUSS / tes menelan air) sebelum memberikan obat, makanan, atau cairan oral apa pun.'
    },
    {
      title: 'Mobilisasi Fisik Bertahap & Fisioterapi Dini',
      impact: 'Mencegah Deep Vein Thrombosis (DVT) & Kontraktur Sendi',
      details: 'Mobilisasi dini di luar tempat tidur dalam 24-48 jam pertama untuk stroke ringan-sedang yang hemodinamiknya stabil.'
    },
    {
      title: 'Diet Mediterania / DASH Rendah Garam & Lemak Jenuh',
      impact: 'Menurunkan Risiko Rekurensi Stroke Sekunder hingga 30%',
      details: 'Konsumsi sayuran berdaun hijau, buah-buahan, minyak zaitun, ikan berlemak omega-3, dan batasi garam < 5 gram/hari.'
    },
    {
      title: 'Kendali Ketat Gula Darah & Suhu Tubuh (Normotermia)',
      impact: 'Mencegah Perluasan Daerah Penumbra Iskemik Menjadi Infark Permanen',
      details: 'Target GDS 140–180 mg/dL (hindari hipoglikemia); obati demam agresif bila suhu > 37.5°C dengan Parasetamol.'
    }
  ],
  comorbidProfiles: [
    {
      name: 'Stroke Iskemik dengan Hipertensi Akut Pasca Serangan',
      icon: '❤️',
      targetBP: 'TD < 180/105 (jika r-tPA) atau < 220/120 (jika tanpa r-tPA)',
      firstLineDrug: 'Nicardipine IV drip 5–15 mg/jam atau Labetalol IV',
      rationale: 'Jangan menurunkan tekanan darah terlalu agresif pada 48-72 jam pertama karena otak membutuhkan tekanan perfusi serebral (CPP) untuk menyelamatkan penumbra iskemik.'
    },
    {
      name: 'Stroke Akut dengan Riwayat Dislipidemia / Aterosklerosis',
      icon: '🧬',
      targetBP: 'Target LDL-C < 55 mg/dL & Reduksi >= 50%',
      firstLineDrug: 'Atorvastatin 80 mg (atau 40 mg) atau Rosuvastatin 20–40 mg per oral',
      rationale: 'Statin intensitas tinggi memiliki efek pleiotropik neuroprotektif, stabilisasi plak endotel serebral, dan antiinflamasi vaskular.'
    },
    {
      name: 'Stroke Iskemik dengan Atrial Fibrilasi Non-Valvular',
      icon: '🫀',
      targetBP: 'Skor CHA2DS2-VASc Tinggi (Wajib Antikoagulan)',
      firstLineDrug: 'Rivaroxaban 20 mg 1x/hari atau Apixaban 5 mg 2x/hari',
      rationale: 'Antikoagulan oral non-vitamin K (DOAC) terbukti superior dibanding antiplatelet dalam mencegah stroke emboli berulang dengan risiko perdarahan intrakranial yang jauh lebih rendah dibanding Warfarin.'
    }
  ],
  flowchartSteps: [
    {
      stepId: 'stroke-step-1',
      stepNumber: 1,
      stageBadge: 'Tahap 1: Evaluasi Triase Cepat (< 10 Menit)',
      title: 'Skrining FAST, Nilai Gula Darah, & CT-Scan Cito',
      subtitle: 'Singkirkan Stroke Hemoragik & Hipoglikemia (Stroke Mimics)',
      description: 'Lakukan pemeriksaan Face-Arms-Speech-Time (FAST). Cek GDS instan untuk menyingkirkan hipoglikemia (< 60 mg/dL). Lakukan CT Scan kepala non-kontras segera (waktu door-to-CT < 20 menit) untuk memastikan TIDAK ADA perdarahan intrakranial.',
      branchType: 'general',
      drugs: [],
      escalationTrigger: 'CT-scan kepala bersih dari perdarahan dan waktu onset masih dalam rentang < 4.5 jam.',
      clinicalPearls: 'Waktu adalah neuron (Time is Brain). Setiap penundaan 1 menit pada iskemia serebral akut menyebabkan kematian sekitar 1.9 juta sel neuron otak.'
    },
    {
      stepId: 'stroke-step-2',
      stepNumber: 2,
      stageBadge: 'Tahap 2: Reperfusi Hiperakut (< 4.5 Jam)',
      title: 'Trombolisis Intravena dengan Alteplase (r-tPA)',
      subtitle: 'Dosis 0.9 mg/kgBB (Maksimal 90 mg): 10% Bolus 1 Menit, 90% Infus 60 Menit',
      description: 'Bila tidak ada kontraindikasi (TD < 185/110 mmHg, INR <= 1.7, trombosit >= 100.000, tidak ada operasi besar dalam 14 hari), segera berikan Alteplase IV. Jika ada oklusi pembuluh besar (LVO), siapkan segera rujukan Trombektomi Mekanik.',
      branchType: 'single',
      drugs: [
        {
          drugName: 'Alteplase IV (Actilyse r-tPA)',
          dosage: '0.9 mg/kg (10% bolus IV 1 menit, 90% drip 60 menit; maks 90 mg)',
          role: 'Trombolitik Reperfusi Baku Emas (< 4.5 jam)',
          fornasTier: 'Faskes 3 (ICU/Stroke Unit)',
          isPreferred: true
        },
        {
          drugName: 'Nicardipine HCl IV Drip (Perdipine)',
          dosage: '5 mg/jam dititrasi tiap 5–15 menit hingga TD < 180/105 mmHg',
          role: 'Antihipertensi IV Titrasi Cepat Pra & Pasca Trombolisis',
          fornasTier: 'Faskes 2/3',
          isPreferred: true
        }
      ],
      escalationTrigger: 'Trombolisis selesai atau pasien datang di luar window period trombolisis (> 4.5 jam).',
      clinicalPearls: 'HINDARI pemberian obat antiplatelet atau antikoagulan apa pun selama 24 jam pertama pasca pemberian Alteplase r-tPA untuk mencegah transformasi hemoragik fatal.'
    },
    {
      stepId: 'stroke-step-3',
      stepNumber: 3,
      stageBadge: 'Tahap 3: Pencegahan Sekunder Antiplatelet',
      title: 'Protokol DAPT 21 Hari untuk Stroke Minor / TIA Risiko Tinggi',
      subtitle: 'Aspirin Loading 160–325 mg + Clopidogrel Loading 300 mg, Lanjut DAPT 21 Hari',
      description: 'Pada pasien stroke minor (NIHSS <= 3) atau TIA (ABCD2 >= 4) yang tidak menerima trombolisis, berikan DAPT (Aspirin 81–100 mg + Clopidogrel 75 mg) selama 21 HARI (Trial POINT & CHANCE), kemudian turunkan ke monoterapi antiplatelet seumur hidup.',
      branchType: 'escalation',
      drugs: [
        {
          drugName: 'Aspirin (Aspilets / Thrombo Aspilet)',
          dosage: 'Loading 160–325 mg di hari ke-1, lanjut 81–100 mg 1x/hari',
          role: 'Antiplatelet Lini Pertama (DAPT Hari 1–21 atau Monoterapi)',
          fornasTier: 'Faskes 1/2/3',
          isPreferred: true
        },
        {
          drugName: 'Clopidogrel (Plavix)',
          dosage: 'Loading 300 mg di hari ke-1, lanjut 75 mg 1x/hari selama 21 hari',
          role: 'Antiplatelet Penghambat P2Y12 (DAPT Hari 1–21)',
          fornasTier: 'Faskes 2/3',
          isPreferred: true
        },
        {
          drugName: 'Atorvastatin',
          dosage: '40 - 80 mg per oral sekali sehari malam hari',
          role: 'Statin Intensitas Tinggi Stabilisasi Plak Vaskular Otak',
          fornasTier: 'Faskes 1/2/3',
          isPreferred: true
        }
      ],
      escalationTrigger: 'Pasien telah melewati hari ke-21 DAPT atau terkonfirmasi memiliki etiologi kardioembolik (AF).',
      clinicalPearls: 'DAPT TIDAK BOLEH dilanjutkan lebih dari 21–30 hari pada stroke iskemik karena setelah 1 bulan, manfaat pencegahan stroke rekuren sebanding dengan peningkatan risiko perdarahan intrakranial masif.'
    },
    {
      stepId: 'stroke-step-4',
      stepNumber: 4,
      stageBadge: 'Tahap 4: Antikoagulasi Stroke Kardioembolik',
      title: 'Aturan 1–3–6–12 Hari Inisiasi Antikoagulan pada AF',
      subtitle: 'Inisiasi DOAC Berdasarkan Luas Infark untuk Mencegah Transformasi Perdarahan',
      description: 'Untuk pasien AF pasca stroke iskemik: TIA = hari ke-1; Infark kecil (NIHSS < 8) = hari ke-3; Infark sedang (NIHSS 8–15) = hari ke-6; Infark luas (NIHSS >= 16) = hari ke-12 pasca CT-scan ulang menyingkirkan perdarahan.',
      branchType: 'comorbid',
      drugs: [
        {
          drugName: 'Rivaroxaban (Xarelto)',
          dosage: '20 mg per oral sekali sehari bersama makanan (15 mg bila eGFR 30–49)',
          role: 'DOAC Inhibitor Faktor Xa Lini Pertama AF',
          fornasTier: 'Faskes 2/3',
          isPreferred: true
        },
        {
          drugName: 'Apixaban (Eliquis)',
          dosage: '5 mg per oral dua kali sehari (2.5 mg 2x/hari bila ada >= 2 kriteria)',
          role: 'Alternatif DOAC Profil Keamanan Gastrointestinal Superior',
          fornasTier: 'Faskes 2/3',
          isPreferred: true
        },
        {
          drugName: 'Warfarin',
          dosage: '2 - 5 mg 1x/hari malam hari (titrasi ketat target INR 2.0–3.0)',
          role: 'Antikoagulan Oral Pilihan Utama AF Valvular / Katup Mekanik',
          fornasTier: 'Faskes 1/2/3',
          isPreferred: false
        }
      ],
      escalationTrigger: 'Pemantauan jangka panjang tanda stroke berulang, kontrol faktor risiko hipertensi, diabetes, dan dislipidemia.',
      clinicalPearls: 'Jangan mengombinasikan Antikoagulan (DOAC/Warfarin) bersama Antiplatelet (Aspirin/Clopidogrel) pada pasien pasca-stroke dengan AF, KECUALI ada indikasi PCI/stent koroner akut baru.'
    }
  ],
  drugClassificationTable: [
    {
      id: 'stroke-thrombolytic',
      drugClass: 'Trombolitik Intravena (Recombinant Tissue Plasminogen Activator)',
      classCategory: 'other',
      exampleDrugs: [
        { name: 'Alteplase (Actilyse)', dailyDosage: '0.9 mg/kg (maks 90 mg; 10% bolus 1 mnt, 90% infus 60 mnt)', fornasTier: 'Faskes 3' },
        { name: 'Tenecteplase', dailyDosage: '0.25 mg/kg IV bolus tunggal (maks 25 mg)', fornasTier: 'Faskes 3' }
      ],
      mechanismOfAction: 'Mengikat fibrin pada trombus intraluminal dan mengonversi plasminogen menjadi plasmin aktif, mendegradasi jaring-jaring fibrin bekuan darah serebral.',
      clinicalIndications: 'Stroke iskemik akut terkonfirmasi dalam window period < 4.5 jam dari onset gejala tanpa kontraindikasi perdarahan.',
      adverseEffects: 'Transformasi hemoragik intrakranial (6%), angioedema orofaringeal lidah/bibir (1-5%), perdarahan sistemik.',
      contraindications: 'Perdarahan intrakranial pada CT scan, TD > 185/110 mmHg refrakter, riwayat stroke/trauma kepala berat < 3 bulan, trombosit < 100.000, penggunaan DOAC < 48 jam.',
      monitoringKey: 'Tekanan darah dan status neurologis (NIHSS) tiap 15 menit selama infus dan 2 jam pertama; waspadai sakit kepala hebat mendadak.'
    },
    {
      id: 'stroke-antiplatelet',
      drugClass: 'Antiplatelet (Inhibitor Siklooksigenase & Reseptor P2Y12)',
      classCategory: 'other',
      exampleDrugs: [
        { name: 'Aspirin (Asam Asetilsalisilat)', dailyDosage: 'Loading 160–325 mg, lanjut 81–100 mg 1x/hari', fornasTier: 'Faskes 1/2/3' },
        { name: 'Clopidogrel', dailyDosage: 'Loading 300 mg, lanjut 75 mg 1x/hari', fornasTier: 'Faskes 2/3' },
        { name: 'Ticagrelor', dailyDosage: 'Loading 180 mg, lanjut 90 mg 2x/hari', fornasTier: 'Faskes 3' }
      ],
      mechanismOfAction: 'Aspirin menghambat sintesis Tromboksan A2 (TXA2) via inhibisi ireversibel COX-1; Clopidogrel memblokade reseptor ADP P2Y12 trombosit.',
      clinicalIndications: 'Pencegahan sekunder stroke iskemik non-kardioembolik; kombinasi DAPT selama 21 hari untuk stroke minor atau TIA risiko tinggi.',
      adverseEffects: 'Perdarahan saluran cerna, ulkus peptikum, purpura, dispepsia, resistensi clopidogrel pada slow metabolizer CYP2C19.',
      contraindications: 'Perdarahan aktif saluran cerna, ulkus peptikum aktif hemoragik, hemofilia.',
      monitoringKey: 'Tanda perdarahan mikro/makro (feses hitam melena, memar spontan); berikan bersama makanan.'
    },
    {
      id: 'stroke-statins',
      drugClass: 'Statin Intensitas Tinggi (HMG-CoA Reductase Inhibitor)',
      classCategory: 'other',
      exampleDrugs: [
        { name: 'Atorvastatin', dailyDosage: '40 - 80 mg 1x/hari malam hari', fornasTier: 'Faskes 1/2/3' },
        { name: 'Rosuvastatin', dailyDosage: '20 - 40 mg 1x/hari malam hari', fornasTier: 'Faskes 2/3' }
      ],
      mechanismOfAction: 'Inhibisi sintesis kolesterol hepar, reduksi ekspresi molekul adhesi endotel, perbaikan fungsi vasomotor nitrat oksida serebral, dan stabilisasi plak karotis.',
      clinicalIndications: 'Semua pasien stroke iskemik aterotrombotik tanpa memandang kadar awal kolesterol LDL (Trial SPARCL); target reduksi LDL >= 50% atau < 55 mg/dL.',
      adverseEffects: 'Mialgia, peningkatan enzim transaminase hepar (SGOT/SGPT), peningkatan risiko diabetes baru (minimal dibanding manfaat vaskular).',
      contraindications: 'Penyakit hati aktif dekompensata (SGOT/SGPT > 3x batas atas normal persisten); kehamilan.',
      monitoringKey: 'Profil lipid puasa pasca 4–12 minggu terapi; evaluasi keluhan pegal otot hebat.'
    },
    {
      id: 'stroke-doac',
      drugClass: 'Direct Oral Anticoagulant (DOAC / NOAC)',
      classCategory: 'other',
      exampleDrugs: [
        { name: 'Rivaroxaban', dailyDosage: '20 mg 1x/hari (15 mg jika eGFR 30–49)', fornasTier: 'Faskes 2/3' },
        { name: 'Apixaban', dailyDosage: '5 mg 2x/hari (2.5 mg 2x/hari jika ada kriteria reduksi)', fornasTier: 'Faskes 2/3' },
        { name: 'Dabigatran Etexilate', dailyDosage: '150 mg 2x/hari (110 mg 2x/hari pada lansia >= 80 thn)', fornasTier: 'Faskes 2/3' }
      ],
      mechanismOfAction: 'Inhibisi langsung faktor Xa (Rivaroxaban/Apixaban) atau trombin IIa bebas dan terikat bekuan (Dabigatran) tanpa memerlukan kofaktor antitrombin.',
      clinicalIndications: 'Pencegahan sekunder stroke iskemik pada pasien dengan Atrial Fibrilasi non-valvular; menurunkan risiko perdarahan intrakranial sebesar 50% dibanding Warfarin.',
      adverseEffects: 'Perdarahan mukosa, hematuria, anemia, dispepsia (khusus kapsul dabigatran).',
      contraindications: 'Perdarahan aktif mayor; gagal ginjal berat eGFR < 15 mL/min; katup jantung prostetik mekanik.',
      monitoringKey: 'Fungsi ginjal (eGFR) berkala tiap 3-6 bulan; kepatuhan minum obat karena waktu paruh pendek (12 jam).'
    }
  ],
  ebmReferences: [
    {
      id: 'ref-aha-asa-2023',
      title: 'Guidelines for the Early Management of Patients With Acute Ischemic Stroke: 2023 Update',
      organization: 'American Heart Association / American Stroke Association (AHA/ASA)',
      year: '2023',
      scope: 'Internasional',
      summary: 'Menegaskan kembali jendela waktu trombolisis 4.5 jam, protokol DAPT Aspirin + Clopidogrel 21 hari untuk stroke minor (Trial POINT & CHANCE), dan perluasan kriteria trombektomi mekanik hingga 24 jam.',
      evidenceLevel: 'Class I, Level A'
    },
    {
      id: 'ref-perdossi-stroke',
      title: 'Panduan Praktik Klinis Neurologi: Tata Laksana Stroke Iskemik di Indonesia',
      organization: 'Perhimpunan Dokter Spesialis Neurologi Indonesia (PERDOSSI)',
      year: '2023',
      scope: 'Nasional',
      summary: 'Konsensus nasional penanganan stroke hiperakut di Unit Stroke RS Indonesia, pemanfaatan r-tPA, protokol DAPT, serta manajemen komplikasi pasca-stroke komprehensif.',
      evidenceLevel: 'Konsensus Nasional Terakreditasi Kemenkes RI'
    }
  ]
};
