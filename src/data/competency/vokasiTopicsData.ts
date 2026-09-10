// Database Rangkuman Materi High-Yield Khusus Uji Kompetensi Tenaga Vokasi Farmasi (UKTVF / APDFI)
// Disusun berdasarkan Blueprint Resmi APDFI (Asosiasi Pendidikan Diploma Farmasi Indonesia) & SKKNI TTK
import { HighYieldTopic } from '../competencyExamData';

export const VOKASI_HIGH_YIELD_TOPICS: HighYieldTopic[] = [
  // =========================================================================
  // DOMAIN 1: PRAKTIK PELAYANAN FARMASI KOMUNITAS, DISPENSING & KIE
  // =========================================================================
  {
    id: 'top-vokasi-skrining-resep',
    domainId: 'klinis',
    targetExam: 'uktvk',
    title: 'Skrining Administratif & Kesesuaian Farmasetik Resep oleh TTK',
    category: 'Pelayanan Komunitas & Dispensing',
    tags: ['Skrining Resep', 'Administratif', 'Farmasetik', 'Wewenang TTK', 'APDFI'],
    summary: 'Kajian resep oleh TTK berfokus pada dua pilar utama: kelengkapan administratif dan kesesuaian farmasetik. TTK wajib meneliti legalitas dan kelayakan teknis resep sebelum proses peracikan atau penyiapan obat.',
    keyPearls: [
      'Skrining Administratif: Memeriksa nama, SIP, alamat dokter, paraf/tanda tangan dokter, tanggal penulisan resep, serta identitas pasien (nama, umur, jenis kelamin, berat badan anak, alamat).',
      'Skrining Farmasetik: Memeriksa nama obat, bentuk dan kekuatan sediaan, dosis dan jumlah obat, stabilitas, inkompatibilitas fisika/kimia (misal pencampuran serbuk higroskopis atau pelelehan campuran eutektik mentol + kamfer), serta cara dan lama penggunaan obat.',
      'Batasan Kewenangan TTK: Jika ditemukan ketidaklengkapan administratif atau ketidaksesuaian farmasetik, TTK dapat mengonfirmasi ke dokter. Namun, jika ditemukan masalah klinis kompleks (duplikasi terapi berat, kontraindikasi penyakit), TTK wajib berkoordinasi dan melaporkan kepada Apoteker penanggung jawab.',
      'Kelengkapan Resep Narkotika: Wajib mencantumkan alamat lengkap pasien dan tanda tangan dokter (bukan sekadar paraf).'
    ],
    frequentExamPitfalls: [
      'Jangan mengira TTK berwenang mengganti zat aktif tanpa persetujuan dokter dan supervisi Apoteker.',
      'Sering terkecoh antara paraf vs tanda tangan: resep narkotika mewajibkan tanda tangan lengkap dokter.'
    ],
    referenceStandard: 'Permenkes No. 73 Tahun 2016 tentang Standar Pelayanan Kefarmasian di Apotek & Standar Kompetensi TTK APDFI.'
  },
  {
    id: 'top-vokasi-dowa-pelayanan',
    domainId: 'klinis',
    targetExam: 'uktvk',
    title: 'Batasan Penyerahan Daftar Obat Wajib Apotek (DOWA 1, 2, dan 3)',
    category: 'Pelayanan Komunitas & Regulasi',
    tags: ['DOWA 1', 'DOWA 2', 'DOWA 3', 'Swamedikasi', 'Obat Keras'],
    summary: 'Daftar Obat Wajib Apotek (DOWA) adalah obat keras yang dapat diserahkan oleh tenaga kefarmasian di apotek tanpa resep dokter, dengan syarat memenuhi batasan jumlah maksimal, indikasi tertentu, dan pencatatan identitas pasien.',
    keyPearls: [
      'DOWA 1 (Kepmenkes 347/1990): Kontrasepsi oral (maks 1 siklus, untuk pasien yang telah memiliki riwayat pemeriksaan dokter sebelumnya), Ranitidin (maks 10 tablet 150 mg), Asam Mefenamat (maks 20 tablet 500 mg), Antasida + Antispasmodik (maks 20 tablet).',
      'DOWA 2 (Kepmenkes 924/1993): Ibuprofen (maks 10 tablet 400 mg atau 20 tablet 200 mg), Albendazol (maks 3 tablet 400 mg), Sulfasalazin (maks 20 tablet 500 mg), Bacitracin/Polymyxin salep kulit (maks 1 tube).',
      'DOWA 3 (Kepmenkes 1176/1999): Famotidin (maks 10 tablet 20 mg/40 mg), Ranitidin sirup/injeksi/oral, Alopurinol (maks 10 tablet 100 mg), Ketokonazol tablet (maks 10 tablet 200 mg) / krim (maks 1 tube), Setirizin/Loratadin (maks 10 tablet).',
      'Ketentuan Wajib Penyerahan: Pasien harus memenuhi kriteria swamedikasi rasional, diberikan edukasi cara pakai dan efek samping, serta dicatat dalam buku catatan penyerahan obat keras tanpa resep.'
    ],
    frequentExamPitfalls: [
      'Sering terkecoh batasan jumlah: Asam mefenamat DOWA 1 maksimal 20 tablet, sedangkan Alopurinol dan Ranitidin maksimal 10 tablet.',
      'Pil KB siklus pertama WAJIB dengan resep/rekomendasi dokter; apotek hanya boleh menyerahkan siklus ulangan.'
    ],
    referenceStandard: 'Kepmenkes No. 347/1990 (DOWA 1), No. 924/1993 (DOWA 2), dan No. 1176/1999 (DOWA 3).'
  },
  {
    id: 'top-vokasi-dm-resep',
    domainId: 'klinis',
    targetExam: 'uktvk',
    title: 'Perhitungan Dosis Maksimum (% DM Farmakope Indonesia Edisi III)',
    category: 'Perhitungan Farmasi & Dispensing',
    tags: ['Dosis Maksimum', 'Dilling', 'Young', 'Fried', 'Farmakope III'],
    summary: 'Dosis Maksimum (DM) FI Edisi III adalah takaran terbesar yang boleh diberikan kepada orang dewasa tanpa menimbulkan gejala toksik. TTK wajib menghitung persentase DM 1 kali pakai dan 1 hari pakai sebelum meracik obat.',
    keyPearls: [
      'Rumus Dilling (Anak usia 8 s/d 20 tahun): Dosis = (n / 20) x DM Dewasa (n = umur dalam tahun).',
      'Rumus Young (Anak usia di bawah 8 tahun): Dosis = (n / (n + 12)) x DM Dewasa.',
      'Rumus Fried (Bayi usia < 1 tahun / bulan): Dosis = (m / 150) x DM Dewasa (m = umur dalam bulan).',
      'Rumus Cowling: Dosis = ((n + 1) / 24) x DM Dewasa.',
      'Rumus Berdasarkan Berat Badan (Clark): Dosis = (BB anak dalam kg / 70) x DM Dewasa.',
      'Kriteria Keamanan: Persentase DM 1 kali pakai dan DM 1 hari pakai TIDAK BOLEH MELEBIHI 100%. Jika persentase > 100%, resep harus dikonfirmasi ke dokter kecuali dokter memberi tanda seru (!) atau paraf di samping dosis.',
      'Dosis Searah: Jika dalam resep terdapat dua zat aktif dengan khasiat sejenis (misal: Atropin Sulfat + Ekstrak Beladon; Aminofilin + Efedrin HCl), maka penjumlahan persentase keduanya tidak boleh > 100%.'
    ],
    frequentExamPitfalls: [
      'Memilih rumus yang salah: Anak umur 6 tahun menggunakan rumus Young (n/(n+12)), sedangkan anak umur 9 tahun menggunakan rumus Dilling (n/20).',
      'Lupa menjumlahkan persentase untuk zat yang berkhasiat searah.'
    ],
    referenceStandard: 'Farmakope Indonesia Edisi III & Buku Panduan Peracikan Obat Praktik Vokasi APDFI.'
  },
  {
    id: 'top-vokasi-racikan-pulvis',
    domainId: 'klinis',
    targetExam: 'uktvk',
    title: 'Teknik Peracikan Sediaan Serbuk (Pulveres/Pulvis) & Pengenceran Bertingkat',
    category: 'Teknik Peracikan & Dispensing',
    tags: ['Pulveres', 'Triturasi', 'Pengenceran Bertingkat', 'Karmin', 'Mortir'],
    summary: 'Peracikan serbuk terbagi (pulveres) dan serbuk tak terbagi (pulvis) memerlukan teknik penggerusan yang tepat agar homogen, stabil, dan memenuhi syarat keseragaman bobot.',
    keyPearls: [
      'Urutan Penggerusan dalam Mortir: Masukkan sebagian zat pengisi inert (seperti Saccharum Lactis/SL) terlebih dahulu untuk melapisi pori-pori mortir, baru kemudian masukkan zat berkhasiat, dan tutup kembali dengan sisa zat pengisi.',
      'Pengenceran Bertingkat (Triturasi): Dilakukan jika bobot zat aktif berkhasiat keras kurang dari 50 mg (batas terendah penimbangan neraca mg). Menggunakan perbandingan 1:10 atau 1:50 dengan penambahan zat pewarna (Carminum/Karmin) sebagai indikator homogenitas.',
      'Zat Higroskopis: Serbuk yang mudah menyerap uap air (seperti Natrium Bromida, Kalium Iodida) digerus dalam mortir hangat dan dibungkus rapat dengan kertas perkamen berlilin.',
      'Campuran Eutektik: Pencampuran Mentol, Champora, atau Timol akan menurunkan titik lebur dan meleleh. Solusinya: gerus terpisah dan serap masing-masing dengan zat inert sebelum disatukan, atau gerus bersama hingga meleleh lalu diserap dengan talk/SL dalam jumlah cukup.',
      'Bahan Berwarna Pekat (Rifampisin, Karmin): Digerus di antara dua lapisan laktosa agar tidak menodai dinding mortir secara permanen.'
    ],
    frequentExamPitfalls: [
      'Lupa menambahkan zat pewarna penanda (Karmin) pada prosedur pengenceran bertingkat.',
      'Menimbang zat aktif di bawah 50 mg langsung pada neraca tanpa pengenceran (kesalahan kritis CPOB/GLP).'
    ],
    referenceStandard: 'Farmakope Indonesia Edisi III/VI & Penuntun Praktikum Farmasetika Dasar APDFI.'
  },
  {
    id: 'top-vokasi-etiket-bud',
    domainId: 'klinis',
    targetExam: 'uktvk',
    title: 'Aturan Penandaan Etiket, Salinan Resep (Copy Resep) & Beyond Use Date (BUD)',
    category: 'Dispensing & Regulasi Farmasi',
    tags: ['Etiket Putih', 'Etiket Biru', 'Copy Resep', 'BUD USP 795', 'Detur'],
    summary: 'Penandaan etiket dan penentuan Beyond Use Date (BUD) racikan adalah tanggung jawab langsung TTK saat penyerahan sediaan. TTK juga wajib menguasai istilah baku salinan resep.',
    keyPearls: [
      'Etiket Putih: Digunakan untuk obat pemakaian dalam melalui rute oral (diminum/ditelan).',
      'Etiket Biru: Digunakan untuk obat pemakaian luar (topikal kulit, tetes mata, tetes telinga, tetes hidung, suppositoria, ovula, inhaler, obat kumur/gargle).',
      'Label Khusus: "Kocok Dahulu" wajib pada suspensi dan emulsi; "Tidak Boleh Diulang Tanpa Resep Dokter" pada antibiotik dan obat keras.',
      'Tanda pada Salinan Resep (Copy Resep): *Det* (detur = sudah diserahkan), *Ne det* (ne detur = belum diserahkan), *Did* (da in dimidio = diserahkan separuhnya), *Iter 1x* (boleh diulang 1 kali lagi / total pengambilan 2 kali).',
      'Pedoman BUD Racikan Non-Steril (USP <795>):',
      '- Sediaan Padat Non-Air (puyer, kapsul tanpa air): 6 bulan atau sisa ED bahan baku terpendek (mana yang lebih singkat).',
      '- Sediaan Semisolid Non-Air (salep vaselin, suppositoria lemak coklat): Maksimal 6 bulan.',
      '- Sediaan Cair Oral Mengandung Air (sirup racikan, suspensi rekonstitusi): Maksimal 14 hari bila disimpan di kulkas (suhu 2-8°C).',
      '- Sediaan Topikal/Mukosa Mengandung Air (krim, gel, lotion): Maksimal 30 hari pada suhu ruang terkendali.'
    ],
    frequentExamPitfalls: [
      'Menyamakan BUD (Beyond Use Date) dengan ED (Expiration Date): ED ditentukan pabrik untuk kemasan asli utuh; BUD dihitung sejak kemasan dibuka atau diracik.',
      'Memberi etiket putih pada sediaan sirup obat kumur (gargle) atau nistatin drop lokal: obat kumur dan topikal mukosa wajib beretiket BIRU.'
    ],
    referenceStandard: 'USP <795> Pharmaceutical Compounding - Nonsterile Preparations & Petunjuk Teknis Kemenkes RI.'
  },
  {
    id: 'top-vokasi-kie-inhaler-tetes',
    domainId: 'klinis',
    targetExam: 'uktvk',
    title: 'KIE Cara Penggunaan Inhaler (MDI), Tetes Telinga & Tetes Mata',
    category: 'Komunikasi, Informasi & Edukasi (KIE)',
    tags: ['MDI', 'Tetes Mata', 'Tetes Telinga', 'Punctual Occlusion', 'KIE'],
    summary: 'Edukasi cara penggunaan sediaan khusus oleh TTK sangat menentukan keberhasilan terapi pasien. Kesalahan teknik pakai menyebabkan obat tidak mencapai target organ.',
    keyPearls: [
      'Metered Dose Inhaler (MDI): (1) Buka penutup dan kocok inhaler 5 detik tegak lurus; (2) Hembuskan napas maksimal membuang udara paru; (3) Masukkan mouthpiece ke dalam mulut rapat di antara bibir; (4) Tekan kanister bersamaan dengan menarik napas lambat dan dalam (3-5 detik); (5) Tahan napas hingga 10 detik; (6) Bila perlu semprotan kedua, beri jeda minimal 1 menit; (7) Jika mengandung kortikosteroid, WAJIB berkumur dengan air lalu dibuang untuk mencegah jamur kandidiasis oral dan suara serak.',
      'Tetes Telinga: Hangatkan botol di telapak tangan beberapa menit agar tidak memicu vertigo. Tarik daun telinga: **ke belakang dan ke atas** untuk DEWASA; **ke belakang dan ke bawah** untuk BAYI/ANAK < 3 TAHUN. Pertahankan posisi miring selama 2-3 menit.',
      'Tetes Mata: Cuci tangan bersih. Buka kelopak bawah hingga membentuk kantung konjungtiva. Teteskan tanpa menyentuhkan ujung penetes ke bola mata/bulu mata. Tutup mata perlahan (jangan berkedip cepat) dan tekan sudut mata dekat pangkal hidung (*nasolacrimal duct / punctual occlusion*) selama 1-2 menit untuk mencegah penyerapan sistemik.',
      'Jeda Antar Tetes Mata: Jika pasien menggunakan dua jenis obat tetes mata berbeda, beri jeda waktu minimal 5 menit (atau 10 menit jika menggunakan salep mata, di mana salep mata selalu digunakan terakhir).'
    ],
    frequentExamPitfalls: [
      'Terbalik arah penarikan daun telinga anak < 3 tahun (seharusnya ke belakang dan ke bawah).',
      'Lupa edukasi kumur air bersih setelah memakai inhaler kortikosteroid (budesonid/flutikason).'
    ],
    referenceStandard: 'Buku Pedoman Pelayanan Informasi Obat (PIO) Kemenkes RI & Modul KIE APDFI.'
  },
  {
    id: 'top-vokasi-kie-suppo-insulin',
    domainId: 'klinis',
    targetExam: 'uktvk',
    title: 'KIE Cara Penggunaan Suppositoria, Ovula & Pen Insulin',
    category: 'Komunikasi, Informasi & Edukasi (KIE)',
    tags: ['Suppositoria', 'Ovula', 'Insulin Pen', 'Subkutan', 'KIE'],
    summary: 'Suppositoria, ovula, dan insulin merupakan sediaan dengan rute pemberian khusus yang memerlukan instruksi penyimpanan dan cara pemakaian yang sangat presisi.',
    keyPearls: [
      'Suppositoria Rektal: (1) Cuci tangan; (2) Jika suppositoria lembek, masukkan ke lemari pendingin atau aliri air dingin sebentar dalam kemasannya; (3) Buka pembungkus aluminium; (4) Basahi ujung runcing dengan air dingin (JANGAN gunakan minyak atau vaselin karena menghambat pelelehan); (5) Posisikan tubuh berbaring miring dengan satu kaki bawah lurus dan satu kaki atas ditekuk ke arah dada (*Sims position*); (6) Dorong masuk 2-3 cm dengan jari; (7) Rapatkan kaki dan pertahankan posisi berbaring selama 15 menit.',
      'Ovula Vaginal: Digunakan malam hari menjelang tidur untuk meminimalkan obat mengalir keluar saat beraktivitas tegak.',
      'Insulin Pen: (1) Keluarkan pen dari kulkas 30 menit sebelum digunakan (suhu ruang mengurangi nyeri suntik); (2) Pasang jarum baru; (3) Lakukan *priming* buang 2 unit udara hingga setetes insulin muncul di ujung jarum; (4) Putar dial dosis sesuai anjuran; (5) Cubit lipatan kulit area perut/paha/lengan dan tusuk jarum tegak lurus sudut 90 derajat subkutan; (6) Tekan tombol hingga angka kembali ke 0; (7) **Tahan jarum di dalam kulit selama 6-10 detik** sebelum dicabut agar dosis masuk sempurna; (8) Rotasi lokasi suntikan setiap kali pemakaian untuk mencegah *lipodistrofi* (penebalan jaringan lemak).',
      'Penyimpanan Insulin: Insulin belum digunakan disimpan di kulkas (2-8°C, JANGAN BEKU). Insulin yang sedang dipakai dapat disimpan di suhu ruang (< 30°C) selama maksimal 28 hari.'
    ],
    frequentExamPitfalls: [
      'Mencabut jarum insulin langsung setelah tombol ditekan: wajib ditahan 6-10 detik di bawah kulit.',
      'Mengoleskan vaselin pada suppositoria (salah; cukup dibasahi sedikit air dingin agar tidak menghalangi disolusi basis oleum cacao/PEG).'
    ],
    referenceStandard: 'ADA Standards of Care & Panduan KIE Praktik Kefarmasian Vokasi APDFI.'
  },
  {
    id: 'top-vokasi-swamedikasi-ringan',
    domainId: 'klinis',
    targetExam: 'uktvk',
    title: 'Penanganan Swamedikasi Batuk, Diare Akut & Demam Anak/Dewasa',
    category: 'Swamedikasi & Pelayanan Mandiri',
    tags: ['Batuk', 'Diare', 'Oralit', 'Zinc', 'Demam', 'Parasetamol'],
    summary: 'Sebagai garda depan pelayanan apotek, TTK sering melayani swamedikasi gangguan ringan. Pemilihan terapi rasional dan identifikasi *red flags* (tanda bahaya yang memerlukan rujukan dokter) sangat krusial.',
    keyPearls: [
      'Batuk Berdahak (Produktif): Diberikan ekspektoran (Guaifenesin/GG) atau mukolitik (Ambroxol, Bromheksin, N-Asetilsistein) untuk mengencerkan dahak. KONTRAINDIKASI: Antitusif.',
      'Batuk Kering (Non-Produktif): Diberikan antitusif penekan refleks batuk sentral di medula oblongata (Dextromethorphan HBr).',
      'Diare Akut: Terapi utama adalah rehidrasi cairan dengan Oralit formula WHO osmolaritas rendah (larutkan 1 sachet dalam 200 mL air matang).',
      'Suplementasi Zinc pada Diare Anak: Diberikan selama 10 hari berturut-turut meskipun diare sudah berhenti. Dosis: Anak < 6 bulan = 10 mg (1/2 tablet)/hari; Anak >= 6 bulan s/d 5 tahun = 20 mg (1 tablet)/hari. Berfungsi meregenerasi epitel usus yang rusak.',
      'Demam: Parasetamol (10-15 mg/kgBB per kali tiap 4-6 jam pada anak, maksimal 4 kali sehari). Alternatif: Ibuprofen (5-10 mg/kgBB per kali). Hindari Asam Mefenamat atau Aspirin pada anak karena risiko *Reye Syndrome*.',
      'Tanda Bahaya (Red Flags) Wajib Rujuk Dokter: Diare berdarah/berlendir (disentri), demam tinggi > 3 hari tidak turun, muntah terus-menerus, batuk berdarah, atau pasien bayi di bawah usia 2 bulan.'
    ],
    frequentExamPitfalls: [
      'Memberikan antibiotik (seperti Amoksisilin atau Kotrimoksazol) pada swamedikasi diare: antibiotik adalah obat keras yang wajib dengan resep dokter dan kultur mikrobiologi.',
      'Memberikan Loperamid pada anak di bawah 12 tahun (dapat memicu *ileus paralitik* fatal).'
    ],
    referenceStandard: 'Buku Saku Tata Laksana Diare Kemenkes RI & Pedoman Penggunaan Obat Bebas dan Terbatas.'
  },

  // =========================================================================
  // DOMAIN 2: PENGELOLAAN ALAT KESEHATAN (BMHP) & LOGISTIK FARMASI
  // =========================================================================
  {
    id: 'top-vokasi-bmhp-kateter-ngt',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    title: 'Spesifikasi Alat Kesehatan Habis Pakai: Kateter Foley, NGT & Spuit',
    category: 'Alat Kesehatan & BMHP',
    tags: ['Kateter Foley', 'NGT', 'Spuit', 'French Fr', 'BMHP'],
    summary: 'Penguasaan jenis, fungsi, dan skala ukuran Alat Kesehatan / Bahan Medis Habis Pakai (BMHP) merupakan kompetensi inti TTK di Instalasi Farmasi Rumah Sakit, Klinik, dan Apotek.',
    keyPearls: [
      'Kateter Foley (Indwelling Catheter): Alat drainase urin menetap dari kandung kemih. Skala ukuran menggunakan French (1 Fr = 0.33 mm diameter luar). Ukuran umum: Dewasa laki-laki (16-18 Fr), Dewasa perempuan (14-16 Fr), Anak-anak (8-10 Fr).',
      'Tipe Kateter Foley: 2-way (satu cabang untuk drainase urin, satu cabang untuk balon fiksasi) vs 3-way (memiliki cabang ketiga untuk irigasi kandung kemih kontinu pasca-operasi prostat). Balon fiksasi WAJIB diisi Aquabidest steril (5-10 mL), DILARANG menggunakan NaCl fisiologis karena garam dapat mengkristal dan menyumbat saluran balon.',
      'Nasogastric Tube (NGT): Selang feeding/dekompresi lambung melalui hidung. Memiliki garis radio-opak untuk konfirmasi posisi selang pada rontgen dada. Verifikasi posisi: aspirasi cairan lambung (pH asam < 5.5) atau auskultasi suara udara di lambung (*whoosh test*).',
      'Tipe Spuit (Syringe): Berdasarkan sambungan jarum: Slip Tip (dorong lurus), Luer Lock (ulir putar pengunci kuat), Eccentric Tip (lubang di pinggir untuk injeksi vena permukaan), Catheter Tip (corong besar tumpul untuk selang NGT sonde).',
      'Spuit Insulin: Menggunakan skala unit (100 IU/mL), terintegrasi dengan jarum mikro halus (gauge 30G-31G).'
    ],
    frequentExamPitfalls: [
      'Mengira balon kateter diisi dengan larutan NaCl: jawaban benar adalah Aqua Pro Injeksi / Aquabidest steril.',
      'Menggunakan spuit biasa ml untuk mengambil insulin (risiko salah hitung unit; wajib menggunakan spuit khusus berskala IU).'
    ],
    referenceStandard: 'Katalog Alat Kesehatan Standar Kemenkes RI & Panduan Praktikum BMHP Vokasi APDFI.'
  },
  {
    id: 'top-vokasi-bmhp-infus-kanula',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    title: 'Spesifikasi Infus Set (Makro vs Mikro), Blood Set & Kode Warna IV Cannula',
    category: 'Alat Kesehatan & BMHP',
    tags: ['Infus Set', 'Blood Set', 'IV Cannula', 'Gauge', 'Faktor Tetes'],
    summary: 'Infus set, blood set, dan IV cannula (jarum infus) memiliki parameter teknis seperti faktor tetes dan nomor gauge yang wajib dihafal secara presisi oleh TTK.',
    keyPearls: [
      'Infus Set Makrodrip: Memiliki drop factor 15 atau 20 tetes/mL. Digunakan untuk pasien dewasa dengan laju tetesan normal atau cepat.',
      'Infus Set Mikrodrip (Pediatric Infusion Set): Memiliki jarum penetes halus di dalam chamber dengan drop factor tepat **60 tetes/mL** (sehingga 1 tetes/menit = 1 mL/jam). Digunakan untuk neonatus, bayi, anak, dan obat titrasi presisi.',
      'Blood Transfusion Set (Blood Set): Memiliki saringan khusus (*mesh filter* berukuran 170-260 mikron) di dalam chamber untuk menahan bekuan darah (clot) dan agregat sel darah sebelum masuk ke vena.',
      'Kode Warna & Ukuran Gauge IV Cannula (Semakin besar angka Gauge, diameter jarum semakin KECIL):',
      '- Gauge 14G (Oranye): Diameter sangat besar, untuk resusitasi masif darurat trauma di UGD.',
      '- Gauge 16G (Abu-abu): Untuk operasi bedah mayor dan penggantian cairan darurat.',
      '- Gauge 18G (Hijau): Untuk transfusi darah rutin pada dewasa dan induksi bedah.',
      '- Gauge 20G (Merah Muda / Pink): Jarum infus paling umum dipakai untuk cairan infus dewasa.',
      '- Gauge 22G (Biru): Untuk pasien lansia, pembuluh darah vena rapuh, atau anak-anak.',
      '- Gauge 24G (Kuning): Untuk bayi, neonatus, dan anak kecil.'
    ],
    frequentExamPitfalls: [
      'Terbalik memahami ukuran gauge: 18G lebih besar daripada 24G (24G adalah jarum kecil berwarna kuning).',
      'Menggunakan infus set biasa untuk transfusi darah (salah; transfusi wajib menggunakan Blood Set yang memiliki filter clot).'
    ],
    referenceStandard: 'Standar Internasional ISO 10555 Intravascular Catheters & Pedoman BMHP IFRS.'
  },
  {
    id: 'top-vokasi-coldchain-vaksin',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    title: 'Manajemen Rantai Dingin (Cold Chain), Suhu Vaksin & Indikator VVM',
    category: 'Logistik & Rantai Dingin',
    tags: ['Cold Chain', 'Vaksin', 'VVM', 'Freezer', 'Chiller'],
    summary: 'Vaksin merupakan produk biologis termolabil yang akan mengalami denaturasi protein jika terpapar suhu di luar batas standar rantai dingin. TTK bertanggung jawab memonitor suhu harian dan mengevaluasi indikator VVM.',
    keyPearls: [
      'Suhu Chiller / Lemari Pendingin (2°C s/d 8°C): Digunakan untuk mayoritas vaksin: Hepatitis B, DPT-HB-Hib (Pentavalen), TT, DT, BCG, Campak/MR, IPV (Polio suntik), COVID-19, serta Insulin dan Oksitosin.',
      'Suhu Freezer (-25°C s/d -15°C): Khusus untuk vaksin Oral Polio Vaccine (OPV). Vaksin OPV tahan beku berulang kali.',
      'Vaksin Sensitif Beku (*Freeze-Sensitive*): DPT, Hepatitis B, TT, DT, TD. Jika membeku, partikel ajuvan aluminium akan menggumpal dan vaksin rusak permanen. Untuk menguji vaksin yang dicurigai pernah beku, lakukan **Uji Kocok (Shake Test)**: jika endapan mengendap cepat (< 15 menit) terpisah dari cairan bening, vaksin rusak dan tidak boleh digunakan.',
      'Indikator Vaccine Vial Monitor (VVM): Label indikator panas pada botol vaksin berupa bujur sangkar di dalam lingkaran:',
      '- Kondisi A: Warna bujur sangkar lebih terang dari lingkaran luar -> Vaksin DAPAT DIGUNAKAN.',
      '- Kondisi B: Warna bujur sangkar mulai menggelap tetapi masih lebih terang dari lingkaran -> Vaksin DAPAT DIGUNAKAN SEGERA.',
      '- Kondisi C: Warna bujur sangkar sama gelap dengan lingkaran -> VAKSIN JANGAN DIGUNAKAN (RUSAK).',
      '- Kondisi D: Warna bujur sangkar lebih gelap daripada lingkaran -> VAKSIN JANGAN DIGUNAKAN (RUSAK).',
      'Pencatatan Suhu: Dilakukan minimal 2 kali sehari (pagi dan sore) menggunakan termometer kalibrasi dan grafik suhu.'
    ],
    frequentExamPitfalls: [
      'Menyimpan vaksin Hepatitis B atau DPT di dalam freezer (merupakan kesalahan fatal; ajuvan aluminium akan rusak membeku).',
      'Mengira kondisi VVM B harus dibuang (kondisi B masih aman digunakan jika belum melewati tanggal kedaluwarsa).'
    ],
    referenceStandard: 'Permenkes No. 12 Tahun 2017 tentang Penyelenggaraan Imunisasi & WHO Guidelines for Vaccine Storage.'
  },
  {
    id: 'top-vokasi-penyimpanan-obat',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    title: 'Tata Kelola Penyimpanan Obat: Suhu Farmakope, FEFO, FIFO & Label LASA',
    category: 'Logistik & Manajemen Penyimpanan',
    tags: ['Suhu Farmakope', 'FEFO', 'FIFO', 'LASA', 'Tall Man Lettering'],
    summary: 'Penyimpanan obat di apotek dan rumah sakit harus menjamin stabilitas fisika, kimia, dan keamanan sediaan, serta mencegah insiden tertukar (*medication error*).',
    keyPearls: [
      'Definisi Suhu Penyimpanan Farmakope Indonesia VI:',
      '- Suhu Beku: Antara -25°C dan -10°C.',
      '- Suhu Dingin: Antara 2°C dan 8°C (lemari pendingin/kulkas).',
      '- Suhu Sejuk: Antara 8°C dan 15°C.',
      '- Suhu Ruang Terkendali: Antara 20°C dan 25°C (ruangan ber-AC).',
      '- Suhu Hangat: Antara 30°C dan 40°C.',
      'Prinsip Pengeluaran Barang: FEFO (First Expired First Out = barang dengan kedaluwarsa lebih cepat dikeluarkan terlebih dahulu) WAJIB DIPRIORITASKAN di atas FIFO (First In First Out = barang pertama masuk keluar terlebih dahulu).',
      'Pengelolaan Obat LASA / NORUM (Look-Alike Sound-Alike / Nama Obat Rupa dan Ucapan Mirip):',
      '- Diberi stiker tanda peringatan "LASA".',
      '- Penulisan menggunakan metode *Tall Man Lettering* pada huruf yang berbeda (contoh: vinCRIStine vs vinBLAStine; hydrOXYzine vs hydrALAzine; amiLOride vs amioDArone).',
      '- Tidak diletakkan bersebelahan secara fisik; wajib diselingi minimal 1-2 item obat lain yang berbeda bentuk dan kemasan.'
    ],
    frequentExamPitfalls: [
      'Menyimpan sediaan suppositoria di suhu ruang > 30°C (akan meleleh karena basis oleum cacao memiliki titik lebur 34-36°C; wajib disimpan di suhu sejuk/dingin).',
      'Mengeluarkan obat berdasar tanggal datang (FIFO) padahal ada obat lain yang ED-nya lebih dekat (melanggar FEFO).'
    ],
    referenceStandard: 'Farmakope Indonesia Edisi VI & Permenkes No. 72 Tahun 2016 tentang Standar Pelayanan Farmasi RS.'
  },
  {
    id: 'top-vokasi-high-alert',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    title: 'Penyimpanan & Penanganan Obat Kewaspadaan Tinggi (High Alert & Elektrolit Pekat)',
    category: 'Patient Safety & Logistik Farmasi',
    tags: ['High Alert', 'Elektrolit Pekat', 'KCl 7.46%', 'NaCl 3%', 'Double Check'],
    summary: 'Obat High Alert adalah obat yang sering menyebabkan cedera serius atau kematian fatal jika terjadi kesalahan penggunaan. Penyimpanannya diatur secara sangat ketat.',
    keyPearls: [
      'Daftar Elektrolit Konsentrat / Pekat:',
      '- Kalium Klorida pekat: KCl 7.46% (injeksi intravena bolus tanpa pelarutan dapat memicu aritmia henti jantung seketika fatal).',
      '- Natrium Klorida pekat: NaCl 3%.',
      '- Magnesium Sulfat pekat: MgSO4 20% dan 40%.',
      '- Natrium Bikarbonat: Meylon 8.4%.',
      '- Dekstrosa hipertonik: Dextrose 40% (D40).',
      'Lokasi Penyimpanan: Elektrolit pekat TIDAK BOLEH disimpan di ruang rawat inap biasa. Hanya diizinkan disimpan dalam jumlah terbatas di Instalasi Farmasi, ICU, ICCU, UGD, dan Kamar Bedah dengan pengawasan ketat.',
      'Penandaan: Ditempeli stiker khusus berwarna merah menyala dengan tulisan **"HIGH ALERT"** atau **"ELEKTROLIT KONSENTRAT - WAJIB DIENCERKAN"**.',
      'SOP Pemberian: Wajib dilakukan verifikasi ganda independen (*Independent Double-Check*) oleh 2 orang tenaga kesehatan sebelum obat diserahkan atau disuntikkan ke pasien.'
    ],
    frequentExamPitfalls: [
      'Menyetujui penyimpanan ampul KCl pekat di troli emergency ruang rawat inap biasa (pelanggaran keselamatan pasien akreditasi KARS/JCI).',
      'Lupa memberikan stiker penanda merah High Alert pada cairan infus yang telah dicampur obat pekat.'
    ],
    referenceStandard: 'Pedoman Standar Keselamatan Pasien Rumah Sakit Kemenkes RI & ISMP High-Alert Medication Guidelines.'
  },
  {
    id: 'top-vokasi-sp-narkotika',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    title: 'Regulasi Pengelolaan Narkotika, Psikotropika & Prekursor (Permenkes 5/2023)',
    category: 'Regulasi & Hukum Kefarmasian',
    tags: ['Narkotika', 'Psikotropika', 'Surat Pesanan N-9', 'SIPNAP', 'Lemari Khusus'],
    summary: 'Pengelolaan sediaan khusus narkotika, psikotropika, dan prekursor farmasi diatur secara ketat oleh regulasi nasional untuk mencegah penyalahgunaan dan diversi obat.',
    keyPearls: [
      'Spesifikasi Lemari Penyimpanan Narkotika & Psikotropika: Terbuat dari bahan kayu tebal atau besi kokoh; ukuran minimal 40 cm x 80 cm x 100 cm; menempel permanen pada tembok atau dibaut ke lantai; memiliki 2 pintu dengan kunci ganda berbeda. Kunci dipegang oleh Apoteker atau TTK yang ditunjuk/didelegasikan secara tertulis.',
      'Ketentuan Surat Pesanan (SP) Narkotika: Menggunakan form SP khusus model N-9 resmi; dibuat dalam 4 rangkap; **SATU LEMBAR SP HANYA BOLEH MEMUAT 1 (SATU) JENIS NAMA OBAT NARKOTIKA**.',
      'SP Psikotropika & Prekursor: Boleh memuat lebih dari satu jenis obat selama berada dalam golongan sediaan yang sama, dibuat rangkap 3.',
      'Pelaporan SIPNAP (Sistem Pelaporan Narkotika dan Psikotropika): Pelaporan mutasi pemasukan dan pengeluaran wajib dikirimkan secara elektronik setiap bulan, paling lambat tanggal 10 bulan berikutnya.',
      'Pemusnahan Narkotika/Psikotropika: Wajib disaksikan oleh petugas Dinas Kesehatan Kabupaten/Kota atau Balai POM setempat, dibuatkan Berita Acara Pemusnahan (BAP) rangkap 4.'
    ],
    frequentExamPitfalls: [
      'Menuliskan 2 jenis sediaan narkotika berbeda dalam 1 lembar SP N-9 (SP akan langsung ditolak oleh PBF Kimia Farma).',
      'Lupa bahwa kunci lemari narkotika wajib menggunakan 2 anak kunci berbeda yang dipegang oleh penanggung jawab.'
    ],
    referenceStandard: 'Permenkes No. 5 Tahun 2023 tentang Narkotika, Psikotropika, dan Prekursor Farmasi.'
  },
  {
    id: 'top-vokasi-penerimaan-barang',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    title: 'Prosedur Verifikasi Penerimaan Barang Kefarmasian & Faktur PBF',
    category: 'Logistik & Distribusi Farmasi',
    tags: ['Penerimaan Barang', 'Faktur PBF', 'Batch Number', 'Expired Date', 'CDOB'],
    summary: 'Penerimaan barang dari Pedagang Besar Farmasi (PBF) merupakan titik kontrol pertama jaminan mutu fisik dan legalitas obat sebelum masuk ke gudang apotek atau rumah sakit.',
    keyPearls: [
      'Pemeriksaan 4 Elemen Utama Fisik vs Dokumen:',
      '1. Kesesuaian Nama Obat, Bentuk Sediaan, dan Kekuatan/Dosis antara fisik barang, Surat Pesanan (SP), dan Faktur resmi PBF.',
      '2. Jumlah Kuantitas Fisik Barang (kemasan luar, strip, botol, ampul).',
      '3. Nomor Bets (Batch Number) pada fisik kemasan WAJIB SAMA PERSIS dengan nomor bets yang tertera di faktur.',
      '4. Tanggal Kedaluwarsa (Expired Date): Umumnya minimal 2 tahun dari tanggal penerimaan (kecuali untuk obat fast-moving atau ada kesepakatan surat jaminan retur bermaterai).',
      'Pemeriksaan Produk Rantai Dingin (Vaksin/Biolab): Periksa keberadaan ice pack / dry ice, cek suhu boks pendingin (suhu 2-8°C dengan *data logger* atau termometer boks), periksa indikator VVM (harus kondisi A atau B). Jika suhu melebihi 8°C atau VVM kondisi C/D, barang WAJIB DITOLAK.',
      'Pengesahan Dokumen: Faktur asli dan salinan dibubuhi stempel apotek/RS, tanggal dan jam terima, nama terang, nomor SIPTTK/SIPA, dan tanda tangan penerima.'
    ],
    frequentExamPitfalls: [
      'Menandatangani faktur tanpa memeriksa nomor bets pada fisik kemasan (jika terjadi penarikan obat/recall oleh BPOM, penelusuran bets akan salah).',
      'Menerima vaksin rantai dingin yang suhunya saat tiba sudah mencapai 15°C tanpa menolak barang.'
    ],
    referenceStandard: 'Petunjuk Teknis CDOB (Cara Distribusi Obat yang Baik) BPOM RI & Permenkes No. 73/2016.'
  },
  {
    id: 'top-vokasi-pengelolaan-limbah-b3',
    domainId: 'manajemen',
    targetExam: 'uktvk',
    title: 'Pengelolaan Limbah Medis & Farmasi B3 (Safety Box, Kantong Kuning/Coklat/Ungu)',
    category: 'Sanitasi & Pengelolaan Limbah B3',
    tags: ['Limbah B3', 'Safety Box', 'Kantong Kuning', 'Sitostatika', 'Pemusnahan'],
    summary: 'Fasilitas pelayanan kefarmasian menghasilkan limbah Bahan Berbahaya dan Beracun (B3) yang memerlukan tata kelola pewadahan dan pemusnahan berstandar lingkungan hidup.',
    keyPearls: [
      'Pewadahan Limbah Medis Berdasarkan Kode Warna Kantong Plastik:',
      '- Kantong Kuning: Untuk limbah medis infeksius dan patologis (kassa darah, kapas alkohol, selang infus bekas pakai, perban).',
      '- Safety Box (Kotak Kuning Tebal Tahan Tusuk): Khusus limbah benda tajam (jarum suntik, spuit berjarum, pecahan ampul kaca, pisau bedah bisturi). Diisi maksimal 3/4 volume kotak lalu disegel.',
      '- Kantong Coklat: Khusus limbah bahan kimia kedaluwarsa, obat rusak, dan sisa kemasan obat non-kemoterapi.',
      '- Kantong Ungu: Khusus limbah sitotoksik / sitostatika kemoterapi kanker (kemasan vial onkologi, sarung tangan peracikan kemo).',
      '- Kantong Hitam: Limbah domestik non-medis (kertas resep biasa, plastik pembungkus makanan).',
      'Penyimpanan Sementara: Limbah infeksius disimpan di Tempat Penyimpanan Sementara (TPS) B3 berizin dengan suhu < 0°C maksimal 90 hari, atau suhu ruang maksimal 2 hari (48 jam).',
      'Pemusnahan Resep: Resep disimpan dan diarsipkan sekurang-kurangnya selama 5 tahun, selanjutnya dapat dimusnahkan dengan cara dibakar atau dihancurkan disaksikan Apoteker dan dibuatkan Berita Acara.'
    ],
    frequentExamPitfalls: [
      'Membuang jarum spuit bekas ke dalam kantong plastik kuning biasa (salah; jarum wajib langsung dimasukkan ke dalam Safety Box tahan tusukan tanpa menutup kembali / *no recapping*).',
      'Membuang vial kemoterapi ke dalam kantong kuning biasa (limbah sitostatika wajib dimasukkan ke kantong ungu).'
    ],
    referenceStandard: 'Permenkes No. 7 Tahun 2019 tentang Kesehatan Lingkungan Rumah Sakit & Permen LHK No. 56 Tahun 2015.'
  },

  // =========================================================================
  // DOMAIN 3: TEKNOLOGI SEDIAAN FARMASI & KONTROL KUALITAS QC FISIK
  // =========================================================================
  {
    id: 'top-vokasi-uji-tablet',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    title: 'Evaluasi Mutu Fisik Tablet: Kerapuhan (< 1%), Waktu Hancur, Kekerasan & Bobot',
    category: 'Kontrol Kualitas (QC) Sediaan Padat',
    tags: ['Kerapuhan', 'Friabilator', 'Waktu Hancur', 'Kekerasan', 'Farmakope VI'],
    summary: 'Evaluasi mutu fisik tablet merupakan pengujian rutin In-Process Control (IPC) dan Finished Good yang dilakukan oleh analis QC dan TTK di laboratorium farmasi.',
    keyPearls: [
      'Uji Kerapuhan (Friability Test): Menggunakan alat Roche Friabilator pada kecepatan 25 rpm selama 4 menit (total 100 putaran). Persyaratan Farmakope: kehilangan bobot (*friability*) MAKSIMAL < 1.0%. Sampel: jika bobot tablet <= 650 mg ambil sampel setara 6.5 g; jika > 650 mg ambil 10 tablet.',
      'Uji Waktu Hancur (Disintegration Test): Menggunakan Disintegration Tester dengan media air suhu 37 ± 2°C:',
      '- Tablet Tidak Bersalut: Hancur dalam waktu < 15 menit.',
      '- Tablet Salut Film / Gula: Hancur dalam waktu < 30 menit.',
      '- Tablet Enterik: Tahan tidak hancur selama 120 menit dalam larutan asam (HCl 0.1 N), dan wajib hancur sempurna dalam waktu < 60 menit dalam larutan dapar fosfat pH 6.8.',
      'Uji Kekerasan (Hardness Test): Menggunakan Hardness Tester. Rentang ideal tablet oral biasa adalah **4 s/d 8 kg/cm²** (tablet kunyah sekitar 3 kg/cm², sedangkan tablet hisap/effervescent bisa 8-10 kg/cm²).',
      'Uji Keseragaman Bobot (FI Edisi III): Dari penimbangan 20 tablet acak, tidak boleh lebih dari 2 tablet yang bobotnya menyimpang dari kolom A, dan tidak boleh ada 1 pun tablet yang menyimpang dari kolom B.'
    ],
    frequentExamPitfalls: [
      'Lupa membersihkan debu tablet (*de-dusting*) sebelum menimbang pada uji kerapuhan.',
      'Salah batas kerapuhan: nilai kerapuhan 1.2% adalah TIDAK MEMENUHI SYARAT (batas maksimal adalah < 1.0%).'
    ],
    referenceStandard: 'Farmakope Indonesia Edisi VI & WHO Compendium of Tablet Quality Control Methods.'
  },
  {
    id: 'top-vokasi-cacat-tablet',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    title: 'Identifikasi Cacat Pencetakan Tablet (Capping, Lamination, Sticking, Mottling)',
    category: 'Teknologi Formulasi Sediaan Padat',
    tags: ['Capping', 'Lamination', 'Sticking', 'Picking', 'Mottling', 'Eksipien'],
    summary: 'Dalam proses pencetakan tablet skala laboratorium dan industri, sering muncul cacat fisik akibat masalah formulasi granul atau setelan mesin cetak punch and die.',
    keyPearls: [
      'Capping: Pemisahan sebagian atau seluruh mahkota atas/bawah tablet dari badan utama. Penyebab: udara terperangkap dalam massa cetak saat kompresi cepat, kelembaban granul terlalu rendah (< 1%), atau tekanan punch berlebihan.',
      'Lamination: Pemisahan tablet menjadi dua atau lebih lapisan horizontal bertingkat. Penyebab mirip dengan capping (keberadaan udara dan relaksasi elastis polimer tinggi).',
      'Sticking: Massa cetak menempel pada permukaan punch atas atau bawah sehingga permukaan tablet tampak kusam dan cacat. Penyebab: kadar air granul terlalu tinggi/basah, atau lubrikan (Magnesium Stearat) kurang.',
      'Picking: Sebagian kecil massa permukaan tablet tercongkel dan menempel pada logo atau ukiran di punch. Penyebab: huruf/logo punch terlalu tajam, lubrikan kurang, granul terlalu lembab.',
      'Binding: Tablet tertahan dan sukar didorong keluar dari lubang die, menyebabkan dinding tepi tablet bergaris-garis kasar. Penyebab: kurang lubrikan atau die aus.',
      'Mottling: Distribusi zat warna yang tidak seragam pada permukaan tablet (bercak-bercak). Penyebab: migrasi pewarna terlarut ke permukaan granul saat pengeringan suhu tinggi.'
    ],
    frequentExamPitfalls: [
      'Menukar solusi untuk capping vs sticking: Capping diatasi dengan memperlambat kompresi atau menambah pengikat/kelembaban sedikit; Sticking diatasi dengan mengeringkan granul atau menambah lubrikan.'
    ],
    referenceStandard: 'The Theory and Practice of Industrial Pharmacy (Lachman) & Panduan Formulasi Sediaan Padat.'
  },
  {
    id: 'top-vokasi-evaluasi-suspensi',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    title: 'Evaluasi Mutu Fisik Suspensi: Volume Sedimentasi (F) & Flokulasi vs Deflokulasi',
    category: 'Kontrol Kualitas Sediaan Cair',
    tags: ['Suspensi', 'Volume Sedimentasi', 'Flokulasi', 'Deflokulasi', 'Caking'],
    summary: 'Sediaan suspensi farmasi memiliki ketidakstabilan termodinamika alami berupa pengendapan partikel padat. Formulasi yang baik menjamin partikel mudah diredispersi kembali saat dikocok.',
    keyPearls: [
      'Volume Sedimentasi (F): Rasio perbandingan antara volume akhir endapan (Vu) terhadap volume awal suspensi sebelum mengendap (Vo). Rumus: **F = Vu / Vo**.',
      'Interpretasi Nilai F: Nilai F ideal adalah 1.0 (tidak ada endapan terpisah). Jika F = 0.5, berarti endapan menempati setengah volume wadah. Jika F > 1, terjadi pembentukan struktur jaringan flokulasi yang sangat longgar dan mengembang.',
      'Sistem Suspensi Terflokulasi: Partikel membentuk agregat atau flokulat longgar. Laju sedimentasi CEPAT, supernatan (cairan di atas endapan) tampak JERNIH, namun endapan **TIDAK MEMBENTUK CAKING** dan **SANGAT MUDAH DIREDISPERSI KEMBALI** dengan pengocokan ringan.',
      'Sistem Suspensi Terdeflokulasi: Partikel mengendap secara individual terpisah. Laju sedimentasi LAMBAT, supernatan tampak KERUH lama, namun setelah mengendap partikel saling mengunci membentuk **endapan keras liat (Caking / Claying)** yang **SANGAT SULIT ATAU TIDAK DAPAT DIREDISPERSI KEMBALI**.',
      'Zat Pensuspensi (Suspending Agent): Karboksimetilselulosa natrium (CMC-Na), Xanthan Gum, Tragakan, Pulvis Gummi Arabici (PGA).'
    ],
    frequentExamPitfalls: [
      'Mengira sistem deflokulasi lebih baik karena mengendap lambat: deflokulasi sangat berbahaya karena membentuk endapan keras (caking) yang membuat dosis obat menjadi tidak akurat.',
      'Salah menghitung F: Vu adalah volume endapan (bawah), bukan cairan jernih di atas.'
    ],
    referenceStandard: 'Physical Pharmacy (Martin) & Panduan Praktikum Farmasetika Cair-Semi Padat APDFI.'
  },
  {
    id: 'top-vokasi-evaluasi-emulsi',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    title: 'Evaluasi Fisik Emulsi: Penentuan Tipe Emulsi & Fenomena Creaming vs Cracking',
    category: 'Teknologi Sediaan Cair & Dispersi',
    tags: ['Emulsi', 'M/A', 'A/M', 'Creaming', 'Cracking', 'Inversi Fase'],
    summary: 'Emulsi adalah sistem dua fase yang tidak saling bercampur yang distabilkan oleh emulgator. Evaluasi tipe dan stabilitas emulsi merupakan materi uji wajib kompetensi TTK.',
    keyPearls: [
      'Uji Penentuan Tipe Emulsi (Minyak dalam Air / M/A vs Air dalam Minyak / A/M):',
      '- Uji Pengenceran: Emulsi M/A dapat diencerkan secara homogen dengan air; emulsi A/M menggumpal jika ditambah air.',
      '- Uji Pewarnaan: Metilen Biru (zat warna larut air) akan menyebar merata pada emulsi M/A; Sudan III (zat warna larut minyak) akan menyebar merata pada emulsi A/M.',
      '- Uji Hantaran Listrik: Emulsi M/A memiliki fase kontinu air elektrolit sehingga mampu menghantarkan arus listrik (lampu menyala); emulsi A/M tidak menghantarkan listrik.',
      '- Uji Kertas Saring: Tetesan emulsi M/A cepat membasahi dan menyebar di kertas saring; emulsi A/M meninggalkan noda cincin minyak transparan.',
      'Fenomena Ketidakstabilan Emulsi:',
      '- Creaming: Pemisahan fase terdispersi ke arah atas atau bawah akibat perbedaan massa jenis. Sifatnya **REVERSIBEL** (dapat menyatu kembali dengan pengocokan ringan).',
      '- Cracking / Breaking: Rusaknya lapisan film antarmuka emulgator sehingga tetesan fase dalam menyatu (*koalesensi*) membentuk lapisan terpisah secara permanen. Sifatnya **IREVERSIBEL** (rusak permanen, tidak dapat menyatu kembali).',
      '- Inversi Fase: Berubahnya tipe emulsi dari M/A menjadi A/M atau sebaliknya akibat perubahan konsentrasi elektrolit atau suhu.'
    ],
    frequentExamPitfalls: [
      'Menyamakan creaming dengan cracking: Creaming masih bisa dikocok ulang (reversibel); Cracking berarti emulsi sudah pecah rusak total (ireversibel).'
    ],
    referenceStandard: 'Farmakope Indonesia Edisi VI & Buku Ajar Teknologi Sediaan Likvida-Semisolida.'
  },
  {
    id: 'top-vokasi-evaluasi-semisolida',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    title: 'Evaluasi Mutu Fisik Sediaan Salep, Krim & Gel (Daya Sebar, Daya Lekat & pH)',
    category: 'Kontrol Kualitas Sediaan Semipadat',
    tags: ['Salep', 'Krim', 'Gel', 'Daya Sebar', 'Daya Lekat', 'pH Kulit'],
    summary: 'Sediaan semisolida topikal harus memenuhi parameter fisik daya sebar, daya lekat, homogenitas, dan rentang pH fisiologis agar efektif dan tidak mengiritasi kulit pasien.',
    keyPearls: [
      'Uji Daya Sebar: Menggunakan dua lempeng kaca bulat transparan. Sampel 0.5 g diletakkan di tengah kaca, ditutup kaca penutup berbeban bertahap (50 g, 100 g, 200 g) selama 1 menit. Rentang diameter daya sebar ideal sediaan topikal kulit adalah **5.0 s/d 7.0 cm**.',
      'Uji Daya Lekat: Mengukur waktu yang dibutuhkan untuk pelepasan dua lempeng kaca berbeban tertentu yang ditempeli sediaan 0.25 g. Persyaratan ideal daya lekat salep adalah **> 4 detik** (semakin lama daya lekat, kontak obat dengan kulit semakin optimal).',
      'Uji Homogenitas: Sampel dioleskan tipis pada sekeping kaca transparan; sediaan tidak boleh memperlihatkan adanya butiran kasar, gumpalan, atau pemisahan fase.',
      'Uji pH Sediaan Kulit: Menggunakan pH meter kalibrasi atau indikator universal. Rentang pH sediaan topikal kulit WAJIB berada pada rentang mantel asam kulit yaitu **4.5 s/d 6.5**. Jika pH < 4.5 dapat memicu iritasi kulit; jika pH > 6.5 menyebabkan kulit kering dan merusak flora normal kulit.',
      'Karakteristik Basis Salep:',
      '- Hidrokarbon (Vaselin album/flavum): Sangat oklusif, berminyak, emolien kuat, sukar dicuci air.',
      '- Serap (Adeps Lanae / Lemak Bulu Domba): Mampu menyerap air dalam jumlah tertentu membentuk emulsi A/M.',
      '- Tercuci Air (Vanishing cream): Basis emulsi M/A, mudah dibilas air, tidak lengket.'
    ],
    frequentExamPitfalls: [
      'Salah rentang diameter daya sebar: rentang ideal yang sering keluar di soal UKTVF adalah 5 - 7 cm.',
      'Memilih pH sediaan di luar rentang mantel asam kulit 4.5 - 6.5.'
    ],
    referenceStandard: 'Farmakope Indonesia Edisi VI & Standar Praktikum Teknologi Formulasi Semisolida APDFI.'
  },
  {
    id: 'top-vokasi-metode-sterilisasi',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    title: 'Metode Sterilisasi Farmakope: Autoklaf 121°C, Oven 160-170°C, Filtrasi 0.22 µm',
    category: 'Teknologi Sediaan Steril',
    tags: ['Autoklaf', 'Oven Panas Kering', 'Filtrasi Membran', 'Sterilisasi', 'Bioindikator'],
    summary: 'Pemilihan metode sterilisasi sediaan farmasi dan alat kesehatan disesuaikan dengan stabilitas fisiko-kimia bahan terhadap panas dan kelembaban.',
    keyPearls: [
      'Sterilisasi Panas Basah (Autoklaf): Menggunakan uap air jenuh bertekanan pada suhu **121°C selama 15 menit** dengan tekanan 1 atm (15 psi). Mekanisme: koagulasi dan denaturasi protein sel mikroba. Digunakan untuk larutan berair/injeksi cair, pakaian kerja steril, alat karet tahan panas, dan glassware.',
      'Sterilisasi Panas Kering (Oven / Hot Air Oven): Suhu **160°C - 170°C selama 1 s/d 2 jam**. Mekanisme: destruksi oksidatif sel mikroba. Digunakan untuk bahan yang tidak tembus uap air: serbuk tahan panas (Talk, Seng Oksida), minyak lemak, parafin cair, vaselin, dan instrumen logam bedah tajam (tidak tumpul karena air).',
      'Sterilisasi Filtrasi Membran (Aseptik): Menggunakan filter membran selulosa dengan ukuran pori **0.22 mikron (0.22 µm)**. Digunakan khusus untuk cairan atau larutan yang **termolabil** (rusak oleh pemanasan, seperti larutan antibiotik, enzim, hormon peptida, insulin, dan vaksin).',
      'Sterilisasi Radiasi / Gas Etilen Oksida: Untuk alat kesehatan berbahan plastik sekali pakai (kateter, spuit, blood bag).',
      'Bioindikator Validasi Sterilisasi:',
      '- Autoklaf: Spora *Geobacillus stearothermophilus*.',
      '- Oven Panas Kering: Spora *Bacillus atrophaeus* (dahulu *Bacillus subtilis*).'
    ],
    frequentExamPitfalls: [
      'Mensterilkan minyak lemak atau vaselin menggunakan autoklaf (salah; uap air tidak dapat menembus minyak lemak, wajib menggunakan Oven Panas Kering 160°C).',
      'Mensterilkan larutan antibiotik/protein dengan autoklaf (salah; zat aktif termolabil wajib disterilkan secara filtrasi membran 0.22 µm).'
    ],
    referenceStandard: 'Farmakope Indonesia Edisi VI (Lampiran Metode Sterilisasi) & Petunjuk Operasional CPOB.'
  },
  {
    id: 'top-vokasi-ruang-cpob',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    title: 'Klasifikasi Ruang Bersih Industri CPOB (Kelas A, B, C, D, E) & Tekanan Diferensial',
    category: 'CPOB & Tata Udara Industri',
    tags: ['CPOB', 'Ruang Bersih', 'Kelas A', 'Tekanan Udara', 'HVAC'],
    summary: 'Standar Cara Pembuatan Obat yang Baik (CPOB) menetapkan batas partikel udara, jumlah mikroba, dan perbedaan tekanan udara antar ruangan untuk mencegah kontaminasi produk.',
    keyPearls: [
      'Klasifikasi Ruang Bersih CPOB:',
      '- Kelas A (Zona Kritis): Area pengisian aseptik, wadah steril terbuka, penutupan vial. Dilengkapi aliran udara laminer (Laminar Air Flow / LAF) dengan kecepatan udara 0.36 - 0.54 m/s. Jumlah partikel ukuran >= 0.5 µm maksimal **3.520 partikel/m³** (baik saat operasional maupun non-operasional).',
      '- Kelas B: Lingkungan latar belakang (background) untuk area Kelas A pada pengolahan secara aseptik.',
      '- Kelas C: Area bersih untuk pembuatan sediaan steril dengan metode sterilisasi akhir (autoklaf di tahap akhir).',
      '- Kelas D: Area bersih untuk penanganan komponen setelah pencucian dan pembuatan larutan sebelum filtrasi.',
      '- Kelas E: Area pengolahan umum untuk sediaan non-steril (ruang cetak tablet, ruang sirup oral, ruang salep).',
      'Tekanan Udara Diferensial (Differential Pressure): Tekanan udara di ruangan yang lebih bersih harus LEBIH TINGGI (minimal beda 10 s/d 15 Pascal) dibandingkan ruangan di luarnya, sehingga arah aliran udara selalu keluar dan debu luar tidak masuk.',
      'Pengecualian Tekanan Negatif: Ruang pengolahan sediaan berbahan berdebu pekat atau antibiotik Penisilin/Sitostatika menggunakan **tekanan udara negatif** agar debu obat tidak mencemari koridor umum.'
    ],
    frequentExamPitfalls: [
      'Menempatkan area pengisian sediaan steril tetes mata tanpa sterilisasi akhir di Kelas D (proses aseptik wajib dilakukan di zona Kelas A dengan background Kelas B).',
      'Mengira arah tekanan ruang sitostatika lebih tinggi daripada koridor (ruang sitostatika bertekanan negatif untuk melindungi personil).'
    ],
    referenceStandard: 'Pedoman Cara Pembuatan Obat yang Baik (CPOB) BPOM RI 2018 & 2024.'
  },
  {
    id: 'top-vokasi-rheologi-viskositas',
    domainId: 'teknologi',
    targetExam: 'uktvk',
    title: 'Pengukuran Bobot Jenis (Piknometer) & Viskositas Sediaan Cair (Ostwald vs Brookfield)',
    category: 'Laboratorium & Fisika Farmasi',
    tags: ['Bobot Jenis', 'Piknometer', 'Viskometer Ostwald', 'Brookfield', 'Rheologi'],
    summary: 'Kerapatan bobot jenis dan sifat alir reologi sediaan cair menentukan homogenitas pengisian kemasan botol serta kemudahan penuangan cairan oleh pasien.',
    keyPearls: [
      'Penentuan Bobot Jenis (Piknometer): Piknometer dibersihkan dan dikeringkan. Ditimbang kosong (W0), ditimbang berisi air suling penuh (W1), dan ditimbang berisi cairan uji penuh (W2) pada suhu standar 25°C. Rumus: **Bobot Jenis (ρ) = (W2 - W0) / (W1 - W0)**.',
      'Viskometer Kapiler Ostwald: Digunakan untuk mengukur viskositas cairan encer berkarakteristik aliran Newton (air suling, alkohol, sirup encer). Mengukur waktu alir cairan dari garis batas atas ke batas bawah pipa kapiler dibanding waktu alir air.',
      'Viskometer Rotasi Brookfield: Digunakan untuk mengukur viskositas cairan kental dan semipadat berkarakteristik aliran non-Newton (suspensi, emulsi, gel, salep). Menggunakan spindel berputar yang dicelupkan ke dalam sampel pada variasi kecepatan putar (rpm).',
      'Tipe Aliran Non-Newton Penting dalam Farmasi:',
      '- Aliran Tiksotropik (Thixotropic): Viskositas sediaan MENURUN saat dikocok/diberi gaya geser, dan secara perlahan KEMBALI KENTAL setelah didiamkan. Karakteristik paling ideal untuk sediaan suspensi dan emulsi.',
      '- Aliran Pseudoplastis: Viskositas berkurang langsung seiring meningkatnya laju geser (contoh: larutan gom, mucilago CMC).'
    ],
    frequentExamPitfalls: [
      'Menggunakan viskometer Ostwald untuk mengukur viskositas suspensi kental atau gel (Ostwald hanya untuk cairan encer Newton).',
      'Lupa mengeringkan bagian luar piknometer sebelum penimbangan pada neraca analitik.'
    ],
    referenceStandard: 'Farmakope Indonesia Edisi VI & Petunjuk Praktikum Fisika Farmasi Vokasi.'
  },

  // =========================================================================
  // DOMAIN 4: FARMASI BAHAN ALAM, SIMPLISIA MMI & OBAT TRADISIONAL
  // =========================================================================
  {
    id: 'top-vokasi-metode-ekstraksi',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    title: 'Metode Ekstraksi Simplisia: Maserasi, Perkolasi, Sokletasi, Infusa & Dekokta',
    category: 'Fitokimia & Teknologi Ekstraksi',
    tags: ['Maserasi', 'Perkolasi', 'Sokletasi', 'Infusa', 'Dekokta', 'Ekstraksi'],
    summary: 'Ekstraksi adalah pemisahan zat aktif dari jaringan tanaman menggunakan pelarut selektif. TTK wajib menguasai prinsip kerja, suhu, waktu, dan jenis alat ekstraksi standar.',
    keyPearls: [
      'Maserasi (Ekstraksi Dingin): Perendaman serbuk simplisia dalam pelarut selama beberapa hari pada suhu kamar (20-25°C) terlindung dari cahaya matahari langsung sambil sesekali diaduk. Sangat cocok untuk senyawa aktif yang **termolabil (rusak oleh pemanasan)**.',
      'Perkolasi (Ekstraksi Dingin Alir): Pengaliran pelarut baru secara perlahan dan berkesinambungan melalui serbuk simplisia yang telah dimampatkan dalam alat perkolator berbentuk kerucut terbalik.',
      'Sokletasi (Ekstraksi Panas Berkesinambungan): Ekstraksi menggunakan alat Soxhlet di mana pelarut dipanaskan menguap, terkondensasi, membasahi simplisia di thimble, dan saat mencapai batas sifon akan bersirkulasi kembali ke labu alas bulat. Sangat hemat pelarut, namun hanya cocok untuk zat aktif **tahan panas (termostabil)**.',
      'Infusa (Infundasi): Ekstraksi dengan pelarut air pada penangas air bersuhu **90°C selama tepat 15 menit** terhitung sejak suhu panci mencapai 90°C. Cocok untuk bagian simplisia lunak (daun/folium, bunga/flos, herba).',
      'Dekokta: Ekstraksi dengan pelarut air pada penangas air bersuhu **90°C selama 30 menit**. Cocok untuk bagian simplisia keras, berkayu, dan padat (kulit batang/cortex, kayu/lignum, akar/radix, rimpang keras).',
      'Destilasi Uap-Air: Metode pemisahan khusus untuk mengisolasi minyak atsiri yang mudah menguap.'
    ],
    frequentExamPitfalls: [
      'Menjawab 15 menit untuk dekokta (infusa = 15 menit; dekokta = 30 menit).',
      'Menggunakan metode sokletasi untuk zat aktif yang rusak oleh pemanasan (senyawa termolabil wajib diekstraksi dengan maserasi atau perkolasi dingin).'
    ],
    referenceStandard: 'Farmakope Herbal Indonesia Edisi II & Penuntun Praktikum Fitokimia APDFI.'
  },
  {
    id: 'top-vokasi-makroskopik-mikroskopik',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    title: 'Karakterisasi Makroskopik & Fragmen Mikroskopik Khas MMI',
    category: 'Materia Medika Indonesia (MMI) & Farmakognosi',
    tags: ['Mikroskopik', 'Fragmen Pengenal', 'Temulawak', 'Jahe', 'Kumis Kucing'],
    summary: 'Identifikasi keaslian dan kemurnian serbuk simplisia dilakukan melalui uji mikroskopik menggunakan reagen kloralhidrat untuk mengamati fragmen sel pengenal spesifik.',
    keyPearls: [
      'Rimpang Temulawak (*Curcuma xanthorrhiza*): Fragmen pengenal mikroskopik berupa butir amilum berbentuk pipih bulat telur dengan tonjolan papila di salah satu ujung, berkas pengangkut dengan penebalan spiral, rambut penutup bersel satu, dan sel sekresi kurkuminoid berwarna kuning jingga (berwarna merah darah bila ditetesi H2SO4 pekat).',
      'Rimpang Jahe (*Zingiber officinale*): Fragmen pengenal berupa serabut sklerenkim berdinding tebal dengan noktah jelas, pembuluh kayu berpenebalan tangga, butir amilum spesifik jahe, dan sel oleoresin pedas gingerol.',
      'Daun Kumis Kucing (*Orthosiphon stamineus*): Fragmen pengenal mikroskopik berupa **rambut kelenjar tipe Lamiaceae** berkepala 4 sel, rambut penutup bersel 2-3 dengan dinding berartikulasi/berbintik, dan kristal kalsium oksalat bentuk prisma.',
      'Daun Jati Belanda (*Guazuma ulmifolia*): Fragmen pengenal diagnostik paling khas adalah **rambut penutup berbentuk BINTANG (stellate hair)** bercabang banyak dan sel lendir.',
      'Daun Jambu Biji (*Psidium guajava*): Fragmen pengenal berupa hablur kalsium oksalat bentuk roset/drusen, rambut penutup meruncing bersel tunggal, dan stomata tipe anomositik.',
      'Reagen Kloralhidrat: Digunakan dalam pembuatan preparat mikroskopik simplisia untuk menjernihkan preparat (melarutkan isi sel yang mengganggu seperti amilum berlebih).'
    ],
    frequentExamPitfalls: [
      'Sering ditanyakan bentuk rambut penutup Jati Belanda: bentuk bintang (*stellate*).',
      'Menjawab reagen pensteril untuk mikroskopik: kloralhidrat berfungsi sebagai agen penjernih (*clearing agent*), bukan pewarna.'
    ],
    referenceStandard: 'Materia Medika Indonesia (MMI) Jilid I-VI & Farmakope Herbal Indonesia.'
  },
  {
    id: 'top-vokasi-skrining-fitokimia',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    title: 'Prosedur Uji Skrining Fitokimia Tabung Reaksi (Alkaloid, Flavonoid, Tanin, Saponin)',
    category: 'Fitokimia & Analisis Bahan Alam',
    tags: ['Skrining Fitokimia', 'Alkaloid', 'Flavonoid', 'Tanin', 'Saponin', 'Tabung Reaksi'],
    summary: 'Skrining fitokimia kualitatif tabung reaksi digunakan untuk mendeteksi golongan metabolit sekunder dalam ekstrak tanaman obat secara cepat dan akurat.',
    keyPearls: [
      'Uji Golongan Alkaloid (Ekstrak dilarutkan dalam HCl encer):',
      '- Pereaksi Mayer (Kalium Tetraiodomerkurat): Menghasilkan **endapan putih kekuningan**.',
      '- Pereaksi Dragendorff (Kalium Bismut Iodida): Menghasilkan **endapan jingga kemerahan / merah bata**.',
      '- Pereaksi Wagner (Iodium dalam Kalium Iodida): Menghasilkan **endapan coklat tua / hitam**.',
      'Uji Golongan Flavonoid (Uji Shinoda): Ekstrak ditambah serbuk logam Magnesium (Mg) dan beberapa tetes HCl pekat; menghasilkan larutan berwarna **merah jingga, merah tua, atau magenta**.',
      'Uji Golongan Tanin: Ekstrak ditambah larutan Besi(III) Klorida (FeCl3 1%):',
      '- Tanin Terhidrolisis (pirogallol): Menghasilkan warna **biru kehitaman**.',
      '- Tanin Terkondensasi (katekol): Menghasilkan warna **hijau kehitaman**.',
      '- Uji Gelatin: Ditambah larutan gelatin 1% menghasilkan **endapan putih**.',
      'Uji Golongan Saponin (Uji Busa Forth): Ekstrak dikocok kuat secara vertikal dalam tabung reaksi dengan air suling selama 10 detik; dinyatakan positif jika timbul **busa stabil setinggi minimal 1 cm yang bertahan sekurang-kurangnya selama 10 menit** dan tidak hilang dengan penambahan 1 tetes HCl 2 N.',
      'Uji Golongan Antrakuinon (Uji Borntrager): Ekstrak diekstraksi dengan benzena/eter, dipisahkan lalu ditambah larutan amonia encer/KOH; lapisan fase basa akan berwarna **merah muda cerah**.'
    ],
    frequentExamPitfalls: [
      'Terbalik warna endapan alkaloid: Mayer menghasilkan endapan putih, Dragendorff menghasilkan endapan jingga merah bata.',
      'Lupa syarat uji busa saponin: busa harus bertahan minimal 10 menit dan stabil terhadap penambahan asam.'
    ],
    referenceStandard: 'Metode Fitokimia (Harborne) & Panduan Praktikum Fitokimia Farmasi Bahan Alam.'
  },
  {
    id: 'top-vokasi-standarisasi-simplisia',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    title: 'Parameter Standarisasi Simplisia & Ekstrak Herbal Farmakope Herbal Indonesia (FHI)',
    category: 'Standardisasi Obat Tradisional',
    tags: ['FHI', 'Kadar Air', 'Susut Pengeringan', 'Kadar Abu', 'Cemaran'],
    summary: 'Standardisasi menjamin mutu, keamanan, dan reprodusibilitas khasiat simplisia serta ekstrak herbal melalui pemenuhan parameter spesifik dan non-spesifik.',
    keyPearls: [
      'Parameter Non-Spesifik (Menilai aspek keamanan dan kebersihan):',
      '- Susut Pengeringan (Loss on Drying): Mengukur seluruh zat yang menguap (air + minyak atsiri) pada pemanasan 105°C hingga bobot konstan. Persyaratan umum: **< 10%**.',
      '- Kadar Air: Ditetapkan secara titrasi Karl Fischer atau destilasi toluena. Batas maksimal kadar air simplisia adalah **< 10%** (mencegah pertumbuhan jamur dan aktivitas enzim hidrolitik perusak zat aktif).',
      '- Kadar Abu Total: Menentukan jumlah material anorganik internal dan eksternal simplisia setelah pengabuan 500-600°C.',
      '- Kadar Abu Tidak Larut Asam: Menentukan kontaminasi mineral anorganik luar (pasir, silikat, tanah). Nilai ideal serendah mungkin (< 1-2%).',
      '- Cemaran Logam Berat (Pb, Cd, As, Hg) dan Cemaran Pestisida.',
      '- Cemaran Mikroba: Angka Lempeng Total (ALT), Angka Kapang Khamir (AKK), dan wajib NEGATIF bakteri patogen (*E. coli, Salmonella*).',
      'Parameter Spesifik (Menilai identitas dan kandungan kimia aktif):',
      '- Kadar Sari Larut Air dan Kadar Sari Larut Etanol: Mengukur perkiraan jumlah senyawa aktif larut air vs larut alkohol.',
      '- Penetapan Kadar Senyawa Marker Aktif: Contohnya kadar kurkuminoid total pada ekstrak rimpang temulawak.'
    ],
    frequentExamPitfalls: [
      'Menyamakan kadar air dengan susut pengeringan: Susut pengeringan mencakup air dan zat volatil minyak atsiri; Kadar air murni hanya mengukur air.',
      'Sering ditanyakan batas kadar air simplisia: tidak boleh lebih dari 10%.'
    ],
    referenceStandard: 'Farmakope Herbal Indonesia (FHI) Edisi II & Pedoman Standardisasi Bahan Obat Alam BPOM.'
  },
  {
    id: 'top-vokasi-kategori-obat-alam',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    title: 'Kategori Obat Bahan Alam Indonesia: Jamu, OHT & Fitofarmaka',
    category: 'Regulasi Obat Bahan Alam',
    tags: ['Jamu', 'OHT', 'Fitofarmaka', 'Uji Praklinik', 'Uji Klinik', 'Logo BPOM'],
    summary: 'Badan Pengawas Obat dan Makanan (BPOM) mengklasifikasikan obat bahan alam Indonesia ke dalam 3 hierarki berdasarkan tingkat pembuktian ilmiah khasiat dan keamanannya.',
    keyPearls: [
      '1. Jamu:',
      '- Bukti Khasiat & Keamanan: Dibuktikan berdasarkan **data empiris turun-temurun** (pengalaman tradisional sekurang-kurangnya 3 generasi).',
      '- Logo Resmi: Simbol **Ranting Daun Hijau** di dalam lingkaran bergaris tepi warna hijau dengan latar belakang putih atau kuning.',
      '2. Obat Herbal Terstandar (OHT):',
      '- Bukti Khasiat & Keamanan: Telah dibuktikan secara ilmiah melalui **Uji Pra-Klinik (pada hewan uji laboratorium)** meliputi uji farmakodinamika dan uji toksisitas, serta bahan bakunya telah distandarisasi.',
      '- Logo Resmi: Simbol **Tiga Buah Jari-Jari Bintang Hijau** di dalam lingkaran bergaris tepi hijau (Contoh produk: Diapet, Tolak Angin, Kiranti, Fitolac).',
      '3. Fitofarmaka:',
      '- Bukti Khasiat & Keamanan: Merupakan kasta tertinggi obat herbal; telah dibuktikan khasiat dan keamanannya secara ilmiah melalui **Uji Klinik (pada manusia sukarelawan/pasien)** serta sediaan dan bahan bakunya terstandarisasi ketat.',
      '- Logo Resmi: Simbol **Jari-Jari Kristal Salju / Es Hijau** di dalam lingkaran bergaris tepi hijau (Contoh produk: Stimuno, Tensigard, Nodiar, Inbumin, X-Gra).',
      'Klaim Khasiat: Jamu menggunakan klaim tradisional "secara tradisional digunakan untuk..."; OHT dan Fitofarmaka dapat mencantumkan klaim indikasi medis ilmiah sesuai uji yang dilakukan.'
    ],
    frequentExamPitfalls: [
      'Tertukar tingkat pengujian: OHT = Uji Praklinik (hewan); Fitofarmaka = Uji Klinik (manusia).',
      'Tertukar simbol logo: OHT = 3 bintang; Fitofarmaka = kristal salju.'
    ],
    referenceStandard: 'Peraturan BPOM No. 25 Tahun 2021 tentang Penerbitan Izin Edar Obat Bahan Alam.'
  },
  {
    id: 'top-vokasi-bko-jamu',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    title: 'Regulasi Larangan Bahan Kimia Obat (BKO) Berbahaya dalam Obat Tradisional',
    category: 'Keamanan Obat Bahan Alam & Regulasi',
    tags: ['BKO', 'Jamu Pegal Linu', 'Deksametason', 'Sildenafil', 'Toksisitas'],
    summary: 'Penambahan Bahan Kimia Obat (BKO) sintetis ke dalam sediaan obat tradisional dilarang keras oleh undang-undang karena menimbulkan risiko toksisitas organ dan kematian mendadak.',
    keyPearls: [
      'Larangan Mutlak: Berdasarkan UU Kesehatan dan peraturan BPOM, obat tradisional dan jamu DILARANG KERAS mengandung bahan kimia obat sintetis atau bahan isolasi murni.',
      'Temuan BKO yang Paling Sering Diuji di Soal UKTVF:',
      '- Jamu Pegal Linu / Rematik / Asam Urat: Sering dicemari **Deksametason, Prednison, Fenilbutazon, Natrium Diklofenak, Parasetamol**. Bahaya: perdarahan tukak lambung akut, perforasi usus, sindrom Cushing (moon face, osteoporosis), dan retensi cairan berat.',
      '- Jamu Stamina Pria / Kuat: Sering dicemari **Sildenafil Sitrat, Tadalafil**. Bahaya: memicu hipotensi drastis mendadak, infark miokard henti jantung, dan stroke terutama jika digunakan bersama obat golongan nitrat.',
      '- Jamu Pelangsing Tubuh: Sering dicemari **Sibutramin HCl**. Bahaya: meningkatkan denyut jantung takikardia, hipertensi berat, stroke iskemia.',
      '- Jamu Kencing Manis / Diabetes: Sering dicemari **Glibenklamid**. Bahaya: memicu syok hipoglikemia berat mendadak hingga koma.',
      'Sanksi Hukum: Produsen dan pengedar jamu mengandung BKO dapat dikenakan pidana penjara hingga 10 tahun dan denda miliaran rupiah, serta penarikan seluruh produk dari peredaran (*public warning* BPOM).'
    ],
    frequentExamPitfalls: [
      'Mengira penambahan BKO dalam dosis kecil diperbolehkan (larangan BKO bersifat mutlak 0% / zero tolerance).',
      'Gejala moon face pada peminum jamu pegal linu adalah akibat pencemaran Deksametason (kortikosteroid).'
    ],
    referenceStandard: 'Peraturan BPOM No. 10 Tahun 2022 tentang Pedoman Penarikan Obat Tradisional yang Mengandung BKO.'
  },
  {
    id: 'top-vokasi-pembuatan-simplisia',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    title: 'Tahapan Pasca Panen Pembuatan Simplisia Nabati Bermutu',
    category: 'Farmakognosi & Pascapanen',
    tags: ['Simplisia', 'Sortasi Basah', 'Pencucian', 'Perajangan', 'Pengeringan', 'Sortasi Kering'],
    summary: 'Mutu ekstrak dan sediaan herbal sangat ditentukan oleh kepatuhan terhadap tahapan penanganan pascapanen simplisia nabati.',
    keyPearls: [
      'Tahap 1: Pengumpulan Bahan Baku (Pemanenan pada waktu yang tepat: daun dipanen saat fotosintesis maksimal sebelum berbunga; bunga dipanen saat mekar sempurna; rimpang dipanen saat tanaman layu di akhir masa vegetatif).',
      'Tahap 2: Sortasi Basah (Memisahkan kotoran fisik nyata, kerikil, tanah, gulma, serangga, dan bagian tanaman yang busuk atau berjamur SEBELUM pencucian).',
      'Tahap 3: Pencucian (Menggunakan air bersih mengalir; tidak boleh direndam lama agar senyawa aktif larut air tidak hilang terlindi).',
      'Tahap 4: Perajangan (Memotong bahan menjadi potongan lebih tipis untuk memperluas area permukaan kontak pengeringan).',
      'Tahap 5: Pengeringan (Tujuan utama: menurunkan kadar air hingga < 10% agar menghentikan reaksi enzimatik autolisis dan mencegah pertumbuhan mikroba/kapang):',
      '- Simplisia Minyak Atsiri & Termolabil: Dikeringkan dengan cara diangin-anginkan terlindung dari sinar matahari langsung.',
      '- Simplisia Tahan Panas (akar, kayu, biji): Dapat dikeringkan menggunakan oven bersuhu 40°C - 50°C.',
      'Tahap 6: Sortasi Kering (Memisahkan benda asing, bagian yang gosong, atau simplisia yang belum kering sempurna setelah proses pengeringan).',
      'Tahap 7: Pengepakan & Penyimpanan (Wadah bersih tertutup rapat, dilengkapi silika gel, disimpan di tempat sejuk, kering, berventilasi baik, dan terlindung dari serangga pengerat).'
    ],
    frequentExamPitfalls: [
      'Terbalik urutan antara sortasi basah dan pencucian (sortasi basah dilakukan SEBELUM pencucian).',
      'Mengeringkan simplisia rimpang beraroma minyak atsiri di bawah sinar matahari langsung yang terik (minyak atsiri akan menguap dan rusak).'
    ],
    referenceStandard: 'Buku Pedoman Pascapanen Tanaman Obat Kemenkes RI & Materi Praktikum Farmakognosi APDFI.'
  },
  {
    id: 'top-vokasi-tanaman-obat-unggulan',
    domainId: 'bahan_alam',
    targetExam: 'uktvk',
    title: 'Tanaman Obat Unggulan Indonesia & Senyawa Marker Khasiat Farmakologis',
    category: 'Farmakognosi & Fitoterapi',
    tags: ['Temulawak', 'Sambiloto', 'Meniran', 'Seledri', 'Marker Aktif'],
    summary: 'Indonesia memiliki ragam tanaman obat unggulan yang telah teruji klinis dan saintifikasi jamu. TTK wajib mengenal nama latin tanaman, familia, senyawa marker, dan indikasinya.',
    keyPearls: [
      'Temulawak (*Curcuma xanthorrhiza*, Familia Zingiberaceae): Senyawa marker: **Kurkuminoid** dan **Xanthorrhizol**. Khasiat: hepatoprotektor (melindungi sel hati), penambah nafsu makan (*stomachic*), antiinflamasi, dan kolagoga (melancarkan cairan empedu).',
      'Meniran (*Phyllanthus niruri*, Familia Phyllanthaceae): Senyawa marker: **Filantin** dan **Hipofilantin**. Khasiat: imunomodulator (meningkatkan sistem imun dengan memodulasi aktivitas makrofag dan limfosit T; contoh sediaan: Stimuno).',
      'Sambiloto (*Andrographis paniculata*, Familia Acanthaceae): Senyawa marker: **Andrografolida** (memberi rasa sangat pahit). Khasiat: antidiabetes hipoglikemik, antiinflamasi, antipiretik, dan antivirus.',
      'Seledri (*Apium graveolens*, Familia Apiaceae): Senyawa marker: **Apigenin**. Khasiat: antihipertensi (vasodilatasi pembuluh darah perifer melalui penghambatan kanal kalsium) dan diuretik (contoh sediaan: Tensigard).',
      'Kumis Kucing (*Orthosiphon stamineus*, Familia Lamiaceae): Senyawa marker: **Sinensetin**. Khasiat: diuretik peluruh air seni, melarutkan batu ginjal kalsium oksalat, dan antibakteri saluran kemih.',
      'Daun Jambu Biji (*Psidium guajava*, Familia Myrtaceae): Senyawa marker: **Kuersitrin / Tanin**. Khasiat: antidiare adstringensia (menciutkan pori mukosa usus) dan menaikkan trombosit pada DBD.'
    ],
    frequentExamPitfalls: [
      'Tertukar senyawa marker Meniran vs Temulawak (Meniran = Filantin; Temulawak = Kurkuminoid/Xanthorrhizol).',
      'Tertukar tanaman antihipertensi vs imunomodulator (Seledri = Apigenin antihipertensi; Meniran = Filantin imunomodulator).'
    ],
    referenceStandard: 'Formularium Obat Herbal Asli Indonesia (FOHAI) Kemenkes RI & Buku Tanaman Obat Indonesia.'
  }
];
