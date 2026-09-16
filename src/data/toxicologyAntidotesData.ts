// ============================================================================
// TOKSIKOLOGI, OVERDOSIS & ANTIDOTUM KLINIS GAWAT DARURAT (IGD & ICU)
// Farmasi Druggist Database - Standar Sentra Informasi Keracunan BPOM & WHO
// ============================================================================

export type ToxinCategory =
  | 'analgesic'
  | 'opioid'
  | 'pesticide'
  | 'sedative'
  | 'cardiovascular'
  | 'anticoagulant'
  | 'alcohol-solvent'
  | 'heavy-metal'
  | 'antidote-cytotoxic'
  | 'bites-stings'
  | 'other';

export interface AntidoteDosageRegimen {
  route: 'IV' | 'Oral' | 'Inhalasi' | 'Topikal' | 'SC' | 'IM';
  protocolName: string;
  stage: 'Loading / Inisial' | 'Pemeliharaan / Infus Kontinu' | 'Titrasi Target Klinis';
  dosageText: string;
  preparationInstructions: string;
  clinicalPearls?: string;
}

export interface RumackMatthewCoordinate {
  hoursPostIngestion: number;
  treatmentLineUgMl: number; // Garis intervensi NAC (150 mcg/mL pada 4 jam)
  highRiskLineUgMl: number;  // Garis risiko tinggi (300 mcg/mL pada 4 jam)
}

export interface ToxicAgentProfile {
  id: string;
  name: string;
  aliases: string[];
  category: ToxinCategory;
  categoryLabel: string;
  commonSources: string[];
  toxicThreshold: string;
  mechanismOfToxicity: string;
  toxidromeSigns: string[];
  severityLevel: 'Kritis / Mengancam Nyawa' | 'Tinggi' | 'Sedang';
  primaryAntidote: string;
  secondaryAntidote?: string;
  antidoteMechanism: string;
  dosageRegimens: AntidoteDosageRegimen[];
  supportiveCare: string[];
  monitoringParameters: string[];
  contraindicatedOrHazardous: string[];
  rumackMatthewData?: {
    referenceDescription: string;
    coordinates: RumackMatthewCoordinate[];
  };
  evidenceSource: string;
}

export const TOXICOLOGY_CATEGORIES: { id: ToxinCategory; label: string; iconName: string; colorClass: string }[] = [
  { id: 'analgesic', label: 'Analgesik & Antipiretik', iconName: 'Pill', colorClass: 'text-amber-500' },
  { id: 'opioid', label: 'Opioid & Narkotika', iconName: 'ShieldAlert', colorClass: 'text-rose-500' },
  { id: 'pesticide', label: 'Insektisida & Pestisida', iconName: 'Skull', colorClass: 'text-emerald-500' },
  { id: 'sedative', label: 'Sedatif & Psikotropika', iconName: 'Moon', colorClass: 'text-purple-500' },
  { id: 'cardiovascular', label: 'Obat Jantung & Vaskular', iconName: 'HeartPulse', colorClass: 'text-red-500' },
  { id: 'anticoagulant', label: 'Antikoagulan & Trombotik', iconName: 'Droplet', colorClass: 'text-rose-600' },
  { id: 'alcohol-solvent', label: 'Alkohol Toksik & Pelarut', iconName: 'Flame', colorClass: 'text-orange-500' },
  { id: 'heavy-metal', label: 'Logam Berat & Mineral', iconName: 'Activity', colorClass: 'text-cyan-500' },
  { id: 'antidote-cytotoxic', label: 'Sitostatika & Onkologi', iconName: 'Zap', colorClass: 'text-blue-500' },
  { id: 'bites-stings', label: 'Bisa Ular & Sengatan Alami', iconName: 'AlertTriangle', colorClass: 'text-teal-500' },
  { id: 'other', label: 'Toksin & Gas Lainnya', iconName: 'Info', colorClass: 'text-slate-400' }
];

