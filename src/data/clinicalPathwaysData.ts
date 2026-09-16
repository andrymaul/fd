export interface PathwayStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  timeline: string;
  category: 'inisiasi' | 'evaluasi' | 'kombinasi' | 'eskalasi' | 'rujukan';
  description: string;
  drugs: {
    name: string;
    dosage: string;
    role: string;
    fornasTier?: string;
  }[];
  targetCriteria: string[];
  triggersForNextStep: string;
  clinicalNotes: string;
}

export interface ClinicalPathway {
  id: string;
  guidelineId: string;
  diseaseName: string;
  category: string;
  organization: string;
  shortSummary: string;
  steps: PathwayStep[];
}

export const CLINICAL_PATHWAYS_DATABASE: ClinicalPathway[] = [
  // 1. DIABETES MELITUS TIPE 2
  {
    id: 'pathway-t2dm',
    guidelineId: 'guideline-t2dm',
    diseaseName: 'Diabetes Melitus Tipe 2 (DMT2) Dewasa',
    category: 'Endokrin & Metabolik',
    organization: 'PERKENI 2024 / ADA',
    shortSummary: 'Algoritma pengelolaan bertahap DMT2 dari monoterapi, kombinasi ganda, kombinasi tiga obat hingga inisiasi insulin basal.',
    steps: [
      {
        stepNumber: 1,
        title: 'Langkah 1: Inisiasi Monoterapi & Modifikasi Gaya Hidup',
        subtitle: 'Tahap Awal Terapi Pasca Diagnosis (HbA1c < 7.5% atau 7.5 - 9.0%)',
        timeline: 'Bulan ke 0 - 3',
        category: 'inisiasi',
        description: 'Mulai terapi lini pertama bersamaan dengan edukasi Terapi Nutrisi Medis (TNM) seimbang dan aktivitas fisik aerobik minimal 150 menit per minggu.',
        drugs: [
          {
            name: 'Metformin',
            dosage: '500 mg PO 1-2x/hari bersama makan, titrasi bertahap tiap 1-2 minggu hingga 1000 mg 2x/hari',
            role: 'Lini Pertama Pilihan',
            fornasTier: 'Faskes 1'
          }
        ],
        targetCriteria: [
          'Target Kadar HbA1c < 7.0% (atau < 6.5% pada usia muda tanpa risiko hipoglikemia)',
          'Glukosa Darah Puasa (GDP) 80 - 130 mg/dL',
          'Glukosa Darah 2 Jam Post-Prandial (GD2PP) < 180 mg/dL'
        ],
        triggersForNextStep: 'Jika setelah 3 BULAN evaluasi kadar HbA1c TETAP >= 7.0%, WAJIB ESKALASI KE LANGKAH 2 (Kombinasi Ganda).',
        clinicalNotes: 'Metformin aman untuk ginjal selama eGFR >= 30 mL/min. Jika eGFR 30-45 mL/min, batasi dosis maksimal 1000 mg/hari.'
      },
      {
        stepNumber: 2,
        title: 'Langkah 2: Terapi Kombinasi Ganda (Dual Oral Therapy)',
        subtitle: 'Penambahan Obat Kedua Berbasis Karakteristik Komorbid Pasien',
        timeline: 'Bulan ke 3 - 6',
        category: 'kombinasi',
        description: 'Pilih obat kedua berdasarkan keberadaan komplikasi kardiovaskular, penyakit ginjal kronik, atau gagal jantung.',
        drugs: [
          {
            name: 'Metformin + Empagliflozin / Dapagliflozin',
            dosage: 'Metformin 1000 mg 2x/hari + Empagliflozin 10-25 mg 1x/hari pagi (SGLT2-i)',
            role: 'Prioritas bila ada ASCVD / Gagal Jantung / CKD',
            fornasTier: 'Faskes 2/3'
          },
          {
            name: 'Metformin + Glimepiride',
            dosage: 'Metformin 1000 mg 2x/hari + Glimepiride 1-4 mg 1x/hari sebelum makan pagi',
            role: 'Alternatif Terjangkau (FORNAS Faskes 1)',
            fornasTier: 'Faskes 1'
          },
          {
            name: 'Metformin + Linagliptin / Vildagliptin',
            dosage: 'Metformin 1000 mg 2x/hari + Linagliptin 5 mg 1x/hari (DPP-4i)',
            role: 'Pilihan Aman Tanpa Risiko Hipoglikemia & Ramah Ginjal',
            fornasTier: 'Faskes 2/3'
          }
        ],
        targetCriteria: [
          'Kadar HbA1c < 7.0%',
          'Penurunan berat badan dan perbaikan tekanan darah (pada pemakaian SGLT2-i)',
          'Bebas episode hipoglikemia berulang (< 70 mg/dL)'
        ],
        triggersForNextStep: 'Jika setelah 3 BULAN terapi kombinasi ganda HbA1c MASIH >= 7.0%, lanjutkan ke Langkah 3 (Kombinasi Tiga Obat atau Inisiasi Insulin Basal).',
        clinicalNotes: 'SGLT2-Inhibitor (Empagliflozin/Dapagliflozin) memberikan manfaat kardio-renal independen yang menurunkan risiko kematian kardiovaskular dan memperlambat progresi gagal ginjal.'
      },
      {
        stepNumber: 3,
        title: 'Langkah 3: Terapi Kombinasi Tiga Obat atau Inisiasi Insulin Basal',
        subtitle: 'Intensifikasi Kontrol Glikemik Pasien Refrakter',
        timeline: 'Bulan ke 6 - 9',
        category: 'eskalasi',
        description: 'Jika kombinasi 2 obat gagal mencapai target atau HbA1c awal >= 9.0% disertai gejala dekompensasi metabolik, tambahkan obat ketiga atau mulai Insulin Basal malam.',
        drugs: [
          {
            name: 'Metformin + SGLT2-i + DPP-4i / Sulfonilurea',
            dosage: 'Kombinasi tiga obat oral dosis optimal',
            role: 'Triple Oral Therapy',
            fornasTier: 'Faskes 2/3'
          },
          {
            name: 'Insulin Basal (Glargine / Degludec)',
            dosage: 'Inisiasi 10 Unit (atau 0.1 - 0.2 Unit/kgBB) subkutan SEKALI SEHARI pada jam yang sama malam hari',
            role: 'Insulin Basal Lini Pertama',
            fornasTier: 'Faskes 1'
          }
        ],
        targetCriteria: [
          'Kadar HbA1c < 7.0% - 7.5%',
          'GDP pagi hari stabil 80 - 130 mg/dL setelah titrasi insulin basal (titrasi naik 2 Unit tiap 3 hari hingga GDP puasa normal)'
        ],
        triggersForNextStep: 'Jika dosis insulin basal sudah mencapai > 0.5 U/kgBB/hari atau HbA1c belum tercapai meski GDP normal (terjadi lonjakan post-prandial), masuk ke Langkah 4 (Intensifikasi Insulin Basal-Bolus).',
        clinicalNotes: 'Saat inisiasi insulin basal malam, obat pemacu sekresi insulin sulfonilurea (Glibenklamid/Glimepirid) sebaiknya diturunkan dosisnya atau dihentikan untuk mencegah hipoglikemia nokturnal.'
      },
      {
        stepNumber: 4,
        title: 'Langkah 4: Intensifikasi Regimen Insulin Kompleks & Rujukan Subspesialis',
        subtitle: 'Regimen Basal-Bolus atau Insulin Premix Harian',
        timeline: 'Jangka Panjang / Kasus Lanjut',
        category: 'rujukan',
        description: 'Diindikasikan pada kegagalan sel beta pankreas lanjut untuk mengontrol glukosa darah post-prandial.',
        drugs: [
          {
            name: 'Insulin Basal-Bolus (MDI)',
            dosage: 'Insulin Basal Glargine (40-50% TDD malam) + Insulin Kerja Cepat Aspart/Lispro (50-60% TDD terbagi 3 kali sebelum makan)',
            role: 'Regimen Baku Emas Intensif',
            fornasTier: 'Faskes 2/3'
          },
          {
            name: 'Insulin Premix (Biphasic Aspart 30/70)',
            dosage: 'Diberikan 2 kali sehari subkutan tepat sebelum makan pagi dan makan malam',
            role: 'Alternatif Praktis',
            fornasTier: 'Faskes 1'
          }
        ],
        targetCriteria: [
          'HbA1c individual (<7.0% s/d <8.0% pada geriatri komorbid kompleks)',
          'Pencegahan komplikasi makrovaskular (PJK, Stroke) dan mikrovaskular (Nefropati, Retinopati, Neuropati)'
        ],
        triggersForNextStep: 'Evaluasi berkala fungsi ginjal (eGFR/UACR), skrining retina mata tahunan, dan evaluasi kaki diabetik berkala.',
        clinicalNotes: 'Edukasi tanda dan penanganan mandiri hipoglikemia (aturan Rule of 15 dengan 15 gram glukosa murni) wajib dipahami pasien dan keluarga.'
      }
    ]
  },

  // 2. HIPERTENSI PRIMER DEWASA
  {
    id: 'pathway-hypertension',
    guidelineId: 'guideline-hypertension',
    diseaseName: 'Hipertensi Primer / Esensial Dewasa',
    category: 'Kardiovaskular',
    organization: 'PERKI 2023 / ISH / ESC (KMK 303/2026)',
    shortSummary: 'Algoritma tatalaksana bertahap hipertensi: Inisiasi kombinasi ganda dosis rendah, titrasi dosis penuh, kombinasi tiga obat, hingga tatalaksana hipertensi resisten.',
    steps: [
      {
        stepNumber: 1,
        title: 'Langkah 1: Inisiasi Terapi Kombinasi Ganda Dosis Rendah',
        subtitle: 'Rekomendasi Utama bagi Sebagian Besar Pasien Hipertensi (Derajat 1 & 2)',
        timeline: 'Bulan ke 0 - 1',
        category: 'inisiasi',
        description: 'Mulai terapi kombinasi 2 obat dosis rendah (Single Pill Combination jika tersedia) untuk efikasi kontrol tensi cepat dan perlindungan organ target.',
        drugs: [
          {
            name: 'Candesartan / Valsartan + Amlodipine',
            dosage: 'Candesartan 8 mg PO 1x/hari + Amlodipine 5 mg PO 1x/hari pagi/malam',
            role: 'Kombinasi ARB + CCB (Lini Pertama Pilihan Utama)',
            fornasTier: 'Faskes 1'
          },
          {
            name: 'Amlodipine (Monoterapi)',
            dosage: '5 - 10 mg PO 1x/hari (Khusus lansia frailty > 80 tahun atau hipertensi derajat 1 risiko sangat rendah)',
            role: 'Monoterapi Selektif',
            fornasTier: 'Faskes 1'
          }
        ],
        targetCriteria: [
          'Target Tekanan Darah < 140/90 mmHg dalam 1-3 bulan pertama',
          'Target Optimal < 130/80 mmHg pada usia 18-65 tahun jika dapat ditoleransi dengan baik'
        ],
        triggersForNextStep: 'Jika setelah 1 BULAN evaluasi tensi MASIH >= 140/90 mmHg, NAIKKAN KE LANGKAH 2 (Kombinasi Dosis Penuh).',
        clinicalNotes: 'Kombinasi ARB + CCB memiliki sinergi hemodinamik sangat baik; vasodilatasi arteriol dari ARB sekaligus mengurangi efek samping edema pergelangan kaki yang dipicu oleh Amlodipine.'
      },
      {
        stepNumber: 2,
        title: 'Langkah 2: Eskalasi ke Kombinasi Ganda Dosis Penuh',
        subtitle: 'Optimalisasi Dosis Regimen ARB + CCB',
        timeline: 'Bulan ke 1 - 2',
        category: 'kombinasi',
        description: 'Titrasi dosis komponen kombinasi ganda hingga dosis terapeutik maksimal yang aman.',
        drugs: [
          {
            name: 'Candesartan + Amlodipine (Dosis Maksimal)',
            dosage: 'Candesartan 16 mg PO 1x/hari + Amlodipine 10 mg PO 1x/hari',
            role: 'Dosis Penuh Kombinasi Ganda',
            fornasTier: 'Faskes 1'
          }
        ],
        targetCriteria: [
          'Tekanan Darah Terkontrol < 130/80 mmHg',
          'Tidak terdapat keluhan pusing ortostatik atau edema perifer berat'
        ],
        triggersForNextStep: 'Jika setelah 1 BULAN pada dosis penuh tensi TETAP >= 140/90 mmHg, LANJUTKAN KE LANGKAH 3 (Kombinasi Tiga Obat / Triple Therapy).',
        clinicalNotes: 'Pastikan kepatuhan minum obat harian pasien dan evaluasi asupan garam natrium diet harian (target < 2 gram natrium atau < 1 sendok teh garam dapur per hari).'
      },
      {
        stepNumber: 3,
        title: 'Langkah 3: Terapi Kombinasi Tiga Obat (Triple Therapy)',
        subtitle: 'Kombinasi ARB/ACEi + CCB + Diuretik Thiazide',
        timeline: 'Bulan ke 2 - 3',
        category: 'eskalasi',
        description: 'Tambahkan diuretik tiazid untuk mengatasi retensi natrium dan volume cairan intravaskular.',
        drugs: [
          {
            name: 'Candesartan + Amlodipine + HCT (Hydrochlorothiazide)',
            dosage: 'Candesartan 16 mg + Amlodipine 10 mg + HCT 12.5 - 25 mg PO 1x/hari pagi hari',
            role: 'Triple Combination Baku Emas',
            fornasTier: 'Faskes 1'
          }
        ],
        targetCriteria: [
          'Tekanan Darah Target < 130/80 mmHg',
          'Elektrolit serum (Kalium dan Natrium) serta asam urat stabil'
        ],
        triggersForNextStep: 'Jika tensi TETAP >= 140/90 mmHg meski telah menggunakan 3 obat dosis optimal termasuk diuretik, pasien didiagnosis HIPERTENSI RESISTEN → Masuk ke Langkah 4.',
        clinicalNotes: 'HCT diminum pagi hari untuk mencegah nokturia (sering terbangun buang air kecil di malam hari). Monitor kadar kalium serum berkala.'
      },
      {
        stepNumber: 4,
        title: 'Langkah 4: Tatalaksana Hipertensi Resisten & Rujukan Spesialis',
        subtitle: 'Penambahan Antagonis Reseptor Mineralokortikoid (MRA) atau Beta Blocker',
        timeline: 'Bulan ke 3 seterusnya',
        category: 'rujukan',
        description: 'Spironolactone adalah obat pilihan lini keempat paling efektif untuk hipertensi resisten.',
        drugs: [
          {
            name: 'Spironolactone',
            dosage: '25 - 50 mg PO sekali sehari pagi/siang',
            role: 'Lini Keempat Hipertensi Resisten',
            fornasTier: 'Faskes 1'
          },
          {
            name: 'Bisoprolol',
            dosage: '5 - 10 mg PO sekali sehari (terutama jika ada riwayat PJK, gagal jantung, atau resting HR > 80 bpm)',
            role: 'Alternatif / Indikasi Khusus',
            fornasTier: 'Faskes 1'
          }
        ],
        targetCriteria: [
          'Tekanan Darah Target < 130/80 mmHg',
          'Skrining penyebab hipertensi sekunder (hiperaldosteronisme primer, stenosis arteri renalis, OSA)'
        ],
        triggersForNextStep: 'Rujuk ke Dokter Spesialis Jantung (Sp.JP) atau Spesialis Penyakit Dalam (Sp.PD) untuk evaluasi lanjutan dan investigasi hipertensi sekunder.',
        clinicalNotes: 'Sebelum memulai Spironolactone, pastikan kadar Kalium serum < 4.5 mEq/L dan eGFR >= 30 mL/min untuk menghindari risiko hiperkalemia fatal.'
      }
    ]
  },

  // 3. ASMA BRONKIAL DEWASA
  {
    id: 'pathway-asthma',
    guidelineId: 'guideline-asthma',
    diseaseName: 'Asma Bronkial Dewasa & Remaja (Pedoman GINA 2024)',
    category: 'Respirasi & Alergi',
    organization: 'GINA 2024 / PDPI',
    shortSummary: 'Alur terapi GINA Track 1 berbasis anti-inflamasi pelega (MART: Budesonide-Formoterol) dari Step 1 hingga Step 5.',
    steps: [
      {
        stepNumber: 1,
        title: 'Step 1 - 2: Gejala Asma Ringan / Kurang dari 4-5 Hari per Minggu',
        subtitle: 'Kombinasi Dosis Rendah ICS-Formoterol HANYA Saat Timbul Gejala',
        timeline: 'Sesuai Kebutuhan (As-Needed)',
        category: 'inisiasi',
        description: 'GINA Track 1 merekomendasikan Budesonide-Formoterol dosis rendah sebagai pelega anti-inflamasi tunggal tanpa perlu inhaler SABA terpisah.',
        drugs: [
          {
            name: 'Budesonide-Formoterol Turbuhaler (160/4.5 mcg)',
            dosage: '1 hisapan saat timbul sesak / batuk (dapat diulang setelah beberapa menit bila perlu, maksimal 8-12 hisapan/hari)',
            role: 'Anti-Inflammatory Reliever (Pilihan Utama)',
            fornasTier: 'Faskes 2/3'
          }
        ],
        targetCriteria: [
          'Skor Asthma Control Test (ACT) = 25 (Terkontrol Penuh)',
          'Tidak pernah mengalami eksaserbasi akut yang membutuhkan kortikosteroid oral',
          'Bebas dari aktivitas yang terbatasi oleh asma'
        ],
        triggersForNextStep: 'Jika gejala timbul sebagian besar hari (>= 4-5 hari/minggu) atau terbangun malam akibat asma >= 1x/minggu (Skor ACT 20-24), NAIKKAN KE STEP 3.',
        clinicalNotes: 'Penggunaan SABA monoterapi (Salbutamol saja tanpa steroid inhalasi) SUDAH TIDAK DIREKOMENDASIKAN oleh GINA karena meningkatkan risiko serangan asma fatal dan remodeling saluran napas permanen.'
      },
      {
        stepNumber: 2,
        title: 'Step 3: Gejala Sebagian Besar Hari atau Terbangun Malam >= 1x/Minggu',
        subtitle: 'Terapi Pemeliharaan Rumatan Harian + Pelega (MART Protocol)',
        timeline: 'Penggunaan Harian Berkelanjutan',
        category: 'kombinasi',
        description: 'Gunakan ICS-Formoterol dosis rendah sebagai obat rumatan harian pagi dan malam, DITAMBAH hisapan ekstra jika timbul sesak.',
        drugs: [
          {
            name: 'Budesonide-Formoterol Turbuhaler (160/4.5 mcg)',
            dosage: 'Rumatan: 1 hisap 2 kali sehari (pagi dan malam) + 1 hisap ekstra saat timbul gejala sesak',
            role: 'MART (Maintenance and Reliever Therapy)',
            fornasTier: 'Faskes 2/3'
          }
        ],
        targetCriteria: [
          'Skor ACT >= 20 - 25',
          'Penggunaan inhaler pelega ekstra < 2 kali per minggu',
          'Fungsi paru FEV1 / APE membaik mendekati nilai prediksi normal'
        ],
        triggersForNextStep: 'Jika setelah 1-3 bulan kepatuhan dan teknik inhalasi baik namun asma TETAP TIDAK TERKONTROL (Skor ACT < 20), NAIKKAN KE STEP 4.',
        clinicalNotes: 'Wajib mengedukasi pasien untuk selalu berkumur dengan air putih dan membuangnya setelah menghisap steroid inhaler untuk mencegah infeksi jamur kandidiasis oral dan suara serak.'
      },
      {
        stepNumber: 3,
        title: 'Step 4: Asma Belum Terkontrol pada Dosis Rendah',
        subtitle: 'Eskalasi ke Dosis Medium ICS-Formoterol Rumatan Harian',
        timeline: 'Evaluasi tiap 1 - 3 Bulan',
        category: 'eskalasi',
        description: 'Tingkatkan dosis harian inhaler kombinasi untuk mengatasi inflamasi eosinofilik saluran napas yang lebih berat.',
        drugs: [
          {
            name: 'Budesonide-Formoterol (160/4.5 mcg)',
            dosage: 'Rumatan: 2 hisap 2 kali sehari (total 4 hisap rumatan/hari) + hisap ekstra jika timbul sesak',
            role: 'Medium-Dose MART',
            fornasTier: 'Faskes 2/3'
          }
        ],
        targetCriteria: [
          'Skor ACT >= 20',
          'Remisi eksaserbasi dan stabilitas fungsi paru APE'
        ],
        triggersForNextStep: 'Jika tetap sering mengalami kekambuhan berat atau faal paru rendah, masuk ke Step 5 (Asma Berat Refrakter).',
        clinicalNotes: 'Evaluasi faktor komorbid pemicu: Rhinitis alergi, GERD, obesitas, merokok pasif, atau konsumsi obat penghambat beta / NSAID.'
      },
      {
        stepNumber: 4,
        title: 'Step 5: Asma Berat Refrakter & Evaluasi Terapi Biologis',
        subtitle: 'Penambahan LAMA (Tiotropium) & Konsultasi Spesialis Paru',
        timeline: 'Rujukan Subspesialis Paru (Sp.P)',
        category: 'rujukan',
        description: 'Tatalaksana asma berat dengan terapi kombinasi tiga inhaler (Triple Inhaled Therapy: ICS + LABA + LAMA) atau terapi antibodi monoklonal biologis.',
        drugs: [
          {
            name: 'Tiotropium Respimat (LAMA)',
            dosage: '5 mcg (2 semprotan 2.5 mcg) inhalasi SEKALI SEHARI',
            role: 'Terapi Tambahan Antikolinergik Kerja Panjang',
            fornasTier: 'Faskes 2/3'
          },
          {
            name: 'Terapi Biologis Anti-IgE / Anti-IL5 (Omalizumab / Mepolizumab)',
            dosage: 'Injeksi subkutan berkala sesuai fenotipe asma berat eosinofilik / alergik',
            role: 'Terapi Target Subspesialistik',
            fornasTier: 'Faskes 3'
          }
        ],
        targetCriteria: [
          'Penurunan kebutuhan kortikosteroid sistemik oral',
          'Pencegahan rawat inap IGD dan penurunan morbiditas asma berat'
        ],
        triggersForNextStep: 'Pemantauan berkala setiap 3-6 bulan di poliklinik asma terpadu rumah sakit rujukan.',
        clinicalNotes: 'Hindari ketergantungan kortikosteroid oral harian jangka panjang karena risiko osteoporosis, katarak, diabetes, dan penekanan aksis adrenal.'
      }
    ]
  },

  // 4. GAGAL JANTUNG FRAKSI EJEKSI MENURUN (HFrEF)
  {
    id: 'pathway-hfref',
    guidelineId: 'guideline-hfref',
    diseaseName: 'Gagal Jantung Fraksi Ejeksi Menurun (HFrEF / LVEF <= 40%)',
    category: 'Kardiovaskular',
    organization: 'PERKI 2023 / ESC Heart Failure Guidelines',
    shortSummary: 'Algoritma inisiasi cepat 4 Pilar Terapi Baku Emas (Fantastic Four) dan protokol titrasi dosis optimal.',
    steps: [
      {
        stepNumber: 1,
        title: 'Fase 1: Inisiasi Cepat 4 Pilar Baku Emas (*The Fantastic Four*)',
        subtitle: 'Memulai Seluruh 4 Obat Sejak Awal Diagnosis secara Bersamaan atau Sekuens Cepat',
        timeline: 'Minggu ke 0 - 2 Pasca Diagnosis / Stabilisasi',
        category: 'inisiasi',
        description: 'Empat kelas obat ini terbukti secara klinis menurunkan angka kematian kardiovaskular dan re-hospitalisasi hingga > 60%.',
        drugs: [
          {
            name: 'Sacubitril/Valsartan (ARNI) atau Ramipril/Captopril',
            dosage: 'Sacubitril/Valsartan 24/26 mg atau 49/51 mg PO 2x/hari (atau Ramipril 2.5 mg 1x/hari)',
            role: 'Pilar 1: Modulator Neurohormonal RAS',
            fornasTier: 'Faskes 2/3'
          },
          {
            name: 'Bisoprolol / Carvedilol',
            dosage: 'Bisoprolol mulai 1.25 - 2.5 mg PO 1x/hari pagi (diberikan saat kondisi euvolemik/kering)',
            role: 'Pilar 2: Beta Blocker Kardioselektif',
            fornasTier: 'Faskes 1'
          },
          {
            name: 'Spironolactone',
            dosage: '25 mg PO sekali sehari pagi/siang',
            role: 'Pilar 3: Antagonis Reseptor Mineralokortikoid (MRA)',
            fornasTier: 'Faskes 1'
          },
          {
            name: 'Dapagliflozin / Empagliflozin',
            dosage: '10 mg PO SEKALI SEHARI pagi hari dosis tetap (tidak perlu titrasi dosis)',
            role: 'Pilar 4: SGLT2 Inhibitor',
            fornasTier: 'Faskes 2/3'
          }
        ],
        targetCriteria: [
          'Pasien mencapai kondisi klinis euvolemik (tidak ada ronki paru, edema tungkai, atau JVP meningkat)',
          'Toleransi hemodinamik baik (Tensi Sistolik >= 95-100 mmHg, Laju Nadi 60-70 bpm)'
        ],
        triggersForNextStep: 'Lanjutkan ke Fase 2 (Titrasi Naik Dosis Bertahap) setiap 2 - 4 minggu.',
        clinicalNotes: 'Furosemide (diuretik loop) diberikan HANYA jika terdapat tanda kongesti/edema cairan, dan diturunkan dosisnya segera setelah pasien kering (euvolemik).'
      },
      {
        stepNumber: 2,
        title: 'Fase 2: Titrasi Naik Dosis Bertahap Menuju Dosis Target Maksimal',
        subtitle: 'Optimalisasi Dosis Setiap 2 - 4 Minggu Sesuai Panduan Klinis',
        timeline: 'Bulan ke 1 - 3',
        category: 'eskalasi',
        description: 'Tingkatkan dosis ARNI dan Beta Blocker secara bertahap hingga mencapai dosis target uji klinis yang memberikan proteksi mortalitas tertinggi.',
        drugs: [
          {
            name: 'Sacubitril/Valsartan (Target Dosis Penuh)',
            dosage: 'Titrasi naik hingga target 97/103 mg PO 2 KALI SEHARI',
            role: 'Dosis Target ARNI',
            fornasTier: 'Faskes 2/3'
          },
          {
            name: 'Bisoprolol (Target Dosis Penuh)',
            dosage: 'Titrasi naik bertahap (1.25 → 2.5 → 5 → 7.5 → 10 mg 1x/hari, target resting HR 55-60 bpm)',
            role: 'Dosis Target Beta Blocker',
            fornasTier: 'Faskes 1'
          },
          {
            name: 'Spironolactone (Target Dosis Penuh)',
            dosage: '25 - 50 mg PO sekali sehari',
            role: 'Dosis Target MRA',
            fornasTier: 'Faskes 1'
          }
        ],
        targetCriteria: [
          'Perbaikan Kelas Fungsional NYHA (dari NYHA III/IV membaik ke NYHA I/II)',
          'Penurunan kadar biomarker NT-proBNP > 30% dari basal',
          'Peningkatan Fraksi Ejeksi Ventrikel Kiri (LVEF) pada evaluasi ekokardiografi 3-6 bulan'
        ],
        triggersForNextStep: 'Jika LVEF tetap <= 35% dan timbul aritmia ventrikel atau QRS lebar > 130 ms, evaluasi untuk pemasangan terapi alat (ICD / CRT).',
        clinicalNotes: 'Pantau ketat Kreatinin Serum (eGFR) dan Kalium serum 1-2 minggu pasca setiap kenaikan dosis ARNI atau MRA. Kenaikan kreatinin hingga 30% dari basal masih dianggap respons hemodinamik aman.'
      }
    ]
  },

  // 5. DISLIPIDEMIA & PENCEGAHAN KARDIOVASKULAR (ASCVD)
  {
    id: 'pathway-dyslipidemia',
    guidelineId: 'guideline-dyslipidemia',
    diseaseName: 'Dislipidemia & Pencegahan Kardiovaskular (ASCVD)',
    category: 'Kardiovaskular',
    organization: 'PERKI 2023 / ESC Lipid Guidelines',
    shortSummary: 'Alur terapi intensitas Statin, penambahan Ezetimibe, hingga terapi target PCSK9 Inhibitor sesuai kategori risiko.',
    steps: [
      {
        stepNumber: 1,
        title: 'Langkah 1: Stratifikasi Risiko & Inisiasi Statin Intensitas Tinggi/Sedang',
        subtitle: 'Pemilihan Dosis Statin Awal Berdasarkan Kategori Risiko Kardiovaskular',
        timeline: 'Bulan ke 0 - 2',
        category: 'inisiasi',
        description: 'Pasien risiko tinggi/sangat tinggi (pasca serangan jantung, stroke, DM + komorbid) wajib langsung memulai Statin Intensitas Tinggi.',
        drugs: [
          {
            name: 'Atorvastatin / Rosuvastatin (Statin Intensitas Tinggi)',
            dosage: 'Atorvastatin 40 - 80 mg atau Rosuvastatin 20 - 40 mg PO 1x/hari malam hari',
            role: 'Lini Pertama Risiko Tinggi / Sekunder (Target Turun LDL >= 50%)',
            fornasTier: 'Faskes 1'
          },
          {
            name: 'Simvastatin / Atorvastatin (Statin Intensitas Sedang)',
            dosage: 'Simvastatin 20 - 40 mg atau Atorvastatin 20 mg PO 1x/hari malam hari',
            role: 'Lini Pertama Risiko Menengah (Target Turun LDL 30-49%)',
            fornasTier: 'Faskes 1'
          }
        ],
        targetCriteria: [
          'Risiko Sangat Tinggi / Ekstrem: Target LDL < 55 mg/dL (dan turun >= 50%)',
          'Risiko Tinggi: Target LDL < 70 mg/dL',
          'Risiko Menengah: Target LDL < 100 mg/dL'
        ],
        triggersForNextStep: 'Lakukan evaluasi profil lipid ulang setelah 4 - 12 MINGGU. Jika target angka LDL BELUM TERCAPAI pada dosis statin maksimal yang ditoleransi, NAIKKAN KE LANGKAH 2 (Kombinasi Ezetimibe).',
        clinicalNotes: 'Pemeriksaan enzim transaminase SGOT/SGPT awal direkomendasikan. Nyeri otot mialgia ringan jarang berkembang menjadi rhabdomyolysis.'
      },
      {
        stepNumber: 2,
        title: 'Langkah 2: Terapi Kombinasi Statin Dosis Maksimal + Ezetimibe',
        subtitle: 'Penghambatan Ganda: Sintesis Kolesterol di Hepar + Absorpsi Kolesterol di Usus',
        timeline: 'Bulan ke 2 - 4',
        category: 'kombinasi',
        description: 'Penambahan Ezetimibe memberikan penurunan tambahan kadar LDL sebesar 15 - 20%.',
        drugs: [
          {
            name: 'Atorvastatin 40 mg + Ezetimibe',
            dosage: 'Atorvastatin 40 mg + Ezetimibe 10 mg PO SEKALI SEHARI malam hari',
            role: 'Kombinasi Statin + Ezetimibe Baku Emas',
            fornasTier: 'Faskes 2/3'
          }
        ],
        targetCriteria: [
          'Tercapainya target agresif LDL < 55 mg/dL pada pasien pasca Sindrom Koroner Akut atau riwayat PCI/CABG',
          'Tidak terdapat kenaikan enzim hepar > 3x batas atas normal'
        ],
        triggersForNextStep: 'Jika pada pasien risiko sangat tinggi target LDL tetap belum tercapai dengan Statin dosis maksimal + Ezetimibe, pertimbangkan Langkah 3 (Inhibitor PCSK9).',
        clinicalNotes: 'Ezetimibe bekerja spesifik menghambat transporter protein Niemann-Pick C1-Like 1 (NPC1L1) di brush border epitel usus halus.'
      }
    ]
  },
  // 6. TUBERKULOSIS PARU SENSITIF OBAT (SO-TB) DEWASA
  {
    id: 'pathway-tb-pulmonary',
    guidelineId: 'guideline-tb-pulmonary',
    diseaseName: 'Tuberkulosis Paru Sensitif Obat (SO-TB) Dewasa',
    category: 'Infeksi & Respirasi',
    organization: 'Kemenkes RI 2024 / WHO',
    shortSummary: 'Protokol tata laksana standar SO-TB kasus baru dewasa: Fase Intensif 2 bulan (2RHZE) dilanjutkan Fase Lanjutan 4 bulan (4RH) dengan pemantauan dahak serial mikroskopis/TCM dan profilaksis hepatotoksisitas.',
    steps: [
      {
        stepNumber: 1,
        title: 'Langkah 1: Fase Intensif 2 Bulan (2RHZE / 4 FDC)',
        subtitle: 'Inisiasi Terapi Bakterisidal Cepat untuk Membunuh Kuman dan Menurunkan Penularan',
        timeline: 'Bulan ke 0 - 2 (56 Dosis Harian)',
        category: 'inisiasi',
        description: 'Pemberian paduan 4 Obat Anti-Tuberkulosis (OAT) dosis tetap (FDC: Rifampisin 150 mg, Isoniazid 75 mg, Pirazinamid 400 mg, Etambutol 275 mg) setiap hari diminum pagi hari saat perut kosong di bawah pengawasan Pengawas Menelan Obat (PMO).',
        drugs: [
          {
            name: 'FDC 4-KDT (Rifampisin + INH + Pirazinamid + Etambutol)',
            dosage: 'Berat 30-37 kg: 2 tab/hari; 38-54 kg: 3 tab/hari; 55-70 kg: 4 tab/hari; >70 kg: 5 tab/hari PO 1x/hari perut kosong',
            role: 'Paduan Fase Intensif Standar Baku Emas',
            fornasTier: 'Faskes 1'
          },
          {
            name: 'Piridoksin (Vitamin B6)',
            dosage: '25 - 50 mg PO SEKALI SEHARI',
            role: 'Pencegahan Neuropati Perifer Imbas INH',
            fornasTier: 'Faskes 1'
          }
        ],
        targetCriteria: [
          'Konversi sputum BTA/TCM menjadi negatif pada akhir bulan ke-2',
          'Peningkatan berat badan dan perbaikan nafsu makan',
          'Resolusi demam malam, batuk berdahak, dan keringat malam'
        ],
        triggersForNextStep: 'Periksa dahak ulang pada akhir bulan ke-2. Bila BTA dahak NEGATIF, LANJUTKAN KE LANGKAH 2 (Fase Lanjutan 4RH). Bila BTA tetap positif, lakukan tes resistensi molekuler (TCM) ulang dan evaluasi kepatuhan minum obat.',
        clinicalNotes: 'Waspada Hepatotoksisitas (DILI - Drug-Induced Liver Injury): Jika SGPT melonjak > 3x batas normal dengan gejala (mual/ikterus) atau > 5x tanpa gejala, STOP SEMENTARA semua OAT hepatotoksik (R, H, Z) dan berikan Streptomisin + Etambutol sambil menunggu fungsi hati normal.'
      },
      {
        stepNumber: 2,
        title: 'Langkah 2: Fase Lanjutan 4 Bulan (4RH / 2 FDC)',
        subtitle: 'Sterilisasi Basil TB Persisten (Dormant) untuk Mencegah Kekambuhan (Relaps)',
        timeline: 'Bulan ke 3 - 6 (112 Dosis Harian)',
        category: 'evaluasi',
        description: 'Pemberian paduan 2 OAT (Rifampisin 150 mg + Isoniazid 75 mg) setiap hari selama 4 bulan penuh hingga tuntas total 6 bulan masa pengobatan.',
        drugs: [
          {
            name: 'FDC 2-KDT (Rifampisin + Isoniazid)',
            dosage: 'Sesuai berat badan: 38-54 kg: 3 tab/hari; 55-70 kg: 4 tab/hari PO 1x/hari saat perut kosong',
            role: 'Paduan Fase Lanjutan Baku Emas',
            fornasTier: 'Faskes 1'
          },
          {
            name: 'Piridoksin (Vitamin B6)',
            dosage: '25 mg PO 1x/hari',
            role: 'Profilaksis Neuropati',
            fornasTier: 'Faskes 1'
          }
        ],
        targetCriteria: [
          'Dahak BTA negatif pada bulan ke-5 dan akhir bulan ke-6 pengobatan',
          'Resolusi gambaran infiltrat pada foto toraks evaluasi',
          'Status akhir: Dinyatakan SEMBUH / PENGOBATAN LENGKAP'
        ],
        triggersForNextStep: 'Evaluasi akhir pengobatan bulan ke-6. Jika BTA positif pada bulan ke-5 atau ke-6, pasien diklasifikasikan GAGAL PENGOBATAN dan wajib dirujuk ke faskes rujukan TB-RO (Resisten Obat).',
        clinicalNotes: 'Rifampisin adalah inducer kuat CYP3A4: menurunkan efektivitas pil/suntik KB hormonal (ganti ke IUD non-hormonal), serta menurunkan kadar obat kardiovaskular, antidiabetik oral, dan antikoagulan.'
      }
    ]
  },
  // 7. PNEUMONIA KOMUNITAS (CAP) DEWASA
  {
    id: 'pathway-cap',
    guidelineId: 'guideline-cap',
    diseaseName: 'Pneumonia Komunitas (Community-Acquired Pneumonia / CAP) Dewasa',
    category: 'Infeksi & Respirasi',
    organization: 'PDPI 2023 / IDSA-ATS',
    shortSummary: 'Stratifikasi klinis berbasis Skor CURB-65 untuk menentukan tempat perawatan (Rawat Jalan vs Rawat Inap Bangsal vs ICU) dan pemilihan regimen antibiotik empirik berbasis bukti.',
    steps: [
      {
        stepNumber: 1,
        title: 'Langkah 1: Stratifikasi CURB-65 & Terapi Rawat Jalan (Skor 0 - 1)',
        subtitle: 'Pasien Risiko Rendah Tanpa Komorbiditas / Tanpa Faktor Risiko MRSA/Pseudomonas',
        timeline: 'Hari ke 1 - 5 (Durasi Terapi 5 Hari)',
        category: 'inisiasi',
        description: 'Skor CURB-65 = 0 atau 1 (Confusion: 0, Ureum > 7 mmol/L: 0, Resp rate >= 30: 0, BP < 90/60: 0, Usia >= 65: 0-1). Pasien aman dirawat jalan dengan terapi oral tunggal atau kombinasi.',
        drugs: [
          {
            name: 'Amoxicillin Dosis Tinggi',
            dosage: '1000 mg PO TIAP 8 JAM (3x sehari) selama 5 hari',
            role: 'Lini Pertama Rawat Jalan (Tanpa Komorbid)',
            fornasTier: 'Faskes 1'
          },
          {
            name: 'Azithromycin (Alternatif / Kombinasi Atipik)',
            dosage: '500 mg PO hari ke-1, lalu 250 mg PO hari ke 2-5 (atau 500 mg 1x/hari 3 hari)',
            role: 'Cakupan Bakteri Atipik (Mycoplasma/Chlamydia)',
            fornasTier: 'Faskes 1'
          }
        ],
        targetCriteria: [
          'Resolusi demam (< 37.8 C) dalam 48 - 72 jam pertama',
          'Laju pernapasan normal (< 24 x/menit) dan SpO2 > 95% udara kamar',
          'Perbaikan batuk dan sesak napas'
        ],
        triggersForNextStep: 'Evaluasi klinis pada hari ke-3 (48-72 jam). Jika gejala MEMBURUK atau sesak napas bertambah berat, ESKALASI KE LANGKAH 2 (Rawat Inap Bangsal).',
        clinicalNotes: 'Jika pasien memiliki komorbid (DMT2, gagal jantung, PPOK, penyakit ginjal kronis), gunakan kombinasi Co-Amoxiclav 625 mg 3x/hari + Makrolida atau Levofloksasin 750 mg 1x/hari.'
      },
      {
        stepNumber: 2,
        title: 'Langkah 2: Terapi Rawat Inap Bangsal Non-ICU (Skor CURB-65 = 2)',
        subtitle: 'Pasien Risiko Menengah: Indikasi Rawat Inap dengan Terapi Parenteral Kombinasi',
        timeline: 'Hari ke 1 - 7 (Switch Oral bila Pasien Stabil)',
        category: 'kombinasi',
        description: 'Pasien dengan Skor CURB-65 = 2 memerlukan rawat inap di bangsal intermediate. Berikan kombinasi Beta-laktam IV + Makrolida (atau Monoterapi Fluorokuinolon Respirasi).',
        drugs: [
          {
            name: 'Ceftriaxone IV + Azithromycin IV/PO',
            dosage: 'Ceftriaxone 2 gram IV TIAP 24 JAM + Azithromycin 500 mg IV/PO TIAP 24 JAM',
            role: 'Kombinasi Standar Rawat Inap Baku Emas',
            fornasTier: 'Faskes 2/3'
          },
          {
            name: 'Levofloxacin IV (Alternatif Monoterapi)',
            dosage: '750 mg IV TIAP 24 JAM (infus lambat 90 menit)',
            role: 'Fluorokuinolon Respirasi Monoterapi',
            fornasTier: 'Faskes 2/3'
          }
        ],
        targetCriteria: [
          'Kriteria Stabilitas Klinis: Afebris >= 48 jam, HR <= 100, RR <= 24, Tekanan Darah Sistolik >= 90 mmHg, SpO2 >= 92%',
          'Toleransi asupan oral membaik'
        ],
        triggersForNextStep: 'Jika pasien memenuhi kriteria stabilitas klinis, lakukan SWITCH DARI IV KE ORAL (Step-Down). Jika pasien memburuk (syok septik atau butuh ventilator mekanik), SEGERA TRANSFER KE ICU (Skor CURB-65 >= 3).',
        clinicalNotes: 'Durasi terapi antibiotik minimal 5 hari; hentikan jika pasien sudah afebris minimal 48 jam dan stabil secara klinis.'
      }
    ]
  },
  // 8. PENYAKIT PARU OBSTRUKTIF KRONIK (PPOK)
  {
    id: 'pathway-copd',
    guidelineId: 'guideline-copd',
    diseaseName: 'Penyakit Paru Obstruktif Kronik (PPOK) Dewasa',
    category: 'Infeksi & Respirasi',
    organization: 'GOLD 2024 / PDPI',
    shortSummary: 'Algoritma inisiasi dan eskalasi terapi farmakologis PPOK berdasarkan klasifikasi kelompok GOLD A, B, dan E (Exacerbation) serta tata laksana eksaserbasi akut.',
    steps: [
      {
        stepNumber: 1,
        title: 'Langkah 1: Inisiasi Terapi Pemeliharaan Berbasis Grup GOLD A, B, E',
        subtitle: 'Penilaian Beban Gejala (mMRC / CAT) dan Riwayat Eksaserbasi Tahunan',
        timeline: 'Bulan ke 0 - 3',
        category: 'inisiasi',
        description: 'Pilih bronkodilator inisial: Grup A (mMRC 0-1, CAT <10, 0 eksaserbasi) = Bronkodilator tunggal (SABA/LAMA/LABA); Grup B (mMRC >=2, CAT >=10) = Kombinasi LABA + LAMA; Grup E (>=2 eksaserbasi sedang atau >=1 rawat inap) = Kombinasi LABA + LAMA (pertimbangkan + ICS jika Eosinofil darah >= 300 sel/uL).',
        drugs: [
          {
            name: 'Tiotropium (LAMA Inhaler)',
            dosage: '18 mcg via HandiHaler 1x/hari (atau Respimat 2.5 mcg 2 semprot 1x/hari)',
            role: 'Antimuskarinik Kerja Panjang (LAMA Pilihan)',
            fornasTier: 'Faskes 2/3'
          },
          {
            name: 'Indacaterol / Salmeterol (LABA)',
            dosage: 'Sesuai sediaan DPI/MDI inhaler 1-2x/hari',
            role: 'Beta-2 Agonis Kerja Panjang (LABA)',
            fornasTier: 'Faskes 2/3'
          }
        ],
        targetCriteria: [
          'Penurunan frekuensi sesak napas (skor mMRC menurun)',
          'Peningkatan toleransi aktivitas fisik harian',
          'Pencegahan terjadinya episode eksaserbasi akut'
        ],
        triggersForNextStep: 'Evaluasi respons terapi, teknik inhaler, dan kepatuhan setiap 3 bulan. Jika pasien tetap sesak napas atau mengalami eksaserbasi berulang, ESKALASI KE LANGKAH 2 (Kombinasi Ganda / Triple Therapy).',
        clinicalNotes: 'Edukasi TEKNIK INHALER adalah kunci utama! Lebih dari 60% kegagalan terapi PPOK disebabkan kesalahan teknik menghirup obat.'
      },
      {
        stepNumber: 2,
        title: 'Langkah 2: Tata Laksana Eksaserbasi Akut PPOK (AECOPD)',
        subtitle: 'Peningkatan Akut Sesak Napas, Volume Dahak, dan Purulensi Dahak (Kriteria Anthonisen)',
        timeline: 'Hari ke 1 - 5 (Penanganan Akut)',
        category: 'eskalasi',
        description: 'Berikan terapi tiga pilar eksaserbasi akut: Bronkodilator kerja cepat nebulisasi, Kortikosteroid sistemik jangka pendek (5 hari), dan Antibiotik empirik (bila terdapat peningkatan purulensi dahak).',
        drugs: [
          {
            name: 'Combivent / Ventolin + Atrovent Nebulisasi',
            dosage: 'Salbutamol 2.5 mg + Ipratropium 0.5 mg nebulisasi tiap 4-6 jam',
            role: 'Bronkodilator Akut SABA + SAMA',
            fornasTier: 'Faskes 1'
          },
          {
            name: 'Metilprednisolon Oral / Prednison',
            dosage: 'Prednison 40 mg PO (atau Metilprednisolon 32 mg) SEKALI SEHARI selama 5 HARI SAJA',
            role: 'Kortikosteroid Sistemik Jangka Pendek',
            fornasTier: 'Faskes 1'
          },
          {
            name: 'Azithromycin / Amoxicillin-Clavulanate',
            dosage: 'Azithromycin 500 mg 1x/hari atau Co-Amoxiclav 625 mg 3x/hari selama 5 hari',
            role: 'Antibiotik Empirik Eksaserbasi Purulen',
            fornasTier: 'Faskes 1'
          }
        ],
        targetCriteria: [
          'Perbaikan laju pernapasan dan penurunan kerja otot bantu napas',
          'Target SpO2 terkontrol: 88 - 92% (JANGAN berikan target 100% pada PPOK karena risiko retensi CO2 / narkosis hiperkapnia)',
          'Dahak menjadi jernih dan berkurang'
        ],
        triggersForNextStep: 'Setelah eksaserbasi teratasi dalam 5 hari, kembalikan ke terapi pemeliharaan jangka panjang dan evaluasi ulang indikasi Triple Therapy (LABA + LAMA + ICS).',
        clinicalNotes: 'Kortikosteroid sistemik pada PPOK eksaserbasi CUKUP DIBERIKAN 5 HARI (studi REDUCE membuktikan durasi 5 hari sama efektifnya dengan 14 hari dan jauh lebih minim komplikasi).'
      }
    ]
  },
  // 9. GOUT ARTRITIS AKUT & HIPERURISEMIA KRONIS
  {
    id: 'pathway-gout',
    guidelineId: 'guideline-gout',
    diseaseName: 'Gout Artritis Akut & Hiperurisemia Kronis',
    category: 'Reumatologi & Muskuloskeletal',
    organization: 'IRA 2023 / ACR',
    shortSummary: 'Penanganan dua fase komprehensif: Fase 1 Peredaan nyeri radang serangan gout akut (Flare) dilanjutkan Fase 2 Penurunan asam urat jangka panjang (Treat-to-Target < 6 mg/dL) dengan profilaksis flare.',
    steps: [
      {
        stepNumber: 1,
        title: 'Langkah 1: Peredaan Cepat Serangan Gout Akut (Flare)',
        subtitle: 'Inisiasi dalam 24 Jam Pertama Sejak Awitan Nyeri Sendi Akut',
        timeline: 'Hari ke 1 - 7',
        category: 'inisiasi',
        description: 'Pilih salah satu dari 3 modalitas anti-inflamasi lini pertama (Kolkisin dosis rendah, NSAID, atau Kortikosteroid) berdasarkan komorbiditas ginjal, jantung, dan lambung pasien.',
        drugs: [
          {
            name: 'Kolhisin (Colchicine) Dosis Rendah',
            dosage: 'Loading 1 mg (2 tab 0.5 mg) PO segera, diikuti 0.5 mg 1 jam kemudian (Total hari-1: 1.5 mg). Lanjutkan 0.5 mg 1-2x/hari hingga nyeri mereda.',
            role: 'Lini Pertama Pilihan (Efikasi Terbaik dalam 12-24 jam pertama)',
            fornasTier: 'Faskes 1'
          },
          {
            name: 'Natrium Diklofenak / Meloxicam',
            dosage: 'Na Diklofenak 50 mg 2-3x/hari sesudah makan (atau Meloxicam 15 mg 1x/hari)',
            role: 'Alternatif NSAID (Bila tidak ada gangguan ginjal/ulkus peptikum)',
            fornasTier: 'Faskes 1'
          },
          {
            name: 'Metilprednisolon Oral (Alternatif Gangguan Ginjal)',
            dosage: 'Metilprednisolon 16–32 mg PO sehari, tappering off dalam 7–10 hari',
            role: 'Pilihan Utama pada Gagal Ginjal (CKD) / Lansia',
            fornasTier: 'Faskes 1'
          }
        ],
        targetCriteria: [
          'Pengurangan skala nyeri sendi >= 50% dalam 24 jam pertama',
          'Resolusi eritema, bengkak, dan nyeri tekan sendi (biasanya MTP-1 / podagra) dalam 5-7 hari'
        ],
        triggersForNextStep: 'Setelah fase akut flare TERKONTROL (atau bersamaan pada pasien yang sudah rutin minum Allopurinol), INISIASI LANGKAH 2 (Urate Lowering Therapy).',
        clinicalNotes: 'JANGAN PERNAH MENGHENTIKAN Allopurinol jika pasien sedang rutin meminumnya saat terjadi serangan akut! Perubahan mendadak kadar asam urat darah justru memperparah dan memperpanjang peradangan sendi.'
      },
      {
        stepNumber: 2,
        title: 'Langkah 2: Terapi Penurun Asam Urat Jangka Panjang (ULT: Treat-to-Target)',
        subtitle: 'Inisiasi Dimulai Dosis Rendah + Profilaksis Anti-inflamasi Bersamaan',
        timeline: 'Bulan ke 1 s/d Seumur Hidup (Evaluasi Berkala Tiap 2 - 4 Minggu)',
        category: 'kombinasi',
        description: 'Inisiasi Allopurinol dimulai dari dosis rendah (100 mg/hari, atau 50 mg pada CKD) untuk mencegah presipitasi kristal urat akut. WAJIB DISERTAI profilaksis anti-inflamasi (Kolkisin 0.5 mg 1x/hari) selama minimal 3–6 bulan.',
        drugs: [
          {
            name: 'Allopurinol (Inhibitor Xantin Oksidase)',
            dosage: 'Awal 100 mg PO 1x/hari sesudah makan. Titrasi naik tiap 2-4 minggu dengan 100 mg hingga target tercapai (Maksimal 600-800 mg/hari)',
            role: 'Lini Pertama Penurun Asam Urat (ULT) Baku Emas',
            fornasTier: 'Faskes 1'
          },
          {
            name: 'Kolhisin (Colchicine Profilaksis)',
            dosage: '0.5 mg PO SEKALI SEHARI (malam hari)',
            role: 'Profilaksis Mencegah Mobilization Flare (Wajib 3-6 Bulan)',
            fornasTier: 'Faskes 1'
          },
          {
            name: 'Febuxostat (Alternatif Alergi Allopurinol)',
            dosage: '40 - 80 mg PO SEKALI SEHARI sesudah makan',
            role: 'Inhibitor Xantin Oksidase Non-Purin (Faskes 2/3)',
            fornasTier: 'Faskes 2/3'
          }
        ],
        targetCriteria: [
          'Target Asam Urat Serum: < 6.0 mg/dL (360 umol/L) pada seluruh pasien gout',
          'Target Asam Urat Lebih Agresif: < 5.0 mg/dL pada pasien dengan tofus gout berat atau erosi sendi radiologis',
          'Bebas dari serangan flare akut berulang'
        ],
        triggersForNextStep: 'Periksa asam urat serum setiap 2-4 minggu selama fase titrasi. Jika target < 6.0 mg/dL tercapai stabil, pantau asam urat setiap 6 bulan seumur hidup.',
        clinicalNotes: 'Waspada Reaksi Alergi Berat Allopurinol (AHS - Allopurinol Hypersensitivity Syndrome / SJS / DRESS): Segera hentikan obat dan dilarang rechallenge bila muncul ruam kulit, demam, atau peningkatan eosinofil.'
      }
    ]
  }
];

