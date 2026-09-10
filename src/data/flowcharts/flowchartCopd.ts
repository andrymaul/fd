import { DiseaseFlowchartData } from '../clinicalFlowchartData';

/**
 * Algoritma Interaktif Klinis: Penyakit Paru Obstruktif Kronik (PPOK / COPD)
 * Standar Konsensus Global Initiative for Chronic Obstructive Lung Disease (GOLD 2024) & Perhimpunan Dokter Paru Indonesia (PDPI)
 */
export const FLOWCHART_COPD: DiseaseFlowchartData = {
  id: 'flowchart-copd',
  diseaseName: 'Penyakit Paru Obstruktif Kronik (PPOK / COPD)',
  shortSubtitle: 'Klasifikasi Spirometri GOLD 1–4, Alur ABE 2024 (LAMA/LABA), Kriteria Hitung Eosinofil, & Protokol Eksaserbasi Akut',
  category: 'Respirasi & Paru',
  icd10: 'J44 (Chronic Obstructive Pulmonary Disease)',
  bannerGradient: 'from-teal-950 via-slate-950 to-emerald-950',
  accentColor: 'teal',
  classificationTitle: 'Klasifikasi Derajat Keparahan Obstruksi Spirometri & Grup ABE (Standar GOLD 2024 / PDPI)',
  classificationLevels: [
    {
      id: 'copd-gold-1-2',
      label: 'GOLD GRUP A (GEJALA MINIMAL / RISIKO RENDAH)',
      criteria: 'Skor CAT < 10 atau mMRC 0–1; Riwayat eksaserbasi 0 atau 1 kali dalam 1 tahun terakhir (tanpa rawat inap RS)',
      badgeColor: 'bg-emerald-500 text-white',
      textColor: 'text-emerald-700 dark:text-emerald-300',
      bgColor: 'bg-emerald-50/80 dark:bg-emerald-950/40',
      borderColor: 'border-emerald-300 dark:border-emerald-700',
      clinicalAction: 'Inisiasi Bronkodilator Kerja Tunggal (LABA atau LAMA inhalasi kerja panjang). SABA inhalasi PRN saat sesak akut.'
    },
    {
      id: 'copd-gold-group-b',
      label: 'GOLD GRUP B (GEJALA SIGNIFIKAN / RISIKO RENDAH)',
      criteria: 'Skor CAT >= 10 atau mMRC >= 2; Riwayat eksaserbasi 0 atau 1 kali dalam 1 tahun terakhir (tanpa rawat inap RS)',
      badgeColor: 'bg-teal-600 text-white',
      textColor: 'text-teal-800 dark:text-teal-300',
      bgColor: 'bg-teal-50/80 dark:bg-teal-950/40',
      borderColor: 'border-teal-300 dark:border-teal-700',
      clinicalAction: 'Inisiasi Kombinasi Bronkodilator Ganda (LABA + LAMA inhalasi: Tiotropium + Olodaterol atau Umeclidinium + Vilanterol).'
    },
    {
      id: 'copd-gold-group-e',
      label: 'GOLD GRUP E (EKSASERBASI SERING / RAWAT INAP)',
      criteria: 'Riwayat eksaserbasi >= 2 kali per tahun rawat jalan ATAU >= 1 kali eksaserbasi yang membutuhkan rawat inap RS (independen dari skor CAT)',
      badgeColor: 'bg-rose-600 text-white',
      textColor: 'text-rose-800 dark:text-rose-300',
      bgColor: 'bg-rose-50/80 dark:bg-rose-950/40',
      borderColor: 'border-rose-300 dark:border-rose-700',
      clinicalAction: 'Mulai LAMA + LABA. Evaluasi hitung Eosinofil darah: bila >= 300 sel/uL, langsung inisiasi Triple Therapy (LABA + LAMA + ICS).'
    },
    {
      id: 'copd-acute-exacerbation',
      label: 'EKSASERBASI AKUT PPOK (AE-COPD)',
      criteria: 'Perburukan akut sesak napas, peningkatan volume dahak, dan purulensi sputum (Kriteria Anthonisen Tipe 1-3)',
      badgeColor: 'bg-amber-500 text-slate-900',
      textColor: 'text-amber-800 dark:text-amber-300',
      bgColor: 'bg-amber-50/80 dark:bg-amber-950/40',
      borderColor: 'border-amber-300 dark:border-amber-700',
      clinicalAction: 'Nebulisasi SABA + Ipratropium Bromida; Berikan Kortikosteroid oral 5 hari (Prednison 40 mg); Berikan Antibiotik bila sputum purulen.'
    }
  ],
  flowchartTitle: 'Algoritma Keputusan Terapi Pemeliharaan PPOK GOLD 2024 & Penatalaksanaan Eksaserbasi',
  lifestyleModifications: [
    {
      title: 'Berhenti Merokok Mutlak (Smoking Cessation)',
      impact: 'Satu-satunya Intervensi yang Memperlambat Penurunan FEV1',
      details: 'Konseling 5A (Ask, Advise, Assess, Assist, Arrange). Pertimbangkan terapi pengganti nikotin (NRT) atau Bupropion.'
    },
    {
      title: 'Rehabilitasi Paru & Latihan Pernapasan (Pursed-Lip Breathing)',
      impact: 'Meningkatkan Toleransi Latihan & Kualitas Hidup (Skor CAT turun 4–6 poin)',
      details: 'Latihan jalan kaki aerobik 20–30 menit 3–5x seminggu, teknik pernapasan pursed-lip dan latihan otot diafragma.'
    },
    {
      title: 'Vaksinasi Lengkap (Influenza & Pneumokokus)',
      impact: 'Menurunkan Risiko Eksaserbasi Berat & Rawat Inap hingga 50%',
      details: 'Vaksin influenza tahunan + Vaksin pneumokokus (PCV20 atau PCV15 diikuti PPSV23) direkomendasikan untuk semua pasien PPOK.'
    },
    {
      title: 'Edukasi Teknik Inhaler & Kebersihan Alat',
      impact: 'Mencegah Deposisi Orofaringeal & Kegagalan Efikasi Obat',
      details: 'Verifikasi teknik hisap DPI (Dry Powder Inhaler) atau Respimat secara berkala di apotek/faskes.'
    }
  ],
  comorbidProfiles: [
    {
      name: 'PPOK dengan Penyakit Jantung Koroner / Gagal Jantung',
      icon: '🫀',
      targetBP: 'Gunakan Beta-1 Selektif (Bisoprolol/Metoprolol)',
      firstLineDrug: 'LAMA (Tiotropium) + LABA (Olodaterol) + Bisoprolol dosis rendah',
      rationale: 'Beta-bloker non-selektif dikontraindikasikan karena risiko bronkospasme; Beta-1 kardioselektif aman dan menurunkan mortalitas kardiovaskular.'
    },
    {
      name: 'PPOK dengan Riwayat Infeksi Pneumonia Berulang',
      icon: '🧫',
      targetBP: 'Hindari Kortikosteroid Inhalasi (ICS)',
      firstLineDrug: 'Kombinasi Ganda LAMA + LABA murni (tanpa ICS)',
      rationale: 'Inhalasi steroid (ICS) meningkatkan risiko pneumonia bakterial pada PPOK; hanya berikan ICS jika ada riwayat asma tumpang tindih (ACO) atau eosinofil >= 300.'
    },
    {
      name: 'PPOK dengan Eosinofilia Darah (Blood Eosinophils >= 300 sel/uL)',
      icon: '🩸',
      targetBP: 'Respon Positif Terhadap Antiinflamasi Steroid',
      firstLineDrug: 'Triple Therapy: Flutikason/Budesonid + LABA + LAMA',
      rationale: 'Eosinofil tinggi menandakan inflamasi tipe-2 yang memberikan reduksi eksaserbasi signifikan dengan penambahan ICS.'
    }
  ],
  flowchartSteps: [
    {
      stepId: 'copd-step-1',
      stepNumber: 1,
      stageBadge: 'Tahap 1: Diagnosis & Karakterisasi',
      title: 'Konfirmasi Spirometri & Penilaian Grup ABE',
      subtitle: 'Spirometri Post-Bronkodilator FEV1/FVC < 0.70 & Penilaian Riwayat Eksaserbasi',
      description: 'Lakukan spirometri terstandar pasca 400 mcg salbutamol. Tentukan nilai rasio FEV1/FVC < 0.70 untuk memastikan keterbatasan aliran udara ireversibel. Skrining derajat gejala dengan kuesioner CAT dan hitung jumlah episode eksaserbasi 12 bulan terakhir.',
      branchType: 'general',
      drugs: [],
      escalationTrigger: 'Pasien telah terkonfirmasi PPOK dan dikelompokkan ke Grup A, B, atau E.',
      clinicalPearls: 'Nilai FEV1 semata tidak menentukan pemilihan obat pemeliharaan awal; Grup ABE 2024 berfokus pada gejala harian dan risiko eksaserbasi.'
    },
    {
      stepId: 'copd-step-2',
      stepNumber: 2,
      stageBadge: 'Tahap 2: Inisiasi Terapi Rumatan',
      title: 'Pemilihan Terapi Inisiasi Berdasarkan Grup ABE',
      subtitle: 'LAMA Tunggal untuk Grup A; LABA + LAMA untuk Grup B & Grup E',
      description: 'Untuk Grup A: Berikan bronkodilator kerja panjang tunggal (LAMA: Tiotropium). Untuk Grup B dan Grup E: GOLD 2024 merekomendasikan inisiasi langsung kombinasi LABA + LAMA karena superioritas bronkodilasi dan pencegahan eksaserbasi dibandingkan monoterapi.',
      branchType: 'single',
      drugs: [
        {
          drugName: 'Tiotropium Bromide',
          dosage: '18 mcg via DPI 1x/hari (atau 2.5 mcg Respimat 2 puff 1x/hari)',
          role: 'Lini Pertama LAMA (Grup A/B/E)',
          fornasTier: 'Faskes 2/3 (Spesialis Paru)',
          isPreferred: true
        },
        {
          drugName: 'Tiotropium + Olodaterol (Spiolto Respimat)',
          dosage: '2 puff inhalasi sekali sehari pada waktu yang sama',
          role: 'Pilihan Utama LABA + LAMA (Grup B & E)',
          fornasTier: 'Faskes 2/3',
          isPreferred: true
        },
        {
          drugName: 'Umeclidinium + Vilanterol (Anoro Ellipta)',
          dosage: '62.5 / 25 mcg 1 inhalasi sekali sehari',
          role: 'Alternatif LABA + LAMA (Grup B & E)',
          fornasTier: 'Faskes 2/3',
          isPreferred: true
        }
      ],
      escalationTrigger: 'Jika sesak napas berlanjut atau terjadi eksaserbasi ulang dalam masa pemeliharaan.',
      clinicalPearls: 'Kombinasi dua bronkodilator dengan mekanisme berbeda (muskarinik M3 antagonis + beta-2 agonis) menghasilkan relaksasi otot polos bronkus maksimal dengan efek samping minimal.'
    },
    {
      stepId: 'copd-step-3',
      stepNumber: 3,
      stageBadge: 'Tahap 3: Eskalasi Triple Therapy',
      title: 'Eskalasi ke Triple Therapy (LABA + LAMA + ICS)',
      subtitle: 'Pertimbangkan ICS Inhalasi Bila Eosinofil >= 300 sel/uL atau Eksaserbasi Berulang',
      description: 'Bila pasien pada kombinasi LABA+LAMA masih mengalami eksaserbasi berulang (>= 2x per tahun atau 1x rawat inap) DAN memiliki hitung eosinofil darah >= 100 sel/uL (sangat direkomendasikan bila >= 300 sel/uL), eskalasi ke Triple Therapy sediaan tunggal.',
      branchType: 'escalation',
      drugs: [
        {
          drugName: 'Fluticasone Furoate + Umeclidinium + Vilanterol (Trelegy Ellipta)',
          dosage: '100 / 62.5 / 25 mcg 1 inhalasi sekali sehari',
          role: 'Triple Therapy Sediaan Tunggal (Single-Inhaler)',
          fornasTier: 'Faskes 3',
          isPreferred: true
        },
        {
          drugName: 'Budesonide + Glycopyrronium + Formoterol (Breztri Aerosphere)',
          dosage: '160 / 7.2 / 4.8 mcg 2 puff dua kali sehari',
          role: 'Alternatif Triple Therapy MDI',
          fornasTier: 'Faskes 3',
          isPreferred: true
        }
      ],
      escalationTrigger: 'Eksaserbasi berulang berlanjut meski telah Triple Therapy maksimal dan teknik inhaler benar.',
      clinicalPearls: 'Edukasi pasien untuk selalu berkumur dengan air bersih pasca inhalasi Triple Therapy untuk mencegah kandidiasis oral dan suara serak.'
    },
    {
      stepId: 'copd-step-4',
      stepNumber: 4,
      stageBadge: 'Tahap 4: Tatalaksana Eksaserbasi Akut',
      title: 'Protokol Serangan Akut (AE-COPD)',
      subtitle: 'Bronkodilator Kerja Singkat, Steroid Sistemik 5 Hari, & Antibiotika Selektif',
      description: 'Berikan nebulisasi SABA (Salbutamol 2.5–5 mg) + SAMA (Ipratropium 0.5 mg) tiap 4–6 jam. Berikan Prednison oral 40 mg sekali sehari selama 5 hari (tidak perlu tapering). Berikan antibiotik 5–7 hari bila ada peningkatan purulensi sputum (warna kehijauan/kekuningan).',
      branchType: 'comorbid',
      drugs: [
        {
          drugName: 'Salbutamol + Ipratropium (Combivent UDV)',
          dosage: 'Nebulisasi 1 ampul tiap 4–6 jam PRN sesak akut',
          role: 'Bronkodilator Pelega Akut Gawat Darurat',
          fornasTier: 'Faskes 1/2/3',
          isPreferred: true
        },
        {
          drugName: 'Methylprednisolone Oral / IV',
          dosage: 'Oral 32–40 mg/hari (atau IV 40 mg 1–2x/hari) selama 5 hari',
          role: 'Antiinflamasi Akut Sistemik',
          fornasTier: 'Faskes 1/2/3',
          isPreferred: true
        },
        {
          drugName: 'Azithromycin Oral',
          dosage: '500 mg hari 1, lanjut 250 mg hari 2–5 (total 5 hari)',
          role: 'Antibiotik Pilihan Eksaserbasi Purulen',
          fornasTier: 'Faskes 1/2/3',
          isPreferred: true
        }
      ],
      escalationTrigger: 'Asidosis respiratorik berat (pH < 7.35, PaCO2 > 45 mmHg) memerlukan Ventilasi Mekanik Non-Invasif (NIV/BiPAP).',
      clinicalPearls: 'Durasi steroid sistemik pada eksaserbasi PPOK CUKUP 5 HARI (Trial REDUCE). Pemberian lebih dari 5-7 hari tidak memberikan manfaat tambahan dan meningkatkan risiko infeksi sekunder serta hiperglikemia.'
    }
  ],
  drugClassificationTable: [
    {
      id: 'copd-lama',
      drugClass: 'Long-Acting Muscarinic Antagonist (LAMA)',
      classCategory: 'other',
      exampleDrugs: [
        { name: 'Tiotropium Bromide', dailyDosage: '18 mcg via DPI 1x/hari atau 2.5 mcg Respimat 2 puff 1x/hari', fornasTier: 'Faskes 2/3' },
        { name: 'Glycopyrronium', dailyDosage: '50 mcg via DPI 1x/hari', fornasTier: 'Faskes 2/3' },
        { name: 'Umeclidinium', dailyDosage: '62.5 mcg via Ellipta 1x/hari', fornasTier: 'Faskes 2/3' }
      ],
      mechanismOfAction: 'Blokade selektif reseptor muskarinik M3 pada otot polos bronkus, menghambat bronkokonstriksi kolinergik basal.',
      clinicalIndications: 'Lini pertama pilihan utama untuk semua derajat PPOK simtomatik (Grup A, B, E); terbukti superior menurunkan angka eksaserbasi dibanding LABA monoterapi.',
      adverseEffects: 'Mulut kering (xerostomia), retensi urin ringan pada pria dengan BPH, glaukoma sudut tertutup bila terpapar mata langsung.',
      contraindications: 'Hipersensitivitas terhadap atropin atau derivatnya; glaukoma sudut tertutup sempit tanpa iridotomi.',
      monitoringKey: 'Keluhan retensi urin pada lansia dengan hiperplasia prostat; pastikan aerosol tidak mengenai mata.'
    },
    {
      id: 'copd-laba',
      drugClass: 'Long-Acting Beta-2 Agonist (LABA)',
      classCategory: 'other',
      exampleDrugs: [
        { name: 'Olodaterol', dailyDosage: '5 mcg via Respimat 2 puff 1x/hari', fornasTier: 'Faskes 2/3' },
        { name: 'Indacaterol', dailyDosage: '150–300 mcg via Breezhaler 1x/hari', fornasTier: 'Faskes 2/3' },
        { name: 'Formoterol Fumarate', dailyDosage: '12 mcg via DPI 2x/hari', fornasTier: 'Faskes 2/3' },
        { name: 'Salmeterol', dailyDosage: '50 mcg via MDI/DPI 2x/hari', fornasTier: 'Faskes 2/3' }
      ],
      mechanismOfAction: 'Stimulasi reseptor beta-2 adrenergik bronkus, meningkatkan cAMP intraseluler dan relaksasi otot polos saluran napas selama 12–24 jam.',
      clinicalIndications: 'Kombinasi bersama LAMA pada Grup B dan E; memperbaiki toleransi aktivitas fisik dan mengurangi hiperinflasi paru.',
      adverseEffects: 'Tremor halus jari tangan, takikardia, palpitasi, kram otot tungkai, hipokalemia ringan transien.',
      contraindications: 'Aritmia ventrikel tidak stabil, tirotoksikosis berat tidak terkontrol.',
      monitoringKey: 'Frekuensi denyut nadi dan tanda aritmia pada pasien dengan riwayat penyakit jantung iskemik.'
    },
    {
      id: 'copd-laba-lama',
      drugClass: 'Kombinasi Ganda LABA + LAMA (Dual Bronchodilators)',
      classCategory: 'other',
      exampleDrugs: [
        { name: 'Tiotropium + Olodaterol (Spiolto Respimat)', dailyDosage: '2.5/2.5 mcg, 2 puff 1x/hari', fornasTier: 'Faskes 2/3' },
        { name: 'Umeclidinium + Vilanterol (Anoro Ellipta)', dailyDosage: '62.5/25 mcg, 1 inhalasi 1x/hari', fornasTier: 'Faskes 2/3' },
        { name: 'Indacaterol + Glycopyrronium (Ultibro)', dailyDosage: '110/50 mcg, 1 kapsul inhalasi 1x/hari', fornasTier: 'Faskes 2/3' }
      ],
      mechanismOfAction: 'Mekanisme komplementer ganda: menghambat asetilkolin via M3 dan menstimulasi beta-2 adrenergik secara simultan untuk dilatasi bronkus maksimal.',
      clinicalIndications: 'Pilihan terapi inisiasi utama untuk PPOK Grup B dan Grup E (GOLD 2024); memperbaiki FEV1 dan skor kualitas hidup CAT secara signifikan.',
      adverseEffects: 'Mulut kering, batuk iritatif, kram otot, nasofaringitis.',
      contraindications: 'Alergi berat terhadap komponen formulasi atau protein susu (pada DPI tertentu).',
      monitoringKey: 'Evaluasi kepatuhan dan kemampuan inspirasi pasien terhadap jenis inhaler (Respimat vs DPI).'
    },
    {
      id: 'copd-triple',
      drugClass: 'Triple Therapy (ICS + LABA + LAMA Sediaan Tunggal)',
      classCategory: 'other',
      exampleDrugs: [
        { name: 'Fluticasone Furoate + Umeclidinium + Vilanterol (Trelegy Ellipta)', dailyDosage: '100/62.5/25 mcg, 1 inhalasi 1x/hari', fornasTier: 'Faskes 3' },
        { name: 'Budesonide + Glycopyrronium + Formoterol (Breztri Aerosphere)', dailyDosage: '160/7.2/4.8 mcg, 2 puff 2x/hari', fornasTier: 'Faskes 3' }
      ],
      mechanismOfAction: 'Kombinasi bronkodilasi ganda maksimal ditambah antiinflamasi steroid inhalasi untuk menekan infiltrasi eosinofilik dan neutrofilik saluran napas.',
      clinicalIndications: 'Pasien PPOK Grup E dengan eksaserbasi berulang dan hitung eosinofil darah >= 300 sel/uL (atau >= 100 sel/uL jika eksaserbasi berlanjut).',
      adverseEffects: 'Kandidiasis orofaringeal (thrush), disfonia (suara serak), peningkatan insidensi pneumonia bakterial.',
      contraindications: 'Riwayat infeksi mikobakterial paru aktif (TB aktif tanpa OAT); riwayat pneumonia bakterial berat berulang.',
      monitoringKey: 'Wajib kumur air bersih pasca hisap; awasi tanda dini demam dan perubahan sputum mencurigakan pneumonia.'
    }
  ],
  ebmReferences: [
    {
      id: 'ref-gold-2024',
      title: 'Global Strategy for the Diagnosis, Management, and Prevention of Chronic Obstructive Pulmonary Disease (2024 Report)',
      organization: 'GOLD Science Committee',
      year: '2024',
      scope: 'Internasional',
      summary: 'Menetapkan pengelompokan ABE terbaru, merekomendasikan inisiasi langsung kombinasi LABA+LAMA untuk Grup B dan E, serta memperjelas peran eosinofil darah sebagai biomarker respon penambahan ICS.',
      evidenceLevel: 'Level of Evidence A'
    },
    {
      id: 'ref-pdpi-copd',
      title: 'Pedoman Diagnosis & Penatalaksanaan PPOK di Indonesia',
      organization: 'Perhimpunan Dokter Paru Indonesia (PDPI)',
      year: '2023',
      scope: 'Nasional',
      summary: 'Standar nasional tatalaksana farmakoterapi PPOK stabil dan eksaserbasi akut, kriteria ketersediaan obat FORNAS BPJS di Faskes Primer dan Rujukan, serta panduan rehabilitasi paru komprehensif.',
      evidenceLevel: 'Konsensus Nasional Terakreditasi Kemenkes RI'
    }
  ]
};
