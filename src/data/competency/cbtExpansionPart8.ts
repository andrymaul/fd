import { ExamQuestion } from '../competencyExamData';

/**
 * Bank Soal Kasus Vignette CBT Bagian 8 (Nomor q-361 s/d q-400)
 * Rekonstruksi Ujian Nasional Resmi UKMPPAI (Apoteker) & UKTVK (Vokasi TTK)
 * 40 Soal Kasus Farmakoterapi Lanjutan, Regulasi Praktek Farmasi, Skrining Resep & CPOB
 */
export const CBT_EXPANSION_PART_8: ExamQuestion[] = [
  // =========================================================================
  // 🩺 REUMATOLOGI, AUTOIMUN & NEFROLOGI LANJUTAN
  // =========================================================================
  {
    id: 'q-361',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang wanita berusia 38 tahun didiagnosis Artritis Reumatoid (RA) aktif sedang-berat dengan keluhan nyeri dan kaku sendi pagi hari (morning stiffness > 1 jam) pada kedua tangan bilateral. Pasien direncanakan memulai terapi Disease-Modifying Antirheumatic Drug (DMARD) konvensional lini pertama Metotreksat.',
    question: 'Suplemen vitamin apakah yang WAJIB diresepkan bersamaan dengan Metotreksat dosis mingguan untuk mencegah efek samping stomatitis, mual, dan penekanan sumsum tulang tanpa mengurangi efikasi antireumatiknya?',
    options: [
      { key: 'A', text: 'Asam Folat 1 - 5 mg/hari (diberikan pada hari-hari selain hari minum Metotreksat)' },
      { key: 'B', text: 'Sianokobalamin (Vitamin B12) 1000 mcg/hari' },
      { key: 'C', text: 'Asam Askorbat (Vitamin C) 1000 mg/hari' },
      { key: 'D', text: 'Kolekalsiferol (Vitamin D3) 5000 IU/hari' },
      { key: 'E', text: 'Tiamin (Vitamin B1) 100 mg/hari' }
    ],
    correctAnswer: 'A',
    explanation: 'Pada terapi Artritis Reumatoid, METOTREKSAT (MTX) diminum sebagai DOSIS TUNGGAL MINGGUAN (bukan harian). Untuk meminimalkan efek samping akibat antagonisme folat (seperti sariawan/stomatitis oral, mual, peningkatan enzim transaminase hepar, dan sitopenia), pedoman ACR dan EULAR merekomendasikan suplementasi rutin ASAM FOLAT (1 mg/hari atau 5 mg/minggu). Asam folat lazimnya diminum setiap hari KECUALI pada hari konsumsi Metotreksat agar tidak terjadi persaingan absorpsi.',
    clinicalReference: '2021 American College of Rheumatology (ACR) Guideline for the Treatment of Rheumatoid Arthritis & EULAR Recommendations',
    difficulty: 'Mudah'
  },
  {
    id: 'q-362',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien penderita Artritis Reumatoid yang gagal dengan kombinasi 2 DMARD konvensional direncanakan memulai terapi Biologic DMARD golongan Anti-Tumor Necrosis Factor (Anti-TNF alfa) Infliximab IV.',
    question: 'Pemeriksaan skrining infeksi oportunistik apakah yang WAJIB dilakukan sebelum memulai terapi Anti-TNF guna mencegah reaktivasi penyakit fatal?',
    options: [
      { key: 'A', text: 'Skrining Tuberkulosis Laten (Uji Tuberkulin Mantoux / IGRA) dan Skrining Hepatitis B (HBsAg)' },
      { key: 'B', text: 'Uji serologi demam berdarah dengue' },
      { key: 'C', text: 'Pemeriksaan tinja lengkap' },
      { key: 'D', text: 'Biopsi sumsum tulang belakang' },
      { key: 'E', text: 'Kadar hormon tiroid TSH' }
    ],
    correctAnswer: 'A',
    explanation: 'TNF-alfa adalah sitokin imun esensial yang mempertahankan integritas granuloma yang mengurung kuman Mycobacterium tuberculosis dan mengontrol replikasi virus Hepatitis B. Blokade TNF-alfa oleh antibodi monoklonal (Infliximab, Adalimumab, Etanercept) menyebabkan lisis granuloma dan REAKTIVASI TUBERKULOSIS LATEN MENJADI TB MILIER/MENINGITIS DISSEMINATA yang mematikan. Oleh sebab itu, SKRINING TB LATEN (uji kulit tuberkulin / Mantoux atau Interferon-Gamma Release Assay / IGRA) serta SKRINING HEPATITIS B (HBsAg dan Anti-HBc) MUTLAK WAJIB DILAKUKAN sebelum terapi biologi dimulai.',
    clinicalReference: 'ACR Recommendations for the Use of Nonbiologic and Biologic DMARDs & CDC Tuberculosis Guidance',
    difficulty: 'Sedang'
  },
  {
    id: 'q-363',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien wanita berusia 26 tahun penderita Systemic Lupus Erythematosus (SLE) telah rutin mengonsumsi Hidroksiklorokuin 200 mg/hari selama 5 tahun. Apoteker mengingatkan pasien mengenai pemeriksaan berkala ke dokter spesialis mata.',
    question: 'Toksisitas organ spesifik jangka panjang apakah yang menjadi alasan dilakukannya skrining oftalmologi berkala tahunan pada pasien pengguna Hidroksiklorokuin?',
    options: [
      { key: 'A', text: 'Retinopati (makulopati "Bull\'s Eye") ireversibel' },
      { key: 'B', text: 'Katarak kongenital' },
      { key: 'C', text: 'Glaukoma sudut tertutup akut' },
      { key: 'D', text: 'Uveitis anterior supuratif' },
      { key: 'E', text: 'Neuritis optik akut sementara' }
    ],
    correctAnswer: 'A',
    explanation: 'HIDROKSIKLOROKUIN (HCQ) berikatan dengan melanin di epitel pigmen retina mata. Pada penggunaan jangka panjang (> 5 tahun) atau dosis kumulatif tinggi (> 5 mg/kgBB/hari), HCQ dapat menyebabkan RETINOPATI MAKULOPATI TOKSIK dengan gambaran khas "BULL\'S EYE MACULOPATHY" (cincin depigmentasi mengelilingi fovea). Kerusakan retina ini bersifat ireversibel dan dapat berujung pada kebutaan permanen jika tidak dideteksi dini melalui pemeriksaan Automated Visual Field dan Spectral-Domain Optical Coherence Tomography (SD-OCT) berkala.',
    clinicalReference: 'American Academy of Ophthalmology (AAO) Recommendations on Screening for Chloroquine and Hydroxychloroquine Retinopathy',
    difficulty: 'Sedang'
  },
  {
    id: 'q-364',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien penyakit ginjal kronis (CKD Stage 5 on hemodialisis rutin) mengalami hiperfosfatemia berat dengan kadar Fosfat serum 7,8 mg/dL (target normal: 3,5 - 5,5 mg/dL) dan Kalsium serum 10,6 mg/dL (hiperkalsemia ringan). Dokter hendak meresepkan pengikat fosfat (phosphate binder).',
    question: 'Pengikat fosfat non-kalsium manakah yang paling tepat dipilihkan apoteker untuk menghindari perburukan kalsifikasi vaskular pada pasien tersebut?',
    options: [
      { key: 'A', text: 'Sevelamer Karbonat atau Lanthanum Karbonat' },
      { key: 'B', text: 'Kalsium Karbonat 500 mg' },
      { key: 'C', text: 'Kalsium Asetat 667 mg' },
      { key: 'D', text: 'Aluminium Hidroksida sirup' },
      { key: 'E', text: 'Kalsitriol kapsul lunak' }
    ],
    correctAnswer: 'A',
    explanation: 'Pada pasien gagal ginjal kronis dengan hiperfosfatemia DISERTAI HIPERKALSEMIA (atau risiko tinggi kalsifikasi vaskular kardiovaskular), pengikat fosfat berbasis kalsium (Kalsium Karbonat/Kalsium Asetat) KONTRAINDIKASI karena dapat mempercepat kalsifikasi arteri koroner dan kematian kardiovaskular. Pilihan terapi lini pertama menurut pedoman KDIGO adalah PENGIKAT FOSFAT BEBAS KALSIUM (NON-CALCIUM PHOSPHATE BINDER), yaitu SEVELAMER KARBONAT atau LANTHANUM KARBONAT yang diminum bersama suapan makanan untuk mengikat fosfat dari diet di lumen saluran cerna.',
    clinicalReference: 'KDIGO 2017 Clinical Practice Guideline Update for the Diagnosis, Evaluation, Prevention, and Treatment of CKD-MBD',
    difficulty: 'Sedang'
  },

  // =========================================================================
  // 🩺 INFEKSI KHUSUS, VAKSINASI & ZOONOSIS
  // =========================================================================
  {
    id: 'q-365',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang anak laki-laki berusia 9 tahun dibawa ke IGD setelah digigit anjing liar di betis kanannya. Luka tampak berupa robekan dalam berdarah (kategori luka pajanan III risiko tinggi). Anjing tersebut langsung kabur dan tidak dapat diobservasi.',
    question: 'Berdasarkan pedoman penatalaksanaan luka gigitan hewan penular rabies (HPR) Kementerian Kesehatan RI dan WHO, apakah langkah penanganan awal dan kombinasi profilaksis pasca pajanan (PEP) yang WAJIB diberikan?',
    options: [
      { key: 'A', text: 'Cuci luka dengan air mengalir dan sabun/deterjen selama 15 menit + Berikan Vaksin Anti Rabies (VAR) + Infiltrasi Serum Anti Rabies (SAR / RIG) di sekitar luka' },
      { key: 'B', text: 'Segera jahit luka rapat-rapat tanpa dicuci' },
      { key: 'C', text: 'Cukup berikan antibiotik Amoksisilin oral 3 hari' },
      { key: 'D', text: 'Berikan alkohol 70% saja dan observasi selama 14 hari tanpa vaksin' },
      { key: 'E', text: 'Berikan VAR saja tanpa perlu mencuci luka' }
    ],
    correctAnswer: 'A',
    explanation: 'Protokol baku penanganan luka gigitan tersangka rabies (WHO & Kemenkes RI): (1) SEGERA CUCI LUKA DENGAN AIR MENGALIR DAN SABUN/DETERJEN SELAMA MINIMAL 15 MENIT (mampu menginaktivasi > 90% virus rabies karena selubung lipidnya larut sabun) lalu beri antiseptik povidon iodin; (2) Luka TIDAK BOLEH DIJAHIT (jika terpaksa, jahit situasi longgar); (3) Untuk luka Kategori III (robekan dalam/mukosa), WAJIB diberikan kombinasi VAKSIN ANTI RABIES (VAR) sesuai jadwal 0, 3, 7, 14, 28 PLUS SERUM ANTI RABIES (SAR / Rabies Immunoglobulin) yang diinfiltrasikan sebanyak mungkin ke dalam dan sekitar luka.',
    clinicalReference: 'Buku Saku Petunjuk Teknis Penatalaksanaan Kasus Gigitan Hewan Penular Rabies Kemenkes RI & WHO Rabies Factsheet',
    difficulty: 'Mudah'
  },
  {
    id: 'q-366',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang pekerja kebersihan kota tertusuk paku berkarat di telapak kaki saat membersihkan selokan berlumpur. Riwayat imunisasi tetanus terakhir didapat saat usia sekolah dasar (> 15 tahun lalu). Luka tampak kotor dan dalam.',
    question: 'Tata laksana imunoprofilaksis tetanus pasca-cedera manakah yang wajib diberikan kepada pasien tersebut?',
    options: [
      { key: 'A', text: 'Vaksin Tetanus Toksoid (TT / Td) 0,5 mL IM ditambah Human Tetanus Immunoglobulin (HTIG) 250 IU IM pada sisi tubuh berlainan' },
      { key: 'B', text: 'Hanya diberikan salep antibiotik Gentamisin topikal' },
      { key: 'C', text: 'Hanya diberikan Human Tetanus Immunoglobulin (HTIG) saja tanpa vaksin' },
      { key: 'D', text: 'Tidak perlu profilaksis karena sudah pernah imunisasi saat kecil' },
      { key: 'E', text: 'Diberikan infus Siprofloksasin monoterapi' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan pedoman CDC dan Kemenkes untuk luka kotor/berisiko tetanus tinggi pada pasien dengan riwayat imunisasi tidak lengkap atau dosis terakhir > 5 tahun lalu: Pasien WAJIB DIBERIKAN VAKSIN TETANUS TOKSOID (Td / TT 0,5 mL IM) untuk imunitas aktif DITAMBAH HUMAN TETANUS IMMUNOGLOBULIN (HTIG 250 - 500 IU IM) untuk memberikan perlindungan antibodi netralisasi instan (imunitas pasif). Vaksin dan antibodi HTIG wajib disuntikkan pada lokasi anatomi yang berlainan (misal lengan kanan dan lengan kiri) dengan spuit terpisah.',
    clinicalReference: 'CDC Wound Management for Tetanus Prevention & Pedoman Penanggulangan Tetanus Kemenkes',
    difficulty: 'Sedang'
  },
  {
    id: 'q-367',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang petani di daerah banjir dirawat dengan demam tinggi mendadak, menggigil, nyeri betis hebat (gastrocnemius pain), mata merah tanpa sekret (conjunctival suffusion), dan ikterik urin berwarna gelap kecokelatan. Dokter mendiagnosis Leptospirosis Berat (Sindrom Weil).',
    question: 'Antibiotik intravena lini pertama manakah yang direkomendasikan untuk leptospirosis berat menurut pedoman Kementerian Kesehatan RI dan WHO?',
    options: [
      { key: 'A', text: 'Seftriakson 1 - 2 g IV per 24 jam atau Penisilin G 1,5 juta unit IV tiap 6 jam selama 7 hari' },
      { key: 'B', text: 'Doksisiklin 100 mg oral tiap 12 jam' },
      { key: 'C', text: 'Siprofloksasin 500 mg oral tiap 12 jam' },
      { key: 'D', text: 'Kloramfenikol 500 mg oral tiap 6 jam' },
      { key: 'E', text: 'Metronidazol 500 mg IV tiap 8 jam' }
    ],
    correctAnswer: 'A',
    explanation: 'Untuk Leptospirosis derajat sedang-berat (Sindrom Weil dengan komplikasi ikterik, gagal ginjal akut, perdarahan paru), terapi antibiotik pilihan utama adalah SEFTRIAKSON 1 - 2 g IV per hari ATAU PENISILIN G KRISTAL 1,5 juta unit IV tiap 6 jam selama 7 hari (alternatif Ampisilin IV). Sementara itu, Doksisiklin oral 100 mg bid HANYA digunakan untuk leptospirosis derajat ringan tanpa komplikasi organ atau sebagai kemoprofilaksis pajanan banjir.',
    clinicalReference: 'Petunjuk Teknis Pengendalian Leptospirosis Kementerian Kesehatan RI & WHO Leptospirosis Guidance',
    difficulty: 'Sedang'
  },

  // =========================================================================
  // 🩺 DERMATOLOGI & OFTALMOLOGI KLINIS
  // =========================================================================
  {
    id: 'q-368',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang remaja wanita berusia 17 tahun mengeluhkan jerawat parah tipe nodulokistik pada wajah dan punggung yang meninggalkan jaringan parut (scar). Dokter spesialis dermatologi meresepkan Isotretinoin oral.',
    question: 'Peringatan keras (Black Box Warning) dan persyaratan paling kritis apakah yang WAJIB diedukasikan oleh apoteker terkait bahaya sediaan Isotretinoin oral?',
    options: [
      { key: 'A', text: 'Sangat Teratogenik (Kategori X): Kontraindikasi mutlak pada wanita hamil karena menyebabkan malformasi kraniofasial dan SSP janin yang parah' },
      { key: 'B', text: 'Menyebabkan nefrotoksisitas akut permanen' },
      { key: 'C', text: 'Memicu resistensi antibiotik' },
      { key: 'D', text: 'Menyebabkan ketergantungan narkotika' },
      { key: 'E', text: 'Meningkatkan risiko diabetes mellitus tipe 1' }
    ],
    correctAnswer: 'A',
    explanation: 'ISOTRETINOIN ORAL (asam 13-cis-retinoat) adalah retinoid oral poten yang berstatus TERATOGENIK KUAT (Kategori X FDA). Pemaparan janin pada trimester pertama menyebabkan malformasi kongenital berat hingga > 35% kasus (mikrotia, hidrosefalus, defek septum ventrikel, defek kraniofasial). Di seluruh dunia (termasuk program iPLEDGE FDA), pasien wanita usia subur wajib menandatangani lembar persetujuan (informed consent), menjalani 2 kali tes kehamilan negatif sebelum resep ditebus, dan WAJIB MENGGUNAKAN 2 METODE KONTRASEPSI EFEKTIF selama terapi hingga 1 bulan pasca-penghentian obat.',
    clinicalReference: 'Guidelines of Care for the Management of Acne Vulgaris (AAD) & FDA iPLEDGE Program',
    difficulty: 'Mudah'
  },
  {
    id: 'q-369',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang santri di pondok pesantren mengeluh gatal hebat terutama pada malam hari di sela-sela jari tangan, pergelangan tangan, dan lipatan ketiak. Ditemukan lesi berupa terowongan halus (kanalikuli) dan papul kemerahan yang juga dialami oleh teman sekamarnya (Skabies).',
    question: 'Obat skabisida topikal lini pertama manakah yang paling aman dan efektif, serta bagaimanakah aturan pakainya?',
    options: [
      { key: 'A', text: 'Permetrin krim 5%, dioleskan ke seluruh tubuh dari leher hingga ujung kaki, didiamkan selama 8 - 14 jam semalaman lalu dibilas, dan diulang 1 minggu kemudian' },
      { key: 'B', text: 'Salep 2-4 dioleskan 2 kali sehari selama 1 bulan penuh' },
      { key: 'C', text: 'Hidrokortison krim 1% dioleskan pada area yang gatal saja' },
      { key: 'D', text: 'Gameksan (Lindan) lotion dioleskan setiap pagi' },
      { key: 'E', text: 'Ketokonazol krim 2% dioleskan 3 kali sehari' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan pedoman CDC dan PERDOSKI, terapi lini pertama baku emas untuk Skabies (Sarcoptes scabiei var. hominis) adalah PERMETRIN KRIM 5%. Cara penggunaan yang benar: Dioleskan merata ke SELURUH PERMUKAAN KULIT DARI LEHER KE BAWAH HINGGA TELAPAK KAKI DAN SELA JARI, DIBIARKAN MENEMPEL SELAMA 8 - 14 JAM (biasanya malam hari saat tidur), lalu dibilas bersih dengan air dan sabun di pagi hari. Pengolesan WAJIB DIULANGI 1 MINGGU KEMUDIAN (hari ke-7) untuk membunuh telur tungau yang baru menetas. Seluruh anggota keluarga serumah/sekamar harus diobati secara simultan.',
    clinicalReference: 'CDC Scabies Treatment Guidelines & Panduan Praktik Klinis PERDOSKI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-370',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien laki-laki berusia 62 tahun didiagnosis Glaukoma Sudut Terbuka Primer (POAG) dengan Tekanan Intraokular (TIO) 28 mmHg. Pasien memiliki riwayat penyakit Asma Bronkial kronis.',
    question: 'Golongan obat tetes mata manakah yang merupakan terapi lini pertama pilihan utama untuk menurunkan TIO tanpa memicu kekambuhan bronkospasme asma pada pasien tersebut?',
    options: [
      { key: 'A', text: 'Prostaglandin Analog (seperti Latanoprost atau Travoprost)' },
      { key: 'B', text: 'Beta Blocker Non-Selektif (seperti Timolol 0,5%)' },
      { key: 'C', text: 'Agonis Kolinergik (seperti Pilokarpin 2%)' },
      { key: 'D', text: 'Inhibitor Karbonik Anhidrase Oral (Asetazolamid dosis tinggi)' },
      { key: 'E', text: 'Kortikosteroid tetes mata (Deksametason)' }
    ],
    correctAnswer: 'A',
    explanation: 'Golongan PROSTAGLANDIN ANALOG (seperti Latanoprost, Travoprost, Bimatoprost) adalah terapi lini pertama pilihan utama untuk glaukoma sudut terbuka karena memiliki efikasi penurunan TIO paling kuat (25-35%) dengan frekuensi pemakaian nyaman 1x sehari di malam hari. Obat tetes mata Beta-blocker seperti TIMOLOL KONTRAINDIKASI RELATIF/MUTLAK pada pasien asma atau PPOK berat karena absorpsi sistemik melalui duktus nasolakrimalis dapat memicu bronkospasme berat dan gagal napas.',
    clinicalReference: 'American Academy of Ophthalmology (AAO) Preferred Practice Pattern: Primary Open-Angle Glaucoma',
    difficulty: 'Sedang'
  },

  // =========================================================================
  // 📋 SKRINING RESEP, PERHITUNGAN FARMASI & CPOB MONITORING
  // =========================================================================
  {
    id: 'q-371',
    domainId: 'manajemen',
    targetExam: 'all',
    vignette: 'Apoteker di apotek menerima selembar resep dokter untuk pasien anak berusia 7 tahun. Dalam telaah resep (skrining resep), apoteker memeriksa kelengkapan bagian inscriptio, invocatio, praescriptio, signatura, dan subscripsio.',
    question: 'Manakah unsur di bawah ini yang tergolong ke dalam bagian Inscriptio pada lembar resep dokter?',
    options: [
      { key: 'A', text: 'Nama dokter, nomor SIP, alamat praktek dokter, tanggal penulisan resep, dan kota' },
      { key: 'B', text: 'Simbol R/ (Recipe)' },
      { key: 'C', text: 'Nama obat, bentuk sediaan, kekuatan, dan jumlah obat' },
      { key: 'D', text: 'Aturan pakai obat (signa) dan rute pemberian' },
      { key: 'E', text: 'Tanda tangan atau paraf legalitas dokter penulis resep' }
    ],
    correctAnswer: 'A',
    explanation: 'Bagian-bagian anatomi lembar resep dokter: (1) INSCRIPTIO: Identitas resmi dokter (nama, SIP, alamat/telepon tempat praktek), tanggal penulisan resep, dan kota; (2) INVOCATIO: Tanda buka penulisan resep yaitu simbol R/ (Recipe = ambillah); (3) PRAESCRIPTIO / ORDINATIO: Nama obat pokok/tambahan, bentuk sediaan, dosis/kekuatan, dan jumlah obat yang diminta; (4) SIGNATURA: Petunjuk aturan pakai obat bagi pasien; (5) SUBSCRIPSIO: Tanda tangan atau paraf legalitas dokter; (6) PRO: Identitas pasien (nama, umur/tanggal lahir, berat badan anak, alamat).',
    clinicalReference: 'Keputusan Menteri Kesehatan RI tentang Standar Pelayanan Kefarmasian di Apotek & Farmakope Indonesia',
    difficulty: 'Mudah'
  },
  {
    id: 'q-372',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Sebuah apotek baru memiliki biaya tetap operasional (Fixed Cost) sebesar Rp 120.000.000 per tahun. Apotek menjual produk obat dengan margin laba kotor rata-rata 25% dari total omzet penjualan (Variable Cost ratio = 75%).',
    question: 'Berapakah omzet penjualan minimal yang harus dicapai apotek tersebut dalam setahun untuk mencapai Titik Impas (Break-Even Point / BEP dalam Rupiah)?',
    options: [
      { key: 'A', text: 'Rp 480.000.000 per tahun' },
      { key: 'B', text: 'Rp 300.000.000 per tahun' },
      { key: 'C', text: 'Rp 150.000.000 per tahun' },
      { key: 'D', text: 'Rp 600.000.000 per tahun' },
      { key: 'E', text: 'Rp 240.000.000 per tahun' }
    ],
    correctAnswer: 'A',
    explanation: 'Rumus Break-Even Point (BEP) dalam Rupiah: BEP (Rp) = Biaya Tetap (Fixed Cost) / [1 - (Biaya Variabel / Penjualan)] = Fixed Cost / Margin Kontribusi Rasio. Diketahui Margin Laba Kotor = 25% (0,25). Maka: BEP (Rp) = Rp 120.000.000 / 0,25 = Rp 480.000.000 per tahun (atau rata-rata Rp 40.000.000 per bulan). Pada omzet ini, apotek tidak untung dan tidak rugi.',
    clinicalReference: 'Manajemen Keuangan Apotek & Akuntansi Praktis Kefarmasian',
    difficulty: 'Mudah'
  },
  {
    id: 'q-373',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Dalam pemantauan mikrobiologi lingkungan ruang bersih Kelas B di industri farmasi steril, bagian Quality Assurance meletakkan media lempeng agar cawan papar (settle plates) diameter 90 mm pada beberapa titik kritis.',
    question: 'Berapakah durasi pemaparan maksimal yang diperbolehkan untuk cawan papar (settle plates) agar media agar tidak mengalami dehidrasi atau desikasi menurut CPOB 2024?',
    options: [
      { key: 'A', text: 'Maksimal 4 jam pemaparan per cawan' },
      { key: 'B', text: 'Maksimal 30 menit pemaparan' },
      { key: 'C', text: 'Pemaparan selama 24 jam penuh tanpa henti' },
      { key: 'D', text: 'Maksimal 12 jam pemaparan' },
      { key: 'E', text: 'Maksimal 1 jam pemaparan' }
    ],
    correctAnswer: 'A',
    explanation: 'Sesuai Pedoman CPOB 2024 dan PIC/S GMP Annex 1 (Manufacture of Sterile Products), cawan papar (settle plates diameter 90 mm berisi media Soybean Casein Digest Agar / SCDA) yang digunakan untuk memantau mikroba viabel yang mengendap dari udara ruangan boleh dipaparkan selama proses operasional berlangsung DENGAN DURASI MAKSIMAL 4 JAM per cawan. Jika proses produksi berlangsung lebih dari 4 jam, cawan papar lama harus ditutup dan diganti dengan cawan baru untuk mencegah pengeringan media agar yang dapat menghambat pertumbuhan koloni mikroorganisme.',
    clinicalReference: 'Pedoman CPOB BPOM RI Edisi 2024 Annex 1 Pembuatan Produk Steril & USP <1116> Microbiological Control and Monitoring of Aseptic Processing Environments',
    difficulty: 'Sedang'
  },
  {
    id: 'q-374',
    domainId: 'teknologi',
    targetExam: 'all',
    vignette: 'Pasien datang ke apotek membeli obat tetes mata Kloramfenikol dalam botol multidose (mengandung pengawet antimikroba benzalkonium klorida). Pasien menanyakan berapa lama obat tetes mata tersebut masih boleh digunakan setelah segel botol pertama kali dibuka.',
    question: 'Berapakah Beyond Use Date (BUD) standar untuk sediaan obat tetes mata multidose berpangawet menurut ketentuan USP <795>/<797> dan Kemenkes RI?',
    options: [
      { key: 'A', text: 'Maksimal 28 hari (4 minggu) setelah segel dibuka pertama kali' },
      { key: 'B', text: 'Hingga tanggal kadaluwarsa resmi (ED) di pabrik tercapai' },
      { key: 'C', text: 'Maksimal 3 hari saja' },
      { key: 'D', text: 'Maksimal 6 bulan' },
      { key: 'E', text: 'Hanya boleh 24 jam' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan pedoman Beyond Use Date (BUD) resmi USP dan Kementerian Kesehatan RI, sediaan obat tetes mata multidose yang mengandung pengawet antimikroba memiliki batas waktu penggunaan maksimal 28 HARI (4 MINGGU) SETELAH SEGEL BOTOL PERTAMA KALI DIBUKA (atau sesuai petunjuk spesifik pada brosur pabrik, misal beberapa produk 30 hari). Setelah 28 hari, efektivitas sistem pengawet menurun dan risiko kontaminasi mikroba patogen (seperti Pseudomonas aeruginosa) meningkat tajam.',
    clinicalReference: 'Petunjuk Teknis Standar Pelayanan Kefarmasian di Apotek Kemenkes RI & USP General Chapter <795>/<797>',
    difficulty: 'Mudah'
  },
  {
    id: 'q-375',
    domainId: 'bahan_alam',
    targetExam: 'all',
    vignette: 'Dalam analisis fitokimia tanaman Tapak Dara (Catharanthus roseus), peneliti mengekstraksi senyawa alkaloid indol yang telah dimanfaatkan di dunia medis modern sebagai agen antineoplastik kemoterapi sitostatika untuk leukemia limfoblastik akut.',
    question: 'Senyawa metabolit sekunder antikanker apakah yang diisolasi dari tanaman Tapak Dara tersebut yang bekerja menghambat polimerisasi tubulin pada pembelahan sel mitosis?',
    options: [
      { key: 'A', text: 'Vinkristin dan Vinblastin' },
      { key: 'B', text: 'Paklitaksel' },
      { key: 'C', text: 'Etoposida' },
      { key: 'D', text: 'Kamptotesin' },
      { key: 'E', text: 'Kolkhisin' }
    ],
    correctAnswer: 'A',
    explanation: 'VINKRISTIN dan VINBLASTIN adalah alkaloid bis-indol alami yang diisolasi dari daun tanaman Tapak Dara (Catharanthus roseus / Vinca rosea). Senyawa ini bekerja spesifik pada fase M siklus sel dengan berikatan pada protein mikrotubulus tubulin, menghambat polimerisasi mikrotubulus, membentuk kristal tubulin paracrystalline, dan memicu penangkapan metafase (metaphase arrest) sehingga sel kanker tidak dapat membelah.',
    clinicalReference: 'Dewick P.M. Medicinal Natural Products: A Biosynthetic Approach & Goodman & Gilman',
    difficulty: 'Mudah'
  },
  {
    id: 'q-376',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang balita berusia 2 tahun dibawa ibunya ke puskesmas dengan keluhan buang air besar cair 5 kali sehari tanpa darah sejak kemarin. Anak tampak haus, mata sedikit cekung, namun masih mau minum dengan lahap (diare dehidrasi ringan-sedang).',
    question: 'Berdasarkan pedoman 5 Langkah Tuntaskan Diare (LINTAS Diare) Kementerian Kesehatan RI dan WHO, apakah dua pilar terapi farmakologis utama yang WAJIB diberikan?',
    options: [
      { key: 'A', text: 'Oralit osmolaritas rendah (WHO Low Osmolarity ORS) + Suplementasi Zinc 20 mg/hari selama 10 hari berturut-turut' },
      { key: 'B', text: 'Antibiotik Kotrimoksazol sirup + Loperamid' },
      { key: 'C', text: 'Karbo adsorben tablet + Kaolin-Pektin' },
      { key: 'D', text: 'Metronidazol suspensi + Ranitidin sirup' },
      { key: 'E', text: 'Infus Ringer Laktat cepat tanpa obat oral' }
    ],
    correctAnswer: 'A',
    explanation: 'Tata laksana baku diare akut pada anak menurut LINTAS Diare Kemenkes dan WHO: (1) REHIDRASI DENGAN ORALIT BARU (Low Osmolarity ORS 245 mOsm/L) untuk mencegah dan mengatasi dehidrasi; (2) PEMBERIAN TABLET ZINC (20 mg/hari untuk anak >= 6 bulan, atau 10 mg/hari untuk bayi < 6 bulan) YANG DIMINUM RUTIN SELAMA 10 - 14 HARI PENUH (Zinc memperbaiki regenerasi mukosa epitel usus dan mencegah kekambuhan diare hingga 2-3 bulan ke depan); (3) Teruskan pemberian ASI/makanan; (4) Antibiotik SELEKTIF HANYA jika ada indikasi disentri berdarah atau kolera; (5) Nasihat ibu kapan harus kembali.',
    clinicalReference: 'Buku Saku Pelayanan Kesehatan Anak di Rumah Sakit (WHO & Kemenkes RI) & IDAI Guidelines',
    difficulty: 'Mudah'
  },
  {
    id: 'q-377',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang anak berusia 4 tahun didiagnosis Otitis Media Akut (OMA) supuratif fase perforasi dengan nyeri telinga hebat dan demam 39°C. Pasien belum pernah menerima antibiotik dalam 3 bulan terakhir dan tidak memiliki alergi penisilin.',
    question: 'Berapakah dosis Amoksisilin oral lini pertama dosis tinggi yang direkomendasikan AAP dan IDAI untuk infeksi OMA pada anak tersebut?',
    options: [
      { key: 'A', text: '80 - 90 mg/kgBB/hari dibagi dalam 2 dosis terbagi selama 10 hari' },
      { key: 'B', text: '20 - 30 mg/kgBB/hari dibagi dalam 3 dosis' },
      { key: 'C', text: '50 mg/kgBB dosis tunggal harian selama 3 hari' },
      { key: 'D', text: '10 mg/kgBB/hari dibagi dalam 2 dosis' },
      { key: 'E', text: '120 mg/kgBB/hari dibagi tiap 4 jam' }
    ],
    correctAnswer: 'A',
    explanation: 'Pedoman American Academy of Pediatrics (AAP) dan IDAI merekomendasikan AMOKSISILIN DOSIS TINGGI (80 - 90 mg/kgBB/hari dibagi tiap 12 jam) sebagai terapi antibiotik lini pertama untuk Otitis Media Akut (OMA). Dosis tinggi ini diperlukan untuk mencapai konsentrasi terapeutik bakterisidal yang memadai di dalam cairan kavum telinga tengah guna mengatasi strain Streptococcus pneumoniae yang memiliki resistensi intermediet terhadap penisilin.',
    clinicalReference: 'AAP Clinical Practice Guideline: The Diagnosis and Management of Acute Otitis Media & Panduan IDAI',
    difficulty: 'Sedang'
  },
  {
    id: 'q-378',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien penderita Fibrilasi Atrium dengan sindrom pre-eksitasi Wolff-Parkinson-White (WPW Syndrome) datang ke IGD dengan takikardia ventrikel yang cepat dan ireguler. Jalur konduksi anomali berkas Kent aktif menghantarkan impuls listrik langsung ke ventrikel.',
    question: 'Golongan obat antiaritmia manakah yang KONTRAINDIKASI MUTLAK diberikan karena menghambat nodus AV sehingga memicu konduksi 1:1 lewat jalur aksesori yang dapat berujung pada Fibrilasi Ventrikel dan henti jantung?',
    options: [
      { key: 'A', text: 'Obat penghambat AV node (Adenosin, Beta-blocker, Non-dihidropiridin CCB seperti Verapamil/Diltiazem, dan Digoksin)' },
      { key: 'B', text: 'Prokainamid IV' },
      { key: 'C', text: 'Ibutilid IV' },
      { key: 'D', text: 'Kardioversi elektrik tersinkronisasi' },
      { key: 'E', text: 'Amiodaron IV' }
    ],
    correctAnswer: 'A',
    explanation: 'Pada AF dengan Wolff-Parkinson-White (Pre-excited AF), obat-obatan yang memblokade konduksi Nodus Atrioventrikular (AV Nodal Blockers disingkat ABCD: Adenosin, Beta-blocker, CCB Verapamil/Diltiazem, Digoksin) KONTRAINDIKASI MUTLAK. Blokade pada nodus AV akan mengalihkan seluruh impuls atrium yang kacau dan cepat langsung menuruni jalur aksesori pintas (bundle of Kent) yang memiliki periode refrakter pendek, sehingga mencetuskan FIBattribute VENTRIKEL (VF) DAN HENTI JANTUNG MENDADAK. Obat pilihan adalah Prokainamid IV atau Kardioversi listrik segera.',
    clinicalReference: 'AHA/ACC/HRS Guideline for the Management of Patients with Atrial Fibrillation & Konsensus Aritmia PERKI',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-379',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien dengan riwayat penggantian katup jantung mekanik prostetik mitral direncanakan menjalani prosedur bedah ekstraksi gigi geraham yang melibatkan manipulasi jaringan gingiva dan mukosa oral.',
    question: 'Antibiotik profilaksis oral manakah yang wajib diminum pasien 30 - 60 menit sebelum prosedur dental untuk mencegah Endokarditis Infektif menurut pedoman AHA/ACC?',
    options: [
      { key: 'A', text: 'Amoksisilin 2 gram oral dosis tunggal' },
      { key: 'B', text: 'Siprofloksasin 500 mg oral' },
      { key: 'C', text: 'Metronidazol 500 mg oral' },
      { key: 'D', text: 'Doksisiklin 100 mg oral' },
      { key: 'E', text: 'Kotrimoksazol Forte 1 tablet' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan pedoman American Heart Association (AHA) dan PERKI, profilaksis Endokarditis Infektif sebelum tindakan dental invasif direkomendasikan untuk pasien risiko tertinggi (riwayat katup prostetik mekanik/biologis, riwayat endokarditis sebelumnya, atau PJB sianotik). Regimen baku adalah AMOKSISILIN 2 GRAM ORAL DOSIS TUNGGAL yang diminum 30 - 60 MENIT SEBELUM PROSEDUR. Jika pasien alergi penisilin berat, alternatifnya adalah Klindamisin 600 mg oral atau Azitromisin/Klaritromisin 500 mg oral.',
    clinicalReference: 'Prevention of Viridans Group Streptococcal Infective Endocarditis: An AHA Guideline & Panduan PERKI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-380',
    domainId: 'manajemen',
    targetExam: 'all',
    vignette: 'Apoteker di apotek meracik sediaan sirup kering suspensi Amoksisilin dengan menambahkan Aqua Pro Injectione (Air Bebas Pirogen) hingga tanda batas. Pada etiket obat, apoteker mencantumkan batas waktu buang setelah rekonstitusi (Beyond Use Date / BUD).',
    question: 'Berapakah Beyond Use Date (BUD) standar untuk sediaan suspensi oral amoksisilin hasil rekonstitusi air bila disimpan pada suhu kamar dan suhu lemari pendingin (2 - 8°C)?',
    options: [
      { key: 'A', text: 'Maksimal 7 hari pada suhu kamar (atau 14 hari bila disimpan di kulkas 2 - 8°C)' },
      { key: 'B', text: 'Maksimal 30 hari pada suhu kamar' },
      { key: 'C', text: 'Hanya tahan 24 jam' },
      { key: 'D', text: 'Sesuai tanggal kadaluwarsa (ED) serbuk kering dari pabrik (2 tahun)' },
      { key: 'E', text: 'Maksimal 3 bulan' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan pedoman Beyond Use Date (BUD) USP <795> dan Farmakope Indonesia untuk sediaan oral yang mengandung air (water-containing oral formulations) seperti sirup kering antibiotik hasil rekonstitusi: Sediaan stabil selama MAKSIMAL 7 HARI PADA SUHU KAMAR (< 25°C) ATAU MAKSIMAL 14 HARI JIKA DISIMPAN DI LEMARI ES / PENDINGIN (suhu 2°C - 8°C, jangan dibekukan). Cincin beta-laktam amoksisilin sangat rentan terhidrolisis oleh molekul air seiring berjalannya waktu.',
    clinicalReference: 'USP General Chapter <795> Pharmaceutical Compounding - Nonsterile Preparations & FI Edisi VI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-381',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Apoteker meracik sediaan puyer (kapsul) yang berisi campuran serbuk Parasetamol dan Teofilin dari bahan baku zat aktif murni (tanpa penambahan air). Apoteker menentukan Beyond Use Date (BUD) racikan kapsul tersebut.',
    question: 'Berapakah batas waktu Beyond Use Date (BUD) maksimal untuk sediaan padat non-air (nonaqueous formulations) menurut pedoman resmi USP <795>?',
    options: [
      { key: 'A', text: 'Tidak lebih dari 6 bulan (atau tanggal kadaluwarsa terdekat dari bahan aktif yang digunakan)' },
      { key: 'B', text: 'Maksimal 14 hari' },
      { key: 'C', text: 'Maksimal 30 hari' },
      { key: 'D', text: 'Maksimal 1 tahun' },
      { key: 'E', text: 'Hanya 7 hari' }
    ],
    correctAnswer: 'A',
    explanation: 'Aturan umum penetapan Beyond Use Date (BUD) menurut USP <795> untuk sediaan racikan non-steril: (1) SEDIAAN BEBAS AIR (Nonaqueous formulations, seperti serbuk terbagi/puyer, kapsul, salep berlemak bebas air): BUD TIDAK LEBIH DARI WAKTU KADALUWARSA TERDEKAT BAHAN AKTIF ATAU 6 BULAN (mana yang lebih singkat); (2) Sediaan oral cair mengandung air: Maksimal 14 hari (suhu dingin); (3) Sediaan topikal/mukosal semisolida mengandung air (krim, gel): Maksimal 30 hari pada suhu kamar.',
    clinicalReference: 'USP <795> Pharmaceutical Compounding - Nonsterile Preparations & Petunjuk Teknis Kemenkes',
    difficulty: 'Sedang'
  },
  {
    id: 'q-382',
    domainId: 'manajemen',
    targetExam: 'all',
    vignette: 'Dalam pengelolaan limbah medis bahan berbahaya dan beracun (B3) farmasi di rumah sakit, instalasi farmasi memilah limbah sitostatika kemoterapi yang terkontaminasi (vial bekas kemo, spuit, set infus kemo).',
    question: 'Wadah kantong plastik berkode warna apakah yang WAJIB digunakan untuk menampung limbah sitotoksik / sitostatika menurut Permenkes RI tentang Kesehatan Lingkungan Rumah Sakit?',
    options: [
      { key: 'A', text: 'Kantong plastik warna UNGU dengan simbol limbah sitotoksik' },
      { key: 'B', text: 'Kantong plastik warna KUNING dengan simbol infeksius' },
      { key: 'C', text: 'Kantong plastik warna MERAH dengan simbol radioaktif' },
      { key: 'D', text: 'Kantong plastik warna HITAM untuk limbah domestik biasa' },
      { key: 'E', text: 'Kantong plastik warna COKELAT' }
    ],
    correctAnswer: 'A',
    explanation: 'Standar pewarnaan kantong limbah medis B3 Rumah Sakit (Permenkes No. 7 Tahun 2019 tentang Kesehatan Lingkungan RS): (1) KANTONG UNGU: Khusus untuk LIMBAH SITOTOKSIK / SITOSTATIKA (bahan kemoterapi, mutagenik, karsinogenik); (2) KANTONG KUNING: Untuk limbah padat infeksius dan patologi; (3) KANTONG MERAH: Untuk limbah radioaktif; (4) KANTONG COKELAT: Untuk limbah kimia dan farmasi kadaluwarsa biasa; (5) KANTONG HITAM: Untuk limbah domestik non-medis.',
    clinicalReference: 'Peraturan Menteri Kesehatan RI No. 7 Tahun 2019 tentang Kesehatan Lingkungan Rumah Sakit',
    difficulty: 'Mudah'
  },
  {
    id: 'q-383',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Dalam validasi proses sterilisasi sediaan infus Ringer Laktat menggunakan bejana sterilisasi uap panas bertekanan (Autoklaf terminal sterilization pada suhu 121°C), apoteker menghitung nilai letalitas termal mikroba.',
    question: 'Apakah parameter sterilisasi yang didefinisikan sebagai waktu pemanasan ekuivalen (dalam menit) pada suhu 121,1°C (250°F) yang menghasilkan kematian mikroorganisme dengan nilai z = 10°C?',
    options: [
      { key: 'A', text: 'Nilai F0' },
      { key: 'B', text: 'Nilai D (Decimal Reduction Time)' },
      { key: 'C', text: 'Nilai Z' },
      { key: 'D', text: 'Nilai SAL (Sterility Assurance Level)' },
      { key: 'E', text: 'Nilai Bioburden' }
    ],
    correctAnswer: 'A',
    explanation: 'NILAI F0 (F-Zero) adalah ukuran efektivitas sterilisasi termal yang didefinisikan sebagai ekuivalen waktu pemaparan (dalam menit) pada suhu konstan 121,1°C (250°F) terhadap mikroorganisme target dengan nilai z = 10°C. Sesuai Farmakope Indonesia dan CPOB, siklus sterilisasi terminal dengan autoklaf dianggap memberikan jaminan sterilitas resmi (Overkill Method) jika mencapai nilai F0 MINIMAL >= 8 SAMPAI 15 MENIT untuk menjamin Sterility Assurance Level (SAL) <= 10^-6.',
    clinicalReference: 'Farmakope Indonesia Edisi VI Lampiran <1371> Sterilisasi dan Jaminan Sterilitas & PDA Technical Report No. 1',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-384',
    domainId: 'teknologi',
    targetExam: 'all',
    vignette: 'Dalam validasi metode pembersihan peralatan pabrik farmasi (Cleaning Validation), apoteker QA mengambil sampel residu zat aktif dari permukaan tangki pencampur menggunakan batang usap steril (swab sampling).',
    question: 'Berapakah batas perolehan kembali (recovery test minimal) dari metode pengambilan sampel usap (swab) yang dapat diterima secara valid menurut pedoman CPOB?',
    options: [
      { key: 'A', text: 'Minimal >= 80% (atau tidak kurang dari 70%)' },
      { key: 'B', text: 'Minimal >= 20%' },
      { key: 'C', text: 'Minimal >= 50%' },
      { key: 'D', text: 'Harus tepat 100% tanpa deviasi' },
      { key: 'E', text: 'Minimal >= 10%' }
    ],
    correctAnswer: 'A',
    explanation: 'Dalam validasi pembersihan CPOB / PIC/S, uji perolehan kembali (swab recovery study) dilakukan dengan menginokulasikan sejumlah zat aktif yang diketahui konsentrasinya ke atas pelat kupon uji berbahan sama dengan mesin (misal stainless steel 316L), lalu diusap dan dianalisis. Metode usap dinyatakan valid dan reprodusibel jika menghasilkan persentase perolehan kembali (recovery factor) MINIMAL >= 80% (beberapa pedoman mentoleransi batas minimal >= 70%) dengan koefisien variasi (% RSD) < 10%.',
    clinicalReference: 'Petunjuk Operasional Penerapan Pedoman CPOB: Validasi Pembersihan BPOM RI & PIC/S PI 006 Validation of Cleaning Procedures',
    difficulty: 'Sedang'
  },
  {
    id: 'q-385',
    domainId: 'bahan_alam',
    targetExam: 'all',
    vignette: 'Dalam pengujian mikroskopis identifikasi serbuk simplisia rimpang Kunyit (Curcuma longa), analis laboratorium mengamati preparat serbuk di bawah mikroskop cahaya perbesaran 400x.',
    question: 'Fragmen pengenal mikroskopik khas apakah yang menjadi ciri diagnostik autentikasi simplisia rimpang Kunyit menurut Materia Medika Indonesia?',
    options: [
      { key: 'A', text: 'Butir amilum berbentuk khas, sel parenkim berisi zat warna kuning kunyit (kurkuminoid), dan fragmen rambut penutup' },
      { key: 'B', text: 'Kristal kalsium oksalat bentuk roset sangat besar' },
      { key: 'C', text: 'Sistolit kalsium karbonat' },
      { key: 'D', text: 'Stomata tipe anomositik pada epidermis bawah' },
      { key: 'E', text: 'Sel sklerenkim berdinding tebal berselubung lignin' }
    ],
    correctAnswer: 'A',
    explanation: 'Ciri mikroskopik diagnostik spesifik rimpang Kunyit (Curcuma domestica / Curcuma longa) menurut Materia Medika Indonesia (MMI) dan Farmakope Herbal Indonesia meliputi: (1) FRAGMEN PARENKIM BERISI ZAT WARNA KUNING KUNYIT (butir-butir kurkuminoid yang larut berwarna jingga-merah dengan asam sulfat); (2) BUTIR PATI (AMILUM) tunggal berbentuk lonjong atau pipih seperti peluru/kerang dengan lamela konsentris jelas; serta (3) Fragmen pembuluh kayu bertangga dan serabut sklerenkim.',
    clinicalReference: 'Materia Medika Indonesia (MMI) Jilid I & Farmakope Herbal Indonesia Edisi II',
    difficulty: 'Mudah'
  }
];

