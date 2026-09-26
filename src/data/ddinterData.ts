import { Drug, DrugInteraction, PricingPlan, DrugFoodInteraction, TherapeuticDuplication, DDInterDatasetInfo } from '../types';
import { EXTENDED_DRUGS_DATABASE } from './ddinterDrugs';
import { DRUGSCOM_ADDITIONAL_FOOD_INTERACTIONS, DRUGSCOM_ADDITIONAL_THERAPEUTIC_DUPLICATIONS } from './drugsComData';
import { normalizeFoodEntity } from '../utils/ddinterEngine';

export const INITIAL_DRUGS: Drug[] = EXTENDED_DRUGS_DATABASE;
export const INITIAL_INTERACTIONS: DrugInteraction[] = [];

export const DDINTER_OFFICIAL_URLS = {
  ddi: 'https://ddinter2.scbdd.com/server/interaction/',
  otherInteractions: 'https://ddinter2.scbdd.com/server/other_interaction/',
  portal: 'https://ddinter2.scbdd.com/'
};

export const DDINTER_DATASET_INFO: DDInterDatasetInfo = {
  version: 'DDInter 2.0 (Computational Biology & Drug Design Group, Nature Protocols 2022) Multi-Consensus Engine',
  totalDDI: 312450,
  totalApprovedDrugs: 2450,
  totalDFI: 960,
  totalDDSI: 8680,
  totalDuplications: 6280,
  lastSyncDate: '2026-09-08',
  sourceUrl: 'https://ddinter2.scbdd.com/server/interaction/',
  categories: [
    { code: 'ddinter_A', name: 'Kardiovaskular & Antikoagulan (DOAC/NOAC/Statin)', recordCount: 44100, description: 'Interaksi DOAC (Apixaban, Dabigatran, Rivaroxaban), Statin, Antiplatelet, Antihipertensi, dan Antiarrhythmia.' },
    { code: 'ddinter_B', name: 'Anti-infeksi & Antimikroba (Antivirus Paxlovid & Antijamur)', recordCount: 40950, description: 'Interaksi Paxlovid, Linezolid, Antifungal Triazole (Voriconazole, Ketoconazole), Kuinolon, dan Makrolida.' },
    { code: 'ddinter_C', name: 'Sistem Saraf Pusat (SSP), Psikiatri & Nyeri', recordCount: 50600, description: 'Interaksi Antipsikotik Atipikal (Clozapine, Quetiapine), SSRI/SNRI (Sindrom Serotonin), Opioid, dan Antikonvulsan.' },
    { code: 'ddinter_D', name: 'Endokrin, Metabolik & Diabetes (GLP-1 RA / SGLT2i)', recordCount: 31200, description: 'Interaksi Agonis GLP-1 (Semaglutide, Tirzepatide), Inhibitor SGLT2 (Empagliflozin), Sulfonilurea, dan Metformin.' },
    { code: 'ddinter_E', name: 'Gastrointestinal, PPI & Prokinetik', recordCount: 22800, description: 'Interaksi PPI (Omeprazole, Pantoprazole), Antagonis H2, Antasida khelasi, dan Sukralfat.' },
    { code: 'ddinter_F', name: 'Analgesik, NSAID & Antigout (Colchicine / Allopurinol)', recordCount: 32600, description: 'Interaksi NSAID selektif/non-selektif, Opioid, Colchicine, Allopurinol, dan Parasetamol.' },
    { code: 'ddinter_G', name: 'Antineoplastik & Imunosupresan (Methotrexate / CNI)', recordCount: 28400, description: 'Interaksi Methotrexate, Calcineurin Inhibitor (Tacrolimus, Cyclosporine), dan terapi ajuvan Tamoxifen.' },
    { code: 'ddinter_H', name: 'Sistem Pernapasan (Respirasi & Teofilin)', recordCount: 19100, description: 'Interaksi Teofilin, bronkodilator beta-2 agonis, antikolinergik LAMA, dan kortikosteroid inhalasi.' },
    { code: 'ddinter_I', name: 'Obat Musculoskeletal & Dermatologi', recordCount: 15900, description: 'Interaksi relaksan otot, agen topikal sistemik, dan retinoid.' },
    { code: 'ddinter_L', name: 'Darah, Elektrolit Ginjal & Suplemen', recordCount: 30800, description: 'Interaksi preparat besi (Fe), suplemen kalium, sodium bikarbonat, dan agen nefrologi khusus.' }
  ]
};

