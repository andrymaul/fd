import { Drug } from '../types';

/**
 * Organ Toxicity System Definition
 */
export interface OrganToxicityCategory {
  id: string;
  name: string;
  shortName: string;
  icon: string; // Icon identifier
  color: string; // Tailwind color theme
  description: string;
  severityThresholds: {
    moderateCount: number;
    highCount: number;
    criticalCount: number;
  };
  keyMonitors: string[];
  clinicalManagement: string[];
  redFlags: string[];
}

export interface DrugToxicityProfile {
  drugId: string;
  drugName: string;
  toxicityCategory: string; // e.g., 'qtc_cardiac', 'hepatotoxicity', 'nephrotoxicity', 'cns_sedation', 'anticholinergic', 'gi_bleeding', 'electrolyte', 'ototoxicity', 'dermatology'
  severity: 'Mild' | 'Moderate' | 'High' | 'Critical';
  weightScore: number; // 1 (Mild), 2 (Moderate), 3 (High), 4 (Critical)
  mechanism: string;
  typicalOnset: string;
  riskFactors?: string[];
  preventionTip: string;
}

export interface AdrSymptom {
  id: string;
  symptomName: string;
  indonesianName: string;
  category: 'Kardiovaskular' | 'Saluran Cerna' | 'Sistem Saraf & Psikiatri' | 'Kulit & Alergi' | 'Respirasi' | 'Metabolik & Ginjal' | 'Telinga & Mata' | 'Muskuloskeletal' | 'Hematologi';
  description: string;
  commonCausativeDrugs: {
    drugName: string;
    genericMatch?: string;
    atcPrefix?: string;
    probability: 'Sangat Tinggi (Very High)' | 'Tinggi (High)' | 'Sedang (Moderate)';
    mechanism: string;
    onset: string;
    mitigation: string;
  }[];
  redFlagWarning?: string;
}

export interface NaranjoQuestion {
  id: number;
  question: string;
  indonesianQuestion: string;
  yesScore: number;
  noScore: number;
  unknownScore: number;
  explanation: string;
}

/**
 * 9 Organ Toxicity Categories
 */
export const ORGAN_TOXICITY_CATEGORIES: OrganToxicityCategory[] = [
  {
    id: 'qtc_cardiac',
    name: 'Kardiotoksisitas & Pemanjangan Interval QTc Jantung',
    shortName: 'Kardiotoksisitas (QTc)',
    icon: 'HeartPulse',
    color: 'rose',
    description: 'Blokade kanal ion kalium jantung (IKr/hERG) yang memperpanjang repolarisasi ventrikel miokard, melipatgandakan risiko aritmia ventrikel mematikan Torsades de Pointes (TdP) dan henti jantung mendadak.',
    severityThresholds: { moderateCount: 1, highCount: 2, criticalCount: 3 },
    keyMonitors: ['EKG 12 Lead (Interval QTc baseline & follow-up)', 'Elektrolit Serum (Target K+ > 4.0 mEq/L, Mg2+ > 2.0 mg/dL)', 'Denyut Jantung & Tekanan Darah'],
    clinicalManagement: [
      'Hindari peresepan multipel obat pemanjang QTc secara bersamaan.',
      'Koreksi hipokalemia (<4.0 mEq/L) dan hipomagnesemia (<2.0 mg/dL) sebelum memulai terapi.',
      'Waspadai bila QTc > 500 ms atau kenaikan > 60 ms dari baseline (Hentikan obat pemicu).'
    ],
    redFlags: ['Episode pingsan mendadak (Sinkop)', 'Palpitasi hebat / sensasi jantung berdegup kencang tak beraturan', 'Pusing berputar berat / pandangan gelap mendadak']
  },
  {
    id: 'hepatotoxicity',
    name: 'Hepatotoksisitas & Drug-Induced Liver Injury (DILI)',
    shortName: 'Beban Toksisitas Hati (DILI)',
    icon: 'Activity',
    color: 'amber',
    description: 'Beban metabolit reaktif hepatik atau reaksi kolestatik yang memicu nekrosis hepatoseluler akut, steatosis, atau hepatitis kolestatik terinduksi obat.',
    severityThresholds: { moderateCount: 1, highCount: 2, criticalCount: 3 },
    keyMonitors: ['Liver Function Test (SGOT, SGPT, Bilirubin Total/Direk, Alkaline Phosphatase)', 'Masa Protrombin / INR', 'Kadar Albumin Serum'],
    clinicalManagement: [
      'Gunakan dosis efektif terendah pada pasien dengan riwayat penyakit hati kronis atau sirosis.',
      'Pantau SGOT/SGPT berkala (Hentikan obat bila SGPT > 3-5x batas atas normal disertai gejala klinis).',
      'Hindari konsumsi alkohol rutin selama pengobatan.'
    ],
    redFlags: ['Mata dan kulit menguning (Ikterus / Jaundice)', 'Urin berwarna pekat seperti air teh tua', 'Feses berwarna pucat seperti dempul', 'Mual muntah hebat dan nyeri perut kanan atas']
  },
  {
    id: 'nephrotoxicity',
    name: 'Nefrotoksisitas & Acute Kidney Injury (AKI)',
    shortName: 'Beban Toksisitas Ginjal (AKI)',
    icon: 'ShieldAlert',
    color: 'purple',
    description: 'Cedera tubular akut, vasokonstriksi mikrovaskular ginjal, nefritis interstisial akut, atau kristaluria yang menurunkan laju filtrasi glomerulus (eGFR).',
    severityThresholds: { moderateCount: 1, highCount: 2, criticalCount: 3 },
    keyMonitors: ['Serum Kreatinin & BUN serial', 'Laju Filtrasi Glomerulus (eGFR / CrCl Cockcroft-Gault)', 'Produksi Urin 24 Jam (Urine Output)', 'Urinalisis (Sedimen & Proteinuria)'],
    clinicalManagement: [
      'Pertahankan hidrasi cairan hidrasi adekuat (kecuali ada kontraindikasi gagal jantung berat).',
      'Lakukan penyesuaian dosis obat berdasarkan nilai eGFR / CrCl terkini.',
      'Hindari kombinasi berbahaya "Triple Whammy" (ACEi/ARB + Diuretik + NSAID).'
    ],
    redFlags: ['Produksi urine menurun drastis (<0.5 mL/kg/jam atau tidak kencing >12 jam)', 'Pembengkakan hebat pada kedua tungkai/wajah (Edema anasarka)', 'Sesak napas akibat overload cairan paru']
  },
  {
    id: 'cns_sedation',
    name: 'Depresi Sistem Saraf Pusat, Sedasi & Risiko Jatuh (*Fall Risk*)',
    shortName: 'Sedasi & Depresi SSP',
    icon: 'Moon',
    color: 'indigo',
    description: 'Potensiasi stimulasi transmisi GABAergik atau penekanan pusat respirasi di medula oblongata, meningkatkan risiko somnolen mendalam, ataksia, trauma jatuh fraktur tulang pada lansia, dan depresi pernapasan fatal.',
    severityThresholds: { moderateCount: 1, highCount: 2, criticalCount: 3 },
    keyMonitors: ['Tingkat Kesadaran (Skala GCS / RASS)', 'Frekuensi Pernapasan (RR - waspadai <12x/menit)', 'Saturasi Oksigen SpO2', 'Skor Risiko Jatuh Morse / Hendrich'],
    clinicalManagement: [
      'Terapkan kriteria Beers Criteria untuk membatasi depresan SSP ganda pada pasien geriatri.',
      'Hindari kombinasi analgesik opioid dengan sedatif benzodiazepine (FDA Black Box Warning).',
      'Edukasi pasien untuk tidak mengemudi atau mengoperasikan mesin berat.'
    ],
    redFlags: ['Napas sangat lambat (<10 kali per menit) atau mendengkur tersedak (Apnea tidur berat)', 'Sangat sulit dibangunkan / penurunan kesadaran koma', 'Bibir dan ujung jari membiru (Sianosis / Hipoksia)']
  },
  {
    id: 'anticholinergic',
    name: 'Beban Kognitif Antikolinergik (*Anticholinergic Cognitive Burden*)',
    shortName: 'Beban Antikolinergik (ACB)',
    icon: 'Eye',
    color: 'orange',
    description: 'Blokade kompetitif reseptor muskarinik sentral dan perifer, memicu penurunan memori, konfusi delirium akut, mulut kering, konstipasi obstruktif, retensi urin akut, dan peningkatan tekanan intraokular.',
    severityThresholds: { moderateCount: 1, highCount: 2, criticalCount: 3 },
    keyMonitors: ['Skor Anticholinergic Cognitive Burden (ACB Score)', 'Status Mental & Kognitif (MMSE / MoCA)', 'Volume Residu Urin Pasca Berkemih (PVR)', 'Tekanan Intraokular (TIO)'],
    clinicalManagement: [
      'Gantikan obat dengan skor ACB tinggi dengan alternatif yang ramah kognitif (misal: ganti CTM dengan Cetirizine/Loratadine).',
      'Hindari pada pasien pria dengan BPH dan riwayat demensia/Alzheimer.'
    ],
    redFlags: ['Delirium akut / disorientasi mendadak / halusinasi', 'Retensi urin total (tidak bisa buang air kecil sama sekali disertai nyeri perut bawah)', 'Nyeri hebat pada mata dengan mata merah dan penglihatan kabur (Glaukoma sudut tertutup akut)']
  },
  {
    id: 'gi_bleeding',
    name: 'Iritasi Mukosa & Risiko Perdarahan Gastrointestinal',
    shortName: 'Perdarahan Saluran Cerna (GI)',
    icon: 'AlertTriangle',
    color: 'red',
    description: 'Supresi sintesis prostaglandin protektif mukosa lambung (inhibisi COX-1) ditambah efek antikoagulasi/antiplatelet sistemik, meningkatkan risiko erosi lambung, ulkus peptikum, hematemesis, dan melena.',
    severityThresholds: { moderateCount: 1, highCount: 2, criticalCount: 3 },
    keyMonitors: ['Hemoglobin & Hematokrit serial', 'Skrining Fecal Occult Blood Test (FOBT)', 'Tanda-tanda klinis melena / perdarahan saluran cerna'],
    clinicalManagement: [
      'Sertakan Gastroprotektor PPI (misal: Pantoprazole / Omeprazole) pada pasien risiko tinggi.',
      'Minum obat NSAID selalu bersamaan atau sesudah makan.',
      'Gunakan durasi terapi NSAID sesingkat mungkin dengan dosis efektif terendah.'
    ],
    redFlags: ['Buang air besar berwarna hitam pekat seperti aspal dan berbau amis menyengat (Melena)', 'Muntah cairan berwarna cokelat kehitaman seperti bubuk kopi (Hematemesis)', 'Pusing berputar hebat disertai pucat dan tensi drop']
  },
  {
    id: 'electrolyte',
    name: 'Gangguan Homeostasis Elektrolit (K+, Na+, Ca2+, Mg2+)',
    shortName: 'Gangguan Elektrolit',
    icon: 'Zap',
    color: 'emerald',
    description: 'Fluktuasi berbahaya ion tubuh akibat gangguan ekskresi renal atau pergeseran transeluler (Hiperkalemia fatal, Hipokalemia aritmogenik, atau Hiponatremia berat terinduksi SIADH).',
    severityThresholds: { moderateCount: 1, highCount: 2, criticalCount: 3 },
    keyMonitors: ['Kadar Kalium Serum (K+)', 'Kadar Natrium Serum (Na+)', 'Kadar Kalsium Ionik & Magnesium', 'EKG serial (Perubahan gelombang T & interval QT)'],
    clinicalManagement: [
      'Hindari kombinasi suplemen kalium dengan obat penahan kalium (Spironolakton, ACEi, ARB).',
      'Pantau ketat elektrolit pada pasien pengguna diuretik loop, tiazid, atau SSRI jangka panjang.'
    ],
    redFlags: ['Kelemahan otot ekstrem / kelumpuhan flaksid mendadak (Hiperkalemia)', 'Kram otot parah / kejang / spasme tangan dan kaki (Hipokalsemia/Hipomagnesemia)', 'Kebingungan mental / disorientasi berat / kejang (Hiponatremia berat <125 mEq/L)']
  },
  {
    id: 'ototoxicity',
    name: 'Ototoksisitas Koklear & Vestibular (Gangguan Pendengaran & Keseimbangan)',
    shortName: 'Ototoksisitas (Telinga)',
    icon: 'VolumeX',
    color: 'cyan',
    description: 'Kerusakan selektif sel rambut sensorik pada koklea dan apparatus vestibular telinga dalam, memicu tinitus menetap, gangguan keseimbangan vertigo parah, dan tuli saraf permanen bilateral.',
    severityThresholds: { moderateCount: 1, highCount: 2, criticalCount: 3 },
    keyMonitors: ['Audiometri Nada Murni baseline & follow-up', 'Skrining Gejala Subjektif Tinitus / Pendengaran Berkurang', 'Pemeriksaan Keseimbangan Vestibular (Tes Romberg)'],
    clinicalManagement: [
      'Lakukan Therapeutic Drug Monitoring (TDM) kadar palung obat aminoglikosida.',
      'Hindari kombinasi aminoglikosida dengan diuretik loop dosis tinggi (Furosemide).',
      'Hentikan atau ganti obat segera jika timbul tinitus awal.'
    ],
    redFlags: ['Suara berdenging keras di telinga yang tidak kunjung hilang (Tinitus)', 'Penurunan kemampuan mendengar suara percakapan secara progresif', 'Sensasi ruangan berputar hebat hingga tidak mampu berdiri atau berjalan']
  },
  {
    id: 'dermatology',
    name: 'Reaksi Dermatologi Parah & Erupsi Mukokutan (SJS / TEN / DRESS)',
    shortName: 'Reaksi Kulit Berat (SJS/TEN)',
    icon: 'Flame',
    color: 'pink',
    description: 'Reaksi hipersensitivitas imunologis tipe lambat mematikan yang memicu pelepasan lapisan epidermis kulit, nekrosis keratinosit luas, dan sindrom DRESS dengan keterlibatan organ multiorgan.',
    severityThresholds: { moderateCount: 1, highCount: 2, criticalCount: 3 },
    keyMonitors: ['Inspeksi Visual Seluruh Permukaan Kulit & Mukosa (Mulut, Mata, Genital)', 'Hitung Darah Lengkap (Eosinofilia pada DRESS)', 'Fungsi Hati & Ginjal'],
    clinicalManagement: [
      'Skrining alel HLA-B*1502 (sebelum Carbamazepine) dan HLA-B*5801 (sebelum Allopurinol) pada populasi berisiko.',
      'SEGERA HENTIKAN OBAT bila timbul ruam kulit disertai demam atau keterlibatan mukosa bibir/mata.'
    ],
    redFlags: ['Bibir melepuh, mata merah berair perih, dan lesi pada selaput lendir', 'Kulit mengelupas / melepuh seperti luka bakar (Tanda Nikolsky positif)', 'Ruam merah menyebar cepat disertai demam tinggi dan pembengkakan kelenjar getah bening']
  }
];

/**
 * High-Risk Drug Toxicity Profiles Database
 */
