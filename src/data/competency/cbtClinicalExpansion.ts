import { ExamQuestion } from '../competencyExamData';

/**
 * Bank Soal CBT Tambahan - Domain 1: Farmasi Klinis & Farmakoterapi
 * Mengacu pada Blueprint KFN & Standar Nasional UKMPPAI
 */
export const CBT_CLINICAL_EXPANSION: ExamQuestion[] = [
  {
    id: 'q-108',
    domainId: 'klinis',
    vignette: 'Seorang pasien pria berusia 58 tahun dengan riwayat gagal jantung fraksi ejeksi menurun (HFrEF, EF 32%) datang untuk kontrol rutin. Pasien saat ini mengonsumsi Ramipril 10 mg 1x sehari, Bisoprolol 5 mg 1x sehari, dan Spironolakton 25 mg 1x sehari. Pasien masih mengeluhkan sesak nafas saat beraktivitas ringan (NYHA Kelas II-III). Dokter berencana mengganti Ramipril dengan golongan ARNI (Sacubitril/Valsartan).',
    question: 'Berapakah waktu jeda (washout period) minimal yang harus dipatuhi sebelum dosis pertama Sacubitril/Valsartan diberikan setelah penghentian Ramipril?',
    options: [
      { key: 'A', text: '12 jam' },
      { key: 'B', text: '24 jam' },
      { key: 'C', text: '36 jam' },
      { key: 'D', text: '48 jam' },
      { key: 'E', text: '72 jam' }
    ],
    correctAnswer: 'C',
    explanation: 'Peralihan terapi dari golongan ACE inhibitor (seperti Ramipril, Kaptopril, Lisinopril) ke ARNI (Sacubitril/Valsartan) WAJIB menerapkan masa jeda (washout period) minimal 36 JAM setelah dosis terakhir ACEI. Hal ini mutlak diperlukan untuk mencegah risiko komplikasi ANGIOEDEMA berat yang mengancam nyawa, karena baik ACEI maupun inhibitor neprilisin (sacubitril) sama-sama menghambat degradasi bradikinin.',
    clinicalReference: 'Pedoman Tata Laksana Gagal Jantung PERKI & AHA/ACC/HFSA Heart Failure Guidelines',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-109',
    domainId: 'klinis',
    vignette: 'Seorang pasien wanita 64 tahun penderita osteoartritis lutut kronis dan hipertensi datang ke IGD dengan keluhan penurunan volume urin drastis (oliguria), lemas, dan mual muntah selama 3 hari. Pasien rutin mengonsumsi Lisinopril 20 mg dan Hidroklorotiazid 25 mg. Seminggu terakhir, pasien membeli sendiri dan meminum Natrium Diklofenak 50 mg 3x sehari untuk mengatasi nyeri lututnya yang kambuh. Hasil lab: Serum Kreatinin melonjak dari 0,9 mg/dL menjadi 3,4 mg/dL.',
    question: 'Kombinasi obat manakah yang memicu terjadinya Gagal Ginjal Akut (Acute Kidney Injury) melalui fenomena "Triple Whammy" pada pasien tersebut?',
    options: [
      { key: 'A', text: 'Lisinopril + Hidroklorotiazid + Natrium Diklofenak' },
      { key: 'B', text: 'Lisinopril + Hidroklorotiazid saja' },
      { key: 'C', text: 'Natrium Diklofenak tunggal dosis tinggi' },
      { key: 'D', text: 'Hidroklorotiazid + Parasetamol' },
      { key: 'E', text: 'Lisinopril + Amlodipin' }
    ],
    correctAnswer: 'A',
    explanation: 'Fenomena "Triple Whammy" adalah interaksi nefrotoksik berbahaya dari kombinasi 3 golongan obat: ACEI/ARB + Diuretik + NSAID. Mekanismenya: (1) Diuretik menyebabkan deplesi volume intravaskular (menurunkan perfusi ginjal), (2) NSAID menghambat prostaglandin sehingga terjadi vasokonstriksi arteriol AFEREN, dan (3) ACEI menghambat Angiotensin II sehingga terjadi vasodilatasi arteriol EFEREN. Akibatnya, tekanan filtrasi intraglomerular turun drastis dan memicu Gagal Ginjal Akut (AKI) prerenal berat.',
    clinicalReference: 'KDIGO Acute Kidney Injury (AKI) Clinical Practice Guideline & Stockley\'s Drug Interactions',
    difficulty: 'Sedang'
  },
  {
    id: 'q-110',
    domainId: 'klinis',
    vignette: 'Seorang pasien pria 62 tahun pasca-pemasangan cincin jantung (Percutaneous Coronary Intervention / PCI dengan Drug-Eluting Stent) 2 hari yang lalu karena Sindrom Koroner Akut (NSTEMI). Pasien memiliki riwayat perdarahan lambung akibat ulkus peptikum 1 tahun lalu. Dokter meresepkan Dual Antiplatelet Therapy (DAPT) berupa Aspirin 80 mg dan Clopidogrel 75 mg, serta meminta apoteker merekomendasikan obat pelindung lambung (gastroprotektor).',
    question: 'Obat golongan Proton Pump Inhibitor (PPI) manakah yang PALING AMAN dipilih karena memiliki interaksi minimal terhadap bioaktivasi Clopidogrel di enzim CYP2C19?',
    options: [
      { key: 'A', text: 'Omeprazole' },
      { key: 'B', text: 'Esomeprazole' },
      { key: 'C', text: 'Pantoprazole' },
      { key: 'D', text: 'Lansoprazole' },
      { key: 'E', text: 'Rabeprazole dosis tinggi' }
    ],
    correctAnswer: 'C',
    explanation: 'Clopidogrel merupakan prodrug yang harus diaktifkan oleh enzim sitokrom P450 hepar, terutama CYP2C19. Omeprazole dan Esomeprazole adalah inhibitor kuat CYP2C19 yang menghambat konversi klopidogrel ke metabolit aktifnya, sehingga menurunkan efektivitas antiplatelet dan meningkatkan risiko trombosis stent berulang. Pantoprazole adalah PPI pilihan utama pada pasien yang mengonsumsi Klopidogrel karena memiliki afinitas terendah terhadap CYP2C19 dan tidak mengganggu bioaktivasi klopidogrel secara bermakna klinis.',
    clinicalReference: 'US FDA Drug Safety Communication: Clopidogrel and PPI Interaction & Konsensus PERKI',
    difficulty: 'Sedang'
  },
  {
    id: 'q-111',
    domainId: 'klinis',
    vignette: 'Seorang pasien wanita 26 tahun hamil trimester pertama (usia kehamilan 10 minggu) datang ke poliklinik endokrin dengan keluhan jantung berdebar-debar, keringat berlebih, penurunan berat badan 4 kg dalam sebulan, dan tremor halus pada kedua tangan. Hasil lab: TSH < 0,01 mIU/L (rendah) dan Free T4 3,8 ng/dL (tinggi), didiagnosis Hipertiroidisme (Penyakit Graves).',
    question: 'Obat antitiroid pilihan pertama manakah yang paling aman diberikan pada pasien tersebut selama trimester pertama kehamilan?',
    options: [
      { key: 'A', text: 'Metimazol' },
      { key: 'B', text: 'Propiltiourasil (PTU)' },
      { key: 'C', text: 'Karbimazol' },
      { key: 'D', text: 'Larutan Lugol (Kalium Iodida)' },
      { key: 'E', text: 'Radioaktif Iodium-131' }
    ],
    correctAnswer: 'B',
    explanation: 'Propiltiourasil (PTU) adalah obat antitiroid lini pertama pilihan pada kehamilan TRIMESTER PERTAMA. Hal ini karena PTU berikatan kuat dengan protein plasma sehingga transfer plasental ke janin lebih rendah, dan memiliki risiko teratogenisitas yang jauh lebih kecil dibandingkan Metimazol/Karbimazol yang dikaitkan dengan cacat bawaan berat (seperti aplasia cutis dan atresia esofagus/koana). Memasuki trimester kedua dan ketiga, terapi dapat dipertimbangkan beralih ke Metimazol untuk menghindari risiko hepatotoksisitas maternal dari PTU.',
    clinicalReference: 'American Thyroid Association (ATA) Guidelines for Diagnosis and Management of Thyroid Disease During Pregnancy',
    difficulty: 'Sedang'
  },
  {
    id: 'q-112',
    domainId: 'klinis',
    vignette: 'Seorang pasien laki-laki 32 tahun penderita skizofrenia paranoid dibawa keluarganya ke poli jiwa karena mengalami kekakuan otot leher parah (tortikolis spasmodik), mata terbelalak melirik ke atas tanpa bisa dikendalikan (krisis okulogirik), dan gelisah tidak bisa diam. Pasien baru mulai meminum Haloperidol 5 mg 2x sehari sejak 3 hari yang lalu.',
    question: 'Obat manakah yang paling tepat diberikan untuk mengatasi reaksi distonia akut akibat efek samping ekstrapiramidal (EPS) Haloperidol tersebut?',
    options: [
      { key: 'A', text: 'Triheksifenidil (THP) / Difenhidramin' },
      { key: 'B', text: 'Klorpromazin' },
      { key: 'C', text: 'Risperidon' },
      { key: 'D', text: 'Klozapin' },
      { key: 'E', text: 'Fluoksetin' }
    ],
    correctAnswer: 'A',
    explanation: 'Distonia akut (tortikolis, krisis okulogirik, trismus) merupakan manifestasi Extrapyramidal Symptoms (EPS) akut akibat blokade kuat reseptor dopamin D2 di jalur nigrostriatal oleh antipsikotik tipikal potensi tinggi (seperti Haloperidol). Hal ini menyebabkan dominasi tonus kolinergik. Terapi lini pertama adalah antikolinergik sentral seperti Triheksifenidil (THP) oral atau Difenhidramin parenteral untuk mengembalikan keseimbangan dopaminergik-kolinergik di ganglia basalis.',
    clinicalReference: 'Maudsley Prescribing Guidelines in Psychiatry & Panduan Praktik Klinis Jiwa Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-113',
    domainId: 'klinis',
    vignette: 'Seorang pasien pria 48 tahun dengan Sirosis Hepatis stadium dekompensata datang ke rawat inap dengan keluhan perut membesar tegang akibat asites masif dan edema pitting pada kedua tungkai. Tekanan darah 110/70 mmHg, Kalium serum 3,9 mEq/L, Natrium serum 134 mEq/L. Dokter meminta apoteker merekomendasikan kombinasi diuretik oral lini pertama.',
    question: 'Berapakah rasio kombinasi dosis Spironolakton dan Furosemid yang terbukti paling efektif memobilisasi asites sekaligus menjaga keseimbangan kadar kalium serum?',
    options: [
      { key: 'A', text: 'Spironolakton 50 mg : Furosemid 50 mg (1:1)' },
      { key: 'B', text: 'Spironolakton 100 mg : Furosemid 40 mg (100:40)' },
      { key: 'C', text: 'Spironolakton 25 mg : Furosemid 40 mg (25:40)' },
      { key: 'D', text: 'Spironolakton 200 mg : Furosemid 20 mg (10:1)' },
      { key: 'E', text: 'Spironolakton 40 mg : Furosemid 100 mg (40:100)' }
    ],
    correctAnswer: 'B',
    explanation: 'Pada asites akibat sirosis hepatis, terjadi hiperaldosteronisme sekunder masif. Kombinasi diuretik lini pertama yang direkomendasikan adalah Spironolakton (antagonis aldosteron hemat kalium) dan Furosemid (loop diuretic pembuang kalium) dengan rasio dosis tetap 100 mg : 40 mg (dapat dititrasi bertahap hingga maksimal 400 mg : 160 mg). Rasio 100:40 ini menghasilkan efek natriuresis optimal sekaligus menjaga stabilitas konsentrasi kalium serum tetap dalam rentang normal (normokalemia).',
    clinicalReference: 'EASL Clinical Practice Guidelines for the Management of Patients with Decompensated Cirrhosis & AASLD Guidelines',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-114',
    domainId: 'klinis',
    vignette: 'Seorang pasien wanita 52 tahun dengan Karsinoma Mammae dijadwalkan menjalani siklus kemoterapi pertama dengan regimen AC (Doksorubisin + Siklofosfamid). Apoteker di unit penyiapan kemoterapi melakukan skrining protokol pencegahan efek samping.',
    question: 'Efek samping toksisitas organ spesifik apakah yang paling diwaspadai dari penggunaan Doksorubisin, sehingga memerlukan pemantauan fraksi ejeksi ventrikel (LVEF) dan pembatasan dosis kumulatif seumur hidup?',
    options: [
      { key: 'A', text: 'Kardiotoksisitas (Kardiomiopati dilatasi & gagal jantung)' },
      { key: 'B', text: 'Hemoragik sistitis' },
      { key: 'C', text: 'Fibrosis paru interstisial' },
      { key: 'D', text: 'Ototoksisitas permanen' },
      { key: 'E', text: 'Neuropati perifer sensorik berat' }
    ],
    correctAnswer: 'A',
    explanation: 'Doksorubisin (golongan antrasiklin) memiliki toksisitas spesifik berupa KARDIOTOKSISITAS yang bergantung pada dosis kumulatif (cumulative dose-dependent cardiotoxicity). Mekanismenya melibatkan pembentukan radikal bebas reaktif besi-antrasiklin yang merusak miokardium ventrikel, memicu kardiomiopati irreversibel dan gagal jantung kongestif. Dosis kumulatif maksimal seumur hidup umumnya dibatasi 450-550 mg/m². Sebagai agen kardioprotektor pada dosis tinggi dapat digunakan Deksrazoksan. Sementara itu, Hemoragik sistitis adalah toksisitas khas Siklofosfamid/Ifosfamid (dicegah dengan Mesna).',
    clinicalReference: 'ESMO Clinical Practice Guidelines: Cardiotoxicity of Anticancer Treatments & NCCN Guidelines in Oncology',
    difficulty: 'Mudah'
  },
  {
    id: 'q-115',
    domainId: 'klinis',
    vignette: 'Seorang anak laki-laki berusia 4 tahun (berat badan 16 kg) dibawa ke puskesmas dengan demam 39°C, rewel, dan menarik-narik telinga kanannya. Dokter mendiagnosis Otitis Media Akut (OMA) bacterial dan meminta apoteker menghitungkan dosis Amoksisilin oral high-dose lini pertama.',
    question: 'Berapakah total dosis harian Amoksisilin yang direkomendasikan untuk anak tersebut berdasarkan pedoman tata laksana OMA (dosis 80-90 mg/kgBB/hari terbagi dalam 2 dosis)?',
    options: [
      { key: 'A', text: '400 - 500 mg per hari' },
      { key: 'B', text: '640 - 720 mg per hari' },
      { key: 'C', text: '960 - 1.100 mg per hari' },
      { key: 'D', text: '1.280 - 1.440 mg per hari' },
      { key: 'E', text: '1.800 - 2.000 mg per hari' }
    ],
    correctAnswer: 'D',
    explanation: 'Pedoman AAP (American Academy of Pediatrics) merekomendasikan Amoksisilin dosis tinggi (80-90 mg/kgBB/hari) terbagi dalam 2 dosis untuk mengatasi kemungkinan resistensi Streptococcus pneumoniae penghasil PBP termutasi pada OMA. Perhitungan: BB = 16 kg. Dosis harian minimum = 16 kg x 80 mg/kgBB/hari = 1.280 mg/hari. Dosis harian maksimum = 16 kg x 90 mg/kgBB/hari = 1.440 mg/hari. Maka total dosis harian adalah 1.280 - 1.440 mg per hari (diberikan 640-720 mg setiap 12 jam).',
    clinicalReference: 'American Academy of Pediatrics (AAP) Clinical Practice Guideline: The Diagnosis and Management of Acute Otitis Media',
    difficulty: 'Sedang'
  },
  {
    id: 'q-116',
    domainId: 'klinis',
    vignette: 'Seorang pasien laki-laki 72 tahun penderita hipertensi, BPH, dan insomnia datang membawa resep ke apotek yang berisi: Kaptopril 25 mg 2x sehari, Tamsulosin 0,4 mg 1x sehari, dan Diazepam 5 mg 1x sehari sebelum tidur. Apoteker melakukan penapisan obat tidak tepat pada geriatri menggunakan kriteria Beers (Beers Criteria).',
    question: 'Obat manakah dalam resep tersebut yang tergolong berisiko tinggi (harus dihindari) pada lansia karena meningkatkan risiko sedasi berkepanjangan, delirium, ataksia, dan fraktur akibat jatuh?',
    options: [
      { key: 'A', text: 'Kaptopril' },
      { key: 'B', text: 'Tamsulosin' },
      { key: 'C', text: 'Diazepam' },
      { key: 'D', text: 'Kombinasi Kaptopril dan Tamsulosin' },
      { key: 'E', text: 'Semua obat aman untuk lansia' }
    ],
    correctAnswer: 'C',
    explanation: 'Berdasarkan AGS Beers Criteria for Potentially Inappropriate Medication Use in Older Adults, golongan Benzodiazepin kerja panjang seperti DIAZEPAM (waktu paruh eliminasi aktif beserta metabolit desmetildiazepam dapat mencapai > 100 jam pada lansia) harus DIHINDARI pada populasi geriatri. Lansia mengalami penurunan klirens hepar dan peningkatan sensitivitas reseptor GABA, sehingga pemakaian diazepam meningkatkan risiko sedasi berlebihan, kebingungan mental/delirium, gangguan koordinasi motorik/ataksia, jatuh, dan fraktur tulang panggul.',
    clinicalReference: 'American Geriatrics Society (AGS) Beers Criteria for Potentially Inappropriate Medication Use in Older Adults',
    difficulty: 'Mudah'
  },
  {
    id: 'q-117',
    domainId: 'klinis',
    vignette: 'Seorang pasien pria 38 tahun terdiagnosis HIV stadium 3 dan memulai terapi antiretroviral (ARV) lini pertama kombinasi dosis tetap TLD (Tenofovir Disoproxil Fumarate 300 mg + Lamivudin 300 mg + Dolutegravir 50 mg) 1x sehari pada malam hari. Pasien juga mengeluhkan maag dan sering meminum antasida suspensi yang mengandung Aluminium Hidroksida dan Magnesium Hidroksida.',
    question: 'Instruksi penggunaan apakah yang wajib ditekankan apoteker mengenai interaksi antara Dolutegravir (DTG) dan antasida tersebut?',
    options: [
      { key: 'A', text: 'Boleh diminum bersamaan tanpa masalah' },
      { key: 'B', text: 'Beri jeda: DTG diminum 2 jam SEBELUM atau 6 jam SETELAH antasida' },
      { key: 'C', text: 'Antasida harus dihentikan permanen dan tidak boleh diganti' },
      { key: 'D', text: 'Dosis Dolutegravir harus dinaikkan menjadi 2x lipat setiap minum antasida' },
      { key: 'E', text: 'Minum antasida 15 menit sebelum ARV' }
    ],
    correctAnswer: 'B',
    explanation: 'Dolutegravir (DTG) adalah golongan Integrase Strand Transfer Inhibitor (INSTI) yang mengandung gugus pengkelat kation polivalen. Kation divalen/trivalen (seperti Al³⁺ dan Mg²⁺ pada antasida, atau Fe²⁺ dan Ca²⁺ pada suplemen) akan membentuk kompleks kelat tak larut dengan DTG di saluran cerna, menurunkan konsentrasi plasma DTG hingga > 70% dan memicu kegagalan virologis serta resistensi HIV. Pasien wajib mengonsumsi DTG minimal 2 jam SEBELUM atau 6 jam SETELAH konsumsi antasida/suplemen kation mineral.',
    clinicalReference: 'WHO Guidelines on the Use of Antiretroviral Drugs for Treating and Preventing HIV Infection & Package Insert Tivicay',
    difficulty: 'Tinggi'
  }
];
