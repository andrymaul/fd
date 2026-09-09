import { ExamQuestion } from '../competencyExamData';

/**
 * Bank Soal Kasus Vignette CBT Bagian 14 (Nomor q-594 s/d q-653)
 * Cetak Biru Resmi UKOMNAS 2026: UKMPPAI (Apoteker) & UKTVF/UKTVK (Vokasi TTK)
 * Fokus: Teknologi Farmasi CPOB 2024, Formulasi Steril/Aerosol/Nanoteknologi, Uji Disolusi Terbanding f2/Biowaiver, serta Standardisasi Bahan Alam & Deteksi BKO
 * Total: 60 Butir Soal Kasus Nyata Terstandar
 */
export const CBT_EXPANSION_PART_14: ExamQuestion[] = [
  // =========================================================================
  // 🏭 CPOB SEDIAAN STERIL, STERILISASI AKHIR & CLEANROOM (q-594 s/d q-613)
  // =========================================================================
  {
    id: 'q-594',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Dalam proses sterilisasi akhir (terminal sterilization) sediaan injeksi infus Ringer Laktat menggunakan autoklaf uap air panas bertekanan, apoteker supervisor produksi menghitung nilai letalitas ekuivalen termal F0 pada suhu 121,1°C.',
    question: 'Berapakah nilai F0 minimal yang disyaratkan dalam Farmakope Indonesia dan Pedoman CPOB untuk menjamin bahwa seluruh spora bakteri resisten telah dimusnahkan hingga tingkat jaminan sterilitas (Sterility Assurance Level / SAL) <= 10^-6?',
    options: [
      { key: 'A', text: 'Minimal F0 = 8 menit (idealnya 12-15 menit untuk overkill cycle)' },
      { key: 'B', text: 'F0 = 1 menit' },
      { key: 'C', text: 'F0 = 60 menit' },
      { key: 'D', text: 'F0 = 120 menit' },
      { key: 'E', text: 'F0 = 0,5 menit' }
    ],
    correctAnswer: 'A',
    explanation: 'Nilai F0 adalah jumlah waktu (dalam menit) pemaparan panas pada suhu referensi 121,1°C (250°F) yang setara dengan efektivitas letalitas siklus sterilisasi yang berlangsung (dengan nilai z mikroba referensi Geobacillus stearothermophilus = 10°C). Sesuai Farmakope Indonesia VI dan CPOB: Nilai F0 minimal untuk proses sterilisasi basah adalah 8 MENIT (siklus probabilitas non-steril standar), sedangkan untuk metode Overkill Approach disyaratkan F0 >= 12 HINGGA 15 MENIT untuk menjamin SAL <= 10^-6.',
    clinicalReference: 'Farmakope Indonesia Edisi VI Lampiran Sterilisasi & CPOB BPOM RI 2024',
    difficulty: 'Sedang'
  },
  {
    id: 'q-595',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Apoteker di bagian validasi sterilisasi mengevaluasi resistensi panas mikroba indikator biologi Geobacillus stearothermophilus. Nilai D-value (Desimal Reduction Time) pada 121°C tercatat 1,5 menit.',
    question: 'Apakah definisi ilmiah dari nilai D-value tersebut?',
    options: [
      { key: 'A', text: 'Waktu pemanasan yang dibutuhkan pada suhu konstan 121°C untuk mereduksi populasi mikroorganisme sebesar 90% (atau penurunan 1 siklus logaritma)' },
      { key: 'B', text: 'Waktu untuk mematikan seluruh spora bakteri seketika' },
      { key: 'C', text: 'Kenaikan suhu yang dibutuhkan untuk menurunkan nilai D sebesar 90%' },
      { key: 'D', text: 'Waktu yang dibutuhkan autoklaf untuk mencapai tekanan 1 atm' },
      { key: 'E', text: 'Kadar endotoksin bakteri dalam sediaan' }
    ],
    correctAnswer: 'A',
    explanation: 'Nilai D (Decimal Reduction Time) adalah waktu dalam menit pada suhu konstan tertentu yang diperlukan untuk membunuh atau mereduksi populasi mikroba sebesar 90% (atau penurunan 1 log cycle / reduksi 1 desimal dari populasi awal). Nilai Z adalah perubahan suhu (°C) yang diperlukan untuk menyebabkan perubahan nilai D sebesar 10 kali lipat (1 siklus log).',
    clinicalReference: 'Farmakope Indonesia VI Lampiran Indikator Biologi & USP <1229> Sterilization of Compendial Articles',
    difficulty: 'Sedang'
  },
  {
    id: 'q-596',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Industri farmasi melakukan Simulasi Proses Aseptis (Aseptic Process Simulation / Media Fill Test) di ruang Kelas A/B untuk memvalidasi jalur pengisian vial cairan injeksi steril antibiotik termolabil.',
    question: 'Medium pertumbuhan mikroba cair manakah yang menjadi standar baku internasional untuk digunakan pada uji Media Fill?',
    options: [
      { key: 'A', text: 'Soybean-Casein Digest Medium (SCDM) / Tryptic Soy Broth (TSB)' },
      { key: 'B', text: 'Nutrient Agar padat' },
      { key: 'C', text: 'MacConkey Broth' },
      { key: 'D', text: 'Sabouraud Dextrose Agar' },
      { key: 'E', text: 'Air suling murni steril' }
    ],
    correctAnswer: 'A',
    explanation: 'Soybean-Casein Digest Medium (SCDM / TSB) adalah medium cair steril baku yang dipersyaratkan oleh CPOB dan PIC/S untuk validasi proses aseptis (Media Fill). Medium ini mampu mendukung pertumbuhan spektrum luas mikroorganisme aerob, kapang, dan khamir.',
    clinicalReference: 'Pedoman CPOB 2024 Aneks 1 Pembuatan Produk Steril & PIC/S GMP Guide',
    difficulty: 'Mudah'
  },
  {
    id: 'q-597',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Dalam uji Media Fill pengisian aseptis sebanyak 5.000 unit vial, dilakukan inkubasi pada suhu 20-25°C selama 7 hari diikuti suhu 30-35°C selama 7 hari berikutnya.',
    question: 'Berdasarkan Pedoman CPOB 2024 / PIC/S Aneks 1 terkini, berapakah kriteria batas penerimaan (acceptance criteria) kontaminasi mikroba yang diperbolehkan untuk batch 5.000 unit tersebut?',
    options: [
      { key: 'A', text: 'TIDAK BOLEH ADA SATU PUN UNIT YANG TERCEMAR (NOL unit terkontaminasi)' },
      { key: 'B', text: 'Maksimal 1 unit terkontaminasi' },
      { key: 'C', text: 'Maksimal 3 unit terkontaminasi' },
      { key: 'D', text: 'Maksimal 5 unit terkontaminasi' },
      { key: 'E', text: 'Toleransi kontaminasi 1% dari total batch' }
    ],
    correctAnswer: 'A',
    explanation: 'Sesuai Pedoman CPOB 2024 dan PIC/S Aneks 1 revisi terbaru tentang Pembuatan Produk Steril: Target untuk seluruh proses simulasi aseptis (Media Fill) adalah NOL KONTAMINASI (zero contamination). Untuk batch pengisian hingga 5.000 unit, kegagalan tidak boleh ditemukan sama sekali (0 unit terkontaminasi). Ditemukannya bahkan 1 unit yang terkontaminasi mewajibkan investigasi komprehensif terhadap akar masalah dan pengulangan simulasi media fill.',
    clinicalReference: 'Petunjuk Operasional Penerapan CPOB 2024 Aneks 1 (Produk Steril) & PIC/S PE 009-17',
    difficulty: 'Sedang'
  },
  {
    id: 'q-598',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Sistem tata udara (HVAC) di ruang bersih pengisian aseptis Kelas A (Laminar Air Flow / LAF workstation) dirancang untuk memberikan perlindungan aliran udara laminer searah (unidirectional airflow) di atas zona kritis wadah terbuka.',
    question: 'Berapakah kecepatan aliran udara laminer yang dipersyaratkan pada ketinggian kerja di ruang bersih Kelas A sesuai CPOB?',
    options: [
      { key: 'A', text: '0,36 hingga 0,54 m/s (rata-rata 0,45 m/s ± 20%)' },
      { key: 'B', text: '0,10 m/s' },
      { key: 'C', text: '1,50 m/s' },
      { key: 'D', text: '5,00 m/s' },
      { key: 'E', text: '0,01 m/s' }
    ],
    correctAnswer: 'A',
    explanation: 'Sistem aliran udara laminer (unidirectional) pada ruang Kelas A harus mempertahankan kecepatan udara homogen berkisar antara 0,36 hingga 0,54 m/detik (nilai acuan 0,45 m/detik +/- 20%) pada posisi ketinggian kerja untuk menyapu partikel debu dan mikroba menjauhi zona kritis produk terbuka.',
    clinicalReference: 'Pedoman CPOB 2024 Aneks 1 & ISO 14644-3 Cleanrooms and associated controlled environments',
    difficulty: 'Mudah'
  },
  {
    id: 'q-599',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Apoteker di bagian teknik HVAC menguji integritas dan kebocoran filter HEPA (High Efficiency Particulate Air) H14 sebelum ruang bersih dioperasikan.',
    question: 'Senyawa aerosol uji apakah yang disemprotkan di sisi hulu (upstream) filter untuk mengukur penetrasi kebocoran menggunakan fotometer aerosol (PAO/DOP test)?',
    options: [
      { key: 'A', text: 'Poly-Alpha-Olefin (PAO) atau Dioctyl Phthalate (DOP)' },
      { key: 'B', text: 'Natrium Klorida jenuh' },
      { key: 'C', text: 'Etanol 96%' },
      { key: 'D', text: 'Karbondioksida cair' },
      { key: 'E', text: 'Aerosil silika' }
    ],
    correctAnswer: 'A',
    explanation: 'Uji Integritas Filter HEPA (In-situ HEPA Filter Integrity Testing) menggunakan aerosol cair terkendali POLY-ALPHA-OLEFIN (PAO) yang tidak beracun (sebelumnya digunakan DOP / Dioctyl Phthalate). Partikel aerosol PAO berukuran sekitar 0,3 um dialirkan di hulu filter, dan sisi hilir dipindai dengan probe fotometer; kebocoran lokal tidak boleh melebihi 0,01%.',
    clinicalReference: 'ISO 14644-3 Cleanroom Test Methods & CPOB BPOM',
    difficulty: 'Sedang'
  },
  {
    id: 'q-600',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Di antara ruang produksi sediaan steril koridor bersih dan ruang pengolahan steril Kelas B terdapat ruang penyangga udara (Airlock). Desain airlock dibuat dengan tekanan udara di dalam airlock LEBIH TINGGI daripada kedua ruangan di sisi luar dan dalamnya.',
    question: 'Tipe pola kaskade ruang penyangga udara (Airlock) apakah yang dimaksud?',
    options: [
      { key: 'A', text: 'Bubble Airlock' },
      { key: 'B', text: 'Sink Airlock' },
      { key: 'C', text: 'Cascade Airlock' },
      { key: 'D', text: 'Dynamic Airlock' },
      { key: 'E', text: 'Negative Airlock' }
    ],
    correctAnswer: 'A',
    explanation: 'Tiga tipe dasar ruang penyangga udara (airlock) dalam CPOB: 1) BUBBLE AIRLOCK: Tekanan di dalam airlock lebih tinggi daripada kedua ruangan yang dihubungkan (+ / ++ / +), menciptakan barier udara keluar dari airlock ke dua arah; 2) SINK AIRLOCK: Tekanan di dalam airlock lebih rendah daripada kedua ruangan (- / -- / -), menarik udara dari kedua sisi masuk ke airlock; 3) CASCADE AIRLOCK: Tekanan udara bertingkat berurutan dari tinggi ke rendah (+++ / ++ / +).',
    clinicalReference: 'WHO Technical Report Series No. 961 Annex 5: HVAC systems for pharmaceutical products & CPOB',
    difficulty: 'Sedang'
  },
  {
    id: 'q-601',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Dalam validasi pembersihan (Cleaning Validation) peralatan mesin kompresi tablet pasca-produksi Parasetamol sebelum digunakan untuk memproduksi Amlodipin, apoteker menghitung batas residu terbawa maksimum (Maximum Allowable Carryover / MACO).',
    question: 'Berapakah kriteria batas konsentrasi residu zat aktif umum (General Limit) dalam produk berikutnya yang disepakati secara internasional bila menggunakan kriteria ppm?',
    options: [
      { key: 'A', text: 'Maksimal tidak lebih dari 10 ppm (10 mg/kg)' },
      { key: 'B', text: 'Maksimal 1000 ppm' },
      { key: 'C', text: 'Maksimal 0,01 ppm' },
      { key: 'D', text: 'Maksimal 500 ppm' },
      { key: 'E', text: 'Harus 0 ppm absolut tanpa batas deteksi' }
    ],
    correctAnswer: 'A',
    explanation: 'Sesuai panduan validasi pembersihan PIC/S dan FDA, kriteria batas penerimaan residu zat aktif sebelumnya (MACO) diambil dari nilai yang paling ketat di antara 3 kriteria: 1) Kriteria Dosis: Tidak lebih dari 1/1000 dari dosis terapi harian minimum obat sebelumnya; 2) Kriteria 10 ppm: Tidak lebih dari 10 mg residu zat aktif dalam 1 kg produk berikutnya (10 ppm); 3) Kriteria Visually Clean: Bebas dari residu visual yang terlihat dengan mata telanjang.',
    clinicalReference: 'PIC/S Guidance on Cleaning Validation & EMA Guideline on setting health based exposure limits',
    difficulty: 'Mudah'
  },
  {
    id: 'q-602',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Apoteker QC melakukan pengambilan sampel residu validasi pembersihan pada bagian permukaan mesin stainless steel pencampur granul yang sulit dijangkau (worst-case sampling location).',
    question: 'Metode sampling manakah yang memiliki tingkat perolehan kembali (recovery rate) mekanik tertinggi untuk mendeteksi residu yang menempel kuat?',
    options: [
      { key: 'A', text: 'Metode Usap (Swab Sampling)' },
      { key: 'B', text: 'Metode Bilasan Akhir (Rinse Sampling)' },
      { key: 'C', text: 'Metode penguapan vakum' },
      { key: 'D', text: 'Metode foto visual' },
      { key: 'E', text: 'Metode cawan papar' }
    ],
    correctAnswer: 'A',
    explanation: 'METODE USAP (Swab Sampling) adalah metode pengambilan sampel langsung yang paling direkomendasikan karena memberikan gaya gesek mekanis untuk mengangkat residu yang tidak larut atau menempel kuat pada permukaan alat. Metode bilasan (rinse) hanya digunakan untuk area pipa tertutup atau bagian rumit yang tidak dapat dijangkau oleh swab.',
    clinicalReference: 'FDA Guide to Inspections of Validation of Cleaning Processes & CPOB BPOM',
    difficulty: 'Mudah'
  },
  {
    id: 'q-603',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Dalam proses pengolahan air murni untuk farmasi (Purified Water), air baku dilewatkan melalui membran semipermeabel bertekanan tinggi untuk memisahkan 99% mineral anorganik terlarut, pirogen, dan mikroorganisme.',
    question: 'Unit operasi teknologi pengolahan air farmasi apakah yang dimaksud?',
    options: [
      { key: 'A', text: 'Reverse Osmosis (Osmosis Terbalik)' },
      { key: 'B', text: 'Deionisasi resin penukar ion konvensional' },
      { key: 'C', text: 'Penyaringan pasir silika' },
      { key: 'D', text: 'Klorinasi' },
      { key: 'E', text: 'Aerasi terbuka' }
    ],
    correctAnswer: 'A',
    explanation: 'REVERSE OSMOSIS (RO) adalah proses pemisahan membran bertekanan hidrostatik tinggi yang melampaui tekanan osmotik alami air, memaksa molekul air murni menembus pori membran semipermeabel (ukuran pori < 0,001 um) sekaligus menolak 95-99% ion garam terlarut, partikel koloid, mikroorganisme, dan pirogen endotoksin.',
    clinicalReference: 'Farmakope Indonesia Edisi VI Lampiran Air untuk Farmasi & WHO TRS 970 Annex 2',
    difficulty: 'Mudah'
  },
  {
    id: 'q-604',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Air Untuk Injeksi (Water for Injection / WFI) diproduksi di industri farmasi sediaan steril. Farmakope Indonesia VI dan European Pharmacopoeia memperbolehkan produksi WFI menggunakan metode non-distilasi tertentu.',
    question: 'Kombinasi teknologi membran apakah yang diizinkan untuk menghasilkan Water for Injection selain metode Distilasi konvensional?',
    options: [
      { key: 'A', text: 'Double-Pass Reverse Osmosis yang digabungkan dengan Electro-Deionization (EDI) dan Ultrafiltrasi' },
      { key: 'B', text: 'Filter kertas saring biasa' },
      { key: 'C', text: 'Perebusan air mendidih sederhana' },
      { key: 'D', text: 'Sedimentasi gravitasi' },
      { key: 'E', text: 'Penambahan disinfektan fenol' }
    ],
    correctAnswer: 'A',
    explanation: 'Farmakope Indonesia Edisi VI dan monografi resmi Ph. Eur telah mengesahkan produksi Water for Injection (WFI) menggunakan metode pemurnian setara distilasi, yaitu kombinasi DOUBLE-PASS REVERSE OSMOSIS (RO 2 tahap) yang digabungkan dengan Continuous Electro-Deionization (CEDI) dan POLISHING ULTRAFILTRASI (membran endotoksin cutoff 6.000 Dalton) untuk menjamin konduktivitas <= 1,1 uS/cm (20°C) dan kadar endotoksin < 0,25 EU/mL.',
    clinicalReference: 'Farmakope Indonesia VI Monografi Air untuk Injeksi & Ph. Eur. Monograph Water for Injections',
    difficulty: 'Sedang'
  },
  {
    id: 'q-605',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Dalam sistem penyimpanan dan distribusi Water for Injection (WFI Loop System), air disirkulasikan secara terus menerus melalui sistem perpipaan stainless steel 316L.',
    question: 'Berapakah suhu sirkulasi panas kontinu yang disyaratkan CPOB untuk mencegah pembentukan biofilm mikroba di dalam pipa distribusi WFI?',
    options: [
      { key: 'A', text: 'Disirkulasikan pada suhu panas konstan tidak kurang dari 70°C hingga 80°C (Hot WFI Loop)' },
      { key: 'B', text: 'Suhu kamar 25°C' },
      { key: 'C', text: 'Suhu dingin kulkas 4°C' },
      { key: 'D', text: 'Suhu 40°C hangat kuku' },
      { key: 'E', text: 'Sirkulasi dimatikan saat malam hari' }
    ],
    correctAnswer: 'A',
    explanation: 'Sesuai Pedoman CPOB dan WHO: Sistem loop distribusi Water for Injection (WFI) yang disimpan dalam kondisi panas harus disirkulasikan secara kontinu pada SUHU MINIMAL 70°C SAMPAI 80°C. Sirkulasi panas kontinu ini bertindak sebagai mekanisme sanitasi termal alami (self-sanitizing) yang efektif mencegah adhesi dan pembentukan biofilm mikroorganisme pada dinding bagian dalam pipa sanitari.',
    clinicalReference: 'WHO Technical Report Series No. 970 Annex 2: Water for pharmaceutical use & CPOB BPOM',
    difficulty: 'Mudah'
  },
  // =========================================================================
  // 🔬 FORMULASI KHUSUS: AEROSOL, NANOTEKNOLOGI & PELEPASAN DIMODIFIKASI (q-606 s/d q-620)
  // =========================================================================
  {
    id: 'q-606',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Industri farmasi memformulasi sediaan inhalasi aerosol terukur bertekanan (pressurized Metered Dose Inhaler / pMDI) yang bebas gas Klorofluorokarbon (CFC) perusak lapisan ozon.',
    question: 'Zat propelan hidrofluoroalkana (HFA) ramah ozon apakah yang menjadi standar baku pengganti CFC pada sediaan inhaler modern?',
    options: [
      { key: 'A', text: 'HFA-134a (1,1,1,2-tetrafluoroetana) atau HFA-227 (heptafluoropropana)' },
      { key: 'B', text: 'Gas Karbon Monoksida' },
      { key: 'C', text: 'Gas Butana cair' },
      { key: 'D', text: 'Gas Nitrogen dioksida' },
      { key: 'E', text: 'Freon-11' }
    ],
    correctAnswer: 'A',
    explanation: 'Sesuai Protokol Montreal dan regulasi internasional, penggunaan propelan CFC (CFC-11, CFC-12, CFC-114) telah dihapus total karena merusak lapisan ozon stratosfer bumi. Penggantinya yang telah divalidasi aman secara klinis dan ramah lingkungan adalah gas HIDROFLUOROALKANA: HFA-134a (norflurane) dan HFA-227 (apaflurane).',
    clinicalReference: 'Montreal Protocol on Substances that Deplete the Ozone Layer & Remington’s Pharmaceutical Sciences',
    difficulty: 'Mudah'
  },
  {
    id: 'q-607',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Dalam formulasi serbuk inhalasi kering (Dry Powder Inhaler / DPI) Salmeterol dan Flutikason, serbuk zat aktif mikronat (aerodynamic diameter 1-5 um) dicampurkan dengan partikel pembawa (carrier) berukuran jauh lebih besar (50-100 um).',
    question: 'Eksipien pembawa (carrier) kristal kasar apakah yang paling umum digunakan pada formulasi sediaan inhalasi DPI?',
    options: [
      { key: 'A', text: 'Alfa-Laktosa Monohidrat' },
      { key: 'B', text: 'Magnesium Stearat murni' },
      { key: 'C', text: 'Kalsium Karbonat' },
      { key: 'D', text: 'PVP K-30' },
      { key: 'E', text: 'Talk' }
    ],
    correctAnswer: 'A',
    explanation: 'ALFA-LAKTOSA MONOHIDRAT kristal kasar (fraksi ukuran 50-100 um) adalah pembawa (carrier) standar pada formulasi DPI. Partikel zat aktif mikronat menempel secara adhesi lemah pada permukaan kristal laktosa selama pengisian ke dalam kapsul/blister (meningkatkan fluiditas serbuk di hopper). Saat pasien menarik napas kuat melalui inhaler, gaya turbulensi udara mendesolvasi/memisahkan partikel obat halus (yang terbang masuk ke percabangan bronkus paru) dari partikel laktosa kasar (yang tertahan di orofaring).',
    clinicalReference: 'Modern Pharmaceutics & Aerosols in Medicine: Principles, Devices and Practice',
    difficulty: 'Sedang'
  },
  {
    id: 'q-608',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Berapakah rentang Mass Median Aerodynamic Diameter (MMAD) partikel obat aerosol yang ideal agar dapat mencapai dan terdeposisi secara optimal pada percabangan bronkiolus terminal dan alveoli paru-paru bagian dalam?',
    question: 'Rentang ukuran partikel aerodinamis target tersebut adalah:',
    options: [
      { key: 'A', text: '1 hingga 5 mikrometer (μm)' },
      { key: 'B', text: '10 hingga 30 mikrometer (μm)' },
      { key: 'C', text: '50 hingga 100 mikrometer (μm)' },
      { key: 'D', text: 'Kurang dari 0,1 nanometer' },
      { key: 'E', text: 'Diatas 200 mikrometer (μm)' }
    ],
    correctAnswer: 'A',
    explanation: 'Deposisi partikel inhalasi di saluran napas: Partikel berukuran > 5-10 um akan tertahan di mulut dan orofaring akibat benturan inersial (inertial impaction). Partikel berukuran < 0,5 - 1 um tidak mengendap dan terhembus keluar kembali saat ekspirasi. Rentang ukuran optimum untuk deposisi di percabangan bronkus kecil dan alveoli paru adalah 1 HINGGA 5 MIKROMETER (respirable fraction / Fine Particle Fraction - FPF).',
    clinicalReference: 'Aulton’s Pharmaceutics: The Design and Manufacture of Medicines & GINA',
    difficulty: 'Mudah'
  },
  {
    id: 'q-609',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Bagian R&D formulasi merancang sediaan Liposom untuk mengenkapsulasi obat kemoterapi Doksorubisin guna menurunkan kardiotoksisitas miokard.',
    question: 'Dua komponen lipid utama apakah yang membentuk struktur vesikel bilayer lipid konsentris pada liposom?',
    options: [
      { key: 'A', text: 'Fosfatidilkolin (Fosfolipid) dan Kolesterol' },
      { key: 'B', text: 'Minyak kelapa sawit dan lilin lebah' },
      { key: 'C', text: 'Asam stearat dan gliserin' },
      { key: 'D', text: 'Parafin cair dan span 80' },
      { key: 'E', text: 'Gelatin dan akasia' }
    ],
    correctAnswer: 'A',
    explanation: 'LIPOSOM adalah vesikel sferis mikroskopik yang dindingnya tersusun atas satu atau lebih lapisan ganda (bilayer) FOSFOLIPID (seperti Fosfatidilkolin) yang dikombinasikan dengan KOLESTEROL. Kolesterol berfungsi sebagai modulator fluiditas dan pengatur rigiditas membran vesikel, mencegah kebocoran zat aktif sebelum mencapai jaringan target.',
    clinicalReference: 'Nanomedicine: Principles and Perspectives & Farmakope Indonesia VI',
    difficulty: 'Sedang'
  },
  {
    id: 'q-610',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Dalam pembuatan tablet pelepasan diperpanjang (Extended-Release Matrix Tablet) Kalium Klorida atau Metformin XR, formulator menggunakan polimer hidrofilik yang mengembang (swelling) dan membentuk lapisan gel penghalang difusi saat berkontak dengan cairan lambung.',
    question: 'Polimer hidrofilik derivat selulosa manakah yang paling umum digunakan sebagai pembentuk matriks gel hidrofilik tersebut?',
    options: [
      { key: 'A', text: 'Hidroksipropil Metilselulosa (HPMC / Hipromelosa) dengan viskositas tinggi (K100M / K15M)' },
      { key: 'B', text: 'Etilselulosa lipofilik' },
      { key: 'C', text: 'Malam putih (Cera alba)' },
      { key: 'D', text: 'Minyak jarak terhidrogenasi' },
      { key: 'E', text: 'Kalsium fosfat dibasa' }
    ],
    correctAnswer: 'A',
    explanation: 'HIDROKSIPROPIL METILSELULOSA (HPMC / Hypromellose grade viskositas tinggi seperti K4M, K15M, K100M) adalah polimer hidrofilik baku emas untuk tablet matriks sustained-release. Saat terpapar air, rantai polimer HPMC di permukaan tablet mengalami hidrasi cepat dan mengembang (swelling) membentuk lapisan gel (gel barrier) kental yang mengontrol laju difusi zat aktif keluar dari inti tablet secara bertahap selama 12-24 jam.',
    clinicalReference: 'Handbook of Pharmaceutical Excipients 9th Edition & Lieberman Pharmaceutical Dosage Forms: Tablets',
    difficulty: 'Mudah'
  },
  {
    id: 'q-611',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Formulasi tablet lepas lambat Nifedipin menggunakan teknologi Pompa Osmotik Oral (Osmotic-Controlled Release Oral Delivery System / OROS). Tablet dilapisi membran semipermeabel yang memiliki lubang mikroskopik presisi yang dibuat menggunakan sinar laser.',
    question: 'Apakah mekanisme pelepasan zat aktif pada sistem penghantaran obat pompa osmotik OROS?',
    options: [
      { key: 'A', text: 'Air dari saluran cerna menembus membran semipermeabel memicu tekanan osmotik tinggi di dalam kompartemen inti yang mendorong larutan/suspensi obat terpompa keluar konstan melalui lubang orifice laser' },
      { key: 'B', text: 'Pelepasan zat aktif bergantung pada peristaltik lambung' },
      { key: 'C', text: 'Tablet hancur seketika saat terkena asam lambung' },
      { key: 'D', text: 'Zat aktif menguap menjadi gas melalui dinding tablet' },
      { key: 'E', text: 'Pelepasan hanya terjadi jika dibantu enzim amilase' }
    ],
    correctAnswer: 'A',
    explanation: 'Sistem Pompa Osmotik (OROS) terdiri dari inti obat yang mengandung agen osmotik (osmogen) dan agen pendorong (push compartment), dilapisi oleh membran semipermeabel kaku dengan satu LUBANG PRESIFIKASI SINAR LASER (laser-drilled orifice). Air berdifusi masuk melintasi membran semipermeabel menciptakan gradien tekanan hidrostatik/osmotik tinggi yang mendorong obat keluar melalui lubang orifice dengan laju pelepasan orde nol (zero-order) yang konstan independen dari pH dan motilitas saluran cerna.',
    clinicalReference: 'Modified-Release Drug Delivery Technology & Remington: The Science and Practice of Pharmacy',
    difficulty: 'Sedang'
  },
  {
    id: 'q-612',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Tablet Asam Salisilat dilapisi polimer salut enterik untuk mencegah disolusi di lambung yang asam dan melindungi mukosa lambung dari iritasi lokal.',
    question: 'Polimer salut enterik manakah yang gugus karboksilatnya tidak terionisasi pada suasana asam lambung (pH < 3) namun terlarut sempurna pada pH usus halus (pH > 5,5 - 6,8)?',
    options: [
      { key: 'A', text: 'Cellulose Acetate Phthalate (CAP) atau Eudragit L100 / L30D-55' },
      { key: 'B', text: 'PVP K-30' },
      { key: 'C', text: 'Polietilen Glikol (PEG 4000)' },
      { key: 'D', text: 'Natrium Klorida' },
      { key: 'E', text: 'Gelatin Bloom 250' }
    ],
    correctAnswer: 'A',
    explanation: 'Polimer salut enterik seperti CELLULOSE ACETATE PHTHALATE (CAP), Hidroksipropil Metilselulosa Ftalat (HPMCP), dan Kopolimer Asam Metakrilat (EUDRAGIT L dan S) mengandung gugus asam karboksilat bebas (-COOH). Pada pH asam lambung (pH 1-3), gugus asam tidak terionisasi sehingga membran polimer tidak larut dalam air. Ketika tablet berpindah ke duodenum/jejunum (pH > 5,5-6,8), gugus karboksilat terionisasi membentuk garam karboksilat yang sangat larut air sehingga lapisan salut larut seketika dan melepaskan obat.',
    clinicalReference: 'Pharmaceutical Coating Technology & Farmakope Indonesia VI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-613',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Dalam formulasi emulsi parenteral lipid, formulator mencampurkan fase minyak dan fase air menggunakan surfaktan fosfolipid telur (Egg Lecithin).',
    question: 'Berapakah rentang target ukuran tetesan globul rata-rata (mean droplet size) emulsi lipid intravena yang aman agar tidak menyumbat pembuluh darah kapiler organ vital (paru/otak)?',
    options: [
      { key: 'A', text: 'Kurang dari 0,5 mikrometer (500 nanometer)' },
      { key: 'B', text: '10 hingga 50 mikrometer' },
      { key: 'C', text: '100 hingga 500 mikrometer' },
      { key: 'D', text: '1 milimeter' },
      { key: 'E', text: 'Bebas ukuran asalkan cair' }
    ],
    correctAnswer: 'A',
    explanation: 'Sesuai Farmakope Indonesia VI dan USP General Chapter <729> (Globule Size Distribution in Lipid Injectable Emulsions): Tetesan globul lemak emulsi lipid intravena (IVLE) HARUS MEMILIKI UKURAN RATA-RATA < 0,5 um (500 nm), dan persentase globul berukuran > 5 um (PFAT5) TIDAK BOLEH MELEBIHI 0,05% untuk mencegah emboli lemak di mikrosirkulasi kapiler paru yang memiliki diameter sekitar 4-9 um.',
    clinicalReference: 'USP <729> Globule Size Distribution in Lipid Injectable Emulsions & Farmakope Indonesia VI',
    difficulty: 'Sedang'
  },
  // =========================================================================
  // 📈 UJI DISOLUSI TERBANDING (f2), BIOEKIVALENSI & BIOWAIVER (q-614 s/d q-633)
  // =========================================================================
  {
    id: 'q-614',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Dalam pengajuan registrasi obat copy tablet Furosemid generik bermerek, bagian Formulasi melakukan Uji Disolusi Terbanding (UDT) terhadap produk inovator pembanding.',
    question: 'Berapakah 3 media disolusi dengan nilai pH berbeda yang dipersyaratkan dalam Pedoman Uji Bioekivalensi BPOM RI untuk mengevaluasi profil disolusi terbanding sediaan lepas segera?',
    options: [
      { key: 'A', text: 'Larutan HCl pH 1,2; Dapar Asetat pH 4,5; dan Dapar Fosfat pH 6,8' },
      { key: 'B', text: 'Air suling, Alkohol 70%, dan Aseton' },
      { key: 'C', text: 'Larutan NaOH pH 12, HCl pH 1, dan Air jeruk' },
      { key: 'D', text: 'Dapar Sitrat pH 2,0; Dapar Borat pH 9,0; dan Dapar Karbonat pH 11,0' },
      { key: 'E', text: 'Cukup diuji pada air murni tanpa dapar' }
    ],
    correctAnswer: 'A',
    explanation: 'Pedoman Uji Bioekivalensi BPOM RI dan WHO mensyaratkan pengujian disolusi terbanding in vitro pada 3 media fisiologis saluran cerna: 1) Media cairan lambung tiruan tanpa enzim (HCl 0,1 N / larutan dapar pH 1,2), 2) Media peralihan usus proksimal (Dapar Asetat pH 4,5), dan 3) Media usus halus (Dapar Fosfat pH 6,8), dilakukan pada suhu 37°C ± 0,5°C menggunakan 12 unit untuk masing-masing produk uji dan produk pembanding.',
    clinicalReference: 'Pedoman Uji Bioekivalensi Badan Pengawas Obat dan Makanan (BPOM) RI & WHO Guidelines for in vitro dissolution testing',
    difficulty: 'Mudah'
  },
  {
    id: 'q-615',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Hasil evaluasi profil disolusi terbanding antara tablet uji produk copy dan produk inovator menunjukkan nilai Faktor Kemiripan (Similarity Factor / f2) terhitung sebesar 64,5.',
    question: 'Berdasarkan pedoman BPOM, apakah kesimpulan mengenai kemiripan profil disolusi kedua produk tersebut?',
    options: [
      { key: 'A', text: 'Identik / Ekivalen secara in vitro (karena nilai f2 berada dalam rentang 50 hingga 100)' },
      { key: 'B', text: 'Tidak ekivalen (karena f2 harus bernilai 100)' },
      { key: 'C', text: 'Gagal uji disolusi terbanding' },
      { key: 'D', text: 'Perlu pengulangan dengan menggandakan dosis' },
      { key: 'E', text: 'Hanya ekivalen pada media asam' }
    ],
    correctAnswer: 'A',
    explanation: 'Dua profil disolusi dinyatakan serupa (similar / ekivalen secara in vitro) jika NILAI FAKTOR KEMIRIPAN (f2) BERADA DALAM RENTANG 50 HINGGA 100 (50 <= f2 <= 100). Nilai f2 = 50 merepresentasikan perbedaan rata-rata disolusi sebesar 10% pada seluruh titik waktu sampling, dan f2 = 100 merepresentasikan profil yang identik sempurna.',
    clinicalReference: 'Pedoman Uji Bioekivalensi BPOM RI & FDA Dissolution Testing and Acceptance Criteria',
    difficulty: 'Mudah'
  },
  {
    id: 'q-616',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Dalam perhitungan Faktor Perbedaan (Difference Factor / f1) pada uji disolusi terbanding yang sama, didapatkan nilai f1 = 6,2.',
    question: 'Berapakah batas rentang nilai f1 yang dipersyaratkan untuk menyatakan bahwa perbedaan persentase pelepasan kedua produk berada dalam batas yang dapat diterima?',
    options: [
      { key: 'A', text: 'Nilai f1 berada antara 0 hingga 15 (0 <= f1 <= 15)' },
      { key: 'B', text: 'Nilai f1 harus lebih besar dari 50' },
      { key: 'C', text: 'Nilai f1 harus bernilai negatif' },
      { key: 'D', text: 'Nilai f1 antara 50 hingga 100' },
      { key: 'E', text: 'Nilai f1 harus tepat 0' }
    ],
    correctAnswer: 'A',
    explanation: 'Faktor Perbedaan (f1) menghitung persentase perbedaan relatif antara dua kurva pelepasan pada setiap titik waktu sampling. Kriteria penerimaan kemiripan kurva disolusi mensyaratkan NILAI f1 BERADA DALAM RENTANG 0 HINGGA 15 (0 <= f1 <= 15). Nilai f1 = 6,2 memenuhi kriteria.',
    clinicalReference: 'Pedoman Uji Bioekivalensi BPOM RI & FDA Guidance for Industry: Dissolution Testing of Immediate Release Solid Oral Dosage Forms',
    difficulty: 'Mudah'
  },
  {
    id: 'q-617',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Dalam validasi data uji disolusi terbanding, apoteker memeriksa variabilitas data koefisien variasi (%CV) dari 12 unit sampel pada setiap titik waktu.',
    question: 'Berapakah batas maksimal nilai Koefisien Variasi (%CV) yang diperbolehkan untuk titik sampling pertama (misal menit ke-10 atau 15) dan titik sampling berikutnya agar perhitungan f2 valid?',
    options: [
      { key: 'A', text: '%CV tidak boleh lebih dari 20% pada titik waktu awal, dan tidak boleh lebih dari 10% pada titik waktu selanjutnya' },
      { key: 'B', text: '%CV maksimal 5% di seluruh titik' },
      { key: 'C', text: '%CV maksimal 50%' },
      { key: 'D', text: '%CV tidak dibatasi' },
      { key: 'E', text: '%CV harus 0%' }
    ],
    correctAnswer: 'A',
    explanation: 'Untuk memastikan model perhitungan statistik f2 valid, Pedoman BPOM dan WHO menetapkan kriteria variabilitas data: Koefisien Variasi (%CV) dari 12 unit tablet TIDAK BOLEH MELEBIHI 20% PADA TITIK SAMPLING AWAL (misal menit ke-10 atau 15), dan TIDAK BOLEH MELEBIHI 10% PADA TITIK SAMPLING SELANJUTNYA hingga akhir pengujian.',
    clinicalReference: 'Pedoman Uji Bioekivalensi BPOM RI & WHO Technical Report Series No. 992',
    difficulty: 'Sedang'
  },
  {
    id: 'q-618',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Pada pengujian disolusi terbanding produk tablet Parasetamol 500 mg lepas segera, didapatkan bahwa baik produk inovator maupun produk generik uji keduanya telah terdisolusi lebih dari 85% dalam waktu 15 menit pada ketiga media pH.',
    question: 'Berdasarkan pedoman BPOM dan WHO, bagaimanakah evaluasi kemiripan profil disolusi jika terjadi pelepasan sangat cepat (very rapidly dissolving) tersebut?',
    options: [
      { key: 'A', text: 'Kedua profil disolusi secara otomatis dinyatakan ekuivalen tanpa perlu menghitung nilai f2' },
      { key: 'B', text: 'Tetap wajib menghitung nilai f2' },
      { key: 'C', text: 'Pengujian dinyatakan gagal karena terlalu cepat larut' },
      { key: 'D', text: 'Uji harus diulang dengan mempercepat putaran dayung' },
      { key: 'E', text: 'Sediaan harus diuji ulang secara in vivo' }
    ],
    correctAnswer: 'A',
    explanation: 'Sesuai Pedoman Uji Bioekivalensi BPOM RI dan WHO: Jika kedua produk (uji dan pembanding) melepaskan ZAT AKTIF LEBIH DARI 85% DALAM WAKTU KURANG DARI 15 MENIT pada ketiga media disolusi (very rapidly dissolving), kurva disolusi dianggap EKIVALEN SECARA ALAMI TANPA MEMERLUKAN PERHITUNGAN NILAI FAKTOR KEMIRIPAN (f2).',
    clinicalReference: 'Pedoman Uji Bioekivalensi BPOM RI & WHO TRS 992 Annex 7',
    difficulty: 'Mudah'
  },
  {
    id: 'q-619',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Industri farmasi mengajukan pembebasan uji ekivalensi in vivo (Biowaiver) untuk sediaan tablet lepas segera zat aktif yang tergolong dalam Biopharmaceutics Classification System (BCS) Kelas I (kelarutan tinggi, permeabilitas tinggi).',
    question: 'Kriteria kelarutan tinggi (highly soluble) menurut BCS tercapai bila dosis kekuatan tertinggi zat aktif dapat larut sempurna dalam berapa volume cairan air pada rentang pH 1,2 hingga 6,8 pada suhu 37°C?',
    options: [
      { key: 'A', text: 'Larut sempurna dalam volume <= 250 mL' },
      { key: 'B', text: 'Larut sempurna dalam volume <= 1.000 mL' },
      { key: 'C', text: 'Larut sempurna dalam volume <= 100 mL' },
      { key: 'D', text: 'Larut sempurna dalam 10 mL' },
      { key: 'E', text: 'Larut sempurna dalam 5 Liter' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan ICH Guideline M9 on Biopharmaceutics Classification System-Based Biowaivers: Suatu zat aktif diklasifikasikan sebagai MEMILIKI KELARUTAN TINGGI (Highly Soluble) jika dosis kekuatan tunggal tertinggi obat tersebut LARUT SEMPURNA DALAM 250 mL (atau kurang) larutan air pada rentang pH fisiologis 1,2 hingga 6,8 pada suhu 37°C ± 1°C. Angka 250 mL merepresentasikan volume segelas air minum standar saat menelan obat.',
    clinicalReference: 'ICH Harmonised Guideline M9: Biopharmaceutics Classification System-Based Biowaivers & BPOM',
    difficulty: 'Sedang'
  },
  {
    id: 'q-620',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Dalam uji bioavailabilitas komparatif in vivo (Uji BE), apoteker menghitung rentang 90% Confidence Interval (CI) dari rasio Geometric Mean (uji/pembanding) untuk parameter farmakokinetik AUC dan Cmax.',
    question: 'Berapakah batas standar kriteria penerimaan (acceptance criteria) 90% Confidence Interval rasio rata-rata geometrik yang membuktikan bahwa kedua produk bioekivalen menurut BPOM?',
    options: [
      { key: 'A', text: '80,00% hingga 125,00%' },
      { key: 'B', text: '70,00% hingga 130,00%' },
      { key: 'C', text: '90,00% hingga 110,00%' },
      { key: 'D', text: '50,00% hingga 150,00%' },
      { key: 'E', text: 'Tepat 100,00% tanpa selisih' }
    ],
    correctAnswer: 'A',
    explanation: 'Sesuai Pedoman Uji Bioekivalensi BPOM RI dan FDA: Dua produk obat dinyatakan bioekivalen (ekivalen secara terapeutik) jika 90% CONFIDENCE INTERVAL (CI) DARI RATIO RATA-RATA GEOMETRIK (TEST / REFERENCE) untuk parameter luas area di bawah kurva (AUC0-t dan AUC0-inf) serta konsentrasi puncak plasma (Cmax) BERADA DALAM RENTANG 80,00% HINGGA 125,00%.',
    clinicalReference: 'Pedoman Uji Bioekivalensi BPOM RI & FDA Bioequivalence Studies with Pharmacokinetic Endpoints',
    difficulty: 'Mudah'
  },
  // =========================================================================
  // 🌿 FARMASI BAHAN ALAM: STANDARISASI, SENYAWA MARKER & DETEKSI BKO (q-621 s/d q-653)
  // =========================================================================
  {
    id: 'q-621',
    domainId: 'bahan_alam',
    targetExam: 'all',
    vignette: 'Apoteker di industri obat herbal menguji mutu simplisia dan ekstrak daun Meniran (Phyllanthus niruri L.) yang digunakan sebagai bahan baku fitofarmaka imunomodulator.',
    question: 'Senyawa marker aktif khas golongan lignan apakah yang menjadi penanda baku mutu ekstrak herba Meniran menurut Farmakope Herbal Indonesia?',
    options: [
      { key: 'A', text: 'Filantin dan Hipofilantin' },
      { key: 'B', text: 'Asiatikosida' },
      { key: 'C', text: 'Sinensetin' },
      { key: 'D', text: 'Andrografolid' },
      { key: 'E', text: 'Kurkuminoid' }
    ],
    correctAnswer: 'A',
    explanation: 'FILANTIN dan HIPOFILANTIN adalah senyawa marker aktif golongan lignan khas dari tanaman Meniran (Phyllanthus niruri L.). Senyawa ini memiliki aktivitas farmakologis sebagai imunomodulator yang menstimulasi proliferasi sel limfosit T, meningkatkan fagositosis makrofag, dan modulasi sitokin sistem imun.',
    clinicalReference: 'Farmakope Herbal Indonesia Edisi II Kemenkes RI & Monografi Ekstrak Tumbuhan Obat BPOM',
    difficulty: 'Mudah'
  },
  {
    id: 'q-622',
    domainId: 'bahan_alam',
    targetExam: 'all',
    vignette: 'Industri farmasi memproduksi salep herbal ekstrak herba Pegagan (Centella asiatica L. Urban) untuk mempercepat penyembuhan luka dan stimulasi biosintesis kolagen kulit.',
    question: 'Senyawa marker saponin triterpenoid aktif utama apakah yang dipersyaratkan kadarnya pada ekstrak pegagan dalam Farmakope Herbal Indonesia?',
    options: [
      { key: 'A', text: 'Asiatikosida' },
      { key: 'B', text: 'Sinensetin' },
      { key: 'C', text: 'Kuersetin' },
      { key: 'D', text: 'Alisin' },
      { key: 'E', text: 'Xantorizol' }
    ],
    correctAnswer: 'A',
    explanation: 'ASIATIKOSIDA adalah glikosida saponin triterpenoid aktif utama pada herba Pegagan (Centella asiatica). Asiatikosida merangsang sintesis kolagen tipe I pada fibroblas jaringan ikat, mempercepat epitelisasi penutupan luka, dan menghambat pembentukan jaringan parut keloid.',
    clinicalReference: 'Farmakope Herbal Indonesia Edisi II & WHO Monographs on Selected Medicinal Plants Vol 1',
    difficulty: 'Mudah'
  },
  {
    id: 'q-623',
    domainId: 'bahan_alam',
    targetExam: 'all',
    vignette: 'Dalam pengujian sediaan fitofarmaka antihipertensi dan diuretik yang mengandung ekstrak Daun Kumis Kucing (Orthosiphon stamineus Benth.), analis menetapkan kadar senyawa marker menggunakan KCKT.',
    question: 'Senyawa penanda aktif golongan flavonoid polimetoksiflavon lipofilik apakah yang menjadi penanda baku daun Kumis Kucing?',
    options: [
      { key: 'A', text: 'Sinensetin' },
      { key: 'B', text: 'Rutin' },
      { key: 'C', text: 'Hesperidin' },
      { key: 'D', text: 'Apigenin' },
      { key: 'E', text: 'Naringin' }
    ],
    correctAnswer: 'A',
    explanation: 'SINENSETIN (3,5,6,7,3,4-heksametoksiflavon) adalah senyawa marker flavonoid lipofilik khas pada daun Kumis Kucing (Orthosiphon stamineus / Orthosiphon aristatus). Sinensetin berperan dalam meningkatkan ekskresi asam urat dan ion natrium di ginjal serta menghambat pembentukan kristal kalsium oksalat kandung kemih.',
    clinicalReference: 'Farmakope Herbal Indonesia Edisi II Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-624',
    domainId: 'bahan_alam',
    targetExam: 'all',
    vignette: 'QC pabrik jamu membedakan rimpang Temulawak (Curcuma xanthorrhiza Roxb.) dari rimpang Kunyit (Curcuma longa L.) melalui identifikasi senyawa kimia khas pembeda.',
    question: 'Senyawa seskuiterpenoid fenolik khas apakah yang HANYA TERKANDUNG dalam rimpang Temulawak dan TIDAK DITEMUKAN pada rimpang Kunyit?',
    options: [
      { key: 'A', text: 'Xantorizol (Xanthorrhizol)' },
      { key: 'B', text: 'Kurkumin' },
      { key: 'C', text: 'Demetoksikurkumin' },
      { key: 'D', text: 'Bisdemetoksikurkumin' },
      { key: 'E', text: 'Zingiberen' }
    ],
    correctAnswer: 'A',
    explanation: 'XANTORIZOL (Xanthorrhizol) adalah senyawa marker seskuiterpenoid khas unik yang hanya ada pada rimpang Temulawak (Curcuma xanthorrhiza) dan tidak terdapat pada Kunyit (Curcuma longa). Meskipun keduanya sama-sama mengandung zat kuning kurkuminoid, keberadaan puncak kromatografi xantorizol merupakan pembeda analitis mutlak untuk autentikasi keaslian temulawak.',
    clinicalReference: 'Farmakope Herbal Indonesia Edisi II & Materia Medika Indonesia',
    difficulty: 'Mudah'
  },
  {
    id: 'q-625',
    domainId: 'bahan_alam',
    targetExam: 'all',
    vignette: 'Herba Sambiloto (Andrographis paniculata Nees) terkenal memiliki rasa yang sangat pahit dan digunakan secara empiris maupun ilmiah sebagai antipiretik dan antiinflamasi.',
    question: 'Senyawa marker aktif golongan diterpen lakton bisiklik apakah yang menjadi komponen aktif utama sambiloto?',
    options: [
      { key: 'A', text: 'Andrografolid' },
      { key: 'B', text: 'Mangiferin' },
      { key: 'C', text: 'Piperin' },
      { key: 'D', text: 'Galanin' },
      { key: 'E', text: 'Kapsaisin' }
    ],
    correctAnswer: 'A',
    explanation: 'ANDROGRAFOLID adalah senyawa marker aktif golongan diterpen lakton yang bertanggung jawab atas rasa pahit yang intens dan aktivitas farmakologis herba Sambiloto (Andrographis paniculata). Andrografolid terbukti secara klinis menghambat mediator inflamasi NF-kB, TNF-alfa, dan COX-2.',
    clinicalReference: 'Farmakope Herbal Indonesia Edisi II & WHO Monographs on Selected Medicinal Plants Vol 2',
    difficulty: 'Mudah'
  },
  {
    id: 'q-626',
    domainId: 'bahan_alam',
    targetExam: 'all',
    vignette: 'Dalam pengujian simplisia Umbi Bawang Putih (Allium sativum L.) sebagai fitofarmaka antihiperlipidemia, senyawa aktif tiosulfinat tidak stabil dan terbentuk saat umbi dihancurkan.',
    question: 'Senyawa tiosulfinat berbau tajam khas apakah yang terbentuk akibat hidrolisis asam amino aliin oleh enzim alliinase saat bawang putih segar digerus?',
    options: [
      { key: 'A', text: 'Alisin (Allicin / Diallyl thiosulfinate)' },
      { key: 'B', text: 'Ajoen' },
      { key: 'C', text: 'Dialil sulfida' },
      { key: 'D', text: 'S-alilsistein' },
      { key: 'E', text: 'Metil merkaptan' }
    ],
    correctAnswer: 'A',
    explanation: 'Dalam umbi bawang putih utuh, senyawa prazat tak berbau ALIIIN (S-allyl-L-cysteine sulfoxide) tersimpan di sitoplasma, sedangkan enzim ALLIINASE tersimpan di vakuola terpisah. Saat sel jaringan dihancurkan (diiris/digerus), enzim alliinase mengkatalisis konversi aliin menjadi ALISIN (dialil tiosulfinat), suatu senyawa antimikroba dan penurun kolesterol aktif yang beraroma tajam khas.',
    clinicalReference: 'Farmakope Herbal Indonesia Edisi II & WHO Monographs on Selected Medicinal Plants Vol 1',
    difficulty: 'Mudah'
  },
  {
    id: 'q-627',
    domainId: 'bahan_alam',
    targetExam: 'ukmppai',
    vignette: 'Balai Besar POM melakukan razia pengawasan post-market terhadap produk jamu tradisional cairan obat dalam yang beredar di pasaran dengan klaim "Jamu Pegal Linu dan Asam Urat Mujarab". Di laboratorium diuji dugaan pemalsuan Bahan Kimia Obat (BKO).',
    question: 'Dua zat kimia obat keras analgetik-kortikosteroid apakah yang paling sering ditemukan secara ilegal dicampurkan ke dalam jamu pegal linu palsu?',
    options: [
      { key: 'A', text: 'Parasetamol, Fenilbutazon, dan/atau Deksametason' },
      { key: 'B', text: 'Vitamin C dan Glukosa' },
      { key: 'C', text: 'Amoksisilin dan Seftriakson' },
      { key: 'D', text: 'Simvastatin dan Atorvastatin' },
      { key: 'E', text: 'Omeprazole dan Antasida' }
    ],
    correctAnswer: 'A',
    explanation: 'Pemalsuan Bahan Kimia Obat (BKO) pada jamu tradisional pegal linu dan reumatik umumnya dicemari dengan analgesik-antiinflamasi (PARASETAMOL, FENILBUTAZON, ASAM MEFENAMAT) dan kortikosteroid sintetis (DEKSAMETASON atau PREDNISON) secara tersembunyi. Hal ini sangat berbahaya karena dapat memicu efek samping sindrom Cushing, pendarahan saluran cerna fatal, dan gagal ginjal tanpa disadari konsumen.',
    clinicalReference: 'Public Warning Badan Pengawas Obat dan Makanan (BPOM) RI tentang Obat Tradisional Mengandung BKO',
    difficulty: 'Mudah'
  },
  {
    id: 'q-628',
    domainId: 'bahan_alam',
    targetExam: 'ukmppai',
    vignette: 'Dalam pengawasan obat tradisional penambah stamina pria (Jamu Kuat), BPOM menguji sampel serbuk kopi herbal yang diduga mengandung BKO menggunakan metode KLT Densitometri dan KCKT.',
    question: 'Senyawa obat sintetis penghambat Phosphodiesterase-5 (PDE-5 Inhibitor) apakah yang paling sering diidentifikasi secara ilegal dicampurkan ke dalam jamu kuat pria?',
    options: [
      { key: 'A', text: 'Sildenafil Sitrat dan Tadalafil' },
      { key: 'B', text: 'Diazepam' },
      { key: 'C', text: 'Glibenklamid' },
      { key: 'D', text: 'Kaptopril' },
      { key: 'E', text: 'Metronidazol' }
    ],
    correctAnswer: 'A',
    explanation: 'Jamu penambah stamina pria sering dicemari secara ilegal dengan zat kimia obat SILDENAFIL SITRAT, TADALAFIL, atau analognya. Penggunaan tanpa resep dokter ini sangat berisiko fatal memicu hipotensi mendadak, infark miokard, dan henti jantung aritmia terutama jika konsumen sedang mengonsumsi obat nitrat (seperti ISDN/Nitrogliserin).',
    clinicalReference: 'Peraturan BPOM RI tentang Larangan Penambahan Bahan Kimia Obat pada Obat Tradisional & Public Warning BPOM',
    difficulty: 'Mudah'
  },
  {
    id: 'q-629',
    domainId: 'bahan_alam',
    targetExam: 'ukmppai',
    vignette: 'Laboratorium BPOM menguji sampel jamu pelangsing dan penurun berat badan ilegal yang menyebabkan beberapa konsumen mengalami palpitasi jantung, insomnia parah, dan stroke hemoragik.',
    question: 'BKO penekan nafsu makan sentral yang telah ditarik dari peredaran dunia apakah yang teridentifikasi dalam jamu pelangsing tersebut?',
    options: [
      { key: 'A', text: 'Sibutramin Hidroklorida' },
      { key: 'B', text: 'Orlistat' },
      { key: 'C', text: 'Metformin' },
      { key: 'D', text: 'Asam Folat' },
      { key: 'E', text: 'Tiamin' }
    ],
    correctAnswer: 'A',
    explanation: 'SIBUTRAMIN HIDROKLORIDA adalah agen penekan nafsu makan (anoreksian) yang bekerja menghambat ambilan kembali serotonin dan norepinefrin sentral. Sibutramin telah ditarik dari seluruh peredaran resmi internasional karena hasil uji klinis SCOUT membuktikan peningkatan risiko kejadian kardiovaskular mayor (serangan jantung dan stroke). Pencampuran sibutramin secara ilegal ke dalam jamu pelangsing merupakan tindak pidana kejahatan farmasi.',
    clinicalReference: 'Public Warning BPOM RI & FDA Drug Safety Communication on Meridia (Sibutramine)',
    difficulty: 'Mudah'
  },
  {
    id: 'q-630',
    domainId: 'bahan_alam',
    targetExam: 'ukmppai',
    vignette: 'Analis laboratorium pengujian mutu obat tradisional BPOM mengidentifikasi bercak noda Deksametason pada sampel jamu menggunakan Kromatografi Lapis Tipis (KLT). Fase diam yang digunakan adalah Silika Gel GF254 dan fase gerak Kloroform : Metanol (9:1).',
    question: 'Bagaimanakah penampakan bercak noda analit pada pelat silika GF254 jika diamati di bawah lampu sinar Ultraviolet pada panjang gelombang 254 nm?',
    options: [
      { key: 'A', text: 'Tampak sebagai bercak gelap (padam) berlatar belakang pendaran fluoresensi hijau terang' },
      { key: 'B', text: 'Bercak berpendar merah menyala di latar gelap' },
      { key: 'C', text: 'Pelat berubah menjadi hitam pekat seluruhnya' },
      { key: 'D', text: 'Bercak berwarna pelangi' },
      { key: 'E', text: 'Tidak ada perubahan noda yang terlihat' }
    ],
    correctAnswer: 'A',
    explanation: 'Pelat KLT Silika Gel GF254 mengandung indikator fluoresensi anorganik (seperti seng silikat yang diaktivasi mangan) yang akan berpendar hijau terang ketika disinari sinar UV pada panjang gelombang 254 nm. Senyawa yang memiliki ikatan rangkap terkonjugasi atau cincin aromatis (seperti Deksametason) akan menyerap radiasi UV tersebut (fluorescence quenching), sehingga tampak sebagai BERCAK GELAP (PADAM / MEREDUP) di atas latar belakang pelat yang berpendar hijau.',
    clinicalReference: 'Farmakope Indonesia Edisi VI Lampiran Kromatografi Lapis Tipis & Stahl Thin Layer Chromatography',
    difficulty: 'Sedang'
  },
  {
    id: 'q-631',
    domainId: 'bahan_alam',
    targetExam: 'ukmppai',
    vignette: 'Dalam uji toksisitas akut sediaan ekstrak terstandar bahan alam baru sesuai Pedoman OECD 423 (Acute Oral Toxicity - Acute Toxic Class Method), dilakukan pemberian dosis bertingkat pada hewan coba tikus betina.',
    question: 'Apakah parameter kuantitatif toksikologi yang ditentukan untuk mengukur dosis tunggal yang menyebabkan kematian 50% dari populasi hewan uji dalam waktu 14 hari pengamatan?',
    options: [
      { key: 'A', text: 'Lethal Dose 50 (LD50)' },
      { key: 'B', text: 'Effective Dose 50 (ED50)' },
      { key: 'C', text: 'Maximum Tolerated Dose (MTD)' },
      { key: 'D', text: 'No Observed Adverse Effect Level (NOAEL)' },
      { key: 'E', text: 'Minimum Inhibitory Concentration (MIC)' }
    ],
    correctAnswer: 'A',
    explanation: 'LETHAL DOSE 50 (LD50) oral adalah dosis tunggal suatu senyawa kimia atau ekstrak bahan alam (dinyatakan dalam mg/kg berat badan) yang secara statistik diperkirakan dapat membunuh 50% populasi hewan uji dalam jangka waktu pemantauan akut (14 hari). Nilai LD50 digunakan untuk mengklasifikasikan tingkat bahaya toksisitas zat kimia menurut sistem GHS (Globally Harmonized System).',
    clinicalReference: 'OECD Guideline for the Testing of Chemicals No. 423 & Peraturan BPOM No. 7 Tahun 2014 tentang Pedoman Uji Toksisitas Nonklinik',
    difficulty: 'Mudah'
  },
  {
    id: 'q-632',
    domainId: 'bahan_alam',
    targetExam: 'ukmppai',
    vignette: 'Sebuah ekstrak tanaman obat diuji toksisitas akut oral pada tikus dan menghasilkan nilai LD50 terhitung sebesar 8.500 mg/kgBB.',
    question: 'Berdasarkan klasifikasi toksisitas menurut Loomis dan BPOM RI, ke dalam kategori toksisitas manakah ekstrak tersebut digolongkan?',
    options: [
      { key: 'A', text: 'Praktis Tidak Toksik (Practically Non-Toxic, LD50 antara 5.000 - 15.000 mg/kgBB)' },
      { key: 'B', text: 'Sangat Toksik (LD50 1 - 50 mg/kgBB)' },
      { key: 'C', text: 'Toksik Ekstrem (LD50 < 1 mg/kgBB)' },
      { key: 'D', text: 'Toksisitas Sedang (LD50 500 - 5.000 mg/kgBB)' },
      { key: 'E', text: 'Kategori Karsinogenik mutlak' }
    ],
    correctAnswer: 'A',
    explanation: 'Kategori Toksisitas Oral Loomis & BPOM RI: 1) Luar biasa toksik: < 1 mg/kg; 2) Sangat toksik: 1 - 50 mg/kg; 3) Toksik sedang: 50 - 500 mg/kg; 4) Toksik ringan: 500 - 5.000 mg/kg; 5) PRAKTIS TIDAK TOKSIK (Practically Non-Toxic): 5.000 - 15.000 mg/kg; 6) Relatif tidak berbahaya: > 15.000 mg/kg. Nilai LD50 8.500 mg/kg tergolong praktis tidak toksik.',
    clinicalReference: 'Loomis’s Essentials of Toxicology 4th Edition & Peraturan BPOM tentang Uji Toksisitas Nonklinik',
    difficulty: 'Sedang'
  },
  {
    id: 'q-633',
    domainId: 'bahan_alam',
    targetExam: 'ukmppai',
    vignette: 'Dalam pengembangan fitofarmaka baru untuk pengobatan komorbiditas jangka panjang, dilakukan Uji Toksisitas Subkronis Oral pada hewan coba tikus wistar selama 90 hari pemberian dosis berulang.',
    question: 'Apakah tujuan utama dilakukannya Uji Toksisitas Subkronis 90 hari menurut Pedoman Uji Nonklinik BPOM?',
    options: [
      { key: 'A', text: 'Mengetahui profil toksisitas pada organ sasaran tertentu (hepar, ginjal, sistem hematologi), menentukan batas dosis aman No Observed Adverse Effect Level (NOAEL), dan menilai reversibilitas efek toksik setelah pemaparan berulang' },
      { key: 'B', text: 'Hanya menghitung nilai LD50 harian' },
      { key: 'C', text: 'Mengetahui kelarutan ekstrak dalam air' },
      { key: 'D', text: 'Menggantikan seluruh tahapan uji klinis manusia' },
      { key: 'E', text: 'Mengetahui masa simpan kedaluwarsa kemasan' }
    ],
    correctAnswer: 'A',
    explanation: 'Uji Toksisitas Subkronis (pemberian oral berulang selama 90 hari atau 28 hari) bertujuan untuk mengevaluasi efek toksik sistemik pada organ target (histopatologi hati, tubulus ginjal, sumsum tulang), mendeteksi akumulasi obat, serta menentukan tingkat dosis tanpa efek merugikan yang teramati (NOAEL / No Observed Adverse Effect Level) yang menjadi dasar penentuan dosis awal aman (First-in-Human dose) pada uji klinis fase 1 manusia.',
    clinicalReference: 'Peraturan BPOM No. 7 Tahun 2014 tentang Pedoman Uji Toksisitas Nonklinik Secara In Vivo & OECD 408',
    difficulty: 'Sedang'
  },
  // =========================================================================
  // 🌿 LANJUTAN STANDARISASI, METODE EKSTRAKSI & BIOAKTIF (q-634 s/d q-653)
  // =========================================================================
  {
    id: 'q-634',
    domainId: 'bahan_alam',
    targetExam: 'all',
    vignette: 'Apoteker di industri herbal mengekstraksi daun Teh Hijau yang mengandung senyawa polifenol termolabil menggunakan pelarut etanol pada suhu kamar dengan perendaman berkala disertai pengadukan.',
    question: 'Metode ekstraksi dingin sederhana apakah yang diterapkan oleh apoteker tersebut?',
    options: [
      { key: 'A', text: 'Maserasi' },
      { key: 'B', text: 'Sokletasi' },
      { key: 'C', text: 'Refluks' },
      { key: 'D', text: 'Digesti' },
      { key: 'E', text: 'Infus' }
    ],
    correctAnswer: 'A',
    explanation: 'MASERASI adalah metode ekstraksi dingin yang dilakukan dengan cara merendam serbuk simplisia dalam pelarut penyari pada suhu ruangan terkendali (15-25°C) selama beberapa hari dengan pengocokan atau pengadukan berkala. Maserasi sangat ideal untuk mengekstraksi senyawa metabolit sekunder yang bersifat termolabil (tidak tahan panas).',
    clinicalReference: 'Farmakope Herbal Indonesia Edisi II & Parameter Standar Umum Ekstrak Tumbuhan Obat BPOM RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-635',
    domainId: 'bahan_alam',
    targetExam: 'all',
    vignette: 'Dalam ekstraksi minyak lemak atau metabolit sekunder tahan panas dengan jumlah pelarut organik terbatas, analis laboratorium menggunakan alat gelas yang dilengkapi labu alas bulat, thimble berpori, sifon otomatis, dan kondensor pendingin bola.',
    question: 'Metode ekstraksi panas kontinu berulang apakah yang menggunakan rangkaian alat gelas tersebut?',
    options: [
      { key: 'A', text: 'Sokletasi' },
      { key: 'B', text: 'Perkolasi' },
      { key: 'C', text: 'Maserasi kinetik' },
      { key: 'D', text: 'Dekokta' },
      { key: 'E', text: 'Destilasi uap' }
    ],
    correctAnswer: 'A',
    explanation: 'SOKLETASI adalah metode ekstraksi padat-cair panas berkesinambungan (kontinu) menggunakan bejana ekstraktor Soxhlet. Uap pelarut menguap ke atas melalui pipa uap, mengembun di kondensor, dan menetes membasahi simplisia di dalam selongsong thimble. Saat cairan pelarut mencapai tinggi sifon, seluruh ekstrak tersedot kembali ke labu penampung. Metode ini sangat efisien karena menggunakan volume pelarut yang relatif sedikit untuk ekstraksi berulang-ulang.',
    clinicalReference: 'Teknologi Bahan Alam & Farmakope Herbal Indonesia',
    difficulty: 'Mudah'
  },
  {
    id: 'q-636',
    domainId: 'bahan_alam',
    targetExam: 'all',
    vignette: 'Dalam pembuatan sediaan tradisional cair Infusa menurut ketentuan Farmakope Herbal Indonesia, simplisia nabati disari dengan air pada penangas air mendidih.',
    question: 'Berapakah suhu penangas dan durasi waktu penyarian standar resmi untuk pembuatan sediaan Infusa?',
    options: [
      { key: 'A', text: 'Suhu 90°C selama 15 menit terhitung sejak suhu bejana mencapai 90°C' },
      { key: 'B', text: 'Suhu 100°C selama 30 menit' },
      { key: 'C', text: 'Suhu 60°C selama 1 jam' },
      { key: 'D', text: 'Suhu kamar selama 24 jam' },
      { key: 'E', text: 'Suhu 121°C dalam autoklaf' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Farmakope Indonesia dan Farmakope Herbal Indonesia: INFUSA adalah sediaan cair yang dibuat dengan menyari simplisia nabati dengan air pada suhu penangas air 90°C SELAMA 15 MENIT (terhitung setelah panci infus mencapai suhu 90°C). Jika penyarian dilakukan selama 30 MENIT pada suhu 90°C, sediaan tersebut disebut DEKOKTA (biasanya untuk simplisia bertekstur keras seperti kulit batang, kayu, atau akar).',
    clinicalReference: 'Farmakope Indonesia Edisi VI & Farmakope Herbal Indonesia Edisi II',
    difficulty: 'Mudah'
  },
  {
    id: 'q-637',
    domainId: 'bahan_alam',
    targetExam: 'all',
    vignette: 'Dalam standardisasi mutu ekstrak kental rimpang Jahe, apoteker QC menetapkan kadar air ekstrak menggunakan metode Destilasi Toluen (Toluena azeotropik).',
    question: 'Mengapa metode Destilasi Toluen lebih direkomendasikan daripada metode pengeringan Oven (Susut Pengeringan) pada simplisia yang kaya akan minyak atsiri?',
    options: [
      { key: 'A', text: 'Pemanasan oven akan menguapkan air SEKALIGUS minyak atsiri yang mudah menguap, sedangkan destilasi toluen hanya mengukur volume air murni yang terkondensasi secara selektif' },
      { key: 'B', text: 'Metode oven merusak tabung kaca laboratorium' },
      { key: 'C', text: 'Destilasi toluen tidak memerlukan pemanasan' },
      { key: 'D', text: 'Oven tidak mampu menguapkan air' },
      { key: 'E', text: 'Toluen mengubah warna minyak atsiri menjadi bening' }
    ],
    correctAnswer: 'A',
    explanation: 'Metode Susut Pengeringan (Loss on Drying) mengukur seluruh senyawa yang hilang pada pemanasan 105°C, termasuk air DAN minyak atsiri volatil. Pada simplisia atau ekstrak aromatik yang kaya minyak atsiri (seperti Jahe, Cengkeh, Minyak Kayu Putih), penentuan kadar air murni WAJIB menggunakan metode DESTILASI TOLUEN (Destilasi Azeotropik) di mana air menguap bersama toluena dan terkondensasi ke dalam buret penampung terkalibrasi untuk dibaca volumenya secara spesifik.',
    clinicalReference: 'Farmakope Herbal Indonesia Edisi II Lampiran Penetapan Kadar Air & FI VI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-638',
    domainId: 'bahan_alam',
    targetExam: 'all',
    vignette: 'QC menguji parameter non-spesifik Kadar Abu Total dan Kadar Abu Tidak Larut Asam pada simplisia Daun Sirih (Piper betle L.).',
    question: 'Parameter Kadar Abu Tidak Larut Asam secara khusus mencerminkan tingkat pencemaran atau kontaminasi oleh bahan apakah?',
    options: [
      { key: 'A', text: 'Pencemaran mineral anorganik eksternal seperti pasir, tanah, silikat, dan debu lingkungan' },
      { key: 'B', text: 'Kadar logam berat merkuri saja' },
      { key: 'C', text: 'Kadar kalsium alami di dalam vakuola sel' },
      { key: 'D', text: 'Kadar air bebas simplisia' },
      { key: 'E', text: 'Tingkat cemaran jamur aflatoksin' }
    ],
    correctAnswer: 'A',
    explanation: 'Kadar Abu Total mengukur seluruh mineral internal tanaman dan pengotor eksternal. Perlakuan abu dengan Asam Klorida (HCl encer) akan melarutkan sebagian besar garam kalsium dan karbonat biologis internal tanaman; sisa abu yang TIDAK LARUT ASAM adalah senyawa silikat, pasir, dan tanah eksternal. Oleh karena itu, Kadar Abu Tidak Larut Asam mencerminkan tingkat KEBERSIHAN PENCUCIAN SIMPLISIA dari kontaminasi tanah dan pasir silika.',
    clinicalReference: 'Farmakope Herbal Indonesia Edisi II Lampiran Parameter Non-Spesifik Ekstrak',
    difficulty: 'Mudah'
  },
  {
    id: 'q-639',
    domainId: 'bahan_alam',
    targetExam: 'all',
    vignette: 'Dalam pengujian keamanan simplisia Biji Kopi dan Biji Jagung dari gudang penyimpanan bahan baku jamu, dilakukan pengujian mikotoksin karsinogenik yang dihasilkan oleh kapang Aspergillus flavus.',
    question: 'Cemaran mikotoksin berbahaya apakah yang wajib diuji kadarnya dengan batas maksimal sangat ketat (<= 20 ppb) sesuai peraturan BPOM?',
    options: [
      { key: 'A', text: 'Aflatoksin total (Aflatoksin B1, B2, G1, dan G2)' },
      { key: 'B', text: 'Okratoksin saja' },
      { key: 'C', text: 'Fumonisin B1' },
      { key: 'D', text: 'Patulin' },
      { key: 'E', text: 'Zearalenon' }
    ],
    correctAnswer: 'A',
    explanation: 'AFLATOKSIN (terutama Aflatoksin B1) adalah mikotoksin yang diproduksi oleh kapang Aspergillus flavus dan Aspergillus parasiticus yang tumbuh pada simplisia yang disimpan pada kondisi lembab. Aflatoksin adalah karsinogenik kuat golongan 1 IARC yang memicu kanker hepatoseluler primer (karsinoma hati). Peraturan BPOM RI menetapkan batas cemaran Aflatoksin B1 maksimal 5 mcg/kg (ppb) dan Aflatoksin Total maksimal 20 mcg/kg (ppb).',
    clinicalReference: 'Peraturan BPOM RI tentang Persyaratan Mutu Obat Tradisional & IARC Monographs',
    difficulty: 'Mudah'
  },
  {
    id: 'q-640',
    domainId: 'bahan_alam',
    targetExam: 'all',
    vignette: 'Industri jamu memproduksi serbuk kapsul Daun Jati Belanda (Guazuma ulmifolia Lamk.) untuk membantu menurunkan berat badan.',
    question: 'Kandungan metabolit sekunder polifenol polimerik apakah dalam daun jati belanda yang berkhasiat mengendapkan protein mukosa usus sehingga menghambat penyerapan lemak (adstringen)?',
    options: [
      { key: 'A', text: 'Tanin' },
      { key: 'B', text: 'Alkaloid piperin' },
      { key: 'C', text: 'Minyak atsiri sitral' },
      { key: 'D', text: 'Glikosida antrakuinon' },
      { key: 'E', text: 'Sterol stigmasterol' }
    ],
    correctAnswer: 'A',
    explanation: 'Daun Jati Belanda (Guazuma ulmifolia) kaya akan senyawa TANIN terhidrolisis dan terkondensasi. Tanin memiliki sifat astringen alami yang mampu mengendapkan protein dan membentuk lapisan protektif pada permukaan vili mukosa usus halus, menurunkan luas area absorpsi aktif dan menghambat absorbsi lipid/lemak makanan ke dalam pembuluh lakteal.',
    clinicalReference: 'Materia Medika Indonesia Jilid VI & Farmakope Herbal Indonesia',
    difficulty: 'Mudah'
  },
  {
    id: 'q-641',
    domainId: 'bahan_alam',
    targetExam: 'all',
    vignette: 'Dalam pengujian simplisia Daun Senna (Cassia senna L.) yang digunakan sebagai laksatif stimulan konstipasi, diidentifikasi kandungan senyawa metabolit sekunder turunan antrasena.',
    question: 'Golongan glikosida apakah yang bekerja meningkatkan motilitas kolon setelah dihidrolisis oleh bakteri usus menjadi bentuk aglikon rein-antron?',
    options: [
      { key: 'A', text: 'Glikosida Antrakuinon (Senosida A dan B)' },
      { key: 'B', text: 'Glikosida Jantung (Digoksin)' },
      { key: 'C', text: 'Glikosida Saponin' },
      { key: 'D', text: 'Glikosida Flavonoid' },
      { key: 'E', text: 'Glikosida Sianogenik' }
    ],
    correctAnswer: 'A',
    explanation: 'SENOSIDA A dan B adalah GLIKOSIDA ANTRAKUINON alami dari daun Senna. Di usus besar (kolon), ikatan glikosida dipecah oleh enzim glukosidase flora usus menghasilkan aglikon bebas (rein antron) yang merangsang pleksus mienterik Auerbach, meningkatkan peristaltik kontraksi propulsif kolon dan sekresi air lumen usus.',
    clinicalReference: 'Trease and Evans Pharmacognosy 16th Edition & WHO Monographs on Selected Medicinal Plants Vol 1',
    difficulty: 'Mudah'
  },
  {
    id: 'q-642',
    domainId: 'bahan_alam',
    targetExam: 'all',
    vignette: 'Uji skrining fitokimia pada ekstrak etanol Rimpang Kunyit menghasilkan busa yang stabil selama lebih dari 15 menit setelah dikocok kuat di dalam tabung reaksi yang berisi air.',
    question: 'Golongan senyawa metabolit sekunder amfifilik apakah yang memberikan hasil uji positif busa persisten tersebut?',
    options: [
      { key: 'A', text: 'Saponin' },
      { key: 'B', text: 'Alkaloid' },
      { key: 'C', text: 'Flavonoid' },
      { key: 'D', text: 'Minyak atsiri' },
      { key: 'E', text: 'Steroid' }
    ],
    correctAnswer: 'A',
    explanation: 'SAPONIN adalah glikosida amfifilik yang tersusun atas aglikon hidrofobik (sapogenin triterpenoid atau steroid) yang terikat pada rantai gula hidrofilik. Sifat amfifilik ini menurunkan tegangan permukaan air secara drastis mirip deterjen/sabun (soap-like properties), sehingga ketika larutan dikocok kuat dengan air akan menghasilkan BUSA (FROTH) YANG STABIL DAN PERSISTEN minimal selama 15 menit.',
    clinicalReference: 'Harborne: Phytochemical Methods A Guide to Modern Techniques of Plant Analysis & FI VI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-643',
    domainId: 'bahan_alam',
    targetExam: 'all',
    vignette: 'Dalam uji reaksi warna tabung untuk mendeteksi keberadaan senyawa Alkaloid pada ekstrak daun tembakau atau tapak dara, analis menambahkan Pereaksi Mayer.',
    question: 'Apakah hasil pengamatan visual positif adanya senyawa alkaloid dengan pereaksi Mayer (Kalium Tetraiodomerkurat)?',
    options: [
      { key: 'A', text: 'Terbentuk endapan putih atau kekuningan' },
      { key: 'B', text: 'Terbentuk endapan coklat kemerahan' },
      { key: 'C', text: 'Terbentuk warna hijau toska' },
      { key: 'D', text: 'Larutan menjadi jernih tanpa endapan' },
      { key: 'E', text: 'Terbentuk gas efervesen menyala' }
    ],
    correctAnswer: 'A',
    explanation: 'Uji identifikasi golongan Alkaloid: 1) PEREAKSI MAYER (Kalium Tetraiodomerkurat) menghasilkan ENDAPAN PUTIH ATAU KUNING KREMASI; 2) PEREAKSI DRAGENDORFF (Kalium Bismut Iodida) menghasilkan ENDAPAN COKLAT KEMERAHAN / JINGGA; 3) PEREAKSI WAGNER (Iodin dalam KI) menghasilkan ENDAPAN COKLAT TUA.',
    clinicalReference: 'Harborne Phytochemical Methods & Farmakope Indonesia Edisi VI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-644',
    domainId: 'bahan_alam',
    targetExam: 'all',
    vignette: 'Analis menguji adanya golongan senyawa Flavonoid pada ekstrak herba Meniran menggunakan uji Wilstatter (Uji Bate-Smith dan Metcalf).',
    question: 'Reagen logam dan asam apakah yang ditambahkan untuk menghasilkan larutan berwarna merah jingga atau merah lembayung pekat?',
    options: [
      { key: 'A', text: 'Serbuk Magnesium (Mg) dan Asam Klorida (HCl) pekat' },
      { key: 'B', text: 'Serbuk Seng (Zn) dan Asam Sulfat pekat' },
      { key: 'C', text: 'Besi(III) Klorida encer' },
      { key: 'D', text: 'Natrium Hidroksida basa' },
      { key: 'E', text: 'Asam Asetat glasial' }
    ],
    correctAnswer: 'A',
    explanation: 'Uji Wilstatter (Uji Sianidin) untuk identifikasi Flavonoid dilakukan dengan menambahkan sedikit serbuk LOGAM MAGNESIUM (Mg) dan beberapa tetes ASAM KLORIDA (HCl) PEKAT ke dalam larutan ekstrak. Reduksi cincin gamma-piron flavon/flavonol menghasilkan garam flavilium (sianidin) yang ditandai dengan perubahan warna larutan menjadi MERAH JINGGA, MERAH PEKAT, ATAU MAGENTA.',
    clinicalReference: 'Harborne: Metode Fitokimia Penuntun Cara Modern Menganalisis Tumbuhan & Farmakope Herbal Indonesia',
    difficulty: 'Mudah'
  },
  {
    id: 'q-645',
    domainId: 'bahan_alam',
    targetExam: 'all',
    vignette: 'Dalam uji reaksi Liebermann-Burchard untuk membedakan senyawa golongan Triterpenoid dan Steroid bebas pada fraksi heksan tanaman obat.',
    question: 'Perubahan warna apakah yang terbentuk jika sampel positif mengandung Triterpenoid vs Steroid?',
    options: [
      { key: 'A', text: 'Triterpenoid menghasilkan warna merah keunguan/merah jambu; sedangkan Steroid menghasilkan warna hijau kebiruan' },
      { key: 'B', text: 'Triterpenoid menghasilkan warna hitam; Steroid berwarna putih' },
      { key: 'C', text: 'Kedua senyawa selalu menghasilkan warna kuning transparan' },
      { key: 'D', text: 'Triterpenoid berwarna biru dongker; Steroid berwarna merah darah' },
      { key: 'E', text: 'Tidak ada perubahan warna' }
    ],
    correctAnswer: 'A',
    explanation: 'Pada Reaksi Liebermann-Burchard (penambahan Asam Asetat Anhidrida dan Asam Sulfat pekat): TRITERPENOID menghasilkan cincin atau warna MERAH JINGGA HINGGA MERAH KEUNGUAN (purple/pink); sedangkan STEROID menghasilkan warna HIJAU KEBIRUAN (blue-green) akibat proses dehidrasi dan konjugasi ikatan rangkap.',
    clinicalReference: 'Natural Products Isolation & Harborne Phytochemical Methods',
    difficulty: 'Sedang'
  },
  {
    id: 'q-646',
    domainId: 'bahan_alam',
    targetExam: 'all',
    vignette: 'Ekstrak Bunga Cengkeh (Syzygium aromaticum) disuling untuk memperoleh minyak atsiri eugenol murni yang berkhasiat sebagai analgesik gigi lokal.',
    question: 'Metode distilasi apakah yang paling tepat digunakan untuk menyari minyak atsiri dari bahan nabati segar/kering tanpa mendegradasi senyawa fenolik volatilnya?',
    options: [
      { key: 'A', text: 'Destilasi Uap dan Air (Water and Steam Distillation)' },
      { key: 'B', text: 'Destilasi fraksinasi bertingkat' },
      { key: 'C', text: 'Destilasi vakum kering' },
      { key: 'D', text: 'Maserasi panas' },
      { key: 'E', text: 'Evaporasi putar vakum' }
    ],
    correctAnswer: 'A',
    explanation: 'DESTILASI UAP DAN AIR (Steam and Water Distillation) adalah metode standar industri minyak atsiri. Bahan simplisia diletakkan di atas piringan berlubang (dandang) di atas air mendidih. Uap air yang menembus jaringan tumbuhan akan membawa senyawa minyak atsiri volatil menguap bersama pada suhu di bawah titik didih aslinya, lalu terkondensasi di pendingin dan dipisahkan dalam buret Florentine berdasarkan perbedaan massa jenis.',
    clinicalReference: 'Guenther: The Essential Oils & Farmakope Herbal Indonesia Edisi II',
    difficulty: 'Mudah'
  },
  {
    id: 'q-647',
    domainId: 'bahan_alam',
    targetExam: 'all',
    vignette: 'Simplisia Daun Salam (Syzygium polyanthum) digunakan masyarakat untuk mengontrol diabetes melitus tipe 2 secara empiris.',
    question: 'Senyawa marker aktif golongan flavonoid manakah yang terbukti secara in vitro menghambat enzim alfa-glukosidase pada ekstrak daun salam?',
    options: [
      { key: 'A', text: 'Kuersetin dan Kuersitrin' },
      { key: 'B', text: 'Atropin' },
      { key: 'C', text: 'Kafein' },
      { key: 'D', text: 'Strychnin' },
      { key: 'E', text: 'Efedrin' }
    ],
    correctAnswer: 'A',
    explanation: 'Daun Salam (Syzygium polyanthum) mengandung senyawa aktif flavonoid KUERSETIN dan derivat glikosidanya KUERSITRIN. Senyawa ini memiliki aktivitas menghambat enzim alfa-glukosidase di brush border usus halus sehingga menunda pemecahan karbohidrat kompleks dan menurunkan lonjakan glukosa darah postprandial.',
    clinicalReference: 'Farmakope Herbal Indonesia Edisi II & Buku Tanaman Obat Indonesia BPOM',
    difficulty: 'Mudah'
  },
  {
    id: 'q-648',
    domainId: 'bahan_alam',
    targetExam: 'all',
    vignette: 'Herba Sidaguri (Sida rhombifolia L.) dikembangkan dalam sediaan obat tradisional antihiperurisemia.',
    question: 'Apakah mekanisme kerja ekstrak sidaguri dalam menurunkan kadar asam urat darah pada penderita artritis gout?',
    options: [
      { key: 'A', text: 'Menghambat aktivitas enzim Xantin Oksidase (seperti efek alopurinol)' },
      { key: 'B', text: 'Meningkatkan penyerapan asam urat di usus' },
      { key: 'C', text: 'Menghancurkan eritrosit darah' },
      { key: 'D', text: 'Menghambat filtrasi glomerulus' },
      { key: 'E', text: 'Memicu pelepasan histamin' }
    ],
    correctAnswer: 'A',
    explanation: 'Kandungan flavonoid dan alkaloid dalam tanaman Sidaguri (Sida rhombifolia) bekerja menghambat aktivitas enzim XANTIN OKSIDASE, yaitu enzim kunci yang mengkatalisis konversi hipoxantin menjadi xantin dan selanjutnya menjadi asam urat di hepar, sehingga menghasilkan efek penurun asam urat yang serupa dengan mekanisme kerja alopurinol.',
    clinicalReference: 'Buku Seri Monografi Ekstrak Tumbuhan Obat BPOM RI & FHI II',
    difficulty: 'Mudah'
  },
  {
    id: 'q-649',
    domainId: 'bahan_alam',
    targetExam: 'all',
    vignette: 'Buah Mengkudu (Morinda citrifolia L.) digunakan sebagai antihipertensi empiris.',
    question: 'Senyawa marker glikosida iridoid apakah yang terkandung dalam buah mengkudu yang memiliki aktivitas vasodilatasi dan relaksasi otot polos pembuluh darah?',
    options: [
      { key: 'A', text: 'Asperulosida dan Skopoletin' },
      { key: 'B', text: 'Morfin' },
      { key: 'C', text: 'Kurkumin' },
      { key: 'D', text: 'Sennosida' },
      { key: 'E', text: 'Reserpin murni' }
    ],
    correctAnswer: 'A',
    explanation: 'Buah Mengkudu (Morinda citrifolia) mengandung senyawa aktif kumarin SKOPOLETIN dan iridoid ASPERULOSIDA. Skopoletin memiliki khasiat melebarkan pembuluh darah (vasodilatasi) yang mengalami penyempitan sehingga membantu menurunkan resistensi perifer dan menurunkan tekanan darah sistemik.',
    clinicalReference: 'Farmakope Herbal Indonesia Edisi II & WHO Monographs on Selected Medicinal Plants Vol 4',
    difficulty: 'Mudah'
  },
  {
    id: 'q-650',
    domainId: 'bahan_alam',
    targetExam: 'all',
    vignette: 'Dalam penandaan logo obat bahan alam yang beredar di Indonesia, sediaan Tensigard dan Stimuno mencantumkan logo khusus lingkaran hijau berisi jari-jari daun yang membentuk kristal es/bintang salju berwarna hijau.',
    question: 'Kategori penggolongan obat bahan alam kasta tertinggi apakah yang disimbolkan oleh logo tersebut?',
    options: [
      { key: 'A', text: 'Fitofarmaka (telah dibuktikan khasiat dan keamanannya melalui uji klinis pada manusia)' },
      { key: 'B', text: 'Obat Herbal Terstandar (OHT)' },
      { key: 'C', text: 'Jamu Empiris' },
      { key: 'D', text: 'Obat Kuasi' },
      { key: 'E', text: 'Suplemen Makanan Impor' }
    ],
    correctAnswer: 'A',
    explanation: 'Logo lingkaran hijau berlatar putih dengan simbol JARI-JARI DAUN MEMBENTUK BINTANG ES (Salju) adalah logo resmi FITOFARMAKA. Fitofarmaka adalah obat bahan alam kasta tertinggi yang telah dibuktikan keamanan dan khasiatnya secara ilmiah melalui UJI PRAKLINIK (pada hewan) DAN UJI KLINIK (pada manusia), bahan bakunya terstandarisasi, dan diproduksi di industri berstandar CPOTB/CPOB.',
    clinicalReference: 'Peraturan BPOM RI tentang Kriteria dan Tata Laksana Registrasi Obat Bahan Alam',
    difficulty: 'Mudah'
  },
  {
    id: 'q-651',
    domainId: 'bahan_alam',
    targetExam: 'all',
    vignette: 'Produk Diapet dan Kiranti mencantumkan logo lingkaran hijau yang berisi gambar TIGA BINTANG HIJAU.',
    question: 'Kategori golongan obat bahan alam apakah yang menggunakan logo tiga bintang hijau tersebut?',
    options: [
      { key: 'A', text: 'Obat Herbal Terstandar (OHT)' },
      { key: 'B', text: 'Fitofarmaka' },
      { key: 'C', text: 'Jamu' },
      { key: 'D', text: 'Kosmetik herbal' },
      { key: 'E', text: 'Obat Bebas Terbatas' }
    ],
    correctAnswer: 'A',
    explanation: 'Logo lingkaran hijau dengan TIGA BINTANG HIJAU di dalamnya adalah simbol resmi untuk OBAT HERBAL TERSTANDAR (OHT). OHT adalah sediaan obat bahan alam yang telah dibuktikan khasiat dan keamanannya secara ilmiah melalui UJI PRAKLINIS pada hewan coba, dan bahan bakunya telah memenuhi standar baku mutu simplisia/ekstrak terstandar.',
    clinicalReference: 'Peraturan BPOM RI tentang Ketentuan Baku Penandaan Obat Bahan Alam',
    difficulty: 'Mudah'
  },
  {
    id: 'q-652',
    domainId: 'bahan_alam',
    targetExam: 'all',
    vignette: 'Kemasan produk Tolak Angin dan jamu serbuk tradisional mencantumkan logo lingkaran hijau berisi gambar POHON HIJAU BESERTA RANTING DAN DAUN.',
    question: 'Tingkatan kategori obat bahan alam apakah yang menggunakan simbol pohon hijau tersebut dan apa dasar pembuktian ilmiahnya?',
    options: [
      { key: 'A', text: 'Jamu; dasar pembuktian klaim khasiat dan keamanan berdasarkan data empiris turun temurun minimal 3 generasi' },
      { key: 'B', text: 'Fitofarmaka uji klinis' },
      { key: 'C', text: 'Obat sintetis generik' },
      { key: 'D', text: 'Narkotika herbal' },
      { key: 'E', text: 'Obat baru yang sedang dalam penelitian' }
    ],
    correctAnswer: 'A',
    explanation: 'Logo RANTING DAUN BERBENTUK POHON dalam lingkaran hijau adalah logo resmi JAMU. Jamu adalah obat bahan alam Indonesia yang khasiat dan keamanannya dibuktikan berdasarkan PENGALAMAN EMPIRIS TURUN TEMURUN (tradisional use) yang telah digunakan secara turun temurun selama minimal tiga generasi (minimal 60 tahun) di Indonesia.',
    clinicalReference: 'Peraturan BPOM RI tentang Standar Pelayanan dan Penandaan Obat Tradisional',
    difficulty: 'Mudah'
  },
  {
    id: 'q-653',
    domainId: 'bahan_alam',
    targetExam: 'ukmppai',
    vignette: 'Dalam pendaftaran obat tradisional ke Badan Pengawas Obat dan Makanan (BPOM), industri obat tradisional (IOT) wajib memenuhi ketentuan Cara Pembuatan Obat Tradisional yang Baik (CPOTB).',
    question: 'Bentuk sediaan obat bahan alam manakah yang DILARANG KERAS oleh regulasi BPOM untuk diproduksi dalam bentuk sediaan obat tradisional?',
    options: [
      { key: 'A', text: 'Sediaan parenteral (injeksi intravena/intramuskular) dan sediaan intravaginal langsung' },
      { key: 'B', text: 'Sediaan kapsul keras' },
      { key: 'C', text: 'Sediaan cairan obat dalam / sirup' },
      { key: 'D', text: 'Sediaan tablet kunyah' },
      { key: 'E', text: 'Sediaan salep topikal' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Peraturan BPOM RI tentang Kriteria dan Tata Laksana Registrasi Obat Bahan Alam: Obat tradisional DILARANG KERAS diproduksi dan diedarkan dalam bentuk sediaan PARENTERAL (Injeksi, Infus), TETES MATA, SUPOSITORIA (kecuali untuk wasir tertentu berizin khusus), serta sediaan INTRAVAGINAL karena risiko infeksi mikroba dan pirogen yang sangat tinggi pada rute organ steril tersebut.',
    clinicalReference: 'Peraturan BPOM RI No. 32 Tahun 2019 tentang Persyaratan Keamanan dan Mutu Obat Tradisional',
    difficulty: 'Mudah'
  }
];
