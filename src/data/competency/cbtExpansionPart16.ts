import { ExamQuestion } from '../competencyExamData';

/**
 * BANK SOAL CBT UKMPPAI (APOTEKER) PENGAYAAN BAGIAN 16 (Nomor q-1256 s/d q-1310)
 * Cetak Biru Resmi UKMPPAI 2026 (KFN, IAI & APTFI)
 * Fokus: Toksikologi & Antidotum Kedaruratan, Farmakoterapi Saluran Cerna/Nafas/Saraf,
 * Manajemen Mutu Apotek & RS, Rantai Dingin Vaksin, CPOB Steril HVAC, dan Standardisasi Fitofarmaka
 * Total: 55 Butir Soal Vignette Kasus Komprehensif
 */
export const CBT_EXPANSION_PART_16: ExamQuestion[] = [
  // =========================================================================
  // 🩺 FARMAKO TERAPI, KEGAWATDARURATAN & TOKSIKOLOGI (q-1256 s/d q-1285)
  // =========================================================================
  {
    id: 'q-1256',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien sirosis hati stadium dekompensata dibawa ke rumah sakit karena disorientasi, bicara meracau, dan asteriksis (flapping tremor tangan). Kadar amonia darah meningkat tajam (Ensefalopati Hepatik). Dokter meresepkan sirup Laktulosa.',
    question: 'Bagaimanakah mekanisme kerja Laktulosa dalam menurunkan kadar amonia darah pada pasien tersebut?',
    options: [
      { key: 'A', text: 'Difermentasi oleh bakteri kolon menjadi asam organik yang menurunkan pH lumen usus, mengubah amonia (NH3) yang mudah diserap menjadi ion amonium (NH4+) yang terperangkap dan diekskresikan lewat feses' },
      { key: 'B', text: 'Bekerja langsung mematikan seluruh bakteri usus secara sistemik' },
      { key: 'C', text: 'Meningkatkan sintesis urea di hepar yang rusak' },
      { key: 'D', text: 'Menghambat sekresi asam lambung' },
      { key: 'E', text: 'Meningkatkan filtrasi glomerulus ginjal' }
    ],
    correctAnswer: 'A',
    explanation: 'Laktulosa (disakarida sintetis) tidak diserap di usus halus. Di kolon, laktulosa dipecah oleh bakteri usus menjadi asam laktat dan asam asetat, menurunkan pH intraluminal kolon. Penurunan pH ini memprotonasi amonia non-ionik (NH3 yang mudah menembus mukosa ke darah) menjadi ION AMONIUM (NH4+ yang bermuatan sehingga terperangkap di usus dan tidak dapat diserap). Efek laksatif osmotiknya kemudian mempercepat pengeluaran amonium melalui feses (target 2-3 kali BAB lembek per hari).',
    clinicalReference: 'AASLD/EASL Practice Guideline: Hepatic Encephalopathy in Chronic Liver Disease',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1257',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien sirosis hepatis mengalami komplikasi asites derajat 2 (distensi abdomen sedang). Dokter spesialis penyakit dalam meresepkan terapi diuretik kombinasi Spironolakton dan Furosemid.',
    question: 'Berapakah rasio dosis kombinasi Spironolakton dan Furosemid yang baku direkomendasikan dalam pedoman AASLD untuk menjaga normokalemia?',
    options: [
      { key: 'A', text: 'Spironolakton 100 mg : Furosemid 40 mg' },
      { key: 'B', text: 'Spironolakton 20 mg : Furosemid 100 mg' },
      { key: 'C', text: 'Spironolakton 50 mg : Furosemid 50 mg' },
      { key: 'D', text: 'Spironolakton 200 mg : Furosemid 200 mg' },
      { key: 'E', text: 'Spironolakton 25 mg : Furosemid 10 mg' }
    ],
    correctAnswer: 'A',
    explanation: 'Pedoman AASLD (American Association for the Study of Liver Diseases) menetapkan bahwa terapi asites sirotik harus dimulai dengan kombinasi RASIO SPIRONOLAKTON 100 MG DAN FUROSEMID 40 MG sekali sehari di pagi hari. Rasio 100:40 ini secara fisiologis menyeimbangkan efek retensi kalium dari Spironolakton (antagonis aldosteron) dan efek pembuangan kalium dari Furosemid (loop diuretic), sehingga menjaga kadar kalium darah tetap stabil (normokalemia) sambil menghasilkan natriuresis optimal.',
    clinicalReference: 'AASLD Practice Guidance: Management of Ascites in Cirrhosis & Dipiro 12th Ed',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1258',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien pria 55 tahun didiagnosis glaukoma sudut terbuka primer (POAG) dengan Tekanan Intraokular (TIO) 28 mmHg (normal: 10-21 mmHg). Dokter mata memilih obat tetes mata lini pertama yang digunakan sekali sehari di malam hari.',
    question: 'Golongan obat tetes mata lini pertama manakah yang bekerja meningkatkan aliran keluar (outflow) uveoskleral cairan akuos humor?',
    options: [
      { key: 'A', text: 'Analog Prostaglandin (Latanoprost / Bimatoprost / Travoprost)' },
      { key: 'B', text: 'Beta-blocker (Timolol)' },
      { key: 'C', text: 'Inhibitor Karbonik Anhidrase (Dorzolamid)' },
      { key: 'D', text: 'Agonis Kolinergik Miotik (Pilokarpin)' },
      { key: 'E', text: 'Kortikosteroid tetes (Deksametason)' }
    ],
    correctAnswer: 'A',
    explanation: 'ANALOG PROSTAGLANDIN (Latanoprost 0,005%, Bimatoprost, Travoprost) adalah obat tetes mata pilihan lini pertama paling poten untuk menurunkan TIO pada glaukoma sudut terbuka primer (penurunan TIO 25-35%). Mekanisme kerjanya adalah meningkatkan pengeluaran (outflow) cairan mata melalui jalur uveoskleral non-konvensional. Dosis cukup 1 tetes sekali sehari pada malam hari.',
    clinicalReference: 'American Academy of Ophthalmology (AAO) Preferred Practice Pattern: Primary Open-Angle Glaucoma',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1259',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien wanita 60 tahun datang ke IGD mata dengan keluhan nyeri bola mata hebat mendadak, mata merah, melihat halo (pelangi) di sekitar cahaya, mual muntah, pupil midriasis terfiksasi, dan TIO melonjak hingga 55 mmHg (Glaukoma Sudut Tertutup Akut).',
    question: 'Diuretik osmotik intravena apakah yang harus segera diinfuskan untuk menurunkan tekanan intraokular secara cepat?',
    options: [
      { key: 'A', text: 'Manitol 20% intravena (1-2 g/kgBB dalam 30-45 menit)' },
      { key: 'B', text: 'Furosemid bolus' },
      { key: 'C', text: 'Spironolakton' },
      { key: 'D', text: 'Hidroklorotiazid' },
      { key: 'E', text: 'Albumin 20%' }
    ],
    correctAnswer: 'A',
    explanation: 'Glaukoma sudut tertutup akut adalah kondisi kegawatdaruratan oftalmologi yang mengancam kebutaan permanen. Pemberian MANITOL 20% IV (1-2 g/kgBB infus cepat) meningkatkan osmolaritas plasma darah, sehingga menarik cairan secara osmotik keluar dari korpus vitreum ke pembuluh darah okular, menghasilkan penurunan TIO yang sangat cepat dalam hitungan menit bersama obat topikal penurun TIO dan Asetazolamid IV.',
    clinicalReference: 'AAO Glaucoma Guidelines & Kanski Clinical Ophthalmology 9th Ed',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1260',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien geriatri anemia makrositik (MCV 112 fL) diduga mengalami defisiensi Vitamin B12. Sebelum hasil kadar B12 darah keluar, seorang dokter berencana memberikan suplementasi Asam Folat dosis tinggi tunggal.',
    question: 'Apakah bahaya klinis yang dapat terjadi jika Asam Folat diberikan sendirian pada pasien yang sebenarnya mengalami defisiensi Vitamin B12 berat?',
    options: [
      { key: 'A', text: 'Asam folat akan mengoreksi anemia makrositik pada darah tepi namun MENUTUPI dan MEMPERCEPAT KERUSAKAN NEUROLOGIS ireversibel (Subacute Combined Degeneration of Spinal Cord)' },
      { key: 'B', text: 'Menyebabkan gagal ginjal akut seketika' },
      { key: 'C', text: 'Menyebabkan leukopenia fatal' },
      { key: 'D', text: 'Memicu perdarahan saluran cerna masif' },
      { key: 'E', text: 'Menurunkan absorbsi zat besi' }
    ],
    correctAnswer: 'A',
    explanation: 'Pada defisiensi Vitamin B12: Pemberian Asam Folat dosis tinggi dapat menembus hambatan folat (folate trap) sehingga kelainan hematologi (anemia megaloblastik) membaik palsu, namun defisiensi Vitamin B12 yang mendasari tetap tidak tertangani. Akibatnya, akumulasi asam metilmalonat terus merusak selubung mielin saraf (DEGENERASI SUBAKUT KORDA SPINALIS) yang berisiko memicu parestesia permanen, ataksia, demensia, dan kelumpuhan neurologis yang tidak dapat pulih.',
    clinicalReference: 'Harrison Principles of Internal Medicine & Dipiro Pharmacotherapy 12th Ed',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-1261',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien pria 48 tahun datang ke klinik dengan serangan artritis gout akut pada sendi ibu jari kaki kanan (podagra) yang bengkak merah dan sangat nyeri sejak 8 jam lalu. Pasien tidak memiliki kontraindikasi ginjal. Dokter memilih terapi Kolkisin oral.',
    question: 'Bagaimanakah aturan dosis inisiasi Kolkisin dosis rendah yang benar sesuai pedoman ACR (American College of Rheumatology)?',
    options: [
      { key: 'A', text: '1,0 mg atau 1,2 mg saat onset, diikuti 0,5 mg atau 0,6 mg satu jam kemudian (maksimal 1,8 mg pada hari pertama)' },
      { key: 'B', text: '1 tablet tiap jam hingga pasien mengalami diare parah' },
      { key: 'C', text: 'langsung 5 mg sekali minum' },
      { key: 'D', text: '0,5 mg seminggu sekali' },
      { key: 'E', text: '3x sehari 2 mg selama 1 bulan' }
    ],
    correctAnswer: 'A',
    explanation: 'Pedoman ACR Gout 2020: Regimen Kolkisin dosis rendah (Low-dose colchicine) terbukti memiliki efikasi analgesik yang sama kuatnya dengan dosis tinggi terdahulu, namun dengan efek samping gastrointestinal (diare/kram perut parah) yang jauh lebih rendah. Dosis inisiasi: 1,0 - 1,2 mg (2 tablet), diikuti 0,5 - 0,6 mg (1 tablet) SATU JAM KEMUDIAN (total 1,8 mg pada hari ke-1). Setelah 12 jam, dapat dilanjutkan dosis rumatan profilaksis 0,5 mg 1-2x/hari.',
    clinicalReference: '2020 American College of Rheumatology Guideline for the Management of Gout',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1262',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien hiperurisemia kronik dengan tofus di siku dan riwayat serangan artritis gout > 3 kali setahun diresepkan Allopurinol sebagai Urate-Lowering Therapy (ULT). Kadar asam urat serum awal adalah 9,8 mg/dL.',
    question: 'Berapakah target kadar asam urat serum yang harus dicapai dan bagaimanakah aturan inisiasi dosis Allopurinol?',
    options: [
      { key: 'A', text: 'Target < 6,0 mg/dL (atau < 5,0 mg/dL bila ada tofus); dimulai dengan dosis rendah 100 mg/hari dan dititrasi bertahap tiap 2-4 minggu' },
      { key: 'B', text: 'Target < 10,0 mg/dL langsung dosis awal 600 mg/hari' },
      { key: 'C', text: 'Target harus tepat 0 mg/dL' },
      { key: 'D', text: 'Cukup diminum 3 hari saat timbul nyeri' },
      { key: 'E', text: 'Target < 8,0 mg/dL tanpa perlu titrasi' }
    ],
    correctAnswer: 'A',
    explanation: 'Pedoman ACR 2020: Target kadar asam urat serum pada terapi jangka panjang adalah < 6,0 mg/dL (dan < 5,0 mg/dL pada pasien dengan tofus berat untuk melarutkan kristal monosodium urat). Inisiasi ALLOPURINOL harus dimulai pada dosis rendah (100 mg/hari, atau 50 mg/hari pada CKD) dan dititrasi naik bertahap tiap 2-4 minggu hingga target tercapai. Memulai langsung dosis tinggi memicu fluktuasi tajam asam urat yang justru memobilisasi kristal dan memicu serangan akut sekunder (flare).',
    clinicalReference: '2020 American College of Rheumatology Guideline for the Management of Gout',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1263',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Sebelum meresepkan Allopurinol untuk pasien keturunan Asia Timur/Tenggara, pedoman klinis merekomendasikan pemeriksaan skrining genetik untuk mencegah reaksi hipersensitivitas parah seperti Sindrom Stevens-Johnson (SJS) dan Toxic Epidermal Necrolysis (TEN).',
    question: 'Pemeriksaan alel genetik apakah yang direkomendasikan tersebut?',
    options: [
      { key: 'A', text: 'HLA-B*5801' },
      { key: 'B', text: 'HLA-B*1502' },
      { key: 'C', text: 'CYP2C19' },
      { key: 'D', text: 'TPMT' },
      { key: 'E', text: 'HER2' }
    ],
    correctAnswer: 'A',
    explanation: 'Skrining alel HLA-B*5801 direkomendasikan sebelum inisiasi Allopurinol pada populasi berisiko tinggi (keturunan Tionghoa Han, Korea, Thai, dan Asia Tenggara) karena adanya korelasi genetik yang sangat kuat dengan ALLOPURINOL HYPERSENSITIVITY SYNDROME (AHS), SJS, dan TEN. Pasien yang positif membawa alel HLA-B*5801 tidak boleh diberikan Allopurinol (dapat beralih ke Febuxostat). Catatan: HLA-B*1502 untuk Karbamazepin.',
    clinicalReference: 'CPIC Guideline for Allopurinol and HLA-B Genotype & ACR Gout Guidelines',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-1264',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien wanita 35 tahun baru didiagnosis Rheumatoid Arthritis (RA) aktif dan memulai terapi DMARD konvensional Metotreksat (MTX) dosis 15 mg sekali seminggu. Apoteker memberikan konseling suplementasi vitamin pendamping.',
    question: 'Vitamin apakah yang wajib diberikan mendampingi terapi Metotreksat dan bagaimanakah jadwal minumnya?',
    options: [
      { key: 'A', text: 'Asam Folat 1–5 mg per hari, diminum pada hari-hari selain hari konsumsi Metotreksat' },
      { key: 'B', text: 'Vitamin C dosis tinggi diminum bersamaan dengan MTX' },
      { key: 'C', text: 'Vitamin B12 diminum sebelum tidur' },
      { key: 'D', text: 'Vitamin K diminum seminggu sekali' },
      { key: 'E', text: 'Vitamin E 400 IU' }
    ],
    correctAnswer: 'A',
    explanation: 'Metotreksat adalah antimetabolit antifolat. Suplementasi ASAM FOLAT (1-5 mg/hari) wajib diberikan pada seluruh pasien RA yang mengonsumsi MTX untuk mengurangi efek samping gastrointestinal (mual, stomatitis mulut), peningkatan enzim transaminase hepar, dan supresi sumsum tulang. Asam folat TIDAK diminum pada hari yang sama saat meminum Metotreksat (diberikan pada hari-hari lainnya) agar tidak mengurangi efikasi imunosupresif MTX.',
    clinicalReference: '2021 American College of Rheumatology Guideline for the Treatment of Rheumatoid Arthritis',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1265',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien Systemic Lupus Erythematosus (SLE) menjalani terapi pemeliharaan jangka panjang dengan Hidroksiklorokuin (Plaquenil). Apoteker mengingatkan pasien untuk rutin menjalani pemeriksaan organ ke dokter spesialis secara berkala.',
    question: 'Pemeriksaan organ manakah yang wajib dipantau rutin untuk mendeteksi efek samping toksisitas khas dari Hidroksiklorokuin?',
    options: [
      { key: 'A', text: 'Pemeriksaan mata (Oftalmologi / Skrining Retinopati Bull\'s Eye)' },
      { key: 'B', text: 'Pemeriksaan audiometri pendengaran' },
      { key: 'C', text: 'Pemeriksaan rontgen paru berkala' },
      { key: 'D', text: 'Pemeriksaan densitas mineral tulang' },
      { key: 'E', text: 'Pemeriksaan endoskopi lambung' }
    ],
    correctAnswer: 'A',
    explanation: 'HIDROKSIKLOROKUIN (HCQ) dapat terakumulasi di epitel pigmen retina mata pada penggunaan jangka panjang, memicu efek samping parah yang ireversibel berupa RETINOPATI MAKULA (makulopati bentuk mata banteng / Bull\'s eye maculopathy). Pasien wajib menjalani pemeriksaan oftalmologi funduskopi/lapang pandang visual saat baseline dan minimal setahun sekali setelah 5 tahun pemakaian.',
    clinicalReference: 'American Academy of Ophthalmology (AAO) Recommendations on Screening for Chloroquine and Hydroxychloroquine Retinopathy',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1266',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien asma dibawa ke IGD dengan serangan asma akut berat (sesak napas berbicara terputus-putus, wheezing inspirasi dan ekspirasi, laju napas 32x/menit, SpO2 89%).',
    question: 'Kombinasi terapi inhalasi bronkodilator kerja cepat apakah yang direkomendasikan dalam pedoman GINA 2023 pada 1 jam pertama?',
    options: [
      { key: 'A', text: 'Nebulisasi SABA (Salbutamol) dikombinasikan dengan SAMA (Ipratropium Bromida) setiap 20 menit selama 1 jam pertama + Kortikosteroid sistemik' },
      { key: 'B', text: 'Inhalasi Flutikason tunggal dosis rendah' },
      { key: 'C', text: 'Injeksi Teofilin bolus cepat tanpa oksigen' },
      { key: 'D', text: 'Salmeterol kering per oral' },
      { key: 'E', text: 'Kromolin natrium' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Global Initiative for Asthma (GINA 2023) untuk eksaserbasi asma berat di faskes darurat: Berikan Oksigen aliran terkontrol (target SpO2 93-95%), nebulisasi SABA (Salbutamol 2,5-5 mg) DIKOMBINASIKAN DENGAN SAMA (Ipratropium bromida 0,5 mg) setiap 20 menit dalam 1 jam pertama, serta KORTIKOSTEROID SISTEMIK dini (Prednison oral 40-50 mg atau Metilprednisolon IV) untuk mempercepat resolusi inflamasi saluran napas.',
    clinicalReference: 'Global Initiative for Asthma (GINA) Global Strategy for Asthma Management and Prevention 2023',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1267',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien PPOK (Penyakit Paru Obstruktif Kronik) dengan riwayat eksaserbasi berulang (>= 2 kali rawat inap dalam setahun terakhir) masuk ke dalam kategori GOLD Group E (Eksaserbasi tinggi). Hasil laboratorium menunjukkan hitung eosinofil darah 350 sel/uL.',
    question: 'Regimen terapi inhalasi jangka panjang manakah yang paling direkomendasikan menurut pedoman GOLD 2024?',
    options: [
      { key: 'A', text: 'Terapi Tripel: LABA + LAMA + Inhaled Corticosteroid (ICS)' },
      { key: 'B', text: 'SABA monoterapi hanya saat sesak' },
      { key: 'C', text: 'Antibiotik oral seumur hidup' },
      { key: 'D', text: 'Kortikosteroid oral harian dosis tinggi' },
      { key: 'E', text: 'Teofilin lepas lambat tunggal' }
    ],
    correctAnswer: 'A',
    explanation: 'Pedoman GOLD (Global Initiative for Chronic Obstructive Lung Disease) 2024: Pada pasien PPOK Golongan E (riwayat eksaserbasi berat berulang) yang memiliki kadar EOSINOFIL DARAH >= 300 SEL/uL, inisiasi TERAPI TRIPEL (LABA + LAMA + ICS dalam satu inhaler) terbukti secara klinis signifikan menurunkan laju eksaserbasi dan mortalitas dibandingkan terapi ganda bronkodilator.',
    clinicalReference: 'Global Strategy for the Diagnosis, Management, and Prevention of COPD (GOLD Report 2024)',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1268',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Remaja wanita 18 tahun dibawa ke IGD 4 jam setelah menelan 30 tablet Parasetamol 500 mg (total 15 gram) dalam percobaan bunuh diri. Kadar parasetamol serum berada di atas garis toksik pada Nomogram Rumack-Matthew.',
    question: 'Antidotum spesifik intravena apakah yang harus segera diadministrasikan dan apakah mekanisme perlindungannya terhadap hepar?',
    options: [
      { key: 'A', text: 'N-Asetilsistein (NAC); bertindak sebagai donor prekursor Glutation untuk menginaktivasi metabolit toksik NAPQI' },
      { key: 'B', text: 'Nalokson; menghambat reseptor opioid' },
      { key: 'C', text: 'Atropin; menghambat asetilkolin' },
      { key: 'D', text: 'Flumazenil; menghambat GABA' },
      { key: 'E', text: 'Fitomenadion; mengaktifkan faktor pembekuan' }
    ],
    correctAnswer: 'A',
    explanation: 'Pada overdosis Parasetamol, jalur konjugasi glukuronid dan sulfat jenuh, sehingga obat dimetabolisme oleh enzim CYP2E1 menjadi metabolit reaktif hepatotoksik N-ACETYL-P-BENZOQUINONE IMINE (NAPQI). Ketika cadangan glutation hepar habis terdeplesi (> 70%), NAPQI berikatan kovalen dengan protein hepatosit memicu nekrosis sentrilobular hepar masif. N-ASETILSISTEIN (NAC) adalah antidotum spesifik yang bekerja memulihkan cadangan GLUTATION hepar dan bertindak sebagai pengganti glutation untuk mengkonjugasi NAPQI menjadi senyawa asam merkapturat non-toksik.',
    clinicalReference: 'Medical Toxicology & Rumack-Matthew Nomogram Guidelines for Acetaminophen Overdose',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1269',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Petani 42 tahun dibawa ke IGD setelah menyemprot pestisida tanpa APD dengan gejala pupil miosis sangat kecil (pinpoint), hipersalivasi (air liur berlebih), bronkospasme dengan ronki basah kasar di seluruh lapang paru, muntah, diare, dan bradikardia (Sindrom Kolinergik Akut Organofosfat).',
    question: 'Dua kombinasi obat antidotum apakah yang wajib diberikan pada keracunan insektisida organofosfat?',
    options: [
      { key: 'A', text: 'Atropin Sulfat (titrasi hingga sekret paru kering) dan Pralidoksim / 2-PAM (reaktivator enzim asetilkolinesterase)' },
      { key: 'B', text: 'Nalokson dan Flumazenil' },
      { key: 'C', text: 'Kalsium Glukonat dan Magnesium Sulfat' },
      { key: 'D', text: 'Natrium Bikarbonat dan Insulin' },
      { key: 'E', text: 'Epinefrin dan Deksametason' }
    ],
    correctAnswer: 'A',
    explanation: 'Insektisida organofosfat menghambat enzim asetilkolinesterase secara ireversibel, memicu penumpukan asetilkolin masif. Tatalaksana: 1) ATROPIN SULFAT (antagonis reseptor muskarinik) diberikan IV berulang tiap 5-10 menit dengan target utama mengatasi hipersekresi bronkus (drying of pulmonary secretions), dan 2) PRALIDOKSIM (2-PAM / Protopam), senyawa oksim yang bekerja memutus ikatan fosfat-enzim untuk MEREAKTIVASI ENZIM ASETILKOLINESTERASE sebelum terjadi penuaan enzim (aging).',
    clinicalReference: 'WHO Guidelines on the Treatment of Organophosphate Poisoning & Goldfrank Toxicologic Emergencies',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1270',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Sekelompok pemuda dilarikan ke IGD setelah mengonsumsi minuman keras oplosan (alkohol ilegal). Pasien mengalami asidosis metabolik berat dengan anion gap tinggi dan mengeluh penglihatan mendadak gelap seperti berada di tengah badai salju (kebutaan akibat toksisitas Metanol).',
    question: 'Antidotum spesifik penghambat enzim Alkohol Dehidrogenase (ADH) apakah yang paling efektif mencegah pembentukan metabolit toksik asam format?',
    options: [
      { key: 'A', text: 'Fomepizol (atau Etanol murni intravena/oral bila Fomepizol tidak tersedia)' },
      { key: 'B', text: 'Metilen Biru' },
      { key: 'C', text: 'Dimercaprol (BAL)' },
      { key: 'D', text: 'Natrium Tiosulfat' },
      { key: 'E', text: 'Piridoksin' }
    ],
    correctAnswer: 'A',
    explanation: 'Metanol sendiri tidak terlalu beracun, namun dimetabolisme oleh enzim Alkohol Dehidrogenase (ADH) menjadi formaldehida, yang kemudian diubah menjadi ASAM FORMAT. Asam format adalah racun mitokondria poten yang merusak saraf optik (kebutaan permanen) dan memicu asidosis metabolik letal. FOMEPIZOL (atau Etanol yang memiliki afinitas 10-20 kali lebih kuat terhadap ADH dibandingkan metanol) bekerja menghambat enzim ADH secara kompetitif sehingga metanol dikeluarkan utuh lewat ginjal tanpa berubah menjadi asam format.',
    clinicalReference: 'The American Academy of Clinical Toxicology Practice Guidelines on Toxic Alcohols',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-1271',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien kanker stadium terminal yang menggunakan infus Morfin mengalami penurunan kesadaran tiba-tiba, bradipnea (laju napas 6x/menit), pupil sangat miosis, dan sianosis (Overdosis Opioid Akut).',
    question: 'Antidotum antagonis kompetitif opioid apakah yang harus segera diinjeksikan?',
    options: [
      { key: 'A', text: 'Nalokson IV 0,4 – 2 mg (dapat diulang tiap 2-3 menit)' },
      { key: 'B', text: 'Naltrekson oral' },
      { key: 'C', text: 'Flumazenil' },
      { key: 'D', text: 'Neostigmin' },
      { key: 'E', text: 'Metadon' }
    ],
    correctAnswer: 'A',
    explanation: 'NALOKSON (Narcan) adalah antagonis murni reseptor opioid (mu, kappa, delta) tanpa aktivitas agonis intrinsik. Injeksi Nalokson IV (0,4-2 mg) akan membalikkan depresi pernapasan dan sedasi yang diinduksi oleh opioid dalam waktu 1-2 menit. Karena waktu paruh Nalokson relatif pendek (30-90 menit) dibandingkan beberapa opioid kerja panjang, pemantauan ketat dan pengulangan dosis sering diperlukan.',
    clinicalReference: 'AHA Guidelines for Cardiopulmonary Resuscitation: Opioid-Associated Emergencies & Dipiro',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1272',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien yang meminum 20 tablet Alprazolam 1 mg ditemukan dalam kondisi tidur sangat dalam (koma sedasi benzodiazepin). Dokter berencana memberikan antidotum spesifik Flumazenil.',
    question: 'Peringatan penting (Black Box Warning) apakah yang harus diwaspadai apoteker sebelum pemberian Flumazenil terutama pada pasien dengan riwayat kejang atau konsumsi benzodiazepin kronik?',
    options: [
      { key: 'A', text: 'Pemberian Flumazenil dapat memicu kejang hebat (withdrawal seizures) yang sulit dihentikan' },
      { key: 'B', text: 'Menyebabkan henti jantung asistol seketika' },
      { key: 'C', text: 'Menyebabkan nekrosis hepar akut' },
      { key: 'D', text: 'Menyebabkan hiperkalemia berat' },
      { key: 'E', text: 'Menyebabkan krisis tirotoksikosis' }
    ],
    correctAnswer: 'A',
    explanation: 'FLUMAZENIL adalah antagonis kompetitif reseptor Benzodiazepin di kompleks reseptor GABA-A. Namun, penggunaannya memiliki risiko berbahaya: pada pasien yang memiliki riwayat epilepsi atau ketergantungan benzodiazepin jangka panjang, pembalikan efek GABA secara mendadak oleh Flumazenil dapat memicu STATUS EPILEPTIKUS / KEJANG WITHDRAWAL yang refrakter terhadap pengobatan benzodiazepin.',
    clinicalReference: 'FDA Black Box Warning for Flumazenil & Goldfrank Toxicologic Emergencies',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1273',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien gagal jantung geriatri yang mengonsumsi Digoksin 0,25 mg dan Furosemid mengalami mual, muntah, penglihatan menguning (xanthopsia), dan rekaman EKG menunjukkan takikardia ventrikel bidireksional dengan kadar Digoksin serum 4,2 ng/mL (toksisitas digoksin berat).',
    question: 'Antidotum antibodi spesifik apakah yang merupakan penyelamat nyawa (life-saving) untuk intoksikasi glikosida jantung tersebut?',
    options: [
      { key: 'A', text: 'Digoxin Immune Fab (DigiFab / Digibind)' },
      { key: 'B', text: 'Atropin tunggal' },
      { key: 'C', text: 'Amiodaron dosis tinggi' },
      { key: 'D', text: 'Kalsium Klorida IV' },
      { key: 'E', text: 'Lidokain oral' }
    ],
    correctAnswer: 'A',
    explanation: 'DIGOXIN IMMUNE FAB (DigiFab) adalah fragmen antibodi monoklonal spesifik pengikat digoksin. Fragmen Fab berikatan kuat dengan molekul digoksin bebas di plasma, menarik digoksin keluar dari reseptor Na+/K+-ATPase miokardium, dan membentuk kompleks Fab-Digoksin non-toksik yang diekskresikan melalui urin. Diindikasikan pada intoksikasi digoksin berat yang disertai aritmia ventrikel fatal atau hiperkalemia.',
    clinicalReference: 'AHA Scientific Statement: Management of Digoxin Toxicity & Dipiro 12th Ed',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1274',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pekerja pabrik pelapisan logam (electroplating) terpapar gas hidrogen sianida dan mengalami pusing mendadak, dispnea, takipnea, asidosis laktat berat, dan darah vena berwarna merah terang (karena jaringan tidak mampu mengekstraksi oksigen akibat blokade sitokrom c oksidase mitokondria).',
    question: 'Antidotum lini pertama modern yang bekerja mengikat sianida membentuk senyawa sianokobalamin non-toksik yang dibuang lewat urin adalah?',
    options: [
      { key: 'A', text: 'Hidroksokobalamin (Cyanokit)' },
      { key: 'B', text: 'Natrium Klorida 3%' },
      { key: 'C', text: 'Atropin' },
      { key: 'D', text: 'N-Asetilsistein' },
      { key: 'E', text: 'Etanol' }
    ],
    correctAnswer: 'A',
    explanation: 'HIDROKSOKOBALAMIN (Cyanokit) adalah antidotum lini pertama pilihan utama untuk keracunan sianida modern. Ion kobalt pada molekul hidroksokobalamin mengikat ligan sianida secara kuat membentuk SIANOKOBALAMIN (Vitamin B12) yang sepenuhnya non-toksik dan diekskresikan aman melalui ginjal, tanpa menimbulkan efek samping pembentukan methemoglobinemia berbahaya seperti pada antidotum lawas (Natrium Nitrit).',
    clinicalReference: 'American College of Medical Toxicology (ACMT) Guidance on Cyanide Poisoning',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-1275',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien hipotiroidisme sedang mengonsumsi Levotiroksin 100 mcg. Pasien juga diresepkan suplemen Kalsium Karbonat 500 mg dan Fero Sulfat 300 mg untuk pengobatan osteopenia dan anemia.',
    question: 'Edukasi cara minum obat apakah yang harus disampaikan apoteker untuk mencegah kegagalan terapi Levotiroksin?',
    options: [
      { key: 'A', text: 'Levotiroksin diminum pagi hari saat perut kosong 30–60 menit sebelum sarapan, dan beri jeda minimal 4 jam dengan Kalsium dan Zat Besi' },
      { key: 'B', text: 'Seluruh obat diminum bersamaan saat sarapan' },
      { key: 'C', text: 'Levotiroksin harus diminum bersama susu sapi' },
      { key: 'D', text: 'Kalsium diminum sebelum tidur bersama Levotiroksin' },
      { key: 'E', text: 'Levotiroksin cukup diminum seminggu sekali' }
    ],
    correctAnswer: 'A',
    explanation: 'Kation polivalen seperti Kalsium (Ca2+) dan Besi (Fe2+/Fe3+) berikatan kuat secara khelasi fisik dengan LEVOTIROKSIN di saluran cerna, menurunkan bioavailabilitas dan penyerapan hormon tiroid hingga > 50% sehingga TSH melonjak kembali. Aturan baku: Levotiroksin diminum pagi saat lambung kosong dengan segelas air putih, dan suplemen Kalsium atau Besi WAJIB DIBERI JEDA MINIMAL 4 JAM.',
    clinicalReference: 'ATA/AACE Clinical Practice Guidelines for Hypothyroidism in Adults & Dipiro 12th Ed',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1276',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Wanita pasca menopause 62 tahun didiagnosis osteoporosis (T-score DEXA -2,8) dan memulai terapi Alendronat 70 mg tablet sekali seminggu.',
    question: 'Instruksi khusus konsumsi obat apakah yang WAJIB disampaikan apoteker untuk mencegah efek samping esofagitis ulseratif parah?',
    options: [
      { key: 'A', text: 'Diminum pagi hari dengan segelas penuh air putih biasa (bukan teh/kopi/susu), dan pasien DILARANG BERBARING (harus tegak/duduk) minimal 30 menit' },
      { key: 'B', text: 'Diminum malam hari tepat sebelum berbaring tidur' },
      { key: 'C', text: 'Tablet dikunyah perlahan sampai larut di lidah' },
      { key: 'D', text: 'Diminum setelah makan siang lengkap' },
      { key: 'E', text: 'Diminum bersama jus jeruk' }
    ],
    correctAnswer: 'A',
    explanation: 'Sediaan bifosfonat oral (Alendronat, Risedronat) sangat mengiritasi mukosa esofagus dan dapat menyebabkan ulserasi esofagus parah (erosive esophagitis) jika tertahan di kerongkongan. Instruksi mutlak: 1) Minum pagi hari saat perut kosong dengan 1 gelas penuh air putih (200 mL), 2) Telan utuh tanpa dikunyah, dan 3) TETAP BERDIRI ATAU DUDUK TEGAK (jangan berbaring) selama MINIMAL 30 MENIT setelah minum obat.',
    clinicalReference: 'AACE/ACE Clinical Practice Guidelines for the Diagnosis and Treatment of Postmenopausal Osteoporosis',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1277',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pria 68 tahun mengeluh kesulitan buang air kecil, pancaran urin lemah, dan nokturia 4x/malam akibat Benign Prostatic Hyperplasia (BPH) dengan pembesaran volume prostat (> 40 mL). Dokter meresepkan terapi kombinasi Tamsulosin dan Finasterid.',
    question: 'Bagaimanakah mekanisme kerja sinergis dari kombinasi kedua obat tersebut?',
    options: [
      { key: 'A', text: 'Tamsulosin merelaksasi otot polos leher kandung kemih dan prostat (efek cepat), sedangkan Finasterid mengecilkan ukuran volume kelenjar prostat dengan menghambat 5-alfa reduktase (efek jangka panjang)' },
      { key: 'B', text: 'Keduanya bekerja sebagai antibiotik saluran kemih' },
      { key: 'C', text: 'Finasterid memicu retensi urin' },
      { key: 'D', text: 'Tamsulosin menurunkan kadar gula darah' },
      { key: 'E', text: 'Keduanya bekerja meningkatkan produksi testosteron' }
    ],
    correctAnswer: 'A',
    explanation: 'Kombinasi terapi BPH: TAMSULOSIN (penghambat reseptor alfa-1A adrenergik selektif) bekerja cepat dalam hitungan hari merelaksasi tonus otot polos prostat dan leher vesika urinaria sehingga aliran urin lancar. FINASTERID (penghambat enzim 5-alfa reduktase) menghambat konversi testosteron menjadi dihidrotestosteron (DHT), yang dalam 6-12 bulan secara bertahap MENYUSUTKAN VOLUME KELENJAR PROSTAT hingga 20-30% dan menurunkan risiko retensi urin akut serta kebutuhan operasi.',
    clinicalReference: 'AUA Guideline: Management of Benign Prostatic Hyperplasia / Lower Urinary Tract Symptoms',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1278',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Wanita hamil 28 tahun usia kehamilan 14 minggu mengeluh keputihan kental seperti susu pecah, gatal hebat, dan panas pada organ kewanitaan. Diagnosis dokter adalah Kandidiasis Vulvovaginalis.',
    question: 'Pilihan antijamur manakah yang paling aman dan direkomendasikan oleh CDC untuk ibu hamil?',
    options: [
      { key: 'A', text: 'Klotrimazol atau Mikonazol ovula/krim intravaginal selama 7 hari' },
      { key: 'B', text: 'Flukonazol 150 mg dosis tunggal per oral' },
      { key: 'C', text: 'Itrakonazol kapsul oral' },
      { key: 'D', text: 'Griseofulvin oral' },
      { key: 'E', text: 'Ketokonazol tablet oral' }
    ],
    correctAnswer: 'A',
    explanation: 'Pedoman CDC Sexually Transmitted Infections Treatment Guidelines: Pada wanita hamil, antijamur oral golongan azol (seperti Flukonazol oral) TIDAK DIREKOMENDASIKAN karena dikaitkan dengan peningkatan risiko keguguran spontan dan malformasi kongenital kraniofasial. Pilihan terapi yang aman dan efektif hanyalah preparat TOPIKAL INTRAVAGINAL golongan azol (seperti KLOTRIMAZOL atau MIKONAZOL ovula/krim vagina) yang digunakan selama 7 HARI PENUH.',
    clinicalReference: 'CDC Sexually Transmitted Infections Treatment Guidelines & ACOG Practice Bulletin',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1279',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien dewasa dicurigai menderita meningitis bakterialis akut di IGD. Sambil menunggu hasil lumbal pungsi, dokter merencanakan terapi empiris Seftriakson 2 g IV tiap 12 jam + Vankomisin IV. Dokter juga menambahkan Deksametason intravena.',
    question: 'Kapan waktu pemberian Deksametason intravena yang tepat untuk mencegah komplikasi ketulian (hearing loss) dan sekuele neurologis?',
    options: [
      { key: 'A', text: '10–20 menit SEBELUM atau BERSAMAAN dengan dosis pertama antibiotik' },
      { key: 'B', text: 'Diberikan 6 jam setelah antibiotik selesai' },
      { key: 'C', text: 'Diberikan pada hari ke-3 rawat inap' },
      { key: 'D', text: 'Hanya diberikan saat pasien akan pulang' },
      { key: 'E', text: 'Tidak boleh diberikan kortikosteroid pada meningitis' }
    ],
    correctAnswer: 'A',
    explanation: 'Pada meningitis bakterialis (khususnya Streptococcus pneumoniae), lisis bakteri akibat antibiotik memicu pelepasan endotoksin dan sitokin inflamasi masif di ruang subaraknoid. DEKSAMETASON (10 mg IV tiap 6 jam selama 4 hari) terbukti signifikan memangkas angka kecacatan neurologis dan ketulian (hearing loss) HANYA JIKA DIBERIKAN 10-20 MENIT SEBELUM ATAU BERSAMAAN DENGAN DOSIS ANTIBIOTIK PERTAMA. Jika diberikan setelah antibiotik bekerja, manfaat antiinflamasinya hilang.',
    clinicalReference: 'IDSA Practice Guidelines for the Management of Bacterial Meningitis',
    difficulty: 'Tinggi'
  },
  {
    id: 'q-1280',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Anak berusia 3 tahun didiagnosis Otitis Media Akut (OMA) bilateral dengan demam 38,8°C dan membran timpani hiperemis menonjol (bulging). Anak tidak memiliki riwayat alergi penisilin.',
    question: 'Berapakah dosis Amoksisilin lini pertama dosis tinggi yang direkomendasikan AAP (American Academy of Pediatrics) untuk mengatasi Streptococcus pneumoniae resisten sedang?',
    options: [
      { key: 'A', text: '80 – 90 mg/kgBB/hari dibagi dalam 2 dosis' },
      { key: 'B', text: '20 – 40 mg/kgBB/hari' },
      { key: 'C', text: '10 mg/kgBB/hari' },
      { key: 'D', text: '150 mg/kgBB/hari' },
      { key: 'E', text: '5 mg/kgBB/hari' }
    ],
    correctAnswer: 'A',
    explanation: 'Pedoman AAP (American Academy of Pediatrics) untuk Otitis Media Akut: AMOKSISILIN DOSIS TINGGI (80-90 mg/kgBB/hari dibagi 2 dosis) adalah lini pertama pilihan utama. Dosis tinggi ini diperlukan untuk mencapai konsentrasi antibiotik yang adekuat di dalam cairan telinga tengah guna mengeradikasi galur Streptococcus pneumoniae yang mengalami perubahan Penicillin-Binding Protein (PBP) dengan resistensi penisilin tingkat menengah.',
    clinicalReference: 'AAP Clinical Practice Guideline: The Diagnosis and Management of Acute Otitis Media',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1281',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Anak usia 7 tahun terbukti positif menderita Faringitis Akut akibat infeksi bakteri Streptococcus beta-hemolyticus Grup A (GABHS / Strep Throat). Pasien diresepkan antibiotik Amoksisilin.',
    question: 'Berapa lamakah durasi minimal terapi antibiotik yang wajib dihabiskan untuk mencegah komplikasi Demam Rematik Akut (Acute Rheumatic Fever)?',
    options: [
      { key: 'A', text: '10 hari penuh' },
      { key: 'B', text: '3 hari' },
      { key: 'C', text: '5 hari' },
      { key: 'D', text: '1 hari saja' },
      { key: 'E', text: '1 bulan' }
    ],
    correctAnswer: 'A',
    explanation: 'Pedoman IDSA dan WHO: Eradikasi total Streptococcus pyogenes (GABHS) dari faring MEMERLUKAN DURASI TERAPI ANTIBIOTIK SELAMA 10 HARI PENUH (kecuali Azitromisin yang memiliki waktu paruh jaringan panjang selama 5 hari). Meskipun gejala klinis radang tenggorokan sudah mereda dalam 3 hari, penghentian prematur sangat berisiko memicu komplikasi autoimun nonsupuratif yang fatal: DEMAM REMATIK AKUT yang merusak katup jantung.',
    clinicalReference: 'Clinical Practice Guideline for the Diagnosis and Management of Group A Streptococcal Pharyngitis IDSA',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1282',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Balita usia 18 bulan mengalami diare cair akut tanpa darah 5x sehari dengan tanda dehidrasi ringan-sedang. Dokter meresepkan oralit dan suplementasi tablet Zink.',
    question: 'Berapakah dosis dan durasi pemberian Zink yang direkomendasikan oleh Kemenkes RI dan WHO?',
    options: [
      { key: 'A', text: '20 mg sekali sehari selama 10 – 14 hari penuh (meskipun diare sudah berhenti)' },
      { key: 'B', text: '10 mg sekali sehari selama 3 hari saja' },
      { key: 'C', text: '50 mg dua kali sehari selama 1 bulan' },
      { key: 'D', text: '2 mg per hari saat diare masih ada' },
      { key: 'E', text: '100 mg dosis tunggal' }
    ],
    correctAnswer: 'A',
    explanation: 'Program LINTAS DIARE (Lima Langkah Tuntaskan Diare) Kemenkes RI & WHO: Dosis Zink untuk anak usia >= 6 bulan adalah 20 MG SEKALI SEHARI SELAMA 10-14 HARI PENUH (untuk bayi < 6 bulan dosisnya 10 mg/hari). Zink mempercepat regenerasi epitel mukosa usus yang rusak, meningkatkan penyerapan air dan elektrolit, serta memberikan perlindungan kekebalan terhadap kekambuhan diare hingga 2-3 bulan ke depan.',
    clinicalReference: 'Buku Saku Petunjuk Teknis Tata Laksana Diare Balita Kemenkes RI & WHO Diarrhoea Management',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1283',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Seorang pasien wanita 65 tahun memiliki berat badan 54 kg dan tinggi badan 155 cm. Hasil laboratorium menunjukkan kadar Serum Kreatinin (Scr) = 1,6 mg/dL.',
    question: 'Berapakah estimasi Klirens Kreatinin (CrCl) pasien tersebut berdasarkan rumus Cockcroft-Gault?',
    options: [
      { key: 'A', text: '29,9 mL/menit (atau ~30 mL/menit)' },
      { key: 'B', text: '45,2 mL/menit' },
      { key: 'C', text: '60,0 mL/menit' },
      { key: 'D', text: '18,5 mL/menit' },
      { key: 'E', text: '75,0 mL/menit' }
    ],
    correctAnswer: 'A',
    explanation: 'Rumus Cockcroft-Gault: CrCl (pria) = ((140 - Umur) x BB) / (72 x Scr). Untuk WANITA, kalikan dengan faktor koreksi 0,85. CrCl = [((140 - 65) x 54) / (72 x 1,6)] x 0,85 = [(75 x 54) / 115,2] x 0,85 = [4.050 / 115,2] x 0,85 = 35,156 x 0,85 = 29,88 mL/menit (~ 29,9 mL/menit). Nilai ini menunjukkan gangguan fungsi ginjal derajat sedang-berat (CKD stage 4) yang memerlukan penyesuaian dosis obat.',
    clinicalReference: 'Cockcroft DW, Gault MH. Prediction of creatinine clearance from serum creatinine & Dipiro',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1284',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien rawat inap menerima infus antibiotik aminoglikosida Gentamisin dosis konvensional ganda (tiap 8 jam). Apoteker melakukan pemantauan kadar obat dalam darah (Therapeutic Drug Monitoring / TDM).',
    question: 'Kapan waktu pengambilan sampel darah yang tepat untuk mengukur kadar palung (Trough Concentration) dan apakah tujuan klinis pemantauan kadar palung tersebut?',
    options: [
      { key: 'A', text: 'Diambil 30 menit tepat sebelum dosis berikutnya diberikan; bertujuan untuk mencegah risiko nefrotoksisitas dan ototoksisitas (target trough < 1-2 mcg/mL)' },
      { key: 'B', text: 'Diambil tepat saat infus berlangsung untuk mengukur efikasi' },
      { key: 'C', text: 'Diambil 2 jam setelah obat diminum' },
      { key: 'D', text: 'Diambil seminggu sekali tanpa melihat jadwal dosis' },
      { key: 'E', text: 'Hanya diambil jika pasien sudah mengalami gagal ginjal' }
    ],
    correctAnswer: 'A',
    explanation: 'Pada TDM Aminoglikosida: Kadar Puncak (Peak Level, diambil 30 menit pasca infus) berkorelasi dengan efikasi bakterisidal (efek konsentrasi dependen). Sedangkan KADAR PALUNG (Trough Level, diambil 30 menit tepat SEBELUM pemberian dosis berikutnya) mencerminkan klirens eliminasi obat. Kadar palung yang tinggi (> 2 mcg/mL pada gentamisin) menunjukkan terjadinya akumulasi obat di korteks ginjal dan endolimfe telinga dalam, yang secara langsung memicu NEFROTOKSISITAS dan OTOTOKSISITAS ireversibel.',
    clinicalReference: 'Basic Clinical Pharmacokinetics (Winter ME) & Applied Pharmacokinetics and Pharmacodynamics',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1285',
    domainId: 'klinis',
    targetExam: 'ukmppai',
    vignette: 'Pasien bakteremia berat Methicillin-Resistant Staphylococcus aureus (MRSA) menerima terapi infus Vankomisin. Sesuai panduan konsensus IDSA/ASHP 2020, target farmakokinetik/farmakodinamik (PK/PD) manakah yang paling akurat untuk memprediksi keberhasilan terapi bakteremia MRSA?',
    question: 'Apakah parameter target PK/PD rekomendasi utama tersebut?',
    options: [
      { key: 'A', text: 'Rasio Area Under the Curve terhadap MIC (AUC24 / MIC) berada pada rentang 400 – 600' },
      { key: 'B', text: 'Trough level harus > 30 mcg/mL' },
      { key: 'C', text: 'Peak level harus > 100 mcg/mL' },
      { key: 'D', text: 'Waktu di atas MIC (%T > MIC) = 100%' },
      { key: 'E', text: 'Klirens total harus = 0' }
    ],
    correctAnswer: 'A',
    explanation: 'Pedoman Konsensus IDSA, ASHP, SIDP 2020 untuk TDM Vankomisin: Parameter PK/PD prediktor klinis baku emas untuk infeksi berat MRSA adalah RASIO AUC24/MIC PADA RENTANG 400 HINGGA 600 (dengan asumsi MIC broth microdilution = 1 mg/L). Pendekatan AUC-guided dosing ini terbukti memberikan efikasi klinis maksimal sekaligus secara bermakna memangkas insiden Acute Kidney Injury (AKI) nefrotoksisitas dibandingkan target trough tradisional 15-20 mcg/mL.',
    clinicalReference: 'Therapeutic Monitoring of Vancomycin for Serious Methicillin-Resistant Staphylococcus aureus Infections: A Revised Consensus Guideline (ASHP/IDSA/PIDS/SIDP 2020)',
    difficulty: 'Tinggi'
  },

  // =========================================================================
  // 💼 MANAJEMEN FARMASI, LOGISTIK & REGULASI (q-1286 s/d q-1297)
  // =========================================================================
  {
    id: 'q-1286',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Dinas Kesehatan Kabupaten merencanakan pengadaan obat vaksin dan klorokuin untuk program penanggulangan KLB malaria di daerah endemis baru yang belum memiliki data riwayat penggunaan obat tahun sebelumnya.',
    question: 'Metode perencanaan kebutuhan obat apakah yang paling tepat digunakan?',
    options: [
      { key: 'A', text: 'Metode Morbiditas (Epidemiologi)' },
      { key: 'B', text: 'Metode Konsumsi murni' },
      { key: 'C', text: 'Metode Kombinasi tanpa data penyakit' },
      { key: 'D', text: 'Metode Just-in-Time' },
      { key: 'E', text: 'Metode perkiraan acak' }
    ],
    correctAnswer: 'A',
    explanation: 'METODE MORBIDITAS (Epidemiologi) adalah metode perencanaan pengadaan obat yang dihitung berdasarkan estimasi jumlah kejadian penyakit (insiden/prevalensi kasus) dikalikan dengan standar pedoman pengobatan (clinical pathway) per kasus. Metode ini adalah pilihan mutlak ketika suatu faskes/program baru berdiri atau terjadi wabah/KLB di mana data konsumsi masa lalu tidak tersedia atau tidak relevan.',
    clinicalReference: 'Pedoman Pengelolaan Obat Publik dan Perbekalan Kesehatan Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1287',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Dalam kajian Cost-Effectiveness Analysis (CEA), Apoteker menghitung efektivitas biaya rata-rata dari Obat X: Biaya total terapi adalah Rp 5.000.000 dengan angka kesembuhan 80% (0,8).',
    question: 'Berapakah nilai Average Cost-Effectiveness Ratio (ACER) dari Obat X?',
    options: [
      { key: 'A', text: 'Rp 6.250.000 per pasien sembuh' },
      { key: 'B', text: 'Rp 4.000.000 per pasien sembuh' },
      { key: 'C', text: 'Rp 5.000.000 per pasien sembuh' },
      { key: 'D', text: 'Rp 8.000.000 per pasien sembuh' },
      { key: 'E', text: 'Rp 625.000 per pasien sembuh' }
    ],
    correctAnswer: 'A',
    explanation: 'Rumus ACER = Total Biaya Terapi / Efektivitas Klinis. ACER = Rp 5.000.000 / 0,8 = Rp 6.250.000 per 1 unit outcome keberhasilan klinis (pasien sembuh).',
    clinicalReference: 'Pedoman Penerapan Kajian Farmakoekonomi Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1288',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Kajian farmakoekonomi yang mengevaluasi terapi kanker payudara menggunakan kuesioner utilitas EuroQol EQ-5D untuk mengukur kualitas hidup pasien, dan menyajikan hasil outcome dalam satuan Quality-Adjusted Life Years (QALY).',
    question: 'Metode analisis farmakoekonomi apakah yang diterapkan pada penelitian tersebut?',
    options: [
      { key: 'A', text: 'Cost-Utility Analysis (CUA)' },
      { key: 'B', text: 'Cost-Minimization Analysis (CMA)' },
      { key: 'C', text: 'Cost-Effectiveness Analysis (CEA)' },
      { key: 'D', text: 'Cost-Benefit Analysis (CBA)' },
      { key: 'E', text: 'Cost of Illness (COI)' }
    ],
    correctAnswer: 'A',
    explanation: 'COST-UTILITY ANALYSIS (CUA) adalah metode evaluasi farmakoekonomi yang mengukur luaran kesehatan (outcome) dalam bentuk utilitas kualitas hidup subjektif pasien, yang paling umum dinyatakan dalam unit QALY (Quality-Adjusted Life Years) atau DALY (Disability-Adjusted Life Years). Sedangkan CBA satuannya moneter (Rupiah/Dolar), CEA satuannya unit klinis natural (mm Hg, mg/dL, % sembuh), dan CMA membandingkan dua terapi dengan efektivitas klinis ekuivalen.',
    clinicalReference: 'Buku Panduan Farmakoekonomi Kemenkes RI & Drummond MF Methods for the Economic Evaluation of Health Care Programmes',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1289',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Apotek memiliki total modal investasi aset sebesar Rp 200.000.000. Laporan keuangan tahunan menunjukkan Laba Bersih Setelah Pajak (Net Profit) yang diperoleh adalah Rp 40.000.000.',
    question: 'Berapakah persentase Return on Investment (ROI) apotek tersebut?',
    options: [
      { key: 'A', text: '20%' },
      { key: 'B', text: '5%' },
      { key: 'C', text: '10%' },
      { key: 'D', text: '40%' },
      { key: 'E', text: '50%' }
    ],
    correctAnswer: 'A',
    explanation: 'Rumus Return on Investment (ROI) = (Laba Bersih Setelah Pajak / Total Investasi Modal) x 100%. ROI = (Rp 40.000.000 / Rp 200.000.000) x 100% = 0,20 x 100% = 20%.',
    clinicalReference: 'Financial Management for Pharmacists & Dasar Akuntansi Apotek',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1290',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Dalam inspeksi Cara Distribusi Obat yang Baik (CDOB) di apotek, ditemukan beberapa boks obat yang telah kedaluwarsa. Apoteker harus segera menata obat-obat tersebut agar tidak berisiko terambil dan terdistribusi ke pasien.',
    question: 'Tindakan karantina apakah yang wajib dilakukan apoteker sesuai standar CDOB dan permenkes?',
    options: [
      { key: 'A', text: 'Memisahkan obat di area karantina khusus terpisah, menguncinya, memberi label merah mencolok "OBAT KEDALUWARSA / RUSAK - DILARANG DIJUAL", dan mencatat di kartu stok' },
      { key: 'B', text: 'Membiarkan tetap di rak obat bebas' },
      { key: 'C', text: 'Menghapus tanggal kedaluwarsa pada kemasan' },
      { key: 'D', text: 'Menjualnya dengan diskon 90%' },
      { key: 'E', text: 'Membuangnya langsung ke saluran air got apotek' }
    ],
    correctAnswer: 'A',
    explanation: 'Sesuai Pedoman CDOB BPOM dan Permenkes Pelayanan Kefarmasian: Produk kedaluwarsa, rusak, atau retur HARUS SEGERA DIPISAHKAN SECARA FISIK dari stok yang dapat dijual, disimpan di area karantina khusus berlabel jelas dan terkunci dengan tulisan tegas "OBAT KEDALUWARSA - DILARANG DIJUAL" untuk mencegah kesalahan dispensing (medication error) sebelum dimusnahkan atau diretur.',
    clinicalReference: 'Peraturan BPOM RI tentang Standar Cara Distribusi Obat yang Baik (CDOB) & Permenkes 73/2016',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1291',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Badan Pengawas Obat dan Makanan (BPOM) menerbitkan surat edaran penarikan sukarela mandiri (Mandatory Product Recall) terhadap batch tertentu sirup parasetamol karena dugaan cemaran Etilen Glikol (EG) melebihi batas aman.',
    question: 'Tindakan pertama apakah yang wajib dilakukan oleh apoteker di apotek saat menerima instruksi recall tersebut?',
    options: [
      { key: 'A', text: 'Segera menghentikan penjualan, menarik seluruh stok batch terkait dari rak pajang, mengarantina di ruang terpisah, dan menghubungi PBF distributor untuk proses retur resmi' },
      { key: 'B', text: 'Menghabiskan stok sisa hari ini lalu baru berhenti menjual' },
      { key: 'C', text: 'Memusnahkan sendiri di halaman apotek tanpa saksi' },
      { key: 'D', text: 'Menyimpan di bawah meja kasir untuk pelanggan khusus' },
      { key: 'E', text: 'Mengabaikan surat edaran bila belum ada pasien yang komplain' }
    ],
    correctAnswer: 'A',
    explanation: 'SOP Penanganan Obat Recall (Penarikan Kembali): Apoteker WAJIB SEGERA MENGHENTIKAN DISPENSING, mengisolasi dan memindahkan seluruh stok produk dengan nomor batch yang tertera dalam surat recall ke area karantina, memblokir kode barcode produk pada sistem kasir/POS, mencatat jumlah stok fisik, dan membuat Berita Acara Retur ke PBF pemasok resmi.',
    clinicalReference: 'Petunjuk Operasional Penerapan CDOB BPOM RI & SOP Apotek IAI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1292',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Apoteker memesan obat batuk sirup yang mengandung Pseudoefedrin HCl dan tablet dekongestan Efedrin HCl ke distributor farmasi.',
    question: 'Berdasarkan regulasi Permenkes No. 3 Tahun 2015 dan PP No. 44 Tahun 2010, masuk ke dalam golongan pengawasan apakah zat aktif tersebut?',
    options: [
      { key: 'A', text: 'Prekursor Farmasi' },
      { key: 'B', text: 'Narkotika Golongan II' },
      { key: 'C', text: 'Psikotropika Golongan IV' },
      { key: 'D', text: 'Obat Bebas Murni' },
      { key: 'E', text: 'Obat Bahan Alam' }
    ],
    correctAnswer: 'A',
    explanation: 'PSEUDOEFEDRIN, EFEDRIN, NOREFEDRIN, ERGOMETRIN, ERGOTAMIN, dan KALIUM PERMANGANAT digolongkan sebagai PREKURSOR FARMASI (zat atau bahan pemula yang dapat digunakan untuk pembuatan narkotika/psikotropika secara ilegal). Pengadaannya wajib menggunakan SURAT PESANAN (SP) KHUSUS PREKURSOR FARMASI dengan sistem pencatatan dan pelaporan tertib.',
    clinicalReference: 'Peraturan Pemerintah RI No. 44 Tahun 2010 tentang Prekursor & Permenkes RI No. 3/2015',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1293',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Badan POM menerbitkan peraturan khusus terkait pengawasan ketat terhadap obat-obat yang sering disalahgunakan untuk menimbulkan efek mabuk/halusinasi, yang dikenal sebagai Obat-Obat Tertentu (OOT).',
    question: 'Manakah di bawah ini yang seluruhnya merupakan zat aktif golongan Obat-Obat Tertentu (OOT)?',
    options: [
      { key: 'A', text: 'Tramadol, Triheksifenidil, Klorpromazin, Amitriptilin, Haloperidol, dan Dekstrometorfan' },
      { key: 'B', text: 'Parasetamol, Amoksisilin, Asam Mefenamat, dan Ibuprofen' },
      { key: 'C', text: 'Morfin, Petidin, dan Fentanil' },
      { key: 'D', text: 'Diazepam, Klobazam, dan Lorazepam' },
      { key: 'E', text: 'Antasida, Ranitidine, dan Sukralfat' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Peraturan BPOM No. 10 Tahun 2019 tentang Pedoman Pengelolaan Obat-Obat Tertentu yang Sering Disalahgunakan: OOT terdiri dari 6 ZAT AKTIF: 1) TRAMADOL, 2) TRIHEKSIFENIDIL, 3) KLORPROMAZIN, 4) AMITRIPTILIN, 5) HALOPERIDOL, dan 6) DEKSTROMETORFAN. Pengadaannya wajib menggunakan Surat Pesanan Khusus OOT dan penyalurannya diawasi ketat.',
    clinicalReference: 'Peraturan Badan Pengawas Obat dan Makanan (BPOM) RI No. 10 Tahun 2019',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1294',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Dalam pengelolaan rantai dingin (cold chain) vaksin di Puskesmas, apoteker memeriksa indikator Vaccine Vial Monitor (VVM) pada botol vaksin Polio (bOPV) dan menemukan bahwa warna segi empat di dalam lingkaran telah berubah menjadi sama gelapnya dengan warna lingkaran luar (Kondisi VVM C).',
    question: 'Bagaimanakah interpretasi status kualitas vaksin tersebut dan tindakan apakah yang wajib diambil?',
    options: [
      { key: 'A', text: 'Vaksin telah terpapar panas berlebih; VAKSIN TIDAK BOLEH DIGUNAKAN LAGI dan harus dibuang/dimusnahkan' },
      { key: 'B', text: 'Vaksin masih boleh digunakan selama tanggal ED belum lewat' },
      { key: 'C', text: 'Vaksin harus segera dihabiskan dalam waktu 1 jam' },
      { key: 'D', text: 'Vaksin dibekukan kembali agar warnanya cerah kembali' },
      { key: 'E', text: 'Vaksin disimpan di suhu ruang' }
    ],
    correctAnswer: 'A',
    explanation: 'Interpretasi Indikator VVM (Vaccine Vial Monitor): - VVM A (segi empat lebih putih dari lingkaran): Gunakan vaksin. - VVM B (segi empat mulai gelap tapi lebih terang dari lingkaran): Gunakan vaksin terlebih dahulu. - VVM C (warna segi empat SAMA DENGAN lingkaran luar): JANGAN GUNAKAN VAKSIN! - VVM D (segi empat LEBIH GELAP dari lingkaran): JANGAN GUNAKAN VAKSIN! Pada status C dan D, vaksin telah mengalami kerusakan termal protein antigenik dan tidak memiliki potensi imunitas.',
    clinicalReference: 'Petunjuk Teknis Pengelolaan Vaksin Kemenkes RI & WHO Guidelines on the International Packaging and Transportation of Vaccines',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1295',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Apoteker di gudang instalasi farmasi menerima kiriman 5 boks sirup sefiksim dengan ED Juli 2026. Di rak penyimpanan saat ini sudah ada stok lama sirup sefiksim yang memiliki tanggal ED Desember 2026.',
    question: 'Berdasarkan prinsip First Expired First Out (FEFO), manakah sirup yang harus diletakkan paling depan untuk dikeluarkan terlebih dahulu?',
    options: [
      { key: 'A', text: 'Sirup sefiksim dengan ED Juli 2026 (meskipun baru datang)' },
      { key: 'B', text: 'Sirup sefiksim ED Desember 2026 (karena sudah lama di rak)' },
      { key: 'C', text: 'Dikeluarkan secara acak tanpa memperhatikan ED' },
      { key: 'D', text: 'Kedua batch dicampur dalam satu wadah' },
      { key: 'E', text: 'Sirup ED Juli 2026 disimpan di gudang belakang' }
    ],
    correctAnswer: 'A',
    explanation: 'Prinsip FEFO (First Expired, First Out) menetapkan bahwa produk yang memiliki TANGGAL KEDALUWARSA LEBIH AWAL / DEKAT (ED Juli 2026) WAJIB dikeluarkan dan diserahkan terlebih dahulu kepada pasien dibandingkan produk dengan ED lebih panjang (ED Desember 2026), tanpa mempedulikan mana barang yang lebih dulu masuk ke gudang (FIFO). Ini adalah strategi kunci mencegah kerugian obat kedaluwarsa.',
    clinicalReference: 'Standar Pelayanan Kefarmasian & Good Pharmacy Practice (GPP) WHO/FIP',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1296',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Dalam upaya keselamatan pasien (Patient Safety) untuk mencegah kesalahan pengambilan obat LASA / NORUM (Look Alike Sound Alike), apoteker menuliskan label etiket obat vinblastin dan vinkristin dengan huruf kapital pada bagian nama yang berbeda.',
    question: 'Apakah nama metode penulisan huruf tersebut?',
    options: [
      { key: 'A', text: 'Tall Man Lettering (contoh: vinBLAStine dan vinCRIStine)' },
      { key: 'B', text: 'Barcode System' },
      { key: 'C', text: 'Underline Lettering' },
      { key: 'D', text: 'Italic Typography' },
      { key: 'E', text: 'Abbreviation Code' }
    ],
    correctAnswer: 'A',
    explanation: 'TALL MAN LETTERING adalah teknik penulisan nama obat yang menggunakan kombinasi huruf besar (kapital) pada suku kata atau bagian huruf yang membedakan pasangan obat-obat yang tampak atau terdengar mirip (LASA/NORUM). Tujuannya adalah menarik perhatian visual petugas farmasi agar tidak salah mengambil obat yang berisiko fatal (contoh: vinBLAStine vs vinCRIStine; hydrALAZINE vs hydrOXYzine).',
    clinicalReference: 'Institute for Safe Medication Practices (ISMP) List of Look-Alike Drug Names with Recommended Tall Man Letters',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1297',
    domainId: 'manajemen',
    targetExam: 'ukmppai',
    vignette: 'Berdasarkan Standar Pelayanan Minimal (SPM) Rumah Sakit yang ditetapkan oleh Kementerian Kesehatan RI, Instalasi Farmasi dipantau indikator mutu waktu tunggu pelayanan resep.',
    question: 'Berapakah standar baku waktu tunggu pelayanan resep obat jadi (non-racikan) dan resep obat racikan?',
    options: [
      { key: 'A', text: 'Obat jadi <= 30 menit, dan obat racikan <= 60 menit' },
      { key: 'B', text: 'Obat jadi <= 10 menit, dan obat racikan <= 15 menit' },
      { key: 'C', text: 'Obat jadi <= 60 menit, dan obat racikan <= 120 menit' },
      { key: 'D', text: 'Obat jadi <= 2 jam, dan obat racikan <= 4 jam' },
      { key: 'E', text: 'Tidak ada batas waktu maksimal' }
    ],
    correctAnswer: 'A',
    explanation: 'Keputusan Menteri Kesehatan RI No. 129/Menkes/SK/II/2008 tentang Standar Pelayanan Minimal Rumah Sakit: Standar mutu waktu tunggu pelayanan farmasi adalah: 1) Resep Obat Jadi (Non-Racikan) <= 30 MENIT, dan 2) Resep Obat Racikan <= 60 MENIT.',
    clinicalReference: 'Standar Pelayanan Minimal Rumah Sakit Kemenkes RI & Permenkes No. 72 Tahun 2016',
    difficulty: 'Mudah'
  },

  // =========================================================================
  // 🏭 TEKNOLOGI FARMASI, CPOB & BAHAN ALAM (q-1298 s/d q-1310)
  // =========================================================================
  {
    id: 'q-1298',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Apoteker bagian formulasi merancang sediaan emulsi minyak ikan dengan nilai HLB butuh (HLB required) = 12. Surfaktan yang tersedia adalah Tween 80 (HLB = 15) dan Span 80 (HLB = 4,3). Total surfaktan yang dibutuhkan adalah 10 gram.',
    question: 'Berapakah bobot Tween 80 dan Span 80 yang harus ditimbang masing-masing?',
    options: [
      { key: 'A', text: 'Tween 80 = 7,20 gram dan Span 80 = 2,80 gram' },
      { key: 'B', text: 'Tween 80 = 5,00 gram dan Span 80 = 5,00 gram' },
      { key: 'C', text: 'Tween 80 = 2,80 gram dan Span 80 = 7,20 gram' },
      { key: 'D', text: 'Tween 80 = 8,50 gram dan Span 80 = 1,50 gram' },
      { key: 'E', text: 'Tween 80 = 6,00 gram dan Span 80 = 4,00 gram' },
    ],
    correctAnswer: 'A',
    explanation: 'Metode Aligasi HLB: Selisih Tween 80 (15 - 12) = 3 bagian Span 80. Selisih Span 80 (12 - 4,3) = 7,7 bagian Tween 80. Total bagian = 7,7 + 3 = 10,7 bagian. Bobot Tween 80 = (7,7 / 10,7) x 10 gram = 7,196 g (~ 7,20 gram). Bobot Span 80 = (3 / 10,7) x 10 gram = 2,804 g (~ 2,80 gram).',
    clinicalReference: 'Martin Farmasi Fisika dan Ilmu Farmasetika & Voigt Buku Pelajaran Teknologi Farmasi',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1299',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Dalam uji stabilitas fisik sediaan emulsi tipe M/A (Minyak dalam Air), apoteker mengamati terjadinya pemisahan tetesan fase minyak membentuk lapisan di permukaan atas, namun lapisan tersebut dapat terdispersi homogen kembali dengan pengocokan ringan.',
    question: 'Apakah istilah fenomena ketidakstabilan fisik emulsi yang bersifat reversibel tersebut?',
    options: [
      { key: 'A', text: 'Creaming (Kriming)' },
      { key: 'B', text: 'Cracking (Breaking)' },
      { key: 'C', text: 'Inversi Fase' },
      { key: 'D', text: 'Flokulasi irreversibel' },
      { key: 'E', text: 'Koalesensi' }
    ],
    correctAnswer: 'A',
    explanation: 'CREAMING adalah pemisahan fase terdispersi membentuk lapisan dengan konsentrasi tetesan lebih tinggi di bagian atas (bila densitas fase dalam lebih rendah dari fase luar) atau di bagian bawah (sedimentasi). Ciri khas Creaming adalah BERSIFAT REVERSIBEL (dapat terdispersi homogen kembali dengan pengocokan ringan) karena film antarmuka surfaktan di sekeliling tetesan masih utuh. Sebaliknya, CRACKING/BREAKING adalah pemisahan fase ireversibel karena lapisan emulgator telah pecah.',
    clinicalReference: 'Aulton Pharmaceutics: The Design and Manufacture of Medicines & Martin Farmasi Fisika',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1300',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Apoteker memformulasi 100 mL larutan tetes mata yang mengandung 1% Atropin Sulfat (nilai ekivalensi NaCl / E-value = 0,13). Larutan tetes mata harus dibuat isotonis setara NaCl 0,9%.',
    question: 'Berapakah gram NaCl yang harus ditambahkan ke dalam 100 mL larutan tersebut agar menjadi isotonis?',
    options: [
      { key: 'A', text: '0,77 gram' },
      { key: 'B', text: '0,90 gram' },
      { key: 'C', text: '0,13 gram' },
      { key: 'D', text: '0,50 gram' },
      { key: 'E', text: '1,03 gram' }
    ],
    correctAnswer: 'A',
    explanation: 'Perhitungan Isotonisitas Metode Nilai E: - NaCl butuh untuk isotonis 100 mL = 0,9% x 100 mL = 0,9 gram. - Bobot Atropin Sulfat = 1% x 100 mL = 1,0 gram. - Tonisitas yang sudah disumbangkan Atropin = 1,0 g x E-value = 1,0 x 0,13 = 0,13 g kesetaraan NaCl. - Kekurangan NaCl yang wajib ditambahkan = 0,90 g - 0,13 g = 0,77 gram NaCl.',
    clinicalReference: 'Farmakope Indonesia Edisi VI & Martin Farmasi Fisik',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1301',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Dalam rangka re-validasi proses aseptis (aseptic process validation) di industri farmasi sediaan steril, apoteker mengganti larutan obat injeksi dengan media pertumbuhan mikroba steril Tryptic Soy Broth (TSB) cair, lalu melakukan simulasi pengisian dan penutupan 10.000 vial di ruang bersih Kelas A.',
    question: 'Apakah nama proses validasi simulasi proses pengisian sediaan steril tersebut?',
    options: [
      { key: 'A', text: 'Media Fill Test (Uji Simulasi Pengisian Media)' },
      { key: 'B', text: 'Uji Disolusi Terbanding' },
      { key: 'C', text: 'Smoke Test Aliran Udara' },
      { key: 'D', text: 'Challenge Test Filter HEPA' },
      { key: 'E', text: 'Uji Integritas Sarung Tangan' }
    ],
    correctAnswer: 'A',
    explanation: 'MEDIA FILL TEST (Aseptic Process Simulation) adalah uji validasi proses di mana media perbenihan mikrobiologi steril (seperti Soybean-Casein Digest Medium / TSB) diproses dan diisikan ke dalam wadah primer menggunakan peralatan, personel, dan lingkungan ruang bersih aseptis Kelas A/B yang sama persis dengan proses produksi rutin. Tujuannya adalah membuktikan kemampuan sistem proses aseptis dalam mencegah kontaminasi mikroba (kriteria penerimaan: 0 kontaminasi dari 10.000 unit).',
    clinicalReference: 'Pedoman CPOB Aneks 1 Pembuatan Produk Steril BPOM RI 2024 & WHO TRS 961',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1302',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Di pabrik farmasi yang memproduksi serbuk tablet antibiotik sefalosporin, sistem tata udara (HVAC) dirancang dengan perbedaan tekanan udara (differential pressure) antara ruang pengolahan dan koridor.',
    question: 'Bagaimanakah prinsip tekanan udara ruang produksi serbuk berdebu terhadap koridor luar untuk mencegah kontaminasi silang (cross contamination)?',
    options: [
      { key: 'A', text: 'Ruang produksi berdebu bertekanan LEBIH RENDAH (Negatif) dibandingkan koridor luar' },
      { key: 'B', text: 'Ruang produksi berdebu bertekanan LEBIH TINGGI (Positif)' },
      { key: 'C', text: 'Tekanan udara harus sama persis 0 Pascal' },
      { key: 'D', text: 'Ruang produksi tidak boleh menggunakan sistem tata udara' },
      { key: 'E', text: 'Pintu ruang produksi harus selalu terbuka' }
    ],
    correctAnswer: 'A',
    explanation: 'Sesuai Pedoman CPOB Sistem Tata Udara (HVAC): Pada ruang produksi sediaan serbuk/tablet yang menghasilkan debu zat aktif, ruangan tersebut harus memiliki TEKANAN UDARA RELATIF NEGATIF (lebih rendah) dibandingkan koridor luar atau ruang penyangga (airlock). Hal ini memastikan bahwa udara mengalir DARI KORIDOR BERSIH MASUK KE RUANG PENGOLAHAN, sehingga debu obat tidak beterbangan mencemari koridor dan produk lain (mencegah kontaminasi silang).',
    clinicalReference: 'Petunjuk Operasional Penerapan CPOB Jilid I: Sistem Tata Udara (HVAC) BPOM RI',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1303',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Dalam pengujian pirogen dan endotoksin bakteri pada sediaan infus injeksi dekstrosa intravena, apoteker QC menggunakan pereaksi lisat amebosit dari kepiting ladam (Limulus polyphemus) yang membentuk gel beku (clot) saat berinteraksi dengan endotoksin lipopolisakarida (LPS) bakteri gram negatif.',
    question: 'Apakah nama metode pengujian spesifik tersebut menurut Farmakope Indonesia?',
    options: [
      { key: 'A', text: 'Bacterial Endotoxins Test (BET) / LAL Test (Limulus Amebocyte Lysate)' },
      { key: 'B', text: 'Uji Pirogen Kelinci (Rabbit Pyrogen Test)' },
      { key: 'C', text: 'Uji Sterilitas Membran Filtrasi' },
      { key: 'D', text: 'Uji Potensi Antibiotik' },
      { key: 'E', text: 'Uji Partikulat Sub-Visibel' }
    ],
    correctAnswer: 'A',
    explanation: 'LAL TEST (Limulus Amebocyte Lysate) atau Uji Endotoksin Bakteri (Bacterial Endotoxins Test / BET) adalah metode in vitro baku pada Farmakope Indonesia VI dan USP untuk mendeteksi atau mengukur kuantitatif endotoksin bakteri gram negatif. Enzim pro-clotting pada ekstrak amebosit kepiting Limulus polyphemus bereaksi spesifik dengan lipopolisakarida (LPS) endotoksin membentuk koagulasi gel padat yang stabil saat dibalik 180 derajat.',
    clinicalReference: 'Farmakope Indonesia Edisi VI Lampiran Uji Endotoksin Bakteri',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1304',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Dalam pengeringan bahan aktif protein bioteknologi (vaksin dan eritropoietin) yang sangat tidak tahan panas, apoteker memilih metode pengeringan sublimasi beku di bawah tekanan vakum tinggi.',
    question: 'Apakah nama proses pengeringan tersebut?',
    options: [
      { key: 'A', text: 'Liofilisasi (Freeze Drying)' },
      { key: 'B', text: 'Spray Drying' },
      { key: 'C', text: 'Fluid Bed Drying' },
      { key: 'D', text: 'Oven Konveksi Panas Kering' },
      { key: 'E', text: 'Evaporasi Vakum Rotari' }
    ],
    correctAnswer: 'A',
    explanation: 'LIOFILISASI (Freeze Drying / Pengeringan Sublimasi Beku) adalah metode pengeringan di mana pelarut air dibekukan menjadi es di bawah titik triple point (-40°C hingga -50°C), kemudian tekanan ruang diturunkan hingga vakum tinggi (< 0,1 mbar), sehingga es langsung MENYUBLIM MENJADI UAP AIR tanpa melewati fase cair. Ini adalah metode pengeringan paling aman untuk bahan biologis, enzim, hormon, dan protein termolabil.',
    clinicalReference: 'Aulton Pharmaceutics & Lachman Teori dan Praktik Farmasi Industri',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1305',
    domainId: 'bahan_alam',
    targetExam: 'ukmppai',
    vignette: 'Apoteker di laboratorium kontrol mutu simplisia menguji kadar air pada rimpang Jahe (Zingiber officinale) dan buah Adas (Foeniculum vulgare) yang kaya akan kandungan minyak atsiri volatil.',
    question: 'Metode pengujian kadar air manakah yang wajib digunakan menurut Farmakope Herbal Indonesia agar minyak atsiri tidak ikut terhitung sebagai air?',
    options: [
      { key: 'A', text: 'Metode Destilasi Toluen (Azeotropik)' },
      { key: 'B', text: 'Metode Susut Pengeringan (Gravimetri Oven 105°C)' },
      { key: 'C', text: 'Metode Pembakaran Tanur 600°C' },
      { key: 'D', text: 'Metode Kromatografi Kolom' },
      { key: 'E', text: 'Metode Spektrofotometri UV' }
    ],
    correctAnswer: 'A',
    explanation: 'Berdasarkan Farmakope Herbal Indonesia (FHI): Untuk bahan baku simplisia yang mengandung MINYAK ATSIRI (senyawa atsiri/volatil), penetapan kadar air TIDAK BOLEH menggunakan metode susut pengeringan (Loss on Drying / oven 105°C) karena minyak atsiri akan ikut menguap dan menghasilkan galat positif tinggi. Metode yang wajib digunakan adalah METODE DESTILASI TOLUEN (destilasi azeotropik), di mana air dipisahkan secara volumetrik spesifik dari uap toluen.',
    clinicalReference: 'Farmakope Herbal Indonesia Edisi II Lampiran Penetapan Kadar Air Destilasi Toluen',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1306',
    domainId: 'bahan_alam',
    targetExam: 'ukmppai',
    vignette: 'Herba Pegagan (Centella asiatica (L.) Urban) banyak diformulasikan ke dalam sediaan fitofarmaka salep penyembuh luka dan keloid karena merangsang sintesis kolagen.',
    question: 'Senyawa penanda aktif (marker) utama golongan triterpenoid saponin apakah yang terdapat pada herba Pegagan?',
    options: [
      { key: 'A', text: 'Asiatikosida (Asiaticoside)' },
      { key: 'B', text: 'Kurkuminoid' },
      { key: 'C', text: 'Andrografolid' },
      { key: 'D', text: 'Sennosida' },
      { key: 'E', text: 'Kuersetin' }
    ],
    correctAnswer: 'A',
    explanation: 'ASIATIKOSIDA (Asiaticoside) dan Asam Asiatat adalah senyawa marker aktif golongan triterpenoid saponin glikosida dari herba Pegagan (Centella asiatica). Senyawa ini terbukti secara klinis memicu proliferasi fibroblas dan biosintesis kolagen tipe 1, mempercepat epitelisasi luka bakar, dan mencegah pembentukan jaringan parut keloid.',
    clinicalReference: 'Farmakope Herbal Indonesia Edisi II & WHO Monographs on Selected Medicinal Plants Vol 1',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1307',
    domainId: 'bahan_alam',
    targetExam: 'ukmppai',
    vignette: 'Herba Meniran (Phyllanthus niruri L.) telah disetujui sebagai produk Fitofarmaka imunomodulator (seperti Stimuno) yang meningkatkan respon kekebalan tubuh seluler dan humoral.',
    question: 'Senyawa marker aktif golongan lignan apakah yang menjadi parameter standardisasi ekstrak meniran?',
    options: [
      { key: 'A', text: 'Filantin dan Hipofilantin' },
      { key: 'B', text: 'Xantorizol' },
      { key: 'C', text: 'Mangiferin' },
      { key: 'D', text: 'Strikosida' },
      { key: 'E', text: 'Piperin' }
    ],
    correctAnswer: 'A',
    explanation: 'FILANTIN dan HIPOFILANTIN adalah senyawa penanda aktif spesifik golongan lignan yang diisolasi dari herba Meniran (Phyllanthus niruri). Dalam Farmakope Herbal Indonesia, penetapan kadar senyawa marker ekstrak meniran diukur berdasarkan kadar total Filantin menggunakan metode KCKT (HPLC) fase terbalik.',
    clinicalReference: 'Farmakope Herbal Indonesia Edisi II & Formularium Fitofarmaka Kemenkes RI',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1308',
    domainId: 'bahan_alam',
    targetExam: 'ukmppai',
    vignette: 'Balai POM melakukan uji laboratorium pengawasan peredaran jamu tradisional anti-asma sesak napas yang dicurigai mengandung Bahan Kimia Obat (BKO) secara ilegal.',
    question: 'Zat aktif sintetis bronkodilator dan kortikosteroid apakah yang paling sering diidentifikasi secara ilegal dicampurkan ke dalam jamu asma palsu?',
    options: [
      { key: 'A', text: 'Teofilin, Salbutamol, dan Deksametason' },
      { key: 'B', text: 'Parasetamol dan Antasida' },
      { key: 'C', text: 'Amoksisilin dan Kloramfenikol' },
      { key: 'D', text: 'Simvastatin dan Kaptopril' },
      { key: 'E', text: 'Glibenklamid dan Metformin' }
    ],
    correctAnswer: 'A',
    explanation: 'Pada jamu sesak napas/asma ilegal, zat BKO yang paling sering dicampurkan secara berbahaya adalah TEOFILIN, SALBUTAMOL, dan DEKSAMETASON/PREDNISON. Penggunaan teofilin tanpa pemantauan rentang terapeutik sempitnya sangat mudah memicu intoksikasi aritmia fatal dan takikardia pada konsumen yang tidak menyadari.',
    clinicalReference: 'Public Warning Badan Pengawas Obat dan Makanan (BPOM) RI tentang Jamu BKO',
    difficulty: 'Mudah'
  },
  {
    id: 'q-1309',
    domainId: 'bahan_alam',
    targetExam: 'ukmppai',
    vignette: 'Apoteker QC menguji parameter susut pengeringan (Loss on Drying / LOD) simplisia daun Kumis Kucing (Orthosiphon stamineus) dengan mengeringkan 1 gram serbuk simplisia dalam botol timbang di dalam oven suhu 105°C hingga diperoleh bobot konstan.',
    question: 'Apakah definisi dari parameter susut pengeringan tersebut?',
    options: [
      { key: 'A', text: 'Pengukuran seluruh senyawa dan zat yang mudah menguap (volatil) pada suhu pemanasan 105°C, termasuk air dan sisa pelarut organik' },
      { key: 'B', text: 'Hanya mengukur kadar molekul air murni tanpa zat lain' },
      { key: 'C', text: 'Mengukur kadar abu mineral anorganik' },
      { key: 'D', text: 'Mengukur kadar flavonoid total' },
      { key: 'E', text: 'Mengukur tingkat cemaran logam berat timbal' }
    ],
    correctAnswer: 'A',
    explanation: 'SUSUT PENGERINGAN (Loss on Drying) adalah pengukuran persentase penurunan bobot zat setelah dipanaskan pada suhu 105°C hingga bobot konstan. Parameter ini mengukur SELURUH ZAT VOLATIL yang dapat menguap pada kondisi pengujian tersebut, yang mencakup molekul air bebas, air terikat, serta pelarut volatil organik lainnya (berbeda dengan penetrasi air spesifik seperti Karl Fischer).',
    clinicalReference: 'Farmakope Herbal Indonesia Edisi II Lampiran Penetapan Susut Pengeringan',
    difficulty: 'Sedang'
  },
  {
    id: 'q-1310',
    domainId: 'teknologi',
    targetExam: 'ukmppai',
    vignette: 'Berdasarkan Pedoman CPOB 2018/2024 tentang Pembuatan Produk Steril, klasifikasi ruang bersih dibagi menjadi Kelas A, B, C, dan D.',
    question: 'Apakah fungsi peruntukan ruang bersih Kelas B pada proses pembuatan sediaan steril secara aseptis?',
    options: [
      { key: 'A', text: 'Sebagai lingkungan latar belakang (background environment) untuk area kerja Kelas A pada proses pembuatan dan pengisian aseptis' },
      { key: 'B', text: 'Sebagai area gudang penyimpanan karton sekunder' },
      { key: 'C', text: 'Sebagai area kantin karyawan' },
      { key: 'D', text: 'Sebagai ruang pencucian botol kotor awal' },
      { key: 'E', text: 'Sebagai laboratorium uji mikrobiologi limbah' }
    ],
    correctAnswer: 'A',
    explanation: 'Sesuai Pedoman CPOB Aneks 1 (Pembuatan Produk Steril): RUANG KELAS B adalah zona lingkungan bersih yang dirancang khusus sebagai RUANG LATAR BELAKANG (background) di mana LAF Kelas A diletakkan untuk proses pembuatan dan pengisian aseptis (aseptic preparation and filling). Udara di Kelas B harus memiliki jumlah partikel dan mikroba yang sangat rendah untuk melindungi integritas zona kritis Kelas A.',
    clinicalReference: 'Pedoman CPOB BPOM RI Aneks 1 & PIC/S Guide to Good Manufacturing Practice for Medicinal Products',
    difficulty: 'Sedang'
  }
];
