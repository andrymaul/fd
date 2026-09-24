import fs from 'fs';
import path from 'path';
import { DDINTER_OFFICIAL_INTERACTIONS } from '../src/data/ddinterOfficialInteractions';
import { DDINTER_CLASS_MONOGRAPHS } from '../src/data/ddinterClassMonographs';

// Curated authentic DDInter 2.0 English monographs for the 61 official pairs
const CLEAN_MONOGRAPHS: Record<string, { text: string; management: string }> = {
  "ddinter-int-atorvastatin-fenofibrate": {
    text: "Coadministration of atorvastatin and fenofibrate or fenofibric acid may increase the risk of severe myopathy and rhabdomyolysis due to pharmacokinetic and pharmacodynamic interactions.",
    management: "Caution is advised if atorvastatin is coadministered with fibrates, particularly fenofibrate. The lowest effective dose of atorvastatin should be used, and patients monitored closely for muscle pain, tenderness, weakness, and dark urine. Creatine kinase and renal function should be evaluated periodically."
  },
  "ddinter-int-pravastatin-clarithromycin": {
    text: "Clarithromycin may significantly increase the plasma concentrations of pravastatin via inhibition of OATP1B1/OATP1B3 hepatic uptake transporters and P-glycoprotein efflux transport.",
    management: "Consider temporarily withholding pravastatin during therapy with clarithromycin, or substitute with an alternative macrolide that does not interact (e.g., azithromycin). If concomitant use is unavoidable, monitor patients for muscle toxicity."
  },
  "ddinter-int-diltiazem-carbamazepine": {
    text: "Coadministration with diltiazem may significantly increase the plasma concentrations of carbamazepine and its active metabolite due to inhibition of CYP450 3A4 metabolism.",
    management: "A 40% to 50% reduction in the carbamazepine dosage may be required when diltiazem is started. Serum carbamazepine concentrations and signs of neurotoxicity (ataxia, dizziness, diplopia, somnolence) should be monitored closely."
  },
  "ddinter-int-verapamil-carbamazepine": {
    text: "Verapamil inhibits the CYP450 3A4-mediated metabolism of carbamazepine, leading to substantially increased plasma concentrations and risk of carbamazepine neurotoxicity.",
    management: "Reduce carbamazepine dosage by 40% to 50% when initiating verapamil. Monitor serum carbamazepine levels closely and observe patient for symptoms of toxicity including dizziness, ataxia, nausea, and blurred vision."
  },
  "ddinter-int-diltiazem-cyclosporine": {
    text: "Diltiazem inhibits the CYP450 3A4 metabolism and P-glycoprotein efflux of cyclosporine, increasing cyclosporine blood concentrations and nephrotoxicity risk.",
    management: "Monitor cyclosporine whole-blood concentrations and renal function closely when diltiazem is initiated, modified, or discontinued. A dosage reduction of cyclosporine by 20% to 50% is commonly required."
  },
  "ddinter-int-amlodipine-itraconazole": {
    text: "Itraconazole is a potent inhibitor of CYP450 3A4 and P-glycoprotein, significantly reducing the clearance and increasing systemic exposure to amlodipine, leading to severe vasodilation and edema.",
    management: "Amlodipine dose reduction by up to 50% may be necessary when coadministered with itraconazole. Monitor blood pressure and observe for peripheral edema, severe hypotension, and reflex tachycardia."
  },
  "ddinter-int-carvedilol-digoxin": {
    text: "Coadministration of carvedilol and digoxin may produce additive prolongation of AV conduction, increasing the risk of severe bradycardia and heart block. Carvedilol also inhibits P-glycoprotein, increasing digoxin plasma concentrations.",
    management: "Monitor heart rate, ECG, and serum digoxin concentrations when carvedilol is initiated or titrated. Adjust digoxin dose as appropriate to avoid toxicity and severe bradyarrhythmias."
  },
  "ddinter-int-carvedilol-amiodarone": {
    text: "Concomitant use of carvedilol and amiodarone can result in profound additive negative chronotropic and inotropic effects, leading to severe bradycardia, sinus arrest, or AV block.",
    management: "Avoid combination or use with extreme caution. Conduct baseline and serial ECG monitoring. Titrate doses slowly and instruct patients to report dizziness, lightheadedness, fatigue, or syncope."
  },
  "ddinter-int-amiodarone-flecainide": {
    text: "Amiodarone inhibits the CYP450 2D6-mediated elimination of flecainide and has additive electrophysiologic cardiac effects, significantly increasing flecainide serum levels and proarrhythmic risk.",
    management: "Reduce flecainide dosage by 50% when adding amiodarone. Frequently monitor plasma flecainide concentrations and ECG intervals (QRS duration and QTc), as fatal ventricular arrhythmias may develop."
  },
  "ddinter-int-amiodarone-diltiazem": {
    text: "Coadministration of amiodarone and diltiazem produces additive depressant effects on cardiac conduction, sinus node automaticity, and myocardial contractility.",
    management: "Avoid combination if possible, especially in patients with preexisting conduction disease or heart failure. If used together, monitor cardiac rhythm and hemodynamic status closely."
  },
  "ddinter-int-digoxin-atorvastatin": {
    text: "Atorvastatin may increase steady-state plasma digoxin concentrations by approximately 20%, likely through mild inhibition of P-glycoprotein-mediated renal or biliary transport.",
    management: "Monitor serum digoxin concentrations and observe patients for signs of digitalis toxicity (nausea, anorexia, visual disturbances, bradycardia) when atorvastatin is initiated or adjusted."
  },
  "ddinter-int-spironolactone-lisinopril": {
    text: "Concomitant use of angiotensin converting enzyme (ACE) inhibitors and potassium-sparing diuretics may increase the risk of hyperkalemia. Inhibition of ACE results in decreased aldosterone secretion, which can lead to increases in serum potassium that may be additive with that induced by potassium-sparing diuretics. ACE inhibitors may also cause deterioration of renal function in patients with chronic heart failure, and the risk is increased if they are sodium-depleted or dehydrated after excessive diuresis.",
    management: "Caution is advised if ACE inhibitors are used with potassium-sparing diuretics, particularly in patients with renal impairment, diabetes, old age, worsening heart failure, and/or a risk for dehydration. Serum potassium and renal function should be checked regularly, and potassium supplementation should generally be avoided unless it is closely monitored. Patients should be given dietary counseling and advised to seek medical attention if they experience signs and symptoms of hyperkalemia such as weakness, listlessness, confusion, tingling of the extremities, and irregular heartbeat."
  },
  "ddinter-int-spironolactone-valsartan": {
    text: "Coadministration of an angiotensin II receptor antagonist (ARB) with a potassium-sparing diuretic can lead to significant additive retention of serum potassium and precipitate severe hyperkalemia.",
    management: "Monitor serum potassium and renal function periodically. Spironolactone doses should be restricted (typically <=25 mg daily) when combined with ARBs in heart failure, and potassium supplements avoided."
  },
  "ddinter-int-metformin-cimetidine": {
    text: "Cimetidine competes with metformin for active renal tubular secretion via organic cation transporters (OCT2/MATE1), increasing metformin plasma concentrations and AUC by 40% to 60%.",
    management: "Consider alternative H2-receptor antagonists (e.g., famotidine) or PPIs that do not inhibit OCT2. If cimetidine is necessary, reduce metformin dosage and monitor patients closely for signs of lactic acidosis."
  },
  "ddinter-int-metformin-furosemide": {
    text: "Furosemide increases metformin plasma peak concentration and AUC without significantly altering metformin renal clearance, while metformin decreases furosemide AUC and peak levels.",
    management: "Monitor glycemic control and renal function when furosemide and metformin are coadministered. Dosage adjustments of metformin may be required if fluid depletion or renal alteration occurs."
  },
  "ddinter-int-gliclazide-fluconazole": {
    text: "Fluconazole is a potent inhibitor of CYP450 2C9, the primary enzyme responsible for the metabolic clearance of sulfonylureas including gliclazide, which can precipitate profound hypoglycemia.",
    management: "Avoid combination or reduce gliclazide dosage by 50% during fluconazole therapy. Instruct patients to monitor blood glucose frequently and educate on recognizing and treating hypoglycemia."
  },
  "ddinter-int-acarbose-digoxin": {
    text: "Acarbose may reduce the bioavailability and serum concentrations of oral digoxin by altering gastrointestinal transit time or gut absorption.",
    management: "Monitor serum digoxin concentrations when acarbose is initiated, adjusted, or discontinued. Digoxin dose adjustment may be necessary to maintain therapeutic cardiac efficacy."
  },
  "ddinter-int-acarbose-metformin": {
    text: "Concurrent administration of acarbose with metformin may decrease metformin bioavailability and systemic exposure, and may produce additive gastrointestinal adverse effects.",
    management: "Monitor glycemic control and observe for gastrointestinal intolerability (diarrhea, abdominal cramps). Adjust dosages as clinically required."
  },
  "ddinter-int-levothyroxine-aluminium-hydroxide": {
    text: "Aluminum hydroxide and other multivalent cation-containing antacids bind levothyroxine in the gastrointestinal tract, significantly decreasing hormone absorption and increasing serum TSH.",
    management: "Administer levothyroxine at least 4 hours before or after aluminum hydroxide antacids. Monitor serum TSH levels if antacid therapy is started or stopped."
  },
  "ddinter-int-levothyroxine-sertraline": {
    text: "Sertraline may decrease the therapeutic efficacy of levothyroxine by altering thyroid hormone binding proteins or hepatic metabolism, requiring increased levothyroxine requirements.",
    management: "Monitor serum TSH levels when sertraline is initiated or titrated in patients receiving levothyroxine, and adjust thyroid hormone replacement dosage accordingly."
  },
  "ddinter-int-levothyroxine-carbamazepine": {
    text: "Carbamazepine induces hepatic microsomal enzymes (CYP450 and UGT), accelerating the metabolic clearance and biliary elimination of levothyroxine.",
    management: "Thyroid function tests (TSH, free T4) should be checked following initiation or cessation of carbamazepine, and levothyroxine dosage increased by 25% to 50% if clinically indicated."
  },
  "ddinter-int-phenytoin-carbamazepine": {
    text: "Phenytoin and carbamazepine mutually induce each other's hepatic microsomal metabolism via CYP450 3A4 and 2C9/2C19, resulting in unpredictable and often decreased serum levels of both drugs.",
    management: "Monitor serum levels of both carbamazepine and phenytoin closely, particularly during dosage changes. Adjust dosages based on therapeutic drug monitoring and clinical seizure control."
  },
  "ddinter-int-phenytoin-diazepam": {
    text: "Coadministration of phenytoin and diazepam may alter the metabolism and protein binding of both agents, with variable reports of elevated or reduced serum phenytoin concentrations.",
    management: "Monitor phenytoin plasma concentrations and observe for clinical signs of phenytoin toxicity (nystagmus, ataxia) or increased seizure frequency during diazepam co-therapy."
  },
  "ddinter-int-valproic-aspirin": {
    text: "Salicylates displace valproate from plasma protein binding sites and inhibit valproic acid beta-oxidation metabolism, substantially increasing free, pharmacologically active valproate levels.",
    management: "Avoid high-dose aspirin in patients receiving valproate. If coadministered, monitor free valproate serum concentrations and observe for valproate-induced hepatotoxicity, hyperammonemia, and sedation."
  },
  "ddinter-int-valproic-phenobarbital": {
    text: "Valproic acid inhibits the hepatic metabolism of phenobarbital, increasing phenobarbital plasma concentrations by 30% to 50% and precipitating severe CNS depression and lethargy.",
    management: "Monitor serum phenobarbital concentrations and reduce phenobarbital dosage by 30% to 50% when valproate is added. Watch for profound sedation, ataxia, and respiratory depression."
  },
  "ddinter-int-carbamazepine-tramadol": {
    text: "Carbamazepine significantly increases the hepatic CYP450 3A4 metabolism of tramadol, markedly reducing tramadol analgesic efficacy and lowering the seizure threshold.",
    management: "Concomitant use is generally not recommended. Carbamazepine reduces tramadol analgesia and both agents lower seizure threshold, increasing seizure risk. Consider alternative analgesics."
  },
  "ddinter-int-levetiracetam-carbamazepine": {
    text: "Carbamazepine may slightly increase the clearance of levetiracetam via enzyme induction, while concomitant use may enhance central nervous system side effects such as fatigue and dizziness.",
    management: "Monitor clinical seizure control and observe patients for increased central nervous system adverse effects (somnolence, coordination difficulties). Dosage adjustment is rarely required."
  },
  "ddinter-int-pregabalin-oxycodone": {
    text: "Concomitant use of opioids like oxycodone with gabapentinoids like pregabalin results in profound synergistic central nervous system and respiratory depression.",
    management: "Limit dosages and durations of both drugs to the minimum required. Monitor patients closely for respiratory depression, sedation, and hypotension. Warn patients against driving or hazardous tasks."
  },
  "ddinter-int-clozapine-fluvoxamine": {
    text: "Fluvoxamine is a potent inhibitor of CYP450 1A2, the primary enzyme metabolizing clozapine, causing a five- to tenfold increase in clozapine serum concentrations and severe toxicity.",
    management: "Avoid combination whenever possible. If coadministration is essential, reduce clozapine dosage by 50% to 75% and monitor clozapine serum levels and ECG closely for seizures, sedation, and myocarditis."
  },
  "ddinter-int-olanzapine-fluvoxamine": {
    text: "Fluvoxamine potent inhibition of CYP450 1A2 and CYP2C19 significantly increases the AUC and peak plasma concentrations of olanzapine by approximately 100%.",
    management: "A lower dosage of olanzapine should be considered when initiating fluvoxamine therapy. Monitor for enhanced olanzapine adverse effects including sedation, orthostatic hypotension, and weight gain."
  },
  "ddinter-int-risperidone-fluoxetine": {
    text: "Fluoxetine is a potent inhibitor of CYP450 2D6 and increases plasma concentrations of the active antipsychotic fraction (risperidone plus 9-hydroxyrisperidone) by 2.5- to 3-fold.",
    management: "Monitor for extrapyramidal symptoms, sedation, and QT prolongation when fluoxetine is co-prescribed. A reduction in risperidone dosage may be necessary."
  },
  "ddinter-int-lithium-ketorolac": {
    text: "Ketorolac inhibits renal prostaglandin synthesis, reducing renal blood flow and lithium clearance, precipitating acute, severe lithium toxicity.",
    management: "Concomitant use of ketorolac and lithium is contraindicated. If NSAID therapy is mandatory, select an alternative, reduce lithium dose by 50%, and perform frequent serum lithium monitoring."
  },
  "ddinter-int-lithium-indomethacin": {
    text: "Indomethacin inhibits renal prostaglandin E2 synthesis, decreasing renal clearance of lithium by 30% to 50% and causing dangerous elevations in serum lithium concentrations.",
    management: "Reduce lithium dosage by 25% to 50% and monitor serum lithium concentrations within 3 to 5 days of starting indomethacin. Instruct patients to report tremors, ataxia, confusion, and polyuria."
  },
  "ddinter-int-paroxetine-tramadol": {
    text: "Paroxetine strongly inhibits CYP450 2D6 (preventing activation of tramadol to its active M1 metabolite) and adds serotonergic activity, increasing the risk of Serotonin Syndrome and seizures.",
    management: "Avoid combination if possible. If coadministered, monitor for symptoms of serotonin syndrome (hyperreflexia, clonus, fever, agitation) and poor analgesia. Consider non-serotonergic analgesics."
  },
  "ddinter-int-venlafaxine-tramadol": {
    text: "Concomitant use of venlafaxine and tramadol creates synergistic serotonergic stimulation at 5-HT receptors and lowers the seizure threshold, predisposing to Serotonin Syndrome and convulsions.",
    management: "Avoid concomitant use. If essential, monitor for signs of serotonin syndrome (mental status changes, autonomic instability, neuromuscular aberrations) and seizures. Discontinue both drugs if symptoms occur."
  },
  "ddinter-int-amitriptyline-cimetidine": {
    text: "Cimetidine inhibits hepatic CYP450 2D6 and 1A2 metabolism of amitriptyline, increasing amitriptyline serum levels and potentiating anticholinergic and cardiotoxic adverse effects.",
    management: "Reduce amitriptyline dosage by 30% to 50% when cimetidine is initiated, or switch to famotidine. Monitor ECG and observe for excessive dry mouth, urinary retention, sedation, and arrhythmias."
  },
  "ddinter-int-diazepam-cimetidine": {
    text: "Cimetidine inhibits the oxidative hepatic microsomal metabolism (CYP450 2C19/3A4) of diazepam, prolonging its half-life and substantially increasing sedation and psychomotor impairment.",
    management: "Reduce diazepam dose or use a glucuronidated benzodiazepine (lorazepam, oxazepam, temazepam) that does not depend on hepatic CYP450 oxidation."
  },
  "ddinter-int-alprazolam-cimetidine": {
    text: "Cimetidine inhibits hepatic CYP450 3A4 metabolism of alprazolam, increasing alprazolam AUC and peak plasma levels, and significantly prolonging central nervous system sedation.",
    management: "Consider switching from cimetidine to an alternative acid reducer (famotidine) or reduce alprazolam dosage. Monitor for excessive drowsiness, ataxia, and respiratory depression."
  },
  "ddinter-int-midazolam-clarithromycin": {
    text: "Clarithromycin is a potent CYP450 3A4 inhibitor that markedly increases oral midazolam AUC by three- to fivefold, causing prolonged and profound sedation and respiratory depression.",
    management: "Avoid coadministration of oral midazolam with clarithromycin. If IV midazolam is used, reduce dose by 50% and ensure continuous respiratory and hemodynamic monitoring."
  },
  "ddinter-int-methadone-fluconazole": {
    text: "Fluconazole inhibits CYP450 3A4 and 2C19 metabolism of methadone and both agents prolong the cardiac QTc interval, increasing the risk of Torsades de Pointes and opioid overdose.",
    management: "Monitor ECG for QTc interval prolongation and observe for signs of methadone toxicity (excessive sedation, respiratory depression). Methadone dose reduction may be required."
  },
  "ddinter-int-morphine-metoclopramide": {
    text: "Metoclopramide enhances gastrointestinal motility and gastric emptying, accelerating the rate of oral morphine absorption, while morphine's opioid effects may counteract metoclopramide's prokinetic action.",
    management: "Monitor for rapid sedation and analgesia onset upon initiating combination. Adjust morphine dosing and monitor gastrointestinal symptoms."
  },
  "ddinter-int-tramadol-ondansetron": {
    text: "Ondansetron is a 5-HT3 receptor antagonist that can pharmacodynamically antagonize tramadol's spinal antinociceptive effects, requiring higher doses of tramadol and increasing seizure risk.",
    management: "Monitor analgesic efficacy when ondansetron is given with tramadol. Higher doses of tramadol may be requested by patients; watch closely for tramadol-induced seizures."
  },
  "ddinter-int-ciprofloxacin-prednisone": {
    text: "Concomitant use of fluoroquinolones like ciprofloxacin and systemic corticosteroids like prednisone exponentially increases the risk of severe tendinitis and tendon rupture, especially of the Achilles tendon.",
    management: "Avoid combination whenever clinically possible, particularly in elderly patients (>60 years) and renal impairment. Discontinue ciprofloxacin immediately if pain, swelling, or inflammation of a tendon occurs."
  },
  "ddinter-int-levofloxacin-methylprednisolone": {
    text: "Co-prescription of levofloxacin with methylprednisolone potentiates tendon collagen degradation, markedly increasing the incidence of tendon rupture and neurotoxicity (convulsions).",
    management: "Avoid concurrent use. If mandatory, instruct patients to avoid strenuous exercise and immediately report any tendon pain, tenderness, or swelling, and discontinue levofloxacin at the first symptom."
  },
  "ddinter-int-ciprofloxacin-cyclosporine": {
    text: "Ciprofloxacin may increase serum creatinine and cyclosporine trough concentrations via inhibition of CYP450 3A4 metabolism and nephrotoxic synergy.",
    management: "Monitor renal function parameters (serum creatinine, BUN) and cyclosporine blood concentrations closely. Adjust cyclosporine dosage as necessary."
  },
  "ddinter-int-azithromycin-warfarin": {
    text: "Azithromycin may enhance the anticoagulant effect of warfarin, possibly by altering gut microflora or competitive protein displacement, resulting in elevated INR and bleeding complications.",
    management: "Check INR within 3 to 5 days of starting azithromycin therapy. Adjust warfarin dosage as required to maintain the target therapeutic INR."
  },
  "ddinter-int-clarithromycin-warfarin": {
    text: "Clarithromycin potent inhibition of CYP450 3A4 and interference with gut flora significantly elevates warfarin concentrations and INR, precipitating life-threatening hemorrhages.",
    management: "Monitor INR closely within 48 to 72 hours of starting clarithromycin. Warfarin dose reduction by 20% to 50% is frequently required. Instruct patients to report signs of bleeding immediately."
  },
  "ddinter-int-doxycycline-warfarin": {
    text: "Doxycycline and other tetracyclines depress plasma prothrombin activity and eradicate vitamin K-producing gut bacteria, potentiating the anticoagulant effect of warfarin.",
    management: "Monitor INR closely upon starting or stopping doxycycline therapy. Decrease warfarin dosage if INR elevates above the therapeutic range."
  },
  "ddinter-int-itraconazole-tacrolimus": {
    text: "Itraconazole strongly inhibits CYP450 3A4 and P-glycoprotein, dramatically reducing tacrolimus clearance and causing severe nephrotoxicity and neurotoxicity.",
    management: "Reduce tacrolimus dose by 50% to 75% when itraconazole is initiated. Monitor tacrolimus whole-blood trough levels frequently and check renal function closely."
  },
  "ddinter-int-fluconazole-cyclosporine": {
    text: "Fluconazole inhibits CYP450 3A4-mediated metabolism of cyclosporine in the liver and gut wall, increasing cyclosporine trough levels by 30% to 60% and aggravating nephrotoxicity.",
    management: "Reduce cyclosporine dose by 25% to 50% when co-prescribed with fluconazole. Monitor cyclosporine blood concentrations and renal function regularly."
  },
  "ddinter-int-itraconazole-cyclosporine": {
    text: "Itraconazole is a potent CYP450 3A4 and P-gp inhibitor that can increase cyclosporine blood concentrations by 50% to 80%, substantially elevating the risk of acute nephrotoxicity and hypertension.",
    management: "Reduce cyclosporine dosage by 50% when starting itraconazole. Measure cyclosporine whole-blood levels twice weekly and monitor serum creatinine and blood pressure."
  },
  "ddinter-int-ketoconazole-cyclosporine": {
    text: "Ketoconazole profoundly inhibits hepatic and intestinal CYP450 3A4 metabolism of cyclosporine, increasing cyclosporine systemic exposure by two- to threefold.",
    management: "Reduce cyclosporine dose by 60% to 80% upon initiating ketoconazole. Monitor cyclosporine blood trough concentrations and renal function meticulously."
  },
  "ddinter-int-methotrexate-sulfamethoxazole": {
    text: "Sulfamethoxazole displaces methotrexate from plasma albumin binding sites and competes for active renal tubular secretion, causing severe methotrexate bone marrow suppression and pancytopenia.",
    management: "Concomitant use is contraindicated (FDA Boxed Warning). Avoid coadministration of sulfonamides with methotrexate. If coadministered, monitor complete blood count (CBC) and liver function tests closely."
  },
  "ddinter-int-methotrexate-probenecid": {
    text: "Probenecid competitively blocks the organic anion transporters (OAT1/OAT3) in renal proximal tubules, drastically decreasing methotrexate clearance and inducing lethal systemic methotrexate toxicity.",
    management: "Concomitant use is contraindicated (FDA Boxed Warning). Avoid probenecid in patients receiving methotrexate. If combined, severe myelosuppression, stomatitis, and acute kidney injury can occur."
  },
  "ddinter-int-methotrexate-lansoprazole": {
    text: "Lansoprazole and other proton pump inhibitors inhibit renal BCRP and H+/K+ ATPase transport mechanisms, elevating serum methotrexate concentrations and delaying elimination.",
    management: "Temporarily withhold PPIs during high-dose methotrexate therapy. In low-dose regimens, monitor patients for methotrexate toxicities (mucositis, leukopenia, elevated transaminases)."
  },
  "ddinter-int-tacrolimus-rosuvastatin": {
    text: "Tacrolimus inhibits OATP1B1 hepatic uptake transport of rosuvastatin, increasing rosuvastatin systemic exposure and predisposing patients to severe myopathy and rhabdomyolysis.",
    management: "Use the lowest effective dose of rosuvastatin (5 to 10 mg daily) when combined with tacrolimus. Advise patients to promptly report muscle pain, weakness, or brownish urine."
  },
  "ddinter-int-colchicine-diltiazem": {
    text: "Diltiazem moderately inhibits CYP450 3A4 and P-glycoprotein, reducing colchicine clearance and precipitating acute colchicine toxicity including myopathy, neuropathy, and multiorgan failure.",
    management: "Reduce colchicine dosage by 50% or avoid combination, particularly in patients with renal or hepatic impairment. Monitor for symptoms of colchicine toxicity (severe diarrhea, vomiting, muscle weakness)."
  },
  "ddinter-int-amlodipine-tacrolimus": {
    text: "Amlodipine inhibits CYP450 3A5 and 3A4 metabolism of tacrolimus, resulting in elevated whole-blood tacrolimus trough concentrations and increased nephrotoxicity risk.",
    management: "Monitor whole-blood tacrolimus trough levels when amlodipine is added, adjusted, or discontinued. Reduce tacrolimus dosage as indicated by therapeutic drug monitoring."
  },
  "ddinter-int-citalopram-metoprolol": {
    text: "Citalopram is a mild-to-moderate inhibitor of CYP450 2D6 that increases plasma concentrations of metoprolol by approximately twofold, increasing bradycardia and hypotension risk.",
    management: "Monitor heart rate and blood pressure when citalopram is initiated in patients on metoprolol. Metoprolol dosage reduction may be necessary if bradycardia or fatigue develops."
  },
  "ddinter-int-propranolol-rizatriptan": {
    text: "Propranolol competitively inhibits monoamine oxidase-A (MAO-A) oxidative metabolism of rizatriptan, increasing rizatriptan AUC by 70% and peak plasma concentrations by 80%.",
    management: "The 5 mg dose of rizatriptan should be used in patients taking propranolol (maximum of 15 mg in 24 hours instead of 30 mg). Monitor for chest tightness and vasoconstrictive symptoms."
  },
  "ddinter-int-ketoconazole-methylprednisolone": {
    text: "Ketoconazole potent CYP450 3A4 inhibition reduces the metabolic clearance of methylprednisolone, increasing corticosteroid exposure and precipitating secondary adrenal suppression and Cushingoid symptoms.",
    management: "Reduce methylprednisolone dosage by 50% when coadministered with ketoconazole. Monitor for signs of hypercorticism and titrate steroid dose downward as needed."
  }
};

