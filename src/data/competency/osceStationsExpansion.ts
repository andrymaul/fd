import { OsceStationGuide } from '../competencyExamData';

/**
 * Penambahan Stasi Ujian OSCE Farmasi Nasional (UKMPPAI OSCE)
 * Mengacu pada 10 Standar Kompetensi Apoteker Indonesia & Blueprint KFN
 */
export const OSCE_STATIONS_EXPANSION: OsceStationGuide[] = [
  {
    id: 'osce-asthma-spacer',
    title: 'Stasi 13: Konseling Penanganan Asma Balita Menggunakan Inhaler (MDI) & Spacer Berkatup',
    stationType: 'Konseling & PIO',
    durationMinutes: 10,
    candidateTask: 'Seorang ibu datang membawa resep untuk anaknya yang berusia 3 tahun: R/ Seretide Inhaler 50/25 mcg (Salmeterol + Flutikason) No. I (S 2 dd 1 puff dengan AeroChamber Spacer). Ibu tampak bingung dan belum pernah memakai alat bantu spacer sebelumnya. Lakukan konseling edukasi cara pemakaian alat kombinasi MDI + Spacer secara komprehensif.',
    simulatedPatientScript: 'Ibu pasien cemas dan bertanya: "Apakah saya harus menyemprotkan obatnya berkali-kali ke tabung ini sebelum dipakaikan ke anak saya? Berapa lama masker harus ditempelkan di wajah anak saya? Apakah mulut anak saya perlu dibilas?"',
    criticalChecklist: [
      { step: 'Verifikasi Pasien & Three Prime Questions', description: 'Memperkenalkan diri sebagai apoteker, memastikan identitas balita (nama, umur, BB), dan menanyakan penjelasan dokter mengenai indikasi obat serta harapan terapi kontroler asma.', points: 15 },
      { step: 'Pemeriksaan & Persiapan Alat Spacer', description: 'Memeriksa spacer dari keretakan atau kotoran, memastikan katup inhalasi fleksibel; melepas tutup kanister MDI, mengocok MDI 4-5 kali tegak lurus, lalu memasukkan corong MDI ke ujung belakang spacer dengan rapat.', points: 20 },
      { step: 'Pemasangan Masker Rapat (Airtight Seal)', description: 'Mendudukkan anak tegak, memasang masker spacer menutupi hidung dan mulut anak secara rapat tanpa ada celah udara bocor di pinggir pipi.', points: 20 },
      { step: 'Teknik Aktuasi & Pola Bernafas (5-6 Kali Nafas)', description: 'Menekan kanister MDI HANYA 1 KALI (1 puff per aktuasi ke dalam ruang spacer), biarkan anak bernafas normal tenang melalui masker sebanyak 5-6 kali tarikan nafas (atau selama 10-15 detik) untuk menghisap seluruh aerosol obat.', points: 25 },
      { step: 'Dosis Kedua & Pembersihan Mulut/Wajah', description: 'Jika dokter meresepkan puff kedua, tunggu jeda 1 menit sebelum mengulang langkah yang sama; WAJIB mengedukasi ibu untuk mengusap wajah dan membilas rongga mulut/minum air putih pada balita untuk mencegah kandidiasis oral dan suara serak.', points: 20 }
    ],
    examinerTips: [
      'Kandidat GAGAL jika menyemprotkan 2 puff sekaligus ke dalam ruang spacer (harus 1 puff per siklus inhalasi).',
      'Kandidat wajib menekankan pembilasan mulut atau minum air setelah menghirup steroid inhalasi.'
    ]
  },
  {
    id: 'osce-rectal-diazepam',
    title: 'Stasi 14: Konseling Penanganan Darurat Kejang Demam Anak dengan Diazepam Rektal Tube',
    stationType: 'Konseling & PIO',
    durationMinutes: 10,
    candidateTask: 'Seorang ayah datang ke apotek menebus resep darurat untuk anaknya (usia 2,5 tahun, BB 13 kg) yang memiliki riwayat kejang demam (febrile convulsion): R/ Stesolid Rectal Tube 10 mg No. II (S.p.r.n 1 tube per rektal jika kejang demam > 38,5°C). Berikan konseling cara penggunaan darurat, posisi anak, dan tanda bahaya yang mengharuskan rujukan ke IGD.',
    simulatedPatientScript: 'Ayah pasien sangat panik dan bertanya: "Jika anak saya kejang dan giginya mengunci rapat, apakah obat ini dimasukkan lewat dubur? Apakah saya harus menekan terus tubenya saat mencabutnya dari dubur?"',
    criticalChecklist: [
      { step: 'Verifikasi & Pengendalian Kepanikan Orang Tua', description: 'Memverifikasi identitas anak, menenangkan orang tua, dan memastikan sediaan adalah larutan rektal tube khusus dubur, BUKAN DIMINUM secara oral.', points: 15 },
      { step: 'Pertolongan Pertama Posisi Anak saat Kejang', description: 'Instruksikan meletakkan anak di tempat aman dan datar, miringkan posisi tubuh anak ke salah satu sisi (posisi pemulihan) agar lidah tidak menyumbat jalan nafas dan muntahan tidak teraspirasi; JANGAN masukkan sendok/jari ke dalam mulut anak.', points: 20 },
      { step: 'Penyiapan & Pelumasan Tube Rektal', description: 'Buka tutup pipa aplikator tube; teteskan sedikit cairan obat di ujung aplikator untuk melumasi pipa agar licin dan tidak melukai mukosa anus anak.', points: 20 },
      { step: 'Teknik Insersi & PENTING: Tekan Terus Saat Dicabut', description: 'Tusukkan seluruh panjang pipa aplikator ke dalam anus anak secara perlahan dan tegak searah pusar; remas pangkal tube dengan kuat hingga seluruh isi cairan habis, dan TETAP REMAS/TEKAN PANGKAL TUBE saat mencabut aplikator keluar agar cairan obat tidak tersedot kembali ke dalam tube.', points: 30 },
      { step: 'Rapatkan Bokong & Batasan Waktu Rujukan IGD', description: 'Rapatkan kedua belah bokong anak selama 2-3 menit agar obat tidak merembes keluar; jika dalam waktu 5-10 menit kejang belum berhenti atau anak mengalami kejang berulang, SEGERA BAWA KE IGD RUMAH SAKIT terdekat.', points: 15 }
    ],
    examinerTips: [
      'Poin krusial mutlak: Aplikator tube WAJIB tetap ditekan saat dicabut dari anus agar cairan diazepam tidak tersedot kembali.',
      'Kandidat wajib melarang memasukkan benda apa pun (sendok, kopi, jari) ke dalam mulut anak saat kejang.'
    ]
  },
  {
    id: 'osce-contraceptive-missed',
    title: 'Stasi 15: Konseling Swamedikasi Kepatuhan Pil KB Kombinasi & Penanganan Lupa Minum',
    stationType: 'Konseling & PIO',
    durationMinutes: 10,
    candidateTask: 'Seorang wanita 28 tahun pengguna pil kontrasepsi oral kombinasi (Microgynon 28 tablet: 21 pil aktif hormon + 7 pil plasebo/pengingat) datang ke apotek dengan cemas mengeluhkan lupa meminum pil KB aktifnya selama 2 hari berturut-turut pada minggu kedua siklus. Lakukan konseling edukasi mengenai aturan penanganan pil lupa, risiko kehamilan, dan penggunaan kontrasepsi darurat/tambahan.',
    simulatedPatientScript: 'Pasien bertanya: "Apakah saya harus meminum langsung 3 pil sekaligus hari ini? Apakah saya masih aman berhubungan suami istri tanpa pengaman dalam minggu ini?"',
    criticalChecklist: [
      { step: 'Identifikasi Jenis Pil & Waktu Lupa Minum', description: 'Menggali informasi jenis pil KB yang digunakan (kombinasi estrogen-progestin atau progestin saja), jumlah hari lupa, serta pada minggu siklus ke berapa pil terlewat.', points: 20 },
      { step: 'Aturan Lupa 2 Pil Berturut-turut (Minggu 1 atau 2)', description: 'Menginstruksikan pasien meminum 2 pil hari ini (satu pil yang paling terakhir terlupa diminum segera, ditambah satu pil jadwal hari ini), dan minum 2 pil keesokan harinya, kemudian melanjutkan 1 pil per hari seperti biasa sesuai jadwal.', points: 25 },
      { step: 'Instruksi Penggunaan Kontrasepsi Tambahan (Metode Barrier)', description: 'Menegaskan bahwa efektivitas kontrasepsi telah menurun drastis sehingga pasien WAJIB menggunakan metode kontrasepsi tambahan (seperti KONDOM) atau pantang berhubungan seksual selama 7 HARI BERTURUT-TURUT.', points: 30 },
      { step: 'Edukasi Penanganan Jika Terlupa di Minggu ke-3', description: 'Menjelaskan jika lupa 2 pil pada minggu ke-3 (pil aktif menjelang plasebo): Habiskan sisa pil aktif, buang 7 pil plasebo, dan LANGSUNG MULAI BLISTER BARU tanpa jeda plasebo.', points: 15 },
      { step: 'Strategi Pengingat Kepatuhan Harian', description: 'Menyarankan memasang alarm harian di ponsel pada jam yang sama setiap malam dan mengaitkannya dengan rutinitas harian (misal sebelum sikat gigi malam).', points: 10 }
    ],
    examinerTips: [
      'Kandidat wajib menegaskan penggunaan metode barrier (kondom) selama 7 hari berturut-turut.',
      'Kandidat tidak boleh menganjurkan minum 3 pil sekaligus dalam 1 waktu karena memicu mual muntah hebat.'
    ]
  },
  {
    id: 'osce-tb-dots-counseling',
    title: 'Stasi 16: Konseling Kepatuhan Obat Antituberkulosis (OAT KDT) & Manajemen Efek Samping',
    stationType: 'Konseling & PIO',
    durationMinutes: 10,
    candidateTask: 'Seorang pasien laki-laki 42 tahun baru didiagnosis TB Paru BTA Positif kasus baru dan menerima paket OAT Kategori 1 Kombinasi Dosis Tetap (KDT/FDC 4KDT: Rifampisin 150 mg + Isoniazid 75 mg + Pirazinamid 400 mg + Etambutol 275 mg) diminum 3 tablet sekali sehari pagi hari saat perut kosong. Berikan konseling komprehensif mengenai durasi terapi 6 bulan, kepatuhan minum obat, efek samping khas tiap zat aktif, dan peran Pengawas Menelan Obat (PMO).',
    simulatedPatientScript: 'Pasien tampak ragu dan bertanya: "Apakah urin dan keringat saya yang berwarna merah berbahaya bagi ginjal? Berapa lama saya harus minum obat ini? Apakah boleh berhenti jika batuknya sudah sembuh dalam sebulan?"',
    criticalChecklist: [
      { step: 'Penjelasan Durasi & Fase Terapi TB (6 Bulan)', description: 'Menjelaskan bahwa terapi TB terdiri dari 2 fase: Fase Intensif (2 bulan pertama minum 4KDT setiap hari) dilanjutkan Fase Lanjutan (4 bulan berikutnya minum 2KDT); menegaskan TIDAK BOLEH BERHENTI walau gejala sudah membaik agar tidak terjadi resistensi kuman (TB-MDR).', points: 25 },
      { step: 'Cara Minum Saat Perut Kosong', description: 'Menginstruksikan obat diminum 1 kali sehari pada pagi hari minimal 1 jam SEBELUM makan (atau malam sebelum tidur) dengan segelas air putih untuk bioavailabilitas optimal Rifampisin.', points: 15 },
      { step: 'Edukasi Efek Samping Khas Rifampisin (Urin Merah)', description: 'Menenangkan pasien bahwa urin, keringat, dan air mata berwarna MERAH KECOKLATAN adalah efek samping normal dan TIDAK BERBAHAYA dari ekskresi Rifampisin, bukan tanda pendarahan ginjal.', points: 20 },
      { step: 'Efek Samping Obat Lain & Solusinya', description: 'Menjelaskan Isoniazid dapat memicu kesemutan/kebas (neuropati perifer dicegah dengan Vitamin B6/Piridoksin); Pirazinamid memicu nyeri sendi (hiperurisemia); dan Etambutol memicu gangguan lapang pandang/buta warna merah-hijau yang harus segera dilaporkan ke dokter.', points: 25 },
      { step: 'Peran Pengawas Menelan Obat (PMO)', description: 'Menyarankan menunjuk anggota keluarga terdekat sebagai PMO untuk memastikan obat diminum setiap hari tanpa ada yang terlewat.', points: 15 }
    ],
    examinerTips: [
      'Kandidat wajib membedakan efek samping tidak berbahaya (urin merah akibat rifampisin) dengan efek samping yang perlu rujukan (ikterus kuning tanda hepatitis imbas obat atau gangguan penglihatan akibat etambutol).',
      'Konsep 6 bulan terapi dan bahaya TB-MDR wajib dijelaskan dengan jelas.'
    ]
  }
];