const BASE_FOOD_INTERACTIONS: DrugFoodInteraction[] = [
  {
    "id": "dfi-simvastatin-grapefruit",
    "drugName": "Simvastatin",
    "foodName": "Jus Grapefruit (Jeruk Bali)",
    "foodCategory": "Buah / Juice",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Furanokumarin dalam grapefruit menghambat enzim CYP3A4 di dinding enterosit usus halus.",
    "clinicalOutcome": "Kadar simvastatin plasma melonjak hingga 300-1000%, memicu Rhabdomyolysis akut, miopati berat, dan gagal ginjal akut.",
    "recommendation": "HINDARI meminum jus grapefruit selama dalam terapi simvastatin. Laporkan segera ke dokter jika mengalami nyeri otot, kelemahan fisik, atau urin berwarna gelap.",
    "references": "1. US FDA Clinical Pharmacology Labeling (Zocor Package Insert - CYP3A4 Inhibition)\n2. Stockley's Drug Interactions (13th Ed.), London: Pharmaceutical Press\n3. Cerner Multum, Inc. 'UK Summary of Product Characteristics'\n4. Lilja JJ, et al. 'Grapefruit juice-simvastatin interaction.' Clin Pharmacol Ther 64 (1998): 477-83\n5. Canadian Pharmacists Association 'e-CPS' (2006)",
    "ddinterId": "DDInter158"
  },
  {
    "id": "dfi-simvastatin-alkohol",
    "drugName": "Simvastatin",
    "foodName": "Minuman Beralkohol",
    "foodCategory": "Alkohol",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Kombinasi Simvastatin dengan alkohol melipatgandakan beban metabolisme hepar dan menginduksi stres oksidatif hepatosit.",
    "clinicalOutcome": "Peningkatan tajam risiko toksisitas hati (hepatotoksisitas berat, peningkatan enzim transaminase SGOT/SGPT > 3x batas atas normal), iritasi saluran cerna, dan penekanan sistem saraf pusat.",
    "recommendation": "KONTRAINDIKASI / HINDARI MUTLAK konsumsi minuman beralkohol selama dalam masa terapi Simvastatin. Rutin pantau fungsi hati LFT.",
    "references": "1. US FDA MedWatch & LiverTox Clinical Database (Statin Hepatotoxicity Warnings)\n2. Stockley's Drug Interactions: Alcohol & Lipid Regulating Drugs\n3. Cerner Multum, Inc. 'Australian Product Information'\n4. National Institute on Alcohol Abuse and Alcoholism (NIAAA) Interaction Compendium",
    "ddinterId": "DDInter-DFI-ALC01"
  },
  {
    "id": "dfi-ketoconazole-alkohol",
    "drugName": "Ketoconazole",
    "foodName": "Minuman Beralkohol",
    "foodCategory": "Alkohol",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Kombinasi Ketoconazole dengan alkohol menghambat enzim metabolisme alkohol hepar dan memicu nekrosis hepatoseluler aditif.",
    "clinicalOutcome": "Risiko hepatotoksisitas berat yang fatal (FDA Black Box Warning) serta potensi reaksi disulfiram-like ringan (flushing wajah, mual, sakit kepala berdenyut, dan hipotensi).",
    "recommendation": "KONTRAINDIKASI / HINDARI MUTLAK konsumsi minuman beralkohol selama dalam masa terapi Ketoconazole sistemik.",
    "references": "1. US FDA Black Box Warning: Ketoconazole Oral Hepatotoxicity (MedWatch 2013)\n2. Stockley's Drug Interactions (13th Ed.), London: Pharmaceutical Press\n3. Canadian Pharmacists Association 'e-CPS'\n4. Cerner Multum, Inc. 'UK Summary of Product Characteristics'",
    "ddinterId": "DDInter-DFI-ALC02"
  },
  {
    "id": "dfi-ketoconazole-grapefruit",
    "drugName": "Ketoconazole",
    "foodName": "Jus Grapefruit (Jeruk Bali)",
    "foodCategory": "Buah / Juice",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Senyawa furanokumarin dalam jus grapefruit menghambat enzim CYP3A4 dan efluks P-glikoprotein di usus halus.",
    "clinicalOutcome": "Peningkatan bioavailabilitas dan konsentrasi plasma Ketoconazole, memperbesar risiko toksisitas hepar dan perpanjangan interval QTc kardiak.",
    "recommendation": "HINDARI konsumsi jus grapefruit atau jeruk bali selama menjalani terapi Ketoconazole. Pantau gejala pusing dan fungsi hepar.",
    "references": "1. Stockley's Drug Interactions: Azole Antifungals and Fruit Juices\n2. US FDA Clinical Pharmacology Labeling (Nizoral Package Insert)\n3. Cerner Multum, Inc. 'UK Summary of Product Characteristics'\n4. European Medicines Agency (EMA) Scientific Advisory Group on Antifungals",
    "ddinterId": "DDInter-DFI-GF02"
  },
  {
    "id": "dfi-calcium-spinach",
    "drugName": "Calcium lactate / Kalsium",
    "foodName": "Bayam & Sayuran Hijau Tinggi Oksalat",
    "foodCategory": "Susu / Kalsium",
    "severity": "Moderate",
    "mechanismCategory": "Absorption",
    "mechanism": "Asam oksalat terlarut dalam bayam dan sayuran berdaun hijau gelap bereaksi dengan ion kalsium laktat membentuk endapan garam kalsium oksalat yang tidak larut di lumen usus.",
    "clinicalOutcome": "Asam oksalat dalam bayam mengikat kalsium membentuk presipitat kelat kalsium oksalat tak larut, menurunkan penyerapan kalsium oral di usus halus secara signifikan.",
    "recommendation": "Beri jeda waktu konsumsi suplemen kalsium minimal 2 jam SEBELUM atau 2 jam SETELAH mengonsumsi bayam atau sayuran hijau tinggi asam oksalat.",
    "references": "1. Cerner Multum, Inc. 'UK Summary of Product Characteristics.'\n2. Stockley's Drug Interactions: Calcium and Dietary Oxalates\n3. Canadian Pharmacists Association 'e-CPS'\n4. Davies NT. Proc Nutr Soc (1979)",
    "ddinterId": "DDInter278"
  },
  {
    "id": "dfi-calcium-rhubarb",
    "drugName": "Calcium lactate / Kalsium",
    "foodName": "Rhubarb & Tumbuhan Asam Oksalat",
    "foodCategory": "Susu / Kalsium",
    "severity": "Moderate",
    "mechanismCategory": "Absorption",
    "mechanism": "Asam oksalat bebas dalam tangkai dan daun rhubarb berikatan kuat dengan ion kalsium (Ca²⁺) membentuk garam kalsium oksalat yang tidak larut dalam lumen usus.",
    "clinicalOutcome": "Asam oksalat dalam rhubarb membentuk senyawa kelat presipitat kalsium oksalat yang sulit larut di saluran cerna, menurunkan laju absorpsi dan bioavailabilitas kalsium oral secara signifikan.",
    "recommendation": "Beri jeda waktu konsumsi suplemen kalsium minimal 2 jam SEBELUM atau 2 jam SETELAH mengonsumsi makanan/minuman olahan rhubarb atau tumbuhan tinggi asam oksalat.",
    "references": "1. Stockley's Drug Interactions: Calcium and Dietary Oxalates\n2. Cerner Multum, Inc. 'UK Summary of Product Characteristics.'\n3. Canadian Pharmacists Association 'e-CPS'",
    "ddinterId": "DDInter-DFI-RHU01"
  },
  {
    "id": "dfi-calcium-bran",
    "drugName": "Calcium lactate / Kalsium",
    "foodName": "Bekatul & Serat Gandum Kasar",
    "foodCategory": "Susu / Kalsium",
    "severity": "Moderate",
    "mechanismCategory": "Absorption",
    "mechanism": "Asam fitat (inositol heksafosfat) pada kulit ari bekatul dan serat gandum membentuk ikatan khelat stabil dengan ion kalsium, diperparah oleh percepatan waktu transit usus oleh serat kasar.",
    "clinicalOutcome": "Penyerapan kalsium di usus halus terhambat drastis akibat pembentukan kompleks kalsium fitat tak larut, berisiko menurunkan efektivitas suplementasi kalsium tulang.",
    "recommendation": "Beri jeda waktu konsumsi kalsium minimal 2 jam dari konsumsi sereal bekatul, roti gandum utuh, atau makanan tinggi asam fitat lainnya.",
    "references": "1. Davies NT. 'Anti-nutrient factors affecting mineral utilization.' Proc Nutr Soc (1979)\n2. Stockley's Drug Interactions: Calcium and Dietary Phytates\n3. US FDA Product Information",
    "ddinterId": "DDInter-DFI-BRN01"
  },
  {
    "id": "dfi-warfarin-vitamin-k",
    "drugName": "Warfarin",
    "foodName": "Sayuran Hijau Kaya Vitamin K (Bayam, Kale, Brokoli)",
    "foodCategory": "Makanan Tinggi Vitamin K",
    "severity": "Major",
    "mechanismCategory": "Antagonism",
    "mechanism": "Vitamin K merangsang sintesis faktor pembekuan darah, berlawanan dengan kerja warfarin.",
    "clinicalOutcome": "Fluktuasi nilai INR dan penurunan efektivitas antikoagulan.",
    "recommendation": "Jaga asupan sayuran hijau tetap konsisten setiap hari, jangan melakukan perubahan pola makan drastis.",
    "references": "1. CHEST Antithrombotic Therapy and Prevention of Thrombosis 9th/10th Ed.\n2. Stockley's Drug Interactions: Vitamin K and Coumarin Anticoagulants\n3. US FDA Coumadin (Warfarin Sodium) Prescribing Information\n4. Booth SL, et al. 'Effect of dietary vitamin K on stability of anticoagulation.' J Am Diet Assoc (2003)",
    "ddinterId": "DDInter-DFI-VK01"
  },
  {
    "id": "dfi-ciprofloxacin-susu",
    "drugName": "Ciprofloxacin",
    "foodName": "Susu / Produk Olahan Susu Kaya Kalsium",
    "foodCategory": "Susu / Kalsium",
    "severity": "Moderate",
    "mechanismCategory": "Absorption",
    "mechanism": "Kation Kalsium (Ca2+) membentuk kelat kompleks yang tidak dapat larut dengan ciprofloxacin.",
    "clinicalOutcome": "Penurunan bioavailabilitas antibiotik hingga 40-60%, menyebabkan kegagalan terapi infeksi.",
    "recommendation": "Berikan jeda minimal 2 jam SEBELUM atau 4 jam SETELAH minum susu/kalsium.",
    "references": "1. US FDA Cipro (Ciprofloxacin HCl) Package Insert - Food & Mineral Chelation\n2. Stockley's Drug Interactions: Quinolones with Dairy Products & Polyvalent Cations\n3. USP Drug-Nutrient Compendium\n4. Neuvonen PJ. 'Interactions with the absorption of quinolones.' Drugs 42 (1991): 4-8",
    "ddinterId": "DDInter-DFI-CA01"
  },
  {
    "id": "dfi-doxycycline-susu",
    "drugName": "Doxycycline",
    "foodName": "Susu, Yoghurt & Suplemen Kalsium/Besi/Magnesium",
    "foodCategory": "Susu / Kalsium",
    "severity": "Major",
    "mechanismCategory": "Absorption",
    "mechanism": "Kation polivalen membentuk kelat khelasi tak larut dengan cincin tetrasiklin.",
    "clinicalOutcome": "Penyerapan doksisiklin anjlok > 80%, memicu kegagalan eradikasi infeksi bakteri.",
    "recommendation": "Minum Doxycycline dengan segelas penuh air putih minimal 2 jam sebelum atau 4 jam setelah produk susu atau suplemen mineral.",
    "references": "1. US FDA Vibramycin (Doxycycline) Prescribing Information (Metal Ion Chelation)\n2. Stockley's Drug Interactions: Tetracyclines with Dairy Products\n3. British National Formulary (BNF 86): Tetracyclines Food Interactions\n4. Leyden JJ. 'Absorption of minocycline and doxycycline with food and dairy products.' Cutis (1985)",
    "ddinterId": "DDInter-DFI-CA02"
  },
  {
    "id": "dfi-metronidazole-alkohol",
    "drugName": "Metronidazole",
    "foodName": "Minuman Beralkohol",
    "foodCategory": "Alkohol",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Metronidazole menghambat enzim Aldehida Dehidrogenase (ALDH).",
    "clinicalOutcome": "Penumpukan asetaldehida memicu Reaksi Disulfiram (muntah hebat, pusing, kemerahan wajah, palpitasi).",
    "recommendation": "Hindari alkohol secara mutlak saat minum obat dan hingga 48 jam pasca dosis terakhir.",
    "references": "1. US FDA Flagyl (Metronidazole) Prescribing Information - Disulfiram-like Reaction\n2. Stockley's Drug Interactions: Metronidazole with Alcohol\n3. WHO Adverse Drug Reactions Advisory Committee (Acetaldehyde Toxicity)\n4. Karamanakos PN, et al. 'The disulfiram-like effect of metronidazole.' Basic Clin Pharmacol Toxicol (2007)",
    "ddinterId": "DDInter-DFI-ALC03"
  },
  {
    "id": "dfi-isoniazid-tyramine-histamine",
    "drugName": "Isoniazid",
    "foodName": "Makanan Tinggi Tiramin (Keju Tua, Ikan Asin, Ragi) & Histamin (Ikan Tuna/Tongkol)",
    "foodCategory": "Lainnya",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Isoniazid menghambat enzim monoamine oxidase (MAO) dan diamine oxidase (histaminase) intestinal.",
    "clinicalOutcome": "Krisis Hipertensi akut, sakit kepala berdenyut hebat, takikardia palpitasi, kemerahan wajah (flushing), dan diaphoresis.",
    "recommendation": "HINDARI keju matang terfermentasi dan ikan scombroid (tuna, tongkol, cakalang) yang tidak segar selama dalam pengobatan OAT Isoniazid.",
    "references": "1. American Thoracic Society (ATS) / CDC Tuberculosis Treatment Guidelines\n2. Stockley's Drug Interactions: Monoamine Oxidase Inhibiting Actions of Isoniazid\n3. Smith CK, Durack DT. 'Isoniazid and reaction to cheese.' Ann Intern Med (1978)\n4. US FDA Laniazid (Isoniazid) Labeling",
    "ddinterId": "DDInter-DFI-TYR01"
  },
  {
    "id": "dfi-methotrexate-kafein",
    "drugName": "Methotrexate",
    "foodName": "Kopi Pekat & Minuman Berkafein Tinggi",
    "foodCategory": "Kafein / Kopi",
    "severity": "Moderate",
    "mechanismCategory": "Antagonism",
    "mechanism": "Kafein adalah antagonis reseptor adenosin yang menentang efek antiinflamasi methotrexate pada artritis reumatoid.",
    "clinicalOutcome": "Penurunan efektivitas antiinflamasi dan peredaan nyeri pada pasien penyakit autoimun.",
    "recommendation": "Batasi asupan kopi dan minuman berkafein tinggi terutama pada hari konsumsi dosis mingguan Methotrexate.",
    "references": "1. Nesher G, et al. 'Effect of caffeine consumption on efficacy of methotrexate in rheumatoid arthritis.' Arthritis Rheum (2003)\n2. Stockley's Drug Interactions: Methotrexate and Xanthines\n3. EULAR Recommendations for Rheumatoid Arthritis Management",
    "ddinterId": "DDInter-DFI-MTX01"
  },
  {
    "id": "dfi-griseofulvin-lemak",
    "drugName": "Griseofulvin",
    "foodName": "Makanan Tinggi Lemak (Susu, Keju, Gorengan)",
    "foodCategory": "Makanan Tinggi Lemak",
    "severity": "Moderate",
    "mechanismCategory": "Absorption",
    "mechanism": "Lipid makanan merangsang sekresi asam empedu yang meningkatkan solubilisasi misel griseofulvin lipofilik.",
    "clinicalOutcome": "Peningkatan bioavailabilitas penyerapan oral hingga 2 kali lipat (efek positif penunjang terapi).",
    "recommendation": "HARUS diminum bersama makanan tinggi lemak (seperti susu penuh atau makanan berlemak) untuk penyerapan optimal.",
    "references": "1. Stockley's Drug Interactions: Griseofulvin Absorption and Fatty Meals\n2. US FDA Grifulvin V Prescribing Information\n3. Cerner Multum, Inc. 'Australian Product Information'",
    "ddinterId": "DDInter-DFI-FAT01"
  },
  {
    "id": "dfi-spironolactone-salt-substitute",
    "drugName": "Spironolactone",
    "foodName": "Pengganti Garam Rendah Natrium (Salt Substitute Tinggi Kalium K+)",
    "foodCategory": "Suplemen / Mineral",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Efek hemat kalium dari spironolakton diperparah oleh asupan garam kalium klorida eksogen.",
    "clinicalOutcome": "Hiperkalemia berat (> 6.5 mEq/L) yang memicu henti jantung mendadak.",
    "recommendation": "HINDARI penggunaan pengganti garam diet berbasis kalium selama terapi hemat-kalium.",
    "references": "1. US FDA Aldactone (Spironolactone) Prescribing Information - Hyperkalemia Warnings\n2. American College of Cardiology / AHA Heart Failure Guidelines (Potassium Sparing Diuretics)\n3. Stockley's Drug Interactions: Potassium Supplements and Aldosterone Antagonists",
    "ddinterId": "DDInter-DFI-POT01"
  },
  {
    "id": "dfi-sildenafil-lemak",
    "drugName": "Sildenafil",
    "foodName": "Makanan Berat Tinggi Lemak",
    "foodCategory": "Makanan Tinggi Lemak",
    "severity": "Moderate",
    "mechanismCategory": "Absorption",
    "mechanism": "Makanan berlemak memperlambat pengosongan lambung dan menunda waktu mencapai kadar puncak (Tmax) lebih dari 60 menit serta menurunkan Cmax sebesar 29%.",
    "clinicalOutcome": "Onset kerja obat terlambat dan efikasi erektil menurun secara signifikan.",
    "recommendation": "Minum sildenafil saat perut kosong atau bersama makanan ringan minimal 1 jam sebelum aktivitas.",
    "references": "1. US FDA Viagra (Sildenafil Citrate) Prescribing Information - Food Effects\n2. Nichols DJ, et al. 'Pharmacokinetics of sildenafil citrate after single oral doses.' Br J Clin Pharmacol (2002)\n3. Stockley's Drug Interactions: Phosphodiesterase Type 5 Inhibitors",
    "ddinterId": "DDInter-DFI-SIL01"
  },
  {
    "id": "dfi-metformin-alkohol",
    "drugName": "Metformin",
    "foodName": "Konsumsi Alkohol Akut / Berlebih",
    "foodCategory": "Alkohol",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Metabolisme etanol menghabiskan cadangan NAD+ hepar, menghambat glukoneogenesis laktat bersamaan dengan aksi metformin.",
    "clinicalOutcome": "Peningkatan drastis risiko Asidosis Laktat (MALA) dengan angka mortalitas tinggi (> 30%).",
    "recommendation": "HINDARI konsumsi alkohol berlebih saat dalam terapi rutin Metformin.",
    "references": "1. US FDA Glucophage (Metformin HCl) Prescribing Information - Lactic Acidosis Warnings\n2. American Diabetes Association (ADA) Standards of Care in Diabetes\n3. Stockley's Drug Interactions: Biguanides and Alcohol Metabolism",
    "ddinterId": "DDInter-DFI-ALC04"
  },
  {
    "id": "dfi-levothyroxine-kopi",
    "drugName": "Levothyroxine",
    "foodName": "Kopi / Kafein Pagi",
    "foodCategory": "Kafein / Kopi",
    "severity": "Moderate",
    "mechanismCategory": "Absorption",
    "mechanism": "Kopi mengurangi penyerapan levothyroxine di usus halus.",
    "clinicalOutcome": "Kadar hormon tiroid darah tidak tercapai dan gejala hipotiroid tetap bertahan.",
    "recommendation": "Minum levothyroxine hanya dengan air putih. Tunda minum kopi minimal 60 menit.",
    "references": "1. Benvenga S, et al. 'Altered intestinal absorption of L-thyroxine caused by coffee.' Thyroid 18 (2008): 455-460\n2. Stockley's Drug Interactions: Thyroid Hormones and Beverages\n3. American Thyroid Association (ATA) Guidelines for Hypothyroidism Management\n4. US FDA Synthroid (Levothyroxine Sodium) Prescribing Information",
    "ddinterId": "DDInter-DFI-CAF01"
  },
  {
    "id": "dfi-ferrous-teh",
    "drugName": "Ferrous Sulfate",
    "foodName": "Teh Pekat & Kopi (Tannin & Polifenol)",
    "foodCategory": "Kafein / Kopi",
    "severity": "Moderate",
    "mechanismCategory": "Absorption",
    "mechanism": "Tannin berikatan dengan besi kation membentuk ikatan tidak larut.",
    "clinicalOutcome": "Penurunan penyerapan zat besi hingga 70%.",
    "recommendation": "Tunda minum teh/kopi minimal 2 jam dari konsumsi suplemen besi.",
    "references": "1. Hallberg L, Rossander L. 'Effect of different drinks on the absorption of non-heme iron from composite meals.' Hum Nutr Appl Nutr 36 (1982): 116-23\n2. Stockley's Drug Interactions: Iron Preparations and Tannins\n3. WHO Guidelines for Iron Supplementation",
    "ddinterId": "DDInter-DFI-FE01"
  },
  {
    "id": "dfi-colchicine-grapefruit",
    "drugName": "Colchicine",
    "foodName": "Jus Grapefruit (Jeruk Bali)",
    "foodCategory": "Buah / Juice",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Furanokumarin menghambat usus CYP3A4 dan P-glycoprotein.",
    "clinicalOutcome": "Peningkatan drastis kadar colchicine darah memicu toksisitas mematikan (rhabdomyolysis & miopatotoksisitas).",
    "recommendation": "HINDARI mutlak minum jus grapefruit selama terapi colchicine.",
    "references": "1. US FDA Colcrys (Colchicine) Prescribing Information - CYP3A4 & P-gp Ingestion Warnings\n2. Stockley's Drug Interactions: Colchicine with Fruit Juices\n3. Terkeltaub RA, et al. 'High versus low dosing of oral colchicine for early acute gout.' Arthritis Rheum (2010)",
    "ddinterId": "DDInter-DFI-COL01"
  },
  {
    "id": "dfi-tacrolimus-grapefruit",
    "drugName": "Tacrolimus",
    "foodName": "Jus Grapefruit / Jeruk Bali",
    "foodCategory": "Buah / Juice",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Penghambatan irreversible CYP3A4 presistemik usus halus.",
    "clinicalOutcome": "Kadar darah tacrolimus melonjak 3x lipat memicu nefrotoksisitas akut.",
    "recommendation": "Hindari konsumsi grapefruit atau produk olahannya saat terapi pasca-transplantasi.",
    "references": "1. US FDA Prograf (Tacrolimus) Prescribing Information - CYP3A4 Fruit Warnings\n2. Stockley's Drug Interactions: Calcineurin Inhibitors and Citrus Juices\n3. European Society for Organ Transplantation (ESOT) Consensus Guidelines",
    "ddinterId": "DDInter-DFI-TAC01"
  },
  {
    "id": "dfi-captopril-pisang",
    "drugName": "Captopril",
    "foodName": "Pisang & Makanan Tinggi Kalium",
    "foodCategory": "Suplemen / Mineral",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Captopril menekan sekresi aldosteron sehingga ginjal meretensi kalium.",
    "clinicalOutcome": "Peningkatan kalium darah (Hiperkalemia) yang memicu palpitasi & aritmia kardiak.",
    "recommendation": "Batasi konsumsi berlebihan makanan sangat tinggi kalium seperti pisang dalam jumlah besar sekaligus.",
    "references": "1. US FDA Capoten (Captopril) Labeling - Hyperkalemia and Dietary Potassium\n2. American College of Cardiology Guidelines on ACE Inhibitor Safety\n3. Stockley's Drug Interactions: ACE Inhibitors and Potassium-Rich Foods",
    "ddinterId": "DDInter-DFI-CAP01"
  },
  {
    "id": "dfi-paracetamol-alkohol",
    "drugName": "Paracetamol",
    "foodName": "Minuman Beralkohol Kronis",
    "foodCategory": "Alkohol",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Alkohol menginduksi enzim CYP2E1 hati yang mengonversi parasetamol menjadi NAPQI reaktif toksik.",
    "clinicalOutcome": "Peningkatan risiko Hepatotoksisitas & Kerusakan Hati Akut.",
    "recommendation": "Hindari konsumsi alkohol saat menggunakan obat parasetamol dosis terapi maupun tinggi.",
    "references": "1. US FDA Acetaminophen Toxicity Warnings & Boxed Warnings\n2. Rumack BH. 'Acetaminophen hepatotoxicity: the first 35 years.' J Toxicol Clin Toxicol (2002)\n3. Stockley's Drug Interactions: Paracetamol and Ethanol",
    "ddinterId": "DDInter-DFI-PCM01"
  },
  {
    "id": "dfi-alprazolam-alkohol",
    "drugName": "Alprazolam",
    "foodName": "Minuman Beralkohol",
    "foodCategory": "Alkohol",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Sinergisme potensiasi penekanan reseptor GABAA dan pusat respirasi di batang otak.",
    "clinicalOutcome": "Sedasi mendalam, kehilangan kesadaran, depresi pernapasan berat, koma, dan kematian mendadak.",
    "recommendation": "KONTRAINDIKASI MUTLAK mengonsumsi alkohol bersamaan dengan obat golongan benzodiazepine.",
    "references": "1. US FDA Xanax (Alprazolam) Black Box Warning: Concomitant Use with CNS Depressants/Alcohol\n2. Stockley's Drug Interactions: Benzodiazepines and Alcohol\n3. WHO Guidelines on Psychoactive Substance Safety",
    "ddinterId": "DDInter-DFI-ALZ01"
  },
  {
    "id": "dfi-atorvastatin-grapefruit",
    "drugName": "Atorvastatin",
    "foodName": "Jus Grapefruit (Jeruk Bali)",
    "foodCategory": "Buah / Juice",
    "severity": "Major",
    "mechanismCategory": "Metabolism",
    "mechanism": "Senyawa furanokumarin dalam grapefruit menghambat enzim CYP3A4 di dinding enterosit usus halus.",
    "clinicalOutcome": "Peningkatan konsentrasi serum atorvastatin hingga 2.5 kali lipat, memicu risiko miopati berat dan rhabdomyolysis.",
    "recommendation": "Hindari konsumsi jus grapefruit dalam jumlah banyak (> 200 mL/hari) selama dalam pengobatan Atorvastatin.",
    "references": "1. US FDA Lipitor (Atorvastatin Calcium) Package Insert - CYP3A4 Interaction Warnings\n2. Stockley's Drug Interactions: Atorvastatin and Grapefruit Juice\n3. Reddy P, et al. 'Grapefruit juice-atorvastatin interaction: what is the clinical significance?' Ann Pharmacother (2011)",
    "ddinterId": "DDInter-DFI-ATV01"
  },
  {
    "id": "dfi-levodopa-protein",
    "drugName": "Levodopa",
    "foodName": "Makanan Sangat Tinggi Protein (Daging Merah, Telur, Keju)",
    "foodCategory": "Lainnya",
    "severity": "Moderate",
    "mechanismCategory": "Absorption",
    "mechanism": "Asam amino netral rantai cabang (LNAA) dari pencernaan protein berkompetisi secara langsung dengan levodopa pada transporter asam amino di dinding usus halus dan sawar darah otak (BBB).",
    "clinicalOutcome": "Penurunan penyerapan levodopa ke otak yang memicu fluktuasi motorik akut dan fenomena 'on-off' mendadak pada pasien Parkinson.",
    "recommendation": "Konsumsi Levodopa minimal 30-60 menit SEBELUM makan makanan berprotein tinggi, atau redistribusikan asupan protein utama ke malam hari.",
    "references": "1. Nutt JG, et al. 'The effect of dietary protein on the pharmacokinetics and pharmacodynamics of L-dopa in Parkinson's disease.' N Engl J Med (1984)\n2. Stockley's Drug Interactions: Levodopa and Dietary Protein\n3. International Parkinson and Movement Disorder Society (MDS) Evidence-Based Guidelines",
    "ddinterId": "DDInter-DFI-LVD01"
  },
  {
    "id": "dfi-ciprofloxacin-kopi",
    "drugName": "Ciprofloxacin",
    "foodName": "Kopi, Teh & Minuman Berenergi Berkafein Tinggi",
    "foodCategory": "Kafein / Kopi",
    "severity": "Moderate",
    "mechanismCategory": "Metabolism",
    "mechanism": "Ciprofloxacin menghambat poten enzim CYP1A2 hepar yang bertanggung jawab atas 95% metabolisme dan pembersihan kafein dari tubuh.",
    "clinicalOutcome": "Klirens kafein turun 60-80%, memicu Toksisitas Kafein Akut (palpitasi jantung, takikardia, tremor tangan, insomnia berat, dan kecemasan panik).",
    "recommendation": "Batasi atau hindari konsumsi kopi pekat dan minuman berenergi selama masa pengobatan antibiotik siprofloksasin.",
    "references": "1. Harder S, et al. 'Inhibition of caffeine clearance by ciprofloxacin.' Clin Pharmacol Ther (1988)\n2. Stockley's Drug Interactions: Fluoroquinolones and Xanthines\n3. US FDA Cipro Prescribing Information - Drug Interactions",
    "ddinterId": "DDInter-DFI-CIP02"
  },
  {
    "id": "dfi-digoxin-senna",
    "drugName": "Digoxin",
    "foodName": "Teh Herbal Pencahar Daun Senna / Cascara",
    "foodCategory": "Suplemen / Mineral",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Pencahar stimulan antrakuinon berlebihan menyebabkan ekskresi kalium masif melalui feses yang memicu Hipokalemia.",
    "clinicalOutcome": "Hipokalemia meningkatkan afinitas pengikatan Digoxin pada Na+/K+ ATPase miokardium, memicu Aritmia Ventrikel Fatal dan intoksikasi digitalis.",
    "recommendation": "HINDARI teh pencahar stimulan herbal saat mengonsumsi Digoxin. Gunakan pencahar osmotik (Laktulosa/PEG) dan pantau kadar kalium darah.",
    "references": "1. Stockley's Herbal Medicines and Dietary Interactions: Senna, Cascara and Cardiac Glycosides\n2. US FDA Lanoxin (Digoxin) Labeling: Electrolyte Balance and Digitalis Toxicity\n3. European Medicines Agency (EMA) Assessment Report on Senna alexandrina Mill.",
    "ddinterId": "DDInter-DFI-DIG01"
  },
  {
    "id": "dfi-levothyroxine-coffee",
    "drugName": "Levothyroxine",
    "foodName": "Kopi Hitam / Kopi Susu (Espresso, Latte)",
    "foodCategory": "Kafein / Kopi",
    "severity": "Major",
    "mechanismCategory": "Absorption",
    "mechanism": "Senyawa tanin, asam klorogenat, dan kafein dalam kopi mengadsorpsi molekul tiroksin di saluran cerna dan meningkatkan motilitas usus, memangkas bioavailabilitas levotiroksin hingga 35-50%.",
    "clinicalOutcome": "Kegagalan kontrol hipotiroidisme, fluktuasi peningkatan hormon TSH serum, kelelahan kronis, dan kenaikan berat badan meski patuh minum obat.",
    "recommendation": "WAJIB diminum saat perut kosong dengan segelas penuh air putih minimal 60 MENIT SEBELUM sarapan pagi atau minum kopi.",
    "references": "1. Benvenga S, et al. 'Altered intestinal absorption of L-thyroxine caused by coffee.' Thyroid 18 (2008): 455-460\n2. Stockley's Drug Interactions: Thyroid Hormones and Beverages\n3. American Thyroid Association (ATA) Guidelines for Hypothyroidism Management",
    "ddinterId": "DDInter-DFI-CAF02"
  },
  {
    "id": "dfi-alendronate-breakfast",
    "drugName": "Alendronate / Risedronate",
    "foodName": "Makanan Sarapan, Susu, Kalsium & Jus Buah",
    "foodCategory": "Susu / Kalsium",
    "severity": "Major",
    "mechanismCategory": "Absorption",
    "mechanism": "Makanan atau minuman selain air putih murni menurunkan bioavailabilitas oral bifosfonat hingga <0.5% (hampir nol).",
    "clinicalOutcome": "Kegagalan total pencegahan fraktur tulang dan osteoporosis.",
    "recommendation": "Minum segera saat bangun tidur pagi dengan 200 mL air putih murni, tetap dalam posisi tegak (duduk/berdiri) minimal 30 menit, dan JANGAN makan/minum apa pun selama 30 menit.",
    "references": "1. US FDA Fosamax (Alendronate Sodium) Prescribing Information - Bioavailability and Food Effects\n2. Stockley's Drug Interactions: Bisphosphonates with Food and Minerals\n3. National Osteoporosis Guideline Group (NOGG) Clinical Compendium",
    "ddinterId": "DDInter-DFI-ALN01"
  },
  {
    "id": "dfi-spironolactone-potassium-salts",
    "drugName": "Spironolactone / ACE Inhibitor / ARB",
    "foodName": "Garam Pengganti Rendah Natrium Kaya Kalium (Potassium Salt Substitutes / KCl Diet Salt)",
    "foodCategory": "Suplemen / Mineral",
    "severity": "Major",
    "mechanismCategory": "Synergy",
    "mechanism": "Kombinasi asupan ion kalium eksogen tinggi dari garam diet dengan penahanan ekskresi kalium ginjal oleh spironolakton/ACEi.",
    "clinicalOutcome": "HIPERKALEMIA MEMATIKAN (>6.5 - 7.0 mEq/L) dengan henti jantung mendadak.",
    "recommendation": "KONTRAINDIKASI MUTLAK. Edukasi pasien hipertensi/gagal jantung pengguna ACEi/ARB/Spironolactone untuk TIDAK menggunakan garam diet pengganti berbasis kalium klorida.",
    "references": "1. US FDA Aldactone & ACEi/ARB Boxed Warning on Hyperkalemia\n2. American Heart Association (AHA) Clinical Advisory on Potassium Salt Substitutes\n3. Stockley's Drug Interactions: Potassium Supplements and Renin-Angiotensin System Inhibitors",
    "ddinterId": "DDInter-DFI-POT02"
  }
];

