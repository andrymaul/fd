import { ExamQuestion } from '../competencyExamData';

/**
 * BANK SOAL CBT UKMPPAI PENGAYAAN BAGIAN 17 (Nomor q-1311 s/d q-1335)
 * Cetak Biru Resmi UKMPPAI 2026 (KFN, IAI & APTFI)
 * Fokus:
 * - Onkologi CINV & Ekstravasasi & TLS (Klinis)
 * - 4 Pilar GDMT Gagal Jantung & Fibrilasi Atrium (Klinis)
 * - TB-RO Paduan BPaLM & Koinfeksi TB-HIV Dolutegravir (Klinis)
 * - Kedaruratan Hiperkalemia & Hiponatremia (Klinis)
 * - Status Epileptikus & TDM Litium (Klinis)
 * - Krisis Tiroid & Komplikasi Akut Diabetes KAD/HHS (Klinis)
 * - Analisis ICER, QALY, WTP & Keuangan Apotek TOR/BEP (Manajemen)
 * - Regulasi Khusus Narkotika, Psikotropika & SIPNAP (Manajemen)
 * - CPOB HVAC Ruang Bersih, Water System LAL Test, Disolusi F2 (Teknologi)
 * - Standardisasi Parameter Simplisia & Senyawa Marker Herbal (Bahan Alam)
 */
