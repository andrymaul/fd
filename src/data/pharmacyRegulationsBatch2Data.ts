import type { RegulationItem } from './pharmacyRegulationsData';

// ============================================================================
// BATCH 2: EKSPANSI 22 REGULASI & KEBIJAKAN FARMASI INDONESIA LENGKAP
// Membedah Spesifik DOWA 1, 2, 3, UU Perlindungan Konsumen, PP Pengamanan Obat,
// Permenkes 5/2023 Narkotika Baru, STR Seumur Hidup, PSEF Online & PerBPOM
// Total 22 Regulasi Baru (Meningkatkan database dari 30 menjadi 52 Regulasi)
// ============================================================================

export const ADDITIONAL_PHARMACY_REGULATIONS: RegulationItem[] = [
  // =========================================================================
  // KATEGORI: DAFTAR OBAT WAJIB APOTEK (DOWA 1, 2, 3 SPESIFIK)
  // =========================================================================
  {
    id: 'reg-dowa-1-1990',
    regNumber: 'Kepmenkes No. 347/Menkes/SK/VII/1990',
    title: 'Keputusan Menteri Kesehatan RI Nomor 347/Menkes/SK/VII/1990 tentang Obat Wajib Apotek (DOWA No. 1)',
    type: 'dowa',
    typeLabel: 'Daftar DOWA (1, 2, 3)',
    year: 1990,
    issuingAuthority: 'Menteri Kesehatan Republik Indonesia',
    status: 'Berlaku',
    summary: 'Tonggak sejarah pertama yang memberikan wewenang legal bagi Apoteker di apotek untuk menyerahkan obat keras tertentu tanpa resep dokter, guna memperluas keterjangkauan swamedikasi rasional masyarakat dengan syarat pemenuhan kriteria ketat dan pencatatan pasien.',
    scope: 'Apoteker Pengelola Apotek (APA) dan Apoteker Pendamping di seluruh Apotek di Indonesia.',
    keyArticles: [
      {
        articleNumber: 'Pasal 1 & 2',
        topic: 'Kewenangan Apoteker Menyerahkan Obat Keras Tertentu',
        content: 'Obat Wajib Apotek adalah obat keras yang dapat diserahkan oleh Apoteker kepada pasien di apotek tanpa resep dokter.',
        clinicalImplication: 'Hanya Apoteker (bukan asisten apoteker/tenaga non-farmasi) yang berwenang secara hukum melakukan skrining indikasi dan menyerahkan obat DOWA.'
      },
      {
        articleNumber: 'Pasal 3',
        topic: 'Kewajiban Apoteker Saat Pelayanan DOWA',
        content: 'Apoteker wajib: (1) Memenuhi batas jumlah maksimal penyerahan; (2) Membuat catatan pasien dan obat yang diserahkan; (3) Memberikan informasi obat jelas mengenai dosis, cara pemakaian, efek samping, dan kontraindikasi.',
        clinicalImplication: 'Wajib mencatat identitas pasien dan riwayat keluhan di Buku Catatan Pelayanan Obat Wajib Apotek.'
      }
    ],
    drugListsOrSchedules: [
      {
        category: 'Kontrasepsi Oral (KB)',
        items: [
          'Linestrenol (Maksimal 1 siklus)',
          'Etinilestradiol + Levonorgestrel (Maksimal 1 siklus)'
        ],
        rules: 'Hanya diberikan kepada akseptor aktif yang telah memiliki kartu KB atau pernah berkonsultasi ke dokter/bidan sebelumnya.'
      },
      {
        category: 'Saluran Cerna & Spasme',
        items: [
          'Antasida kombinasi Antispasmodik / Papaverin (Maksimal 20 tablet)',
          'Metoklopramid tablet 10 mg (Maksimal 20 tablet)',
          'Bisakodil suppositoria (Maksimal 3 suppositoria)'
        ],
        rules: 'Untuk mual muntah atau konstipasi akut jangka pendek; bila keluhan berlanjut rujuk ke dokter.'
      },
      {
        category: 'Mukolitik & Sekretolitik Saluran Napas',
        items: [
          'Asetilsistein 200 mg (Maksimal 20 kapsul / sachet)',
          'Karbosistein (Maksimal 1 botol sirup / 20 kapsul)',
          'Bromheksin (Maksimal 1 botol sirup / 20 tablet)'
        ],
        rules: 'Pelega dahak pada batuk produktif non-spesifik.'
      },
      {
        category: 'Analgesik & Antiinflamasi',
        items: [
          'Asam Mefenamat 500 mg (Maksimal 20 tablet)',
          'Metampiron / Antalgin (Maksimal 20 tablet)'
        ],
        rules: 'Nyeri sakit gigi, dismenore haid, atau sakit kepala akut.'
      },
      {
        category: 'Antihelmintik (Obat Cacing)',
        items: [
          'Mebendazol (Maksimal 6 tablet)'
        ],
        rules: 'Infeksi cacing kremi, gelang, dan tambang.'
      }
    ],
    sanctionsOrPenalties: [
      'Peringatan tertulis dari Dinas Kesehatan Kabupaten/Kota atau Balai POM.',
      'Sanksi administratif penghentian sementara penyerahan obat keras.',
      'Pelanggaran pidana bila menyerahkan obat keras di luar daftar DOWA tanpa resep dokter.'
    ],
    notes: 'DOWA No. 1 adalah landasan hukum dasar swamedikasi terpandu di apotek Indonesia.'
  },
  {
    id: 'reg-dowa-2-1993',
    regNumber: 'Kepmenkes No. 924/Menkes/Per/X/1993',
    title: 'Peraturan Menteri Kesehatan RI Nomor 924/Menkes/Per/X/1993 tentang Daftar Obat Wajib Apotek No. 2',
    type: 'dowa',
    typeLabel: 'Daftar DOWA (1, 2, 3)',
    year: 1993,
    issuingAuthority: 'Menteri Kesehatan Republik Indonesia',
    status: 'Berlaku',
    summary: 'Memperluas daftar obat keras yang dapat diserahkan oleh Apoteker tanpa resep dokter untuk mengatasi keluhan umum masyarakat, mencakup NSAID modern (Ibuprofen), kortikosteroid oral darurat, antijamur topikal, dan obat tukak lambung.',
    scope: 'Pelayanan swamedikasi resmi di Apotek seluruh Indonesia.',
    keyArticles: [
      {
        articleNumber: 'Lampiran Permenkes 924/1993',
        topic: 'Daftar Tambahan Obat Keras DOWA No. 2',
        content: 'Menetapkan daftar jenis dan batasan jumlah obat keras yang dapat diserahkan oleh Apoteker kepada pasien tanpa resep dokter.',
        clinicalImplication: 'Memberikan dasar hukum bagi penyerahan Ibuprofen dan Omeprazol tanpa resep dokter dengan jumlah terbatas.'
      }
    ],
    drugListsOrSchedules: [
      {
        category: 'Analgesik & NSAID',
        items: [
          'Ibuprofen tablet 400 mg (Maksimal 10 tablet)',
          'Ibuprofen tablet 200 mg (Maksimal 10 tablet)',
          'Piroksikam tablet 10 mg (Maksimal 10 tablet)'
        ],
        rules: 'Untuk nyeri ringan hingga sedang; edukasi wajib diminum sesudah makan untuk mencegah iritasi lambung.'
      },
      {
        category: 'Kortikosteroid Oral (Alergi / Asma Akut)',
        items: [
          'Deksametason tablet 0.5 mg (Maksimal 10 tablet)',
          'Prednison tablet 5 mg (Maksimal 10 tablet)'
        ],
        rules: 'Hanya untuk penanganan reaksi alergi akut atau serangan asma darurat; tidak boleh untuk terapi jangka panjang.'
      },
      {
        category: 'Saluran Cerna (Tukak Lambung & Dispepsia)',
        items: [
          'Omeprazol kapsul 20 mg (Maksimal 7 kapsul)',
          'Sukralfat tablet 500 mg (Maksimal 20 tablet)'
        ],
        rules: 'Untuk keluhan rasa terbakar di dada (heartburn) dan hiperasiditas lambung akut; bila 7 hari tidak membaik rujuk ke dokter spesialis.'
      },
      {
        category: 'Antijamur Topikal Kulit',
        items: [
          'Ketokonazol krim 2% (Maksimal 1 tube 5 - 15 gram)'
        ],
        rules: 'Infeksi tinea korporis, tinea kruris, tinea pedis, dan panu.'
      },
      {
        category: 'Bronkodilator Asma',
        items: [
          'Salbutamol tablet 2 mg (Maksimal 20 tablet)',
          'Salbutamol sirup (Maksimal 1 botol)'
        ],
        rules: 'Pelega sesak napas asma pada pasien yang telah terdiagnosa asma sebelumnya.'
      }
    ],
    sanctionsOrPenalties: [
      'Pemberian melebihi batas maksimal (misal: memberikan Omeprazol > 7 kapsul tanpa resep) melanggar ketentuan peredaran obat keras dan dapat dikenai teguran dinas.'
    ],
    notes: 'Batasan 7 kapsul pada Omeprazol dirancang agar pasien tidak menutupi gejala dini kanker lambung tanpa evaluasi endoskopi.'
  },
  {
    id: 'reg-dowa-3-1999',
    regNumber: 'Kepmenkes No. 1176/Menkes/SK/X/1999',
    title: 'Keputusan Menteri Kesehatan RI Nomor 1176/Menkes/SK/X/1999 tentang Daftar Obat Wajib Apotek No. 3',
    type: 'dowa',
    typeLabel: 'Daftar DOWA (1, 2, 3)',
    year: 1999,
    issuingAuthority: 'Menteri Kesehatan Republik Indonesia',
    status: 'Berlaku',
    summary: 'Pembaruan daftar DOWA yang mengesahkan penyerahan obat antihistamin generasi baru, antihipertensi terapi lanjutan, obat asam urat, serta antibiotik topikal mata dan kulit dengan batasan jumlah yang sangat ketat.',
    scope: 'Praktik kefarmasian di Apotek seluruh Indonesia.',
    keyArticles: [
      {
        articleNumber: 'Diktum Kesatu & Kedua',
        topic: 'Daftar Obat Tambahan DOWA No. 3',
        content: 'Menambahkan obat-obat keras tertentu ke dalam Obat Wajib Apotek yang dapat diserahkan Apoteker tanpa resep dokter dengan batas jumlah maksimal tertentu.',
        clinicalImplication: 'Apoteker berhak menyerahkan Ranitidin, Setirizin, Kaptopril, dan Allopurinol sebagai obat lanjutan terapi pasien kronis.'
      }
    ],
    drugListsOrSchedules: [
      {
        category: 'Antihistamin Non-Sedatif',
        items: [
          'Setirizin tablet 10 mg (Maksimal 10 tablet / 1 botol sirup)'
        ],
        rules: 'Rinitis alergi musiman, konjungtivitis alergi, dan urtikaria kronis idiopatik.'
      },
      {
        category: 'Saluran Cerna (H2-Blocker)',
        items: [
          'Ranitidin tablet 150 mg (Maksimal 10 tablet)'
        ],
        rules: 'Tukak lambung dan refluks esofagitis akut.'
      },
      {
        category: 'Hipertensi (Terapi Lanjutan Terkontrol)',
        items: [
          'Kaptopril tablet 12.5 mg / 25 mg (Maksimal 20 tablet)'
        ],
        rules: 'HANYA untuk pasien hipertensi kronis yang sebelumnya TELAH PERNAH diresepkan dokter dan tekanan darahnya dalam kondisi terkontrol stabil.'
      },
      {
        category: 'Asam Urat (Gout Artritis Lanjutan)',
        items: [
          'Allopurinol tablet 100 mg (Maksimal 10 tablet)'
        ],
        rules: 'Terapi lanjutan hiperurisemia pada pasien dengan riwayat pemeriksaan asam urat laboratorium yang terdokumentasi.'
      },
      {
        category: 'Antibiotik & Antijamur Topikal',
        items: [
          'Gentamisin sulfat salep kulit 0.1% (Maksimal 1 tube)',
          'Kloramfenikol salep mata 1% (Maksimal 1 tube)'
        ],
        rules: 'Infeksi bakteri superfisial kulit dan mata; wajib diedukasi tidak boleh digunakan lebih dari 7 hari.'
      }
    ],
    sanctionsOrPenalties: [
      'Penyerahan obat antihipertensi (Kaptopril) kepada pasien baru tanpa riwayat peresepan dokter merupakan malpraktik kefarmasian.'
    ],
    notes: 'Kaptopril dan Allopurinol dalam DOWA 3 adalah contoh penyerahan untuk menjamin kepatuhan pasien kronis saat dokter berhalangan atau resep habis sebelum jadwal kontrol.'
  },

  // =========================================================================
  // KATEGORI: UNDANG-UNDANG (UU BARU)
  // =========================================================================
  {
    id: 'reg-uu-8-1999',
    regNumber: 'UU No. 8 Tahun 1999',
    title: 'Undang-Undang RI Nomor 8 Tahun 1999 tentang Perlindungan Konsumen',
    type: 'uu',
    typeLabel: 'Undang-Undang (UU)',
    year: 1999,
    issuingAuthority: 'Pemerintah RI & DPR RI',
    status: 'Berlaku',
    summary: 'Mengatur hak-hak mendasar pasien sebagai konsumen sediaan farmasi, kewajiban pelaku usaha (apotek, RS, industri) memberikan informasi obat yang jujur dan benar, serta tanggung jawab ganti rugi atas kerugian akibat mengonsumsi sediaan farmasi cacat, rusak, atau kedaluwarsa.',
    scope: 'Seluruh sarana produksi, distribusi, dan fasilitas pelayanan kefarmasian di Indonesia.',
    keyArticles: [
      {
        articleNumber: 'Pasal 4 & 7',
        topic: 'Hak Pasien atas Informasi Obat & Kewajiban Pelaku Usaha',
        content: 'Konsumen berhak atas informasi yang benar, jelas, dan jujur mengenai kondisi dan jaminan barang/jasa. Pelaku usaha wajib memberikan informasi yang benar, jelas dan jujur mengenai petunjuk penggunaan dan pemeliharaan.',
        clinicalImplication: 'Apoteker wajib memberikan Pelayanan Informasi Obat (PIO) secara jujur mengenai tanggal kedaluwarsa, efek samping, dan aturan pakai.'
      },
      {
        articleNumber: 'Pasal 8',
        topic: 'Larangan Memperdagangkan Barang Rusak / Kadaluwarsa',
        content: 'Pelaku usaha dilarang memproduksi dan/atau memperdagangkan barang/jasa yang rusak, cacat atau bekas, dan tercemar; serta tidak mencantumkan tanggal kedaluwarsa atau jangka waktu penggunaan.',
        clinicalImplication: 'Penjualan obat kedaluwarsa atau obat rusak merupakan pelanggaran pidana langsung UU Perlindungan Konsumen.'
      },
      {
        articleNumber: 'Pasal 19',
        topic: 'Tanggung Jawab Ganti Rugi Perdata',
        content: 'Pelaku usaha bertanggung jawab memberikan ganti rugi atas kerusakan, pencemaran, dan/atau kerugian konsumen akibat mengonsumsi barang yang dihasilkan atau diperdagangkan.',
        clinicalImplication: 'Fasilitas farmasi bertanggung jawab secara perdata mengganti biaya pengobatan jika terjadi kerugian fisik pasien akibat salah obat (medication error).'
      }
    ],
    sanctionsOrPenalties: [
      'Pidana penjara paling lama 5 (lima) tahun atau pidana denda paling banyak Rp 2.000.000.000,00 (Pasal 62).',
      'Kewajiban ganti rugi materiil dan biaya perawatan medis pasien korban kelalaian obat.'
    ],
    notes: 'UU Perlindungan Konsumen sering digunakan penegak hukum bersamaan dengan UU Kesehatan dalam kasus peredaran obat palsu atau kedaluwarsa.'
  },
  {
    id: 'reg-uu-36-2014',
    regNumber: 'UU No. 36 Tahun 2014',
    title: 'Undang-Undang RI Nomor 36 Tahun 2014 tentang Tenaga Kesehatan (Klaster Kefarmasian)',
    type: 'uu',
    typeLabel: 'Undang-Undang (UU)',
    year: 2014,
    issuingAuthority: 'Pemerintah RI & DPR RI',
    status: 'Dicabut Sebagian',
    summary: 'Mengatur hierarki profesi tenaga kesehatan kefarmasian (Apoteker dan Tenaga Teknis Kefarmasian), standar kompetensi, kode etik profesi, hak perlindungan hukum dan imunitas profesi selama menjalankan tugas sesuai standar operasional prosedur (SOP).',
    scope: 'Seluruh tenaga kesehatan kefarmasian yang berpraktik di fasilitas pelayanan kesehatan.',
    keyArticles: [
      {
        articleNumber: 'Pasal 11 ayat (6)',
        topic: 'Pengelompokan Tenaga Kefarmasian',
        content: 'Tenaga kefarmasian terdiri atas apoteker dan tenaga teknis kefarmasian (sarjana farmasi, ahli madya farmasi, dan analis farmasi).',
        clinicalImplication: 'Mempertegas diferensiasi wewenang klinis antara Apoteker sebagai penanggung jawab dan TTK sebagai pelaksana teknis delegatif.'
      },
      {
        articleNumber: 'Pasal 57',
        topic: 'Hak Perlindungan Hukum Tenaga Kesehatan',
        content: 'Tenaga kesehatan dalam menjalankan praktik berhak memperoleh perlindungan hukum sepanjang melaksanakan tugas sesuai dengan Standar Profesi, Standar Pelayanan Profesi, dan Standar Prosedur Operasional.',
        clinicalImplication: 'Apoteker yang mematuhi SOP resmi tidak dapat dituntut pidana atas risiko efek samping obat yang telah diinformasikan dengan benar.'
      }
    ],
    sanctionsOrPenalties: [
      'Pemberian sanksi administratif teguran, pembekuan izin praktik, hingga pencabutan rekomendasi profesi atas pelanggaran disiplin dan etik.'
    ],
    notes: 'Sebagian besar pasal dalam UU ini telah diintegrasikan dan disempurnakan ke dalam UU No. 17 Tahun 2023 tentang Kesehatan.'
  },

  // =========================================================================
  // KATEGORI: PERATURAN PEMERINTAH (PP BARU)
  // =========================================================================
  {
    id: 'reg-pp-72-1998',
    regNumber: 'PP No. 72 Tahun 1998',
    title: 'Peraturan Pemerintah RI Nomor 72 Tahun 1998 tentang Pengamanan Sediaan Farmasi dan Alat Kesehatan',
    type: 'pp',
    typeLabel: 'Peraturan Pemerintah (PP)',
    year: 1998,
    issuingAuthority: 'Presiden Republik Indonesia',
    status: 'Berlaku',
    summary: 'Peraturan mendasar yang mengatur pengujian standar mutu sediaan farmasi (Farmakope Indonesia), tata kelola produksi, izin edar, peredaran, penandaan etiket obat, serta pembatasan periklanan obat keras ke masyarakat umum.',
    scope: 'Seluruh produsen, distributor PBF, apotek, dan sarana kefarmasian di wilayah Indonesia.',
    keyArticles: [
      {
        articleNumber: 'Pasal 2 - 4',
        topic: 'Standar Mutu Farmakope Indonesia',
        content: 'Sediaan farmasi dan alat kesehatan yang diproduksi dan diedarkan harus memenuhi persyaratan Farmakope Indonesia atau buku standar lain yang ditetapkan Menteri.',
        clinicalImplication: 'Bahan baku obat yang digunakan untuk meracik di apotek wajib memiliki Certificate of Analysis (CoA) bertaraf Pharmaceutical Grade.'
      },
      {
        articleNumber: 'Pasal 33 & 34',
        topic: 'Penyerahan Sediaan Farmasi Obat Keras',
        content: 'Penyerahan sediaan farmasi obat keras hanya dapat dilakukan di apotek, rumah sakit, puskesmas, dan klinik atas dasar resep dokter, kecuali ditentukan lain oleh Menteri (DOWA).',
        clinicalImplication: 'Toko obat berizin dilarang keras menjual atau menyimpan obat keras bertanda lingkaran merah huruf K.'
      },
      {
        articleNumber: 'Pasal 51',
        topic: 'Larangan Iklan Obat Keras ke Publik',
        content: 'Sediaan farmasi yang hanya dapat diperoleh dengan resep dokter (obat keras) dilarang dipublikasikan atau diiklankan melalui media massa umum.',
        clinicalImplication: 'Apotek dilarang memasang iklan promosi obat keras antibiotik atau penurun tensi di media sosial atau brosur promosi publik.'
      }
    ],
    sanctionsOrPenalties: [
      'Penyitaan sediaan farmasi ilegal atau obat substandar oleh Badan POM.',
      'Sanksi administratif penutupan sarana distribusi atau apotek.',
      'Tuntutan pidana bagi peredaran obat tanpa izin edar resmi.'
    ],
    notes: 'PP ini adalah pedoman dasar operasional bagi Badan POM dan Dinas Kesehatan dalam razia toko obat dan apotek.'
  },
  {
    id: 'reg-pp-47-2021',
    regNumber: 'PP No. 47 Tahun 2021',
    title: 'Peraturan Pemerintah RI Nomor 47 Tahun 2021 tentang Penyelenggaraan Bidang Perumahsakitan',
    type: 'pp',
    typeLabel: 'Peraturan Pemerintah (PP)',
    year: 2021,
    issuingAuthority: 'Presiden Republik Indonesia',
    status: 'Berlaku',
    summary: 'Mengatur klasifikasi rumah sakit, perizinan berusaha, ketersediaan sarana prasarana penunjang medis, pengelolaan kefarmasian sistem satu pintu, dan peran sentral apoteker dalam akreditasi rumah sakit.',
    scope: 'Seluruh Rumah Sakit Umum dan Rumah Sakit Khusus di Indonesia.',
    keyArticles: [
      {
        articleNumber: 'Pasal 19 & 20',
        topic: 'Sistem Pelayanan Farmasi Satu Pintu (One-Door Policy)',
        content: 'Pengelolaan sediaan farmasi, alat kesehatan, dan bahan medis habis pakai (BMHP) di rumah sakit harus dilakukan oleh satu instalasi farmasi rumah sakit (IFRS).',
        clinicalImplication: 'Dilarang keras adanya depo obat mandiri di luar kendali kepala instalasi farmasi (misal: dokter atau perawat membeli obat sendiri di luar sistem RS).'
      },
      {
        articleNumber: 'Pasal 24',
        topic: 'Kepatuhan Formularium Rumah Sakit',
        content: 'Rumah sakit wajib memiliki dan menerapkan Formularium Rumah Sakit yang disusun oleh Komite Farmasi dan Terapi serta dievaluasi secara berkala.',
        clinicalImplication: 'Seluruh peresepan obat dokter spesialis di RS wajib merujuk pada buku Formularium RS yang telah disahkan direktur.'
      }
    ],
    sanctionsOrPenalties: [
      'Penurunan kelas tipe rumah sakit (misal dari Tipe B ke Tipe C).',
      'Pemberian teguran tertulis hingga penundaan perpanjangan izin operasional rumah sakit.'
    ],
    notes: 'Sistem satu pintu farmasi RS mencegah peredaran obat palsu masuk ke dalam lingkungan ruang rawat inap dan kamar operasi.'
  },
  {
    id: 'reg-pp-74-2001',
    regNumber: 'PP No. 74 Tahun 2001',
    title: 'Peraturan Pemerintah RI Nomor 74 Tahun 2001 tentang Pengelolaan Bahan Berbahaya dan Beracun (B3)',
    type: 'pp',
    typeLabel: 'Peraturan Pemerintah (PP)',
    year: 2001,
    issuingAuthority: 'Presiden Republik Indonesia',
    status: 'Berlaku',
    summary: 'Mengatur klasifikasi bahan kimia B3, tata cara pengemasan, pelabelan simbol bahaya, penyimpanan aman, penyediaan Lembar Data Keselamatan Bahan (LDKB / MSDS), dan penanggulangan tumpahan bahan kimia di fasilitas pelayanan kesehatan.',
    scope: 'Gudang farmasi, laboratorium peracikan, dan ruang penyimpanan reagen/pelarut kimia farmasi.',
    keyArticles: [
      {
        articleNumber: 'Pasal 15 - 19',
        topic: 'Kewajiban Pelabelan Simbol Bahaya & MSDS',
        content: 'Setiap kemasan B3 wajib diberikan simbol dan label serta dilengkapi dengan Lembar Data Keselamatan Bahan (Material Safety Data Sheet).',
        clinicalImplication: 'Setiap botol alkohol 70%/96%, eter, kloroform, dan zat korosif di apotek wajib ditempeli piktogram bahaya GHS dan memiliki map arsip MSDS.'
      },
      {
        articleNumber: 'Pasal 21',
        topic: 'Penyimpanan Bahan Kimia B3',
        content: 'Penyimpanan B3 harus dilakukan di tempat penyimpanan khusus yang memenuhi persyaratan teknis keselamatan, memiliki ventilasi memadai, dan terpisah dari bahan lain.',
        clinicalImplication: 'Bahan pelarut mudah terbakar disimpan di lemari besi tahan api (Flammable Cabinet) terpisah dari obat biasa.'
      }
    ],
    sanctionsOrPenalties: [
      'Sanksi pembekuan izin operasional sarana.',
      'Pidana kurungan dan denda bila membuang limbah B3 langsung ke lingkungan tanpa instalasi pengolahan limbah.'
    ],
    notes: 'Kepatuhan pengelolaan B3 merupakan elemen telusur wajib dalam standar akreditasi Kemenkes Bab MFK (Manajemen Fasilitas dan Keselamatan).'
  },

  // =========================================================================
  // KATEGORI: PERATURAN MENTERI KESEHATAN (PERMENKES BARU)
  // =========================================================================
  {
    id: 'reg-pmk-5-2023',
    regNumber: 'Permenkes No. 5 Tahun 2023',
    title: 'Peraturan Menteri Kesehatan RI Nomor 5 Tahun 2023 tentang Narkotika, Psikotropika, dan Prekursor Farmasi',
    type: 'permenkes',
    typeLabel: 'Permenkes (PMK)',
    year: 2023,
    issuingAuthority: 'Menteri Kesehatan Republik Indonesia',
    status: 'Berlaku',
    summary: 'Regulasi paling mutakhir yang mencabut Permenkes No. 3/2015; mengatur secara komprehensif tata cara pengadaan via Surat Pesanan (SP) elektronik resmi, penyimpanan lemari khusus ganda berkunci beda, pelaporan SIPNAP digital, resep narkotika, serta pemusnahan sisa injeksi.',
    scope: 'Seluruh apotek, instalasi farmasi rumah sakit, puskesmas, klinik, dan pedagang besar farmasi (PBF).',
    keyArticles: [
      {
        articleNumber: 'Pasal 25 - 28',
        topic: 'Standar Lemari Penyimpanan Khusus Narkotika & Psikotropika',
        content: 'Tempat penyimpanan Narkotika dan Psikotropika wajib berupa lemari khusus terbuat dari bahan kuat, tidak mudah dipindahkan, memiliki 2 (dua) buah kunci yang berbeda, dan kuncinya dikuasai oleh Apoteker Penanggung Jawab atau pegawai lain yang dikuasakan.',
        clinicalImplication: 'Lemari wajib dibaut menempel pada dinding/lantai, kunci lemari tidak boleh ditinggal tergantung di pintu lemari.'
      },
      {
        articleNumber: 'Pasal 42',
        topic: 'Pelaporan SIPNAP Elektronik Bulanan',
        content: 'Apoteker Penanggung Jawab wajib membuat, mencatat, dan melaporkan pemasukan dan penyaluran Narkotika dan Psikotropika setiap bulan paling lambat tanggal 10 bulan berikutnya secara elektronik melalui SIPNAP.',
        clinicalImplication: 'Keterlambatan input SIPNAP secara sistematis akan memblokir otomatis penerbitan Surat Pesanan Narkotika baru.'
      },
      {
        articleNumber: 'Pasal 45 - 48',
        topic: 'Pemusnahan Sisa Injeksi & Obat Rusak',
        content: 'Pemusnahan sisa narkotika yang tidak habis dipakai pada pasien rawat inap wajib disaksikan minimal oleh 2 (dua) orang tenaga kesehatan dan dibuatkan Berita Acara Pemusnahan.',
        clinicalImplication: 'Residu cairan injeksi Fentanil atau Morfin tidak boleh dibuang sembarangan tanpa saksi dan berita acara resmi.'
      }
    ],
    sanctionsOrPenalties: [
      'Peringatan tertulis (tahap 1 s/d 3).',
      'Penghentian sementara kegiatan pelayanan sediaan narkotika.',
      'Pencabutan izin apotek (SIA) dan pencabutan Surat Izin Praktik Apoteker (SIPA).'
    ],
    notes: 'Permenkes 5/2023 mempertegas sanksi tegas bagi apotek yang tidak melaporkan SIPNAP berturut-turut selama 3 bulan.'
  },
  {
    id: 'reg-pmk-9-2014',
    regNumber: 'Permenkes No. 9 Tahun 2014',
    title: 'Peraturan Menteri Kesehatan RI Nomor 9 Tahun 2014 tentang Klinik',
    type: 'permenkes',
    typeLabel: 'Permenkes (PMK)',
    year: 2014,
    issuingAuthority: 'Menteri Kesehatan Republik Indonesia',
    status: 'Berlaku',
    summary: 'Mengatur persyaratan izin operasional dan pelayanan kefarmasian di Klinik Pratama dan Klinik Utama, kewajiban penanggung jawab Apoteker pada klinik yang menyelenggarakan rawat inap, serta pembatasan dispensing peracikan obat.',
    scope: 'Seluruh Klinik Pratama dan Klinik Utama swasta maupun pemerintah di Indonesia.',
    keyArticles: [
      {
        articleNumber: 'Pasal 23 & 24',
        topic: 'Pelayanan Farmasi di Klinik Rawat Inap & Rawat Jalan',
        content: 'Klinik rawat inap wajib memiliki instalasi farmasi/ruang farmasi yang dipimpin oleh seorang Apoteker yang memiliki STRA dan SIPA. Klinik pratama rawat jalan yang tidak memiliki apoteker hanya boleh melayani obat sediaan jadi dalam jumlah terbatas.',
        clinicalImplication: 'Klinik dilarang melakukan peracikan puyer/kapsul bila tidak memiliki Apoteker penanggung jawab resmi.'
      },
      {
        articleNumber: 'Pasal 37',
        topic: 'Pengadaan Obat Klinik',
        content: 'Pengadaan obat di klinik harus dilakukan melalui jalur resmi dari Pedagang Besar Farmasi (PBF) atas nama Apoteker penanggung jawab klinik.',
        clinicalImplication: 'Klinik dilarang membeli obat eceran di apotek luar atau membeli obat dari sumber tidak resmi/tanpa faktur PBF.'
      }
    ],
    sanctionsOrPenalties: [
      'Pencabutan izin operasional klinik oleh Dinas Kesehatan atau DPMPTSP.',
      'Penyitaan perbekalan farmasi ilegal oleh Balai POM.'
    ],
    notes: 'Klinik kecantikan/estetika yang meracik krim racikan pemutih tanpa Apoteker melanggar langsung Permenkes ini.'
  },
  {
    id: 'reg-pmk-8-2015',
    regNumber: 'Permenkes No. 8 Tahun 2015',
    title: 'Peraturan Menteri Kesehatan RI Nomor 8 Tahun 2015 tentang Program Pengendalian Resistensi Antimikroba di RS',
    type: 'permenkes',
    typeLabel: 'Permenkes (PMK)',
    year: 2015,
    issuingAuthority: 'Menteri Kesehatan Republik Indonesia',
    status: 'Berlaku',
    summary: 'Landasan hukum wajibnya pembentukan Komite PPRA di setiap rumah sakit, penetapan formularium panduan penggunaan antibiotik (PPAB), mekanisme restriksi pra-otorisasi antibiotik lini cadangan, serta pemantauan kuantitatif dan kualitatif evaluasi antibiotik.',
    scope: 'Seluruh Rumah Sakit Pemerintah, Swasta, dan Rumah Sakit Militer di Indonesia.',
    keyArticles: [
      {
        articleNumber: 'Pasal 3 & 4',
        topic: 'Kewajiban Pembentukan Tim PPRA Rumah Sakit',
        content: 'Setiap rumah sakit wajib melaksanakan Program Pengendalian Resistensi Antimikroba (PPRA) dengan membentuk Komite/Tim PPRA multidisiplin yang melibatkan Dokter Spesialis Mikrobiologi, Farmakologi Klinik, Apoteker, dan Perawat PPI.',
        clinicalImplication: 'Apoteker berperan sentral sebagai verifikator restriksi peresepan dan evaluator DDD antibiotik.'
      },
      {
        articleNumber: 'Pasal 6',
        topic: 'Pengendalian Penggunaan Antibiotik Bijak',
        content: 'Penggunaan antibiotik bijak dilaksanakan melalui penerapan Panduan Penggunaan Antibiotik (PPAB) dan formularium antibiotik rumah sakit berbasis antibiogram lokal.',
        clinicalImplication: 'Pemberian antibiotik profilaksis bedah dibatasi maksimal 24 jam dan antibiotik empiris dievaluasi ketat pada jam ke-72.'
      }
    ],
    sanctionsOrPenalties: [
      'Pengurangan skor penilaian akreditasi rumah sakit pada Standar Nasional Akreditasi (STARKES).',
      'Teguran administratif dari Dinas Kesehatan Provinsi.'
    ],
    notes: 'PPRA merupakan program prioritas nasional untuk mencegah era post-antibiotic era di mana infeksi sederhana menjadi tidak dapat disembuhkan.'
  },
  {
    id: 'reg-pmk-80-2016',
    regNumber: 'Permenkes No. 80 Tahun 2016',
    title: 'Peraturan Menteri Kesehatan RI Nomor 80 Tahun 2016 tentang Penyelenggaraan Asisten Tenaga Kefarmasian',
    type: 'permenkes',
    typeLabel: 'Permenkes (PMK)',
    year: 2016,
    issuingAuthority: 'Menteri Kesehatan Republik Indonesia',
    status: 'Berlaku',
    summary: 'Menegaskan batasan ruang lingkup pekerjaan kefarmasian yang boleh dilakukan oleh Tenaga Vokasi Farmasi / Asisten Tenaga Kefarmasian (ATK/TTK lulusan D3/SMK Farmasi) dan menegaskan kewajiban supervisi langsung oleh Apoteker.',
    scope: 'Seluruh fasilitas pelayanan kefarmasian yang mempekerjakan asisten tenaga kefarmasian.',
    keyArticles: [
      {
        articleNumber: 'Pasal 2 & 3',
        topic: 'Kewenangan Delegatif Asisten Tenaga Kefarmasian',
        content: 'Asisten Tenaga Kefarmasian dapat melakukan pekerjaan kefarmasian terbatas meliputi penyiapan sediaan obat, peracikan obat, dan pencatatan inventarisasi di bawah pengawasan dan tanggung jawab Apoteker.',
        clinicalImplication: 'TTK berhak membantu meracik puyer dan menyiapkan obat, namun verifikasi akhir dan penyerahan obat kepada pasien tetap menjadi tanggung jawab Apoteker.'
      },
      {
        articleNumber: 'Pasal 5',
        topic: 'Larangan Pelayanan Informasi Obat Mandiri',
        content: 'Asisten Tenaga Kefarmasian dilarang melakukan konsultasi terapi obat mandiri atau memberikan pertimbangan klinis penggantian obat tanpa persetujuan Apoteker.',
        clinicalImplication: 'Konseling obat indeks terapi sempit, antibiotik, dan penyerahan DOWA wajib dilakukan langsung oleh Apoteker.'
      }
    ],
    sanctionsOrPenalties: [
      'Teguran lisan dan tertulis.',
      'Pencabutan Surat Izin Kerja Asisten Tenaga Kefarmasian (SIKATK).'
    ],
    notes: 'Regulasi ini melindungi TTK dari tuntutan malpraktik medis dengan menegaskan fungsi supervisi legal di bawah Apoteker.'
  },
  {
    id: 'reg-pmk-str-sip-2024',
    regNumber: 'KMK HK.02.01/MENKES/2024',
    title: 'Juknis Kemenkes RI tentang Registrasi STR Seumur Hidup & Penerbitan SIP Nakes Pasca UU 17/2023',
    type: 'permenkes',
    typeLabel: 'Permenkes (PMK)',
    year: 2024,
    issuingAuthority: 'Kementerian Kesehatan RI & Konsil Tenaga Kesehatan Indonesia (KTKI)',
    status: 'Berlaku',
    summary: 'Ketentuan teknis pelaksanaan amanat UU Kesehatan No. 17/2023: Penghapusan perpanjangan Surat Tanda Registrasi (STR) 5 tahunan menjadi STR Seumur Hidup melalui aplikasi SATUSEHAT SDMK, serta aturan perolehan Satuan Kredit Profesi (SKP) dan penerbitan Surat Izin Praktik (SIP) maksimal di 3 fasilitas.',
    scope: 'Seluruh Apoteker dan Tenaga Vokasi Farmasi yang berpraktik di Indonesia.',
    keyArticles: [
      {
        articleNumber: 'Diktum Kesatu & Kedua',
        topic: 'Pemberlakuan STR Seumur Hidup',
        content: 'Surat Tanda Registrasi (STR) bagi Apoteker dan Tenaga Medis/Kesehatan diterbitkan oleh Konsil atas nama Menteri Kesehatan dan berlaku seumur hidup.',
        clinicalImplication: 'Apoteker tidak perlu lagi mengulang uji kompetensi atau mengumpulkan borang resertifikasi 5 tahunan untuk memperpanjang STR.'
      },
      {
        articleNumber: 'Diktum Ketiga',
        topic: 'Penerbitan Surat Izin Praktik (SIP) & Batas 3 Tempat Praktik',
        content: 'Surat Izin Praktik (SIP) diterbitkan oleh Pemerintah Daerah Kabupaten/Kota berlaku selama 5 tahun. Apoteker dapat memiliki paling banyak 3 (tiga) SIP pada fasilitas pelayanan kefarmasian yang berbeda.',
        clinicalImplication: 'Apoteker dapat memegang SIPA di maksimal 3 sarana (misal: 1 di RS dan 2 di Apotek), dan perpanjangan SIP berbasis pemenuhan SKP pembelajaran online di platform Plataran Sehat Kemenkes.'
      }
    ],
    sanctionsOrPenalties: [
      'Pencabutan SIP oleh Dinas Perizinan (DPMPTSP) bila tidak memenuhi kecukupan SKP pembelajaran berkala.',
      'Sanksi denda dan pidana bila berpraktik kefarmasian tanpa memiliki SIP aktif di sarana bersangkutan.'
    ],
    notes: 'Seluruh pencatatan SKP dan verifikasi SIP kini terintegrasi secara digital satu pintu di portal resmi SATUSEHAT SDMK Kemenkes RI.'
  },
  {
    id: 'reg-pmk-34-2022',
    regNumber: 'Permenkes No. 34 Tahun 2022',
    title: 'Permenkes RI No. 34 Tahun 2022 tentang Akreditasi Puskesmas, Klinik, dan Laboratorium',
    type: 'permenkes',
    typeLabel: 'Permenkes (PMK)',
    year: 2022,
    issuingAuthority: 'Menteri Kesehatan Republik Indonesia',
    status: 'Berlaku',
    summary: 'Standar mutu dan instrumen penilaian akreditasi fasilitas pelayanan kesehatan primer (Puskesmas dan Klinik) yang mencakup indikator tata kelola sediaan farmasi, penyimpanan obat LASA/High Alert, pengendalian troli emergensi, dan pelaporan KTD/KNC.',
    scope: 'Puskesmas, Klinik Pratama, Klinik Utama, dan Laboratorium Kesehatan di seluruh Indonesia.',
    keyArticles: [
      {
        articleNumber: 'Standar Pelayanan Kefarmasian Puskesmas & Klinik',
        topic: 'Instrumen Akreditasi Bab Pelayanan Klinis',
        content: 'Fasilitas pelayanan kefarmasian harus menjamin ketersediaan obat esensial, pengelolaan rantai dingin (cold chain), peresepan obat rasional, rekonsiliasi obat, serta kepatuhan pemantauan efek samping obat (MESO).',
        clinicalImplication: 'Setiap puskesmas dan klinik wajib memiliki SOP farmasi tertulis lengkap dan kartu stok yang terverifikasi fisik.'
      }
    ],
    sanctionsOrPenalties: [
      'Status tidak terakreditasi atau penurunan strata akreditasi (dari Paripurna ke Madya/Dasar).',
      'Pemutusan kerja sama klaim kapitasi BPJS Kesehatan bagi fasilitas yang gagal meraih akreditasi minimal.'
    ],
    notes: 'Akreditasi klinik dan puskesmas kini menjadi syarat mutlak perpanjangan kerjasama fasilitas kesehatan tingkat pertama (FKTP) dengan BPJS Kesehatan.'
  },
  {
    id: 'reg-kmk-fornas-2197-2023',
    regNumber: 'Kepmenkes HK.01.07/MENKES/2197/2023',
    title: 'Kepmenkes RI Nomor HK.01.07/MENKES/2197/2023 tentang Formularium Nasional (FORNAS)',
    type: 'permenkes',
    typeLabel: 'Permenkes (PMK)',
    year: 2023,
    issuingAuthority: 'Menteri Kesehatan Republik Indonesia',
    status: 'Berlaku',
    summary: 'Daftar obat resmi yang disetujui untuk digunakan dalam program Jaminan Kesehatan Nasional (JKN-BPJS), memuat ketentuan peresepan obat restriksi, batas maksimal peresepan, kualifikasi dokter penulis resep, dan acuan katalog elektronik obat nasional.',
    scope: 'Seluruh faskes tingkat pertama (Puskesmas/Klinik) dan faskes rujukan tingkat lanjut (Rumah Sakit) mitra BPJS.',
    keyArticles: [
      {
        articleNumber: 'Diktum Ketiga & Lampiran FORNAS',
        topic: 'Kepatuhan Restriksi & Peresepan Obat JKN',
        content: 'Pemberian obat untuk peserta JKN harus berpedoman pada Formularium Nasional. Peresepan di luar FORNAS hanya dapat dilakukan atas persetujuan Komite Medik / KFT dengan pembiayaan rumah sakit.',
        clinicalImplication: 'Apoteker berhak menolak atau mengonfirmasi resep dokter yang melampaui batas restriksi maksimal FORNAS (misal: pemberian albumin, ketorolak maks 2 hari, atau seftriakson).'
      }
    ],
    sanctionsOrPenalties: [
      'Penolakan klaim biaya obat (dispute / pending claim) oleh verifikator BPJS Kesehatan.',
      'Sanksi pemotongan tarif INA-CBGs rumah sakit atas peresepan obat non-restriksi.'
    ],
    notes: 'FORNAS diperbarui secara periodik berdasarkan evaluasi farmakoekonomi dan kajian efikasi obat berbasis bukti ilmiah.'
  },
  {
    id: 'reg-pmk-54-2015',
    regNumber: 'Permenkes No. 54 Tahun 2015',
    title: 'Permenkes RI No. 54 Tahun 2015 tentang Pengujian dan Kalibrasi Alat Kesehatan',
    type: 'permenkes',
    typeLabel: 'Permenkes (PMK)',
    year: 2015,
    issuingAuthority: 'Menteri Kesehatan Republik Indonesia',
    status: 'Berlaku',
    summary: 'Dasar hukum kewajiban pengujian kelaikan dan kalibrasi alat ukur farmasi secara berkala (timbangan analitik, lemari pendingin, dan termometer) oleh Balai Pengujian Fasilitas Kesehatan (BPFK) atau laboratorium kalibrasi terakreditasi.',
    scope: 'Peralatan ukur di instalasi farmasi, laboratorium peracikan, dan gudang obat.',
    keyArticles: [
      {
        articleNumber: 'Pasal 4 & 8',
        topic: 'Kewajiban Kalibrasi 1 Tahun Sekali',
        content: 'Setiap alat kesehatan dan alat ukur yang digunakan dalam pelayanan kesehatan wajib diuji dan/atau dikalibrasi secara berkala paling sedikit 1 (satu) kali dalam 1 (satu) tahun.',
        clinicalImplication: 'Timbangan miligram peracikan dan termohigrometer digital wajib memiliki sertifikat kalibrasi yang masih berlaku.'
      }
    ],
    sanctionsOrPenalties: [
      'Alat ukur yang kedaluwarsa masa kalibrasinya diberi label merah dan dilarang digunakan untuk meracik sediaan obat pasien.'
    ],
    notes: 'Sertifikat kalibrasi timbangan adalah dokumen bukti wajib yang selalu diperiksa saat audit sertifikasi CPOB, CDOB, dan Akreditasi RS.'
  },

  // =========================================================================
  // KATEGORI: PERATURAN BADAN POM (PERBPOM BARU)
  // =========================================================================
  {
    id: 'reg-perbpom-4-2018',
    regNumber: 'Peraturan BPOM No. 4 Tahun 2018',
    title: 'Peraturan BPOM RI No. 4 Tahun 2018 tentang Pengawasan Pengelolaan Obat di Fasilitas Pelayanan Kefarmasian',
    type: 'perbpom',
    typeLabel: 'Peraturan BPOM (OOT & CDOB)',
    year: 2018,
    issuingAuthority: 'Badan Pengawas Obat dan Makanan (BPOM RI)',
    status: 'Berlaku',
    summary: 'Petunjuk teknis pengawasan kepatuhan apotek, puskesmas, dan klinik: kewajiban verifikasi legalitas faktur PBF, keharusan mencatat kartu stok secara real-time, larangan pengadaan obat dari sales freelance tanpa izin, dan tata kelola penyerahan obat keras.',
    scope: 'Apotek, Instalasi Farmasi Rumah Sakit, Puskesmas, dan Klinik di seluruh Indonesia.',
    keyArticles: [
      {
        articleNumber: 'Pasal 5 & 6',
        topic: 'Kualifikasi Pemasok & Faktur Resmi PBF',
        content: 'Pengadaan obat di fasilitas pelayanan kefarmasian hanya dapat dilakukan dari fasilitas distribusi (PBF) yang memiliki izin resmi, dibuktikan dengan Surat Pesanan yang ditandatangani Apoteker dan faktur pembelian sah.',
        clinicalImplication: 'Larangan mutlak membeli obat dengan pembayaran tunai di tempat (COD) dari kurir lepas tanpa faktur resmi PBF terdaftar.'
      },
      {
        articleNumber: 'Pasal 10',
        topic: 'Kewajiban Pencatatan Kartu Stok Fisik / Elektronik',
        content: 'Setiap mutasi penerimaan dan pengeluaran obat wajib dicatat pada kartu stok yang memuat: nama obat, bentuk sediaan, nomor batch, tanggal kedaluwarsa, jumlah masuk, jumlah keluar, sisa stok, dan paraf petugas.',
        clinicalImplication: 'Selisih stok fisik vs catatan kartu stok saat inspeksi BPOM dapat dikenai sanksi temuan ketidaksesuaian kritis.'
      }
    ],
    sanctionsOrPenalties: [
      'Peringatan keras tertulis (CAPA / Corrective and Preventive Action).',
      'Penghentian sementara kegiatan (PSK) pelayanan farmasi.',
      'Rekomendasi pencabutan izin sarana apotek/klinik kepada pemerintah daerah.'
    ],
    notes: 'PerBPOM 4/2018 adalah instrumen checklist baku yang digunakan oleh inspektur BPOM saat melakukan sidak pemeriksaan rutin ke apotek.'
  },
  {
    id: 'reg-perbpom-8-2020',
    regNumber: 'Peraturan BPOM No. 8 Tahun 2020',
    title: 'Peraturan BPOM RI No. 8 Tahun 2020 tentang Pengawasan Obat yang Diedarkan Secara Daring (Online)',
    type: 'perbpom',
    typeLabel: 'Peraturan BPOM (OOT & CDOB)',
    year: 2020,
    issuingAuthority: 'Badan Pengawas Obat dan Makanan (BPOM RI)',
    status: 'Berlaku',
    summary: 'Mengatur legalitas penjualan obat daring melalui Penyelenggara Sistem Elektronik Farmasi (PSEF) dan apotek daring, serta MENETAPKAN LARANGAN MUTLAK penjualan obat tertentu melalui internet demi keselamatan publik.',
    scope: 'Apotek daring, platform marketplace e-commerce, PSEF, dan apotek konvensional yang melayani pesan-antar.',
    keyArticles: [
      {
        articleNumber: 'Pasal 27',
        topic: 'Daftar Obat yang DILARANG KERAS Dijual Secara Online',
        content: 'Apotek yang mengedarkan obat secara daring dilarang mengedarkan obat golongan: (1) Narkotika; (2) Psikotropika; (3) Obat Keras tertentu (OOT); (4) Obat injeksi parenteral (kecuali insulin); (5) Sediaan implan; (6) Obat penggugur kandungan (Mifepriston/Misoprostol); (7) Obat disfungsi ereksi (Sildenafil/Tadalafil).',
        clinicalImplication: 'Apotek dilarang memasang etalase jual beli online untuk obat penenang, narkotika, dan obat aborsi pada aplikasi marketplace.'
      },
      {
        articleNumber: 'Pasal 28 & 29',
        topic: 'Syarat Penyerahan Obat Keras Daring',
        content: 'Penyerahan obat keras secara daring hanya dapat dilakukan berdasarkan resep elektronik yang terverifikasi oleh Apoteker dan wajib diantar dengan kemasan tertutup bersegel rapi menjamin stabilitas obat.',
        clinicalImplication: 'Kurir pengantaran obat wajib menjaga suhu dan menyerahkan obat langsung kepada pasien/keluarga yang berhak.'
      }
    ],
    sanctionsOrPenalties: [
      'Pemblokiran link/toko online (take-down) bekerja sama dengan Kemenkominfo.',
      'Penutupan izin PSEF dan pencabutan Surat Izin Apotek (SIA).',
      'Proses hukum pidana peredaran obat terlarang.'
    ],
    notes: 'Peraturan ini terbit untuk melindungi masyarakat dari maraknya penjualan obat keras ilegal tanpa resep di marketplace digital.'
  },
  {
    id: 'reg-perbpom-32-2022',
    regNumber: 'Peraturan BPOM No. 32 Tahun 2022',
    title: 'Peraturan BPOM RI Nomor 32 Tahun 2022 tentang Kriteria dan Tata Laksana Penarikan dan Pemusnahan Obat',
    type: 'perbpom',
    typeLabel: 'Peraturan BPOM (OOT & CDOB)',
    year: 2022,
    issuingAuthority: 'Badan Pengawas Obat dan Makanan (BPOM RI)',
    status: 'Berlaku',
    summary: 'Pedoman klasifikasi tingkat kedaruratan penarikan obat (Recall Kelas I, II, dan III), batas waktu penghentian peredaran, tata laksana karantina obat ter-recall di apotek, serta prosedur pemusnahan resmi bersama BPOM.',
    scope: 'Industri farmasi, PBF distributor, rumah sakit, apotek, puskesmas, dan toko obat.',
    keyArticles: [
      {
        articleNumber: 'Pasal 4 - 7',
        topic: 'Klasifikasi Tingkat Kedaruratan Recall',
        content: 'Penarikan obat diklasifikasikan menjadi 3 kelas:',
        clinicalImplication: [
          'Kelas I (Mandatory Urgent): Obat berisiko kematian atau cacat permanen (misal cemaran etilen glikol/dietilen glikol pada sirup). Tindakan penghentian peredaran dan karantina dalam waktu 1x24 jam!',
          'Kelas II: Obat berisiko efek samping reversibel sementara atau salah label kekuatan (tindakan dalam 5 hari).',
          'Kelas III: Cacat mutu teknis minor yang tidak berisiko membahayakan kesehatan (tindakan dalam 10 hari).'
        ].join(' ')
      },
      {
        articleNumber: 'Pasal 18',
        topic: 'Kewajiban Fasilitas Pelayanan Farmasi Saat Recall',
        content: 'Setelah menerima surat pemberitahuan recall dari BPOM atau distributor, fasilitas farmasi wajib seketika menghentikan penjualan, menyisihkan stok ke kotak karantina terpisah, dan mengembalikan obat ke PBF penyalur.',
        clinicalImplication: 'Apoteker wajib memasang tanda "OBAT KARANTINA RECALL - DILARANG DIJUAL" pada stok batch bersangkutan.'
      }
    ],
    sanctionsOrPenalties: [
      'Pidana penjara bagi sarana yang sengaja tetap memperjualbelikan obat yang telah diumumkan penarikannya oleh Badan POM.',
      'Pencabutan izin edar produk dan izin operasional fasilitas farmasi.'
    ],
    notes: 'Tragedi Gagal Ginjal Akut Anak (GGAPA) 2022 menjadi latar belakang penguatan aturan eksekusi recall Kelas I dalam 24 jam.'
  },
  {
    id: 'reg-perbpom-19-2023',
    regNumber: 'Peraturan BPOM No. 19 Tahun 2023',
    title: 'Peraturan BPOM RI Nomor 19 Tahun 2023 tentang Kriteria dan Tata Cara Registrasi Obat',
    type: 'perbpom',
    typeLabel: 'Peraturan BPOM (OOT & CDOB)',
    year: 2023,
    issuingAuthority: 'Badan Pengawas Obat dan Makanan (BPOM RI)',
    status: 'Berlaku',
    summary: 'Mengatur persyaratan izin edar (NIE), evaluasi berkas registrasi dossier CTD, kewajiban uji ekivalensi (Bioekivalensi / BE) obat generik bermerek dan generik berlogo terhadap obat inovator komparator, serta pengujian stabilitas zona iklim tropis IVB.',
    scope: 'Industri farmasi pemegang izin edar dan laboratorium uji bioekivalensi.',
    keyArticles: [
      {
        articleNumber: 'Pasal 8 - 12',
        topic: 'Kewajiban Uji Bioekivalensi (BE) Obat Copy',
        content: 'Obat copy (generik) yang memiliki bentuk sediaan oral pelepasan segera untuk penggunaan sistemik wajib dibuktikan ekivalensinya secara in vivo melalui Uji Bioekivalensi terhadap produk inovator.',
        clinicalImplication: 'Rentang 90% Confidence Interval untuk rasio rata-rata geometrik AUC dan Cmax harus berada dalam batas 80.00% s/d 125.00% membuktikan efikasi klinis obat generik setara dengan obat paten.'
      },
      {
        articleNumber: 'Pasal 24',
        topic: 'Pengujian Stabilitas Zona IVB (Suhu 30°C / RH 75%)',
        content: 'Pengujian stabilitas obat yang didaftarkan di Indonesia wajib menggunakan parameter kondisi penyimpanan Zona Iklim Tropis Panas-Lembab (30°C +/- 2°C dan RH 75% +/- 5%).',
        clinicalImplication: 'Menjamin obat tetap stabil dan tidak terurai saat didistribusikan di seluruh pelosok iklim tropis Indonesia.'
      }
    ],
    sanctionsOrPenalties: [
      'Penolakan berkas permohonan izin edar.',
      'Pembatalan Nomor Izin Edar (NIE) bila terbukti melakukan manipulasi data bioekivalensi.'
    ],
    notes: 'Hasil uji bioekivalensi menjamin bahwa Apoteker dapat melakukan substitusi generik secara aman tanpa mengorbankan kesembuhan pasien.'
  },
  {
    id: 'reg-perbpom-27-2022',
    regNumber: 'Peraturan BPOM No. 27 Tahun 2022',
    title: 'Peraturan BPOM RI No. 27 Tahun 2022 tentang Pengawasan Pemasukan Obat Jalur Khusus (SAS)',
    type: 'perbpom',
    typeLabel: 'Peraturan BPOM (OOT & CDOB)',
    year: 2022,
    issuingAuthority: 'Badan Pengawas Obat dan Makanan (BPOM RI)',
    status: 'Berlaku',
    summary: 'Mekanisme pengawasan pemasukan obat yang belum memiliki izin edar di Indonesia untuk kebutuhan mendesak pengobatan pasien gawat darurat (Special Access Scheme / SAS), donasi, atau uji klinis melalui Surat Keterangan Impor (SKI) jalur khusus.',
    scope: 'Rumah Sakit Rujukan, PBF Importir Khusus, dan Lembaga Penelitian.',
    keyArticles: [
      {
        articleNumber: 'Pasal 3 & 4',
        topic: 'Syarat Pemasukan Obat Jalur SAS',
        content: 'Pemasukan obat tanpa izin edar melalui mekanisme SAS hanya dapat dilakukan untuk kebutuhan pasien darurat tertentu (named patient) dengan surat rekomendasi dokter penanggung jawab dan persetujuan tertulis Kemenkes dan BPOM.',
        clinicalImplication: 'Obat SAS tidak boleh diperjualbelikan bebas di pasaran umum dan penggunaannya wajib dipantau ketat oleh IFRS.'
      }
    ],
    sanctionsOrPenalties: [
      'Penyitaan barang dan re-ekspor ke negara asal bila pemasukan obat tidak memiliki surat persetujuan resmi BPOM.'
    ],
    notes: 'Regulasi SAS adalah jalur legal bagi dokter spesialis onkologi dan penyakit langka untuk mendatangkan obat mutakhir dunia ke Indonesia.'
  },
  {
    id: 'reg-perbpom-14-2021',
    regNumber: 'Peraturan BPOM No. 14 Tahun 2021',
    title: 'Peraturan BPOM RI Nomor 14 Tahun 2021 tentang Sertifikasi CPOB Sediaan Steril',
    type: 'perbpom',
    typeLabel: 'Peraturan BPOM (OOT & CDOB)',
    year: 2021,
    issuingAuthority: 'Badan Pengawas Obat dan Makanan (BPOM RI)',
    status: 'Berlaku',
    summary: 'Standar Cara Pembuatan Obat yang Baik (CPOB) untuk fasilitas produksi dan penyiapan sediaan steril: klasifikasi ruang bersih (Cleanroom Grade A, B, C, D), tata aliran udara laminar, validasi proses aseptik (Media Fill Test), dan pemantauan partikel mikrobiologi.',
    scope: 'Industri farmasi sediaan steril dan instalasi farmasi rumah sakit yang melakukan aseptic dispensing skala besar.',
    keyArticles: [
      {
        articleNumber: 'Klasifikasi Ruang Bersih (Grade A, B, C, D)',
        topic: 'Kriteria Partikel & Aliran Udara Steril',
        content: 'Pembuatan sediaan steril dilakukan di ruang bersih dengan kriteria:',
        clinicalImplication: [
          'Grade A: Area kritis peracikan (Laminar Air Flow / BSC) kecepatan udara 0.36 - 0.54 m/s, bebas partikel non-operasional.',
          'Grade B: Ruang latar belakang Grade A untuk proses aseptik.',
          'Grade C & D: Ruang bersih untuk tahapan penyiapan awal sediaan steril dan koridor ganti pakaian APD.'
        ].join(' ')
      },
      {
        articleNumber: 'Uji Simulasi Proses Aseptik (Media Fill)',
        topic: 'Validasi Keterampilan Personel Peracik Steril',
        content: 'Personel yang melakukan penyiapan sediaan steril wajib lulus uji simulasi media pertumbuhan mikroba (media fill) minimal 6 bulan sekali dengan tingkat kegagalan kontaminasi nol.',
        clinicalImplication: 'Apoteker dan peracik yang gagal uji media fill dilarang melakukan pencampuran IV admixture sebelum pelatihan ulang.'
      }
    ],
    sanctionsOrPenalties: [
      'Pencabutan sertifikat CPOB sediaan steril.',
      'Penghentian sementara kegiatan produksi dan peracikan steril.'
    ],
    notes: 'Prinsip ruang Grade A dan Grade B CPOB diadopsi langsung dalam standar dispensing sediaan IV dan sitostatika di rumah sakit.'
  }
];
