import React, { useState, useMemo, useEffect } from 'react';
import { ClinicBrandingSettings, Drug } from '../types';
import { 
  MessageSquare, 
  Send, 
  Copy, 
  Check, 
  Printer, 
  Plus, 
  Trash2, 
  Sparkles, 
  Share2, 
  Clock, 
  AlertTriangle, 
  Info, 
  CheckCircle2, 
  Phone, 
  User, 
  Building2, 
  Edit3,
  Pill, 
  Utensils, 
  ShieldAlert, 
  RotateCcw,
  ExternalLink,
  Smartphone,
  FileText,
  Search,
  Zap,
  ChevronDown,
  ChevronUp,
  BookOpen,
  X,
  Layers,
  ShieldCheck,
  Activity
} from 'lucide-react';
import { FloatingPillsBackground } from './FloatingPillsBackground';

export interface PatientMedicationEntry {
  id: string;
  drugName: string;
  indicationLabel: string; // e.g. "Obat Tekanan Darah", "Antibiotik", "Obat Lambung"
  frequency: string; // "1 x sehari 1 tablet", "3 x sehari 1 kapsul"
  timing: string; // "Pagi hari", "Malam sebelum tidur", "Tiap 8 jam"
  mealRelation: 'sebelum' | 'bersama' | 'sesudah' | 'bebas';
  isAntibioticMustFinish: boolean;
  specialInstructions?: string; // e.g. "Kocok dahulu", "Simpan di kulkas"
  foodPrecautions?: string; // e.g. "Hindari susu/teh", "Kurangi makanan asin"
}

export interface PioDrugCategory {
  id: string;
  label: string;
  icon: string;
  keywords: string[];
}

export const PIO_DRUG_CATEGORIES: PioDrugCategory[] = [
  { id: 'populer', label: '⭐ Populer & Resep Teratas', icon: '⭐', keywords: [] },
  { id: 'hipertensi', label: '🫀 Hipertensi & Jantung', icon: '🫀', keywords: ['hipertensi', 'amlodipine', 'candesartan', 'captopril', 'bisoprolol', 'valsartan', 'furosemide', 'diltiazem', 'digoxin', 'spironolactone', 'kardiovaskular', 'cardiovascular', 'antihipertensi', 'isdn', 'aspilet', 'clopidogrel', 'hct', 'telmisartan', 'ramipril', 'propranolol', 'verapamil', 'warfarin', 'miniaspi'] },
  { id: 'diabetes', label: '🩸 Diabetes Melitus', icon: '🩸', keywords: ['diabetes', 'metformin', 'glimepiride', 'gliclazide', 'acarbose', 'pioglitazone', 'vildagliptin', 'sitagliptin', 'empagliflozin', 'dapagliflozin', 'insulin', 'antidiabetes', 'linagliptin', 'lantus', 'novorapid', 'levothyroxine'] },
  { id: 'lambung', label: '🔥 Lambung & PPI / GERD', icon: '🔥', keywords: ['lambung', 'maag', 'gerd', 'omeprazole', 'lansoprazole', 'esomeprazole', 'pantoprazole', 'antasida', 'antacid', 'sukralfat', 'sucralfate', 'domperidone', 'ondansetron', 'rebamipide', 'gastro', 'mukoprotektor', 'ranitidine', 'famotidine', 'polysilane', 'braxidin', 'loperamide', 'attapulgite', 'diatabs', 'buscopan', 'dulcolax', 'microlax', 'lactulose'] },
  { id: 'antibiotik', label: '🦠 Antibiotik & Infeksi', icon: '🦠', keywords: ['antibiotik', 'antibakteri', 'amoxicillin', 'cefixime', 'cefadroxil', 'ciprofloxacin', 'levofloxacin', 'azithromycin', 'cotrimoxazole', 'doxycycline', 'metronidazole', 'clindamycin', 'anti-infeksi', 'augmentin', 'cefuroxime', 'erythromycin', 'spiramycin', 'nystatin', 'acyclovir', 'fluconazole', 'ketoconazole'] },
  { id: 'analgesik', label: '⚡ Analgesik & Radang', icon: '⚡', keywords: ['analgesik', 'nyeri', 'nsaid', 'oains', 'paracetamol', 'mefenamat', 'ibuprofen', 'diklofenak', 'meloxicam', 'ketorolac', 'celecoxib', 'eperisone', 'antiinflamasi', 'methylprednisolone', 'dexamethasone', 'prednisone', 'tramadol', 'ultracet', 'piroxicam', 'pronalges', 'emulgel'] },
  { id: 'kolesterol', label: '🧪 Kolesterol & Asam Urat', icon: '🧪', keywords: ['kolesterol', 'statin', 'simvastatin', 'atorvastatin', 'rosuvastatin', 'fenofibrate', 'allopurinol', 'febuxostat', 'asam urat', 'gout', 'lipid', 'gemfibrozil', 'colchicine'] },
  { id: 'respirasi', label: '🫁 Batuk, Pilek & Asma', icon: '🫁', keywords: ['asma', 'batuk', 'alergi', 'cetirizine', 'loratadine', 'salbutamol', 'ambroxol', 'dextromethorphan', 'acetylcysteine', 'antihistamin', 'respirasi', 'ctm', 'ventolin', 'inhaler', 'symbicort', 'seretide', 'combivent', 'budesonide', 'desloratadine', 'fexofenadine', 'guaifenesin', 'gg', 'actifed', 'iliadin', 'avamys'] },
  { id: 'saraf', label: '🧠 Saraf, Vertigo & Nyeri Saraf', icon: '🧠', keywords: ['saraf', 'vertigo', 'betahistine', 'merislon', 'flunarizine', 'sibelium', 'dimenhydrinate', 'antimo', 'gabapentin', 'pregabalin', 'lyrica', 'amitriptyline', 'alprazolam', 'xanax', 'diazepam', 'valium', 'clobazam', 'frisium', 'neuropati', 'migrain', 'kejang'] },
  { id: 'topikal', label: '🧴 Salep, Krim & Topikal', icon: '🧴', keywords: ['salep', 'krim', 'cream', 'ointment', 'gel', 'topikal', 'hydrocortisone', 'betamethasone', 'mometasone', 'elocon', 'mupirocin', 'bactoderm', 'gentamicin', 'ketoconazole krim', 'clotrimazole', 'canesten', 'permethrin', 'scabimite', 'bioplacenton', 'burnazin', 'emulgel', 'voltaren emulgel', 'dermatologi'] },
  { id: 'khusus', label: '💉 Sediaan Khusus (Inhaler, Suppo, Enema & Pen)', icon: '💉', keywords: ['suppositoria', 'suppo', 'enema', 'inhaler', 'turbuhaler', 'diskus', 'respules', 'nebulizer', 'nebu', 'insulin', 'pen', 'semprot hidung', 'nasal spray', 'microlax', 'dulcolax supp', 'pronalges', 'symbicort', 'seretide', 'combivent', 'iliadin', 'avamys', 'lantus', 'novorapid'] },
  { id: 'pediatrik', label: '👶 Pediatrik, Sirup & Probiotik', icon: '👶', keywords: ['sirup', 'suspensi', 'drop', 'anak', 'pediatrik', 'oralit', 'zinc', 'probiotik', 'interlac', 'lacto-b', 'apialys', 'curcuma', 'ferriz', 'maltofer', 'rhinos neo', 'proris', 'sanmol'] },
  { id: 'vitamin', label: '✨ Vitamin & Suplemen', icon: '✨', keywords: ['vitamin', 'kalsium', 'calcium', 'folat', 'folic', 'neurobion', 'sangobion', 'zinc', 'mineral', 'suplemen', 'kalk', 'vit d3', 'vit b', 'maltofer', 'folavit', 'coq10', 'ester c'] },
  { id: 'tetes', label: '👁️ Tetes Mata & Telinga', icon: '👁️', keywords: ['tetes mata', 'tetes telinga', 'cendo', 'tarivid', 'xitrol', 'cenfresh', 'otik', 'optik', 'tetes', 'forumen', 'erlamycetin', 'lyteers', 'gargle', 'betadine gargle'] },
  { id: 'semua', label: '💊 Semua 678+ Obat Monografi', icon: '💊', keywords: [] }
];

export const POPULAR_PIO_DRUGS = [
  // 1. Hipertensi & Jantung
  'Amlodipine 5 mg Tablet',
  'Amlodipine 10 mg Tablet',
  'Candesartan 8 mg Tablet',
  'Candesartan 16 mg Tablet',
  'Telmisartan 40 mg Tablet',
  'Telmisartan 80 mg Tablet',
  'Valsartan 80 mg Tablet',
  'Valsartan 160 mg Tablet',
  'Captopril 12.5 mg Tablet',
  'Captopril 25 mg Tablet',
  'Ramipril 2.5 mg Tablet',
  'Ramipril 5 mg Tablet',
  'Bisoprolol 2.5 mg Tablet',
  'Bisoprolol 5 mg Tablet',
  'Propranolol 10 mg Tablet',
  'Propranolol 40 mg Tablet',
  'Furosemide 40 mg Tablet',
  'Spironolactone 25 mg Tablet',
  'Spironolactone 100 mg Tablet',
  'Hidroklorotiazid (HCT) 25 mg Tablet',
  'ISDN 5 mg Tablet Sublingual',
  'Aspilet / Acetosal 80 mg Tablet Kunyah',
  'Miniaspi 80 mg Tablet Enterik',
  'Clopidogrel 75 mg Tablet',
  'Diltiazem 30 mg Tablet',
  'Verapamil 80 mg Tablet',
  'Digoxin 0.25 mg Tablet',
  'Warfarin (Simarc) 2 mg Tablet',

  // 2. Diabetes Melitus & Endokrin
  'Metformin 500 mg Tablet',
  'Metformin 850 mg Tablet',
  'Glimepiride 1 mg Tablet',
  'Glimepiride 2 mg Tablet',
  'Glimepiride 3 mg Tablet',
  'Glimepiride 4 mg Tablet',
  'Gliclazide MR 60 mg Tablet',
  'Acarbose 50 mg Tablet',
  'Acarbose 100 mg Tablet',
  'Pioglitazone 15 mg Tablet',
  'Pioglitazone 30 mg Tablet',
  'Vildagliptin 50 mg Tablet',
  'Sitagliptin 100 mg Tablet',
  'Linagliptin (Trajenta) 5 mg Tablet',
  'Empagliflozin (Jardiance) 10 mg Tablet',
  'Dapagliflozin (Forxiga) 10 mg Tablet',
  'Insulin Glargine (Lantus) Pen 100 IU/mL',
  'Insulin Aspart (Novorapid) Pen 100 IU/mL',
  'Levothyroxine 50 mcg Tablet',
  'Levothyroxine 100 mcg Tablet',

  // 3. Lambung, GERD & Saluran Cerna
  'Omeprazole 20 mg Kapsul',
  'Lansoprazole 30 mg Kapsul',
  'Esomeprazole 20 mg Tablet',
  'Esomeprazole 40 mg Tablet',
  'Pantoprazole 40 mg Tablet',
  'Rabeprazole 20 mg Tablet',
  'Ranitidine 150 mg Tablet',
  'Famotidine 20 mg Tablet',
  'Famotidine 40 mg Tablet',
  'Antasida DOEN Tablet Kunyah',
  'Antasida DOEN Suspensi 60 mL',
  'Polysilane Tablet Kunyah',
  'Polysilane Suspensi 100 mL',
  'Sukralfat Suspensi 500 mg/5 mL',
  'Sukralfat 500 mg Tablet',
  'Domperidone 10 mg Tablet',
  'Domperidone Sirup 5 mg/5 mL',
  'Domperidone Drop Bayi 5 mg/mL',
  'Ondansetron 4 mg Tablet',
  'Ondansetron 8 mg Tablet',
  'Rebamipide 100 mg Tablet',
  'Braxidin Tablet',

  // 4. Diare, Laksatif & Saluran Cerna Lanjut
  'Loperamide 2 mg Tablet',
  'Attapulgite (New Diatabs) 600 mg Tablet',
  'Hyoscine Butylbromide (Buscopan) 10 mg Tablet',
  'Dulcolax (Bisacodyl) 5 mg Tablet',
  'Dulcolax (Bisacodyl) 10 mg Suppositoria',
  'Microlax Enema Tube 5 mL',
  'Lactulose Sirup 3.335 g/5 mL',
  'Plantacid Forte Suspensi 100 mL',

  // 5. Antibiotik, Antivirus & Antijamur
  'Amoxicillin 500 mg Kaplet',
  'Amoxicillin Sirup Kering 125 mg/5 mL',
  'Amoxicillin-Clavulanat (Augmentin) 625 mg Kaplet',
  'Amoxicillin-Clavulanat Sirup Kering',
  'Cefixime 100 mg Kapsul',
  'Cefixime 200 mg Kapsul',
  'Cefixime Sirup Kering 100 mg/5 mL',
  'Cefadroxil 500 mg Kapsul',
  'Cefadroxil Sirup Kering 125 mg/5 mL',
  'Cefuroxime Axetil 500 mg Tablet',
  'Ciprofloxacin 500 mg Tablet',
  'Levofloxacin 500 mg Tablet',
  'Azithromycin 500 mg Tablet',
  'Erythromycin 500 mg Kaplet',
  'Spiramycin 500 mg Tablet',
  'Cotrimoxazole 480 mg Tablet',
  'Cotrimoxazole Forte 960 mg Tablet',
  'Cotrimoxazole Sirup Suspensi',
  'Metronidazole 500 mg Tablet',
  'Doxycycline 100 mg Kapsul',
  'Clindamycin 150 mg Kapsul',
  'Clindamycin 300 mg Kapsul',
  'Nystatin Drop Oral 100.000 IU/mL',
  'Acyclovir 200 mg Tablet',
  'Acyclovir 400 mg Tablet',
  'Fluconazole 150 mg Kapsul',
  'Ketoconazole 200 mg Tablet',
  'Griseofulvin 500 mg Tablet',

  // 6. Analgesik, OAINS, Radang & Relaksan Otot
  'Paracetamol 500 mg Tablet',
  'Paracetamol Sirup 120 mg/5 mL',
  'Paracetamol Drop Bayi 100 mg/mL',
  'Asam Mefenamat 500 mg Kaplet',
  'Ibuprofen 200 mg Tablet',
  'Ibuprofen 400 mg Tablet',
  'Ibuprofen Sirup Suspensi 100 mg/5 mL',
  'Natrium Diklofenak 50 mg Tablet Enterik',
  'Kalium Diklofenak 50 mg Tablet',
  'Meloxicam 7.5 mg Tablet',
  'Meloxicam 15 mg Tablet',
  'Ketorolac 10 mg Tablet',
  'Celecoxib 100 mg Kapsul',
  'Celecoxib 200 mg Kapsul',
  'Piroxicam 10 mg Kapsul',
  'Piroxicam 20 mg Kapsul',
  'Eperisone HCl 50 mg Tablet',
  'Tramadol 50 mg Kapsul',
  'Ultracet (Tramadol 37.5 mg + Paracetamol 325 mg) Tablet',
  'Ketoprofen (Pronalges) 100 mg Suppositoria',
  'Voltaren Emulgel 1% Gel 20 g',
  'Methylprednisolone 4 mg Tablet',
  'Methylprednisolone 8 mg Tablet',
  'Methylprednisolone 16 mg Tablet',
  'Dexamethasone 0.5 mg Tablet',
  'Prednisone 5 mg Tablet',

  // 7. Kolesterol, Asam Urat & Metabolik
  'Simvastatin 10 mg Tablet',
  'Simvastatin 20 mg Tablet',
  'Atorvastatin 20 mg Tablet',
  'Atorvastatin 40 mg Tablet',
  'Rosuvastatin 10 mg Tablet',
  'Rosuvastatin 20 mg Tablet',
  'Fenofibrate 100 mg Kapsul',
  'Fenofibrate 300 mg Kapsul',
  'Gemfibrozil 300 mg Kapsul',
  'Allopurinol 100 mg Tablet',
  'Allopurinol 300 mg Tablet',
  'Febuxostat 40 mg Tablet',
  'Colchicine 0.5 mg Tablet',

  // 8. Respirasi, Batuk, Pilek & Alergi
  'Cetirizine 10 mg Tablet',
  'Cetirizine Sirup 5 mg/5 mL',
  'Loratadine 10 mg Tablet',
  'Desloratadine 5 mg Tablet',
  'Fexofenadine (Telfast) 120 mg Tablet',
  'Salbutamol 2 mg Tablet',
  'Salbutamol 4 mg Tablet',
  'Salbutamol Inhaler MDI (Ventolin)',
  'Symbicort Turbuhaler 160/4.5 mcg',
  'Seretide Diskus 250 mcg Inhaler',
  'Combivent Respules (Salbutamol + Ipratropium) Nebu',
  'Budesonide Respules 0.25 mg/2 mL Nebu',
  'Budesonide Respules 0.5 mg/2 mL Nebu',
  'Ambroxol 30 mg Tablet',
  'Ambroxol Sirup 15 mg/5 mL',
  'N-Acetylcysteine 200 mg Kapsul',
  'N-Acetylcysteine 600 mg Tablet Effervescent',
  'Erdosteine 300 mg Kapsul',
  'CTM (Chlorpheniramine) 4 mg Tablet',
  'Dextromethorphan HBr Sirup',
  'Guaifenesin (GG) 100 mg Tablet',
  'Actifed Kuning Sirup (Pseudoephedrine + Triprolidine)',
  'Iliadin Semprot Hidung 0.05% 10 mL',
  'Avamys (Fluticasone Furoate) Nasal Spray 120 Dosis',

  // 9. Saraf, Vertigo, Nyeri Neuropati & Psikiatri
  'Betahistine Mesilate 6 mg Tablet',
  'Betahistine Dimesylate (Merislon) 12 mg Tablet',
  'Betahistine 24 mg Tablet',
  'Flunarizine (Sibelium) 5 mg Tablet',
  'Flunarizine 10 mg Tablet',
  'Dimenhydrinate (Antimo) 50 mg Tablet',
  'Gabapentin 100 mg Kapsul',
  'Gabapentin 300 mg Kapsul',
  'Pregabalin (Lyrica) 75 mg Kapsul',
  'Amitriptyline 25 mg Tablet',
  'Alprazolam 0.5 mg Tablet',
  'Alprazolam 1 mg Tablet',
  'Diazepam 2 mg Tablet',
  'Diazepam 5 mg Tablet',
  'Clobazam 10 mg Tablet',

  // 10. Salep, Krim & Dermatologi Topikal
  'Hydrocortisone Krim 1% 5 g',
  'Hydrocortisone Krim 2.5% 5 g',
  'Betamethasone Valerate Krim 0.1% 5 g',
  'Mometasone Furoate (Elocon) Krim 0.1% 10 g',
  'Mupirocin (Bactoderm) Salep 2% 10 g',
  'Gentamicin Salep Kulit 0.1% 5 g',
  'Ketoconazole Krim 2% 10 g',
  'Clotrimazole (Canesten) Krim 1% 10 g',
  'Permethrin (Scabimite) Krim 5% 30 g',
  'Bioplacenton Gel 15 g',
  'Burnazin (Silver Sulfadiazine) Krim 35 g',
  'Acyclovir Salep Kulit 5% 5 g',

  // 11. Tetes Mata, Tetes Telinga & Kumur
  'Cendo Xitrol Tetes Mata 5 mL',
  'Cendo Cenfresh Tetes Mata Minidose',
  'Cendo Lyteers Tetes Mata 15 mL',
  'Tarivid (Ofloxacin) Tetes Telinga 5 mL',
  'Forumen (Docusate) Tetes Telinga 10 mL',
  'Erlamycetin (Kloramfenikol) Tetes Telinga 1%',
  'Erlamycetin Tetes Mata 0.5% 10 mL',
  'Betadine Gargle (Obat Kumur Povidone 1%) 100 mL',

  // 12. Pediatrik, Sirup Anak, Drop & Probiotik
  'Interlac Drop Bayi (Probiotik) 5 mL',
  'Interlac Sachet Serbuk Probiotik',
  'Lacto-B Sachet Serbuk Probiotik',
  'Zinc 20 mg Tablet Dispersibel',
  'Oralit 200 mL Sachet Serbuk',
  'Apialys Sirup Multivitamin Anak 100 mL',
  'Apialys Drop Bayi 10 mL',
  'Curcuma Plus Sirup Penambah Nafsu Makan',
  'Ferriz Drop Zat Besi Bayi 15 mL',
  'Maltofer Sirup Zat Besi Anak 150 mL',
  'Maltofer Tablet Kunyah Zat Besi',
  'Rhinos Neo Drop Bayi 10 mL',
  'Tempra Sirup Paracetamol Anak 60 mL',
  'Tempra Drop Bayi 15 mL',

  // 13. Vitamin, Mineral & Suplemen
  'Kalsium Laktat (Kalk) 500 mg Tablet',
  'Vitamin D3 1000 IU Tablet',
  'Vitamin D3 5000 IU Tablet',
  'Asam Folat 400 mcg Tablet',
  'Asam Folat 1 mg (Folavit) Tablet',
  'Vitamin B Kompleks Tablet',
  'Neurobion Forte Tablet',
  'Neurobion 5000 Tablet',
  'Sangobion (Zat Besi + Folat) Kapsul',
  'Vitamin C 500 mg Tablet',
  'Ester C 500 mg Tablet',
  'Coenzyme Q10 (CoQ10) 100 mg Kapsul'
];

