// =====================================================================
// DATABASE MANAJEMEN RISIKO TINGGI: LASA/NORUM, HIGH-ALERT, OOT & PREKURSOR
// Standar: STARKES SKP 3 Kemenkes RI, KARS, ISMP (Institute for Safe Medication Practices),
// PerBPOM No. 12 Tahun 2025 (Regulasi Baru OOT), PP No. 44 Tahun 2010 (Prekursor Farmasi)
// =====================================================================

export type LasaSimilarityType = 'sound_alike' | 'look_alike' | 'both';

export interface LasaDrugEntity {
  name: string;
  tallManName: string;
  indication: string;
  dosageForm: string;
}

export interface LasaPair {
  id: string;
  drugA: LasaDrugEntity;
  drugB: LasaDrugEntity;
  similarityType: LasaSimilarityType;
  clinicalRisk: string;
  preventionMeasures: string[];
  recommendedLabel: 'LASA Kuning' | 'LASA Merah' | 'LASA Biru';
}

export type HighAlertCategory =
  | 'concentrated_electrolyte'
  | 'cytotoxic'
  | 'vasopressor_inotropic'
  | 'anticoagulant'
  | 'insulin'
  | 'nmba'
  | 'opioid'
  | 'sedative_anesthetic'
  | 'other_high_alert';

export interface HighAlertDrug {
  id: string;
  name: string;
  tallManName?: string;
  brandExamples: string[];
  category: HighAlertCategory;
  categoryLabel: string;
  riskLevel: 'Kritis' | 'Tinggi';
  highAlertReason: string;
  storageRules: string[];
  administrationAlerts: string[];
  antidoteOrRescue?: string;
  labelColor: 'Merah High Alert' | 'Merah Elektrolit Pekat' | 'Ungu Sitotoksik' | 'Merah NMBA Paralisis';
}

export type OotPrecursorType = 'oot' | 'precursor';

export interface OotPrecursorDrug {
  id: string;
  name: string;
  type: OotPrecursorType;
  typeLabel: string;
  activeSubstance: string;
  commonBrands: string[];
  legalBasis: string;
  abusePotential: string;
  dispensingRules: string[];
  storageAndReporting: string;
  labelColor: 'Biru OOT' | 'Oranye Prekursor';
}

import {
  EXTENDED_LASA_PAIRS,
  EXTENDED_HIGH_ALERT_DRUGS,
  EXTENDED_OOT_PRECURSOR_DRUGS
} from './highAlertExtendedData';

// =====================================================================
// 1. DAFTAR PASANGAN LASA / NORUM (TALL-MAN LETTERS RESMI BPOM / ISMP)
// =====================================================================

