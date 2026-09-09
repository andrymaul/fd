import { ExamQuestion } from '../competencyExamData';

/**
 * Bank Soal CBT Tambahan - Domain 3: Teknologi Farmasi & Formulasi Industri (CPOB)
 * Mengacu pada Blueprint KFN, Farmakope Indonesia VI & Pedoman CPOB BPOM RI
 */
export const CBT_TECHNOLOGY_EXPANSION: ExamQuestion[] = [
  {
    id: 'q-123',
    domainId: 'teknologi',
    vignette: 'Departemen Produksi industri farmasi sedang melakukan proses pengempaan tablet Parasetamol 500 mg dengan mesin cetak rotari. Saat proses berjalan, operator menemukan bahwa lapisan atas permukaan tablet terbelah dan terlepas secara horizontal dari badan utama tablet.',
    question: 'Kerusakan fisik tablet (tablet defect) apakah yang sedang terjadi dan apakah penyebab utamanya?',
    options: [
      { key: 'A', text: 'Capping; akibat terperangkapnya udara (air entrapment) di dalam granul saat pengempaan' },
      { key: 'B', text: 'Mottling; akibat distribusi zat warna yang tidak merata' },
      { key: 'C', text: 'Sticking; akibat granul terlalu kering' },
      { key: 'D', text: 'Picking; akibat punch bawah macet' },
      { key: 'E', text: 'Chipping; akibat kelebihan zat pelincir (lubricant)' }
    ],
    correctAnswer: 'A',
    explanation: 'CAPPING adalah fenomena terlepas atau terbelahnya bagian mahkota (tutup atas atau bawah) tablet secara horizontal dari badan utama tablet. Penyebab utamanya adalah udara yang terperangkap (air entrapment) di dalam rongga granul selama proses kompresi cepat, terlalu banyaknya serbuk halus (fines), atau kelembaban granul yang terlalu rendah. Jika terbelah menjadi beberapa lapisan bertingkat disebut LAMINATION. Solusinya antara lain: mengurangi fines, menambahkan pengikat, menurunkan kecepatan mesin cetak, atau menggunakan punch berkonkaf khusus.',
    clinicalReference: 'The Theory and Practice of Industrial Pharmacy (Lachman & Lieberman) & Farmakope Indonesia VI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-124',
    domainId: 'teknologi',
    vignette: 'Bagian R&D industri farmasi sedang mengembangkan tablet salut enterik Natrium Diklofenak 50 mg untuk mencegah iritasi mukosa lambung dan memastikan zat aktif baru terdisolusi di lingkungan usus halus (pH basa netral > 6,0).',
    question: 'Polimer penyalut (coating polymer) manakah yang paling tepat dipilih untuk menghasilkan sifat salut enterik yang tahan terhadap asam lambung?',
    options: [
      { key: 'A', text: 'Hidroksipropil Metilselulosa (HPMC)' },
      { key: 'B', text: 'Selulosa Asetat Ftalat (CAP) / Eudragit L' },
      { key: 'C', text: 'Polivinilpirolidon (PVP / Povidon)' },
      { key: 'D', text: 'Polietilen Glikol (PEG 4000)' },
      { key: 'E', text: 'Karboksimetilselulosa Natrium (Na-CMC)' }
    ],
    correctAnswer: 'B',
    explanation: 'Polimer salut enterik (enteric coating) harus memiliki gugus karboksilat bebas yang tidak terionisasi dan tidak larut pada pH asam lambung (pH 1-3), namun akan terionisasi, larut, dan melepaskan obat saat mencapai pH usus (pH > 5,5-6,8). Contoh polimer salut enterik standar adalah Selulosa Asetat Ftalat (CAP), Hidroksipropil Metilselulosa Ftalat (HPMCP), dan kopolimer asam metakrilat (Eudragit L dan Eudragit S). Sebaliknya, HPMC, PVP, dan PEG larut dalam air pada semua rentang pH dan hanya digunakan sebagai salut selaput (film coating) konvensional.',
    clinicalReference: 'Pharmaceutical Dosage Forms: Tablets (Lieberman) & Farmakope Indonesia VI',
    difficulty: 'Sedang'
  },
  {
    id: 'q-125',
    domainId: 'teknologi',
    vignette: 'Sebuah industri farmasi memproduksi sediaan injeksi Ampisilin Natrium 1 gram serbuk steril untuk rekonstitusi. Karena Ampisilin Natrium tidak tahan terhadap pemanasan suhu tinggi (termolabil), proses sterilisasi sediaan dilakukan secara aseptis.',
    question: 'Berdasarkan Pedoman CPOB 2018/2024, di kelas ruangan manakah proses pengisian aseptis (aseptic filling) serbuk steril tersebut wajib dilakukan dan berapa batas maksimal jumlah partikel non-viabel ukuran >= 0,5 μm per m³ pada kondisi operasional?',
    options: [
      { key: 'A', text: 'Kelas A; maksimal 3.520 partikel/m³' },
      { key: 'B', text: 'Kelas B; maksimal 352.000 partikel/m³' },
      { key: 'C', text: 'Kelas C; maksimal 3.520.000 partikel/m³' },
      { key: 'D', text: 'Kelas D; batas tidak ditetapkan' },
      { key: 'E', text: 'Kelas E; maksimal 3.520 partikel/m³' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Pedoman CPOB (Cara Pembuatan Obat yang Baik) Aneks 1 Pembuatan Produk Steril, zona untuk kegiatan berisiko tinggi seperti pengisian sediaan steril secara aseptis (aseptic filling) dan penyambungan aseptis WAJIB dilakukan di ruang KELAS A (di bawah aliran udara laminer / LAF dengan kecepatan 0,36 - 0,54 m/detik). Batas maksimal partikel ukuran >= 0,5 μm untuk Kelas A baik pada kondisi non-operasional (at rest) maupun operasional (in operation) adalah 3.520 partikel per meter kubik (ekuivalen ISO 5 / Class 100).',
    clinicalReference: 'Pedoman Cara Pembuatan Obat yang Baik (CPOB) BPOM RI Aneks 1: Pembuatan Produk Steril',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-126',
    domainId: 'teknologi',
    vignette: 'Departemen Pengawasan Mutu (Quality Control) melakukan Uji Disolusi Tahap 1 (S1) terhadap 6 tablet Kaptopril 25 mg. Dari hasil uji didapatkan nilai Q pada monografi adalah 80% dalam waktu 30 menit. Hasil disolusi ke-6 tablet adalah: 79%, 83%, 85%, 86%, 88%, dan 91%.',
    question: 'Berdasarkan Farmakope Indonesia VI, bagaimanakah kesimpulan hasil uji disolusi Tahap 1 (S1) tersebut dan apa tindakan yang harus diambil?',
    options: [
      { key: 'A', text: 'Memenuhi syarat (Lulus S1) karena rata-rata disolusi > 80%' },
      { key: 'B', text: 'Tidak memenuhi syarat S1; wajib dilanjutkan ke Uji Disolusi Tahap 2 (S2) dengan menambah 6 tablet' },
      { key: 'C', text: 'Tidak memenuhi syarat dan batch langsung dimusnahkan' },
      { key: 'D', text: 'Memenuhi syarat karena hanya 1 tablet yang berada di bawah Q' },
      { key: 'E', text: 'Ulangi uji dengan 6 tablet baru tanpa melihat data S1' }
    ],
    correctAnswer: 'B',
    explanation: 'Berdasarkan kriteria penerimaan Uji Disolusi Farmakope Indonesia VI: Pada Tahap 1 (S1), diuji 6 tablet. Kriteria LULUS S1 adalah: TIAP UNIT tablet tidak boleh kurang dari Q + 5% (artinya tiap tablet minimal 80% + 5% = 85%). Pada kasus di atas, terdapat tablet bernilai 79% dan 83% (< 85%), sehingga TIDAK LULUS kriteria S1. Tindakan wajib: Melanjutkan ke Uji Tahap 2 (S2) dengan menguji tambahan 6 tablet lagi (total 12 tablet). Kriteria S2: Rata-rata 12 tablet >= Q (80%) dan tidak ada satu unit pun yang kurang dari Q - 15% (65%).',
    clinicalReference: 'Farmakope Indonesia Edisi VI (2020) Lampiran Uji Disolusi <1231>',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-127',
    domainId: 'teknologi',
    vignette: 'Bagian R&D sedang melakukan uji stabilitas dipercepat (accelerated stability testing) terhadap sediaan sirup parasetamol baru untuk registrasi obat di BPOM RI (Zona Iklim IVB).',
    question: 'Berapakah kondisi suhu dan kelembaban relatif (RH) serta titik waktu (interval) pengujian yang dipersyaratkan untuk uji stabilitas dipercepat menurut pedoman ASEAN / ICH?',
    options: [
      { key: 'A', text: '40°C ± 2°C / 75% RH ± 5% RH pada bulan ke-0, 3, dan 6' },
      { key: 'B', text: '30°C ± 2°C / 75% RH ± 5% RH pada bulan ke-0, 3, 6, 9, 12' },
      { key: 'C', text: '25°C ± 2°C / 60% RH ± 5% RH pada bulan ke-0, 6, dan 12' },
      { key: 'D', text: '45°C ± 2°C / 80% RH ± 5% RH pada bulan ke-0, 1, 2, dan 3' },
      { key: 'E', text: '50°C ± 2°C / 75% RH ± 5% RH pada bulan ke-0, 2, dan 4' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan pedoman ASEAN Guideline on Stability Study of Drug Product dan ICH Q1A(R2), kondisi UJI STABILITAS DIPERCEPAT (Accelerated Testing) untuk produk yang dipasarkan di Zona Iklim IVB (Indonesia) adalah suhu 40°C ± 2°C dengan kelembaban relatif 75% RH ± 5% RH, diuji minimal pada interval bulan ke-0, 3, dan 6 (durasi minimal 6 bulan). Sedangkan kondisi UJI STABILITAS JANGKA PANJANG (Real Time / Long Term) untuk Zona IVB adalah 30°C ± 2°C / 75% RH ± 5% RH selama minimal 12 bulan (sampling bulan 0, 3, 6, 9, 12, 18, 24).',
    clinicalReference: 'ASEAN Guideline on Stability Study of Drug Product & Petunjuk Operasional Penerapan CPOB BPOM',
    difficulty: 'Sedang'
  }
];