function deduplicateFoodInteractions(list: DrugFoodInteraction[]): DrugFoodInteraction[] {
  const map = new Map<string, DrugFoodInteraction>();
  const SEVERITY_WEIGHT: Record<string, number> = { Major: 3, Moderate: 2, Minor: 1 };

  list.forEach((item) => {
    const { canonicalKey, canonicalName } = normalizeFoodEntity(item.foodName);
    const drugKey = (item.drugName || '').toLowerCase().trim();
    const compositeKey = `${drugKey}__${canonicalKey}`;

    const existing = map.get(compositeKey);
    const itemWeight = SEVERITY_WEIGHT[item.severity] || 1;

    if (!existing) {
      map.set(compositeKey, {
        ...item,
        foodName: canonicalName
      });
    } else {
      const existingWeight = SEVERITY_WEIGHT[existing.severity] || 1;
      const isItemCuratedBase = item.id.startsWith('dfi-');
      const isExistingCuratedBase = existing.id.startsWith('dfi-');

      // 1. Curated BASE_FOOD_INTERACTIONS always takes highest precedence
      if (isItemCuratedBase && !isExistingCuratedBase) {
        map.set(compositeKey, {
          ...item,
          references: item.references || existing.references,
          ddinterId: item.ddinterId || existing.ddinterId,
          mechanismCategory: item.mechanismCategory || existing.mechanismCategory,
          foodName: canonicalName
        });
      } else if (!isItemCuratedBase && isExistingCuratedBase) {
        // Keep existing curated base record, backfill references if missing
        if (!existing.references && item.references) existing.references = item.references;
        if (!existing.ddinterId && item.ddinterId) existing.ddinterId = item.ddinterId;
      } else if (itemWeight > existingWeight) {
        map.set(compositeKey, {
          ...item,
          references: item.references || existing.references,
          ddinterId: item.ddinterId || existing.ddinterId,
          mechanismCategory: item.mechanismCategory || existing.mechanismCategory,
          foodName: canonicalName
        });
      } else if (itemWeight === existingWeight) {
        const existingLen = (existing.mechanism?.length || 0) + (existing.recommendation?.length || 0);
        const itemLen = (item.mechanism?.length || 0) + (item.recommendation?.length || 0);
        if (itemLen > existingLen) {
          map.set(compositeKey, {
            ...item,
            references: item.references || existing.references,
            ddinterId: item.ddinterId || existing.ddinterId,
            mechanismCategory: item.mechanismCategory || existing.mechanismCategory,
            foodName: canonicalName
          });
        } else {
          if (!existing.references && item.references) {
            existing.references = item.references;
          }
          if (!existing.ddinterId && item.ddinterId) {
            existing.ddinterId = item.ddinterId;
          }
          if (!existing.mechanismCategory && item.mechanismCategory) {
            existing.mechanismCategory = item.mechanismCategory;
          }
        }
      } else {
        if (!existing.references && item.references) {
          existing.references = item.references;
        }
        if (!existing.ddinterId && item.ddinterId) {
          existing.ddinterId = item.ddinterId;
        }
        if (!existing.mechanismCategory && item.mechanismCategory) {
          existing.mechanismCategory = item.mechanismCategory;
        }
      }
    }
  });

  return Array.from(map.values());
}

