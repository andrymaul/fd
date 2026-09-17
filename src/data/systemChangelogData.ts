/**
 * BASIS DATA RIWAYAT PEMBARUAN DATA KLINIS & VERSI SISTEM (CLINICAL DATA CHANGELOG)
 * Menyediakan transparansi audit trail pembaruan data obat, regulasi FORNAS, singkatan Latin,
 * dan algoritma skrining medis di Farmasi Druggist.
 */

export type ChangelogCategory = 
  | 'ALL'
  | 'FORNAS'
  | 'LATIN_TERMS'
  | 'DRUG_MONOGRAPHS'
  | 'INTERACTIONS'
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
  summary: string;
  metricsBeforeAfter?: MetricChange[];
  keyDrugsOrItemsAdded?: string[];
  detailedChanges: string[];
  regulationsReference?: string;
  clinicalImpactNote?: string;
}

export const SYSTEM_CHANGELOG_DATABASE: ChangelogItem[] = [
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
  {
    id: 'changelog-20260917-1315',
    version: 'v3.2.2',
    releaseDate: '17 September 2026',
    releaseTime: '13:15 WIB',
    timestamp: '2026-09-17T13:15:00+07:00',
    title: 'Integrasi Tab FORNAS pada Monografi Obat & Standardisasi Visual Header',
    category: 'DRUG_MONOGRAPHS',
    categoryLabel: 'Monografi & Antarmuka Utama',
    type: 'minor',
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
  {
    id: 'changelog-20260825-0900',
    version: 'v3.1.0',
    releaseDate: '25 Agustus 2026',
    releaseTime: '09:00 WIB',
    timestamp: '2026-08-25T09:00:00+07:00',
    title: 'Peluncuran Suite Kalkulator Farmako-Klinis: Dosis Ginjal, Pediatrik, dan Skor Medis',
    category: 'SYSTEM_CORE',
    categoryLabel: 'Kalkulator Klinis Terpadu',
    type: 'minor',
    summary: 'Integrasi suite kalkulator penyesuaian dosis ginjal (Cockcroft-Gault & CKD-EPI 2021), kalkulator puyer pediatrik terstandar, dan kalkulator skor klinis (CHA2DS2-VASc, HAS-BLED, Child-Pugh).',
    detailedChanges: [
      'Implementasi penyesuaian dosis antibiotik berdasarkan klirens kreatinin (CrCl).',
      'Kalkulator dosis anak berbasis berat badan (mg/kgBB/hari vs mg/kgBB/kali) dengan peringatan overdosis.',
      'Kalkulator Beyond Use Date (BUD) racikan non-steril berdasarkan USP <795>.'
    ],
    regulationsReference: 'USP <795> & KDIGO 2024 Clinical Practice Guideline for Kidney Disease',
    clinicalImpactNote: 'Mencegah nefrotoksisitas obat ekskresi ginjal dan memastikan ketepatan dosis pediatrik anak.'
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
