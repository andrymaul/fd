// =====================================================================
// DATABASE MASTER SEDIAAN TABLET RACIKAN FARMASI INDONESIA (100+ PRESETS)
// Standar: Farmakope Indonesia VI, Formularium Nasional, BPOM & MIMS Indonesia
// Digunakan untuk otomasi autocomplete nama obat & kekuatan sediaan tablet
// pada Formulator Resep Racikan Puyer & Kapsul
// =====================================================================

export interface CompoundingTabletPreset {
  id: string;
  name: string;
  genericName: string;
  brandSynonyms: string[];
  category: string;
  defaultStrengthMg: number;
  availableStrengthsMg: number[];
  standardTabletWeightMg: number; // Bobot fisik tablet utuh (mg) untuk akurasi pengisi SL
  pediatricDoseMgPerKgPerDose?: number; // Dosis anjuran per kali minum (mg/kg/kali)
  pediatricDoseRangeLabel?: string; // Label dosis acuan pediatrik
  doseUnit?: string;
  notes?: string;
}

export const COMPOUNDING_TABLET_PRESETS: CompoundingTabletPreset[] = [
  // =====================================================================
  // 1. ANALGESIK, ANTIPIRETIK & NSAID
  // =====================================================================
  {
    id: 'comp-preset-paracetamol',
    name: 'Paracetamol (Acetaminophen)',
    genericName: 'Paracetamol',
    brandSynonyms: ['Sanmol', 'Tempra', 'Pamol', 'Biogesic', 'Panadol', 'Farmadol', 'Dumin', 'Ottopan', 'Alphamol'],
    category: 'Antipiretik & Analgesik',
    defaultStrengthMg: 500,
    availableStrengthsMg: [100, 500, 650],
    standardTabletWeightMg: 600,
    pediatricDoseMgPerKgPerDose: 10,
    pediatricDoseRangeLabel: '10 - 15 mg/kg/kali (Maks 4-5x sehari / p.r.n)',
    notes: 'Sediaan kunyah anak 100 mg/tab, tablet dewasa 500 mg, forte 650 mg.'
  },
  {
    id: 'comp-preset-ibuprofen',
    name: 'Ibuprofen',
    genericName: 'Ibuprofen',
    brandSynonyms: ['Proris', 'Bufect', 'Farsifen', 'Dolofen', 'Arifen'],
    category: 'NSAID / Antipiretik & Antiinflamasi',
    defaultStrengthMg: 200,
    availableStrengthsMg: [100, 200, 400],
    standardTabletWeightMg: 350,
    pediatricDoseMgPerKgPerDose: 7.5,
    pediatricDoseRangeLabel: '5 - 10 mg/kg/kali sesudah makan (3-4x sehari)',
    notes: 'Wajib sesudah makan. Pilihan tablet 200 mg dan 400 mg.'
  },
  {
    id: 'comp-preset-asam-mefenamat',
    name: 'Asam Mefenamat (Mefenamic Acid)',
    genericName: 'Asam Mefenamat',
    brandSynonyms: ['Ponstan', 'Mefinal', 'Mefentan', 'Lapistan', 'Nichostan', 'Asmef'],
    category: 'NSAID / Analgesik Nyeri',
    defaultStrengthMg: 500,
    availableStrengthsMg: [250, 500],
    standardTabletWeightMg: 650,
    pediatricDoseMgPerKgPerDose: 6.5,
    pediatricDoseRangeLabel: '6.5 mg/kg/kali sesudah makan (anak >6 tahun)',
    notes: 'Kapsul 250 mg dan kaplet 500 mg.'
  },
  {
    id: 'comp-preset-natrium-diklofenak',
    name: 'Natrium Diklofenak (Diclofenac Sodium)',
    genericName: 'Diclofenac Sodium',
    brandSynonyms: ['Voltaren', 'Voltadex', 'Flamar', 'Divoltar', 'Fenavel', 'Renadinac'],
    category: 'NSAID / Antiinflamasi',
    defaultStrengthMg: 50,
    availableStrengthsMg: [25, 50],
    standardTabletWeightMg: 200,
    pediatricDoseMgPerKgPerDose: 1,
    pediatricDoseRangeLabel: '0.5 - 1 mg/kg/kali sesudah makan (2-3x sehari)',
    notes: 'Tablet enteric coated (salut enterik). Sebaiknya tidak digerus jika ada pilihan lain.'
  },
  {
    id: 'comp-preset-kalium-diklofenak',
    name: 'Kalium Diklofenak (Diclofenac Potassium)',
    genericName: 'Diclofenac Potassium',
    brandSynonyms: ['Cataflam', 'Eflagen', 'Kaflam', 'Scanaflam', 'Zegren'],
    category: 'NSAID Onset Cepat',
    defaultStrengthMg: 50,
    availableStrengthsMg: [25, 50],
    standardTabletWeightMg: 200,
    pediatricDoseMgPerKgPerDose: 1,
    pediatricDoseRangeLabel: '0.5 - 1 mg/kg/kali (2-3x sehari sesudah makan)',
    notes: 'Garam kalium lebih cepat diabsorpsi dibanding natrium diklofenak.'
  },
  {
    id: 'comp-preset-meloxicam',
    name: 'Meloxicam',
    genericName: 'Meloxicam',
    brandSynonyms: ['Mobic', 'Mecox', 'Loxic', 'Oxcam', 'Melocid'],
    category: 'NSAID COX-2 Preferensial',
    defaultStrengthMg: 7.5,
    availableStrengthsMg: [7.5, 15],
    standardTabletWeightMg: 150,
    pediatricDoseMgPerKgPerDose: 0.12,
    pediatricDoseRangeLabel: '0.12 - 0.25 mg/kg/hari (1x sehari, maks 15 mg)',
    notes: 'Diberikan 1 kali sehari bersama makanan.'
  },
  {
    id: 'comp-preset-ketoprofen',
    name: 'Ketoprofen',
    genericName: 'Ketoprofen',
    brandSynonyms: ['Kaltrofen', 'Profenid', 'Ketros', 'Nasaflam'],
    category: 'NSAID / Analgesik Poten',
    defaultStrengthMg: 50,
    availableStrengthsMg: [50, 100],
    standardTabletWeightMg: 200,
    pediatricDoseMgPerKgPerDose: 1,
    pediatricDoseRangeLabel: '1 - 2 mg/kg/kali (3x sehari sesudah makan)',
    notes: 'Tablet 50 mg atau enteric coated 100 mg.'
  },
  {
    id: 'comp-preset-piroxicam',
    name: 'Piroxicam',
    genericName: 'Piroxicam',
    brandSynonyms: ['Felden', 'Scancam', 'Rexic', 'Grazeo'],
    category: 'NSAID Oksikam',
    defaultStrengthMg: 10,
    availableStrengthsMg: [10, 20],
    standardTabletWeightMg: 150,
    pediatricDoseMgPerKgPerDose: 0.2,
    pediatricDoseRangeLabel: '0.2 - 0.3 mg/kg/hari (1x sehari)',
    notes: 'Waktu paruh panjang (50 jam). Cukup 1x sehari.'
  },
  {
    id: 'comp-preset-tramadol',
    name: 'Tramadol HCl',
    genericName: 'Tramadol',
    brandSynonyms: ['Tramal', 'Tradyl', 'Centrasic', 'Trunal-DX'],
    category: 'Analgesik Opioid Sintetis Lemah (OOT)',
    defaultStrengthMg: 50,
    availableStrengthsMg: [50],
    standardTabletWeightMg: 200,
    pediatricDoseMgPerKgPerDose: 1,
    pediatricDoseRangeLabel: '1 - 2 mg/kg/kali (Tiap 6-8 jam, anak >12 th)',
    notes: 'Obat-Obat Tertentu (OOT). Kontraindikasi pada anak <12 tahun pasca tonsilektomi.'
  },
  {
    id: 'comp-preset-codeine',
    name: 'Codeine HCl (Kodein)',
    genericName: 'Codeine HCl',
    brandSynonyms: ['Kodein KF', 'Codipront', 'Codikaf'],
    category: 'Analgesik Narkotik & Antitusif Sentral',
    defaultStrengthMg: 10,
    availableStrengthsMg: [10, 15, 20],
    standardTabletWeightMg: 120,
    pediatricDoseMgPerKgPerDose: 0.5,
    pediatricDoseRangeLabel: '0.5 - 1 mg/kg/kali (Tiap 6-8 jam, resep narkotika)',
    notes: 'Golongan Narkotika. Sangat efektif untuk batuk kering refrakter hebat.'
  },

  // =====================================================================
  // 2. MUKOLITIK & EKSPEKTORAN
  // =====================================================================
  {
    id: 'comp-preset-ambroxol',
    name: 'Ambroxol HCl',
    genericName: 'Ambroxol HCl',
    brandSynonyms: ['Mucopect', 'Epexol', 'Mucos', 'Ambril', 'Bisolvon Extra', 'Roverton'],
    category: 'Mukolitik',
    defaultStrengthMg: 30,
    availableStrengthsMg: [30],
    standardTabletWeightMg: 180,
    pediatricDoseMgPerKgPerDose: 0.5,
    pediatricDoseRangeLabel: '0.4 - 0.6 mg/kg/kali (3x sehari)',
    notes: 'Tablet standar di apotek adalah 30 mg/tab.'
  },
  {
    id: 'comp-preset-bromhexine',
    name: 'Bromhexine HCl',
    genericName: 'Bromhexine HCl',
    brandSynonyms: ['Bisolvon', 'Mucohexin', 'Broma', 'Bronchitin', 'Hexon'],
    category: 'Mukolitik',
    defaultStrengthMg: 8,
    availableStrengthsMg: [8],
    standardTabletWeightMg: 150,
    pediatricDoseMgPerKgPerDose: 0.15,
    pediatricDoseRangeLabel: '0.15 mg/kg/kali atau 2-4 mg/kali (3x sehari)',
    notes: 'Sediaan tablet paten/generik 8 mg/tab.'
  },
  {
    id: 'comp-preset-guaifenesin',
    name: 'Guaifenesin (Glyceryl Guaiacolate / GG)',
    genericName: 'Guaifenesin (GG)',
    brandSynonyms: ['GG Kimia Farma', 'Allerin', 'Guaiphenesin'],
    category: 'Ekspektoran',
    defaultStrengthMg: 100,
    availableStrengthsMg: [50, 100],
    standardTabletWeightMg: 200,
    pediatricDoseMgPerKgPerDose: 4,
    pediatricDoseRangeLabel: '3 - 5 mg/kg/kali (3-4x sehari)',
    notes: 'Sediaan umum tablet tunggal 100 mg/tab.'
  },
  {
    id: 'comp-preset-nac',
    name: 'N-Acetylcysteine (NAC)',
    genericName: 'Acetylcysteine',
    brandSynonyms: ['Fluimucil', 'Simucil', 'Nytex', 'Pectocil', 'Acetin'],
    category: 'Mukolitik Kuat & Antioksidan',
    defaultStrengthMg: 200,
    availableStrengthsMg: [200, 600],
    standardTabletWeightMg: 300,
    pediatricDoseMgPerKgPerDose: 7,
    pediatricDoseRangeLabel: '5 - 10 mg/kg/kali (2-3x sehari)',
    notes: 'Kapsul / tablet 200 mg. Bila effervescent 600 mg tidak untuk diracik puyer.'
  },
  {
    id: 'comp-preset-erdosteine',
    name: 'Erdosteine',
    genericName: 'Erdosteine',
    brandSynonyms: ['Vectrine', 'Edotin', 'Recustein', 'Vectrin'],
    category: 'Mukolitik Modulator Mukus',
    defaultStrengthMg: 300,
    availableStrengthsMg: [175, 300],
    standardTabletWeightMg: 400,
    pediatricDoseMgPerKgPerDose: 5,
    pediatricDoseRangeLabel: '5 mg/kg/kali (2x sehari)',
    notes: 'Kapsul 300 mg. Menurunkan viskositas sputum dan meningkatkan klirens mukosiliar.'
  },

  // =====================================================================
  // 3. BRONKODILATOR & DEKONGESTAN
  // =====================================================================
  {
    id: 'comp-preset-salbutamol',
    name: 'Salbutamol Sulfate',
    genericName: 'Salbutamol',
    brandSynonyms: ['Ventolin', 'Lasal', 'Astharol', 'Velutine', 'Salbuven', 'Fartolin'],
    category: 'Bronkodilator (Beta-2 Agonis)',
    defaultStrengthMg: 2,
    availableStrengthsMg: [2, 4],
    standardTabletWeightMg: 150,
    pediatricDoseMgPerKgPerDose: 0.05,
    pediatricDoseRangeLabel: '0.05 - 0.1 mg/kg/kali (3x sehari)',
    notes: 'Sangat sering diracik pada asma/bronkitis anak. Pilihan tablet 2 mg atau 4 mg.'
  },
  {
    id: 'comp-preset-terbutaline',
    name: 'Terbutaline Sulfate',
    genericName: 'Terbutaline Sulfate',
    brandSynonyms: ['Bricasma', 'Forasma', 'Nairet', 'Terasma', 'Relivan'],
    category: 'Bronkodilator (Beta-2 Agonis)',
    defaultStrengthMg: 2.5,
    availableStrengthsMg: [2.5],
    standardTabletWeightMg: 150,
    pediatricDoseMgPerKgPerDose: 0.05,
    pediatricDoseRangeLabel: '0.05 - 0.075 mg/kg/kali (3x sehari)',
    notes: 'Tablet standar 2.5 mg/tab.'
  },
  {
    id: 'comp-preset-procaterol',
    name: 'Procaterol HCl (Meptin)',
    genericName: 'Procaterol HCl',
    brandSynonyms: ['Meptin', 'Meptin Mini', 'Atock'],
    category: 'Bronkodilator Beta-2 Agonis Selektif',
    defaultStrengthMg: 25, // in mcg representation
    availableStrengthsMg: [25, 50],
    standardTabletWeightMg: 120,
    pediatricDoseMgPerKgPerDose: 1.25,
    pediatricDoseRangeLabel: '1.25 mcg/kg/kali (2x sehari: pagi & malam)',
    notes: 'Sediaan dalam mikrogram (25 mcg atau 50 mcg). Populer diresepkan dokter spesialis anak.'
  },
  {
    id: 'comp-preset-pseudoephedrine',
    name: 'Pseudoephedrine HCl',
    genericName: 'Pseudoephedrine HCl',
    brandSynonyms: ['Disudrin', 'Tremenza', 'Rhinos', 'Actifed', 'Devosix'],
    category: 'Dekongestan Hidung Sistemik',
    defaultStrengthMg: 30,
    availableStrengthsMg: [30, 60],
    standardTabletWeightMg: 150,
    pediatricDoseMgPerKgPerDose: 0.75,
    pediatricDoseRangeLabel: '0.5 - 1 mg/kg/kali (3-4x sehari)',
    notes: 'Sediaan tunggal 30 mg atau 60 mg. Hindari overdosis stimulasi SSP pada balita.'
  },
  {
    id: 'comp-preset-ephedrine',
    name: 'Ephedrine HCl (Efedrin)',
    genericName: 'Ephedrine HCl',
    brandSynonyms: ['Efedrin KF', 'Asmasolon'],
    category: 'Dekongestan & Bronkodilator Simpatomimetik',
    defaultStrengthMg: 25,
    availableStrengthsMg: [25],
    standardTabletWeightMg: 150,
    pediatricDoseMgPerKgPerDose: 0.5,
    pediatricDoseRangeLabel: '0.5 - 0.75 mg/kg/kali (3x sehari)',
    notes: 'Sediaan tablet 25 mg/tab. Termasuk prekursor farmasi.'
  },
  {
    id: 'comp-preset-theophylline',
    name: 'Theophylline (Teofilin)',
    genericName: 'Theophylline Anhydrous',
    brandSynonyms: ['Euphyllin Retard', 'Theobron', 'Retaphyl', 'Neo Napacin', 'Bronchophyl'],
    category: 'Bronkodilator Metilxantin',
    defaultStrengthMg: 130,
    availableStrengthsMg: [130, 150, 300],
    standardTabletWeightMg: 250,
    pediatricDoseMgPerKgPerDose: 3.5,
    pediatricDoseRangeLabel: '3 - 5 mg/kg/kali (Indeks Terapi Sempit!)',
    notes: 'Waspada indeks terapi sempit. Pantau takikardia, tremor, dan agitasi.'
  },
  {
    id: 'comp-preset-aminophylline',
    name: 'Aminophylline (Aminofilin)',
    genericName: 'Aminophylline',
    brandSynonyms: ['Phyllocontin', 'Aminofilin KF'],
    category: 'Bronkodilator Metilxantin',
    defaultStrengthMg: 200,
    availableStrengthsMg: [150, 200],
    standardTabletWeightMg: 280,
    pediatricDoseMgPerKgPerDose: 4,
    pediatricDoseRangeLabel: '4 - 5 mg/kg/kali (Tiap 6-8 jam)',
    notes: 'Sediaan tablet 150 mg dan 200 mg.'
  },
  {
    id: 'comp-preset-montelukast',
    name: 'Montelukast Sodium',
    genericName: 'Montelukast',
    brandSynonyms: ['Singulair', 'Monarin', 'Ventair'],
    category: 'Antagonis Reseptor Leukotrien (LTRA)',
    defaultStrengthMg: 4,
    availableStrengthsMg: [4, 5, 10],
    standardTabletWeightMg: 180,
    pediatricDoseMgPerKgPerDose: 0.25,
    pediatricDoseRangeLabel: 'Usia 2-5 th: 4 mg; 6-14 th: 5 mg (1x sehari malam)',
    notes: 'Tablet kunyah 4 mg dan 5 mg. Sangat efektif untuk asma nocturnal dan rhinitis alergi.'
  },

  // =====================================================================
  // 4. ANTIHISTAMIN & ANTI-ALERGI
  // =====================================================================
  {
    id: 'comp-preset-ctm',
    name: 'CTM (Chlorpheniramine Maleate)',
    genericName: 'Chlorpheniramine Maleate',
    brandSynonyms: ['Chlorpheniramine', 'CTM KF', 'Pehachlor', 'Allermax', 'Cohistan'],
    category: 'Antihistamin H1 Sedatif (Gen 1)',
    defaultStrengthMg: 4,
    availableStrengthsMg: [4],
    standardTabletWeightMg: 120,
    pediatricDoseMgPerKgPerDose: 0.08,
    pediatricDoseRangeLabel: '0.08 - 0.1 mg/kg/kali atau 0.35 mg/kg/hari (3-4x sehari)',
    notes: 'Paling sering diracik pada batuk alergi/rhinitis. Tablet standar 4 mg.'
  },
  {
    id: 'comp-preset-dexchlorpheniramine',
    name: 'Dexchlorpheniramine Maleate',
    genericName: 'Dexchlorpheniramine',
    brandSynonyms: ['Polaramine', 'Polamec', 'Dextamine', 'Celestamine'],
    category: 'Antihistamin H1 Enansiomer Murni',
    defaultStrengthMg: 2,
    availableStrengthsMg: [2],
    standardTabletWeightMg: 120,
    pediatricDoseMgPerKgPerDose: 0.04,
    pediatricDoseRangeLabel: '0.04 mg/kg/kali (3-4x sehari)',
    notes: 'Bentuk isomer aktif klorfeniramin dengan efikasi 2x lipat pada dosis separuhnya.'
  },
  {
    id: 'comp-preset-cetirizine',
    name: 'Cetirizine 2HCl',
    genericName: 'Cetirizine',
    brandSynonyms: ['Incidal-OD', 'Ryvel', 'Cerini', 'Cetrol', 'Ozen', 'Betarhin', 'Tiriz'],
    category: 'Antihistamin H1 Non-Sedatif (Gen 2)',
    defaultStrengthMg: 10,
    availableStrengthsMg: [10],
    standardTabletWeightMg: 180,
    pediatricDoseMgPerKgPerDose: 0.25,
    pediatricDoseRangeLabel: '0.25 mg/kg/kali (1-2x sehari) atau 2.5-5 mg/hari',
    notes: 'Tablet standar 10 mg. Tersedia scored tablet yang mudah dibagi.'
  },
  {
    id: 'comp-preset-loratadine',
    name: 'Loratadine',
    genericName: 'Loratadine',
    brandSynonyms: ['Claritin', 'Cronitin', 'Alloris', 'Sohotin', 'Clarihis', 'Pylor'],
    category: 'Antihistamin H1 Non-Sedatif (Gen 2)',
    defaultStrengthMg: 10,
    availableStrengthsMg: [10],
    standardTabletWeightMg: 150,
    pediatricDoseMgPerKgPerDose: 0.2,
    pediatricDoseRangeLabel: '5 mg/hari (BB <30 kg) atau 10 mg/hari (BB >30 kg)',
    notes: 'Tablet standar 10 mg. Diberikan 1 kali sehari.'
  },
  {
    id: 'comp-preset-levocetirizine',
    name: 'Levocetirizine HCl',
    genericName: 'Levocetirizine',
    brandSynonyms: ['Xyzal', 'L-Cet', 'Levocet'],
    category: 'Antihistamin H1 Gen 3',
    defaultStrengthMg: 5,
    availableStrengthsMg: [5],
    standardTabletWeightMg: 150,
    pediatricDoseMgPerKgPerDose: 0.1,
    pediatricDoseRangeLabel: '1.25 - 2.5 mg/hari (1x sehari malam)',
    notes: 'Enansiomer aktif cetirizine dosis 5 mg.'
  },
  {
    id: 'comp-preset-fexofenadine',
    name: 'Fexofenadine HCl',
    genericName: 'Fexofenadine',
    brandSynonyms: ['Telfast', 'Fexofed'],
    category: 'Antihistamin Non-Sedatif Murni',
    defaultStrengthMg: 60,
    availableStrengthsMg: [60, 120, 180],
    standardTabletWeightMg: 200,
    pediatricDoseMgPerKgPerDose: 1.5,
    pediatricDoseRangeLabel: '30 mg 2x sehari (anak 6-11 th)',
    notes: 'Tidak menembus sawar darah otak, bebas efek sedasi.'
  },
  {
    id: 'comp-preset-diphenhydramine',
    name: 'Diphenhydramine HCl',
    genericName: 'Diphenhydramine',
    brandSynonyms: ['Benadryl', 'Valdres'],
    category: 'Antihistamin & Antiemetik Sedatif',
    defaultStrengthMg: 25,
    availableStrengthsMg: [25, 50],
    standardTabletWeightMg: 150,
    pediatricDoseMgPerKgPerDose: 1,
    pediatricDoseRangeLabel: '1 - 1.25 mg/kg/kali (Tiap 6 jam)',
    notes: 'Efek sedatif kuat dan antikolinergik.'
  },
  {
    id: 'comp-preset-cyproheptadine',
    name: 'Cyproheptadine HCl',
    genericName: 'Cyproheptadine',
    brandSynonyms: ['Pronicy', 'Ennamax', 'Apeton', 'Heptasan'],
    category: 'Antihistamin & Perangsang Nafsu Makan',
    defaultStrengthMg: 4,
    availableStrengthsMg: [4],
    standardTabletWeightMg: 150,
    pediatricDoseMgPerKgPerDose: 0.08,
    pediatricDoseRangeLabel: '0.08 - 0.1 mg/kg/kali (2-3x sehari)',
    notes: 'Sangat sering diracik pada puyer anak gizi kurang / penambah nafsu makan.'
  },
  {
    id: 'comp-preset-ketotifen',
    name: 'Ketotifen Fumarate',
    genericName: 'Ketotifen',
    brandSynonyms: ['Zaditen', 'Profilas', 'Astafen'],
    category: 'Penstabil Sel Mast & Anti-Alergi',
    defaultStrengthMg: 1,
    availableStrengthsMg: [1],
    standardTabletWeightMg: 120,
    pediatricDoseMgPerKgPerDose: 0.025,
    pediatricDoseRangeLabel: '0.5 mg - 1 mg 2x sehari bersama makan',
    notes: 'Pencegahan profilaksis asma bronkial dan rhinitis kronis.'
  },

  // =====================================================================
  // 5. ANTITUSIF (PENEKAN BATUK KERING)
  // =====================================================================
  {
    id: 'comp-preset-dextromethorphan',
    name: 'Dextromethorphan HBr (DMP)',
    genericName: 'Dextromethorphan',
    brandSynonyms: ['DMP KF', 'Romilar', 'Bisoltussin'],
    category: 'Antitusif Sentral Non-Narkotik',
    defaultStrengthMg: 15,
    availableStrengthsMg: [15],
    standardTabletWeightMg: 120,
    pediatricDoseMgPerKgPerDose: 0.3,
    pediatricDoseRangeLabel: '0.2 - 0.4 mg/kg/kali (3-4x sehari, batuk kering)',
    notes: 'Hanya untuk batuk kering tanpa dahak. Jangan diberikan pada batuk berdahak.'
  },

  // =====================================================================
  // 6. KORTIKOSTEROID
  // =====================================================================
  {
    id: 'comp-preset-dexamethasone',
    name: 'Dexamethasone',
    genericName: 'Dexamethasone',
    brandSynonyms: ['Kalmethasone', 'Danasone', 'Cortidex', 'Molacort', 'Oradexon', 'Indexon'],
    category: 'Kortikosteroid Antiinflamasi Poten',
    defaultStrengthMg: 0.5,
    availableStrengthsMg: [0.5, 0.75],
    standardTabletWeightMg: 120,
    pediatricDoseMgPerKgPerDose: 0.05,
    pediatricDoseRangeLabel: '0.03 - 0.08 mg/kg/kali (2-3x sehari sesudah makan)',
    notes: 'Tablet standar 0.5 mg/tab (ada juga 0.75 mg). Potensi tinggi.'
  },
  {
    id: 'comp-preset-methylprednisolone',
    name: 'Methylprednisolone (Metilprednisolon)',
    genericName: 'Methylprednisolone',
    brandSynonyms: ['Medixon', 'Lameson', 'Prednox', 'Toras', 'Urbason', 'Sanexon', 'Metrison'],
    category: 'Kortikosteroid Antiinflamasi Intermediet',
    defaultStrengthMg: 4,
    availableStrengthsMg: [4, 8, 16],
    standardTabletWeightMg: 160,
    pediatricDoseMgPerKgPerDose: 0.25,
    pediatricDoseRangeLabel: '0.25 - 0.5 mg/kg/kali (2-3x sehari sesudah makan)',
    notes: 'Sangat sering diracik. Tersedia sediaan tablet 4 mg, 8 mg, dan 16 mg.'
  },
  {
    id: 'comp-preset-prednisone',
    name: 'Prednisone (Prednison)',
    genericName: 'Prednisone',
    brandSynonyms: ['Prednison KF', 'Pehacort', 'Niprodan'],
    category: 'Kortikosteroid Antiinflamasi',
    defaultStrengthMg: 5,
    availableStrengthsMg: [5],
    standardTabletWeightMg: 150,
    pediatricDoseMgPerKgPerDose: 0.35,
    pediatricDoseRangeLabel: '0.3 - 0.5 mg/kg/kali sesudah makan (2-3x sehari)',
    notes: 'Tablet standar 5 mg/tab. Baku emas terapi steroid inflamasi.'
  },
  {
    id: 'comp-preset-triamcinolone',
    name: 'Triamcinolone',
    genericName: 'Triamcinolone',
    brandSynonyms: ['Kenacort', 'Trilac', 'Flamicort', 'Aristocort'],
    category: 'Kortikosteroid',
    defaultStrengthMg: 4,
    availableStrengthsMg: [4],
    standardTabletWeightMg: 150,
    pediatricDoseMgPerKgPerDose: 0.1,
    pediatricDoseRangeLabel: '0.1 mg/kg/kali (1-2x sehari)',
    notes: 'Tablet 4 mg/tab.'
  },
  {
    id: 'comp-preset-betamethasone',
    name: 'Betamethasone',
    genericName: 'Betamethasone',
    brandSynonyms: ['Celestone', 'Betasone'],
    category: 'Kortikosteroid Poten',
    defaultStrengthMg: 0.5,
    availableStrengthsMg: [0.5],
    standardTabletWeightMg: 120,
    pediatricDoseMgPerKgPerDose: 0.04,
    pediatricDoseRangeLabel: '0.02 - 0.05 mg/kg/kali (2-3x sehari)',
    notes: 'Tablet 0.5 mg/tab.'
  },
  {
    id: 'comp-preset-hydrocortisone',
    name: 'Hydrocortisone (Oral)',
    genericName: 'Hydrocortisone',
    brandSynonyms: ['Cortef', 'Hydrocortisone KF'],
    category: 'Glukokortikoid Alami (Insufisiensi Adrenal)',
    defaultStrengthMg: 10,
    availableStrengthsMg: [10, 20],
    standardTabletWeightMg: 150,
    pediatricDoseMgPerKgPerDose: 0.3,
    pediatricDoseRangeLabel: '8 - 10 mg/m2/hari (terapi sulih adrenal terbagi 3 dosis)',
    notes: 'Tablet 10 mg atau 20 mg.'
  },

  // =====================================================================
  // 7. GASTROINTESTINAL, ANTIEMETIK & SPASMOLITIK
  // =====================================================================
  {
    id: 'comp-preset-domperidone',
    name: 'Domperidone',
    genericName: 'Domperidone',
    brandSynonyms: ['Vometa', 'Dominal', 'Motilium', 'Vomercon', 'Tilidon'],
    category: 'Antiemetik & Prokinetik Lambung',
    defaultStrengthMg: 10,
    availableStrengthsMg: [10],
    standardTabletWeightMg: 150,
    pediatricDoseMgPerKgPerDose: 0.25,
    pediatricDoseRangeLabel: '0.25 mg/kg/kali 15-30 menit sebelum makan (3x sehari)',
    notes: 'Tablet 10 mg. Waspada pemanjangan interval QTc.'
  },
  {
    id: 'comp-preset-ondansetron',
    name: 'Ondansetron HCl',
    genericName: 'Ondansetron',
    brandSynonyms: ['Narfoz', 'Vomceran', 'Cedantron', 'Zofran', 'Dantron', 'Invomit'],
    category: 'Antiemetik 5-HT3 Antagonis',
    defaultStrengthMg: 4,
    availableStrengthsMg: [4, 8],
    standardTabletWeightMg: 150,
    pediatricDoseMgPerKgPerDose: 0.15,
    pediatricDoseRangeLabel: '0.1 - 0.15 mg/kg/kali (2-3x sehari)',
    notes: 'Tablet 4 mg atau 8 mg. Sangat efektif untuk mual/muntah muntaber berat.'
  },
  {
    id: 'comp-preset-metoclopramide',
    name: 'Metoclopramide HCl',
    genericName: 'Metoclopramide',
    brandSynonyms: ['Primperan', 'Plasil', 'Damaben', 'Sotatic', 'Gavistal'],
    category: 'Antiemetik & Prokinetik',
    defaultStrengthMg: 10,
    availableStrengthsMg: [5, 10],
    standardTabletWeightMg: 140,
    pediatricDoseMgPerKgPerDose: 0.1,
    pediatricDoseRangeLabel: '0.1 mg/kg/kali (Maks 3x sehari)',
    notes: 'Waspada reaksi ekstrapiramidal (distonia leher) pada anak/remaja.'
  },
  {
    id: 'comp-preset-ranitidine',
    name: 'Ranitidine HCl',
    genericName: 'Ranitidine',
    brandSynonyms: ['Zantac', 'Rantin', 'Acran', 'Gastridin', 'Radin'],
    category: 'H2-Blocker / Penekan Asam Lambung',
    defaultStrengthMg: 150,
    availableStrengthsMg: [150],
    standardTabletWeightMg: 250,
    pediatricDoseMgPerKgPerDose: 2,
    pediatricDoseRangeLabel: '2 - 4 mg/kg/kali (2x sehari)',
    notes: 'Tablet 150 mg/tab.'
  },
  {
    id: 'comp-preset-famotidine',
    name: 'Famotidine',
    genericName: 'Famotidine',
    brandSynonyms: ['Facid', 'Gaster', 'Famocid'],
    category: 'H2-Blocker',
    defaultStrengthMg: 20,
    availableStrengthsMg: [20, 40],
    standardTabletWeightMg: 150,
    pediatricDoseMgPerKgPerDose: 0.5,
    pediatricDoseRangeLabel: '0.5 mg/kg/kali (1-2x sehari)',
    notes: 'Tablet 20 mg atau 40 mg.'
  },
  {
    id: 'comp-preset-omeprazole',
    name: 'Omeprazole (Kapsul Pelet)',
    genericName: 'Omeprazole',
    brandSynonyms: ['Prilos', 'Ozid', 'Lokev', 'Omevell', 'Losec'],
    category: 'Penghambat Pompa Proton (PPI)',
    defaultStrengthMg: 20,
    availableStrengthsMg: [20],
    standardTabletWeightMg: 250,
    pediatricDoseMgPerKgPerDose: 0.7,
    pediatricDoseRangeLabel: '0.7 - 1 mg/kg/hari (1x sehari pagi 30 mnt sebelum makan)',
    notes: 'Kapsul dibuka butiran mikrosfernya dicampur makanan lunak / puyer tanpa digerus.'
  },
  {
    id: 'comp-preset-lansoprazole',
    name: 'Lansoprazole (Kapsul Pelet)',
    genericName: 'Lansoprazole',
    brandSynonyms: ['Prosogan', 'Inazol', 'Lapraz', 'Lanvell'],
    category: 'Penghambat Pompa Proton (PPI)',
    defaultStrengthMg: 30,
    availableStrengthsMg: [30],
    standardTabletWeightMg: 300,
    pediatricDoseMgPerKgPerDose: 0.8,
    pediatricDoseRangeLabel: '0.8 - 1.5 mg/kg/hari (1x sehari pagi)',
    notes: 'Kapsul 30 mg.'
  },
  {
    id: 'comp-preset-hyoscine',
    name: 'Hyoscine N-Butylbromide (Hiosin)',
    genericName: 'Hyoscine-N-Butylbromide',
    brandSynonyms: ['Buscopan', 'Gitas', 'Spasmal', 'Scopolamine'],
    category: 'Spasmolitik Kolik Saluran Cerna',
    defaultStrengthMg: 10,
    availableStrengthsMg: [10],
    standardTabletWeightMg: 150,
    pediatricDoseMgPerKgPerDose: 0.3,
    pediatricDoseRangeLabel: '0.3 - 0.5 mg/kg/kali (3x sehari pada kolik)',
    notes: 'Tablet 10 mg/tab. Mengatasi kram/kolik abdomen hebat.'
  },
  {
    id: 'comp-preset-papaverine',
    name: 'Papaverine HCl',
    genericName: 'Papaverine',
    brandSynonyms: ['Papaverin KF'],
    category: 'Spasmolitik Otot Polos',
    defaultStrengthMg: 40,
    availableStrengthsMg: [40],
    standardTabletWeightMg: 150,
    pediatricDoseMgPerKgPerDose: 1,
    pediatricDoseRangeLabel: '1 - 1.5 mg/kg/kali (3x sehari)',
    notes: 'Tablet 40 mg/tab. Sering diracik pada kolik/kejang lambung anak.'
  },
  {
    id: 'comp-preset-clidinium',
    name: 'Chlordiazepoxide + Clidinium Br (Braxidin)',
    genericName: 'Clidinium Bromide + Chlordiazepoxide',
    brandSynonyms: ['Braxidin', 'Librax', 'Cliad'],
    category: 'Antispasmodik & Sedatif Lambung (IBS)',
    defaultStrengthMg: 2.5,
    availableStrengthsMg: [2.5],
    standardTabletWeightMg: 160,
    pediatricDoseMgPerKgPerDose: 0.05,
    pediatricDoseRangeLabel: '1/2 - 1 tablet (2-3x sehari sebelum makan, dewasa/remaja)',
    notes: 'Kombinasi clidinium 2.5 mg + chlordiazepoxide 5 mg.'
  },
  {
    id: 'comp-preset-loperamide',
    name: 'Loperamide HCl',
    genericName: 'Loperamide',
    brandSynonyms: ['Imodium', 'Lodia', 'Inamid', 'Renamid'],
    category: 'Antidiare Antimotilitas',
    defaultStrengthMg: 2,
    availableStrengthsMg: [2],
    standardTabletWeightMg: 120,
    pediatricDoseMgPerKgPerDose: 0.08,
    pediatricDoseRangeLabel: '0.08 mg/kg/kali sesudah BAB (Anak >2-6 tahun)',
    notes: 'Tablet 2 mg. KONTRAINDIKASI PADA DISENTERI BERDARAH ATAU BALITA <2 TAHUN.'
  },
  {
    id: 'comp-preset-zinc',
    name: 'Zinc Sulfate Dispersible (Diare Anak)',
    genericName: 'Zinc Sulfate',
    brandSynonyms: ['Zinkid', 'L-Bio Zinc', 'Daryazinc', 'Orezinc', 'Zincare'],
    category: 'Suplemen Diare Pediatrik (WHO/IDAI)',
    defaultStrengthMg: 20,
    availableStrengthsMg: [20],
    standardTabletWeightMg: 200,
    pediatricDoseMgPerKgPerDose: 10,
    pediatricDoseRangeLabel: 'Usia <6 bln: 10 mg/hari; Usia >6 bln: 20 mg/hari selama 10 hari',
    notes: 'Tablet dispersible 20 mg/tab. Diberikan selama 10 hari berturut-turut.'
  },
  {
    id: 'comp-preset-urdahex',
    name: 'Ursodeoxycholic Acid (UDCA)',
    genericName: 'Ursodeoxycholic Acid',
    brandSynonyms: ['Urdahex', 'Urdafalk', 'Estazor'],
    category: 'Hepatoprotektor & Kolestasis Pediatrik',
    defaultStrengthMg: 250,
    availableStrengthsMg: [250],
    standardTabletWeightMg: 400,
    pediatricDoseMgPerKgPerDose: 5,
    pediatricDoseRangeLabel: '10 - 15 mg/kg/hari terbagi 2-3 dosis bersama makanan',
    notes: 'Kapsul 250 mg. Sangat sering diracik puyer pada atresia bilier / ikterus neonatus.'
  },

  // =====================================================================
  // 8. SISTEM SARAF, SEDATIF & ANTIKONVULSAN
  // =====================================================================
  {
    id: 'comp-preset-luminal',
    name: 'Phenobarbital (Luminal)',
    genericName: 'Phenobarbital',
    brandSynonyms: ['Luminal', 'Phenobarbital KF', 'Sibital'],
    category: 'Antikonvulsan / Sedatif (Kejang Demam)',
    defaultStrengthMg: 30,
    availableStrengthsMg: [30, 50, 100],
    standardTabletWeightMg: 150,
    pediatricDoseMgPerKgPerDose: 2,
    pediatricDoseRangeLabel: 'Rumatan: 1.5 - 2.5 mg/kg/kali (2x sehari)',
    notes: 'Tablet 30 mg, 50 mg, atau 100 mg. Baku emas puyer kejang demam anak di Indonesia.'
  },
  {
    id: 'comp-preset-diazepam',
    name: 'Diazepam',
    genericName: 'Diazepam',
    brandSynonyms: ['Valium', 'Stesolid', 'Valisanbe', 'Mentalium', 'Trankinon'],
    category: 'Benzodiazepin / Antikonvulsan & Sedatif',
    defaultStrengthMg: 2,
    availableStrengthsMg: [2, 5],
    standardTabletWeightMg: 120,
    pediatricDoseMgPerKgPerDose: 0.1,
    pediatricDoseRangeLabel: '0.05 - 0.2 mg/kg/kali (2-3x sehari)',
    notes: 'Tablet 2 mg atau 5 mg. Termasuk psikotropika (resep resmi).'
  },
  {
    id: 'comp-preset-clobazam',
    name: 'Clobazam',
    genericName: 'Clobazam',
    brandSynonyms: ['Frisium', 'Asabium', 'Clobium'],
    category: 'Benzodiazepin Antikonvulsan Tambahan',
    defaultStrengthMg: 10,
    availableStrengthsMg: [10],
    standardTabletWeightMg: 150,
    pediatricDoseMgPerKgPerDose: 0.25,
    pediatricDoseRangeLabel: '0.2 - 0.5 mg/kg/hari terbagi 2 dosis',
    notes: 'Tablet 10 mg.'
  },
  {
    id: 'comp-preset-clonazepam',
    name: 'Clonazepam',
    genericName: 'Clonazepam',
    brandSynonyms: ['Rivotril', 'Clona'],
    category: 'Antikonvulsan Benzodiazepin Poten',
    defaultStrengthMg: 2,
    availableStrengthsMg: [0.5, 2],
    standardTabletWeightMg: 150,
    pediatricDoseMgPerKgPerDose: 0.02,
    pediatricDoseRangeLabel: '0.01 - 0.03 mg/kg/kali (2-3x sehari)',
    notes: 'Tablet 0.5 mg atau 2 mg.'
  },
  {
    id: 'comp-preset-valproat',
    name: 'Asam Valproat / Divalproex Sodium',
    genericName: 'Asam Valproat',
    brandSynonyms: ['Depakote', 'Depakene', 'Ikalep'],
    category: 'Antikonvulsan Epilepsi Spektrum Luas',
    defaultStrengthMg: 250,
    availableStrengthsMg: [150, 250, 500],
    standardTabletWeightMg: 400,
    pediatricDoseMgPerKgPerDose: 10,
    pediatricDoseRangeLabel: '10 - 15 mg/kg/kali (2x sehari)',
    notes: 'Sediaan enteric-coated sebaiknya tidak digerus puyer jika tersedia sirup.'
  },
  {
    id: 'comp-preset-carbamazepine',
    name: 'Carbamazepine',
    genericName: 'Carbamazepine',
    brandSynonyms: ['Tegretol', 'Bamgetol', 'Teril'],
    category: 'Antikonvulsan / Nyeri Neuropatik',
    defaultStrengthMg: 200,
    availableStrengthsMg: [200],
    standardTabletWeightMg: 350,
    pediatricDoseMgPerKgPerDose: 5,
    pediatricDoseRangeLabel: '5 - 10 mg/kg/kali (2-3x sehari)',
    notes: 'Tablet 200 mg/tab.'
  },
  {
    id: 'comp-preset-phenytoin',
    name: 'Phenytoin Sodium (Fenitoin)',
    genericName: 'Phenytoin',
    brandSynonyms: ['Dilantin', 'Kutoin', 'Decatona', 'Zentin'],
    category: 'Antikonvulsan',
    defaultStrengthMg: 100,
    availableStrengthsMg: [50, 100],
    standardTabletWeightMg: 200,
    pediatricDoseMgPerKgPerDose: 2.5,
    pediatricDoseRangeLabel: '2.5 - 4 mg/kg/kali (2x sehari)',
    notes: 'Kapsul 100 mg atau tablet kunyah 50 mg. Farmakokinetika non-linear.'
  },
  {
    id: 'comp-preset-haloperidol',
    name: 'Haloperidol',
    genericName: 'Haloperidol',
    brandSynonyms: ['Haldol', 'Serenace', 'Govotil', 'Lodomer'],
    category: 'Antipsikotik Tipikal / Sindrom Tourette / Agitasi',
    defaultStrengthMg: 1.5,
    availableStrengthsMg: [0.5, 1.5, 5],
    standardTabletWeightMg: 120,
    pediatricDoseMgPerKgPerDose: 0.025,
    pediatricDoseRangeLabel: '0.025 - 0.05 mg/kg/hari terbagi 2 dosis',
    notes: 'Tablet 0.5 mg, 1.5 mg, dan 5 mg.'
  },
  {
    id: 'comp-preset-trihexyphenidyl',
    name: 'Trihexyphenidyl HCl (THP)',
    genericName: 'Trihexyphenidyl',
    brandSynonyms: ['Artane', 'Parkinal', 'Hexymer'],
    category: 'Antikolinergik / Penawar Ekstrapiramidal',
    defaultStrengthMg: 2,
    availableStrengthsMg: [2],
    standardTabletWeightMg: 120,
    pediatricDoseMgPerKgPerDose: 0.03,
    pediatricDoseRangeLabel: '0.02 - 0.05 mg/kg/kali (2-3x sehari)',
    notes: 'Tablet 2 mg. Mengatasi distonia / rigiditas otot akibat obat antipsikotik/antiemetik.'
  },
  {
    id: 'comp-preset-betahistine',
    name: 'Betahistine Mesilate / Dihydrochloride',
    genericName: 'Betahistine',
    brandSynonyms: ['Merislon', 'Mertigo', 'Betaserc', 'Versilon'],
    category: 'Antivertigo Saluran Vestibular',
    defaultStrengthMg: 6,
    availableStrengthsMg: [6, 12, 24],
    standardTabletWeightMg: 150,
    pediatricDoseMgPerKgPerDose: 0.2,
    pediatricDoseRangeLabel: '6 - 12 mg 3x sehari sesudah makan (dewasa/remaja)',
    notes: 'Tablet 6 mg (mesilate) atau 12/24 mg (HCl).'
  },

  // =====================================================================
  // 9. ANTIBIOTIK & ANTIMIKROBA
  // =====================================================================
  {
    id: 'comp-preset-amoxicillin',
    name: 'Amoxicillin Trihydrate',
    genericName: 'Amoxicillin',
    brandSynonyms: ['Amoxil', 'Amobiotic', 'Hiconcil', 'Kalmoxillin', 'Yusimox', 'Opimox'],
    category: 'Antibiotik Penisilin Spektrum Luas',
    defaultStrengthMg: 500,
    availableStrengthsMg: [250, 500],
    standardTabletWeightMg: 650,
    pediatricDoseMgPerKgPerDose: 15,
    pediatricDoseRangeLabel: '15 - 25 mg/kg/kali (3x sehari) atau 40-90 mg/kg/hari',
    notes: 'Kapsul / kaplet 250 mg dan 500 mg. Wajib dihabiskan.'
  },
  {
    id: 'comp-preset-co-amoxiclav',
    name: 'Co-Amoxiclav (Amoxicillin + Asam Klavulanat)',
    genericName: 'Amoxicillin + Clavulanic Acid',
    brandSynonyms: ['Augmentin', 'Claneksi', 'Clavamox', 'Aumentin'],
    category: 'Antibiotik Penisilin + Inhibitor Beta-Laktamase',
    defaultStrengthMg: 625,
    availableStrengthsMg: [625],
    standardTabletWeightMg: 850,
    pediatricDoseMgPerKgPerDose: 15,
    pediatricDoseRangeLabel: '15 - 20 mg/kg/kali berbasis amox (2-3x sehari bersama makan)',
    notes: 'Tablet 625 mg (Amox 500 mg + Klavulanat 125 mg). Wajib diminum saat suapan pertama makan.'
  },
  {
    id: 'comp-preset-cefadroxil',
    name: 'Cefadroxil Monohydrate',
    genericName: 'Cefadroxil',
    brandSynonyms: ['Cefat', 'Lapicef', 'Droxefa', 'Vocefa', 'Qidrox', 'Renapecef', 'Sedrofen'],
    category: 'Antibiotik Sefalosporin Gen 1',
    defaultStrengthMg: 500,
    availableStrengthsMg: [250, 500],
    standardTabletWeightMg: 650,
    pediatricDoseMgPerKgPerDose: 15,
    pediatricDoseRangeLabel: '15 mg/kg/kali (2x sehari) atau 30 mg/kg/hari',
    notes: 'Kapsul 250 mg dan 500 mg. Pilihan utama infeksi kulit dan tonsilofaringitis.'
  },
  {
    id: 'comp-preset-cefixime',
    name: 'Cefixime Trihydrate',
    genericName: 'Cefixime',
    brandSynonyms: ['Cefspan', 'Ceptik', 'Fixacef', 'Sporetik', 'Maxpro', 'Lanfix', 'Fixiphar'],
    category: 'Antibiotik Sefalosporin Gen 3 Oral',
    defaultStrengthMg: 100,
    availableStrengthsMg: [100, 200],
    standardTabletWeightMg: 250,
    pediatricDoseMgPerKgPerDose: 4,
    pediatricDoseRangeLabel: '4 mg/kg/kali (2x sehari) atau 8 mg/kg/hari',
    notes: 'Kapsul 100 mg dan 200 mg. Sangat sering diracik pada ISK dan demam tifoid.'
  },
  {
    id: 'comp-preset-cefalexin',
    name: 'Cefalexin / Cephalexin',
    genericName: 'Cephalexin',
    brandSynonyms: ['Ospexin', 'Madlexin', 'Tepaxin'],
    category: 'Antibiotik Sefalosporin Gen 1',
    defaultStrengthMg: 500,
    availableStrengthsMg: [250, 500],
    standardTabletWeightMg: 650,
    pediatricDoseMgPerKgPerDose: 12.5,
    pediatricDoseRangeLabel: '12.5 - 25 mg/kg/kali (4x sehari)',
    notes: 'Kapsul 250 mg dan 500 mg.'
  },
  {
    id: 'comp-preset-erythromycin',
    name: 'Erythromycin Ethylsuccinate (EES)',
    genericName: 'Erythromycin',
    brandSynonyms: ['Erysanbe', 'Pharothrocin', 'Dothrocyn', 'Erythrocin'],
    category: 'Antibiotik Makrolida',
    defaultStrengthMg: 250,
    availableStrengthsMg: [250, 500],
    standardTabletWeightMg: 550,
    pediatricDoseMgPerKgPerDose: 10,
    pediatricDoseRangeLabel: '10 - 12.5 mg/kg/kali (4x sehari)',
    notes: 'Alternatif utama pasien alergi penisilin. Diminum saat perut kosong.'
  },
  {
    id: 'comp-preset-azithromycin',
    name: 'Azithromycin Dihydrate',
    genericName: 'Azithromycin',
    brandSynonyms: ['Zithromax', 'Zycin', 'Zistic', 'Aztrin', 'Binozyt'],
    category: 'Antibiotik Makrolida Azalida',
    defaultStrengthMg: 500,
    availableStrengthsMg: [250, 500],
    standardTabletWeightMg: 650,
    pediatricDoseMgPerKgPerDose: 10,
    pediatricDoseRangeLabel: 'Hari 1: 10 mg/kg/hari; Hari 2-5: 5 mg/kg/hari (1x sehari)',
    notes: 'Tablet 250 mg dan 500 mg. Cukup diminum 1 kali sehari selama 3-5 hari.'
  },
  {
    id: 'comp-preset-clarithromycin',
    name: 'Clarithromycin',
    genericName: 'Clarithromycin',
    brandSynonyms: ['Abbotic', 'Klaricid', 'Clarix', 'Biclar'],
    category: 'Antibiotik Makrolida',
    defaultStrengthMg: 250,
    availableStrengthsMg: [250, 500],
    standardTabletWeightMg: 450,
    pediatricDoseMgPerKgPerDose: 7.5,
    pediatricDoseRangeLabel: '7.5 mg/kg/kali (2x sehari)',
    notes: 'Tablet 250 mg dan 500 mg.'
  },
  {
    id: 'comp-preset-spiramycin',
    name: 'Spiramycin',
    genericName: 'Spiramycin',
    brandSynonyms: ['Rovamycine', 'Spiramisin KF', 'Sorov'],
    category: 'Antibiotik Makrolida / Toksoplasmosis',
    defaultStrengthMg: 500,
    availableStrengthsMg: [500],
    standardTabletWeightMg: 700,
    pediatricDoseMgPerKgPerDose: 25,
    pediatricDoseRangeLabel: '25 - 50 mg/kg/hari terbagi 2-3 dosis',
    notes: 'Tablet 500 mg (1.5 Miu).'
  },
  {
    id: 'comp-preset-cotrimoxazole',
    name: 'Cotrimoxazole (Sulfamethoxazole + Trimethoprim)',
    genericName: 'Cotrimoxazole',
    brandSynonyms: ['Bactrim', 'Sanprima', 'Cotrim', 'Primadex', 'Zultrop', 'Licoprima'],
    category: 'Antibiotik Kombinasi Sulfonamida',
    defaultStrengthMg: 480,
    availableStrengthsMg: [480, 960],
    standardTabletWeightMg: 600,
    pediatricDoseMgPerKgPerDose: 20,
    pediatricDoseRangeLabel: '20 mg/kg/kali (2x sehari) berbasis SMX',
    notes: 'Tablet standar 480 mg (SMX 400 mg + TMP 80 mg), forte 960 mg.'
  },
  {
    id: 'comp-preset-metronidazole',
    name: 'Metronidazole',
    genericName: 'Metronidazole',
    brandSynonyms: ['Flagyl', 'Troge', 'Metrodex', 'Corsagyl', 'Farizol'],
    category: 'Antibiotik Antianaerob & Antiprotozoa (Amebiasis)',
    defaultStrengthMg: 500,
    availableStrengthsMg: [250, 500],
    standardTabletWeightMg: 600,
    pediatricDoseMgPerKgPerDose: 10,
    pediatricDoseRangeLabel: '7.5 - 12.5 mg/kg/kali sesudah makan (3x sehari)',
    notes: 'Tablet 250 mg dan 500 mg. Rasa sangat pahit, disarankan pemanis/perasa kuat.'
  },
  {
    id: 'comp-preset-thiamphenicol',
    name: 'Thiamphenicol',
    genericName: 'Thiamphenicol',
    brandSynonyms: ['Thiamycin', 'Biothicol', 'Urfamycin', 'Dionicol'],
    category: 'Antibiotik Turunan Kloramfenikol (Tifoid)',
    defaultStrengthMg: 500,
    availableStrengthsMg: [250, 500],
    standardTabletWeightMg: 600,
    pediatricDoseMgPerKgPerDose: 12.5,
    pediatricDoseRangeLabel: '12.5 mg/kg/kali (4x sehari) atau 50 mg/kg/hari',
    notes: 'Kapsul 250 mg dan 500 mg. Pilihan terapi demam tifoid / salmonellosis.'
  },
  {
    id: 'comp-preset-chloramphenicol',
    name: 'Chloramphenicol (Kloramfenikol)',
    genericName: 'Chloramphenicol',
    brandSynonyms: ['Kloramfenikol KF', 'Colme', 'Chloramex'],
    category: 'Antibiotik Spektrum Luas (Tifoid & Meningitis)',
    defaultStrengthMg: 250,
    availableStrengthsMg: [250, 500],
    standardTabletWeightMg: 350,
    pediatricDoseMgPerKgPerDose: 12.5,
    pediatricDoseRangeLabel: '12.5 - 25 mg/kg/kali (4x sehari)',
    notes: 'Waspada Gray Baby Syndrome pada neonatus dan supresi sumsum tulang.'
  },
  {
    id: 'comp-preset-ciprofloxacin',
    name: 'Ciprofloxacin HCl',
    genericName: 'Ciprofloxacin',
    brandSynonyms: ['Ciflox', 'Baquinor', 'Ciproxin', 'Bernoflox', 'Phaproxin'],
    category: 'Antibiotik Fluorokuinolon',
    defaultStrengthMg: 500,
    availableStrengthsMg: [250, 500],
    standardTabletWeightMg: 650,
    pediatricDoseMgPerKgPerDose: 10,
    pediatricDoseRangeLabel: '10 - 15 mg/kg/kali (2x sehari, penggunaan selektif anak)',
    notes: 'Tablet 250 mg dan 500 mg. Hindari kation divalen (kalsium susu/antasida) saat minum.'
  },
  {
    id: 'comp-preset-clindamycin',
    name: 'Clindamycin HCl',
    genericName: 'Clindamycin',
    brandSynonyms: ['Dalacin C', 'Clinika', 'Prolic', 'Milorin'],
    category: 'Antibiotik Linkosamida',
    defaultStrengthMg: 300,
    availableStrengthsMg: [150, 300],
    standardTabletWeightMg: 400,
    pediatricDoseMgPerKgPerDose: 5,
    pediatricDoseRangeLabel: '3 - 6 mg/kg/kali (3-4x sehari)',
    notes: 'Kapsul 150 mg dan 300 mg. Waspada kolitis pseudomembranosa.'
  },
  {
    id: 'comp-preset-nystatin-tab',
    name: 'Nystatin Tablet Salut Gula',
    genericName: 'Nystatin',
    brandSynonyms: ['Mycostatin', 'Candistatin', 'Nystin'],
    category: 'Antijamur Polien Saluran Cerna',
    defaultStrengthMg: 500000, // 500.000 IU
    availableStrengthsMg: [500000],
    standardTabletWeightMg: 650,
    pediatricDoseMgPerKgPerDose: 100000,
    pediatricDoseRangeLabel: '100.000 - 200.000 IU 4x sehari sesudah makan',
    notes: 'Sediaan 500.000 IU per tablet salut gula.'
  },
  {
    id: 'comp-preset-griseofulvin',
    name: 'Griseofulvin Microsize',
    genericName: 'Griseofulvin',
    brandSynonyms: ['Fulcin', 'Grisovin', 'Fungistop'],
    category: 'Antijamur Tinea / Dermatofitosis',
    defaultStrengthMg: 500,
    availableStrengthsMg: [125, 500],
    standardTabletWeightMg: 600,
    pediatricDoseMgPerKgPerDose: 10,
    pediatricDoseRangeLabel: '10 - 20 mg/kg/hari bersama makanan berlemak',
    notes: 'Tablet 125 mg dan 500 mg. Absorpsi meningkat drastis jika diminum bersama susu/makanan berlemak.'
  },
  {
    id: 'comp-preset-ketoconazole',
    name: 'Ketoconazole',
    genericName: 'Ketoconazole',
    brandSynonyms: ['Nizoral', 'Mycoral', 'Formyco', 'Profungal'],
    category: 'Antijamur Azol Oral',
    defaultStrengthMg: 200,
    availableStrengthsMg: [200],
    standardTabletWeightMg: 300,
    pediatricDoseMgPerKgPerDose: 3.5,
    pediatricDoseRangeLabel: '3.3 - 6.6 mg/kg/hari (1x sehari sesudah makan)',
    notes: 'Tablet 200 mg. Hepatotoksik, pantau fungsi hepar.'
  },
  {
    id: 'comp-preset-acyclovir',
    name: 'Acyclovir (Asiklovir)',
    genericName: 'Acyclovir',
    brandSynonyms: ['Zovirax', 'Clovir', 'Poviral', 'Scanovir', 'Matrovir'],
    category: 'Antivirus Herpes & Varisela (Cacar Air)',
    defaultStrengthMg: 400,
    availableStrengthsMg: [200, 400],
    standardTabletWeightMg: 450,
    pediatricDoseMgPerKgPerDose: 20,
    pediatricDoseRangeLabel: '20 mg/kg/kali (4-5x sehari selama 5 hari pada varisela)',
    notes: 'Tablet 200 mg dan 400 mg.'
  },

  // =====================================================================
  // 10. TERAPI TB & PROFILAKSIS TB ANAK
  // =====================================================================
  {
    id: 'comp-preset-inh',
    name: 'Isoniazid (INH)',
    genericName: 'Isoniazid',
    brandSynonyms: ['INH KF', 'Tibigon'],
    category: 'Obat Anti-Tuberkulosis (OAT / Profilaksis)',
    defaultStrengthMg: 100,
    availableStrengthsMg: [100, 300],
    standardTabletWeightMg: 200,
    pediatricDoseMgPerKgPerDose: 10,
    pediatricDoseRangeLabel: '10 mg/kg/hari (1x sehari pagi saat perut kosong)',
    notes: 'Tablet 100 mg dan 300 mg. Terapi pencegahan TB (IPT) pada balita kontak TB.'
  },
  {
    id: 'comp-preset-rifampicin',
    name: 'Rifampicin',
    genericName: 'Rifampicin',
    brandSynonyms: ['Rifastar', 'Rimactane', 'Merimac', 'Corifam'],
    category: 'Obat Anti-Tuberkulosis (OAT)',
    defaultStrengthMg: 300,
    availableStrengthsMg: [150, 300, 450, 600],
    standardTabletWeightMg: 450,
    pediatricDoseMgPerKgPerDose: 15,
    pediatricDoseRangeLabel: '15 mg/kg/hari (1x sehari 1 jam sebelum makan)',
    notes: 'Kapsul 150 mg, 300 mg, atau kaplet 450/600 mg. Menyebabkan urin dan air mata berwarna merah jingga.'
  },
  {
    id: 'comp-preset-pyrazinamide',
    name: 'Pyrazinamide (PZA)',
    genericName: 'Pyrazinamide',
    brandSynonyms: ['PZA KF', 'Neotebi', 'Corsazinamide'],
    category: 'Obat Anti-Tuberkulosis (OAT)',
    defaultStrengthMg: 500,
    availableStrengthsMg: [500],
    standardTabletWeightMg: 650,
    pediatricDoseMgPerKgPerDose: 35,
    pediatricDoseRangeLabel: '30 - 40 mg/kg/hari (1x sehari)',
    notes: 'Tablet 500 mg/tab.'
  },
  {
    id: 'comp-preset-ethambutol',
    name: 'Ethambutol HCl',
    genericName: 'Ethambutol',
    brandSynonyms: ['Tibitol', 'Kalbutol', 'Santibi'],
    category: 'Obat Anti-Tuberkulosis (OAT)',
    defaultStrengthMg: 500,
    availableStrengthsMg: [250, 500],
    standardTabletWeightMg: 650,
    pediatricDoseMgPerKgPerDose: 20,
    pediatricDoseRangeLabel: '15 - 25 mg/kg/hari (1x sehari)',
    notes: 'Tablet 250 mg dan 500 mg. Waspada neuritis retrobulbar pada anak.'
  },

  // =====================================================================
  // 11. KARDIOVASKULAR, DIURETIK & HIPERTENSI
  // =====================================================================
  {
    id: 'comp-preset-captopril',
    name: 'Captopril',
    genericName: 'Captopril',
    brandSynonyms: ['Capoten', 'Tensicap', 'Farmoten', 'Otoryl'],
    category: 'Antihipertensi ACE-Inhibitor',
    defaultStrengthMg: 25,
    availableStrengthsMg: [12.5, 25, 50],
    standardTabletWeightMg: 150,
    pediatricDoseMgPerKgPerDose: 0.3,
    pediatricDoseRangeLabel: '0.3 - 0.5 mg/kg/kali (2-3x sehari 1 jam sebelum makan)',
    notes: 'Tablet 12.5 mg, 25 mg, 50 mg. Sering diracik pada sindrom nefrotik dan gagal jantung anak.'
  },
  {
    id: 'comp-preset-propranolol',
    name: 'Propranolol HCl',
    genericName: 'Propranolol',
    brandSynonyms: ['Inderal', 'Farmadral'],
    category: 'Beta-Blocker Non-Selektif (Spel / Tetralogi Fallot / Hemangioma)',
    defaultStrengthMg: 10,
    availableStrengthsMg: [10, 40],
    standardTabletWeightMg: 120,
    pediatricDoseMgPerKgPerDose: 0.5,
    pediatricDoseRangeLabel: '0.5 - 1 mg/kg/kali (2-3x sehari sesudah makan)',
    notes: 'Tablet 10 mg dan 40 mg. Baku emas terapi infantile hemangioma dan sianotik spell ToF.'
  },
  {
    id: 'comp-preset-furosemide',
    name: 'Furosemide',
    genericName: 'Furosemide',
    brandSynonyms: ['Lasix', 'Farsix', 'Uresix', 'Gralixa'],
    category: 'Diuretik Loop Kuat',
    defaultStrengthMg: 40,
    availableStrengthsMg: [40],
    standardTabletWeightMg: 150,
    pediatricDoseMgPerKgPerDose: 1,
    pediatricDoseRangeLabel: '1 - 2 mg/kg/kali (1-2x sehari pagi/siang)',
    notes: 'Tablet 40 mg. Sering dikombinasikan dengan spironolakton pada edema puyer.'
  },
  {
    id: 'comp-preset-spironolactone',
    name: 'Spironolactone (Spironolakton)',
    genericName: 'Spironolactone',
    brandSynonyms: ['Aldactone', 'Spirola', 'Carpiaton'],
    category: 'Diuretik Hemat Kalium (Aldosteron Antagonis)',
    defaultStrengthMg: 25,
    availableStrengthsMg: [25, 100],
    standardTabletWeightMg: 150,
    pediatricDoseMgPerKgPerDose: 1,
    pediatricDoseRangeLabel: '1 - 3 mg/kg/hari terbagi 1-2 dosis bersama makanan',
    notes: 'Tablet 25 mg dan 100 mg. Kombinasi sinergis dengan furosemid.'
  },
  {
    id: 'comp-preset-hct',
    name: 'Hydrochlorothiazide (HCT)',
    genericName: 'Hydrochlorothiazide',
    brandSynonyms: ['HCT KF'],
    category: 'Diuretik Tiazid',
    defaultStrengthMg: 25,
    availableStrengthsMg: [25],
    standardTabletWeightMg: 120,
    pediatricDoseMgPerKgPerDose: 1,
    pediatricDoseRangeLabel: '1 - 2 mg/kg/hari terbagi 1-2 dosis',
    notes: 'Tablet 25 mg.'
  },
  {
    id: 'comp-preset-digoxin',
    name: 'Digoxin (Digoksin)',
    genericName: 'Digoxin',
    brandSynonyms: ['Fargoxin', 'Lanoxin'],
    category: 'Glikosida Jantung / Inotropik Positif',
    defaultStrengthMg: 0.25,
    availableStrengthsMg: [0.25],
    standardTabletWeightMg: 120,
    pediatricDoseMgPerKgPerDose: 0.005,
    pediatricDoseRangeLabel: 'Dosis rumatan: 8 - 10 mcg/kg/hari terbagi 2 dosis (Indeks Terapi Sangat Sempit!)',
    notes: 'Tablet 0.25 mg (250 mcg). Wajib pemantauan tanda intoksikasi digitalis ketat.'
  },
  {
    id: 'comp-preset-sildenafil',
    name: 'Sildenafil Citrate',
    genericName: 'Sildenafil',
    brandSynonyms: ['Revatio', 'Viagra'],
    category: 'Vasodilator Hipertensi Pulmonal Pediatrik (PDE5i)',
    defaultStrengthMg: 20,
    availableStrengthsMg: [20, 50],
    standardTabletWeightMg: 150,
    pediatricDoseMgPerKgPerDose: 0.5,
    pediatricDoseRangeLabel: '0.5 - 1 mg/kg/kali (3x sehari pada PPHN / PHT anak)',
    notes: 'Tablet 20 mg atau 50 mg. Sangat lazim diracik di bangsal anak/NICU untuk hipertensi paru.'
  },

  // =====================================================================
  // 12. VITAMIN, MINERAL & SUPLEMEN PENUNJANG PUYER
  // =====================================================================
  {
    id: 'comp-preset-vit-c',
    name: 'Vitamin C (Ascorbic Acid)',
    genericName: 'Asam Askorbat',
    brandSynonyms: ['Vitamin C KF', 'Vitalong C', 'Cecon', 'Xon-Ce'],
    category: 'Vitamin & Antioksidan',
    defaultStrengthMg: 50,
    availableStrengthsMg: [50, 100, 250, 500],
    standardTabletWeightMg: 150,
    pediatricDoseMgPerKgPerDose: 5,
    pediatricDoseRangeLabel: '25 - 50 mg/bungkus puyer',
    notes: 'Tablet 50 mg sangat lazim dijadikan komponen penambah rasa asam segar puyer anak.'
  },
  {
    id: 'comp-preset-vit-b6',
    name: 'Vitamin B6 (Pyridoxine HCl)',
    genericName: 'Pyridoxine HCl',
    brandSynonyms: ['Vitamin B6 KF', 'Piridoksin'],
    category: 'Vitamin Neurotropik',
    defaultStrengthMg: 10,
    availableStrengthsMg: [10, 25],
    standardTabletWeightMg: 120,
    pediatricDoseMgPerKgPerDose: 1,
    pediatricDoseRangeLabel: '5 - 10 mg/kali minum',
    notes: 'Tablet 10 mg atau 25 mg. Sering dikombinasi pada terapi INH TB anak untuk cegah neuropati.'
  },
  {
    id: 'comp-preset-vit-b1',
    name: 'Vitamin B1 (Thiamine HCl)',
    genericName: 'Thiamine HCl',
    brandSynonyms: ['Vitamin B1 KF', 'Tiamin'],
    category: 'Vitamin Neurotropik / Metabolisme Karbohidrat',
    defaultStrengthMg: 50,
    availableStrengthsMg: [50, 100],
    standardTabletWeightMg: 150,
    pediatricDoseMgPerKgPerDose: 2,
    pediatricDoseRangeLabel: '10 - 50 mg/hari',
    notes: 'Tablet 50 mg dan 100 mg.'
  },
  {
    id: 'comp-preset-vit-b-complex',
    name: 'Vitamin B-Complex',
    genericName: 'Vitamin B-Complex',
    brandSynonyms: ['B-Complex KF', 'Becefort'],
    category: 'Multivitamin',
    defaultStrengthMg: 50,
    availableStrengthsMg: [50],
    standardTabletWeightMg: 200,
    pediatricDoseMgPerKgPerDose: 10,
    pediatricDoseRangeLabel: '1/2 - 1 tablet per racikan',
    notes: 'Tablet kuning beraroma khas vitamin B.'
  },
  {
    id: 'comp-preset-asam-folat',
    name: 'Asam Folat (Folic Acid)',
    genericName: 'Folic Acid',
    brandSynonyms: ['Folavit', 'Anelat', 'Asam Folat KF'],
    category: 'Vitamin Hematopoietik / Pembentukan Sel Darah Merah',
    defaultStrengthMg: 1,
    availableStrengthsMg: [0.4, 1, 5],
    standardTabletWeightMg: 120,
    pediatricDoseMgPerKgPerDose: 0.1,
    pediatricDoseRangeLabel: '0.5 - 1 mg/hari',
    notes: 'Tablet 1 mg atau 5 mg. Sering diracik pada talasemia dan anemia hemolitik anak.'
  },
  {
    id: 'comp-preset-kalsium-laktat',
    name: 'Kalsium Laktat (Kalk)',
    genericName: 'Calcium Lactate',
    brandSynonyms: ['Kalk KF', 'Calcii Lactas'],
    category: 'Suplemen Kalsium Tulang & Gigi',
    defaultStrengthMg: 500,
    availableStrengthsMg: [500],
    standardTabletWeightMg: 600,
    pediatricDoseMgPerKgPerDose: 20,
    pediatricDoseRangeLabel: '250 - 500 mg per racikan (3x sehari)',
    notes: 'Tablet 500 mg.'
  },
  {
    id: 'comp-preset-curcuma',
    name: 'Ekstrak Temulawak (Curcuma FCT)',
    genericName: 'Curcuma Xanthorrhiza Extract',
    brandSynonyms: ['Curcuma FCT', 'Curvit', 'Vitacur'],
    category: 'Fitofarmaka / Penambah Nafsu Makan & Hepatoprotektor',
    defaultStrengthMg: 200,
    availableStrengthsMg: [200],
    standardTabletWeightMg: 350,
    pediatricDoseMgPerKgPerDose: 10,
    pediatricDoseRangeLabel: '1/2 - 1 tablet (3x sehari sesudah makan)',
    notes: 'Tablet salut selaput 200 mg. Sangat lazim diracik untuk meningkatkan nafsu makan anak.'
  }
];

/**
 * Mencari obat preset berdasarkan nama, generik, atau sinonim/merk paten
 */
export function searchCompoundingPresets(query: string): CompoundingTabletPreset[] {
  if (!query || !query.trim()) return COMPOUNDING_TABLET_PRESETS.slice(0, 20);
  const q = query.toLowerCase().trim();
  
  return COMPOUNDING_TABLET_PRESETS.filter(item => {
    return (
      item.name.toLowerCase().includes(q) ||
      item.genericName.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.brandSynonyms.some(brand => brand.toLowerCase().includes(q))
    );
  });
}