export const DRUG_TOXICITY_PROFILES: DrugToxicityProfile[] = [
  // 1. QTc Prolongation
  {
    drugId: 'drug-amiodarone',
    drugName: 'Amiodarone',
    toxicityCategory: 'qtc_cardiac',
    severity: 'Critical',
    weightScore: 4,
    mechanism: 'Inhibisi poten kanal IKr repolarisasi miokard ventrikel dengan waktu paruh sangat panjang (50-100 hari).',
    typicalOnset: 'Hari hingga minggu (efek bertahan berbulan-bulan pasca-penghentian)',
    riskFactors: ['Hipokalemia', 'Hipomagnesemia', 'Bradikardia', 'Usia lanjut', 'Jenis kelamin wanita'],
    preventionTip: 'Rekam EKG baseline dan berkala; pertahankan K+ > 4.0 mEq/L dan Mg2+ > 2.0 mg/dL.'
  },
  {
    drugId: 'drug-haloperidol',
    drugName: 'Haloperidol',
    toxicityCategory: 'qtc_cardiac',
    severity: 'High',
    weightScore: 3,
    mechanism: 'Blokade kanal kalium hERG; risiko melonjak sangat tajam pada pemberian IV cepat dosis tinggi.',
    typicalOnset: 'Menit (IV) hingga hari (Oral)',
    riskFactors: ['Pemberian rute intravena (IV)', 'Dosis > 5 mg/hari', 'Kombinasi obat pemanjang QTc lain'],
    preventionTip: 'Gunakan rute oral bila memungkinkan; pantau EKG strip kontinu pada pemberian IV di ICU/IGD.'
  },
  {
    drugId: 'drug-azithromycin',
    drugName: 'Azithromycin',
    toxicityCategory: 'qtc_cardiac',
    severity: 'Moderate',
    weightScore: 2,
    mechanism: 'Makrolida yang memperpanjang durasi potensial aksi miokardium ventrikel.',
    typicalOnset: 'Hari ke-1 hingga ke-3 terapi',
    riskFactors: ['Penyakit jantung koroner dasar', 'Riwayat aritmia', 'Usia > 65 tahun'],
    preventionTip: 'Pertimbangkan antibiotik alternatif non-makrolida pada pasien dengan QTc baseline > 450 ms.'
  },
  {
    drugId: 'drug-ondansetron',
    drugName: 'Ondansetron',
    toxicityCategory: 'qtc_cardiac',
    severity: 'Moderate',
    weightScore: 2,
    mechanism: 'Antagonis 5-HT3 dengan efek blokade kanal natrium dan kalium kardiak bergantung dosis.',
    typicalOnset: 'Menit (IV) pasca-injeksi',
    riskFactors: ['Dosis tunggal IV > 16 mg', 'Kombinasi dengan obat anestesi/psikotropika'],
    preventionTip: 'Batasi dosis tunggal IV maksimal 16 mg; suntikkan lambat minimal selama 2-5 menit.'
  },
  {
    drugId: 'drug-ciprofloxacin',
    drugName: 'Ciprofloxacin',
    toxicityCategory: 'qtc_cardiac',
    severity: 'Moderate',
    weightScore: 2,
    mechanism: 'Inhibisi kanal hERG oleh fluorokuinolon.',
    typicalOnset: '24 - 48 jam pasca inisiasi',
    preventionTip: 'Hindari peresepan bersamaan dengan amiodarone, haloperidol, atau azithromycin.'
  },
  {
    drugId: 'drug-levofloxacin',
    drugName: 'Levofloxacin',
    toxicityCategory: 'qtc_cardiac',
    severity: 'Moderate',
    weightScore: 2,
    mechanism: 'Pemanjangan repolarisasi kardiak oleh molekul fluorokuinolon.',
    typicalOnset: 'Hari ke-1 hingga ke-5 terapi',
    preventionTip: 'Pantau EKG pada pasien ICU dengan penyakit kardiovaskular.'
  },

  // 2. Hepatotoxicity (DILI)
  {
    drugId: 'drug-paracetamol',
    drugName: 'Paracetamol',
    toxicityCategory: 'hepatotoxicity',
    severity: 'High',
    weightScore: 3,
    mechanism: 'Konversi CYP2E1 menjadi metabolit reaktif toksik N-acetyl-p-benzoquinone imine (NAPQI) yang menguras glutation hepar dan memicu nekrosis hepatosit.',
    typicalOnset: '24 - 72 jam pasca konsumsi dosis tinggi/overdose',
    riskFactors: ['Dosis > 4000 mg/24 jam', 'Alkoholisme kronis', 'Malnutrisi / Puasa lama'],
    preventionTip: 'Batasi dosis harian maksimal 4000 mg (atau 2000-3000 mg pada pasien gangguan hati/lansia). Sediakan antidotum N-Acetylcysteine.'
  },
  {
    drugId: 'drug-co-amoxiclav',
    drugName: 'Amoxicillin / Clavulanate (Co-Amoxiclav)',
    toxicityCategory: 'hepatotoxicity',
    severity: 'High',
    weightScore: 3,
    mechanism: 'Reaksi hepatotoksisitas kolestatik diperantarai imunologis terutama terpicu oleh komponen asam klavulanat.',
    typicalOnset: '1 hingga 6 minggu (dapat timbul berminggu-minggu setelah antibiotik selesai)',
    riskFactors: ['Usia > 55 tahun', 'Jenis kelamin pria', 'Durasi terapi > 14 hari'],
    preventionTip: 'Batasi durasi terapi maksimal 10-14 hari; periksa LFT jika timbul urin gelap atau kulit kuning pasca-terapi.'
  },
  {
    drugId: 'drug-atorvastatin',
    drugName: 'Atorvastatin',
    toxicityCategory: 'hepatotoxicity',
    severity: 'Moderate',
    weightScore: 2,
    mechanism: 'Peningkatan permeabilitas membran hepatosit dan inflamasi transien terinduksi statin.',
    typicalOnset: '1 hingga 3 bulan pasca inisiasi',
    preventionTip: 'Periksa SGOT/SGPT baseline; evaluasi jika pasien mengeluh urin pekat atau kelelahan ekstrim.'
  },
  {
    drugId: 'drug-ketoconazole',
    drugName: 'Ketoconazole',
    toxicityCategory: 'hepatotoxicity',
    severity: 'Critical',
    weightScore: 4,
    mechanism: 'Inhibisi enzim biosintesis sterol hepar yang memicu nekrosis hepatoseluler masif (FDA Black Box Warning).',
    typicalOnset: 'Minggu ke-2 hingga ke-8 terapi oral',
    preventionTip: 'Sediaan oral HANYA digunakan bila tidak ada alternatif antijamur lain; periksa LFT setiap minggu.'
  },
  {
    drugId: 'drug-methotrexate',
    drugName: 'Methotrexate',
    toxicityCategory: 'hepatotoxicity',
    severity: 'High',
    weightScore: 3,
    mechanism: 'Akumulasi poliglutamat intraseluler hepar yang memicu fibrosis hati dan sirosis pada penggunaan kronis.',
    typicalOnset: 'Bulan hingga tahun (dosis kumulatif > 1.5 - 3 gram)',
    preventionTip: 'Suplementasi Asam Folat 1 mg/hari (kecuali di hari minum MTX) dan periksa LFT berkala tiap 4-8 minggu.'
  },

  // 3. Nephrotoxicity (AKI)
  {
    drugId: 'drug-gentamicin',
    drugName: 'Gentamicin',
    toxicityCategory: 'nephrotoxicity',
    severity: 'Critical',
    weightScore: 4,
    mechanism: 'Endositosis pinositotik ke dalam sel epitel tubulus proksimal ginjal, memicu disfungsi lisosom, nekrosis tubulus akut (ATN), dan penurunan GFR.',
    typicalOnset: 'Hari ke-5 hingga ke-10 terapi',
    riskFactors: ['Kadar trough > 1 mcg/mL', 'Durasi terapi > 7 hari', 'Kombinasi dengan Furosemide / Vancomycin'],
    preventionTip: 'Terapkan Extended-Interval Dosing sekali sehari; Therapeutic Drug Monitoring (TDM) kadar palung < 1 mcg/mL.'
  },
  {
    drugId: 'drug-amikacin',
    drugName: 'Amikacin',
    toxicityCategory: 'nephrotoxicity',
    severity: 'Critical',
    weightScore: 4,
    mechanism: 'Akumulasi selektif di tubulus ginjal memicu nekrosis tubulus akut non-oligourik.',
    typicalOnset: 'Hari ke-7 hingga ke-14 terapi',
    preventionTip: 'Pertahankan kadar palung (trough) < 2.5 - 5 mcg/mL; periksa Serum Kreatinin tiap 2-3 hari.'
  },
  {
    drugId: 'drug-vancomycin',
    drugName: 'Vancomycin',
    toxicityCategory: 'nephrotoxicity',
    severity: 'High',
    weightScore: 3,
    mechanism: 'Stres oksidatif dan nekrosis sel tubulus ginjal, terutama bila kadar palung darah > 15-20 mcg/mL.',
    typicalOnset: 'Hari ke-4 hingga ke-8 terapi',
    preventionTip: 'Targetkan AUC/MIC 400-600; hindari kombinasi simultan dengan Piperacillin/Tazobactam bila memungkinkan.'
  },
  {
    drugId: 'drug-piperacillin-tazobactam',
    drugName: 'Piperacillin / Tazobactam',
    toxicityCategory: 'nephrotoxicity',
    severity: 'Moderate',
    weightScore: 2,
    mechanism: 'Nefritis interstisial akut dan sinergisme toksisitas mikrovaskular ginjal saat dikombinasi Vancomycin.',
    typicalOnset: 'Hari ke-3 hingga ke-7',
    preventionTip: 'Pantau fungsi ginjal harian bila dikombinasikan dengan Vancomycin di ICU.'
  },
  {
    drugId: 'drug-ibuprofen',
    drugName: 'Ibuprofen',
    toxicityCategory: 'nephrotoxicity',
    severity: 'High',
    weightScore: 3,
    mechanism: 'Inhibisi sintesis PGE2 dan PGI2 ginjal yang menyebabkan vasokonstriksi arteriol aferen glomerulus dan penurunan laju filtrasi ginjal akut.',
    typicalOnset: 'Hari ke-1 hingga ke-5 terapi',
    riskFactors: ['CKD', 'Gagal Jantung', 'Dehidrasi', 'Penggunaan ACEi/ARB'],
    preventionTip: 'Hindari NSAID pada pasien dengan eGFR < 30 mL/min atau pasien pengguna ACEi + Diuretik.'
  },

  // 4. CNS Sedation & Fall Risk
  {
    drugId: 'drug-alprazolam',
    drugName: 'Alprazolam',
    toxicityCategory: 'cns_sedation',
    severity: 'Critical',
    weightScore: 4,
    mechanism: 'Modulasi alosterik positif subunit alfa reseptor GABAA, melipatgandakan influks ion klorida hiperpolarisasi neuron SSP.',
    typicalOnset: '30 - 60 menit pasca konsumsi',
    preventionTip: 'Gunakan dosis efektif terendah sesingkat mungkin; jangan dikombinasikan dengan opioid atau alkohol.'
  },
  {
    drugId: 'drug-diazepam',
    drugName: 'Diazepam',
    toxicityCategory: 'cns_sedation',
    severity: 'Critical',
    weightScore: 4,
    mechanism: 'Agonis GABAA berdurasi panjang dengan metabolit aktif (desmethyldiazepam) yang terakumulasi berhari-hari.',
    typicalOnset: '15 - 30 menit',
    preventionTip: 'Hindari pada lansia karena risiko tinggi sedasi berkepanjangan dan patah tulang panggul akibat jatuh.'
  },
  {
    drugId: 'drug-tramadol',
    drugName: 'Tramadol',
    toxicityCategory: 'cns_sedation',
    severity: 'High',
    weightScore: 3,
    mechanism: 'Agonis reseptor mu-opioid dan penghambat reuptake serotonin/norepinefrin sentral.',
    typicalOnset: '1 - 2 jam',
    preventionTip: 'Waspadai penurunan kesadaran dan depresi pernapasan; siapkan antidot Naloxone bila terjadi intoksikasi.'
  },
  {
    drugId: 'drug-chlorpheniramine',
    drugName: 'Chlorpheniramine (CTM)',
    toxicityCategory: 'cns_sedation',
    severity: 'High',
    weightScore: 3,
    mechanism: 'Menembus sawar darah otak secara bebas dan memblokir reseptor H1 histaminergik sentral pengatur kewaspadaan.',
    typicalOnset: '30 - 60 menit',
    preventionTip: 'Gantikan dengan antihistamin generasi ke-2 (Cetirizine / Loratadine / Fexofenadine) untuk penggunaan siang hari.'
  },

  // 5. Anticholinergic Burden (ACB)
  {
    drugId: 'drug-amitriptyline',
    drugName: 'Amitriptyline',
    toxicityCategory: 'anticholinergic',
    severity: 'Critical',
    weightScore: 4,
    mechanism: 'Antagonis poten reseptor muskarinik M1-M5 sentral dan perifer (Skor ACB = 3).',
    typicalOnset: 'Jam hingga hari',
    riskFactors: ['Usia > 65 tahun', 'Polifarmasi', 'BPH', 'Glaukoma sudut sempit'],
    preventionTip: 'Hindari pada pasien lansia dengan gangguan kognitif; ganti dengan SSRI (Sertraline/Escitalopram).'
  },
  {
    drugId: 'drug-trihexyphenidyl',
    drugName: 'Trihexyphenidyl (THP)',
    toxicityCategory: 'anticholinergic',
    severity: 'Critical',
    weightScore: 4,
    mechanism: 'Antikolinergik sentral murni dengan skor ACB = 3.',
    typicalOnset: '1 - 2 jam',
    preventionTip: 'Titrasi dosis bertahap; pantau status kognitif dan retensi urin secara ketat.'
  },
  {
    drugId: 'drug-diphenhydramine',
    drugName: 'Diphenhydramine',
    toxicityCategory: 'anticholinergic',
    severity: 'High',
    weightScore: 3,
    mechanism: 'Blokade muskarinik kuat (Skor ACB = 3) memicu mulut kering, konstipasi, dan rasa bingung.',
    typicalOnset: '1 jam',
    preventionTip: 'Jangan digunakan sebagai obat tidur jangka panjang pada pasien usia lanjut.'
  },

  // 6. GI Bleeding
  {
    drugId: 'drug-aspirin',
    drugName: 'Aspirin',
    toxicityCategory: 'gi_bleeding',
    severity: 'High',
    weightScore: 3,
    mechanism: 'Asetilasi ireversibel enzim COX-1 trombosit dan mukosa lambung, melumpuhkan proteksi mukosa dan hemostasis primer.',
    typicalOnset: 'Hari hingga minggu terapi rutin',
    preventionTip: 'Gunakan sediaan salut enterik (Enteric-coated) dan kombinasikan dengan PPI pada pasien berisiko tinggi perdarahan.'
  },
  {
    drugId: 'drug-meloxicam',
    drugName: 'Meloxicam',
    toxicityCategory: 'gi_bleeding',
    severity: 'High',
    weightScore: 3,
    mechanism: 'Inhibisi sintesis prostaglandin mukosa gastrointestinal.',
    typicalOnset: 'Hari ke-3 hingga ke-7',
    preventionTip: 'Minum segera setelah makan; jangan gabungkan dengan NSAID lain atau steroid.'
  },
  {
    drugId: 'drug-dexamethasone',
    drugName: 'Dexamethasone',
    toxicityCategory: 'gi_bleeding',
    severity: 'Moderate',
    weightScore: 2,
    mechanism: 'Kortikosteroid menekan regenerasi epitel mukosa lambung dan sintesis mukus protektif.',
    typicalOnset: 'Minggu ke-1 hingga ke-2',
    preventionTip: 'Berikan bersama PPI jika digunakan bersamaan dengan NSAID atau antiplatelet.'
  },

  // 7. Electrolyte Imbalance
  {
    drugId: 'drug-spironolactone',
    drugName: 'Spironolactone',
    toxicityCategory: 'electrolyte',
    severity: 'Critical',
    weightScore: 4,
    mechanism: 'Antagonis reseptor aldosteron di tubulus distal ginjal yang menghentikan sekresi ion K+ ke dalam urin, memicu hiperkalemia berat.',
    typicalOnset: 'Hari ke-3 hingga ke-7',
    preventionTip: 'KONTRAINDIKASI dikombinasikan dengan suplemen kalium; periksa kalium darah berkala.'
  },
  {
    drugId: 'drug-potassium-chloride',
    drugName: 'Potassium Chloride',
    toxicityCategory: 'electrolyte',
    severity: 'Critical',
    weightScore: 4,
    mechanism: 'Penambahan beban kalium eksogen pekat yang dapat memicu lonjakan kalium darah fatal bila ekskresi renal terganggu.',
    typicalOnset: 'Menit (IV) hingga jam (Oral)',
    preventionTip: 'DILARANG bolus IV pekat langsung; encerkan sempurna dan pantau EKG serta kadar kalium.'
  },
  {
    drugId: 'drug-furosemide',
    drugName: 'Furosemide',
    toxicityCategory: 'electrolyte',
    severity: 'High',
    weightScore: 3,
    mechanism: 'Inhibisi kotransporter Na+/K+/2Cl- di ansa Henle tebal yang memicu ekskresi masif kalium, natrium, magnesium, dan kalsium ke urin.',
    typicalOnset: 'Jam pertama pasca dosis',
    preventionTip: 'Pantau elektrolit berkala; berikan suplemen kalium atau kombinasikan dengan spironolactone pada terapi jangka panjang.'
  },

  // 8. Ototoxicity
  {
    drugId: 'drug-gentamicin',
    drugName: 'Gentamicin',
    toxicityCategory: 'ototoxicity',
    severity: 'Critical',
    weightScore: 4,
    mechanism: 'Akumulasi di endolimfe dan perilimfe telinga dalam merusak sel rambut koklea dan organ vestibular secara ireversibel.',
    typicalOnset: 'Hari ke-7 hingga minggu ke-2',
    preventionTip: 'Hentikan segera jika pasien mengeluh tinitus berdenging atau pusing melayang.'
  },
  {
    drugId: 'drug-amikacin',
    drugName: 'Amikacin',
    toxicityCategory: 'ototoxicity',
    severity: 'Critical',
    weightScore: 4,
    mechanism: 'Kerusakan saraf akustik permanen terutama pada frekuensi suara tinggi.',
    typicalOnset: 'Minggu ke-1 hingga ke-3 terapi intensif',
    preventionTip: 'Lakukan tes audiometri serial pada terapi jangka panjang.'
  },
  {
    drugId: 'drug-furosemide',
    drugName: 'Furosemide',
    toxicityCategory: 'ototoxicity',
    severity: 'Moderate',
    weightScore: 2,
    mechanism: 'Perubahan komposisi elektrolit endolimfe pada stria vaskularis koklea pada injeksi IV bolus cepat dosis tinggi (>240 mg/jam).',
    typicalOnset: 'Menit pasca injeksi IV cepat',
    preventionTip: 'Berikan infus IV lambat dengan kecepatan maksimal 4 mg/menit pada dosis tinggi.'
  },
  // --- 1. QTc Prolongation (CredibleMeds Known Risk Category 1) ---
  {
    drugId: 'drug-domperidone',
    drugName: 'Domperidone',
    toxicityCategory: 'qtc_cardiac',
    severity: 'High',
    weightScore: 3,
    mechanism: 'Blokade kanal kalium hERG repolarisasi kardiak; FDA dan EMA mengeluarkan restriksi ketat karena risiko aritmia ventrikel fatal pada dosis >30 mg/hari atau usia >60 tahun.',
    typicalOnset: 'Hari ke-1 hingga hari ke-3 terapi',
    riskFactors: ['Dosis harian > 30 mg', 'Usia > 60 tahun', 'Kombinasi dengan inhibitor CYP3A4 kuat (Ketoconazole, Erythromycin)'],
    preventionTip: 'Gunakan dosis efektif terendah (maksimal 30 mg/hari) dengan durasi sesingkat mungkin (maks 7 hari); hindari pada pasien dengan riwayat gangguan konduksi jantung.'
  },
  {
    drugId: 'drug-erythromycin',
    drugName: 'Erythromycin',
    toxicityCategory: 'qtc_cardiac',
    severity: 'High',
    weightScore: 3,
    mechanism: 'Makrolida dengan efek inhibisi kanal IKr poten sekaligus inhibitor kuat enzim CYP3A4, memperbesar paparan obat kardiotoksik lain.',
    typicalOnset: '1 hingga 2 hari setelah konsumsi oral atau segera pasca infus IV',
    riskFactors: ['Infus intravena cepat', 'Disfungsi hepar', 'Hipokalemia / Hipomagnesemia'],
    preventionTip: 'Infuskan secara perlahan selama minimal 60 menit bila IV; rekam EKG berkala pada pasien polifarmasi.'
  },
  {
    drugId: 'drug-moxifloxacin',
    drugName: 'Moxifloxacin',
    toxicityCategory: 'qtc_cardiac',
    severity: 'High',
    weightScore: 3,
    mechanism: 'Fluorokuinolon respiratorik dengan afinitas tertinggi terhadap kanal kalium IKr di antara semua kuinolon (rata-rata memperpanjang QTc 10-14 ms).',
    typicalOnset: 'Hari ke-1 pasca pemberian dosis pertama',
    riskFactors: ['Sindrom QT panjang bawaan', 'Gagal jantung kongestif', 'Kombinasi antiaritmia kelas IA atau III'],
    preventionTip: 'Hindari penggunaan pada pasien dengan baseline QTc > 450 ms (pria) atau > 470 ms (wanita); pilih Levofloxacin atau Ciprofloxacin jika risiko kardiovaskular tinggi.'
  },
  {
    drugId: 'drug-sotalol',
    drugName: 'Sotalol',
    toxicityCategory: 'qtc_cardiac',
    severity: 'Critical',
    weightScore: 4,
    mechanism: 'Antiaritmia kelas III dengan efek pemanjangan potensial aksi ventrikel yang sangat poten dan tergantung dosis; insiden Torsades de Pointes mencapai 2-4%.',
    typicalOnset: '2 hingga 3 hari pasca inisiasi atau kenaikan dosis (80% TdP terjadi dalam 3 hari pertama)',
    riskFactors: ['Gangguan fungsi ginjal (ekskresi 100% renal)', 'Bradikardia (<50 bpm)', 'Dosis > 160 mg/hari'],
    preventionTip: 'Wajib inisiasi terapi di fasilitas rawat inap dengan pemantauan EKG kontinu dan klirens kreatinin berkala.'
  },
  {
    drugId: 'drug-methadone',
    drugName: 'Methadone',
    toxicityCategory: 'qtc_cardiac',
    severity: 'High',
    weightScore: 3,
    mechanism: 'Agonis reseptor mu-opioid sintetik yang menghambat kanal ion kalium hERG miokard secara langsung pada konsentrasi terapi dan supraterapi.',
    typicalOnset: 'Minggu ke-1 hingga berbulan-bulan terapi rumatan',
    riskFactors: ['Dosis > 100 mg/hari', 'Koadministrasi obat penghambat CYP3A4 atau pemanjang QTc lain'],
    preventionTip: 'Lakukan skrining EKG sebelum inisiasi, 30 hari pasca inisiasi, dan setiap tahun atau saat dosis dinaikkan > 100 mg/hari.'
  },
  {
    drugId: 'drug-chlorpromazine',
    drugName: 'Chlorpromazine',
    toxicityCategory: 'qtc_cardiac',
    severity: 'High',
    weightScore: 3,
    mechanism: 'Fenotiazin antipsikotik tipikal yang memperpanjang refrakter ventrikel melalui hambatan repolarisasi fase 3.',
    typicalOnset: 'Hari ke-3 hingga minggu ke-2',
    riskFactors: ['Dosis tinggi parenteral', 'Penyakit kardiovaskular kronis'],
    preventionTip: 'Pantau tanda sinkop dan periksa EKG rutin bila diberikan bersama psikofarmaka lainnya.'
  },
  {
    drugId: 'drug-citalopram',
    drugName: 'Citalopram',
    toxicityCategory: 'qtc_cardiac',
    severity: 'Moderate',
    weightScore: 2,
    mechanism: 'SSRI yang memiliki efek blokade IKr tergantung dosis; FDA membatasi dosis maksimal 40 mg/hari (20 mg pada lansia >60 tahun) karena bahaya aritmia ventrikel.',
    typicalOnset: '1 hingga 2 minggu pasca inisiasi dosis',
    riskFactors: ['Usia > 60 tahun', 'Status poor metabolizer CYP2C19', 'Dosis > 20 mg/hari pada lansia'],
    preventionTip: 'Batasi dosis maksimal 20 mg/hari pada pasien geriatri; pertimbangkan Sertraline sebagai alternatif dengan risiko QTc lebih rendah.'
  },

  // --- 2. Hepatotoxicity & Drug-Induced Liver Injury (LiverTox NIH) ---
  {
    drugId: 'drug-isoniazid',
    drugName: 'Isoniazid',
    toxicityCategory: 'hepatotoxicity',
    severity: 'Critical',
    weightScore: 4,
    mechanism: 'Metabolit reaktif asetilhidrazin dan hidrazin membentuk ikatan kovalen dengan makromolekul hepatosit, menyebabkan nekrosis sel hati fokal hingga masif (LiverTox Category A).',
    typicalOnset: '2 minggu hingga 3 bulan (jarang setelah 6 bulan)',
    riskFactors: ['Usia > 35 tahun', 'Konsumsi alkohol kronis', 'Asetilator lambat (slow acetylator)', 'Penggunaan bersama Rifampisin'],
    preventionTip: 'Pantau SGOT/SGPT baseline dan setiap bulan; edukasi pasien untuk segera periksa bila urin berwarna teh gelap, mual persisten, atau sklera ikterik.'
  },
  {
    drugId: 'drug-rifampicin',
    drugName: 'Rifampicin',
    toxicityCategory: 'hepatotoxicity',
    severity: 'High',
    weightScore: 3,
    mechanism: 'Inhibisi transporter ekskresi asam empedu hepatoseluler (BSEP) dan induksi enzim sitokrom P450 yang melipatgandakan metabolit toksik INH (LiverTox Category A).',
    typicalOnset: '1 hingga 6 minggu pertama terapi',
    riskFactors: ['Penyakit hati kronis dasar (Hepatitis B/C)', 'Kombinasi OAT multidrug', 'Malnutrisi'],
    preventionTip: 'Bedakan hiperbilirubinemia terisolasi tanpa kenaikan transaminase (kompetisi uptake bilirubin) dari DILI nekrotik sejati.'
  },
  {
    drugId: 'drug-pyrazinamide',
    drugName: 'Pyrazinamide',
    toxicityCategory: 'hepatotoxicity',
    severity: 'High',
    weightScore: 3,
    mechanism: 'Hepatotoksisitas dose-dependent dan idiosinkratik akibat metabolit asam pirazinoat yang merusak membran mitokondria hepatosit.',
    typicalOnset: 'Minggu ke-2 hingga ke-8 fase intensif TB',
    riskFactors: ['Dosis > 30 mg/kgBB/hari', 'Pemberian bersama INH dan Rifampisin'],
    preventionTip: 'Hentikan Pyrazinamide bila SGOT/SGPT meningkat > 3x batas atas normal dengan gejala klinis atau > 5x tanpa gejala.'
  },
  {
    drugId: 'drug-valproic-acid',
    drugName: 'Valproic Acid',
    toxicityCategory: 'hepatotoxicity',
    severity: 'Critical',
    weightScore: 4,
    mechanism: 'Penghambatan beta-oksidasi asam lemak mitokondria dan deplesi karnitin, memicu mikrovesikular steatosis dan nekrosis hepatoseluler masif (LiverTox Category A).',
    typicalOnset: '1 hingga 6 bulan pertama terapi',
    riskFactors: ['Anak usia < 2 tahun', 'Politerapi antikonvulsan', 'Gangguan siklus urea atau mutasi gen POLG'],
    preventionTip: 'Skrining tes fungsi hati ketat pada 6 bulan pertama; pertimbangkan suplementasi L-karnitin bila muncul kecurigaan hepatotoksisitas.'
  },
  {
    drugId: 'drug-diclofenac',
    drugName: 'Diclofenac',
    toxicityCategory: 'hepatotoxicity',
    severity: 'Moderate',
    weightScore: 2,
    mechanism: 'Bioaktivasi membentuk metabolit reaktif kuinon imina dan diklofenak asil glukuronida yang memicu stres oksidatif serta reaksi imunologis (LiverTox Category A).',
    typicalOnset: '1 hingga 3 bulan pasca inisiasi',
    riskFactors: ['Penggunaan jangka panjang (>30 hari)', 'Dosis harian >= 150 mg', 'Wanita usia lanjut'],
    preventionTip: 'Periksa transaminase serum berkala bila digunakan untuk terapi artritis kronis; ganti ke Parasetamol atau topikal NSAID bila transaminase meningkat.'
  },
  {
    drugId: 'drug-carbamazepine-hepa',
    drugName: 'Carbamazepine',
    toxicityCategory: 'hepatotoxicity',
    severity: 'High',
    weightScore: 3,
    mechanism: 'Cedera hati kolestatik atau campuran kolestatik-hepatoseluler akibat pembentukan metabolit aren oksida reaktif dan reaksi hipersensitivitas imunologis.',
    typicalOnset: '2 hingga 8 minggu pasca inisiasi',
    riskFactors: ['Hipersensitivitas antikonvulsan sebelumnya', 'Dosis tinggi'],
    preventionTip: 'Pantau enzim hati berkala; waspadai bila kenaikan transaminase disertai ruam kulit atau eosinofilia (tanda DRESS).'
  },
  {
    drugId: 'drug-propylthiouracil',
    drugName: 'Propylthiouracil',
    toxicityCategory: 'hepatotoxicity',
    severity: 'High',
    weightScore: 3,
    mechanism: 'FDA Boxed Warning: Nekrosis hepatoseluler fulminan akut akibat serangan autoimun terinduksi metabolit reaktif sel hati.',
    typicalOnset: '2 minggu hingga 6 bulan',
    riskFactors: ['Dosis tinggi awal', 'Pasien anak dan remaja'],
    preventionTip: 'Jadikan Methimazole sebagai lini pertama hipertiroidisme, kecuali pada trimester pertama kehamilan atau badai tiroid.'
  },

  // --- 3. Nephrotoxicity & Acute Kidney Injury (KDIGO Criteria) ---
  {
    drugId: 'drug-amphotericin-b',
    drugName: 'Amphotericin B',
    toxicityCategory: 'nephrotoxicity',
    severity: 'Critical',
    weightScore: 4,
    mechanism: 'Vasokonstriksi arteriol renalis aferen berat yang menurunkan LFG drastis, serta pengikatan pada kolesterol membran tubulus distal yang memicu kebocoran elektrolit (Renal Tubular Acidosis tipe 1).',
    typicalOnset: 'Hari ke-2 hingga minggu ke-2 terapi',
    riskFactors: ['Formulasi deoksikolat konvensional', 'Dosis kumulatif > 1 gram', 'Dehidrasi', 'Penggunaan bersama obat nefrotoksik lain'],
    preventionTip: 'Lakukan hidrasi pre- dan post-infus dengan 500-1000 mL NaCl 0.9%; utamakan formulasi Liposomal bila tersedia; suplementasi kalium dan magnesium preventif.'
  },
  {
    drugId: 'drug-colistin',
    drugName: 'Colistin',
    toxicityCategory: 'nephrotoxicity',
    severity: 'Critical',
    weightScore: 4,
    mechanism: 'Polimiksin yang meningkatkan permeabilitas membran sel tubulus proksimal melalui pengikatan lipopolisakarida, memicu lisis sel epitel dan nekrosis tubuler akut (insiden AKI 30-50%).',
    typicalOnset: 'Hari ke-3 hingga ke-7 terapi',
    riskFactors: ['Dosis muatan tinggi', 'Durasi terapi > 7 hari', 'Pemberian bersama Vancomycin atau NSAID'],
    preventionTip: 'Kalkulasi dosis berdasarkan berat badan ideal (IBW) dan klirens kreatinin; pantau kreatinin serum harian di ICU.'
  },
  {
    drugId: 'drug-cisplatin-nephro',
    drugName: 'Cisplatin',
    toxicityCategory: 'nephrotoxicity',
    severity: 'Critical',
    weightScore: 4,
    mechanism: 'Akumulasi platina selektif di tubulus proksimal ginjal menginduksi apoptosis sel epitel, stres retikulum endoplasma, dan nekrosis tubuler akut berat.',
    typicalOnset: 'Hari ke-3 hingga hari ke-10 pasca siklus kemoterapi',
    riskFactors: ['Dosis tunggal > 50 mg/m2', 'Dehidrasi', 'Disfungsi ginjal baseline'],
    preventionTip: 'Protokol hidrasi salin agresif (NaCl 0.9% 1-2 liter dengan manitol) sebelum dan sesudah pemberian kemoterapi.'
  },
  {
    drugId: 'drug-cyclosporine',
    drugName: 'Cyclosporine',
    toxicityCategory: 'nephrotoxicity',
    severity: 'High',
    weightScore: 3,
    mechanism: 'Kalsineurin inhibitor yang memicu ketidakseimbangan endotelin/nitrat oksida, menyebabkan vasokonstriksi arteriol aferen renalis akut dan fibrosis interstisial kronis.',
    typicalOnset: 'Minggu ke-1 hingga berbulan-bulan pasca transplantasi',
    riskFactors: ['Kadar palung (trough level) darah di atas rentang terapi', 'Penggunaan bersama NSAID atau ACE inhibitor'],
    preventionTip: 'Pantau therapeutic drug monitoring (TDM) kadar palung darah secara rutin; sesuaikan dosis jika kadar melebihi target klinis.'
  },
  {
    drugId: 'drug-tacrolimus',
    drugName: 'Tacrolimus',
    toxicityCategory: 'nephrotoxicity',
    severity: 'High',
    weightScore: 3,
    mechanism: 'Vasokonstriksi mikrovaskular renalis kortikal dan penurunan perfusi glomerulus reversibel/ireversibel yang tergantung dosis.',
    typicalOnset: 'Minggu ke-1 hingga minggu ke-4',
    riskFactors: ['Kadar C0 darah > 15-20 ng/mL', 'Interaksi dengan inhibitor CYP3A4'],
    preventionTip: 'Lakukan pemeriksaan kadar palung darah utuh rutin; hidrasi adekuat pasien pasca transplantasi organ.'
  },
  {
    drugId: 'drug-acyclovir-iv',
    drugName: 'Acyclovir',
    toxicityCategory: 'nephrotoxicity',
    severity: 'Moderate',
    weightScore: 2,
    mechanism: 'Presipitasi kristal asiklovir yang sukar larut di dalam lumen tubulus ginjal, menyebabkan nefropati kristal obstruktif akut.',
    typicalOnset: '24 hingga 48 jam pasca infus intravena',
    riskFactors: ['Infus IV bolus cepat (<1 jam)', 'Pasien dehidrasi / hipovolemia', 'Dosis tinggi (>= 10 mg/kgBB q8h)'],
    preventionTip: 'Berikan infus IV perlahan selama minimal 1-2 jam dan pastikan hidrasi cairan intravena yang adekuat selama terapi.'
  },
  {
    drugId: 'drug-contrast-media',
    drugName: 'Zat Kontras Radiologi',
    toxicityCategory: 'nephrotoxicity',
    severity: 'High',
    weightScore: 3,
    mechanism: 'Vasokonstriksi medula ginjal berkepanjangan yang memicu hipoksia jaringan medular dan sitotoksisitas langsung zat kontras pada sel tubulus (Contrast-Induced AKI).',
    typicalOnset: '24 hingga 72 jam pasca prosedur CT scan dengan kontras / angiografi',
    riskFactors: ['eGFR baseline < 30-45 mL/min/1.73m2', 'Diabetes mellitus dengan nefropati', 'Gagal jantung dekompensasi'],
    preventionTip: 'Hidrasi intravena NaCl 0.9% sebelum dan sesudah prosedur; evaluasi kreatinin serum 48 jam pasca prosedur.'
  },

  // --- 4. CNS Depression, Sedation & Fall Risk (AGS Beers Criteria 2023) ---
  {
    drugId: 'drug-zolpidem',
    drugName: 'Zolpidem',
    toxicityCategory: 'cns_sedation',
    severity: 'High',
    weightScore: 3,
    mechanism: 'Agonis selektif reseptor GABA-A subunit alfa-1; depresi sistem saraf pusat yang kuat memicu disorientasi nokturnal, somnambulisme (*sleep-walking/driving*), dan fraktur akibat jatuh pada lansia (Beers Criteria).',
    typicalOnset: '15 hingga 30 menit pasca konsumsi oral',
    riskFactors: ['Usia > 65 tahun', 'Dosis > 5 mg pada wanita/lansia', 'Kombinasi dengan alkohol atau depresan SSP lain'],
    preventionTip: 'Edukasi pasien untuk segera berbaring di tempat tidur setelah minum obat; gunakan dosis terendah 5 mg pada wanita dan lansia; batasi durasi maksimal 2-4 minggu.'
  },
  {
    drugId: 'drug-pregabalin',
    drugName: 'Pregabalin',
    toxicityCategory: 'cns_sedation',
    severity: 'High',
    weightScore: 3,
    mechanism: 'Pengikatan pada subunit alfa-2-delta kanal kalsium presinaptik menurunkan pelepasan neurotransmiter eksitatori; memicu pusing berat, ataksia, kantuk ekstrem, dan depresi napas sinergis dengan opioid.',
    typicalOnset: '1 hingga 3 hari pasca inisiasi dosis',
    riskFactors: ['Kombinasi dengan opioid / tramadol', 'Gagal ginjal (ekskresi renal)', 'Usia lanjut'],
    preventionTip: 'Titrasi dosis bertahap mulai dari dosis malam hari (50-75 mg); peringatkan bahaya mengemudi dan mengangkat beban berat.'
  },
  {
    drugId: 'drug-gabapentin',
    drugName: 'Gabapentin',
    toxicityCategory: 'cns_sedation',
    severity: 'Moderate',
    weightScore: 2,
    mechanism: 'Modulasi kanal kalsium voltage-gated sentral; memicu rasa melayang, kelemahan motorik, kantuk, dan risiko jatuh pada populasi geriatri.',
    typicalOnset: 'Hari ke-1 hingga hari ke-5',
    riskFactors: ['Dosis > 900 mg/hari', 'Penurunan fungsi ginjal'],
    preventionTip: 'Mulai dari dosis malam terendah (100-300 mg); sesuaikan dosis berdasarkan klirens kreatinin pasien.'
  },
  {
    drugId: 'drug-clonazepam',
    drugName: 'Clonazepam',
    toxicityCategory: 'cns_sedation',
    severity: 'Critical',
    weightScore: 4,
    mechanism: 'Benzodiazepin potensi tinggi dengan waktu paruh eliminasi panjang (30-40 jam); akumulasi obat memicu sedasi berat berkepanjangan, ataksia motorik, dan delirium hipoaktif pada lansia.',
    typicalOnset: '1 hingga 2 jam (efek sedatif bertahan >24 jam)',
    riskFactors: ['Lansia (penurunan klirens hepar)', 'Pemberian bersama opioid atau sedatif lain'],
    preventionTip: 'Hindari penggunaan jangka panjang untuk insomnia; tapering off bertahap saat penghentian untuk mencegah withdrawal syndrome.'
  },
  {
    drugId: 'drug-phenobarbital-sed',
    drugName: 'Phenobarbital',
    toxicityCategory: 'cns_sedation',
    severity: 'Critical',
    weightScore: 4,
    mechanism: 'Barbiturat yang memperpanjang durasi pembukaan kanal ion klorida GABA-A secara alosterik independen; menekan formasi retikularis batang otak, memicu letargi berat dan depresi pernapasan.',
    typicalOnset: '30 menit hingga beberapa jam',
    riskFactors: ['Disfungsi pernapasan kronis (PPOK/Asma)', 'Overdosis obat'],
    preventionTip: 'Pantau status kesadaran dan frekuensi napas; waspadai ketergantungan fisik dan interaksi induksi enzim sitokrom.'
  },
  {
    drugId: 'drug-midazolam',
    drugName: 'Midazolam',
    toxicityCategory: 'cns_sedation',
    severity: 'Critical',
    weightScore: 4,
    mechanism: 'Benzodiazepin aksi sangat cepat intravena; menekan sistem saraf pusat secara masif, memicu sedasi dalam, hilangnya refleks proteksi jalan napas, dan amnesia anterograd.',
    typicalOnset: '1 hingga 3 menit pasca injeksi IV',
    riskFactors: ['Injeksi bolus cepat', 'Pasien hemodinamik tidak stabil'],
    preventionTip: 'Wajib dipantau ketat dengan pulse oximeter dan ketersediaan peralatan resusitasi jalan napas serta antidot Flumazenil.'
  },
  {
    drugId: 'drug-morphine',
    drugName: 'Morphine',
    toxicityCategory: 'cns_sedation',
    severity: 'High',
    weightScore: 3,
    mechanism: 'Agonisme reseptor mu-opioid pada medula oblongata dan formasio retikularis; depresi napas dose-dependent, sedasi berat, dan miosis pupil.',
    typicalOnset: '15 menit (IV) hingga 60 menit (Oral)',
    riskFactors: ['Akumulasi metabolit aktif M6G pada gagal ginjal', 'Kombinasi benzodiazepin'],
    preventionTip: 'Pantau laju pernapasan (RR); siapkan Naloxone injeksi bila RR < 10x/menit atau kesadaran menurun drastis.'
  },

  // --- 5. Anticholinergic Cognitive Burden (ACB Score 3 - AGS Beers Criteria) ---
  {
    drugId: 'drug-oxybutynin',
    drugName: 'Oxybutynin',
    toxicityCategory: 'anticholinergic',
    severity: 'Critical',
    weightScore: 4,
    mechanism: 'Antagonis non-selektif reseptor muskarinik (M1, M2, M3) yang sangat lipofilik dan mudah menembus sawar darah otak; skor ACB 3, memicu mulut kering parah, retensi urin akut, penglihatan kabur, dan penurunan kognitif/demensia.',
    typicalOnset: 'Hari ke-1 hingga hari ke-3 terapi',
    riskFactors: ['Pasien geriatri usia > 65 tahun', 'BPH pada pria', 'Glaukoma sudut tertutup'],
    preventionTip: 'Hindari pada lansia dengan demensia atau BPH; pertimbangkan sediaan transdermal atau beta-3 agonis (Mirabegron) sebagai alternatif modern.'
  },
  {
    drugId: 'drug-solifenacin',
    drugName: 'Solifenacin',
    toxicityCategory: 'anticholinergic',
    severity: 'Moderate',
    weightScore: 2,
    mechanism: 'Antagonis muskarinik relatif selektif M3 vesika urinaria; tetap memiliki efek antikolinergik sistemik (mulut kering, konstipasi, perpanjangan interval QTc).',
    typicalOnset: 'Minggu ke-1 terapi',
    riskFactors: ['Gangguan fungsi hepar/ginjal berat', 'Retensi lambung'],
    preventionTip: 'Gunakan dosis awal 5 mg sekali sehari; evaluasi keluhan mulut kering dan fungsi miksi pasien.'
  },
  {
    drugId: 'drug-clozapine',
    drugName: 'Clozapine',
    toxicityCategory: 'anticholinergic',
    severity: 'Critical',
    weightScore: 4,
    mechanism: 'Antipsikotik atipikal dengan efek antikolinergik muskarinik perifer sangat kuat; memicu ileus paralitik intestinal mematikan, retensi urin, dan konstipasi obstruktif (disertai hipersalivasi nokturnal paradoksal).',
    typicalOnset: 'Minggu ke-1 hingga ke-4 terapi',
    riskFactors: ['Kombinasi obat antikolinergik lain', 'Kurang mobilisasi fisik'],
    preventionTip: 'Wajib pantau frekuensi BAB setiap hari; berikan laksatif profilaksis; laporkan segera bila perut membuncit kembung hebat dan nyeri.'
  },
  {
    drugId: 'drug-olanzapine',
    drugName: 'Olanzapine',
    toxicityCategory: 'anticholinergic',
    severity: 'High',
    weightScore: 3,
    mechanism: 'Afinitas tinggi terhadap reseptor muskarinik M1-M5 otak dan perifer; skor ACB 3, memicu sedasi berat, mulut kering, konstipasi, dan rasa lapar metabolik.',
    typicalOnset: 'Hari ke-2 hingga minggu ke-2',
    riskFactors: ['Lansia dengan demensia psikosis (Boxed Warning mortalitas)', 'Glaukoma'],
    preventionTip: 'Hindari peresepan pada lansia untuk mengatasi insomnia terisolasi; pantau berat badan dan gula darah berkala.'
  },
  {
    drugId: 'drug-hydroxyzine',
    drugName: 'Hydroxyzine',
    toxicityCategory: 'anticholinergic',
    severity: 'High',
    weightScore: 3,
    mechanism: 'Antihistamin generasi pertama penembus sawar darah otak poten; memblokade reseptor H1 dan muskarinik sentral (skor ACB 3), memicu delirium, konstipasi, dan retensi urin.',
    typicalOnset: '1 hingga 2 jam pasca konsumsi',
    riskFactors: ['Usia lanjut (Beers Criteria)', 'Kombinasi antimuskarinik lain'],
    preventionTip: 'Gantikan dengan antihistamin generasi ke-2 (Cetirizine, Loratadine, Fexofenadine) untuk mengatasi pruritus/alergi tanpa efek antikolinergik sentral.'
  },
  {
    drugId: 'drug-atropine',
    drugName: 'Atropine',
    toxicityCategory: 'anticholinergic',
    severity: 'Critical',
    weightScore: 4,
    mechanism: 'Antagonis kompetitif muskarinik klasik; memblokade total stimulasi parasimpatis, memicu takikardia hebat, anhidrosis (kulit panas kering), midriasis total fotofobia, retensi urin akut, dan psikosis atropinik.',
    typicalOnset: 'Menit (IV/IM) hingga 30 menit (Oral/Tetes Mata)',
    riskFactors: ['Glaukoma sudut tertutup', 'Uropati obstruktif / BPH', 'Anak kecil dan lansia'],
    preventionTip: 'Kontraindikasi mutlak pada glaukoma sudut sempit; siapkan Physostigmine sebagai antidot bila terjadi intoksikasi atropin berat.'
  },
  {
    drugId: 'drug-hyoscine',
    drugName: 'Hyoscine Butylbromide',
    toxicityCategory: 'anticholinergic',
    severity: 'Moderate',
    weightScore: 2,
    mechanism: 'Senyawa amonium kuartener antispasmodik perifer; menghambat motilitas otot polos lambung-usus dan sekresi saluran cerna.',
    typicalOnset: '30 hingga 60 menit',
    riskFactors: ['Takikardia kardiak', 'Obstruksi mekanik saluran cerna'],
    preventionTip: 'Gunakan hanya untuk jangka pendek spasme kram perut akut; waspadai bila pasien mengeluhkan mata silau dan sulit buang air kecil.'
  },

  // --- 6. Gastrointestinal Mucosal Injury & Bleeding (ACG Guidelines) ---
  {
    drugId: 'drug-ketorolac',
    drugName: 'Ketorolac',
    toxicityCategory: 'gi_bleeding',
    severity: 'Critical',
    weightScore: 4,
    mechanism: 'NSAID non-selektif poten dengan rasio inhibisi COX-1/COX-2 sangat tinggi; supresi total prostaglandin mukosa lambung memicu erosi gaster cepat, ulkus peptikum akut, dan perdarahan saluran cerna masif (FDA Boxed Warning: Maksimal 5 hari pemakaian).',
    typicalOnset: 'Hari ke-1 hingga hari ke-3 terapi',
    riskFactors: ['Durasi terapi > 5 hari berturut-turut', 'Riwayat tukak lambung', 'Usia > 65 tahun', 'Penggunaan bersama antikoagulan'],
    preventionTip: 'KONTRAINDIKASI terapi melebihi 5 hari kumulatif; kombinasikan selalu dengan PPI (Omeprazole/Pantoprazole); turunkan dosis pada lansia.'
  },
  {
    drugId: 'drug-piroxicam',
    drugName: 'Piroxicam',
    toxicityCategory: 'gi_bleeding',
    severity: 'High',
    weightScore: 3,
    mechanism: 'Derivat asam enolat dengan waktu paruh biologis sangat panjang (~50 jam) dan resirkulasi enterohepatik berulang, melipatgandakan paparan asam gaster dan risiko perforasi saluran cerna.',
    typicalOnset: '1 hingga 2 minggu terapi',
    riskFactors: ['Dosis > 20 mg/hari', 'Usia lanjut', 'Tanpa ko-peresepan gastroprotektor'],
    preventionTip: 'Hindari sebagai lini pertama pada pasien usia > 65 tahun; wajib sertakan PPI atau Misoprostol bila terpaksa digunakan.'
  },
  {
    drugId: 'drug-diclofenac-gi',
    drugName: 'Diclofenac',
    toxicityCategory: 'gi_bleeding',
    severity: 'High',
    weightScore: 3,
    mechanism: 'Inhibisi sintesis prostaglandin mukosa E2 dan I2 serta efek topikal asam langsung yang memicu mikroulserasi lambung dan usus halus.',
    typicalOnset: 'Minggu ke-1 hingga minggu ke-4',
    riskFactors: ['Dosis >= 150 mg/hari', 'Infeksi H. pylori', 'Kombinasi dengan kortikosteroid atau antiplatelet'],
    preventionTip: 'Gunakan sediaan salut enterik bersama makanan; pertimbangkan NSAID selektif COX-2 (Celecoxib) + PPI untuk pasien dengan riwayat dispepsia berat.'
  },
  {
    drugId: 'drug-indomethacin',
    drugName: 'Indomethacin',
    toxicityCategory: 'gi_bleeding',
    severity: 'High',
    weightScore: 3,
    mechanism: 'NSAID derivat indol klasik sangat ulserogenik; menghambat COX lambung dan perfusi mikrovaskular mukosa gaster.',
    typicalOnset: 'Hari ke-3 hingga minggu ke-1 terapi',
    riskFactors: ['Riwayat ulkus peptikum', 'Lansia'],
    preventionTip: 'Batasi penggunaan untuk serangan artritis gout akut jangka pendek (3-5 hari); selalu minum setelah makan penuh.'
  },
  {
    drugId: 'drug-warfarin-gi',
    drugName: 'Warfarin',
    toxicityCategory: 'gi_bleeding',
    severity: 'Critical',
    weightScore: 4,
    mechanism: 'Antikoagulan antagonis vitamin K; tidak memicu erosi gaster langsung, namun melipatgandakan volume dan keparahan perdarahan saluran cerna saat terjadi lesi mukosa sekunder (risiko fatalitas tinggi).',
    typicalOnset: 'Kapanpun selama terapi (sangat tinggi saat INR > 3.0)',
    riskFactors: ['INR > 3.0 - 4.5', 'Koadministrasi NSAID atau Antiplatelet (Triple Therapy)', 'Usia > 75 tahun'],
    preventionTip: 'Pantau INR rutin; hindari sepenuhnya kombinasi bebas dengan NSAID; berikan PPI profilaksis pada pasien risiko tinggi.'
  },
  {
    drugId: 'drug-clopidogrel-gi',
    drugName: 'Clopidogrel',
    toxicityCategory: 'gi_bleeding',
    severity: 'Moderate',
    weightScore: 2,
    mechanism: 'Inhibisi reseptor P2Y12 platelet mencegah pelepasan faktor pertumbuhan trombosit (PDGF), menghambat proses angiogenesis dan penyembuhan luka alami pada erosi mukosa lambung.',
    typicalOnset: 'Minggu ke-2 hingga berbulan-bulan terapi',
    riskFactors: ['Dual Antiplatelet Therapy (DAPT bersama Aspirin)', 'Riwayat perdarahan saluran cerna'],
    preventionTip: 'Kombinasikan dengan PPI gastroprotektif (Pantoprazole lebih diutamakan dibanding Omeprazole untuk meminimalkan interaksi CYP2C19).'
  },
  {
    drugId: 'drug-methylprednisolone-gi',
    drugName: 'Methylprednisolone',
    toxicityCategory: 'gi_bleeding',
    severity: 'Moderate',
    weightScore: 2,
    mechanism: 'Kortikosteroid sistemik yang menekan pergantian sel epitel mukosa gaster dan sekresi mukus pelindung; melipatgandakan risiko ulkus hingga 4x lipat bila dikombinasikan dengan NSAID.',
    typicalOnset: '2 hingga 4 minggu terapi dosis tinggi',
    riskFactors: ['Kombinasi wajib dengan NSAID (misal asam mefenamat / piroksikam)', 'Dosis > 16-32 mg/hari'],
    preventionTip: 'HINDARI peresepan ganda steroid + NSAID tanpa indikasi mutlak; sertakan PPI bila kombinasi tidak dapat dihindari.'
  },

  // --- 7. Electrolyte Disturbance (K+, Na+, Ca2+, Mg2+) ---
  {
    drugId: 'drug-hct',
    drugName: 'Hydrochlorothiazide (HCT)',
    toxicityCategory: 'electrolyte',
    severity: 'High',
    weightScore: 3,
    mechanism: 'Inhibisi kotransporter Na+/Cl- di tubulus distal memicu ekskresi natrium dan air; peningkatan aliran cairan ke tubulus kolektikus merangsang pertukaran Na+-K+ aldosteron, memicu hipokalemia berat (<3.0 mEq/L), hiponatremia, dan hipomagnesemia.',
    typicalOnset: 'Hari ke-3 hingga minggu ke-3 terapi',
    riskFactors: ['Asupan kalium rendah', 'Usia lanjut wanita (sangat rentan hiponatremia berat)', 'Kombinasi dengan obat pemanjang QTc'],
    preventionTip: 'Periksa elektrolit serum berkala; anjurkan konsumsi makanan kaya kalium (pisang, jeruk, kentang); kombinasikan dengan hemat kalium jika diperlukan.'
  },
  {
    drugId: 'drug-captopril-k',
    drugName: 'Captopril',
    toxicityCategory: 'electrolyte',
    severity: 'High',
    weightScore: 3,
    mechanism: 'Supresi sintesis angiotensin II menghambat pelepasan aldosteron dari korteks adrenal, memblokade sekresi kalium di tubulus distal dan memicu hiperkalemia fatal (>5.5 mEq/L).',
    typicalOnset: 'Hari ke-3 hingga minggu ke-2 pasca inisiasi',
    riskFactors: ['Insufisiensi ginjal (eGFR < 45)', 'Diabetes melitus dengan hipoaldosteronisme hiporeninemik', 'Suplemen kalium / garam diet rendah natrium berbasis kalium'],
    preventionTip: 'Periksa kadar kalium serum dan kreatinin sebelum dan 1-2 minggu pasca inisiasi; hentikan suplemen kalium oral eksogen.'
  },
  {
    drugId: 'drug-candesartan-k',
    drugName: 'Candesartan',
    toxicityCategory: 'electrolyte',
    severity: 'High',
    weightScore: 3,
    mechanism: 'Blokade selektif reseptor AT1 menghambat sekresi aldosteron renal; akumulasi kalium sistemik berisiko aritmia henti jantung bila digabung obat penahan kalium lain.',
    typicalOnset: '1 hingga 2 minggu pasca inisiasi',
    riskFactors: ['Pemberian bersama Spironolactone', 'Gangguan fungsi ginjal'],
    preventionTip: 'Pantau kalium serum ketat; hindari kombinasi ganda ACEi + ARB (dual renin-angiotensin blockade).'
  },
  {
    drugId: 'drug-digoxin',
    drugName: 'Digoxin',
    toxicityCategory: 'electrolyte',
    severity: 'Critical',
    weightScore: 4,
    mechanism: 'Inhibisi pompa Na+/K+-ATPase miokard; afinitas ikatan digoxin meningkat tajam pada kondisi hipokalemia atau hipomagnesemia, memicu intoksikasi fatal dengan aritmia ventrikel mematikan pada kadar serum normal sekalipun.',
    typicalOnset: 'Hari hingga minggu (sangat sensitif terhadap fluktuasi kalium)',
    riskFactors: ['Hipokalemia terinduksi Furosemide / Tiazid', 'Hipomagnesemia', 'Gangguan klirens ginjal lansia'],
    preventionTip: 'Pertahankan kadar K+ serum ketat antara 4.0 - 5.0 mEq/L dan Mg2+ > 2.0 mg/dL; pantau TDM kadar digoxin serum (target 0.5-0.9 ng/mL).'
  },
  {
    drugId: 'drug-indapamide-elec',
    drugName: 'Indapamide',
    toxicityCategory: 'electrolyte',
    severity: 'Moderate',
    weightScore: 2,
    mechanism: 'Diuretik tiazid-like; mengekskresikan kalium dan natrium urin, memicu kelelahan otot, kram, dan aritmia bila terjadi deplesi kalium.',
    typicalOnset: 'Minggu ke-1 hingga ke-4',
    riskFactors: ['Lansia', 'Diare akut / muntah'],
    preventionTip: 'Pantau kadar kalium darah pada awal terapi dan setiap 6 bulan.'
  },
  {
    drugId: 'drug-lithium',
    drugName: 'Lithium',
    toxicityCategory: 'electrolyte',
    severity: 'High',
    weightScore: 3,
    mechanism: 'Litium ditangani oleh tubulus ginjal seperti natrium; deplesi natrium akibat diuretik tiazid atau dehidrasi memicu reabsorpsi proksimal litium berlebih hingga intoksikasi mematikan.',
    typicalOnset: '3 hingga 7 hari pasca gangguan homeostasis natrium',
    riskFactors: ['Penggunaan bersama HCT / Furosemide', 'Diet rendah garam', 'NSAID'],
    preventionTip: 'Waspadai interaksi fatal dengan diuretik tiazid; pertahankan asupan garam dan cairan yang stabil; periksa kadar litium serum.'
  },

  // --- 8. Ototoxicity (Cochlear & Vestibular Damage) ---
  {
    drugId: 'drug-cisplatin-oto',
    drugName: 'Cisplatin',
    toxicityCategory: 'ototoxicity',
    severity: 'Critical',
    weightScore: 4,
    mechanism: 'Platina terakumulasi di stria vaskularis koklea dan memicu apoptosis sel rambut luar sensorik frekuensi tinggi (4-8 kHz); tuli sensorineural permanen bilateral terjadi pada 40-80% pasien.',
    typicalOnset: 'Siklus ke-2 hingga ke-4 kemoterapi',
    riskFactors: ['Dosis kumulatif > 300-400 mg/m2', 'Pasien anak-anak (sangat rentan)', 'Kombinasi dengan Aminoglikosida'],
    preventionTip: 'Lakukan pemeriksaan audiometri nada murni baseline dan sebelum setiap siklus kemoterapi; pertimbangkan agen otoprotektan bila tersedia.'
  },
  {
    drugId: 'drug-tobramycin',
    drugName: 'Tobramycin',
    toxicityCategory: 'ototoxicity',
    severity: 'Critical',
    weightScore: 4,
    mechanism: 'Aminoglikosida bakterisidal yang merusak sel sensorik vestibular krista ampularis dan koklea melalui akumulasi di endolimfe dan generasi radikal bebas ROS.',
    typicalOnset: 'Hari ke-5 hingga ke-14 terapi',
    riskFactors: ['Terapi berkepanjangan > 10 hari', 'Gangguan klirens ginjal', 'Kadar palung > 2 mcg/mL'],
    preventionTip: 'Gunakan protokol pemberian dosis tunggal harian (once-daily dosing); monitor kadar puncak dan palung serum.'
  },
  {
    drugId: 'drug-aspirin-oto',
    drugName: 'Aspirin',
    toxicityCategory: 'ototoxicity',
    severity: 'Moderate',
    weightScore: 2,
    mechanism: 'Konsentrasi salisilat plasma tinggi (>20-30 mg/dL) menghambat motor protein prestin pada membran sel rambut luar koklea, memicu tinitus berdenging simetris reversibel dan penurunan pendengaran ringan.',
    typicalOnset: 'Beberapa jam hingga hari pasca konsumsi dosis tinggi antiinflamasi (>3-4 g/hari)',
    riskFactors: ['Dosis harian > 3 gram', 'Gangguan eliminasi ginjal / hepar'],
    preventionTip: 'Tinitus merupakan tanda awal intoksikasi salisilat; segera turunkan dosis atau hentikan aspirin; pendengaran pulih 24-72 jam pasca penghentian.'
  },
  {
    drugId: 'drug-neomycin',
    drugName: 'Neomycin',
    toxicityCategory: 'ototoxicity',
    severity: 'Critical',
    weightScore: 4,
    mechanism: 'Aminoglikosida dengan indeks ototoksisitas tertinggi; absorpsi sistemik melalui irigasi luka bedah atau ulserasi mukosa usus memicu kerusakan sel rambut koklea permanen yang ireversibel.',
    typicalOnset: '1 hingga 2 minggu',
    riskFactors: ['Irigasi rongga peritoneal/luka bakar luas', 'Gagal ginjal'],
    preventionTip: 'HINDARI penggunaan parenteral atau irigasi luka terbuka luas; batasi sediaan topikal kulit utuh atau oral non-absorbable jangka pendek.'
  },

  // --- 9. Severe Cutaneous Adverse Reactions (SJS / TEN / DRESS) - RegiSCAR ---
  {
    drugId: 'drug-allopurinol-derm',
    drugName: 'Allopurinol',
    toxicityCategory: 'dermatology',
    severity: 'Critical',
    weightScore: 4,
    mechanism: 'RegiSCAR High-Risk Drug #1 di Asia Tenggara: Metabolit oksipurinol memicu aktivasi sel T sitotoksik spesifik melalui interaksi non-kovalen dengan celah pengikat antigen HLA-B*58:01, memicu nekrosis epidermis luas (SJS/TEN) dan sindrom DRESS.',
    typicalOnset: '2 hingga 6 minggu pertama terapi',
    riskFactors: ['Genotipe HLA-B*58:01 positif (prevalensi tinggi di Asia)', 'Insufisiensi ginjal baseline', 'Dosis awal terlalu tinggi (>100 mg/hari)'],
    preventionTip: 'Mulai dengan dosis inisiasi rendah (50-100 mg/hari); skrining alel HLA-B*58:01 bila memungkinkan; SEGERA HENTIKAN OBAT saat muncul ruam kulit sekecil apapun.'
  },
  {
    drugId: 'drug-carbamazepine-derm',
    drugName: 'Carbamazepine',
    toxicityCategory: 'dermatology',
    severity: 'Critical',
    weightScore: 4,
    mechanism: 'FDA Boxed Warning: Pengikatan kuat pada molekul presentasi antigen HLA-B*15:02 mengaktivasi sel T CD8+ dan granulysin, menyebabkan lisis keratinosit epidermal menyeluruh (SJS/TEN mortality 10-30%).',
    typicalOnset: '1 hingga 8 minggu pasca inisiasi',
    riskFactors: ['Keturunan Asia (Alel HLA-B*15:02 positif)', 'Riwayat hipersensitivitas obat aromatik'],
    preventionTip: 'Wajib skrining alel HLA-B*15:02 sebelum inisiasi pada populasi Asia; hindari antikonvulsan aromatik lain bila timbul reaksi alergi.'
  },
  {
    drugId: 'drug-cotrimoxazole-derm',
    drugName: 'Cotrimoxazole',
    toxicityCategory: 'dermatology',
    severity: 'Critical',
    weightScore: 4,
    mechanism: 'Metabolit reaktif sulfonamida (hidroksilamin) berikatan dengan protein seluler epidermis kulit, memicu respons imunologis sitotoksik tipe IV berat (Eritema multiforme mayor, SJS, dan TEN).',
    typicalOnset: 'Hari ke-3 hingga minggu ke-2 terapi',
    riskFactors: ['Pasien terinfeksi HIV / imunosupresi', 'Riwayat alergi sulfa'],
    preventionTip: 'Hentikan seketika bila muncul eritema, lepuh mukosa oral/genital, atau lesi target kulit; kontraindikasi seumur hidup derivat sulfonamida.'
  },
  {
    drugId: 'drug-phenytoin-derm',
    drugName: 'Phenytoin',
    toxicityCategory: 'dermatology',
    severity: 'Critical',
    weightScore: 4,
    mechanism: 'Metabolit reaktif aren oksida gagal didetoksifikasi oleh epoksida hidrolase, memicu sindrom DRESS (Drug Reaction with Eosinophilia and Systemic Symptoms) dengan demam tinggi, limfadenopati, dan hepatitis.',
    typicalOnset: '2 hingga 8 minggu pasca inisiasi dosis',
    riskFactors: ['Alel HLA-B*15:02', 'Defisiensi enzim detoksifikasi aren oksida'],
    preventionTip: 'Waspadai demam tinggi disertai ruam dan kenaikan transaminase; hindari penggunaan Phenobarbital atau Carbamazepine karena risiko reaktivitas silang antikonvulsan 70-80%.'
  },
  {
    drugId: 'drug-phenobarbital-derm',
    drugName: 'Phenobarbital',
    toxicityCategory: 'dermatology',
    severity: 'High',
    weightScore: 3,
    mechanism: 'Antikonvulsan cincin aromatik yang memicu respons imun cell-mediated terhadap antigen keratinosit; sindrom DRESS dan erupsi makulopapular deskuamatif.',
    typicalOnset: '2 hingga 6 minggu pertama terapi',
    riskFactors: ['Riwayat alergi antikonvulsan lain', 'Anak dan dewasa muda'],
    preventionTip: 'Edukasi keluarga untuk memeriksa kondisi kulit, bibir, dan suhu tubuh setiap hari pada 2 bulan pertama pengobatan.'
  },
  {
    drugId: 'drug-lamotrigine',
    drugName: 'Lamotrigine',
    toxicityCategory: 'dermatology',
    severity: 'Critical',
    weightScore: 4,
    mechanism: 'FDA Boxed Warning: Insiden ruam toksik parah (SJS/TEN) meningkat tajam bila titrasi dosis dinaikkan terlalu cepat atau bila dikombinasikan dengan Asam Valproat (yang menghambat glukuronidasi lamotrigin hingga memperpanjang waktu paruh >2x lipat).',
    typicalOnset: '2 hingga 8 minggu pertama titrasi',
    riskFactors: ['Koadministrasi Asam Valproat', 'Titrasi dosis awal agresif tanpa jadwal standar', 'Usia pediatrik'],
    preventionTip: 'Patuhi jadwal eskalasi dosis resmi FDA secara bertahap; potong dosis inisiasi 50% bila diberikan bersama Valproat.'
  },
  {
    drugId: 'drug-nevirapine',
    drugName: 'Nevirapine',
    toxicityCategory: 'dermatology',
    severity: 'High',
    weightScore: 3,
    mechanism: 'NNRTI yang menginduksi reaksi hipersensitivitas imunologis diperantarai sel T CD4+; ruam makulopapular difus parah terjadi pada 15-20% pasien, dengan risiko progresi ke SJS/TEN fatal.',
    typicalOnset: '1 hingga 6 minggu pertama terapi',
    riskFactors: ['Wanita dengan CD4 > 250 sel/mcL', 'Pria dengan CD4 > 400 sel/mcL', 'Tanpa fase lead-in dose'],
    preventionTip: 'Wajib gunakan fase titrasi (lead-in dose 200 mg sekali sehari selama 14 hari pertama sebelum naik ke 200 mg 2x sehari); hentikan permanen bila muncul ruam disertai demam atau lepuh.'
  },
  {
    drugId: 'drug-meloxicam-derm',
    drugName: 'Meloxicam',
    toxicityCategory: 'dermatology',
    severity: 'High',
    weightScore: 3,
    mechanism: 'Derivat oksikam memiliki risiko relatif tertinggi di antara semua kelas NSAID untuk memicu sindrom Stevens-Johnson (SJS) dan Toxic Epidermal Necrolysis (TEN).',
    typicalOnset: '1 hingga 3 minggu pasca konsumsi',
    riskFactors: ['Usia lanjut', 'Riwayat erupsi obat tetap (Fixed Drug Eruption)'],
    preventionTip: 'Segera hentikan bila timbul lesi vesikel lepuh pada kulit atau selaput lendir bibir; berikan pereda nyeri alternatif non-oksikam.'
  }
];

