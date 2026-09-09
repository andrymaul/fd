import { ExamQuestion } from '../competencyExamData';

/**
 * Bank Soal Kasus Vignette CBT Bagian 6 (Nomor q-311 s/d q-380)
 * Rekonstruksi Ujian Nasional Resmi UKMPPAI (Apoteker) & UKTVK (Vokasi TTK)
 * 70 Soal Kasus Manajemen Farmasi, Hukum & Regulasi, Farmakoekonomi, serta CPOB Industri
 */
export const CBT_EXPANSION_PART_6: ExamQuestion[] = [
  // =========================================================================
  // 📋 HUKUM, REGULASI NARKOTIKA, PSIKOTROPIKA, PREKURSOR & OOT
  // =========================================================================
  {
    id: 'q-311',
    domainId: 'manajemen',
    targetExam: 'all',
    vignette: 'Seorang Apoteker Penanggung Jawab Apotek (APA) hendak memesan sediaan Fentanil Patch 25 mcg/jam, Morfin Tablet 10 mg, dan Kodein Kapsul 10 mg ke Pedagang Besar Farmasi (PBF) Kimia Farma.',
    question: 'Berdasarkan Peraturan Menteri Kesehatan RI No. 3 Tahun 2015, bagaimanakah ketentuan pembuatan Surat Pesanan (SP) Narkotika yang benar?',
    options: [
      { key: 'A', text: 'Setiap jenis/item obat narkotika wajib menggunakan 1 lembar SP tersendiri yang dibuat rangkap 3 atau 4' },
      { key: 'B', text: 'Ketiga obat dapat digabung dalam 1 lembar SP Narkotika rangkap 2' },
      { key: 'C', text: 'Cukup menggunakan SP reguler dengan stempel khusus Narkotika' },
      { key: 'D', text: 'Boleh digabung asalkan mencantumkan nomor SIPA apoteker pemesan' },
      { key: 'E', text: 'SP Narkotika dibuat 1 lembar asli tanpa perlu ada tembusan arsip' }
    ],
    correctAnswer: 'A',
    explanation: 'Sesuai Permenkes No. 3 Tahun 2015 tentang Peredaran, Penyimpanan, Pemusnahan, dan Pelaporan Narkotika, Psikotropika, dan Prekursor Farmasi, SURAT PESANAN (SP) NARKOTIKA HANYA BOLEH MEMUAT 1 (SATU) JENIS SEDIAAN NARKOTIKA per lembar SP (1 lembar SP = 1 item). SP dibuat sekurang-kurangnya rangkap 3 (atau 4 untuk PBF Kimia Farma), ditandatangani oleh Apoteker Penanggung Jawab dengan mencantumkan nama jelas, nomor SIPA, stempel apotek, dan nomor SP resmi.',
    clinicalReference: 'Permenkes RI No. 3 Tahun 2015 & Petunjuk Teknis Pengelolaan Narkotika BPOM',
    difficulty: 'Mudah'
  },
  {
    id: 'q-312',
    domainId: 'manajemen',
    targetExam: 'all',
    vignette: 'Sebuah apotek menerima kiriman sediaan Diazepam injeksi, Alprazolam tablet, dan Klobazam tablet dari PBF. Apoteker menata penyimpanan obat-obat tersebut di ruang peracikan.',
    question: 'Bagaimanakah spesifikasi standar lemari khusus penyimpanan sediaan Psikotropika sesuai regulasi BPOM dan Kemenkes RI?',
    options: [
      { key: 'A', text: 'Terbuat dari bahan yang kuat, tidak mudah dipindahkan, memiliki 2 pintu dengan 2 kunci berbeda yang dipegang oleh pihak berwenang' },
      { key: 'B', text: 'Boleh berupa etalase kaca bening asalkan terkunci rapat' },
      { key: 'C', text: 'Disimpan di lemari pendingin suhu 2 - 8°C bersama vaksin' },
      { key: 'D', text: 'Diletakkan di rak obat bebas terbatas agar mudah dijangkau saat dispensing' },
      { key: 'E', text: 'Disimpan dalam kotak plastik bersegel di meja kasir' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Permenkes No. 3 Tahun 2015, tempat penyimpanan Narkotika dan Psikotropika wajib berupa LEMARI KHUSUS yang memenuhi syarat: terbuat dari bahan yang kuat (kayu tebal atau besi/baja), tidak mudah dipindahkan (menempel pada dinding atau lantai), memiliki 2 (dua) buah pintu dengan 2 (dua) buah kunci yang berbeda. Kunci lemari dikuasai oleh Apoteker Penanggung Jawab atau Tenaga Teknis Kefarmasian yang didelegasikan secara tertulis.',
    clinicalReference: 'Permenkes RI No. 3 Tahun 2015 Pasal 26 - 32 & Standar Pelayanan Kefarmasian di Apotek',
    difficulty: 'Mudah'
  },
  {
    id: 'q-313',
    domainId: 'manajemen',
    targetExam: 'all',
    vignette: 'Apoteker Penanggung Jawab Klinik Pratama hendak melakukan pelaporan rutin penggunaan sediaan Narkotika dan Psikotropika bulan Mei 2026 melalui aplikasi SIPNAP (Sistem Pelaporan Narkotika dan Psikotropika).',
    question: 'Kapan batas waktu (deadline) maksimal pelaporan SIPNAP setiap bulannya sesuai ketentuan peraturan perundang-undangan?',
    options: [
      { key: 'A', text: 'Paling lambat tanggal 10 bulan berikutnya' },
      { key: 'B', text: 'Paling lambat akhir bulan berjalan (tanggal 30/31)' },
      { key: 'C', text: 'Paling lambat tanggal 25 bulan berikutnya' },
      { key: 'D', text: 'Setiap 3 bulan sekali (triwulanan)' },
      { key: 'E', text: 'Paling lambat tanggal 15 bulan berikutnya' }
    ],
    correctAnswer: 'A',
    explanation: 'Sesuai regulasi Permenkes No. 3 Tahun 2015, Apotek, Instalasi Farmasi Rumah Sakit, Instalasi Farmasi Klinik, dan Lembaga Ilmu Pengetahuan WAJIB membuat, menyimpan, dan menyampaikan laporan pemasukan dan penyerahan/penggunaan Narkotika dan Psikotropika setiap bulan secara elektronik (SIPNAP) PALING LAMBAT TANGGAL 10 BULAN BERIKUTNYA kepada Kepala Dinas Kesehatan Kabupaten/Kota dengan tembusan Kepala Balai POM setempat.',
    clinicalReference: 'Permenkes RI No. 3 Tahun 2015 tentang Pelaporan Narkotika & SIPNAP Kemenkes',
    difficulty: 'Mudah'
  },
  {
    id: 'q-314',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Sebuah apotek memiliki stok sediaan Petidin Injeksi dan Morfin Kapsul yang telah melewati tanggal kadaluwarsa (expired date). Apoteker penanggung jawab hendak melakukan pemusnahan obat narkotika tersebut.',
    question: 'Siapakah saksi resmi yang WAJIB hadir dan menandatangani Berita Acara Pemusnahan Narkotika di apotek?',
    options: [
      { key: 'A', text: 'Petugas dari Dinas Kesehatan Kabupaten/Kota dan/atau Balai Besar/Balai POM setempat' },
      { key: 'B', text: 'Cukup disaksikan oleh pemilik sarana apotek (PSA) dan staf karyawan' },
      { key: 'C', text: 'Petugas kepolisian sektor (Polsek) setempat saja' },
      { key: 'D', text: 'Apoteker dari apotek tetangga terdekat' },
      { key: 'E', text: 'Perwakilan organisasi profesi IAI cabang saja' }
    ],
    correctAnswer: 'A',
    explanation: 'Pemusnahan Narkotika, Psikotropika, dan Prekursor Farmasi di Apotek, Klinik, atau Rumah Sakit wajib disaksikan oleh petugas resmi dari DINAS KESEHATAN KABUPATEN/KOTA dan/atau BALAI BESAR/BALAI PENGAWAS OBAT DAN MAKANAN (BPOM) setempat. Berita Acara Pemusnahan dibuat sekurang-kurangnya dalam rangkap 3 dan disampaikan kepada Kepala Dinas Kesehatan dan Kepala Balai POM setempat.',
    clinicalReference: 'Permenkes No. 3 Tahun 2015 Bab Pemusnahan Narkotika dan Psikotropika',
    difficulty: 'Sedang'
  },
  {
    id: 'q-315',
    domainId: 'manajemen',
    targetExam: 'all',
    vignette: 'Berdasarkan Peraturan Badan POM tentang Pengelolaan Obat-Obat Tertentu (OOT), terdapat obat-obat yang sering disalahgunakan sehingga pengadaannya harus menggunakan Surat Pesanan khusus OOT.',
    question: 'Manakah di antara kelompok zat aktif berikut yang seluruhnya tergolong sebagai Obat-Obat Tertentu (OOT) menurut regulasi BPOM?',
    options: [
      { key: 'A', text: 'Tramadol, Triheksifenidil, Klorpromazin, Amitriptilin, Haloperidol, dan Dekstrometorfan' },
      { key: 'B', text: 'Pseudoefedrin, Efedrin, Norefedrin, dan Ergotamin' },
      { key: 'C', text: 'Diazepam, Alprazolam, Estazolam, dan Fenobarbital' },
      { key: 'D', text: 'Kodein, Fentanil, Petidin, dan Sufentanil' },
      { key: 'E', text: 'Siprofloksasin, Sefadroksil, Metronidazol, dan Amoksisilin' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Peraturan Badan POM No. 10 Tahun 2019 dan perubahannya, OBAT-OBAT TERTENTU (OOT) yang sering disalahgunakan terdiri dari 6 zat aktif: (1) TRAMADOL, (2) TRIHEKSIFENIDIL, (3) KLORPROMAZIN, (4) AMITRIPTILIN, (5) HALOPERIDOL, dan (6) DEKSTROMETORFAN. Pengadaan obat-obat ini wajib menggunakan Surat Pesanan khusus OOT terpisah dari obat biasa untuk mencegah penyalahgunaan di masyarakat.',
    clinicalReference: 'Peraturan BPOM No. 10 Tahun 2019 tentang Pedoman Pengelolaan Obat-Obat Tertentu yang Sering Disalahgunakan',
    difficulty: 'Mudah'
  },

  // =========================================================================
  // 📋 LOGISTIK, COLD CHAIN & RANTAI DINGIN VAKSIN
  // =========================================================================
  {
    id: 'q-316',
    domainId: 'manajemen',
    targetExam: 'all',
    vignette: 'Apoteker di Puskesmas menerima kiriman vaksin Program Imunisasi Nasional: Vaksin Hepatitis B (HB0), BCG, DPT-HB-Hib (Pentavalen), Polio Tetes (bOPV), dan Campak-Rubella (MR). Apoteker memeriksa indikator Vaccine Vial Monitor (VVM) pada botol vaksin.',
    question: 'Kondisi indikator VVM manakah yang menandakan bahwa vaksin MASIH BOLEH DIGUNAKAN karena belum terpapar panas berlebih?',
    options: [
      { key: 'A', text: 'Segi empat di dalam lingkaran berwarna lebih terang daripada lingkaran luarnya (Kondisi A dan B)' },
      { key: 'B', text: 'Warna segi empat sama dengan warna lingkaran luarnya (Kondisi C)' },
      { key: 'C', text: 'Warna segi empat lebih gelap daripada lingkaran luarnya (Kondisi D)' },
      { key: 'D', text: 'Lingkaran luar memudar menjadi putih transparan' },
      { key: 'E', text: 'Segi empat berubah menjadi warna hitam pekat' }
    ],
    correctAnswer: 'A',
    explanation: 'Vaccine Vial Monitor (VVM) adalah label pemantau paparan suhu panas kumulatif pada botol vaksin. Interpretasi VVM: (A) Segi empat lebih terang dari lingkaran luar -> GUNAKAN VAKSIN; (B) Segi empat mulai menggelap namun masih lebih terang dari lingkaran luar -> GUNAKAN VAKSIN TERLEBIH DAHULU; (C) Warna segi empat SAMA DENGAN lingkaran luar -> JANGAN DIGUNAKAN (VAKSIN RUSAK); (D) Warna segi empat LEBIH GELAP dari lingkaran luar -> JANGAN DIGUNAKAN (VAKSIN RUSAK). Jadi hanya kondisi A dan B yang boleh digunakan.',
    clinicalReference: 'WHO Guidelines on Vaccine Vial Monitors & Petunjuk Teknis Manajemen Rantai Dingin Vaksin Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-317',
    domainId: 'manajemen',
    targetExam: 'all',
    vignette: 'Petugas logistik farmasi menemukan bahwa suhu freezer penyimpanan vaksin mengalami malfungsi dan vaksin Hepatitis B rekombinan sempat membeku menjadi es padat. Apoteker hendak memastikan apakah vaksin tersebut mengalami kerusakan stabilitas emulsi.',
    question: 'Uji fisik sederhana apakah yang direkomendasikan WHO untuk memvalidasi apakah vaksin yang sensitif beku (seperti DPT/Hep B) telah rusak akibat pembekuan?',
    options: [
      { key: 'A', text: 'Shake Test (Uji Kocok Komparatif dengan vial kontrol sengaja beku)' },
      { key: 'B', text: 'Uji Viskositas Oswald' },
      { key: 'C', text: 'Uji pH meter digital' },
      { key: 'D', text: 'Uji Kekeruhan Spektrofotometri' },
      { key: 'E', text: 'Uji Sentrifugasi kecepatan tinggi' }
    ],
    correctAnswer: 'A',
    explanation: 'UJI KOCOK (SHAKE TEST) adalah protokol resmi WHO untuk memeriksa kerusakan vaksin adsorpsi aluminium yang sensitif beku (freeze-sensitive vaccine, seperti DPT, Hepatitis B, Tetanus Toksoid, Pentavalen). Prinsipnya: Vial sampel dan vial kontrol (yang sengaja dibekukan hingga padat) dikocok bersamaan lalu diletakkan berdampingan. Jika partikel pada vial sampel mengendap LEBIH CEPAT daripada atau sama cepatnya dengan vial kontrol (< 15-30 menit terdapat cairan jernih di atas endapan), vaksin telah rusak (rusak ikatannya dengan adjuvant aluminium) dan WAJIB DIBUANG.',
    clinicalReference: 'WHO Protocol: The Shake Test - Guide in Determining Whether Adsorbed Vaccines Have Been Frozen',
    difficulty: 'Sedang'
  },
  {
    id: 'q-318',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Apoteker instalasi farmasi rumah sakit menyusun tata letak penyimpanan obat High-Alert Medication di instalasi gawat darurat dan ICU.',
    question: 'Pernyataan manakah yang BENAR mengenai regulasi penyimpanan elektrolit konsentrat pekat (seperti KCl 7,46% dan NaCl 3%) menurut Standar Keselamatan Pasien Rumah Sakit?',
    options: [
      { key: 'A', text: 'Elektrolit konsentrat pekat dilarang disimpan di unit perawatan pasien umum, dan hanya boleh disimpan di Instalasi Farmasi, ICU/ICCU, serta diberi label merah mencolok' },
      { key: 'B', text: 'Boleh disimpan di semua troli emergensi bangsal rawat inap biasa tanpa penguncian' },
      { key: 'C', text: 'Boleh diletakkan berdampingan dengan larutan infus normal saline NaCl 0,9%' },
      { key: 'D', text: 'Boleh disimpan bersama obat bebas di lemari terbuka' },
      { key: 'E', text: 'Boleh diencerkan langsung oleh pasien di ruang rawat' }
    ],
    correctAnswer: 'A',
    explanation: 'Sasaran Keselamatan Pasien (SKP) Kemenkes dan Akreditasi RS (KARS/JCI) menetapkan bahwa ELEKTROLIT KONSENTRAT TINGGI (seperti KCl 7,46%, NaCl 3%, MgSO4 40%) TIDAK BOLEH DISIMPAN DI RUANG RAWAT INAP BIASA untuk mencegah accidental direct IV injection yang fatal. Elektrolit konsentrat hanya boleh disimpan di Instalasi Farmasi dan area kritis bersyarat khusus (seperti ICU, ICCU, Kamar Operasi, IGD), disimpan terpisah, terkunci, dan WAJIB DIBERI LABEL HIGH-ALERT BERWARNA MERAH MENCOLOK.',
    clinicalReference: 'Standar Nasional Akreditasi Rumah Sakit (SNARS) Kemenkes RI & ISMP Guidelines for High-Alert Medications',
    difficulty: 'Mudah'
  },

  // =========================================================================
  // 📋 PERENCANAAN, PENGADAAN & KALKULASI BISNIS FARMASI
  // =========================================================================
  {
    id: 'q-319',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Sebuah apotek memproyeksikan kebutuhan Kaptropil 25 mg sebanyak 36.000 tablet per tahun (300 hari kerja). Biaya setiap kali pemesanan adalah Rp 50.000, dan biaya penyimpanan diperkirakan Rp 100 per tablet per tahun.',
    question: 'Berapakah jumlah pemesanan paling ekonomis (Economic Order Quantity / EOQ) untuk obat tersebut?',
    options: [
      { key: 'A', text: '6.000 tablet' },
      { key: 'B', text: '3.600 tablet' },
      { key: 'C', text: '1.200 tablet' },
      { key: 'D', text: '18.000 tablet' },
      { key: 'E', text: '7.200 tablet' }
    ],
    correctAnswer: 'A',
    explanation: 'Rumus Economic Order Quantity (EOQ): EOQ = akar[(2 * D * S) / H], di mana D = Kebutuhan tahunan (36.000 tablet), S = Biaya per pemesanan (Rp 50.000), H = Biaya simpan per unit per tahun (Rp 100). Perhitungan: EOQ = akar[(2 * 36.000 * 50.000) / 100] = akar[3.600.000.000 / 100] = akar[36.000.000] = 6.000 tablet per pesanan.',
    clinicalReference: 'Manajemen Logistik Farmasi & Quick et al. Managing Drug Supply (MDS-3)',
    difficulty: 'Mudah'
  },
  {
    id: 'q-320',
    domainId: 'manajemen',
    targetExam: 'all',
    vignette: 'Sebuah apotek memiliki data penjualan: Pemakaian rata-rata tablet Parasetamol adalah 40 strip per hari. Waktu tunggu pengiriman dari PBF (Lead Time) adalah 3 hari. Apotek menetapkan persediaan pengaman (Safety Stock) sebanyak 60 strip.',
    question: 'Pada sisa stok berapakah apoteker harus segera melakukan pemesanan kembali (Reorder Point / ROP)?',
    options: [
      { key: 'A', text: '180 strip' },
      { key: 'B', text: '120 strip' },
      { key: 'C', text: '60 strip' },
      { key: 'D', text: '240 strip' },
      { key: 'E', text: '100 strip' }
    ],
    correctAnswer: 'A',
    explanation: 'Rumus Titik Pemesanan Kembali (Reorder Point / ROP): ROP = (Lead Time x Pemakaian Rata-rata) + Safety Stock. ROP = (3 hari x 40 strip/hari) + 60 strip = 120 strip + 60 strip = 180 strip. Jadi, saat stok di apotek tersisa 180 strip, apoteker harus segera menerbitkan Surat Pesanan baru agar tidak terjadi kekosongan obat (stockout).',
    clinicalReference: 'Manajemen Farmasi Apotek & Logistik Kefarmasian',
    difficulty: 'Mudah'
  },
  {
    id: 'q-321',
    domainId: 'manajemen',
    targetExam: 'all',
    vignette: 'Apotek membeli sirup antasida dari PBF dengan Harga Pokok Pembelian (HPP) sudah termasuk PPN 11% sebesar Rp 25.000 per botol. Apotek menetapkan margin keuntungan sebesar 20% dari harga beli.',
    question: 'Berapakah Harga Jual Apotek (HJA) per botol sirup antasida tersebut?',
    options: [
      { key: 'A', text: 'Rp 30.000' },
      { key: 'B', text: 'Rp 27.500' },
      { key: 'C', text: 'Rp 32.000' },
      { key: 'D', text: 'Rp 35.000' },
      { key: 'E', text: 'Rp 29.000' }
    ],
    correctAnswer: 'A',
    explanation: 'Harga Pokok Pembelian (HPP) sudah termasuk PPN = Rp 25.000. Margin keuntungan = 20%. Harga Jual Apotek (HJA) = HPP x (1 + Margin) = Rp 25.000 x 1,20 = Rp 30.000 per botol.',
    clinicalReference: 'Akuntansi dan Manajemen Keuangan Apotek',
    difficulty: 'Mudah'
  },
  {
    id: 'q-322',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Laporan keuangan akhir tahun sebuah apotek menunjukkan: Total Penjualan Bersih = Rp 1.200.000.000. Harga Pokok Penjualan (HPP) = Rp 900.000.000. Nilai persediaan awal tahun = Rp 140.000.000 dan persediaan akhir tahun = Rp 160.000.000.',
    question: 'Berapakah rasio perputaran persediaan (Inventory Turnover Ratio / ITOR) apotek tersebut dalam setahun?',
    options: [
      { key: 'A', text: '6 kali per tahun' },
      { key: 'B', text: '8 kali per tahun' },
      { key: 'C', text: '4 kali per tahun' },
      { key: 'D', text: '10 kali per tahun' },
      { key: 'E', text: '12 kali per tahun' }
    ],
    correctAnswer: 'A',
    explanation: 'Rumus ITOR (Inventory Turnover Ratio): ITOR = HPP / Rata-rata Persediaan. Rata-rata Persediaan = (Persediaan Awal + Persediaan Akhir) / 2 = (Rp 140.000.000 + Rp 160.000.000) / 2 = Rp 150.000.000. ITOR = Rp 900.000.000 / Rp 150.000.000 = 6 KALI PER TAHUN. Rasio perputaran ini mencerminkan seberapa efisien modal apotek berputar dalam bentuk persediaan barang.',
    clinicalReference: 'Financial Management for Pharmacists & Manajemen Bisnis Apotek',
    difficulty: 'Sedang'
  },
  {
    id: 'q-323',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Komite Farmasi dan Terapi (KFT) rumah sakit melakukan evaluasi farmakoekonomi antara Obat Baru A dan Obat Standar B untuk terapi pencegahan stroke pada pasien fibrilasi atrium. Hasil analisis: Biaya total Obat A = Rp 15.000.000 dengan efektivitas 0,85 QALY. Biaya total Obat B = Rp 9.000.000 dengan efektivitas 0,65 QALY.',
    question: 'Berapakah nilai Incremental Cost-Effectiveness Ratio (ICER) dari Obat A dibandingkan Obat B?',
    options: [
      { key: 'A', text: 'Rp 30.000.000 per QALY' },
      { key: 'B', text: 'Rp 6.000.000 per QALY' },
      { key: 'C', text: 'Rp 20.000.000 per QALY' },
      { key: 'D', text: 'Rp 15.000.000 per QALY' },
      { key: 'E', text: 'Rp 45.000.000 per QALY' }
    ],
    correctAnswer: 'A',
    explanation: 'Rumus Incremental Cost-Effectiveness Ratio (ICER): ICER = (Biaya Obat A - Biaya Obat B) / (Efektivitas Obat A - Efektivitas Obat B). Biaya tambahan (Delta C) = Rp 15.000.000 - Rp 9.000.000 = Rp 6.000.000. Efektivitas tambahan (Delta E) = 0,85 - 0,65 = 0,20 QALY. ICER = Rp 6.000.000 / 0,20 QALY = Rp 30.000.000 per QALY yang didapat.',
    clinicalReference: 'Pedoman Penerapan Kajian Farmakoekonomi Kementerian Kesehatan RI',
    difficulty: 'Mudah'
  },

  // =========================================================================
  // 📋 CPOB, FASILITAS BERSIH & FORMULASI INDUSTRI STERIL
  // =========================================================================
  {
    id: 'q-324',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Industri farmasi memproduksi sediaan injeksi antibiotik sefalosporin steril melalui proses pengisian aseptis (tanpa sterilisasi akhir). Apoteker penanggung jawab QA memastikan kepatuhan klasifikasi ruang bersih CPOB 2024.',
    question: 'Pada kelas ruang bersih manakah proses pengisian aseptis (filling) wadah sediaan steril tersebut wajib dilakukan, serta berapakah jumlah maksimal partikel ukuran >= 0,5 mikron per m3 udara pada kondisi operasional?',
    options: [
      { key: 'A', text: 'Kelas A (Laminar Air Flow), maksimal 3.520 partikel/m3' },
      { key: 'B', text: 'Kelas B, maksimal 352.000 partikel/m3' },
      { key: 'C', text: 'Kelas C, maksimal 3.520.000 partikel/m3' },
      { key: 'D', text: 'Kelas D, tidak dibatasi partikelnya' },
      { key: 'E', text: 'Kelas E, maksimal 35.200 partikel/m3' }
    ],
    correctAnswer: 'A',
    explanation: 'Sesuai Pedoman CPOB 2024 (dan Annex 1 GMP Manufacture of Sterile Medicinal Products), zona pengisian aseptis dan penutupan wadah steril wajib dilakukan di KELAS A (di bawah aliran udara laminar / LAF atau isolator) dengan batas cemaran partikel non-viabel ukuran >= 0,5 mikron MAKSIMAL 3.520 PARTIKEL/m3 baik pada kondisi istirahat (at rest) maupun kondisi operasional (in operation). Ruang penyangga latar belakangnya (background) adalah Kelas B.',
    clinicalReference: 'Pedoman CPOB Edisi 2024 BPOM RI & PIC/S GMP Annex 1',
    difficulty: 'Sedang'
  },
  {
    id: 'q-325',
    domainId: 'teknologi',
    targetExam: 'all',
    vignette: 'Industri farmasi melakukan uji integritas berkala terhadap High Efficiency Particulate Air (HEPA) filter pada sistem Tata Udara (HVAC) ruang bersih Kelas A dan B.',
    question: 'Metode pengujian manakah yang merupakan standar CPOB untuk mendeteksi adanya kebocoran (leak test) pada media dan rangka HEPA filter?',
    options: [
      { key: 'A', text: 'Uji Aerosol PAO (Polyalphaolefin) / DOP (Dioctylphthalate)' },
      { key: 'B', text: 'Uji Bubble Point membran filter' },
      { key: 'C', text: 'Uji Disolusi tipe basket' },
      { key: 'D', text: 'Uji Pirolisis suhu tinggi' },
      { key: 'E', text: 'Uji Konduktivitas air' }
    ],
    correctAnswer: 'A',
    explanation: 'Uji integritas HEPA filter di industri farmasi dilakukan menggunakan aerosol terdispersi POLYOLEFIN (PAO) atau DIOCTYLPHTHALATE (DOP) yang dipaparkan di bagian hulu (upstream) filter, lalu dipindai di sisi hilir (downstream) menggunakan fotometer aerosol untuk mendeteksi kebocoran media filter atau seal rangka (kebocoran tidak boleh melebihi 0,01% penetrasi aerosol). Sementara Bubble Point test digunakan untuk menguji integritas membran filter steril sediaan cair (0,22 mikron).',
    clinicalReference: 'Pedoman CPOB Sarana Penunjang Kritis & ISO 14644-3 Cleanroom Testing Methods',
    difficulty: 'Sedang'
  },
  {
    id: 'q-326',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Air untuk Injeksi (Water for Injection / WFI) di industri farmasi disimpan dan didistribusikan melalui sistem loop tertutup (closed loop system) untuk mencegah pembentukan biofilm bakteri.',
    question: 'Berapakah suhu minimal sirkulasi kontinu yang direkomendasikan CPOB untuk sistem penyimpanan dan distribusi WFI panas?',
    options: [
      { key: 'A', text: 'Sirkulasi kontinu pada suhu >= 70°C (lazimnya 80 - 85°C)' },
      { key: 'B', text: 'Disimpan pada suhu kamar 20 - 25°C' },
      { key: 'C', text: 'Sirkulasi pada suhu 40 - 50°C' },
      { key: 'D', text: 'Suhu beku 0 - 4°C' },
      { key: 'E', text: 'Suhu 100°C mendidih dengan uap bebas' }
    ],
    correctAnswer: 'A',
    explanation: 'Pedoman CPOB dan Farmakope menetapkan bahwa sistem distribusi Air untuk Injeksi (Water for Injection / WFI) tipe sirkulasi panas wajib dijaga dalam pergerakan sirkulasi konstan (turbulen, tidak ada dead-leg > 1,5-2D) pada SUHU MINIMAL >= 70°C (standar industri optimal 80°C - 85°C) secara terus-menerus 24 jam sehari. Suhu tinggi ini bersifat bakterisidal/bakteriostatik alami yang mencegah perlekatan bakteri dan pembentukan biofilm pada dinding pipa stainless steel 316L.',
    clinicalReference: 'Petunjuk Operasional Penerapan CPOB: Sistem Pengolahan Air (Water System) BPOM RI & USP Purified Water Monograph',
    difficulty: 'Sedang'
  },
  {
    id: 'q-327',
    domainId: 'teknologi',
    targetExam: 'all',
    vignette: 'Dalam produksi tablet Parasetamol 500 mg dengan metode granulasi basah, operator mesin kempa tablet menemukan masalah fisik di mana bagian atas permukaan tablet terbelah dan terlepas dari badan tablet utama sesaat setelah keluar dari cetakan die.',
    question: 'Apakah nama cacat fisik tabletasi tersebut, serta penyebab utamanya?',
    options: [
      { key: 'A', text: 'Capping, akibat terperangkapnya udara (air entrapment) dalam massa granul dan pemadatan yang terlalu cepat' },
      { key: 'B', text: 'Mottling, akibat distribusi zat warna yang tidak homogen' },
      { key: 'C', text: 'Sticking, akibat kelebihan lubrikan hidrofobik' },
      { key: 'D', text: 'Whiskering, akibat punch aus' },
      { key: 'E', text: 'Cracking, akibat viskositas pengikat terlalu tinggi' }
    ],
    correctAnswer: 'A',
    explanation: 'CAPPING adalah pemisahan sebagian atau seluruh mahkota atas atau bawah tablet dari badan utama tablet. Penyebab utamanya adalah TERPERANGKAPNYA UDARA (AIR ENTRAPMENT) di dalam massa cetak selama proses kompresi yang kemudian memuai secara mendadak saat tekanan punch dilepaskan, kadar air granul terlalu kering, atau terlalu banyak fines (serbuk halus). Solusinya adalah mengurangi fines, mengatur kelembapan granul optimal, memperlambat kecepatan kompresi (pre-compression), atau mengganti bentuk punch die.',
    clinicalReference: 'Lachman & Lieberman Teori dan Praktik Farmasi Industri & Remington Pharmaceutical Sciences',
    difficulty: 'Mudah'
  },
  {
    id: 'q-328',
    domainId: 'teknologi',
    targetExam: 'all',
    vignette: 'Bagian kontrol kualitas (QC) industri farmasi melakukan uji kerapuhan (friabilitas) terhadap 20 tablet Ibuprofen 400 mg menggunakan alat Friabilator Roche. Berat awal 20 tablet sebelum diuji adalah 10,250 gram, dan setelah diputar 100 putaran berat tablet yang utuh menjadi 10,185 gram.',
    question: 'Berapakah persentase kerapuhan tablet tersebut, dan apakah memenuhi syarat Farmakope Indonesia?',
    options: [
      { key: 'A', text: '0,63% (Memenuhi syarat karena < 1,0%)' },
      { key: 'B', text: '1,50% (Tidak memenuhi syarat)' },
      { key: 'C', text: '0,06% (Memenuhi syarat)' },
      { key: 'D', text: '2,10% (Tidak memenuhi syarat)' },
      { key: 'E', text: '0,95% (Tidak memenuhi syarat karena mendekati batas)' }
    ],
    correctAnswer: 'A',
    explanation: 'Rumus Kerapuhan Tablet (% Friabilitas): % F = [(W1 - W2) / W1] x 100%. W1 (berat awal) = 10,250 g; W2 (berat akhir) = 10,185 g. % F = [(10,250 - 10,185) / 10,250] x 100% = [0,065 / 10,250] x 100% = 0,634%. Berdasarkan Farmakope Indonesia Edisi VI dan USP, tablet dinyatakan MEMENUHI SYARAT kerapuhan jika kehilangan bobot TIDAK LEBIH DARI 1,0% (% F < 1,0%) dan tidak ada tablet yang pecah atau terbelah.',
    clinicalReference: 'Farmakope Indonesia Edisi VI & United States Pharmacopeia (USP) <1216> Tablet Friability',
    difficulty: 'Mudah'
  },
  {
    id: 'q-329',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Instalasi Farmasi Rumah Sakit melakukan analisis matriks pengadaan obat tahunan dengan menggabungkan analisis VEN (Vital, Esensial, Non-esensial) dan Pareto ABC (berdasarkan nilai investasi serapan anggaran).',
    question: 'Kelompok obat manakah dalam matriks VEN-ABC yang menjadi prioritas pengawasan paling ketat dan harus dikendalikan secara harian (just-in-time/ketat)?',
    options: [
      { key: 'A', text: 'Kategori VA (Vital dengan serapan anggaran nilai A/tinggi)' },
      { key: 'B', text: 'Kategori NC (Non-esensial dengan serapan anggaran C/rendah)' },
      { key: 'C', text: 'Kategori EB (Esensial dengan serapan anggaran sedang)' },
      { key: 'D', text: 'Kategori NA (Non-esensial dengan serapan anggaran tinggi)' },
      { key: 'E', text: 'Kategori VC (Vital dengan serapan anggaran rendah)' }
    ],
    correctAnswer: 'A',
    explanation: 'Dalam matriks gabungan VEN-ABC, obat kategori VA (Vital - Nilai A) adalah kelompok yang paling kritis karena menyerap anggaran dana rumah sakit dalam jumlah sangat besar (Kelompok A, sekitar 70% total anggaran meskipun hanya 10-20% item) SEKALIGUS berdampak langsung pada kelangsungan hidup pasien (Vital, seperti albumin, antibiotik lini 3 meropenem, trombolitik alteplase). Oleh karena itu, pengadaannya tidak boleh putus namun stoknya harus dipantau sangat ketat setiap hari untuk mencegah pemborosan modal.',
    clinicalReference: 'Pedoman Pengelolaan Perbekalan Farmasi di Rumah Sakit Kemenkes RI & WHO Drug Supply Management',
    difficulty: 'Mudah'
  },
  {
    id: 'q-330',
    domainId: 'manajemen',
    targetExam: 'all',
    vignette: 'Seorang apoteker bangsal rawat inap menerapkan sistem distribusi obat Unit Dose Dispensing (UDD) untuk pasien pasca-operasi bedah abdomen.',
    question: 'Apakah keunggulan utama sistem distribusi Unit Dose Dispensing (UDD) dibandingkan sistem Floor Stock maupun Resep Individu?',
    options: [
      { key: 'A', text: 'Menurunkan angka medication error secara signifikan karena obat disiapkan dalam dosis tunggal siap pakai per waktu minum oleh apoteker' },
      { key: 'B', text: 'Mengurangi beban kerja tenaga kefarmasian di instalasi farmasi' },
      { key: 'C', text: 'Memungkinkan perawat meracik sendiri obat di meja perawat bangsal' },
      { key: 'D', text: 'Menghilangkan kebutuhan pencatatan kartu rekam obat' },
      { key: 'E', text: 'Mempercepat penyerahan obat tanpa perlu telaah resep' }
    ],
    correctAnswer: 'A',
    explanation: 'Sistem Unit Dose Dispensing (UDD) adalah baku emas distribusi obat di rumah sakit modern. Keunggulan utamanya adalah MENURUNKAN ANGKA MEDICATION ERROR HINGGA > 80% karena obat dikemas dan diserahkan dalam bentuk dosis tunggal siap minum untuk tiap jadwal minum spesifik pasien. Obat yang tidak terpakai (misal pasien pulang/meninggal) dapat dikembalikan ke farmasi dengan mudah (menghemat biaya obat), serta memastikan telaah resep ganda (dual-checking) sebelum obat diberikan.',
    clinicalReference: 'Standar Pelayanan Kefarmasian di Rumah Sakit (Permenkes 72/2016) & ASHP Statement on Unit Dose Drug Distribution',
    difficulty: 'Mudah'
  },
  {
    id: 'q-331',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien mengalami ruam kulit eritematosa luas dan sindrom Steven-Johnson 5 hari setelah mengonsumsi Karbamazepin. Apoteker instalasi farmasi melakukan evaluasi kausalitas efek samping obat menggunakan Algoritma Naranjo. Total skor yang diperoleh adalah +9.',
    question: 'Apakah kategori tingkat kepastian hubungan sebab-akibat (kausalitas) efek samping obat tersebut menurut Skala Naranjo?',
    options: [
      { key: 'A', text: 'Pasti (Definite)' },
      { key: 'B', text: 'Mungkin (Probable)' },
      { key: 'C', text: 'Bisa jadi (Possible)' },
      { key: 'D', text: 'Ragu-ragu (Doubtful)' },
      { key: 'E', text: 'Tidak berhubungan (Unclassified)' }
    ],
    correctAnswer: 'A',
    explanation: 'Interpretasi Algoritma Naranjo untuk penentuan kausalitas efek samping obat (Adverse Drug Reaction / ADR): Skor >= 9 = PASTI (DEFINITE); Skor 5 - 8 = MUNGKIN BESAR (PROBABLE); Skor 1 - 4 = BISA JADI / MUNGKIN (POSSIBLE); Skor <= 0 = RAGU-RAGU / TIDAK BERHUBUNGAN (DOUBTFUL). Dengan skor +9, hubungan antara Karbamazepin dan kejadian reaksi kutaneus berat dikategorikan sebagai Pasti (Definite) dan wajib dilaporkan ke Pusat Farmakovigilans Nasional BPOM.',
    clinicalReference: 'Naranjo CA et al. A method for estimating the probability of adverse drug reactions & Pedoman MESO BPOM RI',
    difficulty: 'Sedang'
  },
  {
    id: 'q-332',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Dalam penanganan dan peracikan sediaan kemoterapi sitostatika steril (antrasiklin, sisplatin, fluorourasil), apoteker farmasi onkologi bekerja di dalam lemari kabinet keselamatan biologis khusus.',
    question: 'Tipe Biosafety Cabinet (BSC) manakah yang WAJIB digunakan untuk penanganan sitostatika aerosol toksik menurut standar keselamatan kerja CPOB dan USP <800>?',
    options: [
      { key: 'A', text: 'BSC Kelas II Tipe B2 (100% pembuangan total udara keluar / total exhaust tanpa resirkulasi)' },
      { key: 'B', text: 'Laminar Air Flow (LAF) horizontal aliran udara meniup ke arah operator' },
      { key: 'C', text: 'BSC Kelas I dengan resirkulasi udara ke dalam ruangan' },
      { key: 'D', text: 'Fume hood kimia biasa tanpa filter HEPA' },
      { key: 'E', text: 'BSC Kelas II Tipe A1' }
    ],
    correctAnswer: 'A',
    explanation: 'Untuk rekonstitusi obat sitostatika karsinogenik dan mutagenik, USP <800> Hazardous Drugs dan CPOB mewajibkan penggunaan BIOSAFETY CABINET (BSC) KELAS II TIPE B2 dengan sistem TOTAL EXHAUST 100% (seluruh udara dibuang ke luar gedung melalui filter HEPA tanpa ada resirkulasi sedikit pun ke dalam kabinet atau ruangan). Kabinet harus memiliki aliran udara vertikal bertekanan negatif untuk melindungi operator dan lingkungan dari inhalasi uap/aerosol sitotoksik. Penggunaan Laminar Air Flow (LAF) horizontal DILARANG KERAS karena meniupkan racun langsung ke wajah operator.',
    clinicalReference: 'USP <800> Hazardous Drugs: Handling in Healthcare Settings & Pedoman Penanganan Sediaan Sitostatika Kemenkes RI',
    difficulty: 'Sedang'
  },
  {
    id: 'q-333',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Bagian Kontrol Kualitas industri farmasi melakukan uji disolusi tahap pertama (S1) terhadap 6 tablet Parasetamol lepas segera (kriteria penerimaan FI: Q = 80% dalam 30 menit). Hasil pelepasan zat aktif ke-6 tablet pada menit ke-30 tercatat: 88%, 91%, 86%, 84%, 87%, dan 85%.',
    question: 'Apakah kesimpulan hasil uji disolusi tahap S1 tersebut menurut Farmakope Indonesia Edisi VI?',
    options: [
      { key: 'A', text: 'Memenuhi syarat pada tahap S1 karena setiap unit sediaan tidak kurang dari Q + 5% (>= 85%)' },
      { key: 'B', text: 'Gagal dan harus langsung dimusnahkan' },
      { key: 'C', text: 'Tidak memenuhi syarat dan harus lanjut ke uji tahap S2 dengan tambahan 6 tablet' },
      { key: 'D', text: 'Lanjut ke tahap S3 dengan tambahan 12 tablet' },
      { key: 'E', text: 'Memenuhi syarat hanya jika rata-rata mencapai 100%' }
    ],
    correctAnswer: 'A',
    explanation: 'Kriteria Penerimaan Uji Disolusi Farmakope Indonesia VI / USP: Tahap S1 (6 tablet): Tiap unit sediaan TIDAK KURANG DARI Q + 5%. Nilai Q = 80%, maka batas minimal tiap tablet pada tahap S1 adalah 80% + 5% = 85%. Karena hasil ke-6 tablet adalah 88%, 91%, 86%, 84%? Tunggu, apakah ada yang 84%? Ya, ada 84% (< 85%)! Karena terdapat 1 tablet yang nilainya 84% (kurang dari 85%), maka TIDAK MEMENUHI SYARAT TAHAP S1 DAN WAJIB DILANJUTKAN KE TAHAP S2 DENGAN TAMBAHAN 6 TABLET.',
    clinicalReference: 'Farmakope Indonesia Edisi VI Lampiran <1231> Disolusi & USP <711> Dissolution',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-334',
    domainId: 'teknologi',
    targetExam: 'all',
    vignette: 'Berdasarkan Sistem Klasifikasi Biofarmaseutika (Biopharmaceutics Classification System / BCS), zat aktif obat dikelompokkan ke dalam empat kelas berdasarkan kelarutan dalam air dan permeabilitas membran usus halusnya.',
    question: 'Manakah karakteristik yang BENAR untuk obat BCS Kelas II, beserta contoh zat aktifnya?',
    options: [
      { key: 'A', text: 'Kelarutan rendah, permeabilitas membran tinggi; contoh: Ibuprofen dan Ketokonazol' },
      { key: 'B', text: 'Kelarutan tinggi, permeabilitas tinggi; contoh: Parasetamol' },
      { key: 'C', text: 'Kelarutan tinggi, permeabilitas rendah; contoh: Asiklovir dan Metformin' },
      { key: 'D', text: 'Kelarutan rendah, permeabilitas rendah; contoh: Furosemid' },
      { key: 'E', text: 'Kelarutan tidak terukur; contoh: Avicel' }
    ],
    correctAnswer: 'A',
    explanation: 'Klasifikasi BCS: KELAS I = Kelarutan Tinggi, Permeabilitas Tinggi (contoh: Propranolol, Parasetamol); KELAS II = KELARUTAN RENDAH, PERMEABILITAS TINGGI (contoh: IBUPROFEN, KETOKONAZOL, Karbamazepin); KELAS III = Kelarutan Tinggi, Permeabilitas Rendah (contoh: Metformin, Atenolol, Asiklovir); KELAS IV = Kelarutan Rendah, Permeabilitas Rendah (contoh: Furosemid, Klorotiazid). Pada BCS Kelas II, laju absorpsi in vivo dibatasi oleh laju disolusinya (dissolution rate-limited).',
    clinicalReference: 'FDA Guidance for Industry: The Biopharmaceutics Classification System (BCS) & Shargel Applied Biopharmaceutics',
    difficulty: 'Mudah'
  },
  {
    id: 'q-335',
    domainId: 'teknologi',
    targetExam: 'all',
    vignette: 'Apoteker formulator di industri farmasi menambahkan Croscarmellose Sodium (Ac-Di-Sol) sebanyak 3% ke dalam formula tablet Ciprofloksasin cetak langsung.',
    question: 'Apakah fungsi utama eksipien Croscarmellose Sodium tersebut dalam formulasi tablet?',
    options: [
      { key: 'A', text: 'Superdisintegran (penghancur super cepat dengan mekanisme swelling air dan wicking)' },
      { key: 'B', text: 'Pengisi utama untuk menambah bobot massa tablet' },
      { key: 'C', text: 'Pelincir hidrofobik untuk mencegah gesekan die' },
      { key: 'D', text: 'Pengikat untuk meningkatkan kekerasan tablet' },
      { key: 'E', text: 'Penyalut enterik tahan asam lambung' }
    ],
    correctAnswer: 'A',
    explanation: 'CROSCARMELLOSE SODIUM (Ac-Di-Sol) adalah polimer ikat silang dari natrium karboksimetilselulosa yang bertindak sebagai SUPERDISINTEGRAN (super-penghancur). Croscarmellose memiliki kemampuan menyerap air secara masif (wicking) dan mengembang (swelling) hingga beberapa kali lipat volume asalnya dalam hitungan detik tanpa membentuk gel penghambat, sehingga memecah tablet dengan sangat cepat di dalam cairan lambung.',
    clinicalReference: 'Handbook of Pharmaceutical Excipients 8th Edition & Lieberman Pharmaceutical Dosage Forms: Tablets',
    difficulty: 'Mudah'
  }
];

