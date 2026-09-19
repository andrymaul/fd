// ============================================================================
// BASIS DATA LENGKAP PPRA & ANTIMICROBIAL STEWARDSHIP (AMS)
// Standar: WHO AWaRe 2024, Kemenkes RI (Permenkes 8/2015 & STARKES SKP/PPRA),
// Evaluasi Kualitatif Gyssens, Interpretasi CLSI M100 / EUCAST (S/I/R), & DDD WHO
// ============================================================================

export type AwareCategory = 'Access' | 'Watch' | 'Reserve';

export interface AwareAntibiotic {
  id: string;
  name: string;
  genericName: string;
  category: AwareCategory;
  chemicalClass: string;
  primaryIndications: string;
  typicalDose: string;
  route: 'Oral' | 'Injeksi IV/IM' | 'Oral & IV';
  stewardshipRecommendation: string;
  restrictedApprovalRequired: boolean;
  kpraLevel: 'Apoteker / Dokter Umum' | 'Dokter Spesialis' | 'Persetujuan Khusus Komite PPRA';
  accessPercentageTarget?: string;
}

export interface AntibiogramSusceptibility {
  antibiotic: string;
  percentS: number; // 0 - 100%
  micBreakpoints: string;
  interpretationHint: 'Pilihan Utama' | 'Sensitif' | 'Intermediet' | 'Resisten Tinggi';
  note?: string;
}

export interface PathogenAntibiogram {
  id: string;
  name: string;
  gram: 'positive' | 'negative';
  shape: string;
  commonInfections: string[];
  clinicalPearls: string;
  firstLineEmpiric: string;
  resistanceMechanism: string;
  testedIsolatesCount: number;
  susceptibilities: AntibiogramSusceptibility[];
}

export interface GyssensCategoryInfo {
  category: 'VI' | 'V' | 'IVA' | 'IVB' | 'IVC' | 'IVD' | 'IIIA' | 'IIIB' | 'IIA' | 'IIB' | 'IIC' | 'I' | '0';
  code: string;
  title: string;
  description: string;
  color: string;
  recommendation: string;
  actionRequired: string;
}

export interface PkPdCategoryInfo {
  indexType: 'Time-Dependent (T > MIC)' | 'Concentration-Dependent (Cmax / MIC)' | 'Exposure-Dependent (AUC24 / MIC)';
  primaryClasses: string;
  targetGoal: string;
  optimizationStrategy: string;
  clinicalExamples: string;
  monitoringKey: string;
}


export interface SurgicalProphylaxisItem {
  id: string;
  category: 'digestif' | 'obgyn' | 'ortho' | 'cardio' | 'urology' | 'neuro' | 'general' | 'ent';
  categoryLabel: string;
  procedureName: string;
  woundClassification: 'Bersih' | 'Bersih Terkontaminasi' | 'Terkontaminasi';
  firstLineAntibiotic: string;
  standardDoseAdult: string;
  obeseDoseAdjustment: string; // Misal >120 kg
  timingPreIncision: string; // Misal 30-60 menit
  redosingIntervalHours: string; // Misal tiap 4 jam
  maxDurationHours: string; // Misal 24 jam
  betaLactamAllergyAlternative: string;
  targetPathogens: string[];
  clinicalCheckpoints: string[];
}

export interface WhoDddItem {
  id: string;
  antibioticName: string;
  atcCode: string;
  route: 'Oral' | 'Parenteral';
  dddValueGrams: number;
  unit: string;
  category: AwareCategory;
  clinicalNote: string;
}