const filePath = path.join(process.cwd(), 'src', 'data', 'ddinterOfficialInteractions.ts');
let content = fs.readFileSync(filePath, 'utf8');

let updatedCount = 0;
for (const [id, clean] of Object.entries(CLEAN_MONOGRAPHS)) {
  // Find the block for this id
  const blockRegex = new RegExp(`(\\{\\s*"id":\\s*"${id}"[\\s\\S]*?\\})`, 'g');
  const match = blockRegex.exec(content);
  if (match) {
    let block = match[1];
    
    // Replace ddinterOriginalText
    if (block.includes('"ddinterOriginalText":')) {
      block = block.replace(/"ddinterOriginalText":\s*"[^"]*"/, `"ddinterOriginalText": ${JSON.stringify(clean.text)}`);
    } else {
      block = block.replace(/"ddinterPairId":\s*"[^"]*",?/, `$& \n    "ddinterOriginalText": ${JSON.stringify(clean.text)},`);
    }

    // Replace ddinterOriginalManagement
    if (block.includes('"ddinterOriginalManagement":')) {
      block = block.replace(/"ddinterOriginalManagement":\s*"[^"]*"/, `"ddinterOriginalManagement": ${JSON.stringify(clean.management)}`);
    } else {
      block = block.replace(/"ddinterOriginalText":\s*"[^"]*",?/, `$& \n    "ddinterOriginalManagement": ${JSON.stringify(clean.management)},`);
    }

    content = content.replace(match[1], block);
    updatedCount++;
  } else {
    console.warn(`Block not found for id: ${id}`);
  }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log(`Successfully updated ${updatedCount} official interactions with clean monographs!`);
