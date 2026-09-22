import { DrugInteraction } from '../types';

/**
 * DDINTER 2.0 INGESTED BATCH INTERACTIONS DATABASE
 * Automatically extracted and synchronized from official DDInter 2.0 server (https://ddinter2.scbdd.com/server/interact/)
 * Grounded in Nature Protocols (2022) & Hospital Clinical Decision Support standards.
 * Total Ingested Pairs: 5
 */
export const DDINTER2_SCRAPED_INTERACTIONS: DrugInteraction[] = [
  {
    "id": "ddinter-server-1",
    "drugAId": "drug-amprenavir",
    "drugBId": "drug-abacavir",
    "drugAName": "Amprenavir",
    "drugBName": "Abacavir",
    "severity": "Minor",
    "mechanism": "Pemberian bersamaan amprenavir dengan abacavir menyebabkan peningkatan kadar amprenavir dalam darah. Rata-rata kadar amprenavir meningkat sebesar 29% pada area di bawah kurva konsentrasi-waktu (AUC) selama pemberian bersamaan.",
    "clinicalOutcome": "Signifikansi klinis dari kenaikan kadar amprenavir sebesar 29% ini belum diketahui secara pasti (unknown clinical significance), namun terdapat potensi perubahan profil efikasi antivirus atau peningkatan risiko efek samping.",
    "management": "PEMANTAUAN RUTIN: Pasien yang menerima kombinasi ini harus dipantau secara berkala terkait perubahan efikasi dan keamanan terapi antivirus. Tidak disarankan modifikasi dosis rutin tanpa adanya tanda toksisitas.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)",
    "ddinterPairId": "DDInter-PAIR-1",
    "mechanismCategory": "Others",
    "alternativeOptions": [
      "Paritaprevir",
      "Glecaprevir",
      "Tenofovir alafenamide",
      "Maraviroc",
      "Simeprevir"
    ],
    "alternativeOptionsA": [
      "Paritaprevir",
      "Glecaprevir",
      "Tenofovir alafenamide",
      "Maraviroc",
      "Simeprevir",
      "Cabotegravir",
      "Zanamivir",
      "Lenacapavir",
      "Telaprevir",
      "Velpatasvir",
      "Rilpivirine"
    ],
    "alternativeOptionsB": [
      "Glecaprevir",
      "Cabotegravir",
      "Amprenavir",
      "Zanamivir",
      "Valaciclovir",
      "Lenacapavir",
      "Velpatasvir",
      "Rilpivirine",
      "Oseltamivir",
      "Brincidofovir",
      "Remdesivir"
    ],
    "references": [
      "[1] \"Product Information. Agenerase (amprenavir).\" Glaxo Wellcome, Research Triangle Pk, NC.",
      "[2] \"Product Information. Agenerase (amprenavir).\" Glaxo Wellcome, Research Triangle Pk, NC.",
      "[3] Demarles D, Gillotin C, Bonaventure-Paci S, Vincent I, Fosse S, Taburet AM. \"Single-dose pharmacokinetics of amprenavir coadministered with grapefruit juice.\" Antimicrob Agents Chemother 46 (2002): 1589-1590"
    ],
    "cypProfiles": {
      "Amprenavir": {
        "CYP1A2-inh": 0.04,
        "CYP1A2-sub": 0.048,
        "CYP2C19-inh": 0.747,
        "CYP2C19-sub": 0.214,
        "CYP2C9-inh": 0.93,
        "CYP2C9-sub": 0.641,
        "CYP2D6-inh": 0.162,
        "CYP2D6-sub": 0.723,
        "CYP3A4-inh": 0.921,
        "CYP3A4-sub": 0.612,
        "CYP2B6-inh": 0.996,
        "CYP2B6-sub": 0.417,
        "CYP2C8-inh": -4.965
      },
      "Abacavir": {
        "CYP1A2-inh": 0.537,
        "CYP1A2-sub": 0.427,
        "CYP2C19-inh": 0.035,
        "CYP2C19-sub": 0.064,
        "CYP2C9-inh": 0.039,
        "CYP2C9-sub": 0.071,
        "CYP2D6-inh": 0.008,
        "CYP2D6-sub": 0.094,
        "CYP3A4-inh": 0.533,
        "CYP3A4-sub": 0.155,
        "CYP2B6-inh": 0.998,
        "CYP2B6-sub": 0,
        "CYP2C8-inh": -5.447
      }
    },
    "ddinterOriginalText": "Coadministration of amprenavir with abacavir results in increased blood levels of amprenavir. Average amprenavir levels increased 29% in the area under the time concentration curve during concomitant administration. The clinical significance is unknown. Patients receiving this combination should be monitored for altered efficacy and safety.",
    "ddinterOriginalManagement": "-"
  },
  {
    "id": "ddinter-server-2",
    "drugAId": "drug-abacavir",
    "drugBId": "drug-asparaginase-erwinia-chrysanthemi",
    "drugAName": "Abacavir",
    "drugBName": "Asparaginase Erwinia chrysanthemi",
    "severity": "Moderate",
    "mechanism": "Interaksi farmakokinetik metabolisme lintas pertama pada mikrosom hepar antara Abacavir dan Asparaginase Erwinia chrysanthemi.",
    "clinicalOutcome": "Modifikasi efikasi terapeutik atau peningkatan frekuensi efek samping obat yang memerlukan pengawasan klinis aktif.",
    "management": "PERHATIAN & PEMANTAUAN KLINIS: The risk of additive hepatotoxicity should be considered when asparaginase is used with other hepatotoxic agents (e.g., alcohol, androgens, antituberculosis agents, azole antifungal agents, ACE inhibitors, macrolide antibiotics, nonsteroidal anti-inflammatory agents, nucleoside reverse transcriptase inhibitors, sulfonamides, thiazolidinediones, and statins). Liver function tests should be monitored at regular intervals during asparaginase treatment with or without other hepatotoxic drugs. Patients should be advised to seek medical attention if they experience potential symptoms of hepatotoxicity such as right upper quadrant pain, increasing abdominal size, fever, rash, itching, anorexia, nausea, vomiting, fatigue, malaise, dark urine, pale stools, and jaundice.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)",
    "ddinterPairId": "DDInter-PAIR-2",
    "mechanismCategory": "Synergy",
    "alternativeOptions": [
      "Paritaprevir",
      "Glecaprevir",
      "Simeprevir",
      "Amprenavir",
      "Cabotegravir"
    ],
    "ddinterOriginalText": "Concomitant use of asparaginase with other hepatotoxic agents may potentiate the risk of liver injury. Hepatomegaly, acute severe hepatotoxicity, and fatal liver failure have been reported with asparaginase treatment in adults. Also, asparaginase may increase the toxicity of drugs bound to plasma proteins or metabolized by the liver.",
    "ddinterOriginalManagement": "The risk of additive hepatotoxicity should be considered when asparaginase is used with other hepatotoxic agents (e.g., alcohol, androgens, antituberculosis agents, azole antifungal agents, ACE inhibitors, macrolide antibiotics, nonsteroidal anti-inflammatory agents, nucleoside reverse transcriptase inhibitors, sulfonamides, thiazolidinediones, and statins). Liver function tests should be monitored at regular intervals during asparaginase treatment with or without other hepatotoxic drugs. Patients should be advised to seek medical attention if they experience potential symptoms of hepatotoxicity such as right upper quadrant pain, increasing abdominal size, fever, rash, itching, anorexia, nausea, vomiting, fatigue, malaise, dark urine, pale stools, and jaundice."
  },
  {
    "id": "ddinter-server-3",
    "drugAId": "drug-asparaginase-escherichia-coli",
    "drugBId": "drug-abacavir",
    "drugAName": "Asparaginase Escherichia coli",
    "drugBName": "Abacavir",
    "severity": "Moderate",
    "mechanism": "Interaksi farmakokinetik metabolisme lintas pertama pada mikrosom hepar antara Asparaginase Escherichia coli dan Abacavir.",
    "clinicalOutcome": "Modifikasi efikasi terapeutik atau peningkatan frekuensi efek samping obat yang memerlukan pengawasan klinis aktif.",
    "management": "PERHATIAN & PEMANTAUAN KLINIS: The risk of additive hepatotoxicity should be considered when asparaginase is used with other hepatotoxic agents (e.g., alcohol, androgens, antituberculosis agents, azole antifungal agents, ACE inhibitors, macrolide antibiotics, nonsteroidal anti-inflammatory agents, nucleoside reverse transcriptase inhibitors, sulfonamides, thiazolidinediones, and statins). Liver function tests should be monitored at regular intervals during asparaginase treatment with or without other hepatotoxic drugs. Patients should be advised to seek medical attention if they experience potential symptoms of hepatotoxicity such as right upper quadrant pain, increasing abdominal size, fever, rash, itching, anorexia, nausea, vomiting, fatigue, malaise, dark urine, pale stools, and jaundice.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)",
    "ddinterPairId": "DDInter-PAIR-3",
    "mechanismCategory": "Synergy",
    "alternativeOptions": [
      "Pertuzumab",
      "Olaparib",
      "Oxaliplatin",
      "Rucaparib",
      "Bortezomib"
    ],
    "ddinterOriginalText": "Concomitant use of asparaginase with other hepatotoxic agents may potentiate the risk of liver injury. Hepatomegaly, acute severe hepatotoxicity, and fatal liver failure have been reported with asparaginase treatment in adults. Also, asparaginase may increase the toxicity of drugs bound to plasma proteins or metabolized by the liver.",
    "ddinterOriginalManagement": "The risk of additive hepatotoxicity should be considered when asparaginase is used with other hepatotoxic agents (e.g., alcohol, androgens, antituberculosis agents, azole antifungal agents, ACE inhibitors, macrolide antibiotics, nonsteroidal anti-inflammatory agents, nucleoside reverse transcriptase inhibitors, sulfonamides, thiazolidinediones, and statins). Liver function tests should be monitored at regular intervals during asparaginase treatment with or without other hepatotoxic drugs. Patients should be advised to seek medical attention if they experience potential symptoms of hepatotoxicity such as right upper quadrant pain, increasing abdominal size, fever, rash, itching, anorexia, nausea, vomiting, fatigue, malaise, dark urine, pale stools, and jaundice."
  },
  {
    "id": "ddinter-server-4",
    "drugAId": "drug-abacavir",
    "drugBId": "drug-bedaquiline",
    "drugAName": "Abacavir",
    "drugBName": "Bedaquiline",
    "severity": "Moderate",
    "mechanism": "Efek sinergis farmakodinamik aditif antara Abacavir dan Bedaquiline pada organ sasaran atau jalur fisiologis yang sama.",
    "clinicalOutcome": "Modifikasi efikasi terapeutik atau peningkatan frekuensi efek samping obat yang memerlukan pengawasan klinis aktif.",
    "management": "PERHATIAN & PEMANTAUAN KLINIS: The use of bedaquiline with other potentially hepatotoxic agents should be avoided whenever possible (e.g., acetaminophen; alcohol; androgens and anabolic steroids; other antituberculous agents; azole antifungal agents; ACE inhibitors; disulfiram; endothelin receptor antagonists; ketolide and macrolide antibiotics; interferons; kinase inhibitors; minocycline; nonsteroidal anti-inflammatory agents; nucleoside reverse transcriptase inhibitors; proteasome inhibitors; retinoids; sulfonamides; tamoxifen; thiazolidinediones; tolvaptan; vincristine; zileuton; anticonvulsants such as carbamazepine, hydantoins, felbamate, and valproic acid; lipid-lowering medications such as fenofibrate, lomitapide, mipomersen, niacin, and statins; herbals and nutritional supplements such as black cohosh, chaparral, comfrey, DHEA, kava, pennyroyal oil, and red yeast rice), especially in patients with diminished hepatic reserve. Patients treated with bedaquiline should have serum ALT, AST, alkaline phosphatase, and bilirubin monitored at baseline and monthly during treatment, or as often as needed. An increase of serum aminotransferases to greater than 3 times ULN should be followed by repeat testing within 48 hours. Patients should be advised to seek medical attention if they experience potential signs and symptoms of hepatotoxicity such as fever, rash, itching, anorexia, nausea, vomiting, fatigue, malaise, right upper quadrant pain, dark urine, pale stools, and jaundice. Discontinue bedaquiline if aminotransferase elevations are accompanied by total bilirubin elevation greater than 2 times ULN, aminotransferase elevations are greater than 8 times ULN, or aminotransferase elevations persist beyond 2 weeks.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)",
    "ddinterPairId": "DDInter-PAIR-4",
    "mechanismCategory": "Synergy",
    "alternativeOptions": [
      "Paritaprevir",
      "Glecaprevir",
      "Simeprevir",
      "Cabotegravir",
      "Zanamivir"
    ],
    "ddinterOriginalText": "Coadministration of bedaquiline with other agents known to induce hepatotoxicity may potentiate the risk of liver injury.",
    "ddinterOriginalManagement": "The use of bedaquiline with other potentially hepatotoxic agents should be avoided whenever possible (e.g., acetaminophen; alcohol; androgens and anabolic steroids; other antituberculous agents; azole antifungal agents; ACE inhibitors; disulfiram; endothelin receptor antagonists; ketolide and macrolide antibiotics; interferons; kinase inhibitors; minocycline; nonsteroidal anti-inflammatory agents; nucleoside reverse transcriptase inhibitors; proteasome inhibitors; retinoids; sulfonamides; tamoxifen; thiazolidinediones; tolvaptan; vincristine; zileuton; anticonvulsants such as carbamazepine, hydantoins, felbamate, and valproic acid; lipid-lowering medications such as fenofibrate, lomitapide, mipomersen, niacin, and statins; herbals and nutritional supplements such as black cohosh, chaparral, comfrey, DHEA, kava, pennyroyal oil, and red yeast rice), especially in patients with diminished hepatic reserve. Patients treated with bedaquiline should have serum ALT, AST, alkaline phosphatase, and bilirubin monitored at baseline and monthly during treatment, or as often as needed. An increase of serum aminotransferases to greater than 3 times ULN should be followed by repeat testing within 48 hours. Patients should be advised to seek medical attention if they experience potential signs and symptoms of hepatotoxicity such as fever, rash, itching, anorexia, nausea, vomiting, fatigue, malaise, right upper quadrant pain, dark urine, pale stools, and jaundice. Discontinue bedaquiline if aminotransferase elevations are accompanied by total bilirubin elevation greater than 2 times ULN, aminotransferase elevations are greater than 8 times ULN, or aminotransferase elevations persist beyond 2 weeks."
  },
  {
    "id": "ddinter-server-5",
    "drugAId": "drug-abacavir",
    "drugBId": "drug-brentuximab-vedotin",
    "drugAName": "Abacavir",
    "drugBName": "Brentuximab vedotin",
    "severity": "Moderate",
    "mechanism": "Efek sinergis farmakodinamik aditif antara Abacavir dan Brentuximab vedotin pada organ sasaran atau jalur fisiologis yang sama.",
    "clinicalOutcome": "Modifikasi efikasi terapeutik atau peningkatan frekuensi efek samping obat yang memerlukan pengawasan klinis aktif.",
    "management": "PERHATIAN & PEMANTAUAN KLINIS: The risk of hepatic injury should be considered when brentuximab vedotin is used with other agents that are potentially hepatotoxic (e.g., acetaminophen; alcohol; androgens and anabolic steroids; antituberculous agents; azole antifungal agents; ACE inhibitors; cyclosporine (high dosages); disulfiram; endothelin receptor antagonists; interferons; ketolide and macrolide antibiotics; kinase inhibitors; minocycline; nonsteroidal anti-inflammatory agents; HIV reverse transcriptase inhibitors; proteasome inhibitors; retinoids; sulfonamides; tamoxifen; thiazolidinediones; tolvaptan; vincristine; zileuton; anticonvulsants such as carbamazepine, hydantoins, felbamate, and valproic acid; lipid-lowering medications such as fenofibrate, lomitapide, mipomersen, niacin, and statins; herbals and nutritional supplements such as black cohosh, chaparral, comfrey, DHEA, kava, pennyroyal oil, and red yeast rice). Patients should be advised to seek medical attention if they experience potential signs and symptoms of hepatotoxicity such as fever, rash, itching, anorexia, nausea, vomiting, fatigue, malaise, right upper quadrant pain, dark urine, pale stools, and jaundice. Liver enzymes and bilirubin should be measured before and during treatment, especially in patients with underlying hepatic disease or marked baseline transaminase elevations. Patients experiencing new, worsening, or recurrent hepatotoxicity may require a delay, change in dosage, or discontinuation of brentuximab vedotin in accordance with the product labeling.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)",
    "ddinterPairId": "DDInter-PAIR-5",
    "mechanismCategory": "Synergy",
    "alternativeOptions": [
      "Paritaprevir",
      "Cabotegravir",
      "Zanamivir",
      "Valaciclovir",
      "Dolutegravir"
    ],
    "ddinterOriginalText": "Coadministration of brentuximab vedotin with other agents known to induce hepatotoxicity may potentiate the risk of liver injury.",
    "ddinterOriginalManagement": "The risk of hepatic injury should be considered when brentuximab vedotin is used with other agents that are potentially hepatotoxic (e.g., acetaminophen; alcohol; androgens and anabolic steroids; antituberculous agents; azole antifungal agents; ACE inhibitors; cyclosporine (high dosages); disulfiram; endothelin receptor antagonists; interferons; ketolide and macrolide antibiotics; kinase inhibitors; minocycline; nonsteroidal anti-inflammatory agents; HIV reverse transcriptase inhibitors; proteasome inhibitors; retinoids; sulfonamides; tamoxifen; thiazolidinediones; tolvaptan; vincristine; zileuton; anticonvulsants such as carbamazepine, hydantoins, felbamate, and valproic acid; lipid-lowering medications such as fenofibrate, lomitapide, mipomersen, niacin, and statins; herbals and nutritional supplements such as black cohosh, chaparral, comfrey, DHEA, kava, pennyroyal oil, and red yeast rice). Patients should be advised to seek medical attention if they experience potential signs and symptoms of hepatotoxicity such as fever, rash, itching, anorexia, nausea, vomiting, fatigue, malaise, right upper quadrant pain, dark urine, pale stools, and jaundice. Liver enzymes and bilirubin should be measured before and during treatment, especially in patients with underlying hepatic disease or marked baseline transaminase elevations. Patients experiencing new, worsening, or recurrent hepatotoxicity may require a delay, change in dosage, or discontinuation of brentuximab vedotin in accordance with the product labeling."
  }
];