/**
 * 35+ Common ADR Patient Complaints & Reverse Causative Mapping Database
 */
export const ADR_SYMPTOM_DATABASE: AdrSymptom[] = [
  {
    id: 'symptom-dry-cough',
    symptomName: 'Dry Cough',
    indonesianName: 'Batuk Kering Kronis',
    category: 'Respirasi',
    description: 'Batuk kering menggelitik di tenggorokan yang timbul terus menerus, tidak membaik dengan obat batuk standar, dan sering memburuk saat berbaring.',
    commonCausativeDrugs: [
      {
        drugName: 'Captopril / Ramipril / Lisinopril / Enalapril (Golongan ACE Inhibitor)',
        genericMatch: 'captopril, ramipril, lisinopril, enalapril',
        probability: 'Sangat Tinggi (Very High)',
        mechanism: 'Inhibisi enzim ACE mencegah degradasi bradikinin dan substansi P di saluran napas atas, memicu akumulasi lokal dan refleks batuk kering persisten (terjadi pada 5-20% pasien).',
        onset: '1 minggu hingga 6 bulan pasca inisiasi',
        mitigation: 'Gantikan obat dengan golongan Angiotensin Receptor Blocker (ARB) seperti Candesartan, Valsartan, atau Telmisartan (tidak mempengaruhi bradikinin).'
      },
      {
        drugName: 'Amlodipine (CCB)',
        genericMatch: 'amlodipine',
        probability: 'Sedang (Moderate)',
        mechanism: 'Relaksasi sfingter esofagus bawah yang memicu refluks asam lambung mikro ke laring (LPR / GERD).',
        onset: 'Minggu ke-2 hingga ke-4',
        mitigation: 'Evaluasi gejala refluks lambung; tambahkan PPI bila perlu.'
      }
    ],
    redFlagWarning: 'Waspadai bila batuk disertai sesak napas berat, bibir membengkak (Angioedema), atau batuk berdarah.'
  },
  {
    id: 'symptom-ankle-edema',
    symptomName: 'Peripheral Edema',
    indonesianName: 'Kaki & Pergelangan Bengkak',
    category: 'Kardiovaskular',
    description: 'Pembengkakan pada kedua pergelangan kaki atau punggung kaki tanpa disertai tanda gagal jantung akut.',
    commonCausativeDrugs: [
      {
        drugName: 'Amlodipine / Nifedipine (CCB Dihidropiridin)',
        genericMatch: 'amlodipine, nifedipine',
        probability: 'Sangat Tinggi (Very High)',
        mechanism: 'Vasodilatasi arteriol prekapiler yang lebih kuat dibanding venula pascakapiler, meningkatkan tekanan hidrostatik kapiler dan memicu ekstravasasi cairan ke interstisial.',
        onset: '2 hingga 6 minggu pasca inisiasi dosis 5-10 mg',
        mitigation: 'Turunkan dosis Amlodipine ke 2.5-5 mg, atau kombinasikan dengan ACEi/ARB (yang merelaksasi venula eferen), atau ganti ke antihipertensi lain.'
      },
      {
        drugName: 'Meloxicam / Ibuprofen / Ketorolac (NSAID)',
        genericMatch: 'meloxicam, ibuprofen, ketorolac, diclofenac, piroxicam',
        probability: 'Tinggi (High)',
        mechanism: 'Retensi natrium dan air di tubulus ginjal akibat penurunan sintesis prostaglandin renal.',
        onset: 'Hari ke-3 hingga minggu ke-2',
        mitigation: 'Hentikan NSAID; ganti ke Parasetamol untuk pereda nyeri.'
      },
      {
        drugName: 'Dexamethasone / Methylprednisolone (Kortikosteroid)',
        genericMatch: 'dexamethasone, methylprednisolone, prednisone, hydrocortisone',
        probability: 'Tinggi (High)',
        mechanism: 'Aktivitas mineralokortikoid menahan garam natrium dan cairan di intravaskular.',
        onset: '1 hingga 2 minggu',
        mitigation: 'Batasi asupan garam meja dan turunkan dosis steroid bertahap.'
      }
    ],
    redFlagWarning: 'Bila bengkak hanya pada 1 kaki disertai betis merah nyeri hangat (curiga DVT) atau disertai sesak napas berat berbaring (curiga gagal jantung akut).'
  },
  {
    id: 'symptom-dry-mouth',
    symptomName: 'Xerostomia',
    indonesianName: 'Mulut & Tenggorokan Kering',
    category: 'Saluran Cerna',
    description: 'Penurunan sekresi saliva kelenjar ludah yang menyebabkan mulut terasa sangat kering, lengket, dan sulit menelan makanan kering.',
    commonCausativeDrugs: [
      {
        drugName: 'Amitriptyline / Trihexyphenidyl / CTM / Diphenhydramine',
        genericMatch: 'amitriptyline, trihexyphenidyl, chlorpheniramine, diphenhydramine, clozapine',
        probability: 'Sangat Tinggi (Very High)',
        mechanism: 'Blokade reseptor muskarinik M3 pada kelenjar ludah parotis dan submandibularis.',
        onset: '1 hingga 3 jam pasca konsumsi',
        mitigation: 'Minum air putih sedikit-sedikit secara sering, kunyah permen karet bebas gula, atau gunakan obat kumur pelembab mulut.'
      },
      {
        drugName: 'Ipratropium Bromide (Inhalasi/Nebulisasi)',
        genericMatch: 'ipratropium',
        probability: 'Tinggi (High)',
        mechanism: 'Efek antikolinergik lokal pada mukosa orofaring pasca inhalasi aerosol.',
        onset: 'Segera setelah inhalasi',
        mitigation: 'Kumur mulut dengan air bersih dan buang setelah selesai menggunakan nebulizer/inhaler.'
      }
    ]
  },
  {
    id: 'symptom-gingival-bleeding',
    symptomName: 'Gingival Bleeding & Easy Bruising',
    indonesianName: 'Perdarahan Gusi, Mimisan & Memar',
    category: 'Hematologi',
    description: 'Bercak memar kebiruan spontan di kulit tanpa benturan, gusi berdarah saat sikat gigi, atau darah sukar membeku saat luka kecil.',
    commonCausativeDrugs: [
      {
        drugName: 'Warfarin / Simarc',
        genericMatch: 'warfarin',
        probability: 'Sangat Tinggi (Very High)',
        mechanism: 'Supresi pembentukan faktor pembekuan darah vitamin K-dependent (INR memanjang > 3.0-4.0).',
        onset: 'Hari ke-2 hingga ke-5 terapi',
        mitigation: 'Segera periksa nilai INR darah laboratorium; sesuaikan dosis warfarin; siapkan Vitamin K1 oral/IV jika INR terlalu tinggi.'
      },
      {
        drugName: 'Aspirin / Clopidogrel / Ticagrelor (Antiplatelet)',
        genericMatch: 'aspirin, clopidogrel, ticagrelor',
        probability: 'Tinggi (High)',
        mechanism: 'Inhibisi agregasi platelet darah yang memperpanjang waktu perdarahan primer.',
        onset: 'Hari ke-1 terapi',
        mitigation: 'Gunakan sikat gigi berbulu halus; hindari olahraga kontak fisik benturan keras.'
      },
      {
        drugName: 'Apixaban / Rivaroxaban / Dabigatran (DOAC)',
        genericMatch: 'apixaban, rivaroxaban, dabigatran',
        probability: 'Tinggi (High)',
        mechanism: 'Inhibisi langsung Faktor Xa atau Trombin.',
        onset: '2 hingga 4 jam pasca dosis',
        mitigation: 'Pantau tanda perdarahan occult; sesuaikan dosis pada gangguan ginjal.'
      }
    ],
    redFlagWarning: 'Waspadai bila disertai buang air besar hitam (melena), muntah darah, urin merah, atau sakit kepala hebat mendadak (perdarahan intrakranial).'
  },
  {
    id: 'symptom-muscle-pain',
    symptomName: 'Myalgia & Muscle Weakness',
    indonesianName: 'Nyeri Otot & Lemas Otot Berat',
    category: 'Muskuloskeletal',
    description: 'Nyeri otot simetris pada paha, betis, atau bahu disertai rasa lemas dan pegal hebat tanpa riwayat olahraga berlebih.',
    commonCausativeDrugs: [
      {
        drugName: 'Simvastatin / Atorvastatin / Rosuvastatin (Statin)',
        genericMatch: 'simvastatin, atorvastatin, rosuvastatin',
        probability: 'Sangat Tinggi (Very High)',
        mechanism: 'Penurunan sintesis koenzim Q10 (CoQ10) dan kolesterol membran sel miosit otot skelet, memicu miopati atau rabdomiolisis.',
        onset: '2 minggu hingga 3 bulan pasca inisiasi/kenaikan dosis',
        mitigation: 'Periksa kadar enzim Creatine Kinase (CK) serum; bila CK > 5-10x normal atau nyeri hebat, hentikan statin; ganti ke statin hidrofilik (Rosuvastatin/Pravastatin dosis rendah) atau Ezetimibe.'
      },
      {
        drugName: 'Furosemide / Hydrochlorothiazide (Diuretik)',
        genericMatch: 'furosemide, hydrochlorothiazide, indapamide',
        probability: 'Tinggi (High)',
        mechanism: 'Hipokalemia (<3.5 mEq/L) dan hipomagnesemia memicu kram dan spasme otot skelet.',
        onset: 'Hari ke-2 hingga minggu ke-1',
        mitigation: 'Koreksi kadar kalium dan magnesium serum; berikan suplemen KSR.'
      }
    ],
    redFlagWarning: 'Jika nyeri otot sangat parah disertai urin berubah warna menjadi gelap kecokelatan seperti teh (Rabdomiolisis & Mioglobinuria AKI).'
  },
  {
    id: 'symptom-tinnitus',
    symptomName: 'Tinnitus',
    indonesianName: 'Telinga Berdenging',
    category: 'Telinga & Mata',
    description: 'Sensasi suara berdenging, mendesis, atau berdengung terus menerus di salah satu atau kedua telinga.',
    commonCausativeDrugs: [
      {
        drugName: 'Gentamicin / Amikacin (Aminoglikosida)',
        genericMatch: 'gentamicin, amikacin',
        probability: 'Sangat Tinggi (Very High)',
        mechanism: 'Kerusakan sel rambut luar sensorik organ Corti koklea telinga dalam.',
        onset: 'Hari ke-5 hingga ke-10',
        mitigation: 'Tanda bahaya awal ototoksisitas permanen! Segera hentikan atau ganti antibiotik non-aminoglikosida.'
      },
      {
        drugName: 'Aspirin (Dosis Tinggi Antiinflamasi >3 g/hari)',
        genericMatch: 'aspirin',
        probability: 'Tinggi (High)',
        mechanism: 'Peningkatan konsentrasi salisilat plasma menekan konduktansi membran sel saraf koklea.',
        onset: 'Beberapa jam pasca dosis tinggi',
        mitigation: 'Turunkan dosis aspirin; tinitus salisilat umumnya reversibel.'
      },
      {
        drugName: 'Furosemide (Injeksi IV Cepat Dosis Tinggi)',
        genericMatch: 'furosemide',
        probability: 'Sedang (Moderate)',
        mechanism: 'Gangguan potensial endokoklear stria vaskularis.',
        onset: 'Segera pasca injeksi IV bolus cepat',
        mitigation: 'Infuskan Furosemide secara lambat (kecepatan maksimal 4 mg/menit).'
      }
    ]
  },
  {
    id: 'symptom-hyperkalemia-fatigue',
    symptomName: 'Severe Bradycardia & Lethargy',
    indonesianName: 'Lemas Ekstrem & Jantung Lambat',
    category: 'Metabolik & Ginjal',
    description: 'Rasa lemas luar biasa pada kedua tungkai, kesemutan di sekitar bibir/tangan, dan denyut nadi teraba sangat lambat atau ireguler.',
    commonCausativeDrugs: [
      {
        drugName: 'Spironolactone + ACEi / ARB / Suplemen Kalium',
        genericMatch: 'spironolactone, captopril, ramipril, candesartan, valsartan, potassium',
        probability: 'Sangat Tinggi (Very High)',
        mechanism: 'Hiperkalemia berat (K+ > 5.5 - 7.0 mEq/L) yang mendepolarisasi membran istirahat sel miokard dan otot.',
        onset: 'Hari ke-3 hingga minggu ke-2',
        mitigation: 'Periksa kalium darah & EKG darurat; hentikan obat penahan kalium; terapi dengan Kalsium Glukonat IV + Insulin Regular/D50W jika darurat.'
      }
    ],
    redFlagWarning: 'Kondisi gawat darurat! Segera lakukan EKG untuk mendeteksi gelombang T lancip, pemanjangan PR, atau henti jantung asistol.'
  },
  {
    id: 'symptom-constipation',
    symptomName: 'Severe Constipation',
    indonesianName: 'Konstipasi Parah & Perut Begah',
    category: 'Saluran Cerna',
    description: 'Frekuensi buang air besar menurun drastis, tinja sangat keras dan sulit dikeluarkan, disertai kembung dan nyeri perut.',
    commonCausativeDrugs: [
      {
        drugName: 'Morphine / Tramadol / Codeine / Fentanyl (Opioid)',
        genericMatch: 'morphine, tramadol, codeine, fentanyl, oxycodone',
        probability: 'Sangat Tinggi (Very High)',
        mechanism: 'Aktivasi reseptor mu-opioid pada pleksus mienterik usus menghambat gerakan peristaltik dan meningkatkan reabsorpsi air feses.',
        onset: 'Hari ke-1 terapi',
        mitigation: 'Rutin berikan laksatif stimulan (Bisacodyl / Senna) + pelunak feses (Lactulose) bersamaan dengan inisiasi opioid.'
      },
      {
        drugName: 'Verapamil / Diltiazem (CCB Non-Dihidropiridin)',
        genericMatch: 'verapamil, diltiazem',
        probability: 'Tinggi (High)',
        mechanism: 'Relaksasi otot polos sirkular kolon yang memperlambat waktu transit usus.',
        onset: 'Minggu ke-1',
        mitigation: 'Tingkatkan asupan serat harian dan cairan; pertimbangkan beralih ke Amlodipine.'
      },
      {
        drugName: 'Amitriptyline / Trihexyphenidyl (Antikolinergik)',
        genericMatch: 'amitriptyline, trihexyphenidyl',
        probability: 'Tinggi (High)',
        mechanism: 'Hambatan saraf parasimpatis kolon.',
        onset: 'Hari ke-2',
        mitigation: 'Banyak minum air putih dan gunakan laksatif osmotik.'
      }
    ]
  },
  {
    id: 'symptom-insomnia-tremor',
    symptomName: 'Tremor, Palpitations & Insomnia',
    indonesianName: 'Tremor Tangan, Jantung Berdebar & Insomnia',
    category: 'Sistem Saraf & Psikiatri',
    description: 'Tremor halus pada jari tangan, rasa cemas gelisah, jantung berdegup kencang, dan sulit memulai tidur malam.',
    commonCausativeDrugs: [
      {
        drugName: 'Salbutamol / Albuterol (Beta-2 Agonis)',
        genericMatch: 'salbutamol, terbutaline, formoterol',
        probability: 'Sangat Tinggi (Very High)',
        mechanism: 'Stimulasi reseptor beta-2 adrenergik pada otot skelet (tremor) dan stimulasi silang beta-1 kardiak (takikardia).',
        onset: '15 hingga 30 menit pasca konsumsi oral/nebulisasi',
        mitigation: 'Gunakan sediaan inhaler MDI dengan teknik yang benar untuk meminimalkan paparan sistemik dibanding sirup/tablet oral.'
      },
      {
        drugName: 'Pseudoephedrine / Ephedrine (Dekongestan)',
        genericMatch: 'pseudoephedrine, ephedrine',
        probability: 'Tinggi (High)',
        mechanism: 'Pelepasan norepinefrin sentral dan stimulasi simpatis.',
        onset: '1 jam',
        mitigation: 'Hindari minum obat flu dekongestan sebelum tidur malam; ganti dengan semprot hidung saline.'
      },
      {
        drugName: 'Levothyroxine (Dosis Berlebih)',
        genericMatch: 'levothyroxine',
        probability: 'Tinggi (High)',
        mechanism: 'Tirotoksikosis iatrogenik terinduksi hormon tiroid eksogen berlebih.',
        onset: '1 hingga 2 minggu',
        mitigation: 'Periksa TSH dan FT4 serum; turunkan dosis levothyroxine.'
      }
    ]
  },
  {
    id: 'symptom-rash-itching',
    symptomName: 'Pruritic Maculopapular Rash & Urticaria',
    indonesianName: 'Ruam Kulit Gatal & Biduran',
    category: 'Kulit & Alergi',
    description: 'Bercak kemerahan yang gatal menyebar di lengan, dada, atau seluruh tubuh sesaat setelah memulai obat baru.',
    commonCausativeDrugs: [
      {
        drugName: 'Amoxicillin / Ampicillin / Ceftriaxone (Antibiotik Beta-Laktam)',
        genericMatch: 'amoxicillin, ampicillin, ceftriaxone, cefixime',
        probability: 'Sangat Tinggi (Very High)',
        mechanism: 'Reaksi hipersensitivitas imunologis tipe I (IgE-mediated) atau tipe IV terhadap cincin beta-laktam.',
        onset: 'Menit hingga hari ke-7',
        mitigation: 'Hentikan antibiotik segera; berikan antihistamin/kortikosteroid; catat riwayat alergi pada rekam medis.'
      },
      {
        drugName: 'Allopurinol',
        genericMatch: 'allopurinol',
        probability: 'Tinggi (High)',
        mechanism: 'Hipersensitivitas terhadap oxypurinol; waspadai Sindrom Hipersensitivitas Allopurinol (AHS/DRESS).',
        onset: 'Minggu ke-2 hingga ke-6',
        mitigation: 'SEGERA HENTIKAN ALLOPURINOL jika muncul ruam sekecil apapun untuk mencegah progresi ke SJS/TEN.'
      },
      {
        drugName: 'Cotrimoxazole (Sulfamethoxazole + Trimethoprim)',
        genericMatch: 'cotrimoxazole, sulfamethoxazole',
        probability: 'Sangat Tinggi (Very High)',
        mechanism: 'Reaksi alergi terhadap gugus sulfonamida.',
        onset: 'Hari ke-3 hingga ke-10',
        mitigation: 'Hentikan cotrimoxazole dan hindari seluruh obat derivat sulfa.'
      }
    ],
    redFlagWarning: 'Bila ruam disertai demam, bibir melepuh, mata merah perih, atau kulit mengelupas (Segera bawa ke IGD - Dugaan SJS/TEN).'
  },
  {
    id: 'symptom-angioedema',
    symptomName: 'Angioedema',
    indonesianName: 'Bibir & Wajah Bengkak Mendadak',
    category: 'Respirasi',
    description: 'Pembengkakan jaringan subkutan non-pitting mendadak pada bibir, kelopak mata, lidah, atau laring yang timbul tanpa gatal (non-pruritic).',
    commonCausativeDrugs: [
      {
        drugName: 'Captopril / Ramipril / Lisinopril (ACE Inhibitor)',
        genericMatch: 'captopril, ramipril, lisinopril, enalapril',
        probability: 'Sangat Tinggi (Very High)',
        mechanism: 'Penumpukan bradikinin akibat inhibisi kinase II / ACE; memicu vasodilatasi lokal masif dan hiperpermeabilitas mikrovaskular.',
        onset: 'Bisa terjadi pada hari pertama atau setelah bertahun-tahun terapi rutin',
        mitigation: 'HENTIKAN ACE INHIBITOR SEGERA! Kontraindikasi seumur hidup seluruh golongan ACEi; hati-hati reaktivitas silang pada ARB (sekitar 2-5%).'
      },
      {
        drugName: 'Candesartan / Valsartan (ARB)',
        genericMatch: 'candesartan, valsartan, telmisartan, losartan',
        probability: 'Sedang (Moderate)',
        mechanism: 'Stimulasi reseptor AT2 sekunder oleh angiotensin II yang berlebih memicu pelepasan bradikinin/nitrat oksida.',
        onset: 'Minggu ke-1 hingga bulan ke-6',
        mitigation: 'Hentikan ARB; beralih ke antihipertensi golongan CCB atau Beta Blocker.'
      }
    ],
    redFlagWarning: 'GAWAT DARURAT JALAN NAPAS! Waspadai bila bengkak meluas ke lidah disertai suara serak, sesak napas mengorok (stridor laring), atau tersedak; segera injeksikan Epinefrin IM 0.3-0.5 mg di IGD.'
  },
  {
    id: 'symptom-extrapyramidal',
    symptomName: 'Acute Dystonia & Extrapyramidal Symptoms (EPS)',
    indonesianName: 'Kaku Otot, Leher Terpelintir & Gerakan Aneh',
    category: 'Sistem Saraf & Psikiatri',
    description: 'Kontraksi otot involunter akut yang menyebabkan leher kaku terpelintir ke satu sisi (tortikolis), mata melotot ke atas terkunci (krisis okulogirik), rahang kaku mengunci (trismus), atau kegelisahan motorik tidak bisa diam (akatisia).',
    commonCausativeDrugs: [
      {
        drugName: 'Metoclopramide',
        genericMatch: 'metoclopramide',
        probability: 'Sangat Tinggi (Very High)',
        mechanism: 'Blokade poten reseptor dopamin D2 pada jalur nigrostriatal ganglia basalis otak, memicu ketidakseimbangan kolinergik/dopaminergik akut.',
        onset: '15 menit hingga 48 jam pasca konsumsi atau injeksi',
        mitigation: 'Berikan antidot Diphenhydramine 25-50 mg IV/IM atau Trihexyphenidyl 2 mg oral; gejala distonia membaik dalam 15-30 menit.'
      },
      {
        drugName: 'Haloperidol / Chlorpromazine',
        genericMatch: 'haloperidol, chlorpromazine, perphenazine',
        probability: 'Sangat Tinggi (Very High)',
        mechanism: 'Afinitas sangat tinggi terhadap reseptor D2 striatum; insiden distonia akut mencapai 10-40% pada pasien muda.',
        onset: '24 hingga 72 jam pasca inisiasi dosis',
        mitigation: 'Ko-peresepan antikolinergik sentral (Trihexyphenidyl); pertimbangkan beralih ke antipsikotik atipikal generasi kedua (Risperidone dosis rendah atau Quetiapine).'
      },
      {
        drugName: 'Risperidone (Dosis > 4-6 mg/hari)',
        genericMatch: 'risperidone',
        probability: 'Tinggi (High)',
        mechanism: 'Blokade D2 di striatum pada dosis di atas 4 mg/hari berperilaku menyerupai antipsikotik tipikal.',
        onset: 'Hari ke-3 hingga minggu ke-2',
        mitigation: 'Turunkan dosis risperidone ke 1-2 mg/hari.'
      }
    ],
    redFlagWarning: 'Bila spasme otot melibatkan pita suara (laringospasme) atau leher sangat kaku disertai demam sangat tinggi, delirium, dan instabilitas otonom (Kecurigaan Sindrom Neuroleptik Maligna / NMS).'
  },
  {
    id: 'symptom-hypoglycemia',
    symptomName: 'Drug-Induced Hypoglycemia',
    indonesianName: 'Keringat Dingin, Gemetar & Pusing Lemas',
    category: 'Metabolik & Ginjal',
    description: 'Penurunan glukosa darah (<70 mg/dL) yang memicu respons adrenergik otonom (keringat dingin, takikardia, tremor halus, lapar ekstrem) dan neuroglikopenik (pusing melayang, pandangan kabur, kebingungan mental).',
    commonCausativeDrugs: [
      {
        drugName: 'Glimepiride / Glibenclamide (Sulfonilurea)',
        genericMatch: 'glimepiride, glibenclamide, gliclazide, glipizide',
        probability: 'Sangat Tinggi (Very High)',
        mechanism: 'Stimulasi sekresi insulin endogen dari sel beta pankreas secara terus menerus terlepas dari kadar glukosa darah pasien.',
        onset: '2 hingga 8 jam pasca dosis (Glibenclamide berisiko hipoglikemia berkepanjangan >24 jam)',
        mitigation: 'Aturan 15-15: Segera minum 15-20 gram karbohidrat cepat serap (1 gelas teh manis / 3 sendok gula / 4 tablet dekstrosa), cek ulang GDS setelah 15 menit.'
      },
      {
        drugName: 'Insulin (Aspart, Glargine, Detemir, Reguler)',
        genericMatch: 'insulin',
        probability: 'Sangat Tinggi (Very High)',
        mechanism: 'Peningkatan serapan glukosa ke jaringan perifer melampaui produksi glukosa hepatik (terutama bila terlambat makan atau olahraga berlebih).',
        onset: 'Sesuai profil kerja insulin (puncak 1-3 jam untuk kerja pendek; 24 jam untuk basal)',
        mitigation: 'Edukasi kesesuaian waktu injeksi insulin dengan asupan jadwal makan; sediakan permen gula di saku pasien.'
      }
    ],
    redFlagWarning: 'Bila kadar glukosa darah < 54 mg/dL disertai penurunan kesadaran, kejang, atau koma hipoglikemik; SEGERA BERIKAN Bolus Dextrose 40% (D40) 2-3 flakon (50-75 mL) IV di IGD!'
  },
  {
    id: 'symptom-throbbing-headache',
    symptomName: 'Vasodilatory Throbbing Headache',
    indonesianName: 'Sakit Kepala Berdenyut Hebat & Wajah Merah',
    category: 'Kardiovaskular',
    description: 'Nyeri kepala berdenyut hebat di area pelipis atau dahi disertai wajah memerah (flushing) sesaat setelah mengonsumsi obat vasodilator kardiovaskular.',
    commonCausativeDrugs: [
      {
        drugName: 'Isosorbide Dinitrate (ISDN) / Nitroglycerin',
        genericMatch: 'isosorbide dinitrate, nitroglycerin, isosorbide mononitrate',
        probability: 'Sangat Tinggi (Very High)',
        mechanism: 'Pelepasan nitric oxide (NO) eksogen yang memicu vasodilatasi masif pembuluh darah arteri serebral dan meningeal dura mater.',
        onset: '5 hingga 20 menit pasca konsumsi sublingual/oral',
        mitigation: 'Keluhan biasanya berkurang setelah 1-2 minggu toleransi; berikan Parasetamol 500 mg untuk pereda sakit kepala; jangan menghentikan nitrat mendadak bila ada angina.'
      },
      {
        drugName: 'Sildenafil / Tadalafil (PDE-5 Inhibitor)',
        genericMatch: 'sildenafil, tadalafil',
        probability: 'Tinggi (High)',
        mechanism: 'Inhibisi pemecahan cGMP yang memicu relaksasi otot polos vaskular kranial dan kongesti hidung.',
        onset: '30 hingga 60 menit pasca dosis',
        mitigation: 'KONTRAINDIKASI MUTLAK kombinasi dengan Nitrat (ISDN) karena risiko kolaps kardiovaskular / syok hipotensi fatal.'
      }
    ],
    redFlagWarning: 'Bila sakit kepala terjadi mendadak seperti disambar petir ("thunderclap headache") disertai kelemahan satu sisi tubuh, bicara pelo, atau pandangan ganda (curiga stroke/perdarahan intrakranial).'
  },
  {
    id: 'symptom-dysgeusia-nausea',
    symptomName: 'Metallic Dysgeusia & Severe Nausea',
    indonesianName: 'Mual Hebat & Rasa Logam Pahit di Lidah',
    category: 'Saluran Cerna',
    description: 'Sensasi rasa pahit seperti karat tembaga/logam tajam di lidah disertai mual dan rasa tidak nyaman di ulu hati.',
    commonCausativeDrugs: [
      {
        drugName: 'Metformin',
        genericMatch: 'metformin',
        probability: 'Sangat Tinggi (Very High)',
        mechanism: 'Ekskresi metformin ke dalam saliva dan stimulasi laktat enterosit usus halus.',
        onset: 'Hari pertama hingga minggu ke-2 inisiasi',
        mitigation: 'Wajib diminum BERSAMAAN ATAU SETELAH MAKAN PENUH; mulai dengan dosis rendah (500 mg sekali sehari); beralih ke sediaan Extended Release (Metformin XR).'
      },
      {
        drugName: 'Metronidazole',
        genericMatch: 'metronidazole',
        probability: 'Sangat Tinggi (Very High)',
        mechanism: 'Sekresi metabolit nitroimidazol melalui saliva yang menstimulasi kuncup pengecap lidah.',
        onset: 'Hari ke-1 terapi',
        mitigation: 'Konsumsi permen mint; HINDARI KONSUMSI ALKOHOL apapun (reaksi disulfiram-like mematikan).'
      },
      {
        drugName: 'Clarithromycin',
        genericMatch: 'clarithromycin',
        probability: 'Tinggi (High)',
        mechanism: 'Ekskresi makrolida aktif ke dalam cairan saliva.',
        onset: 'Beberapa jam pasca dosis',
        mitigation: 'Rasa logam bersifat sementara dan hilang 24-48 jam pasca terapi antibiotik selesai.'
      }
    ],
    redFlagWarning: 'Pada pengguna Metformin: Bila mual muntah hebat disertai napas cepat dan dalam (Kussmaul), nyeri perut difus, dan kelemahan ekstrem (Kecurigaan Asidosis Laktat Metformin - Mortalitas 50%).'
  },
  {
    id: 'symptom-jaundice-dili',
    symptomName: 'Jaundice & Dark Urine (DILI)',
    indonesianName: 'Mata Kuning & Urin Gelap Seperti Teh',
    category: 'Saluran Cerna',
    description: 'Perubahan warna sklera mata menjadi kuning keruh (ikterik), urin berwarna gelap kecokelatan seperti teh pekat, feses pucat dempul, dan gatal-gatal di seluruh tubuh.',
    commonCausativeDrugs: [
      {
        drugName: 'Isoniazid (INH) / Rifampicin / Pyrazinamide (OAT)',
        genericMatch: 'isoniazid, rifampicin, pyrazinamide',
        probability: 'Sangat Tinggi (Very High)',
        mechanism: 'Drug-Induced Liver Injury (DILI) akibat stres oksidatif dan gangguan ekskresi asam empedu.',
        onset: 'Minggu ke-2 hingga bulan ke-2 fase intensif',
        mitigation: 'SEGERA HENTIKAN SELURUH OAT! Periksa SGOT, SGPT, Bilirubin total & direk; ganti sementara ke regimen OAT non-hepatotoksik (Streptomisin + Etambutol + Fluorokuinolon).'
      },
      {
        drugName: 'Amoxicillin / Clavulanate (Co-Amoxiclav)',
        genericMatch: 'amoxicillin, clavulanate',
        probability: 'Tinggi (High)',
        mechanism: 'Hepatotoksisitas kolestatik diperantarai imunologis yang dipicu oleh komponen asam klavulanat.',
        onset: '1 hingga 6 minggu (sering timbul pasca terapi antibiotik sudah selesai)',
        mitigation: 'Hindari peresepan Co-Amoxiclav seumur hidup; pilih Amoxicillin tunggal bila memang tidak ada indikasi beta-laktamase.'
      }
    ],
    redFlagWarning: 'TANDA GAGAL HATI AKUT (FULMINANT HEPATIC FAILURE): Bila ikterus disertai tremor mengepak tangan (asteriksis), disorientasi bicara melantur (ensefalopati hepatikum), atau perdarahan memar spontan.'
  },
  {
    id: 'symptom-antibiotic-diarrhea',
    symptomName: 'Antibiotic-Associated Diarrhea & C. difficile',
    indonesianName: 'Diare Cair Akut & Kram Perut Pasca Antibiotik',
    category: 'Saluran Cerna',
    description: 'Buang air besar cair frekuen (>3-5 kali/hari) disertai kram perut yang timbul saat atau setelah menyelesaikan terapi antibiotik spektrum luas.',
    commonCausativeDrugs: [
      {
        drugName: 'Clindamycin',
        genericMatch: 'clindamycin',
        probability: 'Sangat Tinggi (Very High)',
        mechanism: 'Eradikasi flora normal usus anaerobik, memicu proliferasi patogen oportunistik Clostridioides difficile yang memproduksi toksin A dan B sitotoksik.',
        onset: 'Hari ke-4 terapi hingga 8 minggu pasca penghentian antibiotik',
        mitigation: 'Segera hentikan Clindamycin; periksa toksin C. difficile feses; terapi dengan Vancomycin oral 125 mg 4x/hari atau Fidaxomicin.'
      },
      {
        drugName: 'Ceftriaxone / Cefixime (Sefalosporin Generasi 3)',
        genericMatch: 'ceftriaxone, cefixime, cefotaxime',
        probability: 'Tinggi (High)',
        mechanism: 'Disbiosis mikrobiota kolon akibat ekskresi bilier antibiotik konsentrasi tinggi.',
        onset: 'Hari ke-3 hingga ke-7',
        mitigation: 'Pertimbangkan suplementasi probiotik (Saccharomyces boulardii / Lactobacillus); hidrasi oralit.'
      }
    ],
    redFlagWarning: 'KOLITIS PSEUDOMEMBRANOSA AKUT: Diare berair masif > 10-15x/hari berbau busuk khas, demam tinggi >38.5C, leukositosis > 15.000, nyeri perut tekan hebat, atau megakolon toksik.'
  },
  {
    id: 'symptom-oral-candidiasis',
    symptomName: 'Oral Candidiasis (Thrush)',
    indonesianName: 'Bercak Putih & Sariawan Jamur Lidah',
    category: 'Kulit & Alergi',
    description: 'Bercak plak putih menyerupai dadih susu pada lidah, langit-langit mulut, atau dinding pipi bagian dalam yang perih saat makan dan meninggalkan dasar merah berdarah jika dikikis.',
    commonCausativeDrugs: [
      {
        drugName: 'Fluticasone / Budesonide Inhaler (Kortikosteroid Inhalasi)',
        genericMatch: 'fluticasone, budesonide, beclomethasone',
        probability: 'Sangat Tinggi (Very High)',
        mechanism: 'Deposisi lokal partikel aerosol steroid di orofaring menekan imunitas seluler mukosa lokal, memfasilitasi overgrowth jamur Candida albicans.',
        onset: 'Minggu ke-2 hingga bulan ke-2 pemakaian rutin',
        mitigation: 'EDUKASI KRUSIAL: Wajib kumur-kumur dengan air bersih dan BUANG (jangan ditelan) setiap kali selesai menggunakan inhaler steroid; gunakan alat spacer.'
      },
      {
        drugName: 'Dexamethasone / Methylprednisolone (Steroid Oral Jangka Panjang)',
        genericMatch: 'dexamethasone, methylprednisolone, prednisone',
        probability: 'Tinggi (High)',
        mechanism: 'Imunosupresi sistemik sel T dan netrofil mukokutan.',
        onset: 'Minggu ke-2 hingga ke-4 dosis sedang-tinggi',
        mitigation: 'Terapi dengan Nystatin oral drop 100.000 IU 4x/hari diteteskan dan dikumur di rongga mulut selama 7-14 hari.'
      }
    ],
    redFlagWarning: 'Bila infeksi jamur menyebar ke esofagus, ditandai dengan rasa sakit luar biasa saat menelan makanan (odinofagia) atau makanan terasa tersangkut di dada.'
  },
  {
    id: 'symptom-bronchospasm',
    symptomName: 'Drug-Induced Bronchospasm & Wheezing',
    indonesianName: 'Napas Berbunyi Mengi & Sesak Napas Mendadak',
    category: 'Respirasi',
    description: 'Penyempitan bronkus akut yang menyebabkan napas berbunyi "ngik-ngik" (mengi / wheezing), dada terasa terikat sesak, dan batuk kering mendadak.',
    commonCausativeDrugs: [
      {
        drugName: 'Propranolol / Nadolol (Beta-Blocker Non-Selektif)',
        genericMatch: 'propranolol, nadolol, carvedilol',
        probability: 'Sangat Tinggi (Very High)',
        mechanism: 'Blokade kompetitif reseptor beta-2 adrenergik pada otot polos bronkus paru, memicu bronkokonstriksi hebat terutama pada pasien asma atau PPOK.',
        onset: '15 hingga 60 menit pasca konsumsi',
        mitigation: 'KONTRAINDIKASI MUTLAK pada pasien riwayat asma bronkial! Gunakan Beta-1 selektif (Bisoprolol, Nebivolol) bila mutlak diperlukan indikasi kardiak.'
      },
      {
        drugName: 'Timolol Tetes Mata (Anti-Glaukoma)',
        genericMatch: 'timolol',
        probability: 'Tinggi (High)',
        mechanism: 'Drainase obat tetes mata melalui duktus nasolakrimalis langsung diserap ke mukosa nasal dan sirkulasi sistemik tanpa melewati first-pass metabolisme hati.',
        onset: 'Menit pasca tetes mata',
        mitigation: 'Tekan sudut mata dalam (kantus medialis) selama 1-2 menit setelah meneteskan timolol untuk mencegah aliran sistemik; ganti ke Latanoprost.'
      },
      {
        drugName: 'Aspirin / Ibuprofen / Asam Mefenamat (NSAID)',
        genericMatch: 'aspirin, ibuprofen, mefenamic acid, ketorolac, diclofenac',
        probability: 'Tinggi (High)',
        mechanism: 'Aspirin-Exacerbated Respiratory Disease (AERD): Hambatan COX-1 mengalihkan metabolisme asam arakidonat ke jalur 5-LOX, memproduksi leukotrien (LTC4/LTD4) bronkokonstriktor berlebih.',
        onset: '30 menit hingga 2 jam pasca minum obat',
        mitigation: 'Hindari seluruh NSAID penghambat COX-1; Parasetamol dosis rendah (<1000 mg) umumnya aman ditoleransi.'
      }
    ],
    redFlagWarning: 'STATUS ASMATIKUS AKUT: Bila sesak napas memburuk drastis, pasien tidak mampu berbicara dalam satu kalimat utuh, bibir sianosis kebiruan, atau saturasi oksigen SpO2 < 90%.'
  },
  {
    id: 'symptom-gingival-hyperplasia',
    symptomName: 'Gingival Overgrowth / Hyperplasia',
    indonesianName: 'Gusi Menebal & Tumbuh Membesar',
    category: 'Saluran Cerna',
    description: 'Pertumbuhan berlebih jaringan ikat fibrous gusi (gingiva) yang menebal, membesar menutupi mahkota gigi, dan mudah berdarah saat tersentuh.',
    commonCausativeDrugs: [
      {
        drugName: 'Phenytoin',
        genericMatch: 'phenytoin',
        probability: 'Sangat Tinggi (Very High)',
        mechanism: 'Stimulasi proliferasi fibroblas gingiva dan peningkatan sintesis matriks kolagen serta penurunan degradasi kolagenase (terjadi pada 50% pasien).',
        onset: '1 hingga 3 bulan pasca inisiasi terapi',
        mitigation: 'Jaga higiene oral ketat (scaling rutin dokter gigi); gunakan sikat gigi ekstra lembut; beralih ke antikonvulsan modern (Levetiracetam / Valproat).'
      },
      {
        drugName: 'Amlodipine / Nifedipine (CCB)',
        genericMatch: 'amlodipine, nifedipine',
        probability: 'Sedang (Moderate)',
        mechanism: 'Penurunan ambilan kalsium seluler fibroblas gusi menghambat sekresi kolagenase aktif.',
        onset: '3 hingga 9 bulan terapi kronis',
        mitigation: 'Ganti antihipertensi ke golongan ACEi / ARB; hiperplasia umumnya regresi bertahap setelah CCB dihentikan.'
      },
      {
        drugName: 'Cyclosporine',
        genericMatch: 'cyclosporine',
        probability: 'Tinggi (High)',
        mechanism: 'Upregulasi transforming growth factor-beta (TGF-beta) pada fibroblas gingiva pasca imunosupresi.',
        onset: '1 hingga 3 bulan',
        mitigation: 'Konsultasi dokter spesialis periodontal; pertimbangkan konversi ke Tacrolimus (risiko hiperplasia gusi jauh lebih rendah).'
      }
    ]
  },
  {
    id: 'symptom-gynecomastia',
    symptomName: 'Drug-Induced Gynecomastia',
    indonesianName: 'Payudara Pria Membesar & Terasa Nyeri',
    category: 'Metabolik & Ginjal',
    description: 'Pembesaran jinak jaringan kelenjar payudara (berbentuk massa berbatas tegas subareolar konsentrasi kenyal) pada pria yang terasa nyeri saat tersentuh atau bergesekan dengan baju.',
    commonCausativeDrugs: [
      {
        drugName: 'Spironolactone',
        genericMatch: 'spironolactone',
        probability: 'Sangat Tinggi (Very High)',
        mechanism: 'Antagonis non-selektif reseptor aldosteron yang juga memblokade reseptor androgen serta meningkatkan aromatase konversi testosteron menjadi estradiol (terjadi pada 10-30% pria).',
        onset: '1 hingga 6 bulan pasca inisiasi dosis harian > 50-100 mg',
        mitigation: 'Ganti dengan Eplerenone (antagonis aldosteron selektif tanpa aktivitas anti-androgenik); ginekomastia bersifat reversibel bila obat dihentikan awal.'
      },
      {
        drugName: 'Cimetidine',
        genericMatch: 'cimetidine',
        probability: 'Tinggi (High)',
        mechanism: 'Blokade kompetitif reseptor androgen perifer dan penghambatan hidroksilasi estradiol di hepar.',
        onset: '1 hingga 3 bulan',
        mitigation: 'Gantikan dengan Ranitidine, Famotidine, atau golongan PPI (Omeprazole).'
      },
      {
        drugName: 'Digoxin',
        genericMatch: 'digoxin',
        probability: 'Sedang (Moderate)',
        mechanism: 'Struktur cincin steroid glikosida digitalis memiliki aktivitas estrogenik intrinsik agonis reseptor estrogen.',
        onset: 'Beberapa bulan terapi rumatan',
        mitigation: 'Evaluasi indikasi dan dosis digoxin; periksa kadar serum digoxin.'
      }
    ],
    redFlagWarning: 'Bila massa payudara keras terfiksir pada dinding dada, tidak nyeri, berbatas tidak teratur, atau disertai retraksi puting dan keluar cairan darah (Waspadai Kanker Payudara Pria).'
  },
  {
    id: 'symptom-orthostatic-hypotension',
    symptomName: 'Postural / Orthostatic Hypotension',
    indonesianName: 'Pusing Berputar Saat Bangkit Berdiri',
    category: 'Kardiovaskular',
    description: 'Penurunan tekanan darah mendadak (sistolik turun >20 mmHg atau diastolik turun >10 mmHg) dalam 3 menit setelah bangkit dari posisi berbaring/duduk, memicu pusing melayang, pandangan gelap, dan ketidakstabilan tubuh.',
    commonCausativeDrugs: [
      {
        drugName: 'Tamsulosin / Prazosin / Terazosin (Alfa-1 Blocker)',
        genericMatch: 'tamsulosin, prazosin, terazosin, doxazosin',
        probability: 'Sangat Tinggi (Very High)',
        mechanism: 'Blokade reseptor alfa-1 adrenergik vaskular menghambat vasokonstriksi kompensasi vena di ekstremitas bawah saat berdiri, memicu blood pooling vena masif (efek dosis pertama).',
        onset: 'Hari pertama inisiasi atau kenaikan dosis (30 menit - 2 jam)',
        mitigation: 'Wajib diminum MALAM HARI TEPAT SEBELUM TIDUR; edukasi teknik bangkit bertahap (duduk dulu di tepi ranjang 1 menit sebelum berdiri).'
      },
      {
        drugName: 'Furosemide / Torsemide (Loop Diuretik)',
        genericMatch: 'furosemide, torsemide',
        probability: 'Tinggi (High)',
        mechanism: 'Deplesi volume intravaskular (hipovolemia) menurunkan tekanan pengisian ventrikel dan curah jantung postural.',
        onset: 'Hari ke-2 hingga minggu ke-1',
        mitigation: 'Evaluasi status hidrasi pasien; kurangi dosis diuretik bila ada tanda dehidrasi (bibir kering, turgor turun).'
      },
      {
        drugName: 'Amitriptyline (Tricyclic Antidepressant)',
        genericMatch: 'amitriptyline, imipramine',
        probability: 'Tinggi (High)',
        mechanism: 'Blokade alfa-1 adrenergik perifer simultan dengan efek antikolinergik; risiko tinggi jatuh pada lansia (Beers Criteria).',
        onset: 'Minggu ke-1 terapi',
        mitigation: 'Gunakan SSRI sebagai lini pertama antidepresan lansia; hindari amitriptyline dosis tinggi.'
      }
    ],
    redFlagWarning: 'Bila episode hipotensi postural memicu pingsan mendadak (sinkop), cedera kepala atau patah tulang panggul akibat terjatuh; segera evaluasi EKG dan hidrasi cairan IV.'
  }
];

