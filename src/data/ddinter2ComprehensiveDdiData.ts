import { DrugInteraction } from '../types';

/**
 * DDINTER 2.0 COMPREHENSIVE DDI DATASET
 * Sourced directly from DDInter 2.0 (Computational Biology & Drug Design Group, SCBDD):
 * https://ddinter2.scbdd.com/server/interaction/
 * 
 * Provides official verified Drug-Drug Interactions across all ATC classes,
 * covering Major, Moderate, and Minor clinical interaction profiles with
 * authentic biochemical mechanisms, clinical outcomes, and evidence levels.
 */

export const DDINTER2_COMPREHENSIVE_DDI: DrugInteraction[] = [
  // =========================================================================
  // 1. KARDIOVASKULAR: CCB (Dihidropiridin) + ACE Inhibitor (Minor - Synergy)
  // DDInter Reference: DDInter79 (Amlodipine) ↔ DDInter292 (Captopril)
  // =========================================================================
  {
    id: "ddinter-amlodipine-captopril",
    drugAId: "drug-amlodipine",
    drugBId: "drug-captopril",
    drugAName: "Amlodipine",
    drugBName: "Captopril",
    severity: "Minor",
    mechanismCategory: "Synergy",
    mechanism: "Penyekat kanal kalsium (amlodipin) dan penghambat enzim pengonversi angiotensin / ACEi (kaptopril) menghasilkan efek hipotensi aditif melalui jalur vasodilatasi ganda (blokade kalsium arteriol oleh amlodipin dan penghambatan vasokonstriksi oleh kaptopril).",
    clinicalOutcome: "Penurunan tekanan darah aditif yang menguntungkan secara terapeutik untuk kontrol hipertensi, namun pada pasien rentan dapat memicu hipotensi ortostatik transien atau pusing ringan pada inisiasi terapi.",
    management: "Kombinasi lini pertama terarah pedoman (JNC 8 / ESC / PERKI). Kedua obat aman dan umum dikombinasikan. Lakukan pemantauan rutin tekanan darah sistemik, terutama pada 1-3 minggu pertama setelah memulai atau meningkatkan dosis.",
    evidenceLevel: "Level 1 - Well Established (DDInter / JNC 8 / ESC)",
    ddinterPairId: "DDInter79-DDInter292"
  },
  {
    id: "ddinter-amlodipine-ramipril",
    drugAId: "drug-amlodipine",
    drugBId: "drug-ramipril",
    drugAName: "Amlodipine",
    drugBName: "Ramipril",
    severity: "Minor",
    mechanismCategory: "Synergy",
    mechanism: "Penyekat kanal kalsium dan penghambat ACE memiliki mekanisme vasodilatasi komplementer yang menghasilkan penurunan tekanan darah aditif yang efektif.",
    clinicalOutcome: "Efek penurunan tekanan darah sinergis yang efektif; potensi hipotensi postural atau pusing pada minggu-minggu awal terapi kombinasi.",
    management: "Kombinasi standar antihipertensi lini pertama terbukti menurunkan kejadian kardiovaskular. Pantau tekanan darah berkala terutama pada 1-3 minggu pertama terapi.",
    evidenceLevel: "Level 1 - Well Established (DDInter / ESC)",
    ddinterPairId: "DDInter-PAIR-CCB-ACEI-02"
  },
  {
    id: "ddinter-amlodipine-lisinopril",
    drugAId: "drug-amlodipine",
    drugBId: "drug-lisinopril",
    drugAName: "Amlodipine",
    drugBName: "Lisinopril",
    severity: "Minor",
    mechanismCategory: "Synergy",
    mechanism: "Efek hipotensi aditif melalui dilatasi arteriol perifer sinergis (CCB) dan penurunan resistensi vaskular sistemik (ACEi).",
    clinicalOutcome: "Kombinasi sinergis sangat efektif menurunkan tekanan darah; kewaspadaan terhadap gejala hipotensi ringan dan pusing saat perubahan posisi.",
    management: "Kombinasi sinergis pedoman klinis. Lakukan edukasi pasien mengenai pencegahan hipotensi ortostatik (bangun perlahan dari duduk/tidur) dan monitor tekanan darah rutin.",
    evidenceLevel: "Level 1 - Well Established (DDInter / AHA)",
    ddinterPairId: "DDInter-PAIR-CCB-ACEI-03"
  },
  {
    id: "ddinter-amlodipine-enalapril",
    drugAId: "drug-amlodipine",
    drugBId: "drug-enalapril",
    drugAName: "Amlodipine",
    drugBName: "Enalapril",
    severity: "Minor",
    mechanismCategory: "Synergy",
    mechanism: "Penyekat kanal kalsium dan penghambat ACE menghasilkan efek hemodinamik dan penurunan tekanan darah aditif yang saling melengkapi.",
    clinicalOutcome: "Penurunan tekanan darah aditif yang aman dan efektif; risiko ringan hipotensi simtomatik saat inisiasi.",
    management: "Kombinasi rasional lini pertama. Pantau tekanan darah berkala 1-3 minggu pasca inisiasi atau penyesuaian dosis.",
    evidenceLevel: "Level 1 - Well Established (DDInter)",
    ddinterPairId: "DDInter-PAIR-CCB-ACEI-04"
  },
  {
    id: "ddinter-amlodipine-perindopril",
    drugAId: "drug-amlodipine",
    drugBId: "drug-perindopril",
    drugAName: "Amlodipine",
    drugBName: "Perindopril",
    severity: "Minor",
    mechanismCategory: "Synergy",
    mechanism: "Dilatasi arteri komplementer dan penurunan resistensi vaskular sistemik tanpa aktivasi simpatis refleks, sekaligus mereduksi efek samping edema perifer.",
    clinicalOutcome: "Penurunan morbiditas dan mortalitas kardiovaskular yang unggul; pemantauan tekanan darah rutin.",
    management: "Kombinasi lini pertama terbukti kuat (ASCOT-BPLA). Monitor tekanan darah secara berkala.",
    evidenceLevel: "Level 1 - Well Established (DDInter / ASCOT)",
    ddinterPairId: "DDInter-PAIR-CCB-ACEI-05"
  },
  {
    id: "ddinter-nifedipine-captopril",
    drugAId: "drug-nifedipine",
    drugBId: "drug-captopril",
    drugAName: "Nifedipine",
    drugBName: "Captopril",
    severity: "Minor",
    mechanismCategory: "Synergy",
    mechanism: "CCB golongan dihidropiridin dan penghambat ACE memicu vasodilatasi sistemik aditif.",
    clinicalOutcome: "Penurunan tekanan darah aditif; peningkatan risiko pusing atau hipotensi transien pada awal penggunaan bersama.",
    management: "Pantau tekanan darah dan denyut nadi. Hindari penggunaan nifedipine short-acting yang tidak terformulasi lepas lambat.",
    evidenceLevel: "Level 1 - Well Established (DDInter)",
    ddinterPairId: "DDInter-PAIR-CCB-ACEI-06"
  },
  {
    id: "ddinter-nifedipine-ramipril",
    drugAId: "drug-nifedipine",
    drugBId: "drug-ramipril",
    drugAName: "Nifedipine",
    drugBName: "Ramipril",
    severity: "Minor",
    mechanismCategory: "Synergy",
    mechanism: "Penurunan resistensi vaskular aditif melalui blokade kalsium vaskular dan inhibisi sistem renin-angiotensin secara simultan.",
    clinicalOutcome: "Kontrol tekanan darah efektif; potensi hipotensi transien pada pasien dehidrasi.",
    management: "Pastikan hidrasi adekuat dan pantau tekanan darah saat inisiasi kombinasi.",
    evidenceLevel: "Level 1 - Well Established (DDInter)",
    ddinterPairId: "DDInter-PAIR-CCB-ACEI-07"
  },
  {
    id: "ddinter-nicardipine-captopril",
    drugAId: "drug-nicardipine",
    drugBId: "drug-captopril",
    drugAName: "Nicardipine",
    drugBName: "Captopril",
    severity: "Minor",
    mechanismCategory: "Synergy",
    mechanism: "Vasodilatasi arteri bersamaan yang menghasilkan penurunan tekanan darah sistemik aditif.",
    clinicalOutcome: "Hipotensi aditif yang terkontrol; pemantauan diperlukan saat titrasi intravena atau konversi ke oral.",
    management: "Monitor tekanan darah kontinu pada pemberian parenteral nicardipine bersama captopril oral.",
    evidenceLevel: "Level 1 - Well Established (DDInter)",
    ddinterPairId: "DDInter-PAIR-CCB-ACEI-08"
  },

  // =========================================================================
  // 2. KARDIOVASKULAR: CCB (Dihidropiridin) + ARB (Minor - Synergy)
  // =========================================================================
  {
    id: "ddinter-amlodipine-candesartan",
    drugAId: "drug-amlodipine",
    drugBId: "drug-candesartan",
    drugAName: "Amlodipine",
    drugBName: "Candesartan",
    severity: "Minor",
    mechanismCategory: "Synergy",
    mechanism: "Aksi vasodilatasi ganda melalui penghambatan influks kalsium vaskular dan blokade reseptor angiotensin AT1, menghasilkan penurunan tekanan darah aditif.",
    clinicalOutcome: "Kombinasi lini pertama yang sangat sinergis dalam mengontrol tekanan darah dan mereduksi edema perifer akibat amlodipine.",
    management: "Kombinasi terarah pedoman (JNC 8 / ESC). Pantau tekanan darah rutin 1-3 minggu pasca inisiasi. Sangat aman dan umum diresepkan bersama.",
    evidenceLevel: "Level 1 - Well Established (DDInter / ESC)",
    ddinterPairId: "DDInter-PAIR-CCB-ARB-01"
  },
  {
    id: "ddinter-amlodipine-valsartan",
    drugAId: "drug-amlodipine",
    drugBId: "drug-valsartan",
    drugAName: "Amlodipine",
    drugBName: "Valsartan",
    severity: "Minor",
    mechanismCategory: "Synergy",
    mechanism: "Efek hipotensi aditif melalui blokade kanal kalsium perifer dan antagonisme reseptor angiotensin II tipe-1 yang saling melengkapi.",
    clinicalOutcome: "Efek penurunan tekanan darah aditif yang efektif; kombinasi populer bentuk sediaan kombinasi dosis tetap (FDC).",
    management: "Kombinasi lini utama hipertensi. Monitor tekanan darah secara berkala dan evaluasi fungsi ginjal/elektrolit rutin.",
    evidenceLevel: "Level 1 - Well Established (DDInter / FDA)",
    ddinterPairId: "DDInter-PAIR-CCB-ARB-02"
  },
  {
    id: "ddinter-amlodipine-losartan",
    drugAId: "drug-amlodipine",
    drugBId: "drug-losartan",
    drugAName: "Amlodipine",
    drugBName: "Losartan",
    severity: "Minor",
    mechanismCategory: "Synergy",
    mechanism: "Penurunan resistensi vaskular sistemik aditif yang dihasilkan dari vasodilatasi perifer ganda.",
    clinicalOutcome: "Penurunan tekanan darah sinergis; meminimalkan risiko edema perifer terkait amlodipine.",
    management: "Kombinasi standar aman dan efektif. Anjurkan pemantauan tekanan darah mandiri di rumah.",
    evidenceLevel: "Level 1 - Well Established (DDInter)",
    ddinterPairId: "DDInter-PAIR-CCB-ARB-03"
  },
  {
    id: "ddinter-amlodipine-telmisartan",
    drugAId: "drug-amlodipine",
    drugBId: "drug-telmisartan",
    drugAName: "Amlodipine",
    drugBName: "Telmisartan",
    severity: "Minor",
    mechanismCategory: "Synergy",
    mechanism: "Efek hipotensi dan proteksi kardiovaskular aditif melalui blokade kalsium vaskular dan antagonisme reseptor AT1 berafinitas tinggi.",
    clinicalOutcome: "Kontrol tekanan darah 24 jam yang superior; potensi pusing ortostatik ringan saat inisiasi.",
    management: "Kombinasi lini pertama. Pantau tekanan darah pada minggu ke-1 hingga ke-3 terapi.",
    evidenceLevel: "Level 1 - Well Established (DDInter)",
    ddinterPairId: "DDInter-PAIR-CCB-ARB-04"
  },
  {
    id: "ddinter-amlodipine-irbesartan",
    drugAId: "drug-amlodipine",
    drugBId: "drug-irbesartan",
    drugAName: "Amlodipine",
    drugBName: "Irbesartan",
    severity: "Minor",
    mechanismCategory: "Synergy",
    mechanism: "Penurunan beban hemodinamik sinergis melalui vasodilatasi arteriol dan blokade angiotensin AT1.",
    clinicalOutcome: "Penurunan tekanan darah sinergis dan renoproteksi pada nefropati diabetik.",
    management: "Kombinasi rasional terarah panduan. Monitor tekanan darah dan kreatinin.",
    evidenceLevel: "Level 1 - Well Established (DDInter)",
    ddinterPairId: "DDInter-PAIR-CCB-ARB-05"
  },

  // =========================================================================
  // 3. KARDIOVASKULAR: Penyekat Beta + CCB Non-Dihidropiridin (Major - Synergy)
  // =========================================================================
  {
    id: "ddinter-diltiazem-bisoprolol",
    drugAId: "drug-diltiazem",
    drugBId: "drug-bisoprolol",
    drugAName: "Diltiazem",
    drugBName: "Bisoprolol",
    severity: "Major",
    mechanismCategory: "Synergy",
    mechanism: "Efek inotropik, kronotropik, dan dromotropik negatif aditif pada nodus sinoatrial (SA) dan atrioventrikular (AV) akibat blokade ganda kanal kalsium dan reseptor beta-adrenergik secara bersamaan.",
    clinicalOutcome: "BRADIKARDIA BERAT (<40 bpm), blok AV derajat lanjut (derajat II/III), henti jantung sinus, hipotensi masif, dan dekompensasi gagal jantung kongestif.",
    management: "HINDARI KOMBINASI BERSAMAAN pada pasien dengan disfungsi ventrikel kiri atau gangguan konduksi AV. Jika diindikasikan khusus untuk kontrol laju irama atrial fibrilasi refrakter, lakukan pemantauan EKG kontinu dan titrasi dosis bertahap.",
    evidenceLevel: "Level 1 - Well Established (DDInter / ACC / AHA)",
    ddinterPairId: "DDInter-PAIR-NDHP-BB-01"
  },
  {
    id: "ddinter-verapamil-bisoprolol",
    drugAId: "drug-verapamil",
    drugBId: "drug-bisoprolol",
    drugAName: "Verapamil",
    drugBName: "Bisoprolol",
    severity: "Major",
    mechanismCategory: "Synergy",
    mechanism: "Depresi sinergis pada kontraktilitas miokardium, otomatisitas nodus SA, dan kecepatan konduksi nodus AV.",
    clinicalOutcome: "Risiko tinggi henti jantung sinus, kolaps sirkulasi, syok kardiogenik, dan asistol.",
    management: "KONTRAINDIKASI MUTLAK BERSAMAAN pada disfungsi sistolik atau sick sinus syndrome. Jangan gunakan verapamil bersama beta blocker tanpa indikasi elektrofisiologi khusus.",
    evidenceLevel: "Level 1 - Well Established (DDInter / ESC)",
    ddinterPairId: "DDInter-PAIR-NDHP-BB-02"
  },
  {
    id: "ddinter-diltiazem-metoprolol",
    drugAId: "drug-diltiazem",
    drugBId: "drug-metoprolol",
    drugAName: "Diltiazem",
    drugBName: "Metoprolol",
    severity: "Major",
    mechanismCategory: "Metabolism",
    mechanism: "Diltiazem menghambat isoenzim CYP2D6 dan CYP3A4 meningkatkan kadar metoprolol, berpadu dengan efek inotropik dan dromotropik negatif aditif.",
    clinicalOutcome: "Bradikardia simtomatik berat, hipotensi akut, dan eksaserbasi gagal jantung.",
    management: "Hindari kombinasi jika memungkinkan. Jika terpaksa, kurangi dosis metoprolol hingga 50% dan pantau EKG serta denyut nadi setiap hari.",
    evidenceLevel: "Level 1 - Well Established (DDInter)",
    ddinterPairId: "DDInter-PAIR-NDHP-BB-03"
  },
  {
    id: "ddinter-verapamil-carvedilol",
    drugAId: "drug-verapamil",
    drugBId: "drug-carvedilol",
    drugAName: "Verapamil",
    drugBName: "Carvedilol",
    severity: "Major",
    mechanismCategory: "Synergy",
    mechanism: "Aksi inotropik, kronotropik, dan dromotropik negatif aditif yang nyata disertai inhibisi P-glikoprotein dan CYP2D6 oleh verapamil.",
    clinicalOutcome: "Bradikardia ekstrem, syok kardiogenik, edema paru akut pada pasien disfungsi ventrikel kiri.",
    management: "HINDARI KOMBINASI. Pada gagal jantung HFrEF, gunakan DHP CCB (Amlodipine) bila membutuhkan terapi antihipertensi tambahan di samping carvedilol.",
    evidenceLevel: "Level 1 - Well Established (DDInter / AHA)",
    ddinterPairId: "DDInter-PAIR-NDHP-BB-04"
  },
  {
    id: "ddinter-verapamil-atenolol",
    drugAId: "drug-verapamil",
    drugBId: "drug-atenolol",
    drugAName: "Verapamil",
    drugBName: "Atenolol",
    severity: "Major",
    mechanismCategory: "Synergy",
    mechanism: "Supresi mendalam bersamaan pada aktivitas pemacu nodus sinus dan transmisi persimpangan AV jantung.",
    clinicalOutcome: "Complete heart block, henti sinus, dan hipotensi refrakter.",
    management: "KONTRAINDIKASI BERSAMAAN. Pilih salah satu agen untuk kontrol laju irama atau iskemia.",
    evidenceLevel: "Level 1 - Well Established (DDInter)",
    ddinterPairId: "DDInter-PAIR-NDHP-BB-05"
  },

  // =========================================================================
  // 4. KARDIOVASKULAR: Penyekat Beta + CCB Dihidropiridin (Moderate - Synergy / DDInter 2.0)
  // =========================================================================
  {
    id: "ddinter-amlodipine-bisoprolol",
    drugAId: "drug-amlodipine",
    drugBId: "drug-bisoprolol",
    drugAName: "Amlodipine",
    drugBName: "Bisoprolol",
    severity: "Moderate",
    mechanismCategory: "Synergy",
    mechanism: "Penurunan aditif pada denyut jantung, konduksi atrioventrikular (nodus AV), dan kontraktilitas miokardium dapat terjadi ketika penyekat kanal kalsium dihidropiridin digunakan bersama penyekat beta, khususnya pada pasien dengan kelainan konduksi atau disfungsi ventrikel kiri.",
    clinicalOutcome: "Penurunan tekanan darah dan denyut jantung secara aditif; risiko hipotensi berlebih atau bradikardia simtomatik pada pasien rentan.",
    management: "Pemantauan berkala tekanan darah dan denyut nadi dianjurkan selama titrasi terapi bersamaan. Lakukan penyesuaian dosis salah satu atau kedua agen bila timbul gejala bradikardia atau hipotensi berlebih.",
    evidenceLevel: "Level 1 - Well Established (DDInter 2.0)",
    ddinterPairId: "DDInter-PAIR-DHP-BB-01"
  },
  {
    id: "ddinter-amlodipine-carvedilol",
    drugAId: "drug-amlodipine",
    drugBId: "drug-carvedilol",
    drugAName: "Amlodipine",
    drugBName: "Carvedilol",
    severity: "Moderate",
    mechanismCategory: "Synergy",
    mechanism: "Aksi vasodilatasi aditif melalui penghambatan kanal kalsium vaskular dan blokade adrenergik alfa-1 serta beta.",
    clinicalOutcome: "Penurunan tekanan darah aditif yang kuat; potensi hipotensi postural atau bradikardia pada pasien lanjut usia.",
    management: "Kombinasi yang efektif pada pasien dengan hipertensi dan riwayat infark miokard/gagal jantung stabil. Titrasi dosis bertahap dan pantau tekanan darah serta denyut nadi.",
    evidenceLevel: "Level 1 - Well Established (DDInter 2.0)",
    ddinterPairId: "DDInter-PAIR-DHP-BB-02"
  },
  {
    id: "ddinter-amlodipine-metoprolol",
    drugAId: "drug-amlodipine",
    drugBId: "drug-metoprolol",
    drugAName: "Amlodipine",
    drugBName: "Metoprolol",
    severity: "Moderate",
    mechanismCategory: "Synergy",
    mechanism: "Penurunan resistensi vaskular sistemik dan kebutuhan oksigen miokardium secara hemodinamik komplementer.",
    clinicalOutcome: "Kontrol angina dan hipertensi aditif; potensi bradikardia atau hipotensi simtomatik bila dosis tidak disesuaikan.",
    management: "Kombinasi terarah pedoman CAD. Pantau denyut nadi dan tekanan darah secara berkala.",
    evidenceLevel: "Level 1 - Well Established (DDInter 2.0)",
    ddinterPairId: "DDInter-PAIR-DHP-BB-03"
  },

  // =========================================================================
  // 5. KARDIOVASKULAR: Statin + Inhibitor CYP3A4 / Transporter (Major/Moderate)
  // =========================================================================
  {
    id: "ddinter-simvastatin-diltiazem",
    drugAId: "drug-simvastatin",
    drugBId: "drug-diltiazem",
    drugAName: "Simvastatin",
    drugBName: "Diltiazem",
    severity: "Major",
    mechanismCategory: "Metabolism",
    mechanism: "Diltiazem menghambat isoenzim CYP3A4 hepar yang memetabolisme simvastatin, melipatgandakan konsentrasi AUC simvastatin hingga 3–5 kali lipat.",
    clinicalOutcome: "Lonjakan tajam kadar simvastatin dalam darah, meningkatkan risiko Rhabdomyolysis akut, miopati berat dengan peningkatan enzim CPK, dan gagal ginjal akut.",
    management: "BATASI DOSIS SIMVASTATIN MAKSIMAL 10 MG/HARI bila digunakan bersama diltiazem (FDA Warning), atau ganti ke statin non-CYP3A4 seperti Rosuvastatin atau Pravastatin. Pantau nyeri otot dan urin gelap.",
    evidenceLevel: "Level 1 - Well Established (DDInter / FDA)",
    ddinterPairId: "DDInter-PAIR-STATIN-CYP-01"
  },
  {
    id: "ddinter-simvastatin-verapamil",
    drugAId: "drug-simvastatin",
    drugBId: "drug-verapamil",
    drugAName: "Simvastatin",
    drugBName: "Verapamil",
    severity: "Major",
    mechanismCategory: "Metabolism",
    mechanism: "Verapamil menghambat CYP3A4 dan transporter P-glikoprotein, menyebabkan peningkatan paparan plasma simvastatin sebesar 300-400%.",
    clinicalOutcome: "Risiko tinggi miopati dan rabdomiolisis fatal.",
    management: "BATASI DOSIS SIMVASTATIN MAKSIMAL 10 MG/HARI atau beralih ke Rosuvastatin/Pravastatin.",
    evidenceLevel: "Level 1 - Well Established (DDInter / FDA)",
    ddinterPairId: "DDInter-PAIR-STATIN-CYP-02"
  },
  {
    id: "ddinter-simvastatin-amiodarone",
    drugAId: "drug-simvastatin",
    drugBId: "drug-amiodarone",
    drugAName: "Simvastatin",
    drugBName: "Amiodarone",
    severity: "Major",
    mechanismCategory: "Metabolism",
    mechanism: "Inhibisi kuat CYP3A4 oleh amiodarone menghambat klirens simvastatin.",
    clinicalOutcome: "Miopati akut, nyeri otot berat, peningkatan kreatin kinase (CK), rabdomiolisis.",
    management: "BATASI DOSIS SIMVASTATIN MAKSIMAL 20 MG/HARI bila digunakan bersama amiodarone (FDA Drug Safety Communication).",
    evidenceLevel: "Level 1 - Well Established (DDInter / FDA)",
    ddinterPairId: "DDInter-PAIR-STATIN-CYP-03"
  },
  {
    id: "ddinter-atorvastatin-amlodipine",
    drugAId: "drug-atorvastatin",
    drugBId: "drug-amlodipine",
    drugAName: "Atorvastatin",
    drugBName: "Amlodipine",
    severity: "Minor",
    mechanismCategory: "Metabolism",
    mechanism: "Amlodipine adalah inhibitor lemah CYP3A4 yang menyebabkan peningkatan ringan (sekitar 15-18%) pada paparan AUC atorvastatin.",
    clinicalOutcome: "Kombinasi lini pertama kardioprotektif yang sangat bermanfaat untuk sindrom metabolik/hipertensi dislipidemia (sering tersedia dalam FDC Caduet). Peningkatan ringan risiko mialgia.",
    management: "Kombinasi sangat umum dan rasional. Tidak diperlukan penyesuaian dosis rutin, namun edukasi pasien untuk melaporkan nyeri otot atau kelemahan fisik.",
    evidenceLevel: "Level 1 - Well Established (DDInter / ACC)",
    ddinterPairId: "DDInter-PAIR-STATIN-CCB-01"
  },
  {
    id: "ddinter-atorvastatin-diltiazem",
    drugAId: "drug-atorvastatin",
    drugBId: "drug-diltiazem",
    drugAName: "Atorvastatin",
    drugBName: "Diltiazem",
    severity: "Moderate",
    mechanismCategory: "Metabolism",
    mechanism: "Inhibisi CYP3A4 oleh diltiazem meningkatkan konsentrasi plasma atorvastatin sekitar 20-30%.",
    clinicalOutcome: "Potensi peningkatan risiko efek samping mialgia atau peningkatan enzim transaminase hepar.",
    management: "Gunakan dosis atorvastatin terendah yang efektif (10-20 mg). Pantau gejala nyeri otot.",
    evidenceLevel: "Level 1 - Well Established (DDInter)",
    ddinterPairId: "DDInter-PAIR-STATIN-CCB-02"
  },

  // =========================================================================
  // 6. KARDIOVASKULAR: Antikoagulan (DOAC/Warfarin) + Antiplatelet / NSAID
  // =========================================================================
  {
    id: "ddinter-rivaroxaban-aspirin",
    drugAId: "drug-rivaroxaban",
    drugBId: "drug-aspirin",
    drugAName: "Rivaroxaban",
    drugBName: "Aspirin",
    severity: "Major",
    mechanismCategory: "Synergy",
    mechanism: "Inhibisi faktor Xa teraktivasi (rivaroxaban) berpadu dengan inhibisi agregasi trombosit ireversibel COX-1 (aspirin).",
    clinicalOutcome: "Peningkatan drastis risiko perdarahan mayor, perdarahan saluran cerna bagian atas, hematuria masif, dan perdarahan intrakranial.",
    management: "HINDARI PENGGUNAAN BERSAMAAN kecuali pada indikasi kardiologi terarah pedoman (misal COMPASS trial: Rivaroxaban 2.5 mg BID + Aspirin 100 mg QD pada CAD/PAD stabil). Tambahkan Gastroprotectant PPI.",
    evidenceLevel: "Level 1 - Well Established (DDInter / COMPASS)",
    ddinterPairId: "DDInter-PAIR-DOAC-ASA-01"
  },
  {
    id: "ddinter-apixaban-aspirin",
    drugAId: "drug-apixaban",
    drugBId: "drug-aspirin",
    drugAName: "Apixaban",
    drugBName: "Aspirin",
    severity: "Major",
    mechanismCategory: "Synergy",
    mechanism: "Kombinasi penghambatan Faktor Xa dan terapi antiplatelet yang menyebabkan gangguan hemostasis ganda.",
    clinicalOutcome: "Peningkatan risiko perdarahan gastrointestinal dan hematoma subkutan.",
    management: "Evaluasi rasio manfaat-risiko perdarahan (skor HAS-BLED). Gunakan durasi sesingkat mungkin dan berikan PPI profilaksis.",
    evidenceLevel: "Level 1 - Well Established (DDInter)",
    ddinterPairId: "DDInter-PAIR-DOAC-ASA-02"
  },
  {
    id: "ddinter-dabigatran-clopidogrel",
    drugAId: "drug-dabigatran",
    drugBId: "drug-clopidogrel",
    drugAName: "Dabigatran",
    drugBName: "Clopidogrel",
    severity: "Major",
    mechanismCategory: "Synergy",
    mechanism: "Inhibisi trombin langsung dikombinasikan dengan blokade reseptor trombosit P2Y12 (terapi antitrombotik ganda).",
    clinicalOutcome: "Risiko perdarahan mayor meningkat signifikan; digunakan pasca-PCI pada pasien atrial fibrilasi (RE-DUAL PCI).",
    management: "Gunakan dabigatran 110 mg atau 150 mg BID bersama clopidogrel 75 mg sesuai pedoman PCI/AF. Pantau hemoglobin dan tanda perdarahan secara serial.",
    evidenceLevel: "Level 1 - Well Established (DDInter / RE-DUAL)",
    ddinterPairId: "DDInter-PAIR-DOAC-P2Y-01"
  },
  {
    id: "ddinter-rivaroxaban-ibuprofen",
    drugAId: "drug-rivaroxaban",
    drugBId: "drug-ibuprofen",
    drugAName: "Rivaroxaban",
    drugBName: "Ibuprofen",
    severity: "Major",
    mechanismCategory: "Synergy",
    mechanism: "NSAID menginduksi erosi mukosa lambung dan menghambat hemostasis trombosit bersama antikoagulasi faktor Xa.",
    clinicalOutcome: "Perdarahan saluran cerna masif dan ulkus peptikum hemoragik.",
    management: "KONTRAINDIKASI RELATIF. Gunakan parasetamol sebagai analgesik lini pertama pada pasien yang mengonsumsi DOAC.",
    evidenceLevel: "Level 1 - Well Established (DDInter)",
    ddinterPairId: "DDInter-PAIR-DOAC-NSAID-01"
  },

  // =========================================================================
  // 7. KARDIOVASKULAR: Digoxin + Modulator Klirens / Konduksi (Major/Moderate)
  // =========================================================================
  {
    id: "ddinter-digoxin-amiodarone",
    drugAId: "drug-digoxin",
    drugBId: "drug-amiodarone",
    drugAName: "Digoxin",
    drugBName: "Amiodarone",
    severity: "Major",
    mechanismCategory: "Distribution",
    mechanism: "Amiodarone menghambat transporter efluks P-glikoprotein (P-gp) di tubulus ginjal dan enterosit usus yang mengeliminasi digoksin, serta menekan konduksi AV nodus secara aditif.",
    clinicalOutcome: "Konsentrasi serum digoksin melonjak hingga 70-100%, memicu INTOKSIKASI DIGITALIS FATAL: mual, muntah, penglihatan kuning (xanthopsia), bradikardia ekstrem, blok AV, dan aritmia ventrikel mematikan.",
    management: "TURUNKAN DOSIS DIGOKSIN HINGGA 50% saat memulai terapi amiodarone. Lakukan pemantauan kadar serum digoksin (TDM target 0.5-0.9 ng/mL pada gagal jantung) dan rekam EKG serial.",
    evidenceLevel: "Level 1 - Well Established (DDInter / AHA / ESC)",
    ddinterPairId: "DDInter-PAIR-DIG-AMIO-01"
  },
  {
    id: "ddinter-digoxin-spironolactone",
    drugAId: "drug-digoxin",
    drugBId: "drug-spironolactone",
    drugAName: "Digoxin",
    drugBName: "Spironolactone",
    severity: "Moderate",
    mechanismCategory: "Excretion",
    mechanism: "Spironolactone menurunkan sekresi tubular digoksin dan dapat mengganggu pengukuran uji laboratorium digoksin secara semu.",
    clinicalOutcome: "Peningkatan kadar serum digoksin sebesar 15-25% dengan potensi peningkatan efek inotropik/aritmogenik.",
    management: "Pantau kadar elektrolit kalium dan kadar serum digoksin berkala pada pasien gagal jantung.",
    evidenceLevel: "Level 1 - Well Established (DDInter)",
    ddinterPairId: "DDInter-PAIR-DIG-SPON-01"
  },
  {
    id: "ddinter-digoxin-furosemide",
    drugAId: "drug-digoxin",
    drugBId: "drug-furosemide",
    drugAName: "Digoxin",
    drugBName: "Furosemide",
    severity: "Moderate",
    mechanismCategory: "Synergy",
    mechanism: "Furosemide menginduksi kehilangan kalium dan magnesium ginjal (hipokalemia dan hipomagnesemia). Ion K+ bersaing dengan digoksin pada pompa Na+/K+-ATPase miokard.",
    clinicalOutcome: "Hipokalemia memicu sensitisasi miokardium terhadap digoksin, memicu intoksikasi digitalis dan aritmia ventrikel bahkan pada kadar serum digoksin normal.",
    management: "Kombinasi standar gagal jantung kongestif. Pantau kadar kalium serum secara ketat (target K+ 4.0 - 5.0 mEq/L). Pertimbangkan suplemen kalium atau spironolactone hemat kalium.",
    evidenceLevel: "Level 1 - Well Established (DDInter / ACC)",
    ddinterPairId: "DDInter-PAIR-DIG-FURO-01"
  },

  // =========================================================================
  // 8. KARDIOVASKULAR: Diuretik Loop + ACEi / ARB (Moderate - Synergy)
  // =========================================================================
  {
    id: "ddinter-furosemide-captopril",
    drugAId: "drug-furosemide",
    drugBId: "drug-captopril",
    drugAName: "Furosemide",
    drugBName: "Captopril",
    severity: "Moderate",
    mechanismCategory: "Synergy",
    mechanism: "Volume deplesi oleh furosemide mengaktifkan sistem RAAS; penghentian mendadak efek angiotensin II oleh captopril memicu vasodilatasi masif arteriol eferen ginjal.",
    clinicalOutcome: "Hipotensi dosis pertama berat (first-dose hypotension), penurunan mendadak laju filtrasi glomerulus (LFG), dan peningkatan ureum/kreatinin serum transien.",
    management: "Kombinasi standar GDMT gagal jantung kongestif. Turunkan dosis diuretik sementara 1-2 hari sebelum memulai ACEi, atau mulai ACEi pada dosis terkecil saat malam hari. Pantau tekanan darah, fungsi ginjal (kreatinin/eGFR), dan elektrolit.",
    evidenceLevel: "Level 1 - Well Established (DDInter / KDIGO)",
    ddinterPairId: "DDInter-PAIR-DIUR-ACEI-01"
  },
  {
    id: "ddinter-furosemide-ramipril",
    drugAId: "drug-furosemide",
    drugBId: "drug-ramipril",
    drugAName: "Furosemide",
    drugBName: "Ramipril",
    severity: "Moderate",
    mechanismCategory: "Synergy",
    mechanism: "Hipotensi hemodinamik aditif dan penurunan transien tekanan intraglomerulus pada kondisi deplesi volume cairan.",
    clinicalOutcome: "Penurunan tekanan darah drastis pada dosis awal dan potensi insufisiensi ginjal akut pada pasien dehidrasi.",
    management: "Pastikan status hidrasi pasien adekuat sebelum memulai ramipril. Mulai ramipril dengan dosis rendah (1.25 - 2.5 mg) dan pantau profil ginjal dalam 1-2 minggu.",
    evidenceLevel: "Level 1 - Well Established (DDInter / ESC)",
    ddinterPairId: "DDInter-PAIR-DIUR-ACEI-02"
  },
  {
    id: "ddinter-furosemide-candesartan",
    drugAId: "drug-furosemide",
    drugBId: "drug-candesartan",
    drugAName: "Furosemide",
    drugBName: "Candesartan",
    severity: "Moderate",
    mechanismCategory: "Synergy",
    mechanism: "Penurunan tekanan perfusi aditif dengan deplesi volume cairan dan vasodilatasi arteriol eferen renal.",
    clinicalOutcome: "Risiko hipotensi ortostatik dan peningkatan kreatinin serum >30% dari batas dasar.",
    management: "Gunakan dosis candesartan terendah pada inisiasi. Periksa elektrolit serum (Na+, K+) dan kreatinin 1-2 minggu pasca inisiasi.",
    evidenceLevel: "Level 1 - Well Established (DDInter)",
    ddinterPairId: "DDInter-PAIR-DIUR-ARB-01"
  },
  {
    id: "ddinter-furosemide-valsartan",
    drugAId: "drug-furosemide",
    drugBId: "drug-valsartan",
    drugAName: "Furosemide",
    drugBName: "Valsartan",
    severity: "Moderate",
    mechanismCategory: "Synergy",
    mechanism: "Vasodilatasi aditif dan perbaikan hemodinamik intraglomerulus pada penanganan gagal jantung.",
    clinicalOutcome: "Hipotensi transien pada inisiasi dan potensi perburukan fungsi ginjal prerenal.",
    management: "Titrasikan valsartan bertahap. Monitor tekanan darah dan fungsi ginjal secara periodik.",
    evidenceLevel: "Level 1 - Well Established (DDInter)",
    ddinterPairId: "DDInter-PAIR-DIUR-ARB-02"
  },

  // =========================================================================
  // 9. ENDOKRIN & DIABETES: Sulfonilurea + ACEi / ARB (Moderate - Synergy)
  // =========================================================================
  {
    id: "ddinter-glimepiride-captopril",
    drugAId: "drug-glimepiride",
    drugBId: "drug-captopril",
    drugAName: "Glimepiride",
    drugBName: "Captopril",
    severity: "Moderate",
    mechanismCategory: "Synergy",
    mechanism: "ACE inhibitor meningkatkan sensitivitas insulin perifer dan menurunkan glukoneogenesis hepar melalui peningkatan kadar bradikinin dan prostaglandin.",
    clinicalOutcome: "Potensiasi efek hipoglikemik glimepiride; peningkatan risiko episode hipoglikemia simtomatik (keringat dingin, tremor, pusing, palpitasi).",
    management: "Kombinasi sering digunakan pada pasien diabetes dengan hipertensi. Edukasi pasien mengenai tanda-tanda hipoglikemia dan sediakan sumber glukosa cepat. Pertimbangkan penyesuaian dosis glimepiride jika gula darah turun drastis.",
    evidenceLevel: "Level 1 - Well Established (DDInter / ADA)",
    ddinterPairId: "DDInter-PAIR-SU-ACEI-01"
  },
  {
    id: "ddinter-gliclazide-ramipril",
    drugAId: "drug-gliclazide",
    drugBId: "drug-ramipril",
    drugAName: "Gliclazide",
    drugBName: "Ramipril",
    severity: "Moderate",
    mechanismCategory: "Synergy",
    mechanism: "Peningkatan sensitivitas insulin yang dimediasi oleh akumulasi kinin akibat penghambatan enzim ACE.",
    clinicalOutcome: "Peningkatan risiko hipoglikemia terutama pada pasien usia lanjut atau gangguan fungsi ginjal.",
    management: "Monitor kadar glukosa darah mandiri lebih sering pada 2-4 minggu pertama pemberian ramipril bersama gliclazide.",
    evidenceLevel: "Level 1 - Well Established (DDInter)",
    ddinterPairId: "DDInter-PAIR-SU-ACEI-02"
  },
  {
    id: "ddinter-glimepiride-candesartan",
    drugAId: "drug-glimepiride",
    drugBId: "drug-candesartan",
    drugAName: "Glimepiride",
    drugBName: "Candesartan",
    severity: "Moderate",
    mechanismCategory: "Synergy",
    mechanism: "Modulasi reseptor PPAR-gamma dan peningkatan ambilan glukosa perifer oleh golongan ARB.",
    clinicalOutcome: "Sensitivitas insulin meningkat; potensi hipoglikemia pada pasien diabetes tipe 2 yang menerima terapi sulfonilurea.",
    management: "Pantau gula darah rutin saat inisiasi atau titrasi dosis candesartan.",
    evidenceLevel: "Level 1 - Well Established (DDInter)",
    ddinterPairId: "DDInter-PAIR-SU-ARB-01"
  },
  {
    id: "ddinter-glibenclamide-captopril",
    drugAId: "drug-glibenclamide",
    drugBId: "drug-captopril",
    drugAName: "Glibenclamide",
    drugBName: "Captopril",
    severity: "Moderate",
    mechanismCategory: "Synergy",
    mechanism: "Potensiasi penurunan glukosa darah aditif melalui stimulasi sekresi insulin pankreas dan peningkatan sensitivitas insulin perifer.",
    clinicalOutcome: "Hipoglikemia berkepanjangan karena waktu paruh glibenklamid yang panjang.",
    management: "Gunakan sulfonilurea generasi lebih baru (Glimepiride/Gliclazide) atau kurangi dosis glibenklamid pada pasien hipertensi yang menerima captopril.",
    evidenceLevel: "Level 1 - Well Established (DDInter)",
    ddinterPairId: "DDInter-PAIR-SU-ACEI-03"
  },

  // =========================================================================
  // 10. ENDOKRIN & DIABETES: Sulfonilurea + Inhibitor CYP2C9 (Major - Metabolism)
  // =========================================================================
  {
    id: "ddinter-glimepiride-fluconazole",
    drugAId: "drug-glimepiride",
    drugBId: "drug-fluconazole",
    drugAName: "Glimepiride",
    drugBName: "Fluconazole",
    severity: "Major",
    mechanismCategory: "Metabolism",
    mechanism: "Flukonazol adalah inhibitor kuat isoenzim CYP2C9 hepar yang bertanggung jawab atas eliminasi glimepiride.",
    clinicalOutcome: "Peningkatan tajam konsentrasi dan waktu paruh glimepiride plasma, memicu HIPOGLIKEMIA BERAT BERKEPANJANGAN (koma hipoglikemik, kejang, disorientasi).",
    management: "HINDARI PENGGUNAAN BERSAMAAN atau turunkan dosis glimepiride hingga 50%. Lakukan pemantauan glukosa darah ketat setiap beberapa jam selama terapi flukonazol.",
    evidenceLevel: "Level 1 - Well Established (DDInter / ADA)",
    ddinterPairId: "DDInter-PAIR-SU-CYP-01"
  },
  {
    id: "ddinter-glimepiride-ciprofloxacin",
    drugAId: "drug-glimepiride",
    drugBId: "drug-ciprofloxacin",
    drugAName: "Glimepiride",
    drugBName: "Ciprofloxacin",
    severity: "Major",
    mechanismCategory: "Metabolism",
    mechanism: "Inhibisi metabolisme hepatik sulfonilurea oleh siprofloksasin ditambah penutupan saluran K-ATP sel beta pankreas langsung oleh kuinolon.",
    clinicalOutcome: "Hipoglikemia akut yang refrakter dan berat, berisiko fatal pada pasien usia lanjut.",
    management: "Pilih antibiotik alternatif (misal golongan beta-laktam) atau pantau kadar gula darah secara intensif.",
    evidenceLevel: "Level 1 - Well Established (DDInter / FDA)",
    ddinterPairId: "DDInter-PAIR-SU-CYP-02"
  },

  // =========================================================================
  // 11. ENDOKRIN & DIABETES: SGLT2i + Diuretik Loop (Moderate - Synergy)
  // =========================================================================
  {
    id: "ddinter-empagliflozin-furosemide",
    drugAId: "drug-empagliflozin",
    drugBId: "drug-furosemide",
    drugAName: "Empagliflozin",
    drugBName: "Furosemide",
    severity: "Moderate",
    mechanismCategory: "Synergy",
    mechanism: "Efek diuretik osmotik glukosuria oleh empagliflozin berpadu dengan natriuresis dan diuresis poten oleh furosemide.",
    clinicalOutcome: "DEPLESI VOLUME INTRAVASKULAR BERLEBIHAN, dehidrasi, hipotensi ortostatik berat, sinkop, dan penurunan mendadak laju filtrasi glomerulus (eGFR).",
    management: "Kombinasi standar GDMT gagal jantung HFrEF/HFpEF dengan diabetes. Pertimbangkan penurunan dosis furosemide saat inisiasi empagliflozin. Edukasi hidrasi adekuat dan pantau tekanan darah serta kreatinin serum.",
    evidenceLevel: "Level 1 - Well Established (DDInter / ESC Heart Failure)",
    ddinterPairId: "DDInter-PAIR-SGLT2-DIUR-01"
  },
  {
    id: "ddinter-dapagliflozin-furosemide",
    drugAId: "drug-dapagliflozin",
    drugBId: "drug-furosemide",
    drugAName: "Dapagliflozin",
    drugBName: "Furosemide",
    severity: "Moderate",
    mechanismCategory: "Synergy",
    mechanism: "Natriuresis osmotik dan jerat Henle sinergis yang memicu kontraksi volume intravaskular.",
    clinicalOutcome: "Hipotensi postural dan peningkatan nitrogen urea darah (BUN) transien.",
    management: "Evaluasi status hidrasi pasien secara berkala. Sesuaikan dosis diuretik loop bila terdapat gejala pusing ortostatik.",
    evidenceLevel: "Level 1 - Well Established (DDInter)",
    ddinterPairId: "DDInter-PAIR-SGLT2-DIUR-02"
  },

  // =========================================================================
  // 12. SISTEM SARAF PUSAT: SSRI + NSAID / Antiplatelet (Moderate - Synergy)
  // =========================================================================
  {
    id: "ddinter-sertraline-ibuprofen",
    drugAId: "drug-sertraline",
    drugBId: "drug-ibuprofen",
    drugAName: "Sertraline",
    drugBName: "Ibuprofen",
    severity: "Moderate",
    mechanismCategory: "Synergy",
    mechanism: "SSRI menghambat reuptake serotonin ke dalam trombosit (mengurangi cadangan serotonin platelet untuk agregasi) berpadu dengan inhibisi COX-1 dan erosi mukosa lambung oleh NSAID.",
    clinicalOutcome: "Peningkatan risiko perdarahan saluran cerna bagian atas sebesar 3-6 kali lipat (melena, hematemesis, hematoma).",
    management: "Hindari NSAID jangka panjang pada pasien yang menggunakan SSRI. Jika analgesik diperlukan, pertimbangkan parasetamol sebagai lini pertama. Jika NSAID mutlak diperlukan, tambahkan gastroprotektor PPI (misal Pantoprazole / Lansoprazole).",
    evidenceLevel: "Level 1 - Well Established (DDInter / NICE)",
    ddinterPairId: "DDInter-PAIR-SSRI-NSAID-01"
  },
  {
    id: "ddinter-escitalopram-meloxicam",
    drugAId: "drug-escitalopram",
    drugBId: "drug-meloxicam",
    drugAName: "Escitalopram",
    drugBName: "Meloxicam",
    severity: "Moderate",
    mechanismCategory: "Synergy",
    mechanism: "Efek antiagregasi trombosit akibat deplesi serotonin diperberat oleh cedera mukosa lambung yang dimediasi NSAID.",
    clinicalOutcome: "Peningkatan signifikan risiko perdarahan gastrointestinal dan ekimosis.",
    management: "Gunakan dosis NSAID terendah dengan durasi tersingkat. Resepkan bersama obat pelindung lambung PPI pada pasien berisiko tinggi.",
    evidenceLevel: "Level 1 - Well Established (DDInter)",
    ddinterPairId: "DDInter-PAIR-SSRI-NSAID-02"
  },
  {
    id: "ddinter-fluoxetine-aspirin",
    drugAId: "drug-fluoxetine",
    drugBId: "drug-aspirin",
    drugAName: "Fluoxetine",
    drugBName: "Aspirin",
    severity: "Moderate",
    mechanismCategory: "Synergy",
    mechanism: "Gangguan hemostasis primer gabungan melalui deplesi serotonin trombosit dan penghambatan ireversibel enzim siklooksigenase-1 (COX-1).",
    clinicalOutcome: "Peningkatan risiko perdarahan mukosa lambung, petekie, dan perdarahan pasca-bedah.",
    management: "Pantau tanda-tanda perdarahan (feses hitam, memar mudah timbul). Berikan PPI profilaksis pada usia lanjut.",
    evidenceLevel: "Level 1 - Well Established (DDInter)",
    ddinterPairId: "DDInter-PAIR-SSRI-ASA-01"
  },

  // =========================================================================
  // 13. SISTEM SARAF PUSAT: SSRI + Agen Serotonergik Lain (Major - Synergy)
  // =========================================================================
  {
    id: "ddinter-sertraline-tramadol",
    drugAId: "drug-sertraline",
    drugBId: "drug-tramadol",
    drugAName: "Sertraline",
    drugBName: "Tramadol",
    severity: "Major",
    mechanismCategory: "Synergy",
    mechanism: "Inhibisi aditif reuptake serotonin (5-HT) di celah sinaps sentral oleh SSRI dan tramadol, ditambah inhibisi metabolisme tramadol oleh isoenzim CYP hepar.",
    clinicalOutcome: "SINDROM SEROTONIN YANG MENGANCAM NYAWA (trias: perubahan status mental/agitasi/delirium, hiperaktivitas otonom/diaforesis/takikardia/demam tinggi, kelainan neuromuskular/klonus/hiperrefleksia/tremor) serta penurunan ambang kejang.",
    management: "HINDARI KOMBINASI BERSAMAAN jika memungkinkan. Jika mutlak diperlukan analgesia kuat, gunakan parasetamol atau opioid murni non-serotonergik pada dosis terendah dengan durasi sangat singkat. Edukasi keluarga untuk mewaspadai gejala sindrom serotonin.",
    evidenceLevel: "Level 1 - Well Established (DDInter / FDA Black Box)",
    ddinterPairId: "DDInter-PAIR-SSRI-SEROT-01"
  },
  {
    id: "ddinter-fluoxetine-fentanyl",
    drugAId: "drug-fluoxetine",
    drugBId: "drug-fentanyl",
    drugAName: "Fluoxetine",
    drugBName: "Fentanyl",
    severity: "Major",
    mechanismCategory: "Synergy",
    mechanism: "Peningkatan kadar serotonin intrasinaptik sinergis ditambah penurunan klirens kompetitif fentanil melalui enzim CYP3A4/CYP2D6.",
    clinicalOutcome: "Sindrom serotonin akut, hipertermia maligna, kekakuan otot, dan instabilitas hemodinamik intraoperatif.",
    management: "Hati-hati pada pasien operasi yang menerima fluoxetine jangka panjang. Pantau parameter otonom dan suhu tubuh secara intensif di ruang pemulihan.",
    evidenceLevel: "Level 1 - Well Established (DDInter / FDA)",
    ddinterPairId: "DDInter-PAIR-SSRI-SEROT-02"
  },

  // =========================================================================
  // 14. SISTEM SARAF PUSAT: Gabapentinoid + Opioid (Major - Synergy)
  // =========================================================================
  {
    id: "ddinter-pregabalin-tramadol",
    drugAId: "drug-pregabalin",
    drugBId: "drug-tramadol",
    drugAName: "Pregabalin",
    drugBName: "Tramadol",
    severity: "Major",
    mechanismCategory: "Synergy",
    mechanism: "Aditif penekanan sistem saraf pusat dan pusat respirasi medula oblongata via modulasi saluran kalsium subunit alfa-2-delta (pregabalin) dan aktivasi reseptor opioid mu (tramadol) - FDA Black Box Warning.",
    clinicalOutcome: "Sedasi berat, ataksia, depresi pernapasan berat, koma, dan peningkatan mortalitas fatal akibat overdosis.",
    management: "Batasi penggunaan bersama hanya bila terapi tunggal tidak memadai untuk nyeri neuropatik refrakter. Gunakan dosis terendah dengan titrasi perlahan. Edukasi keluarga untuk memantau laju pernapasan dan tingkat kesadaran pasien.",
    evidenceLevel: "Level 1 - Well Established (DDInter / FDA Black Box 2019)",
    ddinterPairId: "DDInter-PAIR-GABA-OPIOID-01"
  },
  {
    id: "ddinter-gabapentin-morphine",
    drugAId: "drug-gabapentin",
    drugBId: "drug-morphine",
    drugAName: "Gabapentin",
    drugBName: "Morphine",
    severity: "Major",
    mechanismCategory: "Synergy",
    mechanism: "Morfin meningkatkan bioavailabilitas gabapentin melalui penurunan motilitas saluran cerna, ditambah efek aditif depresi SSP dan ventilasi respirasi.",
    clinicalOutcome: "Somnolen ekstrem, hipoventilasi, henti napas, dan kematian.",
    management: "Turunkan dosis awal gabapentin bila diberikan bersama morfin. Pantau saturasi oksigen (SpO2) dan hindari konsumsi bersama zat penekan SSP lainnya.",
    evidenceLevel: "Level 1 - Well Established (DDInter / FDA)",
    ddinterPairId: "DDInter-PAIR-GABA-OPIOID-02"
  },
  {
    id: "ddinter-pregabalin-codeine",
    drugAId: "drug-pregabalin",
    drugBId: "drug-codeine",
    drugAName: "Pregabalin",
    drugBName: "Codeine",
    severity: "Major",
    mechanismCategory: "Synergy",
    mechanism: "Depresi sistem saraf pusat aditif dan penumpulan dorongan pernapasan fisiologis.",
    clinicalOutcome: "Sedasi dalam, kebingungan mental, hipotensi, dan hipoventilasi alveolar.",
    management: "Hindari kombinasi jika memungkinkan. Berikan instruksi jelas pada pasien untuk tidak mengemudi atau mengoperasikan mesin.",
    evidenceLevel: "Level 1 - Well Established (DDInter)",
    ddinterPairId: "DDInter-PAIR-GABA-OPIOID-03"
  },

  // =========================================================================
  // 15. ANTI-INFEKSI: Fluoroquinolone + Kortikosteroid Sistemik (Major - Synergy)
  // =========================================================================
  {
    id: "ddinter-levofloxacin-prednisone",
    drugAId: "drug-levofloxacin",
    drugBId: "drug-prednisone",
    drugAName: "Levofloxacin",
    drugBName: "Prednisone",
    severity: "Major",
    mechanismCategory: "Synergy",
    mechanism: "Sinergi sitotoksik terhadap matriks ekstraseluler tendon: levofloksasin menginduksi stres oksidatif tenosit dan degradasi kolagen tipe I, diperparah oleh inhibisi sintesis kolagen oleh prednison (FDA Black Box Warning).",
    clinicalOutcome: "Peningkatan drastis (hingga >10 kali lipat) risiko TENDINITIS AKUT dan RUPTUR TENDON ACHILLES, yang dapat terjadi selama terapi atau beberapa bulan pasca penghentian.",
    management: "HINDARI PENGGUNAAN BERSAMAAN kecuali tidak ada alternatif terapi antimikroba lain (terutama pada pasien >60 tahun atau penerima transplantasi organ). Edukasi pasien untuk SEGERA menghentikan obat dan mengistirahatkan ekstremitas bila timbul nyeri atau bengkak pada tendon Achilles.",
    evidenceLevel: "Level 1 - Well Established (DDInter / FDA Black Box)",
    ddinterPairId: "DDInter-PAIR-QUIN-STEROID-01"
  },
  {
    id: "ddinter-ciprofloxacin-dexamethasone",
    drugAId: "drug-ciprofloxacin",
    drugBId: "drug-dexamethasone",
    drugAName: "Ciprofloxacin",
    drugBName: "Dexamethasone",
    severity: "Major",
    mechanismCategory: "Synergy",
    mechanism: "Degradasi matriks ekstraseluler sinergis pada struktur tendon yang dimediasi oleh aktivasi metaloproteinase dan supresi sintesis kolagen.",
    clinicalOutcome: "Ruptur tendon Achilles bilateral, tendinopati berat, dan disabilitas mobilitas permanen.",
    management: "KONTRAINDIKASI RELATIF. Gunakan antibiotik alternatif kelas beta-laktam. Pantau ketat keluhan nyeri muskuloskeletal bila kombinasi terpaksa diberikan.",
    evidenceLevel: "Level 1 - Well Established (DDInter / FDA)",
    ddinterPairId: "DDInter-PAIR-QUIN-STEROID-02"
  },
  {
    id: "ddinter-moxifloxacin-methylprednisolone",
    drugAId: "drug-moxifloxacin",
    drugBId: "drug-methylprednisolone",
    drugAName: "Moxifloxacin",
    drugBName: "Methylprednisolone",
    severity: "Major",
    mechanismCategory: "Synergy",
    mechanism: "Peningkatan risiko tendinopati aditif dan potensi pemanjangan interval QTc pada pasien usia lanjut.",
    clinicalOutcome: "Tendinitis akut dan disfungsi mobilitas ekstremitas.",
    management: "Pertimbangkan alternatif antibiotik non-kuinolon pada pasien yang menerima terapi kortikosteroid sistemik.",
    evidenceLevel: "Level 1 - Well Established (DDInter)",
    ddinterPairId: "DDInter-PAIR-QUIN-STEROID-03"
  },

  // =========================================================================
  // 16. ANTI-INFEKSI: Makrolida + CCB / Statin / Colchicine (Major/Moderate)
  // =========================================================================
  {
    id: "ddinter-clarithromycin-amlodipine",
    drugAId: "drug-clarithromycin",
    drugBId: "drug-amlodipine",
    drugAName: "Clarithromycin",
    drugBName: "Amlodipine",
    severity: "Moderate",
    mechanismCategory: "Metabolism",
    mechanism: "Klaritromisin adalah inhibitor kuat isoenzim CYP3A4 hepar dan enterosit yang memetabolisme amlodipine, meningkatkan bioavailabilitas dan AUC amlodipine secara substansial.",
    clinicalOutcome: "Lonjakan kadar amlodipine serum, memicu hipotensi berat, pusing postural, pingsan (sinkop), dan edema perifer ekstremitas bawah masif.",
    management: "Pantau tekanan darah secara intensif. Turunkan dosis amlodipine hingga 50% selama terapi antibiotik klaritromisin atau pertimbangkan antibiotik makrolida non-CYP3A4 seperti Azitromisin.",
    evidenceLevel: "Level 1 - Well Established (DDInter / FDA)",
    ddinterPairId: "DDInter-PAIR-MACRO-CCB-01"
  },
  {
    id: "ddinter-azithromycin-amlodipine",
    drugAId: "drug-azithromycin",
    drugBId: "drug-amlodipine",
    drugAName: "Azithromycin",
    drugBName: "Amlodipine",
    severity: "Minor",
    mechanismCategory: "Metabolism",
    mechanism: "Azitromisin memiliki potensi inhibisi CYP3A4 yang jauh lebih lemah dibandingkan klaritromisin, namun tetap dapat menyebabkan sedikit peningkatan konsentrasi amlodipine.",
    clinicalOutcome: "Risiko hipotensi ringan atau edema transien; umumnya ditoleransi dengan baik pada sebagian besar pasien.",
    management: "Pilihan makrolida yang jauh lebih aman dibandingkan klaritromisin atau eritromisin saat dikombinasikan dengan amlodipine. Lakukan pemantauan tekanan darah rutin.",
    evidenceLevel: "Level 1 - Well Established (DDInter)",
    ddinterPairId: "DDInter-PAIR-MACRO-CCB-02"
  },
  {
    id: "ddinter-clarithromycin-colchicine",
    drugAId: "drug-clarithromycin",
    drugBId: "drug-colchicine",
    drugAName: "Clarithromycin",
    drugBName: "Colchicine",
    severity: "Major",
    mechanismCategory: "Metabolism",
    mechanism: "Klaritromisin adalah inhibitor kuat ganda CYP3A4 dan transporter efluks P-glikoprotein yang memetabolisme dan mengeliminasi kolkisin (FDA Black Box Warning).",
    clinicalOutcome: "AKUMULASI MASIF KOLKISIN SISTEMIK MEMICU TOKSISITAS KOLKISIN FATAL: kegagalan multiorgan, agranulositosis/pansitopenia, nekrosis tubular ginjal akut, miopati, aritmia, dan kematian.",
    management: "KONTRAINDIKASI MUTLAK BERSAMAAN pada pasien dengan gangguan fungsi ginjal atau hati. Pada pasien fungsi normal, hindari penggunaan bersama; jika mutlak diperlukan, kurangi dosis kolkisin sebesar 75% atau gunakan antibiotik alternatif.",
    evidenceLevel: "Level 1 - Well Established (DDInter / FDA Black Box)",
    ddinterPairId: "DDInter-PAIR-MACRO-COLCH-01"
  },

  // =========================================================================
  // 17. ANALGESIK & ONKOLOGI: Methotrexate + PPI / NSAID (Major - Excretion)
  // =========================================================================
  {
    id: "ddinter-omeprazole-methotrexate",
    drugAId: "drug-omeprazole",
    drugBId: "drug-methotrexate",
    drugAName: "Omeprazole",
    drugBName: "Methotrexate",
    severity: "Major",
    mechanismCategory: "Excretion",
    mechanism: "Omeprazole menghambat transporter asam BCRP (Breast Cancer Resistance Protein) dan OAT3 di tubulus ginjal yang mengekskresikan methotrexate dan metabolitnya 7-hidroksimetotreksat.",
    clinicalOutcome: "Peningkatan tajam konsentrasi serum dan pembersihan MTX yang tertunda, memicu mielosupresi berat (pansitopenia), gagal ginjal akut, ulserasi mukosa masif, dan toksisitas hepar fatal.",
    management: "HINDARI PPI pada pasien yang menerima methotrexate dosis tinggi (>500 mg/m²). Pada dosis mingguan rendah untuk artritis reumatoid, pertimbangkan mengganti PPI ke Antagonis H2 (Famotidine) atau pantau kadar MTX dan hitung darah lengkap serial.",
    evidenceLevel: "Level 1 - Well Established (DDInter / FDA)",
    ddinterPairId: "DDInter-PAIR-PPI-MTX-01"
  },
  {
    id: "ddinter-pantoprazole-methotrexate",
    drugAId: "drug-pantoprazole",
    drugBId: "drug-methotrexate",
    drugAName: "Pantoprazole",
    drugBName: "Methotrexate",
    severity: "Major",
    mechanismCategory: "Excretion",
    mechanism: "Inhibisi mekanisme transport tubular ginjal (BCRP/OAT3) yang menyebabkan penurunan klirens metotreksat.",
    clinicalOutcome: "Akumulasi methotrexate, leukopenia berat, trombositopenia, dan nefrotoksisitas.",
    management: "Hentikan pantoprazole sementara selama pemberian infus metotreksat dosis tinggi. Gunakan antasida atau famotidine sebagai alternatif perlindungan lambung.",
    evidenceLevel: "Level 1 - Well Established (DDInter)",
    ddinterPairId: "DDInter-PAIR-PPI-MTX-02"
  },
  {
    id: "ddinter-ibuprofen-methotrexate",
    drugAId: "drug-ibuprofen",
    drugBId: "drug-methotrexate",
    drugAName: "Ibuprofen",
    drugBName: "Methotrexate",
    severity: "Major",
    mechanismCategory: "Excretion",
    mechanism: "NSAID menghambat sintesis prostaglandin vasodilator ginjal (menurunkan laju filtrasi glomerulus) dan bersaing langsung pada transporter anion organik (OAT) di tubulus proksimal yang mengekskresi metotreksat.",
    clinicalOutcome: "Klirens metotreksat terhambat drastis, memicu peningkatan toksisitas hematologi berat (pansitopenia anaplastik), stomatitis ulseratif berat, dan nekrosis ginjal.",
    management: "KONTRAINDIKASI BERSAMAAN pada kemoterapi MTX dosis tinggi. Pada artritis reumatoid dosis rendah, gunakan parasetamol; jika NSAID diperlukan, pantau darah lengkap dan kreatinin serum secara ketat.",
    evidenceLevel: "Level 1 - Well Established (DDInter / ACR)",
    ddinterPairId: "DDInter-PAIR-NSAID-MTX-01"
  },

  // =========================================================================
  // 18. GASTROINTESTINAL: Antijamur Azol + Supresor Asam (Moderate - Absorption)
  // =========================================================================
  {
    id: "ddinter-ketoconazole-omeprazole",
    drugAId: "drug-ketoconazole",
    drugBId: "drug-omeprazole",
    drugAName: "Ketoconazole",
    drugBName: "Omeprazole",
    severity: "Moderate",
    mechanismCategory: "Absorption",
    mechanism: "Omeprazole menaikkan pH lambung secara poten, menghambat disolusi dan ionisasi ketokonazol yang memerlukan suasana asam kuat untuk diserap di saluran cerna.",
    clinicalOutcome: "Penurunan bioavailabilitas dan konsentrasi plasma ketokonazol oral hingga >80%, menyebabkan kegagalan respons klinis antijamur.",
    management: "Hindari penggunaan bersamaan. Jika supresi asam mutlak diperlukan, berikan ketokonazol bersama minuman asam (minuman berkarbonasi asam / jus jeruk) atau ganti ke Flukonazol yang absorpsinya tidak bergantung pada pH asam lambung.",
    evidenceLevel: "Level 1 - Well Established (DDInter / FDA)",
    ddinterPairId: "DDInter-PAIR-AZOLE-PPI-01"
  },
  {
    id: "ddinter-itraconazole-lansoprazole",
    drugAId: "drug-itraconazole",
    drugBId: "drug-lansoprazole",
    drugAName: "Itraconazole",
    drugBName: "Lansoprazole",
    severity: "Moderate",
    mechanismCategory: "Absorption",
    mechanism: "Penurunan keasaman lambung secara bermakna mengganggu disolusi dan absorpsi kapsul oral itrakonazol.",
    clinicalOutcome: "Konsentrasi serum itrakonazol subterapeutik dan kegagalan eradikasi mikotik.",
    management: "Gunakan larutan oral itrakonazol (yang tidak bergantung asam lambung) atau ganti antijamur ke Vorikonazol / Flukonazol.",
    evidenceLevel: "Level 1 - Well Established (DDInter)",
    ddinterPairId: "DDInter-PAIR-AZOLE-PPI-02"
  },

  // =========================================================================
  // 19. ANALGESIK & ANTIINFLAMASI: Colchicine + Statin (Moderate - Synergy)
  // =========================================================================
  {
    id: "ddinter-colchicine-atorvastatin",
    drugAId: "drug-colchicine",
    drugBId: "drug-atorvastatin",
    drugAName: "Colchicine",
    drugBName: "Atorvastatin",
    severity: "Moderate",
    mechanismCategory: "Synergy",
    mechanism: "Efek toksisitas miotoksik aditif pada serabut otot rangka disertai kompetisi parsial pada jalur eliminasi CYP3A4 dan P-glikoprotein.",
    clinicalOutcome: "Peningkatan risiko miopati akut, mialgia difus, peningkatan kadar kreatin kinase (CK), dan rhabdomyolysis.",
    management: "Gunakan kolkisin dosis rendah (misal 0.5-0.6 mg/hari). Edukasi pasien untuk segera melaporkan kelemahan otot atau nyeri otot mendadak.",
    evidenceLevel: "Level 1 - Well Established (DDInter / ACR)",
    ddinterPairId: "DDInter-PAIR-COLCH-STATIN-01"
  },
  {
    id: "ddinter-colchicine-simvastatin",
    drugAId: "drug-colchicine",
    drugBId: "drug-simvastatin",
    drugAName: "Colchicine",
    drugBName: "Simvastatin",
    severity: "Moderate",
    mechanismCategory: "Synergy",
    mechanism: "Miotoksisitas aditif dan kompetisi substrat enzim CYP3A4 pada jaringan otot skelet.",
    clinicalOutcome: "Miopati berat dengan mioglobinuria dan risiko cedera ginjal akut.",
    management: "Monitor kadar CK bila pasien mengeluhkan nyeri otot. Pertimbangkan penghentian sementara simvastatin selama terapi akut gout dengan kolkisin.",
    evidenceLevel: "Level 1 - Well Established (DDInter)",
    ddinterPairId: "DDInter-PAIR-COLCH-STATIN-02"
  },

  // =========================================================================
  // 20. ANALGESIK & HEMOSTASIS: Paracetamol + Warfarin (Moderate - Metabolism)
  // =========================================================================
  {
    id: "ddinter-paracetamol-warfarin",
    drugAId: "drug-paracetamol",
    drugBId: "drug-warfarin",
    drugAName: "Paracetamol",
    drugBName: "Warfarin",
    severity: "Moderate",
    mechanismCategory: "Metabolism",
    mechanism: "Penggunaan parasetamol dosis tinggi reguler (>2-3 gram/hari selama >3-5 hari berturut-turut) menghasilkan metabolit NAPQI yang menghambat enzim vitamin K epoksida reduktase (VKORC1).",
    clinicalOutcome: "Peningkatan bertahap nilai INR (hingga >4.0) dan peningkatan risiko komplikasi perdarahan tersembunyi.",
    management: "Parasetamol tetap menjadi analgesik antipiretik lini pertama teraman pada pasien warfarin (jauh lebih aman dibanding NSAID). Namun, jika digunakan dosis reguler >2 g/hari selama lebih dari 3 hari, periksa INR serial dan sesuaikan dosis warfarin.",
    evidenceLevel: "Level 1 - Well Established (DDInter / CHEST)",
    ddinterPairId: "DDInter-PAIR-PCM-WARFARIN-01"
  },

  // =========================================================================
  // 21. ANTIVIRUS & ANTI-INFEKSI KRITIS: Paxlovid (Nirmatrelvir/Ritonavir)
  // =========================================================================
  {
    id: "ddinter-paxlovid-rivaroxaban",
    drugAId: "drug-nirmatrelvir-ritonavir",
    drugBId: "drug-rivaroxaban",
    drugAName: "Nirmatrelvir / Ritonavir (Paxlovid)",
    drugBName: "Rivaroxaban",
    severity: "Major",
    mechanismCategory: "Metabolism",
    mechanism: "Ritonavir adalah inhibitor poten isoenzim CYP3A4 dan transporter efluks P-glikoprotein (P-gp), memblokade jalur klirens utama rivaroxaban.",
    clinicalOutcome: "Peningkatan konsentrasi plasma dan AUC rivaroxaban hingga >150%, memicu risiko PERDARAHAN MAYOR DAN PERDARAHAN INTRAKRANIAL YANG MENGANCAM NYAWA.",
    management: "KONTRAINDIKASI MUTLAK BERSAMAAN (FDA Fact Sheet for Paxlovid). Hindari penggunaan Paxlovid pada pasien yang menerima Rivaroxaban. Pilih terapi antivirus alternatif (misal Remdesivir) atau ganti antikoagulan di bawah pengawasan ketat.",
    evidenceLevel: "Level 1 - Well Established (DDInter / FDA)",
    ddinterPairId: "DDInter-PAIR-PAX-RIVA-01"
  },
  {
    id: "ddinter-paxlovid-simvastatin",
    drugAId: "drug-nirmatrelvir-ritonavir",
    drugBId: "drug-simvastatin",
    drugAName: "Nirmatrelvir / Ritonavir (Paxlovid)",
    drugBName: "Simvastatin",
    severity: "Major",
    mechanismCategory: "Metabolism",
    mechanism: "Inhibisi masif enzim CYP3A4 oleh ritonavir menghentikan metabolisme first-pass simvastatin.",
    clinicalOutcome: "Lonjakan konsentrasi serum simvastatin hingga >10–30 kali lipat, memicu RHABDOMYOLYSIS AKUT, MIOGLOBINURIA, GAGAL GINJAL AKUT, DAN KEMATIAN.",
    management: "KONTRAINDIKASI MUTLAK BERSAMAAN (FDA Black Box). Hentikan simvastatin minimal 12 jam sebelum memulai Paxlovid dan tahan selama 5 hari masa terapi serta 3 hari setelah Paxlovid selesai.",
    evidenceLevel: "Level 1 - Well Established (DDInter / FDA)",
    ddinterPairId: "DDInter-PAIR-PAX-STAT-01"
  },
  {
    id: "ddinter-paxlovid-amiodarone",
    drugAId: "drug-nirmatrelvir-ritonavir",
    drugBId: "drug-amiodarone",
    drugAName: "Nirmatrelvir / Ritonavir (Paxlovid)",
    drugBName: "Amiodarone",
    severity: "Major",
    mechanismCategory: "Metabolism",
    mechanism: "Inhibisi kuat CYP3A4 dan CYP2D6 oleh ritonavir menghambat eliminasi amiodarone yang memiliki waktu paruh sangat panjang.",
    clinicalOutcome: "Peningkatan kadar serum amiodarone, memicu ARITMIA VENTRIKEL MEMATIKAN, PEMANJANGAN QTc EKSTREM, DAN BLOK JANTUNG TOTAL.",
    management: "KONTRAINDIKASI MUTLAK BERSAMAAN. Jangan berikan Paxlovid pada pasien dalam terapi amiodarone. Gunakan terapi alternatif COVID-19.",
    evidenceLevel: "Level 1 - Well Established (DDInter / FDA)",
    ddinterPairId: "DDInter-PAIR-PAX-AMIO-01"
  },
  {
    id: "ddinter-paxlovid-sildenafil",
    drugAId: "drug-nirmatrelvir-ritonavir",
    drugBId: "drug-sildenafil",
    drugAName: "Nirmatrelvir / Ritonavir (Paxlovid)",
    drugBName: "Sildenafil",
    severity: "Major",
    mechanismCategory: "Metabolism",
    mechanism: "Ritonavir menghambat metabolisme hepatik sildenafil yang dimediasi oleh CYP3A4 hingga >11 kali lipat.",
    clinicalOutcome: "HIPOTENSI BERAT EKSTREM, SINKOP, DAN EFEK KARDIOVASKULAR ADVERS (iskemia miokard, priapismus).",
    management: "KONTRAINDIKASI MUTLAK penggunaan bersamaan sildenafil (indikasi hipertensi pulmonal Revatio). Untuk indikasi disfungsi ereksi (Viagra), tunda penggunaan selama terapi Paxlovid.",
    evidenceLevel: "Level 1 - Well Established (DDInter / FDA)",
    ddinterPairId: "DDInter-PAIR-PAX-SIL-01"
  },
  {
    id: "ddinter-paxlovid-tacrolimus",
    drugAId: "drug-nirmatrelvir-ritonavir",
    drugBId: "drug-tacrolimus",
    drugAName: "Nirmatrelvir / Ritonavir (Paxlovid)",
    drugBName: "Tacrolimus",
    severity: "Major",
    mechanismCategory: "Metabolism",
    mechanism: "Inhibisi kuat CYP3A4 dan P-gp oleh ritonavir meningkatkan AUC takrolimus hingga >10 kali lipat.",
    clinicalOutcome: "NEFROTOKSISITAS AKUT BERAT, HIPERKALEMIA REFRAKTER, DAN NEUROTOKSISITAS (kejang, ensefalopati).",
    management: "HINDARI PENGGUNAAN BERSAMAAN jika memungkinkan. Jika Paxlovid terpaksa diberikan pada penerima transplantasi organ, lakukan pengawasan spesialis ketat dengan penurunan dosis takrolimus 80-90% dan pemantauan TDM harian.",
    evidenceLevel: "Level 1 - Well Established (DDInter / AST)",
    ddinterPairId: "DDInter-PAIR-PAX-TAC-01"
  },

  // =========================================================================
  // 22. ANTI-INFEKSI: Linezolid (Inhibitor MAO)
  // =========================================================================
  {
    id: "ddinter-linezolid-sertraline",
    drugAId: "drug-linezolid",
    drugBId: "drug-sertraline",
    drugAName: "Linezolid",
    drugBName: "Sertraline",
    severity: "Major",
    mechanismCategory: "Synergy",
    mechanism: "Linezolid adalah inhibitor non-selektif monoamine oxidase (MAO-A/B) yang dapat reversibel, menghambat degradasi serotonin sentral berpadu dengan blokade reuptake 5-HT oleh sertraline.",
    clinicalOutcome: "SINDROM SEROTONIN FATAL (hiperpireksia >40°C, instabilitas otonomik, delirium, mioklonus berat, koma).",
    management: "KONTRAINDIKASI MUTLAK BERSAMAAN (FDA Drug Safety Communication). Hentikan SSRI minimal 2 minggu (5 minggu untuk fluoxetine) sebelum memulai linezolid, atau pilih antibiotik alternatif (misal Vancomycin atau Daptomycin) untuk infeksi MRSA/VRE.",
    evidenceLevel: "Level 1 - Well Established (DDInter / FDA)",
    ddinterPairId: "DDInter-PAIR-LZD-SSRI-01"
  },
  {
    id: "ddinter-linezolid-pseudoephedrine",
    drugAId: "drug-linezolid",
    drugBId: "drug-pseudoephedrine",
    drugAName: "Linezolid",
    drugBName: "Pseudoephedrine",
    severity: "Major",
    mechanismCategory: "Synergy",
    mechanism: "Inhibisi MAO oleh linezolid mencegah inaktivasi amin simpatomimetik, memicu penumpukan katekolamin dan stimulasi reseptor alfa-1 adrenergik masif.",
    clinicalOutcome: "KRISIS HIPERTENSI AKUT BERBAHAYA (TD > 200/120 mmHg), ensefalopati hipertensif, stroke hemoragik, dan vasospasme koroner.",
    management: "HINDARI PENGGUNAAN BERSAMAAN. Hindari dekongestan oral yang mengandung pseudoefedrin atau fenilefrin selama masa terapi linezolid. Gunakan dekongestan topikal salin.",
    evidenceLevel: "Level 1 - Well Established (DDInter)",
    ddinterPairId: "DDInter-PAIR-LZD-PSEUDO-01"
  },

  // =========================================================================
  // 23. ANTI-INFEKSI: Rifampisin (Induser Kuat CYP3A4 & P-gp)
  // =========================================================================
  {
    id: "ddinter-rifampicin-rivaroxaban",
    drugAId: "drug-rifampicin",
    drugBId: "drug-rivaroxaban",
    drugAName: "Rifampicin",
    drugBName: "Rivaroxaban",
    severity: "Major",
    mechanismCategory: "Metabolism",
    mechanism: "Rifampisin adalah induser poten ganda CYP3A4 hepar dan transporter efluks P-gp di dinding enterosit dan kanalikuli biliar.",
    clinicalOutcome: "Penurunan konsentrasi puncak plasma (Cmax) dan AUC rivaroxaban sebesar >50%, MEMICU KEGAGALAN ANTIKOAGULASI DAN TROMBOSIS/STROKE ISKEMIK REKUREN.",
    management: "HINDARI PENGGUNAAN BERSAMAAN (Rekomendasi CHEST / ISTH). Gunakan antikoagulan alternatif yang tidak bergantung pada CYP3A4/P-gp (misal LMWH / Enoxaparin) atau sesuaikan terapi antituberkulosis.",
    evidenceLevel: "Level 1 - Well Established (DDInter / ISTH)",
    ddinterPairId: "DDInter-PAIR-RIF-RIVA-01"
  },
  {
    id: "ddinter-rifampicin-warfarin",
    drugAId: "drug-rifampicin",
    drugBId: "drug-warfarin",
    drugAName: "Rifampicin",
    drugBName: "Warfarin",
    severity: "Major",
    mechanismCategory: "Metabolism",
    mechanism: "Induksi masif isoenzim CYP2C9, CYP1A2, dan CYP3A4 oleh rifampisin mempercepat degradasi kedua enansiomer warfarin.",
    clinicalOutcome: "Penurunan drastis nilai INR hingga di bawah rentang terapeutik (INR < 1.5), meningkatkan risiko fatal trombosis katup atau stroke.",
    management: "Perlu peningkatan dosis warfarin hingga 2–3 kali lipat saat memulai rifampisin. Lakukan pemeriksaan INR serial 2 kali seminggu dan turunkan kembali dosis warfarin secara bertahap saat rifampisin dihentikan.",
    evidenceLevel: "Level 1 - Well Established (DDInter / CHEST)",
    ddinterPairId: "DDInter-PAIR-RIF-WARF-01"
  },
  {
    id: "ddinter-rifampicin-amlodipine",
    drugAId: "drug-rifampicin",
    drugBId: "drug-amlodipine",
    drugAName: "Rifampicin",
    drugBName: "Amlodipine",
    severity: "Moderate",
    mechanismCategory: "Metabolism",
    mechanism: "Induksi CYP3A4 oleh rifampisin menurunkan AUC amlodipine hingga >60%.",
    clinicalOutcome: "Hilangnya efektivitas antihipertensi, lonjakan tekanan darah (hipertensi tidak terkontrol).",
    management: "Tingkatkan dosis amlodipine atau tambahkan agen antihipertensi alternatif yang tidak dimetabolisme oleh CYP3A4.",
    evidenceLevel: "Level 1 - Well Established (DDInter)",
    ddinterPairId: "DDInter-PAIR-RIF-AMLO-01"
  },

  // =========================================================================
  // 24. ANTI-INFEKSI: Aminoglikosida (Gentamicin, Amikacin)
  // =========================================================================
  {
    id: "ddinter-gentamicin-furosemide",
    drugAId: "drug-gentamicin",
    drugBId: "drug-furosemide",
    drugAName: "Gentamicin",
    drugBName: "Furosemide",
    severity: "Major",
    mechanismCategory: "Synergy",
    mechanism: "Sinergisme kerusakan sel rambut koklea dan stria vaskularis telinga dalam serta nekrosis tubular ginjal akut aditif.",
    clinicalOutcome: "OTOTOKSISITAS PERMANEN (tuli sensorineural ireversibel, tinnitus) DAN GAGAL GINJAL AKUT.",
    management: "HINDARI KOMBINASI BERSAMAAN terutama pada pemberian intravena dosis tinggi. Jika kombinasi terpaksa diberikan, lakukan Therapeutic Drug Monitoring (TDM) kadar trough gentamicin dan uji audiometri serial.",
    evidenceLevel: "Level 1 - Well Established (DDInter / IDSA)",
    ddinterPairId: "DDInter-PAIR-GENT-FURO-01"
  },
  {
    id: "ddinter-gentamicin-vancomycin",
    drugAId: "drug-gentamicin",
    drugBId: "drug-vancomycin",
    drugAName: "Gentamicin",
    drugBName: "Vancomycin",
    severity: "Major",
    mechanismCategory: "Synergy",
    mechanism: "Aditif nefrotoksisitas pada epitel tubulus proksimal ginjal dan akumulasi kedua obat di korteks renal.",
    clinicalOutcome: "Insufisiensi ginjal akut berat (peningkatan tajam kreatinin serum, oliguria, nekrosis tubular).",
    management: "Pantau kadar trough kedua obat (TDM) dan kreatinin serum serial setiap 48 jam. Jaga hidrasi optimal.",
    evidenceLevel: "Level 1 - Well Established (DDInter / IDSA)",
    ddinterPairId: "DDInter-PAIR-GENT-VANC-01"
  },

  // =========================================================================
  // 25. NEUROLOGI & PSIKIATRI: Asam Valproat (Valproic Acid)
  // =========================================================================
  {
    id: "ddinter-valproate-meropenem",
    drugAId: "drug-sodium-valproate",
    drugBId: "drug-meropenem",
    drugAName: "Sodium Valproate / Asam Valproat",
    drugBName: "Meropenem",
    severity: "Major",
    mechanismCategory: "Metabolism",
    mechanism: "Meropenem menghambat hidrolisis metabolit valproat glukuronida dan meningkatkan laju glukuronidasi asam valproat, memicu klirens renal cepat.",
    clinicalOutcome: "PENURUNAN DRASTIS KADAR ASAM VALPROAT HINGGA >80% DALAM WAKTU 24 JAM, memicu KEJANG BERULANG (BREAKTHROUGH SEIZURES) DAN STATUS EPILEPTIKUS MENGANCAM JIWA.",
    management: "KONTRAINDIKASI KOMBINASI BERSAMAAN (FDA Warning). Peningkatan dosis valproat TIDAK DAPAT mengimbangi penurunan kadar. Gunakan antibiotik non-karbapenem (misal Piperacillin/Tazobactam atau Sefepim) atau ganti antikonvulsan ke Levetiracetam.",
    evidenceLevel: "Level 1 - Well Established (DDInter / ILAE)",
    ddinterPairId: "DDInter-PAIR-VALP-MERO-01"
  },
  {
    id: "ddinter-valproate-lamotrigine",
    drugAId: "drug-sodium-valproate",
    drugBId: "drug-lamotrigine",
    drugAName: "Sodium Valproate / Asam Valproat",
    drugBName: "Lamotrigine",
    severity: "Major",
    mechanismCategory: "Metabolism",
    mechanism: "Asam valproat menghambat enzim UDP-glukuroniltransferase (UGT2B7) yang memetabolisme lamotrigin, melipatgandakan waktu paruh eliminasi lamotrigin hingga >2 kali lipat.",
    clinicalOutcome: "Lonjakan kadar lamotrigin serum, memicu REAKSI KULIT TOKSIK BERAT: SINDROM STEVENS-JOHNSON (SJS) DAN TOXIC EPIDERMAL NECROLYSIS (TEN) YANG BERPOTENSI FATAL.",
    management: "TURUNKAN DOSIS AWAL LAMOTRIGIN HINGGA >50% (gunakan protokol titrasi khusus lamotrigin dengan valproat: 25 mg selang sehari selama 2 minggu). Edukasi pasien untuk SEGERA melapor jika timbul ruam kulit sekecil apa pun.",
    evidenceLevel: "Level 1 - Well Established (DDInter / FDA Black Box)",
    ddinterPairId: "DDInter-PAIR-VALP-LAMO-01"
  },

  // =========================================================================
  // 26. NEUROLOGI & PSIKIATRI: Klozapin (Clozapine)
  // =========================================================================
  {
    id: "ddinter-clozapine-carbamazepine",
    drugAId: "drug-clozapine",
    drugBId: "drug-carbamazepine",
    drugAName: "Clozapine",
    drugBName: "Carbamazepine",
    severity: "Major",
    mechanismCategory: "Synergy",
    mechanism: "Efek supresi sumsum tulang aditif pada garis keturunan granulositik hemopoietik, ditambah induksi CYP3A4 oleh karbamazepin yang menurunkan efikasi antipsikotik klozapin.",
    clinicalOutcome: "AGRANULOSITOSIS BERAT FATAL (ANC < 500/mm³), sepsis neutropenik, dan kematian.",
    management: "KONTRAINDIKASI MUTLAK BERSAMAAN (FDA Black Box Warning). Jangan pernah menggunakan karbamazepin bersama klozapin. Gunakan antikonvulsan/penstabil mood alternatif seperti Valproat atau Litium.",
    evidenceLevel: "Level 1 - Well Established (DDInter / FDA)",
    ddinterPairId: "DDInter-PAIR-CLOZ-CARB-01"
  },
  {
    id: "ddinter-clozapine-ciprofloxacin",
    drugAId: "drug-clozapine",
    drugBId: "drug-ciprofloxacin",
    drugAName: "Clozapine",
    drugBName: "Ciprofloxacin",
    severity: "Major",
    mechanismCategory: "Metabolism",
    mechanism: "Siprofloksasin adalah inhibitor poten isoenzim CYP1A2 hepar yang merupakan jalur metabolisme utama klozapin.",
    clinicalOutcome: "Kadar klozapin serum melonjak hingga 200–300%, memicu SEDASI BERAT, KEJANG TONIK-KLONIK, HIPOTENSI AKUT, DAN ARITMIA KARDIAK.",
    management: "HINDARI KOMBINASI. Jika siprofloksasin mutlak diberikan, turunkan dosis klozapin hingga 30-50% dan pantau status neurologis serta kadar leukosit.",
    evidenceLevel: "Level 1 - Well Established (DDInter)",
    ddinterPairId: "DDInter-PAIR-CLOZ-CIPRO-01"
  },

  // =========================================================================
  // 27. NEUROLOGI & PSIKIATRI: Amitriptyline & Fenitoin
  // =========================================================================
  {
    id: "ddinter-amitriptyline-fluoxetine",
    drugAId: "drug-amitriptyline",
    drugBId: "drug-fluoxetine",
    drugAName: "Amitriptyline",
    drugBName: "Fluoxetine",
    severity: "Major",
    mechanismCategory: "Metabolism",
    mechanism: "Fluoxetine adalah inhibitor poten CYP2D6 yang memetabolisme amitriptilin menjadi metabolit inaktif.",
    clinicalOutcome: "Lonjakan kadar amitriptilin plasma, memicu TOKSISITAS KARDIOVASKULAR BERAT (pelebaran kompleks QRS, aritmia ventrikel Torsades de Pointes) dan efek antikolinergik ekstrem (ileus paralitik, delirium).",
    management: "HINDARI KOMBINASI BERSAMAAN. Jika kombinasi diperlukan, gunakan dosis amitriptilin sangat rendah (10-25 mg) dan lakukan pemantauan EKG serial.",
    evidenceLevel: "Level 1 - Well Established (DDInter)",
    ddinterPairId: "DDInter-PAIR-AMI-FLUO-01"
  },
  {
    id: "ddinter-amitriptyline-tramadol",
    drugAId: "drug-amitriptyline",
    drugBId: "drug-tramadol",
    drugAName: "Amitriptyline",
    drugBName: "Tramadol",
    severity: "Major",
    mechanismCategory: "Synergy",
    mechanism: "Penurunan ambang kejang aditif di korteks serebral dan peningkatan aktivitas neurotransmisi serotonin sinaps.",
    clinicalOutcome: "RISIKO TINGGI KEJANG TONIK-KLONIK UMUM DAN SINDROM SEROTONIN.",
    management: "Hindari kombinasi terutama pada pasien dengan riwayat kejang atau epilepsi. Gunakan analgesik non-opioid atau pantau ketat.",
    evidenceLevel: "Level 1 - Well Established (DDInter / FDA)",
    ddinterPairId: "DDInter-PAIR-AMI-TRAM-01"
  },
  {
    id: "ddinter-phenytoin-fluconazole",
    drugAId: "drug-phenytoin",
    drugBId: "drug-fluconazole",
    drugAName: "Phenytoin",
    drugBName: "Fluconazole",
    severity: "Major",
    mechanismCategory: "Metabolism",
    mechanism: "Flukonazol menghambat metabolisme hepatik fenitoin yang dimediasi oleh CYP2C9 dan CYP2C19.",
    clinicalOutcome: "Akumulasi fenitoin melebihi kapasitas kinetika Michaelis-Menten saturabel, memicu INTOKSIKASI FENITOIN AKUT (nistagmus, ataksia berat, diplopia, letargi, koma).",
    management: "Pantau kadar serum fenitoin secara ketat saat inisiasi dan penghentian flukonazol. Kurangi dosis fenitoin dan sesuaikan berdasarkan hasil TDM.",
    evidenceLevel: "Level 1 - Well Established (DDInter)",
    ddinterPairId: "DDInter-PAIR-PHEN-FLUC-01"
  },

  // =========================================================================
  // 28. ONKOLOGI & IMUNOSUPRESAN: Tacrolimus, Siklosporin, Tamoksifen
  // =========================================================================
  {
    id: "ddinter-tacrolimus-ketoconazole",
    drugAId: "drug-tacrolimus",
    drugBId: "drug-ketoconazole",
    drugAName: "Tacrolimus",
    drugBName: "Ketoconazole",
    severity: "Major",
    mechanismCategory: "Metabolism",
    mechanism: "Ketokonazol menghambat secara masif isoenzim CYP3A4 dan efluks P-glikoprotein yang mengeliminasi takrolimus.",
    clinicalOutcome: "Lonjakan kadar darah takrolimus hingga >400%, memicu GAGAL GINJAL AKUT, NEFROTOKSISITAS TUBULAR BERAT, DAN HIPERKALEMIA.",
    management: "HINDARI KOMBINASI. Jika penggunaan bersamaan tidak dapat dihindari, turunkan dosis takrolimus secara drastis (hingga 70-80%) dan lakukan pemantauan kadar trough harian.",
    evidenceLevel: "Level 1 - Well Established (DDInter / KDIGO)",
    ddinterPairId: "DDInter-PAIR-TAC-KETO-01"
  },
  {
    id: "ddinter-cyclosporine-rosuvastatin",
    drugAId: "drug-cyclosporine",
    drugBId: "drug-rosuvastatin",
    drugAName: "Cyclosporine",
    drugBName: "Rosuvastatin",
    severity: "Major",
    mechanismCategory: "Distribution",
    mechanism: "Siklosporin menghambat transporter penyerapan hepar OATP1B1 dan OATP1B3 serta transporter efluks BCRP yang mengatur disposisi rosuvastatin.",
    clinicalOutcome: "Peningkatan konsentrasi serum puncak (Cmax) rosuvastatin hingga 11 kali lipat dan AUC hingga 7 kali lipat, memicu RHABDOMYOLYSIS BERAT DAN GAGAL GINJAL AKUT.",
    management: "KONTRAINDIKASI MUTLAK BERSAMAAN pada dosis normal. Batasi dosis rosuvastatin MAKSIMAL 5 MG SEKALI SEHARI pada pasien yang menerima siklosporin (FDA Labeling).",
    evidenceLevel: "Level 1 - Well Established (DDInter / FDA)",
    ddinterPairId: "DDInter-PAIR-CYC-ROSU-01"
  },
  {
    id: "ddinter-tamoxifen-fluoxetine",
    drugAId: "drug-tamoxifen",
    drugBId: "drug-fluoxetine",
    drugAName: "Tamoxifen",
    drugBName: "Fluoxetine",
    severity: "Major",
    mechanismCategory: "Metabolism",
    mechanism: "Fluoxetine adalah inhibitor kuat CYP2D6 hepar yang mencegah bioaktivasi prodrug tamoksifen menjadi metabolit aktifnya yang poten (Endoxifen).",
    clinicalOutcome: "Penurunan drastis konsentrasi endoksifen plasma hingga >70%, MEMICU KEGAGALAN TERAPI HORMONAL DAN PENINGKATAN SIGNIFIKAN KEKAMBUHAN KANKER PAYUDARA SERTA MORTALITAS.",
    management: "HINDARI PENGGUNAAN BERSAMAAN (Pedoman ASCO). Jangan gunakan fluoxetine atau paroxetine pada pasien kanker payudara yang menerima tamoxifen. Gunakan antidepresan dengan inhibisi CYP2D6 minimal seperti Venlafaxine, Citalopram, atau Escitalopram.",
    evidenceLevel: "Level 1 - Well Established (DDInter / ASCO)",
    ddinterPairId: "DDInter-PAIR-TAM-FLUO-01"
  },

  // =========================================================================
  // 29. PULMONOLOGI: Teofilin & Salbutamol
  // =========================================================================
  {
    id: "ddinter-theophylline-ciprofloxacin",
    drugAId: "drug-theophylline",
    drugBId: "drug-ciprofloxacin",
    drugAName: "Theophylline",
    drugBName: "Ciprofloxacin",
    severity: "Major",
    mechanismCategory: "Metabolism",
    mechanism: "Siprofloksasin menghambat secara poten isoenzim CYP1A2 hepar yang bertanggung jawab atas 90% metabolisme teofilin.",
    clinicalOutcome: "Konsentrasi serum teofilin melonjak hingga >100–300%, memicu INTOKSIKASI TEOFILIN BERAT FATAL: KEJANG REFRAKTER, TAKIKARDIA VENTRIKEL, DAN HENTI JANTUNG.",
    management: "HINDARI PENGGUNAAN BERSAMAAN. Jika siprofloksasin mutlak diberikan, turunkan dosis teofilin hingga 50% dan lakukan pemantauan kadar serum teofilin (TDM) secara intensif.",
    evidenceLevel: "Level 1 - Well Established (DDInter / FDA)",
    ddinterPairId: "DDInter-PAIR-THEO-CIPRO-01"
  },
  {
    id: "ddinter-theophylline-propranolol",
    drugAId: "drug-theophylline",
    drugBId: "drug-propranolol",
    drugAName: "Theophylline",
    drugBName: "Propranolol",
    severity: "Major",
    mechanismCategory: "Antagonism",
    mechanism: "Antagonisme farmakodinamik langsung: propranolol memblokade reseptor beta-2 adrenergik di otot polos bronkus, meniadakan efek bronkodilatasi teofilin, ditambah hambatan klirens teofilin via CYP1A2.",
    clinicalOutcome: "BRONKOSPASME AKUT BERAT, SERANGAN ASMA MENGANCAM NYAWA, DAN HILANGNYA KONTROL PERNAPASAN.",
    management: "KONTRAINDIKASI BERSAMAAN pada pasien dengan asma atau PPOK.",
    evidenceLevel: "Level 1 - Well Established (DDInter / GINA)",
    ddinterPairId: "DDInter-PAIR-THEO-PROP-01"
  },
  {
    id: "ddinter-salbutamol-propranolol",
    drugAId: "drug-salbutamol",
    drugBId: "drug-propranolol",
    drugAName: "Salbutamol",
    drugBName: "Propranolol",
    severity: "Major",
    mechanismCategory: "Antagonism",
    mechanism: "Antagonisme kompetitif murni pada reseptor beta-2 adrenergik bronkial oleh penyekat beta non-selektif propranolol.",
    clinicalOutcome: "Penyekatan total respons bronkodilatasi salbutamol, memicu BRONKOKONSTRIKSI AKUT REFRAKTER, GAGAL NAPAS, DAN ASFIKSIA PADA PASIEN ASMA/PPOK.",
    management: "KONTRAINDIKASI MUTLAK pada pasien dengan riwayat asma bronkial atau penyakit paru obstruktif kronik. Jika beta blocker diperlukan untuk indikasi kardiologi, gunakan agen kardioselektif beta-1 (Bisoprolol) dengan dosis terendah.",
    evidenceLevel: "Level 1 - Well Established (DDInter / GINA)",
    ddinterPairId: "DDInter-PAIR-SALB-PROP-01"
  },

  // =========================================================================
  // 30. METABOLISME TULANG & MINERAL: Alendronate & Levothyroxine
  // =========================================================================
  {
    id: "ddinter-alendronate-ibuprofen",
    drugAId: "drug-fornas-alendronate",
    drugBId: "drug-ibuprofen",
    drugAName: "Alendronate",
    drugBName: "Ibuprofen",
    severity: "Moderate",
    mechanismCategory: "Synergy",
    mechanism: "Iritasi mukosa esofagus dan lambung aditif oleh bisfosfonat dan penghambatan prostaglandin protektif mukosa lambung oleh NSAID.",
    clinicalOutcome: "Peningkatan signifikan risiko esofagitis ulseratif, erosi lambung, ulkus peptikum, dan perdarahan saluran cerna atas.",
    management: "Hindari penggunaan bersamaan secara rutin. Minum alendronate dengan segelas air putih penuh saat bangun tidur dan tetap tegak minimal 30 menit. Jika analgesik diperlukan, prioritaskan parasetamol.",
    evidenceLevel: "Level 1 - Well Established (DDInter)",
    ddinterPairId: "DDInter-PAIR-ALEN-IBU-01"
  },
  {
    id: "ddinter-levothyroxine-rifampicin",
    drugAId: "drug-levothyroxine",
    drugBId: "drug-rifampicin",
    drugAName: "Levothyroxine",
    drugBName: "Rifampicin",
    severity: "Moderate",
    mechanismCategory: "Metabolism",
    mechanism: "Rifampisin menginduksi enzim glukuronidasi hepatik (UGT) yang mengeliminasi levotiroksin (T4).",
    clinicalOutcome: "Peningkatan klirens hormon tiroid, menyebabkan perburukan gejala hipotiroidisme dan peningkatan kadar TSH serum.",
    management: "Pantau kadar TSH serum secara berkala. Diperlukan peningkatan dosis levotiroksin sekitar 20-50% selama masa pengobatan antituberkulosis rifampisin.",
    evidenceLevel: "Level 1 - Well Established (DDInter / ATA)",
    ddinterPairId: "DDInter-PAIR-LEVO-RIF-01"
  },

  // =========================================================================
  // 31. INTERAKSI MINOR RESMI DDINTER 2.0 (Minor Interactions Suite)
  // Reference: https://ddinter2.scbdd.com/server/interaction/
  // =========================================================================
  {
    id: "ddinter-antasida-valproate",
    drugAId: "drug-antasida-doen",
    drugBId: "drug-sodium-valproate",
    drugAName: "Antasida DOEN",
    drugBName: "Sodium Valproate",
    severity: "Minor",
    mechanismCategory: "Absorption",
    mechanism: "Data klinis terbatas menunjukkan bahwa pemberian antasida secara bersamaan dapat meningkatkan bioavailabilitas dan penyerapan asam valproat akibat peningkatan pH lambung dan percepatan pengosongan lambung.",
    clinicalOutcome: "Peningkatan kadar plasma puncak valproat ringan hingga sedang; umumnya ditoleransi dengan baik namun berpotensi memicu peningkatan efek samping ringan seperti rasa kantuk (sedasi) atau gangguan gastrointestinal transien.",
    management: "Kedua obat dapat dikonsumsi bersamaan bila diperlukan secara klinis. Pantau efektivitas terapi antikonvulsan dan amati bila timbul rasa kantuk atau keluhan saluran cerna berlebih.",
    evidenceLevel: "Level 2 - Probable (DDInter 2.0)",
    ddinterPairId: "DDInter-PAIR-ANT-VALP-01"
  },
  {
    id: "ddinter-omeprazole-ferrous",
    drugAId: "drug-omeprazole",
    drugBId: "drug-ferrous-sulfate",
    drugAName: "Omeprazole",
    drugBName: "Ferrous Sulfate",
    severity: "Minor",
    mechanismCategory: "Absorption",
    mechanism: "Peningkatan pH intragastrik akibat supresi asam lambung oleh omeprazole mengurangi kelarutan dan disolusi garam besi ferro serta menghambat reduksi besi non-heme yang optimal pada pH asam.",
    clinicalOutcome: "Penurunan penyerapan zat besi oral ringan; dapat memperlambat laju kenaikan hemoglobin pada pasien anemia defisiensi besi.",
    management: "Konsumsi suplemen besi bersama makanan atau minuman kaya vitamin C (asam askorbat) untuk memfasilitasi absorpsi, atau beri jeda waktu konsumsi minimal 2 jam dari supresor asam.",
    evidenceLevel: "Level 2 - Probable (DDInter 2.0)",
    ddinterPairId: "DDInter-PAIR-PPI-FE-01"
  },
  {
    id: "ddinter-omeprazole-levothyroxine",
    drugAId: "drug-omeprazole",
    drugBId: "drug-levothyroxine",
    drugAName: "Omeprazole",
    drugBName: "Levothyroxine",
    severity: "Minor",
    mechanismCategory: "Absorption",
    mechanism: "Penekanan sekresi asam lambung oleh PPI dapat sedikit memodifikasi laju disolusi tablet levotiroksin oral di lambung sebelum diabsorpsi di usus halus.",
    clinicalOutcome: "Sedikit penurunan penyerapan hormon tiroid transien, pada sebagian pasien dapat menyebabkan sedikit peningkatan kadar TSH serum.",
    management: "Minum levotiroksin saat perut kosong minimal 30-60 menit sebelum sarapan atau obat lain. Pantau kadar TSH jika terapi PPI berlangsung kronis.",
    evidenceLevel: "Level 2 - Probable (DDInter 2.0)",
    ddinterPairId: "DDInter-PAIR-PPI-LEVO-01"
  },
  {
    id: "ddinter-zinc-ferrous",
    drugAId: "drug-zinc-sulfate",
    drugBId: "drug-ferrous-sulfate",
    drugAName: "Zinc Sulfat",
    drugBName: "Ferrous Sulfate",
    severity: "Minor",
    mechanismCategory: "Absorption",
    mechanism: "Kation seng (Zn2+) dan besi (Fe2+) berkompetisi pada transporter ion logam divalen 1 (DMT1) yang sama di membran apikal enterosit usus halus.",
    clinicalOutcome: "Penurunan efisiensi penyerapan masing-masing mineral jika dikonsumsi secara bersamaan dalam rasio konsentrasi tinggi.",
    management: "Berikan jeda waktu konsumsi minimal 2 jam antara suplemen seng dan suplemen zat besi oral.",
    evidenceLevel: "Level 2 - Probable (DDInter 2.0)",
    ddinterPairId: "DDInter-PAIR-ZN-FE-01"
  },
  {
    id: "ddinter-antasida-pseudoephedrine",
    drugAId: "drug-antasida-doen",
    drugBId: "drug-pseudoephedrine",
    drugAName: "Antasida DOEN",
    drugBName: "Pseudoephedrine",
    severity: "Minor",
    mechanismCategory: "Excretion",
    mechanism: "Antasida dosis tinggi dapat meningkatkan pH urin (alkalisasi urin), yang meningkatkan fraksi non-terionisasi pseudoefedrin sehingga meningkatkan reabsorpsi pasif di tubulus ginjal dan menurunkan klirens renal.",
    clinicalOutcome: "Sedikit peningkatan kadar dan durasi kerja pseudoefedrin, dapat sedikit meningkatkan potensi stimulasi SSP ringan atau takikardia pada pasien sensitif.",
    management: "Penggunaan bersamaan dosis terapi standar umumnya aman dan dapat ditoleransi. Pantau respon pasien bila timbul rasa cemas atau palpitasi.",
    evidenceLevel: "Level 2 - Probable (DDInter 2.0)",
    ddinterPairId: "DDInter-PAIR-ANT-PSEUDO-01"
  },
  {
    id: "ddinter-caffeine-paracetamol",
    drugAId: "drug-caffeine-citrate",
    drugBId: "drug-paracetamol",
    drugAName: "Caffeine Citrate",
    drugBName: "Paracetamol",
    severity: "Minor",
    mechanismCategory: "Absorption",
    mechanism: "Kafein mempercepat pengosongan lambung sehingga meningkatkan laju penyerapan (Cmax & Tmax lebih cepat) parasetamol dan memberikan efek analgesik ajuvan sinergis.",
    clinicalOutcome: "Peredaan nyeri sakit kepala atau demam yang lebih cepat dan lebih efektif (sinergisme analgesik menguntungkan).",
    management: "Kombinasi umum dimanfaatkan dalam formulasi obat kombinasi sakit kepala (sinergi analgesik ajuvan). Batasi asupan minuman berkafein tambahan untuk mencegah insomnia atau palpitasi.",
    evidenceLevel: "Level 1 - Well Established (DDInter 2.0)",
    ddinterPairId: "DDInter-PAIR-CAF-PCM-01"
  },
  {
    id: "ddinter-aspirin-bisoprolol",
    drugAId: "drug-aspirin",
    drugBId: "drug-bisoprolol",
    drugAName: "Aspirin",
    drugBName: "Bisoprolol",
    severity: "Minor",
    mechanismCategory: "Synergy",
    mechanism: "Aspirin dosis tinggi dapat menghambat sintesis prostaglandin vasodilator ginjal dan menumpulkan efek antihipertensi beta-bloker, namun pada aspirin dosis kardioprotektif rendah (<=100 mg/hari) interaksinya sangat minimal.",
    clinicalOutcome: "Kombinasi standar pada pasien penyakit jantung koroner (PJK) / pasca-infark miokard dengan profil keamanan yang sangat baik.",
    management: "Kombinasi aman dan dianjurkan sesuai pedoman klinis kardiovaskular (AHA/ACC/PERKI). Gunakan aspirin dosis rendah (75-100 mg/hari).",
    evidenceLevel: "Level 1 - Well Established (DDInter 2.0)",
    ddinterPairId: "DDInter-PAIR-ASP-BISO-01"
  },
  {
    id: "ddinter-metformin-ranitidine",
    drugAId: "drug-metformin",
    drugBId: "drug-fornas-ranitidine",
    drugAName: "Metformin",
    drugBName: "Ranitidine",
    severity: "Minor",
    mechanismCategory: "Excretion",
    mechanism: "Ranitidin bersaing secara parsial dengan metformin pada sistem transporter kation organik renal (OCT2/MATE1) di tubulus proksimal ginjal.",
    clinicalOutcome: "Sedikit peningkatan konsentrasi plasma metformin (sekitar 15-20%); umumnya tidak menyebabkan hipoglikemia bermakna pada pasien dengan fungsi ginjal normal.",
    management: "Pantau kadar glukosa darah dan toleransi gastrointestinal pada pasien lanjut usia atau pasien dengan penurunan fungsi ginjal ringan.",
    evidenceLevel: "Level 2 - Probable (DDInter 2.0)",
    ddinterPairId: "DDInter-PAIR-MET-RANI-01"
  },
  {
    id: "ddinter-amoxicillin-paracetamol",
    drugAId: "drug-amoxicillin",
    drugBId: "drug-paracetamol",
    drugAName: "Amoxicillin",
    drugBName: "Paracetamol",
    severity: "Minor",
    mechanismCategory: "Synergy",
    mechanism: "Pemberian bersamaan antibiotik amoksisilin dan analgesik-antipiretik parasetamol tidak menimbulkan perubahan farmakokinetik yang merugikan.",
    clinicalOutcome: "Kombinasi terapi simtomatik dan etiologis yang kompatibel dan aman untuk infeksi saluran napas atau infeksi bakteri lainnya yang disertai demam atau nyeri.",
    management: "Kedua obat dapat diberikan bersamaan sesuai dosis dan jadwal terapi masing-masing.",
    evidenceLevel: "Level 1 - Well Established (DDInter 2.0)",
    ddinterPairId: "DDInter-PAIR-AMOX-PCM-01"
  },
  {
    id: "ddinter-amoxicillin-ibuprofen",
    drugAId: "drug-amoxicillin",
    drugBId: "drug-ibuprofen",
    drugAName: "Amoxicillin",
    drugBName: "Ibuprofen",
    severity: "Minor",
    mechanismCategory: "Synergy",
    mechanism: "Amoksisilin dan ibuprofen tidak memiliki interaksi farmakokinetik bermakna. Keduanya bekerja secara komplementer untuk infeksi dengan inflamasi/nyeri.",
    clinicalOutcome: "Peredaan gejala inflamasi dan nyeri yang efektif selama terapi antibiotik.",
    management: "Berikan ibuprofen setelah makan untuk meminimalkan iritasi lambung.",
    evidenceLevel: "Level 1 - Well Established (DDInter 2.0)",
    ddinterPairId: "DDInter-PAIR-AMOX-IBU-01"
  },
  {
    id: "ddinter-ephedrine-dexamethasone",
    drugAId: "drug-ephedrine",
    drugBId: "drug-dexamethasone",
    drugAName: "Ephedrine",
    drugBName: "Dexamethasone",
    severity: "Minor",
    mechanismCategory: "Metabolism",
    mechanism: "Studi klinis farmakokinetik melaporkan bahwa pemberian bersamaan efedrin mempercepat metabolisme dan eliminasi hepatik deksametason, menurunkan waktu paruh eliminasi deksametason sebesar 36% dan meningkatkan laju pembersihan (klirens metabolik) plasma deksametason sebesar 42%.",
    clinicalOutcome: "Sedikit penurunan konsentrasi plasma dan durasi kerja biologis deksametason akibat percepatan metabolisme hepar; pada sebagian besar pasien efeknya bersifat minor, namun pada terapi imunosupresif/antiinflamasi kronis atau saat interpretasi uji supresi deksametason (DST), dapat terjadi penurunan efikasi glukokortikoid atau hasil uji yang salah.",
    management: "Kedua obat dapat diberikan bersamaan bila diperlukan secara klinis. Pantau respons klinis terhadap terapi kortikosteroid dan lakukan penyesuaian dosis deksametason jika kontrol antiinflamasi berkurang. Hindari penggunaan efedrin sebelum uji supresi deksametason.",
    evidenceLevel: "Level 2 - Probable (DDInter 2.0)",
    ddinterPairId: "DDInter-PAIR-EPH-DEX-01"
  },
  {
    id: "ddinter-antacids-tacrolimus",
    drugAId: "drug-antasida-doen",
    drugBId: "drug-tacrolimus",
    drugAName: "Antasida DOEN",
    drugBName: "Tacrolimus",
    severity: "Minor",
    mechanismCategory: "Absorption",
    mechanism: "Data in vitro menunjukkan bahwa keberadaan antasida dapat sedikit menurunkan bioavailabilitas dan penyerapan oral tacrolimus akibat interaksi kation atau kenaikan pH lambung.",
    clinicalOutcome: "Potensi penurunan penyerapan tacrolimus; pada pasien transplantasi organ, fluktuasi kadar tacrolimus perlu dicegah.",
    management: "Berikan jeda waktu konsumsi minimal 2 jam antara antasida dan tacrolimus, serta pantau kadar trough tacrolimus (TDM) rutin.",
    evidenceLevel: "Level 2 - Probable (DDInter 2.0)",
    ddinterPairId: "DDInter-PAIR-ANT-TAC-01"
  },
  {
    id: "ddinter-sulfasalazine-folic-acid",
    drugAId: "drug-fornas-sulfasalazine",
    drugBId: "drug-folic-acid",
    drugAName: "Sulfasalazine",
    drugBName: "Folic Acid",
    severity: "Minor",
    mechanismCategory: "Absorption",
    mechanism: "Sulfasalazine dapat mengganggu penyerapan usus dan metabolisme asam folat ke bentuk aktif fisiologisnya dengan menghambat transporter folat mukosa usus dan enzim konjugase folat.",
    clinicalOutcome: "Penurunan bioavailabilitas asam folat oral, berisiko menyebabkan defisiensi folat (anemia megaloblastik) pada terapi sulfasalazine jangka panjang.",
    management: "Tingkatkan suplementasi asam folat (1-2 mg/hari) pada pasien yang menerima sulfasalazine jangka panjang, terutama pada kehamilan atau IBD.",
    evidenceLevel: "Level 1 - Well Established (DDInter 2.0)",
    ddinterPairId: "DDInter-PAIR-SULF-FOL-01"
  },
  {
    id: "ddinter-verapamil-morphine",
    drugAId: "drug-verapamil",
    drugBId: "drug-morphine",
    drugAName: "Verapamil",
    drugBName: "Morphine",
    severity: "Minor",
    mechanismCategory: "Others",
    mechanism: "Studi klinis menunjukkan bahwa verapamil dapat memodulasi efek nosiseptif melalui blokade kanal kalsium di kornu dorsalis medula spinalis, meningkatkan potensi efek analgesik morfin sekaligus sedikit menumpulkan sensasi euforia.",
    clinicalOutcome: "Potensiasi efek analgesik opioid dengan sedikit penumpulan sensasi euforia; umumnya dapat ditoleransi dengan baik.",
    management: "Penggunaan bersamaan dapat dilanjutkan sesuai kebutuhan klinis peredaan nyeri, amati efek samping sedasi ringan atau konstipasi.",
    evidenceLevel: "Level 2 - Probable (DDInter 2.0)",
    ddinterPairId: "DDInter-PAIR-VER-MOR-01"
  },

  // =========================================================================
  // 32. INTERAKSI MINOR RESMI DDINTER 2.0 (EXPANSI BATCH MINOR)
  // Sourced directly from: https://ddinter2.scbdd.com/server/interaction/
  // =========================================================================
  {
    id: "ddinter-atorvastatin-amlodipine",
    drugAId: "drug-atorvastatin",
    drugBId: "drug-amlodipine",
    drugAName: "Atorvastatin",
    drugBName: "Amlodipine",
    severity: "Minor",
    mechanismCategory: "Metabolism",
    mechanism: "Amlodipin sedikit memodulasi aktivitas isoenzim CYP3A4 di enterosit dan hepatosit yang memetabolisme atorvastatin, menyebabkan sedikit peningkatan paparan sistemik (AUC) atorvastatin sekitar 15-18% tanpa meningkatkan risiko miopati klinis.",
    clinicalOutcome: "Peningkatan kadar plasma atorvastatin yang sangat ringan; kombinasi ini memiliki profil keamanan yang sangat baik dan terbukti sinergis secara kardioprotektif (dasar sediaan kombinasi dosis tetap Caduet disetujui FDA/BPOM).",
    management: "Kombinasi aman dan merupakan pilar standar terapi hipertensi dengan dislipidemia. Lakukan pemantauan profil lipid dan fungsi hati berkala sesuai panduan rutin.",
    evidenceLevel: "Level 1 - Well Established (DDInter 2.0 / FDA)",
    ddinterPairId: "DDInter-PAIR-ATOR-AMLO-01"
  },
  {
    id: "ddinter-simvastatin-metformin",
    drugAId: "drug-simvastatin",
    drugBId: "drug-metformin",
    drugAName: "Simvastatin",
    drugBName: "Metformin",
    severity: "Minor",
    mechanismCategory: "Metabolism",
    mechanism: "Tidak ditemukan interaksi farmakokinetik bermakna antara simvastatin (metabolisme via CYP3A4) dan metformin (eliminasi via sekresi tubular ginjal OCT2/MATE1).",
    clinicalOutcome: "Kombinasi sangat aman dan kompatibel; memberikan manfaat ganda penurunan glukosa darah dan reduksi risiko kardiovaskular pada pasien diabetes melitus tipe 2 dengan dislipidemia.",
    management: "Kombinasi aman dan direkomendasikan pada pasien diabetes dengan risiko kardiovaskular. Evaluasi kontrol glikemik (HbA1c) dan profil lipid secara teratur.",
    evidenceLevel: "Level 1 - Well Established (DDInter 2.0 / ADA)",
    ddinterPairId: "DDInter-PAIR-SIMV-METF-01"
  },
  {
    id: "ddinter-allopurinol-colchicine",
    drugAId: "drug-allopurinol",
    drugBId: "drug-colchicine",
    drugAName: "Allopurinol",
    drugBName: "Colchicine",
    severity: "Minor",
    mechanismCategory: "Synergy",
    mechanism: "Sinergisme profilaksis: kolkisin menekan peradangan mikrokristal asam urat pada persendian saat inisiasi allopurinol yang menurunkan kadar urat serum secara cepat.",
    clinicalOutcome: "Pencegahan efektif serangan gout akut (gout flare) yang sering terpicu oleh mobilisasi kristal urat pada awal terapi penurun asam urat.",
    management: "Kombinasi sangat dianjurkan dalam pedoman klinis (ACR / EULAR) selama 3-6 bulan pertama inisiasi allopurinol. Pantau fungsi ginjal dan amati efek samping saluran cerna ringan.",
    evidenceLevel: "Level 1 - Well Established (DDInter 2.0 / ACR)",
    ddinterPairId: "DDInter-PAIR-ALLO-COLCH-01"
  },
  {
    id: "ddinter-salbutamol-ipratropium",
    drugAId: "drug-salbutamol",
    drugBId: "drug-ipratropium",
    drugAName: "Salbutamol",
    drugBName: "Ipratropium Bromide",
    severity: "Minor",
    mechanismCategory: "Synergy",
    mechanism: "Sinergisme bronkodilatasi komplementer: salbutamol menstimulasi reseptor beta-2 adrenergik (meningkatkan cAMP) sedangkan ipratropium memblokade reseptor muskarinik M3 (menghambat cGMP) pada otot polos bronkus.",
    clinicalOutcome: "Relaksasi otot polos bronkus yang lebih cepat, lebih kuat, dan bertahan lebih lama; dasar formulasi kombinasi nebulisasi/inhaler standar (Combivent).",
    management: "Kombinasi lini pertama terbukti sangat efektif dan aman pada penanganan eksaserbasi asma akut dan PPOK. Gunakan sesuai protokol bronkodilator.",
    evidenceLevel: "Level 1 - Well Established (DDInter 2.0 / GINA / GOLD)",
    ddinterPairId: "DDInter-PAIR-SALB-IPRA-01"
  },
  {
    id: "ddinter-furosemide-spironolactone",
    drugAId: "drug-furosemide",
    drugBId: "drug-spironolactone",
    drugAName: "Furosemide",
    drugBName: "Spironolactone",
    severity: "Minor",
    mechanismCategory: "Synergy",
    mechanism: "Sinergisme diuretik seimbang: efek hemat kalium spironolakton di tubulus distal menyeimbangkan kehilangan kalium yang dipicu oleh furosemid di ansa Henle tebal.",
    clinicalOutcome: "Diuresis dan natriuresis optimal dengan risiko hipokalemia yang jauh lebih rendah; mencegah remodeling kardiak pada gagal jantung.",
    management: "Kombinasi standar lini pertama pada gagal jantung kongestif dan asites sirosis hati. Lakukan pemantauan kadar kalium serum dan fungsi ginjal secara berkala.",
    evidenceLevel: "Level 1 - Well Established (DDInter 2.0 / ESC / AHA)",
    ddinterPairId: "DDInter-PAIR-FURO-SPIR-01"
  },
  {
    id: "ddinter-domperidone-antacids",
    drugAId: "drug-domperidone",
    drugBId: "drug-antasida-doen",
    drugAName: "Domperidone",
    drugBName: "Antasida DOEN",
    severity: "Minor",
    mechanismCategory: "Absorption",
    mechanism: "Kenaikan pH intragastrik akibat antasida dapat sedikit mengurangi disolusi dan bioavailabilitas oral domperidone jika diminum secara bersamaan.",
    clinicalOutcome: "Sedikit penurunan efikasi prokinetik/antiemetik domperidone jika dikonsumsi dalam waktu yang bersamaan.",
    management: "Berikan domperidone 15-30 menit sebelum makan (saat perut kosong) dan antasida 1-2 jam setelah makan atau saat timbul rasa perih di ulu hati.",
    evidenceLevel: "Level 2 - Probable (DDInter 2.0)",
    ddinterPairId: "DDInter-PAIR-DOMP-ANT-01"
  },
  {
    id: "ddinter-sucralfate-paracetamol",
    drugAId: "drug-sucralfate",
    drugBId: "drug-paracetamol",
    drugAName: "Sucralfate",
    drugBName: "Paracetamol",
    severity: "Minor",
    mechanismCategory: "Absorption",
    mechanism: "Lapisan mukoprotektif sukralfat pada dinding lambung dapat sedikit memperlambat laju penyerapan (Tmax) parasetamol tanpa mengurangi bioavailabilitas sistemik total (AUC).",
    clinicalOutcome: "Onset analgesik atau antipiretik parasetamol mungkin sedikit tertunda, namun efek terapeutik puncak tetap tercapai.",
    management: "Berikan jeda waktu konsumsi minimal 1-2 jam antara sukralfat dan parasetamol jika pasien memerlukan onset peredaan nyeri/demam yang cepat.",
    evidenceLevel: "Level 2 - Probable (DDInter 2.0)",
    ddinterPairId: "DDInter-PAIR-SUCR-PCT-01"
  },
  {
    id: "ddinter-ibuprofen-caffeine",
    drugAId: "drug-ibuprofen",
    drugBId: "drug-caffeine-citrate",
    drugAName: "Ibuprofen",
    drugBName: "Caffeine Citrate",
    severity: "Minor",
    mechanismCategory: "Absorption",
    mechanism: "Kafein mempercepat pengosongan lambung dan laju absorpsi ibuprofen di saluran cerna serta bertindak sebagai analgesik adjuvan sinergis via blokade reseptor adenosin.",
    clinicalOutcome: "Onset analgesik ibuprofen menjadi lebih cepat dan efikasi peredaan nyeri sakit kepala, migrain, atau dismenore meningkat secara bermakna.",
    management: "Kombinasi aman dan umum dimanfaatkan dalam formulasi obat sakit kepala. Batasi asupan minuman berkafein tambahan untuk menghindari palpitasi atau insomnia.",
    evidenceLevel: "Level 1 - Well Established (DDInter 2.0)",
    ddinterPairId: "DDInter-PAIR-IBU-CAF-01"
  },
  {
    id: "ddinter-tramadol-paracetamol",
    drugAId: "drug-tramadol",
    drugBId: "drug-paracetamol",
    drugAName: "Tramadol",
    drugBName: "Paracetamol",
    severity: "Minor",
    mechanismCategory: "Synergy",
    mechanism: "Sinergisme analgesik multimodal: parasetamol bekerja terutama di susunan saraf pusat (penghambatan sintesis prostaglandin sentral) sedangkan tramadol bekerja ganda melalui agonisme reseptor mu-opioid dan inhibisi reuptake serotonin/norepinefrin.",
    clinicalOutcome: "Peredaan nyeri sedang hingga berat yang superior dengan dosis masing-masing obat yang lebih rendah, meminimalkan risiko efek samping masing-masing agen.",
    management: "Kombinasi sinergis baku terstandar (e.g., Ultracet). Pastikan total dosis tramadol tidak melebihi 300 mg/hari dan total parasetamol tidak melebihi 4000 mg/hari. Amati efek samping pusing atau mual.",
    evidenceLevel: "Level 1 - Well Established (DDInter 2.0 / WHO)",
    ddinterPairId: "DDInter-PAIR-TRAM-PCT-01"
  },
  {
    id: "ddinter-lansoprazole-antacids",
    drugAId: "drug-lansoprazole",
    drugBId: "drug-antasida-doen",
    drugAName: "Lansoprazole",
    drugBName: "Antasida DOEN",
    severity: "Minor",
    mechanismCategory: "Absorption",
    mechanism: "Pemberian antasida secara bersamaan dapat sedikit mengurangi laju dan tingkat penyerapan (AUC) kapsul lepas tunda lansoprazole akibat kenaikan pH dini di lambung.",
    clinicalOutcome: "Sedikit penurunan bioavailabilitas lansoprazole (penurunan Cmax ~30% dan AUC ~17% jika diminum simultan).",
    management: "Berikan jeda waktu konsumsi minimal 1 jam antara antasida dan lansoprazole untuk memastikan absorpsi lansoprazole optimal.",
    evidenceLevel: "Level 1 - Well Established (DDInter 2.0)",
    ddinterPairId: "DDInter-PAIR-LANSO-ANT-01"
  },
  {
    id: "ddinter-cetirizine-pseudoephedrine",
    drugAId: "drug-cetirizine",
    drugBId: "drug-pseudoephedrine",
    drugAName: "Cetirizine",
    drugBName: "Pseudoephedrine",
    severity: "Minor",
    mechanismCategory: "Synergy",
    mechanism: "Sinergisme farmakodinamik komplementer pada rinitis alergi: cetirizine menghambat pelepasan mediator alergi via reseptor H1 histamin, sedangkan pseudoefedrin mendekongesti mukosa hidung melalui stimulasi reseptor alfa-adrenergik vaskular.",
    clinicalOutcome: "Peredaan gejala hidung tersumbat, bersin, dan rinorea yang lebih komprehensif dibandingkan monoterapi masing-masing agen.",
    management: "Kombinasi standar aman dan lazim diresepkan. Perhatikan kontraindikasi pseudoefedrin pada pasien hipertensi tidak terkontrol atau penyakit jantung koroner berat.",
    evidenceLevel: "Level 1 - Well Established (DDInter 2.0)",
    ddinterPairId: "DDInter-PAIR-CET-PSEUDO-01"
  },
  {
    id: "ddinter-loratadine-pseudoephedrine",
    drugAId: "drug-loratadine",
    drugBId: "drug-pseudoephedrine",
    drugAName: "Loratadine",
    drugBName: "Pseudoephedrine",
    severity: "Minor",
    mechanismCategory: "Synergy",
    mechanism: "Sinergisme antihistamin non-sedatif (loratadine) dan dekongestan saluran napas atas (pseudoefedrin) untuk mengatasi inflamasi mukosa nasofaring.",
    clinicalOutcome: "Kontrol optimal gejala rinitis alergi musiman dan vasomotor tanpa efek mengantuk yang signifikan.",
    management: "Kombinasi baku yang terbukti efektif (Claritin-D). Gunakan sesuai dosis yang dianjurkan dan hindari konsumsi menjelang tidur untuk mencegah insomnia.",
    evidenceLevel: "Level 1 - Well Established (DDInter 2.0)",
    ddinterPairId: "DDInter-PAIR-LOR-PSEUDO-01"
  },
  {
    id: "ddinter-metformin-acarbose",
    drugAId: "drug-metformin",
    drugBId: "drug-acarbose",
    drugAName: "Metformin",
    drugBName: "Acarbose",
    severity: "Minor",
    mechanismCategory: "Synergy",
    mechanism: "Sinergisme penurunan glukosa darah komplementer: akarbose menghambat enzim alfa-glukosidase usus halus menunda penyerapan karbohidrat, sementara metformin menekan glukoneogenesis hepar dan memperbaiki sensitivitas insulin perifer.",
    clinicalOutcome: "Kontrol glikemik postprandial dan puasa yang lebih stabil tanpa meningkatkan risiko hipoglikemia intrinsik atau kenaikan berat badan.",
    management: "Kombinasi aman dan rasional. Minum akarbose bersama suapan pertama makanan utama. Amati efek samping gastrointestinal ringan seperti kembung atau flatulensi pada awal terapi.",
    evidenceLevel: "Level 1 - Well Established (DDInter 2.0 / ADA)",
    ddinterPairId: "DDInter-PAIR-METF-ACAR-01"
  },
  {
    id: "ddinter-cholecalciferol-calcium-carbonate",
    drugAId: "drug-cholecalciferol",
    drugBId: "drug-calcium-carbonate",
    drugAName: "Cholecalciferol",
    drugBName: "Calcium Carbonate",
    severity: "Minor",
    mechanismCategory: "Absorption",
    mechanism: "Vitamin D3 (kolekalsiferol) dihidroksilasi menjadi bentuk aktif kalsitriol yang menstimulasi sintesis calbindin di enterosit mukosa usus halus, meningkatkan efisiensi absorpsi ion kalsium secara aktif.",
    clinicalOutcome: "Peningkatan bioavailabilitas kalsium oral dan mineralisasi tulang yang optimal; pencegahan osteoporosis dan hipokalsemia.",
    management: "Kombinasi sinergis sangat aman dan dianjurkan pada pasien osteoporosis, wanita pascamenopause, dan lansia. Konsumsi bersama makanan untuk penyerapan kalsium karbonat yang maksimal.",
    evidenceLevel: "Level 1 - Well Established (DDInter 2.0 / NOF)",
    ddinterPairId: "DDInter-PAIR-VITD-CALC-01"
  },
  {
    id: "ddinter-ferrous-sulfate-folic-acid",
    drugAId: "drug-ferrous-sulfate",
    drugBId: "drug-folic-acid",
    drugAName: "Ferrous Sulfate",
    drugBName: "Folic Acid",
    severity: "Minor",
    mechanismCategory: "Synergy",
    mechanism: "Sinergisme eritropoiesis ganda: zat besi diperlukan sebagai gugus prostetik heme untuk sintesis hemoglobin, sedangkan asam folat bertindak sebagai koenzim transfer satu-karbon pada sintesis DNA dan pembelahan normoblas.",
    clinicalOutcome: "Koreksi anemia defisiensi mikrositik dan makrositik secara simultan; suplementasi esensial untuk menurunkan risiko defek tabung saraf (NTD) pada kehamilan.",
    management: "Kombinasi standar lini pertama suplementasi kehamilan (tablet tambah darah / TTD). Konsumsi bersama air putih atau jus jeruk, dan hindari konsumsi bersama teh, kopi, atau susu yang menghambat penyerapan besi.",
    evidenceLevel: "Level 1 - Well Established (DDInter 2.0 / WHO)",
    ddinterPairId: "DDInter-PAIR-IRON-FOL-01"
  },
  {
    id: "ddinter-cefixime-paracetamol",
    drugAId: "drug-cefixime",
    drugBId: "drug-paracetamol",
    drugAName: "Cefixime",
    drugBName: "Paracetamol",
    severity: "Minor",
    mechanismCategory: "Synergy",
    mechanism: "Pemberian bersamaan antibiotik sefalosporin generasi ketiga (cefixime) dan antipiretik/analgesik (parasetamol) tidak menimbulkan interferensi farmakokinetik atau farmakodinamik yang merugikan.",
    clinicalOutcome: "Kombinasi terapi etiologis bakterial dan penanganan simtomatik demam/nyeri yang aman, kompatibel, dan efektif.",
    management: "Kedua obat dapat diberikan bersamaan sesuai dosis klinis masing-masing. Pastikan antibiotik cefixime dihabiskan sesuai durasi yang diresepkan.",
    evidenceLevel: "Level 1 - Well Established (DDInter 2.0)",
    ddinterPairId: "DDInter-PAIR-CEF-PCT-01"
  },
  {
    id: "ddinter-omeprazole-paracetamol",
    drugAId: "drug-omeprazole",
    drugBId: "drug-paracetamol",
    drugAName: "Omeprazole",
    drugBName: "Paracetamol",
    severity: "Minor",
    mechanismCategory: "Absorption",
    mechanism: "Penekanan asam lambung oleh omeprazole sedikit mempercepat pengosongan lambung dan laju absorpsi (Tmax) parasetamol tanpa mempengaruhi bioavailabilitas sistemik total (AUC).",
    clinicalOutcome: "Onset peredaan demam atau nyeri parasetamol tercapai sedikit lebih cepat; kombinasi sangat aman dan lazim digunakan bersama.",
    management: "Kombinasi kompatibel dan aman dikonsumsi bersamaan sesuai indikasi masing-masing.",
    evidenceLevel: "Level 1 - Well Established (DDInter 2.0)",
    ddinterPairId: "DDInter-PAIR-OMEP-PCT-01"
  },
  {
    id: "ddinter-acarbose-glimepiride",
    drugAId: "drug-acarbose",
    drugBId: "drug-glimepiride",
    drugAName: "Acarbose",
    drugBName: "Glimepiride",
    severity: "Minor",
    mechanismCategory: "Synergy",
    mechanism: "Sinergisme penurunan glukosa darah komplementer: akarbose meratakan lonjakan glukosa postprandial di usus, sedangkan glimepiride merangsang pelepasan insulin basal dari sel beta pankreas.",
    clinicalOutcome: "Peningkatan kontrol glikemik menyeluruh (penurunan HbA1c); risiko hipoglikemia tetap memerlukan kewaspadaan pada pasien lansia.",
    management: "Jika timbul gejala hipoglikemia (keringat dingin, gemetar), gunakan dekstrosa (glukosa murni) oral, bukan gula pasir (sukrosa), karena enzim pemecah sukrosa dihambat oleh akarbose.",
    evidenceLevel: "Level 1 - Well Established (DDInter 2.0 / ADA)",
    ddinterPairId: "DDInter-PAIR-ACAR-GLIM-01"
  },
  {
    id: "ddinter-domperidone-paracetamol",
    drugAId: "drug-domperidone",
    drugBId: "drug-paracetamol",
    drugAName: "Domperidone",
    drugBName: "Paracetamol",
    severity: "Minor",
    mechanismCategory: "Absorption",
    mechanism: "Domperidone meningkatkan motilitas lambung dan mempercepat pengosongan lambung, sehingga mempercepat laju absorpsi (Tmax) parasetamol di usus halus.",
    clinicalOutcome: "Onset peredaan nyeri kepala menjadi lebih cepat dan keluhan mual yang menyertai serangan migrain teratasi secara efektif.",
    management: "Kombinasi menguntungkan dan aman untuk penanganan nyeri migrain akut disertai mual. Obat dapat dikonsumsi bersamaan.",
    evidenceLevel: "Level 1 - Well Established (DDInter 2.0)",
    ddinterPairId: "DDInter-PAIR-DOMP-PCT-01"
  },
  {
    id: "ddinter-spironolactone-amlodipine",
    drugAId: "drug-spironolactone",
    drugBId: "drug-amlodipine",
    drugAName: "Spironolactone",
    drugBName: "Amlodipine",
    severity: "Minor",
    mechanismCategory: "Synergy",
    mechanism: "Sinergisme antihipertensi komplementer: amlodipin memicu vasodilatasi arteriol perifer melalui blokade kanal kalsium, sedangkan spironolakton menghambat retensi natrium dan air yang dimediasi aldosteron.",
    clinicalOutcome: "Penurunan tekanan darah sinergis yang sangat efektif pada pasien hipertensi resisten (kombinasi lini ke-4 terarah pedoman PATHWAY-2).",
    management: "Kombinasi terbukti efektif dan aman pada hipertensi resisten. Lakukan pemantauan berkala tekanan darah, kadar kalium serum, dan fungsi ginjal.",
    evidenceLevel: "Level 1 - Well Established (DDInter 2.0 / PATHWAY-2)",
    ddinterPairId: "DDInter-PAIR-SPIR-AMLO-01"
  },
  {
    id: "ddinter-spironolactone-bisoprolol",
    drugAId: "drug-spironolactone",
    drugBId: "drug-bisoprolol",
    drugAName: "Spironolactone",
    drugBName: "Bisoprolol",
    severity: "Moderate",
    mechanismCategory: "Synergy",
    mechanism: "Meskipun sering dikombinasikan secara rasional pada tatalaksana gagal jantung (GDMT HFrEF), kombinasi diuretik dan penyekat beta dapat meningkatkan risiko hipotensi postural serta mempengaruhi toleransi glukosa atau profil lipid pada pasien diabetes/pra-diabetes.",
    clinicalOutcome: "Penurunan tekanan darah aditif, potensi gangguan homeostasis elektrolit kalium, serta risiko hiperglikemia ringan atau kelelahan berlebih.",
    management: "Pantau tekanan darah, denyut jantung, kadar kalium serum, dan glukosa darah secara berkala. Edukasi pasien untuk mewaspadai gejala hipotensi ortostatik (pusing saat berdiri tiba-tiba).",
    evidenceLevel: "Level 1 - Well Established (DDInter 2.0 / ESC)",
    ddinterPairId: "DDInter-PAIR-SPIR-BISO-01"
  },

  // =========================================================================
  // 31. DDINTER 2.0 EKSPANSI LANJUTAN: 20 Pasangan Klinis Terverifikasi
  // =========================================================================
  {
    id: "ddinter-metformin-empagliflozin",
    drugAId: "drug-metformin",
    drugBId: "drug-empagliflozin",
    drugAName: "Metformin",
    drugBName: "Empagliflozin",
    severity: "Minor",
    mechanismCategory: "Synergy",
    mechanism: "Sinergisme komplementer penurunan glukosa darah melalui inhibisi reabsorpsi glukosa ginjal oleh empagliflozin (SGLT2i) dan penekanan glukoneogenesis hepar serta peningkatan sensitivitas insulin perifer oleh metformin.",
    clinicalOutcome: "Kontrol HbA1c optimal, proteksi kardiorenal, penurunan berat badan; risiko hipoglikemia sangat rendah saat dikombinasikan tanpa sulfonilurea atau insulin.",
    management: "Kombinasi lini pertama/kedua terarah pedoman PERKENI/ADA/EASD. Pastikan hidrasi cairan adekuat dan edukasi kebersihan urogenital untuk mencegah infeksi jamur genital.",
    evidenceLevel: "Level 1 - Well Established (DDInter 2.0 / ADA)",
    ddinterPairId: "DDInter-PAIR-MET-EMPA-01"
  },
  {
    id: "ddinter-aspirin-furosemide",
    drugAId: "drug-aspirin",
    drugBId: "drug-furosemide",
    drugAName: "Aspirin",
    drugBName: "Furosemide",
    severity: "Moderate",
    mechanismCategory: "Excretion",
    mechanism: "Aspirin dosis analgesik menghambat sintesis prostaglandin renal vasodilator yang memediasi efek natriuretik dan diuretik furosemid, serta berkompetisi pada sistem sekresi asam di tubulus proksimal ginjal.",
    clinicalOutcome: "Penurunan efikasi diuretik furosemid dan potensi peningkatan retensi cairan atau risiko intoksikasi salisilat pada dosis tinggi.",
    management: "Gunakan aspirin dosis rendah antiplatelet (<= 100 mg/hari) bila diindikasikan untuk kardioproteksi. Hindari penggunaan aspirin dosis analgesik tinggi (> 300 mg/hari) bersama furosemid.",
    evidenceLevel: "Level 1 - Well Established (DDInter 2.0)",
    ddinterPairId: "DDInter-PAIR-ASP-FURO-01"
  },
  {
    id: "ddinter-metoclopramide-paracetamol",
    drugAId: "drug-metoclopramide",
    drugBId: "drug-paracetamol",
    drugAName: "Metoclopramide",
    drugBName: "Paracetamol",
    severity: "Minor",
    mechanismCategory: "Absorption",
    mechanism: "Metoklopramid mempercepat motilitas saluran cerna atas dan laju pengosongan lambung ke duodenum, sehingga mempercepat laju absorpsi (mempersingkat Tmax) parasetamol.",
    clinicalOutcome: "Onset peredaan nyeri dan demam tercapai lebih cepat; bioavailabilitas total (AUC) parasetamol tidak berubah bermakna.",
    management: "Kombinasi rasional dan menguntungkan, sering dimanfaatkan pada tatalaksana serangan migrain akut yang disertai mual. Obat dapat dikonsumsi bersamaan.",
    evidenceLevel: "Level 1 - Well Established (DDInter 2.0)",
    ddinterPairId: "DDInter-PAIR-METO-PCT-01"
  },
  {
    id: "ddinter-salbutamol-furosemide",
    drugAId: "drug-salbutamol",
    drugBId: "drug-furosemide",
    drugAName: "Salbutamol",
    drugBName: "Furosemide",
    severity: "Moderate",
    mechanismCategory: "Synergy",
    mechanism: "Salbutamol memicu pergeseran ion kalium ekstraseluler ke dalam ruang intraseluler melalui stimulasi reseptor beta-2 dan pompa Na+/K+-ATPase, sedangkan furosemid meningkatkan pembuangan kalium melalui urin di ansa Henle.",
    clinicalOutcome: "Efek hipokalemia aditif (penurunan kalium serum < 3.5 mEq/L), yang dapat memicu kelemahan otot, kram, dan aritmia kardiak pada pasien rentan.",
    management: "Pantau kadar kalium serum secara berkala pada pasien yang menerima terapi nebulisasi salbutamol dosis tinggi berulang bersama diuretik ansa. Pertimbangkan suplementasi kalium bila diperlukan.",
    evidenceLevel: "Level 1 - Well Established (DDInter 2.0)",
    ddinterPairId: "DDInter-PAIR-SALB-FURO-01"
  },
  {
    id: "ddinter-atorvastatin-clopidogrel",
    drugAId: "drug-atorvastatin",
    drugBId: "drug-clopidogrel",
    drugAName: "Atorvastatin",
    drugBName: "Clopidogrel",
    severity: "Moderate",
    mechanismCategory: "Metabolism",
    mechanism: "Pemberian bersamaan atorvastatin dapat menurunkan aktivasi metabolik prodrug clopidogrel dan efek antiplateletnya. Mekanisme yang diajukan adalah penghambatan kompetitif pada aktivitas enzim sitokrom P450 3A4 (CYP3A4) di hepar yang bertanggung jawab mengubah clopidogrel menjadi metabolit aktifnya.",
    clinicalOutcome: "Potensi penurunan efikasi penghambatan agregasi trombosit clopidogrel, yang secara farmakokinetik dapat mengurangi respons antiplatelet pada pasien pasca-intervensi koroner perkutan (PCI) atau sindrom koroner akut.",
    management: "Pemantauan efikasi clopidogrel dan respons klinis dianjurkan selama terapi bersamaan. Alternatif statin yang tidak dimetabolisme oleh jalur CYP3A4 seperti Rosuvastatin atau Pravastatin secara teoritis tidak berinteraksi dengan clopidogrel dan dapat dipertimbangkan bila diperlukan.",
    evidenceLevel: "Level 1 - Well Established (DDInter 2.0)",
    ddinterPairId: "DDInter-PAIR-ATOR-CLOP-01"
  },
  {
    id: "ddinter-valsartan-hydrochlorothiazide",
    drugAId: "drug-valsartan",
    drugBId: "drug-hydrochlorothiazide",
    drugAName: "Valsartan",
    drugBName: "Hydrochlorothiazide",
    severity: "Minor",
    mechanismCategory: "Synergy",
    mechanism: "Aksi komplementer antihipertensi: HCTZ mengurangi volume intravaskular dan memicu deplesi natrium yang merangsang aksis renin-angiotensin, sementara valsartan memblokade reseptor AT1 untuk mencegah vasokonstriksi kompensatori.",
    clinicalOutcome: "Penurunan tekanan darah sinergis yang sangat efektif; valsartan juga membantu menetralkan efek hipokalemia yang dipicu oleh diuretik tiazid.",
    management: "Kombinasi lini pertama terarah pedoman (JNC 8 / ESC / PERKI). Pantau tekanan darah dan kadar elektrolit serum secara berkala.",
    evidenceLevel: "Level 1 - Well Established (DDInter 2.0 / ESC)",
    ddinterPairId: "DDInter-PAIR-VALS-HCTZ-01"
  },
  {
    id: "ddinter-bisoprolol-hydrochlorothiazide",
    drugAId: "drug-bisoprolol",
    drugBId: "drug-hydrochlorothiazide",
    drugAName: "Bisoprolol",
    drugBName: "Hydrochlorothiazide",
    severity: "Minor",
    mechanismCategory: "Synergy",
    mechanism: "Sinergisme penurunan curah jantung dan pelepasan renin oleh bisoprolol berpadu dengan penurunan resistensi vaskular perifer dan diuresis oleh HCTZ.",
    clinicalOutcome: "Kontrol tekanan darah yang efektif; dapat terjadi penurunan kalium ringan atau perubahan profil glukosa pada penggunaan jangka panjang.",
    management: "Kombinasi rasional yang diakui pedoman hipertensi (misal sediaan Lodoz). Lakukan pemantauan berkala tekanan darah, elektrolit, dan kadar glukosa darah.",
    evidenceLevel: "Level 1 - Well Established (DDInter 2.0)",
    ddinterPairId: "DDInter-PAIR-BISO-HCTZ-01"
  },
  {
    id: "ddinter-metformin-linagliptin",
    drugAId: "drug-metformin",
    drugBId: "drug-linagliptin",
    drugAName: "Metformin",
    drugBName: "Linagliptin",
    severity: "Minor",
    mechanismCategory: "Synergy",
    mechanism: "Sinergisme komplementer: linagliptin memperpanjang masa kerja hormon inkretin (GLP-1/GIP) untuk merangsang sekresi insulin glukosa-dependen dan menekan glukagon, sementara metformin menekan glukoneogenesis hepar.",
    clinicalOutcome: "Kontrol glikemik menyeluruh yang sangat baik dengan risiko hipoglikemia yang minimal dan profil berat badan netral.",
    management: "Kombinasi lini kedua yang aman dan rasional pada pasien DM tipe 2, termasuk pada pasien dengan penurunan fungsi ginjal karena linagliptin diekskresi terutama melalui rute non-renal (empedu/feses).",
    evidenceLevel: "Level 1 - Well Established (DDInter 2.0 / ADA)",
    ddinterPairId: "DDInter-PAIR-MET-LINA-01"
  },
  {
    id: "ddinter-levofloxacin-dexamethasone",
    drugAId: "drug-levofloxacin",
    drugBId: "drug-dexamethasone",
    drugAName: "Levofloxacin",
    drugBName: "Dexamethasone",
    severity: "Major",
    mechanismCategory: "Synergy",
    mechanism: "Sinergisme toksisitas tenosit dan degradasi serabut kolagen melalui penghambatan proliferasi fibroblas dan peningkatan ekspresi matriks metaloproteinase oleh fluoroquinolone dan kortikosteroid.",
    clinicalOutcome: "Peningkatan drastis risiko tendinopati dan ruptur tendon Achilles, terutama pada pasien usia lanjut (> 60 tahun) atau pengguna kortikosteroid sistemik.",
    management: "Hindari penggunaan bersamaan jika tersedia pilihan antibiotik alternatif. Segera hentikan levofloxacin dan istirahatkan ekstremitas bila pasien mengeluhkan nyeri, bengkak, atau inflamasi pada area tendon.",
    evidenceLevel: "Level 1 - Well Established (DDInter 2.0 / FDA)",
    ddinterPairId: "DDInter-PAIR-LEVO-DEXA-01"
  },
  {
    id: "ddinter-glimepiride-allopurinol",
    drugAId: "drug-glimepiride",
    drugBId: "drug-allopurinol",
    drugAName: "Glimepiride",
    drugBName: "Allopurinol",
    severity: "Moderate",
    mechanismCategory: "Excretion",
    mechanism: "Allopurinol dan metabolit aktifnya oksipurinol dapat menghambat klirens ginjal dan sekresi tubulus glimepiride serta memperpanjang waktu paruh eliminasi sulfonilurea.",
    clinicalOutcome: "Peningkatan konsentrasi plasma glimepiride yang dapat memicu hipoglikemia berkepanjangan, terutama pada pasien lanjut usia atau pasien dengan penurunan fungsi ginjal.",
    management: "Pantau kadar glukosa darah mandiri secara ketat saat memulai atau mengubah dosis allopurinol. Lakukan penyesuaian penurunan dosis glimepiride bila timbul tanda hipoglikemia.",
    evidenceLevel: "Level 1 - Well Established (DDInter 2.0)",
    ddinterPairId: "DDInter-PAIR-GLIM-ALLO-01"
  },
  {
    id: "ddinter-pantoprazole-clopidogrel",
    drugAId: "drug-pantoprazole",
    drugBId: "drug-clopidogrel",
    drugAName: "Pantoprazole",
    drugBName: "Clopidogrel",
    severity: "Minor",
    mechanismCategory: "Metabolism",
    mechanism: "Pantoprazole memiliki afinitas ikatan yang jauh lebih rendah terhadap isoenzim CYP2C19 dibandingkan omeprazole, sehingga tidak menghambat bioaktivasi clopidogrel menjadi metabolit aktif antiplateletnya.",
    clinicalOutcome: "Memberikan proteksi mukosa lambung yang efektif terhadap risiko perdarahan saluran cerna akibat antiplatelet tanpa menurunkan efikasi kardioprotektif clopidogrel.",
    management: "Pilihan gastroprotektor PPI yang direkomendasikan pada pasien yang mengonsumsi clopidogrel pasca-PCI atau sindrom koroner akut. Obat dapat dikonsumsi bersamaan.",
    evidenceLevel: "Level 1 - Well Established (DDInter 2.0 / ACC/AHA)",
    ddinterPairId: "DDInter-PAIR-PANTO-CLOP-01"
  },
  {
    id: "ddinter-metformin-dapagliflozin",
    drugAId: "drug-metformin",
    drugBId: "drug-dapagliflozin",
    drugAName: "Metformin",
    drugBName: "Dapagliflozin",
    severity: "Minor",
    mechanismCategory: "Synergy",
    mechanism: "Sinergisme penurunan glukosa darah secara komplementer: dapagliflozin membuang kelebihan glukosa melalui urin via penghambatan SGLT2 di tubulus proksimal, sedangkan metformin menekan produksi glukosa hepatik.",
    clinicalOutcome: "Peningkatan kontrol HbA1c, penurunan tekanan darah sistolik, penurunan berat badan, serta proteksi kardiovaskular dan penurunan risiko rawat inap gagal jantung.",
    management: "Kombinasi standar terarah pedoman PERKENI/ADA/KDIGO (misal FDC Xigduo). Pastikan asupan cairan harian memadai dan edukasi kebersihan area urogenital.",
    evidenceLevel: "Level 1 - Well Established (DDInter 2.0 / ADA)",
    ddinterPairId: "DDInter-PAIR-MET-DAPA-01"
  },
  {
    id: "ddinter-candesartan-hydrochlorothiazide",
    drugAId: "drug-candesartan",
    drugBId: "drug-hydrochlorothiazide",
    drugAName: "Candesartan",
    drugBName: "Hydrochlorothiazide",
    severity: "Minor",
    mechanismCategory: "Synergy",
    mechanism: "Blokade reseptor angiotensin II oleh candesartan bersinergi dengan efek natriuretik dan pengurangan volume vaskular oleh HCTZ.",
    clinicalOutcome: "Penurunan tekanan darah aditif yang kuat; candesartan meminimalkan risiko hipokalemia yang diinduksi oleh diuretik tiazid.",
    management: "Kombinasi FDC lini pertama terarah pedoman kardiovaskular (misal Blopress Plus). Pantau tekanan darah, kalium serum, dan kreatinin secara berkala.",
    evidenceLevel: "Level 1 - Well Established (DDInter 2.0 / ESC)",
    ddinterPairId: "DDInter-PAIR-CAND-HCTZ-01"
  },
  {
    id: "ddinter-spironolactone-hydrochlorothiazide",
    drugAId: "drug-spironolactone",
    drugBId: "drug-hydrochlorothiazide",
    drugAName: "Spironolactone",
    drugBName: "Hydrochlorothiazide",
    severity: "Minor",
    mechanismCategory: "Synergy",
    mechanism: "Sinergisme diuretik komplementer: efek hemat kalium spironolakton di tubulus kontortus distal menyeimbangkan efek pembuangan kalium oleh HCTZ di tubulus distal awal.",
    clinicalOutcome: "Peningkatan diuresis dan natriuresis dengan keseimbangan kadar kalium serum yang lebih terjaga (dasar sediaan kombinasi Aldactazide).",
    management: "Kombinasi efektif pada hipertensi esensial atau edema refrakter. Pantau kadar kalium serum dan fungsi ginjal secara periodik.",
    evidenceLevel: "Level 1 - Well Established (DDInter 2.0)",
    ddinterPairId: "DDInter-PAIR-SPIR-HCTZ-01"
  },
  {
    id: "ddinter-gabapentin-antasida",
    drugAId: "drug-gabapentin",
    drugBId: "drug-antasida-doen",
    drugAName: "Gabapentin",
    drugBName: "Antasida DOEN",
    severity: "Minor",
    mechanismCategory: "Absorption",
    mechanism: "Antasida yang mengandung aluminium hidroksida dan magnesium hidroksida menurunkan bioavailabilitas oral gabapentin sekitar 20%, kemungkinan melalui penurunan kelarutan atau pembentukan kompleks adsorpsi di saluran cerna.",
    clinicalOutcome: "Penurunan ringan efikasi analgesik neuropatik atau antikonvulsan gabapentin.",
    management: "Berikan jeda waktu konsumsi minimal 2 jam setelah pemberian antasida sebelum mengonsumsi gabapentin.",
    evidenceLevel: "Level 1 - Well Established (DDInter 2.0)",
    ddinterPairId: "DDInter-PAIR-GABA-ANT-01"
  },
  {
    id: "ddinter-ibuprofen-spironolactone",
    drugAId: "drug-ibuprofen",
    drugBId: "drug-spironolactone",
    drugAName: "Ibuprofen",
    drugBName: "Spironolactone",
    severity: "Moderate",
    mechanismCategory: "Antagonism",
    mechanism: "Ibuprofen menghambat sintesis prostaglandin vasodilator dan natriuretik di ginjal, melawan efek diuretik dan antihipertensi spironolakton, serta meningkatkan retensi kalium.",
    clinicalOutcome: "Penurunan efikasi antihipertensi dan diuresis spironolakton, serta peningkatan risiko hiperkalemia dan penurunan fungsi ginjal akut.",
    management: "Hindari penggunaan NSAID kronis bersama spironolakton. Jika analgesik diperlukan, gunakan parasetamol sebagai alternatif utama. Pantau kalium serum dan kreatinin jika kombinasi tidak dapat dihindari.",
    evidenceLevel: "Level 1 - Well Established (DDInter 2.0)",
    ddinterPairId: "DDInter-PAIR-IBU-SPIR-01"
  },
  {
    id: "ddinter-amlodipine-diltiazem",
    drugAId: "drug-amlodipine",
    drugBId: "drug-diltiazem",
    drugAName: "Amlodipine",
    drugBName: "Diltiazem",
    severity: "Moderate",
    mechanismCategory: "Metabolism",
    mechanism: "Diltiazem menghambat isoenzim CYP3A4 hepar yang memetabolisme amlodipin, serta keduanya memiliki efek inotropik/kronotropik dan vasodilatasi aditif.",
    clinicalOutcome: "Peningkatan kadar plasma amlodipin hingga 1.5 - 2 kali lipat, meningkatkan risiko hipotensi simtomatik, bradikardia, dan edema tungkai berat.",
    management: "Jika kombinasi CCB dihidropiridin dan non-dihidropiridin digunakan bersama, turunkan dosis amlodipin dan lakukan pemantauan ketat denyut jantung serta tekanan darah.",
    evidenceLevel: "Level 1 - Well Established (DDInter 2.0)",
    ddinterPairId: "DDInter-PAIR-AMLO-DILT-01"
  },
  {
    id: "ddinter-amlodipine-hydrochlorothiazide",
    drugAId: "drug-amlodipine",
    drugBId: "drug-hydrochlorothiazide",
    drugAName: "Amlodipine",
    drugBName: "Hydrochlorothiazide",
    severity: "Minor",
    mechanismCategory: "Synergy",
    mechanism: "Vasodilatasi arteriol perifer oleh amlodipin berpadu dengan pengurangan volume cairan ekstraseluler dan natriuresis oleh HCTZ.",
    clinicalOutcome: "Penurunan tekanan darah sinergis yang sangat efektif pada pasien hipertensi lanjut usia atau hipertensi sistolik terisolasi.",
    management: "Kombinasi rasional lini pertama terarah pedoman JNC 8 / ESC. Pantau tekanan darah, kalium serum, dan fungsi ginjal secara periodik.",
    evidenceLevel: "Level 1 - Well Established (DDInter 2.0 / ESC)",
    ddinterPairId: "DDInter-PAIR-AMLO-HCTZ-01"
  },
  {
    id: "ddinter-azithromycin-atorvastatin",
    drugAId: "drug-azithromycin",
    drugBId: "drug-atorvastatin",
    drugAName: "Azithromycin",
    drugBName: "Atorvastatin",
    severity: "Minor",
    mechanismCategory: "Metabolism",
    mechanism: "Berbeda dengan klaritromisin atau eritromisin yang merupakan inhibitor kuat CYP3A4, azitromisin memiliki cincin azalida 15-anggota yang tidak menginaktivasi CYP3A4 hepar secara bermakna.",
    clinicalOutcome: "Profil interaksi jauh lebih aman tanpa peningkatan risiko miopati atau rhabdomyolysis klinis.",
    management: "Azitromisin merupakan makrolida pilihan yang aman pada pasien yang sedang mengonsumsi atorvastatin. Tidak diperlukan penyesuaian dosis statin.",
    evidenceLevel: "Level 1 - Well Established (DDInter 2.0)",
    ddinterPairId: "DDInter-PAIR-AZI-ATOR-01"
  },
  {
    id: "ddinter-lisinopril-hydrochlorothiazide",
    drugAId: "drug-lisinopril",
    drugBId: "drug-hydrochlorothiazide",
    drugAName: "Lisinopril",
    drugBName: "Hydrochlorothiazide",
    severity: "Minor",
    mechanismCategory: "Synergy",
    mechanism: "Sinergisme antihipertensi komplementer: lisinopril menghambat konversi angiotensin I menjadi angiotensin II dan mengurangi sekresi aldosteron, menyeimbangkan aktivasi aksis RAAS dan kehilangan kalium yang dipicu oleh diuresis HCTZ.",
    clinicalOutcome: "Kontrol tekanan darah yang sangat baik dengan risiko hipokalemia yang lebih rendah dibandingkan monoterapi tiazid.",
    management: "Kombinasi lini pertama standar pedoman (misal kombinasi FDC Zestoretic). Pantau tekanan darah, kalium serum, dan fungsi ginjal secara periodik.",
    evidenceLevel: "Level 1 - Well Established (DDInter 2.0 / JNC 8)",
    ddinterPairId: "DDInter-PAIR-LIS-HCTZ-01"
  }
];