// ============================================================================
// 1. DATA WHO AWaRe CLASSIFICATION (32+ ANTIBIOTIK)
// ============================================================================
export const WHO_AWARE_ANTIBIOTICS: AwareAntibiotic[] = [
  // --- KATEGORI ACCESS (PILIHAN UTAMA, SPEKTRUM SEMPIT, RISIKO RESISTENSI RENDAH) ---
  {
    id: 'amox',
    name: 'Amoksisilin',
    genericName: 'Amoxicillin Trihydrate',
    category: 'Access',
    chemicalClass: 'Aminopenisilin',
    primaryIndications: 'Faringitis streptokokus, otitis media akut, ISPA bakterial, infeksi kulit jaringan lunak, profilaksis endokarditis',
    typicalDose: 'Oral: 500 mg tiap 8 jam atau 875-1000 mg tiap 12 jam',
    route: 'Oral',
    stewardshipRecommendation: 'Lini pertama infeksi komunitas tanpa komplikasi; hindari peresepan bila dicurigai infeksi virus',
    restrictedApprovalRequired: false,
    kpraLevel: 'Apoteker / Dokter Umum',
    accessPercentageTarget: 'Target WHO: >60% dari seluruh penggunaan antibiotik nasional'
  },
  {
    id: 'amox-clav',
    name: 'Amoksisilin-Klavulanat',
    genericName: 'Co-Amoxiclav',
    category: 'Access',
    chemicalClass: 'Aminopenisilin + Inhibitor Beta-Laktamase',
    primaryIndications: 'Sinusitis bakterial akut, gigitan hewan/manusia, eksaserbasi PPOK, pneumonia aspirasi komunitas',
    typicalDose: 'Oral: 625 mg tiap 8 jam atau 1000 mg (875/125) tiap 12 jam; IV: 1.2 g tiap 8 jam',
    route: 'Oral & IV',
    stewardshipRecommendation: 'Gunakan bila patogen terbukti atau dicurigai memproduksi beta-laktamase; awas diare dan hepatotoksisitas kolestatik',
    restrictedApprovalRequired: false,
    kpraLevel: 'Apoteker / Dokter Umum'
  },
  {
    id: 'ampicillin',
    name: 'Ampisilin',
    genericName: 'Ampicillin Sodium',
    category: 'Access',
    chemicalClass: 'Aminopenisilin',
    primaryIndications: 'Meningitis Listeria monocytogenes, infeksi Enterococcus faecalis sensitif, sepsis neonatal',
    typicalDose: 'IV: 1-2 g tiap 4-6 jam (Meningitis: 2 g tiap 4 jam)',
    route: 'Injeksi IV/IM',
    stewardshipRecommendation: 'Kombinasi dengan Gentamisin untuk sinergisme bakterisid Enterococcus & Listeria',
    restrictedApprovalRequired: false,
    kpraLevel: 'Apoteker / Dokter Umum'
  },
  {
    id: 'cefadroxil',
    name: 'Sefadroksil',
    genericName: 'Cefadroxil Monohydrate',
    category: 'Access',
    chemicalClass: 'Sefalosporin Generasi 1',
    primaryIndications: 'Infeksi kulit dan jaringan lunak (S. aureus MSSA, S. pyogenes), faringitis, ISK sederhana',
    typicalDose: 'Oral: 500 mg - 1000 mg tiap 12 jam',
    route: 'Oral',
    stewardshipRecommendation: 'Pilihan oral terbaik untuk infeksi kulit stafilokokus sensitif metisilin (MSSA)',
    restrictedApprovalRequired: false,
    kpraLevel: 'Apoteker / Dokter Umum'
  },
  {
    id: 'cefazolin',
    name: 'Sefazolin',
    genericName: 'Cefazolin Sodium',
    category: 'Access',
    chemicalClass: 'Sefalosporin Generasi 1',
    primaryIndications: 'Profilaksis bedah baku emas (insisi kulit), bakteremia MSSA, endokarditis MSSA',
    typicalDose: 'IV: 1-2 g bolus IV 30-60 menit sebelum insisi bedah; terapi: 1-2 g tiap 8 jam',
    route: 'Injeksi IV/IM',
    stewardshipRecommendation: 'Standar emas profilaksis bedah bersih & bersih-terkontaminasi; hentikan dalam 24 jam pasca-operasi',
    restrictedApprovalRequired: false,
    kpraLevel: 'Apoteker / Dokter Umum'
  },
  {
    id: 'doxycycline',
    name: 'Doksisiklin',
    genericName: 'Doxycycline Hyclate',
    category: 'Access',
    chemicalClass: 'Tetrasiklin',
    primaryIndications: 'Pneumonia atipikal (Mycoplasma/Chlamydia), Leptospirosis, Rickettsia/Typhus, Jerawat/Acne vulgaris, Malaria profilaksis',
    typicalDose: 'Oral: 100 mg tiap 12 jam paska makan',
    route: 'Oral',
    stewardshipRecommendation: 'Aktivitas sangat baik terhadap bakteri atipikal intraseluler; beri jeda 2 jam dengan antasida/susu/besi',
    restrictedApprovalRequired: false,
    kpraLevel: 'Apoteker / Dokter Umum'
  },
  {
    id: 'metronidazole',
    name: 'Metronidazol',
    genericName: 'Metronidazole',
    category: 'Access',
    chemicalClass: 'Nitroimidazol',
    primaryIndications: 'Infeksi bakteri anaerob (Bacteroides fragilis), abses hepar amoeba, trichomoniasis, infeksi intra-abdominal',
    typicalDose: 'Oral: 500 mg tiap 8 jam; IV: 500 mg tiap 8 jam infus lambat',
    route: 'Oral & IV',
    stewardshipRecommendation: 'Cakupan anaerob baku emas; peringatkan pasien larangan konsumsi alkohol (reaksi disulfiram-like)',
    restrictedApprovalRequired: false,
    kpraLevel: 'Apoteker / Dokter Umum'
  },
  {
    id: 'gentamicin',
    name: 'Gentamisin',
    genericName: 'Gentamicin Sulfate',
    category: 'Access',
    chemicalClass: 'Aminoglikosida',
    primaryIndications: 'Sepsis gram negatif berat, infeksi saluran kemih komplikasi, sinergisme endokarditis enterokokus',
    typicalDose: 'IV: Dosis harian tunggal 5-7 mg/kgBB tiap 24 jam (Extended Interval Dosing)',
    route: 'Injeksi IV/IM',
    stewardshipRecommendation: 'Gunakan protokol dosis tunggal harian untuk efikasi maksimal dan minimalisasi nefrotoksisitas & ototoksisitas',
    restrictedApprovalRequired: false,
    kpraLevel: 'Apoteker / Dokter Umum'
  },
  {
    id: 'cotrimoxazole',
    name: 'Kotrimoksazol',
    genericName: 'Trimethoprim-Sulfamethoxazole (TMP-SMX)',
    category: 'Access',
    chemicalClass: 'Kombinasi Sulfonamid + Trimetoprim',
    primaryIndications: 'Profilaksis & terapi Pneumocystis jirovecii (PCP pada HIV), ISK sederhana, infeksi kulit CA-MRSA',
    typicalDose: 'Oral: 960 mg (Forte: 160/800 mg) tiap 12 jam; PCP: 15-20 mg/kg TMP terbagi tiap 6-8 jam',
    route: 'Oral & IV',
    stewardshipRecommendation: 'Efisien untuk MRSA komunitas; pantau kadar kalium darah (risiko hiperkalemia berat) dan fungsi ginjal',
    restrictedApprovalRequired: false,
    kpraLevel: 'Apoteker / Dokter Umum'
  },
  {
    id: 'clindamycin',
    name: 'Klindamisin',
    genericName: 'Clindamycin Phosphate / HCl',
    category: 'Access',
    chemicalClass: 'Linkosamid',
    primaryIndications: 'Infeksi kulit/tulang anaerob & gram positif, supresi toksin pada Toxic Shock Syndrome (S. pyogenes / S. aureus)',
    typicalDose: 'Oral: 300 mg tiap 6-8 jam; IV: 600 mg tiap 8 jam',
    route: 'Oral & IV',
    stewardshipRecommendation: 'Penekan produksi eksotoksin bakteri gram positif; awas risiko kolitis pseudomembranosa (C. difficile)',
    restrictedApprovalRequired: false,
    kpraLevel: 'Apoteker / Dokter Umum'
  },

  // --- KATEGORI WATCH (PENGAWASAN KETAT, SPEKTRUM LUAS, POTENSI TINGGI RESISTENSI) ---
  {
    id: 'ceftriaxone',
    name: 'Seftriakson',
    genericName: 'Ceftriaxone Sodium',
    category: 'Watch',
    chemicalClass: 'Sefalosporin Generasi 3',
    primaryIndications: 'Pneumonia komunitas (CAP) rawat inap, meningitis bakterial, demam tifoid berat, gonore, pielonefritis akut',
    typicalDose: 'IV: 1-2 g tiap 24 jam (Meningitis: 2 g tiap 12 jam)',
    route: 'Injeksi IV/IM',
    stewardshipRecommendation: 'HINDARI overuse untuk infeksi ringan; pemakaian berlebih memicu kolonisasi kuman ESBL & C. difficile di RS',
    restrictedApprovalRequired: true,
    kpraLevel: 'Dokter Spesialis'
  },
  {
    id: 'cefotaxime',
    name: 'Sefotaksim',
    genericName: 'Cefotaxime Sodium',
    category: 'Watch',
    chemicalClass: 'Sefalosporin Generasi 3',
    primaryIndications: 'Sepsis neonatal, Spontaneous Bacterial Peritonitis (SBP sirosis), meningitis pada bayi baru lahir',
    typicalDose: 'IV: 1-2 g tiap 6-8 jam',
    route: 'Injeksi IV/IM',
    stewardshipRecommendation: 'Pilihan sefalosporin gen 3 pada neonatus karena tidak mendesak bilirubin (bebas risiko kernikterus)',
    restrictedApprovalRequired: true,
    kpraLevel: 'Dokter Spesialis'
  },
  {
    id: 'ceftazidime',
    name: 'Seftazidim',
    genericName: 'Ceftazidime Pentahydrate',
    category: 'Watch',
    chemicalClass: 'Sefalosporin Generasi 3 Antipseudomonas',
    primaryIndications: 'Neutropenia febril kemoterapi, infeksi Pseudomonas aeruginosa tervalidasi, infeksi paru kistik fibrosis',
    typicalDose: 'IV: 1-2 g tiap 8 jam (Infus kontinu atau diperpanjang 3 jam)',
    route: 'Injeksi IV/IM',
    stewardshipRecommendation: 'SIMPAN KHUSUS untuk kecurigaan atau biakan terbukti Pseudomonas aeruginosa; bukan untuk gram positif',
    restrictedApprovalRequired: true,
    kpraLevel: 'Dokter Spesialis'
  },
  {
    id: 'cefepime',
    name: 'Sefepim',
    genericName: 'Cefepime HCl',
    category: 'Watch',
    chemicalClass: 'Sefalosporin Generasi 4',
    primaryIndications: 'Pneumonia nosokomial (HAP/VAP), neutropenia febril, infeksi bakteri penghasil kromosomal AmpC beta-laktamase',
    typicalDose: 'IV: 2 g tiap 8 jam infus 3 jam (Extended Infusion)',
    route: 'Injeksi IV/IM',
    stewardshipRecommendation: 'Tahan terhadap degranulasi AmpC; sesuaikan ketat dosis pada gangguan ginjal (awas neurotoksisitas ensefalopati)',
    restrictedApprovalRequired: true,
    kpraLevel: 'Dokter Spesialis'
  },
  {
    id: 'ciprofloxacin',
    name: 'Siprofloksasin',
    genericName: 'Ciprofloxacin HCl / Lactate',
    category: 'Watch',
    chemicalClass: 'Fluorokuinolon',
    primaryIndications: 'Pielonefritis akut, prostatitis bakterial kronis, demam enterik/tifoid resisten, infeksi intra-abdominal berat',
    typicalDose: 'Oral: 500-750 mg tiap 12 jam; IV: 400 mg tiap 8-12 jam',
    route: 'Oral & IV',
    stewardshipRecommendation: 'RESTRIKSI KETAT: Hindari untuk ISPA, bronkitis, atau ISK bawah sederhana; awas ruptur tendon & diseksi aorta',
    restrictedApprovalRequired: true,
    kpraLevel: 'Dokter Spesialis'
  },
  {
    id: 'levofloxacin',
    name: 'Levofloksasin',
    genericName: 'Levofloxacin Hemihydrate',
    category: 'Watch',
    chemicalClass: 'Fluorokuinolon Respiratorik',
    primaryIndications: 'Pneumonia komunitas (CAP) dengan komorbid berat, tuberkulosis resisten obat (TB-MDR), prostatitis',
    typicalDose: 'Oral/IV: 500-750 mg tiap 24 jam infus 60-90 menit',
    route: 'Oral & IV',
    stewardshipRecommendation: 'Waspada interaksi khelat dengan antasida/besi; monitor interval QTc EKG bila dikombinasi obat kardiovaskular',
    restrictedApprovalRequired: true,
    kpraLevel: 'Dokter Spesialis'
  },
  {
    id: 'meropenem',
    name: 'Meropenem',
    genericName: 'Meropenem Trihydrate',
    category: 'Watch',
    chemicalClass: 'Karbapenem Spektrum Ultra-Luas',
    primaryIndications: 'Sepsis berat / syok septik infeksi ESBL, meningitis bakterial nosokomial, infeksi intra-abdominal komplikasi',
    typicalDose: 'IV: 1 g tiap 8 jam (Infus diperpanjang 3 jam); Meningitis: 2 g tiap 8 jam',
    route: 'Injeksi IV/IM',
    stewardshipRecommendation: 'BENTENG UTAMA ESBL: Lakukan de-eskalasi segera dalam 48-72 jam bila hasil biakan darah/urin sensitif antibiotik spektrum lebih sempit',
    restrictedApprovalRequired: true,
    kpraLevel: 'Dokter Spesialis'
  },
  {
    id: 'ertapenem',
    name: 'Ertapenem',
    genericName: 'Ertapenem Sodium',
    category: 'Watch',
    chemicalClass: 'Karbapenem Grup 1 (Non-Pseudomonas)',
    primaryIndications: 'Infeksi intra-abdominal & ISK komplikasi akibat kuman ESBL rawat jalan (OPAT - Outpatient Parenteral Antimicrobial Therapy)',
    typicalDose: 'IV/IM: 1 g tiap 24 jam',
    route: 'Injeksi IV/IM',
    stewardshipRecommendation: 'Dosis 1x sehari memudahkan rawat jalan; TIDAK MEMILIKI aktivitas terhadap Pseudomonas dan Acinetobacter',
    restrictedApprovalRequired: true,
    kpraLevel: 'Dokter Spesialis'
  },
  {
    id: 'vancomycin',
    name: 'Vankomisin',
    genericName: 'Vancomycin HCl',
    category: 'Watch',
    chemicalClass: 'Glikopeptida',
    primaryIndications: 'Bakteremia MRSA terbukti/diduga, endokarditis MRSA, osteomielitis MRSA; Oral: Kolitis Clostridioides difficile',
    typicalDose: 'IV: Loading 20-35 mg/kgBB, lanjut 15-20 mg/kgBB tiap 8-12 jam (Target AUC/MIC: 400-600 mg·h/L)',
    route: 'Oral & IV',
    stewardshipRecommendation: 'Wajib Therapeutic Drug Monitoring (TDM); hindari infus cepat (< 60 menit) demi cegah Red Man Syndrome',
    restrictedApprovalRequired: true,
    kpraLevel: 'Dokter Spesialis'
  },
  {
    id: 'pip-tazo',
    name: 'Piperasilin-Tazobaktam',
    genericName: 'Piperacillin-Tazobactam (Tazocin)',
    category: 'Watch',
    chemicalClass: 'Antipseudomonas Penisilin + Beta-Laktamase Inhibitor',
    primaryIndications: 'HAP/VAP nosokomial, infeksi intra-abdominal nekrotikans, infeksi kaki diabetik berat polymicrobial',
    typicalDose: 'IV: 4.5 g tiap 6-8 jam infus diperpanjang 4 jam (Extended Infusion)',
    route: 'Injeksi IV/IM',
    stewardshipRecommendation: 'Kombinasi dengan Vankomisin terbukti melipatgandakan risiko Acute Kidney Injury (AKI); pantau fungsi ginjal ketat',
    restrictedApprovalRequired: true,
    kpraLevel: 'Dokter Spesialis'
  },
  {
    id: 'azithromycin',
    name: 'Azitromisin',
    genericName: 'Azithromycin Dihydrate',
    category: 'Watch',
    chemicalClass: 'Makrolida Azalida',
    primaryIndications: 'Pneumonia komunitas (kombinasi Beta-Laktam untuk cakupan atipikal), uretritis klamidia, diare traveller Campylobacter',
    typicalDose: 'Oral: 500 mg hari 1, lanjut 250 mg hari 2-5; IV: 500 mg tiap 24 jam',
    route: 'Oral & IV',
    stewardshipRecommendation: 'Waktu paruh jaringan sangat panjang (68 jam); efek imunomodulator antiinflamasi saluran napas kronis',
    restrictedApprovalRequired: false,
    kpraLevel: 'Dokter Spesialis'
  },

  // --- KATEGORI RESERVE (SENJATA TERAKHIR / LAST RESORT, BIAYA TINGGI, HANYA INFENSI MDR/XDR) ---
  {
    id: 'colistin',
    name: 'Kolistin (Polimiksin E)',
    genericName: 'Colistimethate Sodium (CMS)',
    category: 'Reserve',
    chemicalClass: 'Polipeptida Siklik Polimiksin',
    primaryIndications: 'Infeksi Carbapenem-Resistant Enterobacteriaceae (CRE), CR-Acinetobacter baumannii, XDR Pseudomonas aeruginosa',
    typicalDose: 'IV: Loading 9-12 juta IU (300-400 mg CBA), lanjut maintenance 4.5 juta IU tiap 12 jam (Titrasi ketat CrCl)',
    route: 'Injeksi IV/IM',
    stewardshipRecommendation: 'RESERVE KETAT KPRA: Hanya boleh dibuka bila resisten seluruh karbapenem; nefrotoksisitas & neurotoksisitas tinggi',
    restrictedApprovalRequired: true,
    kpraLevel: 'Persetujuan Khusus Komite PPRA'
  },
  {
    id: 'polymyxin-b',
    name: 'Polimiksin B',
    genericName: 'Polymyxin B Sulfate',
    category: 'Reserve',
    chemicalClass: 'Polipeptida Siklik Polimiksin',
    primaryIndications: 'Infeksi invasif bakteremia & sepsis kuman Gram-Negatif Pan-Drug Resistant (PDR / CRE)',
    typicalDose: 'IV: Loading 2.0-2.5 mg/kgBB infus 1 jam, lanjut 1.25-1.5 mg/kgBB tiap 12 jam',
    route: 'Injeksi IV/IM',
    stewardshipRecommendation: 'Diberikan dalam bentuk aktif (bukan prodrug), farmakokinetik tidak bergantung eliminasi ginjal; awas nefrotoksisitas',
    restrictedApprovalRequired: true,
    kpraLevel: 'Persetujuan Khusus Komite PPRA'
  },
  {
    id: 'linezolid',
    name: 'Linezolid',
    genericName: 'Linezolid (Zyvox)',
    category: 'Reserve',
    chemicalClass: 'Oksazolidinon',
    primaryIndications: 'Pneumonia nosokomial MRSA, Vancomycin-Resistant Enterococcus (VRE faecium), infeksi kulit MRSA komplikasi',
    typicalDose: 'Oral/IV: 600 mg tiap 12 jam (Bioavailabilitas oral 100% IV-to-Oral)',
    route: 'Oral & IV',
    stewardshipRecommendation: 'Cakupan penetrasi cairan paru alveolar unggul; pantau trombositopenia mingguan & interaksi serotonin syndrome',
    restrictedApprovalRequired: true,
    kpraLevel: 'Persetujuan Khusus Komite PPRA'
  },
  {
    id: 'tigecycline',
    name: 'Tigesiklin',
    genericName: 'Tigecycline (Tygacil)',
    category: 'Reserve',
    chemicalClass: 'Glisisiklin (Turunan Minosiklin)',
    primaryIndications: 'Infeksi intra-abdominal komplikasi CRE, infeksi kulit jaringan lunak MDR, Acinetobacter resisten karbapenem',
    typicalDose: 'IV: Loading 100 mg bolus infus, lanjut 50 mg tiap 12 jam infus 30-60 menit',
    route: 'Injeksi IV/IM',
    stewardshipRecommendation: 'Volume distribusi masif ke jaringan tetapi kadar serum darah RENDAH; JANGAN GUNAKAN UNTUK SEPSIS/BAKTEREMIA PRIMER!',
    restrictedApprovalRequired: true,
    kpraLevel: 'Persetujuan Khusus Komite PPRA'
  },
  {
    id: 'ceftazidime-avibactam',
    name: 'Seftazidim-Avibaktam',
    genericName: 'Ceftazidime-Avibactam (Zavicefta)',
    category: 'Reserve',
    chemicalClass: 'Sefalosporin + Non-Beta-Laktam Diazabicyclooctane Inhibitor',
    primaryIndications: 'Infeksi Carbapenem-Resistant Enterobacteriaceae (CRE) produsen enzim KPC & OXA-48, HAP/VAP MDR',
    typicalDose: 'IV: 2.5 g (2g/0.5g) tiap 8 jam infus 2 jam',
    route: 'Injeksi IV/IM',
    stewardshipRecommendation: 'Pilihan utama pengganti Colistin untuk kuman CRE KPC/OXA-48; TIDAK EFEKTIF terhadap metallo-beta-lactamase (NDM)',
    restrictedApprovalRequired: true,
    kpraLevel: 'Persetujuan Khusus Komite PPRA'
  },
  // --- ACCESS TAMBAHAN ---
  {
    id: 'penicillin-v',
    name: 'Fenoksimetilpenisilin (Penicillin V)',
    genericName: 'Phenoxymethylpenicillin Potassium',
    category: 'Access',
    chemicalClass: 'Natural Penicillin Oral',
    primaryIndications: 'Faringitis streptokokus grup A, profilaksis demam rematik berulang, infeksi gigi/odontogenik ringan',
    typicalDose: 'Oral: 250-500 mg tiap 6 jam saat perut kosong',
    route: 'Oral',
    stewardshipRecommendation: 'Lini pertama faringitis streptokokus; efikasi sangat baik dengan spektrum sempit tanpa merusak mikrobioma usus',
    restrictedApprovalRequired: false,
    kpraLevel: 'Apoteker / Dokter Umum'
  },
  {
    id: 'benzathine-penicillin',
    name: 'Benzatin Benzilpenisilin (Bicillin L-A)',
    genericName: 'Benzathine Penicillin G',
    category: 'Access',
    chemicalClass: 'Natural Penicillin Depot',
    primaryIndications: 'Sifilis primer/sekunder/laten, profilaksis sekunder demam rematik (tiap 3-4 minggu)',
    typicalDose: 'IM dalam: 2.4 juta IU dosis tunggal (Sifilis dini) atau 1.2 juta IU tiap 3-4 minggu (Demam rematik)',
    route: 'Injeksi IV/IM',
    stewardshipRecommendation: 'HANYA INTRAMUSKULAR (KONTRAINDIKASI IV: risiko emboli fatal); baku emas terapi sifilis tanpa resistensi',
    restrictedApprovalRequired: false,
    kpraLevel: 'Apoteker / Dokter Umum'
  },
  {
    id: 'cloxacillin',
    name: 'Kloksasilin / Oksasilin',
    genericName: 'Cloxacillin Sodium / Oxacillin',
    category: 'Access',
    chemicalClass: 'Penisilin Anti-Stafilokokus (Penicillinase-Resistant)',
    primaryIndications: 'Infeksi kulit/jaringan lunak stafilokokus MSSA, selulitis, impetigo, osteomielitis MSSA',
    typicalDose: 'Oral: 500 mg tiap 6 jam saat perut kosong; IV: 1-2 g tiap 4-6 jam',
    route: 'Oral & IV',
    stewardshipRecommendation: 'Pilihan utama MSSA bakterisid; jauh lebih superior dibanding Vankomisin untuk kuman stafilokokus sensitif metisilin',
    restrictedApprovalRequired: false,
    kpraLevel: 'Apoteker / Dokter Umum'
  },
  {
    id: 'cephalexin',
    name: 'Sefaleksin',
    genericName: 'Cephalexin Monohydrate',
    category: 'Access',
    chemicalClass: 'Sefalosporin Generasi 1 Oral',
    primaryIndications: 'Infeksi kulit MSSA/Streptokokus, mastitis laktasi, profilaksis infeksi saluran kemih',
    typicalDose: 'Oral: 500 mg tiap 6 jam atau 1000 mg tiap 12 jam',
    route: 'Oral',
    stewardshipRecommendation: 'Pilihan oral yang sangat aman untuk ibu hamil & menyusui dengan infeksi jaringan lunak',
    restrictedApprovalRequired: false,
    kpraLevel: 'Apoteker / Dokter Umum'
  },
  {
    id: 'chloramphenicol',
    name: 'Kloramfenikol',
    genericName: 'Chloramphenicol Sodium Succinate',
    category: 'Access',
    chemicalClass: 'Amfenikol',
    primaryIndications: 'Demam tifoid berat, meningitis bakterial di daerah sumber daya terbatas, abses otak',
    typicalDose: 'Oral/IV: 500-750 mg tiap 6 jam (50-100 mg/kgBB/hari terbagi)',
    route: 'Oral & IV',
    stewardshipRecommendation: 'Waspadai anemia aplastik idiosinkratik & Grey Baby Syndrome pada neonatus; pantau hitung jenis darah rutin',
    restrictedApprovalRequired: false,
    kpraLevel: 'Apoteker / Dokter Umum'
  },
  {
    id: 'nitrofurantoin',
    name: 'Nitrofurantoin',
    genericName: 'Nitrofurantoin Macrocrystals',
    category: 'Access',
    chemicalClass: 'Nitrofuran',
    primaryIndications: 'Sistitis akut non-komplikasi pada wanita, profilaksis ISK berulang',
    typicalDose: 'Oral: 100 mg tiap 12 jam bersama makanan selama 5 hari',
    route: 'Oral',
    stewardshipRecommendation: 'PILIHAN UTAMA SISTITIS TANPA SEPSIS: Konsentrasi urine masif tetapi kadar serum sangat rendah; KONTRAINDIKASI eGFR <30 mL/menit & pielonefritis',
    restrictedApprovalRequired: false,
    kpraLevel: 'Apoteker / Dokter Umum'
  },
  {
    id: 'fosfomycin-oral',
    name: 'Fosfomisin Trometamol (Oral)',
    genericName: 'Fosfomycin Tromethamine',
    category: 'Access',
    chemicalClass: 'Turunan Asam Fosfonat',
    primaryIndications: 'Sistitis bakterial akut tanpa komplikasi akibat E. coli (termasuk ESBL) dan Enterococcus faecalis',
    typicalDose: 'Oral: 3 g dosis tunggal dilarutkan dalam segelas air sebelum tidur',
    route: 'Oral',
    stewardshipRecommendation: 'Dosis tunggal praktis kepatuhan 100%; efektif membunuh kuman ESBL di kandung kemih tanpa perlu antibiotik IV',
    restrictedApprovalRequired: false,
    kpraLevel: 'Apoteker / Dokter Umum'
  },
  {
    id: 'spiramycin',
    name: 'Spiramisin',
    genericName: 'Spiramycin',
    category: 'Access',
    chemicalClass: 'Makrolida 16-Membered',
    primaryIndications: 'Toksoplasmosis pada ibu hamil (mencegah transmisi vertikal ke janin), infeksi kriptosporidiosis',
    typicalDose: 'Oral: 3 g (9 juta IU) per hari terbagi dalam 3-4 dosis',
    route: 'Oral',
    stewardshipRecommendation: 'Terapi baku emas pencegahan infeksi kongenital Toxoplasma gondii trimester 1 dan 2',
    restrictedApprovalRequired: false,
    kpraLevel: 'Apoteker / Dokter Umum'
  },
  {
    id: 'thiamphenicol',
    name: 'Tiamfenikol',
    genericName: 'Thiamphenicol',
    category: 'Access',
    chemicalClass: 'Amfenikol Sintetik',
    primaryIndications: 'Demam tifoid & paratifoid, infeksi saluran kemih gonokokus & non-gonokokus',
    typicalDose: 'Oral: 500 mg tiap 6-8 jam',
    route: 'Oral',
    stewardshipRecommendation: 'Risiko anemia aplastik lebih rendah dibanding kloramfenikol; eliminasi dominan lewat ginjal',
    restrictedApprovalRequired: false,
    kpraLevel: 'Apoteker / Dokter Umum'
  },

  // --- WATCH TAMBAHAN ---
  {
    id: 'cefuroxime',
    name: 'Sefuroksim (Oral & Injeksi)',
    genericName: 'Cefuroxime Axetil / Sodium',
    category: 'Watch',
    chemicalClass: 'Sefalosporin Generasi 2',
    primaryIndications: 'Pneumonia komunitas, eksaserbasi PPOK, profilaksis bedah kardiotorasik, penyakit Lyme',
    typicalDose: 'Oral: 500 mg tiap 12 jam; IV: 750 mg - 1.5 g tiap 8 jam',
    route: 'Oral & IV',
    stewardshipRecommendation: 'Cakupan Haemophilus influenzae & Moraxella catarrhalis stabil; alternatif profilaksis bedah bersih',
    restrictedApprovalRequired: true,
    kpraLevel: 'Dokter Spesialis'
  },
  {
    id: 'cefixime',
    name: 'Sefiksim (Oral)',
    genericName: 'Cefixime Trihydrate',
    category: 'Watch',
    chemicalClass: 'Sefalosporin Generasi 3 Oral',
    primaryIndications: 'Step-down oral pasca-Seftriakson IV pada demam tifoid, ISK bakterial, otitis media refrakter',
    typicalDose: 'Oral: 200 mg tiap 12 jam atau 400 mg sekali sehari',
    route: 'Oral',
    stewardshipRecommendation: 'RESTRIKSI: Jangan gunakan untuk faringitis biasa atau selulitis (aktivitas stafilokokus MSSA sangat lemah)',
    restrictedApprovalRequired: true,
    kpraLevel: 'Dokter Spesialis'
  },
  {
    id: 'moxifloxacin',
    name: 'Moksifloksasin',
    genericName: 'Moxifloxacin HCl',
    category: 'Watch',
    chemicalClass: 'Fluorokuinolon Generasi 4 (Respiratorik & Anaerob)',
    primaryIndications: 'Pneumonia komunitas berat, eksaserbasi bronkitis, infeksi intra-abdominal komplikasi, TB-MDR',
    typicalDose: 'Oral/IV: 400 mg sekali sehari infus 60 menit',
    route: 'Oral & IV',
    stewardshipRecommendation: 'Ekskresi dominan hepatobilier (TIDAK BOLEH UNTUK ISK); awas perpanjangan interval QTc jantung',
    restrictedApprovalRequired: true,
    kpraLevel: 'Dokter Spesialis'
  },
  {
    id: 'clarithromycin',
    name: 'Klaritromisin',
    genericName: 'Clarithromycin',
    category: 'Watch',
    chemicalClass: 'Makrolida',
    primaryIndications: 'Regimen eradikasi Helicobacter pylori (Triad/Quadruple), pneumonia atipikal, infeksi Mycobacterium avium (MAC)',
    typicalDose: 'Oral: 500 mg tiap 12 jam; H. pylori: 500 mg tiap 12 jam bersama PPI & Amoksisilin 14 hari',
    route: 'Oral',
    stewardshipRecommendation: 'Inhibitor kuat CYP3A4 & P-glikoprotein; awas lonjakan toksisitas Statin, Digoksin, & Karbamazepin',
    restrictedApprovalRequired: true,
    kpraLevel: 'Dokter Spesialis'
  },
  {
    id: 'teicoplanin',
    name: 'Teikoplanin',
    genericName: 'Teicoplanin',
    category: 'Watch',
    chemicalClass: 'Glikopeptida',
    primaryIndications: 'Bakteremia & osteomielitis MRSA, alternatif Vankomisin pada pasien intoleran Red Man Syndrome',
    typicalDose: 'IV/IM: Loading 6 mg/kg tiap 12 jam untuk 3 dosis, lanjut maintenance 6 mg/kg tiap 24 jam',
    route: 'Injeksi IV/IM',
    stewardshipRecommendation: 'Waktu paruh sangat panjang (100-170 jam); dapat diberikan intramuskular (IM) untuk rawat jalan OPAT',
    restrictedApprovalRequired: true,
    kpraLevel: 'Dokter Spesialis'
  },
  {
    id: 'daptomycin',
    name: 'Daptomisin',
    genericName: 'Daptomycin (Cubicin)',
    category: 'Watch',
    chemicalClass: 'Lipopeptida Siklik',
    primaryIndications: 'Bakteremia MRSA persisten, endokarditis sisi kanan katup trikuspid, infeksi VRE kulit komplikasi',
    typicalDose: 'IV: 6-10 mg/kgBB sekali sehari infus 30 menit (Titrasi CrCl ginjal)',
    route: 'Injeksi IV/IM',
    stewardshipRecommendation: 'KONTRAINDIKASI PNEUMONIA (diinaktivasi surfaktan paru); pantau CPK serial tiap minggu (risiko miopati/rhabdomyolysis)',
    restrictedApprovalRequired: true,
    kpraLevel: 'Dokter Spesialis'
  },
  {
    id: 'fosfomycin-iv',
    name: 'Fosfomisin Disodium (Injeksi IV)',
    genericName: 'Fosfomycin Disodium IV',
    category: 'Watch',
    chemicalClass: 'Turunan Asam Fosfonat Parenteral',
    primaryIndications: 'Terapi kombinasi infeksi MDR/XDR (CRE, MRSA, Pseudomonas) bakteremia, osteomielitis, meningitis',
    typicalDose: 'IV: 12-24 g/hari terbagi tiap 6-8 jam infus 60 menit',
    route: 'Injeksi IV/IM',
    stewardshipRecommendation: 'Penetrasi SSP/tulang luar biasa; mengandung beban natrium tinggi (14.5 mEq Na per gram obat) pantau hipernatremia & gagal jantung',
    restrictedApprovalRequired: true,
    kpraLevel: 'Dokter Spesialis'
  },
  {
    id: 'imipenem-cilastatin',
    name: 'Imipenem-Silastatin',
    genericName: 'Imipenem-Cilastatin Sodium',
    category: 'Watch',
    chemicalClass: 'Karbapenem + Inhibitor Dehidropeptidase Ginjal',
    primaryIndications: 'Sepsis berat polimikrobial intra-abdominal, infeksi kuman Gram-Positif & Gram-Negatif nosokomial',
    typicalDose: 'IV: 500 mg tiap 6 jam atau 1000 mg tiap 8 jam infus 40-60 menit',
    route: 'Injeksi IV/IM',
    stewardshipRecommendation: 'Aktivitas Enterococcus lebih kuat dari Meropenem; risiko kejang lebih tinggi pada gangguan ginjal/lesi SSP',
    restrictedApprovalRequired: true,
    kpraLevel: 'Dokter Spesialis'
  },
  {
    id: 'fluconazole',
    name: 'Flukonazol (Antifungal Stewardship)',
    genericName: 'Fluconazole',
    category: 'Watch',
    chemicalClass: 'Triazol Antijamur',
    primaryIndications: 'Kandidemia invasif (Candida albicans), meningitis kriptokokus, kandidiasis mukokutan refrakter',
    typicalDose: 'Oral/IV: Loading 800 mg (12 mg/kg), lanjut 400 mg (6 mg/kg) sekali sehari',
    route: 'Oral & IV',
    stewardshipRecommendation: 'Bioavailabilitas oral >90%; tidak efektif terhadap Candida krusei (resisten intrinsik) & C. glabrata dosis tinggi',
    restrictedApprovalRequired: true,
    kpraLevel: 'Dokter Spesialis'
  },

  // --- RESERVE TAMBAHAN ---
  {
    id: 'ceftolozane-tazobactam',
    name: 'Seftolozan-Tazobaktam (Zerbaxa)',
    genericName: 'Ceftolozane-Tazobactam',
    category: 'Reserve',
    chemicalClass: 'Sefalosporin Antipseudomonas Baru + BLI',
    primaryIndications: 'Infeksi Pseudomonas aeruginosa Multi-Drug Resistant (MDR/XDR), HAP/VAP Pseudomonas nosokomial berat',
    typicalDose: 'IV: 1.5 g (1g/0.5g) q8h; Pneumonia VAP: 3.0 g (2g/1g) tiap 8 jam infus 1 jam',
    route: 'Injeksi IV/IM',
    stewardshipRecommendation: 'SENJATA TERAKHIR PSEUDOMONAS RESISTEN KARBAPENEM: Menembus resistensi mutasi porin OprD & pompa efluks',
    restrictedApprovalRequired: true,
    kpraLevel: 'Persetujuan Khusus Komite PPRA'
  },
  {
    id: 'cefiderocol',
    name: 'Sefiderokol (Fetroja)',
    genericName: 'Cefiderocol (Siderophore Cephalosporin)',
    category: 'Reserve',
    chemicalClass: 'Siderofor Sefalosporin "Trojan Horse"',
    primaryIndications: 'Infeksi kuman Gram-Negatif Pan-Drug Resistant (PDR): CR-Acinetobacter, CRE produsen NDM/Metallo, XDR Pseudomonas',
    typicalDose: 'IV: 2 g tiap 8 jam infus diperpanjang 3 jam (Titrasi ketat CrCl)',
    route: 'Injeksi IV/IM',
    stewardshipRecommendation: 'RESERVE MUTLAK KPRA: Mengikat zat besi ekstraseluler untuk menyusup ke porin bakteri; simpan untuk kuman tanpa opsi terapi lain',
    restrictedApprovalRequired: true,
    kpraLevel: 'Persetujuan Khusus Komite PPRA'
  },
  {
    id: 'meropenem-vaborbactam',
    name: 'Meropenem-Vaborbaktam (Vabomere)',
    genericName: 'Meropenem-Vaborbactam',
    category: 'Reserve',
    chemicalClass: 'Karbapenem + Boronic Acid Beta-Lactamase Inhibitor',
    primaryIndications: 'Infeksi berat KPC-producing CRE (Klebsiella pneumoniae carbapenemase), ISK komplikasi CRE',
    typicalDose: 'IV: 4 g (2g Meropenem / 2g Vaborbactam) tiap 8 jam infus 3 jam',
    route: 'Injeksi IV/IM',
    stewardshipRecommendation: 'Vaborbaktam melindungi Meropenem dari degradasi enzim KPC; tidak aktif terhadap Metallo-beta-laktamase (NDM)',
    restrictedApprovalRequired: true,
    kpraLevel: 'Persetujuan Khusus Komite PPRA'
  },
  {
    id: 'eravacycline',
    name: 'Eravasiklin (Xerava)',
    genericName: 'Eravacycline Synthetic Fluorocycline',
    category: 'Reserve',
    chemicalClass: 'Sintetik Fluorosiklin',
    primaryIndications: 'Infeksi intra-abdominal komplikasi resisten ganda (CRE, Acinetobacter baumannii MDR, VRE)',
    typicalDose: 'IV: 1 mg/kgBB tiap 12 jam infus 60 menit',
    route: 'Injeksi IV/IM',
    stewardshipRecommendation: 'Potensi antibakteri 2-4x lebih kuat dari Tigesiklin dengan profil mual/muntah yang lebih minimal',
    restrictedApprovalRequired: true,
    kpraLevel: 'Persetujuan Khusus Komite PPRA'
  },
  {
    id: 'tedizolid',
    name: 'Tedizolid (Sivextro)',
    genericName: 'Tedizolid Phosphate',
    category: 'Reserve',
    chemicalClass: 'Oksazolidinon Generasi 2',
    primaryIndications: 'Infeksi struktur kulit akut bakterial (ABSSSI) akibat MRSA & galur Enterococcus resisten Linezolid',
    typicalDose: 'Oral/IV: 200 mg sekali sehari selama 6 hari',
    route: 'Oral & IV',
    stewardshipRecommendation: 'Durasi lebih singkat (6 hari vs 10-14 hari Linezolid) dengan risiko mielosupresi trombositopenia lebih rendah',
    restrictedApprovalRequired: true,
    kpraLevel: 'Persetujuan Khusus Komite PPRA'
  }

];