/**
 * 10 Official Naranjo Adverse Drug Reaction (ADR) Probability Scale Questions
 */
export const NARANJO_QUESTIONS: NaranjoQuestion[] = [
  {
    id: 1,
    question: 'Are there previous conclusive reports on this reaction?',
    indonesianQuestion: 'Apakah sudah ada laporan atau publikasi sebelumnya yang membuktikan reaksi efek samping ini?',
    yesScore: 1,
    noScore: 0,
    unknownScore: 0,
    explanation: 'Reaksi efek samping sudah tercantum resmi pada monografi obat (Medscape, FDA, BPOM).'
  },
  {
    id: 2,
    question: 'Did the adverse event appear after the suspected drug was administered?',
    indonesianQuestion: 'Apakah efek samping tersebut timbul setelah obat yang dicurigai mulai dikonsumsi?',
    yesScore: 2,
    noScore: -1,
    unknownScore: 0,
    explanation: 'Hubungan temporal: gejala timbul setelah obat masuk ke dalam tubuh pasien.'
  },
  {
    id: 3,
    question: 'Did the adverse reaction improve when the drug was discontinued or a specific antagonist was administered?',
    indonesianQuestion: 'Apakah efek samping membaik / hilang setelah obat dihentikan (Dechallenge) atau saat diberikan antidot spesifik?',
    yesScore: 1,
    noScore: 0,
    unknownScore: 0,
    explanation: 'Dechallenge positif: penghentian obat meredakan keluhan pasien secara nyata.'
  },
  {
    id: 4,
    question: 'Did the adverse reaction reappear when the drug was readministered?',
    indonesianQuestion: 'Apakah efek samping muncul kembali saat obat diberikan ulang (Rechallenge)?',
    yesScore: 2,
    noScore: -1,
    unknownScore: 0,
    explanation: 'Rechallenge positif: bukti terkuat bahwa obat tersebut adalah agen kausatif langsung.'
  },
  {
    id: 5,
    question: 'Are there alternative causes that on their own could have caused the reaction?',
    indonesianQuestion: 'Apakah ada penyebab alternatif lain (misal: penyakit dasar pasien) yang dapat memicu gejala ini?',
    yesScore: -1,
    noScore: 2,
    unknownScore: 0,
    explanation: 'Jika tidak ada komorbiditas atau infeksi lain yang menjelaskan gejala, skor kausalitas obat meningkat.'
  },
  {
    id: 6,
    question: 'Did the reaction appear when a placebo was given?',
    indonesianQuestion: 'Apakah reaksi tersebut muncul saat pasien diberikan plasebo?',
    yesScore: -1,
    noScore: 1,
    unknownScore: 0,
    explanation: 'Reaksi tidak muncul dengan plasebo menunjukkan efek farmakologis spesifik zat aktif.'
  },
  {
    id: 7,
    question: 'Was the drug detected in the blood (or other fluids) in concentrations known to be toxic?',
    indonesianQuestion: 'Apakah kadar obat dalam darah terukur pada konsentrasi toksik / melebihi batas terapeutik?',
    yesScore: 1,
    noScore: 0,
    unknownScore: 0,
    explanation: 'Therapeutic Drug Monitoring (TDM) mengonfirmasi kadar toksik (misal: Digoxin, Gentamicin, Theophylline, Phenytoin).'
  },
  {
    id: 8,
    question: 'Was the reaction more severe when the dose was increased, or less severe when the dose was decreased?',
    indonesianQuestion: 'Apakah reaksi bertambah parah saat dosis dinaikkan, atau berkurang saat dosis diturunkan?',
    yesScore: 1,
    noScore: 0,
    unknownScore: 0,
    explanation: 'Hubungan dosis-respons (Dose-dependent adverse effect).'
  },
  {
    id: 9,
    question: 'Did the patient have a similar reaction to the same or similar drugs in any previous exposure?',
    indonesianQuestion: 'Apakah pasien pernah mengalami reaksi serupa terhadap obat yang sama atau segolongan di masa lalu?',
    yesScore: 1,
    noScore: 0,
    unknownScore: 0,
    explanation: 'Riwayat alergi atau intoleransi sebelumnya memperkuat diagnosis.'
  },
  {
    id: 10,
    question: 'Was the adverse event confirmed by any objective evidence?',
    indonesianQuestion: 'Apakah kejadian efek samping dikonfirmasi oleh bukti objektif laboratorium / penunjang medis (EKG, LFT, Kreatinin, Rontgen)?',
    yesScore: 1,
    noScore: 0,
    unknownScore: 0,
    explanation: 'Bukti objektif laboratorium atau diagnostik memperkuat kepastian KTD dibanding keluhan subjektif semata.'
  }
];

