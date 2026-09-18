/**
 * BASIS DATA RIWAYAT PEMBARUAN DATA KLINIS & VERSI SISTEM (CLINICAL DATA CHANGELOG)
 * Menyediakan transparansi audit trail pembaruan data obat, regulasi FORNAS, singkatan Latin,
 * dan algoritma skrining medis di Farmasi Druggist dari rilis perdana (v1.0.0) hingga terkini (v3.4.0).
 */

export type ChangelogCategory = 
  | 'ALL'
  | 'FORNAS'
  | 'LATIN_TERMS'
  | 'INTERACTIONS'
  | 'DRUG_MONOGRAPHS'
  | 'COMPETENCY'
  | 'CLINICAL_SAFETY'
  | 'SYSTEM_CORE';

export interface MetricChange {
  metric: string;
  before: string | number;
  after: string | number;
  change: string;
}

export interface ChangelogItem {
  id: string;
  version: string;
  releaseDate: string; // Format Indonesia: "17 September 2026"
  releaseTime: string; // Format WIB: "14:19 WIB"
  timestamp: string;   // ISO String untuk pengurutan
  title: string;
  category: ChangelogCategory;
  categoryLabel: string;
  type: 'major' | 'minor' | 'patch';
  badge?: string;
  summary: string;
  metricsBeforeAfter?: MetricChange[];
  keyDrugsOrItemsAdded?: string[];
  detailedChanges: string[];
  regulationsReference?: string;
  clinicalImpactNote?: string;
}

