import { ExamQuestion } from '../competencyExamData';

/**
 * Bank Soal Kasus Vignette CBT Bagian 13 (Nomor q-534 s/d q-593)
 * Cetak Biru Resmi UKOMNAS 2026: UKMPPAI (Apoteker) & UKTVF/UKTVK (Vokasi TTK)
 * Fokus: Good Distribution Practice (CDOB), Penanganan Recall BPOM, CAPA & QRM ICH Q9, Farmakoekonomi Komprehensif, dan Kalkulasi Logistik Rantai Pasok
 * Total: 60 Butir Soal Kasus Nyata Terstandar
 */
export const CBT_EXPANSION_PART_13: ExamQuestion[] = [
  // =========================================================================
  // 📦 CDOB COLD CHAIN MANAGEMENT & KUALIFIKASI PENYIMPANAN (q-534 s/d q-548)
  // =========================================================================
  {
    id: 'q-534',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Apoteker Penanggung Jawab (APJ) di Pedagang Besar Farmasi (PBF) cabang melakukan proses kualifikasi pemetaan suhu (temperature mapping) pada cold room baru berkapasitas 40 m3 untuk penyimpanan vaksin.',
    question: 'Berapakah durasi waktu minimal pemetaan suhu kontinu yang disyaratkan dalam Pedoman CDOB BPOM untuk membuktikan kestabilan suhu 2°C - 8°C pada kondisi tanpa beban (empty) dan dengan beban penuh (loaded)?',
    options: [
      { key: 'A', text: 'Minimal 7 hari berturut-turut (168 jam) untuk masing-masing kondisi, mencakup hari kerja dan akhir pekan' },
      { key: 'B', text: 'Cukup 24 jam saja' },
      { key: 'C', text: 'Minimal 1 bulan penuh' },
      { key: 'D', text: 'Cukup 3 jam di siang hari' },
      { key: 'E', text: 'Minimal 12 jam pada malam hari' }
    ],
    correctAnswer: 'A',
    explanation: 'Sesuai Petunjuk Teknis CDOB BPOM dan pedoman WHO/PQS, pemetaan suhu (temperature mapping) pada fasilitas penyimpanan dingin (Cold Room / Walk-in Refrigerator) harus dilakukan selama MINIMAL 7 HARI BERTURUT-TURUT (168 JAM) tanpa henti. Periode 7 hari ini mencakup siklus operasional hari kerja aktif (buka-tutup pintu intensif) dan periode akhir pekan statis, dilakukan pada kondisi kosong (empty) maupun terisi beban (loaded), serta diulangi pada musim ekstrem (kemarau dan hujan).',
    clinicalReference: 'Petunjuk Operasional Penerapan Pedoman Cara Distribusi Obat yang Baik (CDOB) BPOM RI & WHO Technical Report Series No. 961 Annex 9',
    difficulty: 'Sedang'
  },
  {
    id: 'q-535',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Dalam proses pemetaan suhu 3 dimensi di dalam ruang chiller penyimpanan vaksin, apoteker memasang sejumlah sensor suhu (data logger) yang telah terkalibrasi.',
    question: 'Lokasi manakah di dalam ruang pendingin yang secara teoritis paling berisiko menjadi titik terpanas (hot spot) dan titik terdingin (cold spot)?',
    options: [
      { key: 'A', text: 'Hot spot: di dekat pintu akses dan bagian atas dekat langit-langit; Cold spot: tepat di depan hembusan udara unit evaporator (cooling coil)' },
      { key: 'B', text: 'Hot spot: tepat di depan kipas evaporator; Cold spot: di balik pintu' },
      { key: 'C', text: 'Hot spot di lantai tengah; Cold spot di langit-langit' },
      { key: 'D', text: 'Semua sudut memiliki suhu yang identik tanpa variasi' },
      { key: 'E', text: 'Hot spot di dinding belakang bawah; Cold spot di pintu luar' }
    ],
    correctAnswer: 'A',
    explanation: 'Udara dingin memiliki massa jenis lebih berat dan cenderung turun ke bawah, sedangkan udara hangat berkumpul di atas. Oleh karena itu, HOT SPOT (titik bersuhu tertinggi) biasanya terletak di area atas ruangan dan di dekat pintu masuk yang sering terpapar udara luar; sedangkan COLD SPOT (titik bersuhu terendah) berada tepat di depan aliran hembusan udara keluar dari evaporator pendingin (discharge air), di mana produk berisiko membeku jika diletakkan terlalu dekat.',
    clinicalReference: 'WHO Supplement: Temperature and humidity monitoring systems for transport operations & CDOB BPOM',
    difficulty: 'Mudah'
  },
  {
    id: 'q-536',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Terjadi pemadaman listrik mendadak dari PLN di PBF yang menyimpan produk biologi dan vaksin bernilai miliaran rupiah. Sistem generator set (genset) cadangan otomatis dirancang untuk mengambil alih pasokan listrik.',
    question: 'Berapakah batas waktu jeda maksimal (changeover time) genset otomatis menyala agar fluktuasi suhu chiller tidak melewati batas aman mutu?',
    options: [
      { key: 'A', text: 'Maksimal dalam waktu 10 hingga 15 menit pasca-pemadaman listrik' },
      { key: 'B', text: 'Maksimal dalam 6 jam' },
      { key: 'C', text: 'Maksimal dalam 24 jam' },
      { key: 'D', text: 'Cukup dinyalakan manual keesokan harinya' },
      { key: 'E', text: 'Tidak diperlukan generator cadangan' }
    ],
    correctAnswer: 'A',
    explanation: 'Sesuai Pedoman CDOB BPOM tentang penanganan produk rantai dingin, fasilitas penyimpanan produk biologi/vaksin wajib memiliki sumber daya listrik cadangan (genset otomatis / Automatic Transfer Switch - ATS) yang mampu mengambil alih daya secara penuh dalam waktu MAKSIMAL 10 - 15 MENIT setelah pasokan listrik utama terputus, guna mencegah kenaikan suhu di atas 8°C.',
    clinicalReference: 'Pedoman Teknis Cara Distribusi Obat yang Baik (CDOB) BPOM RI & WHO Cold Chain Protocols',
    difficulty: 'Mudah'
  },
  {
    id: 'q-537',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Apoteker di bagian logistik rumah sakit merancang pengiriman vaksin Hepatitis B dan DPT ke puskesmas menggunakan kotak dingin pasif (Cooler Box / Vaccine Carrier) dengan Cool Pack dan Ice Pack.',
    question: 'Pemberitahuan krusial apakah yang harus diperhatikan mengenai perlakuan Ice Pack (es beku) sebelum dimasukkan ke dalam vaccine carrier bersama vaksin freeze-sensitive (sensitif beku)?',
    options: [
      { key: 'A', text: 'Ice pack beku harus dilakukan proses pengkondisian (conditioning) pada suhu ruang hingga terdengar bunyi cairan gemercik dan bunga es mencair sebelum dimasukkan agar vaksin tidak membeku' },
      { key: 'B', text: 'Ice pack harus langsung ditempelkan menempel rapat pada botol vaksin' },
      { key: 'C', text: 'Ice pack disiram air panas mendidih' },
      { key: 'D', text: 'Ice pack tidak boleh digunakan sama sekali' },
      { key: 'E', text: 'Ice pack diganti dengan air mineral biasa' }
    ],
    correctAnswer: 'A',
    explanation: 'Vaksin Hepatitis B, DPT-HB-Hib, dan TT adalah VAKSIN SENSITIF BEKU (freeze-sensitive). Jika es beku dari freezer (-20°C) langsung dimasukkan ke kotak tanpa dikondisikan, suhu di dalam kotak dapat turun di bawah 0°C dan membekukan vaksin, yang secara permanen merusak adjuvan aluminium dan menginaktivasi potensinya. Proses CONDITIONING dilakukan dengan meletakkan ice pack di suhu ruangan sampai es mencair sebagian dan terdengar bunyi gemercik air saat dikocok.',
    clinicalReference: 'WHO Guidelines on the International Packaging and Transportation of Vaccines & Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-538',
    domainId: 'manajemen',
    targetExam: 'all',
    vignette: 'Dalam penerimaan vaksin di instalasi farmasi dinas kesehatan, apoteker mencurigai vial vaksin DPT-HB-Hib telah mengalami pembekuan selama perjalanan distribusi darat akibat kontak langsung dengan es beku.',
    question: 'Uji fisik sederhana baku apakah yang harus dilakukan apoteker untuk memastikan apakah emulsi vaksin sensitif beku telah rusak akibat pembekuan?',
    options: [
      { key: 'A', text: 'Shake Test (Uji Kocok) dengan membandingkan laju sedimentasi vial uji terhadap vial kontrol yang sengaja dibekukan' },
      { key: 'B', text: 'Uji organoleptik dengan mencium bau vaksin' },
      { key: 'C', text: 'Uji disolusi medium asam' },
      { key: 'D', text: 'Uji pH dengan kertas lakmus' },
      { key: 'E', text: 'Uji viskositas menggunakan viskometer Ostwald' }
    ],
    correctAnswer: 'A',
    explanation: 'SHAKE TEST (Uji Kocok) adalah protokol baku WHO dan Kemenkes untuk mendeteksi kerusakan vaksin teradsorpsi aluminium yang peka beku. Vial yang dicurigai beku dan vial kontrol yang sengaja dibekukan lalu dicairkan dikocok bersamaan selama 15 detik, lalu diletakkan di atas meja. Jika endapan vial uji mengendap lebih lambat daripada vial kontrol (tetap homogen lebih lama), vaksin aman. Namun jika vial uji mengendap cepat seperti vial kontrol beku, VAKSIN TELAH RUSAK DAN HARUS DIBUANG.',
    clinicalReference: 'WHO The Shake Test Guide: How to Determine Whether Adsorbed Vaccines Have Been Damaged by Freezing',
    difficulty: 'Mudah'
  },
  // =========================================================================
  // 🚨 PENANGANAN RECALL BPOM, OBAT KEDALUWARSA & LIMBAH B3 (q-539 s/d q-553)
  // =========================================================================
  {
    id: 'q-539',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Badan Pengawas Obat dan Makanan (BPOM) menerbitkan surat peringatan penarikan produk (Recall) darurat Kelas I terhadap sirup obat yang terkontaminasi Etilen Glikol (EG) dan Dietilen Glikol (DEG) di atas ambang batas aman yang telah menyebabkan kejadian gagal ginjal akut progresif atipikal pada anak.',
    question: 'Berapakah batas waktu maksimal bagi industri farmasi pemegang izin edar untuk menarik produk yang tergolong Recall Kelas I dari seluruh peredaran hingga tingkat konsumen/pasien?',
    options: [
      { key: 'A', text: 'Maksimal 1 x 24 jam untuk penghentian distribusi dan penarikan segera dari seluruh rantai pasok' },
      { key: 'B', text: 'Maksimal 7 hari kerja' },
      { key: 'C', text: 'Maksimal 30 hari kalender' },
      { key: 'D', text: 'Maksimal 60 hari' },
      { key: 'E', text: 'Hanya ditarik saat produk habis masa edar' }
    ],
    correctAnswer: 'A',
    explanation: 'Sesuai Peraturan BPOM RI tentang Penarikan dan Pemusnahan Obat, RECALL KELAS I adalah situasi darurat di mana penggunaan obat dapat menimbulkan konsekuensi kesehatan yang serius atau KEMATIAN. Tindakan penarikan harus dimulai SEGERA dalam waktu MAKSIMAL 1 X 24 JAM sejak surat perintah penarikan diterbitkan, menjangkau seluruh lini distribusi hingga ke tingkat pasien/konsumen akhir.',
    clinicalReference: 'Peraturan BPOM No. 14 Tahun 2019 tentang Penarikan dan Pemusnahan Obat yang Tidak Memenuhi Standar & PIC/S Guidelines',
    difficulty: 'Mudah'
  },
  {
    id: 'q-540',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'BPOM memerintahkan penarikan obat antihipertensi dari peredaran karena ditemukan ketidaksesuaian kadar zat aktif (sub-potensi 85% dari klaim etiket) yang berpotensi menyebabkan ketidakefektifan terapi sementara (Recall Kelas II).',
    question: 'Sampai pada tingkat fasilitas manakah penarikan produk Recall Kelas II harus dilakukan dan dalam jangka waktu berapa lama?',
    options: [
      { key: 'A', text: 'Ditarik sampai tingkat fasilitas pelayanan kefarmasian (Rumah Sakit, Puskesmas, Apotek, Klinik, Toko Obat) dalam waktu maksimal 5 hari kerja' },
      { key: 'B', text: 'Hanya sampai tingkat gudang distributor utama' },
      { key: 'C', text: 'Harus mendatangi rumah pasien satu per satu' },
      { key: 'D', text: 'Ditarik dalam jangka waktu 6 bulan' },
      { key: 'E', text: 'Cukup diberikan potongan harga di apotek' }
    ],
    correctAnswer: 'A',
    explanation: 'RECALL KELAS II adalah penarikan terhadap obat yang dapat menyebabkan efek samping merugikan kesehatan yang bersifat sementara atau reversibel secara medis. Penarikan Kelas II dilakukan sampai pada TINGKAT FASILITAS PELAYANAN KEFARMASIAN (Rumah Sakit, Apotek, Klinik, Puskesmas) dengan batas waktu penyelesaian penarikan MAKSIMAL 5 HARI KERJA sejak instruksi penarikan.',
    clinicalReference: 'Peraturan BPOM No. 14 Tahun 2019 & FDA Recalls, Corrections and Removals Guidelines',
    difficulty: 'Sedang'
  },
  {
    id: 'q-541',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Sebuah batch multivitamin ditarik oleh industri farmasi secara sukarela karena kesalahan cetak nomor izin edar pada kemasan sekunder karton luar, namun mutu isi sediaan tablet memenuhi seluruh spesifikasi Farmakope (Recall Kelas III).',
    question: 'Berapakah batas waktu maksimal penyelesaian penarikan Recall Kelas III menurut ketentuan regulasi BPOM?',
    options: [
      { key: 'A', text: 'Maksimal 30 hari kalender' },
      { key: 'B', text: 'Maksimal 24 jam' },
      { key: 'C', text: 'Maksimal 3 hari kerja' },
      { key: 'D', text: 'Maksimal 1 tahun' },
      { key: 'E', text: 'Tidak ada batas waktu' }
    ],
    correctAnswer: 'A',
    explanation: 'RECALL KELAS III adalah penarikan obat yang tidak menimbulkan konsekuensi bahaya kesehatan yang signifikan (misal cacat kemasan, kesalahan label minor, nomor izin edar terbalik). Penarikan ini dilakukan hingga tingkat distributor dan fasilitas pelayanan dengan batas waktu penyelesaian penarikan MAKSIMAL 30 HARI KALENDER.',
    clinicalReference: 'Peraturan BPOM No. 14 Tahun 2019 tentang Penarikan dan Pemusnahan Obat',
    difficulty: 'Mudah'
  },
  {
    id: 'q-542',
    domainId: 'manajemen',
    targetExam: 'all',
    vignette: 'Di apotek, seorang TTK menerima produk obat yang telah ditarik oleh BPOM dan beberapa obat yang telah kedaluwarsa. TTK melapor kepada Apoteker Penanggung Jawab untuk proses penyimpanan sementara sebelum dikembalikan ke PBF atau dimusnahkan.',
    question: 'Sesuai standar Permenkes No. 73/2016 dan CDOB, di manakah dan bagaimana obat retur/kedaluwarsa harus disimpan?',
    options: [
      { key: 'A', text: 'Disimpan di area khusus terpisah (area karantina / rejected), diberi label merah yang jelas "OBAT RUSAK/KEDALUWARSA - TIDAK UNTUK DIJUAL", dan terkunci aman' },
      { key: 'B', text: 'Diletakkan di etalase depan bersama obat yang masih layak jual' },
      { key: 'C', text: 'Diletakkan di atas lantai tanpa palet' },
      { key: 'D', text: 'Langsung dibuang ke tempat sampah umum domestik' },
      { key: 'E', text: 'Disembunyikan di dalam tas karyawan' }
    ],
    correctAnswer: 'A',
    explanation: 'Semua produk kembalian, kedaluwarsa, rusak, atau ditarik (recall) HARUS SEGERA DIASINGKAN dan disimpan di AREA KARANTINA TERPISAH (segregated area) yang aman dan terkunci, serta diberi identifikasi/label status yang jelas (stiker merah: OBAT KEDALUWARSA/DITOLAK - JANGAN DIDISTRIBUSIKAN) untuk mencegah terjadinya kekeliruan pengambilan atau penyalahgunaan sebelum dimusnahkan.',
    clinicalReference: 'Permenkes No. 73 Tahun 2016 tentang Standar Pelayanan Kefarmasian di Apotek & Pedoman CDOB BPOM',
    difficulty: 'Mudah'
  },
  {
    id: 'q-543',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Apoteker di rumah sakit akan melakukan pemusnahan sediaan tablet Fentanil, Morfin injeksi, dan Oksikodon yang telah melewati tanggal kedaluwarsa.',
    question: 'Instansi resmi manakah yang WAJIB hadir sebagai saksi resmi dalam pemusnahan narkotika dan penandatanganan Berita Acara Pemusnahan (BAP) sesuai Permenkes No. 3 Tahun 2015?',
    options: [
      { key: 'A', text: 'Dinas Kesehatan Kabupaten/Kota dan/atau Balai Pengawas Obat dan Makanan (BPOM) setempat' },
      { key: 'B', text: 'Pihak Kepolisian dan TNI saja' },
      { key: 'C', text: 'Cukup disaksikan oleh 2 orang staf apotek intern' },
      { key: 'D', text: 'Pengadilan Negeri setempat' },
      { key: 'E', text: 'Kementerian Keuangan kantor pajak' }
    ],
    correctAnswer: 'A',
    explanation: 'Sesuai Peraturan Menteri Kesehatan RI No. 3 Tahun 2015 tentang Peredaran, Penyimpanan, Pemusnahan, dan Pelaporan Narkotika, Psikotropika, dan Prekursor Farmasi: Pemusnahan Narkotika dan Psikotropika di Apotek/RS/PBF WAJIB disaksikan oleh petugas dari DINAS KESEHATAN KABUPATEN/KOTA dan/atau BALAI BESAR/BALAI POM SETEMPAT, serta dituangkan dalam Berita Acara Pemusnahan (BAP) rangkap empat.',
    clinicalReference: 'Permenkes No. 3 Tahun 2015 tentang Pengelolaan Narkotika, Psikotropika, dan Prekursor Farmasi',
    difficulty: 'Mudah'
  },
  {
    id: 'q-544',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Instalasi Farmasi Rumah Sakit mengelola limbah sitostatika kemoterapi (Limbah B3 Medis Genotoksik/Sitotoksik). Sesuai regulasi Kementerian Lingkungan Hidup dan Kehutanan (KLHK) No. P.56/2015, limbah sitostatika tidak boleh dimusnahkan dengan insinerator suhu rendah konvensional.',
    question: 'Berapakah suhu minimal pembakaran pada ruang bakar kedua (secondary chamber) insinerator yang disyaratkan untuk menghancurkan limbah sitotoksik secara tuntas menjadi abu amorf nontoksik?',
    options: [
      { key: 'A', text: 'Minimal 1000°C hingga 1200°C dengan waktu tinggal gas minimal 2 detik' },
      { key: 'B', text: 'Suhu 100°C (air mendidih)' },
      { key: 'C', text: 'Suhu 300°C' },
      { key: 'D', text: 'Suhu 600°C' },
      { key: 'E', text: 'Suhu ruang tanpa pemanasan' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan PermenLHK No. P.56/Menlhk-Setjen/2015 tentang Tata Cara Pengelolaan Limbah B3 dari Fasilitas Pelayanan Kesehatan: Limbah sitotoksik/sitostatika memiliki ikatan kimia yang sangat stabil dan karsinogenik. Pemusnahan limbah sitostatika wajib menggunakan insinerator bertemperatur sangat tinggi, yaitu MINIMAL 1000°C - 1200°C pada ruang bakar kedua (secondary chamber) dengan waktu tinggal gas (residence time) minimal 2 detik untuk memastikan molekul sitotoksik terdegradasi sempurna tanpa menghasilkan dioksin dan furan berbahaya.',
    clinicalReference: 'PermenLHK No. P.56/Menlhk-Setjen/2015 & WHO Safe Management of Wastes from Health-Care Activities',
    difficulty: 'Sedang'
  },
  // =========================================================================
  // 🔍 CAPA, ROOT CAUSE ANALYSIS & QRM ICH Q9 (q-545 s/d q-555)
  // =========================================================================
  {
    id: 'q-545',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Terjadi penyimpangan kritis (critical deviation) pada proses pengemasan sirup obat di industri farmasi, di mana label sirup Parasetamol 120 mg/5 mL tertempel pada botol yang berisi sirup Ibuprofen 100 mg/5 mL. Tim Quality Assurance (QA) melakukan investigasi akar penyebab masalah (Root Cause Analysis / RCA).',
    question: 'Alat bantu diagram kualitas manakah yang memetakan kategori 6M (Man, Machine, Material, Method, Measurement, Mother Nature/Milieu) untuk menelusuri seluruh kemungkinan penyebab terjadinya kejadian nyaris celah tersebut?',
    options: [
      { key: 'A', text: 'Diagram Tulang Ikan (Fishbone / Ishikawa Diagram)' },
      { key: 'B', text: 'Diagram Pareto 80/20' },
      { key: 'C', text: 'Diagram Gantt' },
      { key: 'D', text: 'Diagram Venn matematika' },
      { key: 'E', text: 'Histogram distribusi normal' }
    ],
    correctAnswer: 'A',
    explanation: 'DIAGRAM ISHIKAWA (Diagram Tulang Ikan / Fishbone Diagram) adalah alat bantu visual sistematis dalam Root Cause Analysis (RCA) yang mengelompokkan faktor penyebab potensial ke dalam kategori 6M (Man/Manusia, Machine/Mesin, Material/Bahan baku, Method/Metode instruksi kerja, Measurement/Pengukuran kalibrasi, dan Mother Nature/Lingkungan kerja) untuk menemukan akar masalah utama deviasi mutu.',
    clinicalReference: 'ICH Guideline Q9 Quality Risk Management & WHO Technical Report Series on Good Manufacturing Practices',
    difficulty: 'Mudah'
  },
  {
    id: 'q-546',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Setelah diagram Ishikawa selesai, tim QA menanyakan serangkaian pertanyaan "Mengapa hal itu terjadi?" secara berulang hingga mencapai faktor paling mendasar dari kesalahan pelabelan tersebut.',
    question: 'Teknik analisis investigasi apakah yang dimaksud?',
    options: [
      { key: 'A', text: 'Metode Analisis 5-Whys (5 Mengapa)' },
      { key: 'B', text: 'Analisis SWOT' },
      { key: 'C', text: 'Metode Six Sigma DMAIC' },
      { key: 'D', text: 'Metode Monte Carlo' },
      { key: 'E', text: 'Uji Chi-Square' }
    ],
    correctAnswer: 'A',
    explanation: 'Metode 5-WHYS (5 Mengapa) adalah teknik pemecahan masalah iteratif yang mengeksplorasi hubungan sebab-akibat yang mendasari suatu kecacatan. Dengan bertanya "Mengapa" minimal 5 kali berturut-turut, tim dapat menyingkirkan gejala permukaan dan mengidentifikasi AKAR MASALAH (Root Cause) yang sebenarnya sehingga tindakan pencegahan (Preventive Action) dapat diformulasikan secara permanen.',
    clinicalReference: 'WHO TRS 986 Annex 2 Good Manufacturing Practices: Risk-Based Quality Management',
    difficulty: 'Mudah'
  },
  {
    id: 'q-547',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Dalam penerapan Manajemen Risiko Mutu (Quality Risk Management / QRM) sesuai panduan ICH Q9 di bagian produksi tablet, tim menggunakan metode Failure Mode and Effects Analysis (FMEA) untuk mengevaluasi risiko cacat capping tablet.',
    question: 'Tiga parameter kuantitatif apakah yang dikalikan bersama untuk menghasilkan Nilai Prioritas Risiko (Risk Priority Number / RPN)?',
    options: [
      { key: 'A', text: 'Severity (Tingkat Keparahan) x Occurrence (Frekuensi Keterjadian) x Detectability (Kemampuan Keterdeteksian)' },
      { key: 'B', text: 'Biaya x Waktu x Jumlah Tenaga Kerja' },
      { key: 'C', text: 'Suhu x Tekanan x Waktu Kompresi' },
      { key: 'D', text: 'Dosis x Bobot x Kekerasan' },
      { key: 'E', text: 'Omset x Modal x Margin' }
    ],
    correctAnswer: 'A',
    explanation: 'Pada metode Failure Mode and Effects Analysis (FMEA) menurut ICH Q9, Nilai Prioritas Risiko (RPN) dihitung dengan rumus: RPN = Severity (S) x Occurrence (O) x Detection (D). Masing-masing dinilai dengan skala 1-10. Semakin tinggi skor RPN, semakin tinggi prioritas kegagalan tersebut untuk segera dibuatkan tindakan mitigasi dan CAPA.',
    clinicalReference: 'ICH Harmonised Tripartite Guideline Q9 Quality Risk Management & CPOB BPOM',
    difficulty: 'Mudah'
  },
  {
    id: 'q-548',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Sebuah mode kegagalan pada mesin pencetak tablet memiliki nilai Keparahan (Severity) = 8 (sangat kritis bagi pasien), Frekuensi Keterjadian (Occurrence) = 5 (sering terjadi), dan Kemampuan Keterdeteksian (Detectability) = 4 (sistem kontrol sensor IPC mampu mendeteksi sebagian besar cacat sebelum rilis).',
    question: 'Berapakah Nilai Prioritas Risiko (RPN) dari proses tersebut?',
    options: [
      { key: 'A', text: '160' },
      { key: 'B', text: '17' },
      { key: 'C', text: '40' },
      { key: 'D', text: '80' },
      { key: 'E', text: '320' }
    ],
    correctAnswer: 'A',
    explanation: 'Perhitungan RPN: RPN = Severity x Occurrence x Detectability = 8 x 5 x 4 = 160. Nilai RPN di atas ambang batas (biasanya ambang batas perusahaan adalah RPN > 100 atau 120) mewajibkan pelaksanaan tindakan korektif dan pencegahan (CAPA) segera untuk menurunkan risiko.',
    clinicalReference: 'ICH Guideline Q9 Quality Risk Management & CPOB 2018/2024 BPOM',
    difficulty: 'Mudah'
  },
  // =========================================================================
  // 💰 FARMAKOEKONOMI: ICER, QALY, BIA & METODE EVALUASI (q-549 s/d q-568)
  // =========================================================================
  {
    id: 'q-549',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Dalam evaluasi farmakoekonomi komparatif antara dua obat antidiabetes baru (Obat A vs Obat B) untuk masuk ke Formularium Nasional, didapatkan data: Biaya total terapi Obat A adalah Rp 10.000.000 dengan efektivitas penurunan HbA1c sebesar 1,2%; sedangkan Obat B berbiaya Rp 16.000.000 dengan efektivitas penurunan HbA1c sebesar 1,8%.',
    question: 'Berapakah nilai Incremental Cost-Effectiveness Ratio (ICER) Obat B dibandingkan Obat A?',
    options: [
      { key: 'A', text: 'Rp 10.000.000 per 1% penurunan HbA1c' },
      { key: 'B', text: 'Rp 6.000.000 per 1% penurunan HbA1c' },
      { key: 'C', text: 'Rp 16.000.000 per 1% penurunan HbA1c' },
      { key: 'D', text: 'Rp 26.000.000 per 1% penurunan HbA1c' },
      { key: 'E', text: 'Rp 3.600.000 per 1% penurunan HbA1c' }
    ],
    correctAnswer: 'A',
    explanation: 'Rumus ICER: (Biaya Obat B - Biaya Obat A) / (Efektivitas B - Efektivitas A). Selisih Biaya (ΔC) = Rp 16.000.000 - Rp 10.000.000 = Rp 6.000.000. Selisih Efektivitas (ΔE) = 1,8% - 1,2% = 0,6%. Maka ICER = Rp 6.000.000 / 0,6 = Rp 10.000.000 per 1% penurunan kadar HbA1c.',
    clinicalReference: 'Pedoman Penerapan Kajian Farmakoekonomi Kementerian Kesehatan RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-550',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Sebuah terapi kemoterapi baru dievaluasi menggunakan metode Analisis Biaya-Utilitas (Cost-Utility Analysis / CUA). Terapi baru memperpanjang usia harapan hidup pasien selama 4 tahun dengan skor utilitas kualitas hidup (utility score berdasarkan kuesioner EuroQol EQ-5D) sebesar 0,75.',
    question: 'Berapakah nilai Quality-Adjusted Life Years (QALY) yang dihasilkan oleh terapi kemoterapi tersebut?',
    options: [
      { key: 'A', text: '3,0 QALY' },
      { key: 'B', text: '4,0 QALY' },
      { key: 'C', text: '0,75 QALY' },
      { key: 'D', text: '5,33 QALY' },
      { key: 'E', text: '1,5 QALY' }
    ],
    correctAnswer: 'A',
    explanation: 'Perhitungan QALY adalah perkalian antara pertambahan tahun usia hidup (Life Years) dengan bobot utilitas kualitas hidup (Utility Weight): QALY = 4 tahun x 0,75 = 3,0 QALY. Nilai 1,0 merepresentasikan kesehatan sempurna selama 1 tahun, sedangkan 0 merepresentasikan kematian.',
    clinicalReference: 'WHO Guide to Cost-Effectiveness Analysis & Pedoman Farmakoekonomi Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-551',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Dalam menetapkan apakah suatu intervensi obat baru dinilai "Cost-Effective" (hemat biaya dan layak didanai oleh BPJS Kesehatan), apoteker membandingkan nilai ICER dengan ambang batas Willingness-to-Pay (WTP threshold).',
    question: 'Berdasarkan pedoman Komite Penilaian Teknologi Kesehatan (KPTK/HTA) Kementerian Kesehatan RI dan WHO-CHOICE, berapakah rentang nilai ambang batas WTP threshold per QALY yang dianut di Indonesia?',
    options: [
      { key: 'A', text: '1 hingga 3 kali Produk Domestik Bruto (PDB / GDP) per kapita Indonesia' },
      { key: 'B', text: 'Tepat setara dengan UMR provinsi tertinggi' },
      { key: 'C', text: 'Maksimal 10 kali PDB per kapita' },
      { key: 'D', text: 'Tidak ada batasan rupiah' },
      { key: 'E', text: 'Setara dengan biaya rawat inap ICU 1 bulan' }
    ],
    correctAnswer: 'A',
    explanation: 'Sesuai Pedoman Kajian Farmakoekonomi Kemenkes RI dan rekomendasi WHO, suatu intervensi kesehatan diklasifikasikan sebagai: 1) Sangat Cost-Effective (highly cost-effective) jika ICER < 1 kali PDB per kapita; 2) Cost-Effective jika ICER berada di antara 1 sampai 3 kali PDB per kapita; dan 3) Not Cost-Effective jika ICER > 3 kali PDB per kapita.',
    clinicalReference: 'Pedoman Penilaian Teknologi Kesehatan (Health Technology Assessment) Kementerian Kesehatan RI',
    difficulty: 'Sedang'
  },
  {
    id: 'q-552',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Dalam model farmakoekonomi jangka panjang untuk penyakit kronis (seperti diabetes dan hipertensi yang dievaluasi selama kurun waktu 10 tahun), biaya dan manfaat kesehatan di masa depan harus disesuaikan dengan nilai saat ini (Present Value).',
    question: 'Berapakah tingkat diskonto tahunan (discounting rate) standar yang direkomendasikan dalam pedoman farmakoekonomi Kemenkes RI untuk mengonversi biaya dan outcome kesehatan di masa depan?',
    options: [
      { key: 'A', text: '3% per tahun' },
      { key: 'B', text: '10% per tahun' },
      { key: 'C', text: '0% (tanpa diskonto)' },
      { key: 'D', text: '25% per tahun' },
      { key: 'E', text: '50% per tahun' }
    ],
    correctAnswer: 'A',
    explanation: 'Sesuai Pedoman Kajian Farmakoekonomi Kemenkes RI dan standar internasional (NICE, ISPOR), tingkat diskonto (discounting rate) baku untuk biaya (costs) maupun manfaat kesehatan (outcomes/QALY) pada horizon waktu lebih dari 1 tahun adalah 3% per tahun (dengan rentang uji sensitivitas antara 0% hingga 5%).',
    clinicalReference: 'Pedoman Penerapan Kajian Farmakoekonomi Kemenkes RI & ISPOR Consolidated Health Economic Evaluation Reporting Standards (CHEERS)',
    difficulty: 'Sedang'
  },
  {
    id: 'q-553',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Rumah sakit ingin membandingkan biaya pengadaan dua merek sediaan injeksi Seftriakson generik yang diproduksi oleh dua industri farmasi bersertifikat CPOB. Kedua produk telah terbukti bioekivalen dan memiliki efikasi klinis serta profil keamanan yang identik.',
    question: 'Metode analisis farmakoekonomi manakah yang paling tepat digunakan untuk memilih produk yang paling menguntungkan rumah sakit?',
    options: [
      { key: 'A', text: 'Cost-Minimization Analysis (CMA)' },
      { key: 'B', text: 'Cost-Effectiveness Analysis (CEA)' },
      { key: 'C', text: 'Cost-Utility Analysis (CUA)' },
      { key: 'D', text: 'Cost-Benefit Analysis (CBA)' },
      { key: 'E', text: 'Cost-Illness Analysis (COI)' }
    ],
    correctAnswer: 'A',
    explanation: 'COST-MINIMIZATION ANALYSIS (CMA) adalah metode analisis farmakoekonomi yang digunakan saat efikasi klinis, keamanan, dan luaran terapi dari dua atau lebih intervensi obat terbukti SAMA PERSIS / EKUIVALEN. Karena outcome klinisnya identik, evaluator cukup membandingkan biaya total (total cost) dan memilih alternatif dengan biaya termurah.',
    clinicalReference: 'Pedoman Penerapan Kajian Farmakoekonomi Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-554',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Sebuah program vaksinasi HPV nasional untuk pencegahan kanker serviks dievaluasi oleh pemerintah. Seluruh biaya pengadaan vaksin dan biaya pelaksanaan dihitung dalam satuan Rupiah, dan seluruh manfaat penghematan biaya pengobatan kanker di masa depan juga dikonversi ke dalam satuan Rupiah.',
    question: 'Metode analisis farmakoekonomi apakah yang mengukur baik input biaya maupun output manfaat dalam satuan moneter (Rupiah)?',
    options: [
      { key: 'A', text: 'Cost-Benefit Analysis (CBA)' },
      { key: 'B', text: 'Cost-Effectiveness Analysis (CEA)' },
      { key: 'C', text: 'Cost-Utility Analysis (CUA)' },
      { key: 'D', text: 'Cost-Minimization Analysis (CMA)' },
      { key: 'E', text: 'Kajian Beban Penyakit' }
    ],
    correctAnswer: 'A',
    explanation: 'COST-BENEFIT ANALYSIS (CBA / Analisis Biaya-Manfaat) adalah metode evaluasi farmakoekonomi di mana BIAYA (costs) dan MANFAAT HASIL (benefits/outcomes) KEDUANYA DIUKUR DAN DINILAI DALAM SATUAN MATA UANG (Monetary Unit seperti Rupiah atau Dolar). Parameter kelayakannya dinyatakan dalam Benefit-to-Cost Ratio (BCR > 1) atau Net Present Value (NPV > 0).',
    clinicalReference: 'Pedoman Penerapan Kajian Farmakoekonomi Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-555',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Apoteker di Komite Farmasi dan Terapi (KFT) menyusun Analisis Dampak Anggaran (Budget Impact Analysis / BIA) sebelum menyetujui penambahan obat antikanker baru ke dalam formularium rumah sakit.',
    question: 'Apakah perbedaan utama antara Analisis Efektivitas Biaya (CEA) dengan Analisis Dampak Anggaran (BIA)?',
    options: [
      { key: 'A', text: 'CEA menilai value of money (efisiensi biaya terhadap luaran klinis jangka panjang), sedangkan BIA menilai keterjangkauan anggaran kas riil (affordability) institusi dalam horizon waktu pendek (1-5 tahun)' },
      { key: 'B', text: 'CEA hanya untuk obat generik, BIA hanya untuk obat paten' },
      { key: 'C', text: 'CEA dihitung dalam dolar, BIA dihitung dalam rupiah' },
      { key: 'D', text: 'BIA hanya menilai kepuasan pasien' },
      { key: 'E', text: 'Tidak ada perbedaan antara CEA dan BIA' }
    ],
    correctAnswer: 'A',
    explanation: 'CEA (Cost-Effectiveness Analysis) menjawab pertanyaan "Apakah obat ini memberikan nilai manfaat klinis yang sepadan dengan biayanya?" (value for money). Sebaliknya, BIA (Budget Impact Analysis) menjawab pertanyaan praktis "Berapa total dana kas riil yang harus dikeluarkan rumah sakit/BPJS jika obat ini diadopsi, dan apakah anggaran keuangan saat ini mampu membayarnya?" (affordability & financial feasibility).',
    clinicalReference: 'ISPOR Principles of Good Practice for Budget Impact Analysis & Kemenkes RI',
    difficulty: 'Sedang'
  },
  // =========================================================================
  // 📊 LOGISTIK, EOQ, ROP, SAFETY STOCK & HJA (q-556 s/d q-575)
  // =========================================================================
  {
    id: 'q-556',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Sebuah apotek membutuhkan Amoksisilin 500 mg sebanyak 10.000 box per tahun. Biaya setiap kali pemesanan ke PBF adalah Rp 50.000. Biaya penyimpanan per box per tahun adalah Rp 1.000.',
    question: 'Berapakah jumlah pemesanan ekonomis (Economic Order Quantity / EOQ) yang paling meminimalkan total biaya persediaan?',
    options: [
      { key: 'A', text: '1.000 box' },
      { key: 'B', text: '500 box' },
      { key: 'C', text: '2.000 box' },
      { key: 'D', text: '100 box' },
      { key: 'E', text: '5.000 box' }
    ],
    correctAnswer: 'A',
    explanation: 'Rumus EOQ = akar[(2 x D x S) / H], di mana D = Kebutuhan tahunan (10.000 box), S = Biaya per kali pesan (Rp 50.000), H = Biaya simpan per unit per tahun (Rp 1.000). EOQ = akar[(2 x 10.000 x 50.000) / 1.000] = akar[1.000.000.000 / 1.000] = akar[1.000.000] = 1.000 box.',
    clinicalReference: 'Manajemen Logistik Farmasi & Quick, J.D., Managing Drug Supply',
    difficulty: 'Mudah'
  },
  {
    id: 'q-557',
    domainId: 'manajemen',
    targetExam: 'all',
    vignette: 'Apotek menjual tablet Cefixime dengan rata-rata penjualan 20 box per hari. Waktu tunggu (Lead Time) pengiriman dari distributor adalah 4 hari. Apoteker menetapkan persediaan pengaman (Safety Stock) sebanyak 30 box.',
    question: 'Pada sisa jumlah stok berapakah apoteker harus melakukan pemesanan kembali (Reorder Point / ROP) ke PBF?',
    options: [
      { key: 'A', text: '110 box' },
      { key: 'B', text: '80 box' },
      { key: 'C', text: '50 box' },
      { key: 'D', text: '150 box' },
      { key: 'E', text: '60 box' }
    ],
    correctAnswer: 'A',
    explanation: 'Rumus Reorder Point (ROP) = (Pemakaian rata-rata per hari x Lead Time) + Safety Stock. ROP = (20 box/hari x 4 hari) + 30 box = 80 box + 30 box = 110 box. Jadi, saat sisa stok di apotek mencapai 110 box, apoteker harus segera membuat Surat Pesanan baru.',
    clinicalReference: 'Pedoman Pengelolaan Persediaan Farmasi di Apotek Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-558',
    domainId: 'manajemen',
    targetExam: 'all',
    vignette: 'Dalam sistem pengendalian persediaan Min-Max Stock Level di Instalasi Farmasi Rumah Sakit, pemakaian rata-rata Parasetamol infus adalah 50 botol/hari, Lead Time 3 hari, dan Safety Stock ditetapkan 100 botol. Periode pengadaan rutin adalah tiap 10 hari.',
    question: 'Berapakah Stok Minimum (Smin) dan Stok Maksimum (Smax) sediaan tersebut?',
    options: [
      { key: 'A', text: 'Stok Minimum = 250 botol; Stok Maksimum = 750 botol' },
      { key: 'B', text: 'Stok Minimum = 150 botol; Stok Maksimum = 500 botol' },
      { key: 'C', text: 'Stok Minimum = 100 botol; Stok Maksimum = 600 botol' },
      { key: 'D', text: 'Stok Minimum = 300 botol; Stok Maksimum = 1000 botol' },
      { key: 'E', text: 'Stok Minimum = 50 botol; Stok Maksimum = 200 botol' }
    ],
    correctAnswer: 'A',
    explanation: '1) Stok Minimum (Smin / ROP) = (Pemakaian harian x Lead Time) + Safety Stock = (50 x 3) + 100 = 150 + 100 = 250 botol. 2) Stok Maksimum (Smax) = Smin + (Pemakaian harian x Periode Pengadaan) = 250 + (50 x 10) = 250 + 500 = 750 botol.',
    clinicalReference: 'WHO Managing Drug Supply & Pedoman Manajemen Logistik Obat Kemenkes RI',
    difficulty: 'Sedang'
  },
  {
    id: 'q-559',
    domainId: 'manajemen',
    targetExam: 'all',
    vignette: 'Apotek membeli sirup kering Amoksisilin dari PBF dengan harga netto Rp 20.000 per botol (belum termasuk PPN 11%). Apotek menetapkan margin keuntungan yang diinginkan sebesar 20% terhadap harga beli netto.',
    question: 'Berapakah Harga Jual Apotek (HJA) per botol sirup tersebut?',
    options: [
      { key: 'A', text: 'Rp 26.640' },
      { key: 'B', text: 'Rp 24.000' },
      { key: 'C', text: 'Rp 22.200' },
      { key: 'D', text: 'Rp 25.000' },
      { key: 'E', text: 'Rp 28.000' }
    ],
    correctAnswer: 'A',
    explanation: 'Harga Pokok Pembelian (HPP) termasuk PPN = Harga Netto x 1,11 = Rp 20.000 x 1,11 = Rp 22.200. Dengan mark-up keuntungan 20%: HJA = HPP x (1 + 0,20) = Rp 22.200 x 1,20 = Rp 26.640 per botol.',
    clinicalReference: 'Manajemen Keuangan Apotek & Ketentuan Perpajakan RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-560',
    domainId: 'manajemen',
    targetExam: 'all',
    vignette: 'Sebuah apotek membukukan Harga Pokok Penjualan (HPP) tahunan sebesar Rp 730.000.000. Nilai persediaan rata-rata barang dagangan apotek yang tercatat adalah Rp 73.000.000.',
    question: 'Berapakah rasio perputaran persediaan (Turnover Ratio / TOR) dan Days Inventory Outstanding (DIO) apotek tersebut dalam setahun (asumsi 365 hari)?',
    options: [
      { key: 'A', text: 'TOR = 10 kali per tahun, DIO = 36,5 hari' },
      { key: 'B', text: 'TOR = 5 kali per tahun, DIO = 73 hari' },
      { key: 'C', text: 'TOR = 20 kali per tahun, DIO = 18 hari' },
      { key: 'D', text: 'TOR = 1 kali per tahun, DIO = 365 hari' },
      { key: 'E', text: 'TOR = 12 kali per tahun, DIO = 30 hari' }
    ],
    correctAnswer: 'A',
    explanation: 'Turnover Ratio (TOR) = HPP Tahunan / Nilai Rata-rata Persediaan = Rp 730.000.000 / Rp 73.000.000 = 10 kali per tahun. Days Inventory Outstanding (DIO) = 365 hari / TOR = 365 / 10 = 36,5 hari. Artinya, rata-rata stok barang di apotek berputar habis terjual menjadi uang tunai setiap 36,5 hari.',
    clinicalReference: 'Financial Management for Pharmacists & Manajemen Bisnis Farmasi',
    difficulty: 'Mudah'
  },
  {
    id: 'q-561',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Dalam penyusunan anggaran farmasi rumah sakit yang mengalami defisit pembiayaan, apoteker melakukan analisis kombinasi ABC-VEN.',
    question: 'Kelompok obat manakah yang menjadi prioritas PALING AKHIR (paling dihindari) untuk dipangkas atau dikurangi anggarannya?',
    options: [
      { key: 'A', text: 'Kelompok Vital (VA, VB, VC)' },
      { key: 'B', text: 'Kelompok Non-Esensial (NA, NB, NC)' },
      { key: 'C', text: 'Kelompok Esensial A (EA)' },
      { key: 'D', text: 'Kelompok Esensial C (EC)' },
      { key: 'E', text: 'Kelompok Non-Esensial A (NA)' }
    ],
    correctAnswer: 'A',
    explanation: 'Kelompok VITAL (V) adalah obat penyelamat nyawa (life-saving) seperti Epinefrin, Insulin, Antidotum, dan cairan resusitasi yang ketiadaannya dapat menyebabkan kematian pasien seketika. Pemangkasan anggaran selalu dimulai dari kategori Non-Esensial (NC -> NB -> NA), kemudian Esensial, dan KATEGORI VITAL (VA, VB, VC) TIDAK BOLEH DIHAPUS.',
    clinicalReference: 'Buku Pedoman Perencanaan dan Pengadaan Obat Publik Kemenkes RI & WHO Managing Drug Supply',
    difficulty: 'Mudah'
  },
  {
    id: 'q-562',
    domainId: 'manajemen',
    targetExam: 'all',
    vignette: 'Dalam pengarsipan resep di apotek sesuai Permenkes No. 73/2016, resep yang telah dilayani harus ditata dan disimpan secara tertib.',
    question: 'Berapa tahun jangka waktu minimal penyimpanan berkas resep di apotek sebelum boleh dimusnahkan secara resmi?',
    options: [
      { key: 'A', text: 'Minimal 5 tahun' },
      { key: 'B', text: 'Minimal 1 tahun' },
      { key: 'C', text: 'Minimal 3 tahun' },
      { key: 'D', text: 'Minimal 10 tahun' },
      { key: 'E', text: 'Minimal 20 tahun' }
    ],
    correctAnswer: 'A',
    explanation: 'Sesuai Peraturan Menteri Kesehatan RI No. 73 Tahun 2016 tentang Standar Pelayanan Kefarmasian di Apotek: Resep yang telah dilayani harus dirawat dan disimpan urut tanggal dan nomor urut resep MINIMAL 5 TAHUN. Setelah 5 tahun, resep dapat dimusnahkan oleh Apoteker Penanggung Jawab dengan membuat Berita Acara Pemusnahan Resep.',
    clinicalReference: 'Permenkes No. 73 Tahun 2016 Standar Pelayanan Kefarmasian di Apotek',
    difficulty: 'Mudah'
  },
  {
    id: 'q-563',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Apoteker Penanggung Jawab di PBF menerima surat pesanan obat dari Apotek yang memesan Tramadol kapsul, Triheksifenidil tablet, dan Klorpromazin tablet.',
    question: 'Berdasarkan Peraturan BPOM No. 10 Tahun 2019, jenis Surat Pesanan (SP) apakah yang harus digunakan untuk memesan obat-obat tersebut?',
    options: [
      { key: 'A', text: 'Surat Pesanan Obat-Obat Tertentu (OOT) khusus terpisah dari obat reguler' },
      { key: 'B', text: 'Surat Pesanan Narkotika Formulir N-9' },
      { key: 'C', text: 'Surat Pesanan Prekursor' },
      { key: 'D', text: 'Surat Pesanan Reguler Bebas' },
      { key: 'E', text: 'Cukup dipesan melalui pesan telepon lisan' }
    ],
    correctAnswer: 'A',
    explanation: 'Tramadol, Triheksifenidil, Klorpromazin, Amitriptilin, Haloperidol, dan Dekstrometorfan tergolong sebagai OBAT-OBAT TERTENTU (OOT) yang sering disalahgunakan. Sesuai Peraturan BPOM No. 10 Tahun 2019, pemesanan OOT wajib menggunakan SURAT PESANAN KHUSUS OOT tersendiri yang ditandatangani oleh Apoteker Penanggung Jawab (APJ) dengan SIPA aktif dan stempel basah sarana.',
    clinicalReference: 'Peraturan BPOM No. 10 Tahun 2019 tentang Pedoman Pengelolaan Obat-Obat Tertentu (OOT)',
    difficulty: 'Mudah'
  },
  {
    id: 'q-564',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Apoteker memesan Kodein tablet 10 mg dan Kodein tablet 20 mg ke PBF Kimia Farma (distributor tunggal narkotika).',
    question: 'Berapakah jumlah lembar Surat Pesanan Narkotika yang harus dibuat dan berapa jenis zat aktif narkotika yang boleh tercantum dalam satu lembar SP Narkotika?',
    options: [
      { key: 'A', text: 'Dibuat minimal 3 hingga 5 rangkap, dan 1 lembar SP HANYA BOLEH berisi 1 JENIS BENTUK/KEKUATAN SEDIAAN zat narkotika' },
      { key: 'B', text: 'Dibuat 1 rangkap dan boleh memuat 10 jenis narkotika berbeda' },
      { key: 'C', text: 'Dibuat 2 rangkap bebas campur dengan obat bebas' },
      { key: 'D', text: 'Cukup menggunakan email tanpa kertas' },
      { key: 'E', text: 'Boleh digabung dengan pesanan diazepam' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Permenkes No. 3 Tahun 2015: Surat Pesanan Narkotika (Formulir khusus N-9) dibuat sekurang-kurangnya 3-5 rangkap, dan SATU LEMBAR SP HANYA BOLEH DIGUNAKAN UNTUK MEMESAN SATU JENIS NARKOTIKA (satu kekuatan/bentuk sediaan saja, misalnya Kodein 10 mg saja pada 1 lembar SP, sedangkan Kodein 20 mg harus di lembar SP terpisah).',
    clinicalReference: 'Permenkes No. 3 Tahun 2015 tentang Pengelolaan Narkotika, Psikotropika, dan Prekursor Farmasi',
    difficulty: 'Mudah'
  },
  {
    id: 'q-565',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Dalam sistem pengadaan obat Rumah Sakit pemerintah, apoteker menggunakan sistem katalog elektronik (E-Katalog) LKPP untuk memesan perbekalan farmasi formularium nasional.',
    question: 'Metode pengadaan apakah yang diterapkan pada pemesanan obat melalui aplikasi E-Katalog LKPP?',
    options: [
      { key: 'A', text: 'E-Purchasing' },
      { key: 'B', text: 'Tender terbuka internasional' },
      { key: 'C', text: 'Pelelangan sederhana' },
      { key: 'D', text: 'Sayembara tertutup' },
      { key: 'E', text: 'Swakelola tipe 4' }
    ],
    correctAnswer: 'A',
    explanation: 'Pengadaan barang/jasa pemerintah melalui sistem katalog elektronik (E-Catalogue) yang dikelola oleh LKPP dilaksanakan dengan metode E-PURCHASING, di mana instansi pemerintah/fasyankes memilih langsung produk obat yang tercantum dalam e-katalog sesuai harga kontrak payung nasional tanpa melalui proses lelang ulang.',
    clinicalReference: 'Peraturan Presiden No. 12 Tahun 2021 tentang Pengadaan Barang/Jasa Pemerintah & Peraturan LKPP',
    difficulty: 'Mudah'
  },
  {
    id: 'q-566',
    domainId: 'manajemen',
    targetExam: 'all',
    vignette: 'Sebuah apotek baru memiliki data keuangan bulanan: Total Biaya Tetap (Fixed Cost) = Rp 15.000.000/bulan. Margin laba kotor terhadap penjualan rata-rata adalah 25%.',
    question: 'Berapakah omset pendapatan minimal yang harus dicapai apotek untuk mencapai Titik Impas (Break-Even Point / BEP Rupiah)?',
    options: [
      { key: 'A', text: 'Rp 60.000.000' },
      { key: 'B', text: 'Rp 30.000.000' },
      { key: 'C', text: 'Rp 15.000.000' },
      { key: 'D', text: 'Rp 75.000.000' },
      { key: 'E', text: 'Rp 45.000.000' }
    ],
    correctAnswer: 'A',
    explanation: 'Rumus BEP Rupiah = Biaya Tetap / Margin Kontribusi (%) = Rp 15.000.000 / 0,25 = Rp 60.000.000. Pada tingkat omset Rp 60.000.000 per bulan, laba kotor yang diperoleh adalah 25% x 60.000.000 = Rp 15.000.000, tepat menutupi seluruh Biaya Tetap (laba operasional = 0).',
    clinicalReference: 'Manajemen Keuangan Apotek & Akuntansi Farmasi',
    difficulty: 'Mudah'
  },
  {
    id: 'q-567',
    domainId: 'manajemen',
    targetExam: 'all',
    vignette: 'Dalam sistem penataan obat di gudang farmasi, apoteker menerapkan kombinasi prinsip FIFO (First In First Out) dan FEFO (First Expired First Out).',
    question: 'Manakah prioritas pengeluaran obat yang benar jika terdapat batch baru datang dengan tanggal kedaluwarsa lebih dekat (Juni 2027) dibandingkan batch lama yang baru diterima bulan lalu dengan kedaluwarsa Desember 2027?',
    options: [
      { key: 'A', text: 'Keluarkan batch yang kedaluwarsa Juni 2027 terlebih dahulu (prioritaskan prinsip FEFO di atas FIFO)' },
      { key: 'B', text: 'Keluarkan batch lama yang datang lebih dulu (FIFO) tanpa melihat tanggal kedaluwarsa' },
      { key: 'C', text: 'Keluarkan kedua batch secara acak' },
      { key: 'D', text: 'Tahan batch yang kedaluwarsa lebih dekat di gudang' },
      { key: 'E', text: 'Kembalikan batch baru ke distributor' }
    ],
    correctAnswer: 'A',
    explanation: 'Dalam manajemen logistik farmasi berstandar CDOB dan GPP: Prinsip FEFO (First Expired First Out) SELALU MENDAPAT PRIORITAS LEBIH TINGGI daripada FIFO (First In First Out). Barang yang memiliki tanggal kedaluwarsa lebih cepat HARUS dikeluarkan terlebih dahulu ke pasien untuk mencegah terjadinya obat kedaluwarsa (expired date) di rak penyimpanan.',
    clinicalReference: 'Permenkes No. 72 Tahun 2016 & Pedoman CDOB BPOM RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-568',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Apoteker di rumah sakit melakukan evaluasi kepatuhan terhadap Formularium Rumah Sakit. Dari 1.000 resep yang dilayani selama 1 bulan, ditemukan 950 resep yang obatnya sesuai dengan daftar Formularium Rumah Sakit.',
    question: 'Berapakah persentase tingkat kepatuhan (conformance rate) peresepan terhadap formularium rumah sakit?',
    options: [
      { key: 'A', text: '95%' },
      { key: 'B', text: '90%' },
      { key: 'C', text: '85%' },
      { key: 'D', text: '100%' },
      { key: 'E', text: '50%' }
    ],
    correctAnswer: 'A',
    explanation: 'Tingkat kepatuhan formularium = (Jumlah resep yang sesuai formularium / Total resep yang dievaluasi) x 100% = (950 / 1.000) x 100% = 95%. Standar Pelayanan Minimal (SPM) rumah sakit umumnya menargetkan kepatuhan terhadap formularium >= 80% hingga 90%.',
    clinicalReference: 'Standar Pelayanan Minimal Rumah Sakit Kemenkes RI & Permenkes No. 72/2016',
    difficulty: 'Mudah'
  },
  {
    id: 'q-569',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Sebuah apotek melayani resep racikan sirup kering sefadroksil yang direkonstitusi dengan air matang oleh TTK di bawah pengawasan Apoteker. Pasien bertanya berapa lama sirup tersebut boleh disimpan di rumah.',
    question: 'Berapakah Beyond Use Date (BUD) baku untuk sediaan antibiotik suspensi rekonstitusi oral (seperti Sefadroksil atau Amoksisilin) sesuai standar USP <795> dan Farmakope?',
    options: [
      { key: 'A', text: 'Maksimal 7 hari pada suhu kamar, atau hingga 14 hari bila disimpan di lemari pendingin (2°C - 8°C)' },
      { key: 'B', text: 'Hingga 2 tahun sesuai tanggal kedaluwarsa serbuk kering sebelum dilarutkan' },
      { key: 'C', text: 'Maksimal 24 jam' },
      { key: 'D', text: 'Maksimal 30 hari' },
      { key: 'E', text: 'Maksimal 6 bulan' }
    ],
    correctAnswer: 'A',
    explanation: 'Setelah serbuk antibiotik kering direkonstitusi dengan air, molekul cincin beta-laktam rentan mengalami hidrolisis degradasi kimiawi dan risiko kontaminasi mikroba. Berdasarkan USP General Chapter <795> dan etiket pabrik: Suspensi oral rekonstitusi memiliki BUD maksimal 7 HARI pada suhu kamar terkendali (atau 14 HARI jika disimpan di lemari pendingin 2°C - 8°C). Sisa obat harus dibuang setelah batas waktu tersebut.',
    clinicalReference: 'USP <795> Pharmaceutical Compounding - Nonsterile Preparations & Farmakope Indonesia VI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-570',
    domainId: 'manajemen',
    targetExam: 'all',
    vignette: 'Dalam sistem pengelompokan penyimpanan obat di instalasi farmasi, apoteker menata obat berdasarkan kelas terapi farmakologi dan alfabetis.',
    question: 'Penataan manakah yang WAJIB diterapkan khusus untuk obat-obat berisiko tinggi (High Alert Medications) seperti Elektrolit Konsentrat (KCl 7,46%, NaCl 3%) dan Heparin?',
    options: [
      { key: 'A', text: 'Diberi stiker penanda merah menyala "HIGH ALERT", disimpan di lemari/tempat terpisah dengan akses terbatas, dan tidak boleh disimpan di ruang rawat inap biasa kecuali di ICU/UGD' },
      { key: 'B', text: 'Diletakkan bercampur dengan larutan infus biasa di ruang rawat' },
      { key: 'C', text: 'Disimpan di etalase depan apotek' },
      { key: 'D', text: 'Disimpan tanpa label identifikasi' },
      { key: 'E', text: 'Dapat diambil bebas oleh siapa saja tanpa verifikasi' }
    ],
    correctAnswer: 'A',
    explanation: 'Sesuai Standar Keselamatan Pasien (Patient Safety) Kemenkes dan Joint Commission International (JCI): Obat-obatan High Alert (termasuk Elektrolit Konsentrat tinggi seperti KCl 7,46% dan NaCl 3%) WAJIB diberi label merah "HIGH ALERT", disimpan di lokasi terpisah dengan akses terkontrol, dan DILARANG KERAS disimpan sebagai persediaan ruang rawat inap umum (hanya boleh di Farmasi, ICU, dan IGD dengan verifikasi ganda/double check).',
    clinicalReference: 'Permenkes No. 11 Tahun 2017 tentang Keselamatan Pasien & ISMP High-Alert Medications Guidelines',
    difficulty: 'Mudah'
  },
  {
    id: 'q-571',
    domainId: 'manajemen',
    targetExam: 'all',
    vignette: 'Apoteker mendapati penataan obat asam mefenamat 500 mg tablet dan asam traneksamat 500 mg tablet diletakkan bersebelahan di rak obat karena urutan abjad yang sama, sehingga berpotensi memicu kejadian salah ambil obat (Look-Alike Sound-Alike / LASA).',
    question: 'Tindakan pencegahan medication error apakah yang wajib segera dilakukan apoteker?',
    options: [
      { key: 'A', text: 'Beri stiker penanda "LASA", pisahkan penataannya dengan menyelingi minimal 2 obat lain di antara keduanya, dan gunakan penulisan Tall Man Lettering (asam MEFENamat vs asam TRANEKSamat)' },
      { key: 'B', text: 'Biarkan tetap bersebelahan' },
      { key: 'C', text: 'Hapus salah satu obat dari formularium' },
      { key: 'D', text: 'Simpan kedua obat di lemari pendingin' },
      { key: 'E', text: 'Kocok kedua botol bersamaan' }
    ],
    correctAnswer: 'A',
    explanation: 'Strategi penanganan obat LASA/NORUM standar ISMP: 1) Beri label/stiker mencolok "LASA", 2) JANGAN diletakkan berdampingan (beri jarak atau selingi dengan obat lain), dan 3) Gunakan teknik TALL MAN LETTERING pada label nama obat (memperbesar huruf kapital pada bagian suku kata yang membedakan, misal: asam MEFENamat vs asam TRANEKSamat) untuk meningkatkan kewaspadaan visual petugas saat dispensing.',
    clinicalReference: 'Institute for Safe Medication Practices (ISMP) Look-Alike Drug Name Sets & Permenkes No. 72/2016',
    difficulty: 'Mudah'
  },
  {
    id: 'q-572',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Dalam sistem distribusi obat untuk pasien rawat inap di rumah sakit, instalasi farmasi menerapkan sistem Unit Dose Dispensing (UDD) menggantikan sistem Floor Stock tradisional.',
    question: 'Apakah keunggulan utama penerapan sistem distribusi obat Unit Dose Dispensing (UDD) dibandingkan sistem floor stock?',
    options: [
      { key: 'A', text: 'Menurunkan angka kesalahan pemberian obat (medication error) hingga di bawah 1%, menghindari penumpukan obat di bangsal, dan efisiensi biaya pasien karena obat hanya ditagih sesuai yang diminum per waktu konsumsi' },
      { key: 'B', text: 'Meningkatkan stok obat kadaluwarsa di ruang perawat' },
      { key: 'C', text: 'Membuat pasien membayar seluruh obat di muka' },
      { key: 'D', text: 'Mengurangi beban kerja apoteker' },
      { key: 'E', text: 'Meniadakan resep dokter' }
    ],
    correctAnswer: 'A',
    explanation: 'Sistem Unit Dose Dispensing (UDD) adalah sistem distribusi obat di mana obat dikemas dalam wadah dosis tunggal siap pakai untuk satu kali waktu pemberian (misal untuk pagi, siang, atau malam) dan diserahkan kepada perawat tepat sebelum waktu pemberian. Sistem ini terbukti menurunkan medication error secara drastis, meningkatkan pengawasan apoteker terhadap interaksi obat, dan mencegah pemborosan finansial pasien.',
    clinicalReference: 'ASHP Guidelines on Pharmacy-Prepared Single-Unit and Unit-Dose Packages of Drugs & Permenkes No. 72/2016',
    difficulty: 'Mudah'
  },
  {
    id: 'q-573',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Sebuah apotek memiliki modal awal persediaan Rp 100.000.000. Laba bersih setelah pajak dalam 1 tahun buku tercatat sebesar Rp 25.000.000.',
    question: 'Berapakah nilai Return on Investment (ROI) apotek tersebut?',
    options: [
      { key: 'A', text: '25%' },
      { key: 'B', text: '10%' },
      { key: 'C', text: '50%' },
      { key: 'D', text: '2,5%' },
      { key: 'E', text: '40%' }
    ],
    correctAnswer: 'A',
    explanation: 'Rumus Return on Investment (ROI) = (Laba Bersih / Total Investasi Modal) x 100% = (Rp 25.000.000 / Rp 100.000.000) x 100% = 25%. Nilai ROI 25% menunjukkan bahwa setiap Rp 100 modal yang diinvestasikan menghasilkan keuntungan bersih sebesar Rp 25 per tahun.',
    clinicalReference: 'Financial Management for Pharmacists & Manajemen Bisnis Apotek',
    difficulty: 'Mudah'
  },
  {
    id: 'q-574',
    domainId: 'manajemen',
    targetExam: 'all',
    vignette: 'Dalam audit kepatuhan pengelolaan limbah di apotek, ditemukan sisa antibiotik sirup yang rusak. TTK berniat membuang cairan sirup tersebut langsung ke saluran wastafel pembuangan air mengalir.',
    question: 'Mengapa membuang limbah antibiotik secara langsung ke saluran air got/drainase lingkungan dilarang keras?',
    options: [
      { key: 'A', text: 'Dapat mencemari air tanah dan memicu seleksi mutasi resistensi antimikroba (Antimicrobial Resistance / AMR) pada bakteri lingkungan' },
      { key: 'B', text: 'Menyebabkan pipa saluran air tersumbat kristal' },
      { key: 'C', text: 'Mengubah warna air menjadi keruh selamanya' },
      { key: 'D', text: 'Menimbulkan bau harum berlebih' },
      { key: 'E', text: 'Menghilangkan lumut saluran air' }
    ],
    correctAnswer: 'A',
    explanation: 'Pembuangan residu antibiotik langsung ke saluran air lingkungan memaparkan mikroorganisme tanah dan air terhadap konsentrasi sub-inhibisi antibiotik, yang mempercepat mutasi genetik dan transfer plasmid resistensi pada bakteri lingkungan (memicu timbulnya kuman superbug resisten AMR). Limbah cair obat harus diolah melalui Instalasi Pengolahan Air Limbah (IPAL) berizin atau diserahkan ke pengolah limbah B3 berlisensi.',
    clinicalReference: 'WHO Guidance on Antimicrobial Resistance and Environmental Waste Management & PermenLHK',
    difficulty: 'Mudah'
  },
  {
    id: 'q-575',
    domainId: 'manajemen',
    targetExam: 'all',
    vignette: 'Sebuah apotek mengevaluasi kinerja pelayanan resep dengan mengukur Waktu Tunggu Pelayanan Resep (Resep Non-Racikan dan Resep Racikan) sesuai Standar Pelayanan Minimal (SPM) Kemenkes RI.',
    question: 'Berapakah standar baku waktu tunggu maksimal untuk pelayanan resep non-racikan dan resep racikan di instalasi farmasi?',
    options: [
      { key: 'A', text: 'Resep non-racikan <= 30 menit; Resep racikan <= 60 menit' },
      { key: 'B', text: 'Resep non-racikan <= 5 menit; Resep racikan <= 10 menit' },
      { key: 'C', text: 'Resep non-racikan <= 2 jam; Resep racikan <= 4 jam' },
      { key: 'D', text: 'Resep non-racikan <= 1 hari; Resep racikan <= 2 hari' },
      { key: 'E', text: 'Tidak ada batasan waktu tunggu' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Keputusan Menteri Kesehatan RI No. 129/Menkes/SK/II/2008 tentang Standar Pelayanan Minimal (SPM) Rumah Sakit: Waktu tunggu pelayanan resep obat jadi (non-racikan) adalah <= 30 MENIT, sedangkan waktu tunggu pelayanan resep obat racikan adalah <= 60 MENIT.',
    clinicalReference: 'Kepmenkes No. 129/Menkes/SK/II/2008 tentang SPM Rumah Sakit Bidang Farmasi',
    difficulty: 'Mudah'
  },
  // =========================================================================
  // ⚖️ REGULASI, ETIKA & HUKUM KEFARMASIAN (q-576 s/d q-593)
  // =========================================================================
  {
    id: 'q-576',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Apoteker Penanggung Jawab Apotek (APA) akan mengajukan perpanjangan Surat Izin Praktik Apoteker (SIPA) ke Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu (DPMPTSP) setempat.',
    question: 'Berapakah jumlah maksimal fasilitas kefarmasian yang diizinkan untuk memiliki SIPA bagi seorang Apoteker sesuai peraturan perundang-undangan kefarmasian di Indonesia?',
    options: [
      { key: 'A', text: 'Maksimal pada 3 (tiga) fasilitas pelayanan kefarmasian' },
      { key: 'B', text: 'Hanya boleh pada 1 (satu) fasilitas saja' },
      { key: 'C', text: 'Maksimal pada 5 fasilitas' },
      { key: 'D', text: 'Tidak terbatas asalkan mampu hadir' },
      { key: 'E', text: 'Maksimal 2 fasilitas' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Permenkes No. 889/MENKES/PER/V/2011 dan Permenkes No. 31 Tahun 2016 tentang Perubahan atas Permenkes No. 889/2011: Surat Izin Praktik Apoteker (SIPA) bagi Apoteker di fasilitas pelayanan kefarmasian dapat diberikan untuk paling banyak 3 (tiga) tempat fasilitas pelayanan kefarmasian (SIPA Kesatu, SIPA Kedua, dan SIPA Ketiga).',
    clinicalReference: 'Permenkes No. 31 Tahun 2016 tentang Registrasi, Izin Praktik, dan Izin Kerja Tenaga Kefarmasian',
    difficulty: 'Mudah'
  },
  {
    id: 'q-577',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Seorang Apoteker Penanggung Jawab di Industri Farmasi menduduki posisi sebagai Kepala Bagian Manajemen Mutu (Quality Assurance / QA).',
    question: 'Sesuai Pedoman CPOB, tiga posisi kunci personil industri farmasi manakah yang WAJIB dijabat oleh seorang Apoteker purna waktu (full-time) yang independen satu sama lain?',
    options: [
      { key: 'A', text: 'Kepala Bagian Produksi, Kepala Bagian Pengawasan Mutu (QC), dan Kepala Bagian Pemastian Mutu (QA)' },
      { key: 'B', text: 'Kepala Bagian Pemasaran, Kepala Keuangan, dan Kepala Gudang' },
      { key: 'C', text: 'Direktur Utama, Manajer HRD, dan Kepala Satpam' },
      { key: 'D', text: 'Kepala IT, Kepala Pembelian, dan Kepala Logistik' },
      { key: 'E', text: 'Kepala Riset, Kepala Legal, dan Kepala Ekspor' }
    ],
    correctAnswer: 'A',
    explanation: 'Pedoman CPOB BPOM Bab 2 (Personalia) secara mutlak menetapkan bahwa personil kunci yang bertanggung jawab mengelola industri farmasi harus dijabat oleh APOTEKER PURNA WAKTU yang independen dan tidak saling membawahi, yaitu: 1) Kepala Bagian Produksi, 2) Kepala Bagian Pengawasan Mutu (Quality Control / QC), dan 3) Kepala Bagian Pemastian Mutu (Quality Assurance / QA).',
    clinicalReference: 'Pedoman Cara Pembuatan Obat yang Baik (CPOB) Edisi 2018 / 2024 BPOM RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-578',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Dalam penyusunan SOP Pelayanan Informasi Obat (PIO) di apotek, apoteker menetapkan standar dokumentasi kegiatan konseling pasien.',
    question: 'Kriteria pasien prioritas manakah yang WAJIB mendapatkan konseling mendalam oleh Apoteker sesuai Permenkes No. 73/2016?',
    options: [
      { key: 'A', text: 'Pasien dengan penyakit kronis (DM, Hipertensi, TB), pasien geriatri/pediatri, pasien polifarmasi (≥ 5 obat), pasien yang menerima obat dengan indeks terapi sempit, dan pasien dengan riwayat kepatuhan rendah' },
      { key: 'B', text: 'Semua pembeli permen dan sabun' },
      { key: 'C', text: 'Hanya pasien yang meminta brosur' },
      { key: 'D', text: 'Hanya pasien yang membeli obat bebas terbatas' },
      { key: 'E', text: 'Pasien yang terburu-buru pulang' }
    ],
    correctAnswer: 'A',
    explanation: 'Permenkes No. 73/2016 menetapkan kriteria pasien prioritas konseling apoteker: 1) Pasien kondisi khusus (pediatri, geriatri, ibu hamil/menyusui), 2) Pasien terapi penyakit kronis jangka panjang, 3) Pasien dengan obat indeks terapi sempit (Digoksin, Fenitoin, Teofilin, Warfarin), 4) Pasien polifarmasi yang menerima banyak obat, dan 5) Pasien dengan tingkat kepatuhan rendah.',
    clinicalReference: 'Permenkes No. 73 Tahun 2016 tentang Standar Pelayanan Kefarmasian di Apotek',
    difficulty: 'Mudah'
  },
  {
    id: 'q-579',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Apoteker di apotek menerima resep dokter spesialis jiwa yang berisi tablet Alprazolam 1 mg sebanyak 30 tablet untuk pasien gangguan panik. Pasien ingin menebus setengahnya terlebih dahulu (15 tablet) karena keterbatasan uang.',
    question: 'Tindakan profesional dan administratif apakah yang harus dilakukan apoteker terkait pemberian salinan resep (copy resep) psikotropika?',
    options: [
      { key: 'A', text: 'Membuatkan Salinan Resep resmi bertanda tangan apoteker dengan tanda "det 15" dan mengedukasi pasien bahwa sisa obat HANYA BOLEH ditebus di apotek yang sama' },
      { key: 'B', text: 'Menolak penebusan sebagian karena psikotropika harus ditebus lunas' },
      { key: 'C', text: 'Membuatkan salinan resep dan membebaskan pasien menebus di apotek mana saja' },
      { key: 'D', text: 'Mengganti sisa obat dengan vitamin' },
      { key: 'E', text: 'Memberikan obat tanpa etiket' }
    ],
    correctAnswer: 'A',
    explanation: 'Sesuai Permenkes No. 3 Tahun 2015: Salinan resep untuk Narkotika dan Psikotropika yang baru ditebus sebagian HANYA BOLEH DITEBUS KEMBALI DI APOTEK YANG MENYIMPAN RESEP ASLINYA. Apotek lain dilarang melayani salinan resep narkotika/psikotropika kecuali salinan resep tersebut telah divalidasi ke apotek awal penyimpan resep asli untuk mencegah penyalahgunaan berulang (doctor/pharmacy shopping).',
    clinicalReference: 'Permenkes No. 3 Tahun 2015 tentang Pengelolaan Narkotika, Psikotropika, dan Prekursor Farmasi',
    difficulty: 'Mudah'
  },
  {
    id: 'q-580',
    domainId: 'manajemen',
    targetExam: 'all',
    vignette: 'Apotek melakukan pelaporan bulanan pemasukan dan penggunaan sediaan Narkotika dan Psikotropika secara elektronik melalui sistem resmi Kementerian Kesehatan RI.',
    question: 'Nama aplikasi portal sistem pelaporan narkotika dan psikotropika resmi berbasis web tersebut adalah:',
    options: [
      { key: 'A', text: 'SIPNAP (Sistem Pelaporan Narkotika dan Psikotropika)' },
      { key: 'B', text: 'SIMONA' },
      { key: 'C', text: 'SIMRS' },
      { key: 'D', text: 'SIK-DA' },
      { key: 'E', text: 'OSS RBA' }
    ],
    correctAnswer: 'A',
    explanation: 'SIPNAP (Sistem Pelaporan Narkotika dan Psikotropika) adalah aplikasi pelaporan resmi berbasis daring yang dikembangkan Kementerian Kesehatan RI. Apotek, Instalasi Farmasi RS, dan Puskesmas wajib melaporkan penerimaan dan penyaluran/penggunaan narkotika dan psikotropika setiap bulan paling lambat tanggal 10 bulan berikutnya melalui portal SIPNAP.',
    clinicalReference: 'Permenkes No. 3 Tahun 2015 & Surat Edaran Dirjen Farmalkes Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-581',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Apoteker di rumah sakit melakukan rekonsiliasi obat (Medication Reconciliation) saat pasien lansia dipindahkan dari Ruang Rawat Intensif (ICU) ke Ruang Rawat Inap Biasa (Bangsal).',
    question: 'Apakah tujuan utama dilakukannya pelayanan farmasi klinis Rekonsiliasi Obat pada titik transisi pelayanan (care transition)?',
    options: [
      { key: 'A', text: 'Mencegah terjadinya diskrepansi obat (perbedaan tidak disengaja antara rejimen obat lama dan baru), seperti duplikasi terapi, kelalaian obat (omission), atau dosis yang tidak tepat saat transisi ruang rawat' },
      { key: 'B', text: 'Menghitung total tagihan kasir pasien' },
      { key: 'C', text: 'Menghabiskan stok obat di lemari perawat' },
      { key: 'D', text: 'Mempercepat pasien pulang tanpa izin dokter' },
      { key: 'E', text: 'Mengurangi jumlah resep dokter' }
    ],
    correctAnswer: 'A',
    explanation: 'Rekonsiliasi Obat adalah proses membandingkan instruksi pengobatan pasien dengan obat yang telah diperoleh pasien sebelumnya pada setiap perpindahan/transisi asuhan pasien (saat masuk RS, pindah bangsal/ICU, dan saat keluar RS). Tujuannya adalah mendeteksi dan mencegah diskrepansi yang tidak disengaja (unintended discrepancies) yang merupakan sumber terbesar medication error di rumah sakit.',
    clinicalReference: 'The High 5s Project: Action on Patient Safety - Medication Reconciliation & Permenkes No. 72/2016',
    difficulty: 'Mudah'
  },
  {
    id: 'q-582',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Dalam pelaporan efek samping obat, apoteker di rumah sakit mendapati seorang pasien mengalami eritema multiforme setelah meminum Karbamazepin. Apoteker mengisi formulir resmi pelaporan MESO nasional.',
    question: 'Warna formulir resmi Pelaporan Efek Samping Obat (ESO / Farmakovigilans) nasional yang dikelola oleh BPOM RI adalah:',
    options: [
      { key: 'A', text: 'Formulir Kuning (Yellow Form)' },
      { key: 'B', text: 'Formulir Merah' },
      { key: 'C', text: 'Formulir Hijau' },
      { key: 'D', text: 'Formulir Biru' },
      { key: 'E', text: 'Formulir Putih' }
    ],
    correctAnswer: 'A',
    explanation: 'Pelaporan Efek Samping Obat (ESO) / Farmakovigilans spontan di Indonesia menggunakan FORMULIR KUNING (Yellow Form) BPOM RI (atau sistem e-MESO BPOM daring). Pelaporan ini bertujuan memantau profil keamanan obat pasca-pemasaran (post-market surveillance).',
    clinicalReference: 'Pedoman Pemantauan Efek Samping Obat (MESO) Bagi Tenaga Kesehatan BPOM RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-583',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Apoteker mengevaluasi kausalitas hubungan antara penggunaan antibiotik seftriakson dengan timbulnya ruam anafilaksis pada pasien menggunakan kuesioner baku Algoritma Naranjo.',
    question: 'Rentang skor total berapakah pada Algoritma Naranjo yang menyatakan bahwa efek samping obat tersebut masuk dalam kategori "Pasti / Sangat Mungkin" (Definite)?',
    options: [
      { key: 'A', text: 'Skor total ≥ 9' },
      { key: 'B', text: 'Skor total 5 hingga 8' },
      { key: 'C', text: 'Skor total 1 hingga 4' },
      { key: 'D', text: 'Skor total ≤ 0' },
      { key: 'E', text: 'Skor total 50' }
    ],
    correctAnswer: 'A',
    explanation: 'Interpretasi skor Kausalitas Algoritma Naranjo untuk Adverse Drug Reactions (ADR): Skor >= 9 = Definite (Pasti); Skor 5 - 8 = Probable (Besar Kemungkinan); Skor 1 - 4 = Possible (Mungkin); Skor <= 0 = Doubtful (Ragu-ragu / Tidak Terkait).',
    clinicalReference: 'Naranjo CA, et al. A method for estimating the probability of adverse drug reactions. Clin Pharmacol Ther. 1981',
    difficulty: 'Sedang'
  },
  {
    id: 'q-584',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Seorang Apoteker mendirikan Apotek baru dan mengurus perizinan berusaha berbasis risiko melalui portal Online Single Submission (OSS).',
    question: 'Berdasarkan PP No. 5 Tahun 2021 tentang Penyelenggaraan Perizinan Berusaha Berbasis Risiko, apakah tingkat risiko usaha untuk sarana Apotek?',
    options: [
      { key: 'A', text: 'Tingkat Risiko Menengah Tinggi' },
      { key: 'B', text: 'Tingkat Risiko Rendah' },
      { key: 'C', text: 'Tingkat Risiko Menengah Rendah' },
      { key: 'D', text: 'Tingkat Risiko Tinggi murni' },
      { key: 'E', text: 'Tanpa risiko usaha' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Peraturan Pemerintah No. 5 Tahun 2021 dan Permenkes No. 14 Tahun 2021 tentang Standar Kegiatan Usaha dan Produk pada Penyelenggaraan Perizinan Berusaha Berbasis Risiko Sektor Kesehatan: Usaha Apotek (KBLI 47721) diklasifikasikan ke dalam TINGKAT RISIKO MENENGAH TINGGI, yang memerlukan NIB (Nomor Induk Berusaha) dan Sertifikat Standar yang telah diverifikasi oleh Dinas Kesehatan.',
    clinicalReference: 'PP No. 5 Tahun 2021 & Permenkes No. 14 Tahun 2021 tentang Standar Usaha Kefarmasian',
    difficulty: 'Sedang'
  },
  {
    id: 'q-585',
    domainId: 'manajemen',
    targetExam: 'all',
    vignette: 'Dalam penerimaan barang di Apotek dari PBF, seorang TTK memeriksa kesesuaian fisik kiriman barang terhadap Faktur Pembelian.',
    question: 'Hal-hal apa sajakah yang wajib diverifikasi dan dicocokkan secara teliti oleh penerima barang?',
    options: [
      { key: 'A', text: 'Kesesuaian nama sediaan, bentuk sediaan, kekuatan/potensi, jumlah kuantitas fisik, nomor bets (batch number), tanggal kedaluwarsa (expired date), serta keutuhan segel dan fisik kemasan' },
      { key: 'B', text: 'Hanya mencocokkan jumlah koli kardus luar' },
      { key: 'C', text: 'Hanya melihat warna kemasan' },
      { key: 'D', text: 'Mencicipi rasa obat di dalam botol' },
      { key: 'E', text: 'Cukup menandatangani faktur tanpa membuka barang' }
    ],
    correctAnswer: 'A',
    explanation: 'Sesuai Pedoman CDOB dan Permenkes No. 73/2016: Penerimaan barang perbekalan farmasi harus memastikan kesesuaian fisik terhadap faktur dan surat pesanan: Nama produk, bentuk dan kekuatan sediaan, jumlah unit kemasan, kondisi fisik wadah dan segel (tidak bocor, tidak penyok), nomor bets, dan tanggal kedaluwarsa. Jika ada ketidaksesuaian, barang wajib diretur atau dikarantina.',
    clinicalReference: 'Petunjuk Operasional Penerapan CDOB BPOM RI & Permenkes No. 73/2016',
    difficulty: 'Mudah'
  },
  {
    id: 'q-586',
    domainId: 'manajemen',
    targetExam: 'all',
    vignette: 'Apoteker di apotek sedang melakukan proses pemusnahan obat bebas dan obat keras non-narkotika/psikotropika yang telah kedaluwarsa.',
    question: 'Siapakah saksi yang disyaratkan dalam pemusnahan obat selain narkotika/psikotropika di apotek sesuai Permenkes No. 73/2016?',
    options: [
      { key: 'A', text: 'Disaksikan oleh Tenaga Teknis Kefarmasian (TTK) atau tenaga kefarmasian lain yang memiliki surat izin praktik di apotek tersebut' },
      { key: 'B', text: 'Wajib mengundang kepolisian dan kejaksaan' },
      { key: 'C', text: 'Wajib disaksikan oleh kepala desa' },
      { key: 'D', text: 'Disaksikan oleh seluruh pasien yang datang' },
      { key: 'E', text: 'Tidak perlu ada saksi sama sekali' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Permenkes No. 73 Tahun 2016 Bab II: Pemusnahan obat selain narkotika dan psikotropika di apotek dilakukan oleh Apoteker Penanggung Jawab dan DISAKSIKAN OLEH TENAGA KEFARMASIAN LAIN (Tenaga Teknis Kefarmasian / TTK) yang memiliki surat izin praktik, serta dibuatkan Berita Acara Pemusnahan dan dilaporkan ke Dinas Kesehatan Kabupaten/Kota dan Balai POM setempat.',
    clinicalReference: 'Permenkes No. 73 Tahun 2016 tentang Standar Pelayanan Kefarmasian di Apotek',
    difficulty: 'Mudah'
  },
  {
    id: 'q-587',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Seorang Apoteker baru lulus akan mengurus Surat Tanda Registrasi Apoteker (STRA) sebagai bukti tertulis yang diberikan oleh konsil tenaga kesehatan.',
    question: 'Berdasarkan Undang-Undang Kesehatan No. 17 Tahun 2023, berapakah masa berlaku Surat Tanda Registrasi (STR) tenaga kesehatan di Indonesia saat ini?',
    options: [
      { key: 'A', text: 'Berlaku seumur hidup' },
      { key: 'B', text: 'Berlaku selama 5 tahun' },
      { key: 'C', text: 'Berlaku selama 3 tahun' },
      { key: 'D', text: 'Berlaku selama 1 tahun' },
      { key: 'E', text: 'Berlaku selama 10 tahun' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Undang-Undang Republik Indonesia Nomor 17 Tahun 2023 tentang Kesehatan Pasal 263 ayat (2): Surat Tanda Registrasi (STR) bagi Tenaga Medis dan Tenaga Kesehatan (termasuk Apoteker dan TTK) DINYATAKAN BERLAKU SEUMUR HIDUP (berbeda dari aturan sebelumnya yang berlaku 5 tahun). Namun, Surat Izin Praktik (SIP/SIPA) tetap berlaku selama 5 tahun dan dapat diperpanjang melalui pemenuhan kecukupan Satuan Kredit Profesi (SKP).',
    clinicalReference: 'Undang-Undang Republik Indonesia No. 17 Tahun 2023 tentang Kesehatan',
    difficulty: 'Mudah'
  },
  {
    id: 'q-588',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Dalam pengadaan sediaan obat prekursor farmasi (seperti tablet Ephedrine HCl dan Pseudoephedrine HCl), apotek memesan ke PBF distributor resmi.',
    question: 'Ketentuan khusus apakah yang berlaku untuk Surat Pesanan (SP) Prekursor Farmasi menurut Permenkes No. 3 Tahun 2015?',
    options: [
      { key: 'A', text: 'Surat Pesanan Prekursor dibuat terpisah dari obat lain, ditandatangani oleh Apoteker Penanggung Jawab dengan mencantumkan SIPA, dan boleh memuat lebih dari 1 jenis sediaan prekursor' },
      { key: 'B', text: 'Hanya boleh memuat 1 jenis obat seperti narkotika' },
      { key: 'C', text: 'Boleh ditandatangani oleh TTK atau kasir' },
      { key: 'D', text: 'Boleh dipesan melalui pesan WhatsApp tanpa fisik surat' },
      { key: 'E', text: 'Prekursor tidak memerlukan surat pesanan' }
    ],
    correctAnswer: 'A',
    explanation: 'Sesuai Permenkes No. 3 Tahun 2015: Surat Pesanan Prekursor Farmasi HARUS DIBUAT TERPISAH dari surat pesanan obat reguler, ditandatangani oleh APJ dengan nomor SIPA dan stempel sarana. Berbeda dengan Narkotika yang hanya boleh 1 jenis zat per SP, SP PREKURSOR BOLEH MEMUAT LEBIH DARI 1 JENIS sediaan obat jadi prekursor.',
    clinicalReference: 'Permenkes No. 3 Tahun 2015 tentang Pengelolaan Narkotika, Psikotropika, dan Prekursor Farmasi',
    difficulty: 'Mudah'
  },
  {
    id: 'q-589',
    domainId: 'manajemen',
    targetExam: 'all',
    vignette: 'Seorang pasien datang ke apotek membawa salinan resep (copy resep) yang tertulis tanda "iter 2x". Resep asli berisi 30 tablet Amlodipin 10 mg dan telah diambil pertama kali (tertulis det orig).',
    question: 'Berapakah total jumlah maksimal tablet Amlodipin yang berhak ditebus oleh pasien dari resep tersebut secara keseluruhan?',
    options: [
      { key: 'A', text: '90 tablet (1 kali resep asli + 2 kali pengulangan iter)' },
      { key: 'B', text: '60 tablet' },
      { key: 'C', text: '30 tablet' },
      { key: 'D', text: '120 tablet' },
      { key: 'E', text: '45 tablet' }
    ],
    correctAnswer: 'A',
    explanation: 'Arti tanda "iter 2x" (iteretur bis) pada resep dokter adalah resep boleh diulang sebanyak DUA KALI setelah pengambilan resep asli pertama kali. Maka total pengambilan pasien adalah: 1 kali original (30 tab) + 2 kali pengulangan iter (2 x 30 tab = 60 tab) = TOTAL 90 TABLET.',
    clinicalReference: 'Ketentuan Penulisan Resep dan Bahasa Latin Kedokteran/Farmasi & Permenkes No. 73/2016',
    difficulty: 'Mudah'
  },
  {
    id: 'q-590',
    domainId: 'manajemen',
    targetExam: 'all',
    vignette: 'Pada salinan resep tertulis tanda "ne det" (ne detur).',
    question: 'Apakah arti dari singkatan bahasa latin "ne det" tersebut?',
    options: [
      { key: 'A', text: 'Belum diserahkan / belum ditebus sama sekali' },
      { key: 'B', text: 'Sudah diserahkan seluruhnya' },
      { key: 'C', text: 'Diserahkan separuhnya' },
      { key: 'D', text: 'Obat telah kedaluwarsa' },
      { key: 'E', text: 'Obat harus diganti' }
    ],
    correctAnswer: 'A',
    explanation: 'Singkatan "ne det" berasal dari bahasa Latin "ne detur" yang artinya "jangan diberikan" atau BELUM DISERAHKAN sama sekali kepada pasien. Sebaliknya, singkatan "det" (detur) artinya sudah diserahkan.',
    clinicalReference: 'Ilmu Meracik Obat & Terminologi Resep Farmakope Indonesia',
    difficulty: 'Mudah'
  },
  {
    id: 'q-591',
    domainId: 'manajemen',
    targetExam: 'all',
    vignette: 'Dalam pelayanan resep di apotek, tertulis petunjuk aturan pakai obat: "S. d.d. pulv. I a.c.". Pasien meminta penjelasan cara minum puyer tersebut.',
    question: 'Bagaimanakah instruksi aturan pakai yang harus dituliskan pada etiket obat?',
    options: [
      { key: 'A', text: 'Sehari 1 kali, 1 bungkus puyer, sebelum makan' },
      { key: 'B', text: 'Sehari 2 kali, 1 bungkus puyer, setelah makan' },
      { key: 'C', text: 'Sehari 3 kali, 1 bungkus puyer, bersama makan' },
      { key: 'D', text: 'Sehari 4 kali, 1 sendok makan' },
      { key: 'E', text: 'Bila perlu diminum malam hari' }
    ],
    correctAnswer: 'A',
    explanation: 'Singkatan resep Latin: "S. d.d. pulv. I a.c." adalah kepanjangan dari "Signa de die pulverem unum ante coenam", yang artinya: Tandailah, SEHARI SATU KALI, SATU BUNGKUS SERBUK (PUYER), SEBELUM MAKAN.',
    clinicalReference: 'Buku Pedoman Pelayanan Resep & Farmasi Praktis',
    difficulty: 'Mudah'
  },
  {
    id: 'q-592',
    domainId: 'manajemen',
    targetExam: 'all',
    vignette: 'Pada resep suspensi antibiotik tertulis instruksi Latin: "S. t.d.d. Cth I p.c. m.i.c.".',
    question: 'Berapakah volume sendok takar yang dimaksud pada singkatan "Cth" (cochlear theae) menurut ketentuan Farmakope Indonesia?',
    options: [
      { key: 'A', text: '5 mL' },
      { key: 'B', text: '15 mL' },
      { key: 'C', text: '10 mL' },
      { key: 'D', text: '20 mL' },
      { key: 'E', text: '2,5 mL' }
    ],
    correctAnswer: 'A',
    explanation: 'Menurut ketentuan Farmakope Indonesia: Sendok Teh (Cochlear Theae / Cth) bervolume 5 mL; Sendok Bubur (Cochlear Pultis / Cp) bervolume 8 mL; dan Sendok Makan (Cochlear / C) bervolume 15 mL. S. t.d.d. Cth I p.c. m.i.c. berarti: Sehari 3 kali 1 sendok teh (5 mL) setelah makan, kocok dahulu.',
    clinicalReference: 'Farmakope Indonesia Edisi VI (FI VI) Lampiran Takaran Sendok',
    difficulty: 'Mudah'
  },
  {
    id: 'q-593',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Seorang Apoteker menolak melayani resep racikan analgesik narkotika yang dibawa oleh kurir online karena nomor telepon dokter yang tertera tidak aktif, format kertas resep mencurigakan (tidak ada SIP dokter yang jelas), dan pasien menolak memberikan identitas KTP (dugaan resep palsu).',
    question: 'Prinsip kode etik apoteker dan regulasi apakah yang ditegakkan oleh apoteker tersebut?',
    options: [
      { key: 'A', text: 'Kewajiban melakukan skrining administratif dan uji keabsahan resep serta mencegah penyalahgunaan obat (drug abuse) dan diversion narkotika' },
      { key: 'B', text: 'Pelanggaran hak asasi pasien untuk memperoleh obat' },
      { key: 'C', text: 'Apoteker bersikap diskriminatif' },
      { key: 'D', text: 'Apoteker wajib melayani resep apapun yang datang' },
      { key: 'E', text: 'Apoteker harus melapor ke polisi saat itu juga tanpa klarifikasi' }
    ],
    correctAnswer: 'A',
    explanation: 'Sesuai Permenkes No. 73/2016 dan Kode Etik Apoteker Indonesia: Apoteker WAJIB melakukan skrining resep (administratif, kesesuaian farmasetik, dan pertimbangan klinis). Jika terdapat kecurigaan resep palsu (spurious prescription) atau potensi penyalahgunaan narkotika/psikotropika, apoteker BERHAK DAN WAJIB menolak melayani resep tersebut dan mengonfirmasi keabsahannya kepada dokter penulis resep demi keselamatan publik.',
    clinicalReference: 'Permenkes No. 73 Tahun 2016 & Kode Etik Apoteker Indonesia (KAEI)',
    difficulty: 'Mudah'
  }
];
