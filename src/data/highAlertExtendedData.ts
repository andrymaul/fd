// =====================================================================
// DATASET EKSTENSI: MANAJEMEN RISIKO TINGGI LASA, HIGH-ALERT & REGULASI
// Standar Resmi: STARKES SKP 3 Kemenkes RI, KARS, ISMP, BPOM RI & Permenkes 5/2023
// TOTAL DATA BARU:
// - 40 Pasangan Tall-Man Letters Baru
// - 25 Profil Obat High-Alert Baru
// - 15 Regulasi OOT, Prekursor & SIPNAP Baru
// =====================================================================

import { LasaPair, HighAlertDrug, OotPrecursorDrug } from './highAlertLasaData';

export const EXTENDED_LASA_PAIRS: LasaPair[] = [
  {
    "id": "lasa-bupivakain-lidokain",
    "drugA": {
      "name": "Bupivakain",
      "tallManName": "buPIVAKAIN HCl",
      "indication": "Anestesi spinal / epidural durasi panjang",
      "dosageForm": "Ampul 0.5% (Heavy / Spinal)"
    },
    "drugB": {
      "name": "Lidokain",
      "tallManName": "liDOKAIN HCl",
      "indication": "Anestesi lokal infiltrasi, antiaritmia ventrikel",
      "dosageForm": "Ampul / Vial 2%"
    },
    "similarityType": "look_alike",
    "clinicalRisk": "Bupivakain memiliki kardiotoksisitas jauh lebih tinggi daripada lidokain. Injeksi intravaskular bupivakain secara tidak sengaja memicu kolaps kardiovaskular dan henti jantung refrakter.",
    "preventionMeasures": [
      "Gunakan penulisan Tall-Man: buPIVAKAIN vs liDOKAIN.",
      "Simpan bupivakain terpisah di troli anestesi kamar operasi.",
      "Siapkan emulsi lipid 20% (Lipid Rescue) di kamar operasi sebagai antidot kardiotoksisitas bupivakain."
    ],
    "recommendedLabel": "LASA Merah"
  },
  {
    "id": "lasa-cisplatin-carboplatin",
    "drugA": {
      "name": "Cisplatin",
      "tallManName": "CISplatin",
      "indication": "Kanker testis, ovarium, paru, kandung kemih",
      "dosageForm": "Vial Injeksi 10 mg / 50 mg"
    },
    "drugB": {
      "name": "Carboplatin",
      "tallManName": "CARBOplatin",
      "indication": "Kanker ovarium lanjut, paru sel kecil",
      "dosageForm": "Vial Injeksi 150 mg / 450 mg"
    },
    "similarityType": "both",
    "clinicalRisk": "Dosis carboplatin dihitung berdasarkan AUC (ratusan miligram), sedangkan dosis cisplatin jauh lebih kecil (50-100 mg/m2). Tertukarnya dosis carboplatin ke cisplatin menyebabkan gagal ginjal akut fatal, tuli permanen, dan kematian.",
    "preventionMeasures": [
      "Wajib Tall-Man: CISplatin vs CARBOplatin.",
      "Verifikasi protokol kemoterapi dan rumus perhitungan dosis secara ganda independen.",
      "Simpan di rak sitostatika terpisah dengan tanda peringatan dosis khusus."
    ],
    "recommendedLabel": "LASA Merah"
  },
  {
    "id": "lasa-doksorubisin-daunorubisin",
    "drugA": {
      "name": "Doksorubisin",
      "tallManName": "DOKSOrubisin HCl",
      "indication": "Kanker payudara, limfoma, leukemia limfoblastik",
      "dosageForm": "Vial Injeksi 10 mg / 50 mg (Merah)"
    },
    "drugB": {
      "name": "Daunorubisin",
      "tallManName": "DAUNOrubisin HCl",
      "indication": "Leukemia mieloid akut (AML), ALL",
      "dosageForm": "Vial Injeksi 20 mg (Merah)"
    },
    "similarityType": "both",
    "clinicalRisk": "Keduanya larutan merah antrasiklin dengan potensi kardiotoksisitas kumulatif irreversibel dan dosis seumur hidup yang berbeda.",
    "preventionMeasures": [
      "Wajib Tall-Man: DOKSOrubisin vs DAUNOrubisin.",
      "Catat dosis kumulatif seumur hidup pada lembar rekam medis onkologi.",
      "Waspadai ekstravasasi vesikan berat yang merusak nekrosis kulit."
    ],
    "recommendedLabel": "LASA Merah"
  },
  {
    "id": "lasa-epinefrin-norepinefrin",
    "drugA": {
      "name": "Epinefrin",
      "tallManName": "EPINEFrin (Adrenalin)",
      "indication": "Syok anafilaksis, henti jantung (ACLS)",
      "dosageForm": "Ampul 1 mg/mL (1:1.000)"
    },
    "drugB": {
      "name": "Norepinefrin",
      "tallManName": "norEPINEFrin",
      "indication": "Syok septik, syok kardiogenik dengan hipotensi refrakter",
      "dosageForm": "Ampul 1 mg/mL atau 4 mg/4 mL"
    },
    "similarityType": "both",
    "clinicalRisk": "Norepinefrin didominasi vasokonstriksi alfa-1 kuat tanpa efek beta-2 bronkodilatasi; memberikan norepinefrin pada anafilaksis gagal mengatasi spasme bronkus dan dapat memicu stroke hipertensif.",
    "preventionMeasures": [
      "Gunakan Tall-Man mencolok: EPINEFrin vs norEPINEFrin.",
      "Simpan epinefrin di kotak emergensi anafilaksis; simpan norepinefrin di ICU/CVC area.",
      "Verifikasi rute pemberian (IM untuk anafilaksis vs infus kontinu CVC)."
    ],
    "recommendedLabel": "LASA Merah"
  },
  {
    "id": "lasa-klopidogrel-klonidin",
    "drugA": {
      "name": "Klopidogrel",
      "tallManName": "kloPIDOgrel",
      "indication": "Antiplatelet pencegahan infark miokard & stroke",
      "dosageForm": "Tablet 75 mg"
    },
    "drugB": {
      "name": "Klonidin",
      "tallManName": "kloNIDIN HCl",
      "indication": "Antihipertensi sentral krisis hipertensi",
      "dosageForm": "Tablet 0.15 mg / Injeksi 0.15 mg"
    },
    "similarityType": "sound_alike",
    "clinicalRisk": "Pemberian klonidin pada pasien yang membutuhkan antiplatelet memicu hipotensi berat, bradikardia ekstrim, dan risiko trombosis stent jantung.",
    "preventionMeasures": [
      "Gunakan Tall-Man: kloPIDOgrel vs kloNIDIN.",
      "Perhatikan perbedaan kekuatan dosis (75 mg vs 0.15 mg).",
      "Pisahkan letak rak obat antitirombosis dan antihipertensi."
    ],
    "recommendedLabel": "LASA Kuning"
  },
  {
    "id": "lasa-loratadin-losartan",
    "drugA": {
      "name": "Loratadin",
      "tallManName": "loraTADIN",
      "indication": "Antihistamin H1 rinitis alergi dan urtikaria",
      "dosageForm": "Tablet 10 mg"
    },
    "drugB": {
      "name": "Losartan",
      "tallManName": "losarTAN Kalium",
      "indication": "Antihipertensi ARB dan nefropati diabetik",
      "dosageForm": "Tablet 50 mg"
    },
    "similarityType": "both",
    "clinicalRisk": "Pasien hipertensi tidak mendapatkan terapi tensi, atau pasien alergi mengalami hipotensi mendadak dan hiperkalemia.",
    "preventionMeasures": [
      "Tuliskan Tall-Man: loraTADIN vs losarTAN.",
      "Skrining indikasi diagnosis pada lembar resep sebelum dispensing."
    ],
    "recommendedLabel": "LASA Kuning"
  },
  {
    "id": "lasa-metronidazol-mesna",
    "drugA": {
      "name": "Metronidazol",
      "tallManName": "metroNIDAZOL",
      "indication": "Antibiotik anaerob dan antiamuba",
      "dosageForm": "Botol Infus 500 mg/100 mL"
    },
    "drugB": {
      "name": "Mesna",
      "tallManName": "mesNA",
      "indication": "Uroprotektan pencegahan sistitis hemoragik akibat ifosfamid/siklofosfamid",
      "dosageForm": "Ampul Injeksi 400 mg"
    },
    "similarityType": "sound_alike",
    "clinicalRisk": "Kegagalan pemberian Mesna pada pasien kemoterapi ifosfamid menyebabkan perdarahan kandung kemih berat (sistitis hemoragik fatal).",
    "preventionMeasures": [
      "Tuliskan Tall-Man: metroNIDAZOL vs mesNA.",
      "Mesna wajib masuk dalam paket protokol kemoterapi tersendiri."
    ],
    "recommendedLabel": "LASA Kuning"
  },
  {
    "id": "lasa-ranitidin-ramipril",
    "drugA": {
      "name": "Ranitidin",
      "tallManName": "raniTIDIN HCl",
      "indication": "Tukak lambung, GERD, hiperasiditas lambung",
      "dosageForm": "Tablet 150 mg / Ampul 50 mg"
    },
    "drugB": {
      "name": "Ramipril",
      "tallManName": "ramiPRIL",
      "indication": "Hipertensi, gagal jantung kongestif pasca infark",
      "dosageForm": "Tablet 2.5 mg, 5 mg, 10 mg"
    },
    "similarityType": "sound_alike",
    "clinicalRisk": "Risiko hipotensi mendadak, batuk kering persisten, atau hiperkalemia bila ramipril salah diberikan pada pasien dispepsia.",
    "preventionMeasures": [
      "Wajib Tall-Man: raniTIDIN vs ramiPRIL.",
      "Pisahkan rak gastrointestinal dari rak kardiovaskular."
    ],
    "recommendedLabel": "LASA Kuning"
  },
  {
    "id": "lasa-olanzapin-clozapin",
    "drugA": {
      "name": "Olanzapin",
      "tallManName": "OLANzapin",
      "indication": "Skizofrenia, gangguan bipolar manik",
      "dosageForm": "Tablet 5 mg, 10 mg"
    },
    "drugB": {
      "name": "Clozapin",
      "tallManName": "KLOzapin",
      "indication": "Skizofrenia refrakter pengobatan standar",
      "dosageForm": "Tablet 25 mg, 100 mg"
    },
    "similarityType": "both",
    "clinicalRisk": "Clozapine memiliki risiko agranulositosis fatal yang memerlukan pemantauan leukosit darah rutin (ANC). Tertukarnya obat memicu efek samping hematologi atau relaps psikotik.",
    "preventionMeasures": [
      "Gunakan Tall-Man tegas: OLANzapin vs KLOzapin.",
      "Clozapine memerlukan kartu monitoring leukosit sebelum penyerahan resep."
    ],
    "recommendedLabel": "LASA Kuning"
  },
  {
    "id": "lasa-fluoksetin-fluvoksamin",
    "drugA": {
      "name": "Fluoksetin",
      "tallManName": "FLUoksetin",
      "indication": "Depresi mayor, gangguan obsesif kompulsif (OCD), bulimia",
      "dosageForm": "Kapsul 10 mg, 20 mg"
    },
    "drugB": {
      "name": "Fluvoksamin",
      "tallManName": "FLUvoksamin",
      "indication": "Gangguan obsesif kompulsif, ansietas sosial",
      "dosageForm": "Tablet 50 mg, 100 mg"
    },
    "similarityType": "both",
    "clinicalRisk": "Perbedaan profil inhibisi enzim sitokrom P450 yang drastis (Fluvoxamine adalah inhibitor kuat CYP1A2) memicu interaksi mematikan dengan teofilin atau warfarin.",
    "preventionMeasures": [
      "Gunakan Tall-Man: FLUoksetin vs FLUvoksamin.",
      "Periksa kembali kekuatan sediaan (20 mg vs 50 mg)."
    ],
    "recommendedLabel": "LASA Kuning"
  },
  {
    "id": "lasa-sertralin-seratiopeptidase",
    "drugA": {
      "name": "Sertralin",
      "tallManName": "SERTRAlin",
      "indication": "Antidepresan SSRI, gangguan panik, PTSD",
      "dosageForm": "Tablet 50 mg"
    },
    "drugB": {
      "name": "Seratiopeptidase",
      "tallManName": "SERAtiopeptidase",
      "indication": "Enzim proteolitik anti-inflamasi edema",
      "dosageForm": "Tablet 5 mg"
    },
    "similarityType": "sound_alike",
    "clinicalRisk": "Pasien depresi tidak mendapat terapi mental atau sebaliknya pasien luka bedah menerima antidepresan psikotropika.",
    "preventionMeasures": [
      "Gunakan Tall-Man: SERTRAlin vs SERAtiopeptidase.",
      "Konfirmasi dokter penulis bila tulisan tangan menyerupai kedua nama ini."
    ],
    "recommendedLabel": "LASA Kuning"
  },
  {
    "id": "lasa-albumin-albuterol",
    "drugA": {
      "name": "Albumin",
      "tallManName": "albuMIN Human",
      "indication": "Hipoalbuminemia berat, syok hipovolemik, sirosis asites",
      "dosageForm": "Vial Infus 20% / 25% 100 mL"
    },
    "drugB": {
      "name": "Albuterol (Salbutamol)",
      "tallManName": "alBUTEROL (Salbutamol)",
      "indication": "Bronkospasme akut asma dan PPOK",
      "dosageForm": "Nebules 2.5 mg / Inhaler"
    },
    "similarityType": "sound_alike",
    "clinicalRisk": "Kegagalan mengatasi sesak napas akut asma jika produk tertukar dalam komunikasi lisan via telepon (verbal order).",
    "preventionMeasures": [
      "Wajib Tall-Man: albuMIN vs alBUTEROL.",
      "Terapkan teknik Read-Back / TULBAKON saat menerima instruksi verbal."
    ],
    "recommendedLabel": "LASA Merah"
  },
  {
    "id": "lasa-folat-folinat",
    "drugA": {
      "name": "Asam Folat",
      "tallManName": "asam FOLAT",
      "indication": "Anemia megaloblastik, suplementasi kehamilan",
      "dosageForm": "Tablet 1 mg, 5 mg"
    },
    "drugB": {
      "name": "Asam Folinat (Leucovorin)",
      "tallManName": "asam folinAT (Leucovorin)",
      "indication": "Rescue therapy overdosis metotreksat, potensiasi 5-FU",
      "dosageForm": "Ampul / Vial Injeksi 50 mg"
    },
    "similarityType": "both",
    "clinicalRisk": "Asam folat TIDAK BISA menggantikan asam folinat sebagai rescue pasca kemoterapi dosis tinggi metotreksat. Pasien dapat meninggal akibat toksisitas hematologi metotreksat.",
    "preventionMeasures": [
      "Wajib Tall-Man: asam FOLAT vs asam folinAT.",
      "Asam folinat disimpan khusus di depo farmasi onkologi."
    ],
    "recommendedLabel": "LASA Merah"
  },
  {
    "id": "lasa-busulfan-sulfasalazin",
    "drugA": {
      "name": "Busulfan",
      "tallManName": "busULFAN",
      "indication": "Kondisioning transplantasi sumsum tulang, CML",
      "dosageForm": "Tablet 2 mg / Injeksi"
    },
    "drugB": {
      "name": "Sulfasalazin",
      "tallManName": "sulfaSALAZIN",
      "indication": "Kolitis ulseratif, rheumatoid arthritis",
      "dosageForm": "Kaplet Salut Enterik 500 mg"
    },
    "similarityType": "sound_alike",
    "clinicalRisk": "Busulfan adalah sitostatika penekan sumsum tulang berat. Salah minum busulfan memicu pansitopenia fatal dan sepsis aplastik.",
    "preventionMeasures": [
      "Wajib Tall-Man: busULFAN vs sulfaSALAZIN.",
      "Simpan busulfan di lemari sitostatika dengan verifikasi rangkap."
    ],
    "recommendedLabel": "LASA Merah"
  },
  {
    "id": "lasa-siprofloksasin-levofloksasin",
    "drugA": {
      "name": "Siprofloksasin",
      "tallManName": "SIprofloksasin",
      "indication": "Infeksi saluran kemih berat, infeksi intraabdomen",
      "dosageForm": "Infus 200 mg/100 mL / Tablet 500 mg"
    },
    "drugB": {
      "name": "Levofloksasin",
      "tallManName": "LEvofloksasin",
      "indication": "Pneumonia komunitas (CAP), infeksi saluran napas",
      "dosageForm": "Infus 500 mg/100 mL, 750 mg / Tablet"
    },
    "similarityType": "both",
    "clinicalRisk": "Ciprofloxacin tidak optimal untuk patogen Streptococcus pneumoniae pada pneumonia saluran napas; tertukarnya dosis infus (200 mg vs 750 mg) memicu kegagalan klinis.",
    "preventionMeasures": [
      "Gunakan Tall-Man: SIprofloksasin vs LEvofloksasin.",
      "Pisahkan botol infus ciprofloxacin dan levofloxacin di rak antibiotik."
    ],
    "recommendedLabel": "LASA Kuning"
  },
  {
    "id": "lasa-vankomisin-vekuronium",
    "drugA": {
      "name": "Vankomisin",
      "tallManName": "vankoMISIN HCl",
      "indication": "Infeksi bakteri Gram-positif MRSA, endokarditis",
      "dosageForm": "Vial Serbuk Injeksi 500 mg, 1 gram"
    },
    "drugB": {
      "name": "Vekuronium",
      "tallManName": "vekuroNIUM Bromida",
      "indication": "Pelemas otot rangka intubasi anestesi umum",
      "dosageForm": "Vial Serbuk Injeksi 4 mg, 10 mg"
    },
    "similarityType": "sound_alike",
    "clinicalRisk": "Pemberian vekuronium secara tidak sengaja di bangsal umum langsung menyebabkan apneu paralisis pernapasan total dan kematian dalam hitungan menit pada pasien tanpa ventilator!",
    "preventionMeasures": [
      "Wajib Tall-Man tegas: vankoMISIN vs vekuroNIUM.",
      "Vekuronium HANYA boleh berada di Kamar Operasi dan ICU dengan label peringatan paralisis merah.",
      "Dilarang keras menyimpan vekuronium di depo rawat inap umum."
    ],
    "recommendedLabel": "LASA Merah"
  },
  {
    "id": "lasa-siklosporin-siklofosfamid",
    "drugA": {
      "name": "Siklosporin",
      "tallManName": "sikloSPORIN",
      "indication": "Imunosupresan pencegahan rejeksi transplantasi organ",
      "dosageForm": "Kapsul Lunak 25 mg, 100 mg"
    },
    "drugB": {
      "name": "Siklofosfamid",
      "tallManName": "sikloFOSFAMID",
      "indication": "Kemoterapi limfoma, leukemia, kanker payudara",
      "dosageForm": "Vial Injeksi 500 mg, 1 g / Tablet"
    },
    "similarityType": "both",
    "clinicalRisk": "Siklofosfamid memicu mielosupresi akut dan sistitis hemoragik; siklosporin memicu nefrotoksisitas kronis dan hipertensi. Tertukarnya obat memicu kegagalan cangkok organ atau toksisitas kemo.",
    "preventionMeasures": [
      "Gunakan Tall-Man: sikloSPORIN vs sikloFOSFAMID.",
      "Pisahkan produk transplantasi dari rak sitostatika."
    ],
    "recommendedLabel": "LASA Merah"
  },
  {
    "id": "lasa-hct-tiamazol",
    "drugA": {
      "name": "Hidroklorotiazid (HCT)",
      "tallManName": "hidrokloroTIAZID (HCT)",
      "indication": "Diuretik tiazid antihipertensi dan edema",
      "dosageForm": "Tablet 25 mg"
    },
    "drugB": {
      "name": "Tiamazol (Metimazol)",
      "tallManName": "tiamAZOL (Thyrozol)",
      "indication": "Antitiroid hipertiroidisme Graves disease",
      "dosageForm": "Tablet 5 mg, 10 mg"
    },
    "similarityType": "sound_alike",
    "clinicalRisk": "Pemberian tiamazol pada pasien hipertensi memicu hipotiroidisme iatrogenik dan agranulositosis; sedangkan HCT pada krisis tiroid tidak menyelesaikan tirotoksikosis.",
    "preventionMeasures": [
      "Gunakan Tall-Man: hidrokloroTIAZID vs tiamAZOL.",
      "Periksa diagnosis penyakit endokrin pada rekam medis."
    ],
    "recommendedLabel": "LASA Kuning"
  },
  {
    "id": "lasa-propranolol-atenolol",
    "drugA": {
      "name": "Propranolol",
      "tallManName": "proPRANOLOL HCl",
      "indication": "Beta-blocker non-selektif: tremor esensial, migrain, tirotoksikosis",
      "dosageForm": "Tablet 10 mg, 40 mg"
    },
    "drugB": {
      "name": "Atenolol",
      "tallManName": "aTENOLOL",
      "indication": "Beta-blocker kardioselektif beta-1: hipertensi, angina pektoris",
      "dosageForm": "Tablet 50 mg, 100 mg"
    },
    "similarityType": "both",
    "clinicalRisk": "Propranolol memiliki efek bronkokonstriksi kuat (kontraindikasi asma); atenolol diekskresi via ginjal sehingga berbahaya bila ada gangguan fungsi ginjal berat.",
    "preventionMeasures": [
      "Tuliskan Tall-Man: proPRANOLOL vs aTENOLOL.",
      "Cek riwayat asma bronkiale sebelum menyerahkan propranolol."
    ],
    "recommendedLabel": "LASA Kuning"
  },
  {
    "id": "lasa-atorvastatin-simvastatin",
    "drugA": {
      "name": "Atorvastatin",
      "tallManName": "atorvaSTATIN",
      "indication": "Dislipidemia intensitas tinggi, pencegahan kardiovaskular",
      "dosageForm": "Tablet 10 mg, 20 mg, 40 mg"
    },
    "drugB": {
      "name": "Simvastatin",
      "tallManName": "simvaSTATIN",
      "indication": "Dislipidemia intensitas sedang",
      "dosageForm": "Tablet 10 mg, 20 mg"
    },
    "similarityType": "both",
    "clinicalRisk": "Simvastatin dosis 80 mg memiliki risiko rabdomiolisis tinggi dan interaksi ketat CYP3A4 dengan amlodipin/klaritromisin yang tidak sama dengan atorvastatin.",
    "preventionMeasures": [
      "Gunakan Tall-Man: atorvaSTATIN vs simvaSTATIN.",
      "Perhatikan waktu minum (simvastatin malam hari vs atorvastatin kapan saja)."
    ],
    "recommendedLabel": "LASA Kuning"
  },
  {
    "id": "lasa-amikasin-gentamisin",
    "drugA": {
      "name": "Amikasin",
      "tallManName": "amiKASIN Sulfat",
      "indication": "Infeksi berat bakteri Gram-negatif resisten, sepsis",
      "dosageForm": "Vial Injeksi 250 mg, 500 mg"
    },
    "drugB": {
      "name": "Gentamisin",
      "tallManName": "gentaMISIN Sulfat",
      "indication": "Infeksi sistemik, endokarditis, profilaksis bedah",
      "dosageForm": "Ampul Injeksi 80 mg/2 mL"
    },
    "similarityType": "both",
    "clinicalRisk": "Dosis amikasin (15 mg/kgBB) 3-4x lebih besar daripada gentamisin (3-5 mg/kgBB). Bila dosis amikasin disuntikkan menggunakan gentamisin, terjadi overdosis aminoglikosida masif yang memicu gagal ginjal akut dan tuli permanen!",
    "preventionMeasures": [
      "Wajib Tall-Man: amiKASIN vs gentaMISIN.",
      "Periksa ulang perhitungan dosis berdasarkan berat badan dan klirens kreatinin (TDM)."
    ],
    "recommendedLabel": "LASA Merah"
  },
  {
    "id": "lasa-lansoprazol-omeprazol-pantoprazol",
    "drugA": {
      "name": "Lansoprazol",
      "tallManName": "lansOPRAZOL",
      "indication": "Ulkus peptikum, GERD, sindrom Zollinger-Ellison",
      "dosageForm": "Kapsul 30 mg / Vial Injeksi 30 mg"
    },
    "drugB": {
      "name": "Omeprazol",
      "tallManName": "omepRAZOL",
      "indication": "Pendarahan saluran cerna atas, GERD",
      "dosageForm": "Kapsul 20 mg / Vial Injeksi 40 mg"
    },
    "similarityType": "both",
    "clinicalRisk": "Kesalahan pemilihan pelarut dan kecepatan infus rekonstitusi (omeprazol IV wajib dilarutkan dalam pelarut khusus atau NaCl 0.9% dengan stabilitas waktu tertentu).",
    "preventionMeasures": [
      "Tuliskan Tall-Man: lansOPRAZOL vs omepRAZOL vs pantoPRAZOL.",
      "Pisahkan kotak sediaan di rak obat saluran cerna."
    ],
    "recommendedLabel": "LASA Kuning"
  },
  {
    "id": "lasa-cefazolin-cefepime-ceftriaxone",
    "drugA": {
      "name": "Cefazolin",
      "tallManName": "cefAZOLIN",
      "indication": "Profilaksis bedah mayor, infeksi Gram-positif MSSA",
      "dosageForm": "Vial Injeksi 1 gram"
    },
    "drugB": {
      "name": "Cefepime",
      "tallManName": "cefEPIME",
      "indication": "Infeksi berat Pseudomonas, pneumonia nosokomial",
      "dosageForm": "Vial Injeksi 1 gram"
    },
    "similarityType": "both",
    "clinicalRisk": "Cefepime adalah generasi ke-4 dengan aktivitas antipseudomonal kuat; memberikan cefazolin untuk sepsis nosokomial berujung pada kegagalan terapi infeksi yang fatal.",
    "preventionMeasures": [
      "Gunakan Tall-Man tegas: cefAZOLIN vs cefEPIME vs cefTRIAXONE.",
      "Verifikasi indikasi profilaksis bedah vs infeksi kuman resisten."
    ],
    "recommendedLabel": "LASA Kuning"
  },
  {
    "id": "lasa-tramadol-trazodon",
    "drugA": {
      "name": "Tramadol",
      "tallManName": "traMADOL HCl",
      "indication": "Analgesik opioid sintetis nyeri sedang-berat",
      "dosageForm": "Kapsul 50 mg / Ampul 100 mg/2 mL"
    },
    "drugB": {
      "name": "Trazodon",
      "tallManName": "traZODON HCl",
      "indication": "Antidepresan sedatif insomnia dan depresi",
      "dosageForm": "Tablet 50 mg, 100 mg"
    },
    "similarityType": "sound_alike",
    "clinicalRisk": "Tertukarnya obat memicu sedasi berlebihan, hipotensi ortostatik, priapismus, atau sindrom serotonin bila dikombinasikan dengan obat psikiatri lain.",
    "preventionMeasures": [
      "Gunakan Tall-Man: traMADOL vs traZODON.",
      "Tramadol wajib disimpan di lemari Obat-Obat Tertentu (OOT)."
    ],
    "recommendedLabel": "LASA Kuning"
  },
  {
    "id": "lasa-kalsium-glukonat-kalsium-klorida",
    "drugA": {
      "name": "Kalsium Glukonat 10%",
      "tallManName": "KALSIUM GLUKONAT 10%",
      "indication": "Hipokalsemia simtomatik, hiperkalemia emergensi",
      "dosageForm": "Ampul 10% (10 mL = ~93 mg Ca elemental)"
    },
    "drugB": {
      "name": "Kalsium Klorida 10%",
      "tallManName": "KALSIUM KLORIDA 10%",
      "indication": "Henti jantung dengan hiperkalemia/hipokalsemia berat",
      "dosageForm": "Ampul 10% (10 mL = ~270 mg Ca elemental)"
    },
    "similarityType": "both",
    "clinicalRisk": "Kalsium klorida mengandung 3x lebih banyak kalsium elemental dibanding glukonat dan SANGAT IRITAN terhadap vena. Memberikan kalsium klorida via vena perifer memicu nekrosis jaringan dan tromboflebitis parah!",
    "preventionMeasures": [
      "Wajib Tall-Man: KALSIUM GLUKONAT vs KALSIUM KLORIDA.",
      "Kalsium klorida hanya diberikan via vena sentral (CVC) atau saat resusitasi henti jantung.",
      "Simpan kalsium klorida di troli resusitasi dengan label merah menyala."
    ],
    "recommendedLabel": "LASA Merah"
  },
  {
    "id": "lasa-amoksisilin-ampisilin",
    "drugA": {
      "name": "Amoksisilin",
      "tallManName": "amoksiSILIN",
      "indication": "Infeksi saluran napas atas, otitis media, faringitis",
      "dosageForm": "Kapsul 500 mg / Sirup Kering"
    },
    "drugB": {
      "name": "Ampisilin",
      "tallManName": "ampiSILIN",
      "indication": "Meningitis neonatal Listeria, infeksi enterokokus injeksi",
      "dosageForm": "Vial Injeksi 500 mg, 1 gram"
    },
    "similarityType": "both",
    "clinicalRisk": "Bioavailabilitas oral amoksisilin jauh lebih baik (80%) dibanding ampisilin oral (40%). Memberikan ampisilin oral menyebabkan kegagalan terapi dan diare tinggi.",
    "preventionMeasures": [
      "Gunakan Tall-Man: amoksiSILIN vs ampiSILIN.",
      "Ampisilin dianjurkan hanya untuk sediaan parenteral rumah sakit."
    ],
    "recommendedLabel": "LASA Kuning"
  },
  {
    "id": "lasa-alopurinol-haloperidol",
    "drugA": {
      "name": "Alopurinol",
      "tallManName": "aloPURI-nol",
      "indication": "Hiperurisemia pirai (gout arthritis), nefrolitiasis urat",
      "dosageForm": "Tablet 100 mg, 300 mg"
    },
    "drugB": {
      "name": "Haloperidol",
      "tallManName": "haloPERI-dol",
      "indication": "Antipsikotik psikosis akut, delirium, agitasi",
      "dosageForm": "Tablet 0.5 mg, 1.5 mg, 5 mg / Ampul 5 mg/mL"
    },
    "similarityType": "sound_alike",
    "clinicalRisk": "Pasien pirai yang salah diberi haloperidol dapat mengalami distonia akut berat, kaku otot leher kram (krisis okulogirik), sedasi parah, dan pemanjangan interval QTc.",
    "preventionMeasures": [
      "Tuliskan Tall-Man: aloPURInol vs haloPERIdol.",
      "Haloperidol masuk dalam lemari Obat-Obat Tertentu (OOT)."
    ],
    "recommendedLabel": "LASA Kuning"
  },
  {
    "id": "lasa-ctm-sianokobalamin",
    "drugA": {
      "name": "Klorfeniramin Maleat (CTM)",
      "tallManName": "klorfenirAMIN (CTM)",
      "indication": "Antihistamin generasi 1 rinitis alergi dan pruritus",
      "dosageForm": "Tablet 4 mg"
    },
    "drugB": {
      "name": "Sianokobalamin (Vitamin B12)",
      "tallManName": "sianokobalAMIN (Vit B12)",
      "indication": "Anemia defisiensi vitamin B12, neuropati perifer",
      "dosageForm": "Tablet 50 mcg / Ampul 500 mcg"
    },
    "similarityType": "sound_alike",
    "clinicalRisk": "Efek sedasi mengantuk berat dari CTM dapat membahayakan pengemudi kendaraan bila tidak sengaja diserahkan saat pasien membutuhkan vitamin.",
    "preventionMeasures": [
      "Tuliskan Tall-Man: klorfenirAMIN vs sianokobalAMIN.",
      "Periksa etiket dan informasi aturan pakai obat sebelum penyerahan."
    ],
    "recommendedLabel": "LASA Kuning"
  },
  {
    "id": "lasa-azitromisin-eritromisin",
    "drugA": {
      "name": "Azitromisin",
      "tallManName": "azitroMISIN",
      "indication": "Infeksi saluran napas, CAP, klamidia genitalis",
      "dosageForm": "Tablet 500 mg (1x sehari)"
    },
    "drugB": {
      "name": "Eritromisin",
      "tallManName": "eritroMISIN",
      "indication": "Infeksi kulit, jerawat, alternatif penisilin",
      "dosageForm": "Kapsul 250 mg, 500 mg (4x sehari)"
    },
    "similarityType": "both",
    "clinicalRisk": "Eritromisin diminum 4x sehari dan berinteraksi kuat dengan banyak obat via CYP3A4, sedangkan azitromisin 1x sehari. Tertukar aturan pakai memicu toksisitas atau kegagalan eliminasi kuman.",
    "preventionMeasures": [
      "Gunakan Tall-Man: azitroMISIN vs eritroMISIN.",
      "Edukasi regimen dosis singkat (3-5 hari) azitromisin secara jelas."
    ],
    "recommendedLabel": "LASA Kuning"
  },
  {
    "id": "lasa-bisoprolol-metoprolol",
    "drugA": {
      "name": "Bisoprolol",
      "tallManName": "bisoprOLOL Fumarat",
      "indication": "Hipertensi, gagal jantung kronis HFrEF (1x sehari)",
      "dosageForm": "Tablet 2.5 mg, 5 mg"
    },
    "drugB": {
      "name": "Metoprolol",
      "tallManName": "metoprOLOL Tartrat / Suksinat",
      "indication": "Hipertensi, angina pektoris, takiaritmia",
      "dosageForm": "Tablet 50 mg, 100 mg"
    },
    "similarityType": "both",
    "clinicalRisk": "Perbedaan kekuatan dosis sangat signifikan (bisoprolol 2.5-5 mg setara metoprolol 50-100 mg). Tertukarnya sediaan memicu bradikardia masif atau blok jantung AV.",
    "preventionMeasures": [
      "Tuliskan Tall-Man: bisoprOLOL vs metoprOLOL.",
      "Perhatikan perbedaan garam (Tartrat short-acting vs Suksinat long-acting)."
    ],
    "recommendedLabel": "LASA Kuning"
  },
  {
    "id": "lasa-levetirasetam-lamotrigin",
    "drugA": {
      "name": "Levetirasetam",
      "tallManName": "levetiraseTAM (Keppra)",
      "indication": "Antikonvulsan epilepsi fokal dan umum, mioklonik",
      "dosageForm": "Tablet 250 mg, 500 mg / Sirup"
    },
    "drugB": {
      "name": "Lamotrigin",
      "tallManName": "lamoTRIgin (Lamictal)",
      "indication": "Antiepilepsi dan penstabil mood bipolar",
      "dosageForm": "Tablet 25 mg, 50 mg, 100 mg"
    },
    "similarityType": "sound_alike",
    "clinicalRisk": "Lamotrigin wajib dititrasi sangat perlahan (tiap 2 minggu) untuk menghindari sindrom Steven-Johnson (SJS) atau nekrolisis epidermal toksik (TEN) yang mematikan.",
    "preventionMeasures": [
      "Wajib Tall-Man: levetiraseTAM vs lamoTRIgin.",
      "Jangan pernah memulai lamotrigin langsung dengan dosis tinggi levetirasetam (misal 500 mg)."
    ],
    "recommendedLabel": "LASA Merah"
  },
  {
    "id": "lasa-spironolakton-spiramisin",
    "drugA": {
      "name": "Spironolakton",
      "tallManName": "spironoLAKTON",
      "indication": "Diuretik hemat kalium gagal jantung, sirosis asites",
      "dosageForm": "Tablet 25 mg, 100 mg"
    },
    "drugB": {
      "name": "Spiramisin",
      "tallManName": "spiraMISIN",
      "indication": "Antibiotik makrolida toksoplasmosis kongenital pada ibu hamil",
      "dosageForm": "Tablet 500 mg"
    },
    "similarityType": "sound_alike",
    "clinicalRisk": "Ibu hamil dengan toksoplasmosis yang keliru menerima spironolakton berisiko mengalami hiperkalemia, dehidrasi, dan kerusakan janin akibat infeksi toksoplasma yang tidak tertangani.",
    "preventionMeasures": [
      "Tuliskan Tall-Man: spironoLAKTON vs spiraMISIN.",
      "Skrining status kehamilan pada setiap penyerahan obat."
    ],
    "recommendedLabel": "LASA Kuning"
  },
  {
    "id": "lasa-isdn-ismn",
    "drugA": {
      "name": "Isosorbid Dinitrat (ISDN)",
      "tallManName": "ISOsorbid DINITRAT",
      "indication": "Angina pektoris akut serangan mendadak (Sublingual)",
      "dosageForm": "Tablet Sublingual 5 mg, 10 mg"
    },
    "drugB": {
      "name": "Isosorbid Mononitrat (ISMN)",
      "tallManName": "ISOsorbid MONONITRAT",
      "indication": "Profilaksis jangka panjang angina pektoris (Oral)",
      "dosageForm": "Tablet Lepas Lambat 30 mg, 60 mg"
    },
    "similarityType": "both",
    "clinicalRisk": "ISMN ditelan tidak berefek cepat saat serangan nyeri dada iskemik infark miokard akut; sebaliknya ISDN dosis multipel memicu hipotensi berat dan takikardia refleks.",
    "preventionMeasures": [
      "Wajib Tall-Man: ISOsorbid DINITRAT vs ISOsorbid MONONITRAT.",
      "Edukasi rute peletakan tablet di bawah lidah untuk ISDN."
    ],
    "recommendedLabel": "LASA Kuning"
  },
  {
    "id": "lasa-digoksin-digitoksin",
    "drugA": {
      "name": "Digoksin",
      "tallManName": "diGOKsin",
      "indication": "Gagal jantung HFrEF, fibrilasi atrium pengendali laju",
      "dosageForm": "Tablet 0.25 mg / Ampul 0.5 mg/2 mL"
    },
    "drugB": {
      "name": "Digitoksin",
      "tallManName": "diGIROKsin (Digitoksin)",
      "indication": "Glikosida jantung pada pasien gangguan ginjal berat",
      "dosageForm": "Tablet 0.1 mg"
    },
    "similarityType": "both",
    "clinicalRisk": "Digitoksin memiliki waktu paruh eliminasi sangat panjang (5-7 hari) melalui hati, sedangkan digoksin diekskresi via ginjal. Tertukarnya obat memicu keracunan digitalis berkepanjangan.",
    "preventionMeasures": [
      "Gunakan Tall-Man: diGOKsin vs diGIROKsin.",
      "Cek nilai serum kalium dan fungsi ginjal secara berkala."
    ],
    "recommendedLabel": "LASA Merah"
  },
  {
    "id": "lasa-tizanidin-tiamin",
    "drugA": {
      "name": "Tizanidin",
      "tallManName": "tiZANidin HCl",
      "indication": "Relaksan otot skeletal antispastisitas sentral",
      "dosageForm": "Tablet 2 mg"
    },
    "drugB": {
      "name": "Tiamin (Vitamin B1)",
      "tallManName": "tiaMIN HCl (Vit B1)",
      "indication": "Defisiensi tiamin, beri-beri, ensefalopati Wernicke",
      "dosageForm": "Tablet 50 mg, 100 mg / Ampul 100 mg"
    },
    "similarityType": "sound_alike",
    "clinicalRisk": "Tizanidin adalah agonis alfa-2 sentral poten; bila salah diberikan sebagai vitamin, pasien akan mengalami sedasi ekstrem, mengantuk berat, bradikardia, dan hipotensi postural.",
    "preventionMeasures": [
      "Gunakan Tall-Man: tiZANidin vs tiaMIN.",
      "Pisahkan rak multivitamin dari rak obat saraf/muskuloskeletal."
    ],
    "recommendedLabel": "LASA Kuning"
  },
  {
    "id": "lasa-furosemid-torsemid",
    "drugA": {
      "name": "Furosemid",
      "tallManName": "furoseMID",
      "indication": "Edema paru akut, gagal jantung kongestif, asites",
      "dosageForm": "Tablet 40 mg / Ampul 20 mg/2 mL"
    },
    "drugB": {
      "name": "Torsemid",
      "tallManName": "torseMID",
      "indication": "Hipertensi, edema refrakter gagal jantung kronik",
      "dosageForm": "Tablet 5 mg, 10 mg, 20 mg"
    },
    "similarityType": "both",
    "clinicalRisk": "Bioavailabilitas oral torsemid 80% stabil dibanding furosemid (10-90%). Potensi diuretik torsemid 2-4x lebih kuat per miligram dibanding furosemid.",
    "preventionMeasures": [
      "Gunakan Tall-Man: furoseMID vs torseMID.",
      "Perhatikan perbandingan konversi dosis ekivalen (Furosemid 40 mg ~ Torsemid 10-20 mg)."
    ],
    "recommendedLabel": "LASA Kuning"
  },
  {
    "id": "lasa-ketorolak-ketoprofen",
    "drugA": {
      "name": "Ketorolak",
      "tallManName": "ketoroLAK Trometamin",
      "indication": "Analgesik pasca-operasi jangka pendek (maksimal 5 hari)",
      "dosageForm": "Ampul Injeksi 10 mg/mL, 30 mg/mL"
    },
    "drugB": {
      "name": "Ketoprofen",
      "tallManName": "ketoPROfen",
      "indication": "Nyeri inflamasi sendi, dismenore, artritis gout",
      "dosageForm": "Tablet 50 mg, 100 mg / Supositoria 100 mg"
    },
    "similarityType": "both",
    "clinicalRisk": "Ketorolak memiliki toksisitas gastrointestinal dan perdarahan bedah 5x lebih tinggi dibanding NSAID lain, serta risiko gagal ginjal akut bila digunakan > 5 hari.",
    "preventionMeasures": [
      "Wajib Tall-Man: ketoroLAK vs ketoPROfen.",
      "Beri tanda batas waktu terapi maksimal 5 hari pada etiket ketorolak."
    ],
    "recommendedLabel": "LASA Kuning"
  },
  {
    "id": "lasa-mikonazol-flukonazol",
    "drugA": {
      "name": "Mikonazol",
      "tallManName": "mikoNAZOL Nitrat",
      "indication": "Kandidiasis mukokutan, tinea pedis/korporis topikal",
      "dosageForm": "Krim 2% / Gel Oral 20 mg/g"
    },
    "drugB": {
      "name": "Flukonazol",
      "tallManName": "flukoNAZOL",
      "indication": "Kandidiasis sistemik, meningitis kriptokokus",
      "dosageForm": "Kapsul 50 mg, 150 mg / Botol Infus 200 mg/100 mL"
    },
    "similarityType": "both",
    "clinicalRisk": "Miconazole oral gel diserap secara lokal namun merupakan inhibitor poten CYP2C9; berinteraksi mematikan dengan warfarin yang memicu perdarahan fatal.",
    "preventionMeasures": [
      "Tuliskan Tall-Man: mikoNAZOL vs flukoNAZOL.",
      "Skrining penggunaan warfarin pada pasien kandidiasis oral."
    ],
    "recommendedLabel": "LASA Kuning"
  },
  {
    "id": "lasa-paklitaksel-dosetaksel",
    "drugA": {
      "name": "Paklitaksel",
      "tallManName": "PAKlitaksel",
      "indication": "Kanker ovarium, payudara, NSCLC",
      "dosageForm": "Vial Injeksi 30 mg / 100 mg"
    },
    "drugB": {
      "name": "Dosetaksel",
      "tallManName": "DOKSetaksel",
      "indication": "Kanker payudara metastatik, prostat resisten kastrasi",
      "dosageForm": "Vial Injeksi 20 mg / 80 mg"
    },
    "similarityType": "both",
    "clinicalRisk": "Kedua taxane memiliki protokol premedikasi berbeda: Paclitaxel memerlukan deksametason + difenhidramin + H2-blocker untuk cegah syok anafilaktoid Cremophor; docetaxel memerlukan deksametason oral 3 hari untuk cegah retensi cairan kapiler berat.",
    "preventionMeasures": [
      "Wajib Tall-Man: PAKlitaksel vs DOKSetaksel.",
      "Verifikasi lembar protokol premedikasi sebelum infus obat kemoterapi."
    ],
    "recommendedLabel": "LASA Merah"
  },
  {
    "id": "lasa-parasetamol-piracetam",
    "drugA": {
      "name": "Parasetamol",
      "tallManName": "paraSETAMOL",
      "indication": "Analgesik antipiretik demam dan nyeri ringan-sedang",
      "dosageForm": "Tablet 500 mg / Infus 1000 mg/100 mL"
    },
    "drugB": {
      "name": "Pirasetam",
      "tallManName": "piraSETAM",
      "indication": "Nootropik gangguan kognitif, mioklonus kortikal",
      "dosageForm": "Kaplet 800 mg, 1200 mg / Ampul 1 g, 3 g"
    },
    "similarityType": "sound_alike",
    "clinicalRisk": "Salah memberikan pirasetam pada pasien demam tinggi atau nyeri akut menyebabkan kegagalan antipiretik, dan pemberian parasetam berulang salah dosis memicu hepatotoksisitas nekrosis hepar.",
    "preventionMeasures": [
      "Tuliskan Tall-Man: paraSETAMOL vs piraSETAM.",
      "Pisahkan rak obat analgetik antipiretik dari nootropik."
    ],
    "recommendedLabel": "LASA Kuning"
  },
  {
    "id": "lasa-salbutamol-salmeterol",
    "drugA": {
      "name": "Salbutamol",
      "tallManName": "salBUTAMOL (SABA)",
      "indication": "Pelega (reliever) bronkospasme akut asma kerja cepat",
      "dosageForm": "Inhaler 100 mcg / Nebules 2.5 mg"
    },
    "drugB": {
      "name": "Salmeterol",
      "tallManName": "salMETErol (LABA)",
      "indication": "Pengontrol (controller) jangka panjang asma/PPOK kerja lambat",
      "dosageForm": "Inhaler Serbuk / Diskus 50 mcg"
    },
    "similarityType": "both",
    "clinicalRisk": "Salmeterol memiliki onset lambat (15-30 menit) dan DILARANG untuk serangan sesak napas akut. Menggunakan salmeterol saat status asmatikus memicu asfiksia fatal karena bronkospasme tidak teratasi cepat!",
    "preventionMeasures": [
      "Wajib Tall-Man: salBUTAMOL (Pelega Cepat) vs salMETErol (Pengontrol Lambat).",
      "Edukasi pasien perbedaan warna tabung inhaler (biru pelega vs ungu pengontrol)."
    ],
    "recommendedLabel": "LASA Merah"
  },
  {
    "id": "lasa-klindamisin-klaritromisin",
    "drugA": {
      "name": "Klindamisin",
      "tallManName": "klindaMISIN HCl",
      "indication": "Infeksi anaerob dan Gram-positif kulit, abses gigi",
      "dosageForm": "Kapsul 150 mg, 300 mg"
    },
    "drugB": {
      "name": "Klaritromisin",
      "tallManName": "klaritroMISIN",
      "indication": "Eradikasi H. pylori, faringitis, pneumonia atipik",
      "dosageForm": "Tablet 250 mg, 500 mg"
    },
    "similarityType": "both",
    "clinicalRisk": "Klindamisin berisiko tinggi kolitis pseudomembran Clostridioides difficile; klaritromisin adalah inhibitor CYP3A4 kuat dan memperpanjang interval QTc berisiko aritmia bila dikombinasikan dengan obat jantung.",
    "preventionMeasures": [
      "Gunakan Tall-Man: klindaMISIN vs klaritroMISIN.",
      "Cek indikasi infeksi saluran cerna atas vs infeksi jaringan lunak."
    ],
    "recommendedLabel": "LASA Kuning"
  },
  {
    "id": "lasa-ketamin-ketorolak",
    "drugA": {
      "name": "Ketamin",
      "tallManName": "ketaMIN HCl",
      "indication": "Anestesi umum disosiatif, sedasi prosedural emergensi, analgesia refrakter",
      "dosageForm": "Vial Injeksi 50 mg/mL & 100 mg/mL"
    },
    "drugB": {
      "name": "Ketorolak",
      "tallManName": "ketaROLAK Trometamin",
      "indication": "Analgesik NSAID jangka pendek nyeri pasca operasi akut",
      "dosageForm": "Ampul Injeksi 30 mg/mL"
    },
    "similarityType": "both",
    "clinicalRisk": "Sangat Kritis & Berpotensi Mematikan! Tertukarnya ketamin dengan ketorolak di bangsal umum menyebabkan pasien pasca bedah menerima anestesi disosiatif berat tanpa proteksi jalan napas, memicu laringospasme, hilangnya kesadaran mendadak, apneu henti napas, delirium halusinasi, dan krisis hipertensi.",
    "preventionMeasures": [
      "Wajib penulisan Tall-Man mencolok: ketaMIN vs ketaROLAK.",
      "Pisahkan lokasi penyimpanan: Ketamin HANYA disimpan di lemari terkunci Kamar Operasi / ICU / IGD; dilarang keras berada di rak obat umum bangsal perawatan.",
      "Beri stiker merah menyala 'ANESTESI UMUM / HIGH ALERT' pada setiap vial ketamin."
    ],
    "recommendedLabel": "LASA Merah"
  },
  {
    "id": "lasa-ketorolak-ketokonazol",
    "drugA": {
      "name": "Ketorolak",
      "tallManName": "ketaROLAK Trometamin",
      "indication": "Analgesik NSAID non-opioid nyeri pasca operasi / kolik renal",
      "dosageForm": "Tablet 10 mg / Ampul 30 mg/mL"
    },
    "drugB": {
      "name": "Ketokonazol",
      "tallManName": "ketoKONAZOL",
      "indication": "Antijamur imidazol sistemik / infeksi jamur kutaneus berat",
      "dosageForm": "Tablet 200 mg / Krim 2%"
    },
    "similarityType": "sound_alike",
    "clinicalRisk": "Pasien nyeri akut gagal menerima pereda nyeri; sebaliknya paparan ketokonazol oral yang tidak tepat memicu risiko cedera hati akut (drug-induced liver injury / DILI fatal) dan interaksi inhibitor enzim CYP3A4 kuat.",
    "preventionMeasures": [
      "Terapkan Tall-Man: ketaROLAK vs ketoKONAZOL.",
      "Verifikasi diagnosis (nyeri muskuloskeletal/bedah vs tinea/kandidiasis) saat skrining resep farmasi."
    ],
    "recommendedLabel": "LASA Kuning"
  },
  {
    "id": "lasa-klorpromazin-klorokuin",
    "drugA": {
      "name": "Klorpromazin",
      "tallManName": "klorpromAZIN (CPZ)",
      "indication": "Antipsikotik tipikal skizofrenia akut, cegukan refrakter (singultus)",
      "dosageForm": "Tablet 25 mg, 100 mg / Ampul 25 mg/mL"
    },
    "drugB": {
      "name": "Klorokuin",
      "tallManName": "kloroKUIN Fosfat",
      "indication": "Antimalaria (P. vivax), penyakit autoimun lupus eritematosus (SLE)",
      "dosageForm": "Tablet 150 mg / 250 mg"
    },
    "similarityType": "both",
    "clinicalRisk": "Keduanya memperpanjang interval QT jantung; tertukarnya obat memicu takiaritmia Torsades de Pointes fatal, depresi SSP berat, distonia ekstrapiramidal krisis okulogirik, atau retinopati klorokuin permanen.",
    "preventionMeasures": [
      "Wajib Tall-Man: klorpromAZIN vs kloroKUIN.",
      "Konfirmasi indikasi psikiatri versus terapi malaria/reumatologi sebelum dispensing."
    ],
    "recommendedLabel": "LASA Merah"
  },
  {
    "id": "lasa-morfin-hidromorfon",
    "drugA": {
      "name": "Morfin",
      "tallManName": "morFIN Sulfat",
      "indication": "Narkotika analgesik nyeri kanker kronis berat dan infark miokard akut",
      "dosageForm": "Tablet 10 mg / Ampul 10 mg/mL"
    },
    "drugB": {
      "name": "Hidromorfon",
      "tallManName": "hidromorFON HCl (Dilaudid)",
      "indication": "Narkotika analgesik semi-sintetik opioid 5-7 kali lebih poten dari morfin",
      "dosageForm": "Tablet Lepas Lambat 8 mg, 16 mg / Ampul Injeksi 2 mg/mL"
    },
    "similarityType": "both",
    "clinicalRisk": "Bencana fatal overdosis opioid! Hidromorfon 5-7 KALI LEBIH POTEN daripada morfin. Memberikan hidromorfon dalam dosis miligram morfin memicu depresi napas instan, koma, henti jantung anoksik, dan kematian dalam hitungan menit.",
    "preventionMeasures": [
      "Wajib Tall-Man tegas: morFIN vs hidromorFON.",
      "Hitung konversi dosis equianalgesik dengan kalkulator medis terverifikasi dan lakukan verifikasi ganda independen.",
      "Pastikan antidot Nalokson HCl injeksi selalu tersedia di unit perawatan."
    ],
    "recommendedLabel": "LASA Merah"
  },
  {
    "id": "lasa-fentanil-sufentanil-remifentanil",
    "drugA": {
      "name": "Fentanil",
      "tallManName": "fentaNYL Sitrat",
      "indication": "Analgesik narkotika anestesi parenteral & sedasi ICU",
      "dosageForm": "Ampul Injeksi 0.05 mg/mL (50 mcg/mL)"
    },
    "drugB": {
      "name": "Sufentanil / Remifentanil",
      "tallManName": "sulfeNTANIL / remiFENTAnil",
      "indication": "Opioid anestesi ultra-poten (sufentanil 5-10x lebih poten dari fentanil)",
      "dosageForm": "Ampul Injeksi 5 mcg/mL / Vial 1 mg Serbuk"
    },
    "similarityType": "both",
    "clinicalRisk": "Kesalahan dosis potensi tinggi: Memberikan sufentanil dengan takaran volume fentanil memicu rigiditas dinding dada (wooden chest syndrome) akut yang menghalangi ventilasi mekanik dan kolaps kardiovaskular mendadak.",
    "preventionMeasures": [
      "Gunakan Tall-Man: fentaNYL vs sulfeNTANIL vs remiFENTAnil.",
      "Hanya digunakan oleh dokter spesialis anestesiologi dengan pemantauan intubasi lengkap."
    ],
    "recommendedLabel": "LASA Merah"
  },
  {
    "id": "lasa-metotreksat-metoklopramid",
    "drugA": {
      "name": "Metotreksat",
      "tallManName": "metoTREKSAT (MTX)",
      "indication": "Sitostatika imunosupresan leukemia, artritis reumatoid, psoriasis berat",
      "dosageForm": "Tablet 2.5 mg (Aturan Pakai: 1x Seminggu)"
    },
    "drugB": {
      "name": "Metoklopramid",
      "tallManName": "metoKLOPRAMID HCl",
      "indication": "Antiemetik dan stimulan prokinetik lambung",
      "dosageForm": "Tablet 10 mg (Aturan Pakai: 3x Sehari Sebelum Makan)"
    },
    "similarityType": "sound_alike",
    "clinicalRisk": "Insiden sentinel paling mematikan di dunia farmasi: Metotreksat diminum 3 kali sehari mengikuti frekuensi metoklopramid, memicu toksisitas sitotoksik masif, nekrosis sumsum tulang, pansitopenia fatal, sepsis, dan perdarahan saluran cerna mematikan.",
    "preventionMeasures": [
      "Wajib Tall-Man: metoTREKSAT vs metoKLOPRAMID.",
      "Labeli strip metotreksat dengan stiker khusus 'HANYA DIMINUM 1 HARI DALAM SEMINGGU'.",
      "Apoteker wajib konseling tatap muka memastikan jadwal hari minum obat pada pasien."
    ],
    "recommendedLabel": "LASA Merah"
  },
  {
    "id": "lasa-diltiazem-diazepam",
    "drugA": {
      "name": "Diltiazem",
      "tallManName": "diltiAZEM HCl",
      "indication": "Calcium channel blocker antiangina, hipertensi, kontrol laju atrial fibrilasi",
      "dosageForm": "Tablet 30 mg, 60 mg / Vial 25 mg Injeksi"
    },
    "drugB": {
      "name": "Diazepam",
      "tallManName": "diaZEPAM",
      "indication": "Benzodiazepin antikonvulsan status epileptikus, sedatif anksiolitik",
      "dosageForm": "Tablet 2 mg, 5 mg / Ampul 10 mg/2 mL"
    },
    "similarityType": "sound_alike",
    "clinicalRisk": "Pemberian diazepam pada pasien takiaritmia supraventrikel atau angina gagal mengontrol laju jantung; sebaliknya injeksi bolus diltiazem pada pasien kejang memicu kolaps nodus AV, syok kardiogenik, dan asistol tanpa menghentikan kejang di otak.",
    "preventionMeasures": [
      "Wajib Tall-Man: diltiAZEM vs diaZEPAM.",
      "Pisahkan penyimpanan diltiazem injeksi di troli kardiovaskular dan diazepam di lemari psikotropika."
    ],
    "recommendedLabel": "LASA Merah"
  },
  {
    "id": "lasa-insulin-reguler-glargine",
    "drugA": {
      "name": "Insulin Reguler (Short-Acting)",
      "tallManName": "insuLIN REGULER (Actrapid / Humulin R)",
      "indication": "Koreksi hiperglikemia prandial cepat, protokol ketoasidosis diabetikum (KAD)",
      "dosageForm": "Pen / Vial 100 IU/mL (Onset 30 menit, Puncak 2-3 jam)"
    },
    "drugB": {
      "name": "Insulin Glargine (Basal Long-Acting)",
      "tallManName": "insuLIN GLARGINE (Lantus / Basaglar)",
      "indication": "Insulin basal harian durasi kerja panjang 24 jam tanpa puncak (peakless)",
      "dosageForm": "Pen 100 IU/mL (Diberikan 1x sehari malam hari)"
    },
    "similarityType": "look_alike",
    "clinicalRisk": "Memberikan insulin reguler dalam takaran insulin basal saat tidur malam memicu koma hipoglikemia nokturnal fatal, kejang hipoglikemik, ensefalopati hipoksik, dan kematian saat tidur.",
    "preventionMeasures": [
      "Wajib Tall-Man: insuLIN REGULER vs insuLIN GLARGINE.",
      "Bedakan warna tutup pen dan tempat penyimpanan di lemari pendingin.",
      "Wajib cek GDS kapiler sebelum dan sesudah injeksi insulin."
    ],
    "recommendedLabel": "LASA Merah"
  },
  {
    "id": "lasa-heparin-enoksaparin",
    "drugA": {
      "name": "Heparin Sodium (UFH)",
      "tallManName": "hepaRIN SODIUM (UFH)",
      "indication": "Antikoagulan parenteral unfractionated, titrasi infus aPTT kontinu",
      "dosageForm": "Vial 5.000 IU/mL atau 25.000 IU/5 mL"
    },
    "drugB": {
      "name": "Enoksaparin Sodium (LMWH)",
      "tallManName": "enoksaPARIN SODIUM (LMWH - Lovenox)",
      "indication": "Antikoagulan berat molekul rendah pencegahan dan terapi DVT/PE/ACS",
      "dosageForm": "Prefilled Syringe 20 mg, 40 mg, 60 mg/0.6 mL"
    },
    "similarityType": "sound_alike",
    "clinicalRisk": "Kesalahan unit vs miligram: Dosis UFH dihitung dalam Unit (ribuan Unit), sedangkan LMWH dihitung dalam miligram. Kesalahan konversi memicu perdarahan retroperitoneal masif atau stroke hemoragik.",
    "preventionMeasures": [
      "Gunakan Tall-Man: hepaRIN (UFH) vs enoksaPARIN (LMWH).",
      "Verifikasi ganda satuan dosis (Unit vs mg) dan rute pemberian (IV kontinu vs subkutan)."
    ],
    "recommendedLabel": "LASA Merah"
  },
  {
    "id": "lasa-atrakurium-vekuronium-rokuronium",
    "drugA": {
      "name": "Atrakurium",
      "tallManName": "atraKURIUM Besilat",
      "indication": "Pelemas otot rangka non-depolarisasi durasi menengah, eliminasi Hofmann",
      "dosageForm": "Ampul Injeksi 10 mg/mL"
    },
    "drugB": {
      "name": "Rokuronium / Vekuronium",
      "tallManName": "rokurONIUM / vekuroNIUM Bromida",
      "indication": "Pelemas otot rangka non-depolarisasi onset cepat intubasi trakea",
      "dosageForm": "Vial Injeksi 10 mg/mL / Vial Serbuk 10 mg"
    },
    "similarityType": "both",
    "clinicalRisk": "Semua agen NMBA melumpuhkan otot pernapasan! Penyuntikan tanpa bantuan ventilator atau pada pasien sadar tanpa sedasi memicu asfiksia paralisis sadar (pasien mengalami teror mencekam karena sadar penuh tetapi tidak bisa bernapas) berujung henti napas mematikan.",
    "preventionMeasures": [
      "Wajib Tall-Man: atraKURIUM vs rokurONIUM vs vekuroNIUM.",
      "Labeli dengan stiker merah terang peringatan 'AWAS OBAT PARALISIS OTOT - MENYEBABKAN HENTI NAPAS'.",
      "Dilarang keras disimpan di luar kamar operasi/ICU/IGD."
    ],
    "recommendedLabel": "LASA Merah"
  },
  {
    "id": "lasa-levodopa-levofloksasin",
    "drugA": {
      "name": "Levodopa",
      "tallManName": "levoDOPA + Karbidopa",
      "indication": "Terapi substitusi dopamin penyakit Parkinson, sindrom parkinsonisme",
      "dosageForm": "Tablet 100/25 mg, 250/25 mg"
    },
    "drugB": {
      "name": "Levofloksasin",
      "tallManName": "levoFLOKSASIN",
      "indication": "Antibiotik fluorokuinolon spektrum luas pneumonia, ISK komplikata",
      "dosageForm": "Tablet 500 mg / Infus 500 mg/100 mL"
    },
    "similarityType": "sound_alike",
    "clinicalRisk": "Penghentian mendadak levodopa memicu sindrom neuroleptik maligna atau krisis akinetik akut yang mengancam nyawa pasien Parkinson; kegagalan pemberian levofloksasin memicu sepsis bakterial tidak tertangani.",
    "preventionMeasures": [
      "Gunakan Tall-Man: levoDOPA vs levoFLOKSASIN.",
      "Cek riwayat pengobatan rutin pasien geriatri saat rekonsiliasi obat."
    ],
    "recommendedLabel": "LASA Kuning"
  },
  {
    "id": "lasa-olanzapin-ketiapin",
    "drugA": {
      "name": "Olanzapin",
      "tallManName": "OLANzapin",
      "indication": "Antipsikotik atipikal generasi kedua skizofrenia, episode manik bipolar",
      "dosageForm": "Tablet 5 mg, 10 mg / Vial 10 mg"
    },
    "drugB": {
      "name": "Ketiapin",
      "tallManName": "ketiAPIN (Quetiapine)",
      "indication": "Antipsikotik atipikal dengan efek sedasi kuat, depresi bipolar, skizofrenia",
      "dosageForm": "Tablet 100 mg, 200 mg, 300 mg"
    },
    "similarityType": "sound_alike",
    "clinicalRisk": "Rentang dosis berbeda hingga 20 kali lipat (Olanzapin 5-20 mg vs Ketiapin 100-800 mg). Memberikan olanzapin 200 mg akibat tertukar dengan ketiapin menyebabkan koma overdosis antipsikotik akut, hipotensi berat, dan henti napas.",
    "preventionMeasures": [
      "Wajib Tall-Man: OLANzapin vs ketiAPIN.",
      "Waspadai perbedaan potensi dosis miligram saat skrining resep psikiatri."
    ],
    "recommendedLabel": "LASA Kuning"
  },
  {
    "id": "lasa-lamivudin-lamotrigin",
    "drugA": {
      "name": "Lamivudin",
      "tallManName": "lamiVUDIN (3TC)",
      "indication": "Antiretroviral NRTI lini pertama infeksi HIV dan Hepatitis B kronis",
      "dosageForm": "Tablet 150 mg, 300 mg"
    },
    "drugB": {
      "name": "Lamotrigin",
      "tallManName": "lamoTRIgin (Lamictal)",
      "indication": "Antikonvulsan epilepsi fokal/umum dan penstabil mood gangguan bipolar",
      "dosageForm": "Tablet 25 mg, 50 mg, 100 mg"
    },
    "similarityType": "both",
    "clinicalRisk": "Lamotrigin membutuhkan titrasi dosis bertahap sangat lambat. Memulai lamotrigin langsung dengan dosis 150-300 mg (dosis lamivudin) memicu sindrom Stevens-Johnson (SJS) atau Toxic Epidermal Necrolysis (TEN) fatal; sementara ketiadaan lamivudin memicu kegagalan virologi HIV.",
    "preventionMeasures": [
      "Wajib Tall-Man: lamiVUDIN vs lamoTRIgin.",
      "Cek riwayat klinis terapi ARV HIV vs terapi neurologi/bipolar."
    ],
    "recommendedLabel": "LASA Merah"
  }
];