const BASE_LASA_PAIRS: LasaPair[] = [
  {
    id: 'lasa-efedrin-epinefrin',
    drugA: {
      name: 'Efedrin',
      tallManName: 'efeDRIN HCl',
      indication: 'Hipotensi saat anestesi spinal, bronkospasme',
      dosageForm: 'Ampul Injeksi 50 mg/mL'
    },
    drugB: {
      name: 'Epinefrin',
      tallManName: 'epiNEFRIN (Adrenalin)',
      indication: 'Syok anafilaksis, henti jantung (Cardiac Arrest)',
      dosageForm: 'Ampul Injeksi 1 mg/mL (1:1000)'
    },
    similarityType: 'both',
    clinicalRisk: 'Kesalahan dosis fatal: Tertukarnya epinefrin dengan efedrin dapat memicu krisis hipertensi, perdarahan intrakranial, takiaritmia ventrikel mematikan, atau kegagalan resusitasi henti jantung.',
    preventionMeasures: [
      'Gunakan penulisan Tall-Man: efeDRIN vs epiNEFRIN.',
      'Simpan pada laci/rak terpisah, jangan pernah diletakkan bersebelahan.',
      'Wajib verifikasi ganda independen (independent double-check) sebelum penyuntikan.'
    ],
    recommendedLabel: 'LASA Merah'
  },
  {
    id: 'lasa-dimenhidrinat-difenhidramin',
    drugA: {
      name: 'Dimenhidrinat',
      tallManName: 'dimenhiDRINAT',
      indication: 'Mabuk perjalanan (motion sickness), vertigo',
      dosageForm: 'Tablet 50 mg / Ampul 50 mg/mL'
    },
    drugB: {
      name: 'Difenhidramin',
      tallManName: 'difenhiDRAMIN HCl',
      indication: 'Reaksi alergi akut, anafilaksis, insomnia, premedikasi',
      dosageForm: 'Ampul 10 mg/mL / Kapsul'
    },
    similarityType: 'sound_alike',
    clinicalRisk: 'Pasien syok anafilaksis terlambat tertangani bila keliru diberikan dimenhidrinat.',
    preventionMeasures: [
      'Tuliskan dengan huruf Tall-Man: dimenhiDRINAT vs difenhiDRAMIN.',
      'Beri stiker LASA Kuning pada kemasan box dan rak penyimpanan.'
    ],
    recommendedLabel: 'LASA Kuning'
  },
  {
    id: 'lasa-hidralazin-hidroksizin',
    drugA: {
      name: 'Hidralazin',
      tallManName: 'hidralAZIN',
      indication: 'Hipertensi berat / eklamsia kehamilan',
      dosageForm: 'Tablet 25 mg / Injeksi 20 mg/mL'
    },
    drugB: {
      name: 'Hidroksizin',
      tallManName: 'hidroksIZIN',
      indication: 'Antihistamin sedatif, ansietas, pruritus',
      dosageForm: 'Tablet 25 mg / Sirup'
    },
    similarityType: 'sound_alike',
    clinicalRisk: 'Pemberian hidroksizin pada krisis hipertensi menyebabkan stroke atau kegagalan organ, sedangkan pemberian hidralazin pada pasien gatal menyebabkan hipotensi mendadak.',
    preventionMeasures: [
      'Tuliskan huruf Tall-Man: hidralAZIN vs hidroksIZIN.',
      'Simpan pada kotak obat berbeda dan periksa indikasi resep.'
    ],
    recommendedLabel: 'LASA Kuning'
  },
  {
    id: 'lasa-asam-mefenamat-traneksamat',
    drugA: {
      name: 'Asam Mefenamat',
      tallManName: 'asam mefeNAMAT',
      indication: 'Antiinflamasi non-steroid (NSAID), pereda nyeri',
      dosageForm: 'Kapsul / Kaplet 500 mg'
    },
    drugB: {
      name: 'Asam Traneksamat',
      tallManName: 'asam tranekSAMAT',
      indication: 'Antifibrinolitik, penghenti perdarahan masif',
      dosageForm: 'Tablet 500 mg / Ampul Injeksi'
    },
    similarityType: 'both',
    clinicalRisk: 'Pasien perdarahan pasca-bedah keliru menerima asam mefenamat (yang justru menghambat trombosit dan memperparah perdarahan), atau pasien nyeri sendi keliru menerima traneksamat (risiko trombosis).',
    preventionMeasures: [
      'Wajib Tall-Man: asam mefeNAMAT vs asam tranekSAMAT.',
      'Simpan di lemari kategori hemostatik terpisah dari kategori analgetik.'
    ],
    recommendedLabel: 'LASA Kuning'
  },
  {
    id: 'lasa-klorpromazin-klordiazepoksid',
    drugA: {
      name: 'Klorpromazin',
      tallManName: 'klorpromAZIN (CPZ)',
      indication: 'Antipsikotik, cegukan refrakter (hiccups)',
      dosageForm: 'Tablet 25 mg, 100 mg / Ampul'
    },
    drugB: {
      name: 'Klordiazepoksid',
      tallManName: 'klordiAzepoksid',
      indication: 'Benzodiazepin, ansietas akut, putus alkohol',
      dosageForm: 'Tablet 5 mg, 10 mg'
    },
    similarityType: 'sound_alike',
    clinicalRisk: 'Gejala ekstrapiramidal (EPS) berat atau sedasi berlebih akibat tertukarnya antipsikotik tipikal dengan sedatif benzodiazepin.',
    preventionMeasures: [
      'Tuliskan Tall-Man: klorpromAZIN vs klordiAzepoksid.',
      'Klorpromazin disimpan di lemari OOT, sedangkan klordiazepoksid di lemari Psikotropika.'
    ],
    recommendedLabel: 'LASA Biru'
  },
  {
    id: 'lasa-aminofilin-amitriptilin',
    drugA: {
      name: 'Aminofilin',
      tallManName: 'amiNOFILIN',
      indication: 'Bronkodilator xantin untuk asma akut berat',
      dosageForm: 'Ampul Injeksi 24 mg/mL'
    },
    drugB: {
      name: 'Amitriptilin',
      tallManName: 'amiTRIPTILIN',
      indication: 'Antidepresan trisiklik (TCA), nyeri neuropatik',
      dosageForm: 'Tablet 25 mg'
    },
    similarityType: 'sound_alike',
    clinicalRisk: 'Keracunan TCA fatal atau kegagalan terapi status asmatikus.',
    preventionMeasures: [
      'Gunakan huruf Tall-Man: amiNOFILIN vs amiTRIPTILIN.',
      'Sediaan ampul aminofilin disimpan di troli/rak injeksi; amitriptilin di lemari OOT.'
    ],
    recommendedLabel: 'LASA Kuning'
  },
  {
    id: 'lasa-vinkristin-vinblastin',
    drugA: {
      name: 'Vinkristin',
      tallManName: 'vinKRISTIN',
      indication: 'Kemoterapi leukemia limfoblastik akut (ALL), limfoma',
      dosageForm: 'Vial Injeksi 1 mg, 2 mg'
    },
    drugB: {
      name: 'Vinblastin',
      tallManName: 'vinBLASTIN',
      indication: 'Kemoterapi penyakit Hodgkin, tumor testis',
      dosageForm: 'Vial Injeksi 10 mg'
    },
    similarityType: 'both',
    clinicalRisk: 'Dosis vinblastin (10 mg) jika tidak sengaja diberikan sebagai vinkristin (dosis maksimal vinkristin 2 mg) akan berakibat FATAL karena neurotoksisitas sentral dan kematian.',
    preventionMeasures: [
      'Gunakan Tall-Man tegas: vinKRISTIN vs vinBLASTIN.',
      'Beri stiker Sitotoksik Ungu dan HIGH ALERT Merah.',
      'Wajib double-check 2 apoteker onkologi sebelum rekonstitusi.'
    ],
    recommendedLabel: 'LASA Merah'
  },
  {
    id: 'lasa-metformin-metronidazol',
    drugA: {
      name: 'Metformin',
      tallManName: 'metFORMIN',
      indication: 'Antidiabetes oral lini 1 (Biguanida)',
      dosageForm: 'Tablet 500 mg, 850 mg'
    },
    drugB: {
      name: 'Metronidazol',
      tallManName: 'metroNIDAZOL',
      indication: 'Antibakteri anaerob & antiprotozoa (Amoeba/Giardia)',
      dosageForm: 'Tablet 500 mg / Infus 500 mg'
    },
    similarityType: 'sound_alike',
    clinicalRisk: 'Pasien diabetes mengalami hiperglikemia tak terkontrol, atau pasien infeksi mengalami asidosis laktat akibat konsumsi metformin tanpa indikasi.',
    preventionMeasures: [
      'Gunakan Tall-Man: metFORMIN vs metroNIDAZOL.',
      'Beri stiker LASA Kuning pada rak obat jalan.'
    ],
    recommendedLabel: 'LASA Kuning'
  },
  {
    id: 'lasa-karbamazepin-okskarbazepin',
    drugA: {
      name: 'Karbamazepin',
      tallManName: 'karbaMAZEPIN',
      indication: 'Antiepilepsi, neuralgia trigeminal, bipolar',
      dosageForm: 'Tablet 200 mg'
    },
    drugB: {
      name: 'Okskarbazepin',
      tallManName: 'okskarbaZEPIN',
      indication: 'Antiepilepsi bangkitan fokal',
      dosageForm: 'Tablet 300 mg, 600 mg'
    },
    similarityType: 'both',
    clinicalRisk: 'Dosis konversi yang salah memicu kejang berulang atau intoksikasi obat.',
    preventionMeasures: [
      'Gunakan Tall-Man: karbaMAZEPIN vs okskarbaZEPIN.',
      'Pisahkan letak penyimpanan pada rak obat saraf.'
    ],
    recommendedLabel: 'LASA Kuning'
  },
  {
    id: 'lasa-cefo-ceftri-cefta',
    drugA: {
      name: 'Cefotaxime',
      tallManName: 'cefoTAXIME',
      indication: 'Sefalosporin generasi 3 parenteral spektrum luas',
      dosageForm: 'Vial Serbuk Injeksi 1 g'
    },
    drugB: {
      name: 'Ceftriaxone',
      tallManName: 'cefTRIAXONE',
      indication: 'Sefalosporin generasi 3 t½ panjang (dosis 1x/hari)',
      dosageForm: 'Vial Serbuk Injeksi 1 g'
    },
    similarityType: 'both',
    clinicalRisk: 'Bentuk vial 1 g kemasan pabrik seringkali identik (look-alike packaging); salah pemberian memicu frekuensi dosis yang tidak tepat (Cefotaxime tiap 8 jam vs Ceftriaxone tiap 24 jam).',
    preventionMeasures: [
      'Gunakan Tall-Man: cefoTAXIME vs cefTRIAXONE vs cefTAZIDIME.',
      'Pisahkan wadah box vial dan tempelkan stiker LASA Kuning.'
    ],
    recommendedLabel: 'LASA Kuning'
  },
  {
    id: 'lasa-dopamin-dobutamin',
    drugA: {
      name: 'Dopamin',
      tallManName: 'dopAMIN HCl',
      indication: 'Inotropik / vasopresor syok kardiogenik & septik',
      dosageForm: 'Ampul Injeksi 200 mg/5 mL'
    },
    drugB: {
      name: 'Dobutamin',
      tallManName: 'dobutAMIN HCl',
      indication: 'Inotropik positif gagal jantung akut & syok kardiogenik',
      dosageForm: 'Ampul Injeksi 250 mg/5 mL'
    },
    similarityType: 'both',
    clinicalRisk: 'Perbedaan profil hemodinamik: Dopamin dosis tinggi memicu vasokonstriksi perifer kuat, sedangkan Dobutamin memicu vasodilatasi perifer ringan. Tertukarnya obat membahayakan stabilitas tensi pasien ICU.',
    preventionMeasures: [
      'Gunakan Tall-Man: dopAMIN vs dobutAMIN.',
      'Keduanya berlabel HIGH ALERT Merah; pisahkan rak di depo ICU.'
    ],
    recommendedLabel: 'LASA Merah'
  },
  {
    id: 'lasa-fentanil-sulfentanil',
    drugA: {
      name: 'Fentanil',
      tallManName: 'fentaNYL',
      indication: 'Analgesik opioid poten anestesi & nyeri kanker hebat',
      dosageForm: 'Ampul 0.05 mg/mL (2 mL / 10 mL)'
    },
    drugB: {
      name: 'Sufentanil',
      tallManName: 'sulfeNTANIL',
      indication: 'Opioid ultra-poten anestesi (5-10x lebih kuat dari fentanil)',
      dosageForm: 'Ampul 5 mcg/mL'
    },
    similarityType: 'both',
    clinicalRisk: 'Overdosis fatal berujung apneu henti napas mendadak bila dosis fentanil keliru diisi dengan sufentanil.',
    preventionMeasures: [
      'Gunakan Tall-Man: fentaNYL vs sulfeNTANIL.',
      'Simpan di lemari Narkotika berkunci ganda; verifikasi konsentrasi presisi.'
    ],
    recommendedLabel: 'LASA Merah'
  },
  {
    id: 'lasa-prednison-prednisolon',
    drugA: {
      name: 'Prednison',
      tallManName: 'predniSON',
      indication: 'Kortikosteroid imunosupresan oral (prodrug aktif di hati)',
      dosageForm: 'Tablet 5 mg'
    },
    drugB: {
      name: 'Prednisolon',
      tallManName: 'prednisoLON',
      indication: 'Kortikosteroid metabolit aktif (aman untuk gangguan hepar)',
      dosageForm: 'Tablet 5 mg / Sirup'
    },
    similarityType: 'sound_alike',
    clinicalRisk: 'Kurang efektif bila pasien sirosis hepatis berat keliru mendapatkan prednison (yang memerlukan bioaktivasi hepar).',
    preventionMeasures: [
      'Gunakan Tall-Man: predniSON vs prednisoLON.',
      'Beri stiker LASA Kuning pada botol kemasan.'
    ],
    recommendedLabel: 'LASA Kuning'
  },
  {
    id: 'lasa-azatioprin-azitromisin',
    drugA: {
      name: 'Azatioprin',
      tallManName: 'azaTIOPRIN',
      indication: 'Imunosupresan sitotoksik transplantasi organ & autoimun',
      dosageForm: 'Tablet 50 mg'
    },
    drugB: {
      name: 'Azitromisin',
      tallManName: 'azitroMISIN',
      indication: 'Antibiotik makrolida infeksi saluran napas',
      dosageForm: 'Tablet 500 mg'
    },
    similarityType: 'sound_alike',
    clinicalRisk: 'Supresi sumsum tulang belakang (pansitopenia) fatal bila pasien infeksi paru keliru menerima azatioprin jangka panjang.',
    preventionMeasures: [
      'Gunakan Tall-Man: azaTIOPRIN vs azitroMISIN.',
      'Azatioprin berstiker Sitotoksik & disimpan terpisah.'
    ],
    recommendedLabel: 'LASA Merah'
  },
  {
    id: 'lasa-diazepam-lorazepam-clonazepam',
    drugA: {
      name: 'Diazepam',
      tallManName: 'diaZEPAM',
      indication: 'Antikonvulsi status epileptikus, sedasi',
      dosageForm: 'Tablet 2 mg, 5 mg / Ampul 10 mg/2 mL'
    },
    drugB: {
      name: 'Lorazepam',
      tallManName: 'loraZEPAM',
      indication: 'Ansietas berat, premedikasi anestesi, amnesia',
      dosageForm: 'Tablet 0.5 mg, 1 mg, 2 mg'
    },
    similarityType: 'both',
    clinicalRisk: 'Kesalahan ekuivalensi dosis: 1 mg lorazepam setara dengan 10 mg diazepam. Salah dosis memicu koma atau depresi pernapasan.',
    preventionMeasures: [
      'Gunakan Tall-Man: diaZEPAM vs loraZEPAM vs clonaZEPAM.',
      'Simpan di lemari Psikotropika berkunci ganda.'
    ],
    recommendedLabel: 'LASA Biru'
  },
  {
    id: 'lasa-glipizid-glibenklamid-glimepirid',
    drugA: {
      name: 'Glimepirid',
      tallManName: 'glimePIRID',
      indication: 'Sulfonilurea oral sekali sehari (1, 2, 3, 4 mg)',
      dosageForm: 'Tablet 1 mg, 2 mg, 3 mg, 4 mg'
    },
    drugB: {
      name: 'Glibenklamid',
      tallManName: 'glibenKLAMID',
      indication: 'Sulfonilurea potensi tinggi kerja panjang (risiko hipoglikemia lansia)',
      dosageForm: 'Tablet 5 mg'
    },
    similarityType: 'both',
    clinicalRisk: 'Hipoglikemia berat berkepanjangan pada pasien geriatri akibat tertukarnya glimepirid dosis rendah dengan glibenklamid 5 mg.',
    preventionMeasures: [
      'Gunakan Tall-Man: glimePIRID vs glibenKLAMID vs glipiZID.',
      'Pisahkan kotak obat per kekuatan dosis.'
    ],
    recommendedLabel: 'LASA Kuning'
  },
  {
    id: 'lasa-sukralfat-sulfasalazin',
    drugA: {
      name: 'Sukralfat',
      tallManName: 'sukralFAT',
      indication: 'Mukoprotektor tukak lambung & gastritis',
      dosageForm: 'Suspensi 500 mg/5 mL / Tablet'
    },
    drugB: {
      name: 'Sulfasalazin',
      tallManName: 'sulfasalAZIN',
      indication: 'Penyakit radang usus (IBD/Colitis Ulseratif), artritis reumatoid',
      dosageForm: 'Kaplet Salut Enterik 500 mg'
    },
    similarityType: 'sound_alike',
    clinicalRisk: 'Kekambuhan kolitis ulseratif berdarah bila pasien gagal menerima sulfasalazin, atau reaksi alergi sulfonamid.',
    preventionMeasures: [
      'Gunakan Tall-Man: sukralFAT vs sulfasalAZIN.',
      'Periksa riwayat alergi sulfa pasien sebelum penyerahan.'
    ],
    recommendedLabel: 'LASA Kuning'
  },
  {
    id: 'lasa-tetrasiklin-doksisiklin',
    drugA: {
      name: 'Tetrasiklin',
      tallManName: 'tetraSIKLIN',
      indication: 'Antibiotik tetrasiklin generasi 1 (dosis 4x sehari)',
      dosageForm: 'Kapsul 250 mg, 500 mg'
    },
    drugB: {
      name: 'Doksisiklin',
      tallManName: 'doksisiKLIN',
      indication: 'Antibiotik tetrasiklin generasi 2 (dosis 1-2x sehari)',
      dosageForm: 'Kapsul 100 mg'
    },
    similarityType: 'sound_alike',
    clinicalRisk: 'Underdosing atau overdosis antibiotik akibat aturan frekuensi minum yang sangat berbeda.',
    preventionMeasures: [
      'Gunakan Tall-Man: tetraSIKLIN vs doksisiKLIN.',
      'Edukasi pasien: doksisiklin diminum 100 mg tiap 12 jam, tetrasiklin 500 mg tiap 6 jam.'
    ],
    recommendedLabel: 'LASA Kuning'
  },
  {
    id: 'lasa-amiodaron-amlodipin',
    drugA: {
      name: 'Amiodaron',
      tallManName: 'amioDARON',
      indication: 'Antiartimia kelas III (VT/VF pulseless, AF refrakter)',
      dosageForm: 'Tablet 200 mg / Ampul 150 mg/3 mL'
    },
    drugB: {
      name: 'Amlodipin',
      tallManName: 'amLODIPIN',
      indication: 'Calcium Channel Blocker (CCB) hipertensi & angina',
      dosageForm: 'Tablet 5 mg, 10 mg'
    },
    similarityType: 'sound_alike',
    clinicalRisk: 'Toksisitas tiroid dan paru atau bradikardia berat jika amiodaron keliru diberikan untuk hipertensi rutin.',
    preventionMeasures: [
      'Gunakan Tall-Man: amioDARON vs amLODIPIN.',
      'Amiodaron injeksi berlabel HIGH ALERT.'
    ],
    recommendedLabel: 'LASA Merah'
  },
  {
    id: 'lasa-kaptopril-karvedilol',
    drugA: {
      name: 'Kaptopril',
      tallManName: 'kaptoPRIL',
      indication: 'ACE-inhibitor hipertensi & gagal jantung',
      dosageForm: 'Tablet 12.5 mg, 25 mg, 50 mg'
    },
    drugB: {
      name: 'Karvedilol',
      tallManName: 'karveDILOL',
      indication: 'Beta-blocker non-selektif dengan efek alfa-1 blokade',
      dosageForm: 'Tablet 6.25 mg, 25 mg'
    },
    similarityType: 'sound_alike',
    clinicalRisk: 'Bronkospasme akut pada pasien asma atau perburukan bradikardia bila karvedilol tidak sengaja diberikan.',
    preventionMeasures: [
      'Gunakan Tall-Man: kaptoPRIL vs karveDILOL.',
      'Simpan terpisah dalam rak obat kardiovaskular.'
    ],
    recommendedLabel: 'LASA Kuning'
  }
];