export function interpretNaranjoScore(score: number): {
  category: 'Pasti (Definite)' | 'Besar Kemungkinan (Probable)' | 'Mungkin (Possible)' | 'Ragu-ragu (Doubtful)';
  color: string;
  badgeBg: string;
  description: string;
  recommendation: string;
} {
  if (score >= 9) {
    return {
      category: 'Pasti (Definite)',
      color: 'text-red-700 dark:text-red-300',
      badgeBg: 'bg-red-100 text-red-800 dark:bg-red-950/80 dark:text-red-200 border-red-300 dark:border-red-800',
      description: 'Hubungan kausalitas KTD dengan obat telah terbukti pasti secara temporal, dechallenge/rechallenge positif, dan terkonfirmasi bukti objektif.',
      recommendation: 'Hentikan obat secara permanen. Laporkan ke Pusat MESO / Farmakovigilans BPOM RI dan catat alergi/KTD permanen pada rekam medis pasien.'
    };
  } else if (score >= 5) {
    return {
      category: 'Besar Kemungkinan (Probable)',
      color: 'text-amber-700 dark:text-amber-300',
      badgeBg: 'bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-200 border-amber-300 dark:border-amber-800',
      description: 'Reaksi efek samping sangat mungkin disebabkan oleh obat ini berdasarkan hubungan waktu dan perbaikan setelah obat dihentikan.',
      recommendation: 'Disarankan menghentikan atau mengganti obat dengan golongan alternatif. Evaluasi resolusi gejala dan laporkan formulir MESO.'
    };
  } else if (score >= 1) {
    return {
      category: 'Mungkin (Possible)',
      color: 'text-blue-700 dark:text-blue-300',
      badgeBg: 'bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-200 border-blue-300 dark:border-blue-800',
      description: 'Obat ini mungkin berkontribusi terhadap keluhan pasien, namun penyakit dasar atau faktor lain juga dapat menjadi penyebab alternatif.',
      recommendation: 'Lakukan pemantauan klinis ketat dan uji laboratorium penunjang. Pertimbangkan penurunan dosis sebelum penghentian total.'
    };
  } else {
    return {
      category: 'Ragu-ragu (Doubtful)',
      color: 'text-slate-700 dark:text-slate-300',
      badgeBg: 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700',
      description: 'Kecil kemungkinan reaksi disebabkan oleh obat ini. Penyebab utama kemungkinan besar berasal dari perjalanan penyakit pasien atau faktor lingkungan.',
      recommendation: 'Evaluasi kembali diagnosis diferensial penyakit pasien. Terapi obat dapat dilanjutkan dengan pengawasan wajar.'
    };
  }
}

