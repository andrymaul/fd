import { DrugInteraction } from '../types';

export const DDINTER_OFFICIAL_INTERACTIONS: DrugInteraction[] = [
  {
    "id": "ddinter-int-atorvastatin-fenofibrate",
    "drugAId": "drug-atorvastatin",
    "drugBId": "drug-fenofibrate",
    "drugAName": "Atorvastatin",
    "drugBName": "Fenofibrate",
    "severity": "Major",
    "mechanism": "Inhibisi kompetitif glukuronidasi asam statin dan inhibisi transporter hepar OATP1B1 oleh fenofibrat berpadu dengan toksisitas miosit aditif (DDInter PK/PD).",
    "clinicalOutcome": "Peningkatan kadar atorvastatin plasma dan risiko akumulasi miosit, memicu mialgia berat, peningkatan enzim serum Creatine Kinase (CK), dan miopati hingga rabdomiolisis.",
    "management": "Gunakan kombinasi hanya pada pasien dislipidemia campuran berat yang tidak terkontrol monoterapi. Gunakan dosis atorvastatin terendah yang efektif (10-20 mg/hari). Pantau kadar CK dan fungsi ginjal; hentikan segera jika muncul nyeri otot hebat atau urin gelap.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)",
    "ddinterPairId": "DDInter-PAIR-010001",
    "mechanismCategory": "Metabolism",
    "alternativeOptions": [
      "Ezetimibe",
      "Omega-3 Fatty Acids"
    ],
    "ddinterOriginalText": "Coadministration of atorvastatin and fenofibrate or fenofibric acid may increase the risk of severe myopathy and rhabdomyolysis due to pharmacokinetic and pharmacodynamic interactions.",
    "ddinterOriginalManagement": "Caution is advised if atorvastatin is coadministered with fibrates, particularly fenofibrate. The lowest effective dose of atorvastatin should be used, and patients monitored closely for muscle pain, tenderness, weakness, and dark urine. Creatine kinase and renal function should be evaluated periodically.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2239"
    ],
    "alternativeOptionsA": [
      "Rosuvastatin",
      "Pravastatin",
      "Pitavastatin",
      "Ezetimibe"
    ],
    "alternativeOptionsB": [
      "Ezetimibe",
      "Omega-3 Acid Ethyl Esters"
    ]
  },
  {
    "id": "ddinter-int-pravastatin-clarithromycin",
    "drugAId": "drug-pravastatin",
    "drugBId": "drug-clarithromycin",
    "drugAName": "Pravastatin",
    "drugBName": "Clarithromycin",
    "severity": "Moderate",
    "mechanism": "Klaritromisin menghambat kuat transporter serapan hepar OATP1B1 dan OATP1B3 serta pompa efluks P-glikoprotein, melipatgandakan bioavailabilitas pravastatin sebesar >100%.",
    "clinicalOutcome": "Lonjakan tajam paparan sistemik pravastatin (AUC meningkat lebih dari 2 kali lipat), memicu miopati akut, kelemahan otot proksimal berat, dan risiko rabdomiolisis sekunder.",
    "management": "HINDARI PENGGUNAAN BERSAMAAN (DDInter Major & FDA Safety Advisory). Tahan pemberian pravastatin untuk sementara waktu selama durasi pengobatan antibiotik klaritromisin, atau gunakan makrolida non-inhibitor seperti Azithromycin.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)",
    "ddinterPairId": "DDInter-PAIR-010002",
    "mechanismCategory": "Distribution",
    "alternativeOptions": [
      "Azithromycin",
      "Amoxicillin"
    ],
    "ddinterOriginalText": "Clarithromycin may significantly increase the plasma concentrations of pravastatin via inhibition of OATP1B1/OATP1B3 hepatic uptake transporters and P-glycoprotein efflux transport.",
    "ddinterOriginalManagement": "Consider temporarily withholding pravastatin during therapy with clarithromycin, or substitute with an alternative macrolide that does not interact (e.g., azithromycin). If concomitant use is unavoidable, monitor patients for muscle toxicity.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1751"
    ],
    "alternativeOptionsA": [
      "Rosuvastatin",
      "Pitavastatin",
      "Ezetimibe"
    ],
    "alternativeOptionsB": [
      "Azithromycin",
      "Cefixime",
      "Amoxicillin-Clavulanate"
    ]
  },
  {
    "id": "ddinter-int-diltiazem-carbamazepine",
    "drugAId": "drug-diltiazem",
    "drugBId": "drug-carbamazepine",
    "drugAName": "Diltiazem",
    "drugBName": "Carbamazepine",
    "severity": "Major",
    "mechanism": "Diltiazem menghambat isoenzim hepar CYP3A4 yang mengkatalisis epoksidasi karbamazepin, menurunkan klirens karbamazepin sebesar 40-50%.",
    "clinicalOutcome": "Kadar serum karbamazepin melonjak drastis ke rentang toksik (>12-15 mcg/mL), memicu INTOKSIKASI KARBAMAZEPIN AKUT: ataksia serebelar, nistagmus, diplopia, pusing berputar berat, somnolen, mual muntah, dan blok konduksi AV.",
    "management": "TURUNKAN DOSIS KARBAMAZEPIN SEBESAR 40-50% saat memulai diltiazem (DDInter Major). Pantau kadar karbamazepin serum dan evaluasi tanda klinis neurotoksisitas. Pertimbangkan antihipertensi alternatif non-inhibitor CYP3A4.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)",
    "ddinterPairId": "DDInter-PAIR-010003",
    "mechanismCategory": "Metabolism",
    "alternativeOptions": [
      "Amlodipine",
      "Levetiracetam"
    ],
    "ddinterOriginalText": "Coadministration with diltiazem may significantly increase the plasma concentrations of carbamazepine and its active metabolite due to inhibition of CYP450 3A4 metabolism.",
    "ddinterOriginalManagement": "A 40% to 50% reduction in the carbamazepine dosage may be required when diltiazem is started. Serum carbamazepine concentrations and signs of neurotoxicity (ataxia, dizziness, diplopia, somnolence) should be monitored closely.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1514"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Levetiracetam",
      "Lamotrigine",
      "Lacosamide",
      "Gabapentin"
    ]
  },
  {
    "id": "ddinter-int-verapamil-carbamazepine",
    "drugAId": "drug-verapamil",
    "drugBId": "drug-carbamazepine",
    "drugAName": "Verapamil",
    "drugBName": "Carbamazepine",
    "severity": "Major",
    "mechanism": "Inhibisi poten CYP3A4 oleh verapamil memblokade jalur eliminasi utama karbamazepin, menggandakan konsentrasi steady-state karbamazepin dalam kurun waktu 48 jam.",
    "clinicalOutcome": "Toksisitas karbamazepin parah dengan ataksia berat, kebingungan mental akut, bradikardia simtomatik, hipotensi, dan risiko depresi sistem saraf pusat mendalam.",
    "management": "HINDARI KOMBINASI jika memungkinkan (DDInter Major). Bila diperlukan, lakukan pemantauan kadar serum karbamazepin harian dan turunkan dosis karbamazepin sebesar 50%.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)",
    "ddinterPairId": "DDInter-PAIR-010004",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Verapamil inhibits the CYP450 3A4-mediated metabolism of carbamazepine, leading to substantially increased plasma concentrations and risk of carbamazepine neurotoxicity.",
    "ddinterOriginalManagement": "Reduce carbamazepine dosage by 40% to 50% when initiating verapamil. Monitor serum carbamazepine levels closely and observe patient for symptoms of toxicity including dizziness, ataxia, nausea, and blurred vision.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1514"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Levetiracetam",
      "Lamotrigine",
      "Lacosamide",
      "Gabapentin"
    ]
  },
  {
    "id": "ddinter-int-diltiazem-cyclosporine",
    "drugAId": "drug-diltiazem",
    "drugBId": "drug-cyclosporine",
    "drugAName": "Diltiazem",
    "drugBName": "Cyclosporine",
    "severity": "Moderate",
    "mechanism": "Diltiazem menghambat isoenzim CYP3A4 usus dan hati serta glikoprotein-P, mengurangi klirens metabolik eliminasi siklosporin.",
    "clinicalOutcome": "Kadar palung darah utuh (whole blood trough levels) siklosporin meningkat sebesar 30-50%, memicu vasokonstriksi mikrovaskular ginjal, NEFROTOKSISITAS AKUT, hipertensi refrakter, dan hiperkalemia.",
    "management": "Lakukan Therapeutic Drug Monitoring (TDM) kadar siklosporin. Antisipasi kebutuhan penurunan dosis siklosporin sebesar 25-40% saat diltiazem ditambahkan (kombinasi ini kadang dimanfaatkan secara sengaja untuk menghemat biaya siklosporin dengan pengawasan ketat).",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)",
    "ddinterPairId": "DDInter-PAIR-010005",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Diltiazem inhibits the CYP450 3A4 metabolism and P-glycoprotein efflux of cyclosporine, increasing cyclosporine blood concentrations and nephrotoxicity risk.",
    "ddinterOriginalManagement": "Monitor cyclosporine whole-blood concentrations and renal function closely when diltiazem is initiated, modified, or discontinued. A dosage reduction of cyclosporine by 20% to 50% is commonly required.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2533"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-int-amlodipine-itraconazole",
    "drugAId": "drug-amlodipine",
    "drugBId": "drug-itraconazole",
    "drugAName": "Amlodipine",
    "drugBName": "Itraconazole",
    "severity": "Major",
    "mechanism": "Itrakonazol adalah inhibitor kuat CYP3A4 yang memetabolisme amlodipin, meningkatkan AUC amlodipin hingga 2-3 kali lipat.",
    "clinicalOutcome": "Vasodilatasi arterial perifer berlebihan memicu edema perifer masif (pembengkakan ekstremitas bawah), HIPOTENSI BERAT, pusing ortostatik, pingsan/sinkop, dan refleks takikardia.",
    "management": "Pantau tekanan darah secara ketat (DDInter Major). Turunkan dosis amlodipine hingga 50% selama masa terapi antijamur itraconazole dan sesuaikan kembali dosis setelah itraconazole selesai.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)",
    "ddinterPairId": "DDInter-PAIR-010006",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Itraconazole is a potent inhibitor of CYP450 3A4 and P-glycoprotein, significantly reducing the clearance and increasing systemic exposure to amlodipine, leading to severe vasodilation and edema.",
    "ddinterOriginalManagement": "Amlodipine dose reduction by up to 50% may be necessary when coadministered with itraconazole. Monitor blood pressure and observe for peripheral edema, severe hypotension, and reflex tachycardia.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2370"
    ],
    "alternativeOptionsA": [
      "Candesartan",
      "Valsartan",
      "Bisoprolol"
    ],
    "alternativeOptionsB": [
      "Fluconazole",
      "Terbinafine",
      "Nystatin",
      "Micafungin"
    ]
  },
  {
    "id": "ddinter-int-carvedilol-digoxin",
    "drugAId": "drug-carvedilol",
    "drugBId": "drug-digoxin",
    "drugAName": "Carvedilol",
    "drugBName": "Digoxin",
    "severity": "Moderate",
    "mechanism": "Carvedilol menghambat transporter P-glikoprotein di tubulus ginjal (meningkatkan konsentrasi plasma digoksin sebesar 15-20%) berpadu dengan efek kronotropik dan dromotropik negatif aditif pada nodus AV (PD).",
    "clinicalOutcome": "BRADIKARDIA EKSTREM (<40 bpm), blok AV derajat II atau III (total AV block), henti sinus, dan peningkatan risiko aritmia intoksikasi digitalis.",
    "management": "Pantau denyut nadi harian, rekam EKG, dan periksa kadar serum digoksin saat memulai atau menaikkan dosis carvedilol. Sesuaikan dosis digoksin bila kadar melebihi 0.8-1.2 ng/mL pada pasien gagal jantung.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)",
    "ddinterPairId": "DDInter-PAIR-010007",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration of carvedilol and digoxin may produce additive prolongation of AV conduction, increasing the risk of severe bradycardia and heart block. Carvedilol also inhibits P-glycoprotein, increasing digoxin plasma concentrations.",
    "ddinterOriginalManagement": "Monitor heart rate, ECG, and serum digoxin concentrations when carvedilol is initiated or titrated. Adjust digoxin dose as appropriate to avoid toxicity and severe bradyarrhythmias.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4572"
    ],
    "alternativeOptionsA": [
      "Amlodipine",
      "Candesartan",
      "Valsartan"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-int-carvedilol-amiodarone",
    "drugAId": "drug-carvedilol",
    "drugBId": "drug-amiodarone",
    "drugAName": "Carvedilol",
    "drugBName": "Amiodarone",
    "severity": "Moderate",
    "mechanism": "Efek aditif depresi nodus SA dan nodus AV miokardium berpadu dengan penghambatan parsial metabolisme carvedilol via CYP2C9/2D6 oleh amiodaron.",
    "clinicalOutcome": "Bradikardia simtomatik parah, asistol henti jantung, sinkop, kolaps hemodinamik, dan eksaserbasi dekompensasi gagal jantung akut.",
    "management": "HINDARI kombinasi kecuali di bawah pengawasan dokter spesialis jantung elektrofisiologis dengan fasilitas pacu jantung (pacemaker). Lakukan titrasi dosis carvedilol mulai dari dosis terkecil (3.125 mg) dengan pemantauan EKG kontinu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)",
    "ddinterPairId": "DDInter-PAIR-010008",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Concomitant use of carvedilol and amiodarone can result in profound additive negative chronotropic and inotropic effects, leading to severe bradycardia, sinus arrest, or AV block.",
    "ddinterOriginalManagement": "Avoid combination or use with extreme caution. Conduct baseline and serial ECG monitoring. Titrate doses slowly and instruct patients to report dizziness, lightheadedness, fatigue, or syncope.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #160"
    ],
    "alternativeOptionsA": [
      "Amlodipine",
      "Candesartan",
      "Valsartan"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-int-amiodarone-flecainide",
    "drugAId": "drug-amiodarone",
    "drugBId": "drug-flecainide",
    "drugAName": "Amiodarone",
    "drugBName": "Flecainide",
    "severity": "Major",
    "mechanism": "Amiodarone menghambat isoenzim sitokrom hepar CYP2D6 yang memetabolisme flecainide, melipatgandakan kadar plasma flecainide sebesar >50-100%.",
    "clinicalOutcome": "ARITMIA VENTRIKEL PROARITMIK MEMATIKAN: Pelebaran kompleks QRS yang ekstrem, takikardia ventrikel polimorfik, blok konduksi intraventrikular berat, dan henti jantung.",
    "management": "TURUNKAN DOSIS FLECAINIDE SEBESAR 50% saat menginisiasi terapi amiodarone (DDInter Major). Pantau interval QRS dan QTc pada EKG serial secara berkala.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)",
    "ddinterPairId": "DDInter-PAIR-010009",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Amiodarone inhibits the CYP450 2D6-mediated elimination of flecainide and has additive electrophysiologic cardiac effects, significantly increasing flecainide serum levels and proarrhythmic risk.",
    "ddinterOriginalManagement": "Reduce flecainide dosage by 50% when adding amiodarone. Frequently monitor plasma flecainide concentrations and ECG intervals (QRS duration and QTc), as fatal ventricular arrhythmias may develop.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2846"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-int-amiodarone-diltiazem",
    "drugAId": "drug-amiodarone",
    "drugBId": "drug-diltiazem",
    "drugAName": "Amiodarone",
    "drugBName": "Diltiazem",
    "severity": "Major",
    "mechanism": "Penekanan simultan otomatisitas nodus sinoatrial dan perlambatan konduksi nodus atrioventrikular miokardium (efek dromotropik/kronotropik negatif aditif), diperkuat inhibisi CYP3A4 oleh diltiazem.",
    "clinicalOutcome": "Bradikardia berat simtomatik, Blok AV Derajat III Total, kolaps kardiovaskular, asistol henti jantung mendadak, dan perburukan gagal jantung kongestif.",
    "management": "HINDARI PENGGUNAAN BERSAMAAN (DDInter Major). Gunakan alternatif antiaritmia atau antihipertensi yang tidak menekan nodus AV secara ganda. Jika mutlak diperlukan, pantau dengan telemetri EKG kontinu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)",
    "ddinterPairId": "DDInter-PAIR-010010",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Coadministration of amiodarone and diltiazem produces additive depressant effects on cardiac conduction, sinus node automaticity, and myocardial contractility.",
    "ddinterOriginalManagement": "Avoid combination if possible, especially in patients with preexisting conduction disease or heart failure. If used together, monitor cardiac rhythm and hemodynamic status closely.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4333"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-int-digoxin-atorvastatin",
    "drugAId": "drug-digoxin",
    "drugBId": "drug-atorvastatin",
    "drugAName": "Digoxin",
    "drugBName": "Atorvastatin",
    "severity": "Moderate",
    "mechanism": "Atorvastatin menghambat secara moderat transporter P-glikoprotein ginjal yang mengekskresikan digoksin, meningkatkan konsentrasi puncak Cmax digoksin steady-state sekitar 15-20%.",
    "clinicalOutcome": "Peningkatan kadar digoksin darah ke batas toksik pada pasien lansia atau gangguan fungsi ginjal, memicu mual, anoreksia, gangguan penglihatan warna (halo kuning-hijau), dan aritmia digitalis.",
    "management": "Pantau kadar serum digoksin serial dan perhatikan tanda intoksikasi digitalis saat memulai atau menaikkan dosis atorvastatin (DDInter Moderate).",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-010011",
    "mechanismCategory": "Absorption",
    "ddinterOriginalText": "Atorvastatin may increase steady-state plasma digoxin concentrations by approximately 20%, likely through mild inhibition of P-glycoprotein-mediated renal or biliary transport.",
    "ddinterOriginalManagement": "Monitor serum digoxin concentrations and observe patients for signs of digitalis toxicity (nausea, anorexia, visual disturbances, bradycardia) when atorvastatin is initiated or adjusted.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1489"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Rosuvastatin",
      "Pravastatin",
      "Pitavastatin",
      "Ezetimibe"
    ]
  },
  {
    "id": "ddinter-int-spironolactone-lisinopril",
    "drugAId": "drug-spironolactone",
    "drugBId": "drug-lisinopril",
    "drugAName": "Spironolactone",
    "drugBName": "Lisinopril",
    "severity": "Major",
    "mechanism": "Blokade aditif ganda pada kaskade RAAS: lisinopril menurunkan sekresi aldosteron korteks adrenal sementara spironolactone memblokade reseptor mineralokortikoid di tubulus distal ginjal.",
    "clinicalOutcome": "Penekanan ekskresi kalium ginjal drastis memicu HIPERKALEMIA BERAT MENGANCAM NYAWA (K+ > 6.0-7.0 mEq/L), aritmia ventrikel fatal, asistol, dan gagal ginjal akut.",
    "management": "Dosis spironolactone DIBATASI MAKSIMAL 25 mg/hari pada pasien yang menerima terapi kombinasi gagal jantung (studi RALES). Pantau kadar kalium serum dan kreatinin pada hari ke-3, minggu ke-1, minggu ke-4, dan setiap 3 bulan. Hindari suplemen kalium.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)",
    "ddinterPairId": "DDInter-PAIR-010012",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Concomitant use of angiotensin converting enzyme (ACE) inhibitors and potassium-sparing diuretics may increase the risk of hyperkalemia. Inhibition of ACE results in decreased aldosterone secretion, which can lead to increases in serum potassium that may be additive with that induced by potassium-sparing diuretics. ACE inhibitors may also cause deterioration of renal function in patients with chronic heart failure, and the risk is increased if they are sodium-depleted or dehydrated after excessive diuresis.",
    "ddinterOriginalManagement": "Caution is advised if ACE inhibitors are used with potassium-sparing diuretics, particularly in patients with renal impairment, diabetes, old age, worsening heart failure, and/or a risk for dehydration. Serum potassium and renal function should be checked regularly, and potassium supplementation should generally be avoided unless it is closely monitored. Patients should be given dietary counseling and advised to seek medical attention if they experience signs and symptoms of hyperkalemia such as weakness, listlessness, confusion, tingling of the extremities, and irregular heartbeat.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #599"
    ],
    "alternativeOptionsA": [
      "Indapamide",
      "Torsemide",
      "Eplerenone"
    ],
    "alternativeOptionsB": [
      "Candesartan",
      "Valsartan",
      "Telmisartan",
      "Amlodipine"
    ]
  },
  {
    "id": "ddinter-int-spironolactone-valsartan",
    "drugAId": "drug-spironolactone",
    "drugBId": "drug-valsartan",
    "drugAName": "Spironolactone",
    "drugBName": "Valsartan",
    "severity": "Major",
    "mechanism": "Blokade ganda reseptor angiotensin AT1 (valsartan) dan reseptor aldosteron (spironolactone) melumpuhkan ekskresi kalium ke dalam lumen tubulus ginjal.",
    "clinicalOutcome": "Hiperkalemia berat (>6.0 mEq/L), kelemahan neuromuskular flaksid, aritmia kardiak mematikan, dan penurunan filtrasi glomerulus ginjal.",
    "management": "Pantau kadar kalium dan kreatinin serum secara berkala. Edukasi pasien untuk menghindari makanan kaya kalium tinggi (pisang berlebih, pengganti garam rendah natrium KCl) dan suplemen kalium.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)",
    "ddinterPairId": "DDInter-PAIR-010013",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Coadministration of an angiotensin II receptor antagonist (ARB) with a potassium-sparing diuretic can lead to significant additive retention of serum potassium and precipitate severe hyperkalemia.",
    "ddinterOriginalManagement": "Monitor serum potassium and renal function periodically. Spironolactone doses should be restricted (typically <=25 mg daily) when combined with ARBs in heart failure, and potassium supplements avoided.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #632"
    ],
    "alternativeOptionsA": [
      "Indapamide",
      "Torsemide",
      "Eplerenone"
    ],
    "alternativeOptionsB": [
      "Amlodipine",
      "Bisoprolol",
      "Diltiazem"
    ]
  },
  {
    "id": "ddinter-int-metformin-cimetidine",
    "drugAId": "drug-metformin",
    "drugBId": "drug-cimetidine",
    "drugAName": "Metformin",
    "drugBName": "Cimetidine",
    "severity": "Moderate",
    "mechanism": "Cimetidine berkompetisi dan menghambat transporter kation organik renal (OCT2 dan MATE1) di membran tubulus proksimal ginjal yang mengekskresikan metformin aktif.",
    "clinicalOutcome": "Klirens renal metformin menurun hingga 27% dan AUC metformin meningkat sebesar 50%, memicu lonjakan risiko ASIDOSIS LAKTAT FATAL yang mengancam jiwa.",
    "management": "HINDARI PENGGUNAAN CIMETIDINE pada pasien pengguna metformin (DDInter Major & FDA Warning). Gunakan antagonis H2 alternatif (Famotidine) atau PPI (Pantoprazole) yang tidak menghambat sekresi tubular OCT2 renal.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)",
    "ddinterPairId": "DDInter-PAIR-010014",
    "mechanismCategory": "Excretion",
    "alternativeOptions": [
      "Famotidine",
      "Ranitidine",
      "Omeprazole"
    ],
    "ddinterOriginalText": "Cimetidine competes with metformin for active renal tubular secretion via organic cation transporters (OCT2/MATE1), increasing metformin plasma concentrations and AUC by 40% to 60%.",
    "ddinterOriginalManagement": "Consider alternative H2-receptor antagonists (e.g., famotidine) or PPIs that do not inhibit OCT2. If cimetidine is necessary, reduce metformin dosage and monitor patients closely for signs of lactic acidosis.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #225"
    ],
    "alternativeOptionsA": [
      "Dapagliflozin",
      "Empagliflozin",
      "Linagliptin",
      "Sitagliptin"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-int-metformin-furosemide",
    "drugAId": "drug-metformin",
    "drugBId": "drug-furosemide",
    "drugAName": "Metformin",
    "drugBName": "Furosemide",
    "severity": "Moderate",
    "mechanism": "Furosemide meningkatkan konsentrasi puncak plasma (Cmax) metformin sebesar 22% dan AUC sebesar 15%, sementara deplesi cairan oleh diuretik dapat memicu azotemia prerenal.",
    "clinicalOutcome": "Peningkatan paparan sistemik metformin dan risiko perburukan fungsi ginjal yang dapat memicu akumulasi metformin sekunder.",
    "management": "Pantau fungsi ginjal (eGFR/Serum Creatinine) dan status hidrasi pasien secara berkala saat kedua obat digunakan bersamaan (DDInter Moderate).",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-010015",
    "mechanismCategory": "Excretion",
    "alternativeOptions": [
      "Torsemide",
      "Hydrochlorothiazide"
    ],
    "ddinterOriginalText": "Furosemide increases metformin plasma peak concentration and AUC without significantly altering metformin renal clearance, while metformin decreases furosemide AUC and peak levels.",
    "ddinterOriginalManagement": "Monitor glycemic control and renal function when furosemide and metformin are coadministered. Dosage adjustments of metformin may be required if fluid depletion or renal alteration occurs.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4356"
    ],
    "alternativeOptionsA": [
      "Dapagliflozin",
      "Empagliflozin",
      "Linagliptin",
      "Sitagliptin"
    ],
    "alternativeOptionsB": [
      "Indapamide",
      "Torsemide",
      "Eplerenone"
    ]
  },
  {
    "id": "ddinter-int-gliclazide-fluconazole",
    "drugAId": "drug-gliclazide",
    "drugBId": "drug-fluconazole",
    "drugAName": "Gliclazide",
    "drugBName": "Fluconazole",
    "severity": "Major",
    "mechanism": "Fluconazole adalah inhibitor poten isoenzim sitokrom hepar CYP2C9 yang memetabolisme gliclazide menjadi metabolit inaktif.",
    "clinicalOutcome": "Waktu paruh eliminasi gliclazide memanjang tajam disertai peningkatan AUC plasma, memicu HIPOGLIKEMIA BERAT DAN BERKEPANJANGAN (GDS < 40-50 mg/dL), kejang, dan koma hipoglikemia.",
    "management": "HINDARI atau TURUNKAN DOSIS GLICLAZIDE SEBESAR 50% selama terapi fluconazole (DDInter Major). Edukasi pasien mengenai tanda bahaya hipoglikemia dan sediakan sumber glukosa oral siap pakai.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)",
    "ddinterPairId": "DDInter-PAIR-010016",
    "ddinterOriginalManagement": "Avoid combination or reduce gliclazide dosage by 50% during fluconazole therapy. Instruct patients to monitor blood glucose frequently and educate on recognizing and treating hypoglycemia.",
    "ddinterOriginalText": "Fluconazole is a potent inhibitor of CYP450 2C9, the primary enzyme responsible for the metabolic clearance of sulfonylureas including gliclazide, which can precipitate profound hypoglycemia."
  },
  {
    "id": "ddinter-int-acarbose-digoxin",
    "drugAId": "drug-acarbose",
    "drugBId": "drug-digoxin",
    "drugAName": "Acarbose",
    "drugBName": "Digoxin",
    "severity": "Moderate",
    "mechanism": "Acarbose menghambat enzim alfa-glukosidase di brush border usus halus, mengubah motilitas saluran cerna dan mempercepat waktu transit bolus usus, menurunkan absorpsi pasif digoksin.",
    "clinicalOutcome": "Bioavailabilitas dan kadar serum digoksin tereduksi hingga 20-30%, menyebabkan penurunan kadar digoksin ke tingkat subterapeutik dan memicu kekambuhan takiaritmia atrial atau dekompensasi gagal jantung.",
    "management": "Pantau kadar digoksin serum saat memulai atau menghentikan terapi akarbosa. Sesuaikan dosis digoksin bila diperlukan (DDInter Moderate).",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-010017",
    "mechanismCategory": "Absorption",
    "ddinterOriginalText": "Acarbose may reduce the bioavailability and serum concentrations of oral digoxin by altering gastrointestinal transit time or gut absorption.",
    "ddinterOriginalManagement": "Monitor serum digoxin concentrations when acarbose is initiated, adjusted, or discontinued. Digoxin dose adjustment may be necessary to maintain therapeutic cardiac efficacy.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #883"
    ],
    "alternativeOptionsA": [
      "Metformin",
      "Linagliptin",
      "Vildagliptin",
      "Dapagliflozin"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-int-acarbose-metformin",
    "drugAId": "drug-acarbose",
    "drugBId": "drug-metformin",
    "drugAName": "Acarbose",
    "drugBName": "Metformin",
    "severity": "Minor",
    "mechanism": "Akarbosa menunda absorpsi metformin di saluran cerna dan menurunkan bioavailabilitasnya. Puncak konsentrasi serum (Cmax) dan AUC metformin berkurang sekitar 35% akibat keterlambatan absorpsi usus halus.",
    "clinicalOutcome": "Potensi sedikit penundaan onset kerja metformin atau penurunan paparan sistemik metformin, namun biasanya tidak memerlukan modifikasi dosis terapi secara drastis.",
    "management": "Kombinasi umumnya aman dan terbukti klinis. Tidak disarankan mengubah rejimen terapi secara rutin, namun klinisi/apoteker dianjurkan memantau kontrol glikemik secara berkala untuk memastikan respons terapi metformin tetap optimal. Minum akarbosa bersama suapan pertama makan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)",
    "ddinterPairId": "DDInter-PAIR-010450",
    "mechanismCategory": "Absorption",
    "alternativeOptions": [
      "Linagliptin",
      "Empagliflozin",
      "Vildagliptin"
    ],
    "ddinterOriginalText": "Concurrent administration of acarbose with metformin may decrease metformin bioavailability and systemic exposure, and may produce additive gastrointestinal adverse effects.",
    "ddinterOriginalManagement": "Monitor glycemic control and observe for gastrointestinal intolerability (diarrhea, abdominal cramps). Adjust dosages as clinically required.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2689"
    ],
    "alternativeOptionsA": [
      "Metformin",
      "Linagliptin",
      "Vildagliptin",
      "Dapagliflozin"
    ],
    "alternativeOptionsB": [
      "Dapagliflozin",
      "Empagliflozin",
      "Linagliptin",
      "Sitagliptin"
    ]
  },
  {
    "id": "ddinter-int-levothyroxine-aluminium-hydroxide",
    "drugAId": "drug-levothyroxine",
    "drugBId": "drug-aluminium-hydroxide",
    "drugAName": "Levothyroxine",
    "drugBName": "Aluminium Hydroxide (Antasida)",
    "severity": "Moderate",
    "mechanism": "Garam aluminium hidroksida mengadsorpsi dan mengikat molekul tiroksin (T4) secara fisik di lumen asam lambung, membentuk endapan kompleks yang tidak dapat diserap mukosa usus.",
    "clinicalOutcome": "Penurunan tajam absorpsi levothyroxine, peningkatan kadar Thyroid Stimulating Hormone (TSH), dan timbulnya kembali gejala hipotiroidisme klinis (kelelahan, kenaikan berat badan, bradikardia).",
    "management": "PISAHKAN WAKTU KONSUMSI MINIMAL 4 JAM: Minum tablet Levothyroxine pagi hari saat perut kosong minimal 4 jam sebelum mengonsumsi antasida aluminium hidroksida (DDInter Moderate).",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)",
    "ddinterPairId": "DDInter-PAIR-010018",
    "ddinterOriginalManagement": "Administer levothyroxine at least 4 hours before or after aluminum hydroxide antacids. Monitor serum TSH levels if antacid therapy is started or stopped.",
    "ddinterOriginalText": "Aluminum hydroxide and other multivalent cation-containing antacids bind levothyroxine in the gastrointestinal tract, significantly decreasing hormone absorption and increasing serum TSH."
  },
  {
    "id": "ddinter-int-levothyroxine-sertraline",
    "drugAId": "drug-levothyroxine",
    "drugBId": "drug-sertraline",
    "drugAName": "Levothyroxine",
    "drugBName": "Sertraline",
    "severity": "Moderate",
    "mechanism": "Sertraline menginduksi peningkatan klirens non-deiodinatif hepar hormon tiroid atau meningkatkan fraksi tiroksin terikat protein plasma.",
    "clinicalOutcome": "Penurunan kadar tiroksin bebas (Free T4), peningkatan kompensatori kadar TSH serum, dan eksaserbasi gejala klinis hipotiroidisme.",
    "management": "Pantau kadar TSH serum setelah inisiasi atau perubahan dosis sertraline. Antisipasi kebutuhan peningkatan dosis levothyroxine sebesar 25-50 mcg/hari bila nilai TSH meningkat (DDInter Moderate).",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-010019",
    "ddinterOriginalManagement": "Monitor serum TSH levels when sertraline is initiated or titrated in patients receiving levothyroxine, and adjust thyroid hormone replacement dosage accordingly.",
    "ddinterOriginalText": "Sertraline may decrease the therapeutic efficacy of levothyroxine by altering thyroid hormone binding proteins or hepatic metabolism, requiring increased levothyroxine requirements."
  },
  {
    "id": "ddinter-int-levothyroxine-carbamazepine",
    "drugAId": "drug-levothyroxine",
    "drugBId": "drug-carbamazepine",
    "drugAName": "Levothyroxine",
    "drugBName": "Carbamazepine",
    "severity": "Moderate",
    "mechanism": "Karbamazepin adalah penginduksi kuat enzim glukuronosiltransferase (UGT) dan sitokrom hepar, mempercepat metabolisme konjugasi dan ekskresi biliar hormon tiroid T4 dan T3.",
    "clinicalOutcome": "Kadar T4 total dan T4 bebas serum anjlok hingga 20-40%, memicu lonjakan TSH dan kegagalan substitusi hormon tiroid.",
    "management": "Periksa panel fungsi tiroid (TSH dan Free T4) secara berkala pada pasien epilepsi pengguna karbamazepin. Tingkatkan dosis levothyroxine bila ditemukan peningkatan TSH (DDInter Moderate).",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)",
    "ddinterPairId": "DDInter-PAIR-010020",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Carbamazepine induces hepatic microsomal enzymes (CYP450 and UGT), accelerating the metabolic clearance and biliary elimination of levothyroxine.",
    "ddinterOriginalManagement": "Thyroid function tests (TSH, free T4) should be checked following initiation or cessation of carbamazepine, and levothyroxine dosage increased by 25% to 50% if clinically indicated.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #380"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Levetiracetam",
      "Lamotrigine",
      "Lacosamide",
      "Gabapentin"
    ]
  },
  {
    "id": "ddinter-int-phenytoin-carbamazepine",
    "drugAId": "drug-phenytoin",
    "drugBId": "drug-carbamazepine",
    "drugAName": "Phenytoin",
    "drugBName": "Carbamazepine",
    "severity": "Moderate",
    "mechanism": "Induksi metabolik timbal balik: kedua obat saling menginduksi isoenzim CYP3A4 dan CYP2C9 hepar, mempercepat degradasi satu sama lain secara tidak terprediksi, disertai potensi akumulasi metabolit aktif toksik carbamazepine-10,11-epoxide.",
    "clinicalOutcome": "Fluktuasi liar kadar plasma kedua antiepilepsi, risiko kegagalan kontrol kejang (breakthrough seizures) atau sebaliknya timbul toksisitas serebelar berat (nistagmus, ataksia hebat, letargi).",
    "management": "Lakukan pemantauan TDM berkala kadar serum fenitoin dan karbamazepin (DDInter Major). Sesuaikan dosis secara individual berdasarkan pemantauan kadar terapeutik dan evaluasi klinis kejang.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)",
    "ddinterPairId": "DDInter-PAIR-010021",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Phenytoin and carbamazepine mutually induce each other's hepatic microsomal metabolism via CYP450 3A4 and 2C9/2C19, resulting in unpredictable and often decreased serum levels of both drugs.",
    "ddinterOriginalManagement": "Monitor serum levels of both carbamazepine and phenytoin closely, particularly during dosage changes. Adjust dosages based on therapeutic drug monitoring and clinical seizure control.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3978"
    ],
    "alternativeOptionsA": [
      "Levetiracetam",
      "Lamotrigine",
      "Lacosamide",
      "Gabapentin"
    ],
    "alternativeOptionsB": [
      "Levetiracetam",
      "Lamotrigine",
      "Lacosamide",
      "Gabapentin"
    ]
  },
  {
    "id": "ddinter-int-phenytoin-diazepam",
    "drugAId": "drug-phenytoin",
    "drugBId": "drug-diazepam",
    "drugAName": "Phenytoin",
    "drugBName": "Diazepam",
    "severity": "Moderate",
    "mechanism": "Diazepam menghambat secara kompetitif isoenzim hepar CYP2C19 serta mendesak ikatan protein plasma fenitoin, meningkatkan fraksi bebas fenitoin dalam darah.",
    "clinicalOutcome": "Peningkatan kadar bebas fenitoin aktif secara mendadak, memicu gejala toksisitas neurologis sementara: ataksia, pusing melayang, diplopia, dan inkoordinasi motorik.",
    "management": "Pantau respons klinis pasien dan waspadai gejala toksisitas fenitoin saat benzodiazepin ditambahkan atau dihentikan (DDInter Moderate).",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-010022",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration of phenytoin and diazepam may alter the metabolism and protein binding of both agents, with variable reports of elevated or reduced serum phenytoin concentrations.",
    "ddinterOriginalManagement": "Monitor phenytoin plasma concentrations and observe for clinical signs of phenytoin toxicity (nystagmus, ataxia) or increased seizure frequency during diazepam co-therapy.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4392"
    ],
    "alternativeOptionsA": [
      "Levetiracetam",
      "Lamotrigine",
      "Lacosamide",
      "Gabapentin"
    ],
    "alternativeOptionsB": [
      "Buspirone",
      "Melatonin",
      "Hydroxyzine"
    ]
  },
  {
    "id": "ddinter-int-valproic-aspirin",
    "drugAId": "drug-valproic-acid",
    "drugBId": "drug-aspirin",
    "drugAName": "Valproic Acid",
    "drugBName": "Aspirin",
    "severity": "Moderate",
    "mechanism": "Salisilat mendesak asam valproat dari situs pengikatan albumin serum dan menghambat beta-oksidasi mitokondria asam valproat di hepar.",
    "clinicalOutcome": "Lonjakan fraksi bebas (unbound) asam valproat hingga 2-4 kali lipat, memicu ENSEFALOPATI VALPROAT AKUT, hiperamonemia berat, letargi, stupor, dan nekrosis hepatik toksik.",
    "management": "HINDARI PENGGUNAAN SALISILAT/ASPIRIN pada pasien yang menerima terapi asam valproat (DDInter Major). Gunakan Parasetamol untuk penanganan demam atau nyeri ringan pada anak dan dewasa pengguna valproat.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)",
    "ddinterPairId": "DDInter-PAIR-010023",
    "mechanismCategory": "Distribution",
    "ddinterOriginalText": "Salicylates displace valproate from plasma protein binding sites and inhibit valproic acid beta-oxidation metabolism, substantially increasing free, pharmacologically active valproate levels.",
    "ddinterOriginalManagement": "Avoid high-dose aspirin in patients receiving valproate. If coadministered, monitor free valproate serum concentrations and observe for valproate-induced hepatotoxicity, hyperammonemia, and sedation.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #292"
    ],
    "alternativeOptionsA": [
      "Levetiracetam",
      "Lamotrigine",
      "Lacosamide",
      "Gabapentin"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-int-valproic-phenobarbital",
    "drugAId": "drug-valproic-acid",
    "drugBId": "drug-phenobarbital",
    "drugAName": "Valproic Acid",
    "drugBName": "Phenobarbital",
    "severity": "Moderate",
    "mechanism": "Asam valproat menghambat glukuronidasi mikrosomal hepar dan oksidasi fenobarbital, menurunkan klirens eliminasi fenobarbital sebesar 30-50%.",
    "clinicalOutcome": "Akumulasi masif kadar fenobarbital serum hingga tingkat toksik mematikan, memicu SEDASI MENDALAM, ataksia parah, depresi pernapasan batang otak, koma, dan henti napas.",
    "management": "TURUNKAN DOSIS FENOBARBITAL SEBESAR 30-50% saat asam valproat ditambahkan ke regimen terapi (DDInter Major). Lakukan Therapeutic Drug Monitoring kadar fenobarbital secara ketat.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)",
    "ddinterPairId": "DDInter-PAIR-010024",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Valproic acid inhibits the hepatic metabolism of phenobarbital, increasing phenobarbital plasma concentrations by 30% to 50% and precipitating severe CNS depression and lethargy.",
    "ddinterOriginalManagement": "Monitor serum phenobarbital concentrations and reduce phenobarbital dosage by 30% to 50% when valproate is added. Watch for profound sedation, ataxia, and respiratory depression.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #272"
    ],
    "alternativeOptionsA": [
      "Levetiracetam",
      "Lamotrigine",
      "Lacosamide",
      "Gabapentin"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-int-carbamazepine-tramadol",
    "drugAId": "drug-carbamazepine",
    "drugBId": "drug-tramadol",
    "drugAName": "Carbamazepine",
    "drugBName": "Tramadol",
    "severity": "Moderate",
    "mechanism": "Karbamazepin menginduksi metabolisme hepatik CYP3A4 dan CYP2D6 tramadol (menurunkan AUC analgesik tramadol hingga 50%), berpadu dengan penurunan ambang kejang di korteks serebri oleh kedua obat.",
    "clinicalOutcome": "Penurunan efikasi analgesik secara dramatis (breakthrough pain) bersamaan dengan PENINGKATAN TAJAM RISIKO KEJANG BANGKITAN EPILEPTIK.",
    "management": "HINDARI KOMBINASI (DDInter Major). Gunakan analgesik non-opioid atau opioid alternatif yang tidak menurunkan ambang kejang dan metabolismenya tidak diinduksi secara kuat oleh karbamazepin.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)",
    "ddinterPairId": "DDInter-PAIR-010025",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Carbamazepine significantly increases the hepatic CYP450 3A4 metabolism of tramadol, markedly reducing tramadol analgesic efficacy and lowering the seizure threshold.",
    "ddinterOriginalManagement": "Concomitant use is generally not recommended. Carbamazepine reduces tramadol analgesia and both agents lower seizure threshold, increasing seizure risk. Consider alternative analgesics.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3477"
    ],
    "alternativeOptionsA": [
      "Levetiracetam",
      "Lamotrigine",
      "Lacosamide",
      "Gabapentin"
    ],
    "alternativeOptionsB": [
      "Paracetamol",
      "Gabapentin",
      "NSAID Topikal"
    ]
  },
  {
    "id": "ddinter-int-levetiracetam-carbamazepine",
    "drugAId": "drug-levetiracetam",
    "drugBId": "drug-carbamazepine",
    "drugAName": "Levetiracetam",
    "drugBName": "Carbamazepine",
    "severity": "Moderate",
    "mechanism": "Karbamazepin menginduksi sedikit peningkatan klirens enzimatik non-hepatik levetiracetam (menurunkan kadar levetiracetam serum ~20%) berpadu dengan efek sedasi SSP aditif.",
    "clinicalOutcome": "Potensi reduksi minor efikasi antikonvulsan disertai peningkatan keluhan pusing, mengantuk berat, dan gangguan koordinasi motorik.",
    "management": "Pantau frekuensi kejang dan evaluasi kebutuhan titrasi dosis levetiracetam bila pasien mengonsumsi karbamazepin secara kronis (DDInter Moderate).",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-010026",
    "ddinterOriginalManagement": "Monitor clinical seizure control and observe patients for increased central nervous system adverse effects (somnolence, coordination difficulties). Dosage adjustment is rarely required.",
    "ddinterOriginalText": "Carbamazepine may slightly increase the clearance of levetiracetam via enzyme induction, while concomitant use may enhance central nervous system side effects such as fatigue and dizziness."
  },
  {
    "id": "ddinter-int-pregabalin-oxycodone",
    "drugAId": "drug-pregabalin",
    "drugBId": "drug-oxycodone",
    "drugAName": "Pregabalin",
    "drugBName": "Oxycodone",
    "severity": "Major",
    "mechanism": "Efek depresan sinergis terhadap sistem saraf pusat dan pusat respirasi di medula oblongata via modulasi kanal kalsium prasinaps (pregabalin) dan reseptor mu-opioid (oksikodon).",
    "clinicalOutcome": "SEDASI MENDALAM, HIPOVENTILASI AKUT, DEPRESI PERNAPASAN FATAL, GANGGUAN KESADARAN BERAT, DAN KOMA.",
    "management": "Gunakan kombinasi dengan kewaspadaan maksimal hanya bila analgesik tunggal gagal (DDInter Major & FDA Boxed Warning). Mulai dengan dosis pregabalin dan oksikodon terendah, pantau saturasi SpO2 dan laju respirasi berkala.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)",
    "ddinterPairId": "DDInter-PAIR-010027",
    "mechanismCategory": "Absorption",
    "ddinterOriginalText": "Concomitant use of opioids like oxycodone with gabapentinoids like pregabalin results in profound synergistic central nervous system and respiratory depression.",
    "ddinterOriginalManagement": "Limit dosages and durations of both drugs to the minimum required. Monitor patients closely for respiratory depression, sedation, and hypotension. Warn patients against driving or hazardous tasks.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2450"
    ],
    "alternativeOptionsA": [
      "Levetiracetam",
      "Lamotrigine",
      "Lacosamide",
      "Gabapentin"
    ],
    "alternativeOptionsB": [
      "Paracetamol",
      "Gabapentin",
      "NSAID Topikal"
    ]
  },
  {
    "id": "ddinter-int-clozapine-fluvoxamine",
    "drugAId": "drug-clozapine",
    "drugBId": "drug-fluvoxamine",
    "drugAName": "Clozapine",
    "drugBName": "Fluvoxamine",
    "severity": "Moderate",
    "mechanism": "Fluvoxamine adalah inhibitor sangat kuat isoenzim sitokrom hepar CYP1A2 (dan inhibitor CYP2C19/CYP3A4) yang memetabolisme klozapin.",
    "clinicalOutcome": "Kadar klozapin plasma melonjak secara masif sebesar 5 hingga 10 KALI LIPAT, memicu INTOKSIKASI KLOZAPIN MEMATIKAN: kejang konvulsif grand mal, sedasi koma, miokarditis toksik, hipotensi kolaps kardiovaskular, dan peningkatan risiko agranulositosis fatal.",
    "management": "KONTRAINDIKASI MUTLAK BERSAMAAN (FDA Black Box Warning & DDInter Major). Jangan meresepkan fluvoxamine pada pasien yang menerima clozapine. Jika pasien membutuhkan antidepresan SSRI, pilih Sertraline atau Citalopram yang tidak menghambat CYP1A2.",
    "evidenceLevel": "Level 1 - Well Established (FDA Boxed Warning / DDInter)",
    "ddinterPairId": "DDInter-PAIR-010028",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Fluvoxamine is a potent inhibitor of CYP450 1A2, the primary enzyme metabolizing clozapine, causing a five- to tenfold increase in clozapine serum concentrations and severe toxicity.",
    "ddinterOriginalManagement": "Avoid combination whenever possible. If coadministration is essential, reduce clozapine dosage by 50% to 75% and monitor clozapine serum levels and ECG closely for seizures, sedation, and myocarditis.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1952"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-int-olanzapine-fluvoxamine",
    "drugAId": "drug-olanzapine",
    "drugBId": "drug-fluvoxamine",
    "drugAName": "Olanzapine",
    "drugBName": "Fluvoxamine",
    "severity": "Moderate",
    "mechanism": "Inhibisi kuat CYP1A2 oleh fluvoxamine menghambat klirens hepatik olanzapine, meningkatkan AUC olanzapine hingga >120% dan Cmax sebesar 84%.",
    "clinicalOutcome": "Somnolen mendalam, hipotensi ortostatik parah, sindrom antikolinergik sentral, dan perburukan gangguan metabolik akut.",
    "management": "HINDARI KOMBINASI atau TURUNKAN DOSIS OLANZAPINE SEBESAR 50% saat fluvoxamine diresepkan bersamaan (DDInter Major).",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)",
    "ddinterPairId": "DDInter-PAIR-010029",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Fluvoxamine potent inhibition of CYP450 1A2 and CYP2C19 significantly increases the AUC and peak plasma concentrations of olanzapine by approximately 100%.",
    "ddinterOriginalManagement": "A lower dosage of olanzapine should be considered when initiating fluvoxamine therapy. Monitor for enhanced olanzapine adverse effects including sedation, orthostatic hypotension, and weight gain.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3018"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-int-risperidone-fluoxetine",
    "drugAId": "drug-risperidone",
    "drugBId": "drug-fluoxetine",
    "drugAName": "Risperidone",
    "drugBName": "Fluoxetine",
    "severity": "Moderate",
    "mechanism": "Fluoksetin dan metabolit aktifnya norfluoksetin menghambat kuat isoenzim sitokrom hepar CYP2D6, memblokade 9-hidroksilasi risperidon.",
    "clinicalOutcome": "Konsentrasi plasma fraksi antipsikotik aktif meningkat tajam hingga 2-3 kali lipat, memicu SINDROM EKSTRAPIRAMIDAL BERAT (akatisia hebat, distonia akut, parkinsonisme rigid), hiperprolaktinemia, dan perpanjangan interval QTc.",
    "management": "REDUKSI DOSIS RISPERIDONE SEBESAR 50% saat memulai terapi fluoksetin (DDInter Major). Evaluasi secara berkala adanya gejala kekakuan motorik atau tremor.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)",
    "ddinterPairId": "DDInter-PAIR-010030",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Fluoxetine is a potent inhibitor of CYP450 2D6 and increases plasma concentrations of the active antipsychotic fraction (risperidone plus 9-hydroxyrisperidone) by 2.5- to 3-fold.",
    "ddinterOriginalManagement": "Monitor for extrapyramidal symptoms, sedation, and QT prolongation when fluoxetine is co-prescribed. A reduction in risperidone dosage may be necessary.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1418"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Sertraline",
      "Escitalopram",
      "Mirtazapine",
      "Bupropion"
    ]
  },
  {
    "id": "ddinter-int-lithium-ketorolac",
    "drugAId": "drug-lithium",
    "drugBId": "drug-ketorolac",
    "drugAName": "Lithium",
    "drugBName": "Ketorolac",
    "severity": "Major",
    "mechanism": "Ketorolac menghambat sintesis prostaglandin renal secara kuat, memicu vasokonstriksi arteriol ginjal dan menurunkan laju filtrasi glomerulus serta klirens litium.",
    "clinicalOutcome": "Lonjakan cepat konsentrasi lithium serum ke tingkat toksik mematikan (>2.0-3.0 mEq/L), GAGAL GINJAL AKUT, tremor kasar, konfusi, ataksia serebelar, konvulsi, dan koma.",
    "management": "KONTRAINDIKASI MUTLAK BERSAMAAN (FDA Black Box Warning & DDInter Major). Jangan pernah memberikan ketorolac pada pasien yang mengonsumsi lithium.",
    "evidenceLevel": "Level 1 - Well Established (FDA Boxed Warning / DDInter)",
    "ddinterPairId": "DDInter-PAIR-010031",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Ketorolac inhibits renal prostaglandin synthesis, reducing renal blood flow and lithium clearance, precipitating acute, severe lithium toxicity.",
    "ddinterOriginalManagement": "Concomitant use of ketorolac and lithium is contraindicated. If NSAID therapy is mandatory, select an alternative, reduce lithium dose by 50%, and perform frequent serum lithium monitoring.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1705"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Paracetamol",
      "Tramadol",
      "Celecoxib",
      "Topical NSAID (Gel/Patch)"
    ]
  },
  {
    "id": "ddinter-int-lithium-indomethacin",
    "drugAId": "drug-lithium",
    "drugBId": "drug-indomethacin",
    "drugAName": "Lithium",
    "drugBName": "Indomethacin",
    "severity": "Major",
    "mechanism": "Indometasin menurunkan klirens ekskresi renal lithium sebesar 30-40% via supresi sintesis prostaglandin vasodilator di ginjal.",
    "clinicalOutcome": "Peningkatan kadar serum lithium plasma sebesar 30-60% dalam kurun waktu 3-5 hari, memicu intoksikasi litium berat dan nefrotoksisitas.",
    "management": "HINDARI PENGGUNAAN INDOMETASIN bersamaan dengan lithium (DDInter Major). Gunakan Parasetamol untuk peredaan nyeri.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)",
    "ddinterPairId": "DDInter-PAIR-010032",
    "ddinterOriginalManagement": "Reduce lithium dosage by 25% to 50% and monitor serum lithium concentrations within 3 to 5 days of starting indomethacin. Instruct patients to report tremors, ataxia, confusion, and polyuria.",
    "ddinterOriginalText": "Indomethacin inhibits renal prostaglandin E2 synthesis, decreasing renal clearance of lithium by 30% to 50% and causing dangerous elevations in serum lithium concentrations."
  },
  {
    "id": "ddinter-int-paroxetine-tramadol",
    "drugAId": "drug-paroxetine",
    "drugBId": "drug-tramadol",
    "drugAName": "Paroxetine",
    "drugBName": "Tramadol",
    "severity": "Major",
    "mechanism": "Paroxetine menghambat kuat CYP2D6 (mencegah aktivasi tramadol ke metabolit analgesik M1) sekaligus meningkatkan tonus transmisi serotonergik sinaps bersama tramadol.",
    "clinicalOutcome": "SINDROM SEROTONIN AKUT MENGANCAM JIWA, penurunan efikasi analgesik tramadol, dan peningkatan risiko kejang epileptik.",
    "management": "HINDARI KOMBINASI (DDInter Major). Waspadai tanda sindrom serotonin: klonus, tremor, hipertermia, diaforesis, dan agitasi.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)",
    "ddinterPairId": "DDInter-PAIR-010033",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Paroxetine strongly inhibits CYP450 2D6 (preventing activation of tramadol to its active M1 metabolite) and adds serotonergic activity, increasing the risk of Serotonin Syndrome and seizures.",
    "ddinterOriginalManagement": "Avoid combination if possible. If coadministered, monitor for symptoms of serotonin syndrome (hyperreflexia, clonus, fever, agitation) and poor analgesia. Consider non-serotonergic analgesics.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1077"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Paracetamol",
      "Gabapentin",
      "NSAID Topikal"
    ]
  },
  {
    "id": "ddinter-int-venlafaxine-tramadol",
    "drugAId": "drug-venlafaxine",
    "drugBId": "drug-tramadol",
    "drugAName": "Venlafaxine",
    "drugBName": "Tramadol",
    "severity": "Major",
    "mechanism": "Inhibisi reuptake serotonin ganda oleh SNRI (venlafaxine) dan tramadol, berpadu dengan penurunan ambang kejang di susunan saraf pusat.",
    "clinicalOutcome": "Sindrom Serotonin akut berat dan peningkatan risiko kejang konvulsif umum.",
    "management": "HINDARI PENGGUNAAN BERSAMAAN (DDInter Major). Gunakan analgesik non-serotonergik jika diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)",
    "ddinterPairId": "DDInter-PAIR-010034",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Concomitant use of venlafaxine and tramadol creates synergistic serotonergic stimulation at 5-HT receptors and lowers the seizure threshold, predisposing to Serotonin Syndrome and convulsions.",
    "ddinterOriginalManagement": "Avoid concomitant use. If essential, monitor for signs of serotonin syndrome (mental status changes, autonomic instability, neuromuscular aberrations) and seizures. Discontinue both drugs if symptoms occur.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1835"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Paracetamol",
      "Gabapentin",
      "NSAID Topikal"
    ]
  },
  {
    "id": "ddinter-int-amitriptyline-cimetidine",
    "drugAId": "drug-amitriptyline",
    "drugBId": "drug-cimetidine",
    "drugAName": "Amitriptyline",
    "drugBName": "Cimetidine",
    "severity": "Moderate",
    "mechanism": "Cimetidine menghambat isoenzim hepar CYP2D6 dan CYP1A2 yang memetabolisme amitriptyline menjadi metabolit hidroksi inaktif.",
    "clinicalOutcome": "Konsentrasi plasma amitriptyline dan nortriptyline meningkat hingga 2 kali lipat, memicu toksisitas antikolinergik (mulut kering parah, konstipasi obstruktif, retensi urin, delirium) dan pemanjangan konduksi intrakardiak QRS.",
    "management": "Turunkan dosis amitriptyline sebesar 30-50% bila cimetidine diberikan bersamaan, atau beralih ke Famotidine (DDInter Moderate).",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-010035",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Cimetidine inhibits hepatic CYP450 2D6 and 1A2 metabolism of amitriptyline, increasing amitriptyline serum levels and potentiating anticholinergic and cardiotoxic adverse effects.",
    "ddinterOriginalManagement": "Reduce amitriptyline dosage by 30% to 50% when cimetidine is initiated, or switch to famotidine. Monitor ECG and observe for excessive dry mouth, urinary retention, sedation, and arrhythmias.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1986"
    ],
    "alternativeOptionsA": [
      "Sertraline",
      "Escitalopram",
      "Mirtazapine",
      "Bupropion"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-int-diazepam-cimetidine",
    "drugAId": "drug-diazepam",
    "drugBId": "drug-cimetidine",
    "drugAName": "Diazepam",
    "drugBName": "Cimetidine",
    "severity": "Moderate",
    "mechanism": "Cimetidine menghambat oksidasi mikrosomal hepar via CYP2C19 dan CYP3A4, memperpanjang waktu paruh diazepam dari ~40 jam menjadi >70 jam.",
    "clinicalOutcome": "Akumulasi metabolit aktif, somnolen berkepanjangan, letargi, ataksia, dan risiko jatuh pada pasien lanjut usia.",
    "management": "Gunakan benzodiazepin alternatif yang metabolismenya tidak bergantung pada oksidasi CYP (seperti Lorazepam atau Oxazepam) (DDInter Moderate).",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-010036",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Cimetidine inhibits the oxidative hepatic microsomal metabolism (CYP450 2C19/3A4) of diazepam, prolonging its half-life and substantially increasing sedation and psychomotor impairment.",
    "ddinterOriginalManagement": "Reduce diazepam dose or use a glucuronidated benzodiazepine (lorazepam, oxazepam, temazepam) that does not depend on hepatic CYP450 oxidation.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #5020"
    ],
    "alternativeOptionsA": [
      "Buspirone",
      "Melatonin",
      "Hydroxyzine"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-int-alprazolam-cimetidine",
    "drugAId": "drug-alprazolam",
    "drugBId": "drug-cimetidine",
    "drugAName": "Alprazolam",
    "drugBName": "Cimetidine",
    "severity": "Moderate",
    "mechanism": "Cimetidine menghambat hidroksilasi alprazolam di hepar melalui isoenzim CYP3A4.",
    "clinicalOutcome": "Konsentrasi plasma alprazolam meningkat, memperpanjang efek sedasi, gangguan koordinasi psikomotor, dan rasa kantuk berat.",
    "management": "Pertimbangkan penurunan dosis alprazolam atau gunakan antasida/H2RA alternatif seperti Famotidine (DDInter Moderate).",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-010037",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Cimetidine inhibits hepatic CYP450 3A4 metabolism of alprazolam, increasing alprazolam AUC and peak plasma levels, and significantly prolonging central nervous system sedation.",
    "ddinterOriginalManagement": "Consider switching from cimetidine to an alternative acid reducer (famotidine) or reduce alprazolam dosage. Monitor for excessive drowsiness, ataxia, and respiratory depression.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #5020"
    ],
    "alternativeOptionsA": [
      "Buspirone",
      "Melatonin",
      "Hydroxyzine"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-int-midazolam-clarithromycin",
    "drugAId": "drug-midazolam",
    "drugBId": "drug-clarithromycin",
    "drugAName": "Midazolam",
    "drugBName": "Clarithromycin",
    "severity": "Moderate",
    "mechanism": "Klaritromisin menghambat masif enzim CYP3A4 usus dan hati, meningkatkan bioavailabilitas dan AUC midazolam oral sebesar 3 hingga 7 kali lipat.",
    "clinicalOutcome": "SEDASI DALAM DAN HILANG KESADARAN BERKEPANJANGAN, depresi pernapasan berat, hipoksia, dan obstruksi jalan napas akut.",
    "management": "KONTRAINDIKASI BERSAMAAN DENGAN MIDAZOLAM ORAL (FDA Boxed Guidance & DDInter Major). Untuk midazolam parenteral IV/IM, lakukan reduksi dosis minimal 50% dengan pengawasan ketat saturasi oksigen dan jalur napas.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)",
    "ddinterPairId": "DDInter-PAIR-010038",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Clarithromycin is a potent CYP450 3A4 inhibitor that markedly increases oral midazolam AUC by three- to fivefold, causing prolonged and profound sedation and respiratory depression.",
    "ddinterOriginalManagement": "Avoid coadministration of oral midazolam with clarithromycin. If IV midazolam is used, reduce dose by 50% and ensure continuous respiratory and hemodynamic monitoring.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1406"
    ],
    "alternativeOptionsA": [
      "Buspirone",
      "Melatonin",
      "Hydroxyzine"
    ],
    "alternativeOptionsB": [
      "Azithromycin",
      "Cefixime",
      "Amoxicillin-Clavulanate"
    ]
  },
  {
    "id": "ddinter-int-methadone-fluconazole",
    "drugAId": "drug-methadone",
    "drugBId": "drug-fluconazole",
    "drugAName": "Methadone",
    "drugBName": "Fluconazole",
    "severity": "Major",
    "mechanism": "Fluconazole menghambat enzim sitokrom hepar CYP3A4 dan CYP2C19 yang mendegradasi enantiomer R- dan S-metadon, berpadu dengan efek aditif pemanjangan QTc.",
    "clinicalOutcome": "Konsentrasi serum metadon melonjak 35-40%, memicu depresi pernapasan opioid, somnolen berat, serta peningkatan tajam risiko ARITMIA TORSADES DE POINTES.",
    "management": "Pantau EKG (interval QTc) dan tanda klinis sedasi/depresi pernapasan. Turunkan dosis metadon sebesar 20-30% bila fluconazole dimulai (DDInter Major).",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)",
    "ddinterPairId": "DDInter-PAIR-010039",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Fluconazole inhibits CYP450 3A4 and 2C19 metabolism of methadone and both agents prolong the cardiac QTc interval, increasing the risk of Torsades de Pointes and opioid overdose.",
    "ddinterOriginalManagement": "Monitor ECG for QTc interval prolongation and observe for signs of methadone toxicity (excessive sedation, respiratory depression). Methadone dose reduction may be required.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1806"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Terbinafine",
      "Nystatin",
      "Micafungin"
    ]
  },
  {
    "id": "ddinter-int-morphine-metoclopramide",
    "drugAId": "drug-fornas-morphine",
    "drugBId": "drug-metoclopramide",
    "drugAName": "Morphine",
    "drugBName": "Metoclopramide",
    "severity": "Moderate",
    "mechanism": "Metoklopramid mempercepat motilitas dan pengosongan lambung ke duodenum, mempercepat disolusi dan absorpsi oral morfin, berpadu dengan efek depresan sistem saraf pusat.",
    "clinicalOutcome": "Peningkatan kecepatan tercapainya konsentrasi puncak morfin dalam plasma, memicu kantuk akut, sedasi mendadak, dan pusing berputar.",
    "management": "Pantau tingkat kewaspadaan pasien saat kedua obat diberikan bersamaan (sering digunakan bersamaan pada manajemen mual pasca bedah) (DDInter Moderate).",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-010040",
    "mechanismCategory": "Absorption",
    "ddinterOriginalText": "Metoclopramide enhances gastrointestinal motility and gastric emptying, accelerating the rate of oral morphine absorption, while morphine's opioid effects may counteract metoclopramide's prokinetic action.",
    "ddinterOriginalManagement": "Monitor for rapid sedation and analgesia onset upon initiating combination. Adjust morphine dosing and monitor gastrointestinal symptoms.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #798"
    ],
    "alternativeOptionsA": [
      "Paracetamol",
      "Gabapentin",
      "NSAID Topikal"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-int-tramadol-ondansetron",
    "drugAId": "drug-tramadol",
    "drugBId": "drug-ondansetron",
    "drugAName": "Tramadol",
    "drugBName": "Ondansetron",
    "severity": "Major",
    "mechanism": "Antagonisme farmakodinamik: ondansetron memblokade reseptor 5-HT3 di medula spinalis yang merupakan jalur transmisi efek analgesik tramadol non-opioid.",
    "clinicalOutcome": "Penurunan bermakna efikasi analgesik tramadol, requiring dosis tramadol 30-50% lebih tinggi untuk kontrol nyeri pasca operasi.",
    "management": "Waspadai penurunan khasiat analgesik tramadol; jangan menaikkan dosis tramadol berlebihan untuk menghindari toksisitas kejang (DDInter Moderate).",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-010041",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Ondansetron is a 5-HT3 receptor antagonist that can pharmacodynamically antagonize tramadol's spinal antinociceptive effects, requiring higher doses of tramadol and increasing seizure risk.",
    "ddinterOriginalManagement": "Monitor analgesic efficacy when ondansetron is given with tramadol. Higher doses of tramadol may be requested by patients; watch closely for tramadol-induced seizures.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4509"
    ],
    "alternativeOptionsA": [
      "Paracetamol",
      "Gabapentin",
      "NSAID Topikal"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-int-ciprofloxacin-prednisone",
    "drugAId": "drug-ciprofloxacin",
    "drugBId": "drug-prednisone",
    "drugAName": "Ciprofloxacin",
    "drugBName": "Prednisone",
    "severity": "Major",
    "mechanism": "Efek sinergis kerusakan matriks kolagen tendon: kuinolon merangsang enzim matriks metalloproteinase sementara kortikosteroid menghambat sintesis tenosit dan penyembuhan jaringan ikat.",
    "clinicalOutcome": "Peningkatan tajam insiden TENDINITIS DAN RUPTUR TENDON ACHILLES SPONTAN yang melumpuhkan kemampuan berjalan (FDA Black Box Warning).",
    "management": "HINDARI PENGGUNAAN BERSAMAAN pada pasien lanjut usia (>60 tahun), pasien gagal ginjal, atau pasien transplantasi (DDInter Major & FDA Boxed Warning). Hentikan obat segera jika timbul nyeri atau peradangan tendon.",
    "evidenceLevel": "Level 1 - Well Established (FDA Boxed Warning / DDInter)",
    "ddinterPairId": "DDInter-PAIR-010042",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Concomitant use of fluoroquinolones like ciprofloxacin and systemic corticosteroids like prednisone exponentially increases the risk of severe tendinitis and tendon rupture, especially of the Achilles tendon.",
    "ddinterOriginalManagement": "Avoid combination whenever clinically possible, particularly in elderly patients (>60 years) and renal impairment. Discontinue ciprofloxacin immediately if pain, swelling, or inflammation of a tendon occurs.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3536"
    ],
    "alternativeOptionsA": [
      "Azithromycin",
      "Cefixime",
      "Amoxicillin-Clavulanate",
      "Ceftriaxone"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-int-levofloxacin-methylprednisolone",
    "drugAId": "drug-levofloxacin",
    "drugBId": "drug-methylprednisolone",
    "drugAName": "Levofloxacin",
    "drugBName": "Methylprednisolone",
    "severity": "Major",
    "mechanism": "Toksisitas tendon aditif melalui sitotoksisitas pada sel tenosit dan deplesi kolagen tipe I oleh fluoroquinolone dan glukokortikoid sistemik.",
    "clinicalOutcome": "Ruptur tendon Achilles bilateral mendadak, tenosinovitis berat, dan disabilitas mobilitas permanen (FDA Black Box Warning).",
    "management": "HINDARI KOMBINASI. Gunakan antibiotik golongan beta-laktam atau makrolida pada pasien yang sedang menjalani pengobatan kortikosteroid sistemik (DDInter Major).",
    "evidenceLevel": "Level 1 - Well Established (FDA Boxed Warning / DDInter)",
    "ddinterPairId": "DDInter-PAIR-010043",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Co-prescription of levofloxacin with methylprednisolone potentiates tendon collagen degradation, markedly increasing the incidence of tendon rupture and neurotoxicity (convulsions).",
    "ddinterOriginalManagement": "Avoid concurrent use. If mandatory, instruct patients to avoid strenuous exercise and immediately report any tendon pain, tenderness, or swelling, and discontinue levofloxacin at the first symptom.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3536"
    ],
    "alternativeOptionsA": [
      "Azithromycin",
      "Cefixime",
      "Amoxicillin-Clavulanate",
      "Ceftriaxone"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-int-ciprofloxacin-cyclosporine",
    "drugAId": "drug-ciprofloxacin",
    "drugBId": "drug-cyclosporine",
    "drugAName": "Ciprofloxacin",
    "drugBName": "Cyclosporine",
    "severity": "Moderate",
    "mechanism": "Ciprofloxacin menghambat parsial metabolisme CYP3A4 siklosporin dan mengganggu ekskresi tubuler renal.",
    "clinicalOutcome": "Peningkatan kadar kreatinin serum, penurunan laju filtrasi glomerulus, dan peningkatan toksisitas ginjal pada pasien pasca transplantasi organ.",
    "management": "Pantau fungsi ginjal dan kadar palung siklosporin saat ciprofloxacin diinisiasi atau dihentikan (DDInter Moderate).",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-010044",
    "mechanismCategory": "Excretion",
    "alternativeOptions": [
      "Cefixime",
      "Azithromycin"
    ],
    "ddinterOriginalText": "Ciprofloxacin may increase serum creatinine and cyclosporine trough concentrations via inhibition of CYP450 3A4 metabolism and nephrotoxic synergy.",
    "ddinterOriginalManagement": "Monitor renal function parameters (serum creatinine, BUN) and cyclosporine blood concentrations closely. Adjust cyclosporine dosage as necessary.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2097"
    ],
    "alternativeOptionsA": [
      "Azithromycin",
      "Cefixime",
      "Amoxicillin-Clavulanate",
      "Ceftriaxone"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-int-azithromycin-warfarin",
    "drugAId": "drug-azithromycin",
    "drugBId": "drug-warfarin",
    "drugAName": "Azithromycin",
    "drugBName": "Warfarin",
    "severity": "Moderate",
    "mechanism": "Azithromycin memodifikasi flora bakteri normal usus yang memproduksi vitamin K2 endogen dan dapat mendesak warfarin dari ikatan protein plasma.",
    "clinicalOutcome": "Peningkatan nilai INR di atas rentang terapeutik, memar spontan, hematuria, dan risiko perdarahan occult.",
    "management": "Pantau nilai INR pada hari ke-3 hingga ke-5 setelah memulai terapi azithromycin; sesuaikan dosis warfarin bila INR melebihi target (DDInter Moderate).",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-010045",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Azithromycin may enhance the anticoagulant effect of warfarin, possibly by altering gut microflora or competitive protein displacement, resulting in elevated INR and bleeding complications.",
    "ddinterOriginalManagement": "Check INR within 3 to 5 days of starting azithromycin therapy. Adjust warfarin dosage as required to maintain the target therapeutic INR.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2629"
    ],
    "alternativeOptionsA": [
      "Cefixime",
      "Amoxicillin-Clavulanate"
    ],
    "alternativeOptionsB": [
      "Apixaban",
      "Rivaroxaban",
      "Dabigatran"
    ]
  },
  {
    "id": "ddinter-int-clarithromycin-warfarin",
    "drugAId": "drug-clarithromycin",
    "drugBId": "drug-warfarin",
    "drugAName": "Clarithromycin",
    "drugBName": "Warfarin",
    "severity": "Major",
    "mechanism": "Klaritromisin menghambat kuat isoenzim hepar CYP3A4 yang memetabolisme R-warfarin serta mengeliminasi bakteri usus penghasil vitamin K.",
    "clinicalOutcome": "Lonjakan tajam nilai INR hingga > 6.0-8.0, memicu PERDARAHAN GASTROINTESTINAL MASIF, hematuria parah, dan stroke hemoragik.",
    "management": "Pantau INR ketat dalam 48-72 jam pasca inisiasi klaritromisin. Kurangi dosis warfarin sebesar 25-33% atau pilih antibiotik alternatif non-inhibitor CYP (DDInter Major).",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)",
    "ddinterPairId": "DDInter-PAIR-010046",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Clarithromycin potent inhibition of CYP450 3A4 and interference with gut flora significantly elevates warfarin concentrations and INR, precipitating life-threatening hemorrhages.",
    "ddinterOriginalManagement": "Monitor INR closely within 48 to 72 hours of starting clarithromycin. Warfarin dose reduction by 20% to 50% is frequently required. Instruct patients to report signs of bleeding immediately.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #615"
    ],
    "alternativeOptionsA": [
      "Azithromycin",
      "Cefixime",
      "Amoxicillin-Clavulanate"
    ],
    "alternativeOptionsB": [
      "Apixaban",
      "Rivaroxaban",
      "Dabigatran"
    ]
  },
  {
    "id": "ddinter-int-doxycycline-warfarin",
    "drugAId": "drug-doxycycline",
    "drugBId": "drug-warfarin",
    "drugAName": "Doxycycline",
    "drugBName": "Warfarin",
    "severity": "Moderate",
    "mechanism": "Tetrasiklin menekan aktivitas protrombin plasma dan menghambat flora usus penghasil vitamin K secara signifikan.",
    "clinicalOutcome": "Pemanjangan masa protrombin / nilai INR dan peningkatan kerentanan perdarahan mukosa.",
    "management": "Pantau nilai INR berkala saat memulai atau menghentikan doksisiklin; lakukan penurunan dosis warfarin preventif bila diperlukan (DDInter Moderate).",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-010047",
    "mechanismCategory": "Others",
    "ddinterOriginalText": "Doxycycline and other tetracyclines depress plasma prothrombin activity and eradicate vitamin K-producing gut bacteria, potentiating the anticoagulant effect of warfarin.",
    "ddinterOriginalManagement": "Monitor INR closely upon starting or stopping doxycycline therapy. Decrease warfarin dosage if INR elevates above the therapeutic range.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3092"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Apixaban",
      "Rivaroxaban",
      "Dabigatran"
    ]
  },
  {
    "id": "ddinter-int-itraconazole-tacrolimus",
    "drugAId": "drug-itraconazole",
    "drugBId": "drug-tacrolimus",
    "drugAName": "Itraconazole",
    "drugBName": "Tacrolimus",
    "severity": "Major",
    "mechanism": "Inhibisi masif enzim hepar dan dinding usus CYP3A4 serta glikoprotein-P oleh itraconazole, memblokade klirens sistemik tacrolimus.",
    "clinicalOutcome": "Kadar palung tacrolimus melonjak 2 hingga 4 kali lipat dalam 48 jam, memicu NEFROTOKSISITAS AKUT BERAT, hiperkalemia fatal, ensefalopati tremor, dan hiperglikemia masif.",
    "management": "TURUNKAN DOSIS TACROLIMUS HINGGA 50-75% saat memulai itraconazole (DDInter Major). Lakukan pemantauan TDM kadar palung tacrolimus setiap 48 jam.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)",
    "ddinterPairId": "DDInter-PAIR-010048",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Itraconazole strongly inhibits CYP450 3A4 and P-glycoprotein, dramatically reducing tacrolimus clearance and causing severe nephrotoxicity and neurotoxicity.",
    "ddinterOriginalManagement": "Reduce tacrolimus dose by 50% to 75% when itraconazole is initiated. Monitor tacrolimus whole-blood trough levels frequently and check renal function closely.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4534"
    ],
    "alternativeOptionsA": [
      "Fluconazole",
      "Terbinafine",
      "Nystatin",
      "Micafungin"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-int-fluconazole-cyclosporine",
    "drugAId": "drug-fluconazole",
    "drugBId": "drug-cyclosporine",
    "drugAName": "Fluconazole",
    "drugBName": "Cyclosporine",
    "severity": "Moderate",
    "mechanism": "Fluconazole menghambat enzim sitokrom hepar CYP3A4 yang memetabolisme siklosporin secara bergantung dosis (terutama dosis fluconazole >=200 mg/hari).",
    "clinicalOutcome": "Kadar siklosporin darah meningkat sebesar 50-100%, memicu vasokonstriksi arteriol ginjal akut, oliguria, dan nefrotoksisitas.",
    "management": "Kurangi dosis siklosporin sebesar 25-50% saat fluconazole diberikan dan lakukan pemantauan kadar darah palung serial (DDInter Major).",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)",
    "ddinterPairId": "DDInter-PAIR-010049",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Fluconazole inhibits CYP450 3A4-mediated metabolism of cyclosporine in the liver and gut wall, increasing cyclosporine trough levels by 30% to 60% and aggravating nephrotoxicity.",
    "ddinterOriginalManagement": "Reduce cyclosporine dose by 25% to 50% when co-prescribed with fluconazole. Monitor cyclosporine blood concentrations and renal function regularly.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3533"
    ],
    "alternativeOptionsA": [
      "Terbinafine",
      "Nystatin",
      "Micafungin"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-int-itraconazole-cyclosporine",
    "drugAId": "drug-itraconazole",
    "drugBId": "drug-cyclosporine",
    "drugAName": "Itraconazole",
    "drugBName": "Cyclosporine",
    "severity": "Major",
    "mechanism": "Inhibisi kuat CYP3A4 dan P-glikoprotein oleh itraconazole menghambat eliminasi metabolisme lintas pertama dan sistemik siklosporin.",
    "clinicalOutcome": "Peningkatan kadar siklosporin 2-3 kali lipat, memicu disfungsi ginjal akut, hipertensi berat, dan neurotoksisitas.",
    "management": "TURUNKAN DOSIS SIKLOSPORIN SEBESAR 50% dan lakukan pemantauan Therapeutic Drug Monitoring (TDM) ketat (DDInter Major).",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)",
    "ddinterPairId": "DDInter-PAIR-010050",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Itraconazole is a potent CYP450 3A4 and P-gp inhibitor that can increase cyclosporine blood concentrations by 50% to 80%, substantially elevating the risk of acute nephrotoxicity and hypertension.",
    "ddinterOriginalManagement": "Reduce cyclosporine dosage by 50% when starting itraconazole. Measure cyclosporine whole-blood levels twice weekly and monitor serum creatinine and blood pressure.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2688"
    ],
    "alternativeOptionsA": [
      "Fluconazole",
      "Terbinafine",
      "Nystatin",
      "Micafungin"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-int-ketoconazole-cyclosporine",
    "drugAId": "drug-ketoconazole",
    "drugBId": "drug-cyclosporine",
    "drugAName": "Ketoconazole",
    "drugBName": "Cyclosporine",
    "severity": "Major",
    "mechanism": "Ketokonazol adalah salah satu inhibitor CYP3A4 terkuat, menurunkan klirens eliminasi siklosporin hingga 80%.",
    "clinicalOutcome": "Lonjakan ekstrem kadar siklosporin darah, memicu nekrosis tubular ginjal akut, hipertensi parah, hiperkalemia fatal, dan kejang ensefalopati.",
    "management": "REDUKSI DOSIS SIKLOSPORIN SEBESAR 60-80% dan lakukan pemeriksaan TDM harian bila kedua obat terpaksa diberikan bersamaan (DDInter Major).",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)",
    "ddinterPairId": "DDInter-PAIR-010051",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Ketoconazole profoundly inhibits hepatic and intestinal CYP450 3A4 metabolism of cyclosporine, increasing cyclosporine systemic exposure by two- to threefold.",
    "ddinterOriginalManagement": "Reduce cyclosporine dose by 60% to 80% upon initiating ketoconazole. Monitor cyclosporine blood trough concentrations and renal function meticulously.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2688"
    ],
    "alternativeOptionsA": [
      "Fluconazole",
      "Terbinafine",
      "Nystatin",
      "Micafungin"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-int-methotrexate-sulfamethoxazole",
    "drugAId": "drug-methotrexate",
    "drugBId": "drug-sulfamethoxazole",
    "drugAName": "Methotrexate",
    "drugBName": "Sulfamethoxazole",
    "severity": "Moderate",
    "mechanism": "Sulfametoksazol mendesak metotreksat dari ikatan protein albumin serum dan berkompetisi menghambat sekresi tubular ginjal anion organik (OAT1/3).",
    "clinicalOutcome": "TOKSISITAS METOTREKSAT MEMATIKAN: Supresi sumsum tulang akut, pansitopenia, sepsis agranulositik, ulserasi gastrointestinal parah, dan gagal ginjal akut.",
    "management": "KONTRAINDIKASI MUTLAK BERSAMAAN (DDInter Major & FDA Boxed Warning). Jangan pernah memberikan Cotrimoxazole / Sulfametoksazol pada pasien terapi metotreksat.",
    "evidenceLevel": "Level 1 - Well Established (FDA Boxed Warning / DDInter)",
    "ddinterPairId": "DDInter-PAIR-010052",
    "mechanismCategory": "Excretion",
    "ddinterOriginalText": "Sulfamethoxazole displaces methotrexate from plasma albumin binding sites and competes for active renal tubular secretion, causing severe methotrexate bone marrow suppression and pancytopenia.",
    "ddinterOriginalManagement": "Concomitant use is contraindicated (FDA Boxed Warning). Avoid coadministration of sulfonamides with methotrexate. If coadministered, monitor complete blood count (CBC) and liver function tests closely.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1431"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-int-methotrexate-probenecid",
    "drugAId": "drug-methotrexate",
    "drugBId": "drug-probenecid",
    "drugAName": "Methotrexate",
    "drugBName": "Probenecid",
    "severity": "Major",
    "mechanism": "Probenesid memblokade transporter anion organik OAT1 dan OAT3 di tubulus ginjal secara kuat, mereduksi ekskresi renal metotreksat hingga 3-4 kali lipat.",
    "clinicalOutcome": "Kadar plasma metotreksat bertahan tinggi secara fatal memicu pansitopenia berat, stomatitis nekrotik, dan kematian akibat komplikasi infeksi sepsis.",
    "management": "KONTRAINDIKASI MUTLAK BERSAMAAN (FDA Boxed Warning & DDInter Major). Hindari peresepan probenesid pada pasien yang menerima metotreksat.",
    "evidenceLevel": "Level 1 - Well Established (FDA Boxed Warning / DDInter)",
    "ddinterPairId": "DDInter-PAIR-010053",
    "mechanismCategory": "Excretion",
    "ddinterOriginalText": "Probenecid competitively blocks the organic anion transporters (OAT1/OAT3) in renal proximal tubules, drastically decreasing methotrexate clearance and inducing lethal systemic methotrexate toxicity.",
    "ddinterOriginalManagement": "Concomitant use is contraindicated (FDA Boxed Warning). Avoid probenecid in patients receiving methotrexate. If combined, severe myelosuppression, stomatitis, and acute kidney injury can occur.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1571"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-int-methotrexate-lansoprazole",
    "drugAId": "drug-methotrexate",
    "drugBId": "drug-lansoprazole",
    "drugAName": "Methotrexate",
    "drugBName": "Lansoprazole",
    "severity": "Major",
    "mechanism": "Inhibitor pompa proton menghambat transporter renal BCRP (Breast Cancer Resistance Protein) dan H+/K+-ATPase, menurunkan klirens eliminasi metotreksat.",
    "clinicalOutcome": "Peningkatan konsentrasi dan perpanjangan waktu paruh metotreksat, memicu toksisitas hematologi (leukopenia, trombositopenia) dan hepatotoksisitas.",
    "management": "Hentikan sementara penggunaan lansoprazole selama terapi metotreksat dosis tinggi; pertimbangkan H2-blocker seperti Famotidine sebagai alternatif (DDInter Major).",
    "evidenceLevel": "Level 1 - Well Established (FDA Safety Advisory / DDInter)",
    "ddinterPairId": "DDInter-PAIR-010054",
    "mechanismCategory": "Excretion",
    "ddinterOriginalText": "Lansoprazole and other proton pump inhibitors inhibit renal BCRP and H+/K+ ATPase transport mechanisms, elevating serum methotrexate concentrations and delaying elimination.",
    "ddinterOriginalManagement": "Temporarily withhold PPIs during high-dose methotrexate therapy. In low-dose regimens, monitor patients for methotrexate toxicities (mucositis, leukopenia, elevated transaminases).",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4875"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Pantoprazole",
      "Rabeprazole",
      "Famotidine",
      "Rebamipide"
    ]
  },
  {
    "id": "ddinter-int-tacrolimus-rosuvastatin",
    "drugAId": "drug-tacrolimus",
    "drugBId": "drug-rosuvastatin",
    "drugAName": "Tacrolimus",
    "drugBName": "Rosuvastatin",
    "severity": "Moderate",
    "mechanism": "Tacrolimus menghambat transporter serapan hepar OATP1B1, meningkatkan paparan sistemik rosuvastatin dalam sirkulasi darah.",
    "clinicalOutcome": "Peningkatan risiko miopati toksik, nyeri otot (mialgia), dan peningkatan enzim transaminase hati.",
    "management": "Gunakan dosis rosuvastatin terendah yang efektif (5-10 mg/hari) dan monitor keluhan nyeri otot (DDInter Moderate).",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-010055",
    "ddinterOriginalManagement": "Use the lowest effective dose of rosuvastatin (5 to 10 mg daily) when combined with tacrolimus. Advise patients to promptly report muscle pain, weakness, or brownish urine.",
    "ddinterOriginalText": "Tacrolimus inhibits OATP1B1 hepatic uptake transport of rosuvastatin, increasing rosuvastatin systemic exposure and predisposing patients to severe myopathy and rhabdomyolysis."
  },
  {
    "id": "ddinter-int-colchicine-diltiazem",
    "drugAId": "drug-colchicine",
    "drugBId": "drug-diltiazem",
    "drugAName": "Colchicine",
    "drugBName": "Diltiazem",
    "severity": "Major",
    "mechanism": "Diltiazem menghambat moderat enzim CYP3A4 dan glikoprotein-P, mengurangi klirens hepar dan ekskresi biliar/renal kolkisin.",
    "clinicalOutcome": "Akumulasi kolkisin toksik dalam tubuh memicu INTOKSIKASI KOLKISIN BERAT: diare profus, muntah parah, agranulositosis, rabdomiolisis, dan syok kardiogenik.",
    "management": "TURUNKAN DOSIS KOLKISIN SEBESAR 50% atau hindari kombinasi terutama pada pasien dengan gangguan fungsi ginjal atau hati (DDInter Major & FDA Safety Alert).",
    "evidenceLevel": "Level 1 - Well Established (FDA Safety Advisory / DDInter)",
    "ddinterPairId": "DDInter-PAIR-010056",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Diltiazem moderately inhibits CYP450 3A4 and P-glycoprotein, reducing colchicine clearance and precipitating acute colchicine toxicity including myopathy, neuropathy, and multiorgan failure.",
    "ddinterOriginalManagement": "Reduce colchicine dosage by 50% or avoid combination, particularly in patients with renal or hepatic impairment. Monitor for symptoms of colchicine toxicity (severe diarrhea, vomiting, muscle weakness).",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #60"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-int-amlodipine-tacrolimus",
    "drugAId": "drug-amlodipine",
    "drugBId": "drug-tacrolimus",
    "drugAName": "Amlodipine",
    "drugBName": "Tacrolimus",
    "severity": "Moderate",
    "mechanism": "Amlodipin menghambat isoenzim sitokrom hepar CYP3A4, memperlambat klirens metabolik tacrolimus.",
    "clinicalOutcome": "Kadar darah palung (trough levels) tacrolimus meningkat sebesar 20-40%, meningkatkan risiko nefrotoksisitas akut, tremor, dan hiperkalemia.",
    "management": "Lakukan Therapeutic Drug Monitoring (TDM) kadar tacrolimus saat amlodipin dimulai atau dinaikkan dosisnya; sesuaikan dosis tacrolimus bila diperlukan (DDInter Moderate).",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-010057",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Amlodipine inhibits CYP450 3A5 and 3A4 metabolism of tacrolimus, resulting in elevated whole-blood tacrolimus trough concentrations and increased nephrotoxicity risk.",
    "ddinterOriginalManagement": "Monitor whole-blood tacrolimus trough levels when amlodipine is added, adjusted, or discontinued. Reduce tacrolimus dosage as indicated by therapeutic drug monitoring.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2610"
    ],
    "alternativeOptionsA": [
      "Candesartan",
      "Valsartan",
      "Bisoprolol"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-int-citalopram-metoprolol",
    "drugAId": "drug-citalopram",
    "drugBId": "drug-metoprolol",
    "drugAName": "Citalopram",
    "drugBName": "Metoprolol",
    "severity": "Moderate",
    "mechanism": "Citalopram menghambat isoenzim hepar CYP2D6 yang memetabolisme metoprolol, melipatgandakan AUC plasma metoprolol hingga 2 kali lipat.",
    "clinicalOutcome": "Peningkatan efek beta-bloker yang berlebihan: BRADIKARDIA SIMTOMATIK, hipotensi arterial, pusing melayang, rasa lelah ekstrem, dan blok konduksi AV.",
    "management": "Pantau denyut jantung dan tekanan darah secara berkala; pertimbangkan pengurangan dosis metoprolol sebesar 50% saat dikonsumsi bersama citalopram (DDInter Moderate).",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-010058",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Citalopram is a mild-to-moderate inhibitor of CYP450 2D6 that increases plasma concentrations of metoprolol by approximately twofold, increasing bradycardia and hypotension risk.",
    "ddinterOriginalManagement": "Monitor heart rate and blood pressure when citalopram is initiated in patients on metoprolol. Metoprolol dosage reduction may be necessary if bradycardia or fatigue develops.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3157"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-int-propranolol-rizatriptan",
    "drugAId": "drug-propranolol",
    "drugBId": "drug-rizatriptan",
    "drugAName": "Propranolol",
    "drugBName": "Rizatriptan",
    "severity": "Moderate",
    "mechanism": "Propranolol menghambat secara kompetitif metabolisme oksidatif monoamine oxidase-A (MAO-A) rizatriptan, meningkatkan AUC rizatriptan sebesar 70-80%.",
    "clinicalOutcome": "Lonjakan tajam kadar rizatriptan plasma, meningkatkan risiko vasokonstriksi arteri koroner, krisis hipertensi, iskemia miokard, dan parestesia berat.",
    "management": "DOSIS RIZATRIPTAN WAJIB DITURUNKAN MENJADI MAKSIMAL 5 MG PER DOSIS (bukan 10 mg) dan maksimal 15 mg dalam 24 jam bila diberikan bersama propranolol (DDInter Major & FDA Prescribing Info).",
    "evidenceLevel": "Level 1 - Well Established (FDA Prescribing Info / DDInter)",
    "ddinterPairId": "DDInter-PAIR-010059",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Propranolol competitively inhibits monoamine oxidase-A (MAO-A) oxidative metabolism of rizatriptan, increasing rizatriptan AUC by 70% and peak plasma concentrations by 80%.",
    "ddinterOriginalManagement": "The 5 mg dose of rizatriptan should be used in patients taking propranolol (maximum of 15 mg in 24 hours instead of 30 mg). Monitor for chest tightness and vasoconstrictive symptoms.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #61"
    ],
    "alternativeOptionsA": [
      "Amlodipine",
      "Candesartan",
      "Valsartan"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-int-ketoconazole-methylprednisolone",
    "drugAId": "drug-ketoconazole",
    "drugBId": "drug-methylprednisolone",
    "drugAName": "Ketoconazole",
    "drugBName": "Methylprednisolone",
    "severity": "Major",
    "mechanism": "Ketokonazol menghambat sangat kuat enzim sitokrom hepar CYP3A4, menurunkan klirens eliminasi metilprednisolon hingga >60%.",
    "clinicalOutcome": "Peningkatan drastis paparan sistemik kortikosteroid, memicu efek samping glukokortikoid sistemik masif: sindrom Cushingoid iatrogenik, supresi aksis adrenal-hipofisis (HPA axis), hiperglikemia berat, dan osteoporosis terakselerasi.",
    "management": "TURUNKAN DOSIS METHYLPREDNISOLONE SEBESAR 50% bila digunakan bersama ketokonazol oral dan pantau efek samping hiperkortisolisme secara ketat (DDInter Major).",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)",
    "ddinterPairId": "DDInter-PAIR-010060",
    "mechanismCategory": "Metabolism",
    "alternativeOptions": [
      "Fluconazole",
      "Dexamethasone"
    ],
    "ddinterOriginalText": "Ketoconazole potent CYP450 3A4 inhibition reduces the metabolic clearance of methylprednisolone, increasing corticosteroid exposure and precipitating secondary adrenal suppression and Cushingoid symptoms.",
    "ddinterOriginalManagement": "Reduce methylprednisolone dosage by 50% when coadministered with ketoconazole. Monitor for signs of hypercorticism and titrate steroid dose downward as needed.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4717"
    ],
    "alternativeOptionsA": [
      "Fluconazole",
      "Terbinafine",
      "Nystatin",
      "Micafungin"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  }
];