// =====================================================================
// 2. DAFTAR OBAT HIGH-ALERT (KEWASPADAAN TINGGI - STARKES KARS SKP 3)
// =====================================================================

const BASE_HIGH_ALERT_DRUGS: HighAlertDrug[] = [
  // A. Elektrolit Konsentrat Tinggi
  {
    id: 'ha-kcl-pekat',
    name: 'Kalium Klorida (KCl) 7.46% Injeksi Pekat',
    tallManName: 'KALIUM KLORIDA (KCl) 7.46% PEKAT',
    brandExamples: ['KCl 7.46% Otsuka'],
    category: 'concentrated_electrolyte',
    categoryLabel: 'Elektrolit Konsentrat Tinggi',
    riskLevel: 'Kritis',
    highAlertReason: 'Injeksi bolus IV tanpa pengenceran langsung memicu fibrilasi ventrikel dan henti jantung seketika (fatal).',
    storageRules: [
      'DILARANG KERAS disimpan di ruang perawatan / bangsal umum rawat inap.',
      'Hanya boleh disimpan di Instalasi Farmasi, ICU/ICCU, dan Kamar Operasi (OK) dalam lemari/laci terpisah berkunci.',
      'Wajib diberi label stiker MERAH menyala: "ELEKTROLIT KONSENTRAT - WAJIB DIENCERKAN SEBELUM DIGUNAKAN".'
    ],
    administrationAlerts: [
      'WAJIB DIENCERKAN dalam minimal 500-1000 mL cairan infus isotonik (NaCl 0.9%).',
      'Kecepatan infus perifer maksimal 10 mEq/jam (jangan melebihi 20 mEq/jam bahkan via central line).',
      'Wajib menggunakan syringe pump / infusion pump dan pemantauan EKG kontinu.'
    ],
    antidoteOrRescue: 'Kalsium Glukonat 10% IV (stabilisator membran jantung) + Insulin Dextrose (shift kalium intraseluler).',
    labelColor: 'Merah Elektrolit Pekat'
  },
  {
    id: 'ha-nacl-hipertonik-3',
    name: 'Natrium Klorida (NaCl) 3% Hipertonik',
    tallManName: 'NATRIUM KLORIDA (NaCl) 3% HIPERTONIK',
    brandExamples: ['NaCl 3% Otsuka 500 mL'],
    category: 'concentrated_electrolyte',
    categoryLabel: 'Elektrolit Konsentrat Tinggi',
    riskLevel: 'Kritis',
    highAlertReason: 'Koreksi natrium terlalu cepat memicu sindrom demielinasi osmotik pontin (Central Pontine Myelinolysis) yang menyebabkan kelumpuhan permanen atau kematian.',
    storageRules: [
      'Simpan terpisah dari infus NaCl 0.9% normal salin untuk mencegah tertukar.',
      'Beri stiker merah mencolok bertuliskan "HIGH ALERT - NaCl 3% HIPERTONIK".'
    ],
    administrationAlerts: [
      'Kecepatan kenaikan natrium serum maksimal 8 - 10 mEq/L dalam 24 jam pertama.',
      'Wajib cek elektrolit serum berkala tiap 2-4 jam selama terapi.',
      'Hanya untuk hiponatremia simtomatik akut berat (kejang / koma).'
    ],
    labelColor: 'Merah Elektrolit Pekat'
  },
  {
    id: 'ha-mgso4-40',
    name: 'Magnesium Sulfat (MgSO4) 20% & 40% Injeksi',
    tallManName: 'MAGNESIUM SULFAT (MgSO4) 40%',
    brandExamples: ['MgSO4 40% Otsuka 25 mL'],
    category: 'concentrated_electrolyte',
    categoryLabel: 'Elektrolit Konsentrat Tinggi',
    riskLevel: 'Kritis',
    highAlertReason: 'Overdosis memicu henti napas, hilangnya refleks patela, dan blokade atrioventrikular jantung.',
    storageRules: [
      'Simpan di troli emergensi VK/kebidanan dan ICU dalam wadah bertanda merah.',
      'Pisahkan konsentrasi 20% dan 40%.'
    ],
    administrationAlerts: [
      'Sebelum pemberian, pastikan 3 syarat terpenuhi: Refleks patela (+), Laju napas >= 16x/menit, dan Produksi urin >= 30 mL/jam.',
      'Wajib selalu siapkan Antidot Kalsium Glukonat 10% di samping tempat tidur pasien.'
    ],
    antidoteOrRescue: 'Kalsium Glukonat 10% 1 gram (10 mL) IV lambat selama 3-5 menit.',
    labelColor: 'Merah Elektrolit Pekat'
  },
  {
    id: 'ha-meylon-bicarbonate',
    name: 'Natrium Bikarbonat 8.4% (Meylon Injeksi)',
    tallManName: 'NATRIUM BIKARBONAT (MEYLON) 8.4%',
    brandExamples: ['Meylon 8.4% Otsuka 25 mL'],
    category: 'concentrated_electrolyte',
    categoryLabel: 'Elektrolit Konsentrat Tinggi',
    riskLevel: 'Tinggi',
    highAlertReason: 'Alkalosis metabolik berat, hipokalemia mendadak, hiperosmolaritas, dan inaktivasi bila dicampur kalsium/katekolamin.',
    storageRules: [
      'Simpan di troli resusitasi IGD/ICU dengan label merah High Alert.',
      'JANGAN campur satu jalur infus dengan Kalsium (membentuk endapan kapur kalsium karbonat).'
    ],
    administrationAlerts: [
      'Diberikan atas indikasi asidosis metabolik refrakter (pH < 7.1) atau toksisitas TCA/salisilat.',
      'Bilas jalur infus dengan NaCl 0.9% sebelum dan sesudah injeksi.'
    ],
    labelColor: 'Merah Elektrolit Pekat'
  },

  // B. Sitostatika & Kemoterapi Kanker
  {
    id: 'ha-kemoterapi-sitostatika',
    name: 'Obat Sitostatika / Kemoterapi Kanker Parenteral',
    tallManName: 'OBAT SITOSTATIKA KEMOTERAPI',
    brandExamples: ['Doksorubisin', 'Cisplatin', 'Paklitaksel', 'Siklofosfamid', 'Metotreksat', '5-FU'],
    category: 'cytotoxic',
    categoryLabel: 'Sitostatika & Bahan Toksik Kanker',
    riskLevel: 'Kritis',
    highAlertReason: 'Sifat karsinogenik, mutagenik, teratogenik, serta risiko ekstravasasi vesikan yang merusak jaringan nekrotik permanen.',
    storageRules: [
      'Wajib disimpan di Ruang Cleanroom Farmasi / Dispensing Sitostatika dengan Biological Safety Cabinet (BSC) Class II.',
      'Ditempatkan dalam wadah khusus berlabel UNGU SITOTOKSIK berlambang biohazard kanker.'
    ],
    administrationAlerts: [
      'Peracikan wajib menggunakan APD lengkap (jas kemo, sarung tangan steril dobel, masker N95, kacamata goggle).',
      'Pemberian wajib verifikasi 3 pihak (Apoteker, Dokter Onkologi, Perawat Tersertifikasi Kemo).',
      'Siapkan Spil Kit Kemo di ruangan.'
    ],
    labelColor: 'Ungu Sitotoksik'
  },

  // C. Agonis Adrenergik / Vasopresor Inotropik
  {
    id: 'ha-norepinefrin-vasopresor',
    name: 'Norepinefrin (Norepinephrine Bitartrate Injeksi)',
    tallManName: 'norEPInefrin (Vascon / Raivas)',
    brandExamples: ['Vascon', 'Raivas', 'Levophed'],
    category: 'vasopressor_inotropic',
    categoryLabel: 'Vasopresor & Agonis Adrenergik',
    riskLevel: 'Kritis',
    highAlertReason: 'Vasokonstriktor kuat; kesalahan dosis atau ekstravasasi memicu nekrosis gangren ekstremitas dan aritmia berat.',
    storageRules: [
      'Simpan di Depo ICU / Kamar Bedah / IGD troli emergensi bertanda High Alert Merah.',
      'Lindungi dari cahaya matahari langsung.'
    ],
    administrationAlerts: [
      'Wajib diberikan via jalur vena sentral (CVC) menggunakan syringe pump presisi tinggi.',
      'Bila terjadi ekstravasasi perifer, segera infiltrasi antidot Fentolamin mesylate 5-10 mg.'
    ],
    antidoteOrRescue: 'Fentolamin (alpha-blocker infiltrasi lokal).',
    labelColor: 'Merah High Alert'
  },

  // D. Antikoagulan & Antitrombotik Parenteral
  {
    id: 'ha-heparin-antikoagulan',
    name: 'Heparin Sodium Injeksi (Unfractionated Heparin / UFH)',
    tallManName: 'HEPARIN SODIUM Injeksi',
    brandExamples: ['Inviclot 5000 IU/mL', 'Heparin Generik'],
    category: 'anticoagulant',
    categoryLabel: 'Antikoagulan Parenteral',
    riskLevel: 'Kritis',
    highAlertReason: 'Tertukarnya konsentrasi vial (misal: 1.000 unit/mL vs 10.000 unit/mL vs 25.000 unit/vial) memicu perdarahan fatal atau trombosis rekuren.',
    storageRules: [
      'Pisahkan vial heparin bilas (flush 10-100 U/mL) dari heparin terapi terapeutik (5.000 U/mL).',
      'Wajib stiker High Alert Merah pada setiap vial.'
    ],
    administrationAlerts: [
      'Pantau ketat nilai aPTT berkala (target 1.5 - 2.5 kali nilai kontrol).',
      'Waspadai Heparin-Induced Thrombocytopenia (HIT).'
    ],
    antidoteOrRescue: 'Protamin Sulfat IV lambat (1 mg menetralkan ~100 unit heparin).',
    labelColor: 'Merah High Alert'
  },

  // E. Insulin
  {
    id: 'ha-insulin-semua-jenis',
    name: 'Insulin Human & Analog (Semua Sediaan Pen & Vial)',
    tallManName: 'INSULIN (Semua Jenis)',
    brandExamples: ['Novorapid', 'Lantus', 'Actrapid', 'Sansulin', 'Humalog', 'Levemir'],
    category: 'insulin',
    categoryLabel: 'Insulin Parenteral',
    riskLevel: 'Tinggi',
    highAlertReason: 'Salah membaca unit dosis atau salah memilih jenis insulin (rapid vs long-acting) memicu hipoglikemia berat, ensefalopati, dan koma.',
    storageRules: [
      'Simpan dalam kulkas 2°C - 8°C sebelum dibuka.',
      'Insulin yang sedang dipakai tahan 28 hari pada suhu ruang sejuk (< 30°C).',
      'Wadah penyimpanan kulkas farmasi wajib diberi sekat pemisah antar jenis insulin dan stiker High Alert.'
    ],
    administrationAlerts: [
      'DILARANG menggunakan spuit biasa (selalu gunakan syringe insulin berskala unit internasional atau insulin pen resmi).',
      'Wajib double-check independen sebelum penyuntikan.'
    ],
    antidoteOrRescue: 'Dekstrosa 40% (D40) IV bolus 25-50 mL atau Glukagon 1 mg SC/IM.',
    labelColor: 'Merah High Alert'
  },

  // F. Neuromuscular Blocking Agents (NMBA)
  {
    id: 'ha-nmba-rocuronium-atracurium',
    name: 'Pelemas Otot / Neuromuscular Blocking Agents (NMBA)',
    tallManName: 'ROCURONIUM / ATRACURIUM / VECURONIUM',
    brandExamples: ['Esmeron', 'Tracrium', 'Norcuron', 'Suksinilkolin'],
    category: 'nmba',
    categoryLabel: 'Pelemas Otot Rangka (NMBA)',
    riskLevel: 'Kritis',
    highAlertReason: 'Menyebabkan kelumpuhan total otot pernapasan (diafragma) seketika tanpa efek sedasi. Pasien sadar namun tidak dapat bernapas bila intubasi/ventilator mekanik tidak terpasang.',
    storageRules: [
      'HANYA boleh disimpan di Kamar Operasi (OK) dan ICU.',
      'Wajib kotak tertutup khusus berlabel MERAH BESAR: "PERINGATAN: AGEN PARALISIS PERNAPASAN - HANYA UNTUK PASIEN TERINTUBASI".'
    ],
    administrationAlerts: [
      'HANYA boleh diberikan oleh Dokter Anestesi / Tenaga Medis bersertifikasi airway management dengan ventilator siap pakai.',
      'Wajib didahului obat anestesi / sedasi adekuat.'
    ],
    antidoteOrRescue: 'Sugammadex (Bridion) untuk rocuronium/vecuronium ATAU Neostigmin + Atropin.',
    labelColor: 'Merah NMBA Paralisis'
  },

  // G. Narkotika & Opioid Injeksi
  {
    id: 'ha-narkotika-morfin-fentanil',
    name: 'Narkotika & Opioid Injeksi (Morfin, Fentanil, Petidin)',
    tallManName: 'MORFIN / FENTANIL / PETIDIN Injeksi',
    brandExamples: ['Morphine HCl', 'Fentanyl Janssen', 'Pethidine HCl'],
    category: 'opioid',
    categoryLabel: 'Narkotika & Analgesik Opioid Kuat',
    riskLevel: 'Kritis',
    highAlertReason: 'Depresi pernapasan fatal, hipotensi berat, dan ketergantungan fisik.',
    storageRules: [
      'Wajib disimpan di Lemari Narkotika Khusus dengan dinding kokoh dan kunci ganda (double-lock) sesuai Permenkes No. 5 Tahun 2023.',
      'Kunci dipegang oleh 2 Apoteker/Penanggung Jawab berbeda.'
    ],
    administrationAlerts: [
      'Pantau saturasi oksigen (SpO2) dan laju pernapasan kontinu.',
      'Sisa ampul yang tidak terpakai wajib dimusnahkan dengan saksi dan berita acara resmi.'
    ],
    antidoteOrRescue: 'Nalokson HCl Injeksi 0.4 - 2 mg IV/IM/SC.',
    labelColor: 'Merah High Alert'
  }
];

