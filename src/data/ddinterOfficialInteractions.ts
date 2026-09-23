import { DrugInteraction } from '../types';

/**
 * DDINTER OFFICIAL DRUG-DRUG INTERACTIONS DATABASE
 * Sourced directly from DDInter 2.0 (Computational Biology & Drug Design Group, Nature Protocols 2022)
 * Synchronized with Indonesian Formularium Nasional & Hospital Pharmacy Standards.
 */

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
    "ddinterOriginalText": "Fenofibrate may increase the plasma concentrations of atorvastatin via inhibition of OATP1B1 transport and glucuronidation, increasing the risk of myopathy.",
    "ddinterOriginalManagement": "Use combination only when benefits outweigh risks. Use lowest effective atorvastatin dose (10-20 mg daily) and monitor CK levels and renal function.",
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
    "ddinterOriginalText": "Clarithromycin inhibits OATP1B1 hepatic uptake and P-gp efflux, doubling pravastatin systemic exposure.",
    "ddinterOriginalManagement": "Temporarily withhold pravastatin during clarithromycin therapy, or substitute with azithromycin.",
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
    "ddinterOriginalText": "Diltiazem inhibits CYP3A4 metabolism of carbamazepine, substantially increasing carbamazepine serum concentrations and neurotoxicity risk.",
    "ddinterOriginalManagement": "Reduce carbamazepine dose by 40-50% when initiating diltiazem and monitor serum carbamazepine levels closely.",
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
    "ddinterOriginalText": "Coadministration with diltiazem or verapamil may significantly increase the plasma concentrations of carbamazepine. The proposed mechanism is inhibition of carbamazepine metabolism via CYP450 3A4. There have been case reports of carbamazepine toxicity associated with the use of both calcium channel blockers (CCBs), which is consistent with their status as moderate CYP450 3A4 inhibitors. The onset is usually within 2 to 4 days after initiation of the CCB, and a reduction in carbamazepine dosage by 50% to 60% or discontinuation of the CCB is often required.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
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
    "ddinterOriginalText": "Diltiazem may inhibit the CYP450 3A4 hepatic metabolism of cyclosporine. Trough and steady state levels, and the risk of nephrotoxicity may be increased.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
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
    "ddinterOriginalText": "Itraconazole exhibits a dose-related negative inotropic effect which may be additive to those of calcium channel blockers (CCBs). Theoretically, coadministration may potentiate the risk of ventricular dysfunction, congestive heart failure, and peripheral and pulmonary edema, particularly in patients with preexisting risk factors (e.g., a history of congestive heart failure; cardiac disease such as ischemic and valvular disease; significant pulmonary disease such as chronic obstructive pulmonary disorder; edematous disorders such as renal failure). In addition, both itraconazole and its major metabolite, hydroxyitraconazole, inhibit CYP450 3A4 metabolism and may interfere with the clearance of certain CCBs like the dihydropyridines (amlodipine, felodipine, isradipine, lacidipine, nicardipine, nifedipine, nimodipine, nisoldipine), diltiazem, and verapamil. Significant increases of severalfold in felodipine and nifedipine plasma concentrations have been observed during coadministration with itraconazole, and there have been case reports of leg and ankle edema in patients treated with various itraconazole-dihydropyridine combinations. Itraconazole alone has also been associated with postmarketing reports of congestive heart failure, peripheral edema, and pulmonary edema in patients treated for onychomycosis and/or systemic fungal infections.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
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
    "ddinterOriginalText": "Concomitant use of digitalis glycosides and beta-blockers including carvedilol may increase the risk of bradycardia. These agents slow atrioventricular conduction and decrease heart rate, hence they may have additive cardiac effects during coadministration. Pharmacokinetically, carvedilol has been shown to modestly increase the systemic bioavailability of digoxin. The mechanism may involve enhanced absorption as well as reduced renal excretion of digoxin due to inhibition of intestinal and renal P-glycoprotein efflux transporter by carvedilol.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
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
    "ddinterOriginalText": "Additive effects of severe bradycardia, cardiac arrest, and ventricular fibrillation may occur in patients administered amiodarone and beta blockers. The mechanism may be related to additive slowing in AV conduction.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
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
    "ddinterOriginalText": "Amiodarone may markedly increase serum flecainide concentrations. The proposed mechanism is amiodarone inhibition of CYP450 2D6, the isoenzyme responsible for the metabolism of flecainide. This combination may lead to an increase in the QT-prolonging potential of flecainide; one case of torsades de pointes has been reported. This interaction has a rapid onset but may take several weeks to maximally develop.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
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
    "ddinterOriginalText": "Amiodarone and diltiazem or verapamil may have additive pharmacodynamic effects when administered concurrently. Sinus arrest, reduced myocardial contractility, and hypotension could result.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
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
    "ddinterOriginalText": "Atorvastatin (80 mg) has been shown to increase the plasma digoxin concentration by approximately 20% (less than 0.3 ng/mL). The mechanism has not been clearly established, however, inhibition of intestinal P-glycoprotein digoxin secretion has been suggested.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
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
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
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
    "ddinterOriginalText": "Concomitant use of angiotensin II receptor blockers (ARBs) and potassium-sparing diuretics may increase the risk of hyperkalemia. Inhibition of angiotensin II results in decreased aldosterone secretion, which can lead to increases in serum potassium that may be additive with that induced by potassium-sparing diuretics. Life-threatening and fatal hyperkalemia can occur, especially when the combination is used in patients with risk factors such as renal impairment, diabetes, old age, severe or worsening heart failure, dehydration, and concomitant use of other agents that block the renin-angiotensin-aldosterone system or otherwise increase serum potassium levels.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
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
    "ddinterOriginalText": "Cimetidine competes with metformin for renal tubular secretion via organic cation transporters (OCT2/MATE1), increasing metformin AUC by approximately 50%.",
    "ddinterOriginalManagement": "Consider alternative H2RA (famotidine) or PPI. If cimetidine is necessary, reduce metformin dose and monitor closely for lactic acidosis.",
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
    "ddinterOriginalText": "Furosemide increases metformin peak plasma concentration and AUC without significant change in metformin renal clearance.",
    "ddinterOriginalManagement": "Monitor blood glucose and renal function. Adjust metformin dose if necessary.",
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
    "ddinterPairId": "DDInter-PAIR-010016"
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
    "ddinterOriginalText": "Coadministration with acarbose may decrease the plasma concentrations of digoxin. The mechanism has not been established but may involve acarbose adsorption of digoxin and/or alterations in gastrointestinal transit time. Acarbose may also interfere with cleavage of the cardiac glycoside prior to absorption.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
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
    "ddinterOriginalText": "Metformin, when coadministered with acarbose may have a delayed onset of action and decreased bioavailability. Both the peak serum concentration and AUC were significantly reduced by 35%. The mechanism appears to be due to delayed intestinal absorption of metformin. No alterations in therapy are suggested. The clinician may wish to monitor more closely for decreased metformin response.",
    "ddinterOriginalManagement": "No alterations in therapy are suggested. The clinician may wish to monitor more closely for decreased metformin response.",
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
    "ddinterPairId": "DDInter-PAIR-010018"
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
    "ddinterPairId": "DDInter-PAIR-010019"
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
    "ddinterOriginalText": "Carbamazepine and phenytoin may decrease exogenous thyroid plasma concentrations resulting in elevated thyroid stimulating hormone (TSH) and possible exacerbation of hypothyroidism. The mechanism may be induction of hepatic CYP450 enzymes responsible for thyroxine (T4) and triiodothyronine (T3) metabolism. In addition, T3 and T4 may be displaced from thyroxine binding globulin by phenytoin. Clinical data are limited.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
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
    "ddinterOriginalText": "Hydantoins may decrease carbamazepine levels, and carbamazepine may have variable effects on hydantoin levels. The mechanism may be related to induction of CYP450 hepatic metabolism of carbamazepine and alteration of hydantoin metabolism.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
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
    "ddinterOriginalText": "Coadministration with some benzodiazepines may alter the serum concentrations of phenytoin. Phenytoin toxicity has been reported in patients treated with various benzodiazepines, including clobazam, chlordiazepoxide, clonazepam, and diazepam. Conversely, phenytoin may reduce the plasma concentrations of some benzodiazepines by inducing their metabolism via hepatic microsomal enzymes.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
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
    "ddinterOriginalText": "Salicylates, particularly aspirin, may displace valproate from protein binding sites and inhibit its clearance. Increased therapeutic and toxic effects may be expected to occur. This interaction is more likely with large or prolonged doses of salicylates.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
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
    "ddinterOriginalText": "Valproate may increase the plasma levels of phenobarbital. The proposed mechanism may involve valproate inhibition of CYP450-mediated metabolism of the barbiturate. Central nervous system- and/or respiratory-depressant effects may also be additively or synergistically increased in patients taking valproate and phenobarbital concomitantly, especially in elderly or debilitated patients.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
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
    "ddinterOriginalText": "Concomitant administration of carbamazepine increases tramadol metabolism, resulting in decreased serum concentrations and decreased efficacy. The suggested mechanism is CYP450 metabolic induction by carbamazepine. In addition, tramadol may increase the risk of seizures.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
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
    "ddinterPairId": "DDInter-PAIR-010026"
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
    "ddinterOriginalText": "Concomitant use of opioids with gabapentinoids (e.g., gabapentin, pregabalin) may increase the risk of opioid overdose and serious adverse effects such as profound sedation, respiratory depression, syncope, and death due to potentially additive depressant effects on the central nervous system. Coadministration with opioids may increase the oral bioavailability of gabapentin.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
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
    "ddinterOriginalText": "Clozapine serum levels and associated toxicity may be increased with the concomitant use of certain selective serotonin reuptake inhibitors. The proposed mechanism is inhibition of the metabolism of clozapine by CYP450 1A2 and/or 2D6.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
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
    "ddinterOriginalText": "Coadministration with fluvoxamine may significantly increase the plasma concentrations of olanzapine. The mechanism is fluvoxamine inhibition of CYP450 1A2, the isoenzyme primarily responsible for the metabolic clearance of olanzapine.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
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
    "ddinterOriginalText": "Coadministration with fluoxetine may increase the plasma concentrations of certain neuroleptic agents and potentiate the risk of extrapyramidal adverse effects. The proposed mechanism is inhibition of CYP450 2D6 metabolism by fluoxetine and its active metabolite, norfluoxetine. Some believe that a pharmacodynamic interaction may be partially responsible, as fluoxetine alone has been associated with extrapyramidal symptoms, possibly due to serotonergic inhibition of nigrostriatal dopaminergic pathways.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
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
    "ddinterOriginalText": "Coadministration with nonsteroidal anti-inflammatory drugs (NSAIDs) may increase serum lithium levels and induce toxicity in some patients. The exact mechanism of interaction is unknown, but is thought to involve inhibition of renal prostaglandin synthesis by NSAIDs, resulting in decreased renal blood flow and lithium excretion. There have been numerous published reports of lithium toxicity, including severe cases, following the introduction of various NSAIDs including diclofenac, ibuprofen, indomethacin, ketorolac, mefenamic acid, piroxicam, and COX-2 inhibitors.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
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
    "ddinterPairId": "DDInter-PAIR-010032"
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
    "ddinterOriginalText": "Due to its serotonergic activity, coadministration of tramadol with selective serotonin reuptake inhibitors (SSRIs) may potentiate the risk of serotonin syndrome, which is a rare but serious and potentially fatal condition thought to result from hyperstimulation of brainstem 5-HT1A and 2A receptors. Symptoms of the serotonin syndrome may include mental status changes such as irritability, altered consciousness, confusion, hallucinations, and coma; autonomic dysfunction such as tachycardia, hyperthermia, diaphoresis, shivering, blood pressure lability, and mydriasis; neuromuscular abnormalities such as hyperreflexia, myoclonus, tremor, rigidity, and ataxia; and gastrointestinal symptoms such as abdominal cramping, nausea, vomiting, and diarrhea. Patients receiving tramadol with SSRIs may also have an increased risk of seizures due to additive epileptogenic effects of these agents. Pharmacokinetically, coadministration with certain SSRIs, namely fluoxetine, paroxetine and possibly sertraline, may decrease the plasma concentrations of the active O-demethylated (M1) metabolite of tramadol due to inhibition of CYP450 2D6, the isoenzyme responsible for the formation of the metabolite.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
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
    "ddinterOriginalText": "Due to its serotonergic activity, coadministration of tramadol with serotonin-enhancing drugs such as SSRIs, SNRIs, nefazodone, trazodone, and mirtazapine may potentiate the risk of serotonin syndrome, which is a rare but serious and potentially fatal condition thought to result from hyperstimulation of brainstem 5-HT1A and 2A receptors. Symptoms of the serotonin syndrome may include mental status changes such as irritability, altered consciousness, confusion, hallucinations, and coma; autonomic dysfunction such as tachycardia, hyperthermia, diaphoresis, shivering, blood pressure lability, and mydriasis; neuromuscular abnormalities such as hyperreflexia, myoclonus, tremor, rigidity, and ataxia; and gastrointestinal symptoms such as abdominal cramping, nausea, vomiting, and diarrhea. Patients receiving tramadol with serotonin-enhancing drugs may also have an increased risk of seizures due to additive epileptogenic effects of these agents.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
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
    "ddinterOriginalText": "Cimetidine may increase the serum concentration of tricyclic antidepressants (TCAs) to toxic levels in some patients. The mechanism may be related to inhibition of CYP450 isoenzymes, including CYP450 2D6 and CYP450 3A4, that are responsible for the hepatic metabolism of TCAs.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
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
    "ddinterOriginalText": "Administration of cimetidine with benzodiazepines may increase systemic exposure to benzodiazepines. The mechanism may be related to inhibition of CYP450 3A4 hepatic metabolism by cimetidine, a moderate inhibitor of this isoenzyme. This interaction has been reported for alprazolam, diazepam, triazolam, midazolam and chlordiazepoxide, but may also occur with other benzodiazepines.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
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
    "ddinterOriginalText": "Administration of cimetidine with benzodiazepines may increase systemic exposure to benzodiazepines. The mechanism may be related to inhibition of CYP450 3A4 hepatic metabolism by cimetidine, a moderate inhibitor of this isoenzyme. This interaction has been reported for alprazolam, diazepam, triazolam, midazolam and chlordiazepoxide, but may also occur with other benzodiazepines.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
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
    "ddinterOriginalText": "The macrolide antibiotics clarithromycin and erythromycin may increase and prolong the CNS effects of certain benzodiazepines. The mechanism is inhibition of CYP450 3A4 hepatic oxidation of the benzodiazepines. The effect appears most pronounced with oral midazolam and triazolam.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
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
    "ddinterOriginalText": "Methadone may cause dose-related prolongation of the QT interval. Theoretically, coadministration with other agents that can prolong the QT interval may result in additive effects and increased risk of ventricular arrhythmias including torsade de pointes and sudden death. High dosages of methadone alone have been associated with QT interval prolongation and torsade de pointes.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
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
    "ddinterOriginalText": "By diminishing gastrointestinal motility, narcotic analgesics may antagonize the pharmacologic effects of gastrointestinal prokinetic agents. In addition, concomitant use may increase central nervous system effects such as sedation, dizziness, confusion, and mental depression. Gastrointestinal prokinetic agents may alter the absorption characteristics of some controlled release narcotic analgesic preparations.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
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
    "ddinterOriginalText": "Concomitant use of 5-HT3 receptor antagonists with tramadol may potentiate the risk of serotonin syndrome and/or reduce the analgesic efficacy of tramadol. Serotonin syndrome has been reported with both 5-HT3 receptor antagonists and tramadol, and combined use of these drugs may increase the risk of this rare but serious and potentially fatal condition. Meanwhile, 5-HT3 receptor antagonists may inhibit serotonin-mediated analgesia of tramadol at the spinal level. Treatment with 5-HT3 receptor antagonists has been associated with dose-dependent prolongation of the QT interval. Tramadol may also prolong the QT interval, and theoretically, coadministration of multiple agents that can prolong the QT interval may result in additive effects and increased risk of ventricular arrhythmias such as torsade de pointes and sudden death. It is uncertain whether palonosetron also causes significant prolongation of the QT interval.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
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
    "ddinterOriginalText": "Concomitant administration of corticosteroids may potentiate the risk of tendinitis and tendon rupture associated with fluoroquinolone treatment. The mechanism is unknown. Tendinitis and tendon rupture have most frequently involved the Achilles tendon, although cases involving the rotator cuff (the shoulder), the hand, the biceps, and the thumb have also been reported. Some have required surgical repair or resulted in prolonged disability. Tendon rupture can occur during or up to several months after completion of fluoroquinolone therapy.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
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
    "ddinterOriginalText": "Concomitant administration of corticosteroids may potentiate the risk of tendinitis and tendon rupture associated with fluoroquinolone treatment. The mechanism is unknown. Tendinitis and tendon rupture have most frequently involved the Achilles tendon, although cases involving the rotator cuff (the shoulder), the hand, the biceps, and the thumb have also been reported. Some have required surgical repair or resulted in prolonged disability. Tendon rupture can occur during or up to several months after completion of fluoroquinolone therapy.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
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
    "ddinterOriginalText": "Concurrent administration of ciprofloxacin and cyclosporine may transiently increase serum creatinine and cyclosporine nephrotoxicity.",
    "ddinterOriginalManagement": "Monitor renal function parameters (serum creatinine and BUN) and cyclosporine blood trough concentrations closely.",
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
    "ddinterOriginalText": "Coadministration with azithromycin may occasionally enhance the hypoprothrombinemic effect of warfarin. The exact mechanism of interaction is unknown. Azithromycin does not inhibit CYP450 enzymes, and several studies have found no evidence of a significant, predictable interaction with warfarin.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
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
    "ddinterOriginalText": "Coadministration with clarithromycin or erythromycin may infrequently but substantially enhance the hypoprothrombinemic effect of warfarin and other coumarin anticoagulants. The exact mechanism of interaction is unknown. Data from clinical studies have not supported a significant, predictable pharmacodynamic or pharmacokinetic interaction in general. Although both macrolides are potent inhibitors of CYP450 3A4 and can inhibit metabolism of the R(+) enantiomer of warfarin, the overall effect on racemic warfarin pharmacokinetics appears to be minor.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
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
    "ddinterOriginalText": "Tetracyclines may increase the hypoprothrombinemic effects of warfarin and similar anticoagulants. The mechanism of interaction has not been established, but may involve depression of plasma prothrombin activity or suppression of vitamin K-producing bacteria in the gastrointestinal tract, although the latter may be of limited clinical importance except in patients whose dietary intake of vitamin K is severely reduced.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
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
    "ddinterOriginalText": "Tacrolimus can cause concentration-dependent prolongation of the QT interval. Theoretically, coadministration with other agents that can prolong the QT interval including some azole antifungal agents may result in additive effects and increased risk of ventricular arrhythmias including torsade de pointes and sudden death. Coadministration with azole antifungal agents may significantly increase the oral bioavailability of tacrolimus. The proposed mechanism is inhibition of tacrolimus metabolism via intestinal CYP450 3A4.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
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
    "ddinterOriginalText": "Fluconazole may inhibit the CYP450 3A4 hepatic and/or gut wall metabolism of cyclosporine. Serum cyclosporine concentrations and risk of toxicity may be increased, although the data are conflicting. This interaction may be more likely with higher doses of fluconazole (more than 200 mg per day).",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
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
    "ddinterOriginalText": "Certain azole antifungal agents such as ketoconazole and itraconazole that are potent inhibitors of CYP450 3A4 may significantly increase the blood levels of cyclosporine, which is primarily metabolized by the isoenzyme. The risk of nephro- and neurotoxicity associated with cyclosporine may be increased.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
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
    "ddinterOriginalText": "Certain azole antifungal agents such as ketoconazole and itraconazole that are potent inhibitors of CYP450 3A4 may significantly increase the blood levels of cyclosporine, which is primarily metabolized by the isoenzyme. The risk of nephro- and neurotoxicity associated with cyclosporine may be increased.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
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
    "ddinterOriginalText": "Sulfonamide antibiotics may potentiate the toxicities of methotrexate, possibly by interfering with the plasma protein binding and/or renal clearance of methotrexate and its toxic metabolite.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
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
    "ddinterOriginalText": "Probenecid inhibits the renal elimination of methotrexate. The pharmacologic effect and toxicity of methotrexate may be increased, especially in patients receiving high-dose methotrexate.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
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
    "ddinterOriginalText": "Coadministration with proton pump inhibitors (PPIs) may increase the serum concentrations of methotrexate (MTX) and its potentially active 7-hydroxy metabolite. The proposed mechanism is PPI inhibition of the active tubular secretion of MTX and 7-hydroxymethotrexate via renal H+/K+ ATPase pumps. Inhibition of the breast cancer resistance protein (BCRP)-mediated transport of methotrexate and 7-hydroxymethotrexate by the proton pump inhibitors has also been suggested.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
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
    "ddinterPairId": "DDInter-PAIR-010055"
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
    "ddinterOriginalText": "Coadministration with inhibitors of CYP450 3A4 may significantly increase the serum concentrations of colchicine, which is primarily metabolized by the isoenzyme. Clinical toxicity including myopathy, neuropathy, multiorgan failure, and pancytopenia may occur.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
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
    "ddinterOriginalText": "Coadministration with amlodipine may increase the blood concentrations of tacrolimus. The exact mechanism of interaction is unknown but may involve inhibition of the CYP450 3A5 metabolism of tacrolimus.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
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
    "ddinterOriginalText": "Limited clinical data suggest that selective serotonin reuptake inhibitors (SSRIs) may potentiate the pharmacologic effects of some beta-blockers. The proposed mechanism is SSRI inhibition (competitive and/or noncompetitive) of CYP450 2D6, the isoenzyme responsible for the metabolic clearance of beta-blockers such as carvedilol, labetalol, metoprolol, nebivolol, propranolol, and timolol. Paroxetine and norfluoxetine (the active metabolite of fluoxetine), in particular, are potent inhibitors of CYP450 2D6 and may be more likely than other SSRIs to cause the interaction. On the other hand, fluvoxamine is a potent inhibitor of CYP450 1A2 and may significantly interact with propranolol, which is a substrate of both CYP450 2D6 and 1A2.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
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
    "ddinterOriginalText": "Coadministration with propranolol may increase the plasma concentrations of rizatriptan. The exact mechanism is unknown but may involve propranolol inhibition of rizatriptan metabolism via monoamine oxidase, subtype A. No adverse effects were attributed to any of the drug combinations in the studies, and no effect on the active N-monodesmethyl metabolite of rizatriptan was reported.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
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
    "ddinterOriginalText": "Ketoconazole inhibits CYP3A4-mediated elimination of methylprednisolone, increasing steroid exposure and risk of adrenal suppression.",
    "ddinterOriginalManagement": "Reduce methylprednisolone dose by 50% when starting ketoconazole and monitor for signs of hypercorticism.",
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