export const CBT_EXPANSION_PART_17: ExamQuestion[] = [
  // =========================================================================
  // 🩺 DOMAIN 1: FARMAKO TERAPI & KLINIS (q-1311 s/d q-1320)
  // =========================================================================
  {
    id: 'q-1311',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang wanita 48 tahun penderita kanker payudara dijadwalkan menjalani siklus kemoterapi dengan regimen Sisplatin 75 mg/m2 (kategori High Emetogenic Chemotherapy / HEC). Pasien sangat cemas akan mengalami mual dan muntah hebat pasca-kemoterapi.',
    question: 'Kombinasi obat profilaksis antiemetik manakah yang paling tepat direkomendasikan apoteker untuk mencegah mual muntah akut dan tertunda (delayed) pada pasien tersebut?',
    options: [
      { key: 'A', text: 'Aprepitant + Ondansetron + Deksametason' },
      { key: 'B', text: 'Metoklopramid + Domperidon + Dimenhidrinat' },
      { key: 'C', text: 'Ondansetron tunggal dosis tinggi' },
      { key: 'D', text: 'Deksametason + Difenhidramin' },
      { key: 'E', text: 'Piridoksin (Vitamin B6) + Antasida' }
    ],
    correctAnswer: 'A',
    explanation: 'Regimen Sisplatin dosis >= 50 mg/m2 tergolong kemoterapi emetogenik tinggi (HEC). Pedoman ASCO dan MASCC merekomendasikan protokol kombinasi 3 atau 4 obat: Antagonis Reseptor Neurokinin-1 (Aprepitant atau Fosaprepitant) untuk memblok Substansi P dan mencegah mual-muntah lambat/delayed (hari ke 2-4), Antagonis 5-HT3 (Ondansetron/Granisetron) untuk mencegah mual-muntah akut (hari ke-1), dan Kortikosteroid (Deksametason) sebagai antiemetik sinergis kuat.',
    clinicalReference: 'ASCO Guideline Update: Antiemetics in Oncology & NCCN Antiemesis Panel',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1312',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Saat infus Doksorubisin berlangsung pada pasien limfoma, jarum infus terlepas dari vena sehingga terjadi ekstravasasi obat ke jaringan subkutan lengan bawah. Doksorubisin merupakan agen kemoterapi sitostatika golongan vesikan kuat yang berisiko memicu ulkus dan nekrosis jaringan parah.',
    question: 'Tindakan pertolongan pertama dan antidotum spesifik apakah yang wajib segera diberikan apoteker dan tim medis?',
    options: [
      { key: 'A', text: 'Berikan kompres es/dingin pada area ekstravasasi dan segera berikan infus Deksrazoksan' },
      { key: 'B', text: 'Berikan kompres hangat dan suntikkan enzim Hialuronidase' },
      { key: 'C', text: 'Oleskan salep Gentamisin dan kompres alkohol' },
      { key: 'D', text: 'Suntikkan Nalokson IV di sekitar lesi' },
      { key: 'E', text: 'Berikan kompres hangat dan infus Natrium Bikarbonat' }
    ],
    correctAnswer: 'A',
    explanation: 'Doksorubisin adalah sitostatika golongan antrasiklin yang bersifat vesikan (memicu nekrosis jaringan). Tatalaksana ekstravasasi antrasiklin adalah: (1) Kompres DINGIN/ES kering selama 15 menit 4 kali sehari untuk membatasi penyebaran obat lokal dan mengurangi inflamasi, serta (2) Pemberian antidotum spesifik DEKSRAZOKSAN IV sesegera mungkin (dalam 6 jam pertama) yang bekerja sebagai kelator besi dan inhibitor topoisomerase II pencegah nekrosis jaringan. (Catatan: kompres hangat dan hialuronidase khusus untuk vinka alkaloid seperti Vinkristin).',
    clinicalReference: 'ESMO Clinical Practice Guidelines: Management of Chemotherapy Extravasation',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-1313',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien leukemia limfoblastik akut dengan massa tumor sangat besar mengalami sindrom lisis tumor (Tumor Lysis Syndrome) akut 24 jam pasca-kemoterapi. Hasil laboratorium menunjukkan kadar asam urat serum melonjak drastis hingga 14,2 mg/dL (normal: 3,5-7,2 mg/dL) disertai penurunan urin akibat nefropati kristal asam urat.',
    question: 'Obat apakah yang paling efektif dan cepat untuk mendegradasi asam urat yang sudah terbentuk dalam sirkulasi darah pasien tersebut?',
    options: [
      { key: 'A', text: 'Rasburikase IV' },
      { key: 'B', text: 'Alopurinol oral' },
      { key: 'C', text: 'Febuksostat oral' },
      { key: 'D', text: 'Probenesid' },
      { key: 'E', text: 'Kolkisin' }
    ],
    correctAnswer: 'A',
    explanation: 'Alopurinol dan Febuksostat bekerja menghambat enzim xantin oksidase, sehingga HANYA MENCEGAH pembentukan asam urat baru tetapi TIDAK DAPAT menguraikan asam urat yang sudah beredar dalam darah. Pada kondisi hiperurisemia berat mengancam jiwa akibat TLS (> 8-10 mg/dL), terapi lini pertama adalah RASBURIKASE IV (enzim urat oksidase rekombinan) yang bekerja secara langsung dan cepat mengkatalisis asam urat menjadi ALANTOIN (senyawa yang 5-10 kali lebih larut dalam air dibanding asam urat dan mudah diekskresikan ginjal tanpa mengendap).',
    clinicalReference: 'British Journal of Haematology: Guidelines on the Management of Tumor Lysis Syndrome',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1314',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien pria 62 tahun didiagnosis gagal jantung kronis dengan fraksi ejeksi ventrikel kiri 32% (HFrEF NYHA kelas II). Saat ini pasien telah rutin mengonsumsi Ramipril 1x5 mg, Bisoprolol 1x5 mg, dan Spironolakton 1x25 mg. Dokter spesialis jantung berencana mengganti Ramipril dengan Sakubitril-Valsartan (ARNI) untuk menurunkan mortalitas kardiovaskular.',
    question: 'Instruksi krusial apakah yang wajib disampaikan apoteker kepada pasien sebelum memulai tablet Sakubitril-Valsartan?',
    options: [
      { key: 'A', text: 'Ramipril harus dihentikan dan diberikan jeda waktu (washout period) minimal 36 jam sebelum dosis pertama Sakubitril-Valsartan diminum' },
      { key: 'B', text: 'Sakubitril-Valsartan langsung diminum bersamaan dengan Ramipril pada hari pertama' },
      { key: 'C', text: 'Ramipril dihentikan selama 1 jam saja sebelum minum Sakubitril-Valsartan' },
      { key: 'D', text: 'Dosis Bisoprolol harus digandakan sebelum memulai ARNI' },
      { key: 'E', text: 'Spironolakton harus dihentikan permanen' }
    ],
    correctAnswer: 'A',
    explanation: 'Sakubitril menghambat enzim neprilisin yang menguraikan bradikinin, sedangkan ACE inhibitor (Ramipril) juga menghambat penguraian bradikinin. Jika ACEI dan ARNI diberikan bersamaan atau tanpa jeda yang cukup, akumulasi masif bradikinin akan memicu risiko fatal ANGIOEDEMA (pembengkakan laring dan saluran nafas yang mengancam jiwa). Pedoman ESC dan ACC/AHA mewajibkan periode eliminasi (washout period) MINIMAL 36 JAM setelah dosis terakhir ACEI sebelum dosis pertama ARNI boleh dikonsumsi.',
    clinicalReference: 'ESC Guidelines for Heart Failure & PARADIGM-HF Trial Safety Protocols',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-1315',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien laki-laki 68 tahun dengan riwayat hipertensi dan diabetes mellitus tipe 2 terdeteksi mengalami fibrilasi atrium non-valvular persisten pada rekaman EKG. Skor CHA2DS2-VASc pasien dihitung bernilai 3. Hasil lab fungsi ginjal menunjukkan eGFR 55 mL/menit.',
    question: 'Pilihan terapi antikoagulan oral pencegahan stroke iskemik lini pertama yang paling tepat dan aman tanpa memerlukan monitoring nilai INR berkala adalah?',
    options: [
      { key: 'A', text: 'Apiksaban 2x5 mg atau Rivaroksaban 1x20 mg' },
      { key: 'B', text: 'Warfarin dengan target INR 2.0 - 3.0' },
      { key: 'C', text: 'Aspirin 1x80 mg kombinasi Klopidogrel 1x75 mg' },
      { key: 'D', text: 'Heparin molekul rendah (LMWH) subkutan seumur hidup' },
      { key: 'E', text: 'Klopidogrel monoterapi 1x75 mg' },
    ],
    correctAnswer: 'A',
    explanation: 'Pada pasien fibrilasi atrium non-valvular dengan skor CHA2DS2-VASc >= 2 pada pria (skor pasien = 3), terapi antikoagulan oral diwajibkan untuk mencegah tromboemboli otak (stroke). Golongan Direct Oral Anticoagulant (DOAC / NOAC) seperti Apiksaban, Rivaroksaban, atau Dabigatran merupakan LINI PERTAMA yang lebih direkomendasikan dibanding Warfarin karena memiliki efikasi superior atau sebanding dalam pencegahan stroke, risiko perdarahan intrakranial yang jauh lebih rendah, serta tidak memerlukan pemantauan rutin nilai INR. Antiplatelet (Aspirin/Klopidogrel) tidak efektif mencegah stroke kardioemboli pada AF.',
    clinicalReference: 'ESC/AHA/ACC Guidelines for the Management of Atrial Fibrillation',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1316',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien koinfeksi TB-HIV sedang menjalani terapi ARV lini pertama dengan paduan TLD (Tenofovir 300 mg + Lamivudin 300 mg + Dolutegravir 50 mg sekali sehari). Pasien kini didiagnosis tuberkulosis paru aktif dan akan memulai OAT kategori 1 yang mengandung Rifampisin.',
    question: 'Bagaimanakah rekomendasi penyesuaian dosis regimen ARV Dolutegravir (DTG) selama pasien mengonsumsi OAT Rifampisin?',
    options: [
      { key: 'A', text: 'Dosis Dolutegravir dinaikkan frekuensinya menjadi 50 mg dua kali sehari (tiap 12 jam)' },
      { key: 'B', text: 'Dosis Dolutegravir diturunkan menjadi 25 mg sekali sehari' },
      { key: 'C', text: 'Dolutegravir dihentikan dan diganti dengan Efavirenz 200 mg' },
      { key: 'D', text: 'Dosis Dolutegravir tetap 50 mg sekali sehari tanpa penyesuaian' },
      { key: 'E', text: 'Rifampisin diganti dengan Siprofloksasin' }
    ],
    correctAnswer: 'A',
    explanation: 'Rifampisin adalah induktor kuat enzim sitokrom P450 (CYP3A4) dan UGT1A1 di hepar. Dolutegravir (DTG) dimetabolisme oleh kedua enzim tersebut. Ko-administrasi Rifampisin dengan Dolutegravir menurunkan konsentrasi plasma Dolutegravir sebesar 50-70% (subterapeutik) yang memicu kegagalan virologi dan resistensi ARV. Sesuai pedoman WHO dan Kemenkes RI, penyesuaian dosis yang benar adalah MENAMBAHKAN DOSIS EKSTRA DOLUTEGRAVIR 50 MG dengan jarak 12 jam, sehingga dosis menjadi DOLUTEGRAVIR 50 MG DUA KALI SEHARI (BID). Dosis ganda ini dilanjutkan sampai 2 minggu setelah Rifampisin selesai.',
    clinicalReference: 'WHO Consolidated Guidelines on HIV Prevention, Diagnosis, Treatment and Care & Kemenkes RI',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-1317',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien gagal ginjal kronik stadium 5 dibawa ke IGD dengan kelemahan otot parah. Pemeriksaan EKG menunjukkan gelombang T tinggi lancip (tall tented T-wave) dan kompleks QRS yang mulai melebar. Hasil elektrolit darah cito menunjukkan Kalium serum 7,4 mEq/L (Hiperkalemia berat).',
    question: 'Obat apakah yang paling pertama harus disuntikkan secara intravena dalam waktu 1-3 menit untuk mencegah henti jantung?',
    options: [
      { key: 'A', text: 'Kalsium Glukonat 10% IV' },
      { key: 'B', text: 'Insulin Reguler 10 IU + Dekstrosa 50%' },
      { key: 'C', text: 'Furosemid 40 mg IV' },
      { key: 'D', text: 'Natrium Polistiren Sulfonat (Kayexalate)' },
      { key: 'E', text: 'Salbutamol nebulisasi' }
    ],
    correctAnswer: 'A',
    explanation: 'Pada hiperkalemia berat (K+ > 6.5 mEq/L) atau terdapat perubahan EKG, prioritas nomor satu yang paling mendesak adalah MENSTABILKAN MEMBRAN JANTUNG untuk mencegah aritmia letal (fibrilasi ventrikel atau asistol). KALSIUM GLUKONAT 10% 10 mL IV diberikan segera dalam 2-5 menit. Kalsium menormalkan ambang potensial aksi miosit jantung dalam 1-3 menit. Setelah membran stabil, barulah diberikan terapi redistribusi kalium intrasel (Insulin + D50 dan Salbutamol) serta eliminasi kalium (dialisis / diuretik / resin penukar ion).',
    clinicalReference: 'AHA Advanced Cardiovascular Life Support (ACLS) & KDIGO AKI Guidelines',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1318',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien pasca-operasi bedah saraf mengalami hiponatremia berat dengan kadar Natrium serum 112 mEq/L dan mengalami kejang umum berulang. Dokter memutuskan memberikan infus Natrium Klorida hipertonis 3% (NaCl 3%). Apoteker klinis bertugas memantau kecepatan laju peningkatan kadar natrium darah.',
    question: 'Berapakah batas maksimal peningkatan kadar Natrium serum yang diperbolehkan dalam 24 jam pertama untuk menghindari risiko komplikasi fatal Osmotic Demyelination Syndrome (ODS)?',
    options: [
      { key: 'A', text: 'Maksimal 8 - 10 mEq/L dalam 24 jam' },
      { key: 'B', text: 'Maksimal 20 - 25 mEq/L dalam 24 jam' },
      { key: 'C', text: 'Maksimal 30 mEq/L dalam 24 jam' },
      { key: 'D', text: 'Harus langsung dinormalkan ke 135 mEq/L dalam 6 jam' },
      { key: 'E', text: 'Maksimal 2 mEq/L dalam 24 jam' }
    ],
    correctAnswer: 'A',
    explanation: 'Koreksi hiponatremia kronis atau berat yang terlalu cepat akan memicu perpindahan cairan mendadak keluar dari sel-sel otak yang mengakibatkan sindrom demielinisasi osmotik (Osmotic Demyelination Syndrome / Central Pontine Myelinolysis) yang menyebabkan kelumpuhan tetraparesis permanen atau koma. Konsensus internasional menetapkan batas kenaikan Natrium maksimal adalah 8 - 10 mEq/L dalam kurun waktu 24 jam pertama (dan tidak melebihi 18 mEq/L dalam 48 jam). Target awal pada kejang akut cukup menaikkan natrium 4-6 mEq/L untuk menghentikan kejang.',
    clinicalReference: 'Clinical Practice Guideline on Diagnosis and Treatment of Hyponatraemia (European Society of Endocrinology)',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1319',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien pria 35 tahun dengan riwayat gangguan afektif bipolar fase manik rutin meminum Litium Karbonat 3x300 mg. Karena mengeluh sakit gigi hebat, pasien membeli obat pereda nyeri secara mandiri di warung berupa Asam Mefenamat 500 mg dan meminumnya 3 kali sehari selama 5 hari berturut-turut. Pasien kemudian datang ke IGD dengan keluhan tangan gemetar kasar (coarse tremor), sempoyongan (ataksia), dan bicara pelo.',
    question: 'Apakah mekanisme interaksi obat yang mendasari terjadinya gejala toksisitas litium pada pasien tersebut?',
    options: [
      { key: 'A', text: 'Asam Mefenamat menghambat sintesis prostaglandin ginjal sehingga menurunkan laju filtrasi glomerulus dan menurunkan ekskresi Litium' },
      { key: 'B', text: 'Asam Mefenamat menginduksi enzim metabolisme sitokrom P450 Litium di hepar' },
      { key: 'C', text: 'Asam Mefenamat meningkatkan absorpsi Litium di usus halus' },
      { key: 'D', text: 'Litium menggantikan ikatan protein plasma Asam Mefenamat' },
      { key: 'E', text: 'Asam Mefenamat mengasamkan urin dan memicu reabsorpsi Litium' }
    ],
    correctAnswer: 'A',
    explanation: 'Litium diekskresikan hampir 100% melalui filtrasi glomerulus ginjal tanpa melalui metabolisme hepar. Obat golongan NSAID (seperti Asam Mefenamat, Ibuprofen, Natrium Diklofenak) menghambat enzim siklooksigenase (COX) di ginjal, menurunkan sintesis prostaglandin vasodilator (PGE2 dan PGI2), sehingga terjadi vasokonstriksi arteriol aferen dan penurunan aliran darah ginjal. Hal ini menyebabkan penurunan klirens ginjal Litium secara drastis, retensi Litium, dan lonjakan kadar Litium darah hingga level toksik (> 1.5 - 2.0 mEq/L). Analgesik yang aman pada pengguna litium adalah Parasetamol.',
    clinicalReference: 'Stockley’s Drug Interactions & APA Practice Guideline for Bipolar Disorder',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1320',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien wanita 28 tahun penderita Grave’s disease dibawa ke ruang resusitasi dengan demam tinggi 40°C, takikardia 160 bpm, tremor hebat, dan delirium. Skor Burch-Wartofsky dihitung 60 (didiagnosis Krisis Tiroid / Thyroid Storm). Dokter meresepkan Propiltiourasil (PTU), Larutan Lugol (Kalium Iodida), Propranolol, dan Hidrokortison.',
    question: 'Berdasarkan aspek farmakologis dan efek Wolff-Chaikoff, bagaimanakah aturan urutan pemberian larutan Kalium Iodida (Lugol) terhadap PTU?',
    options: [
      { key: 'A', text: 'Larutan Lugol harus diberikan minimal 1 jam SETELAH dosis pertama PTU' },
      { key: 'B', text: 'Larutan Lugol harus diberikan 1 jam SEBELUM PTU diberikan' },
      { key: 'C', text: 'Larutan Lugol dicampurkan langsung ke dalam suspensi PTU' },
      { key: 'D', text: 'Larutan Lugol diberikan bersamaan tanpa jeda waktu' },
      { key: 'E', text: 'Larutan Lugol diberikan hanya jika PTU tidak menurunkan suhu setelah 24 jam' }
    ],
    correctAnswer: 'A',
    explanation: 'Pada krisis tiroid, PTU harus diberikan TERLEBIH DAHULU untuk memblokade sintesis hormon tiroid baru melalui penghambatan enzim tiroid peroksidase. Larutan Lugol (iodida anorganik) HARUS DIBERIKAN MINIMAL 1 JAM SETELAH PTU. Jika iodida diberikan sebelum atau bersamaan dengan PTU sebelum sintesis terblokir, ion iodida tersebut justru akan dimanfaatkan oleh kelenjar tiroid yang hiperaktif sebagai bahan baku/substrat untuk mensintesis hormon tiroid baru dalam jumlah masif (*Jod-Basedow phenomenon*), yang dapat memperburuk badai tiroid hingga berakibat fatal.',
    clinicalReference: 'American Thyroid Association Guidelines for Diagnosis and Management of Hyperthyroidism',
    difficulty: 'Tinggi'
  },

  // =========================================================================
  // 💼 DOMAIN 2: MANAJEMEN, FARMAKOEKONOMI & REGULASI (q-1321 s/d q-1327)
  // =========================================================================
  {
    id: 'q-1321',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Sebuah rumah sakit melakukan studi farmakoekonomi membandingkan Obat Antihipertensi A (standar) vs Obat Antihipertensi B (baru). Biaya total pengobatan A adalah Rp 2.000.000 per tahun dengan rata-rata penurunan tekanan darah sistolik 10 mmHg. Biaya total pengobatan B adalah Rp 5.000.000 per tahun dengan rata-rata penurunan sistolik 25 mmHg.',
    question: 'Berapakah nilai Incremental Cost-Effectiveness Ratio (ICER) dari penggunaan Obat B dibandingkan Obat A?',
    options: [
      { key: 'A', text: 'Rp 200.000 per mmHg penurunan tekanan darah sistolik' },
      { key: 'B', text: 'Rp 300.000 per mmHg penurunan tekanan darah sistolik' },
      { key: 'C', text: 'Rp 150.000 per mmHg penurunan tekanan darah sistolik' },
      { key: 'D', text: 'Rp 500.000 per mmHg penurunan tekanan darah sistolik' },
      { key: 'E', text: 'Rp 250.000 per mmHg penurunan tekanan darah sistolik' }
    ],
    correctAnswer: 'A',
    explanation: 'Rumus ICER = (Biaya Obat B - Biaya Obat A) / (Efektivitas Obat B - Efektivitas Obat A) = Delta C / Delta E.\nDelta Biaya = Rp 5.000.000 - Rp 2.000.000 = Rp 3.000.000.\nDelta Efektivitas = 25 mmHg - 10 mmHg = 15 mmHg.\nICER = Rp 3.000.000 / 15 mmHg = Rp 200.000 per mmHg penurunan tekanan darah sistolik.',
    clinicalReference: 'Pedoman Penerapan Kajian Farmakoekonomi Kementerian Kesehatan RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1322',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien kanker stadium lanjut dievaluasi kualitas hidupnya pasca-kemoterapi. Berdasarkan kuesioner EQ-5D, pasien memiliki nilai utilitas kualitas hidup sebesar 0,6 dan bertahan hidup selama 5 tahun.',
    question: 'Berapakah nilai Quality-Adjusted Life Years (QALY) yang diperoleh pasien tersebut?',
    options: [
      { key: 'A', text: '3,0 QALY' },
      { key: 'B', text: '5,0 QALY' },
      { key: 'C', text: '0,6 QALY' },
      { key: 'D', text: '8,3 QALY' },
      { key: 'E', text: '1,2 QALY' }
    ],
    correctAnswer: 'A',
    explanation: 'QALY (Quality-Adjusted Life Years) dihitung dengan mengalikan durasi tahun kehidupan (Life Years / LY) dengan skor utilitas kualitas hidup (Health-Related Quality of Life / HRQoL score antara 0 untuk kematian hingga 1 untuk kesehatan sempurna).\nQALY = 5 tahun x 0,6 = 3,0 QALY.',
    clinicalReference: 'Methods for the Economic Evaluation of Health Care Programmes (Drummond et al.)',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1323',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Laporan keuangan Apotek Sehat menunjukkan data akhir tahun: Persediaan Awal = Rp 80.000.000, Persediaan Akhir = Rp 120.000.000, dan Harga Pokok Penjualan (HPP) selama satu tahun = Rp 800.000.000.',
    question: 'Berapakah nilai Turn Over Ratio (TOR) perputaran persediaan apotek tersebut dalam satu tahun?',
    options: [
      { key: 'A', text: '8 kali per tahun' },
      { key: 'B', text: '10 kali per tahun' },
      { key: 'C', text: '6,67 kali per tahun' },
      { key: 'D', text: '4 kali per tahun' },
      { key: 'E', text: '12 kali per tahun' }
    ],
    correctAnswer: 'A',
    explanation: 'Rata-rata Persediaan = (Persediaan Awal + Persediaan Akhir) / 2 = (Rp 80.000.000 + Rp 120.000.000) / 2 = Rp 100.000.000.\nTOR = HPP / Rata-rata Persediaan = Rp 800.000.000 / Rp 100.000.000 = 8 kali per tahun.\nNilai TOR 8 kali menunjukkan perputaran modal barang dagangan apotek berputar sangat sehat dan efisien.',
    clinicalReference: 'Financial Management for Pharmacists & Manajemen Farmasi Komunitas',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1324',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Sebuah apotek baru memiliki Biaya Tetap (Fixed Cost) operasional sebesar Rp 60.000.000 per tahun. Apotek menjual obat dengan margin laba kotor 25% dari total omzet penjualan (sehingga rasio biaya variabel HPP adalah 75% dari penjualan).',
    question: 'Berapakah nilai Break-Even Point (BEP) penjualan apotek tersebut dalam rupiah?',
    options: [
      { key: 'A', text: 'Rp 240.000.000' },
      { key: 'B', text: 'Rp 180.000.000' },
      { key: 'C', text: 'Rp 150.000.000' },
      { key: 'D', text: 'Rp 300.000.000' },
      { key: 'E', text: 'Rp 80.000.000' }
    ],
    correctAnswer: 'A',
    explanation: 'Rumus BEP (Rupiah) = Biaya Tetap / [1 - (Biaya Variabel / Penjualan)].\nKarena Biaya Variabel / Penjualan = 75% (0.75), maka kontribusi margin = 1 - 0.75 = 0.25 (25%).\nBEP (Rupiah) = Rp 60.000.000 / 0.25 = Rp 240.000.000 per tahun.\nArtinya apotek harus mencapai omzet minimal Rp 240.000.000 agar tidak merugi (impas).',
    clinicalReference: 'Akuntansi dan Manajemen Finansial Farmasi',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1325',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Rata-rata penjualan sirup Parasetamol di apotek adalah 20 botol per hari. Waktu tunggu (lead time) pengiriman dari PBF rekanan adalah 3 hari. Apotek menetapkan persediaan pengaman (safety stock) setara dengan kebutuhan penjualan selama 2 hari.',
    question: 'Pada sisa stok berapakah apoteker harus melakukan pemesanan kembali (Reorder Point / ROP) ke PBF?',
    options: [
      { key: 'A', text: '100 botol' },
      { key: 'B', text: '60 botol' },
      { key: 'C', text: '40 botol' },
      { key: 'D', text: '80 botol' },
      { key: 'E', text: '120 botol' }
    ],
    correctAnswer: 'A',
    explanation: 'Lead Time Demand = Penggunaan Harian x Waktu Tunggu = 20 botol/hari x 3 hari = 60 botol.\nSafety Stock (SS) = 20 botol/hari x 2 hari = 40 botol.\nReorder Point (ROP) = Lead Time Demand + Safety Stock = 60 botol + 40 botol = 100 botol.\nKetika stok di apotek tersisa 100 botol, SP wajib diterbitkan agar tidak terjadi kekosongan obat saat barang baru tiba.',
    clinicalReference: 'Managing Drug Supply (MDS-3) Management Sciences for Health',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1326',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Apoteker penanggung jawab di apotek berencana melakukan pemesanan obat ke PBF resmi untuk stok: Tablet Morfin 10 mg, Injeksi Fentanil 0,05 mg/mL, Tablet Diazepam 2 mg, dan Kapsul Pseudoefedrin HCl 30 mg.',
    question: 'Berapakah jumlah Surat Pesanan (SP) terpisah yang wajib dibuat oleh apoteker sesuai regulasi Permenkes No. 3 Tahun 2015?',
    options: [
      { key: 'A', text: '4 lembar SP (1 SP Morfin, 1 SP Fentanil, 1 SP Diazepam, 1 SP Pseudoefedrin)' },
      { key: 'B', text: '3 lembar SP (1 SP Narkotika gabungan, 1 SP Psikotropika, 1 SP Prekursor)' },
      { key: 'C', text: '2 lembar SP (1 SP Narkotika-Psikotropika, 1 SP Prekursor)' },
      { key: 'D', text: '1 lembar SP yang mencakup seluruh item' },
      { key: 'E', text: '5 lembar SP' }
    ],
    correctAnswer: 'A',
    explanation: 'Sesuai Permenkes No. 3 Tahun 2015:\n1. NARKOTIKA: Satu lembar SP Narkotika KHUSUS HANYA BOLEH MEMUAT 1 (SATU) JENIS ITEM OBAT. Karena ada 2 item narkotika (Morfin dan Fentanil), wajib dibuat 2 SP Narkotika terpisah.\n2. PSIKOTROPIKA: Diazepam dibuat pada 1 lembar SP Psikotropika tersendiri.\n3. PREKURSOR FARMASI: Pseudoefedrin dibuat pada 1 lembar SP Prekursor tersendiri.\nTotal Surat Pesanan yang harus dibuat adalah 4 lembar SP.',
    clinicalReference: 'Permenkes RI No. 3 Tahun 2015 tentang Peredaran, Penyimpanan, Pemusnahan, dan Pelaporan Narkotika, Psikotropika, dan Prekursor Farmasi',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1327',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Apoteker Penanggung Jawab Apotek hendak melakukan pelaporan rutin bulanan penggunaan dan sirkulasi Narkotika dan Psikotropika melalui sistem elektronik SIPNAP Kementerian Kesehatan RI.',
    question: 'Kapan batas waktu paling lambat pelaporan SIPNAP wajib dikirimkan setiap bulannya?',
    options: [
      { key: 'A', text: 'Paling lambat tanggal 10 setiap bulan berikutnya' },
      { key: 'B', text: 'Paling lambat tanggal 25 setiap bulan berjalan' },
      { key: 'C', text: 'Paling lambat tanggal 1 setiap bulan berikutnya' },
      { key: 'D', text: 'Paling lambat akhir tahun tanggal 31 Desember' },
      { key: 'E', text: 'Setiap 3 bulan sekali (triwulanan)' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Permenkes RI No. 3 Tahun 2015 Pasal 45, Apotek, Instalasi Farmasi Rumah Sakit, dan Puskesmas wajib membuat, menyimpan, dan menyampaikan laporan pemasukan dan penyerahan/penggunaan Narkotika dan Psikotropika setiap bulan PALING LAMBAT TANGGAL 10 SETIAP BULAN BERIKUTNYA kepada Kepala Dinas Kesehatan Kabupaten/Kota dengan tembusan Kepala Balai POM setempat melalui aplikasi SIPNAP (walaupun transaksi nihil).',
    clinicalReference: 'Permenkes RI No. 3 Tahun 2015',
    difficulty: 'Mudah'
  },

  // =========================================================================
  // 🔬 DOMAIN 3: TEKNOLOGI FARMASI & CPOB 2024 (q-1328 s/d q-1331)
  // =========================================================================
  {
    id: 'q-1328',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Bagian Pemastian Mutu (QA) industri farmasi mendesain sistem tata udara (HVAC) untuk dua fasilitas produksi: Ruang Pengisian Aseptis Injeksi Steril dan Ruang Pencetakan Tablet Parasetamol.',
    question: 'Bagaimanakah prinsip kaskade perbedaan tekanan udara (differential pressure) yang benar untuk kedua ruangan tersebut terhadap koridor di sekitarnya?',
    options: [
      { key: 'A', text: 'Ruang Pengisian Aseptis bertekanan POSITIF terhadap koridor; Ruang Pencetakan Tablet bertekanan NEGATIF terhadap koridor' },
      { key: 'B', text: 'Kedua ruangan harus bertekanan positif terhadap koridor' },
      { key: 'C', text: 'Kedua ruangan harus bertekanan negatif terhadap koridor' },
      { key: 'D', text: 'Ruang Pengisian Aseptis bertekanan negatif; Ruang Pencetakan Tablet bertekanan positif' },
      { key: 'E', text: 'Tekanan seluruh ruangan harus sama persis (0 Pascal)' }
    ],
    correctAnswer: 'A',
    explanation: '1. Ruang Pengisian Aseptis (Steril): Harus bertekanan POSITIF (+10 s/d 15 Pa) terhadap koridor agar udara bersih mengalir ke luar, sehingga partikel debu dan mikroba dari koridor tidak dapat masuk ke dalam ruang aseptis.\n2. Ruang Pencetakan Tablet (Non-steril berdebu): Harus bertekanan NEGATIF (-10 s/d 15 Pa) terhadap koridor agar debu serbuk obat terperangkap di dalam ruangan dan tersedot dust collector, mencegah debu keluar mencemari koridor dan produk lain (mencegah kontaminasi silang / cross-contamination).',
    clinicalReference: 'Petunjuk Operasional Penerapan Pedoman CPOB BPOM RI Sistem Tata Udara (HVAC)',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1329',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Departemen Pengawasan Mutu (QC) melakukan pengujian pirogenitas air untuk injeksi (Water for Injection / WFI) menggunakan reagen Limulus Amebocyte Lysate (LAL Test) dengan metode pembentukan gel (gel-clot technique).',
    question: 'Berapakah batas maksimal kandungan endotoksin bakteri pada sediaan WFI menurut Farmakope Indonesia Edisi VI?',
    options: [
      { key: 'A', text: 'Kurang dari 0,25 Endotoxin Unit (EU) per mL' },
      { key: 'B', text: 'Kurang dari 10 EU per mL' },
      { key: 'C', text: 'Kurang dari 5,0 EU per mL' },
      { key: 'D', text: 'Kurang dari 0,001 EU per mL' },
      { key: 'E', text: 'Harus 0 EU (sama sekali tidak boleh terdeteksi)' }
    ],
    correctAnswer: 'A',
    explanation: 'Menurut Farmakope Indonesia Edisi VI dan United States Pharmacopeia (USP), batas maksimal cemaran endotoksin bakteri untuk Air untuk Injeksi (Water for Injection / WFI) adalah KURANG DARI 0,25 Endotoxin Unit per mililiter (< 0,25 EU/mL) yang diuji menggunakan pereaksi LAL dari kepiting tapal kuda Limulus polyphemus.',
    clinicalReference: 'Farmakope Indonesia Edisi VI Monografi Air untuk Injeksi & Uji Endotoksin Bakteri <201>',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1330',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Industri farmasi melakukan Uji Disolusi Terbandingkan (UDT) terhadap formulasi baru tablet Kaptopril generik berbanding dengan obat inovator pada pH 1.2, 4.5, dan 6.8. Hasil perhitungan faktor kemiripan (similarity factor) pada pH 4.5 menghasilkan nilai f2 sebesar 38.',
    question: 'Bagaimanakah kesimpulan apoteker bagian Formulasi dan Pemastian Mutu terhadap ekivalensi in vitro produk tersebut?',
    options: [
      { key: 'A', text: 'Profil disolusi produk baru TIDAK EKIVALEN (berbeda signifikan) terhadap produk inovator karena nilai f2 < 50' },
      { key: 'B', text: 'Profil disolusi produk baru dinyatakan EKIVALEN karena nilai f2 berada di bawah 50' },
      { key: 'C', text: 'Produk dinyatakan bioekivalen langsung tanpa perlu uji klinis' },
      { key: 'D', text: 'Nilai f2 38 menunjukkan kemiripan sebesar 95%' },
      { key: 'E', text: 'Pengujian harus diulang dengan menaikkan suhu disolusi ke 45°C' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan pedoman BPOM RI dan FDA, kriteria penerimaan faktor kemiripan (f2) untuk menyatakan dua profil disolusi ekivalen (mirip / serupa) adalah: 50 <= f2 <= 100. Nilai f2 sebesar 50 menunjukkan perbedaan rata-rata disolusi sebesar 10% di setiap titik waktu. Karena nilai f2 tablet Kaptopril tersebut bernilai 38 (< 50), maka profil disolusi dinyatakan BERBEDA SIGNIFIKAN / TIDAK EKIVALEN dengan produk inovator, sehingga formula harus direvisi.',
    clinicalReference: 'Pedoman Uji Bioekivalensi BPOM RI',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1331',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Untuk membuktikan keandalan proses pengisian aseptis sediaan injeksi vial steril tanpa sterilisasi akhir, apoteker QA melakukan simulasi proses pengisian menggunakan media cair Tryptic Soy Broth (TSB) sebanyak 5.000 unit vial (Media Fill Test). Setelah diinkubasi selama 14 hari, seluruh vial tampak jernih tanpa kekeruhan.',
    question: 'Berapakah jumlah maksimal unit wadah terkontaminasi yang dapat diterima pada pengisian 5.000 unit media fill menurut standar CPOB 2024?',
    options: [
      { key: 'A', text: '0 unit terkontaminasi (Zero Contamination)' },
      { key: 'B', text: '5 unit terkontaminasi (0,1%)' },
      { key: 'C', text: '10 unit terkontaminasi' },
      { key: 'D', text: '50 unit terkontaminasi' },
      { key: 'E', text: '1 unit terkontaminasi' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan CPOB Aneks 1 (Pembuatan Produk Steril), target penerimaan simulasi proses aseptis (Media Fill Test) adalah KONTAMINASI NOL (Zero Contamination). Pada pengisian kurang dari 5.000 unit, tidak boleh ada wadah terkontaminasi sama sekali. Bila diisi 5.000 hingga 10.000 unit, ditemukannya 1 unit terkontaminasi akan memicu investigasi mendalam dan pengulangan media fill, sedangkan kontaminasi > 1 unit menyatakan proses simulasi GAGAL (tidak memenuhi syarat).',
    clinicalReference: 'CPOB 2024 Aneks 1: Pembuatan Produk Steril (Media Fill Validation)',
    difficulty: 'Sedang'
  },

  // =========================================================================
  // 🌿 DOMAIN 4: BAHAN ALAM & FITOFARMAKA (q-1332 s/d q-1335)
  // =========================================================================
  {
    id: 'q-1332',
    domainId: 'bahan_alam',
    targetExam: 'ukmppai',
    vignette: 'Dalam pengujian mutu simplisia rimpang Kunyit (Curcuma domestica), analis laboratorium membakar sampel simplisia di dalam tanur muffle pada suhu 600°C, lalu melarutkan sisa abu dengan asam klorida encer mendidih. Bagian yang tidak larut disaring dan ditimbang sebagai Kadar Abu Tidak Larut Asam.',
    question: 'Parameter cemaran apakah yang secara spesifik diukur melalui pengujian kadar abu tidak larut asam tersebut?',
    options: [
      { key: 'A', text: 'Cemaran zat anorganik eksternal seperti pasir, silikat, dan tanah' },
      { key: 'B', text: 'Kandungan air dan pelarut volatil' },
      { key: 'C', text: 'Kandungan logam kalium dan kalsium fisiologis tanaman' },
      { key: 'D', text: 'Cemaran kapang dan khamir' },
      { key: 'E', text: 'Kadar senyawa fenolik kurkuminoid' }
    ],
    correctAnswer: 'A',
    explanation: 'Kadar abu total mengukur seluruh mineral (baik fisiologis dari tanaman maupun non-fisiologis dari luar). Namun, ketika abu dilarutkan dengan HCl encer, senyawa silikat, kuarsa, pasir, dan tanah tidak akan larut dalam asam. Oleh karena itu, penetapan KADAR ABU TIDAK LARUT ASAM secara spesifik bertujuan untuk mengukur tingkat kebersihan simplisia dari CEMARAN PASIR, SILIKAT, ATAU TANAH yang terbawa saat proses pemanenan.',
    clinicalReference: 'Farmakope Herbal Indonesia Edisi II & Parameter Standar Umum Ekstrak Tumbuhan Obat BPOM',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1333',
    domainId: 'bahan_alam',
    targetExam: 'ukmppai',
    vignette: 'Industri Obat Tradisional (IOT) memproduksi kapsul ekstrak herba Sambiloto (Andrographis paniculata) terstandar sebagai produk Obat Herbal Terstandar (OHT) imunomodulator.',
    question: 'Senyawa marker aktif golongan lakton diterpenoid berasa sangat pahit apakah yang menjadi penanda baku mutu sediaan tersebut?',
    options: [
      { key: 'A', text: 'Andrografolid' },
      { key: 'B', text: 'Kurkuminoid' },
      { key: 'C', text: 'Kuersetin' },
      { key: 'D', text: 'Asiatikosid' },
      { key: 'E', text: 'Filantin' }
    ],
    correctAnswer: 'A',
    explanation: 'Senyawa marker aktif utama dari herba Sambiloto (Andrographis paniculata) adalah ANDROGRAFOLID, yaitu senyawa lakton diterpenoid bisiklik yang memberikan rasa sangat pahit dan memiliki aktivitas farmakologis sebagai antiinflamasi, imunomodulator, dan antidiabetes.',
    clinicalReference: 'Farmakope Herbal Indonesia Monografi Ekstrak Herba Sambiloto',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1334',
    domainId: 'bahan_alam',
    targetExam: 'ukmppai',
    vignette: 'Departemen QC pabrik jamu melakukan uji identifikasi fitokimia terhadap ekstrak daun Jambu Biji (Psidium guajava). Ekstrak ditambah serbuk logam Magnesium dan beberapa tetes Asam Klorida pekat, menghasilkan perubahan warna larutan menjadi merah jingga menyala (Uji Shinoda/Wilstatter).',
    question: 'Golongan metabolit sekunder apakah yang memberikan hasil positif pada pengujian tersebut?',
    options: [
      { key: 'A', text: 'Flavonoid' },
      { key: 'B', text: 'Alkaloid' },
      { key: 'C', text: 'Saponin' },
      { key: 'D', text: 'Tanin' },
      { key: 'E', text: 'Minyak atsiri' }
    ],
    correctAnswer: 'A',
    explanation: 'Uji Wilstatter (Uji Shinoda) menggunakan serbuk logam Magnesium (Mg) dan HCl pekat adalah reaksi reduksi spesifik untuk mengidentifikasi inti benzopiron pada senyawa golongan FLAVONOID (seperti Kuersetin). Logam Mg mereduksi cincin piron flavonoid membentuk garam flavilium yang berwarna merah intens, jingga, atau magenta.',
    clinicalReference: 'Metode Fitokimia: Penuntun Cara Modern Menganalisis Tumbuhan (Harborne)',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1335',
    domainId: 'bahan_alam',
    targetExam: 'ukmppai',
    vignette: 'Dalam membedakan rimpang Temulawak (Curcuma xanthorrhiza) dan rimpang Kunyit (Curcuma longa), apoteker QC melakukan analisis kromatografi gas terhadap kandungan minyak atsiri khas yang hanya terdapat pada Temulawak namun tidak dijumpai pada Kunyit.',
    question: 'Senyawa penanda khas golongan terpenoid bisiklik apakah yang dimaksud?',
    options: [
      { key: 'A', text: 'Xantorizol' },
      { key: 'B', text: 'Kurkumin' },
      { key: 'C', text: 'Desmetoksikurkumin' },
      { key: 'D', text: 'Bisdesmetoksikurkumin' },
      { key: 'E', text: 'Zingiberen' }
    ],
    correctAnswer: 'A',
    explanation: 'Meskipun Temulawak dan Kunyit sama-sama mengandung pigmen kuning kurkuminoid, senyawa XANTORIZOL (seskuiterpenoid aromatik) HANYA TERDAPAT PADA TEMULAWAK (Curcuma xanthorrhiza) dan TIDAK PERNAH DITEMUKAN PADA KUNYIT (Curcuma longa). Oleh karena itu, Xantorizol merupakan biomarker pembeda paling autentik untuk mencegah pemalsuan simplisia temulawak.',
    clinicalReference: 'Farmakope Herbal Indonesia Monografi Rimpang Temulawak',
    difficulty: 'Sedang'
  }
];
