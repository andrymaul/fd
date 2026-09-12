// =====================================================================
// IV Y-SITE EXTENDED COMPATIBILITY MATRIX - BATCH 3 (120+ PASANGAN BARU)
// Sumber Referensi: Trissel's Handbook on Injectable Drugs 2024,
// ASHP Injectable Drug Information 2024 & King Guide to Parenteral Admixtures
// ZERO DATA DUPLICATION CLINICAL LAYER
// =====================================================================

import type { YSiteCompatibilityPair } from './ivCompatibilityData';

export const Y_SITE_BATCH3_MATRIX: YSiteCompatibilityPair[] = [
  {
    "drugAId": "iv-norepinephrine",
    "drugBId": "iv-nicardipine",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Kedua larutan bersifat asam stabil, tidak memicu pembentukan partikel kristal.",
    "clinicalEffect": "Larutan tetap jernih stabil.",
    "recommendation": "KOMPATIBEL via percabangan Y-site."
  },
  {
    "drugAId": "iv-epinephrine",
    "drugBId": "iv-vasopressin",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Stabilitas fisiko-kimiawi terjaga tanpa degradasi oksidatif selama 4 jam kontak.",
    "clinicalEffect": "Kombinasi vasopresor darurat stabil.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-epinephrine",
    "drugBId": "iv-milrinone",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Larutan jernih tanpa perubahan warna atau presipitasi.",
    "clinicalEffect": "Dukungan inotropik dan inodilatasi terjaga baik.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-epinephrine",
    "drugBId": "iv-dobutamine",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Kedua katekolamin kompatibel pada pH asam pelarut dekstrosa/saline.",
    "clinicalEffect": "Tidak ada penurunan kadar katekolamin selama waktu kontak Y-site.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-epinephrine",
    "drugBId": "iv-nicardipine",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Tidak ada presipitasi partikulat subvisual yang terdeteksi.",
    "clinicalEffect": "Larutan homogen stabil.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-dobutamine",
    "drugBId": "iv-vasopressin",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Stabilitas fisiko-kimiawi terjaga penuh selama 4 jam waktu kontak simulasi.",
    "clinicalEffect": "Sinergi inotropik-vasopresor stabil.",
    "recommendation": "KOMPATIBEL via percabangan Y-site."
  },
  {
    "drugAId": "iv-dopamine",
    "drugBId": "iv-vasopressin",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Tidak ada presipitasi atau degradasi katekolamin.",
    "clinicalEffect": "Kedua obat stabil pada jalur Y-site.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-dopamine",
    "drugBId": "iv-milrinone",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Larutan stabil tanpa pembentukan endapan atau perubahan absorbansi spektrofotometri.",
    "clinicalEffect": "Efek hemodinamik inotropik stabil.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-milrinone",
    "drugBId": "iv-midazolam",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Kedua obat larut stabil pada pH asam tanpa pembentukan partikulat.",
    "clinicalEffect": "Analgo-inotropik stabil di ICU.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-nicardipine",
    "drugBId": "iv-potassium-chloride",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Tidak ada interaksi kimia atau presipitasi dengan ion kalium dan klorida.",
    "clinicalEffect": "Koreksi kalium dan titrasi antihipertensi berjalan lancar.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-nicardipine",
    "drugBId": "iv-fentanyl",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Tidak terbentuk kristal atau perubahan kejernihan larutan.",
    "clinicalEffect": "Analgesia dan vasodilatasi terkontrol stabil.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-nicardipine",
    "drugBId": "iv-midazolam",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Stabilitas fisiko-kimiawi terjaga baik pada pH larutan asam.",
    "clinicalEffect": "Larutan jernih homogen.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-sodium-nitroprusside",
    "drugBId": "iv-norepinephrine",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Kedua larutan stabil dalam pelarut D5W terlindung cahaya.",
    "clinicalEffect": "Kombinasi titrasi vasopresor-vasodilator pasca bedah jantung stabil.",
    "recommendation": "KOMPATIBEL via Y-site dengan kantong dan selang terlindung cahaya penuh."
  },
  {
    "drugAId": "iv-sodium-nitroprusside",
    "drugBId": "iv-epinephrine",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Larutan tetap stabil tanpa perubahan absorbansi spektrum.",
    "clinicalEffect": "Efek hemodinamik terjaga baik.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-sodium-nitroprusside",
    "drugBId": "iv-dopamine",
    "status": "incompatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Perubahan warna larutan menjadi kecokelatan dan degradasi kimiawi nitroprusid.",
    "clinicalEffect": "Penurunan efikasi vasodilatasi dan potensi terbentuknya produk degradasi toksik.",
    "recommendation": "HINDARI co-infus Y-site sejalur. Gunakan lumen CVC terpisah."
  },
  {
    "drugAId": "iv-sodium-nitroprusside",
    "drugBId": "iv-furosemide",
    "status": "incompatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Inkompatibilitas akibat perbedaan pH basa furosemid yang mempercepat fotodegradasi nitroprusid.",
    "clinicalEffect": "Degradasi cepat molekul nitroprusid.",
    "recommendation": "KONTRAINDIKASI SEJALUR."
  },
  {
    "drugAId": "iv-sodium-nitroprusside",
    "drugBId": "iv-heparin",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Larutan stabil tanpa presipitasi atau hilangnya potensi antikoagulan.",
    "clinicalEffect": "Larutan jernih stabil.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-sodium-nitroprusside",
    "drugBId": "iv-potassium-chloride",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Tidak ada interaksi kimia yang merugikan.",
    "clinicalEffect": "Koreksi elektrolit dan vasodilatasi stabil.",
    "recommendation": "KOMPATIBEL via Y-site dalam pelarut D5W."
  },
  {
    "drugAId": "iv-levosimendan",
    "drugBId": "iv-furosemide",
    "status": "incompatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Presipitasi instan akibat perbedaan pH ekstrem: Levosimendan (pH 3.0) mengendapkan furosemid (pH 9.0).",
    "clinicalEffect": "Pembentukan kristal putih dan sumbatan selang infus.",
    "recommendation": "KONTRAINDIKASI MUTLAK via Y-site. Pasang jalur infus terpisah."
  },
  {
    "drugAId": "iv-levosimendan",
    "drugBId": "iv-norepinephrine",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Kedua obat stabil pada pH asam dalam pelarut D5W.",
    "clinicalEffect": "Kombinasi inotropik kalsium sensitizer dan vasopresor syok kardiogenik stabil.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-levosimendan",
    "drugBId": "iv-dobutamine",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Larutan tetap jernih tanpa perubahan warna selama 24 jam waktu infus.",
    "clinicalEffect": "Dukungan inotropik ganda stabil.",
    "recommendation": "KOMPATIBEL via percabangan Y-site."
  },
  {
    "drugAId": "iv-levosimendan",
    "drugBId": "iv-dopamine",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Stabilitas fisiko-kimiawi terjaga tanpa degradasi obat.",
    "clinicalEffect": "Larutan homogen stabil.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-levosimendan",
    "drugBId": "iv-heparin",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Tidak ada presipitasi atau penurunan aktivitas heparin.",
    "clinicalEffect": "Kedua obat mempertahankan potensi.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-meropenem",
    "drugBId": "iv-midazolam",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Tidak terbentuk partikulat presipitasi pada konsentrasi standar.",
    "clinicalEffect": "Sedasi dan terapi antibakteri stabil.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-meropenem",
    "drugBId": "iv-propofol",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Ukuran droplet lipid emulsi propofol tetap stabil < 5 mikron tanpa agregasi.",
    "clinicalEffect": "Emulsi tetap utuh tanpa pemisahan fase minyak.",
    "recommendation": "KOMPATIBEL via Y-site pada waktu kontak infus standar."
  },
  {
    "drugAId": "iv-meropenem",
    "drugBId": "iv-morphine",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Tidak ada interaksi fisiko-kimiawi yang terdeteksi.",
    "clinicalEffect": "Larutan jernih stabil.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-meropenem",
    "drugBId": "iv-ketamine",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Larutan jernih tanpa perubahan warna atau presipitasi.",
    "clinicalEffect": "Analgesia dan antibiotik stabil.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-meropenem",
    "drugBId": "iv-rocuronium",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Tidak ada penurunan potensi relaksan otot atau degradasi cincin karbapenem.",
    "clinicalEffect": "Larutan tetap jernih sempurna.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-meropenem",
    "drugBId": "iv-heparin",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Kompatibel pada konsentrasi standar infus pemeliharaan.",
    "clinicalEffect": "Aktivitas antikoagulan dan antibakteri terjaga.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-meropenem",
    "drugBId": "iv-insulin-regular",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Tidak ada denaturasi protein insulin atau inaktivasi meropenem.",
    "clinicalEffect": "Kontrol glikemik dan terapi infeksi aman sejalur.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-meropenem",
    "drugBId": "iv-calcium-gluconate",
    "status": "conditional",
    "evidence": "ASHP Injectable Drugs",
    "mechanism": "Kompatibel pada konsentrasi encer, namun amati kejernihan jika konsentrasi kalsium pekat.",
    "clinicalEffect": "Potensi kekeruhan mikropartikulat jika tercampur pekat.",
    "recommendation": "BERSYARAT: Berikan dalam larutan encer dan bilas kateter bila ragu."
  },
  {
    "drugAId": "iv-vancomycin",
    "drugBId": "iv-furosemide",
    "status": "incompatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Presipitasi langsung asam-basa: pH asam vankomisin (pH 2.5-4.5) mengendapkan furosemid (pH 9.0) membentuk kristal kasar.",
    "clinicalEffect": "Oklusi kateter seketika dan hilangnya efikasi kedua obat.",
    "recommendation": "KONTRAINDIKASI SEJALUR. Wajib jalur IV berbeda."
  },
  {
    "drugAId": "iv-vancomycin",
    "drugBId": "iv-rocuronium",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Larutan stabil tanpa presipitasi.",
    "clinicalEffect": "Relaksasi otot dan terapi MRSA berlangsung aman.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-vancomycin",
    "drugBId": "iv-atracurium",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Tidak ada interaksi fisikokimia selama kontak Y-site.",
    "clinicalEffect": "Larutan homogen jernih.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-vancomycin",
    "drugBId": "iv-potassium-chloride",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Kompatibilitas elektrolit baik.",
    "clinicalEffect": "Larutan tetap stabil.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-vancomycin",
    "drugBId": "iv-magnesium-sulfate",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Larutan tetap jernih tanpa pembentukan kristal sulfat tak larut.",
    "clinicalEffect": "Koreksi magnesium aman sejalur.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-vancomycin",
    "drugBId": "iv-fentanyl",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Kompatibilitas fisiko-kimiawi terbukti stabil selama 4 jam kontak.",
    "clinicalEffect": "Larutan stabil.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-vancomycin",
    "drugBId": "iv-midazolam",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Kedua larutan bersifat asam stabil tanpa presipitasi.",
    "clinicalEffect": "Larutan jernih.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-vancomycin",
    "drugBId": "iv-propofol",
    "status": "incompatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Vankomisin yang sangat asam memicu destabilisasi emulsi lipid propofol (*coalescence / emulsion cracking*).",
    "clinicalEffect": "Pemisahan fase minyak lipid emulsi berisiko memicu emboli lemak paru fatal.",
    "recommendation": "KONTRAINDIKASI SEJALUR. Jangan pernah co-infus vankomisin dengan emulsi propofol."
  },
  {
    "drugAId": "iv-piperacillin-tazobactam",
    "drugBId": "iv-acyclovir",
    "status": "incompatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Asiklovir yang sangat basa (pH 11) memicu inaktivasi cepat cincin beta-laktam piperacillin dan presipitasi asiklovir bebas.",
    "clinicalEffect": "Presipitasi keruh dan hilangnya efikasi antiviral & antibakteri.",
    "recommendation": "KONTRAINDIKASI SEJALUR. Gunakan vena berbeda."
  },
  {
    "drugAId": "iv-piperacillin-tazobactam",
    "drugBId": "iv-ganciclovir",
    "status": "incompatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Presipitasi kristal seketika akibat pH sangat basa dari gansiklovir (pH 11).",
    "clinicalEffect": "Sumbatan kateter dan flebitis parah.",
    "recommendation": "KONTRAINDIKASI SEJALUR."
  },
  {
    "drugAId": "iv-piperacillin-tazobactam",
    "drugBId": "iv-dexmedetomidine",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Kompatibilitas fisiko-kimiawi baik selama waktu kontak Y-site.",
    "clinicalEffect": "Larutan tetap jernih.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-piperacillin-tazobactam",
    "drugBId": "iv-rocuronium",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Larutan stabil tanpa pembentukan endapan.",
    "clinicalEffect": "Relaksasi otot dan terapi antibiotik berjalan lancar.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-piperacillin-tazobactam",
    "drugBId": "iv-potassium-chloride",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Kompatibilitas elektrolit stabil.",
    "clinicalEffect": "Larutan jernih.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-piperacillin-tazobactam",
    "drugBId": "iv-magnesium-sulfate",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Tidak ada pembentukan endapan kristal sulfat.",
    "clinicalEffect": "Larutan homogen stabil.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-colistin",
    "drugBId": "iv-calcium-gluconate",
    "status": "incompatible",
    "evidence": "ASHP Injectable Drugs",
    "mechanism": "Inkompatibilitas presipitasi garam metansulfonat dengan kation kalsium, plus risiko peningkatan blokade neuromuskular.",
    "clinicalEffect": "Presipitasi larutan dan potensi toksisitas neuromuskular pernapasan.",
    "recommendation": "KONTRAINDIKASI SEJALUR. Berikan pada vena terpisah."
  },
  {
    "drugAId": "iv-colistin",
    "drugBId": "iv-magnesium-sulfate",
    "status": "conditional",
    "evidence": "Clinical Study",
    "mechanism": "Secara fisiko-kimiawi larutan jernih, namun magnesium memperkuat efek blokade neuromuskular polimiksin (risiko apneu/gagal napas).",
    "clinicalEffect": "Potensiasi blokade neuromuskular dan paralisis otot pernapasan.",
    "recommendation": "WASPADA KLINIS: Monitor ventilasi mekanik dan saturasi oksigen ketat jika diberikan berdekatan."
  },
  {
    "drugAId": "iv-colistin",
    "drugBId": "iv-fentanyl",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Stabilitas fisiko-kimiawi terjaga tanpa presipitasi selama kontak Y-site.",
    "clinicalEffect": "Larutan tetap jernih.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-colistin",
    "drugBId": "iv-midazolam",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Larutan stabil tanpa pembentukan endapan.",
    "clinicalEffect": "Sedasi dan terapi infeksi MDR stabil.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-colistin",
    "drugBId": "iv-meropenem",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Kombinasi sinergis baku emas untuk infeksi Acinetobacter / Klebsiella MDR di ICU terbukti stabil via Y-site.",
    "clinicalEffect": "Kedua obat mempertahankan stabilitas antibakteri penuh.",
    "recommendation": "KOMPATIBEL: Aman diberikan co-infus via Y-site pada konsentrasi standar ICU."
  },
  {
    "drugAId": "iv-colistin",
    "drugBId": "iv-norepinephrine",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Larutan tetap jernih dan potensi vasopresor tidak terganggu.",
    "clinicalEffect": "Hemodinamik dan antibiotik stabil sejalur.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-polymyxin-b",
    "drugBId": "iv-fentanyl",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Kompatibilitas fisiko-kimiawi baik selama 4 jam kontak.",
    "clinicalEffect": "Larutan stabil.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-ceftazidime-avibactam",
    "drugBId": "iv-fentanyl",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Larutan tetap jernih tanpa perubahan pH bermakna.",
    "clinicalEffect": "Larutan stabil.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-ceftaroline",
    "drugBId": "iv-fentanyl",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Larutan jernih tanpa partikulat.",
    "clinicalEffect": "Larutan stabil.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-ceftaroline",
    "drugBId": "iv-midazolam",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Stabilitas fisiko-kimiawi terjaga baik.",
    "clinicalEffect": "Larutan jernih homogen.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-ceftaroline",
    "drugBId": "iv-propofol",
    "status": "incompatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Destabilisasi emulsi lipid propofol teramati dalam kurun waktu 1 jam kontak.",
    "clinicalEffect": "Emulsi pecah membentuk tetesan minyak bebas.",
    "recommendation": "KONTRAINDIKASI SEJALUR."
  },
  {
    "drugAId": "iv-ceftaroline",
    "drugBId": "iv-vancomycin",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Kompatibel pada konsentrasi standar dalam pelarut NaCl 0.9%.",
    "clinicalEffect": "Larutan tetap jernih.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-ceftaroline",
    "drugBId": "iv-meropenem",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Kedua beta-laktam kompatibel secara fisiko-kimiawi selama kontak Y-site.",
    "clinicalEffect": "Larutan stabil.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-ceftaroline",
    "drugBId": "iv-heparin",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Tidak ada presipitasi atau inaktivasi heparin.",
    "clinicalEffect": "Larutan jernih.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-ertapenem",
    "drugBId": "iv-fentanyl",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Kompatibilitas fisiko-kimiawi baik dalam pelarut NaCl 0.9%.",
    "clinicalEffect": "Larutan stabil.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-ertapenem",
    "drugBId": "iv-midazolam",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Larutan jernih tanpa pembentukan endapan.",
    "clinicalEffect": "Larutan stabil.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-ertapenem",
    "drugBId": "iv-heparin",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Tidak ada presipitasi yang teramati.",
    "clinicalEffect": "Larutan tetap jernih.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-ertapenem",
    "drugBId": "iv-valproate-sodium",
    "status": "incompatible",
    "evidence": "FDA Labeling",
    "mechanism": "Interaksi farmakologis berat: Karbapenem menghambat hidrolisis glukuronida asam valproat sehingga kadar valproat serum anjlok hingga 80% dalam 24 jam.",
    "clinicalEffect": "Hilangnya kontrol kejang mendadak dan status epileptikus berulang.",
    "recommendation": "KONTRAINDIKASI MUTLAK BERSAMAAN. Gunakan antibiotik non-karbapenem atau ganti antikonvulsan."
  },
  {
    "drugAId": "iv-imipenem-cilastatin-relebactam",
    "drugBId": "iv-valproate-sodium",
    "status": "incompatible",
    "evidence": "FDA Labeling",
    "mechanism": "Penurunan drastis konsentrasi serum asam valproat akibat hidrolisis karbapenem terhambat.",
    "clinicalEffect": "Risiko kejang refrakter mematikan.",
    "recommendation": "KONTRAINDIKASI MUTLAK BERSAMAAN."
  },
  {
    "drugAId": "iv-imipenem-cilastatin-relebactam",
    "drugBId": "iv-fentanyl",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Larutan stabil tanpa presipitasi dalam pelarut NaCl 0.9%.",
    "clinicalEffect": "Larutan jernih.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-imipenem-cilastatin-relebactam",
    "drugBId": "iv-propofol",
    "status": "incompatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Ketidakstabilan emulsi lipid pada kontak Y-site.",
    "clinicalEffect": "Pemisahan fase emulsi.",
    "recommendation": "KONTRAINDIKASI SEJALUR."
  },
  {
    "drugAId": "iv-linezolid",
    "drugBId": "iv-fentanyl",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Kompatibel secara fisiko-kimiawi dalam larutan infus (tidak ada presipitasi).",
    "clinicalEffect": "Secara farmakologis waspadai risiko Sindrom Serotonin karena sifat MAO-inhibitor reversibel dari linezolid.",
    "recommendation": "KOMPATIBEL FISIK Y-SITE: Monitor tanda sindrom serotonin klinis (klonus, hipertermia, agitasi)."
  },
  {
    "drugAId": "iv-linezolid",
    "drugBId": "iv-midazolam",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Larutan jernih tanpa perubahan warna atau presipitasi.",
    "clinicalEffect": "Larutan stabil.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-linezolid",
    "drugBId": "iv-propofol",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Emulsi propofol tidak terpengaruh oleh larutan linezolid.",
    "clinicalEffect": "Emulsi tetap homogen.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-linezolid",
    "drugBId": "iv-norepinephrine",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Kompatibel secara fisiko-kimiawi. Sifat inhibisi MAO linezolid dapat sedikit memperkuat respons vasopresor norepinefrin.",
    "clinicalEffect": "Larutan jernih, respons presor mungkin lebih sensitif.",
    "recommendation": "KOMPATIBEL FISIK: Titrasi dosis vasopresor dengan hati-hati."
  },
  {
    "drugAId": "iv-linezolid",
    "drugBId": "iv-furosemide",
    "status": "incompatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Inkompatibilitas akibat perbedaan pH larutan.",
    "clinicalEffect": "Presipitasi partikulat kristal.",
    "recommendation": "KONTRAINDIKASI SEJALUR."
  },
  {
    "drugAId": "iv-tigecycline",
    "drugBId": "iv-fentanyl",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Larutan berwarna oranye jernih tanpa pembentukan partikulat.",
    "clinicalEffect": "Larutan stabil.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-tigecycline",
    "drugBId": "iv-midazolam",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Larutan stabil tanpa presipitasi.",
    "clinicalEffect": "Larutan stabil.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-tigecycline",
    "drugBId": "iv-propofol",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Emulsi propofol tetap stabil dan droplet lipid tidak pecah.",
    "clinicalEffect": "Emulsi homogen terjaga.",
    "recommendation": "KOMPATIBEL via percabangan Y-site."
  },
  {
    "drugAId": "iv-tigecycline",
    "drugBId": "iv-furosemide",
    "status": "incompatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Presipitasi langsung partikulat kristal tak larut.",
    "clinicalEffect": "Kekeruhan larutan seketika.",
    "recommendation": "KONTRAINDIKASI SEJALUR."
  },
  {
    "drugAId": "iv-amphotericin-b-liposomal",
    "drugBId": "iv-heparin",
    "status": "incompatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Presipitasi partikulat dan agregasi struktur liposom.",
    "clinicalEffect": "Oklusi kateter dan hilangnya efikasi antijamur.",
    "recommendation": "KONTRAINDIKASI SEJALUR."
  },
  {
    "drugAId": "iv-amphotericin-b-liposomal",
    "drugBId": "iv-meropenem",
    "status": "incompatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Inkompatibilitas fisikokimiawi yang memicu kekeruhan seketika.",
    "clinicalEffect": "Presipitasi partikulat subvisual.",
    "recommendation": "KONTRAINDIKASI SEJALUR. Gunakan vena berbeda."
  },
  {
    "drugAId": "iv-amphotericin-b-liposomal",
    "drugBId": "iv-fentanyl",
    "status": "incompatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Fentanyl mengganggu kestabilan membran liposom pada waktu kontak Y-site.",
    "clinicalEffect": "Kekeruhan larutan.",
    "recommendation": "KONTRAINDIKASI SEJALUR."
  },
  {
    "drugAId": "iv-voriconazole",
    "drugBId": "iv-fentanyl",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Kompatibilitas terbukti stabil pada konsentrasi standar.",
    "clinicalEffect": "Larutan jernih.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-voriconazole",
    "drugBId": "iv-midazolam",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Tidak ada presipitasi atau perubahan warna larutan.",
    "clinicalEffect": "Larutan stabil.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-voriconazole",
    "drugBId": "iv-furosemide",
    "status": "incompatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Perbedaan pH memicu presipitasi kristal vorikonazol.",
    "clinicalEffect": "Kekeruhan instan.",
    "recommendation": "KONTRAINDIKASI SEJALUR."
  },
  {
    "drugAId": "iv-caspofungin",
    "drugBId": "iv-fentanyl",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Stabilitas fisiko-kimiawi baik selama 4 jam kontak.",
    "clinicalEffect": "Larutan jernih.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-caspofungin",
    "drugBId": "iv-midazolam",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Larutan tetap stabil tanpa presipitasi.",
    "clinicalEffect": "Larutan homogen stabil.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-caspofungin",
    "drugBId": "iv-furosemide",
    "status": "incompatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Inkompatibilitas akibat pH basa furosemid yang mendestabilisasi kaspofungin.",
    "clinicalEffect": "Presipitasi keruh putih.",
    "recommendation": "KONTRAINDIKASI SEJALUR."
  },
  {
    "drugAId": "iv-calcium-chloride",
    "drugBId": "iv-potassium-phosphate",
    "status": "incompatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Kalsium klorida terdisosiasi 100% instan melepaskan ion kalsium bebas konsentrasi tinggi, memicu presipitasi kalsium fosfat jauh lebih agresif dibanding glukonat.",
    "clinicalEffect": "Presipitasi kristal instan dan risiko emboli paru fatal.",
    "recommendation": "KONTRAINDIKASI MUTLAK SEJALUR. Jangan pernah mencampur kalsium klorida dengan fosfat."
  },
  {
    "drugAId": "iv-calcium-gluconate",
    "drugBId": "iv-heparin",
    "status": "conditional",
    "evidence": "ASHP Injectable Drugs",
    "mechanism": "Dapat membentuk kompleks garam pada konsentrasi kalsium tinggi.",
    "clinicalEffect": "Potensi kekeruhan tergantung konsentrasi.",
    "recommendation": "BERSYARAT: Berikan dalam larutan encer atau gunakan jalur infus terpisah."
  },
  {
    "drugAId": "iv-magnesium-sulfate",
    "drugBId": "iv-sodium-bicarbonate",
    "status": "incompatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Pembentukan endapan magnesium karbonat tidak larut.",
    "clinicalEffect": "Larutan menjadi keruh putih.",
    "recommendation": "KONTRAINDIKASI SEJALUR."
  },
  {
    "drugAId": "iv-potassium-phosphate",
    "drugBId": "iv-magnesium-sulfate",
    "status": "incompatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Pembentukan endapan kristal magnesium fosfat.",
    "clinicalEffect": "Presipitasi partikulat.",
    "recommendation": "KONTRAINDIKASI SEJALUR."
  },
  {
    "drugAId": "iv-sodium-bicarbonate",
    "drugBId": "iv-amiodarone",
    "status": "incompatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Presipitasi amiodaron seketika karena amiodaron memerlukan pH asam (pH 3.5-4.5) untuk tetap larut.",
    "clinicalEffect": "Presipitasi kristal tebal dan hilangnya kontrol aritmia.",
    "recommendation": "KONTRAINDIKASI SEJALUR. Pasang jalur vena kedua."
  },
  {
    "drugAId": "iv-sodium-bicarbonate",
    "drugBId": "iv-ondansetron",
    "status": "incompatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Presipitasi basa bebas ondansetron seketika.",
    "clinicalEffect": "Kekeruhan putih instan.",
    "recommendation": "KONTRAINDIKASI SEJALUR."
  },
  {
    "drugAId": "iv-sodium-bicarbonate",
    "drugBId": "iv-midazolam",
    "status": "incompatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Pada pH > 4.0, cincin benzodiazepin midazolam menutup dan kelarutan dalam air anjlok drastis memicu presipitasi.",
    "clinicalEffect": "Pembentukan kristal midazolam tak larut.",
    "recommendation": "KONTRAINDIKASI SEJALUR."
  },
  {
    "drugAId": "iv-sodium-bicarbonate",
    "drugBId": "iv-fentanyl",
    "status": "incompatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Presipitasi fentanil sitrat bebas akibat alkalisasi.",
    "clinicalEffect": "Kekeruhan larutan.",
    "recommendation": "KONTRAINDIKASI SEJALUR."
  },
  {
    "drugAId": "iv-sodium-bicarbonate",
    "drugBId": "iv-ketamine",
    "status": "incompatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Presipitasi basa bebas ketamin.",
    "clinicalEffect": "Endapan putih kristal.",
    "recommendation": "KONTRAINDIKASI SEJALUR."
  },
  {
    "drugAId": "iv-lipid-emulsion",
    "drugBId": "iv-potassium-chloride",
    "status": "conditional",
    "evidence": "Trissel's 2024",
    "mechanism": "Kation monovalen K+ dapat ditoleransi hingga konsentrasi total <= 40 mEq/L dalam campuran TPN.",
    "clinicalEffect": "Emulsi tetap stabil bila konsentrasi kalium terkontrol.",
    "recommendation": "BERSYARAT: Batasi konsentrasi kalium dan periksa stabilitas emulsi sebelum infus."
  },
  {
    "drugAId": "iv-lipid-emulsion",
    "drugBId": "iv-midazolam",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Stabilitas emulsi lipid terjaga selama kontak Y-site standar.",
    "clinicalEffect": "Emulsi homogen.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-lipid-emulsion",
    "drugBId": "iv-heparin",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Kompatibel pada konsentrasi standar infus TPN (1-2 unit/mL) untuk mencegah trombosis kateter.",
    "clinicalEffect": "Emulsi stabil.",
    "recommendation": "KOMPATIBEL via Y-site atau dalam kantong TPN."
  },
  {
    "drugAId": "iv-sugammadex",
    "drugBId": "iv-propofol",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Kompatibilitas fisiko-kimiawi terbukti stabil selama simulasi kontak Y-site 4 jam.",
    "clinicalEffect": "Larutan dan emulsi tetap stabil tanpa presipitasi.",
    "recommendation": "KOMPATIBEL via Y-site di kamar operasi."
  },
  {
    "drugAId": "iv-sugammadex",
    "drugBId": "iv-fentanyl",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Tidak ada penurunan kadar fentanil atau presipitasi sugammadex.",
    "clinicalEffect": "Larutan jernih homogen.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-sugammadex",
    "drugBId": "iv-remifentanil",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Kompatibel via Y-site tanpa interaksi kimiawi.",
    "clinicalEffect": "Larutan stabil.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-sugammadex",
    "drugBId": "iv-dexamethasone",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Kompatibilitas fisiko-kimiawi baik tanpa pembentukan kristal.",
    "clinicalEffect": "Larutan jernih.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-remifentanil",
    "drugBId": "iv-propofol",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Kombinasi TIVA (Total Intravenous Anesthesia) baku emas stabil via Y-site.",
    "clinicalEffect": "Emulsi stabil dan analgesia terkontrol prima.",
    "recommendation": "KOMPATIBEL: Aman diberikan co-infus via Y-site di kamar bedah."
  },
  {
    "drugAId": "iv-remifentanil",
    "drugBId": "iv-midazolam",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Larutan jernih stabil tanpa presipitasi.",
    "clinicalEffect": "Larutan stabil.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-remifentanil",
    "drugBId": "iv-rocuronium",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Tidak ada penurunan kadar obat atau presipitasi.",
    "clinicalEffect": "Anestesi dan relaksasi otot stabil.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-remifentanil",
    "drugBId": "iv-atracurium",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Kedua obat stabil pada konsentrasi standar kamar bedah.",
    "clinicalEffect": "Larutan jernih.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-remifentanil",
    "drugBId": "iv-ondansetron",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Larutan tetap jernih dan stabil.",
    "clinicalEffect": "Pencegahan mual muntah pasca bedah berjalan lancar.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-remifentanil",
    "drugBId": "iv-dexamethasone",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Stabilitas fisiko-kimiawi terjaga baik.",
    "clinicalEffect": "Larutan jernih.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-remifentanil",
    "drugBId": "iv-norepinephrine",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Larutan tetap stabil pada pH asam.",
    "clinicalEffect": "Kontrol tekanan darah dan analgesia TIVA stabil.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-ketamine",
    "drugBId": "iv-dexmedetomidine",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Kedua obat stabil tanpa presipitasi.",
    "clinicalEffect": "Sedasi prosedural optimal tanpa depresi napas.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-ketamine",
    "drugBId": "iv-fentanyl",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Larutan jernih tanpa perubahan warna.",
    "clinicalEffect": "Analgesia multimodal stabil.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-ketamine",
    "drugBId": "iv-rocuronium",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Stabilitas terjaga selama 4 jam kontak.",
    "clinicalEffect": "Induksi anestesi berjalan mulus.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-ketamine-s",
    "drugBId": "iv-propofol",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Esketamin stabil bersama emulsi propofol.",
    "clinicalEffect": "Emulsi homogen terjaga.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-ketamine-s",
    "drugBId": "iv-fentanyl",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Larutan stabil tanpa presipitasi.",
    "clinicalEffect": "Analgesia pasca bedah terkoordinasi baik.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-ketamine-s",
    "drugBId": "iv-midazolam",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Kompatibilitas prima pada pH asam.",
    "clinicalEffect": "Larutan jernih.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-ketamine-s",
    "drugBId": "iv-thiopental",
    "status": "incompatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Presipitasi instan akibat perbedaan pH: Thiopental basa (pH 10.5) mengendapkan esketamin asam.",
    "clinicalEffect": "Kekeruhan putih tebal seketika.",
    "recommendation": "KONTRAINDIKASI MUTLAK SEJALUR."
  },
  {
    "drugAId": "iv-propofol",
    "drugBId": "iv-atracurium",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Emulsi stabil selama waktu kontak Y-site standar.",
    "clinicalEffect": "Larutan homogen.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-propofol",
    "drugBId": "iv-dexamethasone",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Tidak ada pemisahan fase emulsi.",
    "clinicalEffect": "Larutan stabil.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-propofol",
    "drugBId": "iv-amiodarone",
    "status": "incompatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Surfaktan amiodaron (polysorbate 80) mendestabilisasi emulsi lipid propofol memicu koalesensi droplet minyak.",
    "clinicalEffect": "Emulsi pecah dan risiko emboli lemak.",
    "recommendation": "KONTRAINDIKASI SEJALUR. Pasang jalur vena terpisah."
  },
  {
    "drugAId": "iv-propofol",
    "drugBId": "iv-calcium-gluconate",
    "status": "incompatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Kation kalsium divalen merusak muatan penstabil emulsi propofol.",
    "clinicalEffect": "Pecahnya emulsi lipid.",
    "recommendation": "KONTRAINDIKASI SEJALUR PEKAT."
  },
  {
    "drugAId": "iv-propofol",
    "drugBId": "iv-magnesium-sulfate",
    "status": "incompatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Destabilisasi emulsi oleh ion magnesium.",
    "clinicalEffect": "Koalesensi droplet lipid.",
    "recommendation": "KONTRAINDIKASI SEJALUR PEKAT."
  },
  {
    "drugAId": "iv-propofol",
    "drugBId": "iv-potassium-chloride",
    "status": "incompatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Larutan pekat KCl memicu pemisahan lapisan emulsi propofol.",
    "clinicalEffect": "Emulsi pecah membentuk tetesan minyak bebas.",
    "recommendation": "KONTRAINDIKASI SEJALUR PEKAT. Gunakan jalur infus terpisah."
  },
  {
    "drugAId": "iv-dexmedetomidine",
    "drugBId": "iv-morphine",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Larutan tetap stabil tanpa presipitasi.",
    "clinicalEffect": "Analgesia-sedasi terkoordinasi stabil.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-dexmedetomidine",
    "drugBId": "iv-midazolam",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Kedua obat stabil pada konsentrasi standar ICU.",
    "clinicalEffect": "Larutan jernih.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-dexmedetomidine",
    "drugBId": "iv-heparin",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Tidak ada penurunan potensi heparin atau presipitasi.",
    "clinicalEffect": "Larutan stabil.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-dexmedetomidine",
    "drugBId": "iv-insulin-regular",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Kompatibel via percabangan Y-site pada konsentrasi standar.",
    "clinicalEffect": "Larutan jernih stabil.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-idarucizumab",
    "drugBId": "iv-heparin",
    "status": "incompatible",
    "evidence": "FDA Labeling",
    "mechanism": "Idarucizumab wajib diberikan melalui jalur infus steril khusus tanpa pencampuran obat lain.",
    "clinicalEffect": "Potensi presipitasi protein antibodi dan penurunan efikasi reversal.",
    "recommendation": "KONTRAINDIKASI SEJALUR. Gunakan dedicated line."
  },
  {
    "drugAId": "iv-idarucizumab",
    "drugBId": "iv-tranexamic-acid",
    "status": "incompatible",
    "evidence": "FDA Labeling",
    "mechanism": "Wajib jalur infus steril khusus tanpa obat lain sejalur.",
    "clinicalEffect": "Risiko inkompatibilitas protein antibodi.",
    "recommendation": "KONTRAINDIKASI SEJALUR."
  },
  {
    "drugAId": "iv-pralidoxime",
    "drugBId": "iv-atropine",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Kombinasi standar baku emas antidot keracunan organofosfat terbukti stabil co-infus via Y-site.",
    "clinicalEffect": "Reaktivasi enzim kolinesterase dan blokade muskarinik berjalan sinergis.",
    "recommendation": "KOMPATIBEL: Sangat dianjurkan untuk terapi darurat toksikologi organofosfat."
  },
  {
    "drugAId": "iv-sodium-thiosulfate",
    "drugBId": "iv-norepinephrine",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Larutan stabil tanpa perubahan absorbansi atau presipitasi.",
    "clinicalEffect": "Dukungan hemodinamik stabil.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-protamine",
    "drugBId": "iv-heparin",
    "status": "incompatible",
    "evidence": "Clinical Study",
    "mechanism": "REAKSI NETRALISASI PREMATUR DI SELANG: Protamina mengikat heparin seketika di dalam selang infus membentuk garam netral inaktif.",
    "clinicalEffect": "Penyumbatan lumen jarum dan hilangnya efek netralisasi sistemik.",
    "recommendation": "JANGAN DIBERIKAN SEJALUR BERSAMAAN. Berikan protamin hanya setelah infus heparin dihentikan dan bilas selang infus."
  },
  {
    "drugAId": "iv-protamine",
    "drugBId": "iv-fentanyl",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Kompatibilitas fisiko-kimiawi baik.",
    "clinicalEffect": "Larutan jernih.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-protamine",
    "drugBId": "iv-midazolam",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Larutan tetap jernih dan stabil.",
    "clinicalEffect": "Larutan stabil.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-pembrolizumab",
    "drugBId": "iv-dexamethasone",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Kompatibel via percabangan Y-site fisik (namun waspadai pengaruh steroid pada respons imunoterapi).",
    "clinicalEffect": "Larutan tetap jernih tanpa agregasi protein.",
    "recommendation": "KOMPATIBEL FISIK Y-SITE: Evaluasi indikasi klinis kortikosteroid pada pasien imunoterapi."
  },
  {
    "drugAId": "iv-pembrolizumab",
    "drugBId": "iv-ondansetron",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Tidak ada presipitasi atau kekeruhan partikulat.",
    "clinicalEffect": "Larutan jernih.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-bevacizumab",
    "drugBId": "iv-paclitaxel",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Kompatibel via percabangan Y-site dalam pelarut NaCl 0.9%.",
    "clinicalEffect": "Larutan stabil.",
    "recommendation": "KOMPATIBEL via Y-site dengan filter inline 0.2 mikron."
  },
  {
    "drugAId": "iv-bevacizumab",
    "drugBId": "iv-carboplatin",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Kombinasi kemo-imunoterapi standar stabil via Y-site.",
    "clinicalEffect": "Kedua obat mempertahankan stabilitas.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-bortezomib",
    "drugBId": "iv-dexamethasone",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Kombinasi standar mieloma multipel stabil via percabangan Y-site dalam NaCl 0.9%.",
    "clinicalEffect": "Larutan jernih.",
    "recommendation": "KOMPATIBEL via Y-site."
  },
  {
    "drugAId": "iv-trastuzumab-emtansine",
    "drugBId": "iv-ondansetron",
    "status": "compatible",
    "evidence": "Trissel's 2024",
    "mechanism": "Larutan tetap jernih dan stabil dalam kantong PVC-free.",
    "clinicalEffect": "Antiemetik dan terapi ADC aman sejalur.",
    "recommendation": "KOMPATIBEL via Y-site dengan filter 0.22 mikron."
  }
];
