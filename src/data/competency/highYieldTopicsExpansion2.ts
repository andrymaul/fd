import { HighYieldTopic } from '../competencyExamData';

/**
 * Ekspansi Rangkuman Materi High-Yield Bagian 2 (+20 Topik Baru)
 * Modul Pusat Belajar Uji Kompetensi Farmasi (UKMPPAI & UKTVF)
 * Mengacu pada 4 Blueprint KFN, IAI, APTFI, PAPDI, PERKI, CPOB & FHI
 */
export const HIGH_YIELD_TOPICS_EXPANSION_2: HighYieldTopic[] = [
  // =========================================================================
  // DOMAIN 1: FARMASI KLINIS & FARMAKOTERAPI (+8 TOPIK)
  // =========================================================================
  {
    id: 'top-anaphylaxis-sepsis',
    domainId: 'klinis',
    title: 'Kegawatdaruratan Syok: Syok Anafilaksis & Syok Septik (Surviving Sepsis Campaign)',
    category: 'Gawat Darurat & Kritis',
    tags: ['Anafilaksis', 'Epinefrin', 'Syok Septik', 'Norepinefrin', 'Kristaloid', 'MAP'],
    summary: 'Syok anafilaksis adalah reaksi hipersensitivitas tipe I diperantarai IgE yang mengancam nyawa dengan kolaps kardiovaskular dan bronkospasme; obat lini pertama mutlak adalah Epinefrin Intramuskular (IM). Syok septik adalah sepsis dengan hipotensi refrakter yang membutuhkan vasopresor (Norepinefrin) untuk mempertahankan MAP >= 65 mmHg dan laktat serum > 2 mmol/L meski telah diresusitasi cairan kristaloid adekuat.',
    keyPearls: [
      'Syok Anafilaksis Lini Pertama: EPINEFRIN (ADRENALIN) 1:1.000 (1 mg/mL) dosis 0,3 - 0,5 mg secara INTRAMUSKULAR (IM) di paha anterolateral (vastus lateralis). Onset jauh lebih cepat dibanding subkutan.',
      'Dosis Anak Epinefrin IM: 0,01 mg/kgBB (maksimal 0,3 mg) diulang tiap 5-15 menit jika belum ada respons perbaikan.',
      'Terapi Tambahan Anafilaksis (Lini Kedua): Antihistamin H1 (Difenhidramin 25-50 mg IV) + Kortikosteroid (Metilprednisolon 1-2 mg/kgBB IV) untuk mencegah reaksi bifasik lambat (reaksi rebound 4-8 jam kemudian).',
      'Syok Septik Bundel 1 Jam (Surviving Sepsis): (1) Ukur kadar asam laktat serum, (2) Ambil kultur darah sebelum antibiotik, (3) Mulai antibiotik spektrum luas IV dalam 1 jam pertama, (4) Resusitasi cairan kristaloid cepat 30 mL/kgBB dalam 3 jam pertama.',
      'Vasopresor Lini Pertama Syok Septik: NOREPINEFRIN IV titrasi (target MAP >= 65 mmHg). Jika MAP belum tercapai, tambahkan Vasopresin (0,03 unit/menit). Dopamin TIDAK LAGI DIANJURKAN karena memicu takiaritmia fatal.'
    ],
    frequentExamPitfalls: [
      'Jebakan fatal ujian: Memilih Antihistamin (Difenhidramin) atau Deksametason sebagai lini pertama anafilaksis. Lini pertama MUTLAK adalah EPINEFRIN IM. Antihistamin dan kortikosteroid bekerja lambat dan tidak mencegah henti napas/kolaps vaskular.',
      'Epinefrin pada anafilaksis diberikan INTRAMUSKULAR (IM), BUKAN Intravena (IV) bolus cepat (karena IV bolus dapat memicu krisis hipertensi, aritmia ventrikel letal, dan infark miokard).'
    ],
    referenceStandard: 'World Allergy Organization (WAO) Anaphylaxis Guidelines & Surviving Sepsis Campaign Guidelines'
  },
  {
    id: 'top-hepatic-encephalopathy',
    domainId: 'klinis',
    title: 'Sirosis Hepatis: Asites, Ensefalopati Hepatik & Perdarahan Varises Esofagus',
    category: 'Gastrointestinal & Hepatologi',
    tags: ['Sirosis', 'Ensefalopati', 'Laktulosa', 'Rifaximin', 'Spironolakton', 'Propranolol', 'Oktreotid'],
    summary: 'Komplikasi utama sirosis meliputi hipertensi portal yang memicu asites, varises esofagus, dan ensefalopati hepatik akibat penumpukan amonia neurotoksik. Penatalaksanaan membutuhkan diuretik rasio khusus, disakarida non-absorbable untuk memerangkap amonia di lumen kolon, serta vasokonstriktor splanknik untuk perdarahan varises akut.',
    keyPearls: [
      'Terapi Ensefalopati Hepatik Lini Pertama: LAKTULOSA sirup (dosis titrasi 20-30 g atau 30-45 mL, 3-4 kali sehari per oral/NGT) dengan target buang air besar (BAB) lembek 2-3 kali per hari.',
      'Mekanisme Laktulosa: Difermentasi oleh bakteri kolon menjadi asam laktat/asetat yang menurunkan pH kolon (< 5,0); suasana asam mengubah Amonia (NH3, mudah diserap ke otak) menjadi ion Amonium (NH4+, bermuatan dan tidak dapat menembus sawar mukosa), sehingga terperangkap dan dibuang lewat feses (ammonia trapping).',
      'Terapi Tambahan Ensefalopati: Tambahkan RIFAXIMIN 550 mg 2x sehari jika ensefalopati berulang meski terapi laktulosa optimal (antibiotik non-absorbable yang menekan bakteri penghasil urease di usus).',
      'Tata Laksana Asites Sirosis: Restriksi natrium (< 2 g garam/hari) + Kombinasi baku diuretik rasio SPIRONOLAKTON 100 mg : FUROSEMID 40 mg PO (dapat dititrasi bertahap hingga maksimal 400 mg : 160 mg). Rasio 100:40 mempertahankan keseimbangan kalium serum normal.',
      'Perdarahan Varises Esofagus Akut: OKTREOTID (atau Somatostatin) IV bolus 50 mcg dilanjutkan drip 50 mcg/jam selama 2-5 hari untuk menurunkan aliran darah splanknik + Antibiotik profilaksis Sefotaksim/Seftriakson 1 g/hari untuk mencegah peritonitis bakterial spontan (SBP).',
      'Pencegahan Sekunder Varises Esofagus: Non-selective Beta Blocker (PROPRANOLOL 20-40 mg 2x/hari atau NADOLOL) untuk menurunkan tekanan vena porta melalui vasokonstriksi reseptor beta-2 splanknik.'
    ],
    frequentExamPitfalls: [
      'Jangan memberikan sedatif benzodiazepin atau opioid pada pasien sirosis dengan disorientasi karena akan memperburuk koma ensefalopati hepatik.',
      'Untuk asites sirosis, jangan gunakan Furosemid monoterapi tanpa Spironolakton karena asites sirosis dipicu oleh hiperaldosteronisme sekunder masif.'
    ],
    referenceStandard: 'AASLD Practice Guidance on Liver Cirrhosis & Konsensus PPHI (Perhimpunan Peneliti Hati Indonesia)'
  },
  {
    id: 'top-uti-pyelonephritis',
    domainId: 'klinis',
    title: 'Infeksi Saluran Kemih (ISK) Komplikata, Non-Komplikata & Pielonefritis Akut',
    category: 'Infeksi & Saluran Kemih',
    tags: ['ISK', 'Sistitis', 'Pielonefritis', 'E. coli', 'Fosfomisin', 'Siprofloksasin', 'Seftriakson'],
    summary: 'Infeksi saluran kemih dibedakan menjadi ISK bawah (sistitis: disuria, urgensi, frekuensi) dan ISK atas (pielonefritis akut: demam tinggi, menggigil, nyeri ketok sudut kostovertebra / CVA tenderness). Terapi empiris disesuaikan dengan status komplikasi dan profil pola resistensi antibiotik lokal.',
    keyPearls: [
      'Sistitis Tanpa Komplikasi (Uncomplicated Cystitis pada wanita tidak hamil):',
      '• Lini 1: NITROFURANTOIN monohidrat 100 mg 2x/hari selama 5 hari (kontraindikasi jika CrCl < 30 mL/min karena tidak mencapai konsentrasi terapeutik di urin).',
      '• Lini 1 Alternatif: FOSFOMISIN TROMETAMOL 3 g sachet serbuk oral dosis tunggal (single dose).',
      '• Pilihan lain: KOTRIMOKSAZOL (TMP-SMX 160/800 mg) 2x/hari selama 3 hari HANYA jika laju resistensi lokal E. coli < 20%.',
      'Pielonefritis Akut (ISK Atas Rawat Jalan):',
      '• Fluorokuinolon: SIPROFLOKSASIN 500 mg 2x/hari selama 7 hari atau LEVOFLOKSASIN 750 mg 1x/hari selama 5 hari.',
      'Pielonefritis Akut Rawat Inap (Demam tinggi, mual muntah, sepsis):',
      '• SEFTRIAKSON 1-2 g IV 1x/hari atau SEFOTAKSIM 1-2 g IV tiap 8 jam atau Aminoglikosida (Gentamisin 5-7 mg/kg/hari).',
      'ISK pada Laki-Laki: Selalu dianggap ISK KOMPLIKATA (curigai keterlibatan hiperplasia prostat BPH atau prostatitis). Terapi antibiotik minimal 7 - 14 hari.',
      'Fenazopiridin (Pyridium): Analgesik saluran kemih topikal untuk meredakan nyeri disuria hebat (edukasi: mengubah warna urin menjadi jingga/merah menyala; gunakan maksimal 2 hari bersamaan antibiotik).'
    ],
    frequentExamPitfalls: [
      'Fluorokuinolon (Siprofloksasin) TIDAK LAGI menjadi lini pertama untuk sistitis tanpa komplikasi sederhana karena risiko efek samping tendinitis ruptur tendon dan resistensi luas (reserve untuk pielonefritis).',
      'Nitrofurantoin TIDAK EFEKTIF dan KONTRAINDIKASI untuk Pielonefritis karena kadar jaringan di parenkim ginjal sangat rendah (hanya pekat di vesika urinaria).'
    ],
    referenceStandard: 'IDSA Guidelines for Treatment of Acute Uncomplicated Cystitis & EAU Urological Infections Guidelines'
  },
  {
    id: 'top-doac-warfarin-inr',
    domainId: 'klinis',
    title: 'Antikoagulan Oral: DOAC (Rivaroxaban, Apixaban, Dabigatran) vs Warfarin & Monitoring INR',
    category: 'Hematologi & Kardiovaskular',
    tags: ['Antikoagulan', 'Warfarin', 'INR', 'DOAC', 'Rivaroxaban', 'Dabigatran', 'Vitamin K', 'Idarucizumab'],
    summary: 'Direct Oral Anticoagulants (DOACs) kini menjadi lini pertama untuk pencegahan stroke pada Fibrilasi Atrium Non-Valvular dan tata laksana DVT/PE karena onset cepat, tanpa perlu pemantauan lab rutin, dan risiko perdarahan intrakranial lebih rendah. Warfarin tetap menjadi baku emas mutlak pada Fibrilasi Atrium Valvular (katup prostetik mekanik atau stenosis mitral sedang-berat).',
    keyPearls: [
      'Mekanisme Kerja Golongan Antikoagulan:',
      '• Inhibitor Faktor Xa Direk: RIVAROXABAN (15-20 mg 1x/hari bersama makan malam untuk absorpsi optimal) dan APIXABAN (2,5-5 mg 2x/hari).',
      '• Inhibitor Trombin (Faktor IIa) Direk: DABIGATRAN etexilate (110-150 mg 2x/hari; sediaan kapsul tidak boleh dibuka/digerus karena bioavailabilitas melonjak 75%).',
      '• Antagonis Vitamin K: WARFARIN (menghambat enzim VKORC1, menekan sintesis faktor pembekuan dependen vit K: II, VII, IX, X, Protein C & S).',
      'Target Nilai INR Warfarin:',
      '• Fibrilasi Atrium & DVT/PE: Target INR 2,0 - 3,0.',
      '• Katup Jantung Mekanik Aorta/Mitral: Target INR 2,5 - 3,5.',
      'Antidotum Reversal Spesifik Jika Terjadi Perdarahan Mayor Mengancam Nyawa:',
      '• Warfarin: VITAMIN K1 (Fitomenadion) IV lambat 5-10 mg + Prothrombin Complex Concentrate (PCC) 4-faktor.',
      '• Dabigatran: IDARUCIZUMAB (Praxbind) IV bolus 5 g (2 x 2,5 g).',
      '• Rivaroxaban / Apixaban: ANDEXANET ALFA (Andexxa) IV infus atau PCC 4-faktor.',
      '• Heparin Unfractionated (UFH): PROTAMINE SULFAT (1 mg protamin menetralkan ~100 unit heparin).'
    ],
    frequentExamPitfalls: [
      'DOAC KONTRAINDIKASI MUTLAK pada pasien Fibrilasi Atrium dengan Katup Jantung Mekanik (Mechanical Heart Valve) karena meningkatkan kegagalan tromboemboli (WAJIB gunakan Warfarin).',
      'Interaksi Makanan Warfarin: Sayuran hijau kaya vitamin K (bayam, brokoli, kale) tidak dilarang total, melainkan harus dikonsumsi dalam JUMLAH KONSISTEN setiap hari agar nilai INR tidak fluktuatif.'
    ],
    referenceStandard: 'Chest Guidelines on Antithrombotic Therapy & ESC Guidelines on Atrial Fibrillation'
  },
  {
    id: 'top-thyroid-crisis-storm',
    domainId: 'klinis',
    title: 'Gangguan Tiroid: Krisis Tiroid (Thyroid Storm) vs Koma Miksedema & Terapi Hipertiroid',
    category: 'Endokrin & Metabolik',
    tags: ['Hipertiroid', 'Tiroid', 'PTU', 'Metimazol', 'Thyroid Storm', 'Levotiroksin', 'Lugol'],
    summary: 'Hipertiroidisme paling sering disebabkan Grave\'s disease. Krisis tiroid (Thyroid Storm) adalah kondisi hipermetabolik darurat dengan hiperpireksia (> 39-40°C), takiaritmia, dan gagal jantung. Sebaliknya, koma miksedema adalah komplikasi ekstrem hipotiroidisme berat dengan hipotermia, bradikardia, dan hipoventilasi.',
    keyPearls: [
      'Terapi Farmakologi Hipertiroid Kronis:',
      '• METIMAZOL (Thiamazole): Lini pertama untuk hampir semua pasien karena efikasi lebih kuat, waktu paruh panjang (dosis 1x sehari), dan risiko hepatotoksisitas lebih rendah dibanding PTU.',
      '• PROPILTIOURASIL (PTU): Pilihan utama HANYA pada trimester pertama kehamilan (Metimazol teratogenik: aplasia cutis & atresia koana) dan pada KRISIS TIROID (PTU menghambat konversi perifer T4 menjadi T3 aktif). Pada trimester 2-3 kehamilan, ganti kembali ke Metimazol (cegah gagal hepar maternal).',
      'Protokol 4 Pilar Penanganan Krisis Tiroid (Thyroid Storm):',
      '1. Blok Sintesis Hormon Baru: PTU 500-1.000 mg loading dose dilanjutkan 200-250 mg tiap 4 jam.',
      '2. Blok Pelepasan Hormon dari Kelenjar: Kalium Iodida / LARUTAN LUGOL (5 tetes tiap 6-8 jam) DIBERIKAN MINIMAL 1 JAM SETELAH PTU (jika diberikan sebelum PTU, iodida akan menjadi substrat sintesis hormon tiroid baru / fenomena Jod-Basedow).',
      '3. Blok Manifestasi Adrenergik: PROPRANOLOL 60-80 mg oral tiap 4-6 jam (atau Esmolol IV) untuk kendali denyut jantung dan menghambat konversi T4 ke T3.',
      '4. Stabilisasi Glukokortikoid: HIDROKORTISON 100 mg IV tiap 8 jam untuk mengatasi insufisiensi adrenal relatif.',
      'Koma Miksedema: LEVOTIROKSIN (L-T4) IV bolus 200-400 mcg + Hidrokortison IV 100 mg (wajib sebelum/bersamaan T4 untuk mencegah krisis adrenal akut) + pemanasan pasif.'
    ],
    frequentExamPitfalls: [
      'Efek samping berbahaya PTU & Metimazol: AGRANULOSITOSIS (gejala: demam tiba-tiba dan nyeri tenggorokan/faringitis). Pasien wajib diedukasi segera periksa leukosit dan stop obat jika demam.',
      'Pemberian Lugol / Kalium Iodida pada krisis tiroid HARUS DITUNDA minimal 1 jam setelah pemberian PTU/Metimazol.'
    ],
    referenceStandard: 'American Thyroid Association (ATA) Guidelines for Diagnosis and Management of Hyperthyroidism'
  },
  {
    id: 'top-cinv-extravasation',
    domainId: 'klinis',
    title: 'Terapi Suportif Onkologi: Pencegahan CINV Emetogenik Tinggi & Ekstravasasi Sitostatika',
    category: 'Onkologi & Imunologi',
    tags: ['Onkologi', 'CINV', 'Sisplatin', 'Ondansetron', 'Aprepitant', 'Deksametason', 'Ekstravasasi', 'Mesna'],
    summary: 'Terapi suportif onkologi berfokus pada pencegahan mual-muntah akibat kemoterapi (Chemotherapy-Induced Nausea and Vomiting / CINV) berdasarkan potensi emetogenik regimen, proteksi organ spesifik dari metabolit toksik, serta penanganan kegawatdaruratan ekstravasasi sitostatika vesikan.',
    keyPearls: [
      'Regimen Kemoterapi Emetogenik Sangat Tinggi (HEC > 90%: Sisplatin, Doksorubisin + Siklofosfamid AC):',
      '• Baku Emas Pencegahan CINV Tripel Terapi (dimulai SEBELUM kemoterapi):',
      '  (1) Antagonis Reseptor NK-1: APREPITANT (125 mg oral hari ke-1, 80 mg hari ke-2 & 3) atau Fosaprepitant 150 mg IV.',
      '  (2) Antagonis Reseptor 5-HT3: ONDANSETRON 8-16 mg IV atau Granisetron.',
      '  (3) Kortikosteroid: DEKSAMETASON 12 mg IV/oral hari ke-1, lalu 8 mg hari ke-2-4.',
      '• Pada pasien dengan mual refrakter antisipatorik: Tambahkan OLANZAPIN (5-10 mg oral) dan LORAZEPAM.',
      'Proteksi Organ Toksisitas Spesifik Sitostatika:',
      '• SIKLOFOSFAMID / IFOSFAMID memicu Sistitis Hemoragik (akrolein toksik di kandung kemih) -> Berikan MESNA (Sodium 2-mercaptoethanesulfonate) + Hidrasi agresif.',
      '• DOKSORUBISIN memicu Kardiotoksisitas kardiomiopati -> Berikan DEXRAZOXANE (chelator besi penangkal radikal bebas miokard).',
      '• METOTREKSAT dosis tinggi memicu mielosupresi berat -> Berikan LEUCOVORIN (Asam Folinat / Citrovorum factor) rescue untuk memotong blokade reduktase folat sel normal.',
      'Tata Laksana Ekstravasasi Sitostatika (Kebocoran obat ke jaringan subkutan):',
      '• Golongan Vinka Alkaloid (Vinkristin, Vinblastin): Berikan KOMPRES HANGAT + Injeksi antidotum HYALURONIDASE subkutan (menyebarkan obat agar diabsorpsi).',
      '• Golongan Antrasiklin (Doksorubisin, Daunorubisin): Berikan KOMPRES DINGIN (es) + Antidotum spesifik DEXRAZOXANE IV atau Dimetilsulfoksida (DMSO) topikal.'
    ],
    frequentExamPitfalls: [
      'Jebakan kontras ekstravasasi: Vinkristin WAJIB KOMPRES HANGAT (jangan kompres dingin karena memperparah nekrosis jaringan); sebaliknya Doksorubisin WAJIB KOMPRES DINGIN.',
      'Asam Folat biasa (Folic Acid) TIDAK BISA menggantikan Leucovorin (Folinic Acid) sebagai MTX rescue karena MTX menghambat enzim Dihidrofolat Reduktase (DHFR).'
    ],
    referenceStandard: 'ASCO / NCCN Clinical Practice Guidelines in Oncology: Antiemesis & Extravasation Management'
  },
  {
    id: 'top-parkinson-eps',
    domainId: 'klinis',
    title: 'Penyakit Parkinson, Sindrom Ekstrapiramidal (EPS) & Distonia Akut Terinduksi Obat',
    category: 'Saraf & Psikiatri',
    tags: ['Parkinson', 'Levodopa', 'Karbidopa', 'Triheksifenidil', 'EPS', 'Haloperidol', 'Distonia'],
    summary: 'Penyakit Parkinson ditandai defisiensi dopamin di substansia nigra (gejala TRAP: Tremor saat istirahat, Rigiditas, Akinesia/bradikinesia, Postural instability). Sindrom Ekstrapiramidal (EPS) adalah efek samping blokade dopaminergik oleh antipsikotik tipikal generasi pertama (Haloperidol, Klorpromazin) dan antiemetik (Metoklopramid).',
    keyPearls: [
      'Baku Emas Parkinson: LEVODOPA + KARBIDOPA (rasio 4:1 atau 10:1 seperti Sinemet 100/25).',
      'Fungsi Karbidopa: Inhibitor enzim Dopa-Dekarboksilase PERIFER yang tidak menembus sawar darah otak (BBB). Karbidopa mencegah konversi levodopa menjadi dopamin di sirkulasi sistemik, sehingga mengurangi efek samping mual/aritmia perifer dan meningkatkan ketersediaan levodopa yang menembus ke otak hingga 4-5 kali lipat.',
      'Fenomena Motorik Jangka Panjang Levodopa:',
      '• Wearing-off effect (efek obat memudar sebelum dosis berikutnya) -> Tambahkan Inhibitor COMT (ENTACAPONE 200 mg tiap minum levodopa) atau MAO-B inhibitor (Rasagilin / Selegilin).',
      'Spektrum 4 Bentuk Sindrom Ekstrapiramidal (EPS) akibat Antipsikotik:',
      '1. Distonia Akut (spasme otot lidah, leher tortikolis, krisis okulogirik dalam hitungan jam-hari) -> Terapi darurat: ANTIKOLINERGIK (DIFENHIDRAMIN 50 mg IM/IV atau INJEKSI INTRATEKAL/IM TRIHEKSIFENIDIL).',
      '2. Akatisia (kegelisahan motorik tidak bisa diam) -> Terapi pilihan: PROPRANOLOL (Beta-blocker) 20-40 mg/hari atau Benzodiazepin (Klonazepam).',
      '3. Pseudoparkinsonisme (tremor, bradikinesia, gaya jalan kaku) -> Terapi: TRIHEKSIFENIDIL (THP) oral 1-2 mg 2-3x/hari.',
      '4. Tardive Dyskinesia (gerakan involunter lidah mengecap, wajah meringis pasca pemakaian bertahun-tahun) -> Penanganan: Turunkan dosis antipsikotik, switch ke Klozapin / Quetiapin; berikan VMAT-2 Inhibitor (Valbenazine / Deutetrabenazine). *CATATAN: THP KONTRAINDIKASI karena memperparah tardive dyskinesia!*'
    ],
    frequentExamPitfalls: [
      'Triheksifenidil (THP) BUKAN untuk Akatisia (akatisia diterapi dengan Propranolol) dan TIDAK BOLEH untuk Tardive Dyskinesia (THP justru memperburuk gerakan tardive).',
      'Metoklopramid (antiemetik) adalah antagonis reseptor D2 yang sering memicu distonia akut leher kaku pada pasien anak/dewasa muda; antidotumnya adalah Difenhidramin atau THP.'
    ],
    referenceStandard: 'Movement Disorder Society (MDS) Parkinson\'s Guidelines & APA Practice Guideline for Schizophrenia'
  },
  {
    id: 'top-hypercalcemia-tumor-lysis',
    domainId: 'klinis',
    title: 'Sindrom Lisis Tumor (TLS) & Hiperkalsemia Malignansi',
    category: 'Onkologi & Gawat Darurat',
    tags: ['TLS', 'Hiperurisemia', 'Allopurinol', 'Rasburicase', 'Zoledronat', 'Kalsitonin', 'Kalsium'],
    summary: 'Tumor Lysis Syndrome (TLS) adalah pelepasan masif komponen intraseluler sel kanker ke sirkulasi pasca inisiasi kemoterapi (limfoma, leukemia), memicu tetrad kelainan elektrolit mematikan: Hiperurisemia, Hiperkalemia, Hiperfosfatemia, dan Hipokalsemia sekunder. Hiperkalsemia malignansi adalah peningkatan kalsium serum akibat sekresi PTHrP oleh sel tumor.',
    keyPearls: [
      'Kriteria Laboratorium Sindrom Lisis Tumor (Kriteria Cairo-Bishop):',
      '• Asam Urat >= 8,0 mg/dL (atau peningkatan 25% dari baseline).',
      '• Kalium >= 6,0 mEq/L (ancaman henti jantung aritmia).',
      '• Fosfat >= 4,5 mg/dL (risiko kalsifikasi kalsium-fosfat ginjal).',
      '• Kalsium <= 7,0 mg/dL (hipokalsemia sekunder pengendapan kristal).',
      'Tata Laksana Hiperurisemia pada TLS:',
      '• Hidrasi Agresif Intravena: NaCl 0,9% 2.000 - 3.000 mL/m2/hari untuk mempertahankan volume urin > 100 mL/jam.',
      '• Profilaksis Risiko Rendah-Sedang: ALLOPURINOL 300 mg/m2/hari (menghambat sintesis asam urat baru melalui enzim xantin oksidase, tidak mendegradasi asam urat yang sudah ada).',
      '• Terapi Baku Risiko Tinggi / Asam Urat Sangat Tinggi: RASBURICASE (rekombinan urat oksidase) dosis 0,15 - 0,2 mg/kgBB IV infus (mengubah asam urat yang sudah terbentuk menjadi ALANTOIN yang sangat larut air dan mudah diekskresikan ginjal).',
      'Tata Laksana Hiperkalsemia Malignansi (Kalsium terkoreksi > 12-14 mg/dL):',
      '• Lini Pertama Segera: Rehidrasi NaCl 0,9% 200-500 mL/jam untuk ekspansi volume.',
      '• Lini Pertama Penurun Kalsium Jangka Panjang: Bisfosfonat Intravena poten (ASAM ZOLEDRONAT 4 mg IV infus selama 15 menit atau Pamidronat 60-90 mg). Onset 2-4 hari, durasi 3-4 minggu.',
      '• Penurun Kalsium Onset Cepat (Bridges): KALSITONIN Salmon 4-8 IU/kgBB SC/IM tiap 12 jam (efek cepat dalam beberapa jam, namun terjadi takifilaksis/toleransi setelah 48 jam).'
    ],
    frequentExamPitfalls: [
      'Alkalinisasi urin dengan Natrium Bikarbonat TIDAK LAGI DIREKOMENDASIKAN pada TLS karena memicu pengendapan kristal Kalsium Fosfat di tubulus ginjal yang mempercepat gagal ginjal akut.',
      'Kalsitonin hanya bekerja efektif selama 24-48 jam pertama karena terjadi desensitisasi reseptor (takifilaksis), sehingga harus selalu dikombinasikan dengan Zoledronat.'
    ],
    referenceStandard: 'ASCO Guidelines on the Management of Tumor Lysis Syndrome & Endocrine Society Hypercalcemia of Malignancy'
  },

  // =========================================================================
  // DOMAIN 2: MANAJEMEN FARMASI, FARMAKOEKONOMI & REGULASI (+4 TOPIK)
  // =========================================================================
  {
    id: 'top-cytotoxic-bsc-handling',
    domainId: 'manajemen',
    title: 'Penanganan Obat Sitostatika (Hazardous Drugs Handling & Spill Kit CPOB/USP 800)',
    category: 'Manajemen & Keselamatan Kerja',
    tags: ['Sitostatika', 'BSC', 'Spill Kit', 'Limbah Ungu', 'HEPA', 'Tekanan Negatif', 'USP 800'],
    summary: 'Penanganan obat berbahaya (hazardous drugs) sitotoksik di Instalasi Farmasi Rumah Sakit wajib mematuhi standar keselamatan kerja untuk meminimalkan paparan aerosol/droplet pada petugas melalui penggunaan alat pelindung diri (APD), ruang bertekanan negatif, kabinet keamanan biologis khusus, serta protokol spill kit tumpahan.',
    keyPearls: [
      'Spesifikasi Ruang Rekonstitusi Sitostatika (Cleanroom): Ruang bersih dengan TEKANAN UDARA NEGATIF (-10 hingga -30 Pascal) terhadap ruang antara (anteroom) untuk mencegah partikel sitotoksik bocor keluar ke koridor.',
      'Spesifikasi Alat Rekonstitusi: Biological Safety Cabinet (BSC) KELAS II TIPE B2 (100% udara dibuang keluar gedung melalui cerobong gas dengan filter HEPA tanpa ada resirkulasi) ATAU Compounding Aseptic Containment Isolator (CACI). *DILARANG menggunakan Laminar Air Flow (LAF) horizontal karena meniupkan obat langsung ke arah wajah operator!*',
      'Alat Pelindung Diri (APD) Khusus: Baju hazmat non-linting steril berbahan kedap air (polyethylene-coated), kacamata goggle, masker respirator N95, dan DUA LAPIS SARUNG TANGAN KEMOTERAPI (Double gloving: sarung tangan luar menutupi manset baju steril).',
      'Pengelolaan Limbah Sitotoksik: Wadah kantong plastik dan safety box limbah benda tajam sitostatika WAJIB BERWARNA UNGU dengan simbol sitotoksik (cell in telophase), dimusnahkan via insinerator suhu tinggi minimal 1.000 - 1.200°C.',
      'Protokol Spill Kit Tumpahan Sitostatika: Isolasi area tumpahan -> Pasang tanda bahaya -> Kenakan APD lengkap spill kit -> Tutup tumpahan cairan dengan bantalan serap absorbent pad (kristal serbuk dibasahi absorbent pad lembab) -> Bersihkan dari arah LUAR KE DALAM (konsentris) -> Dekontaminasi dengan Na-hipoklorit 0,5% / alkohol 70% -> Buang seluruh limbah pembersih ke kantong ungu.'
    ],
    frequentExamPitfalls: [
      'Pertanyaan jebakan CPOB: Mengapa LAF horisontal dilarang untuk rekonstitusi sitostatika? Jawabannya: Aliran udara LAF horisontal berhembus lurus dari belakang HEPA filter menuju ke arah operator, menyebabkan paparan karsinogenik langsung pada petugas.',
      'Warna kantong limbah medis: Kuning untuk infeksius umum, UNGU khusus sitostatika, Cokelat untuk farmasi/bahan kimia kadaluarsa, Merah untuk radioaktif.'
    ],
    referenceStandard: 'Permenkes No. 72 Tahun 2016 tentang Standar Pelayanan Kefarmasian di RS & Pedoman Pencampuran Obat Sitostatika Dirjen Farmalkes'
  },
  {
    id: 'top-coldchain-vvm',
    domainId: 'manajemen',
    title: 'Manajemen Rantai Dingin Vaksin (Cold Chain) & Interpretasi Indikator VVM',
    category: 'Penyimpanan & Distribusi Farmasi',
    tags: ['Cold Chain', 'Vaksin', 'VVM', 'Termosensitif', 'Freeze-Sensitive', '2-8 C'],
    summary: 'Rantai dingin (Cold Chain) adalah sistem distribusi dan penyimpanan produk biologis serta vaksin pada rentang temperatur yang dipersyaratkan secara ketat sejak dari produsen hingga disuntikkan ke pasien guna menjaga potensi antigenik dan mencegah inaktivasi protein vaksin.',
    keyPearls: [
      'Standar Suhu Penyimpanan Vaksin:',
      '• Mayoritas Vaksin (Hepatitis B, DPT-HB-Hib, TT, DT, BCG, IPV, Influenza, COVID-19 mRNA pasca-thawing): Suhu LEMARI PENDINGIN +2°C hingga +8°C (tidak boleh beku!).',
      '• Vaksin Polio Oral (bOPV) & Campak/MR: Dapat disimpan di FREEZER suhu -15°C hingga -25°C untuk penyimpanan jangka panjang di gudang farmasi.',
      'Kategori Vaksin Berdasarkan Kepekaan Suhu:',
      '• Freeze-Sensitive (SANGAT PEKA BEKU): Hepatitis B, DPT-HB-Hib, TT, DT, Td, IPV. JIKA BEKU, ADJUVAN ALUMINIUM AKAN MENGKRISTAL DAN MERUSAK VAKSIN (Wajib Uji Kocok / Shake Test sebelum dinyatakan rusak).',
      '• Heat-Sensitive (SANGAT PEKA PANAS): OPV, BCG, Campak/MR.',
      'Interpretasi Vaccine Vial Monitor (VVM) - Kotak Putih di Dalam Lingkaran Biru:',
      '• Kondisi A: Kotak di dalam berwarna PUTIH BERSIH dibanding lingkaran luar -> Vaksin DAPAT DIGUNAKAN.',
      '• Kondisi B: Kotak di dalam berwarna LEBIH TERANG dibanding lingkaran luar -> Vaksin DAPAT DIGUNAKAN (Gunakan terlebih dahulu / Early Expiry First Out).',
      '• Kondisi C: Kotak di dalam BERWARNA SAMA GELAPNYA dengan lingkaran luar -> VAKSIN JANGAN DIGUNAKAN (TITIK BATAS DISKARD).',
      '• Kondisi D: Kotak di dalam LEBIH GELAP daripada lingkaran luar -> VAKSIN JANGAN DIGUNAKAN (MUTLAK DIBUANG/RETUR).',
      'Prosedur Darurat Pemadaman Listrik Lemari Pendingin Vaksin:',
      '• JANGAN MEMBUKA PINTU lemari es bila tidak mendesak (suhu 2-8°C bertahan 6-12 jam jika tertutup rapat).',
      '• Letakkan cool pack / ice pack di bagian dasar/dinding; bila pemadaman > 24 jam, evakuasi vaksin ke Vaccine Carrier / Cold Box ber-ice pack ke faskes rujukan terdekat.'
    ],
    frequentExamPitfalls: [
      'Vaksin Hepatitis B dan DPT TIDAK BOLEH disimpan di freezer dan TIDAK BOLEH menempel pada dinding evaporator lemari es karena adjuvant aluminium akan rusak bila membeku.',
      'VVM kondisi C dan D artinya vaksin SUDAH RUSAK akibat paparan kumulatif panas dan tidak boleh disuntikkan meskipun tanggal kadaluarsa (expired date) pada botol masih lama.'
    ],
    referenceStandard: 'Permenkes No. 12 Tahun 2017 tentang Penyelenggaraan Imunisasi & WHO Guidelines for Vaccine Cold Chain'
  },
  {
    id: 'top-atc-ddd-du90',
    domainId: 'manajemen',
    title: 'Evaluasi Penggunaan Obat Kuantitatif: Metode ATC/DDD & Drug Utilization 90% (DU90%)',
    category: 'Farmakoepidemiologi & PPRA',
    tags: ['ATC/DDD', 'DU90', 'Antibiotik', 'PPRA', 'Surveilans', 'Defined Daily Dose'],
    summary: 'Evaluasi penggunaan obat secara kuantitatif di rumah sakit (khususnya program pengendalian resistensi antimikroba / PPRA) menggunakan sistem klasifikasi Anatomical Therapeutic Chemical (ATC) dan unit pengukuran Defined Daily Dose (DDD) yang ditetapkan oleh WHO Collaborating Centre for Drug Statistics Methodology.',
    keyPearls: [
      'Definisi Defined Daily Dose (DDD): Dosis pemeliharaan harian rata-rata yang diasumsikan untuk suatu obat bila digunakan untuk indikasi utamanya pada orang dewasa (berat badan standar 70 kg). DDD adalah unit pengukuran statistik teknis, bukan dosis terapeutik aktual pasien.',
      'Rumus Perhitungan Total DDD:',
      '• Total Gram Pemakaian Obat = (Jumlah Obat Digunakan × Kekuatan Sediaan dalam Gram)',
      '• Total DDD = Total Gram Pemakaian Obat / Nilai Standar DDD WHO (dalam Gram)',
      'Perhitungan Penggunaan Antibiotik di Rumah Sakit:',
      '• DDD per 100 Patient-Days = (Total DDD / Total Hari Rawat Pasien) × 100',
      'Konsep Segmen DU90% (Drug Utilization 90%):',
      '• Mengurutkan seluruh jenis obat yang digunakan berdasarkan volume DDD dari yang tertinggi hingga terendah (desending) secara kumulatif.',
      '• Obat-obat yang masuk ke dalam 90% volume total konsumsi kumulatif dimasukkan ke dalam SEGMEN DU90% (fokus utama intervensi evaluasi mutu, rasionalitas terapi, dan pedoman PPRA RS).',
      '• 10% sisanya merepresentasikan kelompok obat berfrekuensi rendah/minoritas.',
      'Evaluasi Kualitatif Terapi Antibiotik (Kategori Gyssens):',
      '• Kategori 0: Penggunaan antibiotik tepat dan rasional.',
      '• Kategori I: Tidak tepat waktu pemberian.',
      '• Kategori IIA: Tidak tepat dosis; IIB: Tidak tepat interval pemberian; IIC: Tidak tepat rute pemberian.',
      '• Kategori IIIA: Penggunaan terlalu lama; IIIB: Penggunaan terlalu singkat.',
      '• Kategori IVA: Ada antibiotik lain yang lebih efektif; IVB: Ada antibiotik lain yang kurang toksik; IVC: Ada antibiotik lain yang lebih murah; IVD: Ada antibiotik lain berspektrum lebih sempit.',
      '• Kategori V: Tidak ada indikasi penggunaan antibiotik (indikasi non-bakteri/viral).'
    ],
    frequentExamPitfalls: [
      'DDD bukan dosis yang diresepkan dokter kepada individu pasien, melainkan unit ukur populasi komparatif global.',
      'Kategori Gyssens V adalah yang paling fatal secara rasionalitas klinik: pemberian antibiotik tanpa indikasi infeksi sama sekali.'
    ],
    referenceStandard: 'WHO Collaborating Centre for Drug Statistics Methodology & Pedoman Pelayanan Kefarmasian untuk Pengendalian Resistensi Antimikroba Kemenkes'
  },
  {
    id: 'top-pharmacy-accounting-financial',
    domainId: 'manajemen',
    title: 'Analisis Finansial & Akuntansi Apotek: Laporan Laba-Rugi, Neraca, BEP, ROI & Rasio Likuiditas',
    category: 'Manajemen Keuangan Farmasi',
    tags: ['Akuntansi', 'Laba Rugi', 'BEP', 'ROI', 'Current Ratio', 'HPP', 'HJA'],
    summary: 'Pengelolaan finansial apotek dan instalasi farmasi memerlukan pemahaman analisis laporan keuangan untuk menilai profitabilitas, efisiensi perputaran modal, dan solvabilitas usaha apotek dalam memenuhi kewajiban jangka pendek serta pengembalian modal investasi pemilik.',
    keyPearls: [
      'Struktur Laporan Laba-Rugi Apotek:',
      '• Penjualan Bersih (Net Sales) = Penjualan Kotor - (Retur Penjualan + Potongan Penjualan)',
      '• Harga Pokok Penjualan (HPP) = Persediaan Awal + Pembelian Bersih - Persediaan Akhir',
      '• Laba Kotor (Gross Profit) = Penjualan Bersih - HPP',
      '• Laba Bersih (Net Profit) = Laba Kotor - Beban Operasional (Gaji, Sewa, Listrik, Pajak)',
      'Break-Even Point (BEP / Titik Impas Modal):',
      '• BEP Rupiah = Biaya Tetap / [1 - (Biaya Variabel / Total Penjualan)]',
      '• Makna BEP: Titik di mana total pendapatan sama persis dengan total biaya (laba = nol). Penjualan di atas BEP mulai menghasilkan laba bersih.',
      'Return on Investment (ROI):',
      '• ROI (%) = (Laba Bersih Setelah Pajak / Total Nilai Investasi Modal) × 100%',
      '• Mengukur kemampuan modal investasi menghasilkan keuntungan netto per tahun.',
      'Rasio Likuiditas & Kesehatan Modal Kerja Apotek:',
      '• Current Ratio = Aktiva Lancar / Utang Lancar (Nilai ideal: 1,5 - 2,0 atau 150-200% menandakan apotek mampu melunasi faktur PBF jatuh tempo).',
      '• Quick Ratio (Acid-Test Ratio) = (Kas + Piutang) / Utang Lancar (mengabaikan persediaan obat karena butuh waktu untuk dijual).',
      'Turnover Ratio (TOR / Perputaran Persediaan):',
      '• TOR = HPP / Rata-rata Persediaan (Rata-rata Persediaan = [Awal + Akhir] / 2).',
      '• Nilai TOR ideal di apotek mandiri: 8 - 12 kali per tahun. TOR terlalu rendah menandakan penumpukan obat lambat laku (slow-moving/death stock); TOR terlalu tinggi menandakan sering terjadi kekosongan obat (stock-out).'
    ],
    frequentExamPitfalls: [
      'Saat menghitung HPP, jangan lupa bahwa HPP adalah Persediaan Awal + Pembelian - Persediaan Akhir (bukan sekadar total faktur pembelian).',
      'Margin dihitung dari Harga Jual (Margin = [HJA - HPP] / HJA × 100%), sedangkan Markup dihitung dari Harga Beli (Markup = [HJA - HPP] / HPP × 100%).'
    ],
    referenceStandard: 'Standar Manajemen Keuangan Apotek & Ikatan Apoteker Indonesia (IAI) Modul Farmasi Bisnis'
  },

  // =========================================================================
  // DOMAIN 3: TEKNOLOGI FARMASI & CPOB (+4 TOPIK)
  // =========================================================================
  {
    id: 'top-udt-dissolution-f2',
    domainId: 'teknologi',
    title: 'Uji Disolusi Terbanding (UDT): Perhitungan & Kriteria Nilai Similaritas F2 & Perbedaan F1',
    category: 'Kontrol Kualitas & Bioekivalensi',
    tags: ['UDT', 'Disolusi Terbanding', 'Similarity Factor', 'F2', 'F1', 'Bioekivalensi', 'BPOM'],
    summary: 'Uji Disolusi Terbanding (In Vitro Comparative Dissolution Testing) adalah uji komparasi pelepasan zat aktif antara sediaan uji (copy drug / generik) terhadap produk inovator (komparator) pada tiga variasi pH fisiologis (pH 1.2, 4.5, dan 6.8) untuk memastikan profil ekivalensi in vitro sebelum atau sebagai surrogate uji bioekivalensi (BE) in vivo.',
    keyPearls: [
      'Tiga Media Wajib UDT Tablet Lepas Cepat (Immediate Release):',
      '1. Media Asam Lambung: Larutan HCl pH 1,2 (atau cairan lambung buatan tanpa enzim).',
      '2. Media Buffer Asam: Dapar Asetat pH 4,5.',
      '3. Media Buffer Usus Halus: Dapar Fosfat pH 6,8.',
      'Kondisi Alat & Pengambilan Sampel:',
      '• Aparatus Tipe 1 (Keranjang / Basket) kecepatan 100 rpm ATAU Tipe 2 (Dayung / Paddle) kecepatan 50 rpm pada suhu 37 ± 0,5°C.',
      '• Jumlah unit: Minimal 12 tablet produk uji dan 12 tablet produk pembanding inovator pada masing-masing media.',
      '• Titik waktu sampling: 10, 15, 20, 30, 45, dan 60 menit.',
      'Kriteria Keberterimaan Profil Ekivalen:',
      '• Nilai Faktor Similaritas (f2): WAJIB BERADA PADA RENTANG 50 HINGGA 100 (50 <= f2 <= 100). Nilai f2 = 100 berarti profil pelepasan identik 100%; nilai f2 >= 50 mencerminkan perbedaan pelepasan rata-rata <= 10% di seluruh titik waktu sampling.',
      '• Nilai Faktor Perbedaan (f1): WAJIB BERADA PADA RENTANG 0 HINGGA 15 (0 <= f1 <= 15).',
      'Syarat Koefisien Variasi (% RSD):',
      '• Pada titik waktu sampling pertama (misal menit ke-10): % RSD tidak boleh lebih dari 20%.',
      '• Pada titik waktu sampling berikutnya (menit 15 ke atas): % RSD tidak boleh lebih dari 10%.',
      'Pengecualian Khusus Disolusi Cepat: Jika kedua produk (uji dan inovator) melarut LEBIH DARI 85% DALAM WAKTU 15 MENIT di ketiga media, profil disolusi dinyatakan ekivalen langsung tanpa perlu menghitung nilai f2.'
    ],
    frequentExamPitfalls: [
      'Dua tablet dinyatakan memiliki kemiripan profil disolusi jika nilai f2 antara 50 - 100, BUKAN f1.',
      'Jika pelepasan kedua produk sudah > 85% pada menit ke-15, perhitungan f2 tidak lagi relevan karena kedua produk masuk kategori pelepasan sangat cepat (very rapidly dissolving).'
    ],
    referenceStandard: 'Peraturan BPOM No. 24 Tahun 2022 tentang Pedoman Uji Bioekivalensi & WHO TRS 992 Annex 7'
  },
  {
    id: 'top-maco-cleaning-validation',
    domainId: 'teknologi',
    title: 'Validasi Pembersihan CPOB: Penentuan Batas Kontaminasi Silang MACO (10 ppm vs 1/1000 Dosis)',
    category: 'CPOB & Validasi Industri',
    tags: ['Validasi Pembersihan', 'MACO', 'Swab', 'Rinse', 'Kontaminasi Silang', 'CPOB 2018'],
    summary: 'Validasi pembersihan membuktikan efektivitas prosedur pembersihan fasilitas dan peralatan produksi untuk mencegah kontaminasi silang (cross-contamination) sisa zat aktif produk sebelumnya (produk A) ke dalam produk berikutnya (produk B). Batas residu maksimum yang diizinkan dihitung menggunakan kriteria Maximum Allowable Carryover (MACO).',
    keyPearls: [
      'Tiga Kriteria Batas Residu Maksimum MACO (Pilih Nilai Terkecil / Paling Ketat):',
      '1. Kriteria Dosis Terapeutik (1/1000 Dosis): Residu zat aktif produk A tidak boleh melebihi 1/1.000 dari dosis terapi harian minimum produk A di dalam dosis harian maksimum produk B.',
      '   Formula: MACO = (TDD_A × SBS) / (1.000 × TDD_B)',
      '   (TDD_A = Dosis harian minimal obat sebelumnya, TDD_B = Dosis harian maksimal obat berikutnya, SBS = Ukuran bets terkecil obat berikutnya dalam mg).',
      '2. Kriteria Batas Konsentrasi 10 ppm: Kadar residu produk A tidak boleh melebihi 10 ppm (10 mg zat aktif per 1 kg produk berikutnya).',
      '   Formula: MACO = 10 ppm × SBS = 10 × 10^-6 × SBS.',
      '3. Kriteria Batas Toksikologi Modern (ADE / PDE - Permitted Daily Exposure): Berdasarkan data NOAEL toksikologi dengan faktor keamanan komprehensif.',
      'Metode Pengambilan Sampel Validasi Pembersihan:',
      '• Metode Usap (Swab Method): Baku emas untuk permukaan yang dapat dijangkau secara fisik (direct sampling). Gunakan swab bebas serat (lint-free) berukuran area baku 5 cm × 5 cm (25 cm2) atau 10 cm × 10 cm.',
      '• Metode Bilas Akhir (Rinse Sampling): Untuk bagian dalam pipa, pompa, atau tangki tertutup yang tidak terjangkau swab.',
      'Titik Sampling Kritis (Worst-Case Sampling Locations): Area peralatan yang paling sulit dibersihkan (sudut mati pipa, bilah agitator bawah, seal gasket poros, katup pelepasan bawah).'
    ],
    frequentExamPitfalls: [
      'Dari ketiga kriteria perhitungan MACO di atas, nilai batas residu yang ditetapkan sebagai kriteria lulus validasi adalah NILAI YANG PALING KECIL (paling ketat).',
      'Swab method lebih disukai daripada rinse sampling karena mampu mendeteksi residu yang menempel kuat (insoluble residue) secara mekanik.'
    ],
    referenceStandard: 'CPOB 2018 / CPOB 2024 Aneks 8 Validasi Pembersihan & PIC/S PI 006-3 Recommendation on Validation Master Plan'
  },
  {
    id: 'top-modified-release-matrix',
    domainId: 'teknologi',
    title: 'Sediaan Pelepasan Termodifikasi: Matriks Hidrofilik, Lipofilik, Tablet OROS & Pelet Salut',
    category: 'Formulasi & Teknologi Sediaan',
    tags: ['Lepas Lambat', 'Matriks', 'HPMC', 'OROS', 'Enteric Coating', 'Sustained Release'],
    summary: 'Sediaan pelepasan termodifikasi (Modified Release) dirancang untuk mengubah laju atau lokasi pelepasan zat aktif. Terbagi menjadi sediaan pelepasan tertunda (Delayed Release / Enteric coated tablet yang menahan pelepasan di lambung) dan pelepasan diperpanjang (Extended / Sustained Release) guna mempertahankan kadar terapeutik darah stabil dan mengurangi frekuensi minum obat.',
    keyPearls: [
      'Jenis Matriks Lepas Lambat (Sustained Release Matrix):',
      '• Matriks Hidrofilik (Paling Populer): Menggunakan polimer yang mengembang membentuk lapisan gel kental saat kontak dengan air lambung/usus, sehingga obat berdifusi perlahan menembus lapisan gel. Contoh polimer: HPMC (Hidroksipropil Metilselulosa / Hipromelosa grade viskositas tinggi K100M/K15M), Na-Karboksimetilselulosa (Na-CMC), Karbopol.',
      '• Matriks Lipofilik / Tidak Larut: Menggunakan lipid/malam (carnauba wax, asam stearat) atau polimer tidak larut (Etil Selulosa, Polivinil Klorida). Obat terlarut berdifusi keluar lewat pori-pori matriks inert yang tidak hancur.',
      'Sistem Pompa Osmotik Oral (OROS - Oral Osmotic Pump Tablet):',
      '• Inti tablet mengandung obat dan agen pendorong osmotik (natrium klorida / polimer swelling).',
      '• Dikelilingi membran semipermeabel kaku (Selulosa Asetat) dengan satu lubang mikroskopis yang dibuat dengan laser pada permukaannya.',
      '• Air masuk menembus membran semipermeabel secara osmosis -> tekanan internal meningkat -> mendorong larutan obat keluar lewat lubang mikroskopis dengan laju kinetika ORDE NOL (konstan independen pH dan motilitas saluran cerna). Contoh: Glipizide GITS, Nifedipin OROS.',
      'Sediaan Salut Enterik (Delayed Release):',
      '• Melindungi obat dari asam lambung (Omeprazole, Aspirin) atau melindungi lambung dari iritasi.',
      '• Polimer larut pada pH basa usus (pH > 5,5 - 6,8): Selulosa Asetat Ftalat (CAP), Eudragit L100 / S100, HPMC Ftalat (HPMCP).'
    ],
    frequentExamPitfalls: [
      'EDUKASI KRITIS PASIEN: Tablet sustained release matriks atau OROS KONTRAINDIKASI MUTLAK DIGERUS, DIKUNYAH, ATAU DIBELAH (kecuali ada garis bagi khusus teknologi multiparticulate). Menggerus tablet lepas lambat menyebabkan fenomena "DOSE DUMPING" (seluruh dosis obat terlepas seketika memicu toksisitas fatal).',
      'Pasien pengguna tablet OROS perlu diedukasi bahwa "cangkang tablet kosong" (ghost tablet) akan keluar utuh di feses dan hal itu normal.'
    ],
    referenceStandard: 'Farmakope Indonesia Edisi VI & Remington: The Science and Practice of Pharmacy'
  },
  {
    id: 'top-sterile-lvp-lal-endotoxin',
    domainId: 'teknologi',
    title: 'Formulasi Sediaan Steril Infus LVP/SVP & Uji Endotoksin Bakteri (LAL Test)',
    category: 'Formulasi Steril & Kontrol Mutu',
    tags: ['Steril', 'Infus', 'LAL Test', 'Endotoksin', 'Pirogen', 'WFI', 'Isoosmotik'],
    summary: 'Sediaan parenteral volume besar (Large Volume Parenteral / LVP > 100 mL seperti cairan infus NaCl 0.9% dan Ringer Laktat) dan volume kecil (SVP <= 100 mL) wajib memenuhi syarat mutlak: steril bebas mikroba, bebas partikel asing melayang, jernih, bebas pirogen/endotoksin bakteri, serta sedapat mungkin isoosmotik dan isohidris.',
    keyPearls: [
      'Syarat Baku Air untuk Injeksi (Water for Injection / WFI):',
      '• Diproduksi dengan metode DESTILASI MULTI-EFEK (Multiple Effect Distillation) atau REVERSE OSMOSIS dua tahap.',
      '• Disirkulasikan secara terus menerus dalam loop tertutup pada suhu panas minimal 70 - 80°C untuk mencegah pertumbuhan biofilm mikroba.',
      '• Batas Endotoksin Bakteri WFI: Kurang dari 0,25 Endotoxin Unit per mililiter (< 0,25 EU/mL).',
      '• Nilai Konduktivitas WFI: <= 1,3 microSiemens/cm pada suhu 25°C; Total Organic Carbon (TOC) < 500 ppb.',
      'Uji Endotoksin Bakteri (Bacterial Endotoxin Test / BET) vs Uji Pirogen Kelinci:',
      '• Uji Pirogen Hewan (Rabbit Pyrogen Test): Memantau kenaikan suhu tubuh 3 ekor kelinci setelah penyuntikan larutan uji intravena (metode klasik in vivo).',
      '• Uji Endotoksin LAL (Limulus Amebocyte Lysate Test): Ekstrak lisat sel darah kepiting ladam (Limulus polyphemus) yang mengandung enzim koagulan spesifik. Endotoksin lipopolisakarida (LPS) dari dinding bakteri gram negatif akan memicu kaskade koagulasi enzimatik.',
      'Metode LAL Test:',
      '• Metode Jendal Gel (Gel-Clot Method): Metode baku pembanding. Terbentuknya jendal gel padat yang tidak tumpah saat tabung reaksi dibalik 180° menunjukkan hasil positif.',
      '• Metode Turbidimetri & Kromogenik: Pengukuran fotometrik kuantitatif pembentukan warna kuning p-nitroanilin (pNA) yang sangat sensitif.',
      'Depirogenasi Peralatan Gelas: Pirogen tahan terhadap autoklaf 121°C! Penyingkiran pirogen pada wadah kaca ampul/vial wajib menggunakan PANAS KERING SUHU TINGGI (Oven depirogenasi suhu 250°C selama 30-45 menit atau 180°C selama minimal 3-4 jam).'
    ],
    frequentExamPitfalls: [
      'Autoklaf uap panas 121°C selama 15 menit HANYA MEMBUNUH MIKROBA (sterilisasi), TETAPI TIDAK MENGHANCURKAN PIROGEN ENDOTOKSIN. Depirogenasi wadah kaca memerlukan panas kering oven 250°C.',
      'LAL test khusus mendeteksi endotoksin lipopolisakarida bakteri gram negatif, bukan pirogen kimiawi anorganik.'
    ],
    referenceStandard: 'Farmakope Indonesia Edisi VI Lampiran Uji Endotoksin Bakteri & CPOB 2018 Aneks 1 Pembuatan Produk Steril'
  },

  // =========================================================================
  // DOMAIN 4: FARMASI BAHAN ALAM & FITOFARMAKA (+4 TOPIK)
  // =========================================================================
  {
    id: 'top-phytochemical-reagents-color',
    domainId: 'bahan_alam',
    title: 'Skrining Fitokimia Golongan Senyawa Aktif: Reagen Warna, Prinsip Reaksi & Interpretasi',
    category: 'Analisis Fitokimia & Farmakognosi',
    tags: ['Fitokimia', 'Alkaloid', 'Flavonoid', 'Saponin', 'Tanin', 'Mayer', 'Dragendorff'],
    summary: 'Skrining fitokimia adalah uji kualitatif pendahuluan cepat untuk mendeteksi keberadaan golongan metabolit sekunder (alkaloid, flavonoid, tanin, saponin, steroid/triterpenoid, dan antrakuinon) dalam ekstrak atau simplisia tanaman obat berdasarkan pembentukan endapan atau perubahan warna khas dengan reagen spesifik.',
    keyPearls: [
      '1. Uji Golongan Alkaloid (Senyawa Basa Bernitrogen):',
      '• Reagen Mayer (Kalium Tetraiodomerkurat): Menghasilkan ENDAPAN PUTIH atau KUNING KREMA.',
      '• Reagen Dragendorff (Kalium Bismut Iodida): Menghasilkan ENDAPAN COKELAT KEMERAHAN atau JINGGA.',
      '• Reagen Wagner (Iodium dalam Kalium Iodida): Menghasilkan ENDAPAN COKELAT GELAP.',
      '• Prinsip: Pembentukan garam kompleks iodida tidak larut antara ion nitrogen alkaloid dengan logam berat.',
      '2. Uji Golongan Flavonoid (Polifenol Antioksidan):',
      '• Uji Wilstatter / Shinoda Test: Ekstrak + serbuk pita Logam Magnesium (Mg) + beberapa tetes HCl pekat -> Menghasilkan WARNA MERAH JINGGA hingga MERAH TUA (reduksi inti benzopiron membentuk garam flavilium).',
      '• Uji Bate-Smith & Metcalf: Menggunakan Zn dan HCl pekat untuk leukoantosianin.',
      '3. Uji Golongan Saponin (Glikosida Pembuih):',
      '• Uji Busa Forth: Ekstrak dikocok vertikal kuat dengan air suling dalam tabung reaksi selama 10 detik -> Terbentuk BUSA KONSISTEN setinggi minimal 1 cm yang STABIL TIDAK HILANG selama minimal 10 menit (bila ditambah 1 tetes HCl 2N, busa tetap stabil).',
      '4. Uji Golongan Tanin & Polifenol (Senyawa Pengelat Protein):',
      '• Uji FeCl3: Larutan Besi(III) Klorida 1% + ekstrak -> Menghasilkan WARNA HIJAU KEHITAMAN (Tanin Terkondensasi / Katekol) atau WARNA BIRU TUA KEHITAMAN (Tanin Terhidrolisis / Galotanin).',
      '• Uji Gelatin: Ekstrak + larutan gelatin 1% -> Terbentuk ENDAPAN PUTIH (presipitasi ikatan silang protein-tanin).',
      '5. Uji Steroid vs Triterpenoid (Liebermann-Burchard):',
      '• Ekstrak + Asam Asetat Anhidrat + Asam Sulfat Pekat (H2SO4 pekat):',
      '  - WARNA HIJAU atau BIRU menandakan keberadaan STEROID.',
      '  - WARNA MERAH, UNGU, atau MERAH KECOKELATAN menandakan keberadaan TRITERPENOID.'
    ],
    frequentExamPitfalls: [
      'Hafalan wajib reaksi alkaloid: Mayer = Putih/Krem; Dragendorff = Jingga/Merah Cokelat; Wagner = Cokelat Tua.',
      'Shinoda test menggunakan pita Magnesium + HCl pekat, BUKAN amonia atau NaOH.'
    ],
    referenceStandard: 'Farmakope Herbal Indonesia (FHI) Edisi II Lampiran Skrining Fitokimia & Harborne: Phytochemical Methods'
  },
  {
    id: 'top-herbal-tlc-densitometry',
    domainId: 'bahan_alam',
    title: 'Kromatografi Lapis Tipis (KLT) Densitometri: Nilai Rf, Fase Diam, Fase Gerak & Analisis Kualitatif/Kuantitatif',
    category: 'Standardisasi & Analisis Herbal',
    tags: ['KLT', 'Densitometri', 'Rf', 'Silika Gel', 'Eluen', 'Senyawa Marker', 'Kurkumin'],
    summary: 'Kromatografi Lapis Tipis (KLT) dan KLT-Densitometri adalah metode baku dalam standardisasi bahan alam untuk mengidentifikasi pola profil kromatogram sidik jari (fingerprint profile) dan menetapkan kadar senyawa marker aktif dalam ekstrak simplisia sesuai monografi Farmakope Herbal Indonesia.',
    keyPearls: [
      'Prinsip Pemisahan KLT Normal Phase (Paling Sering Digunakan):',
      '• Fase Diam (Stationary Phase): Silika Gel 60 F254 (bersifat POLAR). F254 berarti mengandung indikator fluoresensi seng silikat yang berfluoresensi hijau di bawah sinar UV 254 nm.',
      '• Fase Gerak (Mobile Phase / Eluen): Campuran pelarut organik yang bersifat NON-POLAR hingga SEMIPOLAR (misal Kloroform : Metanol, Heksana : Etil Asetat).',
      '• Prinsip Retensi: Senyawa yang lebih polar akan tertahan lebih kuat pada fase diam silika gel (terelusi lambat -> nilai Rf kecil); senyawa yang lebih non-polar akan terbawa lebih cepat oleh eluen (terelusi jauh -> nilai Rf besar).',
      'Perhitungan Nilai Retardation Factor (Rf):',
      '• Rf = Jarak tempuh bercak zat terlarut dari garis awal / Jarak tempuh garis depan pelarut (solute distance / solvent front distance).',
      '• Rentang nilai Rf yang ideal untuk analisis pemisahan kuantitatif adalah 0,2 hingga 0,8.',
      'Deteksi Bercak & Penampak Noda KLT:',
      '• UV 254 nm: Senyawa yang memiliki ikatan rangkap terkonjugasi/kromofor akan meredam fluoresensi lempeng, tampak sebagai bercak gelap/padam dengan latar belakang hijau berpendar.',
      '• UV 366 nm: Senyawa memancarkan fluoresensi langsung (misal kurkuminoid berpendar kuning kehijauan; kuinina berpendar biru cerah).',
      '• Reagen Semprot Penampak Noda Kimiawi: Asam Sulfat 10% dalam Metanol (diikuti pemanasan oven 105°C untuk destruksi karbonil), Sitroborat (khusus flavonoid), Ninhidrin (khusus asam amino/peptida), Dragendorff (alkaloid).',
      'KLT Densitometri Kuantitatif: Mengukur absorbansi atau intensitas fluoresensi bercak secara in situ pada panjang gelombang spesifik. Luas area puncak kromatogram (AUC) berbanding lurus dengan konsentrasi senyawa marker dalam ekstrak.'
    ],
    frequentExamPitfalls: [
      'Nilai Rf selalu bernilai antara 0,00 hingga 1,00 (tidak ada satuan). Jika nilai Rf > 1,0 berarti salah hitung rumus.',
      'Pada sistem KLT fase normal (silika gel), senyawa yang PALING POLAR memiliki nilai Rf PALING KECIL (berada paling dekat dengan garis awal totolan).'
    ],
    referenceStandard: 'Farmakope Herbal Indonesia (FHI) Edisi II Lampiran Kromatografi Lapis Tipis & Stahl: Thin-Layer Chromatography'
  },
  {
    id: 'top-herbal-toxicology-ld50',
    domainId: 'bahan_alam',
    title: 'Uji Toksisitas Sediaan Herbal: Toksisitas Akut (LD50 OECD 423), Subkronis (90 Hari) & Teratogenik',
    category: 'Uji Keamanan & Toksikologi Praklinis',
    tags: ['Toksisitas', 'LD50', 'OECD 423', 'Subkronis', 'NOAEL', 'Uji Praklinik', 'BPOM'],
    summary: 'Sebelum obat herbal dapat dinaikkan statusnya menjadi Obat Herbal Terstandar (OHT) atau Fitofarmaka, sediaan wajib melalui pengujian toksikologi praklinis in vivo pada hewan coba (mencit/tikus) untuk menetapkan profil keamanan, margin keamanan (safety margin), organ sasaran toksisitas, serta dosis aman tanpa efek merugikan (NOAEL).',
    keyPearls: [
      '1. Uji Toksisitas Akut Oral (Pedoman OECD 423 / Fixed Dose Method):',
      '• Tujuan: Menilai efek toksik dan mortalitas yang timbul dalam waktu 24 jam hingga 14 hari pasca pemberian dosis tunggal sediaan uji.',
      '• Parameter: Nilai Lethal Dose 50 (LD50) yaitu dosis yang diperkirakan mematikan 50% populasi hewan uji.',
      'Klasifikasi Kategori Toksisitas Akut Oral (Sistem GHS / BPOM):',
      '• Kategori 1 (Sangat Beracun Ekstrem): LD50 <= 5 mg/kgBB.',
      '• Kategori 2 (Sangat Beracun): LD50 > 5 hingga 50 mg/kgBB.',
      '• Kategori 3 (Beracun Sedang): LD50 > 50 hingga 300 mg/kgBB.',
      '• Kategori 4 (Beracun Ringan / Harmful): LD50 > 300 hingga 2.000 mg/kgBB.',
      '• Kategori 5 (Praktis Tidak Beracun): LD50 > 2.000 hingga 5.000 mg/kgBB.',
      '• Tidak Beracun: LD50 > 5.000 mg/kgBB (ambang batas uji limit 5 g/kgBB).',
      '2. Uji Toksisitas Subkronis (OECD 408):',
      '• Durasi: Pemberian dosis berulang setiap hari selama 90 HARI berturut-turut pada hewan pengerat (tikus galur Wistar).',
      '• Evaluasi: Profil hematologi darah, biokimia klinis (fungsi ginjal: ureum/kreatinin; fungsi hepar: SGOT/SGPT), rasio bobot organ vital (jantung, ginjal, hati, limpa), dan pemeriksaan histopatologi jaringan.',
      '• Output Kritis: Menetapkan nilai NOAEL (No Observed Adverse Effect Level dalam mg/kg/hari) yang digunakan untuk menghitung dosis aman pertama pada manusia (Maximum Recommended Starting Dose / MRSD).',
      '3. Uji Toksisitas Khusus:',
      '• Uji Teratogenisitas: Menilai cacat kongenital dan kelainan anatomi janin pasca pemaparan zat selama fase organogenesis kebuntingan induk.',
      '• Uji Mutagenisitas (Ames Test menggunakan Salmonella typhimurium).'
    ],
    frequentExamPitfalls: [
      'Sediaan herbal dianggap "praktis tidak toksik" jika nilai LD50 semu berada di atas 5.000 mg/kgBB (5 g/kgBB).',
      'Uji toksisitas subkronis berlangsung selama 90 hari (3 bulan), sedangkan uji toksisitas kronis berlangsung selama minimal 6 hingga 12 bulan.'
    ],
    referenceStandard: 'Peraturan BPOM No. 10 Tahun 2022 tentang Pedoman Uji Toksisitas Nonklinik Secara In Vivo & OECD Guideline 423/408'
  },
  {
    id: 'top-herbal-drug-interactions-major',
    domainId: 'bahan_alam',
    title: 'Interaksi Obat-Herbal Mayor (Herb-Drug Interactions): Enzim Sitokrom CYP450 & P-Glikoprotein',
    category: 'Farmakologi Bahan Alam & Toksikologi',
    tags: ['Interaksi Herbal', 'St Johns Wort', 'Ginkgo', 'Bawang Putih', 'Ginseng', 'CYP3A4', 'P-gp'],
    summary: 'Penggunaan bersamaan suplemen herbal dan obat konvensional sintetis dapat memicu interaksi farmakokinetik yang signifikan secara klinis melalui induksi atau inhibisi enzim metabolisme hepar (CYP3A4, CYP2C9, CYP2E1) dan transporter efluks P-glikoprotein (P-gp), yang dapat menggagalkan terapi atau memicu efek toksik fatal.',
    keyPearls: [
      '1. St. John\'s Wort (Hypericum perforatum) - Herbal Antidepresi Alami:',
      '• Mekanisme: INDUKTOR KUAT enzim CYP3A4 dan transporter P-Glikoprotein (P-gp).',
      '• Dampak Klinis Fatal: Menurunkan konsentrasi plasma obat-obat kritis secara drastis:',
      '  - Siklosporin / Takrolimus: Memicu rejeksi organ transplantasi ginjal/jantung.',
      '  - Kontrasepsi Oral Estrogen-Progesteron: Memicu kegagalan kontrasepsi (kehamilan yang tidak direncanakan).',
      '  - Antiretroviral HIV (Inhibitor Protease / NNRTI): Memicu resistensi virus dan kegagalan virologis.',
      '  - Digoksin: Menurunkan kadar serum digoksin sub-terapeutik.',
      '  - Warfarin: Menurunkan nilai INR (risiko trombosis bekuan darah).',
      '• Efek Samping Tambahan: Sindrom Serotonin jika digabung dengan antidepresan SSRI (Fluoksetin, Sertralin).',
      '2. Ginkgo biloba (Herbal Pelancar Memori & Sirkulasi Serebral):',
      '• Kandungan aktif Ginkgolida B adalah antagonis poten Platelet-Activating Factor (PAF).',
      '• Interaksi Berbahaya: Dikombinasikan dengan Antiplatelet (Aspirin, Klopidogrel) atau Antikoagulan (Warfarin, Heparin) meningkatkan risiko PERDARAHAN SPONTAN masif dan perdarahan intrakranial (stroke hemoragik).',
      '3. Allium sativum (Bawang Putih / Garlic Extract):',
      '• Memiliki efek antiplatelet instrinsik dan inhibisi tromboksan; wajib dihentikan minimal 7-10 hari sebelum tindakan operasi elektif bedah.',
      '• Menurunkan kadar plasma Saquinavir (antiretroviral) hingga 50%.',
      '4. Panax ginseng:',
      '• Memiliki efek hipoglikemik aditif jika digabung dengan obat antidiabetes (Insulin, Sulfonilurea) -> memicu krisis hipoglikemia.',
      '• Menurunkan efektivitas Warfarin (menurunkan INR).'
    ],
    frequentExamPitfalls: [
      'St. John\'s Wort adalah INDUKTOR enzim CYP3A4 (menurunkan kadar obat lain di darah), BUKAN inhibitor.',
      'Pasien yang akan menjalani operasi besar WAJIB menghentikan suplemen Ginkgo biloba dan Bawang putih minimal 1 - 2 minggu sebelum operasi untuk mencegah komplikasi perdarahan.'
    ],
    referenceStandard: 'Stockley\'s Herbal Medicines Interactions & Natural Medicines Comprehensive Database'
  }
];