// ============================================================================
// 2. DATA PETA KUMAN & ANTIBIOGRAM RUMAH SAKIT
// ============================================================================
export const SAMPLE_HOSPITAL_ANTIBIOGRAM: PathogenAntibiogram[] = [
  {
    id: 'ecoli-esbl',
    name: 'Escherichia coli (ESBL-Positive)',
    gram: 'negative',
    shape: 'Bacillus / Batang',
    commonInfections: ['Infeksi Saluran Kemih (ISK) Komplikasi', 'Bakteremia / Urosepsis', 'Peritonitis Intra-Abdominal'],
    clinicalPearls: 'ESBL menghidrolisis seluruh penisilin, sefalosporin gen 1-4, dan aztreonam. Karbapenem (Meropenem/Ertapenem) adalah baku emas bakteremia ESBL. Untuk ISK bawah tanpa sepsis, Fosfomycin atau Nitrofurantoin oral dapat digunakan.',
    firstLineEmpiric: 'Meropenem 1g q8h atau Amikacin (ISK) / Ertapenem 1g q24h',
    resistanceMechanism: 'Produksi enzim Extended-Spectrum Beta-Lactamase (CTX-M, SHV, TEM)',
    testedIsolatesCount: 248,
    susceptibilities: [
      { antibiotic: 'Meropenem', percentS: 98, micBreakpoints: '<= 1 mcg/mL', interpretationHint: 'Pilihan Utama', note: 'Baku emas terapi definitif' },
      { antibiotic: 'Amikacin', percentS: 94, micBreakpoints: '<= 16 mcg/mL', interpretationHint: 'Sensitif', note: 'Alternatif hemat karbapenem untuk ISK' },
      { antibiotic: 'Fosfomycin Oral', percentS: 91, micBreakpoints: '<= 64 mcg/mL', interpretationHint: 'Sensitif', note: 'Hanya untuk sistitis ISK bawah' },
      { antibiotic: 'Nitrofurantoin', percentS: 88, micBreakpoints: '<= 32 mcg/mL', interpretationHint: 'Sensitif', note: 'Hanya untuk ISK non-komplikasi' },
      { antibiotic: 'Piperacillin-Tazobactam', percentS: 72, micBreakpoints: '<= 16 mcg/mL', interpretationHint: 'Intermediet', note: 'Hindari pada bakteremia berat (Inokulum effect)' },
      { antibiotic: 'Ciprofloxacin', percentS: 32, micBreakpoints: '<= 0.25 mcg/mL', interpretationHint: 'Resisten Tinggi', note: 'Ko-resistensi kuinolon sangat tinggi pada ESBL' },
      { antibiotic: 'Ceftriaxone', percentS: 4, micBreakpoints: '<= 1 mcg/mL', interpretationHint: 'Resisten Tinggi', note: 'Resisten intrinsik karena enzim ESBL' },
      { antibiotic: 'Ampicillin-Sulbactam', percentS: 28, micBreakpoints: '<= 8 mcg/mL', interpretationHint: 'Resisten Tinggi' }
    ]
  },
  {
    id: 'kpneumoniae-esbl',
    name: 'Klebsiella pneumoniae (ESBL-Positive)',
    gram: 'negative',
    shape: 'Bacillus / Batang',
    commonInfections: ['Hospital-Acquired Pneumonia (HAP/VAP)', 'Bakteremia Nosokomial', 'Abses Hepar Piogenik'],
    clinicalPearls: 'Kapsul polisakarida tebal memudahkan virulensi dan pembentukan biofilm pada kateter dan ventilator. Cek fenotipe resistensi karbapenem (CRE) dengan uji fenotipik mCIM atau Carba-NP.',
    firstLineEmpiric: 'Meropenem 1g q8h Extended Infusion 3 jam',
    resistanceMechanism: 'Produksi plasmid CTX-M-15 dan penurunan porin OmpK35/36',
    testedIsolatesCount: 195,
    susceptibilities: [
      { antibiotic: 'Colistin', percentS: 99, micBreakpoints: '<= 2 mcg/mL', interpretationHint: 'Pilihan Utama', note: 'Simpan untuk isolat resisten karbapenem' },
      { antibiotic: 'Meropenem', percentS: 92, micBreakpoints: '<= 1 mcg/mL', interpretationHint: 'Sensitif', note: 'Titrasi dosis extended infusion 3 jam' },
      { antibiotic: 'Amikacin', percentS: 89, micBreakpoints: '<= 16 mcg/mL', interpretationHint: 'Sensitif' },
      { antibiotic: 'Tigecycline', percentS: 84, micBreakpoints: '<= 2 mcg/mL', interpretationHint: 'Sensitif', note: 'Bagus untuk intra-abdominal, jelek di darah' },
      { antibiotic: 'Piperacillin-Tazobactam', percentS: 58, micBreakpoints: '<= 16 mcg/mL', interpretationHint: 'Intermediet' },
      { antibiotic: 'Levofloxacin', percentS: 29, micBreakpoints: '<= 0.5 mcg/mL', interpretationHint: 'Resisten Tinggi' },
      { antibiotic: 'Ceftriaxone', percentS: 2, micBreakpoints: '<= 1 mcg/mL', interpretationHint: 'Resisten Tinggi' }
    ]
  },
  {
    id: 'paeruginosa',
    name: 'Pseudomonas aeruginosa',
    gram: 'negative',
    shape: 'Bacillus / Batang',
    commonInfections: ['Ventilator-Associated Pneumonia (VAP)', 'Urosepsis Kateter Folley', 'Infeksi Luka Bakar Luas', 'Ektima Gangrenosum'],
    clinicalPearls: 'Memiliki resistensi intrinsik tinggi dan pompa efluks multidrug MexAB-OprM. Terapi empiris syok septik memerlukan DUA ANTIBIOTIK antipseudomonas dari kelas berbeda (misal Piperacillin-Tazobactam + Ciprofloxacin atau Amikacin).',
    firstLineEmpiric: 'Piperacillin-Tazobactam 4.5g q6h atau Meropenem 1g q8h + Amikacin',
    resistanceMechanism: 'Induksi mutasi AmpC, mutasi porin OprD, dan pompa efluks MexAB',
    testedIsolatesCount: 142,
    susceptibilities: [
      { antibiotic: 'Colistin', percentS: 97, micBreakpoints: '<= 2 mcg/mL', interpretationHint: 'Pilihan Utama', note: 'Cadangan infeksi MDR/XDR' },
      { antibiotic: 'Amikacin', percentS: 88, micBreakpoints: '<= 16 mcg/mL', interpretationHint: 'Sensitif', note: 'Aminoglikosida paling aktif melawan Pseudomonas' },
      { antibiotic: 'Piperacillin-Tazobactam', percentS: 82, micBreakpoints: '<= 16 mcg/mL', interpretationHint: 'Sensitif', note: 'Wajib Extended Infusion 4 jam' },
      { antibiotic: 'Ceftazidime', percentS: 79, micBreakpoints: '<= 8 mcg/mL', interpretationHint: 'Sensitif' },
      { antibiotic: 'Meropenem', percentS: 76, micBreakpoints: '<= 2 mcg/mL', interpretationHint: 'Sensitif', note: 'Penurunan sensitivitas akibat mutasi porin OprD' },
      { antibiotic: 'Cefepime', percentS: 74, micBreakpoints: '<= 8 mcg/mL', interpretationHint: 'Intermediet' },
      { antibiotic: 'Ciprofloxacin', percentS: 61, micBreakpoints: '<= 0.5 mcg/mL', interpretationHint: 'Intermediet' },
      { antibiotic: 'Gentamicin', percentS: 54, micBreakpoints: '<= 4 mcg/mL', interpretationHint: 'Resisten Tinggi' }
    ]
  },
  {
    id: 'abaumannii',
    name: 'Acinetobacter baumannii (CRAB)',
    gram: 'negative',
    shape: 'Coccobacillus',
    commonInfections: ['VAP Rawat ICU Lama', 'Infeksi Aliran Darah Sentral (CLABSI)', 'Infeksi Luka Pasca-Operasi'],
    clinicalPearls: 'Patogen nosokomial sangat tangguh yang bertahan di permukaan kering ICU berbulan-bulan. Seringkali resisten terhadap seluruh karbapenem (CRAB). Terapi baku emas kombinasi: Colistin IV + Tigecycline dosis tinggi atau Ampisilin-Sulbaktam dosis tinggi (Sulbaktam memiliki afinitas PBP1/PBP3 spesifik Acinetobacter).',
    firstLineEmpiric: 'Kombinasi Colistin IV + Ampicillin-Sulbactam dosis tinggi (3g q4h)',
    resistanceMechanism: 'Karbapenemase OXA-23, OXA-51, metallo-beta-laktamase, impermeabilitas dinding sel',
    testedIsolatesCount: 118,
    susceptibilities: [
      { antibiotic: 'Colistin', percentS: 93, micBreakpoints: '<= 2 mcg/mL', interpretationHint: 'Pilihan Utama', note: 'Lini pertahanan utama' },
      { antibiotic: 'Tigecycline', percentS: 78, micBreakpoints: '<= 2 mcg/mL', interpretationHint: 'Sensitif', note: 'Gunakan loading 200mg lanjut 100mg q12h' },
      { antibiotic: 'Ampicillin-Sulbactam', percentS: 44, micBreakpoints: '<= 8 mcg/mL', interpretationHint: 'Intermediet', note: 'Sulbaktam dosis tinggi 6-9g/hari bakterisid' },
      { antibiotic: 'Amikacin', percentS: 31, micBreakpoints: '<= 16 mcg/mL', interpretationHint: 'Resisten Tinggi' },
      { antibiotic: 'Meropenem', percentS: 18, micBreakpoints: '<= 2 mcg/mL', interpretationHint: 'Resisten Tinggi', note: 'Resistensi karbapenem ekstrem' },
      { antibiotic: 'Ciprofloxacin', percentS: 8, micBreakpoints: '<= 1 mcg/mL', interpretationHint: 'Resisten Tinggi' }
    ]
  },
  {
    id: 'saureus-mrsa',
    name: 'Staphylococcus aureus (MRSA)',
    gram: 'positive',
    shape: 'Coccus',
    commonInfections: ['Bakteremia Kateter Vena', 'Pneumonia Nekrotikans Nosokomial', 'Osteomielitis Kronis', 'Endokarditis Katup Jantung'],
    clinicalPearls: 'Gen mecA mengkode PBP2a (Penicillin-Binding Protein 2a) yang memiliki afinitas sangat rendah terhadap SELURUH BETA-LAKTAM (penisilin, sefalosporin 1-4, karbapenem). Vankomisin adalah terapi lini pertama parenteral, atau Linezolid untuk pneumonia paru.',
    firstLineEmpiric: 'Vancomycin IV (Target AUC/MIC 400-600) atau Linezolid 600mg q12h',
    resistanceMechanism: 'Mutasi gen mecA pada kaset kromosom SCCmec mengkode PBP2a',
    testedIsolatesCount: 164,
    susceptibilities: [
      { antibiotic: 'Linezolid', percentS: 100, micBreakpoints: '<= 2 mcg/mL', interpretationHint: 'Pilihan Utama', note: 'Pilihan terbaik pneumonia MRSA paru' },
      { antibiotic: 'Vancomycin', percentS: 99, micBreakpoints: '<= 2 mcg/mL', interpretationHint: 'Pilihan Utama', note: 'Waspada isolat VISA bila MIC >= 2 mcg/mL' },
      { antibiotic: 'Tigecycline', percentS: 98, micBreakpoints: '<= 0.5 mcg/mL', interpretationHint: 'Sensitif' },
      { antibiotic: 'Cotrimoxazole', percentS: 86, micBreakpoints: '<= 2/38 mcg/mL', interpretationHint: 'Sensitif', note: 'Pilihan oral step-down rawat jalan' },
      { antibiotic: 'Clindamycin', percentS: 64, micBreakpoints: '<= 0.5 mcg/mL', interpretationHint: 'Intermediet', note: 'Wajib uji D-Zone test untuk resistensi induksibel erm' },
      { antibiotic: 'Ciprofloxacin', percentS: 36, micBreakpoints: '<= 1 mcg/mL', interpretationHint: 'Resisten Tinggi' },
      { antibiotic: 'Oxacillin / Cefoxitin', percentS: 0, micBreakpoints: '<= 2 mcg/mL', interpretationHint: 'Resisten Tinggi', note: 'Resisten mutlak seluruh beta-laktam' }
    ]
  },
  {
    id: 'saureus-mssa',
    name: 'Staphylococcus aureus (MSSA)',
    gram: 'positive',
    shape: 'Coccus',
    commonInfections: ['Selulitis Kulit & Abses', 'Bakteremia MSSA', 'Profilaksis Bedah Ortopedi & Bedah Jantung'],
    clinicalPearls: 'Meskipun sensitif Vankomisin, BETA-LAKTAM (Sefazolin IV atau Oksasilin) TERBUKTI JELAS LEBIH UNGGUL membunuh kuman MSSA dibanding Vankomisin! Angka mortalitas bakteremia MSSA yang diterapi Vankomisin 2 kali lipat lebih tinggi dibanding terapi Sefazolin.',
    firstLineEmpiric: 'Cefazolin 2g IV q8h atau Cloxacillin oral',
    resistanceMechanism: 'Beta-laktamase penisilinase sederhana (dihambat oleh sefalosporin gen 1 & klavulanat)',
    testedIsolatesCount: 280,
    susceptibilities: [
      { antibiotic: 'Cefazolin', percentS: 100, micBreakpoints: '<= 8 mcg/mL', interpretationHint: 'Pilihan Utama', note: 'Pilihan paling bakterisid superior vs Vankomisin' },
      { antibiotic: 'Amoxicillin-Clavulanate', percentS: 100, micBreakpoints: '<= 4/2 mcg/mL', interpretationHint: 'Pilihan Utama' },
      { antibiotic: 'Vancomycin', percentS: 100, micBreakpoints: '<= 2 mcg/mL', interpretationHint: 'Sensitif', note: 'Hanya jika alergi berat penisilin' },
      { antibiotic: 'Cefadroxil Oral', percentS: 99, micBreakpoints: '<= 8 mcg/mL', interpretationHint: 'Sensitif', note: 'Step-down oral rawat jalan' },
      { antibiotic: 'Clindamycin', percentS: 88, micBreakpoints: '<= 0.5 mcg/mL', interpretationHint: 'Sensitif' },
      { antibiotic: 'Cotrimoxazole', percentS: 92, micBreakpoints: '<= 2/38 mcg/mL', interpretationHint: 'Sensitif' },
      { antibiotic: 'Ampicillin murni', percentS: 12, micBreakpoints: '<= 0.25 mcg/mL', interpretationHint: 'Resisten Tinggi', note: 'Rusak oleh enzim penisilinase stafilokokus' }
    ]
  },
  {
    id: 'kpneumoniae-cre',
    name: 'Klebsiella pneumoniae (CRE / Carbapenem-Resistant)',
    gram: 'negative',
    shape: 'Bacillus / Batang',
    commonInfections: ['Sepsis Rawat ICU', 'Ventilator-Associated Pneumonia (VAP)', 'Bakteremia Kateter Sentral (CLABSI)'],
    clinicalPearls: 'Isolat memproduksi enzim karbapenemase (KPC, OXA-48, atau NDM). Terapi lini pertama: Seftazidim-Avibaktam (untuk KPC/OXA-48) ATAU Kolistin kombinasi Meropenem dosis tinggi extended infusion jika MIC <= 8 mcg/mL.',
    firstLineEmpiric: 'Kombinasi Colistin loading 9 juta IU + Ceftazidime-Avibactam 2.5g q8h',
    resistanceMechanism: 'Karbapenemase KPC, NDM-1 (metallo), impermeabilitas membran luar',
    testedIsolatesCount: 86,
    susceptibilities: [
      { antibiotic: 'Colistin', percentS: 95, micBreakpoints: '<= 2 mcg/mL', interpretationHint: 'Pilihan Utama', note: 'Baku emas infeksi CRE' },
      { antibiotic: 'Ceftazidime-Avibactam', percentS: 89, micBreakpoints: '<= 8 mcg/mL', interpretationHint: 'Pilihan Utama', note: 'Efektif KPC & OXA-48 (Inaktif pada NDM)' },
      { antibiotic: 'Tigecycline', percentS: 82, micBreakpoints: '<= 2 mcg/mL', interpretationHint: 'Sensitif', note: 'Hanya untuk intra-abdominal & jaringan lunak' },
      { antibiotic: 'Amikacin', percentS: 62, micBreakpoints: '<= 16 mcg/mL', interpretationHint: 'Intermediet' },
      { antibiotic: 'Meropenem', percentS: 6, micBreakpoints: '<= 1 mcg/mL', interpretationHint: 'Resisten Tinggi', note: 'Resistensi karbapenem ekstrem' },
      { antibiotic: 'Ceftriaxone', percentS: 0, micBreakpoints: '<= 1 mcg/mL', interpretationHint: 'Resisten Tinggi' },
      { antibiotic: 'Ciprofloxacin', percentS: 4, micBreakpoints: '<= 0.25 mcg/mL', interpretationHint: 'Resisten Tinggi' }
    ]
  },
  {
    id: 'efaecalis-vse',
    name: 'Enterococcus faecalis (VSE)',
    gram: 'positive',
    shape: 'Coccus',
    commonInfections: ['Infeksi Saluran Kemih Terkomplikasi', 'Endokarditis Katup Jantung', 'Bakteremia Kateter', 'Biliari Sepsis'],
    clinicalPearls: 'E. faecalis mayoritas (>95%) SENSITIF AMPISILIN! Jangan otomatis memberikan Vankomisin jika hasil kultur menunjukkan E. faecalis sensitif ampisilin. Sinergisme bakterisid endokarditis: Ampisilin + Seftriakson atau Gentamisin.',
    firstLineEmpiric: 'Ampicillin 2g IV q4h + Ceftriaxone 2g IV q12h (Endokarditis)',
    resistanceMechanism: 'Resistensi intrinsik sefalosporin (monoterapi), toleransi aminoglikosida tingkat rendah',
    testedIsolatesCount: 145,
    susceptibilities: [
      { antibiotic: 'Ampicillin', percentS: 98, micBreakpoints: '<= 8 mcg/mL', interpretationHint: 'Pilihan Utama', note: 'Pilihan paling bakterisid superior vs Vankomisin' },
      { antibiotic: 'Vancomycin', percentS: 97, micBreakpoints: '<= 4 mcg/mL', interpretationHint: 'Pilihan Utama', note: 'Simpan untuk alergi penisilin berat' },
      { antibiotic: 'Linezolid', percentS: 100, micBreakpoints: '<= 2 mcg/mL', interpretationHint: 'Sensitif' },
      { antibiotic: 'Nitrofurantoin Oral', percentS: 96, micBreakpoints: '<= 32 mcg/mL', interpretationHint: 'Sensitif', note: 'Sangat baik untuk sistitis ISK bawah' },
      { antibiotic: 'Fosfomycin', percentS: 94, micBreakpoints: '<= 64 mcg/mL', interpretationHint: 'Sensitif' },
      { antibiotic: 'Ciprofloxacin', percentS: 42, micBreakpoints: '<= 1 mcg/mL', interpretationHint: 'Resisten Tinggi' }
    ]
  },
  {
    id: 'efaecium-vre',
    name: 'Enterococcus faecium (VRE / Vancomycin-Resistant)',
    gram: 'positive',
    shape: 'Coccus',
    commonInfections: ['Bakteremia Pasca-Transplantasi / Kemoterapi', 'Infeksi Saluran Kemih Nosokomial', 'Infeksi Luka Operasi'],
    clinicalPearls: 'E. faecium hampir selalu resisten terhadap Ampisilin dan jika membawa gen vanA/vanB menjadi resisten Vankomisin (VRE). Terapi pilihan: Linezolid 600mg q12h atau Daptomisin dosis tinggi (8-12 mg/kgBB).',
    firstLineEmpiric: 'Linezolid 600mg IV/PO q12h ATAU Daptomycin 8-10 mg/kgBB q24h',
    resistanceMechanism: 'Gen vanA (sintesis prekursor peptidoglikan D-Ala-D-Lac), mutasi PBP5',
    testedIsolatesCount: 78,
    susceptibilities: [
      { antibiotic: 'Linezolid', percentS: 99, micBreakpoints: '<= 2 mcg/mL', interpretationHint: 'Pilihan Utama', note: 'Pilihan oral & IV bioavailabilitas 100%' },
      { antibiotic: 'Daptomycin', percentS: 94, micBreakpoints: '<= 4 mcg/mL', interpretationHint: 'Pilihan Utama', note: 'Gunakan dosis tinggi 8-12 mg/kgBB' },
      { antibiotic: 'Tigecycline', percentS: 91, micBreakpoints: '<= 0.25 mcg/mL', interpretationHint: 'Sensitif' },
      { antibiotic: 'Vancomycin', percentS: 2, micBreakpoints: '<= 4 mcg/mL', interpretationHint: 'Resisten Tinggi', note: 'Fenotip VRE mutlak' },
      { antibiotic: 'Ampicillin', percentS: 5, micBreakpoints: '<= 8 mcg/mL', interpretationHint: 'Resisten Tinggi' }
    ]
  },
  {
    id: 'spneumoniae-prsp',
    name: 'Streptococcus pneumoniae (PRSP / Penicillin-Resistant)',
    gram: 'positive',
    shape: 'Coccus (Diplokokus)',
    commonInfections: ['Pneumonia Komunitas (CAP) Berat', 'Meningitis Bakterial Akut', 'Otitis Media Akut'],
    clinicalPearls: 'Resistensi penisilin pada pneumokokus akibat perubahan Penicillin-Binding Proteins (PBP1a, 2x, 2b). Pada meningitis: Seftriakson 2g q12h + Vankomisin 15-20 mg/kg q8-12h adalah kombinasi empiris wajib sampai MIC penisilin diketahui.',
    firstLineEmpiric: 'Ceftriaxone 2g IV q12h + Vancomycin 15 mg/kgBB q12h (Meningitis)',
    resistanceMechanism: 'Mutasi mozaik pada gen pengkode PBP1a, PBP2x, dan PBP2b',
    testedIsolatesCount: 160,
    susceptibilities: [
      { antibiotic: 'Vancomycin', percentS: 100, micBreakpoints: '<= 1 mcg/mL', interpretationHint: 'Pilihan Utama' },
      { antibiotic: 'Linezolid', percentS: 100, micBreakpoints: '<= 2 mcg/mL', interpretationHint: 'Pilihan Utama' },
      { antibiotic: 'Levofloxacin', percentS: 98, micBreakpoints: '<= 2 mcg/mL', interpretationHint: 'Sensitif', note: 'Kuinolon respiratorik unggul' },
      { antibiotic: 'Ceftriaxone (Pneumonia)', percentS: 92, micBreakpoints: '<= 1 mcg/mL', interpretationHint: 'Sensitif' },
      { antibiotic: 'Ceftriaxone (Meningitis)', percentS: 78, micBreakpoints: '<= 0.5 mcg/mL', interpretationHint: 'Intermediet', note: 'Breakpoint meningitis jauh lebih ketat' },
      { antibiotic: 'Penicillin G', percentS: 64, micBreakpoints: '<= 0.06 mcg/mL', interpretationHint: 'Intermediet' },
      { antibiotic: 'Azithromycin', percentS: 58, micBreakpoints: '<= 0.5 mcg/mL', interpretationHint: 'Resisten Tinggi', note: 'Resistensi makrolida pneumokokus tinggi' }
    ]
  },
  {
    id: 'bcepacia',
    name: 'Burkholderia cepacia complex',
    gram: 'negative',
    shape: 'Bacillus / Batang',
    commonInfections: ['Infeksi Paru Kistik Fibrosis', 'Bakteremia Nosokomial Cairan Infus', 'Pneumonia Pasien Ventilator'],
    clinicalPearls: 'MEMILIKI RESISTENSI INTRINSIK TERHADAP KOLISTIN & AMINOGLIKOSIDA! Jangan pernah meresepkan Colistin atau Amikacin. Pilihan utama baku emas: Kotrimoksazol (TMP-SMX) atau Seftazidim dosis tinggi.',
    firstLineEmpiric: 'Cotrimoxazole IV (15 mg/kg/hari TMP) ATAU Ceftazidime 2g q8h',
    resistanceMechanism: 'Perubahan membran lipid A (bebas muatan negatif) & pompa efluks resistensi kolistin intrinsik',
    testedIsolatesCount: 52,
    susceptibilities: [
      { antibiotic: 'Cotrimoxazole (TMP-SMX)', percentS: 92, micBreakpoints: '<= 2/38 mcg/mL', interpretationHint: 'Pilihan Utama', note: 'Baku emas terapi Burkholderia' },
      { antibiotic: 'Ceftazidime', percentS: 85, micBreakpoints: '<= 8 mcg/mL', interpretationHint: 'Sensitif', note: 'Pilihan lini pertama alternatif' },
      { antibiotic: 'Meropenem', percentS: 81, micBreakpoints: '<= 4 mcg/mL', interpretationHint: 'Sensitif' },
      { antibiotic: 'Levofloxacin', percentS: 76, micBreakpoints: '<= 2 mcg/mL', interpretationHint: 'Sensitif' },
      { antibiotic: 'Colistin', percentS: 0, micBreakpoints: '<= 2 mcg/mL', interpretationHint: 'Resisten Tinggi', note: 'RESISTEN INTRINSIK MUTLAK' },
      { antibiotic: 'Gentamicin / Amikacin', percentS: 0, micBreakpoints: '<= 4 mcg/mL', interpretationHint: 'Resisten Tinggi', note: 'RESISTEN INTRINSIK MUTLAK' }
    ]
  },
  {
    id: 'smaltophilia',
    name: 'Stenotrophomonas maltophilia',
    gram: 'negative',
    shape: 'Bacillus / Batang',
    commonInfections: ['Pneumonia Ventilator ICU Pasca-Karbapenem', 'Bakteremia Kateter Kanker', 'Infeksi Saluran Napas Kronis'],
    clinicalPearls: 'MEMILIKI RESISTENSI INTRINSIK TERHADAP SELURUH KARBAPENEM (memproduksi enzim L1 metallo-beta-lactamase)! Sering muncul setelah pasien mendapat terapi Meropenem lama. Terapi utama: Kotrimoksazol dosis tinggi.',
    firstLineEmpiric: 'Cotrimoxazole IV (15 mg/kg/hari TMP) +/- Levofloxacin 750mg q24h',
    resistanceMechanism: 'Produksi enzim L1 metallo-beta-lactamase & L2 cephalosporinase (resisten karbapenem bawaan)',
    testedIsolatesCount: 68,
    susceptibilities: [
      { antibiotic: 'Cotrimoxazole (TMP-SMX)', percentS: 94, micBreakpoints: '<= 2/38 mcg/mL', interpretationHint: 'Pilihan Utama', note: 'Terapi baku emas' },
      { antibiotic: 'Levofloxacin', percentS: 84, micBreakpoints: '<= 2 mcg/mL', interpretationHint: 'Sensitif', note: 'Alternatif jika alergi sulfa' },
      { antibiotic: 'Minocycline', percentS: 95, micBreakpoints: '<= 4 mcg/mL', interpretationHint: 'Sensitif' },
      { antibiotic: 'Ceftazidime', percentS: 38, micBreakpoints: '<= 8 mcg/mL', interpretationHint: 'Resisten Tinggi' },
      { antibiotic: 'Meropenem', percentS: 0, micBreakpoints: '<= 1 mcg/mL', interpretationHint: 'Resisten Tinggi', note: 'RESISTEN INTRINSIK MUTLAK' },
      { antibiotic: 'Colistin', percentS: 15, micBreakpoints: '<= 2 mcg/mL', interpretationHint: 'Resisten Tinggi' }
    ]
  },
  {
    id: 'cdifficile',
    name: 'Clostridioides difficile',
    gram: 'positive',
    shape: 'Bacillus / Batang (Anaerob)',
    commonInfections: ['Kolitis Pseudomembranosa Pasca-Antibiotik', 'Diare Berdarah Nosokomial', 'Megakolon Toksik'],
    clinicalPearls: 'Dipicu oleh peresepan antibiotik spektrum luas (Kuinolon, Sefalosporin gen 3, Klindamisin). HENTIKAN antibiotik pemicu! Terapi lini pertama: Vankomisin ORAL 125mg q6h (Vankomisin IV TIDAK DIEKSKRESI KE LUMEN USUS!) atau Fidaksomisin.',
    firstLineEmpiric: 'Vancomycin ORAL 125 mg tiap 6 jam selama 10 hari',
    resistanceMechanism: 'Pembentukan spora tahan asam dan produksi eksotoksin A (enterotoksin) & toksin B (sitotoksin)',
    testedIsolatesCount: 94,
    susceptibilities: [
      { antibiotic: 'Vancomycin Oral', percentS: 100, micBreakpoints: '<= 2 mcg/mL', interpretationHint: 'Pilihan Utama', note: 'Wajib ORAL, bukan IV!' },
      { antibiotic: 'Metronidazole Oral', percentS: 88, micBreakpoints: '<= 8 mcg/mL', interpretationHint: 'Sensitif', note: 'Hanya jika vankomisin oral tidak tersedia' },
      { antibiotic: 'Vancomycin IV', percentS: 0, micBreakpoints: '<= 2 mcg/mL', interpretationHint: 'Resisten Tinggi', note: 'TIDAK EFEKTIF (tidak masuk ke lumen usus)' }
    ]
  },
  {
    id: 'styphi',
    name: 'Salmonella enterica serovar Typhi',
    gram: 'negative',
    shape: 'Bacillus / Batang',
    commonInfections: ['Demam Tifoid Berat', 'Perforasi Usus Ileus', 'Sepsis Salmonella'],
    clinicalPearls: 'Waspada fenotipe NARST (Nalidixic Acid Resistant S. typhi) yang berkorelasi dengan penurunan kepekaan Siprofloksasin/Levofloksasin. Terapi lini pertama demam tifoid berat: Seftriakson 2-4g/hari IV selama 7-10 hari atau Azitromisin oral.',
    firstLineEmpiric: 'Ceftriaxone 2g IV q24h ATAU Azithromycin 1g oral hari 1 lanjut 500mg',
    resistanceMechanism: 'Mutasi gen gyrA / parC (resistensi kuinolon), plasmid MDR (kloramfenikol, ampisilin, kotrimoksazol)',
    testedIsolatesCount: 180,
    susceptibilities: [
      { antibiotic: 'Ceftriaxone', percentS: 99, micBreakpoints: '<= 1 mcg/mL', interpretationHint: 'Pilihan Utama', note: 'Pilihan utama tifoid rawat inap' },
      { antibiotic: 'Azithromycin', percentS: 97, micBreakpoints: '<= 16 mcg/mL', interpretationHint: 'Pilihan Utama', note: 'Pilihan oral terbaik eliminasi karier' },
      { antibiotic: 'Meropenem', percentS: 100, micBreakpoints: '<= 1 mcg/mL', interpretationHint: 'Sensitif' },
      { antibiotic: 'Ciprofloxacin', percentS: 72, micBreakpoints: '<= 0.06 mcg/mL', interpretationHint: 'Intermediet', note: 'Penurunan kepekaan kuinolon meluas' },
      { antibiotic: 'Chloramphenicol', percentS: 78, micBreakpoints: '<= 8 mcg/mL', interpretationHint: 'Sensitif', note: 'Sensitivitas klasik masih baik' },
      { antibiotic: 'Ampicillin', percentS: 68, micBreakpoints: '<= 8 mcg/mL', interpretationHint: 'Intermediet' }
    ]
  }

];