// =====================================================================
// 3. OBAT-OBAT TERTENTU (OOT) & PREKURSOR FARMASI
// =====================================================================

const BASE_OOT_PRECURSOR_DRUGS: OotPrecursorDrug[] = [
  // A. OBAT-OBAT TERTENTU (OOT) - PerBPOM No. 12 Tahun 2025 (Mencabut PerBPOM No. 10/2019 & No. 24/2021)
  {
    id: 'oot-tramadol',
    name: 'Tramadol HCl',
    type: 'oot',
    typeLabel: 'Obat-Obat Tertentu (OOT)',
    activeSubstance: 'Tramadol Hydrochloride',
    commonBrands: ['Tramal', 'Centrasic', 'Tradyl', 'Tramadol Generik'],
    legalBasis: 'Peraturan BPOM RI No. 10 Tahun 2019 tentang Pengelolaan Obat-Obat Tertentu',
    abusePotential: 'Sering disalahgunakan anak muda untuk efek euforia, sedasi, dan ketenangan semu; memicu kejang tonik-klonik dan adiksi berat.',
    dispensingRules: [
      'Hanya dapat dilayani dengan RESEP ASLI DOKTER (dilarang menggunakan copy resep jika obat belum pernah ditebus di apotek tersebut).',
      'Dokter penulis resep harus jelas (SIP, alamat praktik, dan tanda tangan/paraf).',
      'Jumlah obat yang diserahkan harus rasional sesuai indikasi medis akut (maksimal untuk 3-5 hari terapi).'
    ],
    storageAndReporting: 'Disimpan di tempat terpisah dan aman (dianjurkan dalam lemari tersendiri). Wajib pencatatan kartu stok dan pelaporan khusus saat audit BPOM.',
    labelColor: 'Biru OOT'
  },
  {
    id: 'oot-triheksifenidil',
    name: 'Triheksifenidil (THP)',
    type: 'oot',
    typeLabel: 'Obat-Obat Tertentu (OOT)',
    activeSubstance: 'Trihexyphenidyl Hydrochloride',
    commonBrands: ['Artane', 'Parkinal', 'Heximer', 'Triheksifenidil Generik'],
    legalBasis: 'PerBPOM No. 10 Tahun 2019 juncto PerBPOM No. 24 Tahun 2021',
    abusePotential: 'Dikenal sebagai "Pil Heximer / Pil Kuning"; disalahgunakan untuk efek halusinasi, euforia, dan agresi tanpa rasa takut.',
    dispensingRules: [
      'Wajib resep asli dokter spesialis saraf (Neurologi) atau psikiatri (Jiwa).',
      'Apoteker wajib melakukan konfirmasi resep (telepon dokter) bila resep dicurigai palsu atau pasien meminta dalam jumlah besar.',
      'Dilarang melayani resep iter (pengulangan) tanpa instruksi tertulis dokter.'
    ],
    storageAndReporting: 'Wajib disimpan terpisah dari obat bebas. Catat mutasi penerimaan dan pengeluaran pada kartu stok setiap hari.',
    labelColor: 'Biru OOT'
  },
  {
    id: 'oot-klorpromazin',
    name: 'Klorpromazin (CPZ)',
    type: 'oot',
    typeLabel: 'Obat-Obat Tertentu (OOT)',
    activeSubstance: 'Chlorpromazine Hydrochloride',
    commonBrands: ['Cepezet', 'Klorpromazin Generik'],
    legalBasis: 'Peraturan BPOM RI No. 10 Tahun 2019',
    abusePotential: 'Disalahgunakan sebagai penenang keras atau campuran minuman oplosan.',
    dispensingRules: [
      'Wajib resep asli dokter. Cek identitas pasien / pengambil obat.',
      'Dilarang penyerahan tanpa resep dokter.'
    ],
    storageAndReporting: 'Simpan di lemari penyimpanan obat keras terbatas OOT. Laporkan mutasi kartu stok secara tertib.',
    labelColor: 'Biru OOT'
  },
  {
    id: 'oot-amitriptilin',
    name: 'Amitriptilin',
    type: 'oot',
    typeLabel: 'Obat-Obat Tertentu (OOT)',
    activeSubstance: 'Amitriptyline Hydrochloride',
    commonBrands: ['Amitriptyline Indofarma'],
    legalBasis: 'Peraturan BPOM RI No. 10 Tahun 2019',
    abusePotential: 'Disalahgunakan untuk efek penenang, relaksasi otot, dan peningkatan mood semu.',
    dispensingRules: [
      'Hanya dengan resep dokter. Skrining indikasi (depresi atau nyeri neuropatik kronis).',
      'Waspadai resep berulang yang tidak wajar.'
    ],
    storageAndReporting: 'Disimpan dalam rak khusus OOT. Kartu stok manual atau elektronik tersimpan minimal 3 tahun.',
    labelColor: 'Biru OOT'
  },
  {
    id: 'oot-haloperidol',
    name: 'Haloperidol',
    type: 'oot',
    typeLabel: 'Obat-Obat Tertentu (OOT)',
    activeSubstance: 'Haloperidol',
    commonBrands: ['Haldol', 'Lodomer', 'Govotil', 'Haloperidol Generik'],
    legalBasis: 'Peraturan BPOM RI No. 10 Tahun 2019',
    abusePotential: 'Disalahgunakan sebagai zat penekan SSP ekstrim.',
    dispensingRules: [
      'Hanya dilayani dengan resep asli dokter yang memuat identitas jelas.',
      'Skrining dosis untuk mencegah distonia akut atau krisis okulogirik.'
    ],
    storageAndReporting: 'Simpan di rak aman OOT, catat batch dan tanggal kedaluwarsa pada kartu stok.',
    labelColor: 'Biru OOT'
  },
  {
    id: 'oot-dekstrometorfan',
    name: 'Dekstrometorfan (DMP)',
    type: 'oot',
    typeLabel: 'Obat-Obat Tertentu (OOT)',
    activeSubstance: 'Dextromethorphan HBr',
    commonBrands: ['Dextro Sirup/Tablet', 'Kombinasi Obat Batuk DMP'],
    legalBasis: 'Keputusan Kepala BPOM RI & PerBPOM Pengawasan OOT',
    abusePotential: 'Sediaan tunggal DMP tablet telah ditarik izin edarnya di Indonesia karena marak disalahgunakan ("Pil Dextro") untuk efek disosiatif halusinogenik; sediaan kombinasi sirup tetap diawasi ketat.',
    dispensingRules: [
      'Sediaan tunggal tablet DILARANG diedarkan.',
      'Sediaan kombinasi sirup/tablet flu batuk hanya boleh diserahkan dalam jumlah wajar untuk konsumsi swamedikasi terapi batuk 3-5 hari.'
    ],
    storageAndReporting: 'Pantau jumlah pengeluaran dan cegah pembelian borongan mencurigakan oleh remaja.',
    labelColor: 'Biru OOT'
  },
  {
    id: 'oot-ketamin',
    name: 'Ketamin HCl (OOT Baru 2025)',
    type: 'oot',
    typeLabel: 'Obat-Obat Tertentu (OOT)',
    activeSubstance: 'Ketamine Hydrochloride Injeksi (50 mg/mL & 100 mg/mL)',
    commonBrands: ['Ketalar', 'KTM', 'Ivanes', 'Ketamin Hameln', 'Ketamin Generik Injeksi'],
    legalBasis: 'Peraturan BPOM RI No. 12 Tahun 2025 tentang Pengawasan Penyaluran Obat-Obat Tertentu yang Sering Disalahgunakan',
    abusePotential: 'Disalahgunakan luas secara rekreasional untuk efek anestesi disosiatif ("Special K" / "K-Hole"), sensasi lepas raga, euforia semu, dan halusinasi. Peningkatan peredaran >300% pada 2022-2024. Risiko sistitis nekrotikans berat pada vesika urinaria, laringospasme mendadak, hipertensi, delirium emergensi, dan depresi napas.',
    dispensingRules: [
      'HANYA dapat disalurkan oleh PBF ke Rumah Sakit, Klinik rawat inap/bedah, dan Lembaga Riset resmi.',
      'Pengadaan WAJIB menggunakan Surat Pesanan (SP) Khusus OOT rangkap 3 ber-SIPA Apoteker Penanggung Jawab dan berstempel sarana.',
      'Pelayanan HANYA berdasarkan resep asli dokter spesialis anestesiologi atau dokter berwenang tindakan bedah. Dilarang keras melayani copy resep.',
      'Wajib mencatat identitas lengkap pasien (Nomor NIK KTP atau Rekam Medis), tanggal pemakaian, nomor batch vial, volume terpakai, dan sisa.',
      'Dilarang keras diperjualbelikan secara online / e-commerce maupun untuk swamedikasi apotek luar.'
    ],
    storageAndReporting: 'Wajib disimpan di tempat khusus yang aman (lemari terkunci rapat) terpisah dari obat biasa. Pencatatan kartu stok fisik/elektronik setiap hari kerja dan wajib dilaporkan berkala kepada Kepala BPOM RI dan Dinas Kesehatan setempat.',
    labelColor: 'Biru OOT'
  },

  // B. PREKURSOR FARMASI - PP RI No. 44 Tahun 2010 & PerBPOM No. 7 Tahun 2024
  {
    id: 'precursor-pseudoefedrin',
    name: 'Pseudoefedrin HCl',
    type: 'precursor',
    typeLabel: 'Prekursor Farmasi',
    activeSubstance: 'Pseudoephedrine Hydrochloride',
    commonBrands: ['Rhinos SR', 'Actifed Kuning', 'Tremenza', 'Devosix Drop', 'Aldisa SR'],
    legalBasis: 'Peraturan Pemerintah RI No. 44 Tahun 2010 tentang Prekursor',
    abusePotential: 'Bahan baku pemula kimia yang dapat diekstraksi secara ilegal untuk sintesis Narkotika Metamfetamin (Sabu / Ice).',
    dispensingRules: [
      'Sediaan tablet lepas lambat (misal: Rhinos SR) WAJIB dengan RESEP ASLI DOKTER.',
      'Sediaan sirup/drop flu bebas terbatas hanya boleh diserahkan maksimal 1 botol per pasien dengan pencatatan nama dan alamat pembeli.',
      'Pengadaan wajib menggunakan Surat Pesanan (SP) Khusus Prekursor Farmasi rangkap 3 ber-SIPA Apoteker.'
    ],
    storageAndReporting: 'Disimpan di tempat penyimpanan obat yang aman dan terpisah dari obat lain. Wajib kartu stok tertib dan siap diaudit Dinkes/BPOM.',
    labelColor: 'Oranye Prekursor'
  },
  {
    id: 'precursor-efedrin',
    name: 'Efedrin HCl',
    type: 'precursor',
    typeLabel: 'Prekursor Farmasi',
    activeSubstance: 'Ephedrine Hydrochloride',
    commonBrands: ['Asmadex', 'Efedrin Tablet 25 mg', 'Efedrin Injeksi 50 mg'],
    legalBasis: 'PP RI No. 44 Tahun 2010 & PerBPOM Pengawasan Prekursor',
    abusePotential: 'Dapat dikonversi menjadi prekursor terlarang untuk metamfetamin dan stimulan amfetamin ilegal.',
    dispensingRules: [
      'Wajib resep dokter.',
      'Pemesanan ke PBF wajib memakai Surat Pesanan (SP) Khusus Prekursor Farmasi.',
      'Penyerahan dalam bentuk racikan puyer asma anak harus dihitung cermat dan dicatat.'
    ],
    storageAndReporting: 'Simpan di lemari terkunci aman. Mutasi stok dilaporkan berkala.',
    labelColor: 'Oranye Prekursor'
  },
  {
    id: 'precursor-fenilpropanolamin',
    name: 'Fenilpropanolamin (PPA / Norefedrin)',
    type: 'precursor',
    typeLabel: 'Prekursor Farmasi',
    activeSubstance: 'Phenylpropanolamine Hydrochloride',
    commonBrands: ['Mixagrip Flu', 'Paramex Flu', 'Decolgen', 'Ultraflu'],
    legalBasis: 'PP RI No. 44 Tahun 2010 tentang Prekursor',
    abusePotential: 'Dapat digunakan sebagai bahan sintesis amfetamin. Dosis tunggal dibatasi maksimal 15 mg per takaran untuk cegah risiko stroke hemoragik.',
    dispensingRules: [
      'Sediaan obat bebas terbatas OTC maksimal penyerahan 1 strip/botol untuk kebutuhan swamedikasi.',
      'Bila melebihi batas wajar, apoteker wajib mencurigai dan menolak penyerahan.'
    ],
    storageAndReporting: 'Penyimpanan teratur di etalase/rak apotek. Surat pesanan dari PBF menggunakan format SP Prekursor.',
    labelColor: 'Oranye Prekursor'
  },
  {
    id: 'precursor-ergotamin',
    name: 'Ergotamin & Metilergometrin',
    type: 'precursor',
    typeLabel: 'Prekursor Farmasi',
    activeSubstance: 'Ergotamine Tartrate / Methylergometrine Maleate',
    commonBrands: ['Ericaf (Ergotamin + Kafein)', 'Methergin Injeksi/Tablet', 'Bledstop'],
    legalBasis: 'PP RI No. 44 Tahun 2010',
    abusePotential: 'Alkaloid ergot merupakan zat pemula untuk sintesis zat halusinogenik Lysergic Acid Diethylamide (LSD).',
    dispensingRules: [
      'Wajib RESEP DOKTER.',
      'Surat pesanan menggunakan SP Khusus Prekursor Farmasi.',
      'Skrining ketat kontraindikasi pada kehamilan (efek oksitosik kontraksi uterus memicu abortus).'
    ],
    storageAndReporting: 'Simpan di lemari obat keras berakses terbatas. Catat kartu stok rapi.',
    labelColor: 'Oranye Prekursor'
  }
];