export const getFormBadge = (name: string) => {
  const lower = name.toLowerCase();
  if (lower.includes('suppositoria') || lower.includes('suppo') || lower.includes('supp')) {
    return { label: 'Suppositoria Rektal', color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300 border-purple-200 dark:border-purple-800' };
  }
  if (lower.includes('enema') || lower.includes('microlax')) {
    return { label: 'Enema Rektal', color: 'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300 border-rose-200 dark:border-rose-800' };
  }
  if (lower.includes('semprot hidung') || lower.includes('nasal spray')) {
    return { label: 'Nasal Spray', color: 'bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300 border-sky-200 dark:border-sky-800' };
  }
  if (lower.includes('obat kumur') || lower.includes('gargle')) {
    return { label: 'Obat Kumur', color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800' };
  }
  if (lower.includes('krim') || lower.includes('salep') || lower.includes('gel') || lower.includes('emulgel') || lower.includes('cream') || lower.includes('ointment')) {
    return { label: 'Krim/Salep Topikal', color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300 border-pink-200 dark:border-pink-800' };
  }
  if (lower.includes('turbuhaler') || lower.includes('diskus') || lower.includes('respules') || lower.includes('inhaler') || lower.includes('mdi') || lower.includes('ventolin')) {
    return { label: 'Inhalasi/Nebu', color: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800' };
  }
  if (lower.includes('insulin') || lower.includes('pen') || lower.includes('injeksi') || lower.includes('lantus') || lower.includes('novorapid')) {
    return { label: 'Insulin Pen / Injeksi', color: 'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300 border-violet-200 dark:border-violet-800' };
  }
  if (lower.includes('drop bayi') || lower.includes('drop')) {
    return { label: 'Drop Bayi/Pediatrik', color: 'bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/40 dark:text-fuchsia-300 border-fuchsia-200 dark:border-fuchsia-800' };
  }
  if (lower.includes('sirup') || lower.includes('suspensi') || lower.includes('emulsi')) {
    return { label: 'Sirup/Cair', color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300 border-amber-200 dark:border-amber-800' };
  }
  if (lower.includes('tetes mata') || lower.includes('tetes telinga') || lower.includes('tetes')) {
    return { label: 'Tetes Otik/Optik', color: 'bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300 border-teal-200 dark:border-teal-800' };
  }
  if (lower.includes('kunyah')) {
    return { label: 'Tablet Kunyah', color: 'bg-lime-100 text-lime-700 dark:bg-lime-900/40 dark:text-lime-300 border-lime-200 dark:border-lime-800' };
  }
  if (lower.includes('sublingual')) {
    return { label: 'Sublingual', color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300 border-purple-200 dark:border-purple-800' };
  }
  if (lower.includes('effervescent')) {
    return { label: 'Effervescent', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 border-blue-200 dark:border-blue-800' };
  }
  if (lower.includes('dispersibel') || lower.includes('dispersible')) {
    return { label: 'Tablet Dispersibel', color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800' };
  }
  if (lower.includes('sachet') || lower.includes('serbuk')) {
    return { label: 'Sachet Serbuk', color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300 border-orange-200 dark:border-orange-800' };
  }
  if (lower.includes('kapsul')) {
    return { label: 'Kapsul', color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800' };
  }
  return { label: 'Tablet/Kaplet', color: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700' };
};

export const generatePioAutoFill = (
  rawQuery: string,
  drugObj?: Drug
): Partial<PatientMedicationEntry> => {
  const query = (rawQuery + ' ' + (drugObj?.name || '') + ' ' + (drugObj?.genericName || '') + ' ' + (drugObj?.category || '')).toLowerCase();

  // 1. PPI, Lambung & Antasida / Mukoprotektor & H2 Blocker
  if (query.includes('omeprazole') || query.includes('lokev') || query.includes('ozid')) {
    return {
      drugName: drugObj?.name || 'Omeprazole 20 mg Kapsul',
      indicationLabel: 'Obat Lambung / Tukak Maag & GERD (PPI)',
      frequency: '1 x sehari 1 kapsul',
      mealRelation: 'sebelum',
      timing: 'Pagi hari (30-60 menit SEBELUM sarapan)',
      isAntibioticMustFinish: false,
      specialInstructions: 'Telan utuh kapsul dengan air putih, jangan digerus atau dikunyah',
      foodPrecautions: 'Hindari kopi, minuman bersoda, makanan pedas, asam, dan bersantan'
    };
  }
  if (query.includes('lansoprazole') || query.includes('prosogan') || query.includes('inazol') || query.includes('lapraz')) {
    return {
      drugName: drugObj?.name || 'Lansoprazole 30 mg Kapsul',
      indicationLabel: 'Pencegah Asam Lambung & Tukak Lambung (PPI)',
      frequency: '1 x sehari 1 kapsul',
      mealRelation: 'sebelum',
      timing: 'Pagi hari 30 - 60 menit SEBELUM sarapan',
      isAntibioticMustFinish: false,
      specialInstructions: 'Telan utuh kapsul dengan segelas air matang',
      foodPrecautions: 'Hindari makanan pedas, berminyak, dan asam'
    };
  }
  if (query.includes('esomeprazole') || query.includes('nexium')) {
    const is20 = query.includes('20');
    return {
      drugName: drugObj?.name || `Esomeprazole ${is20 ? '20' : '40'} mg Tablet`,
      indicationLabel: 'Obat Pengontrol Asam Lambung & GERD',
      frequency: '1 x sehari 1 tablet',
      mealRelation: 'sebelum',
      timing: 'Pagi hari 30 menit sebelum sarapan',
      isAntibioticMustFinish: false,
      specialInstructions: 'Ditelan utuh dengan segelas air putih',
      foodPrecautions: 'Hindari kopi dan makanan pemicu asam lambung'
    };
  }
  if (query.includes('pantoprazole') || query.includes('pantozol') || query.includes('panloc')) {
    return {
      drugName: drugObj?.name || 'Pantoprazole 40 mg Tablet',
      indicationLabel: 'Obat Penekan Asam Lambung (PPI)',
      frequency: '1 x sehari 1 tablet',
      mealRelation: 'sebelum',
      timing: 'Pagi hari 30 menit sebelum sarapan',
      isAntibioticMustFinish: false,
      specialInstructions: 'Jangan dikunyah atau dihancurkan',
      foodPrecautions: 'Hindari konsumsi makanan pedas & asam'
    };
  }
  if (query.includes('rabeprazole') || query.includes('pariet')) {
    return {
      drugName: drugObj?.name || 'Rabeprazole 20 mg Tablet',
      indicationLabel: 'Penekan Asam Lambung & Penyembuh Tukak Duodenum (PPI)',
      frequency: '1 x sehari 1 tablet',
      mealRelation: 'sebelum',
      timing: 'Pagi hari 30 menit sebelum sarapan',
      isAntibioticMustFinish: false,
      specialInstructions: 'Telan utuh tablet, jangan digerus atau dikunyah'
    };
  }
  if (query.includes('ranitidine') || query.includes('ranitidin') || query.includes('zantac') || query.includes('acran')) {
    return {
      drugName: drugObj?.name || 'Ranitidine 150 mg Tablet',
      indicationLabel: 'Pereda Gejala Maag & Asam Lambung Berlebih (H2 Blocker)',
      frequency: '2 x sehari 1 tablet',
      mealRelation: 'sebelum',
      timing: 'Pagi dan malam 30 menit SEBELUM makan',
      isAntibioticMustFinish: false,
      specialInstructions: 'Minum teratur sebelum makan untuk meredakan rasa perih di ulu hati',
      foodPrecautions: 'Hindari rokok, kopi, dan makanan berlemak tinggi'
    };
  }
  if (query.includes('famotidine') || query.includes('famotidin')) {
    const is40 = query.includes('40');
    return {
      drugName: drugObj?.name || `Famotidine ${is40 ? '40' : '20'} mg Tablet`,
      indicationLabel: 'Penurun Produksi Asam Lambung & Tukak Lambung',
      frequency: is40 ? '1 x sehari 1 tablet (malam)' : '2 x sehari 1 tablet',
      mealRelation: 'sebelum',
      timing: is40 ? 'Malam hari sebelum tidur' : 'Pagi dan malam sebelum makan',
      isAntibioticMustFinish: false,
      specialInstructions: 'Minum sebelum makan atau sebelum tidur malam'
    };
  }
  if (query.includes('antasida') || query.includes('antacid') || query.includes('promag') || query.includes('mylanta') || query.includes('polysilane') || query.includes('plantacid')) {
    const isSusp = query.includes('suspensi') || query.includes('sirup') || query.includes('cair') || query.includes('60 ml') || query.includes('100 ml');
    return {
      drugName: isSusp ? 'Antasida DOEN Suspensi 60 mL' : (drugObj?.name || 'Antasida DOEN Tablet Kunyah'),
      indicationLabel: 'Pereda Nyeri Lambung & Penetral Asam Maag',
      frequency: isSusp ? '3 x sehari 1-2 sendok takar (5-10 mL)' : '3 x sehari 1 tablet kunyah',
      mealRelation: 'sebelum',
      timing: '1 jam sebelum makan atau 2 jam sesudah makan & sebelum tidur',
      isAntibioticMustFinish: false,
      specialInstructions: isSusp
        ? 'Kocok botol dahulu sebelum diminum. Beri jeda 1-2 jam dengan obat oral lain.'
        : 'WAJIB dikunyah sampai halus sebelum ditelan. Beri jeda 2 jam dengan obat lain.',
      foodPrecautions: 'Hindari makanan terlalu asam, pedas, kopi, dan berlemak'
    };
  }
  if (query.includes('sucralfate') || query.includes('sukralfat') || query.includes('inpepsa') || query.includes('necra') || query.includes('episan')) {
    const isTab = query.includes('tablet');
    return {
      drugName: isTab ? 'Sukralfat 500 mg Tablet' : (drugObj?.name || 'Sukralfat Suspensi 500 mg/5 mL'),
      indicationLabel: 'Cairan Pelapis Dinding Lambung & Usus (Mukoprotektor)',
      frequency: isTab ? '3-4 x sehari 1-2 tablet' : '3 x sehari 2 sendok takar (10 mL)',
      mealRelation: 'sebelum',
      timing: '1 jam SEBELUM makan saat perut kosong & sebelum tidur',
      isAntibioticMustFinish: false,
      specialInstructions: isTab
        ? 'Minum saat perut kosong dengan segelas air. Jeda 2 jam dengan antasida dan obat lain.'
        : 'Kocok botol dahulu sebelum diminum. Beri jeda minimal 2 jam dengan obat oral lain.',
      foodPrecautions: 'Hindari konsumsi bersamaan dengan susu atau suplemen kalsium'
    };
  }
  if (query.includes('domperidone') || query.includes('vometa') || query.includes('vosedon')) {
    const isDrop = query.includes('drop');
    const isSirup = query.includes('sirup') || query.includes('suspensi');
    return {
      drugName: isDrop
        ? 'Domperidone Drop Bayi 5 mg/mL'
        : (isSirup ? 'Domperidone Sirup 5 mg/5 mL' : (drugObj?.name || 'Domperidone 10 mg Tablet')),
      indicationLabel: isDrop ? 'Pereda Muntah & Gumoh Bayi' : 'Obat Pereda Mual, Kembung & Muntah',
      frequency: isDrop ? '3 x sehari sesuai pipet takar dokter' : (isSirup ? '3 x sehari 1 sendok takar (5 mL)' : '3 x sehari 1 tablet'),
      mealRelation: 'sebelum',
      timing: '15 - 30 menit SEBELUM makan',
      isAntibioticMustFinish: false,
      specialInstructions: isDrop
        ? 'Gunakan pipet tetes resmi, teteskan perlahan ke sudut mulut bagian dalam bayi.'
        : (isSirup ? 'Kocok dahulu sebelum diminum. Gunakan sendok takar obat resmi.' : 'Minum sebelum makan agar motilitas lambung siap menerima makanan')
    };
  }
  if (query.includes('ondansetron') || query.includes('cedantron') || query.includes('narfoz')) {
    const is8mg = query.includes('8');
    return {
      drugName: drugObj?.name || `Ondansetron ${is8mg ? '8' : '4'} mg Tablet`,
      indicationLabel: 'Pencegah & Pereda Mual Muntah Akut / Pasca Tindakan',
      frequency: '2-3 x sehari 1 tablet',
      mealRelation: 'bebas',
      timing: '30 menit sebelum makan atau sebelum tindakan medis',
      isAntibioticMustFinish: false,
      specialInstructions: 'Dapat diminum sebelum atau sesudah makan saat mual melanda',
      foodPrecautions: 'Hindari makanan berbau tajam dan berminyak'
    };
  }
  if (query.includes('rebamipide') || query.includes('mucosta')) {
    return {
      drugName: drugObj?.name || 'Rebamipide 100 mg Tablet',
      indicationLabel: 'Mukoprotektor / Pelindung & Pemulih Lapisan Mukosa Lambung',
      frequency: '3 x sehari 1 tablet',
      mealRelation: 'sesudah',
      timing: 'Pagi, siang, dan malam sesudah makan (atau sebelum tidur)',
      isAntibioticMustFinish: false,
      specialInstructions: 'Minum teratur untuk mempercepat pemulihan dinding lambung yang luka/radang',
      foodPrecautions: 'Hindari makanan pedas, asam, dan konsumsi alkohol'
    };
  }
  if (query.includes('braxidin')) {
    return {
      drugName: drugObj?.name || 'Braxidin Tablet',
      indicationLabel: 'Pereda Gangguan Lambung Akibat Cemas / Sindrom Iritasi Usus (IBS)',
      frequency: '3-4 x sehari 1 tablet',
      mealRelation: 'sebelum',
      timing: '30 menit sebelum makan dan sebelum tidur malam',
      isAntibioticMustFinish: false,
      specialInstructions: 'Dapat menimbulkan kantuk. Hindari mengemudi atau mengoperasikan mesin.'
    };
  }

  // Diare, Antispasmodik & Laksatif
  if (query.includes('loperamide') || query.includes('imodium') || query.includes('lopamid')) {
    return {
      drugName: drugObj?.name || 'Loperamide 2 mg Tablet',
      indicationLabel: 'Pereda Diare Akut Non-Infeksi (Antimotilitas)',
      frequency: '2 tablet awal, lalu 1 tablet tiap BAB cair (maks 8 tablet/hari)',
      mealRelation: 'bebas',
      timing: 'Segera sesudah buang air besar cair',
      isAntibioticMustFinish: false,
      specialInstructions: '⚠️ HENTIKAN segera jika feses sudah memadat atau tidak BAB lebih dari 24 jam.',
      foodPrecautions: 'Banyak minum larutan oralit untuk menggantikan cairan tubuh yang hilang'
    };
  }
  if (query.includes('attapulgite') || query.includes('diatabs') || query.includes('biodiar')) {
    return {
      drugName: drugObj?.name || 'Attapulgite (New Diatabs) 600 mg Tablet',
      indicationLabel: 'Penyerap Racun & Pemadat Feses Diare (Adsorben)',
      frequency: '2 tablet tiap setelah buang air besar cair (maks 12 tablet/hari)',
      mealRelation: 'bebas',
      timing: 'Setiap kali setelah BAB cair',
      isAntibioticMustFinish: false,
      specialInstructions: 'Beri jeda 2-3 jam dengan obat lain karena obat ini dapat menyerap obat lain di lambung.',
      foodPrecautions: 'Bantu dengan minum banyak cairan oralit'
    };
  }
  if (query.includes('hyoscine') || query.includes('buscopan') || query.includes('hiosin')) {
    return {
      drugName: drugObj?.name || 'Hyoscine Butylbromide (Buscopan) 10 mg Tablet',
      indicationLabel: 'Pereda Kram & Nyeri Melilit Perut / Kolik Usus (Antispasmodik)',
      frequency: '3-4 x sehari 1 tablet',
      mealRelation: 'sesudah',
      timing: 'Pagi, siang, dan malam sesudah makan saat kram melilit',
      isAntibioticMustFinish: false,
      specialInstructions: 'Hentikan pemakaian bila kram melilit perut sudah reda'
    };
  }
  if (query.includes('dulcolax') || query.includes('bisacodyl') || query.includes('bisakodil') || query.includes('custodiol')) {
    const isSupp = query.includes('suppositoria') || query.includes('supp');
    return {
      drugName: isSupp ? 'Dulcolax (Bisacodyl) 10 mg Suppositoria' : (drugObj?.name || 'Dulcolax (Bisacodyl) 5 mg Tablet'),
      indicationLabel: isSupp ? 'Pencahar Rektal Cepat Konstipasi (Suppositoria)' : 'Obat Pencahar / Pelancar Buang Air Besar (Konstipasi)',
      frequency: isSupp ? '1 x sehari 1 suppositoria (bila perlu)' : '1 x sehari 1-2 tablet',
      mealRelation: isSupp ? 'bebas' : 'sesudah',
      timing: isSupp ? 'Pagi hari saat membutuhkan BAB (bekerja dalam 15-60 menit)' : 'Malam hari sebelum tidur (bekerja 6-12 jam kemudian)',
      isAntibioticMustFinish: false,
      specialInstructions: isSupp
        ? '⚠️ Buka bungkus aluminium, basahi sedikit air, masukkan ujung lancip ke dalam anus sambil berbaring miring. Tahan posisi beberapa menit.'
        : 'Telan utuh tablet dengan segelas air. JANGAN digerus/dikunyah dan jangan diminum bersama susu/antasida (beri jeda 1 jam).'
    };
  }
  if (query.includes('microlax')) {
    return {
      drugName: drugObj?.name || 'Microlax Enema Tube 5 mL',
      indicationLabel: 'Pencahar Cepat Konstipasi / Susah BAB (Enema Rektal)',
      frequency: '1 tube saat sembelit/konstipasi',
      mealRelation: 'bebas',
      timing: 'Saat butuh BAB (bekerja cepat dalam 5-15 menit)',
      isAntibioticMustFinish: false,
      specialInstructions: '⚠️ Buka tutup tube, tekan sedikit agar ujung pipa licin, masukkan seluruh pipa ke anus, tekan tube hingga habis, cabut sambil tetap menekan tube.'
    };
  }
  if (query.includes('lactulose') || query.includes('duphalac') || query.includes('laktulosa') || query.includes('opilax')) {
    return {
      drugName: drugObj?.name || 'Lactulose Sirup 3.335 g/5 mL',
      indicationLabel: 'Pencahar Alami Melunakkan Feses (Laksatif Osmotik)',
      frequency: '1-2 x sehari 1-2 sendok takar (15-30 mL)',
      mealRelation: 'bebas',
      timing: 'Pagi hari saat sarapan atau malam hari sebelum tidur',
      isAntibioticMustFinish: false,
      specialInstructions: 'Bekerja melunakkan tinja secara alami dalam 24-48 jam. Minum banyak air putih sepanjang hari.'
    };
  }

  // 2. Antihipertensi & Jantung
  if (query.includes('amlodipine') || query.includes('norvask') || query.includes('divask')) {
    const is5mg = query.includes('5');
    return {
      drugName: drugObj?.name || `Amlodipine ${is5mg ? '5' : '10'} mg Tablet`,
      indicationLabel: 'Obat Penurun Tekanan Darah (Antihipertensi CCB)',
      frequency: '1 x sehari 1 tablet',
      mealRelation: 'sesudah',
      timing: 'Pagi hari setelah sarapan (pada jam yang sama)',
      isAntibioticMustFinish: false,
      specialInstructions: 'Minum teratur setiap hari pada jam yang sama walau tensi sudah terasa normal',
      foodPrecautions: 'Kurangi konsumsi garam dan hindari jus grapefruit/jeruk bali'
    };
  }
  if (query.includes('candesartan') || query.includes('blopress') || query.includes('canderin')) {
    const is16mg = query.includes('16');
    return {
      drugName: drugObj?.name || `Candesartan ${is16mg ? '16' : '8'} mg Tablet`,
      indicationLabel: 'Obat Penurun Tekanan Darah & Proteksi Ginjal (ARB)',
      frequency: '1 x sehari 1 tablet',
      mealRelation: 'sesudah',
      timing: 'Pagi hari setelah sarapan',
      isAntibioticMustFinish: false,
      specialInstructions: 'Minum teratur setiap hari pada jam yang sama',
      foodPrecautions: 'Hindari suplemen kalium tinggi atau garam diet kalium'
    };
  }
  if (query.includes('telmisartan') || query.includes('micardis')) {
    const is80 = query.includes('80');
    return {
      drugName: drugObj?.name || `Telmisartan ${is80 ? '80' : '40'} mg Tablet`,
      indicationLabel: 'Obat Penurun Tekanan Darah & Proteksi Kardiovaskular (ARB)',
      frequency: '1 x sehari 1 tablet',
      mealRelation: 'sesudah',
      timing: 'Pagi hari sesudah sarapan',
      isAntibioticMustFinish: false,
      specialInstructions: 'Minum teratur pada jam yang sama setiap hari untuk menjaga tensi stabil 24 jam.',
      foodPrecautions: 'Kurangi asupan garam harian'
    };
  }
  if (query.includes('valsartan') || query.includes('diovan')) {
    const is160 = query.includes('160');
    return {
      drugName: drugObj?.name || `Valsartan ${is160 ? '160' : '80'} mg Tablet`,
      indicationLabel: 'Obat Penurun Tekanan Darah & Gagal Jantung (ARB)',
      frequency: '1 x sehari 1 tablet',
      mealRelation: 'sesudah',
      timing: 'Pagi hari setelah sarapan',
      isAntibioticMustFinish: false,
      specialInstructions: 'Minum teratur setiap hari pada jam yang sama',
      foodPrecautions: 'Batasi asupan garam dan makanan tinggi kalium'
    };
  }
  if (query.includes('captopril')) {
    const is125 = query.includes('12.5');
    return {
      drugName: drugObj?.name || `Captopril ${is125 ? '12.5' : '25'} mg Tablet`,
      indicationLabel: 'Obat Penurun Tekanan Darah (ACE Inhibitor)',
      frequency: '2-3 x sehari 1 tablet',
      mealRelation: 'sebelum',
      timing: 'Pagi dan malam, 1 jam SEBELUM makan saat perut kosong',
      isAntibioticMustFinish: false,
      specialInstructions: 'Minum saat perut kosong agar penyerapan optimal. Jika timbul batuk kering, konsultasikan ke apoteker.',
      foodPrecautions: 'Kurangi asupan garam harian'
    };
  }
  if (query.includes('ramipril') || query.includes('triatec')) {
    const is5 = query.includes('5');
    return {
      drugName: drugObj?.name || `Ramipril ${is5 ? '5' : '2.5'} mg Tablet`,
      indicationLabel: 'Obat Penurun Tekanan Darah & Proteksi Jantung (ACE Inhibitor)',
      frequency: '1 x sehari 1 tablet',
      mealRelation: 'sesudah',
      timing: 'Pagi hari sesudah sarapan',
      isAntibioticMustFinish: false,
      specialInstructions: 'Minum teratur setiap pagi. Jika timbul batuk kering yang mengganggu, hubungi apoteker/dokter.'
    };
  }
  if (query.includes('bisoprolol') || query.includes('concor') || query.includes('maintate')) {
    const is5 = query.includes('5');
    return {
      drugName: drugObj?.name || `Bisoprolol ${is5 ? '5' : '2.5'} mg Tablet`,
      indicationLabel: 'Obat Penurun Tekanan Darah & Pengatur Detak Jantung (Beta-Blocker)',
      frequency: '1 x sehari 1 tablet',
      mealRelation: 'sesudah',
      timing: 'Pagi hari setelah sarapan',
      isAntibioticMustFinish: false,
      specialInstructions: 'Minum teratur setiap pagi. Jangan menghentikan obat secara mendadak.',
      foodPrecautions: 'Hindari minuman berenergi atau kafein berlebih'
    };
  }
  if (query.includes('propranolol') || query.includes('farmadral')) {
    const is40 = query.includes('40');
    return {
      drugName: drugObj?.name || `Propranolol ${is40 ? '40' : '10'} mg Tablet`,
      indicationLabel: 'Obat Pengatur Detak Jantung & Pereda Tremor / Tiroid',
      frequency: '2-3 x sehari 1 tablet',
      mealRelation: 'sesudah',
      timing: 'Pagi dan malam sesudah makan',
      isAntibioticMustFinish: false,
      specialInstructions: 'Jangan menghentikan konsumsi obat secara mendadak. Kontraindikasi pada penderita asma.'
    };
  }
  if (query.includes('furosemide') || query.includes('lasix') || query.includes('farsix')) {
    return {
      drugName: drugObj?.name || 'Furosemide 40 mg Tablet',
      indicationLabel: 'Obat Pembuang Cairan Berlebih (Diuretik Pelancar Kencing)',
      frequency: '1 x sehari 1 tablet',
      mealRelation: 'sesudah',
      timing: 'PAGI HARI setelah sarapan',
      isAntibioticMustFinish: false,
      specialInstructions: 'Minum di pagi hari agar tidak mengganggu tidur malam karena buang air kecil',
      foodPrecautions: 'Kurangi konsumsi garam dan pantau asupan cairan'
    };
  }
  if (query.includes('spironolactone') || query.includes('aldactone') || query.includes('spironolakton')) {
    const is100 = query.includes('100');
    return {
      drugName: drugObj?.name || `Spironolactone ${is100 ? '100' : '25'} mg Tablet`,
      indicationLabel: 'Obat Penurun Tekanan Darah & Diuretik Hemat Kalium',
      frequency: '1 x sehari 1 tablet',
      mealRelation: 'sesudah',
      timing: 'Pagi hari sesudah sarapan',
      isAntibioticMustFinish: false,
      specialInstructions: 'Minum di pagi hari sesudah makan. Hindari suplemen kalium tanpa anjuran dokter.',
      foodPrecautions: 'Kurangi garam dan hindari konsumsi pisang/makanan tinggi kalium berlebih'
    };
  }
  if (query.includes('hidroklorotiazid') || query.includes('hct')) {
    return {
      drugName: drugObj?.name || 'Hidroklorotiazid (HCT) 25 mg Tablet',
      indicationLabel: 'Obat Penurun Tekanan Darah & Diuretik Tiazid',
      frequency: '1 x sehari 1 tablet',
      mealRelation: 'sesudah',
      timing: 'Pagi hari sesudah sarapan',
      isAntibioticMustFinish: false,
      specialInstructions: 'Minum di pagi hari agar tidak sering buang air kecil pada malam hari.',
      foodPrecautions: 'Kurangi konsumsi garam dan perbanyak minum air putih di siang hari'
    };
  }
  if (query.includes('isdn') || query.includes('isosorbid') || query.includes('cedocard') || query.includes('farsorbid')) {
    return {
      drugName: drugObj?.name || 'ISDN 5 mg Tablet Sublingual',
      indicationLabel: 'Obat Pereda & Pencegah Serangan Nyeri Dada (Angina Pektoris)',
      frequency: 'Bila nyeri dada / 3 x sehari 1 tablet',
      mealRelation: 'bebas',
      timing: 'Saat serangan nyeri dada atau 30 menit sebelum aktivitas fisik',
      isAntibioticMustFinish: false,
      specialInstructions: '⚠️ LETAKKAN DI BAWAH LIDAH sampai larut sendiri. JANGAN dikunyah atau ditelan langsung!',
      foodPrecautions: 'Duduk saat menggunakan obat ini karena dapat menyebabkan pusing mendadak/hipotensi'
    };
  }
  if (query.includes('aspilet') || query.includes('acetosal') || query.includes('aspirin') || query.includes('ascardia') || query.includes('thrombo aspilet') || query.includes('miniaspi')) {
    const isMiniaspi = query.includes('miniaspi');
    return {
      drugName: drugObj?.name || (isMiniaspi ? 'Miniaspi 80 mg Tablet Enterik' : 'Aspilet / Acetosal 80 mg Tablet Kunyah'),
      indicationLabel: 'Obat Pengencer Darah & Pencegah Serangan Jantung/Stroke (Antiplatelet)',
      frequency: '1 x sehari 1 tablet',
      mealRelation: 'sesudah',
      timing: 'Pagi atau siang hari SEGERA SESUDAH makan',
      isAntibioticMustFinish: false,
      specialInstructions: isMiniaspi
        ? 'Ditelan utuh dengan segelas air sesudah makan. Jangan digerus/dikunyah karena salut enterik.'
        : 'Wajib dikunyah hingga lumat sebelum ditelan, lalu minum segelas air. Minum sesudah makan untuk cegah perih lambung.',
      foodPrecautions: 'Hindari konsumsi bersama alkohol atau obat antiinflamasi lain tanpa resep dokter'
    };
  }
  if (query.includes('clopidogrel') || query.includes('plavix') || query.includes('clopisan')) {
    return {
      drugName: drugObj?.name || 'Clopidogrel 75 mg Tablet',
      indicationLabel: 'Obat Pencegah Penggumpalan Darah & Penyumbatan Pembuluh Darah (Antiplatelet)',
      frequency: '1 x sehari 1 tablet',
      mealRelation: 'sesudah',
      timing: 'Pagi atau malam hari pada jam yang sama setiap hari',
      isAntibioticMustFinish: false,
      specialInstructions: 'Minum teratur pada jam yang sama. Informasikan ke dokter jika akan menjalani operasi atau cabut gigi.',
      foodPrecautions: 'Waspadai tanda perdarahan seperti lebam atau gusi berdarah'
    };
  }
  if (query.includes('diltiazem') || query.includes('herbesser')) {
    return {
      drugName: drugObj?.name || 'Diltiazem 30 mg Tablet',
      indicationLabel: 'Obat Penurun Tekanan Darah & Pencegah Nyeri Dada Angina (CCB)',
      frequency: '3 x sehari 1 tablet',
      mealRelation: 'sebelum',
      timing: 'Pagi, siang, dan malam sebelum makan',
      isAntibioticMustFinish: false,
      specialInstructions: 'Minum teratur sesuai jadwal. Hindari konsumsi jus grapefruit.'
    };
  }
  if (query.includes('verapamil') || query.includes('isoptin')) {
    return {
      drugName: drugObj?.name || 'Verapamil 80 mg Tablet',
      indicationLabel: 'Obat Pengatur Irama Jantung & Antihipertensi (CCB)',
      frequency: '2-3 x sehari 1 tablet',
      mealRelation: 'sesudah',
      timing: 'Pagi, siang, dan malam sesudah makan',
      isAntibioticMustFinish: false,
      specialInstructions: 'Minum bersama makanan untuk mengurangi ketidaknyamanan lambung'
    };
  }
  if (query.includes('digoxin') || query.includes('fargoxin')) {
    return {
      drugName: drugObj?.name || 'Digoxin 0.25 mg Tablet',
      indicationLabel: 'Obat Penguat Denyut Jantung & Terapi Gagal Jantung',
      frequency: '1 x sehari 1 tablet (atau sesuai dosis dokter)',
      mealRelation: 'sesudah',
      timing: 'Pagi hari pada jam yang sama setiap hari',
      isAntibioticMustFinish: false,
      specialInstructions: '⚠️ Minum pada jam yang persis sama. Waspadai tanda toksisitas: mual, muntah, atau melihat lingkaran kuning/hijau.',
      foodPrecautions: 'Jaga keseimbangan asupan makanan mengandung kalium'
    };
  }
  if (query.includes('warfarin') || query.includes('simarc')) {
    return {
      drugName: drugObj?.name || 'Warfarin (Simarc) 2 mg Tablet',
      indicationLabel: 'Obat Pencegah Penggumpalan Darah Berat (Antikoagulan)',
      frequency: '1 x sehari sesuai target INR dokter',
      mealRelation: 'sesudah',
      timing: 'Malam hari pada jam yang persis sama (pukul 18:00 - 19:00)',
      isAntibioticMustFinish: false,
      specialInstructions: '⚠️ Minum pada jam yang sama. Wajib cek darah INR rutin. Waspadai tanda lebam atau perdarahan.',
      foodPrecautions: 'Pertahankan asupan sayuran hijau (vitamin K) secara stabil, hindari fluktuasi drastis'
    };
  }

  // 3. Antidiabetes & Endokrin
  if (query.includes('metformin') || query.includes('glucophage') || query.includes('glumin')) {
    const is850 = query.includes('850');
    return {
      drugName: drugObj?.name || `Metformin ${is850 ? '850' : '500'} mg Tablet`,
      indicationLabel: 'Obat Pengontrol Gula Darah Utama (Biguanida)',
      frequency: is850 ? '2 x sehari 1 tablet' : '2-3 x sehari 1 tablet',
      mealRelation: 'bersama',
      timing: 'Bersama suapan makan pagi dan makan malam',
      isAntibioticMustFinish: false,
      specialInstructions: 'Minum bersama suapan makanan untuk mencegah rasa mual dan perih lambung',
      foodPrecautions: 'Batasi asupan karbohidrat tinggi gula dan minuman manis'
    };
  }
  if (query.includes('glimepiride') || query.includes('amaryl') || query.includes('glimpid')) {
    const dose = query.includes('4') ? '4' : (query.includes('3') ? '3' : (query.includes('1') ? '1' : '2'));
    return {
      drugName: drugObj?.name || `Glimepiride ${dose} mg Tablet`,
      indicationLabel: 'Pemicu Pengeluaran Insulin Tubuh (Sulfonilurea)',
      frequency: '1 x sehari 1 tablet',
      mealRelation: 'sebelum',
      timing: 'Sesaat sebelum sarapan pagi (atau saat suapan pertama)',
      isAntibioticMustFinish: false,
      specialInstructions: 'Wajib langsung sarapan setelah minum obat untuk mencegah gula darah anjlok (hipoglikemia)',
      foodPrecautions: 'Siapkan permen manis jika timbul keringat dingin, gemetar, atau pusing'
    };
  }
  if (query.includes('gliclazide') || query.includes('diamicron')) {
    return {
      drugName: drugObj?.name || 'Gliclazide MR 60 mg Tablet',
      indicationLabel: 'Obat Antidiabetes Pelepasan Lambat (Sulfonilurea MR)',
      frequency: '1 x sehari 1 tablet',
      mealRelation: 'sebelum',
      timing: 'Pagi hari sesaat sebelum sarapan',
      isAntibioticMustFinish: false,
      specialInstructions: 'Telan utuh tablet, jangan digerus, dibelah, atau dikunyah karena sediaan pelepasan lambat (MR).',
      foodPrecautions: 'Selalu sediakan permen manis untuk antisipasi hipoglikemia'
    };
  }
  if (query.includes('acarbose') || query.includes('glucobay')) {
    const is100 = query.includes('100');
    return {
      drugName: drugObj?.name || `Acarbose ${is100 ? '100' : '50'} mg Tablet`,
      indicationLabel: 'Penghambat Penyerapan Gula Karbohidrat Makanan',
      frequency: '3 x sehari 1 tablet',
      mealRelation: 'bersama',
      timing: 'Bersama SUAPAN PERTAMA setiap makan besar',
      isAntibioticMustFinish: false,
      specialInstructions: 'Kunyah bersama suapan pertama makanan utama agar efektif menghambat gula'
    };
  }
  if (query.includes('pioglitazone') || query.includes('actos') || query.includes('decan')) {
    const is30 = query.includes('30');
    return {
      drugName: drugObj?.name || `Pioglitazone ${is30 ? '30' : '15'} mg Tablet`,
      indicationLabel: 'Obat Peningkat Sensitivitas Insulin Tubuh (Golongan TZD)',
      frequency: '1 x sehari 1 tablet',
      mealRelation: 'sesudah',
      timing: 'Pagi hari setelah makan',
      isAntibioticMustFinish: false,
      specialInstructions: 'Minum teratur setiap hari. Waspadai bila terjadi pembengkakan pada pergelangan kaki.',
      foodPrecautions: 'Lakukan pemantauan fungsi hati dan berat badan secara berkala'
    };
  }
  if (query.includes('vildagliptin') || query.includes('galvus')) {
    return {
      drugName: drugObj?.name || 'Vildagliptin 50 mg Tablet',
      indicationLabel: 'Obat Pengontrol Gula Darah Hormon Incretin (DPP-4 Inhibitor)',
      frequency: '1-2 x sehari 1 tablet',
      mealRelation: 'sesudah',
      timing: 'Pagi (dan malam) sesudah makan',
      isAntibioticMustFinish: false,
      specialInstructions: 'Minum teratur sesuai petunjuk dokter untuk mengontrol gula darah tanpa memicu hipoglikemia berat.'
    };
  }
  if (query.includes('sitagliptin') || query.includes('januvia')) {
    return {
      drugName: drugObj?.name || 'Sitagliptin 100 mg Tablet',
      indicationLabel: 'Obat Pengontrol Gula Darah Tanpa Risiko Hipoglikemia (DPP-4)',
      frequency: '1 x sehari 1 tablet',
      mealRelation: 'sesudah',
      timing: 'Pagi hari sesudah sarapan',
      isAntibioticMustFinish: false,
      specialInstructions: 'Dapat diminum bersama atau tanpa makanan'
    };
  }
  if (query.includes('linagliptin') || query.includes('trajenta')) {
    return {
      drugName: drugObj?.name || 'Linagliptin (Trajenta) 5 mg Tablet',
      indicationLabel: 'Obat Antidiabetes Aman untuk Pasien Gangguan Ginjal (DPP-4)',
      frequency: '1 x sehari 1 tablet',
      mealRelation: 'sesudah',
      timing: 'Pagi hari sesudah makan pada jam yang sama',
      isAntibioticMustFinish: false,
      specialInstructions: 'Aman untuk pasien dengan penurunan fungsi ginjal tanpa perlu penyesuaian dosis'
    };
  }
  if (query.includes('empagliflozin') || query.includes('jardiance')) {
    return {
      drugName: drugObj?.name || 'Empagliflozin (Jardiance) 10 mg Tablet',
      indicationLabel: 'Obat Pembuang Gula via Urin & Proteksi Jantung/Ginjal (SGLT-2 Inhibitor)',
      frequency: '1 x sehari 1 tablet',
      mealRelation: 'sesudah',
      timing: 'Pagi hari sesudah sarapan',
      isAntibioticMustFinish: false,
      specialInstructions: 'Minum banyak air putih di siang hari dan jaga kebersihan area genital untuk mencegah infeksi jamur/saluran kemih.',
      foodPrecautions: 'Pastikan asupan cairan tubuh cukup sepanjang hari'
    };
  }
  if (query.includes('dapagliflozin') || query.includes('forxiga')) {
    return {
      drugName: drugObj?.name || 'Dapagliflozin (Forxiga) 10 mg Tablet',
      indicationLabel: 'Obat Pengontrol Gula & Proteksi Gagal Jantung/Ginjal (SGLT-2)',
      frequency: '1 x sehari 1 tablet',
      mealRelation: 'sesudah',
      timing: 'Pagi hari sesudah sarapan',
      isAntibioticMustFinish: false,
      specialInstructions: 'Banyak minum air putih di siang hari. Jaga kebersihan area intim untuk mencegah infeksi jamur.'
    };
  }
  if (query.includes('lantus') || (query.includes('glargine') && query.includes('insulin'))) {
    return {
      drugName: drugObj?.name || 'Insulin Glargine (Lantus) Pen 100 IU/mL',
      indicationLabel: 'Insulin Basal Kerja Panjang Pengontrol Gula 24 Jam',
      frequency: '1 x sehari sesuai unit resep dokter',
      mealRelation: 'bebas',
      timing: 'Malam hari pada jam yang SAMA persis setiap hari (pukul 21:00)',
      isAntibioticMustFinish: false,
      specialInstructions: '⚠️ Suntikkan subkutan (cubit kulit) pada perut/paha/lengan. Rotasi lokasi suntik. Pen aktif simpan di suhu ruang (maks 28 hari), pen cadangan di kulkas 2-8°C (jangan dibekukan).'
    };
  }
  if (query.includes('novorapid') || (query.includes('aspart') && query.includes('insulin'))) {
    return {
      drugName: drugObj?.name || 'Insulin Aspart (Novorapid) Pen 100 IU/mL',
      indicationLabel: 'Insulin Prandial Kerja Cepat Pengontrol Gula Darah Makan',
      frequency: '3 x sehari sesuai unit resep dokter',
      mealRelation: 'sebelum',
      timing: 'Sesaat (5-10 menit) SEBELUM makan besar',
      isAntibioticMustFinish: false,
      specialInstructions: '⚠️ Wajib segera makan setelah penyuntikan untuk mencegah hipoglikemia. Tahan jarum 5-10 detik di kulit sebelum dicabut.'
    };
  }
  if (query.includes('levothyroxine') || query.includes('levotiroksin') || query.includes('euthyrox') || query.includes('thyrax')) {
    const is100 = query.includes('100');
    return {
      drugName: drugObj?.name || `Levothyroxine ${is100 ? '100' : '50'} mcg Tablet`,
      indicationLabel: 'Hormon Pengganti Tiroid Tubuh (Hipotiroidisme)',
      frequency: '1 x sehari 1 tablet',
      mealRelation: 'sebelum',
      timing: 'Pagi hari saat bangun tidur (30-60 menit SEBELUM sarapan)',
      isAntibioticMustFinish: false,
      specialInstructions: 'Wajib diminum saat perut benar-benar kosong dengan segelas air putih. Beri jeda 4 jam dengan kalsium/zat besi.'
    };
  }

  // 4. Antibiotik, Antivirus & Antijamur
  if (query.includes('amoxicillin') || query.includes('amoksisilin') || query.includes('amoxsan') || query.includes('clamoxyl') || query.includes('augmentin')) {
    const isClav = query.includes('clavulanat') || query.includes('klavulanat') || query.includes('augmentin');
    const isSirup = query.includes('sirup') || query.includes('kering') || query.includes('125');
    return {
      drugName: isClav
        ? (isSirup ? 'Amoxicillin-Clavulanat Sirup Kering' : (drugObj?.name || 'Amoxicillin-Clavulanat (Augmentin) 625 mg Kaplet'))
        : (isSirup ? 'Amoxicillin Sirup Kering 125 mg/5 mL' : (drugObj?.name || 'Amoxicillin 500 mg Kaplet')),
      indicationLabel: isSirup ? 'Antibiotik Infeksi Bakteri Pediatrik (Cair)' : 'Antibiotik Pengobatan Infeksi Bakteri',
      frequency: isSirup ? '3 x sehari 1 sendok takar (tiap 8 jam)' : '3 x sehari 1 kaplet (tiap 8 jam)',
      mealRelation: 'sesudah',
      timing: 'Tiap 8 jam (pagi 07:00, siang 15:00, malam 23:00) sesudah makan',
      isAntibioticMustFinish: true,
      specialInstructions: isSirup
        ? '⚠️ WAJIB DIHABISKAN. Kocok dahulu sebelum diminum. Sirup kering yang sudah dilarutkan air hanya bertahan 7-14 hari.'
        : '⚠️ WAJIB DIHABISKAN selama durasi hari yang diresepkan walau gejala sudah sembuh',
      foodPrecautions: 'Beri jeda dengan susu atau suplemen kalsium'
    };
  }
  if (query.includes('cefixime') || query.includes('cepanat') || query.includes('spancef') || query.includes('fixef')) {
    const isSirup = query.includes('sirup') || query.includes('kering') || query.includes('100 mg/5');
    const is200 = query.includes('200');
    return {
      drugName: isSirup ? 'Cefixime Sirup Kering 100 mg/5 mL' : (drugObj?.name || `Cefixime ${is200 ? '200' : '100'} mg Kapsul`),
      indicationLabel: 'Antibiotik Saluran Pernapasan & Infeksi Bakteri',
      frequency: isSirup ? '2 x sehari sesuai sendok takar (tiap 12 jam)' : '2 x sehari 1 kapsul (tiap 12 jam)',
      mealRelation: 'sesudah',
      timing: 'Tiap 12 jam (pagi dan malam) sesudah makan',
      isAntibioticMustFinish: true,
      specialInstructions: isSirup
        ? '⚠️ WAJIB DIHABISKAN selama durasi resep. Kocok botol sebelum dituang ke sendok takar resmi.'
        : '⚠️ WAJIB DIHABISKAN selama 5 hari berturut-turut untuk mencegah resistensi kuman',
      foodPrecautions: 'Hindari konsumsi bersamaan dengan susu kalsium tinggi'
    };
  }
  if (query.includes('cefadroxil') || query.includes('lapicef') || query.includes('sedrofen')) {
    const isSirup = query.includes('sirup') || query.includes('kering') || query.includes('125');
    return {
      drugName: isSirup ? 'Cefadroxil Sirup Kering 125 mg/5 mL' : (drugObj?.name || 'Cefadroxil 500 mg Kapsul'),
      indicationLabel: 'Antibiotik Infeksi Kulit & Saluran Napas',
      frequency: isSirup ? '2 x sehari sesuai sendok takar (tiap 12 jam)' : '2 x sehari 1 kapsul (tiap 12 jam)',
      mealRelation: 'sesudah',
      timing: 'Tiap 12 jam (pagi dan malam) sesudah makan',
      isAntibioticMustFinish: true,
      specialInstructions: isSirup
        ? '⚠️ WAJIB DIHABISKAN. Kocok botol sebelum dituang ke sendok takar resmi.'
        : '⚠️ WAJIB DIHABISKAN sesuai anjuran dokter/apoteker'
    };
  }
  if (query.includes('cefuroxime') || query.includes('zinnat') || query.includes('cefur')) {
    return {
      drugName: drugObj?.name || 'Cefuroxime Axetil 500 mg Tablet',
      indicationLabel: 'Antibiotik Sefalosporin Generasi II Infeksi Napas & THT',
      frequency: '2 x sehari 1 tablet (tiap 12 jam)',
      mealRelation: 'sesudah',
      timing: 'Tiap 12 jam sesudah makan',
      isAntibioticMustFinish: true,
      specialInstructions: '⚠️ WAJIB DIHABISKAN. Minum sesudah makan untuk penyerapan optimal.'
    };
  }
  if (query.includes('ciprofloxacin') || query.includes('baquinor') || query.includes('ciflox')) {
    return {
      drugName: drugObj?.name || 'Ciprofloxacin 500 mg Tablet',
      indicationLabel: 'Antibiotik Infeksi Saluran Kemih & Bakteri',
      frequency: '2 x sehari 1 tablet (tiap 12 jam)',
      mealRelation: 'sesudah',
      timing: 'Tiap 12 jam (pagi dan malam) sesudah makan',
      isAntibioticMustFinish: true,
      specialInstructions: '⚠️ WAJIB DIHABISKAN. Minum banyak air putih (minimal 2 liter/hari).',
      foodPrecautions: 'JANGAN diminum bersamaan dengan susu, antasida, atau zat besi (beri jeda 2 jam)'
    };
  }
  if (query.includes('levofloxacin') || query.includes('cravit') || query.includes('levocin')) {
    return {
      drugName: drugObj?.name || 'Levofloxacin 500 mg Tablet',
      indicationLabel: 'Antibiotik Spektrum Luas Infeksi Saluran Napas & Kemih',
      frequency: '1 x sehari 1 tablet',
      mealRelation: 'sesudah',
      timing: 'Pagi hari sesudah sarapan pada jam yang sama',
      isAntibioticMustFinish: true,
      specialInstructions: '⚠️ WAJIB DIHABISKAN. Minum banyak air putih (minimal 2 liter/hari). Jeda 2 jam dengan susu/antasida.',
      foodPrecautions: 'Hindari paparan sinar matahari terik berlebih selama pengobatan'
    };
  }
  if (query.includes('azithromycin') || query.includes('zithromax')) {
    return {
      drugName: drugObj?.name || 'Azithromycin 500 mg Tablet',
      indicationLabel: 'Antibiotik Saluran Pernapasan & Infeksi',
      frequency: '1 x sehari 1 tablet (selama 3-5 hari)',
      mealRelation: 'sebelum',
      timing: '1 jam sebelum makan atau 2 jam sesudah makan pada jam yang sama',
      isAntibioticMustFinish: true,
      specialInstructions: '⚠️ WAJIB DIHABISKAN selama 3-5 hari berturut-turut'
    };
  }
  if (query.includes('erythromycin') || query.includes('eritromisin')) {
    return {
      drugName: drugObj?.name || 'Erythromycin 500 mg Kaplet',
      indicationLabel: 'Antibiotik Makrolida Infeksi Saluran Napas & Kulit',
      frequency: '4 x sehari 1 kaplet (tiap 6 jam)',
      mealRelation: 'sebelum',
      timing: '1 jam sebelum makan atau 2 jam sesudah makan',
      isAntibioticMustFinish: true,
      specialInstructions: '⚠️ WAJIB DIHABISKAN sesuai anjuran dokter'
    };
  }
  if (query.includes('spiramycin') || query.includes('rovamycin')) {
    return {
      drugName: drugObj?.name || 'Spiramycin 500 mg Tablet',
      indicationLabel: 'Antibiotik Infeksi Toksoplasmosis & Saluran Napas/Mulut',
      frequency: '3 x sehari 1 tablet (tiap 8 jam)',
      mealRelation: 'sebelum',
      timing: 'Tiap 8 jam saat perut kosong',
      isAntibioticMustFinish: true,
      specialInstructions: '⚠️ WAJIB DIHABISKAN sesuai petunjuk dokter spesialis'
    };
  }
  if (query.includes('cotrimoxazole') || query.includes('kotrimoksazol') || query.includes('bactrim') || query.includes('sanprima')) {
    const isForte = query.includes('forte') || query.includes('960');
    return {
      drugName: drugObj?.name || (isForte ? 'Cotrimoxazole Forte 960 mg Tablet' : 'Cotrimoxazole 480 mg Tablet'),
      indicationLabel: 'Antibiotik Infeksi Saluran Kemih & Pernapasan',
      frequency: '2 x sehari 1 tablet (tiap 12 jam)',
      mealRelation: 'sesudah',
      timing: 'Tiap 12 jam (pagi dan malam) sesudah makan',
      isAntibioticMustFinish: true,
      specialInstructions: '⚠️ WAJIB DIHABISKAN. Minum banyak air putih sepanjang hari untuk mencegah kristaluria.',
      foodPrecautions: 'Pastikan minum minimal 2-2.5 liter air per hari'
    };
  }
  if (query.includes('metronidazole') || query.includes('flagyl') || query.includes('corsagyl')) {
    return {
      drugName: drugObj?.name || 'Metronidazole 500 mg Tablet',
      indicationLabel: 'Antibiotik & Antiamoeba / Infeksi Saluran Cerna & Gigi',
      frequency: '3 x sehari 1 tablet (tiap 8 jam)',
      mealRelation: 'sesudah',
      timing: 'Tiap 8 jam sesudah makan',
      isAntibioticMustFinish: true,
      specialInstructions: '⚠️ WAJIB DIHABISKAN. DILARANG KERAS mengonsumsi alkohol selama minum obat ini dan 48 jam sesudahnya!',
      foodPrecautions: 'Dapat menimbulkan rasa logam di lidah atau urin berwarna lebih gelap (efek sementara)'
    };
  }
  if (query.includes('doxycycline') || query.includes('doksisiklin') || query.includes('doxacin') || query.includes('interdoxin')) {
    return {
      drugName: drugObj?.name || 'Doxycycline 100 mg Kapsul',
      indicationLabel: 'Antibiotik Infeksi Bakteri, Jerawat Akut & Saluran Kemih',
      frequency: '2 x sehari 1 kapsul (tiap 12 jam)',
      mealRelation: 'sesudah',
      timing: 'Tiap 12 jam sesudah makan dengan segelas penuh air',
      isAntibioticMustFinish: true,
      specialInstructions: '⚠️ WAJIB DIHABISKAN. Telan dalam posisi duduk/tegak dengan 1 gelas penuh air. JANGAN langsung berbaring minimal 30 menit!',
      foodPrecautions: 'JANGAN diminum bersama susu atau suplemen zat besi/kalsium (beri jeda 2-3 jam)'
    };
  }
  if (query.includes('clindamycin') || query.includes('klindamisin') || query.includes('dalacin')) {
    const is300 = query.includes('300');
    return {
      drugName: drugObj?.name || `Clindamycin ${is300 ? '300' : '150'} mg Kapsul`,
      indicationLabel: 'Antibiotik Infeksi Gigi, Mulut, Kulit & Tulang',
      frequency: '3-4 x sehari 1 kapsul (tiap 6-8 jam)',
      mealRelation: 'sesudah',
      timing: 'Sesudah makan dengan 1 gelas penuh air matang',
      isAntibioticMustFinish: true,
      specialInstructions: '⚠️ WAJIB DIHABISKAN. Minum dengan segelas penuh air putih dalam posisi tegak.'
    };
  }
  if (query.includes('nystatin') || query.includes('nistatin') || query.includes('candistatin')) {
    return {
      drugName: drugObj?.name || 'Nystatin Drop Oral 100.000 IU/mL',
      indicationLabel: 'Antijamur Sariawan & Jamur Rongga Mulut Bayi/Dewasa (Kandidiasis Oral)',
      frequency: '4 x sehari 1-2 mL (sesuai anjuran)',
      mealRelation: 'sesudah',
      timing: 'Teteskan sesudah makan / menyusu',
      isAntibioticMustFinish: true,
      specialInstructions: '⚠️ Teteskan ke dalam rongga mulut. Kumur/tahan cairan beberapa saat di mulut sebelum ditelan. Jangan langsung makan/minum selama 15 menit.'
    };
  }
  if (query.includes('acyclovir') || query.includes('asiklovir')) {
    const isSalep = query.includes('salep') || query.includes('krim') || query.includes('5%');
    const is400 = query.includes('400');
    return {
      drugName: isSalep ? 'Acyclovir Salep Kulit 5% 5 g' : (drugObj?.name || `Acyclovir ${is400 ? '400' : '200'} mg Tablet`),
      indicationLabel: isSalep ? 'Salep Antivirus Cacar Air & Herpes' : 'Obat Antivirus Cacar Air, Herpes Zoster & Simpleks',
      frequency: isSalep ? '5 x sehari tiap 4 jam dioles tipis' : '5 x sehari 1 tablet (tiap 4 jam saat bangun tidur)',
      mealRelation: 'sesudah',
      timing: isSalep ? 'Oleskan tiap 4 jam pada area lenting' : 'Pukul 07:00, 11:00, 15:00, 19:00, 23:00 sesudah makan',
      isAntibioticMustFinish: true,
      specialInstructions: isSalep
        ? 'Gunakan kapas bersih/cotton bud untuk mengoleskan salep, jangan menggaruk luka lenting.'
        : '⚠️ WAJIB DIHABISKAN selama 5-7 hari berturut-turut. Minum banyak air putih.'
    };
  }
  if (query.includes('fluconazole') || query.includes('diflucan')) {
    return {
      drugName: drugObj?.name || 'Fluconazole 150 mg Kapsul',
      indicationLabel: 'Antijamur Sistemik Infeksi Jamur Kandida & Keputihan',
      frequency: '1 x seminggu 1 kapsul (atau dosis tunggal)',
      mealRelation: 'sesudah',
      timing: 'Sesudah makan dengan segelas air',
      isAntibioticMustFinish: false,
      specialInstructions: 'Minum sesuai anjuran dokter. Pantau efektivitas pengobatan.'
    };
  }
  if (query.includes('ketoconazole') || query.includes('mycoral') || query.includes('ketokonazol')) {
    const isKrim = query.includes('krim') || query.includes('salep') || query.includes('2%');
    return {
      drugName: isKrim ? 'Ketoconazole Krim 2% 10 g' : (drugObj?.name || 'Ketoconazole 200 mg Tablet'),
      indicationLabel: isKrim ? 'Krim Antijamur Panu, Kadas, Kurap & Kutu Air' : 'Obat Antijamur Sistemik Infeksi Jamur Kulit/Tubuh',
      frequency: isKrim ? '1-2 x sehari dioles tipis pada kulit yang terinfeksi' : '1 x sehari 1 tablet',
      mealRelation: 'sesudah',
      timing: isKrim ? 'Pagi dan malam setelah mandi pada kulit kering' : 'Segera sesudah makan',
      isAntibioticMustFinish: false,
      specialInstructions: isKrim
        ? 'Oleskan tipis melebar 1 cm dari batas lesi jamur. Lanjutkan 1-2 minggu setelah gejala hilang.'
        : 'Wajib diminum segera sesudah makan. Hindari konsumsi alkohol.'
    };
  }

  // 5. Analgesik, Antiinflamasi, Steroid & Otot
  if (query.includes('methylprednisolone') || query.includes('metilprednisolon') || query.includes('medixon') || query.includes('lameson')) {
    const dose = query.includes('16') ? '16' : (query.includes('8') ? '8' : '4');
    return {
      drugName: drugObj?.name || `Methylprednisolone ${dose} mg Tablet`,
      indicationLabel: 'Obat Antiinflamasi Kuat & Penekan Radang (Kortikosteroid)',
      frequency: '1-3 x sehari 1 tablet sesudah makan',
      mealRelation: 'sesudah',
      timing: 'Pagi hari SEGERA SESUDAH sarapan',
      isAntibioticMustFinish: false,
      specialInstructions: '⚠️ Wajib diminum pagi hari sesudah makan mengikuti ritme hormon kortisol tubuh. JANGAN dihentikan mendadak (harus bertahap/tapering off).',
      foodPrecautions: 'Hindari konsumsi bersama obat pereda nyeri lain tanpa anjuran dokter untuk mencegah iritasi lambung'
    };
  }
  if (query.includes('dexamethasone') || query.includes('deksametason') || query.includes('cortidex')) {
    return {
      drugName: drugObj?.name || 'Dexamethasone 0.5 mg Tablet',
      indicationLabel: 'Obat Antiinflamasi & Antialergi Kuat (Kortikosteroid)',
      frequency: '2-3 x sehari 1 tablet',
      mealRelation: 'sesudah',
      timing: 'Pagi dan siang segera sesudah makan',
      isAntibioticMustFinish: false,
      specialInstructions: 'Wajib diminum sesudah makan. Jangan dihentikan tiba-tiba jika telah digunakan jangka panjang.'
    };
  }
  if (query.includes('prednisone') || query.includes('prednison')) {
    return {
      drugName: drugObj?.name || 'Prednisone 5 mg Tablet',
      indicationLabel: 'Obat Antiinflamasi & Imunosupresan (Kortikosteroid)',
      frequency: '1-3 x sehari 1 tablet',
      mealRelation: 'sesudah',
      timing: 'Pagi hari sesudah sarapan',
      isAntibioticMustFinish: false,
      specialInstructions: 'Minum di pagi hari bersama makanan untuk meminimalkan gangguan tidur dan iritasi lambung'
    };
  }
  if (query.includes('paracetamol') || query.includes('panadol') || query.includes('sanmol') || query.includes('pamol') || query.includes('dumin') || query.includes('tempra')) {
    const isDrop = query.includes('drop');
    const isSirup = query.includes('sirup') || query.includes('120') || query.includes('tempra');
    return {
      drugName: isDrop
        ? 'Paracetamol Drop Bayi 100 mg/mL'
        : (isSirup ? 'Paracetamol Sirup 120 mg/5 mL' : (drugObj?.name || 'Paracetamol 500 mg Tablet')),
      indicationLabel: isDrop ? 'Pereda Demam & Nyeri Bayi (Tetes Pipet)' : (isSirup ? 'Pereda Demam & Nyeri Anak (Sirup Manis)' : 'Pereda Demam & Nyeri Ringan-Sedang'),
      frequency: isDrop ? '3-4 x sehari sesuai pipet takar (bila demam)' : (isSirup ? '3-4 x sehari 1 sendok takar (bila demam)' : '3 x sehari 1 tablet (bila perlu)'),
      mealRelation: 'sesudah',
      timing: isDrop ? 'Tiap 4-6 jam bila demam tinggi > 38°C' : (isSirup ? 'Tiap 4-6 jam jika anak demam/nyeri sesudah makan' : 'Pagi, siang, dan malam sesudah makan (bila demam/nyeri)'),
      isAntibioticMustFinish: false,
      specialInstructions: isDrop
        ? 'Gunakan pipet takar resmi kemasan. Teteskan perlahan ke mulut bayi.'
        : (isSirup ? 'Kocok dahulu. Gunakan sendok takar obat resmi. Berhenti jika demam turun.' : 'Hentikan jika demam dan nyeri sudah reda. Jeda antar dosis minimal 4-6 jam.'),
      foodPrecautions: 'Hindari konsumsi alkohol selama meminum obat ini'
    };
  }
  if (query.includes('mefenamic') || query.includes('mefenamat') || query.includes('ponstan') || query.includes('mefinal')) {
    return {
      drugName: drugObj?.name || 'Asam Mefenamat 500 mg Kaplet',
      indicationLabel: 'Pereda Nyeri Gigi, Sakit Kepala & Nyeri Haid (OAINS)',
      frequency: '3 x sehari 1 kaplet',
      mealRelation: 'sesudah',
      timing: 'Segera SESUDAH makan (atau bersama makanan)',
      isAntibioticMustFinish: false,
      specialInstructions: 'Wajib diminum segera sesudah makan untuk mencegah nyeri lambung. Hentikan bila nyeri reda.',
      foodPrecautions: 'Hindari minum bersamaan dengan obat pereda nyeri lain atau alkohol'
    };
  }
  if (query.includes('ibuprofen') || query.includes('proris') || query.includes('bufect')) {
    const isSirup = query.includes('sirup') || query.includes('suspensi') || query.includes('100 mg/5');
    const is200 = query.includes('200');
    return {
      drugName: isSirup ? 'Ibuprofen Sirup Suspensi 100 mg/5 mL' : (drugObj?.name || `Ibuprofen ${is200 ? '200' : '400'} mg Tablet`),
      indicationLabel: isSirup ? 'Pereda Demam Tinggi & Radang Anak (Sirup)' : 'Pereda Nyeri, Radang & Demam (OAINS)',
      frequency: isSirup ? '3 x sehari 1 sendok takar sesudah makan' : '3 x sehari 1 tablet sesudah makan',
      mealRelation: 'sesudah',
      timing: 'Pagi, siang, dan malam sesudah makan',
      isAntibioticMustFinish: false,
      specialInstructions: isSirup
        ? 'Kocok dahulu. Wajib diminum sesudah makan agar lambung anak terlindungi.'
        : 'Wajib diminum sesudah makan dengan segelas air putih untuk melindungi lambung.'
    };
  }
  if (query.includes('diclofenac') || query.includes('diklofenak') || query.includes('voltaren') || query.includes('cataflam')) {
    const isGel = query.includes('gel') || query.includes('emulgel');
    const isKalium = query.includes('kalium') || query.includes('cataflam');
    if (isGel) {
      return {
        drugName: drugObj?.name || 'Voltaren Emulgel 1% Gel 20 g',
        indicationLabel: 'Gel Pereda Nyeri Sendi, Otot & Terkilir (Topikal)',
        frequency: '3-4 x sehari dioles tipis pada area nyeri',
        mealRelation: 'bebas',
        timing: 'Oleskan saat sendi/otot terasa sakit',
        isAntibioticMustFinish: false,
        specialInstructions: 'Oleskan dan pijat lembut pada area nyeri. Cuci tangan setelah mengoleskan obat.'
      };
    }
    return {
      drugName: isKalium ? 'Kalium Diklofenak 50 mg Tablet' : (drugObj?.name || 'Natrium Diklofenak 50 mg Tablet Enterik'),
      indicationLabel: isKalium ? 'Pereda Nyeri Akut Cepat & Sakit Gigi (OAINS)' : 'Pereda Nyeri Sendi & Radang Kronis (OAINS Enterik)',
      frequency: '2-3 x sehari 1 tablet sesudah makan',
      mealRelation: 'sesudah',
      timing: 'Pagi dan malam segera SESUDAH makan',
      isAntibioticMustFinish: false,
      specialInstructions: isKalium
        ? 'Minum segera sesudah makan dengan segelas air matang'
        : 'Ditelan utuh dengan segelas air setelah makan. Jangan dihancurkan karena salut enterik.'
    };
  }
  if (query.includes('meloxicam') || query.includes('mobic') || query.includes('flamic')) {
    const is15 = query.includes('15');
    return {
      drugName: drugObj?.name || `Meloxicam ${is15 ? '15' : '7.5'} mg Tablet`,
      indicationLabel: 'Pereda Radang Sendi, Rematik & Osteoartritis (OAINS)',
      frequency: '1 x sehari 1 tablet',
      mealRelation: 'sesudah',
      timing: 'Pagi hari sesudah sarapan',
      isAntibioticMustFinish: false,
      specialInstructions: 'Cukup diminum 1 kali sehari sesudah makan. Jangan menggandakan dosis.',
      foodPrecautions: 'Hindari obat pereda nyeri lain tanpa anjuran dokter'
    };
  }
  if (query.includes('ketorolac') || query.includes('toradol') || query.includes('remopain')) {
    return {
      drugName: drugObj?.name || 'Ketorolac 10 mg Tablet',
      indicationLabel: 'Pereda Nyeri Hebat Jangka Pendek Pasca Operasi / Trauma',
      frequency: '2-3 x sehari 1 tablet (maksimal 5 hari)',
      mealRelation: 'sesudah',
      timing: 'Tiap 8 jam segera sesudah makan',
      isAntibioticMustFinish: false,
      specialInstructions: '⚠️ HANYA untuk pemakaian jangka pendek maksimal 5 hari. Wajib sesudah makan.'
    };
  }
  if (query.includes('celecoxib') || query.includes('celebrex')) {
    const is200 = query.includes('200');
    return {
      drugName: drugObj?.name || `Celecoxib ${is200 ? '200' : '100'} mg Kapsul`,
      indicationLabel: 'Pereda Nyeri & Radang Sendi Selektif COX-2 (Ramah Lambung)',
      frequency: '1-2 x sehari 1 kapsul',
      mealRelation: 'sesudah',
      timing: 'Sesudah makan pagi dan malam',
      isAntibioticMustFinish: false,
      specialInstructions: 'Telan utuh kapsul dengan air putih sesudah makan'
    };
  }
  if (query.includes('piroxicam') || query.includes('piroksikam') || query.includes('feldene')) {
    const is20 = query.includes('20');
    return {
      drugName: drugObj?.name || `Piroxicam ${is20 ? '20' : '10'} mg Kapsul`,
      indicationLabel: 'Pereda Radang Sendi, Rematik & Asam Urat Akut (OAINS)',
      frequency: '1 x sehari 1 kapsul',
      mealRelation: 'sesudah',
      timing: 'Pagi hari sesudah sarapan',
      isAntibioticMustFinish: false,
      specialInstructions: 'Wajib diminum sesudah makan untuk melindungi dinding lambung'
    };
  }
  if (query.includes('eperisone') || query.includes('myonal') || query.includes('eperison')) {
    return {
      drugName: drugObj?.name || 'Eperisone HCl 50 mg Tablet',
      indicationLabel: 'Pelemas Otot / Pereda Kaku Leher, Pinggang & Spasme Otot',
      frequency: '3 x sehari 1 tablet',
      mealRelation: 'sesudah',
      timing: 'Pagi, siang, dan malam sesudah makan',
      isAntibioticMustFinish: false,
      specialInstructions: 'Dapat menimbulkan rasa lemas atau kantuk ringan pada sebagian pasien'
    };
  }
  if (query.includes('tramadol') || query.includes('ultracet') || query.includes('tramal')) {
    const isUltracet = query.includes('ultracet');
    return {
      drugName: drugObj?.name || (isUltracet ? 'Ultracet (Tramadol 37.5 mg + Paracetamol 325 mg) Tablet' : 'Tramadol 50 mg Kapsul'),
      indicationLabel: 'Pereda Nyeri Sedang hingga Berat (Analgesik Opioid)',
      frequency: '2-3 x sehari 1 tablet/kapsul (bila perlu)',
      mealRelation: 'sesudah',
      timing: 'Sesudah makan saat nyeri terasa hebat',
      isAntibioticMustFinish: false,
      specialInstructions: '⚠️ Dapat menyebabkan kantuk, pusing, atau mual. Dilarang mengemudi setelah minum obat.',
      foodPrecautions: 'Dilarang keras mengonsumsi alkohol bersama obat ini'
    };
  }
  if (query.includes('pronalges') || (query.includes('ketoprofen') && query.includes('supp'))) {
    return {
      drugName: drugObj?.name || 'Ketoprofen (Pronalges) 100 mg Suppositoria',
      indicationLabel: 'Pereda Nyeri Akut Cepat Tanpa Lewat Lambung (Suppositoria)',
      frequency: '1-2 x sehari 1 suppositoria',
      mealRelation: 'bebas',
      timing: 'Saat timbul nyeri hebat (atau sebelum tidur)',
      isAntibioticMustFinish: false,
      specialInstructions: '⚠️ Masukkan ke dalam anus/dubur. Buka pembungkus aluminium, basahi sedikit air, masukkan ujung lancip ke anus sambil berbaring miring.'
    };
  }

  // 6. Kolesterol, Asam Urat & Metabolik
  if (query.includes('simvastatin') || query.includes('zocor') || query.includes('cholestat') || query.includes('valemia')) {
    const is10 = query.includes('10');
    return {
      drugName: drugObj?.name || `Simvastatin ${is10 ? '10' : '20'} mg Tablet`,
      indicationLabel: 'Obat Penurun Kolesterol Jahat (LDL & Trigliserida)',
      frequency: '1 x sehari 1 tablet',
      mealRelation: 'sesudah',
      timing: 'Malam hari sebelum tidur (pukul 20:00 - 21:00)',
      isAntibioticMustFinish: false,
      specialInstructions: 'Sintesis kolesterol tubuh aktif di malam hari. Minum teratur setiap malam.',
      foodPrecautions: 'Kurangi konsumsi gorengan, santan, jeroan, dan hindari jus grapefruit'
    };
  }
  if (query.includes('atorvastatin') || query.includes('lipitor') || query.includes('atoris')) {
    const is40 = query.includes('40');
    return {
      drugName: drugObj?.name || `Atorvastatin ${is40 ? '40' : '20'} mg Tablet`,
      indicationLabel: 'Obat Penurun Kolesterol & Pencegah Plak Pembuluh Darah',
      frequency: '1 x sehari 1 tablet',
      mealRelation: 'sesudah',
      timing: 'Malam hari pada jam yang sama',
      isAntibioticMustFinish: false,
      specialInstructions: 'Minum teratur setiap hari. Lakukan kontrol profil lipid rutin.',
      foodPrecautions: 'Kurangi makanan tinggi lemak jenuh'
    };
  }
  if (query.includes('rosuvastatin') || query.includes('crestor') || query.includes('rosufer')) {
    const is20 = query.includes('20');
    return {
      drugName: drugObj?.name || `Rosuvastatin ${is20 ? '20' : '10'} mg Tablet`,
      indicationLabel: 'Obat Penurun Kolesterol LDL Kuat & Pencegah Aterosklerosis',
      frequency: '1 x sehari 1 tablet',
      mealRelation: 'sesudah',
      timing: 'Malam hari sebelum tidur pada jam yang sama',
      isAntibioticMustFinish: false,
      specialInstructions: 'Minum teratur setiap malam. Konsultasikan bila mengalami nyeri otot yang tak wajar.',
      foodPrecautions: 'Kurangi konsumsi lemak jenuh dan hindari alkohol'
    };
  }
  if (query.includes('fenofibrate') || query.includes('tricor') || query.includes('evothyl')) {
    const is300 = query.includes('300');
    return {
      drugName: drugObj?.name || `Fenofibrate ${is300 ? '300' : '100'} mg Kapsul`,
      indicationLabel: 'Obat Penurun Trigliserida Darah Tinggi',
      frequency: '1 x sehari 1 kapsul',
      mealRelation: 'bersama',
      timing: 'Bersama makan malam / makanan utama',
      isAntibioticMustFinish: false,
      specialInstructions: 'Wajib diminum bersama makanan untuk penyerapan obat yang optimal',
      foodPrecautions: 'Kurangi karbohidrat olahan, gula tinggi, dan makanan berlemak'
    };
  }
  if (query.includes('gemfibrozil') || query.includes('lopid')) {
    return {
      drugName: drugObj?.name || 'Gemfibrozil 300 mg Kapsul',
      indicationLabel: 'Obat Penurun Trigliserida & Pencegah Pankreatitis',
      frequency: '2 x sehari 1 kapsul',
      mealRelation: 'sebelum',
      timing: '30 menit sebelum sarapan dan makan malam',
      isAntibioticMustFinish: false,
      specialInstructions: 'Minum 30 menit sebelum makan'
    };
  }
  if (query.includes('allopurinol') || query.includes('zyloric') || query.includes('puricemia')) {
    const is300 = query.includes('300');
    return {
      drugName: drugObj?.name || `Allopurinol ${is300 ? '300' : '100'} mg Tablet`,
      indicationLabel: 'Obat Penurun Kadar Asam Urat Darah',
      frequency: '1 x sehari 1 tablet',
      mealRelation: 'sesudah',
      timing: 'Pagi hari sesudah sarapan',
      isAntibioticMustFinish: false,
      specialInstructions: 'Minum banyak air putih (minimal 2-3 liter/hari) untuk membantu ekskresi asam urat',
      foodPrecautions: 'Hindari emping/melinjo, jeroan, kacang-kacangan, daging merah, dan seafood tinggi purin'
    };
  }
  if (query.includes('febuxostat') || query.includes('adenuric')) {
    return {
      drugName: drugObj?.name || 'Febuxostat 40 mg Tablet',
      indicationLabel: 'Obat Penurun Asam Urat Selektif (Xanthine Oxidase Inhibitor)',
      frequency: '1 x sehari 1 tablet',
      mealRelation: 'sesudah',
      timing: 'Pagi hari sesudah makan',
      isAntibioticMustFinish: false,
      specialInstructions: 'Minum banyak air putih sepanjang hari. Pantau kadar asam urat secara teratur.'
    };
  }
  if (query.includes('colchicine') || query.includes('kolkisin') || query.includes('reucid')) {
    return {
      drugName: drugObj?.name || 'Colchicine 0.5 mg Tablet',
      indicationLabel: 'Pereda Nyeri & Radang Serangan Asam Urat Akut (Gout Attack)',
      frequency: '2-3 x sehari 1 tablet saat serangan akut',
      mealRelation: 'sesudah',
      timing: 'Sesudah makan saat timbul serangan radang sendi',
      isAntibioticMustFinish: false,
      specialInstructions: 'Hentikan pemakaian bila timbul diare berat, mual, atau muntah'
    };
  }

  // 7. Batuk, Pilek, Asma & Alergi
  if (query.includes('cetirizine') || query.includes('incidal') || query.includes('ryvel') || query.includes('cerini')) {
    const isSirup = query.includes('sirup') || query.includes('5 mg/5');
    return {
      drugName: isSirup ? 'Cetirizine Sirup 5 mg/5 mL' : (drugObj?.name || 'Cetirizine 10 mg Tablet'),
      indicationLabel: isSirup ? 'Pereda Alergi, Bersin & Gatal Anak (Sirup)' : 'Obat Pereda Alergi, Gatal, Bersin & Biduran',
      frequency: isSirup ? '1 x sehari 1 sendok takar (5 mL)' : '1 x sehari 1 tablet',
      mealRelation: 'sesudah',
      timing: 'Malam hari sebelum tidur',
      isAntibioticMustFinish: false,
      specialInstructions: isSirup
        ? 'Gunakan sendok takar obat resmi. Dapat menimbulkan kantuk ringan.'
        : 'Dapat menimbulkan rasa kantuk ringan. Hindari mengemudi setelah minum obat.',
      foodPrecautions: 'Hindari konsumsi alkohol'
    };
  }
  if (query.includes('loratadine') || query.includes('claritin') || query.includes('alloris')) {
    return {
      drugName: drugObj?.name || 'Loratadine 10 mg Tablet',
      indicationLabel: 'Pereda Alergi & Bersin Tanpa Kantuk (Antihistamin)',
      frequency: '1 x sehari 1 tablet',
      mealRelation: 'sesudah',
      timing: 'Pagi atau malam hari sesudah makan',
      isAntibioticMustFinish: false,
      specialInstructions: 'Obat alergi yang minim menyebabkan rasa kantuk'
    };
  }
  if (query.includes('desloratadine') || query.includes('aerius')) {
    return {
      drugName: drugObj?.name || 'Desloratadine 5 mg Tablet',
      indicationLabel: 'Antialergi Generasi Baru Tanpa Kantuk (Rinitis & Urtikaria)',
      frequency: '1 x sehari 1 tablet',
      mealRelation: 'sesudah',
      timing: 'Pagi hari sesudah sarapan',
      isAntibioticMustFinish: false,
      specialInstructions: 'Tidak menyebabkan kantuk pada sebagian besar pengguna'
    };
  }
  if (query.includes('fexofenadine') || query.includes('telfast')) {
    return {
      drugName: drugObj?.name || 'Fexofenadine (Telfast) 120 mg Tablet',
      indicationLabel: 'Pereda Alergi & Bersin-Bersin Tanpa Kantuk (Antihistamin)',
      frequency: '1 x sehari 1 tablet',
      mealRelation: 'sebelum',
      timing: 'Pagi hari sebelum makan dengan segelas air putih',
      isAntibioticMustFinish: false,
      specialInstructions: 'Hindari minum bersama jus buah (jeruk/apel) karena menghambat penyerapan obat'
    };
  }
  if (query.includes('salbutamol') || query.includes('ventolin') || query.includes('astalin')) {
    const isInhaler = query.includes('inhaler') || query.includes('mdi') || query.includes('ventolin');
    const is4 = query.includes('4');
    return {
      drugName: isInhaler ? 'Salbutamol Inhaler MDI (Ventolin)' : (drugObj?.name || `Salbutamol ${is4 ? '4' : '2'} mg Tablet`),
      indicationLabel: isInhaler ? 'Pereda Sesak Napas Cepat & Serangan Asma (Inhaler Semprot)' : 'Obat Pelega Saluran Napas / Bronkodilator Asma',
      frequency: isInhaler ? '1-2 semprotan saat sesak (bila perlu)' : '3 x sehari 1 tablet',
      mealRelation: isInhaler ? 'bebas' : 'sesudah',
      timing: isInhaler ? 'Saat timbul serangan sesak napas / mengi' : 'Pagi, siang, dan malam sesudah makan',
      isAntibioticMustFinish: false,
      specialInstructions: isInhaler
        ? 'Kocok inhaler -> buang napas -> rapatkan bibir di mouthpiece -> hisap perlahan sambil tekan canister -> tahan napas 10 detik -> berkumur dengan air.'
        : 'Dapat menimbulkan sensasi jantung berdebar atau sedikit gemetar (efek normal sementara).'
    };
  }
  if (query.includes('symbicort')) {
    return {
      drugName: drugObj?.name || 'Symbicort Turbuhaler 160/4.5 mcg',
      indicationLabel: 'Pengontrol & Pelega Asma/PPOK (Kombinasi Steroid + LABA)',
      frequency: '1-2 hisapan 2 x sehari (atau sesuai anjuran)',
      mealRelation: 'bebas',
      timing: 'Pagi dan malam hari (tiap 12 jam)',
      isAntibioticMustFinish: false,
      specialInstructions: '⚠️ Putar merah ke kanan lalu ke kiri sampai KLIK -> hisap dalam & kuat -> tahan napas 10 detik -> WAJIB BERKUMUR air putih dan buang setelah pakai untuk cegah sariawan/jamur mulut.'
    };
  }
  if (query.includes('seretide')) {
    return {
      drugName: drugObj?.name || 'Seretide Diskus 250 mcg Inhaler',
      indicationLabel: 'Inhaler Pengontrol Asma & Sesak Napas (Fluticasone + Salmeterol)',
      frequency: '1 hisapan 2 x sehari (pagi dan malam)',
      mealRelation: 'bebas',
      timing: 'Tiap 12 jam (pagi dan malam)',
      isAntibioticMustFinish: false,
      specialInstructions: '⚠️ Buka diskus, geser tuas hingga klik, hisap kuat dan dalam, tahan napas 10 detik. WAJIB berkumur air putih lalu buang setelah pakai.'
    };
  }
  if (query.includes('combivent')) {
    return {
      drugName: drugObj?.name || 'Combivent Respules (Salbutamol + Ipratropium) Nebu',
      indicationLabel: 'Cairan Nebulisasi Pelega Saluran Napas & Asma Akut',
      frequency: '1 respule tiap 6-8 jam via nebulizer (bila perlu)',
      mealRelation: 'bebas',
      timing: 'Saat sesak napas akut via alat nebulizer',
      isAntibioticMustFinish: false,
      specialInstructions: 'Masukkan seluruh isi 1 respule ke dalam chamber masker nebulizer. Hirup uap hingga cairan habis (10-15 menit).'
    };
  }
  if (query.includes('budesonide') && (query.includes('respules') || query.includes('nebu') || query.includes('pulmicort'))) {
    const is05 = query.includes('0.5');
    return {
      drugName: drugObj?.name || `Budesonide Respules ${is05 ? '0.5' : '0.25'} mg/2 mL Nebu`,
      indicationLabel: 'Cairan Nebulisasi Antiinflamasi Saluran Napas Anak/Dewasa',
      frequency: '1-2 x sehari 1 respule via nebulizer',
      mealRelation: 'bebas',
      timing: 'Pagi dan malam hari via alat nebulizer',
      isAntibioticMustFinish: false,
      specialInstructions: 'Kumur air putih atau seka wajah anak dengan handuk basah setelah nebulisasi untuk mencegah iritasi kulit/sariawan.'
    };
  }
  if (query.includes('ambroxol') || query.includes('mucos') || query.includes('mucopect')) {
    const isSirup = query.includes('sirup') || query.includes('15 mg');
    return {
      drugName: isSirup ? 'Ambroxol Sirup 15 mg/5 mL' : (drugObj?.name || 'Ambroxol 30 mg Tablet'),
      indicationLabel: isSirup ? 'Obat Pengencer Dahak Batuk Anak (Sirup)' : 'Obat Pengencer Dahak Batuk Berdahak',
      frequency: isSirup ? '3 x sehari 1 sendok takar sesudah makan' : '3 x sehari 1 tablet',
      mealRelation: 'sesudah',
      timing: 'Pagi, siang, dan malam sesudah makan',
      isAntibioticMustFinish: false,
      specialInstructions: isSirup
        ? 'Kocok dahulu sebelum diminum. Berikan banyak minum air putih hangat.'
        : 'Bantu efektivitas pengencer dahak dengan banyak minum air putih hangat'
    };
  }
  if (query.includes('acetylcysteine') || query.includes('asetilsistein') || query.includes('fluimucil')) {
    const isEff = query.includes('effervescent') || query.includes('600');
    return {
      drugName: isEff ? 'N-Acetylcysteine 600 mg Tablet Effervescent' : (drugObj?.name || 'N-Acetylcysteine 200 mg Kapsul'),
      indicationLabel: isEff ? 'Pengencer Dahak Kental & Antioksidan Saluran Napas (Effervescent)' : 'Obat Pengencer Dahak Kental / Mukolitik',
      frequency: isEff ? '1 x sehari 1 tablet effervescent' : '3 x sehari 1 kapsul sesudah makan',
      mealRelation: 'sesudah',
      timing: isEff ? 'Pagi atau malam sesudah makan' : 'Pagi, siang, dan malam sesudah makan',
      isAntibioticMustFinish: false,
      specialInstructions: isEff
        ? 'Larutkan 1 tablet ke dalam 1 gelas air putih (200 mL) sampai larut sempurna sebelum diminum.'
        : 'Bantu dengan banyak minum air putih hangat untuk mengencerkan dahak'
    };
  }
  if (query.includes('erdosteine') || query.includes('vectrine') || query.includes('erdostein')) {
    return {
      drugName: drugObj?.name || 'Erdosteine 300 mg Kapsul',
      indicationLabel: 'Pengencer Dahak Mukolitik Saluran Napas Akut & Kronis',
      frequency: '2-3 x sehari 1 kapsul',
      mealRelation: 'sesudah',
      timing: 'Pagi, siang, dan malam sesudah makan',
      isAntibioticMustFinish: false,
      specialInstructions: 'Minum banyak air putih hangat untuk membantu mengencerkan dahak'
    };
  }
  if (query.includes('ctm') || query.includes('chlorpheniramine') || query.includes('klorfeniramin')) {
    return {
      drugName: drugObj?.name || 'CTM (Chlorpheniramine) 4 mg Tablet',
      indicationLabel: 'Pereda Alergi, Gatal & Pilek Alergi',
      frequency: '3 x sehari 1 tablet',
      mealRelation: 'sesudah',
      timing: 'Pagi, siang, dan malam sesudah makan',
      isAntibioticMustFinish: false,
      specialInstructions: '⚠️ MENYEBABKAN KANTUK. Dilarang mengemudi atau mengoperasikan mesin setelah minum obat ini.'
    };
  }
  if (query.includes('dextromethorphan') || query.includes('dextro') || query.includes('dekstrometorfan')) {
    return {
      drugName: drugObj?.name || 'Dextromethorphan HBr Sirup',
      indicationLabel: 'Obat Penekan Batuk Kering Tidak Berdahak (Antitusif)',
      frequency: '3 x sehari 1-2 sendok takar',
      mealRelation: 'sesudah',
      timing: 'Pagi, siang, dan malam sesudah makan',
      isAntibioticMustFinish: false,
      specialInstructions: 'HANYA untuk batuk kering tanpa dahak. Gunakan sendok takar resmi.'
    };
  }
  if (query.includes('guaifenesin') || query.includes('glyceryl guaiacolate') || query.includes('gg')) {
    return {
      drugName: drugObj?.name || 'Guaifenesin (GG) 100 mg Tablet',
      indicationLabel: 'Ekspektoran Pelancar & Pengencer Dahak Batuk',
      frequency: '3-4 x sehari 1-2 tablet',
      mealRelation: 'sesudah',
      timing: 'Sesudah makan dengan segelas air hangat',
      isAntibioticMustFinish: false,
      specialInstructions: 'Perbanyak minum air hangat untuk memaksimalkan pengeluaran dahak'
    };
  }
  if (query.includes('actifed')) {
    return {
      drugName: drugObj?.name || 'Actifed Kuning Sirup (Pseudoephedrine + Triprolidine)',
      indicationLabel: 'Pereda Pilek, Hidung Tersumbat & Bersin Alergi',
      frequency: '3 x sehari 1 sendok takar (5 mL)',
      mealRelation: 'sesudah',
      timing: 'Pagi, siang, dan malam sesudah makan',
      isAntibioticMustFinish: false,
      specialInstructions: 'Dapat menimbulkan kantuk. Berhati-hati pada penderita hipertensi.'
    };
  }
  if (query.includes('iliadin') || query.includes('oxymetazoline')) {
    return {
      drugName: drugObj?.name || 'Iliadin Semprot Hidung 0.05% 10 mL',
      indicationLabel: 'Pereda Hidung Tersumbat Akut / Dekongestan Hidung Topikal',
      frequency: '2 x sehari 2-3 semprot pada tiap lubang hidung',
      mealRelation: 'bebas',
      timing: 'Pagi dan malam hari',
      isAntibioticMustFinish: false,
      specialInstructions: '⚠️ Maksimal pemakaian 3-5 HARI BERTURUT-TURUT untuk mencegah hidung tersumbat bertambah parah (rhinitis medicamentosa).'
    };
  }
  if (query.includes('avamys') || query.includes('fluticasone furoate')) {
    return {
      drugName: drugObj?.name || 'Avamys (Fluticasone Furoate) Nasal Spray 120 Dosis',
      indicationLabel: 'Semprot Hidung Kortikosteroid Rinitis Alergi Menahun',
      frequency: '1 x sehari 2 semprot pada tiap lubang hidung',
      mealRelation: 'bebas',
      timing: 'Pagi hari pada waktu yang sama setiap hari',
      isAntibioticMustFinish: false,
      specialInstructions: 'Kocok botol -> bersihkan hidung -> tundukkan kepala sedikit -> semprotkan menjauhi sekat tengah hidung (ke arah luar/telinga).'
    };
  }

  // 8. Saraf, Vertigo, Nyeri Neuropati & Psikiatri
  if (query.includes('betahistine') || query.includes('betahistin') || query.includes('merislon') || query.includes('mertigo')) {
    const dose = query.includes('24') ? '24' : (query.includes('12') ? '12' : '6');
    return {
      drugName: drugObj?.name || `Betahistine ${dose} mg Tablet`,
      indicationLabel: 'Pereda Pusing Berputar & Sensasi Melayang (Vertigo / Meniere)',
      frequency: '3 x sehari 1 tablet',
      mealRelation: 'sesudah',
      timing: 'Pagi, siang, dan malam sesudah makan',
      isAntibioticMustFinish: false,
      specialInstructions: 'Minum sesudah makan untuk mencegah gangguan lambung'
    };
  }
  if (query.includes('flunarizine') || query.includes('flunarizin') || query.includes('sibelium')) {
    const is10 = query.includes('10');
    return {
      drugName: drugObj?.name || `Flunarizine ${is10 ? '10' : '5'} mg Tablet`,
      indicationLabel: 'Pencegah Serangan Migrain & Gangguan Vertigo Vestibular',
      frequency: '1 x sehari 1 tablet',
      mealRelation: 'sesudah',
      timing: 'Malam hari sebelum tidur',
      isAntibioticMustFinish: false,
      specialInstructions: 'Dapat menimbulkan kantuk dan peningkatan nafsu makan. Minum sebelum tidur malam.'
    };
  }
  if (query.includes('dimenhydrinate') || query.includes('antimo') || query.includes('dimenhidrinat')) {
    return {
      drugName: drugObj?.name || 'Dimenhydrinate (Antimo) 50 mg Tablet',
      indicationLabel: 'Pencegah & Pereda Mabuk Perjalanan (Darat, Laut, Udara)',
      frequency: '1 tablet 30 menit sebelum bepergian',
      mealRelation: 'sesudah',
      timing: '30 menit SEBELUM berangkat bepergian',
      isAntibioticMustFinish: false,
      specialInstructions: '⚠️ MENYEBABKAN KANTUK. Dilarang mengemudikan kendaraan setelah minum obat ini.'
    };
  }
  if (query.includes('gabapentin') || query.includes('neurontin') || query.includes('sipentin')) {
    const is300 = query.includes('300');
    return {
      drugName: drugObj?.name || `Gabapentin ${is300 ? '300' : '100'} mg Kapsul`,
      indicationLabel: 'Pereda Nyeri Saraf, Kesemutan Hebat & Neuropati Diabetik',
      frequency: '1-3 x sehari 1 kapsul',
      mealRelation: 'sesudah',
      timing: 'Malam hari sebelum tidur (atau pagi dan malam)',
      isAntibioticMustFinish: false,
      specialInstructions: 'Dapat menimbulkan rasa kantuk atau pusing di awal pemakaian. Jangan menghentikan obat secara tiba-tiba.'
    };
  }
  if (query.includes('pregabalin') || query.includes('lyrica')) {
    return {
      drugName: drugObj?.name || 'Pregabalin (Lyrica) 75 mg Kapsul',
      indicationLabel: 'Pereda Nyeri Saraf Neuropati & Fibromyalgia',
      frequency: '2 x sehari 1 kapsul',
      mealRelation: 'sesudah',
      timing: 'Pagi dan malam hari sesudah makan',
      isAntibioticMustFinish: false,
      specialInstructions: 'Minum teratur pada jam yang sama. Hindari konsumsi alkohol.'
    };
  }
  if (query.includes('amitriptyline') || query.includes('amitriptilin')) {
    return {
      drugName: drugObj?.name || 'Amitriptyline 25 mg Tablet',
      indicationLabel: 'Pereda Nyeri Saraf Kronis, Sakit Kepala Tegang & Insomnia',
      frequency: '1 x sehari 1/2 - 1 tablet',
      mealRelation: 'sesudah',
      timing: 'Malam hari 1-2 jam sebelum tidur',
      isAntibioticMustFinish: false,
      specialInstructions: 'Menyebabkan kantuk dan mulut terasa kering. Minum pada malam hari.'
    };
  }
  if (query.includes('alprazolam') || query.includes('xanax') || query.includes('alganax')) {
    const is1 = query.includes('1');
    return {
      drugName: drugObj?.name || `Alprazolam ${is1 ? '1' : '0.5'} mg Tablet`,
      indicationLabel: 'Pereda Gangguan Cemas Akut & Panik (Psikotropika Gol. IV)',
      frequency: '1-2 x sehari sesuai resep dokter',
      mealRelation: 'sesudah',
      timing: 'Malam hari sebelum tidur atau saat serangan cemas',
      isAntibioticMustFinish: false,
      specialInstructions: '⚠️ OBAT KERAS PSIKOTROPIKA. Menyebabkan kantuk berat. Jangan dihentikan tiba-tiba dan jangan dikonsumsi bersama alkohol.'
    };
  }
  if (query.includes('diazepam') || query.includes('valium') || query.includes('stesolid')) {
    const is5 = query.includes('5');
    return {
      drugName: drugObj?.name || `Diazepam ${is5 ? '5' : '2'} mg Tablet`,
      indicationLabel: 'Penenang, Antikejang & Pelemas Otot (Psikotropika)',
      frequency: '1-2 x sehari 1 tablet',
      mealRelation: 'sesudah',
      timing: 'Malam hari sebelum tidur',
      isAntibioticMustFinish: false,
      specialInstructions: '⚠️ Menyebabkan kantuk dan relaksasi otot. Dilarang mengemudi.'
    };
  }
  if (query.includes('clobazam') || query.includes('frisium')) {
    return {
      drugName: drugObj?.name || 'Clobazam 10 mg Tablet',
      indicationLabel: 'Pereda Kecemasan Berat & Tambahan Terapi Kejang',
      frequency: '1-2 x sehari 1 tablet',
      mealRelation: 'sesudah',
      timing: 'Malam hari sebelum tidur',
      isAntibioticMustFinish: false,
      specialInstructions: 'Konsumsi sesuai dosis tepat dokter. Jangan menambah atau menghentikan dosis sendiri.'
    };
  }

  // 9. Salep, Krim & Dermatologi Topikal
  if (query.includes('hydrocortisone') || query.includes('hidrokortison')) {
    const is25 = query.includes('2.5');
    return {
      drugName: drugObj?.name || `Hydrocortisone Krim ${is25 ? '2.5' : '1'}% 5 g`,
      indicationLabel: 'Krim Pereda Radang Kulit, Eksim, Gatal & Alergi Ringan',
      frequency: '2-3 x sehari dioles tipis pada kulit yang sakit',
      mealRelation: 'bebas',
      timing: 'Pagi dan malam setelah mandi pada kulit bersih',
      isAntibioticMustFinish: false,
      specialInstructions: 'Oleskan tipis-tipis saja pada area kulit yang merah/gatal. Jangan dioleskan pada luka terbuka bernanah.'
    };
  }
  if (query.includes('betamethasone') || query.includes('betametason')) {
    return {
      drugName: drugObj?.name || 'Betamethasone Valerate Krim 0.1% 5 g',
      indicationLabel: 'Krim Antiinflamasi & Antialergi Kulit Sedang-Kuat',
      frequency: '2 x sehari dioles tipis',
      mealRelation: 'bebas',
      timing: 'Pagi dan malam setelah mandi',
      isAntibioticMustFinish: false,
      specialInstructions: 'Oleskan tipis pada area yang radang. Hindari penggunaan jangka panjang di area wajah.'
    };
  }
  if (query.includes('mometasone') || query.includes('elocon')) {
    return {
      drugName: drugObj?.name || 'Mometasone Furoate (Elocon) Krim 0.1% 10 g',
      indicationLabel: 'Krim Kortikosteroid Kuat untuk Dermatitis & Psoriasis',
      frequency: '1 x sehari dioles tipis',
      mealRelation: 'bebas',
      timing: 'Malam hari sesudah mandi pada kulit bersih',
      isAntibioticMustFinish: false,
      specialInstructions: 'Cukup dioleskan 1 kali sehari secara tipis pada lesi kulit.'
    };
  }
  if (query.includes('mupirocin') || query.includes('bactoderm') || query.includes('mupirosin')) {
    return {
      drugName: drugObj?.name || 'Mupirocin (Bactoderm) Salep 2% 10 g',
      indicationLabel: 'Salep Antibiotik Infeksi Bakteri Kulit, Impetigo & Folikulitis',
      frequency: '3 x sehari dioles tipis pada luka',
      mealRelation: 'bebas',
      timing: 'Pagi, siang, dan malam setelah luka dibersihkan',
      isAntibioticMustFinish: true,
      specialInstructions: 'Bersihkan luka terlebih dahulu sebelum mengoleskan salep. Gunakan selama 5-10 hari.'
    };
  }
  if (query.includes('gentamicin') || query.includes('gentamisin')) {
    return {
      drugName: drugObj?.name || 'Gentamicin Salep Kulit 0.1% 5 g',
      indicationLabel: 'Salep Antibiotik Luka Bernanah, Bisul & Infeksi Bakteri',
      frequency: '3-4 x sehari dioles tipis',
      mealRelation: 'bebas',
      timing: 'Setelah membersihkan luka dengan kassa steril',
      isAntibioticMustFinish: true,
      specialInstructions: 'Oleskan tipis pada area luka yang terinfeksi bakteri'
    };
  }
  if (query.includes('permethrin') || query.includes('scabimite') || query.includes('permetrin')) {
    return {
      drugName: drugObj?.name || 'Permethrin (Scabimite) Krim 5% 30 g',
      indicationLabel: 'Krim Pembasmi Kutu Kudis / Scabies (Gatal Malam Hari)',
      frequency: '1 kali aplikasi malam hari (ulangi 1 minggu kemudian bila perlu)',
      mealRelation: 'bebas',
      timing: 'Malam hari sebelum tidur',
      isAntibioticMustFinish: false,
      specialInstructions: '⚠️ Oleskan merata ke seluruh tubuh dari bawah dagu/leher hingga sela jari kaki. Diamkan 8-12 jam semalaman, lalu bilas bersih saat mandi pagi.'
    };
  }
  if (query.includes('bioplacenton')) {
    return {
      drugName: drugObj?.name || 'Bioplacenton Gel 15 g',
      indicationLabel: 'Gel Penyembuh Luka Bakar, Melepuh & Luka Bernanah',
      frequency: '4-6 x sehari dioles tipis pada luka',
      mealRelation: 'bebas',
      timing: 'Oleskan secara teratur pada luka yang bersih',
      isAntibioticMustFinish: false,
      specialInstructions: 'Bersihkan luka terlebih dahulu, oleskan gel tipis-tipis untuk mempercepat regenerasi kulit'
    };
  }
  if (query.includes('burnazin') || query.includes('silver sulfadiazine')) {
    return {
      drugName: drugObj?.name || 'Burnazin (Silver Sulfadiazine) Krim 35 g',
      indicationLabel: 'Krim Antibakteri Khusus Luka Bakar Tingkat II & III',
      frequency: '1-2 x sehari dioleskan pada luka bakar',
      mealRelation: 'bebas',
      timing: 'Setelah luka bakar dibersihkan dengan NaCl',
      isAntibioticMustFinish: false,
      specialInstructions: 'Oleskan setebal 1-2 mm pada luka bakar menggunakan sarung tangan/spatula steril'
    };
  }

  // 10. Tetes Mata, Tetes Telinga & Obat Kumur
  if (query.includes('xitrol') || query.includes('cendo xitrol')) {
    return {
      drugName: drugObj?.name || 'Cendo Xitrol Tetes Mata 5 mL',
      indicationLabel: 'Tetes Mata Radang & Infeksi Bakteri (Kombinasi)',
      frequency: '4-6 x sehari 1-2 tetes pada mata yang sakit',
      mealRelation: 'bebas',
      timing: 'Teteskan tiap 3-4 jam pada mata yang sakit',
      isAntibioticMustFinish: true,
      specialInstructions: '⚠️ Cuci tangan. Jangan sentuh ujung penetes ke mata. Gunakan maksimal 30 HARI setelah segel dibuka.'
    };
  }
  if (query.includes('cenfresh') || query.includes('cendo cenfresh') || query.includes('artificial tears') || query.includes('air mata buatan') || query.includes('lyteers')) {
    const isLyteers = query.includes('lyteers');
    return {
      drugName: drugObj?.name || (isLyteers ? 'Cendo Lyteers Tetes Mata 15 mL' : 'Cendo Cenfresh Tetes Mata Minidose'),
      indicationLabel: 'Tetes Mata Air Mata Buatan / Pelumas Mata Kering & Iritasi',
      frequency: '3-4 x sehari 1-2 tetes',
      mealRelation: 'bebas',
      timing: 'Saat mata terasa kering, lelah, atau perih',
      isAntibioticMustFinish: false,
      specialInstructions: isLyteers
        ? 'Gunakan maksimal 30 hari setelah dibuka. Jangan biarkan ujung botol menyentuh mata.'
        : 'Tutup kembali wadah minidose setelah pakai. Habiskan dalam waktu 3x24 jam setelah dibuka.'
    };
  }
  if (query.includes('tarivid') || query.includes('ofloxacin otic') || (query.includes('tetes telinga') && query.includes('ofloxacin'))) {
    return {
      drugName: drugObj?.name || 'Tarivid (Ofloxacin) Tetes Telinga 5 mL',
      indicationLabel: 'Tetes Telinga Antibiotik Infeksi Telinga Luar/Tengah',
      frequency: '2 x sehari 6-10 tetes pada liang telinga',
      mealRelation: 'bebas',
      timing: 'Pagi dan malam hari',
      isAntibioticMustFinish: true,
      specialInstructions: '⚠️ Miringkan kepala, teteskan ke liang telinga, tahan posisi miring 3-5 menit agar cairan obat meresap.'
    };
  }
  if (query.includes('forumen') || query.includes('docusate') || query.includes('pelunak kotoran telinga')) {
    return {
      drugName: drugObj?.name || 'Forumen (Docusate) Tetes Telinga 10 mL',
      indicationLabel: 'Tetes Telinga Pelunak Gumpalan Kotoran Telinga (Serumen)',
      frequency: 'Teteskan secukupnya pada liang telinga malam hari berturut-turut (maks 2 malam)',
      mealRelation: 'bebas',
      timing: 'Malam hari sebelum tidur',
      isAntibioticMustFinish: false,
      specialInstructions: '⚠️ Teteskan ke telinga sambil miringkan kepala selama 5 menit. Sumbat dengan kapas bersih. Jangan digunakan jika gendang telinga robek.'
    };
  }
  if (query.includes('erlamycetin') || (query.includes('kloramfenikol') && (query.includes('tetes') || query.includes('salep')))) {
    const isTelinga = query.includes('telinga');
    return {
      drugName: drugObj?.name || (isTelinga ? 'Erlamycetin (Kloramfenikol) Tetes Telinga 1%' : 'Erlamycetin Tetes Mata 0.5% 10 mL'),
      indicationLabel: isTelinga ? 'Tetes Telinga Antibiotik Infeksi Liang Telinga' : 'Tetes Mata Antibiotik Infeksi Bakteri Mata / Belekan',
      frequency: isTelinga ? '3 x sehari 2-3 tetes pada telinga sakit' : '3-4 x sehari 1-2 tetes pada mata sakit',
      mealRelation: 'bebas',
      timing: 'Pagi, siang, dan malam hari',
      isAntibioticMustFinish: true,
      specialInstructions: '⚠️ Habiskan sesuai anjuran. Gunakan maksimal 30 hari setelah segel botol dibuka.'
    };
  }
  if (query.includes('betadine gargle') || query.includes('povidone gargle') || query.includes('obat kumur')) {
    return {
      drugName: drugObj?.name || 'Betadine Gargle (Obat Kumur Povidone 1%) 100 mL',
      indicationLabel: 'Obat Kumur Antiseptik Radang Tenggorokan, Sariawan & Bau Mulut',
      frequency: '3-5 x sehari 15 mL (kumur 30 detik)',
      mealRelation: 'sesudah',
      timing: 'Sesudah sikat gigi / makan',
      isAntibioticMustFinish: false,
      specialInstructions: '⚠️ Tuang 15 mL ke tutup botol, masukkan ke mulut, dongakkan kepala 45°, kumur hingga pangkal tenggorokan (gargle) selama 30 detik. JANGAN DITELAN!'
    };
  }

  // 11. Pediatrik, Sirup Anak & Probiotik
  if (query.includes('interlac') || query.includes('reuteri')) {
    const isDrop = query.includes('drop');
    return {
      drugName: drugObj?.name || (isDrop ? 'Interlac Drop Bayi (Probiotik) 5 mL' : 'Interlac Sachet Serbuk Probiotik'),
      indicationLabel: 'Probiotik Pemelihara Kesehatan Saluran Cerna & Kolik/Diare Bayi',
      frequency: isDrop ? '1 x sehari 5 tetes' : '1 x sehari 1 sachet',
      mealRelation: 'bebas',
      timing: 'Pagi atau siang hari bersama suapan makanan/susu',
      isAntibioticMustFinish: false,
      specialInstructions: isDrop
        ? '⚠️ Kocok botol baik-baik sebelum diteteskan. JANGAN dicampur dengan cairan/susu panas >40°C karena bakteri baik akan mati.'
        : 'Larutkan dalam sedikit air/susu suhu ruang. JANGAN dicampur dengan air panas.'
    };
  }
  if (query.includes('lacto-b') || query.includes('lacto b')) {
    return {
      drugName: drugObj?.name || 'Lacto-B Sachet Serbuk Probiotik',
      indicationLabel: 'Probiotik Serbuk Pemulih Flora Usus Saat Diare / Kembung Anak',
      frequency: '1-3 x sehari 1 sachet',
      mealRelation: 'bersama',
      timing: 'Campurkan dengan makanan atau susu anak',
      isAntibioticMustFinish: false,
      specialInstructions: '⚠️ Campurkan langsung ke dalam susu, makanan, atau air minum dingin/suhu ruang. JANGAN dicampur air panas!'
    };
  }
  if (query.includes('apialys')) {
    const isDrop = query.includes('drop');
    return {
      drugName: drugObj?.name || (isDrop ? 'Apialys Drop Bayi 10 mL' : 'Apialys Sirup Multivitamin Anak 100 mL'),
      indicationLabel: 'Multivitamin Pertumbuhan, Daya Tahan & Penambah Nafsu Makan',
      frequency: isDrop ? '1 x sehari sesuai pipet takar (0.3 - 0.6 mL)' : '1 x sehari 1 sendok takar (5 mL)',
      mealRelation: 'sesudah',
      timing: 'Pagi hari sesudah sarapan',
      isAntibioticMustFinish: false,
      specialInstructions: 'Kocok dahulu sebelum diminum. Gunakan pipet atau sendok takar resmi.'
    };
  }
  if (query.includes('curcuma')) {
    return {
      drugName: drugObj?.name || 'Curcuma Plus Sirup Penambah Nafsu Makan',
      indicationLabel: 'Suplemen Temulawak Penambah Nafsu Makan & Daya Tahan Anak',
      frequency: '1-2 x sehari 1 sendok takar (5 mL)',
      mealRelation: 'sesudah',
      timing: 'Pagi dan malam sesudah makan',
      isAntibioticMustFinish: false,
      specialInstructions: 'Kocok dahulu sebelum diminum'
    };
  }
  if (query.includes('ferriz')) {
    return {
      drugName: drugObj?.name || 'Ferriz Drop Zat Besi Bayi 15 mL',
      indicationLabel: 'Suplemen Zat Besi Cair Pencegah Stunting & Anemia Defisiensi Besi Bayi',
      frequency: '1 x sehari sesuai pipet takar dokter',
      mealRelation: 'sesudah',
      timing: 'Pagi hari sesudah makan/menyusu',
      isAntibioticMustFinish: false,
      specialInstructions: 'Gunakan pipet tetes resmi. Feses bayi dapat berwarna agak gelap (efek normal zat besi).'
    };
  }
  if (query.includes('maltofer')) {
    const isKunyah = query.includes('kunyah') || query.includes('tablet');
    return {
      drugName: drugObj?.name || (isKunyah ? 'Maltofer Tablet Kunyah Zat Besi' : 'Maltofer Sirup Zat Besi Anak 150 mL'),
      indicationLabel: 'Suplemen Zat Besi (Iron Polymaltose Complex) Ramah Lambung',
      frequency: '1 x sehari 1 tablet kunyah / sendok takar',
      mealRelation: 'sesudah',
      timing: 'Pagi hari sesudah sarapan',
      isAntibioticMustFinish: false,
      specialInstructions: isKunyah
        ? 'Dapat dikunyah atau ditelan langsung dengan segelas air sesudah makan'
        : 'Kocok dahulu sebelum diminum. Gunakan sendok takar resmi.'
    };
  }
  if (query.includes('rhinos neo')) {
    return {
      drugName: drugObj?.name || 'Rhinos Neo Drop Bayi 10 mL',
      indicationLabel: 'Pereda Hidung Tersumbat & Pilek Bayi (Dekongestan Oral)',
      frequency: '3 x sehari sesuai pipet takar usia',
      mealRelation: 'sesudah',
      timing: 'Pagi, siang, dan malam sesudah minum susu/makan',
      isAntibioticMustFinish: false,
      specialInstructions: 'Gunakan pipet tetes resmi kemasan sesuai takaran usia anak'
    };
  }

  // 12. Vitamin, Mineral & Suplemen
  if (query.includes('kalsium laktat') || query.includes('kalk') || query.includes('calcium lactate')) {
    return {
      drugName: drugObj?.name || 'Kalsium Laktat (Kalk) 500 mg Tablet',
      indicationLabel: 'Suplemen Pembentuk Tulang & Gigi (Kalsium)',
      frequency: '2-3 x sehari 1 tablet',
      mealRelation: 'sesudah',
      timing: 'Pagi dan malam sesudah makan',
      isAntibioticMustFinish: false,
      specialInstructions: 'Minum sesudah makan untuk penyerapan optimal',
      foodPrecautions: 'Beri jeda dengan konsumsi teh atau kopi karena dapat menghambat penyerapan kalsium'
    };
  }
  if (query.includes('vitamin d3') || query.includes('cholecalciferol') || query.includes('d3')) {
    const is5000 = query.includes('5000');
    return {
      drugName: drugObj?.name || `Vitamin D3 ${is5000 ? '5000' : '1000'} IU Tablet`,
      indicationLabel: 'Suplemen Daya Tahan Tubuh & Penyerapan Kalsium',
      frequency: '1 x sehari 1 tablet',
      mealRelation: 'sesudah',
      timing: 'Pagi hari SEGERA SESUDAH sarapan berlemak',
      isAntibioticMustFinish: false,
      specialInstructions: 'Vitamin larut lemak, paling baik diserap jika diminum bersama makanan yang mengandung lemak/sarapan.'
    };
  }
  if (query.includes('asam folat') || query.includes('folic acid') || query.includes('folavit')) {
    const is1mg = query.includes('1 mg') || query.includes('folavit');
    return {
      drugName: drugObj?.name || (is1mg ? 'Asam Folat 1 mg (Folavit) Tablet' : 'Asam Folat 400 mcg Tablet'),
      indicationLabel: 'Vitamin Pembentuk Sel Darah Merah & Kesehatan Janin',
      frequency: '1 x sehari 1 tablet',
      mealRelation: 'sesudah',
      timing: 'Pagi hari sesudah sarapan',
      isAntibioticMustFinish: false,
      specialInstructions: 'Sangat penting untuk ibu hamil dan persiapan kehamilan untuk mencegah cacat tabung saraf janin.'
    };
  }
  if (query.includes('vitamin b kompleks') || query.includes('b complex')) {
    return {
      drugName: drugObj?.name || 'Vitamin B Kompleks Tablet',
      indicationLabel: 'Suplemen Metabolisme Energi & Kesehatan Saraf',
      frequency: '1 x sehari 1 tablet',
      mealRelation: 'sesudah',
      timing: 'Pagi hari sesudah sarapan',
      isAntibioticMustFinish: false,
      specialInstructions: 'Urin dapat berwarna kuning terang cerah (efek normal dan aman dari vitamin B2)'
    };
  }
  if (query.includes('neurobion') || query.includes('neurotropic') || query.includes('neurodex')) {
    const is5000 = query.includes('5000');
    return {
      drugName: drugObj?.name || (is5000 ? 'Neurobion 5000 Tablet' : 'Neurobion Forte Tablet'),
      indicationLabel: 'Vitamin Neurotropik Pereda Kebas, Kesemutan & Nyeri Saraf',
      frequency: '1 x sehari 1 tablet',
      mealRelation: 'sesudah',
      timing: 'Pagi hari sesudah makan',
      isAntibioticMustFinish: false,
      specialInstructions: 'Kombinasi vitamin B1, B6, dan B12 dosis tinggi untuk kesehatan sel saraf tepi'
    };
  }
  if (query.includes('sangobion') || query.includes('zat besi') || query.includes('ferrous') || query.includes('sakatonik')) {
    return {
      drugName: drugObj?.name || 'Sangobion (Zat Besi + Folat) Kapsul',
      indicationLabel: 'Suplemen Penambah Darah & Pencegah Anemia',
      frequency: '1 x sehari 1 kapsul',
      mealRelation: 'sesudah',
      timing: 'Malam hari sesudah makan atau sebelum tidur',
      isAntibioticMustFinish: false,
      specialInstructions: 'Feses dapat berubah warna menjadi kehitaman (efek normal zat besi). Beri jeda 2 jam dengan teh, kopi, dan susu.',
      foodPrecautions: 'Hindari minum bersamaan dengan teh atau susu yang menghambat penyerapan zat besi'
    };
  }
  if (query.includes('zinc') || query.includes('zink')) {
    return {
      drugName: drugObj?.name || 'Zinc 20 mg Tablet Dispersibel',
      indicationLabel: 'Pelengkap Terapi Diare Anak & Pemulih Saluran Cerna',
      frequency: '1 x sehari 1 tablet (selama 10 hari)',
      mealRelation: 'sesudah',
      timing: 'Pagi atau siang hari sesudah makan',
      isAntibioticMustFinish: true,
      specialInstructions: '⚠️ Wajib diminum selama 10 HARI BERTURUT-TURUT walau diare sudah sembuh. Larutkan dalam 1 sendok makan air matang/ASI.'
    };
  }
  if (query.includes('oralit') || query.includes('corsalit') || query.includes('rehidrasi')) {
    return {
      drugName: drugObj?.name || 'Oralit 200 mL Sachet Serbuk',
      indicationLabel: 'Pengganti Cairan & Elektrolit Tubuh Saat Diare/Muntah',
      frequency: 'Setiap habis buang air besar cair',
      mealRelation: 'bebas',
      timing: 'Minum bertahap sedikit demi sedikit setiap kali BAB cair',
      isAntibioticMustFinish: false,
      specialInstructions: 'Larutkan 1 sachet ke dalam 1 gelas air matang (200 mL). Jangan gunakan air panas mendidih. Habiskan dalam 24 jam setelah dilarutkan.'
    };
  }
  if (query.includes('vitamin c') || query.includes('ester c') || query.includes('ascorbic')) {
    const isEster = query.includes('ester');
    return {
      drugName: drugObj?.name || (isEster ? 'Ester C 500 mg Tablet' : 'Vitamin C 500 mg Tablet'),
      indicationLabel: 'Suplemen Daya Tahan Tubuh & Antioksidan',
      frequency: '1 x sehari 1 tablet',
      mealRelation: 'sesudah',
      timing: 'Pagi hari sesudah sarapan',
      isAntibioticMustFinish: false,
      specialInstructions: isEster
        ? 'Bentuk kalsium askorbat lebih ramah di lambung bagi penderita maag'
        : 'Minum sesudah makan dengan segelas air putih'
    };
  }
  if (query.includes('coq10') || query.includes('coenzyme q10')) {
    return {
      drugName: drugObj?.name || 'Coenzyme Q10 (CoQ10) 100 mg Kapsul',
      indicationLabel: 'Suplemen Antioksidan Sel & Kesehatan Otot Jantung',
      frequency: '1 x sehari 1 kapsul',
      mealRelation: 'sesudah',
      timing: 'Pagi hari bersama sarapan berlemak',
      isAntibioticMustFinish: false,
      specialInstructions: 'Paling baik diserap jika diminum bersama makanan yang mengandung lemak'
    };
  }

  // Fallback: extract directly from deep Drug monograph fields
  if (drugObj) {
    let cleanIndication = drugObj.indication || (drugObj.category ? `Obat Golongan ${drugObj.category}` : 'Sesuai Anjuran Dokter');
    if (cleanIndication.includes('.')) {
      cleanIndication = cleanIndication.split('.')[0].trim();
    }
    if (cleanIndication.length > 55) {
      cleanIndication = cleanIndication.substring(0, 52) + '...';
    }

    let foodPrec = drugObj.foodInteraction || drugObj.patientTips || '';
    let specialInst = drugObj.administrationGuideline || drugObj.contraindications || drugObj.contraindication || '';
    let mealRel: 'sebelum' | 'bersama' | 'sesudah' | 'bebas' = 'sesudah';
    let defTiming = 'Pagi hari sesudah makan';

    const fullDesc = (foodPrec + ' ' + specialInst + ' ' + (drugObj.dosage || '')).toLowerCase();
    if (fullDesc.includes('sebelum makan') || fullDesc.includes('perut kosong') || fullDesc.includes('30 menit sebelum')) {
      mealRel = 'sebelum';
      defTiming = '30-60 menit SEBELUM sarapan / makan';
    } else if (fullDesc.includes('bersama makanan') || fullDesc.includes('suapan')) {
      mealRel = 'bersama';
      defTiming = 'Bersama suapan makanan besar';
    } else if (fullDesc.includes('malam') || fullDesc.includes('sebelum tidur')) {
      defTiming = 'Malam hari sebelum tidur';
    }

    const isAnti = (drugObj.category || '').toLowerCase().includes('antibiotik') ||
      (drugObj.category || '').toLowerCase().includes('antibakteri') ||
      (drugObj.category || '').toLowerCase().includes('anti-infeksi');

    return {
      drugName: drugObj.name,
      indicationLabel: cleanIndication,
      frequency: (() => {
        const lines = (drugObj.adultDosage || drugObj.dosage || '').split('\n').map(l => l.trim()).filter(Boolean);
        const doseLine = lines.find(l => l.startsWith('-')) || lines.find(l => !l.startsWith('•')) || lines[0];
        if (doseLine) {
          return doseLine.replace(/^[-•]\s*(Dosis Standar:\s*|Dosis:\s*)?/i, '').substring(0, 40);
        }
        return '1 x sehari 1 tablet';
      })(),
      mealRelation: mealRel,
      timing: defTiming,
      isAntibioticMustFinish: isAnti,
      specialInstructions: specialInst.length > 80 ? specialInst.substring(0, 77) + '...' : specialInst,
      foodPrecautions: foodPrec.length > 80 ? foodPrec.substring(0, 77) + '...' : foodPrec
    };
  }

  // Default Fallback
  return {
    drugName: rawQuery || 'Obat Baru',
    indicationLabel: 'Sesuai Anjuran Dokter',
    frequency: '1 x sehari 1 tablet',
    mealRelation: 'sesudah',
    timing: 'Pagi hari sesudah makan',
    isAntibioticMustFinish: query.includes('antibiotik') || query.includes('antibakteri')
  };
};

interface WhatsAppPatientCardManagerProps {
  clinicBranding: ClinicBrandingSettings;
  drugs?: Drug[];
  onSelectDrugForDetail?: (drug: Drug) => void;
  preselectedDrug?: Drug | null;
}

export const WhatsAppPatientCardManager: React.FC<WhatsAppPatientCardManagerProps> = ({
  clinicBranding,
  drugs = [],
  onSelectDrugForDetail,
  preselectedDrug
}) => {
  // Patient details state
  const [patientName, setPatientName] = useState<string>('Bpk. Hendra Wijaya');
  const [patientPhone, setPatientPhone] = useState<string>('081234567890');
  const [patientGender, setPatientGender] = useState<'L' | 'P'>('L');
  const [patientAge, setPatientAge] = useState<string>('54 th');
  const [generalDoctorNotes, setGeneralDoctorNotes] = useState<string>('Kontrol kembali jika obat habis atau keluhan berlanjut.');
  const [copiedNotification, setCopiedNotification] = useState<boolean>(false);
  const [activePreviewMode, setActivePreviewMode] = useState<'whatsapp' | 'card'>('whatsapp');

  // Manual editable Clinic & Pharmacist Branding state
  const [isEditingBranding, setIsEditingBranding] = useState<boolean>(false);
  const [customClinicName, setCustomClinicName] = useState<string>(() => {
    return localStorage.getItem('farmasi_pio_clinic_name') || clinicBranding?.clinicName || 'Klinik & Apotek Medika Sejahtera';
  });
  const [customPharmacistName, setCustomPharmacistName] = useState<string>(() => {
    return localStorage.getItem('farmasi_pio_pharmacist_name') || clinicBranding?.pharmacistName || 'apt. Rina Wati, S.Farm';
  });
  const [customPharmacistSipa, setCustomPharmacistSipa] = useState<string>(() => {
    return localStorage.getItem('farmasi_pio_pharmacist_sipa') || clinicBranding?.pharmacistSipa || clinicBranding?.sipNumber || 'SIPA: 19920814/SIPA_31.74/2023/2019';
  });

  // Save changes to localStorage
  useEffect(() => {
    localStorage.setItem('farmasi_pio_clinic_name', customClinicName);
  }, [customClinicName]);

  useEffect(() => {
    localStorage.setItem('farmasi_pio_pharmacist_name', customPharmacistName);
  }, [customPharmacistName]);

  useEffect(() => {
    localStorage.setItem('farmasi_pio_pharmacist_sipa', customPharmacistSipa);
  }, [customPharmacistSipa]);

  const handleResetBranding = () => {
    const defaultName = clinicBranding?.clinicName || 'Klinik & Apotek Medika Sejahtera';
    const defaultPharmacist = clinicBranding?.pharmacistName || 'apt. Rina Wati, S.Farm';
    const defaultSipa = clinicBranding?.pharmacistSipa || clinicBranding?.sipNumber || 'SIPA: 19920814/SIPA_31.74/2023/2019';
    setCustomClinicName(defaultName);
    setCustomPharmacistName(defaultPharmacist);
    setCustomPharmacistSipa(defaultSipa);
    localStorage.removeItem('farmasi_pio_clinic_name');
    localStorage.removeItem('farmasi_pio_pharmacist_name');
    localStorage.removeItem('farmasi_pio_pharmacist_sipa');
  };

  // Monograph Category Selector & Fast Filter
  const [selectedPioCategory, setSelectedPioCategory] = useState<string>('populer');
  const [pioCategorySearch, setPioCategorySearch] = useState<string>('');
  const [showMonographModal, setShowMonographModal] = useState<boolean>(false);
  const [addedToastMessage, setAddedToastMessage] = useState<string | null>(null);

  // Autocomplete dropdown state
  const [activeSearchMedId, setActiveSearchMedId] = useState<string | null>(null);
  const [autoFillNotice, setAutoFillNotice] = useState<{ [medId: string]: string }>({});

  // Medication list state
  const [medications, setMedications] = useState<PatientMedicationEntry[]>([
    {
      id: 'med-1',
      drugName: 'Amlodipine 10 mg',
      indicationLabel: 'Obat Penurun Tekanan Darah (Antihipertensi)',
      frequency: '1 x sehari 1 tablet',
      timing: 'Pagi hari setelah sarapan (pada jam yang sama)',
      mealRelation: 'sesudah',
      isAntibioticMustFinish: false,
      specialInstructions: 'Minum teratur setiap hari walau tensi sudah normal',
      foodPrecautions: 'Kurangi konsumsi garam dan hindari jus grapefruit'
    },
    {
      id: 'med-2',
      drugName: 'Metformin 500 mg',
      indicationLabel: 'Obat Pengontrol Gula Darah Utama',
      frequency: '2 x sehari 1 tablet',
      timing: 'Bersama suapan makan pagi dan malam',
      mealRelation: 'bersama',
      isAntibioticMustFinish: false,
      specialInstructions: 'Minum bersama makanan untuk mencegah rasa mual',
      foodPrecautions: 'Batasi asupan karbohidrat tinggi gula'
    },
    {
      id: 'med-3',
      drugName: 'Cefixime 100 mg',
      indicationLabel: 'Antibiotik Saluran Napas & Infeksi',
      frequency: '2 x sehari 1 kapsul',
      timing: 'Tiap 12 jam (pagi dan malam)',
      mealRelation: 'sesudah',
      isAntibioticMustFinish: true,
      specialInstructions: 'WAJIB DIHABISKAN selama 5 hari berturut-turut',
      foodPrecautions: 'Hindari konsumsi bersamaan dengan susu kalsium tinggi'
    }
  ]);

  // Clean and sanitize phone number to International Indonesian format 628xxx
  const sanitizedWhatsAppPhone = useMemo(() => {
    let cleaned = patientPhone.replace(/\D/g, ''); // strip non-digits
    if (cleaned.startsWith('0')) {
      cleaned = '62' + cleaned.substring(1);
    } else if (cleaned.startsWith('8')) {
      cleaned = '62' + cleaned;
    }
    return cleaned;
  }, [patientPhone]);

  // Preset Template loader
  const handleLoadPreset = (presetType: 'hipertensi' | 'diabetes' | 'ispa' | 'gerd' | 'diare_anak') => {
    switch (presetType) {
      case 'hipertensi':
        setPatientName('Ibu Ratna (60 th)');
        setMedications([
          {
            id: `med-${Date.now()}-1`,
            drugName: 'Candesartan 16 mg',
            indicationLabel: 'Obat Penurun Tekanan Darah (ARB)',
            frequency: '1 x sehari 1 tablet',
            timing: 'Pagi hari sesudah sarapan',
            mealRelation: 'sesudah',
            isAntibioticMustFinish: false,
            specialInstructions: 'Minum teratur setiap hari pada jam yang sama',
            foodPrecautions: 'Hindari suplemen kalium atau garam diet kalium tinggi'
          },
          {
            id: `med-${Date.now()}-2`,
            drugName: 'Amlodipine 5 mg',
            indicationLabel: 'Obat Penurun Tekanan Darah (CCB)',
            frequency: '1 x sehari 1 tablet',
            timing: 'Malam hari sebelum tidur',
            mealRelation: 'sesudah',
            isAntibioticMustFinish: false,
            specialInstructions: 'Dapat menimbulkan bengkak ringan di pergelangan kaki',
            foodPrecautions: 'Hindari jus grapefruit/jeruk bali'
          }
        ]);
        break;
      case 'diabetes':
        setPatientName('Bpk. Sugeng (52 th)');
        setMedications([
          {
            id: `med-${Date.now()}-1`,
            drugName: 'Metformin 500 mg',
            indicationLabel: 'Obat Gula Darah Utama',
            frequency: '2 x sehari 1 tablet',
            timing: 'Saat suapan pertama sarapan dan makan malam',
            mealRelation: 'bersama',
            isAntibioticMustFinish: false,
            specialInstructions: 'Minum bersama makanan untuk mencegah nyeri lambung',
            foodPrecautions: 'Hindari minuman manis berkalori tinggi'
          },
          {
            id: `med-${Date.now()}-2`,
            drugName: 'Glimepiride 2 mg',
            indicationLabel: 'Pemicu Sekresi Insulin',
            frequency: '1 x sehari 1 tablet',
            timing: 'Sesaat sebelum sarapan pagi',
            mealRelation: 'sebelum',
            isAntibioticMustFinish: false,
            specialInstructions: 'Pastikan sarapan setelah minum obat untuk mencegah gula darah anjlok (hipoglikemia)',
            foodPrecautions: 'Siapkan permen manis jika timbul keringat dingin/gemetar'
          }
        ]);
        break;
      case 'ispa':
        setPatientName('An. Dimas (7 th)');
        setMedications([
          {
            id: `med-${Date.now()}-1`,
            drugName: 'Amoxicillin Sirup 125 mg/5 mL',
            indicationLabel: 'Antibiotik Infeksi Bakteri',
            frequency: '3 x sehari 1 sendok takar (5 mL)',
            timing: 'Tiap 8 jam (pagi, siang, malam)',
            mealRelation: 'sesudah',
            isAntibioticMustFinish: true,
            specialInstructions: 'HABISKAN selama 5-7 hari meski gejala sudah membaik',
            foodPrecautions: 'Kocok botol dahulu sebelum diminum'
          },
          {
            id: `med-${Date.now()}-2`,
            drugName: 'Paracetamol Sirup 120 mg/5 mL',
            indicationLabel: 'Pereda Demam & Nyeri',
            frequency: '3-4 x sehari 1 sendok takar (5 mL)',
            timing: 'Hanya diminum saat anak demam (>38°C)',
            mealRelation: 'sesudah',
            isAntibioticMustFinish: false,
            specialInstructions: 'Beri jeda minimal 4 jam antar dosis',
            foodPrecautions: 'Perbanyak minum air putih hangat'
          },
          {
            id: `med-${Date.now()}-3`,
            drugName: 'Ambroxol Sirup 15 mg/5 mL',
            indicationLabel: 'Pengencer Dahak Batuk',
            frequency: '3 x sehari 1/2 sendok takar (2.5 mL)',
            timing: 'Pagi, siang, dan malam sesudah makan',
            mealRelation: 'sesudah',
            isAntibioticMustFinish: false,
            specialInstructions: 'Bantu dengan banyak minum air hangat'
          }
        ]);
        break;
      case 'gerd':
        setPatientName('Ibu Maya (36 th)');
        setMedications([
          {
            id: `med-${Date.now()}-1`,
            drugName: 'Lansoprazole 30 mg',
            indicationLabel: 'Pencegah Produksi Asam Lambung (PPI)',
            frequency: '1 x sehari 1 kapsul',
            timing: 'Pagi hari 30 - 60 menit SEBELUM sarapan',
            mealRelation: 'sebelum',
            isAntibioticMustFinish: false,
            specialInstructions: 'Telan utuh kapsul dengan air putih, jangan dikunyah',
            foodPrecautions: 'Hindari kopi, makanan pedas, dan berlemak'
          },
          {
            id: `med-${Date.now()}-2`,
            drugName: 'Sukralfat Suspensi 500 mg/5 mL',
            indicationLabel: 'Pelapis Dinding Lambung',
            frequency: '3 x sehari 2 sendok takar (10 mL)',
            timing: '1 jam sebelum makan atau 2 jam sesudah makan',
            mealRelation: 'sebelum',
            isAntibioticMustFinish: false,
            specialInstructions: 'Kocok dahulu sebelum diminum. Beri jeda 1 jam dengan obat lain'
          }
        ]);
        break;
      case 'diare_anak':
        setPatientName('An. Sifa (2 th)');
        setMedications([
          {
            id: `med-${Date.now()}-1`,
            drugName: 'Oralit Sachet (200 mL)',
            indicationLabel: 'Cairan Rehidrasi Pengganti Elektrolit',
            frequency: 'Setiap kali anak buang air cair',
            timing: 'Berikan 1/2 hingga 1 gelas (100-200 mL) bertahap dengan sendok',
            mealRelation: 'bebas',
            isAntibioticMustFinish: false,
            specialInstructions: 'Larutkan 1 sachet dalam 200 mL air matang'
          },
          {
            id: `med-${Date.now()}-2`,
            drugName: 'Zinc Dispersible Tablet 20 mg',
            indicationLabel: 'Regenerasi Dinding Usus Anak',
            frequency: '1 x sehari 1 tablet selama 10 hari',
            timing: 'Pagi hari sesudah makan',
            mealRelation: 'sesudah',
            isAntibioticMustFinish: true,
            specialInstructions: 'WAJIB DIMINUM 10 HARI BERTURUT-TURUT MESKI DIARE SUDAH BERHENTI',
            foodPrecautions: 'Larutkan tablet dalam 1 sendok air matang atau ASI'
          }
        ]);
        break;
    }
  };

  // Auto-Fill single medication from database
  const handleAutoFillMedication = (medId: string, searchVal: string, matchedDrug?: Drug) => {
    const autoFilled = generatePioAutoFill(searchVal, matchedDrug);

    setMedications(prev => prev.map(m => {
      if (m.id === medId) {
        return {
          ...m,
          drugName: autoFilled.drugName || m.drugName,
          indicationLabel: autoFilled.indicationLabel || m.indicationLabel,
          frequency: autoFilled.frequency || m.frequency,
          mealRelation: autoFilled.mealRelation || m.mealRelation,
          timing: autoFilled.timing || m.timing,
          isAntibioticMustFinish: autoFilled.isAntibioticMustFinish !== undefined ? autoFilled.isAntibioticMustFinish : m.isAntibioticMustFinish,
          specialInstructions: autoFilled.specialInstructions || m.specialInstructions,
          foodPrecautions: autoFilled.foodPrecautions || m.foodPrecautions
        };
      }
      return m;
    }));

    setActiveSearchMedId(null);
    setAutoFillNotice(prev => ({ ...prev, [medId]: `✅ Terisi: ${autoFilled.indicationLabel}` }));
    setTimeout(() => {
      setAutoFillNotice(prev => {
        const copy = { ...prev };
        delete copy[medId];
        return copy;
      });
    }, 3500);
  };

  // Quick add a popular drug with full auto-fill
  const handleQuickAddPopularDrug = (drugName: string) => {
    const matchedDrug = drugs.find(d => d.name.toLowerCase().includes(drugName.toLowerCase()));
    const autoFilled = generatePioAutoFill(drugName, matchedDrug);

    const newEntry: PatientMedicationEntry = {
      id: `med-${Date.now()}`,
      drugName: autoFilled.drugName || drugName,
      indicationLabel: autoFilled.indicationLabel || 'Sesuai Resep',
      frequency: autoFilled.frequency || '1 x sehari 1 tablet',
      timing: autoFilled.timing || 'Pagi hari sesudah makan',
      mealRelation: autoFilled.mealRelation || 'sesudah',
      isAntibioticMustFinish: Boolean(autoFilled.isAntibioticMustFinish),
      specialInstructions: autoFilled.specialInstructions || '',
      foodPrecautions: autoFilled.foodPrecautions || ''
    };

    setMedications(prev => [...prev, newEntry]);
    setAddedToastMessage(drugName);
    setTimeout(() => {
      setAddedToastMessage(null);
    }, 2500);
  };

  // Automatically insert drug when sent from Monograph / Directory
  useEffect(() => {
    if (preselectedDrug) {
      handleQuickAddPopularDrug(preselectedDrug.name);
    }
  }, [preselectedDrug]);

  // Add Medication Row
  const handleAddMedication = () => {
    const newEntry: PatientMedicationEntry = {
      id: `med-${Date.now()}`,
      drugName: '',
      indicationLabel: '',
      frequency: '1 x sehari 1 tablet',
      timing: 'Pagi hari sesudah sarapan',
      mealRelation: 'sesudah',
      isAntibioticMustFinish: false
    };
    setMedications([...medications, newEntry]);
    setActiveSearchMedId(newEntry.id);
  };

  // Remove Medication Row
  const handleRemoveMedication = (id: string) => {
    setMedications(medications.filter(m => m.id !== id));
  };

  // Update Medication Field
  const handleUpdateMedication = (id: string, field: keyof PatientMedicationEntry, value: any) => {
    setMedications(medications.map(m => {
      if (m.id === id) {
        return { ...m, [field]: value };
      }
      return m;
    }));
  };

  // Generate WhatsApp Message Text
  const generatedWhatsAppText = useMemo(() => {
    const clinicName = customClinicName || clinicBranding?.clinicName || 'APOTEK & KLINIK SEHAT';
    const clinicPhone = clinicBranding?.phone || '';
    const pharmacistName = customPharmacistName || clinicBranding?.pharmacistName || 'Apoteker Penanggung Jawab';
    const rawSipa = customPharmacistSipa || clinicBranding?.pharmacistSipa || clinicBranding?.sipNumber || '';
    const sipaNumber = rawSipa ? (rawSipa.startsWith('SIPA') ? rawSipa : `SIPA: ${rawSipa}`) : '';
    const address = clinicBranding?.address || '';

    let text = `🏥 *${clinicName.toUpperCase()}*\n`;
    if (address) text += `📍 ${address}\n`;
    if (sipaNumber) text += `📜 ${sipaNumber}\n`;
    text += `👨‍⚕️ *Apoteker*: ${pharmacistName}\n`;
    text += `━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `Halo *${patientName}* 👋\n`;
    text += `Terima kasih telah berkunjung ke fasilitas kami. Berikut adalah panduan dan pengingat resmi aturan minum obat Anda:\n\n`;

    text += `💊 *DAFTAR OBAT & ATURAN PAKAI:*\n\n`;

    medications.forEach((med, idx) => {
      text += `${idx + 1}. *${med.drugName}* ${med.indicationLabel ? `_(${med.indicationLabel})_` : ''}\n`;
      text += `   • *Aturan*: ${med.frequency}\n`;
      text += `   • *Waktu*: ${med.timing}\n`;

      let mealText = '';
      if (med.mealRelation === 'sebelum') mealText = 'Diminum 30-60 menit SEBELUM makan';
      else if (med.mealRelation === 'bersama') mealText = 'Diminum BERSAMA suapan makanan';
      else if (med.mealRelation === 'sesudah') mealText = 'Diminum SESUDAH makan';
      else mealText = 'Dapat diminum dengan atau tanpa makanan';
      text += `   • *Hubungan Makan*: ${mealText}\n`;

      if (med.isAntibioticMustFinish) {
        text += `   • ⚠️ *PERINGATAN: WAJIB DIHABISKAN sesuai durasi dokter!*\n`;
      }
      if (med.specialInstructions) {
        text += `   • 💡 *Petunjuk*: ${med.specialInstructions}\n`;
      }
      if (med.foodPrecautions) {
        text += `   • 🚫 *Pantangan*: ${med.foodPrecautions}\n`;
      }
      text += `\n`;
    });

    text += `━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `🏠 *CARA PENYIMPANAN OBAT YANG BENAR:*\n`;
    text += `• Simpan di tempat sejuk (<25°C), kering, dan terhindar dari sinar matahari langsung.\n`;
    text += `• Jauhkan dari jangkauan anak-anak.\n`;
    text += `• Jangan simpan obat sirup/tablet di tempat lembap (seperti kamar mandi atau dekat kompor).\n\n`;

    if (generalDoctorNotes) {
      text += `📌 *Catatan Apoteker/Dokter*:\n${generalDoctorNotes}\n\n`;
    }

    text += `━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `Jika ada pertanyaan mengenai aturan pakai atau timbul keluhan efek samping, silakan langsung membalas pesan WhatsApp ini.\n\n`;
    text += `Semoga lekas sembuh dan sehat selalu! 🙏✨`;

    return text;
  }, [customClinicName, customPharmacistName, customPharmacistSipa, clinicBranding, patientName, medications, generalDoctorNotes]);

  // Open Direct WhatsApp Link
  const handleOpenWhatsAppDirect = () => {
    const encodedText = encodeURIComponent(generatedWhatsAppText);
    const targetUrl = `https://wa.me/${sanitizedWhatsAppPhone}?text=${encodedText}`;
    window.open(targetUrl, '_blank');
  };

  // Copy to Clipboard
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(generatedWhatsAppText);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 3000);
  };

  // Trigger Print View
  const handlePrintCard = () => {
    window.print();
  };

  return (
    <div className="space-y-6 pb-12">
      {/* HERO BANNER - WHATSAPP EMERALD & DEEP PINE */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#030f0a] via-[#072418] to-[#0b3624] p-6 sm:p-8 text-white shadow-2xl border border-emerald-500/25">
        <FloatingPillsBackground density="low" accentColor="#34d399" />
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-72 -bottom-10 opacity-10 pointer-events-none hidden lg:block">
          <MessageSquare className="w-56 h-56 text-emerald-400 -rotate-12" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 text-white flex items-center justify-center shadow-lg shadow-emerald-950/50 shrink-0">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-black font-outfit tracking-tight">
                  Kartu PIO Pasien Siap Kirim WhatsApp
                </h1>
              </div>
            </div>

          </div>

          {/* Right Hero Badge: Database Status */}
          <div className="flex flex-col gap-3 lg:w-72 shrink-0 relative z-10">
            <div className="bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-emerald-500/40 space-y-2.5 shadow-xl">
              <div className="flex items-center justify-between text-xs font-bold text-emerald-300 border-b border-emerald-800/60 pb-2">
                <span className="flex items-center gap-1.5 font-black font-outfit">
                  <Activity className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Status Database</span>
                </span>
                <span className="bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded-full text-[10px] font-black border border-emerald-600/40">
                  Standar PIO Permenkes
                </span>
              </div>
              <div className="text-xs text-emerald-100/80 space-y-1.5 font-medium">
                <div className="flex justify-between items-center">
                  <span>Format Edukasi:</span>
                  <span className="font-mono font-bold text-white bg-white/10 px-2 py-0.5 rounded-md text-[11px]">WhatsApp &amp; Cetak</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Kop &amp; Branding:</span>
                  <span className="font-mono font-bold text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded-md text-[11px]">Identitas Fasilitas</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Konten Asuhan:</span>
                  <span className="font-mono font-bold text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded-md text-[11px]">Aturan &amp; Efek Samping</span>
                </div>
                <div className="flex justify-between items-center pt-1 border-t border-emerald-900/40 text-[10px] text-emerald-300/80">
                  <span>Standar Acuan:</span>
                  <span className="font-bold text-white">Permenkes No. 73/2016</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* QUICK TEMPLATES PRESETS - EMERALD GREEN SUITE */}
      <div className="bg-white dark:bg-[#071c10] border border-emerald-200/80 dark:border-emerald-500/25 rounded-3xl p-5 shadow-sm flex flex-wrap items-center gap-2">
        <span className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 mr-1 font-outfit">
          <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
          Template Resep Cepat:
        </span>
        <button
          onClick={() => handleLoadPreset('hipertensi')}
          className="px-3 py-1.5 rounded-xl text-xs font-bold font-outfit bg-emerald-50/70 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 text-emerald-950 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800/80 transition cursor-pointer"
        >
          🫀 Paket Hipertensi
        </button>
        <button
          onClick={() => handleLoadPreset('diabetes')}
          className="px-3 py-1.5 rounded-xl text-xs font-bold font-outfit bg-emerald-50/70 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 text-emerald-950 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800/80 transition cursor-pointer"
        >
          🩸 Paket Diabetes
        </button>
        <button
          onClick={() => handleLoadPreset('ispa')}
          className="px-3 py-1.5 rounded-xl text-xs font-bold font-outfit bg-emerald-50/70 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 text-emerald-950 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800/80 transition cursor-pointer"
        >
          🤧 Paket Batuk Pilek / ISPA
        </button>
        <button
          onClick={() => handleLoadPreset('gerd')}
          className="px-3 py-1.5 rounded-xl text-xs font-bold font-outfit bg-emerald-50/70 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 text-emerald-950 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800/80 transition cursor-pointer"
        >
          🔥 Paket Maag / GERD
        </button>
        <button
          onClick={() => handleLoadPreset('diare_anak')}
          className="px-3 py-1.5 rounded-xl text-xs font-bold font-outfit bg-emerald-50/70 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 text-emerald-950 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800/80 transition cursor-pointer"
        >
          👶 Paket Diare Anak (Zinc + Oralit)
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT COLUMN: EDITOR FORM */}
        <div className="lg:col-span-6 space-y-6">
          {/* Patient Details Card */}
          <div className="bg-white dark:bg-[#071c10] border border-emerald-200/80 dark:border-emerald-500/25 rounded-3xl p-6 shadow-sm space-y-4">
            <h3 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2 font-outfit">
              <User className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              Informasi Pasien Penerima Edukasi
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold font-outfit text-slate-700 dark:text-slate-400 mb-1">Nama Pasien</label>
                <input
                  type="text"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2 text-sm font-bold font-outfit text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30"
                  placeholder="cth. Bpk. Hendra"
                />
              </div>

              <div>
                <label className="block text-xs font-bold font-outfit text-slate-700 dark:text-slate-400 mb-1">
                  Nomor WhatsApp Pasien <span className="text-emerald-600 dark:text-emerald-400 font-bold">*Wajib</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="tel"
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl pl-9 pr-3 py-2 text-sm font-bold font-outfit text-emerald-600 dark:text-emerald-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30"
                    placeholder="081234567890"
                  />
                </div>
                <span className="text-[10px] text-slate-500 block mt-1">
                  Format tujuan: <strong>+{sanitizedWhatsAppPhone}</strong>
                </span>
              </div>
            </div>

            {/* Clinic Branding Indicator / Manual Editor */}
            {!isEditingBranding ? (
              <div className="bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-3 flex items-center justify-between gap-3 shadow-2xs">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div className="text-xs min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-slate-900 dark:text-slate-200 font-bold font-outfit truncate">{customClinicName || 'Apotek Anda'}</span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20">
                        Kop PIO
                      </span>
                    </div>
                    <span className="text-slate-500 dark:text-slate-400 block text-[11px] font-sans truncate mt-0.5">
                      {customPharmacistName || 'Apoteker Penanggung Jawab'} ({customPharmacistSipa || 'SIPA'})
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsEditingBranding(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-300 dark:hover:border-emerald-700 transition shadow-2xs cursor-pointer shrink-0"
                  title="Edit nama fasilitas, apoteker, dan SIPA secara manual"
                >
                  <Edit3 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Edit Manual</span>
                </button>
              </div>
            ) : (
              <div className="bg-emerald-50/50 dark:bg-emerald-950/25 border-2 border-emerald-500/40 rounded-2xl p-4 space-y-3 shadow-xs">
                <div className="flex items-center justify-between pb-2 border-b border-emerald-200/60 dark:border-emerald-900/60">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-xs font-extrabold font-outfit text-emerald-950 dark:text-emerald-200">
                      Edit Manual Identitas Faskes &amp; Apoteker PIO
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleResetBranding}
                      className="text-[11px] font-bold text-slate-500 hover:text-rose-600 dark:text-slate-400 dark:hover:text-rose-400 transition cursor-pointer"
                      title="Kembalikan ke identitas bawaan profil"
                    >
                      Reset Default
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsEditingBranding(false)}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition shadow-2xs cursor-pointer"
                    >
                      <Check className="w-3 h-3" />
                      <span>Selesai</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div>
                    <label className="text-[11px] font-bold text-slate-700 dark:text-slate-300 block mb-1 font-outfit">
                      Nama Faskes / Apotek:
                    </label>
                    <input
                      type="text"
                      value={customClinicName}
                      onChange={(e) => setCustomClinicName(e.target.value)}
                      className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-2.5 py-1.5 text-xs font-bold text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                      placeholder="Nama Klinik / Apotek"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-700 dark:text-slate-300 block mb-1 font-outfit">
                      Nama Apoteker (APJ):
                    </label>
                    <input
                      type="text"
                      value={customPharmacistName}
                      onChange={(e) => setCustomPharmacistName(e.target.value)}
                      className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-2.5 py-1.5 text-xs font-bold text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                      placeholder="apt. Nama Lengkap, S.Farm"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-700 dark:text-slate-300 block mb-1 font-outfit">
                      Nomor SIPA:
                    </label>
                    <input
                      type="text"
                      value={customPharmacistSipa}
                      onChange={(e) => setCustomPharmacistSipa(e.target.value)}
                      className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-2.5 py-1.5 text-xs font-bold text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                      placeholder="SIPA: 19920814/..."
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Medications Form */}
          <div className="bg-white dark:bg-[#071c10] border border-emerald-200/80 dark:border-emerald-500/25 rounded-3xl p-6 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-emerald-100 dark:border-emerald-950/80">
              <div>
                <h3 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2 font-outfit">
                  <Pill className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  Daftar Obat Pasien ({medications.length} Obat)
                </h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  Ketik nama obat untuk mendapatkan saran aturan pakai & edukasi otomatis.
                </p>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <button
                  type="button"
                  onClick={() => setShowMonographModal(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-50 dark:bg-amber-500/15 hover:bg-amber-100 dark:hover:bg-amber-500/25 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-500/30 transition shadow-2xs cursor-pointer shrink-0"
                  title="Buka katalog monografi obat cepat"
                >
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  <span>⚡ Katalog Monografi</span>
                </button>
                <button
                  type="button"
                  onClick={handleAddMedication}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition shadow-sm cursor-pointer shrink-0"
                >
                  <Plus className="w-4 h-4" />
                  Tambah Obat
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {medications.map((med, idx) => {
                const searchQ = (med.drugName || '').toLowerCase().trim();
                const matchingSuggestions = searchQ.length > 0 && activeSearchMedId === med.id
                  ? (drugs.length > 0 ? drugs : []).filter(d => 
                      d.name.toLowerCase().includes(searchQ) || 
                      (d.genericName && d.genericName.toLowerCase().includes(searchQ)) ||
                      (d.category && d.category.toLowerCase().includes(searchQ))
                    ).slice(0, 6)
                  : [];

                const matchedMasterDrug = (drugs || []).find(d => 
                  d.name.toLowerCase() === (med.drugName || '').toLowerCase() || 
                  (d.genericName && (med.drugName || '').toLowerCase().includes(d.genericName.toLowerCase())) ||
                  ((med.drugName || '').toLowerCase().includes(d.name.toLowerCase()))
                );

                return (
                  <div
                    key={med.id}
                    className="bg-slate-50/80 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 rounded-xl p-4 space-y-3 relative group"
                  >
                    <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800/80 pb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400">
                          Obat #{idx + 1}
                        </span>
                        {autoFillNotice[med.id] && (
                          <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 px-2 py-0.5 rounded-full animate-in fade-in">
                            {autoFillNotice[med.id]}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-1.5">
                        {matchedMasterDrug && onSelectDrugForDetail && (
                          <button
                            type="button"
                            onClick={() => onSelectDrugForDetail(matchedMasterDrug)}
                            className="px-2 py-0.5 rounded-lg text-[10.5px] font-bold bg-teal-50 dark:bg-teal-950 hover:bg-teal-100 dark:hover:bg-teal-900 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 transition flex items-center gap-1 cursor-pointer"
                            title="Buka monografi farmakologi klinis lengkap obat ini"
                          >
                            <BookOpen className="w-3 h-3 text-teal-600 dark:text-teal-400" />
                            <span>Monografi</span>
                          </button>
                        )}

                        <button
                          type="button"
                          onClick={() => handleAutoFillMedication(med.id, med.drugName, matchedMasterDrug)}
                          className="px-2 py-0.5 rounded-lg text-[10.5px] font-bold bg-emerald-50 dark:bg-emerald-950 hover:bg-emerald-100 dark:hover:bg-emerald-900 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 transition flex items-center gap-1 cursor-pointer"
                          title="Auto-isi edukasi & aturan minum berdasarkan nama obat"
                        >
                          <Zap className="w-3 h-3 text-amber-500" />
                          <span>Auto-Isi PIO</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleRemoveMedication(med.id)}
                          className="text-slate-400 hover:text-rose-600 transition p-1 cursor-pointer"
                          title="Hapus obat"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* Nama & Kekuatan Obat (dengan Autocomplete Dropdown) */}
                      <div className="relative">
                        <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-400 mb-1">
                          Nama & Kekuatan Obat <span className="text-emerald-600 dark:text-emerald-400 font-bold">*</span>
                        </label>
                        <input
                          type="text"
                          value={med.drugName}
                          onFocus={() => setActiveSearchMedId(med.id)}
                          onChange={(e) => {
                            handleUpdateMedication(med.id, 'drugName', e.target.value);
                            setActiveSearchMedId(med.id);
                          }}
                          className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 font-bold shadow-2xs"
                          placeholder="Ketik cth. Amlodipine 10 mg / Metformin"
                        />

                        {/* Floating Autocomplete Suggestions */}
                        {activeSearchMedId === med.id && matchingSuggestions.length > 0 && (
                          <div className="absolute left-0 right-0 top-full mt-1 bg-white dark:bg-slate-900 border border-emerald-500 rounded-xl shadow-2xl z-50 overflow-hidden divide-y divide-slate-100 dark:divide-slate-800 text-xs">
                            <div className="p-1.5 bg-slate-50 dark:bg-slate-950 text-[10px] font-bold text-emerald-700 dark:text-emerald-400 flex items-center justify-between">
                              <span>Pilih Obat Untuk Auto-Fill Otomatis:</span>
                              <button
                                type="button"
                                onClick={() => setActiveSearchMedId(null)}
                                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                              >
                                ✕
                              </button>
                            </div>
                            {matchingSuggestions.map((d) => (
                              <button
                                key={d.id}
                                type="button"
                                onClick={() => handleAutoFillMedication(med.id, d.name, d)}
                                className="w-full p-2.5 text-left hover:bg-emerald-50 dark:hover:bg-emerald-950/60 transition flex items-center justify-between cursor-pointer group/item"
                              >
                                <div>
                                  <span className="font-bold text-slate-900 dark:text-white group-hover/item:text-emerald-600 dark:group-hover/item:text-emerald-300 block">
                                    {d.name}
                                  </span>
                                  <span className="text-[10px] text-slate-500 dark:text-slate-400">
                                    {d.genericName} • {d.category}
                                  </span>
                                </div>
                                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-700">
                                  ⚡ Terapkan
                                </span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Kegunaan / Indikasi Awam */}
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-400 mb-1">
                          Kegunaan / Indikasi Awam Pasien
                        </label>
                        <input
                          type="text"
                          value={med.indicationLabel}
                          onChange={(e) => handleUpdateMedication(med.id, 'indicationLabel', e.target.value)}
                          className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 shadow-2xs"
                          placeholder="cth. Obat Penurun Tekanan Darah"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-400 mb-1">Aturan Pakai</label>
                        <input
                          type="text"
                          value={med.frequency}
                          onChange={(e) => handleUpdateMedication(med.id, 'frequency', e.target.value)}
                          className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-emerald-700 dark:text-emerald-300 font-bold focus:outline-none focus:border-emerald-500 shadow-2xs"
                          placeholder="cth. 1 x sehari 1 tablet"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-400 mb-1">Hubungan dengan Makanan</label>
                        <select
                          value={med.mealRelation}
                          onChange={(e) => handleUpdateMedication(med.id, 'mealRelation', e.target.value)}
                          className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-2 py-1.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 font-semibold shadow-2xs"
                        >
                          <option value="sesudah">Sesudah Makan</option>
                          <option value="sebelum">Sebelum Makan (30-60 mnt)</option>
                          <option value="bersama">Bersama Suapan Makan</option>
                          <option value="bebas">Bebas (Dapat dg/tanpa makanan)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-400 mb-1">Waktu Minum Spesifik</label>
                        <input
                          type="text"
                          value={med.timing}
                          onChange={(e) => handleUpdateMedication(med.id, 'timing', e.target.value)}
                          className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 shadow-2xs"
                          placeholder="cth. Pagi hari setelah sarapan"
                        />
                      </div>
                    </div>

                    {/* Petunjuk Khusus & Pantangan Makanan / Minuman */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <div>
                        <label className="block text-[10.5px] font-bold text-slate-700 dark:text-slate-400 mb-1">
                          Petunjuk Khusus & Cara Pakai (Opsional)
                        </label>
                        <input
                          type="text"
                          value={med.specialInstructions || ''}
                          onChange={(e) => handleUpdateMedication(med.id, 'specialInstructions', e.target.value)}
                          className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-800 dark:text-slate-300 focus:outline-none focus:border-emerald-500 shadow-2xs"
                          placeholder="cth. Minum teratur pada jam yang sama"
                        />
                      </div>

                      <div>
                        <label className="block text-[10.5px] font-bold text-slate-700 dark:text-slate-400 mb-1">
                          Pantangan Makanan / Minuman (Opsional)
                        </label>
                        <input
                          type="text"
                          value={med.foodPrecautions || ''}
                          onChange={(e) => handleUpdateMedication(med.id, 'foodPrecautions', e.target.value)}
                          className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-amber-800 dark:text-amber-200/90 focus:outline-none focus:border-emerald-500 shadow-2xs"
                          placeholder="cth. Kurangi garam dan hindari jus grapefruit"
                        />
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-slate-200 dark:border-slate-900">
                      <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-700 dark:text-slate-300">
                        <input
                          type="checkbox"
                          checked={med.isAntibioticMustFinish}
                          onChange={(e) => handleUpdateMedication(med.id, 'isAntibioticMustFinish', e.target.checked)}
                          className="rounded accent-emerald-600 w-3.5 h-3.5"
                        />
                        <span className="text-amber-700 dark:text-amber-300 font-bold text-[11px]">
                          ⚠️ Tandai sebagai Antibiotik (Wajib Dihabiskan)
                        </span>
                      </label>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: PREVIEW & ACTION BAR */}
        <div className="lg:col-span-6 space-y-6">
          {/* Action Trigger Buttons */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider font-outfit">
                Aksi Pengiriman Edukasi Pasien
              </span>
              <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
                <button
                  onClick={() => setActivePreviewMode('whatsapp')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${activePreviewMode === 'whatsapp' ? 'bg-emerald-600 text-white shadow-2xs' : 'text-slate-600 dark:text-slate-400'}`}
                >
                  <Smartphone className="w-3.5 h-3.5 inline mr-1" />
                  Format WA
                </button>
                <button
                  onClick={() => setActivePreviewMode('card')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${activePreviewMode === 'card' ? 'bg-emerald-600 text-white shadow-2xs' : 'text-slate-600 dark:text-slate-400'}`}
                >
                  <FileText className="w-3.5 h-3.5 inline mr-1" />
                  Kartu Digital
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                onClick={handleOpenWhatsAppDirect}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white shadow-md shadow-emerald-600/20 transition transform active:scale-95 cursor-pointer font-outfit"
              >
                <Send className="w-4 h-4" />
                Kirim via WhatsApp (1-Klik)
              </button>

              <button
                onClick={handleCopyToClipboard}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition cursor-pointer font-outfit"
              >
                {copiedNotification ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    Teks Tersalin!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Salin Pesan WhatsApp
                  </>
                )}
              </button>
            </div>
          </div>

          {/* PREVIEW CONTAINER */}
          {activePreviewMode === 'whatsapp' ? (
            /* SMARTPHONE WHATSAPP CHAT MOCKUP */
            <div className="bg-[#0b141a] border border-slate-800 rounded-3xl p-4 shadow-2xl overflow-hidden max-w-md mx-auto relative">
              {/* Phone Status Bar */}
              <div className="flex items-center justify-between text-[11px] text-slate-400 px-2 pb-3 border-b border-[#202c33]">
                <span className="font-semibold text-emerald-400">WhatsApp Chat Pasien</span>
                <span>+{sanitizedWhatsAppPhone}</span>
              </div>

              {/* Chat Header */}
              <div className="flex items-center gap-2.5 py-3 px-2 border-b border-[#202c33] bg-[#202c33]/40 rounded-xl my-2">
                <div className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                  {(customClinicName || clinicBranding.clinicName) ? (customClinicName || clinicBranding.clinicName).charAt(0) : 'A'}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">{customClinicName || clinicBranding.clinicName || 'Apotek Sehat Medika'}</h4>
                  <span className="text-[10px] text-emerald-400">Online • Layanan Informasi Obat</span>
                </div>
              </div>

              {/* Chat Message Bubble */}
              <div className="my-3 bg-[#005c4b] text-white rounded-2xl rounded-tl-sm p-4 text-xs shadow-md space-y-2.5 font-sans leading-relaxed border border-emerald-700/40">
                <div className="whitespace-pre-wrap font-mono text-[11.5px] leading-relaxed select-text">
                  {generatedWhatsAppText}
                </div>
                <div className="flex justify-end items-center gap-1 text-[10px] text-emerald-200/80 pt-1">
                  <span>10:00</span>
                  <Check className="w-3 h-3 text-sky-300 inline" />
                </div>
              </div>
            </div>
          ) : (
            /* PRINTABLE VISUAL PIO CARD */
            <div className="bg-white text-slate-900 rounded-2xl p-6 shadow-2xl space-y-4 border border-slate-200">
              <div className="flex items-center justify-between border-b-2 border-emerald-600 pb-3">
                <div>
                  <h3 className="text-base font-extrabold text-emerald-800 uppercase tracking-tight">
                    {customClinicName || clinicBranding.clinicName || 'APOTEK SEHAT MEDIKA'}
                  </h3>
                  <p className="text-[11px] text-slate-600">{clinicBranding.address || 'Jl. Layanan Kesehatan No. 1'}</p>
                  <p className="text-[10px] text-slate-500">Apoteker: {customPharmacistName || clinicBranding.pharmacistName} | {customPharmacistSipa || clinicBranding.pharmacistSipa || clinicBranding.sipNumber}</p>
                </div>
                <div className="text-right">
                  <span className="px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-extrabold uppercase">
                    KARTU INFORMASI OBAT
                  </span>
                  <span className="block text-[11px] text-slate-500 mt-1">Pasien: <strong>{patientName}</strong></span>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider text-emerald-700">Jadwal Minum Obat:</h4>
                <div className="border border-slate-200 rounded-xl overflow-hidden">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead className="bg-emerald-50 text-emerald-900 border-b border-slate-200">
                      <tr>
                        <th className="p-2">Nama Obat</th>
                        <th className="p-2">Aturan</th>
                        <th className="p-2">Waktu & Hubungan Makan</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {medications.map((m, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="p-2 font-bold text-slate-900">
                            {m.drugName}
                            <span className="block text-[10px] text-slate-500 font-normal">{m.indicationLabel}</span>
                          </td>
                          <td className="p-2 font-semibold text-emerald-700">{m.frequency}</td>
                          <td className="p-2 text-[11px] text-slate-700">
                            {m.timing} ({m.mealRelation})
                            {m.isAntibioticMustFinish && <span className="block text-[10px] font-bold text-rose-600">⚠️ Habiskan</span>}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-500">
                <span>Konsultasi WA: {clinicBranding.phone || '+62 812-xxxx-xxxx'}</span>
                <button
                  onClick={handlePrintCard}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold transition"
                >
                  <Printer className="w-3 h-3" />
                  Cetak Kartu Fisik
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Monograph Catalog Popover / Modal */}
      {showMonographModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3 bg-slate-50/70 dark:bg-slate-950/50">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-500/20 text-amber-600 dark:text-amber-300 flex items-center justify-center font-bold">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-outfit">
                    Katalog Cepat Monografi Obat (250+ Master Auto-Fill PIO)
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Pilih obat untuk langsung mengisi 7 kolom aturan pakai & edukasi pasien secara otomatis
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowMonographModal(false)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Search & Category Tabs */}
            <div className="p-4 border-b border-slate-100 dark:border-slate-800 space-y-3 bg-white dark:bg-slate-900">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  value={pioCategorySearch}
                  onChange={(e) => setPioCategorySearch(e.target.value)}
                  placeholder="Cari nama obat, generik, atau indikasi..."
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl pl-9 pr-8 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 shadow-2xs"
                />
                {pioCategorySearch && (
                  <button
                    type="button"
                    onClick={() => setPioCategorySearch('')}
                    className="absolute right-2.5 top-2 text-slate-400 hover:text-slate-600 dark:hover:text-white text-xs"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Category Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
                {PIO_DRUG_CATEGORIES.map((cat) => {
                  const isActive = selectedPioCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedPioCategory(cat.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer flex items-center gap-1.5 ${
                        isActive
                          ? 'bg-emerald-600 text-white shadow-xs'
                          : 'bg-slate-100 dark:bg-slate-950 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-200 dark:border-slate-800'
                      }`}
                    >
                      <span>{cat.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Drug Grid Content */}
            <div className="p-4 overflow-y-auto max-h-[45vh] space-y-2">
              {addedToastMessage && (
                <div className="p-2.5 mb-2 rounded-xl bg-emerald-50 dark:bg-emerald-500/20 border border-emerald-200 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-300 text-xs font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Obat <strong>"{addedToastMessage}"</strong> berhasil ditambahkan ke daftar pasien!</span>
                </div>
              )}

              {(() => {
                const currentCat = PIO_DRUG_CATEGORIES.find(c => c.id === selectedPioCategory) || PIO_DRUG_CATEGORIES[0];
                let displayedItems: { name: string; drugObj?: Drug }[] = [];
                const searchClean = pioCategorySearch.toLowerCase().trim();

                if (selectedPioCategory === 'populer') {
                  displayedItems = POPULAR_PIO_DRUGS
                    .filter(name => !searchClean || name.toLowerCase().includes(searchClean))
                    .map(name => {
                      const match = (drugs || []).find(d => d.name.toLowerCase().includes(name.toLowerCase()) || (d.genericName && name.toLowerCase().includes(d.genericName.toLowerCase())));
                      return { name, drugObj: match };
                    });
                } else if (selectedPioCategory === 'semua') {
                  const seenNames = new Set<string>();
                  const combined: { name: string; drugObj?: Drug }[] = [];

                  // First include curated popular drugs
                  POPULAR_PIO_DRUGS.forEach(name => {
                    if (!searchClean || name.toLowerCase().includes(searchClean)) {
                      seenNames.add(name.toLowerCase());
                      const match = (drugs || []).find(d => d.name.toLowerCase().includes(name.toLowerCase()) || (d.genericName && name.toLowerCase().includes(d.genericName.toLowerCase())));
                      combined.push({ name, drugObj: match });
                    }
                  });

                  // Then append from master drugs
                  (drugs || []).forEach(d => {
                    const norm = d.name.toLowerCase();
                    if (!seenNames.has(norm)) {
                      if (!searchClean || norm.includes(searchClean) || (d.genericName && d.genericName.toLowerCase().includes(searchClean))) {
                        seenNames.add(norm);
                        combined.push({ name: d.name, drugObj: d });
                      }
                    }
                  });

                  displayedItems = combined.slice(0, 150);
                } else {
                  const kws = currentCat.keywords || [];
                  const seenNames = new Set<string>();
                  const combined: { name: string; drugObj?: Drug }[] = [];

                  // Match from POPULAR_PIO_DRUGS
                  POPULAR_PIO_DRUGS.forEach(name => {
                    const lowerName = name.toLowerCase();
                    const matchesCat = kws.some(kw => lowerName.includes(kw));
                    const matchesSearch = !searchClean || lowerName.includes(searchClean);
                    if (matchesCat && matchesSearch) {
                      seenNames.add(lowerName);
                      const match = (drugs || []).find(d => d.name.toLowerCase().includes(lowerName) || (d.genericName && lowerName.includes(d.genericName.toLowerCase())));
                      combined.push({ name, drugObj: match });
                    }
                  });

                  // Match from master drugs database
                  (drugs || []).forEach(d => {
                    const lowerName = d.name.toLowerCase();
                    const fullDesc = (d.name + ' ' + (d.genericName || '') + ' ' + (d.category || '')).toLowerCase();
                    const matchesCat = kws.some(kw => fullDesc.includes(kw));
                    const matchesSearch = !searchClean || fullDesc.includes(searchClean);
                    if (matchesCat && matchesSearch && !seenNames.has(lowerName)) {
                      seenNames.add(lowerName);
                      combined.push({ name: d.name, drugObj: d });
                    }
                  });

                  displayedItems = combined.slice(0, 100);
                }

                if (displayedItems.length === 0) {
                  return (
                    <div className="py-8 text-center text-xs text-slate-500">
                      Tidak ditemukan obat monografi yang cocok dengan "{pioCategorySearch}".
                    </div>
                  );
                }

                return (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {displayedItems.map((item, idx) => {
                      const formBadge = getFormBadge(item.name);
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleQuickAddPopularDrug(item.name)}
                          className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-left border border-slate-200 dark:border-slate-800 hover:border-emerald-400 dark:hover:border-emerald-700/60 transition cursor-pointer flex items-center justify-between gap-2 group/card"
                        >
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <span className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover/card:text-emerald-700 dark:group-hover/card:text-emerald-300 block truncate">
                                {item.name}
                              </span>
                              <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-semibold border ${formBadge.color}`}>
                                {formBadge.label}
                              </span>
                            </div>
                            {item.drugObj?.category && (
                              <span className="text-[10px] text-slate-500 group-hover/card:text-emerald-600 dark:group-hover/card:text-emerald-400/80 block truncate mt-0.5">
                                {item.drugObj.category}
                              </span>
                            )}
                          </div>
                          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] font-bold bg-slate-200 dark:bg-slate-900 group-hover/card:bg-emerald-600 text-slate-700 dark:text-slate-400 group-hover/card:text-white transition shrink-0">
                            <Plus className="w-3 h-3" />
                            Pilih
                          </span>
                        </button>
                      );
                    })}
                  </div>
                );
              })()}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950 flex items-center justify-between gap-3 text-xs">
              <span className="text-slate-500 font-medium">
                💡 Anda dapat memilih beberapa obat sekaligus.
              </span>
              <button
                type="button"
                onClick={() => setShowMonographModal(false)}
                className="px-4 py-1.5 rounded-xl font-bold bg-slate-800 hover:bg-slate-700 text-white transition cursor-pointer"
              >
                Selesai ({medications.length} Obat di Resep)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