// ============================================================================
// 3. DATA ALUR AUDIT KUALITATIF GYSSENS (KEMENKES & STANDAR INTERNASIONAL)
// ============================================================================
export const GYSSENS_CATEGORIES: GyssensCategoryInfo[] = [
  {
    category: 'VI',
    code: 'Kategori VI',
    title: 'Data Rekam Medis Tidak Lengkap',
    description: 'Data catatan medis, hasil laboratorium penunjang, atau riwayat pemberian obat tidak lengkap sehingga peresepan antibiotik tidak dapat dievaluasi secara objektif.',
    color: 'border-slate-400 bg-slate-50 text-slate-800 dark:bg-slate-900/50 dark:text-slate-200',
    recommendation: 'Lengkapi rekam medis pasien (catatan CPPT, suhu, lekosit, kultur kuman, jam pemberian obat) sebelum audit dapat dilanjutkan.',
    actionRequired: 'Edukasi dokter penanggung jawab pelayanan (DPJP) mengenai kelengkapan rekam medis akreditasi.'
  },
  {
    category: 'V',
    code: 'Kategori V',
    title: 'Tidak Ada Indikasi Penggunaan Antibiotik',
    description: 'Pasien diberikan antibiotik padahal tidak ditemukan bukti infeksi bakteri (misalnya infeksi virus murni seperti common cold, demam berdarah dengue tanpa komplikasi, atau inflamasi non-infeksi).',
    color: 'border-rose-500 bg-rose-50 text-rose-900 dark:bg-rose-950/50 dark:text-rose-200',
    recommendation: 'HENTIKAN ANTIBIOTIK SEGERA! Penggunaan antibiotik tanpa indikasi mempercepat timbulnya resistensi kuman dan memicu efek samping yang tidak perlu.',
    actionRequired: 'Konfirmasi DPJP dan rekomendasikan penghentian antibiotik (Stop Order) serta terapi suportif simptomatis.'
  },
  {
    category: 'IVA',
    code: 'Kategori IV-A',
    title: 'Ada Antibiotik Lain yang Lebih Efektif',
    description: 'Antibiotik yang dipilih memiliki efikasi klinis lebih rendah atau penetrasi jaringan suboptimal dibandingkan antibiotik lini pertama baku emas untuk penyakit tersebut.',
    color: 'border-amber-500 bg-amber-50 text-amber-900 dark:bg-amber-950/50 dark:text-amber-200',
    recommendation: 'Ganti ke regimen baku emas (contoh: mengganti Vankomisin ke Sefazolin pada bakteremia MSSA terbukti).',
    actionRequired: 'Rekomendasikan penggantian antibiotik yang memiliki daya bunuh bakterisid dan penetrasi organ lebih tinggi.'
  },
  {
    category: 'IVB',
    code: 'Kategori IV-B',
    title: 'Ada Antibiotik Lain yang Kurang Toksik / Lebih Aman',
    description: 'Antibiotik yang digunakan memiliki profil toksisitas tinggi (nefrotoksik, ototoksik, hepatotoksik) padahal tersedia alternatif lain yang jauh lebih aman dengan efikasi setara.',
    color: 'border-amber-500 bg-amber-50 text-amber-900 dark:bg-amber-950/50 dark:text-amber-200',
    recommendation: 'Ganti ke agen yang lebih aman (contoh: mengganti Aminoglikosida ke Sefalosporin pada pasien geriatri dengan gangguan ginjal).',
    actionRequired: 'Evaluasi klirens ginjal, faktor risiko toksisitas organ, dan sarankan alternatif yang lebih ramah organ.'
  },
  {
    category: 'IVC',
    code: 'Kategori IV-C',
    title: 'Ada Antibiotik Lain yang Lebih Murah (Cost-Effective)',
    description: 'Tersedia pilihan antibiotik generik / formularium nasional lain dengan efikasi dan keamanan yang setara tetapi dengan biaya pengobatan yang jauh lebih ekonomis.',
    color: 'border-amber-500 bg-amber-50 text-amber-900 dark:bg-amber-950/50 dark:text-amber-200',
    recommendation: 'Ganti ke obat dengan biaya lebih terjangkau sesuai Formularium RS / Fornas tanpa mengorbankan kualitas kesembuhan pasien.',
    actionRequired: 'Rekomendasikan substitusi generik atau obat formularium rumah sakit.'
  },
  {
    category: 'IVD',
    code: 'Kategori IV-D',
    title: 'Spektrum Terlalu Luas (Butuh De-eskalasi)',
    description: 'Hasil biakan mikrobiologi dan uji kepekaan telah terbit dan menunjukkan kuman peka terhadap antibiotik spektrum sempit, namun pasien masih dipertahankan pada antibiotik spektrum luas.',
    color: 'border-amber-500 bg-amber-50 text-amber-900 dark:bg-amber-950/50 dark:text-amber-200',
    recommendation: 'LAKUKAN DE-ESKALASI! Turunkan antibiotik spektrum luas (misal Meropenem) ke spektrum sempit terarah (misal Ceftriaxone / Ampicillin) sesuai hasil kultur.',
    actionRequired: 'Kirimkan lembar rekomendasi de-eskalasi Apoteker Klinis KPRA kepada DPJP dalam waktu 1x24 jam paska hasil kultur terbit.'
  },
  {
    category: 'IIIA',
    code: 'Kategori III-A',
    title: 'Durasi Pemberian Terlalu Panjang',
    description: 'Pemberian antibiotik dilanjutkan melampaui durasi terapi yang direkomendasikan panduan klinis (misal profilaksis bedah diteruskan > 24 jam pasca-operasi, atau terapi CAP diteruskan > 7-10 hari saat pasien sudah stabil).',
    color: 'border-orange-500 bg-orange-50 text-orange-900 dark:bg-orange-950/50 dark:text-orange-200',
    recommendation: 'Hentikan antibiotik segera. Pasien telah memenuhi kriteria klinis sembuh (bebas demam > 48 jam, lekosit membaik, tanda infeksi teratasi).',
    actionRequired: 'Lakukan Automatic Stop-Order atau konfirmasi penghentian kepada DPJP.'
  },
  {
    category: 'IIIB',
    code: 'Kategori III-B',
    title: 'Durasi Pemberian Terlalu Singkat',
    description: 'Antibiotik dihentikan sebelum masa eradikasi kuman tercapai tanpa justifikasi klinis yang jelas, berisiko memicu kekambuhan infeksi (*relapse*) dan seleksi galur resisten.',
    color: 'border-orange-500 bg-orange-50 text-orange-900 dark:bg-orange-950/50 dark:text-orange-200',
    recommendation: 'Lanjutkan antibiotik hingga durasi kuratif minimal tercapai (misal endokarditis, osteomielitis, atau infeksi kuman berat).',
    actionRequired: 'Edukasi pentingnya menuntaskan durasi terapi sesuai patogen infeksi.'
  },
  {
    category: 'IIA',
    code: 'Kategori II-A',
    title: 'Dosis Pemberian Tidak Tepat (Underdose / Overdose)',
    description: 'Dosis obat terlalu rendah sehingga tidak mencapai target farmakokinetik/farmakodinamik (PK/PD), atau dosis terlalu tinggi melebihi batas aman yang memicu toksisitas.',
    color: 'border-yellow-500 bg-yellow-50 text-yellow-900 dark:bg-yellow-950/50 dark:text-yellow-200',
    recommendation: 'Sesuaikan dosis berdasarkan berat badan, luas permukaan tubuh, atau klirens kreatinin ginjal pasien.',
    actionRequired: 'Hitung ulang CrCl Cockcroft-Gault dan berikan rekomendasi penyesuaian dosis kepada dokter.'
  },
  {
    category: 'IIB',
    code: 'Kategori II-B',
    title: 'Interval Pemberian Tidak Tepat (Frekuensi Salah)',
    description: 'Frekuensi pemberian antibiotik tidak sesuai dengan sifat waktu paruh dan parameter PK/PD obat (misal antibiotik time-dependent T>MIC seperti Ampicillin diberikan tiap 12 jam padahal seharusnya tiap 6 jam).',
    color: 'border-yellow-500 bg-yellow-50 text-yellow-900 dark:bg-yellow-950/50 dark:text-yellow-200',
    recommendation: 'Koreksi frekuensi pemberian agar kadar obat dalam plasma berada di atas MIC sepanjang interval dosis yang dibutuhkan.',
    actionRequired: 'Ubah jadwal pemberian etiket di farmasi dan edukasikan perawat ruangan.'
  },
  {
    category: 'IIC',
    code: 'Kategori II-C',
    title: 'Rute Pemberian Tidak Tepat (Waktunya IV-to-Oral Switch)',
    description: 'Pasien masih diberikan antibiotik intravena mahal dan invasif padahal saluran cerna sudah berfungsi normal, pasien sadar, dan hemodinamik stabil dengan obat oral bioavailabilitas tinggi.',
    color: 'border-yellow-500 bg-yellow-50 text-yellow-900 dark:bg-yellow-950/50 dark:text-yellow-200',
    recommendation: 'Lakukan IV-to-Oral Switch! Konversi ke sediaan oral (misal Ciprofloxacin, Levofloxacin, Metronidazole, Linezolid yang memiliki bioavailabilitas > 90%).',
    actionRequired: 'Hemat biaya rawat inap, kurangi risiko infeksi flebitis kateter, dan percepat kepulangan pasien.'
  },
  {
    category: 'I',
    code: 'Kategori I',
    title: 'Saat / Waktu Pemberian Tidak Tepat',
    description: 'Waktu pemberian antibiotik tidak sinkron dengan prosedur medis (misalnya antibiotik profilaksis bedah diberikan sesudah insisi dibuat atau > 2 jam sebelum operasi, sehingga kadar puncak di jaringan insisi gagal tercapai).',
    color: 'border-blue-500 bg-blue-50 text-blue-900 dark:bg-blue-950/50 dark:text-blue-200',
    recommendation: 'Untuk profilaksis bedah, berikan antibiotik intravena (misal Sefazolin) tepat dalam rentang 30-60 menit SEBELUM pisau bedah menginsisi kulit.',
    actionRequired: 'Koordinasi dengan tim bedah dan anastesi di kamar operasi (OK).'
  },
  {
    category: '0',
    code: 'Kategori 0',
    title: 'Penggunaan Antibiotik Tepat & Bijak (Appropriate)',
    description: 'Penggunaan antibiotik telah memenuhi seluruh kriteria kerasionalan: ada indikasi infeksi, pemilihan obat tepat sasaran, dosis, interval, rute, waktu pemberian, dan durasi sesuai standar baku emas PPRA.',
    color: 'border-emerald-500 bg-emerald-50 text-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-200',
    recommendation: 'Pertahankan dan lanjutkan monitoring klinis hingga terapi tuntas. Dokumentasikan sebagai keberhasilan implementasi program stewardship antibiotik.',
    actionRequired: 'Tidak ada intervensi korektif yang dibutuhkan. Pantau tanda vital dan parameter perbaikan laboratorium.'
  }
];