/**
 * 2. WHO-UMC Causality Assessment System (Standar Resmi BPOM RI)
 */
export interface WhoUmcCategory {
  id: 'certain' | 'probable' | 'possible' | 'unlikely' | 'conditional' | 'unassessable';
  name: string;
  indonesianName: string;
  badgeBg: string;
  color: string;
  criteria: string[];
  explanation: string;
  officialBpomaAction: string;
}

export const WHO_UMC_CATEGORIES: WhoUmcCategory[] = [
  {
    id: 'certain',
    name: 'Certain (Pasti)',
    indonesianName: 'Pasti (Certain)',
    badgeBg: 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-200 border-red-300 dark:border-red-800',
    color: 'text-red-600 dark:text-red-400',
    criteria: [
      'Hubungan waktu yang sangat masuk akal antara pemberian obat dan timbulnya gejala.',
      'Peristiwa klinis tidak dapat dijelaskan oleh penyakit yang mendasari atau obat lain.',
      'Respons terhadap penghentian obat secara klinis meyakinkan (Dechallenge positif).',
      'Gejala muncul kembali saat obat diberikan ulang (Rechallenge positif yang definitif).',
      'Mekanisme farmakologis atau imunologis telah terbukti dan terkonfirmasi bukti objektif/lab.'
    ],
    explanation: 'Hubungan kausalitas tidak terbantahkan. Reaksi KTD secara definitif dipicu oleh obat yang bersangkutan.',
    officialBpomaAction: 'Hentikan obat permanen, catat kontraindikasi mutlak di rekam medis pasien, dan kirim Laporan CITO Formulir Kuning ke Pusat Farmakovigilans BPOM RI.'
  },
  {
    id: 'probable',
    name: 'Probable / Likely (Besar Kemungkinan)',
    indonesianName: 'Besar Kemungkinan (Probable / Likely)',
    badgeBg: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200 border-amber-300 dark:border-amber-800',
    color: 'text-amber-600 dark:text-amber-400',
    criteria: [
      'Hubungan waktu yang masuk akal antara inisiasi obat dan timbulnya reaksi KTD.',
      'Kecil kemungkinan dijelaskan oleh perjalanan penyakit pasien atau obat lain.',
      'Respons klinis membaik setelah obat dihentikan (Dechallenge positif).',
      'Uji pemberian ulang (Rechallenge) tidak dilakukan atau tidak diperlukan secara etis klinis.'
    ],
    explanation: 'Sangat mungkin disebabkan oleh obat, didukung oleh respons perbaikan saat obat dihentikan.',
    officialBpomaAction: 'Disarankan menghentikan obat atau beralih ke obat alternatif. Lengkapi laporan MESO BPOM RI.'
  },
  {
    id: 'possible',
    name: 'Possible (Mungkin)',
    indonesianName: 'Mungkin (Possible)',
    badgeBg: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-200 border-blue-300 dark:border-blue-800',
    color: 'text-blue-600 dark:text-blue-400',
    criteria: [
      'Hubungan waktu yang masuk akal antara pemberian obat dan timbulnya gejala.',
      'DAPAT dijelaskan oleh penyakit yang mendasari atau obat/terapi lain yang dikonsumsi bersamaan.',
      'Informasi mengenai penghentian obat (Dechallenge) tidak lengkap, belum jelas, atau tidak membaik spontan.'
    ],
    explanation: 'Obat ini berpotensi menjadi penyebab, namun kondisi penyakit pasien atau obat lain juga bisa menjadi pemicu alternatif.',
    officialBpomaAction: 'Pantau secara intensif, lakukan uji lab diferensial, dan pertimbangkan penyesuaian dosis.'
  },
  {
    id: 'unlikely',
    name: 'Unlikely (Kecil Kemungkinan)',
    indonesianName: 'Kecil Kemungkinan (Unlikely)',
    badgeBg: 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700',
    color: 'text-slate-600 dark:text-slate-400',
    criteria: [
      'Hubungan waktu tidak masuk akal atau meragukan (misal: timbul sebelum obat diminum).',
      'Penyakit yang mendasari atau obat lain memberikan penjelasan yang jauh lebih masuk akal dan meyakinkan.'
    ],
    explanation: 'Kecil kemungkinan reaksi disebabkan oleh obat ini. Penyebab utama kemungkinan besar adalah penyakit pasien.',
    officialBpomaAction: 'Terapi obat dapat dilanjutkan dengan evaluasi klinis wajar terhadap penyakit dasar.'
  },
  {
    id: 'conditional',
    name: 'Conditional / Unclassified (Bersyarat)',
    indonesianName: 'Bersyarat / Perlu Data Tambahan (Conditional)',
    badgeBg: 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-200 border-purple-300 dark:border-purple-800',
    color: 'text-purple-600 dark:text-purple-400',
    criteria: [
      'Kejadian efek samping telah dilaporkan namun diperlukan data tambahan yang lebih lengkap untuk evaluasi yang tepat.',
      'Data sedang dalam proses pengumpulan atau pemeriksaan laboratorium lanjutan.'
    ],
    explanation: 'Penilaian ditunda sementara menunggu hasil lab lanjutan (misal: biopsi, kadar obat dalam darah, atau LFT serial).',
    officialBpomaAction: 'Lakukan pemeriksaan diagnostik tambahan dan re-evaluasi setelah data lengkap.'
  },
  {
    id: 'unassessable',
    name: 'Unassessable / Unclassifiable',
    indonesianName: 'Tidak Dapat Dinilai (Unassessable)',
    badgeBg: 'bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200 border-zinc-300 dark:border-zinc-700',
    color: 'text-zinc-500',
    criteria: [
      'Laporan kejadian tidak memiliki data esensial yang memadai, atau terdapat informasi yang saling bertentangan.',
      'Informasi tidak dapat dilengkapi atau diverifikasi lagi.'
    ],
    explanation: 'Informasi KTD tidak mencukupi untuk dinilai secara kausalitas klinis.',
    officialBpomaAction: 'Mintakan konfirmasi data tambahan kepada pelapor jika memungkinkan.'
  }
];

