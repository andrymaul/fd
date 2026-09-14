import type { PharmacySopItem } from './pharmacySopData';

// ============================================================================
// BATCH 2: EKSPANSI 25 STANDAR OPERASIONAL PROSEDUR (SOP) RESMI FARMASI
// Berstandar STARKES Kemenkes RI (PKPO), Permenkes 72/2016, 73/2016, CDOB & PerBPOM
// Total 25 Dokumen Resmi Baru (Nomor Dokumen 033 s/d 057)
// ============================================================================

export const ADDITIONAL_PHARMACY_SOPS: PharmacySopItem[] = [
  // =========================================================================
  // KATEGORI 1: PELAYANAN FARMASI KLINIS (7 SOP BARU)
  // =========================================================================
  {
    id: 'sop-ppra-antibiotik-restriksi',
    docNumber: 'SOP/FAR-KLIN/033/2026',
    title: 'SOP Pengendalian Resistensi Antimikroba (PPRA) & Pembatasan Antibiotik Restriksi',
    category: 'klinis',
    categoryLabel: 'Pelayanan Farmasi Klinis',
    effectiveDate: '01 Januari 2026',
    revision: '02',
    legalBasis: [
      'Permenkes RI No. 8 Tahun 2015 tentang Program Pengendalian Resistensi Antimikroba di Rumah Sakit',
      'Standar Akreditasi Kemenkes RI (STARKES 2022) Bab PKPO 5.1 & Program Nasional PPRA',
      'WHO AWaRe (Access, Watch, Reserve) Antibiotic Categorization Framework'
    ],
    purpose: 'Mencegah timbul dan meluasnya mikroba resisten ganda (MDRO) melalui pembatasan peresepan antibiotik golongan Reserve dan Watch, serta memastikan kepatuhan automatic stop-order 72 jam.',
    scope: 'Seluruh peresepan antibiotik untuk pasien rawat inap, rawat jalan, dan unit perawatan intensif (ICU/ICCU/NICU).',
    policy: 'Antibiotik golongan Reserve (misal: Meropenem, Linezolid, Kolistin, Vankomisin) hanya dapat dilayani di farmasi jika telah dilengkapi Formulir Persetujuan Tim PPRA / Konsultan Mikrobiologi Klinik.',
    responsiblePersons: ['Apoteker Klinis Penanggung Jawab Bangsal', 'Dokter Anggota Tim PPRA', 'Dokter Penanggung Jawab Pelayanan (DPJP)'],
    equipmentNeeded: ['Formulir Permintaan Antibiotik Restriksi', 'Hasil Biakan & Uji Resistensi Laboratorium Mikrobiologi', 'Sistem Rekam Medis Elektronik (RME / CPPT)', 'Panduan Penggunaan Antibiotik (PPAB) RS'],
    procedureSteps: [
      {
        stepNumber: 1,
        title: 'Penapisan Kategori Antibiotik AWaRe',
        description: 'Apoteker memverifikasi resep antibiotik masuk kategori Access, Watch, atau Reserve sesuai formularium PPAB rumah sakit.',
        keyPoints: [
          'Access: Lini pertama infeksi umum (Amoksisilin, Sefaleksin, Metronidazol) dapat dilayani langsung.',
          'Watch: Spektrum luas berisiko resistensi (Siprofloksasin, Seftriakson, Azitromisin) wajib dievaluasi ketepatan indikasi.',
          'Reserve: Lini terakhir penyelamat jiwa (Meropenem, Vankomisin, Kolistin) WAJIB persetujuan pra-otorisasi Tim PPRA.'
        ]
      },
      {
        stepNumber: 2,
        title: 'Verifikasi Pra-Otorisasi & Bukti Kultur Kuman',
        description: 'Periksa kelengkapan tanda tangan Dokter Konsultan PPRA dan lampiran hasil kultur swab/darah:',
        keyPoints: [
          'Jika belum ada hasil kultur, batas maksimal pemberian terapi empiris adalah 72 jam.',
          'Kaji ada tidaknya riwayat alergi dan fungsi ginjal/hati untuk penyesuaian dosis.'
        ]
      },
      {
        stepNumber: 3,
        title: 'Evaluasi Terapi Pasca 72 Jam (Automatic Stop-Order)',
        description: 'Pada hari ke-3 terapi, Apoteker klinis bersama DPJP melakukan evaluasi respon klinis dan hasil kultur:',
        keyPoints: [
          'Lakukan de-eskalasi: Turunkan spektrum antibiotik ke lini yang lebih sempit sesuai hasil uji kepekaan.',
          'Hentikan antibiotik jika tanda klinis dan biomarker (prokalsitonin/CRP) menunjukkan infeksi telah teratasi.'
        ]
      },
      {
        stepNumber: 4,
        title: 'Dokumentasi & Audit Kuantitatif (DDD)',
        description: 'Catat pemberian antibiotik dalam lembar CPPT dan input ke dalam sistem rekapitulasi konsumsi antibiotik berkala (DDD per 100 hari rawat).'
      }
    ],
    criticalChecklist: [
      'Resep antibiotik Reserve telah ditandatangani oleh dokter konsultan Tim PPRA.',
      'Sampel kultur darah/urin/sputum telah diambil SEBELUM dosis pertama antibiotik dimulai.',
      'Batas terapi empiris 72 jam tidak dilampaui tanpa konfirmasi perpanjangan dari DPJP.',
      'Dosis telah disesuaikan dengan nilai estimasi klirens kreatinin (CrCl) pasien.'
    ],
    relatedForms: ['Formulir Persetujuan Antibiotik Restriksi', 'Formulir Evaluasi 72 Jam PPRA', 'Lembar Hasil Mikrobiologi & Antibiogram RS'],
    notes: 'Kepatuhan restriksi antibiotik merupakan indikator mutu nasional keselamatan pasien yang dievaluasi langsung oleh Kementerian Kesehatan.'
  },
  {
    id: 'sop-evaluasi-penggunaan-obat-gyssens',
    docNumber: 'SOP/FAR-KLIN/034/2026',
    title: 'SOP Evaluasi Penggunaan Obat (EPO / DUE) Kuantitatif DDD & Kualitatif Gyssens',
    category: 'klinis',
    categoryLabel: 'Pelayanan Farmasi Klinis',
    effectiveDate: '01 Januari 2026',
    revision: '02',
    legalBasis: [
      'Permenkes RI No. 72 Tahun 2016 tentang Standar Pelayanan Kefarmasian di Rumah Sakit',
      'Pedoman Evaluasi Penggunaan Antibiotik Kemenkes RI Metode Gyssens',
      'WHO Collaborating Centre for Drug Statistics Methodology (ATC/DDD Index)'
    ],
    purpose: 'Mengevaluasi kerasionalan dan kuantitas peresepan obat secara terstruktur guna mewujudkan terapi yang efektif, aman, serta efisien secara pembiayaan farmasi.',
    scope: 'Seluruh rekam medis dan data transaksi peresepan pasien rawat inap dan rawat jalan.',
    policy: 'Audit kualitatif metode Gyssens dan perhitungan kuantitatif Defined Daily Dose (DDD) per 100 hari rawat dilakukan tiap triwulan oleh Komite Farmasi dan Terapi (KFT).',
    responsiblePersons: ['Ketua Komite Farmasi & Terapi', 'Apoteker Penanggung Jawab Audit Klinis', 'Kepala Instalasi Farmasi'],
    equipmentNeeded: ['Formulir Lembar Kerja Alur Gyssens', 'Perangkat Komputer Spreadsheet / SIMRS', 'Tabel Indeks ATC/DDD WHO Terkini', 'Berkas Rekam Medis Sampel Pasien'],
    procedureSteps: [
      {
        stepNumber: 1,
        title: 'Penentuan Target Obat & Sampling Kasus',
        description: 'Tetapkan kelompok obat target evaluasi (misal: antibiotik spektrum luas, albumin, PPI injeksi, atau obat sitostatika berbiaya tinggi) dan tarik sampel rekam medis acak representatif.'
      },
      {
        stepNumber: 2,
        title: 'Perhitungan Kuantitatif Metode ATC/DDD',
        description: 'Hitung total gram obat yang dikonsumsi dibagi nilai baku Defined Daily Dose (DDD) WHO:',
        keyPoints: [
          'Rumus: Total DDD per 100 hari rawat = (Total gram obat / DDD standar WHO) x (100 / Total Pasien-Hari Rawat).',
          'Bandingkan tren kenaikan atau penurunan angka konsumsi obat antar periode audit.'
        ]
      },
      {
        stepNumber: 3,
        title: 'Penilaian Kualitatif Berdasarkan Diagram Alur Gyssens',
        description: 'Klasifikasikan tiap penggunaan obat ke dalam kategori Kategori 0 s/d Kategori VI:',
        keyPoints: [
          'Kategori 0: Penggunaan obat tepat dan rasional.',
          'Kategori I: Waktu pemberian tidak tepat.',
          'Kategori IIA/IIB/IIC: Dosis tidak tepat (terlalu rendah/tinggi) / interval tidak tepat / rute salah.',
          'Kategori IIIA/IIIB: Pemberian terlalu lama / terlalu singkat.',
          'Kategori IVA/IVB/IVC/IVD: Ada obat lain yang lebih efektif / lebih aman / lebih murah / spektrum lebih sempit.',
          'Kategori V: Tidak ada indikasi obat yang jelas (irasional berat).',
          'Kategori VI: Data rekam medis tidak lengkap untuk dinilai.'
        ]
      },
      {
        stepNumber: 4,
        title: 'Penyusunan Rekomendasi & Umpan Balik Klinis',
        description: 'Presentasikan hasil analisis Gyssens dalam rapat KFT dan sampaikan rekomendasi tertulis kepada Kelompok Staf Medis (KSM) terkait.'
      }
    ],
    criticalChecklist: [
      'Formula perhitungan DDD menggunakan nilai standar resmi dari WHO Drug Statistics Centre.',
      'Penetapan kategori Gyssens didasarkan pada panduan praktek klinis (PPK) dan bukti ilmiah terkini.',
      'Laporan audit triwulan diserahkan kepada Direktur Rumah Sakit dan Komite Medik.'
    ],
    relatedForms: ['Lembar Kerja Audit Gyssens', 'Laporan Kuantitatif DDD/100 Hari Rawat', 'Surat Rekomendasi KFT'],
    notes: 'Kategori Gyssens V (tanpa indikasi) dan II (dosis salah) menjadi prioritas utama intervensi Apoteker di bangsal rawat inap.'
  },
  {
    id: 'sop-obat-bawaan-pasien-luar',
    docNumber: 'SOP/FAR-KLIN/035/2026',
    title: 'SOP Pengelolaan Obat yang Dibawa Pasien Sendiri dari Luar (Own Medication)',
    category: 'klinis',
    categoryLabel: 'Pelayanan Farmasi Klinis',
    effectiveDate: '01 Januari 2026',
    revision: '01',
    legalBasis: [
      'Standar Akreditasi Rumah Sakit (STARKES Kemenkes) Bab PKPO 3.3',
      'Permenkes RI No. 72 Tahun 2016 tentang Standar Pelayanan Kefarmasian di Rumah Sakit'
    ],
    purpose: 'Mencegah terjadinya duplikasi peresepan, interaksi obat berbahaya, serta memastikan keaslian, mutu penyimpanan, dan legalitas obat yang dibawa pasien dari rumah.',
    scope: 'Seluruh pasien baru yang menjalani rawat inap atau transfer rujukan yang membawa obat-obatan pribadi.',
    policy: 'Pasien rawat inap dilarang meminum obat bawaan sendiri tanpa persetujuan tertulis dari Dokter Penanggung Jawab Pelayanan (DPJP) dan telaah kelayakan fisik oleh Apoteker.',
    responsiblePersons: ['Apoteker Bangsal Rawat Inap', 'Perawat Penerima Pasien Baru', 'Dokter Penanggung Jawab Pelayanan (DPJP)'],
    equipmentNeeded: ['Formulir Rekonsiliasi & Serah Terima Obat Bawaan Pasien', 'Kantong Plastik Ziploc Khusus Obat Bawaan', 'Label Identitas Pasien', 'Lembar CPPT'],
    procedureSteps: [
      {
        stepNumber: 1,
        title: 'Penerimaan & Wawancara Obat Pribadi',
        description: 'Perawat atau Apoteker mendata seluruh sediaan obat yang dibawa pasien saat proses admisi rawat inap:',
        keyPoints: [
          'Catat nama obat, kekuatan, bentuk sediaan, aturan pakai sebenarnya yang dijalani di rumah.',
          'Tanyakan sisa obat, tanggal perolehan, dan tempat penyimpanan sebelumnya (misal suhu kamar atau kulkas).'
        ]
      },
      {
        stepNumber: 2,
        title: 'Pemeriksaan Mutu Fisik & Kedaluwarsa',
        description: 'Apoteker memeriksa integritas kemasan blister/strip, tanggal kedaluwarsa (ED), dan tanda-tanda kerusakan fisik (perubahan warna, bau, kerapuhan tablet).',
        keyPoints: [
          'Obat racikan tanpa label BUD yang jelas atau obat tanpa etiket resmi TIDAK BOLEH digunakan.',
          'Obat yang dicurigai rusak diserahkan kepada keluarga untuk disimpan di rumah atau dimusnahkan atas izin pasien.'
        ]
      },
      {
        stepNumber: 3,
        title: 'Telaah DPJP & Keputusan Kelanjutan Terapi',
        description: 'Apoteker melaporkan daftar obat bawaan kepada DPJP via formulir rekonsiliasi untuk diputuskan:',
        keyPoints: [
          'DILANJUTKAN: Obat dimasukkan ke dalam daftar instruksi obat rawat inap dan disimpan di loker obat depo farmasi bangsal.',
          'DIHENTIKAN (STOP): Obat diberi label "JANGAN DIGUNAKAN SELAMA RAWAT INAP" dan disimpan terkunci.'
        ]
      },
      {
        stepNumber: 4,
        title: 'Serah Terima & Penyimpanan Aman',
        description: 'Obat yang disetujui disimpan dalam sistem Unit Dose Dispensing (UDD) oleh perawat/farmasi. Saat pasien pulang (discharge), sisa obat diserahterimakan kembali disertai edukasi lengkap.'
      }
    ],
    criticalChecklist: [
      'Formulir serah terima obat bawaan ditandatangani oleh pasien/keluarga dan Apoteker.',
      'Ada tanda tangan persetujuan DPJP untuk setiap obat bawaan yang diinstruksikan lanjut.',
      'Obat yang tidak diizinkan dokter diberi label peringatan mencolok dan dipisahkan dari obat aktif.',
      'Pasien dan keluarga diedukasi untuk tidak meminum obat apa pun tanpa sepengetahuan perawat.'
    ],
    relatedForms: ['Formulir Rekonsiliasi Obat Masuk', 'Formulir Serah Terima Obat Milik Pasien', 'Label Peringatan Obat Ditunda'],
    notes: 'Bila obat bawaan pasien merupakan Narkotika/Psikotropika, serah terima wajib diverifikasi langsung oleh Apoteker dan disimpan di lemari narkotika ganda.'
  },
  {
    id: 'sop-resep-elektronik-downtime',
    docNumber: 'SOP/FAR-KLIN/036/2026',
    title: 'SOP Pelayanan Resep Elektronik (e-Prescribing) & Mitigasi Downtime SIMRS',
    category: 'klinis',
    categoryLabel: 'Pelayanan Farmasi Klinis',
    effectiveDate: '01 Januari 2026',
    revision: '02',
    legalBasis: [
      'Permenkes RI No. 24 Tahun 2022 tentang Rekam Medis',
      'UU No. 17 Tahun 2023 tentang Kesehatan',
      'Standar Akreditasi Rumah Sakit Bab Manajemen Informasi dan Rekam Medis (MRMIK)'
    ],
    purpose: 'Menjamin keabsahan legalitas resep digital serta menjamin kontinuitas pelayanan obat yang aman saat sistem SIMRS / e-Prescribing mengalami padam jaringan (downtime).',
    scope: 'Seluruh dokter penulis resep, Apoteker dan Tenaga Vokasi Farmasi di seluruh depo farmasi.',
    policy: 'Setiap resep elektronik wajib memiliki tanda tangan digital tersertifikasi. Saat downtime terencana maupun tidak terencana terjadi > 15 menit, pelayanan beralih seketika ke prosedur manual formulir kertas darurat.',
    responsiblePersons: ['Apoteker Penanggung Jawab Depo', 'Tim IT / SIMRS Rumah Sakit', 'Dokter Penulis Resep'],
    equipmentNeeded: ['Komputer Terminal Farmasi & Barcode Scanner', 'Buku Resep Manual Darurat Berstempel Khusus Downtime', 'Genset & UPS Jaringan IT', 'Stempel Pengesahan Manual Resep'],
    procedureSteps: [
      {
        stepNumber: 1,
        title: 'Verifikasi Resep Elektronik Normal',
        description: 'Apoteker membuka antrean resep digital di komputer farmasi, memeriksa keabsahan akun dokter peresep, tanda tangan elektronik (QR Code / TTE), dan melakukan pengkajian klinis online.'
      },
      {
        stepNumber: 2,
        title: 'Deklarasi Kondisi Downtime SIMRS',
        description: 'Jika sistem SIMRS offline/error lebih dari 15 menit, Tim IT menerbitkan pengumuman resmi status DOWNTIME ke seluruh unit pelayanan.'
      },
      {
        stepNumber: 3,
        title: 'Peralihan ke Resep Manual Darurat',
        description: 'Dokter beralih menuliskan resep pada lembar formulir manual kertas berstempel "RESPEK MANUAL DOWNTIME":',
        keyPoints: [
          'Dokter wajib menuliskan nama lengkap pasien, No RM, dan paraf basah.',
          'Farmasi melakukan skrining manual 100% pada lembar fisik sebelum obat disiapkan.'
        ]
      },
      {
        stepNumber: 4,
        title: 'Rekonsiliasi Pasca Pemulihan Sistem (Recovery)',
        description: 'Setelah jaringan SIMRS kembali online normal, petugas farmasi melakukan entry data susulan (back-entry) resep manual ke dalam sistem dalam waktu maksimal 2x24 jam untuk penyesuaian stok dan klaim BPJS.'
      }
    ],
    criticalChecklist: [
      'Tersedia stok lembar resep manual darurat di setiap poli dan ruang perawatan.',
      'Stok fisik obat yang keluar selama downtime dicatat pada kartu stok manual darurat.',
      'Back-entry data transaksi dilakukan secara teliti mencocokkan nomor RM dan identitas obat.'
    ],
    relatedForms: ['Logbook Kejadian Downtime IT', 'Lembar Resep Manual Kedaruratan', 'Berita Acara Rekonsiliasi Stok Pasca Downtime'],
    notes: 'Kerapian pencatatan selama masa downtime sangat menentukan keberhasilan klaim biaya obat dan pencegahan selisih stok obat pada stock opname.'
  },
  {
    id: 'sop-skrining-polifarmasi-beers',
    docNumber: 'SOP/FAR-KLIN/037/2026',
    title: 'SOP Skrining Polifarmasi Geriatri dengan Kriteria Beers & STOPP/START',
    category: 'klinis',
    categoryLabel: 'Pelayanan Farmasi Klinis',
    effectiveDate: '01 Januari 2026',
    revision: '01',
    legalBasis: [
      'Permenkes RI No. 79 Tahun 2014 tentang Penyelenggaraan Pelayanan Geriatri di Rumah Sakit',
      'American Geriatrics Society (AGS) Beers Criteria for Potentially Inappropriate Medication Use in Older Adults',
      'European STOPP/START Criteria for Frail Older Adults'
    ],
    purpose: 'Mendeteksi dan mencegah potensi peresepan obat tidak tepat (Potentially Inappropriate Medications - PIM) serta menurunkan risiko jatuh, demensia obat, dan toksisitas pada pasien lanjut usia (>= 65 tahun).',
    scope: 'Pasien geriatri rawat jalan dan rawat inap yang mengonsumsi >= 5 jenis obat (polifarmasi).',
    policy: 'Setiap resep pasien geriatri dengan polifarmasi wajib melalui skrining Apoteker menggunakan lembar cek Kriteria Beers sebelum obat diserahkan.',
    responsiblePersons: ['Apoteker Spesialis Farmasi Geriatri / Farmasi Klinis', 'Dokter Spesialis Penyakit Dalam / Geriatri'],
    equipmentNeeded: ['Tabel Pedoman Ringkas Kriteria Beers Terkini', 'Kuesioner Riwayat Jatuh & Kognitif Pasien', 'Lembar Telaah Farmasi Klinis CPPT', 'Database Interaksi Obat'],
    procedureSteps: [
      {
        stepNumber: 1,
        title: 'Identifikasi Pasien Geriatri Berisiko',
        description: 'Tapis pasien berusia >= 65 tahun dengan diagnosis multipel penyakit kronis (hipertensi, diabetes, CKD, osteoartritis, PPOK) yang mendapatkan >= 5 item obat.'
      },
      {
        stepNumber: 2,
        title: 'Penapisan Kriteria Obat Terlarang/Hindari (Beers Criteria)',
        description: 'Periksa ada tidaknya obat golongan berisiko tinggi efek samping geriatri:',
        keyPoints: [
          'Antikolinergik Kuat: Difenhidramin, Triheksifenidil, Amitriptilin (risiko delirium, retensi urin, konstipasi parah).',
          'Benzodiazepin Kerja Panjang: Diazepam, Klonazepam (risiko tinggi sedasi, ataksia, fraktur panggul akibat jatuh).',
          'Sulfonilurea Kerja Panjang: Glibenklamid (risiko hipoglikemia berat berkepanjangan; ganti Glimepirid/Gliklazid).',
          'NSAID Non-Selektif Jangka Panjang: Ketorolak, Piroksikam, Diklofenak (risiko ulkus lambung perforasi & perburukan gagal ginjal).'
        ]
      },
      {
        stepNumber: 3,
        title: 'Rekomendasi Deprescribing & Substitusi Obat Aman',
        description: 'Apoteker mengomunikasikan usulan penyederhanaan regimen (deprescribing) atau penggantian alternatif obat yang lebih ramah geriatri kepada dokter DPJP.'
      },
      {
        stepNumber: 4,
        title: 'Konseling Khusus Manajemen Minum Obat Lansia',
        description: 'Berikan kotak obat harian (pill box) bersekat pagi-siang-malam, buat jadwal minum obat font besar, dan edukasikan keluarga (caregiver) pasien.'
      }
    ],
    criticalChecklist: [
      'Glibenklamid tidak diresepkan untuk pasien usia di atas 65 tahun.',
      'Penggunaan sedatif/hipnotik benzodiazepin dibatasi maksimal 2 minggu bila terpaksa digunakan.',
      'Estimasi fungsi ginjal (eGFR/CrCl) dihitung sebelum meresepkan obat indeks terapi sempit.',
      'Caregiver teredukasi mengenai tanda bahaya kebingungan akut (delirium) dan tanda hipoglikemia.'
    ],
    relatedForms: ['Lembar Ceklist Kriteria Beers Geriatri', 'Formulir Monitoring Efek Samping Obat Lanjut Usia', 'Kartu Edukasi Minum Obat Caregiver'],
    notes: 'Kaidah emas geriatri: "Start Low, Go Slow" (mulai dengan dosis terendah, naikkan secara bertahap).'
  },
  {
    id: 'sop-edukasi-alat-khusus',
    docNumber: 'SOP/FAR-KLIN/038/2026',
    title: 'SOP Edukasi & Demonstrasi Penggunaan Sediaan Khusus (Inhaler, Pen Insulin, Suppositoria)',
    category: 'klinis',
    categoryLabel: 'Pelayanan Farmasi Klinis',
    effectiveDate: '01 Januari 2026',
    revision: '02',
    legalBasis: [
      'Permenkes RI No. 73 Tahun 2016 tentang Standar Pelayanan Kefarmasian di Apotek',
      'Permenkes RI No. 72 Tahun 2016 tentang Standar Pelayanan Kefarmasian di Rumah Sakit'
    ],
    purpose: 'Memastikan pasien dan pendamping memahami dengan benar urutan teknik penggunaan obat rute non-oral guna mencegah kegagalan terapi akibat salah teknik aplikasi.',
    scope: 'Seluruh pasien yang mendapatkan resep inhaler asma, insulin injeksi pen, tetes mata/telinga, suppositoria, atau enema.',
    policy: 'Setiap penyerahan pertama kali obat sediaan khusus WAJIB disertai peragaan langsung menggunakan alat peraga (demo dummy) oleh Apoteker dan meminta pasien melakukan peragaan ulang (teach-back method).',
    responsiblePersons: ['Apoteker Konseling', 'Tenaga Vokasi Farmasi Dispensing'],
    equipmentNeeded: ['Inhaler MDI Dummy & Spacer Aerosol', 'Pen Insulin Demo & Jarum Sampel', 'Dummy Sediaan Suppositoria/Tetes', 'Brosur Panduan Bergambar'],
    procedureSteps: [
      {
        stepNumber: 1,
        title: 'Verifikasi Pengetahuan Awal Pasien',
        description: 'Tanyakan apakah pasien pernah menggunakan obat tersebut sebelumnya (Three Prime Questions) dan identifikasi hambatan fisik (tremor, mata rabun, kelemahan tangan).'
      },
      {
        stepNumber: 2,
        title: 'Demonstrasi Teknik Sediaan Inhaler (MDI / Turbuhaler)',
        description: 'Peragakan langkah demi langkah:',
        keyPoints: [
          'Kocok inhaler 5 detik, buka penutup, hembuskan napas maksimal menjauhi inhaler.',
          'Rapatkan bibir di corong, tekan kanister bersamaan dengan MENARIK NAPAS DALAM DAN PERLAHAN (3-5 detik).',
          'TAHAN NAPAS selama 10 detik, lalu hembuskan napas pelan.',
          'Wajib KUMUR-KUMUR dan buang airnya jika inhaler mengandung kortikosteroid (cegah kandidiasis mulut).'
        ]
      },
      {
        stepNumber: 3,
        title: 'Demonstrasi Teknik Pen Insulin',
        description: 'Peragakan persiapan dan penusukan pen insulin:',
        keyPoints: [
          'Putar dosis sesuai resep, pasang jarum baru, lakukan priming 2 unit untuk membuang udara.',
          'Pilih area suntik berlemak (perut berjarak 2 jari dari pusar, paha atas, lengan atas luar). Lakukan ROTASI lokasi suntik cegah lipodistrofi.',
          'Tusuk tegak lurus 90 derajat, tekan tombol dosis hingga angka nol, TAHAN 6-10 DETIK sebelum mencabut jarum.'
        ]
      },
      {
        stepNumber: 4,
        title: 'Teach-Back & Penjelasan Penyimpanan',
        description: 'Minta pasien memperagakan kembali di depan Apoteker. Jelaskan bahwa pen insulin yang belum dipakai disimpan di kulkas (2-8°C), sedangkan pen yang sedang dipakai disimpan suhu kamar aman hingga 28 hari (BUD 28 hari).'
      }
    ],
    criticalChecklist: [
      'Metode teach-back (peragaan ulang oleh pasien) telah dilaksanakan dan dievaluasi benar.',
      'Aturan kumur-kumur pasca steroid inhalasi telah dipahami pasien.',
      'Larangan membekukan insulin di freezer kulkas telah ditekankan.',
      'Pasien memahami tidak boleh membuang jarum bekas sembarangan tanpa wadah tertutup.'
    ],
    relatedForms: ['Checklist Verifikasi Keterampilan Inhaler', 'Checklist Edukasi Insulin', 'Leaflet Bergambar Pemakaian Obat'],
    notes: 'Kerapian edukasi teknik inhaler dan insulin terbukti menurunkan angka kekambuhan serangan asma dan krisis hiperglikemia hingga 80%.'
  },
  {
    id: 'sop-farmasi-paliatif-bebas-nyeri',
    docNumber: 'SOP/FAR-KLIN/039/2026',
    title: 'SOP Pelayanan Farmasi Paliatif & Manajemen Bebas Nyeri Kanker',
    category: 'klinis',
    categoryLabel: 'Pelayanan Farmasi Klinis',
    effectiveDate: '01 Januari 2026',
    revision: '01',
    legalBasis: [
      'Kepmenkes RI No. 812/Menkes/SK/VII/2007 tentang Kebijakan Pelayanan Paliatif',
      'WHO Analgesic Ladder for Cancer Pain Relief',
      'UU No. 35 Tahun 2009 tentang Narkotika'
    ],
    purpose: 'Menjamin ketersediaan, pemantauan efikasi, dan tata kelola analgesik opioid berkekuatan tinggi guna membebaskan pasien kanker stadium lanjut dari derita nyeri kronis tanpa memicu intoksikasi mematikan.',
    scope: 'Pasien rawat inap onkologi, poliklinik perawatan paliatif, dan layanan home care.',
    policy: 'Terapi nyeri kanker mengacu pada tangga analgetik WHO (Step 1 -> Step 2 -> Step 3). Pasien pengguna opioid kuat (Morfin, Fentanil) WAJIB diresepkan bersamaan dengan laksatif pencahar untuk mencegah konstipasi refrakter.',
    responsiblePersons: ['Apoteker Tim Paliatif', 'Dokter Spesialis Onkologi / Anestesi Konsultan Nyeri'],
    equipmentNeeded: ['Skala Penilaian Nyeri (VAS / NRS / Wong-Baker Faces)', 'Formulir Titrasi Opioid & Breakthrough Pain', 'Buku Konseling Farmasi Paliatif'],
    procedureSteps: [
      {
        stepNumber: 1,
        title: 'Asesmen Derajat & Karakteristik Nyeri',
        description: 'Apoteker menggali intensitas nyeri (skor 1-10), lokasi, sifat nyeri (somatik, viseral, atau neuropatik tajam rasa terbakar), serta frekuensi nyeri timbul mendadak (breakthrough pain).'
      },
      {
        stepNumber: 2,
        title: 'Pemilihan & Titrasi Dosis Opioid',
        description: 'Kaji ketepatan pemilihan obat sesuai Tangga Nyeri WHO:',
        keyPoints: [
          'Nyeri Ringan (Skor 1-3): Non-opioid (Parasetamol, NSAID dengan gastroprotektor).',
          'Nyeri Sedang (Skor 4-6): Opioid Lemah (Kodein, Tramadol) +/- Adjuvan.',
          'Nyeri Berat (Skor 7-10): Opioid Kuat (Morfin Oral/Injeksi, Fentanil Patch Transdermal) terjadwal tiap 4 jam atau infus kontinu, bukan PRN (bila perlu saja).'
        ]
      },
      {
        stepNumber: 3,
        title: 'Pemberian Terapi Profilaksis Efek Samping Opioid',
        description: 'Pastikan pasien mendapatkan terapi pendamping pencegah komplikasi:',
        keyPoints: [
          'Laksatif Profilaksis: Berikan Bisakodil atau Laktulosa harian, karena toleransi tubuh terhadap efek konstipasi opioid TIDAK PERNAH terbentuk seumur hidup.',
          'Antiemetik: Siapkan Ondansetron atau Metoklopramid untuk mengatasi mual 3-5 hari awal terapi opioid.'
        ]
      },
      {
        stepNumber: 4,
        title: 'Edukasi Patch Fentanil & Pemantauan Depresi Napas',
        description: 'Jelaskan cara pakai transdermal patch (tempel pada kulit dada/lengan atas yang bersih tidak berambut, ganti tiap 72 jam, JANGAN DIKENAI PANAS/KOMPRES karena melepaskan obat masif memicu henti napas). Siapkan Nalokson IV bila laju napas < 8-10x/menit.'
      }
    ],
    criticalChecklist: [
      'Obat opioid diberikan dengan jadwal waktu tetap (around-the-clock), bukan hanya saat nyeri muncul.',
      'Resep laksatif pencahar telah disertakan bersamaan dengan resep opioid.',
      'Patch Fentanil bekas dilipat dua sisi lengketnya sebelum dibuang aman ke kotak farmasi.',
      'Antidot Nalokson injeksi tersedia di ruang perawatan pasien.'
    ],
    relatedForms: ['Lembar Monitoring Titrasi Nyeri Harian', 'Formulir Serah Terima Narkotika Paliatif Rawat Jalan', 'Buku Petunjuk Pasien Bebas Nyeri'],
    notes: 'Keluarga pasien diedukasi bahwa toleransi dosis opioid pada nyeri kanker bukan tanda kecanduan atau ketergantungan psikologis, melainkan respon biologis wajar jaringan kanker yang membesar.'
  },

  // =========================================================================
  // KATEGORI 2: LOGISTIK, PENGADAAN & PENYIMPANAN (6 SOP BARU)
  // =========================================================================
  {
    id: 'sop-mati-lampu-cold-chain',
    docNumber: 'SOP/FAR-LOG/040/2026',
    title: 'SOP Mitigasi Darurat Mati Listrik pada Penyimpanan Vaksin & Cold Chain (Power Outage)',
    category: 'logistik',
    categoryLabel: 'Pengelolaan Logistik & Penyimpanan',
    effectiveDate: '01 Januari 2026',
    revision: '02',
    legalBasis: [
      'Petunjuk Teknis Pelaksanaan Pengelolaan Vaksin Kemenkes RI',
      'Standar CDOB BPOM RI tentang Penanganan Produk Rantai Dingin (Cold Chain Products)',
      'Standar Akreditasi Rumah Sakit Bab Manajemen Fasilitas dan Keselamatan (MFK)'
    ],
    purpose: 'Menjaga integritas suhu penyimpanan vaksin, insulin, dan produk biologi tetap dalam rentang stabil 2°C - 8°C selama insiden pemadaman aliran listrik guna mencegah inaktivasi antigen.',
    scope: 'Gudang farmasi, instalasi farmasi rawat jalan, depo IGD, dan poli imunisasi.',
    policy: 'Kulkas vaksin dilarang dibuka sama sekali saat listrik padam tanpa pemindahan terencana. Genset otomatis rumah sakit wajib menyala dalam waktu maksimal 10 detik pasca pemadaman.',
    responsiblePersons: ['Apoteker Penanggung Jawab Logistik Cold Chain', 'Teknisi Genset Bagian IPSRS', 'Petugas Farmasi Jaga'],
    equipmentNeeded: ['Coolbox / Vaccine Carrier Standar WHO', 'Coolpack / Icepack Dingin Terkondisi', 'Termometer Digital dengan Probe Eksternal', 'Logbook Suhu Kedaruratan Cold Chain'],
    procedureSteps: [
      {
        stepNumber: 1,
        title: 'Verifikasi Otomatisasi Genset RS (Detik 0 - 60)',
        description: 'Saat listrik PLN padam, amati panel kulkas farmasi. Genset darurat otomatis wajib menyuplai daya ke stopkontak khusus jalur merah (emergency power outlet) dalam 10 detik.'
      },
      {
        stepNumber: 2,
        title: 'Tindakan Bila Genset Gagal Menyala (Menit 1 - 30)',
        description: 'Jika genset gagal menyuplai daya ke kulkas dalam 15 menit:',
        keyPoints: [
          'JANGAN PERNAH MEMBUKA PINTU KULKAS VAKSIN! Pintu kulkas yang tertutup rapat mampu mempertahankan suhu aman 2-8°C selama 2 hingga 4 jam (holdover time).',
          'Pasang termometer eksternal untuk memantau kenaikan suhu dari luar kaca/display digital.'
        ]
      },
      {
        stepNumber: 3,
        title: 'Prosedur Evakuasi Vaksin ke Coolbox (Menit > 60)',
        description: 'Bila listrik padam diperkirakan berlangsung lebih dari 2 jam atau suhu kulkas mendekati batas kritis 7.5°C:',
        keyPoints: [
          'Siapkan Vaccine Carrier / Coolbox yang telah diisi ice pack dingin terkondisi (conditioned icepack).',
          'Pindahkan seluruh vaksin dengan cepat, letakkan vaksin sensitif beku (DPT-HB-Hib, TT, Hepatitis B) menjauh dari icepack dengan sekat kardus pemisah.',
          'Kunci rapat coolbox dan catat suhu tiap 30 menit pada logbook darurat.'
        ]
      },
      {
        stepNumber: 4,
        title: 'Pemeriksaan Kerusakan Antigen (Shake Test)',
        description: 'Setelah listrik normal, periksa indikator VVM (Vaccine Vial Monitor). Pada vaksin sensitif beku yang dicurigai sempat membeku, lakukan uji kocok (Shake Test) sebelum vaksin dinyatakan boleh digunakan.'
      }
    ],
    criticalChecklist: [
      'Kulkas cold chain selalu terhubung ke stopkontak jalur emergency genset (stopkontak merah).',
      'Ice pack cadangan selalu siap beku di dalam freezer setiap saat.',
      'Suhu selama proses evakuasi tercatat tidak melampaui rentang 2°C s/d 8°C.',
      'Indikator VVM vaksin diperiksa satu per satu pasca insiden pemadaman listrik.'
    ],
    relatedForms: ['Logbook Pemantauan Suhu Darurat', 'Berita Acara Kejadian Mati Listrik Cold Chain', 'Lembar Uji Kocok (Shake Test) Vaksin'],
    notes: 'Vaksin yang indikator VVM-nya telah mencapai stadium C atau D wajib langsung dikarantina di kotak terpisah dan dilarang disuntikkan kepada pasien!'
  },
  {
    id: 'sop-kalibrasi-alat-ukur-farmasi',
    docNumber: 'SOP/FAR-LOG/041/2026',
    title: 'SOP Kalibrasi, Pemeliharaan & Verifikasi Rutin Alat Ukur Farmasi',
    category: 'logistik',
    categoryLabel: 'Pengelolaan Logistik & Penyimpanan',
    effectiveDate: '01 Januari 2026',
    revision: '01',
    legalBasis: [
      'UU No. 2 Tahun 1981 tentang Metrologi Legal',
      'Permenkes No. 54 Tahun 2015 tentang Pengujian dan Kalibrasi Alat Kesehatan',
      'Farmakope Indonesia Edisi VI tentang Peralatan Volumetrik & Timbangan'
    ],
    purpose: 'Menjamin ketepatan dan akurasi seluruh alat ukur bobot (timbangan gram/miligram), pengukur suhu (termometer), dan pengukur kelembaban (higrometer) guna menjamin mutu sediaan racikan dan stabilitas penyimpanan obat.',
    scope: 'Seluruh timbangan analitik, timbangan gram kasar, termometer kulkas, dan termohigrometer digital di seluruh instalasi farmasi.',
    policy: 'Alat ukur timbangan wajib ditera ulang secara resmi oleh Badan Metrologi Legal minimal sekali dalam 1 tahun, serta diverifikasi internal harian menggunakan anak timbangan standar sebelum digunakan meracik.',
    responsiblePersons: ['Apoteker Penanggung Jawab Sarana & Mutu', 'Petugas Laboratorium Metrologi / BPFK', 'Tenaga Vokasi Farmasi Peracikan'],
    equipmentNeeded: ['Anak Timbangan Standar Terkalibrasi (F1/M1)', 'Logbook Kalibrasi Alat', 'Stiker Label Lolos Tera Metrologi', 'Waterpass & Kuas Pembersih Timbangan'],
    procedureSteps: [
      {
        stepNumber: 1,
        title: 'Pemeriksaan Posisi & Keseimbangan Harian (Leveling)',
        description: 'Sebelum peracikan dimulai, periksa gelembung udara waterpass timbangan berada tepat di lingkaran tengah. Bersihkan piringan timbangan dari debu obat menggunakan kuas halus.'
      },
      {
        stepNumber: 2,
        title: 'Verifikasi Harian Menggunakan Anak Timbang Standar',
        description: 'Lakukan penimbangan uji anak timbang standar bersertifikat (misal 100 mg, 1 gram, 10 gram):',
        keyPoints: [
          'Catat hasil pembacaan digital pada logbook verifikasi harian.',
          'Penyimpangan maksimum yang ditoleransi untuk timbangan miligram adalah +/- 0.1% dari bobot standar.',
          'Bila penyimpangan melampaui batas toleransi, tempel tanda "RUSAK / TIDAK BOLEH DIPAKAI" dan hubungi teknisi kalibrasi.'
        ]
      },
      {
        stepNumber: 3,
        title: 'Kalibrasi Resmi Eksternal Tahunan',
        description: 'Ajukan jadwal kalibrasi tahunan ke Balai Pengujian Fasilitas Kesehatan (BPFK) atau Balai Metrologi resmi untuk penerbitan Sertifikat Kalibrasi Legal.'
      },
      {
        stepNumber: 4,
        title: 'Pemasangan Label Status Kalibrasi',
        description: 'Tempelkan label stiker hijau "TERKALIBRASI" yang memuat tanggal pelaksanaan kalibrasi, tanggal kedaluwarsa masa kalibrasi, dan paraf petugas berwenang.'
      }
    ],
    criticalChecklist: [
      'Gelembung waterpass timbangan selalu berada di posisi tengah presisi.',
      'Sertifikat kalibrasi resmi dari laboratorium terakreditasi KAN masih berlaku aktif.',
      'Stiker label kalibrasi tertempel jelas pada badan alat ukur.',
      'Logbook verifikasi harian terisi rapi setiap pagi hari sebelum peracikan dimulai.'
    ],
    relatedForms: ['Logbook Verifikasi Timbangan Harian', 'Sertifikat Kalibrasi Resmi BPFK/Metrologi', 'Label Status Kalibrasi Alat'],
    notes: 'Timbangan analitik yang belum ditera atau kedaluwarsa stiker metrologinya dapat memicu sanksi pembatalan akreditasi laboratorium farmasi.'
  },
  {
    id: 'sop-obat-rusak-blister-pecah',
    docNumber: 'SOP/FAR-LOG/042/2026',
    title: 'SOP Penanganan & Karantina Obat Rusak Kemasan Primer / Blister Pecah',
    category: 'logistik',
    categoryLabel: 'Pengelolaan Logistik & Penyimpanan',
    effectiveDate: '01 Januari 2026',
    revision: '01',
    legalBasis: [
      'Permenkes RI No. 73 Tahun 2016 tentang Standar Pelayanan Kefarmasian di Apotek',
      'Standar CDOB BPOM RI tentang Pengelolaan Produk Kembalian & Obat Rusak'
    ],
    purpose: 'Mencegah obat yang cacat fisik, rapuh, kemasan primer sobek/bocor, atau blister pecah terdispensing kepada pasien secara tidak sengaja.',
    scope: 'Seluruh unit penyimpanan obat, rak dispensing resep, dan ruang peracikan.',
    policy: 'Setiap obat yang ditemukan rusak kemasan primernya wajib seketika dipisahkan dari rak penyimpanan aktif, diberi tanda karantina, dan dicatat dalam Berita Acara Kerusakan Obat.',
    responsiblePersons: ['Apoteker Penanggung Jawab Logistik', 'Tenaga Teknis Kefarmasian Gudang/Dispensing'],
    equipmentNeeded: ['Wadah / Kotak Khusus Karantina Obat Rusak Bertutup Kuning/Merah', 'Label Merah Mencolok "OBAT RUSAK - JANGAN DIGUNAKAN"', 'Buku Register Kerusakan Obat', 'Berita Acara Pemisahan Obat'],
    procedureSteps: [
      {
        stepNumber: 1,
        title: 'Deteksi Kerusakan Fisik Saat Dispensing / Cek Stok',
        description: 'Petugas menemukan kerusakan sediaan: tablet hancur/berubah warna, kapsul lembek/menempel, blister sobek berlubang, sirup mengkristal/bocor, atau ampul retak.'
      },
      {
        stepNumber: 2,
        title: 'Isolasi & Pemisahan Fisik Seketika',
        description: 'Keluarkan sediaan rusak seketika dari rak aktif. Masukkan ke dalam wadah tertutup khusus "KOTAK KARANTINA OBAT RUSAK" yang diletakkan terpisah dari area pelayanan.'
      },
      {
        stepNumber: 3,
        title: 'Penempelan Label Peringatan & Penyesuaian Sistem Stok',
        description: 'Tempelkan label stiker merah bertuliskan "OBAT RUSAK - DILARANG DIPAKAI". Lakukan pemotongan stok pada SIMRS / kartu stok manual dengan status "Karantina Obat Rusak" agar tidak terjual secara sistem.'
      },
      {
        stepNumber: 4,
        title: 'Pencatatan Berita Acara & Tindak Lanjut',
        description: 'Buat Berita Acara Kerusakan Obat yang memuat nama obat, nomor batch, tanggal ED, jumlah rusak, dan penyebab kerusakan. Koordinasikan apakah obat dapat diretur ke PBF atau diproses pemusnahan tahunan.'
      }
    ],
    criticalChecklist: [
      'Obat rusak kemasan primer tidak dibiarkan berada di rak penyimpanan aktif.',
      'Kotak karantina obat rusak tersimpan dalam kondisi terkunci dan berlabel mencolok.',
      'Stok obat pada SIMRS telah disesuaikan (dikeluarkan dari stok tersedia jual).',
      'Berita acara ditandatangani oleh staf penemu dan Apoteker Penanggung Jawab.'
    ],
    relatedForms: ['Berita Acara Kerusakan Fisik Obat', 'Register Logbook Karantina Obat', 'Label Peringatan Obat Rusak'],
    notes: 'Dilarang keras menyatukan potongan blister yang berlubang dengan blister utuh dalam wadah dispenser obat pasien!'
  },
  {
    id: 'sop-obat-donasi-sampel-medis',
    docNumber: 'SOP/FAR-LOG/043/2026',
    title: 'SOP Pengelolaan Obat Donasi, Bantuan Bencana & Sampel Medis',
    category: 'logistik',
    categoryLabel: 'Pengelolaan Logistik & Penyimpanan',
    effectiveDate: '01 Januari 2026',
    revision: '01',
    legalBasis: [
      'Peraturan Menteri Kesehatan RI tentang Tata Cara Penerimaan & Penyaluran Obat Bantuan',
      'WHO Guidelines for Medicine Donations (Revised 2011)',
      'Standar Akreditasi Rumah Sakit Bab PKPO 2'
    ],
    purpose: 'Memastikan seluruh perbekalan farmasi hasil donasi, hibah bencana, atau sampel medis promosi memenuhi standar mutu, legalitas izin edar BPOM, dan tidak mendekati masa kedaluwarsa.',
    scope: 'Penerimaan perbekalan farmasi bantuan dari instansi pemerintah, organisasi non-pemerintah, yayasan amal, atau perwakilan pabrik obat.',
    policy: 'Obat donasi atau hibah hanya boleh diterima jika memiliki Nomor Izin Edar (NIE) BPOM resmi, kemasan tersegel utuh, dan sisa masa kedaluwarsa minimal 12 hingga 24 bulan saat diterima.',
    responsiblePersons: ['Kepala Instalasi Farmasi', 'Apoteker Panitia Penerima Barang Bantuan', 'Direktur / Pimpinan Fasyankes'],
    equipmentNeeded: ['Formulir Berita Acara Penerimaan Obat Donasi', 'Database Registrasi Obat BPOM Online', 'Palet & Lemari Penyimpanan Khusus Bantuan'],
    procedureSteps: [
      {
        stepNumber: 1,
        title: 'Verifikasi Dokumen & Izin Edar',
        description: 'Periksa kelengkapan surat hibah/donasi, packing list, sertifikat analisa (CoA), dan cek keabsahan izin edar obat di situs resmi BPOM RI.'
      },
      {
        stepNumber: 2,
        title: 'Pemeriksaan Sisa Masa Kedaluwarsa (Expired Date)',
        description: 'Tolak penerimaan obat donasi yang memiliki masa kedaluwarsa kurang dari 1 tahun, obat yang tidak berlabel bahasa Indonesia/Inggris resmi, atau obat yang telah dibuka segelnya.'
      },
      {
        stepNumber: 3,
        title: 'Pencatatan Akuntansi & Berita Acara Serah Terima (BAST)',
        description: 'Susun BAST Donasi yang ditandatangani pihak pemberi dan penerima donasi. Catat nilai perolehan obat ke dalam buku inventaris logistik farmasi dengan nilai Rp 0 atau nilai taksiran wajar.'
      },
      {
        stepNumber: 4,
        title: 'Penyimpanan & Distribusi Prioritas',
        description: 'Simpan obat donasi sesuai suhu yang tertera di kemasan. Salurkan obat donasi secara gratis dan transparan kepada pasien kurang mampu atau korban bencana sesuai tujuan donasi.'
      }
    ],
    criticalChecklist: [
      'Sisa masa kedaluwarsa obat donasi minimal 12 bulan saat barang tiba.',
      'Tersedia Berita Acara Serah Terima (BAST) resmi berkop instansi.',
      'Obat donasi diberi stempel/tanda "OBAT DONASI / HIBAH - DILARANG DIPERJUALBELIKAN".',
      'Penyaluran obat donasi tercatat lengkap dalam rekam medis dan rekapitulasi farmasi.'
    ],
    relatedForms: ['Berita Acara Serah Terima (BAST) Obat Donasi', 'Formulir Skrining Mutu Obat Bantuan', 'Laporan Pertanggungjawaban Donasi Farmasi'],
    notes: 'Dilarang keras memperjualbelikan atau memasukkan obat donasi ke dalam tagihan biaya pasien BPJS maupun pasien umum!'
  },
  {
    id: 'sop-retur-obat-distributor-pbf',
    docNumber: 'SOP/FAR-LOG/044/2026',
    title: 'SOP Pengembalian Obat ke Pedagang Besar Farmasi (Retur Barang PBF)',
    category: 'logistik',
    categoryLabel: 'Pengelolaan Logistik & Penyimpanan',
    effectiveDate: '01 Januari 2026',
    revision: '02',
    legalBasis: [
      'Standar Cara Distribusi Obat yang Baik (CDOB) BPOM RI',
      'Surat Perjanjian Kerjasama (MOU) Pengadaan dengan Distributor PBF Resmi'
    ],
    purpose: 'Mengatur alur pengembalian obat yang mendekati tanggal kedaluwarsa (sesuai perjanjian masa retur), salah kirim spesifikasi, cacat kemasan pabrik, atau terkena program penarikan (recall).',
    scope: 'Gudang perbekalan farmasi, administrasi logistik, dan PBF rekanan.',
    policy: 'Obat yang akan diretur wajib dikumpulkan minimal 3 hingga 6 bulan sebelum tanggal ED (sesuai ketentuan masing-masing PBF) dan disertai faktur pembelian asli.',
    responsiblePersons: ['Apoteker Penanggung Jawab Logistik Gudang', 'Staf Administrasi Retur Farmasi', 'Petugas Ekspedisi PBF'],
    equipmentNeeded: ['Formulir Nota Retur Barang Farmasi', 'Faktur Pembelian Asli / Arsip Faktur Digital', 'Karton Segel Pengembalian Barang'],
    procedureSteps: [
      {
        stepNumber: 1,
        title: 'Identifikasi Stok Mendekati ED via Laporan FEFO',
        description: 'Tiap awal bulan, staf gudang menarik data obat yang memiliki sisa masa simpan <= 6 bulan dari sistem SIMRS/kartu stok.'
      },
      {
        stepNumber: 2,
        title: 'Konfirmasi Jadwal & Kebijakan Retur ke PBF',
        description: 'Apoteker memeriksa perjanjian retur faktur PBF bersangkutan (misal: PBF mensyaratkan retur minimal 3 bulan sebelum ED). Buat konfirmasi tertulis kepada sales/faktur PBF.'
      },
      {
        stepNumber: 3,
        title: 'Penerbitan Surat Pengantar & Nota Retur',
        description: 'Kemas obat dalam kardus terpisah, sertakan Surat Pengantar Retur dan fotokopi faktur asli yang mencantumkan nomor batch yang sesuai.'
      },
      {
        stepNumber: 4,
        title: 'Penerimaan Nota Kredit (Credit Note) atau Barang Pengganti',
        description: 'Saat kurir PBF mengambil barang retur, minta tanda tangan tanda terima barang. Pantau penerbitan Nota Kredit pemotong tagihan atau penggantian barang dengan ED panjang.'
      }
    ],
    criticalChecklist: [
      'Nomor batch obat retur sama persis dengan nomor batch yang tercantum di faktur pembelian asli.',
      'Obat dikemas rapi terlindung dari kerusakan selama pengangkutan retur.',
      'Tanda terima barang retur ditandatangani lengkap nama jelas dan stempel ekspedisi PBF.',
      'Nota kredit (Credit Note) telah memotong saldo hutang dagang pada pembukuan keuangan.'
    ],
    relatedForms: ['Nota Retur Perbekalan Farmasi', 'Tanda Terima Pengambilan Barang PBF', 'Laporan Rekonsiliasi Nota Kredit'],
    notes: 'Obat rusak akibat kelalaian penyimpanan internal (misal: insulin pecah/kulkas mati) umumnya tidak dapat diretur ke PBF dan harus diproses pemusnahan intern.'
  },
  {
    id: 'sop-gudang-b3-flammable',
    docNumber: 'SOP/FAR-LOG/045/2026',
    title: 'SOP Pengelolaan Gudang Bahan Berbahaya & Beracun (B3) serta Zat Mudah Terbakar',
    category: 'logistik',
    categoryLabel: 'Pengelolaan Logistik & Penyimpanan',
    effectiveDate: '01 Januari 2026',
    revision: '01',
    legalBasis: [
      'PP RI No. 74 Tahun 2001 tentang Pengelolaan Bahan Berbahaya dan Beracun (B3)',
      'Permenkes No. 66 Tahun 2016 tentang Keselamatan dan Kesehatan Kerja Rumah Sakit (K3RS)',
      'Standar Akreditasi Kemenkes Bab Manajemen Fasilitas dan Keselamatan (MFK 5)'
    ],
    purpose: 'Mencegah terjadinya kecelakaan kerja, ledakan, kebakaran, dan paparan uap beracun akibat penyimpanan zat kimia pelarut dan reagen farmasi yang tidak aman.',
    scope: 'Gudang farmasi sentral, ruang penyimpanan bahan baku peracikan, dan depo laboratorium farmasi.',
    policy: 'Bahan kimia mudah terbakar (Alkohol 70%, Alkohol 96%, Eter, Aseton) wajib disimpan di lemari besi tahan api berstandar keselamatan (Flammable Safety Cabinet) berventilasi dan dilengkapi lembar MSDS resmi.',
    responsiblePersons: ['Apoteker Penanggung Jawab K3 Farmasi', 'Petugas Gudang Logistik B3', 'Tim Keselamatan Kerja RS (K3RS)'],
    equipmentNeeded: ['Lemari Tahan Api Khusus B3 (Flammable Storage Cabinet)', 'Lembar Data Keselamatan Bahan (MSDS / LDKB)', 'APAR Kelas B / CO2 Terdekat', 'Spill Kit Penanganan Tumpahan Bahan Kimia B3', 'Eyewash Station'],
    procedureSteps: [
      {
        stepNumber: 1,
        title: 'Inventarisasi & Pelabelan Simbol Bahaya B3',
        description: 'Seluruh bahan baku kimia B3 didata dalam register master B3 dan ditempeli simbol bahaya global (GHS): Mudah Terbakar (Flame), Korosif (Corrosion), Beracun (Skull), atau Berbahaya Bagi Kesehatan.'
      },
      {
        stepNumber: 2,
        title: 'Penyimpanan Sesuai Kompatibilitas Zat',
        description: 'Pisahkan penyimpanan berdasarkan sifat kimiawi:',
        keyPoints: [
          'Bahan mudah terbakar (Alkohol/Pelarut Organik) diletakkan di lemari besi bagian bawah, jauh dari sumber panas/saklar listrik.',
          'Bahan asam pekat (Asam Asetat Glasial) dan basa pekat DILARANG disimpan berdampingan.',
          'Suhu ruangan dijaga sejuk (< 25°C) dengan sirkulasi udara ventilasi yang baik.'
        ]
      },
      {
        stepNumber: 3,
        title: 'Penyediaan Lembar Data Keselamatan (MSDS)',
        description: 'Gantungkan map berisi lembar MSDS dalam Bahasa Indonesia di sisi luar lemari B3 agar mudah diakses saat terjadi paparan atau tumpahan darurat.'
      },
      {
        stepNumber: 4,
        title: 'Inspeksi & Pemeliharaan K3 Rutin',
        description: 'Lakukan pemeriksaan mingguan terhadap tanda-tanda kebocoran drum/botol, periksa fungsi pintu lemari tahan api, dan pastikan APAR terdekat tidak kedaluwarsa.'
      }
    ],
    criticalChecklist: [
      'Lembar MSDS tersedia lengkap untuk setiap jenis bahan kimia B3 yang disimpan.',
      'Lemari tahan api (Flammable Cabinet) selalu tertutup rapat dan terkunci bila tidak digunakan.',
      'Simbol bahaya GHS tertempel jelas pada wadah sekunder sediaan kimia.',
      'Spill kit B3 dan alat cuci mata darurat (Eyewash) berfungsi baik dan mudah dijangkau.'
    ],
    relatedForms: ['Daftar Inventaris Master Bahan B3 Farmasi', 'Checklist Inspeksi Lemari B3 Mingguan', 'Laporan Tumpahan Bahan Kimia B3'],
    notes: 'Dilarang keras merokok atau menyalakan api dalam radius 15 meter dari area gudang penyimpanan alkohol dan pelarut B3!'
  },

  // =========================================================================
  // KATEGORI 3: REGULASI KHUSUS, HIGH ALERT & NARKOTIKA (6 SOP BARU)
  // =========================================================================
  {
    id: 'sop-double-check-elektrolit-konsentrat',
    docNumber: 'SOP/FAR-REG/046/2026',
    title: 'SOP Verifikasi Ganda (Double-Check) & Restriksi Elektrolit Konsentrasi Tinggi',
    category: 'khusus',
    categoryLabel: 'Regulasi Khusus & High Alert',
    effectiveDate: '01 Januari 2026',
    revision: '03',
    legalBasis: [
      'Sasaran Keselamatan Pasien Nasional (SKP 3) Kemenkes RI',
      'Joint Commission International (JCI) International Patient Safety Goals (IPSG.3)',
      'Standar Akreditasi Kemenkes (STARKES) Bab PKPO 3.2'
    ],
    purpose: 'Mencegah terjadinya kematian dan henti jantung mendadak akibat kekeliruan fatal penyuntikan elektrolit konsentrat pekat secara bolus tanpa pengenceran yang memadai.',
    scope: 'Seluruh instalasi farmasi, depo bedah, unit rawat intensif (ICU/ICCU/NICU), dan bangsal perawatan.',
    policy: 'Elektrolit pekat (KCl 7.46%, NaCl 3%, Magsulfat 20%/40%, Na-Bikarbonat 8.4%) DILARANG KERAS disimpan di ruang rawat inap umum. Elektrolit pekat hanya boleh disimpan di farmasi dan unit kritis khusus dengan akses terbatas.',
    responsiblePersons: ['Apoteker Penanggung Jawab High Alert', 'Tenaga Teknis Farmasi Dispensing', 'Perawat Pelaksana Unit Kritis'],
    equipmentNeeded: ['Stiker Merah Menyala "HIGH ALERT - ELEKTROLIT KONSENTRAT WAJIB ENCERKAN"', 'Kotak Lemari Khusus Terpisah & Bersekat Tertutup', 'Formulir Verifikasi Double Check Independen'],
    procedureSteps: [
      {
        stepNumber: 1,
        title: 'Restriksi Lokasi Penyimpanan Fisik',
        description: 'Pastikan elektrolit pekat hanya disimpan di Farmasi Sentral dan Depo ICU/IGD. Di bangsal perawatan umum, elektrolit pekat TIDAK BOLEH disediakan sebagai floor stock.'
      },
      {
        stepNumber: 2,
        title: 'Pelabelan Khusus Warna Merah Menyala',
        description: 'Setiap ampul/vial elektrolit pekat ditempeli label peringatan berwarna merah pekat berlatar putih dengan tulisan: "HIGH ALERT - ELEKTROLIT PEKAT - WAJIB DIENCERKAN SEBELUM DIGUNAKAN".'
      },
      {
        stepNumber: 3,
        title: 'Verifikasi Ganda Independen (Independent Double-Check)',
        description: 'Sebelum obat diserahkan ke perawat, dua staf farmasi yang berbeda wajib melakukan verifikasi mandiri terpisah:',
        keyPoints: [
          'Petugas 1 memeriksa nama obat, konsentrasi, jumlah, dan cairan pelarut infus yang diresepkan.',
          'Petugas 2 memeriksa ulang secara mandiri tanpa terpengaruh oleh petugas pertama.',
          'Keduanya membubuhkan tanda tangan paraf pada Formulir Verifikasi Ganda.'
        ]
      },
      {
        stepNumber: 4,
        title: 'Serah Terima Khusus dengan Perawat Bangsal',
        description: 'Saat penyerahan, tekankan kepada perawat bahwa obat ini adalah konsentrat tinggi yang HARUS dilarutkan ke dalam cairan infus (misal NaCl 0.9% atau D5W) dan diberikan via syringe pump / infusion pump, BUKAN disuntikkan langsung via spuit!'
      }
    ],
    criticalChecklist: [
      'Bangsal perawatan umum terbebas 100% dari stok ampul KCl 7.46% dan NaCl 3%.',
      'Setiap ampul/vial telah tertempel stiker peringatan High Alert warna merah.',
      'Verifikasi ganda independen telah ditandatangani oleh 2 orang petugas farmasi berbeda.',
      'Instruksi pengenceran dan kecepatan tetesan tercantum jelas pada etiket obat.'
    ],
    relatedForms: ['Lembar Verifikasi Double Check High Alert', 'Checklist Audit Penyimpanan Elektrolit Pekat Bulanan', 'Label High Alert Elektrolit Merah'],
    notes: 'Penyuntikan bolus langsung Kalium Klorida (KCl) pekat memicu asistol dan henti jantung seketika yang tidak dapat diresusitasi!'
  },
  {
    id: 'sop-pembuangan-sisa-narkotika-ampul',
    docNumber: 'SOP/FAR-REG/047/2026',
    title: 'SOP Rekonsiliasi, Pembuangan Sisa Injeksi Narkotika & Pencatatan Ampul Kosong',
    category: 'khusus',
    categoryLabel: 'Regulasi Khusus & High Alert',
    effectiveDate: '01 Januari 2026',
    revision: '02',
    legalBasis: [
      'Permenkes RI No. 5 Tahun 2023 tentang Narkotika, Psikotropika, dan Prekursor Farmasi',
      'UU No. 35 Tahun 2009 tentang Narkotika',
      'Standar Akreditasi Rumah Sakit Bab PKPO 3.1'
    ],
    purpose: 'Mencegah terjadinya kebocoran, penggelapan, penyalahgunaan, dan diversi sisa cairan obat narkotika injeksi (Morfin, Petidin, Fentanil) yang tidak habis digunakan pada pasien.',
    scope: 'Depo farmasi bedah (OK), rawat intensif (ICU), IGD, dan seluruh bangsal rawat inap.',
    policy: 'Sisa cairan narkotika injeksi wajib dibuang dan disaksikan oleh minimal 2 orang tenaga kesehatan (Apoteker dan Perawat/Dokter) serta dicatat dalam Berita Acara Pembuangan Sisa Narkotika.',
    responsiblePersons: ['Apoteker Penanggung Jawab Narkotika', 'Perawat Anestesi / Perawat Bangsal', 'Dokter Spesialis Anestesiologi'],
    equipmentNeeded: ['Wadah Limbah Khusus Narkotika / Wastafel Pembuangan', 'Buku Register Pembuangan Residu Narkotika', 'Formulir Pengembalian Ampul Kosong Narkotika'],
    procedureSteps: [
      {
        stepNumber: 1,
        title: 'Pengembalian Ampul & Sisa Obat ke Depo Farmasi',
        description: 'Setelah tindakan pembedahan atau penyuntikan selesai, perawat wajib mengembalikan ampul utuh, ampul berisi cairan sisa, atau ampul kosong ke depo farmasi paling lambat akhir shift kerja.'
      },
      {
        stepNumber: 2,
        title: 'Rekonsiliasi Dosis Terpakai vs Dosis Terbuang',
        description: 'Apoteker mencocokkan jumlah ampul yang keluar dengan rekam medis pasien:',
        keyPoints: [
          'Contoh: Pasien diinstruksikan Fentanil 50 mcg IV. Sediaan ampul berisi 100 mcg / 2 mL.',
          'Dosis terpakai: 50 mcg (1 mL). Dosis sisa yang harus dibuang: 50 mcg (1 mL).',
          'Catat volume sisa yang belum terpakai pada lembar rekonsiliasi.'
        ]
      },
      {
        stepNumber: 3,
        title: 'Prosedur Pembuangan Berkelanjutan dengan Saksi Ganda',
        description: 'Pembuangan sisa cairan dilakukan di depan wastafel/wadah limbah kimia disaksikan bersama oleh Apoteker dan Perawat:',
        keyPoints: [
          'Cairan obat sisa disemprotkan habis ke saluran pembuangan air mengalir atau diserap ke dalam kassa absorbent limbah B3.',
          'Kedua saksi menandatangani Berita Acara Pemusnahan Sisa Obat Narkotika.'
        ]
      },
      {
        stepNumber: 4,
        title: 'Penyimpanan Ampul Kosong untuk Pelaporan SIPNAP',
        description: 'Ampul kosong disimpan dalam kotak khusus terhitung dan dikunci hingga periode pelaporan bulanan SIPNAP Kemenkes selesai.'
      }
    ],
    criticalChecklist: [
      'Pembuangan sisa cairan narkotika disaksikan langsung oleh 2 tenaga kesehatan berizin (Apoteker & Perawat/Dokter).',
      'Volume sisa yang dibuang sesuai persis dengan selisih dosis sediaan dikurangi dosis rekam medis.',
      'Seluruh ampul kosong dikembalikan lengkap tanpa ada yang hilang.',
      'Register buku narkotika terisi balance dan akurat pada setiap akhir dinas jaga.'
    ],
    relatedForms: ['Berita Acara Pemusnahan Sisa Narkotika', 'Buku Register Ampul Narkotika Harian', 'Formulir Serah Terima Narkotika Depo Bedah'],
    notes: 'Segala bentuk selisih atau hilangnya ampul narkotika wajib dilaporkan kepada Direktur Rumah Sakit dan Dinas Kesehatan dalam waktu maksimal 24 jam.'
  },
  {
    id: 'sop-sitostatika-oral-rumah',
    docNumber: 'SOP/FAR-REG/048/2026',
    title: 'SOP Penyerahan & Edukasi Keamanan Sitostatika Oral untuk Pasien Rawat Jalan',
    category: 'khusus',
    categoryLabel: 'Regulasi Khusus & High Alert',
    effectiveDate: '01 Januari 2026',
    revision: '01',
    legalBasis: [
      'Pedoman Penanganan Sediaan Sitotoksik Kementerian Kesehatan RI',
      'NIOSH List of Antineoplastic and Other Hazardous Drugs in Healthcare Settings',
      'Standar Pelayanan Kefarmasian di Rumah Sakit Permenkes No. 72 Tahun 2016'
    ],
    purpose: 'Melindungi pasien, keluarga, dan lingkungan dari risiko paparan toksik obat kemoterapi oral (Kapecitabin, Metotreksat, Merkaptopurin, Hidroksiurea) di rumah.',
    scope: 'Seluruh penyerahan obat kemoterapi oral di instalasi farmasi rawat jalan dan onkologi.',
    policy: 'Obat kemoterapi oral dilarang digerus, dibelah, atau dibuka cangkang kapsulnya. Penyerahan wajib disertai kantong plastik khusus berstempel Biohazard warna ungu/kuning dan edukasi APD penanganan di rumah.',
    responsiblePersons: ['Apoteker Konseling Onkologi', 'Tenaga Teknis Farmasi Dispensing Khusus'],
    equipmentNeeded: ['Kantong Ziploc Khusus Bertanda Sitostatika Biohazard (Warna Ungu/Kuning)', 'Sarung Tangan Nitril Sekali Pakai untuk Edukasi', 'Lembar Panduan Pasien Kemoterapi Oral', 'Label Peringatan Bahaya Sitotoksik'],
    procedureSteps: [
      {
        stepNumber: 1,
        title: 'Penyiapan Obat Tanpa Kontak Tangan Langsung',
        description: 'Petugas farmasi menyiapkan obat menggunakan sarung tangan nitril dan spatula bersih. Dilarang menyentuh tablet kemoterapi oral dengan tangan telanjang.'
      },
      {
        stepNumber: 2,
        title: 'Pengemasan Sekunder Berlabel Biohazard',
        description: 'Obat dikemas dalam kantong ziploc ganda tebal bertanda simbol bahaya sitotoksik ungu dengan peringatan: "OBAT KEMOTERAPI SITOTOKSIK - TANGANI DENGAN HATI-HATI".'
      },
      {
        stepNumber: 3,
        title: 'Konseling Khusus Cara Minum & Larangan Menghancurkan Tablet',
        description: 'Apoteker menegaskan kepada pasien dan keluarga:',
        keyPoints: [
          'Tablet/kapsul HARUS DITELAN UTUH dengan air putih. DILARANG MEMBELAH, MENGGERUS, ATAU MENGUNYAH tablet karena serbuk obat dapat terhirup dan merusak mukosa pernapasan.',
          'Jika pasien kesulitan menelan, segera konsultasikan ke DPJP untuk alternatif regimen, bukan digerus di rumah.'
        ]
      },
      {
        stepNumber: 4,
        title: 'Edukasi Perlindungan Anggota Keluarga & Penanganan Muntahan',
        description: 'Jelaskan bahwa pendamping yang membantu mengambilkan obat sebaiknya menggunakan sarung tangan atau menuangkan obat langsung dari botol ke cangkir obat. Bila pasien muntah pasca minum obat, muntahan ditangani menggunakan sarung tangan dan dibuang ke kloset disiram dua kali.'
      }
    ],
    criticalChecklist: [
      'Obat sitostatika oral terbungkus dalam wadah sekunder berlogo biohazard ungu.',
      'Pasien dan keluarga memahami larangan keras menggerus atau membelah tablet kemoterapi.',
      'Ibu hamil atau menyusui di rumah pasien dilarang menyentuh obat kemoterapi oral.',
      'Pasien memahami tempat penyimpanan aman terkunci yang jauh dari jangkauan anak-anak.'
    ],
    relatedForms: ['Formulir Edukasi Pasien Sitostatika Oral', 'Checklist Penyerahan Obat Kemoterapi', 'Leaflet Panduan Keamanan Kemoterapi di Rumah'],
    notes: 'Keluarga pasien diedukasi untuk mencuci pakaian pasien yang terkena cairan tubuh/muntahan secara terpisah dari pakaian anggota keluarga lainnya.'
  },
  {
    id: 'sop-obat-uji-klinis-investigational',
    docNumber: 'SOP/FAR-REG/049/2026',
    title: 'SOP Pengelolaan Produk Uji Klinis (Investigational Medicinal Products)',
    category: 'khusus',
    categoryLabel: 'Regulasi Khusus & High Alert',
    effectiveDate: '01 Januari 2026',
    revision: '01',
    legalBasis: [
      'Peraturan Kepala BPOM RI tentang Pedoman Cara Uji Klinik yang Baik (CUKB / Good Clinical Practice)',
      'Deklarasi Helsinki Asosiasi Medis Dunia (WMA)',
      'Standar Akreditasi Rumah Sakit Pendidikan Kemenkes RI'
    ],
    purpose: 'Menjamin akuntabilitas penerimaan, penyimpanan terkontrol, penyiapan blinded/unblinded, penyerahan, dan pemusnahan obat penelitian uji klinis sesuai protokol etik riset internasional.',
    scope: 'Pusat penelitian uji klinis, laboratorium riset farmasi, dan instalasi farmasi rumah sakit rujukan.',
    policy: 'Produk uji klinis disimpan di lemari terkunci terpisah berakses khusus yang hanya boleh dibuka oleh Apoteker Peneliti (Clinical Trial Pharmacist).',
    responsiblePersons: ['Apoteker Penanggung Jawab Uji Klinis (Trial Pharmacist)', 'Peneliti Utama (Principal Investigator)', 'Clinical Research Coordinator (CRC)'],
    equipmentNeeded: ['Lemari Penyimpanan Khusus Terkunci dengan Logbook Akses', 'Data Logger Suhu Digital Berkalibrasi', 'Formulir Drug Accountability Log (DAL)', 'Dokumen Randomization Code & Unblinding Kit'],
    procedureSteps: [
      {
        stepNumber: 1,
        title: 'Penerimaan & Rekonsiliasi Logistik Riset',
        description: 'Apoteker riset memeriksa kiriman obat uji klinis dari sponsor riset: cek keutuhan tamper-evident seal, periksa pembacaan suhu temperature monitor selama perjalanan, dan tandatangani Formulir Penerimaan Obat Uji.'
      },
      {
        stepNumber: 2,
        title: 'Pencatatan pada Drug Accountability Log (DAL)',
        description: 'Catat setiap nomor kit, nomor lot, tanggal kedaluwarsa, dan jumlah sediaan ke dalam logbook akuntabilitas resmi DAL yang diaudit oleh Badan Pengawas Obat (BPOM/Sponsor).'
      },
      {
        stepNumber: 3,
        title: 'Penyimpanan Terkunci & Pemantauan Suhu Valid',
        description: 'Simpan obat pada suhu yang disyaratkan protokol (misal 2-8°C atau 15-25°C). Unduh data logger suhu tiap minggu untuk membuktikan tidak terjadi deviasi suhu penyimpanan.'
      },
      {
        stepNumber: 4,
        title: 'Dispensing Berdasarkan Lembar Randomisasi Subjek',
        description: 'Saat subjek uji klinis datang, Apoteker memverifikasi formulir peresepan riset dari Principal Investigator, mencocokkan nomor kode subjek, dan menyerahkan nomor kit yang tepat sesuai alur randomisasi.'
      }
    ],
    criticalChecklist: [
      'Obat uji klinis disimpan terpisah dari obat pelayanan rutin rumah sakit.',
      'Buku Drug Accountability Log (DAL) tercatat mutasi masuk dan keluarnya secara real-time.',
      'Amplop darurat pembuka kode rahasia (Emergency Unblinding Envelope) disimpan aman terkunci.',
      'Sisa obat atau kemasan kosong dari subjek riset dikembalikan dan disimpan untuk proses rekonsiliasi akhir sponsor.'
    ],
    relatedForms: ['Drug Accountability Record Form (DARF)', 'Formulir Preskripsi Uji Klinis', 'Sertifikat Kalibrasi Suhu Ruang Riset'],
    notes: 'Kerahasiaan kode uji buta ganda (double-blind) hanya boleh dibuka dalam keadaan darurat medis yang mengancam nyawa subjek atas persetujuan tertulis Peneliti Utama.'
  },
  {
    id: 'sop-special-access-scheme-sas',
    docNumber: 'SOP/FAR-REG/050/2026',
    title: 'SOP Pengadaan & Pelayanan Obat Jalur Khusus (Special Access Scheme / SAS)',
    category: 'khusus',
    categoryLabel: 'Regulasi Khusus & High Alert',
    effectiveDate: '01 Januari 2026',
    revision: '01',
    legalBasis: [
      'Peraturan Menteri Kesehatan RI tentang Pemasukan Obat Melalui Jalur Khusus (Special Access Scheme)',
      'Peraturan BPOM tentang Pemasukan Obat Tanpa Izin Edar untuk Kebutuhan Mendesak Pasien',
      'UU No. 17 Tahun 2023 tentang Kesehatan'
    ],
    purpose: 'Mengatur alur birokrasi permohonan legalitas pemasukan obat langka (orphan drug) atau obat yang belum memiliki izin edar di Indonesia demi menyelamatkan nyawa pasien kritis yang tidak memiliki alternatif terapi lain.',
    scope: 'Instalasi farmasi rumah sakit rujukan nasional dan komite medik.',
    policy: 'Pengadaan obat SAS hanya dapat diproses atas rekomendasi tertulis dokter spesialis konsultan, persetujuan komite medik, izin khusus Direktur Jenderal Kefarmasian Kemenkes, dan rekomendasi impor resmi BPOM.',
    responsiblePersons: ['Kepala Instalasi Farmasi', 'Ketua Komite Medik', 'Dokter Spesialis Konsultan Pengusul', 'Direktur Utama Rumah Sakit'],
    equipmentNeeded: ['Berkas Rekam Medis Lengkap Pasien', 'Surat Permohonan SAS kepada Kemenkes RI', 'Informed Consent Khusus Pasien & Keluarga', 'Formulir Monitoring Khusus SAS'],
    procedureSteps: [
      {
        stepNumber: 1,
        title: 'Pengajuan Justifikasi Klinis oleh Dokter Spesialis',
        description: 'Dokter pengusul menyusun telaah klinis komprehensif bahwa pasien mengalami penyakit kritis, seluruh obat lini standar telah gagal, dan hanya obat SAS tersebut yang terbukti efektif berdasarkan literatur medis terkini.'
      },
      {
        stepNumber: 2,
        title: 'Persetujuan Komite Medik & Informed Consent Pasien',
        description: 'Komite Medik menyetujui usulan. Pasien dan keluarga menandatangani lembar Informed Consent khusus yang menyatakan memahami bahwa obat tersebut belum memiliki NIE lokal di Indonesia.'
      },
      {
        stepNumber: 3,
        title: 'Permohonan Izin Impor Jalur Khusus Kemenkes & BPOM',
        description: 'Direktur Rumah Sakit menerbitkan surat resmi permohonan pemasukan obat melalui Special Access Scheme kepada Dirjen Kefarmasian dan Alat Kesehatan Kemenkes RI serta BPOM.'
      },
      {
        stepNumber: 4,
        title: 'Penerimaan, Penyimpanan Terisolasi & Monitoring Ketat',
        description: 'Setelah izin impor terbit dan obat tiba via PBF importir berizin, Apoteker memverifikasi batch, menyimpan secara khusus, dan melakukan pemantauan ketat efikasi serta efek samping pasca pemberian.'
      }
    ],
    criticalChecklist: [
      'Surat Persetujuan Pemasukan Obat Jalur Khusus resmi dari Kemenkes RI telah terbit.',
      'Informed consent khusus ditandatangani oleh pasien/wali sah bermaterai.',
      'Obat hanya digunakan khusus untuk pasien bersangkutan (named-patient basis), dilarang dialihkan ke pasien lain.',
      'Laporan hasil penggunaan klinis dan efek samping disampaikan ke Kemenkes dan BPOM.'
    ],
    relatedForms: ['Surat Rekomendasi Komite Medik untuk Obat SAS', 'Informed Consent Khusus Jalur Khusus', 'Laporan Monitoring Klinis Penggunaan Obat SAS'],
    notes: 'Pemasukan obat jalur SAS murni berorientasi pada kemanusiaan penyelamatan jiwa dan tidak boleh dijadikan sarana komersialisasi obat ilegal.'
  },
  {
    id: 'sop-copy-resep-narkotika',
    docNumber: 'SOP/FAR-REG/051/2026',
    title: 'SOP Pengelolaan Salinan Resep (Apograph) Narkotika & Larangan Iterasi',
    category: 'khusus',
    categoryLabel: 'Regulasi Khusus & High Alert',
    effectiveDate: '01 Januari 2026',
    revision: '02',
    legalBasis: [
      'Permenkes RI No. 5 Tahun 2023 tentang Narkotika, Psikotropika, dan Prekursor Farmasi',
      'UU No. 35 Tahun 2009 tentang Narkotika',
      'Permenkes No. 73 Tahun 2016 tentang Standar Pelayanan Kefarmasian di Apotek'
    ],
    purpose: 'Menegakkan kepatuhan hukum bahwa resep narkotika tidak boleh diulang tanpa resep baru dokter (larangan iterasi) dan salinan resep narkotika hanya sah dilayani di apotek penyimpan resep asli.',
    scope: 'Pelayanan resep narkotika di apotek dan instalasi farmasi rawat jalan.',
    policy: 'Apotek dilarang melayani salinan resep (copy resep) narkotika yang diterbitkan oleh apotek lain. Resep narkotika yang bertanda "iter" (diulang) tidak boleh dilayani pengulangannya.',
    responsiblePersons: ['Apoteker Penanggung Jawab Apotek (APA)', 'Apoteker Pendamping'],
    equipmentNeeded: ['Blanko Salinan Resep Resmi Apotek', 'Stempel Pengesahan Apotek & Tanda Tangan Apoteker', 'Buku Register Khusus Narkotika'],
    procedureSteps: [
      {
        stepNumber: 1,
        title: 'Pemeriksaan Tanda Iterasi pada Resep Asli',
        description: 'Apoteker memeriksa apakah resep dokter bertuliskan tanda "Iter" (pengulangan):',
        keyPoints: [
          'Jika dokter menuliskan tanda iterasi pada resep narkotika (misal: "Iter 2x"), Apoteker WAJIB mengabaikan tanda iterasi tersebut.',
          'Obat hanya boleh dilayani sebanyak jumlah yang tertera pada resep pertama kali. Pasien diedukasi untuk kontrol kembali ke dokter untuk resep baru.'
        ]
      },
      {
        stepNumber: 2,
        title: 'Pembuatan Salinan Resep Pengambilan Sebagian (Partus)',
        description: 'Bila pasien hanya mampu menebus sebagian obat narkotika karena keterbatasan biaya:',
        keyPoints: [
          'Apoteker membuatkan Salinan Resep (Copy Resep) yang mencantumkan tanda "nedet" (ne detur / belum diserahkan) pada sisa obat.',
          'Bubuhi tulisan jelas: "SALINAN RESEP INI HANYA DAPAT DITEBUS DI APOTEK INI (PENYIMPAN RESEP ASLI)".'
        ]
      },
      {
        stepNumber: 3,
        title: 'Penolakan Copy Resep Narkotika Luar',
        description: 'Jika ada pasien datang membawa copy resep narkotika yang stempel asalnya dari apotek atau rumah sakit lain, Apoteker WAJIB MENOLAK secara santun dan mengarahkan pasien untuk menebus di apotek tempat resep asli disimpan.'
      },
      {
        stepNumber: 4,
        title: 'Penyimpanan & Pengarsipan Resep Asli',
        description: 'Resep asli narkotika diberi garis bawah merah, nomor urut khusus narkotika, dipisahkan dari resep non-narkotika, dan disimpan terkunci selama minimal 3 hingga 5 tahun.'
      }
    ],
    criticalChecklist: [
      'Resep narkotika dengan tanda iterasi tidak dilayani pengulangannya.',
      'Copy resep narkotika dari apotek luar ditolak secara tegas dan santun.',
      'Copy resep internal hanya memuat sisa obat yang belum diambil (nedet) dari resep asli yang tersimpan di apotek.',
      'Salinan resep ditandatangani basah oleh Apoteker yang ber-SIPA (bukan oleh staf teknis).'
    ],
    relatedForms: ['Blanko Salinan Resep Apotek', 'Buku Register Resep Narkotika', 'Leaflet Edukasi Regulasi Obat Narkotika'],
    notes: 'Pelanggaran terhadap pelayanan copy resep narkotika luar merupakan pelanggaran pidana perundang-undangan narkotika yang berisiko pencabutan izin sarana apotek.'
  },

  // =========================================================================
  // KATEGORI 4: KESELAMATAN PASIEN, K3 & MUTU (6 SOP BARU)
  // =========================================================================
  {
    id: 'sop-penanganan-anafilaksis-farmasi',
    docNumber: 'SOP/FAR-SAF/052/2026',
    title: 'SOP Penanganan Reaksi Alergi Anafilaksis Akut di Lingkungan Ruang Farmasi',
    category: 'safety',
    categoryLabel: 'Keselamatan Pasien, K3 & Mutu',
    effectiveDate: '01 Januari 2026',
    revision: '02',
    legalBasis: [
      'Keputusan Menteri Kesehatan RI tentang Panduan Praktik Klinis Penanganan Syok Anafilaksis',
      'Standar Akreditasi Kemenkes (STARKES) Bab Pelayanan dan Asuhan Pasien (PAP 3)'
    ],
    purpose: 'Memberikan panduan tindakan darurat penyelamatan jiwa saat pasien mengalami syok anafilaksis akut pasca mengonsumsi obat di ruang penyerahan obat atau ruang konseling farmasi.',
    scope: 'Seluruh area pelayanan farmasi rawat jalan, ruang tunggu apotek, dan ruang konseling.',
    policy: 'Kit darurat anafilaksis (berisi Epinefrin 1:1000) wajib tersedia di ruang pelayanan farmasi dan seluruh staf farmasi terlatih mengenali gejala awal syok anafilaksis serta aktivasi sistem Code Blue.',
    responsiblePersons: ['Apoteker Jaga Pelayanan', 'Dokter IGD / Tim Reaksi Cepat (Code Blue)', 'Perawat Kedaruratan'],
    equipmentNeeded: ['Emergency Anaphylaxis Kit Farmasi (Ampul Epinefrin 1:1000, Spuit 1 mL/3 mL, Torniket, Kassa Alkohol)', 'Tabung Oksigen Portabel & Nasal Kanul', 'Tensimeter & Oksimeter Nadi Digital', 'Tombol Darurat / Nomor Telepon Panggilan Code Blue'],
    procedureSteps: [
      {
        stepNumber: 1,
        title: 'Pengenalan Tanda Syok Anafilaksis Cepat',
        description: 'Kenali tanda bahaya muncul dalam hitungan menit pasca minum obat:',
        keyPoints: [
          'Saluran Napas: Sesak napas akut, mengi (wheezing), suara serak, pembengkakan lidah dan bibir (angioedema).',
          'Sirkulasi: Tekanan darah anjlok drastis (hipotensi), denyut nadi cepat dan lemah, pingsan/hilang kesadaran.',
          'Kulit: Gatal kemerahan hebat di seluruh tubuh (urtikaria), wajah sembab kemerahan.'
        ]
      },
      {
        stepNumber: 2,
        title: 'Hentikan Pajanan Obat & Posisikan Pasien',
        description: 'Hentikan pemberian obat seketika. Baringkan pasien telentang dengan kedua kaki ditinggikan (posisi Trendelenburg) untuk memaksimalkan aliran darah ke otak. Jangan biarkan pasien berdiri atau duduk tiba-tiba.'
      },
      {
        stepNumber: 3,
        title: 'Injeksi Epinefrin / Adrenalin 1:1000 Intramuskular Segera',
        description: 'Epinefrin adalah obat penyelamat nomor satu tanpa penundaan:',
        keyPoints: [
          'Dosis Dewasa: Suntikkan 0.3 - 0.5 mL Epinefrin 1:1000 secara INTRAMUSKULAR (IM) pada paha bagian luar (vastus lateralis).',
          'Dosis Anak: 0.01 mL/kgBB (maksimal 0.3 mL).',
          'Penyuntikan dapat diulang tiap 5-15 menit jika belum ada perbaikan tensi dan pernapasan.'
        ]
      },
      {
        stepNumber: 4,
        title: 'Aktivasi Code Blue & Evakuasi ke IGD',
        description: 'Secara paralel teriakkan panggilan "CODE BLUE", pasang oksigen sungkup 6-8 L/menit, dan evakuasi pasien dengan brankar darurat menuju ruang resusitasi IGD untuk penanganan lanjutan (infus cairan kristaloid, Deksametason, Difenhidramin).'
      }
    ],
    criticalChecklist: [
      'Injeksi Epinefrin 1:1000 diberikan secara INTRAMUSKULAR di paha luar, BUKAN subkutan atau bolus IV!',
      'Pasien dibaringkan telentang dengan kaki terangkat (kecuali sesak napas berat diatur setengah duduk).',
      'Tim Code Blue / IGD segera dihubungi pada detik pertama gejala anafilaksis teridentifikasi.',
      'Kit Anafilaksis diperiksa tanggal ED-nya tiap awal bulan oleh Apoteker penanggung jawab.'
    ],
    relatedForms: ['Formulir Laporan Kejadian Nyaris Fatal (Sentinel)', 'Checklist Isi Kotak Anafilaksis Kit Farmasi', 'Formulir Kuning MESO BPOM'],
    notes: 'Antihistamin dan Kortikosteroid adalah obat lini kedua; JANGAN PERNAH menunda suntikan Epinefrin demi menunggu obat antihistamin oral atau deksametason!'
  },
  {
    id: 'sop-insiden-keselamatan-pasien-rca',
    docNumber: 'SOP/FAR-SAF/053/2026',
    title: 'SOP Manajemen Insiden Keselamatan Pasien, Investigasi Sederhana & Root Cause Analysis (RCA)',
    category: 'safety',
    categoryLabel: 'Keselamatan Pasien, K3 & Mutu',
    effectiveDate: '01 Januari 2026',
    revision: '03',
    legalBasis: [
      'Permenkes RI No. 11 Tahun 2017 tentang Keselamatan Pasien',
      'Standar Akreditasi Kemenkes (STARKES) Bab Peningkatan Mutu dan Keselamatan Pasien (PMKP 9 & 10)'
    ],
    purpose: 'Menciptakan budaya keselamatan pasien tanpa saling menyalahkan (non-punitive culture) melalui identifikasi, pelaporan, dan investigasi akar penyebab insiden farmasi guna mencegah kejadian serupa terulang.',
    scope: 'Seluruh insiden medikasi di lingkungan farmasi: Kejadian Potensial Cedera (KPC), Kejadian Nyaris Cedera (KNC), Kejadian Tidak Cedera (KTC), Kejadian Tidak Diharapkan (KTD), dan Kejadian Sentinel.',
    policy: 'Setiap staf farmasi yang menemukan atau terlibat insiden keselamatan pasien WAJIB melaporkan dalam waktu maksimal 2x24 jam kepada Komite Mutu & Keselamatan Pasien RS.',
    responsiblePersons: ['Apoteker Penanggung Jawab Keselamatan Pasien', 'Ketua Komite Mutu & Keselamatan Pasien (KMKP)', 'Seluruh Staf Farmasi'],
    equipmentNeeded: ['Formulir Pelaporan Insiden Keselamatan Pasien (IKP)', 'Matriks Grading Risiko 5x5', 'Diagram Tulang Ikan (Fishbone Cause-Effect Diagram)', 'Lembar Kerja Analisis 5-Why'],
    procedureSteps: [
      {
        stepNumber: 1,
        title: 'Penanganan Awal Pasien & Pengamanan Bukti',
        description: 'Bila insiden melibatkan pasien (KTC/KTD), lakukan tindakan medis penyelamatan pasien terlebih dahulu. Amankan sisa obat, lembar resep, dan etiket bermasalah sebagai bukti investigasi.'
      },
      {
        stepNumber: 2,
        title: 'Pengisian Formulir Laporan Insiden Internal (Maksimal 2x24 Jam)',
        description: 'Staf penemu insiden mengisi Formulir Laporan IKP: kronologis kejadian, jenis insiden (KNC/KTC/KTD/Sentinel), nama obat, dan faktor yang berkontribusi.'
      },
      {
        stepNumber: 3,
        title: 'Grading Risiko Matriks 5x5',
        description: 'Apoteker Penanggung Jawab menentukan derajat keparahan insiden (Dampak x Probabilitas):',
        keyPoints: [
          'Pita Biru / Hijau: Risiko Rendah / Sedang -> Lakukan Investigasi Sederhana oleh kepala unit farmasi dalam 1-2 minggu.',
          'Pita Kuning / Merah: Risiko Tinggi / Ekstrem (Sentinel/KTD Berat) -> Komite Mutu membentuk Tim RCA komprehensif maksimal 45 hari.'
        ]
      },
      {
        stepNumber: 4,
        title: 'Penyusunan Rencana Aksi Perbaikan (Corrective Action Plan)',
        description: 'Temukan akar penyebab menggunakan Diagram Fishbone (faktor manusia, sistem komputer, lingkungan, beban kerja). Terapkan sistem proteksi sistemik (mistake-proofing) dan sosialisasikan dalam briefing farmasi.'
      }
    ],
    criticalChecklist: [
      'Laporan insiden diserahkan dalam kurun waktu 2x24 jam pasca kejadian terdeteksi.',
      'Investigasi berfokus pada kelemahan sistem (System Failure), BUKAN menyalahkan individu staf (No Blame Culture).',
      'Matriks grading risiko telah dinilai dengan benar sesuai tabel dampak keselamatan pasien.',
      'Rencana aksi perbaikan dievaluasi efektivitasnya setelah 30 hari implementasi.'
    ],
    relatedForms: ['Formulir Laporan Insiden Keselamatan Pasien (IKP)', 'Tabel Matriks Grading Risiko Klinis', 'Lembar Kerja Investigasi Fishbone & 5-Why'],
    notes: 'KNC (near miss) yang dicegah sebelum obat sampai ke tangan pasien adalah sumber pembelajaran sistem paling berharga untuk mencegah terjadinya KTD fatal.'
  },
  {
    id: 'sop-tertusuk-jarum-needle-stick',
    docNumber: 'SOP/FAR-SAF/054/2026',
    title: 'SOP Penanganan Tertusuk Jarum & Benda Tajam Farmasi (Needle Stick Injury)',
    category: 'safety',
    categoryLabel: 'Keselamatan Pasien, K3 & Mutu',
    effectiveDate: '01 Januari 2026',
    revision: '01',
    legalBasis: [
      'Permenkes RI No. 27 Tahun 2017 tentang Pedoman Pencegahan dan Pengendalian Infeksi (PPI)',
      'Permenkes No. 66 Tahun 2016 tentang Keselamatan dan Kesehatan Kerja Rumah Sakit (K3RS)',
      'Pedoman Profilaksis Pasca Pajanan (PPP) HIV Kemenkes RI'
    ],
    purpose: 'Memberikan tata laksana pertolongan pertama dan profilaksis medis darurat saat tenaga farmasi mengalami luka tusuk jarum spuit atau pecahan ampul kaca guna mencegah penularan virus HIV, Hepatitis B (HBV), dan Hepatitis C (HCV).',
    scope: 'Ruang peracikan steril, cleanroom pencampuran obat suntik, dan depo farmasi.',
    policy: 'Setiap insiden tertusuk jarum suntik bekas pakai wajib segera dicuci air mengalir, dilaporkan dalam 1 jam pertama, dan diberikan Profilaksis Pasca Pajanan (PPP) maksimal dalam kurun waktu 4 jam pertama (golden period).',
    responsiblePersons: ['Petugas Farmasi yang Terpajan', 'Apoteker Penanggung Jawab K3', 'Dokter Tim Pencegahan & Pengendalian Infeksi (PPI) / K3RS'],
    equipmentNeeded: ['Sabun Antiseptik Cuci Tangan & Air Mengalir', 'Larutan Povidone Iodine / Alkohol 70%', 'Kit Tes Cepat Serologi HIV / HBsAg / Anti-HCV', 'Paket Obat Profilaksis Pasca Pajanan (ARV PPP TLD)'],
    procedureSteps: [
      {
        stepNumber: 1,
        title: 'Pertolongan Pertama pada Lokasi Luka (Menit 0 - 5)',
        description: 'Tindakan darurat seketika pasca tertusuk:',
        keyPoints: [
          'SEGERA CUCI LUKA di bawah air mengalir menggunakan sabun antiseptik selama minimal 3-5 menit.',
          'BIARKAN DARAH KELUAR secara alami. JANGAN MEMENCET ATAU MENGISAP area luka tusukan karena dapat menyebabkan trauma mikro jaringan yang mempermudah masuknya virus.',
          'Bubuhi cairan antiseptik (Povidone Iodine) dan tutup dengan plester steril kedap air.'
        ]
      },
      {
        stepNumber: 2,
        title: 'Pelaporan Kedaruratan ke Tim PPI / K3RS (Dalam 1 Jam)',
        description: 'Petugas segera melapor kepada atasan farmasi dan membawa diri ke IGD/Tim PPI untuk pemeriksaan status pajanan darah sumber.'
      },
      {
        stepNumber: 3,
        title: 'Pemeriksaan Serologi Cepat Pasien Sumber & Staf Terpajan',
        description: 'Lakukan tes cepat darah pasien sumber (jika jarum bekas pasien) dan darah staf terpajan terhadap HIV, HBsAg, dan Anti-HCV.'
      },
      {
        stepNumber: 4,
        title: 'Inisiasi Profilaksis Pasca Pajanan (PPP)',
        description: 'Pemberian profilaksis pencegahan infeksi:',
        keyPoints: [
          'Pajanan HIV: Mulai konsumsi obat ARV PPP (Tenofovir + Lamivudin + Dolutegravir) paling lambat dalam waktu 4 jam (maksimal 72 jam) selama 28 hari penuh.',
          'Pajanan Hepatitis B: Jika staf belum memiliki antibodi (Anti-HBs negatif), suntikkan Imunoglobulin Hepatitis B (HBIg) dan mulai vaksinasi Hepatitis B dosis pertama.',
          'Lakukan pemeriksaan serologi ulang evaluasi pada bulan ke-1, ke-3, dan ke-6.'
        ]
      }
    ],
    criticalChecklist: [
      'Luka tusukan dicuci di bawah air mengalir tanpa dipencet/ditekan paksa.',
      'Inisiasi Profilaksis Pasca Pajanan (PPP) HIV dimulai secepat mungkin dalam waktu < 4 jam pertama.',
      'Formulir investigasi pajanan benda tajam PPI/K3RS diisi lengkap.',
      'Jadwal evaluasi serologi lanjutan 6 bulan pasca pajanan tercatat rapi.'
    ],
    relatedForms: ['Formulir Investigasi Kecelakaan Tertusuk Jarum PPI', 'Lembar Rujukan Pemeriksaan Serologi Pajanan', 'Kartu Kontrol Monitoring Minum Obat ARV PPP'],
    notes: 'Dilarang keras melakukan penutupan kembali jarum spuit menggunakan dua tangan (re-capping manual). Gunakan teknik satu tangan (one-hand scoop method) atau langsung buang ke safety box!'
  },
  {
    id: 'sop-pembuangan-limbah-b3-medis',
    docNumber: 'SOP/FAR-SAF/055/2026',
    title: 'SOP Pemilahan & Pembuangan Limbah Medis B3, Tajam & Sediaan Sitotoksik',
    category: 'safety',
    categoryLabel: 'Keselamatan Pasien, K3 & Mutu',
    effectiveDate: '01 Januari 2026',
    revision: '02',
    legalBasis: [
      'Peraturan Menteri LHK No. P.56/Menlhk-Setjen/2015 tentang Pengelolaan Limbah B3 dari Fasyankes',
      'Permenkes No. 7 Tahun 2019 tentang Kesehatan Lingkungan Rumah Sakit',
      'Standar Akreditasi Kemenkes Bab Manajemen Fasilitas dan Keselamatan (MFK 5.1)'
    ],
    purpose: 'Mencegah terjadinya penularan penyakit infeksius, cedera tusukan benda tajam, dan pencemaran lingkungan akibat pembuangan limbah farmasi yang tidak sesuai regulasi lingkungan hidup.',
    scope: 'Seluruh unit penghasil limbah di instalasi farmasi, depo peracikan, dan cleanroom.',
    policy: 'Limbah wajib dipilah langsung pada sumbernya menggunakan wadah berstandar kode warna internasional dan simbol limbah B3 resmi.',
    responsiblePersons: ['Apoteker Penanggung Jawab Kesehatan Lingkungan', 'Sanitarian / Petugas Pengolah Limbah RS', 'Petugas Kebersihan Farmasi (Cleaning Service)'],
    equipmentNeeded: ['Tempat Sampah Medis Berpedal Injak', 'Kantong Plastik Kuning (Infeksius)', 'Kantong Plastik Ungu (Sitotoksik Kemoterapi)', 'Safety Box Khusus Jarum / Benda Tajam Tahan Bocor', 'Kantong Plastik Hitam (Domestik Non-Medis)'],
    procedureSteps: [
      {
        stepNumber: 1,
        title: 'Pemilahan Limbah Sesuai Kode Warna Standar',
        description: 'Buang limbah seketika ke dalam kantong warna yang sesuai:',
        keyPoints: [
          'Kantong KUNING: Limbah medis padat infeksius (kassa terkontaminasi darah, sarung tangan steril, sisa perban, spuit tanpa jarum).',
          'Kantong UNGU: Limbah sisa kemoterapi / sitostatika (vial kemoterapi kosong, spuit sisa sitostatika, sarung tangan peracik kemoterapi).',
          'Kantong HITAM: Limbah domestik non-medis (kardus kemasan sekunder, kertas resep usang, bungkus makanan).',
          'Safety Box KUNING Tahan Tusuk: Jarum suntik bekas (needle), pecahan ampul kaca, bisturi pisau bedah.'
        ]
      },
      {
        stepNumber: 2,
        title: 'Aturan Pengisian Safety Box Benda Tajam',
        description: 'Safety box jarum diisi maksimal 3/4 bagian (batas garis aman 75%). Dilarang menekan jarum ke dalam safety box dengan tangan dan dilarang memindahkan isi jarum ke wadah lain.'
      },
      {
        stepNumber: 3,
        title: 'Pengikatan & Pelabelan Limbah B3',
        description: 'Bila kantong limbah telah terisi 3/4 penuh, ikat rapat menggunakan simpul leher angsa (swan neck tie). Tempelkan label limbah B3 memuat: Tanggal pengikatan, nama unit kerja farmasi, dan berat limbah.'
      },
      {
        stepNumber: 4,
        title: 'Penyimpanan di TPS B3 & Pemusnahan Incinerator Berizin',
        description: 'Pindahkan limbah ke Tempat Penampungan Sementara (TPS) Limbah B3 berizin. Limbah infeksius/patologis dimusnahkan maksimal dalam 2x24 jam (suhu ruang) atau bekerja sama dengan transporter pihak ketiga berizin KLHK.'
      }
    ],
    criticalChecklist: [
      'Pemilahan limbah dilakukan langsung pada sumbernya tanpa menyortir ulang.',
      'Safety box benda tajam tidak terisi melebihi batas 3/4 penuh.',
      'Limbah sitostatika kemoterapi terpisah 100% di dalam kantong plastik warna ungu.',
      'Manifest limbah B3 elektronik (FESTRONIK KLHK) tercatat rapi saat serah terima transporter.'
    ],
    relatedForms: ['Logbook Neraca Limbah B3 Farmasi', 'Manifest Elektronik Limbah B3 (Festronik)', 'Checklist Pengangkutan Limbah Medis'],
    notes: 'Pelanggaran pembuangan limbah sitostatika kemoterapi ke saluran limbah domestik dapat dikenakan sanksi pidana lingkungan hidup UU No. 32 Tahun 2009.'
  },
  {
    id: 'sop-pemeliharaan-bsc-laf',
    docNumber: 'SOP/FAR-SAF/056/2026',
    title: 'SOP Pemeliharaan, Dekontaminasi & Uji Sertifikasi Biological Safety Cabinet (BSC) & LAF',
    category: 'safety',
    categoryLabel: 'Keselamatan Pasien, K3 & Mutu',
    effectiveDate: '01 Januari 2026',
    revision: '02',
    legalBasis: [
      'Pedoman Pencampuran Obat Suntik & Sitostatika Kemenkes RI',
      'United States Pharmacopeia (USP <797> Pharmaceutical Compounding - Sterile Preparations)',
      'USP <800> Hazardous Drugs - Handling in Healthcare Settings'
    ],
    purpose: 'Menjamin ruang kerja peracikan steril Laminar Air Flow (LAF) dan Biological Safety Cabinet (BSC Kelas II Tipe B2) selalu memenuhi klasifikasi kebersihan partikel udara ISO Kelas 5 untuk menjamin sterilitas obat suntik dan keselamatan petugas.',
    scope: 'Cleanroom farmasi, ruang pencampuran IV admixture, dan ruang rekonstitusi sitostatika.',
    policy: 'Kabin LAF dan BSC wajib didekontaminasi dengan alkohol 70% steril sebelum dan sesudah peracikan, dinyalakan blower minimal 15-30 menit sebelum digunakan, serta disertifikasi uji partikel filter HEPA minimal 6 bulan sekali.',
    responsiblePersons: ['Apoteker Penanggung Jawab Dispensing Steril', 'Tenaga Vokasi Farmasi Peracik Steril', 'Petugas Pengujian Sertifikasi Cleanroom'],
    equipmentNeeded: ['Alkohol 70% Steril (Sterile Isopropyl Alcohol / IPA)', 'Kain Pembersih Bebas Serat (Lint-free Sterile Wipes)', 'Lampu Ultraviolet (UV)', 'Alat Uji Partikel Udara (Particle Counter) Terkalibrasi'],
    procedureSteps: [
      {
        stepNumber: 1,
        title: 'Prosedur Pra-Operasional (Start-Up)',
        description: 'Matikan lampu UV. Nyalakan blower LAF / BSC minimal 15 hingga 30 menit sebelum aktivitas dimulai untuk membilas partikel udara statis (purge cycle). Catat pembacaan tekanan diferensial magnehelic gauge (rentang normal 0.3 - 0.7 in. w.g.).'
      },
      {
        stepNumber: 2,
        title: 'Teknik Dekontaminasi Meja Kerja Steril',
        description: 'Kenakan APD steril lengkap. Semprotkan alkohol 70% steril pada kain bebas serat (lint-free wipe) dan seka dengan gerakan satu arah searah aliran udara:',
        keyPoints: [
          'Seka dinding belakang dari atas ke bawah.',
          'Seka dinding samping dari atas ke bawah.',
          'Seka permukaan meja kerja dari bagian dalam menuju ke arah luar petugas.',
          'JANGAN PERNAH menyemprot langsung filter HEPA di bagian atas kabinet!'
        ]
      },
      {
        stepNumber: 3,
        title: 'Prosedur Pasca-Operasional & Pengelolaan Limbah',
        description: 'Keluarkan seluruh sisa ampul dan spuit ke wadah limbah tertutup. Seka ulang seluruh permukaan kerja dengan alkohol 70% steril, biarkan blower menyala 5 menit, lalu matikan blower dan nyalakan lampu UV selama 30 menit untuk sterilisasi ruangan.'
      },
      {
        stepNumber: 4,
        title: 'Uji Sertifikasi Validasi Berkala 6 Bulanan',
        description: 'Lakukan uji sertifikasi berkala oleh vendor terakreditasi meliputi: Uji integritas kebocoran filter HEPA (DOP/PAO Test), uji kecepatan aliran udara (velocity test 0.45 m/s +/- 20%), dan uji mikrobiologi cawan papar (settle plate).'
      }
    ],
    criticalChecklist: [
      'Blower kabinet telah menyala minimal 15-30 menit sebelum barang dimasukkan ke dalam kabin.',
      'Pembersihan meja kerja dilakukan satu arah menggunakan kain kasa lint-free steril.',
      'Sertifikat pengujian filter HEPA dan laju aliran udara masih berlaku aktif (uji 6 bulanan).',
      'Lampu UV selalu dimatikan saat petugas berada di depan kabinet demi mencegah luka bakar radiasi kornea.'
    ],
    relatedForms: ['Logbook Pemantauan Tekanan Magnehelic Gauge', 'Checklist Dekontaminasi Harian BSC/LAF', 'Sertifikat Kalibrasi HEPA & Partikel Udara ISO Kelas 5'],
    notes: 'BSC Kelas II yang digunakan untuk sitostatika bekerja dengan tekanan udara negatif ke arah dalam guna melindungi petugas dari inhalasi aerosol obat kanker.'
  },
  {
    id: 'sop-kft-formularium-rs',
    docNumber: 'SOP/FAR-SAF/057/2026',
    title: 'SOP Tata Kelola Komite Farmasi & Terapi (KFT) serta Penyusunan Formularium',
    category: 'safety',
    categoryLabel: 'Keselamatan Pasien, K3 & Mutu',
    effectiveDate: '01 Januari 2026',
    revision: '02',
    legalBasis: [
      'Permenkes RI No. 72 Tahun 2016 tentang Standar Pelayanan Kefarmasian di Rumah Sakit',
      'Keputusan Menteri Kesehatan tentang Formularium Nasional (FORNAS)',
      'Standar Akreditasi Kemenkes (STARKES 2022) Bab PKPO 2 & 2.1'
    ],
    purpose: 'Mengatur mekanisme pengusulan, seleksi ilmiah berbasis Evidence-Based Medicine (EBM), peninjauan berkala, dan revisi Formularium Rumah Sakit guna menjamin tersedianya obat yang aman, bermutu, dan terjangkau secara pembiayaan.',
    scope: 'Seluruh dokter spesialis, komite medik, instalasi farmasi, dan manajemen rumah sakit.',
    policy: 'Formularium Rumah Sakit direvisi minimal 1 tahun sekali oleh Komite Farmasi dan Terapi (KFT). Peresepan obat non-formularium dibatasi maksimal 5% dari total lembar resep dan wajib melalui Formulir Persetujuan Khusus.',
    responsiblePersons: ['Ketua Komite Farmasi & Terapi (Dokter Spesialis)', 'Sekretaris KFT (Apoteker Kepala Instalasi Farmasi)', 'Komite Medik & Seluruh DPJP'],
    equipmentNeeded: ['Formulir Pengusulan Obat Baru Formularium', 'Dokumen Formularium Nasional (FORNAS) Terkini', 'Jurnal Ilmiah EBM Uji Klinis Terkontrol (RCT)', 'Laporan Penggunaan Obat Tahunan (Fast/Slow Moving)'],
    procedureSteps: [
      {
        stepNumber: 1,
        title: 'Penjaringan Usulan Obat Baru dari Staf Medis',
        description: 'Tiap akhir tahun, KFT membuka periode pengusulan obat baru kepada Kelompok Staf Medis (KSM). Pengusulan wajib menyertakan kajian EBM uji klinis fase III/IV dan analisis efektivitas biaya (Cost-Effectiveness Analysis).'
      },
      {
        stepNumber: 2,
        title: 'Kriteria Seleksi Obat Masuk Formularium',
        description: 'Rapat pleno KFT menilai kelayakan obat berdasarkan kriteria ketat:',
        keyPoints: [
          'Memiliki Nomor Izin Edar (NIE) resmi dari BPOM RI.',
          'Mengutamakan obat generik berkhasiat sama dengan harga paling terjangkau.',
          'Memiliki rasio manfaat-risiko (benefit-risk ratio) yang terbukti lebih unggul dibanding obat lama.',
          'Menghindari duplikasi zat aktif dan bentuk sediaan sejenis yang berlebihan (maksimal 3-4 merk per zat aktif).'
        ]
      },
      {
        stepNumber: 3,
        title: 'Evaluasi & Penghapusan Obat (Deletions)',
        description: 'KFT mengevaluasi obat yang tidak pernah diresepkan (dead stock/slow moving) selama 6 bulan berturut-turut atau obat yang dilaporkan sering memicu Kejadian Tidak Diharapkan (KTD) berat untuk dihapus dari daftar buku formularium.'
      },
      {
        stepNumber: 4,
        title: 'Penerbitan SK Direktur & Sosialisasi Formularium',
        description: 'Buku Formularium Rumah Sakit yang telah disahkan melalui Surat Keputusan (SK) Direktur dicetak dalam bentuk buku saku dan diintegrasikan ke dalam katalog sistem resep elektronik (e-Prescribing) SIMRS.'
      }
    ],
    criticalChecklist: [
      'Setiap usulan obat baru memiliki kelengkapan bukti ilmiah klinis dan analisis farmakoekonomi.',
      'Revisi buku formularium diterbitkan tepat waktu minimal sekali dalam setahun.',
      'Katalog obat pada sistem resep elektronik SIMRS terkunci sesuai isi Formularium RS yang berlaku.',
      'Kepatuhan dokter meresepkan obat formularium dipantau tiap bulan dengan target capaian > 95%.'
    ],
    relatedForms: ['Formulir Pengusulan Obat Baru Masuk Formularium', 'Formulir Permintaan Khusus Obat Non-Formularium', 'Surat Keputusan (SK) Direktur Pemberlakuan Formularium RS'],
    notes: 'Kepatuhan peresepan sesuai Formularium Rumah Sakit merupakan salah satu Indikator Kinerja Utama (IKU) mutu pelayanan medik dan kendali mutu kendali biaya BPJS Kesehatan.'
  }
];