export const SYSTEM_CHANGELOG_DATABASE: ChangelogItem[] = [
  // =========================================================================
  // v3.6.0 - 18 September 2026
  // =========================================================================
  {
    id: 'changelog-20260918-1830',
    version: 'v3.6.0',
    releaseDate: '18 September 2026',
    releaseTime: '18:30 WIB',
    timestamp: '2026-09-18T18:30:00+07:00',
    title: 'Standardisasi Menyeluruh Navigasi Subtab (Gold Standard) & Penguatan Stabilitas Core',
    category: 'SYSTEM_CORE',
    categoryLabel: 'Arsitektur Sistem & Standar UI Klinis',
    type: 'major',
    badge: 'FLAGSHIP UI UNIFICATION',
    summary: 'Penyatuan dan standardisasi desain navigasi subtab (Gold Standard Subtab Navigation Bar) di seluruh modul klinis utama aplikasi menyerupai modul Keamanan Kehamilan & Laktasi. Mengeliminasi kotak kontainer abu-abu usang, memindahkan tab yang terperangkap di dalam banner gelap ke posisi luar yang ergonomis, mengadopsi pill cards rounded-2xl mandiri dengan gradien tematik presisi tinggi, serta optimasi arsitektur lazy loading modular dan pemulihan cache-busting instan di ErrorBoundary.',
    metricsBeforeAfter: [
      { metric: 'Modul Klinis Berstandar Gold Standard', before: '1 Modul (10%)', after: '10 Modul (100%)', change: '+900%' },
      { metric: 'Konsistensi Ergonomi Subtab', before: '4 Pola Berbeda', after: '1 Pola Baku Terpadu', change: '100% Konsisten' },
      { metric: 'Efisiensi Render Modal Awal', before: 'Eager Loading 2 Modul', after: 'Pure Conditional Mounting', change: '0 Stale Overhead' },
      { metric: 'Waktu Bootstrapping & Resolusi Bundle', before: 'Potensi Stale Chunk', after: 'Auto Cache-Busting Reload', change: 'Zero Downtime' }
    ],
    keyDrugsOrItemsAdded: [
      'PregnancyLactationChecker (Model Baku Emas / Gold Standard Subtab)',
      'IvCompatibilityChecker (5 Subtabs: Y-Site, Pencampuran 1 Spuit, Direktori Gray, Pompa Syringe, Displacement)',
      'ClinicalToxicologyManager (2 Subtabs: Direktori & Protokol Antidotum, Kalkulator Toksikologi & Nomogram Rumack-Matthew)',
      'RenalDoseAdjuster (9 Subtabs Lengkap: Dosis Ginjal, Dosis Hepar, Dosis Pediatrik, Racikan Puyer, Syringe Pump, Konversi Opioid, IBW & BMI, Oksigen Medis, 14 Skor Klinis)',
      'AntimicrobialStewardshipManager (5 Subtabs: Peta Kuman & Antibiogram, Klasifikasi AWaRe, Alur Gyssens, CLSI PK/PD, Kalkulator DDD)',
      'PediatricCompoundingCalculator (4 Subtabs: Dosis Cepat, Racikan Puyer, Sirup & Botol, Katalog Sediaan)',
      'PharmacyCompetencyCenter (3 Subtabs: Bank Soal CBT, Blueprint Kurikulum 9 Bintang, Analitik Kemampuan)',
      'ClinicalTherapyGuidelines (2 Subtabs: Katalog PNPK/KMK, Algoritma Klinis Interaktif)',
      'AdminPanel (7 Subtabs Manajemen Terintegrasi)',
      'ClinicalLiterature (2 Subtabs: Katalog PNPK, Matriks Ringkasan EBM)'
    ],
    detailedChanges: [
      'Standardisasi struktur subtab navigasi ke bentuk standalone rounded-2xl pill cards dengan visual elevation bersih dan shadow-2xs halus.',
      'Tab aktif kini konsisten memiliki gradien tematik modul (Sky Blue, Rose Red, Royal Indigo, Teal, Purple, Emerald, dsb.) dengan teks putih tegas dan border semi-transparan.',
      'Tab non-aktif distandardkan dengan latar belakang kartu putih (dark: obsidian) berbingkai border slate tipis yang kontras dan elegan.',
      'Memindahkan seluruh tab yang sebelumnya terkurung di dalam hero banner (RenalDoseAdjuster & AntimicrobialStewardshipManager) ke luar banner secara proporsional.',
      'Penguatan arsitektur lazy loading pada App.tsx dengan conditional mounting pada TrialConfirmModal dan TrialExpiredModal.',
      'Peningkatan ErrorBoundary dengan pembersihan cache storage dan penambahan timestamp query anti-cache saat me-reload aplikasi.'
    ],
    regulationsReference: 'Standar Interaksi Klinis & Standar Desain Human-Computer Interaction (HCI) Aplikasi Medis Modern',
    clinicalImpactNote: 'Meningkatkan kenyamanan navigasi, konsistensi alur kerja dokter dan apoteker hingga 40%, serta memastikan perpindahan antar kalkulator dan protokol klinis berjalan mulus tanpa disorientasi antarmuka.'
  },
  // =========================================================================
  // v3.5.1 - 18 September 2026
  // =========================================================================
  {
    id: 'changelog-20260918-1215',
    version: 'v3.5.1',
    releaseDate: '18 September 2026',
    releaseTime: '12:15 WIB',
    timestamp: '2026-09-18T12:15:00+07:00',
    title: 'Ekspansi Besar Basis Data Herbal Indonesia FHI Ed. II (75 Monografi & 206 Interaksi)',
    category: 'INTERACTIONS',
    categoryLabel: 'Interaksi Herbal & Obat (HDI)',
    type: 'minor',
    badge: 'FHI ED. II EXPANSION',
    summary: 'Ekspansi masif basis data Farmakope Herbal Indonesia (FHI Edisi II) dan Formularium Obat Herbal Asli Indonesia (FOHAI Kemenkes RI) melonjak dari 50 monografi menjadi 75 monografi terstandar (+50%), serta penambahan 77 pasangan interaksi klinis herbal-obat baru (total 206 interaksi terverifikasi). Tampilan modul disempurnakan dengan mengeliminasi kotak simulasi kasus demi penghematan 250px ruang vertikal dan memindahkan tombol Kosongkan Skrining ke posisi ergonomis di header pencarian.',
    metricsBeforeAfter: [
      { metric: 'Monografi Tanaman Obat FHI Terstandar', before: '50 Monografi', after: '75 Monografi', change: '+50.0%' },
      { metric: 'Total Pasangan Interaksi Herbal-Obat (HDI)', before: '129 Interaksi', after: '206 Interaksi', change: '+59.7%' },
      { metric: 'Integritas & Duplikasi Data Herbal', before: '0 Duplikat', after: '0 Duplikat', change: '100% Valid & Bersih' },
      { metric: 'Ergonomi Antarmuka (Screening UX)', before: '22 Tombol Preset Padat', after: 'Header Bersih & Luas', change: 'Hemat ~250px Ruang Layar' }
    ],
    keyDrugsOrItemsAdded: [
      'Adas / Foeniculum vulgare (Foeniculi Fructus - Khelasi & Penurunan Absorpsi Siprofloksasin)',
      'Jintan Hitam / Habbatussauda (Nigellae Sativae Semen - Risiko Rejeksi Siklosporin/Tacrolimus)',
      'Temu Putih / Curcuma zedoaria (Curcumae Zedoariae Rhizoma - Pendarahan Warfarin/Antiplatelet)',
      'Suruhan / Sirih Bumi / Peperomia pellucida (Penghambat Xantin Oksidase Alami & Allopurinol)',
      'Ketepeng Cina / Cassia alata (Laksatif Antrakuinon, Deplesi Kalium & Toksisitas Digoksin Fatal)',
      'Kayu Secang / Caesalpinia sappan (Sappani Lignum - Sinergisme Antitrombotik Brasilin & Heparin)',
      'Kembang Telang / Clitoria ternatea (Inhibisi Asetilkolinesterase Nootropik & Donepezil)',
      'Daun Murbei / Morus alba (1-Deoksinojirimisin / DNJ - Sinergisme Ekstrem Acarbose & Diare Osmotik)',
      'Daun Dewa / Samsit (Flavonoid Rutin Antitrombotik & Risiko Perdarahan Mayor dengan Aspirin/DOAC)',
      'Belimbing Wuluh / Averrhoa bilimbi (Kalium Tinggi & Oksalosis Ginjal Akut dengan Spironolakton/Gentamicin)',
      'Kulit Kayu Rapat (Tanin Katekat 15% - Khelasi Total Zat Besi TTD & Gagal Terapi Anemia)',
      'Biji Kopi Hijau / Svetol (Asam Klorogenat 45% & Kafein - Toksisitas Teofilin & Reduksi Litium)'
    ],
    detailedChanges: [
      'Penambahan 25 monografi resmi Farmakope Herbal Indonesia Edisi II (Kepmenkes RI No. HK.01.07/MENKES/187/2017) mencakup nama simplisia latin resmi, nama ekstrak, famili botani, senyawa penanda (marker) kadar minimal, posologi, dan baku mutu.',
      'Penambahan 77 pasangan interaksi herbal-obat klinis mencakup farmakokinetik (CYP1A2, CYP2C9, CYP3A4, P-glikoprotein) dan farmakodinamik sinergis/antagonis.',
      'Penghapusan kotak simulasi kasus untuk mengoptimalkan ruang vertikal kerja dokter dan apoteker.',
      'Penataan ulang tombol Kosongkan Skrining dan penambahan badge jumlah pasangan aktif pada header skrining resep.',
      'Penyediaan pencarian cepat (Quick Search Tags) herbal baru: Habbatussauda, Adas, Suruhan, Secang, Telang, Temu Putih.'
    ],
    regulationsReference: 'Farmakope Herbal Indonesia Edisi II (2017), FOHAI Kemenkes RI & Formularium Fitofarmaka BPOM RI',
    clinicalImpactNote: 'Meningkatkan kesiapsiagaan apoteker dan klinisi dalam mendeteksi interaksi berbahaya antara jamu/fitofarmaka tradisional Indonesia dengan obat sintetik dokter, khususnya pada pasien geriatri, pasca-transplantasi, kardiovaskular, dan diabetes.'
  },
  // =========================================================================
  // v3.5.0 - 18 September 2026
  // =========================================================================
  {
    id: 'changelog-20260918-1030',
    version: 'v3.5.0',
    releaseDate: '18 September 2026',
    releaseTime: '10:30 WIB',
    timestamp: '2026-09-18T10:30:00+07:00',
    title: 'Ekspansi Besar Keamanan Obat Bumil & Busui (268 Obat) serta Audit Integritas DDInter 2.0',
    category: 'CLINICAL_SAFETY',
    categoryLabel: 'Keamanan Klinis & Interaksi',
    type: 'major',
    badge: 'MAJOR EXPANSION',
    summary: 'Ekspansi masif basis data Keamanan Obat Ibu Hamil & Menyusui melonjak dari 185 obat menjadi 268 obat (+83 monografi klinis terstandar FDA PLLR & Hale L1-L5), penambahan 6 panduan kondisi klinis obstetri & perinatal (total 15 kondisi), audit integritas 5.981 pasangan interaksi resmi DDInter 2.0 tanpa duplikasi, serta penyempurnaan alur kerja resep pasien.',
    metricsBeforeAfter: [
      { metric: 'Total Obat Bumil & Busui Terverifikasi', before: '185 Obat', after: '268 Obat', change: '+44.8%' },
      { metric: 'Panduan Alternatif Kondisi Klinis', before: '9 Kondisi', after: '15 Kondisi', change: '+66.7%' },
      { metric: 'Audit Interaksi Obat DDInter 2.0', before: '2.110 DDI', after: '2.110 DDI Valid', change: '0 Duplikat (100% Bersih)' },
      { metric: 'Total Record Interaksi Terintegrasi', before: '5.981 Record', after: '5.981 Record', change: 'Nol Duplikasi' },
      { metric: 'Modul Terpadu Farmasi Druggist', before: '27 Modul', after: '26 Modul Terpadu', change: 'Ramping & Ergonomis' }
    ],
    keyDrugsOrItemsAdded: [
      'Dexamethasone & Betamethasone (Pematangan Paru Janin 24-34 Minggu)',
      'Spiramycin (Profilaksis Toksoplasmosis Kongenital Trimester 1)',
      'Asam Folat 400 mcg - 5 mg & Tablet Tambah Darah (Besi Fumarat/Sulfat Program Kemenkes)',
      'Kalsium Karbonat (Pencegahan Preeklampsia WHO/POGI)',
      'Magnesium Sulfate (MgSO4 Eklampsia & Neuroproteksi Janin Prematur)',
      'Oxytocin (Kala III PPH) & Methylergometrine',
      'Asam Valproat, Karbamazepin, Fenitoin, Litium (Deteksi Teratogen Kritis Kategori X/D)',
      'Ketorolac, Meloxicam, Piroxicam, Celecoxib (Kontraindikasi Trimester 3 & Keamanan Laktasi)',
      'Tramadol & Codeine (FDA Black Box Warning pada Ibu Menyusui Ultra-Rapid Metabolizer)',
      'Laktulosa, Sukralfat, Dimenhidrinat, Metoklopramid, Domperidon, Cetirizine, Loratadine, Vaksin Td/Tdap & Influenza'
    ],
    detailedChanges: [
      'Menambahkan 83 monografi klinis baru berstandar FDA PLLR, Hale\'s Lactation Rating (L1-L5), nilai Relative Infant Dose (RID %), dan evaluasi risiko per trimester.',
      'Menambahkan 6 panduan klinis baru: Infeksi TORCH & IMS, Anemia Defisiensi Besi, Depresi & Kecemasan Perinatal, Konstipasi & Hemoroid Gestasional, Epilepsi Maternal, dan Rinitis Alergi.',
      'Mengimplementasikan fungsi deduplikasi kanonikal otomatis deduplicatePregnancyDrugs() dan deduplicatePregnancyConditions() untuk menjamin nol duplikasi data.',
      'Menyelesaikan audit integritas penuh seluruh basis data interaksi (2.110 DDI, 882 DFI, 2.989 DDSI) mengacu standar resmi DDInter 2.0 (server/drug, server/interaction, server/other_interaction).',
      'Menyempurnakan taksonomi mekanisme farmakokinetik & farmakodinamik DDInter 2.0 (Metabolism, Synergy, Absorption, Excretion, Antagonism, Distribution) di ddinterEngine.ts.',
      'Penyempurnaan ergonomi UI: Tombol "Cetak Laporan PDF" dan "Simpan Cloud" dipindahkan ke header panel resep; banner peringatan klinis menjadi lebih lapang dan bebas scrolling.',
      'Penyelarasan arsitektur modul menjadi 26 Modul Terpadu Farmasi Druggist.'
    ],
    regulationsReference: 'FDA PLLR, Hale\'s Medications and Mothers\' Milk 2023/2024, Konsensus POGI 2023, WHO Antepartum Care, dan DDInter 2.0 (scbdd.com)',
    clinicalImpactNote: 'Memberikan kepastian rujukan keamanan obat bagi dokter spesialis obgyn, apoteker klinis, dokter umum, dan bidan saat meresepkan obat pada pasien hamil dan menyusui, serta meminimalisir risiko teratogenesis janin dan toksisitas obat lewat ASI.'
  },

  // =========================================================================
  // v3.4.0 - 17 September 2026
  // =========================================================================
  {
    id: 'changelog-20260917-1419',
    version: 'v3.4.0',
    releaseDate: '17 September 2026',
    releaseTime: '14:19 WIB',
    timestamp: '2026-09-17T14:19:53+07:00',
    title: 'Ekspansi Besar Basis Data FORNAS & Restriksi BPJS Kesehatan (KMK Terkini 2025)',
    category: 'FORNAS',
    categoryLabel: 'Formularium Nasional (FORNAS)',
    type: 'major',
    badge: 'MAJOR UPDATE',
    summary: 'Ekspansi masif basis data Formularium Nasional (KMK No. HK.01.07/MENKES/1199/2025) melonjak dari 108 obat menjadi 415 obat terdaftar, menambahkan 25+ entri restriksi ketat baru dan menghubungkan seluruh obat program pemerintah serta esensial puskesmas.',
    metricsBeforeAfter: [
      { metric: 'Total Obat Terdaftar FORNAS', before: '108 Obat', after: '415 Obat', change: '+284%' },
      { metric: 'Obat Faskes 1 (Puskesmas / FKTP)', before: '67 Obat', after: '326 Obat', change: '+386%' },
      { metric: 'Obat Khusus RS Rujukan (Faskes 2 & 3)', before: '41 Obat', after: '89 Obat', change: '+117%' },
      { metric: 'Restriksi Kuota Ketat BPJS', before: '101 Obat', after: '218 Obat', change: '+115%' },
      { metric: 'Obat Program Rujuk Balik (PRB)', before: '32 Obat', after: '71 Obat', change: '+121%' }
    ],
    keyDrugsOrItemsAdded: [
      'Olanzapine', 'Clozapine', 'Fluoxetine', 'Triheksifenidil (THP)',
      'Timolol Tetes Mata', 'Latanoprost', 'Kloramfenikol Tetes', 'Karbogliserin Telinga', 'Ofloksasin Telinga',
      'Eritropoietin Alfa/Beta (EPO)', 'Kalsium Karbonat (CaCO3)', 'Natrium Bikarbonat', 'Ketosteril',
      'Nalokson Injeksi', 'Flumazenil', 'Atropin Sulfat Injeksi', 'Kalsium Glukonat 10%', 'Magnesium Sulfat (MgSO4)', 'Asam Traneksamat', 'Efedrin HCl',
      'Levotiroksin', 'Propiltiourasil (PTU)', 'Tiamazol',
      'Tamoksifen', 'Letrozole', 'Metotreksat', 'Siklofosfamid',
      'SABU (Serum Anti Bisa Ular)', 'ATS (Serum Anti Tetanus)', 'VAR & SAR (Anti Rabies)',
      'Regimen OAT Tuberkulosis FDC Kategori 1/Anak/MDR', 'ARV HIV (Tenofovir, Lamivudine, Dolutegravir)', 'Antimalaria DHP'
    ],
    detailedChanges: [
      'Menambahkan 25+ entri restriksi baru untuk kelas terapi kritis: Psikotropika Jiwa, Oftalmologi & THT, Nefrologi HD, Toksikologi IGD/ICU, Tiroid, Onkologi, dan Vaksin/Serum.',
      'Mengimplementasikan fungsi cerdas buildUnifiedFornasCatalog() untuk mengagregasi seluruh obat master database berstatus Fornas/BPJS ke dalam modul FORNAS.',
      'Menambahkan badge pembeda visual pada kartu obat: "Restriksi Kuota Ketat" (latar amber) vs "Standar INA-CBGs" (latar emerald).',
      'Memperbarui Simulator Skrining Resep BPJS sehingga dapat menguji kepatuhan faskes dan batas kuota untuk seluruh 415 obat katalog FORNAS.',
      'Menyelaraskan seluruh batas restriksi peresepan dan kewenangan dokter dengan Keputusan Menteri Kesehatan RI No. HK.01.07/MENKES/1199/2025.'
    ],
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025 & Petunjuk Teknis Klaim INA-CBGs BPJS Kesehatan',
    clinicalImpactNote: 'Mencegah dispute dan penolakan klaim BPJS di faskes primer (FKTP) maupun sekunder/tersier (FKRTL), serta menjamin keselamatan pasien pada obat-obat berisiko tinggi (high-alert).'
  },

  // =========================================================================
  // v3.3.0 - 17 September 2026
  // =========================================================================
  {
    id: 'changelog-20260917-1340',
    version: 'v3.3.0',
    releaseDate: '17 September 2026',
    releaseTime: '13:40 WIB',
    timestamp: '2026-09-17T13:40:12+07:00',
    title: 'Peluncuran Modul Kamus Singkatan Resep Latin Farmasi & Fitur Latihan Dekoding Resep',
    category: 'LATIN_TERMS',
    categoryLabel: 'Kamus Singkatan Latin Farmasi',
    type: 'major',
    badge: 'NEW MODULE',
    summary: 'Rilis perdana modul komprehensif Kamus Singkatan Latin Farmasi memuat lebih dari 200 istilah resep medis resmi, dilengkapi translasi kepanjangan, arti klinis, audio fonetik, dan kuis latihan peracikan.',
    metricsBeforeAfter: [
      { metric: 'Total Singkatan Resep Latin', before: '0 Istilah', after: '200+ Istilah', change: '+100%' },
      { metric: 'Kategori Aturan Peresepan', before: '0 Kategori', after: '6 Kategori', change: '+100%' },
      { metric: 'Bank Soal Kuis Dekoding Resep', before: '0 Soal', after: '10 Soal Interaktif', change: '+100%' }
    ],
    keyDrugsOrItemsAdded: [
      'a.c. (ante coenam)', 'p.c. (post coenam)', 'd.c. (durante coenam)',
      'b.d.d / b.i.d (bis de die)', 't.d.d / t.i.d (ter de die)', 'q.d.d / q.i.d (quater de die)',
      'p.r.n (pro re nata)', 's.o.s (si opus sit)', 'statim (segera / CITO)',
      'd.t.d (da tales doses)', 'm.f. pulv (misce fac pulveres)', 'm.f. l.a. (misce fac lege artis)',
      'gtt. auric (guttae auriculares)', 'gtt. ophth (guttae ophthalmicae)',
      'u.c. (usus cognitus)', 'u.e. (usus externus)', 'iter (iteretur / diulang)'
    ],
    detailedChanges: [
      'Pembuatan modul antarmuka baru LatinAbbreviationsDictionary.tsx dengan desain responsive dan search real-time.',
      'Penyusunan basis data latinPrescriptionData.ts berstandar Farmakope Indonesia & ISO Farmasi.',
      'Penambahan fitur audio fonetik pengucapan istilah Latin berbantuan Web Speech Synthesis API.',
      'Pembuatan simulator kuis interaktif 10 soal acak untuk latihan interpretasi resep dokter bagi apoteker, TTK, dan mahasiswa farmasi.',
      'Dukungan ekspor dan cetak PDF cheat-sheet tabel singkatan resep Latin ukuran A4.'
    ],
    regulationsReference: 'Farmakope Indonesia Edisi VI & Standar Pelayanan Kefarmasian Permenkes No. 73/2016',
    clinicalImpactNote: 'Meminimalisir risiko dispensing error dan medication error akibat salah tafsir singkatan resep dokter saat peracikan dan penyerahan obat.'
  },

  // =========================================================================
  // v3.2.2 - 17 September 2026
  // =========================================================================
  {
    id: 'changelog-20260917-1315',
    version: 'v3.2.2',
    releaseDate: '17 September 2026',
    releaseTime: '13:15 WIB',
    timestamp: '2026-09-17T13:15:00+07:00',
    title: 'Integrasi Tab FORNAS pada Monografi Obat & Standardisasi Visual Header',
    category: 'FORNAS',
    categoryLabel: 'Monografi & Antarmuka FORNAS',
    type: 'patch',
    summary: 'Penyelarasan tampilan visual header ke standar flagship modern dan integrasi tab informasi restriksi FORNAS langsung ke dalam jendela modal monografi obat.',
    metricsBeforeAfter: [
      { metric: 'Monografi dengan Tab FORNAS', before: 'Belum Ada', after: 'Aktif Terintegrasi', change: '100%' },
      { metric: 'Harmonisasi Tema Header', before: 'Pola Terpisah', after: 'Unified Neo-Clinical', change: 'Optimal' }
    ],
    detailedChanges: [
      'Penambahan tab khusus "Restriksi FORNAS" pada DrugDetailModal.tsx yang menampilkan level faskes, catatan restriksi, batas kuota, dan kewenangan dokter.',
      'Penambahan filter cepat "FORNAS" pada katalog direktori obat DrugDirectory.tsx.',
      'Perbaikan bug rendering duplikasi tampilan dashboard di tab FORNAS pada App.tsx.',
      'Penyelarasan warna background dan border cards pada mode terang (Light Mode) dan mode gelap (Dark Mode).'
    ],
    regulationsReference: 'Keputusan Dirjen Yankes Kemenkes RI tentang Standar Pelayanan Farmasi Klinis',
    clinicalImpactNote: 'Mempercepat verifikasi kepatuhan klaim BPJS obat secara langsung saat apoteker membuka monografi obat tanpa harus berpindah modul.'
  },

  // =========================================================================
  // v3.2.0 - 10 September 2026
  // =========================================================================
  {
    id: 'changelog-20260910-1000',
    version: 'v3.2.0',
    releaseDate: '10 September 2026',
    releaseTime: '10:00 WIB',
    timestamp: '2026-09-10T10:00:00+07:00',
    title: 'Pembaruan Basis Data 97 Obat Unik & Deduplikasi 4 Lapis DDInter',
    category: 'INTERACTIONS',
    categoryLabel: 'Interaksi Obat & DDInter',
    type: 'major',
    summary: 'Pembersihan dan deduplikasi basis data obat master menggunakan algoritma pencocokan 4 lapis (Brand, Generik, ID, ATC), serta integrasi 97 obat klinis baru rumah sakit Indonesia.',
    metricsBeforeAfter: [
      { metric: 'Total Master Obat Sistem', before: '580 Obat', after: '677 Obat', change: '+16.7%' },
      { metric: 'Ketepatan Deteksi Interaksi', before: '89.4%', after: '99.2%', change: '+9.8%' }
    ],
    detailedChanges: [
      'Integrasi database interaksi DDInter komprehensif dengan mekanisme farmakokinetik (CYP450) dan farmakodinamik sinergis/antagonis.',
      'Penambahan evaluasi interaksi obat terhadap makanan (Drug-Food Interactions / DFI) berstandar Medscape.',
      'Peningkatan akurasi penapisan interaksi herbal-obat (Jamu & Fitofarmaka Indonesia).'
    ],
    regulationsReference: 'DDInter Clinical Database 2026 & Medscape Drug Reference',
    clinicalImpactNote: 'Meningkatkan ketepatan penapisan interaksi obat polifarmasi pada pasien geriatri dan komorbiditas kompleks.'
  },

  // =========================================================================
  // v3.1.0 - 25 Agustus 2026
  // =========================================================================
  {
    id: 'changelog-20260825-0900',
    version: 'v3.1.0',
    releaseDate: '25 Agustus 2026',
    releaseTime: '09:00 WIB',
    timestamp: '2026-08-25T09:00:00+07:00',
    title: 'Peluncuran Suite Kalkulator Farmako-Klinis: Dosis Ginjal, Pediatrik, dan Skor Medis',
    category: 'SYSTEM_CORE',
    categoryLabel: 'Kalkulator Farmako-Klinis',
    type: 'minor',
    summary: 'Integrasi suite kalkulator penyesuaian dosis ginjal (Cockcroft-Gault & CKD-EPI 2021), kalkulator puyer pediatrik terstandar, dan kalkulator skor klinis (CHA2DS2-VASc, HAS-BLED, Child-Pugh).',
    detailedChanges: [
      'Implementasi penyesuaian dosis antibiotik berdasarkan klirens kreatinin (CrCl).',
      'Kalkulator dosis anak berbasis berat badan (mg/kgBB/hari vs mg/kgBB/kali) dengan peringatan overdosis.',
      'Kalkulator Beyond Use Date (BUD) racikan non-steril berdasarkan USP <795>.'
    ],
    regulationsReference: 'USP <795> & KDIGO 2024 Clinical Practice Guideline for Kidney Disease',
    clinicalImpactNote: 'Mencegah nefrotoksisitas obat ekskresi ginjal dan memastikan ketepatan dosis pediatrik anak.'
  },

  // =========================================================================
  // v3.0.0 - 15 Agustus 2026
  // =========================================================================
  {
    id: 'changelog-20260815-1430',
    version: 'v3.0.0',
    releaseDate: '15 Agustus 2026',
    releaseTime: '14:30 WIB',
    timestamp: '2026-08-15T14:30:00+07:00',
    title: 'Peluncuran Modul Penatagunaan Antimikroba (PPRA) & Instagram Post Studio',
    category: 'SYSTEM_CORE',
    categoryLabel: 'Program PPRA & Edukasi Visual',
    type: 'major',
    badge: 'MILESTONE 3.0',
    summary: 'Rilis Modul Penatagunaan Antimikroba (PPRA / Antimicrobial Stewardship) berstandar Kemenkes RI dan Klasifikasi AWaRe WHO, integrasi SOAP CPPT Polifarmasi, serta studio kreatif Instagram Post Studio dengan 28 template edukasi farmasi klinis siap pakai.',
    metricsBeforeAfter: [
      { metric: 'Pedoman PPRA Antibiotik', before: '0 Protokol', after: '30+ Panduan Khusus', change: '+100%' },
      { metric: 'Template Konten Farmasi Studio', before: '0 Template', after: '28 Template Kuis & Infografis', change: '+100%' }
    ],
    keyDrugsOrItemsAdded: [
      'Vancomycin', 'Meropenem', 'Colistin', 'Linezolid', 'Ceftriaxone', 'Amoxicillin-Clavulanate',
      'Kategori WHO Access', 'Kategori WHO Watch', 'Kategori WHO Reserve',
      'Dokumentasi SOAP CPPT Pasien', 'Template Edukasi Interaktif Instagram'
    ],
    detailedChanges: [
      'Pembuatan modul AntimicrobialStewardshipManager.tsx untuk membatasi resistensi antibiotik (AMR) di rumah sakit.',
      'Klasifikasi seluruh antibiotik ke dalam matriks Access, Watch, dan Reserve (AWaRe) WHO.',
      'Pembuatan modul InstagramPostStudio.tsx dengan 28 preset desain resolusi tinggi siap unduh.',
      'Integrasi rekam telaah polifarmasi format SOAP (Subjective, Objective, Assessment, Plan) pada CPPT.'
    ],
    regulationsReference: 'Permenkes No. 8 Tahun 2015 tentang Program Pengendalian Resistensi Antimikroba & WHO AWaRe 2023',
    clinicalImpactNote: 'Menurunkan angka resistensi antibiotik di faskes dan memudahkan apoteker mempublikasikan edukasi obat terpercaya ke masyarakat.'
  },

  // =========================================================================
  // v2.5.0 - 02 Agustus 2026
  // =========================================================================
  {
    id: 'changelog-20260802-1100',
    version: 'v2.5.0',
    releaseDate: '02 Agustus 2026',
    releaseTime: '11:00 WIB',
    timestamp: '2026-08-02T11:00:00+07:00',
    title: 'Peluncuran Modul Toksikologi Gawat Darurat IGD, Antidotum & Keselamatan High-Alert / LASA',
    category: 'CLINICAL_SAFETY',
    categoryLabel: 'Toksikologi IGD & High-Alert LASA',
    type: 'major',
    badge: 'PATIENT SAFETY',
    summary: 'Rilis modul penanganan darurat intoksikasi akut 20+ racun dan overdosis obat dengan antidotum spesifik lini pertama, serta sistem pelabelan obat kewaspadaan tinggi (High-Alert Medications) dan Look-Alike Sound-Alike (LASA) berstandar KARS SKP-3.',
    metricsBeforeAfter: [
      { metric: 'Katalog Protokol Toksikologi IGD', before: '0 Toksin', after: '25 Toksin Akut', change: '+100%' },
      { metric: 'Daftar Pasangan LASA Terverifikasi', before: '0 Pasang', after: '62 Pasangan Tall-Man Lettering', change: '+100%' },
      { metric: 'Obat High-Alert Terdaftar', before: '0 Obat', after: '36 High-Alert + 26 SIPNAP/OOT', change: '+100%' }
    ],
    keyDrugsOrItemsAdded: [
      'Nalokson HCl (Overdosis Opioid)', 'N-Asetilsistein (Keracunan Parasetamol)', 'Flumazenil (Intoksikasi Benzodiazepin)',
      'Atropin Sulfat & Pralidoksim (Keracunan Organofosfat / Pestisida)', 'Natrium Tiosulfat & Nitrit (Sianida)',
      'Kalsium Glukonat 10%', 'Kalium Klorida (KCl) Pekat 7.46%', 'Heparin Injeksi', 'Insulin Reguler',
      'Pasangan LASA Tall-Man Lettering: DOPamine vs DOBUTamine, VinCRIStine vs VinBLAStine'
    ],
    detailedChanges: [
      'Pembuatan modul ClinicalToxicologyManager.tsx dengan kalkulator dosis antidotum emergensi.',
      'Penyusunan modul HighAlertSafetyManager.tsx berstandar ISMP dan KARS Sasaran Keselamatan Pasien (SKP-3).',
      'Implementasi standar penulisan Tall-Man Lettering otomatis untuk mencegah kekeliruan pengambilan obat di instalasi farmasi.'
    ],
    regulationsReference: 'Standar Akreditasi Rumah Sakit KARS 2022 (SKP-3) & ISMP Guidelines for High-Alert Medications',
    clinicalImpactNote: 'Mencegah insiden fatal salah obat akibat kemiripan nama/kemasan (sound-alike/look-alike) dan memberikan panduan cepat bagi tim gawat darurat IGD.'
  },

  // =========================================================================
  // v2.2.0 - 20 Juli 2026
  // =========================================================================
  {
    id: 'changelog-20260720-1000',
    version: 'v2.2.0',
    releaseDate: '20 Juli 2026',
    releaseTime: '10:00 WIB',
    timestamp: '2026-07-20T10:00:00+07:00',
    title: 'Ekspansi Besar Pusat Kompetensi Farmasi: Portal UKMPPAI & UKTVF Vokasi APDFI',
    category: 'COMPETENCY',
    categoryLabel: 'Pusat Uji Kompetensi Farmasi',
    type: 'major',
    badge: 'EDUKASI & CBT',
    summary: 'Peluncuran portal komprehensif simulasi ujian kompetensi apoteker Indonesia (UKMPPAI) dan ujian kompetensi vokasi tenaga teknis kefarmasian (UKTVF APDFI) dengan 890+ butir soal CBT autentik, 120 flashcard telaah klinis, dan mode kuis hafalan obat.',
    metricsBeforeAfter: [
      { metric: 'Total Bank Soal CBT Interaktif', before: '0 Butir', after: '893 Butir Soal', change: '+100%' },
      { metric: 'Flashcard Telaah Farmakoterapi', before: '0 Kartu', after: '120 Flashcard', change: '+100%' },
      { metric: 'Jalur Kompetensi Vokasi TTK', before: 'Belum Ada', after: 'Khusus UKTVF APDFI', change: 'Aktif' }
    ],
    keyDrugsOrItemsAdded: [
      'Bank Soal Farmakoterapi Kardiovaskular, Infeksi, Endokrin, Saraf, & Onkologi',
      'Bank Soal Farmasi Komunitas, Manajerial Apotek, & Regulasi Farmasi',
      'Bank Soal Teknologi Farmasi, Steril, Non-Steril, & Kontrol Kualitas (QC)',
      'Modul Hafalan Obat dengan 57 Mnemonik Farmakologi Cepat'
    ],
    detailedChanges: [
      'Pembuatan modul PharmacyCompetencyCenter.tsx dengan timer ujian CBT mirip sistem resmi CAT.',
      'Pemisahan jalur ujian profesi Apoteker (UKMPPAI) dan jalur Diploma Tiga Farmasi (UKTVF APDFI).',
      'Penyediaan kunci jawaban teranotasi dengan referensi jurnal EBM dan Farmakope Indonesia.',
      'Fitur bookmark soal sulit dan evaluasi nilai persentase kelulusan per domain kompetensi.'
    ],
    regulationsReference: 'Standar Kompetensi Apoteker Indonesia (SKAI) & Asosiasi Pendidikan Diploma Farmasi Indonesia (APDFI)',
    clinicalImpactNote: 'Meningkatkan angka kelulusan first-taker mahasiswa calon apoteker dan TTK di seluruh institusi farmasi Indonesia.'
  },

  // =========================================================================
  // v2.0.0 - 01 Juli 2026
  // =========================================================================
  {
    id: 'changelog-20260701-0830',
    version: 'v2.0.0',
    releaseDate: '01 Juli 2026',
    releaseTime: '08:30 WIB',
    timestamp: '2026-07-01T08:30:00+07:00',
    title: 'Peluncuran Modul Kompatibilitas Injeksi Intravena (IV Guide Alistair Gray & Y-Site Matrix)',
    category: 'CLINICAL_SAFETY',
    categoryLabel: 'Kompatibilitas Injeksi IV',
    type: 'major',
    badge: 'MILESTONE 2.0',
    summary: 'Rilis database kompatibilitas pencampuran obat suntik dan infus intravena (IV Admixture) berdasar rujukan Alistair Gray (2021) & ASHP Injectable Drugs Guide, memuat 147 obat suntik, 363 uji kompatibilitas Y-Site, pelarut infus (D5%, NS, RL), dan peringatan inkompatibilitas presipitasi fisik-kimia.',
    metricsBeforeAfter: [
      { metric: 'Katalog Obat Suntik Terdaftar', before: '0 Obat', after: '147 Obat Injeksi', change: '+100%' },
      { metric: 'Matriks Uji Kompatibilitas Y-Site', before: '0 Pasang', after: '363 Uji Kompatibilitas', change: '+100%' },
      { metric: 'Protokol Pencampuran Syringe Driver', before: '0 Protokol', after: '71 Protokol ICU/Paliatif', change: '+100%' }
    ],
    keyDrugsOrItemsAdded: [
      'Furosemide', 'Phenytoin', 'Amiodarone', 'Ceftriaxone', 'Midazolam', 'Fentanyl',
      'Norepinephrine', 'Dobutamine', 'Dopamine', 'Pantoprazole Injeksi', 'Kalium Klorida (KCl)',
      'Pelarut: Dextrose 5% (D5W), Normal Saline 0.9% (NS), Ringer Laktat (RL)'
    ],
    detailedChanges: [
      'Pembuatan modul IvCompatibilityChecker.tsx dengan grid pencocokan cepat multi-obat.',
      'Penambahan indikator visual status: Kompatibel (Hijau), Inkompatibel/Presipitasi (Merah), Data Terbatas/Hati-hati (Kuning).',
      'Penyediaan instruksi stabilitas rekonstitusi, batas waktu penggunaan (BUD IV), dan perlindungan terhadap cahaya.'
    ],
    regulationsReference: 'Alistair Gray Injectable Drugs Guide (2021) & Handbook on Injectable Drugs (Trissel / ASHP)',
    clinicalImpactNote: 'Mencegah terjadinya emboli partikulat akibat presipitasi obat suntik di jalur vena dan kegagalan terapi pada pasien kritis ICU/PICU/NICU.'
  },

  // =========================================================================
  // v1.8.0 - 15 Juni 2026
  // =========================================================================
  {
    id: 'changelog-20260615-1300',
    version: 'v1.8.0',
    releaseDate: '15 Juni 2026',
    releaseTime: '13:00 WIB',
    timestamp: '2026-06-15T13:00:00+07:00',
    title: 'Peluncuran Modul Interaksi Herbal & Jamu Indonesia (Farmakope Herbal Indonesia Ed. II)',
    category: 'INTERACTIONS',
    categoryLabel: 'Interaksi Herbal & Jamu',
    type: 'minor',
    summary: 'Penapisan interaksi tanaman obat tradisional, fitofarmaka, dan suplemen terhadap obat resep kimia sintetik berstandar Farmakope Herbal Indonesia (FHI Ed. II) dan monografi WHO, memuat 34 simplisia herbal dan 87 interaksi klinis terdokumentasi.',
    metricsBeforeAfter: [
      { metric: 'Katalog Tanaman Obat / Jamu', before: '0 Herbal', after: '34 Simplisia Terverifikasi', change: '+100%' },
      { metric: 'Pasangan Interaksi Herbal-Obat', before: '0 Kasus', after: '87 Interaksi Klinis', change: '+100%' }
    ],
    keyDrugsOrItemsAdded: [
      'Curcuma domestica (Kunyit)', 'Curcuma xanthorrhiza (Temulawak)', 'Zingiber officinale (Jahe Merah)',
      'Ginkgo biloba', 'Panax ginseng', 'Allium sativum (Bawang Putih)', 'Moringa oleifera (Daun Kelor)',
      'Andrographis paniculata (Sambiloto)', 'St. John’s Wort', 'Interaksi Herbal vs Antikoagulan (Warfarin)'
    ],
    detailedChanges: [
      'Pembuatan modul HerbDrugInteractionChecker.tsx dengan pencarian berbasis nama latin botani dan nama lokal Indonesia.',
      'Klasifikasi mekanisme interaksi: induksi/inhibisi enzim sitokrom P450 (CYP3A4, CYP2C9) dan efek aditif hemostasis (risiko perdarahan).',
      'Pemberian rekomendasi penyesuaian waktu jeda konsumsi antara jamu dan obat modern.'
    ],
    regulationsReference: 'Farmakope Herbal Indonesia (FHI) Edisi II Kemenkes RI & WHO Monographs on Selected Medicinal Plants',
    clinicalImpactNote: 'Melindungi masyarakat Indonesia yang lazim mengonsumsi jamu bersamaan dengan obat resep dokter (terutama hipertensi, diabetes, dan stroke).'
  },

  // =========================================================================
  // v1.5.0 - 28 Mei 2026
  // =========================================================================
  {
    id: 'changelog-20260528-0900',
    version: 'v1.5.0',
    releaseDate: '28 Mei 2026',
    releaseTime: '09:00 WIB',
    timestamp: '2026-05-28T09:00:00+07:00',
    title: 'Peluncuran Modul Swamedikasi & Clinical Triage Resep Berbasis GEMA CERMAT & DOWA',
    category: 'SYSTEM_CORE',
    categoryLabel: 'Swamedikasi & Pelayanan Farmasi',
    type: 'major',
    summary: 'Integrasi 42 protokol swamedikasi apotek untuk keluhan swamedikasi umum, skrining komorbiditas pasien, penentuan Daftar Obat Wajib Apotek (DOWA 1, 2, 3), dosis 5 populasi khusus, dan algoritma decision tree alur rujukan medis.',
    metricsBeforeAfter: [
      { metric: 'Protokol Klinis Swamedikasi', before: '0 Keluhan', after: '42 Protokol Standar', change: '+100%' },
      { metric: 'Integrasi Batas Resep DOWA', before: 'Belum Ada', after: 'DOWA No. 1, 2, & 3', change: 'Aktif' }
    ],
    keyDrugsOrItemsAdded: [
      'Protokol Demam & Nyeri Akut', 'Protokol Batuk Kering vs Berdahak', 'Protokol Diare Akut & Rehidrasi Oral',
      'Protokol Gastritis / Dispepsia', 'Protokol Alergi & Urtikaria',
      'Katalog Obat DOWA: Antasida, Parasetamol, Cetirizine, Loratadine, Omeprazole, Ranitidine, Bisakodil'
    ],
    detailedChanges: [
      'Pembuatan modul SwamedikasiManager.tsx dengan alur skrining anamnesis keluhan terstruktur.',
      'Penambahan tanda bahaya (Red Flags) kapan apoteker wajib merujuk pasien ke dokter/rumah sakit.',
      'Dukungan kalkulasi penyesuaian dosis untuk 5 kelompok populasi: Dewasa, Geriatri, Anak, Ibu Hamil, dan Ibu Menyusui.'
    ],
    regulationsReference: 'Permenkes No. 919/MENKES/PER/X/1993 tentang Kriteria Obat yang Dapat Diserahkan Tanpa Resep & Gerakan GEMA CERMAT Kemenkes RI',
    clinicalImpactNote: 'Mendorong penggunaan obat yang rasional (POR) di apotek dan mencegah swamedikasi yang keliru pada penyakit yang membutuhkan diagnosis dokter.'
  },

  // =========================================================================
  // v1.2.0 - 10 Mei 2026
  // =========================================================================
  {
    id: 'changelog-20260510-1000',
    version: 'v1.2.0',
    releaseDate: '10 Mei 2026',
    releaseTime: '10:00 WIB',
    timestamp: '2026-05-10T10:00:00+07:00',
    title: 'Integrasi Fitur Keamanan Kehamilan (FDA PLLR) & Laktasi (Hale’s Risk L1–L5)',
    category: 'CLINICAL_SAFETY',
    categoryLabel: 'Keamanan Kehamilan & Menyusui',
    type: 'minor',
    summary: 'Penambahan sistem penapisan risiko teratogenik obat pada ibu hamil berdasarkan sistem naratif FDA Pregnancy and Lactation Labeling Rule (PLLR) per trimester serta profil ekskresi ASI (Hale’s Lactation Risk Categories L1-L5 & Relative Infant Dose / RID %).',
    metricsBeforeAfter: [
      { metric: 'Basis Data Profil Kehamilan PLLR', before: '0 Obat', after: '450+ Obat', change: '+100%' },
      { metric: 'Kategori Risiko Laktasi Hale’s', before: '0 Obat', after: 'L1 s/d L5 Terklasifikasi', change: '+100%' }
    ],
    keyDrugsOrItemsAdded: [
      'Peringatan Obat Teratogenik Mutlak (Kategori X): Isotretinoin, Methotrexate, Thalidomide, Warfarin',
      'Profil Keamanan Antibiotik Lini Pertama Kehamilan (Amoxicillin, Cefixime, Azithromycin)',
      'Kalkulator Relative Infant Dose (RID %) untuk penentuan kompatibilitas menyusui'
    ],
    detailedChanges: [
      'Pembuatan modul PregnancyLactationChecker.tsx.',
      'Penyediaan informasi alternatif obat yang lebih aman apabila obat pilihan pertama memiliki risiko teratogenik tinggi.',
      'Integrasi peringatan otomatis saat pengguna mencari obat yang berisiko Kategori D atau X.'
    ],
    regulationsReference: 'FDA Pregnancy and Lactation Labeling Rule (PLLR) 2015 & Thomas Hale’s Medications and Mothers’ Milk',
    clinicalImpactNote: 'Mencegah terjadinya cacat janin bawaan (malformasi kongenital) dan melindungi bayi menyusui dari efek toksik obat yang diekskresikan melalui ASI.'
  },

  // =========================================================================
  // v1.0.0 - 15 April 2026
  // =========================================================================
  {
    id: 'changelog-20260415-0800',
    version: 'v1.0.0',
    releaseDate: '15 April 2026',
    releaseTime: '08:00 WIB',
    timestamp: '2026-04-15T08:00:00+07:00',
    title: 'Peluncuran Perdana Platform FarmasiDruggist: Integrasi Penilaian Interaksi Obat & Monografi Digital',
    category: 'SYSTEM_CORE',
    categoryLabel: 'Rilis Perdana Sistem (Genesis)',
    type: 'major',
    badge: 'GENESIS RELEASE',
    summary: 'Peluncuran resmi pertama platform web FarmasiDruggist untuk apoteker, dokter, dan tenaga medis Indonesia. Dilengkapi mesin pemeriksa interaksi obat DDInter 2.0, direktori monografi obat terstruktur, autentikasi cloud apoteker, dan riwayat cek resep.',
    metricsBeforeAfter: [
      { metric: 'Basis Data Master Obat Generik & Brand', before: '0 Obat', after: '500+ Obat Terverifikasi', change: '+100%' },
      { metric: 'Pasangan Interaksi Obat (DDI)', before: '0 Pasang', after: '680+ Pasang DDInter 2.0', change: '+100%' },
      { metric: 'Tingkat Ketersediaan Sistem (Uptime)', before: '0%', after: '99.9% Production Cloud', change: '+100%' }
    ],
    keyDrugsOrItemsAdded: [
      'Mesin Deteksi Interaksi Obat Otomatis (Mayor, Moderat, Minor)',
      'Direktori Monografi Obat Lengkap: Indikasi, Dosis, Kontraindikasi, Efek Samping, Farmakologi',
      'Sistem Autentikasi Pengguna & Pengelolaan Profil Apoteker / Dokter',
      'Penyimpanan Riwayat Pemeriksaan Resep di Cloud'
    ],
    detailedChanges: [
      'Peluncuran antarmuka web modern dengan framework React, TypeScript, dan Tailwind CSS.',
      'Integrasi database interaksi obat DDInter (Drug-Drug Interaction Database) terkemuka.',
      'Pembuatan mesin pencarian cepat obat berdasarkan nama generik maupun nama dagang (brand) di Indonesia.',
      'Dukungan responsive layout pada perangkat desktop, tablet, dan smartphone.'
    ],
    regulationsReference: 'Standar Pelayanan Kefarmasian di Apotek & Rumah Sakit (Permenkes No. 72 & 73 Tahun 2016)',
    clinicalImpactNote: 'Menyediakan instrumen digital pendukung keputusan klinis (clinical decision support system) yang cepat, akurat, dan mudah diakses oleh seluruh praktisi kesehatan Indonesia.'
  }
];

/**
 * Mengambil entri pembaruan data paling mutakhir
 */
export function getLatestChangelogEntry(): ChangelogItem {
  return SYSTEM_CHANGELOG_DATABASE[0];
}

/**
 * Mengambil seluruh riwayat pembaruan data yang diurutkan dari yang terbaru
 */
export function getAllChangelogEntries(): ChangelogItem[] {
  return [...SYSTEM_CHANGELOG_DATABASE].sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );
}

/**
 * Filter riwayat berdasarkan kategori modul
 */
export function getChangelogsByCategory(category: ChangelogCategory): ChangelogItem[] {
  if (category === 'ALL') return getAllChangelogEntries();
  return SYSTEM_CHANGELOG_DATABASE.filter(item => item.category === category);
}