/**
 * 3. Hartwig & Siegel Severity Assessment Scale (Tingkat Keparahan KTD)
 */
export interface HartwigSeverityLevel {
  level: number;
  grade: 'Ringan (Mild)' | 'Sedang (Moderate)' | 'Berat (Severe)' | 'Fatal / Kematian';
  title: string;
  description: string;
  clinicalImpact: string;
  badgeBg: string;
  levelColor: string;
}

export const HARTWIG_SEVERITY_LEVELS: HartwigSeverityLevel[] = [
  {
    level: 1,
    grade: 'Ringan (Mild)',
    title: 'Level 1 - Efek Samping Ringan Tanpa Perubahan Terapi',
    description: 'Efek samping timbul pada pasien, namun TIDAK memerlukan perubahan terapi obat yang dicurigai (misal: rasa sedikit mual ringan transien, mulut agak kering).',
    clinicalImpact: 'Tidak ada intervensi medis khusus, terapi obat dilanjutkan seperti biasa.',
    badgeBg: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-300',
    levelColor: 'text-emerald-600'
  },
  {
    level: 2,
    grade: 'Ringan (Mild)',
    title: 'Level 2 - Penghentian / Penurunan Dosis Tanpa Terapi Tambahan',
    description: 'Efek samping memerlukan penghentian obat, penundaan pemberian, atau penurunan dosis, namun TIDAK memerlukan obat penawar/antidot tambahan dan TIDAK memperpanjang rawat inap.',
    clinicalImpact: 'Penyesuaian dosis atau penghentian obat saja sudah cukup meredakan gejala.',
    badgeBg: 'bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300 border-teal-300',
    levelColor: 'text-teal-600'
  },
  {
    level: 3,
    grade: 'Sedang (Moderate)',
    title: 'Level 3 - Memerlukan Terapi / Antidot Penawar Tambahan',
    description: 'Efek samping memerlukan penghentian/perubahan terapi obat DAN memerlukan pemberian obat penawar/antidot atau terapi medis tambahan, namun TIDAK memperpanjang rawat inap.',
    clinicalImpact: 'Pasien diberikan terapi simptomatik aktif (misal: antihistamin/steroid untuk alergi, PPI untuk iritasi gaster).',
    badgeBg: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-300 border-yellow-300',
    levelColor: 'text-yellow-600'
  },
  {
    level: 4,
    grade: 'Sedang (Moderate)',
    title: 'Level 4 - Memerlukan Rawat Inap / Perpanjangan Masa Rawat (Hospitalisasi)',
    description: 'Efek samping menyebabkan pasien harus dirawat inap (hospitalisasi) minimal 1 hari ATAU memperpanjang lama rawat inap (Length of Stay) pasien yang sedang dirawat minimal 1 hari.',
    clinicalImpact: 'Beban perawatan rumah sakit meningkat (misal: hiperkalemia moderat, dehidrasi berat akibat diare terinduksi obat).',
    badgeBg: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border-amber-300',
    levelColor: 'text-amber-600'
  },
  {
    level: 5,
    grade: 'Berat (Severe)',
    title: 'Level 5 - Menyebabkan Kerusakan Permanen / Perawatan Intensif (ICU)',
    description: 'Efek samping memerlukan perawatan intensif di ruang ICU / HCU atau menyebabkan disfungsi organ signifikan yang memerlukan monitoring ketat kontinu.',
    clinicalImpact: 'Pasien mengalami kerusakan organ berat (misal: AKI stadium 3, hepatotoksisitas berat dengan ensefalopati, aritmia TdP).',
    badgeBg: 'bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300 border-orange-300',
    levelColor: 'text-orange-600'
  },
  {
    level: 6,
    grade: 'Berat (Severe)',
    title: 'Level 6 - Mengancam Nyawa Secara Langsung (Life-Threatening)',
    description: 'Efek samping secara langsung mengancam nyawa pasien dan memerlukan intervensi medis darurat resusitasi segera untuk mencegah kematian (misal: Syok Anafilaksis, Henti Jantung, Apnea Berat).',
    clinicalImpact: 'Kondisi gawat darurat kritis yang memerlukan resusitasi hidup dasar dan lanjutan (CPR/Adrenalin/Intubasi).',
    badgeBg: 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300 border-red-300',
    levelColor: 'text-red-600'
  },
  {
    level: 7,
    grade: 'Fatal / Kematian',
    title: 'Level 7 - KTD Menyebabkan Kematian Pasien (Fatal)',
    description: 'Efek samping obat secara langsung atau tidak langsung menyebabkan kematian pasien.',
    clinicalImpact: 'Kejadian fatal yang wajib dilaporkan dalam waktu 1x24 jam ke Komite Keselamatan Pasien RS & Pusat Farmakovigilans BPOM RI.',
    badgeBg: 'bg-rose-950 text-rose-100 border-rose-800',
    levelColor: 'text-rose-500'
  }
];

