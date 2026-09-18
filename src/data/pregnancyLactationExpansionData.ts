import { PregnancyLactationDrug, SafePregnancyConditionGuide } from './pregnancyLactationData';

/**
 * High-yield clinical expansion dataset for Pregnancy & Lactation Database.
 * Standardized according to FDA PLLR, Hale's Lactation Rating (L1-L5), and Briggs Drugs in Pregnancy & Lactation.
 */
export const PREGNANCY_LACTATION_EXPANSION_DATABASE: PregnancyLactationDrug[] = [
  // =========================================================================
  // 1. OBSTETRI, UTEROTONIKA, TOKOLITIK & PEMATANGAN PARU JANIN
  // =========================================================================
  {
    id: 'preg-dexamethasone',
    name: 'Dexamethasone',
    genericName: 'Dexamethasone',
    category: 'Kortikosteroid Sistemik / Pematangan Paru Janin',
    brandNames: ['Kalmethasone', 'Danasone', 'Cortidex', 'Dexamethasone Generik'],
    fdaCategory: 'C',
    pllrSummary: 'Standar emas dunia (bersama Betamethasone) untuk induksi pematangan paru janin pada ancaman persalinan prematur (usia kehamilan 24-34 minggu) guna mencegah Respiratory Distress Syndrome (RDS), perdarahan intraventrikular, dan kematian neonatal.',
    trimesterRisks: {
      trimester1: 'Penggunaan jangka panjang/dosis tinggi pada trimester 1 sedikit meningkatkan risiko celah bibir/palatum (orofacial clefts). Hindari jika bukan indikasi darurat.',
      trimester2: 'Aman untuk terapi antenatal pematangan paru mulai minggu ke-24.',
      trimester3: 'Sangat direkomendasikan pada ancaman persalinan prematur (<34 minggu). Dosis standar: 6 mg IM tiap 12 jam sebanyak 4 dosis.'
    },
    halesLactationRating: 'L3',
    relativeInfantDosePercent: 1.2,
    breastfeedingSummary: 'Terekskresi dalam ASI dalam jumlah sangat kecil (<2% RID). Kursus terapi antenatal 48 jam tidak menghalangi inisiasi menyusui.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Betamethasone (12 mg IM tiap 24 jam x 2 dosis)'],
    clinicalRecommendations: 'Pemberian wajib dibatasi 1 siklus tunggal pematangan paru janin (4 dosis). Hindari pemberian siklus berulang (multiple courses) karena berisiko menurunkan lingkar kepala dan berat badan lahir janin.',
    references: 'WHO 2022 Recommendations on Interventions to Improve Preterm Birth Outcomes & POGI Konsensus Persalinan Preterm 2023'
  },
  {
    id: 'preg-betamethasone',
    name: 'Betamethasone',
    genericName: 'Betamethasone Sodium Phosphate / Acetate',
    category: 'Kortikosteroid Sistemik / Pematangan Paru Janin',
    brandNames: ['Celestone Soluspan', 'Betamethasone Generik'],
    fdaCategory: 'C',
    pllrSummary: 'Kortikosteroid fluorinasi pilihan utama alternatif Dexamethasone yang menembus sawar plasenta secara efektif untuk memicu sintesis surfaktan paru janin pada ancaman partus prematur.',
    trimesterRisks: {
      trimester1: 'Potensi risiko malformasi kraniofasial ringan jika digunakan sistemik dosis tinggi berulang pada organogenesis.',
      trimester2: 'Aman dan efektif mulai usia gestasi 24 minggu.',
      trimester3: 'Indikasi utama pematangan paru janin: 12 mg IM tiap 24 jam sebanyak 2 dosis.'
    },
    halesLactationRating: 'L3',
    relativeInfantDosePercent: 1.0,
    breastfeedingSummary: 'Ekskresi dalam ASI minimal. Kompatibel dengan menyusui pascasalin.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Dexamethasone'],
    clinicalRecommendations: 'Regimen standar: 12 mg IM per 24 jam x 2 dosis. Pantau peningkatan sementara kadar glukosa darah ibu (terutama pada pasien diabetes gestasional).',
    references: 'ACOG Practice Bulletin No. 171 & RCOG Green-top Guideline No. 7'
  },
  {
    id: 'preg-terbutaline',
    name: 'Terbutaline',
    genericName: 'Terbutaline Sulfate',
    category: 'Agonis Beta-2 Adrenergik / Tokolitik',
    brandNames: ['Bricasma', 'Astharol', 'Forasma'],
    fdaCategory: 'C',
    pllrSummary: 'Agonis beta-2 adrenergik yang digunakan sebagai tokolitik darurat jangka pendek (maksimal 48-72 jam) untuk menunda kontraksi persalinan prematur sehingga kortikosteroid pematangan paru sempat bekerja.',
    trimesterRisks: {
      trimester1: 'Bukan indikasi pada trimester 1. Tidak menunjukkan efek teratogenik mayor pada hewan.',
      trimester2: 'Dapat digunakan sebagai tokolitik akut mulai minggu ke-24.',
      trimester3: 'Bermanfaat untuk tokolisis darurat jangka pendek. FDA Black Box Warning: DILARANG untuk pencegahan partus preterm jangka panjang oral.'
    },
    halesLactationRating: 'L2',
    relativeInfantDosePercent: 0.5,
    breastfeedingSummary: 'Konsentrasi dalam ASI sangat rendah (<1% RID). Kompatibel dengan menyusui.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Nifedipine (Extended Release)', 'Atosiban'],
    clinicalRecommendations: 'Gunakan secara parenteral IV/SC hanya di fasilitas rawat inap VK/kamar bersalin maksimal 48 jam. Pantau tanda takikardia maternal (>120 bpm), edema paru, dan hipokalemia.',
    references: 'FDA Drug Safety Communication 2011 & POGI Panduan Tokolisis Kehamilan 2023'
  },
  {
    id: 'preg-magnesium-sulfate',
    name: 'Magnesium Sulfate',
    genericName: 'Magnesium Sulfate (MgSO4)',
    category: 'Antikonvulsan & Tokolitik / Neuroproteksi Janin',
    brandNames: ['MgSO4 20%', 'MgSO4 40% Otsuka'],
    fdaCategory: 'D',
    pllrSummary: 'Obat pilihan utama nomor 1 di dunia untuk pencegahan dan tata laksana kejang eklampsia serta neuroproteksi cerebral palsy pada persalinan sangat prematur (<32 minggu). Kategori D FDA diberikan khusus jika infus parenteral digunakan berkelanjutan >5-7 hari karena memicu osteopenia janin.',
    trimesterRisks: {
      trimester1: 'Tidak ada indikasi pada trimester 1.',
      trimester2: 'Aman untuk indikasi neuroproteksi pada ancaman partus prematur lanjut.',
      trimester3: 'Standar emas tata laksana Preeklampsia Berat (PEB) & Eklampsia. Loading dose 4 g IV dilanjutkan rumatan 1 g/jam selama 24 jam.'
    },
    halesLactationRating: 'L1',
    relativeInfantDosePercent: 0.8,
    breastfeedingSummary: 'Ekskresi ke dalam ASI minimal dan merupakan ion fisiologis esensial. Sangat kompatibel dengan menyusui.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Diazepam (hanya jika MgSO4 tidak tersedia / refrakter)'],
    clinicalRecommendations: 'Selalu siapkan Kalsium Glukonat 10% di dekat tempat tidur pasien sebagai antidotum. Pantau syarat keamanan MgSO4: refleks patela (+), laju napas >16x/menit, dan urin >30 ml/jam.',
    references: 'WHO Guidelines for the Management of Severe Preeclampsia and Eclampsia & POGI 2023'
  },
  {
    id: 'preg-oxytocin',
    name: 'Oxytocin',
    genericName: 'Oxytocin',
    category: 'Uterotonika / Hormon Oksitosik',
    brandNames: ['Syntocinon', 'Pitocin', 'Induxin'],
    fdaCategory: 'X',
    pllrSummary: 'Hormon peptida perangsang kontraksi miometrium uterus. Kategori X FDA menandakan kontraindikasi mutlak penggunaannya sebelum awitan persalinan jika tidak dalam pengawasan ketat induksi medis. Merupakan lini pertama pencegahan dan terapi Perdarahan Pascasalin (PPH).',
    trimesterRisks: {
      trimester1: 'KONTRAINDIKASI MUTLAK. Memprovokasi kontraksi uterus dan keguguran spontan.',
      trimester2: 'KONTRAINDIKASI MUTLAK kecuali untuk terminasi kehamilan atas indikasi medis khusus.',
      trimester3: 'Digunakan secara terkontrol infus IV bertingkat untuk induksi persalinan aterm, dan injeksi IM 10 IU segera setelah bayi lahir untuk manajemen aktif kala III persalinan.'
    },
    halesLactationRating: 'L1',
    relativeInfantDosePercent: 0.1,
    breastfeedingSummary: 'Merupakan hormon fisiologis pelancar ejeksi ASI (let-down reflex). Peptida oksitosin terurai sempurna di saluran cerna bayi.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Methylergometrine (Kala III pascasalin)', 'Misoprostol rektal'],
    clinicalRecommendations: 'Pencegahan PPH standar: 10 IU IM segera setelah bayi lahir (Manajemen Aktif Kala III). Untuk induksi, gunakan infusion pump bertingkat dengan pemantauan CTG kontinu.',
    references: 'WHO Guidelines for the Prevention and Management of Postpartum Haemorrhage 2023'
  },
  {
    id: 'preg-methylergometrine',
    name: 'Methylergometrine',
    genericName: 'Methylergometrine Maleate',
    category: 'Uterotonika / Alkaloid Ergot',
    brandNames: ['Methergin', 'Myomergin', 'Bledstop'],
    fdaCategory: 'X',
    pllrSummary: 'Alkaloid ergot pemicu vasokonstriksi dan kontraksi tonik tetanik uterus. KONTRAINDIKASI MUTLAK sebelum persalinan bayi karena menyebabkan asfiksia janin fatal dan ruptur uteri.',
    trimesterRisks: {
      trimester1: 'KONTRAINDIKASI MUTLAK. Menyebabkan kontraksi uterus hebat dan aborsi.',
      trimester2: 'KONTRAINDIKASI MUTLAK. Memicu kematian janin intrauterin dan ruptur uteri.',
      trimester3: 'KONTRAINDIKASI MUTLAK SEBELUM KEPALA/BAYI LAHIR. Hanya boleh diberikan setelah plasenta lahir lengkap pada kala III/IV.'
    },
    halesLactationRating: 'L4',
    relativeInfantDosePercent: 2.5,
    breastfeedingSummary: 'Dapat menghambat sekresi hormon prolaktin dan menurunkan produksi ASI. Potensi ergotisme pada bayi jika digunakan berulang >3 hari.',
    teratogenicAlert: 'Spasme vaskular ekstremitas dan hipoksia fatal janin intrauterin.',
    isContraindicatedInPregnancy: true,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Oxytocin (10 IU IM)', 'Misoprostol sublingual/rektal'],
    clinicalRecommendations: 'KONTRAINDIKASI KERAS pada pasien dengan Preeklampsia, Eklampsia, atau Hipertensi karena memicu lonjakan tekanan darah mendadak dan stroke maternal.',
    references: 'FIGO Guidelines: Management of the Third Stage of Labor & POGI PPH 2023'
  },

  // =========================================================================
  // 2. TERATOGEN MAYOR KRITIS, ANTIEPILEPSI & KATEGORI X / D
  // =========================================================================
  {
    id: 'preg-valproate',
    name: 'Valproic Acid (Asam Valproat)',
    genericName: 'Valproic Acid / Divalproex Sodium / Natrium Valproat',
    category: 'Antikonvulsan & Penstabil Mood',
    brandNames: ['Depakene', 'Depakote', 'Ikalep', 'Valisanbe'],
    fdaCategory: 'D',
    pllrSummary: 'Salah satu teratogen manusia paling poten yang diketahui. FDA menetapkan Kategori X untuk profilaksis migrain dan Kategori D untuk epilepsi refrakter. Berisiko tinggi memicu malformasi kongenital mayor (10-11%) dan defisit intelektual anak.',
    trimesterRisks: {
      trimester1: 'TERATOGENIK PARAH: Risiko defek tabung saraf (spina bifida lumbosakral) meningkat 10-20 kali lipat (1-2%), defek kraniofasial, bibir sumbing, anomali kardiovaskular, dan hipospadia.',
      trimester2: 'Memicu Fetal Valproate Syndrome dan gangguan neurodevelopmental permanen (penurunan skor IQ 8-10 poin, autisme 3-5 kali lipat).',
      trimester3: 'Risiko hepatotoksisitas neonatal, koagulopati trombositopenia, dan gejala putus obat neonatal.'
    },
    halesLactationRating: 'L2',
    relativeInfantDosePercent: 1.8,
    breastfeedingSummary: 'Ekskresi ke ASI rendah (<3% RID) karena ikatan protein plasma tinggi. Kompatibel dengan menyusui bila ibu memerlukan monoterapi valproat pascasalin.',
    teratogenicAlert: 'Fetal Valproate Syndrome: Spina bifida, kraniosinostosis, mikrosefali, fasies khas, defisit neurokognitif & spektrum autisme.',
    isContraindicatedInPregnancy: true,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Levetiracetam', 'Lamotrigine'],
    clinicalRecommendations: 'HINDARI PADA WANITA USIA SUBUR kecuali tidak ada alternatif lain. Bila kehamilan terjadi, berikan Asam Folat dosis tinggi 4-5 mg/hari sejak prakonsepsi dan lakukan USG fetal detailed anomaly scan.',
    references: 'MHRA / EMA Valproate Pregnancy Prevention Programme (PPP) & American Academy of Neurology (AAN)'
  },
  {
    id: 'preg-carbamazepine',
    name: 'Carbamazepine',
    genericName: 'Carbamazepine',
    category: 'Antikonvulsan / Antiepilepsi & Terapi Nyeri Neuropatik',
    brandNames: ['Tegretol', 'Bamgetol'],
    fdaCategory: 'D',
    pllrSummary: 'Antiepilepsi penghambat kanal natrium yang terbukti teratogenik pada manusia, menyebabkan defek tabung saraf spina bifida (sekitar 0.5-1%), malformasi kraniofasial, dan hipoplasia kuku janin.',
    trimesterRisks: {
      trimester1: 'Risiko spina bifida (0.5-1%), kelainan jantung kongenital, celah bibir/langit-langit, dan retardasi pertumbuhan janin.',
      trimester2: 'Fetal Carbamazepine Syndrome: Hipoplasia kuku jari tangan, epikantus, hidung pendek dengan nostril anteversi.',
      trimester3: 'Risiko perdarahan neonatal akibat defisiensi vitamin K maternal-fetal dan gejala putus obat.'
    },
    halesLactationRating: 'L2',
    relativeInfantDosePercent: 4.2,
    breastfeedingSummary: 'Terekskresi dalam ASI dalam jumlah sedang. Bayi umumnya mentoleransi dengan baik; pantau potensi sedasi, ikterus hepar, dan kenaikan berat badan.',
    teratogenicAlert: 'Spina bifida, defek kraniofasial, hipoplasia kuku distal (Fetal Carbamazepine Syndrome).',
    isContraindicatedInPregnancy: true,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Levetiracetam', 'Lamotrigine'],
    clinicalRecommendations: 'Jika tidak dapat diganti, gunakan monoterapi dengan dosis efektif terendah terbagi. Berikan suplementasi Asam Folat 4-5 mg/hari dan Vitamin K1 10 mg oral/hari pada bulan terakhir kehamilan.',
    references: 'Briggs Drugs in Pregnancy and Lactation & NICE Clinical Guideline CG137 (Epilepsies)'
  },
  {
    id: 'preg-phenytoin',
    name: 'Phenytoin',
    genericName: 'Phenytoin Sodium',
    category: 'Antiepilepsi / Antikonvulsan Hidantoin',
    brandNames: ['Dilantin', 'Decatona', 'Kutoin', 'Phenytoin Generik'],
    fdaCategory: 'D',
    pllrSummary: 'Antiepilepsi teratogenik yang memicu sindrom malformasi kongenital khas yaitu Fetal Hydantoin Syndrome pada 5-10% bayi yang terpapar intrauterin.',
    trimesterRisks: {
      trimester1: 'Teratogenesis mayor (Fetal Hydantoin Syndrome): Mikrosefali, retardasi mental, defek septum ventrikel jantung, celah bibir/palatum.',
      trimester2: 'Hipoplasia falang distal dan kuku jari, gangguan osifikasi skeletal.',
      trimester3: 'Koagulopati perdarahan neonatal akibat penipisan faktor pembekuan dependen vitamin K.'
    },
    halesLactationRating: 'L2',
    relativeInfantDosePercent: 2.5,
    breastfeedingSummary: 'Konsentrasi ASI rendah. Kompatibel dengan menyusui dengan pemantauan bayi terhadap sedasi.',
    teratogenicAlert: 'Fetal Hydantoin Syndrome: Mikrosefali, retardasi perkembangan motorik/IQ, hipoplasia kuku dan jari, malformasi kardiak.',
    isContraindicatedInPregnancy: true,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Levetiracetam', 'Lamotrigine'],
    clinicalRecommendations: 'Wajib pemantauan Therapeutic Drug Monitoring (TDM) kadar fenitoin bebas karena hemodilusi dan penurunan ikatan albumin maternal. Berikan injeksi Vitamin K1 1 mg IM pada bayi segera setelah lahir.',
    references: 'ACOG Practice Bulletin No. 232 (Pregnancy and Epilepsy) & Briggs 12th Ed'
  },
  {
    id: 'preg-lithium',
    name: 'Lithium',
    genericName: 'Lithium Carbonate',
    category: 'Penstabil Mood / Bipolar',
    brandNames: ['Frimania'],
    fdaCategory: 'D',
    pllrSummary: 'Mood stabilizer standar emas gangguan afektif bipolar. Paparan trimester 1 meningkatkan risiko malformasi kardiovaskular spesifik langka yaitu Ebstein Anomaly (pergeseran katup trikuspid ke arah apeks ventrikel kanan).',
    trimesterRisks: {
      trimester1: 'Risiko Ebstein Anomaly (peningkatan sekitar 10-20 kali lipat dibanding populasi umum, absolut ~1 per 1.000 kehamilan) dan defek kardiovaskular mayor lainnya.',
      trimester2: 'Struma gondok janin (fetal goiter), hipotiroidisme janin, dan polihidramnion.',
      trimester3: 'Toksisitas lithium neonatal (Floppy Baby Syndrome: hipotonia berat, letargi, sianosis, disfungsi tiroid, dan diabetes insipidus nefrogenik neonatal).'
    },
    halesLactationRating: 'L4',
    relativeInfantDosePercent: 24.5,
    breastfeedingSummary: 'Terekskresi dalam ASI dalam jumlah sangat tinggi (RID 15-30%), ginjal neonatus imatur belum mampu mengekskresi lithium. TIDAK DIANJURKAN menyusui bila ibu mengonsumsi lithium.',
    teratogenicAlert: 'Anomali Ebstein kardiak (malformasi dan pergeseran katup trikuspid jantung janin).',
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: true,
    safeAlternatives: ['Quetiapine', 'Olanzapine', 'Haloperidol'],
    clinicalRecommendations: 'Jika harus diteruskan, lakukan Ekokardiografi Fetal terarah pada minggu ke-18-20. Kurangi dosis atau hentikan sementara saat awitan persalinan untuk menghindari toksisitas saat dehidrasi partus.',
    references: 'APA Practice Guideline for Bipolar Disorder & NICE Antenatal and Postnatal Mental Health'
  },
  {
    id: 'preg-thalidomide',
    name: 'Thalidomide',
    genericName: 'Thalidomide',
    category: 'Imunomodulator & Antineoplastik Mieloma',
    brandNames: ['Thalomid'],
    fdaCategory: 'X',
    pllrSummary: 'Teratogen manusia paling terkenal dalam sejarah medis modern. Satu dosis tunggal pada hari ke-20 s.d. 36 pascakonsepsi dapat memicu malformasi reduksi ekstremitas parah yang mengancam jiwa pada 50% janin.',
    trimesterRisks: {
      trimester1: 'TERATOGENIK EKSTREM: Fokomelia (tangan dan kaki menempel langsung ke torso mirip sirip anjing laut), amelia (tidak adanya ekstremitas), anotia/mikrotia, atresia duodenum, dan defek jantung.',
      trimester2: 'Kematian janin intrauterin dan anomali multipel organ interna.',
      trimester3: 'KONTRAINDIKASI MUTLAK di seluruh tahapan kehamilan.'
    },
    halesLactationRating: 'L5',
    relativeInfantDosePercent: 'Unknown (Severe Toxic Risk)',
    breastfeedingSummary: 'KONTRAINDIKASI MUTLAK. Risiko supresi sumsum tulang dan toksisitas sistemik berat pada bayi.',
    teratogenicAlert: 'Fokomelia / Amelia ekstremitas, atresia telinga, kelainan kardiak dan gastrointestinal fatal.',
    isContraindicatedInPregnancy: true,
    isContraindicatedInLactation: true,
    safeAlternatives: ['Bortezomib (bila mutlak diperlukan untuk keganasan dengan pertimbangan onkologi)'],
    clinicalRecommendations: 'KONTRAINDIKASI MUTLAK. Pasien wanita usia subur wajib menggunakan DUA metode kontrasepsi efektif mandiri sejak 4 minggu sebelum terapi hingga 4 minggu setelah terapi selesai (Program STEPS/REMS).',
    references: 'FDA REMS Thalidomide Program & WHO Pharmaceuticals Newsletter'
  },
  {
    id: 'preg-leflunomide',
    name: 'Leflunomide',
    genericName: 'Leflunomide',
    category: 'DMARD Imunosupresan / Artritis Reumatoid',
    brandNames: ['Arava'],
    fdaCategory: 'X',
    pllrSummary: 'Inhibitor sintesis pirimidin untuk terapi RA aktif. Memiliki efek teratogenik berat dan waktu paruh metabolit aktif (teriflunomide) yang sangat panjang (hingga 2 tahun) di dalam tubuh wanita.',
    trimesterRisks: {
      trimester1: 'KONTRAINDIKASI MUTLAK. Malformasi kraniofasial, skeletal, kardiovaskular berat, dan kematian embrio.',
      trimester2: 'KONTRAINDIKASI MUTLAK.',
      trimester3: 'KONTRAINDIKASI MUTLAK.'
    },
    halesLactationRating: 'L5',
    relativeInfantDosePercent: 'Unknown',
    breastfeedingSummary: 'KONTRAINDIKASI MUTLAK. Tidak boleh menyusui.',
    teratogenicAlert: 'Embriotoksisitas parah, malformasi kraniofasial dan skeletal.',
    isContraindicatedInPregnancy: true,
    isContraindicatedInLactation: true,
    safeAlternatives: ['Sulfasalazine (dengan suplemen asam folat)', 'Hydroxichloroquine'],
    clinicalRecommendations: 'Jika pasien pengguna leflunomide berencana hamil, WAJIB menjalani prosedur eliminasi cepat (cholestyramine washout: Kolestiramin 8 g 3x/hari selama 11 hari) sampai kadar serum terbukti <0.02 mg/L pada 2 tes terpisah.',
    references: 'FDA Arava Black Box Warning & ACR Guideline for Reproductive Health in Rheumatic Diseases'
  },

  // =========================================================================
  // 3. NUTRISI, MINERAL & VITAMIN MATERNAL
  // =========================================================================
  {
    id: 'preg-folic-acid',
    name: 'Folic Acid (Asam Folat)',
    genericName: 'Folic Acid / Vitamin B9',
    category: 'Vitamin Larut Air & Nutrisi Esensial Kehamilan',
    brandNames: ['Folavit', 'Anelat', 'Folavit 400', 'Asam Folat Generik'],
    fdaCategory: 'A',
    pllrSummary: 'Vitamin esensial Kategori A nomor 1 untuk pencegahan cacat tabung saraf (Neural Tube Defects/NTD) seperti anensefali dan spina bifida. Wajib dikonsumsi sejak masa prakonsepsi (minimal 1-3 bulan sebelum hamil).',
    trimesterRisks: {
      trimester1: 'Sangat aman dan WAJIB diberikan. Dosis profilaksis standar: 400 mcg (0.4 mg) per hari. Pada ibu risiko tinggi (riwayat NTD, epilepsi, diabetes): 4-5 mg per hari.',
      trimester2: 'Aman dan esensial untuk eritropoiesis maternal dan perkembangan plasenta.',
      trimester3: 'Aman, mendukung pencegahan anemia megaloblastik gestasional.'
    },
    halesLactationRating: 'L1',
    relativeInfantDosePercent: 0.1,
    breastfeedingSummary: 'Komponen fisiologis alami ASI. Nutrisi esensial bagi pertumbuhan sel dan otak bayi menyusui.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: [],
    clinicalRecommendations: 'Berikan 400 mcg/hari untuk semua wanita usia subur yang merencanakan kehamilan. Dosis tinggi 4-5 mg/hari wajib untuk ibu yang mengonsumsi antikonvulsan, obesitas, diabetes, atau riwayat anak NTD.',
    references: 'WHO Guidelines on Folic Acid Supplementation in Pregnancy & POGI 2023'
  },
  {
    id: 'preg-ferrous-fumarate',
    name: 'Ferrous Fumarate',
    genericName: 'Ferrous Fumarate (Zat Besi)',
    category: 'Mineral & Antianemia Gestasional',
    brandNames: ['Sangobion', 'Ferro-F', 'Hemobion'],
    fdaCategory: 'A',
    pllrSummary: 'Bentuk garam zat besi oral dengan kandungan besi elemental tinggi (~33%) untuk pencegahan dan pengobatan anemia defisiensi besi maternal.',
    trimesterRisks: {
      trimester1: 'Aman. Membantu menjaga cadangan feritin maternal sejak dini.',
      trimester2: 'Kebutuhan zat besi meningkat pesat seiring ekspansi volume plasma dan massa eritrosit janin.',
      trimester3: 'Sangat penting untuk mencegah berat badan lahir rendah (BBLR), persalinan prematur, dan perdarahan pascasalin akibat anemia.'
    },
    halesLactationRating: 'L1',
    relativeInfantDosePercent: 0.2,
    breastfeedingSummary: 'Zat besi diekskresikan secara fisiologis ke dalam ASI. Sangat aman dan mendukung kebutuhan laktasi.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Ferrous Sulfate', 'Iron Sucrose IV (bila intoleran oral)'],
    clinicalRecommendations: 'Konsumsi bersama air putih atau jus jeruk (Vitamin C meningkatkan absorpsi). Hindari minum bersamaan dengan teh, kopi, susu, atau kalsium (jarakkan minimal 2 jam).',
    references: 'WHO Daily Iron and Folic Acid Supplementation in Pregnant Women & Kemenkes RI'
  },
  {
    id: 'preg-ferrous-sulfate',
    name: 'Ferrous Sulfate',
    genericName: 'Ferrous Sulfate / Besi Sulfat',
    category: 'Mineral & Antianemia Gestasional',
    brandNames: ['Tablet Tambah Darah (TTD) Program Kemenkes', 'Iberet', 'Ferrous Sulfate Generik'],
    fdaCategory: 'A',
    pllrSummary: 'Standar program Tablet Tambah Darah (TTD) nasional Kemenkes RI (mengandung 60 mg besi elemental + 400 mcg asam folat) untuk menekan angka anemia kehamilan dan stunting.',
    trimesterRisks: {
      trimester1: 'Aman untuk profilaksis anemia.',
      trimester2: 'Wajib diminum rutin minimal 90 tablet selama masa kehamilan.',
      trimester3: 'Mempersiapkan hemoglobin maternal menghadapi perdarahan fisiologis persalinan.'
    },
    halesLactationRating: 'L1',
    relativeInfantDosePercent: 0.2,
    breastfeedingSummary: 'Fisiologis dan esensial. Kompatibel penuh dengan menyusui.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Ferrous Fumarate', 'Ferrous Gluconate'],
    clinicalRecommendations: 'Konsumsi malam hari sebelum tidur untuk mengurangi keluhan mual gastrointestinal. Edukasi pasien bahwa feses berwarna kehitaman adalah normal dan tidak berbahaya.',
    references: 'Kemenkes RI Standar Pelayanan Antenatal Terpadu (ANC 10T) & WHO 2023'
  },
  {
    id: 'preg-calcium-carbonate',
    name: 'Calcium Carbonate',
    genericName: 'Calcium Carbonate / Kalsium Karbonat',
    category: 'Suplemen Mineral & Profilaksis Preeklampsia',
    brandNames: ['Cal-95', 'Osteocare', 'Calcichew', 'Kalsium Karbonat Generik'],
    fdaCategory: 'A',
    pllrSummary: 'Suplemen mineral esensial untuk pembentukan tulang dan gigi janin serta direkomendasikan secara resmi oleh WHO dan POGI dengan dosis 1.5-2 g kalsium elemental per hari untuk mencegah preeklampsia pada ibu risiko tinggi.',
    trimesterRisks: {
      trimester1: 'Aman dan memenuhi kebutuhan kalsium maternal harian.',
      trimester2: 'Sangat direkomendasikan mulai minggu ke-20 untuk menurunkan resistensi vaskular dan mencegah preeklampsia.',
      trimester3: 'Mendukung mineralisasi skeletal janin yang mencapai puncaknya di trimester akhir.'
    },
    halesLactationRating: 'L1',
    relativeInfantDosePercent: 0.1,
    breastfeedingSummary: 'Mineral esensial utama dalam ASI. Aman dan sangat dianjurkan untuk ibu menyusui.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Calcium Lactate (Kalk)'],
    clinicalRecommendations: 'Dosis profilaksis preeklampsia: 1.5-2.0 g kalsium elemental/hari terbagi 3 kali pemberian bersama makanan. Jarakkan pemberian minimal 2 jam dari konsumsi Tablet Tambah Darah (TTD Besi) karena saling menghambat absorpsi.',
    references: 'WHO Guideline: Calcium Supplementation in Pregnant Women 2018 & POGI Konsensus Preeklampsia 2023'
  },
  {
    id: 'preg-retinol',
    name: 'Retinol (Vitamin A)',
    genericName: 'Retinol / Vitamin A',
    category: 'Vitamin Larut Lemak',
    brandNames: ['Vitamin A Biru 100.000 IU', 'Vitamin A Merah 200.000 IU'],
    fdaCategory: 'A',
    pllrSummary: 'Kategori A bila dikonsumsi sesuai Recommended Daily Allowance (RDA <5.000 IU/hari). Kategori X KONTRAINDIKASI MUTLAK bila dosis tinggi (>10.000 IU/hari) karena memicu embriopati asam retinoat berat.',
    trimesterRisks: {
      trimester1: 'Dosis tinggi (>10.000 IU/hari) TERATOGENIK: Malformasi kranial neural crest, mikrotia, mikrognatia, kelainan arkus aorta jantung, dan defek SSP.',
      trimester2: 'Gunakan hanya dosis fisiologis antenatal (maksimal 3.000-5.000 IU/hari) atau dalam bentuk beta-karoten yang aman.',
      trimester3: 'Kapsul dosis tinggi (200.000 IU) DILARANG KERAS sebelum persalinan, hanya diberikan pascasalin untuk ibu nifas.'
    },
    halesLactationRating: 'L2',
    relativeInfantDosePercent: 2.1,
    breastfeedingSummary: 'Kapsul Vitamin A dosis tinggi (200.000 IU x 2 kali) SANGAT DIANJURKAN untuk ibu nifas (postpartum) guna memperkaya kadar vitamin A dalam ASI bagi bayi.',
    teratogenicAlert: 'Embriopati Retinoid: Celah palatum, mikrotia telinga, kelainan kardiak trunkus arteriosus, hidrosefalus.',
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Beta-Carotene (Provitamin A alami)'],
    clinicalRecommendations: 'Ibu hamil dilarang minum kapsul vitamin A program nifas (kapsul merah/biru). Pastikan multivitamin kehamilan tidak melebihi 5.000 IU vitamin A per tablet.',
    references: 'WHO Guideline on Vitamin A Supplementation in Pregnant Women & Teratology Society'
  },

  // =========================================================================
  // 4. ANTIINFEKSI, ANTIBIOTIK, ANTIVIRUS & TOKSOPLASMOSIS
  // =========================================================================
  {
    id: 'preg-spiramycin',
    name: 'Spiramycin',
    genericName: 'Spiramycin',
    category: 'Antibakteri Makrolida / Profilaksis Toksoplasmosis Gestasional',
    brandNames: ['Rovamycin', 'Spiradan', 'Spiramisin Generik'],
    fdaCategory: 'B',
    pllrSummary: 'Antibiotik makrolida pilihan pertama di seluruh dunia untuk mencegah transmisi vertikal parasit Toxoplasma gondii dari ibu ke janin pada infeksi toksoplasmosis akut maternal trimester 1.',
    trimesterRisks: {
      trimester1: 'Sangat aman dan merupakan lini pertama mutlak saat diagnosis serokonversi IgM Toxoplasma positif terdeteksi.',
      trimester2: 'Dapat dilanjutkan jika amniosentesis PCR negatif toksoplasma. Jika PCR cairan amnion positif infeksi janin, ganti ke kombinasi Pyrimethamine + Sulfadiazine + Leucovorin.',
      trimester3: 'Aman untuk proteksi plasenta maternal.'
    },
    halesLactationRating: 'L2',
    relativeInfantDosePercent: 2.8,
    breastfeedingSummary: 'Terekskresi dalam ASI dalam konsentrasi rendah. Tidak ada efek merugikan dilaporkan pada bayi.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Azithromycin'],
    clinicalRecommendations: 'Dosis standar: 3 gram (9 MIU) per hari terbagi dalam 3 dosis (1 g tiap 8 jam) diminum kontinu hingga persalinan bila infeksi janin belum terjadi.',
    references: 'POGI Panduan TORCH Kehamilan 2023 & CDC Toxoplasmosis Guidelines'
  },
  {
    id: 'preg-cefalexin',
    name: 'Cefalexin',
    genericName: 'Cefalexin / Cephalexin',
    category: 'Antibakteri Sefalosporin Generasi ke-1',
    brandNames: ['Ospexin', 'Cefalexin Generik'],
    fdaCategory: 'B',
    pllrSummary: 'Sefalosporin oral lini pertama yang sangat aman untuk penanganan bakteriuria asimtomatik, sistitis akut/ISK, dan infeksi kulit jaringan lunak pada wanita hamil.',
    trimesterRisks: {
      trimester1: 'Aman, data dari ribuan kehamilan tidak menunjukkan peningkatan risiko malformasi kongenital.',
      trimester2: 'Aman dan efektif.',
      trimester3: 'Aman, klirens ginjal maternal meningkat sehingga dosis mungkin perlu dioptimalkan.'
    },
    halesLactationRating: 'L1',
    relativeInfantDosePercent: 0.5,
    breastfeedingSummary: 'Hanya sedikit obat yang masuk ke dalam ASI (<1% RID). Pilihan antibiotik paling aman untuk ibu menyusui.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Amoxicillin-Clavulanate', 'Cefixime'],
    clinicalRecommendations: 'Dosis lazim: 500 mg tiap 6 jam atau 1000 mg tiap 12 jam selama 5-7 hari untuk terapi ISK gestasional.',
    references: 'ACOG Practice Bulletin No. 222 (Urinary Tract Infections in Pregnancy) & Hale 2023'
  },
  {
    id: 'preg-cefotaxime',
    name: 'Cefotaxime',
    genericName: 'Cefotaxime Sodium',
    category: 'Antibakteri Sefalosporin Generasi ke-3 Parenteral',
    brandNames: ['Claforan', 'Taxegram', 'Cefotaxime Generik'],
    fdaCategory: 'B',
    pllrSummary: 'Sefalosporin generasi ke-3 parenteral yang sangat aman untuk infeksi bakteri berat intra-abdominal, pielonefritis akut, dan korioamnionitis pada kehamilan.',
    trimesterRisks: {
      trimester1: 'Aman, tidak teratogenik.',
      trimester2: 'Aman dan menembus cairan amnion dengan baik untuk mengatasi infeksi intrauterine.',
      trimester3: 'Aman, pilihan utama pielonefritis akut maternal dan sepsis obstetri.'
    },
    halesLactationRating: 'L1',
    relativeInfantDosePercent: 0.3,
    breastfeedingSummary: 'Ekskresi ke dalam ASI sangat minimal dan tidak diserap secara signifikan oleh usus bayi.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Ceftriaxone', 'Ampicillin + Sulbactam'],
    clinicalRecommendations: 'Dosis: 1-2 gram IV tiap 8 jam. Pilihan utama untuk pielonefritis antepartum dengan demam tinggi.',
    references: 'Sanford Guide to Antimicrobial Therapy & Briggs 12th Ed'
  },
  {
    id: 'preg-tetracycline',
    name: 'Tetracycline',
    genericName: 'Tetracycline Hydrochloride',
    category: 'Antibakteri Tetrasiklin Spektrum Luas',
    brandNames: ['Tetrasiklin Generik', 'Super Tetra'],
    fdaCategory: 'D',
    pllrSummary: 'Kategori D FDA karena berikatan dengan kalsium pada tunas gigi dan matriks tulang janin yang sedang berkembang setelah minggu ke-16 kehamilan, menyebabkan pewarnaan permanen gigi janin (kuning-abu-abu-cokelat) dan hipoplasia email gigi.',
    trimesterRisks: {
      trimester1: 'Risiko malformasi mayor rendah, namun dapat menyebabkan hepatotoksisitas akut pada ibu hamil.',
      trimester2: 'KONTRAINDIKASI. Mulai minggu ke-16 mengendap di kalsium tulang dan tunas gigi janin.',
      trimester3: 'KONTRAINDIKASI MUTLAK. Pewarnaan gigi permanen dan penghambatan reversibel pertumbuhan tulang fibula janin.'
    },
    halesLactationRating: 'L2',
    relativeInfantDosePercent: 1.5,
    breastfeedingSummary: 'Penggunaan jangka pendek (<=7-14 hari) kompatibel karena kalsium dalam ASI membentuk kelat yang menghambat absorpsi di usus bayi. Hindari penggunaan kronis.',
    teratogenicAlert: 'Diskolorasi permanen gigi desidui dan permanen, hipoplasia email, retardasi osteogenesis tulang panjang.',
    isContraindicatedInPregnancy: true,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Amoxicillin', 'Azithromycin', 'Cefixime'],
    clinicalRecommendations: 'HINDARI PADA KEHAMILAN TERUTAMA SETELAH MINGGU KE-16. Bila membutuhkan terapi antibakteri intraseluler, gunakan Azithromycin atau Erythromycin.',
    references: 'FDA Drug Safety Information & American Academy of Pediatrics (AAP)'
  },
  {
    id: 'preg-streptomycin',
    name: 'Streptomycin',
    genericName: 'Streptomycin Sulfate',
    category: 'Antibakteri Aminoglikosida / OAT Lini ke-2',
    brandNames: ['Streptomisin Generik'],
    fdaCategory: 'D',
    pllrSummary: 'Aminoglikosida parenteral yang menembus sawar plasenta dan terakumulasi dalam jaringan janin, menyebabkan ototoksisitas kranial VIII dan ketulian janin permanen (ototoxicity sensorineural bilateral congenital).',
    trimesterRisks: {
      trimester1: 'Risiko toksisitas koklea janin saat diferensiasi telinga dalam.',
      trimester2: 'KONTRAINDIKASI. Kerusakan stria vaskularis koklea dan organ vestibuler janin.',
      trimester3: 'KONTRAINDIKASI MUTLAK. Sekitar 10-15% bayi yang terpapar mengalami kehilangan pendengaran sensorineural permanen.'
    },
    halesLactationRating: 'L3',
    relativeInfantDosePercent: 1.2,
    breastfeedingSummary: 'Molekul polar tidak diserap oral oleh usus bayi. Kompatibel dengan pemantauan mikrobiota usus bayi.',
    teratogenicAlert: 'Ketulian saraf kongenital bilateral (kerusakan N. statoacusticus N. VIII) dan nefrotoksisitas janin.',
    isContraindicatedInPregnancy: true,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Regimen TBC bebas Streptomisin: Rifampisin + Isoniazid + Etambutol (RH-E)'],
    clinicalRecommendations: 'KONTRAINDIKASI MUTLAK PADA TBC KEHAMILAN. Panduan Nasional TBC Kemenkes & WHO menetapkan Streptomisin TIDAK BOLEH digunakan pada ibu hamil.',
    references: 'WHO Guidelines for the Treatment of Tuberculosis & Kemenkes RI 2023'
  },
  {
    id: 'preg-valaciclovir',
    name: 'Valaciclovir',
    genericName: 'Valaciclovir Hydrochloride',
    category: 'Antivirus Analog Nukleosida Prodrug Acyclovir',
    brandNames: ['Valtrex', 'Inlacyl', 'Valaciclovir Generik'],
    fdaCategory: 'B',
    pllrSummary: 'L-valyl ester prodrug dari Acyclovir dengan bioavailabilitas oral 3-5 kali lebih tinggi. Pilihan utama untuk terapi supresif herpes genital rekuren menjelang persalinan guna mencegah transmisi herpes neonatal dan menghindari operasi sesar.',
    trimesterRisks: {
      trimester1: 'Aman, data register kehamilan asiklovir CDC tidak menunjukkan peningkatan cacat bawaan.',
      trimester2: 'Aman untuk infeksi herpes simpleks genital akut.',
      trimester3: 'Sangat dianjurkan mulai minggu ke-36 (500 mg 2x/hari) untuk profilaksis transmisi transmaternal saat partus pervaginam.'
    },
    halesLactationRating: 'L2',
    relativeInfantDosePercent: 1.5,
    breastfeedingSummary: 'Dimetabolisme cepat menjadi asiklovir yang terekskresi minimal dalam ASI. Sangat aman untuk ibu menyusui.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Acyclovir'],
    clinicalRecommendations: 'Dosis supresif pencegahan transmisi partus: 500 mg 2 kali sehari mulai minggu ke-36 hingga persalinan. Pastikan hidrasi maternal adekuat.',
    references: 'ACOG Practice Bulletin No. 220 (Management of Genital Herpes in Pregnancy) & CDC STI 2021'
  },
  {
    id: 'preg-sulfadiazine',
    name: 'Sulfadiazine',
    genericName: 'Sulfadiazine',
    category: 'Antibakteri Sulfonamida Sistemik',
    brandNames: ['Sulfadiazine Generik'],
    fdaCategory: 'C',
    pllrSummary: 'Sulfonamida yang digunakan bersama Pyrimethamine dan Asam Folinat (Leucovorin) untuk terapi infeksi janin toksoplasmosis kongenital (Trimester 2 & 3). Kontraindikasi mendekati aterm karena mendesak bilirubin dari albumin memicu kernikterus.',
    trimesterRisks: {
      trimester1: 'Hindari penggunaan trimester 1 jika memungkinkan (gunakan Spiramycin).',
      trimester2: 'Pilihan utama terapi bila PCR cairan amnion terkonfirmasi positif Toxoplasma.',
      trimester3: 'HENTIKAN minimal 2-4 minggu sebelum persalinan aterm karena risiko kernikterus neonatal.'
    },
    halesLactationRating: 'L3',
    relativeInfantDosePercent: 5.8,
    breastfeedingSummary: 'Ekskresi sedang ke ASI. Hindari jika bayi mengalami ikterus, prematur, atau memiliki defisiensi G6PD (risiko hemolisis).',
    teratogenicAlert: 'Kernikterus (ensefalopati bilirubin) dan anemia hemolitik janin bila digunakan menjelang partus.',
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Spiramycin (pada TM 1 atau aterm)'],
    clinicalRecommendations: 'Selalu kombinasikan dengan Leucovorin (Calcium Folinate 10-25 mg/hari) untuk mencegah supresi sumsum tulang maternal dan janin.',
    references: 'CDC Guidelines for Congenital Toxoplasmosis & POGI Konsensus Infeksi Kongenital'
  },
  {
    id: 'preg-sulfasalazine',
    name: 'Sulfasalazine',
    genericName: 'Sulfasalazine',
    category: 'Antiinflamasi Usus & DMARD / IBD & Artritis',
    brandNames: ['Sulfitis', 'Lazafin', 'Salofalk (Mesalazine)'],
    fdaCategory: 'B',
    pllrSummary: 'Kombinasi 5-ASA dan sulfapiridin untuk mempertahankan remisi Inflammatory Bowel Disease (Kolitis Ulseratif & Crohn\'s Disease) pada kehamilan. Menghambat absorpsi folat sehingga wajib disertai suplementasi asam folat ekstra.',
    trimesterRisks: {
      trimester1: 'Aman, wajib disertai Asam Folat 2-4 mg/hari untuk mencegah defek tabung saraf akibat inhibisi absorpsi folat.',
      trimester2: 'Aman mempertahankan remisi IBD.',
      trimester3: 'Aman. Risiko kernikterus teoritis sangat rendah pada dosis lazim (<=2-3 g/hari).'
    },
    halesLactationRating: 'L2',
    relativeInfantDosePercent: 0.8,
    breastfeedingSummary: 'Kadar metabolit aktif dalam ASI rendah. Kompatibel dengan menyusui; pantau feses bayi terhadap tinja berdarah encer.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Mesalazine'],
    clinicalRecommendations: 'Dosis: 2-3 gram/hari terbagi. Suplementasi Asam Folat 2-4 mg/hari mutlak diwajibkan sepanjang kehamilan.',
    references: 'ECCO Guidelines on Reproduction and Pregnancy in IBD & AGA Clinical Care Pathway'
  },
  {
    id: 'preg-metronidazole',
    name: 'Metronidazole',
    genericName: 'Metronidazole',
    category: 'Antiprotozoa & Antibakteri Anaerob',
    brandNames: ['Flagyl', 'Trichodazol', 'Metronidazole Generik'],
    fdaCategory: 'B',
    pllrSummary: 'Lini pertama terapi Trikomoniasis vaginalis dan Bakterial Vaginosis (BV) pada kehamilan. Mengatasi BV antepartum penting untuk mencegah ketuban pecah dini (KPD) dan persalinan prematur.',
    trimesterRisks: {
      trimester1: 'Aman. Meta-analisis kohort prospektif puluhan ribu kehamilan membuktikan tidak ada peningkatan risiko teratogenesis mayor pada trimester 1.',
      trimester2: 'Aman dan efektif mengatasi keputihan patologis BV/Trikomoniasis.',
      trimester3: 'Aman hingga persalinan.'
    },
    halesLactationRating: 'L2',
    relativeInfantDosePercent: 7.2,
    breastfeedingSummary: 'Terekskresi dalam ASI. Kompatibel dengan menyusui dosis terbagi oral. Jika menggunakan dosis tunggal 2 gram, tunda menyusui 12-24 jam.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Clindamycin oral/topikal vaginal'],
    clinicalRecommendations: 'Regimen standar BV kehamilan: Metronidazole oral 500 mg 2 kali sehari selama 7 hari. HINDARI konsumsi alkohol bersamaan karena reaksi disulfiram.',
    references: 'CDC STI Treatment Guidelines 2021 & ACOG Practice Bulletin No. 215'
  },
  {
    id: 'preg-clindamycin',
    name: 'Clindamycin',
    genericName: 'Clindamycin Hydrochloride / Phosphate',
    category: 'Antibakteri Linkosamid',
    brandNames: ['Dalacin C', 'Clinika', 'Clindamycin Generik'],
    fdaCategory: 'B',
    pllrSummary: 'Antibakteri pilihan utama infeksi anaerob, abses odontogenik, profilaksis alergi penisilin pada korioamnionitis, serta alternatif vaginosis bakterial kehamilan.',
    trimesterRisks: {
      trimester1: 'Aman, tidak teratogenik.',
      trimester2: 'Aman, dapat digunakan secara oral atau krim vagina 2%.',
      trimester3: 'Aman, pilihan alternatif pencegahan infeksi Streptococcus Grup B (GBS) pada ibu alergi penisilin anafilaksis.'
    },
    halesLactationRating: 'L2',
    relativeInfantDosePercent: 1.5,
    breastfeedingSummary: 'Ekskresi ke ASI rendah (<2% RID). Pantau bayi terhadap potensi diare atau kandidiasis oral.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Amoxicillin-Clavulanate', 'Metronidazole'],
    clinicalRecommendations: 'Dosis oral: 300 mg tiap 6-8 jam. Untuk BV: Clindamycin krim vagina 2% sebelum tidur selama 7 hari.',
    references: 'ACOG Practice Bulletin No. 199 (Use of Prophylactic Antibiotics in Labor and Delivery)'
  },
  {
    id: 'preg-azithromycin',
    name: 'Azithromycin',
    genericName: 'Azithromycin Dihydrate',
    category: 'Antibakteri Makrolida Azalida Spektrum Luas',
    brandNames: ['Zithromax', 'Zicho', 'Azithromycin Generik'],
    fdaCategory: 'B',
    pllrSummary: 'Makrolida lini pertama rekomendasi CDC dan WHO untuk infeksi menular seksual Chlamydia trachomatis pada kehamilan (menggantikan Doksisiklin yang kontraindikasi).',
    trimesterRisks: {
      trimester1: 'Aman, tidak meningkatkan risiko kelainan kongenital mayor.',
      trimester2: 'Aman dan sangat efektif dengan kepatuhan tinggi (dosis tunggal).',
      trimester3: 'Aman, pilihan utama pencegahan transmisi klamidia konjungtivitis/pneumonia neonatal.'
    },
    halesLactationRating: 'L2',
    relativeInfantDosePercent: 3.5,
    breastfeedingSummary: 'Konsentrasi ASI rendah. Kompatibel dengan menyusui; pantau bayi terhadap feses encer.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Amoxicillin (500 mg 3x/hari 7 hari)', 'Erythromycin'],
    clinicalRecommendations: 'Dosis klamidia genital kehamilan: 1 gram oral dosis tunggal (Single Dose). Pasangan seksual wajib diobati bersamaan.',
    references: 'CDC STI Treatment Guidelines 2021 & WHO Guidelines on Chlamydia in Pregnancy'
  },
  {
    id: 'preg-gentamicin',
    name: 'Gentamicin',
    genericName: 'Gentamicin Sulfate',
    category: 'Antibakteri Aminoglikosida Parenteral',
    brandNames: ['Garamycin', 'Gentamerck', 'Gentamicin Generik'],
    fdaCategory: 'D',
    pllrSummary: 'Aminoglikosida parenteral untuk infeksi gram negatif berat (sepsis puerperalis, korioamnionitis, pielonefritis). Kategori D diberikan karena potensi risiko ototoksisitas dan nefrotoksisitas janin bila kadar serum maternal tidak dipantau.',
    trimesterRisks: {
      trimester1: 'Gunakan hanya jika ada indikasi infeksi berat yang mengancam jiwa ibu.',
      trimester2: 'Menembus plasenta. Memerlukan penyesuaian dosis dan pemantauan fungsi ginjal.',
      trimester3: 'Kombinasi standar bersama Ampicillin untuk terapi korioamnionitis intrapartum.'
    },
    halesLactationRating: 'L2',
    relativeInfantDosePercent: 1.2,
    breastfeedingSummary: 'Tidak diserap secara signifikan melalui saluran cerna bayi. Aman untuk ibu menyusui.',
    teratogenicAlert: 'Potensi ototoksisitas kranial VIII dan kerusakan tubulus ginjal janin pada kadar toksik.',
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Cefotaxime', 'Ceftriaxone'],
    clinicalRecommendations: 'Gunakan dosis sekali sehari (Once Daily Dosing 5 mg/kgBB IV) untuk efikasi maksimal dan toksisitas minimal. Pantau kreatinin serum dan kadar palung (trough level <1 mcg/mL).',
    references: 'ACOG Committee Opinion No. 712 & Briggs Drugs in Pregnancy and Lactation'
  },

  // =========================================================================
  // 5. ANALGESIK NSAID & OPIOID
  // =========================================================================
  {
    id: 'preg-ketorolac',
    name: 'Ketorolac',
    genericName: 'Ketorolac Tromethamine',
    category: 'Analgesik NSAID Poten / Nyeri Akut',
    brandNames: ['Toradol', 'Ketovel', 'Scelto', 'Ketorolac Generik'],
    fdaCategory: 'C',
    pllrSummary: 'NSAID poten untuk nyeri akut pascaoperasi. Kategori C pada trimester 1 & 2; Kategori D KONTRAINDIKASI MUTLAK pada Trimester 3 dan menjelang persalinan karena memicu penutupan prematur duktus arteriosus Botalli, oligohidramnion berat, disfungsi ginjal janin, serta perdarahan uterus pascasalin.',
    trimesterRisks: {
      trimester1: 'Risiko keguguran spontan ringan pada penggunaan jangka panjang.',
      trimester2: 'Hanya bila analgesik lain gagal, batasi maksimal 48 jam.',
      trimester3: 'KONTRAINDIKASI MUTLAK. Penutupan dini duktus arteriosus janin, hipertensi pulmonal persisten neonatus (PPHN), anuria/oligohidramnion, dan inersia uteri.'
    },
    halesLactationRating: 'L2',
    relativeInfantDosePercent: 0.4,
    breastfeedingSummary: 'Ekskresi ke dalam ASI sangat minimal (<0.5% RID). Sangat aman digunakan untuk analgesia pasca-seksio sesarea (SC) jangka pendek (maksimal 48 jam).',
    teratogenicAlert: 'Konstriksi prematur duktus arteriosus Botalli, disfungsi ginjal janin / oligohidramnion bila digunakan pada TM 3.',
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Paracetamol IV/Oral', 'Ibuprofen (Pascasalin / Laktasi)'],
    clinicalRecommendations: 'DILARANG KERAS PADA TRIMESTER 3. Namun SANGAT DIANJURKAN sebagai multimodal analgesia pasca-SC saat menyusui selama 24-48 jam pertama.',
    references: 'FDA NSAID Drug Safety Communication 2020 & PROSPECT Guidelines for Post-Caesarean Pain'
  },
  {
    id: 'preg-meloxicam',
    name: 'Meloxicam',
    genericName: 'Meloxicam',
    category: 'Analgesik NSAID Selektif COX-2',
    brandNames: ['Mobic', 'Melocid', 'Meloxicam Generik'],
    fdaCategory: 'C',
    pllrSummary: 'NSAID turunan oksikam dengan waktu paruh panjang. Kategori D KONTRAINDIKASI MUTLAK pada trimester 3 (>20-30 minggu) terkait risiko oligohidramnion dan gagal jantung janin.',
    trimesterRisks: {
      trimester1: 'Gunakan Parasetamol sebagai pilihan utama.',
      trimester2: 'Hindari setelah usia kehamilan 20 minggu (peringatan FDA 2020: disfungsi ginjal janin).',
      trimester3: 'KONTRAINDIKASI MUTLAK.'
    },
    halesLactationRating: 'L3',
    relativeInfantDosePercent: 1.5,
    breastfeedingSummary: 'Waktu paruh panjang (20 jam). Ibu menyusui lebih dianjurkan menggunakan Ibuprofen yang berwaktu paruh singkat.',
    teratogenicAlert: 'Penutupan dini duktus arteriosus janin dan kerusakan ginjal janin pada usia kehamilan >20 minggu.',
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Paracetamol', 'Ibuprofen (Laktasi)'],
    clinicalRecommendations: 'FDA mewajibkan menghindari semua NSAID mulai usia kehamilan 20 minggu karena risiko oligohidramnion janin.',
    references: 'FDA Drug Safety Communication: FDA warns that taking NSAIDs at 20 weeks or later can cause rare kidney problems in unborn babies (2020)'
  },
  {
    id: 'preg-tramadol',
    name: 'Tramadol',
    genericName: 'Tramadol Hydrochloride',
    category: 'Analgesik Opioid Sintetik Kerja Sentral',
    brandNames: ['Tramal', 'Contram', 'Tramadol Generik'],
    fdaCategory: 'C',
    pllrSummary: 'Analgesik opioid atipikal agonis mu-opioid dan inhibitor reuptake serotonin/norepinefrin. Penggunaan jangka panjang selama kehamilan memicu Neonatal Abstinence Syndrome (NAS). FDA Black Box Warning: Ibu menyusui yang merupakan metabolizer ultra-rapid CYP2D6 berisiko menghasilkan kadar metabolit aktif M1 berlebih pada ASI yang memicu depresi pernapasan fatal pada bayi.',
    trimesterRisks: {
      trimester1: 'Tidak ada malformasi teratogenik mayor terbukti; gunakan jika analgesik non-opioid gagal.',
      trimester2: 'Batasi penggunaan jangka pendek untuk nyeri hebat.',
      trimester3: 'Penggunaan teratur memicu depresi napas neonatus dan sindrom putus obat neonatal (tremor, irritabilitas, kejang).'
    },
    halesLactationRating: 'L3',
    relativeInfantDosePercent: 2.8,
    breastfeedingSummary: 'FDA memperingatkan bahaya sedasi berlebih dan depresi pernapasan fatal pada bayi jika ibu memiliki varian genetik CYP2D6 ultra-rapid metabolizer. Gunakan alternatif yang lebih aman.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Paracetamol', 'Ibuprofen', 'Morphine jangka pendek'],
    clinicalRecommendations: 'Hindari penggunaan rutin saat menyusui. Jika diberikan pascasalin, pantau bayi ketat terhadap kesulitan bernapas, lemas ekstrem, dan kesulitan menyusu.',
    references: 'FDA Drug Safety Communication 2017: Restricting codeine and tramadol in children and breastfeeding women'
  },
  {
    id: 'preg-codeine',
    name: 'Codeine',
    genericName: 'Codeine Phosphate',
    category: 'Analgesik Opioid & Antitusif Narkotika',
    brandNames: ['Codikaf', 'Codipront', 'Codeine Generik'],
    fdaCategory: 'C',
    pllrSummary: 'Prodrug opioid yang dimetabolisme oleh CYP2D6 menjadi morfin. FDA menetapkan BLACK BOX WARNING KONTRAINDIKASI saat menyusui karena risiko kematian neonatal akibat depresi pernapasan pada ibu metabolizer ultra-rapid CYP2D6.',
    trimesterRisks: {
      trimester1: 'Penggunaan jangka pendek aman dari cacat bawaan mayor.',
      trimester2: 'Dapat digunakan jangka pendek bila parasetamol tidak memadai.',
      trimester3: 'Penggunaan kronis menjelang persalinan memicu Neonatal Abstinence Syndrome (NAS) dan depresi pernapasan pascapersalinan.'
    },
    halesLactationRating: 'L4',
    relativeInfantDosePercent: 8.5,
    breastfeedingSummary: 'KONTRAINDIKASI FDA SAAT MENYUSUI. Telah dilaporkan kasus fatal kematian bayi akibat intoksikasi morfin dari ASI ibu pengguna kodein.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: true,
    safeAlternatives: ['Paracetamol', 'Ibuprofen (Laktasi)', 'Dextromethorphan (Batuk)'],
    clinicalRecommendations: 'KONTRAINDIKASI PADA IBU MENYUSUI. Untuk batuk pada kehamilan, gunakan Dextromethorphan atau madu/gliserol. Untuk nyeri pascasalin, gunakan Parasetamol + Ibuprofen.',
    references: 'FDA Drug Safety Communication 2017 & Briggs 12th Ed'
  },
  {
    id: 'preg-morphine',
    name: 'Morphine',
    genericName: 'Morphine Sulfate',
    category: 'Analgesik Opioid Murni / Nyeri Hebat',
    brandNames: ['MST Continus', 'Morphine Injeksi Kimia Farma'],
    fdaCategory: 'C',
    pllrSummary: 'Standar emas analgesik opioid untuk nyeri berat persalinan dan pascaoperasi bedah sesar. Lebih disukai dibanding kodein/tramadol pada ibu menyusui karena metabolismenya tidak bergantung pada polimorfisme genetik CYP2D6.',
    trimesterRisks: {
      trimester1: 'Aman untuk penggunaan akut.',
      trimester2: 'Aman untuk analgesia nyeri hebat jangka pendek.',
      trimester3: 'Bila diberikan mendekati waktu persalinan, siapkan Naloxone untuk resusitasi depresi napas neonatus.'
    },
    halesLactationRating: 'L3',
    relativeInfantDosePercent: 5.5,
    breastfeedingSummary: 'Bioavailabilitas oral morfin pada bayi rendah (<20-30%). Kompatibel untuk analgesia pasca-SC jangka pendek (1-3 hari); pantau sedasi bayi.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Paracetamol IV', 'Fentanyl IV'],
    clinicalRecommendations: 'Pemberian morfin intratekal/epidural saat operasi SC memberikan analgesia unggul dengan transfer sistemik ke ASI yang jauh lebih rendah dibanding infus IV kontinu.',
    references: 'ACOG Practice Bulletin Postpartum Pain Management 2021 & Hale 2023'
  },

  // =========================================================================
  // 6. KORTIKOSTEROID SISTEMIK
  // =========================================================================
  {
    id: 'preg-methylprednisolone',
    name: 'Methylprednisolone',
    genericName: 'Methylprednisolone Sodium Succinate / Acetate',
    category: 'Kortikosteroid Glukokortikoid Antiinflamasi Sistemik',
    brandNames: ['Medixon', 'Solu-Medrol', 'Lameson', 'Methylprednisolone Generik'],
    fdaCategory: 'C',
    pllrSummary: 'Kortikosteroid sistemik pilihan utama untuk eksaserbasi asma akut berat, lupus eritematosus sistemik (SLE) kehamilan, dan penyakit autoimun maternal. Diinaktivasi secara efisien (sekitar 85-90%) oleh enzim 11-beta-HSD2 plasenta sehingga meminimalkan paparan janin.',
    trimesterRisks: {
      trimester1: 'Peningkatan kecil risiko celah bibir/palatum pada penggunaan dosis tinggi harian (sekitar 1-2 per 1000).',
      trimester2: 'Aman dan efektif untuk mengontrol kekambuhan penyakit autoimun aktif.',
      trimester3: 'Aman. Pantau tekanan darah ibu (risiko hipertensi) dan skrining diabetes gestasional.'
    },
    halesLactationRating: 'L2',
    relativeInfantDosePercent: 0.8,
    breastfeedingSummary: 'Kadar dalam ASI sangat rendah (<1% RID). Jika dosis tinggi (>40 mg/hari), tunda menyusui 2-4 jam pascakonsumsi untuk meminimalkan paparan.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Prednisone', 'Budesonide (Topikal/Inhaler)'],
    clinicalRecommendations: 'Gunakan dosis efektif terendah untuk mengontrol aktivitas autoimun. Jangan menghentikan steroid mendadak untuk menghindari krisis adrenal.',
    references: 'ACR Guideline for the Management of Reproductive Health in Rheumatic and Musculoskeletal Diseases 2020'
  },
  {
    id: 'preg-prednisone',
    name: 'Prednisone',
    genericName: 'Prednisone',
    category: 'Kortikosteroid Glukokortikoid Imunosupresan Oral',
    brandNames: ['Prednisone Generik'],
    fdaCategory: 'C',
    pllrSummary: 'Prodrug glukokortikoid oral yang diubah menjadi prednisolon di hepar. Merupakan kortikosteroid oral paling banyak diteliti dan paling aman pada kehamilan karena sawar plasenta 11-beta-HSD2 memblokir hingga 90% transfer ke janin.',
    trimesterRisks: {
      trimester1: 'Risiko celah orofasial sangat kecil pada dosis lazim.',
      trimester2: 'Sangat aman untuk mengontrol nefritis lupus dan trombositopenia imun (ITP) kehamilan.',
      trimester3: 'Aman, pantau glukosa darah maternal.'
    },
    halesLactationRating: 'L2',
    relativeInfantDosePercent: 0.7,
    breastfeedingSummary: 'Ekskresi ke ASI sangat rendah. Sangat kompatibel dengan menyusui.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Methylprednisolone'],
    clinicalRecommendations: 'Pilihan steroid oral lini pertama kehamilan. Pada ibu hamil dengan penyakit autoimun aktif, risiko penyakit yang tidak diobati jauh lebih berbahaya bagi janin dibanding terapi prednison.',
    references: 'Briggs Drugs in Pregnancy and Lactation & EULAR recommendations for women\'s health in SLE'
  },

  // =========================================================================
  // 7. ANTIEMETIK, SALURAN CERNA & LAKSATIF
  // =========================================================================
  {
    id: 'preg-dimenhydrinate',
    name: 'Dimenhydrinate',
    genericName: 'Dimenhydrinate',
    category: 'Antihistamin H1 & Antiemetik / Morning Sickness',
    brandNames: ['Dramamine', 'Antimo'],
    fdaCategory: 'B',
    pllrSummary: 'Kombinasi diphenhydramine dan 8-chlorotheophylline. Rekomendasi lini pertama POGI dan ACOG untuk mual muntah kehamilan (NVP / Morning Sickness) yang tidak membaik dengan Vitamin B6.',
    trimesterRisks: {
      trimester1: 'Sangat aman, studi epidemiologi membuktikan tidak ada risiko kelainan bawaan janin.',
      trimester2: 'Aman untuk mabuk perjalanan dan emesis.',
      trimester3: 'Aman; efek samping sedasi maternal.'
    },
    halesLactationRating: 'L2',
    relativeInfantDosePercent: 1.5,
    breastfeedingSummary: 'Jumlah minimal diekskresikan ke ASI. Pantau potensi kantuk ringan pada bayi.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Vitamin B6 (Pyridoxine)', 'Promethazine'],
    clinicalRecommendations: 'Dosis: 50-100 mg tiap 4-6 jam per oral (maksimal 200 mg/hari jika dikombinasikan). Pilihan lini pertama bersama Piridoksin.',
    references: 'ACOG Practice Bulletin No. 189 (Nausea and Vomiting of Pregnancy) & POGI 2023'
  },
  {
    id: 'preg-promethazine',
    name: 'Promethazine',
    genericName: 'Promethazine Hydrochloride',
    category: 'Antihistamin H1 Fenotiazin / Antiemetik Sedatif',
    brandNames: ['Phenergan', 'Promethazine Generik'],
    fdaCategory: 'C',
    pllrSummary: 'Antiemetik lini kedua untuk mual muntah refrakter dan hiperemesis gravidarum. Memiliki efek sedasi kuat yang membantu pasien beristirahat.',
    trimesterRisks: {
      trimester1: 'Aman untuk terapi hiperemesis gravidarum.',
      trimester2: 'Aman untuk mual persisten.',
      trimester3: 'Hindari penggunaan dosis besar menjelang persalinan karena memicu depresi napas neonatus.'
    },
    halesLactationRating: 'L3',
    relativeInfantDosePercent: 2.2,
    breastfeedingSummary: 'Dapat menurunkan sekresi prolaktin dan memicu rasa kantuk pada bayi. Hindari penggunaan kronis.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Dimenhydrinate', 'Ondansetron', 'Metoclopramide'],
    clinicalRecommendations: 'Dosis: 12.5 - 25 mg oral/rektal/IV tiap 4-6 jam. Jangan berikan secara intra-arterial atau subkutan (risiko nekrosis jaringan).',
    references: 'RCOG Green-top Guideline No. 69 (Management of Nausea and Vomiting of Pregnancy)'
  },
  {
    id: 'preg-metoclopramide',
    name: 'Metoclopramide',
    genericName: 'Metoclopramide Hydrochloride',
    category: 'Prokinetik & Antagonis Dopamin D2 Antiemetik',
    brandNames: ['Primperan', 'Sotatic', 'Plasil', 'Metoclopramide Generik'],
    fdaCategory: 'B',
    pllrSummary: 'Prokinetik gastrointestinal dan antiemetik lini kedua yang sangat efektif untuk hiperemesis gravidarum dan gastroparesis kehamilan.',
    trimesterRisks: {
      trimester1: 'Sangat aman, studi kohort pada >30.000 kehamilan tidak menemukan peningkatan malformasi kongenital.',
      trimester2: 'Aman dan efektif mempercepat pengosongan lambung.',
      trimester3: 'Aman, batasi maksimal 5 hari untuk mencegah reaksi ekstrapiramidal maternal.'
    },
    halesLactationRating: 'L2',
    relativeInfantDosePercent: 4.5,
    breastfeedingSummary: 'Ekskresi ke ASI moderat namun aman. Kerap digunakan off-label sebagai galaktagog (peningkat produksi ASI via stimulasi pelepasan prolaktin).',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Ondansetron', 'Dimenhydrinate'],
    clinicalRecommendations: 'Dosis: 10 mg 3 kali sehari 30 menit sebelum makan (maksimal 5 hari). Waspadai gejala ekstrapiramidal (distonia akut) pada pasien muda.',
    references: 'EMA Safety Recommendations on Metoclopramide & ACOG Practice Bulletin No. 189'
  },
  {
    id: 'preg-domperidone',
    name: 'Domperidone',
    genericName: 'Domperidone Maleate',
    category: 'Prokinetik Saluran Cerna & Galaktagog',
    brandNames: ['Vometa', 'Motilium', 'Vomercon', 'Domperidone Generik'],
    fdaCategory: 'C',
    pllrSummary: 'Antagonis dopamin perifer yang tidak menembus sawar darah otak. Sering digunakan sebagai galaktagog lini pertama untuk merangsang produksi ASI ibu menyusui dengan suplai ASI rendah.',
    trimesterRisks: {
      trimester1: 'Data kehamilan manusia terbatas; lebih dianjurkan menggunakan Metoclopramide.',
      trimester2: 'Dapat digunakan jika prokinetik lain tidak efektif.',
      trimester3: 'Gunakan dengan kehati-hatian; hindari pada pasien dengan pemanjangan interval QT.'
    },
    halesLactationRating: 'L2',
    relativeInfantDosePercent: 0.1,
    breastfeedingSummary: 'Hanya 0.1% dosis maternal yang masuk ke dalam ASI. Standar emas galaktagog internasional untuk meningkatkan sekresi prolaktin.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Metoclopramide', 'Edukasi konseling laktasi non-farmakologis'],
    clinicalRecommendations: 'Dosis galaktagog: 10 mg 3 kali sehari selama 1-2 minggu di bawah evaluasi konselor laktasi. Kontraindikasi pada riwayat aritmia kardiak maternal (risiko perpanjangan QTc).',
    references: 'Academy of Breastfeeding Medicine (ABM) Clinical Protocol #9: Galactagogues'
  },
  {
    id: 'preg-lactulose',
    name: 'Lactulose',
    genericName: 'Lactulose',
    category: 'Laksatif Osmotik / Konstipasi Kehamilan',
    brandNames: ['Duphalac', 'Lactulax', 'Constipen', 'Lactulose Generik'],
    fdaCategory: 'B',
    pllrSummary: 'Disakarida sintetik non-absorbable yang merupakan obat pilihan lini pertama untuk konstipasi gestasional. Menarik air ke lumen usus tanpa diserap ke dalam peredaran darah sistemik ibu.',
    trimesterRisks: {
      trimester1: 'Sangat aman, 100% tidak diserap sistemik dan tidak menembus barier plasenta.',
      trimester2: 'Pilihan lini pertama melunakkan feses konstipasi gestasional.',
      trimester3: 'Sangat aman digunakan hingga persalinan dan masa nifas.'
    },
    halesLactationRating: 'L1',
    relativeInfantDosePercent: 0.0,
    breastfeedingSummary: 'Tidak diserap ke dalam ASI. Pilihan laksatif nomor 1 paling aman untuk ibu menyusui.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Serat Psyllium (Metamucil)', 'Docusate Sodium'],
    clinicalRecommendations: 'Dosis: 15-30 mL sekali sehari setelah makan. Pastikan ibu minum air putih minimal 2-2.5 liter per hari.',
    references: 'World Gastroenterology Organisation (WGO) Constipation Guideline & POGI'
  },
  {
    id: 'preg-bisacodyl',
    name: 'Bisacodyl',
    genericName: 'Bisacodyl',
    category: 'Laksatif Stimulan / Konstipasi Refrakter',
    brandNames: ['Dulcolax', 'Codylax', 'Bisacodyl Generik'],
    fdaCategory: 'C',
    pllrSummary: 'Laksatif stimulan pleksus mienterik kolon. Digunakan jangka pendek jika laksatif serat dan osmotik gagal mengatasi konstipasi kehamilan refrakter.',
    trimesterRisks: {
      trimester1: 'Aman untuk penggunaan akut 1-3 hari.',
      trimester2: 'Aman, absorpsi sistemik sangat minimal (<5%).',
      trimester3: 'Gunakan supositoria rektal atau oral jangka pendek. Hindari penggunaan kronis karena memicu dehidrasi dan kram abdomen.'
    },
    halesLactationRating: 'L2',
    relativeInfantDosePercent: 0.2,
    breastfeedingSummary: 'Metabolit aktif tidak diekskresikan dalam jumlah bermakna ke dalam ASI. Aman untuk ibu menyusui.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Lactulose', 'Psyllium'],
    clinicalRecommendations: 'Dosis: 5-10 mg oral malam hari atau 10 mg supositoria rektal. Batasi maksimal 3 hari berturut-turut.',
    references: 'American Gastroenterological Association (AGA) Guidelines'
  },
  {
    id: 'preg-docusate',
    name: 'Docusate Sodium',
    genericName: 'Docusate Sodium / Dioctyl Sodium Sulfosuccinate',
    category: 'Pelunak Feses (Stool Softener) / Hemoroid',
    brandNames: ['Colace', 'Dulcolact'],
    fdaCategory: 'C',
    pllrSummary: 'Surfaktan pelunak feses yang mempermudah penetrasi air dan lemak ke dalam massa tinja, sangat membantu mengatasi hemoroid gestasional dan nyeri saat defekasi.',
    trimesterRisks: {
      trimester1: 'Aman, absorpsi sistemik rendah.',
      trimester2: 'Aman untuk mencegah mengejan berlebih pada hemoroid.',
      trimester3: 'Aman untuk persiapan persalinan dan masa nifas.'
    },
    halesLactationRating: 'L2',
    relativeInfantDosePercent: 0.5,
    breastfeedingSummary: 'Kompatibel dengan menyusui pascasalin.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Lactulose', 'Psyllium'],
    clinicalRecommendations: 'Dosis: 100 mg 1-2 kali sehari bersama segelas air penuh.',
    references: 'Briggs Drugs in Pregnancy and Lactation & Hale 2023'
  },
  {
    id: 'preg-omeprazole',
    name: 'Omeprazole',
    genericName: 'Omeprazole Magnesium',
    category: 'Penghambat Pompa Proton (PPI) / GERD Berat',
    brandNames: ['Prilosec', 'Omevell', 'Losec', 'Omeprazole Generik'],
    fdaCategory: 'C',
    pllrSummary: 'PPI yang paling luas diteliti pada kehamilan. Direkomendasikan untuk GERD berat, esofagitis erosif, atau ulkus peptikum yang tidak membaik dengan antasida, sukralfat, atau antagonis H2.',
    trimesterRisks: {
      trimester1: 'Meta-analisis lebih dari 100.000 kehamilan membuktikan Omeprazole TIDAK meningkatkan risiko kelainan kongenital mayor.',
      trimester2: 'Aman dan sangat efektif meredakan heartburn gestasional berat.',
      trimester3: 'Aman hingga persalinan.'
    },
    halesLactationRating: 'L2',
    relativeInfantDosePercent: 1.1,
    breastfeedingSummary: 'Ekskresi ke ASI rendah (<1.5% RID) dan cepat rusak oleh asam lambung bayi bila ada sisa trace. Kompatibel dengan menyusui.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Famotidine', 'Sukralfat', 'Antasida (Al/Mg hidroksida)'],
    clinicalRecommendations: 'Dosis: 20 mg sekali sehari di pagi hari 30 menit sebelum makan. Gunakan bila terapi antasida/sukralfat/H2RA tidak adekuat.',
    references: 'American College of Gastroenterology (ACG) Management of GERD in Pregnancy & Hale 2023'
  },
  {
    id: 'preg-famotidine',
    name: 'Famotidine',
    genericName: 'Famotidine',
    category: 'Antagonis Reseptor H2 (H2RA) / GERD & Heartburn',
    brandNames: ['Pepcid', 'Famocid', 'Famotidine Generik'],
    fdaCategory: 'B',
    pllrSummary: 'Antagonis reseptor H2 pilihan utama pada kehamilan setelah penarikan Ranitidin (terkait cemaran NDMA). Sangat aman dan efektif untuk hiperasiditas dan refluks asam lambung.',
    trimesterRisks: {
      trimester1: 'Aman, tidak teratogenik.',
      trimester2: 'Pilihan lini pertama farmakologis untuk heartburn kehamilan persisten.',
      trimester3: 'Aman hingga persalinan.'
    },
    halesLactationRating: 'L1',
    relativeInfantDosePercent: 1.5,
    breastfeedingSummary: 'Terekskresi dalam ASI dalam konsentrasi rendah. Sangat aman untuk ibu menyusui.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Sukralfat', 'Omeprazole'],
    clinicalRecommendations: 'Dosis: 20 mg 1-2 kali sehari sebelum makan atau saat keluhan heartburn muncul.',
    references: 'ACG Guidelines on Gastrointestinal Disorders in Pregnancy & FDA 2021'
  },

  // =========================================================================
  // 8. RESPIRASI & ANTI-ALERGI
  // =========================================================================
  {
    id: 'preg-salbutamol',
    name: 'Salbutamol (Inhaler MDI)',
    genericName: 'Salbutamol / Albuterol Sulfate',
    category: 'Agonis Beta-2 Kerja Singkat (SABA) / Pelega Asma Akut',
    brandNames: ['Ventolin Inhaler', 'Astharol MDI', 'Salbutamol Inhaler'],
    fdaCategory: 'C',
    pllrSummary: 'Bronkodilator SABA pilihan nomor satu di dunia untuk mengatasi serangan sesak napas asma akut pada ibu hamil. Kadar sistemik dari inhalasi MDI sangat rendah sehingga tidak membahayakan janin.',
    trimesterRisks: {
      trimester1: 'Sangat aman via inhaler. Mencegah hipoksia janin maternal yang jauh lebih berbahaya.',
      trimester2: 'Pilihan pelega (reliever) nomor 1 asma kehamilan.',
      trimester3: 'Aman, dapat digunakan saat persalinan bila timbul serangan asma.'
    },
    halesLactationRating: 'L2',
    relativeInfantDosePercent: 0.3,
    breastfeedingSummary: 'Kadar dalam ASI sangat minimal (<0.5% RID). Sangat aman untuk ibu menyusui.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Terbutaline inhaler'],
    clinicalRecommendations: 'Dosis: 1-2 hisapan (100-200 mcg) saat serangan sesak napas. Ingatkan pasien: ASMA YANG TIDAK TERKONTROL MEMICU HIPOKSIA JANIN DAN PERSALINAN PREMATUR.',
    references: 'GINA 2023 Guidelines: Asthma Management in Pregnancy & POGI'
  },
  {
    id: 'preg-ipratropium',
    name: 'Ipratropium Bromide',
    genericName: 'Ipratropium Bromide',
    category: 'Antikolinergik Bronkodilator Inhalasi Kerja Singkat (SAMA)',
    brandNames: ['Atrovent', 'Combivent MDI (bersama Salbutamol)'],
    fdaCategory: 'B',
    pllrSummary: 'Bronkodilator antikolinergik amonium kuaterner dengan absorpsi sistemik sangat rendah (<2%). Sangat aman digunakan sebagai terapi ajuvan serangan asma akut berat pada kehamilan.',
    trimesterRisks: {
      trimester1: 'Aman, tidak teratogenik.',
      trimester2: 'Aman untuk eksaserbasi asma berat bersama SABA.',
      trimester3: 'Aman hingga persalinan.'
    },
    halesLactationRating: 'L1',
    relativeInfantDosePercent: 0.1,
    breastfeedingSummary: 'Tidak diserap signifikan ke dalam peredaran darah atau ASI. Sangat aman.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Salbutamol'],
    clinicalRecommendations: 'Dosis: 2 hisapan tiap 6 jam atau nebulisasi 500 mcg bersama salbutamol pada serangan asma sedang-berat di IGD.',
    references: 'British Thoracic Society (BTS) / SIGN Guideline on the Management of Asthma'
  },
  {
    id: 'preg-montelukast',
    name: 'Montelukast',
    genericName: 'Montelukast Sodium',
    category: 'Antagonis Reseptor Leukotrien (LTRA) / Asma & Rinitis',
    brandNames: ['Singulair', 'Montek', 'Montelukast Generik'],
    fdaCategory: 'B',
    pllrSummary: 'Pengontrol asma oral alternatif yang aman dipertahankan pada wanita hamil yang asma persisten atau rinitis alerginya terkontrol baik sebelum hamil.',
    trimesterRisks: {
      trimester1: 'Aman, registri kehamilan Merck & kohort prospektif membuktikan tidak ada risiko kelainan bawaan janin.',
      trimester2: 'Aman sebagai terapi rumatan asma.',
      trimester3: 'Aman hingga aterm.'
    },
    halesLactationRating: 'L2',
    relativeInfantDosePercent: 0.7,
    breastfeedingSummary: 'Ekskresi ke dalam ASI minimal. Kompatibel dengan menyusui.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Budesonide inhaler', 'Cetirizine'],
    clinicalRecommendations: 'Dosis: 10 mg sekali sehari malam hari. Jangan hentikan bila pasien sudah stabil sebelum hamil.',
    references: 'GINA 2023 Guidelines & Briggs 12th Ed'
  },
  {
    id: 'preg-fexofenadine',
    name: 'Fexofenadine',
    genericName: 'Fexofenadine Hydrochloride',
    category: 'Antihistamin Generasi ke-2 Non-Sedatif',
    brandNames: ['Telfast', 'Fexofed'],
    fdaCategory: 'C',
    pllrSummary: 'Metabolit aktif terfenadine yang tidak menyebabkan sedasi dan tidak memiliki efek kardiotoksik. Pilihan alternatif rinitis alergi bila Cetirizine/Loratadine memicu kantuk.',
    trimesterRisks: {
      trimester1: 'Data kehamilan hewan tidak teratogenik; Cetirizine/Loratadine tetap pilihan lini pertama.',
      trimester2: 'Aman untuk rinitis alergi persisten.',
      trimester3: 'Aman hingga persalinan.'
    },
    halesLactationRating: 'L2',
    relativeInfantDosePercent: 0.5,
    breastfeedingSummary: 'Ekskresi ASI minimal dan tidak menyebabkan sedasi pada bayi. Aman untuk ibu menyusui.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Cetirizine', 'Loratadine'],
    clinicalRecommendations: 'Dosis: 120-180 mg sekali sehari oral. Hindari minum bersama jus buah (grapefruit/apel/jeruk) karena menghambat transporter OATP1A2 usus.',
    references: 'AAAAI / ACAAI Practice Parameters for Rhinitis & Hale 2023'
  },
  {
    id: 'preg-chlorpheniramine',
    name: 'Chlorpheniramine (CTM)',
    genericName: 'Chlorpheniramine Maleate',
    category: 'Antihistamin Generasi Pertama (Alkilamin)',
    brandNames: ['CTM Kimia Farma', 'Pehachlor', 'Chlorphenon'],
    fdaCategory: 'B',
    pllrSummary: 'Antihistamin generasi pertama dengan rekam jejak keamanan klinis terpanjang pada kehamilan (>50 tahun). Rekomendasi lini pertama untuk urtikaria akut, reaksi alergi obat, dan rinitis kehamilan.',
    trimesterRisks: {
      trimester1: 'Sangat aman, didukung data Collaborative Perinatal Project pada ribuan kehamilan.',
      trimester2: 'Aman dan efektif mengatasi pruritus gestasional.',
      trimester3: 'Aman; hindari dosis berlebih menjelang persalinan karena efek antikolinergik transien neonatus.'
    },
    halesLactationRating: 'L3',
    relativeInfantDosePercent: 2.5,
    breastfeedingSummary: 'Dapat menyebabkan kantuk ringan pada bayi atau sedikit menurunkan produksi ASI bila digunakan dosis tinggi. Gunakan Cetirizine/Loratadine sebagai alternatif laktasi.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Cetirizine', 'Loratadine'],
    clinicalRecommendations: 'Dosis: 4 mg tiap 6-8 jam (maksimal 24 mg/hari). Sangat berguna bila pasien alergi membutuhkan bantuan istirahat malam hari.',
    references: 'CDC Treating for Two Initiative & ACOG Practice Bulletin'
  },

  // =========================================================================
  // 9. KARDIOVASKULAR & ANTIHIPERTENSI
  // =========================================================================
  {
    id: 'preg-amlodipine',
    name: 'Amlodipine',
    genericName: 'Amlodipine Besylate',
    category: 'Antihipertensi Calcium Channel Blocker (CCB) Dihidropiridin',
    brandNames: ['Norvasc', 'Tensivask', 'Amlodipine Generik'],
    fdaCategory: 'C',
    pllrSummary: 'CCB dihidropiridin kerja panjang yang sering digunakan bila Nifedipine atau Methyldopa tidak dapat ditoleransi oleh pasien hipertensi kronis dalam kehamilan.',
    trimesterRisks: {
      trimester1: 'Data manusia menunjukkan tidak ada peningkatan signifikan malformasi kongenital mayor.',
      trimester2: 'Efektif mengontrol tekanan darah maternal secara stabil.',
      trimester3: 'Aman hingga persalinan. Tidak mengganggu kontraktilitas uterus saat partus.'
    },
    halesLactationRating: 'L2',
    relativeInfantDosePercent: 1.8,
    breastfeedingSummary: 'Ekskresi ke dalam ASI sangat rendah (<2% RID). Sangat aman digunakan untuk hipertensi pascasalin.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Methyldopa', 'Nifedipine (Extended Release)', 'Labetalol'],
    clinicalRecommendations: 'Dosis: 5-10 mg sekali sehari. Pilihan praktis bila pasien hipertensi kronis telah terkontrol dengan amlodipin sebelum hamil.',
    references: 'ACOG Practice Bulletin No. 222 (Chronic Hypertension in Pregnancy) & Hale 2023'
  },
  {
    id: 'preg-verapamil',
    name: 'Verapamil',
    genericName: 'Verapamil Hydrochloride',
    category: 'CCB Non-Dihidropiridin / Antihipertensi & Antiaritmia',
    brandNames: ['Isoptin', 'Veracard'],
    fdaCategory: 'C',
    pllrSummary: 'CCB non-dihidropiridin pilihan untuk takikardia supraventrikular (SVT) maternal atau fetal serta alternatif hipertensi.',
    trimesterRisks: {
      trimester1: 'Aman untuk konversi SVT maternal.',
      trimester2: 'Aman untuk kontrol laju nadi.',
      trimester3: 'Dapat menembus plasenta untuk mengatasi takikardia janin intrauterin.'
    },
    halesLactationRating: 'L2',
    relativeInfantDosePercent: 0.5,
    breastfeedingSummary: 'Hanya sedikit obat masuk ke ASI (<1% RID). Sangat kompatibel dengan menyusui.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Metoprolol', 'Adenosine (untuk konversi SVT akut)'],
    clinicalRecommendations: 'Dosis: 40-80 mg 3 kali sehari. Hindari kombinasi bersama beta-blocker parenteral karena risiko bradikardia berat.',
    references: 'ESC Guidelines for the Management of Cardiovascular Diseases during Pregnancy'
  },
  {
    id: 'preg-clonidine',
    name: 'Clonidine',
    genericName: 'Clonidine Hydrochloride',
    category: 'Antihipertensi Agonis Alfa-2 Adrenergik Sentral',
    brandNames: ['Catapres', 'Clonidine Generik'],
    fdaCategory: 'C',
    pllrSummary: 'Agonis alfa-2 sentral lini kedua untuk hipertensi refrakter kehamilan bila kombinasi methyldopa dan nifedipine belum mencapai target.',
    trimesterRisks: {
      trimester1: 'Data tidak menunjukkan efek teratogenik.',
      trimester2: 'Aman untuk kontrol tekanan darah refrakter.',
      trimester3: 'Waspadai potensi hipertensi rebound maternal bila obat dihentikan mendadak.'
    },
    halesLactationRating: 'L2',
    relativeInfantDosePercent: 5.5,
    breastfeedingSummary: 'Ekskresi moderat ke ASI. Pantau tekanan darah dan denyut jantung bayi bila digunakan jangka panjang.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Methyldopa', 'Labetalol', 'Nifedipine ER'],
    clinicalRecommendations: 'Dosis: 0.075 - 0.15 mg 2-3 kali sehari. JANGAN hentikan secara mendadak untuk menghindari krisis hipertensi rebound.',
    references: 'POGI Konsensus Hipertensi Kehamilan 2023 & Briggs 12th Ed'
  },
  {
    id: 'preg-digoxin',
    name: 'Digoxin',
    genericName: 'Digoxin',
    category: 'Glikosida Jantung / Inotropik & Antiaritmia',
    brandNames: ['Fargoxin', 'Digoxin Generik'],
    fdaCategory: 'C',
    pllrSummary: 'Glikosida jantung inotropik positif pilihan nomor satu untuk fibrilasi atrium maternal dan terapi transplasental takiaritmia janin (SVT Janin).',
    trimesterRisks: {
      trimester1: 'Aman, rekam jejak klinis sangat luas tanpa cacat bawaan.',
      trimester2: 'Aman, menembus plasenta untuk mengobati hidrops fetalis terkait takiaritmia janin.',
      trimester3: 'Klirens ginjal maternal meningkat hingga 50%, pemantauan TDM kadar serum wajib dilakukan.'
    },
    halesLactationRating: 'L2',
    relativeInfantDosePercent: 1.5,
    breastfeedingSummary: 'Ekskresi ke ASI minimal. Sangat aman untuk bayi menyusui.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Metoprolol (Aritmia maternal)'],
    clinicalRecommendations: 'Target kadar digoxin serum: 0.5 - 0.9 ng/mL. Pantau kadar kalium darah karena hipokalemia memicu toksisitas fatal digoksin.',
    references: 'AHA / ACC Guideline for the Management of Patients with Arrhythmias in Pregnancy'
  },
  {
    id: 'preg-furosemide',
    name: 'Furosemide',
    genericName: 'Furosemide',
    category: 'Diuretik Loop / Kedaruratan Edema Paru Maternal',
    brandNames: ['Lasix', 'Farsix', 'Furosemide Generik'],
    fdaCategory: 'C',
    pllrSummary: 'Diuretik loop kuat yang diindikasikan khusus untuk kedaruratan edema paru akut dan gagal jantung maternal. BUKAN terapi lini pertama hipertensi kehamilan karena dapat menurunkan perfusi plasenta.',
    trimesterRisks: {
      trimester1: 'Hindari kecuali indikasi gagal jantung maternal.',
      trimester2: 'Gunakan dengan hati-hati; risiko hipovolemia dan penurunan perfusi uteroplasenta.',
      trimester3: 'Pilihan utama terapi kedaruratan edema paru pada preeklampsia berat di IGD/ICU.'
    },
    halesLactationRating: 'L2',
    relativeInfantDosePercent: 1.2,
    breastfeedingSummary: 'Ekskresi ke ASI rendah, namun efek diuresis dapat menurunkan produksi volume ASI. Pastikan hidrasi ibu tercukupi.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Methyldopa', 'Nifedipine (untuk hipertensi tanpa edema paru)'],
    clinicalRecommendations: 'Indikasi tunggal kehamilan: EDEMA PARU AKUT ATAU GAGAL JANTUNG. Dosis: 20-40 mg IV bolus lambat. Jangan gunakan untuk edema kaki fisiologis kehamilan.',
    references: 'POGI Panduan Pengelolaan Preeklampsia Berat & ESH Guidelines'
  },

  // =========================================================================
  // 10. ENDOKRIN & ANTIDIABETES
  // =========================================================================
  {
    id: 'preg-glibenclamide',
    name: 'Glibenclamide',
    genericName: 'Glibenclamide / Glyburide',
    category: 'Antidiabetik Oral Golongan Sulfonilurea Generasi ke-2',
    brandNames: ['Daonil', 'Glibenclamide Generik'],
    fdaCategory: 'C',
    pllrSummary: 'Sulfonilurea yang menembus sawar plasenta dan merangsang sel beta pankreas janin, meningkatkan risiko makrosomia (>4 kg) dan hipoglikemia neonatal refrakter. ADA dan POGI menetapkan Insulin sebagai standar emas nomor satu.',
    trimesterRisks: {
      trimester1: 'Tidak dianjurkan. Insulin adalah lini pertama.',
      trimester2: 'Risiko hiperinsulinemia janin dan percepatan pertumbuhan lingkar perut janin.',
      trimester3: 'Risiko hipoglikemia berat berkepanjangan pada neonatus pascasalin.'
    },
    halesLactationRating: 'L2',
    relativeInfantDosePercent: 1.5,
    breastfeedingSummary: 'Ekskresi ke ASI minimal. Kompatibel dengan pemantauan glukosa darah bayi.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Insulin Human / Analog (Lini 1 Emas)', 'Metformin (Lini 2)'],
    clinicalRecommendations: 'HINDARI PADA KEHAMILAN. Ganti ke terapi Insulin terarah untuk mencapai target glikemik puasa <95 mg/dL dan 2 jam PP <120 mg/dL.',
    references: 'ADA Standards of Care in Diabetes: Management of Diabetes in Pregnancy 2024'
  },
  {
    id: 'preg-glimepiride',
    name: 'Glimepiride',
    genericName: 'Glimepiride',
    category: 'Antidiabetik Oral Golongan Sulfonilurea Generasi ke-3',
    brandNames: ['Amaryl', 'Glimepiride Generik'],
    fdaCategory: 'C',
    pllrSummary: 'Sulfonilurea generasi ke-3. Seperti glibenklamid, tidak direkomendasikan pada kehamilan karena risiko hipoglikemia janin dan neonatal.',
    trimesterRisks: {
      trimester1: 'Ganti ke Insulin segera setelah kehamilan terkonfirmasi.',
      trimester2: 'KONTRAINDIKASI RELATIF; risiko makrosomia.',
      trimester3: 'KONTRAINDIKASI TRIMESTER 3: Hipoglikemia neonatal berat dan persalinan traumatik akibat distosia bahu.'
    },
    halesLactationRating: 'L2',
    relativeInfantDosePercent: 1.8,
    breastfeedingSummary: 'Kompatibel dengan menyusui dengan pemantauan tanda hipoglikemia pada bayi.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Insulin Aspart / Lispro / NPH / Detemir'],
    clinicalRecommendations: 'Segera beralih ke Insulin saat merencanakan kehamilan atau saat tes kehamilan positif.',
    references: 'POGI Konsensus Diabetes Melitus Gestasional & ADA 2024'
  },
  {
    id: 'preg-acarbose',
    name: 'Acarbose',
    genericName: 'Acarbose',
    category: 'Antidiabetik Penghambat Enzim Alfa-Glukosidase',
    brandNames: ['Glucobay', 'Acarbose Generik'],
    fdaCategory: 'B',
    pllrSummary: 'Inhibitor alfa-glukosidase di brush border usus halus yang menghambat pemecahan disakarida. Absorpsi sistemik ke dalam darah <2% sehingga paparan ke janin hampir nol.',
    trimesterRisks: {
      trimester1: 'Sangat aman dari segi sistemik karena tidak diserap ke sirkulasi.',
      trimester2: 'Aman untuk mengontrol lonjakan glukosa postprandial.',
      trimester3: 'Aman; keluhan utama berupa kembung dan flatus gastrointestinal maternal.'
    },
    halesLactationRating: 'L1',
    relativeInfantDosePercent: 0.1,
    breastfeedingSummary: 'Tidak masuk ke dalam ASI dalam jumlah terdeteksi. Sangat aman untuk ibu menyusui.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Insulin', 'Metformin'],
    clinicalRecommendations: 'Dosis: 50-100 mg diminum bersama suapan pertama makanan utama. Bukan pengganti insulin untuk DM gestasional moderat-berat.',
    references: 'Briggs Drugs in Pregnancy and Lactation & Hale 2023'
  },

  // =========================================================================
  // 11. PSIKIATRI & SISTEM SARAF
  // =========================================================================
  {
    id: 'preg-fluoxetine',
    name: 'Fluoxetine',
    genericName: 'Fluoxetine Hydrochloride',
    category: 'Antidepresan Selektif Serotonin Reuptake Inhibitor (SSRI)',
    brandNames: ['Prozac', 'Kalxetin', 'Antiprestin', 'Fluoxetine Generik'],
    fdaCategory: 'C',
    pllrSummary: 'SSRI yang paling banyak diteliti pada kehamilan. Waktu paruh metabolit aktifnya (norfluoxetine) sangat panjang (hingga 1-2 minggu). Sertraline lebih disukai saat masa laktasi.',
    trimesterRisks: {
      trimester1: 'Data luas menunjukkan keamanan umum; beberapa studi mengindikasikan risiko kelainan septum kardiak janin yang sangat kecil.',
      trimester2: 'Aman untuk mengontrol episode depresi mayor persisten.',
      trimester3: 'Risiko Poor Neonatal Adaptation Syndrome (PNAS: iritabilitas, tremor, takipnea transien) dan PPHN.'
    },
    halesLactationRating: 'L2',
    relativeInfantDosePercent: 6.5,
    breastfeedingSummary: 'Kadar dalam ASI lebih tinggi dibanding Sertraline (RID 5-9%). Jika ibu baru memulai terapi saat menyusui, Sertraline adalah pilihan nomor satu.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Sertraline (Lini 1 Laktasi L2 RID <2%)', 'Citalopram'],
    clinicalRecommendations: 'Bila pasien sudah terkontrol baik dengan Fluoxetine sebelum hamil, terapi DAPAT DITERUSKAN. Hindari penghentian mendadak yang memicu relaps depresi berat.',
    references: 'ACOG Practice Advisory on Antidepressants during Pregnancy & APA'
  },
  {
    id: 'preg-escitalopram',
    name: 'Escitalopram',
    genericName: 'Escitalopram Oxalate',
    category: 'Antidepresan SSRI Selektif Serotonin Murni',
    brandNames: ['Cipralex', 'Elxion', 'Escitalopram Generik'],
    fdaCategory: 'C',
    pllrSummary: 'Enansiomer S murni dari sitalopram dengan selektivitas serotonergik tertinggi dan efek samping interaksi obat minimal.',
    trimesterRisks: {
      trimester1: 'Aman, tidak terbukti meningkatkan malformasi mayor.',
      trimester2: 'Aman untuk depresi dan gangguan kecemasan menyeluruh (GAD).',
      trimester3: 'Risiko adaptasi neonatal transien (PNAS) pada 10-20% neonatus.'
    },
    halesLactationRating: 'L2',
    relativeInfantDosePercent: 3.8,
    breastfeedingSummary: 'Ekskresi ke ASI rendah (RID <5%). Sangat kompatibel dengan menyusui.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Sertraline'],
    clinicalRecommendations: 'Dosis: 10-20 mg sekali sehari pagi hari. Pilihan aman untuk depresi maternal dan gangguan panik.',
    references: 'BAP Guidelines: Evidence-based guidelines for treating depressive disorders with antidepressants in pregnancy'
  },
  {
    id: 'preg-paroxetine',
    name: 'Paroxetine',
    genericName: 'Paroxetine Hydrochloride',
    category: 'Antidepresan SSRI',
    brandNames: ['Seroxat'],
    fdaCategory: 'D',
    pllrSummary: 'Satu-satunya SSRI dengan Kategori D FDA untuk kehamilan. Terbukti secara konsisten meningkatkan risiko malformasi kardiovaskular kongenital (terutama defek septum atrium dan ventrikel / VSD) bila terpapar pada trimester pertama.',
    trimesterRisks: {
      trimester1: 'KONTRAINDIKASI RELATIF. Peningkatan risiko malformasi septum kardiak janin 1.5 - 2 kali lipat dibanding SSRI lainnya.',
      trimester2: 'Hindari inisiasi baru pada kehamilan.',
      trimester3: 'Risiko hipertensi pulmonal persisten neonatus (PPHN) dan sindrom putus obat neonatal berat.'
    },
    halesLactationRating: 'L2',
    relativeInfantDosePercent: 1.5,
    breastfeedingSummary: 'Meskipun Kategori D saat hamil, saat MENYUSUI paroxetine sangat aman (L2, RID <2%) karena ekskresinya ke ASI sangat rendah.',
    teratogenicAlert: 'Defek septum jantung kongenital (Ventricular Septal Defect / VSD dan Atrial Septal Defect / ASD).',
    isContraindicatedInPregnancy: true,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Sertraline (Pilihan utama kehamilan & laktasi)', 'Fluoxetine'],
    clinicalRecommendations: 'HINDARI INISIASI PADA WANITA HAMIL ATAU YANG MERENCANAKAN KEHAMILAN. Ganti ke Sertraline sebelum konsepsi.',
    references: 'FDA Public Health Advisory on Paroxetine & ACOG Practice Bulletin No. 92'
  },
  {
    id: 'preg-amitriptyline',
    name: 'Amitriptyline',
    genericName: 'Amitriptyline Hydrochloride',
    category: 'Antidepresan Trisiklik (TCA) / Profilaksis Migrain & Nyeri',
    brandNames: ['Amitriptyline Generik'],
    fdaCategory: 'C',
    pllrSummary: 'Antidepresan trisiklik yang sering digunakan dosis rendah untuk profilaksis migrain kronis, insomnia, dan nyeri neuropatik gestasional.',
    trimesterRisks: {
      trimester1: 'Aman, data epidemiologi tidak menunjukkan peningkatan risiko cacat lahir bermakna.',
      trimester2: 'Aman untuk profilaksis migrain refrakter.',
      trimester3: 'Penggunaan dosis antidepresan tinggi menjelang partus memicu efek antikolinergik neonatal transien (retensi urin, takikardia, hipotonia).'
    },
    halesLactationRating: 'L2',
    relativeInfantDosePercent: 1.5,
    breastfeedingSummary: 'Terekskresi dalam ASI dalam jumlah kecil (<2% RID). Kompatibel dengan menyusui dosis rendah.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Sertraline (untuk depresi)', 'Paracetamol / Magnesium (untuk migrain)'],
    clinicalRecommendations: 'Dosis rendah untuk migrain (10-25 mg malam hari) memiliki profil keamanan sangat baik. Hindari menghentikan mendadak.',
    references: 'Briggs Drugs in Pregnancy and Lactation & Hale 2023'
  },
  {
    id: 'preg-diazepam',
    name: 'Diazepam',
    genericName: 'Diazepam',
    category: 'Benzodiazepin Kerja Panjang / Antiansietas & Antikonvulsan',
    brandNames: ['Valium', 'Stesolid', 'Valisanbe', 'Diazepam Generik'],
    fdaCategory: 'D',
    pllrSummary: 'Benzodiazepin kerja panjang. Paparan menjelang persalinan memicu "Floppy Infant Syndrome" (hipotonia berat, letargi, hipotermia, depresi napas, dan refleks hisap buruk pada bayi baru lahir).',
    trimesterRisks: {
      trimester1: 'Gunakan dengan hati-hati; beberapa studi lama mengindikasikan risiko celah bibir kecil.',
      trimester2: 'Batasi penggunaan jangka pendek untuk ansietas akut hebat atau spasme otot.',
      trimester3: 'KONTRAINDIKASI TRIMESTER 3 LANJUT: Floppy Infant Syndrome dan ketergantungan fisik neonatal.'
    },
    halesLactationRating: 'L3',
    relativeInfantDosePercent: 6.8,
    breastfeedingSummary: 'Metabolit aktif (desmethyldiazepam) terakumulasi di tubuh bayi karena waktu paruh eliminasi yang sangat lambat pada neonatus. Hindari penggunaan berulang saat menyusui.',
    teratogenicAlert: 'Floppy Infant Syndrome (hipotermia, hipotonia, depresi pernapasan pascalahir).',
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Lorazepam (waktu paruh lebih singkat)', 'Sertraline (untuk cemas kronis)'],
    clinicalRecommendations: 'Gunakan hanya untuk kedaruratan status epileptikus (bila MgSO4 tidak sesuai) atau sedasi darurat jangka pendek tunggal.',
    references: 'FDA Drug Safety Information & Briggs 12th Ed'
  },
  {
    id: 'preg-lorazepam',
    name: 'Lorazepam',
    genericName: 'Lorazepam',
    category: 'Benzodiazepin Kerja Sedang Tanpa Metabolit Aktif',
    brandNames: ['Ativan', 'Merlopam', 'Renaquil'],
    fdaCategory: 'D',
    pllrSummary: 'Benzodiazepin kerja sedang yang dimetabolisme langsung via glukuronidasi tanpa metabolit aktif panjang. Lebih disukai dibanding Diazepam bila benzodiazepin mutlak diperlukan.',
    trimesterRisks: {
      trimester1: 'Gunakan hanya jika manfaat klinis esensial melebihi risiko.',
      trimester2: 'Aman untuk sedasi jangka pendek.',
      trimester3: 'Waspadai sedasi neonatal bila digunakan dosis tinggi sebelum partus.'
    },
    halesLactationRating: 'L3',
    relativeInfantDosePercent: 3.2,
    breastfeedingSummary: 'Ekskresi ke ASI lebih rendah dari diazepam dan tidak terakumulasi. Kompatibel untuk dosis tunggal sesekali.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Sertraline', 'Promethazine (untuk mual/sedasi)'],
    clinicalRecommendations: 'Dosis: 0.5 - 1 mg oral bila diperlukan untuk agitasi atau ansietas akut. Batasi sesingkat mungkin.',
    references: 'Hale\'s Medications and Mothers\' Milk 2023 & ACOG'
  },
  {
    id: 'preg-risperidone',
    name: 'Risperidone',
    genericName: 'Risperidone',
    category: 'Antipsikotik Atipikal Generasi ke-2 (SDA)',
    brandNames: ['Risperdal', 'Zofredal', 'Persidal', 'Risperidone Generik'],
    fdaCategory: 'C',
    pllrSummary: 'Antipsikotik atipikal untuk skizofrenia dan gangguan bipolar afektif. Paparan trimester 3 dapat menimbulkan gejala ekstrapiramidal dan adaptasi neonatal sementara.',
    trimesterRisks: {
      trimester1: 'Data dari >2.000 kehamilan menunjukkan tidak ada peningkatan malformasi kongenital mayor yang bermakna.',
      trimester2: 'Aman untuk mempertahankan stabilitas psikis maternal.',
      trimester3: 'Risiko gejala ekstrapiramidal neonatal transien (tremor, hipertonia, agitasi) pada 15-20% neonatus.'
    },
    halesLactationRating: 'L2',
    relativeInfantDosePercent: 3.5,
    breastfeedingSummary: 'Ekskresi ke dalam ASI rendah (<4% RID). Sangat kompatibel dengan menyusui; pantau sedasi bayi.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Olanzapine', 'Quetiapine', 'Haloperidol'],
    clinicalRecommendations: 'Pertahankan stabilitas kejiwaan ibu hamil. Risiko relaps psikosis maternal akut jauh lebih berbahaya bagi ibu dan janin dibanding terapi antipsikotik.',
    references: 'NICE Guidelines: Antenatal and Postnatal Mental Health & APA'
  },
  {
    id: 'preg-olanzapine',
    name: 'Olanzapine',
    genericName: 'Olanzapine',
    category: 'Antipsikotik Atipikal Generasi ke-2',
    brandNames: ['Zyprexa', 'Remital', 'Olanzapine Generik'],
    fdaCategory: 'C',
    pllrSummary: 'Antipsikotik atipikal pilihan utama untuk psikosis akut dan fase manik bipolar kehamilan. Memerlukan pemantauan kenaikan berat badan maternal dan skrining diabetes gestasional berkala.',
    trimesterRisks: {
      trimester1: 'Aman, data register kohort membuktikan tidak teratogenik.',
      trimester2: 'Wajib pantau glukosa darah ibu (risiko kenaikan berat badan dan GDM).',
      trimester3: 'Aman, gejala adaptasi neonatal umumnya ringan dan sementara.'
    },
    halesLactationRating: 'L2',
    relativeInfantDosePercent: 1.6,
    breastfeedingSummary: 'Ekskresi ke dalam ASI sangat minimal (<2% RID). Pilihan antipsikotik atipikal paling aman untuk ibu menyusui.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Quetiapine', 'Haloperidol'],
    clinicalRecommendations: 'Dosis: 5-15 mg malam hari. Lakukan pemeriksaan toleransi glukosa oral (TTGO) pada minggu ke-24-28 karena efek metabolik olanzapin.',
    references: 'RANZCP Clinical Practice Guidelines for Management of Schizophrenia in Pregnancy & Hale 2023'
  },
  {
    id: 'preg-quetiapine',
    name: 'Quetiapine',
    genericName: 'Quetiapine Fumarate',
    category: 'Antipsikotik Atipikal Generasi ke-2',
    brandNames: ['Seroquel', 'Q-Pin'],
    fdaCategory: 'C',
    pllrSummary: 'Antipsikotik atipikal dengan transfer plasenta terendah di antara seluruh antipsikotik generasi kedua (~24% dari kadar serum maternal), menjadikannya salah satu pilihan teraman untuk janin.',
    trimesterRisks: {
      trimester1: 'Sangat aman, transfer plasenta minimal.',
      trimester2: 'Aman untuk depresi bipolar dan psikosis.',
      trimester3: 'Risiko efek samping neonatal paling rendah dibanding atipikal lainnya.'
    },
    halesLactationRating: 'L2',
    relativeInfantDosePercent: 0.4,
    breastfeedingSummary: 'Hampir tidak terdeteksi dalam ASI (<0.5% RID). Sangat aman untuk ibu menyusui.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Olanzapine'],
    clinicalRecommendations: 'Dosis: 100-400 mg/hari terbagi atau lepas lambat (XR). Pilihan utama untuk gangguan bipolar dan psikosis gestasional.',
    references: 'American Journal of Psychiatry & Briggs Drugs in Pregnancy and Lactation'
  },
  {
    id: 'preg-haloperidol',
    name: 'Haloperidol',
    genericName: 'Haloperidol',
    category: 'Antipsikotik Tipikal Potensi Tinggi (Butirofenon)',
    brandNames: ['Haldol', 'Govotil', 'Lodomer', 'Haloperidol Generik'],
    fdaCategory: 'C',
    pllrSummary: 'Antipsikotik tipikal dengan rekam jejak keamanan klinis terlama (>50 tahun). Pilihan lini pertama untuk kedaruratan psikiatrik akut, agitasi parah, dan hiperemesis gravidarum refrakter.',
    trimesterRisks: {
      trimester1: 'Aman, didukung puluhan tahun data klinis tanpa bukti teratogenisitas mayor.',
      trimester2: 'Aman untuk kontrol gejala psikotik.',
      trimester3: 'Aman; dapat timbul gejala ekstrapiramidal transien pada bayi.'
    },
    halesLactationRating: 'L2',
    relativeInfantDosePercent: 2.1,
    breastfeedingSummary: 'Ekskresi ke ASI rendah. Kompatibel dengan menyusui.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Olanzapine', 'Quetiapine'],
    clinicalRecommendations: 'Dosis: 1.5 - 5 mg oral atau IM untuk kedaruratan gaduh gelisah maternal. Sangat aman dan teruji klinis.',
    references: 'Maudsley Prescribing Guidelines in Psychiatry 14th Ed & WHO'
  },

  // =========================================================================
  // 12. ANTIMIKOTIK, ANTIVIRUS & TOPIKAL
  // =========================================================================
  {
    id: 'preg-clotrimazole',
    name: 'Clotrimazole (Topikal & Tablet Vagina)',
    genericName: 'Clotrimazole',
    category: 'Antijamur Imidazol / Kandidiasis Vulvovaginal Gestasional',
    brandNames: ['Canesten', 'Fungiderm', 'Clotrimazole Generik'],
    fdaCategory: 'B',
    pllrSummary: 'Obat pilihan nomor satu di dunia (rekomendasi CDC dan POGI) untuk penanganan kandidiasis vulvovaginal pada kehamilan. Penggunaan lokal tablet vagina dan krim topikal tidak diserap secara sistemik sehingga 100% aman untuk janin.',
    trimesterRisks: {
      trimester1: 'Sangat aman, pilihan lini pertama.',
      trimester2: 'Aman dan efektif.',
      trimester3: 'Aman, gunakan aplikator dengan hati-hati (atau masukkan dengan jari bersih) untuk menghindari trauma mekanik serviks.'
    },
    halesLactationRating: 'L1',
    relativeInfantDosePercent: 0.1,
    breastfeedingSummary: 'Tidak masuk ke peredaran darah atau ASI. Paling aman untuk ibu menyusui.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Nystatin ovula vagina'],
    clinicalRecommendations: 'Dosis: Clotrimazole tablet vagina 100 mg selama 6-7 malam berturut-turut (atau 500 mg dosis tunggal). HINDARI terapi Flukonazol oral dosis tinggi pada trimester 1.',
    references: 'CDC Sexually Transmitted Infections Treatment Guidelines 2021 & POGI'
  },
  {
    id: 'preg-nystatin',
    name: 'Nystatin (Oral Suspensi & Ovula Vagina)',
    genericName: 'Nystatin',
    category: 'Antijamur Polien Topikal & Saluran Cerna',
    brandNames: ['Mycostatin', 'Candistatin', 'Nystatin Generik'],
    fdaCategory: 'C',
    pllrSummary: 'Antijamur polien yang 100% tidak diserap melalui saluran cerna maupun mukosa vagina utuh. Sangat aman untuk oral thrush (kandidiasis oral) bayi dan ibu serta kandidiasis vagina.',
    trimesterRisks: {
      trimester1: 'Sangat aman, absorpsi sistemik nol.',
      trimester2: 'Aman untuk infeksi jamur Candida.',
      trimester3: 'Aman hingga persalinan.'
    },
    halesLactationRating: 'L1',
    relativeInfantDosePercent: 0.0,
    breastfeedingSummary: 'Tidak diserap ke dalam ASI. Standar emas terapi sariawan/oral thrush pada bayi baru lahir dan puting susu ibu menyusui.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Clotrimazole'],
    clinicalRecommendations: 'Untuk oral thrush: Teteskan 1 mL (100.000 IU) 4 kali sehari pada rongga mulut setelah menyusu. Oleskan juga pada puting ibu untuk mencegah infeksi ping-pong.',
    references: 'AAP Red Book & Hale\'s Medications and Mothers\' Milk 2023'
  },
  {
    id: 'preg-acyclovir-oral',
    name: 'Acyclovir (Oral & Topikal)',
    genericName: 'Acyclovir / Aciclovir',
    category: 'Antivirus Herpes Simpleks & Varicella Zoster',
    brandNames: ['Zovirax', 'Clivarvir', 'Acyclovir Generik'],
    fdaCategory: 'B',
    pllrSummary: 'Antivirus yang paling luas diteliti pada kehamilan. Pilihan utama untuk terapi cacar air (varicella maternal) dan herpes genitalis aktif guna mencegah transmisi vertikal dan pneumonia varicella maternal berat.',
    trimesterRisks: {
      trimester1: 'Register kehamilan internasional pada >1.200 pajanan membuktikan tingkat kelainan bawaan sama dengan populasi umum (2-3%).',
      trimester2: 'Sangat aman dan efektif.',
      trimester3: 'Sangat direkomendasikan untuk profilaksis pencegahan kekambuhan herpes aterm.'
    },
    halesLactationRating: 'L2',
    relativeInfantDosePercent: 1.8,
    breastfeedingSummary: 'Kadar dalam ASI sangat rendah (<2% RID). Sangat aman untuk ibu menyusui.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Valaciclovir'],
    clinicalRecommendations: 'Dosis herpes genital: 400 mg 3 kali sehari (atau 200 mg 5 kali sehari) selama 7-10 hari. Untuk varicella kehamilan, mulai dalam 24 jam awitan ruam (800 mg 5x/hari).',
    references: 'CDC STI Guidelines 2021 & RCOG Green-top Guideline No. 13 (Chickenpox in Pregnancy)'
  },
  {
    id: 'preg-terbinafine',
    name: 'Terbinafine',
    genericName: 'Terbinafine Hydrochloride',
    category: 'Antijamur Alilamin Topikal & Sistemik',
    brandNames: ['Lamisil', 'Interbi', 'Terbinafine Generik'],
    fdaCategory: 'B',
    pllrSummary: 'Antijamur penghambat skualen epoksidase. Bentuk krim topikal sangat aman digunakan pada kehamilan untuk tinea korporis, kruris, dan pedis. Bentuk oral sebaiknya ditunda hingga pascasalin kecuali infeksi dermatofita sangat berat.',
    trimesterRisks: {
      trimester1: 'Krim topikal sangat aman (absorpsi sistemik <5%). Terapi oral sebaiknya ditunda.',
      trimester2: 'Krim topikal aman.',
      trimester3: 'Krim topikal aman.'
    },
    halesLactationRating: 'L2',
    relativeInfantDosePercent: 3.2,
    breastfeedingSummary: 'Krim topikal sangat aman. Bentuk oral terakumulasi di jaringan lemak dan ASI; utamakan terapi topikal saat menyusui.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Clotrimazole topikal', 'Miconazole topikal'],
    clinicalRecommendations: 'Gunakan sediaan krim topikal 1% dioleskan 1-2 kali sehari selama 1-2 minggu. Tunda terapi oral onikomikosis kuku hingga masa laktasi selesai.',
    references: 'Briggs Drugs in Pregnancy and Lactation & Hale 2023'
  },

  // =========================================================================
  // 13. VAKSINASI MATERNAL
  // =========================================================================
  {
    id: 'preg-tetanus-toxoid',
    name: 'Vaksin Tetanus Toksoid (TT / Td / Tdap)',
    genericName: 'Tetanus Toxoid / Tetanus Diphtheria Pertussis Vaccine',
    category: 'Vaksin Toksoid Bakterial / Imunisasi Wajib Maternal',
    brandNames: ['Vaksin TT Bio Farma', 'Boostrix (Tdap)', 'Adacel (Tdap)'],
    fdaCategory: 'A',
    pllrSummary: 'Imunisasi antenatal wajib (program Kemenkes RI dan WHO) untuk eliminasi Tetanus Maternal dan Neonatal (MNTE) serta perlindungan antibodi transplasental terhadap batuk rejan (pertusis) bagi bayi baru lahir sebelum jadwal vaksinasi dasar.',
    trimesterRisks: {
      trimester1: 'Aman, dapat diberikan bila status imunisasi belum lengkap.',
      trimester2: 'Waktu ideal pemberian booster.',
      trimester3: 'Waktu optimal pemberian vaksin Tdap (minggu ke-27 s.d. 36) untuk transfer antibodi pertusis maksimal ke janin.'
    },
    halesLactationRating: 'L1',
    relativeInfantDosePercent: 0.0,
    breastfeedingSummary: 'Vaksin tidak diekskresikan ke ASI, namun antibodi maternal (IgA) disalurkan ke ASI untuk melindungi bayi. Sangat aman.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: [],
    clinicalRecommendations: 'Berikan vaksin Tdap pada setiap kehamilan antara usia gestasi 27-36 minggu tanpa memandang riwayat vaksinasi sebelumnya untuk memproteksi bayi dari pertusis fatal.',
    references: 'CDC Advisory Committee on Immunization Practices (ACIP) & Kemenkes RI Standar ANC 2023'
  },
  {
    id: 'preg-influenza-vaccine',
    name: 'Vaksin Influenza Inaktif',
    genericName: 'Inactivated Influenza Vaccine (IIV)',
    category: 'Vaksin Virus Terinaktivasi Maternal',
    brandNames: ['Vaxigrip Tetra', 'Fluarix Tetra', 'Influvac Tetra'],
    fdaCategory: 'B',
    pllrSummary: 'Vaksin virus terinaktivasi yang direkomendasikan resmi oleh WHO dan POGI pada semua trimester kehamilan. Ibu hamil memiliki risiko komplikasi pneumonia influenza 4-5 kali lebih tinggi.',
    trimesterRisks: {
      trimester1: 'Aman diberikan pada trimester berapapun (termasuk trimester 1).',
      trimester2: 'Sangat aman dan memberikan proteksi optimal.',
      trimester3: 'Transfer antibodi IgG maternal melindungi neonatus selama 6 bulan pertama kehidupan.'
    },
    halesLactationRating: 'L1',
    relativeInfantDosePercent: 0.0,
    breastfeedingSummary: 'Sangat aman untuk ibu menyusui. Menyalurkan secretory IgA pelindung dalam ASI.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: [],
    clinicalRecommendations: 'Gunakan HANYA vaksin inaktif (IIV tetravalen). DILARANG menggunakan vaksin influenza hidup dilemahkan (Live Attenuated Influenza Vaccine / nasal spray LAIV).',
    references: 'WHO Strategic Advisory Group of Experts (SAGE) on Immunization & POGI'
  },
  {
    id: 'preg-diphenhydramine',
    name: 'Diphenhydramine',
    genericName: 'Diphenhydramine Hydrochloride',
    category: 'Antihistamin H1 Generasi Pertama & Antiemetik',
    brandNames: ['Benadryl', 'Diphenhydramine Generik'],
    fdaCategory: 'B',
    pllrSummary: 'Antihistamin generasi pertama dengan efek sedasi dan antiemetik. Digunakan untuk rinitis alergi akut, pruritus kehamilan, insomnia jangka pendek, dan penanganan mual muntah (NVP).',
    trimesterRisks: {
      trimester1: 'Sangat aman, didukung registri ribuan kehamilan tanpa peningkatan cacat bawaan.',
      trimester2: 'Aman untuk alergi dan pruritus gestasional.',
      trimester3: 'Aman; hindari dosis besar menjelang persalinan karena efek stimulasi kontraksi uterus ringan.'
    },
    halesLactationRating: 'L2',
    relativeInfantDosePercent: 1.5,
    breastfeedingSummary: 'Ekskresi ke ASI minimal. Pantau potensi rasa kantuk ringan pada bayi.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Cetirizine', 'Dimenhydrinate', 'Loratadine'],
    clinicalRecommendations: 'Dosis: 25-50 mg oral tiap 6-8 jam bila diperlukan. Pilihan aman untuk alergi akut malam hari.',
    references: 'ACOG Practice Bulletin & Hale\'s Medications and Mothers\' Milk 2023'
  },
  {
    id: 'preg-hydrocortisone',
    name: 'Hydrocortisone',
    genericName: 'Hydrocortisone / Cortisol',
    category: 'Kortikosteroid Fisiologis & Antiinflamasi Topikal / Sistemik',
    brandNames: ['Hydrocortisone Salep Kimia Farma', 'Solu-Cortef'],
    fdaCategory: 'C',
    pllrSummary: 'Hormon glukokortikoid fisiologis tubuh. Sediaan krim topikal 1-2.5% sangat aman digunakan untuk dermatitis gestasional; sediaan IV merupakan standar emas krisis insufisiensi adrenal maternal.',
    trimesterRisks: {
      trimester1: 'Krim topikal sangat aman (absorpsi sistemik <2%). Sediaan IV digunakan untuk krisis adrenal.',
      trimester2: 'Aman dan efektif.',
      trimester3: 'Aman, steroid fisiologis yang tidak mengganggu perkembangan janin.'
    },
    halesLactationRating: 'L2',
    relativeInfantDosePercent: 0.5,
    breastfeedingSummary: 'Merupakan komponen hormon alami ASI. Sangat kompatibel dengan menyusui.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Prednisone', 'Methylprednisolone'],
    clinicalRecommendations: 'Untuk gatal dan eksim kehamilan: Oleskan krim tipis 1-2 kali sehari selama 7 hari. Untuk krisis adrenal: 100 mg IV tiap 8 jam.',
    references: 'Endocrine Society Clinical Practice Guideline on Adrenal Insufficiency in Pregnancy'
  },
  {
    id: 'preg-diltiazem',
    name: 'Diltiazem',
    genericName: 'Diltiazem Hydrochloride',
    category: 'Calcium Channel Blocker (CCB) Non-Dihidropiridin / Antiaritmia',
    brandNames: ['Herbesser', 'Farmabes', 'Diltiazem Generik'],
    fdaCategory: 'C',
    pllrSummary: 'CCB non-dihidropiridin untuk kontrol laju ventrikel pada fibrilasi atrium maternal dan takikardia supraventrikular serta angina pektoris.',
    trimesterRisks: {
      trimester1: 'Data manusia terbatas; Verapamil atau Metoprolol lebih disukai untuk aritmia.',
      trimester2: 'Aman untuk mengontrol laju detak jantung maternal.',
      trimester3: 'Aman, pantau denyut jantung janin.'
    },
    halesLactationRating: 'L3',
    relativeInfantDosePercent: 2.0,
    breastfeedingSummary: 'Terekskresi dalam ASI dalam konsentrasi rendah. Kompatibel dengan pemantauan nadi bayi.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Verapamil', 'Metoprolol', 'Digoxin'],
    clinicalRecommendations: 'Dosis: 30-60 mg 3-4 kali sehari oral. Hindari kombinasi bersama beta-blocker parenteral.',
    references: 'ESC Guidelines for the Management of Cardiovascular Diseases during Pregnancy'
  },
  {
    id: 'preg-piroxicam',
    name: 'Piroxicam',
    genericName: 'Piroxicam',
    category: 'Analgesik NSAID Turunan Oksikam Kerja Panjang',
    brandNames: ['Feldene', 'Scantoma', 'Piroxicam Generik'],
    fdaCategory: 'C',
    pllrSummary: 'NSAID dengan waktu paruh sangat panjang (50 jam). Kategori D KONTRAINDIKASI MUTLAK pada Trimester 3 karena risiko penutupan prematur duktus arteriosus Botalli dan oligohidramnion.',
    trimesterRisks: {
      trimester1: 'Gunakan Parasetamol sebagai analgesik lini pertama.',
      trimester2: 'Hindari setelah usia kehamilan 20 minggu.',
      trimester3: 'KONTRAINDIKASI MUTLAK.'
    },
    halesLactationRating: 'L3',
    relativeInfantDosePercent: 2.5,
    breastfeedingSummary: 'Waktu paruh panjang dapat menyebabkan akumulasi pada neonatus. Ibu menyusui lebih dianjurkan menggunakan Ibuprofen atau Celecoxib.',
    teratogenicAlert: 'Penutupan dini duktus arteriosus dan disfungsi ginjal janin bila digunakan pada TM 3.',
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Paracetamol', 'Ibuprofen (Laktasi)'],
    clinicalRecommendations: 'DILARANG PADA TRIMESTER 3 KEHAMILAN. Ganti ke parasetamol.',
    references: 'FDA NSAID Drug Safety Communication 2020'
  },
  {
    id: 'preg-celecoxib',
    name: 'Celecoxib',
    genericName: 'Celecoxib',
    category: 'Analgesik NSAID Penghambat Selektif COX-2',
    brandNames: ['Celebrex', 'Cobix', 'Celecoxib Generik'],
    fdaCategory: 'C',
    pllrSummary: 'NSAID penghambat selektif COX-2. Kategori C pada trimester 1-2; Kategori D KONTRAINDIKASI MUTLAK pada Trimester 3. Namun pada MASA LAKTASI / MENYUSUI, ekskresinya ke dalam ASI sangat minimal (<0.3% RID), menjadikannya salah satu pilihan NSAID paling aman saat menyusui.',
    trimesterRisks: {
      trimester1: 'Gunakan parasetamol sebagai pilihan utama.',
      trimester2: 'Hindari setelah minggu ke-20.',
      trimester3: 'KONTRAINDIKASI MUTLAK: Penutupan dini duktus arteriosus janin dan oligohidramnion.'
    },
    halesLactationRating: 'L2',
    relativeInfantDosePercent: 0.3,
    breastfeedingSummary: 'Ekskresi ke ASI sangat rendah (<0.3% RID). Pilihan NSAID sangat aman untuk analgesia pasca-SC saat menyusui.',
    teratogenicAlert: 'Konstriksi duktus arteriosus dan anuria janin pada Trimester 3.',
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Paracetamol', 'Ibuprofen'],
    clinicalRecommendations: 'DILARANG PADA TRIMESTER 3. Sangat direkomendasikan untuk nyeri pascaoperasi seksio sesarea pada ibu menyusui (200 mg 1-2x/hari).',
    references: 'Briggs Drugs in Pregnancy and Lactation & Hale\'s Medications and Mothers\' Milk 2023'
  },
  {
    id: 'preg-fentanyl',
    name: 'Fentanyl',
    genericName: 'Fentanyl Citrate',
    category: 'Analgesik Opioid Sintetik Parenteral Kuat',
    brandNames: ['Sublimaze', 'Durogesic Patch', 'Fentanyl Injeksi Kimia Farma'],
    fdaCategory: 'C',
    pllrSummary: 'Opioid sintetik poten pilihan utama untuk analgesia persalinan (Epidural Labour Analgesia / ILA) dan anestesi seksio sesarea. Pemberian epidural membatasi transfer sistemik ke janin secara signifikan.',
    trimesterRisks: {
      trimester1: 'Aman untuk pembiusan umum bedah darurat.',
      trimester2: 'Aman untuk analgesia prosedural.',
      trimester3: 'Standar emas analgesia persalinan epidural/intratekal. Bila diberikan IV dosis tinggi mendekati partus, pantau depresi napas neonatus.'
    },
    halesLactationRating: 'L2',
    relativeInfantDosePercent: 1.5,
    breastfeedingSummary: 'Ekskresi ke ASI sangat rendah bila digunakan dosis anestesi perioperatif singkat. Kompatibel dengan inisiasi menyusui dini (IMD) pascaoperasi.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Morphine', 'Paracetamol IV'],
    clinicalRecommendations: 'Pilihan analgesia persalinan paling populer via kateter epidural kontinu karena onset cepat dan stabilitas hemodinamik yang baik.',
    references: 'American Society of Anesthesiologists (ASA) Practice Guidelines for Obstetric Anesthesia'
  },
  {
    id: 'preg-cefoperazone-single',
    name: 'Cefoperazone',
    genericName: 'Cefoperazone Sodium',
    category: 'Antibakteri Sefalosporin Generasi ke-3 Antipseudomonas',
    brandNames: ['Cefobid', 'Biorazon', 'Cefoperazone Generik'],
    fdaCategory: 'B',
    pllrSummary: 'Sefalosporin generasi ke-3 parenteral dengan eliminasi terutama melalui sistem empedu hepar (biliaris). Sangat aman pada kehamilan untuk kolangitis, kolesistitis akut, dan sepsis obstetri.',
    trimesterRisks: {
      trimester1: 'Aman, tidak teratogenik.',
      trimester2: 'Aman dan efektif untuk infeksi saluran empedu dan intra-abdominal.',
      trimester3: 'Aman hingga persalinan.'
    },
    halesLactationRating: 'L2',
    relativeInfantDosePercent: 1.0,
    breastfeedingSummary: 'Ekskresi ke ASI minimal. Kompatibel dengan menyusui.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Ceftriaxone', 'Cefotaxime'],
    clinicalRecommendations: 'Dosis: 1-2 gram IV tiap 12 jam. Tidak memerlukan penyesuaian dosis pada gangguan fungsi ginjal karena klirens via bilier.',
    references: 'Sanford Guide to Antimicrobial Therapy & Briggs 12th Ed'
  },
  {
    id: 'preg-cefpirome',
    name: 'Cefpirome',
    genericName: 'Cefpirome Sulfate',
    category: 'Antibakteri Sefalosporin Generasi ke-4 Spektrum Luas',
    brandNames: ['Cefrom', 'Cefpirome Generik'],
    fdaCategory: 'B',
    pllrSummary: 'Sefalosporin generasi ke-4 struktur zwitterion yang tahan hidrolisis beta-laktamase kromosomal AmpC. Pilihan parenteral aman untuk infeksi nosokomial berat dan pneumonia berat pada wanita hamil.',
    trimesterRisks: {
      trimester1: 'Aman, tidak teratogenik.',
      trimester2: 'Aman untuk infeksi bakteri berat refrakter.',
      trimester3: 'Aman hingga aterm.'
    },
    halesLactationRating: 'L2',
    relativeInfantDosePercent: 1.2,
    breastfeedingSummary: 'Hanya trace amount yang masuk ke ASI. Aman untuk ibu menyusui.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Meropenem', 'Cefepime'],
    clinicalRecommendations: 'Dosis: 1-2 gram IV tiap 12 jam. Sangat efektif untuk infeksi bakteri gram positif dan gram negatif berat.',
    references: 'Briggs Drugs in Pregnancy and Lactation & Hale 2023'
  },
  {
    id: 'preg-valganciclovir',
    name: 'Valganciclovir',
    genericName: 'Valganciclovir Hydrochloride',
    category: 'Antivirus Analog Nukleosida / Terapi Sitomegalovirus (CMV)',
    brandNames: ['Valcyte'],
    fdaCategory: 'C',
    pllrSummary: 'Prodrug oral L-valyl gansiklovir untuk terapi infeksi Sitomegalovirus (CMV) aktif. Berpotensi embriotoksik pada hewan, batasi pada ibu hamil dengan infeksi CMV berat yang mengancam penglihatan (retinitis CMV) atau penyakit sistemik berat.',
    trimesterRisks: {
      trimester1: 'Gunakan hanya jika manfaat penyelamatan jiwa/organ ibu melebihi risiko embriotoksik.',
      trimester2: 'Dapat dipertimbangkan pada retinitis CMV aktif.',
      trimester3: 'Merupakan terapi oral lini pertama pascasalin untuk bayi dengan CMV kongenital simtomatik.'
    },
    halesLactationRating: 'L4',
    relativeInfantDosePercent: 5.0,
    breastfeedingSummary: 'Potensi toksisitas sumsum tulang dan karsinogenik teoritis. HINDARI menyusui bila ibu menerima terapi valgansiklovir.',
    teratogenicAlert: 'Embriotoksisitas dan teratogenesis kraniofasial/skeletal pada model hewan.',
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: true,
    safeAlternatives: ['Acyclovir (bila HSV/VZV)'],
    clinicalRecommendations: 'Pada neonatus terkonfirmasi CMV kongenital simtomatik, Valganciclovir oral sirup 16 mg/kgBB 2x/hari selama 6 bulan terbukti mencegah penurunan pendengaran dan defisit neurodevelopmental.',
    references: 'Congenital Cytomegalovirus Consensus Guidelines & CDC'
  },
  {
    id: 'preg-theophylline',
    name: 'Theophylline',
    genericName: 'Theophylline / Aminophylline',
    category: 'Bronkodilator Metilsantin / Asma Gestasional Refrakter',
    brandNames: ['Bronsolvan', 'Retaphyl SR', 'Aminophylline Injeksi'],
    fdaCategory: 'C',
    pllrSummary: 'Bronkodilator metilsantin lini ketiga untuk asma bronkial yang refrakter terhadap inhaler beta-2 agonis dan kortikosteroid. Klirens teofilin menurun pada trimester 3, wajib pemantauan Therapeutic Drug Monitoring (TDM) kadar serum.',
    trimesterRisks: {
      trimester1: 'Aman, tidak teratogenik.',
      trimester2: 'Aman, pantau kadar serum.',
      trimester3: 'Klirens hepar menurun; bila kadar serum >15-20 mcg/mL, timbul takikardia, muntah, tremor, dan iritabilitas pada janin dan neonatus.'
    },
    halesLactationRating: 'L3',
    relativeInfantDosePercent: 4.5,
    breastfeedingSummary: 'Ekskresi ke ASI moderat (<5% RID). Bayi dapat mengalami iritabilitas, insomnia, atau takikardia bila ibu mengonsumsi dosis tinggi.',
    teratogenicAlert: null,
    isContraindicatedInPregnancy: false,
    isContraindicatedInLactation: false,
    safeAlternatives: ['Salbutamol MDI', 'Budesonide Inhaler', 'Ipratropium'],
    clinicalRecommendations: 'Target kadar teofilin serum kehamilan: 5 - 12 mcg/mL (lebih rendah dari target non-hamil). Periksa kadar serum tiap trimester.',
    references: 'GINA 2023 Guidelines & Briggs 12th Ed'
  }
];