// ============================================================================
// 4. DATA PANDUAN CLSI / EUCAST & OPTIMASI PK/PD
// ============================================================================
export const PKPD_OPTIMIZATION_GUIDELINES: PkPdCategoryInfo[] = [
  {
    indexType: 'Time-Dependent (T > MIC)',
    primaryClasses: 'Penisilin, Sefalosporin, Karbapenem (Beta-Laktam), Aztreonam',
    targetGoal: 'Persentase waktu kadar obat bebas dalam darah berada di atas konsentrasi hambat minimal (%fT > MIC) minimal 40-70% dari interval dosis',
    optimizationStrategy: 'Perpanjang durasi infus (Extended Infusion 3-4 jam) atau Continuous Infusion 24 jam; BUKAN dengan menaikkan dosis puncak!',
    clinicalExamples: 'Meropenem 1g IV drip selama 3 JAM (bukan bolus 30 menit); Piperacillin-Tazobactam 4.5g drip selama 4 JAM tiap 8 jam',
    monitoringKey: 'Memaksimalkan waktu kontak kuman dengan antibiotik; meningkatkan kesembuhan klinis sepsis berat & kuman MIC tinggi'
  },
  {
    indexType: 'Concentration-Dependent (Cmax / MIC)',
    primaryClasses: 'Aminoglikosida (Gentamisin, Amikasin, Tobramisin), Metronidazol, Daptomisin',
    targetGoal: 'Rasio konsentrasi puncak darah terhadap MIC (Cmax / MIC) mencapai minimal 8 - 10 kali lipat',
    optimizationStrategy: 'Berikan DOSIS TUNGGAL HARIAN TINGGI (Once-Daily High Dose); manfaatkan efek Post-Antibiotic Effect (PAE) yang panjang',
    clinicalExamples: 'Gentamisin 5-7 mg/kgBB sekali sehari (bukan 1-1.5 mg/kg tiap 8 jam); Amikasin 15-20 mg/kgBB sekali sehari',
    monitoringKey: 'Kadar puncak tinggi membunuh kuman secara cepat; jeda waktu panjang memungkinkan regenerasi sel tubulus ginjal (cegah nefrotoksisitas)'
  },
  {
    indexType: 'Exposure-Dependent (AUC24 / MIC)',
    primaryClasses: 'Vankomisin, Fluorokuinolon (Siprofloksasin, Levofloksasin), Tigesiklin, Kolistin',
    targetGoal: 'Area di bawah kurva konsentrasi plasma selama 24 jam dibagi MIC (AUC24 / MIC) mencapai target spesifik (Vankomisin: 400 - 600 mg·h/L)',
    optimizationStrategy: 'Optimasi dosis total 24 jam harian; Therapeutic Drug Monitoring (TDM) kadar palung (trough) atau perhitungan Bayesian AUC',
    clinicalExamples: 'Vankomisin loading 25-30 mg/kg lanjut dosis terbagi dengan pemantauan TDM AUC24; Levofloksasin 750 mg sekali sehari',
    monitoringKey: 'Keseimbangan antara pembunuhan bakteri total 24 jam tanpa melampaui batas toksisitas nefrotoksik (AUC > 600)'
  }
];