/**
 * 4. Schumock & Thornton Preventability Scale (Skala Ketercegahan KTD)
 */
export interface SchumockQuestion {
  id: string;
  section: 'A' | 'B';
  sectionTitle: string;
  question: string;
  explanation: string;
}

export const SCHUMOCK_QUESTIONS: SchumockQuestion[] = [
  // Section A: Definitely Preventable (Jika ada jawaban 'Ya', maka Pasti Dapat Dicegah)
  {
    id: 'A1',
    section: 'A',
    sectionTitle: 'Section A (Pasti Dapat Dicegah - Definitely Preventable)',
    question: 'Apakah pemilihan obat tidak tepat untuk indikasi klinis pasien atau terdapat kontraindikasi mutlak?',
    explanation: 'Contoh: Peresepan obat yang dikontraindikasikan pada kehamilan, gagal ginjal terminal, atau alergi terdokumentasi.'
  },
  {
    id: 'A2',
    section: 'A',
    sectionTitle: 'Section A (Pasti Dapat Dicegah - Definitely Preventable)',
    question: 'Apakah dosis, frekuensi pemberian, atau rute obat tidak sesuai untuk usia, berat badan, atau fungsi ginjal/hati pasien?',
    explanation: 'Contoh: Dosis melebihi dosis maksimal harian atau tidak dilakukan penyesuaian dosis saat CrCl < 30 mL/min.'
  },
  {
    id: 'A3',
    section: 'A',
    sectionTitle: 'Section A (Pasti Dapat Dicegah - Definitely Preventable)',
    question: 'Apakah terdapat riwayat alergi atau reaksi efek samping serupa yang sudah terdokumentasi di rekam medis pasien sebelumnya?',
    explanation: 'Contoh: Pasien dengan riwayat alergi penisilin tetap diresepkan Amoxicillin.'
  },
  {
    id: 'A4',
    section: 'A',
    sectionTitle: 'Section A (Pasti Dapat Dicegah - Definitely Preventable)',
    question: 'Apakah terdapat interaksi obat bermakna secara klinis (Major DDI) yang terabaikan dalam resep?',
    explanation: 'Contoh: Pemberian Spironolactone bersamaan dengan suplemen KCl pekat tanpa pemantauan kalium.'
  },
  // Section B: Probably Preventable (Jika Section A 'Tidak', dan Section B ada 'Ya', maka Mungkin Dapat Dicegah)
  {
    id: 'B1',
    section: 'B',
    sectionTitle: 'Section B (Mungkin Dapat Dicegah - Probably Preventable)',
    question: 'Apakah pemantauan Therapeutic Drug Monitoring (TDM) atau uji laboratorium penunjang yang disyaratkan tidak dilakukan?',
    explanation: 'Contoh: Tidak dilakukan pemeriksaan kadar trough Gentamicin/Vancomycin atau nilai INR pada Warfarin.'
  },
  {
    id: 'B2',
    section: 'B',
    sectionTitle: 'Section B (Mungkin Dapat Dicegah - Probably Preventable)',
    question: 'Apakah terdapat ketidakpatuhan minum obat oleh pasien (misal: konsumsi berlebih atau salah jadwal)?',
    explanation: 'Contoh: Pasien meminum dosis dobel tanpa instruksi apoteker.'
  }
];

export function evaluateSchumockResult(answers: Record<string, boolean>): {
  result: 'Definitely Preventable (Pasti Dapat Dicegah)' | 'Probably Preventable (Mungkin Dapat Dicegah)' | 'Not Preventable (Tidak Dapat Dicegah)';
  badgeBg: string;
  color: string;
  summary: string;
  recommendation: string;
} {
  const hasSectionAYes = ['A1', 'A2', 'A3', 'A4'].some(k => answers[k] === true);
  if (hasSectionAYes) {
    return {
      result: 'Definitely Preventable (Pasti Dapat Dicegah)',
      badgeBg: 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-200 border-red-300 dark:border-red-800',
      color: 'text-red-600 dark:text-red-400',
      summary: 'KTD ini disebabkan oleh kesalahan peresepan, kekeliruan dosis/rute, pengabaian riwayat alergi, atau interaksi obat mayor yang seharusnya dapat dihindari sepenuhnya.',
      recommendation: 'Lakukan audit klinis peresepan, penapisan resep ketat oleh apoteker (skrining farmasi), dan update peringatan alergi pada sistem resep elektronik (CPOE).'
    };
  }

  const hasSectionBYes = ['B1', 'B2'].some(k => answers[k] === true);
  if (hasSectionBYes) {
    return {
      result: 'Probably Preventable (Mungkin Dapat Dicegah)',
      badgeBg: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200 border-amber-300 dark:border-amber-800',
      color: 'text-amber-600 dark:text-amber-400',
      summary: 'KTD ini kemungkinan besar dapat dicegah apabila protokol pemantauan laboratorium (TDM/Lab rutin) atau edukasi kepatuhan pasien dijalankan secara optimal.',
      recommendation: 'Tingkatkan frekuensi pemantauan kadar obat terapeutik (TDM) dan berikan konseling PIO mendalam mengenai aturan minum obat.'
    };
  }

  return {
    result: 'Not Preventable (Tidak Dapat Dicegah)',
    badgeBg: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200 border-emerald-300 dark:border-emerald-800',
    color: 'text-emerald-600 dark:text-emerald-400',
    summary: 'KTD ini tidak dapat dicegah secara wajar karena terjadi pada dosis terapi yang tepat, tanpa riwayat alergi sebelumnya, dan merupakan respons idiosinkratik biologis pasien.',
    recommendation: 'Tangani keluhan pasien secara suportif dan dokumentasikan reaksi KTD ini ke dalam rekam medis untuk pencegahan di masa depan.'
  };
}

/**
 * 5. BPOM Yellow Form (Formulir Kuning MESO BPOM RI) Data Model
 */
export interface BpomYellowFormReport {
  patient: {
    name: string;
    recordNo: string;
    gender: 'Laki-laki' | 'Perempuan';
    age: string;
    weightKg: string;
    ethnic: string;
    mainDiagnosis: string;
    otherConditions: string;
  };
  reaction: {
    manifestation: string;
    onsetDate: string;
    endDate: string;
    outcome: 'Sembuh Sempurna' | 'Sembuh dengan Cacat' | 'Belum Sembuh' | 'Meninggal Dunia' | 'Tidak Diketahui';
    medicalTreatmentGiven: string;
    labDataResults: string;
  };
  suspectedDrug: {
    tradeName: string;
    activeSubstance: string;
    dosageForm: string;
    batchNumber: string;
    dosageGiven: string;
    route: string;
    startDate: string;
    stopDate: string;
    indication: string;
    dechallengeResult: 'Gejala Membaik' | 'Gejala Tidak Berubah' | 'Obat Tidak Dihentikan' | 'Tidak Tahu';
    rechallengeResult: 'Gejala Muncul Kembali' | 'Gejala Tidak Muncul' | 'Rechallenge Tidak Dilakukan';
  };
  concomitantDrugs: {
    name: string;
    dosage: string;
    route: string;
    duration: string;
    indication: string;
  }[];
  reporter: {
    pharmacistName: string;
    sipaNumber: string;
    institutionName: string;
    institutionAddress: string;
    phone: string;
    email: string;
    reportDate: string;
  };
}

export const DEFAULT_BPOM_YELLOW_FORM: BpomYellowFormReport = {
  patient: {
    name: 'Tn. Budi Santoso',
    recordNo: 'RM-2026-09142',
    gender: 'Laki-laki',
    age: '56 Tahun',
    weightKg: '68 kg',
    ethnic: 'Jawa / Indonesia',
    mainDiagnosis: 'Hipertensi Grade 2 & Dislipidemia',
    otherConditions: 'Riwayat GERD'
  },
  reaction: {
    manifestation: 'Batuk kering parah terus-menerus tanpa dahak disertai rasa menggelitik di tenggorokan terutama saat malam hari dan berbaring.',
    onsetDate: '2026-08-15',
    endDate: '2026-08-25',
    outcome: 'Sembuh Sempurna',
    medicalTreatmentGiven: 'Penghentian Captopril dan penggantian terapi ke Candesartan 8 mg per oral 1x sehari.',
    labDataResults: 'Rontgen Thorax Normal (tidak ada infiltrat/infeksi paru), TTV TD 135/85 mmHg, HR 76x/m.'
  },
  suspectedDrug: {
    tradeName: 'Captopril Tablet 25 mg',
    activeSubstance: 'Captopril',
    dosageForm: 'Tablet Oral',
    batchNumber: 'CPT26A0891',
    dosageGiven: '25 mg 2x sehari',
    route: 'Oral (1 jam ac)',
    startDate: '2026-08-01',
    stopDate: '2026-08-20',
    indication: 'Hipertensi Esensial',
    dechallengeResult: 'Gejala Membaik',
    rechallengeResult: 'Rechallenge Tidak Dilakukan'
  },
  concomitantDrugs: [
    { name: 'Atorvastatin 20 mg', dosage: '20 mg 1x sehari malam', route: 'Oral', duration: '3 bulan', indication: 'Dislipidemia' },
    { name: 'Amlodipine 5 mg', dosage: '5 mg 1x sehari pagi', route: 'Oral', duration: '6 bulan', indication: 'Hipertensi' }
  ],
  reporter: {
    pharmacistName: 'apt. Rina Wati, S.Farm',
    sipaNumber: '19920814/SIPA_31.74/2023/2019',
    institutionName: 'Klinik & Apotek Medika Sejahtera',
    institutionAddress: 'Jl. Jendral Sudirman No. 45, Jakarta',
    phone: '0812-9988-7766',
    email: 'layanan.farmasi@medikasejahtera.co.id',
    reportDate: new Date().toISOString().split('T')[0]
  }
};

