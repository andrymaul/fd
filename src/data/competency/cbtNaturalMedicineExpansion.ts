import { ExamQuestion } from '../competencyExamData';

/**
 * Bank Soal CBT Tambahan - Domain 4: Farmasi Bahan Alam & Fitofarmaka
 * Mengacu pada Blueprint KFN, Farmakope Herbal Indonesia & Regulasi BPOM RI
 */
export const CBT_NATURAL_MEDICINE_EXPANSION: ExamQuestion[] = [
  {
    id: 'q-128',
    domainId: 'bahan_alam',
    vignette: 'Sebuah industri obat tradisional (IOT) mengembangkan kapsul ekstrak seledri (Apium graveolens) dan ekstrak kumis kucing (Orthosiphon stamineus) untuk menurunkan tekanan darah ringan. Produk tersebut telah melalui uji standardisasi bahan baku, uji toksisitas akut dan subkronis pada hewan coba tikus, serta uji efektivitas farmakodinamik antihipertensi in vivo pada hewan model.',
    question: 'Berdasarkan regulasi BPOM RI, termasuk ke dalam golongan obat bahan alam manakah produk tersebut dan apakah logo penandaan resminya?',
    options: [
      { key: 'A', text: 'Obat Herbal Terstandar (OHT); logo jari-jari daun (3 pasang) terletak dalam lingkaran' },
      { key: 'B', text: 'Jamu; logo ranting daun terletak dalam lingkaran' },
      { key: 'C', text: 'Fitofarmaka; logo jari-jari daun membentuk bintang terletak dalam lingkaran' },
      { key: 'D', text: 'Suplemen Kesehatan Luar; logo pohon kelapa' },
      { key: 'E', text: 'Obat Kuasi; logo lingkaran hijau bergaris hitam' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Peraturan BPOM RI tentang Kriteria dan Tata Laksana Pendaftaran Obat Bahan Alam: (1) JAMU dibuktikan berdasarkan data empiris/turun-temurun (logo ranting daun hijau dalam lingkaran), (2) OBAT HERBAL TERSTANDAR (OHT) telah dibuktikan keamanan dan khasiatnya secara ilmiah melalui UJI PRA-KLINIS (hewan coba) serta bahan bakunya terstandarisasi (logo jari-jari daun 3 pasang membentuk lingkaran), dan (3) FITOFARMAKA telah melalui uji pra-klinis DAN UJI KLINIS pada manusia serta bahan baku dan produk jadinya terstandarisasi (logo jari-jari daun membentuk bintang dalam lingkaran). Karena produk baru diuji sampai tahap hewan coba, golongannya adalah OHT.',
    clinicalReference: 'Peraturan BPOM RI No. 32 Tahun 2019 tentang Persyaratan Keamanan dan Mutu Obat Bahan Alam',
    difficulty: 'Mudah'
  },
  {
    id: 'q-129',
    domainId: 'bahan_alam',
    vignette: 'Seorang apoteker di bagian R&D ekstrak bahan alam sedang mengisolasi senyawa kurkuminoid dari rimpang Temulawak (Curcuma xanthorrhiza). Senyawa aktif kurkuminoid bersifat termolabil jika dipanaskan terus-menerus pada titik didih tinggi dalam waktu lama, namun membutuhkan pelarut etanol 96% dalam jumlah efisien.',
    question: 'Metode ekstraksi dingin berkesinambungan manakah yang paling tepat dipilih untuk mengekstraksi simplisia yang mengandung zat aktif termolabil tersebut tanpa pemanasan langsung?',
    options: [
      { key: 'A', text: 'Perkolasi' },
      { key: 'B', text: 'Sokletasi' },
      { key: 'C', text: 'Refluks' },
      { key: 'D', text: 'Dekoksi' },
      { key: 'E', text: 'Digesti' }
    ],
    correctAnswer: 'A',
    explanation: 'PERKOLASI adalah metode ekstraksi dingin yang dilakukan dengan mengalirkan pelarut secara perlahan melalui serbuk simplisia dalam alat perkolator. Metode ini sangat ideal untuk senyawa yang bersifat TERMOLABIL (rusak oleh panas) karena dilakukan pada suhu kamar tanpa pemanasan, dan menghasilkan ekstraksi yang lebih sempurna dibanding maserasi karena adanya aliran pelarut baru yang menjaga gradien konsentrasi tetap tinggi. Sokletasi dan Refluks menggunakan pemanasan mendidih terus-menerus sehingga tidak cocok untuk zat yang termolabil.',
    clinicalReference: 'Farmakope Herbal Indonesia (FHI) Edisi II & Buku Ajar Ekstraksi Bahan Alam',
    difficulty: 'Sedang'
  },
  {
    id: 'q-130',
    domainId: 'bahan_alam',
    vignette: 'Departemen Quality Control melakukan pengujian parameter non-spesifik terhadap ekstrak kental daun Jambu Biji (Psidium guajava). Salah satu uji wajib adalah penetapan batas cemaran logam berat berbahaya menggunakan instrumen Spektrofotometri Serapan Atom (AAS).',
    question: 'Manakah empat jenis logam berat toksik yang dipersyaratkan wajib diuji kadarnya dan tidak boleh melebihi ambang batas toleransi BPOM RI?',
    options: [
      { key: 'A', text: 'Timbal (Pb), Kadmium (Cd), Arsen (As), dan Merkuri (Hg)' },
      { key: 'B', text: 'Besi (Fe), Tembaga (Cu), Seng (Zn), dan Kalsium (Ca)' },
      { key: 'C', text: 'Natrium (Na), Kalium (K), Magnesium (Mg), dan Klorida (Cl)' },
      { key: 'D', text: 'Aluminium (Al), Silikon (Si), Mangan (Mn), dan Emas (Au)' },
      { key: 'E', text: 'Perak (Ag), Nikel (Ni), Kromium (Cr), dan Kobalt (Co)' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Peraturan BPOM RI tentang Persyaratan Mutu Obat Tradisional dan Farmakope Herbal Indonesia, empat cemaran logam berat toksik wajib yang harus diuji dan memiliki batas maksimal ketat adalah: (1) Timbal (Pb <= 10 mg/kg atau ppm), (2) Kadmium (Cd <= 0,3 mg/kg), (3) Arsen (As <= 5 mg/kg), dan (4) Merkuri (Hg <= 0,5 mg/kg). Logam-logam ini bersifat karsinogenik, nefrotoksik, dan dapat terakumulasi secara biologis dalam jaringan tubuh manusia.',
    clinicalReference: 'Peraturan BPOM RI No. 32 Tahun 2019 & Farmakope Herbal Indonesia Edisi II',
    difficulty: 'Mudah'
  },
  {
    id: 'q-131',
    domainId: 'bahan_alam',
    vignette: 'Dalam Farmakope Herbal Indonesia (FHI), setiap ekstrak tumbuhan obat wajib memiliki senyawa identitas / marker aktif yang ditetapkan kadarnya menggunakan Kromatografi Cair Kinerja Tinggi (KCKT / HPLC) atau KLT Densitometri.',
    question: 'Pasangan simplisia dan senyawa marker aktif spesifik manakah yang BENAR menurut monografi Farmakope Herbal Indonesia?',
    options: [
      { key: 'A', text: 'Daun Sambiloto (Andrographis paniculata) - Andrografolid' },
      { key: 'B', text: 'Rimpang Kunyit (Curcuma longa) - Piperin' },
      { key: 'C', text: 'Buah Lada Hitam (Piper nigrum) - Kuersetin' },
      { key: 'D', text: 'Kulit Manggis (Garcinia mangostana) - Sinensetin' },
      { key: 'E', text: 'Daun Kumis Kucing (Orthosiphon stamineus) - Mangostin' }
    ],
    correctAnswer: 'A',
    explanation: 'Pasangan simplisia dan senyawa penanda (marker) aktif yang tepat menurut Farmakope Herbal Indonesia adalah: Daun Sambiloto (Andrographis paniculata) mengandung marker lakton diterpenoid ANDROGRAFOLID (khasiat imunomodulator & antiinflamasi). Pasangan yang benar lainnya adalah: Kunyit/Temulawak (Kurkuminoid/Xanthorrhizol), Lada Hitam (Piperin), Kulit Manggis (Alfa-Mangostin), dan Daun Kumis Kucing (Sinensetin).',
    clinicalReference: 'Farmakope Herbal Indonesia (FHI) Edisi II (2017) & Materia Medika Indonesia',
    difficulty: 'Sedang'
  }
];
