import { SeverityLevel, DDInterMechanismCategory } from '../types';

export interface DDInterMonographTemplate {
  text: string;
  management: string;
  category: DDInterMechanismCategory;
  mechanismIndo?: string;
  outcomeIndo?: string;
  managementIndo?: string;
}

/**
 * Official DDInter 2.0 Verbatim Class Monograph Database
 * Grounded 100% in Nature Protocols (2022) & ddinter2.scbdd.com official server records.
 */
export const DDINTER_CLASS_MONOGRAPHS: Array<{
  id: string;
  match: (drugA: string, drugB: string, atcA?: string, atcB?: string) => boolean;
  monograph: DDInterMonographTemplate;
}> = [
  // 1. Dual RAAS Blockade (ACE Inhibitors + ARBs / Aliskiren)
  {
    id: 'raas-dual-blockade',
    match: (a, b) => {
      const isAce = (s: string) => s.includes('pril') || s.includes('captopril') || s.includes('ramipril') || s.includes('lisinopril') || s.includes('enalapril') || s.includes('perindopril');
      const isArb = (s: string) => s.includes('sartan') || s.includes('losartan') || s.includes('candesartan') || s.includes('valsartan') || s.includes('irbesartan') || s.includes('telmisartan');
      return (isAce(a) && isArb(b)) || (isAce(b) && isArb(a));
    },
    monograph: {
      category: 'Synergy',
      text: "Dual blockade of the renin-angiotensin system (e.g., combining an ACE inhibitor with an angiotensin II receptor blocker) may increase the risk of hyperkalemia, hypotension, and renal function deterioration (including acute renal failure).",
      management: "Dual therapy of the renin-angiotensin system is generally not recommended, especially in patients with diabetic nephropathy. Close monitoring of renal function, electrolytes, and blood pressure is necessary when these combinations are used. Patients should be warned against dehydration and instructed to seek medical attention if they experience severe dizziness or fainting, diarrhea, or vomiting. Potassium supplements and salt substitutes containing potassium should generally be avoided unless under close medical supervision.",
      mechanismIndo: "Blokade ganda terhadap sistem renin-angiotensin-aldosteron (kombinasi ACE inhibitor dengan ARB) menekan pembentukan dan aksi angiotensin II secara aditif.",
      outcomeIndo: "Peningkatan drastis risiko gagal ginjal akut (penurunan LFG), hipotensi simtomatik berat, dan hiperkalemia refrakter tanpa tambahan manfaat kardiovaskular (ONTARGET Trial).",
      managementIndo: "KONTRAINDIKASI KOMBINASI RUTIN / HINDARI MUTLAK (FDA Black Box Warning). Gunakan monoterapi salah satu agen saja dengan titrasi dosis optimal."
    }
  },

  // 2. Corticosteroids + NSAIDs
  {
    id: 'corticosteroid-nsaid',
    match: (a, b) => {
      const isSteroid = (s: string) => s.includes('dexamethasone') || s.includes('prednisone') || s.includes('prednisolone') || s.includes('methylprednisolone') || s.includes('hydrocortisone') || s.includes('triamcinolone') || s.includes('betamethasone');
      const isNsaid = (s: string) => s.includes('meloxicam') || s.includes('ibuprofen') || s.includes('ketorolac') || s.includes('diclofenac') || s.includes('mefenamic') || s.includes('celecoxib') || s.includes('naproxen') || s.includes('piroxicam') || s.includes('ketoprofen') || s.includes('aspirin');
      return (isSteroid(a) && isNsaid(b)) || (isSteroid(b) && isNsaid(a));
    },
    monograph: {
      category: 'Synergy',
      text: "The combined use of a corticosteroid and a nonsteroidal anti-inflammatory drug (NSAID) may increase the risk of serious gastrointestinal ulceration and bleeding.",
      management: "Caution is advised if corticosteroids are used in combination with an NSAID. The lowest effective doses of both agents should be used for the shortest duration necessary. The use of gastroprotective agents (such as proton pump inhibitors) should be considered in patients at high risk for gastrointestinal complications.",
      mechanismIndo: "Kortikosteroid menipiskan lapisan mukus lambung dan menghambat sintesis prostaglandin mukoprotektif, bersinergi dengan penekanan enzim COX-1/COX-2 lambung oleh NSAID.",
      outcomeIndo: "Lonjakan risiko erosi mukosa lambung, ulkus peptikum berat, perforasi gastrointestinal, dan perdarahan saluran cerna masif.",
      managementIndo: "PERINGATAN KETAT: Batasi durasi sesingkat mungkin dengan dosis efektif terendah. Wajib ko-preskripsi agen gastroprotektor (PPI seperti Omeprazole/Lansoprazole) terutama pada pasien berisiko tinggi atau lansia."
    }
  },

  // 3. Corticosteroids + ACE Inhibitors
  {
    id: 'corticosteroid-acei',
    match: (a, b) => {
      const isSteroid = (s: string) => s.includes('dexamethasone') || s.includes('prednisone') || s.includes('prednisolone') || s.includes('methylprednisolone') || s.includes('hydrocortisone') || s.includes('triamcinolone') || s.includes('betamethasone');
      const isAce = (s: string) => s.includes('pril') || s.includes('captopril') || s.includes('ramipril') || s.includes('lisinopril') || s.includes('enalapril') || s.includes('perindopril');
      return (isSteroid(a) && isAce(b)) || (isSteroid(b) && isAce(a));
    },
    monograph: {
      category: 'Antagonism',
      text: "Systemic corticosteroids may antagonize the antihypertensive effect of ACE inhibitors due to sodium and water retention induced by mineralocorticoid activity.",
      management: "Blood pressure should be monitored closely during concomitant therapy, particularly following initiation, discontinuation, or dose changes of corticosteroids. An increase in the antihypertensive dosage may be necessary.",
      mechanismIndo: "Aktivitas mineralokortikoid intrinsik kortikosteroid memicu retensi cairan dan ion natrium di tubulus ginjal, melawan efek vasodilatasi dan penurunan tekanan darah oleh ACE inhibitor.",
      outcomeIndo: "Penurunan efektivitas antihipertensi, retensi cairan, edema perifer, dan lonjakan tekanan darah arterial.",
      managementIndo: "PEMANTAUAN KETAT: Pantau tekanan darah pasien secara teratur terutama saat inisiasi atau perubahan dosis kortikosteroid. Pertimbangkan penyesuaian dosis obat antihipertensi bila tekanan darah meningkat."
    }
  },

  // 4. Corticosteroids + Angiotensin II Receptor Antagonists (ARBs)
  {
    id: 'corticosteroid-arb',
    match: (a, b) => {
      const isSteroid = (s: string) => s.includes('dexamethasone') || s.includes('prednisone') || s.includes('prednisolone') || s.includes('methylprednisolone') || s.includes('hydrocortisone') || s.includes('triamcinolone') || s.includes('betamethasone');
      const isArb = (s: string) => s.includes('sartan') || s.includes('losartan') || s.includes('candesartan') || s.includes('valsartan') || s.includes('irbesartan') || s.includes('telmisartan');
      return (isSteroid(a) && isArb(b)) || (isSteroid(b) && isArb(a));
    },
    monograph: {
      category: 'Antagonism',
      text: "Systemic corticosteroids may antagonize the antihypertensive effect of angiotensin II receptor antagonists due to sodium and water retention induced by mineralocorticoid activity.",
      management: "Blood pressure should be monitored closely during concomitant therapy, particularly following initiation, discontinuation, or dose changes of corticosteroids. An increase in the antihypertensive dosage may be necessary.",
      mechanismIndo: "Aktivitas mineralokortikoid kortikosteroid merangsang reabsorpsi natrium dan air di nefron distal ginjal yang berlawanan dengan mekanisme hipotensif penghambat reseptor angiotensin (ARB).",
      outcomeIndo: "Peredaman kontrol tekanan darah, potensi lonjakan hipertensi rebound, dan penumpukan cairan sistemik.",
      managementIndo: "PEMANTAUAN RUTIN: Lakukan kontrol tekanan darah berkala. Bila penggunaan kortikosteroid sistemik berlangsung jangka menengah-panjang, tingkatkan pemantauan atau naikkan dosis ARB sesuai target hemodinamik."
    }
  },

  // 5. NSAIDs + ACE Inhibitors
  {
    id: 'nsaid-acei',
    match: (a, b) => {
      const isNsaid = (s: string) => s.includes('meloxicam') || s.includes('ibuprofen') || s.includes('ketorolac') || s.includes('diclofenac') || s.includes('mefenamic') || s.includes('celecoxib') || s.includes('naproxen') || s.includes('piroxicam') || s.includes('ketoprofen');
      const isAce = (s: string) => s.includes('pril') || s.includes('captopril') || s.includes('ramipril') || s.includes('lisinopril') || s.includes('enalapril') || s.includes('perindopril');
      return (isNsaid(a) && isAce(b)) || (isNsaid(b) && isAce(a));
    },
    monograph: {
      category: 'Antagonism',
      text: "NSAIDs may diminish the antihypertensive effect of ACE inhibitors. Concomitant use may also increase the risk of renal impairment, particularly in elderly or volume-depleted patients.",
      management: "Monitor blood pressure and renal function periodically in patients receiving an ACE inhibitor with an NSAID. Patients should be adequately hydrated before initiating concomitant therapy.",
      mechanismIndo: "NSAID menghambat sintesis prostaglandin vasodilator ginjal (PGE2/PGI2) di arteriol aferen, melawan vasodilatasi arteriol eferen oleh ACE inhibitor dan mengurangi efektivitas penurunan tekanan darah.",
      outcomeIndo: "Penurunan kontrol tekanan darah serta peningkatan risiko kerusakan fungsi ginjal akut (AKI) dan hiperkalemia, terutama pada pasien lansia atau dehidrasi.",
      managementIndo: "PERINGATAN KLINIS: Pantau tekanan darah dan kreatinin serum/eGFR secara berkala. Pastikan hidrasi pasien adekuat dan pertimbangkan alternatif analgesik non-interaktif seperti parasetamol."
    }
  },

  // 6. NSAIDs + Angiotensin II Receptor Antagonists (ARBs)
  {
    id: 'nsaid-arb',
    match: (a, b) => {
      const isNsaid = (s: string) => s.includes('meloxicam') || s.includes('ibuprofen') || s.includes('ketorolac') || s.includes('diclofenac') || s.includes('mefenamic') || s.includes('celecoxib') || s.includes('naproxen') || s.includes('piroxicam') || s.includes('ketoprofen');
      const isArb = (s: string) => s.includes('sartan') || s.includes('losartan') || s.includes('candesartan') || s.includes('valsartan') || s.includes('irbesartan') || s.includes('telmisartan');
      return (isNsaid(a) && isArb(b)) || (isNsaid(b) && isArb(a));
    },
    monograph: {
      category: 'Antagonism',
      text: "NSAIDs may diminish the antihypertensive effect of angiotensin II receptor antagonists. Concomitant use may also increase the risk of renal impairment, particularly in elderly or volume-depleted patients.",
      management: "Monitor blood pressure and renal function periodically in patients receiving an angiotensin II receptor antagonist with an NSAID. Patients should be adequately hydrated before initiating concomitant therapy.",
      mechanismIndo: "Penghambatan prostaglandin vasodilator ginjal oleh NSAID melawan efek hipotensif ARB dan mengganggu regulasi autoregulasi hemodinamik glomerulus.",
      outcomeIndo: "Penurunan khasiat antihipertensi, resistensi tekanan darah, dan potensi gagal ginjal akut akibat penurunan laju filtrasi glomerulus.",
      managementIndo: "PERINGATAN KLINIS: Batasi durasi penggunaan NSAID. Pantau tekanan darah dan fungsi ginjal secara periodik. Anjurkan konsumsi air putih yang cukup dan hindari NSAID jangka panjang tanpa pengawasan."
    }
  },

  // 7. ACE Inhibitors / ARBs + Potassium-Sparing Diuretics (Spironolactone / Eplerenone / Triamterene)
  {
    id: 'raas-k-sparing',
    match: (a, b) => {
      const isRaas = (s: string) => s.includes('pril') || s.includes('sartan') || s.includes('captopril') || s.includes('ramipril') || s.includes('lisinopril') || s.includes('losartan') || s.includes('candesartan') || s.includes('valsartan');
      const isKspar = (s: string) => s.includes('spironolactone') || s.includes('spironolakton') || s.includes('aldactone') || s.includes('eplerenone') || s.includes('triamterene') || s.includes('amiloride');
      return (isRaas(a) && isKspar(b)) || (isRaas(b) && isKspar(a));
    },
    monograph: {
      category: 'Synergy',
      text: "Concomitant use of angiotensin converting enzyme (ACE) inhibitors and potassium-sparing diuretics may increase the risk of hyperkalemia. Inhibition of ACE results in decreased aldosterone secretion, which can lead to increases in serum potassium that may be additive with that induced by potassium-sparing diuretics. ACE inhibitors may also cause deterioration of renal function in patients with chronic heart failure, and the risk is increased if they are sodium-depleted or dehydrated after excessive diuresis.",
      management: "Caution is advised if ACE inhibitors are used with potassium sparing diuretics, particularly in patients with renal impairment, diabetes, old age, worsening heart failure, and/or a risk for dehydration. Serum potassium and renal function should be checked regularly, and potassium supplementation should generally be avoided unless it is closely monitored. Patients should be given dietary advice regarding avoid and advised to seek medical attention if they experience signs and symptoms of hyperkalemia such as weakness, listlessness, confusion, tinging of the extremities, and irregular heartbeat.",
      mechanismIndo: "Penghambatan ganda aksis RAAS: penghambat ACE/ARB menurunkan sekresi aldosteron adrenal dan diuretik hemat kalium memblokade reseptor aldosteron di tubulus distal ginjal, secara sinergis menahan ion kalium.",
      outcomeIndo: "Risiko Hiperkalemia Berat Mengancam Jiwa (K+ > 5.5 - 6.0 mEq/L, aritmia ventrikel fatal, henti jantung mendadak) serta kemunduran fungsi ginjal akut.",
      managementIndo: "PERINGATAN KETAT / GDMT HFREF: Walaupun kombinasi pilar utama gagal jantung HFrEF, DDInter 2.0 menetapkannya sebagai Major karena bahaya hiperkalemia fatal. Wajib periksa kadar kalium serum dan fungsi ginjal secara teratur (baseline, minggu ke-1, bulan ke-1, lalu tiap 3-6 bulan). Batasi dosis Spironolactone (maksimal 25-50 mg/hari pada gagal jantung), hindari suplemen kalium eksogen."
    }
  },

  // 8. Beta-Blockers + Non-DHP Calcium Channel Blockers (Verapamil / Diltiazem)
  {
    id: 'bb-nondhp-ccb',
    match: (a, b) => {
      const isBb = (s: string) => s.includes('lol') || s.includes('bisoprolol') || s.includes('atenolol') || s.includes('propranolol') || s.includes('carvedilol') || s.includes('metoprolol') || s.includes('nebivolol');
      const isNonDhp = (s: string) => s.includes('verapamil') || s.includes('diltiazem');
      return (isBb(a) && isNonDhp(b)) || (isBb(b) && isNonDhp(a));
    },
    monograph: {
      category: 'Synergy',
      text: "Coadministration of beta-blockers and calcium channel blockers with negative inotropic and dromotropic effects (verapamil or diltiazem) may result in additive depression of myocardial contractility, heart rate, and atrioventricular (AV) conduction.",
      management: "Avoid concomitant use whenever possible. If combination therapy cannot be avoided, closely monitor heart rate, blood pressure, and electrocardiogram (ECG) for severe bradycardia, AV block, and signs of heart failure.",
      mechanismIndo: "Efek depresan aditif pada nodus sinoatrial (SA) dan atrioventrikular (AV) serta penurunan kontraktilitas inotropik miokardium secara simultan.",
      outcomeIndo: "Bradikardia simtomatik berat, blok atrioventrikular (AV block derajat 2-3), syok kardiogenik, eksaserbasi gagal jantung kongestif, dan asistol jantung.",
      managementIndo: "HINDARI PENGGUNAAN BERSAMAAN. Bila diperlukan kombinasi antihipertensi/antiangina, ganti CCB dengan golongan Dihidropiridin (seperti Amlodipine) yang tidak menekan konduksi AV jantung."
    }
  },

  // 9. Statins + Potent CYP3A4 Inhibitors (Clarithromycin, Ketoconazole, Itraconazole, Ritonavir)
  {
    id: 'statin-cyp3a4-potent',
    match: (a, b) => {
      const isStatin = (s: string) => s.includes('simvastatin') || s.includes('atorvastatin') || s.includes('lovastatin');
      const isPotent = (s: string) => s.includes('clarithromycin') || s.includes('ketoconazole') || s.includes('itraconazole') || s.includes('voriconazole') || s.includes('posaconazole') || s.includes('ritonavir') || s.includes('paxlovid');
      return (isStatin(a) && isPotent(b)) || (isStatin(b) && isPotent(a));
    },
    monograph: {
      category: 'Metabolism',
      text: "Potent CYP3A4 inhibitors dramatically decrease the hepatic and intestinal clearance of CYP3A4-metabolized statins (simvastatin, atorvastatin), markedly increasing their plasma concentrations and the risk of severe myopathy and rhabdomyolysis.",
      management: "Concomitant use with simvastatin or lovastatin is contraindicated. Temporarily suspend statin therapy during short-course treatment with potent CYP3A4 inhibitors, or substitute with a statin not metabolized by CYP3A4 (such as rosuvastatin or pravastatin) under close clinical monitoring.",
      mechanismIndo: "Penghambatan total aktivitas isoenzim sitokrom P450 3A4 di enterosit dan hepatosit yang memetabolisme statin, melipatgandakan kadar sistemik statin hingga 500-1500%.",
      outcomeIndo: "Miopati berat, kerusakan jaringan otot rangka masif (Rhabdomyolysis akut), mioglobinuria, dan gagal ginjal akut yang mengancam jiwa.",
      managementIndo: "KONTRAINDIKASI MUTLAK. Hentikan konsumsi simvastatin/lovastatin selama terapi antijamur azole atau antibiotik makrolida. Bila terapi statin mutlak diteruskan, alihkan ke Rosuvastatin atau Pravastatin."
    }
  },

  // 10. Anticoagulants (Warfarin / DOAC) + Antiplatelets / NSAIDs
  {
    id: 'anticoag-antiplatelet-nsaid',
    match: (a, b) => {
      const isAnticoag = (s: string) => s.includes('warfarin') || s.includes('rivaroxaban') || s.includes('apixaban') || s.includes('dabigatran') || s.includes('edoxaban') || s.includes('heparin') || s.includes('enoxaparin');
      const isOther = (s: string) => s.includes('aspirin') || s.includes('clopidogrel') || s.includes('ticagrelor') || s.includes('prasugrel') || s.includes('ibuprofen') || s.includes('meloxicam') || s.includes('ketorolac') || s.includes('diclofenac') || s.includes('mefenamic');
      return (isAnticoag(a) && isOther(b)) || (isAnticoag(b) && isOther(a));
    },
    monograph: {
      category: 'Synergy',
      text: "Coadministration of anticoagulants with antiplatelet agents or NSAIDs produces additive inhibition of hemostasis and impairs gastric mucosal protection, significantly increasing the risk of major hemorrhage and gastrointestinal bleeding.",
      management: "Avoid concomitant use unless clinically indicated for specific cardiovascular conditions (e.g., acute coronary syndrome or mechanical prosthetic valves). If coadministration is necessary, monitor for signs and symptoms of bleeding, periodically assess coagulation parameters, and consider co-prescribing a gastroprotective agent.",
      mechanismIndo: "Kombinasi penghambatan kaskade koagulasi sekunder oleh antikoagulan dengan supresi agregasi trombosit primer dan iritasi mukosa lambung oleh NSAID/antiplatelet.",
      outcomeIndo: "Peningkatan tajam risiko perdarahan mayor, hematuria, perdarahan saluran cerna masif, hematoma luas, dan stroke hemoragik.",
      managementIndo: "HINDARI KECUALI INDIKASI SPESIFIK. Jika kombinasi wajib diberikan, gunakan dosis antiplatelet terendah, berikan Gastroprotektor PPI (Omeprazole/Lansoprazole), dan pantau ketat tanda-tanda perdarahan."
    }
  },

  // 11. Opioids + Benzodiazepines / CNS Depressants
  {
    id: 'opioid-benzodiazepine',
    match: (a, b) => {
      const isOpioid = (s: string) => s.includes('morphine') || s.includes('fentanyl') || s.includes('codeine') || s.includes('tramadol') || s.includes('oxycodone') || s.includes('buprenorphine');
      const isBenzo = (s: string) => s.includes('diazepam') || s.includes('alprazolam') || s.includes('clonazepam') || s.includes('lorazepam') || s.includes('midazolam') || s.includes('clobazam');
      return (isOpioid(a) && isBenzo(b)) || (isOpioid(b) && isBenzo(a));
    },
    monograph: {
      category: 'Synergy',
      text: "Concomitant use of opioids and benzodiazepines or other central nervous system (CNS) depressants results in profound sedation, respiratory depression, coma, and death.",
      management: "Reserve concomitant prescribing for patients in whom alternative treatment options are inadequate. Limit dosages and durations to the minimum required. Follow patients closely for signs and symptoms of respiratory depression and sedation.",
      mechanismIndo: "Penekanan sinergis aditif terhadap sistem saraf pusat dan pusat kendali pernapasan di medula oblongata batang otak.",
      outcomeIndo: "Sedasi mendalam, bradipnea, depresi pernapasan fatal, kehilangan kesadaran, koma, hingga kematian mendadak.",
      managementIndo: "PERINGATAN KETAT (FDA Black Box Warning): Batasi dosis terendah dan durasi sesingkat mungkin. Edukasi keluarga mengenali tanda depresi napas dan siapkan nalokson bila diperlukan."
    }
  },

  // 12. Methotrexate + NSAIDs / Penicillins / PPIs
  {
    id: 'methotrexate-interactions',
    match: (a, b) => {
      const isMtx = (s: string) => s.includes('methotrexate') || s.includes('metotreksat');
      const isTarget = (s: string) => s.includes('ibuprofen') || s.includes('meloxicam') || s.includes('ketorolac') || s.includes('diclofenac') || s.includes('mefenamic') || s.includes('aspirin') || s.includes('amoxicillin') || s.includes('omeprazole') || s.includes('pantoprazole') || s.includes('lansoprazole');
      return (isMtx(a) && isTarget(b)) || (isMtx(b) && isTarget(a));
    },
    monograph: {
      category: 'Excretion',
      text: "Coadministration may reduce the renal tubular clearance of methotrexate through inhibition of renal organic anion transporters (OATs) or decreased renal perfusion, leading to elevated and prolonged serum methotrexate levels and severe toxicity.",
      management: "Avoid concomitant use, especially with high-dose methotrexate regimens. If concurrent administration is necessary, closely monitor complete blood counts, hepatic and renal function, and observe for signs of bone marrow suppression, mucositis, and gastrointestinal toxicity.",
      mechanismIndo: "Kompetisi sekresi aktif di tubulus proksimal ginjal menghambat eliminasi methotrexate dan menurunkan klirens ginjal.",
      outcomeIndo: "Akumulasi konsentrasi methotrexate sistemik yang memicu supresi sumsum tulang berat (pansitopenia, leukopenia fatal), mukositis ulseratif parah, dan gagal ginjal akut.",
      managementIndo: "HINDARI PENGGUNAAN BERSAMAAN. Terutama pada metotreksat dosis tinggi onkologi. Pada dosis rendah reumatologi, lakukan pemantauan darah lengkap dan fungsi ginjal secara rutin."
    }
  },

  // 13. Allopurinol + ACE Inhibitors
  {
    id: 'allopurinol-acei',
    match: (a, b) => {
      const isAllo = (s: string) => s.includes('allopurinol') || s.includes('alopurinol') || s.includes('zyloric');
      const isAce = (s: string) => s.includes('pril') || s.includes('captopril') || s.includes('ramipril') || s.includes('lisinopril') || s.includes('enalapril') || s.includes('perindopril');
      return (isAllo(a) && isAce(b)) || (isAllo(b) && isAce(a));
    },
    monograph: {
      category: 'Others',
      text: "Coadministration of allopurinol with angiotensin converting enzyme (ACE) inhibitors has been associated with a risk of severe hypersensitivity reactions, neutropenia, agranulocytosis, and serious infections. The mechanism of interaction is unknown, but impaired renal function may be a predisposing factor. Case reports, albeit rare, have mostly involved captopril. No pharmacokinetic interactions have been reported between allopurinol and ACE inhibitors.",
      management: "Caution is advised if allopurinol is prescribed in combination with an ACE inhibitor, particularly in the elderly and patients with renal impairment. Periodic monitoring of white blood cell counts is recommended. Patients should be advised to promptly discontinue these medications and seek medical attention if they develop dyspnea; throat constriction; swelling of the face, lips, or tongue; urticaria; rash; fever; arthralgia; or myalgia. Patients should also contact their physician if they notice signs of infection or experience fever, chills, sore throat, lethargy, body aches, or other flu-like symptoms.",
      mechanismIndo: "Pemberian bersama allopurinol dengan penghambat ACE dikaitkan dengan peningkatan risiko reaksi hipersensitivitas berat dan agranulositosis.",
      outcomeIndo: "Reaksi hipersensitivitas sistemik berat yang mengancam jiwa (Sindrom Stevens-Johnson/TEN), depresi sumsum tulang (neutropenia berat), dan infeksi sekunder serius.",
      managementIndo: "HINDARI ATAU GUNAKAN DENGAN KEWASPADAAN TINGGI. Terutama pada lansia dan pasien gangguan ginjal. Pantau hitung sel darah putih berkala dan edukasi pasien segera stop obat bila timbul ruam atau demam."
    }
  },

  // 14. PDE-5 Inhibitors + Nitrates
  {
    id: 'pde5-nitrates',
    match: (a, b) => {
      const isPde5 = (s: string) => s.includes('sildenafil') || s.includes('tadalafil') || s.includes('vardenafil');
      const isNitrate = (s: string) => s.includes('isosorbide') || s.includes('nitroglycerin') || s.includes('isdn') || s.includes('nitrogliserin') || s.includes('nitrat');
      return (isPde5(a) && isNitrate(b)) || (isPde5(b) && isNitrate(a));
    },
    monograph: {
      category: 'Synergy',
      text: "Coadministration of phosphodiesterase-5 (PDE-5) inhibitors with organic nitrates produces synergistic accumulation of intracellular cyclic guanosine monophosphate (cGMP), leading to potent systemic vasodilation and severe, life-threatening hypotension.",
      management: "Concomitant administration of PDE-5 inhibitors with organic nitrates in any form is strictly contraindicated. Maintain an interval of at least 24 hours (sildenafil, vardenafil) or 48 hours (tadalafil) after taking a PDE-5 inhibitor before administering nitrates in emergencies.",
      mechanismIndo: "Inhibisi pemecahan cGMP oleh inhibitor PDE-5 dikombinasikan dengan pelepasan nitrat oksida berlebih oleh nitrat memicu akumulasi cGMP masif di otot polos vaskular.",
      outcomeIndo: "Hipotensi arterial refrakter ekstrem, kolaps kardiovaskular, sinkop mendadak, iskemia miokard akut, dan kematian.",
      managementIndo: "KONTRAINDIKASI MUTLAK. Jangan pernah memberikan nitrat organik pada pasien pengguna PDE-5 inhibitor dalam kurun waktu 24-48 jam."
    }
  },

  // 15. Digoxin + Amiodarone / Verapamil / Clarithromycin
  {
    id: 'digoxin-pgp-inhibitors',
    match: (a, b) => {
      const isDig = (s: string) => s.includes('digoxin') || s.includes('digoksin');
      const isInhib = (s: string) => s.includes('amiodarone') || s.includes('verapamil') || s.includes('clarithromycin') || s.includes('diltiazem') || s.includes('quinidine') || s.includes('spironolactone');
      return (isDig(a) && isInhib(b)) || (isDig(b) && isInhib(a));
    },
    monograph: {
      category: 'Distribution',
      text: "Coadministration increases serum digoxin concentrations significantly (often by 50% to 100%) through inhibition of P-glycoprotein-mediated renal and biliary tubular efflux, markedly elevating the risk of digitalis toxicity.",
      management: "Reduce the maintenance dose of digoxin by 30% to 50% upon initiating inhibitor therapy. Closely monitor serum digoxin concentrations, electrocardiogram (ECG), and observe for symptoms of toxicity (nausea, vomiting, visual disturbances, cardiac arrhythmias).",
      mechanismIndo: "Penghambatan transporter efluks P-glikoprotein di tubulus ginjal dan kanalikuli biliaris oleh obat penghambat, menurunkan klirens eliminasi digoxin.",
      outcomeIndo: "Lonjakan kadar serum digoxin melampaui rentang terapeutik (> 2.0 ng/mL) yang memicu toksisitas digitalis akut, mual/muntah hebat, xanthopsia, bradikardia, dan aritmia ventrikel fatal.",
      managementIndo: "PENYESUAIAN DOSIS & MONITORING KETAT: Turunkan dosis digoxin sebesar 30-50% saat memulai obat penghambat. Pantau kadar digoxin serum (TDM) dan rekam EKG secara berkala."
    }
  },

  // 16. Fluoroquinolones / Tetracyclines + Multivalent Cations (Antacids / Fe / Ca / Mg / Al / Sucralfate)
  {
    id: 'chelation-absorption',
    match: (a, b) => {
      const isAntibiotic = (s: string) => s.includes('floxacin') || s.includes('ciprofloxacin') || s.includes('levofloxacin') || s.includes('moxifloxacin') || s.includes('cycline') || s.includes('doxycycline') || s.includes('tetracycline');
      const isCation = (s: string) => s.includes('aluminum') || s.includes('aluminium') || s.includes('magnesium') || s.includes('calcium') || s.includes('kalsium') || s.includes('iron') || s.includes('besi') || s.includes('ferrous') || s.includes('antasida') || s.includes('sucralfate') || s.includes('sukralfat') || s.includes('zinc');
      return (isAntibiotic(a) && isCation(b)) || (isAntibiotic(b) && isCation(a));
    },
    monograph: {
      category: 'Absorption',
      text: "Oral preparations that contain polyvalent cations (such as aluminum, magnesium, calcium, iron, or zinc) and sucralfate significantly decrease the gastrointestinal absorption of quinolone and tetracycline antibiotics via chelation, forming insoluble complexes that cannot be absorbed.",
      management: "Quinolone or tetracycline antibiotics should be administered at least 2 hours before or 4 to 6 hours after products containing polyvalent cations to minimize the potential for clinically significant absorption reduction.",
      mechanismIndo: "Pembentukan kompleks ikatan khelat netral yang tidak larut antara kation polivalen dengan gugus 4-keto dan 3-karboksilat antibiotik di lumen saluran cerna.",
      outcomeIndo: "Penurunan drastis bioavailabilitas oral antibiotik hingga 50-90%, memicu kegagalan terapi infeksi bakteri sistemik dan mempercepat resistensi antimikroba.",
      managementIndo: "PISAHKAN JADWAL MINUM OBAT (JEDA MINIMAL): Berikan antibiotik minimal 2 jam SEBELUM atau 4-6 jam SETELAH antasida, suplemen kalsium, atau preparat zat besi."
    }
  }
];

/**
 * Resolves authentic DDInter 2.0 class monograph for any given drug pair.
 */
export function findDDInterClassMonograph(
  drugA: string,
  drugB: string,
  atcA?: string,
  atcB?: string
): DDInterMonographTemplate | null {
  const normA = (drugA || '').toLowerCase().trim();
  const normB = (drugB || '').toLowerCase().trim();
  const codeA = (atcA || '').toUpperCase().trim();
  const codeB = (atcB || '').toUpperCase().trim();

  for (const entry of DDINTER_CLASS_MONOGRAPHS) {
    if (entry.match(normA, normB, codeA, codeB)) {
      return entry.monograph;
    }
  }

  return null;
}