export const EXTENDED_HIGH_ALERT_DRUGS: HighAlertDrug[] = [
  {
    "id": "ha-kalium-fosfat-pekat",
    "name": "Kalium Fosfat Injeksi Konsentrat",
    "tallManName": "KALIUM FOSFAT PEKAT INJEKSI",
    "brandExamples": [
      "Potassium Phosphate Inj"
    ],
    "category": "concentrated_electrolyte",
    "categoryLabel": "Elektrolit Konsentrat Tinggi",
    "riskLevel": "Kritis",
    "highAlertReason": "Mengandung kalium dan fosfat berkonsentrasi sangat tinggi; bolus IV langsung memicu aritmia fatal dan presipitasi kalsium metastatik di organ vital.",
    "storageRules": [
      "Hanya boleh disimpan di Instalasi Farmasi dan ICU/NICU.",
      "Dilarang di bangsal umum; simpan di laci terkunci bertanda merah High-Alert."
    ],
    "administrationAlerts": [
      "Wajib diencerkan dalam pelarut minimal 100-500 mL sebelum diinfuskan.",
      "Periksa kadar kalsium serum sebelum pemberian untuk mencegah presipitasi kalsium-fosfat."
    ],
    "antidoteOrRescue": "Kalsium Glukonat IV untuk stabilisasi membran jika terjadi hiperkalemia akut.",
    "labelColor": "Merah Elektrolit Pekat"
  },
  {
    "id": "ha-kalsium-klorida-10",
    "name": "Kalsium Klorida 10% Injeksi",
    "tallManName": "KALSIUM KLORIDA 10% (CaCl2)",
    "brandExamples": [
      "Calcium Chloride 10% Inj"
    ],
    "category": "concentrated_electrolyte",
    "categoryLabel": "Elektrolit Konsentrat Tinggi",
    "riskLevel": "Kritis",
    "highAlertReason": "Memiliki bioavailabilitas elemental kalsium 3x lipat dibanding kalsium glukonat. Ekstravasasi ke jaringan perifer menyebabkan selulitis nekrotikans kimiawi parah yang membutuhkan amputasi/debridement.",
    "storageRules": [
      "Simpan di troli resusitasi IGD/ICU dengan label merah peringatan iritan vena.",
      "Pisahkan secara tegas dari Kalsium Glukonat 10%."
    ],
    "administrationAlerts": [
      "HANYA boleh diberikan via jalur CVC (Central Venous Catheter) atau saat henti jantung darurat.",
      "Dilarang dicampur satu jalur dengan Natrium Bikarbonat (membentuk endapan batu kapur)."
    ],
    "labelColor": "Merah Elektrolit Pekat"
  },
  {
    "id": "ha-dextrose-40",
    "name": "Dekstrosa 40% (D40%) Injeksi Hipertonik",
    "tallManName": "DEKTROSA 40% (D40%) HIPERTONIK",
    "brandExamples": [
      "D40% Otsuka 25 mL"
    ],
    "category": "concentrated_electrolyte",
    "categoryLabel": "Elektrolit & Larutan Hipertonik",
    "riskLevel": "Tinggi",
    "highAlertReason": "Sangat hiperosmolar (~2.220 mOsm/L). Ekstravasasi memicu nekrosis jaringan, dan pemberian terlalu cepat memicu hiperglikemia hiperosmolar akut serta flebitis.",
    "storageRules": [
      "Simpan di troli emergensi ruang rawat inap dan IGD untuk penanganan syok hipoglikemia.",
      "Beri stiker HIGH ALERT LARUTAN HIPERTONIK."
    ],
    "administrationAlerts": [
      "Injeksi bolus IV lambat melalui vena besar berkanul paten.",
      "Cek gula darah kapiler (GDS) ulang 15 menit pasca penyuntikan."
    ],
    "labelColor": "Merah High Alert"
  },
  {
    "id": "ha-manitol-20",
    "name": "Manitol 20% Infus Hipertonik",
    "tallManName": "MANITOL 20% INFUS",
    "brandExamples": [
      "Manitol 20% Otsuka 250 mL / 500 mL"
    ],
    "category": "concentrated_electrolyte",
    "categoryLabel": "Elektrolit & Larutan Hipertonik",
    "riskLevel": "Tinggi",
    "highAlertReason": "Diuretik osmotik kuat; overdosis atau dehidrasi seluler memicu gagal ginjal akut, edema paru kardiogenik, dan pergeseran elektrolit mematikan.",
    "storageRules": [
      "Simpan pada suhu terkontrol (20-25°C). Bila terbentuk kristal pada suhu dingin, hangatkan botol infus hingga kristal larut sempurna sebelum dipakai.",
      "Wajib gunakan blood set atau selang infus berfilter partikel."
    ],
    "administrationAlerts": [
      "Pantau ketat osmolaritas serum (jangan melebihi 320 mOsm/kg).",
      "Pantau balans cairan, tanda vital, dan fungsi ginjal (kreatinin/ureum)."
    ],
    "labelColor": "Merah High Alert"
  },
  {
    "id": "ha-epinefrin-infus",
    "name": "Epinefrin (Adrenalin) Injeksi & Infus",
    "tallManName": "EPINEFRIN (ADRENALIN) 1 mg/mL",
    "brandExamples": [
      "Epinephrine Inj",
      "Adrenalin Generik"
    ],
    "category": "vasopressor_inotropic",
    "categoryLabel": "Vasopresor & Agonis Adrenergik",
    "riskLevel": "Kritis",
    "highAlertReason": "Kesalahan pengenceran atau rute (bolus IV tanpa pengenceran pada anafilaksis) memicu takikardia ventrikel, infark miokard akut, krisis hipertensi fatal, dan perdarahan serebral.",
    "storageRules": [
      "Simpan di kotak emergensi anafilaksis dan troli henti jantung.",
      "Lindungi dari cahaya dan oksidasi (larutan berwarna merah/kecokelatan wajib dibuang)."
    ],
    "administrationAlerts": [
      "Anafilaksis: Berikan INTRAMUSKULAR (IM) pada paha anterolateral antero-medial tanpa pengenceran (1:1.000).",
      "Henti jantung: Berikan INTRAVENA (IV) 1 mg tiap 3-5 menit.",
      "Syok sepsis / inotropik: Gunakan infus syringe pump via vena sentral dengan pengenceran ketat."
    ],
    "antidoteOrRescue": "Fentolamin (alpha-blocker untuk iskemia perifer) atau Esmolol/Labetalol untuk takiaritmia parah.",
    "labelColor": "Merah High Alert"
  },
  {
    "id": "ha-dopamin-injeksi",
    "name": "Dopamin HCl Injeksi Infus",
    "tallManName": "DOPAMIN HCl 200 mg/5 mL",
    "brandExamples": [
      "Cetadop",
      "Dopac",
      "Dopamin Generik"
    ],
    "category": "vasopressor_inotropic",
    "categoryLabel": "Vasopresor & Agonis Adrenergik",
    "riskLevel": "Kritis",
    "highAlertReason": "Vasokonstriksi perifer kuat dan aritmogenik; ekstravasasi perifer memicu gangren jari ekstremitas yang memerlukan amputasi.",
    "storageRules": [
      "Simpan di Depo ICU/IGD/Kamar Operasi dengan stiker High Alert.",
      "Inkompatibel dengan larutan alkali seperti Natrium Bikarbonat."
    ],
    "administrationAlerts": [
      "Wajib menggunakan syringe pump presisi via jalur vena sentral.",
      "Pantau denyut jantung, EKG kontinu, dan tekanan darah arterial."
    ],
    "antidoteOrRescue": "Infiltrasi Fentolamin mesilat 5-10 mg pada area ekstravasasi.",
    "labelColor": "Merah High Alert"
  },
  {
    "id": "ha-dobutamin-injeksi",
    "name": "Dobutamin HCl Injeksi Infus",
    "tallManName": "DOBUTAMIN HCl 250 mg/5 mL",
    "brandExamples": [
      "Dobutrex",
      "Inotrop",
      "Dobutamin Generik"
    ],
    "category": "vasopressor_inotropic",
    "categoryLabel": "Vasopresor & Agonis Adrenergik",
    "riskLevel": "Tinggi",
    "highAlertReason": "Inotropik positif kuat; dapat memicu takikardia berlebihan, iskemia miokard, dan takiaritmia ventrikel mematikan.",
    "storageRules": [
      "Simpan di ICU/ICCU/Kamar Bedah.",
      "Larutan terkonstitusi dapat mengalami sedikit perubahan warna merah muda akibat oksidasi tanpa kehilangan potensi signifikan dalam 24 jam."
    ],
    "administrationAlerts": [
      "Diberikan via syringe pump infus kontinu.",
      "Titrasikan bertahap sesuai respon cardiac output dan tekanan baji kapiler paru."
    ],
    "labelColor": "Merah High Alert"
  },
  {
    "id": "ha-vasopresin-injeksi",
    "name": "Vasopresin (Pitressin) Injeksi",
    "tallManName": "VASOPRESIN 20 Unit/mL",
    "brandExamples": [
      "Vasopressin Inj",
      "Pitressin"
    ],
    "category": "vasopressor_inotropic",
    "categoryLabel": "Vasopresor & Agonis Adrenergik",
    "riskLevel": "Kritis",
    "highAlertReason": "Vasokonstriktor non-adrenergik poten; dapat menyebabkan iskemia koroner, nekrosis kulit, dan iskemia usus mesenterika bila dosis berlebihan.",
    "storageRules": [
      "Simpan dalam kulkas suhu 2°C - 8°C (beberapa merk stabil pada suhu ruang sesuai brosur pabrik).",
      "Wajib stiker High Alert Merah."
    ],
    "administrationAlerts": [
      "Diberikan pada dosis tetap 0.03 unit/menit untuk syok septik refrakter.",
      "JANGAN melakukan titrasi cepat bolus."
    ],
    "labelColor": "Merah High Alert"
  },
  {
    "id": "ha-nikardipin-injeksi",
    "name": "Nikardipin HCl Injeksi Infus",
    "tallManName": "NIKARDIPIN HCl Injeksi",
    "brandExamples": [
      "Perdipine 10 mg",
      "Blistra",
      "Nicardipine Generik"
    ],
    "category": "vasopressor_inotropic",
    "categoryLabel": "Antihipertensi Krisis Parenteral",
    "riskLevel": "Tinggi",
    "highAlertReason": "Calcium channel blocker IV kerja cepat; penurunan tekanan darah terlalu cepat memicu hipoperfusi serebral, stroke iskemik sekunder, dan takikardia refleks.",
    "storageRules": [
      "Simpan terlindung dari cahaya dalam wadah karton aslinya.",
      "Encerkan dengan D5W atau NaCl 0.9% sebelum digunakan."
    ],
    "administrationAlerts": [
      "Wajib pemantauan tekanan darah berkala tiap 5-15 menit selama titrasi.",
      "Ganti tempat insersi infus tiap 12 jam untuk cegah tromboflebitis perifer."
    ],
    "labelColor": "Merah High Alert"
  },
  {
    "id": "ha-nitrogliserin-injeksi",
    "name": "Nitrogliserin (NTG) Injeksi Infus",
    "tallManName": "NITROGLISERIN (NTG) Injeksi",
    "brandExamples": [
      "Nitrocine",
      "NTG DBL",
      "Glyceryl Trinitrate"
    ],
    "category": "vasopressor_inotropic",
    "categoryLabel": "Vasodilator Kardiovaskular Akut",
    "riskLevel": "Tinggi",
    "highAlertReason": "Vasodilator vena poten; memicu hipotensi berat mendadak, sakit kepala berdenyut hebat, dan kolaps kardiovaskular bila dikonsumsi bersama inhibitor PDE-5 (sildenafil).",
    "storageRules": [
      "Wajib menggunakan tubing/selang infus khusus NON-PVC (karena NTG diserap oleh plastik PVC biasa).",
      "Simpan terlindung dari paparan cahaya langsung."
    ],
    "administrationAlerts": [
      "Titrasi mulai dari 5 mcg/menit dengan pemantauan tekanan darah ketat.",
      "Kontraindikasi mutlak pada infark ventrikel kanan dan pasien pengguna sildenafil/tadalafil dalam 24-48 jam terakhir."
    ],
    "labelColor": "Merah High Alert"
  },
  {
    "id": "ha-enoksaparin-lmwh",
    "name": "Enoksaparin Sodium (LMWH Injeksi)",
    "tallManName": "ENOKSAPARIN SODIUM (LMWH)",
    "brandExamples": [
      "Lovenox 4000 anti-Xa / 0.4 mL",
      "Lovenox 6000"
    ],
    "category": "anticoagulant",
    "categoryLabel": "Antikoagulan Parenteral",
    "riskLevel": "Kritis",
    "highAlertReason": "Pemberian bersamaan dengan anestesi spinal/epidural atau pungsi lumbal berisiko tinggi memicu hematoma epidural spinal yang berujung pada kelumpuhan permanen (paraplegia).",
    "storageRules": [
      "Simpan pada suhu ruang sejuk (< 25°C), jangan dibekukan.",
      "Spuit prefilled siap pakai jangan dibuang gelembung udaranya (untuk memastikan seluruh dosis masuk SC)."
    ],
    "administrationAlerts": [
      "Injeksi HANYA secara SUBKUTAN (SC) dalam pada dinding perut anterolateral/posterolateral.",
      "Wajib hentikan minimal 12-24 jam sebelum prosedur anestesi spinal/epidural bedah."
    ],
    "antidoteOrRescue": "Protamin Sulfat IV (menetralkan sebagian aktivitas anti-Xa ~60%).",
    "labelColor": "Merah High Alert"
  },
  {
    "id": "ha-warfarin-tablet",
    "name": "Warfarin Sodium Tablet",
    "tallManName": "WARFARIN SODIUM Tablet",
    "brandExamples": [
      "Simarc-2",
      "Warfarin Generik 2 mg"
    ],
    "category": "anticoagulant",
    "categoryLabel": "Antikoagulan Oral Risiko Tinggi",
    "riskLevel": "Kritis",
    "highAlertReason": "Rentang terapeutik sempit (target INR 2.0 - 3.0). Dosis berlebih memicu perdarahan intrakranial fatal; dosis kurang memicu stroke emboli atau trombosis katup prostetik.",
    "storageRules": [
      "Simpan dalam wadah tertutup rapat terlindung cahaya.",
      "Edukasi pasien kartu monitoring terapi warfarin."
    ],
    "administrationAlerts": [
      "Wajib cek nilai INR berkala secara teratur.",
      "Hindari perubahan drastis konsumsi makanan kaya vitamin K (bayam, brokoli, kangkung)."
    ],
    "antidoteOrRescue": "Vitamin K1 (Fitomenadion) oral/IV lambat + Prothrombin Complex Concentrate (PCC) atau FFP.",
    "labelColor": "Merah High Alert"
  },
  {
    "id": "ha-alteplase-rtpa",
    "name": "Alteplase (rt-PA) / Fibrinolitik Trombolitik",
    "tallManName": "ALTEPLASE (rt-PA) Injeksi",
    "brandExamples": [
      "Actilyse 50 mg"
    ],
    "category": "anticoagulant",
    "categoryLabel": "Agen Trombolitik & Fibrinolitik",
    "riskLevel": "Kritis",
    "highAlertReason": "Melisiskan bekuan darah secara sistemik; risiko komplikasi perdarahan intraserebral fatal (ICH) hingga 6% pada terapi stroke iskemik akut.",
    "storageRules": [
      "Simpan di kulkas 2°C - 8°C terlindung cahaya.",
      "Setelah dilarutkan, larutan stabil hingga 8 jam pada suhu kulkas (segera gunakan)."
    ],
    "administrationAlerts": [
      "Wajib konfirmasi CT-scan kepala non-kontras memastikan TIDAK ADA perdarahan intrakranial sebelum pemberian.",
      "Dosis stroke iskemik 0.9 mg/kgBB (10% bolus dalam 1 menit, 90% sisanya infus 60 menit). Maksimal 90 mg."
    ],
    "antidoteOrRescue": "Asam Traneksamat IV + Cryoprecipitate / Fibrinogen concentrate.",
    "labelColor": "Merah High Alert"
  },
  {
    "id": "ha-doac-antikoagulan",
    "name": "Direct Oral Anticoagulants (DOAC: Rivaroxaban, Apixaban, Dabigatran)",
    "tallManName": "RIVAROXABAN / APIXABAN / DABIGATRAN",
    "brandExamples": [
      "Xarelto",
      "Eliquis",
      "Pradaxa"
    ],
    "category": "anticoagulant",
    "categoryLabel": "Antikoagulan Oral Lanjutan (DOAC)",
    "riskLevel": "Tinggi",
    "highAlertReason": "Risiko perdarahan mayor saluran cerna dan intrakranial tanpa monitoring INR rutin; memerlukan penyesuaian ketat pada penurunan fungsi ginjal.",
    "storageRules": [
      "Dabigatran (Pradaxa) wajib disimpan dalam botol aslinya yang mengandung desikan (peka kelembapan). Jangan dipindahkan ke kotak obat puyer/blister terbuka."
    ],
    "administrationAlerts": [
      "Rivaroxaban dosis 15 mg dan 20 mg WAJIB diminum bersama makanan untuk penyerapan optimal.",
      "Periksa klirens kreatinin berkala sebelum dan selama terapi."
    ],
    "antidoteOrRescue": "Idarucizumab (Praxbind) untuk Dabigatran; Andexanet alfa untuk Rivaroxaban/Apixaban.",
    "labelColor": "Merah High Alert"
  },
  {
    "id": "ha-propofol-emulsi",
    "name": "Propofol Injeksi Emulsi",
    "tallManName": "PROPOFOL 1% (Emulsi Lemak)",
    "brandExamples": [
      "Diprivan",
      "Recofol",
      "Fresofol",
      "Propofol Generik"
    ],
    "category": "sedative_anesthetic",
    "categoryLabel": "Anestesi & Sedatif Intravena",
    "riskLevel": "Kritis",
    "highAlertReason": "Memicu depresi pernapasan berat, apneu seketika, dan hipotensi akut. Penggunaan infus jangka panjang dosis tinggi (> 4-5 mg/kg/jam > 48 jam) memicu Propofol Infusion Syndrome (PRIS) yang mematikan.",
    "storageRules": [
      "Hanya boleh disimpan di Kamar Operasi (OK) dan ICU.",
      "Sediaan emulsi lemak adalah media subur pertumbuhan bakteri: vial yang telah dibuka wajib dibuang setelah maksimal 12 jam pemakaian."
    ],
    "administrationAlerts": [
      "HANYA boleh diberikan oleh tenaga medis yang terlatih dalam intubasi dan airway management lanjutan.",
      "Pantau saturasi oksigen, kapnografi, dan EKG kontinu."
    ],
    "labelColor": "Merah High Alert"
  },
  {
    "id": "ha-ketamin-injeksi",
    "name": "Ketamin HCl Injeksi",
    "tallManName": "KETAMIN HCl Injeksi",
    "brandExamples": [
      "Ketalar",
      "KTM",
      "Ivanes"
    ],
    "category": "sedative_anesthetic",
    "categoryLabel": "Anestesi Disosiatif & Analgesik Poten",
    "riskLevel": "Kritis",
    "highAlertReason": "Anestesi disosiatif poten; memicu hipertensi, takikardia, laringospasme, peningkatan tekanan intrakranial, serta emergence delirium (halusinasi teror saat bangun).",
    "storageRules": [
      "Wajib disimpan di lemari obat bius berkunci ganda (Kamar Operasi/ICU/IGD).",
      "Pencatatan mutasi penggunaan ketat."
    ],
    "administrationAlerts": [
      "Selalu siapkan peralatan resusitasi jalan napas dan suction.",
      "Dapat dikombinasikan dengan benzodiazepin dosis rendah untuk meminimalkan halusinasi emergence."
    ],
    "labelColor": "Merah High Alert"
  },
  {
    "id": "ha-deksmedetomidin-infus",
    "name": "Deksmedetomidin HCl (Precedex)",
    "tallManName": "DEKSMEDETOMIDIN (Precedex)",
    "brandExamples": [
      "Precedex 100 mcg/mL"
    ],
    "category": "sedative_anesthetic",
    "categoryLabel": "Sedatif Agonis Alfa-2 Sentral",
    "riskLevel": "Tinggi",
    "highAlertReason": "Agonis alfa-2 adrenergik sentral selektif; bolus cepat atau dosis tinggi memicu bradikardia berat ekstrim, henti sinus (sinus arrest), dan hipotensi persisten.",
    "storageRules": [
      "Simpan di Depo ICU / ICCU / OK.",
      "Encerkan dalam NaCl 0.9% menjadi 4 mcg/mL sebelum diinfuskan."
    ],
    "administrationAlerts": [
      "Hindari pemberian bolus loading cepat pada pasien dengan konduksi jantung lambat.",
      "Pasien tetap kooperatif dan mudah dibangunkan (sedasi sadar)."
    ],
    "antidoteOrRescue": "Atropin Sulfat untuk bradikardia berat simtomatik.",
    "labelColor": "Merah High Alert"
  },
  {
    "id": "ha-midazolam-injeksi",
    "name": "Midazolam Injeksi Parenteral",
    "tallManName": "MIDAZOLAM Injeksi 5 mg/5 mL & 15 mg/3 mL",
    "brandExamples": [
      "Miloz",
      "Sedacum",
      "Midazolam Generik"
    ],
    "category": "sedative_anesthetic",
    "categoryLabel": "Benzodiazepin Sedasi Akut",
    "riskLevel": "Kritis",
    "highAlertReason": "Memicu depresi pernapasan dan henti napas akut, terutama bila dikombinasikan dengan analgetik opioid (sinergi depresi SSP mematikan).",
    "storageRules": [
      "Wajib disimpan di Lemari Psikotropika dengan kunci ganda sesuai Permenkes No. 5/2023.",
      "Pisahkan kekuatan 1 mg/mL dari 5 mg/mL."
    ],
    "administrationAlerts": [
      "Injeksi IV wajib diberikan sangat lambat (titrasi bertahap 1-2 menit).",
      "Peralatan bagging/ventilasi oksigen wajib tersedia di samping pasien."
    ],
    "antidoteOrRescue": "Flumazenil Injeksi 0.2 mg IV lambat (antagonis reseptor benzodiazepin spesifik).",
    "labelColor": "Merah High Alert"
  },
  {
    "id": "ha-metotreksat-oral-parenteral",
    "name": "Metotreksat (MTX) Oral & Injeksi",
    "tallManName": "METOTREKSAT (MTX)",
    "brandExamples": [
      "Methotrexate Ebewe",
      "Emthexate"
    ],
    "category": "cytotoxic",
    "categoryLabel": "Sitostatika & Antimetabolit",
    "riskLevel": "Kritis",
    "highAlertReason": "Kematian terjadi berulang kali karena pasien mengonsumsi metotreksat oral SETIAP HARI padahal aturan pakainya adalah SEKALI SEMINGGU untuk indikasi autoimun (rheumatoid arthritis/psoriasis). Hal ini menyebabkan pansitopenia fatal dan ulserasi mukosa masif.",
    "storageRules": [
      "Simpan terpisah di farmasi; tempel label peringatan: \"PERINGATAN: DIMINUM HANYA 1 KALI SEMINGGU\".",
      "Sediaan injeksi dosis tinggi disimpan di cleanroom sitostatika."
    ],
    "administrationAlerts": [
      "Apoteker WAJIB mengonfirmasi hari spesifik minum obat (misal: \"Setiap hari Senin pagi saja\").",
      "Pastikan terapi rescue Asam Folinat (Leucovorin) tersedia pada protokol kemoterapi dosis tinggi."
    ],
    "antidoteOrRescue": "Leucovorin (Kalsium Folinat) rescue segera + Glukarpidase (Voraxaze) untuk klirens cepat.",
    "labelColor": "Ungu Sitotoksik"
  },
  {
    "id": "ha-vinkristin-intravena-only",
    "name": "Vinkristin Sulfat Injeksi",
    "tallManName": "VINKRISTIN SULFAT (HANYA IV)",
    "brandExamples": [
      "Vincristine Sulfat Kalbe",
      "Vincristine DBL"
    ],
    "category": "cytotoxic",
    "categoryLabel": "Sitostatika Vinka Alkaloid",
    "riskLevel": "Kritis",
    "highAlertReason": "FATALITAS MUTLAK: Injeksi vinkristin secara intratekal (ke dalam cairan serebrospinal sumsum tulang belakang) menyebabkan ensefalopati ascending paralisis mematikan yang 100% FATAL atau kerusakan neurologis permanen mengerikan.",
    "storageRules": [
      "Hanya disiapkan di Cleanroom Sitostatika Farmasi.",
      "DILARANG KERAS mengemas vinkristin dalam spuit biasa yang menyerupai obat intratekal (metotreksat intratekal). Kemas selalu dalam mini-bag infus 50 mL NaCl 0.9%."
    ],
    "administrationAlerts": [
      "Wajib diberi label peringatan merah menyala: \"HANYA UNTUK INTRAVENA - FATAL BILA DIBERIKAN SECARA INTRATEKAL\".",
      "Jangan pernah menyerahkan vinkristin bersamaan dengan obat intratekal dalam satu wadah transfer."
    ],
    "labelColor": "Ungu Sitotoksik"
  },
  {
    "id": "ha-doksorubisin-vesikan",
    "name": "Doksorubisin HCl Injeksi",
    "tallManName": "DOKSORUBISIN HCl (Vesikan Kanker)",
    "brandExamples": [
      "Adrim",
      "Doxorubicin DBL",
      "Kemodoxorubicin"
    ],
    "category": "cytotoxic",
    "categoryLabel": "Sitostatika Antrasiklin",
    "riskLevel": "Kritis",
    "highAlertReason": "Agen vesikan poten; ekstravasasi perifer memicu nekrosis jaringan ulseratif dalam dan pelepasan tendon. Bersifat kardiotoksik dengan batasan kumulatif seumur hidup 450-550 mg/m2.",
    "storageRules": [
      "Simpan di cleanroom onkologi suhu 2°C - 8°C terlindung cahaya.",
      "Wadah limbah sitotoksik ungu khusus."
    ],
    "administrationAlerts": [
      "Injeksi IV lambat via jalur infus yang menetes lancar, periksa kepatenan darah tiap 2-3 mL bolus.",
      "Bila terjadi ekstravasasi, segera kompres dingin kering dan berikan antidot Deksrazoksan."
    ],
    "antidoteOrRescue": "Deksrazoksan (Savene / Totect) infus IV sistemik untuk ekstravasasi antrasiklin.",
    "labelColor": "Ungu Sitotoksik"
  },
  {
    "id": "ha-digoksin-sempit",
    "name": "Digoksin Tablet & Injeksi",
    "tallManName": "DIGOKSIN (Indeks Terapi Sempit)",
    "brandExamples": [
      "Fargoxin 0.5 mg/2 mL",
      "Digoxin Tablet 0.25 mg"
    ],
    "category": "other_high_alert",
    "categoryLabel": "Glikosida Jantung Indeks Sempit",
    "riskLevel": "Kritis",
    "highAlertReason": "Rentang terapeutik serum sangat sempit (0.5 - 0.9 ng/mL). Toksisitas digitalis memicu blok atrioventrikular derajat tiga, disritmia ventrikel mematikan, mual muntah, dan halo penglihatan kuning (xanthopsia). Terutama berbahaya bila disertai hipokalemia.",
    "storageRules": [
      "Simpan di rak obat kardiovaskular khusus bertanda High Alert indeks terapi sempit.",
      "Pisahkan sediaan tablet dewasa dan pediatrik."
    ],
    "administrationAlerts": [
      "Periksa denyut nadi apikal selama 1 menit penuh sebelum pemberian (tahan obat jika nadi < 60x/menit).",
      "Wajib periksa kadar kalium darah (hipokalemia memperparah toksisitas digoksin)."
    ],
    "antidoteOrRescue": "Digoxin Immune Fab (DigiFab / Digibind) fragmen antibodi spesifik penawar toksisitas.",
    "labelColor": "Merah High Alert"
  },
  {
    "id": "ha-amiodaron-injeksi",
    "name": "Amiodaron HCl Injeksi Infus",
    "tallManName": "AMIODARON HCl Injeksi",
    "brandExamples": [
      "Cordarone 150 mg/3 mL",
      "Kendaron",
      "Tiaryt"
    ],
    "category": "other_high_alert",
    "categoryLabel": "Antiaritmia Kelas III Parenteral",
    "riskLevel": "Kritis",
    "highAlertReason": "Antiaritmia poten; memicu hipotensi berat akut, bradikardia simtomatik, flebitis vena perifer berat, dan pemanjangan interval QTc yang memicu Torsades de Pointes.",
    "storageRules": [
      "Simpan pada suhu kamar terlindung cahaya.",
      "Inkompatibel dengan pelarut NaCl 0.9% pada konsentrasi < 0.6 mg/mL (wajib dilarutkan hanya dalam D5W Dekstrosa 5%)."
    ],
    "administrationAlerts": [
      "Konsentrasi infus > 2 mg/mL WAJIB diberikan melalui jalur vena sentral (CVC).",
      "Wajib menggunakan selang infus in-line filter 0.2 mikron."
    ],
    "antidoteOrRescue": "Magnesium Sulfat 20% IV bolus lambat untuk penanganan aritmia Torsades de Pointes.",
    "labelColor": "Merah High Alert"
  },
  {
    "id": "ha-amfoterisin-b-deoksikolat",
    "name": "Amfoterisin B Deoksikolat (Non-Lipid)",
    "tallManName": "AMFOTERISIN B DEOKSIKOLAT (KONVENSIONAL)",
    "brandExamples": [
      "Fungizone 50 mg"
    ],
    "category": "other_high_alert",
    "categoryLabel": "Antijamur Sistemik Nefrotoksik Berat",
    "riskLevel": "Kritis",
    "highAlertReason": "Dosis harian maksimal Amfoterisin B konvensional adalah 1 - 1.5 mg/kgBB. Tertukar dengan Amfoterisin B formulasi lipid (AmBisome dosis 3-5 mg/kgBB) menyebabkan overdosis 3-5x lipat yang MEMICU GAGAL GINJAL AKUT ANURIA DAN HENTI JANTUNG FATAL.",
    "storageRules": [
      "Simpan di lemari pendingin 2°C - 8°C terlindung cahaya.",
      "Dilarang dilarutkan dengan cairan mengandung elektrolit (NaCl 0.9% / Ringer Laktat) karena langsung membentuk endapan presipitasi keruh. Wajib HANYA dilarutkan dengan Dextrose 5% ber-pH > 4.2."
    ],
    "administrationAlerts": [
      "Wajib premedikasi antipiretik dan antihistamin untuk mencegah reaksi infusional \"shake and bake\" (menggigil demam hebat).",
      "Lakukan tes dosis (test dose) 1 mg dalam 20 mL D5W selama 20-30 menit sebelum dosis penuh."
    ],
    "labelColor": "Merah High Alert"
  },
  {
    "id": "ha-pantoprazol-omeprazol-iv",
    "name": "Inhibitor Pompa Proton (PPI) Infus Kontinu Dosis Tinggi",
    "tallManName": "PANTOPRAZOL / ESOMEPRAZOL IV KONTINU",
    "brandExamples": [
      "Pantozol IV",
      "Nexium IV",
      "Pumpitor IV"
    ],
    "category": "other_high_alert",
    "categoryLabel": "Obat Saluran Cerna Dosis Tinggi Kontinu",
    "riskLevel": "Tinggi",
    "highAlertReason": "Protokol perdarahan saluran cerna atas masif (UGIB) membutuhkan bolus 80 mg dilanjutkan infus kontinu 8 mg/jam selama 72 jam. Kesalahan titrasi kecepatan infus atau salah pelarut menyebabkan inaktivasi asam dan perdarahan berulang.",
    "storageRules": [
      "Simpan terlindung dari paparan cahaya.",
      "Setelah direkonstitusi dengan NaCl 0.9%, stabil maksimal 12 jam pada suhu ruang."
    ],
    "administrationAlerts": [
      "Wajib menggunakan syringe pump atau infusion pump dengan pemantauan kepatenan akses infus.",
      "Bilas jalur sebelum dan sesudah dengan NaCl 0.9% untuk mencegah presipitasi dengan obat asam lain."
    ],
    "labelColor": "Merah High Alert"
  },
  {
    "id": "ha-larutan-dialisis-peritoneal",
    "name": "Larutan Dialisis Peritoneal (CAPD Dianeal)",
    "tallManName": "LARUTAN DIALISIS PERITONEAL (CAPD)",
    "brandExamples": [
      "Dianeal 1.5%",
      "Dianeal 2.5%",
      "Dianeal 4.25%"
    ],
    "category": "concentrated_electrolyte",
    "categoryLabel": "Larutan Dialisis Hipertonik",
    "riskLevel": "Tinggi",
    "highAlertReason": "Mengandung konsentrasi dekstrosa tinggi sebagai agen osmotik ultrafiltrasi. Kesalahan memilih konsentrasi kantong (misal menggunakan 4.25% padahal instruksi 1.5%) memicu dehidrasi berat, syok hipovolemik, dan hiperglikemia ekstrim.",
    "storageRules": [
      "Simpan pada suhu ruang bersih dan kering.",
      "Hangatkan kantong dialisis hanya menggunakan pemanas khusus (heating pad), DILARANG menggunakan microwave atau merendam dalam air."
    ],
    "administrationAlerts": [
      "Wajib teknik aseptik ketat tanpa sentuh (non-touch technique) untuk mencegah peritonitis dialisis.",
      "Periksa kejernihan cairan effluent yang dikeluarkan (cairan keruh menandakan peritonitis akut)."
    ],
    "labelColor": "Merah High Alert"
  },
  {
    "id": "ha-fentanil-injeksi-iv",
    "name": "Fentanil Sitrat Injeksi IV",
    "tallManName": "FENTANIL SITRAT 0.05 mg/mL (50 mcg/mL)",
    "brandExamples": ["Fentanyl Hameln", "Durogesic Inj", "Fentanyl Generik"],
    "category": "opioid",
    "categoryLabel": "Narkotika & Analgesik Opioid Kuat",
    "riskLevel": "Kritis",
    "highAlertReason": "Potensi analgesik 100x lebih kuat dari morfin. Injeksi bolus IV cepat dapat memicu rigiditas dinding dada ('wooden chest syndrome') akut yang membuat pasien tidak dapat diventilasi bahkan dengan bag-valve-mask, serta apnea henti napas instan.",
    "storageRules": [
      "Wajib disimpan dalam Lemari Khusus Narkotika berkunci ganda.",
      "Hanya didistribusikan ke Kamar Operasi, ICU, dan IGD dengan kartu kendali per ampul."
    ],
    "administrationAlerts": [
      "Injeksi IV lambat minimal selama 1-2 menit.",
      "Peralatan intubasi, bag-valve-mask, suction, dan pelemas otot harus siap di sisi ranjang.",
      "Wajib independent double-check dosis mcg vs mg."
    ],
    "antidoteOrRescue": "Nalokson HCl Injeksi 0.4 mg IV (titrasi bertahap) dan pelumpuh otot suksinilkolin jika terjadi wooden chest syndrome.",
    "labelColor": "Merah High Alert"
  },
  {
    "id": "ha-remifentanil-infus",
    "name": "Remifentanil HCl Injeksi Infus TCI",
    "tallManName": "REMIFENTANIL HCl 1 mg / 2 mg",
    "brandExamples": ["Ultiva", "Remifentanil Generik"],
    "category": "opioid",
    "categoryLabel": "Narkotika & Analgesik Opioid Kuat",
    "riskLevel": "Kritis",
    "highAlertReason": "Opioid ultra-short acting dengan metabolisme esterase darah sangat cepat (konstanta waktu paruh eliminasi 3-10 menit). Penghentian infus mendadak menyebabkan hilangnya analgesia secara instan (pasien menjerit kesakitan hebat), sebaliknya salah laju infus memicu bradikardia berat, asistol, dan depresi napas total.",
    "storageRules": [
      "Simpan di lemari narkotika kamar operasi berakses khusus dokter spesialis anestesi.",
      "Rekonstitusi dengan Aquabidest atau NaCl 0.9% stabil maksimal 24 jam."
    ],
    "administrationAlerts": [
      "HANYA diberikan via Target-Controlled Infusion (TCI) pump atau syringe pump terkunci presisi tinggi.",
      "Dilarang menggunakan jalur infus yang sama dengan transfusi darah tanpa bilasan tuntas.",
      "Rencanakan analgesia transisi sebelum infus remifentanil dihentikan pasca-operasi."
    ],
    "antidoteOrRescue": "Nalokson HCl Injeksi dan Atropin Sulfat Injeksi untuk bradikardia berat.",
    "labelColor": "Merah High Alert"
  },
  {
    "id": "ha-rokuronium-injeksi",
    "name": "Rokuronium Bromida Injeksi",
    "tallManName": "ROKURONIUM BROMIDA 50 mg/5 mL",
    "brandExamples": ["Esmeron", "Roculax", "Rokuronium Generik"],
    "category": "nmba",
    "categoryLabel": "Pelemas Otot Rangka (NMBA)",
    "riskLevel": "Kritis",
    "highAlertReason": "Pelemas otot non-depolarisasi onset cepat (60 detik) untuk intubasi trakea darurat (RSI). Melumpuhkan seluruh otot sadar termasuk diafragma tanpa memberikan efek sedasi atau analgesik sedikitpun (pasien sadar tetapi lumpuh dan sesak napas total jika diberikan tanpa anestesi).",
    "storageRules": [
      "Simpan di lemari pendingin (2-8°C). Di luar pendingin stabil maksimal 12 minggu pada suhu kamar (maks 30°C).",
      "Labeli boks dengan stiker merah menyala 'OBAT PARALISIS OTOT'."
    ],
    "administrationAlerts": [
      "DILARANG KERAS disuntikkan sebelum agen induksi sedasi/anestesi intravena telah bekerja penuh.",
      "Mesin anestesi, pipa endotrakeal (ETT), dan ventilator mekanik WAJIB siap dan teruji sebelum pemberian.",
      "Lakukan pemantauan blokade neuromuskular (Train-of-Four / TOF monitor)."
    ],
    "antidoteOrRescue": "Sugammadex (Bridion) Injeksi 2-16 mg/kgBB (antidot pembalik spesifik) atau kombinasi Neostigmin + Sulfas Atropin.",
    "labelColor": "Merah NMBA Paralisis"
  },
  {
    "id": "ha-suksinilkolin-chloride",
    "name": "Suksinilkolin (Suksametonium Klorida) Injeksi",
    "tallManName": "SUKSINILKOLIN KLORIDA 100 mg/2 mL",
    "brandExamples": ["Quelicin", "Scoline", "Suksametonium Generik"],
    "category": "nmba",
    "categoryLabel": "Pelemas Otot Rangka (NMBA)",
    "riskLevel": "Kritis",
    "highAlertReason": "Satu-satunya NMBA depolarisasi klinik; memicu fasikulasi otot masif yang melepaskan kalium intraseluler ke sirkulasi. Pada pasien luka bakar luas, trauma remuk (crush injury), sepsis, atau denervasi saraf, dapat memicu lonjakan hiperkalemia katastrofik mendadak dan asistol jantung.",
    "storageRules": [
      "Simpan pada suhu 2-8°C di troli intubasi emergensi IGD/OK.",
      "Beri label peringatan 'KONTRAINDIKASI LUKA BAKAR / CRUSH INJURY'."
    ],
    "administrationAlerts": [
      "Periksa riwayat alergi keluarga terhadap Hipertermia Maligna (Malignant Hyperthermia).",
      "Cek kadar kalium serum pra-tindakan bila memungkinkan.",
      "Pastikan Dantrolene Sodium tersedia di instalasi farmasi untuk kegawatdaruratan hipertermia maligna."
    ],
    "antidoteOrRescue": "Dantrolene Sodium Injeksi (khusus krisis hipertermia maligna) dan Kalsium Glukonat untuk aritmia hiperkalemik.",
    "labelColor": "Merah NMBA Paralisis"
  },
  {
    "id": "ha-dextrose-50-injeksi",
    "name": "Dekstrosa 50% (D50%) Injeksi Bolus Hipertonik",
    "tallManName": "DEKTROSA 50% (D50%) EKSTRIM HIPEROSMOLAR",
    "brandExamples": ["D50% Otsuka 25 mL / 50 mL"],
    "category": "concentrated_electrolyte",
    "categoryLabel": "Elektrolit & Larutan Hipertonik",
    "riskLevel": "Tinggi",
    "highAlertReason": "Larutan sangat hiperosmolar (~2.775 mOsm/L). Ekstravasasi ke jaringan subkutan memicu spasme vena, tromboflebitis obliterans, ulkus nekrosis jaringan parah hingga amputasi ekstremitas.",
    "storageRules": [
      "Simpan di troli emergensi ruang rawat inap dan IGD dengan laci khusus hipoglikemia.",
      "Wajib lencana label merah 'LARUTAN SANGAT HIPERTONIK'."
    ],
    "administrationAlerts": [
      "Penyuntikan HANYA melalui kanul vena besar paten yang telah diaspirasi darah balik bebas hambatan.",
      "Bilas jalur infus dengan NaCl 0.9% minimal 10-20 mL setelah pemberian D50% selesai.",
      "Periksa GDS ulang 15 menit pasca pemberian."
    ],
    "antidoteOrRescue": "Infiltrasi Hialuronidase dan kompres hangat bila terjadi ekstravasasi ke jaringan lunak.",
    "labelColor": "Merah Elektrolit Pekat"
  },
  {
    "id": "ha-natrium-nitroprusida",
    "name": "Natrium Nitroprusida Injeksi Infus",
    "tallManName": "NATRIUM NITROPRUSIDA 50 mg/vial",
    "brandExamples": ["Nipride", "Nitropress"],
    "category": "vasopressor_inotropic",
    "categoryLabel": "Vasodilator Krisis Kardiovaskular Akut",
    "riskLevel": "Kritis",
    "highAlertReason": "Vasodilator arteri-vena poten kerja ultra-cepat. Penurunan tekanan darah terjadi dalam hitungan detik; kelebihan dosis memicu hipotensi kolaps katastrofik dan metabolisme molekulnya menghasilkan metabolit toksik Sianida dan Tiosianat yang mematikan.",
    "storageRules": [
      "Sediaan vial serbuk dan larutan infus SANGAT PEKA CAHAYA; wajib dibungkus aluminium foil pelindung kedap cahaya saat diinfuskan.",
      "Larutan yang berubah warna menjadi biru/hijau tua menandakan degradasi sianida total dan wajib segera dibuang."
    ],
    "administrationAlerts": [
      "Wajib monitoring tekanan darah arteri invasif (Arterial Line kontinu).",
      "Infus HANYA melalui syringe pump terkalibrasi ketat.",
      "Batasi durasi infus maksimal 48-72 jam untuk mencegah akumulasi keracunan tiosianat/sianida."
    ],
    "antidoteOrRescue": "Natrium Tiosulfat 25% atau Hidroksokobalamin (Cyanokit) jika timbul tanda asidosis metabolik toksisitas sianida.",
    "labelColor": "Merah High Alert"
  },
  {
    "id": "ha-cisatracurium-injeksi",
    "name": "Cisatracurium Besylate Injeksi",
    "tallManName": "CISATRACURIUM BESYLATE 2 mg/mL & 10 mg/mL",
    "brandExamples": ["Nimbex", "Cisatracurium Generik"],
    "category": "nmba",
    "categoryLabel": "Pelemas Otot Rangka (NMBA)",
    "riskLevel": "Kritis",
    "highAlertReason": "Pelemas otot non-depolarisasi dengan jalur eliminasi organ-independen (Hofmann elimination). Sering digunakan di ICU untuk ARDS berat; paralisis tanpa ventilator menyebabkan kematian anoksik dalam waktu 3-5 menit.",
    "storageRules": [
      "Wajib disimpan pada suhu dingin 2-8°C terlindung dari cahaya.",
      "Setelah dikeluarkan dari kulkas pada suhu kamar, harus digunakan dalam waktu 21 hari."
    ],
    "administrationAlerts": [
      "Wajib terpasang ventilator mekanik dengan alarm apnea aktif sebelum infus dimulai.",
      "Gunakan sedasi kontinu adekuat (RASS -4 hingga -5) untuk mencegah teror paralisis sadar.",
      "Lakukan tes stimulasi saraf perifer (TOF) setiap shift."
    ],
    "antidoteOrRescue": "Neostigmin Metilsulfat dikombinasikan dengan Atropin Sulfat.",
    "labelColor": "Merah NMBA Paralisis"
  },
  {
    "id": "ha-etomidat-injeksi",
    "name": "Etomidat Emulsi Injeksi",
    "tallManName": "ETOMIDAT EMULSI 20 mg/10 mL",
    "brandExamples": ["Hypnomidate", "Etomidat Lipuro"],
    "category": "sedative_anesthetic",
    "categoryLabel": "Anestesi & Sedatif Intravena",
    "riskLevel": "Tinggi",
    "highAlertReason": "Agen induksi anestesi IV yang ramah stabilitas hemodinamik jantung, namun memiliki efek samping kritis menghambat enzim 11-beta-hidroksilase steroidogenesis adrenal, memicu insufisiensi adrenal akut (krisis Addisonian) bila diberikan secara infus kontinu.",
    "storageRules": [
      "Simpan pada suhu ruang terkontrol (15-25°C), jangan dibekukan.",
      "Kemasan ampul emulsi bebas pengawet harus segera digunakan setelah dibuka."
    ],
    "administrationAlerts": [
      "HANYA untuk bolus induksi anestesi tunggal; DILARANG KERAS untuk sedasi infus jangka panjang di ICU.",
      "Sering memicu mioklonus otot saat induksi yang dapat dicegah dengan premedikasi opioid/fentanil.",
      "Siapkan hidrokortison IV jika dicurigai timbul supresi adrenal pada pasien sepsis."
    ],
    "antidoteOrRescue": "Hidrokortison Injeksi untuk substitusi glukokortikoid adrenal.",
    "labelColor": "Merah High Alert"
  },
  {
    "id": "ha-bleomisin-sitostatika",
    "name": "Bleomisin Sulfat Injeksi Sitostatika",
    "tallManName": "BLEOMISIN SULFAT 15.000 IU (15 Unit)",
    "brandExamples": ["Blenamax", "Bleocin", "Bleomycin Generik"],
    "category": "cytotoxic",
    "categoryLabel": "Sitostatika & Bahan Toksik Kanker",
    "riskLevel": "Kritis",
    "highAlertReason": "Antibiotik sitotoksik pemecah DNA; memiliki toksisitas spesifik mematikan berupa pneumonitis interstisial dan Fibrosis Paru Progresif Ireversibel. Dosis kumulatif seumur hidup dibatasi ketat maksimal 400 Unit; paparan oksigen fraksi tinggi (FiO2 > 30%) dapat memicu reaksi inflamasi paru akut mematikan.",
    "storageRules": [
      "Simpan di lemari pendingin (2-8°C) di ruang penyiapan obat sitostatika terpusat (BSC).",
      "Pencatatan dosis kumulatif seumur hidup wajib tercantum di rekam medis onkologi."
    ],
    "administrationAlerts": [
      "Lakukan tes fungsi paru (DLCO dan spirometri) sebelum memulai siklus terapi.",
      "Hindari pemberian oksigen konsentrasi tinggi perioperatif jika pasien menjalani pembedahan di masa depan.",
      "Gunakan APD sitostatika lengkap (hazardous drug PPE) saat pencampuran."
    ],
    "antidoteOrRescue": "Kortikosteroid dosis tinggi (Metilprednisolon IV) untuk pneumonitis stadium awal.",
    "labelColor": "Ungu Sitotoksik"
  },
  {
    "id": "ha-paklitaksel-sitostatika",
    "name": "Paklitaksel Injeksi Infus Sitostatika",
    "tallManName": "PAKLITAKSEL INJEKSI 30 mg / 100 mg / 300 mg",
    "brandExamples": ["Taxol", "Paxus", "Paclitaxel Generik"],
    "category": "cytotoxic",
    "categoryLabel": "Sitostatika & Bahan Toksik Kanker",
    "riskLevel": "Kritis",
    "highAlertReason": "Agen antineoplastik taksan; zat pembawanya (Cremophor EL / Polyoxyl 35 Castor Oil) memicu pelepasan histamin masif dan syok anafilaksis fatal pada 10-15 menit pertama infus. Selain itu, ekstravasasi vesikan memicu nekrosis kulit parah.",
    "storageRules": [
      "Simpan pada suhu 15-25°C terlindung dari cahaya.",
      "DILARANG menggunakan wadah infus PVC (polyvinyl chloride) karena Cremophor EL melarutkan plasticizer DEHP yang sangat toksik. Gunakan botol kaca atau kantong non-PVC (Polyolefin/EVA)."
    ],
    "administrationAlerts": [
      "WAJIB PREMEDIKASI 3 KELAS OBAT 30 menit sebelum infus: Deksametason IV 20 mg + Difenhidramin IV 50 mg + Ranitidin/Famotidin IV.",
      "WAJIB menggunakan selang infus khusus non-PVC dengan In-Line Microfilter 0.22 mikron.",
      "Pantau tanda vital ketat setiap 15 menit pada 1 jam pertama infus."
    ],
    "antidoteOrRescue": "Epinefrin 1:1.000 IM dan Hidrokortison IV jika terjadi syok anafilaksis.",
    "labelColor": "Ungu Sitotoksik"
  }
];

