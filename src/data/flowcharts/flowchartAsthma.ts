import { DiseaseFlowchartData } from '../clinicalFlowchartData';

/**
 * Algoritma Interaktif Klinis: Asma Bronkial Dewasa & Remaja (GINA 2024)
 * Standar Konsensus Global Initiative for Asthma (GINA 2024) / Perhimpunan Dokter Paru Indonesia (PDPI)
 */
export const FLOWCHART_ASTHMA: DiseaseFlowchartData = {
  id: 'flowchart-asthma',
  diseaseName: 'Asma Bronkial Dewasa & Remaja (GINA 2024)',
  shortSubtitle: 'Algoritma Alur Bertahap (Step 1 - 5), Protokol Track 1 MART (ICS-Formoterol), dan Terapi Pencegahan Eksaserbasi',
  category: 'Respirasi & Paru',
  icd10: 'J45 (Asthma)',
  bannerGradient: 'from-cyan-950 via-slate-950 to-teal-950',
  accentColor: 'cyan',
  classificationTitle: 'Klasifikasi Derajat Keparahan & Frekuensi Gejala Asma (GINA Initial Assessment)',
  classificationLevels: [
    {
      id: 'asthma-intermittent',
      label: 'ASMA INTERMITEN (GEJALA JARANG)',
      criteria: 'Gejala timbul < 2 kali per bulan; tidak ada terbangun malam hari karena asma; tidak ada riwayat eksaserbasi dalam 1 tahun terakhir',
      badgeColor: 'bg-emerald-500 text-white',
      textColor: 'text-emerald-700 dark:text-emerald-300',
      bgColor: 'bg-emerald-50/80 dark:bg-emerald-950/40',
      borderColor: 'border-emerald-300 dark:border-emerald-700',
      clinicalAction: 'Mulai GINA Step 1: ICS-Formoterol dosis rendah sesuai kebutuhan (PRN) sebagai pelega dan pengontrol sekaligus.'
    },
    {
      id: 'asthma-mild-persistent',
      label: 'PERSISTEN RINGAN (MILD PERSISTENT)',
      criteria: 'Gejala asma timbul >= 2 kali per bulan, tetapi kurang dari 4-5 hari per minggu; terbangun malam hari karena asma >= 1-2 kali/bulan',
      badgeColor: 'bg-teal-600 text-white',
      textColor: 'text-teal-800 dark:text-teal-300',
      bgColor: 'bg-teal-50/80 dark:bg-teal-950/40',
      borderColor: 'border-teal-300 dark:border-teal-700',
      clinicalAction: 'Mulai GINA Step 2: ICS-Formoterol dosis rendah PRN saat gejala muncul (atau ICS harian dosis rendah + SABA PRN).'
    },
    {
      id: 'asthma-mod-persistent',
      label: 'PERSISTEN SEDANG (MODERATE PERSISTENT)',
      criteria: 'Gejala timbul pada sebagian besar hari (>= 4-5 hari/minggu); terbangun malam hari >= 1 kali/minggu; keterbatasan aktivitas harian',
      badgeColor: 'bg-amber-500 text-slate-900',
      textColor: 'text-amber-800 dark:text-amber-300',
      bgColor: 'bg-amber-50/80 dark:bg-amber-950/40',
      borderColor: 'border-amber-300 dark:border-amber-700',
      clinicalAction: 'Mulai GINA Step 3: Inisiasi Terapi Rumatan dan Pelega Tunggal (MART): ICS-Formoterol dosis rendah 1-2 puff 2x/hari + PRN pelega.'
    },
    {
      id: 'asthma-severe-persistent',
      label: 'PERSISTEN BERAT / TIDAK TERKONTROL (SEVERE ASTHMA)',
      criteria: 'Gejala asma hampir sepanjang hari setiap hari; sering terbangun malam hari; nilai FEV1 / APE < 60% prediksi; eksaserbasi berulang',
      badgeColor: 'bg-rose-600 text-white',
      textColor: 'text-rose-800 dark:text-rose-300',
      bgColor: 'bg-rose-50/80 dark:bg-rose-950/40',
      borderColor: 'border-rose-300 dark:border-rose-700',
      clinicalAction: 'Mulai GINA Step 4-5: Tingkatkan ke ICS-Formoterol dosis sedang-tinggi + Tambahkan LAMA (Tiotropium) + Rujuk evaluasi biologis (Anti-IgE / Anti-IL5).'
    }
  ],
  flowchartTitle: 'Algoritma Keputusan Terapi Asma GINA 2024: Track 1 (Pilihan Utama MART)',
  lifestyleModifications: [
    {
      title: 'Identifikasi & Hindari Pemicu Alergen (Triggers)',
      impact: 'Menurunkan Hiperreaktivitas Bronkus 40%',
      details: 'Hindari debu tungau kasur, bulu hewan peliharaan, asap rokok/vape, polusi udara, dan perubahan suhu dingin mendadak.'
    },
    {
      title: 'Kumur Air Bersih Pasca Inhalasi Steroid',
      impact: 'Mencegah Infeksi Fungi Oral & Disfonia',
      details: 'Kumur-kumur mulut dan tenggorokan dengan air bersih lalu buang airnya setiap selesai menghirup sediaan yang mengandung kortikosteroid.'
    },
    {
      title: 'Rencana Aksi Asma Mandiri (Asthma Action Plan)',
      impact: 'Deteksi Dini Perburukan & Pencegahan Serangan Fatal',
      details: 'Edukasi pasien mengenali zona hijau (terkontrol), zona kuning (waspada perburukan), dan zona merah (bahaya gawat darurat).'
    },
    {
      title: 'Edukasi Penggunaan Alat Bantu Inhaler yang Benar',
      impact: 'Optimalisasi Deposisi Obat ke Saluran Napas Paru',
      details: 'Verifikasi teknik menghisap MDI atau DPI secara berkala di apotek; gunakan spacer berkatup jika koordinasi tangan-napas sulit.'
    }
  ],
  comorbidProfiles: [
    {
      name: 'Rinitis Alergi Penyerta',
      icon: '👃',
      targetBP: 'Kontrol Saluran Napas Atas & Bawah',
      firstLineDrug: 'Kortikosteroid Intranasal (Mometason/Flutikason Nasal Spray) + LTRA (Montelukast)',
      rationale: 'Konsep "One Airway, One Disease": Mengobati rinitis secara bermakna mengurangi hiperreaktivitas bronkus asma.'
    },
    {
      name: 'Penyakit Refluks Gastroesofagus (GERD)',
      icon: '🔥',
      targetBP: 'Pengendalian Asam Lambung',
      firstLineDrug: 'Proton Pump Inhibitor (Omeprazole/Lansoprazole 30-60 menit sebelum makan)',
      rationale: 'Refluks asam ke laring memicu bronkospasme vagal dan batuk asma malam hari yang refrakter.'
    },
    {
      name: 'Asma yang Diinduksi Olahraga (EIB)',
      icon: '🏃',
      targetBP: 'Pencegahan Bronkokonstriksi Pasca Latihan',
      firstLineDrug: 'Inhalasi ICS-Formoterol dosis rendah 15 menit sebelum berolahraga',
      rationale: 'Kombinasi kortikosteroid dan formoterol onset cepat mencegah bronkospasme latihan sekaligus memproteksi jalan napas.'
    },
    {
      name: 'Kehamilan dengan Asma',
      icon: '🤰',
      targetBP: 'Kontrol Asma Optimal untuk Oksigenasi Janin',
      firstLineDrug: 'Budesonide Inhaler + Salbutamol Inhaler (Kategori Kehamilan B)',
      rationale: 'Budesonid memiliki profil keamanan kehamilan terbukti paling luas. Hipoksia ibu akibat asma jauh lebih berbahaya bagi janin.'
    }
  ],
  flowchartSteps: [
    {
      stepId: 'step-1-2-gina-mart',
      stepNumber: 1,
      stageBadge: 'STEP 1 & 2 (GEJALA RINGAN / INTERMITEN)',
      title: 'Langkah 1 - 2: Budesonid-Formoterol Dosis Rendah Sesuai Kebutuhan (PRN)',
      subtitle: 'Terapi Pelega dan Pengontrol Sekaligus Saat Gejala Muncul',
      timeline: 'Gejala < 4-5 hari per minggu',
      description: 'GINA 2024 TIDAK LAGI MEREKOMENDASIKAN penggunaan SABA tunggal tanpa kortikosteroid karena SABA tunggal meningkatkan risiko serangan fatal. Pasien menggunakan ICS-Formoterol dosis rendah saat timbul sesak.',
      branchType: 'single',
      targetBP: 'Gejala siang <= 2x/minggu, tidak ada bangun malam, APE / FEV1 > 80%',
      drugs: [
        {
          drugName: 'Budesonide/Formoterol Turbuhaler (160/4.5 mcg)',
          dosage: '1 hisapan saat sesak nafas / gejala timbul (maksimal 8 - 12 hisapan dalam 1 hari)',
          role: 'Pelega Sekaligus Pengontrol Inflamasi (Track 1 GINA 2024)',
          fornasTier: 'Faskes 2/3',
          isPreferred: true
        },
        {
          drugName: 'Salbutamol MDI + Inhaled Corticosteroid (ICS harian)',
          dosage: 'Salbutamol 100 mcg 1-2 puff PRN + Fluticasone Propionate 125 mcg 2x1 puff harian',
          role: 'Track 2 Alternatif (Jika Track 1 tidak tersedia / alergi)',
          fornasTier: 'Faskes 1',
          isPreferred: false
        }
      ],
      escalationTrigger: 'Jika pasien membutuhkan pelega >= 3 kali per minggu atau asma tidak terkontrol setelah 2-3 bulan evaluasi, NAIK KE LANGKAH 3.',
      clinicalPearls: 'Formoterol adalah LABA unik karena memiliki onset kerja sangat cepat (1-3 menit, setara Salbutamol) namun durasi kerja panjang (12 jam), sehingga aman dan ideal digunakan sebagai pereda sesak darurat.'
    },
    {
      stepId: 'step-3-gina-mart',
      stepNumber: 2,
      stageBadge: 'STEP 3 (PERSISTEN SEDANG)',
      title: 'Langkah 3: Rumatan Harian & Pelega Tunggal (MART Dosis Rendah)',
      subtitle: 'Maintenance and Reliever Therapy (MART)',
      timeline: 'Bulan ke 1 - 3',
      description: 'Pasien menggunakan kombinasi ICS-Formoterol dosis rendah secara teratur setiap hari (pagi dan malam) DAN menggunakannya kembali jika sewaktu-waktu timbul sesak napas tambahan.',
      branchType: 'escalation',
      targetBP: 'Asma terkontrol penuh, aktivitas fisik normal tanpa restriksi',
      drugs: [
        {
          drugName: 'Budesonide/Formoterol 160/4.5 mcg (MART Regimen)',
          dosage: '1 hisapan 2 KALI SEHARI (pagi & malam) sebagai rumatan + 1 hisapan PRN saat sesak',
          role: 'Regimen Baku Emas MART Dosis Rendah (Pilihan Utama)',
          fornasTier: 'Faskes 2/3',
          isPreferred: true
        },
        {
          drugName: 'Salmeterol/Fluticasone Accuhaler (50/100 mcg atau 50/250 mcg)',
          dosage: '1 hisapan 2 kali sehari teratur + Salbutamol Inhaler PRN pereda',
          role: 'Track 2 Alternatif (Kombinasi Tetap LABA-ICS harian + SABA pelega terpisah)',
          fornasTier: 'Faskes 2/3',
          isPreferred: false
        }
      ],
      escalationTrigger: 'Evaluasi kepatuhan dan teknik inhaler dalam 4-8 minggu. Jika asma tetap tidak terkontrol atau timbul eksaserbasi, NAIK KE LANGKAH 4.',
      clinicalPearls: 'Kelebihan konsep MART: Saat pasien mengalami perburukan awal, penggunaan hisapan tambahan secara otomatis melipatgandakan dosis kortikosteroid antiinflamasi di paru, mencegah eksaserbasi akut sebelum menjadi berat.'
    },
    {
      stepId: 'step-4-gina-mart',
      stepNumber: 3,
      stageBadge: 'STEP 4 (PERSISTEN BERAT)',
      title: 'Langkah 4: MART Dosis Sedang & Evaluasi Tambahan',
      subtitle: 'Eskalasi Dosis Kortikosteroid Inhalasi ke Dosis Sedang',
      timeline: 'Bulan ke 3 - 6',
      description: 'Meningkatkan dosis rumatan ICS-Formoterol ke dosis sedang untuk meredam inflamasi jalan napas kronik yang refrakter.',
      branchType: 'escalation',
      targetBP: 'Pencegahan eksaserbasi yang membutuhkan steroid oral atau rawat inap',
      drugs: [
        {
          drugName: 'Budesonide/Formoterol 160/4.5 mcg (MART Dosis Sedang)',
          dosage: '2 hisapan 2 KALI SEHARI sebagai rumatan + 1 hisapan PRN jika ada gejala',
          role: 'Regimen MART Dosis Sedang (Track 1 Pilihan Utama)',
          fornasTier: 'Faskes 2/3',
          isPreferred: true
        },
        {
          drugName: 'Tiotropium Respimat (LAMA Inhaler)',
          dosage: '2.5 mcg (2 semprotan 1x sehari) ditambahkan ke ICS-LABA',
          role: 'Terapi Tambahan Bronkodilator Antimuskarinik Kerja Panjang (Add-on LAMA)',
          fornasTier: 'Faskes 2/3',
          isPreferred: false
        }
      ],
      escalationTrigger: 'Jika pasien tetap mengalami eksaserbasi berulang meski teknik inhaler sempurna dan patuh pada Step 4, SEGERA NAIK KE LANGKAH 5 (Rujukan Spesialis Paru).',
      clinicalPearls: 'Sebelum menaikkan dosis ke Step 5, pastikan 3 hal: (1) Periksa kepatuhan minum obat, (2) Periksa teknik menghisap inhaler, dan (3) Atasi faktor pemicu komorbiditas (GERD, rinosinusitis, obesitas).'
    },
    {
      stepId: 'step-5-severe-asthma',
      stepNumber: 4,
      stageBadge: 'STEP 5 (ASMA BERAT TIPE KHUSUS)',
      title: 'Langkah 5: Fenotipe Asma Berat & Rujukan Terapi Biologis Target',
      subtitle: 'Konsultasi Tim Ahli Pulmonologi Terpadu',
      timeline: 'Pemantauan Berkelanjutan Spesialis Paru',
      description: 'Pasien dengan asma berat tidak terkontrol (Severe Uncontrolled Asthma) memerlukan pemeriksaan biomarker fenotipe inflamasi (eosinofil darah, IgE serum, FeNO) untuk terapi agen biologis tertarget.',
      branchType: 'resistant',
      targetBP: 'Bebas ketergantungan steroid oral sistemik (OCS), reduksi eksaserbasi berat',
      drugs: [
        {
          drugName: 'Budesonide/Formoterol Dosis Tinggi + Tiotropium',
          dosage: 'Dosis harian maksimal ICS-LABA + LAMA Tiotropium 5 mcg/hari',
          role: 'Terapi Tripel Inhalasi Dasar',
          fornasTier: 'Faskes 3',
          isPreferred: true
        },
        {
          drugName: 'Omalizumab (Anti-IgE Injeksi SC)',
          dosage: 'Injeksi subkutan tiap 2-4 minggu sesuai berat badan dan kadar IgE awal',
          role: 'Khusus Fenotipe Asma Alergi Berat (IgE meningkat signifikan)',
          fornasTier: 'Faskes 3',
          isPreferred: false
        },
        {
          drugName: 'Mepolizumab / Benralizumab (Anti-IL5 Injeksi SC)',
          dosage: 'Injeksi subkutan berkala sesuai protokol',
          role: 'Khusus Fenotipe Asma Eosinofilik Berat (Eosinofil darah >= 300 sel/μL)',
          fornasTier: 'Faskes 3',
          isPreferred: false
        }
      ],
      escalationTrigger: 'Hindari penggunaan Kortikosteroid Oral (OCS) rumatan harian jangka panjang; OCS hanya digunakan sebagai pilihan darurat terakhir karena efek samping sistemik yang parah.',
      clinicalPearls: 'Edukasi Pasien: Efek samping lokal kortikosteroid inhalasi (sariawan, suara parau/disfonia) dapat dicegah dengan penggunaan spacer dan berkumur-kumur air hangat segera setelah menghirup obat.'
    }
  ],
  drugClassificationTable: [
    {
      id: 'class-ics-laba',
      drugClass: 'Kombinasi Kortikosteroid Inhalasi & LABA (ICS-LABA)',
      classCategory: 'other',
      exampleDrugs: [
        { name: 'Budesonide/Formoterol', dailyDosage: '160/4.5 mcg: 1-2 hisapan 1-2x/hari + PRN pelega', fornasTier: 'Faskes 2/3' },
        { name: 'Salmeterol/Fluticasone', dailyDosage: '50/250 mcg atau 50/500 mcg: 1 hisapan 2x/hari', fornasTier: 'Faskes 2/3' }
      ],
      mechanismOfAction: 'Kombinasi sinergis: ICS (Budesonid/Flutikason) menekan inflamasi eosinofil mukosa bronkus; LABA (Formoterol/Salmeterol) merelaksasi otot polos bronkus selama 12 jam.',
      clinicalIndications: 'Pilar utama terapi asma persisten sedang hingga berat. Formoterol onset cepat memungkinkan penggunaan sebagai pereda darurat (MART).',
      adverseEffects: 'Kandidiasis oral (thrush), disfonia (suara serak), tremor halus pada tangan, takikardia ringan.',
      contraindications: 'Hipersensitivitas terhadap zat aktif atau laktosa protein susu (pada sediaan serbuk DPI tertentu).',
      monitoringKey: 'Kepatuhan harian, kebersihan rongga mulut, evaluasi laju APE/spirometri.'
    },
    {
      id: 'class-saba',
      drugClass: 'Short-Acting Beta-2 Agonist (SABA)',
      classCategory: 'other',
      exampleDrugs: [
        { name: 'Salbutamol Inhaler', dailyDosage: '100 mcg per semprotan (1-2 puff saat sesak, maks 8 puff/hari)', fornasTier: 'Faskes 1' },
        { name: 'Terbutaline Turbuhaler', dailyDosage: '0.5 mg per hisapan PRN saat timbul sesak', fornasTier: 'Faskes 1' }
      ],
      mechanismOfAction: 'Stimulasi selektif reseptor beta-2 adrenergik di otot polos saluran napas; memicu aktivasi adenilat siklase dan bronkodilatasi cepat dalam 3-5 menit.',
      clinicalIndications: 'Pereda sesak darurat (reliever) pada eksaserbasi akut asma. GINA 2024 mewajibkan selalu didampingi kortikosteroid.',
      adverseEffects: 'Tremor otot skeletal, palpitasi jantung, takikardia, hipokalemia ringan (pada dosis berlebih).',
      contraindications: 'Takikardia aritmia berat tanpa pengawasan.',
      monitoringKey: 'Frekuensi pemakaian kaleng SABA per tahun (penggunaan >= 3 kanister/tahun menandakan risiko serangan asma fatal tinggi).'
    },
    {
      id: 'class-lama-asthma',
      drugClass: 'Long-Acting Muscarinic Antagonist (LAMA)',
      classCategory: 'other',
      exampleDrugs: [
        { name: 'Tiotropium Respimat', dailyDosage: '2.5 mcg: 2 semprotan 1x/hari pada jam yang sama', fornasTier: 'Faskes 2/3' }
      ],
      mechanismOfAction: 'Blokade kompetitif jangka panjang pada reseptor muskarinik M3 di otot polos bronkus; menghambat tonus bronkokonstriksi parasimpatis kolinergik selama > 24 jam.',
      clinicalIndications: 'Terapi tambahan (add-on) pada pasien asma Step 4-5 yang belum terkontrol optimal dengan kombinasi ICS-LABA dosis sedang/tinggi.',
      adverseEffects: 'Mulut kering, iritasi tenggorokan, retensi urin ringan (pada lansia BPH), konstipasi.',
      contraindications: 'Glaukoma sudut tertutup akut yang tidak diobati.',
      monitoringKey: 'Peningkatan FEV1 dan penurunan frekuensi kekambuhan eksaserbasi.'
    },
    {
      id: 'class-ltra',
      drugClass: 'Leukotriene Receptor Antagonist (LTRA)',
      classCategory: 'other',
      exampleDrugs: [
        { name: 'Montelukast Oral', dailyDosage: '10 mg 1x/hari malam hari (Dewasa), 4-5 mg (Anak)', fornasTier: 'Faskes 2/3' }
      ],
      mechanismOfAction: 'Antagonis selektif reseptor leukotrien CysLT1; menghambat efek bronkokonstriksi, hipersekresi mukus, dan edema bronkus yang dimediasi oleh leukotrien D4.',
      clinicalIndications: 'Pilihan terapi tambahan pada asma dengan rinitis alergi penyerta atau asma yang dicetuskan oleh aktivitas fisik (exercise-induced asthma).',
      adverseEffects: 'Sakit kepala, gangguan saluran cerna, perubahan perilaku/mood (peringatan neuropsikiatrik FDA: mimpi buruk, insomnia).',
      contraindications: 'Hipersensitivitas terhadap montelukast.',
      monitoringKey: 'Edukasi keluarga memantau perubahan perilaku/gangguan tidur.'
    },
    {
      id: 'class-ics-mono',
      drugClass: 'Kortikosteroid Inhalasi Tunggal (ICS Monoterapi)',
      classCategory: 'other',
      exampleDrugs: [
        { name: 'Budesonide Inhaler / Respules', dailyDosage: '200-800 mcg/hari terbagi dlm 1-2 dosis (Turbuhaler/Nebulizer)', fornasTier: 'Faskes 1 & 2/3' },
        { name: 'Fluticasone Propionate Inhaler', dailyDosage: '100-500 mcg/hari terbagi dlm 2 dosis (MDI)', fornasTier: 'Faskes 2/3' }
      ],
      mechanismOfAction: 'Antiinflamasi topikal poten: Menembus membran sel dan berikatan dengan reseptor glukokortikoid intraseluler; menekan transkripsi gen sitokin pro-inflamasi (IL-4, IL-5, IL-13) dan mengurangi infiltrasi eosinofil serta edema mukosa bronkus.',
      clinicalIndications: 'Pilar dasar terapi pengontrol (controller) harian pada asma persisten ringan-sedang; komponen wajib pada GINA Track 2 Step 1 & 2; lini pertama pada asma anak-anak.',
      adverseEffects: 'Kandidiasis oral (thrush), suara serak/parau (disfonia), iritasi tenggorokan, batuk refleks saat inhalasi.',
      contraindications: 'Hipersensitivitas terhadap budesonid/flutikason; infeksi fungi paru aktif tanpa terapi antijamur.',
      monitoringKey: 'Edukasi berkumur air bersih setelah setiap pemakaian; evaluasi kepatuhan harian dan nilai laju APE berkala.'
    },
    {
      id: 'class-systemic-corticosteroid',
      drugClass: 'Kortikosteroid Sistemik (Oral & Injeksi / OCS & Parenteral)',
      classCategory: 'other',
      exampleDrugs: [
        { name: 'Metilprednisolon (Oral / Injeksi IV)', dailyDosage: 'Oral: 16-40 mg/hari (burst 5-7 hari) | IV: 40-125 mg tiap 6-8 jam (akut)', fornasTier: 'Faskes 1 & 2/3' },
        { name: 'Prednison Oral', dailyDosage: '30-50 mg/hari dosis tunggal pagi selama 5-7 hari', fornasTier: 'Faskes 1' },
        { name: 'Hidrokortison Injeksi IV', dailyDosage: '100-200 mg IV tiap 6 jam pada status asmatikus', fornasTier: 'Faskes 2/3' }
      ],
      mechanismOfAction: 'Antiinflamasi sistemik spektrum luas: Menghambat sintesis prostaglandin dan leukotrien, menstabilkan membran lisosom leukosit, memulihkan sensitivitas reseptor beta-2 yang mengalami desensitisasi, dan menurunkan hipersekresi mukus.',
      clinicalIndications: 'Baku emas penyelamat pada eksaserbasi asma akut berat di IGD; terapi kursus singkat (short-course burst 5-7 hari) pasca serangan akut tanpa perlu tapering-off bertahap.',
      adverseEffects: 'Hiperglikemia transien, retensi cairan/natrium, insomnia/gangguan mood, dispepsia/ulkus peptikum. Penggunaan jangka panjang: sindrom Cushing, osteoporosis, katarak, imunosupresi.',
      contraindications: 'Infeksi sistemik berat yang tidak tertangani (kecuali syok anafilaksis/septik); ulkus peptikum aktif.',
      monitoringKey: 'Kadar glukosa darah (terutama pada pasien DM), tekanan darah, dan durasi terapi (batasi < 7 hari untuk burst therapy).'
    },
    {
      id: 'class-sama',
      drugClass: 'Short-Acting Muscarinic Antagonist (SAMA)',
      classCategory: 'other',
      exampleDrugs: [
        { name: 'Ipratropium Bromide Inhaler / Larutan', dailyDosage: 'MDI: 20-40 mcg (1-2 puff) 3-4x/hari | Nebulizer: 250-500 mcg tiap 20 mnt (akut)', fornasTier: 'Faskes 1 & 2/3' },
        { name: 'Ipratropium + Salbutamol (Combivent)', dailyDosage: '1 ampul (2.5 mL) via nebulizer tiap 4-6 jam atau tiap 20 mnt jam ke-1 IGD', fornasTier: 'Faskes 1 & 2/3' }
      ],
      mechanismOfAction: 'Antagonis kompetitif non-selektif reseptor kolinergik muskarinik (M1, M2, M3) di saluran napas; menghambat tonus bronkokonstriksi vagal dan sekresi mukus bronkus secara lokal tanpa absorpsi sistemik signifikan.',
      clinicalIndications: 'Kombinasi sinergis dengan SABA pada eksaserbasi asma akut sedang-berat di IGD; terbukti menurunkan laju rawat inap RS sebesar 25-30% dibanding SABA tunggal.',
      adverseEffects: 'Mulut kering, rasa pahit di lidah, sakit kepala ringan, midriasis/nyeri mata bila terkena paparan aerosol ke mata (gunakan masker wajah rapat).',
      contraindications: 'Hipersensitivitas terhadap ipratropium atau atropin; glaukoma sudut tertutup akut.',
      monitoringKey: 'Pastikan masker nebulizer terpasang rapat menutup hidung-mulut agar uap aerosol tidak mengenai kornea mata.'
    },
    {
      id: 'class-xanthine',
      drugClass: 'Derivat Xantin / Metilsantin',
      classCategory: 'other',
      exampleDrugs: [
        { name: 'Aminofilin Injeksi IV', dailyDosage: 'Loading: 5-6 mg/kgBB IV lambat (20-30 mnt) lalu infus 0.4-0.6 mg/kg/jam', fornasTier: 'Faskes 1 & 2/3' },
        { name: 'Teofilin Lepas Lambat (Retaphyl SR)', dailyDosage: '300 mg 1-2x/hari per oral bersama makanan', fornasTier: 'Faskes 1' }
      ],
      mechanismOfAction: 'Inhibisi non-selektif enzim fosfodiesterase (PDE-3, PDE-4) yang meningkatkan cAMP intraseluler; antagonis reseptor adenosin; stimulasi diafragma pernapasan; dan efek antiinflamasi imunomodulator ringan.',
      clinicalIndications: 'Bronkodilator lini alternatif pada asma berat refrakter atau eksaserbasi akut yang gagal respons terhadap terapi inhalasi maksimal; sediaan oral untuk faskes primer terbatas.',
      adverseEffects: 'Indeks terapi sempit (Narrow Therapeutic Index): Mual, muntah, takikardia, aritmia, insomnia, tremor, hingga kejang pada kadar serum > 20 mcg/mL.',
      contraindications: 'Takiaritmia jantung tidak terkontrol, ulkus peptikum aktif, riwayat kejang epileptik.',
      monitoringKey: 'Kadar terapeutik serum teofilin (target: 8-15 mcg/mL); interaksi obat via CYP1A2 (Ciprofloxacin, Eritromisin, Simetidin meningkatkan toksisitas teofilin).'
    },
    {
      id: 'class-biologics',
      drugClass: 'Terapi Biologis Target (Antibodi Monoklonal Anti-IgE & Anti-IL5)',
      classCategory: 'other',
      exampleDrugs: [
        { name: 'Omalizumab (Anti-IgE Injeksi SC)', dailyDosage: '75-600 mg SC tiap 2 atau 4 minggu (dosis berbasis kadar IgE awal & BB)', fornasTier: 'Faskes 3' },
        { name: 'Mepolizumab (Anti-IL5 Injeksi SC)', dailyDosage: '100 mg SC tiap 4 minggu sekali', fornasTier: 'Faskes 3' },
        { name: 'Benralizumab (Anti-IL5Rα Injeksi SC)', dailyDosage: '30 mg SC tiap 4 minggu (3 dosis awal), lalu tiap 8 minggu', fornasTier: 'Faskes 3' }
      ],
      mechanismOfAction: 'Antibodi monoklonal tertarget: Omalizumab mengikat fraksi bebas IgE dan mencegah degranulasi sel mast; Mepolizumab/Benralizumab menghambat pensinyalan IL-5 dan memicu apoptosis eosinofil sehingga menekan inflamasi tipe-2.',
      clinicalIndications: 'Pilihan baku emas GINA Step 5 untuk Asma Berat Refrakter yang tidak terkontrol dengan ICS-LABA dosis maksimal; menurunkan angka eksaserbasi berat hingga 50% dan membebaskan ketergantungan steroid oral (OCS).',
      adverseEffects: 'Reaksi lokal di tempat suntikan (nyeri, eritema), sakit kepala, faringitis; reaksi anafilaksis lambat (0.1-0.2%, observasi minimal 30 menit pasca suntik).',
      contraindications: 'Hipersensitivitas berat terhadap antibodi monoklonal; serangan asma akut (bukan untuk terapi darurat).',
      monitoringKey: 'Evaluasi respons klinis setelah 4-6 bulan terapi; pantau biomarker inflamasi (kadar eosinofil darah / IgE).'
    }
  ],
  ebmReferences: [
    {
      id: 'ref-gina-2024',
      title: 'Global Strategy for Asthma Management and Prevention (2024 Update)',
      organization: 'Global Initiative for Asthma (GINA)',
      year: '2024',
      scope: 'Internasional',
      summary: 'Pedoman global penatalaksanaan asma terkini yang menegaskan Track 1 MART (ICS-Formoterol) sebagai pendekatan lini pertama pilihan untuk memangkas angka eksaserbasi berat hingga 30-50%.',
      evidenceLevel: 'Class I, Level A'
    },
    {
      id: 'ref-pdpi-asma',
      title: 'Pedoman Diagnosis & Penatalaksanaan Asma di Indonesia',
      organization: 'Perhimpunan Dokter Paru Indonesia (PDPI)',
      year: '2023',
      scope: 'Nasional',
      summary: 'Konsensus nasional penanganan asma stabil dan eksaserbasi akut di fasilitas kesehatan primer, sekunder, dan tersier di Indonesia.',
      evidenceLevel: 'Kelas I, Level A'
    }
  ]
};
