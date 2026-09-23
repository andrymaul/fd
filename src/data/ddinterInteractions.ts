import { DrugInteraction } from '../types';
import { DDINTER_OFFICIAL_INTERACTIONS } from './ddinterOfficialInteractions';
import { DDINTER2_OFFICIAL_ADDITIONS } from './ddinter2OfficialAdditions';
import { DDINTER2_LIVE_INTERACTIONS } from './ddinter2LiveInteractionsData';
import { DDINTER2_BATCH_2026_ADDITIONS } from './ddinter2Batch2026Additions';
import { DDINTER2_COMPREHENSIVE_DDI } from './ddinter2ComprehensiveDdiData';
import { DDINTER2_BULK_ADDITIONS } from './ddinter2BulkAdditions';
import { DDINTER2_PHASE1_CHRONIC_ADDITIONS } from './ddinter2Phase1ChronicAdditions';
import { DDINTER2_PHASE2_INFECTION_ADDITIONS } from './ddinter2Phase2InfectionAdditions';
import { DDINTER2_PHASE3_CNS_ANALGESIC_ADDITIONS } from './ddinter2Phase3CnsAnalgesicAdditions';
import { DDINTER2_PHASE4_MINOR_ADDITIONS } from './ddinter2Phase4MinorAdditions';
import { DDINTER2_MODERATE_BATCH1_ADDITIONS } from './ddinter2ModerateBatch1Additions';
import { DDINTER2_MODERATE_BATCH2_ADDITIONS } from './ddinter2ModerateBatch2Additions';
import { DDINTER2_MODERATE_BATCH3_ADDITIONS } from './ddinter2ModerateBatch3Additions';
import { DDINTER2_SCRAPED_INTERACTIONS } from './ddinter2ScrapedInteractions';
import { deduplicateInteractions } from '../utils/ddinterEngine';

const BASE_EXTENDED_INTERACTIONS: DrugInteraction[] = [
  {
    "id": "ddi-pair-0001",
    "drugAId": "drug-warfarin",
    "drugBId": "drug-aspirin",
    "drugAName": "Warfarin",
    "drugBName": "Aspirin",
    "severity": "Major",
    "mechanism": "Kombinasi antikoagulasi sistemik (penghambatan sintesis faktor pembekuan) dengan antiagregasi platelet dan iritasi mukosa lambung oleh aspirin.",
    "clinicalOutcome": "Peningkatan drastis risiko perdarahan mayor, hematuria, perdarahan gastrointestinal masif, dan stroke hemoragik.",
    "management": "Hindari kombinasi kecuali pada indikasi kardiologi spesifik (misal katup mekanik + CAD). Jika diperlukan, gunakan aspirin dosis rendah (<=100 mg), pantau INR ketat, dan tambahkan Gastroprotectant PPI.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-34056",
    "mechanismCategory": "Synergy",
    "alternativeOptions": [
      "Paracetamol",
      "Celecoxib (short term + PPI)"
    ],
    "ddinterOriginalText": "Coadministration of warfarin and aspirin significantly increases the risk of major bleeding and gastrointestinal hemorrhage due to combined anticoagulant and antiplatelet effects.",
    "ddinterOriginalManagement": "Avoid combination unless strictly indicated for specific cardiovascular conditions (e.g. mechanical heart valves). If coadministration is necessary, use low-dose aspirin (<=100 mg daily), closely monitor INR, and add a gastroprotective PPI.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #749"
    ],
    "alternativeOptionsA": [
      "Apixaban",
      "Rivaroxaban",
      "Dabigatran"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddi-pair-0002",
    "drugAId": "drug-warfarin",
    "drugBId": "drug-ibuprofen",
    "drugAName": "Warfarin",
    "drugBName": "Ibuprofen",
    "severity": "Major",
    "mechanism": "Ibuprofen menghambat agregasi trombosit via COX-1, menginduksi erosi mukosa lambung, dan mendesak ikatan protein plasma warfarin serta menghambat metabolisme CYP2C9.",
    "clinicalOutcome": "Lonjakan nilai INR tidak terkontrol dan perdarahan saluran cerna bagian atas yang mengancam jiwa.",
    "management": "HINDARI penggunaan NSAID non-selektif bersama warfarin. Gunakan parasetamol sebagai alternatif analgesik antipiretik lini pertama.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-10470",
    "mechanismCategory": "Synergy",
    "alternativeOptions": [
      "Paracetamol",
      "Tramadol"
    ],
    "ddinterOriginalText": "Nonsteroidal anti-inflammatory drugs (NSAIDs) inhibit platelet aggregation and cause gastric mucosal ulceration, dramatically increasing bleeding risk in patients receiving warfarin.",
    "ddinterOriginalManagement": "Avoid concurrent use. Use paracetamol as the first-line analgesic/antipyretic. If an anti-inflammatory is mandatory, monitor INR frequently and consider gastroprotection.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2332"
    ],
    "alternativeOptionsA": [
      "Apixaban",
      "Rivaroxaban",
      "Dabigatran"
    ],
    "alternativeOptionsB": [
      "Paracetamol",
      "Tramadol",
      "Celecoxib",
      "Topical NSAID (Gel/Patch)"
    ]
  },
  {
    "id": "ddi-pair-0003",
    "drugAId": "drug-warfarin",
    "drugBId": "drug-ciprofloxacin",
    "drugAName": "Warfarin",
    "drugBName": "Ciprofloxacin",
    "severity": "Major",
    "mechanism": "Ciprofloxacin menghambat isoenzim CYP1A2 dan CYP3A4, serta mengganggu flora usus penghasil vitamin K endogen.",
    "clinicalOutcome": "Peningkatan drastis kadar bebas warfarin dan pemanjangan nilai INR (INR > 5.0), memicu perdarahan spontan.",
    "management": "Turunkan dosis warfarin 25-50% saat inisiasi ciprofloxacin dan periksa INR serial pada hari ke-3 dan ke-5.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-66381",
    "mechanismCategory": "Metabolism",
    "alternativeOptions": [
      "Amoxicillin-Clavulanate",
      "Cefuroxime"
    ],
    "ddinterOriginalText": "Ciprofloxacin inhibits CYP1A2 and CYP3A4 and disrupts intestinal microflora synthesizing vitamin K, significantly enhancing warfarin anticoagulant effect.",
    "ddinterOriginalManagement": "Reduce warfarin dose by 25-50% upon initiating ciprofloxacin and check serial INR on days 3 and 5.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #211"
    ],
    "alternativeOptionsA": [
      "Apixaban",
      "Rivaroxaban",
      "Dabigatran"
    ],
    "alternativeOptionsB": [
      "Azithromycin",
      "Cefixime",
      "Amoxicillin-Clavulanate",
      "Ceftriaxone"
    ]
  },
  {
    "id": "ddi-pair-0004",
    "drugAId": "drug-warfarin",
    "drugBId": "drug-fluconazole",
    "drugAName": "Warfarin",
    "drugBName": "Fluconazole",
    "severity": "Major",
    "mechanism": "Fluconazole adalah inhibitor poten isoenzim CYP2C9 yang memetabolisme S-warfarin (enansiomer warfarin 5 kali lebih poten).",
    "clinicalOutcome": "Peningkatan tajam kadar S-warfarin plasma dan lonjakan nilai INR hingga > 8.0, memicu perdarahan fatal spontan.",
    "management": "Turunkan dosis warfarin sebesar 50% saat memulai terapi fluconazole dan periksa nilai INR setiap 2-3 hari.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-122404",
    "mechanismCategory": "Metabolism",
    "alternativeOptions": [
      "Nystatin Topical",
      "Terbinafine"
    ],
    "ddinterOriginalText": "Fluconazole is a potent inhibitor of CYP2C9, the primary isoenzyme responsible for the metabolism of S-warfarin, causing severe elevations in prothrombin time and INR.",
    "ddinterOriginalManagement": "Reduce warfarin dose by 50% when initiating fluconazole and monitor INR every 2 to 3 days until stable.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4651"
    ],
    "alternativeOptionsA": [
      "Apixaban",
      "Rivaroxaban",
      "Dabigatran"
    ],
    "alternativeOptionsB": [
      "Terbinafine",
      "Nystatin",
      "Micafungin"
    ]
  },
  {
    "id": "ddi-pair-0005",
    "drugAId": "drug-warfarin",
    "drugBId": "drug-amiodarone",
    "drugAName": "Warfarin",
    "drugBName": "Amiodarone",
    "severity": "Major",
    "mechanism": "Amiodarone menghambat isoenzim CYP2C9 dan CYP3A4 serta klirens warfarin metabolik.",
    "clinicalOutcome": "Perpanjangan nilai INR yang signifikan (100-200% peningkatan efek antikoagulan) dan perdarahan mayor.",
    "management": "TURUNKAN dosis warfarin sebesar 30-50% saat memulai amiodarone. Pantau INR setiap minggu selama 4-6 minggu pertama.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-21901",
    "mechanismCategory": "Metabolism",
    "alternativeOptions": [
      "Dronedarone",
      "Beta-blocker"
    ],
    "ddinterOriginalText": "Amiodarone inhibits CYP2C9 and CYP3A4, causing profound, prolonged enhancement of warfarin anticoagulant effect.",
    "ddinterOriginalManagement": "Decrease warfarin dose by 30-50% when starting amiodarone. Monitor INR weekly for the first 4-6 weeks due to the long elimination half-life of amiodarone.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2857"
    ],
    "alternativeOptionsA": [
      "Apixaban",
      "Rivaroxaban",
      "Dabigatran"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddi-pair-0006",
    "drugAId": "drug-warfarin",
    "drugBId": "drug-rifampicin",
    "drugAName": "Warfarin",
    "drugBName": "Rifampicin",
    "severity": "Major",
    "mechanism": "Rifampicin adalah induktor sangat kuat enzim CYP2C9, CYP3A4, dan CYP1A2 di hepar.",
    "clinicalOutcome": "Klirens warfarin meningkat drastis, menyebabkan penurunan nilai INR ke tingkat subterapeutik dan memicu kegagalan antikoagulasi (stroke/trombosis rekuren).",
    "management": "Dosis warfarin sering kali harus dinaikkan 2 hingga 3 kali lipat selama terapi rifampisin. Pantau INR 2 kali seminggu.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-110005",
    "mechanismCategory": "Metabolism",
    "alternativeOptions": [
      "Ethambutol + Levofloxacin",
      "Rifabutin (with monitoring)"
    ],
    "ddinterOriginalText": "Rifampin is a potent inducer of hepatic CYP2C9, CYP3A4, and CYP1A2 enzymes, markedly enhancing warfarin clearance.",
    "ddinterOriginalManagement": "Warfarin dosage often needs to be increased two- to three-fold during concurrent rifampin therapy. Monitor INR twice weekly.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #5546"
    ],
    "alternativeOptionsA": [
      "Apixaban",
      "Rivaroxaban",
      "Dabigatran"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddi-pair-0007",
    "drugAId": "drug-warfarin",
    "drugBId": "drug-metronidazole",
    "drugAName": "Warfarin",
    "drugBName": "Metronidazole",
    "severity": "Major",
    "mechanism": "Metronidazole menghambat secara selektif metabolisme S-warfarin melalui enzim CYP2C9.",
    "clinicalOutcome": "Kadar S-warfarin melonjak tajam memicu perpanjangan waktu protrombin (INR > 6.0) dan perdarahan spontan.",
    "management": "Turunkan dosis warfarin sebesar 30-50% saat inisiasi metronidazole dan periksa INR serial.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-44845",
    "mechanismCategory": "Metabolism",
    "alternativeOptions": [
      "Amoxicillin",
      "Doxycycline"
    ],
    "ddinterOriginalText": "Metronidazole selectively inhibits the S-enantiomer metabolism of warfarin mediated by CYP2C9, significantly prolonging prothrombin time.",
    "ddinterOriginalManagement": "Decrease warfarin dose by 30-50% upon initiating metronidazole and monitor INR closely.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2820"
    ],
    "alternativeOptionsA": [
      "Apixaban",
      "Rivaroxaban",
      "Dabigatran"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddi-pair-0008",
    "drugAId": "drug-warfarin",
    "drugBId": "drug-levothyroxine",
    "drugAName": "Warfarin",
    "drugBName": "Levothyroxine",
    "severity": "Moderate",
    "mechanism": "Hormon tiroid meningkatkan laju katabolisme faktor pembekuan darah dependen-vitamin K.",
    "clinicalOutcome": "Potensiasi efek antikoagulan warfarin dan peningkatan nilai INR saat inisiasi hormon tiroid.",
    "management": "Pantau ketat nilai INR saat memulai atau mengubah dosis levothyroxine, sesuaikan dosis warfarin jika perlu.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-100196",
    "mechanismCategory": "Metabolism",
    "alternativeOptions": [
      "Careful TDM Monitoring"
    ],
    "ddinterOriginalText": "Thyroid hormones increase the catabolism of vitamin K-dependent clotting factors, potentiating the anticoagulant effect of warfarin.",
    "ddinterOriginalManagement": "Closely monitor INR when starting or changing levothyroxine dosage; adjust warfarin dose accordingly.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2506"
    ],
    "alternativeOptionsA": [
      "Apixaban",
      "Rivaroxaban",
      "Dabigatran"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddi-pair-0009",
    "drugAId": "drug-clopidogrel",
    "drugBId": "drug-omeprazole",
    "drugAName": "Clopidogrel",
    "drugBName": "Omeprazole",
    "severity": "Major",
    "mechanism": "Omeprazole adalah inhibitor poten isoenzim CYP2C19, enzim hepatik yang bertanggung jawab mengubah prodrug clopidogrel menjadi metabolit aktifnya.",
    "clinicalOutcome": "Penurunan efikasi antiplatelet clopidogrel hingga 45%, meningkatkan risiko trombosis stent koroner dan infark miokard berulang.",
    "management": "Ganti omeprazole dengan PPI yang tidak menghambat CYP2C19 secara signifikan seperti Pantoprazole atau Rabeprazole.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-34095",
    "mechanismCategory": "Metabolism",
    "alternativeOptions": [
      "Pantoprazole",
      "Rabeprazole",
      "Famotidine"
    ],
    "ddinterOriginalText": "Omeprazole inhibits CYP2C19, the cytochrome P450 isoenzyme responsible for converting clopidogrel to its active metabolite, decreasing antiplatelet activity.",
    "ddinterOriginalManagement": "Avoid coadministration. If acid-reducing therapy is required during clopidogrel treatment, use pantoprazole, rabeprazole, or an H2-receptor antagonist such as famotidine.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3363"
    ],
    "alternativeOptionsA": [
      "Ticagrelor",
      "Cilostazol"
    ],
    "alternativeOptionsB": [
      "Pantoprazole",
      "Rabeprazole",
      "Famotidine",
      "Rebamipide"
    ]
  },
  {
    "id": "ddi-pair-0010",
    "drugAId": "drug-clopidogrel",
    "drugBId": "drug-aspirin",
    "drugAName": "Clopidogrel",
    "drugBName": "Aspirin",
    "severity": "Moderate",
    "mechanism": "Dual Antiplatelet Therapy (DAPT): Penghambatan sinergis jalur agregasi trombosit ADP (P2Y12) dan tromboksan A2 (COX-1).",
    "clinicalOutcome": "Peningkatan risiko perdarahan saluran cerna dan hematoma. Sinergis memberikan proteksi stent koroner pasca-PCI/SKA.",
    "management": "Kombinasi lini utama terarah pedoman (AHA/ACC DAPT). Gunakan sesuai durasi panduan klinis (misal 1-12 bulan pasca-PCI/SKA). Pantau tanda perdarahan dan pertimbangkan gastroprotektor PPI (Pantoprazole) pada pasien risiko tinggi.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-33815",
    "mechanismCategory": "Synergy",
    "alternativeOptions": [
      "Monotherapy P2Y12 after recommended DAPT duration"
    ],
    "ddinterOriginalText": "Dual Antiplatelet Therapy (DAPT): Concurrent administration of clopidogrel and aspirin produces additive platelet inhibition and increased gastrointestinal bleeding risk.",
    "ddinterOriginalManagement": "Guideline-directed therapy post-PCI/ACS. Use according to guideline duration (1-12 months). Monitor bleeding signs and consider gastroprotection with pantoprazole.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2810"
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
    "id": "ddi-pair-0011",
    "drugAId": "drug-clopidogrel",
    "drugBId": "drug-fluconazole",
    "drugAName": "Clopidogrel",
    "drugBName": "Fluconazole",
    "severity": "Major",
    "mechanism": "Fluconazole menghambat enzim bioaktivasi CYP2C19 di hati.",
    "clinicalOutcome": "Pembentukan metabolit aktif clopidogrel terhambat sehingga efektivitas antiplatelet menurun tajam.",
    "management": "Ganti antijamur dengan opsi lain atau pertimbangkan antiplatelet alternatif (misal Ticagrelor).",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-71657",
    "mechanismCategory": "Metabolism",
    "alternativeOptions": [
      "Terbinafine",
      "Ticagrelor"
    ],
    "ddinterOriginalText": "Fluconazole inhibits CYP2C19 bioactivation of clopidogrel, diminishing its antiplatelet efficacy.",
    "ddinterOriginalManagement": "Consider alternative antifungal therapy or use an alternative antiplatelet agent like ticagrelor.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3659"
    ],
    "alternativeOptionsA": [
      "Ticagrelor",
      "Cilostazol"
    ],
    "alternativeOptionsB": [
      "Terbinafine",
      "Nystatin",
      "Micafungin"
    ]
  },
  {
    "id": "ddi-pair-0012",
    "drugAId": "drug-ticagrelor",
    "drugBId": "drug-clarithromycin",
    "drugAName": "Ticagrelor",
    "drugBName": "Clarithromycin",
    "severity": "Major",
    "mechanism": "Clarithromycin adalah inhibitor kuat CYP3A4 yang merupakan jalur eliminasi utama ticagrelor.",
    "clinicalOutcome": "Kadar ticagrelor darah melonjak tajam (AUC meningkat >5 kali lipat), memicu risiko perdarahan spontan masif.",
    "management": "KONTRAINDIKASI BERSAMAAN. Hindari inhibitor CYP3A4 kuat selama terapi ticagrelor.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-68112",
    "mechanismCategory": "Metabolism",
    "alternativeOptions": [
      "Azithromycin",
      "Cefixime"
    ],
    "ddinterOriginalText": "Clarithromycin is a strong CYP3A4 inhibitor that markedly increases ticagrelor serum concentrations and bleeding risk.",
    "ddinterOriginalManagement": "Concomitant use is contraindicated or strongly not recommended. Use alternative antimicrobial agents that do not inhibit CYP3A4.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3294"
    ],
    "alternativeOptionsA": [
      "Clopidogrel",
      "Cilostazol"
    ],
    "alternativeOptionsB": [
      "Azithromycin",
      "Cefixime",
      "Amoxicillin-Clavulanate"
    ]
  },
  {
    "id": "ddi-pair-0013",
    "drugAId": "drug-rivaroxaban",
    "drugBId": "drug-clarithromycin",
    "drugAName": "Rivaroxaban",
    "drugBName": "Clarithromycin",
    "severity": "Moderate",
    "mechanism": "Inhibisi ganda transporter efflux P-glikoprotein dan enzim CYP3A4 oleh clarithromycin.",
    "clinicalOutcome": "Peningkatan konsentrasi plasma rivaroxaban hingga 2.5 kali lipat dan peningkatan risiko perdarahan mayor.",
    "management": "Hindari penggunaan bersamaan pada pasien dengan gangguan fungsi ginjal (CrCl < 80 mL/min).",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-68054",
    "mechanismCategory": "Metabolism",
    "alternativeOptions": [
      "Azithromycin",
      "Amoxicillin"
    ],
    "ddinterOriginalText": "Strong CYP3A4 and P-gp inhibitors such as clarithromycin increase rivaroxaban exposure and hemorrhage risk.",
    "ddinterOriginalManagement": "Avoid concurrent use of rivaroxaban with strong dual inhibitors of CYP3A4 and P-glycoprotein.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4806"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Azithromycin",
      "Cefixime",
      "Amoxicillin-Clavulanate"
    ]
  },
  {
    "id": "ddi-pair-0014",
    "drugAId": "drug-apixaban",
    "drugBId": "drug-rifampicin",
    "drugAName": "Apixaban",
    "drugBName": "Rifampicin",
    "severity": "Major",
    "mechanism": "Induksi ganda kuat enzim CYP3A4 dan P-gp oleh rifampisin menurunkan AUC apixaban sebesar 54%.",
    "clinicalOutcome": "Kadar antikoagulan subterapeutik, melipatgandakan risiko stroke emboli dan trombosis vena dalam.",
    "management": "HINDARI kombinasi bersamaan. Pertimbangkan antikoagulan alternatif parenteral jika rifampisin mutlak diperlukan.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-28093",
    "mechanismCategory": "Metabolism",
    "alternativeOptions": [
      "Enoxaparin",
      "Warfarin (with dose titrations)"
    ],
    "ddinterOriginalText": "Rifampin is a potent inducer of CYP3A4 and P-gp, significantly decreasing apixaban plasma concentrations.",
    "ddinterOriginalManagement": "Avoid concomitant use as it may lead to loss of efficacy and increased risk of thromboembolism.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #353"
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
    "id": "ddi-pair-0015",
    "drugAId": "drug-dabigatran",
    "drugBId": "drug-verapamil",
    "drugAName": "Dabigatran",
    "drugBName": "Verapamil",
    "severity": "Major",
    "mechanism": "Verapamil menghambat transporter P-glikoprotein di usus yang meregulasi penyerapan dabigatran etexilate.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dabigatran hingga 70-100%, meningkatkan risiko komplikasi perdarahan.",
    "management": "Turunkan dosis dabigatran menjadi 110 mg 2 kali sehari dan berikan dabigatran minimal 2 jam SEBELUM verapamil.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-000015",
    "mechanismCategory": "Excretion",
    "alternativeOptions": [
      "Amlodipine",
      "Diltiazem"
    ],
    "ddinterOriginalText": "Verapamil is a P-glycoprotein inhibitor that increases dabigatran bioavailability and AUC by up to 60%.",
    "ddinterOriginalManagement": "Reduce dabigatran dose to 110 mg twice daily when given with verapamil in patients with normal renal function; avoid in moderate-to-severe renal impairment."
  },
  {
    "id": "ddi-pair-0016",
    "drugAId": "drug-simvastatin",
    "drugBId": "drug-gemfibrozil",
    "drugAName": "Simvastatin",
    "drugBName": "Gemfibrozil",
    "severity": "Major",
    "mechanism": "Gemfibrozil menghambat glukuronidasi asam simvastatin dan menghambat transporter OATP1B1 pada membran hepatosit.",
    "clinicalOutcome": "Peningkatan kadar plasma asam simvastatin hingga 3-5 kali lipat, memicu Rabdomiolisis akut, mioglobinuria, dan gagal ginjal akut.",
    "management": "KONTRAINDIKASI MUTLAK. Jangan mengombinasikan simvastatin dengan gemfibrozil. Jika membutuhkan fibrat, gunakan Fenofibrate dengan dosis statin terendah.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-166128",
    "mechanismCategory": "Metabolism",
    "alternativeOptions": [
      "Fenofibrate",
      "Ezetimibe"
    ],
    "ddinterOriginalText": "Gemfibrozil inhibits the glucuronidation and OATP1B1 hepatic uptake of statins, markedly increasing simvastatin acid plasma concentrations and myopathy risk.",
    "ddinterOriginalManagement": "Concomitant use is contraindicated. If fibrate therapy is required in a patient taking a statin, fenofibrate is preferred with cautious dosing.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1537"
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
    "id": "ddi-pair-0017",
    "drugAId": "drug-simvastatin",
    "drugBId": "drug-clarithromycin",
    "drugAName": "Simvastatin",
    "drugBName": "Clarithromycin",
    "severity": "Major",
    "mechanism": "Clarithromycin adalah inhibitor poten CYP3A4 yang memblokade total metabolisme fase 1 simvastatin.",
    "clinicalOutcome": "Kadar simvastatin plasma melonjak hingga 10-12 kali lipat memicu Rabdomiolisis berat, gagal ginjal akut, dan kematian.",
    "management": "KONTRAINDIKASI MUTLAK. Hentikan sementara simvastatin selama terapi antibiotik clarithromycin.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-68073",
    "mechanismCategory": "Metabolism",
    "alternativeOptions": [
      "Azithromycin",
      "Rosuvastatin",
      "Pravastatin"
    ],
    "ddinterOriginalText": "Clarithromycin strongly inhibits CYP3A4, leading to profound accumulation of simvastatin and precipitating acute rhabdomyolysis and renal failure.",
    "ddinterOriginalManagement": "Concomitant use is contraindicated. Temporarily suspend simvastatin therapy during short-course clarithromycin, or switch to azithromycin.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2085"
    ],
    "alternativeOptionsA": [
      "Rosuvastatin",
      "Pravastatin",
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
    "id": "ddi-pair-0018",
    "drugAId": "drug-simvastatin",
    "drugBId": "drug-amiodarone",
    "drugAName": "Simvastatin",
    "drugBName": "Amiodarone",
    "severity": "Major",
    "mechanism": "Amiodarone menghambat metabolisme hepatik simvastatin melalui isoenzim sitokrom P450 CYP3A4.",
    "clinicalOutcome": "Akumulasi simvastatin dalam sirkulasi darah yang memicu miopati berat dan kerusakan otot rangka skeletal (rhabdomyolysis).",
    "management": "Batasi dosis simvastatin maksimal 20 mg/hari jika dikombinasikan dengan amiodarone, atau ganti dengan statin non-CYP3A4 (Rosuvastatin/Pravastatin).",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-21807",
    "mechanismCategory": "Metabolism",
    "alternativeOptions": [
      "Pravastatin",
      "Rosuvastatin"
    ],
    "ddinterOriginalText": "Amiodarone inhibits CYP3A4-mediated metabolism of simvastatin, increasing the risk of myopathy and rhabdomyolysis.",
    "ddinterOriginalManagement": "Simvastatin dose should not exceed 20 mg daily when combined with amiodarone. Consider switching to pravastatin or rosuvastatin.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #58"
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
    "id": "ddi-pair-0019",
    "drugAId": "drug-simvastatin",
    "drugBId": "drug-amlodipine",
    "drugAName": "Simvastatin",
    "drugBName": "Amlodipine",
    "severity": "Major",
    "mechanism": "Amlodipine menghambat aktivitas enzim CYP3A4 di hati dan usus halus, meningkatkan AUC simvastatin sekitar 77%.",
    "clinicalOutcome": "Peningkatan risiko mialgia, kram otot, dan peningkatan serum kreatin kinase.",
    "management": "Dosis simvastatin TIDAK BOLEH melebihi 20 mg/hari jika diberikan bersama amlodipine.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-23137",
    "mechanismCategory": "Metabolism",
    "alternativeOptions": [
      "Fluvastatin",
      "Pravastatin",
      "Rosuvastatin"
    ],
    "alternativeOptionsA": [
      "Fluvastatin (Non-CYP3A4)",
      "Pravastatin (Non-CYP3A4)",
      "Rosuvastatin (Non-CYP3A4)",
      "Pitavastatin",
      "Ezetimibe",
      "Fenofibric acid",
      "Alirocumab"
    ],
    "alternativeOptionsB": [
      "Candesartan (C09CA)",
      "Valsartan (C09CA)",
      "Olmesartan (C09CA)",
      "Nebivolol (C07AB)",
      "Clevidipine (C08CA)",
      "Bisoprolol (C07AB)"
    ],
    "references": [
      "[1] Product Information. Zocor (simvastatin). Merck & Co, Inc, West Point, PA.",
      "[2] Richter WO, Jacob BG, Schwandt P. Interaction between fibrate and lovastatin. Lancet 338 (1991): 706.",
      "[3] Neuvonen PJ, Backman JT, Niemi M. Pharmacokinetic comparison of the potential over-the-counter statins simvastatin, lovastatin, fluvastatin and pravastatin. Clin Pharmacokinet 47 (2008): 463-74.",
      "[4] Lilja JJ, Kivistö KT, Neuvonen PJ. Grapefruit juice-simvastatin interaction: Effect on serum concentrations of simvastatin, simvastatin acid, and HMG-CoA reductase inhibitors. Clin Pharmacol Ther 64 (1998): 477-83.",
      "[5] Product Information. Mevacor (lovastatin). Merck & Co, Inc, West Point, PA.",
      "[6] Thompson PD, Clarkson P, Karas RH. Statin-associated myopathy. JAMA 289 (2003): 1681-90.",
      "[7] Product Information. Zocor (simvastatin). Merck & Co, Inc, West Point, PA.",
      "[8] Kantola T, Kivistö KT, Neuvonen PJ. Grapefruit juice greatly increases serum concentrations of lovastatin and lovastatin acid. Clin Pharmacol Ther 63 (1998): 397-402.",
      "[9] Bailey DG, Malcolm J, Arnold O, Spence JD. Grapefruit juice-drug interactions. Br J Clin Pharmacol 46 (1998): 101-10."
    ],
    "ddinterOriginalText": "Coadministration with amlodipine may significantly increase the plasma concentrations of simvastatin and its active metabolite, simvastatin acid, and potentiate the risk of statin-induced myopathy. The proposed mechanism is amlodipine inhibition of simvastatin metabolism via intestinal and hepatic CYP450 3A4.",
    "ddinterOriginalManagement": "Simvastatin dosage should not exceed 20 mg daily when used in combination with amlodipine. The benefits of this combination should be carefully weighed against the potentially increased risk of myopathy including rhabdomyolysis. Fluvastatin, pravastatin, and rosuvastatin are probably safer alternatives in patients receiving amlodipine, since they are not metabolized by CYP450 3A4. All patients receiving statin therapy should be advised to promptly report any unexplained muscle pain, tenderness or weakness, particularly if accompanied by fever, malaise and/or dark colored urine. Therapy should be discontinued if creatine kinase is markedly elevated in the absence of strenuous exercise or if myopathy is otherwise suspected or diagnosed."
  },
  {
    "id": "ddi-pair-0020",
    "drugAId": "drug-atorvastatin",
    "drugBId": "drug-clarithromycin",
    "drugAName": "Atorvastatin",
    "drugBName": "Clarithromycin",
    "severity": "Major",
    "mechanism": "Inhibisi poten metabolisme CYP3A4 atorvastatin oleh clarithromycin.",
    "clinicalOutcome": "Peningkatan AUC atorvastatin hingga 4.5 kali lipat dengan risiko tinggi miopati dan rhabdomyolysis.",
    "management": "Batasi dosis atorvastatin maksimal 20 mg/hari jika harus digunakan bersama clarithromycin.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-23201",
    "mechanismCategory": "Metabolism",
    "alternativeOptions": [
      "Azithromycin",
      "Pravastatin",
      "Rosuvastatin"
    ],
    "ddinterOriginalText": "Clarithromycin inhibits CYP3A4 metabolism of atorvastatin, increasing atorvastatin AUC and the risk of myopathy and rhabdomyolysis.",
    "ddinterOriginalManagement": "Limit atorvastatin dosage to 20 mg daily when used with clarithromycin, or temporarily withhold statin therapy during antibiotic course.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #401"
    ],
    "alternativeOptionsA": [
      "Rosuvastatin",
      "Pravastatin",
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
    "id": "ddi-pair-0021",
    "drugAId": "drug-atorvastatin",
    "drugBId": "drug-gemfibrozil",
    "drugAName": "Atorvastatin",
    "drugBName": "Gemfibrozil",
    "severity": "Major",
    "mechanism": "Gemfibrozil menghambat transporter ambilan hepatik OATP1B1 dan glukuronidasi atorvastatin.",
    "clinicalOutcome": "Peningkatan kadar atorvastatin serum hingga 3 kali lipat, memicu mialgia berat dan rhabdomyolysis.",
    "management": "Hindari kombinasi jika memungkinkan. Jika memerlukan fibrat, gunakan Fenofibrate.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-15865",
    "mechanismCategory": "Metabolism",
    "alternativeOptions": [
      "Fenofibrate",
      "Ezetimibe"
    ],
    "ddinterOriginalText": "Gemfibrozil significantly increases serum concentrations of atorvastatin and substantially raises the risk of severe myopathy and rhabdomyolysis.",
    "ddinterOriginalManagement": "Avoid concurrent use. If combined therapy is necessary, use the lowest effective statin dose and choose fenofibrate over gemfibrozil.",
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
    "id": "ddi-pair-0022",
    "drugAId": "drug-rosuvastatin",
    "drugBId": "drug-cyclosporine",
    "drugAName": "Rosuvastatin",
    "drugBName": "Cyclosporine",
    "severity": "Major",
    "mechanism": "Cyclosporine menghambat transporter efflux BCRP dan transporter uptake OATP1B1 di hepar.",
    "clinicalOutcome": "Peningkatan kadar plasma rosuvastatin sebesar 7.1 kali lipat (AUC meningkat 700%), memicu miopati dan rhabdomyolysis masif.",
    "management": "Dosis rosuvastatin TIDAK BOLEH melebihi 5 mg sekali sehari pada pasien yang mengonsumsi cyclosporine.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-77204",
    "mechanismCategory": "Metabolism",
    "alternativeOptions": [
      "Pravastatin",
      "Fluconazole monitoring"
    ],
    "ddinterOriginalText": "Cyclosporine inhibits OATP1B1 and BCRP hepatic transport of rosuvastatin, increasing rosuvastatin exposure by up to 7-fold.",
    "ddinterOriginalManagement": "Rosuvastatin dosage should be capped at 5 mg once daily when coadministered with cyclosporine.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3696"
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
    "id": "ddi-pair-0023",
    "drugAId": "drug-spironolactone",
    "drugBId": "drug-captopril",
    "drugAName": "Spironolactone",
    "drugBName": "Captopril",
    "severity": "Major",
    "mechanism": "Penghambatan ganda aksis Renin-Angiotensin-Aldosteron (RAAS): penghambat ACE (Captopril) menurunkan sekresi aldosteron adrenal dan Spironolactone memblokade reseptor aldosteron mineralokortikoid di tubulus distal ginjal, secara sinergis menahan ekskresi ion kalium.",
    "clinicalOutcome": "Risiko Hiperkalemia Berat Mengancam Jiwa (K+ > 5.5 - 6.0 mEq/L, aritmia ventrikel fatal, henti jantung mendadak) serta kemunduran fungsi ginjal akut (peningkatan kreatinin serum/ureum), terutama pada pasien lansia, diabetes, atau gagal jantung dekompensasi.",
    "management": "PERINGATAN KETAT / PEMANTAUAN INTENSIF: Meskipun kombinasi ini merupakan terapi terarah pedoman (GDMT) untuk gagal jantung HFrEF guna menurunkan mortalitas, DDInter 2.0 menetapkannya sebagai interaksi Major karena potensi bahaya hiperkalemia fatal. Wajib periksa kadar kalium serum dan fungsi ginjal secara teratur (baseline, minggu ke-1, bulan ke-1, lalu tiap 3-6 bulan). Batasi dosis Spironolactone (maksimal 25-50 mg/hari pada gagal jantung), hindari suplemen kalium eksogen dan pengganti garam tinggi kalium, serta edukasi pasien mengenali gejala hiperkalemia (kelemahan otot, kesemutan, palpitasi).",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)",
    "ddinterPairId": "DDInter-PAIR-56071",
    "mechanismCategory": "Synergy",
    "alternativeOptions": [
      "Furosemide",
      "Amlodipine"
    ],
    "ddinterOriginalText": "Concomitant use of angiotensin converting enzyme (ACE) inhibitors and potassium-sparing diuretics may increase the risk of hyperkalemia. Inhibition of ACE results in decreased aldosterone secretion, which can lead to increases in serum potassium that may be additive with that induced by potassium-sparing diuretics. ACE inhibitors may also cause deterioration of renal function in patients with chronic heart failure, and the risk is increased if they are sodium-depleted or dehydrated after excessive diuresis.",
    "ddinterOriginalManagement": "Caution is advised if ACE inhibitors are used with potassium sparing diuretics, particularly in patients with renal impairment, diabetes, old age, worsening heart failure, and/or a risk for dehydration. Serum potassium and renal function should be checked regularly, and potassium supplementation should generally be avoided unless it is closely monitored. Patients should be given dietary advice regarding avoid and advised to seek medical attention if they experience signs and symptoms of hyperkalemia such as weakness, listlessness, confusion, tinging of the extremities, and irregular heartbeat.",
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
    "id": "ddi-pair-0024",
    "drugAId": "drug-spironolactone",
    "drugBId": "drug-losartan",
    "drugAName": "Spironolactone",
    "drugBName": "Losartan",
    "severity": "Major",
    "mechanism": "Blokade ganda jalur renin-angiotensin-aldosteron (antagonis reseptor AT1 + antagonis aldosteron) mengurangi ekskresi kalium ginjal secara sinergis.",
    "clinicalOutcome": "Risiko hiperkalemia berat mengancam jiwa dan penurunan akut laju filtrasi glomerulus (eGFR) serta hipotensi.",
    "management": "PERINGATAN KETAT: Periksa kadar kalium serum dan kreatinin secara berkala (baseline, minggu ke-1, bulan ke-1). Batasi dosis spironolakton <=25 mg/hari pada gagal jantung, dan instruksikan pasien menghindari asupan suplemen kalium atau garam diet tinggi kalium.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)",
    "ddinterPairId": "DDInter-PAIR-59306",
    "mechanismCategory": "Synergy",
    "alternativeOptions": [
      "Furosemide",
      "Amlodipine"
    ],
    "ddinterOriginalText": "Concurrent administration of ARBs and aldosterone antagonists significantly increases the risk of severe hyperkalemia.",
    "ddinterOriginalManagement": "Closely monitor serum potassium and renal function. Avoid potassium supplements and high-potassium salt substitutes.",
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
    "id": "ddi-pair-0025",
    "drugAId": "drug-captopril",
    "drugBId": "drug-losartan",
    "drugAName": "Captopril",
    "drugBName": "Losartan",
    "severity": "Major",
    "mechanism": "Dual blockade sistem RAAS (kombinasi ACE Inhibitor dengan ARB).",
    "clinicalOutcome": "Tidak memberikan manfaat klinis tambahan, namun melipatgandakan risiko hipotensi berat, hiperkalemia, dan gagal ginjal akut.",
    "management": "HINDARI kombinasi rutin ACEi + ARB (Rekomendasi pedoman klinis ESC/AHA/KDIGO).",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-55958",
    "mechanismCategory": "Synergy",
    "alternativeOptions": [
      "Amlodipine",
      "Chlorthalidone"
    ],
    "ddinterOriginalText": "Dual renin-angiotensin system (RAS) blockade with an ACE inhibitor and an ARB increases hypotension, hyperkalemia, and acute renal impairment risk.",
    "ddinterOriginalManagement": "Dual RAS blockade is generally not recommended by ACC/AHA and ESC guidelines. Use monotherapy with an ACEI or ARB.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1784"
    ],
    "alternativeOptionsA": [
      "Candesartan",
      "Valsartan",
      "Telmisartan",
      "Amlodipine"
    ],
    "alternativeOptionsB": [
      "Amlodipine",
      "Bisoprolol",
      "Diltiazem"
    ]
  },
  {
    "id": "ddi-pair-0026",
    "drugAId": "drug-bisoprolol",
    "drugBId": "drug-diltiazem",
    "drugAName": "Bisoprolol",
    "drugBName": "Diltiazem",
    "severity": "Major",
    "mechanism": "Efek inotropik, kronotropik, dan dromotropik negatif aditif pada nodus SA dan AV jantung.",
    "clinicalOutcome": "Bradikardia simtomatik berat, henti sinus (sinus arrest), AV block derajat 3, dan eksaserbasi gagal jantung akut.",
    "management": "Gunakan dengan sangat hati-hati di bawah pengawasan dokter spesialis kardiologi. Rekam EKG dan monitor laju nadi berkala.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-44928",
    "mechanismCategory": "Synergy",
    "alternativeOptions": [
      "Amlodipine",
      "Felodipine"
    ],
    "ddinterOriginalText": "Combined beta-blocker and non-dihydropyridine CCB therapy exerts additive negative inotropic and dromotropic effects, risking severe bradycardia and heart failure.",
    "ddinterOriginalManagement": "Avoid concurrent administration except under specialist supervision with continuous ECG and blood pressure monitoring.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2411"
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
    "id": "ddi-pair-0027",
    "drugAId": "drug-bisoprolol",
    "drugBId": "drug-verapamil",
    "drugAName": "Bisoprolol",
    "drugBName": "Verapamil",
    "severity": "Major",
    "mechanism": "Depresi miokardium dan penekanan konduksi nodus AV yang sangat kuat secara bersamaan.",
    "clinicalOutcome": "Hipotensi kolaps, bradikardia berat yang mengancam jiwa, dan syok kardiogenik.",
    "management": "KONTRAINDIKASI PEMBERIAN BERSAMAAN (terutama sediaan IV). Hindari kombinasi oral pada disfungsi ventrikel kiri.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-45209",
    "mechanismCategory": "Synergy",
    "alternativeOptions": [
      "Amlodipine",
      "Nifedipine GITS"
    ],
    "ddinterOriginalText": "Verapamil combined with beta-blockers dramatically increases the risk of complete AV block and severe cardiogenic depression.",
    "ddinterOriginalManagement": "Coadministration is generally contraindicated, especially in patients with pre-existing conduction abnormalities or depressed LV function.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2411"
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
    "id": "ddi-pair-0028",
    "drugAId": "drug-digoxin",
    "drugBId": "drug-amiodarone",
    "drugAName": "Digoxin",
    "drugBName": "Amiodarone",
    "severity": "Major",
    "mechanism": "Amiodarone menghambat transporter efflux P-glikoprotein (P-gp) di tubulus ginjal dan kanalikuli biliaris, serta menurunkan klirens renal digoxin.",
    "clinicalOutcome": "Kadar digoxin darah melonjak 70-100%, memicu intoksikasi digitalis akut (bradikardia berat, blok AV, PVC, mual, xanthopsia).",
    "management": "TURUNKAN dosis digoxin sebesar 50% saat memulai terapi amiodarone dan periksa kadar palung serum digoxin.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-21453",
    "mechanismCategory": "Excretion",
    "alternativeOptions": [
      "Carvedilol",
      "Metoprolol"
    ],
    "ddinterOriginalText": "Amiodarone reduces renal and non-renal clearance of digoxin by inhibiting P-glycoprotein, increasing serum digoxin concentrations by 70% to 100%.",
    "ddinterOriginalManagement": "Reduce digoxin dose by 30-50% upon initiating amiodarone. Monitor serum digoxin concentrations and ECG for digitalis toxicity.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2167"
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
    "id": "ddi-pair-0029",
    "drugAId": "drug-digoxin",
    "drugBId": "drug-verapamil",
    "drugAName": "Digoxin",
    "drugBName": "Verapamil",
    "severity": "Moderate",
    "mechanism": "Verapamil menurunkan klirens renal dan non-renal digoxin hingga 30-50% melalui inhibisi P-glikoprotein.",
    "clinicalOutcome": "Kadar digoxin darah melonjak 50-75%, memicu keracunan digitalis akut (muntah, aritmia AV block, ventrikel ektopik).",
    "management": "TURUNKAN dosis digoxin sebesar 50% saat memulai verapamil dan periksa kadar serum digoxin secara berkala.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-75314",
    "mechanismCategory": "Excretion",
    "alternativeOptions": [
      "Amlodipine"
    ],
    "ddinterOriginalText": "Verapamil inhibits P-glycoprotein efflux of digoxin, raising serum digoxin concentrations by up to 50-75%.",
    "ddinterOriginalManagement": "Reduce digoxin maintenance dose by 25-50% and monitor serum digoxin levels and heart rate regularly.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2749"
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
    "id": "ddi-pair-0030",
    "drugAId": "drug-digoxin",
    "drugBId": "drug-clarithromycin",
    "drugAName": "Digoxin",
    "drugBName": "Clarithromycin",
    "severity": "Major",
    "mechanism": "Clarithromycin menghambat transporter P-gp dan membasmi bakteri flora usus (Eubacterium lentum) yang menginaktivasi digoxin di lumen saluran cerna.",
    "clinicalOutcome": "Lonjakan kadar digoxin serum hingga 2 kali lipat memicu aritmia digitalis berat.",
    "management": "Kurangi dosis digoxin 30-50% dan pantau gejala intoksikasi digitalis serta kadar serum.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-67744",
    "mechanismCategory": "Absorption",
    "alternativeOptions": [
      "Azithromycin",
      "Cefixime"
    ],
    "ddinterOriginalText": "Clarithromycin inhibits intestinal P-glycoprotein and eradicates gut flora that metabolizes digoxin, increasing digoxin bioavailability.",
    "ddinterOriginalManagement": "Monitor digoxin concentrations closely; dosage reduction of digoxin by 30-50% may be necessary.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1403"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Azithromycin",
      "Cefixime",
      "Amoxicillin-Clavulanate"
    ]
  },
  {
    "id": "ddi-pair-0031",
    "drugAId": "drug-digoxin",
    "drugBId": "drug-furosemide",
    "drugAName": "Digoxin",
    "drugBName": "Furosemide",
    "severity": "Moderate",
    "mechanism": "Furosemide menyebabkan diuresis kalium dan magnesium ginjal, memicu hipokalemia dan hipomagnesemia.",
    "clinicalOutcome": "Hipokalemia meningkatkan sensitivitas reseptor Na+/K+-ATPase miokardium terhadap digoxin, memicu aritmia digitalis bahkan pada kadar digoxin normal.",
    "management": "Pertahankan kadar kalium serum > 4.0 mEq/L dan magnesium > 2.0 mg/dL dengan suplementasi atau penambahan spironolactone.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-15533",
    "mechanismCategory": "Synergy",
    "alternativeOptions": [
      "Potassium-sparing diuretic monitoring"
    ],
    "ddinterOriginalText": "Furosemide-induced hypokalemia and hypomagnesemia sensitize the myocardium to digitalis toxicity, precipitating fatal arrhythmias.",
    "ddinterOriginalManagement": "Maintain serum potassium levels between 4.0 and 5.0 mEq/L and monitor magnesium. Coadminister potassium or use potassium-sparing diuretics if needed.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1264"
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
    "id": "ddi-pair-0032",
    "drugAId": "drug-isosorbide-dinitrate",
    "drugBId": "drug-sildenafil",
    "drugAName": "Isosorbide Dinitrate",
    "drugBName": "Sildenafil",
    "severity": "Major",
    "mechanism": "Sinergisme farmakodinamik masif pada jalur cGMP: Nitrat mendonorkan NO meningkatkan sintesis cGMP, sementara sildenafil memblokade degradasi cGMP via inhibisi PDE-5.",
    "clinicalOutcome": "Vasodilatasi sistemik masif memicu Hipotensi Kolaps mendadak, syok sirkulasi, iskemia miokard akut, dan kematian mendadak.",
    "management": "KONTRAINDIKASI MUTLAK. Jangan memberikan nitrat dalam 24 jam setelah konsumsi sildenafil (atau 48 jam untuk tadalafil).",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-120371",
    "mechanismCategory": "Synergy",
    "alternativeOptions": [
      "Alprostadil",
      "Beta-blocker"
    ],
    "ddinterOriginalText": "PDE-5 inhibitors potentiate nitric oxide-cGMP signaling, causing catastrophic refractory vasodilation and life-threatening systemic hypotension.",
    "ddinterOriginalManagement": "CONCOMITANT USE IS STRICTLY CONTRAINDICATED. Withhold sildenafil for at least 24 hours prior to administering any nitrate formulation.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4919"
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
    "id": "ddi-pair-0033",
    "drugAId": "drug-isosorbide-dinitrate",
    "drugBId": "drug-tadalafil",
    "drugAName": "Isosorbide Dinitrate",
    "drugBName": "Tadalafil",
    "severity": "Major",
    "mechanism": "Akumulasi cGMP hebat akibat inhibisi PDE-5 berkepanjangan oleh tadalafil bersama pelepasan NO nitrat.",
    "clinicalOutcome": "Penurunan tekanan darah kritis, syok hipotensi kardiovaskular.",
    "management": "KONTRAINDIKASI MUTLAK. Hindari pemberian nitrat minimal 48 jam pasca dosis terakhir tadalafil.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-120372",
    "mechanismCategory": "Synergy",
    "alternativeOptions": [
      "Alprostadil"
    ],
    "ddinterOriginalText": "Tadalafil markedly enhances hypotensive effects of nitrates. Coadministration can result in fatal circulatory collapse.",
    "ddinterOriginalManagement": "STRICTLY CONTRAINDICATED. Withhold tadalafil for at least 48 hours prior to nitrate therapy.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4919"
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
    "id": "ddi-pair-0034",
    "drugAId": "drug-methotrexate",
    "drugBId": "drug-ibuprofen",
    "drugAName": "Methotrexate",
    "drugBName": "Ibuprofen",
    "severity": "Major",
    "mechanism": "NSAID menghambat sintesis prostaglandin renal yang menurunkan perfusi ginjal, serta bersaing pada sekresi asam organik di tubulus ginjal.",
    "clinicalOutcome": "Penurunan klirens renal methotrexate memicu toksisitas mematikan: Pansitopenia, supresi sumsum tulang berat, ulserasi mukosa GI, dan nekrosis tubular akut.",
    "management": "HINDARI kombinasi dengan metotreksat dosis onkologi/sedang-tinggi. Pada MTX dosis rendah artritis, pantau ketat darah lengkap (CBC) dan fungsi ginjal.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-10331",
    "mechanismCategory": "Excretion",
    "alternativeOptions": [
      "Paracetamol",
      "Low-dose Prednisone"
    ],
    "ddinterOriginalText": "NSAIDs inhibit renal tubular secretion of methotrexate via organic anion transporters (OAT1/OAT3) and decrease renal blood flow, causing severe methotrexate bone marrow suppression.",
    "ddinterOriginalManagement": "Avoid NSAIDs during high-dose methotrexate chemotherapy. With low-dose weekly methotrexate (rheumatoid arthritis), monitor CBC, hepatic enzymes, and renal function regularly.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3474"
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
    "id": "ddi-pair-0035",
    "drugAId": "drug-methotrexate",
    "drugBId": "drug-aspirin",
    "drugAName": "Methotrexate",
    "drugBName": "Aspirin",
    "severity": "Major",
    "mechanism": "Salisilat menggeser ikatan protein plasma metotreksat dan menghambat klirens ekskresi tubulus ginjal.",
    "clinicalOutcome": "Peningkatan kadar fraksi bebas metotreksat serum dan toksisitas hematologi mayor.",
    "management": "Gunakan parasetamol sebagai alternatif antinyeri yang aman.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-33935",
    "mechanismCategory": "Excretion",
    "alternativeOptions": [
      "Paracetamol"
    ],
    "ddinterOriginalText": "Salicylates displace methotrexate from plasma protein binding sites and compete for renal tubular secretion, causing methotrexate toxicity.",
    "ddinterOriginalManagement": "Avoid high-dose aspirin during methotrexate therapy. Monitor CBC and renal function closely if low-dose cardioprotective aspirin is used.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #812"
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
    "id": "ddi-pair-0036",
    "drugAId": "drug-methotrexate",
    "drugBId": "drug-ketorolac",
    "drugAName": "Methotrexate",
    "drugBName": "Ketorolac",
    "severity": "Major",
    "mechanism": "Ketorolac menghambat sekresi tubulus metotreksat dan menurunkan aliran darah ginjal secara drastis.",
    "clinicalOutcome": "Toksisitas metotreksat fatal, mielosupresi akut, dan nekrosis tubular ginjal.",
    "management": "KONTRAINDIKASI BERSAMAAN.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-8153",
    "mechanismCategory": "Excretion",
    "alternativeOptions": [
      "Paracetamol IV",
      "Tramadol"
    ],
    "ddinterOriginalText": "Ketorolac drastically impairs renal clearance of methotrexate, causing severe pancytopenia and gastrointestinal mucosal sloughing.",
    "ddinterOriginalManagement": "CONCOMITANT USE IS CONTRAINDICATED. Discontinue ketorolac prior to methotrexate administration.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3474"
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
    "id": "ddi-pair-0037",
    "drugAId": "drug-methotrexate",
    "drugBId": "drug-omeprazole",
    "drugAName": "Methotrexate",
    "drugBName": "Omeprazole",
    "severity": "Major",
    "mechanism": "Omeprazole dan metabolitnya menghambat protein transporter renal BCRP (Breast Cancer Resistance Protein) dan OAT3.",
    "clinicalOutcome": "Ekskresi ginjal methotrexate terhambat, menyebabkan kadar methotrexate darah bertahan tinggi dan memicu toksisitas sumsum tulang akut.",
    "management": "Ganti omeprazole dengan Antagonis H2 (Famotidine/Ranitidine) saat pasien menerima infus atau terapi methotrexate.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-105727",
    "mechanismCategory": "Excretion",
    "alternativeOptions": [
      "Ranitidine",
      "Famotidine"
    ],
    "ddinterOriginalText": "Omeprazole and PPIs inhibit the BCRP and renal transport of methotrexate, prolonging methotrexate elimination and increasing serum levels.",
    "ddinterOriginalManagement": "Temporarily withhold PPIs during high-dose methotrexate infusions. Consider H2RA as alternative acid-suppressive therapy.",
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
    "id": "ddi-pair-0038",
    "drugAId": "drug-tramadol",
    "drugBId": "drug-sertraline",
    "drugAName": "Tramadol",
    "drugBName": "Sertraline",
    "severity": "Major",
    "mechanism": "Efek sinergis serotonergik: Sertraline menghambat reuptake serotonin dan tramadol menghambat reuptake serotonin serta menstimulasi pelepasan 5-HT.",
    "clinicalOutcome": "Sindrom Serotonin (Serotonin Syndrome) yang ditandai hipertermia, hiperrefleksia, klonus, agitasi, diaphoresis, dan instabilitas otonom fatal.",
    "management": "Hindari kombinasi jika memungkinkan. Edukasi pasien mengenai tanda bahaya sindrom serotonin dan pantau ketat status neurologis.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-6111",
    "mechanismCategory": "Synergy",
    "alternativeOptions": [
      "Paracetamol",
      "Codeine"
    ],
    "ddinterOriginalText": "Concomitant use of tramadol and SSRIs increases the risk of serotonin syndrome and lowers the seizure threshold.",
    "ddinterOriginalManagement": "Avoid combination or monitor closely for serotonin toxicity (hyperreflexia, clonus, tremor, diaphoresis) and seizures.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1077"
    ],
    "alternativeOptionsA": [
      "Paracetamol",
      "Gabapentin",
      "NSAID Topikal"
    ],
    "alternativeOptionsB": [
      "Escitalopram",
      "Mirtazapine",
      "Bupropion"
    ]
  },
  {
    "id": "ddi-pair-0039",
    "drugAId": "drug-tramadol",
    "drugBId": "drug-fluoxetine",
    "drugAName": "Tramadol",
    "drugBName": "Fluoxetine",
    "severity": "Major",
    "mechanism": "Fluoxetine adalah inhibitor kuat CYP2D6 yang menghambat aktivasi tramadol menjadi metabolit aktif O-desmethyltramadol, sekaligus meningkatkan kadar serotonin.",
    "clinicalOutcome": "Risiko Sindrom Serotonin dan kejang meningkat, dengan efikasi analgesik tramadol yang justru berkurang.",
    "management": "Hindari kombinasi. Pertimbangkan analgesik non-serotonergik.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-5863",
    "mechanismCategory": "Synergy",
    "alternativeOptions": [
      "Paracetamol",
      "NSAIDs (if no contraindication)"
    ],
    "ddinterOriginalText": "Fluoxetine inhibits CYP2D6 metabolism of tramadol while adding serotonergic tone, increasing the risk of serotonin syndrome and seizure.",
    "ddinterOriginalManagement": "Avoid combination. Discontinue tramadol immediately if neuromuscular excitation or autonomic instability develops.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1077"
    ],
    "alternativeOptionsA": [
      "Paracetamol",
      "Gabapentin",
      "NSAID Topikal"
    ],
    "alternativeOptionsB": [
      "Sertraline",
      "Escitalopram",
      "Mirtazapine",
      "Bupropion"
    ]
  },
  {
    "id": "ddi-pair-0040",
    "drugAId": "drug-diazepam",
    "drugBId": "drug-tramadol",
    "drugAName": "Diazepam",
    "drugBName": "Tramadol",
    "severity": "Major",
    "mechanism": "Sinergisme depresi sistem saraf pusat (SSP) aditif melalui reseptor GABA-A dan reseptor mu-opioid.",
    "clinicalOutcome": "Sedasi mendalam, depresi pernapasan berat, koma, dan kematian (Black Box Warning FDA).",
    "management": "Batasi penggunaan bersamaan. Resepkan dosis dan durasi seminimal mungkin, serta siapkan antidotum nalokson dan flumazenil.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-5809",
    "mechanismCategory": "Synergy",
    "alternativeOptions": [
      "Non-opioid analgesics",
      "Buspirone"
    ],
    "ddinterOriginalText": "Concomitant administration of benzodiazepines and opioids increases the risk of profound sedation, respiratory depression, coma, and death.",
    "ddinterOriginalManagement": "FDA Black Box Warning. Limit dosages and duration to the absolute minimum necessary. Educate patient and family on signs of respiratory depression.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4260"
    ],
    "alternativeOptionsA": [
      "Buspirone",
      "Melatonin",
      "Hydroxyzine"
    ],
    "alternativeOptionsB": [
      "Paracetamol",
      "Gabapentin",
      "NSAID Topikal"
    ]
  },
  {
    "id": "ddi-pair-0041",
    "drugAId": "drug-diazepam",
    "drugBId": "drug-morphine",
    "drugAName": "Diazepam",
    "drugBName": "Morphine",
    "severity": "Major",
    "mechanism": "Efek sedatif dan depresif pernapasan aditif yang sangat kuat.",
    "clinicalOutcome": "Henti napas akut, hipoksia serebral, sedasi berat yang berujung fatal.",
    "management": "Hindari peresepan bersamaan kecuali pada perawatan paliatif intensif di bawah monitor ketat.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-32218",
    "mechanismCategory": "Synergy",
    "alternativeOptions": [
      "Non-opioid analgesics",
      "Selective anxiolytic"
    ],
    "ddinterOriginalText": "Concurrent use of morphine and diazepam synergistically depresses the central nervous system and respiratory drive.",
    "ddinterOriginalManagement": "Limit combined therapy to closely monitored inpatient settings. Keep naloxone and flumazenil available for emergency reversal.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4260"
    ],
    "alternativeOptionsA": [
      "Buspirone",
      "Melatonin",
      "Hydroxyzine"
    ],
    "alternativeOptionsB": [
      "Paracetamol",
      "Gabapentin",
      "NSAID Topikal"
    ]
  },
  {
    "id": "ddi-pair-0042",
    "drugAId": "drug-fluoxetine",
    "drugBId": "drug-metoprolol",
    "drugAName": "Fluoxetine",
    "drugBName": "Metoprolol",
    "severity": "Moderate",
    "mechanism": "Fluoxetine adalah inhibitor poten isoenzim CYP2D6 yang memetabolisme metoprolol.",
    "clinicalOutcome": "Konsentrasi plasma metoprolol melonjak 3-5 kali lipat, memicu bradikardia berat, hipotensi, dan blok jantung.",
    "management": "Pertimbangkan penurunan dosis metoprolol hingga 50% atau ganti dengan beta blocker yang tidak dimetabolisme CYP2D6 (Atenolol/Bisoprolol).",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-101240",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Limited clinical data suggest that selective serotonin reuptake inhibitors (SSRIs) may potentiate the pharmacologic effects of some beta-blockers. The proposed mechanism is SSRI inhibition (competitive and/or noncompetitive) of CYP450 2D6, the isoenzyme responsible for the metabolic clearance of beta-blockers such as carvedilol, labetalol, metoprolol, nebivolol, propranolol, and timolol. Paroxetine and norfluoxetine (the active metabolite of fluoxetine), in particular, are potent inhibitors of CYP450 2D6 and may be more likely than other SSRIs to cause the interaction. On the other hand, fluvoxamine is a potent inhibitor of CYP450 1A2 and may significantly interact with propranolol, which is a substrate of both CYP450 2D6 and 1A2.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3157"
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
    "id": "ddi-pair-0043",
    "drugAId": "drug-amitriptyline",
    "drugBId": "drug-fluoxetine",
    "drugAName": "Amitriptyline",
    "drugBName": "Fluoxetine",
    "severity": "Major",
    "mechanism": "Inhibisi kuat isoenzim CYP2D6 oleh fluoxetine menghambat metabolisme antidepresan trisiklik.",
    "clinicalOutcome": "Kadar amitriptyline plasma melonjak 2-4 kali lipat, memicu toksisitas antikolinergik berat, kejang, dan aritmia ventrikel QTc.",
    "management": "Hindari kombinasi jika memungkinkan. Jika digunakan bersama, turunkan dosis amitriptyline secara signifikan dan monitor EKG.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-22424",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with fluoxetine may significantly increase the plasma concentrations of some tricyclic antidepressants (TCAs). The proposed mechanism is fluoxetine inhibition of CYP450 2D6, the isoenzyme responsible for the metabolic clearance of many antidepressant and psychotropic drugs. Seizures and delirium have been reported, as well as a fatality attributed to fluoxetine-induced chronic amitriptyline toxicity. Pharmacodynamically, the combination of fluoxetine (or any other selective serotonin reuptake inhibitor) and a TCA may potentiate the risk of serotonin syndrome, which is a rare but serious and potentially fatal condition thought to result from hyperstimulation of brainstem 5HT1A receptors.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1356"
    ],
    "alternativeOptionsA": [
      "Sertraline",
      "Escitalopram",
      "Mirtazapine",
      "Bupropion"
    ],
    "alternativeOptionsB": [
      "Sertraline",
      "Escitalopram",
      "Mirtazapine",
      "Bupropion"
    ]
  },
  {
    "id": "ddi-pair-0044",
    "drugAId": "drug-haloperidol",
    "drugBId": "drug-amiodarone",
    "drugAName": "Haloperidol",
    "drugBName": "Amiodarone",
    "severity": "Major",
    "mechanism": "Efek aditif perpanjangan repolarisasi ventrikel (interval QTc) serta inhibisi CYP3A4/CYP2D6.",
    "clinicalOutcome": "Risiko fatal Torsades de Pointes dan henti jantung aritmik.",
    "management": "KONTRAINDIKASI BERSAMAAN. Hindari pemberian haloperidol pada pasien yang sedang dalam terapi amiodarone.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-21537",
    "mechanismCategory": "Synergy",
    "alternativeOptions": [
      "Atypical antipsychotic without QT prolongation"
    ],
    "ddinterOriginalText": "Haloperidol and amiodarone both prolong the cardiac QTc interval. Coadministration markedly elevates the risk of Torsades de Pointes and fatal ventricular arrhythmias.",
    "ddinterOriginalManagement": "CONCOMITANT USE SHOULD BE AVOIDED. Perform baseline and serial ECG monitoring if combination is clinically unavoidable; maintain serum potassium and magnesium in upper normal ranges.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #363"
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
    "id": "ddi-pair-0045",
    "drugAId": "drug-gabapentin",
    "drugBId": "drug-morphine",
    "drugAName": "Gabapentin",
    "drugBName": "Morphine",
    "severity": "Major",
    "mechanism": "Morphine memperlambat motilitas lambung meningkatkan bioavailabilitas gabapentin hingga 44%, disertai sinergisme depresi SSP.",
    "clinicalOutcome": "Sedasi mendalam, pusing berat, dan depresi pernapasan fatal.",
    "management": "Turunkan dosis gabapentin saat memulai morfin, edukasi keluarga tanda-tanda depresi pernapasan.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-32267",
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
      "Lacosamide"
    ],
    "alternativeOptionsB": [
      "Paracetamol",
      "Gabapentin",
      "NSAID Topikal"
    ]
  },
  {
    "id": "ddi-pair-0046",
    "drugAId": "drug-ciprofloxacin",
    "drugBId": "drug-theophylline",
    "drugAName": "Ciprofloxacin",
    "drugBName": "Theophylline",
    "severity": "Major",
    "mechanism": "Ciprofloxacin adalah inhibitor kuat enzim sitokrom P450 CYP1A2 yang merupakan jalur eliminasi utama teofilin.",
    "clinicalOutcome": "Kadar teofilin serum meningkat 100-300%, memicu intoksikasi xantin berat (takikardia ventrikel, kejang refrakter, mual muntah persisten).",
    "management": "Turunkan dosis teofilin sebesar 50% jika ciprofloxacin harus digunakan, atau gunakan antibiotik alternatif (Levofloxacin/Azitromisin).",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-66337",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with ciprofloxacin may significantly increase the serum concentrations of theophylline and the associated risk of toxicity. The mechanism is ciprofloxacin inhibition of theophylline metabolism via CYP450 1A2.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3586"
    ],
    "alternativeOptionsA": [
      "Azithromycin",
      "Cefixime",
      "Amoxicillin-Clavulanate",
      "Ceftriaxone"
    ],
    "alternativeOptionsB": [
      "Formoterol Inhaler",
      "Tiotropium",
      "Budesonide Inhaler"
    ]
  },
  {
    "id": "ddi-pair-0047",
    "drugAId": "drug-tacrolimus",
    "drugBId": "drug-fluconazole",
    "drugAName": "Tacrolimus",
    "drugBName": "Fluconazole",
    "severity": "Major",
    "mechanism": "Fluconazole menghambat enzim metabolik CYP3A4 dan transporter P-glikoprotein di usus dan hepar.",
    "clinicalOutcome": "Kadar palung (trough) tacrolimus melonjak tajam memicu Nefrotoksisitas akut, hiperkalemia, dan neurotoksisitas (tremor berat).",
    "management": "Turunkan dosis tacrolimus 40-50% dan lakukan TDM pemantauan kadar darah tacrolimus setiap 2-3 hari.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-168184",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Tacrolimus can cause concentration-dependent prolongation of the QT interval. Theoretically, coadministration with other agents that can prolong the QT interval including some azole antifungal agents may result in additive effects and increased risk of ventricular arrhythmias including torsade de pointes and sudden death. Coadministration with azole antifungal agents may significantly increase the oral bioavailability of tacrolimus. The proposed mechanism is inhibition of tacrolimus metabolism via intestinal CYP450 3A4.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4534"
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
    "id": "ddi-pair-0048",
    "drugAId": "drug-allopurinol",
    "drugBId": "drug-azathioprine",
    "drugAName": "Allopurinol",
    "drugBName": "Azathioprine",
    "severity": "Major",
    "mechanism": "Allopurinol menghambat enzim xantin oksidase yang merupakan jalur katabolisme utama azathioprine / 6-merkaptopurin.",
    "clinicalOutcome": "Pansitopenia fatal, supresi sumsum tulang berat, dan agranulositosis parah.",
    "management": "Kurangi dosis azathioprine hingga 25-33% dari dosis standar (penurunan dosis 67-75%) dan pantau ketat darah lengkap (CBC).",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-17592",
    "mechanismCategory": "Metabolism",
    "alternativeOptions": [
      "Mycophenolate Mofetil",
      "Dose-reduced azathioprine"
    ],
    "ddinterOriginalText": "Allopurinol inhibits xanthine oxidase, the enzyme responsible for catabolizing 6-mercaptopurine, leading to massive accumulation of cytotoxic thiopurine nucleotides.",
    "ddinterOriginalManagement": "REDUCE AZATHIOPRINE DOSE TO 25% - 33% (one-quarter to one-third) OF USUAL DOSE when allopurinol is added. Monitor CBC weekly for early signs of leukopenia.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #5212"
    ],
    "alternativeOptionsA": [
      "Febuxostat",
      "Colchicine (Profilaksis Akut)"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddi-pair-0049",
    "drugAId": "drug-glimepiride",
    "drugBId": "drug-fluconazole",
    "drugAName": "Glimepiride",
    "drugBName": "Fluconazole",
    "severity": "Major",
    "mechanism": "Fluconazole menghambat enzim sitokrom CYP2C9 yang memetabolisme sulfonilurea.",
    "clinicalOutcome": "Kadar glimepiride plasma meningkat drastis, memicu Episode Hipoglikemia Berat, koma hipoglikemia, dan kerusakan otak permanen.",
    "management": "Turunkan dosis glimepiride sebesar 50% dan pantau gula darah mandiri secara ketat.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-108032",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with inhibitors of CYP450 2C9 including certain azole antifungal agents such as fluconazole, miconazole, and voriconazole may increase the plasma concentrations of sulfonylureas, many of which have been found to be substrates of the isoenzyme.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2048"
    ],
    "alternativeOptionsA": [
      "Linagliptin",
      "Sitagliptin",
      "Empagliflozin",
      "Metformin"
    ],
    "alternativeOptionsB": [
      "Terbinafine",
      "Nystatin",
      "Micafungin"
    ]
  },
  {
    "id": "ddi-pair-0050",
    "drugAId": "drug-glimepiride",
    "drugBId": "drug-co-trimoxazole",
    "drugAName": "Glimepiride",
    "drugBName": "Co-Trimoxazole",
    "severity": "Major",
    "mechanism": "Komponen Sulfamethoxazole menghambat isoenzim CYP2C9 di hepar.",
    "clinicalOutcome": "Perpanjangan waktu paruh sulfonilurea dan hipoglikemia refrakter berkepanjangan.",
    "management": "Gunakan antibiotik alternatif atau turunkan dosis sulfonilurea disertai monitor glukosa darah ketat.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-000050",
    "mechanismCategory": "Synergy",
    "alternativeOptions": [
      "Alprostadil",
      "Beta-blocker"
    ],
    "ddinterOriginalText": "Coadministration of isosorbide dinitrate with sildenafil is contraindicated due to profound, potentially fatal systemic hypotension from synergistic cyclic GMP accumulation.",
    "ddinterOriginalManagement": "STRICTLY CONTRAINDICATED. Ensure an interval of at least 24 hours between sildenafil and any organic nitrate dose."
  },
  {
    "id": "ddi-pair-0051",
    "drugAId": "drug-ciprofloxacin",
    "drugBId": "drug-sucralfate",
    "drugAName": "Ciprofloxacin",
    "drugBName": "Sucralfate",
    "severity": "Moderate",
    "mechanism": "Kation Aluminium dalam sukralfat membentuk kelat tidak larut dengan ciprofloxacin di lumen saluran cerna.",
    "clinicalOutcome": "Penurunan penyerapan ciprofloxacin hingga 85-90% jika diminum bersamaan, menurunkan efikasi terapi infeksi bakteri.",
    "management": "Hindari konsumsi bersamaan secara simultan. Berikan ciprofloxacin minimal 2 jam SEBELUM atau 6 jam SETELAH sukralfat.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-66316",
    "mechanismCategory": "Absorption",
    "ddinterOriginalText": "INTERVAL: Oral preparations that contain magnesium, aluminum, or calcium may significantly decrease the gastrointestinal absorption of quinolone antibiotics. Absorption may also be reduced by sucralfate, which contains aluminum, as well as other polyvalent cations such as iron and zinc. The mechanism is chelation of quinolones by polyvalent cations, forming a complex that is poorly absorbed from the gastrointestinal tract.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3116"
    ],
    "alternativeOptionsA": [
      "Azithromycin",
      "Cefixime",
      "Amoxicillin-Clavulanate",
      "Ceftriaxone"
    ],
    "alternativeOptionsB": [
      "Famotidine",
      "Pantoprazole",
      "Rebamipide"
    ]
  },
  {
    "id": "ddi-pair-0052",
    "drugAId": "drug-carbamazepine",
    "drugBId": "drug-clarithromycin",
    "drugAName": "Carbamazepine",
    "drugBName": "Clarithromycin",
    "severity": "Major",
    "mechanism": "Clarithromycin adalah inhibitor poten CYP3A4 yang menghentikan metabolisme karbamazepin.",
    "clinicalOutcome": "Kadar karbamazepin darah melonjak tajam memicu intoksikasi akut (ataksia berat, nistagmus, pusing, diplopia, koma).",
    "management": "HINDARI kombinasi. Gunakan makrolida non-CYP3A4 seperti Azitromisin, atau turunkan dosis karbamazepin 50% dengan pantau TDM.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-56247",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Some macrolide antibiotics can significantly increase serum carbamazepine levels. The mechanism is probably inhibition of hepatic CYP450 3A4 isoenzymes. Severe carbamazepine toxicity has been reported. At the same time, carbamazepine may induce the CYP450 3A4 metabolism of macrolides. This may lead to sub-therapeutic levels of macrolides and a decreased antibiotic effect.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3505"
    ],
    "alternativeOptionsA": [
      "Levetiracetam",
      "Lamotrigine",
      "Lacosamide",
      "Gabapentin"
    ],
    "alternativeOptionsB": [
      "Azithromycin",
      "Cefixime",
      "Amoxicillin-Clavulanate"
    ]
  },
  {
    "id": "ddi-pair-0053",
    "drugAId": "drug-clarithromycin",
    "drugBId": "drug-colchicine",
    "drugAName": "Clarithromycin",
    "drugBName": "Colchicine",
    "severity": "Major",
    "mechanism": "Inhibisi ganda kuat enzim CYP3A4 dan transporter efflux P-gp oleh clarithromycin menghentikan eliminasi colchicine.",
    "clinicalOutcome": "Keracunan colchicine mematikan: Neuromiopati berat, rhabdomyolysis, gagal multiorgan, dan supresi sumsum tulang fatal.",
    "management": "KONTRAINDIKASI MUTLAK pada pasien dengan gangguan ginjal atau hati. Pada fungsi ginjal normal, turunkan dosis colchicine 75%.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-67714",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration of colchicine with clarithromycin may significantly increase the serum concentrations of colchicine. The proposed mechanism is inhibition of the CYP450 3A4-mediated metabolism and P-glycoprotein (P-gp)-mediated transport of colchicine by clarithromycin. Clinical toxicity including myopathy, neuropathy, multiorgan failure, and pancytopenia may occur.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #791"
    ],
    "alternativeOptionsA": [
      "Azithromycin",
      "Cefixime",
      "Amoxicillin-Clavulanate"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddi-pair-0054",
    "drugAId": "drug-co-trimoxazole",
    "drugBId": "drug-spironolactone",
    "drugAName": "Co-Trimoxazole",
    "drugBName": "Spironolactone",
    "severity": "Major",
    "mechanism": "Komponen Trimethoprim memiliki struktur mirip amiloride yang memblokade kanal natrium epitelial (ENaC) di tubulus distalis ginjal, menghentikan sekresi kalium.",
    "clinicalOutcome": "Hiperkalemia berat mendadak (K > 6.0 mEq/L) memicu aritmia ventrikel dan henti jantung fatal.",
    "management": "Hindari kombinasi pada pasien gagal jantung/lansia. Jika digunakan, periksa elektrolit serum pada hari ke-3 terapi.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-000054"
  },
  {
    "id": "ddi-pair-0055",
    "drugAId": "drug-rifampicin",
    "drugBId": "drug-tacrolimus",
    "drugAName": "Rifampicin",
    "drugBName": "Tacrolimus",
    "severity": "Major",
    "mechanism": "Rifampicin adalah induktor kuat enzim CYP3A4 dan P-gp, mempercepat klirens tacrolimus secara masif.",
    "clinicalOutcome": "Kadar palung (trough) tacrolimus turun hingga 70-80% di bawah target terapeutik, memicu Rejeksi Akut Transplantasi Organ.",
    "management": "Dosis tacrolimus sering kali harus ditingkatkan 3 hingga 5 kali lipat disertai pemantauan TDM harian.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-161536",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with potent inducers of CYP450 3A4 and/or P-glycoprotein may significantly decrease the plasma concentrations and pharmacologic effects of tacrolimus. The mechanism probably involves reduced absorption as well as accelerated clearance of tacrolimus due to induction of both intestinal P-glycoprotein drug efflux transporter and hepatic/intestinal CYP450 3A4 isoenzymes.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4910"
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
    "id": "ddi-pair-0056",
    "drugAId": "drug-fluconazole",
    "drugBId": "drug-phenytoin",
    "drugAName": "Fluconazole",
    "drugBName": "Phenytoin",
    "severity": "Major",
    "mechanism": "Fluconazole menghambat enzim hepatik CYP2C9 yang merupakan jalur utama pembersihan fenitoin.",
    "clinicalOutcome": "Kadar fenitoin darah melonjak hingga tingkat toksik (nistagmus berat, ataksia serebelar, kebingungan mental, koma).",
    "management": "Turunkan dosis fenitoin dan monitor kadar serum fenitoin secara berkala.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-153798",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "The concomitant use of fluconazole may increase serum hydantoin levels and risk of hydantoin toxicity. The mechanism is inhibition of CYP450 2C9 and 2C19 hepatic metabolism.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3788"
    ],
    "alternativeOptionsA": [
      "Terbinafine",
      "Nystatin",
      "Micafungin"
    ],
    "alternativeOptionsB": [
      "Levetiracetam",
      "Lamotrigine",
      "Lacosamide",
      "Gabapentin"
    ]
  },
  {
    "id": "ddi-pair-0057",
    "drugAId": "drug-azathioprine",
    "drugBId": "drug-febuxostat",
    "drugAName": "Azathioprine",
    "drugBName": "Febuxostat",
    "severity": "Major",
    "mechanism": "Febuxostat adalah inhibitor poten non-purin enzim xantin oksidase yang mencegah inaktivasi 6-merkaptopurin.",
    "clinicalOutcome": "Supresi sumsum tulang yang sangat parah dan berpotensi mematikan (pansitopenia dan agranulositosis).",
    "management": "KONTRAINDIKASI MUTLAK. Jangan pernah memberikan febuxostat bersamaan dengan azathioprine.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-37262",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with febuxostat may significantly increase the plasma concentrations of xanthine oxidase substrates such as azathioprine, mercaptopurine, and theophylline. Toxicity may result. The proposed mechanism is inhibition of xanthine oxidase by febuxostat. Although drug interaction studies have not been conducted with febuxostat and xanthine oxidase substrates, the interaction has been reported with allopurinol, another xanthine oxidase inhibitor. Severe bone marrow suppression and other toxicities have been associated with concomitant use of allopurinol and mercaptopurine (6-MP) or azathioprine. Increased theophylline concentrations have also been reported during coadministration with allopurinol at dosages of 600 mg/day or greater.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Azathioprine ↔ Febuxostat)"
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
    "id": "ddi-pair-0058",
    "drugAId": "drug-lithium-carbonate",
    "drugBId": "drug-ibuprofen",
    "drugAName": "Lithium Carbonate",
    "drugBName": "Ibuprofen",
    "severity": "Major",
    "mechanism": "NSAID menghambat sintesis prostaglandin vasodilator ginjal (PGE2) yang menurunkan laju filtrasi glomerulus dan klirens lithium renal.",
    "clinicalOutcome": "Kadar lithium serum melonjak hingga 40-60%, memicu intoksikasi lithium berat (tremor kasar, ataksia serebelar, kebingungan, gagal ginjal akut, koma).",
    "management": "HINDARI penggunaan NSAID pada pasien dalam terapi lithium. Gunakan Parasetamol atau Aspirin dosis rendah sebagai pereda nyeri.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-000058"
  },
  {
    "id": "ddi-pair-0059",
    "drugAId": "drug-lithium-carbonate",
    "drugBId": "drug-hydrochlorothiazide",
    "drugAName": "Lithium Carbonate",
    "drugBName": "Hydrochlorothiazide",
    "severity": "Major",
    "mechanism": "Diuretik tiazid menyebabkan deplesi natrium di tubulus distal, memicu reabsorpsi natrium dan lithium kompensatoris di tubulus proksimal.",
    "clinicalOutcome": "Kadar lithium darah meningkat 25-50% dalam beberapa hari memicu toksisitas neurologis berat.",
    "management": "Kurangi dosis lithium hingga 50% jika tiazid harus dimulai, dan pantau kadar serum lithium serial 1-2 kali seminggu.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-17158",
    "mechanismCategory": "Excretion",
    "ddinterOriginalText": "Thiazide diuretics may cause a rapid increase in serum lithium levels and potentiate the risk of lithium toxicity. The exact mechanism is unknown but may be related to the sodium loss induced by thiazide diuresis, which produces a compensatory increase in proximal tubular reabsorption of sodium along with lithium.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4850"
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
    "id": "ddi-pair-0060",
    "drugAId": "drug-sodium-valproate",
    "drugBId": "drug-meropenem",
    "drugAName": "Sodium Valproate",
    "drugBName": "Meropenem",
    "severity": "Major",
    "mechanism": "Meropenem menghambat hidrolisis metabolit glukuronida valproat kembali menjadi valproat bebas dan meningkatkan klirens acylpeptide hydrolase.",
    "clinicalOutcome": "Kadar valproat serum anjlok drastis sebesar 60-90% dalam waktu 24 jam pertama, memicu Kejang Berulang / Status Epileptikus Refrakter.",
    "management": "KONTRAINDIKASI BERSAMAAN. Jangan mengombinasikan antibiotik karbapenem dengan asam valproat. Gunakan antikonvulsan alternatif (Levetirasetam) atau antibiotik lain.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-000060"
  },
  {
    "id": "ddi-pair-0061",
    "drugAId": "drug-sacubitril-valsartan",
    "drugBId": "drug-captopril",
    "drugAName": "Sacubitril / Valsartan",
    "drugBName": "Captopril",
    "severity": "Major",
    "mechanism": "Inhibisi ganda enzim Neprilysin (oleh sacubitril) dan Angiotensin-Converting Enzyme (oleh captopril) menyebabkan akumulasi masif bradikinin dalam sirkulasi.",
    "clinicalOutcome": "Peningkatan risiko Angioedema yang mengancam jiwa (obstruksi jalan napas dan asfiksia fatal).",
    "management": "KONTRAINDIKASI MUTLAK. Jangan pernah diberikan bersamaan. Wajib ada periode jeda (washout period) minimal 36 jam saat beralih dari/ke terapi ACE Inhibitor.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-000061"
  },
  {
    "id": "ddi-pair-0062",
    "drugAId": "drug-nirmatrelvir-ritonavir",
    "drugBId": "drug-simvastatin",
    "drugAName": "Nirmatrelvir / Ritonavir",
    "drugBName": "Simvastatin",
    "severity": "Major",
    "mechanism": "Ritonavir adalah inhibitor poten isoenzim CYP3A4 dan transporter OATP1B1, memblokade klirens metabolisme simvastatin secara drastis.",
    "clinicalOutcome": "Peningkatan kadar plasma simvastatin hingga > 1000%, memicu Rhabdomyolysis akut, gagal ginjal mioglobinurik, dan kematian.",
    "management": "KONTRAINDIKASI MUTLAK. Hentikan simvastatin minimal 12 jam sebelum memulai Paxlovid dan selama 5 hari masa pengobatan Paxlovid.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-000062"
  },
  {
    "id": "ddi-pair-0063",
    "drugAId": "drug-nirmatrelvir-ritonavir",
    "drugBId": "drug-rivaroxaban",
    "drugAName": "Nirmatrelvir / Ritonavir",
    "drugBName": "Rivaroxaban",
    "severity": "Major",
    "mechanism": "Ritonavir menghambat eliminasi rivaroxaban via CYP3A4 dan P-glycoprotein (P-gp).",
    "clinicalOutcome": "Peningkatan konsentrasi rivaroxaban plasma dan risiko perdarahan fatal spontan.",
    "management": "HINDARI penggunaan bersamaan. Pertimbangkan antikoagulan alternatif seperti Heparin/LMWH selama terapi Paxlovid.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-000063"
  },
  {
    "id": "ddi-pair-0064",
    "drugAId": "drug-escitalopram",
    "drugBId": "drug-tramadol",
    "drugAName": "Escitalopram",
    "drugBName": "Tramadol",
    "severity": "Major",
    "mechanism": "Efek sinergis penghambatan reuptake serotonin pada celah sinaptik dan inhibisi metabolisme tramadol.",
    "clinicalOutcome": "Peningkatan risiko Sindrom Serotonin (klonus, hipertermia, rigiditas, delirium) serta penurunan ambang kejang (seizure threshold).",
    "management": "Hindari kombinasi jika memungkinkan. Jika terpaksa, batasi dosis tramadol, pantau tanda-tanda hiperaktivitas neuromuskular.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-5845",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Concomitant use of agents with serotonergic activity including selective serotonin reuptake inhibitors, tricyclic antidepressants, and other antidepressants may potentiate the risk of serotonin syndrome, which is a rare but serious and potentially fatal condition thought to result from hyperstimulation of brainstem 5-HT1A and 2A receptors. Escitalopram can cause dose-dependent prolongation of the QT interval. Theoretically, coadministration with other agents that can prolong the QT interval including tricyclic antidepressants and other antidepressants (e.g., trazodone) may result in additive effects and increased risk of ventricular arrhythmias such as torsade de pointes and sudden death.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4162"
    ],
    "alternativeOptionsA": [
      "Sertraline",
      "Mirtazapine",
      "Bupropion"
    ],
    "alternativeOptionsB": [
      "Paracetamol",
      "Gabapentin",
      "NSAID Topikal"
    ]
  },
  {
    "id": "ddi-pair-0065",
    "drugAId": "drug-domperidone",
    "drugBId": "drug-moxifloxacin",
    "drugAName": "Domperidone",
    "drugBName": "Moxifloxacin",
    "severity": "Major",
    "mechanism": "Efek aditif pemanjangan repolarisasi ventrikel via blokade kanal kalium hERG/IKr jantung.",
    "clinicalOutcome": "Perpanjangan interval QTc bermakna dan peningkatan risiko Aritmia Ventrikel Fatal (Torsades de Pointes) dan Henti Jantung.",
    "management": "KONTRAINDIKASI BERSAMAAN. Jangan mengombinasikan domperidone dengan antimikroba pemanjang QT seperti moxifloxacin.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-000065"
  },
  {
    "id": "ddi-pair-0066",
    "drugAId": "drug-eplerenone",
    "drugBId": "drug-candesartan",
    "drugAName": "Eplerenone",
    "drugBName": "Candesartan",
    "severity": "Major",
    "mechanism": "Blokade ganda aksis Renin-Angiotensin-Aldosteron (RAAS) menurunkan ekskresi kalium ginjal secara drastis.",
    "clinicalOutcome": "Hiperkalemia berat (K+ > 6.0 mmol/L) yang memicu aritmia kardiak dan henti jantung asistol.",
    "management": "Periksa kadar kalium dan kreatinin serum pada hari ke-3, minggu ke-1, dan minggu ke-4 setelah inisiasi kombinasi. Hentikan suplemen kalium.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-000066"
  },
  {
    "id": "ddi-pair-0067",
    "drugAId": "drug-ivabradine",
    "drugBId": "drug-diltiazem",
    "drugAName": "Ivabradine",
    "drugBName": "Diltiazem",
    "severity": "Major",
    "mechanism": "Diltiazem adalah inhibitor moderat CYP3A4 yang melipatgandakan AUC ivabradine ditambah efek aditif penurunan otomatisitas nodus SA.",
    "clinicalOutcome": "Bradikardia ekstrem (< 40 bpm), sinus arrest, dan blok atrioventrikular total.",
    "management": "KONTRAINDIKASI BERSAMAAN. Ivabradine tidak boleh dikombinasikan dengan Calcium Channel Blocker non-dihidropiridin (diltiazem atau verapamil).",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-57890",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with diltiazem or verapamil may significantly increase the plasma concentrations of ivabradine and increase the risk of excessive bradycardia or other conduction disturbances. The mechanism likely involves both inhibition of the CYP450 3A4-mediated metabolism of ivabradine by the calcium channel blockers as well as additive effects of these agents on heart rate, as they all exhibit negative chronotropic properties.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1192"
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
    "id": "ddi-pair-0068",
    "drugAId": "drug-alprazolam",
    "drugBId": "drug-fentanyl",
    "drugAName": "Alprazolam",
    "drugBName": "Fentanyl",
    "severity": "Major",
    "mechanism": "Efek potensiasi sinergis pada reseptor GABAA dan reseptor mu-opioid di batang otak.",
    "clinicalOutcome": "Depresi pernapasan berat, sedasi mendalam, koma, dan kematian mendadak (FDA Black Box Warning).",
    "management": "Hindari peresepan bersamaan kecuali tidak ada alternatif terapi lain. Batasi dosis dan durasi seminimal mungkin, serta sediakan antidot Nalokson.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-2180",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Concomitant use of opioids with benzodiazepines or other central nervous system (CNS) depressants (e.g., nonbenzodiazepine sedatives/hypnotics, anxiolytics, muscle relaxants, general anesthetics, antipsychotics, other opioids, alcohol) may result in profound sedation, respiratory depression, coma, and death. The risk of hypotension may also be increased with some CNS depressants (e.g., alcohol, benzodiazepines, phenothiazines).",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4260"
    ],
    "alternativeOptionsA": [
      "Buspirone",
      "Melatonin",
      "Hydroxyzine"
    ],
    "alternativeOptionsB": [
      "Paracetamol",
      "Gabapentin",
      "NSAID Topikal"
    ]
  },
  {
    "id": "ddi-pair-0069",
    "drugAId": "drug-voriconazole",
    "drugBId": "drug-tacrolimus",
    "drugAName": "Voriconazole",
    "drugBName": "Tacrolimus",
    "severity": "Major",
    "mechanism": "Voriconazole menghambat poten enzim CYP3A4 usus dan hepar yang memetabolisme tacrolimus.",
    "clinicalOutcome": "Kadar palung (trough level) tacrolimus meningkat hingga 200-400%, memicu nefrotoksisitas akut berat dan neurotoksisitas (kejang).",
    "management": "Turunkan dosis oral tacrolimus hingga 66% (sepertiga dari dosis awal) saat memulai voriconazole dan pantau kadar darah tacrolimus setiap 48 jam.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-168360",
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
    "id": "ddi-pair-0070",
    "drugAId": "drug-donepezil",
    "drugBId": "drug-amitriptyline",
    "drugAName": "Donepezil",
    "drugBName": "Amitriptyline",
    "severity": "Moderate",
    "mechanism": "Antagonisme farmakodinamik langsung: amitriptyline memiliki aktivitas antikolinergik sentral poten yang menentang efek pro-kolinergik donepezil.",
    "clinicalOutcome": "Kegagalan terapi donepezil, perburukan gejala kognitif/demensia, dan eksaserbasi konfusi pada lansia.",
    "management": "HINDARI penggunaan antidepresan trisiklik antikolinergik pada pasien demensia. Pilih SSRI seperti Sertraline atau Escitalopram.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-22368",
    "mechanismCategory": "Antagonism",
    "ddinterOriginalText": "Due to opposing effects, agents that possess anticholinergic activity (e.g., sedating antihistamines; antispasmodics; neuroleptics; phenothiazines; skeletal muscle relaxants; tricyclic antidepressants; class IA antiarrhythmics especially disopyramide; carbamazepine; cimetidine; ranitidine) may negate the already small pharmacologic benefits of acetylcholinesterase inhibitors in the treatment of dementia. These agents may also adversely affect elderly patients in general. Clinically significant mental status changes associated with anticholinergic agents can range from mild cognitive impairment to delirium, and patients with Alzheimer's disease and other dementia are especially sensitive.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2551"
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
    "id": "ddi-pair-0071",
    "drugAId": "drug-hydroxychloroquine",
    "drugBId": "drug-amiodarone",
    "drugAName": "Hydroxychloroquine",
    "drugBName": "Amiodarone",
    "severity": "Major",
    "mechanism": "Efek aditif pemanjangan interval QT kardiak.",
    "clinicalOutcome": "Peningkatan drastis risiko aritmia ventrikel polimorfik (TdP) dan henti jantung mendadak.",
    "management": "HINDARI kombinasi ini. Lakukan pemantauan EKG berkala jika kombinasi tidak dapat dihindari.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-21543",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Class IA (e.g., disopyramide, quinidine, procainamide) and class III (e.g., amiodarone, dofetilide, sotalol) antiarrhythmic agents can cause dose-related prolongation of the QT interval. Theoretically, coadministration with other agents that can prolong the QT interval may result in additive effects and increased risk of ventricular arrhythmias including torsade de pointes and sudden death.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #363"
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
    "id": "ddi-pair-0072",
    "drugAId": "drug-dapagliflozin",
    "drugBId": "drug-furosemide",
    "drugAName": "Dapagliflozin",
    "drugBName": "Furosemide",
    "severity": "Moderate",
    "mechanism": "Efek aditif diuresis osmotik (oleh SGLT2i) dan inhibisi reabsorpsi natrium loop Henle (oleh furosemide).",
    "clinicalOutcome": "Deplesi volume intravaskular simtomatik, hipotensi ortostatik berat, dan gagal ginjal akut prerenal.",
    "management": "Pantau status hidrasi, tekanan darah, dan pertimbangkan penyesuaian penurunan dosis furosemide saat inisiasi dapagliflozin.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-15527",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Sodium-glucose co-transporter 2 (SGLT-2) inhibitors may potentiate the diuretic and hypotensive effects of loop diuretics. Inhibition of glucose and sodium co-transport produces mild diuresis and transient natriuresis, resulting in intravascular volume contraction. Volume depletion-related adverse reactions including hypotension, postural dizziness, orthostatic hypotension, syncope, dehydration, acute kidney injury, and renal function impairment can occur after initiating treatment with SGLT-2 inhibitors, and the risk is increased with concomitant use of diuretics.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2128"
    ],
    "alternativeOptionsA": [
      "Linagliptin",
      "Metformin",
      "Sitagliptin"
    ],
    "alternativeOptionsB": [
      "Indapamide",
      "Torsemide",
      "Eplerenone"
    ]
  },
  {
    "id": "ddi-pair-0073",
    "drugAId": "drug-ketamine",
    "drugBId": "drug-morphine",
    "drugAName": "Ketamine",
    "drugBName": "Morphine",
    "severity": "Major",
    "mechanism": "Efek sinergis potensiasi depresi sistem saraf pusat dan penekanan refleks respirasi di batang otak.",
    "clinicalOutcome": "Depresi pernapasan berat, hipoksia, bradikardia, hipotensi, dan risiko henti napas (apnea).",
    "management": "Wajib dilakukan pemantauan saturasi oksigen (SpO2), laju napas, dan tekanan darah secara kontinu. Turunkan dosis analgesik opioid saat dikombinasikan dengan ketamine.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-000073"
  },
  {
    "id": "ddi-pair-0074",
    "drugAId": "drug-codeine",
    "drugBId": "drug-fluoxetine",
    "drugAName": "Codeine",
    "drugBName": "Fluoxetine",
    "severity": "Moderate",
    "mechanism": "Fluoxetine adalah inhibitor poten isoenzim CYP2D6 yang memblokade konversi bioaktivasi pro-drug codeine menjadi metabolit aktifnya (morphine).",
    "clinicalOutcome": "Kegagalan terapi analgesik secara total (loss of analgesia) dan akumulasi metabolit codeine yang tidak efektif.",
    "management": "Hindari kombinasi. Pilih analgesik opioid yang tidak bergantung pada bioaktivasi CYP2D6 (seperti Morfin langsung) atau gunakan antidepresan alternatif non-CYP2D6 (seperti Sertraline/Escitalopram).",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-5162",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Drugs that are inhibitors of CYP450 2D6 may interfere with the analgesic effect of codeine. The mechanism is decreased in vivo conversion of codeine to morphine, a metabolic reaction mediated by CYP450 2D6.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2717"
    ],
    "alternativeOptionsA": [
      "Paracetamol",
      "Gabapentin",
      "NSAID Topikal"
    ],
    "alternativeOptionsB": [
      "Sertraline",
      "Escitalopram",
      "Mirtazapine",
      "Bupropion"
    ]
  },
  {
    "id": "ddi-pair-0075",
    "drugAId": "drug-pseudoephedrine",
    "drugBId": "drug-bisoprolol",
    "drugAName": "Pseudoephedrine",
    "drugBName": "Bisoprolol",
    "severity": "Moderate",
    "mechanism": "Antagonisme farmakodinamik: efek stimulasi alfa-adrenergik pseudoephedrine menentang efek penurunan tekanan darah dan bradikardia dari beta-blocker.",
    "clinicalOutcome": "Penurunan kontrol tekanan darah, peningkatan tekanan darah paradoksal, dan palpitasi.",
    "management": "Hindari dekongestan simpatomimetik oral pada pasien hipertensi yang sedang diterapi beta-blocker. Gunakan nasal saline spray atau antihistamin non-sedatif.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-7558",
    "mechanismCategory": "Antagonism",
    "ddinterOriginalText": "Sympathomimetic agents, such as pseudoephedrine, may antagonize the effects of antihypertensives that interfere with sympathetic activity, such as alpha- and beta-adrenergic blocking agents. In contrast, alpha- and beta-blockers may diminish the vasoconstrictive effects of sympathomimetics. The mechanism of this interaction has not been reported, but may involve competitive inhibition at the adrenergic receptor. Severe hypertension may occur in patients receiving beta-blockers.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3630"
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
    "id": "ddi-pair-0076",
    "drugAId": "drug-phenobarbital",
    "drugBId": "drug-warfarin",
    "drugAName": "Phenobarbital",
    "drugBName": "Warfarin",
    "severity": "Major",
    "mechanism": "Phenobarbital menginduksi secara kuat enzim mikrosomal hepar CYP2C9 dan CYP3A4, mempercepat klirens metabolisme warfarin.",
    "clinicalOutcome": "Penurunan drastis nilai INR dan hilangnya efek antikoagulasi, memicu risiko pembentukan trombus/stroke iskemik fatal.",
    "management": "Wajib dilakukan penyesuaian peningkatan dosis warfarin (seringkali 50-100%) dengan pemantauan serial nilai INR setiap 3-5 hari saat inisiasi atau penghentian phenobarbital.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-40049",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Barbiturates reduce the effects of oral anticoagulants by inducing their hepatic metabolism. Anticoagulant dosage requirements may be increased by 30% to 60%. After the barbiturate is discontinued, excessive anticoagulation and bleeding may occur if the anticoagulant dose is not reduced.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3425"
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
    "id": "ddi-pair-0077",
    "drugAId": "drug-phenobarbital",
    "drugBId": "drug-rivaroxaban",
    "drugAName": "Phenobarbital",
    "drugBName": "Rivaroxaban",
    "severity": "Major",
    "mechanism": "Induksi ganda CYP3A4 dan P-glycoprotein (P-gp) oleh phenobarbital menurunkan bioavailabilitas dan konsentrasi plasma rivaroxaban hingga > 50%.",
    "clinicalOutcome": "Kegagalan proteksi antikoagulan DOAC memicu tromboemboli vena dan stroke embolik.",
    "management": "HINDARI penggunaan bersamaan DOAC dengan phenobarbital. Gunakan antikoagulan alternatif (LMWH/Heparin terukur) atau ganti antikonvulsan non-inducer (Levetiracetam).",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-39983",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with potent inducers of CYP450 3A4 may significantly decrease the plasma concentrations of rivaroxaban, which is a substrate of the isoenzyme.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4498"
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
    "id": "ddi-pair-0078",
    "drugAId": "drug-trihexyphenidyl",
    "drugBId": "drug-donepezil",
    "drugAName": "Trihexyphenidyl",
    "drugBName": "Donepezil",
    "severity": "Moderate",
    "mechanism": "Antagonisme farmakodinamik langsung antara agen antikolinergik sentral (trihexyphenidyl) dan inhibitor asetilkolinesterase (donepezil).",
    "clinicalOutcome": "Pembatalan efikasi terapi demensia Alzheimer dan percepatan kemunduran fungsi kognitif.",
    "management": "KONTRAINDIKASI FARMAKOTERAPI. Jangan meresepkan antikolinergik bersama agen pro-kolinergik demensia.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-90455",
    "mechanismCategory": "Antagonism",
    "ddinterOriginalText": "Acetylcholinesterase inhibitors (e.g., donepezil, galantamine, physostigmine, rivastigmine, tacrine) may antagonize the effects of anticholinergic agents and other agents that rely partially on their anticholinergic activity for therapeutic effects (e.g., some antiparkinsonian and antiemetic/antivertigo agents; class IA antiarrhythmics). By inhibiting the metabolism of acetylcholine, more of the neurotransmitter may be available to compete at muscarinic receptors, the site of action of anticholinergic agents. Conversely, anticholinergic agents may negate the already small pharmacologic benefits of acetylcholinesterase inhibitors in the treatment of dementia. These agents may also adversely affect elderly patients in general. Clinically significant mental status changes associated with anticholinergic agents can range from mild cognitive impairment to delirium, and patients with Alzheimer's disease and other dementia are especially sensitive.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3117"
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
    "id": "ddi-pair-0079",
    "drugAId": "drug-ketoprofen",
    "drugBId": "drug-captopril",
    "drugAName": "Ketoprofen",
    "drugBName": "Captopril",
    "severity": "Moderate",
    "mechanism": "Inhibisi prostaglandin vasodilator ginjal oleh ketoprofen menurunkan laju filtrasi glomerulus dan meniadakan efek hipotensif ACEI.",
    "clinicalOutcome": "Hipertensi tidak terkontrol, retensi cairan, dan peningkatan risiko Gagal Ginjal Akut (AKI) terutama pada lansia dan dehidrasi.",
    "management": "Pantau tekanan darah dan fungsi ginjal berkala. Gunakan pereda nyeri alternatif seperti Parasetamol bila memungkinkan.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-55946",
    "mechanismCategory": "Antagonism",
    "ddinterOriginalText": "Nonsteroidal anti-inflammatory drugs (NSAIDs) may attenuate the antihypertensive effects of ACE inhibitors. The proposed mechanism is NSAID-induced inhibition of renal prostaglandin synthesis, which results in unopposed pressor activity producing hypertension. In addition, NSAIDs can cause fluid retention, which also affects blood pressure. Concomitant use of NSAIDs and ACE inhibitors may also cause deterioration in renal function, particularly in patients who are elderly or volume-depleted (including those on diuretic therapy) or have compromised renal function. Acute renal failure may occur, although effects are usually reversible. Chronic use of NSAIDs alone may be associated with renal toxicities, including elevations in serum creatinine and BUN, tubular necrosis, glomerulitis, renal papillary necrosis, acute interstitial nephritis, nephrotic syndrome, and renal failure.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3643"
    ],
    "alternativeOptionsA": [
      "Paracetamol",
      "Tramadol",
      "Celecoxib",
      "Topical NSAID (Gel/Patch)"
    ],
    "alternativeOptionsB": [
      "Candesartan",
      "Valsartan",
      "Telmisartan",
      "Amlodipine"
    ]
  },
  {
    "id": "ddi-pair-0080",
    "drugAId": "drug-clindamycin",
    "drugBId": "drug-erythromycin",
    "drugAName": "Clindamycin",
    "drugBName": "Erythromycin",
    "severity": "Moderate",
    "mechanism": "Kompetisi ikatan pada subunit ribosom 50S bakteri yang sama menyebabkan antagonisme antibakterial timbal balik.",
    "clinicalOutcome": "Penurunan efektivitas antibiotik dan kegagalan eliminasi infeksi bakteri.",
    "management": "HINDARI kombinasi bersamaan antibiotik makrolida dan lincosamide.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-69456",
    "mechanismCategory": "Distribution",
    "ddinterOriginalText": "Lincomycin derivatives and erythromycin have antagonistic effects in vitro. The mechanism is competitive binding of the 50S ribosomal subunit.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #5165"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Azithromycin",
      "Cefixime",
      "Amoxicillin-Clavulanate"
    ]
  },
  {
    "id": "ddi-pair-0081",
    "drugAId": "drug-glibenclamide",
    "drugBId": "drug-ciprofloxacin",
    "drugAName": "Glibenclamide",
    "drugBName": "Ciprofloxacin",
    "severity": "Major",
    "mechanism": "Ciprofloxacin menghambat metabolisme glibenclamide via CYP2C9 dan memiliki efek stimulasi langsung sekresi insulin sel beta pankreas.",
    "clinicalOutcome": "Hipoglikemia berat refrakter, koma hipoglikemik, dan kerusakan otak anoksik.",
    "management": "HINDARI kombinasi. Gunakan antibiotik alternatif non-kuinolon atau pantau glukosa darah ketat dan turunkan dosis glibenclamide.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-66059",
    "mechanismCategory": "Antagonism",
    "ddinterOriginalText": "Quinolone antibiotics may interfere with the therapeutic effects of insulin and other antidiabetic agents. The use of quinolones has been associated with disturbances in blood glucose homeostasis possibly stemming from effects on pancreatic beta cell ATP-sensitive potassium channels that regulate insulin secretion. Both hyperglycemia and hypoglycemia have been reported, usually in diabetic patients receiving concomitant treatment with an oral hypoglycemic agent or insulin. Although hyperglycemia is significantly more common and infection itself may be an underlying risk factor, hypoglycemia may cause greater morbidity and mortality.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4802"
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
    "id": "ddi-pair-0082",
    "drugAId": "drug-pethidine",
    "drugBId": "drug-fluoxetine",
    "drugAName": "Pethidine",
    "drugBName": "Fluoxetine",
    "severity": "Major",
    "mechanism": "Pethidine adalah inhibitor reuptake serotonin lemah yang bila dikombinasikan dengan SSRI atau MAOI memicu akumulasi serotonin masif di sinaps SSP.",
    "clinicalOutcome": "Sindrom Serotonin mematikan (hiperpireksia, instabilitas otonom, kekakuan otot, koma).",
    "management": "KONTRAINDIKASI BERSAMAAN. Jangan memberikan pethidine pada pasien yang sedang mengonsumsi antidepresan serotonergik. Gunakan Morfin atau Fentanyl sebagai analgesik.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-104730",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Concomitant use of agents with serotonergic activity such as serotonin reuptake inhibitors, monoamine oxidase inhibitors, tricyclic antidepressants, 5-HT1 receptor agonists, ergot alkaloids, cyclobenzaprine, lithium, St. John's wort, phenylpiperidine opioids, dextromethorphan, and tryptophan may potentiate the risk of serotonin syndrome, which is a rare but serious and potentially fatal condition thought to result from hyperstimulation of brainstem 5-HT1A and 2A receptors. Symptoms of the serotonin syndrome may include mental status changes such as irritability, altered consciousness, confusion, hallucination, and coma; autonomic dysfunction such as tachycardia, hyperthermia, diaphoresis, shivering, blood pressure lability, and mydriasis; neuromuscular abnormalities such as hyperreflexia, myoclonus, tremor, rigidity, and ataxia; and gastrointestinal symptoms such as abdominal cramping, nausea, vomiting, and diarrhea.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4337"
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
    "id": "ddi-pair-0083",
    "drugAId": "drug-lidocaine",
    "drugBId": "drug-amiodarone",
    "drugAName": "Lidocaine",
    "drugBName": "Amiodarone",
    "severity": "Moderate",
    "mechanism": "Efek elektrofisiologis aditif pada konduksi intrakardiak dan inhibisi metabolisme lidocaine oleh amiodarone (CYP3A4/CYP1A2).",
    "clinicalOutcome": "Bradikardia kardiak berat, henti sinus, blok atrioventrikular total, dan peningkatan risiko neurotoksisitas lidocaine (kejang).",
    "management": "Pantau EKG kontinu dan kadar lidocaine plasma. Gunakan dosis lidocaine lebih rendah jika kombinasi diperlukan.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-3295",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Limited data suggest additive depressive effects of amiodarone and lidocaine on the sinoatrial node. The proposed mechanism is amiodarone inhibition of lidocaine metabolism via CYP450 3A4, although pharmacokinetic studies have found modest (approximately 20% decrease in clearance) to no effect of amiodarone on lidocaine metabolism.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #5453"
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
    "id": "ddi-pair-0084",
    "drugAId": "drug-sufentanil",
    "drugBId": "drug-midazolam",
    "drugAName": "Sufentanil",
    "drugBName": "Midazolam",
    "severity": "Major",
    "mechanism": "Sinergisme farmakodinamik mendalam antara agonis opioid kuat dan modulator alosterik positif GABAA.",
    "clinicalOutcome": "Depresi pernapasan berat, apnea, hipotensi sirkulasi akut, dan kehilangan kesadaran berkepanjangan.",
    "management": "Lakukan titrasi dosis bertahap ke bawah (turunkan dosis kedua obat hingga 50%), wajib sediakan ventilasi mekanik dan antidot Nalokson/Flumazenil.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-112903",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Concomitant use of opioids with benzodiazepines may result in profound sedation, respiratory depression, coma, and death. The use of benzodiazepines with sufentanil during induction has been reported to decrease mean arterial pressure and systemic vascular resistance. The mechanism appears to be an indirect effect on the autonomic nervous system.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2140"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Buspirone",
      "Melatonin",
      "Hydroxyzine"
    ]
  },
  {
    "id": "ddi-pair-0085",
    "drugAId": "drug-calcium-gluconate",
    "drugBId": "drug-digoxin",
    "drugAName": "Calcium Gluconate",
    "drugBName": "Digoxin",
    "severity": "Major",
    "mechanism": "Peningkatan kalsium intraseluler miokardium yang cepat memperparah toksisitas digitalis via influks kalsium berlebih.",
    "clinicalOutcome": "Aritmia ventrikel fatal yang tidak responsif dan kekakuan kontraksi sistolik ireversibel ('stone heart').",
    "management": "KONTRAINDIKASI PEMBERIAN CEPAT IV kalsium pada pasien intoksikasi digoxin. Jika terpaksa untuk hiperkalemia berat, berikan infus kalsium sangat lambat (> 30 menit) di bawah monitor EKG ketat.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-86636",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "The administration of parenteral calcium preparations, particularly by rapid IV injection, may precipitate serious cardiac arrhythmias in digitalized patients. The mechanism is probably related to the additive or synergistic inotropic effects of calcium and digitalis glycosides on the myocardium.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #5029"
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
    "id": "ddi-pair-0086",
    "drugAId": "drug-halothane",
    "drugBId": "drug-epinephrine",
    "drugAName": "Halothane",
    "drugBName": "Epinephrine",
    "severity": "Major",
    "mechanism": "Halotan mensensitisasi secara sangat kuat reseptor adrenergik miokardium terhadap aksi aritmogenik katekolamin.",
    "clinicalOutcome": "Peningkatan drastis risiko Aritmia Ventrikel Berat, Fibrilasi Ventrikel (VF), dan Henti Jantung mendadak.",
    "management": "HINDARI infiltrasi epinefrin selama anestesi halotan. Jika mutlak diperlukan, batasi dosis epinefrin maksimal 1 mcg/kg BB dalam 10 menit.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-10013",
    "mechanismCategory": "Others",
    "ddinterOriginalText": "Rarely, the combination of epinephrine and some anesthetics has resulted in ventricular irritability, serious cardiac arrhythmias, or death. The halogenated anesthetics sensitize the heart to the arrhythmogenic effects of catecholamines.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1142"
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
    "id": "ddi-pair-0087",
    "drugAId": "drug-succinylcholine",
    "drugBId": "drug-halothane",
    "drugAName": "Succinylcholine",
    "drugBName": "Halothane",
    "severity": "Moderate",
    "mechanism": "Pemicu kombinasi klasik mutasi gen reseptor ryanodine (RYR1) yang memicu pelepasan kalsium tak terkendali dari retikulum sarkoplasma otot rangka.",
    "clinicalOutcome": "Hipertermia Maligna (Malignant Hyperthermia) akut mematikan (rigiditas otot rangka menyeluruh, hipertermia ekstrim > 41C, rhabdomyolysis, asidosis metabolik refrakter).",
    "management": "Hentikan segera seluruh agen anestesi volatil dan succinylcholine, hiperventilasi dengan O2 100%, berikan antidot Dantrolene IV segera (2.5 mg/kg BB) dan lakukan pendinginan aktif.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-109297",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Inhalation anesthetics may potentiate the effects of nondepolarizing muscle relaxants. Long-acting muscle relaxants such as pancuronium and d-tubocurarine are more affected than other agents.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #5366"
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
    "id": "ddi-pair-0088",
    "drugAId": "drug-thiopental",
    "drugBId": "drug-atracurium",
    "drugAName": "Thiopental Sodium",
    "drugBName": "Atracurium Besylate",
    "severity": "Major",
    "mechanism": "Inkompatibilitas fisikokimia larutan: Thiopental yang sangat basa (pH ~10.5) berinteraksi dengan atracurium yang asam (pH ~3.5) membentuk endapan kristal garam tak larut di dalam kateter IV.",
    "clinicalOutcome": "Oklusi kateter intravena dan emboli endapan kristal mikro intravaskular.",
    "management": "JANGAN PERNAH mencampurkan thiopental dan atracurium dalam spuit atau selang infus yang sama. Bilas selang IV (flush) dengan NaCl 0.9% di antara pemberian kedua obat.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-000088"
  },
  {
    "id": "ddi-pair-0089",
    "drugAId": "drug-diphenhydramine",
    "drugBId": "drug-alprazolam",
    "drugAName": "Diphenhydramine",
    "drugBName": "Alprazolam",
    "severity": "Moderate",
    "mechanism": "Efek sinergis potensiasi penekanan sistem saraf pusat via blokade histaminergik H1 sentral dan penguatan GABAA.",
    "clinicalOutcome": "Sedasi mendalam, penurunan kesadaran berat, gangguan psikomotorik parah, dan risiko depresi respirasi.",
    "management": "Hindari konsumsi bersamaan antihistamin sedatif dengan benzodiazepine.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-19143",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Central nervous system- and/or respiratory-depressant effects may be additively or synergistically increased in patients taking multiple drugs that cause these effects, especially in elderly or debilitated patients.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4880"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Buspirone",
      "Melatonin",
      "Hydroxyzine"
    ]
  },
  {
    "id": "ddi-pair-0090",
    "drugAId": "drug-mebendazole",
    "drugBId": "drug-metronidazole",
    "drugAName": "Mebendazole",
    "drugBName": "Metronidazole",
    "severity": "Moderate",
    "mechanism": "Interaksi metabolik dan imunologis yang memicu reaksi dermatologis berat.",
    "clinicalOutcome": "Peningkatan signifikan risiko Sindrom Stevens-Johnson (SJS) dan Toxic Epidermal Necrolysis (TEN) yang mengancam jiwa.",
    "management": "KONTRAINDIKASI BERSAMAAN. Jangan meresepkan mebendazole bersama metronidazole. Gunakan Pyrantel Pamoate atau Albendazole sebagai alternatif antelmintik.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-44777",
    "mechanismCategory": "Others",
    "ddinterOriginalText": "Limited clinical data have suggested that coadministration of metronidazole and mebendazole may be associated with Stevens-Johnson syndrome/toxic epidermal necrolysis. The mechanism is unknown.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #5458"
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
    "id": "ddi-pair-0091",
    "drugAId": "drug-ketoconazole",
    "drugBId": "drug-simvastatin",
    "drugAName": "Ketoconazole",
    "drugBName": "Simvastatin",
    "severity": "Major",
    "mechanism": "Ketoconazole adalah inhibitor poten CYP3A4 yang memblokade metabolisme simvastatin, meningkatkan AUC statin hingga > 1500%.",
    "clinicalOutcome": "Peningkatan drastis risiko Rabdomiolisis akut, miopati berat, mioglobinuria, dan Gagal Ginjal Akut.",
    "management": "KONTRAINDIKASI MUTLAK. Hentikan simvastatin selama terapi antijamur azole sistemik atau gunakan pravastatin / rosuvastatin dosis rendah.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-166144",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with potent inhibitors of CYP450 3A4 may significantly increase the plasma concentrations of lovastatin and simvastatin as well as their pharmacologically active metabolites, all of which are primarily metabolized by the isoenzyme. The interaction has been reported with potent CYP450 3A4 inhibitors such as azole antifungal agents, macrolide antibiotics, HIV protease inhibitors, and nefazodone. Clinically, high levels of HMG-CoA reductase inhibitory activity in plasma may be associated with an increased risk of musculoskeletal toxicity. Myopathy manifested as muscle pain and/or weakness associated with grossly elevated creatine kinase exceeding ten times the upper limit of normal has been reported occasionally. Rhabdomyolysis has also occurred rarely, which may be accompanied by acute renal failure secondary to myoglobinuria and may result in death.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2114"
    ],
    "alternativeOptionsA": [
      "Fluconazole",
      "Terbinafine",
      "Nystatin",
      "Micafungin"
    ],
    "alternativeOptionsB": [
      "Rosuvastatin",
      "Pravastatin",
      "Pitavastatin",
      "Ezetimibe"
    ]
  },
  {
    "id": "ddi-pair-0092",
    "drugAId": "drug-miconazole",
    "drugBId": "drug-warfarin",
    "drugAName": "Miconazole",
    "drugBName": "Warfarin",
    "severity": "Major",
    "mechanism": "Miconazole (bahkan dalam bentuk gel oral) diabsorpsi secara sistemik dan menghambat kuat isoenzim CYP2C9 yang memetabolisme S-warfarin.",
    "clinicalOutcome": "Lonjakan nilai INR ekstrem (INR > 10.0) dan pendarahan masif yang mengancam jiwa (Black Box Warning).",
    "management": "KONTRAINDIKASI BERSAMAAN. Jangan pernah memberikan miconazole oral gel pada pasien dalam terapi warfarin. Gunakan Nystatin oral drop sebagai alternatif aman.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-122493",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Systemically or even topically administered miconazole may increase the plasma concentrations and hypoprothrombinemic effect of warfarin. The proposed mechanism is miconazole inhibition of CYP450 2C9, the isoenzyme responsible for the metabolic clearance of the more active S(-) enantiomer of warfarin.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2386"
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
    "id": "ddi-pair-0093",
    "drugAId": "drug-amphotericin-b",
    "drugBId": "drug-vancomycin",
    "drugAName": "Amphotericin B",
    "drugBName": "Vancomycin",
    "severity": "Moderate",
    "mechanism": "Efek sinergis nefrotoksik aditif pada sel tubulus ginjal dan vasokonstriksi arteriol aferen ginjal.",
    "clinicalOutcome": "Gagal Ginjal Akut (Acute Kidney Injury), nekrosis tubular akut, dan penurunan drastis klirens kreatinin.",
    "management": "Hindari kombinasi jika memungkinkan. Jika mutlak diperlukan, gunakan sediaan Liposomal Amphotericin B (AmBisome), hidrasi saline agresif, dan pantau fungsi ginjal serial harian.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-20371",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Increased adverse effects are possible when glycopeptide antibiotics are administered concomitantly with other potentially nephrotoxic and neurotoxic drugs.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2691"
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
    "id": "ddi-pair-0094",
    "drugAId": "drug-isoniazid",
    "drugBId": "drug-paracetamol",
    "drugAName": "Isoniazid",
    "drugBName": "Paracetamol",
    "severity": "Moderate",
    "mechanismCategory": "Metabolism",
    "mechanism": "Isoniazid dapat meningkatkan potensi hepatotoksisitas parasetamol melalui induksi metabolisme sitokrom CYP2E1 menjadi metabolit reaktif toksik (NAPQI) selama terapi bersamaan, atau peningkatan metabolisme transien setelah penghentian isoniazid. Kedua obat secara individual memiliki profil hepatotoksik.",
    "clinicalOutcome": "Peningkatan enzim transaminase hepar (SGOT/SGPT), peningkatan risiko cedera hati akut (hepatotoksisitas) jika dosis parasetamol tidak dibatasi.",
    "management": "Penggunaan parasetamol secara bersamaan harus dibatasi (dianjurkan maksimal <= 2 g/hari). Pantau bukti klinis dan laboratorium terhadap hepatotoksisitas secara berkala. Hentikan kedua obat jika terdapat bukti kerusakan hati. Aspirin atau agen antiinflamasi nonsteroid (NSAID) dapat menjadi alternatif yang lebih aman.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)",
    "ddinterPairId": "DDInter14 and DDInter986",
    "ddinterOriginalText": "Some reports have suggested that isoniazid may increase the potential hepatotoxicity of acetaminophen. The mechanism may be related to induction of CYP450 2E1 metabolism of acetaminophen to toxic metabolites during concurrent administration, or transient increased metabolism of acetaminophen after discontinuation of isoniazid. Both isoniazid and acetaminophen have individually been associated with hepatotoxicity.",
    "ddinterOriginalManagement": "Until more information is available, concurrent acetaminophen use should be limited. Close attention should be paid to clinical and laboratory evidence of hepatotoxicity. Both drugs should be discontinued if evidence of hepatotoxicity is observed. Aspirin or nonsteroidal inflammatory agents may be safer alternatives.",
    "alternativeOptionsA": [
      "Capreomycin",
      "Rifabutin",
      "Rifamycin",
      "Ethionamide",
      "Cycloserine",
      "Rifapentine"
    ],
    "alternativeOptionsB": [
      "Salicylic acid",
      "Diflunisal",
      "Salsalate",
      "Ibuprofen",
      "Tramadol"
    ],
    "references": [
      "[1] Murphy R, Swartz R, Watkins PB \"Severe acetaminophen toxicity in a patient receiving isoniazid.\" Ann Intern Med 113 (1990): 799-800",
      "[2] Nolan CM, Sandblom RE, Thummel KE, Slattery JT, Nelson SD \"Hepatotoxicity associated with acetaminophen usage in patients receiving multiple drug therapy for tuberculosis.\" Chest 105 (1994): 408-11",
      "[3] Crippin JS \"Acetaminophen hepatotoxicity: potentiation by isoniazid.\" Am J Gastroenterol 88 (1993): 590-2",
      "[4] Moulding TS, Redeker AG, Kanel GC \"Acetaminophen, isoniazid, and hepatic toxicity.\" Ann Intern Med 114 (1991): 431",
      "[5] Epstein MM, Nelson SD, Slattery JT, Kalhorn TF, Wall RA, Wright JM \"Inhibition of the metabolism of paracetamol by isoniazid.\" Br J Clin Pharmacol 31 (1991): 139-42",
      "[6] Dumortini A \"Isoniazid, tricyclics and the 'cheese reaction'.\" Int Clin Psychopharmacol 10 (1995): 197-8",
      "[7] Cerner Multum, Inc. \"UK Summary of Product Characteristics.\" 0 0",
      "[8] Self TH, Chrisman CR, Baciewicz AM, Bronze MS \"Isoniazid drug and food interactions.\" Am J Med Sci 317 (1999): 304-11",
      "[9] Uragoda CG, Kottegoda SR \"Adverse reactions to isoniazid on ingestion of fish with a high histamine content.\" Tubercle 58 (1977): 83-9",
      "[10] Product Information. INH (isoniazid). Ciba Pharmaceuticals, Summit, NJ.",
      "[11] Smith CK, Durack DT \"Isoniazid and reaction to cheese.\" Ann Intern Med 88 (1978): 520-1"
    ]
  },
  {
    "id": "ddi-pair-0095",
    "drugAId": "drug-efavirenz",
    "drugBId": "drug-voriconazole",
    "drugAName": "Efavirenz",
    "drugBName": "Voriconazole",
    "severity": "Major",
    "mechanism": "Efavirenz menginduksi metabolisme voriconazole secara kuat via CYP2C19/CYP3A4 sementara voriconazole menghambat eliminasi efavirenz.",
    "clinicalOutcome": "Kadar voriconazole anjlok > 70% (kegagalan terapi jamur) dan konsentrasi efavirenz melonjak > 40% (toksisitas neuropsikiatri parah).",
    "management": "KONTRAINDIKASI PADA DOSIS STANDAR. Jika kombinasi wajib, tingkatkan dosis voriconazole menjadi 400 mg q12h dan turunkan efavirenz menjadi 300 mg q24h.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-96317",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration of efavirenz and voriconazole may significantly reduce the plasma concentrations of voriconazole and increase the plasma concentrations of efavirenz. The mechanism involves efavirenz induction of voriconazole metabolism via CYP450 2C19, 2C9 and 3A4, and voriconazole inhibition of efavirenz metabolism via CYP450 3A4.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #5146"
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
      "Fluconazole",
      "Terbinafine",
      "Nystatin",
      "Micafungin"
    ]
  },
  {
    "id": "ddi-pair-0096",
    "drugAId": "drug-tenofovir",
    "drugBId": "drug-diclofenac-sodium",
    "drugAName": "Tenofovir Disoproxil Fumarate",
    "drugBName": "Diclofenac Sodium",
    "severity": "Major",
    "mechanism": "NSAID mengurangi aliran darah perfusi ginjal via inhibisi prostaglandin, memperparah akumulasi tenofovir di sel tubulus proksimal ginjal.",
    "clinicalOutcome": "Disfungsi tubulus ginjal akut (Sindrom Fanconi terinduksi obat) dan penurunan laju filtrasi glomerulus (eGFR).",
    "management": "Hindari penggunaan rutin/jangka panjang NSAID pada pasien dengan terapi ARV berbasis Tenofovir (TDF). Pantau kreatinin dan fosfat serum.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-261318",
    "mechanismCategory": "Excretion",
    "ddinterOriginalText": "Coadministration of tenofovir with other nephrotoxic agents may increase the risk of renal impairment due to additive effects on the kidney.  Additionally, renal impairment secondary to the use of these agents may reduce the clearance of tenofovir, which is primarily eliminated by a combination of glomerular filtration and active tubular secretion.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #8358"
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
      "Paracetamol",
      "Tramadol",
      "Celecoxib",
      "Topical NSAID (Gel/Patch)"
    ]
  },
  {
    "id": "ddi-pair-0097",
    "drugAId": "drug-rifampicin",
    "drugBId": "drug-dolutegravir",
    "drugAName": "Rifampicin",
    "drugBName": "Dolutegravir",
    "severity": "Major",
    "mechanism": "Rifampicin adalah penginduksi poten enzim UGT1A1 dan sitokrom CYP3A4 hepar yang menurunkan konsentrasi palung (trough) dolutegravir sebesar 75%.",
    "clinicalOutcome": "Kegagalan supresi virologis HIV dan timbulnya mutasi resistensi integrase inhibitor.",
    "management": "Wajib meningkatkan dosis Dolutegravir menjadi 50 mg DUA KALI SEHARI (dua kali lipat dosis standar) selama terapi bersama Rifampisin dan hingga 2 minggu pasca penghentian Rifampisin.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-168",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with potent inducers of UGT1A and CYP450 3A4 isoenzymes such as rifampin may significantly decrease the plasma concentrations of dolutegravir, which is primarily metabolized by UGT1A1 with some contribution from CYP450 3A4. Dolutegravir is also a substrate of UGT1A3, UGT1A9, and P-glycoprotein in vitro.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #929"
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
    "id": "ddi-pair-0098",
    "drugAId": "drug-rifampicin",
    "drugBId": "drug-nevirapine",
    "drugAName": "Rifampicin",
    "drugBName": "Nevirapine",
    "severity": "Major",
    "mechanism": "Induksi kuat CYP3A4 dan CYP2B6 oleh Rifampisin menurunkan AUC plasma Nevirapine sebesar 40-60%.",
    "clinicalOutcome": "Kadar ARV subterapeutik memicu resistensi silang NNRTI dan kegagalan terapi HIV.",
    "management": "HINDARI kombinasi Nevirapine dengan Rifampisin. Gunakan Efavirenz (dosis standar 600 mg) atau Dolutegravir dosis ganda (50 mg BID) sebagai paduan lini pertama TB-HIV.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-143760",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with rifampin may substantially decrease the plasma concentrations of nevirapine, although a few studies have suggested that the combination may be used effectively without dosage adjustments. The mechanism is rifampin induction of nevirapine metabolism via CYP450 3A4.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2312"
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
    "id": "ddi-pair-0099",
    "drugAId": "drug-rifampicin",
    "drugBId": "drug-clarithromycin",
    "drugAName": "Rifampicin",
    "drugBName": "Clarithromycin",
    "severity": "Moderate",
    "mechanism": "Rifampisin menginduksi secara masif metabolisme Clarithromycin via CYP3A4, menurunkan kadar serum Clarithromycin utuh hingga > 80%.",
    "clinicalOutcome": "Kegagalan terapi infeksi mikobakterial non-tuberkulosis (MAC) atau infeksi saluran napas bakterial.",
    "management": "Hindari peresepan bersamaan. Gunakan Azithromycin sebagai alternatif makrolida karena tidak dimetabolisme secara signifikan oleh isoenzim sitokrom P450.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-68045",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "The coadministration of clarithromycin and rifabutin at normally recommended dosages has been reported to have resulted in significantly altered pharmacokinetics for both drugs. This bidirectional interaction is consistent with rifabutin's cumulative inducing effect over time on the CYP450 enzymatic pathway as well as clarithromycin's immediate inhibiting effect on the pathway. Other macrolide antibiotics may interact in a similar manner with rifamycins.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1823"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Azithromycin",
      "Cefixime",
      "Amoxicillin-Clavulanate"
    ]
  },
  {
    "id": "ddi-pair-0100",
    "drugAId": "drug-zidovudine",
    "drugBId": "drug-co-trimoxazole",
    "drugAName": "Zidovudine",
    "drugBName": "Co-Trimoxazole",
    "severity": "Major",
    "mechanism": "Efek aditif supresi sumsum tulang (mielosupresi) antara Zidovudine (inhibisi eritropoiesis) dan Trimetoprim-Sulfametoksazol (antagonisme folat).",
    "clinicalOutcome": "Anemia berat yang mengancam jiwa (Hb < 6.5 g/dL), leukopenia, dan neutropenia berat.",
    "management": "Lakukan pemantauan Darah Lengkap (DPL) rutin tiap 2 minggu pada 2 bulan pertama terapi kombinasi. Jika anemia berat terjadi, ganti Zidovudine ke Tenofovir (TDF).",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-000100"
  },
  {
    "id": "ddi-pair-0101",
    "drugAId": "drug-tenofovir",
    "drugBId": "drug-acyclovir",
    "drugAName": "Tenofovir Disoproxil Fumarate",
    "drugBName": "Acyclovir",
    "severity": "Major",
    "mechanism": "Kompetisi sekresi aktif tubulus ginjal melalui transporter anion organik (OAT1/OAT3) dan MRP4.",
    "clinicalOutcome": "Peningkatan konsentrasi serum kedua obat memicu risiko Toksisitas Ginjal Akut (Acute Tubular Necrosis).",
    "management": "Pantau fungsi ginjal (kreatinin serum dan bersihan ginjal) berkala serta pastikan hidrasi cairan adekuat selama terapi asiklovir.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-239753",
    "mechanismCategory": "Excretion",
    "ddinterOriginalText": "Coadministration of tenofovir with other nephrotoxic agents may increase the risk of renal impairment due to additive effects on the kidney.  Additionally, renal impairment secondary to the use of these agents may reduce the clearance of tenofovir, which is primarily eliminated by a combination of glomerular filtration and active tubular secretion.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #8358"
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
    "id": "ddi-pair-0102",
    "drugAId": "drug-clopidogrel",
    "drugBId": "drug-omeprazole",
    "drugAName": "Clopidogrel",
    "drugBName": "Omeprazole",
    "severity": "Major",
    "mechanism": "Omeprazole menghambat secara kompetitif isoenzim CYP2C19 yang mutlak diperlukan untuk bioaktivasi pro-drug Clopidogrel menjadi metabolit aktif tiolnya.",
    "clinicalOutcome": "Penurunan pembentukan metabolit aktif clopidogrel hingga ~45%, memicu kegagalan antiagregasi platelet dan lonjakan risiko Trombosis Stent Jantung atau Serangan Jantung Ulang (FDA Black Box Warning).",
    "management": "HINDARI penggunaan Omeprazole atau Esomeprazole bersama Clopidogrel. Gunakan Pantoprazole sebagai gastroprotektor alternatif karena memiliki afinitas inhibisi CYP2C19 yang jauh lebih lemah.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-34095",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with proton pump inhibitors (PPIs) may reduce the cardioprotective effects of clopidogrel. The proposed mechanism is PPI inhibition of the CYP450 2C19-mediated metabolic bioactivation of clopidogrel.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3363"
    ],
    "alternativeOptionsA": [
      "Ticagrelor",
      "Cilostazol"
    ],
    "alternativeOptionsB": [
      "Pantoprazole",
      "Rabeprazole",
      "Famotidine",
      "Rebamipide"
    ]
  },
  {
    "id": "ddi-pair-0103",
    "drugAId": "drug-sildenafil",
    "drugBId": "drug-isosorbide-dinitrate",
    "drugAName": "Sildenafil",
    "drugBName": "Isosorbide Dinitrate",
    "severity": "Major",
    "mechanism": "Sinergisme jalur NO-cGMP: Isosorbide Dinitrate merangsang guanylyl cyclase menghasilkan cGMP, sementara Sildenafil menghambat enzim PDE-5 yang memecah cGMP.",
    "clinicalOutcome": "Akumulasi masif cGMP intraseluler yang memicu vasodilatasi sistemik ekstrem, Hipotensi Refrakter Fatal, Syok, Kolaps Kardiovaskular, dan Kematian Mendadak.",
    "management": "KONTRAINDIKASI MUTLAK. Jangan pernah memberikan nitrat organik dalam bentuk apa pun kepada pasien yang mengonsumsi inhibitor PDE-5 (wajib jeda minimal 24 jam untuk Sildenafil, 48 jam untuk Tadalafil).",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-120371",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Phosphodiesterase-5 (PDE5) inhibitors may potentiate the hypotensive effect of organic nitrates. Severe hypotension, syncope, or myocardial ischemia may result from use of the combination. The mechanism involves peripheral vasodilation secondary to enhanced levels of cyclic guanosine monophosphate (cGMP) in vascular smooth muscle cells, as PDE5 inhibitors prevent degradation of cGMP while nitrates promote its synthesis.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4919"
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
    "id": "ddi-pair-0104",
    "drugAId": "drug-digoxin",
    "drugBId": "drug-verapamil",
    "drugAName": "Digoxin",
    "drugBName": "Verapamil",
    "severity": "Moderate",
    "mechanism": "Verapamil menghambat transporter P-glycoprotein (P-gp) di membran kanalikuli renal dan bilier serta menurunkan klirens non-renal digoxin.",
    "clinicalOutcome": "Peningkatan konsentrasi digoxin plasma sebesar 50-75%, memicu intoksikasi digitalis akut (blok AV, bradikardia berat, takikardia ventrikel, gangguan visual xanthopsia).",
    "management": "Turunkan dosis Digoxin sebesar 50% saat inisiasi Verapamil dan periksa kadar palung Digoxin serum setelah 3-5 hari.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-75314",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Verapamil increases digoxin levels significantly in most patients. Verapamil decreases renal and extrarenal clearance of digoxin. Serum digoxin levels may increase by 50% to 75% during the first week of concomitant verapamil therapy. Increases may be larger in patients with hepatic cirrhosis. Digoxin and verapamil have additive effects in slowing AV conduction.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2749"
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
    "id": "ddi-pair-0105",
    "drugAId": "drug-digoxin",
    "drugBId": "drug-furosemide",
    "drugAName": "Digoxin",
    "drugBName": "Furosemide",
    "severity": "Moderate",
    "mechanism": "Furosemide meningkatkan ekskresi kalium dan magnesium di urin (hipokalemia & hipomagnesemia). Kalium rendah meningkatkan ikatan digoxin pada pompa Na+/K+-ATPase miokardium.",
    "clinicalOutcome": "Meningkatkan sensitivitas miokardium terhadap toksisitas Digoxin memicu Aritmia Ventrikel Fatal.",
    "management": "Pantau kadar kalium dan magnesium serum secara berkala. Pertahankan kalium serum >= 4.0 mEq/L, berikan suplemen kalium atau kombinasikan dengan Spironolakton jika diperlukan.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-15533",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Although diuretics and digitalis glycosides are frequently and appropriately used together, diuretic-induced hypokalemia and hypomagnesemia may predispose patients on digitalis to arrhythmias.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1264"
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
    "id": "ddi-pair-0106",
    "drugAId": "drug-spironolactone",
    "drugBId": "drug-captopril",
    "drugAName": "Spironolactone",
    "drugBName": "Captopril",
    "severity": "Major",
    "mechanism": "Kombinasi standar GDMT Gagal Jantung HFrEF. Efek aditif penghambatan sekresi aldosteron (oleh ACEI) dan blokade kompetitif reseptor aldosteron di tubulus distal (oleh Spironolakton).",
    "clinicalOutcome": "Kombinasi terarah pedoman klinis untuk menurunkan mortalitas gagal jantung. Terdapat potensi risiko hiperkalemia (K+ > 5.5 mEq/L) dan penurunan eGFR.",
    "management": "Kombinasi pilar utama GDMT HFrEF (RALES Trial). Gunakan dosis spironolakton rendah (12.5 - 25 mg/hari), hindari suplemen kalium tambahan, dan periksa kalium darah pada minggu ke-1, ke-4, dan berkala.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-56071",
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
    "id": "ddi-pair-0107",
    "drugAId": "drug-diltiazem",
    "drugBId": "drug-simvastatin",
    "drugAName": "Diltiazem",
    "drugBName": "Simvastatin",
    "severity": "Major",
    "mechanism": "Diltiazem adalah inhibitor moderat CYP3A4 yang melipatgandakan AUC Simvastatin hingga 5 kali lipat.",
    "clinicalOutcome": "Peningkatan tajam risiko Miositis, Rabdomiolisis, dan Gagal Ginjal Akut.",
    "management": "Batasi dosis Simvastatin maksimal 10 mg/hari jika dikombinasikan dengan Diltiazem, atau beralih ke Rosuvastatin / Pravastatin yang tidak bergantung pada metabolisme CYP3A4.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-58096",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with diltiazem may significantly increase the plasma concentrations of simvastatin and its active metabolite, simvastatin acid, and potentiate the risk of statin-induced myopathy. The proposed mechanism is diltiazem inhibition of simvastatin metabolism via intestinal and hepatic CYP450 3A4. The additional change in LDL cholesterol showed a nonsignificant positive correlation with the trough serum diltiazem concentration. In addition to enhanced pharmacologic effects, high levels of statin or HMG-CoA reductase inhibitory activity in plasma is also associated with an increased risk of musculoskeletal toxicity. Myopathy manifested as muscle pain and/or weakness associated with grossly elevated creatine kinase exceeding ten times the upper limit of normal has been reported occasionally. Rhabdomyolysis has also occurred rarely, which may be accompanied by acute renal failure secondary to myoglobinuria and may result in death. An analysis of the data from available clinical trials found that patients on diltiazem treated concomitantly with simvastatin 80 mg/day have a slightly increased risk (approximately 1% incidence) of myopathy. The risk in patients taking simvastatin 40 mg/day was not increased by concomitant diltiazem.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1649"
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
    "id": "ddi-pair-0108",
    "drugAId": "drug-lithium-carbonate",
    "drugBId": "drug-enalapril",
    "drugAName": "Lithium Carbonate",
    "drugBName": "Enalapril",
    "severity": "Major",
    "mechanism": "Penghambatan sintesis Angiotensin II oleh ACEI menurunkan laju filtrasi glomerulus dan meningkatkan reabsorpsi natrium serta lithium di tubulus proksimal.",
    "clinicalOutcome": "Kadar lithium serum meningkat 30-60% dalam beberapa hari hingga minggu, memicu Toksisitas Lithium Berat (ataksia, kebingungan, tremor kasar, kejang, koma).",
    "management": "Turunkan dosis Lithium sebesar 25-50% saat inisiasi ACEI dan lakukan pemantauan kadar serum lithium serial tiap minggu hingga stabil.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-98667",
    "mechanismCategory": "Excretion",
    "ddinterOriginalText": "Coadministration with angiotensin converting enzyme (ACE) inhibitors may increase serum lithium concentrations and the risk for lithium toxicity. Several mechanisms may be involved, one of which is reduced renal lithium clearance due to natriuresis secondary to the inhibition of aldosterone and angiotensin II by ACE inhibitors. The combination may also cause renal dysfunction secondary to volume depletion during chronic therapy, which can further impair lithium clearance. The interaction was suspected in cases of lithium toxicity that occurred up to several weeks after the initiation of ACE inhibitor therapy.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4459"
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
    "id": "ddi-pair-0109",
    "drugAId": "drug-methotrexate",
    "drugBId": "drug-ketoprofen",
    "drugAName": "Methotrexate",
    "drugBName": "Ketoprofen",
    "severity": "Major",
    "mechanism": "NSAID mengurangi aliran darah renal dan bersaing pada transporter OAT1/OAT3 tubulus ginjal, menghambat klirens ekskresi methotrexate.",
    "clinicalOutcome": "Akumulasi konsentrasi methotrexate serum yang mematikan, memicu Mielosupresi Pansitopenia Akut, Mukositis Parah, dan Nekrosis Epidermal.",
    "management": "KONTRAINDIKASI pada Methotrexate dosis onkologi (tinggi). Pada dosis rendah RA (7.5-25 mg/minggu), lakukan pengawasan ketat hitung darah lengkap dan fungsi ginjal.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-106145",
    "mechanismCategory": "Excretion",
    "ddinterOriginalText": "Coadministration with nonsteroidal anti-inflammatory drugs (NSAIDs) may increase the plasma concentrations and toxicities of methotrexate. The proposed mechanism is NSAID inhibition of the renal elimination of methotrexate and its metabolite, 7-hydroxymethotrexate, although data from pharmacokinetic studies are inconsistent and conflicting. Displacement of methotrexate binding to serum albumin by certain NSAIDs may also play a secondary role. Unexpectedly severe and sometimes fatal bone marrow suppression, aplastic anemia, gastrointestinal toxicity, and nephrotoxicity have been reported during concomitant administration of methotrexate with NSAIDs. The risk is greatest in patients receiving high dosages of methotrexate and those with renal impairment.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3474"
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
    "id": "ddi-pair-0110",
    "drugAId": "drug-colchicine",
    "drugBId": "drug-clarithromycin",
    "drugAName": "Colchicine",
    "drugBName": "Clarithromycin",
    "severity": "Major",
    "mechanism": "Clarithromycin menghambat ganda transporter efflux P-glycoprotein (P-gp) dan isoenzim CYP3A4 hepar/usus yang mengeliminasi Colchicine.",
    "clinicalOutcome": "Toksisitas Colchicine fatal (kegagalan multi-organ, supresi sumsum tulang agranulositosis, rabdomiolisis berat, kolaps kardiovaskular).",
    "management": "KONTRAINDIKASI MUTLAK pada pasien dengan gangguan ginjal atau hati. Pada pasien fungsi normal, turunkan dosis colchicine hingga 75% atau gunakan antibiotik alternatif.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-67714",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration of colchicine with clarithromycin may significantly increase the serum concentrations of colchicine. The proposed mechanism is inhibition of the CYP450 3A4-mediated metabolism and P-glycoprotein (P-gp)-mediated transport of colchicine by clarithromycin. Clinical toxicity including myopathy, neuropathy, multiorgan failure, and pancytopenia may occur.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #791"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Azithromycin",
      "Cefixime",
      "Amoxicillin-Clavulanate"
    ]
  },
  {
    "id": "ddi-pair-0111",
    "drugAId": "drug-ciprofloxacin",
    "drugBId": "drug-theophylline",
    "drugAName": "Ciprofloxacin",
    "drugBName": "Theophylline",
    "severity": "Major",
    "mechanism": "Ciprofloxacin adalah inhibitor poten isoenzim CYP1A2 yang memetabolisme theophylline.",
    "clinicalOutcome": "Kadar theophylline plasma melonjak hingga 100-300%, memicu Toksisitas Teofilin Berat (Aritmia Ventrikel, Kejang Status Epileptikus yang refrakter, dan Kematian).",
    "management": "HINDARI kombinasi ini. Jika terpaksa, turunkan dosis Teofilin sebesar 50% dan pantau kadar terapeutik theophylline serum secara ketat.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-66337",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with ciprofloxacin may significantly increase the serum concentrations of theophylline and the associated risk of toxicity. The mechanism is ciprofloxacin inhibition of theophylline metabolism via CYP450 1A2.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3586"
    ],
    "alternativeOptionsA": [
      "Azithromycin",
      "Cefixime",
      "Amoxicillin-Clavulanate",
      "Ceftriaxone"
    ],
    "alternativeOptionsB": [
      "Formoterol Inhaler",
      "Tiotropium",
      "Budesonide Inhaler"
    ]
  },
  {
    "id": "ddi-pair-0112",
    "drugAId": "drug-azithromycin",
    "drugBId": "drug-amiodarone",
    "drugAName": "Azithromycin",
    "drugBName": "Amiodarone",
    "severity": "Major",
    "mechanism": "Efek aditif pemanjangan waktu repolarisasi ventrikel via blokade kanal kalium IKr / hERG jantung.",
    "clinicalOutcome": "Pemanjangan interval QTc bermakna, Aritmia Ventrikel Polimorfik Torsades de Pointes (TdP), dan Henti Jantung Mendadak.",
    "management": "KONTRAINDIKASI BERSAMAAN. Hindari antibiotik makrolida/kuinolon pada pasien dalam terapi amiodarone. Pilih antibiotik golongan beta-laktam.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-21353",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Amiodarone can cause dose-related prolongation of the QT interval. Coadministration with other agents that can prolong the QT interval such as macrolide antibiotics may result in additive effects and increased risk of ventricular arrhythmias including torsade de pointes and sudden death.In general, the risk of an individual agent or a combination of agents causing ventricular arrhythmia in association with QT prolongation is largely unpredictable but may be increased by certain underlying risk factors such as congenital long QT syndrome, cardiac disease, and electrolyte disturbances (e.g., hypokalemia, hypomagnesemia). Some macrolides such as clarithromycin, erythromycin, and troleandomycin are also potent inhibitors of CYP450 3A4 and may significantly inhibit the metabolism of amiodarone, which is primarily metabolized by the isoenzyme.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #338"
    ],
    "alternativeOptionsA": [
      "Cefixime",
      "Amoxicillin-Clavulanate"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddi-pair-0113",
    "drugAId": "drug-fluconazole",
    "drugBId": "drug-glimepiride",
    "drugAName": "Fluconazole",
    "drugBName": "Glimepiride",
    "severity": "Major",
    "mechanism": "Fluconazole menghambat poten enzim CYP2C9 yang bertanggung jawab atas metabolisme hepatik sulfonilurea.",
    "clinicalOutcome": "Peningkatan waktu paruh dan kadar plasma glimepiride memicu Hipoglikemia Berat Berkepanjangan hingga koma diabetik.",
    "management": "Turunkan dosis Glimepiride dan edukasi pasien untuk melakukan pemantauan glukosa darah mandiri (PGDM) lebih sering.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-108032",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with inhibitors of CYP450 2C9 including certain azole antifungal agents such as fluconazole, miconazole, and voriconazole may increase the plasma concentrations of sulfonylureas, many of which have been found to be substrates of the isoenzyme.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2048"
    ],
    "alternativeOptionsA": [
      "Terbinafine",
      "Nystatin",
      "Micafungin"
    ],
    "alternativeOptionsB": [
      "Linagliptin",
      "Sitagliptin",
      "Empagliflozin",
      "Metformin"
    ]
  },
  {
    "id": "ddi-pair-0114",
    "drugAId": "drug-aspirin",
    "drugBId": "drug-ketorolac",
    "drugAName": "Aspirin",
    "drugBName": "Ketorolac",
    "severity": "Major",
    "mechanism": "Inhibisi aditif ireversibel dan reversibel pada enzim COX-1 trombosit serta erosi masif pada barier mukosa protektif lambung.",
    "clinicalOutcome": "Peningkatan drastis risiko Perdarahan Gastrointestinal Masif dan Perdarahan Pasca Bedah yang Fatal (Black Box Warning).",
    "management": "KONTRAINDIKASI MUTLAK. Jangan pernah mengombinasikan Ketorolac dengan NSAID lain atau Aspirin dosis analgesik.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-7995",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "The use of ketorolac in combination with other nonsteroidal anti-inflammatory drugs (NSAIDs) may increase the risk of serious adverse effects such as renal failure and gastrointestinal toxicity including inflammation, bleeding, ulceration, and perforation of the esophagus, stomach, or intestines.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1671"
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
    "id": "ddi-pair-0115",
    "drugAId": "drug-tramadol",
    "drugBId": "drug-linezolid",
    "drugAName": "Tramadol",
    "drugBName": "Linezolid",
    "severity": "Major",
    "mechanism": "Linezolid adalah inhibitor monoamine oksidase A (MAO-A) non-selektif reversibel, sementara Tramadol menghambat reuptake serotonin dan noradrenalin.",
    "clinicalOutcome": "Sindrom Serotonin Akut yang mengancam jiwa (hipertermia, klonus ocular/neuromuskular, rigiditas, delirium) dan Kejang.",
    "management": "KONTRAINDIKASI BERSAMAAN. Hentikan tramadol sebelum memulai linezolid atau gunakan analgesik opioid alternatif non-serotonergik (Morfin murni).",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-5940",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Monoamine oxidase inhibitors (MAOIs) may potentiate the serotonergic activity of tramadol and increase the risk of serotonin syndrome, which is a rare but serious and potentially fatal condition thought to result from hyperstimulation of brainstem 5HT1A receptors. The mechanism is an additive pharmacodynamic effect resulting from MAOI inhibition of serotonin metabolism. Patients receiving this combination of drugs may also experience an increased risk of seizures due to lowering of seizure threshold.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2043"
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
    "id": "ddi-pair-0116",
    "drugAId": "drug-propofol",
    "drugBId": "drug-fentanyl",
    "drugAName": "Propofol",
    "drugBName": "Fentanyl",
    "severity": "Moderate",
    "mechanism": "Sinergisme farmakodinamik potensiasi depresi sistem saraf pusat, depresi pusat napas batang otak, dan penurunan resistensi vaskular sistemik.",
    "clinicalOutcome": "Apnea mendalam, penurunan refleks protektif jalan napas total, bradikardia kardiak, dan hipotensi berat.",
    "management": "Wajib dilakukan di bawah pengawasan dokter spesialis anestesi dengan ventilasi mekanik dan peralatan resusitasi intubasi lengkap.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-2574",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Additive central nervous system and cardiorespiratory depressant effects may occur when fospropofol or propofol is administered with other depressants such as sedative-hypnotic agents and narcotic analgesics.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #451"
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
    "id": "drug-dapsone",
    "drugAId": "drug-dapsone",
    "drugBId": "drug-co-trimoxazole",
    "drugAName": "Dapsone",
    "drugBName": "Co-Trimoxazole",
    "severity": "Major",
    "mechanism": "Efek stres oksidatif aditif pada hemoglobin dan eritrosit serta inhibisi kompetitif klirens metabolisme satu sama lain.",
    "clinicalOutcome": "Peningkatan tajam risiko Anemia Hemolitik Akut Berat dan Methemoglobinemia Simtomatik (sianosis, sesak napas).",
    "management": "Hindari kombinasi jika memungkinkan. Lakukan skrining defisiensi G6PD dan pantau kadar hemoglobin serta saturasi oksigen.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-000117"
  },
  {
    "id": "ddi-pair-0118",
    "drugAId": "drug-griseofulvin",
    "drugBId": "drug-warfarin",
    "drugAName": "Griseofulvin",
    "drugBName": "Warfarin",
    "severity": "Moderate",
    "mechanism": "Griseofulvin menginduksi enzim mikrosomal hepar sitokrom P450 yang mempercepat metabolisme dan inaktivasi warfarin.",
    "clinicalOutcome": "Penurunan nilai INR dan berkurangnya efikasi antikoagulan, meningkatkan risiko trombosis.",
    "management": "Pantau nilai INR lebih sering selama terapi griseofulvin dan sesuaikan peningkatan dosis warfarin sesuai kebutuhan.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-122433",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Griseofulvin has been reported to increase warfarin requirements in some previously stabilized patients. The mechanism may be induction of the hepatic metabolism of warfarin. Similar effects may occur with other oral anticoagulants.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3327"
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
    "id": "ddi-pair-0119",
    "drugAId": "drug-carbamazepine",
    "drugBId": "drug-warfarin",
    "drugAName": "Carbamazepine",
    "drugBName": "Warfarin",
    "severity": "Moderate",
    "mechanism": "Carbamazepine adalah penginduksi kuat CYP3A4 dan CYP2C9 yang mempercepat klirens warfarin secara dramatis.",
    "clinicalOutcome": "Nilai INR anjlok di bawah rentang terapeutik, memicu kegagalan proteksi stroke dan tromboemboli berulang.",
    "management": "Tingkatkan dosis Warfarin secara bertahap dan pantau nilai INR tiap 3-5 hari saat inisiasi atau penghentian carbamazepine.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-56745",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Carbamazepine may induce the metabolism of warfarin and reduce its anticoagulant effect. The mechanism is induction of hepatic isoenzyme metabolism by carbamazepine. Carbamazepine may interact with other oral anticoagulants in a similar fashion.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2050"
    ],
    "alternativeOptionsA": [
      "Levetiracetam",
      "Lamotrigine",
      "Lacosamide",
      "Gabapentin"
    ],
    "alternativeOptionsB": [
      "Apixaban",
      "Rivaroxaban",
      "Dabigatran"
    ]
  },
  {
    "id": "ddi-pair-0120",
    "drugAId": "drug-sodium-valproate",
    "drugBId": "drug-phenytoin",
    "drugAName": "Sodium Valproate",
    "drugBName": "Phenytoin",
    "severity": "Major",
    "mechanism": "Asam valproat mendesak ikatan protein plasma phenytoin (meningkatkan fraksi bebas aktif) dan sekaligus menghambat metabolisme CYP2C9 phenytoin.",
    "clinicalOutcome": "Peningkatan fraksi phenytoin bebas memicu Toksisitas Phenytoin Akut (nistagmus berat, ataksia serebelar, hiperplasia gingiva, koma) sementara kadar total dapat tampak normal semu.",
    "management": "Periksa kadar Phenytoin Bebas (Free Phenytoin Level) bukan kadar total, dan turunkan dosis Phenytoin sesuai kondisi klinis.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-000120"
  },
  {
    "id": "ddi-pair-0121",
    "drugAId": "drug-phenytoin",
    "drugBId": "drug-dexamethasone",
    "drugAName": "Phenytoin",
    "drugBName": "Dexamethasone",
    "severity": "Moderate",
    "mechanism": "Phenytoin menginduksi kuat enzim CYP3A4 hepar yang memetabolisme kortikosteroid sintetis.",
    "clinicalOutcome": "Penurunan kadar dexamethasone plasma hingga > 50%, menyebabkan kegagalan terapi edema serebral / antiinflamasi.",
    "management": "Tingkatkan dosis Dexamethasone hingga dua kali lipat saat diberikan bersama Phenytoin, dan evaluasi respons klinis.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-39376",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Phenytoin and other hydantoins may induce the CYP450 3A4 hepatic metabolism of corticosteroids and increase their clearance and decrease their half-lives, possibly reducing their therapeutic efficacy.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2280"
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
    "id": "ddi-pair-0122",
    "drugAId": "drug-haloperidol",
    "drugBId": "drug-amitriptyline",
    "drugAName": "Haloperidol",
    "drugBName": "Amitriptyline",
    "severity": "Major",
    "mechanism": "Inhibisi metabolisme timbal balik via CYP2D6 ditambah efek aditif pemanjangan repolarisasi kardiak (QTc) dan blokade muskarinik.",
    "clinicalOutcome": "Peningkatan risiko Aritmia Ventrikel Torsades de Pointes dan Toksisitas Antikolinergik Berat (delirium, ileus paralitik, hipertermia).",
    "management": "Lakukan pemantauan EKG (interval QTc) secara serial dan hindari kombinasi pada pasien dengan riwayat penyakit jantung.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-22448",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Haloperidol can cause dose-related prolongation of the QT interval. Theoretically, coadministration with other agents that can prolong the QT interval may result in elevated risk of ventricular arrhythmias, including ventricular tachycardia and torsade de pointes, because of additive arrhythmogenic potential related to their effects on cardiac conduction. Haloperidol may increase the serum concentrations of tricyclic antidepressants by inhibiting their metabolism via CYP450 2D6. There have been case reports of seizures associated with this interaction.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1380"
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
    "id": "ddi-pair-0123",
    "drugAId": "drug-halothane",
    "drugBId": "drug-theophylline",
    "drugAName": "Halothane",
    "drugBName": "Theophylline",
    "severity": "Major",
    "mechanism": "Halotan mensensitisasi miokardium terhadap efek stimulasi katekolamin dan fosfodiesterase yang dipicu oleh theophylline.",
    "clinicalOutcome": "Peningkatan drastis risiko Aritmia Ventrikel Maligna (Ventricular Tachycardia / VF) selama anestesi umum.",
    "management": "HINDARI anestesi halotan pada pasien yang sedang mengonsumsi theophylline. Pilih Isoflurane atau Sevoflurane sebagai agen volatil alternatif.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-97485",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "The administration of halothane following theophylline administration has been reported to result in ventricular tachycardia and, in one case, ventricular fibrillation. Halothane increases the arrhythmogenic potential of catecholamines. Theophylline appears to enhance the release of catecholamines.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #591"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Formoterol Inhaler",
      "Tiotropium",
      "Budesonide Inhaler"
    ]
  },
  {
    "id": "ddi-pair-0124",
    "drugAId": "drug-atropine",
    "drugBId": "drug-potassium-chloride",
    "drugAName": "Atropine Sulfate",
    "drugBName": "Amitriptyline",
    "severity": "Moderate",
    "mechanism": "Efek aditif penghambatan reseptor muskarinik asetilkolin perifer dan sentral.",
    "clinicalOutcome": "Sindrom Antikolinergik Akut (mulut sangat kering, midriasis paralitik, takikardia berat, retensi urin obstruktif, konstipasi/ileus paralitik, konfusi mental pada lansia).",
    "management": "Hindari polifarmasi antikolinergik. Evaluasi skor beban antikolinergik (Anticholinergic Burden Score) pasien.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-22244",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Agents with anticholinergic properties (e.g., sedating antihistamines; antispasmodics; neuroleptics; phenothiazines; skeletal muscle relaxants; tricyclic antidepressants; disopyramide) may have additive effects when used in combination. Excessive parasympatholytic effects may result in paralytic ileus, hyperthermia, heat stroke, and the anticholinergic intoxication syndrome. Peripheral symptoms of intoxication commonly include mydriasis, blurred vision, flushed face, fever, dry skin and mucous membranes, tachycardia, urinary retention, and constipation. Central symptoms may include memory loss, disorientation, incoherence, hallucinations, psychosis, delirium, hyperactivity, twitching or jerking movements, stereotypy, and seizures. Central nervous system-depressant effects may also be additively or synergistically increased when these agents are combined, especially in elderly or debilitated patients.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1064"
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
    "id": "ddi-pair-0125",
    "drugAId": "drug-sucralfate",
    "drugBId": "drug-ciprofloxacin",
    "drugAName": "Sucralfate",
    "drugBName": "Ciprofloxacin",
    "severity": "Moderate",
    "mechanism": "Kation Aluminium polivalen dalam sucralfate mengkelat molekul fluoroquinolone membentuk kompleks senyawa tidak larut di lumen lambung.",
    "clinicalOutcome": "Bioavailabilitas ciprofloxacin anjlok hingga > 85% jika diminum bersamaan, menurunkan efikasi antibiotik oral.",
    "management": "Hindari konsumsi bersamaan secara simultan. Wajib memberikan jeda waktu minum: minum Ciprofloxacin minimal 2 jam SEBELUM atau 6 jam SETELAH konsumsi Sucralfate.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-66316",
    "mechanismCategory": "Absorption",
    "ddinterOriginalText": "INTERVAL: Oral preparations that contain magnesium, aluminum, or calcium may significantly decrease the gastrointestinal absorption of quinolone antibiotics. Absorption may also be reduced by sucralfate, which contains aluminum, as well as other polyvalent cations such as iron and zinc. The mechanism is chelation of quinolones by polyvalent cations, forming a complex that is poorly absorbed from the gastrointestinal tract.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3116"
    ],
    "alternativeOptionsA": [
      "Famotidine",
      "Pantoprazole",
      "Rebamipide"
    ],
    "alternativeOptionsB": [
      "Azithromycin",
      "Cefixime",
      "Amoxicillin-Clavulanate",
      "Ceftriaxone"
    ]
  },
  {
    "id": "ddi-pair-0126",
    "drugAId": "drug-misoprostol",
    "drugBId": "drug-magnesium-hydroxide",
    "drugAName": "Misoprostol",
    "drugBName": "Antasida (Magnesium Hydroxide)",
    "severity": "Minor",
    "mechanism": "Penggunaan bersamaan antasida yang mengandung magnesium meningkatkan efek samping gastrointestinal asam misoprostol, terutama diare osmotik berair parah dan kram abdomen hebat.",
    "clinicalOutcome": "Diare persisten berat, dehidrasi ringan-sedang, kram perut hebat, dan penurunan kepatuhan minum obat tukak lambung.",
    "management": "Hindari penggunaan antasida berbasis magnesium selama terapi misoprostol; gunakan antasida berbasis aluminium hidroksida atau kalsium karbonat jika diperlukan antasida tambahan.",
    "evidenceLevel": "Level 1 - Well Established (Drugs.com & Medscape Drug Reference)",
    "ddinterPairId": "DDInter-PAIR-86050",
    "mechanismCategory": "Absorption",
    "ddinterOriginalText": "Concomitant administration of antacids can reduce the bioavailability of misoprostol acid, the active metabolite of misoprostol. The mechanism of interaction is unknown.",
    "ddinterOriginalManagement": "Minor clinical significance (DDInter Level 1). The combination is generally safe and well-tolerated without therapy alteration.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #479"
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
    "id": "ddi-pair-0127",
    "drugAId": "drug-misoprostol",
    "drugBId": "drug-oxytocin",
    "drugAName": "Misoprostol",
    "drugBName": "Oxytocin",
    "severity": "Major",
    "mechanism": "Efek sinergis uterotonik poten dapat memicu takisistol uterus, hiperstimulasi miometrium berlebih, asfiksia janin, hingga ruptur uteri.",
    "clinicalOutcome": "Hiperstimulasi kontraksi uterus (>5 kontraksi per 10 menit), gawat janin (fetal distress), atonia sekunder, dan ruptur uteri.",
    "management": "KONTRAINDIKASI PEMBERIAN SIMULTAN. Berikan interval waktu minimal 4 hingga 6 jam setelah dosis misoprostol terakhir sebelum memulai induksi atau augmentasi dengan infus oksitosin.",
    "evidenceLevel": "Level 1 - Well Established (ACOG & WHO Guidelines)",
    "ddinterPairId": "DDInter-PAIR-263873",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Prostaglandins, especially those of the E type such as misoprostol, may potentiate the uterine response to oxytocin and increase the risk of uterine hyperstimulation and rupture.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #7524"
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
    "id": "ddi-pair-0128",
    "drugAId": "drug-methylergometrine",
    "drugBId": "drug-clarithromycin",
    "drugAName": "Methylergometrine",
    "drugBName": "Clarithromycin",
    "severity": "Major",
    "mechanism": "Klaritromisin menghambat kuat enzim CYP3A4 hepar yang memetabolisme alkaloid ergot, menyebabkan lonjakan drastis kadar plasma methylergometrine dan memicu vasospasme perifer parah (ergotisme iskemik) serta krisis hipertensi.",
    "clinicalOutcome": "Iskemia ekstremitas perifer akut (sianosis, nyeri dingin jari), vasospasme serebral/koroner, infark miokard, dan krisis hipertensi maligna.",
    "management": "KONTRAINDIKASI MUTLAK. Jangan berikan antibiotik makrolida kuat (clarithromycin, erythromycin) bersama alkaloid ergot (methylergometrine, ergotamine). Gunakan antibiotik non-CYP3A4 seperti sefadroksil atau amoksisilin.",
    "evidenceLevel": "Level 1 - Black Box Warning (FDA / Medscape)",
    "ddinterPairId": "DDInter-PAIR-67926",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with certain macrolide antibiotics may significantly increase the plasma concentrations of ergot derivatives. The mechanism is macrolide inhibition of CYP450 3A4, the isoenzyme responsible for the metabolic clearance of ergotamine and related drugs. Macrolides that may significantly inhibit CYP450 3A4 include clarithromycin, erythromycin and troleandomycin, and clinical ergotism has been reported in patients receiving ergotamine or dihydroergotamine with these agents.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #5145"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Azithromycin",
      "Cefixime",
      "Amoxicillin-Clavulanate"
    ]
  },
  {
    "id": "ddi-pair-0130",
    "drugAId": "drug-methotrexate",
    "drugBId": "drug-cotrimoxazole",
    "drugAName": "Methotrexate",
    "drugBName": "Cotrimoxazole",
    "severity": "Major",
    "mechanism": "Trimethoprim dan methotrexate keduanya merupakan inhibitor enzim Dihydrofolate Reductase (DHFR), ditambah sulfamethoxazole mendesak ikatan protein plasma MTX -> inhibisi sintesis folat ganda.",
    "clinicalOutcome": "Agranulositosis, anemia aplastik berat, pansitopenia, sepsis neutropenia, dan kematian.",
    "management": "HINDARI KOMBINASI. Gunakan antibiotik alternatif non-antifolat (seperti amoksisilin, azitromisin, atau sefalosporin) pada pasien yang sedang menjalani terapi methotrexate.",
    "evidenceLevel": "Level 1 - Well Established (Drugs.com Interaction Checker)",
    "ddinterPairId": "DDInter-PAIR-106354",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Coadministration of methotrexate with trimethoprim may increase the risk of severe myelosuppression and megaloblastic anemia due to potential additive effects resulting from inhibition of dihydrofolate reductase by both drugs. The interaction has been reported primarily with sulfamethoxazole-trimethoprim, but has also occurred with trimethoprim alone.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4316"
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
    "id": "ddi-pair-0132",
    "drugAId": "drug-cyclosporine",
    "drugBId": "drug-atorvastatin",
    "drugAName": "Cyclosporine",
    "drugBName": "Atorvastatin",
    "severity": "Major",
    "mechanism": "Siklosporin menghambat transporter serapan hepar OATP1B1 dan enzim CYP3A4, meningkatkan AUC plasma atorvastatin hingga 6-10 kali lipat.",
    "clinicalOutcome": "Miopati akut berat, mialgia difus, lonjakan enzim CK > 10x ULN, dan rhabdomyolysis fatal dengan gagal ginjal mioglobinurik.",
    "management": "Batasi dosis atorvastatin maksimal 10 mg/hari jika harus digunakan bersama siklosporin, atau ganti dengan pravastatin (maks 20 mg/hari) dan monitor keluhan nyeri otot serta serum CK.",
    "evidenceLevel": "Level 1 - Well Established (Drugs.com & Medscape)",
    "ddinterPairId": "DDInter-PAIR-23205",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with cyclosporine may significantly increase the plasma concentrations of some HMG-CoA reductase inhibitors and/or their pharmacologically active metabolites. The proposed mechanism is cyclosporine inhibition of intestinal and hepatic CYP450 3A4, the isoenzyme responsible for the metabolic clearance of HMG-CoA reductase inhibitors like atorvastatin, lovastatin, simvastatin. In addition, atorvastatin, its metabolites, and the active beta-hydroxyacid form of simvastatin, simvastatin acid, are substrates of the hepatic uptake transporter, organic anion transporting polypeptide (OATP) 1B1, which is also inhibited by cyclosporine. Use of cyclosporine with atorvastatin or other HMG-CoA reductase inhibitors has resulted in musculoskeletal toxicity. Myopathy manifested as muscle pain and/or weakness associated with grossly elevated creatine kinase exceeding ten times the upper limit of normal has been reported occasionally. Rhabdomyolysis has also occurred rarely, which may be accompanied by acute renal failure secondary to myoglobinuria and may result in death.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2611"
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
    "id": "ddi-pair-0133",
    "drugAId": "drug-tacrolimus",
    "drugBId": "drug-ketoconazole",
    "drugAName": "Tacrolimus",
    "drugBName": "Ketoconazole",
    "severity": "Major",
    "mechanism": "Ketokonazol menghambat poten enzim CYP3A4 dan efluks P-glikoprotein di usus dan hepar, meningkatkan AUC dan konsentrasi darah utuh tacrolimus 300-500%.",
    "clinicalOutcome": "Nefrotoksisitas berat (gagal ginjal akut), neurotoksisitas (tremor hebat, parestesia, ensefalopati), perpanjangan interval QTc, dan hiperkalemia mengancam jiwa.",
    "management": "Lakukan penyesuaian dosis tacrolimus (seringkali pemotongan 50-80%) dan pantau kadar palung (trough level) darah harian serta fungsi ginjal serial.",
    "evidenceLevel": "Level 1 - Well Established (Transplant Clinical Guidelines)",
    "ddinterPairId": "DDInter-PAIR-168254",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Tacrolimus can cause concentration-dependent prolongation of the QT interval. Theoretically, coadministration with other agents that can prolong the QT interval including some azole antifungal agents may result in additive effects and increased risk of ventricular arrhythmias including torsade de pointes and sudden death. Coadministration with azole antifungal agents may significantly increase the oral bioavailability of tacrolimus. The proposed mechanism is inhibition of tacrolimus metabolism via intestinal CYP450 3A4.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4534"
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
    "id": "ddi-pair-0134",
    "drugAId": "drug-levothyroxine",
    "drugBId": "drug-calcium-carbonate",
    "drugAName": "Levothyroxine",
    "drugBName": "Calcium Carbonate",
    "severity": "Moderate",
    "mechanism": "Ion kalsium membentuk kelat kompleks tak larut dengan levotiroksin di lumen lambung-usus halus, menurunkan bioavailabilitas T4 secara signifikan.",
    "clinicalOutcome": "Penyerapan hormon tiroid terganggu, kadar TSH meningkat, dan kegagalan terapi hipotiroidisme.",
    "management": "Pisahkan waktu konsumsi minimal 4 jam (konsumsi Levothyroxine saat bangun tidur pagi saat perut kosong, dan konsumsi suplemen kalsium saat makan siang atau malam).",
    "evidenceLevel": "Level 1 - Well Established (Endocrine Society Guidelines)",
    "ddinterPairId": "DDInter-PAIR-100069",
    "mechanismCategory": "Absorption",
    "ddinterOriginalText": "INTERVAL: Concurrent administration of calcium-containing products may decrease the oral bioavailability of levothyroxine by one-third in some patients. Pharmacologic effects of levothyroxine may be reduced. The exact mechanism of interaction is unknown but may involve nonspecific adsorption of levothyroxine to calcium at acidic pH levels, resulting in an insoluble complex that is poorly absorbed from the gastrointestinal tract.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3950"
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
    "id": "ddi-pair-0135",
    "drugAId": "drug-tamoxifen",
    "drugBId": "drug-fluoxetine",
    "drugAName": "Tamoxifen",
    "drugBName": "Fluoxetine",
    "severity": "Major",
    "mechanism": "Fluoxetine adalah inhibitor poten enzim CYP2D6 hepar yang mengubah prodrug tamoxifen menjadi metabolit aktif terapeutik utama (Endoxifen). Inhibisi CYP2D6 menurunkan kadar endoxifen hingga 75%.",
    "clinicalOutcome": "Kegagalan terapi ajuvan kanker payudara, risiko resistensi obat, dan kekambuhan kanker payudara metastatik meningkat signifikan.",
    "management": "KONTRAINDIKASI / HINDARI KOMBINASI. Gunakan alternatif antidepresan yang tidak menghambat CYP2D6, seperti Venlafaxine, Citalopram, atau Escitalopram.",
    "evidenceLevel": "Level 1 - Well Established (ASCO Clinical Practice Guidelines)",
    "ddinterPairId": "DDInter-PAIR-104859",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Chronic coadministration of potent or moderate CYP450 2D6 inhibitors including certain antidepressants may reduce the effectiveness of tamoxifen. The proposed mechanism is inhibition of tamoxifen bioactivation via CYP450 2D6 to endoxifen (4-hydroxy-N-desmethyltamoxifen), the active metabolite that may be responsible for much of tamoxifen's antiestrogenic activity.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #340"
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
    "id": "ddi-pair-0136",
    "drugAId": "drug-cabergoline",
    "drugBId": "drug-haloperidol",
    "drugAName": "Cabergoline",
    "drugBName": "Haloperidol",
    "severity": "Moderate",
    "mechanism": "Haloperidol memblokir reseptor dopamin D2 di sel laktotrof hipofisis anterior, mengantagonis efek terapi agonis dopamin cabergoline.",
    "clinicalOutcome": "Hiperprolaktinemia berulang, galaktorea persisten, infertilitas, dan pembesaran kembali mikroadenoma prolaktinoma.",
    "management": "Hindari kombinasi antagonis D2 tipikal pada pasien yang diterapi cabergoline untuk hiperprolaktinemia; diskusikan alternatif antipsikotik non-hiperprolaktinemik (seperti aripiprazole).",
    "evidenceLevel": "Level 1 - Well Established (Medscape Drug Reference)",
    "ddinterPairId": "DDInter-PAIR-52902",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Agents with central antidopaminergic activity such as phenothiazines, neuroleptics, and certain antiemetics may antagonize the pharmacologic effects of dopaminergic drugs, and vice versa. In addition, the central nervous system depressant and hypotensive effects of these agents may be additively or synergistically increased when taken together.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2883"
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
    "id": "ddi-pair-0137",
    "drugAId": "drug-rivaroxaban",
    "drugBId": "drug-ketoconazole",
    "drugAName": "Rivaroxaban",
    "drugBName": "Ketoconazole",
    "severity": "Major",
    "mechanism": "Ketokonazol menghambat ganda isoenzim CYP3A4 dan transporter efluks P-glikoprotein (P-gp), meningkatkan kadar plasma dan AUC rivaroxaban hingga > 150%.",
    "clinicalOutcome": "Peningkatan drastis efek antikoagulasi dan risiko perdarahan internal mayor, hematuria, serta perdarahan intrakranial fatal.",
    "management": "KONTRAINDIKASI KOMBINASI. Hindari penggunaan rivaroxaban bersama inhibitor kuat CYP3A4 dan P-gp sistemik.",
    "evidenceLevel": "Level 1 - Well Established (FDA Black Box / EMA)",
    "ddinterPairId": "DDInter-PAIR-162104",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with potent inhibitors of CYP450 3A4 that can also inhibit P-glycoprotein (P-gp) may significantly increase the plasma concentrations of rivaroxaban, which is a substrate of both the isoenzyme and efflux transporter. The risk of bleeding associated with rivaroxaban may be increased.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1567"
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
    "id": "ddi-pair-0138",
    "drugAId": "drug-apixaban",
    "drugBId": "drug-clarithromycin",
    "drugAName": "Apixaban",
    "drugBName": "Clarithromycin",
    "severity": "Moderate",
    "mechanism": "Klaritromisin menghambat kuat CYP3A4 dan P-gp intestinal/hepatik, meningkatkan paparan sistemik apixaban hingga 2 kali lipat.",
    "clinicalOutcome": "Peningkatan risiko perdarahan gastrointestinal masif dan hematoma spontan.",
    "management": "Pada pasien yang menerima apixaban 5 mg atau 10 mg dua kali sehari, turunkan dosis apixaban sebesar 50% (menjadi 2.5 mg dua kali sehari) saat diberikan bersama inhibitor kuat ganda.",
    "evidenceLevel": "Level 1 - Well Established (FDA Drug Safety)",
    "ddinterPairId": "DDInter-PAIR-27930",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with clarithromycin, a combined P-glycoprotein (P-gp) and strong CYP450 3A4 inhibitor, may increase the plasma concentrations of apixaban, which is a substrate of the efflux transporter as well as the isoenzyme.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #539"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Azithromycin",
      "Cefixime",
      "Amoxicillin-Clavulanate"
    ]
  },
  {
    "id": "ddi-pair-0139",
    "drugAId": "drug-dabigatran",
    "drugBId": "drug-verapamil",
    "drugAName": "Dabigatran",
    "drugBName": "Verapamil",
    "severity": "Major",
    "mechanism": "Verapamil menghambat transporter efluks P-gp di membran mukosa usus halus, meningkatkan absorpsi dan AUC dabigatran hingga 70-100%.",
    "clinicalOutcome": "Konsentrasi plasma dabigatran melonjak tajam, memicu risiko perdarahan mayor.",
    "management": "Berikan dabigatran minimal 2 jam SEBELUM verapamil. Pada pasien dengan gangguan ginjal sedang (CrCl 30-50 mL/menit), turunkan dosis dabigatran menjadi 75-110 mg dua kali sehari.",
    "evidenceLevel": "Level 1 - Well Established (ESC Guidelines)",
    "ddinterPairId": "DDInter-PAIR-000139"
  },
  {
    "id": "ddi-pair-0140",
    "drugAId": "drug-clopidogrel",
    "drugBId": "drug-esomeprazole",
    "drugAName": "Clopidogrel",
    "drugBName": "Esomeprazole",
    "severity": "Major",
    "mechanism": "Esomeprazole dan Omeprazole menghambat enzim CYP2C19 hepar yang bertugas mengubah prodrug clopidogrel menjadi metabolit aktif tiol penghambat agregasi trombosit.",
    "clinicalOutcome": "Penurunan efikasi antiplatelet hingga 40%, meningkatkan risiko trombosis stent koroner, infark miokard berulang, dan stroke iskemik.",
    "management": "HINDARI kombinasi clopidogrel dengan Omeprazole atau Esomeprazole. Gunakan alternatif PPI dengan efek inhibisi CYP2C19 minimal, seperti Pantoprazole atau Dexlansoprazole.",
    "evidenceLevel": "Level 1 - Well Established (FDA Safety Communication / AHA)",
    "ddinterPairId": "DDInter-PAIR-71650",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with proton pump inhibitors (PPIs) may reduce the cardioprotective effects of clopidogrel. The proposed mechanism is PPI inhibition of the CYP450 2C19-mediated metabolic bioactivation of clopidogrel.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3363"
    ],
    "alternativeOptionsA": [
      "Ticagrelor",
      "Cilostazol"
    ],
    "alternativeOptionsB": [
      "Pantoprazole",
      "Rabeprazole",
      "Famotidine",
      "Rebamipide"
    ]
  },
  {
    "id": "ddi-pair-0141",
    "drugAId": "drug-ticagrelor",
    "drugBId": "drug-simvastatin",
    "drugAName": "Ticagrelor",
    "drugBName": "Simvastatin",
    "severity": "Moderate",
    "mechanism": "Ticagrelor menghambat metabolisme simvastatin via CYP3A4 dan menghambat transporter OATP1B1, meningkatkan Cmax dan AUC simvastatin sebesar 60-80%.",
    "clinicalOutcome": "Peningkatan toksisitas statin, risiko miopati berat, peningkatan enzim CPK, dan rhabdomyolysis.",
    "management": "Hindari dosis simvastatin atau lovastatin melebihi 40 mg per hari pada pasien yang diterapi ticagrelor.",
    "evidenceLevel": "Level 1 - Well Established (PLATO Trial / FDA Label)",
    "ddinterPairId": "DDInter-PAIR-166168",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with ticagrelor may increase the plasma concentrations of lovastatin and simvastatin as well as their pharmacologically active acid metabolites. The mechanism may involve enhanced absorption and/or reduced clearance due to inhibition of intestinal/hepatic CYP450 3A4 by ticagrelor. There was no effect of simvastatin on ticagrelor plasma concentrations. Although not studied, the interaction is also expected to occur with lovastatin due to its similar metabolic profile to simvastatin. Clinically, high levels of statin or HMG-CoA reductase inhibitory activity in plasma is associated with an increased risk of musculoskeletal toxicity. Myopathy manifested as muscle pain and/or weakness associated with grossly elevated creatine kinase exceeding ten times the upper limit of normal has been reported occasionally. Rhabdomyolysis has also occurred rarely, which may be accompanied by acute renal failure secondary to myoglobinuria and may result in death.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3756"
    ],
    "alternativeOptionsA": [
      "Clopidogrel",
      "Cilostazol"
    ],
    "alternativeOptionsB": [
      "Rosuvastatin",
      "Pravastatin",
      "Pitavastatin",
      "Ezetimibe"
    ]
  },
  {
    "id": "ddi-pair-0142",
    "drugAId": "drug-metformin",
    "drugBId": "drug-iohexol",
    "drugAName": "Metformin",
    "drugBName": "Zat Kontras Iodin Radiologi (Iohexol/Iopamidol)",
    "severity": "Major",
    "mechanism": "Zat kontras radiologi intravaskular berisiko memicu Nefropati Terinduksi Kontras (CIN) / gagal ginjal akut, yang menyebabkan retensi dan akumulasi metformin dalam sirkulasi darah.",
    "clinicalOutcome": "Asidosis Laktat Terkait Metformin (MALA) dengan tingkat mortalitas tinggi hingga 50%.",
    "management": "HENTIKAN sementara metformin 48 jam sebelum prosedur kontras atau saat prosedur, dan tunda pemberian ulang minimal 48 jam setelah prosedur hingga fungsi ginjal dievaluasi ulang stabil.",
    "evidenceLevel": "Level 1 - Well Established (ACR / ESUR Guidelines)",
    "ddinterPairId": "DDInter-PAIR-000142"
  },
  {
    "id": "ddi-pair-0143",
    "drugAId": "drug-glimepiride",
    "drugBId": "drug-sulfamethoxazole",
    "drugAName": "Glimepiride",
    "drugBName": "Cotrimoxazole (Sulfamethoxazole/Trimethoprim)",
    "severity": "Moderate",
    "mechanism": "Sulfametoksazol menghambat enzim CYP2C9 yang memetabolisme sulfonilurea dan mendesak ikatan glimepirid pada albumin plasma.",
    "clinicalOutcome": "Perpanjangan waktu paruh glimepirid dan lonjakan kadar bebasnya, memicu Hipoglikemia Berat yang berkepanjangan hingga koma.",
    "management": "Pantau kadar glukosa darah secara ketat. Pertimbangkan penurunan dosis sulfonilurea atau ganti antibiotik ke golongan alternatif.",
    "evidenceLevel": "Level 1 - Well Established (Diabetes Care)",
    "ddinterPairId": "DDInter-PAIR-108214",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "The hypoglycemic effect of insulin secretagogues (e.g., sulfonylureas, meglitinides) may be potentiated by certain drugs, including ACE inhibitors, 4-aminoquinolines, amylin analogs, anabolic steroids, fibrates, monoamine oxidase inhibitors (MAOIs, including linezolid), nonsteroidal anti-inflammatory drugs (NSAIDs), salicylates, selective serotonin reuptake inhibitors (SSRIs), sulfonamides, disopyramide, propoxyphene, quinine, quinidine, and ginseng. These drugs may increase the risk of hypoglycemia by enhancing insulin sensitivity (ACE inhibitors, fibrates, ginseng); stimulating insulin secretion (salicylates, NSAIDs, disopyramide, quinine, quinidine, MAOIs, ginseng); decreasing insulin clearance and resistance (4-aminoquinolines); increasing peripheral glucose utilization (SSRIs, insulin-like growth factor); inhibiting gluconeogenesis (SSRIs, MAOIs, insulin-like growth factor); slowing the rate of gastric emptying (amylin analogs); and/or suppressing postprandial glucagon secretion (amylin analogs). Or, they may increase plasma concentration of insulin secretagogues by displacing them from plasma protein binding sites and/or inhibiting their metabolism (fibrates, NSAIDs, salicylates, sulfonamides).",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3671"
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
    "id": "ddi-pair-0144",
    "drugAId": "drug-glibenclamide",
    "drugBId": "drug-fluconazole",
    "drugAName": "Glibenclamide",
    "drugBName": "Fluconazole",
    "severity": "Major",
    "mechanism": "Fluconazole adalah inhibitor poten CYP2C9, menghambat klirens hepatik glibenklamid dan meningkatkan AUC hingga 2.5 kali lipat.",
    "clinicalOutcome": "Hipoglikemia berat refrakter yang berlangsung hingga beberapa hari pada pasien diabetes.",
    "management": "Kurangi dosis glibenklamid minimal 50% dan edukasi pasien mengenai tanda hipoglikemia serta siapkan glukosa cepat serap.",
    "evidenceLevel": "Level 1 - Well Established (Stockley's Drug Interactions)",
    "ddinterPairId": "DDInter-PAIR-183009",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with inhibitors of CYP450 2C9 including certain azole antifungal agents such as fluconazole, miconazole, and voriconazole may increase the plasma concentrations of sulfonylureas, many of which have been found to be substrates of the isoenzyme.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2048"
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
    "id": "ddi-pair-0145",
    "drugAId": "drug-linezolid",
    "drugBId": "drug-fluoxetine",
    "drugAName": "Linezolid",
    "drugBName": "Fluoxetine",
    "severity": "Major",
    "mechanism": "Linezolid adalah inhibitor non-selektif enzim Monoamine Oxidase (MAO-A & MAO-B) reversibel. Pemberian bersama SSRI menghambat pemecahan dan reuptake serotonin.",
    "clinicalOutcome": "SINDROM SEROTONIN AKUT yang mengancam jiwa (hipertermia > 40°C, klonus spontan, kekakuan otot, hiperrefleksia, takikardia, koma).",
    "management": "KONTRAINDIKASI MUTLAK. Jangan memberikan linezolid pada pasien yang mengonsumsi SSRI kecuali tidak ada alternatif antibiotik darurat, dengan penghentian SSRI dan pemantauan ketat.",
    "evidenceLevel": "Level 1 - Well Established (FDA Safety Warning)",
    "ddinterPairId": "DDInter-PAIR-104712",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Coadministration of linezolid with serotonergic agents may potentiate the risk of serotonin syndrome, which is a rare but serious and potentially fatal condition thought to result from hyperstimulation of brainstem 5-HT1A and 2A receptors. Linezolid is a reversible, nonselective monoamine oxidase inhibitor (MAOI). As such, it can enhance serotonergic effects by inhibiting serotonin metabolism.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #5391"
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
    "id": "ddi-pair-0146",
    "drugAId": "drug-linezolid",
    "drugBId": "drug-tramadol",
    "drugAName": "Linezolid",
    "drugBName": "Tramadol",
    "severity": "Major",
    "mechanism": "Inhibisi MAO oleh linezolid dikombinasikan dengan efek penghambatan reuptake serotonin oleh tramadol memicu akumulasi serotonin masif di celah sinaps SSP.",
    "clinicalOutcome": "Sindrom Serotonin akut berat, kejang epileptiformis, dan ketidakstabilan otonom.",
    "management": "KONTRAINDIKASI. Hindari penggunaan tramadol saat pasien dalam terapi linezolid. Gunakan opioid murni non-serotonergik (misal morfin dosis rendah) jika analgesik mutlak dibutuhkan.",
    "evidenceLevel": "Level 1 - Well Established (Lexicomp / Micromedex)",
    "ddinterPairId": "DDInter-PAIR-5940",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Monoamine oxidase inhibitors (MAOIs) may potentiate the serotonergic activity of tramadol and increase the risk of serotonin syndrome, which is a rare but serious and potentially fatal condition thought to result from hyperstimulation of brainstem 5HT1A receptors. The mechanism is an additive pharmacodynamic effect resulting from MAOI inhibition of serotonin metabolism. Patients receiving this combination of drugs may also experience an increased risk of seizures due to lowering of seizure threshold.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2043"
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
    "id": "ddi-pair-0147",
    "drugAId": "drug-linezolid",
    "drugBId": "drug-dextromethorphan",
    "drugAName": "Linezolid",
    "drugBName": "Dextromethorphan",
    "severity": "Major",
    "mechanism": "Dextromethorphan adalah penghambat reuptake serotonin yang bila dikombinasikan dengan efek MAO-inhibitor linezolid menyebabkan toksisitas serotonergik sentral.",
    "clinicalOutcome": "Sindrom Serotonin, agitasi delirium, tremor, dan hipertermia mendadak.",
    "management": "HINDARI obat batuk yang mengandung Dextromethorphan pada pasien yang diterapi antibiotik Linezolid.",
    "evidenceLevel": "Level 1 - Well Established (FDA Drug Safety)",
    "ddinterPairId": "DDInter-PAIR-44111",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Coadministration of dextromethorphan with linezolid may increase the risk of serotonin syndrome, a rare but serious and potentially fatal condition thought to result from hyperstimulation of brainstem 5-HT1A and 2A receptors. Dextromethorphan is a weak serotonin reuptake inhibitor whose serotonergic activity may be enhanced by monoamine oxidase inhibitors (MAOIs). Serious and fatal reactions have been reported, primarily with the antidepressant MAOIs. The risk should be lower with linezolid, a relatively weak, reversible MAOI.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3960"
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
    "id": "ddi-pair-0148",
    "drugAId": "drug-levofloxacin",
    "drugBId": "drug-ondansetron",
    "drugAName": "Levofloxacin",
    "drugBName": "Ondansetron",
    "severity": "Moderate",
    "mechanism": "Kombinasi efek aditif pemanjangan waktu repolarisasi ventrikel jantung via pemblokiran kanal kalium IKr / hERG.",
    "clinicalOutcome": "Pemanjangan interval QTc (QTc > 500 ms) dan risiko aritmia ventrikel mematikan Torsades de Pointes (TdP) serta henti jantung mendadak.",
    "management": "Pantau EKG awal dan berkala serta periksa kadar elektrolit serum (K+ dan Mg2+). Hindari kombinasi terutama pada lansia atau pasien dengan riwayat penyakit jantung.",
    "evidenceLevel": "Level 1 - Well Established (CredibleMeds QTdrugs)",
    "ddinterPairId": "DDInter-PAIR-130376",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Certain quinolones, including levofloxacin, norfloxacin, and ofloxacin, may cause dose-related prolongation of the QT interval in some patients. Theoretically, coadministration with other agents that can prolong the QT interval may result in additive effects and increased risk of ventricular arrhythmias including torsade de pointes and sudden death.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1780"
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
    "id": "ddi-pair-0149",
    "drugAId": "drug-azithromycin",
    "drugBId": "drug-haloperidol",
    "drugAName": "Azithromycin",
    "drugBName": "Haloperidol",
    "severity": "Major",
    "mechanism": "Efek sinergis aditif pemanjangan interval QT repolarisasi miokard dan penghambatan kanal kalium.",
    "clinicalOutcome": "Peningkatan signifikan risiko aritmia Torsades de Pointes dan fibrilasi ventrikel.",
    "management": "Hindari kombinasi jika memungkinkan. Lakukan pemantauan EKG kontinu jika pemberian bersamaan tidak dapat dihindari.",
    "evidenceLevel": "Level 1 - Well Established (AHA/ACC Scientific Statement)",
    "ddinterPairId": "DDInter-PAIR-37797",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Haloperidol can cause dose-related prolongation of the QT interval. Theoretically, coadministration with other agents that can prolong the QT interval may result in additive effects and increased risk of ventricular arrhythmias including torsade de pointes and sudden death. Haloperidol treatment alone has been associated with a number of reported cases of torsade de pointes and sudden death. In addition, certain agents with anticholinergic properties (e.g., sedating antihistamines; antispasmodics; neuroleptics; phenothiazines; skeletal muscle relaxants; tricyclic antidepressants) may have additive parasympatholytic and central nervous system-depressant effects when used in combination with haloperidol. Excessive parasympatholytic effects may include paralytic ileus, hyperthermia, mydriasis, blurred vision, tachycardia, urinary retention, psychosis, and seizures.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #5544"
    ],
    "alternativeOptionsA": [
      "Cefixime",
      "Amoxicillin-Clavulanate"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddi-pair-0150",
    "drugAId": "drug-amiodarone",
    "drugBId": "drug-ciprofloxacin",
    "drugAName": "Amiodarone",
    "drugBName": "Ciprofloxacin",
    "severity": "Major",
    "mechanism": "Amiodarone (antiaritmia kelas III) dan Ciprofloxacin (fluorokuinolon) keduanya memperpanjang repolarisasi ventrikel dan menekan kanal IKr.",
    "clinicalOutcome": "Pemanjangan QTc berat, aritmia polimorfik Torsades de Pointes, dan asistol jantung.",
    "management": "KONTRAINDIKASI KOMBINASI. Gunakan antibiotik alternatif non-pemanjang QT (seperti beta-laktam) pada pasien yang mengonsumsi amiodarone.",
    "evidenceLevel": "Level 1 - Well Established (CredibleMeds Category 1)",
    "ddinterPairId": "DDInter-PAIR-21408",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Quinolones such as ciprofloxacin, gatifloxacin, gemifloxacin, levofloxacin, lomefloxacin, moxifloxacin, norfloxacin, ofloxacin, and sparfloxacin may cause dose-related prolongation of the QT interval in some patients. Coadministration with other agents that can prolong the QT interval may result in elevated risk of ventricular arrhythmias, including ventricular tachycardia and torsade de pointes, because of additive arrhythmogenic potential related to their effects on cardiac conduction.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4343"
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
    "id": "ddi-pair-0151",
    "drugAId": "drug-spironolactone",
    "drugBId": "drug-ramipril",
    "drugAName": "Spironolactone",
    "drugBName": "Ramipril",
    "severity": "Major",
    "mechanism": "Inhibisi sistem Renin-Angiotensin-Aldosteron (RAAS) ganda menurunkan sekresi aldosteron adrenal dan menurunkan ekskresi ion kalium di tubulus ginjal distal.",
    "clinicalOutcome": "Hiperkalemia berat (Kalium serum > 5.5 - 6.0 mEq/L), aritmia konduksi jantung, kelemahan otot, dan perburukan fungsi ginjal akut.",
    "management": "PERINGATAN KETAT: Pantau kadar kalium serum dan kreatinin pada baseline, hari ke-3, minggu ke-1, dan secara rutin tiap bulan. Gunakan dosis spironolactone rendah (<=25 mg/hari) pada gagal jantung; hindari suplemen kalium tambahan.",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)",
    "ddinterPairId": "DDInter-PAIR-59395",
    "mechanismCategory": "Synergy",
    "alternativeOptions": [
      "Furosemide",
      "Amlodipine"
    ],
    "ddinterOriginalText": "Concomitant use of angiotensin converting enzyme (ACE) inhibitors and potassium-sparing diuretics may increase the risk of hyperkalemia. Inhibition of ACE results in decreased aldosterone secretion, which can lead to increases in serum potassium that may be additive with that induced by potassium-sparing diuretics. ACE inhibitors may also cause deterioration of renal function in patients with chronic heart failure, and the risk is increased if they are sodium-depleted or dehydrated after excessive diuresis.",
    "ddinterOriginalManagement": "Caution is advised if ACE inhibitors are used with potassium sparing diuretics, particularly in patients with renal impairment, diabetes, old age, worsening heart failure, and/or a risk for dehydration. Serum potassium and renal function should be checked regularly, and potassium supplementation should generally be avoided unless it is closely monitored. Patients should be given dietary advice regarding avoid and advised to seek medical attention if they experience signs and symptoms of hyperkalemia such as weakness, listlessness, confusion, tinging of the extremities, and irregular heartbeat.",
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
    "id": "ddi-pair-0152",
    "drugAId": "drug-spironolactone",
    "drugBId": "drug-potassium-chloride",
    "drugAName": "Spironolactone",
    "drugBName": "Potassium Chloride (Suplemen Kalium)",
    "severity": "Major",
    "mechanism": "Pemberian suplemen kalium eksogen pada pasien yang mengonsumsi diuretik hemat kalium menghambat jalur eliminasi kalium ginjal.",
    "clinicalOutcome": "Hiperkalemia berat (> 6.5 mEq/L) yang memicu asistol jantung dan fibrilasi ventrikel mematikan.",
    "management": "KONTRAINDIKASI kecuali pada pasien dengan hipokalemia refrakter terdokumentasi dengan pemantauan kalium serum sangat ketat.",
    "evidenceLevel": "Level 1 - Well Established (KDIGO Guidelines)",
    "ddinterPairId": "DDInter-PAIR-59378",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "The concomitant use of potassium-sparing diuretics and potassium preparations may result in hyperkalemia.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4715"
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
    "id": "ddi-pair-0153",
    "drugAId": "drug-captopril",
    "drugBId": "drug-candesartan",
    "drugAName": "Captopril (ACEI)",
    "drugBName": "Candesartan (ARB)",
    "severity": "Major",
    "mechanism": "Blokade ganda jalur Renin-Angiotensin-Aldosteron (kombinasi ACEI + ARB) menekan laju filtrasi glomerulus secara berlebihan tanpa memberikan manfaat kardiovaskular tambahan.",
    "clinicalOutcome": "Peningkatan tajam risiko Gagal Ginjal Akut (AKI), hipotensi simtomatik berat, sinkop, dan hiperkalemia.",
    "management": "HINDARI DUAL BLOKADE RAAS. Pilih salah satu antara golongan ACE Inhibitor ATAU ARB.",
    "evidenceLevel": "Level 1 - Well Established (ONTARGET Trial / JNC-8 / ESC)",
    "ddinterPairId": "DDInter-PAIR-254497",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Coadministration of an ACE inhibitor in combination with an angiotensin II receptor antagonist may increase the risk of hyperkalemia, hypotension, syncope, and renal dysfunction due to additive or synergistic effects on the renin-angiotensin system.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #7219"
    ],
    "alternativeOptionsA": [
      "Candesartan",
      "Valsartan",
      "Telmisartan",
      "Amlodipine"
    ],
    "alternativeOptionsB": [
      "Amlodipine",
      "Bisoprolol",
      "Diltiazem"
    ]
  },
  {
    "id": "ddi-pair-0154",
    "drugAId": "drug-methotrexate",
    "drugBId": "drug-ibuprofen",
    "drugAName": "Methotrexate",
    "drugBName": "Ibuprofen",
    "severity": "Major",
    "mechanism": "NSAID menghambat sintesis prostaglandin renal, menurunkan laju filtrasi glomerulus dan sekresi tubular methotrexate melalui transporter OAT1/OAT3, serta mendesak ikatan protein plasma methotrexate.",
    "clinicalOutcome": "Penurunan klirens methotrexate hingga 40-50%, memicu toksisitas fatal methotrexate: supresi sumsum tulang berat (pansitopenia, agranulositosis), ulserasi mukosa oral/saluran cerna, dan nekrosis tubular akut.",
    "management": "KONTRAINDIKASI pada dosis methotrexate onkologi tinggi. Pada dosis rendah artritis (7.5-25 mg/minggu), lakukan pemantauan darah lengkap (CBC) dan fungsi ginjal berkala; berikan asam folat rutin.",
    "evidenceLevel": "Level 1 - Well Established (ACR / EULAR Recommendations)",
    "ddinterPairId": "DDInter-PAIR-10331",
    "mechanismCategory": "Excretion",
    "ddinterOriginalText": "Coadministration with nonsteroidal anti-inflammatory drugs (NSAIDs) may increase the plasma concentrations and toxicities of methotrexate. The proposed mechanism is NSAID inhibition of the renal elimination of methotrexate and its metabolite, 7-hydroxymethotrexate, although data from pharmacokinetic studies are inconsistent and conflicting. Displacement of methotrexate binding to serum albumin by certain NSAIDs may also play a secondary role. Unexpectedly severe and sometimes fatal bone marrow suppression, aplastic anemia, gastrointestinal toxicity, and nephrotoxicity have been reported during concomitant administration of methotrexate with NSAIDs. The risk is greatest in patients receiving high dosages of methotrexate and those with renal impairment.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3474"
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
    "id": "ddi-pair-0155",
    "drugAId": "drug-methotrexate",
    "drugBId": "drug-omeprazole",
    "drugAName": "Methotrexate",
    "drugBName": "Omeprazole",
    "severity": "Major",
    "mechanism": "Inhibitor pompa proton (PPI) menghambat transporter efluks ginjal BCRP (Breast Cancer Resistance Protein) dan OAT3 yang memediasi eliminasi methotrexate dan metabolit aktif 7-OH-methotrexate.",
    "clinicalOutcome": "Peningkatan kadar serum dan retensi methotrexate, memicu toksisitas hematologi dan mukositis berat.",
    "management": "Hentikan PPI sementara selama pemberian infus methotrexate dosis tinggi; gunakan antasida atau antagonis H2 (Famotidine) sebagai alternatif proteksi lambung.",
    "evidenceLevel": "Level 1 - Well Established (FDA Safety Warning)",
    "ddinterPairId": "DDInter-PAIR-105727",
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
    "id": "ddi-pair-0156",
    "drugAId": "drug-lithium",
    "drugBId": "drug-hydrochlorothiazide",
    "drugAName": "Lithium",
    "drugBName": "Hydrochlorothiazide (HCT)",
    "severity": "Major",
    "mechanism": "Diuretik tiazid menginduksi natriuresis dan deplesi natrium di tubulus ginjal, memicu reabsorpsi kompensatori natrium dan ion lithium di tubulus proksimal.",
    "clinicalOutcome": "Penurunan klirens lithium renal sebesar 25-50% dan akumulasi kadar serum lithium ke rentang toksik (> 1.5 mEq/L), memicu toksisitas litium (tremor kasar, ataksia, delirium, gagal ginjal akut, koma).",
    "management": "Hindari kombinasi bila memungkinkan. Jika mutlak diperlukan, kurangi dosis lithium 50% dan pantau kadar serum lithium serial secara ketat.",
    "evidenceLevel": "Level 1 - Well Established (APA Practice Guidelines)",
    "ddinterPairId": "DDInter-PAIR-17158",
    "mechanismCategory": "Excretion",
    "ddinterOriginalText": "Thiazide diuretics may cause a rapid increase in serum lithium levels and potentiate the risk of lithium toxicity. The exact mechanism is unknown but may be related to the sodium loss induced by thiazide diuresis, which produces a compensatory increase in proximal tubular reabsorption of sodium along with lithium.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4850"
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
    "id": "ddi-pair-0157",
    "drugAId": "drug-lithium",
    "drugBId": "drug-diclofenac",
    "drugAName": "Lithium",
    "drugBName": "Diclofenac Sodium",
    "severity": "Major",
    "mechanism": "NSAID menghambat sintesis prostaglandin vasodilator renal, menurunkan aliran darah ginjal dan laju filtrasi ion lithium.",
    "clinicalOutcome": "Peningkatan konsentrasi lithium serum hingga 30-60% dalam beberapa hari terapi, memicu intoksikasi litium.",
    "management": "Hindari penggunaan NSAID pada pasien dengan terapi lithium stabil. Gunakan parasetamol sebagai alternatif analgesik aman.",
    "evidenceLevel": "Level 1 - Well Established (British Journal of Psychiatry)",
    "ddinterPairId": "DDInter-PAIR-000157"
  },
  {
    "id": "ddi-pair-0158",
    "drugAId": "drug-carbamazepine",
    "drugBId": "drug-valproic-acid",
    "drugAName": "Carbamazepine",
    "drugBName": "Valproic Acid",
    "severity": "Moderate",
    "mechanism": "Asam valproat menghambat enzim epoksida hidrolase yang memetabolisme metabolit toksik karbamazepin-10,11-epoksida, sekaligus karbamazepin menginduksi metabolisme valproat.",
    "clinicalOutcome": "Peningkatan kadar metabolit neurotoksik karbamazepin (dizzines berat, diplopia, ataksia, nistagmus) disertai penurunan kadar terapi asam valproat.",
    "management": "Pantau kadar darah kedua obat dan pantau tanda klinis toksisitas neurotoksik karbamazepin.",
    "evidenceLevel": "Level 1 - Well Established (ILAE Guidelines)",
    "ddinterPairId": "DDInter-PAIR-56298",
    "mechanismCategory": "Others",
    "ddinterOriginalText": "Carbamazepine usually decreases valproate levels, and valproate may alter carbamazepine levels in unpredictable ways. Additionally, valproate may prolong the elimination half-life of carbamazepine epoxide. Multiple complex mechanisms may be involved.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #5335"
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
    "id": "ddi-pair-0159",
    "drugAId": "drug-colchicine",
    "drugBId": "drug-clarithromycin",
    "drugAName": "Colchicine",
    "drugBName": "Clarithromycin",
    "severity": "Major",
    "mechanism": "Klaritromisin adalah inhibitor sangat poten isoenzim CYP3A4 dan transporter efluks P-glikoprotein, menyebabkan peningkatan AUC colchicine hingga 200-300%.",
    "clinicalOutcome": "Toksisitas Colchicine Fatal (gagal organ multipel, mielosupresi berat, agranulositosis, rhabdomyolysis, dan kematian, terutama pada pasien gagal ginjal/hati).",
    "management": "KONTRAINDIKASI MUTLAK pada pasien dengan gangguan fungsi ginjal atau hati. Pada pasien fungsi normal, dosis colchicine wajib dipotong minimal 50-75%.",
    "evidenceLevel": "Level 1 - Well Established (FDA Black Box Warning)",
    "ddinterPairId": "DDInter-PAIR-67714",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration of colchicine with clarithromycin may significantly increase the serum concentrations of colchicine. The proposed mechanism is inhibition of the CYP450 3A4-mediated metabolism and P-glycoprotein (P-gp)-mediated transport of colchicine by clarithromycin. Clinical toxicity including myopathy, neuropathy, multiorgan failure, and pancytopenia may occur.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #791"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Azithromycin",
      "Cefixime",
      "Amoxicillin-Clavulanate"
    ]
  },
  {
    "id": "ddi-pair-0160",
    "drugAId": "drug-simvastatin",
    "drugBId": "drug-gemfibrozil",
    "drugAName": "Simvastatin",
    "drugBName": "Gemfibrozil",
    "severity": "Major",
    "mechanism": "Gemfibrozil menghambat glukuronidasi asam simvastatin via enzim UGT1A1/1A3 dan menghambat ambilan hepatik transporter OATP1B1, meningkatkan AUC simvastatin hingga 3 kali lipat.",
    "clinicalOutcome": "Rhabdomyolysis akut parah, mioglobinuria, kerusakan ginjal permanen, dan gagal ginjal akut.",
    "management": "KONTRAINDIKASI MUTLAK. Jika kombinasi statin dan fibrat diperlukan untuk hipertrigliseridemia campuran, gunakan Fenofibrate bersama Atorvastatin/Rosuvastatin dosis rendah.",
    "evidenceLevel": "Level 1 - Well Established (AHA/ACC Cholesterol Guidelines)",
    "ddinterPairId": "DDInter-PAIR-166128",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Severe myopathy and rhabdomyolysis have been reported during concomitant use of HMG-CoA reductase inhibitors and fibric acid derivatives, especially gemfibrozil. Gemfibrozil has been reported to significantly increase the plasma concentrations of some HMG-CoA reductase inhibitors and/or their active metabolites, including lovastatin, simvastatin, pravastatin, cerivastatin, and rosuvastatin (but not fluvastatin). High levels of HMG-CoA reductase inhibitory activity in plasma is associated with an increased risk of musculoskeletal toxicity. Myopathy manifested as muscle pain and/or weakness associated with grossly elevated creatine kinase exceeding ten times the upper limit of normal has been reported occasionally. Rhabdomyolysis has also occurred rarely, which may be accompanied by acute renal failure secondary to myoglobinuria and may result in death. Other fibrates have not been shown to significantly affect the pharmacokinetics of HMG-CoA reductase inhibitors. However, the use of fibrates alone has also been associated with development of myopathy, thus a pharmacodynamic interaction could conceivably occur.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1537"
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
    "id": "ddi-pair-0161",
    "drugAId": "drug-alprazolam",
    "drugBId": "drug-morphine",
    "drugAName": "Alprazolam",
    "drugBName": "Morphine",
    "severity": "Major",
    "mechanism": "Efek sinergis farmakodinamik potensiasi depresi Sistem Saraf Pusat dan pemblokiran refleks kendali pernafasan batang otak.",
    "clinicalOutcome": "Sedasi berat mendalam, depresi pernapasan fatal, koma, dan kematian.",
    "management": "HINDARI KOMBINASI BENZODIAZEPIN DENGAN OPIOID kecuali tidak ada alternatif terapi. Batasi dosis dan durasi seminimal mungkin, serta sediakan antidot Nalokson.",
    "evidenceLevel": "Level 1 - Well Established (FDA Black Box Warning / CDC Guidelines)",
    "ddinterPairId": "DDInter-PAIR-19288",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Concomitant use of opioids with benzodiazepines or other central nervous system (CNS) depressants (e.g., nonbenzodiazepine sedatives/hypnotics, anxiolytics, muscle relaxants, general anesthetics, antipsychotics, other opioids, alcohol) may result in profound sedation, respiratory depression, coma, and death. The risk of hypotension may also be increased with some CNS depressants (e.g., alcohol, benzodiazepines, phenothiazines).",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4260"
    ],
    "alternativeOptionsA": [
      "Buspirone",
      "Melatonin",
      "Hydroxyzine"
    ],
    "alternativeOptionsB": [
      "Paracetamol",
      "Gabapentin",
      "NSAID Topikal"
    ]
  },
  {
    "id": "ddi-pair-0162",
    "drugAId": "drug-sildenafil",
    "drugBId": "drug-isosorbide-dinitrate",
    "drugAName": "Sildenafil (Viagra)",
    "drugBName": "Isosorbide Dinitrate (ISDN)",
    "severity": "Major",
    "mechanism": "Inhibisi PDE-5 oleh sildenafil mencegah pemecahan cGMP intraselular, sementara nitrat meningkatkan produksi cGMP melalui aktivasi Guanilat Siklase.",
    "clinicalOutcome": "Akumulasi masif cGMP intraselular memicu vasodilatasi pembuluh darah sistemik ekstrem, HIPOTENSI REFRAKTER BERAT, syok kardiovaskular, dan iskemia miokard fatal.",
    "management": "KONTRAINDIKASI MUTLAK. Beri jeda minimal 24 jam setelah minum sildenafil (atau 48 jam setelah tadalafil) sebelum memberikan nitrat apa pun.",
    "evidenceLevel": "Level 1 - Well Established (AHA/ACC Practice Guidelines)",
    "ddinterPairId": "DDInter-PAIR-120371",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Phosphodiesterase-5 (PDE5) inhibitors may potentiate the hypotensive effect of organic nitrates. Severe hypotension, syncope, or myocardial ischemia may result from use of the combination. The mechanism involves peripheral vasodilation secondary to enhanced levels of cyclic guanosine monophosphate (cGMP) in vascular smooth muscle cells, as PDE5 inhibitors prevent degradation of cGMP while nitrates promote its synthesis.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4919"
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
    "id": "ddi-pair-0163",
    "drugAId": "drug-allopurinol",
    "drugBId": "drug-azathioprine",
    "drugAName": "Allopurinol",
    "drugBName": "Azathioprine",
    "severity": "Major",
    "mechanism": "Allopurinol menghambat enzim Xanthine Oxidase yang memetabolisme azathioprine dan metabolit aktif 6-merkaptopurin menjadi asam 6-tiourat inaktif.",
    "clinicalOutcome": "Akumulasi masif metabolit 6-tioguanin sitotoksik, memicu supresi sumsum tulang berat yang fatal (pansitopenia, leukopenia, sepsis).",
    "management": "Jika kombinasi mutlak diperlukan, TURUNKAN DOSIS AZATHIOPRINE SEBESAR 75% (gunakan 25% dari dosis standar) dan pantau hitung darah lengkap (CBC) mingguan.",
    "evidenceLevel": "Level 1 - Well Established (CPIC Guidelines / BSR Guidelines)",
    "ddinterPairId": "DDInter-PAIR-17592",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Allopurinol may potentiate the pharmacologic effects of orally administered thiopurines. Severe bone marrow suppression and other toxicity have been associated with concomitant use of allopurinol and mercaptopurine (6-MP) or azathioprine, the latter of which is metabolized to 6-MP in vivo. The mechanism is thought to be allopurinol inhibition of 6-MP first-pass metabolism via hepatic or intestinal xanthine oxidase, the enzyme that catalyzes the inactivation of 6-MP. In one study, allopurinol pretreatment resulted in a nearly 500% increase in peak plasma concentration (Cmax) and area under the concentration-time curve (AUC) of oral 6-MP. No effect was observed on the pharmacokinetics of intravenous 6-MP. In a retrospective study of 24 heart and/or lung transplant patients receiving azathioprine, investigators found that 46% became leukopenic, 30% moderately anemic, and 22% thrombocytopenic within 3 months after starting allopurinol despite general compliance with thiopurine dosage reduction guidelines. Thus, decreasing the dosage by two-thirds or greater as often recommended does not abolish the risk of myelotoxicity.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #5212"
    ],
    "alternativeOptionsA": [
      "Febuxostat",
      "Colchicine (Profilaksis Akut)"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddi-pair-0164",
    "drugAId": "drug-theophylline",
    "drugBId": "drug-ciprofloxacin",
    "drugAName": "Theophylline",
    "drugBName": "Ciprofloxacin",
    "severity": "Major",
    "mechanism": "Ciprofloxacin menghambat poten enzim CYP1A2 hepar yang bertanggung jawab atas eliminasi 90% teofilin.",
    "clinicalOutcome": "Klirens teofilin anjlok 30-50%, memicu Toksisitas Teofilin Akut (takikardia ventrikel, aritmia berat, kejang refrakter, dan henti jantung).",
    "management": "Hindari siprofloksasin pada pasien pengguna teofilin. Jika harus digunakan, kurangi dosis teofilin sebesar 50% dan pantau kadar teofilin serum.",
    "evidenceLevel": "Level 1 - Well Established (FDA Drug Reference)",
    "ddinterPairId": "DDInter-PAIR-66337",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with ciprofloxacin may significantly increase the serum concentrations of theophylline and the associated risk of toxicity. The mechanism is ciprofloxacin inhibition of theophylline metabolism via CYP450 1A2.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3586"
    ],
    "alternativeOptionsA": [
      "Formoterol Inhaler",
      "Tiotropium",
      "Budesonide Inhaler"
    ],
    "alternativeOptionsB": [
      "Azithromycin",
      "Cefixime",
      "Amoxicillin-Clavulanate",
      "Ceftriaxone"
    ]
  },
  {
    "id": "ddi-pair-0165",
    "drugAId": "drug-nirmatrelvir-ritonavir",
    "drugBId": "drug-simvastatin",
    "drugAName": "Nirmatrelvir / Ritonavir (Paxlovid)",
    "drugBName": "Simvastatin",
    "severity": "Major",
    "mechanism": "Ritonavir dalam Paxlovid adalah inhibitor enzim CYP3A4 paling poten yang dikenal di dunia medis.",
    "clinicalOutcome": "Peningkatan konsentrasi simvastatin plasma hingga > 1000%, memicu rhabdomyolysis masif dan gagal ginjal akut.",
    "management": "KONTRAINDIKASI MUTLAK. Hentikan simvastatin atau lovastatin minimal 12 jam sebelum memulai Paxlovid dan selama 5 hari masa terapi serta 3 hari setelah selesai.",
    "evidenceLevel": "Level 1 - Well Established (NIH COVID-19 Treatment Guidelines)",
    "ddinterPairId": "DDInter-PAIR-000165"
  },
  {
    "id": "ddi-pair-0166",
    "drugAId": "drug-sacubitril-valsartan",
    "drugBId": "drug-captopril",
    "drugAName": "Sacubitril / Valsartan",
    "drugBName": "Captopril",
    "severity": "Major",
    "mechanism": "Inhibisi simultan enzim Neprilisin oleh sacubitril dan Angiotensin-Converting Enzyme (ACE) oleh kaptopril melipatgandakan akumulasi bradikinin plasma.",
    "clinicalOutcome": "KONTRAINDIKASI MUTLAK. Memicu ANGIOEDEMA LARING/FARING MASIF YANG MENGANCAM JIWA, spasme saluran napas, asfiksia, dan hipotensi refrakter berat.",
    "management": "KONTRAINDIKASI MUTLAK BERSAMAAN. Berikan masa tunggu jeda henti (washout period) MINIMAL 36 JAM setelah dosis ACE inhibitor terakhir sebelum memulai Sacubitril/Valsartan, atau sebaliknya.",
    "evidenceLevel": "Level 1 - Well Established (PARADIGM-HF Trial / FDA Black Box / AHA/ACC/ESC Guidelines)",
    "ddinterPairId": "DDInter-PAIR-000166"
  },
  {
    "id": "ddi-pair-0167",
    "drugAId": "drug-sacubitril-valsartan",
    "drugBId": "drug-ramipril",
    "drugAName": "Sacubitril / Valsartan",
    "drugBName": "Ramipril",
    "severity": "Major",
    "mechanism": "Blokade ganda degradasi bradikinin dan substansi P via inhibisi neprilisin dan ACE.",
    "clinicalOutcome": "Lonjakan risiko Angioedema kepala, leher, dan saluran napas fatal hingga 10-15 kali lipat.",
    "management": "KONTRAINDIKASI BERSAMAAN. Wajib jeda pembersihan obat (washout period) minimal 36 jam penuh antara kedua obat.",
    "evidenceLevel": "Level 1 - Well Established (FDA Prescribing Info / ESC Heart Failure Guidelines)",
    "ddinterPairId": "DDInter-PAIR-000167"
  },
  {
    "id": "ddi-pair-0168",
    "drugAId": "drug-sacubitril-valsartan",
    "drugBId": "drug-lisinopril",
    "drugAName": "Sacubitril / Valsartan",
    "drugBName": "Lisinopril",
    "severity": "Major",
    "mechanism": "Inhibisi aditif neprilisin dan ACE pada jalur metabolik kinin endogen.",
    "clinicalOutcome": "Angioedema fatal, obstruksi saluran napas akut, dan hipotensi simtomatik berat.",
    "management": "KONTRAINDIKASI MUTLAK. Hentikan Lisinopril minimal 36 jam sebelum memulai dosis pertama Sacubitril/Valsartan.",
    "evidenceLevel": "Level 1 - Well Established (AHA/ACC Heart Failure Practice Guidelines)",
    "ddinterPairId": "DDInter-PAIR-000168"
  },
  {
    "id": "ddi-pair-0169",
    "drugAId": "drug-sacubitril-valsartan",
    "drugBId": "drug-spironolactone",
    "drugAName": "Sacubitril / Valsartan",
    "drugBName": "Spironolactone",
    "severity": "Major",
    "mechanism": "Blokade ganda reseptor Angiotensin II AT1 dan reseptor Mineralokortikoid Aldosteron menekan sekresi kalium di tubulus distal ginjal.",
    "clinicalOutcome": "Peningkatan tajam risiko HIPERKALEMIA BERAT (K+ > 5.5 - 6.5 mEq/L), aritmia ventrikel fatal, dan azotemia prerenal.",
    "management": "Pantau kalium serum dan kreatinin/eGFR baseline, pada 1-2 minggu setelah inisiasi/titrasi dosis, lalu berkala tiap 3-6 bulan. Hindari suplemen kalium tambahan.",
    "evidenceLevel": "Level 1 - Well Established (PARADIGM-HF / ESC Heart Failure Guidelines)",
    "ddinterPairId": "DDInter-PAIR-000169"
  },
  {
    "id": "ddi-pair-0170",
    "drugAId": "drug-ticagrelor",
    "drugBId": "drug-aspirin",
    "drugAName": "Ticagrelor",
    "drugBName": "Aspirin",
    "severity": "Moderate",
    "mechanism": "Dosis pemeliharaan aspirin dosis tinggi (>100 mg/hari) menurunkan efikasi proteksi kardiovaskular ticagrelor melalui modulasi sintetase prostaglandin vaskular.",
    "clinicalOutcome": "Penurunan efektivitas klinis Ticagrelor dalam mencegah MACE (Major Adverse Cardiac Events) dan peningkatan risiko perdarahan (PLATO Trial sub-analysis).",
    "management": "Gunakan dosis pemeliharaan aspirin DOSIS RENDAH (75 - 100 mg sekali sehari). HINDARI dosis aspirin maintenance >100 mg/hari saat dikombinasikan dengan Ticagrelor.",
    "evidenceLevel": "Level 1 - Well Established (PLATO Trial / FDA Black Box Warning / AHA-ACC ACS Guidelines)",
    "ddinterPairId": "DDInter-PAIR-34210",
    "mechanismCategory": "Antagonism",
    "ddinterOriginalText": "Use of high maintenance dosages of aspirin may decrease the effectiveness of ticagrelor in preventing thrombotic events in patients with acute coronary syndromes. The underlying biological mechanism has not been established.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3527"
    ],
    "alternativeOptionsA": [
      "Clopidogrel",
      "Cilostazol"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddi-pair-0171",
    "drugAId": "drug-ticagrelor",
    "drugBId": "drug-diltiazem",
    "drugAName": "Ticagrelor",
    "drugBName": "Diltiazem",
    "severity": "Moderate",
    "mechanism": "Diltiazem adalah inhibitor moderat CYP3A4 hepar yang menghambat metabolisme oksidatif ticagrelor.",
    "clinicalOutcome": "Peningkatan konsentrasi Cmax ticagrelor sebesar 69% dan AUC sebesar 174%, meningkatkan risiko perdarahan dan dispnea yang diinduksi ticagrelor.",
    "management": "Kombinasi dapat digunakan dengan pemantauan tanda-tanda perdarahan, memar luas, dan gejala dispnea. Pertimbangkan antihipertensi alternatif jika terjadi efek samping.",
    "evidenceLevel": "Level 1 - Well Established (FDA Prescribing Information)",
    "ddinterPairId": "DDInter-PAIR-58139",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with moderate inhibitors of CYP450 3A4 may increase the plasma concentrations of ticagrelor, which is primarily metabolized by the isoenzyme.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4576"
    ],
    "alternativeOptionsA": [
      "Clopidogrel",
      "Cilostazol"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddi-pair-0172",
    "drugAId": "drug-ticagrelor",
    "drugBId": "drug-ketoconazole",
    "drugAName": "Ticagrelor",
    "drugBName": "Ketoconazole",
    "severity": "Major",
    "mechanism": "Ketokonazol menghambat poten isoenzim CYP3A4 yang memetabolisme ticagrelor.",
    "clinicalOutcome": "Peningkatan AUC ticagrelor hingga > 7 kali lipat (740%) dan Cmax hingga 2.4 kali lipat, memicu lonjakan risiko perdarahan mayor spontan dan intrakranial.",
    "management": "HINDARI PENGGUNAAN BERSAMAAN inhibitor poten CYP3A4 (ketoconazole, itraconazole, clarithromycin, voriconazole) dengan Ticagrelor.",
    "evidenceLevel": "Level 1 - Well Established (FDA Drug Safety / CPIC Guidelines)",
    "ddinterPairId": "DDInter-PAIR-171389",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with potent inhibitors of CYP450 3A4 may significantly increase the plasma concentrations of ticagrelor, which is primarily metabolized by the isoenzyme.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3294"
    ],
    "alternativeOptionsA": [
      "Clopidogrel",
      "Cilostazol"
    ],
    "alternativeOptionsB": [
      "Fluconazole",
      "Terbinafine",
      "Nystatin",
      "Micafungin"
    ]
  },
  {
    "id": "ddi-pair-0173",
    "drugAId": "drug-ticagrelor",
    "drugBId": "drug-rifampicin",
    "drugAName": "Ticagrelor",
    "drugBName": "Rifampicin",
    "severity": "Major",
    "mechanism": "Rifampisin menginduksi ekspresi CYP3A4 dan P-gp secara masif, mempercepat eliminasi ticagrelor.",
    "clinicalOutcome": "Konsentrasi plasma ticagrelor dan metabolit aktifnya anjlok > 80%, memicu KEGAGALAN TERAPI ANTIAGREGASI TROMBOSIT dan trombosis stent koroner akut fatal.",
    "management": "KONTRAINDIKASI BERSAMAAN / HINDARI. Gunakan alternatif antikoagulasi/antiplatelet yang tidak bergantung pada metabolisme CYP3A4 (misal: Prasugrel dengan evaluasi ketat, atau Clopidogrel dosis tinggi dengan monitoring).",
    "evidenceLevel": "Level 1 - Well Established (FDA Prescribing Info / AHA Guidelines)",
    "ddinterPairId": "DDInter-PAIR-161547",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with potent inducers of CYP450 3A4 may significantly decrease the plasma concentrations of ticagrelor, which is primarily metabolized by the isoenzyme.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3109"
    ],
    "alternativeOptionsA": [
      "Clopidogrel",
      "Cilostazol"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddi-pair-0174",
    "drugAId": "drug-prasugrel",
    "drugBId": "drug-warfarin",
    "drugAName": "Prasugrel",
    "drugBName": "Warfarin",
    "severity": "Major",
    "mechanism": "Inhibisi poten fungsi trombosit oleh prasugrel berkombinasi dengan penekanan faktor pembekuan II, VII, IX, X oleh warfarin.",
    "clinicalOutcome": "Peningkatan drastis kejadian perdarahan gastrointestinal masif, hematuria berat, dan perdarahan intrakranial yang mengancam jiwa.",
    "management": "HINDARI kombinasi rutin kecuali pada indikasi spesifik (misal: ACS/stent pada pasien dengan fibrilasi atrium atau katup mekanik). Jika mutlak diperlukan (Triple/Double therapy), batasi durasi sesingkat mungkin dan tambahkan PPI.",
    "evidenceLevel": "Level 1 - Well Established (TRITON-TIMI 38 / ESC Antithrombotic Guidelines)",
    "ddinterPairId": "DDInter-PAIR-122546",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Concomitant use of prasugrel with other agents that affect hemostasis such as anticoagulants, platelet inhibitors, thrombin inhibitors, thrombolytic agents, dextran, nonsteroidal anti-inflammatory agents (chronic), or agents that commonly cause thrombocytopenia may increase the risk of bleeding. Prasugrel may be used with aspirin, heparin, or glycoprotein IIb/IIIa inhibitors.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2251"
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
    "id": "ddi-pair-0175",
    "drugAId": "drug-edoxaban",
    "drugBId": "drug-verapamil",
    "drugAName": "Edoxaban",
    "drugBName": "Verapamil",
    "severity": "Major",
    "mechanism": "Verapamil adalah inhibitor poten transporter efluks P-glikoprotein (P-gp) di mukosa usus dan tubulus ginjal, meningkatkan absorpsi edoxaban.",
    "clinicalOutcome": "Konsentrasi puncak dan paparan sistemik (AUC) edoxaban meningkat sekitar 53%, meningkatkan risiko perdarahan klinis.",
    "management": "TURUNKAN DOSIS EDOXABAN SEBESAR 50%: dari dosis standar 60 mg sekali sehari menjadi 30 mg sekali sehari jika digunakan bersama verapamil oral.",
    "evidenceLevel": "Level 1 - Well Established (ENGAGE AF-TIMI 48 / FDA Prescribing Info)",
    "ddinterPairId": "DDInter-PAIR-75335",
    "mechanismCategory": "Absorption",
    "ddinterOriginalText": "Coadministration with inhibitors of P-glycoprotein (P-gp) may increase the plasma concentrations of edoxaban, which is a substrate of the efflux transporter.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4703"
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
    "id": "ddi-pair-0176",
    "drugAId": "drug-edoxaban",
    "drugBId": "drug-dronedarone",
    "drugAName": "Edoxaban",
    "drugBName": "Dronedarone",
    "severity": "Major",
    "mechanism": "Dronedarone menghambat transporter efluks P-gp yang memediasi pembersihan edoxaban.",
    "clinicalOutcome": "Peningkatan AUC edoxaban hingga 85%, melipatgandakan risiko perdarahan mayor.",
    "management": "TURUNKAN DOSIS EDOXABAN MENJADI 30 MG SEKALI SEHARI jika diresepkan bersama Dronedarone 400 mg bid.",
    "evidenceLevel": "Level 1 - Well Established (FDA Prescribing Information / EMA SmPC)",
    "ddinterPairId": "DDInter-PAIR-92465",
    "mechanismCategory": "Absorption",
    "ddinterOriginalText": "Coadministration with inhibitors of P-glycoprotein (P-gp) may increase the plasma concentrations of edoxaban, which is a substrate of the efflux transporter.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4703"
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
    "id": "ddi-pair-0177",
    "drugAId": "drug-edoxaban",
    "drugBId": "drug-rifampicin",
    "drugAName": "Edoxaban",
    "drugBName": "Rifampicin",
    "severity": "Major",
    "mechanism": "Rifampisin adalah penginduksi kuat transporter P-gp di usus dan hepar.",
    "clinicalOutcome": "Penurunan konsentrasi plasma edoxaban hingga > 35-40%, memicu kegagalan proteksi stroke iskemik dan emboli sistemik.",
    "management": "HINDARI penggunaan bersamaan Edoxaban dengan Rifampisin. Pertimbangkan alternatif antikoagulan yang dapat dipantau kadarnya seperti Unfractionated Heparin atau LMWH.",
    "evidenceLevel": "Level 1 - Well Established (FDA Prescribing Information)",
    "ddinterPairId": "DDInter-PAIR-95409",
    "mechanismCategory": "Absorption",
    "ddinterOriginalText": "Coadministration with rifampin may reduce the bioavailability of edoxaban. The proposed mechanism is rifampin induction of the P-glycoprotein efflux transporter, of which edoxaban is a substrate.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1944"
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
    "id": "ddi-pair-0178",
    "drugAId": "drug-rivaroxaban",
    "drugBId": "drug-diltiazem",
    "drugAName": "Rivaroxaban",
    "drugBName": "Diltiazem",
    "severity": "Moderate",
    "mechanism": "Diltiazem menghambat moderat CYP3A4 dan P-gp, menurunkan laju klirens metabolik dan ekskresi rivaroxaban.",
    "clinicalOutcome": "Peningkatan paparan sistemik rivaroxaban (AUC meningkat ~40-50%), meningkatkan risiko perdarahan pada pasien dengan insufisiensi ginjal (CrCl 15-50 mL/min).",
    "management": "Gunakan dengan hati-hati. Pantau tanda perdarahan (hematoma, melena, hematuria). Pada pasien dengan CrCl <50 mL/min, pertimbangkan pengawasan ketat atau dosis rivaroxaban yang disesuaikan.",
    "evidenceLevel": "Level 1 - Well Established (ROCKET AF / FDA Clinical Pharmacology)",
    "ddinterPairId": "DDInter-PAIR-58074",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with weak or moderate dual inhibitors of CYP450 3A4 and P-glycoprotein (P-gp) may increase the plasma concentrations of rivaroxaban, which is a substrate of both the isoenzyme and efflux transporter.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4806"
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
    "id": "ddi-pair-0179",
    "drugAId": "drug-rivaroxaban",
    "drugBId": "drug-amiodarone",
    "drugAName": "Rivaroxaban",
    "drugBName": "Amiodarone",
    "severity": "Moderate",
    "mechanism": "Amiodarone menghambat moderat CYP3A4 dan P-gp di usus dan ginjal.",
    "clinicalOutcome": "Peningkatan kadar plasma rivaroxaban, meningkatkan risiko komplikasi perdarahan mayor.",
    "management": "Kombinasi dapat digunakan namun memerlukan pengawasan klinis ketat terhadap tanda perdarahan, terutama pada pasien lanjut usia (>=75 tahun) atau gangguan fungsi ginjal.",
    "evidenceLevel": "Level 1 - Well Established (FDA Drug Safety / ESC Guidelines)",
    "ddinterPairId": "DDInter-PAIR-21782",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with weak or moderate dual inhibitors of CYP450 3A4 and P-glycoprotein (P-gp) may increase the plasma concentrations of rivaroxaban, which is a substrate of both the isoenzyme and efflux transporter.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4806"
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
    "id": "ddi-pair-0180",
    "drugAId": "drug-apixaban",
    "drugBId": "drug-diltiazem",
    "drugAName": "Apixaban",
    "drugBName": "Diltiazem",
    "severity": "Moderate",
    "mechanism": "Diltiazem adalah inhibitor moderat CYP3A4 dan P-gp.",
    "clinicalOutcome": "Peningkatan paparan sistemik apixaban (AUC naik ~40%), meningkatkan risiko perdarahan.",
    "management": "Dosis apixaban standar tidak perlu diubah bila diltiazem digunakan sendiri; namun jika pasien memiliki 2 dari 3 kriteria reduksi (Usia >=80, BB <=60 kg, Serum Cr >=1.5 mg/dL), kurangi apixaban ke 2.5 mg bid.",
    "evidenceLevel": "Level 1 - Well Established (ARISTOTLE Trial / FDA Prescribing Info)",
    "ddinterPairId": "DDInter-PAIR-27962",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with inhibitors of CYP450 3A4 and/or P-glycoprotein (P-gp) may increase the plasma concentrations of apixaban, which is a substrate of both the isoenzyme and efflux transporter.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2670"
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
    "id": "ddi-pair-0181",
    "drugAId": "drug-apixaban",
    "drugBId": "drug-amiodarone",
    "drugAName": "Apixaban",
    "drugBName": "Amiodarone",
    "severity": "Moderate",
    "mechanism": "Amiodarone menghambat CYP3A4 dan P-gp, menurunkan eliminasi apixaban.",
    "clinicalOutcome": "Peningkatan konsentrasi apixaban plasma dan risiko perdarahan mikro/makroskopik.",
    "management": "Pantau tanda-tanda perdarahan occult dan hematuria secara berkala.",
    "evidenceLevel": "Level 1 - Well Established (FDA Clinical Pharmacology)",
    "ddinterPairId": "DDInter-PAIR-21333",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with inhibitors of CYP450 3A4 and/or P-glycoprotein (P-gp) may increase the plasma concentrations of apixaban, which is a substrate of both the isoenzyme and efflux transporter.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2670"
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
    "id": "ddi-pair-0182",
    "drugAId": "drug-dabigatran",
    "drugBId": "drug-dronedarone",
    "drugAName": "Dabigatran",
    "drugBName": "Dronedarone",
    "severity": "Major",
    "mechanism": "Dronedarone adalah inhibitor poten P-gp yang melipatgandakan absorpsi dabigatran etexilate di saluran cerna.",
    "clinicalOutcome": "Peningkatan konsentrasi plasma dabigatran hingga 70-100%, meningkatkan risiko perdarahan gastrointestinal dan intrakranial mayor.",
    "management": "KONTRAINDIKASI PADA GANGGUAN GINJAL BERAT (CrCl <30 mL/min). Pada fungsi ginjal normal (CrCl 30-50 mL/min), turunkan dosis dabigatran menjadi 75 mg atau 110 mg dua kali sehari.",
    "evidenceLevel": "Level 1 - Well Established (FDA Drug Safety Communication / RE-LY Trial)",
    "ddinterPairId": "DDInter-PAIR-000182"
  },
  {
    "id": "ddi-pair-0183",
    "drugAId": "drug-dabigatran",
    "drugBId": "drug-verapamil",
    "drugAName": "Dabigatran",
    "drugBName": "Verapamil",
    "severity": "Moderate",
    "mechanism": "Verapamil menghambat transporter P-gp di membran enterosit usus halus.",
    "clinicalOutcome": "Peningkatan konsentrasi plasma dabigatran sebesar 60-150% tergantung waktu pemberian relatif.",
    "management": "Berikan Dabigatran minimal 2 JAM SEBELUM Verapamil oral untuk meminimalkan interaksi P-gp di lumen usus, atau turunkan dosis dabigatran menjadi 110 mg bid (pada pasien lanjut usia / CrCl 30-50 mL/min).",
    "evidenceLevel": "Level 1 - Well Established (EMA SmPC / FDA Prescribing Info)",
    "ddinterPairId": "DDInter-PAIR-000183"
  },
  {
    "id": "ddi-pair-0184",
    "drugAId": "drug-dabigatran",
    "drugBId": "drug-amiodarone",
    "drugAName": "Dabigatran",
    "drugBName": "Amiodarone",
    "severity": "Moderate",
    "mechanism": "Amiodarone menghambat efluks transporter P-gp ginjal dan usus.",
    "clinicalOutcome": "Peningkatan konsentrasi plasma dabigatran sekitar 50-60%.",
    "management": "Pantau tanda perdarahan secara klinis. Pada pasien dengan insufisiensi ginjal sedang (CrCl 30-50 mL/min), pertimbangkan reduksi dosis dabigatran menjadi 75-110 mg bid.",
    "evidenceLevel": "Level 1 - Well Established (RE-LY Trial / FDA Label)",
    "ddinterPairId": "DDInter-PAIR-000184"
  },
  {
    "id": "ddi-pair-0185",
    "drugAId": "drug-warfarin",
    "drugBId": "drug-amiodarone",
    "drugAName": "Warfarin",
    "drugBName": "Amiodarone",
    "severity": "Major",
    "mechanism": "Amiodarone dan metabolitnya desetilamiodaron menghambat poten enzim CYP2C9 (jalur klirens S-warfarin aktif) serta CYP1A2 dan CYP3A4.",
    "clinicalOutcome": "LONJAKAN NILAI INR TIDAK TERKONTROL (sering mencapai > 5.0 - 10.0), memicu perdarahan mayor, hematuria berat, dan stroke hemoragik.",
    "management": "WAJIB TURUNKAN DOSIS WARFARIN SEBESAR 33% HINGGA 50% saat memulai amiodarone. Pantau INR tiap 3-5 hari hingga stabil. Efek inhibisi dapat bertahan beberapa bulan setelah amiodarone dihentikan karena t1/2 amiodarone yang sangat panjang.",
    "evidenceLevel": "Level 1 - Well Established (CHEST Practice Guidelines / CPIC Guidelines)",
    "ddinterPairId": "DDInter-PAIR-21901",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Amiodarone may increase the pharmacologic effects of warfarin by inhibiting CYP450 2C9 hepatic metabolism of S-warfarin. Similar effects may also occur with other oral anticoagulants, resulting in significant hypoprothrombinemia and bleeding. When amiodarone is added to an anticoagulant regimen, increased anticoagulant effects may become apparent within one to several weeks and may persist for months after the amiodarone is discontinued. The effects of this interaction are highly variable - while some patients are asymptomatic, serious and life-threatening bleeding complications have been reported in others. Patients who are poor CYP450 2C9 metabolizers may have a higher risk of bleeding and a faster onset of the interaction.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2857"
    ],
    "alternativeOptionsA": [
      "Apixaban",
      "Rivaroxaban",
      "Dabigatran"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddi-pair-0186",
    "drugAId": "drug-warfarin",
    "drugBId": "drug-metronidazole",
    "drugAName": "Warfarin",
    "drugBName": "Metronidazole",
    "severity": "Major",
    "mechanism": "Metronidazole menghambat secara stereoselektif isoenzim CYP2C9 hepar yang memetabolisme S-warfarin (enantiomer yang 5x lebih poten dibanding R-warfarin).",
    "clinicalOutcome": "Nilai INR melonjak drastis dalam 2-4 hari pasca inisiasi metronidazole dengan risiko perdarahan gastrointestinal masif.",
    "management": "TURUNKAN DOSIS WARFARIN SEBESAR 30-50% saat memulai metronidazole, atau pilih antibiotik alternatif non-interaktif jika memungkinkan. Periksa INR pada hari ke-3 terapi.",
    "evidenceLevel": "Level 1 - Well Established (FDA MedWatch / CHEST Antithrombotic Therapy Guidelines)",
    "ddinterPairId": "DDInter-PAIR-44845",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with metronidazole may increase the plasma concentrations and hypoprothrombinemic effect of warfarin. The proposed mechanism is metronidazole inhibition of CYP450 2C9, the isoenzyme responsible for the metabolic clearance of the more active S(-) enantiomer of warfarin.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2820"
    ],
    "alternativeOptionsA": [
      "Apixaban",
      "Rivaroxaban",
      "Dabigatran"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddi-pair-0187",
    "drugAId": "drug-warfarin",
    "drugBId": "drug-cotrimoxazole",
    "drugAName": "Warfarin",
    "drugBName": "Cotrimoxazole",
    "severity": "Moderate",
    "mechanism": "Sulfametoksazol menghambat poten CYP2C9 dan mendesak ikatan warfarin pada albumin plasma, sementara trimetoprim mengganggu flora usus penghasil vitamin K.",
    "clinicalOutcome": "Kenaikan ekstrim nilai INR (sering > 8.0) dan perdarahan masif.",
    "management": "HINDARI kombinasi bila ada antibiotik alternatif. Jika mutlak diberikan, POTONG DOSIS WARFARIN SEBESAR 50% dan periksa INR serial tiap 2-3 hari.",
    "evidenceLevel": "Level 1 - Well Established (CPIC Guidelines / Stockley's Drug Interactions)",
    "ddinterPairId": "DDInter-PAIR-122638",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Many antibacterials may potentiate the hypoprothrombinemic effect of oral warfarin and other coumarin anticoagulants. The exact mechanism is unknown but may involve inhibition of coumarin metabolism and/or depletion of certain clotting factors due to suppression of vitamin K-producing intestinal flora. Other influences such as fever, infection, malnutrition, renal impairment, age, and other concomitant underlying conditions on clotting mechanisms and anticoagulant pharmacokinetics should also be considered.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #5403"
    ],
    "alternativeOptionsA": [
      "Apixaban",
      "Rivaroxaban",
      "Dabigatran"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddi-pair-0188",
    "drugAId": "drug-warfarin",
    "drugBId": "drug-rifampicin",
    "drugAName": "Warfarin",
    "drugBName": "Rifampicin",
    "severity": "Major",
    "mechanism": "Rifampisin adalah penginduksi CYP2C9, CYP3A4, dan CYP1A2 paling poten dalam farmakologi klinis.",
    "clinicalOutcome": "Klirens warfarin melonjak hingga 300%, nilai INR anjlok ke tingkat sub-terapeutik (<1.5), memicu KEGAGALAN ANTIKOAGULASI DAN TROMBOSIS/EMBOLI PARU FATAL.",
    "management": "Dosis warfarin sering kali perlu DINAIKKAN HINGGA 2 - 3 KALI LIPAT selama terapi rifampisin. Pantau INR mingguan, dan WASPADAI lonjakan toksik INR saat rifampisin dihentikan.",
    "evidenceLevel": "Level 1 - Well Established (CHEST Practice Guidelines)",
    "ddinterPairId": "DDInter-PAIR-110005",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Rifampin may decrease the anticoagulant effect of warfarin by enhancing CYP450 hepatic microsomal enzyme metabolism of warfarin.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #5546"
    ],
    "alternativeOptionsA": [
      "Apixaban",
      "Rivaroxaban",
      "Dabigatran"
    ],
    "alternativeOptionsB": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ]
  },
  {
    "id": "ddi-pair-0189",
    "drugAId": "drug-spironolactone",
    "drugBId": "drug-captopril",
    "drugAName": "Spironolactone",
    "drugBName": "Captopril",
    "severity": "Major",
    "mechanism": "Penghambatan ganda aksis Renin-Angiotensin-Aldosteron (RAAS): penghambat ACE (Captopril) menurunkan sekresi aldosteron adrenal dan Spironolactone memblokade reseptor aldosteron mineralokortikoid di tubulus distal ginjal, secara sinergis menahan ekskresi ion kalium.",
    "clinicalOutcome": "Risiko Hiperkalemia Berat Mengancam Jiwa (K+ > 5.5 - 6.0 mEq/L, aritmia ventrikel fatal, henti jantung mendadak) serta kemunduran fungsi ginjal akut (peningkatan kreatinin serum/ureum), terutama pada pasien lansia, diabetes, atau gagal jantung dekompensasi.",
    "management": "PERINGATAN KETAT / PEMANTAUAN INTENSIF: Meskipun kombinasi ini merupakan terapi terarah pedoman (GDMT) untuk gagal jantung HFrEF guna menurunkan mortalitas, DDInter 2.0 menetapkannya sebagai interaksi Major karena potensi bahaya hiperkalemia fatal. Wajib periksa kadar kalium serum dan fungsi ginjal secara teratur (baseline, minggu ke-1, bulan ke-1, lalu tiap 3-6 bulan). Batasi dosis Spironolactone (maksimal 25-50 mg/hari pada gagal jantung), hindari suplemen kalium eksogen dan pengganti garam tinggi kalium, serta edukasi pasien mengenali gejala hiperkalemia (kelemahan otot, kesemutan, palpitasi).",
    "evidenceLevel": "Level 1 - Well Established (DDInter 2.0 / Nature Protocols 2022)",
    "ddinterPairId": "DDInter-PAIR-56071",
    "mechanismCategory": "Synergy",
    "alternativeOptions": [
      "Furosemide",
      "Amlodipine"
    ],
    "ddinterOriginalText": "Concomitant use of angiotensin converting enzyme (ACE) inhibitors and potassium-sparing diuretics may increase the risk of hyperkalemia. Inhibition of ACE results in decreased aldosterone secretion, which can lead to increases in serum potassium that may be additive with that induced by potassium-sparing diuretics. ACE inhibitors may also cause deterioration of renal function in patients with chronic heart failure, and the risk is increased if they are sodium-depleted or dehydrated after excessive diuresis.",
    "ddinterOriginalManagement": "Caution is advised if ACE inhibitors are used with potassium sparing diuretics, particularly in patients with renal impairment, diabetes, old age, worsening heart failure, and/or a risk for dehydration. Serum potassium and renal function should be checked regularly, and potassium supplementation should generally be avoided unless it is closely monitored. Patients should be given dietary advice regarding avoid and advised to seek medical attention if they experience signs and symptoms of hyperkalemia such as weakness, listlessness, confusion, tinging of the extremities, and irregular heartbeat.",
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
    "id": "ddi-pair-0190",
    "drugAId": "drug-spironolactone",
    "drugBId": "drug-candesartan",
    "drugAName": "Spironolactone",
    "drugBName": "Candesartan",
    "severity": "Major",
    "mechanism": "Blokade aditif reseptor AT1 oleh candesartan dan reseptor aldosteron oleh spironolactone pada nefron distal.",
    "clinicalOutcome": "Hiperkalemia simptomatik, penurunan fungsi filtrasi glomerulus, dan hipotensi.",
    "management": "Pantau kadar kalium serum dan kreatinin secara berkala. Batasi dosis spironolakton <=25 mg/hari dan instruksikan pasien menghindari makanan tinggi kalium/garam pengganti kalium.",
    "evidenceLevel": "Level 1 - Well Established (CHARM Trial / ESC Guidelines)",
    "ddinterPairId": "DDInter-PAIR-242157",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Concomitant use of angiotensin II receptor blockers (ARBs) and potassium-sparing diuretics may increase the risk of hyperkalemia.  Inhibition of angiotensin II results in decreased aldosterone secretion, which can lead to increases in serum potassium that may be additive with that induced by potassium-sparing diuretics.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #5998"
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
    "id": "ddi-pair-0191",
    "drugAId": "drug-spironolactone",
    "drugBId": "drug-digoxin",
    "drugAName": "Spironolactone",
    "drugBName": "Digoxin",
    "severity": "Minor",
    "mechanism": "Spironolakton menurunkan klirens ekskresi tubulus ginjal digoxin sebesar 25-30% dan metabolitnya dapat berinterferensi dengan uji immunoassay digoxin serum.",
    "clinicalOutcome": "Peningkatan konsentrasi digoxin serum hingga kadar toksik (>2.0 ng/mL) yang memicu mual, gangguan penglihatan warna (xanthopsia), dan aritmia jantung.",
    "management": "Pantau konsentrasi serum digoxin menggunakan uji laboratorium yang tidak memiliki reaksi silang; turunkan dosis digoxin 15-25% jika diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (FDA Prescribing Info)",
    "ddinterPairId": "DDInter-PAIR-59238",
    "mechanismCategory": "Excretion",
    "ddinterOriginalText": "Spironolactone may reduce the tubular secretion of digoxin. Plasma clearance of digoxin may be decreased, and plasma levels may increase. Also, limited data indicate that spironolactone may have a negative inotropic side effect. Finally, spironolactone may interfere with some digoxin radioimmunoassays, and digoxin concentrations may be overestimated. During coadministration, the patient should be monitored for signs and symptoms of digoxin toxicity, levels should be checked when necessary, and the clinician should keep in mind the possibility that digoxin levels may falsely appear to be elevated. Patients should be advised to notify their physician if they experience nausea, anorexia, visual changes, or irregular heartbeats.",
    "ddinterOriginalManagement": "Minor clinical significance (DDInter Level 1). The combination is generally safe and well-tolerated without therapy alteration.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2845"
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
    "id": "ddi-pair-0192",
    "drugAId": "drug-eplerenone",
    "drugBId": "drug-ketoconazole",
    "drugAName": "Eplerenone",
    "drugBName": "Ketoconazole",
    "severity": "Major",
    "mechanism": "Ketokonazol menghambat poten isoenzim CYP3A4 hepar yang bertanggung jawab atas 100% metabolisme eplerenone.",
    "clinicalOutcome": "KONTRAINDIKASI MUTLAK. Konsentrasi AUC eplerenone melonjak hingga 5.4 kali lipat (440%), memicu HIPERKALEMIA FATAL DAN HENTI JANTUNG.",
    "management": "KONTRAINDIKASI MUTLAK BERSAMAAN. Jangan pernah meresepkan Eplerenone bersama inhibitor poten CYP3A4 (ketoconazole, itraconazole, clarithromycin).",
    "evidenceLevel": "Level 1 - Well Established (EPHESUS Trial / FDA Black Box Warning)",
    "ddinterPairId": "DDInter-PAIR-123041",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with potent inhibitors of CYP450 3A4 may significantly increase the plasma concentrations and risk of adverse reactions of eplerenone, which is primarily metabolized by the isoenzyme.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3866"
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
    "id": "ddi-pair-0193",
    "drugAId": "drug-eplerenone",
    "drugBId": "drug-clarithromycin",
    "drugAName": "Eplerenone",
    "drugBName": "Clarithromycin",
    "severity": "Major",
    "mechanism": "Inhibisi poten CYP3A4 oleh klaritromisin memblokade eliminasi eplerenon.",
    "clinicalOutcome": "KONTRAINDIKASI. Peningkatan masif bioavailabilitas eplerenon dan hiperkalemia mematikan.",
    "management": "KONTRAINDIKASI BERSAMAAN. Pilih antibiotik makrolida non-inhibitor CYP3A4 kuat seperti Azitromisin.",
    "evidenceLevel": "Level 1 - Well Established (FDA Prescribing Information)",
    "ddinterPairId": "DDInter-PAIR-67776",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with potent inhibitors of CYP450 3A4 may significantly increase the plasma concentrations and risk of adverse reactions of eplerenone, which is primarily metabolized by the isoenzyme.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3866"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Azithromycin",
      "Cefixime",
      "Amoxicillin-Clavulanate"
    ]
  },
  {
    "id": "ddi-pair-0194",
    "drugAId": "drug-digoxin",
    "drugBId": "drug-amiodarone",
    "drugAName": "Digoxin",
    "drugBName": "Amiodarone",
    "severity": "Major",
    "mechanism": "Amiodarone menghambat transporter efluks P-glikoprotein (P-gp) di membran kanalikular hepar dan tubulus proksimal ginjal, memangkas ekskresi digoxin hingga 50%.",
    "clinicalOutcome": "Kadar digoxin plasma melompat 70 - 100% dalam 2-7 hari, memicu INTOKSIKASI DIGITALIS AKUT: bradikardia berat, blok atrioventrikular total, ekstrasistol ventrikel kuplet/bigemini, dan takikardia ventrikel bidireksional fatal.",
    "management": "WAJIB TURUNKAN DOSIS DIGOXIN SEBESAR 50% saat memulai amiodarone. Pantau kadar digoxin serum (target 0.5 - 0.9 ng/mL pada gagal jantung) dan pantau EKG serial.",
    "evidenceLevel": "Level 1 - Well Established (AHA/ACC Practice Guidelines / FDA MedWatch)",
    "ddinterPairId": "DDInter-PAIR-21453",
    "mechanismCategory": "Distribution",
    "ddinterOriginalText": "Coadministration with amiodarone may increase serum digoxin concentrations by up to 100%, frequently resulting in clinical toxicity. In children, this percentage may be even higher. Amiodarone has been suggested to increase intestinal transit time, reduce renal clearance and volume of distribution, displace digoxin from protein binding sites, as well as induce hypothyroidism, all of which may contribute to increased serum digoxin levels. In addition, both drugs may have additive bradycardic effects. Torsade de pointes cardiac arrhythmia has been reported. The interaction also has occurred with digitoxin.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2167"
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
    "id": "ddi-pair-0195",
    "drugAId": "drug-digoxin",
    "drugBId": "drug-verapamil",
    "drugAName": "Digoxin",
    "drugBName": "Verapamil",
    "severity": "Moderate",
    "mechanism": "Verapamil menghambat transporter P-gp ginjal (menaikkan kadar digoxin 50-75%) dan memiliki efek kronotropik/dromotropik negatif sinergis pada nodus AV.",
    "clinicalOutcome": "Toksisitas digoxin berat, bradikardia ekstrem (<40 bpm), blok jantung AV derajat 3 lengkap, dan henti sinus.",
    "management": "Turunkan dosis digoxin sebesar 30-50% dan pantau rekam EKG serta kadar elektrolit.",
    "evidenceLevel": "Level 1 - Well Established (FDA Prescribing Information)",
    "ddinterPairId": "DDInter-PAIR-75314",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Verapamil increases digoxin levels significantly in most patients. Verapamil decreases renal and extrarenal clearance of digoxin. Serum digoxin levels may increase by 50% to 75% during the first week of concomitant verapamil therapy. Increases may be larger in patients with hepatic cirrhosis. Digoxin and verapamil have additive effects in slowing AV conduction.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2749"
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
    "id": "ddi-pair-0196",
    "drugAId": "drug-digoxin",
    "drugBId": "drug-diltiazem",
    "drugAName": "Digoxin",
    "drugBName": "Diltiazem",
    "severity": "Moderate",
    "mechanism": "Diltiazem menghambat P-gp ginjal dan memperlambat konduksi nodus AV secara aditif.",
    "clinicalOutcome": "Peningkatan kadar digoxin sebesar 20-40% dan risiko bradikardia simtomatik.",
    "management": "Pantau denyut nadi istirahat dan kadar digoxin serum; sesuaikan dosis bila laju nadi <50 bpm.",
    "evidenceLevel": "Level 1 - Well Established (AHA/ACC Heart Failure Guidelines)",
    "ddinterPairId": "DDInter-PAIR-57754",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Diltiazem may cause increases in digoxin plasma levels although reports are conflicting. The mechanism for this possible interaction is unknown but is thought to be related to diltiazem-induced decreases in digoxin clearance. In addition, digoxin and diltiazem have additive effects in slowing AV conduction.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #633"
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
    "id": "ddi-pair-0197",
    "drugAId": "drug-digoxin",
    "drugBId": "drug-clarithromycin",
    "drugAName": "Digoxin",
    "drugBName": "Clarithromycin",
    "severity": "Major",
    "mechanism": "Klaritromisin menghambat P-gp intestinal dan mengeradikasi bakteri flora usus (Eubacterium lentum) yang menginaktivasi 10% digoxin sebelum diserap.",
    "clinicalOutcome": "Bioavailabilitas digoxin meroket hingga 2-3 kali lipat memicu toksisitas digitalis akut dalam waktu 48 jam.",
    "management": "HINDARI kombinasi ini. Jika klaritromisin mutlak diperlukan, potong dosis digoxin 50% dan monitor EKG harian. Alternatif: gunakan Azitromisin.",
    "evidenceLevel": "Level 1 - Well Established (FDA Drug Safety Communication)",
    "ddinterPairId": "DDInter-PAIR-67744",
    "mechanismCategory": "Excretion",
    "ddinterOriginalText": "Coadministration with clarithromycin may significantly increase the plasma concentrations of digoxin. The proposed mechanism is clarithromycin inhibition of the P-glycoprotein-mediated intestinal efflux and/or renal tubular secretion of digoxin.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1403"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Azithromycin",
      "Cefixime",
      "Amoxicillin-Clavulanate"
    ]
  },
  {
    "id": "ddi-pair-0198",
    "drugAId": "drug-digoxin",
    "drugBId": "drug-furosemide",
    "drugAName": "Digoxin",
    "drugBName": "Furosemide",
    "severity": "Moderate",
    "mechanism": "Diuresis masif oleh furosemide memicu hipokalemia (K+ <3.5 mEq/L) dan hipomagnesemia.",
    "clinicalOutcome": "Hipokalemia meningkatkan afinitas ikatan digoxin pada Na+/K+-ATPase miokardium secara dramatis, memicu ARITMIA VENTRIKEL FATAL DAN HENTI JANTUNG pada kadar digoxin terapeutik normal.",
    "management": "Pertahankan kadar Kalium serum stabil >= 4.0 mEq/L dan Magnesium >= 2.0 mg/dL. Tambahkan suplemen kalium atau spironolakton hemat kalium bila diperlukan.",
    "evidenceLevel": "Level 1 - Well Established (AHA/ACC Guidelines)",
    "ddinterPairId": "DDInter-PAIR-15533",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Although diuretics and digitalis glycosides are frequently and appropriately used together, diuretic-induced hypokalemia and hypomagnesemia may predispose patients on digitalis to arrhythmias.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1264"
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
    "id": "ddi-pair-0199",
    "drugAId": "drug-digoxin",
    "drugBId": "drug-hydrochlorothiazide",
    "drugAName": "Digoxin",
    "drugBName": "Hydrochlorothiazide",
    "severity": "Moderate",
    "mechanism": "Ekskresi kalium dan magnesium di tubulus distal oleh HCTZ memicu hipokalemia.",
    "clinicalOutcome": "Sensitisasi miokardium terhadap aritmogenisitas digitalis dan takiaritmia ventrikel.",
    "management": "Pantau elektrolit berkala; pastikan kalium serum selalu di atas 4.0 mEq/L.",
    "evidenceLevel": "Level 1 - Well Established (ESC Practice Guidelines)",
    "ddinterPairId": "DDInter-PAIR-17058",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Although diuretics and digitalis glycosides are frequently and appropriately used together, diuretic-induced hypokalemia and hypomagnesemia may predispose patients on digitalis to arrhythmias.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1264"
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
    "id": "ddi-pair-0200",
    "drugAId": "drug-bisoprolol",
    "drugBId": "drug-verapamil",
    "drugAName": "Bisoprolol",
    "drugBName": "Verapamil",
    "severity": "Major",
    "mechanism": "Efek kronotropik, dromotropik, dan inotropik negatif aditif yang sangat poten pada nodus SA, nodus AV, dan miosit ventrikel.",
    "clinicalOutcome": "KONTRAINDIKASI MUTLAK PADA DISFUNGSI SISTOLIK. Risiko BRADIKARDIA EKSTREM, BLOK ATRIOVENTRIKULAR TOTAL, ASISTOL, DAN SYOK KARDIOGENIK AKUT.",
    "management": "KONTRAINDIKASI KOMBINASI NON-DHP CCB (Verapamil) dengan Beta Blocker oral/IV pada pasien dengan gagal jantung atau gangguan konduksi. Gunakan Dihidropiridin CCB (Amlodipine) sebagai alternatif aman.",
    "evidenceLevel": "Level 1 - Well Established (ESC / ACC/AHA Hypertension Guidelines)",
    "ddinterPairId": "DDInter-PAIR-45209",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Additive reductions in heart rate, cardiac conduction, and cardiac contractility may occur when calcium channel blockers, especially verapamil and diltiazem, are used concomitantly with beta blockers. While this combination may be useful and effective in some situations, potentially serious cardiovascular adverse effects such as congestive heart failure, severe hypotension, and/or exacerbation of angina may occur. Ventricular asystole, sinus arrest, and heart block have also been reported.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2411"
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
    "id": "ddi-pair-0201",
    "drugAId": "drug-bisoprolol",
    "drugBId": "drug-diltiazem",
    "drugAName": "Bisoprolol",
    "drugBName": "Diltiazem",
    "severity": "Major",
    "mechanism": "Penekanan ganda pada otomatisitas nodus sinoatrial dan konduksi atrioventrikular.",
    "clinicalOutcome": "Bradikardia simtomatik berat (<40 bpm), sinkop, hipotensi, dan perburukan gagal jantung dekompensasi.",
    "management": "Hindari kombinasi rutin. Jika mutlak diindikasikan untuk kontrol laju AF tanpa disfungsi ventrikel kiri, lakukan pemantauan EKG Holter ketat.",
    "evidenceLevel": "Level 1 - Well Established (AHA/ACC Atrial Fibrillation Guidelines)",
    "ddinterPairId": "DDInter-PAIR-44928",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Additive reductions in heart rate, cardiac conduction, and cardiac contractility may occur when calcium channel blockers, especially verapamil and diltiazem, are used concomitantly with beta blockers. While this combination may be useful and effective in some situations, potentially serious cardiovascular adverse effects such as congestive heart failure, severe hypotension, and/or exacerbation of angina may occur. Ventricular asystole, sinus arrest, and heart block have also been reported.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2411"
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
    "id": "ddi-pair-0202",
    "drugAId": "drug-carvedilol",
    "drugBId": "drug-verapamil",
    "drugAName": "Carvedilol",
    "drugBName": "Verapamil",
    "severity": "Major",
    "mechanism": "Blokade adrenergik non-selektif (alfa-1, beta-1, beta-2) ditambah blokade kanal kalsium tipe-L miokardial.",
    "clinicalOutcome": "Hipotensi berat, bradikardia berat, kolaps sirkulasi kardiovaskular, dan penurunan tajam fraksi ejeksi jantung.",
    "management": "KONTRAINDIKASI BERSAMAAN. Hentikan Verapamil sebelum menginisiasi Carvedilol pada gagal jantung.",
    "evidenceLevel": "Level 1 - Well Established (FDA Prescribing Info / ESC Guidelines)",
    "ddinterPairId": "DDInter-PAIR-60015",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Additive reductions in heart rate, cardiac conduction, and cardiac contractility may occur when calcium channel blockers, especially verapamil and diltiazem, are used concomitantly with beta blockers. While this combination may be useful and effective in some situations, potentially serious cardiovascular adverse effects such as congestive heart failure, severe hypotension, and/or exacerbation of angina may occur. Ventricular asystole, sinus arrest, and heart block have also been reported.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2411"
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
    "id": "ddi-pair-0203",
    "drugAId": "drug-ivabradine",
    "drugBId": "drug-diltiazem",
    "drugAName": "Ivabradine",
    "drugBName": "Diltiazem",
    "severity": "Major",
    "mechanism": "Diltiazem menghambat metabolisme CYP3A4 ivabradine (meningkatkan AUC 3x lipat) dan keduanya memiliki efek penurunan denyut nadi aditif pada nodus SA.",
    "clinicalOutcome": "KONTRAINDIKASI MUTLAK. Bradikardia berat, asistol, dan pemanjangan interval QTc sekunder akibat bradikardia ekstrem.",
    "management": "KONTRAINDIKASI MUTLAK BERSAMAAN. Diltiazem dan Verapamil dikontraindikasikan bersamaan dengan Ivabradine.",
    "evidenceLevel": "Level 1 - Well Established (SHIFT Trial / EMA & FDA Contraindication)",
    "ddinterPairId": "DDInter-PAIR-57890",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with diltiazem or verapamil may significantly increase the plasma concentrations of ivabradine and increase the risk of excessive bradycardia or other conduction disturbances. The mechanism likely involves both inhibition of the CYP450 3A4-mediated metabolism of ivabradine by the calcium channel blockers as well as additive effects of these agents on heart rate, as they all exhibit negative chronotropic properties.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1192"
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
    "id": "ddi-pair-0204",
    "drugAId": "drug-ivabradine",
    "drugBId": "drug-verapamil",
    "drugAName": "Ivabradine",
    "drugBName": "Verapamil",
    "severity": "Major",
    "mechanism": "Inhibisi CYP3A4 poten dan penghambatan kanal If sinoatrial serta kanal kalsium.",
    "clinicalOutcome": "KONTRAINDIKASI. Peningkatan kadar ivabradine 2-3 kali lipat dan penurunan laju jantung berbahaya (<40 bpm).",
    "management": "KONTRAINDIKASI MUTLAK. Jangan kombinasikan Ivabradine dengan Verapamil.",
    "evidenceLevel": "Level 1 - Well Established (FDA Prescribing Information)",
    "ddinterPairId": "DDInter-PAIR-75423",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with diltiazem or verapamil may significantly increase the plasma concentrations of ivabradine and increase the risk of excessive bradycardia or other conduction disturbances. The mechanism likely involves both inhibition of the CYP450 3A4-mediated metabolism of ivabradine by the calcium channel blockers as well as additive effects of these agents on heart rate, as they all exhibit negative chronotropic properties.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1192"
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
    "id": "ddi-pair-0205",
    "drugAId": "drug-ranolazine",
    "drugBId": "drug-ketoconazole",
    "drugAName": "Ranolazine",
    "drugBName": "Ketoconazole",
    "severity": "Major",
    "mechanism": "Ketokonazol menghambat poten CYP3A4 hepar yang memetabolisme ranolazine.",
    "clinicalOutcome": "KONTRAINDIKASI MUTLAK. Konsentrasi ranolazine plasma melonjak > 300%, memicu PEMANJANGAN INTERVAL QTc EKSTREM DAN ARITMIA TORSADES DE POINTES FATAL.",
    "management": "KONTRAINDIKASI MUTLAK BERSAMAAN. Penggunaan inhibitor poten CYP3A4 bersama ranolazine dilarang keras.",
    "evidenceLevel": "Level 1 - Well Established (FDA Black Box / CPIC)",
    "ddinterPairId": "DDInter-PAIR-159745",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with potent inhibitors of CYP450 3A4 may significantly increase the plasma concentrations of ranolazine, which is primarily metabolized by the isoenzyme. Because ranolazine prolongs QT interval in a dose-dependent manner, high plasma levels of ranolazine may increase the risk of ventricular arrhythmias such as ventricular tachycardia, ventricular fibrillation, and torsade de pointes.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1071"
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
    "id": "ddi-pair-0206",
    "drugAId": "drug-ranolazine",
    "drugBId": "drug-clarithromycin",
    "drugAName": "Ranolazine",
    "drugBName": "Clarithromycin",
    "severity": "Major",
    "mechanism": "Inhibisi kuat CYP3A4 oleh klaritromisin dan efek pemanjangan QTc aditif.",
    "clinicalOutcome": "KONTRAINDIKASI MUTLAK. Lonjakan kadar ranolazine dan risiko fibrilasi ventrikel.",
    "management": "KONTRAINDIKASI BERSAMAAN. Gunakan antibiotik yang tidak menghambat CYP3A4.",
    "evidenceLevel": "Level 1 - Well Established (FDA Prescribing Information)",
    "ddinterPairId": "DDInter-PAIR-68037",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with potent inhibitors of CYP450 3A4 may significantly increase the plasma concentrations of ranolazine, which is primarily metabolized by the isoenzyme. Because ranolazine prolongs QT interval in a dose-dependent manner, high plasma levels of ranolazine may increase the risk of ventricular arrhythmias such as ventricular tachycardia, ventricular fibrillation, and torsade de pointes.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1071"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Azithromycin",
      "Cefixime",
      "Amoxicillin-Clavulanate"
    ]
  },
  {
    "id": "ddi-pair-0207",
    "drugAId": "drug-ranolazine",
    "drugBId": "drug-diltiazem",
    "drugAName": "Ranolazine",
    "drugBName": "Diltiazem",
    "severity": "Major",
    "mechanism": "Diltiazem adalah inhibitor moderat CYP3A4.",
    "clinicalOutcome": "Peningkatan kadar ranolazine plasma sebesar 50-100% dan risiko pemanjangan QTc dosis tinggi.",
    "management": "BATASI DOSIS MAKSIMAL RANOLAZINE MENJADI 500 MG DUA KALI SEHARI jika digunakan bersama Diltiazem. Pantau EKG berkala.",
    "evidenceLevel": "Level 1 - Well Established (FDA Prescribing Info)",
    "ddinterPairId": "DDInter-PAIR-58058",
    "mechanismCategory": "Metabolism",
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
    "id": "ddi-pair-0208",
    "drugAId": "drug-ranolazine",
    "drugBId": "drug-simvastatin",
    "drugAName": "Ranolazine",
    "drugBName": "Simvastatin",
    "severity": "Major",
    "mechanism": "Ranolazine adalah inhibitor CYP3A4 dan P-gp lemah-sedang yang menghambat klirens simvastatin.",
    "clinicalOutcome": "Peningkatan konsentrasi simvastatin plasma hingga 2 kali lipat, melipatgandakan risiko miopati dan rhabdomyolysis.",
    "management": "BATASI DOSIS SIMVASTATIN MAKSIMAL 20 MG SEKALI SEHARI saat diberikan bersama Ranolazine.",
    "evidenceLevel": "Level 1 - Well Established (FDA Prescribing Information)",
    "ddinterPairId": "DDInter-PAIR-159791",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with ranolazine may increase the plasma concentrations of simvastatin and its active metabolite, simvastatin acid, and potentiate the risk of statin-induced myopathy. The mechanism involves reduced clearance of simvastatin and simvastatin acid due to inhibition of intestinal and hepatic CYP450 3A4 by ranolazine. High levels of HMG-CoA reductase inhibitory activity in plasma is associated with an increased risk of musculoskeletal toxicity. Myopathy manifested as muscle pain and/or weakness associated with grossly elevated creatine kinase exceeding ten times the upper limit of normal has been reported occasionally. Rhabdomyolysis has also occurred rarely, which may be accompanied by acute renal failure secondary to myoglobinuria and may result in death.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1995"
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
    "id": "ddi-pair-0209",
    "drugAId": "drug-ranolazine",
    "drugBId": "drug-metformin",
    "drugAName": "Ranolazine",
    "drugBName": "Metformin",
    "severity": "Moderate",
    "mechanism": "Ranolazine menghambat transporter kation organik ginjal OCT2 yang mensekresikan metformin ke tubulus urin.",
    "clinicalOutcome": "Konsentrasi metformin plasma meningkat 40-80% pada dosis ranolazine 1000 mg bid, meningkatkan risiko Asidosis Laktat.",
    "management": "BATASI DOSIS METFORMIN MAKSIMAL 1700 MG/HARI jika digunakan bersama Ranolazine 1000 mg bid. Pantau fungsi ginjal eGFR.",
    "evidenceLevel": "Level 1 - Well Established (FDA Prescribing Info)",
    "ddinterPairId": "DDInter-PAIR-18175",
    "mechanismCategory": "Excretion",
    "ddinterOriginalText": "Ranolazine may reduce the renal clearance of drugs that are substrates of the organic cation transporter 2 (OCT2). The mechanism is inhibition of OCT2-mediated elimination by ranolazine.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #497"
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
    "id": "ddi-pair-0210",
    "drugAId": "drug-atorvastatin",
    "drugBId": "drug-clarithromycin",
    "drugAName": "Atorvastatin",
    "drugBName": "Clarithromycin",
    "severity": "Major",
    "mechanism": "Klaritromisin menghambat poten CYP3A4 dan transporter serapan hepar OATP1B1.",
    "clinicalOutcome": "Peningkatan paparan sistemik atorvastatin (AUC) hingga 4.5 kali lipat, memicu MIALGIA BERAT, RABDOMIOLISIS MASIF, DAN GAGAL GINJAL AKUT.",
    "management": "BATASI DOSIS ATORVASTATIN MAKSIMAL 20 MG/HARI selama terapi klaritromisin, atau hentikan sementara atorvastatin selama pengobatan antibiotik 7-10 hari.",
    "evidenceLevel": "Level 1 - Well Established (FDA Drug Safety / ACC/AHA Cholesterol Guidelines)",
    "ddinterPairId": "DDInter-PAIR-23201",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Some macrolide antibiotics inhibit CYP450 3A4 and may elevate the plasma concentrations of HMG-CoA reductase inhibitors that are metabolized by the isoenzyme. Macrolides that may significantly inhibit CYP450 3A4 include troleandomycin, erythromycin, and clarithromycin.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #401"
    ],
    "alternativeOptionsA": [
      "Rosuvastatin",
      "Pravastatin",
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
    "id": "ddi-pair-0211",
    "drugAId": "drug-simvastatin",
    "drugBId": "drug-amlodipine",
    "drugAName": "Simvastatin",
    "drugBName": "Amlodipine",
    "severity": "Major",
    "mechanism": "Amlodipine adalah inhibitor lemah CYP3A4 yang menurunkan klirens first-pass simvastatin.",
    "clinicalOutcome": "Peningkatan konsentrasi simvastatin plasma sebesar 77%, meningkatkan risiko miopati dan peningkatan enzim SGOT/SGPT.",
    "management": "BATASI DOSIS SIMVASTATIN MAKSIMAL 20 MG SEKALI SEHARI jika dikombinasikan dengan Amlodipine. Jika membutuhkan penurunan LDL lebih intensif, beralih ke Atorvastatin atau Rosuvastatin.",
    "evidenceLevel": "Level 1 - Well Established (FDA Drug Safety Communication 2011 / ACC Guidelines)",
    "ddinterPairId": "DDInter-PAIR-23137",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with amlodipine may significantly increase the plasma concentrations of simvastatin and its active metabolite, simvastatin acid, and potentiate the risk of statin-induced myopathy. The proposed mechanism is amlodipine inhibition of simvastatin metabolism via intestinal and hepatic CYP450 3A4.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #607"
    ],
    "alternativeOptionsA": [
      "Rosuvastatin",
      "Pravastatin",
      "Pitavastatin",
      "Ezetimibe"
    ],
    "alternativeOptionsB": [
      "Candesartan",
      "Valsartan",
      "Bisoprolol"
    ]
  },
  {
    "id": "ddi-pair-0212",
    "drugAId": "drug-simvastatin",
    "drugBId": "drug-diltiazem",
    "drugAName": "Simvastatin",
    "drugBName": "Diltiazem",
    "severity": "Major",
    "mechanism": "Diltiazem menghambat moderat CYP3A4 hepar dan usus.",
    "clinicalOutcome": "Peningkatan konsentrasi simvastatin plasma hingga 5 kali lipat dengan risiko rhabdomyolysis tinggi.",
    "management": "BATASI DOSIS SIMVASTATIN MAKSIMAL 10 MG SEKALI SEHARI jika digunakan bersama Diltiazem.",
    "evidenceLevel": "Level 1 - Well Established (FDA Drug Safety / AHA Guidelines)",
    "ddinterPairId": "DDInter-PAIR-58096",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with diltiazem may significantly increase the plasma concentrations of simvastatin and its active metabolite, simvastatin acid, and potentiate the risk of statin-induced myopathy. The proposed mechanism is diltiazem inhibition of simvastatin metabolism via intestinal and hepatic CYP450 3A4. The additional change in LDL cholesterol showed a nonsignificant positive correlation with the trough serum diltiazem concentration. In addition to enhanced pharmacologic effects, high levels of statin or HMG-CoA reductase inhibitory activity in plasma is also associated with an increased risk of musculoskeletal toxicity. Myopathy manifested as muscle pain and/or weakness associated with grossly elevated creatine kinase exceeding ten times the upper limit of normal has been reported occasionally. Rhabdomyolysis has also occurred rarely, which may be accompanied by acute renal failure secondary to myoglobinuria and may result in death. An analysis of the data from available clinical trials found that patients on diltiazem treated concomitantly with simvastatin 80 mg/day have a slightly increased risk (approximately 1% incidence) of myopathy. The risk in patients taking simvastatin 40 mg/day was not increased by concomitant diltiazem.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1649"
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
    "id": "ddi-pair-0213",
    "drugAId": "drug-simvastatin",
    "drugBId": "drug-verapamil",
    "drugAName": "Simvastatin",
    "drugBName": "Verapamil",
    "severity": "Major",
    "mechanism": "Inhibisi metabolisme CYP3A4 simvastatin oleh verapamil.",
    "clinicalOutcome": "Konsentrasi simvastatin plasma melonjak hingga 4.6 kali lipat, memicu nyeri otot hebat dan mioglobinuria.",
    "management": "BATASI DOSIS SIMVASTATIN MAKSIMAL 10 MG/HARI bersama Verapamil.",
    "evidenceLevel": "Level 1 - Well Established (FDA Drug Safety Communication)",
    "ddinterPairId": "DDInter-PAIR-75608",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Coadministration with verapamil may significantly increase the plasma concentrations of simvastatin and lovastatin and potentiate the risk of statin-induced myopathy.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2968"
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
    "id": "ddi-pair-0214",
    "drugAId": "drug-rosuvastatin",
    "drugBId": "drug-gemfibrozil",
    "drugAName": "Rosuvastatin",
    "drugBName": "Gemfibrozil",
    "severity": "Major",
    "mechanism": "Gemfibrozil menghambat transporter influx hepatosit OATP1B1 dan BCRP (Breast Cancer Resistance Protein) yang memediasi disposisi rosuvastatin.",
    "clinicalOutcome": "Peningkatan konsentrasi rosuvastatin plasma sebesar 2 kali lipat (AUC naik 100%) dan melipatgandakan risiko toksisitas otot skelet.",
    "management": "HINDARI kombinasi bersamaan. Jika mutlak diberikan, BATASI DOSIS ROSUVASTATIN MAKSIMAL 10 MG SEKALI SEHARI. Pilihan fibrat yang jauh lebih aman dengan rosuvastatin adalah Fenofibrate.",
    "evidenceLevel": "Level 1 - Well Established (FDA Label / ACC/AHA Cholesterol Guidelines)",
    "ddinterPairId": "DDInter-PAIR-000214"
  },
  {
    "id": "ddi-pair-0215",
    "drugAId": "drug-rosuvastatin",
    "drugBId": "drug-cyclosporine",
    "drugAName": "Rosuvastatin",
    "drugBName": "Cyclosporine",
    "severity": "Major",
    "mechanism": "Cyclosporine menghambat kuat transporter OATP1B1, BCRP, dan NTCP.",
    "clinicalOutcome": "Konsentrasi plasma rosuvastatin (Cmax & AUC) melonjak hingga 7-11 kali lipat, memicu rhabdomyolysis akut parah.",
    "management": "BATASI DOSIS ROSUVASTATIN MAKSIMAL 5 MG SEKALI SEHARI pada pasien yang mendapat terapi siklosporin.",
    "evidenceLevel": "Level 1 - Well Established (FDA Black Box / KDIGO Transplant Guidelines)",
    "ddinterPairId": "DDInter-PAIR-77204",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with cyclosporine may significantly increase the plasma concentrations of rosuvastatin. The proposed mechanism is cyclosporine inhibition of the hepatic uptake of rosuvastatin via organic anion transporting polypeptide C (OATP-C). Rosuvastatin did not affect the plasma concentrations of cyclosporine.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3696"
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
    "id": "ddi-pair-0216",
    "drugAId": "drug-fenofibrate",
    "drugBId": "drug-warfarin",
    "drugAName": "Fenofibrate",
    "drugBName": "Warfarin",
    "severity": "Major",
    "mechanism": "Asam fenofibrat mendesak warfarin dari ikatan protein albumin plasma dan menghambat moderat enzim CYP2C9.",
    "clinicalOutcome": "Peningkatan fraksi bebas warfarin plasma dan perpanjangan waktu protrombin/INR mendadak yang memicu perdarahan aktif.",
    "management": "TURUNKAN DOSIS WARFARIN SEBESAR 30% HINGGA 50% saat memulai fenofibrat. Pantau INR serial mingguan hingga dosis stabil tercapai.",
    "evidenceLevel": "Level 1 - Well Established (FDA Prescribing Information / CHEST Guidelines)",
    "ddinterPairId": "DDInter-PAIR-26720",
    "mechanismCategory": "Distribution",
    "ddinterOriginalText": "Fibric acid derivatives may enhance the hypoprothrombinemic effect of coumarin-type oral anticoagulants. The mechanism may involve displacement of anticoagulant from plasma protein binding sites.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1672"
    ],
    "alternativeOptionsA": [
      "Ezetimibe",
      "Omega-3 Acid Ethyl Esters"
    ],
    "alternativeOptionsB": [
      "Apixaban",
      "Rivaroxaban",
      "Dabigatran"
    ]
  },
  {
    "id": "ddi-pair-0217",
    "drugAId": "drug-colchicine",
    "drugBId": "drug-atorvastatin",
    "drugAName": "Colchicine",
    "drugBName": "Atorvastatin",
    "severity": "Major",
    "mechanism": "Sinergisme toksisitas miopati pada serat otot skelet dan inhibisi parsial P-gp / CYP3A4.",
    "clinicalOutcome": "Miopati akut berat, peningkatan masif enzim serum Creatine Kinase (CK >10x ULN), rhabdomyolysis, dan gagal ginjal akut.",
    "management": "Gunakan dengan sangat hati-hati pada pasien lanjut usia atau gangguan ginjal. Edukasi pasien untuk segera melaporkan kelemahan otot proksimal atau urin berwarna gelap.",
    "evidenceLevel": "Level 1 - Well Established (FDA Drug Safety / ACR Gout Guidelines)",
    "ddinterPairId": "DDInter-PAIR-23203",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration of colchicine and HMG-CoA reductase inhibitors may increase the risk of myopathy due to a combination of pharmacodynamic and pharmacokinetic effects. These agents are individually myotoxic and may have additive or synergistic effects when used together. In addition, colchicine and some HMG-CoA reductase inhibitors are substrates of the CYP450 3A4 isoenzyme and P-glycoprotein efflux transporter, thus competitive inhibition may occur resulting in increased drug absorption and decreased excretion.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #5430"
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
    "id": "ddi-pair-0218",
    "drugAId": "drug-colchicine",
    "drugBId": "drug-clarithromycin",
    "drugAName": "Colchicine",
    "drugBName": "Clarithromycin",
    "severity": "Major",
    "mechanism": "Klaritromisin adalah inhibitor ganda sangat kuat terhadap transporter efluks P-gp dan enzim CYP3A4 yang mengeliminasi kolkisin.",
    "clinicalOutcome": "KONTRAINDIKASI PADA GANGGUAN GINJAL / HEPAR. Peningkatan kadar kolkisin hingga tingkat mematikan (INTOKSIKASI KOLKISIN FATAL: pansitopenia, kolaps vaskular, gagal organ multipel).",
    "management": "KONTRAINDIKASI MUTLAK pada pasien gangguan ginjal/hepar. Pada fungsi organ normal, turunkan dosis kolkisin sebesar 75% (misal 0.3-0.6 mg q3d) atau tunda kolkisin selama terapi antibiotik.",
    "evidenceLevel": "Level 1 - Well Established (FDA Black Box Warning / CPIC)",
    "ddinterPairId": "DDInter-PAIR-67714",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration of colchicine with clarithromycin may significantly increase the serum concentrations of colchicine. The proposed mechanism is inhibition of the CYP450 3A4-mediated metabolism and P-glycoprotein (P-gp)-mediated transport of colchicine by clarithromycin. Clinical toxicity including myopathy, neuropathy, multiorgan failure, and pancytopenia may occur.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #791"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Azithromycin",
      "Cefixime",
      "Amoxicillin-Clavulanate"
    ]
  },
  {
    "id": "ddi-pair-0219",
    "drugAId": "drug-doxazosin",
    "drugBId": "drug-sildenafil",
    "drugAName": "Doxazosin",
    "drugBName": "Sildenafil",
    "severity": "Moderate",
    "mechanism": "Vasodilatasi arteriol perifer aditif via blokade reseptor alfa-1 dan akumulasi cGMP oleh inhibitor fosfodiesterase tipe-5 (PDE-5).",
    "clinicalOutcome": "Hipotensi ortostatik simtomatik akut, pusing berputar, sinkop, dan kolaps sirkulasi.",
    "management": "Pasien harus stabil secara hemodinamik dengan terapi alfa-blocker sebelum memulai sildenafil. Mulai sildenafil dengan dosis terendah (25 mg) dan berikan jeda waktu konsumsi minimal 4 jam.",
    "evidenceLevel": "Level 1 - Well Established (FDA Prescribing Info / AUA Guidelines)",
    "ddinterPairId": "DDInter-PAIR-90969",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Sildenafil may potentiate the hypotensive effect of alpha blockers, resulting in symptomatic hypotension in some patients. Sildenafil inhibits phosphodiesterase-5-mediated degradation of cyclic guanosine monophosphate (cGMP), which in vascular smooth muscles can cause peripheral vasodilation that may be additive with that induced by alpha blockers.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2702"
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
    "id": "ddi-pair-0220",
    "drugAId": "drug-nitroglycerin",
    "drugBId": "drug-tadalafil",
    "drugAName": "Nitroglycerin",
    "drugBName": "Tadalafil",
    "severity": "Major",
    "mechanism": "Kombinasi donor oksida nitrat eksogen (meningkatkan sintesis cGMP) dan penghambatan pemecahan cGMP oleh tadalafil memicu akumulasi masif cGMP.",
    "clinicalOutcome": "KONTRAINDIKASI MUTLAK. HIPOTENSI REFRAKTER BERAT (penurunan SBP >50 mmHg), SYOK KARDIOGENIK, DAN INFARK MIOKARD FATAL.",
    "management": "KONTRAINDIKASI MUTLAK BERSAMAAN. Wajib ada jeda minimal 48 JAM setelah dosis terakhir Tadalafil sebelum memberikan Nitroglycerin (atau minimal 24 jam untuk Sildenafil).",
    "evidenceLevel": "Level 1 - Well Established (ACC/AHA Practice Guidelines / FDA Black Box)",
    "ddinterPairId": "DDInter-PAIR-168426",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Phosphodiesterase-5 (PDE5) inhibitors may potentiate the hypotensive effect of organic nitrates. Severe hypotension, syncope, or myocardial ischemia may result from use of the combination. The mechanism involves peripheral vasodilation secondary to enhanced levels of cyclic guanosine monophosphate (cGMP) in vascular smooth muscle cells, as PDE5 inhibitors prevent degradation of cGMP while nitrates promote its synthesis.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4919"
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
    "id": "ddi-pair-0221",
    "drugAId": "drug-propafenone",
    "drugBId": "drug-digoxin",
    "drugAName": "Propafenone",
    "drugBName": "Digoxin",
    "severity": "Moderate",
    "mechanism": "Propafenone menghambat sekresi tubulus ginjal digoxin melalui inhibisi P-gp dan memiliki efek aditif penekanan konduksi nodus AV.",
    "clinicalOutcome": "Peningkatan konsentrasi serum digoxin sebesar 60-80% dan risiko bradikardia berat serta blok AV derajat tinggi.",
    "management": "TURUNKAN DOSIS DIGOXIN SEBESAR 30-50% saat memulai propafenone. Pantau kadar digoxin serum dan rekam EKG.",
    "evidenceLevel": "Level 1 - Well Established (FDA Prescribing Information)",
    "ddinterPairId": "DDInter-PAIR-86804",
    "mechanismCategory": "Excretion",
    "ddinterOriginalText": "Propafenone may increase digoxin serum levels. Toxicity may result. The mechanism may be related to changes in the volume of distribution and in the renal and nonrenal clearance of digoxin.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1884"
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
    "id": "ddi-pair-0222",
    "drugAId": "drug-propafenone",
    "drugBId": "drug-warfarin",
    "drugAName": "Propafenone",
    "drugBName": "Warfarin",
    "severity": "Moderate",
    "mechanism": "Propafenone menghambat metabolisme hepatik enantiomer warfarin via CYP2C9 dan CYP1A2.",
    "clinicalOutcome": "Peningkatan konsentrasi warfarin bebas plasma sekitar 40-50% dan perpanjangan INR yang memicu komplikasi perdarahan.",
    "management": "Kurangi dosis warfarin sebesar 25-33% dan pantau nilai INR secara berkala.",
    "evidenceLevel": "Level 1 - Well Established (FDA Prescribing Info)",
    "ddinterPairId": "DDInter-PAIR-122552",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Propafenone may increase anticoagulant serum concentrations and effects. The mechanism is inhibition of CYP450 2C9 metabolism.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #505"
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
    "id": "ddi-pair-0223",
    "drugAId": "drug-dronedarone",
    "drugBId": "drug-simvastatin",
    "drugAName": "Dronedarone",
    "drugBName": "Simvastatin",
    "severity": "Major",
    "mechanism": "Dronedarone adalah inhibitor moderat CYP3A4 dan P-gp.",
    "clinicalOutcome": "Peningkatan paparan sistemik simvastatin hingga 4 kali lipat dengan risiko rhabdomyolysis tinggi.",
    "management": "BATASI DOSIS SIMVASTATIN MAKSIMAL 10 MG SEKALI SEHARI jika digunakan bersama Dronedarone.",
    "evidenceLevel": "Level 1 - Well Established (FDA Black Box / EMA SmPC)",
    "ddinterPairId": "DDInter-PAIR-92748",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with dronedarone may significantly increase the plasma concentrations of simvastatin and its active metabolite, simvastatin acid. The mechanism probably involves enhanced absorption as well as reduced clearance of simvastatin and simvastatin acid due to inhibition of both intestinal P-glycoprotein (P-gp) drug efflux transporter and hepatic/intestinal CYP450 3A4 isoenzyme by dronedarone. Although not studied, the interaction is also expected to occur with lovastatin due to its similar metabolic profile to simvastatin. Clinically, high levels of statin or HMG-CoA reductase inhibitory activity in plasma is associated with an increased risk of musculoskeletal toxicity. Myopathy manifested as muscle pain and/or weakness associated with grossly elevated creatine kinase exceeding ten times the upper limit of normal has been reported occasionally. Rhabdomyolysis has also occurred rarely, which may be accompanied by acute renal failure secondary to myoglobinuria and may result in death.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1930"
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
    "id": "ddi-pair-0224",
    "drugAId": "drug-linezolid",
    "drugBId": "drug-sertraline",
    "drugAName": "Linezolid",
    "drugBName": "Sertraline",
    "severity": "Major",
    "mechanism": "Linezolid adalah inhibitor non-selektif enzim Monoamine Oxidase A (MAO-A) reversibel yang memblokade pemecahan serotonin, sementara sertraline menghambat reuptake serotonin.",
    "clinicalOutcome": "KONTRAINDIKASI MUTLAK. Memicu SINDROM SEROTONIN AKUT YANG MENGANCAM JIWA (hipertermia ganas >40°C, klonus spontan, rigiditas otot, instabilitas otonomik, delirium, dan kolaps kardiovaskular fatal).",
    "management": "KONTRAINDIKASI MUTLAK BERSAMAAN. Hentikan SSRI minimal 2 minggu (atau 5 minggu untuk fluoxetine) sebelum memulai linezolid. Pada kondisi emergensi infeksi VRE/MRSA, hentikan sertraline seketika dan monitor gejala serotonin secara ketat di ICU.",
    "evidenceLevel": "Level 1 - Well Established (FDA Black Box Warning / Hunter Serotonin Toxicity Criteria)",
    "ddinterPairId": "DDInter-PAIR-131141",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Coadministration of linezolid with serotonergic agents may potentiate the risk of serotonin syndrome, which is a rare but serious and potentially fatal condition thought to result from hyperstimulation of brainstem 5-HT1A and 2A receptors. Linezolid is a reversible, nonselective monoamine oxidase inhibitor (MAOI). As such, it can enhance serotonergic effects by inhibiting serotonin metabolism.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #5391"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Escitalopram",
      "Mirtazapine",
      "Bupropion"
    ]
  },
  {
    "id": "ddi-pair-0225",
    "drugAId": "drug-tramadol",
    "drugBId": "drug-sertraline",
    "drugAName": "Tramadol",
    "drugBName": "Sertraline",
    "severity": "Major",
    "mechanism": "Tramadol menghambat reuptake 5-HT dan NE secara simultan dengan sertraline serta menurunkan ambang kejang neuronal.",
    "clinicalOutcome": "Lonjakan risiko SINDROM SEROTONIN BERAT dan KEJANG EPILEPTIFORM REFRAKTER.",
    "management": "HINDARI kombinasi bila memungkinkan. Pilih analgesik non-serotonergik (Parasetamol, NSAID, atau opioid murni seperti Morfin dosis rendah). Jika harus digunakan, gunakan dosis tramadol minimal dan edukasi tanda toksisitas serotonin (tremor, diaforesis, hiperrefleksia).",
    "evidenceLevel": "Level 1 - Well Established (FDA Drug Safety Communication / Stockley's)",
    "ddinterPairId": "DDInter-PAIR-6111",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Due to its serotonergic activity, coadministration of tramadol with selective serotonin reuptake inhibitors (SSRIs) may potentiate the risk of serotonin syndrome, which is a rare but serious and potentially fatal condition thought to result from hyperstimulation of brainstem 5-HT1A and 2A receptors. Symptoms of the serotonin syndrome may include mental status changes such as irritability, altered consciousness, confusion, hallucinations, and coma; autonomic dysfunction such as tachycardia, hyperthermia, diaphoresis, shivering, blood pressure lability, and mydriasis; neuromuscular abnormalities such as hyperreflexia, myoclonus, tremor, rigidity, and ataxia; and gastrointestinal symptoms such as abdominal cramping, nausea, vomiting, and diarrhea. Patients receiving tramadol with SSRIs may also have an increased risk of seizures due to additive epileptogenic effects of these agents. Pharmacokinetically, coadministration with certain SSRIs, namely fluoxetine, paroxetine and possibly sertraline, may decrease the plasma concentrations of the active O-demethylated (M1) metabolite of tramadol due to inhibition of CYP450 2D6, the isoenzyme responsible for the formation of the metabolite.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1077"
    ],
    "alternativeOptionsA": [
      "Paracetamol",
      "Gabapentin",
      "NSAID Topikal"
    ],
    "alternativeOptionsB": [
      "Escitalopram",
      "Mirtazapine",
      "Bupropion"
    ]
  },
  {
    "id": "ddi-pair-0226",
    "drugAId": "drug-tramadol",
    "drugBId": "drug-duloxetine",
    "drugAName": "Tramadol",
    "drugBName": "Duloxetine",
    "severity": "Major",
    "mechanism": "Inhibisi aditif ganda reuptake serotonin dan norepinefrin sentral.",
    "clinicalOutcome": "Sindrom Serotonin akut, kejang tonik-klonik, dan konfusi delirium pada pasien lansia.",
    "management": "Hindari peresepan bersamaan. Pantau suhu tubuh, laju nadi, dan refleks tendon secara serial jika pasien terlanjur mengonsumsi keduanya.",
    "evidenceLevel": "Level 1 - Well Established (FDA MedWatch / APA Guidelines)",
    "ddinterPairId": "DDInter-PAIR-5830",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Due to its serotonergic activity, coadministration of tramadol with serotonin-enhancing drugs such as SSRIs, SNRIs, nefazodone, trazodone, and mirtazapine may potentiate the risk of serotonin syndrome, which is a rare but serious and potentially fatal condition thought to result from hyperstimulation of brainstem 5-HT1A and 2A receptors. Symptoms of the serotonin syndrome may include mental status changes such as irritability, altered consciousness, confusion, hallucinations, and coma; autonomic dysfunction such as tachycardia, hyperthermia, diaphoresis, shivering, blood pressure lability, and mydriasis; neuromuscular abnormalities such as hyperreflexia, myoclonus, tremor, rigidity, and ataxia; and gastrointestinal symptoms such as abdominal cramping, nausea, vomiting, and diarrhea. Patients receiving tramadol with serotonin-enhancing drugs may also have an increased risk of seizures due to additive epileptogenic effects of these agents.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1835"
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
    "id": "ddi-pair-0227",
    "drugAId": "drug-fluoxetine",
    "drugBId": "drug-sumatriptan",
    "drugAName": "Fluoxetine",
    "drugBName": "Sumatriptan",
    "severity": "Major",
    "mechanism": "Agonisme langsung reseptor 5-HT1B/1D oleh sumatriptan ditambah peningkatan ketersediaan serotonin sinaptik oleh fluoxetine.",
    "clinicalOutcome": "Risiko Sindrom Serotonin dan vasokonstriksi serebrovaskular / koroner yang berlebihan (triptan sensations, kelemahan, hiperrefleksia).",
    "management": "Edukasi pasien mengenali gejala awal serotonin toxicity. Pertimbangkan antimigrain alternatif non-triptan jika pasien membutuhkan SSRI dosis tinggi.",
    "evidenceLevel": "Level 1 - Well Established (FDA Alert / American Headache Society)",
    "ddinterPairId": "DDInter-PAIR-19519",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Concomitant use of agents with serotonergic activity such as serotonin reuptake inhibitors, monoamine oxidase inhibitors, tricyclic antidepressants, 5-HT1 receptor agonists, ergot alkaloids, cyclobenzaprine, lithium, St. John's wort, phenylpiperidine opioids, dextromethorphan, and tryptophan may potentiate the risk of serotonin syndrome, which is a rare but serious and potentially fatal condition thought to result from hyperstimulation of brainstem 5-HT1A and 2A receptors. Symptoms of the serotonin syndrome may include mental status changes such as irritability, altered consciousness, confusion, hallucination, and coma; autonomic dysfunction such as tachycardia, hyperthermia, diaphoresis, shivering, blood pressure lability, and mydriasis; neuromuscular abnormalities such as hyperreflexia, myoclonus, tremor, rigidity, and ataxia; and gastrointestinal symptoms such as abdominal cramping, nausea, vomiting, and diarrhea.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4337"
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
    "id": "ddi-pair-0228",
    "drugAId": "drug-sertraline",
    "drugBId": "drug-dextromethorphan",
    "drugAName": "Sertraline",
    "drugBName": "Dextromethorphan",
    "severity": "Major",
    "mechanism": "Dextromethorphan menghambat reuptake serotonin dan dimetabolisme oleh CYP2D6 yang dihambat oleh SSRI.",
    "clinicalOutcome": "Akumulasi konsentrasi dextromethorphan dan pemicuan SINDROM SEROTONIN AKUT (agitasi, halusinasi, takikardia, kekakuan otot).",
    "management": "HINDARI obat batuk bebas (OTC) yang mengandung dextromethorphan pada pasien pengguna antidepresan SSRI/SNRI. Gunakan antitusif alternatif non-serotonergik.",
    "evidenceLevel": "Level 1 - Well Established (FDA Safety / Stockley's)",
    "ddinterPairId": "DDInter-PAIR-3976",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Concomitant use of agents with serotonergic activity such as serotonin reuptake inhibitors, monoamine oxidase inhibitors, tricyclic antidepressants, 5-HT1 receptor agonists, ergot alkaloids, lithium, St. John's wort, phenylpiperidine opioids, dextromethorphan, and tryptophan may potentiate the risk of serotonin syndrome, which is a rare but serious and potentially fatal condition thought to result from hyperstimulation of brainstem 5-HT1A and 2A receptors. Symptoms of the serotonin syndrome may include mental status changes such as irritability, altered consciousness, confusion, hallucination, and coma; autonomic dysfunction such as tachycardia, hyperthermia, diaphoresis, shivering, blood pressure lability, and mydriasis; neuromuscular abnormalities such as hyperreflexia, myoclonus, tremor, rigidity, and ataxia; and gastrointestinal symptoms such as abdominal cramping, nausea, vomiting, and diarrhea.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4816"
    ],
    "alternativeOptionsA": [
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
    "id": "ddi-pair-0229",
    "drugAId": "drug-fluoxetine",
    "drugBId": "drug-amitriptyline",
    "drugAName": "Fluoxetine",
    "drugBName": "Amitriptyline",
    "severity": "Major",
    "mechanism": "Fluoxetine dan metabolitnya norfluoxetine menghambat sangat poten enzim CYP2D6 hepar yang bertanggung jawab atas klirens amitriptilin.",
    "clinicalOutcome": "Konsentrasi amitriptilin plasma melonjak 300 - 500%, memicu INTOKSIKASI TCA FATAL: pemanjangan QRS/QTc, aritmia ventrikel Torsades de Pointes, kejang, dan delirium antikolinergik berat.",
    "management": "HINDARI kombinasi. Jika mutlak dikombinasikan, POTONG DOSIS AMITRIPTYLINE SEBESAR 50-75% dan pantau kadar TCA serum serta rekam EKG serial.",
    "evidenceLevel": "Level 1 - Well Established (CPIC Guidelines / FDA Black Box)",
    "ddinterPairId": "DDInter-PAIR-22424",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with fluoxetine may significantly increase the plasma concentrations of some tricyclic antidepressants (TCAs). The proposed mechanism is fluoxetine inhibition of CYP450 2D6, the isoenzyme responsible for the metabolic clearance of many antidepressant and psychotropic drugs. Seizures and delirium have been reported, as well as a fatality attributed to fluoxetine-induced chronic amitriptyline toxicity. Pharmacodynamically, the combination of fluoxetine (or any other selective serotonin reuptake inhibitor) and a TCA may potentiate the risk of serotonin syndrome, which is a rare but serious and potentially fatal condition thought to result from hyperstimulation of brainstem 5HT1A receptors.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1356"
    ],
    "alternativeOptionsA": [
      "Sertraline",
      "Escitalopram",
      "Mirtazapine",
      "Bupropion"
    ],
    "alternativeOptionsB": [
      "Sertraline",
      "Escitalopram",
      "Mirtazapine",
      "Bupropion"
    ]
  },
  {
    "id": "ddi-pair-0230",
    "drugAId": "drug-fentanyl",
    "drugBId": "drug-midazolam",
    "drugAName": "Fentanyl",
    "drugBName": "Midazolam",
    "severity": "Moderate",
    "mechanism": "Sinergisme farmakodinamik penekanan pusat kontrol respirasi batang otak via stimulasi reseptor GABA-A dan reseptor mu-opioid.",
    "clinicalOutcome": "DEPRESI PERNAPASAN FATAL, HIPOKSIA AKUT, APNEA, HENTI NAPAS, DAN KOMA.",
    "management": "Black Box Warning FDA: Hanya gunakan kombinasi ini di bawah pengawasan anestesiolog dengan fasilitas resusitasi intubasi, oksigen, dan antidot Nalokson serta Flumazenil siap pakai.",
    "evidenceLevel": "Level 1 - Well Established (FDA Black Box Warning / ASA Practice Guidelines)",
    "ddinterPairId": "DDInter-PAIR-2478",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Central nervous system- and/or respiratory-depressant effects may be additively or synergistically increased in patients taking multiple drugs that cause these effects, especially in elderly or debilitated patients.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4880"
    ],
    "alternativeOptionsA": [
      "Paracetamol",
      "Gabapentin",
      "NSAID Topikal"
    ],
    "alternativeOptionsB": [
      "Buspirone",
      "Melatonin",
      "Hydroxyzine"
    ]
  },
  {
    "id": "ddi-pair-0231",
    "drugAId": "drug-morphine",
    "drugBId": "drug-diazepam",
    "drugAName": "Morphine",
    "drugBName": "Diazepam",
    "severity": "Major",
    "mechanism": "Penekanan SSP aditif dan hilangnya respons dorongan pernapasan hiperkapnia di medula oblongata.",
    "clinicalOutcome": "Sedasi mendalam, henti pernapasan saat tidur (fatal sleep apnea), dan kolaps hemodinamik.",
    "management": "Batasi peresepan benzodiazepin pada pasien pengguna analgesik opioid kronis; edukasi keluarga pasien mengenai tanda henti napas dan sedasi berlebih.",
    "evidenceLevel": "Level 1 - Well Established (FDA Boxed Warning)",
    "ddinterPairId": "DDInter-PAIR-32218",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Concomitant use of opioids with benzodiazepines or other central nervous system (CNS) depressants (e.g., nonbenzodiazepine sedatives/hypnotics, anxiolytics, muscle relaxants, general anesthetics, antipsychotics, other opioids, alcohol) may result in profound sedation, respiratory depression, coma, and death. The risk of hypotension may also be increased with some CNS depressants (e.g., alcohol, benzodiazepines, phenothiazines).",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4260"
    ],
    "alternativeOptionsA": [
      "Paracetamol",
      "Gabapentin",
      "NSAID Topikal"
    ],
    "alternativeOptionsB": [
      "Buspirone",
      "Melatonin",
      "Hydroxyzine"
    ]
  },
  {
    "id": "ddi-pair-0232",
    "drugAId": "drug-tramadol",
    "drugBId": "drug-pregabalin",
    "drugAName": "Tramadol",
    "drugBName": "Pregabalin",
    "severity": "Major",
    "mechanism": "Gabapentinoid mempotensiasi depresi respirasi yang diinduksi opioid dan meningkatkan absorpsi sistemik opioid.",
    "clinicalOutcome": "Peningkatan risiko kematian akibat depresi pernapasan hingga 49-60% pada kombinasi opioid + gabapentinoid.",
    "management": "Mulai dengan dosis terendah efektif pregabalin (25-50 mg/hari). Pantau ketat laju pernapasan dan tingkat kesadaran.",
    "evidenceLevel": "Level 1 - Well Established (FDA Drug Safety Alert 2019)",
    "ddinterPairId": "DDInter-PAIR-6065",
    "mechanismCategory": "Absorption",
    "ddinterOriginalText": "Concomitant use of opioids with gabapentinoids (e.g., gabapentin, pregabalin) may increase the risk of opioid overdose and serious adverse effects such as profound sedation, respiratory depression, syncope, and death due to potentially additive depressant effects on the central nervous system. Coadministration with opioids may increase the oral bioavailability of gabapentin.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2450"
    ],
    "alternativeOptionsA": [
      "Paracetamol",
      "Gabapentin",
      "NSAID Topikal"
    ],
    "alternativeOptionsB": [
      "Levetiracetam",
      "Lamotrigine",
      "Lacosamide",
      "Gabapentin"
    ]
  },
  {
    "id": "ddi-pair-0233",
    "drugAId": "drug-alprazolam",
    "drugBId": "drug-zolpidem",
    "drugAName": "Alprazolam",
    "drugBName": "Zolpidem",
    "severity": "Moderate",
    "mechanism": "Depresi sistem saraf pusat aditif via stimulasi reseptor GABA-A.",
    "clinicalOutcome": "Sedasi ekstrem, amnesia anterograde berat, penurunan koordinasi motorik (risiko jatuh dan fraktur pada lansia), serta perilaku tidur kompleks yang berbahaya.",
    "management": "HINDARI peresepan ganda dua obat penenang/hipnotik secara bersamaan. Pilih satu agen terapeutik tunggal.",
    "evidenceLevel": "Level 1 - Well Established (Beers Criteria / FDA Warning)",
    "ddinterPairId": "DDInter-PAIR-19467",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Central nervous system- and/or respiratory-depressant effects may be additively or synergistically increased in patients taking multiple drugs that cause these effects, especially in elderly or debilitated patients.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4880"
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
    "id": "ddi-pair-0234",
    "drugAId": "drug-lithium-carbonate",
    "drugBId": "drug-hydrochlorothiazide",
    "drugAName": "Lithium Carbonate",
    "drugBName": "Hydrochlorothiazide",
    "severity": "Major",
    "mechanism": "Diuretik tiazid memicu natriuresis di tubulus distal yang menginduksi reabsorpsi kompensatorik natrium dan litium di tubulus proksimal ginjal, memangkas klirens litium 25-40%.",
    "clinicalOutcome": "KADAR LITIUM SERUM MEROKET HINGGA TINGKAT TOKSIK (>1.5 - 2.5 mEq/L): Memicu tremor kasar, ataksia serebelar, disartria, kejang, koma, dan nekrosis tubular ginjal permanen.",
    "management": "HINDARI kombinasi tiazid + litium. Jika mutlak diperlukan, TURUNKAN DOSIS LITIUM SEBESAR 50% dan lakukan pemantauan kadar litium serum serial setiap minggu hingga stabil.",
    "evidenceLevel": "Level 1 - Well Established (FDA Black Box / APA Bipolar Guidelines)",
    "ddinterPairId": "DDInter-PAIR-17158",
    "mechanismCategory": "Excretion",
    "ddinterOriginalText": "Thiazide diuretics may cause a rapid increase in serum lithium levels and potentiate the risk of lithium toxicity. The exact mechanism is unknown but may be related to the sodium loss induced by thiazide diuresis, which produces a compensatory increase in proximal tubular reabsorption of sodium along with lithium.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4850"
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
    "id": "ddi-pair-0235",
    "drugAId": "drug-lithium-carbonate",
    "drugBId": "drug-captopril",
    "drugAName": "Lithium Carbonate",
    "drugBName": "Captopril",
    "severity": "Major",
    "mechanism": "Inhibisi ACE menurunkan laju filtrasi glomerulus dan menurunkan ekskresi fraksional litium di ginjal.",
    "clinicalOutcome": "Toksisitas litium onset lambat (terjadi setelah 5-14 hari terapi bersamaan) yang memicu ensefalopati dan gagal ginjal akut.",
    "management": "Pantau kadar litium serum tiap 3-5 hari saat memulai ACE inhibitor; kurangi dosis litium 25-50% sesuai kadar palung darah.",
    "evidenceLevel": "Level 1 - Well Established (FDA Prescribing Info / Stockley's)",
    "ddinterPairId": "DDInter-PAIR-55954",
    "mechanismCategory": "Excretion",
    "ddinterOriginalText": "Coadministration with angiotensin converting enzyme (ACE) inhibitors may increase serum lithium concentrations and the risk for lithium toxicity. Several mechanisms may be involved, one of which is reduced renal lithium clearance due to natriuresis secondary to the inhibition of aldosterone and angiotensin II by ACE inhibitors. The combination may also cause renal dysfunction secondary to volume depletion during chronic therapy, which can further impair lithium clearance. The interaction was suspected in cases of lithium toxicity that occurred up to several weeks after the initiation of ACE inhibitor therapy.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4459"
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
    "id": "ddi-pair-0236",
    "drugAId": "drug-lithium-carbonate",
    "drugBId": "drug-ibuprofen",
    "drugAName": "Lithium Carbonate",
    "drugBName": "Ibuprofen",
    "severity": "Major",
    "mechanism": "NSAID menghambat sintesis prostaglandin vasodilator renal (PGE2/PGI2), menurunkan aliran darah ginjal dan ekskresi litium.",
    "clinicalOutcome": "Konsentrasi litium serum meningkat 30 - 60% dalam beberapa hari, memicu intoksikasi litium simtomatik.",
    "management": "HINDARI penggunaan NSAID non-selektif maupun COX-2 inhibitor pada pasien pengguna litium. Gunakan Parasetamol sebagai analgesik antipiretik lini pertama.",
    "evidenceLevel": "Level 1 - Well Established (CPIC Guidelines / FDA Alert)",
    "ddinterPairId": "DDInter-PAIR-000236"
  },
  {
    "id": "ddi-pair-0237",
    "drugAId": "drug-lithium-carbonate",
    "drugBId": "drug-haloperidol",
    "drugAName": "Lithium Carbonate",
    "drugBName": "Haloperidol",
    "severity": "Major",
    "mechanism": "Interaksi farmakodinamik neurotoksik sinergis pada ganglia basalis dan sistem dopaminergik sentral.",
    "clinicalOutcome": "Sindrom Ensefalopati Neurotoksik Akut: kekakuan ekstrapiramidal berat, demam tinggi, diskinesia ireversibel, kerusakan otak difus, dan peningkatan enzim CK serum.",
    "management": "Hentikan terapi segera jika muncul tanda awal neurotoksisitas (kelemahan ekstrem, demam tanpa sebab, tremor kasar). Pertimbangkan antipsikotik atipikal dosis rendah sebagai alternatif yang lebih aman.",
    "evidenceLevel": "Level 1 - Well Established (FDA Boxed Warning)",
    "ddinterPairId": "DDInter-PAIR-131740",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Haloperidol can cause dose-related prolongation of the QT interval. Theoretically, coadministration with other agents that can prolong the QT interval may result in elevated risk of ventricular arrhythmias, including ventricular tachycardia and torsade de pointes, because of additive arrhythmogenic potential related to their effects on cardiac conduction. Haloperidol treatment alone has been associated with a number of reported cases of torsade de pointes and sudden death. The majority of cases involved intravenous administration or use of higher than recommended dosages. Lithium has also been reported to prolong the QT interval in some patients. In general, the risk of an individual agent or a combination of agents causing ventricular arrhythmia in association with QT prolongation is largely unpredictable but may be increased by certain underlying risk factors such as congenital long QT syndrome, cardiac disease, and electrolyte disturbances (e.g., hypokalemia, hypomagnesemia). In addition, the extent of drug-induced QT prolongation is dependent on the particular drugs involved and dosages of the drugs. Although haloperidol and lithium have been used safely together in many patients, there have been a few reported cases of encephalopathic syndrome consisting of severe neurotoxic effects and extrapyramidal symptoms, followed by irreversible brain damage, associated with the combination. The mechanism is unknown.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4007"
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
    "id": "ddi-pair-0238",
    "drugAId": "drug-valproic-acid",
    "drugBId": "drug-lamotrigine",
    "drugAName": "Valproic Acid",
    "drugBName": "Lamotrigine",
    "severity": "Major",
    "mechanism": "Asam valproat menghambat kuat enzim glukuronidasi UGT2B7 hepar yang memetabolisme lamotrigin, memperpanjang waktu paruh lamotrigin dari 25 jam menjadi >60-70 jam.",
    "clinicalOutcome": "Lonjakan konsentrasi lamotrigin plasma >2x lipat yang memicu peningkatan drastis risiko RUAM KULIT MEMATIKAN SINDROM STEVENS-JOHNSON (SJS) DAN TOXIC EPIDERMAL NECROLYSIS (TEN).",
    "management": "WAJIB TURUNKAN DOSIS LAMOTRIGINE SEBESAR MINIMAL 50% saat diberikan bersama Valproat. Gunakan kit titrasi dosis khusus (starter kit hijau dosis rendah: mulai 25 mg selang sehari).",
    "evidenceLevel": "Level 1 - Well Established (FDA Black Box Warning / CPIC Guidelines)",
    "ddinterPairId": "DDInter-PAIR-89203",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with valproic acid has been shown to significantly increase the plasma concentrations of lamotrigine and the risk of potentially serious and life-threatening rash induced by lamotrigine, including Stevens-Johnson syndrome and toxic epidermal necrolysis. Severe, disabling tremors and ataxia have also been reported. The mechanism is competitive inhibition of lamotrigine glucuronidation by valproic acid. Pharmacokinetic data indicate that valproic acid can more than double the elimination half-life of lamotrigine, whether given with or without enzyme-inducing antiepileptic drugs (EIAEDs) such as carbamazepine, phenytoin, and phenobarbital.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3547"
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
    "id": "ddi-pair-0239",
    "drugAId": "drug-valproic-acid",
    "drugBId": "drug-meropenem",
    "drugAName": "Valproic Acid",
    "drugBName": "Meropenem",
    "severity": "Major",
    "mechanism": "Antibiotik karbapenem (meropenem, imipenem, ertapenem) menghambat hidrolisis metabolit asil-glukuronida asam valproat kembali menjadi valproat bebas dan menghambat transporter intestinal.",
    "clinicalOutcome": "KONSENTRASI ASAM VALPROAT PLASMA ANJLOK HINGGA > 80-90% DALAM 24 JAM (mencapai kadar subterapeutik <10 mcg/mL), MEMICU KEJANG BREAKTHROUGH DAN STATUS EPILEPTIKUS FATAL.",
    "management": "KONTRAINDIKASI BERSAMAAN / HINDARI. Penambahan dosis valproat TIDAK MAMPU mengatasi interaksi ini. Gunakan antibiotik non-karbapenem atau ganti antikonvulsan ke Levetiracetam selama terapi infeksi.",
    "evidenceLevel": "Level 1 - Well Established (FDA Drug Safety / Critical Care Guidelines)",
    "ddinterPairId": "DDInter-PAIR-89237",
    "mechanismCategory": "Others",
    "ddinterOriginalText": "Coadministration with carbapenem antibiotics may substantially decrease the serum concentrations of valproic acid (VPA) and increase the risk of breakthrough seizures. The exact mechanism of interaction is unknown.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2297"
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
    "id": "ddi-pair-0240",
    "drugAId": "drug-carbamazepine",
    "drugBId": "drug-valproic-acid",
    "drugAName": "Carbamazepine",
    "drugBName": "Valproic Acid",
    "severity": "Moderate",
    "mechanism": "Karbamazepin menginduksi metabolisme valproat menjadi metabolit hepatotoksik (4-ene-VPA), sementara asam valproat menghambat enzim epoksida hidrolase yang memecah metabolit toksik karbamazepin-10,11-epoksida.",
    "clinicalOutcome": "Intoksikasi karbamazepin (ataksia, diplopia, pusing, nistagmus) dan peningkatan risiko hepatotoksisitas berat.",
    "management": "Pantau kadar serum kedua obat dan lakukan pemeriksaan fungsi hati serial.",
    "evidenceLevel": "Level 1 - Well Established (CPIC Guidelines / ILAE)",
    "ddinterPairId": "DDInter-PAIR-56298",
    "mechanismCategory": "Others",
    "ddinterOriginalText": "Carbamazepine usually decreases valproate levels, and valproate may alter carbamazepine levels in unpredictable ways. Additionally, valproate may prolong the elimination half-life of carbamazepine epoxide. Multiple complex mechanisms may be involved.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #5335"
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
    "id": "ddi-pair-0241",
    "drugAId": "drug-phenytoin",
    "drugBId": "drug-valproic-acid",
    "drugAName": "Phenytoin",
    "drugBName": "Valproic Acid",
    "severity": "Moderate",
    "mechanism": "Asam valproat mendesak fenitoin dari ikatan protein plasma albumin dan menghambat metabolisme CYP2C9 fenitoin.",
    "clinicalOutcome": "Peningkatan konsentrasi fraksi bebas fenitoin aktif yang memicu toksisitas fenitoin (ataksia, letargi, nistagmus, ensefalopati) meskipun kadar total fenitoin tampak normal.",
    "management": "Pantau kadar KONSENTRASI FENITOIN BEBAS (Free Phenytoin Level) bukan hanya kadar total. Sesuaikan dosis fenitoin secara bertahap.",
    "evidenceLevel": "Level 1 - Well Established (FDA Label / CPIC)",
    "ddinterPairId": "DDInter-PAIR-89291",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Valproic acid (and its derivatives) may increase the pharmacologic effects of phenytoin. Toxicity may result, despite normal phenytoin levels. The mechanism may be related to displacement of phenytoin from plasma proteins. Also, phenytoin may induce the CYP450 metabolism of valproic acid. Similar interactions may occur with other hydantoins.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Phenytoin ↔ Valproic acid)"
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
    "id": "ddi-pair-0242",
    "drugAId": "drug-clozapine",
    "drugBId": "drug-ciprofloxacin",
    "drugAName": "Clozapine",
    "drugBName": "Ciprofloxacin",
    "severity": "Major",
    "mechanism": "Siprofloksasin adalah inhibitor kuat enzim CYP1A2 hepar yang bertanggung jawab atas 70% metabolisme clozapine.",
    "clinicalOutcome": "Konsentrasi clozapine plasma melonjak hingga 3 - 5 kali lipat, memicu KEJANG UMUM, SEDASI BERAT, HIPOTENSI KOLAPS, MIOKARDITIS, DAN PENINGKATAN RISIKO AGRANULOSITOSIS.",
    "management": "HINDARI siprofloksasin pada pasien pengguna clozapine. Jika terpaksa diberikan, TURUNKAN DOSIS CLOZAPINE SEBESAR 66% (gunakan sepertiga dosis) dan pantau EKG serta kadar leukosit absolut (ANC).",
    "evidenceLevel": "Level 1 - Well Established (FDA Black Box / Clozapine REMS Guidelines)",
    "ddinterPairId": "DDInter-PAIR-65965",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with certain quinolone antibiotics may increase the plasma concentrations and the risk of adverse effects, including QT prolongation, of clozapine. The mechanism is inhibition of CYP450 1A2, the isoenzyme primarily responsible for the metabolic clearance of clozapine. Quinolones that may inhibit CYP450 1A2 include ciprofloxacin, enoxacin, grepafloxacin, nalidixic acid, norfloxacin, and perfloxacin (not all commercially available).",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1355"
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
    "id": "ddi-pair-0243",
    "drugAId": "drug-clozapine",
    "drugBId": "drug-carbamazepine",
    "drugAName": "Clozapine",
    "drugBName": "Carbamazepine",
    "severity": "Major",
    "mechanism": "Kedua obat secara independen menekan fungsi sumsum tulang hematopoietik (efek mielosupresif sinergis).",
    "clinicalOutcome": "KONTRAINDIKASI MUTLAK. Lonjakan tajam risiko AGRANULOSITOSIS FATAL (ANC <500/mcL), sepsis neutropenik masif, dan kematian.",
    "management": "KONTRAINDIKASI MUTLAK BERSAMAAN. Jangan pernah mengombinasikan Karbamazepin dengan Clozapine. Pilih antikonvulsan/mood stabilizer alternatif seperti Valproat atau Gabapentinoid.",
    "evidenceLevel": "Level 1 - Well Established (FDA Black Box / Clozapine REMS)",
    "ddinterPairId": "DDInter-PAIR-56256",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "The use of clozapine with other potentially myelotoxic agents such as carbamazepine may increase the risk and/or severity of hematologic toxicity. Clozapine alone is associated with a significant risk of agranulocytosis, defined as an absolute neutrophil count (ANC) of less than 500/mm3. Case reports also suggest that carbamazepine may decrease the pharmacologic effects of clozapine. The mechanism may involve induction of CYP450 hepatic metabolism by carbamazepine. Increased serum clozapine levels have been reported after discontinuation of carbamazepine therapy.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2683"
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
    "id": "ddi-pair-0244",
    "drugAId": "drug-aripiprazole",
    "drugBId": "drug-fluoxetine",
    "drugAName": "Aripiprazole",
    "drugBName": "Fluoxetine",
    "severity": "Moderate",
    "mechanism": "Fluoxetine menghambat poten CYP2D6 hepar yang mengeliminasi aripiprazole.",
    "clinicalOutcome": "Peningkatan konsentrasi aripiprazole plasma hingga 2 kali lipat, meningkatkan efek samping akatisia berat, kegelisahan motorik, dan sedasi.",
    "management": "TURUNKAN DOSIS ARIPIPRAZOLE SEBESAR 50% dari dosis standar saat dikombinasikan dengan inhibitor kuat CYP2D6 (fluoxetine, paroxetine).",
    "evidenceLevel": "Level 1 - Well Established (FDA Prescribing Info)",
    "ddinterPairId": "DDInter-PAIR-30387",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with quinidine or other potent inhibitors of CYP450 2D6 may significantly increase the plasma concentrations of aripiprazole, which is partially metabolized by the isoenzyme.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1101"
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
    "id": "ddi-pair-0245",
    "drugAId": "drug-olanzapine",
    "drugBId": "drug-ciprofloxacin",
    "drugAName": "Olanzapine",
    "drugBName": "Ciprofloxacin",
    "severity": "Minor",
    "mechanism": "Inhibisi metabolisme CYP1A2 olanzapine oleh ciprofloxacin.",
    "clinicalOutcome": "Peningkatan kadar olanzapine plasma sekitar 50-85%, memicu sedasi berlebih, hipotensi, dan perburukan sindrom metabolik.",
    "management": "Pertimbangkan penurunan dosis olanzapine selama terapi ciprofloxacin; pantau efek sedasi dan tekanan darah.",
    "evidenceLevel": "Level 1 - Well Established (FDA Label)",
    "ddinterPairId": "DDInter-PAIR-66199",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Ciprofloxacin may increase olanzapine plasma concentrations. The proposed mechanism is inhibition of hepatic CYP450 1A2 which is partially responsible for the metabolism of olanzapine. Other fluoroquinolones with a similar metabolic profile may also affect olanzapine. Clinical monitoring of patient tolerance and response, including laboratory olanzapine serum concentrations, is recommended.",
    "ddinterOriginalManagement": "Minor clinical significance (DDInter Level 1). The combination is generally safe and well-tolerated without therapy alteration.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1669"
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
    "id": "ddi-pair-0246",
    "drugAId": "drug-duloxetine",
    "drugBId": "drug-ciprofloxacin",
    "drugAName": "Duloxetine",
    "drugBName": "Ciprofloxacin",
    "severity": "Major",
    "mechanism": "Siprofloksasin adalah inhibitor poten isoenzim CYP1A2 hepar yang bertanggung jawab atas eliminasi utama duloxetine.",
    "clinicalOutcome": "KONTRAINDIKASI MUTLAK. Konsentrasi AUC duloxetine melonjak hingga > 5.6 kali lipat dan Cmax meningkat 2.5 kali lipat, memicu hepatotoksisitas akut, krisis hipertensi, dan sindrom serotonin.",
    "management": "KONTRAINDIKASI MUTLAK BERSAMAAN. Jangan pernah memberikan Duloxetine bersama inhibitor poten CYP1A2 (ciprofloxacin, fluvoxamine, enoxacin).",
    "evidenceLevel": "Level 1 - Well Established (FDA Black Box / EMA SmPC)",
    "ddinterPairId": "DDInter-PAIR-66005",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with potent inhibitors of CYP450 1A2 may significantly increase the plasma concentrations of duloxetine, which is a substrate of the isoenzyme. High plasma levels of duloxetine may increase the risk of serious adverse effects such as hypertension, hypertensive crisis, increased heart rate, orthostatic hypotension, syncope, and serotonin syndrome. Serotonin syndrome is a rare but serious and potentially fatal condition thought to result from hyperstimulation of brainstem 5-HT1A and 2A receptors. Symptoms may include mental status changes such as irritability, altered consciousness, confusion, hallucinations, and coma; autonomic dysfunction such as tachycardia, hyperthermia, diaphoresis, shivering, blood pressure lability, and mydriasis; neuromuscular abnormalities such as hyperreflexia, myoclonus, tremor, and ataxia; and gastrointestinal symptoms such as abdominal cramping, nausea, vomiting, and diarrhea.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #5159"
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
    "id": "ddi-pair-0247",
    "drugAId": "drug-rifampicin",
    "drugBId": "drug-tacrolimus",
    "drugAName": "Rifampicin",
    "drugBName": "Tacrolimus",
    "severity": "Major",
    "mechanism": "Rifampisin adalah penginduksi paling poten terhadap enzim CYP3A4 hepar/usus dan transporter efluks P-gp yang memetabolisme tacrolimus.",
    "clinicalOutcome": "KONSENTRASI PALUNG TACROLIMUS SERUM ANJLOK > 70-80% DALAM HITUNGAN HARI, MEMICU REJEKSI AKUT ALLOGRAFT TRANSPLANTASI GINJAL/HATI DAN KEHILANGAN ORGAN TRANSPLAN.",
    "management": "HINDARI penggunaan rifampisin pada resipien transplantasi organ. Jika mutlak diberikan untuk TB aktif, dosis tacrolimus sering harus dinaikkan 3 - 5 kali lipat dengan Therapeutic Drug Monitoring (TDM) kadar palung darah 2 kali seminggu.",
    "evidenceLevel": "Level 1 - Well Established (KDIGO Clinical Practice Guidelines for Kidney Transplant)",
    "ddinterPairId": "DDInter-PAIR-161536",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with potent inducers of CYP450 3A4 and/or P-glycoprotein may significantly decrease the plasma concentrations and pharmacologic effects of tacrolimus. The mechanism probably involves reduced absorption as well as accelerated clearance of tacrolimus due to induction of both intestinal P-glycoprotein drug efflux transporter and hepatic/intestinal CYP450 3A4 isoenzymes.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4910"
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
    "id": "ddi-pair-0248",
    "drugAId": "drug-voriconazole",
    "drugBId": "drug-tacrolimus",
    "drugAName": "Voriconazole",
    "drugBName": "Tacrolimus",
    "severity": "Major",
    "mechanism": "Voriconazole menghambat poten enzim CYP3A4 hepar dan enterosit usus halus.",
    "clinicalOutcome": "Konsentrasi tacrolimus plasma meroket hingga 300 - 400%, memicu NEFROTOKSISITAS AKUT BERAT, OLIGURIA, GAGAL GINJAL AKUT, DAN NEUROTOKSISITAS (tremor, kejang, ensefalopati PRES).",
    "management": "WAJIB TURUNKAN DOSIS TACROLIMUS SEBESAR 66% HINGGA 75% (gunakan sepertiga hingga seperempat dosis normal) saat memulai voriconazole. Pantau ketat kadar palung tacrolimus tiap 2-3 hari.",
    "evidenceLevel": "Level 1 - Well Established (FDA Prescribing Info / AST Infectious Diseases Guidelines)",
    "ddinterPairId": "DDInter-PAIR-168360",
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
    "id": "ddi-pair-0249",
    "drugAId": "drug-voriconazole",
    "drugBId": "drug-cyclosporine",
    "drugAName": "Voriconazole",
    "drugBName": "Cyclosporine",
    "severity": "Major",
    "mechanism": "Voriconazole menghambat poten metabolisme CYP3A4 siklosporin.",
    "clinicalOutcome": "Kadar siklosporin darah meningkat 2-3 kali lipat dengan risiko disfungsi ginjal akut dan hipertensi berat.",
    "management": "TURUNKAN DOSIS SIKLOSPORIN SEBESAR 50% saat menginisiasi terapi vorikonazol oral/IV dan pantau kadar palung siklosporin darah.",
    "evidenceLevel": "Level 1 - Well Established (FDA Boxed Warning)",
    "ddinterPairId": "DDInter-PAIR-77322",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with voriconazole may increase the blood concentrations of cyclosporine. The mechanism is voriconazole inhibition of CYP450 3A4, the isoenzyme responsible for the metabolic clearance of cyclosporine.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #796"
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
    "id": "ddi-pair-0250",
    "drugAId": "drug-methotrexate",
    "drugBId": "drug-ibuprofen",
    "drugAName": "Methotrexate",
    "drugBName": "Ibuprofen",
    "severity": "Major",
    "mechanism": "NSAID menghambat sekresi tubulus ginjal metotreksat via transporter anion organik OAT1 dan OAT3, serta menurunkan laju filtrasi glomerulus akibat hambatan prostaglandin renal.",
    "clinicalOutcome": "Klirens metotreksat anjlok drastis memicu AKUMULASI METOTREKSAT TOKSIK MEMATIKAN: SUPRESI SUMSUM TULANG TOTAL (pansitopenia, leukopenia berat, anemia aplastik), MUKOSITIS/STOMATITIS ULSERATIF BERAT, SEPSIS, DAN GAGAL GINJAL AKUT.",
    "management": "KONTRAINDIKASI MUTLAK pada metotreksat dosis tinggi (onkologi). Pada metotreksat dosis rendah mingguan (artritis reumatoid/psoriasis), hindari NSAID jika memungkinkan atau gunakan Parasetamol; jika harus dikombinasi, pantau hitung darah lengkap (CBC) dan kreatinin serial.",
    "evidenceLevel": "Level 1 - Well Established (FDA Black Box Warning / ACR Guidelines)",
    "ddinterPairId": "DDInter-PAIR-10331",
    "mechanismCategory": "Excretion",
    "ddinterOriginalText": "Coadministration with nonsteroidal anti-inflammatory drugs (NSAIDs) may increase the plasma concentrations and toxicities of methotrexate. The proposed mechanism is NSAID inhibition of the renal elimination of methotrexate and its metabolite, 7-hydroxymethotrexate, although data from pharmacokinetic studies are inconsistent and conflicting. Displacement of methotrexate binding to serum albumin by certain NSAIDs may also play a secondary role. Unexpectedly severe and sometimes fatal bone marrow suppression, aplastic anemia, gastrointestinal toxicity, and nephrotoxicity have been reported during concomitant administration of methotrexate with NSAIDs. The risk is greatest in patients receiving high dosages of methotrexate and those with renal impairment.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3474"
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
    "id": "ddi-pair-0251",
    "drugAId": "drug-methotrexate",
    "drugBId": "drug-amoxicillin",
    "drugAName": "Methotrexate",
    "drugBName": "Amoxicillin",
    "severity": "Major",
    "mechanism": "Penisilin berkompetisi dengan metotreksat pada sistem transport sekresi tubulus renalis aktif (OAT).",
    "clinicalOutcome": "Penurunan klirens ginjal metotreksat hingga 30-50% yang memicu toksisitas hematologi akut dan ulserasi mukosa oral.",
    "management": "Gunakan antibiotik alternatif non-penisilin jika pasien sedang dalam kemoterapi metotreksat; pantau tanda-tanda toksisitas mielosupresi.",
    "evidenceLevel": "Level 1 - Well Established (Stockley's Drug Interactions)",
    "ddinterPairId": "DDInter-PAIR-24287",
    "mechanismCategory": "Excretion",
    "ddinterOriginalText": "Concomitant use of large doses of penicillins may elevate serum methotrexate concentrations. The mechanism may involve competitive inhibition of renal tubular secretion of methotrexate.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1024"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Cefuroxime",
      "Azithromycin",
      "Cefixime"
    ]
  },
  {
    "id": "ddi-pair-0252",
    "drugAId": "drug-methotrexate",
    "drugBId": "drug-omeprazole",
    "drugAName": "Methotrexate",
    "drugBName": "Omeprazole",
    "severity": "Major",
    "mechanism": "Inhibitor pompa proton menghambat transporter efluks ginjal BCRP (Breast Cancer Resistance Protein) dan OAT3 yang mengekskresikan metotreksat dan metabolitnya 7-hidroksimetotreksat.",
    "clinicalOutcome": "Kadar metotreksat serum bertahan tinggi berkepanjangan (delayed MTX clearance), melipatgandakan risiko mielosupresi fatal pada pasien kemoterapi.",
    "management": "HENTIKAN PPI sementara selama pemberian metotreksat dosis tinggi; gunakan antasida atau Antagonis H2 (Famotidine) sebagai alternatif proteksi lambung.",
    "evidenceLevel": "Level 1 - Well Established (FDA Drug Safety Alert)",
    "ddinterPairId": "DDInter-PAIR-105727",
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
    "id": "ddi-pair-0253",
    "drugAId": "drug-tamoxifen",
    "drugBId": "drug-fluoxetine",
    "drugAName": "Tamoxifen",
    "drugBName": "Fluoxetine",
    "severity": "Major",
    "mechanism": "Tamoxifen adalah prodrug inaktif yang wajib dikonversi oleh enzim sitokrom hepar CYP2D6 menjadi metabolit aktif Endoxifen (yang 100x lebih poten mengikat reseptor estrogen). Fluoxetine menghambat sangat poten enzim CYP2D6.",
    "clinicalOutcome": "Konsentrasi Endoxifen aktif plasma anjlok hingga > 65-75%, MEMICU KEGAGALAN TERAPI ANTIKANKER, PENINGKATAN RISIKO KEKAMBUHAN KANKER PAYUDARA HINGGA 2 KALI LIPAT, DAN PENINGKATAN ANGKA KEMATIAN.",
    "management": "KONTRAINDIKASI BERSAMAAN / HINDARI. Jangan pernah meresepkan inhibitor kuat CYP2D6 (Fluoxetine, Paroxetine, Bupropion) pada pasien kanker payudara yang mengonsumsi Tamoxifen. Gunakan antidepresan alternatif yang TIDAK menghambat CYP2D6 seperti Venlafaxine, Desvenlafaxine, atau Citalopram.",
    "evidenceLevel": "Level 1 - Well Established (ASCO Breast Cancer Guidelines / NCCN Guidelines / FDA Label)",
    "ddinterPairId": "DDInter-PAIR-104859",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Chronic coadministration of potent or moderate CYP450 2D6 inhibitors including certain antidepressants may reduce the effectiveness of tamoxifen. The proposed mechanism is inhibition of tamoxifen bioactivation via CYP450 2D6 to endoxifen (4-hydroxy-N-desmethyltamoxifen), the active metabolite that may be responsible for much of tamoxifen's antiestrogenic activity.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #340"
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
    "id": "ddi-pair-0254",
    "drugAId": "drug-sofosbuvir",
    "drugBId": "drug-amiodarone",
    "drugAName": "Sofosbuvir",
    "drugBName": "Amiodarone",
    "severity": "Major",
    "mechanism": "Interaksi farmakodinamik langsung pada jaringan elektrofisiologi nodal miokardium dan modulasi transporter kation intraseluler.",
    "clinicalOutcome": "KONTRAINDIKASI MUTLAK FDA. Memicu BRADIKARDIA SIMTOMATIK BERAT YANG MEMATIKAN, HENTI SINUS (SINUS ARREST), BLOK JANTUNG TOTAL, DAN HENTI JANTUNG (banyak kasus membutuhkan pemasangan pacemaker darurat).",
    "management": "KONTRAINDIKASI MUTLAK BERSAMAAN. Jangan kombinasikan rejimen antivirus berbasis Sofosbuvir (Sovaldi, Harvoni, Epclusa) dengan Amiodarone. Jika tidak ada alternatif, pasien wajib dirawat dengan pemantauan telemetri jantung kontinu selama 48 jam pertama.",
    "evidenceLevel": "Level 1 - Well Established (FDA Black Box Warning / AASLD-IDSA HCV Guidance)",
    "ddinterPairId": "DDInter-PAIR-21813",
    "mechanismCategory": "Others",
    "ddinterOriginalText": "Severe, life-threatening, symptomatic bradycardia has been reported during coadministration of amiodarone with ledipasvir-sofosbuvir or with sofosbuvir taken in combination with another direct acting antiviral for the treatment of hepatitis C, such as daclatasvir or simeprevir. The mechanism of interaction has not been delineated.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1979"
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
    "id": "ddi-pair-0255",
    "drugAId": "drug-moxifloxacin",
    "drugBId": "drug-ondansetron",
    "drugAName": "Moxifloxacin",
    "drugBName": "Ondansetron",
    "severity": "Major",
    "mechanism": "Kedua obat secara independen memblokade kanal kalium penyearah lambat (rapid delayed rectifier potassium current / IKr) pada miosit ventrikel, memperpanjang fase repolarisasi potensial aksi miokardium.",
    "clinicalOutcome": "PEMANJANGAN INTERVAL QTc EKSTREM (>500 ms), MEMICU ARITMIA VENTRIKEL MEMATIKAN TORSADES DE POINTES (TdP), FIBRILASI VENTRIKEL, DAN KEMATIAN MENDADAK.",
    "management": "HINDARI kombinasi bersamaan terutama pada pasien dengan faktor risiko (wanita, usia lanjut, hipokalemia, hipomagnesemia, bradikardia). Lakukan rekam EKG baseline dan monitor kadar elektrolit serial.",
    "evidenceLevel": "Level 1 - Well Established (CredibleMeds Known QTc Risk / AHA-ACC Practice Guidelines)",
    "ddinterPairId": "DDInter-PAIR-124748",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Certain quinolones, including gatifloxacin and moxifloxacin, may cause dose-related prolongation of the QT interval in some patients. Theoretically, coadministration with other agents that can prolong the QT interval may result in additive effects and increased risk of ventricular arrhythmias including torsade de pointes and sudden death. In addition, the extent of drug-induced QT prolongation is dependent on the particular drug(s) involved and dosage(s) of the drug(s).",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #5451"
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
    "id": "ddi-pair-0256",
    "drugAId": "drug-ciprofloxacin",
    "drugBId": "drug-ferrous-sulfate",
    "drugAName": "Ciprofloxacin",
    "drugBName": "Ferrous Sulfate",
    "severity": "Moderate",
    "mechanism": "Kation besi divalen (Fe2+) membentuk kompleks khelasi kelat tak larut dengan gugus 4-keto dan 3-karboksilat pada cincin kuinolon di lumen usus.",
    "clinicalOutcome": "Bioavailabilitas dan penyerapan ciprofloxacin anjlok hingga > 60-80%, MEMICU KEGAGALAN TERAPI INFEKSI BAKTERI BERAT DAN MUNCULNYA RESISTENSI ANTIMIKROBA.",
    "management": "BERI JEDA WAKTU MINIMAL 2 JAM SEBELUM ATAU 4-6 JAM SETELAH minum preparat besi atau suplemen mineral.",
    "evidenceLevel": "Level 1 - Well Established (FDA Prescribing Info / Sanford Guide to Antimicrobial Therapy)",
    "ddinterPairId": "DDInter-PAIR-65952",
    "mechanismCategory": "Absorption",
    "ddinterOriginalText": "INTERVAL: Oral preparations that contain magnesium, aluminum, or calcium may significantly decrease the gastrointestinal absorption of quinolone antibiotics. Absorption may also be reduced by sucralfate, which contains aluminum, as well as other polyvalent cations such as iron and zinc. The mechanism is chelation of quinolones by polyvalent cations, forming a complex that is poorly absorbed from the gastrointestinal tract.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3116"
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
    "id": "ddi-pair-0257",
    "drugAId": "drug-doxycycline",
    "drugBId": "drug-ferrous-sulfate",
    "drugAName": "Doxycycline",
    "drugBName": "Ferrous Sulfate",
    "severity": "Moderate",
    "mechanism": "Kation Fe2+ mengkelat cincin tetrasiklin, menghambat absorpsi intestinal doksisiklin.",
    "clinicalOutcome": "Kadar puncak antibiotik plasma turun drastis > 70%, menyebabkan kegagalan eradikasi infeksi bakteri.",
    "management": "Berikan jeda minimal 2-3 jam antara konsumsi Doxycycline dengan suplemen zat besi.",
    "evidenceLevel": "Level 1 - Well Established (FDA Label / Stockley's)",
    "ddinterPairId": "DDInter-PAIR-7846",
    "mechanismCategory": "Absorption",
    "ddinterOriginalText": "The bioavailability of oral tetracyclines and iron salts may be significantly decreased during concurrent administration. Therapeutic failure may result. The proposed mechanism is chelation of tetracyclines by the iron cation, forming an insoluble complex that is poorly absorbed from the gastrointestinal tract.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2665"
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
    "id": "ddi-pair-0258",
    "drugAId": "drug-imatinib",
    "drugBId": "drug-paracetamol",
    "drugAName": "Imatinib",
    "drugBName": "Paracetamol",
    "severity": "Moderate",
    "mechanism": "Kompetisi jalur konjugasi glukuronidasi hepar dan inhibisi parsial sitokrom.",
    "clinicalOutcome": "Peningkatan risiko hepatotoksisitas berat dan gagal hati akut pada dosis parasetamol standar hingga tinggi.",
    "management": "BATASI DOSIS PARASETAMOL MAKSIMAL 1300 MG/HARI (maksimal 2-3 tablet 500 mg/hari) pada pasien yang mendapat terapi Imatinib; pantau enzim transaminase SGOT/SGPT berkala.",
    "evidenceLevel": "Level 1 - Well Established (FDA Drug Safety / ESMO Guidelines)",
    "ddinterPairId": "DDInter-PAIR-4496",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "In vitro inhibition data suggest that coadministration with imatinib may increase the plasma concentrations of acetaminophen. The proposed mechanism is imatinib inhibition of acetaminophen clearance via O-glucuronidation. However, no specific pharmacokinetic studies in humans have been performed. Pharmacodynamically, the potential may exist for additive adverse effects on the liver, since both agents individually are associated with hepatotoxicity.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2463"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Ibuprofen",
      "Tramadol",
      "Kompres Hangat/Dingin"
    ]
  },
  {
    "id": "ddi-pair-0259",
    "drugAId": "drug-mycophenolate-mofetil",
    "drugBId": "drug-pantoprazole",
    "drugAName": "Mycophenolate Mofetil",
    "drugBName": "Pantoprazole",
    "severity": "Moderate",
    "mechanism": "Peningkatan pH cairan lambung yang diinduksi PPI menurunkan laju disolusi dan absorpsi mikofenolat mofetil di saluran cerna atas.",
    "clinicalOutcome": "Paparan sistemik asam mikofenolat aktif (Cmax dan AUC) turun sekitar 20-30%, meningkatkan risiko penolakan organ allograft pada periode awal pasca-transplantasi.",
    "management": "Pantau kadar asam mikofenolat serum atau pertimbangkan penggunaan sediaan Mycophenolate Sodium bersalut enterik (Myfortic) yang diserap di usus halus tanpa dipengaruhi pH lambung.",
    "evidenceLevel": "Level 1 - Well Established (KDIGO Guidelines / FDA Label)",
    "ddinterPairId": "DDInter-PAIR-124952",
    "mechanismCategory": "Absorption",
    "ddinterOriginalText": "Coadministration with proton pump inhibitors may reduce the bioavailability of mycophenolic acid (MPA) from the administration of mycophenolate mofetil. The exact mechanism of interaction has not been established, but may involve a decrease in MPA solubility at higher gastric pH levels.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #963"
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
    "id": "ddi-pair-0260",
    "drugAId": "drug-posaconazole",
    "drugBId": "drug-atorvastatin",
    "drugAName": "Posaconazole",
    "drugBName": "Atorvastatin",
    "severity": "Major",
    "mechanism": "Posaconazole adalah inhibitor poten isoenzim CYP3A4.",
    "clinicalOutcome": "Peningkatan paparan sistemik atorvastatin hingga 4 kali lipat, memicu nyeri otot berat, rhabdomyolysis masif, dan gagal ginjal akut.",
    "management": "HINDARI kombinasi bersamaan atau tunda sementara terapi statin selama pasien menjalani profilaksis posakonazol.",
    "evidenceLevel": "Level 1 - Well Established (FDA Prescribing Info)",
    "ddinterPairId": "DDInter-PAIR-23228",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with posaconazole may significantly increase the plasma concentrations of HMG-CoA reductase inhibitors that are metabolized by CYP450 3A4 such as atorvastatin, cerivastatin, lovastatin, simvastatin, and red yeast rice (which contains lovastatin). The mechanism is decreased clearance due to inhibition of CYP450 3A4 by posaconazole. The interaction has been studied with simvastatin. High levels of HMG-CoA reductase inhibitory activity in plasma is associated with an increased risk of musculoskeletal toxicity. Myopathy manifested as muscle pain and/or weakness associated with grossly elevated creatine kinase exceeding ten times the upper limit of normal has been reported occasionally. Rhabdomyolysis has also occurred rarely, which may be accompanied by acute renal failure secondary to myoglobinuria and may result in death.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4721"
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
    "id": "ddi-pair-0261",
    "drugAId": "drug-glimepiride",
    "drugBId": "drug-fluconazole",
    "drugAName": "Glimepiride",
    "drugBName": "Fluconazole",
    "severity": "Major",
    "mechanism": "Flukonazol menghambat poten isoenzim sitokrom hepar CYP2C9 yang bertanggung jawab atas 80% metabolisme eliminasi glimepirid.",
    "clinicalOutcome": "Konsentrasi glimepirid plasma melonjak > 2.5 - 3 kali lipat dan waktu paruh memanjang dramatis, MEMICU HIPOGLIKEMIA BERAT REFRAKTER BERKEPANJANGAN, KOMA HIPOGLIKEMIK, DAN KERUSAKAN NEUROLOGIS PERMANEN.",
    "management": "TURUNKAN DOSIS GLIMEPIRIDE SEBESAR 50% saat memulai flukonazol. Edukasi pasien untuk selalu menyediakan sumber glukosa cepat saji dan lakukan pemantauan gula darah mandiri (SMBG) ketat 4 kali sehari.",
    "evidenceLevel": "Level 1 - Well Established (FDA Drug Safety Alert / ADA Clinical Practice Guidelines)",
    "ddinterPairId": "DDInter-PAIR-108032",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with inhibitors of CYP450 2C9 including certain azole antifungal agents such as fluconazole, miconazole, and voriconazole may increase the plasma concentrations of sulfonylureas, many of which have been found to be substrates of the isoenzyme.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2048"
    ],
    "alternativeOptionsA": [
      "Linagliptin",
      "Sitagliptin",
      "Empagliflozin",
      "Metformin"
    ],
    "alternativeOptionsB": [
      "Terbinafine",
      "Nystatin",
      "Micafungin"
    ]
  },
  {
    "id": "ddi-pair-0262",
    "drugAId": "drug-febuxostat",
    "drugBId": "drug-azathioprine",
    "drugAName": "Febuxostat",
    "drugBName": "Azathioprine",
    "severity": "Major",
    "mechanism": "Febuxostat menghambat sangat poten enzim Xanthine Oxidase (XO) yang memetabolisme azatioprin dan metabolit aktifnya 6-merkaptopurin menjadi asam 6-tiourat inaktif.",
    "clinicalOutcome": "KONTRAINDIKASI MUTLAK. Akumulasi masif nukleotida 6-tioguanin sitotoksik di sumsum tulang, memicu PANSITOPENIA FATAL, SUPRESI SUMSUM TULANG TOTAL (AGRANULOSITOSIS, APLASTIK ANEMIA), SEPSIS, DAN KEMATIAN.",
    "management": "KONTRAINDIKASI MUTLAK BERSAMAAN. Jangan pernah meresepkan Febuxostat bersama Azathioprine atau 6-Mercaptopurine. Gunakan urikosurik alternatif (Probenecid) atau terapi gout non-XO inhibitor jika fungsi ginjal memungkinkan.",
    "evidenceLevel": "Level 1 - Well Established (FDA Black Box Warning / ACR Gout Guidelines)",
    "ddinterPairId": "DDInter-PAIR-37262",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with febuxostat may significantly increase the plasma concentrations of xanthine oxidase substrates such as azathioprine, mercaptopurine, and theophylline. Toxicity may result. The proposed mechanism is inhibition of xanthine oxidase by febuxostat. Although drug interaction studies have not been conducted with febuxostat and xanthine oxidase substrates, the interaction has been reported with allopurinol, another xanthine oxidase inhibitor. Severe bone marrow suppression and other toxicities have been associated with concomitant use of allopurinol and mercaptopurine (6-MP) or azathioprine. Increased theophylline concentrations have also been reported during coadministration with allopurinol at dosages of 600 mg/day or greater.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph Reference (Azathioprine ↔ Febuxostat)"
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
    "id": "ddi-pair-0263",
    "drugAId": "drug-empagliflozin",
    "drugBId": "drug-furosemide",
    "drugAName": "Empagliflozin",
    "drugBName": "Furosemide",
    "severity": "Moderate",
    "mechanism": "Diuresis osmotik yang diinduksi glukosuria SGLT2i bersinergi dengan natriuresis ansa Henle oleh furosemid.",
    "clinicalOutcome": "Deplesi volume cairan intravaskular akut, dehidrasi berat, hipotensi ortostatik simtomatik (pusing/sinkop), dan azotemia prerenal akut.",
    "management": "Evaluasi status hidrasi pasien sebelum inisiasi empagliflozin. Pada pasien lanjut usia atau pengguna loop diuretic dosis tinggi, pertimbangkan penurunan dosis furosemid 20-30% dan pantau tekanan darah serta kreatinin serum.",
    "evidenceLevel": "Level 1 - Well Established (EMPEROR-Reduced / ADA Standards of Care)",
    "ddinterPairId": "DDInter-PAIR-15545",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Sodium-glucose co-transporter 2 (SGLT-2) inhibitors may potentiate the diuretic and hypotensive effects of loop diuretics. Inhibition of glucose and sodium co-transport produces mild diuresis and transient natriuresis, resulting in intravascular volume contraction. Volume depletion-related adverse reactions including hypotension, postural dizziness, orthostatic hypotension, syncope, dehydration, acute kidney injury, and renal function impairment can occur after initiating treatment with SGLT-2 inhibitors, and the risk is increased with concomitant use of diuretics.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2128"
    ],
    "alternativeOptionsA": [
      "Linagliptin",
      "Metformin",
      "Sitagliptin"
    ],
    "alternativeOptionsB": [
      "Indapamide",
      "Torsemide",
      "Eplerenone"
    ]
  },
  {
    "id": "ddi-pair-0264",
    "drugAId": "drug-pioglitazone",
    "drugBId": "drug-insulin-glargine",
    "drugAName": "Pioglitazone",
    "drugBName": "Insulin Glargine",
    "severity": "Moderate",
    "mechanism": "Sinergisme stimulasi reabsorpsi natrium di tubulus distal ginjal via aktivasi saluran ENaC oleh PPAR-gamma dan insulin.",
    "clinicalOutcome": "Retensi cairan masif yang memicu PRESIPITASI GAGAL JANTUNG KONGESTIF AKUT (CHF dekompensasi), edema paru bilateral, dan kenaikan berat badan cepat.",
    "management": "Black Box Warning FDA: Hindari kombinasi pada pasien dengan riwayat gagal jantung (NYHA II-IV). Mulai pioglitazone dengan dosis terendah (15 mg/hari) dan monitor ketat tanda sesak napas, ronkhi paru, atau edema tungkai.",
    "evidenceLevel": "Level 1 - Well Established (FDA Boxed Warning / ADA-EASD Guidelines)",
    "ddinterPairId": "DDInter-PAIR-18319",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Coadministration of a thiazolidinedione in combination with insulin may increase the risk of edema compared to insulin alone. The mechanism is unknown but may involve enhancement of the antinatriuretic and/or peripheral vasodilatory effects of insulin.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1257"
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
    "id": "ddi-pair-0265",
    "drugAId": "drug-domperidone",
    "drugBId": "drug-clarithromycin",
    "drugAName": "Domperidone",
    "drugBName": "Clarithromycin",
    "severity": "Major",
    "mechanism": "Klaritromisin menghambat poten enzim CYP3A4 hepar yang memetabolisme domperidone dan keduanya secara aditif memperpanjang repolarisasi ventrikel (kanal IKr).",
    "clinicalOutcome": "KONTRAINDIKASI MUTLAK. Konsentrasi domperidone plasma melonjak > 3 kali lipat, memicu PEMANJANGAN INTERVAL QTc EKSTREM, ARITMIA VENTRIKEL TORSADES DE POINTES, DAN HENTI JANTUNG MENDADAK.",
    "management": "KONTRAINDIKASI MUTLAK BERSAMAAN (Peringatan Khusus EMA / FDA). Jangan gunakan Domperidone bersama inhibitor kuat CYP3A4.",
    "evidenceLevel": "Level 1 - Well Established (EMA Pharmacovigilance Risk Assessment / FDA)",
    "ddinterPairId": "DDInter-PAIR-000265"
  },
  {
    "id": "ddi-pair-0266",
    "drugAId": "drug-colchicine",
    "drugBId": "drug-verapamil",
    "drugAName": "Colchicine",
    "drugBName": "Verapamil",
    "severity": "Major",
    "mechanism": "Verapamil adalah inhibitor ganda P-glikoprotein (P-gp) dan CYP3A4 yang memblokade ekskresi dan metabolisme kolkisin.",
    "clinicalOutcome": "Peningkatan konsentrasi kolkisin plasma hingga 2-3 kali lipat yang memicu INTOKSIKASI KOLKISIN AKUT: diare berat berdarah, neuropati aksonal, miopati rhabdomyolysis, dan supresi sumsum tulang.",
    "management": "TURUNKAN DOSIS KOLKISIN SEBESAR 50% hingga 75% jika digunakan bersama Verapamil (misal: maksimal 0.3-0.6 mg sekali sehari atau selang sehari). Kontraindikasi mutlak jika pasien memiliki gangguan ginjal atau hepar.",
    "evidenceLevel": "Level 1 - Well Established (FDA Prescribing Information / ACR Guidelines)",
    "ddinterPairId": "DDInter-PAIR-73536",
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
    "id": "ddi-pair-0267",
    "drugAId": "drug-colchicine",
    "drugBId": "drug-cyclosporine",
    "drugAName": "Colchicine",
    "drugBName": "Cyclosporine",
    "severity": "Major",
    "mechanism": "Inhibisi kuat transporter efluks P-gp ginjal dan hepar oleh siklosporin memblokade klirens kolkisin.",
    "clinicalOutcome": "Akumulasi kolkisin toksik berat memicu MIOPATI AKUT, ELEVASI ENZIM CPK MASIF, RABDOMIOLISIS, DAN KEGAGALAN MULTIORGAN FATAL.",
    "management": "KONTRAINDIKASI pada pasien dengan gangguan fungsi ginjal. Pada fungsi ginjal normal, gunakan dosis kolkisin sangat rendah (0.3 mg q3d) dan pantau keluhan kelemahan otot proksimal.",
    "evidenceLevel": "Level 1 - Well Established (FDA Black Box / KDIGO)",
    "ddinterPairId": "DDInter-PAIR-000267"
  },
  {
    "id": "ddi-pair-0268",
    "drugAId": "drug-sucralfate",
    "drugBId": "drug-ciprofloxacin",
    "drugAName": "Sucralfate",
    "drugBName": "Ciprofloxacin",
    "severity": "Moderate",
    "mechanism": "Garam aluminium hidroksida dalam polimer sukralfat mengikat dan mengkhelasi gugus karboksilat siprofloksasin di lambung, membentuk senyawa kelat kompleks tak larut.",
    "clinicalOutcome": "Bioavailabilitas ciprofloxacin anjlok drastis hingga > 85-90% jika diminum bersamaan, menurunkan efikasi antibiotik oral.",
    "management": "Hindari pemberian bersamaan secara simultan. Berikan Ciprofloxacin minimal 2 jam SEBELUM atau 6 jam SETELAH Sukralfat oral.",
    "evidenceLevel": "Level 1 - Well Established (FDA Prescribing Info / Drugs.com)",
    "ddinterPairId": "DDInter-PAIR-66316",
    "mechanismCategory": "Absorption",
    "ddinterOriginalText": "INTERVAL: Oral preparations that contain magnesium, aluminum, or calcium may significantly decrease the gastrointestinal absorption of quinolone antibiotics. Absorption may also be reduced by sucralfate, which contains aluminum, as well as other polyvalent cations such as iron and zinc. The mechanism is chelation of quinolones by polyvalent cations, forming a complex that is poorly absorbed from the gastrointestinal tract.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3116"
    ],
    "alternativeOptionsA": [
      "Famotidine",
      "Pantoprazole",
      "Rebamipide"
    ],
    "alternativeOptionsB": [
      "Azithromycin",
      "Cefixime",
      "Amoxicillin-Clavulanate",
      "Ceftriaxone"
    ]
  },
  {
    "id": "ddi-pair-0269",
    "drugAId": "drug-sucralfate",
    "drugBId": "drug-levothyroxine",
    "drugAName": "Sucralfate",
    "drugBName": "Levothyroxine",
    "severity": "Minor",
    "mechanism": "Sukralfat mengadsorpsi hormon tiroksin (T4) secara fisik di mukosa lambung dan usus halus, mencegah penyerapan hormon ke sirkulasi sistemik.",
    "clinicalOutcome": "Penurunan bioavailabilitas levotiroksin yang memicu penurunan kontrol tiroid dan peningkatan kadar TSH serum.",
    "management": "Berikan jeda waktu minimal 4 jam antara konsumsi Levothyroxine (pagi hari perut kosong) dengan Sukralfat.",
    "evidenceLevel": "Level 1 - Well Established (American Thyroid Association / Drugs.com)",
    "ddinterPairId": "DDInter-PAIR-100186",
    "mechanismCategory": "Absorption",
    "ddinterOriginalText": "Limited clinical data suggest that sucralfate may interfere with the absorption of thyroid hormone in some patients. The clinical significance of this interaction is unknown. Administering sucralfate twice a day instead of four times a day and separating thyroid supplements from sucralfate by eight hours may avoid a potential interaction. The patient's clinical response should be monitored.",
    "ddinterOriginalManagement": "Minor clinical significance (DDInter Level 1). The combination is generally safe and well-tolerated without therapy alteration.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #59"
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
    "id": "ddi-lactobacillus-amoxicillin",
    "drugAId": "drug-lactobacillus",
    "drugBId": "drug-amoxicillin",
    "drugAName": "Lactobacillus & Probiotik Kompleks",
    "drugBName": "Amoxicillin",
    "severity": "Moderate",
    "mechanism": "Amoxicillin merupakan antibiotik bakterisida spektrum luas yang membunuh galur bakteri probiotik asam laktat hidup (Lactobacillus acidophilus, Bifidobacterium longum) di lumen saluran pencernaan.",
    "clinicalOutcome": "Inaktivasi dan penurunan tajam populasi mikroorganisme probiotik hidup, memicu kegagalan terapi restorasi flora usus dan pencegahan diare terkait antibiotik (AAD).",
    "management": "BERI JEDA WAKTU MINIMAL 2 JAM antara konsumsi antibiotik Amoxicillin dan probiotik Lacto-B agar efektivitas probiotik tetap terjaga.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-000270"
  },
  {
    "id": "ddi-lactobacillus-ciprofloxacin",
    "drugAId": "drug-lactobacillus",
    "drugBId": "drug-ciprofloxacin",
    "drugAName": "Lactobacillus & Probiotik Kompleks",
    "drugBName": "Ciprofloxacin",
    "severity": "Moderate",
    "mechanism": "Ciprofloxacin menghambat DNA girase bakteri, membunuh sel bakteri probiotik hidup di lumen saluran cerna.",
    "clinicalOutcome": "Penurunan signifikan viabilitas probiotik di usus halus dan kolon.",
    "management": "Konsumsi sachet probiotik Lacto-B minimal 2 jam setelah atau sebelum pemberian Ciprofloxacin.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-000271"
  },
  {
    "id": "ddi-lactobacillus-cefadroxil",
    "drugAId": "drug-lactobacillus",
    "drugBId": "drug-cefadroxil",
    "drugAName": "Lactobacillus & Probiotik Kompleks",
    "drugBName": "Cefadroxil",
    "severity": "Moderate",
    "mechanism": "Sefalosporin menghambat sintesis peptidoglikan dinding sel bakteri probiotik hidup.",
    "clinicalOutcome": "Penurunan viabilitas koloni probiotik di saluran cerna.",
    "management": "Beri jeda waktu minum minimal 2 jam antara sediaan sefalosporin dan probiotik.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-000272"
  },
  {
    "id": "ddi-zinc-ciprofloxacin",
    "drugAId": "drug-zinc-sulfate",
    "drugBId": "drug-ciprofloxacin",
    "drugAName": "Zinc Sulfat",
    "drugBName": "Ciprofloxacin",
    "severity": "Moderate",
    "mechanism": "Kation bivalen seng (Zn2+) membentuk ikatan kelat kompleks yang tidak larut dengan antibiotik fluoroquinolone di saluran cerna.",
    "clinicalOutcome": "Penurunan tajam absorpsi dan bioavailabilitas ciprofloxacin hingga 50-70%, meningkatkan risiko kegagalan klinis eradikasi infeksi bakteri.",
    "management": "HINDARI pemberian bersamaan. Berikan Ciprofloxacin minimal 2 jam sebelum atau 4-6 jam setelah konsumsi suplemen Zinc.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-66386",
    "mechanismCategory": "Absorption",
    "ddinterOriginalText": "INTERVAL: Oral preparations that contain magnesium, aluminum, or calcium may significantly decrease the gastrointestinal absorption of quinolone antibiotics. Absorption may also be reduced by sucralfate, which contains aluminum, as well as other polyvalent cations such as iron and zinc. The mechanism is chelation of quinolones by polyvalent cations, forming a complex that is poorly absorbed from the gastrointestinal tract.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3116"
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
    "id": "ddi-tizanidine-ciprofloxacin",
    "drugAId": "drug-tizanidine",
    "drugBId": "drug-ciprofloxacin",
    "drugAName": "Tizanidine",
    "drugBName": "Ciprofloxacin",
    "severity": "Major",
    "mechanism": "Ciprofloxacin merupakan inhibitor poten isoenzim sitokrom P450 1A2 (CYP1A2) hepatik yang bertanggung jawab atas 95% metabolisme primer tizanidine.",
    "clinicalOutcome": "Kadar puncak (Cmax) tizanidine plasma melonjak hingga 7 kali lipat dan AUC melonjak hingga 10 kali lipat, memicu HIPOTENSI BERAT EKSTREM, BRADIKARDIA KRITIS, SOMNOLEN BERAT, DAN KOMA.",
    "management": "KONTRAINDIKASI MUTLAK BERSAMAAN (FDA Boxed Warning). Jangan pernah meresepkan Ciprofloxacin bersama Tizanidine. Pilih antibiotik alternatif atau ganti relaksan otot non-CYP1A2 (Eperisone atau Baclofen).",
    "evidenceLevel": "Level 1 - Well Established (FDA Prescribing Info / Black Box Warning)",
    "ddinterPairId": "DDInter-PAIR-000274"
  },
  {
    "id": "ddi-ergotamine-clarithromycin",
    "drugAId": "drug-ergotamine-caffeine",
    "drugBId": "drug-clarithromycin",
    "drugAName": "Ergotamine & Caffeine",
    "drugBName": "Clarithromycin",
    "severity": "Major",
    "mechanism": "Klaritromisin menghambat poten enzim CYP3A4 di mikrosom hepar, menghentikan eliminasi ergotamin secara drastis.",
    "clinicalOutcome": "Toksisitas ergot akut berat (ERGOTISME): Vasospasme arteri perifer parah, iskemia serebral, sianosis ekstremitas, dan risiko gangren yang memerlukan amputasi.",
    "management": "KONTRAINDIKASI MUTLAK BERSAMAAN (Black Box Warning). Beri jeda minimal beberapa hari atau gunakan antibiotik non-makrolida.",
    "evidenceLevel": "Level 1 - Well Established (FDA Label / Black Box Warning)",
    "ddinterPairId": "DDInter-PAIR-000275"
  },
  {
    "id": "ddi-timolol-bisoprolol",
    "drugAId": "drug-timolol-ophthalmic",
    "drugBId": "drug-bisoprolol",
    "drugAName": "Timolol Tetes Mata",
    "drugBName": "Bisoprolol",
    "severity": "Major",
    "mechanism": "Fraksi timolol tetes mata yang diserap secara sistemik melalui mukosa nasolakrimalis memberikan efek aditif blokade beta-adrenergik sistemik bersama bisoprolol oral.",
    "clinicalOutcome": "Bradikardia sinus berat (<45-50 bpm), hipotensi simtomatik, konduksi AV melambat (AV block), dan dekompensasi gagal jantung.",
    "management": "Gunakan dengan kehati-hatian ketat. Edukasi pasien teknik OKLUSI PUNCTUM LAKRIMALIS (menekan sudut dalam mata selama 1-2 menit setelah penetesan) untuk meminimalkan penyerapan sistemik, dan pantau denyut nadi rutin.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-000276"
  },
  {
    "id": "ddi-flunarizine-alprazolam",
    "drugAId": "drug-flunarizine",
    "drugBId": "drug-alprazolam",
    "drugAName": "Flunarizine",
    "drugBName": "Alprazolam",
    "severity": "Moderate",
    "mechanism": "Efek depresan sistem saraf pusat (SSP) aditif dari antagonis kalsium flunarizine dan modulasi reseptor GABA oleh benzodiazepin.",
    "clinicalOutcome": "Sedasi berlebihan, gangguan koordinasi motorik halus, penurunan kewaspadaan psikomotor, dan peningkatan risiko jatuh pada lansia.",
    "management": "Turunkan dosis atau gunakan waktu konsumsi terpisah; hindari mengemudi atau mengoperasikan mesin berat.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-000277"
  },
  {
    "id": "ddi-eperisone-diazepam",
    "drugAId": "drug-eperisone",
    "drugBId": "drug-diazepam",
    "drugAName": "Eperisone",
    "drugBName": "Diazepam",
    "severity": "Moderate",
    "mechanism": "Sinergisme farmakodinamik relaksasi otot skelet dan depresi refleks spinalis aditif.",
    "clinicalOutcome": "Hipotonia otot berlebihan, rasa lemas ekstrem, pusing, dan rasa kantuk yang mengganggu aktivitas sehari-hari.",
    "management": "Pantau kelemahan otot; sesuaikan dosis bila kedua obat diresepkan bersamaan pada kondisi spastisitas akut.",
    "evidenceLevel": "Moderate",
    "ddinterPairId": "DDInter-PAIR-000278"
  },
  {
    "id": "ddi-ampicillin-allopurinol",
    "drugAId": "drug-ampicillin",
    "drugBId": "drug-allopurinol",
    "drugAName": "Ampicillin",
    "drugBName": "Allopurinol",
    "severity": "Minor",
    "mechanism": "Mekanisme imunologis belum sepenuhnya dipahami; allopurinol meningkatkan sensitivitas kutaneus terhadap metabolit amino-penisilin.",
    "clinicalOutcome": "Peningkatan insiden ruam kulit (skin rash / erupsi eksantematosa) hingga 3-4 kali lipat (dari 6% menjadi 15-22% pasien).",
    "management": "Pantau tanda-tanda ruam kulit. Jika timbul kemerahan atau lesi kulit, hentikan ampicillin dan evaluasi diferensial antara erupsi toksik obat versus alergi penisilin.",
    "evidenceLevel": "Level 1 - Well Established (Epidemiological Boston Collaborative Drug Surveillance)",
    "ddinterPairId": "DDInter-PAIR-17589",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Coadministration of allopurinol with ampicillin or amoxicillin may increase the risk of skin rash. The mechanism of interaction is unknown, and it is unclear whether the condition of hyperuricemia or the actual exposure to allopurinol is responsible.",
    "ddinterOriginalManagement": "Minor clinical significance (DDInter Level 1). The combination is generally safe and well-tolerated without therapy alteration.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1627"
    ],
    "alternativeOptionsA": [
      "Cefuroxime",
      "Azithromycin",
      "Cefixime"
    ],
    "alternativeOptionsB": [
      "Febuxostat",
      "Colchicine (Profilaksis Akut)"
    ]
  },
  {
    "id": "ddi-atenolol-verapamil",
    "drugAId": "drug-atenolol",
    "drugBId": "drug-verapamil",
    "drugAName": "Atenolol",
    "drugBName": "Verapamil",
    "severity": "Major",
    "mechanism": "Penghambatan aditif sinergis pada nodus sinoatrial (SA) dan nodus atrioventrikular (AV) serta inotropik negatif miokardium.",
    "clinicalOutcome": "BRADIKARDIA SINUS EKSTREM, BLOK ATRIOVENTRIKULAR TOTAL (TOTAL AV BLOCK), ASISTOL, DAN SYOK KARDIOGENIK AKUT.",
    "management": "HINDARI kombinasi ini terutama sediaan IV; pada terapi oral kombinasi, lakukan pemantauan ketat EKG (interval PR) dan denyut jantung berkala.",
    "evidenceLevel": "Level 1 - Well Established (AHA/ACC Clinical Guidelines)",
    "ddinterPairId": "DDInter-PAIR-35357",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Additive reductions in heart rate, cardiac conduction, and cardiac contractility may occur when calcium channel blockers, especially verapamil and diltiazem, are used concomitantly with beta blockers. While this combination may be useful and effective in some situations, potentially serious cardiovascular adverse effects such as congestive heart failure, severe hypotension, and/or exacerbation of angina may occur. Ventricular asystole, sinus arrest, and heart block have also been reported.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2411"
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
    "id": "ddi-acetazolamide-aspirin",
    "drugAId": "drug-acetazolamide",
    "drugBId": "drug-aspirin",
    "drugAName": "Acetazolamide",
    "drugBName": "Aspirin",
    "severity": "Major",
    "mechanism": "Acetazolamide menginduksi asidosis metabolik yang meningkatkan fraksi salisilat non-terionisasi yang larut lemak, memfasilitasi penetrasi masif salisilat menembus sawar darah otak (blood-brain barrier).",
    "clinicalOutcome": "Toksisitas salisilat berat pada sistem saraf pusat: Asidosis metabolik parah, tinitus berat, kebingungan mental, konvulsi kejang, dan koma.",
    "management": "HINDARI penggunaan bersamaan terutama pada aspirin dosis tinggi (>1-2 g/hari). Pantau ketat status asam basa dan kadar salisilat serum.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-6205",
    "mechanismCategory": "Distribution",
    "ddinterOriginalText": "The combination of large doses of salicylates and oral carbonic anhydrase inhibitors (CAI) may rarely result in severe metabolic acidosis and/or salicylate toxicity. The mechanism is unknown but may involve salicylate-induced displacement of CAIs from plasma protein-binding sites and reduced renal clearance, or CAI-induced plasma pH changes resulting in increased amounts of unionised salicylates entering the CNS.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #692"
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
    "id": "ddi-abacavir-alcohol",
    "drugAId": "drug-abacavir",
    "drugBId": "drug-alcohol",
    "drugAName": "Abacavir",
    "drugBName": "Alkohol / Ethanol",
    "severity": "Moderate",
    "mechanism": "Etanol menghambat jalur enzim alkohol dehidrogenase yang bertanggung jawab atas 66% metabolisme degradasi primer abacavir.",
    "clinicalOutcome": "AUC abacavir plasma meningkat sebesar 41% dan waktu paruh eliminasi memanjang 26%, meningkatkan risiko toksisitas hepatik dan reaksi intoleransi.",
    "management": "Edukasi pasien HIV yang mengonsumsi abacavir untuk membatasi atau menghindari konsumsi minuman beralkohol selama terapi ARV.",
    "evidenceLevel": "Level 1 - Well Established (Clinical Pharmacology Trial)",
    "ddinterPairId": "DDInter-PAIR-000282"
  },
  {
    "id": "ddi-afatinib-ritonavir",
    "drugAId": "drug-afatinib",
    "drugBId": "drug-ritonavir",
    "drugAName": "Afatinib",
    "drugBName": "Ritonavir",
    "severity": "Moderate",
    "mechanism": "Ritonavir menghambat poten transporter efluks P-glikoprotein (P-gp) di membran enterosit usus dan kanalikuli empedu hepar.",
    "clinicalOutcome": "Kadar puncak dan paparan sistemik (AUC) afatinib meningkat sebesar 30-50%, memicu toksisitas diare masif derajat 3-4 dan penyakit paru interstisial (ILD).",
    "management": "Berikan afatinib dengan jarak minimal 6-12 jam dari inhibitor P-gp, atau turunkan dosis harian afatinib sebesar 10 mg.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-10616",
    "mechanismCategory": "Others",
    "ddinterOriginalText": "Coadministration with inhibitors of P-glycoprotein (P-gp) may increase the plasma concentrations of afatinib, which is a substrate of the efflux transporter.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4683"
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
    "id": "ddi-ibandronate-calcium",
    "drugAId": "drug-ibandronic-acid",
    "drugBId": "drug-calcium-carbonate",
    "drugAName": "Ibandronic Acid",
    "drugBName": "Calcium Carbonate",
    "severity": "Major",
    "mechanism": "Kation kalsium bivalen (Ca2+) membentuk kompleks kelat bisfosfonat-kalsium yang tidak larut dan tidak dapat diserap di saluran cerna.",
    "clinicalOutcome": "Penurunan absorpsi oral ibandronat hingga >90%, menyebabkan kegagalan terapeutik pencegahan fraktur tulang osteoporosis.",
    "management": "PISAHKAN WAKTU MINUM: Berikan Ibandronic Acid oral di pagi hari saat perut kosong, dan berikan suplemen kalsium/vitamin D MINIMAL 60 MENIT KEMUDIAN.",
    "evidenceLevel": "Level 1 - Well Established (FDA Prescribing Info)",
    "ddinterPairId": "DDInter-PAIR-000284"
  },
  {
    "id": "ddi-insulin-detemir-prednisone",
    "drugAId": "drug-insulin-detemir",
    "drugBId": "drug-prednisone",
    "drugAName": "Insulin Detemir",
    "drugBName": "Prednisone",
    "severity": "Major",
    "mechanism": "Kortikosteroid merangsang glukoneogenesis hepatik dan menghambat ambilan glukosa perifer di otot skelet, memicu resistensi insulin masif.",
    "clinicalOutcome": "Lonjakan hiperglikemia berat, hilangnya kontrol glikemik, dan risiko ketoasidosis diabetik atau sindrom hiperosmolar.",
    "management": "Tingkatkan dosis insulin detemir (seringkali membutuhkan kenaikan 20-50% dari dosis awal) selama terapi steroid, dan pantau glukosa darah berkala.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-000285"
  },
  {
    "id": "ddi-bleomycin-brentuximab",
    "drugAId": "drug-bleomycin",
    "drugBId": "drug-brentuximab-vedotin",
    "drugAName": "Bleomycin",
    "drugBName": "Brentuximab Vedotin",
    "severity": "Major",
    "mechanism": "Efek toksik sinergis pada jaringan interstisial parenkim paru antara kompleks radikal bebas bleomycin dan brentuximab vedotin.",
    "clinicalOutcome": "Toksisitas paru non-infeksius berat dan fatal (pneumonitis interstisial masif dan ARDS) pada sekitar 44% pasien.",
    "management": "PENGGUNAAN BERSAMAAN ADALAH KONTRAINDIKASI MUTLAK. Jangan pernah menggabungkan brentuximab vedotin bersama bleomycin dalam rejimen apa pun.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-45340",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Coadministration of brentuximab with bleomycin may increase the risk of pulmonary toxicity. The mechanism has not been described. Patients typically reported cough and dyspnea. Interstitial infiltration and/or inflammation were observed on radiographs and computed tomographic imaging of the chest. Most patients responded to corticosteroids.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3881"
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
    "id": "ddi-bortezomib-ketoconazole",
    "drugAId": "drug-bortezomib",
    "drugBId": "drug-ketoconazole",
    "drugAName": "Bortezomib",
    "drugBName": "Ketoconazole",
    "severity": "Moderate",
    "mechanism": "Ketoconazole menghambat secara poten isoenzim sitokrom hepar CYP3A4 yang merupakan jalur metabolisme utama bortezomib.",
    "clinicalOutcome": "Peningkatan paparan AUC bortezomib hingga 35-40%, memicu lonjakan risiko neuropati perifer berat, trombositopenia parah, dan hipotensi.",
    "management": "Hindari kombinasi jika memungkinkan. Jika antijamur mutlak diperlukan, pertimbangkan flukonazol atau monitor ketat tanda-tanda toksisitas neurologis dan darah, serta kurangi dosis bortezomib.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-123023",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with potent inhibitors of CYP450 3A4 may increase the plasma concentrations of bortezomib, which is primarily metabolized by the isoenzyme.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3469"
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
    "id": "ddi-bromocriptine-pseudoephedrine",
    "drugAId": "drug-bromocriptine",
    "drugBId": "drug-pseudoephedrine",
    "drugAName": "Bromocriptine",
    "drugBName": "Pseudoephedrine",
    "severity": "Moderate",
    "mechanism": "Sinergisme vasokonstriksi arteriol perifer antara sifat alkaloid ergot bromokriptin dan aktivitas alfa-adrenergik pseudoefedrin.",
    "clinicalOutcome": "Krisis hipertensi berat, vasospasme koroner / infark miokard, iskemia serebral fokal, dan kejang.",
    "management": "Hindari penggunaan dekongestan simpatomimetik oral (seperti pseudoefedrin, fenilefrin) pada pasien yang sedang menjalani terapi bromokriptin.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-7563",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "The combination of bromocriptine and pseudoephedrine has led to postpartum psychosis in one report. The mechanism may be due to synergistic effects of both drugs on the dopaminergic system. In addition, tachycardia, increased blood pressure, and seizure have been reported when other sympathomimetic drugs were given concomitantly. Although this interaction is potentially rare, and causality is not definite, the clinician should exercise caution when these two agents are coadministered.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1535"
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
    "id": "ddi-busulfan-metronidazole",
    "drugAId": "drug-busulfan",
    "drugBId": "drug-metronidazole",
    "drugAName": "Busulfan",
    "drugBName": "Metronidazole",
    "severity": "Major",
    "mechanism": "Metronidazole menghambat enzim glutation S-transferase dan klirens eliminasi hepar busulfan, menurunkan klirens busulfan hingga >40%.",
    "clinicalOutcome": "Lonjakan konsentrasi plasma busulfan dan peningkatan drastis risiko Sindrom Obstruksi Sinusoid Hati (Sinusoidal Obstruction Syndrome / VOD hepar) yang mematikan.",
    "management": "PENGGUNAAN BERSAMAAN HARUS DIHINDARI selama fase pengkondisian transplantasi busulfan. Gunakan antibiotik anaerob alternatif yang tidak menghambat klirens busulfan.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-44688",
    "mechanismCategory": "Others",
    "ddinterOriginalText": "Coadministration with metronidazole may significantly increase the plasma concentrations of busulfan. The mechanism of interaction has not been described.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #734"
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
    "id": "ddi-bendamustine-allopurinol",
    "drugAId": "drug-bendamustine",
    "drugBId": "drug-allopurinol",
    "drugAName": "Bendamustine",
    "drugBName": "Allopurinol",
    "severity": "Moderate",
    "mechanism": "Potensiasi toksisitas imunologis kutaneus antara metabolit bendamustine dan allopurinol.",
    "clinicalOutcome": "Peningkatan insiden ruam kulit toksik parah, termasuk Sindrom Stevens-Johnson (SJS) dan Toxic Epidermal Necrolysis (TEN).",
    "management": "Pantau ketat tanda awal lesi eritematosa kulit. Bila timbul ruam kulit pasca infus, segera hentikan kedua obat dan berikan terapi suportif dermatologi.",
    "evidenceLevel": "Moderate",
    "ddinterPairId": "DDInter-PAIR-17595",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Coadministration of bendamustine with allopurinol may increase the risk of severe skin reactions. The potential mechanism of interaction has not been established.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #548"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Febuxostat",
      "Colchicine (Profilaksis Akut)"
    ]
  },
  {
    "id": "ddi-betaxolol-diltiazem",
    "drugAId": "drug-betaxolol-ophthalmic",
    "drugBId": "drug-diltiazem",
    "drugAName": "Betaxolol Tetes Mata",
    "drugBName": "Diltiazem",
    "severity": "Major",
    "mechanism": "Penyerapan sistemik fraksi betaxolol oftalmik bekerja secara aditif dengan penghambat kanal kalsium diltiazem menekan automatisitas nodus SA dan konduksi nodus AV jantung.",
    "clinicalOutcome": "Bradikardia sinus berat, perpanjangan interval PR, blok atrioventrikular total, dan perburukan gagal jantung kongestif.",
    "management": "Lakukan oklusi nasolakrimalis selama minimal 2 menit setelah meneteskan betaxolol untuk meminimalkan absorpsi sistemik. Pantau denyut nadi basal secara teratur.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-000291"
  },
  {
    "id": "ddi-cisapride-clarithromycin",
    "drugAId": "drug-cisapride",
    "drugBId": "drug-clarithromycin",
    "drugAName": "Cisapride",
    "drugBName": "Clarithromycin",
    "severity": "Major",
    "mechanism": "Clarithromycin menghambat secara poten enzim pemetabolisme utama CYP3A4 di hepar, meningkatkan konsentrasi plasma cisapride hingga lebih dari 3 kali lipat.",
    "clinicalOutcome": "Perpanjangan interval QT masif, aritmia ventrikel Torsades de Pointes, dan henti jantung mendadak (sudden cardiac death).",
    "management": "PENGGUNAAN BERSAMAAN ADALAH KONTRAINDIKASI MUTLAK. Jangan pernah meresepkan klaritromisin atau eritromisin pada pasien yang mengonsumsi cisapride.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-67701",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with the ketolide, telithromycin, as well as certain macrolide antibiotics may significantly increase the plasma concentrations of cisapride. The mechanism is inhibition of cisapride metabolism via CYP450 3A4. High plasma levels of cisapride have been associated with prolongation of the QT interval on the ECG; ventricular arrhythmias including ventricular tachycardia, ventricular fibrillation, and torsade de pointes; cardiac arrest; and sudden death. Macrolides that may significantly inhibit CYP450 3A4 include clarithromycin, erythromycin, and troleandomycin. Azithromycin and dirithromycin are generally believed to have little, if any, effect on CYP450 3A4.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #752"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Azithromycin",
      "Cefixime",
      "Amoxicillin-Clavulanate"
    ]
  },
  {
    "id": "ddi-daclatasvir-amiodarone",
    "drugAId": "drug-daclatasvir",
    "drugBId": "drug-amiodarone",
    "drugAName": "Daclatasvir",
    "drugBName": "Amiodarone",
    "severity": "Major",
    "mechanism": "Mekanisme belum sepenuhnya dipahami; ko-administrasi rejimen DAA yang mengandung sofosbuvir + daclatasvir bersama amiodarone memicu disregulasi nodus sinus dan konduksi miokard.",
    "clinicalOutcome": "Bradikardia simtomatik berat yang mengancam jiwa, blok jantung derajat tinggi, asistol, dan kematian (memerlukan pemasangan pacemaker darurat).",
    "management": "PENGGUNAAN BERSAMAAN KONTRAINDIKASI. Hindari amiodarone pada pasien yang memulai terapi Hepatitis C berbasis sofosbuvir/daclatasvir. Jika alternatif antiaritmia tidak tersedia, lakukan pemantauan rawat inap kontinu selama 48 jam.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-000293"
  },
  {
    "id": "ddi-daunorubicin-trastuzumab",
    "drugAId": "drug-daunorubicin",
    "drugBId": "drug-trastuzumab",
    "drugAName": "Daunorubicin",
    "drugBName": "Trastuzumab",
    "severity": "Major",
    "mechanism": "Penghambatan jalur pensinyalan protektif HER2/ErbB2 kardiosit oleh trastuzumab melipatgandakan stres oksidatif kerusakan radikal bebas membran miokardium yang diinduksi antrasiklin.",
    "clinicalOutcome": "Penurunan fraksi ejeksi ventrikel kiri (LVEF) yang drastis, kardiomiopati dilatasi simtomatik, dan gagal jantung kongestif (NYHA Kelas III/IV) refrakter.",
    "management": "HINDARI terapi kombinasi bersamaan secara simultan. Jika kedua obat diindikasikan, berikan secara sekuensial dengan jeda interval waktu dan lakukan evaluasi ekokardiografi LVEF berkala.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-80792",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "The use of trastuzumab and anthracyclines in combination has been associated with a high risk of cardiotoxicity. Trastuzumab and agents in the anthracycline class are individually cardiotoxic and may have additive effects during coadministration.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4725"
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
    "id": "ddi-deferoxamine-prochlorperazine",
    "drugAId": "drug-deferoxamine",
    "drugBId": "drug-prochlorperazine",
    "drugAName": "Deferoxamine",
    "drugBName": "Prochlorperazine",
    "severity": "Moderate",
    "mechanism": "Interaksi farmakodinamik sinergis depresan susunan saraf pusat antara fenotiazin dan efek khelasi zat besi metabolik serebral.",
    "clinicalOutcome": "Penurunan kesadaran transien yang mendalam, stupor, koma metabolik, dan hilangnya respons neurologis selama 48-72 jam.",
    "management": "KONTRAINDIKASI BERSAMAAN. Hindari penggunaan proklorperazin atau fenotiazin antipsikotik/antiemetik saat pasien sedang menjalani terapi infus deferoxamine.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-73799",
    "mechanismCategory": "Others",
    "ddinterOriginalText": "Limited data suggest that the concomitant administration of deferoxamine and prochlorperazine may result in transient metabolic encephalopathy. The mechanism is unknown.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #5536"
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
    "id": "ddi-desmopressin-carbamazepine",
    "drugAId": "drug-desmopressin",
    "drugBId": "drug-carbamazepine",
    "drugAName": "Desmopressin",
    "drugBName": "Carbamazepine",
    "severity": "Moderate",
    "mechanism": "Karbamazepin meningkatkan sensitivitas tubulus ginjal terhadap hormon antidiuretik dan merangsang pelepasan ADH endogen, memperkuat efek antidiuretik desmopressin secara aditif.",
    "clinicalOutcome": "Retensi air masif, hiponatremia dilusional berat, edema serebral, kejang epileptik hiponatremik, dan koma.",
    "management": "HINDARI kombinasi bila memungkinkan. Jika mutlak diperlukan, pantau kadar natrium serum secara sangat ketat (pada baseline, hari ke-3, ke-7, dan berkala) serta batasi asupan cairan minum secara ketat.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-56284",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "The antidiuretic response to vasopressin or desmopressin may be potentiated by certain drugs, including nonsteroidal anti-inflammatory agents, selective serotonin reuptake inhibitors, tricyclic/tetracyclic antidepressants, carbamazepine, chlorpropamide, chlorpromazine, clofibrate, eslicarbazepine, fludrocortisone, haloperidol, lamotrigine, oxcarbazepine, urea, and some antineoplastic agents (e.g., vinca alkaloids, cisplatin, cyclophosphamide). These drugs can occasionally cause fluid retention, in some cases secondary to the syndrome of inappropriate antidiuretic hormone secretion (SIADH). Coadministration with vasopressin or desmopressin may, therefore, increase the risk of water intoxication and/or hyponatremia. Seizure and coma in association with severe hyponatremia have been reported during concomitant use of desmopressin and imipramine or ibuprofen.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2187"
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
    "id": "ddi-docetaxel-ketoconazole",
    "drugAId": "drug-docetaxel",
    "drugBId": "drug-ketoconazole",
    "drugAName": "Docetaxel",
    "drugBName": "Ketoconazole",
    "severity": "Major",
    "mechanism": "Ketoconazole adalah inhibitor kuat isoenzim sitokrom hepar CYP3A4, menurunkan klirens docetaxel hingga 49% dan meningkatkan paparan AUC docetaxel sebesar 80%.",
    "clinicalOutcome": "Peningkatan toksisitas kemoterapi yang parah dan berpotensi mematikan: neutropenia derajat 4 berkepanjangan, neutropenia febril, stomatitis nekrotikans, dan neuropati.",
    "management": "PENGGUNAAN BERSAMAAN HARUS DIHINDARI. Jika antijamur mutlak diperlukan, pilih alternatif yang tidak menghambat CYP3A4 secara kuat, atau turunkan dosis docetaxel hingga 50% disertai pemantauan hematologi harian.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-89468",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with potent inhibitors of CYP450 3A4 or dual CYP450 3A4 and P-glycoprotein (P-gp) inhibitors may significantly increase the plasma concentrations of docetaxel, which is a substrate of both CYP450 3A4 and P-gp.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3827"
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
    "id": "ddi-dutasteride-diltiazem",
    "drugAId": "drug-dutasteride",
    "drugBId": "drug-diltiazem",
    "drugAName": "Dutasteride",
    "drugBName": "Diltiazem",
    "severity": "Moderate",
    "mechanism": "Diltiazem menghambat isoenzim CYP3A4 hepar secara moderat, menurunkan klirens dutasteride dan meningkatkan konsentrasi serum dutasteride sebesar 40-44%.",
    "clinicalOutcome": "Peningkatan pajanan dutasteride jangka panjang dan potensi peningkatan efek samping seksual (impotensi, penurunan libido) atau ginekomastia.",
    "management": "Kombinasi dapat digunakan, namun pantau toleransi klinis pasien terhadap efek samping dutasteride.",
    "evidenceLevel": "Moderate",
    "ddinterPairId": "DDInter-PAIR-57770",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Based on in vitro data, coadministration with inhibitors of CYP450 3A4 may increase the plasma concentrations of dutasteride, which is metabolized by the isoenzyme.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4114"
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
    "id": "ddi-delamanid-moxifloxacin",
    "drugAId": "drug-delamanid",
    "drugBId": "drug-moxifloxacin",
    "drugAName": "Delamanid",
    "drugBName": "Moxifloxacin",
    "severity": "Major",
    "mechanism": "Efek aditif elektrofisiologis penundaan repolarisasi miokardium ventrikel antara metabolit delamanid DM-6705 dan fluorokuinolon moksifloksasin.",
    "clinicalOutcome": "Perpanjangan interval QTc yang bermakna (>500 ms) dan peningkatan risiko aritmia ventrikel polimorfik (Torsades de Pointes).",
    "management": "Lakukan pemantauan EKG serial secara berkala (baseline, minggu ke-2, ke-4, lalu tiap bulan). Pantau dan koreksi elektrolit serum (kalium, magnesium) agar tetap dalam batas normal tinggi. Bila interval QTc melampaui 500 ms, tunda salah satu obat.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-000299"
  },
  {
    "id": "ddi-fluvoxamine-theophylline",
    "drugAId": "drug-fluvoxamine",
    "drugBId": "drug-theophylline",
    "drugAName": "Fluvoxamine",
    "drugBName": "Theophylline",
    "severity": "Major",
    "mechanism": "Inhibisi kuat dan poten isoenzim CYP1A2 hepar oleh fluvoxamine, melumpuhkan jalur eliminasi metabolik utama teofilin.",
    "clinicalOutcome": "Peningkatan konsentrasi serum teofilin sebesar 200 hingga 300% (3 kali lipat), memicu intoksikasi teofilin akut yang fatal: takiaritmia ventrikel, kejang refrakter, henti jantung, dan kematian.",
    "management": "KONTRAINDIKASI RELATIF / HINDARI KOMBINASI. Jika ko-administrasi mutlak tidak terhindarkan, kurangi dosis teofilin sebesar 60-75% (menjadi sepertiga dosis biasa) dan pantau kadar terapeutik teofilin serum (TDM target 5-15 mcg/mL) secara ketat.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-97475",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with fluvoxamine may significantly increase the serum concentrations of theophylline and the associated risk of toxicity. The mechanism is fluvoxamine inhibition of theophylline metabolism via CYP450 1A2.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #471"
    ],
    "alternativeOptionsA": [
      "Substitusi Terapi Bebas Interaksi",
      "Penyesuaian Dosis Klinis"
    ],
    "alternativeOptionsB": [
      "Formoterol Inhaler",
      "Tiotropium",
      "Budesonide Inhaler"
    ]
  },
  {
    "id": "ddi-fluorouracil-warfarin",
    "drugAId": "drug-fluorouracil",
    "drugBId": "drug-warfarin",
    "drugAName": "Fluorouracil",
    "drugBName": "Warfarin",
    "severity": "Major",
    "mechanism": "Inhibisi aktivitas enzim sitokrom CYP2C9 oleh fluorouracil dan metabolitnya, menghambat metabolisme oksidatif dari isomer aktif S-warfarin.",
    "clinicalOutcome": "Perpanjangan International Normalized Ratio (INR) yang drastis dan tidak terduga dalam beberapa hari, memicu komplikasi perdarahan mayor gastrointestinal, intrakranial, dan fatal.",
    "management": "Pantau ketat nilai INR sebelum inisiasi kemoterapi 5-FU, setiap minggu selama terapi, dan pasca kemoterapi. Penurunan dosis warfarin sebesar 30-50% seringkali dibutuhkan. Pertimbangkan beralih ke LMWH (Enoxaparin) yang tidak berinteraksi dengan CYP.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-122406",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Fluorouracil and its prodrug capecitabine may significantly potentiate the hypoprothrombinemic effect of warfarin and other oral anticoagulants. The mechanism of the interaction is unknown. Altered coagulation parameters and/or bleeding have been reported in patients stabilized on a coumarin-derivative anticoagulant such as warfarin following the addition of fluorouracil or capecitabine.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1062"
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
    "id": "ddi-erlotinib-omeprazole",
    "drugAId": "drug-erlotinib",
    "drugBId": "drug-omeprazole",
    "drugAName": "Erlotinib",
    "drugBName": "Omeprazole",
    "severity": "Major",
    "mechanism": "Penghambatan sekresi asam lambung oleh omeprazole menaikkan pH lambung (>4), secara drastis menurunkan kelarutan dan disolusi garam erlotinib hidroklorida di saluran cerna.",
    "clinicalOutcome": "Penurunan absorpsi oral erlotinib hingga AUC turun 61% dan Cmax turun 69%, menyebabkan kegagalan respons terapeutik onkologi dan resistensi palsu.",
    "management": "HINDARI PENGGUNAAN BERSAMAAN DENGAN PPI (Omeprazole/Esomeprazole). Jika penekan asam dibutuhkan, gunakan antasida cair yang diberi jarak minimal 4 jam sebelum atau 2 jam sesudah minum erlotinib, atau gunakan H2RA (Famotidine) yang diminum 10 jam setelah atau 2 jam sebelum erlotinib.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-34112",
    "mechanismCategory": "Absorption",
    "ddinterOriginalText": "Concurrent administration of agents that increase gastric pH such as proton pump inhibitors may decrease the oral bioavailability of erlotinib and reduce its concentrations in plasma. The solubility of erlotinib decreases when the pH is over 5, resulting in reduced absorption. Moreover, since proton pump inhibitors affect pH of the upper gastrointestinal tract for an extended period, separation of doses may not eliminate the interaction.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1889"
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
    "id": "ddi-everolimus-ketoconazole",
    "drugAId": "drug-everolimus",
    "drugBId": "drug-ketoconazole",
    "drugAName": "Everolimus",
    "drugBName": "Ketoconazole",
    "severity": "Major",
    "mechanism": "Inhibisi ganda yang sangat kuat terhadap isoenzim CYP3A4 dan transporter efluks P-glikoprotein oleh ketokonazol pada mukosa usus dan hepatosit.",
    "clinicalOutcome": "Peningkatan konsentrasi puncak plasma (Cmax) everolimus hingga 4 kali lipat dan area under the curve (AUC) hingga 15 kali lipat, memicu toksisitas fatal: pneumonitis interstisial, supresi sumsum tulang berat, dan infeksi oportunistik yang mengancam nyawa.",
    "management": "KONTRAINDIKASI BERSAMAAN. HINDARI penggunaan bersama ketokonazol, itrakonazol, atau vorikonazol dengan everolimus. Jika antijamur dibutuhkan, pilih agen tanpa inhibisi CYP3A4 kuat seperti Flukonazol (dengan reduksi dosis everolimus 50%) atau Ekinokandin (Kaspofungin).",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-123058",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with potent inhibitors of CYP450 3A4 and P-glycoprotein may significantly increase the plasma concentrations of everolimus following oral administration. Everolimus is a substrate of both the CYP450 3A4 isoenzyme and P-glycoprotein drug efflux transporter, thus their inhibition in the intestine can enhance the absorption of everolimus. The risk of side effects such as pneumonitis, stomatitis, infection, dyspnea, diarrhea, anemia, leucopenia, thrombocytopenia, hyperglycemia, and hyperlipidemia may be increased.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1102"
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
    "id": "ddi-ephedrine-selegiline",
    "drugAId": "drug-ephedrine",
    "drugBId": "drug-selegiline",
    "drugAName": "Ephedrine",
    "drugBName": "Selegiline",
    "severity": "Major",
    "mechanism": "Efek pelepasan katekolamin endogen (norepinefrin) yang diinduksi efedrin berakumulasi masif di celah sinaps akibat dihambatnya degradasi enzimatik oleh penghambat MAO.",
    "clinicalOutcome": "Krisis hipertensi hipertermia maligna akut yang mendadak, vasospasme serebral, stroke hemoragik, aritmia kardiak ventrikel, dan kolaps kardiovaskular fatal.",
    "management": "KONTRAINDIKASI MUTLAK. Jangan berikan efedrin pada pasien yang sedang menerima penghambat MAO (MAOI) atau dalam waktu 14 hari pasca penghentian MAOI. Gunakan vasopresor agonis alfa-1 langsung titrasi infus (Norepinefrin atau Fenilefrin dosis rendah) untuk mengatasi hipotensi.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-164906",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Indirect- or mixed-acting sympathomimetic amines may precipitate severe hypertensive reactions and hyperpyrexia in patients treated with monoamine oxidase inhibitors (MAOIs). Death has occurred in some reported cases. The mechanism involves a synergistic sympathomimetic effect due to enhanced norepinephrine storage in adrenergic neurons (MAOI activity) and increased liberation of catecholamines (indirect sympathomimetic activity).",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #898"
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
    "id": "ddi-etoposide-cyclosporine",
    "drugAId": "drug-etoposide",
    "drugBId": "drug-cyclosporine",
    "drugAName": "Etoposide",
    "drugBName": "Cyclosporine",
    "severity": "Moderate",
    "mechanism": "Inhibisi pompa efluks membran P-glikoprotein (ABCB1) dan transporter OATP hepar oleh siklosporin, menghambat ekskresi bilier etoposide.",
    "clinicalOutcome": "Penurunan klirens etoposide sebesar 40-50% dan peningkatan kadar plasma obat bebas, memicu pansitopenia berat berkepanjangan, infeksi neutropenia febril yang fatal, dan mukositis nekrotikans.",
    "management": "Kurangi dosis etoposide sebesar 50% bila diberikan bersama siklosporin dosis tinggi. Pantau hitung darah perifer lengkap (ANC) secara ketat setiap hari.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-76956",
    "mechanismCategory": "Distribution",
    "ddinterOriginalText": "High-dose cyclosporine (concentration greater than 2,000 ng/mL) has been shown to significantly increase systemic etoposide exposure and leukopenia. The mechanism is believed to be inhibition of the multidrug transporter P-glycoprotein in normal tissues.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #5027"
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
    "id": "ddi-fludrocortisone-digoxin",
    "drugAId": "drug-fludrocortisone",
    "drugBId": "drug-digoxin",
    "drugAName": "Fludrocortisone",
    "drugBName": "Digoxin",
    "severity": "Moderate",
    "mechanism": "Aktivitas mineralokortikoid kuat dari fludrokortison memicu ekskresi kalium masif di tubulus distal ginjal, menyebabkan hipokalemia berat.",
    "clinicalOutcome": "Hipokalemia meningkatkan afinitas pengikatan digoksin pada pompa Na+/K+-ATPase miokardium, memicu intoksikasi digitalis akut: aritmia ventrikel parah (PVCs, ventrikel takikardia), bradikardia AV blok total, dan henti jantung.",
    "management": "Pantau kadar kalium serum secara berkala dan pertahankan kadar kalium serum stabil di rentang 4.0 - 5.0 mEq/L dengan suplemen kalium klorida (KCl) oral jika perlu. Pantau tanda intoksikasi digitalis dan kadar digoksin serum.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-86684",
    "mechanismCategory": "Others",
    "ddinterOriginalText": "Systemically administered corticosteroids may induce hypokalemia and possibly increase the risk of digoxin toxicity. In addition, corticosteroid-induced sodium and water retention can result in edema leading to heart failure. These effects may be more common with the natural corticosteroids (cortisone, hydrocortisone) which have greater mineralocorticoid activity.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4778"
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
    "id": "ddi-filgrastim-bleomycin",
    "drugAId": "drug-filgrastim",
    "drugBId": "drug-bleomycin",
    "drugAName": "Filgrastim",
    "drugBName": "Bleomycin",
    "severity": "Moderate",
    "mechanism": "Aktivasi neutrofil sirkulasi dan pelepasan metabolit oksigen reaktif radikal bebas oleh neutrofil yang distimulasi G-CSF pada mikrosirkulasi alveolus paru.",
    "clinicalOutcome": "Peningkatan risiko dan percepatan awitan toksisitas paru akibat bleomisin (pneumonitis inflamasi dan fibrosis paru progresif).",
    "management": "Gunakan filgrastim dengan kehati-hatian pada rejimen yang mengandung bleomisin (seperti ABVD pada limfoma Hodgkin). Pantau fungsi respirasi, saturasi oksigen, dan auskultasi ronkhi paru.",
    "evidenceLevel": "Moderate",
    "ddinterPairId": "DDInter-PAIR-45384",
    "mechanismCategory": "Antagonism",
    "ddinterOriginalText": "INTERVAL: The safety and efficacy of hematopoietic growth factors such as colony-stimulating factors (G-CSF and GM-CSF) and stem cell factors (SCF) given simultaneously with cancer chemotherapy have not been established. Theoretical concerns exist regarding their concomitant administration because hematopoietic growth factors stimulate myeloid cell proliferation while antineoplastic agents primarily target rapidly dividing cells.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2179"
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
    "id": "ddi-itraconazole-simvastatin",
    "drugAId": "drug-itraconazole",
    "drugBId": "drug-simvastatin",
    "drugAName": "Itraconazole",
    "drugBName": "Simvastatin",
    "severity": "Major",
    "mechanism": "Inhibisi masif isoenzim hepar dan enterosit CYP3A4 oleh itrakonazol menghambat metabolisme oksidatif utama simvastatin dan bentuk asam aktifnya.",
    "clinicalOutcome": "Peningkatan konsentrasi serum puncak (Cmax) simvastatin hingga 5-10 kali lipat dan AUC hingga 10-15 kali lipat, memicu rabdomiolisis berat dengan mioglobinuria, hiperkalemia, gagal ginjal akut anurik, dan kematian.",
    "management": "KONTRAINDIKASI MUTLAK BERSAMAAN. Hentikan simvastatin sementara waktu selama terapi itrakonazol (minimal 2 hari sebelum dan hingga selesai terapi), atau beralih ke statin yang tidak dimetabolisme CYP3A4 seperti Pravastatin atau Rosuvastatin dengan dosis konservatif.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-121161",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Itraconazole increases the plasma concentrations of some HMG-CoA reductase inhibitors and may increase the risk of rhabdomyolysis. The mechanism has been reported to be inhibition of hepatic CYP450 3A4 enzymes responsible for HMG-CoA reductase inhibitor metabolism. Itraconazole greatly increases levels of lovastatin and its active metabolite, lovastatin acid and significantly increases simvastatin levels.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2186"
    ],
    "alternativeOptionsA": [
      "Fluconazole",
      "Terbinafine",
      "Nystatin",
      "Micafungin"
    ],
    "alternativeOptionsB": [
      "Rosuvastatin",
      "Pravastatin",
      "Pitavastatin",
      "Ezetimibe"
    ]
  },
  {
    "id": "ddi-irinotecan-ketoconazole",
    "drugAId": "drug-irinotecan",
    "drugBId": "drug-ketoconazole",
    "drugAName": "Irinotecan",
    "drugBName": "Ketoconazole",
    "severity": "Major",
    "mechanism": "Inhibisi kuat isoenzim CYP3A4 hepar oleh ketokonazol memblokade jalur oksidasi irinotecan menjadi APC, mengalihkan metabolisme menuju akumulasi berlebihan metabolit aktif SN-38 sitotoksik.",
    "clinicalOutcome": "Peningkatan AUC SN-38 hingga lebih dari 100% (2 kali lipat), memicu toksisitas fatal: diare lambat berat dengan kolaps dehidrasi, syok sepsis, dan neutropenia febril yang mengancam nyawa.",
    "management": "KONTRAINDIKASI BERSAMAAN. Hindari penggunaan ketokonazol atau azol poten lainnya pada pasien yang menerima irinotecan. Berikan antijamur alternatif yang tidak menghambat CYP3A4 (seperti Fluconazole dosis rendah atau Echinocandin).",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-119195",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "Coadministration with certain azole antifungal agents may significantly increase the plasma concentrations of irinotecan and its active metabolite, SN-38. CYP450 3A4 is the isoenzyme responsible for the metabolic conversion of irinotecan to its inactive metabolite, APC. Inhibition of APC formation results in more irinotecan metabolism to SN-38, an active and toxic metabolite. High plasma levels of irinotecan and SN-38 may increase the risk of potentially fatal toxicities such as severe diarrhea, neutropenia, sepsis, and thromboembolism.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #1809"
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
    "id": "ddi-ifosfamide-cisplatin",
    "drugAId": "drug-ifosfamide",
    "drugBId": "drug-cisplatin",
    "drugAName": "Ifosfamide",
    "drugBName": "Cisplatin",
    "severity": "Moderate",
    "mechanism": "Kerusakan tubulus proksimal ginjal akibat toksisitas platinum cisplatin menurunkan klirens ginjal ifosfamid dan meningkatkan efek nefrotoksisitas aditif.",
    "clinicalOutcome": "Peningkatan risiko kerusakan tubulus ginjal berat (Sindrom Fanconi dengan hipofosfatemia berat, glukosuria, asidosis metabolik, dan gagal ginjal akut) serta peningkatan risiko ensefalopati neurotoksik ifosfamid.",
    "management": "Pantau ketat klirens kreatinin, kadar fosfat, kalium, dan bikarbonat serum. Berikan hidrasi hiperhidrasi agresif dan suplementasi elektrolit profilaksis. Tunda cisplatin atau turunkan dosis ifosfamid jika eGFR menurun signifikan.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-66597",
    "mechanismCategory": "Others",
    "ddinterOriginalText": "Limited data suggest that ifosfamide can exacerbate ototoxicity caused by cisplatin. The mechanism is not known.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3102"
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
    "id": "ddi-ganciclovir-zidovudine",
    "drugAId": "drug-ganciclovir",
    "drugBId": "drug-zidovudine",
    "drugAName": "Ganciclovir",
    "drugBName": "Zidovudine",
    "severity": "Major",
    "mechanism": "Efek toksisitas sitostatik aditif dan sinergis terhadap sel punca hematopoietik dan prekursor eritroid/mieloid di sumsum tulang.",
    "clinicalOutcome": "Supresi sumsum tulang yang sangat parah: anemia aplastik berat, neutropenia ekstrem (<500/mcL), dan trombositopenia berat yang memerlukan transfusi berulang dan memicu sepsis fatal.",
    "management": "HINDARI KOMBINASI BERSAMAAN JIKA MEMUNGKINKAN. Jika terapi CMV mutlak dibutuhkan pada pasien HIV, pertimbangkan untuk mengganti zidovudine dengan antiretroviral non-mielotoksik (seperti Tenofovir atau Abacavir). Jika terpaksa diberikan bersamaan, pantau hitung darah lengkap (CBC) setiap 2-3 hari dan siapkan filgrastim (G-CSF).",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-317",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Limited data concerning the coadministration of ganciclovir and zidovudine do not suggest the potential for a clinically significant pharmacokinetic interaction. However, the possibility of increased risk and severity of hematologic toxicity, especially neutropenia and anemia, due to additive myelosuppressive effects should be considered during concomitant therapy. The majority of patients may be unable to tolerate full dosages of these drugs in combination.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #5545"
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
    "id": "ddi-gefitinib-omeprazole",
    "drugAId": "drug-gefitinib",
    "drugBId": "drug-omeprazole",
    "drugAName": "Gefitinib",
    "drugBName": "Omeprazole",
    "severity": "Moderate",
    "mechanism": "Penghambatan pompa proton lambung oleh omeprazole meningkatkan pH intragastrik (>4.0), secara dramatis menurunkan disolusi dan kelarutan garam basa lemah gefitinib di saluran cerna.",
    "clinicalOutcome": "Penurunan konsentrasi puncak plasma (Cmax) dan area under the curve (AUC) gefitinib sebesar 40-50%, menyebabkan kegagalan respons terapeutik onkologi dan progresivitas tumor kanker paru.",
    "management": "HINDARI PENGGUNAAN BERSAMA PPI. Jika penekan asam lambung mutlak dibutuhkan, gunakan antasida cair yang diberi jarak minimal 4 jam sebelum atau 2 jam sesudah gefitinib, atau H2RA (Famotidine) yang diminum 6 jam sebelum atau 6 jam sesudah gefitinib.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-34131",
    "mechanismCategory": "Absorption",
    "ddinterOriginalText": "Coadministration with drugs that cause significant, sustained elevations in gastric pH such as H2-receptor antagonists and proton pump inhibitors may decrease the plasma concentrations of gefitinib. The exact mechanism of interaction is unknown.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3996"
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
    "id": "ddi-idarubicin-trastuzumab",
    "drugAId": "drug-idarubicin",
    "drugBId": "drug-trastuzumab",
    "drugAName": "Idarubicin",
    "drugBName": "Trastuzumab",
    "severity": "Major",
    "mechanism": "Toksisitas miokardial aditif antara interkalasi DNA antrasiklin dan blokade pensinyalan protektif kardiomiosit HER2/neuregulin oleh trastuzumab.",
    "clinicalOutcome": "Peningkatan insiden disfungsi ventrikel kiri berat (LVEF anjlok) dan timbulnya gagal jantung kongestif (CHF) simtomatik yang refrakter.",
    "management": "HINDARI PEMBERIAN BERSAMAAN SECARA SERENTAK. Jika rejimen mengandung kedua agen, berikan secara sekuensial (bukan konkuren) dengan interval pemantauan ekokardiografi ketat fraksi ejeksi ventrikel kiri (LVEF) sebelum inisiasi trastuzumab.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-107553",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "The use of trastuzumab and anthracyclines in combination has been associated with a high risk of cardiotoxicity. Trastuzumab and agents in the anthracycline class are individually cardiotoxic and may have additive effects during coadministration.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #4725"
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
    "id": "ddi-imidapril-spironolactone",
    "drugAId": "drug-imidapril",
    "drugBId": "drug-spironolactone",
    "drugAName": "Imidapril",
    "drugBName": "Spironolactone",
    "severity": "Major",
    "mechanism": "Blokade ganda terhadap sumbu renin-angiotensin-aldosteron: penghambatan produksi aldosteron oleh imidapril ditambah antagonisme reseptor mineralokortikoid oleh spironolakton melumpuhkan sekresi kalium di tubulus distal ginjal.",
    "clinicalOutcome": "Hiperkalemia berat (>6.0 mEq/L) yang mengancam jiwa, memicu aritmia ventrikel fatal, fibrilasi ventrikel, asistol kardiak, dan henti jantung mendadak.",
    "management": "Pantau kadar kalium serum dan fungsi ginjal secara ketat (pada baseline, minggu ke-1, minggu ke-4, lalu tiap 3 bulan). Batasi dosis spironolakton maksimal 25 mg/hari. Hindari penggunaan suplemen kalium atau pengganti garam meja berbasis kalium.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-000314"
  },
  {
    "id": "ddi-ivermectin-warfarin",
    "drugAId": "drug-ivermectin",
    "drugBId": "drug-warfarin",
    "drugAName": "Ivermectin",
    "drugBName": "Warfarin",
    "severity": "Moderate",
    "mechanism": "Kompetisi ikatan protein plasma albumin dan potensi modulasi enzim sitokrom hepar oleh ivermectin.",
    "clinicalOutcome": "Peningkatan International Normalized Ratio (INR) transien dan perpanjangan waktu protrombin, meningkatkan risiko memar spontan, epistaksis, atau perdarahan.",
    "management": "Pantau nilai INR secara ketat sebelum dan beberapa hari setelah pemberian ivermectin dosis tunggal pada pasien yang sedang menerima terapi antikoagulan warfarin. Sesuaikan dosis warfarin sementara jika nilai INR melampaui rentang target terapeutik.",
    "evidenceLevel": "Moderate",
    "ddinterPairId": "DDInter-PAIR-121505",
    "mechanismCategory": "Others",
    "ddinterOriginalText": "Coadministration of warfarin with ivermectin has been associated with rare, postmarketing reports of increased INR (International Normalized Ratio). The mechanism of interaction has not been described.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #253"
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
    "id": "ddi-chloramphenicol-phenytoin",
    "drugAId": "drug-chloramphenicol",
    "drugBId": "drug-phenytoin",
    "drugAName": "Chloramphenicol",
    "drugBName": "Phenytoin",
    "severity": "Moderate",
    "mechanism": "Inhibisi poten isoenzim sitokrom hepar CYP2C9 dan CYP2C19 oleh kloramfenikol menghambat metabolisme oksidatif utama fenitoin.",
    "clinicalOutcome": "Lonjakan konsentrasi serum fenitoin hingga 2-3 kali lipat di atas rentang terapeutik, memicu intoksikasi fenitoin berat (nistagmus hebat, ataksia serebelar, disartria, letargi, stupor, dan koma).",
    "management": "HINDARI PENGGUNAAN BERSAMAAN JIKA MEMUNGKINKAN. Bila mutlak diperlukan, pantau kadar serum fenitoin secara ketat dan kurangi dosis fenitoin sebesar 30-50%. Waspadai tanda toksisitas neurologis.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-62424",
    "mechanismCategory": "Others",
    "ddinterOriginalText": "Chloramphenicol often markedly increases serum phenytoin levels. Toxicity has been reported. Also, phenytoin has been reported both to increase and to decrease serum chloramphenicol levels. Significant systemic absorption of otic or ophthalmic chloramphenicol products is unlikely. However, the clinician should be aware of the possibility of a drug interaction. Similar effects may occur with other hydantoins.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3776"
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
    "id": "ddi-quinine-digoxin",
    "drugAId": "drug-quinine",
    "drugBId": "drug-digoxin",
    "drugAName": "Quinine",
    "drugBName": "Digoxin",
    "severity": "Moderate",
    "mechanism": "Inhibisi transporter efluks membran P-glikoprotein (P-gp) di tubulus ginjal dan barier bilier hepar oleh kina melumpuhkan klirens ekskresi digoksin.",
    "clinicalOutcome": "Peningkatan kadar serum digoksin hingga 50-100% (2 kali lipat), memicu intoksikasi digitalis fatal (aritmia ventrikel parah, takikardia ventrikel, AV blok total, henti jantung, mual muntah hebat, dan halo penglihatan hijau-kuning).",
    "management": "Kurangi dosis digoksin sebesar 50% saat memulai terapi kina. Pantau kadar serum digoksin serial dan elektrokardiogram (EKG) secara ketat.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-86811",
    "mechanismCategory": "Metabolism",
    "ddinterOriginalText": "High doses of quinine (greater than 600 mg/day) may decrease the plasma clearance of digoxin in some patients. Serum digoxin levels and risk of toxicity may be increased. The mechanism is believed to be decreased biliary clearance of digoxin.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #3397"
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
    "id": "ddi-carboplatin-furosemide",
    "drugAId": "drug-carboplatin",
    "drugBId": "drug-furosemide",
    "drugAName": "Carboplatin",
    "drugBName": "Furosemide",
    "severity": "Moderate",
    "mechanism": "Efek sitotoksik ototoksisitas aditif dan sinergis terhadap stria vascularis dan sel-sel rambut koklea organon Corti telinga dalam.",
    "clinicalOutcome": "Tinnitus persisten, penurunan ambang pendengaran nada frekuensi tinggi, dan tuli sensorineural permanen bilateral.",
    "management": "Hindari penggunaan furosemid dosis tinggi parenteral pada pasien yang menerima kemoterapi karboplatin. Lakukan tes audiometri pra-kemoterapi dan evaluasi keluhan telinga berdenging secara berkala.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-15486",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "The concomitant use of loop diuretics with carboplatin may increase the risk of ototoxicity. Loop diuretics, especially ethacrynic acid and high doses of furosemide, and platinum compounds have been individually associated with ototoxicity. Carboplatin is generally considered to be less neurotoxic and ototoxic than cisplatin; however, hearing loss has been reported when pediatric patients received high doses of carboplatin with other ototoxic agents.",
    "ddinterOriginalManagement": "Moderate clinical significance (DDInter Level 2). Observe caution and monitor clinical response.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #2068"
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
    "id": "ddi-chloroquine-amiodarone",
    "drugAId": "drug-chloroquine",
    "drugBId": "drug-amiodarone",
    "drugAName": "Chloroquine",
    "drugBName": "Amiodarone",
    "severity": "Major",
    "mechanism": "Blokade aditif kanal ion kalium IKr (hERG) pada membran miosit ventrikel kardiak memperpanjang potensial aksi repolarisasi ventrikel.",
    "clinicalOutcome": "Pemanjangan interval QTc ekstrem (>500 ms) memicu aritmia ventrikel polimorfik Torsades de Pointes (TdP), fibrilasi ventrikel, dan henti jantung mendadak.",
    "management": "KONTRAINDIKASI BERSAMAAN. Hindari pemberian klorokuin pada pasien yang sedang menerima terapi amiodaron. Gunakan antamalaria alternatif yang tidak memperpanjang interval QT secara signifikan.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-21402",
    "mechanismCategory": "Synergy",
    "ddinterOriginalText": "Class IA (e.g., disopyramide, quinidine, procainamide) and class III (e.g., amiodarone, dofetilide, sotalol) antiarrhythmic agents can cause dose-related prolongation of the QT interval. Theoretically, coadministration with other agents that can prolong the QT interval may result in additive effects and increased risk of ventricular arrhythmias including torsade de pointes and sudden death.",
    "ddinterOriginalManagement": "Major clinical significance (DDInter Level 3). Avoid combination or monitor intensively.",
    "references": [
      "Nature Protocols (2022) - DDInter: an online drug-drug interaction database with chemical and clinical profiles.",
      "Clinical Pharmacology & Therapeutics - DDInter 2.0 Monograph #363"
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
    "id": "ddi-calcium-polystyrene-levothyroxine",
    "drugAId": "drug-calcium-polystyrene-sulfonate",
    "drugBId": "drug-levothyroxine",
    "drugAName": "Calcium Polystyrene Sulfonate",
    "drugBName": "Levothyroxine",
    "severity": "Major",
    "mechanism": "Pengikatan fisik kationik dan adsorpsi molekul levotiroksin pada resin penukar ion polistirena kalsium di lumen saluran cerna.",
    "clinicalOutcome": "Penurunan drastis bioavailabilitas dan absorpsi levotiroksin oral hingga >80%, menyebabkan lonjakan kadar TSH serum dan kegagalan kontrol hipotiroidisme berat.",
    "management": "Beri jarak waktu pemberian minimal 4 hingga 6 jam antara konsumsi levotiroksin dan kalsium polistirena sulfonat. Pantau kadar TSH serum berkala.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-000320"
  },
  {
    "id": "ddi-colestyramine-warfarin",
    "drugAId": "drug-colestyramine",
    "drugBId": "drug-warfarin",
    "drugAName": "Colestyramine",
    "drugBName": "Warfarin",
    "severity": "Major",
    "mechanism": "Pengikatan elektrostatik fisik asam empedu kationik kolestiramin terhadap molekul asam lipofilik warfarin di lumen usus halus.",
    "clinicalOutcome": "Penurunan absorpsi warfarin secara bermakna, penurunan waktu protrombin / INR di bawah rentang terapeutik, memicu kegagalan antikoagulasi dan timbulnya episode tromboemboli berulang.",
    "management": "Berikan warfarin minimal 1 jam sebelum atau 4-6 jam setelah minum kolestiramin. Pantau nilai INR secara berkala dan sesuaikan dosis warfarin jika kolestiramin diinisiasi atau dihentikan.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-000321"
  },
  {
    "id": "ddi-lopinavir-ritonavir-simvastatin",
    "drugAId": "drug-lopinavir-ritonavir",
    "drugBId": "drug-simvastatin",
    "drugAName": "Lopinavir + Ritonavir",
    "drugBName": "Simvastatin",
    "severity": "Major",
    "mechanism": "Inhibisi masif isoenzim sitokrom hepar dan enterosit CYP3A4 oleh ritonavir memblokade metabolisme lintas pertama simvastatin.",
    "clinicalOutcome": "Peningkatan konsentrasi serum puncak (Cmax) simvastatin hingga >10-20 kali lipat dan AUC hingga >30 kali lipat, memicu rabdomiolisis berat dengan mioglobinuria, hiperkalemia fatal, gagal ginjal akut anurik, dan kematian.",
    "management": "KONTRAINDIKASI MUTLAK BERSAMAAN. Hindari simvastatin atau lovastatin pada pasien yang menerima lopinavir/ritonavir. Gunakan statin yang tidak dimetabolisme oleh CYP3A4 seperti Pravastatin atau Rosuvastatin dengan dosis awal terendah.",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-000322"
  },
  {
    "id": "ddi-dihydroartemisinin-piperaquine-clarithromycin",
    "drugAId": "drug-dihydroartemisinin-piperaquine",
    "drugBId": "drug-clarithromycin",
    "drugAName": "Dihydroartemisinin + Piperaquine",
    "drugBName": "Clarithromycin",
    "severity": "Major",
    "mechanism": "Inhibisi kuat CYP3A4 oleh klaritromisin menghambat eliminasi piperakuin ditambah efek pemanjangan interval QTc kardiak aditif dari kedua obat.",
    "clinicalOutcome": "Akumulasi piperakuin dalam sirkulasi memicu pemanjangan interval QTc ekstrem (>500 ms) dan peningkatan risiko aritmia ventrikel fatal Torsades de Pointes.",
    "management": "HINDARI PENGGUNAAN BERSAMAAN. Jika pasien malaria DHP membutuhkan terapi antibiotik bakterial, gunakan antibiotik alternatif yang tidak menghambat CYP3A4 dan tidak memperpanjang interval QTc (seperti Amoxicillin atau Cefixime).",
    "evidenceLevel": "High",
    "ddinterPairId": "DDInter-PAIR-000323"
  }
];

export const EXTENDED_INTERACTIONS_DATABASE: DrugInteraction[] = deduplicateInteractions([
  ...DDINTER2_SCRAPED_INTERACTIONS,
  ...DDINTER2_COMPREHENSIVE_DDI,
  ...DDINTER2_LIVE_INTERACTIONS,
  ...DDINTER2_OFFICIAL_ADDITIONS,
  ...DDINTER2_BATCH_2026_ADDITIONS,
  ...DDINTER2_BULK_ADDITIONS,
  ...DDINTER2_PHASE1_CHRONIC_ADDITIONS,
  ...DDINTER2_PHASE2_INFECTION_ADDITIONS,
  ...DDINTER2_PHASE3_CNS_ANALGESIC_ADDITIONS,
  ...DDINTER2_PHASE4_MINOR_ADDITIONS,
  ...DDINTER2_MODERATE_BATCH1_ADDITIONS,
  ...DDINTER2_MODERATE_BATCH2_ADDITIONS,
  ...DDINTER2_MODERATE_BATCH3_ADDITIONS,
  ...DDINTER_OFFICIAL_INTERACTIONS,
  ...BASE_EXTENDED_INTERACTIONS
]);