export const EXTENDED_OOT_PRECURSOR_DRUGS: OotPrecursorDrug[] = [
  {
    "id": "oot-clozapine",
    "name": "Klosapin (Clozapine)",
    "type": "oot",
    "typeLabel": "Obat-Obat Tertentu (OOT)",
    "activeSubstance": "Clozapine",
    "commonBrands": [
      "Clozaril",
      "Luverina",
      "Clorilex",
      "Sizoril"
    ],
    "legalBasis": "Peraturan BPOM RI No. 10 Tahun 2019 juncto PerBPOM No. 24 Tahun 2021",
    "abusePotential": "Disalahgunakan sebagai penenang sentral keras; memiliki efek samping mematikan agranulositosis (penurunan neutrofil drastis) dan miokarditis.",
    "dispensingRules": [
      "Wajib resep asli dokter spesialis kedokteran jiwa (Psikiater).",
      "Wajib melampirkan hasil laboratorium pemeriksaan hitung leukosit absolut (ANC >= 1500/mm3).",
      "Dilarang melayani resep pengulangan tanpa pemeriksaan darah terbaru."
    ],
    "storageAndReporting": "Disimpan di lemari khusus obat OOT. Kartu stok dicatat harian dan siap diaudit BPOM.",
    "labelColor": "Biru OOT"
  },
  {
    "id": "oot-karisoprodol",
    "name": "Karisoprodol (PCC - Izin Edar Dicabut)",
    "type": "oot",
    "typeLabel": "Obat-Obat Tertentu (OOT - Ilegal)",
    "activeSubstance": "Carisoprodol",
    "commonBrands": [
      "Somadril (Eks Pabrik)",
      "PCC Tablet (Ilegal)"
    ],
    "legalBasis": "Keputusan Kepala BPOM RI tentang Pembatalan Izin Edar Karisoprodol & UU Narkotika",
    "abusePotential": "Zat metabolit aktifnya meprobamat memicu euforia parah, halusinasi, agresi kejang, dan ketergantungan fisik ekstrim (\"Zombie drug PCC\").",
    "dispensingRules": [
      "DILARANG KERAS DIEDARKAN, DISIMPAN, ATAU DIPERJUALBELIKAN DALAM BENTUK APAPUN.",
      "Kepemilikan dan penyerahan diancam pidana hukum narkotika."
    ],
    "storageAndReporting": "Jika ditemukan stok kedaluwarsa lama, wajib segera dimusnahkan bersama saksi Dinkes/BPOM dengan Berita Acara Pemusnahan resmi.",
    "labelColor": "Biru OOT"
  },
  {
    "id": "precursor-kalium-permanganat",
    "name": "Kalium Permanganat (KMnO4)",
    "type": "precursor",
    "typeLabel": "Prekursor Farmasi Tabel 2",
    "activeSubstance": "Potassium Permanganate",
    "commonBrands": [
      "PK Kristal",
      "Serbuk Kalium Permanganat Apotek"
    ],
    "legalBasis": "PP RI No. 44 Tahun 2010 tentang Prekursor Farmasi (Tabel 2)",
    "abusePotential": "Zat pengoksidasi kuat yang sering digunakan dalam proses kimia ilegal pemurnian kokain base.",
    "dispensingRules": [
      "Pemesanan ke PBF wajib memakai Surat Pesanan (SP) Prekursor Farmasi.",
      "Penjualan bebas di apotek untuk antiseptik mandi luar/eksim dibatasi maksimal 1-2 pot kecil per pasien.",
      "Waspadai pembelian borongan dalam jumlah kilogram oleh pihak tidak dikenal."
    ],
    "storageAndReporting": "Simpan di tempat kering dan terpisah dari bahan mudah terbakar. Catat mutasi pada kartu stok prekursor.",
    "labelColor": "Oranye Prekursor"
  },
  {
    "id": "precursor-asam-klorida-pekat",
    "name": "Asam Klorida (HCl) Pekat",
    "type": "precursor",
    "typeLabel": "Prekursor Farmasi Tabel 2",
    "activeSubstance": "Hydrochloric Acid",
    "commonBrands": [
      "HCl Teknis / Farmasi"
    ],
    "legalBasis": "PP RI No. 44 Tahun 2010 tentang Prekursor",
    "abusePotential": "Bahan kimia pereaksi esensial untuk mengkonversi basa bebas narkotika menjadi garam hidroklorida stabil (misal: kokain HCl, heroin HCl).",
    "dispensingRules": [
      "Hanya boleh diadakan untuk keperluan laboratorium riset, industri farmasi, dan peracikan resmi.",
      "Wajib SP Prekursor berkas sah."
    ],
    "storageAndReporting": "Simpan di lemari asam tahan korosi berkunci. Pelaporan mutasi prekursor berkala.",
    "labelColor": "Oranye Prekursor"
  },
  {
    "id": "precursor-aseton",
    "name": "Aseton (Acetone)",
    "type": "precursor",
    "typeLabel": "Prekursor Farmasi Tabel 2",
    "activeSubstance": "Acetone",
    "commonBrands": [
      "Aseton Murni / Teknis"
    ],
    "legalBasis": "PP RI No. 44 Tahun 2010 tentang Prekursor Farmasi (Tabel 2)",
    "abusePotential": "Pelarut organik penting dalam ekstraksi dan pemurnian kristal sabu (metamfetamin) dan kokain.",
    "dispensingRules": [
      "Pemesanan wajib menggunakan SP Prekursor bermaterai/SIPA Apoteker.",
      "Apotek wajib mencatat identitas pembeli dan membatasi volume transaksi wajar."
    ],
    "storageAndReporting": "Simpan di ruangan berventilasi baik jauh dari sumber api panas. Catat kartu stok rapi.",
    "labelColor": "Oranye Prekursor"
  },
  {
    "id": "sipnap-kodein",
    "name": "Kodein (Codeine HCl / Fosfat)",
    "type": "oot",
    "typeLabel": "Narkotika Golongan III (SIPNAP)",
    "activeSubstance": "Codeine",
    "commonBrands": [
      "Codipront Sirup/Kapsul",
      "Codikaf",
      "Codeine 10 mg / 20 mg Kimia Farma"
    ],
    "legalBasis": "UU RI No. 35 Tahun 2009 tentang Narkotika & Permenkes No. 5 Tahun 2023",
    "abusePotential": "Opioid antitusif dan analgesik; disalahgunakan sebagai campuran minuman (\"Purple Drank / Lean\"). Risiko depresi napas fatal pada anak dengan varian genetik CYP2D6 ultra-rapid metabolizer.",
    "dispensingRules": [
      "Wajib RESEP ASLI DOKTER (dilarang copy resep).",
      "KONTRAINDIKASI pada anak usia < 12 tahun untuk batuk pilek, dan pasca-tonsilektomi/adenoidektomi pada anak usia < 18 tahun.",
      "Pemesanan ke PBF wajib memakai SP Narkotika resmi 3 rangkap ber-SIPA."
    ],
    "storageAndReporting": "Wajib disimpan dalam Lemari Khusus Narkotika berkunci ganda (double-lock). Pelaporan mutasi resep setiap bulan via SIPNAP Kemenkes RI.",
    "labelColor": "Biru OOT"
  },
  {
    "id": "sipnap-fentanil-patch",
    "name": "Fentanil Transdermal Patch (Durogesic)",
    "type": "oot",
    "typeLabel": "Narkotika Golongan II (SIPNAP)",
    "activeSubstance": "Fentanyl Transdermal",
    "commonBrands": [
      "Durogesic 12.5 mcg/jam, 25 mcg/jam, 50 mcg/jam"
    ],
    "legalBasis": "UU No. 35 Tahun 2009 tentang Narkotika & Permenkes No. 5/2023",
    "abusePotential": "Potensi analgesik 100x lebih kuat dibanding morfin. Bekas koyo yang dibuang sembarangan masih mengandung residu fentanil tinggi yang mematikan jika tertelan atau disalahgunakan.",
    "dispensingRules": [
      "Hanya untuk pasien toleran opioid (nyeri kanker kronis refrakter).",
      "Pasien/keluarga WAJIB mengembalikan koyo bekas pakai ke Instalasi Farmasi Rumah Sakit sebelum penyerahan koyo baru (sistem one-to-one exchange).",
      "Dilarang memotong/menggunting koyo patch."
    ],
    "storageAndReporting": "Simpan di lemari narkotika berdinding kuat terkunci ganda. Koyo bekas dimusnahkan secara khusus dengan berita acara resmi saksi apoteker.",
    "labelColor": "Biru OOT"
  },
  {
    "id": "sipnap-oksikodon",
    "name": "Oksikodon (Oxycodone HCl)",
    "type": "oot",
    "typeLabel": "Narkotika Golongan II (SIPNAP)",
    "activeSubstance": "Oxycodone Hydrochloride",
    "commonBrands": [
      "OxyContin (Lepas Lambat)",
      "OxyNorm (Lepas Cepat)"
    ],
    "legalBasis": "UU No. 35 Tahun 2009 tentang Narkotika",
    "abusePotential": "Penyalahgunaan marak dengan cara menghancurkan tablet lepas lambat (crushing) untuk disuntik/dihirup, memicu epidemi krisis opioid dan overdosis henti napas seketika.",
    "dispensingRules": [
      "Wajib resep dokter dengan skrining ketat.",
      "Tablet OxyContin WAJIB ditelan utuh, dilarang digerus, dikunyah, atau dilarutkan.",
      "Pemesanan ke PBF menggunakan SP Narkotika."
    ],
    "storageAndReporting": "Disimpan di lemari narkotika terkunci ganda. Laporan bulanan SIPNAP.",
    "labelColor": "Biru OOT"
  },
  {
    "id": "sipnap-hidromorfon",
    "name": "Hidromorfon HCl (Jurnista)",
    "type": "oot",
    "typeLabel": "Narkotika Golongan II (SIPNAP)",
    "activeSubstance": "Hydromorphone Hydrochloride",
    "commonBrands": [
      "Jurnista Tablet Lepas Lambat 4 mg, 8 mg, 16 mg"
    ],
    "legalBasis": "UU No. 35 Tahun 2009 tentang Narkotika & Permenkes No. 5/2023",
    "abusePotential": "Opioid semi-sintetis 5-7x lebih poten dibanding morfin oral; ketergantungan dan depresi pernapasan fatal.",
    "dispensingRules": [
      "Wajib resep dokter spesialis.",
      "Tablet OROS lepas lambat ditelan utuh 1x sehari di waktu yang sama.",
      "Skrining ketat riwayat obstruksi saluran cerna."
    ],
    "storageAndReporting": "Lemari narkotika kunci ganda, pencatatan kartu stok dan laporan SIPNAP tertib.",
    "labelColor": "Biru OOT"
  },
  {
    "id": "sipnap-alprazolam",
    "name": "Alprazolam",
    "type": "oot",
    "typeLabel": "Psikotropika Golongan IV (SIPNAP)",
    "activeSubstance": "Alprazolam",
    "commonBrands": [
      "Xanax",
      "Alganax",
      "Zypraz",
      "Calmlet",
      "Alprazolam Generik"
    ],
    "legalBasis": "UU RI No. 5 Tahun 1997 tentang Psikotropika & Permenkes No. 5/2023",
    "abusePotential": "Benzodiazepin paling sering disalahgunakan karena onset cepat dan potensi amnesia euforia; toleransi dan ketergantungan berkembang dalam hitungan minggu.",
    "dispensingRules": [
      "HANYA dengan RESEP ASLI DOKTER (dilarang copy resep iter).",
      "Durasi peresepan dibatasi maksimal 2-4 minggu terapi jangka pendek.",
      "Wajib mencantumkan identitas lengkap dan NIK/KTP pasien."
    ],
    "storageAndReporting": "Disimpan dalam Lemari Khusus Psikotropika terkunci. Wajib pelaporan bulanan SIPNAP Kemenkes.",
    "labelColor": "Biru OOT"
  },
  {
    "id": "sipnap-klonazepam",
    "name": "Klonazepam",
    "type": "oot",
    "typeLabel": "Psikotropika Golongan IV (SIPNAP)",
    "activeSubstance": "Clonazepam",
    "commonBrands": [
      "Rivotril",
      "Clonazepam Generik 2 mg"
    ],
    "legalBasis": "UU No. 5 Tahun 1997 & Permenkes No. 5/2023",
    "abusePotential": "Disalahgunakan untuk efek penenang kuat; penghentian mendadak (abrupt withdrawal) memicu status epileptikus kejang berulang mematikan.",
    "dispensingRules": [
      "Wajib resep asli dokter psikiater atau neurolog.",
      "Penghentian obat harus melalui tapering off bertahap selama beberapa minggu."
    ],
    "storageAndReporting": "Simpan di lemari psikotropika. Pelaporan kartu stok dan SIPNAP.",
    "labelColor": "Biru OOT"
  },
  {
    "id": "sipnap-metilfenidat",
    "name": "Metilfenidat HCl (Ritalin / Concerta)",
    "type": "oot",
    "typeLabel": "Psikotropika Golongan II (SIPNAP)",
    "activeSubstance": "Methylphenidate Hydrochloride",
    "commonBrands": [
      "Ritalin 10 mg",
      "Concerta 18 mg, 36 mg"
    ],
    "legalBasis": "UU No. 5 Tahun 1997 tentang Psikotropika & Permenkes No. 5/2023",
    "abusePotential": "Stimulan sistem saraf pusat (mirip amfetamin); disalahgunakan sebagai \"smart drug\" untuk begadang ujian atau rekreasional. Memicu takikardia berat, psikosis stimulans, dan adiksi parah.",
    "dispensingRules": [
      "Wajib resep asli dokter spesialis anak (konsultan tumbuh kembang) atau spesialis kedokteran jiwa.",
      "Indikasi ketat ADHD atau Narkolepsi.",
      "Pemesanan ke PBF wajib memakai Surat Pesanan (SP) Khusus Psikotropika."
    ],
    "storageAndReporting": "Disimpan di lemari khusus psikotropika berkunci kuat. Pelaporan ketat pada aplikasi SIPNAP.",
    "labelColor": "Biru OOT"
  },
  {
    "id": "sipnap-zolpidem",
    "name": "Zolpidem Tartrat",
    "type": "oot",
    "typeLabel": "Psikotropika Golongan IV (SIPNAP)",
    "activeSubstance": "Zolpidem Tartrate",
    "commonBrands": [
      "Stilnox",
      "Zolmia"
    ],
    "legalBasis": "UU No. 5 Tahun 1997 & Permenkes No. 5/2023",
    "abusePotential": "Non-benzodiazepine Z-drug hipnotik; risiko parasomnia tidur berjalan (sleepwalking, sleep-driving) tanpa sadar dan adiksi psikologis tidur.",
    "dispensingRules": [
      "Wajib resep dokter.",
      "Diberikan tepat sebelum tidur di atas ranjang.",
      "Penggunaan dibatasi maksimal 2-4 minggu."
    ],
    "storageAndReporting": "Simpan di lemari psikotropika teratur, catat mutasi kartu stok dan laporkan via SIPNAP.",
    "labelColor": "Biru OOT"
  },
  {
    "id": "oot-dekstrometorfan-kombinasi",
    "name": "Dekstrometorfan (DMP) Kombinasi Sirup Flu Batuk",
    "type": "oot",
    "typeLabel": "Obat-Obat Tertentu (OOT)",
    "activeSubstance": "Dextromethorphan HBr Kombinasi",
    "commonBrands": [
      "Bisolvon Extra",
      "Komix Herbal DMP",
      "Vicks Formula 44",
      "Woods Peppermint Antitusif"
    ],
    "legalBasis": "PerBPOM No. 10 Tahun 2019 tentang Pengelolaan Obat-Obat Tertentu",
    "abusePotential": "Sering disalahgunakan remaja dengan meminum 5-10 botol/sachet sekaligus untuk mendapatkan efek disosiasi dan euforia; risiko depresi napas dan aritmia fatal.",
    "dispensingRules": [
      "Penjualan bebas terbatas dibatasi maksimal 1 botol / kemasan kecil per pasien pada swamedikasi.",
      "Apoteker wajib menolak penyerahan borongan atau pembelian berulang yang mencurigakan oleh remaja."
    ],
    "storageAndReporting": "Ditempatkan di area pengawasan apoteker, pantau pergerakan stok keluar.",
    "labelColor": "Biru OOT"
  },
  {
    "id": "precursor-efedrin-injeksi",
    "name": "Efedrin HCl Injeksi Rumah Sakit",
    "type": "precursor",
    "typeLabel": "Prekursor Farmasi Tabel 1",
    "activeSubstance": "Ephedrine Hydrochloride 50 mg/mL",
    "commonBrands": [
      "Efedrin Injeksi Kimia Farma 50 mg/mL"
    ],
    "legalBasis": "PP RI No. 44 Tahun 2010 tentang Prekursor Farmasi & Permenkes No. 5/2023",
    "abusePotential": "Prekursor murni berkonsentrasi tinggi; sangat rentan diselewengkan untuk pembuatan gelap stimulan amfetamin ilegal.",
    "dispensingRules": [
      "Pengadaan rumah sakit wajib menggunakan Surat Pesanan (SP) Khusus Prekursor Farmasi rangkap 3 ber-SIPA.",
      "Di rumah sakit HANYA disimpan di Kamar Operasi dan ICU untuk tatalaksana hipotensi anestesi spinal.",
      "Sisa ampul yang tidak terpakai wajib dicatat dan dimusnahkan secara terdokumentasi."
    ],
    "storageAndReporting": "Simpan di lemari berkunci kuat dengan kartu stok tertib, siap diaudit BPOM dan Dinas Kesehatan.",
    "labelColor": "Oranye Prekursor"
  },
  {
    "id": "sipnap-morfin-oral",
    "name": "Morfin Sulfat Tablet Lepas Lambat (MST Continus)",
    "type": "oot",
    "typeLabel": "Narkotika Golongan II (SIPNAP)",
    "activeSubstance": "Morphine Sulfate",
    "commonBrands": [
      "MST Continus 10 mg, 15 mg, 30 mg"
    ],
    "legalBasis": "UU RI No. 35 Tahun 2009 tentang Narkotika & Permenkes No. 5/2023",
    "abusePotential": "Baku emas analgesik opioid nyeri kanker; penghancuran tablet lepas lambat memicu \"dose dumping\" fatal yang mematikan.",
    "dispensingRules": [
      "Wajib RESEP ASLI DOKTER SPESIALIS (resep narkotika rangkap dengan nomor registrasi).",
      "Tablet MST WAJIB ditelan utuh, dilarang digerus atau dibelah.",
      "Pemesanan ke PBF wajib memakai SP Narkotika resmi ber-SIPA Apoteker."
    ],
    "storageAndReporting": "Wajib disimpan dalam Lemari Khusus Narkotika dinding ganda dengan 2 kunci berbeda. Laporan mutasi resep wajib diinput bulanan via aplikasi SIPNAP Kemenkes.",
    "labelColor": "Biru OOT"
  },
  {
    "id": "oot-pregabalin-gabapentin",
    "name": "Pregabalin & Gabapentin (Obat Gangguan SSP Khusus)",
    "type": "oot",
    "typeLabel": "Obat Keras Pengawasan Khusus SSP",
    "activeSubstance": "Pregabalin / Gabapentin",
    "commonBrands": ["Lyrica", "Neurontin", "Alpentin", "Gabexal", "Pregabalin Generik"],
    "legalBasis": "Surat Edaran BPOM RI & Kemenkes RI tentang Pengawasan Gabapentinoid",
    "abusePotential": "Meningkat pesat disalahgunakan remaja dan dewasa muda untuk efek euforia relaksasi disosiatif ('Gabbies / Budweiser'). Risiko depresi pernapasan fatal jika dikombinasikan dengan opioid, alkohol, atau benzodiazepin.",
    "dispensingRules": [
      "Hanya dapat dilayani dengan RESEP ASLI DOKTER yang sah.",
      "Skrining ketat riwayat kecanduan zat pada pasien dan tolak permintaan tanpa indikasi neuropatik/epilepsi jelas.",
      "Apoteker wajib membatasi dispensing peresepan maksimal untuk 30 hari terapi dan mencatat identitas pasien."
    ],
    "storageAndReporting": "Disimpan di rak obat keras berakses terbatas. Catat kartu stok harian untuk mendeteksi potensi kebocoran atau peresepan fiktif.",
    "labelColor": "Biru OOT"
  },
  {
    "id": "precursor-asetat-anhidrida",
    "name": "Asetat Anhidrida (Acetic Anhydride)",
    "type": "precursor",
    "typeLabel": "Prekursor Farmasi Tabel 1",
    "activeSubstance": "Acetic Anhydride",
    "commonBrands": ["Asetat Anhidrida Murni Analitik"],
    "legalBasis": "PP RI No. 44 Tahun 2010 tentang Prekursor Farmasi (Tabel 1) & UU Narkotika",
    "abusePotential": "Reagen asetilasi kimiawi esensial baku emas yang digunakan sindikat gelap untuk mengonversi morfin dari getah opium menjadi Heroin (Diacetylmorphine). Pengawasannya berkategori ancaman keamanan nasional.",
    "dispensingRules": [
      "DILARANG KERAS beredar di fasilitas pelayanan kefarmasian umum (Apotek/Klinik biasa).",
      "HANYA boleh diadakan oleh Industri Farmasi resmi dan Lembaga Riset Terakreditasi dengan Izin Khusus Kemenkes & BPOM.",
      "Pemesanan wajib Surat Pesanan Prekursor Tabel 1 dengan pengawalan ketat."
    ],
    "storageAndReporting": "Disimpan dalam gudang bahan berbahaya bersertifikasi, berkunci ganda dengan pengawasan CCTV 24 jam dan pelaporan neraca mutasi bulanan ke BPOM dan BNN.",
    "labelColor": "Oranye Prekursor"
  },
  {
    "id": "precursor-dietil-eter",
    "name": "Dietil Eter (Ethyl Ether / Solvent)",
    "type": "precursor",
    "typeLabel": "Prekursor Farmasi Tabel 2",
    "activeSubstance": "Diethyl Ether",
    "commonBrands": ["Eter Anestesi", "Dietil Eter Teknis"],
    "legalBasis": "PP RI No. 44 Tahun 2010 tentang Prekursor Farmasi (Tabel 2)",
    "abusePotential": "Pelarut organik mudah menguap yang digunakan dalam ekstraksi dan kristalisasi pemurnian kokain dari daun koka dan sabu amfetamin.",
    "dispensingRules": [
      "Pemesanan menggunakan SP Prekursor Farmasi resmi ber-SIPA Apoteker.",
      "Penyerahan untuk keperluan medis rumah sakit atau laboratorium wajib disertai berita acara penggunaan resmi.",
      "Dilarang penyerahan bebas dalam jumlah besar tanpa surat keterangan instansi resmi."
    ],
    "storageAndReporting": "Simpan di ruang khusus berventilasi baik tahan ledakan (flammable storage) jauh dari percikan api listrik. Catat kartu stok rapi.",
    "labelColor": "Oranye Prekursor"
  },
  {
    "id": "sipnap-petidin-injeksi",
    "name": "Petidin HCl (Meperidine) Injeksi",
    "type": "oot",
    "typeLabel": "Narkotika Golongan II (SIPNAP)",
    "activeSubstance": "Pethidine Hydrochloride Injeksi 50 mg/mL",
    "commonBrands": ["Pethidin Kimia Farma 100 mg/2 mL"],
    "legalBasis": "UU RI No. 35 Tahun 2009 tentang Narkotika & Permenkes No. 5/2023",
    "abusePotential": "Analgesik opioid kuat yang sering digunakan saat persalinan dan pasca operasi bedah. Metabolit toksiknya (Norpetidin) memiliki waktu paruh panjang dan memicu eksitasi SSP, tremor, mioklonus, dan kejang fatal pada pasien gagal ginjal atau penggunaan >48 jam.",
    "dispensingRules": [
      "Wajib RESEP ASLI NARKOTIKA rangkap bernomor registrasi dokter spesialis anestesi atau obgyn.",
      "Penggunaan dibatasi maksimal 48 jam dan dosis tidak melebihi 600 mg/24 jam.",
      "Sisa sediaan ampul yang tidak terpakai wajib dimusnahkan dengan Berita Acara Pemusnahan Narkotika."
    ],
    "storageAndReporting": "Wajib disimpan dalam Lemari Narkotika berkunci ganda. Laporan pemakaian dan sisa stok wajib dilaporkan secara online tiap bulan via aplikasi SIPNAP Kemenkes.",
    "labelColor": "Biru OOT"
  },
  {
    "id": "sipnap-buprenorfin-sublingual",
    "name": "Buprenorfin HCl (Subutex / Suboxone)",
    "type": "oot",
    "typeLabel": "Narkotika Golongan III (SIPNAP)",
    "activeSubstance": "Buprenorphine Hydrochloride (+ Naloxone)",
    "commonBrands": ["Suboxone Tablet Sublingual 2 mg, 8 mg", "Subutex", "Transtec Patch"],
    "legalBasis": "UU RI No. 35 Tahun 2009 tentang Narkotika & Permenkes No. 5/2023",
    "abusePotential": "Agonis parsial reseptor mu-opioid untuk Terapi Rumatan Metadon/Substitusi Opioid (PTRM) pada mantan pengguna narkotika suntik. Bila disalahgunakan dengan cara digerus lalu disuntikkan secara intravena berisiko emboli dan henti napas jika dikombinasikan dengan benzodiazepin.",
    "dispensingRules": [
      "Hanya dilayani di fasilitas layanan kesehatan yang ditunjuk resmi menyelenggarakan program PTRM/Rehabilitasi Kemenkes.",
      "Resep dokter spesialis kedokteran jiwa bersertifikasi adiksi narkoba.",
      "Pasien wajib mengonsumsi tablet di depan petugas farmasi/klinisi (Directly Observed Therapy / DOT)."
    ],
    "storageAndReporting": "Simpan di lemari narkotika khusus. Catat kartu stok setiap butir tablet dan laporkan ke aplikasi SIPNAP Kemenkes secara berkala.",
    "labelColor": "Biru OOT"
  }
];