// ============================================================================
// 5. DATA STANDAR DEFINED DAILY DOSE (DDD) WHO
// ============================================================================
export const WHO_DDD_DATABASE: WhoDddItem[] = [
  { id: 'ddd-amox-oral', antibioticName: 'Amoxicillin Oral', atcCode: 'J01CA04', route: 'Oral', dddValueGrams: 1.5, unit: 'g', category: 'Access', clinicalNote: 'Setara 500 mg tiap 8 jam' },
  { id: 'ddd-amox-clav', antibioticName: 'Amoxicillin-Clavulanate Oral', atcCode: 'J01CR02', route: 'Oral', dddValueGrams: 1.5, unit: 'g', category: 'Access', clinicalNote: 'Dihitung berdasarkan fraksi amoksisilin' },
  { id: 'ddd-amp-iv', antibioticName: 'Ampicillin Parenteral', atcCode: 'J01CA01', route: 'Parenteral', dddValueGrams: 2.0, unit: 'g', category: 'Access', clinicalNote: 'Dosis harian standar dewasa' },
  { id: 'ddd-cefazolin-iv', antibioticName: 'Cefazolin Parenteral', atcCode: 'J01DB04', route: 'Parenteral', dddValueGrams: 3.0, unit: 'g', category: 'Access', clinicalNote: 'Setara 1 g tiap 8 jam' },
  { id: 'ddd-cefadroxil-oral', antibioticName: 'Cefadroxil Oral', atcCode: 'J01DB05', route: 'Oral', dddValueGrams: 2.0, unit: 'g', category: 'Access', clinicalNote: 'Setara 1000 mg tiap 12 jam' },
  { id: 'ddd-ceftriaxone-iv', antibioticName: 'Ceftriaxone Parenteral', atcCode: 'J01DD04', route: 'Parenteral', dddValueGrams: 2.0, unit: 'g', category: 'Watch', clinicalNote: 'Baku emas DDD WHO: 2 g/hari' },
  { id: 'ddd-cefotaxime-iv', antibioticName: 'Cefotaxime Parenteral', atcCode: 'J01DD01', route: 'Parenteral', dddValueGrams: 4.0, unit: 'g', category: 'Watch', clinicalNote: 'Setara 1-2 g tiap 8 jam' },
  { id: 'ddd-ceftazidime-iv', antibioticName: 'Ceftazidime Parenteral', atcCode: 'J01DD02', route: 'Parenteral', dddValueGrams: 4.0, unit: 'g', category: 'Watch', clinicalNote: 'Setara 2 g tiap 12 jam atau 1-2 g q8h' },
  { id: 'ddd-cefepime-iv', antibioticName: 'Cefepime Parenteral', atcCode: 'J01DE01', route: 'Parenteral', dddValueGrams: 4.0, unit: 'g', category: 'Watch', clinicalNote: 'Setara 2 g tiap 12 jam' },
  { id: 'ddd-meropenem-iv', antibioticName: 'Meropenem Parenteral', atcCode: 'J01DH02', route: 'Parenteral', dddValueGrams: 3.0, unit: 'g', category: 'Watch', clinicalNote: 'Baku emas DDD WHO: 3 g/hari (1 g q8h)' },
  { id: 'ddd-cipro-oral', antibioticName: 'Ciprofloxacin Oral', atcCode: 'J01MA02', route: 'Oral', dddValueGrams: 1.0, unit: 'g', category: 'Watch', clinicalNote: 'Setara 500 mg tiap 12 jam' },
  { id: 'ddd-cipro-iv', antibioticName: 'Ciprofloxacin Parenteral', atcCode: 'J01MA02', route: 'Parenteral', dddValueGrams: 0.8, unit: 'g', category: 'Watch', clinicalNote: 'Setara 400 mg tiap 12 jam' },
  { id: 'ddd-levo-oral', antibioticName: 'Levofloxacin Oral', atcCode: 'J01MA12', route: 'Oral', dddValueGrams: 0.5, unit: 'g', category: 'Watch', clinicalNote: 'Setara 500 mg tiap 24 jam' },
  { id: 'ddd-levo-iv', antibioticName: 'Levofloxacin Parenteral', atcCode: 'J01MA12', route: 'Parenteral', dddValueGrams: 0.5, unit: 'g', category: 'Watch', clinicalNote: 'Setara 500 mg tiap 24 jam' },
  { id: 'ddd-vanco-iv', antibioticName: 'Vancomycin Parenteral', atcCode: 'J01XA01', route: 'Parenteral', dddValueGrams: 2.0, unit: 'g', category: 'Watch', clinicalNote: 'Setara 1 g tiap 12 jam' },
  { id: 'ddd-piptazo-iv', antibioticName: 'Piperacillin-Tazobactam IV', atcCode: 'J01CR05', route: 'Parenteral', dddValueGrams: 14.0, unit: 'g', category: 'Watch', clinicalNote: 'Dihitung fraksi piperasilin 4g q8h atau 3.375g q6h' },
  { id: 'ddd-genta-iv', antibioticName: 'Gentamicin Parenteral', atcCode: 'J01GB03', route: 'Parenteral', dddValueGrams: 0.24, unit: 'g', category: 'Access', clinicalNote: '240 mg/hari dosis dewasa rata-rata' },
  { id: 'ddd-amikacin-iv', antibioticName: 'Amikacin Parenteral', atcCode: 'J01GB06', route: 'Parenteral', dddValueGrams: 1.0, unit: 'g', category: 'Watch', clinicalNote: 'Setara 15 mg/kg dosis harian' },
  { id: 'ddd-metro-iv', antibioticName: 'Metronidazole Parenteral', atcCode: 'J01XD01', route: 'Parenteral', dddValueGrams: 1.5, unit: 'g', category: 'Access', clinicalNote: 'Setara 500 mg tiap 8 jam' },
  { id: 'ddd-colistin-iv', antibioticName: 'Colistin Parenteral', atcCode: 'J01XB01', route: 'Parenteral', dddValueGrams: 0.27, unit: 'g', category: 'Reserve', clinicalNote: 'Setara 9 juta IU (300 mg CBA/hari)' },
  { id: 'ddd-linezolid-oral', antibioticName: 'Linezolid Oral/IV', atcCode: 'J01XX08', route: 'Parenteral', dddValueGrams: 1.2, unit: 'g', category: 'Reserve', clinicalNote: 'Setara 600 mg tiap 12 jam' },
  { id: 'ddd-tige-iv', antibioticName: 'Tigecycline Parenteral', atcCode: 'J01AA12', route: 'Parenteral', dddValueGrams: 0.1, unit: 'g', category: 'Reserve', clinicalNote: 'Setara 50 mg tiap 12 jam' },
  { id: 'ddd-cefuroxime-oral', antibioticName: 'Cefuroxime Oral', atcCode: 'J01DC02', route: 'Oral', dddValueGrams: 0.5, unit: 'g', category: 'Watch', clinicalNote: 'Setara 250-500 mg tiap 12 jam' },
  { id: 'ddd-cefuroxime-iv', antibioticName: 'Cefuroxime Parenteral', atcCode: 'J01DC02', route: 'Parenteral', dddValueGrams: 3.0, unit: 'g', category: 'Watch', clinicalNote: 'Setara 750 mg - 1.5 g tiap 8 jam' },
  { id: 'ddd-cefixime-oral', antibioticName: 'Cefixime Oral', atcCode: 'J01DD08', route: 'Oral', dddValueGrams: 0.4, unit: 'g', category: 'Watch', clinicalNote: 'Baku emas DDD WHO: 400 mg/hari' },
  { id: 'ddd-moxifloxacin-oral', antibioticName: 'Moxifloxacin Oral', atcCode: 'J01MA14', route: 'Oral', dddValueGrams: 0.4, unit: 'g', category: 'Watch', clinicalNote: 'Setara 400 mg sekali sehari' },
  { id: 'ddd-moxifloxacin-iv', antibioticName: 'Moxifloxacin Parenteral', atcCode: 'J01MA14', route: 'Parenteral', dddValueGrams: 0.4, unit: 'g', category: 'Watch', clinicalNote: 'Setara 400 mg sekali sehari' },
  { id: 'ddd-clindamycin-oral', antibioticName: 'Clindamycin Oral', atcCode: 'J01FF01', route: 'Oral', dddValueGrams: 1.2, unit: 'g', category: 'Access', clinicalNote: 'Setara 300 mg tiap 6 jam' },
  { id: 'ddd-clindamycin-iv', antibioticName: 'Clindamycin Parenteral', atcCode: 'J01FF01', route: 'Parenteral', dddValueGrams: 1.8, unit: 'g', category: 'Access', clinicalNote: 'Setara 600 mg tiap 8 jam' },
  { id: 'ddd-doxycycline-oral', antibioticName: 'Doxycycline Oral', atcCode: 'J01AA02', route: 'Oral', dddValueGrams: 0.1, unit: 'g', category: 'Access', clinicalNote: '100 mg/hari pemeliharaan' },
  { id: 'ddd-fosfomycin-oral', antibioticName: 'Fosfomycin Oral', atcCode: 'J01XX01', route: 'Oral', dddValueGrams: 3.0, unit: 'g', category: 'Access', clinicalNote: 'Dosis tunggal 3 g sachet' },
  { id: 'ddd-fosfomycin-iv', antibioticName: 'Fosfomycin Parenteral', atcCode: 'J01XX01', route: 'Parenteral', dddValueGrams: 8.0, unit: 'g', category: 'Watch', clinicalNote: 'Setara 4 g tiap 12 jam atau 8 g/hari' },
  { id: 'ddd-imipenem-iv', antibioticName: 'Imipenem-Cilastatin IV', atcCode: 'J01DH51', route: 'Parenteral', dddValueGrams: 2.0, unit: 'g', category: 'Watch', clinicalNote: 'Setara 500 mg tiap 6 jam' },
  { id: 'ddd-ertapenem-iv', antibioticName: 'Ertapenem Parenteral', atcCode: 'J01DH03', route: 'Parenteral', dddValueGrams: 1.0, unit: 'g', category: 'Watch', clinicalNote: 'Baku emas DDD WHO: 1 g/hari' },
  { id: 'ddd-daptomycin-iv', antibioticName: 'Daptomycin Parenteral', atcCode: 'J01XX09', route: 'Parenteral', dddValueGrams: 0.28, unit: 'g', category: 'Watch', clinicalNote: 'Dihitung rata-rata 4 mg/kgBB pada BB 70 kg' },
  { id: 'ddd-polymyxin-b-iv', antibioticName: 'Polymyxin B Parenteral', atcCode: 'J01XB02', route: 'Parenteral', dddValueGrams: 0.15, unit: 'g', category: 'Reserve', clinicalNote: 'Setara 1.5 juta IU (150 mg/hari)' },
  { id: 'ddd-ceftolozane-tazo-iv', antibioticName: 'Ceftolozane-Tazobactam IV', atcCode: 'J01DI54', route: 'Parenteral', dddValueGrams: 3.0, unit: 'g', category: 'Reserve', clinicalNote: 'Dihitung fraksi seftolozan 1 g tiap 8 jam' },
  { id: 'ddd-ceftazidime-avi-iv', antibioticName: 'Ceftazidime-Avibactam IV', atcCode: 'J01DD52', route: 'Parenteral', dddValueGrams: 6.0, unit: 'g', category: 'Reserve', clinicalNote: 'Dihitung fraksi seftazidim 2 g tiap 8 jam' },
  { id: 'ddd-cotrimoxazole-oral', antibioticName: 'Cotrimoxazole Oral (TMP-SMX)', atcCode: 'J01EE01', route: 'Oral', dddValueGrams: 1.92, unit: 'g', category: 'Access', clinicalNote: 'Setara 2 tablet Forte (160/800 mg x 2)' },
  { id: 'ddd-cotrimoxazole-iv', antibioticName: 'Cotrimoxazole Parenteral', atcCode: 'J01EE01', route: 'Parenteral', dddValueGrams: 1.92, unit: 'g', category: 'Access', clinicalNote: 'Setara 960 mg tiap 12 jam' },
  { id: 'ddd-cloxacillin-iv', antibioticName: 'Cloxacillin Parenteral', atcCode: 'J01CF02', route: 'Parenteral', dddValueGrams: 2.0, unit: 'g', category: 'Access', clinicalNote: 'Setara 500 mg tiap 6 jam' },
  { id: 'ddd-teicoplanin-iv', antibioticName: 'Teicoplanin Parenteral', atcCode: 'J01XA02', route: 'Parenteral', dddValueGrams: 0.4, unit: 'g', category: 'Watch', clinicalNote: 'Setara 400 mg sekali sehari' },
  { id: 'ddd-chloramphenicol-oral', antibioticName: 'Chloramphenicol Oral', atcCode: 'J01BA01', route: 'Oral', dddValueGrams: 3.0, unit: 'g', category: 'Access', clinicalNote: 'Setara 750 mg tiap 6 jam' },
  { id: 'ddd-nitrofurantoin-oral', antibioticName: 'Nitrofurantoin Oral', atcCode: 'J01XE01', route: 'Oral', dddValueGrams: 0.2, unit: 'g', category: 'Access', clinicalNote: 'Setara 100 mg tiap 12 jam' },
  { id: 'ddd-fluconazole-oral', antibioticName: 'Fluconazole Oral', atcCode: 'J02AC01', route: 'Oral', dddValueGrams: 0.2, unit: 'g', category: 'Watch', clinicalNote: '200 mg/hari dosis pemeliharaan' },
  { id: 'ddd-fluconazole-iv', antibioticName: 'Fluconazole Parenteral', atcCode: 'J02AC01', route: 'Parenteral', dddValueGrams: 0.2, unit: 'g', category: 'Watch', clinicalNote: '200 mg/hari dosis pemeliharaan' }

];

