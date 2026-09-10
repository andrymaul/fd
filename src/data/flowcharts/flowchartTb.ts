import { DiseaseFlowchartData } from '../clinicalFlowchartData';

/**
 * Algoritma Interaktif Klinis: Tuberkulosis Paru Dewasa (TB-SO & TB-RO)
 * Standar PNPK Tuberkulosis Kemenkes RI No. HK.01.07/MENKES/755/2019 & WHO Consolidated Guidelines on TB 2023
 */
export const FLOWCHART_TB: DiseaseFlowchartData = {
  id: 'flowchart-tb',
  diseaseName: 'Tuberkulosis Paru Dewasa (TB-SO & TB-RO)',
  shortSubtitle: 'Alur Diagnosis TCM GeneXpert, Paduan FDC Kategori 1 (2RHZE/4RH), Regimen TB-RO (BPaL/BPaLM), & Penanganan DILI',
  category: 'Infeksi Tropis & Respirasi',
  icd10: 'A15 (Respiratory Tuberculosis)',
  bannerGradient: 'from-rose-950 via-slate-950 to-red-950',
  accentColor: 'rose',
  classificationTitle: 'Klasifikasi Resistensi Obat TB Berdasarkan Tes Cepat Molekuler (TCM GeneXpert MTB/RIF) & Riwayat Terapi',
  classificationLevels: [
    {
      id: 'tb-so-new',
      label: 'TB SENSITIF OBAT (TB-SO) - KASUS BARU',
      criteria: 'Hasil TCM GeneXpert: MTB Terdeteksi, Rifampisin Resisten TIDAK Terdeteksi; belum pernah diobati OAT sebelumnya atau pernah minum OAT < 1 bulan',
      badgeColor: 'bg-emerald-500 text-white',
      textColor: 'text-emerald-700 dark:text-emerald-300',
      bgColor: 'bg-emerald-50/80 dark:bg-emerald-950/40',
      borderColor: 'border-emerald-300 dark:border-emerald-700',
      clinicalAction: 'Inisiasi Paduan Kategori 1 FDC Program Kemenkes RI: Fase Intensif 2 bulan (2RHZE) + Fase Lanjutan 4 bulan (4RH).'
    },
    {
      id: 'tb-so-previously-treated',
      label: 'TB-SO PENGOBATAN ULANG (KAMBUH / GAGAL)',
      criteria: 'Pernah diobati OAT >= 1 bulan dan kini dinyatakan kambuh (relaps) atau gagal terapi, dengan TCM: Rifampisin Sensitif',
      badgeColor: 'bg-amber-500 text-slate-900',
      textColor: 'text-amber-800 dark:text-amber-300',
      bgColor: 'bg-amber-50/80 dark:bg-amber-950/40',
      borderColor: 'border-amber-300 dark:border-amber-700',
      clinicalAction: 'Kirim sputum untuk uji kepekaan obat lini 1 & 2 (LPA / Biakan). Berikan paduan 2RHZE/4RH sambil menunggu hasil resistensi.'
    },
    {
      id: 'tb-ro-mdr',
      label: 'TB RESISTAN OBAT (TB-RO: RR-TB / MDR-TB)',
      criteria: 'Hasil TCM GeneXpert: MTB Terdeteksi, Rifampisin Resisten TERDETEKSI (dengan atau tanpa resistansi terhadap Isoniazid)',
      badgeColor: 'bg-rose-600 text-white animate-pulse',
      textColor: 'text-rose-800 dark:text-rose-300',
      bgColor: 'bg-rose-50/80 dark:bg-rose-950/40',
      borderColor: 'border-rose-300 dark:border-rose-700',
      clinicalAction: 'Rujuk ke Faskes Layanan TB-RO. Skrining EKG (interval QTc) dan inisiasi Paduan Pendek All-Oral BPaLM / BPaL selama 6 bulan.'
    },
    {
      id: 'tb-dili',
      label: 'DRUG-INDUCED LIVER INJURY (DILI OAT)',
      criteria: 'Ikterus klinis ATAU SGOT/SGPT > 3x batas atas dengan gejala (mual/muntah/nyeri perut) ATAU SGOT/SGPT > 5x tanpa gejala',
      badgeColor: 'bg-red-600 text-white',
      textColor: 'text-red-800 dark:text-red-300',
      bgColor: 'bg-red-50/80 dark:bg-red-950/40',
      borderColor: 'border-red-300 dark:border-red-700',
      clinicalAction: 'HENTIKAN SEMENTARA SEMUA OAT HEPATOTOKSIK (R, H, Z). Berikan OAT non-hepatotoksik sementara (S, E, Levofloksasin). Re-challenge bertahap pasca normalisasi enzim hepar.'
    }
  ],
  flowchartTitle: 'Algoritma Keputusan Terapi TB Paru PNPK Kemenkes RI & WHO 2023',
  lifestyleModifications: [
    {
      title: 'Kepatuhan Minum Obat Tuntas & Pengawas Menelan Obat (PMO)',
      impact: 'Mencegah Mutasi Resistansi Obat (MDR-TB) & Menjamin Angka Kesembuhan > 90%',
      details: 'Tunjuk PMO keluarga yang terlatih untuk memastikan obat ditelan utuh setiap hari tanpa putus obat.'
    },
    {
      title: 'Etika Batuk & Ventilasi Udara Rumah yang Baik',
      impact: 'Menurunkan Penularan Droplet Nuclei Aerosol di Rumah hingga 80%',
      details: 'Gunakan masker bedah selama 2-4 minggu pertama; buka jendela kamar tidur agar sirkulasi udara lancar dan sinar matahari UV masuk.'
    },
    {
      title: 'Pemeriksaan Kontak Serumah (Investigasi Kontak & TPT)',
      impact: 'Deteksi Kasus Dini & Pencegahan TB Aktif pada Balita/Dewasa Rentan',
      details: 'Semua kontak serumah wajib diperiksa TCM; balita tanpa gejala diberikan Terapi Pencegahan TB (TPT: 3HP atau 6H).'
    },
    {
      title: 'Nutrisi Tinggi Kalori Tinggi Protein (TKTP)',
      impact: 'Akselerasi Konversi Dahak & Perbaikan Status Imunitas Seluler',
      details: 'Asupan telur, ikan, daging, tempe, susu, dan mikronutrien (Vitamin B6 / Piridoksin 10–25 mg untuk mencegah neuropati akibat INH).'
    }
  ],
  comorbidProfiles: [
    {
      name: 'TB Paru dengan Koinfeksi HIV/AIDS',
      icon: '🎗️',
      targetBP: 'Mulai OAT Dulu, ARV Menyusul dalam 2–8 Minggu',
      firstLineDrug: 'OAT FDC 2RHZE/4RH + Kotrimoksazol Profilaksis (960 mg/hari) + ARV (TLD)',
      rationale: 'Bila CD4 < 50 sel/uL, ARV dimulai dalam 2 minggu pasca OAT; bila CD4 >= 50, ARV dimulai dalam 8 minggu untuk mencegah Immune Reconstitution Inflammatory Syndrome (IRIS).'
    },
    {
      name: 'TB Paru dengan Komorbid Diabetes Melitus (TB-DM)',
      icon: '🩸',
      targetBP: 'Target HbA1c < 7.5% & GDS 140–180 mg/dL',
      firstLineDrug: 'OAT 2RHZE/4RH (Dapat Diperpanjang Menjadi 9 Bulan Bila Konversi Lambat) + Insulin',
      rationale: 'Rifampisin adalah induktor kuat enzim hepar CYP3A4 yang mempercepat metabolisme Sulfonilurea (Glimepirid) hingga kadar plasma turun 50%; Insulin adalah antidiabetes pilihan selama fase intensif OAT.'
    },
    {
      name: 'TB Paru dengan Gagal Ginjal Kronik (eGFR < 30 mL/min)',
      icon: '🧪',
      targetBP: 'Penyesuaian Frekuensi Dosis OAT Renal',
      firstLineDrug: 'Rifampisin 450-600 mg (tetap) + Isoniazid 300 mg (tetap) + Pirazinamid 25 mg/kg 3x/mgg + Etambutol 15 mg/kg 3x/mgg',
      rationale: 'Pirazinamid dan Etambutol dieliminasi terutama lewat ginjal; frekuensi pemberian diubah menjadi 3 kali seminggu (misal: Senin, Rabu, Jumat) pasca sesi hemodialisis.'
    }
  ],
  flowchartSteps: [
    {
      stepId: 'tb-step-1',
      stepNumber: 1,
      stageBadge: 'Tahap 1: Diagnosis Baku Emas',
      title: 'Pemeriksaan Dahak Tes Cepat Molekuler (TCM GeneXpert)',
      subtitle: 'Deteksi DNA Mycobacterium tuberculosis & Resistansi Gen rpoB Rifampisin',
      description: 'Kumpulkan minimal 1 spesimen dahak pagi atau sewaktu berkualitas baik. Lakukan uji TCM GeneXpert MTB/RIF. Jangan memulai OAT hanya berdasarkan foto rontgen tanpa konfirmasi bakteriologis kecuali pada kondisi klinis krisis yang disetujui dokter spesialis.',
      branchType: 'general',
      drugs: [],
      escalationTrigger: 'Hasil TCM GeneXpert terbit: MTB Terdeteksi dengan status resistansi Rifampisin.',
      clinicalPearls: 'TCM GeneXpert memiliki sensitivitas > 90% pada sputum BTA positif dan > 70% pada BTA negatif, serta memberikan hasil resistansi Rifampisin dalam waktu < 2 jam.'
    },
    {
      stepId: 'tb-step-2',
      stepNumber: 2,
      stageBadge: 'Tahap 2: Inisiasi OAT Sensitif Obat (TB-SO)',
      title: 'Paduan Dosis Harian FDC Kategori 1 (2RHZE / 4RH)',
      subtitle: 'Dosis Disesuaikan Berat Badan: Fase Intensif 2 Bulan dilanjutkan Fase Lanjutan 4 Bulan',
      description: 'Berikan tablet FDC (Kombinasi Dosis Tetap): BB 30–37 kg = 2 tablet; BB 38–54 kg = 3 tablet; BB 55–70 kg = 4 tablet; BB > 70 kg = 5 tablet diminum sekali sehari saat perut kosong (pagi sebelum sarapan atau malam sebelum tidur). Tambahkan Vitamin B6 10–25 mg/hari.',
      branchType: 'single',
      drugs: [
        {
          drugName: 'OAT FDC 4KDT (Rifampisin 150mg + Isoniazid 75mg + Pirazinamid 400mg + Etambutol 275mg)',
          dosage: '3 - 4 tablet sekali sehari saat perut kosong selama 56 hari (2 bulan)',
          role: 'Fase Intensif Standar Kemenkes RI (2RHZE)',
          fornasTier: 'Faskes 1/2/3 (Program Nasional Gratis)',
          isPreferred: true
        },
        {
          drugName: 'OAT FDC 2KDT (Rifampisin 150mg + Isoniazid 75mg)',
          dosage: '3 - 4 tablet sekali sehari saat perut kosong selama 16 minggu (4 bulan)',
          role: 'Fase Lanjutan Standar Kemenkes RI (4RH)',
          fornasTier: 'Faskes 1/2/3',
          isPreferred: true
        },
        {
          drugName: 'Pyridoxine HCl (Vitamin B6)',
          dosage: '10 - 25 mg per oral sekali sehari',
          role: 'Pencegahan Neuropati Perifer Imbas Isoniazid',
          fornasTier: 'Faskes 1/2/3',
          isPreferred: true
        }
      ],
      escalationTrigger: 'Pemeriksaan dahak mikroskopis akhir bulan ke-2 masih BTA Positif ATAU timbul gejala ikterus/hepatotoksisitas.',
      clinicalPearls: 'Wajib mengedukasi pasien bahwa Rifampisin menyebabkan warna urin, keringat, dan air mata menjadi MERAH KEMERAHAN; ini adalah efek samping metabolit normal dan tidak berbahaya.'
    },
    {
      stepId: 'tb-step-3',
      stepNumber: 3,
      stageBadge: 'Tahap 3: Pemantauan Kemajuan & Respon Terapi',
      title: 'Evaluasi Konversi Dahak Akhir Bulan ke-2 & Uji Ulang',
      subtitle: 'Pemeriksaan Dahak Mikroskopis Akhir Bulan 2, Bulan 5, dan Akhir Pengobatan',
      description: 'Lakukan pemeriksaan dahak mikroskopis akhir fase intensif (bulan ke-2). Jika BTA negatif, lanjutkan fase lanjutan (4RH). Jika BTA masih positif pada akhir bulan ke-2, lanjutkan fase lanjutan dan kirim dahak untuk pemeriksaan TCM ulang serta uji kepekaan biakan (karena risiko resistansi obat sekunder).',
      branchType: 'escalation',
      drugs: [],
      escalationTrigger: 'BTA tetap positif pada akhir bulan ke-5 atau TCM menunjukkan resistansi Rifampisin baru.',
      clinicalPearls: 'Pasien yang tetap positif BTA pada bulan ke-2 harus dievaluasi secara cermat mengenai kepatuhan minum obat (apakah sering bolong) dan komorbiditas diabetes yang tidak terkontrol.'
    },
    {
      stepId: 'tb-step-4',
      stepNumber: 4,
      stageBadge: 'Tahap 4: Inisiasi Paduan TB-RO BPaL / BPaLM',
      title: 'Paduan Oral 6 Bulan untuk TB Resistan Rifampisin (MDR-TB)',
      subtitle: 'Bedaquiline + Pretomanid + Linezolid (+ Moxifloxacin) Selama 26 Minggu',
      description: 'Regimen oral terbaru WHO dan Kemenkes RI untuk TB-RO tanpa suntikan: Bedaquiline (400 mg/hari 2 minggu, lanjut 200 mg 3x/minggu) + Pretomanid 200 mg/hari + Linezolid 600 mg/hari + Moxifloxacin 400 mg/hari selama 6 bulan.',
      branchType: 'comorbid',
      drugs: [
        {
          drugName: 'Bedaquiline (Sirturo)',
          dosage: '400 mg 1x/hari selama 2 mgg, lalu 200 mg 3x/mgg selama 24 mgg',
          role: 'Inhibitor ATP Sintase Bakteri TB-RO',
          fornasTier: 'Faskes Layanan TB-RO Rujukan',
          isPreferred: true
        },
        {
          drugName: 'Pretomanid (Dovprela)',
          dosage: '200 mg per oral sekali sehari bersama makanan',
          role: 'Nitroimidazo-oxazine Anti-TB Baru',
          fornasTier: 'Faskes Layanan TB-RO',
          isPreferred: true
        },
        {
          drugName: 'Linezolid (Zyvox)',
          dosage: '600 mg per oral sekali sehari (dapat diturunkan ke 300 mg bila toksisitas sumsum tulang)',
          role: 'Oksazolidinon Penghambat Sintesis Protein TB',
          fornasTier: 'Faskes Layanan TB-RO',
          isPreferred: true
        },
        {
          drugName: 'Moxifloxacin (Avelox)',
          dosage: '400 mg per oral sekali sehari',
          role: 'Fluoroquinolon Respirasi Spektrum Luas (Regimen BPaLM)',
          fornasTier: 'Faskes Layanan TB-RO',
          isPreferred: true
        }
      ],
      escalationTrigger: 'Perpanjangan interval QTc > 500 ms atau neuropati optik/perifer akibat Linezolid.',
      clinicalPearls: 'Bedaquiline dan Moxifloxacin keduanya dapat memperpanjang interval QTc pada EKG; pemantauan EKG serial wajib dilakukan pada minggu ke-2, 4, 8, 12, 16, 20, dan 24.'
    }
  ],
  drugClassificationTable: [
    {
      id: 'tb-lini-1',
      drugClass: 'OAT Lini Pertama (First-Line Anti-Tuberculosis Agents)',
      classCategory: 'other',
      exampleDrugs: [
        { name: 'Rifampisin (R)', dailyDosage: '10 mg/kgBB (maks 600 mg) 1x/hari saat perut kosong', fornasTier: 'Faskes 1/2/3' },
        { name: 'Isoniazid (H)', dailyDosage: '5 mg/kgBB (maks 300 mg) 1x/hari', fornasTier: 'Faskes 1/2/3' },
        { name: 'Pirazinamid (Z)', dailyDosage: '25 mg/kgBB (maks 2000 mg) 1x/hari', fornasTier: 'Faskes 1/2/3' },
        { name: 'Etambutol (E)', dailyDosage: '15 mg/kgBB (maks 1200 mg) 1x/hari', fornasTier: 'Faskes 1/2/3' }
      ],
      mechanismOfAction: 'R: inhibisi RNA polimerase dependen DNA; H: inhibisi sintesis asam mikolat dinding sel; Z: disrupsi membran dan pH intraseluler; E: inhibisi arabinosil transferase.',
      clinicalIndications: 'Semua kasus TB Sensitif Obat (TB-SO) paru dan ekstra-paru; paduan FDC 2RHZE/4RH Kemenkes RI.',
      adverseEffects: 'R: urin merah kemerahan, sindrom flu; H: neuropati perifer, hepatitis; Z: hiperurisemia (artralgia), hepatotoksisitas berat; E: neuritis optik (gangguan lapang pandang & buta warna merah-hijau).',
      contraindications: 'Gagal hati akut; ikterus obstruktif; neuritis optik aktif (untuk Etambutol).',
      monitoringKey: 'Enzim transaminase hati (SGOT/SGPT) berkala; skrining tajam penglihatan dan buta warna pada penggunaan Etambutol.'
    },
    {
      id: 'tb-lini-ro',
      drugClass: 'OAT Paduan TB Resistan Obat (BPaL / BPaLM Novel Regimen)',
      classCategory: 'other',
      exampleDrugs: [
        { name: 'Bedaquiline', dailyDosage: '400 mg 1x/hari (2 mgg), lalu 200 mg 3x/mgg (24 mgg)', fornasTier: 'Faskes Layanan TB-RO' },
        { name: 'Pretomanid', dailyDosage: '200 mg 1x/hari bersama makanan (26 mgg)', fornasTier: 'Faskes Layanan TB-RO' },
        { name: 'Linezolid', dailyDosage: '600 mg 1x/hari (dapat diturunkan ke 300 mg)', fornasTier: 'Faskes Layanan TB-RO' },
        { name: 'Moxifloxacin', dailyDosage: '400 mg 1x/hari', fornasTier: 'Faskes Layanan TB-RO' }
      ],
      mechanismOfAction: 'Inhibisi spesifik pompa proton subunit c ATP sintase mikobakterium (Bedaquiline); hambatan sintesis dinding sel dan respirasi seluler (Pretomanid).',
      clinicalIndications: 'Pasien TB-RO (RR-TB dan MDR-TB) usia >= 14 tahun tanpa riwayat resistansi fluoroquinolon berat.',
      adverseEffects: 'Pemanjangan interval QTc (Bedaquiline, Moxifloxacin), mielosupresi / anemia / trombositopenia & neuropati perifer (Linezolid).',
      contraindications: 'Interval QTc basal > 500 ms; sindrom pemanjangan QT bawaan; neuropati optik berat.',
      monitoringKey: 'EKG serial berkala; pemeriksaan darah tepi lengkap (Hb, Leukosit, Trombosit) tiap 2 minggu selama terapi Linezolid.'
    }
  ],
  ebmReferences: [
    {
      id: 'ref-pnpk-tb-kemenkes',
      title: 'Pedoman Nasional Pelayanan Kedokteran (PNPK) Tata Laksana Tuberkulosis',
      organization: 'Kementerian Kesehatan Republik Indonesia',
      year: '2023',
      scope: 'Nasional',
      summary: 'Kepmenkes RI panduan nasional terkini yang mengatur alur diagnostik TCM GeneXpert, paduan FDC Kategori 1 dosis harian, tatalaksana DILI, serta kriteria desentralisasi layanan TB di Faskes Primer.',
      evidenceLevel: 'Standar Resmi Nasional Kemenkes RI'
    },
    {
      id: 'ref-who-tb-2023',
      title: 'WHO Consolidated Guidelines on Tuberculosis: Module 4: Treatment - Drug-Resistant TB Treatment',
      organization: 'World Health Organization (WHO)',
      year: '2023',
      scope: 'Internasional',
      summary: 'Rekomendasi global paduan all-oral 6 bulan BPaL dan BPaLM untuk menggantikan paduan panjang suntikan 18-24 bulan, meningkatkan angka kesembuhan TB-RO hingga > 85%.',
      evidenceLevel: 'Strong Recommendation, Moderate Certainty Evidence'
    }
  ]
};