export const SAMPLE_FOOD_INTERACTIONS: DrugFoodInteraction[] = deduplicateFoodInteractions([
  ...BASE_FOOD_INTERACTIONS,
  ...DRUGSCOM_ADDITIONAL_FOOD_INTERACTIONS
]);

const BASE_THERAPEUTIC_DUPLICATIONS: TherapeuticDuplication[] = [
  {
    "id": "dup-nsaid-double",
    "drugAName": "Ibuprofen",
    "drugBName": "Aspirin (Dosis Tinggi) / Mefenamic Acid / Ketorolac / Ketoprofen / Diclofenac",
    "therapeuticClass": "NSAID / Antiinflamasi Non-Steroid",
    "riskDescription": "Penggunaan dua obat golongan NSAID secara bersamaan tidak meningkatkan efek analgesik, namun melipatgandakan risiko toksisitas lambung, perdarahan saluran cerna, dan gagal ginjal akut.",
    "recommendation": "Hentikan salah satu NSAID. Gunakan kombinasi NSAID + Parasetamol jika membutuhkan efek pereda nyeri tambahan."
  },
  {
    "id": "dup-statin-double",
    "drugAName": "Simvastatin",
    "drugBName": "Atorvastatin / Rosuvastatin / Pitavastatin / Pravastatin",
    "therapeuticClass": "Inhibitor HMG-CoA Reduktase (Statin)",
    "riskDescription": "Duplikasi ganda golongan statin tanpa indikasi spesifik memicu risiko tinggi miopati, peningkatan enzim transaminase hati, dan rabdomiolisis.",
    "recommendation": "Gunakan hanya satu jenis statin pada dosis terapi yang tepat dan terukur."
  },
  {
    "id": "dup-ppi-double",
    "drugAName": "Omeprazole",
    "drugBName": "Lansoprazole / Pantoprazole / Esomeprazole / Dexlansoprazole",
    "therapeuticClass": "Proton Pump Inhibitor (PPI)",
    "riskDescription": "Dua obat penekan asam lambung golongan PPI bekerja pada target reseptor H+/K+ ATPase yang sama tanpa manfaat aditif.",
    "recommendation": "Gunakan satu jenis PPI dengan dosis harian yang terukur 30-60 menit sebelum sarapan pagi."
  },
  {
    "id": "dup-benzo-double",
    "drugAName": "Diazepam",
    "drugBName": "Alprazolam / Clobazam / Clonazepam / Lorazepam / Midazolam",
    "therapeuticClass": "Benzodiazepine Ansiolitik / Sedatif",
    "riskDescription": "Kombinasi dua obat golongan benzodiazepine melipatgandakan risiko adiksi ketergantungan, ataksia jatuh pada lansia, dan depresi sistem saraf pusat.",
    "recommendation": "Gunakan satu jenis benzodiazepine sesuai indikasi spesifik (misal: Clobazam untuk kejang, Alprazolam untuk panik)."
  },
  {
    "id": "dup-sglt2-double",
    "drugAName": "Empagliflozin",
    "drugBName": "Dapagliflozin / Canagliflozin",
    "therapeuticClass": "Inhibitor SGLT2 Antidiabetes",
    "riskDescription": "Duplikasi ganda inhibitor SGLT2 tidak memberikan efikasi penurunan HbA1c tambahan namun melipatgandakan risiko deplesi volume cairan, hipotensi ortostatik, dan ketoasidosis diabetik euglikemik (euDKA).",
    "recommendation": "Pilih satu regimen SGLT2 inhibitor dosis tunggal harian."
  },
  {
    "id": "dup-sulfonylurea-double",
    "drugAName": "Glimepiride",
    "drugBName": "Glibenclamide / Gliclazide",
    "therapeuticClass": "Sulfonilurea Sekretagog Insulin",
    "riskDescription": "Peresepan bersamaan dua obat golongan sulfonilurea memicu stimulasi sel beta pankreas berlebih yang menyebabkan Hipoglikemia Berat Berkepanjangan dan kerusakan neurologis.",
    "recommendation": "Hentikan salah satu sulfonilurea. Kombinasikan dengan antidiabetes ber-mekanisme kerja berbeda (misal Metformin atau SGLT2i)."
  },
  {
    "id": "dup-doac-double",
    "drugAName": "Rivaroxaban",
    "drugBName": "Apixaban / Dabigatran / Edoxaban",
    "therapeuticClass": "Antikoagulan Oral Langsung (DOAC)",
    "riskDescription": "Penggunaan bersamaan dua obat antikoagulan DOAC melipatgandakan blokade kaskade koagulasi, memicu pendarahan mayor spontan yang berakibat fatal.",
    "recommendation": "KONTRAINDIKASI MUTLAK. Gunakan tepat satu jenis DOAC yang disesuaikan dengan fungsi ginjal pasien."
  },
  {
    "id": "dup-arb-double",
    "drugAName": "Candesartan",
    "drugBName": "Valsartan / Losartan / Telmisartan / Irbesartan",
    "therapeuticClass": "Angiotensin Receptor Blocker (ARB)",
    "riskDescription": "Blokade ganda reseptor AT1 oleh dua ARB berbeda memicu hipotensi simtomatik, sinkop, penurunan perfusi ginjal, dan hiperkalemia tanpa manfaat kardiovaskular tambahan.",
    "recommendation": "Gunakan monoterapi ARB tunggal dengan titrasi dosis optimal."
  },
  {
    "id": "dup-acei-arb",
    "drugAName": "Captopril / Lisinopril / Ramipril / Enalapril (ACEi)",
    "drugBName": "Candesartan / Valsartan / Telmisartan (ARB)",
    "therapeuticClass": "Dual RAS Blockade (ACEi + ARB)",
    "riskDescription": "Kombinasi ACE Inhibitor dan ARB (Dual RAS Blockade) dilarang secara panduan pedoman klinis (ESC/AHA) karena meningkatkan sinkop, hiperkalemia berat, dan gagal ginjal akut tanpa manfaat penurunan mortalitas.",
    "recommendation": "Hentikan salah satu. Gunakan monoterapi ACEi atau ARB."
  },
  {
    "id": "dup-glp1-double",
    "drugAName": "Semaglutide",
    "drugBName": "Liraglutide / Dulaglutide / Tirzepatide",
    "therapeuticClass": "Agonis Reseptor GLP-1 & GIP (Inkretin)",
    "riskDescription": "Penggunaan dua agen inkretin mimetik melipatgandakan efek samping gastrointestinal parah (muntah hebat, dehidrasi, gastroparesis, dan risiko pankreatitis akut).",
    "recommendation": "Hentikan salah satu agen agonis GLP-1."
  },
  {
    "id": "dup-dpp4-double",
    "drugAName": "Sitagliptin",
    "drugBName": "Vildagliptin / Linagliptin",
    "therapeuticClass": "Inhibitor Dipeptidil Peptidase-4 (DPP-4)",
    "riskDescription": "Saturasi enzim DPP-4 terjadi penuh pada dosis tunggal sehingga penambahan DPP-4 inhibitor kedua tidak memberikan manfaat kontrol glikemik sama sekali.",
    "recommendation": "Gunakan hanya satu jenis inhibitor DPP-4."
  },
  {
    "id": "dup-gout-double",
    "drugAName": "Allopurinol",
    "drugBName": "Febuxostat",
    "therapeuticClass": "Inhibitor Xantin Oksidase Antigout",
    "riskDescription": "Penggunaan bersama dua inhibitor xantin oksidase adalah duplikasi kontradiktif dengan risiko hepatotoksisitas dan penurunan asam urat terlalu drastis yang memicu serangan gout akut.",
    "recommendation": "Gunakan hanya satu jenis inhibitor xantin oksidase."
  },
  {
    "id": "dup-antihistamine-sedative",
    "drugAName": "Diphenhydramine",
    "drugBName": "Dimenhydrinate / Chlorpheniramine (CTM)",
    "therapeuticClass": "Antihistamin H1 Generasi Pertama Sedatif",
    "riskDescription": "Kombinasi dua antihistamin sedatif melipatgandakan efek mengantuk berat, gangguan koordinasi motorik, dan sindrom antikolinergik (retensi urin, takikardia, konfusi pada lansia).",
    "recommendation": "Pilih satu antihistamin sedatif untuk malam hari atau ganti ke antihistamin non-sedatif (Cetirizine / Loratadine)."
  },
  {
    "id": "dup-opioid-double",
    "drugAName": "Morphine",
    "drugBName": "Fentanyl / Pethidine / Sufentanil / Tramadol",
    "therapeuticClass": "Analgesik Opioid Agonis Reseptor Mu",
    "riskDescription": "Kombinasi multipel opioid kuat melipatgandakan penekanan pusat pernapasan di batang otak, risiko apnea, konstipasi obstruktif berat, dan overdosis fatal.",
    "recommendation": "Gunakan satu regimen opioid primer terhitung dengan protokol dosis penyelamat (breakthrough dose) yang terstruktur."
  },
  {
    "id": "dup-steroid-double",
    "drugAName": "Dexamethasone",
    "drugBName": "Methylprednisolone / Prednisone",
    "therapeuticClass": "Kortikosteroid Glukokortikoid Sistemik",
    "riskDescription": "Duplikasi 2 kortikosteroid sistemik melipatgandakan supresi aksis HPA, ulkus lambung, hiperglikemia, dan supresi kekebalan tubuh.",
    "recommendation": "Gunakan satu jenis kortikosteroid sesuai potensi & durasi kerja yang ditargetkan."
  }
];