export const TOXICOLOGY_ANTIDOTES_DATABASE: ToxicAgentProfile[] = [
  // 1. PARASETAMOL
  {
    id: 'paracetamol',
    name: 'Parasetamol (Acetaminophen / APAP)',
    aliases: ['Panadol', 'Sanmol', 'Pamol', 'Dumin', 'Tempra', 'Biogesic', 'Fermadol'],
    category: 'analgesic',
    categoryLabel: 'Analgesik & Antipiretik',
    commonSources: ['Obat bebas sakit kepala, demam, flu & batuk kombinasi'],
    toxicThreshold: 'Akut Dewasa: > 7.5–10 g atau > 150 mg/kgBB; Pediatrik: > 200 mg/kgBB dalam 24 jam.',
    mechanismOfToxicity:
      'Depresi simpanan glutation hepar hingga < 30%. Metabolit reaktif toksik NAPQI (N-acetyl-p-benzoquinone imine) terakumulasi bebas dan berikatan kovalen dengan makromolekul hepatosit, menyebabkan nekrosis sentrilobular hepar masif dan gagal hati akut.',
    toxidromeSigns: [
      'Fase 1 (0–24 jam): Asimtomatik, mual, muntah, anoreksia, pucat, keringat dingin.',
      'Fase 2 (24–72 jam): Nyeri kuadran kanan atas (RUQ), peningkatan enzim hati (SGOT/SGPT mulai melonjak > 1000 IU/L), oliguria.',
      'Fase 3 (72–96 jam): Nekrosis hati puncak, ikterus berat, koagulopati (PT/INR memanjang), ensefalopati hepatik, gagal ginjal akut (HRS), asidosis laktat.',
      'Fase 4 (> 96 jam): Resolusi klinis bertahan hidup ATAU kematian akibat kegagalan multiorgan.'
    ],
    severityLevel: 'Kritis / Mengancam Nyawa',
    primaryAntidote: 'N-Asetilsistein (NAC / N-acetylcysteine)',
    antidoteMechanism:
      'Berperan sebagai prekursor langsung sintesis glutation intraseluler dan substrat donor gugus sulfhidril (-SH) untuk mengkonjugasi serta menetralisir metabolit toksik NAPQI menjadi asam merkapturat yang larut air dan nontoksik.',
    dosageRegimens: [
      {
        route: 'IV',
        protocolName: 'Protokol Tiga Kantung Standar 21-Jam (Prescott Regimen)',
        stage: 'Loading / Inisial',
        dosageText: '150 mg/kgBB dilarutkan dalam 200 mL Dextrose 5% (atau NaCl 0.9%) diinfuskan selama 60 menit penuh.',
        preparationInstructions: 'Pastikan pemantauan tanda anafilaktoid (ruam/kemerahan kulit). Jangan diinfuskan terlalu cepat.',
        clinicalPearls: 'Pemberian dalam 8 jam pasca tertelan memberikan proteksi hepatik mendekati 100%!'
      },
      {
        route: 'IV',
        protocolName: 'Protokol Tiga Kantung Standar 21-Jam (Tahap 2)',
        stage: 'Pemeliharaan / Infus Kontinu',
        dosageText: '50 mg/kgBB dilarutkan dalam 500 mL Dextrose 5% diinfuskan selama 4 jam berikutnya.',
        preparationInstructions: 'Lanjutkan segera setelah kantung loading pertama selesai tanpa jeda waktu.'
      },
      {
        route: 'IV',
        protocolName: 'Protokol Tiga Kantung Standar 21-Jam (Tahap 3)',
        stage: 'Pemeliharaan / Infus Kontinu',
        dosageText: '100 mg/kgBB dilarutkan dalam 1.000 mL Dextrose 5% diinfuskan selama 16 jam berikutnya (Total dosis 300 mg/kgBB dalam 21 jam).',
        preparationInstructions: 'Periksa ALT/AST dan INR sebelum kantung ke-3 selesai. Jika ALT masih meningkat atau parasetamol terdeteksi, lanjutkan infus 100 mg/kg tiap 16 jam.'
      },
      {
        route: 'Oral',
        protocolName: 'Protokol Oral 72-Jam',
        stage: 'Loading / Inisial',
        dosageText: 'Loading: 140 mg/kgBB oral, dilanjutkan dosis pemeliharaan 70 mg/kgBB setiap 4 jam sebanyak 17 dosis (Total durasi 72 jam).',
        preparationInstructions: 'Encerkan larutan NAC 10% atau 20% menjadi konsentrasi 5% dengan jus buah atau minuman berkarbonasi dingin untuk menyamarkan bau sulfur/telur busuk.',
        clinicalPearls: 'Bila pasien muntah dalam kurun 1 jam setelah minum, ulangi dosis tersebut.'
      }
    ],
    supportiveCare: [
      'Arang aktif (Activated Charcoal) 1 g/kgBB oral bila pasien tiba dalam kurun waktu < 1–2 jam pasca-konsumsi.',
      'Antiemetik (Ondansetron 4–8 mg IV) untuk mengontrol muntah sebelum terapi NAC oral.',
      'Koreksi koagulopati hanya jika terdapat perdarahan aktif (jangan berikan FFP profilaksis karena mengaburkan pemantauan INR sebagai marker fungsi hati).'
    ],
    monitoringParameters: [
      'Kadar Parasetamol Serum pada jam ke-4 pasca konsumsi (plotkan pada Nomogram Rumack-Matthew)',
      'SGOT (AST) dan SGPT (ALT) serial tiap 12–24 jam',
      'PT / INR serial (penanda prognostik paling sensitif)',
      'Serum Kreatinin & BUN (deteksi gagal ginjal akut tubular nekrosis)',
      'Gas Darah Arteri (pH < 7.30 adalah kriteria King\'s College untuk rujukan transplantasi hepar)'
    ],
    contraindicatedOrHazardous: [
      'Jangan menunda pemberian NAC sambil menunggu hasil lab parasetamol jika sudah melewati > 8 jam dari waktu konsumsi!',
      'Hindari obat hepatotoksik lain dan sedatif yang memicu ensefalopati.'
    ],
    rumackMatthewData: {
      referenceDescription:
        'Garis Intervensi Dimulai pada 150 mcg/mL (993 umol/L) pada 4 jam dan berakhir pada 4.7 mcg/mL pada 24 jam. Pasien di atas garis wajib menerima terapi penuh NAC.',
      coordinates: [
        { hoursPostIngestion: 4, treatmentLineUgMl: 150, highRiskLineUgMl: 300 },
        { hoursPostIngestion: 6, treatmentLineUgMl: 106, highRiskLineUgMl: 212 },
        { hoursPostIngestion: 8, treatmentLineUgMl: 75, highRiskLineUgMl: 150 },
        { hoursPostIngestion: 10, treatmentLineUgMl: 53, highRiskLineUgMl: 106 },
        { hoursPostIngestion: 12, treatmentLineUgMl: 37.5, highRiskLineUgMl: 75 },
        { hoursPostIngestion: 14, treatmentLineUgMl: 26.5, highRiskLineUgMl: 53 },
        { hoursPostIngestion: 16, treatmentLineUgMl: 18.8, highRiskLineUgMl: 37.5 },
        { hoursPostIngestion: 18, treatmentLineUgMl: 13.3, highRiskLineUgMl: 26.5 },
        { hoursPostIngestion: 20, treatmentLineUgMl: 9.4, highRiskLineUgMl: 18.8 },
        { hoursPostIngestion: 22, treatmentLineUgMl: 6.6, highRiskLineUgMl: 13.3 },
        { hoursPostIngestion: 24, treatmentLineUgMl: 4.7, highRiskLineUgMl: 9.4 }
      ]
    },
    evidenceSource: 'Konsensus Sentra Informasi Keracunan BPOM RI & Rumack-Matthew Nomogram Guidelines'
  },

  // 2. OPIOID & NARKOTIKA
  {
    id: 'opioid',
    name: 'Opioid (Morfin, Tramadol, Kodein, Fentanil, Metadon, Petidin)',
    aliases: ['MST Continus', 'Fentanyl patch', 'Tramal', 'Durogesic', 'Suboxone', 'Subutex'],
    category: 'opioid',
    categoryLabel: 'Opioid & Narkotika',
    commonSources: ['Analgesik kanker, pasca operasi, penyalahgunaan obat resep, overdosis heroin'],
    toxicThreshold: 'Bervariasi berdasar toleransi; Morfin oral > 200 mg (non-toleran) berisiko fatal; Tramadol > 500 mg memicu kejang.',
    mechanismOfToxicity:
      'Stimulasi berlebih reseptor opioid Mu (MOR) di batang otak sentral menyebabkan depresi pusat pernapasan, hilangnya sensitivitas terhadap hiperkapnia, bradikardia, hipotensi, dan penurunan tonus simpatis.',
    toxidromeSigns: [
      'Trias Klasik Opioid: (1) Depresi pernapasan hebat (laju nafas < 8–10 x/menit atau apnea)',
      '(2) Miosis pinpoint pupils (pupil mengecil seperti ujung jarum, kecuali meperidin/tramadol)',
      '(3) Penurunan kesadaran koma / stupor berat',
      'Tanda tambahan: Bradikardia, hipotermia, bising usus hilang, retensi urin, edema paru non-kardiogenik.'
    ],
    severityLevel: 'Kritis / Mengancam Nyawa',
    primaryAntidote: 'Nalokson Hidroklorida (Naloxone HCl / Narcan)',
    antidoteMechanism:
      'Antagonis kompetitif murni pada reseptor opioid Mu, Kappa, dan Delta tanpa aktivitas agonis intrinsik; mendepak molekul opioid dari reseptor dan memulihkan ventilasi spontan dalam 1–2 menit.',
    dosageRegimens: [
      {
        route: 'IV',
        protocolName: 'Titrasi Pemulihan Ventilasi Dewasa',
        stage: 'Loading / Inisial',
        dosageText: '0.04–0.4 mg IV bolus bertahap tiap 2–3 menit hingga laju napas > 12 x/menit.',
        preparationInstructions: 'Target terapi BUKAN membuat pasien sadar bugar melompat, melainkan mengembalikan ventilasi adekuat tanpa memicu sindrom putus obat (withdrawal) akut yang agresif.',
        clinicalPearls: 'Jika tidak ada respons setelah total 10 mg Nalokson, ragukan diagnosis toksisitas opioid murni!'
      },
      {
        route: 'IV',
        protocolName: 'Infus Kontinu (Untuk Opioid Long-Acting: Fentanil Patch / Metadon)',
        stage: 'Pemeliharaan / Infus Kontinu',
        dosageText: 'Dosis infus per jam = 2/3 dari dosis bolus awal yang berhasil memulihkan napas, dilarutkan dalam NaCl 0.9% atau D5W.',
        preparationInstructions: 'Waktu paruh Nalokson hanya 30–90 menit (jauh lebih pendek dari Morfin/Metadon). Pasien berisiko koma kembali setelah nalokson habis!'
      },
      {
        route: 'IM',
        protocolName: 'Rute Alternatif / Pra-Rumah Sakit',
        stage: 'Loading / Inisial',
        dosageText: '0.4–2.0 mg IM/SC atau 4 mg via nasal spray (bila jalur vena belum terpasang).',
        preparationInstructions: 'Ulangi tiap 2–3 menit bila laju napas belum membaik.'
      }
    ],
    supportiveCare: [
      'Bantuan napas ventilasi Bag-Valve-Mask (BVM) dengan Oksigen 100% SEGERA sebelum atau saat menunggu nalokson bekerja.',
      'Lepaskan patch transdermal fentanil bila pasien menggunakan sediaan patch (bersihkan kulit dengan air mengalir, jangan pakai alkohol karena memacu serapan).',
      'Pada intoksikasi Tramadol: Berikan Diazepam 5–10 mg IV jika timbul kejang (Nalokson TIDAK mencegah kejang akibat tramadol).'
    ],
    monitoringParameters: [
      'Laju pernapasan (RR) dan saturasi oksigen (SpO2) kontinu',
      'Tingkat kesadaran (GCS)',
      'Gejala putus obat akut: Takikardia, muntah, diare berat, agitasi, piloereksi, midriasis',
      'Observasi minimal 4–6 jam pasca dosis nalokson terakhir (minimal 24 jam untuk Metadon / Fentanyl Extended-Release)'
    ],
    contraindicatedOrHazardous: [
      'Jangan memberikan bolus nalokson dosis tinggi mendadak (misal 2 mg sekaligus) pada pasien ketergantungan kronis karena memicu withdrawal krisis hipertensi, takikardia, dan edema paru akut!',
      'Nalokson tidak efektif mengatasi depresi nafas akibat benzodiazepin murni atau alkohol.'
    ],
    evidenceSource: 'Pedoman Penanggulangan Kegawatdaruratan Narkotika Kemenkes RI & WHO Opioid Overdose Guidelines'
  },

  // 3. INSEKTISIDA ORGANOFOSFAT & KARBAMAT
  {
    id: 'organophosphate',
    name: 'Insektisida Organofosfat & Karbamat',
    aliases: ['Diazinon', 'Malathion', 'Chlorpyrifos', 'Parathion', 'Baygon cair pertanian', 'Dichlorvos', 'Carbofuran / Furadan'],
    category: 'pesticide',
    categoryLabel: 'Insektisida & Pestisida',
    commonSources: ['Pestisida pertanian, pembasmi hama rumah tangga, percobaan bunuh diri'],
    toxicThreshold: 'Bahkan beberapa mililiter formulasi murni dapat mematikan via inhalasi, ingesti, maupun absorpsi kulit.',
    mechanismOfToxicity:
      'Inhibisi ireversibel (aging) enzim Asetilkolinesterase (AChE) melalui fosforilasi. Terjadi akumulasi masif asetilkolin di celah sinaps muskarinik, nikotinik, dan sistem saraf pusat.',
    toxidromeSigns: [
      'Sindrom Kolinergik Akut (Mnemonic DUMBELS):',
      'D - Diaphoresis & Diarrhea (Keringat deras & diare profus)',
      'U - Urination (Inkontinensia urin)',
      'M - Miosis pinpoint pupils',
      'B - Bronchorrhea & Bronchospasm & Bradycardia (Paru terendam cairan dahak encer masif, sesak, bradikardia)',
      'E - Emesis (Muntah-muntah)',
      'L - Lacrimation (Air mata mengalir deras)',
      'S - Salivation (Hipersalivasi / busa di mulut)',
      'Efek Nikotinik: Faskulasi otot halus, kelemahan otot lurik, paralisis diafragma pernapasan, kejang.'
    ],
    severityLevel: 'Kritis / Mengancam Nyawa',
    primaryAntidote: 'Atropin Sulfat Injeksi',
    secondaryAntidote: 'Pralidoksim Klorida (2-PAM / Protopam)',
    antidoteMechanism:
      'Atropin: Antagonis kompetitif reseptor muskarinik sentral dan perifer untuk mengeringkan sekresi trakeobronkial dan membalikkan bradikardia. Pralidoksim: Reaktivator enzim asetilkolinesterase sebelum terjadi proses "aging".',
    dosageRegimens: [
      {
        route: 'IV',
        protocolName: 'Atropinisasi Agresif (Tahap Kritis)',
        stage: 'Loading / Inisial',
        dosageText: 'Dewasa: 2–5 mg IV bolus (Anak: 0.05 mg/kgBB). Gandakan dosis setiap 5–10 menit (2 mg -> 4 mg -> 8 mg -> 16 mg) sampai target atropinisasi tercapai!',
        preparationInstructions: 'TARGET ATROPINISASI BUKAN PUPIL LEBAR, MELAINKAN: (1) Ronki paru kering, (2) Sekret bronkial & saliva kering, (3) Laju jantung > 80 x/mnt, (4) Tekanan darah sistolik > 90 mmHg.',
        clinicalPearls: 'Jangan ragu memberikan ratusan miligram Atropin dalam 24 jam bila paru masih basah tergenang sekret!'
      },
      {
        route: 'IV',
        protocolName: 'Infus Kontinu Atropin Rumatan',
        stage: 'Pemeliharaan / Infus Kontinu',
        dosageText: 'Infus kontinu dengan kecepatan 10–20% dari total dosis bolus yang dibutuhkan untuk mencapai atropinisasi per jam.',
        preparationInstructions: 'Titrasi berkala untuk mempertahankan paru tetap kering selama minimal 24–48 jam.'
      },
      {
        route: 'IV',
        protocolName: 'Pralidoksim (2-PAM)',
        stage: 'Loading / Inisial',
        dosageText: 'Dewasa: 1–2 g IV dilarutkan dalam 100 mL NaCl 0.9% diberikan selama 30 menit, dilanjutkan infus kontinu 500 mg/jam.',
        preparationInstructions: 'Berikan secepatnya dalam < 24–48 jam sebelum terjadi "aging" ikatan kovalen fosfat-enzim.'
      }
    ],
    supportiveCare: [
      'DEKONTAMINASI SEGERA: Buka seluruh pakaian pasien, cuci seluruh tubuh dengan air mengalir dan sabun. Petugas medis WAJIB memakai APD lengkap (sarung tangan nitril ganda, gaun kedap, masker).',
      'Suction jalan napas secara agresif untuk membersihkan busa/sekret encer.',
      'Oksigenasi maksimal dan intubasi bila terjadi depresi pernapasan berat atau paralisis otot pernapasan.',
      'Beri Diazepam 5–10 mg IV bila terjadi kejang atau agitasi neuromuskular.'
    ],
    monitoringParameters: [
      'Auskultasi suara napas (ronki basah / sekret bronkial adalah penentu utama dosis atropin)',
      'Frekuensi denyut jantung dan saturasi SpO2 kontinu',
      'Aktivitas Kolinesterase Serum / Eritrosit (jika fasilitas lab tersedia)',
      'Waspadai Sindrom Menengah (Intermediate Syndrome) pada hari ke 1–4: Kelemahan otot leher, proksimal ekstremitas, dan kelumpuhan saraf kranial'
    ],
    contraindicatedOrHazardous: [
      'JANGAN berikan Morfin, Suksinilkolin (paralisis berkepanjangan), Teofilin, atau Fenotiazin.',
      'JANGAN menghentikan Atropin secara mendadak; lakukan tapering bertahap saat kondisi paru sudah bersih stabil.'
    ],
    evidenceSource: 'Pedoman Penatalaksanaan Keracunan Pestisida Kemenkes RI & WHO Guidelines on Organophosphate Poisoning'
  },

  // 4. BENZODIAZEPIN
  {
    id: 'benzodiazepine',
    name: 'Benzodiazepin (Alprazolam, Diazepam, Clonazepam, Midazolam, Lorazepam)',
    aliases: ['Xanax', 'Valium', 'Rivotril', 'Ativan', 'Dumolid', 'Calmlet', 'Stesolid'],
    category: 'sedative',
    categoryLabel: 'Sedatif & Psikotropika',
    commonSources: ['Obat anticemas, obat tidur resep, overdosis polifarmasi dengan alkohol atau opioid'],
    toxicThreshold: 'Indeks terapi relatif lebar jika tunggal; sangat fatal bila dikombinasi dengan depresan SSP lain (alkohol / opioid).',
    mechanismOfToxicity:
      'Peningkatan afinitas neurotransmiter inhibitorik GABA pada reseptor GABA-A melalui peningkatan frekuensi pembukaan kanal klorida, memicu hiperpolarisasi membran saraf dan depresi SSP menyeluruh.',
    toxidromeSigns: [
      'Sedasi mendalam, somnolen hingga koma dangkal',
      'Bicara cadel / pelo (slurred speech)',
      'Ataksia dan hilangnya koordinasi motorik',
      'Hipotonia, refleks fisiologis menurun',
      'Depresi pernapasan ringan hingga sedang (berat jika tercampur alkohol)'
    ],
    severityLevel: 'Tinggi',
    primaryAntidote: 'Flumazenil Injeksi (Anexate)',
    antidoteMechanism:
      'Antagonis kompetitif spesifik pada tempat ikatan benzodiazepin di kompleks reseptor GABA-A; menetralkan efek sedasi dan psikomotor dalam 1–3 menit.',
    dosageRegimens: [
      {
        route: 'IV',
        protocolName: 'Titrasi Bertahap Pemulihan Kesadaran Dewasa',
        stage: 'Loading / Inisial',
        dosageText: '0.2 mg IV lambat selama 30 detik. Bila belum ada respons dalam 60 detik, berikan 0.3 mg. Dapat ditambah 0.5 mg tiap 60 detik hingga dosis maksimal total 3 mg.',
        preparationInstructions: 'Sebagian besar pasien berespons pada dosis kumulatif 1–1.5 mg.',
        clinicalPearls: 'Durasi kerja Flumazenil pendek (~60 menit). Pasien dapat tersedasi kembali jika benzodiazepin yang tertelan memiliki waktu paruh panjang (Diazepam/Clonazepam).'
      },
      {
        route: 'IV',
        protocolName: 'Infus Kontinu (Kasus Sedasi Berulang)',
        stage: 'Pemeliharaan / Infus Kontinu',
        dosageText: '0.1–0.4 mg/jam IV infus dalam D5W atau NaCl 0.9%, dititrasi sesuai respons kesadaran.',
        preparationInstructions: 'Hentikan infus secara berkala untuk menilai perbaikan kesadaran spontan.'
      }
    ],
    supportiveCare: [
      'Patenkan jalan napas (Airway, Breathing, Circulation). Sebagian besar overdosis benzodiazepin murni HANYA membutuhkan terapi suportif oksigenasi dan observasi tanpa flumazenil.',
      'Arang aktif 50 g bila pasien sadar penuh dan konsumsi terjadi dalam < 1 jam.'
    ],
    monitoringParameters: [
      'Tingkat kesadaran (GCS) dan laju pernapasan serial',
      'EKG kontinu: Singkirkan pelebaran QRS sebelum pemberian flumazenil (waspada ko-ingesti antidepresan trisiklik/TCA)'
    ],
    contraindicatedOrHazardous: [
      'KONTRAINDIKASI MUTLAK: Pasien dengan riwayat epilepsi/kejang, pasien ketergantungan benzodiazepin kronis, dan ko-ingesti antidepresan trisiklik (TCA) karena Flumazenil AKAN memicu STATUS EPILEPTIKUS refrakter yang fatal!',
      'Jangan gunakan flumazenil secara rutin jika pasien masih bisa bernapas spontan secara adekuat.'
    ],
    evidenceSource: 'Konsensus Tata Laksana Overdosis Sedatif-Hipnotik & Flumazenil Safety Advisory'
  },

  // 5. SIANIDA
  {
    id: 'cyanide',
    name: 'Sianida (Kalium Sianida / KCN, Asap Kebakaran Inhalasi, Singkong Beracun)',
    aliases: ['Potas', 'Potassium cyanide', 'Sodium cyanide', 'Asam hidrosianat / HCN'],
    category: 'other',
    categoryLabel: 'Toksin & Gas Lainnya',
    commonSources: ['Racun ikan/potas, industri elektroplating, asap kebakaran gedung/plastik sintetik, singkong karet'],
    toxicThreshold: 'Dosis letal KCN / NaCN oral: 200–300 mg. Menghirup HCN 270 ppm fatal dalam hitungan menit.',
    mechanismOfToxicity:
      'Pengikatan berafinitas tinggi ion ferri (Fe3+) pada enzim Sitokrom c Oksidase (Kompleks IV rantai transpor elektron mitokondria), melumpuhkan fosforilasi oksidatif seluler, menghentikan produksi ATP secara total, dan memicu asidosis laktat berat (hipoksia histotoksik).',
    toxidromeSigns: [
      'Onset hiperakut dalam hitungan detik/menit',
      'Sesak napas hebat, takipnea mendadak diikuti bradipnea dan apnea',
      'Bau khas amandel pahit (bitter almond odor) pada napas/muntahan (hanya terdeteksi oleh sebagian orang)',
      'Darah vena berwarna merah cerah menyerupai darah arteri (vena arterialization akibat jaringan tidak mampu menyerap oksigen)',
      'Kolaps kardiovaskular, hipotensi berat, kejang, henti jantung, asidosis metabolik laktat ekstrim (Laktat > 8–10 mmol/L)'
    ],
    severityLevel: 'Kritis / Mengancam Nyawa',
    primaryAntidote: 'Hidroksokobalamin (Cyanokit) ATAU Natrium Tiosulfat + Natrium Nitrit',
    antidoteMechanism:
      'Hidroksokobalamin: Mengikat ion sianida secara langsung membentuk Sianokobalamin (Vitamin B12) yang nontoksik dan diekskresi via urin. Natrium Nitrit: Membentuk methemoglobin yang berkompetisi mengikat sianida. Natrium Tiosulfat: Substrat sulfur untuk enzim Rodanase mengkonversi sianida menjadi tiosianat nontoksik.',
    dosageRegimens: [
      {
        route: 'IV',
        protocolName: 'Hidroksokobalamin (Lini Pertama Baku Emas)',
        stage: 'Loading / Inisial',
        dosageText: 'Dewasa: 5 g IV dilarutkan dalam 200 mL NaCl 0.9% diinfuskan selama 15 menit. Dapat diulang dosis kedua 5 g bila syok/asidosis belum teratasi.',
        preparationInstructions: 'Aman untuk korban asap kebakaran kebakaran (tidak memicu methemoglobinemia). Urin dan kulit akan memerah (kromaturia) selama beberapa hari.',
        clinicalPearls: 'Antidotum pilihan utama paling aman dan cepat.'
      },
      {
        route: 'IV',
        protocolName: 'Kit Antidotum Alternatif (Kemenkes / Klasik)',
        stage: 'Loading / Inisial',
        dosageText: 'Langkah 1: Natrium Nitrit 3% 10 mL (300 mg) IV lambat selama 5–10 menit.\nLangkah 2: Natrium Tiosulfat 25% 50 mL (12.5 g) IV segera setelah nitrit selesai.',
        preparationInstructions: 'Perhatian: Natrium Nitrit KONTRAINDIKASI pada korban kebakaran dengan kecurigaan intoksikasi Karbon Monoksida (CO) karena memperparah hipoksia jaringan!'
      }
    ],
    supportiveCare: [
      'Oksigen 100% via Masker Non-Rebreathing (NRM) atau intubasi ventilator.',
      'Koreksi asidosis metabolik dengan Natrium Bikarbonat bila pH < 7.15.',
      'Vasopresor (Norepinefrin) untuk syok hipotensi refrakter.',
      'Dekontaminasi kulit segera bila terpapar sianida cair.'
    ],
    monitoringParameters: [
      'Kadar Laktat Serum serial (korelasi erat dengan keparahan keracunan sianida)',
      'Analisa Gas Darah (AGD) dan saturasi oksigen vena sentral (ScvO2)',
      'Kadar Methemoglobin (bila menggunakan Natrium Nitrit; target metHb < 20–25%)'
    ],
    contraindicatedOrHazardous: [
      'JANGAN melakukan resusitasi mulut-ke-mulut (mouth-to-mouth) karena penolong dapat terpapar gas sianida fatal!',
      'Jangan tunda antidot menunggu konfirmasi lab bila kecurigaan klinis tinggi.'
    ],
    evidenceSource: 'WHO Guidelines on Cyanide Antidotes & Goldfrank\'s Toxicologic Emergencies'
  },

  // 6. METANOL & ETILEN GLIKOL
  {
    id: 'methanol',
    name: 'Metanol & Etilen Glikol (Alkohol Oplosan / Minyak Rem)',
    aliases: ['Spirtus', 'Alkohol teknis', 'Ciu oplosan', 'Ethylene glycol / Antifreeze', 'Minyak rem oplosan'],
    category: 'alcohol-solvent',
    categoryLabel: 'Alkohol Toksik & Pelarut',
    commonSources: ['Minuman keras oplosan, pelarut industri spirtus, cairan pendingin radiator, minyak rem'],
    toxicThreshold: 'Metanol murni: 10 mL dapat memicu kebutaan permanen; 30–100 mL berakibat fatal mematikan.',
    mechanismOfToxicity:
      'Metanol dimetabolisme oleh Alkohol Dehidrogenase (ADH) menjadi formaldehida, lalu menjadi Asam Format (formate) yang menghambat sitokrom oksidase retina dan saraf optik (kebutaan) serta memicu asidosis metabolik anion gap ekstrim. Etilen glikol dimetabolisme menjadi Asam Oksalat yang memicu kristalisasi kalsium oksalat di tubulus ginjal (gagal ginjal akut anuria).',
    toxidromeSigns: [
      'Periode Laten 12–24 jam: Pasien tampak mabuk biasa atau mengantuk ringan sebelum metabolit terbentuk',
      'Gangguan Penglihatan Khas Metanol: Penglihatan buram, melihat "badai salju" (snowstorm vision), fotofobia, midriasis terfiksasi, edema papil saraf optik hingga kebutaan total permanen',
      'Toksisitas Etilen Glikol: Nyeri pinggang hebat, hematuria, oliguria hingga anuria total (gagal ginjal akut)',
      'Sistemik: Sesak napas Kussmaul dalam, mual muntah, nyeri perut hebat (pankreatitis), koma, asidosis metabolik berat (High Anion Gap Metabolic Acidosis / HAGMA) dengan Anion Gap > 20 mEq/L dan Osmolal Gap tinggi.'
    ],
    severityLevel: 'Kritis / Mengancam Nyawa',
    primaryAntidote: 'Fomepizol (4-Methylpyrazole) ATAU Etanol Farmasi Oral / IV',
    secondaryAntidote: 'Asam Folat / Leukovorin (Metanol) / Piridoksin & Tiamin (Etilen Glikol)',
    antidoteMechanism:
      'Fomepizol dan Etanol adalah inhibitor kompetitif enzim Alkohol Dehidrogenase (ADH) dengan afinitas ratusan kali lebih kuat daripada metanol/etilen glikol; memblokir pembentukan metabolit toksik asam format dan asam oksalat sehingga alkohol induk dapat diekskresi via ginjal/dialisis tanpa dipecah.',
    dosageRegimens: [
      {
        route: 'IV',
        protocolName: 'Fomepizol (Baku Emas)',
        stage: 'Loading / Inisial',
        dosageText: 'Loading: 15 mg/kgBB IV diinfuskan selama 30 menit. Dilanjutkan 10 mg/kgBB tiap 12 jam sebanyak 4 dosis, kemudian naikkan 15 mg/kg tiap 12 jam.',
        preparationInstructions: 'Bila pasien menjalani hemodialisis, berikan dosis lebih sering (tiap 4 jam) atau infus kontinu karena fomepizol ikut terdialisis.',
        clinicalPearls: 'Tidak menyebabkan efek mabuk atau hipoglikemia seperti etanol.'
      },
      {
        route: 'Oral',
        protocolName: 'Etanol Oral (Bila Fomepizol Tidak Tersedia di Indonesia)',
        stage: 'Loading / Inisial',
        dosageText: 'Loading: Etanol konsumsi 40% (whisky/vodka food-grade) sebanyak 1.8–2.0 mL/kgBB oral/NGT dilarutkan dalam jus manis untuk mencapai target kadar etanol darah 100–150 mg/dL (22–33 mmol/L).',
        preparationInstructions: 'Dosis Pemeliharaan: 0.2–0.4 mL/kgBB/jam oral/NGT. Gandakan dosis pemeliharaan menjadi 0.4–0.6 mL/kgBB/jam saat pasien menjalani hemodialisis!'
      },
      {
        route: 'IV',
        protocolName: 'Asam Folat / Leukovorin (Kofaktor Pengurai Asam Format)',
        stage: 'Loading / Inisial',
        dosageText: 'Leukovorin atau Asam Folat 50 mg IV tiap 4–6 jam.',
        preparationInstructions: 'Memicu pemecahan asam format menjadi karbon dioksida dan air nontoksik.'
      }
    ],
    supportiveCare: [
      'HEMODIALISIS CITO INDIKASI MUTLAK: (1) Gangguan penglihatan, (2) Asidosis metabolik berat pH < 7.25 / Anion gap tinggi, (3) Kadar metanol > 50 mg/dL, (4) Gagal ginjal akut.',
      'Natrium Bikarbonat IV untuk alkalinisasi serum target pH > 7.35 (mengionisasi asam format sehingga tidak mudah menembus sawar darah retina dan otak).'
    ],
    monitoringParameters: [
      'Analisa Gas Darah serial (pH, Bikarbonat, Base Excess)',
      'Elektrolit & Hitung Anion Gap: [Na+] - ([Cl-] + [HCO3-])',
      'Kadar Glukosa Darah serial (waspadai hipoglikemia berat akibat infus etanol)',
      'Pemeriksaan Funduskopi mata (edema diskus optikus)',
      'Produksi urin dan serum kreatinin'
    ],
    contraindicatedOrHazardous: [
      'Jangan menunda hemodialisis jika sudah ada gejala visual atau asidosis berat!',
      'Hindari penggunaan etanol teknis/industri sebagai antidot; wajib menggunakan preparat farmasi steril atau minuman food-grade bersegel.'
    ],
    evidenceSource: 'Pedoman Penanganan Keracunan Metanol Kemenkes RI & AACT Toxic Alcohols Guidelines'
  },

  // 7. BETA-BLOCKER
  {
    id: 'beta-blocker',
    name: 'Beta-Blocker (Bisoprolol, Propranolol, Atenolol, Carvedilol)',
    aliases: ['Concor', 'Farmadral', 'Tenormin', 'Blorec', 'V-Bloc'],
    category: 'cardiovascular',
    categoryLabel: 'Obat Jantung & Vaskular',
    commonSources: ['Obat hipertensi, aritmia, gagal jantung, angina pektoris'],
    toxicThreshold: 'Dosis > 2–3x dosis harian maksimal memicu toksisitas kardiovaskular berat; Propranolol memiliki toksisitas SSP & natrium-channel blokade tertinggi.',
    mechanismOfToxicity:
      'Blokade reseptor beta-1 dan beta-2 adrenergik miokardium menurunkan siklik AMP (cAMP) intraseluler melalui inaktivasi adenilat siklase, memicu inotropik negatif (penurunan kontraktilitas), kronotropik negatif (bradikardia berat), dromotropik negatif (blok AV), dan syok kardiogenik.',
    toxidromeSigns: [
      'Bradikardia simtomatik (HR < 40–50 x/menit)',
      'Hipotensi refrakter terhadap cairan (Syok kardiogenik)',
      'Blok atrioventrikular (AV Block derajat 1, 2, atau total derajat 3)',
      'Khas Propranolol: Kejang dan pelebaran kompleks QRS pada EKG (akibat efek stabilisasi membran / blokade kanal Na+)',
      'Hipoglikemia (terutama pada anak-anak), bronkospasme sesak napas.'
    ],
    severityLevel: 'Kritis / Mengancam Nyawa',
    primaryAntidote: 'Glukagon IV & Terapi Insulin Dosis Tinggi Euglikemik (HIE / HIET)',
    secondaryAntidote: 'Kalsium Glukonat 10% IV',
    antidoteMechanism:
      'Glukagon: Mengaktifkan adenilat siklase miokardium melalui reseptor glukagon independen (bypass reseptor beta), meningkatkan cAMP intraseluler dan meningkatkan kontraktilitas serta denyut jantung. Terapi HIE: Mengubah metabolisme miokardium yang stres dari asam lemak bebas menjadi ambilan glukosa karbohidrat dan meningkatkan kalsium intraseluler.',
    dosageRegimens: [
      {
        route: 'IV',
        protocolName: 'Glukagon Bolus & Infus',
        stage: 'Loading / Inisial',
        dosageText: 'Loading: 3–5 mg (atau 50–150 mcg/kgBB) IV bolus lambat selama 1–2 menit. Jika tidak ada respons kenaikan HR/TD dalam 10 menit, ulangi bolus kedua 5–10 mg.',
        preparationInstructions: 'Bila berespons, lanjutkan infus kontinu 2–5 mg/jam (dilarutkan dalam D5W).',
        clinicalPearls: 'Glukagon sering memicu muntah masif; posisikan jalan napas dengan aman atau beri antiemetik.'
      },
      {
        route: 'IV',
        protocolName: 'High-Dose Insulin Euglycemia (HIET)',
        stage: 'Loading / Inisial',
        dosageText: 'Loading: Regular Insulin 1 Unit/kgBB IV bolus bersama Dextrose 50% 25–50 mL (0.5–1 g/kg). Dilanjutkan infus Insulin kontinu 0.5–1.0 Unit/kgBB/jam + Infus Dextrose 10% atau 20% untuk mempertahankan GDS 110–180 mg/dL.',
        preparationInstructions: 'Titrasi insulin dapat ditingkatkan hingga 2–5 Unit/kg/jam bila syok kardiogenik masih refrakter.'
      },
      {
        route: 'IV',
        protocolName: 'Kalsium Glukonat 10%',
        stage: 'Loading / Inisial',
        dosageText: '30–60 mL Kalsium Glukonat 10% (atau 10–20 mL Kalsium Klorida 10% via vena sentral) IV pelan 10 menit.',
        preparationInstructions: 'Membantu meningkatkan influks ion kalsium ke miosit.'
      }
    ],
    supportiveCare: [
      'Atropin 0.5–1 mg IV (seringkali kurang efektif pada overdosis beta-blocker masif, namun dapat dicoba di awal).',
      'Vasopresor: Infus Norepinefrin atau Epinefrin untuk menyokong tekanan perfusi.',
      'Transcutaneous Pacing (Pemasangan pacu jantung transkutan) bila bradikardia total tidak berespons terhadap farmakoterapi.',
      'Emulsi Lipid Intravena (Intralipid 20%) dapat dipertimbangkan untuk obat larut lemak tinggi (Propranolol, Carvedilol).'
    ],
    monitoringParameters: [
      'EKG 12 sadapan dan monitor ritme kontinu (HR, interval PR, lebar QRS)',
      'Tekanan darah invasif/non-invasif tiap 5–15 menit',
      'Glukosa Darah Sewaktu (GDS) tiap 30–60 menit selama terapi HIE insulin',
      'Kadar Kalium Serum (Insulin memasukkan kalium ke sel, pertahankan K+ 3.0–3.5 mEq/L, jangan terlalu agresif koreksi kecuali < 2.8 mEq/L)'
    ],
    contraindicatedOrHazardous: [
      'Jangan memberikan cairan kristaloid berlebihan (risiko edema paru kardiogenik akibat gagal pompa jantung).',
      'Hindari obat antiaritmia golongan 1A, 1C, atau antagonis kalsium karena memperparah depresi miokard.'
    ],
    evidenceSource: 'AACT Consensus Statement on the Management of Beta-Blocker Poisoning'
  },

  // 8. CALCIUM CHANNEL BLOCKER (CCB)
  {
    id: 'ccb',
    name: 'Calcium Channel Blocker / CCB (Amlodipine, Diltiazem, Verapamil, Nicardipine)',
    aliases: ['Norvask', 'Herbesser', 'Isoptin', 'Adalat OROS', 'Tensivask', 'Cardizem'],
    category: 'cardiovascular',
    categoryLabel: 'Obat Jantung & Vaskular',
    commonSources: ['Obat hipertensi, aritmia supraventrikular, penyakit jantung koroner'],
    toxicThreshold: 'Bahkan konsumsi 2–3 tablet sediaan lepas lambat (SR/OROS/XL) pada anak-anak atau orang tua dapat berakibat fatal.',
    mechanismOfToxicity:
      'Blokade berlebih kanal kalsium tipe L pada otot polos vaskular (vasodilatasi perifer ekstrim / syok distributif), miosit jantung (penurunan kontraktilitas), dan nodus SA/AV (bradikardia dan henti nodus). Selain itu, menghambat pelepasan insulin dari sel beta pankreas memicu hipoinsulinemia dan hiperglikemia paradoksal berat.',
    toxidromeSigns: [
      'Hipotensi berat persisten / syok refrakter vasopresor',
      'Bradikardia berat, sinus arrest, atau disosiasi AV (terutama Verapamil & Diltiazem)',
      'Refleks takikardia awal (pada Amlodipine/Nifedipine dihidropiridin) diikuti hipotensi kolaps vaskular',
      'Hiperglikemia paradoksal (GDS sering > 200–300 mg/dL akibat inhibisi sekresi insulin pankreas)',
      'Asidosis laktat akibat hipoperfusi jaringan perifer.'
    ],
    severityLevel: 'Kritis / Mengancam Nyawa',
    primaryAntidote: 'Kalsium Glukonat 10% & High-Dose Insulin Euglycemia Therapy (HIET)',
    secondaryAntidote: 'Norepinefrin & Emulsi Lipid Intravena (ILE 20%)',
    antidoteMechanism:
      'Kalsium IV: Mengatasi gradien konsentrasi untuk memaksa ion kalsium masuk melalui kanal L yang terblokir. Terapi HIE Insulin: Memulihkan metabolisme karbohidrat miokardium dan menghasilkan efek inotropik positif kuat tanpa meningkatkan konsumsi oksigen jantung.',
    dosageRegimens: [
      {
        route: 'IV',
        protocolName: 'Kalsium IV Dosis Agresif',
        stage: 'Loading / Inisial',
        dosageText: 'Kalsium Glukonat 10% 30–60 mL (atau Kalsium Klorida 10% 10–20 mL via jalur vena sentral) IV bolus pelan selama 10 menit. Dapat diulang tiap 15–20 menit hingga 3–4 kali.',
        preparationInstructions: 'Dapat dilanjutkan infus kontinu Kalsium Glukonat 0.6–1.5 mL/kg/jam untuk mempertahankan kadar ion kalsium serum di batas atas normal.',
        clinicalPearls: 'Periksa kalsium terionisasi (ionized Ca) target 1.5–2.0 mmol/L.'
      },
      {
        route: 'IV',
        protocolName: 'High-Dose Insulin Euglycemia (HIET - Baku Emas CCB)',
        stage: 'Loading / Inisial',
        dosageText: 'Loading: Regular Insulin 1 Unit/kgBB IV bolus + Dextrose 50% 50 mL. Dilanjutkan infus kontinu 1 Unit/kgBB/jam (dapat dititrasi naik hingga 2–5 Unit/kg/jam) + Infus Dextrose 10%/20% untuk menjaga euglikemia.',
        preparationInstructions: 'Efek inotropik insulin biasanya mulai tampak nyata dalam 30–60 menit pasca-inisiasi.'
      },
      {
        route: 'IV',
        protocolName: 'Norepinefrin Infus Vasopresor',
        stage: 'Pemeliharaan / Infus Kontinu',
        dosageText: 'Mulai 0.05–0.2 mcg/kgBB/menit, dititrasi cepat untuk mempertahankan Mean Arterial Pressure (MAP) > 65 mmHg.',
        preparationInstructions: 'Kombinasi dengan Epinefrin bila kontraktilitas miokard masih lemah.'
      }
    ],
    supportiveCare: [
      'Kumbah lambung dan pemberian Arang Aktif Dosis Multipel (MDAC) sangat dianjurkan bila pasien mengonsumsi sediaan lepas lambat (SR/OROS/XL) dalam kurun waktu 1–4 jam.',
      'Whole Bowel Irrigation (WBI) dengan Polietilen Glikol (PEG) 1–2 L/jam via NGT untuk sediaan sustained-release masif.',
      'Pemasangan Temporary Pacemaker (TPM) bila bradikardia total tidak membaik.',
      'Extracorporeal Membrane Oxygenation (ECMO) sebagai penyelamat akhir jika tersedia.'
    ],
    monitoringParameters: [
      'Tekanan darah invasif arterial line kontinu',
      'Glukosa Darah Sewaktu tiap 30 menit (risiko hipoglikemia tertunda saat reseptor pulih)',
      'Kalium dan Kalsium Terionisasi tiap 1–2 jam',
      'Produksi urin kateter (target > 0.5 mL/kg/jam)'
    ],
    contraindicatedOrHazardous: [
      'Jangan mengandalkan Atropin saja; Atropin hampir selalu gagal mengatasi bradikardia akibat overdosis CCB berat!',
      'Hati-hati ekstravasasi Kalsium Klorida karena memicu nekrosis jaringan berat (utamakan Kalsium Glukonat jika melalui jalur vena perifer).'
    ],
    evidenceSource: 'Expert Consensus Guidelines for the Management of Calcium Channel Blocker Poisoning'
  },

  // 9. DIGOKSIN & GLIKOSIDA JANTUNG
  {
    id: 'digoxin',
    name: 'Digoksin & Glikosida Jantung (Digoxin, Daun Oleander / Nerium oleander)',
    aliases: ['Lanoxin', 'Fargoxin', 'Bunga mentega / Oleander', 'Foxglove / Digitalis'],
    category: 'cardiovascular',
    categoryLabel: 'Obat Jantung & Vaskular',
    commonSources: ['Obat gagal jantung & fibrilasi atrium, tanaman hias beracun Oleander'],
    toxicThreshold: 'Indeks terapi sangat sempit (0.5–0.9 ng/mL). Kadar serum > 2.0 ng/mL sudah toksik; ingesti akut > 4 mg pada dewasa berisiko letal.',
    mechanismOfToxicity:
      'Inhibisi pompa Na+/K+-ATPase pada sarkolema miokardium. Terjadi peningkatan natrium intraseluler yang menghentikan pertukaran Na+/Ca2+, memicu kelebihan kalsium intraseluler masif (afterdepolarization, aritmia ventrikel ganas) dan kegagalan ambilan kalium ke dalam sel (hiperkalemia akut yang mematikan).',
    toxidromeSigns: [
      'Toksisitas Akut: Mual, muntah profus, nyeri abdomen, hiperkalemia berat (penanda mortalitas terpenting)',
      'Toksisitas Kronis (Sering pada lansia / gangguan ginjal): Kelemahan umum, anoreksia, disorientasi',
      'Gangguan Visual Khas: Penglihatan bernuansa kuning-kehijauan (xanthopsia), melihat halo atau cincin cahaya di sekitar objek',
      'Disritmia Jantung yang Bervariasi: Bradikardia sinus, AV block, ekstrasistol ventrikel (PVC) bigemini, Takikardia Ventrikel Bidireksional (sangat patognomonik untuk digoksin).'
    ],
    severityLevel: 'Kritis / Mengancam Nyawa',
    primaryAntidote: 'Digoxin Immune Fab (Digibind / DigiFab)',
    antidoteMechanism:
      'Fragmen antibodi spesifik berafinitas tinggi yang mengikat molekul digoksin bebas di sirkulasi darah; kompleks Fab-digoksin yang terbentuk bersifat nontoksik dan diekskresikan secara cepat melalui filtrasi ginjal.',
    dosageRegimens: [
      {
        route: 'IV',
        protocolName: 'Kalkulasi Dosis Berdasarkan Jumlah Tablet / Mg Tertelan',
        stage: 'Loading / Inisial',
        dosageText: 'Jumlah Vial Fab = [Jumlah Digoksin Tertelan (dalam mg) x 0.8] / 0.5 mg.\n(Contoh: Tertelan 10 mg digoksin -> (10 x 0.8) / 0.5 = 16 vial Fab).',
        preparationInstructions: 'Larutkan tiap vial 38 mg / 40 mg dalam 4 mL WFI, campurkan dalam NaCl 0.9% dan infusan selama 30 menit (atau bolus cepat bila henti jantung).',
        clinicalPearls: 'Satu vial Digoxin Immune Fab 38–40 mg mengikat tepat 0.5 mg digoksin.'
      },
      {
        route: 'IV',
        protocolName: 'Kalkulasi Berdasarkan Kadar Serum Kondisi Steady-State',
        stage: 'Loading / Inisial',
        dosageText: 'Jumlah Vial Fab = [Kadar Digoksin Serum (ng/mL) x Berat Badan (kg)] / 100.',
        preparationInstructions: 'Bila kadar serum dan jumlah tablet tidak diketahui pada henti jantung akut: Berikan 10–20 vial secara empiris.'
      }
    ],
    supportiveCare: [
      'Beri Atropin 0.5–1 mg IV untuk bradikardia atau AV block simtomatik sebelum Fab tiba.',
      'Arang aktif 50 g oral bila tertelan dalam < 2 jam.',
      'Magnesium Sulfat 2 g IV pelan untuk menstabilkan membran miokard pada aritmia ventrikel.'
    ],
    monitoringParameters: [
      'EKG kontinu hingga resolusi disritmia (biasanya membaik dalam 15–30 menit pasca Fab)',
      'Kalium Serum (perhatikan penurunan cepat kalium setelah Fab bekerja, waspadai hipokalemia rebound)',
      'PERHATIAN LAB: Jangan mengukur kadar digoksin serum pasca-pemberian Fab karena tes imunoasai standar akan mengukur digoksin terikat Fab sehingga hasilnya palsu sangat tinggi!'
    ],
    contraindicatedOrHazardous: [
      'KONTRAINDIKASI RELATIF: KALSIUM IV (Kalsium Glukonat/Klorida) secara historis dihindari karena ditakutkan memicu kalsifikasi kontraksi tetanik jantung ("Stone Heart"), utamakan Fab!',
      'Jangan lakukan kardioversi listrik DC shock jika belum diberikan Fab kecuali fibrilasi ventrikel murni (risiko aritmia asistol refrakter).'
    ],
    evidenceSource: 'AHA / ACC Emergency Management of Digoxin Toxicity Guidelines'
  },

  // 10. WARFARIN & SUPERWARFARIN (RACUN TIKUS)
  {
    id: 'warfarin',
    name: 'Warfarin & Rodentisida Superwarfarin (Brodifacoum / Racun Tikus)',
    aliases: ['Simarc-2', 'Coumadin', 'Klerat racun tikus', 'Brodifacoum', 'Bromadiolone'],
    category: 'anticoagulant',
    categoryLabel: 'Antikoagulan & Trombotik',
    commonSources: ['Antikoagulan pencegah stroke fibrilasi atrium/katup mekanik, umpan racun tikus blok merah/biru'],
    toxicThreshold: 'Warfarin: INR > 4.5–5.0 meningkatkan risiko perdarahan; Brodifacoum: Bahkan ingesti 1–2 blok racun tikus memicu koagulopati hingga berbulan-bulan.',
    mechanismOfToxicity:
      'Inhibisi enzim Vitamin K Epoksida Reduktase (VKORC1). Menghambat karboksilasi asam glutamat yang krusial untuk aktivasi faktor pembekuan dependen vitamin K (Faktor II/Protrombin, VII, IX, X serta Protein C dan S).',
    toxidromeSigns: [
      'Perdarahan spontan: Epistaksis (mimisan), gingivoragia (gusi berdarah)',
      'Hematuria (kencing darah kemerahan)',
      'Melena / Hematemesis (BAB hitam aspal / muntah darah)',
      'Ekimosis luas dan hematoma subkutan spontan',
      'Perdarahan Intrakranial (nyeri kepala hebat mendadak, defisit neurologis fokal, penurunan kesadaran) - Ancaman Kematian Utama!'
    ],
    severityLevel: 'Kritis / Mengancam Nyawa',
    primaryAntidote: 'Vitamin K1 (Fitomenadion) & 4-Factor Prothrombin Complex Concentrate (4F-PCC)',
    secondaryAntidote: 'Fresh Frozen Plasma (FFP)',
    antidoteMechanism:
      'Vitamin K1: Menyuplai vitamin K dalam bentuk tereduksi aktif melewati enzim VKOR yang terblokir. 4F-PCC: Menyediakan konsentrat faktor pembekuan II, VII, IX, X murni untuk hemostasis instan dalam hitungan menit.',
    dosageRegimens: [
      {
        route: 'IV',
        protocolName: 'Perdarahan Mayor Mengancam Nyawa / Intrakranial',
        stage: 'Loading / Inisial',
        dosageText: 'Langkah 1: 4F-PCC (K-Centra / Beriplex) 25–50 Unit/kgBB IV infus lambat (koreksi INR menjadi < 1.4 dalam 15–30 menit).\nLangkah 2: Vitamin K1 (Fitomenadion) 10 mg dilarutkan dalam 50–100 mL D5W/NaCl diinfuskan IV lambat selama minimal 30 menit.',
        preparationInstructions: 'Vitamin K1 butuh waktu 6–12 jam untuk mulai mensintesis faktor pembekuan baru; PCC bekerja instan untuk hemostasis segera.',
        clinicalPearls: 'Jangan berikan Vitamin K1 secara bolus IV cepat karena memicu reaksi anafilaktoid fatal.'
      },
      {
        route: 'Oral',
        protocolName: 'Overdosis Tanpa Perdarahan (INR 4.5–10)',
        stage: 'Loading / Inisial',
        dosageText: 'Tahan 1–2 dosis warfarin, amati. Bila INR > 10 tanpa perdarahan: Berikan Vitamin K1 2.5–5 mg oral.',
        preparationInstructions: 'Rute oral lebih dipilih dibandingkan IV jika tidak ada perdarahan aktif (penurunan INR lebih terprediksi).'
      },
      {
        route: 'Oral',
        protocolName: 'Superwarfarin (Racun Tikus Brodifacoum)',
        stage: 'Pemeliharaan / Infus Kontinu',
        dosageText: 'Vitamin K1 dosis tinggi: 50–100 mg oral per hari, dapat berlangsung selama 1 hingga 6 bulan penuh!',
        preparationInstructions: 'Waktu paruh superwarfarin sangat panjang (20–60 hari di jaringan lemak).'
      }
    ],
    supportiveCare: [
      'Bila 4F-PCC tidak tersedia di RS, gunakan Fresh Frozen Plasma (FFP) 15–20 mL/kgBB (namun waspada volume overload / gagal jantung).',
      'Transfusi Packed Red Cells (PRC) bila Hb turun signifikan akibat perdarahan aktif.',
      'Bebat tekan lokal untuk perdarahan eksternal.'
    ],
    monitoringParameters: [
      'INR serial pada jam ke-30 menit pasca-PCC, lalu tiap 6–12 jam',
      'Hemoglobin & Hematokrit serial',
      'CT-Scan Kepala CITO bila ada kecurigaan perdarahan intrakranial',
      'Pemeriksaan urin dan feses terhadap perdarahan tersembunyi (occult blood)'
    ],
    contraindicatedOrHazardous: [
      'JANGAN berikan Vitamin K3 (Menadione) karena inefektif dan memicu hemolisis berat!',
      'Hindari suntikan Intramuskular (IM) jenis apapun karena memicu hematoma hematoma masif pada pasien dengan koagulopati berat.'
    ],
    evidenceSource: 'CHEST Guidelines on Antithrombotic Therapy & Reversal of Anticoagulants'
  },

  // 11. HEPARIN & LMWH
  {
    id: 'heparin',
    name: 'Heparin (Unfractionated Heparin / UFH & Low Molecular Weight Heparin / Enoxaparin)',
    aliases: ['Inviclot heparin', 'Lovenox enoxaparin', 'Arixtra fondaparinux'],
    category: 'anticoagulant',
    categoryLabel: 'Antikoagulan & Trombotik',
    commonSources: ['Antikoagulan infus hemodialisis, sindrom koroner akut, emboli paru, DVT'],
    toxicThreshold: 'Perdarahan aktif spontan atau aPTT > 3x kontrol baseline.',
    mechanismOfToxicity:
      'Potensiasi aktivitas Antitrombin III (AT-III) ratusan kali lipat yang menginaktivasi trombin (Faktor IIa) dan Faktor Xa, melumpuhkan jalur kaskade koagulasi intrinsik.',
    toxidromeSigns: [
      'Perdarahan di lokasi tusukan infus/kateter atau luka operasi',
      'Hematoma retroperitoneal atau hematoma dinding abdomen',
      'Hematuria, perdarahan saluran cerna, perdarahan intrakranial'
    ],
    severityLevel: 'Tinggi',
    primaryAntidote: 'Protamin Sulfat Injeksi',
    antidoteMechanism:
      'Protein polikationik basa kuat yang berikatan secara ionik dengan molekul heparin (polianionik asam kuat) membentuk garam kompleks stabil yang kehilangan aktivitas antikoagulan seutuhnya.',
    dosageRegimens: [
      {
        route: 'IV',
        protocolName: 'Reversal Heparin Tak Terfraksi (UFH)',
        stage: 'Loading / Inisial',
        dosageText: '1 mg Protamin Sulfat menetralisir tepat 100 Unit Heparin yang diberikan dalam kurun 2 jam terakhir.\n(Maksimal dosis tunggal: 50 mg).',
        preparationInstructions: 'Injeksi IV sangat lambat selama minimal 10 menit (kecepatan maksimal 5 mg/menit).',
        clinicalPearls: 'Bila heparin diberikan via infus kontinu yang sudah dimatikan > 30 menit, hitung hanya heparin dalam 1 jam terakhir (waktu paruh heparin singkat 60–90 mnt).'
      },
      {
        route: 'IV',
        protocolName: 'Reversal Enoxaparin (LMWH)',
        stage: 'Loading / Inisial',
        dosageText: 'Bila dosis enoxaparin diberikan < 8 jam: 1 mg Protamin per 1 mg (100 anti-Xa unit) enoxaparin. Bila 8–12 jam: 0.5 mg Protamin per 1 mg enoxaparin.',
        preparationInstructions: 'Protamin hanya menetralkan ~60% aktivitas anti-Xa dari LMWH, namun memulihkan efek anti-IIa seutuhnya.'
      }
    ],
    supportiveCare: [
      'Hentikan segera infus heparin.',
      'Transfusi darah bila anemia berat akibat perdarahan.'
    ],
    monitoringParameters: [
      'aPTT diukur 15–30 menit pasca-protamin',
      'Tekanan darah dan denyut jantung selama infus protamin (risiko hipotensi berat dan bradikardia bila infus terlalu cepat)'
    ],
    contraindicatedOrHazardous: [
      'Jangan memberikan Protamin melebihi dosis yang diperlukan; kelebihan protamin bebas memiliki aktivitas antikoagulan intrinsik paradoksal!',
      'Waspadai alergi berat pada pasien riwayat vasektomi atau alergi ikan salmon (protamin diekstrak dari sperma ikan salmon).'
    ],
    evidenceSource: 'American Society of Hematology (ASH) Anticoagulation Reversal Guidelines'
  },

  // 12. DOAC: DABIGATRAN
  {
    id: 'dabigatran',
    name: 'Dabigatran Etexilate (Direct Thrombin Inhibitor / DOAC)',
    aliases: ['Pradaxa'],
    category: 'anticoagulant',
    categoryLabel: 'Antikoagulan & Trombotik',
    commonSources: ['Pencegahan stroke pada fibrilasi atrium non-valvular, terapi DVT/PE'],
    toxicThreshold: 'Perdarahan masif atau kebutuhan operasi cito darurat dalam < 2 jam.',
    mechanismOfToxicity:
      'Penghambatan langsung dan reversibel pada trombin bebas maupun trombin yang terikat bekuan fibrin (Faktor IIa).',
    toxidromeSigns: [
      'Perdarahan saluran cerna masif',
      'Perdarahan intrakranial',
      'Pemanjangan Thrombin Time (TT), Ecarin Clotting Time (ECT), dan aPTT.'
    ],
    severityLevel: 'Kritis / Mengancam Nyawa',
    primaryAntidote: 'Idarucizumab (Praxbind)',
    antidoteMechanism:
      'Fragmen antibodi monoklonal terhumanisasi (Fab) yang mengikat dabigatran bebas dan terikat dengan afinitas 350 kali lebih kuat dibandingkan afinitas dabigatran terhadap trombin; hemostasis pulih dalam hitungan menit.',
    dosageRegimens: [
      {
        route: 'IV',
        protocolName: 'Dosis Tunggal Reversal Lengkap',
        stage: 'Loading / Inisial',
        dosageText: 'Total 5 g IV diberikan dalam dua vial terpisah masing-masing 2.5 g / 50 mL.',
        preparationInstructions: 'Diberikan sebagai dua infus berturut-turut masing-masing 5–10 menit atau bolus suntikan langsung.',
        clinicalPearls: 'Menetralkan efek antikoagulan dabigatran seketika dan bertahan selama minimal 24 jam.'
      }
    ],
    supportiveCare: [
      'Hemodialisis dapat membuang ~50–60% dabigatran dalam 4 jam bila Idarucizumab tidak tersedia (karena ikatan protein dabigatran rendah ~35%).',
      'Pemberian Arang Aktif bila baru tertelan < 2 jam.'
    ],
    monitoringParameters: [
      'Thrombin Time (TT) atau dilute Thrombin Time (dTT)',
      'aPTT (kembali ke baseline menandakan netralisasi adekuat)'
    ],
    contraindicatedOrHazardous: [
      'Jangan gunakan Protamin atau Vitamin K karena sama sekali tidak efektif terhadap dabigatran.'
    ],
    evidenceSource: 'FDA / EMA Praxbind Prescribing Information & RE-VERSE AD Trial'
  },

  // 13. DOAC: RIVAROXABAN & APIXABAN
  {
    id: 'rivaroxaban',
    name: 'Rivaroxaban & Apixaban (Penghambat Faktor Xa / DOAC)',
    aliases: ['Xarelto', 'Eliquis'],
    category: 'anticoagulant',
    categoryLabel: 'Antikoagulan & Trombotik',
    commonSources: ['Pencegahan stroke pada fibrilasi atrium, tatalaksana DVT/PE, pasca artroplasti lutut/panggul'],
    toxicThreshold: 'Perdarahan mayor yang tidak terkontrol atau kebutuhan prosedur darurat.',
    mechanismOfToxicity:
      'Penghambatan selektif dan kompetitif pada Faktor Xa bebas dan terikat protrombinase, menghentikan jalur bersama pembentukan trombin.',
    toxidromeSigns: [
      'Perdarahan mayor internal, retroperitoneal, hematoma kompartemen, perdarahan intrakranial',
      'Peningkatan aktivitas Anti-Xa terkalibrasi spesifik.'
    ],
    severityLevel: 'Kritis / Mengancam Nyawa',
    primaryAntidote: 'Andexanet Alfa (Andexxa) ATAU 4-Factor PCC (K-Centra)',
    antidoteMechanism:
      'Andexanet Alfa: Protein rekombinan modifikasi umpan (decoy protein) Faktor Xa yang mengikat molekul rivaroxaban/apixaban sehingga melepaskan Faktor Xa endogen tubuh.',
    dosageRegimens: [
      {
        route: 'IV',
        protocolName: 'Andexanet Alfa (Bila Tersedia)',
        stage: 'Loading / Inisial',
        dosageText: 'Low Dose: Bolus 400 mg (30 mg/mnt) dilanjutkan infus 4 mg/mnt selama 120 menit.\nHigh Dose (bila dosis obat tinggi atau tertelan < 8 jam): Bolus 800 mg dilanjutkan infus 8 mg/mnt selama 120 menit.',
        preparationInstructions: 'Rekonstitusi sesuai panduan pabrikan.'
      },
      {
        route: 'IV',
        protocolName: '4-Factor PCC (Alternatif Paling Sering di Indonesia)',
        stage: 'Loading / Inisial',
        dosageText: '50 Unit/kgBB IV bolus (maksimal 5.000 Unit).',
        preparationInstructions: 'Bekerja menyediakan substrat faktor pembekuan dalam jumlah berlimpah untuk mengatasi blokade Xa.'
      }
    ],
    supportiveCare: [
      'Arang aktif bila tertelan < 2 jam.',
      'Hemodialisis TIDAK EFEKTIF karena ikatan protein plasma rivaroxaban/apixaban sangat tinggi (> 85–90%).'
    ],
    monitoringParameters: [
      'Kadar Anti-Xa spesifik',
      'Hemoglobin serial & pemantauan tanda perdarahan'
    ],
    contraindicatedOrHazardous: [
      'Hindari pemberian asam traneksamat tunggal sebagai pengganti PCC pada perdarahan fatal intrakranial.'
    ],
    evidenceSource: 'ANNEXA-4 Trial & ACC Expert Consensus Decision Pathway on Anticoagulation Reversal'
  },

  // 14. ISONIAZID (INH)
  {
    id: 'isoniazid',
    name: 'Isoniazid / INH (Obat Anti-Tuberkulosis)',
    aliases: ['INH', 'Rifastar', 'FDC TB', 'Rimactazid', 'Puyer TB'],
    category: 'other',
    categoryLabel: 'Toksin & Gas Lainnya',
    commonSources: ['Program pengobatan TBC nasional, resep OAT dewasa/anak, overdosis intensional'],
    toxicThreshold: 'Dosis > 35–40 mg/kgBB memicu kejang; > 80–100 mg/kgBB letal tanpa antidotum piridoksin.',
    mechanismOfToxicity:
      'Metabolit INH menghambat enzim Piridoksin Fosfokinase, menghambat sintesis Piridoksal 5-Fosfat (bentuk aktif Vitamin B6). B6 adalah kofaktor esensial enzim Glutamic Acid Decarboxylase (GAD) yang mensintesis neurotransmiter inhibitorik GABA di otak. Kekurangan GABA memicu eksitasi susunan saraf pusat masif, kejang epileptikus refrakter, dan asidosis laktat berat.',
    toxidromeSigns: [
      'Trias Intoksikasi INH: (1) Status epileptikus refrakter antikonvulsan biasa, (2) Asidosis laktat berat (anion gap sangat tinggi), (3) Koma berkepanjangan',
      'Gejala awal: Mual, muntah, pusing berputar, ataksia, hiperrefleksia dalam 30–120 menit pasca tertelan.'
    ],
    severityLevel: 'Kritis / Mengancam Nyawa',
    primaryAntidote: 'Piridoksin (Vitamin B6) Injeksi / Oral',
    antidoteMechanism:
      'Menyuplai langsung Vitamin B6 dalam konsentrasi tinggi untuk memulihkan sintesis GABA di otak dan menghentikan kejang seketika.',
    dosageRegimens: [
      {
        route: 'IV',
        protocolName: 'Aturan Gram-for-Gram (Dosis Diketahui)',
        stage: 'Loading / Inisial',
        dosageText: 'Berikan Piridoksin (Vitamin B6) gram-for-gram setara dengan jumlah INH yang tertelan!\n(Contoh: Pasien minum 5 gram INH -> Berikan 5 gram Piridoksin IV).',
        preparationInstructions: 'Larutkan dalam Dextrose 5% atau NaCl 0.9%, berikan IV pelan selama 5–10 menit.',
        clinicalPearls: 'Kejang biasanya berhenti dramatis dalam hitungan menit setelah Piridoksin masuk!'
      },
      {
        route: 'IV',
        protocolName: 'Dosis Empiris (Bila Jumlah INH Tidak Diketahui)',
        stage: 'Loading / Inisial',
        dosageText: 'Dewasa: 5 gram IV bolus pelan. Anak-anak: 70 mg/kgBB IV (maksimal 5 gram).',
        preparationInstructions: 'Dapat diulang tiap 5–10 menit bila kejang masih berlanjut hingga dosis kumulatif maksimal.'
      }
    ],
    supportiveCare: [
      'Berikan Diazepam 5–10 mg IV bersamaan dengan Piridoksin (efek sinergis memulihkan jalur GABA).',
      'Arang aktif bila jalan napas terlindungi.'
    ],
    monitoringParameters: [
      'Aktivitas kejang pada EKG / EEG',
      'Analisa Gas Darah serial (asidosis laktat akan terkoreksi spontan setelah kejang berhenti)',
      'Kadar SGOT/SGPT hepar pasca pemulihan'
    ],
    contraindicatedOrHazardous: [
      'Jangan gunakan Fenitoin (Dilantin) untuk mengatasi kejang INH karena inefektif dan memperparah toksisitas metabolisme hepar!'
    ],
    evidenceSource: 'Goldfrank\'s Toxicologic Emergencies & WHO Antituberculosis Poisoning Protocols'
  },

  // 15. SULFONILUREA
  {
    id: 'sulfonylurea',
    name: 'Sulfonilurea (Glibenklamid, Glimepirid, Glipizid, Gliklazid)',
    aliases: ['Daonil', 'Amaryl', 'Glucovance', 'Diamicron', 'Glibenclamide'],
    category: 'other',
    categoryLabel: 'Toksin & Gas Lainnya',
    commonSources: ['Obat antidiabetes oral resep, tertelan tidak sengaja oleh balita (1 tablet bisa mematikan balita)'],
    toxicThreshold: 'Bahkan 1 tablet (misal Glibenklamid 5 mg) pada anak kecil dapat menyebabkan hipoglikemia berat fatal dan kerusakan otak permanen.',
    mechanismOfToxicity:
      'Penutupan kanal K-ATP pada sel beta pankreas yang memicu depolarisasi membran dan sekresi insulin endogen terus-menerus tanpa bergantung kadar glukosa darah.',
    toxidromeSigns: [
      'Hipoglikemia berat berulang (GDS < 50 mg/dL): Keringat dingin deras, palpitasi, tremor, rasa lapar ekstrim',
      'Gejala neuroglikopenik: Konfusi, bicara melantur, kejang, defisit neurologis fokal menyerupai stroke, koma hipoglikemia',
      'Khas: Hipoglikemia rebound berulang setiap kali infus dekstrosa dihentikan (karena dekstrosa memicu stimulasi pelepasan insulin baru oleh sulfonilurea).'
    ],
    severityLevel: 'Kritis / Mengancam Nyawa',
    primaryAntidote: 'Oktreotid (Octreotide Acetate / Sandostatin)',
    secondaryAntidote: 'Dekstrosa 10% / 40% IV',
    antidoteMechanism:
      'Analog somatostatin sintetik yang berikatan dengan reseptor somatostatin-2 pada sel beta pankreas; menghambat influks kalsium dan menghentikan sekresi insulin secara total, memutus rantai hipoglikemia berulang.',
    dosageRegimens: [
      {
        route: 'SC',
        protocolName: 'Oktreotid Subkutan (Baku Emas)',
        stage: 'Loading / Inisial',
        dosageText: 'Dewasa: 50–100 mcg Subkutan (SC) tiap 8–12 jam (Anak: 1–1.5 mcg/kgBB SC tiap 8–12 jam).',
        preparationInstructions: 'Dapat juga diberikan via infus IV kontinu bila syok. Durasi terapi minimal 24–48 jam sesuai waktu paruh sulfonilurea.',
        clinicalPearls: 'Oktreotid menghentikan siklus bolus dekstrosa yang memicu sekresi insulin baru.'
      },
      {
        route: 'IV',
        protocolName: 'Dekstrosa IV (Pertolongan Awal Akut)',
        stage: 'Loading / Inisial',
        dosageText: 'Dextrose 40% (D40) 25–50 mL IV bolus cepat untuk mengatasi gejala koma hipoglikemia segera.',
        preparationInstructions: 'Segera sambung dengan infus Dextrose 10% rumatan.'
      }
    ],
    supportiveCare: [
      'Pemberian makanan karbohidrat kompleks per oral jika pasien sadar.',
      'Arang aktif bila konsumsi terjadi dalam kurun 1–2 jam.'
    ],
    monitoringParameters: [
      'Glukosa Darah Sewaktu (GDS) tiap 1–2 jam selama minimal 24–48 jam pasca konsumsi (minimal 72 jam untuk Glibenklamid dengan metabolit aktif)',
      'Pasien TIDAK BOLEH dipulangkan sebelum diobservasi stabil euglikemia minimal 24 jam setelah dosis oktreotid terakhir dihentikan!'
    ],
    contraindicatedOrHazardous: [
      'JANGAN hanya mengandalkan infus glukosa/dekstrosa pekat tanpa oktreotid, karena dekstrosa terus-menerus memicu lonjakan insulin baru yang memperburuk hipoglikemia rebound!'
    ],
    evidenceSource: 'Position Paper on the Management of Sulfonylurea-Induced Hypoglycemia with Octreotide'
  },

  // 16. METHEMOGLOBINEMIA (DAPSONE, ANILIN, NITRIT)
  {
    id: 'methemoglobinemia',
    name: 'Zat Pemicu Methemoglobinemia (Dapsone, Benzocaine, Lidokain, Nitrit, Anilin)',
    aliases: ['Dapsone lepra', 'Semprotan anestesi Benzocaine / Hurricaine spray', 'Minyak tanah anilin', 'Pupuk nitrat'],
    category: 'other',
    categoryLabel: 'Toksin & Gas Lainnya',
    commonSources: ['Obat kusta/lepra Dapsone, semprotan anestesi endoskopi/THT benzocaine, air sumur tercemar nitrat'],
    toxicThreshold: 'Kadar MetHb > 20% menimbulkan gejala simtomatik; > 50–70% mengancam kematian mendadak.',
    mechanismOfToxicity:
      'Oksidasi zat kimia mengubah ion besi hemo ferrous (Fe2+) normal menjadi ferric (Fe3+). Methemoglobin (Fe3+) tidak dapat mengikat oksigen, sekaligus menggeser kurva disosiasi oksihemoglobin ke kiri, memicu hipoksia jaringan anoksik berat.',
    toxidromeSigns: [
      'Sianosis refrakter: Kulit, bibir, dan lidah berwarna biru keabu-abuan / cokelat gelap ("slate-grey cyanosis") yang TIDAK MEMBAIK meski diberi Oksigen 100%!',
      'Darah tampak berwarna cokelat gelap seperti cokelat cair (chocolate-brown blood) dan tidak memerah saat dianginkan di udara terbuka',
      'Gejala: Sesak napas, pusing, lemas, takikardia, koma, kejang saat kadar MetHb > 40–50%.'
    ],
    severityLevel: 'Kritis / Mengancam Nyawa',
    primaryAntidote: 'Metilen Biru (Methylene Blue 1% Injection)',
    antidoteMechanism:
      'Bertindak sebagai pembawa elektron eksogen yang diaktifkan oleh enzim NADPH-methemoglobin reduktase menjadi leukometilen biru, yang kemudian mereduksi Fe3+ kembali menjadi Fe2+ fungsional.',
    dosageRegimens: [
      {
        route: 'IV',
        protocolName: 'Dosis Standar Metilen Biru 1%',
        stage: 'Loading / Inisial',
        dosageText: '1–2 mg/kgBB (0.1–0.2 mL/kgBB larutan 1%) diinfuskan IV pelan selama 5 menit.',
        preparationInstructions: 'Respons pemulihan warna kulit dan oksigenasi biasanya terlihat nyata dalam kurun waktu 15–30 menit.',
        clinicalPearls: 'Dosis dapat diulang 1 jam kemudian bila kadar MetHb masih > 30% atau sianosis berlanjut (maksimal dosis total kumulatif 7 mg/kgBB).'
      }
    ],
    supportiveCare: [
      'Oksigen 100% via NRM.',
      'Transfusi tukar (Exchange Transfusion) atau terapi Oksigen Hiperbarik bila pasien mengalami defisiensi G6PD atau refrakter terhadap metilen biru.'
    ],
    monitoringParameters: [
      'Kadar Methemoglobin via Co-Oximetry serial (Pulse Oximeter standar TIDAK AKURAT, biasanya stuck membaca ~85% palsu)',
      'Analisa Gas Darah serial (PaO2 normal namun saturasi oksigen fungsional anjlok)'
    ],
    contraindicatedOrHazardous: [
      'KONTRAINDIKASI MUTLAK: Pasien dengan Defisiensi G6PD (Glukosa-6-Fosfat Dehidrogenase) karena Metilen Biru inefektif dan AKAN memicu hemolisis masif akut yang mematikan!',
      'Jangan memberikan dosis metilen biru berlebih (> 7 mg/kgBB) karena metilen biru dosis tinggi paradoksal memicu methemoglobinemia baru.'
    ],
    evidenceSource: 'FDA Drug Safety Communication on Methylene Blue & AACT Methemoglobinemia Guidelines'
  },

  // 17. KARBON MONOKSIDA (CO)
  {
    id: 'carbon-monoxide',
    name: 'Karbon Monoksida (CO / Asap Kebakaran / Gas Buang Knalpot)',
    aliases: ['Gas knalpot mobil', 'Asap genset ruangan tertutup', 'Water heater gas bocor', 'Asap arang / shisha'],
    category: 'other',
    categoryLabel: 'Toksin & Gas Lainnya',
    commonSources: ['Menyalakan mobil/genset di garasi tertutup, asap kebakaran gedung, pemanas air gas tanpa ventilasi'],
    toxicThreshold: 'Kadar COHb > 15–20% pada non-perokok simtomatik; > 40–50% memicu koma dan henti jantung fatal.',
    mechanismOfToxicity:
      'Karbon monoksida berikatan dengan hemoglobin dengan afinitas 200–250 kali lebih kuat dibandingkan oksigen, membentuk Karboksihemoglobin (COHb). Hal ini melumpuhkan kapasitas angkut oksigen darah, menggeser kurva disosiasi ke kiri (Haldane effect), dan mengikat mioglobin serta sitokrom c oksidase mitokondria memicu iskemia otak dan miokardium.',
    toxidromeSigns: [
      'Sakit kepala berdenyut hebat di area dahi/pelipis (gejala paling awal & umum)',
      'Pusing berputar, mual, muntah, kebingungan mental, ataksia',
      'Iskemia miokard: Nyeri dada angina, aritmia, hipotensi',
      'Kejang, sinkop, koma mendalam',
      'Tanda klasik literatur "Cherry-red skin" (kulit merah buah ceri) sebenarnya jarang ditemukan dan biasanya merupakan tanda terminal pasca kematian.'
    ],
    severityLevel: 'Kritis / Mengancam Nyawa',
    primaryAntidote: 'Oksigen 100% Normobarik (NRM) ATAU Terapi Oksigen Hiperbarik (HBO)',
    antidoteMechanism:
      'Oksigen konsentrasi tinggi mendesak dan melepaskan ikatan CO dari hemoglobin berdasarkan hukum aksi massa. Waktu paruh COHb pada udara ruangan: ~320 menit; dengan Oksigen 100% NRM: ~80 menit; dengan Oksigen Hiperbarik 2.5–3.0 ATA: ~20–25 menit!',
    dosageRegimens: [
      {
        route: 'Inhalasi',
        protocolName: 'Oksigen 100% Normobarik Segera',
        stage: 'Loading / Inisial',
        dosageText: 'Oksigen 100% via Non-Rebreather Mask (NRM) dengan aliran reservoir 15 L/menit secara ketat dan kontinu selama minimal 6 jam hingga kadar COHb < 3–5% dan gejala neurologis hilang.',
        preparationInstructions: 'Pastikan sungkup masker menempel rapat di wajah tanpa kebocoran udara ruangan.',
        clinicalPearls: 'Pulse oximeter jari (SpO2) TIDAK BISA membedakan oksihemoglobin dan karboksihemoglobin (membaca 99–100% palsu!).'
      },
      {
        route: 'Inhalasi',
        protocolName: 'Terapi Oksigen Hiperbarik (HBO Chamber)',
        stage: 'Loading / Inisial',
        dosageText: 'Tekanan 2.5–3.0 ATA selama 90–120 menit di ruang hiperbarik.',
        preparationInstructions: 'Indikasi HBO: (1) Riwayat pingsan/koma/sinkop, (2) Defisit neurologis persisten, (3) Iskemia jantung / EKG abnormal, (4) Kadar COHb > 25% (atau > 15% pada ibu hamil), (5) Asidosis metabolik berat.'
      }
    ],
    supportiveCare: [
      'Evakuasi korban segera ke udara bebas segar dengan perlindungan penolong.',
      'EKG 12 sadapan dan enzim Troponin untuk deteksi infark miokard akibat hipoksia.'
    ],
    monitoringParameters: [
      'Kadar Karboksihemoglobin (COHb) darah arteri/vena via Co-Oximeter serial',
      'Skrining Sindrom Sekuel Neurologis Tertunda (Delayed Neurological Sequelae / DNS): Pantau penurunan memori, parkinsonisme, atau perubahan kepribadian yang dapat muncul 2–40 hari pasca pemulihan.'
    ],
    contraindicatedOrHazardous: [
      'Jangan mempercayai pembacaan pulse oximetry jari standar (SpO2) karena tidak mendeteksi hipoksia CO!',
      'Pada ibu hamil, kadar COHb janin lebih tinggi dari ibu; lakukan terapi oksigen lebih lama minimal 2–3 kali lipat.'
    ],
    evidenceSource: 'Undersea and Hyperbaric Medical Society (UHMS) & CDC Guidelines on Carbon Monoxide'
  },

  // 18. ANTIDEPRESAN TRISIKLIK (TCA)
  {
    id: 'tca',
    name: 'Antidepresan Trisiklik / TCA (Amitriptilin, Klomipramin, Imipramin)',
    aliases: ['Amitriptyline', 'Anafranil', 'Tofranil'],
    category: 'sedative',
    categoryLabel: 'Sedatif & Psikotropika',
    commonSources: ['Obat neuropati diabetik, depresi, profilaksis migrain, insomnia kronis'],
    toxicThreshold: 'Dosis > 10 mg/kgBB berpotensi mematikan; dosis > 1 g pada dewasa mengancam henti jantung mendadak.',
    mechanismOfToxicity:
      'Blokade kanal natrium cepat miokardium (fase 0 depolarisasi) memicu perlambatan konduksi jantung intraventrikular ekstrim (pelebaran QRS). Selain itu, blokade reseptor alfa-1 (hipotensi berat), reseptor muskarinik (sindrom antikolinergik), dan penghambatan ambilan kembali norepinefrin/serotonin memicu kejang dan aritmia ventrikel ganas (Torsades de Pointes / VT).',
    toxidromeSigns: [
      'Trias Toksisitas TCA: (1) Koma depresi SSP, (2) Kejang mendadak, (3) Disritmia jantung dengan pelebaran QRS',
      'Tanda Antikolinergik: Midriasis lebar, kulit kering memerah panas, takikardia sinus, retensi urin, bising usus hilang',
      'EKG Khas Patognomonik: Durasi QRS melebar > 100 ms (risiko kejang 34%) atau > 160 ms (risiko aritmia ventrikel ganas 50%), gelombang R terminal di sadapan aVR > 3 mm (atau rasio R/S di aVR > 0.7).'
    ],
    severityLevel: 'Kritis / Mengancam Nyawa',
    primaryAntidote: 'Natrium Bikarbonat (Meylon 8.4% / Sodium Bicarbonate IV)',
    antidoteMechanism:
      'Bekerja ganda: (1) Menyediakan muatan ion natrium (Na+) konsentrasi tinggi untuk mendesak blokade kanal natrium miokardium, dan (2) Mengalkalinisasi pH serum (meningkatkan fraksi obat yang tidak terionisasi sehingga terlepas dari reseptor kanal natrium).',
    dosageRegimens: [
      {
        route: 'IV',
        protocolName: 'Alkalinisasi Serum Natrium Bikarbonat',
        stage: 'Loading / Inisial',
        dosageText: '1–2 mEq/kgBB (larutan 8.4% sekitar 50–100 mL) IV bolus cepat selama 2–3 menit.\nIndikasi: QRS > 100 ms, hipotensi refrakter, atau aritmia ventrikel.',
        preparationInstructions: 'Dapat diulang tiap 3–5 menit hingga kompleks QRS menyempit (< 100 ms) dan hemodinamik stabil.',
        clinicalPearls: 'Target pH serum darah: 7.45–7.55. Jangan biarkan pH melebihi 7.55!'
      },
      {
        route: 'IV',
        protocolName: 'Infus Kontinu Bikarbonat',
        stage: 'Pemeliharaan / Infus Kontinu',
        dosageText: 'Campurkan 100–150 mEq Natrium Bikarbonat ke dalam 1.000 mL D5W, diinfuskan dengan kecepatan 150–250 mL/jam.',
        preparationInstructions: 'Titrasi untuk mempertahankan pH serum 7.45–7.55 dan QRS sempit.'
      }
    ],
    supportiveCare: [
      'Atasi kejang dengan Diazepam 5–10 mg IV (kejang memicu asidosis yang memperparah blokade kanal natrium secara eksponensial!).',
      'Arang aktif 50 g bila jalan napas terlindungi dalam < 2 jam pasca konsumsi.',
      'Norepinefrin untuk syok hipotensi yang tidak berespons terhadap natrium bikarbonat.'
    ],
    monitoringParameters: [
      'Monitor EKG kontinu: Lebar kompleks QRS dan tinggi gelombang R di aVR serial',
      'Analisa Gas Darah serial (pantau pH ketat, target 7.45–7.55)',
      'Kalium Serum (alkalinisasi memicu hipokalemia ke dalam sel, pantau K+)'
    ],
    contraindicatedOrHazardous: [
      'KONTRAINDIKASI MUTLAK: FLUMAZENIL (memicu kejang refrakter mematikan) dan Antiaritmia Golongan 1A / 1C (Prokainamid, Disopiramid, Flekainid) karena memperparah blokade kanal natrium!',
      'Hindari hiperventilasi mekanik agresif berlebihan bila sudah menggunakan natrium bikarbonat.'
    ],
    evidenceSource: 'AACT Consensus Statement on the Use of Sodium Bicarbonate in TCA Poisoning'
  },

  // 19. METOTREKSAT (SITOSTATIKA DOSIS TINGGI)
  {
    id: 'methotrexate',
    name: 'Metotreksat (Methotrexate / MTX Dosis Tinggi atau Overdosis Aksidental)',
    aliases: ['MTX', 'Ebetrexat', 'Emthexate', 'Kemoterapi leukemia / osteosarkoma / psoriasis'],
    category: 'antidote-cytotoxic',
    categoryLabel: 'Sitostatika & Onkologi',
    commonSources: ['Protokol kemoterapi onkologi dosis tinggi, kesalahan dosis oral harian yang seharusnya mingguan'],
    toxicThreshold: 'Kadar MTX serum > 5–10 umol/L pada 24 jam atau > 0.1 umol/L pada 72 jam; atau dosis oral harian > 15–20 mg/hari berturut-turut.',
    mechanismOfToxicity:
      'Inhibisi kuat enzim Dihidrofolat Reduktase (DHFR), menghentikan pembentukan tetrahidrofolat yang esensial untuk sintesis purin dan pirimidin (DNA/RNA). Membunuh sel yang membelah cepat: sumsum tulang (mielosupresi pansitopenia), mukosa saluran cerna (mukositis berat), dan presipitasi kristal MTX di tubulus ginjal memicu gagal ginjal akut.',
    toxidromeSigns: [
      'Mielosupresi berat: Neutropenia demam (sepsis neutropenik), trombositopenia perdarahan, anemia berat',
      'Mukositis oral dan saluran cerna: Ulserasi lidah/mulut hebat, diare berdarah',
      'Gagal ginjal akut nefropati kristal (peningkatan kreatinin serum)',
      'Hepatotoksisitas peningkatan transaminase hepar.'
    ],
    severityLevel: 'Kritis / Mengancam Nyawa',
    primaryAntidote: 'Leukovorin Kalsium (Folinic Acid / Calcium Leucovorin) & Glukarpidase',
    antidoteMechanism:
      'Leukovorin adalah bentuk tereduksi asam folat (5-formil-tetrahidrofolat) yang mem-bypass enzim DHFR secara langsung, menyelamatkan sel-sel normal dari kematian replikasi (leucovorin rescue). Glukarpidase: Enzim pemecah MTX menjadi metabolit inaktif DAMPA pada pasien gagal ginjal.',
    dosageRegimens: [
      {
        route: 'IV',
        protocolName: 'Leukovorin Rescue Protokol Dosis Tinggi',
        stage: 'Loading / Inisial',
        dosageText: 'Mulai 15–50 mg/m2 IV atau oral tiap 6 jam, dititrasi naik hingga 100–1.000 mg/m2 tiap 3–6 jam tergantung kurva kadar MTX serum serial.',
        preparationInstructions: 'Harus dimulai dalam kurun < 24–42 jam pasca MTX untuk mencegah kerusakan sumsum tulang permanen.',
        clinicalPearls: 'Lanjutkan hingga kadar MTX serum < 0.05–0.1 umol/L.'
      },
      {
        route: 'IV',
        protocolName: 'Glukarpidase (Voraxaze - Kasus Gagal Ginjal)',
        stage: 'Loading / Inisial',
        dosageText: '50 Unit/kgBB IV bolus tunggal selama 5 menit.',
        preparationInstructions: 'Menurunkan kadar MTX sirkulasi > 95% dalam 15 menit pada pasien yang mengalami penurunan klirens ginjal.'
      }
    ],
    supportiveCare: [
      'Hidrasi intravena masif (2.5–3.0 L/m2/hari) dengan penambahan Natrium Bikarbonat untuk alkalinisasi urin (target pH urin > 7.0–7.5 guna melarutkan kristal MTX).',
      'G-CSF (Filgrastim) bila terjadi neutropenia berat.',
      'Transfusi trombosit bila terjadi trombositopenia perdarahan.'
    ],
    monitoringParameters: [
      'Kadar MTX Serum serial pada jam ke-24, 48, dan 72',
      'pH urin tiap berkemih (wajib dipertahankan > 7.0)',
      'Serum Kreatinin serial dan Darah Lengkap (DPL / CBC)'
    ],
    contraindicatedOrHazardous: [
      'JANGAN berikan Asam Folat biasa (Folic Acid) sebagai pengganti Leukovorin, karena asam folat butuh enzim DHFR yang sedang diblokir penuh oleh MTX!',
      'Hindari OAINS, Penisilin, dan Proton Pump Inhibitor (PPI) karena menghambat sekresi tubulus ginjal MTX.'
    ],
    evidenceSource: 'ASCO Guidelines on High-Dose Methotrexate and Leucovorin Rescue Management'
  },

  // 20. SIKLOFOSFAMID & IFOSFAMID
  {
    id: 'cyclophosphamide',
    name: 'Siklofosfamid & Ifosfamid (Alkylating Agent Urotoxicity)',
    aliases: ['Endoxan', 'Holoxan', 'Cytoxan'],
    category: 'antidote-cytotoxic',
    categoryLabel: 'Sitostatika & Onkologi',
    commonSources: ['Kemoterapi keganasan hematologi, tumor padat, terapi imunosupresif lupus nefritis berat'],
    toxicThreshold: 'Dosis Siklofosfamid > 1 g/m2 atau Ifosfamid dosis apapun.',
    mechanismOfToxicity:
      'Metabolit hepatik akrolein (Acrolein) diekskresi ke dalam kandung kemih dan berikatan kovalen dengan protein dinding uroepitelium, memicu inflamasi nekrotik hemoragik parah (Sistitis Hemoragik / Hemorrhagic Cystitis) yang mengancam perforasi dan syok hipovolemik.',
    toxidromeSigns: [
      'Hematuria makroskopis masif (kencing darah merah pekat dengan bekuan darah)',
      'Disuria hebat, nyeri suprapubik tajam',
      'Spasme kandung kemih dan retensi bekuan darah (clot retention)',
      'Toksisitas SSP khas Ifosfamid: Ensefalopati, halusinasi, konfusi, koma.'
    ],
    severityLevel: 'Tinggi',
    primaryAntidote: 'Mesna (Sodium 2-Mercaptoethane Sulfonate)',
    secondaryAntidote: 'Metilen Biru IV (Khusus Ensefalopati Ifosfamid)',
    antidoteMechanism:
      'Mesna mengandung gugus tiol (-SH) bebas yang berikatan langsung dengan gugus karbonil elektrofilik dari akrolein di lumen kandung kemih membentuk aduk nontoksik stabil yang tidak mengiritasi mukosa.',
    dosageRegimens: [
      {
        route: 'IV',
        protocolName: 'Protokol Tiga Dosis Standar (Fraksionasi 60%)',
        stage: 'Loading / Inisial',
        dosageText: 'Dosis total Mesna = 60% dari dosis harian Siklofosfamid/Ifosfamid, dibagi menjadi 3 dosis suntikan IV bolus:\n- Jam 0 (bersamaan kemoterapi): 20% dosis\n- Jam ke-4 pasca kemoterapi: 20% dosis\n- Jam ke-8 pasca kemoterapi: 20% dosis.',
        preparationInstructions: 'Dapat juga diberikan sebagai infus kontinu 100% dari dosis ifosfamid selama 24 jam.',
        clinicalPearls: 'Waktu paruh Mesna sangat singkat (1.5 jam), sehingga dosis pasca-kemoterapi WAJIB diberikan tepat waktu!'
      },
      {
        route: 'IV',
        protocolName: 'Ensefalopati Neurotoksik Ifosfamid',
        stage: 'Loading / Inisial',
        dosageText: 'Metilen Biru 50 mg IV pelan tiap 4–6 jam hingga gejala neurologis membaik.',
        preparationInstructions: 'Metilen biru memulihkan rantai transpor elektron mitokondria yang terganggu oleh kloroasetaldehida.'
      }
    ],
    supportiveCare: [
      'Hiperhidrasi intravena minimal 3 L/m2/hari untuk memastikan diuresis deras (> 100 mL/m2/jam).',
      'Irigasi kandung kemih kontinu dengan three-way catheter bila terbentuk bekuan darah.'
    ],
    monitoringParameters: [
      'Urinalisis dipstick & makroskopis serial (pantau eritrosit urin)',
      'Status kesadaran neurologis pada penggunaan Ifosfamid'
    ],
    contraindicatedOrHazardous: [
      'Jangan menunda pemberian Mesna melebihi 1 jam pasca kemoterapi karena akrolein telah mulai berkontak dengan uroepitelium.'
    ],
    evidenceSource: 'ESMO Clinical Practice Guidelines for Cytotoxic Urotoxicity Prevention'
  },

  // 21. LOGAM BERAT TIMBAL & MERKURI
  {
    id: 'heavy-metals',
    name: 'Logam Berat (Timbal / Pb & Merkuri / Hg)',
    aliases: ['Lead poisoning', 'Mercury poisoning', 'Plumbisme', 'Keracunan timbal baterai/cat', 'Merkuri kosmetik ilegal / tambang'],
    category: 'heavy-metal',
    categoryLabel: 'Logam Berat & Mineral',
    commonSources: ['Peleburan aki bekas, cat lama bertimbal, kosmetik pemutih ilegal mengandung merkuri, uap tambang emas rakyat'],
    toxicThreshold: 'Timbal: Kadar darah (BLL) > 5 mcg/dL pada anak sudah berbahaya kognitif; > 45 mcg/dL butuh khelasi segera; > 70 mcg/dL kritis ensefalopati. Merkuri darah > 10 mcg/L.',
    mechanismOfToxicity:
      'Pengikatan kovalen dengan gugus sulfhidril (-SH) enzim dan protein seluler. Pada timbal: menghambat enzim ALA dehidratase dan ferokelatase (anemia sideroblastik mikrositik) serta mengganggu sawar darah otak. Pada merkuri: kerusakan tubulus ginjal, atrofi korteks serebral dan serebelum.',
    toxidromeSigns: [
      'Timbal Akut/Kronis: Kolik abdomen timbal (lead colic) hebat, konstipasi, neuropati perifer motorik "wrist-drop" / "foot-drop", ensefalopati timbal (kejang, koma), garis kebiruan pada gusi (Burton\'s line), penurunan IQ permanen pada anak',
      'Merkuri Inhalasi/Oral: Stomatitis, hipersalivasi, tremor intensi, eretisme (perubahan kepribadian labil mudah marah), ataksia, sindrom nefrotik gagal ginjal.'
    ],
    severityLevel: 'Tinggi',
    primaryAntidote: 'Succimer (DMSA) ATAU Dimerkaprol (BAL) + CaNa2-EDTA',
    antidoteMechanism:
      'Agen pengkhelat (chelating agent) yang menyediakan gugus donor ligan sulfhidril untuk mengikat ion logam berat membentuk cincin khelat stabil yang larut air dan diekskresikan melalui urin dan empedu.',
    dosageRegimens: [
      {
        route: 'Oral',
        protocolName: 'Succimer / DMSA (Pilihan Utama Non-Ensefalopati)',
        stage: 'Loading / Inisial',
        dosageText: '10 mg/kgBB (atau 350 mg/m2) oral tiap 8 jam selama 5 hari, dilanjutkan 10 mg/kgBB tiap 12 jam selama 14 hari berikutnya (Total siklus 19 hari).',
        preparationInstructions: 'Kapsul dapat dibuka dan dicampurkan ke makanan lunak bila pasien anak sulit menelan.',
        clinicalPearls: 'Tidak memicu redistribusi timbal ke otak seperti halnya EDTA tunggal.'
      },
      {
        route: 'IM',
        protocolName: 'Dimerkaprol (BAL) + CaNa2-EDTA (Ensefalopati Timbal Berat BLL > 70 mcg/dL)',
        stage: 'Loading / Inisial',
        dosageText: 'Langkah 1: Dimerkaprol (BAL) 75 mg/m2 IM dalam minyak kacang tiap 4 jam.\nLangkah 2: CaNa2-EDTA 1.000 mg/m2/hari IV infus kontinu DIMULAI 4 JAM SETELAH dosis pertama BAL.',
        preparationInstructions: 'BAL WAJIB DIBERIKAN SEBELUM EDTA untuk mencegah pergeseran timbal dari tulang ke otak!'
      }
    ],
    supportiveCare: [
      'Identifikasi dan hentikan total sumber pajanan lingkungan/pekerjaan.',
      'Koreksi defisiensi besi dan kalsium (karena defisiensi besi meningkatkan absorpsi timbal di usus).'
    ],
    monitoringParameters: [
      'Kadar Timbal Darah (Blood Lead Level / BLL) serial',
      'Darah Lengkap & Gambaran Darah Tepi (Basophilic stippling pada eritrosit khas timbal)',
      'Fungsi ginjal dan elektrolit serial selama terapi khelasi'
    ],
    contraindicatedOrHazardous: [
      'JANGAN berikan CaNa2-EDTA tunggal pada ensefalopati timbal tanpa BAL karena memicu perburukan edema otak!',
      'Hati-hati alergi kacang pada pemberian Dimerkaprol (BAL) karena pelarutnya berbasis minyak kacang (peanut oil).'
    ],
    evidenceSource: 'CDC Guidelines for the Management of Lead Poisoning & WHO Chelation Protocols'
  },

  // 22. BESI (IRON OVERDOSE)
  {
    id: 'iron',
    name: 'Besi / Iron (Tablet Sulfas Ferosus / Suplemen Tambah Darah)',
    aliases: ['Sulfas Ferosus', 'Ferrous sulfate', 'Ferrous fumarate', 'Tablet Fe Ibu Hamil / TTD'],
    category: 'heavy-metal',
    categoryLabel: 'Logam Berat & Mineral',
    commonSources: ['Program tablet tambah darah ibu hamil tertelan anak, overdosis suplemen multivitamin'],
    toxicThreshold: 'Besi elemental: 20–60 mg/kgBB memicu toksisitas sedang-berat; > 60 mg/kgBB memicu syok dan kematian.',
    mechanismOfToxicity:
      'Kelebihan besi bebas melebihi kapasitas pengikatan transferin jenuh. Ion besi bebas (Fe2+) mengkatalisis reaksi Fenton menghasilkan radikal hidroksil bebas masif yang mengikis mukosa lambung (nekrosis mukosa korosif), melumpuhkan mitokondria hepar (nekrosis hati), dan merusak pembuluh darah perifer (syok hipovolemik & kardiogenik).',
    toxidromeSigns: [
      'Fase 1 (0–6 jam): Nyeri perut hebat, muntah darah (hematemesis), diare berdarah masif, syok hipovolemik',
      'Fase 2 (6–24 jam): "Periode stabil semu" (pasien tampak membaik sementara padahal kerusakan seluler organ sedang berlangsung)',
      'Fase 3 (12–48 jam): Syok refrakter kardiogenik, asidosis metabolik laktat berat, nekrosis hati akut, koagulopati',
      'Fase 4 (2–4 hari): Gagal hati akut fulminan',
      'Fase 5 (2–6 minggu pasca sembuh): Obstruksi saluran cerna akibat jaringan parut striktur pilorus / antrum lambung.'
    ],
    severityLevel: 'Kritis / Mengancam Nyawa',
    primaryAntidote: 'Deferoksamin Mesylate (Desferal / Deferoxamine)',
    antidoteMechanism:
      'Agen pengkhelat spesifik besi yang mengikat ion ferri bebas dan feritin membentuk kompleks Ferrioksamin yang stabil, larut air, nontoksik, dan diekskresi via ginjal (mengubah warna urin menjadi merah jambu / "vin rosé" urine).',
    dosageRegimens: [
      {
        route: 'IV',
        protocolName: 'Infus Kontinu Deferoksamin',
        stage: 'Loading / Inisial',
        dosageText: 'Mulai 15 mg/kgBB/jam IV infus kontinu. Dapat dititrasi hingga maksimal 40 mg/kg/jam pada kasus syok berat.',
        preparationInstructions: 'Dosis harian maksimal umumnya 6 gram (atau hingga 16 gram pada kasus ekstrim).',
        clinicalPearls: 'Lanjutkan hingga warna urin kembali normal dari "vin rosé" dan kadar besi serum < 350 mcg/dL.'
      }
    ],
    supportiveCare: [
      'Resusitasi cairan kristaloid agresif untuk mengatasi syok hipovolemik.',
      'Whole Bowel Irrigation (WBI) dengan larutan PEG bila foto rontgen abdomen (BOF) menunjukkan banyak tablet besi radiopak di usus.',
      'Arang aktif TIDAK EFEKTIF karena tidak dapat mengikat ion besi!'
    ],
    monitoringParameters: [
      'Kadar Besi Serum puncak pada 2–4 jam pasca konsumsi',
      'Foto Polos Abdomen (BOF/Abdominal X-Ray) untuk memantau evakuasi tablet radiopak',
      'Warna urin (perhatikan perubahan warna vin rose)',
      'Analisa Gas Darah serial (asidosis laktat)'
    ],
    contraindicatedOrHazardous: [
      'JANGAN berikan Deferoksamin IV terlalu cepat secara bolus karena memicu pelepasan histamin masif, hipotensi berat, dan syok anafilaktoid!',
      'Penggunaan Deferoksamin > 24–48 jam meningkatkan risiko toksisitas paru (Acute Respiratory Distress Syndrome / ARDS) dan infeksi Yersinia enterocolitica.'
    ],
    evidenceSource: 'American Academy of Clinical Toxicology (AACT) Guidelines on Iron Poisoning'
  },

  // 23. BISA ULAR BERBISA INDONESIA
  {
    id: 'snakebite',
    name: 'Gigitan Ular Berbisa Indonesia (Viperidae & Elapidae)',
    aliases: ['Ular Tanah / Calloselasma', 'Ular Kobra Jawa / Naja sputatrix', 'Ular Weling / Bungarus candidus', 'Ular Welang / Bungarus fasciatus', 'Ular Bangkai Laut / Trimeresurus albolabris'],
    category: 'bites-stings',
    categoryLabel: 'Bisa Ular & Sengatan Alami',
    commonSources: ['Gigitan ular sawah, perkebunan karet/sawit, hutan, pemukiman pedesaan'],
    toxicThreshold: 'Bahkan gigitan kering (dry bite) 20% dapat berubah menjadi envenomasi berat bila kelenjar bisa terinjeksi penuh.',
    mechanismOfToxicity:
      'Bisa Viperidae (Ular Tanah, Trimeresurus): Toksin hematotoksik (hemoragin, enzim prokoagulan/antikoagulan) melumpuhkan fibrinogen memicu sindrom VICC (Venom-Induced Consumption Coagulopathy) dan nekrosis jaringan sitotoksik lokal masif. Bisa Elapidae (Kobra, Weling, Welang): Neurotoksin post-sinaps dan pre-sinaps memblokir reseptor asetilkolin nikotinik di motor end-plate memicu paralisis otot pernapasan.',
    toxidromeSigns: [
      'Envenomasi Hematotoksik (Ular Tanah): Edema dan pembengkakan menjalar cepat melampaui sendi, lepuh bula berdarah, ekimosis, perdarahan gusi spontan, darah tidak membeku pada tes 20-WBCT (Whole Blood Clotting Test), nekrosis jaringan kompartemen',
      'Envenomasi Neurotoksik (Weling / Kobra): Ptosis bilateral (kelopak mata turun sulit dibuka - tanda awal terpenting!), disfagia, oftalmoplegia, bicara pelo, kelemahan ekstremitas, paralisis diafragma dan henti napas (apnea) dalam kurun 1–6 jam.'
    ],
    severityLevel: 'Kritis / Mengancam Nyawa',
    primaryAntidote: 'Serum Anti-Bisa Ular (SABU) Polivalen Bio Farma Injeksi',
    secondaryAntidote: 'Neostigmin + Atropin (Uji Tensilon Khusus Kobra)',
    antidoteMechanism:
      'Imunoglobulin fraksi Fab/F(ab\')2 kuda yang telah dihiperimunisasi terhadap bisa ular tanah (Calloselasma rhodostoma), weling (Bungarus fasciatus), dan kobra (Naja sputatrix); menetralisir racun bisa yang masih beredar bebas di sirkulasi.',
    dosageRegimens: [
      {
        route: 'IV',
        protocolName: 'SABU Polivalen Dosis Inisial (Derajat Envenomasi Sedang-Berat)',
        stage: 'Loading / Inisial',
        dosageText: 'Dewasa & Anak Dosis Sama (karena jumlah bisa yang disuntikkan sama!): 2–4 vial (20–40 mL) dilarutkan dalam 200–500 mL NaCl 0.9% diinfuskan selama 60 menit.',
        preparationInstructions: 'Mulai dengan kecepatan lambat (10–15 tetes/menit) selama 10 menit pertama sambil mengawasi anafilaksis. Bila aman, percepat.',
        clinicalPearls: 'Dosis dapat diulang 2–4 vial tiap 4–6 jam bila tes 20-WBCT darah masih gagal membeku atau paralisis menjalar.'
      },
      {
        route: 'IV',
        protocolName: 'Uji Neostigmin (Khusus Gigitan Kobra Neurotoksik Post-Sinaptik)',
        stage: 'Loading / Inisial',
        dosageText: 'Premedikasi: Atropin 0.6 mg IV, dilanjutkan Neostigmin 0.5–2.0 mg IV pelan.',
        preparationInstructions: 'Bila ada perbaikan ptosis nyata dalam 15–30 menit, lanjutkan Neostigmin 0.5 mg tiap 2–4 jam (catatan: tidak efektif untuk Weling presinaptik).'
      }
    ],
    supportiveCare: [
      'IMMOBILISASI TOTAL ANGGOTA GERAK DENGAN BIDAI / SPALK: DILARANG KERAS MEMOTONG LUKA, MENGHISAP DARAH, MENGIKAT TOURNIQUET KETAT, ATAU MEMBAKAR LUKA!',
      'Uji Pembekuan Darah Sederhana 20-WBCT (20-Minute Whole Blood Clotting Test) di tabung kaca tiap 6 jam.',
      'Siapkan Adrenalin (Epinefrin) 1:1000 IM di samping ranjang untuk antisipasi anafilaksis akibat serum kuda.',
      'Ventilasi mekanik intubasi dini pada gagal napas paralisis neurotoksik.'
    ],
    monitoringParameters: [
      'Tes 20-WBCT serial (darah dikatakan encer/gagal membeku jika tabung dimiringkan setelah 20 menit darah masih cair)',
      'Lingkar pembengkakan ekstremitas dengan spidol per jam',
      'Laju napas, kapasitas vital paru, dan kemampuan menelan/buka mata (evaluasi paralisis saraf kranial)'
    ],
    contraindicatedOrHazardous: [
      'DILARANG melakukan insisi/sayatan silang atau penggunaan torniket bebat mati (tourniquet) karena memicu nekrosis iskemik gangren dan amputasi!',
      'Jangan memberikan SABU intramuskular lokal di sekitar luka gigitan (wajib IV infus sistemik).'
    ],
    evidenceSource: 'WHO Guidelines for the Management of Snakebites in Southeast Asia & Standar Penanganan Gigitan Ular Kemenkes RI'
  },

  // 24. SENGATAN LEBAH & ANAFILAKSIS DARURAT
  {
    id: 'anaphylaxis-stings',
    name: 'Sengatan Lebah / Hymenoptera & Reaksi Anafilaksis Darurat',
    aliases: ['Tawon vespa affinis', 'Sengatan lebah madu', 'Syok anafilaksis obat'],
    category: 'bites-stings',
    categoryLabel: 'Bisa Ular & Sengatan Alami',
    commonSources: ['Sengatan lebah hutan, tawon vespa ndas (Vespa affinis), reaksi alergi obat IV mendadak'],
    toxicThreshold: 'Reaksi anafilaksis bersifat idiosinkratik imunologis IgE (bahkan 1 sengatan dapat mematikan); sengatan multipel > 20–30 tawon vespa memicu toksisitas racun langsung (rhabdomyolisis dan gagal ginjal).',
    mechanismOfToxicity:
      'Degranulasi masif sel mast dan basofil memicu pelepasan histamin, leukotrien, dan triptase dalam jumlah masif. Mengakibatkan vasodilatasi perifer luas, kebocoran kapiler (syok distributif hipovolemik), edema laring (asfiksia obstruksi jalan napas), dan bronkospasme berat.',
    toxidromeSigns: [
      'Distres Pernapasan Akut: Stridor laring, suara serak mendadak, mengi bronkospasme hebat, rasa tercekik di leher',
      'Kolaps Kardiovaskular: Hipotensi mendadak, syok perfusi dingin, takikardia, henti jantung',
      'Mukokutan: Urtikaria menyeluruh (biduran merah bentol gatal), angioedema bengkak bibir/wajah/kelopak mata',
      'Sengatan Tawon Masif: Urin berwarna gelap kemerahan seperti teh (mioglobinuria rhabdomyolisis) dan gagal ginjal akut anuria.'
    ],
    severityLevel: 'Kritis / Mengancam Nyawa',
    primaryAntidote: 'Epinefrin (Adrenalin 1:1000 / 1 mg/mL) Injeksi IM',
    secondaryAntidote: 'Difenhidramin IV + Metilprednisolon IV',
    antidoteMechanism:
      'Agonis adrenergik kuat: Efek alfa-1 membalikkan vasodilatasi perifer dan meredakan edema laring; efek beta-1 meningkatkan kontraktilitas jantung; efek beta-2 memicu bronkodilatasi kuat serta menghentikan pelepasan mediator inflamasi dari sel mast.',
    dosageRegimens: [
      {
        route: 'IM',
        protocolName: 'Epinefrin IM Paha Anterolateral (Baku Emas)',
        stage: 'Loading / Inisial',
        dosageText: 'Dewasa: 0.3–0.5 mg (0.3–0.5 mL larutan 1:1000) IM di paha bagian luar (vastus lateralis).\nAnak: 0.01 mg/kgBB (maksimal 0.3 mg) IM.',
        preparationInstructions: 'Dapat diulang setiap 5–15 menit jika respons hemodinamik dan pernapasan belum adekuat.',
        clinicalPearls: 'Pemberian IM di paha menghasilkan puncak kadar plasma jauh lebih cepat dibandingkan suntikan di lengan deltoid!'
      },
      {
        route: 'IV',
        protocolName: 'Terapi Adjuvan Pasca Epinefrin',
        stage: 'Pemeliharaan / Infus Kontinu',
        dosageText: 'Difenhidramin 25–50 mg IV + Metilprednisolon 1–2 mg/kgBB IV (mencegah reaksi anafilaksis bifasik tertunda).',
        preparationInstructions: 'Antihistamin dan steroid HANYA obat lini kedua, BUKAN pengganti Epinefrin!'
      }
    ],
    supportiveCare: [
      'Baringkan pasien dengan posisi kaki terangkat (posisi Trendelenburg) untuk mempertahankan aliran darah ke otak.',
      'Resusitasi cairan kristaloid cepat (NaCl 0.9% 1–2 Liter) untuk mengatasi kebocoran kapiler masif.',
      'Oksigen 100% via NRM dan siapkan intubasi endotrakeal atau krikotiroidotomi darurat bila edema laring memburuk cepat.'
    ],
    monitoringParameters: [
      'Tekanan darah, laju napas, dan saturasi SpO2 kontinu',
      'Observasi ketat minimal 6–8 jam pasca resolusi gejala untuk mengantisipasi Reaksi Anafilaksis Bifasik (reaksi kambuh tanpa paparan ulang).'
    ],
    contraindicatedOrHazardous: [
      'JANGAN PERNAH menunda Epinefrin untuk memberikan antihistamin atau deksametason terlebih dahulu (antihistamin dan steroid butuh waktu jam untuk bekerja, pasien dapat meninggal dalam hitungan menit akibat asfiksia!).',
      'Jangan mendudukkan atau mendirikan pasien yang sedang syok anafilaksis mendadak karena memicu "empty ventricle syndrome" dan henti jantung fatal.'
    ],
    evidenceSource: 'World Allergy Organization (WAO) Anaphylaxis Guidelines & Pedoman Tatalaksana Syok Anafilaksis Kemenkes RI'
  },
  // 25. HERBISIDA PARAQUAT (GRAMOXONE)
  {
    id: 'paraquat',
    name: 'Herbisida Paraquat (Gramoxone / Dipiridilium)',
    aliases: ['Gramoxone', 'Noxone', 'Paracol', 'Herbisida kontak dipiridil', 'Paraquat diklorida'],
    category: 'pesticide',
    categoryLabel: 'Insektisida & Pestisida',
    commonSources: ['Herbisida pertanian pembasmi gulma cair berwarna biru-hijau berbau menyengat'],
    toxicThreshold: 'Letalitas sangat tinggi: Konsumsi > 20–40 mg/kgBB (hanya ~1 tegukan / 10–20 mL konsentrat 20%) dapat berakibat fatal akibat fibrosis paru progresif.',
    mechanismOfToxicity:
      'Mengalami reaksi redoks siklik intraseluler di dalam pneumosit tipe I dan II paru, menghasilkan pembentukan anion superoksida, hidrogen peroksida, dan radikal hidroksil masif. Radikal bebas ini memicu peroksidasi lipid membran sel alveolar dan fibrosis paru ireversibel yang mematikan.',
    toxidromeSigns: [
      'Fase 1 (0–24 jam): Luka bakar korosif pada mulut, lidah (paraquat tongue), esofagus, muntah hebat, nyeri retrosternal.',
      'Fase 2 (24–72 jam): Gagal ginjal akut (nekrosis tubular akut), ikterus toksik akibat nekrosis hepar, ulserasi saluran cerna luas.',
      'Fase 3 (hari ke-3 s/d minggu ke-3): Fibrosis pulmonal progresif masif, dispnea berat, hipoksemia refrakter mematikan (mati lemas / asfiksia seluler pulmonal).'
    ],
    severityLevel: 'Kritis / Mengancam Nyawa',
    primaryAntidote: "Tanah Fuller (Fuller's Earth) / Arang Aktif & Imunosupresi Agresif (Metilprednisolon + Siklofosfamid)",
    secondaryAntidote: 'N-Asetilsistein (NAC) IV & Hemoperfusi Arang (Charcoal Hemoperfusion)',
    antidoteMechanism:
      'Tanah Fuller / Arang Aktif mengikat kuat paraquat di usus untuk mencegah penyerapan. Terapi imunosupresi puls dosis tinggi bertujuan meredam inflamasi alveolitis paru sebelum berubah menjadi fibrosis ireversibel.',
    dosageRegimens: [
      {
        route: 'Oral',
        protocolName: 'Dekontaminasi Saluran Cerna Segera',
        stage: 'Loading / Inisial',
        dosageText: "Tanah Fuller suspensi 15% (100–150 g dalam 1 Liter air) ATAU Arang Aktif 1–2 g/kgBB per oral/NGT secepatnya (< 2 jam).",
        preparationInstructions: 'Dapat diulang setiap 4 jam bersama pencahar osmotik (Manitol/Sorbitol) hingga feses berwarna arang/tanah.'
      },
      {
        route: 'IV',
        protocolName: 'Protokol Imunosupresi Puls Pulmonal',
        stage: 'Pemeliharaan / Infus Kontinu',
        dosageText: 'Metilprednisolon 1 gram/hari IV selama 3 hari berturut-turut + Siklofosfamid 15 mg/kgBB/hari IV selama 2 hari.',
        preparationInstructions: 'Diberikan pada intoksikasi sedang-berat dengan bukti paraquat urin/plasma positif.'
      }
    ],
    supportiveCare: [
      'KONTRAINDIKASI MUTLAK TERAPI OKSIGEN KONSENTRASI TINGGI! Oksigen hanya boleh diberikan jika PaO2 < 40 mmHg atau SpO2 < 80% dengan target saturasi minimal saja (~85%), karena fraksi oksigen tinggi (FiO2 > 21%) secara dramatis mempercepat radikal superoksida dan kerusakan paru.',
      'Hemoperfusi arang aktif dalam kurun waktu 4–6 jam pertama bila fasilitas tersedia.',
      'Analgesik opioid kuat (Morfin IV) untuk mengatasi nyeri luka bakar korosif esofagus.'
    ],
    monitoringParameters: [
      'Tes Paraquat Urin (Urine Dithionite Test: penambahan natrium ditionit alkalis menghasilkan warna biru kuat jika positif)',
      'Analisis gas darah (PaO2), foto toraks serial (pantau infiltrat dan fibrosis paru)',
      'Ureum, kreatinin, elektrolit, SGOT/SGPT, dan bilirubin setiap hari.'
    ],
    contraindicatedOrHazardous: [
      'JANGAN BERIKAN OKSIGEN SUPLEMENTAL bila pasien belum hipoksemia berat (SpO2 > 85%). Oksigen adalah RACUN yang mempercepat kematian pada keracunan paraquat!',
      'Dilarang melakukan induksi muntah karena efek korosif herbisida pada saluran cerna atas.'
    ],
    evidenceSource: 'International Programme on Chemical Safety (IPCS/WHO) Paraquat Antidote Guidelines & BPOM Sentra Informasi Keracunan'
  },
  // 26. SALISILAT (ASPIRIN / MINYAK GANDAPURA)
  {
    id: 'salisilat',
    name: 'Salisilat (Aspirin / Minyak Gandapura / Asam Salisilat)',
    aliases: ['Aspirin', 'Aspilets', 'Acetosal', 'Minyak Gandapura (Methyl Salicylate)', 'Asam asetilsalisilat'],
    category: 'analgesic',
    categoryLabel: 'Analgesik & Antipiretik',
    commonSources: ['Obat pengencer darah, obat nyeri bebas, balsem gosok minyak gandapura (1 sendok teh minyak gandapura murni setara ~7 gram aspirin!)'],
    toxicThreshold: 'Akut toksisitas sedang: 150–300 mg/kgBB; Kritis/berat: > 300–500 mg/kgBB atau kadar serum salisilat > 50–100 mg/dL.',
    mechanismOfToxicity:
      'Merangsang langsung pusat pernapasan medula oblongata memicu hiperventilasi (alkalosis respiratorik awal), diikuti oleh pelepasan uncoupling fosforilasi oksidatif mitokondria yang menghambat siklus Krebs dan memicu produksi asam laktat serta badan keton masif (asidosis metabolik anion gap tinggi).',
    toxidromeSigns: [
      'Gejala khas (Salicylism): Tinitus (telinga berdenging), tuli sementara, takipnea berat/hiperventilasi cepat dan dalam (Kussmaul breathing).',
      'Hipertermia (akibat uncoupling fosforilasi oksidatif yang melepas panas tubuh tanpa ATP), diaforesis, mual muntah.',
      'Toksisitas berat: Penurunan kesadaran, kejang, edema paru non-kardiogenik, asidosis metabolik refrakter berat, dan koma.'
    ],
    severityLevel: 'Kritis / Mengancam Nyawa',
    primaryAntidote: 'Alkalinisasi Urin: Natrium Bikarbonat (Meylon 8.4% / NaHCO3 IV)',
    secondaryAntidote: 'Hemodialisis Darurat (Golden Standard Toksisitas Berat)',
    antidoteMechanism:
      'Meningkatkan pH urin menjadi 7.5–8.0 untuk menjebak ion salisilat (ion trapping) dalam bentuk terionisasi yang tidak dapat direabsorpsi oleh tubulus ginjal, sehingga ekskresi salisilat melalui urin meningkat hingga lebih dari 10–20 kali lipat.',
    dosageRegimens: [
      {
        route: 'IV',
        protocolName: 'Protokol Alkalinisasi Urin NaHCO3',
        stage: 'Loading / Inisial',
        dosageText: 'Bolus Natrium Bikarbonat 1–2 mEq/kgBB IV perlahan, dilanjutkan infus kontinu 150 mEq NaHCO3 dalam 1 Liter Dextrose 5% kecepatan 150–250 mL/jam.',
        preparationInstructions: 'Tambahkan 20–40 mEq KCl per liter infus karena hipokalemia akan menggagalkan alkalinisasi urin (ginjal membuang H+ demi menahan K+).'
      },
      {
        route: 'Oral',
        protocolName: 'Dekontaminasi Lambung Dosis Berulang',
        stage: 'Loading / Inisial',
        dosageText: 'Arang aktif 50 gram oral/NGT, dapat diulang 25 gram tiap 4 jam jika menelan aspirin salut enterik (enteric-coated) atau bezoar lambung.',
        preparationInstructions: 'Berikan dalam 2–4 jam pertama pasca konsumsi.'
      }
    ],
    supportiveCare: [
      'Koreksi Kalium: Wajib mempertahankan kadar kalium darah 4.0–4.5 mEq/L untuk mencapai pH urin basa.',
      'Dekstrosa: Berikan glukosa IV meskipun gula darah normal (neuroglikopenia serebral dapat terjadi pada keracunan salisilat).',
      'Indikasi Hemodialisis Segera: Kadar salisilat serum > 100 mg/dL (akut) atau > 60 mg/dL (kronis), asidosis refrakter, edema serebral/paru, gagal ginjal akut.'
    ],
    monitoringParameters: [
      'pH urin setiap jam (target ketat: pH 7.5 – 8.0)',
      'Analisis gas darah serial (target pH darah vena/arteri 7.45 – 7.50, JANGAN MELEBIHI pH darah 7.55)',
      'Kadar kalium serum serial tiap 2–4 jam, glukosa darah, dan kadar salisilat serial.'
    ],
    contraindicatedOrHazardous: [
      'Hati-hati terhadap Intubasi Endotrakeal: Jika dipasang ventilator, hipoventilasi sesaat dapat menurunkan pH darah drastis dan menyebabkan salisilat menembus sawar darah otak secara masif yang berakibat henti jantung mendadak!',
      'Jangan biarkan pasien menjadi hipokalemik saat alkalinisasi urin.'
    ],
    evidenceSource: 'American College of Medical Toxicology (ACMT) & EXTRIP Workgroup Guidelines for Salicylate Poisoning'
  },
  // 27. BARIUM KARBONAT (RACUN CELENG)
  {
    id: 'barium',
    name: 'Barium Karbonat (Racun Celeng / Barium Toksik)',
    aliases: ['Racun celeng', 'Umpan babi hutan', 'Barium carbonate', 'Barium chloride', 'Barium nitrat (kembang api)'],
    category: 'heavy-metal',
    categoryLabel: 'Logam Berat & Mineral',
    commonSources: ['Umpan racun babi hutan ilegal serbuk putih tak berasa, kembang api petasan, keramik industri'],
    toxicThreshold: 'Letal akut: > 0.8–1.0 gram garam barium larut air (serbuk racun celeng sering mengandung hingga puluhan gram)!',
    mechanismOfToxicity:
      'Ion barium (Ba2+) adalah pemblokir kanal kalium (potassium channel blocker) kuat dan non-spesifik. Pemblokiran kanal kalium efluks menyebabkan kalium darah berpindah secara masif ke dalam sel, memicu HIPOKALEMIA EKSTREM (< 1.5–2.0 mEq/L) yang refrakter, depolarisasi otot persisten, paralisis flaksid, dan aritmia ventrikel mematikan.',
    toxidromeSigns: [
      'Gejala awal (15–60 menit): Muntah hebat, kram perut mendadak, diare encer profus, rasa terbakar di mulut.',
      'Fase neuro-muskular: Parestesia ekstremitas, kelemahan otot asenden dimulai dari tungkai hingga lengan, hilangnya refleks tendon dalam, dan paralisis otot pernapasan (pasien sadar penuh tetapi tidak bisa bernapas/asfiksia).',
      'Fase kardiovaskular: Hipertensi berat awal (vasokonstriksi pembuluh darah), diselingi aritmia ventrikel maligna (VT/VF, ekstrasistol multifokal, perpanjangan interval QT) akibat hipokalemia ekstrem.'
    ],
    severityLevel: 'Kritis / Mengancam Nyawa',
    primaryAntidote: 'Infus Agresif Kalium Klorida (KCl IV) & Magnesium Sulfat (MgSO4 IV)',
    secondaryAntidote: 'Natrium Sulfat (Na2SO4) Oral / Lavase Lambung',
    antidoteMechanism:
      'Kalium Klorida IV agresif menggantikan defisit kalium ekstraseluler masif untuk mencegah henti jantung. Sulfat (MgSO4 atau Na2SO4) bereaksi secara kimia dengan ion Ba2+ membentuk Barium Sulfat (BaSO4) yang tidak larut dan tidak beracun, sehingga langsung menghentikan penyerapan toksin.',
    dosageRegimens: [
      {
        route: 'IV',
        protocolName: 'Koreksi Hipokalemia Agresif Terarah',
        stage: 'Loading / Inisial',
        dosageText: 'KCl 20–40 mEq/jam via infus sentral (CVC) dengan pompa infus kontinu di bawah pemantauan monitor EKG ketat.',
        preparationInstructions: 'Dosis kalium yang dibutuhkan bisa mencapai total > 100–300 mEq dalam beberapa jam pertama!'
      },
      {
        route: 'IV',
        protocolName: 'Antidotum Kimia Sulfat IV',
        stage: 'Loading / Inisial',
        dosageText: 'Magnesium Sulfat (MgSO4 40%) 2–4 gram dilarutkan dalam 100 mL D5% atau NaCl 0.9% diinfuskan selama 15–30 menit.',
        preparationInstructions: 'Dapat diulang setiap 4–6 jam sambil memantau kadar magnesium dan refleks patella.'
      },
      {
        route: 'Oral',
        protocolName: 'Dekontaminasi Presipitasi Oral / NGT',
        stage: 'Loading / Inisial',
        dosageText: 'Natrium Sulfat atau Magnesium Sulfat (Garam Epsom) 10–30 gram dilarutkan dalam 250 mL air per NGT.',
        preparationInstructions: 'Bertindak sebagai penawar kimiawi di lumen usus sekaligus pencahar pembersih toksin.'
      }
    ],
    supportiveCare: [
      'Segera siapkan intubasi endotrakeal dan ventilator mekanik jika paralisis otot pernapasan mulai terjadi.',
      'Pasang kateter vena sentral (CVC) dan monitor irama jantung EKG terus menerus di ruang ICU.'
    ],
    monitoringParameters: [
      'Kadar kalium serum serial SETIAP 1–2 JAM hingga stabil > 3.5 mEq/L',
      'Pemantauan ritme EKG kontinu (waspadai gelombang U, pelebaran QRS, ventrikel takikardia)',
      'Kadar magnesium, kalsium, dan analisis gas darah serial.'
    ],
    contraindicatedOrHazardous: [
      'JANGAN PERNAH menunda infus Kalium! Keterlambatan koreksi kalium adalah penyebab kematian utama pasien keracunan racun celeng.',
      'Hati-hati "Rebound Hyperkalemia": saat ion barium mulai diekskresikan ginjal, kalium dari intraseluler akan keluar kembali ke darah; turunkan laju infus KCl secara bertahap saat kalium darah mulai pulih normal.'
    ],
    evidenceSource: 'Clinical Toxicology Practice Guidelines & Case Consensuses on Acute Barium Carbonate Toxicity'
  },
  // 28. INSEKTISIDA KARBAMAT (FURADAN)
  {
    id: 'karbamat',
    name: 'Insektisida Karbamat (Furadan / Baygon Karbamat)',
    aliases: ['Furadan', 'Carbofuran', 'Aldicarb', 'Propoxur', 'Methomyl', 'Lannate', 'Bassa'],
    category: 'pesticide',
    categoryLabel: 'Insektisida & Pestisida',
    commonSources: ['Insektisida butiran merah ungu pertanian, racun semprot rumah tangga, nematisida'],
    toxicThreshold: 'Carbofuran/Aldicarb tergolong pestisida Kelas Ia WHO (Sangat Berbahaya): Dosis letal serbuk oral < 5–10 mg/kgBB (kurang dari 1 sendok teh)!',
    mechanismOfToxicity:
      'Menghambat enzim asetilkolinesterase (AChE) secara reversibel melalui reaksi karbamilasi pada situs aktif esterase. Penumpukan asetilkolin di celah sinaps memicu krisis kolinergik akut. Berbeda dengan organofosfat, karbamat TIDAK mengalami proses penuaan enzim (aging), dan enzim terhidrolisis pulih spontan dalam 24–48 jam.',
    toxidromeSigns: [
      'Toxidrome Kolinergik Akut (SLUDGEM): Salivasi (air liur menetes berlebih), Lakrimasi (mata berair), Urinasi, Defekasi/diare cair, Gangguan lambung/muntah, Emesis, Miosis pupil (pinpoint pupil).',
      'Gejala Kritis Pembunuh Utama: Bronkospasme berat, hipersekresi bronkial masif ("paru-paru basah", ronki basah basilar bilateral luas), dan bradikardia berat.',
      'Fasikulasi otot rangka ringan hingga kelemahan otot pernapasan.'
    ],
    severityLevel: 'Kritis / Mengancam Nyawa',
    primaryAntidote: 'Sulfas Atropin (Atropine Sulfate IV) Titrasi Cepat',
    secondaryAntidote: 'Arang Aktif Oral / NGT (Dekontaminasi)',
    antidoteMechanism:
      'Antagonis kompetitif reseptor muskarinik asetilkolin yang bekerja mengeringkan hipersekresi bronkial, merelaksasi bronkospasme saluran napas, dan meningkatkan laju denyut jantung.',
    dosageRegimens: [
      {
        route: 'IV',
        protocolName: 'Protokol Atropinisasi Cepat Karbamat',
        stage: 'Loading / Inisial',
        dosageText: 'Dewasa: 1–2 mg IV bolus (Pediatrik: 0.02–0.05 mg/kgBB IV). Gandakan dosis setiap 5 menit (misal 2 mg -> 4 mg -> 8 mg) sampai target atropinisasi tercapai.',
        preparationInstructions: 'Target Atropinisasi: Paru-paru kering (suara napas ronki menghilang), sekresi oral kering, denyut nadi > 80x/menit, dan tekanan darah sistolik > 80 mmHg.'
      },
      {
        route: 'IV',
        protocolName: 'Pemeliharaan Atropinisasi',
        stage: 'Pemeliharaan / Infus Kontinu',
        dosageText: 'Infus kontinu Atropin 10–20% dari total dosis bolus atropinisasi per jam selama 12–24 jam, lalu tappering off bertahap.',
        preparationInstructions: 'Karbamat terurai lebih cepat dibanding organofosfat, durasi atropin umumnya cukup 24 jam.'
      }
    ],
    supportiveCare: [
      'Dekontaminasi Kulit: Lepaskan seluruh pakaian pasien dan cuci badan dengan air mengalir serta sabun alkali untuk menghentikan absorpsi transdermal.',
      'Suplementasi oksigen dan pengisapan lendir/suction sekret saluran napas yang agresif.'
    ],
    monitoringParameters: [
      'Auskultasi paru serial setiap 15–30 menit (kunci utama kecukupan dosis atropin)',
      'Denyut jantung, tekanan darah, dan saturasi oksigen SpO2 kontinu',
      'Ukuran pupil (catatan: miosis adalah tanda terakhir yang pulih, JANGAN jadikan pupil sebagai patokan tunggal atropinisasi).'
    ],
    contraindicatedOrHazardous: [
      'PRALIDOKSIM (2-PAM / Protopam) UMUMNYA TIDAK DIREKOMENDASIKAN ATAU DIKONTRAINDIKASIKAN pada keracunan karbamat murni (terutama karbaril) karena dapat meningkatkan toksisitas karbamat dan menghambat hidrolisis spontan enzim AChE!',
      'Jangan menghentikan atropin mendadak jika suara napas basah belum kering sempurna.'
    ],
    evidenceSource: 'WHO/IPCS Carbamate Pesticides Health & Safety Guide & Clinical Toxicology Protocols'
  },
  // 29. JAMUR LIAR TOKSIK (AMANITA PHALLOIDES / AMATOKSIN)
  {
    id: 'jamur-amatoksin',
    name: 'Jamur Liar Beracun (Amanita phalloides / Amatoksin)',
    aliases: ['Death Cap Mushroom', 'Jamur tudung maut', 'Amanita verna', 'Amatoxin poisoning', 'Lepiota beracun'],
    category: 'other',
    categoryLabel: 'Toksin & Gas Lainnya',
    commonSources: ['Konsumsi jamur liar hasil buruan hutan/kebun yang mirip jamur kancing atau jamur payung konsumsi'],
    toxicThreshold: 'Amatoksin adalah salah satu racun biologis paling mematikan di dunia: Konsumsi 1 buah jamur Amanita phalloides dewasa (~30–50 gram) sudah cukup membunuh 2 orang dewasa sehat!',
    mechanismOfToxicity:
      'Amatoksin tahan terhadap panas memasak dan asam lambung. Diabsorpsi ke hepatosit melalui transporter OATP1B3 dan mengikat subunit Rpb1 dari enzim RNA Polimerase II secara ireversibel, menghentikan sintesis protein sel hepar dan memicu nekrosis masif hepatosit, nekrosis tubulus ginjal, dan gagal hati fulminan.',
    toxidromeSigns: [
      'Fase 1 - Laten Terlambat (6–24 jam pasca makan): Pasien sama sekali TIDAK bergejala (tanda bahaya khas keracunan jamur fatal; jamur tidak berbahaya biasanya memicu muntah < 2 jam).',
      'Fase 2 - Gastrointestinal Hebat (24–48 jam): Diare berdarah/koleriform masif seperti cucian beras, kram abdomen hebat, muntah dehidrasi berat, syok hipovolemik.',
      'Fase 3 - Fase Remisi Semu (Fase "Bulan Madu" 48–72 jam): Gejala muntah membaik, tetapi enzim hati SGOT/SGPT mulai melonjak tajam > 2000–5000 IU/L.',
      'Fase 4 - Gagal Hati & Ginjal Fulminan (hari ke 3–6): Ikterus berat, koagulopati luas, ensefalopati hepatik, gagal ginjal akut, koma hepatikum, dan kematian.'
    ],
    severityLevel: 'Kritis / Mengancam Nyawa',
    primaryAntidote: 'Silibinin / Silymarin IV (Legalon SIL) & Benzilpenisilin G (Penicillin G IV)',
    secondaryAntidote: 'N-Asetilsistein (NAC) IV & Multi-Dose Activated Charcoal (MDAC)',
    antidoteMechanism:
      'Silibinin dan Penisilin G menghambat transporter membran OATP1B3 pada hepatosit, sehingga memblokade masuknya amatoksin ke dalam sel hati. Arang aktif berulang memutus siklus enterohepatik toksin.',
    dosageRegimens: [
      {
        route: 'IV',
        protocolName: 'Protokol Silibinin / Silymarin IV (Lini Pertama Pilihan)',
        stage: 'Loading / Inisial',
        dosageText: 'Silibinin 5 mg/kgBB IV loading selama 1 jam, dilanjutkan infus kontinu 20 mg/kgBB/hari selama 3–6 hari.',
        preparationInstructions: 'Bila sediaan IV Legalon SIL tidak tersedia, berikan Silymarin oral dosis tinggi (30–40 mg/kgBB/hari).'
      },
      {
        route: 'IV',
        protocolName: 'Protokol Benzilpenisilin G Dosis Tinggi (Alternatif)',
        stage: 'Pemeliharaan / Infus Kontinu',
        dosageText: 'Penisilin G 1 juta IU/kgBB/hari IV dibagi setiap 4 jam (atau 300.000–1.000.000 IU/kg/hari) selama 3 hari.',
        preparationInstructions: 'Diberikan sebagai pemblokir ambilan amatoksin ke hepatosit.'
      },
      {
        route: 'IV',
        protocolName: 'Hepatoproteksi N-Asetilsistein (NAC)',
        stage: 'Pemeliharaan / Infus Kontinu',
        dosageText: 'Protokol NAC IV 21-jam penuh (seperti protokol overdosis parasetamol: 150 mg/kg loading, lalu 50 mg/kg 4 jam, lalu 100 mg/kg 16 jam).',
        preparationInstructions: 'Berikan seawal mungkin untuk melindungi mikrosirkulasi hepar dan antioksidan.'
      }
    ],
    supportiveCare: [
      'Arang Aktif Dosis Berulang (MDAC): 20–30 gram setiap 4 jam via NGT untuk menyerap amatoksin yang diekskresikan melalui cairan empedu ke usus.',
      'Resusitasi cairan kristaloid agresif untuk mencegah nekrosis tubular ginjal akut.',
      'Konsultasi segera ke pusat rujukan transplantasi hepar jika INR > 6.0 atau ensefalopati berkembang.'
    ],
    monitoringParameters: [
      'PT / INR, SGOT, SGPT, dan Bilirubin total setiap 12 jam',
      'Fungsi ginjal (Ureum, Kreatinin, elektrolit) dan kadar laktat darah',
      'GCS dan status neurologis untuk tanda ensefalopati hepatik.'
    ],
    contraindicatedOrHazardous: [
      'JANGAN PERNAH memulangkan pasien yang makan jamur liar tak dikenal meskipun saat tiba di IGD terlihat sehat, jika onset makan belum melewati 24 jam (periode laten mematikan).',
      'Hindari pemberian obat hepatotoksik lain selama periode perawatan.'
    ],
    evidenceSource: 'European Association for the Study of the Liver (EASL) & Clinical Practice Guidelines for Amatoxin Poisoning'
  }
];

// Helper Functions
export function getToxicAgentById(id: string): ToxicAgentProfile | undefined {
  return TOXICOLOGY_ANTIDOTES_DATABASE.find(item => item.id.toLowerCase() === id.toLowerCase());
}

export function searchToxicAgents(query: string, categoryFilter: string = 'all'): ToxicAgentProfile[] {
  const cleanQ = (query || '').toLowerCase().trim();

  return TOXICOLOGY_ANTIDOTES_DATABASE.filter(item => {
    const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
    if (!matchesCategory) return false;

    if (!cleanQ) return true;

    const matchesName = item.name.toLowerCase().includes(cleanQ);
    const matchesAliases = item.aliases.some(a => a.toLowerCase().includes(cleanQ));
    const matchesAntidote = item.primaryAntidote.toLowerCase().includes(cleanQ) ||
      (item.secondaryAntidote ? item.secondaryAntidote.toLowerCase().includes(cleanQ) : false);
    const matchesSource = item.commonSources.some(s => s.toLowerCase().includes(cleanQ));

    return matchesName || matchesAliases || matchesAntidote || matchesSource;
  });
}
