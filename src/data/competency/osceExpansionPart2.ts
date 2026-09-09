import { OsceStationGuide } from '../competencyExamData';

/**
 * Penambahan Stasi Ujian OSCE Farmasi Nasional (UKMPPAI OSCE) - Bagian 2
 * Mengacu pada 10 Standar Kompetensi Apoteker Indonesia & Blueprint KFN/IAI
 * Melengkapi stasi ke-17 hingga ke-20
 */
export const OSCE_EXPANSION_PART_2: OsceStationGuide[] = [
  {
    id: 'osce-warfarin-inr-counseling',
    title: 'Stasi 17: Konseling Pasien Rawat Jalan Terapi Antikoagulan Warfarin & Monitoring Target INR',
    stationType: 'Konseling & PIO',
    durationMinutes: 10,
    candidateTask: 'Seorang pasien pria 62 tahun dengan riwayat Fibrilasi Atrium baru saja keluar dari rawat inap RS dan membawa resep: R/ Warfarin tablet 3 mg No. XXX (S 1 dd 1 tab malam hari). Dokter menetapkan target INR 2,0 - 3,0 dan meminta pasien rutin kontrol ke poliklinik. Lakukan konseling edukasi komprehensif mengenai cara minum obat, interaksi makanan kaya Vitamin K (sayuran hijau), interaksi analgesik/jamu, jadwal cek laboratorium INR berkala, dan tanda bahaya perdarahan (bleeding signs).',
    simulatedPatientScript: 'Pasien bertanya: "Apakah saya tidak boleh sama sekali makan sayur bayam dan brokoli lagi? Kalau saya pusing atau nyeri sendi, obat pereda nyeri apa yang boleh saya beli bebas? Kenapa obat ini harus diminum malam hari?"',
    criticalChecklist: [
      { step: 'Three Prime Questions & Tujuan Terapi Warfarin', description: 'Memperkenalkan diri sebagai apoteker, memverifikasi identitas pasien, dan menanyakan pemahaman pasien tentang warfarin sebagai antikoagulan pengencer darah untuk mencegah pembentukan bekuan darah (trombus) yang berisiko stroke emboli pada fibrilasi atrium.', points: 15 },
      { step: 'Aturan Minum Obat & Konsistensi Waktu (Malam Hari)', description: 'Menjelaskan warfarin diminum 1 kali sehari pada MALAM HARI pada jam yang sama (misal pukul 19.00). Alasan: memudahkan penyesuaian dosis di malam hari setelah hasil pemeriksaan lab INR keluar pada siang/sore hari.', points: 20 },
      { step: 'Edukasi Diet Makanan Kaya Vitamin K (Konsistensi, Bukan Pantang)', description: 'Menegaskan bahwa pasien TIDAK PERLU PANTANG TOTAL makan sayuran hijau (bayam, brokoli, kale, selada), melainkan MENJAGA KONSISTENSI porsi makanannya setiap hari. Perubahan drastis (tiba-tiba makan sangat banyak atau berhenti total) akan mengacaukan kadar INR.', points: 25 },
      { step: 'Interaksi Obat Analgesik, NSAID & Herbal', description: 'Melarang keras konsumsi analgesik golongan NSAID (seperti Asam Mefenamat, Ibuprofen, Natrium Diklofenak) serta aspirin tanpa resep karena melipatgandakan risiko perdarahan lambung hebat; jika nyeri/demam, pilih Parasetamol dosis lazim (maksimal 2 g/hari jangka pendek). Hindari jamu yang mengandung Ginkgo biloba, bawang putih konsentrat, atau ginseng.', points: 20 },
      { step: 'Monitoring Rutin Nilai INR & Tanda Bahaya Perdarahan (Red Flags)', description: 'Menjelaskan pentingnya cek darah rutin INR (target 2,0 - 3,0); mengedukasi tanda bahaya: gusi berdarah sulit berhenti, mimisan berulang, lebam/memar spontan tanpa benturan, feses hitam seperti aspal (melena), atau urin berwarna merah/cokelat. Jika timbul gejala tersebut, segera hentikan obat dan ke IGD Rumah Sakit.', points: 20 }
    ],
    examinerTips: [
      'Kandidat GAGAL jika melarang pasien makan sayuran hijau sama sekali; prinsip evidence-based yang tepat adalah konsistensi asupan diet harian.',
      'Kandidat wajib menegaskan kontraindikasi swamedikasi NSAID bebas dan melatih pasien mengenali tanda perdarahan (melena, hematuria).'
    ]
  },
  {
    id: 'osce-geriatric-beers-reconciliation',
    title: 'Stasi 18: Rekonsiliasi Obat & Skrining Polifarmasi Geriatri Berdasarkan Beers Criteria 2023',
    stationType: 'Skrining Resep',
    durationMinutes: 10,
    candidateTask: 'Pasien wanita 74 tahun dengan hipertensi, osteoartritis genu bilateral, dan insomnia datang ke poliklinik geriatri. Daftar obat yang dikonsumsi: Amlodipin 10 mg (1x1), Meloksikam 15 mg (1x1), Amitriptilin 25 mg malam (untuk tidur), Difenhidramin 25 mg kapsul (dibeli bebas jika sulit tidur), dan Doxazosin 2 mg (1x1 malam). Pasien mengeluhkan sering pusing berputar saat berdiri dari tempat tidur (hipotensi ortostatik), konstipasi parah, mulut sangat kering, dan pernah terpeleset di kamar mandi 3 hari lalu. Lakukan rekonsiliasi obat, identifikasi Potentially Inappropriate Medications (PIM) menurut AGS Beers Criteria 2023, dan susun rekomendasi de-prescribing kepada dokter spesialis.',
    simulatedPatientScript: 'Pasien bercerita: "Saya sulit sekali tidur nyenyak, jadi dokter kasih obat kuning kecil (amitriptilin), tapi kalau masih gelisah saya tambah minum kapsul lelap tidur dari warung. Kalau bangun pagi saya sering kliyengan dan hampir jatuh. Mulut saya kering sekali dan susah BAB."',
    criticalChecklist: [
      { step: 'Penggalian Riwayat Obat Komprehensif (Rekonsiliasi)', description: 'Mencatat seluruh obat resep, obat bebas (OTC), jamu/suplemen, dosis, aturan pakai, dan mencocokkan keluhan klinis pasien dengan profil efek samping masing-masing obat.', points: 15 },
      { step: 'Identifikasi PIM Antikolinergik Kuat & Sedatif Berlebih (Beers Criteria)', description: 'Mengidentifikasi duplikasi berbahaya antara Amitriptilin (TCA) dan Difenhidramin (Antihistamin gen-1): keduanya memiliki beban antikolinergik sangat tinggi (risiko delirium, konstipasi, mulut kering, retensi urin) dan efek sedasi berlebih yang memicu jatuh (fall risk) pada lansia.', points: 25 },
      { step: 'Evaluasi Risiko Hipotensi Ortostatik Akibat Alpha-1 Blocker (Doxazosin)', description: 'Mengidentifikasi Doxazosin sebagai antihipertensi golongan alpha-1 blocker perifer yang masuk daftar Beers Criteria (risiko tinggi sinkop dan hipotensi ortostatik pada geriatri, terutama jika dikombinasi dengan amlodipin).', points: 20 },
      { step: 'Evaluasi Risiko NSAID Kronis (Meloksikam 15 mg)', description: 'Mengevaluasi penggunaan kronis Meloksikam pada usia 74 tahun: risiko tinggi perdarahan saluran cerna (GI bleeding), penurunan fungsi ginjal akut (AKI), retensi natrium, dan memperburuk kontrol tekanan darah.', points: 20 },
      { step: 'Formulasi Rekomendasi De-prescribing & Edukasi Sleep Hygiene', description: 'Menyusun usulan tertulis kepada dokter: hentikan difenhidramin; lakukan tapering-off amitriptilin lalu ganti ke edukasi non-farmakologi (sleep hygiene) atau terapi non-antikolinergik; evaluasi penggantian doxazosin ke golongan first-line (ACEi/ARB); ganti meloksikam kronis ke parasetamol oral / topikal NSAID gel (Voltaren gel).', points: 20 }
    ],
    examinerTips: [
      'Kandidat wajib mengidentifikasi duplikasi beban antikolinergik (Amitriptilin + Difenhidramin) sebagai biang keladi mulut kering, konstipasi, dan risiko jatuh.',
      'Rekomendasi substitusi analgesik harus rasional (pemberian topikal NSAID atau parasetamol sistemik untuk meminimalkan toksisitas renal/GI).'
    ]
  },
  {
    id: 'osce-compounding-capsule-child',
    title: 'Stasi 19: Peracikan Kapsul Puyer Pediatri, Perhitungan Dosis & Penentuan Beyond Use Date (BUD)',
    stationType: 'Formulasi & Dispensing',
    durationMinutes: 10,
    candidateTask: 'Diterima resep dokter spesialis anak untuk pasien An. Danu (6 tahun, BB 20 kg): R/ Salbutamol 1 mg; Ambroxol 10 mg; Metilprednisolon 2 mg; m.f. pulv. d.t.d in caps No. XII. S. 3 dd caps I. Di apotek tersedia tablet Salbutamol 2 mg, Ambroxol 30 mg, dan Metilprednisolon 4 mg. Lakukan skrining resep dan kesesuaian dosis, hitung jumlah tablet yang dibutuhkan, jelaskan prosedur peracikan lege artis secara higienis, pemilihan cangkang kapsul, serta tentukan Beyond Use Date (BUD) sediaan puyer/kapsul racikan menurut USP <795>.',
    simulatedPatientScript: 'Penguji/Asesor bertindak sebagai apoteker pendamping: "Berapa tablet masing-masing obat yang Anda ambil dari rak? Bagaimana langkah menggerus dan mencampur agar homogen? Berapa nomor cangkang kapsul yang Anda gunakan dan berapa hari BUD kapsul racikan ini?"',
    criticalChecklist: [
      { step: 'Skrining Administratif & Kesesuaian Dosis Anak', description: 'Memverifikasi kelengkapan resep (nama dokter, SIP, paraf, nama anak, umur 6 tahun, BB 20 kg); memvalidasi dosis lazim salbutamol (0,1-0,15 mg/kgBB/kali = 2-3 mg/hari), ambroxol (1,2-1,6 mg/kgBB/hari), dan metilprednisolon sudah sesuai rentang aman.', points: 15 },
      { step: 'Perhitungan Kebutuhan Tablet Bahan Baku (Perhitungan Tepat)', description: 'Menghitung secara presisi: (1) Salbutamol: (1 mg x 12 caps) / 2 mg = 6 tablet; (2) Ambroxol: (10 mg x 12 caps) / 30 mg = 4 tablet; (3) Metilprednisolon: (2 mg x 12 caps) / 4 mg = 6 tablet. Menyiapkan zat pengisi pengencer (laktosa/SL) secukupnya.', points: 25 },
      { step: 'Prosedur Peracikan Lege Artis & Prinsip Geometrical Dilution', description: 'Mencuci tangan, memakai APD (masker, sarung tangan); bersihkan mortir-stamper dengan alkohol 70%; gerus tablet dari jumlah paling sedikit atau zat aktif terpoten lebih dulu (geometrical dilution) hingga terbentuk serbuk halus dan homogen.', points: 20 },
      { step: 'Pemilihan Ukuran Cangkang Kapsul & Pengisian Homogen', description: 'Menimbang bobot total serbuk dibagi 12 bagian; memilih ukuran cangkang kapsul yang sesuai (umumnya Nomor 2 atau 3 untuk bobot serbuk 150-250 mg per kapsul); memasukkan serbuk ke dalam badan cangkang kapsul secara merata dan menutupnya hingga terdengar bunyi "klik". Bersihkan bagian luar kapsul dengan kain kassa kering bersih.', points: 20 },
      { step: 'Pemberian Etiket Putih, Aturan Pakai & Penentuan BUD USP <795>', description: 'Menempelkan etiket putih dengan signa "3 kali sehari 1 kapsul sesudah makan"; mencantumkan BUD sediaan padat non-air (nonaqueous formulation) menurut USP <795> yaitu tidak lebih dari 60 hari atau 25% dari sisa masa kadaluarsa terpendek bahan baku (pilih yang paling cepat); instruksi simpan di tempat kering dan sejuk terhindar dari lembab.', points: 20 }
    ],
    examinerTips: [
      'Perhitungan tablet mutlak benar: 6 tab salbutamol, 4 tab ambroxol, 6 tab metilprednisolon.',
      'Kandidat wajib menetapkan BUD USP <795> untuk kapsul racikan tanpa air: maksimal 60 hari (atau 25% waktu ED tersisa) dan etiket putih.'
    ]
  },
  {
    id: 'osce-narcotics-sp-sipnap',
    title: 'Stasi 20: Tata Kelola Narkotika-Psikotropika: Legalitas SP Khusus, Penerimaan Fisik & Pelaporan SIPNAP',
    stationType: 'Manajemen & Regulasi',
    durationMinutes: 10,
    candidateTask: 'Anda bertindak sebagai Apoteker Penanggung Jawab Apotek (APA). Anda menghadapi tugas manajerial: (1) Menyiapkan dan menandatangani Surat Pesanan (SP) Narkotika untuk Fentanil Injeksi 0,05 mg/mL dan Morfin Tablet 10 mg, serta SP Psikotropika untuk Alprazolam 0,5 mg; (2) Menerima kiriman barang dari PBF Kimia Farma dengan faktur fisik; (3) Menjelaskan standar penyimpanan lemari narkotika menurut regulasi Permenkes dan kewajiban pelaporan berkala melalui SIPNAP. Paparkan seluruh alur tata kelola sesuai regulasi BPOM dan Kemenkes.',
    simulatedPatientScript: 'Penguji/Asesor bertanya: "Bolehkah Morfin dan Fentanil dipesan dalam 1 lembar SP yang sama? Berapa rangkap SP Narkotika dibuat? Bagaimana spesifikasi lemari penyimpanan narkotika menurut Permenkes No. 5 Tahun 2023? Kapan tenggat waktu pelaporan SIPNAP setiap bulannya?"',
    criticalChecklist: [
      { step: 'Ketentuan Legalitas Format Surat Pesanan (SP) Khusus', description: 'Menjelaskan bahwa 1 lembar Surat Pesanan Narkotika HANYA BOLEH untuk 1 jenis bentuk sediaan/zat (1 item 1 SP; Morfin dan Fentanil HARUS dibuat dalam 2 lembar SP terpisah), dibuat sekurang-kurangnya rangkap 3 (1 asli + 2 tembusan) dengan format khusus, ditandatangani APA dengan nomor SIPA, stempel apotek, dan identitas PBF resmi. SP Psikotropika boleh lebih dari 1 jenis item (maksimal 3 item/sesuai format PBF) dalam rangkap 2 atau 3.', points: 25 },
      { step: 'Prosedur Verifikasi Penerimaan Barang dari Kurir PBF', description: 'Memeriksa kesesuaian fisik box obat dengan faktur dan SP: nama sediaan, kekuatan dosis, jumlah box/ampul, bentuk sediaan, nomor batch pabrik, dan tanggal kadaluarsa (ED > 1-2 tahun); memastikan segel kemasan utuh tidak rusak. Faktur asli ditandatangani basah oleh APJ (atau TTK dengan surat delegasi resmi) disertai nomor SIPA/SIPTTK, tanggal terima, dan stempel basah apotek.', points: 20 },
      { step: 'Standar Lemari Penyimpanan Narkotika & Psikotropika (Permenkes 5/2023)', description: 'Narkotika dan psikotropika wajib disimpan dalam lemari khusus berbahan kayu kuat atau besi baja; lemari harus menempel kuat pada dinding atau lantai (fixed/tidak mudah dipindahkan); memiliki 2 pintu dengan 2 anak kunci yang berbeda; kunci ganda dipegang oleh Apoteker Penanggung Jawab dan pegawai kefarmasian lain yang ditunjuk secara resmi.', points: 20 },
      { step: 'Pencatatan Kartu Stok Fisik Real-Time', description: 'Setiap penerimaan dan pengeluaran narkotika/psikotropika WAJIB dicatat seketika (real-time) pada kartu stok manual/elektronik yang terpisah: memuat tanggal, nomor faktur/resep, nama dokter penulis resep, nama pasien/PBF, jumlah masuk, jumlah keluar, sisa stok, dan paraf petugas.', points: 15 },
      { step: 'Tata Cara & Batas Akhir Pelaporan SIPNAP Elektronik', description: 'Apotek wajib melaporkan mutasi penerimaan dan pengeluaran narkotika dan psikotropika secara elektronik melalui aplikasi SIPNAP (Sistem Pelaporan Narkotika dan Psikotropika) Kementerian Kesehatan paling lambat tanggal 10 setiap bulannya untuk periode bulan sebelumnya. Jika pada bulan tersebut tidak ada transaksi pemasukan maupun pengeluaran, apotek TETAP WAJIB membuat laporan dengan status NIHIL.', points: 20 }
    ],
    examinerTips: [
      'Kandidat GAGAL jika menggabungkan Morfin dan Fentanil dalam 1 lembar SP Narkotika yang sama (harus 1 zat/sediaan per SP Narkotika).',
      'Kandidat wajib menyebutkan batas waktu pelaporan SIPNAP adalah tanggal 10 setiap bulan, dan jika nihil tetap wajib lapor.'
    ]
  }
];