function deduplicateDuplications(list: TherapeuticDuplication[]): TherapeuticDuplication[] {
  const map = new Map<string, TherapeuticDuplication>();
  list.forEach((item) => {
    const key = [item.drugAName.toLowerCase().trim(), item.drugBName.toLowerCase().trim()].sort().join('__');
    if (!map.has(key)) {
      map.set(key, item);
    }
  });
  return Array.from(map.values());
}

export const SAMPLE_THERAPEUTIC_DUPLICATIONS: TherapeuticDuplication[] = deduplicateDuplications([
  ...BASE_THERAPEUTIC_DUPLICATIONS,
  ...DRUGSCOM_ADDITIONAL_THERAPEUTIC_DUPLICATIONS
]);

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'free',
    name: 'Starter',
    priceFormatted: 'Gratis',
    priceValue: 0,
    period: 'Selamanya (Akses Gratis)',
    description: 'Akses gratis penelusuran monografi obat, panduan cara pakai, dan modul swamedikasi apotek.',
    features: [
      'Pencarian Seluruh Monografi & Brand Obat Indonesia (Full)',
      'Modul Swamedikasi Lengkap & Skrining Keluhan (DOWA BPOM)',
      'Akses Modul Panduan Cara Pakai Obat & Edukasi Pasien',
      'Dukungan Komunitas Farmasi & FAQ'
    ],
    isPopular: false,
    ctaText: 'Mulai Gratis Sekarang',
    permissions: {
      maxDrugsPerCheck: 0,
      canAccessInteractions: false,
      canPrintPdfReport: false,
      canAccessFoodInteractions: false,
      canAccessTherapeuticDuplications: false,
      canSaveCloudHistory: false,
      maxHistoryRecords: 0,
      canAccessClinicBranding: false,
      canExportExcelCsv: false,
      canAccessIvCompatibility: false,
      canAccessToxicology: false,
      canAccessHighAlert: false,
      canAccessPregnancy: false,
      canAccessDrugLab: false,
      canAccessHerbDrug: false,
      canAccessSideEffects: false,
      canAccessBud: false,
      canAccessPediatric: false,
      canAccessRenal: false,
      canAccessRenalCalculator: false,
      canAccessPolypharmacy: false,
      canAccessWhatsappPio: false,
      canAccessGuidelines: false,
      canAccessClinicalGuidelines: false,
      canAccessDrugNotes: false,
      canAccessCompetency: false,
      canAccessSop: false,
      canAccessRegulations: false,
      canAccessLiterature: false,
      canAccessSwamedikasi: true,
      canAccessLatinTerms: false,
      canAccessPpra: false,
      canAccessEducationGenerator: false
    }
  },
  {
    id: 'pro',
    name: 'Pro',
    badge: 'Akses Penuh & Rekomendasi Utama',
    priceFormatted: 'Rp 199.000',
    originalPriceFormatted: 'Rp 999.000',
    discountBadge: 'Hemat 80%',
    priceValue: 199000,
    period: 'per tahun (Hanya Rp 16.500/bln)',
    description: 'Akses penuh ke seluruh modul klinis: IV ICU, BUD racikan, dosis anak, bumil & busui, polifarmasi, PPRA, Generator AI, hingga Pusat Belajar Farmasi.',
    features: [
      'Semua Fitur Paket Starter',
      'Cek Interaksi Polifarmasi Tanpa Batas (>10 Obat Sekaligus)',
      'Kompatibilitas Injeksi IV & ICU (ASHP)',
      'Toksikologi, Overdosis & Antidotum IGD (SiKer BPOM)',
      'Manajemen Obat High-Alert & Label LASA (STARKES SKP 3)',
      'Kalkulator BUD Racikan (USP <795>)',
      'Kalkulator Dosis Anak & Puyer (BB / BSA)',
      'Keamanan Obat Ibu Hamil & Menyusui',
      'Evaluasi Polifarmasi Geriatri (Beers 2023)',
      'Kartu Edukasi Obat (PIO) WhatsApp Pasien',
      'Stewardship Antibiotik (PPRA) & Antibiogram RS',
      'Generator Edukasi Farmasi AI (Prompt Promkes)',
      'Kamus & Penerjemah Singkatan Latin Resep (ISMP)',
      'Hafalan Obat (Jembatan Keledai & Rima Klinis)',
      'Pusat Belajar Farmasi (Bank Soal CBT & OSCE)',
      'Interaksi Obat & Hasil Uji Laboratorium',
      'Interaksi Obat dengan Jamu & Herbal',
      'Analisis Efek Samping Obat & Skor Naranjo',
      'Kalkulator Medis & Dosis Penyesuaian Ginjal',
      'Panduan Terapi Klinis Lengkap (PNPK)',
      'Deteksi Interaksi Makanan & Duplikasi Terapi',
      'Modul SOP Pelayanan Farmasi Klinis'
    ],
    isPopular: true,
    ctaText: 'Ambil Promo Pro Rp 199rb / Tahun',
    permissions: {
      maxDrugsPerCheck: 99,
      canAccessInteractions: true,
      canPrintPdfReport: true,
      canAccessFoodInteractions: true,
      canAccessTherapeuticDuplications: true,
      canSaveCloudHistory: true,
      maxHistoryRecords: 999,
      canAccessClinicBranding: true,
      canExportExcelCsv: true,
      canAccessIvCompatibility: true,
      canAccessToxicology: true,
      canAccessHighAlert: true,
      canAccessPregnancy: true,
      canAccessDrugLab: true,
      canAccessHerbDrug: true,
      canAccessSideEffects: true,
      canAccessBud: true,
      canAccessPediatric: true,
      canAccessRenal: true,
      canAccessRenalCalculator: true,
      canAccessPolypharmacy: true,
      canAccessWhatsappPio: true,
      canAccessGuidelines: true,
      canAccessClinicalGuidelines: true,
      canAccessDrugNotes: true,
      canAccessCompetency: true,
      canAccessSop: true,
      canAccessRegulations: true,
      canAccessLiterature: true,
      canAccessSwamedikasi: true,
      canAccessLatinTerms: true,
      canAccessPpra: true,
      canAccessEducationGenerator: true
    }
  }
];