// =====================================================================
// EXPORT GABUNGAN STANDAR & EKSTENSI (60+ LASA, 35+ HIGH ALERT, 25+ OOT/PREKURSOR)
// =====================================================================

export const LASA_PAIRS: LasaPair[] = [
  ...BASE_LASA_PAIRS,
  ...EXTENDED_LASA_PAIRS
];

export const HIGH_ALERT_DRUGS: HighAlertDrug[] = [
  ...BASE_HIGH_ALERT_DRUGS,
  ...EXTENDED_HIGH_ALERT_DRUGS
];

export const OOT_PRECURSOR_DRUGS: OotPrecursorDrug[] = [
  ...BASE_OOT_PRECURSOR_DRUGS,
  ...EXTENDED_OOT_PRECURSOR_DRUGS
];

// =====================================================================
// HELPER FUNCTIONS & RESEP RISK DETECTOR ENGINE
// =====================================================================

export interface DrugRiskCheckResult {
  hasRisk: boolean;
  drugInput: string;
  matchedLasaPairs: LasaPair[];
  matchedHighAlert: HighAlertDrug[];
  matchedOotPrecursors: OotPrecursorDrug[];
}

export const checkPrescriptionDrugRisk = (drugInput: string): DrugRiskCheckResult => {
  const q = drugInput.trim().toLowerCase();
  if (!q) {
    return {
      hasRisk: false,
      drugInput,
      matchedLasaPairs: [],
      matchedHighAlert: [],
      matchedOotPrecursors: []
    };
  }

  const matchedLasaPairs = LASA_PAIRS.filter(pair => {
    return (
      pair.drugA.name.toLowerCase().includes(q) ||
      pair.drugB.name.toLowerCase().includes(q) ||
      pair.drugA.tallManName.toLowerCase().includes(q) ||
      pair.drugB.tallManName.toLowerCase().includes(q)
    );
  });

  const matchedHighAlert = HIGH_ALERT_DRUGS.filter(ha => {
    return (
      ha.name.toLowerCase().includes(q) ||
      (ha.tallManName && ha.tallManName.toLowerCase().includes(q)) ||
      (ha.brandExamples || []).some(b => b.toLowerCase().includes(q))
    );
  });

  const matchedOotPrecursors = OOT_PRECURSOR_DRUGS.filter(item => {
    return (
      item.name.toLowerCase().includes(q) ||
      item.activeSubstance.toLowerCase().includes(q) ||
      (item.commonBrands || []).some(b => b.toLowerCase().includes(q))
    );
  });

  const hasRisk =
    matchedLasaPairs.length > 0 ||
    matchedHighAlert.length > 0 ||
    matchedOotPrecursors.length > 0;

  return {
    hasRisk,
    drugInput,
    matchedLasaPairs,
    matchedHighAlert,
    matchedOotPrecursors
  };
};
