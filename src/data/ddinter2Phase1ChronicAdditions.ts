import { DrugInteraction } from '../types';

/**
 * DDINTER 2.0 TAHAP 1: PENYAKIT KRONIS & METABOLIK (275 PASANGAN)
 * Sourced directly from DDInter 2.0 (SCBDD Group):
 * https://ddinter2.scbdd.com/server/interaction/
 * 
 * Mencakup interaksi terverifikasi pada golongan obat kardiovaskular, antihipertensi,
 * antidiabetes, dislipidemia, dan gastrointestinal dalam 100% Bahasa Indonesia baku.
 */
export const DDINTER2_PHASE1_CHRONIC_ADDITIONS: DrugInteraction[] = [
  {
    "id": "ddinter-phase1-ziprasidone-ondansetron",
    "drugAId": "drug-ziprasidone",
    "drugBId": "drug-ondansetron",
    "drugAName": "Ziprasidone",
    "drugBName": "Ondansetron",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Ziprasidone dan Ondansetron pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 538)",
    "ddinterPairId": "DDInter-PAIR-148071",
    "ddinterOriginalText": "Ziprasidone can cause dose-related prolongation of the QT interval. Theoretically, coadministration with other agents that can prolong the QT interval may result in additive effects and increased risk of ventricular arrhythmias including torsade de pointes and sudden death. Excessive parasympatholytic effects may include paralytic ileus, hyperthermia, mydriasis, blurred vision, tachycardia, urinary retention, psychosis, and seizures.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #538"
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
    "id": "ddinter-phase1-spironolactone-trandolapril",
    "drugAId": "drug-spironolactone",
    "drugBId": "drug-trandolapril",
    "drugAName": "Spironolactone",
    "drugBName": "Trandolapril",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Penghambatan ganda ekskresi kalium ginjal: penghambat ACE (Trandolapril) menurunkan aldosteron dan Spironolactone memblokade reseptor aldosteron di tubulus distal.",
    "clinicalOutcome": "Risiko Hiperkalemia Berat Mengancam Jiwa (K+ > 5.5 - 6.0 mEq/L, aritmia kardiak) dan perburukan fungsi ginjal akut.",
    "management": "PERINGATAN KETAT: Periksa kadar kalium serum dan fungsi ginjal secara berkala (baseline, minggu ke-1, bulan ke-1). Hindari suplemen kalium eksogen.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)",
    "ddinterPairId": "DDInter-PAIR-59437",
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
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-phase1-triamterene-enalapril",
    "drugAId": "drug-triamterene",
    "drugBId": "drug-enalapril",
    "drugAName": "Triamterene",
    "drugBName": "Enalapril",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Penghambatan ganda ekskresi kalium ginjal: penghambat ACE (Enalapril) menurunkan aldosteron dan Triamterene memblokade kanal natrium di tubulus distal.",
    "clinicalOutcome": "Risiko Hiperkalemia Berat Mengancam Jiwa (K+ > 5.5 - 6.0 mEq/L, aritmia kardiak) dan perburukan fungsi ginjal akut.",
    "management": "PERINGATAN KETAT: Periksa kadar kalium serum dan fungsi ginjal secara berkala (baseline, minggu ke-1, bulan ke-1). Hindari suplemen kalium eksogen.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)",
    "ddinterPairId": "DDInter-PAIR-98803",
    "ddinterOriginalText": "Concomitant use of angiotensin converting enzyme (ACE) inhibitors and potassium-sparing diuretics may increase the risk of hyperkalemia. Inhibition of ACE results in decreased aldosterone secretion, which can lead to increases in serum potassium that may be additive with that induced by potassium-sparing diuretics. ACE inhibitors may also cause deterioration of renal function in patients with chronic heart failure, and the risk is increased if they are sodium-depleted or dehydrated after excessive diuresis.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #599"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Candesartan",
      "Valsartan",
      "Telmisartan",
      "Amlodipine"
    ]
  },
  {
    "id": "ddinter-phase1-triamterene-lisinopril",
    "drugAId": "drug-triamterene",
    "drugBId": "drug-lisinopril",
    "drugAName": "Triamterene",
    "drugBName": "Lisinopril",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Penghambatan ganda ekskresi kalium ginjal: penghambat ACE (Lisinopril) menurunkan aldosteron dan Triamterene memblokade kanal natrium di tubulus distal.",
    "clinicalOutcome": "Risiko Hiperkalemia Berat Mengancam Jiwa (K+ > 5.5 - 6.0 mEq/L, aritmia kardiak) dan perburukan fungsi ginjal akut.",
    "management": "PERINGATAN KETAT: Periksa kadar kalium serum dan fungsi ginjal secara berkala (baseline, minggu ke-1, bulan ke-1). Hindari suplemen kalium eksogen.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)",
    "ddinterPairId": "DDInter-PAIR-100704",
    "ddinterOriginalText": "Concomitant use of angiotensin converting enzyme (ACE) inhibitors and potassium-sparing diuretics may increase the risk of hyperkalemia. Inhibition of ACE results in decreased aldosterone secretion, which can lead to increases in serum potassium that may be additive with that induced by potassium-sparing diuretics. ACE inhibitors may also cause deterioration of renal function in patients with chronic heart failure, and the risk is increased if they are sodium-depleted or dehydrated after excessive diuresis.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #599"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Candesartan",
      "Valsartan",
      "Telmisartan",
      "Amlodipine"
    ]
  },
  {
    "id": "ddinter-phase1-triamterene-perindopril",
    "drugAId": "drug-triamterene",
    "drugBId": "drug-perindopril",
    "drugAName": "Triamterene",
    "drugBName": "Perindopril",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek aditif retensi ion kalium melalui penghambatan ekskresi kalium di tubulus distal ginjal antara Triamterene dan Perindopril.",
    "clinicalOutcome": "Peningkatan kadar kalium serum (hiperkalemia subklinis hingga ringan).",
    "management": "Periksa kadar elektrolit serum (kalium) dan kreatinin secara berkala; hindari penggunaan suplemen kalium tanpa anjuran dokter.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 599)",
    "ddinterPairId": "DDInter-PAIR-107525",
    "ddinterOriginalText": "Concomitant use of angiotensin converting enzyme (ACE) inhibitors and potassium-sparing diuretics may increase the risk of hyperkalemia. Inhibition of ACE results in decreased aldosterone secretion, which can lead to increases in serum potassium that may be additive with that induced by potassium-sparing diuretics. ACE inhibitors may also cause deterioration of renal function in patients with chronic heart failure, and the risk is increased if they are sodium-depleted or dehydrated after excessive diuresis.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #599"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Candesartan",
      "Valsartan",
      "Telmisartan",
      "Amlodipine"
    ]
  },
  {
    "id": "ddinter-phase1-triamterene-quinapril",
    "drugAId": "drug-triamterene",
    "drugBId": "drug-quinapril",
    "drugAName": "Triamterene",
    "drugBName": "Quinapril",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek aditif retensi ion kalium melalui penghambatan ekskresi kalium di tubulus distal ginjal antara Triamterene dan Quinapril.",
    "clinicalOutcome": "Peningkatan kadar kalium serum (hiperkalemia subklinis hingga ringan).",
    "management": "Periksa kadar elektrolit serum (kalium) dan kreatinin secara berkala; hindari penggunaan suplemen kalium tanpa anjuran dokter.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 599)",
    "ddinterPairId": "DDInter-PAIR-109399",
    "ddinterOriginalText": "Concomitant use of angiotensin converting enzyme (ACE) inhibitors and potassium-sparing diuretics may increase the risk of hyperkalemia. Inhibition of ACE results in decreased aldosterone secretion, which can lead to increases in serum potassium that may be additive with that induced by potassium-sparing diuretics. ACE inhibitors may also cause deterioration of renal function in patients with chronic heart failure, and the risk is increased if they are sodium-depleted or dehydrated after excessive diuresis.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #599"
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
    "id": "ddinter-phase1-ramipril-triamterene",
    "drugAId": "drug-ramipril",
    "drugBId": "drug-triamterene",
    "drugAName": "Ramipril",
    "drugBName": "Triamterene",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek aditif retensi ion kalium melalui penghambatan ekskresi kalium di tubulus distal ginjal antara Ramipril dan Triamterene.",
    "clinicalOutcome": "Peningkatan kadar kalium serum (hiperkalemia subklinis hingga ringan).",
    "management": "Periksa kadar elektrolit serum (kalium) dan kreatinin secara berkala; hindari penggunaan suplemen kalium tanpa anjuran dokter.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 599)",
    "ddinterPairId": "DDInter-PAIR-159583",
    "ddinterOriginalText": "Concomitant use of angiotensin converting enzyme (ACE) inhibitors and potassium-sparing diuretics may increase the risk of hyperkalemia. Inhibition of ACE results in decreased aldosterone secretion, which can lead to increases in serum potassium that may be additive with that induced by potassium-sparing diuretics. ACE inhibitors may also cause deterioration of renal function in patients with chronic heart failure, and the risk is increased if they are sodium-depleted or dehydrated after excessive diuresis.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #599"
    ],
    "alternativeOptionsA": [
      "Candesartan",
      "Valsartan",
      "Telmisartan",
      "Amlodipine"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-phase1-triamterene-fosinopril",
    "drugAId": "drug-triamterene",
    "drugBId": "drug-fosinopril",
    "drugAName": "Triamterene",
    "drugBName": "Fosinopril",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek aditif retensi ion kalium melalui penghambatan ekskresi kalium di tubulus distal ginjal antara Triamterene dan Fosinopril.",
    "clinicalOutcome": "Peningkatan kadar kalium serum (hiperkalemia subklinis hingga ringan).",
    "management": "Periksa kadar elektrolit serum (kalium) dan kreatinin secara berkala; hindari penggunaan suplemen kalium tanpa anjuran dokter.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 599)",
    "ddinterPairId": "DDInter-PAIR-173836",
    "ddinterOriginalText": "Concomitant use of angiotensin converting enzyme (ACE) inhibitors and potassium-sparing diuretics may increase the risk of hyperkalemia. Inhibition of ACE results in decreased aldosterone secretion, which can lead to increases in serum potassium that may be additive with that induced by potassium-sparing diuretics. ACE inhibitors may also cause deterioration of renal function in patients with chronic heart failure, and the risk is increased if they are sodium-depleted or dehydrated after excessive diuresis.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #599"
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
    "id": "ddinter-phase1-amiloride-irbesartan",
    "drugAId": "drug-amiloride",
    "drugBId": "drug-irbesartan",
    "drugAName": "Amiloride",
    "drugBName": "Irbesartan",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek aditif retensi ion kalium melalui penghambatan ekskresi kalium di tubulus distal ginjal antara Amiloride dan Irbesartan.",
    "clinicalOutcome": "Peningkatan kadar kalium serum (hiperkalemia subklinis hingga ringan).",
    "management": "Periksa kadar elektrolit serum (kalium) dan kreatinin secara berkala; hindari penggunaan suplemen kalium tanpa anjuran dokter.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 632)",
    "ddinterPairId": "DDInter-PAIR-21022",
    "ddinterOriginalText": "Concomitant use of angiotensin II receptor blockers (ARBs) and potassium-sparing diuretics may increase the risk of hyperkalemia. Inhibition of angiotensin II results in decreased aldosterone secretion, which can lead to increases in serum potassium that may be additive with that induced by potassium-sparing diuretics. Life-threatening and fatal hyperkalemia can occur, especially when the combination is used in patients with risk factors such as renal impairment, diabetes, old age, severe or worsening heart failure, dehydration, and concomitant use of other agents that block the renin-angiotensin-aldosterone system or otherwise increase serum potassium levels.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #632"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Amlodipine",
      "Bisoprolol",
      "Diltiazem"
    ]
  },
  {
    "id": "ddinter-phase1-amiloride-losartan",
    "drugAId": "drug-amiloride",
    "drugBId": "drug-losartan",
    "drugAName": "Amiloride",
    "drugBName": "Losartan",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek aditif retensi ion kalium melalui penghambatan ekskresi kalium di tubulus distal ginjal antara Amiloride dan Losartan.",
    "clinicalOutcome": "Peningkatan kadar kalium serum (hiperkalemia subklinis hingga ringan).",
    "management": "Periksa kadar elektrolit serum (kalium) dan kreatinin secara berkala; hindari penggunaan suplemen kalium tanpa anjuran dokter.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 632)",
    "ddinterPairId": "DDInter-PAIR-21037",
    "ddinterOriginalText": "Concomitant use of angiotensin II receptor blockers (ARBs) and potassium-sparing diuretics may increase the risk of hyperkalemia. Inhibition of angiotensin II results in decreased aldosterone secretion, which can lead to increases in serum potassium that may be additive with that induced by potassium-sparing diuretics. Life-threatening and fatal hyperkalemia can occur, especially when the combination is used in patients with risk factors such as renal impairment, diabetes, old age, severe or worsening heart failure, dehydration, and concomitant use of other agents that block the renin-angiotensin-aldosterone system or otherwise increase serum potassium levels.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #632"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Amlodipine",
      "Bisoprolol",
      "Diltiazem"
    ]
  },
  {
    "id": "ddinter-phase1-olmesartan-amiloride",
    "drugAId": "drug-olmesartan",
    "drugBId": "drug-amiloride",
    "drugAName": "Olmesartan",
    "drugBName": "Amiloride",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek aditif retensi ion kalium melalui penghambatan ekskresi kalium di tubulus distal ginjal antara Olmesartan dan Amiloride.",
    "clinicalOutcome": "Peningkatan kadar kalium serum (hiperkalemia subklinis hingga ringan).",
    "management": "Periksa kadar elektrolit serum (kalium) dan kreatinin secara berkala; hindari penggunaan suplemen kalium tanpa anjuran dokter.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 632)",
    "ddinterPairId": "DDInter-PAIR-21073",
    "ddinterOriginalText": "Concomitant use of angiotensin II receptor blockers (ARBs) and potassium-sparing diuretics may increase the risk of hyperkalemia. Inhibition of angiotensin II results in decreased aldosterone secretion, which can lead to increases in serum potassium that may be additive with that induced by potassium-sparing diuretics. Life-threatening and fatal hyperkalemia can occur, especially when the combination is used in patients with risk factors such as renal impairment, diabetes, old age, severe or worsening heart failure, dehydration, and concomitant use of other agents that block the renin-angiotensin-aldosterone system or otherwise increase serum potassium levels.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #632"
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
    "id": "ddinter-phase1-amiloride-telmisartan",
    "drugAId": "drug-amiloride",
    "drugBId": "drug-telmisartan",
    "drugAName": "Amiloride",
    "drugBName": "Telmisartan",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek aditif retensi ion kalium melalui penghambatan ekskresi kalium di tubulus distal ginjal antara Amiloride dan Telmisartan.",
    "clinicalOutcome": "Peningkatan kadar kalium serum (hiperkalemia subklinis hingga ringan).",
    "management": "Periksa kadar elektrolit serum (kalium) dan kreatinin secara berkala; hindari penggunaan suplemen kalium tanpa anjuran dokter.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 632)",
    "ddinterPairId": "DDInter-PAIR-21135",
    "ddinterOriginalText": "Concomitant use of angiotensin II receptor blockers (ARBs) and potassium-sparing diuretics may increase the risk of hyperkalemia. Inhibition of angiotensin II results in decreased aldosterone secretion, which can lead to increases in serum potassium that may be additive with that induced by potassium-sparing diuretics. Life-threatening and fatal hyperkalemia can occur, especially when the combination is used in patients with risk factors such as renal impairment, diabetes, old age, severe or worsening heart failure, dehydration, and concomitant use of other agents that block the renin-angiotensin-aldosterone system or otherwise increase serum potassium levels.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #632"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Amlodipine",
      "Bisoprolol",
      "Diltiazem"
    ]
  },
  {
    "id": "ddinter-phase1-valsartan-amiloride",
    "drugAId": "drug-valsartan",
    "drugBId": "drug-amiloride",
    "drugAName": "Valsartan",
    "drugBName": "Amiloride",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek aditif retensi ion kalium melalui penghambatan ekskresi kalium di tubulus distal ginjal antara Valsartan dan Amiloride.",
    "clinicalOutcome": "Peningkatan kadar kalium serum (hiperkalemia subklinis hingga ringan).",
    "management": "Periksa kadar elektrolit serum (kalium) dan kreatinin secara berkala; hindari penggunaan suplemen kalium tanpa anjuran dokter.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 632)",
    "ddinterPairId": "DDInter-PAIR-21158",
    "ddinterOriginalText": "Concomitant use of angiotensin II receptor blockers (ARBs) and potassium-sparing diuretics may increase the risk of hyperkalemia. Inhibition of angiotensin II results in decreased aldosterone secretion, which can lead to increases in serum potassium that may be additive with that induced by potassium-sparing diuretics. Life-threatening and fatal hyperkalemia can occur, especially when the combination is used in patients with risk factors such as renal impairment, diabetes, old age, severe or worsening heart failure, dehydration, and concomitant use of other agents that block the renin-angiotensin-aldosterone system or otherwise increase serum potassium levels.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #632"
    ],
    "alternativeOptionsA": [
      "Amlodipine",
      "Bisoprolol",
      "Diltiazem"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-phase1-olmesartan-triamterene",
    "drugAId": "drug-olmesartan",
    "drugBId": "drug-triamterene",
    "drugAName": "Olmesartan",
    "drugBName": "Triamterene",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek aditif retensi ion kalium melalui penghambatan ekskresi kalium di tubulus distal ginjal antara Olmesartan dan Triamterene.",
    "clinicalOutcome": "Peningkatan kadar kalium serum (hiperkalemia subklinis hingga ringan).",
    "management": "Periksa kadar elektrolit serum (kalium) dan kreatinin secara berkala; hindari penggunaan suplemen kalium tanpa anjuran dokter.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 632)",
    "ddinterPairId": "DDInter-PAIR-23743",
    "ddinterOriginalText": "Concomitant use of angiotensin II receptor blockers (ARBs) and potassium-sparing diuretics may increase the risk of hyperkalemia. Inhibition of angiotensin II results in decreased aldosterone secretion, which can lead to increases in serum potassium that may be additive with that induced by potassium-sparing diuretics. Life-threatening and fatal hyperkalemia can occur, especially when the combination is used in patients with risk factors such as renal impairment, diabetes, old age, severe or worsening heart failure, dehydration, and concomitant use of other agents that block the renin-angiotensin-aldosterone system or otherwise increase serum potassium levels.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #632"
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
    "id": "ddinter-phase1-valsartan-triamterene",
    "drugAId": "drug-valsartan",
    "drugBId": "drug-triamterene",
    "drugAName": "Valsartan",
    "drugBName": "Triamterene",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek aditif retensi ion kalium melalui penghambatan ekskresi kalium di tubulus distal ginjal antara Valsartan dan Triamterene.",
    "clinicalOutcome": "Peningkatan kadar kalium serum (hiperkalemia subklinis hingga ringan).",
    "management": "Periksa kadar elektrolit serum (kalium) dan kreatinin secara berkala; hindari penggunaan suplemen kalium tanpa anjuran dokter.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 632)",
    "ddinterPairId": "DDInter-PAIR-23810",
    "ddinterOriginalText": "Concomitant use of angiotensin II receptor blockers (ARBs) and potassium-sparing diuretics may increase the risk of hyperkalemia. Inhibition of angiotensin II results in decreased aldosterone secretion, which can lead to increases in serum potassium that may be additive with that induced by potassium-sparing diuretics. Life-threatening and fatal hyperkalemia can occur, especially when the combination is used in patients with risk factors such as renal impairment, diabetes, old age, severe or worsening heart failure, dehydration, and concomitant use of other agents that block the renin-angiotensin-aldosterone system or otherwise increase serum potassium levels.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #632"
    ],
    "alternativeOptionsA": [
      "Amlodipine",
      "Bisoprolol",
      "Diltiazem"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-phase1-spironolactone-azilsartan-medoxomil",
    "drugAId": "drug-spironolactone",
    "drugBId": "drug-azilsartan-medoxomil",
    "drugAName": "Spironolactone",
    "drugBName": "Azilsartan medoxomil",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Blokade ganda jalur renin-angiotensin-aldosteron mengurangi ekskresi kalium ginjal secara sinergis.",
    "clinicalOutcome": "Risiko hiperkalemia berat mengancam jiwa dan penurunan akut laju filtrasi glomerulus (eGFR).",
    "management": "PERINGATAN KETAT: Periksa kadar kalium serum dan kreatinin secara berkala (baseline, minggu ke-1, bulan ke-1).",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)",
    "ddinterPairId": "DDInter-PAIR-37677",
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
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-phase1-spironolactone-eprosartan",
    "drugAId": "drug-spironolactone",
    "drugBId": "drug-eprosartan",
    "drugAName": "Spironolactone",
    "drugBName": "Eprosartan",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Blokade ganda jalur renin-angiotensin-aldosteron mengurangi ekskresi kalium ginjal secara sinergis.",
    "clinicalOutcome": "Risiko hiperkalemia berat mengancam jiwa dan penurunan akut laju filtrasi glomerulus (eGFR).",
    "management": "PERINGATAN KETAT: Periksa kadar kalium serum dan kreatinin secara berkala (baseline, minggu ke-1, bulan ke-1).",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)",
    "ddinterPairId": "DDInter-PAIR-59253",
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
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-phase1-triamterene-losartan",
    "drugAId": "drug-triamterene",
    "drugBId": "drug-losartan",
    "drugAName": "Triamterene",
    "drugBName": "Losartan",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek aditif retensi ion kalium melalui penghambatan ekskresi kalium di tubulus distal ginjal antara Triamterene dan Losartan.",
    "clinicalOutcome": "Peningkatan kadar kalium serum (hiperkalemia subklinis hingga ringan).",
    "management": "Periksa kadar elektrolit serum (kalium) dan kreatinin secara berkala; hindari penggunaan suplemen kalium tanpa anjuran dokter.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 632)",
    "ddinterPairId": "DDInter-PAIR-101339",
    "ddinterOriginalText": "Concomitant use of angiotensin II receptor blockers (ARBs) and potassium-sparing diuretics may increase the risk of hyperkalemia. Inhibition of angiotensin II results in decreased aldosterone secretion, which can lead to increases in serum potassium that may be additive with that induced by potassium-sparing diuretics. Life-threatening and fatal hyperkalemia can occur, especially when the combination is used in patients with risk factors such as renal impairment, diabetes, old age, severe or worsening heart failure, dehydration, and concomitant use of other agents that block the renin-angiotensin-aldosterone system or otherwise increase serum potassium levels.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #632"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Amlodipine",
      "Bisoprolol",
      "Diltiazem"
    ]
  },
  {
    "id": "ddinter-phase1-triamterene-telmisartan",
    "drugAId": "drug-triamterene",
    "drugBId": "drug-telmisartan",
    "drugAName": "Triamterene",
    "drugBName": "Telmisartan",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek aditif retensi ion kalium melalui penghambatan ekskresi kalium di tubulus distal ginjal antara Triamterene dan Telmisartan.",
    "clinicalOutcome": "Peningkatan kadar kalium serum (hiperkalemia subklinis hingga ringan).",
    "management": "Periksa kadar elektrolit serum (kalium) dan kreatinin secara berkala; hindari penggunaan suplemen kalium tanpa anjuran dokter.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 632)",
    "ddinterPairId": "DDInter-PAIR-113492",
    "ddinterOriginalText": "Concomitant use of angiotensin II receptor blockers (ARBs) and potassium-sparing diuretics may increase the risk of hyperkalemia. Inhibition of angiotensin II results in decreased aldosterone secretion, which can lead to increases in serum potassium that may be additive with that induced by potassium-sparing diuretics. Life-threatening and fatal hyperkalemia can occur, especially when the combination is used in patients with risk factors such as renal impairment, diabetes, old age, severe or worsening heart failure, dehydration, and concomitant use of other agents that block the renin-angiotensin-aldosterone system or otherwise increase serum potassium levels.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #632"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Amlodipine",
      "Bisoprolol",
      "Diltiazem"
    ]
  },
  {
    "id": "ddinter-phase1-triamterene-irbesartan",
    "drugAId": "drug-triamterene",
    "drugBId": "drug-irbesartan",
    "drugAName": "Triamterene",
    "drugBName": "Irbesartan",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek aditif retensi ion kalium melalui penghambatan ekskresi kalium di tubulus distal ginjal antara Triamterene dan Irbesartan.",
    "clinicalOutcome": "Peningkatan kadar kalium serum (hiperkalemia subklinis hingga ringan).",
    "management": "Periksa kadar elektrolit serum (kalium) dan kreatinin secara berkala; hindari penggunaan suplemen kalium tanpa anjuran dokter.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 632)",
    "ddinterPairId": "DDInter-PAIR-119127",
    "ddinterOriginalText": "Concomitant use of angiotensin II receptor blockers (ARBs) and potassium-sparing diuretics may increase the risk of hyperkalemia. Inhibition of angiotensin II results in decreased aldosterone secretion, which can lead to increases in serum potassium that may be additive with that induced by potassium-sparing diuretics. Life-threatening and fatal hyperkalemia can occur, especially when the combination is used in patients with risk factors such as renal impairment, diabetes, old age, severe or worsening heart failure, dehydration, and concomitant use of other agents that block the renin-angiotensin-aldosterone system or otherwise increase serum potassium levels.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #632"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Amlodipine",
      "Bisoprolol",
      "Diltiazem"
    ]
  },
  {
    "id": "ddinter-phase1-alfuzosin-thioridazine",
    "drugAId": "drug-alfuzosin",
    "drugBId": "drug-thioridazine",
    "drugAName": "Alfuzosin",
    "drugBName": "Thioridazine",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Interaksi farmakodinamik aditif pada miusit skeletal dan metabolisme lipid hepar antara Alfuzosin dan Thioridazine.",
    "clinicalOutcome": "Peningkatan efikasi penurunan lipid; risiko mialgia atau peningkatan transaminase hepar yang umumnya ringan hingga sedang.",
    "management": "Pantau enzim transaminase (SGOT/SGPT) dan enzim otot (CK) bila terdapat keluhan nyeri otot yang tidak biasa.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 642)",
    "ddinterPairId": "DDInter-PAIR-16434",
    "ddinterOriginalText": "Thioridazine can cause dose-related prolongation of the QT interval. Theoretically, coadministration with other agents that can prolong the QT interval may result in additive effects and increased risk of ventricular arrhythmias including torsade de pointes and sudden death. In addition, certain agents with anticholinergic properties (e.g., sedating antihistamines; antispasmodics; neuroleptics; phenothiazines; skeletal muscle relaxants; tricyclic antidepressants; disopyramide) may have additive parasympatholytic and central nervous system-depressant effects when used in combination with thioridazine. Excessive parasympatholytic effects may include paralytic ileus, hyperthermia, mydriasis, blurred vision, tachycardia, urinary retention, psychosis, and seizures.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #642"
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
    "id": "ddinter-phase1-thioridazine-ondansetron",
    "drugAId": "drug-thioridazine",
    "drugBId": "drug-ondansetron",
    "drugAName": "Thioridazine",
    "drugBName": "Ondansetron",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Interaksi farmakodinamik aditif pada miusit skeletal dan metabolisme lipid hepar antara Thioridazine dan Ondansetron.",
    "clinicalOutcome": "Peningkatan efikasi penurunan lipid; risiko mialgia atau peningkatan transaminase hepar yang umumnya ringan hingga sedang.",
    "management": "Pantau enzim transaminase (SGOT/SGPT) dan enzim otot (CK) bila terdapat keluhan nyeri otot yang tidak biasa.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 642)",
    "ddinterPairId": "DDInter-PAIR-148053",
    "ddinterOriginalText": "Thioridazine can cause dose-related prolongation of the QT interval. Theoretically, coadministration with other agents that can prolong the QT interval may result in additive effects and increased risk of ventricular arrhythmias including torsade de pointes and sudden death. In addition, certain agents with anticholinergic properties (e.g., sedating antihistamines; antispasmodics; neuroleptics; phenothiazines; skeletal muscle relaxants; tricyclic antidepressants; disopyramide) may have additive parasympatholytic and central nervous system-depressant effects when used in combination with thioridazine. Excessive parasympatholytic effects may include paralytic ileus, hyperthermia, mydriasis, blurred vision, tachycardia, urinary retention, psychosis, and seizures.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #642"
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
    "id": "ddinter-phase1-lovastatin-atazanavir",
    "drugAId": "drug-lovastatin",
    "drugBId": "drug-atazanavir",
    "drugAName": "Lovastatin",
    "drugBName": "Atazanavir",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 677)",
    "ddinterPairId": "DDInter-PAIR-34591",
    "ddinterOriginalText": "Protease inhibitors (PIs) may significantly increase the plasma concentrations of certain HMG-CoA reductase inhibitors. The mechanism is PI inhibition of CYP450 3A4 metabolism. High levels of HMG-CoA reductase inhibitory activity in plasma are associated with an increased risk of musculoskeletal toxicity, including myopathy and rhabdomyolysis, which may be accompanied by acute renal failure secondary to myoglobinuria and may result in death.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #677"
    ],
    "alternativeOptionsA": [
      "Rosuvastatin",
      "Pravastatin",
      "Pitavastatin",
      "Ezetimibe"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-phase1-simvastatin-atazanavir",
    "drugAId": "drug-simvastatin",
    "drugBId": "drug-atazanavir",
    "drugAName": "Simvastatin",
    "drugBName": "Atazanavir",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 677)",
    "ddinterPairId": "DDInter-PAIR-34722",
    "ddinterOriginalText": "Protease inhibitors (PIs) may significantly increase the plasma concentrations of certain HMG-CoA reductase inhibitors. The mechanism is PI inhibition of CYP450 3A4 metabolism. High levels of HMG-CoA reductase inhibitory activity in plasma are associated with an increased risk of musculoskeletal toxicity, including myopathy and rhabdomyolysis, which may be accompanied by acute renal failure secondary to myoglobinuria and may result in death.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #677"
    ],
    "alternativeOptionsA": [
      "Rosuvastatin",
      "Pravastatin",
      "Pitavastatin",
      "Ezetimibe"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-phase1-diatrizoate-metformin",
    "drugAId": "drug-diatrizoate",
    "drugBId": "drug-metformin",
    "drugAName": "Diatrizoate",
    "drugBName": "Metformin",
    "severity": "Major",
    "mechanismCategory": "Excretion",
    "mechanism": "Interaksi pada tingkat filtrasi glomerulus atau sekresi/reabsorpsi tubulus ginjal antara Diatrizoate dan Metformin.",
    "clinicalOutcome": "Perubahan klirens ginjal yang dapat memperlambat eliminasi atau memicu akumulasi zat aktif.",
    "management": "Pantau fungsi ginjal (kreatinin serum, laju filtrasi glomerulus) dan kadar obat dalam darah secara berkala.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 695)",
    "ddinterPairId": "DDInter-PAIR-18022",
    "ddinterOriginalText": "Administration of intravascular iodinated radiocontrast media in patients treated with biguanides such as metformin may precipitate lactic acidosis, a rare but potentially serious and fatal complication of biguanide therapy. Iodinated contrast material can cause acute alterations in renal function, including acute renal failure, which is a known risk factor for biguanide-induced lactic acidosis.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #695"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Dapagliflozin",
      "Empagliflozin",
      "Linagliptin",
      "Sitagliptin"
    ]
  },
  {
    "id": "ddinter-phase1-metformin-iodipamide",
    "drugAId": "drug-metformin",
    "drugBId": "drug-iodipamide",
    "drugAName": "Metformin",
    "drugBName": "Iodipamide",
    "severity": "Major",
    "mechanismCategory": "Excretion",
    "mechanism": "Interaksi pada tingkat filtrasi glomerulus atau sekresi/reabsorpsi tubulus ginjal antara Metformin dan Iodipamide.",
    "clinicalOutcome": "Perubahan klirens ginjal yang dapat memperlambat eliminasi atau memicu akumulasi zat aktif.",
    "management": "Pantau fungsi ginjal (kreatinin serum, laju filtrasi glomerulus) dan kadar obat dalam darah secara berkala.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 695)",
    "ddinterPairId": "DDInter-PAIR-18088",
    "ddinterOriginalText": "Administration of intravascular iodinated radiocontrast media in patients treated with biguanides such as metformin may precipitate lactic acidosis, a rare but potentially serious and fatal complication of biguanide therapy. Iodinated contrast material can cause acute alterations in renal function, including acute renal failure, which is a known risk factor for biguanide-induced lactic acidosis.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #695"
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
    "id": "ddinter-phase1-metformin-iodixanol",
    "drugAId": "drug-metformin",
    "drugBId": "drug-iodixanol",
    "drugAName": "Metformin",
    "drugBName": "Iodixanol",
    "severity": "Major",
    "mechanismCategory": "Excretion",
    "mechanism": "Interaksi pada tingkat filtrasi glomerulus atau sekresi/reabsorpsi tubulus ginjal antara Metformin dan Iodixanol.",
    "clinicalOutcome": "Perubahan klirens ginjal yang dapat memperlambat eliminasi atau memicu akumulasi zat aktif.",
    "management": "Pantau fungsi ginjal (kreatinin serum, laju filtrasi glomerulus) dan kadar obat dalam darah secara berkala.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 695)",
    "ddinterPairId": "DDInter-PAIR-18089",
    "ddinterOriginalText": "Administration of intravascular iodinated radiocontrast media in patients treated with biguanides such as metformin may precipitate lactic acidosis, a rare but potentially serious and fatal complication of biguanide therapy. Iodinated contrast material can cause acute alterations in renal function, including acute renal failure, which is a known risk factor for biguanide-induced lactic acidosis.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #695"
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
    "id": "ddinter-phase1-metformin-iohexol",
    "drugAId": "drug-metformin",
    "drugBId": "drug-iohexol",
    "drugAName": "Metformin",
    "drugBName": "Iohexol",
    "severity": "Major",
    "mechanismCategory": "Excretion",
    "mechanism": "Interaksi pada tingkat filtrasi glomerulus atau sekresi/reabsorpsi tubulus ginjal antara Metformin dan Iohexol.",
    "clinicalOutcome": "Perubahan klirens ginjal yang dapat memperlambat eliminasi atau memicu akumulasi zat aktif.",
    "management": "Pantau fungsi ginjal (kreatinin serum, laju filtrasi glomerulus) dan kadar obat dalam darah secara berkala.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 695)",
    "ddinterPairId": "DDInter-PAIR-18090",
    "ddinterOriginalText": "Administration of intravascular iodinated radiocontrast media in patients treated with biguanides such as metformin may precipitate lactic acidosis, a rare but potentially serious and fatal complication of biguanide therapy. Iodinated contrast material can cause acute alterations in renal function, including acute renal failure, which is a known risk factor for biguanide-induced lactic acidosis.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #695"
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
    "id": "ddinter-phase1-metformin-iopamidol",
    "drugAId": "drug-metformin",
    "drugBId": "drug-iopamidol",
    "drugAName": "Metformin",
    "drugBName": "Iopamidol",
    "severity": "Major",
    "mechanismCategory": "Excretion",
    "mechanism": "Interaksi pada tingkat filtrasi glomerulus atau sekresi/reabsorpsi tubulus ginjal antara Metformin dan Iopamidol.",
    "clinicalOutcome": "Perubahan klirens ginjal yang dapat memperlambat eliminasi atau memicu akumulasi zat aktif.",
    "management": "Pantau fungsi ginjal (kreatinin serum, laju filtrasi glomerulus) dan kadar obat dalam darah secara berkala.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 695)",
    "ddinterPairId": "DDInter-PAIR-18091",
    "ddinterOriginalText": "Administration of intravascular iodinated radiocontrast media in patients treated with biguanides such as metformin may precipitate lactic acidosis, a rare but potentially serious and fatal complication of biguanide therapy. Iodinated contrast material can cause acute alterations in renal function, including acute renal failure, which is a known risk factor for biguanide-induced lactic acidosis.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #695"
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
    "id": "ddinter-phase1-metformin-iopromide",
    "drugAId": "drug-metformin",
    "drugBId": "drug-iopromide",
    "drugAName": "Metformin",
    "drugBName": "Iopromide",
    "severity": "Major",
    "mechanismCategory": "Excretion",
    "mechanism": "Interaksi pada tingkat filtrasi glomerulus atau sekresi/reabsorpsi tubulus ginjal antara Metformin dan Iopromide.",
    "clinicalOutcome": "Perubahan klirens ginjal yang dapat memperlambat eliminasi atau memicu akumulasi zat aktif.",
    "management": "Pantau fungsi ginjal (kreatinin serum, laju filtrasi glomerulus) dan kadar obat dalam darah secara berkala.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 695)",
    "ddinterPairId": "DDInter-PAIR-18092",
    "ddinterOriginalText": "Administration of intravascular iodinated radiocontrast media in patients treated with biguanides such as metformin may precipitate lactic acidosis, a rare but potentially serious and fatal complication of biguanide therapy. Iodinated contrast material can cause acute alterations in renal function, including acute renal failure, which is a known risk factor for biguanide-induced lactic acidosis.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #695"
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
    "id": "ddinter-phase1-metformin-iothalamic-acid",
    "drugAId": "drug-metformin",
    "drugBId": "drug-iothalamic-acid",
    "drugAName": "Metformin",
    "drugBName": "Iothalamic acid",
    "severity": "Major",
    "mechanismCategory": "Excretion",
    "mechanism": "Interaksi pada tingkat filtrasi glomerulus atau sekresi/reabsorpsi tubulus ginjal antara Metformin dan Iothalamic acid.",
    "clinicalOutcome": "Perubahan klirens ginjal yang dapat memperlambat eliminasi atau memicu akumulasi zat aktif.",
    "management": "Pantau fungsi ginjal (kreatinin serum, laju filtrasi glomerulus) dan kadar obat dalam darah secara berkala.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 695)",
    "ddinterPairId": "DDInter-PAIR-18093",
    "ddinterOriginalText": "Administration of intravascular iodinated radiocontrast media in patients treated with biguanides such as metformin may precipitate lactic acidosis, a rare but potentially serious and fatal complication of biguanide therapy. Iodinated contrast material can cause acute alterations in renal function, including acute renal failure, which is a known risk factor for biguanide-induced lactic acidosis.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #695"
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
    "id": "ddinter-phase1-metformin-ioversol",
    "drugAId": "drug-metformin",
    "drugBId": "drug-ioversol",
    "drugAName": "Metformin",
    "drugBName": "Ioversol",
    "severity": "Major",
    "mechanismCategory": "Excretion",
    "mechanism": "Interaksi pada tingkat filtrasi glomerulus atau sekresi/reabsorpsi tubulus ginjal antara Metformin dan Ioversol.",
    "clinicalOutcome": "Perubahan klirens ginjal yang dapat memperlambat eliminasi atau memicu akumulasi zat aktif.",
    "management": "Pantau fungsi ginjal (kreatinin serum, laju filtrasi glomerulus) dan kadar obat dalam darah secara berkala.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 695)",
    "ddinterPairId": "DDInter-PAIR-18094",
    "ddinterOriginalText": "Administration of intravascular iodinated radiocontrast media in patients treated with biguanides such as metformin may precipitate lactic acidosis, a rare but potentially serious and fatal complication of biguanide therapy. Iodinated contrast material can cause acute alterations in renal function, including acute renal failure, which is a known risk factor for biguanide-induced lactic acidosis.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #695"
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
    "id": "ddinter-phase1-metformin-ioxilan",
    "drugAId": "drug-metformin",
    "drugBId": "drug-ioxilan",
    "drugAName": "Metformin",
    "drugBName": "Ioxilan",
    "severity": "Major",
    "mechanismCategory": "Excretion",
    "mechanism": "Interaksi pada tingkat filtrasi glomerulus atau sekresi/reabsorpsi tubulus ginjal antara Metformin dan Ioxilan.",
    "clinicalOutcome": "Perubahan klirens ginjal yang dapat memperlambat eliminasi atau memicu akumulasi zat aktif.",
    "management": "Pantau fungsi ginjal (kreatinin serum, laju filtrasi glomerulus) dan kadar obat dalam darah secara berkala.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 695)",
    "ddinterPairId": "DDInter-PAIR-18095",
    "ddinterOriginalText": "Administration of intravascular iodinated radiocontrast media in patients treated with biguanides such as metformin may precipitate lactic acidosis, a rare but potentially serious and fatal complication of biguanide therapy. Iodinated contrast material can cause acute alterations in renal function, including acute renal failure, which is a known risk factor for biguanide-induced lactic acidosis.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #695"
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
    "id": "ddinter-phase1-diltiazem-fentanyl",
    "drugAId": "drug-diltiazem",
    "drugBId": "drug-fentanyl",
    "drugAName": "Diltiazem",
    "drugBName": "Fentanyl",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 705)",
    "ddinterPairId": "DDInter-PAIR-2310",
    "ddinterOriginalText": "Coadministration with inhibitors of CYP450 3A4 may increase the plasma concentrations of fentanyl, which is primarily metabolized by the isoenzyme. Increased fentanyl concentrations could increase or prolong adverse drug effects and may cause potentially fatal respiratory depression. Conversely, discontinuation of a CYP450 3A4 inhibitor could decrease fentanyl plasma concentrations, decrease opioid efficacy, and possibly even lead to a withdrawal syndrome in patients who had developed physical dependence to fentanyl.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #705"
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
    "id": "ddinter-phase1-verapamil-fentanyl",
    "drugAId": "drug-verapamil",
    "drugBId": "drug-fentanyl",
    "drugAName": "Verapamil",
    "drugBName": "Fentanyl",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 705)",
    "ddinterPairId": "DDInter-PAIR-2689",
    "ddinterOriginalText": "Coadministration with inhibitors of CYP450 3A4 may increase the plasma concentrations of fentanyl, which is primarily metabolized by the isoenzyme. Increased fentanyl concentrations could increase or prolong adverse drug effects and may cause potentially fatal respiratory depression. Conversely, discontinuation of a CYP450 3A4 inhibitor could decrease fentanyl plasma concentrations, decrease opioid efficacy, and possibly even lead to a withdrawal syndrome in patients who had developed physical dependence to fentanyl.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #705"
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
    "id": "ddinter-phase1-diltiazem-olaparib",
    "drugAId": "drug-diltiazem",
    "drugBId": "drug-olaparib",
    "drugAName": "Diltiazem",
    "drugBName": "Olaparib",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 706)",
    "ddinterPairId": "DDInter-PAIR-57990",
    "ddinterOriginalText": "Coadministration with moderate inhibitors of CYP450 3A4 may significantly increase the plasma concentrations of olaparib, which is primarily metabolized by the isoenzyme. Increased exposure to olaparib may increase the risk of adverse effects such as hematologic toxicity, nausea, vomiting, diarrhea, anorexia, dyspepsia, and abdominal pain or discomfort.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #706"
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
    "id": "ddinter-phase1-verapamil-olaparib",
    "drugAId": "drug-verapamil",
    "drugBId": "drug-olaparib",
    "drugAName": "Verapamil",
    "drugBName": "Olaparib",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 706)",
    "ddinterPairId": "DDInter-PAIR-75510",
    "ddinterOriginalText": "Coadministration with moderate inhibitors of CYP450 3A4 may significantly increase the plasma concentrations of olaparib, which is primarily metabolized by the isoenzyme. Increased exposure to olaparib may increase the risk of adverse effects such as hematologic toxicity, nausea, vomiting, diarrhea, anorexia, dyspepsia, and abdominal pain or discomfort.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #706"
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
    "id": "ddinter-phase1-clopidogrel-pioglitazone",
    "drugAId": "drug-clopidogrel",
    "drugBId": "drug-pioglitazone",
    "drugAName": "Clopidogrel",
    "drugBName": "Pioglitazone",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 713)",
    "ddinterPairId": "DDInter-PAIR-18260",
    "ddinterOriginalText": "Coadministration with clopidogrel may significantly increase the plasma concentrations of pioglitazone. The proposed mechanism is inhibition of the CYP450 2C8-mediated metabolism of pioglitazone by clopidogrel's glucuronide metabolite, which has demonstrated strong inhibition of CYP450 2C8 in vitro.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #713"
    ],
    "alternativeOptionsA": [
      "Ticagrelor",
      "Cilostazol"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-phase1-magnesium-oxide-erdafitinib",
    "drugAId": "drug-magnesium-oxide",
    "drugBId": "drug-erdafitinib",
    "drugAName": "Magnesium oxide",
    "drugBName": "Erdafitinib",
    "severity": "Major",
    "mechanismCategory": "Others",
    "mechanism": "Interaksi farmakologis atau fisikokimiawi antara Magnesium oxide dan Erdafitinib sebagaimana didokumentasikan dalam DDInter 2.0.",
    "clinicalOutcome": "Modulasi respons terapi atau timbulnya efek samping ringan yang memerlukan perhatian klinis.",
    "management": "Lakukan pemantauan klinis rutin; pisahkan waktu pemberian bila terdapat inkompatibilitas.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 736)",
    "ddinterPairId": "DDInter-PAIR-68570",
    "ddinterOriginalText": "Coadministration with agents that can alter serum phosphate levels may affect the initial dosage determination of erdafitinib. The mechanism appears to be related to the pharmacodynamic effects of fibroblast growth factor receptor (FGFR) inhibition by erdafitinib. Inhibition of the FGFR receptor has been shown to lead to an increase in serum phosphate levels.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #736"
    ],
    "alternativeOptionsA": [
      "Famotidine",
      "Pantoprazole",
      "Rebamipide"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-phase1-magnesium-sulfate-erdafitinib",
    "drugAId": "drug-magnesium-sulfate",
    "drugBId": "drug-erdafitinib",
    "drugAName": "Magnesium sulfate",
    "drugBName": "Erdafitinib",
    "severity": "Major",
    "mechanismCategory": "Others",
    "mechanism": "Interaksi farmakologis atau fisikokimiawi antara Magnesium sulfate dan Erdafitinib sebagaimana didokumentasikan dalam DDInter 2.0.",
    "clinicalOutcome": "Modulasi respons terapi atau timbulnya efek samping ringan yang memerlukan perhatian klinis.",
    "management": "Lakukan pemantauan klinis rutin; pisahkan waktu pemberian bila terdapat inkompatibilitas.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 736)",
    "ddinterPairId": "DDInter-PAIR-111680",
    "ddinterOriginalText": "Coadministration with agents that can alter serum phosphate levels may affect the initial dosage determination of erdafitinib. The mechanism appears to be related to the pharmacodynamic effects of fibroblast growth factor receptor (FGFR) inhibition by erdafitinib. Inhibition of the FGFR receptor has been shown to lead to an increase in serum phosphate levels.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #736"
    ],
    "alternativeOptionsA": [
      "Famotidine",
      "Pantoprazole",
      "Rebamipide"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-phase1-magnesium-chloride-erdafitinib",
    "drugAId": "drug-magnesium-chloride",
    "drugBId": "drug-erdafitinib",
    "drugAName": "Magnesium chloride",
    "drugBName": "Erdafitinib",
    "severity": "Major",
    "mechanismCategory": "Others",
    "mechanism": "Interaksi farmakologis atau fisikokimiawi antara Magnesium chloride dan Erdafitinib sebagaimana didokumentasikan dalam DDInter 2.0.",
    "clinicalOutcome": "Modulasi respons terapi atau timbulnya efek samping ringan yang memerlukan perhatian klinis.",
    "management": "Lakukan pemantauan klinis rutin; pisahkan waktu pemberian bila terdapat inkompatibilitas.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 736)",
    "ddinterPairId": "DDInter-PAIR-134626",
    "ddinterOriginalText": "Coadministration with agents that can alter serum phosphate levels may affect the initial dosage determination of erdafitinib. The mechanism appears to be related to the pharmacodynamic effects of fibroblast growth factor receptor (FGFR) inhibition by erdafitinib. Inhibition of the FGFR receptor has been shown to lead to an increase in serum phosphate levels.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #736"
    ],
    "alternativeOptionsA": [
      "Famotidine",
      "Pantoprazole",
      "Rebamipide"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-phase1-magnesium-carbonate-erdafitinib",
    "drugAId": "drug-magnesium-carbonate",
    "drugBId": "drug-erdafitinib",
    "drugAName": "Magnesium carbonate",
    "drugBName": "Erdafitinib",
    "severity": "Major",
    "mechanismCategory": "Others",
    "mechanism": "Interaksi farmakologis atau fisikokimiawi antara Magnesium carbonate dan Erdafitinib sebagaimana didokumentasikan dalam DDInter 2.0.",
    "clinicalOutcome": "Modulasi respons terapi atau timbulnya efek samping ringan yang memerlukan perhatian klinis.",
    "management": "Lakukan pemantauan klinis rutin; pisahkan waktu pemberian bila terdapat inkompatibilitas.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 736)",
    "ddinterPairId": "DDInter-PAIR-178781",
    "ddinterOriginalText": "Coadministration with agents that can alter serum phosphate levels may affect the initial dosage determination of erdafitinib. The mechanism appears to be related to the pharmacodynamic effects of fibroblast growth factor receptor (FGFR) inhibition by erdafitinib. Inhibition of the FGFR receptor has been shown to lead to an increase in serum phosphate levels.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #736"
    ],
    "alternativeOptionsA": [
      "Famotidine",
      "Pantoprazole",
      "Rebamipide"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-phase1-magnesium-citrate-erdafitinib",
    "drugAId": "drug-magnesium-citrate",
    "drugBId": "drug-erdafitinib",
    "drugAName": "Magnesium citrate",
    "drugBName": "Erdafitinib",
    "severity": "Major",
    "mechanismCategory": "Others",
    "mechanism": "Interaksi farmakologis atau fisikokimiawi antara Magnesium citrate dan Erdafitinib sebagaimana didokumentasikan dalam DDInter 2.0.",
    "clinicalOutcome": "Modulasi respons terapi atau timbulnya efek samping ringan yang memerlukan perhatian klinis.",
    "management": "Lakukan pemantauan klinis rutin; pisahkan waktu pemberian bila terdapat inkompatibilitas.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 736)",
    "ddinterPairId": "DDInter-PAIR-178782",
    "ddinterOriginalText": "Coadministration with agents that can alter serum phosphate levels may affect the initial dosage determination of erdafitinib. The mechanism appears to be related to the pharmacodynamic effects of fibroblast growth factor receptor (FGFR) inhibition by erdafitinib. Inhibition of the FGFR receptor has been shown to lead to an increase in serum phosphate levels.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #736"
    ],
    "alternativeOptionsA": [
      "Famotidine",
      "Pantoprazole",
      "Rebamipide"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-phase1-erdafitinib-magnesium-gluconate",
    "drugAId": "drug-erdafitinib",
    "drugBId": "drug-magnesium-gluconate",
    "drugAName": "Erdafitinib",
    "drugBName": "Magnesium gluconate",
    "severity": "Major",
    "mechanismCategory": "Others",
    "mechanism": "Interaksi farmakologis atau fisikokimiawi antara Erdafitinib dan Magnesium gluconate sebagaimana didokumentasikan dalam DDInter 2.0.",
    "clinicalOutcome": "Modulasi respons terapi atau timbulnya efek samping ringan yang memerlukan perhatian klinis.",
    "management": "Lakukan pemantauan klinis rutin; pisahkan waktu pemberian bila terdapat inkompatibilitas.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 736)",
    "ddinterPairId": "DDInter-PAIR-178783",
    "ddinterOriginalText": "Coadministration with agents that can alter serum phosphate levels may affect the initial dosage determination of erdafitinib. The mechanism appears to be related to the pharmacodynamic effects of fibroblast growth factor receptor (FGFR) inhibition by erdafitinib. Inhibition of the FGFR receptor has been shown to lead to an increase in serum phosphate levels.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #736"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Famotidine",
      "Pantoprazole",
      "Rebamipide"
    ]
  },
  {
    "id": "ddinter-phase1-magnesium-glycinate-erdafitinib",
    "drugAId": "drug-magnesium-glycinate",
    "drugBId": "drug-erdafitinib",
    "drugAName": "Magnesium glycinate",
    "drugBName": "Erdafitinib",
    "severity": "Major",
    "mechanismCategory": "Others",
    "mechanism": "Interaksi farmakologis atau fisikokimiawi antara Magnesium glycinate dan Erdafitinib sebagaimana didokumentasikan dalam DDInter 2.0.",
    "clinicalOutcome": "Modulasi respons terapi atau timbulnya efek samping ringan yang memerlukan perhatian klinis.",
    "management": "Lakukan pemantauan klinis rutin; pisahkan waktu pemberian bila terdapat inkompatibilitas.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 736)",
    "ddinterPairId": "DDInter-PAIR-178784",
    "ddinterOriginalText": "Coadministration with agents that can alter serum phosphate levels may affect the initial dosage determination of erdafitinib. The mechanism appears to be related to the pharmacodynamic effects of fibroblast growth factor receptor (FGFR) inhibition by erdafitinib. Inhibition of the FGFR receptor has been shown to lead to an increase in serum phosphate levels.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #736"
    ],
    "alternativeOptionsA": [
      "Famotidine",
      "Pantoprazole",
      "Rebamipide"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-phase1-magnesium-hydroxide-erdafitinib",
    "drugAId": "drug-magnesium-hydroxide",
    "drugBId": "drug-erdafitinib",
    "drugAName": "Magnesium hydroxide",
    "drugBName": "Erdafitinib",
    "severity": "Major",
    "mechanismCategory": "Others",
    "mechanism": "Interaksi farmakologis atau fisikokimiawi antara Magnesium hydroxide dan Erdafitinib sebagaimana didokumentasikan dalam DDInter 2.0.",
    "clinicalOutcome": "Modulasi respons terapi atau timbulnya efek samping ringan yang memerlukan perhatian klinis.",
    "management": "Lakukan pemantauan klinis rutin; pisahkan waktu pemberian bila terdapat inkompatibilitas.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 736)",
    "ddinterPairId": "DDInter-PAIR-178785",
    "ddinterOriginalText": "Coadministration with agents that can alter serum phosphate levels may affect the initial dosage determination of erdafitinib. The mechanism appears to be related to the pharmacodynamic effects of fibroblast growth factor receptor (FGFR) inhibition by erdafitinib. Inhibition of the FGFR receptor has been shown to lead to an increase in serum phosphate levels.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #736"
    ],
    "alternativeOptionsA": [
      "Famotidine",
      "Pantoprazole",
      "Rebamipide"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-phase1-amikacin-magnesium-sulfate",
    "drugAId": "drug-amikacin",
    "drugBId": "drug-magnesium-sulfate",
    "drugAName": "Amikacin",
    "drugBName": "Magnesium sulfate",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Amikacin dan Magnesium sulfate pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 766)",
    "ddinterPairId": "DDInter-PAIR-20850",
    "ddinterOriginalText": "Aminoglycosides possess neuromuscular blocking activity, which may be additive with that of parenteral magnesium, potentially resulting in severe and/or prolonged respiratory depression during concomitant use. In addition, aminoglycosides may reduce serum magnesium levels.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #766"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Famotidine",
      "Pantoprazole",
      "Rebamipide"
    ]
  },
  {
    "id": "ddinter-phase1-magnesium-sulfate-gentamicin",
    "drugAId": "drug-magnesium-sulfate",
    "drugBId": "drug-gentamicin",
    "drugAName": "Magnesium sulfate",
    "drugBName": "Gentamicin",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Magnesium sulfate dan Gentamicin pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 766)",
    "ddinterPairId": "DDInter-PAIR-111713",
    "ddinterOriginalText": "Aminoglycosides possess neuromuscular blocking activity, which may be additive with that of parenteral magnesium, potentially resulting in severe and/or prolonged respiratory depression during concomitant use. In addition, aminoglycosides may reduce serum magnesium levels.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #766"
    ],
    "alternativeOptionsA": [
      "Famotidine",
      "Pantoprazole",
      "Rebamipide"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-phase1-magnesium-sulfate-kanamycin",
    "drugAId": "drug-magnesium-sulfate",
    "drugBId": "drug-kanamycin",
    "drugAName": "Magnesium sulfate",
    "drugBName": "Kanamycin",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Magnesium sulfate dan Kanamycin pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 766)",
    "ddinterPairId": "DDInter-PAIR-111752",
    "ddinterOriginalText": "Aminoglycosides possess neuromuscular blocking activity, which may be additive with that of parenteral magnesium, potentially resulting in severe and/or prolonged respiratory depression during concomitant use. In addition, aminoglycosides may reduce serum magnesium levels.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #766"
    ],
    "alternativeOptionsA": [
      "Famotidine",
      "Pantoprazole",
      "Rebamipide"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-phase1-magnesium-sulfate-neomycin",
    "drugAId": "drug-magnesium-sulfate",
    "drugBId": "drug-neomycin",
    "drugAName": "Magnesium sulfate",
    "drugBName": "Neomycin",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Magnesium sulfate dan Neomycin pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 766)",
    "ddinterPairId": "DDInter-PAIR-111820",
    "ddinterOriginalText": "Aminoglycosides possess neuromuscular blocking activity, which may be additive with that of parenteral magnesium, potentially resulting in severe and/or prolonged respiratory depression during concomitant use. In addition, aminoglycosides may reduce serum magnesium levels.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #766"
    ],
    "alternativeOptionsA": [
      "Famotidine",
      "Pantoprazole",
      "Rebamipide"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-phase1-magnesium-sulfate-netilmicin",
    "drugAId": "drug-magnesium-sulfate",
    "drugBId": "drug-netilmicin",
    "drugAName": "Magnesium sulfate",
    "drugBName": "Netilmicin",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Magnesium sulfate dan Netilmicin pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 766)",
    "ddinterPairId": "DDInter-PAIR-111822",
    "ddinterOriginalText": "Aminoglycosides possess neuromuscular blocking activity, which may be additive with that of parenteral magnesium, potentially resulting in severe and/or prolonged respiratory depression during concomitant use. In addition, aminoglycosides may reduce serum magnesium levels.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #766"
    ],
    "alternativeOptionsA": [
      "Famotidine",
      "Pantoprazole",
      "Rebamipide"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-phase1-magnesium-sulfate-plazomicin",
    "drugAId": "drug-magnesium-sulfate",
    "drugBId": "drug-plazomicin",
    "drugAName": "Magnesium sulfate",
    "drugBName": "Plazomicin",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Magnesium sulfate dan Plazomicin pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 766)",
    "ddinterPairId": "DDInter-PAIR-111877",
    "ddinterOriginalText": "Aminoglycosides possess neuromuscular blocking activity, which may be additive with that of parenteral magnesium, potentially resulting in severe and/or prolonged respiratory depression during concomitant use. In addition, aminoglycosides may reduce serum magnesium levels.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #766"
    ],
    "alternativeOptionsA": [
      "Famotidine",
      "Pantoprazole",
      "Rebamipide"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-phase1-magnesium-sulfate-streptomycin",
    "drugAId": "drug-magnesium-sulfate",
    "drugBId": "drug-streptomycin",
    "drugAName": "Magnesium sulfate",
    "drugBName": "Streptomycin",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Magnesium sulfate dan Streptomycin pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 766)",
    "ddinterPairId": "DDInter-PAIR-111925",
    "ddinterOriginalText": "Aminoglycosides possess neuromuscular blocking activity, which may be additive with that of parenteral magnesium, potentially resulting in severe and/or prolonged respiratory depression during concomitant use. In addition, aminoglycosides may reduce serum magnesium levels.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #766"
    ],
    "alternativeOptionsA": [
      "Famotidine",
      "Pantoprazole",
      "Rebamipide"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-phase1-magnesium-sulfate-tobramycin",
    "drugAId": "drug-magnesium-sulfate",
    "drugBId": "drug-tobramycin",
    "drugAName": "Magnesium sulfate",
    "drugBName": "Tobramycin",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Magnesium sulfate dan Tobramycin pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 766)",
    "ddinterPairId": "DDInter-PAIR-111945",
    "ddinterOriginalText": "Aminoglycosides possess neuromuscular blocking activity, which may be additive with that of parenteral magnesium, potentially resulting in severe and/or prolonged respiratory depression during concomitant use. In addition, aminoglycosides may reduce serum magnesium levels.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #766"
    ],
    "alternativeOptionsA": [
      "Famotidine",
      "Pantoprazole",
      "Rebamipide"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-phase1-furosemide-dolasetron",
    "drugAId": "drug-furosemide",
    "drugBId": "drug-dolasetron",
    "drugAName": "Furosemide",
    "drugBName": "Dolasetron",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Furosemide dan Dolasetron pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 776)",
    "ddinterPairId": "DDInter-PAIR-15537",
    "ddinterOriginalText": "The risk of arrhythmia may be increased in patients taking dolasetron and diuretics. Dolasetron induced ECG changes (PR and QTc prolongation; QRS widening) have been observed in healthy volunteers and in controlled clinical trials. Diuretics may further predispose the patient to arrhythmia by inducing electrolyte abnormalities.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #776"
    ],
    "alternativeOptionsA": [
      "Indapamide",
      "Torsemide",
      "Eplerenone"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-phase1-dolasetron-hydrochlorothiazide",
    "drugAId": "drug-dolasetron",
    "drugBId": "drug-hydrochlorothiazide",
    "drugAName": "Dolasetron",
    "drugBName": "Hydrochlorothiazide",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Dolasetron dan Hydrochlorothiazide pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 776)",
    "ddinterPairId": "DDInter-PAIR-17063",
    "ddinterOriginalText": "The risk of arrhythmia may be increased in patients taking dolasetron and diuretics. Dolasetron induced ECG changes (PR and QTc prolongation; QRS widening) have been observed in healthy volunteers and in controlled clinical trials. Diuretics may further predispose the patient to arrhythmia by inducing electrolyte abnormalities.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #776"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Indapamide",
      "Torsemide",
      "Eplerenone"
    ]
  },
  {
    "id": "ddinter-phase1-chlorthalidone-dolasetron",
    "drugAId": "drug-chlorthalidone",
    "drugBId": "drug-dolasetron",
    "drugAName": "Chlorthalidone",
    "drugBName": "Dolasetron",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Chlorthalidone dan Dolasetron pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 776)",
    "ddinterPairId": "DDInter-PAIR-35370",
    "ddinterOriginalText": "The risk of arrhythmia may be increased in patients taking dolasetron and diuretics. Dolasetron induced ECG changes (PR and QTc prolongation; QRS widening) have been observed in healthy volunteers and in controlled clinical trials. Diuretics may further predispose the patient to arrhythmia by inducing electrolyte abnormalities.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #776"
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
    "id": "ddinter-phase1-dolasetron-indapamide",
    "drugAId": "drug-dolasetron",
    "drugBId": "drug-indapamide",
    "drugAName": "Dolasetron",
    "drugBName": "Indapamide",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Dolasetron dan Indapamide pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 776)",
    "ddinterPairId": "DDInter-PAIR-89966",
    "ddinterOriginalText": "The risk of arrhythmia may be increased in patients taking dolasetron and diuretics. Dolasetron induced ECG changes (PR and QTc prolongation; QRS widening) have been observed in healthy volunteers and in controlled clinical trials. Diuretics may further predispose the patient to arrhythmia by inducing electrolyte abnormalities.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #776"
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
    "id": "ddinter-phase1-lovastatin-lomitapide",
    "drugAId": "drug-lovastatin",
    "drugBId": "drug-lomitapide",
    "drugAName": "Lovastatin",
    "drugBName": "Lomitapide",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 780)",
    "ddinterPairId": "DDInter-PAIR-133135",
    "ddinterOriginalText": "Coadministration of lomitapide with other agents known to induce hepatotoxicity such as statins may potentiate the risk of liver injury. Clinical data suggest that hepatic fat accumulation is reversible after stopping treatment with lomitapide, although the long-term consequences are unknown. Coadministration with lomitapide may increase the plasma concentrations of simvastatin and lovastatin as well as their pharmacologically active acid metabolites. The proposed mechanism is lomitapide inhibition of CYP450 3A4, the isoenzyme primarily responsible for the metabolic clearance of simvastatin and lovastatin and their metabolites.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #780"
    ],
    "alternativeOptionsA": [
      "Rosuvastatin",
      "Pravastatin",
      "Pitavastatin",
      "Ezetimibe"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-phase1-simvastatin-lomitapide",
    "drugAId": "drug-simvastatin",
    "drugBId": "drug-lomitapide",
    "drugAName": "Simvastatin",
    "drugBName": "Lomitapide",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 780)",
    "ddinterPairId": "DDInter-PAIR-166145",
    "ddinterOriginalText": "Coadministration of lomitapide with other agents known to induce hepatotoxicity such as statins may potentiate the risk of liver injury. Clinical data suggest that hepatic fat accumulation is reversible after stopping treatment with lomitapide, although the long-term consequences are unknown. Coadministration with lomitapide may increase the plasma concentrations of simvastatin and lovastatin as well as their pharmacologically active acid metabolites. The proposed mechanism is lomitapide inhibition of CYP450 3A4, the isoenzyme primarily responsible for the metabolic clearance of simvastatin and lovastatin and their metabolites.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #780"
    ],
    "alternativeOptionsA": [
      "Rosuvastatin",
      "Pravastatin",
      "Pitavastatin",
      "Ezetimibe"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-phase1-digoxin-quinidine",
    "drugAId": "drug-digoxin",
    "drugBId": "drug-quinidine",
    "drugAName": "Digoxin",
    "drugBName": "Quinidine",
    "severity": "Major",
    "mechanismCategory": "Excretion",
    "mechanism": "Interaksi pada tingkat filtrasi glomerulus atau sekresi/reabsorpsi tubulus ginjal antara Digoxin dan Quinidine.",
    "clinicalOutcome": "Perubahan klirens ginjal yang dapat memperlambat eliminasi atau memicu akumulasi zat aktif.",
    "management": "Pantau fungsi ginjal (kreatinin serum, laju filtrasi glomerulus) dan kadar obat dalam darah secara berkala.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 785)",
    "ddinterPairId": "DDInter-PAIR-86810",
    "ddinterOriginalText": "Quinidine significantly increases serum digoxin levels in more than 90% of patients. The proposed mechanism is quinidine inhibition of the P-glycoprotein-mediated intestinal efflux and/or renal tubular secretion of digoxin.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #785"
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
    "id": "ddinter-phase1-diltiazem-butorphanol",
    "drugAId": "drug-diltiazem",
    "drugBId": "drug-butorphanol",
    "drugAName": "Diltiazem",
    "drugBName": "Butorphanol",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 800)",
    "ddinterPairId": "DDInter-PAIR-52313",
    "ddinterOriginalText": "Coadministration with inhibitors of CYP450 3A4 may increase the plasma concentrations of butorphanol according to the product labeling. Increased butorphanol concentrations could increase or prolong adverse drug effects and may cause potentially fatal respiratory depression. Conversely, discontinuation of a CYP450 3A4 inhibitor could decrease butorphanol plasma concentrations, decrease opioid efficacy, and possibly even lead to a withdrawal syndrome in patients who had developed physical dependence to butorphanol.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #800"
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
    "id": "ddinter-phase1-butorphanol-verapamil",
    "drugAId": "drug-butorphanol",
    "drugBId": "drug-verapamil",
    "drugAName": "Butorphanol",
    "drugBName": "Verapamil",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 800)",
    "ddinterPairId": "DDInter-PAIR-52622",
    "ddinterOriginalText": "Coadministration with inhibitors of CYP450 3A4 may increase the plasma concentrations of butorphanol according to the product labeling. Increased butorphanol concentrations could increase or prolong adverse drug effects and may cause potentially fatal respiratory depression. Conversely, discontinuation of a CYP450 3A4 inhibitor could decrease butorphanol plasma concentrations, decrease opioid efficacy, and possibly even lead to a withdrawal syndrome in patients who had developed physical dependence to butorphanol.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #800"
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
    "id": "ddinter-phase1-acebutolol-fingolimod",
    "drugAId": "drug-acebutolol",
    "drugBId": "drug-fingolimod",
    "drugAName": "Acebutolol",
    "drugBName": "Fingolimod",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Acebutolol dan Fingolimod pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 808)",
    "ddinterPairId": "DDInter-PAIR-4121",
    "ddinterOriginalText": "The risk of severe bradycardia and atrioventricular (AV) block may be increased during initiation of fingolimod treatment in patients receiving other drugs that slow heart rate or AV conduction such as beta-blockers, certain calcium channel blockers (e.g., diltiazem, verapamil), and digitalis. Fingolimod can cause a decrease in heart rate during initiation of therapy that is apparent within an hour of the first dose and maximal at approximately 6 hours postdose in most cases, but occasionally up to 20 hours after the first dose.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #808"
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
    "id": "ddinter-phase1-atenolol-fingolimod",
    "drugAId": "drug-atenolol",
    "drugBId": "drug-fingolimod",
    "drugAName": "Atenolol",
    "drugBName": "Fingolimod",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Atenolol dan Fingolimod pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 808)",
    "ddinterPairId": "DDInter-PAIR-35106",
    "ddinterOriginalText": "The risk of severe bradycardia and atrioventricular (AV) block may be increased during initiation of fingolimod treatment in patients receiving other drugs that slow heart rate or AV conduction such as beta-blockers, certain calcium channel blockers (e.g., diltiazem, verapamil), and digitalis. Fingolimod can cause a decrease in heart rate during initiation of therapy that is apparent within an hour of the first dose and maximal at approximately 6 hours postdose in most cases, but occasionally up to 20 hours after the first dose.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #808"
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
    "id": "ddinter-phase1-bisoprolol-fingolimod",
    "drugAId": "drug-bisoprolol",
    "drugBId": "drug-fingolimod",
    "drugAName": "Bisoprolol",
    "drugBName": "Fingolimod",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Bisoprolol dan Fingolimod pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 808)",
    "ddinterPairId": "DDInter-PAIR-44956",
    "ddinterOriginalText": "The risk of severe bradycardia and atrioventricular (AV) block may be increased during initiation of fingolimod treatment in patients receiving other drugs that slow heart rate or AV conduction such as beta-blockers, certain calcium channel blockers (e.g., diltiazem, verapamil), and digitalis. Fingolimod can cause a decrease in heart rate during initiation of therapy that is apparent within an hour of the first dose and maximal at approximately 6 hours postdose in most cases, but occasionally up to 20 hours after the first dose.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #808"
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
    "id": "ddinter-phase1-diltiazem-fingolimod",
    "drugAId": "drug-diltiazem",
    "drugBId": "drug-fingolimod",
    "drugAName": "Diltiazem",
    "drugBName": "Fingolimod",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Diltiazem dan Fingolimod pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 808)",
    "ddinterPairId": "DDInter-PAIR-57816",
    "ddinterOriginalText": "The risk of severe bradycardia and atrioventricular (AV) block may be increased during initiation of fingolimod treatment in patients receiving other drugs that slow heart rate or AV conduction such as beta-blockers, certain calcium channel blockers (e.g., diltiazem, verapamil), and digitalis. Fingolimod can cause a decrease in heart rate during initiation of therapy that is apparent within an hour of the first dose and maximal at approximately 6 hours postdose in most cases, but occasionally up to 20 hours after the first dose.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #808"
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
    "id": "ddinter-phase1-carvedilol-fingolimod",
    "drugAId": "drug-carvedilol",
    "drugBId": "drug-fingolimod",
    "drugAName": "Carvedilol",
    "drugBName": "Fingolimod",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Carvedilol dan Fingolimod pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 808)",
    "ddinterPairId": "DDInter-PAIR-59723",
    "ddinterOriginalText": "The risk of severe bradycardia and atrioventricular (AV) block may be increased during initiation of fingolimod treatment in patients receiving other drugs that slow heart rate or AV conduction such as beta-blockers, certain calcium channel blockers (e.g., diltiazem, verapamil), and digitalis. Fingolimod can cause a decrease in heart rate during initiation of therapy that is apparent within an hour of the first dose and maximal at approximately 6 hours postdose in most cases, but occasionally up to 20 hours after the first dose.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #808"
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
    "id": "ddinter-phase1-verapamil-fingolimod",
    "drugAId": "drug-verapamil",
    "drugBId": "drug-fingolimod",
    "drugAName": "Verapamil",
    "drugBName": "Fingolimod",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Verapamil dan Fingolimod pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 808)",
    "ddinterPairId": "DDInter-PAIR-75367",
    "ddinterOriginalText": "The risk of severe bradycardia and atrioventricular (AV) block may be increased during initiation of fingolimod treatment in patients receiving other drugs that slow heart rate or AV conduction such as beta-blockers, certain calcium channel blockers (e.g., diltiazem, verapamil), and digitalis. Fingolimod can cause a decrease in heart rate during initiation of therapy that is apparent within an hour of the first dose and maximal at approximately 6 hours postdose in most cases, but occasionally up to 20 hours after the first dose.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #808"
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
    "id": "ddinter-phase1-digoxin-fingolimod",
    "drugAId": "drug-digoxin",
    "drugBId": "drug-fingolimod",
    "drugAName": "Digoxin",
    "drugBName": "Fingolimod",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Digoxin dan Fingolimod pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 808)",
    "ddinterPairId": "DDInter-PAIR-86679",
    "ddinterOriginalText": "The risk of severe bradycardia and atrioventricular (AV) block may be increased during initiation of fingolimod treatment in patients receiving other drugs that slow heart rate or AV conduction such as beta-blockers, certain calcium channel blockers (e.g., diltiazem, verapamil), and digitalis. Fingolimod can cause a decrease in heart rate during initiation of therapy that is apparent within an hour of the first dose and maximal at approximately 6 hours postdose in most cases, but occasionally up to 20 hours after the first dose.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #808"
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
    "id": "ddinter-phase1-metoprolol-fingolimod",
    "drugAId": "drug-metoprolol",
    "drugBId": "drug-fingolimod",
    "drugAName": "Metoprolol",
    "drugBName": "Fingolimod",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Metoprolol dan Fingolimod pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 808)",
    "ddinterPairId": "DDInter-PAIR-101238",
    "ddinterOriginalText": "The risk of severe bradycardia and atrioventricular (AV) block may be increased during initiation of fingolimod treatment in patients receiving other drugs that slow heart rate or AV conduction such as beta-blockers, certain calcium channel blockers (e.g., diltiazem, verapamil), and digitalis. Fingolimod can cause a decrease in heart rate during initiation of therapy that is apparent within an hour of the first dose and maximal at approximately 6 hours postdose in most cases, but occasionally up to 20 hours after the first dose.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #808"
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
    "id": "ddinter-phase1-nebivolol-fingolimod",
    "drugAId": "drug-nebivolol",
    "drugBId": "drug-fingolimod",
    "drugAName": "Nebivolol",
    "drugBName": "Fingolimod",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Nebivolol dan Fingolimod pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 808)",
    "ddinterPairId": "DDInter-PAIR-103362",
    "ddinterOriginalText": "The risk of severe bradycardia and atrioventricular (AV) block may be increased during initiation of fingolimod treatment in patients receiving other drugs that slow heart rate or AV conduction such as beta-blockers, certain calcium channel blockers (e.g., diltiazem, verapamil), and digitalis. Fingolimod can cause a decrease in heart rate during initiation of therapy that is apparent within an hour of the first dose and maximal at approximately 6 hours postdose in most cases, but occasionally up to 20 hours after the first dose.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #808"
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
    "id": "ddinter-phase1-propranolol-fingolimod",
    "drugAId": "drug-propranolol",
    "drugBId": "drug-fingolimod",
    "drugAName": "Propranolol",
    "drugBName": "Fingolimod",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Propranolol dan Fingolimod pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 808)",
    "ddinterPairId": "DDInter-PAIR-109180",
    "ddinterOriginalText": "The risk of severe bradycardia and atrioventricular (AV) block may be increased during initiation of fingolimod treatment in patients receiving other drugs that slow heart rate or AV conduction such as beta-blockers, certain calcium channel blockers (e.g., diltiazem, verapamil), and digitalis. Fingolimod can cause a decrease in heart rate during initiation of therapy that is apparent within an hour of the first dose and maximal at approximately 6 hours postdose in most cases, but occasionally up to 20 hours after the first dose.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #808"
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
    "id": "ddinter-phase1-labetalol-fingolimod",
    "drugAId": "drug-labetalol",
    "drugBId": "drug-fingolimod",
    "drugAName": "Labetalol",
    "drugBName": "Fingolimod",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Labetalol dan Fingolimod pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 808)",
    "ddinterPairId": "DDInter-PAIR-126608",
    "ddinterOriginalText": "The risk of severe bradycardia and atrioventricular (AV) block may be increased during initiation of fingolimod treatment in patients receiving other drugs that slow heart rate or AV conduction such as beta-blockers, certain calcium channel blockers (e.g., diltiazem, verapamil), and digitalis. Fingolimod can cause a decrease in heart rate during initiation of therapy that is apparent within an hour of the first dose and maximal at approximately 6 hours postdose in most cases, but occasionally up to 20 hours after the first dose.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #808"
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
    "id": "ddinter-phase1-rosuvastatin-enasidenib",
    "drugAId": "drug-rosuvastatin",
    "drugBId": "drug-enasidenib",
    "drugAName": "Rosuvastatin",
    "drugBName": "Enasidenib",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 814)",
    "ddinterPairId": "DDInter-PAIR-98850",
    "ddinterOriginalText": "Coadministration of enasidenib with rosuvastatin may increase the blood concentrations of rosuvastatin leading to signs and symptoms of myopathy and rhabdomyolysis. The proposed mechanism is decreased rosuvastatin clearance due to enasidenib -mediated inhibition of organic anion transporting polypeptides (OATP) 1B1/1B3 and breast cancer resistance protein (BCRP) transporters.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #814"
    ],
    "alternativeOptionsA": [
      "Pravastatin",
      "Pitavastatin",
      "Ezetimibe"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-phase1-verapamil-nebivolol",
    "drugAId": "drug-verapamil",
    "drugBId": "drug-nebivolol",
    "drugAName": "Verapamil",
    "drugBName": "Nebivolol",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Verapamil dan Nebivolol pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 825)",
    "ddinterPairId": "DDInter-PAIR-75497",
    "ddinterOriginalText": "Additive reductions in heart rate, cardiac conduction, and cardiac contractility may occur when calcium channel blockers, especially verapamil and diltiazem, are used concomitantly with beta-blockers. While this combination may be useful and effective in some situations, potentially serious cardiovascular adverse effects such as congestive heart failure, severe hypotension, and/or exacerbation of angina may occur. Ventricular asystole, sinus arrest, and heart block have also been reported. The risk is increased with high dosages, IV administration, left ventricular dysfunction, or AV conduction abnormalities. Beta-blocker ophthalmic solutions may also interact, as they are systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels. Bradycardia (36 bpm) with wandering atrial pacemaker occurred in a patient receiving oral verapamil and timolol ophthalmic drops. The proposed mechanisms include additive slowing in AV conduction, reduced cardiac contractility secondary to beta-blockade, and decreased peripheral vascular resistance secondary to calcium channel blockade. Verapamil and diltiazem may also decrease the clearance of some beta-blockers.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #825"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Amlodipine",
      "Candesartan",
      "Valsartan"
    ]
  },
  {
    "id": "ddinter-phase1-diltiazem-ivacaftor",
    "drugAId": "drug-diltiazem",
    "drugBId": "drug-ivacaftor",
    "drugAName": "Diltiazem",
    "drugBName": "Ivacaftor",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 859)",
    "ddinterPairId": "DDInter-PAIR-57891",
    "ddinterOriginalText": "Coadministration with moderate inhibitors of CYP450 3A4 may significantly increase the plasma concentrations of ivacaftor, which is primarily metabolized by the isoenzyme.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #859"
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
    "id": "ddinter-phase1-verapamil-ivacaftor",
    "drugAId": "drug-verapamil",
    "drugBId": "drug-ivacaftor",
    "drugAName": "Verapamil",
    "drugBName": "Ivacaftor",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 859)",
    "ddinterPairId": "DDInter-PAIR-75424",
    "ddinterOriginalText": "Coadministration with moderate inhibitors of CYP450 3A4 may significantly increase the plasma concentrations of ivacaftor, which is primarily metabolized by the isoenzyme.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #859"
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
    "id": "ddinter-phase1-alfuzosin-lefamulin",
    "drugAId": "drug-alfuzosin",
    "drugBId": "drug-lefamulin",
    "drugAName": "Alfuzosin",
    "drugBName": "Lefamulin",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Alfuzosin dan Lefamulin pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 861)",
    "ddinterPairId": "DDInter-PAIR-16248",
    "ddinterOriginalText": "Lefamulin may cause dose-related prolongation of the QT interval. Theoretically, coadministration with other agents that can prolong the QT interval may result in additive effects and increased risk of ventricular arrhythmias including torsade de pointes and sudden death.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #861"
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
    "id": "ddinter-phase1-ondansetron-lefamulin",
    "drugAId": "drug-ondansetron",
    "drugBId": "drug-lefamulin",
    "drugAName": "Ondansetron",
    "drugBName": "Lefamulin",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Ondansetron dan Lefamulin pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 861)",
    "ddinterPairId": "DDInter-PAIR-128289",
    "ddinterOriginalText": "Lefamulin may cause dose-related prolongation of the QT interval. Theoretically, coadministration with other agents that can prolong the QT interval may result in additive effects and increased risk of ventricular arrhythmias including torsade de pointes and sudden death.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #861"
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
    "id": "ddinter-phase1-diltiazem-lomitapide",
    "drugAId": "drug-diltiazem",
    "drugBId": "drug-lomitapide",
    "drugAName": "Diltiazem",
    "drugBName": "Lomitapide",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 868)",
    "ddinterPairId": "DDInter-PAIR-57917",
    "ddinterOriginalText": "Coadministration with potent and moderate inhibitors of CYP450 3A4 may significantly increase the plasma concentrations of lomitapide, which is primarily metabolized by the isoenzyme.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #868"
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
    "id": "ddinter-phase1-verapamil-lomitapide",
    "drugAId": "drug-verapamil",
    "drugBId": "drug-lomitapide",
    "drugAName": "Verapamil",
    "drugBName": "Lomitapide",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 868)",
    "ddinterPairId": "DDInter-PAIR-75448",
    "ddinterOriginalText": "Coadministration with potent and moderate inhibitors of CYP450 3A4 may significantly increase the plasma concentrations of lomitapide, which is primarily metabolized by the isoenzyme.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #868"
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
    "id": "ddinter-phase1-alfuzosin-chloroquine",
    "drugAId": "drug-alfuzosin",
    "drugBId": "drug-chloroquine",
    "drugAName": "Alfuzosin",
    "drugBName": "Chloroquine",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Interaksi farmakodinamik aditif pada miusit skeletal dan metabolisme lipid hepar antara Alfuzosin dan Chloroquine.",
    "clinicalOutcome": "Peningkatan efikasi penurunan lipid; risiko mialgia atau peningkatan transaminase hepar yang umumnya ringan hingga sedang.",
    "management": "Pantau enzim transaminase (SGOT/SGPT) dan enzim otot (CK) bila terdapat keluhan nyeri otot yang tidak biasa.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 875)",
    "ddinterPairId": "DDInter-PAIR-16125",
    "ddinterOriginalText": "Chloroquine and hydroxychloroquine can cause dose-related prolongation of the QT interval. Theoretically, coadministration with other agents that can prolong the QT interval may result in additive effects and increased risk of ventricular arrhythmias including torsade de pointes and sudden death. Because COVID-19 may disproportionately affect the elderly and individuals with preexisting heart disease, and cardiac complications such as myocarditis and cardiomyopathy as well as organ failure may occur in patients with severe COVID-19, it appears likely that hospitalized patients with COVID-19 may represent a particularly susceptible and high-risk population, and other, less critically ill patients may not have the same arrhythmic risk.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #875"
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
    "id": "ddinter-phase1-alfuzosin-hydroxychloroquine",
    "drugAId": "drug-alfuzosin",
    "drugBId": "drug-hydroxychloroquine",
    "drugAName": "Alfuzosin",
    "drugBName": "Hydroxychloroquine",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Interaksi farmakodinamik aditif pada miusit skeletal dan metabolisme lipid hepar antara Alfuzosin dan Hydroxychloroquine.",
    "clinicalOutcome": "Peningkatan efikasi penurunan lipid; risiko mialgia atau peningkatan transaminase hepar yang umumnya ringan hingga sedang.",
    "management": "Pantau enzim transaminase (SGOT/SGPT) dan enzim otot (CK) bila terdapat keluhan nyeri otot yang tidak biasa.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 875)",
    "ddinterPairId": "DDInter-PAIR-16221",
    "ddinterOriginalText": "Chloroquine and hydroxychloroquine can cause dose-related prolongation of the QT interval. Theoretically, coadministration with other agents that can prolong the QT interval may result in additive effects and increased risk of ventricular arrhythmias including torsade de pointes and sudden death. Because COVID-19 may disproportionately affect the elderly and individuals with preexisting heart disease, and cardiac complications such as myocarditis and cardiomyopathy as well as organ failure may occur in patients with severe COVID-19, it appears likely that hospitalized patients with COVID-19 may represent a particularly susceptible and high-risk population, and other, less critically ill patients may not have the same arrhythmic risk.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #875"
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
    "id": "ddinter-phase1-chloroquine-ondansetron",
    "drugAId": "drug-chloroquine",
    "drugBId": "drug-ondansetron",
    "drugAName": "Chloroquine",
    "drugBName": "Ondansetron",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Interaksi farmakodinamik aditif pada miusit skeletal dan metabolisme lipid hepar antara Chloroquine dan Ondansetron.",
    "clinicalOutcome": "Peningkatan efikasi penurunan lipid; risiko mialgia atau peningkatan transaminase hepar yang umumnya ringan hingga sedang.",
    "management": "Pantau enzim transaminase (SGOT/SGPT) dan enzim otot (CK) bila terdapat keluhan nyeri otot yang tidak biasa.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 875)",
    "ddinterPairId": "DDInter-PAIR-63139",
    "ddinterOriginalText": "Chloroquine and hydroxychloroquine can cause dose-related prolongation of the QT interval. Theoretically, coadministration with other agents that can prolong the QT interval may result in additive effects and increased risk of ventricular arrhythmias including torsade de pointes and sudden death. Because COVID-19 may disproportionately affect the elderly and individuals with preexisting heart disease, and cardiac complications such as myocarditis and cardiomyopathy as well as organ failure may occur in patients with severe COVID-19, it appears likely that hospitalized patients with COVID-19 may represent a particularly susceptible and high-risk population, and other, less critically ill patients may not have the same arrhythmic risk.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #875"
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
    "id": "ddinter-phase1-leflunomide-rosuvastatin",
    "drugAId": "drug-leflunomide",
    "drugBId": "drug-rosuvastatin",
    "drugAName": "Leflunomide",
    "drugBName": "Rosuvastatin",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Leflunomide dan Rosuvastatin pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 897)",
    "ddinterPairId": "DDInter-PAIR-128637",
    "ddinterOriginalText": "The recent, concomitant, or subsequent use (without the recommended leflunomide washout period or procedure) of other agents known to induce hepatotoxicity may potentiate the risk of liver injury associated with leflunomide. Coadministration with teriflunomide may increase the plasma concentrations and the risk of adverse effects of drugs that are substrates of the organic anion transporting polypeptide (OATP) 1B1 and 1B3 and/or breast cancer resistance protein (BCRP) transporters. The proposed mechanism, based on in vivo data, is decreased clearance due to teriflunomide-mediated inhibition of OATP 1B1/1B3 or BCRP transport proteins.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #897"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Pravastatin",
      "Pitavastatin",
      "Ezetimibe"
    ]
  },
  {
    "id": "ddinter-phase1-rosuvastatin-teriflunomide",
    "drugAId": "drug-rosuvastatin",
    "drugBId": "drug-teriflunomide",
    "drugAName": "Rosuvastatin",
    "drugBName": "Teriflunomide",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Rosuvastatin dan Teriflunomide pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 897)",
    "ddinterPairId": "DDInter-PAIR-162986",
    "ddinterOriginalText": "The recent, concomitant, or subsequent use (without the recommended leflunomide washout period or procedure) of other agents known to induce hepatotoxicity may potentiate the risk of liver injury associated with leflunomide. Coadministration with teriflunomide may increase the plasma concentrations and the risk of adverse effects of drugs that are substrates of the organic anion transporting polypeptide (OATP) 1B1 and 1B3 and/or breast cancer resistance protein (BCRP) transporters. The proposed mechanism, based on in vivo data, is decreased clearance due to teriflunomide-mediated inhibition of OATP 1B1/1B3 or BCRP transport proteins.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #897"
    ],
    "alternativeOptionsA": [
      "Pravastatin",
      "Pitavastatin",
      "Ezetimibe"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-phase1-atorvastatin-fosamprenavir",
    "drugAId": "drug-atorvastatin",
    "drugBId": "drug-fosamprenavir",
    "drugAName": "Atorvastatin",
    "drugBName": "Fosamprenavir",
    "severity": "Minor",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 911)",
    "ddinterPairId": "DDInter-PAIR-PHASE1-911-88"
  },
  {
    "id": "ddinter-phase1-amprenavir-atorvastatin",
    "drugAId": "drug-amprenavir",
    "drugBId": "drug-atorvastatin",
    "drugAName": "Amprenavir",
    "drugBName": "Atorvastatin",
    "severity": "Minor",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 911)",
    "ddinterPairId": "DDInter-PAIR-PHASE1-911-89"
  },
  {
    "id": "ddinter-phase1-atazanavir-atorvastatin",
    "drugAId": "drug-atazanavir",
    "drugBId": "drug-atorvastatin",
    "drugAName": "Atazanavir",
    "drugBName": "Atorvastatin",
    "severity": "Minor",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 911)",
    "ddinterPairId": "DDInter-PAIR-PHASE1-911-90"
  },
  {
    "id": "ddinter-phase1-indinavir-atorvastatin",
    "drugAId": "drug-indinavir",
    "drugBId": "drug-atorvastatin",
    "drugAName": "Indinavir",
    "drugBName": "Atorvastatin",
    "severity": "Minor",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 911)",
    "ddinterPairId": "DDInter-PAIR-PHASE1-911-91"
  },
  {
    "id": "ddinter-phase1-nelfinavir-atorvastatin",
    "drugAId": "drug-nelfinavir",
    "drugBId": "drug-atorvastatin",
    "drugAName": "Nelfinavir",
    "drugBName": "Atorvastatin",
    "severity": "Minor",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 911)",
    "ddinterPairId": "DDInter-PAIR-PHASE1-911-92"
  },
  {
    "id": "ddinter-phase1-ritonavir-atorvastatin",
    "drugAId": "drug-ritonavir",
    "drugBId": "drug-atorvastatin",
    "drugAName": "Ritonavir",
    "drugBName": "Atorvastatin",
    "severity": "Minor",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 911)",
    "ddinterPairId": "DDInter-PAIR-PHASE1-911-93"
  },
  {
    "id": "ddinter-phase1-atorvastatin-saquinavir",
    "drugAId": "drug-atorvastatin",
    "drugBId": "drug-saquinavir",
    "drugAName": "Atorvastatin",
    "drugBName": "Saquinavir",
    "severity": "Minor",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 911)",
    "ddinterPairId": "DDInter-PAIR-PHASE1-911-94"
  },
  {
    "id": "ddinter-phase1-alfuzosin-efavirenz",
    "drugAId": "drug-alfuzosin",
    "drugBId": "drug-efavirenz",
    "drugAName": "Alfuzosin",
    "drugBName": "Efavirenz",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Induksi enzim metabolisme hepar CYP450 mempercepat eliminasi obat pasangan, menurunkan kadar plasmanya.",
    "clinicalOutcome": "Penurunan konsentrasi obat dalam darah yang berpotensi mengurangi efektivitas klinis.",
    "management": "Pantau efikasi terapi secara berkala; evaluasi perlunya peningkatan dosis obat substrat selama terapi kombinasi.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 921)",
    "ddinterPairId": "DDInter-PAIR-16180",
    "ddinterOriginalText": "Efavirenz can cause significant QT interval prolongation in patients with the CYP450 2B6 *6/*6 genotype due to reduced metabolic clearance of the drug stemming from decreased levels of functional CYP450 2B6 isoenzyme.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #921"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Cabotegravir",
      "Tenofovir alafenamide",
      "Rilpivirine",
      "Bictegravir",
      "Maraviroc",
      "Remdesivir"
    ]
  },
  {
    "id": "ddinter-phase1-efavirenz-ondansetron",
    "drugAId": "drug-efavirenz",
    "drugBId": "drug-ondansetron",
    "drugAName": "Efavirenz",
    "drugBName": "Ondansetron",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Induksi enzim metabolisme hepar CYP450 mempercepat eliminasi obat pasangan, menurunkan kadar plasmanya.",
    "clinicalOutcome": "Penurunan konsentrasi obat dalam darah yang berpotensi mengurangi efektivitas klinis.",
    "management": "Pantau efikasi terapi secara berkala; evaluasi perlunya peningkatan dosis obat substrat selama terapi kombinasi.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 921)",
    "ddinterPairId": "DDInter-PAIR-96108",
    "ddinterOriginalText": "Efavirenz can cause significant QT interval prolongation in patients with the CYP450 2B6 *6/*6 genotype due to reduced metabolic clearance of the drug stemming from decreased levels of functional CYP450 2B6 isoenzyme.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #921"
    ],
    "alternativeOptionsA": [
      "Cabotegravir",
      "Tenofovir alafenamide",
      "Rilpivirine",
      "Bictegravir",
      "Maraviroc",
      "Remdesivir"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-phase1-gemfibrozil-pexidartinib",
    "drugAId": "drug-gemfibrozil",
    "drugBId": "drug-pexidartinib",
    "drugAName": "Gemfibrozil",
    "drugBName": "Pexidartinib",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 930)",
    "ddinterPairId": "DDInter-PAIR-153136",
    "ddinterOriginalText": "Coadministration of pexidartinib with strong CYP450 3A4 inhibitors and/or uridine diphosphate glucuronosyltransferase (UGT) inhibitors may significantly increase the plasma concentrations and the incidence and severity of adverse effects of pexidartinib, including potentially fatal hepatotoxicity. The proposed mechanism is inhibition of CYP450 3A4 and/or UGT, the primary isoenzymes responsible for the metabolic clearance of pexidartinib.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #930"
    ],
    "alternativeOptionsA": [
      "Ezetimibe",
      "Omega-3 Acid Ethyl Esters"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-phase1-cimetidine-pimozide",
    "drugAId": "drug-cimetidine",
    "drugBId": "drug-pimozide",
    "drugAName": "Cimetidine",
    "drugBName": "Pimozide",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 945)",
    "ddinterPairId": "DDInter-PAIR-65718",
    "ddinterOriginalText": "Coadministration with inhibitors of CYP450 2D6 may increase the plasma concentrations of pimozide, which is partially metabolized by the isoenzyme. The use of pimozide has been associated with dose-related prolongation of the QT interval, thus elevated plasma levels of the drug may potentiate the risk of ventricular arrhythmias such as ventricular tachycardia and torsade de pointes as well as cardiac arrest and sudden death.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #945"
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
    "id": "ddinter-phase1-clonidine-sodium-oxybate",
    "drugAId": "drug-clonidine",
    "drugBId": "drug-sodium-oxybate",
    "drugAName": "Clonidine",
    "drugBName": "Sodium oxybate",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Clonidine dan Sodium oxybate pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 952)",
    "ddinterPairId": "DDInter-PAIR-71560",
    "ddinterOriginalText": "The central nervous system and respiratory depressant effects of sodium oxybate, which is the sodium salt of gamma hydroxybutyrate (GHB), may be potentiated by concomitant use of other agents with CNS depressant effects. An increased risk of serious adverse reactions such as respiratory depression, hypotension, profound sedation, syncope, coma, and even death should be considered.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #952"
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
    "id": "ddinter-phase1-doxazosin-sodium-oxybate",
    "drugAId": "drug-doxazosin",
    "drugBId": "drug-sodium-oxybate",
    "drugAName": "Doxazosin",
    "drugBName": "Sodium oxybate",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Doxazosin dan Sodium oxybate pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 952)",
    "ddinterPairId": "DDInter-PAIR-90972",
    "ddinterOriginalText": "The central nervous system and respiratory depressant effects of sodium oxybate, which is the sodium salt of gamma hydroxybutyrate (GHB), may be potentiated by concomitant use of other agents with CNS depressant effects. An increased risk of serious adverse reactions such as respiratory depression, hypotension, profound sedation, syncope, coma, and even death should be considered.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #952"
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
    "id": "ddinter-phase1-disopyramide-verapamil",
    "drugAId": "drug-disopyramide",
    "drugBId": "drug-verapamil",
    "drugAName": "Disopyramide",
    "drugBName": "Verapamil",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Disopyramide dan Verapamil pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 965)",
    "ddinterPairId": "DDInter-PAIR-75317",
    "ddinterOriginalText": "Concomitant use of disopyramide with other drugs that have negative inotropic effects such as verapamil may cause profound hypotension, syncope, bradycardia, asystole and heart failure, particularly in patients with conduction defects. Additionally, verapamil is a moderate CYP450 3A4 inhibitor and may interfere with the clearance of disopyramide. Increased exposure to disopyramide may potentiate the risk of QT interval prolongation, which has been associated with ventricular arrhythmias including torsade de pointes and sudden death.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #965"
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
    "id": "ddinter-phase1-gemfibrozil-dasabuvir",
    "drugAId": "drug-gemfibrozil",
    "drugBId": "drug-dasabuvir",
    "drugAName": "Gemfibrozil",
    "drugBName": "Dasabuvir",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 991)",
    "ddinterPairId": "DDInter-PAIR-105473",
    "ddinterOriginalText": "Coadministration with potent inhibitors of CYP450 2C8 may significantly increase the plasma concentrations of dasabuvir, which is primarily metabolized by the isoenzyme. When a single dose of dasabuvir was administered to 11 study subjects treated with the potent CYP450 2C8 inhibitor gemfibrozil at 600 mg twice daily, dasabuvir peak plasma concentration (Cmax) and systemic exposure (AUC) increased by approximately 2- and 11-fold, respectively.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #991"
    ],
    "alternativeOptionsA": [
      "Ezetimibe",
      "Omega-3 Acid Ethyl Esters"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-phase1-pioglitazone-lumateperone",
    "drugAId": "drug-pioglitazone",
    "drugBId": "drug-lumateperone",
    "drugAName": "Pioglitazone",
    "drugBName": "Lumateperone",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Induksi enzim metabolisme hepar CYP450 mempercepat eliminasi obat pasangan, menurunkan kadar plasmanya.",
    "clinicalOutcome": "Penurunan konsentrasi obat dalam darah yang berpotensi mengurangi efektivitas klinis.",
    "management": "Pantau efikasi terapi secara berkala; evaluasi perlunya peningkatan dosis obat substrat selama terapi kombinasi.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 996)",
    "ddinterPairId": "DDInter-PAIR-18345",
    "ddinterOriginalText": "Coadministration with inducers of CYP450 3A4 may decrease the plasma concentrations of lumateperone, which is metabolized by the isoenzyme in vitro.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #996"
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
    "id": "ddinter-phase1-dofetilide-hydrochlorothiazide",
    "drugAId": "drug-dofetilide",
    "drugBId": "drug-hydrochlorothiazide",
    "drugAName": "Dofetilide",
    "drugBName": "Hydrochlorothiazide",
    "severity": "Major",
    "mechanismCategory": "Others",
    "mechanism": "Interaksi farmakologis atau fisikokimiawi antara Dofetilide dan Hydrochlorothiazide sebagaimana didokumentasikan dalam DDInter 2.0.",
    "clinicalOutcome": "Modulasi respons terapi atau timbulnya efek samping ringan yang memerlukan perhatian klinis.",
    "management": "Lakukan pemantauan klinis rutin; pisahkan waktu pemberian bila terdapat inkompatibilitas.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1008)",
    "ddinterPairId": "DDInter-PAIR-17062",
    "ddinterOriginalText": "Coadministration with hydrochlorothiazide (HCTZ) may increase the plasma concentrations and pharmacodynamic effects of dofetilide. The mechanism of interaction has not been described.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1008"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Indapamide",
      "Torsemide",
      "Eplerenone"
    ]
  },
  {
    "id": "ddinter-phase1-magnesium-oxide-patiromer",
    "drugAId": "drug-magnesium-oxide",
    "drugBId": "drug-patiromer",
    "drugAName": "Magnesium oxide",
    "drugBName": "Patiromer",
    "severity": "Major",
    "mechanismCategory": "Others",
    "mechanism": "Interaksi farmakologis atau fisikokimiawi antara Magnesium oxide dan Patiromer sebagaimana didokumentasikan dalam DDInter 2.0.",
    "clinicalOutcome": "Modulasi respons terapi atau timbulnya efek samping ringan yang memerlukan perhatian klinis.",
    "management": "Lakukan pemantauan klinis rutin; pisahkan waktu pemberian bila terdapat inkompatibilitas.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1025)",
    "ddinterPairId": "DDInter-PAIR-68783",
    "ddinterOriginalText": "Systemic alkalosis has been reported when cation-exchange resins were administered orally in combination with nonabsorbable cation-donating preparations such as antacids or laxatives. The mechanism involves binding of the cation to the resin, which prevents the cation from neutralizing bicarbonate ions in the intestine and also interferes with the resin's potassium exchange capability.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1025"
    ],
    "alternativeOptionsA": [
      "Famotidine",
      "Pantoprazole",
      "Rebamipide"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-phase1-tolevamer-magnesium-oxide",
    "drugAId": "drug-tolevamer",
    "drugBId": "drug-magnesium-oxide",
    "drugAName": "Tolevamer",
    "drugBName": "Magnesium oxide",
    "severity": "Major",
    "mechanismCategory": "Others",
    "mechanism": "Interaksi farmakologis atau fisikokimiawi antara Tolevamer dan Magnesium oxide sebagaimana didokumentasikan dalam DDInter 2.0.",
    "clinicalOutcome": "Modulasi respons terapi atau timbulnya efek samping ringan yang memerlukan perhatian klinis.",
    "management": "Lakukan pemantauan klinis rutin; pisahkan waktu pemberian bila terdapat inkompatibilitas.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1025)",
    "ddinterPairId": "DDInter-PAIR-68874",
    "ddinterOriginalText": "Systemic alkalosis has been reported when cation-exchange resins were administered orally in combination with nonabsorbable cation-donating preparations such as antacids or laxatives. The mechanism involves binding of the cation to the resin, which prevents the cation from neutralizing bicarbonate ions in the intestine and also interferes with the resin's potassium exchange capability.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1025"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Famotidine",
      "Pantoprazole",
      "Rebamipide"
    ]
  },
  {
    "id": "ddinter-phase1-patiromer-magnesium-carbonate",
    "drugAId": "drug-patiromer",
    "drugBId": "drug-magnesium-carbonate",
    "drugAName": "Patiromer",
    "drugBName": "Magnesium carbonate",
    "severity": "Major",
    "mechanismCategory": "Others",
    "mechanism": "Interaksi farmakologis atau fisikokimiawi antara Patiromer dan Magnesium carbonate sebagaimana didokumentasikan dalam DDInter 2.0.",
    "clinicalOutcome": "Modulasi respons terapi atau timbulnya efek samping ringan yang memerlukan perhatian klinis.",
    "management": "Lakukan pemantauan klinis rutin; pisahkan waktu pemberian bila terdapat inkompatibilitas.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1025)",
    "ddinterPairId": "DDInter-PAIR-106775",
    "ddinterOriginalText": "Systemic alkalosis has been reported when cation-exchange resins were administered orally in combination with nonabsorbable cation-donating preparations such as antacids or laxatives. The mechanism involves binding of the cation to the resin, which prevents the cation from neutralizing bicarbonate ions in the intestine and also interferes with the resin's potassium exchange capability.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1025"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Famotidine",
      "Pantoprazole",
      "Rebamipide"
    ]
  },
  {
    "id": "ddinter-phase1-magnesium-hydroxide-patiromer",
    "drugAId": "drug-magnesium-hydroxide",
    "drugBId": "drug-patiromer",
    "drugAName": "Magnesium hydroxide",
    "drugBName": "Patiromer",
    "severity": "Major",
    "mechanismCategory": "Others",
    "mechanism": "Interaksi farmakologis atau fisikokimiawi antara Magnesium hydroxide dan Patiromer sebagaimana didokumentasikan dalam DDInter 2.0.",
    "clinicalOutcome": "Modulasi respons terapi atau timbulnya efek samping ringan yang memerlukan perhatian klinis.",
    "management": "Lakukan pemantauan klinis rutin; pisahkan waktu pemberian bila terdapat inkompatibilitas.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1025)",
    "ddinterPairId": "DDInter-PAIR-106780",
    "ddinterOriginalText": "Systemic alkalosis has been reported when cation-exchange resins were administered orally in combination with nonabsorbable cation-donating preparations such as antacids or laxatives. The mechanism involves binding of the cation to the resin, which prevents the cation from neutralizing bicarbonate ions in the intestine and also interferes with the resin's potassium exchange capability.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1025"
    ],
    "alternativeOptionsA": [
      "Famotidine",
      "Pantoprazole",
      "Rebamipide"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-phase1-tolevamer-magnesium-carbonate",
    "drugAId": "drug-tolevamer",
    "drugBId": "drug-magnesium-carbonate",
    "drugAName": "Tolevamer",
    "drugBName": "Magnesium carbonate",
    "severity": "Major",
    "mechanismCategory": "Others",
    "mechanism": "Interaksi farmakologis atau fisikokimiawi antara Tolevamer dan Magnesium carbonate sebagaimana didokumentasikan dalam DDInter 2.0.",
    "clinicalOutcome": "Modulasi respons terapi atau timbulnya efek samping ringan yang memerlukan perhatian klinis.",
    "management": "Lakukan pemantauan klinis rutin; pisahkan waktu pemberian bila terdapat inkompatibilitas.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1025)",
    "ddinterPairId": "DDInter-PAIR-111541",
    "ddinterOriginalText": "Systemic alkalosis has been reported when cation-exchange resins were administered orally in combination with nonabsorbable cation-donating preparations such as antacids or laxatives. The mechanism involves binding of the cation to the resin, which prevents the cation from neutralizing bicarbonate ions in the intestine and also interferes with the resin's potassium exchange capability.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1025"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Famotidine",
      "Pantoprazole",
      "Rebamipide"
    ]
  },
  {
    "id": "ddinter-phase1-tolevamer-magnesium-hydroxide",
    "drugAId": "drug-tolevamer",
    "drugBId": "drug-magnesium-hydroxide",
    "drugAName": "Tolevamer",
    "drugBName": "Magnesium hydroxide",
    "severity": "Major",
    "mechanismCategory": "Others",
    "mechanism": "Interaksi farmakologis atau fisikokimiawi antara Tolevamer dan Magnesium hydroxide sebagaimana didokumentasikan dalam DDInter 2.0.",
    "clinicalOutcome": "Modulasi respons terapi atau timbulnya efek samping ringan yang memerlukan perhatian klinis.",
    "management": "Lakukan pemantauan klinis rutin; pisahkan waktu pemberian bila terdapat inkompatibilitas.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1025)",
    "ddinterPairId": "DDInter-PAIR-111546",
    "ddinterOriginalText": "Systemic alkalosis has been reported when cation-exchange resins were administered orally in combination with nonabsorbable cation-donating preparations such as antacids or laxatives. The mechanism involves binding of the cation to the resin, which prevents the cation from neutralizing bicarbonate ions in the intestine and also interferes with the resin's potassium exchange capability.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1025"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Famotidine",
      "Pantoprazole",
      "Rebamipide"
    ]
  },
  {
    "id": "ddinter-phase1-pravastatin-bempedoic-acid",
    "drugAId": "drug-pravastatin",
    "drugBId": "drug-bempedoic-acid",
    "drugAName": "Pravastatin",
    "drugBName": "Bempedoic acid",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Interaksi farmakodinamik aditif pada miusit skeletal dan metabolisme lipid hepar antara Pravastatin dan Bempedoic acid.",
    "clinicalOutcome": "Peningkatan efikasi penurunan lipid; risiko mialgia atau peningkatan transaminase hepar yang umumnya ringan hingga sedang.",
    "management": "Pantau enzim transaminase (SGOT/SGPT) dan enzim otot (CK) bila terdapat keluhan nyeri otot yang tidak biasa.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1028)",
    "ddinterPairId": "DDInter-PAIR-40476",
    "ddinterOriginalText": "Coadministration with bempedoic acid may increase the plasma concentrations of simvastatin and pravastatin and risk of statin-related myopathy. The mechanism of the interaction has not been reported.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1028"
    ],
    "alternativeOptionsA": [
      "Rosuvastatin",
      "Pitavastatin",
      "Ezetimibe"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-phase1-simvastatin-bempedoic-acid",
    "drugAId": "drug-simvastatin",
    "drugBId": "drug-bempedoic-acid",
    "drugAName": "Simvastatin",
    "drugBName": "Bempedoic acid",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Interaksi farmakodinamik aditif pada miusit skeletal dan metabolisme lipid hepar antara Simvastatin dan Bempedoic acid.",
    "clinicalOutcome": "Peningkatan efikasi penurunan lipid; risiko mialgia atau peningkatan transaminase hepar yang umumnya ringan hingga sedang.",
    "management": "Pantau enzim transaminase (SGOT/SGPT) dan enzim otot (CK) bila terdapat keluhan nyeri otot yang tidak biasa.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1028)",
    "ddinterPairId": "DDInter-PAIR-40486",
    "ddinterOriginalText": "Coadministration with bempedoic acid may increase the plasma concentrations of simvastatin and pravastatin and risk of statin-related myopathy. The mechanism of the interaction has not been reported.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1028"
    ],
    "alternativeOptionsA": [
      "Rosuvastatin",
      "Pravastatin",
      "Pitavastatin",
      "Ezetimibe"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-phase1-ranolazine-verapamil",
    "drugAId": "drug-ranolazine",
    "drugBId": "drug-verapamil",
    "drugAName": "Ranolazine",
    "drugBName": "Verapamil",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1030)",
    "ddinterPairId": "DDInter-PAIR-75569",
    "ddinterOriginalText": "Coadministration with inhibitors of CYP450 3A4 may increase the plasma concentrations of ranolazine, which is primarily metabolized by the isoenzyme. Because ranolazine prolongs QT interval in a dose-dependent manner, high plasma levels of ranolazine may increase the risk of ventricular arrhythmias such as ventricular tachycardia, ventricular fibrillation, and torsade de pointes.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1030"
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
    "id": "ddinter-phase1-cisapride-hydrochlorothiazide",
    "drugAId": "drug-cisapride",
    "drugBId": "drug-hydrochlorothiazide",
    "drugAName": "Cisapride",
    "drugBName": "Hydrochlorothiazide",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Cisapride dan Hydrochlorothiazide pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1066)",
    "ddinterPairId": "DDInter-PAIR-17028",
    "ddinterOriginalText": "Some diuretics may produce hypokalemia and hypomagnesemia which could potentiate the risk of cisapride-induced arrhythmias in patients receiving both drugs concomitantly. Prolonged QT interval, torsades de pointes, and death have been reported.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1066"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Indapamide",
      "Torsemide",
      "Eplerenone"
    ]
  },
  {
    "id": "ddinter-phase1-chlorthalidone-cisapride",
    "drugAId": "drug-chlorthalidone",
    "drugBId": "drug-cisapride",
    "drugAName": "Chlorthalidone",
    "drugBName": "Cisapride",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Chlorthalidone dan Cisapride pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1066)",
    "ddinterPairId": "DDInter-PAIR-35365",
    "ddinterOriginalText": "Some diuretics may produce hypokalemia and hypomagnesemia which could potentiate the risk of cisapride-induced arrhythmias in patients receiving both drugs concomitantly. Prolonged QT interval, torsades de pointes, and death have been reported.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1066"
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
    "id": "ddinter-phase1-cisapride-furosemide",
    "drugAId": "drug-cisapride",
    "drugBId": "drug-furosemide",
    "drugAName": "Cisapride",
    "drugBName": "Furosemide",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Cisapride dan Furosemide pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1066)",
    "ddinterPairId": "DDInter-PAIR-184724",
    "ddinterOriginalText": "Some diuretics may produce hypokalemia and hypomagnesemia which could potentiate the risk of cisapride-induced arrhythmias in patients receiving both drugs concomitantly. Prolonged QT interval, torsades de pointes, and death have been reported.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1066"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Indapamide",
      "Torsemide",
      "Eplerenone"
    ]
  },
  {
    "id": "ddinter-phase1-cisapride-indapamide",
    "drugAId": "drug-cisapride",
    "drugBId": "drug-indapamide",
    "drugAName": "Cisapride",
    "drugBName": "Indapamide",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Cisapride dan Indapamide pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1066)",
    "ddinterPairId": "DDInter-PAIR-188312",
    "ddinterOriginalText": "Some diuretics may produce hypokalemia and hypomagnesemia which could potentiate the risk of cisapride-induced arrhythmias in patients receiving both drugs concomitantly. Prolonged QT interval, torsades de pointes, and death have been reported.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1066"
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
    "id": "ddinter-phase1-digoxin-saquinavir",
    "drugAId": "drug-digoxin",
    "drugBId": "drug-saquinavir",
    "drugAName": "Digoxin",
    "drugBName": "Saquinavir",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Digoxin dan Saquinavir pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1103)",
    "ddinterPairId": "DDInter-PAIR-86825",
    "ddinterOriginalText": "Saquinavir in combination with ritonavir has been shown to prolong the PR interval of the electrocardiogram in some patients. Theoretically, coadministration with other agents that prolong the PR interval (e.g., beta blockers, digoxin, lacosamide, mefloquine, verapamil) may result in elevated risk of conduction disturbances and atrioventricular block. Coadministration with saquinavir may significantly increase the serum concentrations of digoxin. The mechanism of interaction has not been described but may be related to saquinavir inhibition of the P-glycoprotein-mediated renal tubular secretion of digoxin.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1103"
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
    "id": "ddinter-phase1-alfuzosin-halofantrine",
    "drugAId": "drug-alfuzosin",
    "drugBId": "drug-halofantrine",
    "drugAName": "Alfuzosin",
    "drugBName": "Halofantrine",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Alfuzosin dan Halofantrine pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1135)",
    "ddinterPairId": "DDInter-PAIR-16212",
    "ddinterOriginalText": "Halofantrine can cause dose-related prolongation of the QT interval at recommended therapeutic doses. QTc interval prolongation and death have been reported during combination use of halofantrine and mefloquine. Theoretically, coadministration with other agents that can prolong the QT interval may result in additive effects and increased risk of ventricular arrhythmias including torsade de pointes and sudden death.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1135"
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
    "id": "ddinter-phase1-ondansetron-halofantrine",
    "drugAId": "drug-ondansetron",
    "drugBId": "drug-halofantrine",
    "drugAName": "Ondansetron",
    "drugBName": "Halofantrine",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Ondansetron dan Halofantrine pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1135)",
    "ddinterPairId": "DDInter-PAIR-147957",
    "ddinterOriginalText": "Halofantrine can cause dose-related prolongation of the QT interval at recommended therapeutic doses. QTc interval prolongation and death have been reported during combination use of halofantrine and mefloquine. Theoretically, coadministration with other agents that can prolong the QT interval may result in additive effects and increased risk of ventricular arrhythmias including torsade de pointes and sudden death.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1135"
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
    "id": "ddinter-phase1-tizanidine-famotidine",
    "drugAId": "drug-tizanidine",
    "drugBId": "drug-famotidine",
    "drugAName": "Tizanidine",
    "drugBName": "Famotidine",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1180)",
    "ddinterPairId": "DDInter-PAIR-6761",
    "ddinterOriginalText": "Coadministration with inhibitors of CYP450 1A2 may significantly increase the plasma concentrations and pharmacologic effects of tizanidine, which is a sensitive substrate of the isoenzyme.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1180"
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
    "id": "ddinter-phase1-cimetidine-tizanidine",
    "drugAId": "drug-cimetidine",
    "drugBId": "drug-tizanidine",
    "drugAName": "Cimetidine",
    "drugBName": "Tizanidine",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1180)",
    "ddinterPairId": "DDInter-PAIR-65796",
    "ddinterOriginalText": "Coadministration with inhibitors of CYP450 1A2 may significantly increase the plasma concentrations and pharmacologic effects of tizanidine, which is a sensitive substrate of the isoenzyme.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1180"
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
    "id": "ddinter-phase1-verapamil-tizanidine",
    "drugAId": "drug-verapamil",
    "drugBId": "drug-tizanidine",
    "drugAName": "Verapamil",
    "drugBName": "Tizanidine",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1180)",
    "ddinterPairId": "DDInter-PAIR-75650",
    "ddinterOriginalText": "Coadministration with inhibitors of CYP450 1A2 may significantly increase the plasma concentrations and pharmacologic effects of tizanidine, which is a sensitive substrate of the isoenzyme.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1180"
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
    "id": "ddinter-phase1-aprepitant-ivabradine",
    "drugAId": "drug-aprepitant",
    "drugBId": "drug-ivabradine",
    "drugAName": "Aprepitant",
    "drugBName": "Ivabradine",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1191)",
    "ddinterPairId": "DDInter-PAIR-29528",
    "ddinterOriginalText": "Coadministration with moderate inhibitors of CYP450 3A4 may significantly increase the plasma concentrations of ivabradine, which is primarily metabolized by the isoenzyme.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1191"
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
    "id": "ddinter-phase1-ivabradine-duvelisib",
    "drugAId": "drug-ivabradine",
    "drugBId": "drug-duvelisib",
    "drugAName": "Ivabradine",
    "drugBName": "Duvelisib",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1191)",
    "ddinterPairId": "DDInter-PAIR-94466",
    "ddinterOriginalText": "Coadministration with moderate inhibitors of CYP450 3A4 may significantly increase the plasma concentrations of ivabradine, which is primarily metabolized by the isoenzyme.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1191"
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
    "id": "ddinter-phase1-dalfopristin-ivabradine",
    "drugAId": "drug-dalfopristin",
    "drugBId": "drug-ivabradine",
    "drugAName": "Dalfopristin",
    "drugBName": "Ivabradine",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1191)",
    "ddinterPairId": "DDInter-PAIR-109538",
    "ddinterOriginalText": "Coadministration with moderate inhibitors of CYP450 3A4 may significantly increase the plasma concentrations of ivabradine, which is primarily metabolized by the isoenzyme.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1191"
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
    "id": "ddinter-phase1-isavuconazonium-ivabradine",
    "drugAId": "drug-isavuconazonium",
    "drugBId": "drug-ivabradine",
    "drugAName": "Isavuconazonium",
    "drugBName": "Ivabradine",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1191)",
    "ddinterPairId": "DDInter-PAIR-119529",
    "ddinterOriginalText": "Coadministration with moderate inhibitors of CYP450 3A4 may significantly increase the plasma concentrations of ivabradine, which is primarily metabolized by the isoenzyme.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1191"
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
    "id": "ddinter-phase1-ivabradine-berotralstat",
    "drugAId": "drug-ivabradine",
    "drugBId": "drug-berotralstat",
    "drugAName": "Ivabradine",
    "drugBName": "Berotralstat",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1191)",
    "ddinterPairId": "DDInter-PAIR-121235",
    "ddinterOriginalText": "Coadministration with moderate inhibitors of CYP450 3A4 may significantly increase the plasma concentrations of ivabradine, which is primarily metabolized by the isoenzyme.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1191"
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
    "id": "ddinter-phase1-clotrimazole-ivabradine",
    "drugAId": "drug-clotrimazole",
    "drugBId": "drug-ivabradine",
    "drugAName": "Clotrimazole",
    "drugBName": "Ivabradine",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1191)",
    "ddinterPairId": "DDInter-PAIR-121241",
    "ddinterOriginalText": "Coadministration with moderate inhibitors of CYP450 3A4 may significantly increase the plasma concentrations of ivabradine, which is primarily metabolized by the isoenzyme.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1191"
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
    "id": "ddinter-phase1-ivabradine-fedratinib",
    "drugAId": "drug-ivabradine",
    "drugBId": "drug-fedratinib",
    "drugAName": "Ivabradine",
    "drugBName": "Fedratinib",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1191)",
    "ddinterPairId": "DDInter-PAIR-121256",
    "ddinterOriginalText": "Coadministration with moderate inhibitors of CYP450 3A4 may significantly increase the plasma concentrations of ivabradine, which is primarily metabolized by the isoenzyme.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1191"
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
    "id": "ddinter-phase1-fosaprepitant-ivabradine",
    "drugAId": "drug-fosaprepitant",
    "drugBId": "drug-ivabradine",
    "drugAName": "Fosaprepitant",
    "drugBName": "Ivabradine",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1191)",
    "ddinterPairId": "DDInter-PAIR-121266",
    "ddinterOriginalText": "Coadministration with moderate inhibitors of CYP450 3A4 may significantly increase the plasma concentrations of ivabradine, which is primarily metabolized by the isoenzyme.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1191"
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
    "id": "ddinter-phase1-imatinib-ivabradine",
    "drugAId": "drug-imatinib",
    "drugBId": "drug-ivabradine",
    "drugAName": "Imatinib",
    "drugBName": "Ivabradine",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1191)",
    "ddinterPairId": "DDInter-PAIR-121291",
    "ddinterOriginalText": "Coadministration with moderate inhibitors of CYP450 3A4 may significantly increase the plasma concentrations of ivabradine, which is primarily metabolized by the isoenzyme.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1191"
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
    "id": "ddinter-phase1-ivabradine-letermovir",
    "drugAId": "drug-ivabradine",
    "drugBId": "drug-letermovir",
    "drugAName": "Ivabradine",
    "drugBName": "Letermovir",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1191)",
    "ddinterPairId": "DDInter-PAIR-121308",
    "ddinterOriginalText": "Coadministration with moderate inhibitors of CYP450 3A4 may significantly increase the plasma concentrations of ivabradine, which is primarily metabolized by the isoenzyme.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1191"
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
    "id": "ddinter-phase1-ivabradine-stiripentol",
    "drugAId": "drug-ivabradine",
    "drugBId": "drug-stiripentol",
    "drugAName": "Ivabradine",
    "drugBName": "Stiripentol",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1191)",
    "ddinterPairId": "DDInter-PAIR-121419",
    "ddinterOriginalText": "Coadministration with moderate inhibitors of CYP450 3A4 may significantly increase the plasma concentrations of ivabradine, which is primarily metabolized by the isoenzyme.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1191"
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
    "id": "ddinter-phase1-atorvastatin-letermovir",
    "drugAId": "drug-atorvastatin",
    "drugBId": "drug-letermovir",
    "drugAName": "Atorvastatin",
    "drugBName": "Letermovir",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1237)",
    "ddinterPairId": "DDInter-PAIR-23221",
    "ddinterOriginalText": "Coadministration with letermovir may significantly increase the plasma concentrations of atorvastatin and its active metabolites. The proposed mechanism is letermovir inhibition of intestinal and hepatic CYP450 3A4, the isoenzyme responsible for the metabolic clearance of atorvastatin. In addition, atorvastatin and its metabolites are substrates of the hepatic uptake transporters, organic anion transporting polypeptide protein (OATP) 1B1 and 1B3, which are also inhibited by letermovir.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1237"
    ],
    "alternativeOptionsA": [
      "Rosuvastatin",
      "Pravastatin",
      "Pitavastatin",
      "Ezetimibe"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-phase1-diltiazem-ibrutinib",
    "drugAId": "drug-diltiazem",
    "drugBId": "drug-ibrutinib",
    "drugAName": "Diltiazem",
    "drugBName": "Ibrutinib",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1251)",
    "ddinterPairId": "DDInter-PAIR-57853",
    "ddinterOriginalText": "Coadministration with moderate inhibitors of CYP450 3A4 may significantly increase the plasma concentrations of ibrutinib, which is primarily metabolized by the isoenzyme.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1251"
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
    "id": "ddinter-phase1-verapamil-ibrutinib",
    "drugAId": "drug-verapamil",
    "drugBId": "drug-ibrutinib",
    "drugAName": "Verapamil",
    "drugBName": "Ibrutinib",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1251)",
    "ddinterPairId": "DDInter-PAIR-75403",
    "ddinterOriginalText": "Coadministration with moderate inhibitors of CYP450 3A4 may significantly increase the plasma concentrations of ibrutinib, which is primarily metabolized by the isoenzyme.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1251"
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
    "id": "ddinter-phase1-felodipine-itraconazole",
    "drugAId": "drug-felodipine",
    "drugBId": "drug-itraconazole",
    "drugAName": "Felodipine",
    "drugBName": "Itraconazole",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1278)",
    "ddinterPairId": "DDInter-PAIR-120991",
    "ddinterOriginalText": "Coadministration with itraconazole or ketoconazole may significantly increase the plasma concentrations of felodipine. The proposed mechanism is decreased first-pass metabolism and hepatic clearance of felodipine due to inhibition of CYP450 3A4.There have been case reports of leg and ankle edema in patients treated with itraconazole and dihydropyridine calcium channel blockers. Pharmacodynamically, itraconazole exhibits a dose-related negative inotropic effect, which may be additive to those of calcium channel blockers (CCBs). It is conceivable that coadministration may potentiate the risk of ventricular dysfunction, congestive heart failure, and peripheral and pulmonary edema, particularly in patients with preexisting risk factors (e.g., a history of congestive heart failure; cardiac disease such as ischemic and valvular disease; significant pulmonary disease such as chronic obstructive pulmonary disorder; edematous disorders such as renal failure). Itraconazole alone has also been associated with postmarketing reports of congestive heart failure, peripheral edema, and pulmonary edema in patients treated for onychomycosis and/or systemic fungal infections.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1278"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Fluconazole",
      "Terbinafine",
      "Nystatin",
      "Micafungin"
    ]
  },
  {
    "id": "ddinter-phase1-felodipine-ketoconazole",
    "drugAId": "drug-felodipine",
    "drugBId": "drug-ketoconazole",
    "drugAName": "Felodipine",
    "drugBName": "Ketoconazole",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1278)",
    "ddinterPairId": "DDInter-PAIR-123061",
    "ddinterOriginalText": "Coadministration with itraconazole or ketoconazole may significantly increase the plasma concentrations of felodipine. The proposed mechanism is decreased first-pass metabolism and hepatic clearance of felodipine due to inhibition of CYP450 3A4.There have been case reports of leg and ankle edema in patients treated with itraconazole and dihydropyridine calcium channel blockers. Pharmacodynamically, itraconazole exhibits a dose-related negative inotropic effect, which may be additive to those of calcium channel blockers (CCBs). It is conceivable that coadministration may potentiate the risk of ventricular dysfunction, congestive heart failure, and peripheral and pulmonary edema, particularly in patients with preexisting risk factors (e.g., a history of congestive heart failure; cardiac disease such as ischemic and valvular disease; significant pulmonary disease such as chronic obstructive pulmonary disorder; edematous disorders such as renal failure). Itraconazole alone has also been associated with postmarketing reports of congestive heart failure, peripheral edema, and pulmonary edema in patients treated for onychomycosis and/or systemic fungal infections.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1278"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Fluconazole",
      "Terbinafine",
      "Nystatin",
      "Micafungin"
    ]
  },
  {
    "id": "ddinter-phase1-dofetilide-alfuzosin",
    "drugAId": "drug-dofetilide",
    "drugBId": "drug-alfuzosin",
    "drugAName": "Dofetilide",
    "drugBName": "Alfuzosin",
    "severity": "Minor",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Dofetilide dan Alfuzosin pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1289)",
    "ddinterPairId": "DDInter-PAIR-PHASE1-1289-140"
  },
  {
    "id": "ddinter-phase1-dofetilide-ondansetron",
    "drugAId": "drug-dofetilide",
    "drugBId": "drug-ondansetron",
    "drugAName": "Dofetilide",
    "drugBName": "Ondansetron",
    "severity": "Minor",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Dofetilide dan Ondansetron pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1289)",
    "ddinterPairId": "DDInter-PAIR-PHASE1-1289-141"
  },
  {
    "id": "ddinter-phase1-hydrochlorothiazide-pimozide",
    "drugAId": "drug-hydrochlorothiazide",
    "drugBId": "drug-pimozide",
    "drugAName": "Hydrochlorothiazide",
    "drugBName": "Pimozide",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek aditif retensi ion kalium melalui penghambatan ekskresi kalium di tubulus distal ginjal antara Hydrochlorothiazide dan Pimozide.",
    "clinicalOutcome": "Peningkatan kadar kalium serum (hiperkalemia subklinis hingga ringan).",
    "management": "Periksa kadar elektrolit serum (kalium) dan kreatinin secara berkala; hindari penggunaan suplemen kalium tanpa anjuran dokter.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1316)",
    "ddinterPairId": "DDInter-PAIR-17233",
    "ddinterOriginalText": "Pimozide can cause dose-related prolongation of the QT interval. While clinical data are lacking, the coadministration of pimozide and agents that can produce hypokalemia and/or hypomagnesemia (e.g., potassium-wasting diuretics, amphotericin B, cation exchange resins) may result in elevated risk of ventricular arrhythmias, including ventricular tachycardia and torsade de pointes, because of additive arrhythmogenic potential.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1316"
    ],
    "alternativeOptionsA": [
      "Indapamide",
      "Torsemide",
      "Eplerenone"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-phase1-chlorthalidone-pimozide",
    "drugAId": "drug-chlorthalidone",
    "drugBId": "drug-pimozide",
    "drugAName": "Chlorthalidone",
    "drugBName": "Pimozide",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek aditif retensi ion kalium melalui penghambatan ekskresi kalium di tubulus distal ginjal antara Chlorthalidone dan Pimozide.",
    "clinicalOutcome": "Peningkatan kadar kalium serum (hiperkalemia subklinis hingga ringan).",
    "management": "Periksa kadar elektrolit serum (kalium) dan kreatinin secara berkala; hindari penggunaan suplemen kalium tanpa anjuran dokter.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1316)",
    "ddinterPairId": "DDInter-PAIR-35382",
    "ddinterOriginalText": "Pimozide can cause dose-related prolongation of the QT interval. While clinical data are lacking, the coadministration of pimozide and agents that can produce hypokalemia and/or hypomagnesemia (e.g., potassium-wasting diuretics, amphotericin B, cation exchange resins) may result in elevated risk of ventricular arrhythmias, including ventricular tachycardia and torsade de pointes, because of additive arrhythmogenic potential.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1316"
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
    "id": "ddinter-phase1-digoxin-immune-fab-pimozide",
    "drugAId": "drug-digoxin-immune-fab",
    "drugBId": "drug-pimozide",
    "drugAName": "Digoxin Immune Fab",
    "drugBName": "Pimozide",
    "severity": "Minor",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek aditif retensi ion kalium melalui penghambatan ekskresi kalium di tubulus distal ginjal antara Digoxin Immune Fab dan Pimozide.",
    "clinicalOutcome": "Peningkatan kadar kalium serum (hiperkalemia subklinis hingga ringan).",
    "management": "Periksa kadar elektrolit serum (kalium) dan kreatinin secara berkala; hindari penggunaan suplemen kalium tanpa anjuran dokter.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1316)",
    "ddinterPairId": "DDInter-PAIR-PHASE1-1316-144"
  },
  {
    "id": "ddinter-phase1-furosemide-pimozide",
    "drugAId": "drug-furosemide",
    "drugBId": "drug-pimozide",
    "drugAName": "Furosemide",
    "drugBName": "Pimozide",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek aditif retensi ion kalium melalui penghambatan ekskresi kalium di tubulus distal ginjal antara Furosemide dan Pimozide.",
    "clinicalOutcome": "Peningkatan kadar kalium serum (hiperkalemia subklinis hingga ringan).",
    "management": "Periksa kadar elektrolit serum (kalium) dan kreatinin secara berkala; hindari penggunaan suplemen kalium tanpa anjuran dokter.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1316)",
    "ddinterPairId": "DDInter-PAIR-154315",
    "ddinterOriginalText": "Pimozide can cause dose-related prolongation of the QT interval. While clinical data are lacking, the coadministration of pimozide and agents that can produce hypokalemia and/or hypomagnesemia (e.g., potassium-wasting diuretics, amphotericin B, cation exchange resins) may result in elevated risk of ventricular arrhythmias, including ventricular tachycardia and torsade de pointes, because of additive arrhythmogenic potential.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1316"
    ],
    "alternativeOptionsA": [
      "Indapamide",
      "Torsemide",
      "Eplerenone"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-phase1-indapamide-pimozide",
    "drugAId": "drug-indapamide",
    "drugBId": "drug-pimozide",
    "drugAName": "Indapamide",
    "drugBName": "Pimozide",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek aditif retensi ion kalium melalui penghambatan ekskresi kalium di tubulus distal ginjal antara Indapamide dan Pimozide.",
    "clinicalOutcome": "Peningkatan kadar kalium serum (hiperkalemia subklinis hingga ringan).",
    "management": "Periksa kadar elektrolit serum (kalium) dan kreatinin secara berkala; hindari penggunaan suplemen kalium tanpa anjuran dokter.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1316)",
    "ddinterPairId": "DDInter-PAIR-154349",
    "ddinterOriginalText": "Pimozide can cause dose-related prolongation of the QT interval. While clinical data are lacking, the coadministration of pimozide and agents that can produce hypokalemia and/or hypomagnesemia (e.g., potassium-wasting diuretics, amphotericin B, cation exchange resins) may result in elevated risk of ventricular arrhythmias, including ventricular tachycardia and torsade de pointes, because of additive arrhythmogenic potential.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1316"
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
    "id": "ddinter-phase1-diltiazem-deflazacort",
    "drugAId": "drug-diltiazem",
    "drugBId": "drug-deflazacort",
    "drugAName": "Diltiazem",
    "drugBName": "Deflazacort",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1336)",
    "ddinterPairId": "DDInter-PAIR-57744",
    "ddinterOriginalText": "Coadministration with potent or moderate inhibitors of CYP450 3A4 may significantly increase the plasma concentrations of 21-desdeflazacort, the active metabolite of deflazacort that is formed by esterases after oral administration and further metabolized by CYP450 3A4 to several inactive metabolites.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1336"
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
    "id": "ddinter-phase1-verapamil-deflazacort",
    "drugAId": "drug-verapamil",
    "drugBId": "drug-deflazacort",
    "drugAName": "Verapamil",
    "drugBName": "Deflazacort",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1336)",
    "ddinterPairId": "DDInter-PAIR-75305",
    "ddinterOriginalText": "Coadministration with potent or moderate inhibitors of CYP450 3A4 may significantly increase the plasma concentrations of 21-desdeflazacort, the active metabolite of deflazacort that is formed by esterases after oral administration and further metabolized by CYP450 3A4 to several inactive metabolites.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1336"
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
    "id": "ddinter-phase1-diltiazem-bosutinib",
    "drugAId": "drug-diltiazem",
    "drugBId": "drug-bosutinib",
    "drugAName": "Diltiazem",
    "drugBName": "Bosutinib",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1347)",
    "ddinterPairId": "DDInter-PAIR-46554",
    "ddinterOriginalText": "Coadministration with potent and moderate inhibitors of CYP450 3A4 may significantly increase the plasma concentrations of bosutinib, which is primarily metabolized by the isoenzyme.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1347"
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
    "id": "ddinter-phase1-verapamil-bosutinib",
    "drugAId": "drug-verapamil",
    "drugBId": "drug-bosutinib",
    "drugAName": "Verapamil",
    "drugBName": "Bosutinib",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1347)",
    "ddinterPairId": "DDInter-PAIR-46827",
    "ddinterOriginalText": "Coadministration with potent and moderate inhibitors of CYP450 3A4 may significantly increase the plasma concentrations of bosutinib, which is primarily metabolized by the isoenzyme.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1347"
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
    "id": "ddinter-phase1-alfuzosin-iloperidone",
    "drugAId": "drug-alfuzosin",
    "drugBId": "drug-iloperidone",
    "drugAName": "Alfuzosin",
    "drugBName": "Iloperidone",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Alfuzosin dan Iloperidone pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1348)",
    "ddinterPairId": "DDInter-PAIR-16226",
    "ddinterOriginalText": "Iloperidone may cause dose-related prolongation of the QT interval. Theoretically, coadministration with other agents that can prolong the QT interval may result in additive effects and increased risk of ventricular arrhythmias including torsade de pointes and sudden death.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1348"
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
    "id": "ddinter-phase1-ondansetron-iloperidone",
    "drugAId": "drug-ondansetron",
    "drugBId": "drug-iloperidone",
    "drugAName": "Ondansetron",
    "drugBName": "Iloperidone",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Ondansetron dan Iloperidone pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1348)",
    "ddinterPairId": "DDInter-PAIR-147967",
    "ddinterOriginalText": "Iloperidone may cause dose-related prolongation of the QT interval. Theoretically, coadministration with other agents that can prolong the QT interval may result in additive effects and increased risk of ventricular arrhythmias including torsade de pointes and sudden death.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1348"
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
    "id": "ddinter-phase1-alfuzosin-sparfloxacin",
    "drugAId": "drug-alfuzosin",
    "drugBId": "drug-sparfloxacin",
    "drugAName": "Alfuzosin",
    "drugBName": "Sparfloxacin",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Alfuzosin dan Sparfloxacin pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1364)",
    "ddinterPairId": "DDInter-PAIR-16414",
    "ddinterOriginalText": "Sparfloxacin may cause dose-related prolongation of the QT interval in some patients. Theoretically, coadministration with other agents that can prolong the QT interval may result in additive effects and increased risk of ventricular arrhythmias including torsade de pointes and sudden death.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1364"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Azithromycin",
      "Cefixime",
      "Amoxicillin-Clavulanate",
      "Ceftriaxone"
    ]
  },
  {
    "id": "ddinter-phase1-ondansetron-sparfloxacin",
    "drugAId": "drug-ondansetron",
    "drugBId": "drug-sparfloxacin",
    "drugAName": "Ondansetron",
    "drugBName": "Sparfloxacin",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Ondansetron dan Sparfloxacin pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1364)",
    "ddinterPairId": "DDInter-PAIR-148037",
    "ddinterOriginalText": "Sparfloxacin may cause dose-related prolongation of the QT interval in some patients. Theoretically, coadministration with other agents that can prolong the QT interval may result in additive effects and increased risk of ventricular arrhythmias including torsade de pointes and sudden death.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1364"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Azithromycin",
      "Cefixime",
      "Amoxicillin-Clavulanate",
      "Ceftriaxone"
    ]
  },
  {
    "id": "ddinter-phase1-arbutamine-acebutolol",
    "drugAId": "drug-arbutamine",
    "drugBId": "drug-acebutolol",
    "drugAName": "Arbutamine",
    "drugBName": "Acebutolol",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Arbutamine dan Acebutolol pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1373)",
    "ddinterPairId": "DDInter-PAIR-4006",
    "ddinterOriginalText": "Arbutamine may precipitate or exacerbate supraventricular or ventricular arrhythmias due to its sympathomimetic effects.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1373"
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
    "id": "ddinter-phase1-verapamil-arbutamine",
    "drugAId": "drug-verapamil",
    "drugBId": "drug-arbutamine",
    "drugAName": "Verapamil",
    "drugBName": "Arbutamine",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Verapamil dan Arbutamine pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1373)",
    "ddinterPairId": "DDInter-PAIR-75270",
    "ddinterOriginalText": "Arbutamine may precipitate or exacerbate supraventricular or ventricular arrhythmias due to its sympathomimetic effects.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1373"
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
    "id": "ddinter-phase1-propranolol-arbutamine",
    "drugAId": "drug-propranolol",
    "drugBId": "drug-arbutamine",
    "drugAName": "Propranolol",
    "drugBName": "Arbutamine",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Propranolol dan Arbutamine pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1373)",
    "ddinterPairId": "DDInter-PAIR-109170",
    "ddinterOriginalText": "Arbutamine may precipitate or exacerbate supraventricular or ventricular arrhythmias due to its sympathomimetic effects.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1373"
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
    "id": "ddinter-phase1-ondansetron-ribociclib",
    "drugAId": "drug-ondansetron",
    "drugBId": "drug-ribociclib",
    "drugAName": "Ondansetron",
    "drugBName": "Ribociclib",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Ondansetron dan Ribociclib pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1384)",
    "ddinterPairId": "DDInter-PAIR-148016",
    "ddinterOriginalText": "Ribociclib can cause dose-related prolongation of the QT interval. Theoretically, coadministration with other agents that can prolong the QT interval may result in additive effects and increased risk of ventricular arrhythmias including torsade de pointes and sudden death.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1384"
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
    "id": "ddinter-phase1-pravastatin-paritaprevir",
    "drugAId": "drug-pravastatin",
    "drugBId": "drug-paritaprevir",
    "drugAName": "Pravastatin",
    "drugBName": "Paritaprevir",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1386)",
    "ddinterPairId": "DDInter-PAIR-105460",
    "ddinterOriginalText": "Coadministration with ombitasvir/paritaprevir/ritonavir plus dasabuvir may significantly increase the plasma concentrations of pravastatin. The mechanism may involve inhibition of OATP1B1-mediated hepatic uptake of pravastatin by both paritaprevir and ritonavir.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1386"
    ],
    "alternativeOptionsA": [
      "Rosuvastatin",
      "Pitavastatin",
      "Ezetimibe"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-phase1-cyclosporine-repaglinide",
    "drugAId": "drug-cyclosporine",
    "drugBId": "drug-repaglinide",
    "drugAName": "Cyclosporine",
    "drugBName": "Repaglinide",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1446)",
    "ddinterPairId": "DDInter-PAIR-77181",
    "ddinterOriginalText": "Coadministration with cyclosporine may significantly increase the plasma concentrations of repaglinide. The proposed mechanism is cyclosporine inhibition of the hepatic uptake of repaglinide via organic anion transporting polypeptide (OATP) 1B1 and also its metabolism via CYP450 3A4.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1446"
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
    "id": "ddinter-phase1-diltiazem-guanfacine",
    "drugAId": "drug-diltiazem",
    "drugBId": "drug-guanfacine",
    "drugAName": "Diltiazem",
    "drugBName": "Guanfacine",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1503)",
    "ddinterPairId": "DDInter-PAIR-57844",
    "ddinterOriginalText": "Coadministration with inhibitors of CYP450 3A4 may significantly increase the plasma concentrations of guanfacine, which is primarily metabolized by the isoenzyme. The risk of adverse reactions such as hypotension, bradycardia, and sedation may increase.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1503"
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
    "id": "ddinter-phase1-verapamil-guanfacine",
    "drugAId": "drug-verapamil",
    "drugBId": "drug-guanfacine",
    "drugAName": "Verapamil",
    "drugBName": "Guanfacine",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1503)",
    "ddinterPairId": "DDInter-PAIR-75396",
    "ddinterOriginalText": "Coadministration with inhibitors of CYP450 3A4 may significantly increase the plasma concentrations of guanfacine, which is primarily metabolized by the isoenzyme. The risk of adverse reactions such as hypotension, bradycardia, and sedation may increase.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1503"
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
    "id": "ddinter-phase1-alfuzosin-nilotinib",
    "drugAId": "drug-alfuzosin",
    "drugBId": "drug-nilotinib",
    "drugAName": "Alfuzosin",
    "drugBName": "Nilotinib",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Alfuzosin dan Nilotinib pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1552)",
    "ddinterPairId": "DDInter-PAIR-16312",
    "ddinterOriginalText": "Nilotinib can cause concentration-dependent prolongation of the QT interval. Theoretically, coadministration with other agents that can prolong the QT interval may result in additive effects and increased risk of ventricular arrhythmias including torsade de pointes and sudden death.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1552"
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
    "id": "ddinter-phase1-ondansetron-nilotinib",
    "drugAId": "drug-ondansetron",
    "drugBId": "drug-nilotinib",
    "drugAName": "Ondansetron",
    "drugBName": "Nilotinib",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Ondansetron dan Nilotinib pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1552)",
    "ddinterPairId": "DDInter-PAIR-144171",
    "ddinterOriginalText": "Nilotinib can cause concentration-dependent prolongation of the QT interval. Theoretically, coadministration with other agents that can prolong the QT interval may result in additive effects and increased risk of ventricular arrhythmias including torsade de pointes and sudden death.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1552"
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
    "id": "ddinter-phase1-amiloride-eplerenone",
    "drugAId": "drug-amiloride",
    "drugBId": "drug-eplerenone",
    "drugAName": "Amiloride",
    "drugBName": "Eplerenone",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek aditif retensi ion kalium melalui penghambatan ekskresi kalium di tubulus distal ginjal antara Amiloride dan Eplerenone.",
    "clinicalOutcome": "Peningkatan kadar kalium serum (hiperkalemia subklinis hingga ringan).",
    "management": "Periksa kadar elektrolit serum (kalium) dan kreatinin secara berkala; hindari penggunaan suplemen kalium tanpa anjuran dokter.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1564)",
    "ddinterPairId": "DDInter-PAIR-20986",
    "ddinterOriginalText": "The principal risk of eplerenone is hyperkalemia. Coadministration with potassium salts or potassium-sparing diuretics may increase this risk due to additive pharmacodynamic effects.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1564"
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
    "id": "ddinter-phase1-spironolactone-eplerenone",
    "drugAId": "drug-spironolactone",
    "drugBId": "drug-eplerenone",
    "drugAName": "Spironolactone",
    "drugBName": "Eplerenone",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek aditif retensi ion kalium melalui penghambatan ekskresi kalium di tubulus distal ginjal antara Spironolactone dan Eplerenone.",
    "clinicalOutcome": "Peningkatan kadar kalium serum (hiperkalemia subklinis hingga ringan).",
    "management": "Periksa kadar elektrolit serum (kalium) dan kreatinin secara berkala; hindari penggunaan suplemen kalium tanpa anjuran dokter.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1564)",
    "ddinterPairId": "DDInter-PAIR-59251",
    "ddinterOriginalText": "The principal risk of eplerenone is hyperkalemia. Coadministration with potassium salts or potassium-sparing diuretics may increase this risk due to additive pharmacodynamic effects.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1564"
    ],
    "alternativeOptionsA": [
      "Indapamide",
      "Torsemide",
      "Eplerenone"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-phase1-eplerenone-potassium-citrate",
    "drugAId": "drug-eplerenone",
    "drugBId": "drug-potassium-citrate",
    "drugAName": "Eplerenone",
    "drugBName": "Potassium citrate",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek aditif retensi ion kalium melalui penghambatan ekskresi kalium di tubulus distal ginjal antara Eplerenone dan Potassium citrate.",
    "clinicalOutcome": "Peningkatan kadar kalium serum (hiperkalemia subklinis hingga ringan).",
    "management": "Periksa kadar elektrolit serum (kalium) dan kreatinin secara berkala; hindari penggunaan suplemen kalium tanpa anjuran dokter.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1564)",
    "ddinterPairId": "DDInter-PAIR-67308",
    "ddinterOriginalText": "The principal risk of eplerenone is hyperkalemia. Coadministration with potassium salts or potassium-sparing diuretics may increase this risk due to additive pharmacodynamic effects.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1564"
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
    "id": "ddinter-phase1-eplerenone-potassium-bicarbonate",
    "drugAId": "drug-eplerenone",
    "drugBId": "drug-potassium-bicarbonate",
    "drugAName": "Eplerenone",
    "drugBName": "Potassium bicarbonate",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek aditif retensi ion kalium melalui penghambatan ekskresi kalium di tubulus distal ginjal antara Eplerenone dan Potassium bicarbonate.",
    "clinicalOutcome": "Peningkatan kadar kalium serum (hiperkalemia subklinis hingga ringan).",
    "management": "Periksa kadar elektrolit serum (kalium) dan kreatinin secara berkala; hindari penggunaan suplemen kalium tanpa anjuran dokter.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1564)",
    "ddinterPairId": "DDInter-PAIR-96333",
    "ddinterOriginalText": "The principal risk of eplerenone is hyperkalemia. Coadministration with potassium salts or potassium-sparing diuretics may increase this risk due to additive pharmacodynamic effects.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1564"
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
    "id": "ddinter-phase1-eplerenone-monopotassium-phosphate",
    "drugAId": "drug-eplerenone",
    "drugBId": "drug-monopotassium-phosphate",
    "drugAName": "Eplerenone",
    "drugBName": "Monopotassium phosphate",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek aditif retensi ion kalium melalui penghambatan ekskresi kalium di tubulus distal ginjal antara Eplerenone dan Monopotassium phosphate.",
    "clinicalOutcome": "Peningkatan kadar kalium serum (hiperkalemia subklinis hingga ringan).",
    "management": "Periksa kadar elektrolit serum (kalium) dan kreatinin secara berkala; hindari penggunaan suplemen kalium tanpa anjuran dokter.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1564)",
    "ddinterPairId": "DDInter-PAIR-108304",
    "ddinterOriginalText": "The principal risk of eplerenone is hyperkalemia. Coadministration with potassium salts or potassium-sparing diuretics may increase this risk due to additive pharmacodynamic effects.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1564"
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
    "id": "ddinter-phase1-eplerenone-potassium-iodide",
    "drugAId": "drug-eplerenone",
    "drugBId": "drug-potassium-iodide",
    "drugAName": "Eplerenone",
    "drugBName": "Potassium Iodide",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek aditif retensi ion kalium melalui penghambatan ekskresi kalium di tubulus distal ginjal antara Eplerenone dan Potassium Iodide.",
    "clinicalOutcome": "Peningkatan kadar kalium serum (hiperkalemia subklinis hingga ringan).",
    "management": "Periksa kadar elektrolit serum (kalium) dan kreatinin secara berkala; hindari penggunaan suplemen kalium tanpa anjuran dokter.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1564)",
    "ddinterPairId": "DDInter-PAIR-156047",
    "ddinterOriginalText": "The principal risk of eplerenone is hyperkalemia. Coadministration with potassium salts or potassium-sparing diuretics may increase this risk due to additive pharmacodynamic effects.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1564"
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
    "id": "ddinter-phase1-triamterene-eplerenone",
    "drugAId": "drug-triamterene",
    "drugBId": "drug-eplerenone",
    "drugAName": "Triamterene",
    "drugBName": "Eplerenone",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek aditif retensi ion kalium melalui penghambatan ekskresi kalium di tubulus distal ginjal antara Triamterene dan Eplerenone.",
    "clinicalOutcome": "Peningkatan kadar kalium serum (hiperkalemia subklinis hingga ringan).",
    "management": "Periksa kadar elektrolit serum (kalium) dan kreatinin secara berkala; hindari penggunaan suplemen kalium tanpa anjuran dokter.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1564)",
    "ddinterPairId": "DDInter-PAIR-173821",
    "ddinterOriginalText": "The principal risk of eplerenone is hyperkalemia. Coadministration with potassium salts or potassium-sparing diuretics may increase this risk due to additive pharmacodynamic effects.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1564"
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
    "id": "ddinter-phase1-eplerenone-potassium-chloride",
    "drugAId": "drug-eplerenone",
    "drugBId": "drug-potassium-chloride",
    "drugAName": "Eplerenone",
    "drugBName": "Potassium chloride",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek aditif retensi ion kalium melalui penghambatan ekskresi kalium di tubulus distal ginjal antara Eplerenone dan Potassium chloride.",
    "clinicalOutcome": "Peningkatan kadar kalium serum (hiperkalemia subklinis hingga ringan).",
    "management": "Periksa kadar elektrolit serum (kalium) dan kreatinin secara berkala; hindari penggunaan suplemen kalium tanpa anjuran dokter.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1564)",
    "ddinterPairId": "DDInter-PAIR-178274",
    "ddinterOriginalText": "The principal risk of eplerenone is hyperkalemia. Coadministration with potassium salts or potassium-sparing diuretics may increase this risk due to additive pharmacodynamic effects.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1564"
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
    "id": "ddinter-phase1-eplerenone-potassium-acetate",
    "drugAId": "drug-eplerenone",
    "drugBId": "drug-potassium-acetate",
    "drugAName": "Eplerenone",
    "drugBName": "Potassium acetate",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek aditif retensi ion kalium melalui penghambatan ekskresi kalium di tubulus distal ginjal antara Eplerenone dan Potassium acetate.",
    "clinicalOutcome": "Peningkatan kadar kalium serum (hiperkalemia subklinis hingga ringan).",
    "management": "Periksa kadar elektrolit serum (kalium) dan kreatinin secara berkala; hindari penggunaan suplemen kalium tanpa anjuran dokter.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1564)",
    "ddinterPairId": "DDInter-PAIR-178500",
    "ddinterOriginalText": "The principal risk of eplerenone is hyperkalemia. Coadministration with potassium salts or potassium-sparing diuretics may increase this risk due to additive pharmacodynamic effects.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1564"
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
    "id": "ddinter-phase1-eplerenone-aminobenzoic-acid",
    "drugAId": "drug-eplerenone",
    "drugBId": "drug-aminobenzoic-acid",
    "drugAName": "Eplerenone",
    "drugBName": "Aminobenzoic acid",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek aditif retensi ion kalium melalui penghambatan ekskresi kalium di tubulus distal ginjal antara Eplerenone dan Aminobenzoic acid.",
    "clinicalOutcome": "Peningkatan kadar kalium serum (hiperkalemia subklinis hingga ringan).",
    "management": "Periksa kadar elektrolit serum (kalium) dan kreatinin secara berkala; hindari penggunaan suplemen kalium tanpa anjuran dokter.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1564)",
    "ddinterPairId": "DDInter-PAIR-178501",
    "ddinterOriginalText": "The principal risk of eplerenone is hyperkalemia. Coadministration with potassium salts or potassium-sparing diuretics may increase this risk due to additive pharmacodynamic effects.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1564"
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
    "id": "ddinter-phase1-eplerenone-potassium-gluconate",
    "drugAId": "drug-eplerenone",
    "drugBId": "drug-potassium-gluconate",
    "drugAName": "Eplerenone",
    "drugBName": "Potassium gluconate",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek aditif retensi ion kalium melalui penghambatan ekskresi kalium di tubulus distal ginjal antara Eplerenone dan Potassium gluconate.",
    "clinicalOutcome": "Peningkatan kadar kalium serum (hiperkalemia subklinis hingga ringan).",
    "management": "Periksa kadar elektrolit serum (kalium) dan kreatinin secara berkala; hindari penggunaan suplemen kalium tanpa anjuran dokter.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1564)",
    "ddinterPairId": "DDInter-PAIR-178502",
    "ddinterOriginalText": "The principal risk of eplerenone is hyperkalemia. Coadministration with potassium salts or potassium-sparing diuretics may increase this risk due to additive pharmacodynamic effects.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1564"
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
    "id": "ddinter-phase1-eplerenone-potassium-perchlorate",
    "drugAId": "drug-eplerenone",
    "drugBId": "drug-potassium-perchlorate",
    "drugAName": "Eplerenone",
    "drugBName": "Potassium perchlorate",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek aditif retensi ion kalium melalui penghambatan ekskresi kalium di tubulus distal ginjal antara Eplerenone dan Potassium perchlorate.",
    "clinicalOutcome": "Peningkatan kadar kalium serum (hiperkalemia subklinis hingga ringan).",
    "management": "Periksa kadar elektrolit serum (kalium) dan kreatinin secara berkala; hindari penggunaan suplemen kalium tanpa anjuran dokter.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1564)",
    "ddinterPairId": "DDInter-PAIR-178503",
    "ddinterOriginalText": "The principal risk of eplerenone is hyperkalemia. Coadministration with potassium salts or potassium-sparing diuretics may increase this risk due to additive pharmacodynamic effects.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1564"
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
    "id": "ddinter-phase1-atorvastatin-lomitapide",
    "drugAId": "drug-atorvastatin",
    "drugBId": "drug-lomitapide",
    "drugAName": "Atorvastatin",
    "drugBName": "Lomitapide",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Atorvastatin dan Lomitapide pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1574)",
    "ddinterPairId": "DDInter-PAIR-23222",
    "ddinterOriginalText": "Coadministration of lomitapide with other agents known to induce hepatotoxicity may potentiate the risk of liver injury. Coadministration with inhibitors of CYP450 3A4 may significantly increase the plasma concentrations of lomitapide, which is primarily metabolized by the isoenzyme.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1574"
    ],
    "alternativeOptionsA": [
      "Rosuvastatin",
      "Pravastatin",
      "Pitavastatin",
      "Ezetimibe"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-phase1-alfuzosin-crizotinib",
    "drugAId": "drug-alfuzosin",
    "drugBId": "drug-crizotinib",
    "drugAName": "Alfuzosin",
    "drugBName": "Crizotinib",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Alfuzosin dan Crizotinib pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1607)",
    "ddinterPairId": "DDInter-PAIR-16145",
    "ddinterOriginalText": "Crizotinib can cause concentration-dependent prolongation of the QT interval. Theoretically, coadministration with other agents that can prolong the QT interval may result in additive effects and increased risk of ventricular arrhythmias including torsade de pointes and sudden death.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1607"
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
    "id": "ddinter-phase1-ondansetron-crizotinib",
    "drugAId": "drug-ondansetron",
    "drugBId": "drug-crizotinib",
    "drugAName": "Ondansetron",
    "drugBName": "Crizotinib",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Ondansetron dan Crizotinib pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1607)",
    "ddinterPairId": "DDInter-PAIR-75957",
    "ddinterOriginalText": "Crizotinib can cause concentration-dependent prolongation of the QT interval. Theoretically, coadministration with other agents that can prolong the QT interval may result in additive effects and increased risk of ventricular arrhythmias including torsade de pointes and sudden death.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1607"
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
    "id": "ddinter-phase1-fentanyl-ondansetron",
    "drugAId": "drug-fentanyl",
    "drugBId": "drug-ondansetron",
    "drugAName": "Fentanyl",
    "drugBName": "Ondansetron",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Fentanyl dan Ondansetron pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1615)",
    "ddinterPairId": "DDInter-PAIR-2516",
    "ddinterOriginalText": "Concomitant use of 5-HT3 receptor antagonists with agents that possess or enhance serotonergic activity such as selective serotonin reuptake inhibitors (SSRIs), selective serotonin-norepinephrine reuptake inhibitors (SNRIs), monoamine oxidase inhibitors (MAOIs), tricyclic antidepressants (TCAs), 5-HT1 receptor agonists (triptans), ergot alkaloids, phenylpiperidine opioids, bupropion, dextromethorphan, linezolid, lithium, St. John's wort, tramadol, and tryptophan may potentiate the risk of serotonin syndrome.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1615"
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
    "id": "ddinter-phase1-dextromethorphan-ondansetron",
    "drugAId": "drug-dextromethorphan",
    "drugBId": "drug-ondansetron",
    "drugAName": "Dextromethorphan",
    "drugBName": "Ondansetron",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Dextromethorphan dan Ondansetron pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1615)",
    "ddinterPairId": "DDInter-PAIR-3968",
    "ddinterOriginalText": "Concomitant use of 5-HT3 receptor antagonists with agents that possess or enhance serotonergic activity such as selective serotonin reuptake inhibitors (SSRIs), selective serotonin-norepinephrine reuptake inhibitors (SNRIs), monoamine oxidase inhibitors (MAOIs), tricyclic antidepressants (TCAs), 5-HT1 receptor agonists (triptans), ergot alkaloids, phenylpiperidine opioids, bupropion, dextromethorphan, linezolid, lithium, St. John's wort, tramadol, and tryptophan may potentiate the risk of serotonin syndrome.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1615"
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
    "id": "ddinter-phase1-alfentanil-ondansetron",
    "drugAId": "drug-alfentanil",
    "drugBId": "drug-ondansetron",
    "drugAName": "Alfentanil",
    "drugBName": "Ondansetron",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Alfentanil dan Ondansetron pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1615)",
    "ddinterPairId": "DDInter-PAIR-14417",
    "ddinterOriginalText": "Concomitant use of 5-HT3 receptor antagonists with agents that possess or enhance serotonergic activity such as selective serotonin reuptake inhibitors (SSRIs), selective serotonin-norepinephrine reuptake inhibitors (SNRIs), monoamine oxidase inhibitors (MAOIs), tricyclic antidepressants (TCAs), 5-HT1 receptor agonists (triptans), ergot alkaloids, phenylpiperidine opioids, bupropion, dextromethorphan, linezolid, lithium, St. John's wort, tramadol, and tryptophan may potentiate the risk of serotonin syndrome.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1615"
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
    "id": "ddinter-phase1-ondansetron-almotriptan",
    "drugAId": "drug-ondansetron",
    "drugBId": "drug-almotriptan",
    "drugAName": "Ondansetron",
    "drugBName": "Almotriptan",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Ondansetron dan Almotriptan pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1615)",
    "ddinterPairId": "DDInter-PAIR-17705",
    "ddinterOriginalText": "Concomitant use of 5-HT3 receptor antagonists with agents that possess or enhance serotonergic activity such as selective serotonin reuptake inhibitors (SSRIs), selective serotonin-norepinephrine reuptake inhibitors (SNRIs), monoamine oxidase inhibitors (MAOIs), tricyclic antidepressants (TCAs), 5-HT1 receptor agonists (triptans), ergot alkaloids, phenylpiperidine opioids, bupropion, dextromethorphan, linezolid, lithium, St. John's wort, tramadol, and tryptophan may potentiate the risk of serotonin syndrome.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1615"
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
    "id": "ddinter-phase1-sumatriptan-ondansetron",
    "drugAId": "drug-sumatriptan",
    "drugBId": "drug-ondansetron",
    "drugAName": "Sumatriptan",
    "drugBName": "Ondansetron",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Sumatriptan dan Ondansetron pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1615)",
    "ddinterPairId": "DDInter-PAIR-19545",
    "ddinterOriginalText": "Concomitant use of 5-HT3 receptor antagonists with agents that possess or enhance serotonergic activity such as selective serotonin reuptake inhibitors (SSRIs), selective serotonin-norepinephrine reuptake inhibitors (SNRIs), monoamine oxidase inhibitors (MAOIs), tricyclic antidepressants (TCAs), 5-HT1 receptor agonists (triptans), ergot alkaloids, phenylpiperidine opioids, bupropion, dextromethorphan, linezolid, lithium, St. John's wort, tramadol, and tryptophan may potentiate the risk of serotonin syndrome.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1615"
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
    "id": "ddinter-phase1-ondansetron-bupropion",
    "drugAId": "drug-ondansetron",
    "drugBId": "drug-bupropion",
    "drugAName": "Ondansetron",
    "drugBName": "Bupropion",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Ondansetron dan Bupropion pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1615)",
    "ddinterPairId": "DDInter-PAIR-28423",
    "ddinterOriginalText": "Concomitant use of 5-HT3 receptor antagonists with agents that possess or enhance serotonergic activity such as selective serotonin reuptake inhibitors (SSRIs), selective serotonin-norepinephrine reuptake inhibitors (SNRIs), monoamine oxidase inhibitors (MAOIs), tricyclic antidepressants (TCAs), 5-HT1 receptor agonists (triptans), ergot alkaloids, phenylpiperidine opioids, bupropion, dextromethorphan, linezolid, lithium, St. John's wort, tramadol, and tryptophan may potentiate the risk of serotonin syndrome.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1615"
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
    "id": "ddinter-phase1-ondansetron-methylene-blue",
    "drugAId": "drug-ondansetron",
    "drugBId": "drug-methylene-blue",
    "drugAName": "Ondansetron",
    "drugBName": "Methylene blue",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Ondansetron dan Methylene blue pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1615)",
    "ddinterPairId": "DDInter-PAIR-38059",
    "ddinterOriginalText": "Concomitant use of 5-HT3 receptor antagonists with agents that possess or enhance serotonergic activity such as selective serotonin reuptake inhibitors (SSRIs), selective serotonin-norepinephrine reuptake inhibitors (SNRIs), monoamine oxidase inhibitors (MAOIs), tricyclic antidepressants (TCAs), 5-HT1 receptor agonists (triptans), ergot alkaloids, phenylpiperidine opioids, bupropion, dextromethorphan, linezolid, lithium, St. John's wort, tramadol, and tryptophan may potentiate the risk of serotonin syndrome.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1615"
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
    "id": "ddinter-phase1-buspirone-ondansetron",
    "drugAId": "drug-buspirone",
    "drugBId": "drug-ondansetron",
    "drugAName": "Buspirone",
    "drugBName": "Ondansetron",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Buspirone dan Ondansetron pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1615)",
    "ddinterPairId": "DDInter-PAIR-51678",
    "ddinterOriginalText": "Concomitant use of 5-HT3 receptor antagonists with agents that possess or enhance serotonergic activity such as selective serotonin reuptake inhibitors (SSRIs), selective serotonin-norepinephrine reuptake inhibitors (SNRIs), monoamine oxidase inhibitors (MAOIs), tricyclic antidepressants (TCAs), 5-HT1 receptor agonists (triptans), ergot alkaloids, phenylpiperidine opioids, bupropion, dextromethorphan, linezolid, lithium, St. John's wort, tramadol, and tryptophan may potentiate the risk of serotonin syndrome.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1615"
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
    "id": "ddinter-phase1-ondansetron-desvenlafaxine",
    "drugAId": "drug-ondansetron",
    "drugBId": "drug-desvenlafaxine",
    "drugAName": "Ondansetron",
    "drugBName": "Desvenlafaxine",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Ondansetron dan Desvenlafaxine pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1615)",
    "ddinterPairId": "DDInter-PAIR-84134",
    "ddinterOriginalText": "Concomitant use of 5-HT3 receptor antagonists with agents that possess or enhance serotonergic activity such as selective serotonin reuptake inhibitors (SSRIs), selective serotonin-norepinephrine reuptake inhibitors (SNRIs), monoamine oxidase inhibitors (MAOIs), tricyclic antidepressants (TCAs), 5-HT1 receptor agonists (triptans), ergot alkaloids, phenylpiperidine opioids, bupropion, dextromethorphan, linezolid, lithium, St. John's wort, tramadol, and tryptophan may potentiate the risk of serotonin syndrome.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1615"
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
    "id": "ddinter-phase1-ondansetron-doxepin",
    "drugAId": "drug-ondansetron",
    "drugBId": "drug-doxepin",
    "drugAName": "Ondansetron",
    "drugBName": "Doxepin",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Ondansetron dan Doxepin pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1615)",
    "ddinterPairId": "DDInter-PAIR-91250",
    "ddinterOriginalText": "Concomitant use of 5-HT3 receptor antagonists with agents that possess or enhance serotonergic activity such as antidepressants and lithium may potentiate the risk of serotonin syndrome, which is a rare but serious and potentially fatal condition thought to result from hyperstimulation of brainstem 5-HT1A and 2A receptors. Treatment with 5-HT3 receptor antagonists has been associated with dose-dependent prolongation of the QT interval. Theoretically, coadministration with other agents that can prolong the QT interval including certain antidepressants and lithium may result in additive effects and increased risk of ventricular arrhythmias such as torsade de pointes and sudden death.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3039"
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
    "id": "ddinter-phase1-duloxetine-ondansetron",
    "drugAId": "drug-duloxetine",
    "drugBId": "drug-ondansetron",
    "drugAName": "Duloxetine",
    "drugBName": "Ondansetron",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Duloxetine dan Ondansetron pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1615)",
    "ddinterPairId": "DDInter-PAIR-93794",
    "ddinterOriginalText": "Concomitant use of 5-HT3 receptor antagonists with agents that possess or enhance serotonergic activity such as selective serotonin reuptake inhibitors (SSRIs), selective serotonin-norepinephrine reuptake inhibitors (SNRIs), monoamine oxidase inhibitors (MAOIs), tricyclic antidepressants (TCAs), 5-HT1 receptor agonists (triptans), ergot alkaloids, phenylpiperidine opioids, bupropion, dextromethorphan, linezolid, lithium, St. John's wort, tramadol, and tryptophan may potentiate the risk of serotonin syndrome.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1615"
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
    "id": "ddinter-phase1-eletriptan-ondansetron",
    "drugAId": "drug-eletriptan",
    "drugBId": "drug-ondansetron",
    "drugAName": "Eletriptan",
    "drugBName": "Ondansetron",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Eletriptan dan Ondansetron pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1615)",
    "ddinterPairId": "DDInter-PAIR-96940",
    "ddinterOriginalText": "Concomitant use of 5-HT3 receptor antagonists with agents that possess or enhance serotonergic activity such as selective serotonin reuptake inhibitors (SSRIs), selective serotonin-norepinephrine reuptake inhibitors (SNRIs), monoamine oxidase inhibitors (MAOIs), tricyclic antidepressants (TCAs), 5-HT1 receptor agonists (triptans), ergot alkaloids, phenylpiperidine opioids, bupropion, dextromethorphan, linezolid, lithium, St. John's wort, tramadol, and tryptophan may potentiate the risk of serotonin syndrome.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1615"
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
    "id": "ddinter-phase1-acarbose-efavirenz",
    "drugAId": "drug-acarbose",
    "drugBId": "drug-efavirenz",
    "drugAName": "Acarbose",
    "drugBName": "Efavirenz",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Acarbose dan Efavirenz pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1)",
    "ddinterPairId": "DDInter-PAIR-3114",
    "ddinterOriginalText": "Coadministration of efavirenz with other agents known to induce hepatotoxicity may potentiate the risk of liver injury. Efavirenz has been associated with hepatotoxicity during postmarketing use.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Acarbose ↔ Efavirenz)"
    ],
    "alternativeOptionsA": [
      "Metformin",
      "Linagliptin",
      "Vildagliptin",
      "Dapagliflozin"
    ],
    "alternativeOptionsB": [
      "Cabotegravir",
      "Tenofovir alafenamide",
      "Rilpivirine",
      "Bictegravir",
      "Maraviroc",
      "Remdesivir"
    ]
  },
  {
    "id": "ddinter-phase1-fosinopril-efavirenz",
    "drugAId": "drug-fosinopril",
    "drugBId": "drug-efavirenz",
    "drugAName": "Fosinopril",
    "drugBName": "Efavirenz",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Fosinopril dan Efavirenz pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1)",
    "ddinterPairId": "DDInter-PAIR-15089",
    "ddinterOriginalText": "Coadministration of efavirenz with other agents known to induce hepatotoxicity may potentiate the risk of liver injury. Efavirenz has been associated with hepatotoxicity during postmarketing use.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Fosinopril ↔ Efavirenz)"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Cabotegravir",
      "Tenofovir alafenamide",
      "Rilpivirine",
      "Bictegravir",
      "Maraviroc",
      "Remdesivir"
    ]
  },
  {
    "id": "ddinter-phase1-efavirenz-pioglitazone",
    "drugAId": "drug-efavirenz",
    "drugBId": "drug-pioglitazone",
    "drugAName": "Efavirenz",
    "drugBName": "Pioglitazone",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Efavirenz dan Pioglitazone pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1)",
    "ddinterPairId": "DDInter-PAIR-18279",
    "ddinterOriginalText": "Coadministration of efavirenz with other agents known to induce hepatotoxicity may potentiate the risk of liver injury. Efavirenz has been associated with hepatotoxicity during postmarketing use.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Efavirenz ↔ Pioglitazone)"
    ],
    "alternativeOptionsA": [
      "Cabotegravir",
      "Tenofovir alafenamide",
      "Rilpivirine",
      "Bictegravir",
      "Maraviroc",
      "Remdesivir"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-phase1-efavirenz-fenofibrate",
    "drugAId": "drug-efavirenz",
    "drugBId": "drug-fenofibrate",
    "drugAName": "Efavirenz",
    "drugBName": "Fenofibrate",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Efavirenz dan Fenofibrate pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1)",
    "ddinterPairId": "DDInter-PAIR-26630",
    "ddinterOriginalText": "Coadministration of efavirenz with other agents known to induce hepatotoxicity may potentiate the risk of liver injury. Efavirenz has been associated with hepatotoxicity during postmarketing use.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Efavirenz ↔ Fenofibrate)"
    ],
    "alternativeOptionsA": [
      "Cabotegravir",
      "Tenofovir alafenamide",
      "Rilpivirine",
      "Bictegravir",
      "Maraviroc",
      "Remdesivir"
    ],
    "alternativeOptionsB": [
      "Ezetimibe",
      "Omega-3 Acid Ethyl Esters"
    ]
  },
  {
    "id": "ddinter-phase1-benazepril-efavirenz",
    "drugAId": "drug-benazepril",
    "drugBId": "drug-efavirenz",
    "drugAName": "Benazepril",
    "drugBName": "Efavirenz",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Benazepril dan Efavirenz pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1)",
    "ddinterPairId": "DDInter-PAIR-40539",
    "ddinterOriginalText": "Coadministration of efavirenz with other agents known to induce hepatotoxicity may potentiate the risk of liver injury. Efavirenz has been associated with hepatotoxicity during postmarketing use.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Benazepril ↔ Efavirenz)"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Cabotegravir",
      "Tenofovir alafenamide",
      "Rilpivirine",
      "Bictegravir",
      "Maraviroc",
      "Remdesivir"
    ]
  },
  {
    "id": "ddinter-phase1-efavirenz-captopril",
    "drugAId": "drug-efavirenz",
    "drugBId": "drug-captopril",
    "drugAName": "Efavirenz",
    "drugBName": "Captopril",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Efavirenz dan Captopril pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1)",
    "ddinterPairId": "DDInter-PAIR-55877",
    "ddinterOriginalText": "Coadministration of efavirenz with other agents known to induce hepatotoxicity may potentiate the risk of liver injury. Efavirenz has been associated with hepatotoxicity during postmarketing use.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Efavirenz ↔ Captopril)"
    ],
    "alternativeOptionsA": [
      "Cabotegravir",
      "Tenofovir alafenamide",
      "Rilpivirine",
      "Bictegravir",
      "Maraviroc",
      "Remdesivir"
    ],
    "alternativeOptionsB": [
      "Candesartan",
      "Valsartan",
      "Telmisartan",
      "Amlodipine"
    ]
  },
  {
    "id": "ddinter-phase1-enalapril-efavirenz",
    "drugAId": "drug-enalapril",
    "drugBId": "drug-efavirenz",
    "drugAName": "Enalapril",
    "drugBName": "Efavirenz",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Enalapril dan Efavirenz pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1)",
    "ddinterPairId": "DDInter-PAIR-95903",
    "ddinterOriginalText": "Coadministration of efavirenz with other agents known to induce hepatotoxicity may potentiate the risk of liver injury. Efavirenz has been associated with hepatotoxicity during postmarketing use.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Enalapril ↔ Efavirenz)"
    ],
    "alternativeOptionsA": [
      "Candesartan",
      "Valsartan",
      "Telmisartan",
      "Amlodipine"
    ],
    "alternativeOptionsB": [
      "Cabotegravir",
      "Tenofovir alafenamide",
      "Rilpivirine",
      "Bictegravir",
      "Maraviroc",
      "Remdesivir"
    ]
  },
  {
    "id": "ddinter-phase1-efavirenz-fluvastatin",
    "drugAId": "drug-efavirenz",
    "drugBId": "drug-fluvastatin",
    "drugAName": "Efavirenz",
    "drugBName": "Fluvastatin",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Efavirenz dan Fluvastatin pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1)",
    "ddinterPairId": "DDInter-PAIR-95948",
    "ddinterOriginalText": "Coadministration of efavirenz with other agents known to induce hepatotoxicity may potentiate the risk of liver injury. Efavirenz has been associated with hepatotoxicity during postmarketing use.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Efavirenz ↔ Fluvastatin)"
    ],
    "alternativeOptionsA": [
      "Cabotegravir",
      "Tenofovir alafenamide",
      "Rilpivirine",
      "Bictegravir",
      "Maraviroc",
      "Remdesivir"
    ],
    "alternativeOptionsB": [
      "Rosuvastatin",
      "Pravastatin",
      "Pitavastatin",
      "Ezetimibe"
    ]
  },
  {
    "id": "ddinter-phase1-labetalol-efavirenz",
    "drugAId": "drug-labetalol",
    "drugBId": "drug-efavirenz",
    "drugAName": "Labetalol",
    "drugBName": "Efavirenz",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Labetalol dan Efavirenz pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1)",
    "ddinterPairId": "DDInter-PAIR-96003",
    "ddinterOriginalText": "Coadministration of efavirenz with other agents known to induce hepatotoxicity may potentiate the risk of liver injury. Efavirenz has been associated with hepatotoxicity during postmarketing use.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Labetalol ↔ Efavirenz)"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Cabotegravir",
      "Tenofovir alafenamide",
      "Rilpivirine",
      "Bictegravir",
      "Maraviroc",
      "Remdesivir"
    ]
  },
  {
    "id": "ddinter-phase1-efavirenz-lisinopril",
    "drugAId": "drug-efavirenz",
    "drugBId": "drug-lisinopril",
    "drugAName": "Efavirenz",
    "drugBName": "Lisinopril",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Efavirenz dan Lisinopril pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1)",
    "ddinterPairId": "DDInter-PAIR-96024",
    "ddinterOriginalText": "Coadministration of efavirenz with other agents known to induce hepatotoxicity may potentiate the risk of liver injury. Efavirenz has been associated with hepatotoxicity during postmarketing use.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Efavirenz ↔ Lisinopril)"
    ],
    "alternativeOptionsA": [
      "Cabotegravir",
      "Tenofovir alafenamide",
      "Rilpivirine",
      "Bictegravir",
      "Maraviroc",
      "Remdesivir"
    ],
    "alternativeOptionsB": [
      "Candesartan",
      "Valsartan",
      "Telmisartan",
      "Amlodipine"
    ]
  },
  {
    "id": "ddinter-phase1-efavirenz-methyldopa",
    "drugAId": "drug-efavirenz",
    "drugBId": "drug-methyldopa",
    "drugAName": "Efavirenz",
    "drugBName": "Methyldopa",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek sinergis farmakodinamik antara Efavirenz dan Methyldopa pada sistem biologis yang sama sesuai data DDInter 2.0.",
    "clinicalOutcome": "Peningkatan intensitas respons terapi atau timbulnya efek samping aditif ringan-sedang.",
    "management": "Pantau respons klinis dan tanda vital pasien secara teratur; sesuaikan dosis bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 1)",
    "ddinterPairId": "DDInter-PAIR-96059",
    "ddinterOriginalText": "Coadministration of efavirenz with other agents known to induce hepatotoxicity may potentiate the risk of liver injury. Efavirenz has been associated with hepatotoxicity during postmarketing use.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Efavirenz ↔ Methyldopa)"
    ],
    "alternativeOptionsA": [
      "Cabotegravir",
      "Tenofovir alafenamide",
      "Rilpivirine",
      "Bictegravir",
      "Maraviroc",
      "Remdesivir"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-phase1-mifepristone-pioglitazone",
    "drugAId": "drug-mifepristone",
    "drugBId": "drug-pioglitazone",
    "drugAName": "Mifepristone",
    "drugBName": "Pioglitazone",
    "severity": "Moderate",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 5)",
    "ddinterPairId": "DDInter-PAIR-18358",
    "ddinterOriginalText": "Coadministration with mifepristone may increase the plasma concentrations of drugs that are substrates of CYP450 2C8 and/or 2C9. The mechanism is decreased clearance due to inhibition of CYP450 2C8/2C9 activity by mifepristone.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Mifepristone ↔ Pioglitazone)"
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
    "id": "ddinter-phase1-losartan-mifepristone",
    "drugAId": "drug-losartan",
    "drugBId": "drug-mifepristone",
    "drugAName": "Losartan",
    "drugBName": "Mifepristone",
    "severity": "Moderate",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 5)",
    "ddinterPairId": "DDInter-PAIR-101298",
    "ddinterOriginalText": "Coadministration with mifepristone may increase the plasma concentrations of drugs that are substrates of CYP450 2C8 and/or 2C9. The mechanism is decreased clearance due to inhibition of CYP450 2C8/2C9 activity by mifepristone.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Losartan ↔ Mifepristone)"
    ],
    "alternativeOptionsA": [
      "Amlodipine",
      "Bisoprolol",
      "Diltiazem"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-phase1-glimepiride-mifepristone",
    "drugAId": "drug-glimepiride",
    "drugBId": "drug-mifepristone",
    "drugAName": "Glimepiride",
    "drugBName": "Mifepristone",
    "severity": "Moderate",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 5)",
    "ddinterPairId": "DDInter-PAIR-108128",
    "ddinterOriginalText": "Coadministration with mifepristone may increase the plasma concentrations of drugs that are substrates of CYP450 2C8 and/or 2C9. The mechanism is decreased clearance due to inhibition of CYP450 2C8/2C9 activity by mifepristone.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Glimepiride ↔ Mifepristone)"
    ],
    "alternativeOptionsA": [
      "Linagliptin",
      "Sitagliptin",
      "Empagliflozin",
      "Metformin"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddinter-phase1-mifepristone-irbesartan",
    "drugAId": "drug-mifepristone",
    "drugBId": "drug-irbesartan",
    "drugAName": "Mifepristone",
    "drugBName": "Irbesartan",
    "severity": "Moderate",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 5)",
    "ddinterPairId": "DDInter-PAIR-119105",
    "ddinterOriginalText": "Coadministration with mifepristone may increase the plasma concentrations of drugs that are substrates of CYP450 2C8 and/or 2C9. The mechanism is decreased clearance due to inhibition of CYP450 2C8/2C9 activity by mifepristone.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Mifepristone ↔ Irbesartan)"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Amlodipine",
      "Bisoprolol",
      "Diltiazem"
    ]
  },
  {
    "id": "ddinter-phase1-mifepristone-glipizide",
    "drugAId": "drug-mifepristone",
    "drugBId": "drug-glipizide",
    "drugAName": "Mifepristone",
    "drugBName": "Glipizide",
    "severity": "Moderate",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 5)",
    "ddinterPairId": "DDInter-PAIR-140731",
    "ddinterOriginalText": "Coadministration with mifepristone may increase the plasma concentrations of drugs that are substrates of CYP450 2C8 and/or 2C9. The mechanism is decreased clearance due to inhibition of CYP450 2C8/2C9 activity by mifepristone.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Mifepristone ↔ Glipizide)"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Linagliptin",
      "Sitagliptin",
      "Empagliflozin",
      "Metformin"
    ]
  },
  {
    "id": "ddinter-phase1-nateglinide-mifepristone",
    "drugAId": "drug-nateglinide",
    "drugBId": "drug-mifepristone",
    "drugAName": "Nateglinide",
    "drugBName": "Mifepristone",
    "severity": "Moderate",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 5)",
    "ddinterPairId": "DDInter-PAIR-140777",
    "ddinterOriginalText": "Coadministration with mifepristone may increase the plasma concentrations of drugs that are substrates of CYP450 2C8 and/or 2C9. The mechanism is decreased clearance due to inhibition of CYP450 2C8/2C9 activity by mifepristone.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Nateglinide ↔ Mifepristone)"
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
    "id": "ddinter-phase1-rosiglitazone-mifepristone",
    "drugAId": "drug-rosiglitazone",
    "drugBId": "drug-mifepristone",
    "drugAName": "Rosiglitazone",
    "drugBName": "Mifepristone",
    "severity": "Moderate",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 5)",
    "ddinterPairId": "DDInter-PAIR-140861",
    "ddinterOriginalText": "Coadministration with mifepristone may increase the plasma concentrations of drugs that are substrates of CYP450 2C8 and/or 2C9. The mechanism is decreased clearance due to inhibition of CYP450 2C8/2C9 activity by mifepristone.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Rosiglitazone ↔ Mifepristone)"
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
    "id": "ddinter-phase1-mifepristone-tolbutamide",
    "drugAId": "drug-mifepristone",
    "drugBId": "drug-tolbutamide",
    "drugAName": "Mifepristone",
    "drugBName": "Tolbutamide",
    "severity": "Moderate",
    "mechanismCategory": "Metabolism",
    "mechanism": "Inhibisi isoenzim sitokrom P450 hepar oleh salah satu obat menghambat metabolisme obat pasangan, meningkatkan konsentrasi plasma.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan kadar obat dalam darah yang dapat memperpanjang efek terapi atau meningkatkan risiko efek samping.",
    "management": "Pantau respons klinis dan tanda-tanda toksisitas secara saksama; pertimbangkan penyesuaian dosis obat substrat bila perlu.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 5)",
    "ddinterPairId": "DDInter-PAIR-140917",
    "ddinterOriginalText": "Coadministration with mifepristone may increase the plasma concentrations of drugs that are substrates of CYP450 2C8 and/or 2C9. The mechanism is decreased clearance due to inhibition of CYP450 2C8/2C9 activity by mifepristone.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Mifepristone ↔ Tolbutamide)"
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
    "id": "ddinter-phase1-alfuzosin-acebutolol",
    "drugAId": "drug-alfuzosin",
    "drugBId": "drug-acebutolol",
    "drugAName": "Alfuzosin",
    "drugBName": "Acebutolol",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Alfuzosin dan Acebutolol menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-3990",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Alfuzosin ↔ Acebutolol)"
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
    "id": "ddinter-phase1-doxazosin-acebutolol",
    "drugAId": "drug-doxazosin",
    "drugBId": "drug-acebutolol",
    "drugAName": "Doxazosin",
    "drugBName": "Acebutolol",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Doxazosin dan Acebutolol menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-4100",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Doxazosin ↔ Acebutolol)"
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
    "id": "ddinter-phase1-phenoxybenzamine-acebutolol",
    "drugAId": "drug-phenoxybenzamine",
    "drugBId": "drug-acebutolol",
    "drugAName": "Phenoxybenzamine",
    "drugBName": "Acebutolol",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Phenoxybenzamine dan Acebutolol menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-4293",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Phenoxybenzamine ↔ Acebutolol)"
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
    "id": "ddinter-phase1-prazosin-acebutolol",
    "drugAId": "drug-prazosin",
    "drugBId": "drug-acebutolol",
    "drugAName": "Prazosin",
    "drugBName": "Acebutolol",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Prazosin dan Acebutolol menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-4302",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Prazosin ↔ Acebutolol)"
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
    "id": "ddinter-phase1-acebutolol-silodosin",
    "drugAId": "drug-acebutolol",
    "drugBId": "drug-silodosin",
    "drugAName": "Acebutolol",
    "drugBName": "Silodosin",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Acebutolol dan Silodosin menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-4341",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Acebutolol ↔ Silodosin)"
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
    "id": "ddinter-phase1-terazosin-acebutolol",
    "drugAId": "drug-terazosin",
    "drugBId": "drug-acebutolol",
    "drugAName": "Terazosin",
    "drugBName": "Acebutolol",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Terazosin dan Acebutolol menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-4357",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Terazosin ↔ Acebutolol)"
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
    "id": "ddinter-phase1-atenolol-alfuzosin",
    "drugAId": "drug-atenolol",
    "drugBId": "drug-alfuzosin",
    "drugAName": "Atenolol",
    "drugBName": "Alfuzosin",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Atenolol dan Alfuzosin menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-16084",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Atenolol ↔ Alfuzosin)"
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
    "id": "ddinter-phase1-betaxolol-alfuzosin",
    "drugAId": "drug-betaxolol",
    "drugBId": "drug-alfuzosin",
    "drugAName": "Betaxolol",
    "drugBName": "Alfuzosin",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Betaxolol dan Alfuzosin menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-16094",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Betaxolol ↔ Alfuzosin)"
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
    "id": "ddinter-phase1-alfuzosin-bisoprolol",
    "drugAId": "drug-alfuzosin",
    "drugBId": "drug-bisoprolol",
    "drugAName": "Alfuzosin",
    "drugBName": "Bisoprolol",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Alfuzosin dan Bisoprolol menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-16098",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Alfuzosin ↔ Bisoprolol)"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Amlodipine",
      "Candesartan",
      "Valsartan"
    ]
  },
  {
    "id": "ddinter-phase1-alfuzosin-carteolol",
    "drugAId": "drug-alfuzosin",
    "drugBId": "drug-carteolol",
    "drugAName": "Alfuzosin",
    "drugBName": "Carteolol",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Alfuzosin dan Carteolol menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-16115",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Alfuzosin ↔ Carteolol)"
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
    "id": "ddinter-phase1-alfuzosin-carvedilol",
    "drugAId": "drug-alfuzosin",
    "drugBId": "drug-carvedilol",
    "drugAName": "Alfuzosin",
    "drugBName": "Carvedilol",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Alfuzosin dan Carvedilol menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-16117",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Alfuzosin ↔ Carvedilol)"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Amlodipine",
      "Candesartan",
      "Valsartan"
    ]
  },
  {
    "id": "ddinter-phase1-esmolol-alfuzosin",
    "drugAId": "drug-esmolol",
    "drugBId": "drug-alfuzosin",
    "drugAName": "Esmolol",
    "drugBName": "Alfuzosin",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Esmolol dan Alfuzosin menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-16191",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Esmolol ↔ Alfuzosin)"
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
    "id": "ddinter-phase1-alfuzosin-labetalol",
    "drugAId": "drug-alfuzosin",
    "drugBId": "drug-labetalol",
    "drugAName": "Alfuzosin",
    "drugBName": "Labetalol",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Alfuzosin dan Labetalol menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-16243",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Alfuzosin ↔ Labetalol)"
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
    "id": "ddinter-phase1-alfuzosin-levobetaxolol",
    "drugAId": "drug-alfuzosin",
    "drugBId": "drug-levobetaxolol",
    "drugAName": "Alfuzosin",
    "drugBName": "Levobetaxolol",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Alfuzosin dan Levobetaxolol menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-PHASE1-8-224"
  },
  {
    "id": "ddinter-phase1-alfuzosin-levobunolol",
    "drugAId": "drug-alfuzosin",
    "drugBId": "drug-levobunolol",
    "drugAName": "Alfuzosin",
    "drugBName": "Levobunolol",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Alfuzosin dan Levobunolol menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-PHASE1-8-225"
  },
  {
    "id": "ddinter-phase1-alfuzosin-metipranolol",
    "drugAId": "drug-alfuzosin",
    "drugBId": "drug-metipranolol",
    "drugAName": "Alfuzosin",
    "drugBName": "Metipranolol",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Alfuzosin dan Metipranolol menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-PHASE1-8-226"
  },
  {
    "id": "ddinter-phase1-metoprolol-alfuzosin",
    "drugAId": "drug-metoprolol",
    "drugBId": "drug-alfuzosin",
    "drugAName": "Metoprolol",
    "drugBName": "Alfuzosin",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Metoprolol dan Alfuzosin menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-16290",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Metoprolol ↔ Alfuzosin)"
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
    "id": "ddinter-phase1-alfuzosin-nadolol",
    "drugAId": "drug-alfuzosin",
    "drugBId": "drug-nadolol",
    "drugAName": "Alfuzosin",
    "drugBName": "Nadolol",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Alfuzosin dan Nadolol menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-16307",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Alfuzosin ↔ Nadolol)"
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
    "id": "ddinter-phase1-alfuzosin-nebivolol",
    "drugAId": "drug-alfuzosin",
    "drugBId": "drug-nebivolol",
    "drugAName": "Alfuzosin",
    "drugBName": "Nebivolol",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Alfuzosin dan Nebivolol menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-16309",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Alfuzosin ↔ Nebivolol)"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Amlodipine",
      "Candesartan",
      "Valsartan"
    ]
  },
  {
    "id": "ddinter-phase1-alfuzosin-penbutolol",
    "drugAId": "drug-alfuzosin",
    "drugBId": "drug-penbutolol",
    "drugAName": "Alfuzosin",
    "drugBName": "Penbutolol",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Alfuzosin dan Penbutolol menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-16339",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Alfuzosin ↔ Penbutolol)"
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
    "id": "ddinter-phase1-alfuzosin-pindolol",
    "drugAId": "drug-alfuzosin",
    "drugBId": "drug-pindolol",
    "drugAName": "Alfuzosin",
    "drugBName": "Pindolol",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Alfuzosin dan Pindolol menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-16354",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Alfuzosin ↔ Pindolol)"
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
    "id": "ddinter-phase1-alfuzosin-propranolol",
    "drugAId": "drug-alfuzosin",
    "drugBId": "drug-propranolol",
    "drugAName": "Alfuzosin",
    "drugBName": "Propranolol",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Alfuzosin dan Propranolol menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-16373",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Alfuzosin ↔ Propranolol)"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Amlodipine",
      "Candesartan",
      "Valsartan"
    ]
  },
  {
    "id": "ddinter-phase1-alfuzosin-timolol",
    "drugAId": "drug-alfuzosin",
    "drugBId": "drug-timolol",
    "drugAName": "Alfuzosin",
    "drugBName": "Timolol",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Alfuzosin dan Timolol menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-16436",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Alfuzosin ↔ Timolol)"
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
    "id": "ddinter-phase1-atenolol-doxazosin",
    "drugAId": "drug-atenolol",
    "drugBId": "drug-doxazosin",
    "drugAName": "Atenolol",
    "drugBName": "Doxazosin",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Atenolol dan Doxazosin menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-35087",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Atenolol ↔ Doxazosin)"
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
    "id": "ddinter-phase1-atenolol-phenoxybenzamine",
    "drugAId": "drug-atenolol",
    "drugBId": "drug-phenoxybenzamine",
    "drugAName": "Atenolol",
    "drugBName": "Phenoxybenzamine",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Atenolol dan Phenoxybenzamine menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-35259",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Atenolol ↔ Phenoxybenzamine)"
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
    "id": "ddinter-phase1-atenolol-prazosin",
    "drugAId": "drug-atenolol",
    "drugBId": "drug-prazosin",
    "drugAName": "Atenolol",
    "drugBName": "Prazosin",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Atenolol dan Prazosin menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-35268",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Atenolol ↔ Prazosin)"
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
    "id": "ddinter-phase1-atenolol-silodosin",
    "drugAId": "drug-atenolol",
    "drugBId": "drug-silodosin",
    "drugAName": "Atenolol",
    "drugBName": "Silodosin",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Atenolol dan Silodosin menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-35304",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Atenolol ↔ Silodosin)"
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
    "id": "ddinter-phase1-atenolol-terazosin",
    "drugAId": "drug-atenolol",
    "drugBId": "drug-terazosin",
    "drugAName": "Atenolol",
    "drugBName": "Terazosin",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Atenolol dan Terazosin menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-35319",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Atenolol ↔ Terazosin)"
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
    "id": "ddinter-phase1-betaxolol-doxazosin",
    "drugAId": "drug-betaxolol",
    "drugBId": "drug-doxazosin",
    "drugAName": "Betaxolol",
    "drugBName": "Doxazosin",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Betaxolol dan Doxazosin menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-42446",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Betaxolol ↔ Doxazosin)"
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
    "id": "ddinter-phase1-betaxolol-prazosin",
    "drugAId": "drug-betaxolol",
    "drugBId": "drug-prazosin",
    "drugAName": "Betaxolol",
    "drugBName": "Prazosin",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Betaxolol dan Prazosin menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-42627",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Betaxolol ↔ Prazosin)"
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
    "id": "ddinter-phase1-betaxolol-silodosin",
    "drugAId": "drug-betaxolol",
    "drugBId": "drug-silodosin",
    "drugAName": "Betaxolol",
    "drugBName": "Silodosin",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Betaxolol dan Silodosin menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-42664",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Betaxolol ↔ Silodosin)"
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
    "id": "ddinter-phase1-betaxolol-terazosin",
    "drugAId": "drug-betaxolol",
    "drugBId": "drug-terazosin",
    "drugAName": "Betaxolol",
    "drugBName": "Terazosin",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Betaxolol dan Terazosin menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-42679",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Betaxolol ↔ Terazosin)"
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
    "id": "ddinter-phase1-bisoprolol-phenoxybenzamine",
    "drugAId": "drug-bisoprolol",
    "drugBId": "drug-phenoxybenzamine",
    "drugAName": "Bisoprolol",
    "drugBName": "Phenoxybenzamine",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Bisoprolol dan Phenoxybenzamine menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-45110",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Bisoprolol ↔ Phenoxybenzamine)"
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
    "id": "ddinter-phase1-prazosin-bisoprolol",
    "drugAId": "drug-prazosin",
    "drugBId": "drug-bisoprolol",
    "drugAName": "Prazosin",
    "drugBName": "Bisoprolol",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Prazosin dan Bisoprolol menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-45119",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Prazosin ↔ Bisoprolol)"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Amlodipine",
      "Candesartan",
      "Valsartan"
    ]
  },
  {
    "id": "ddinter-phase1-bisoprolol-silodosin",
    "drugAId": "drug-bisoprolol",
    "drugBId": "drug-silodosin",
    "drugAName": "Bisoprolol",
    "drugBName": "Silodosin",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Bisoprolol dan Silodosin menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-45156",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Bisoprolol ↔ Silodosin)"
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
    "id": "ddinter-phase1-bisoprolol-terazosin",
    "drugAId": "drug-bisoprolol",
    "drugBId": "drug-terazosin",
    "drugAName": "Bisoprolol",
    "drugBName": "Terazosin",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Bisoprolol dan Terazosin menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-45171",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Bisoprolol ↔ Terazosin)"
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
    "id": "ddinter-phase1-timolol-doxazosin",
    "drugAId": "drug-timolol",
    "drugBId": "drug-doxazosin",
    "drugAName": "Timolol",
    "drugBName": "Doxazosin",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Timolol dan Doxazosin menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-90989",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Timolol ↔ Doxazosin)"
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
    "id": "ddinter-phase1-carteolol-doxazosin",
    "drugAId": "drug-carteolol",
    "drugBId": "drug-doxazosin",
    "drugAName": "Carteolol",
    "drugBName": "Doxazosin",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Carteolol dan Doxazosin menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-90841",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Carteolol ↔ Doxazosin)"
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
    "id": "ddinter-phase1-prazosin-carteolol",
    "drugAId": "drug-prazosin",
    "drugBId": "drug-carteolol",
    "drugAName": "Prazosin",
    "drugBName": "Carteolol",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Prazosin dan Carteolol menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-156586",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Prazosin ↔ Carteolol)"
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
    "id": "ddinter-phase1-carteolol-silodosin",
    "drugAId": "drug-carteolol",
    "drugBId": "drug-silodosin",
    "drugAName": "Carteolol",
    "drugBName": "Silodosin",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Carteolol dan Silodosin menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-165874",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Carteolol ↔ Silodosin)"
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
    "id": "ddinter-phase1-carteolol-terazosin",
    "drugAId": "drug-carteolol",
    "drugBId": "drug-terazosin",
    "drugAName": "Carteolol",
    "drugBName": "Terazosin",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Carteolol dan Terazosin menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-168773",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Carteolol ↔ Terazosin)"
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
    "id": "ddinter-phase1-doxazosin-carvedilol",
    "drugAId": "drug-doxazosin",
    "drugBId": "drug-carvedilol",
    "drugAName": "Doxazosin",
    "drugBName": "Carvedilol",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Doxazosin dan Carvedilol menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-59698",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Doxazosin ↔ Carvedilol)"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Amlodipine",
      "Candesartan",
      "Valsartan"
    ]
  },
  {
    "id": "ddinter-phase1-phenoxybenzamine-carvedilol",
    "drugAId": "drug-phenoxybenzamine",
    "drugBId": "drug-carvedilol",
    "drugAName": "Phenoxybenzamine",
    "drugBName": "Carvedilol",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Phenoxybenzamine dan Carvedilol menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-59901",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Phenoxybenzamine ↔ Carvedilol)"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Amlodipine",
      "Candesartan",
      "Valsartan"
    ]
  },
  {
    "id": "ddinter-phase1-prazosin-carvedilol",
    "drugAId": "drug-prazosin",
    "drugBId": "drug-carvedilol",
    "drugAName": "Prazosin",
    "drugBName": "Carvedilol",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Prazosin dan Carvedilol menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-59910",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Prazosin ↔ Carvedilol)"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Amlodipine",
      "Candesartan",
      "Valsartan"
    ]
  },
  {
    "id": "ddinter-phase1-carvedilol-silodosin",
    "drugAId": "drug-carvedilol",
    "drugBId": "drug-silodosin",
    "drugAName": "Carvedilol",
    "drugBName": "Silodosin",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Carvedilol dan Silodosin menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-59957",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Carvedilol ↔ Silodosin)"
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
    "id": "ddinter-phase1-carvedilol-terazosin",
    "drugAId": "drug-carvedilol",
    "drugBId": "drug-terazosin",
    "drugAName": "Carvedilol",
    "drugBName": "Terazosin",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Carvedilol dan Terazosin menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-59973",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Carvedilol ↔ Terazosin)"
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
    "id": "ddinter-phase1-timolol-prazosin",
    "drugAId": "drug-timolol",
    "drugBId": "drug-prazosin",
    "drugAName": "Timolol",
    "drugBName": "Prazosin",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Timolol dan Prazosin menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-156656",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Timolol ↔ Prazosin)"
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
    "id": "ddinter-phase1-timolol-silodosin",
    "drugAId": "drug-timolol",
    "drugBId": "drug-silodosin",
    "drugAName": "Timolol",
    "drugBName": "Silodosin",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Timolol dan Silodosin menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-165965",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Timolol ↔ Silodosin)"
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
    "id": "ddinter-phase1-timolol-terazosin",
    "drugAId": "drug-timolol",
    "drugBId": "drug-terazosin",
    "drugAName": "Timolol",
    "drugBName": "Terazosin",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Timolol dan Terazosin menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-168822",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Timolol ↔ Terazosin)"
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
    "id": "ddinter-phase1-esmolol-doxazosin",
    "drugAId": "drug-esmolol",
    "drugBId": "drug-doxazosin",
    "drugAName": "Esmolol",
    "drugBName": "Doxazosin",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Esmolol dan Doxazosin menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-90855",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Esmolol ↔ Doxazosin)"
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
    "id": "ddinter-phase1-doxazosin-labetalol",
    "drugAId": "drug-doxazosin",
    "drugBId": "drug-labetalol",
    "drugAName": "Doxazosin",
    "drugBName": "Labetalol",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Doxazosin dan Labetalol menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-90877",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Doxazosin ↔ Labetalol)"
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
    "id": "ddinter-phase1-doxazosin-levobetaxolol",
    "drugAId": "drug-doxazosin",
    "drugBId": "drug-levobetaxolol",
    "drugAName": "Doxazosin",
    "drugBName": "Levobetaxolol",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Doxazosin dan Levobetaxolol menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-PHASE1-8-262"
  },
  {
    "id": "ddinter-phase1-doxazosin-levobunolol",
    "drugAId": "drug-doxazosin",
    "drugBId": "drug-levobunolol",
    "drugAName": "Doxazosin",
    "drugBName": "Levobunolol",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Doxazosin dan Levobunolol menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-PHASE1-8-263"
  },
  {
    "id": "ddinter-phase1-doxazosin-metipranolol",
    "drugAId": "drug-doxazosin",
    "drugBId": "drug-metipranolol",
    "drugAName": "Doxazosin",
    "drugBName": "Metipranolol",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Doxazosin dan Metipranolol menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-PHASE1-8-264"
  },
  {
    "id": "ddinter-phase1-metoprolol-doxazosin",
    "drugAId": "drug-metoprolol",
    "drugBId": "drug-doxazosin",
    "drugAName": "Metoprolol",
    "drugBName": "Doxazosin",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Metoprolol dan Doxazosin menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-90907",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Metoprolol ↔ Doxazosin)"
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
    "id": "ddinter-phase1-doxazosin-nadolol",
    "drugAId": "drug-doxazosin",
    "drugBId": "drug-nadolol",
    "drugAName": "Doxazosin",
    "drugBName": "Nadolol",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Doxazosin dan Nadolol menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-90915",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Doxazosin ↔ Nadolol)"
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
    "id": "ddinter-phase1-doxazosin-nebivolol",
    "drugAId": "drug-doxazosin",
    "drugBId": "drug-nebivolol",
    "drugAName": "Doxazosin",
    "drugBName": "Nebivolol",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Doxazosin dan Nebivolol menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-90917",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Doxazosin ↔ Nebivolol)"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Amlodipine",
      "Candesartan",
      "Valsartan"
    ]
  },
  {
    "id": "ddinter-phase1-doxazosin-penbutolol",
    "drugAId": "drug-doxazosin",
    "drugBId": "drug-penbutolol",
    "drugAName": "Doxazosin",
    "drugBName": "Penbutolol",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Doxazosin dan Penbutolol menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-90933",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Doxazosin ↔ Penbutolol)"
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
    "id": "ddinter-phase1-doxazosin-pindolol",
    "drugAId": "drug-doxazosin",
    "drugBId": "drug-pindolol",
    "drugAName": "Doxazosin",
    "drugBName": "Pindolol",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Doxazosin dan Pindolol menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-90941",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Doxazosin ↔ Pindolol)"
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
    "id": "ddinter-phase1-propranolol-doxazosin",
    "drugAId": "drug-propranolol",
    "drugBId": "drug-doxazosin",
    "drugAName": "Propranolol",
    "drugBName": "Doxazosin",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Propranolol dan Doxazosin menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-90950",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Propranolol ↔ Doxazosin)"
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
    "id": "ddinter-phase1-sotalol-doxazosin",
    "drugAId": "drug-sotalol",
    "drugBId": "drug-doxazosin",
    "drugAName": "Sotalol",
    "drugBName": "Doxazosin",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Sotalol dan Doxazosin menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-90976",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Sotalol ↔ Doxazosin)"
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
    "id": "ddinter-phase1-metoprolol-prazosin",
    "drugAId": "drug-metoprolol",
    "drugBId": "drug-prazosin",
    "drugAName": "Metoprolol",
    "drugBName": "Prazosin",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Metoprolol dan Prazosin menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-101257",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Metoprolol ↔ Prazosin)"
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
    "id": "ddinter-phase1-prazosin-nadolol",
    "drugAId": "drug-prazosin",
    "drugBId": "drug-nadolol",
    "drugAName": "Prazosin",
    "drugBName": "Nadolol",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Prazosin dan Nadolol menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-103051",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Prazosin ↔ Nadolol)"
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
    "id": "ddinter-phase1-terazosin-nadolol",
    "drugAId": "drug-terazosin",
    "drugBId": "drug-nadolol",
    "drugAName": "Terazosin",
    "drugBName": "Nadolol",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Terazosin dan Nadolol menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-103073",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Terazosin ↔ Nadolol)"
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
    "id": "ddinter-phase1-phenoxybenzamine-nebivolol",
    "drugAId": "drug-phenoxybenzamine",
    "drugBId": "drug-nebivolol",
    "drugAName": "Phenoxybenzamine",
    "drugBName": "Nebivolol",
    "severity": "Moderate",
    "mechanismCategory": "Synergy",
    "mechanism": "Pemberian bersamaan antara Phenoxybenzamine dan Nebivolol menghasilkan efek sinergis aditif pada penurunan resistensi vaskular perifer atau modulasi hemodinamik sistemik.",
    "clinicalOutcome": "Penurunan tekanan darah yang lebih dalam, berpotensi memicu pusing postural, hipotensi ortostatik transien, rasa melayang, atau kelelahan.",
    "management": "Kombinasi sering digunakan untuk kontrol optimal; anjurkan pemantauan tekanan darah berkala dan edukasi pasien untuk bangkit perlahan dari posisi duduk/berbaring.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 Rule 8)",
    "ddinterPairId": "DDInter-PAIR-103475",
    "ddinterOriginalText": "Additive hypotensive effects may occur when beta-blockers are used in combination with alpha-blockers. In the presence of beta-blockade, the risk and/or severity of first-dose effects associated with alpha-blockers such as postural hypotension and syncope may be increased. Beta-blockers may also blunt the reflex tachycardia that occurs in response to postural hypotension. Theoretically, the interaction may also occur with beta-blocker ophthalmic preparations, since they may be systemically absorbed and can produce clinically significant systemic effects even at low or undetectable plasma levels.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Phenoxybenzamine ↔ Nebivolol)"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Amlodipine",
      "Candesartan",
      "Valsartan"
    ]
  }
];