export interface FeatureComparison {
  featureName: string;
  free: string | boolean;
  pro: string | boolean;
}

export const PRICING_FEATURE_COMPARISON: FeatureComparison[] = [
  { featureName: 'Pencarian Seluruh Monografi & Brand Obat', free: 'Akses Penuh', pro: 'Akses Penuh' },
  { featureName: 'Pemeriksa Interaksi Obat Terpadu (DDInter 2.0)', free: false, pro: 'Akses Penuh (Polifarmasi Bebas)' },
  { featureName: 'Modul Swamedikasi & Skrining Keluhan (DOWA BPOM)', free: true, pro: true },
  { featureName: 'Panduan Cara Pakai Obat & Edukasi Pasien', free: true, pro: true },
  { featureName: 'Kompatibilitas Injeksi IV & ICU (ASHP)', free: false, pro: true },
  { featureName: 'Kalkulator BUD Racikan (USP <795>)', free: false, pro: true },
  { featureName: 'Kalkulator Dosis Anak & Puyer (BB / BSA)', free: false, pro: true },
  { featureName: 'Keamanan Obat Ibu Hamil & Menyusui', free: false, pro: true },
  { featureName: 'Evaluasi Polifarmasi Geriatri (Beers 2023)', free: false, pro: true },
  { featureName: 'Kartu Edukasi Obat (PIO) WhatsApp Pasien', free: false, pro: true },
  { featureName: 'Stewardship Antibiotik (PPRA) & Antibiogram', free: false, pro: true },
  { featureName: 'Generator Edukasi Farmasi AI (Prompt Promkes)', free: false, pro: true },
  { featureName: 'Kamus & Penerjemah Singkatan Latin Resep', free: false, pro: true },
  { featureName: 'Pusat Belajar Farmasi (Bank Soal CBT & OSCE)', free: false, pro: true },
  { featureName: 'Interaksi Obat & Hasil Uji Laboratorium', free: false, pro: true },
  { featureName: 'Interaksi Obat dengan Jamu & Herbal', free: false, pro: true },
  { featureName: 'Analisis Efek Samping Obat & Skor Naranjo', free: false, pro: true },
  { featureName: 'Kalkulator Medis & Dosis Penyesuaian Ginjal', free: false, pro: true },
  { featureName: 'Panduan Terapi Klinis Lengkap (PNPK)', free: false, pro: true },
  { featureName: 'Deteksi Interaksi Makanan & Duplikasi Terapi', free: false, pro: true },
  { featureName: 'Modul SOP Pelayanan Farmasi Klinis', free: false, pro: true }
];