/**
 * 6 New Comprehensive Clinical Condition Guides for Pregnancy & Lactation
 */
export const NEW_SAFE_PREGNANCY_CONDITIONS: SafePregnancyConditionGuide[] = [
  {
    id: 'cond-torch-ims',
    conditionName: 'Infeksi TORCH & Infeksi Menular Seksual Gestasional',
    category: 'Infeksi Obstetri',
    firstLineSafeDrugs: [
      {
        drugName: 'Spiramycin (Rovamycine)',
        fdaCategory: 'B (Lini 1 Toksoplasmosis Akut TM 1)',
        dosageNote: '1 gram (3 MIU) tiap 8 jam oral kontinu hingga persalinan',
        safetyProfile: 'Mencegah transmisi plasenta parasit Toxoplasma gondii ke janin hingga 60% tanpa efek samping teratogenik.'
      },
      {
        drugName: 'Benzathine Penicillin G',
        fdaCategory: 'B (Gold Standard Sifilis Maternal)',
        dosageNote: '2.4 juta IU IM dosis tunggal (atau 3 dosis mingguan untuk sifilis laten)',
        safetyProfile: 'Satu-satunya terapi terbukti yang menembus plasenta dan menyembuhkan sifilis kongenital janin.'
      },
      {
        drugName: 'Azithromycin',
        fdaCategory: 'B (Lini 1 Klamidia)',
        dosageNote: '1 gram oral dosis tunggal',
        safetyProfile: 'Menggantikan Doksisiklin yang kontraindikasi; kepatuhan tinggi dan sangat aman untuk janin.'
      },
      {
        drugName: 'Clotrimazole Tablet Vagina',
        fdaCategory: 'B (Lini 1 Kandidiasis Vagina)',
        dosageNote: '100 mg ovula tiap malam x 7 hari',
        safetyProfile: 'Absorpsi sistemik minimal (<1%), 100% aman untuk janin di semua trimester.'
      }
    ],
    secondLineAlternativeDrugs: [
      {
        drugName: 'Metronidazole',
        fdaCategory: 'B (Trikomoniasis & BV)',
        dosageNote: '500 mg 2x/hari oral selama 7 hari',
        safetyProfile: 'Pilihan aman dan efektif untuk mengatasi keputihan patologis dan mencegah ketuban pecah dini (KPD).'
      },
      {
        drugName: 'Valaciclovir / Acyclovir',
        fdaCategory: 'B (Herpes Genital)',
        dosageNote: 'Valaciclovir 500 mg 2x/hari mulai minggu ke-36',
        safetyProfile: 'Profilaksis supresif mencegah transmisi virus herpes saat partus pervaginam.'
      }
    ],
    strictlyContraindicatedDrugs: [
      {
        drugName: 'Doxycycline & Tetracycline',
        riskReason: 'KONTRAINDIKASI MUTLAK. Pewarnaan gigi kuning permanen, hipoplasia email, dan penghambatan pertumbuhan tulang janin.'
      },
      {
        drugName: 'Fluconazole Dosis Tinggi Oral (>150-400 mg)',
        riskReason: 'Risiko malformasi kraniofasial dan kardiak janin pada trimester 1.'
      }
    ],
    clinicalPearls: [
      'Skrining serologi TORCH dan VDRL/TPHA wajib dilakukan pada trimester 1 (ANC Terpadu).',
      'Pasangan seksual wajib diobati secara simultan pada kasus Sifilis, Klamidia, dan Trikomoniasis untuk mencegah reinfeksi ping-pong.'
    ]
  },
  {
    id: 'cond-anemia-nutrisi',
    conditionName: 'Anemia Defisiensi Besi & Suplementasi Nutrisi Maternal',
    category: 'Hematologi & Nutrisi',
    firstLineSafeDrugs: [
      {
        drugName: 'Asam Folat (Folic Acid)',
        fdaCategory: 'A (Wajib Sejak Prakonsepsi)',
        dosageNote: '400 mcg/hari (profilaksis) atau 4-5 mg/hari (ibu risiko tinggi/epilepsi/obesitas)',
        safetyProfile: 'Mencegah Neural Tube Defects (anensefali & spina bifida) hingga 70-80%.'
      },
      {
        drugName: 'Ferrous Fumarate / Ferrous Sulfate (TTD Kemenkes)',
        fdaCategory: 'A (Lini 1 Anemia)',
        dosageNote: '1 tablet (60 mg besi elemental) per hari selama minimal 90 hari kehamilan',
        safetyProfile: 'Mencegah berat badan lahir rendah (BBLR), prematuritas, dan perdarahan pascasalin maternal.'
      },
      {
        drugName: 'Kalsium Karbonat (Calcium Carbonate)',
        fdaCategory: 'A (Pencegahan Preeklampsia)',
        dosageNote: '1.5 - 2.0 gram kalsium elemental/hari terbagi 3 dosis bersama makan',
        safetyProfile: 'Rekomendasi WHO/POGI menurunkan insidensi preeklampsia pada populasi asupan kalsium rendah.'
      }
    ],
    secondLineAlternativeDrugs: [
      {
        drugName: 'Iron Sucrose IV',
        fdaCategory: 'B (Bila Intoleran Oral / Anemia Berat)',
        dosageNote: '200 mg IV pelan (dihitung via rumus Ganzoni)',
        safetyProfile: 'Menaikkan hemoglobin cepat pada trimester 3 tanpa keluhan mual/konstipasi gastrointestinal.'
      }
    ],
    strictlyContraindicatedDrugs: [
      {
        drugName: 'Retinol / Vitamin A Dosis Tinggi (>10.000 IU/hari)',
        riskReason: 'KONTRAINDIKASI MUTLAK. Embriopati retinoid kraniofasial dan kardiovaskular parah.'
      }
    ],
    clinicalPearls: [
      'Jangan meminum Tablet Tambah Darah (besi) bersamaan dengan susu, teh, kopi, atau kalsium (jarakkan minimal 2 jam).',
      'Minum zat besi bersama air jeruk (Vitamin C) melipatgandakan absorpsi besi non-heme di duodenum.'
    ]
  },
  {
    id: 'cond-depresi-cemas',
    conditionName: 'Depresi Perinatal & Gangguan Kecemasan Postpartum',
    category: 'Kesehatan Jiwa Maternal',
    firstLineSafeDrugs: [
      {
        drugName: 'Sertraline (Zoloft)',
        fdaCategory: 'C (Lini 1 Kehamilan) / L2 (Lini 1 Emas Laktasi)',
        dosageNote: '50-100 mg sekali sehari pagi hari',
        safetyProfile: 'Transfer ke ASI paling rendah di antara seluruh SSRI (RID <2%). Standar emas dunia masa menyusui.'
      },
      {
        drugName: 'Escitalopram (Cipralex)',
        fdaCategory: 'C',
        dosageNote: '10-20 mg sekali sehari',
        safetyProfile: 'Selektivitas serotonergik tinggi dengan interaksi obat sangat minimal.'
      }
    ],
    secondLineAlternativeDrugs: [
      {
        drugName: 'Fluoxetine (Prozac)',
        fdaCategory: 'C',
        dosageNote: '20-40 mg/hari',
        safetyProfile: 'Aman untuk kehamilan; bila digunakan saat menyusui pantau bayi terhadap iritabilitas karena metabolit norfluoksetin berwaktu paruh panjang.'
      },
      {
        drugName: 'Amitriptyline',
        fdaCategory: 'C (Dosis Rendah)',
        dosageNote: '10-25 mg malam hari',
        safetyProfile: 'Membantu mengatasi insomnia berat dan kecemasan malam hari.'
      }
    ],
    strictlyContraindicatedDrugs: [
      {
        drugName: 'Paroxetine (Seroxat)',
        riskReason: 'Kategori D. Terbukti meningkatkan risiko malformasi septum kardiak janin (VSD/ASD) pada trimester 1.'
      },
      {
        drugName: 'Benzodiazepin Jangka Panjang Dosis Tinggi',
        riskReason: 'Memicu Floppy Infant Syndrome, depresi pernapasan neonatal, dan sindrom putus zat.'
      }
    ],
    clinicalPearls: [
      'Depresi maternal yang tidak diobati meningkatkan risiko preeklampsia, kelahiran prematur, dan kegagalan ikatan emosional (bonding) ibu-anak.',
      'Terapi psikologis non-farmakologis (CBT / Terapi Perilaku Kognitif) selalu menjadi lini pendamping utama.'
    ]
  },
  {
    id: 'cond-konstipasi-hemoroid',
    conditionName: 'Konstipasi Gestasional & Hemoroid Kehamilan',
    category: 'Gastrointestinal Obstetri',
    firstLineSafeDrugs: [
      {
        drugName: 'Lactulose Sirup',
        fdaCategory: 'B (Lini 1 Osmotik)',
        dosageNote: '15-30 mL sekali sehari setelah makan',
        safetyProfile: '100% tidak diserap ke dalam darah dan tidak menembus plasenta. Paling aman di dunia.'
      },
      {
        drugName: 'Serat Psyllium (Metamucil)',
        fdaCategory: 'B (Bulk-forming Laxative)',
        dosageNote: '1 saset dilarutkan dalam segelas air 1-2x/hari',
        safetyProfile: 'Bekerja secara mekanis menyerap air dan memperbesar volume feses secara fisiologis.'
      },
      {
        drugName: 'Antihemorrhoid Supositoria / Salep Topikal',
        fdaCategory: 'C (Aman Topikal)',
        dosageNote: '1 supositoria dimasukkan rektal malam hari setelah BAB',
        safetyProfile: 'Meredakan nyeri dan inflamasi lokal anus tanpa efek samping sistemik pada janin.'
      }
    ],
    secondLineAlternativeDrugs: [
      {
        drugName: 'Docusate Sodium',
        fdaCategory: 'C (Stool Softener)',
        dosageNote: '100 mg 1-2x/hari',
        safetyProfile: 'Melunakkan massa feses yang keras pada hemoroid aktif.'
      },
      {
        drugName: 'Bisacodyl Supositoria',
        fdaCategory: 'C (Laksatif Stimulan Singkat)',
        dosageNote: '10 mg supositoria rektal bila 3 hari tidak BAB',
        safetyProfile: 'Absorpsi sistemik minimal; batasi maksimal 2-3 hari berturut-turut.'
      }
    ],
    strictlyContraindicatedDrugs: [
      {
        drugName: 'Minyak Jarak (Castor Oil)',
        riskReason: 'KONTRAINDIKASI MUTLAK. Memicu kontraksi uterus hebat dan kelahiran prematur.'
      },
      {
        drugName: 'Pencahar Stimulan Dosis Tinggi / Kronis',
        riskReason: 'Dehidrasi maternal, hipokalemia, dan ketergantungan saluran cerna.'
      }
    ],
    clinicalPearls: [
      'Tingkatkan konsumsi serat alami (sayur hijau, buah pepaya, pir) dan cairan minimal 2.5 liter per hari.',
      'Hindari kebiasaan menahan buang air besar dan mengejan terlalu kuat saat buang air besar.'
    ]
  },
  {
    id: 'cond-epilepsi-kejang',
    conditionName: 'Epilepsi & Gangguan Kejang Maternal',
    category: 'Neurologi Obstetri',
    firstLineSafeDrugs: [
      {
        drugName: 'Levetiracetam (Keppra)',
        fdaCategory: 'C (Lini 1 Teraman Modern)',
        dosageNote: '500-1500 mg 2 kali sehari (Titrasi sesuai respons)',
        safetyProfile: 'Tingkat malformasi kongenital terendah di antara seluruh antiepilepsi (<2-3%, setara populasi umum).'
      },
      {
        drugName: 'Lamotrigine (Lamictal)',
        fdaCategory: 'C (Lini 1 Teruji)',
        dosageNote: '100-300 mg/hari terbagi (perlu peningkatan dosis saat hamil)',
        safetyProfile: 'Profil keamanan janin sangat baik; klirens meningkat pesat pada TM 2 & 3 sehingga memerlukan pemantauan TDM.'
      },
      {
        drugName: 'Asam Folat Dosis Tinggi (4-5 mg/hari)',
        fdaCategory: 'A (Wajib pada Epilepsi)',
        dosageNote: '4-5 mg sekali sehari sejak 3 bulan sebelum konsepsi',
        safetyProfile: 'Menangkal efek antagonisme folat dari obat antiepilepsi dan mencegah spina bifida.'
      }
    ],
    secondLineAlternativeDrugs: [
      {
        drugName: 'Carbamazepine (Tegretol)',
        fdaCategory: 'D (Monoterapi Terendah)',
        dosageNote: 'Dosis efektif terendah terbagi 3-4 kali sehari',
        safetyProfile: 'Hanya jika levetiracetam/lamotrigine gagal mengontrol kejang tonik-klonik fokal.'
      }
    ],
    strictlyContraindicatedDrugs: [
      {
        drugName: 'Asam Valproat (Depakene / Depakote)',
        riskReason: 'KONTRAINDIKASI KERAS. Teratogen mayor: spina bifida (1-2%), mikrosefali, penurunan skor IQ anak 8-10 poin, autisme.'
      },
      {
        drugName: 'Politerapi Multipel Antiepilepsi Tanpa Indikasi Ketat',
        riskReason: 'Melipatgandakan risiko malformasi kongenital hingga >10-15%.'
      }
    ],
    clinicalPearls: [
      'Prinsip terapi epilepsi kehamilan: MONOTERAPI dengan DOSIS EFEKTIF TERENDAH + ASAM FOLAT DOSIS TINGGI (5 mg/hari).',
      'Kejang tonik-klonik konvulsif maternal yang tidak terkontrol memicu hipoksia otak janin berat dan solusio plasenta.'
    ]
  },
  {
    id: 'cond-alergi-rinitis',
    conditionName: 'Rinitis Alergi & Urtikaria Kehamilan',
    category: 'Alergi & Imunologi',
    firstLineSafeDrugs: [
      {
        drugName: 'Cetirizine',
        fdaCategory: 'B (Lini 1 Antihistamin Generasi 2)',
        dosageNote: '10 mg sekali sehari malam hari',
        safetyProfile: 'Pilihan utama internasional dengan rekam jejak puluhan ribu kehamilan tanpa efek teratogenik.'
      },
      {
        drugName: 'Loratadine',
        fdaCategory: 'B (Lini 1 Non-Sedatif)',
        dosageNote: '10 mg sekali sehari pagi hari',
        safetyProfile: 'Sangat aman, tidak menembus sawar otak (non-sedatif), pilihan ideal untuk ibu aktif bekerja.'
      },
      {
        drugName: 'Budesonide Nasal Spray (Rhinocort)',
        fdaCategory: 'B (Lini 1 Kortikosteroid Topikal Nasal)',
        dosageNote: '1-2 semprotan per lubang hidung 1 kali sehari',
        safetyProfile: 'Kortikosteroid nasal paling aman; bekerja lokal mengatasi hidung tersumbat alergi parah.'
      }
    ],
    secondLineAlternativeDrugs: [
      {
        drugName: 'Chlorpheniramine / CTM',
        fdaCategory: 'B (Antihistamin Generasi 1)',
        dosageNote: '4 mg tiap 6-8 jam',
        safetyProfile: 'Teruji sangat aman sejak era 1960-an; efek samping mengantuk bermanfaat bila alergi disertai insomnia.'
      },
      {
        drugName: 'Saline Nasal Spray (Larutan Garam Fisiologis)',
        fdaCategory: 'Non-Farmakologis',
        dosageNote: 'Semprotkan bebas sesuai kebutuhan',
        safetyProfile: 'Membersihkan alergen mukosa hidung secara mekanis 100% bebas bahan kimia.'
      }
    ],
    strictlyContraindicatedDrugs: [
      {
        drugName: 'Pseudoephedrine & Dekongestan Oral pada Trimester 1',
        riskReason: 'Vasokonstriksi pembuluh darah arteri plasenta memicu defek dinding abdomen janin (Gastroskisis).'
      },
      {
        drugName: 'Dekongestan Topikal (Oxymetazoline) Penggunaan Kronis >3-5 Hari',
        riskReason: 'Rhinitis medicamentosa (rebound congestion) parah dan iskemia mukosa nasal.'
      }
    ],
    clinicalPearls: [
      'Rinitis gestasional fisiologis (akibat lonjakan hormon estrogen) sering disalahartikan sebagai alergi; utamakan irigasi saline nasal.',
      'Hindari dekongestan oral (seperti obat flu kombinasi bebas yang mengandung pseudoefedrin/fenilpropanolamin).'
    ]
  }
];