// Helper kalkulasi kuantitatif DDD per 100 Patient-Days
export function calculateDddPer100PatientDays(
  totalGramsUsed: number,
  whoDddGrams: number,
  patientDays: number
): number {
  if (whoDddGrams <= 0 || patientDays <= 0) return 0;
  const dddCount = totalGramsUsed / whoDddGrams;
  return Number(((dddCount / patientDays) * 100).toFixed(2));
}


// ============================================================================
// 6. DATA PROTOKOL PROFILAKSIS BEDAH (SURGICAL PROPHYLAXIS) LENGKAP
// Standar: Permenkes 8/2015, ASHP/IDSA/SIS/SHEA Guidelines & STARKES Kemenkes
// ============================================================================
export const SURGICAL_PROPHYLAXIS_DATABASE: SurgicalProphylaxisItem[] = [
  {
    id: 'proph-appendectomy',
    category: 'digestif',
    categoryLabel: 'Bedah Digestif / Saluran Cerna',
    procedureName: 'Apendiktomi (Laparoskopi / Terbuka)',
    woundClassification: 'Bersih Terkontaminasi',
    firstLineAntibiotic: 'Cefazolin 2 g IV + Metronidazole 500 mg IV (atau Cefoxitin 2 g IV tunggal)',
    standardDoseAdult: 'Cefazolin 2 g IV bolus lambat + Metronidazole 500 mg IV drip',
    obeseDoseAdjustment: 'Tingkatkan dosis Cefazolin ke 3 g IV jika berat badan pasien >120 kg',
    timingPreIncision: '30 - 60 menit SEBELUM insisi kulit (Metronidazole dimulai 60 menit sebelum insisi)',
    redosingIntervalHours: 'Ulangi Cefazolin tiap 4 jam intraoperatif jika operasi berlangsung lama atau perdarahan >1.500 mL',
    maxDurationHours: 'Dosis tunggal (Maksimal 24 jam pasca-bedah jika ada faktor risiko)',
    betaLactamAllergyAlternative: 'Gentamisin 5 mg/kgBB IV ATAU Siprofloksasin 400 mg IV + Metronidazol 500 mg IV',
    targetPathogens: ['Escherichia coli', 'Bacteroides fragilis', 'Streptococcus anaerob', 'Enterococcus spp.'],
    clinicalCheckpoints: [
      'Pada apendisitis perforasi atau peritonitis, status berubah menjadi TERAPI DEFINITIF bukan profilaksis.',
      'Hentikan profilaksis dalam 24 jam pada kasus apendisitis kataralis/supuratif non-perforasi.',
      'Cefazolin wajib menjangkau kadar hambat minimal (MIC) di jaringan saat insisi pisau pertama.'
    ]
  },
  {
    id: 'proph-colorectal',
    category: 'digestif',
    categoryLabel: 'Bedah Digestif / Saluran Cerna',
    procedureName: 'Bedah Kolorektal (Reseksi Kolon / Rektum)',
    woundClassification: 'Bersih Terkontaminasi',
    firstLineAntibiotic: 'Cefazolin 2 g IV + Metronidazole 500 mg IV (atau Cefotetan 2 g IV)',
    standardDoseAdult: 'Cefazolin 2 g IV + Metronidazole 500 mg IV drip',
    obeseDoseAdjustment: 'Cefazolin 3 g IV jika BB >120 kg',
    timingPreIncision: '30 - 60 menit sebelum insisi',
    redosingIntervalHours: 'Ulangi Cefazolin tiap 4 jam intraoperatif',
    maxDurationHours: 'Maksimal 24 jam pasca-operasi',
    betaLactamAllergyAlternative: 'Klindamisin 900 mg IV + Gentamisin 5 mg/kgBB IV ATAU Siprofloksasin 400 mg IV + Metronidazol 500 mg IV',
    targetPathogens: ['Enterobacteriaceae (E. coli, Klebsiella)', 'Bacteroides fragilis', 'Anaerob usus'],
    clinicalCheckpoints: [
      'Dapat dikombinasikan dengan pembersihan mekanis usus (Bowel Prep) + antibiotik oral non-absorbable (Neomisin + Metronidazol) H-1 operasi.',
      'Beban bakteri feses mencapai 10^11 CFU/gram sehingga proteksi anaerob mutlak diperlukan.',
      'Perpanjangan antibiotik >24 jam pasca-operasi tidak terbukti menurunkan ILO tetapi melipatgandakan infeksi C. difficile.'
    ]
  },
  {
    id: 'proph-cholecystectomy',
    category: 'digestif',
    categoryLabel: 'Bedah Digestif / Saluran Cerna',
    procedureName: 'Kolesistektomi (Laparoskopi Elektif)',
    woundClassification: 'Bersih Terkontaminasi',
    firstLineAntibiotic: 'Cefazolin 2 g IV (Hanya jika berisiko tinggi: usia >60 th, konversi terbuka, ikterus, batu empedu)',
    standardDoseAdult: 'Cefazolin 2 g IV bolus',
    obeseDoseAdjustment: 'Cefazolin 3 g IV jika BB >120 kg',
    timingPreIncision: '30 - 60 menit sebelum insisi',
    redosingIntervalHours: 'Ulangi Cefazolin tiap 4 jam jika operasi >4 jam',
    maxDurationHours: 'Dosis tunggal intraoperatif',
    betaLactamAllergyAlternative: 'Siprofloksasin 400 mg IV ATAU Gentamisin 5 mg/kgBB IV + Klindamisin 900 mg IV',
    targetPathogens: ['Escherichia coli', 'Klebsiella spp.', 'Enterococcus faecalis'],
    clinicalCheckpoints: [
      'Kolesistektomi laparoskopi elektif tanpa komplikasi pada pasien muda TIDAK MEMERLUKAN profilaksis rutin.',
      'Profilaksis diindikasikan pada kolesistitis akut, kolangitis, diabetes, atau usia lanjut.',
      'Hentikan segera setelah operasi selesai.'
    ]
  },
  {
    id: 'proph-csection',
    category: 'obgyn',
    categoryLabel: 'Bedah Kebidanan & Kandungan (Obgyn)',
    procedureName: 'Sectio Caesarea (Bedah Sesar Elektif & Emergensi)',
    woundClassification: 'Bersih Terkontaminasi',
    firstLineAntibiotic: 'Cefazolin 2 g IV dosis tunggal',
    standardDoseAdult: 'Cefazolin 2 g IV bolus lambat dalam 3-5 menit',
    obeseDoseAdjustment: 'Tingkatkan ke 3 g IV jika BB >120 kg atau BMI >=35 kg/m2',
    timingPreIncision: 'Dalam rentang 30 - 60 menit SEBELUM insisi kulit (bukan setelah klem tali pusat)',
    redosingIntervalHours: 'Ulangi Cefazolin tiap 4 jam jika operasi melebihi waktu estimasi atau perdarahan >1.500 mL',
    maxDurationHours: 'Dosis tunggal pre-operatif (Tuntas dalam 1 dosis)',
    betaLactamAllergyAlternative: 'Klindamisin 900 mg IV + Gentamisin 5 mg/kgBB IV',
    targetPathogens: ['Staphylococcus epidermidis', 'Streptococcus agalactiae (GBS)', 'E. coli', 'Anaerob vagina'],
    clinicalCheckpoints: [
      'ACOG & Kemenkes: Pemberian pre-insisi menurunkan endometritis & infeksi luka hingga 50% dibanding pemberian paska-klem tali pusat.',
      'Kadar antibiotik yang mencapai janin sangat minimal dan aman tanpa dampak buruk pada neonatal.',
      'Pada SC emergensi pasca-ketuban pecah dini, tambahkan Azitromisin 500 mg IV drip.'
    ]
  },
  {
    id: 'proph-hysterectomy',
    category: 'obgyn',
    categoryLabel: 'Bedah Kebidanan & Kandungan (Obgyn)',
    procedureName: 'Histerektomi (Vaginal / Abdominal / Laparoskopi)',
    woundClassification: 'Bersih Terkontaminasi',
    firstLineAntibiotic: 'Cefazolin 2 g IV + Metronidazole 500 mg IV (atau Cefotetan 2 g IV)',
    standardDoseAdult: 'Cefazolin 2 g IV + Metronidazole 500 mg IV',
    obeseDoseAdjustment: 'Cefazolin 3 g IV jika BB >120 kg',
    timingPreIncision: '30 - 60 menit sebelum insisi',
    redosingIntervalHours: 'Ulangi Cefazolin tiap 4 jam',
    maxDurationHours: 'Maksimal 24 jam pasca-operasi',
    betaLactamAllergyAlternative: 'Klindamisin 900 mg IV + Gentamisin 5 mg/kgBB IV',
    targetPathogens: ['Flora saluran kemih & vagina: E. coli, GBS, Prevotella, Peptostreptococcus'],
    clinicalCheckpoints: [
      'Histerektomi vaginal membawa risiko infeksi puncak akibat paparan flora normal serviks dan vagina.',
      'Pastikan profilaksis mencakup bakteri aerobik dan anaerobik.',
      'Tidak perlu perpanjangan antibiotik oral saat pasien rawat jalan.'
    ]
  },
  {
    id: 'proph-arthroplasty',
    category: 'ortho',
    categoryLabel: 'Bedah Ortopedi & Traumatologi',
    procedureName: 'Artroplasti Sendi (Panggul / Lutut) & Fiksasi Internal ORIF',
    woundClassification: 'Bersih',
    firstLineAntibiotic: 'Cefazolin 2 g IV (Tingkatkan ke 3 g jika BB >120 kg)',
    standardDoseAdult: 'Cefazolin 2 g IV bolus perlahan',
    obeseDoseAdjustment: 'Wajib 3 g IV jika berat badan >120 kg',
    timingPreIncision: '30 - 60 menit sebelum insisi kulit (SEBELUM TOURNIQUET DIKEMBANGKAN)',
    redosingIntervalHours: 'Ulangi Cefazolin tiap 4 jam intraoperatif',
    maxDurationHours: 'Maksimal 24 jam pasca-operasi (2 dosis pasca-bedah)',
    betaLactamAllergyAlternative: 'Vankomisin 15 mg/kgBB IV drip lambat 60-120 menit ATAU Klindamisin 900 mg IV',
    targetPathogens: ['Staphylococcus aureus (MSSA & MRSA)', 'Staphylococcus epidermidis (Biofilm)'],
    clinicalCheckpoints: [
      'Wajib selesai diinfuskan sebelum manset tourniquet dikembangkan agar obat mencapai jaringan ekstremitas.',
      'Infeksi prostesis sendi (PJI) adalah komplikasi katastropik yang memerlukan revisi bedah mayor.',
      'Jika rumah sakit memiliki prevalensi MRSA tinggi (>20%), tambahkan Vankomisin IV.'
    ]
  },
  {
    id: 'proph-cabg',
    category: 'cardio',
    categoryLabel: 'Bedah Kardiotorasik & Vaskular',
    procedureName: 'CABG (Coronary Artery Bypass Graft) & Penggantian Katup',
    woundClassification: 'Bersih',
    firstLineAntibiotic: 'Cefazolin 2 g IV ATAU Cefuroxime 1.5 g IV',
    standardDoseAdult: 'Cefazolin 2 g IV atau Cefuroxime 1.5 g IV',
    obeseDoseAdjustment: 'Cefazolin 3 g IV jika BB >120 kg',
    timingPreIncision: '30 - 60 menit sebelum insisi sternotomi',
    redosingIntervalHours: 'Ulangi tiap 4 jam (Cefazolin) atau tiap 3 jam (Cefuroxime) selama mesin bypass jantung aktif',
    maxDurationHours: 'Maksimal 48 jam pasca-operasi (Khusus bedah jantung panduan STS)',
    betaLactamAllergyAlternative: 'Vankomisin 15 mg/kgBB IV lambat + Gentamisin 5 mg/kgBB IV',
    targetPathogens: ['Staphylococcus aureus', 'Staphylococcus epidermidis', 'Corynebacterium'],
    clinicalCheckpoints: [
      'Pencegahan mediastinitis sternum dalam yang memiliki mortalitas tinggi >25%.',
      'Pengenceran darah pada mesin Cardiopulmonary Bypass (CPB) memerlukan redosing tepat waktu.',
      'Batas penghentian mutlak pada 48 jam pasca-operasi untuk mencegah kolonisasi bakteri resisten.'
    ]
  },
  {
    id: 'proph-turp',
    category: 'urology',
    categoryLabel: 'Bedah Urologi',
    procedureName: 'Reseksi Transuretral Prostat (TURP) & Bedah Saluran Kemih',
    woundClassification: 'Bersih Terkontaminasi',
    firstLineAntibiotic: 'Ceftriaxone 1 g IV ATAU Cefotaxime 1 g IV ATAU Ciprofloksasin 400 mg IV',
    standardDoseAdult: 'Ceftriaxone 1 g IV drip dalam 30 menit',
    obeseDoseAdjustment: 'Ceftriaxone 2 g IV jika BB >120 kg',
    timingPreIncision: '30 - 60 menit sebelum manipulasi instrumen endoskopi',
    redosingIntervalHours: 'Tidak perlu redosing jika durasi <4 jam (waktu paruh seftriakson panjang)',
    maxDurationHours: 'Dosis tunggal sebelum prosedur',
    betaLactamAllergyAlternative: 'Gentamisin 5 mg/kgBB IV + Klindamisin 900 mg IV',
    targetPathogens: ['Escherichia coli', 'Proteus mirabilis', 'Klebsiella pneumoniae', 'Pseudomonas'],
    clinicalCheckpoints: [
      'Pasien wajib dipastikan bebas bakteriuria bermakna sebelum tindakan elektif (kultur urin negatif).',
      'Jika kultur urin pre-op positif, obati terlebih dahulu sebagai terapi kuratif sebelum tindakan bedah.',
      'Bakteriuria asimtomatik tanpa tindakan endoskopi urologi dilarang diberikan antibiotik.'
    ]
  },
  {
    id: 'proph-craniotomy',
    category: 'neuro',
    categoryLabel: 'Bedah Saraf (Neuro)',
    procedureName: 'Kraniotomi & Pemasangan Shunt Ventrikuloperitoneal (VP Shunt)',
    woundClassification: 'Bersih',
    firstLineAntibiotic: 'Cefazolin 2 g IV (Tingkatkan ke 3 g jika BB >120 kg)',
    standardDoseAdult: 'Cefazolin 2 g IV bolus',
    obeseDoseAdjustment: 'Cefazolin 3 g IV jika BB >120 kg',
    timingPreIncision: '30 - 60 menit sebelum insisi kulit kepala',
    redosingIntervalHours: 'Ulangi Cefazolin tiap 4 jam jika operasi berlangsung lama',
    maxDurationHours: 'Maksimal 24 jam pasca-operasi',
    betaLactamAllergyAlternative: 'Vankomisin 15 mg/kgBB IV lambat ATAU Klindamisin 900 mg IV',
    targetPathogens: ['Staphylococcus aureus', 'Staphylococcus epidermidis', 'Cutibacterium acnes'],
    clinicalCheckpoints: [
      'Mencegah meningitis pasca-operasi dan infeksi shunt intrakranial.',
      'Pada kraniotomi berulang atau pemasangan instrumen logam, pastikan kepatuhan profilaksis 100%.',
      'Hentikan seluruh profilaksis dalam 24 jam.'
    ]
  },
  {
    id: 'proph-hernia',
    category: 'general',
    categoryLabel: 'Bedah Umum',
    procedureName: 'Herniorafi dengan Pemasangan Mesh (Benda Asing)',
    woundClassification: 'Bersih',
    firstLineAntibiotic: 'Cefazolin 2 g IV dosis tunggal',
    standardDoseAdult: 'Cefazolin 2 g IV',
    obeseDoseAdjustment: 'Cefazolin 3 g IV jika BB >120 kg',
    timingPreIncision: '30 - 60 menit sebelum insisi',
    redosingIntervalHours: 'Ulangi Cefazolin tiap 4 jam',
    maxDurationHours: 'Dosis tunggal intraoperatif',
    betaLactamAllergyAlternative: 'Klindamisin 900 mg IV atau Vankomisin 15 mg/kgBB IV',
    targetPathogens: ['Staphylococcus aureus', 'Staphylococcus epidermidis'],
    clinicalCheckpoints: [
      'Operasi hernia murni TANPA MESH TIDAK MEMERLUKAN antibiotik profilaksis.',
      'Pemasangan material prostetik (mesh sintetis) adalah alasan utama perlunya profilaksis dosis tunggal.',
      'Kontrol glikemik perioperatif wajib dijaga.'
    ]
  },
  {
    id: 'proph-ent-headneck',
    category: 'ent',
    categoryLabel: 'Bedah THT & Kepala Leher',
    procedureName: 'Diseksi Leher Radikal / Onkologi THT dengan Mukosa Terbuka',
    woundClassification: 'Bersih Terkontaminasi',
    firstLineAntibiotic: 'Cefazolin 2 g IV + Metronidazole 500 mg IV (atau Ampisilin-Sulbaktam 1.5-3 g IV)',
    standardDoseAdult: 'Cefazolin 2 g IV + Metronidazole 500 mg IV',
    obeseDoseAdjustment: 'Cefazolin 3 g IV jika BB >120 kg',
    timingPreIncision: '30 - 60 menit sebelum insisi',
    redosingIntervalHours: 'Ulangi Cefazolin tiap 4 jam',
    maxDurationHours: 'Maksimal 24 jam pasca-operasi',
    betaLactamAllergyAlternative: 'Klindamisin 900 mg IV + Gentamisin 5 mg/kgBB IV',
    targetPathogens: ['Flora orofaring: Streptococcus, Staphylococcus, Anaerob mulut (Peptostreptococcus)'],
    clinicalCheckpoints: [
      'Tonsilektomi dan adenoidektomi rutin TIDAK MEMERLUKAN antibiotik profilaksis.',
      'Profilaksis hanya untuk bedah mayor dengan mukosa faring/laring yang terpapar.',
      'Hentikan dalam 24 jam.'
    ]
  },
  {
    id: 'proph-thyroid',
    category: 'general',
    categoryLabel: 'Bedah Umum & Endokrin',
    procedureName: 'Tiroidektomi & Eksisi Tumor Jinak Payudara',
    woundClassification: 'Bersih',
    firstLineAntibiotic: 'TIDAK DIREKOMENDASIKAN ANTIBIOTIK PROFILAKSIS RUTIN (Kecuali ada faktor risiko khusus)',
    standardDoseAdult: 'Bila ada risiko tinggi (imunokompromais): Cefazolin 2 g IV tunggal',
    obeseDoseAdjustment: 'Cefazolin 3 g IV jika BB >120 kg',
    timingPreIncision: '30 - 60 menit sebelum insisi',
    redosingIntervalHours: 'Tidak ada redosing',
    maxDurationHours: 'Dosis tunggal',
    betaLactamAllergyAlternative: 'Klindamisin 900 mg IV',
    targetPathogens: ['Staphylococcus aureus', 'Staphylococcus epidermidis'],
    clinicalCheckpoints: [
      'Bedah bersih tanpa manipulasi saluran cerna/kemih dan tanpa implan memiliki risiko ILO <1.5%.',
      'Pemberian antibiotik profilaksis rutin pada tiroidektomi tidak memberikan manfaat klinis.',
      'Fokus utama adalah teknik aseptik steril kamar operasi.'
    ]
  }
];