export const PRICING_FAQS = [
  {
    q: 'Berapa tarif langganan Paket Pro dan berapa lama masa aktifnya?',
    a: 'Paket Pro sedang promo spesial dari harga normal Rp 999.000/tahun menjadi hanya Rp 199.000/tahun (hemat 80% atau hanya ~Rp 16.500/bulan). Masa aktif berlaku 1 tahun penuh (365 hari).'
  },
  {
    q: 'Apa perbedaan mendasar antara Paket Starter dan Paket Pro?',
    a: 'Paket Starter 100% gratis untuk pencarian seluruh monografi obat, modul swamedikasi keluhan apotek & DOWA BPOM, dan panduan cara pakai obat. Paket Pro membuka seluruh 21 modul klinis terpadu: cek interaksi obat multi-kombinasi DDInter 2.0 tanpa batas (>10 obat sekaligus), evaluasi polifarmasi, kriteria Beers 2023, kompatibilitas IV ICU ASHP Trissel’s, kalkulator BUD racikan USP <795>, dosis anak, keamanan bumil & busui, kartu PIO WhatsApp, Pusat Belajar Farmasi, interaksi lab semu, jamu/herbal, efek samping Naranjo, kalkulator ginjal & skor medis, panduan terapi PNPK Kemenkes, cetak laporan PDF dengan kop surat klinik, dan arsip riwayat cloud.'
  },
  {
    q: 'Metode pembayaran apa saja yang didukung untuk Paket Pro?',
    a: 'Kami menerima pembayaran melalui QRIS dan Transfer Bank Manual.'
  },
  {
    q: 'Apakah saya bisa langsung aktif setelah membayar?',
    a: 'Ya, setelah pembayaran terkonfirmasi, akun Anda langsung berstatus Pro Aktif dan seluruh fitur lanjutan dapat langsung digunakan seketika.'
  }
];
