import { ExamQuestion } from '../competencyExamData';

/**
 * Bank Soal CBT Tambahan - Domain 2: Manajemen Farmasi, Farmakoekonomi & Hukum/Regulasi
 * Mengacu pada Blueprint KFN, UU Kesehatan No. 17/2023 & Standar Nasional UKMPPAI
 */
export const CBT_MANAGEMENT_EXPANSION: ExamQuestion[] = [
  {
    id: 'q-118',
    domainId: 'manajemen',
    vignette: 'Apoteker penanggung jawab apotek (APA) sedang menyusun Surat Pesanan (SP) untuk pengadaan obat-obatan ke Pedagang Besar Farmasi (PBF). Obat yang hendak dipesan meliputi: Fentanil Injeksi, Morfin Tablet, Kodein 10 mg Tablet, dan Petidin Injeksi.',
    question: 'Berdasarkan regulasi Permenkes No. 3 Tahun 2015, berapakah jumlah lembar Surat Pesanan Narkotika yang harus dibuat dan berapa maksimal item obat yang boleh dicantumkan dalam 1 lembar SP tersebut?',
    options: [
      { key: 'A', text: '1 lembar SP memuat maksimal 1 item obat, dibuat rangkap 4' },
      { key: 'B', text: '1 lembar SP memuat maksimal 3 item obat, dibuat rangkap 3' },
      { key: 'C', text: '1 lembar SP memuat maksimal 5 item obat, dibuat rangkap 4' },
      { key: 'D', text: '1 lembar SP boleh memuat semua item obat narkotika, dibuat rangkap 2' },
      { key: 'E', text: '1 lembar SP memuat maksimal 1 item obat, dibuat rangkap 2' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Permenkes RI No. 3 Tahun 2015 tentang Peredaran, Penyimpanan, Pemusnahan, dan Pelaporan Narkotika, Psikotropika, dan Prekursor Farmasi, Surat Pesanan (SP) NARKOTIKA memiliki ketentuan paling ketat: (1) SATU lembar Surat Pesanan hanya boleh memuat SATU jenis/item obat Narkotika (khusus untuk 4 item obat di atas harus dibuat 4 lembar SP terpisah), dan (2) Surat Pesanan Narkotika wajib dibuat sekurang-kurangnya RANGKAP 4 (3 lembar untuk PBF, 1 lembar untuk arsip apotek). Sedangkan SP Psikotropika dan Prekursor boleh memuat lebih dari 1 item dan dibuat rangkap 3.',
    clinicalReference: 'Peraturan Menteri Kesehatan RI No. 3 Tahun 2015 Pasal 9-16',
    difficulty: 'Mudah'
  },
  {
    id: 'q-119',
    domainId: 'manajemen',
    vignette: 'Apoteker di apotek sedang melakukan verifikasi pengadaan Obat-Obat Tertentu (OOT) yang sering disalahgunakan sesuai Peraturan BPOM No. 10 Tahun 2019. PBF mengirimkan paket pesanan beserta faktur pengiriman.',
    question: 'Manakah di bawah ini yang seluruhnya termasuk dalam kelompok Obat-Obat Tertentu (OOT) yang pengawasannya diperketat oleh BPOM?',
    options: [
      { key: 'A', text: 'Tramadol, Triheksifenidil, Klorpromazin, Amitriptilin, Haloperidol, Dekstrometorfan' },
      { key: 'B', text: 'Diazepam, Lorazepam, Alprazolam, Klobazam, Klonazepam' },
      { key: 'C', text: 'Pseudoefedrin, Efedrin, Fenilpropanolamin, Ergotamin' },
      { key: 'D', text: 'Morfin, Petidin, Fentanil, Oksikodon' },
      { key: 'E', text: 'Amoksisilin, Siprofloksasin, Sefadroksil, Azitromisin' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Peraturan BPOM RI No. 10 Tahun 2019 tentang Pedoman Pengelolaan Obat-Obat Tertentu yang Sering Disalahgunakan, kriteria OOT mencakup 6 zat aktif: (1) Tramadol, (2) Triheksifenidil, (3) Klorpromazin, (4) Amitriptilin, (5) Haloperidol, dan (6) Dekstrometorfan. OOT memiliki format Surat Pesanan (SP) khusus tersendiri dan tidak boleh dicampur dengan obat non-OOT. Pilihan B adalah Psikotropika, pilihan C adalah Prekursor, dan pilihan D adalah Narkotika.',
    clinicalReference: 'Peraturan BPOM RI No. 10 Tahun 2019 tentang Pengelolaan Obat-Obat Tertentu',
    difficulty: 'Sedang'
  },
  {
    id: 'q-120',
    domainId: 'manajemen',
    vignette: 'Sebuah apotek memiliki data kebutuhan Kapsul Gabapentin 300 mg sebanyak 10.000 strip per tahun. Biaya setiap kali pemesanan adalah Rp 50.000, dan biaya penyimpanan diperkirakan Rp 1.000 per strip per tahun. Apoteker ingin menghitung jumlah pemesanan paling ekonomis menggunakan rumus Economic Order Quantity (EOQ).',
    question: 'Berapakah nilai Economic Order Quantity (EOQ) strip Gabapentin yang harus dipesan dalam setiap kali order?',
    options: [
      { key: 'A', text: '500 strip' },
      { key: 'B', text: '1.000 strip' },
      { key: 'C', text: '1.414 strip' },
      { key: 'D', text: '2.000 strip' },
      { key: 'E', text: '5.000 strip' }
    ],
    correctAnswer: 'B',
    explanation: 'Rumus Economic Order Quantity (EOQ): EOQ = √( (2 x R x S) / H )\nKeterangan: R = Jumlah kebutuhan tahunan = 10.000 strip; S = Biaya pemesanan per order = Rp 50.000; H = Biaya simpan per unit per tahun = Rp 1.000.\nPerhitungan:\nEOQ = √( (2 x 10.000 x 50.000) / 1.000 )\nEOQ = √( 1.000.000.000 / 1.000 )\nEOQ = √( 1.000.000 ) = 1.000 strip.\nJadi pesanan paling ekonomis adalah 1.000 strip setiap kali order.',
    clinicalReference: 'Manajemen Farmasi Teori & Praktik (Quick et al., Managing Drug Supply) & Pedoman Pengelolaan Perbekalan Farmasi',
    difficulty: 'Sedang'
  },
  {
    id: 'q-121',
    domainId: 'manajemen',
    vignette: 'Sebuah rumah sakit sedang mengevaluasi pengadaan dua obat antihipertensi baru (Obat A vs Obat B) untuk dimasukkan ke Formularium Rumah Sakit. Dari uji klinis didapatkan data:\n• Obat A: Biaya total terapi Rp 2.000.000 per tahun dengan efektivitas penurunan tekanan darah sistolik rata-rata 14 mmHg.\n• Obat B: Biaya total terapi Rp 3.500.000 per tahun dengan efektivitas penurunan tekanan darah sistolik rata-rata 19 mmHg.',
    question: 'Berapakah nilai Incremental Cost-Effectiveness Ratio (ICER) Obat B dibandingkan Obat A per mmHg penurunan tekanan darah sistolik?',
    options: [
      { key: 'A', text: 'Rp 150.000 / mmHg' },
      { key: 'B', text: 'Rp 300.000 / mmHg' },
      { key: 'C', text: 'Rp 500.000 / mmHg' },
      { key: 'D', text: 'Rp 700.000 / mmHg' },
      { key: 'E', text: 'Rp 1.500.000 / mmHg' }
    ],
    correctAnswer: 'B',
    explanation: 'Rumus ICER (Incremental Cost-Effectiveness Ratio):\nICER = (Biaya B - Biaya A) / (Efektivitas B - Efektivitas A)\nPerhitungan:\nSelisih Biaya (ΔC) = Rp 3.500.000 - Rp 2.000.000 = Rp 1.500.000\nSelisih Efektivitas (ΔE) = 19 mmHg - 14 mmHg = 5 mmHg\nICER = Rp 1.500.000 / 5 mmHg = Rp 300.000 per mmHg penurunan tekanan darah sistolik.',
    clinicalReference: 'Pedoman Penerapan Farmakoekonomi Kemenkes RI & ISPOR Guidelines',
    difficulty: 'Sedang'
  },
  {
    id: 'q-122',
    domainId: 'manajemen',
    vignette: 'Seorang apoteker penanggung jawab apotek membeli suplemen Coenzyme Q10 dari PBF dengan Harga Pokok Pembelian (HPP) Rp 200.000 per botol (sudah termasuk PPN 11%). Apotek menghendaki margin laba kotor sebesar 25% dari Harga Jual Apotek (HJA).',
    question: 'Berapakah Harga Jual Apotek (HJA) per botol suplemen tersebut?',
    options: [
      { key: 'A', text: 'Rp 240.000' },
      { key: 'B', text: 'Rp 250.000' },
      { key: 'C', text: 'Rp 266.667' },
      { key: 'D', text: 'Rp 275.000' },
      { key: 'E', text: 'Rp 300.000' }
    ],
    correctAnswer: 'C',
    explanation: 'Terdapat perbedaan mendasar antara "Margin Laba dari Harga Jual" (Gross Margin) dan "Markup dari Harga Beli":\nJika margin laba adalah 25% dari HJA (Harga Jual Apotek):\nHPP = HJA - (Margin x HJA) = HJA x (1 - Margin)\nHJA = HPP / (1 - Margin)\nHJA = Rp 200.000 / (1 - 0,25) = Rp 200.000 / 0,75 = Rp 266.667.\n(Catatan: Jika markup dari harga beli, nilainya Rp 200.000 x 1,25 = Rp 250.000, tetapi soal secara eksplisit menyatakan "margin laba dari HJA", sehingga pembaginya adalah 1 - margin).',
    clinicalReference: 'Buku Ajar Manajemen Farmasi & Perhitungan Akuntansi Farmasi',
    difficulty: 'Sedang'
  }
];
