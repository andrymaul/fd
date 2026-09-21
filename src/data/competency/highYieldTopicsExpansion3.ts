import { HighYieldTopic } from '../competencyExamData';

/**
 * Ekspansi Materi High-Yield Bagian 3:
 * Integrasi Khusus Standar Kompetensi Tenaga Vokasi Kefarmasian (UKTVK / D3-D4 TTK)
 * dan Materi Farmakoterapi / Industri Lanjutan Apoteker (UKMPPAI)
 * Melengkapi database hingga genap 100 Topik Inti Nasional
 */
export const HIGH_YIELD_TOPICS_EXPANSION_3: HighYieldTopic[] = [
  // =========================================================================
  // 🔬 10 TOPIK KHUSUS VOKASI / UKTVK & ANALISIS AMAMI
  // =========================================================================
  {
    id: 'top-amami-boraks-formalin',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    title: 'Analisis Mutu Pangan (AMAMI): Uji Cemaran Boraks, Formalin, Rhodamin B & Metanil Yellow',
    category: 'Analisis Farmasi & Makanan Minuman (AMAMI)',
    tags: ['AMAMI', 'Boraks', 'Formalin', 'Rhodamin B', 'Metanil Yellow', 'Kertas Kurkumin', 'Asam Kromatropat'],
    summary: 'Pengujian kualitatif dan kuantitatif bahan tambahan pangan berbahaya terlarang pada produk makanan (mie basah, bakso, tahu, terasi, kerupuk) sesuai Permenkes No. 033/2012.',
    keyPearls: [
      'Uji Identifikasi BORAKS (Natrium Tetraborat):',
      '• Uji Kertas Kurkumin (Turmeric Paper): Ekstrak sampel yang diasamkan dengan HCl encer diteteskan pada kertas kurkumin. Hasil POSITIF ditandai perubahan warna menjadi MERAH MAWAR (Rosocyanin). Jika dibasakan dengan uap Amonia (NH4OH), warna berubah menjadi HIJAU KEHITAMAN atau BIRU GELAP.',
      '• Uji Nyala Api: Sampel + Asam Sulfat pekat + Metanol lalu dibakar -> Nyala api berwarna HIJAU TERANG khas senyawa ester metil borat.',
      'Uji Identifikasi FORMALIN (Formaldehida):',
      '• Reaksi Asam Kromatropat (Chromotropic Acid): Filtrat distilasi sampel + Asam Kromatropat + H2SO4 pekat dipanaskan -> Terbentuk warna UNGU VIOLET intens.',
      '• Uji Reagen Schiff: Menghasilkan warna merah keunguan / magenta.',
      'Uji Identifikasi PEWARNA SINTETIS TERLARANG:',
      '• RHODAMIN B: Pewarna merah tekstil berpendar (fluoresensi kuning-oranye di bawah lampu UV 254/366 nm). Metode penyerapan benang wol bebas lemak dalam suasana asam, lalu dielusi dengan amonia dan diuji dengan KLT.',
      '• METANIL YELLOW: Pewarna kuning tekstil. Filtrat sampel diasamkan dengan HCl pekat -> Berubah menjadi MERAH KEUNGUAN.'
    ],
    frequentExamPitfalls: [
      'Pada uji boraks, kertas kurkumin harus berubah menjadi MERAH MAWAR terlebih dahulu, bukan langsung hijau. Warna hijau-kebiruan baru timbul setelah ditetesi uap amonia/basa.',
      'Formalin diuji dari cairan hasil DISTILASI sampel untuk memisahkan formaldehida dari matriks protein makanan.'
    ],
    referenceStandard: 'Permenkes RI No. 033 Tahun 2012 tentang Bahan Tambahan Pangan & Pedoman Analisis AMAMI Farmasi'
  },
  {
    id: 'top-titrimetri-farmasi-amami',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    title: 'Titrimetri Analisis Farmasi & Pangan: Asidi-Alkalimetri, Kompleksometri EDTA, Argentometri & Nitrimetri',
    category: 'Kimia Analisis Farmasi & QC',
    tags: ['Titrimetri', 'Asidimetri', 'Kompleksometri', 'EDTA', 'Argentometri', 'Mohr', 'Nitrimetri', 'Diazotasi'],
    summary: 'Metode analisis volumetri kuantitatif baku untuk penetapan kadar bahan baku obat, sediaan farmasi, dan parameter kesadahan air laboratorium.',
    keyPearls: [
      '1. Asidi-Alkalimetri (Titrasi Netralisasi Asam-Basa):',
      '• Asidimetri: Titrasi menggunakan larutan standar asam kuat (HCl, H2SO4) untuk mengukur analit basa (contoh: Natrium Bikarbonat, Natrium Subkarbonat).',
      '• Alkalimetri: Titrasi menggunakan larutan standar basa (NaOH, KOH) untuk analit asam (contoh: Asam Asetat, Asam Salisilat). Indikator: Fenolftalein (PP) trayek pH 8.0 - 9.6 (tidak berwarna ke merah muda).',
      '2. Kompleksometri EDTA (Titrasi Pembentukan Kompleks):',
      '• Menggunakan ligan pengkhelat Dinatrium EDTA (Na2EDTA) untuk penetapan kadar ion logam polivalen (Ca2+, Mg2+, Zn2+, Bi3+) dan Uji Kesadahan Total Air.',
      '• Indikator Logam: Eriochrome Black T (EBT) pada pH dapar 10 (warna merah anggur berubah menjadi BIRU MURNI pada titik akhir).',
      '3. Argentometri (Titrasi Pengendapan Garam Perak):',
      '• Metode Mohr: Titrasi ion halida (Cl-) dengan larutan AgNO3 standar menggunakan indikator Kalium Kromat (K2CrO4). Titik akhir: Endapan MERAH BATA perak kromat (Ag2CrO4) pada pH netral 6.5 - 9.0.',
      '• Metode Volhard: Titrasi balik suasana asam (HNO3) menggunakan Kalium Tiosianat (KSCN) dan indikator Besi(III) Amonium Sulfat -> Larutan MERAH DARAH kompleks [Fe(SCN)]2+.',
      '4. Nitrimetri (Titrasi Reaksi Diazotasi):',
      '• Menggunakan Natrium Nitrit (NaNO2) standar dalam suasana asam klorida (HCl) pekat pada SUHU DINGIN (< 15°C) untuk mengukur senyawa dengan gugus AMIN AROMATIK PRIMER (-NH2).',
      '• Contoh Sediaan: Parasetamol (setelah dihidrolisis), Sulfametoksazol, Sulfasetamid. Indikator: Pasta kanji-iodida (luar) atau Tropeolin OO + Metilen Biru (dalam).'
    ],
    frequentExamPitfalls: [
      'Titrasi Nitrimetri WAJIB dilakukan pada suhu rendah (< 15°C) atau direndam es batu karena asam nitrit (HNO2) dan garam diazonium sangat mudah terurai/menguap pada suhu kamar.',
      'Metode Mohr TIDAK BOLEH dilakukan dalam suasana asam karena K2CrO4 akan berubah menjadi bikromat (Cr2O7 2-) sehingga endapan merah bata tidak terbentuk.'
    ],
    referenceStandard: 'Farmakope Indonesia Edisi VI & Vogel’s Textbook of Quantitative Chemical Analysis'
  },
  {
    id: 'top-compounding-dm-pengenceran',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    title: 'Perhitungan Dosis Maksimum (% DM Farmakope III) & Prosedur Pengenceran Bertingkat Serbuk (< 50 mg)',
    category: 'Teknik Compounding & Dispensing',
    tags: ['Dosis Maksimum', 'Farmakope III', 'Pengenceran Bertingkat', 'Triturasi', 'Carmin', 'Puyer', 'Atropin Sulfat'],
    summary: 'Kompetensi inti Tenaga Teknis Kefarmasian dalam meracik resep puyer/kapsul berkhasiat keras: Validasi batas % DM dan teknik penimbangan bahan obat di bawah batas kepekaan timbangan (< 50 mg).',
    keyPearls: [
      'Perhitungan Persentase Dosis Maksimum (% DM) Farmakope Indonesia Edisi III:',
      '• Rumus Dosis Maksimum Anak (Usia n tahun):',
      '  - Rumus Dilling (>= 8 tahun): DM Anak = (n / 20) × DM Dewasa.',
      '  - Rumus Young (1 - 8 tahun): DM Anak = [n / (n + 12)] × DM Dewasa.',
      '• Persentase Pemakaian: % DM 1x Minum = (Dosis Resep 1x / DM Anak 1x) × 100%. % DM 1 Hari = (Dosis Resep 1 Hari / DM Anak 1 Hari) × 100%.',
      '• Evaluasi: Jika % DM > 100%, resep tergolong OVERDOSIS dan TTK wajib melapor kepada Apoteker untuk konfirmasi penurunan dosis ke dokter penulis resep.',
      'Prosedur Pengenceran Bertingkat Serbuk (Triturasi Padat):',
      '• Alasan Teknis: Timbangan obat (gram halus) memiliki batas penimbangan terkecil 50 mg. Jika zat aktif yang dibutuhkan dalam resep < 50 mg (misal: Atropin Sulfat 10 mg), WAJIB dilakukan pengenceran dengan zat inert (Laktosa/Saccharum Lactis) dan zat warna (Carmin).',
      '• Prosedur Standar Pengenceran 1 : 10 (atau 1 : 50):',
      '  1. Timbang zat aktif 50 mg.',
      '  2. Timbang Laktosa 450 mg + Carmin secukupnya (total campuran = 500 mg).',
      '  3. Gerus sampai warna merah muda merata homogen (indikator homogenitas).',
      '  4. Hitung porsi yang diambil = (Bobot yang dibutuhkan / Bobot zat aktif awal) × Total campuran = (10 mg / 50 mg) × 500 mg = 100 mg campuran pengenceran.',
      '  5. Sisa campuran (400 mg) dibungkus terpisah dan diberi label "Sisa Pengenceran".'
    ],
    frequentExamPitfalls: [
      'Zat pewarna Carmin ditambahkan BUKAN untuk memberi rasa atau estetika, melainkan sebagai INDIKATOR VISUAL HOMOGENITAS campuran serbuk pengenceran.',
      'Dalam menghitung % DM satu hari, kalikan dosis sekali pakai dengan frekuensi signa harian (misal: S 3 dd pulv I -> dikalikan 3).'
    ],
    referenceStandard: 'Farmakope Indonesia Edisi III & Formularium Nasional (Fornas) Depkes RI'
  },
  {
    id: 'top-ipc-fisik-tablet-semisolid',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    title: 'In-Process Control (IPC) Fisik Sediaan: Waktu Hancur, Kekerasan, Kerapuhan & Keseragaman Bobot',
    category: 'Kontrol Mutu & Pengujian Fisik Sediaan',
    tags: ['IPC', 'Waktu Hancur', 'Disintegration', 'Kekerasan', 'Kerapuhan', 'Friability', 'Keseragaman Bobot', 'FI VI'],
    summary: 'Pengujian fisik wajib oleh analis QC/TTK di industri farmasi pada interval waktu tertentu selama proses kompresi tablet dan peracikan salep/krim.',
    keyPearls: [
      '1. Uji Waktu Hancur (Disintegration Tester):',
      '• Tablet Biasa (Uncoated): Hancur dalam air suhu 37°C +- 2°C dalam waktu < 15 MENIT (6 tablet).',
      '• Tablet Salut Selaput (Film-coated): < 30 MENIT.',
      '• Tablet Salut Gula (Sugar-coated): < 60 MENIT.',
      '• Tablet Salut Enterik: Tidak boleh hancur selama 2 JAM dalam larutan asam (HCl 0.1 N), lalu harus hancur dalam waktu < 60 MENIT di larutan dapar fosfat pH 6.8.',
      '• Tablet Efervesen: Hancur dalam air suhu kamar menghasilkan gelembung gas CO2 dalam waktu < 5 MENIT.',
      '• Tablet Sublingual: Hancur sangat cepat dalam waktu < 3 MENIT.',
      '2. Uji Kekerasan Tablet (Hardness Tester):',
      '• Mengukur daya tahan tablet terhadap tekanan mekanis radial. Syarat umum tablet oral: 4 - 8 kg/cm² (atau 40 - 80 Newton). Tablet kunyah: < 3 kg/cm².',
      '3. Uji Kerapuhan Tablet (Friability Tester):',
      '• Menggunakan 10-20 tablet pada kecepatan 25 rpm selama 4 menit (100 putaran). Syarat resmi Farmakope: Bobot yang hilang < 1.0% dan tidak ada tablet yang pecah/terbelah.',
      '4. Uji Keseragaman Bobot Tablet (FI III & FI VI):',
      '• Menimbang 20 tablet satu per satu, hitung bobot rata-rata.',
      '• Syarat Kolom A: Tidak boleh lebih dari 2 tablet yang bobotnya menyimpang dari persentase kolom A.',
      '• Syarat Kolom B: Tidak boleh ada 1 tablet pun yang menyimpang dari persentase kolom B.'
    ],
    frequentExamPitfalls: [
      'Tablet hisap (lozenges) dan tablet kunyah TIDAK DIPERSYARATKAN uji waktu hancur karena pelepasannya terjadi secara mekanis melalui hisapan/kunyahan di rongga mulut.',
      'Sebelum diuji friabilitas, debu pada tablet WAJIB dibersihkan terlebih dahulu; setelah 100 putaran, debu dibersihkan kembali sebelum ditimbang ulang.'
    ],
    referenceStandard: 'Farmakope Indonesia Edisi VI (Lampiran <1251>, <1261>, <1271>) & CPOB BPOM'
  },
  {
    id: 'top-mikrobiologi-pewarnaan-gram',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    title: 'Mikrobiologi Farmasi: Pewarnaan Gram, Angka Lempeng Total (ALT) & Sterilisasi Autoklaf vs Oven',
    category: 'Mikrobiologi & Uji Sterilitas Laboratorium',
    tags: ['Mikrobiologi', 'Pewarnaan Gram', 'Kristal Violet', 'ALT', 'AKK', 'Autoklaf', 'Oven', 'Endospora'],
    summary: 'Prinsip pemeriksaan laboratorium mikrobiologi sediaan farmasi: Diferensiasi bakteri patogen, perhitungan cemaran mikroba, dan validasi siklus sterilisasi.',
    keyPearls: [
      '1. Teknik Pewarnaan Gram Bakteri (4 Langkah Berurutan):',
      '• Langkah 1: Zat Warna Utama -> Kristal Violet (1 menit) -> Semua sel berwarna UNGU.',
      '• Langkah 2: Mordan (Penguat Ikatan) -> Larutan Lugol Iodin (1 menit) -> Membentuk kompleks Kristal Violet-Iodin (CV-I) di dalam peptidoglikan.',
      '• Langkah 3: Agen Pemucat (Decolorizer) -> Alkohol 96% / Aseton (10-20 detik) -> Bakteri Gram (-) dinding sel lipidnya larut sehingga warna ungu luntur; Bakteri Gram (+) dinding peptidoglikannya tebal terdehidrasi sehingga kompleks ungu tetap tertahan.',
      '• Langkah 4: Zat Warna Penutup (Counterstain) -> Safranin / Fuchsin (1 menit) -> Bakteri Gram Negatif terwarnai MERAH; Bakteri Gram Positif TETAP UNGU.',
      '• Contoh: Gram (+) Ungu: Staphylococcus aureus, Streptococcus pneumoniae, Bacillus subtilis. Gram (-) Merah: Escherichia coli, Pseudomonas aeruginosa, Salmonella typhi.',
      '2. Uji Cemaran Mikroba Sediaan Non-Steril:',
      '• Angka Lempeng Total (ALT / Total Plate Count): Media PCA / NA, diinkubasi pada 30-35°C selama 48-72 jam (rentang koloni valid 30-300 CFU/cawan).',
      '• Angka Kapang Khamir (AKK / Yeast & Mold): Media SDA / PDA pada 20-25°C selama 5-7 hari (rentang koloni valid 10-150 CFU/cawan).',
      '3. Parameter Sterilisasi Resmi Farmakope:',
      '• Panas Basah (Autoklaf): Uap air jenuh bertekanan pada suhu 121°C selama 15 MENIT pada tekanan 15 psi (1 atm). Indikator biologi: Spora Geobacillus stearothermophilus.',
      '• Panas Kering (Oven): Suhu 160°C - 170°C selama MINIMAL 1 - 2 JAM untuk alat gelas tahan panas, serbuk kering, dan minyak/lemak hidrofobik. Indikator biologi: Spora Bacillus atrophaeus.'
    ],
    frequentExamPitfalls: [
      'Bahan berminyak (Oleum sesami, paraffin cair, basis salep vaselin) TIDAK BISA disterilisasi dengan autoklaf karena uap air tidak dapat menembus minyak. WAJIB menggunakan Oven Panas Kering 160°C.',
      'Waktu pemucatan alkohol pada pewarnaan Gram tidak boleh terlalu lama karena dapat menyebabkan Gram-positif tampak merah (over-decolorization).'
    ],
    referenceStandard: 'Farmakope Indonesia VI Lampiran <51> Uji Efektivitas Pengawet & Lampiran <61> Uji Batas Mikroba'
  },
  {
    id: 'top-regulasi-tanda-peringatan-p1-p6',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    title: 'Tanda Peringatan Obat Bebas Terbatas (P.No 1 s/d P.No 6) & Regulasi Kewenangan TTK (PAFI)',
    category: 'Perundang-undangan & Etika Kefarmasian Vokasi',
    tags: ['Obat Bebas Terbatas', 'P1-P6', 'Lingkaran Biru', 'STRTTK', 'SIPTTK', 'PAFI', 'UU 17/2023'],
    summary: 'Penguasaan regulasi distribusi obat bebas terbatas (lingkaran biru garis tepi hitam) dengan 6 kotak tanda peringatan resmi, serta batas legalitas praktik TTK di sarana pelayanan farmasi.',
    keyPearls: [
      'Daftar 6 Tanda Peringatan Resmi Obat Bebas Terbatas (Huruf Putih di atas Dasar Hitam):',
      '• P.No 1: "Awas! Obat Keras. Bacalah aturan memakainya." (Contoh: Obat flu/batuk oral parasetamol-CTM-efedrin, antalgin oral).',
      '• P.No 2: "Awas! Obat Keras. Hanya untuk kumur, jangan ditelan." (Contoh: Obat kumur antiseptik Povidon Iodin Gargle, Betadine obat kumur).',
      '• P.No 3: "Awas! Obat Keras. Hanya untuk bagian luar dari badan." (Contoh: Salep salisil, Kalpanax cair, Betadine salep luka luar).',
      '• P.No 4: "Awas! Obat Keras. Hanya untuk dibakar." (Contoh: Rokok anti-asma serbuk stramonium / sediaan hisap herbal lama).',
      '• P.No 5: "Awas! Obat Keras. Tidak boleh ditelan." (Contoh: Amonia cair pelega pingsan, sediaan antiseptik per rektal tertentu).',
      '• P.No 6: "Awas! Obat Keras. Obat wasir, jangan ditelan." (Contoh: Suppositoria wasir / ambeien seperti Anusol suppo, Ultraproct suppo).',
      'Regulasi Praktik Tenaga Teknis Kefarmasian (TTK):',
      '• Berdasarkan UU No. 17 Tahun 2023 tentang Kesehatan: STRTTK diterbitkan oleh Konsil Tenaga Kesehatan atas nama Menkes dan berlaku SEUMUR HIDUP.',
      '• Surat Izin Praktik TTK (SIPTTK): Diterbitkan oleh Dinas Kesehatan / DPMPTSP Kabupaten/Kota setempat, berlaku 5 TAHUN dan dapat dimiliki di MAKSIMAL 3 TEMPAT FASILITAS.',
      '• Batasan Kewenangan: Di sarana apotek/klinik, TTK bekerja di bawah supervisi Apoteker. TTK berwenang melakukan pelayanan swamedikasi obat bebas/bebas terbatas, dispensing resep non-kompleks, namun TIDAK BERWENANG melakukan skrining resep klinis independen atau penyerahan/konseling obat narkotika secara mandiri.'
    ],
    frequentExamPitfalls: [
      'Jangan tertukar antara P.No 2 (Hanya untuk kumur) dan P.No 5 (Tidak boleh ditelan). P.No 2 khusus untuk sediaan gargarisma / obat kumur.',
      'Suppositoria wasir WAJIB beretiket P.No 6, BUKAN P.No 3 atau P.No 5.'
    ],
    referenceStandard: 'Keputusan Menteri Kesehatan No. 2380/A/SK/VI/83 & Undang-Undang Republik Indonesia No. 17 Tahun 2023'
  },
  {
    id: 'top-rheologi-viskositas-aliran',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    title: 'Rheologi Farmasi & Penentuan Viskositas: Sistem Newton vs Non-Newton & Aliran Tiksotropik',
    category: 'Farmasetika Fisik & Formulasi',
    tags: ['Rheologi', 'Viskositas', 'Newton', 'Plastis', 'Pseudoplastis', 'Dilatan', 'Tiksotropi', 'Brookfield'],
    summary: 'Karakteristik aliran fluida dan deformasi sediaan cair serta semipadat: Aplikasi dalam stabilitas fisik suspensi, emulsi, dan krim.',
    keyPearls: [
      '1. Aliran Sistem Newton (Newtonian Flow):',
      '• Viskositas fluida bernilai KONSTAN dan tidak dipengaruhi oleh laju geser (Shear Rate).',
      '• Contoh: Air murni, Etanol, Gliserin, Sirupus Simplex, Minyak jarak.',
      '• Alat ukur: Viskometer kapiler Ostwald dan Viskometer bola jatuh Hoeppler.',
      '2. Aliran Sistem Non-Newton (Non-Newtonian Flow):',
      '• Viskositas berubah terhadap perubahan laju geser.',
      '• Aliran Plastis (Bingham): Fluida tidak akan mengalir sampai gaya geser melampaui batas tertentu yang disebut YIELD VALUE. Contoh: Suspensi pekat berflokulasi, pasta zink oksida.',
      '• Aliran Pseudoplastis (Shear-Thinning): Viskositas MENURUN dengan meningkatnya laju geser (semakin diaduk semakin encer). Kurva tidak memiliki yield value. Contoh: Larutan polimer hidrofilik CMC-Na, Metilselulosa, Natrium Alginat, Tragakan.',
      '• Aliran Dilatan (Shear-Thickening): Viskositas MENINGKAT dengan meningkatnya laju geser (semakin diaduk cepat semakin kental dan padat). Contoh: Pasta suspensi serbuk padat deflokulasi dengan konsentrasi tinggi (> 50%).',
      '3. Fenomena Tiksotropi (Thixotropy):',
      '• Perilaku ideal sediaan suspensi dan emulsi farmasi: Saat didiamkan dalam botol memiliki viskositas tinggi (mencegah pengendapan partikel), namun saat DIKOCOK (diberi gaya geser) viskositasnya turun drastis menjadi encer sehingga mudah dituang, dan setelah dituang viskositasnya perlahan pulih kembali.'
    ],
    frequentExamPitfalls: [
      'Viskometer Ostwald hanya dapat digunakan untuk fluida NEWTON. Untuk mengukur sediaan non-Newton (krim, suspensi, gel), WAJIB menggunakan Viskometer Rotasi (seperti Viskometer Brookfield atau Stormer).',
      'Aliran pseudoplastis adalah sifat paling menguntungkan untuk sediaan suspensi oral dan tetes mata.'
    ],
    referenceStandard: 'Physical Pharmacy (Martin) & Farmakope Indonesia VI'
  },
  {
    id: 'top-logistik-gudang-ttk-fifo-b3',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    title: 'Pengelolaan Gudang Farmasi: Sistem FIFO, FEFO, LASA/NORUM, High Alert & Pengelolaan Limbah B3',
    category: 'Manajemen Logistik & Pergudangan Farmasi',
    tags: ['Gudang Farmasi', 'FIFO', 'FEFO', 'LASA', 'High Alert', 'B3', 'Spill Kit', 'Kartu Stok'],
    summary: 'Tata kelola penyimpanan perbekalan farmasi untuk menjamin stabilitas obat, mencegah kesalahan dispensing (*medication error*), dan mengendalikan stok kedaluwarsa.',
    keyPearls: [
      '1. Prinsip Penyimpanan Fisik Gudang:',
      '• FEFO (First Expired First Out): Obat dengan tanggal kedaluwarsa PALING DEKAT harus diletakkan di barisan paling depan dan dikeluarkan lebih dahulu (Prioritas Utama).',
      '• FIFO (First In First Out): Obat yang pertama kali masuk gudang dikeluarkan lebih dahulu (digunakan jika tanggal kedaluwarsa sama).',
      '2. Obat Kewaspadaan Tinggi (High Alert Medications):',
      '• Elektrolit Pekat: Kalium Klorida (KCl 7.46%), Natrium Klorida (NaCl 3%), Natrium Bikarbonat 8.4%. KONTRAINDIKASI disimpan di ruang rawat inap biasa (hanya boleh di ICU/Kamar Operasi/Instalasi Farmasi) dan wajib diberi label merah menyala bertuliskan "HIGH ALERT".',
      '3. Penataan Obat LASA / NORUM (Look-Alike Sound-Alike):',
      '• TIDAK BOLEH diletakkan berdampingan secara langsung (beri jeda minimal 1-2 obat lain di antara keduanya).',
      '• Penulisan menggunakan huruf kapital diferensiasi (Tall-Man Lettering). Contoh: hidrOXYzin vs hidrALAzine ; EPINEFrin vs NOREPINEFrin ; VinBLAStin vs VinCRIS Tin.',
      '4. Pengelolaan Bahan Berbahaya dan Beracun (B3) & Limbah Medis:',
      '• Bahan mudah terbakar (Alkohol 96%, Eter, Aseton) disimpan di lemari besi tahan api berventilasi.',
      '• Bahan korosif (Asam klorida, Asam sulfat) disimpan di wadah tahan asam di rak paling bawah.',
      '• Dilengkapi Lembar Data Keselamatan Bahan (LDKB / MSDS - Material Safety Data Sheet).',
      '• Limbah sitostatika dimasukkan ke dalam kantong plastik berwarna UNGU berlogo biohazard sitotoksik.'
    ],
    frequentExamPitfalls: [
      'Penyimpanan obat di apotek/RS mengutamakan FEFO di atas FIFO untuk meminimalkan kerugian finansial akibat obat kedaluwarsa.',
      'Elektrolit pekat KCl 7.46% TIDAK PERNAH boleh diberikan secara injeksi IV bolus langsung (harus diencerkan dalam larutan infus) karena memicu henti jantung mendadak.'
    ],
    referenceStandard: 'Permenkes No. 72 Tahun 2016 tentang Standar Pelayanan Kefarmasian di Rumah Sakit & ISMP Guidelines'
  },
  {
    id: 'top-sediaan-galenika-ekstrak',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    title: 'Teknologi Sediaan Galenika Tradisional: Pembuatan Tingtur, Ekstrak Kental/Kering & Destilasi Minyak Atsiri',
    category: 'Galenika & Obat Tradisional',
    tags: ['Galenika', 'Tingtur', 'Ekstrak Kental', 'Ekstrak Kering', 'Destilasi Uap', 'Minyak Atsiri', 'Fornas'],
    summary: 'Pembuatan sediaan galenika dari simplisia nabati: Fraksinasi, penguapan pelarut, dan penarikan komponen volatil sesuai kaidah Farmakope Indonesia.',
    keyPearls: [
      '1. Definisi & Penggolongan Tingtur (Tinctura):',
      '• Sediaan cair yang dibuat dengan mengekstraksi simplisia nabati menggunakan pelarut etanol encer (etanol 70%) dengan cara maserasi atau perkolasi.',
      '• Tingtur Simplisia Keras (Berkhasiat Keras): 10 bagian tingtur dibuat dari 1 bagian simplisia (rasio 1:10). Contoh: Tingtur Opii, Tingtur Digitalis, Tingtur Belladonnae.',
      '• Tingtur Simplisia Ringan (Kurang berkhasiat keras): 5 bagian tingtur dibuat dari 1 bagian simplisia (rasio 1:5). Contoh: Tingtur Valerianae, Tingtur Capsici.',
      '2. Tiga Konsistensi Ekstrak Berdasarkan Kadar Air (Farmakope):',
      '• Ekstrak Cair (Extractum Liquidum): Memiliki konsistensi cair dengan kadar air tinggi (> 30%). Dibuat sedemikian rupa sehingga 1 bagian ekstrak setara dengan 1 bagian simplisia.',
      '• Ekstrak Kental (Extractum Spissum): Konsistensi liat dan kental saat dingin, kadar air antara 15% - 30%.',
      '• Ekstrak Kering (Extractum Siccum): Berbentuk serbuk kering dengan kadar air <= 5% (maksimal 10%). Sering ditambahkan bahan pengisi laktosa, dekstrin, atau aerosil.',
      '3. Metode Destilasi Minyak Atsiri:',
      '• Destilasi Air (Water Distillation): Bahan terendam langsung di dalam air mendidih.',
      '• Destilasi Air dan Uap (Water and Steam Distillation): Bahan berada di atas saringan kukusan (metode kukus), uap air melewati celah bahan.',
      '• Destilasi Uap Langsung (Direct Steam Distillation): Uap bertekanan tinggi dialirkan dari boiler terpisah ke dalam ketel suling (paling efisien untuk industri minyak cengkeh/nilam).'
    ],
    frequentExamPitfalls: [
      'Rasio kekuatan tingtur simplisia keras adalah 1:10 (bukan 1:5). Jangan terbalik!',
      'Minyak atsiri yang mengandung senyawa termolabil (seperti bunga melati/mawar) tidak boleh didestilasi dengan panas tinggi; metode ekstraksinya menggunakan Enfleurage (lemak dingin) atau pelarut volatil.'
    ],
    referenceStandard: 'Farmakope Indonesia Edisi III & Farmakope Herbal Indonesia Edisi II'
  },
  {
    id: 'top-analisis-lemak-minyak-amami',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    title: 'Uji Kualitas Minyak & Lemak Pangan (AMAMI): Bilangan Asam, Penyabunan, Iod & Angka Peroksida',
    category: 'Analisis Makanan Minuman (AMAMI)',
    tags: ['AMAMI', 'Minyak Goreng', 'Bilangan Asam', 'Bilangan Penyabunan', 'Bilangan Iod', 'Angka Peroksida', 'Tengik'],
    summary: 'Karakterisasi mutu kimiawi lemak dan minyak nabati/hewani: Evaluasi tingkat ketengikan (oksidasi), kemurnian, dan kejenuhan ikatan rangkap asam lemak.',
    keyPearls: [
      '1. Bilangan Asam (Acid Value):',
      '• Definisi: Jumlah miligram KOH yang dibutuhkan untuk menetralkan asam lemak bebas dalam 1 gram minyak.',
      '• Makna Analisis: Indikator terjadinya HIDROLISIS trigliserida. Semakin tinggi bilangan asam, semakin banyak asam lemak bebas (FFA) yang terlepas akibat paparan kelembaban dan panas, menandakan kualitas minyak sudah turun.',
      '2. Bilangan Penyabunan (Saponification Value):',
      '• Definisi: Jumlah miligram KOH yang dibutuhkan untuk menyabunkan 1 gram minyak secara sempurna.',
      '• Makna Analisis: Berbanding terbalik dengan Berat Molekul rata-rata asam lemak. Minyak dengan rantai karbon pendek memiliki bilangan penyabunan yang lebih tinggi.',
      '3. Bilangan Iod (Iodine Value):',
      '• Definisi: Jumlah gram iodium yang diserap oleh 100 gram minyak (metode Hanus / Wij’s).',
      '• Makna Analisis: Mengukur DERAJAT KETIDAKJENUHAN (jumlah ikatan rangkap C=C). Minyak tak jenuh (seperti minyak zaitun/kedelai) memiliki bilangan iod tinggi, sedangkan lemak jenuh (seperti mentega/minyak kelapa sawit) memiliki bilangan iod rendah.',
      '4. Angka Peroksida (Peroxide Value):',
      '• Definisi: Jumlah miliekuivalen oksigen aktif per 1.000 gram minyak (titrasi Iodometri dengan Na2S2O3 dan indikator amilum).',
      '• Makna Analisis: Indikator utama OKSIDASI dan KETENGIKAN AWAL (Rancidity). Pembentukan radikal bebas dan hidroperoksida akibat kontak dengan oksigen dan cahaya.'
    ],
    frequentExamPitfalls: [
      'Bilangan Iod yang semakin RENDAH pada minyak bekas pakai (jelantah) menandakan ikatan rangkap tak jenuh telah rusak teroksidasi dan terpolimerisasi.',
      'Angka Peroksida adalah parameter kerusakan oksidasi awal, sedangkan Bilangan Asam adalah parameter hidrolisis.'
    ],
    referenceStandard: 'Standar Nasional Indonesia (SNI 3741:2013 Minyak Goreng) & Analisis Pangan Kimia Farmasi'
  },

  // =========================================================================
  // 🎓 10 TOPIK LANJUTAN KLINIS & INDUSTRI APOTEKER (UKMPPAI)
  // =========================================================================
  {
    id: 'top-tdm-vankomisin-gentamisin',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    title: 'Therapeutic Drug Monitoring (TDM): Vankomisin AUC24/MIC & Gentamisin Peak-Trough',
    category: 'Farmakokinetika Klinis & TDM',
    tags: ['TDM', 'Vankomisin', 'Gentamisin', 'AUC/MIC', 'Trough', 'Peak', 'Nefrotoksisitas', 'Ototoksisitas'],
    summary: 'Pemantauan kadar terapeutik antibiotik indeks terapi sempit untuk memastikan efikasi mikrobiologis maksimal sekaligus mencegah nefrotoksisitas dan ototoksisitas permanen.',
    keyPearls: [
      '1. Pemantauan TDM Vankomisin (MRSA & Sepsis Berat):',
      '• Pedoman IDSA/ASHP Terkini: Parameter efikasi klinis utama adalah rasio AUC24 / MIC dengan target 400 - 600 mg·h/L (diasumsikan MIC isolat = 1 mg/L).',
      '• Jika pemantauan AUC berbasis Bayesian tidak tersedia: Target kadar palung (Trough Concentration) adalah 15 - 20 mcg/mL (diambil 30 menit sebelum dosis ke-4 atau ke-5 saat kadar tunak Css tercapai).',
      '• Toksisitas: Kadar trough > 20 mcg/mL meningkatkan risiko Acute Kidney Injury (AKI) hingga 3-4 kali lipat.',
      '2. Pemantauan TDM Gentamisin / Tobramisin (Aminoglikosida):',
      '• Regimen Dosis Konvensional (Tiap 8 jam):',
      '  - Target Puncak (Peak, 30 menit pasca infus): 5 - 10 mcg/mL (efikasi bakterisidal konsentrasi-dependen).',
      '  - Target Palung (Trough, sebelum dosis berikutnya): < 2 mcg/mL (mencegah akumulasi di korteks ginjal dan endolimfe koklea telinga).',
      '• Regimen Dosis Harian Tunggal (Extended-Interval Dosing / Once-Daily 5-7 mg/kgBB):',
      '  - Mencapai Peak sangat tinggi (> 16-24 mcg/mL) untuk memaksimalkan efek Post-Antibiotic Effect (PAE) dan membiarkan Trough jatuh ke angka < 1 mcg/mL atau tidak terdeteksi.'
    ],
    frequentExamPitfalls: [
      'Sampel darah untuk pengukuran kadar Trough SELALU diambil tepat 30 menit SEBELUM pemberian dosis berikutnya, BUKAN setelah obat masuk.',
      'Aminoglikosida bersifat KONTRAINDIKASI pada pasien Miastenia Gravis karena memperparah blokade neuromuskular.'
    ],
    referenceStandard: 'ASHP/IDSA Therapeutic Monitoring of Vancomycin Guidelines & Sanford Guide to Antimicrobial Therapy'
  },
  {
    id: 'top-child-pugh-liver-dosing',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    title: 'Penyesuaian Dosis pada Pasien Gangguan Hati: Klasifikasi Skor Child-Pugh & MELD',
    category: 'Farmasi Klinis & Hepatologi',
    tags: ['Child-Pugh', 'Sirosis Hepatis', 'MELD', 'Klirens Hepatik', 'First-Pass Effect', 'Asites', 'Ensefalopati'],
    summary: 'Strategi penyesuaian dosis obat metabolisme hati pada pasien sirosis berdasarkan 5 parameter klinis Child-Pugh dan nilai rasio ekstraksi hepatik ($E_H$).',
    keyPearls: [
      '5 Parameter Penilaian Skor Child-Pugh (Masing-masing bernilai 1 - 3 poin):',
      '1. Serum Bilirubin Total: < 2 mg/dL (1 poin), 2 - 3 mg/dL (2 poin), > 3 mg/dL (3 poin).',
      '2. Serum Albumin: > 3.5 g/dL (1 poin), 2.8 - 3.5 g/dL (2 poin), < 2.8 g/dL (3 poin).',
      '3. International Normalized Ratio (INR) / Protrombin Time: INR < 1.7 (1 poin), 1.7 - 2.3 (2 poin), > 2.3 (3 poin).',
      '4. Asites: Tidak ada (1 poin), Ringan/terkontrol diuretik (2 poin), Sedang-berat/refrakter (3 poin).',
      '5. Ensefalopati Hepatikum: Tidak ada (1 poin), Grade 1-2 (2 poin), Grade 3-4 (3 poin).',
      'Klasifikasi Tingkat Keparahan Disfungsi Hepar:',
      '• Child-Pugh Kelas A (Skor 5 - 6): Gangguan hepar ringan (Kompensata). Penurunan dosis obat hepatik minimal (~20-25%).',
      '• Child-Pugh Kelas B (Skor 7 - 9): Gangguan hepar sedang. Penurunan dosis obat hepatik 50%.',
      '• Child-Pugh Kelas C (Skor 10 - 15): Gangguan hepar berat (Dekompensata). Dosis diturunkan 75-80% atau HINDARI obat dengan metabolisme hepar tinggi.',
      'Obat dengan High Hepatic Extraction Ratio ($E_H > 0.7$): Propranolol, Morfin, Verapamil, Lidokain. Pada sirosis, bioavailabilitas oral melonjak drastis akibat shunting portosistemik (kehilangan first-pass metabolism).'
    ],
    frequentExamPitfalls: [
      'Kategori Child-Pugh C KONTRAINDIKASI NSAID (karena memicu sindrom hepatorenal fatal) dan obat sedatif Benzodiazepin (karena memicu koma ensefalopati).',
      'Parasetamol pada sirosis tetap dapat digunakan sebagai analgesik pilihan pertama, namun dosis maksimal dibatasi <= 2 gram per hari.'
    ],
    referenceStandard: 'AASLD Practice Guidelines: Management of Cirrhosis & Clinical Pharmacokinetics (Rowland & Tozer)'
  },
  {
    id: 'top-kanker-protokol-sitostatika',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    title: 'Protokol Kemoterapi Kanker Solid, Premedikasi Reaksi Hipersensitivitas & Penanganan Ekstravasasi',
    category: 'Farmasi Onkologi & Penanganan Sitostatika',
    tags: ['Kemoterapi', 'Doksorubisin', 'Paklitaksel', 'Sisplatin', 'Ekstravasasi', 'Premedikasi', 'Mesna', 'Deksrazoksan'],
    summary: 'Manajemen sediaan sitotoksik onkologi: Pencegahan toksisitas spesifik organ (jantung, ginjal, kandung kemih) dan protokol penanganan darurat kebocoran obat vesikan.',
    keyPearls: [
      '1. Toksisitas Spesifik Agen Kemoterapi & Antidotum Protektor:',
      '• DOKSORUBISIN (Antrasiklin): Kardiotoksisitas kardiomiopati dosis kumulatif (> 450-550 mg/m²). Antidotum protektor / penawar: DEKSRAZOKSAN (Zinecard).',
      '• SIKLOFOSFAMID & IFOSFAMID: Sistitis hemoragik akibat metabolit toksik AKROLEIN. Wajib diberikan protektor MESNA (Sodium 2-mercaptoethanesulfonate) + hidrasi agresif.',
      '• SISPLATIN (Platinum): Nefrotoksisitas berat dan emetogenik tinggi. Wajib hidrasi infus NaCl 0.9% 1-2 liter pra dan pasca kemoterapi + Manitol.',
      '• BLEOMISIN: Toksisitas Fibrosis Paru (Pulmonary Fibrosis) seumur hidup (dosis kumulatif maksimal 400 unit).',
      '• VINKRISTIN (Vinca Alkaloid): Neuropati perifer sensorik-motorik dan konstipasi parah. KONTRAINDIKASI MUTLAK SECARA INTRATEKAL (FAK-TAL!).',
      '2. Protokol Premedikasi Reaksi Infus (Paklitaksel / Taksan):',
      '• Berikan 3 obat 30 menit sebelum infus Paklitaksel: Deksametason 20 mg IV/oral + Difenhidramin 50 mg IV + Antagonis H2 (Ranitidin/Famotidin IV).',
      '3. Penanganan Ekstravasasi Sitostatika (Kebocoran ke Jaringan Subkutan):',
      '• Vesikan DNA-binding (Doksorubisin, Daunorubisin): KOMPRES DINGIN/ES KERING selama 15-20 menit 4x sehari + Berikan Deksrazoksan IV atau Dimetilsulfoksida (DMSO) topikal.',
      '• Vesikan Non-DNA-binding (Vinkristin, Vinblastin): KOMPRES HANGAT (meningkatkan aliran darah sistemik) + Injeksi enzim HIALURONIDASE subkutan.'
    ],
    frequentExamPitfalls: [
      'Ekstravasasi Vinka Alkaloid (Vinkristin) MENGGUNAKAN KOMPRES HANGAT, BUKAN KOMPRES DINGIN. Kompres dingin pada vinkristin justru memperparah nekrosis ulseratif lokal!',
      'Vinkristin HANYA BOLEH diberikan secara INTRAVENA (IV). Injeksi intratekal vinkristin menyebabkan ensefalopati asendens dan kematian 100%!'
    ],
    referenceStandard: 'NCCN Clinical Practice Guidelines in Oncology & Pedoman Penanganan Sitostatika Kemenkes RI'
  },
  {
    id: 'top-validasi-analisis-ich-q2',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    title: 'Validasi Metode Analisis ICH Q2(R1): Spesifisitas, Linearitas, Akurasi, Presisi, LOD & LOQ',
    category: 'Pemastian Mutu (QA/QC) Industri Farmasi',
    tags: ['Validasi Analisis', 'ICH Q2', 'Linearitas', 'Akurasi', 'Presisi', 'LOD', 'LOQ', 'Koefisien Korelasi'],
    summary: 'Parameter baku operasional untuk membuktikan bahwa metode analisis pengujian obat (KCKT/HPLC, Spektrofotometri, GC) reprodusibel, sahih, dan memenuhi tujuan mutu CPOB.',
    keyPearls: [
      'Parameter Validasi Metode Analisis Menurut Pedoman ICH Q2(R1):',
      '1. Spesifisitas / Selektivitas: Kemampuan mengukur analit secara tepat dengan adanya zat pengotor (impurities), produk degradasi, atau matriks eksipien. Dibuktikan dengan nilai resolusi kromatografi (Rs >= 1.5).',
      '2. Linearitas: Kemampuan menunjukkan respon analitis yang proporsional terhadap konsentrasi analit dalam rentang tertentu. Syarat: Koefisien korelasi linier r >= 0.999 (atau R² >= 0.998).',
      '3. Akurasi (Kecermatan): Derajat kedekatan antara hasil uji dengan nilai sebenarnya (true value). Diuji dengan metode penambahan baku (Standard Addition Method / Spiking) pada 3 konsentrasi (80%, 100%, 120%). Syarat: Persentase perolehan kembali (% Recovery) 98.0% - 102.0%.',
      '4. Presisi (Keseksamaan): Derajat keterulangan hasil uji di antara beberapa kali pengujian sampel homogen.',
      '   - Repetabilitas (Repeatability / Intra-assay): Minimal 6 replikasi konsentrasi 100% atau 9 penentuan (3 konsentrasi x 3 replikasi). Syarat: % RSD (Relative Standard Deviation) <= 2.0%.',
      '   - Presisi Antara (Intermediate Precision): Beda hari, beda analis, atau beda instrumen.',
      '   - Reprodusibilitas (Reproducibility): Uji antar laboratorium (kolaboratif).',
      '5. Batas Deteksi (LOD - Limit of Detection): Konsentrasi analit terendah yang masih DAPAT DIDETEKSI namun tidak perlu terkuantisasi secara akurat. Rumus: LOD = (3.3 × SD blanko) / Slope kurva kalibrasi.',
      '6. Batas Kuantisasi (LOQ - Limit of Quantification): Konsentrasi terendah analit yang DAPAT DIUKUR SECARA KUANTITATIF dengan akurasi dan presisi yang dapat diterima. Rumus: LOQ = (10 × SD blanko) / Slope kurva kalibrasi.'
    ],
    frequentExamPitfalls: [
      'Pengali untuk rumus LOD adalah 3.3, sedangkan pengali untuk rumus LOQ adalah 10. Jangan terbalik pembagiannya dengan Slope kurva.',
      'Untuk uji penetapan kadar bahan baku utama (Assay), parameter LOD dan LOQ TIDAK DIPERSYARATKAN. LOD dan LOQ hanya wajib untuk pengujian cemaran (Impurities testing).'
    ],
    referenceStandard: 'ICH Harmonised Tripartite Guideline Q2(R1) Validation of Analytical Procedures & Farmakope Indonesia VI'
  },
  {
    id: 'top-cleanroom-microbiology-media-fill',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    title: 'Pemantauan Mikrobiologi Ruang Bersih Steril: Media Fill Test, Cawan Papar & Batas Bioburden',
    category: 'Teknologi Sediaan Steril & CPOB 2024',
    tags: ['Media Fill', 'CPOB 2024', 'Ruang Bersih', 'Kelas A', 'Cawan Papar', 'Settle Plate', 'Bioburden'],
    summary: 'Simulasi proses aseptik (Media Fill Test) dan teknik pemantauan kontaminasi mikroba di ruang bersih Kelas A hingga D untuk menjamin jaminan sterilitas ($SAL \le 10^{-6}$).',
    keyPearls: [
      '1. Uji Simulasi Proses Aseptik (Media Fill / Aseptic Process Simulation - APS):',
      '• Pengujian rutin di mana media pertumbuhan mikroba steril cair (Soybean-Casein Digest Medium / SCDM) diproses menggantikan produk obat nyata melewati seluruh tahapan filtrasi, pengisian botol (filling), dan penutupan (crimping).',
      '• Frekuensi: Minimal 2 kali per tahun per shift kerja untuk setiap jalur pengisian aseptis.',
      '• Kriteria Penerimaan CPOB 2024: Target adalah NOL KONTAMINASI MIKROBA (0 unit terkontaminasi dari minimal 5.000 hingga 10.000 wadah yang diisi dan diinkubasi selama 14 hari).',
      '2. Metode Pemantauan Lingkungan Ruang Bersih (CPOB Aneks 1):',
      '• Cawan Papar (Settle Plates): Cawan petri agar diameter 90 mm dibuka selama maksimal 4 jam di zona Kelas A.',
      '  - Batas Rekomendasi Mikroba Kelas A: < 1 CFU/cawan (Bebas mikroba).',
      '  - Kelas B: 5 CFU/cawan.',
      '  - Kelas C: 50 CFU/cawan.',
      '  - Kelas D: 100 CFU/cawan.',
      '• Cawan Kontak (Contact Plates / RODAC): Menempelkan permukaan agar cawan langsung ke sarung tangan operator (Glove print) atau permukaan meja kerja. Kelas A: < 1 CFU/cawan.',
      '• Pengambilan Sampel Udara Aktif (Volumetric Active Air Sampling): Mengukur jumlah mikroba hidup per 1 meter kubik (m³) udara yang disedot.'
    ],
    frequentExamPitfalls: [
      'Jika ditemukan 1 wadah terkontaminasi pada Media Fill skala < 5.000 unit, proses pengisian dianggap GAGAL dan wajib dilakukan investigasi deviasi serta pengulangan media fill.',
      'Lama paparan cawan settle plate di ruang Kelas A maksimal adalah 4 jam untuk mencegah agar media mengalami dehidrasi/kering.'
    ],
    referenceStandard: 'Petunjuk Operasional Penerapan Pedoman CPOB 2024 Aneks 1: Pembuatan Produk Steril & PIC/S PE 009-17'
  },
  {
    id: 'top-pharmacovigilance-naranjo-cbt',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    title: 'Farmakovigilans & Algoritma Naranjo: Penilaian Hubungan Kausalitas Efek Samping Obat (MESO)',
    category: 'Farmasi Klinis & Keamanan Pasien',
    tags: ['Farmakovigilans', 'Naranjo', 'MESO', 'ADR', 'Kausalitas', 'Dechallenge', 'Rechallenge', 'BPOM'],
    summary: 'Instrumen kuantitatif 10 pertanyaan validasi korelasi sebab-akibat antara timbulnya manifestasi adverse drug reaction (ADR) dengan pemberian obat tersangka.',
    keyPearls: [
      'Algoritma Naranjo terdiri dari 10 pertanyaan spesifik dengan skor (-1, 0, +1, +2):',
      '1. Apakah ada laporan definitif serupa sebelumnya tentang efek samping ini?',
      '2. Apakah efek samping muncul setelah pemberian obat tersangka (hubungan waktu temporal)?',
      '3. Apakah kondisi membaik saat obat dihentikan (Dechallenge positif: +1)?',
      '4. Apakah efek samping kambuh kembali saat obat diberikan ulang (Rechallenge positif: +2)?',
      '5. Apakah ada penyebab alternatif lain selain obat yang dapat memicu keluhan tersebut?',
      '6. Apakah reaksi muncul saat diberikan plasebo?',
      '7. Apakah obat terdeteksi dalam darah pada konsentrasi toksik?',
      '8. Apakah reaksi bertambah parah saat dosis ditingkatkan (Dose-response)?',
      '9. Apakah pasien pernah mengalami reaksi serupa terhadap obat yang sama di masa lalu?',
      '10. Apakah efek samping terkonfirmasi oleh bukti objektif laboratorium/radiologi?',
      'Interpretasi Total Skor Naranjo Kategori Kausalitas:',
      '• Skor >= 9: DEFINITE / PASTI (Kausalitas mutlak terbukti).',
      '• Skor 5 - 8: PROBABLE / SANGAT MUNGKIN.',
      '• Skor 1 - 4: POSSIBLE / CUKUP MUNGKIN (Masih ada faktor perancu penyakit/obat lain).',
      '• Skor <= 0: DOUBTFUL / RAGU-RAGU (Kecil kemungkinan berhubungan).'
    ],
    frequentExamPitfalls: [
      'Rechallenge (pemberian ulang obat) TIDAK BOLEH DILAKUKAN jika efek samping yang terjadi tergolong reaksi berat atau mengancam nyawa (seperti Sindrom Stevens-Johnson, Anafilaksis, atau Toksik Epidermal Nekrolisis).',
      'Formulir Pelaporan MESO Resmi BPOM dikenal sebagai Formulir Kuning (Yellow Form).'
    ],
    referenceStandard: 'Naranjo CA, et al. A method for estimating the probability of adverse drug reactions. Clin Pharmacol Ther & Pedoman Farmakovigilans BPOM RI'
  },
  {
    id: 'top-pharmacoeconomics-qaly-daly',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    title: 'Farmakoekonomi Lanjutan: Konsep QALY, DALY, Cost-Utility Analysis (CUA) & TreeAge Markov',
    category: 'Farmakoekonomi & Kebijakan Kesehatan',
    tags: ['Farmakoekonomi', 'QALY', 'DALY', 'CUA', 'Markov Model', 'WTP Threshold', 'PDB Per Kapita'],
    summary: 'Evaluasi outcome klinis dan kualitas hidup berbasis angka harapan hidup terbobot utilitas untuk penentuan obat Formularium Nasional (Fornas) dan program JKN BPJS.',
    keyPearls: [
      '1. Konsep Quality-Adjusted Life Years (QALY):',
      '• QALY mengombinasikan kuantitas usia harapan hidup (Life Expectancy) dengan kualitas hidup (Utility / Health-Related Quality of Life).',
      '• Skor Utilitas (U): Bernilai antara 0 (Meninggal dunia) sampai 1.0 (Kondisi sehat sempurna).',
      '• Rumus: QALY = Tambahan Tahun Usia Hidup (Years) × Nilai Utilitas Kualitas Hidup (U).',
      '• Contoh: Obat baru memperpanjang hidup 5 tahun dengan utilitas 0.8 -> Tambahan QALY = 5 × 0.8 = 4.0 QALY.',
      '2. Konsep Disability-Adjusted Life Years (DALY):',
      '• Mengukur beban penyakit global (Burden of Disease). Nilai DALY = YLL (Years of Life Lost akibat kematian dini) + YLD (Years Lost due to Disability / tahun dengan disabilitas). Semakin KECIL nilai DALY, terapi semakin efektif.',
      '3. Cost-Utility Analysis (CUA) & ICER Utilitas:',
      '• Menghitung rasio selisih biaya per tambahan unit QALY: ICER = (Biaya B - Biaya A) / (QALY B - QALY A).',
      '• Ambang Batas Kesediaan Membayar (Willingness to Pay / WTP Threshold) WHO & Kemenkes RI:',
      '  - Sangat Cost-Effective: ICER < 1 × Produk Domestik Bruto (PDB) per kapita (~ < Rp 75 Juta/QALY).',
      '  - Cost-Effective: ICER antara 1 hingga 3 × PDB per kapita (~ Rp 75 - 225 Juta/QALY).',
      '  - Tidak Cost-Effective: ICER > 3 × PDB per kapita.'
    ],
    frequentExamPitfalls: [
      'Jika utilitas terapi sama namun biaya berbeda, metode farmakoekonomi yang digunakan beralih ke Cost-Minimization Analysis (CMA), bukan CUA.',
      'QALY mengukur manfaat (gain), sedangkan DALY mengukur kerugian/beban (loss).'
    ],
    referenceStandard: 'Pedoman Penerapan Kajian Farmakoekonomi Kemenkes RI & WHO Guidelines for Pharmacoeconomic Evaluations'
  },
  {
    id: 'top-icu-sepsis-bundle-vasopressor',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    title: 'Terapi Pasien Kritis ICU: Vasopressor (Norepinefrin vs Vasopresin), Sedasi & Profilaksis Stres Ulkus',
    category: 'Farmasi Perawatan Kritis (ICU)',
    tags: ['ICU', 'Sepsis', 'Norepinefrin', 'Vasopresin', 'MAP', 'Sedasi', 'Propofol', 'Stres Ulkus'],
    summary: 'Manajemen farmakoterapi suportif pada pasien syok septik dan ventilasi mekanis: Titrasi katekolamin, pemeliharaan Mean Arterial Pressure (MAP >= 65 mmHg), dan penapisan profilaksis stres ulcer.',
    keyPearls: [
      '1. Protokol Resusitasi Syok Septik & Pemilihan Vasopressor (Surviving Sepsis Campaign 2021):',
      '• Resusitasi Cairan Awal: Kristaloid Isotonis (NaCl 0.9% atau Ringer Laktat) 30 mL/kgBB dalam kurun waktu 3 jam pertama.',
      '• Target Hemodinamik: Mean Arterial Pressure (MAP) >= 65 mmHg.',
      '• Vasopressor Lini Pertama: NOREPINEFRIN IV (Agonis kuat alfa-1 dengan efek beta-1 moderat -> Vasokonstriksi perifer kuat tanpa memicu takikardia berlebih). Dosis titrasi 0.01 - 3 mcg/kg/menit.',
      '• Agen Kedua Tambahan: VASOPRESIN IV (dosis tetap 0.03 unit/menit) ditambahkan jika MAP belum mencapai target meski dosis norepinefrin sudah sedang-tinggi.',
      '• Inotropik Tambahan: DOBUTAMIN ditambahkan jika ada disfungsi miokardium atau hipoperfusi persisten.',
      '• Hidrokortison IV (200 mg/hari kontinyu/terbagi 4) diberikan HANYA jika syok septik refrakter vasopressor.',
      '2. Manajemen Sedasi & Analgesia Pasien Terintubasi (PADIS Guidelines):',
      '• Utamakan "Analgesia-First" menggunakan Opioid IV (Fentanil IV infus).',
      '• Sedatif Pilihan: PROPOFOL atau DEKSMEDETOMIDIN (Dexmedetomidine - alfa-2 agonis selektif yang mempertahankan refleks nafas spontan tanpa depresi pernapasan berat). HINDARI Benzodiazepin (Midazolam) rutin karena memicu delirium berkepanjangan.',
      '3. Stress Ulcer Prophylaxis (SUP):',
      '• Indikasi Wajib SUP: Ventilasi mekanik > 48 jam ATAU Koagulopati (Trombosit < 50.000 / INR > 1.5). Obat: PPI IV (Omeprazol/Pantoprazol) atau Antagonis H2 IV.'
    ],
    frequentExamPitfalls: [
      'Dopamin BUKAN LAGI vasopressor lini pertama untuk syok septik karena meningkatkan insiden aritmia ventrikel takikardia secara signifikan dibanding Norepinefrin.',
      'Profilaksis stres ulkus TIDAK PERLU diberikan pada semua pasien rawat inap biasa (hanya untuk pasien ICU dengan faktor risiko mayor seperti ventilasi mekanik > 48 jam).'
    ],
    referenceStandard: 'Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021'
  },
  {
    id: 'top-ckd-mineral-bone-disorder',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    title: 'Penyakit Ginjal Kronis Lanjut: Chronic Kidney Disease-Mineral and Bone Disorder (CKD-MBD)',
    category: 'Nefrologi & Gangguan Kalsium-Fosfat',
    tags: ['CKD-MBD', 'Hiperfosfatemia', 'Kalsitriol', 'Sevelamer', 'Kalsium Karbonat', 'Cinacalcet', 'PTH'],
    summary: 'Patofisiologi retensi fosfat, defisiensi kalsitriol ginjal, hipokalsemia, dan hiperparatiroidisme sekunder pada pasien gagal ginjal kronis Stage 4-5.',
    keyPearls: [
      '1. Rantai Patogenesis CKD-MBD:',
      '• Laju filtrasi glomerulus (eGFR) turun -> Ekskresi fosfat menurun -> HIPERFOSFATEMIA (Fosfat serum > 4.5 - 5.5 mg/dL).',
      '• Penurunan sintesis enzim 1-alfa-hidroksilase di tubulus ginjal -> Sintesis Kalsitriol (1,25-(OH)2-D3 aktif) menurun -> Absorpsi kalsium di usus turun -> HIPOKALSEMIA.',
      '• Hiperfosfatemia + Hipokalsemia + Defisiensi Kalsitriol menstimulasi sekresi paratiroid -> HIPERPARATIROIDISME SEKUNDER (Kadar iPTH melonjak tinggi) -> Pengeroposan kalsium dari tulang (Osteodistrofi ginjal) & Kalsifikasi vaskular.',
      '2. Strategi Farmakoterapi Lini Pertama:',
      '• Pengikat Fosfat Berbasis Kalsium (Calcium-Based Binders): KALSIUM KARBONAT (CaCO3) atau KALSIUM ASETAT.',
      '  - Aturan Minum Wajib: Diminum BERSAMA MAKANAN (pada suapan pertama) agar mengikat fosfat dari makanan di lumen usus membentuk kalsium fosfat tidak larut yang dibuang via feses.',
      '• Pengikat Fosfat Bebas Kalsium (Non-Calcium Binders): SEVELAMER KARBONAT.',
      '  - Digunakan jika kadar kalsium serum pasien sudah tinggi (Kalsium > 10.2 mg/dL) atau produk kalsium-fosfat (Ca x P) > 55 mg²/dL² untuk mencegah kalsifikasi aorta.',
      '• Analog Vitamin D Aktif: KALSITRIOL (Rocaltrol) oral/IV untuk menekan produksi iPTH paratiroid.',
      '• Kalsimimetik: CINACALCET (meningkatkan sensitivitas reseptor kalsium kelenjar paratiroid jika iPTH tetap refrakter tinggi).'
    ],
    frequentExamPitfalls: [
      'Kalsium Karbonat yang diminum SAAT PERUT KOSONG berfungsi sebagai suplemen kalsium atau antasida penurun asam lambung, BUKAN sebagai pengikat fosfat!',
      'Untuk berfungsi sebagai PENGIRAT FOSFAT (Phosphate Binder), CaCO3 WAJIB DIMINUM BERSAMA MAKANAN.'
    ],
    referenceStandard: 'KDIGO 2024 Clinical Practice Guideline for the Diagnosis, Evaluation, and Treatment of CKD-MBD'
  },
  {
    id: 'top-cold-chain-freeze-sensitive',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    title: 'Manajemen Rantai Dingin Lanjutan: Vaksin Sensitif Panas vs Sensitif Beku & Uji Kocok (Shake Test)',
    category: 'Manajemen Vaksin & CDOB Kemenkes',
    tags: ['Vaksin', 'Cold Chain', 'Shake Test', 'Freeze-Sensitive', 'Heat-Sensitive', 'DTP-HB-Hib', 'Campak'],
    summary: 'Standar baku WHO & Kemenkes untuk pemisahan penataan vaksin sensitif panas vs sensitif beku, serta prosedur validasi kerusakan fisik vaksin akibat suhu beku.',
    keyPearls: [
      '1. Klasifikasi Sensitivitas Vaksin terhadap Suhu:',
      '• VAKSIN SENSITIF PANAS (Heat-Sensitive):',
      '  - Paling rentan rusak jika terpapar suhu hangat. Disimpan pada suhu 2°C - 8°C (atau di freezer -15°C s/d -25°C untuk faskes tingkat pusat).',
      '  - Contoh: Vaksin Polio Oral (OPV), Campak / MR / MMR, BCG, Demam Kuning (Yellow Fever).',
      '• VAKSIN SENSITIF BEKU (Freeze-Sensitive):',
      '  - SANGAT TIDAK BOLEH MEMBEKU! Pembekuan (< 0°C) menyebabkan adjuvant garam aluminium membentuk kristal gumpalan runcing yang merusak antigen dan melipatgandakan efek reaktogenisitas bengkak abses lokal.',
      '  - Wajib disimpan HANYA pada suhu 2°C s/d 8°C, JAUH DARI EVAPORATOR FREEZER.',
      '  - Contoh: Vaksin DTP-HB-Hib (Pentabio), Hepatitis B rekombinan, Tetanus Toksoid (TT), Td/DT, Polio Suntik (IPV), Human Papillomavirus (HPV), COVID-19 subunit protein.',
      '2. Prosedur Uji Kocok (Shake Test) WHO:',
      '• Digunakan saat dicurigai terjadi pembekuan vaksin sensitif beku (misal termometer cold-chain sempat drop < 0°C).',
      '• Langkah: Ambil 1 vial kontrol dari batch yang sama sengaja dibekukan di freezer hingga beku total lalu dicairkan. Kocok bersamaan vial uji dan vial kontrol beku, letakkan bersebelahan di atas meja datar.',
      '• Interpretasi Kerusakan:',
      '  - VAKSIN RUSAK (TIDAK BOLEH DIGUNAKAN): Jika laju pengendapan vial uji SAMA CEPAT ATAU LEBIH CEPAT daripada vial kontrol beku (endapan terbentuk cepat dan cairan di atasnya jernih dalam < 15-30 menit).',
      '  - VAKSIN MASIH BAIK: Jika vial uji mengendap jauh lebih lambat (cairan tetap keruh merata seperti susu lebih lama dibanding kontrol).'
    ],
    frequentExamPitfalls: [
      'Vaksin IPV (Inactivated Polio Vaccine) adalah vaksin suntik yang BERBEDA dari OPV. IPV sensitif beku (TIDAK BOLEH DIBEKUKAN, 2-8°C), sedangkan OPV boleh dibekukan (-15 s/d -25°C).',
      'Vaksin yang dinyatakan GAGAL pada Shake Test (mengendap cepat) harus segera dipisahkan, diberi label "RUSAK/JANGAN DIGUNAKAN", dan diproses pemusnahan berbauran B3.'
    ],
    referenceStandard: 'Petunjuk Teknis Pengelolaan Vaksin Rantai Dingin Kemenkes RI & WHO Temperature Sensitivity of Vaccines'
  }
];
