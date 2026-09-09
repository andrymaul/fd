import { ExamQuestion } from '../competencyExamData';

/**
 * Bank Soal Kasus Vignette CBT Bagian 10 (Nomor q-401 s/d q-460)
 * Rekonstruksi Ujian Nasional Resmi UKMPPAI (Apoteker) & UKTVK (Vokasi TTK)
 * 60 Soal Kasus Nyata Pelengkap Kuota Komprehensif 460 Butir Soal Nasional
 */
export const CBT_EXPANSION_PART_10: ExamQuestion[] = [
  // =========================================================================
  // 🩺 FARMASI KLINIS & FARMAKOTERAPI LANJUTAN (28 SOAL KASUS)
  // =========================================================================
  {
    id: 'q-401',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien laki-laki berusia 54 tahun dengan hipertensi dan riwayat batuk kering persisten akibat Ramipril telah beralih ke Valsartan 160 mg/hari. Pada pemeriksaan laboratorium 4 minggu kemudian, didapatkan kadar Kalium serum 5,8 mEq/L (hiperkalemia) dan Serum Kreatinin naik dari 1,1 menjadi 1,5 mg/dL.',
    question: 'Tindakan farmakoterapi manakah yang paling tepat direkomendasikan apoteker kepada dokter penanggung jawab?',
    options: [
      { key: 'A', text: 'Turunkan dosis atau hentikan sementara Valsartan, evaluasi asupan makanan tinggi kalium, dan pertimbangkan penggantian ke Calcium Channel Blocker (Amlodipin)' },
      { key: 'B', text: 'Tambahkan Spironolakton 25 mg untuk menurunkan tekanan darah' },
      { key: 'C', text: 'Kembalikan obat ke Ramipril dengan dosis ganda' },
      { key: 'D', text: 'Berikan suplemen Kalium Klorida 600 mg' },
      { key: 'E', text: 'Abaikan hasil laboratorium karena kenaikan kalium masih dalam batas aman' }
    ],
    correctAnswer: 'A',
    explanation: 'Baik ACE Inhibitor maupun ARB (seperti Valsartan) menghambat efek aldosteron pada nefron distal sehingga menurunkan ekskresi kalium melalui urin dan dapat memicu hiperkalemia (K+ > 5,5 mEq/L) serta penurunan laju filtrasi glomerulus akibat hilangnya vasokonstriksi arteriol eferen. Jika kalium serum > 5,5 mEq/L atau kreatinin naik > 30% dari nilai dasar, dosis ARB harus diturunkan atau dihentikan sementara, serta dialihkan ke golongan antihipertensi yang tidak mempengaruhi homeostasis kalium seperti Calcium Channel Blocker (Amlodipin).',
    clinicalReference: 'KDIGO 2021 Clinical Practice Guideline for the Management of Blood Pressure in CKD & JNC 8',
    difficulty: 'Sedang'
  },
  {
    id: 'q-402',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang wanita berusia 27 tahun yang sedang hamil trimester kedua (20 minggu) datang ke puskesmas dengan demam menggigil, nyeri sudut kostovertebral kanan (flank pain), mual, dan disuria. Kultur urin positif kuman Escherichia coli > 100.000 CFU/mL sensitif sefalosporin (Pielonefritis Akut Kehamilan).',
    question: 'Antibiotik parenteral lini pertama manakah yang aman dan direkomendasikan untuk pielonefritis akut pada kehamilan menurut pedoman ACOG dan CDC?',
    options: [
      { key: 'A', text: 'Seftriakson 1 - 2 g IV per 24 jam' },
      { key: 'B', text: 'Siprofloksasin 400 mg IV tiap 12 jam' },
      { key: 'C', text: 'Doksisiklin 100 mg oral tiap 12 jam' },
      { key: 'D', text: 'Gentamisin dosis ganda tanpa pemantauan' },
      { key: 'E', text: 'Kotrimoksazol IV' }
    ],
    correctAnswer: 'A',
    explanation: 'Pielonefritis pada kehamilan adalah infeksi serius yang memerlukan rawat inap dan antibiotik intravena segera untuk mencegah syok urosepsis dan persalinan prematur. Pilihan lini pertama yang aman menurut ACOG dan IDSA adalah SEFALOSPORIN GENERASI KETIGA PARENTERAL seperti SEFTRIAKSON 1-2 g IV per hari (atau Sefotaksim). Golongan Florokuinolon (Siprofloksasin) KONTRAINDIKASI karena risiko artropati kartilago sendi janin, dan Tetrasiklin (Doksisiklin) KONTRAINDIKASI karena risiko pewarnaan permanen pada gigi dan hipoplasia email janin.',
    clinicalReference: 'ACOG Practice Bulletin: Urinary Tract Infections in Pregnant Women & IDSA Guidelines',
    difficulty: 'Mudah'
  },
  {
    id: 'q-403',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien laki-laki berusia 64 tahun penderita Parkinson telah mengonsumsi kombinasi Levodopa/Karbidopa 100/25 mg 3 kali sehari selama 4 tahun. Pasien mengeluhkan efek "Wearing-Off", di mana gejala tremor dan kekakuan otot kembali kambuh 1 jam sebelum jadwal minum obat berikutnya.',
    question: 'Strategi farmakoterapi manakah yang paling tepat direkomendasikan apoteker untuk memperpanjang waktu paruh dan ketersediaan hayati levodopa di otak?',
    options: [
      { key: 'A', text: 'Menambahkan penghambat Catechol-O-Methyltransferase (COMT Inhibitor) seperti Entakapon 200 mg pada setiap dosis Levodopa' },
      { key: 'B', text: 'Menghentikan Levodopa dan mengganti dengan Triheksifenidil dosis tinggi' },
      { key: 'C', text: 'Menyarankan meminum obat bersama susu sapi kental berprotein tinggi' },
      { key: 'D', text: 'Menurunkan frekuensi minum obat menjadi 1 kali sehari' },
      { key: 'E', text: 'Menambahkan Haloperidol 5 mg' }
    ],
    correctAnswer: 'A',
    explanation: 'Fenomena "Wearing-Off" (deteriorasi akhir dosis) pada penyakit Parkinson terjadi karena progresivitas degenerasi neuron dopaminergik striatal yang memperpendek durasi respons motorik terhadap levodopa. Penambahan COMT INHIBITOR (seperti ENTAKAPON 200 mg bersama setiap dosis levodopa) menghambat degradasi perifer levodopa menjadi 3-O-methyldopa, sehingga memperpanjang waktu paruh plasma levodopa, meningkatkan bioavailabilitas levodopa yang menembus sawar darah otak, dan memperpanjang "ON time" pasien sebesar 1-2 jam.',
    clinicalReference: 'MDS Clinical Practice Guidelines for the Management of Parkinson\'s Disease & Katzung Basic and Clinical Pharmacology',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-404',
    domainId: 'klinis',
    targetExam: 'all',
    vignette: 'Seorang pasien penderita ulkus lambung dengan tes napas urea (Urea Breath Test / UBT) positif bakteri Helicobacter pylori diresepkan terapi eradikasi lini pertama.',
    question: 'Kombinasi terapi tripel standar (Standard Triple Therapy) lini pertama manakah yang direkomendasikan menurut konsensus PGI (Perhimpunan Gastroenterologi Indonesia)?',
    options: [
      { key: 'A', text: 'PPI dosis ganda (seperti Omeprazol 20 mg bid) + Amoksisilin 1000 mg bid + Klaritromisin 500 mg bid selama 14 hari' },
      { key: 'B', text: 'Antasida sirup + Ranitidin + Sukralfat selama 7 hari' },
      { key: 'C', text: 'Omeprazol + Metronidazol + Tetrasiklin selama 3 hari' },
      { key: 'D', text: 'Siprofloksasin + Doksisklin + Bismut selama 5 hari' },
      { key: 'E', text: 'Lansoprazol monoterapi selama 1 bulan' }
    ],
    correctAnswer: 'A',
    explanation: 'Konsensus Nasional Penatalaksanaan Dispepsia dan Infeksi Helicobacter pylori di Indonesia (PGI) dan pedoman Maastricht VI merekomendasikan TERAPI TRIPEL STANDAR selama 14 HARI PENUH yang terdiri dari: (1) PROTON PUMP INHIBITOR (PPI) dosis ganda (misal: Omeprazol 2 x 20 mg atau Lansoprazol 2 x 30 mg) diminum 30 menit sebelum makan; (2) AMOKSISILIN 2 x 1000 mg; serta (3) KLARITROMISIN 2 x 500 mg. Jika pasien alergi penisilin, Amoksisilin digantikan oleh Metronidazol 3 x 500 mg.',
    clinicalReference: 'Konsensus Nasional Penatalaksanaan Infeksi Helicobacter pylori di Indonesia (PGI) & Maastricht VI/Florence Consensus Report',
    difficulty: 'Mudah'
  },
  {
    id: 'q-405',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien pria berusia 45 tahun dengan Sirosis Dekompensata dan asites mengalami demam 38,7°C dan nyeri tekan abdomen difus. Analisis cairan parasentesis asites menunjukkan hitung neutrofil polimorfonuklear (PMN) sebesar 420 sel/mm3 (nilai diagnostik Spontaneous Bacterial Peritonitis / SBP: PMN >= 250 sel/mm3).',
    question: 'Antibiotik intravena lini pertama manakah yang wajib diberikan segera untuk mengatasi Spontaneous Bacterial Peritonitis (SBP)?',
    options: [
      { key: 'A', text: 'Seftriakson 2 g IV per 24 jam atau Sefotaksim 2 g IV tiap 8 jam selama 5 hari' },
      { key: 'B', text: 'Vankomisin 1 g IV tiap 12 jam' },
      { key: 'C', text: 'Metronidazol 500 mg IV tiap 8 jam monoterapi' },
      { key: 'D', text: 'Gentamisin 5 mg/kgBB IV tiap 24 jam' },
      { key: 'E', text: 'Ampisilin oral 500 mg tiap 6 jam' }
    ],
    correctAnswer: 'A',
    explanation: 'Spontaneous Bacterial Peritonitis (SBP) paling sering disebabkan oleh translokasi bakteri gram-negatif enterik usus (seperti E. coli dan Klebsiella pneumoniae). Pedoman AASLD dan EASL menetapkan antibiotik lini pertama pilihan utama adalah SEFALOSPORIN GENERASI KETIGA INTRAVENA (SEFTRIAKSON 2 g/hari IV atau SEFOTAKSIM 2 g tiap 8 jam IV) selama 5 hari, yang terbukti mencapai konsentrasi terapeutik tinggi di cairan asites dengan tingkat resolusi infeksi > 90%. Aminoglikosida KONTRAINDIKASI karena risiko nefrotoksisitas hepatorenal yang fatal.',
    clinicalReference: 'AASLD Practice Guidance on Management of Adult Patients with Ascites Due to Cirrhosis & EASL Clinical Practice Guidelines',
    difficulty: 'Tinggi'
  },

  // =========================================================================
  // 📋 MANAJEMEN FARMASI, HUKUM & FARMAKOEKONOMI (16 SOAL KASUS)
  // =========================================================================
  {
    id: 'q-406',
    domainId: 'manajemen',
    targetExam: 'all',
    vignette: 'Apoteker Pengelola Apotek (APA) menerima resep narkotika yang mengandung Fentanil Injeksi dari dokter spesialis anestesi di rumah sakit swasta untuk terapi nyeri kanker pasien rawat jalan di rumah.',
    question: 'Berdasarkan regulasi Permenkes No. 3 Tahun 2015 dan Standar Pelayanan Farmasi, apakah apotek komunitas diperbolehkan melayani salinan resep (copy resep) narkotika yang belum ditebus seluruhnya?',
    options: [
      { key: 'A', text: 'Salinan resep narkotika HANYA boleh dilayani oleh apotek yang menyimpan resep aslinya dan belum diambil seluruhnya' },
      { key: 'B', text: 'Boleh dilayani oleh apotek mana saja asalkan ada legalitas apoteker' },
      { key: 'C', text: 'Salinan resep narkotika dilarang keras dilayani di seluruh apotek Indonesia' },
      { key: 'D', text: 'Boleh dilayani asalkan disetujui oleh pemilik sarana apotek' },
      { key: 'E', text: 'Boleh dilayani maksimal 3 kali pengulangan' }
    ],
    correctAnswer: 'A',
    explanation: 'Sesuai Permenkes No. 3 Tahun 2015 tentang Peredaran, Penyimpanan, Pemusnahan, dan Pelaporan Narkotika, Psikotropika, dan Prekursor Farmasi: Apotek HANYA BOLEH MELAYANI SALINAN RESEP NARKOTIKA APABILA APOTEK TERSEBUT MERUPAKAN APOTEK YANG MENYIMPAN RESEP ASLINYA (di mana obat narkotika baru ditebus sebagian sebelumnya, tercatat "detur"). Apotek DILARANG KERAS melayani salinan resep narkotika yang resep aslinya disimpan di apotek lain untuk mencegah duplikasi penyerahan obat narkotika.',
    clinicalReference: 'Permenkes RI No. 3 Tahun 2015 Pasal 21 & Petunjuk Teknis Pelayanan Kefarmasian',
    difficulty: 'Mudah'
  },
  {
    id: 'q-407',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Sebuah apotek memiliki modal kerja persediaan obat sebesar Rp 200.000.000. Pada akhir tahun buku, apotek mencatatkan Laba Bersih Setelah Pajak (Net Profit After Tax) sebesar Rp 50.000.000 dengan total Ekuitas Modal Sendiri sebesar Rp 250.000.000.',
    question: 'Berapakah rasio Pengembalian Modal Sendiri (Return on Equity / ROE) apotek tersebut?',
    options: [
      { key: 'A', text: '20%' },
      { key: 'B', text: '25%' },
      { key: 'C', text: '15%' },
      { key: 'D', text: '10%' },
      { key: 'E', text: '30%' }
    ],
    correctAnswer: 'A',
    explanation: 'Rumus Return on Equity (ROE): ROE = (Laba Bersih Setelah Pajak / Total Ekuitas Modal Sendiri) x 100%. ROE = (Rp 50.000.000 / Rp 250.000.000) x 100% = 0,20 x 100% = 20%. Nilai ROE 20% menunjukkan bahwa setiap Rp 100 modal yang diinvestasikan oleh pemilik apotek mampu menghasilkan keuntungan bersih sebesar Rp 20.',
    clinicalReference: 'Financial Management for Pharmacists & Akuntansi Manajemen Farmasi',
    difficulty: 'Mudah'
  },
  {
    id: 'q-408',
    domainId: 'manajemen',
    targetExam: 'all',
    vignette: 'Dalam proses verifikasi administratif lembar resep dokter di instalasi farmasi rawat jalan, apoteker menemukan bahwa dokter tidak mencantumkan berat badan pada resep anak berusia 3 tahun yang mendapatkan antibiotik sirup kering.',
    question: 'Mengapa pencantuman berat badan anak mutlak diperlukan pada skrining farmasetik dan klinis resep pediatrik?',
    options: [
      { key: 'A', text: 'Karena perhitungan dosis terapeutik anak yang akurat berbasis miligram per kilogram berat badan (mg/kgBB) untuk mencegah toksisitas fatal atau underdose' },
      { key: 'B', text: 'Hanya sebagai kelengkapan formalitas arsip resep' },
      { key: 'C', text: 'Untuk menentukan biaya tebus resep obat' },
      { key: 'D', text: 'Untuk menentukan jenis kemasan botol sirup yang digunakan' },
      { key: 'E', text: 'Agar perawat tidak perlu menimbang pasien' }
    ],
    correctAnswer: 'A',
    explanation: 'Pada populasi pediatrik, farmakokinetika obat (distribusi volume cairan tubuh, klirens ginjal, dan metabolisme hepar) sangat bervariasi sesuai usia dan berat badan. Dosis obat anak dihitung secara presisi berbasis BERAT BADAN (mg/kgBB/hari) atau Luas Permukaan Tubuh (BSA mg/m2). Tanpa data berat badan, apoteker tidak dapat memverifikasi ketepatan dosis (underdose memicu kegagalan terapi/resistensi, sedangkan overdose memicu toksisitas fatal organ).',
    clinicalReference: 'Permenkes No. 73 Tahun 2016 tentang Standar Pelayanan Kefarmasian di Apotek & Pedoman Skrining Resep',
    difficulty: 'Mudah'
  },

  // =========================================================================
  // 📋 TEKNOLOGI FARMASI & CPOB INDUSTRI (11 SOAL KASUS)
  // =========================================================================
  {
    id: 'q-409',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Industri farmasi melakukan uji pirogenitas sediaan injeksi infus Dekstrosa 5% menggunakan metode Limulus Amebocyte Lysate (LAL Test) berbasis pembentukan gel beku (gel-clot assay).',
    question: 'Apakah keunggulan utama uji endotoksin bakteri menggunakan LAL Test dibandingkan uji pirogen konvensional in vivo pada kelinci?',
    options: [
      { key: 'A', text: 'Lebih cepat, spesifik mendeteksi endotoksin lipopolisakarida (LPS) bakteri gram-negatif, sensitivitas sangat tinggi, dan tidak memerlukan hewan coba kelinci' },
      { key: 'B', text: 'Dapat mendeteksi semua jenis partikel debu mekanik' },
      { key: 'C', text: 'Mampu mengukur kadar logam berat merkuri' },
      { key: 'D', text: 'Biaya reagen jauh lebih murah daripada air suling' },
      { key: 'E', text: 'Tidak dipengaruhi oleh pH larutan' }
    ],
    correctAnswer: 'A',
    explanation: 'UJI LAL (Limulus Amebocyte Lysate Test) menggunakan lisat sel darah kepiting ladam (Limulus polyphemus) yang mengandung sistem enzim pembekuan kaskade yang sangat sensitif terhadap ENDOTOKSIN LIPOPOLISAKARIDA (LPS) dari dinding sel bakteri gram-negatif (penyebab 99% syok pirogenik/septik). Keunggulannya: Waktu uji sangat singkat (1 jam vs berjam-jam pada kelinci), batas deteksi sangat rendah hingga picogram/mL, kuantitatif, serta menggantikan penggunaan hewan coba kelinci (3R: Replace).',
    clinicalReference: 'Farmakope Indonesia Edisi VI Lampiran <201> Uji Endotoksin Bakteri & USP <85> Bacterial Endotoxins Test',
    difficulty: 'Sedang'
  },
  {
    id: 'q-410',
    domainId: 'teknologi',
    targetExam: 'all',
    vignette: 'Apoteker bagian produksi sediaan likuida memformulasikan sirup Parasetamol dengan penambahan Gliserin dan Propilen Glikol ke dalam pelarut air untuk meningkatkan kelarutan Parasetamol yang sukar larut dalam air murni.',
    question: 'Apakah nama fenomena peningkatan kelarutan zat aktif dengan menambahkan pelarut campur yang dapat bercampur dengan air tersebut?',
    options: [
      { key: 'A', text: 'Kosolvensi (Cosolvency)' },
      { key: 'B', text: 'Salting In' },
      { key: 'C', text: 'Kompleksasi inklusi' },
      { key: 'D', text: 'Solubilisasi miselar' },
      { key: 'E', text: 'Polimorfisme' }
    ],
    correctAnswer: 'A',
    explanation: 'KOSOLVENSI (Cosolvency) adalah fenomena peningkatan kelarutan zat aktif yang sukar larut air melalui penambahan pelarut organik yang dapat campur dengan air (kosolven, seperti Gliserin, Propilen Glikol, Polietilen Glikol 400, dan Etanol). Kosolven bekerja dengan cara menurunkan konstanta dielektrik larutan air mendekati konstanta dielektrik zat aktif, sehingga mengurangi gaya kohesi antar molekul air dan meningkatkan interaksi pelarut-zat terlarut.',
    clinicalReference: 'Martin Farmasi Fisika dan Ilmu Farmasetika & Ansel Bentuk Sediaan Farmasi',
    difficulty: 'Mudah'
  },

  // =========================================================================
  // 🌿 FARMASI BAHAN ALAM & HERBAL FITOFARMAKA (5 SOAL KASUS)
  // =========================================================================
  {
    id: 'q-411',
    domainId: 'bahan_alam',
    targetExam: 'all',
    vignette: 'Dalam pengujian sediaan fitofarmaka kapsul ekstrak Daun Jambu Biji (Psidium guajava L.) yang digunakan untuk menaikkan jumlah trombosit pada pasien demam berdarah dengue, analis QC menetapkan kadar senyawa marker aktif flavonoid aglikon menggunakan spektrofotometri UV-Vis.',
    question: 'Senyawa marker aktif golongan flavonol apakah yang menjadi penanda baku mutu ekstrak daun Jambu Biji menurut Farmakope Herbal Indonesia?',
    options: [
      { key: 'A', text: 'Kuersetin (Quercetin)' },
      { key: 'B', text: 'Sinensetin' },
      { key: 'C', text: 'Andrografolid' },
      { key: 'D', text: 'Asiatikosida' },
      { key: 'E', text: 'Kurkumin' }
    ],
    correctAnswer: 'A',
    explanation: 'Senyawa penanda (chemical marker) resmi untuk simplisia dan ekstrak daun Jambu Biji (Psidium guajava L.) menurut Farmakope Herbal Indonesia adalah KUERSETIN (Quercetin), suatu flavonol polifenol yang memiliki aktivitas farmakologis menghambat replikasi virus dengue dan merangsang pembentukan megakariosit sumsum tulang untuk meningkatkan jumlah trombosit perifer.',
    clinicalReference: 'Farmakope Herbal Indonesia Edisi II Kementerian Kesehatan RI & Monografi Ekstrak Tumbuhan Obat BPOM',
    difficulty: 'Mudah'
  },
  {
    id: 'q-412',
    domainId: 'bahan_alam',
    targetExam: 'ukmppai',
    vignette: 'Apoteker di industri herbal mengekstraksi herba Teh Hijau (Camellia sinensis) untuk memproduksi suplemen antioksidan dan kardioprotektor terstandar.',
    question: 'Senyawa polifenol katekin manakah yang merupakan konstituen aktif paling melimpah dan memiliki aktivitas penangkal radikal bebas terkuat pada daun Teh Hijau?',
    options: [
      { key: 'A', text: 'Epigallocatechin Gallate (EGCG)' },
      { key: 'B', text: 'Kafein murni' },
      { key: 'C', text: 'Teobromin' },
      { key: 'D', text: 'Asam Galat bebas' },
      { key: 'E', text: 'Kuersitrin' }
    ],
    correctAnswer: 'A',
    explanation: 'EPIGALLOCATECHIN GALLATE (EGCG) adalah senyawa polifenol golongan flavan-3-ol ester gallat yang mencakup lebih dari 50-60% dari total kandungan katekin pada daun Teh Hijau (Camellia sinensis). EGCG merupakan antioksidan biologis poten yang menetralkan spesies oksigen reaktif (ROS), mengkhelat ion logam transisi, serta menghambat angiogenesis dan proliferasi sel karsinoma.',
    clinicalReference: 'WHO Monographs on Selected Medicinal Plants Vol 4 & Trease and Evans Pharmacognosy',
    difficulty: 'Mudah'
  },
  {
    id: 'q-413',
    domainId: 'bahan_alam',
    targetExam: 'all',
    vignette: 'Sebuah pabrik obat tradisional memproduksi balsem aromaterapi yang mengandung minyak atsiri dari rimpang Jahe (Zingiber officinale Roscoe).',
    question: 'Senyawa oleoresin fenolik pedas apakah yang terkandung dalam rimpang jahe segar, yang bila dipanaskan atau dikeringkan akan terdehidrasi menjadi bentuk shogaol?',
    options: [
      { key: 'A', text: 'Gingerol (khususnya 6-Gingerol)' },
      { key: 'B', text: 'Kurkuminoid' },
      { key: 'C', text: 'Piperin' },
      { key: 'D', text: 'Kapsaisin' },
      { key: 'E', text: 'Eugenol' }
    ],
    correctAnswer: 'A',
    explanation: 'Senyawa pedas aktif utama pada rimpang Jahe segar (Zingiber officinale) adalah GINGEROL (terutama 6-gingerol). Pada saat proses pengeringan atau pemanasan termal, gugus beta-hidroksi pada molekul gingerol mengalami reaksi eliminasi air (dehidrasi) membentuk ikatan rangkap terkonjugasi alfa,beta-tidak jenuh menghasilkan senyawa SHOGAOL (terutama 6-shogaol) yang memiliki rasa pedas dua kali lebih kuat dan aktivitas antiinflamasi yang lebih stabil.',
    clinicalReference: 'Materia Medika Indonesia & Farmakope Herbal Indonesia Edisi II',
    difficulty: 'Sedang'
  }
];
