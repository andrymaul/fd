import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Drug } from '../types';
import { 
  PEDIATRIC_DRUGS_DATABASE, 
  estimateChildWeightKg, 
  calculateMostellerBSA, 
  calculateClassicFormulas,
  ClassicFormulaResult
} from '../data/pediatricDosingData';
import {
  COMPOUNDING_TABLET_PRESETS,
  CompoundingTabletPreset,
  searchCompoundingPresets
} from '../data/compoundingTabletPresets';
import { 
  Baby, 
  Pill, 
  FlaskConical, 
  Calculator, 
  Scale, 
  AlertTriangle, 
  CheckCircle2, 
  Info, 
  Plus, 
  Trash2, 
  Clock, 
  Share2, 
  ShieldAlert, 
  Sparkles, 
  Check,
  Layers,
  ShieldCheck,
  ChevronDown,
  Search,
  BookOpen,
  X,
  Activity
} from 'lucide-react';
import { FloatingPillsBackground } from './FloatingPillsBackground';

export interface CompoundingItem {
  id: string;
  drugId?: string;
  customName: string;
  dosePerPacketMg: number | string;
  tabletStrengthMg: number | string;
  tabletWeightMg?: number | string;
  category?: string;
  availableStrengths?: number[];
  pediatricDoseRangeLabel?: string;
  pediatricMgPerKgPerDose?: number;
}

// Popular presets for quick 1-click addition
const QUICK_POPULAR_PRESETS: CompoundingTabletPreset[] = COMPOUNDING_TABLET_PRESETS.filter(p => 
  ['comp-preset-paracetamol', 'comp-preset-ibuprofen', 'comp-preset-ambroxol', 'comp-preset-salbutamol', 'comp-preset-ctm', 'comp-preset-dexamethasone', 'comp-preset-methylprednisolone', 'comp-preset-domperidone', 'comp-preset-luminal', 'comp-preset-cetirizine', 'comp-preset-vit-c'].includes(p.id)
);

// Searchable Combobox Component for Compounding Drug Name
interface CompoundingDrugComboboxProps {
  rowId: string;
  value: string;
  category?: string;
  onSelectPreset: (preset: CompoundingTabletPreset) => void;
  onChangeText: (text: string) => void;
}

const CompoundingDrugCombobox: React.FC<CompoundingDrugComboboxProps> = ({
  rowId,
  value,
  category,
  onSelectPreset,
  onChangeText
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const searchResults = useMemo(() => {
    return searchCompoundingPresets(value);
  }, [value]);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-44 sm:w-56">
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => {
            onChangeText(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="Ketik / pilih obat..."
          className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg pl-2.5 pr-7 py-1 text-xs font-bold text-slate-900 dark:text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
        />
        <button
          type="button"
          tabIndex={-1}
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-1.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-purple-600 p-0.5 cursor-pointer"
        >
          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${isOpen ? 'rotate-180 text-purple-600' : ''}`} />
        </button>
      </div>

      {category && (
        <span className="text-[10px] text-purple-700 dark:text-purple-400 font-medium block truncate mt-0.5" title={category}>
          {category}
        </span>
      )}

      {isOpen && (
        <div className="absolute z-50 left-0 top-full mt-1 w-64 sm:w-72 bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-800 rounded-xl shadow-2xl max-h-56 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800">
          <div className="px-2.5 py-1.5 bg-slate-50 dark:bg-slate-950 text-[10px] font-bold text-slate-500 flex items-center justify-between">
            <span>Pilih Sediaan Tablet:</span>
            <span className="text-purple-600">{searchResults.length} obat</span>
          </div>

          {searchResults.length > 0 ? (
            searchResults.map((preset) => (
              <button
                key={preset.id}
                type="button"
                onClick={() => {
                  onSelectPreset(preset);
                  setIsOpen(false);
                }}
                className="w-full text-left px-3 py-2 hover:bg-purple-50 dark:hover:bg-purple-950/50 transition flex items-start justify-between gap-1 group cursor-pointer"
              >
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold text-slate-900 dark:text-white truncate group-hover:text-purple-700 dark:group-hover:text-purple-300">
                    {preset.name}
                  </p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                    {preset.category}
                  </p>
                  {preset.brandSynonyms.length > 0 && (
                    <p className="text-[9px] text-slate-400 truncate">
                      Merk: {preset.brandSynonyms.slice(0, 3).join(', ')}
                    </p>
                  )}
                </div>
                <div className="text-right shrink-0">
                  <span className="inline-block text-[10px] font-black px-1.5 py-0.5 rounded bg-purple-100 dark:bg-purple-950/70 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                    {preset.defaultStrengthMg} mg
                  </span>
                  {preset.availableStrengthsMg.length > 1 && (
                    <span className="block text-[9px] text-purple-600 dark:text-purple-400 font-medium mt-0.5">
                      {preset.availableStrengthsMg.join('/')} mg
                    </span>
                  )}
                </div>
              </button>
            ))
          ) : (
            <div className="p-3 text-center">
              <p className="text-xs text-slate-500">Tidak ada di katalog obat umum.</p>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="mt-1.5 text-xs font-bold text-purple-600 dark:text-purple-400 hover:underline cursor-pointer"
              >
                + Tetap gunakan "{value}"
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export interface PediatricCompoundingCalculatorProps {
  hideHeader?: boolean;
  onCheckInteractions?: (drugNames: string[]) => void;
  existingDrugs?: Drug[];
  initialSubTab?: 'quick' | 'compounding' | 'syrup' | 'classic' | string;
}

export const PediatricCompoundingCalculator: React.FC<PediatricCompoundingCalculatorProps> = ({
  hideHeader = false,
  onCheckInteractions,
  existingDrugs = [],
  initialSubTab = 'quick'
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'quick' | 'compounding' | 'syrup' | 'classic'>(
    (initialSubTab as any) || 'quick'
  );

  // Patient Profile state (allow empty string for natural keyboard input & backspacing)
  const [patientName, setPatientName] = useState<string>('An. Rahmat (3.5 th)');
  const [ageYears, setAgeYears] = useState<number | string>(3);
  const [ageMonths, setAgeMonths] = useState<number | string>(6);
  const [weightKg, setWeightKg] = useState<number | string>(14);
  const [heightCm, setHeightCm] = useState<number | string>(95);

  // Quick Dose Calculator state (Tab 1)
  const [selectedDrugId, setSelectedDrugId] = useState<string>('ped-paracetamol');
  const [quickCustomMgPerKg, setQuickCustomMgPerKg] = useState<number | string>(10); // 10 mg/kg
  const [quickFrequency, setQuickFrequency] = useState<number>(3); // 3x / day
  const [quickSelectedFormulationIndex, setQuickSelectedFormulationIndex] = useState<number>(0);

  // Compounding Puyer Calculator state (Tab 2)
  const [packetCount, setPacketCount] = useState<number | string>(10); // N = 10 bungkus
  const [targetWeightPerPacketMg, setTargetWeightPerPacketMg] = useState<number>(300); // 300 mg per bungkus
  const [fillerType, setFillerType] = useState<string>('Saccharum Lactis (SL / Gula Susu)');
  const [signaText, setSignaText] = useState<string>('3 x sehari 1 bungkus puyer sesudah makan');
  const [copiedNotification, setCopiedNotification] = useState<string | null>(null);

  // Compounding Items List
  const [compoundingItems, setCompoundingItems] = useState<CompoundingItem[]>([
    {
      id: 'comp-1',
      drugId: 'comp-preset-paracetamol',
      customName: 'Paracetamol (Acetaminophen)',
      dosePerPacketMg: 120,
      tabletStrengthMg: 500,
      tabletWeightMg: 600,
      category: 'Antipiretik & Analgesik',
      availableStrengths: [100, 500, 650],
      pediatricDoseRangeLabel: '10 - 15 mg/kg/kali',
      pediatricMgPerKgPerDose: 10
    },
    {
      id: 'comp-2',
      drugId: 'comp-preset-pseudoephedrine',
      customName: 'Pseudoephedrine HCl',
      dosePerPacketMg: 7.5,
      tabletStrengthMg: 30,
      tabletWeightMg: 150,
      category: 'Dekongestan Hidung Sistemik',
      availableStrengths: [30, 60],
      pediatricDoseRangeLabel: '0.5 - 1 mg/kg/kali',
      pediatricMgPerKgPerDose: 0.75
    },
    {
      id: 'comp-3',
      drugId: 'comp-preset-ambroxol',
      customName: 'Ambroxol HCl',
      dosePerPacketMg: 7.5,
      tabletStrengthMg: 30,
      tabletWeightMg: 180,
      category: 'Mukolitik',
      availableStrengths: [30],
      pediatricDoseRangeLabel: '0.4 - 0.6 mg/kg/kali',
      pediatricMgPerKgPerDose: 0.5
    },
    {
      id: 'comp-4',
      drugId: 'comp-preset-ctm',
      customName: 'CTM (Chlorpheniramine Maleate)',
      dosePerPacketMg: 0.5,
      tabletStrengthMg: 4,
      tabletWeightMg: 120,
      category: 'Antihistamin H1 Sedatif (Gen 1)',
      availableStrengths: [4],
      pediatricDoseRangeLabel: '0.08 - 0.1 mg/kg/kali',
      pediatricMgPerKgPerDose: 0.08
    }
  ]);

  // Catalog modal state for Compounding Tablets
  const [isCatalogModalOpen, setIsCatalogModalOpen] = useState<boolean>(false);
  const [catalogSearchQuery, setCatalogSearchQuery] = useState<string>('');
  const [catalogCategoryFilter, setCatalogCategoryFilter] = useState<string>('Semua');

  // Syrup Calculator state (Tab 3)
  const [syrupDrugId, setSyrupDrugId] = useState<string>('ped-amoxicillin');
  const [syrupFormulationIndex, setSyrupFormulationIndex] = useState<number>(0);
  const [syrupDurationDays, setSyrupDurationDays] = useState<number | string>(5);
  const [syrupFrequency, setSyrupFrequency] = useState<number>(3);
  const [syrupCustomDoseMg, setSyrupCustomDoseMg] = useState<number | string>(150);

  // Classic Formulas state (Tab 4)
  const [classicAdultDoseMg, setClassicAdultDoseMg] = useState<number | string>(500);
  const [classicDrugName, setClassicDrugName] = useState<string>('Paracetamol 500 mg');

  // Safe numerical parsed values
  const numAgeYears = useMemo(() => typeof ageYears === 'number' ? ageYears : (parseFloat(ageYears) || 0), [ageYears]);
  const numAgeMonths = useMemo(() => typeof ageMonths === 'number' ? ageMonths : (parseFloat(ageMonths) || 0), [ageMonths]);
  const numWeightKg = useMemo(() => typeof weightKg === 'number' ? weightKg : (parseFloat(weightKg) || 0), [weightKg]);
  const numHeightCm = useMemo(() => typeof heightCm === 'number' ? heightCm : (parseFloat(heightCm) || 0), [heightCm]);
  const numPacketCount = useMemo(() => typeof packetCount === 'number' ? packetCount : (parseInt(packetCount) || 1), [packetCount]);
  const numSyrupDoseMg = useMemo(() => typeof syrupCustomDoseMg === 'number' ? syrupCustomDoseMg : (parseFloat(syrupCustomDoseMg) || 0), [syrupCustomDoseMg]);
  const numSyrupDays = useMemo(() => typeof syrupDurationDays === 'number' ? syrupDurationDays : (parseInt(syrupDurationDays) || 1), [syrupDurationDays]);
  const numClassicAdultDose = useMemo(() => typeof classicAdultDoseMg === 'number' ? classicAdultDoseMg : (parseFloat(classicAdultDoseMg) || 0), [classicAdultDoseMg]);

  // Computed values
  const totalAgeMonths = useMemo(() => numAgeYears * 12 + numAgeMonths, [numAgeYears, numAgeMonths]);
  const calculatedBSA = useMemo(() => calculateMostellerBSA(numHeightCm, numWeightKg), [numHeightCm, numWeightKg]);
  const estimatedWeight = useMemo(() => estimateChildWeightKg(numAgeYears, numAgeMonths), [numAgeYears, numAgeMonths]);

  // Handle auto-weight estimation
  const handleApplyEstimatedWeight = () => {
    setWeightKg(Math.round(estimatedWeight * 10) / 10);
  };

  // Selected drug for Quick tab
  const currentDrug = useMemo(() => {
    return PEDIATRIC_DRUGS_DATABASE.find(d => d.id === selectedDrugId) || PEDIATRIC_DRUGS_DATABASE[0];
  }, [selectedDrugId]);

  // Dosing range & clinical presets configuration based on drug dosingType
  const rangeConfig = useMemo(() => {
    const isDosePerDose = currentDrug.dosingType === 'per_kg_per_dose';
    const isDosePerDay = currentDrug.dosingType === 'per_kg_per_day';

    if (isDosePerDose) {
      const stdMin = currentDrug.singleDoseMinMgPerKg || 10;
      const stdMax = currentDrug.singleDoseMaxMgPerKg || 15;
      const minVal = Math.max(0.1, Math.round(stdMin * 0.5 * 10) / 10);
      const maxVal = Math.max(stdMax * 1.5, stdMax + 10);
      const step = stdMin < 1 ? 0.05 : (stdMin < 10 ? 0.5 : 1);
      const presets = [
        { label: `Min (${stdMin} mg/kg)`, value: stdMin },
        { label: `Standar (${((stdMin + stdMax) / 2).toFixed(1).replace('.0', '')} mg/kg)`, value: parseFloat(((stdMin + stdMax) / 2).toFixed(1)) },
        { label: `Maks (${stdMax} mg/kg)`, value: stdMax }
      ];
      return {
        type: 'per_dose' as const,
        title: 'Dosis Sekali Minum (per Kali Pemberian)',
        unit: 'mg/kgBB/dosis',
        min: minVal,
        max: maxVal,
        stdMin,
        stdMax,
        step,
        presets
      };
    } else if (isDosePerDay) {
      const stdMin = currentDrug.minDoseMgPerKgPerDay || 20;
      const stdMax = currentDrug.maxDoseMgPerKgPerDay || 50;
      const minVal = Math.max(1, Math.round(stdMin * 0.5));
      const maxVal = Math.max(stdMax * 1.5, stdMax + 20);
      const step = stdMin < 5 ? 0.5 : 1;
      const presets = [
        { label: `Ringan (${stdMin} mg/kg/hr)`, value: stdMin },
        { label: `Standar (${currentDrug.standardDoseMgPerKgPerDay || ((stdMin + stdMax) / 2)} mg/kg/hr)`, value: currentDrug.standardDoseMgPerKgPerDay || ((stdMin + stdMax) / 2) },
        { label: `Maksimal (${stdMax} mg/kg/hr)`, value: stdMax }
      ];
      if (currentDrug.id === 'ped-amoxicillin' || currentDrug.id === 'ped-co-amoxiclav') {
        presets.push({ label: 'Dosis OMA (80 mg/kg/hr)', value: 80 });
      }
      return {
        type: 'per_day' as const,
        title: 'Dosis Total Harian (per 24 Jam)',
        unit: 'mg/kgBB/hari',
        min: minVal,
        max: maxVal,
        stdMin,
        stdMax,
        step,
        presets
      };
    } else {
      const stdVal = currentDrug.standardAdultDoseMg || 10;
      return {
        type: 'fixed' as const,
        title: 'Dosis Standar Tetap',
        unit: 'mg/dosis',
        min: 1,
        max: 1000,
        stdMin: 1,
        stdMax: 1000,
        step: 1,
        presets: [{ label: `Standar (${stdVal} mg)`, value: stdVal }]
      };
    }
  }, [currentDrug]);

  const numCustomMgPerKg = useMemo(() => {
    return typeof quickCustomMgPerKg === 'number' ? quickCustomMgPerKg : (parseFloat(quickCustomMgPerKg) || 0);
  }, [quickCustomMgPerKg]);

  // Quick Dose Calculations
  const quickCalculations = useMemo(() => {
    let singleDoseMg = 0;
    let dailyDoseMg = 0;

    if (currentDrug.dosingType === 'per_kg_per_dose') {
      singleDoseMg = numCustomMgPerKg * numWeightKg;
      dailyDoseMg = singleDoseMg * quickFrequency;
    } else if (currentDrug.dosingType === 'per_kg_per_day') {
      dailyDoseMg = numCustomMgPerKg * numWeightKg;
      singleDoseMg = quickFrequency > 0 ? dailyDoseMg / quickFrequency : dailyDoseMg;
    } else {
      singleDoseMg = numCustomMgPerKg;
      dailyDoseMg = singleDoseMg * quickFrequency;
    }

    // Safety checks
    const isExceedingMaxDaily = currentDrug.maxDailyDoseMg ? dailyDoseMg > currentDrug.maxDailyDoseMg : false;
    const isExceedingMaxSingle = currentDrug.maxSingleDoseMg ? singleDoseMg > currentDrug.maxSingleDoseMg : false;
    const isBelowTherapeutic = numCustomMgPerKg > 0 && numCustomMgPerKg < rangeConfig.stdMin;
    const isAboveStandard = numCustomMgPerKg > rangeConfig.stdMax;

    // Formulation calculations
    const activeFormulation = currentDrug.formulations[quickSelectedFormulationIndex] || currentDrug.formulations[0];
    let liquidVolumeMlPerDose = 0;
    let householdMeasure = '';

    if (activeFormulation && activeFormulation.volumePerUnit && activeFormulation.volumePerUnit > 0) {
      liquidVolumeMlPerDose = (singleDoseMg / activeFormulation.strengthPerUnit) * activeFormulation.volumePerUnit;
      
      if (activeFormulation.form === 'drops') {
        const drops = Math.round(liquidVolumeMlPerDose * 20); // ~20 drops/mL standard pipet
        householdMeasure = `${liquidVolumeMlPerDose.toFixed(2)} mL (~${drops} tetes / pipet terkalibrasi)`;
      } else {
        const tspCount = liquidVolumeMlPerDose / 5;
        if (Math.abs(tspCount - 1) < 0.1) householdMeasure = `1 sendok teh (5 mL / 1 cth)`;
        else if (Math.abs(tspCount - 0.5) < 0.1) householdMeasure = `1/2 sendok teh (2.5 mL / 1/2 cth)`;
        else if (Math.abs(tspCount - 1.5) < 0.1) householdMeasure = `1 1/2 sendok teh (7.5 mL / 1 1/2 cth)`;
        else if (Math.abs(tspCount - 2) < 0.1) householdMeasure = `2 sendok teh (10 mL / 2 cth)`;
        else householdMeasure = `${liquidVolumeMlPerDose.toFixed(1)} mL (gunakan gelas takar / spuit oral)`;
      }
    }

    return {
      singleDoseMg: Math.round(singleDoseMg * 10) / 10,
      dailyDoseMg: Math.round(dailyDoseMg * 10) / 10,
      isExceedingMaxDaily,
      isExceedingMaxSingle,
      isBelowTherapeutic,
      isAboveStandard,
      activeFormulation,
      liquidVolumeMlPerDose: Math.round(liquidVolumeMlPerDose * 100) / 100,
      householdMeasure
    };
  }, [currentDrug, numCustomMgPerKg, numWeightKg, quickFrequency, quickSelectedFormulationIndex, rangeConfig]);

  // Compounding calculations (Tab 2)
  const compoundingResults = useMemo(() => {
    let totalActiveMedicinesWeightMg = 0;
    const safePackets = Math.max(1, numPacketCount);

    const itemsSummary = compoundingItems.map(item => {
      const doseMg = typeof item.dosePerPacketMg === 'number' ? item.dosePerPacketMg : (parseFloat(item.dosePerPacketMg) || 0);
      const strMg = typeof item.tabletStrengthMg === 'number' ? item.tabletStrengthMg : (parseFloat(item.tabletStrengthMg) || 1);
      const tabWtMg = typeof item.tabletWeightMg === 'number' ? item.tabletWeightMg : (parseFloat(item.tabletWeightMg || '') || strMg * 1.2);

      const totalMgNeeded = doseMg * safePackets;
      const rawTablets = strMg > 0 ? totalMgNeeded / strMg : 0;
      const roundedHalfTablets = Math.round(rawTablets * 2) / 2; // rounded to nearest 0.5 tablet
      const roundedWholeTablets = Math.ceil(rawTablets);
      const actualDosePerPacket = safePackets > 0 ? (roundedHalfTablets * strMg) / safePackets : 0;
      const doseDeviationPercent = doseMg > 0 ? Math.round(((actualDosePerPacket - doseMg) / doseMg) * 100) : 0;

      // Estimated powder weight contributed by tablets
      const itemPowderWeight = roundedHalfTablets * tabWtMg;
      totalActiveMedicinesWeightMg += itemPowderWeight;

      return {
        ...item,
        totalMgNeeded: Math.round(totalMgNeeded * 10) / 10,
        rawTablets: Math.round(rawTablets * 100) / 100,
        roundedHalfTablets,
        roundedWholeTablets,
        actualDosePerPacket: Math.round(actualDosePerPacket * 100) / 100,
        doseDeviationPercent,
        itemPowderWeight
      };
    });

    const targetTotalPowderWeightMg = targetWeightPerPacketMg * safePackets;
    const saccharumLactisNeededMg = Math.max(0, targetTotalPowderWeightMg - totalActiveMedicinesWeightMg);
    const fillerPerPacketMg = safePackets > 0 ? saccharumLactisNeededMg / safePackets : 0;

    return {
      itemsSummary,
      totalActiveMedicinesWeightMg: Math.round(totalActiveMedicinesWeightMg),
      targetTotalPowderWeightMg,
      saccharumLactisNeededMg: Math.round(saccharumLactisNeededMg),
      fillerPerPacketMg: Math.round(fillerPerPacketMg),
      isPowderOverflow: totalActiveMedicinesWeightMg > targetTotalPowderWeightMg
    };
  }, [compoundingItems, numPacketCount, targetWeightPerPacketMg]);

  // Syrup calculations (Tab 3)
  const syrupDrug = useMemo(() => {
    return PEDIATRIC_DRUGS_DATABASE.find(d => d.id === syrupDrugId) || PEDIATRIC_DRUGS_DATABASE[0];
  }, [syrupDrugId]);

  const syrupResults = useMemo(() => {
    const activeForm = syrupDrug.formulations[syrupFormulationIndex] || syrupDrug.formulations[0];
    const strengthMg = activeForm.strengthPerUnit || 1;
    const unitMl = activeForm.volumePerUnit || 5;

    const mlPerDose = (numSyrupDoseMg / strengthMg) * unitMl;
    const totalMlPerDay = mlPerDose * syrupFrequency;
    const totalMlNeeded = totalMlPerDay * numSyrupDays;
    const bottlesRequired = Math.ceil(totalMlNeeded / (activeForm.bottleSizeMl || 60));

    let spoonText = '';
    const tsp = mlPerDose / 5;
    if (activeForm.form === 'drops') {
      spoonText = `${mlPerDose.toFixed(2)} mL (~${Math.round(mlPerDose * 20)} tetes)`;
    } else {
      if (Math.abs(tsp - 1) < 0.1) spoonText = '1 sendok teh (5 mL / 1 cth)';
      else if (Math.abs(tsp - 0.5) < 0.1) spoonText = '1/2 sendok teh (2.5 mL / 1/2 cth)';
      else if (Math.abs(tsp - 1.5) < 0.1) spoonText = '1 1/2 sendok teh (7.5 mL / 1 1/2 cth)';
      else if (Math.abs(tsp - 2) < 0.1) spoonText = '2 sendok teh (10 mL / 2 cth)';
      else spoonText = `${mlPerDose.toFixed(1)} mL (gunakan gelas takar / spuit oral)`;
    }

    return {
      activeForm,
      mlPerDose: Math.round(mlPerDose * 100) / 100,
      totalMlPerDay: Math.round(totalMlPerDay * 10) / 10,
      totalMlNeeded: Math.round(totalMlNeeded),
      bottlesRequired,
      spoonText,
      budDays: activeForm.budAfterOpenDays || 14
    };
  }, [syrupDrug, syrupFormulationIndex, numSyrupDoseMg, syrupFrequency, numSyrupDays]);

  // Classic Formulas (Tab 4)
  const classicResults: ClassicFormulaResult[] = useMemo(() => {
    return calculateClassicFormulas(
      numClassicAdultDose,
      numAgeYears,
      numAgeMonths,
      numWeightKg,
      numHeightCm
    );
  }, [numClassicAdultDose, numAgeYears, numAgeMonths, numWeightKg, numHeightCm]);

  // Add Item to Compounding (supports preset auto-fill)
  const handleAddCompoundingItem = (preset?: CompoundingTabletPreset) => {
    if (preset) {
      const recDose = numWeightKg > 0 && preset.pediatricDoseMgPerKgPerDose
        ? Math.round(numWeightKg * preset.pediatricDoseMgPerKgPerDose * 10) / 10
        : preset.defaultStrengthMg / 4;

      const newItem: CompoundingItem = {
        id: `comp-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
        drugId: preset.id,
        customName: preset.name,
        dosePerPacketMg: recDose,
        tabletStrengthMg: preset.defaultStrengthMg,
        tabletWeightMg: preset.standardTabletWeightMg,
        category: preset.category,
        availableStrengths: preset.availableStrengthsMg,
        pediatricDoseRangeLabel: preset.pediatricDoseRangeLabel,
        pediatricMgPerKgPerDose: preset.pediatricDoseMgPerKgPerDose
      };
      setCompoundingItems(prev => [...prev, newItem]);
    } else {
      const newItem: CompoundingItem = {
        id: `comp-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
        customName: '',
        dosePerPacketMg: 10,
        tabletStrengthMg: 100,
        tabletWeightMg: 150,
        category: 'Lainnya'
      };
      setCompoundingItems(prev => [...prev, newItem]);
    }
  };

  // Select preset for an existing row: auto-fills tablet strength, category, available strength chips, and dose
  const handleSelectPresetForRow = (rowId: string, preset: CompoundingTabletPreset) => {
    setCompoundingItems(prev => prev.map(item => {
      if (item.id === rowId) {
        const currentDoseNum = parseFloat(String(item.dosePerPacketMg)) || 0;
        let newDose = item.dosePerPacketMg;
        if (currentDoseNum === 0 || currentDoseNum === 10) {
          if (numWeightKg > 0 && preset.pediatricDoseMgPerKgPerDose) {
            newDose = Math.round(numWeightKg * preset.pediatricDoseMgPerKgPerDose * 10) / 10;
          }
        }

        return {
          ...item,
          drugId: preset.id,
          customName: preset.name,
          tabletStrengthMg: preset.defaultStrengthMg,
          tabletWeightMg: preset.standardTabletWeightMg,
          category: preset.category,
          availableStrengths: preset.availableStrengthsMg,
          pediatricDoseRangeLabel: preset.pediatricDoseRangeLabel,
          pediatricMgPerKgPerDose: preset.pediatricDoseMgPerKgPerDose,
          dosePerPacketMg: newDose
        };
      }
      return item;
    }));
  };

  // Filtered presets for Catalog Modal
  const filteredCatalogPresets = useMemo(() => {
    return COMPOUNDING_TABLET_PRESETS.filter(preset => {
      const matchesSearch = !catalogSearchQuery.trim() || 
        preset.name.toLowerCase().includes(catalogSearchQuery.toLowerCase().trim()) ||
        preset.genericName.toLowerCase().includes(catalogSearchQuery.toLowerCase().trim()) ||
        preset.brandSynonyms.some(b => b.toLowerCase().includes(catalogSearchQuery.toLowerCase().trim())) ||
        preset.category.toLowerCase().includes(catalogSearchQuery.toLowerCase().trim());
      
      const matchesCategory = catalogCategoryFilter === 'Semua' || preset.category.toLowerCase().includes(catalogCategoryFilter.toLowerCase());
      return matchesSearch && matchesCategory;
    });
  }, [catalogSearchQuery, catalogCategoryFilter]);

  // Remove Item from Compounding
  const handleRemoveCompoundingItem = (id: string) => {
    setCompoundingItems(compoundingItems.filter(item => item.id !== id));
  };

  // Update item in compounding
  const handleUpdateCompoundingItem = (id: string, field: keyof CompoundingItem, value: any) => {
    setCompoundingItems(compoundingItems.map(item => {
      if (item.id === id) {
        return { ...item, [field]: value };
      }
      return item;
    }));
  };

  // Copy to Clipboard helper
  const handleCopyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedNotification(label);
    setTimeout(() => setCopiedNotification(null), 3000);
  };

  // Export to WhatsApp text
  const generateWhatsAppLabelText = () => {
    let text = `📋 *ETIKET RESEP RACIKAN PUYER ANAK*\n`;
    text += `━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `👤 *Pasien*: ${patientName}\n`;
    text += `👶 *Usia*: ${numAgeYears} th ${numAgeMonths} bln | *BB*: ${numWeightKg} kg\n`;
    text += `📦 *Jumlah*: ${numPacketCount} bungkus puyer\n`;
    text += `⏰ *Aturan Pakai*: ${signaText}\n\n`;
    text += `🧪 *Komposisi per Bungkus*:\n`;
    compoundingResults.itemsSummary.forEach((item, idx) => {
      text += `${idx + 1}. ${item.customName}: ${item.dosePerPacketMg} mg\n`;
    });
    text += `\n💡 *Instruksi Pemberian*:\n`;
    text += `• Larutkan 1 bungkus puyer dengan sedikit air hangat atau air gula/madu (pada anak >1 tahun).\n`;
    text += `• Simpan puyer di tempat kering, sejuk, dan terlindung dari sinar matahari langsung.\n`;
    text += `• Masa simpan aman (BUD): Maksimal 30 hari pasca peracikan.\n`;
    text += `━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `🏥 _Farmasi Klinis & Apotek Digital_`;
    return text;
  };

  // Check Interactions of compounded drugs
  const handleCheckCompoundedInteractions = () => {
    if (onCheckInteractions) {
      const drugNames = compoundingItems.map(item => item.customName);
      onCheckInteractions(drugNames);
    }
  };

  return (
    <div className="space-y-6 pb-12">
      {/* HERO BANNER - VIOLET ORCHID & DEEP MULBERRY */}
      {!hideHeader && (
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0d0414] via-[#1c0a2e] to-[#2c0f47] p-6 sm:p-8 text-white shadow-2xl border border-purple-500/25">
          <FloatingPillsBackground density="low" accentColor="#c084fc" />
          <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute right-6 bottom-4 opacity-10 pointer-events-none">
            <Baby className="w-48 h-48 text-purple-400" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-bold font-outfit">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>Pedoman Dosis Pediatrik IDAI, Nelson &amp; Farmakope Indonesia</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 text-white flex items-center justify-center shadow-lg shadow-purple-950/50 shrink-0">
                  <Baby className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-black font-outfit tracking-tight">
                    Kalkulator Dosis Pediatrik &amp; Racikan Puyer
                  </h1>
                  <p className="text-xs sm:text-sm text-purple-100/80 font-medium">
                    Hitung dosis anak berbasis BB/BSA, konversi racikan tablet ke puyer dengan zat pengisi SL, dan takaran sirup/drops.
                  </p>
                </div>
              </div>

              {/* Feature Highlights Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                <div className="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-xs flex items-center gap-1.5 font-bold text-purple-200">
                  <Baby className="w-3.5 h-3.5 text-purple-400" />
                  <span>Kalkulasi Dosis Presisi Berbasis BB &amp; BSA</span>
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-xs flex items-center gap-1.5 font-bold text-emerald-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Hitung Bobot Pengisi SL Otomatis</span>
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-xs flex items-center gap-1.5 font-bold text-pink-200">
                  <AlertTriangle className="w-3.5 h-3.5 text-pink-300" />
                  <span>Verifikasi Dosis Maksimum Pediatrik</span>
                </div>
              </div>
            </div>

            {/* Right Hero Badge: Database Status */}
            <div className="flex flex-col gap-3 lg:w-72 shrink-0 relative z-10">
              <div className="bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-purple-500/40 space-y-2.5 shadow-xl">
                <div className="flex items-center justify-between text-xs font-bold text-purple-300 border-b border-purple-800/60 pb-2">
                  <span className="flex items-center gap-1.5 font-black font-outfit">
                    <Activity className="w-3.5 h-3.5 text-purple-400" />
                    <span>Status Database</span>
                  </span>
                  <span className="bg-purple-950 text-purple-300 px-2 py-0.5 rounded-full text-[10px] font-black border border-purple-600/40">
                    {PEDIATRIC_DRUGS_DATABASE.length + COMPOUNDING_TABLET_PRESETS.length} Data Terverifikasi
                  </span>
                </div>
                <div className="text-xs text-purple-100/80 space-y-1.5 font-medium">
                  <div className="flex justify-between items-center">
                    <span>Formula Dosis Anak:</span>
                    <span className="font-mono font-bold text-white bg-white/10 px-2 py-0.5 rounded-md text-[11px]">{PEDIATRIC_DRUGS_DATABASE.length} Obat</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Preset Tablet Puyer:</span>
                    <span className="font-mono font-bold text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded-md text-[11px]">{COMPOUNDING_TABLET_PRESETS.length} Tablet</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Metode Perhitungan:</span>
                    <span className="font-mono font-bold text-pink-300 bg-pink-950/60 px-2 py-0.5 rounded-md text-[11px]">BB, BSA &amp; Klasik</span>
                  </div>
                  <div className="flex justify-between items-center pt-1 border-t border-purple-900/40 text-[10px] text-purple-300/80">
                    <span>Standar Acuan:</span>
                    <span className="font-bold text-white">IDAI, Nelson &amp; FI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PATIENT PROFILE CARD - PURPLE & MULBERRY PEDIATRIC SUITE */}
      <div className="bg-white dark:bg-[#12061c] border border-purple-200/80 dark:border-purple-500/25 rounded-3xl p-6 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-purple-100 dark:border-purple-950/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-purple-500/15 text-purple-600 dark:text-purple-400 border border-purple-400/30 flex items-center justify-center font-bold shadow-2xs">
              <Baby className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-extrabold font-outfit text-slate-900 dark:text-white tracking-tight">Profil Pasien Pediatrik</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium font-sans">Parameter acuan perhitungan dosis terapeutik anak</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleApplyEstimatedWeight}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold font-outfit bg-purple-50 hover:bg-purple-100 text-purple-900 dark:bg-purple-950/60 dark:text-purple-300 transition border border-purple-200 dark:border-purple-800 cursor-pointer shadow-2xs"
              title="Gunakan estimasi rumus Weech / WHO berdasarkan usia"
            >
              <Scale className="w-3.5 h-3.5 text-purple-700 dark:text-purple-400" />
              Gunakan Estimasi BB ({estimatedWeight.toFixed(1)} kg)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          <div>
            <label className="block text-xs font-bold font-outfit text-slate-700 dark:text-slate-300 mb-1">Nama Pasien</label>
            <input
              type="text"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold font-outfit text-slate-900 dark:text-white focus:outline-none focus:border-purple-500 shadow-2xs"
              placeholder="cth. An. Rahmat"
            />
          </div>

          <div>
            <label className="block text-xs font-bold font-outfit text-slate-700 dark:text-slate-300 mb-1">Usia (Tahun & Bulan)</label>
            <div className="grid grid-cols-2 gap-2">
              <div className="relative">
                <input
                  type="number"
                  min="0"
                  max="18"
                  value={ageYears}
                  onChange={(e) => setAgeYears(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl pl-3 pr-8 py-2 text-xs font-bold font-outfit text-slate-900 dark:text-white focus:outline-none focus:border-purple-500 shadow-2xs"
                />
                <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-bold font-outfit text-slate-400 pointer-events-none">th</span>
              </div>
              <div className="relative">
                <input
                  type="number"
                  min="0"
                  max="11"
                  value={ageMonths}
                  onChange={(e) => setAgeMonths(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl pl-3 pr-8 py-2 text-xs font-bold font-outfit text-slate-900 dark:text-white focus:outline-none focus:border-purple-500 shadow-2xs"
                />
                <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-bold font-outfit text-slate-400 pointer-events-none">bln</span>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold font-outfit text-slate-700 dark:text-slate-300 mb-1">
              Berat Badan (kg) <span className="text-purple-600 dark:text-purple-400 font-extrabold">*Wajib</span>
            </label>
            <div className="relative">
              <input
                type="number"
                step="0.1"
                min="0.5"
                max="150"
                value={weightKg}
                onChange={(e) => setWeightKg(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl pl-3 pr-8 py-2 text-xs font-black font-outfit text-purple-900 dark:text-purple-200 focus:outline-none focus:border-purple-500 shadow-2xs"
                placeholder="cth. 12"
              />
              <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-bold font-outfit text-slate-400 pointer-events-none">kg</span>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold font-outfit text-slate-700 dark:text-slate-300 mb-1">Tinggi Badan (cm)</label>
            <div className="relative">
              <input
                type="number"
                step="1"
                min="30"
                max="200"
                value={heightCm}
                onChange={(e) => setHeightCm(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl pl-3 pr-8 py-2 text-xs font-bold font-outfit text-slate-900 dark:text-white focus:outline-none focus:border-purple-500 shadow-2xs"
                placeholder="cth. 85"
              />
              <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-bold font-outfit text-slate-400 pointer-events-none">cm</span>
            </div>
          </div>

          <div className="bg-purple-50/60 dark:bg-purple-950/30 p-3 rounded-2xl border border-purple-200/80 dark:border-purple-800/60 flex flex-col justify-center">
            <span className="text-[11px] font-bold font-outfit text-slate-600 dark:text-slate-400 block">Luas Permukaan Tubuh:</span>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-base font-black font-outfit text-purple-900 dark:text-purple-300">{calculatedBSA.toFixed(2)}</span>
              <span className="text-xs font-bold font-outfit text-purple-700 dark:text-purple-400">m² (Mosteller)</span>
            </div>
          </div>
        </div>
      </div>

      {/* SUB-TABS NAVIGATION - STANDALONE PILLS */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-purple-100 dark:border-purple-950/80 scrollbar-none">
        {[
          { id: 'quick', label: 'Kalkulator Dosis Cepat', icon: Calculator },
          { id: 'compounding', label: 'Kalkulator Racikan Puyer & Kapsul', icon: FlaskConical, badge: 'Resep Racik' },
          { id: 'syrup', label: 'Kalkulator Sirup & Botol', icon: Pill },
          { id: 'classic', label: 'Rumus Klasik (Young/Dilling/Fried)', icon: Scale },
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id as any)}
              className={`rounded-2xl px-4 py-2.5 text-xs font-black font-outfit whitespace-nowrap cursor-pointer transition-all flex items-center gap-2 shrink-0 ${
                isActive
                  ? 'bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 text-white shadow-md shadow-purple-950/40 border border-purple-400/30'
                  : 'bg-white dark:bg-[#150720] text-slate-600 dark:text-slate-300 hover:bg-purple-50/70 dark:hover:bg-purple-950/40 border border-slate-200 dark:border-purple-900/40 shadow-2xs'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-purple-600 dark:text-purple-400'}`} />
              <span>{tab.label}</span>
              {tab.badge && (
                <span className={`ml-1 px-2 py-0.5 text-[10px] font-bold font-outfit rounded-full ${
                  isActive
                    ? 'bg-purple-950/60 text-purple-200 border border-purple-400/30'
                    : 'bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-800'
                }`}>
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: KALKULATOR DOSIS CEPAT */}
      {/* ========================================================================= */}
      {activeSubTab === 'quick' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Controls Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
              <h3 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Pill className="w-4 h-4 text-teal-700 dark:text-teal-400" />
                Pilih Obat Pediatrik
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Obat Anak Indonesia (Database BPOM)</label>
                  <select
                    value={selectedDrugId}
                    onChange={(e) => {
                      const newId = e.target.value;
                      setSelectedDrugId(newId);
                      const target = PEDIATRIC_DRUGS_DATABASE.find(d => d.id === newId);
                      if (target) {
                        if (target.dosingType === 'per_kg_per_dose') {
                          setQuickCustomMgPerKg(target.singleDoseMinMgPerKg || 10);
                        } else if (target.dosingType === 'per_kg_per_day') {
                          setQuickCustomMgPerKg(target.standardDoseMgPerKgPerDay || target.minDoseMgPerKgPerDay || 40);
                        } else {
                          setQuickCustomMgPerKg(target.standardAdultDoseMg || 10);
                        }
                        setQuickFrequency(target.defaultFrequencyPerDay);
                        setQuickSelectedFormulationIndex(0);
                      }
                    }}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2.5 text-xs font-bold text-slate-900 dark:text-white focus:outline-none focus:border-teal-600 cursor-pointer shadow-2xs"
                  >
                    {PEDIATRIC_DRUGS_DATABASE.map(drug => (
                      <option key={drug.id} value={drug.id}>
                        {drug.name} ({drug.category})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Enhanced Dosing Control Box (Dual Slider + Direct Number Input + Presets) */}
                <div className="bg-slate-50 dark:bg-slate-950 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 space-y-3.5 shadow-2xs">
                  {/* Top Bar: Title & Direct Numerical Input Box */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <span className="text-xs font-black text-slate-900 dark:text-white block">
                        {rangeConfig.title}
                      </span>
                      <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                        Standar IDAI: <strong>{rangeConfig.stdMin} - {rangeConfig.stdMax}</strong> {rangeConfig.unit}
                      </span>
                    </div>

                    {/* Direct Number Input */}
                    <div className="flex items-center gap-1.5">
                      <div className="relative">
                        <input
                          type="number"
                          step={rangeConfig.step}
                          min={rangeConfig.min}
                          max={rangeConfig.max}
                          value={quickCustomMgPerKg}
                          onChange={(e) => setQuickCustomMgPerKg(e.target.value)}
                          className="w-24 bg-white dark:bg-slate-900 border border-purple-400 dark:border-purple-600 rounded-xl pl-3 pr-2 py-1.5 text-sm font-black text-purple-800 dark:text-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500/20 text-center shadow-2xs"
                        />
                      </div>
                      <span className="text-xs font-bold text-purple-800 dark:text-purple-300">
                        {rangeConfig.type === 'per_dose' ? 'mg/kg' : (rangeConfig.type === 'per_day' ? 'mg/kg/hr' : 'mg')}
                      </span>
                    </div>
                  </div>

                  {/* Range Slider */}
                  <div className="space-y-1 font-outfit">
                    <input
                      type="range"
                      min={rangeConfig.min}
                      max={rangeConfig.max}
                      step={rangeConfig.step}
                      value={numCustomMgPerKg || rangeConfig.stdMin}
                      onChange={(e) => setQuickCustomMgPerKg(parseFloat(e.target.value))}
                      className="w-full accent-purple-600 h-2 bg-purple-100 dark:bg-purple-950/60 rounded-lg cursor-pointer transition"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 font-bold px-0.5 font-outfit">
                      <span>Batas Min: {rangeConfig.min}</span>
                      <span className="text-purple-700 dark:text-purple-300 font-extrabold">Rekomendasi: {rangeConfig.stdMin} - {rangeConfig.stdMax}</span>
                      <span>Batas Maks: {rangeConfig.max}</span>
                    </div>
                  </div>

                  {/* Clinical Preset Buttons (Chips) */}
                  <div className="pt-2 border-t border-purple-100 dark:border-purple-900/60 font-outfit">
                    <span className="text-[11px] font-bold text-slate-600 dark:text-purple-300/80 block mb-1.5 font-outfit">
                      Pilihan Dosis Baku Klinis:
                    </span>
                    <div className="flex flex-wrap gap-1.5 font-outfit">
                      {rangeConfig.presets.map((preset, idx) => {
                        const isSelected = Math.abs(numCustomMgPerKg - preset.value) < 0.01;
                        return (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => setQuickCustomMgPerKg(preset.value)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-bold font-outfit transition cursor-pointer shadow-2xs ${
                              isSelected
                                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md shadow-purple-950/30 ring-2 ring-purple-400/40'
                                : 'bg-white dark:bg-purple-950/40 text-slate-700 dark:text-purple-200 border border-purple-200 dark:border-purple-800/80 hover:border-purple-500 hover:text-purple-900 dark:hover:text-purple-100 hover:bg-purple-50'
                            }`}
                          >
                            {preset.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Real-time Dose Status Badge */}
                  <div className="pt-1 font-outfit">
                    {quickCalculations.isBelowTherapeutic ? (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-bold font-outfit bg-amber-50 text-amber-900 border border-amber-200 dark:bg-amber-950/30 dark:text-amber-300 dark:border-amber-800/50">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                        Dosis di bawah rekomendasi standar (Sub-terapeutik &lt; {rangeConfig.stdMin} {rangeConfig.unit})
                      </div>
                    ) : quickCalculations.isAboveStandard ? (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-bold font-outfit bg-rose-50 text-rose-900 border border-rose-200 dark:bg-rose-950/30 dark:text-rose-300 dark:border-rose-800/50">
                        <AlertTriangle className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
                        Dosis di atas rentang standar rekomendasi (&gt; {rangeConfig.stdMax} {rangeConfig.unit})
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-bold font-outfit bg-purple-50 text-purple-900 border border-purple-200 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-800/60">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                        Dosis berada dalam rentang terapi aman BPOM &amp; Pedoman IDAI
                      </div>
                    )}
                  </div>
                </div>

                {/* Frekuensi Pemberian */}
                <div className="font-outfit">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 font-outfit">Frekuensi Pemberian</label>
                  <div className="grid grid-cols-4 gap-2">
                    {[1, 2, 3, 4].map((freq) => (
                      <button
                        key={freq}
                        type="button"
                        onClick={() => setQuickFrequency(freq)}
                        className={`py-2 rounded-xl text-xs font-bold font-outfit transition cursor-pointer shadow-2xs ${
                          quickFrequency === freq
                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md shadow-purple-950/30 ring-2 ring-purple-400/40'
                            : 'bg-white dark:bg-purple-950/40 text-slate-700 dark:text-purple-200 border border-purple-200 dark:border-purple-800/80 hover:border-purple-500 hover:text-purple-900 dark:hover:text-purple-100 hover:bg-purple-50'
                        }`}
                      >
                        {freq}x sehari
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sediaan Komersial */}
                <div className="font-outfit">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 font-outfit">Pilihan Bentuk Sediaan Komersial</label>
                  <select
                    value={quickSelectedFormulationIndex}
                    onChange={(e) => setQuickSelectedFormulationIndex(parseInt(e.target.value))}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-purple-200 dark:border-purple-800/80 rounded-xl px-3 py-2 text-xs font-bold font-outfit text-slate-900 dark:text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 cursor-pointer shadow-2xs"
                  >
                    {currentDrug.formulations.map((form, idx) => (
                      <option key={idx} value={idx}>
                        {form.name} ({form.unitLabel})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Results Column - Executive Mulberry & Purple Suite */}
          <div className="lg:col-span-6 space-y-4 font-outfit">
            {/* Main Result Card */}
            <div className="bg-gradient-to-br from-[#1a0524] via-[#2a0c3b] to-[#160420] border border-purple-500/35 rounded-3xl p-6 text-white shadow-2xl relative overflow-hidden space-y-4 font-outfit">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-purple-500/25">
                <span className="text-xs font-black text-pink-300 uppercase tracking-wider font-outfit">Hasil Perhitungan Terapi Anak</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold font-outfit bg-purple-500/25 text-pink-200 border border-purple-400/40">
                  BB: {numWeightKg} kg | Usia: {numAgeYears} th {numAgeMonths} bln
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-outfit">
                <div className="bg-[#12031a]/90 border border-purple-900/60 rounded-2xl p-4.5">
                  <span className="text-xs text-purple-200/80 font-bold font-outfit">Dosis Per Kali Minum</span>
                  <div className="flex items-baseline gap-1.5 mt-1 font-outfit">
                    <span className="text-3xl font-black text-pink-300 font-outfit">{quickCalculations.singleDoseMg}</span>
                    <span className="text-sm font-bold text-purple-100 font-outfit">mg / kali</span>
                  </div>
                  <span className="text-[11px] text-purple-300/80 font-medium font-outfit block mt-1">
                    Diberikan {quickFrequency}x sehari (Tiap {24 / quickFrequency} jam)
                  </span>
                </div>

                <div className="bg-[#12031a]/90 border border-purple-900/60 rounded-2xl p-4.5">
                  <span className="text-xs text-purple-200/80 font-bold font-outfit">Total Dosis Harian</span>
                  <div className="flex items-baseline gap-1.5 mt-1 font-outfit">
                    <span className="text-3xl font-black text-purple-300 font-outfit">{quickCalculations.dailyDoseMg}</span>
                    <span className="text-sm font-bold text-purple-100 font-outfit">mg / 24 jam</span>
                  </div>
                  <span className="text-[11px] text-purple-300/80 font-medium font-outfit block mt-1">
                    Batas Maksimum: {currentDrug.maxDailyDoseMg ? `${currentDrug.maxDailyDoseMg} mg/hari` : 'Sesuai BB'}
                  </span>
                </div>
              </div>

              {/* Liquid Volume Conversion if available */}
              {quickCalculations.liquidVolumeMlPerDose > 0 && (
                <div className="bg-purple-950/70 border border-purple-500/40 rounded-2xl p-4.5 font-outfit">
                  <div className="flex items-center gap-2 mb-1.5 text-pink-300 text-xs font-black font-outfit">
                    <FlaskConical className="w-4 h-4 text-pink-400" />
                    Konversi Takaran Sediaan Cair ({quickCalculations.activeFormulation.name}):
                  </div>
                  <div className="flex flex-wrap items-baseline gap-3 font-outfit">
                    <span className="text-2xl sm:text-3xl font-black text-white font-outfit">
                      {quickCalculations.liquidVolumeMlPerDose} mL
                    </span>
                    <span className="text-sm font-extrabold text-pink-300 font-outfit">
                      = {quickCalculations.householdMeasure}
                    </span>
                  </div>
                </div>
              )}

              {/* Safety & Warning Alerts */}
              {(quickCalculations.isExceedingMaxDaily || quickCalculations.isExceedingMaxSingle) ? (
                <div className="p-3.5 rounded-2xl bg-rose-500/20 border border-rose-500/40 text-rose-200 text-xs flex items-start gap-2.5 font-outfit">
                  <AlertTriangle className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-extrabold font-outfit">PERINGATAN: Dosis Melebihi Batas Keamanan Pediatrik!</span>
                    <p className="mt-0.5 text-rose-300 font-medium font-outfit">
                      Dosis yang dihitung melebihi batas maksimum harian ({currentDrug.maxDailyDoseMg} mg). Harap turunkan dosis atau frekuensi pemberian.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="p-3.5 rounded-2xl bg-purple-500/20 border border-purple-500/40 text-purple-100 text-xs flex items-center gap-2.5 font-outfit">
                  <CheckCircle2 className="w-4 h-4 text-pink-300 flex-shrink-0" />
                  <span className="font-medium font-outfit">Dosis berada dalam rentang terapi aman standar farmakope &amp; pedoman klinis.</span>
                </div>
              )}

              {/* Administration & Red Flags */}
              <div className="pt-3 border-t border-purple-500/25 space-y-2 text-xs font-outfit">
                <div className="flex items-start gap-2 text-purple-100 font-outfit">
                  <Info className="w-4 h-4 text-pink-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-extrabold text-pink-200 font-outfit">Cara Pemberian: </span>
                    {currentDrug.administrationNotes}
                  </div>
                </div>

                {currentDrug.redFlags && currentDrug.redFlags.length > 0 && (
                  <div className="p-3.5 bg-amber-500/20 border border-amber-500/40 rounded-2xl text-amber-200 space-y-1 font-outfit">
                    <span className="font-extrabold flex items-center gap-1.5 text-amber-300 font-outfit">
                      <ShieldAlert className="w-3.5 h-3.5" /> Perhatian Klinis:
                    </span>
                    <ul className="list-disc list-inside space-y-0.5 text-[11px] text-amber-100 pl-1 font-medium font-outfit">
                      {currentDrug.redFlags.map((flag, idx) => (
                        <li key={idx}>{flag}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: KALKULATOR RACIKAN PUYER & KAPSUL */}
      {/* ========================================================================= */}
      {activeSubTab === 'compounding' && (
        <div className="space-y-6">
          {/* Recipe Configuration Bar */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 flex items-center justify-center font-bold">
                  <FlaskConical className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900 dark:text-white">Formulator Resep Racikan Puyer / Kapsul</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Konversi tablet utuh ke serbuk puyer terbagi rata dengan zat pengisi SL</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCheckCompoundedInteractions}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#0f766e] hover:bg-[#115e59] text-white shadow-sm transition cursor-pointer"
                >
                  <ShieldAlert className="w-3.5 h-3.5" />
                  Cek Interaksi Obat Racik
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Jumlah Bungkus Puyer / Kapsul (N)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    max="100"
                    value={packetCount}
                    onChange={(e) => setPacketCount(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-amber-300 dark:border-amber-700 rounded-xl pl-3 pr-16 py-2 text-xs font-black text-amber-900 dark:text-amber-300 focus:outline-none focus:border-amber-600 shadow-2xs"
                  />
                  <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 pointer-events-none">bungkus</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Aturan Pakai (Signa)</label>
                <input
                  type="text"
                  value={signaText}
                  onChange={(e) => setSignaText(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold text-slate-900 dark:text-white focus:outline-none focus:border-teal-600 shadow-2xs"
                  placeholder="cth. 3 x sehari 1 bungkus"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Target Bobot Serbuk per Bungkus</label>
                <select
                  value={targetWeightPerPacketMg}
                  onChange={(e) => setTargetWeightPerPacketMg(parseInt(e.target.value))}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold text-slate-900 dark:text-white focus:outline-none focus:border-teal-600 cursor-pointer shadow-2xs"
                >
                  <option value={250}>250 mg (Puyer Ringan)</option>
                  <option value={300}>300 mg (Standar Farmakope)</option>
                  <option value={400}>400 mg (Kapsul No. 3 / Puyer Sedang)</option>
                  <option value={500}>500 mg (Kapsul No. 2 / Standar Dewasa)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Zat Pengisi / Pengering</label>
                <select
                  value={fillerType}
                  onChange={(e) => setFillerType(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold text-slate-900 dark:text-white focus:outline-none focus:border-teal-600 cursor-pointer shadow-2xs"
                >
                  <option value="Saccharum Lactis (SL / Gula Susu)">Saccharum Lactis (SL / Gula Susu)</option>
                  <option value="Amylum Manihot / Pati Singkong">Amylum Manihot (Bebas Laktosa)</option>
                  <option value="Carmine (Penanda Homogenitas Merah)">Carmine + SL (Penanda Warna)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Compounding Items Table */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-sm space-y-4 font-outfit">
            {/* Header and Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h4 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2 font-outfit">
                <Pill className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                Komposisi Obat yang Dirasuk ({compoundingItems.length} Item)
              </h4>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsCatalogModalOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-purple-100 hover:bg-purple-200 text-purple-900 dark:bg-purple-950/70 dark:text-purple-300 border border-purple-300 dark:border-purple-800 transition cursor-pointer shadow-2xs font-outfit"
                  title="Lihat katalog lengkap sediaan tablet racikan Indonesia"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  Katalog Tablet ({COMPOUNDING_TABLET_PRESETS.length})
                </button>

                <button
                  type="button"
                  onClick={() => handleAddCompoundingItem()}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transition cursor-pointer shadow-2xs font-outfit"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Tambah Obat Racikan
                </button>
              </div>
            </div>

            {/* Quick-Add Chips for Popular Compounding Drugs */}
            <div className="flex flex-wrap items-center gap-1.5 p-2.5 bg-purple-50/60 dark:bg-purple-950/20 rounded-2xl border border-purple-100 dark:border-purple-900/40 text-xs font-outfit">
              <span className="text-[11px] font-black text-purple-900 dark:text-purple-300 flex items-center gap-1 mr-1">
                <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                Tambah Cepat:
              </span>
              {QUICK_POPULAR_PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => handleAddCompoundingItem(preset)}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl text-[11px] font-bold bg-white dark:bg-slate-800 hover:bg-purple-100 dark:hover:bg-purple-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-purple-300 transition shadow-2xs cursor-pointer"
                  title={`Tambah ${preset.name} (${preset.defaultStrengthMg} mg) ke racikan`}
                >
                  <Plus className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                  <span>{preset.genericName}</span>
                  <span className="text-[10px] text-purple-600 dark:text-purple-400 font-black">({preset.defaultStrengthMg}mg)</span>
                </button>
              ))}
            </div>

            <div className="overflow-x-auto pb-20">
              <table className="w-full text-left text-xs border-collapse font-outfit">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800 font-bold">
                    <th className="py-3 px-3 min-w-[200px]">Nama Obat / Generik</th>
                    <th className="py-3 px-3 min-w-[130px]">Dosis per Bungkus</th>
                    <th className="py-3 px-3 min-w-[170px]">Kekuatan Sediaan Tablet</th>
                    <th className="py-3 px-3">Total Dosis ({numPacketCount} bks)</th>
                    <th className="py-3 px-3 text-amber-900 dark:text-amber-300 font-black">Tablet yang Diambil</th>
                    <th className="py-3 px-3">Pembulatan Praktis</th>
                    <th className="py-3 px-3 text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-800 dark:text-slate-200 font-medium">
                  {compoundingResults.itemsSummary.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition">
                      {/* Column 1: Drug Name Searchable Combobox */}
                      <td className="py-3 px-3 align-top">
                        <CompoundingDrugCombobox
                          rowId={item.id}
                          value={item.customName}
                          category={item.category}
                          onSelectPreset={(preset) => handleSelectPresetForRow(item.id, preset)}
                          onChangeText={(text) => handleUpdateCompoundingItem(item.id, 'customName', text)}
                        />
                      </td>

                      {/* Column 2: Dose per Packet with Weight Helper */}
                      <td className="py-3 px-3 align-top">
                        <div className="space-y-1">
                          <div className="flex items-center gap-1">
                            <input
                              type="number"
                              step="any"
                              value={item.dosePerPacketMg}
                              onChange={(e) => handleUpdateCompoundingItem(item.id, 'dosePerPacketMg', e.target.value)}
                              className="bg-slate-50 dark:bg-slate-950 border border-purple-200 dark:border-purple-800/70 rounded-lg px-2 py-1 text-xs text-purple-900 dark:text-purple-300 font-bold w-20 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                            />
                            <span className="text-slate-500 font-bold">mg</span>
                          </div>

                          {numWeightKg > 0 && item.pediatricMgPerKgPerDose ? (
                            <button
                              type="button"
                              onClick={() => {
                                const rec = Math.round(numWeightKg * item.pediatricMgPerKgPerDose! * 10) / 10;
                                handleUpdateCompoundingItem(item.id, 'dosePerPacketMg', rec);
                              }}
                              className="text-[10px] text-purple-600 dark:text-purple-400 hover:text-purple-700 font-semibold hover:underline block cursor-pointer"
                              title={`Terapkan anjuran dosis untuk BB ${numWeightKg} kg (${item.pediatricMgPerKgPerDose} mg/kg)`}
                            >
                              💡 Saran: {Math.round(numWeightKg * item.pediatricMgPerKgPerDose * 10) / 10} mg
                            </button>
                          ) : null}
                        </div>
                      </td>

                      {/* Column 3: Automated Tablet Strength with Quick Strength Chips */}
                      <td className="py-3 px-3 align-top">
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-1">
                            <input
                              type="number"
                              step="any"
                              value={item.tabletStrengthMg}
                              onChange={(e) => handleUpdateCompoundingItem(item.id, 'tabletStrengthMg', e.target.value)}
                              className="bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg px-2 py-1 text-xs text-slate-900 dark:text-white font-bold w-20 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                            />
                            <span className="text-slate-500 font-bold">mg/tab</span>
                          </div>

                          {/* Quick Strength Preset Chips */}
                          {item.availableStrengths && item.availableStrengths.length > 1 && (
                            <div className="flex flex-wrap items-center gap-1">
                              <span className="text-[10px] text-slate-400 font-bold">Opsi:</span>
                              {item.availableStrengths.map((str) => {
                                const isSelected = Number(item.tabletStrengthMg) === str;
                                return (
                                  <button
                                    key={str}
                                    type="button"
                                    onClick={() => handleUpdateCompoundingItem(item.id, 'tabletStrengthMg', str)}
                                    className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md transition cursor-pointer ${
                                      isSelected
                                        ? 'bg-purple-600 text-white shadow-2xs scale-105'
                                        : 'bg-slate-100 hover:bg-purple-100 dark:bg-slate-800 dark:hover:bg-purple-950 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                                    }`}
                                    title={`Gunakan kekuatan sediaan ${str} mg`}
                                  >
                                    {str}
                                  </button>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      </td>

                      <td className="py-3 px-3 align-top font-bold text-slate-900 dark:text-slate-200 pt-3.5">
                        {item.totalMgNeeded} mg
                      </td>

                      <td className="py-3 px-3 align-top font-black text-sm text-amber-900 dark:text-amber-400 pt-3.5">
                        {item.rawTablets} tab
                      </td>

                      <td className="py-3 px-3 align-top pt-2.5">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                          <span className="font-black text-slate-900 dark:text-white">{item.roundedHalfTablets} tab</span>
                          <span className={`text-[10px] font-bold ${Math.abs(item.doseDeviationPercent) > 10 ? 'text-rose-600 dark:text-rose-400' : 'text-slate-500'}`}>
                            ({item.doseDeviationPercent > 0 ? `+${item.doseDeviationPercent}%` : `${item.doseDeviationPercent}%`})
                          </span>
                        </div>
                      </td>

                      <td className="py-3 px-3 text-center align-top pt-2.5">
                        <button
                          onClick={() => handleRemoveCompoundingItem(item.id)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/20 transition cursor-pointer"
                          title="Hapus obat dari racikan"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Calculations Summary & Saccharum Lactis Filler */}
            <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-4 font-outfit">
              <div className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-4.5">
                <span className="text-xs text-slate-600 dark:text-slate-400 block mb-1 font-bold">Estimasi Bobot Obat Aktif:</span>
                <span className="text-xl font-black text-slate-900 dark:text-slate-100 font-outfit">
                  {compoundingResults.totalActiveMedicinesWeightMg} mg
                </span>
                <span className="text-[11px] text-slate-500 block mt-1 font-medium">
                  (~{(compoundingResults.totalActiveMedicinesWeightMg / Math.max(1, numPacketCount)).toFixed(1)} mg / bungkus)
                </span>
              </div>

              <div className="bg-pink-50/70 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-800/40 rounded-2xl p-4.5">
                <span className="text-xs text-pink-900 dark:text-pink-300 block mb-1 font-bold">Kebutuhan Zat Pengisi ({fillerType}):</span>
                <span className="text-xl font-black text-pink-700 dark:text-pink-400 font-outfit">
                  {compoundingResults.saccharumLactisNeededMg} mg
                </span>
                <span className="text-[11px] text-pink-800/80 dark:text-pink-300/80 block mt-1 font-medium">
                  ({(compoundingResults.saccharumLactisNeededMg / 1000).toFixed(2)} gram / {(compoundingResults.fillerPerPacketMg)} mg per bungkus)
                </span>
              </div>

              <div className="bg-purple-50/70 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800/40 rounded-2xl p-4.5">
                <span className="text-xs text-purple-900 dark:text-purple-300 block mb-1 font-bold">Total Bobot Serbuk yang Ditimbang:</span>
                <span className="text-xl font-black text-purple-900 dark:text-purple-300 font-outfit">
                  {compoundingResults.targetTotalPowderWeightMg} mg
                </span>
                <span className="text-[11px] text-purple-800/80 dark:text-purple-300/80 block mt-1 font-medium">
                  (Bagi rata menjadi {numPacketCount} bungkus @ {targetWeightPerPacketMg} mg)
                </span>
              </div>
            </div>

            {/* Action Bar & WhatsApp Export */}
            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 font-outfit">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopyToClipboard(generateWhatsAppLabelText(), 'Etiket Puyer')}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-2xl text-xs font-bold bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-md shadow-purple-950/30 transition cursor-pointer font-outfit"
                >
                  {copiedNotification === 'Etiket Puyer' ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-200" />
                      Tersalin ke Clipboard!
                    </>
                  ) : (
                    <>
                      <Share2 className="w-4 h-4" />
                      Salin Etiket Resep WhatsApp
                    </>
                  )}
                </button>
              </div>

              <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                <span className="text-amber-800 dark:text-amber-400 font-bold">Catatan Farmasis: </span>
                Jika tablet yang diambil &lt; 0.5 tab, gunakan metode <strong>Pengenceran Bertingkat (<em>Trituration</em>)</strong>.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: KALKULATOR SIRUP & BOTOL */}
      {/* ========================================================================= */}
      {activeSubTab === 'syrup' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 space-y-4 font-outfit">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-sm space-y-4 font-outfit">
              <h3 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2 font-outfit">
                <Pill className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                Pilihan Sediaan Sirup Komersial
              </h3>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 font-outfit">Obat Sirup</label>
                <select
                  value={syrupDrugId}
                  onChange={(e) => {
                    setSyrupDrugId(e.target.value);
                    setSyrupFormulationIndex(0);
                    const target = PEDIATRIC_DRUGS_DATABASE.find(d => d.id === e.target.value);
                    if (target) {
                      const dose = (target.singleDoseMinMgPerKg || target.standardDoseMgPerKgPerDay || 10) * (target.dosingType === 'per_kg_per_dose' ? numWeightKg : (numWeightKg / target.defaultFrequencyPerDay));
                      setSyrupCustomDoseMg(Math.round(dose));
                      setSyrupFrequency(target.defaultFrequencyPerDay);
                    }
                  }}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2.5 text-xs font-bold text-slate-900 dark:text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 cursor-pointer shadow-2xs font-outfit"
                >
                  {PEDIATRIC_DRUGS_DATABASE.filter(d => d.formulations.some(f => f.volumePerUnit && f.volumePerUnit > 0)).map(drug => (
                    <option key={drug.id} value={drug.id}>
                      {drug.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 font-outfit">Kekuatan Sediaan Sirup / Drops</label>
                <select
                  value={syrupFormulationIndex}
                  onChange={(e) => setSyrupFormulationIndex(parseInt(e.target.value))}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold text-slate-900 dark:text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 cursor-pointer shadow-2xs font-outfit"
                >
                  {syrupDrug.formulations.filter(f => f.volumePerUnit && f.volumePerUnit > 0).map((form, idx) => (
                    <option key={idx} value={idx}>
                      {form.name} ({form.unitLabel} - Botol {form.bottleSizeMl} mL)
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 font-outfit">Dosis yang Diminta per Kali Minum (mg)</label>
                <div className="relative">
                  <input
                    type="number"
                    step="5"
                    value={syrupCustomDoseMg}
                    onChange={(e) => setSyrupCustomDoseMg(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl pl-3 pr-20 py-2 text-xs font-bold text-slate-900 dark:text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 shadow-2xs font-outfit"
                  />
                  <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 pointer-events-none font-outfit">mg / minum</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 font-outfit">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 font-outfit">Frekuensi per Hari</label>
                  <select
                    value={syrupFrequency}
                    onChange={(e) => setSyrupFrequency(parseInt(e.target.value))}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold text-slate-900 dark:text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 cursor-pointer shadow-2xs font-outfit"
                  >
                    <option value={1}>1 x sehari (Tiap 24 jam)</option>
                    <option value={2}>2 x sehari (Tiap 12 jam)</option>
                    <option value={3}>3 x sehari (Tiap 8 jam)</option>
                    <option value={4}>4 x sehari (Tiap 6 jam)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 font-outfit">Durasi Terapi (Hari)</label>
                  <div className="relative">
                    <input
                      type="number"
                      min="1"
                      max="30"
                      value={syrupDurationDays}
                      onChange={(e) => setSyrupDurationDays(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl pl-3 pr-10 py-2 text-xs font-bold text-slate-900 dark:text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 shadow-2xs font-outfit"
                    />
                    <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 pointer-events-none font-outfit">hari</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4 font-outfit">
            <div className="bg-gradient-to-br from-[#1a0524] via-[#2a0c3b] to-[#160420] border border-purple-500/35 rounded-3xl p-6 text-white shadow-2xl space-y-5 font-outfit">
              <span className="text-xs font-black text-pink-300 uppercase tracking-wider block font-outfit">
                Hasil Perhitungan Takaran &amp; Botol Sirup
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-outfit">
                <div className="bg-[#12031a]/90 border border-purple-900/60 rounded-2xl p-4.5">
                  <span className="text-xs text-purple-200/80 font-bold font-outfit">Takaran Sekali Minum</span>
                  <div className="flex items-baseline gap-2 mt-1 font-outfit">
                    <span className="text-3xl font-black text-pink-300 font-outfit">{syrupResults.mlPerDose}</span>
                    <span className="text-sm font-bold text-purple-100 font-outfit">mL</span>
                  </div>
                  <span className="text-xs font-bold text-purple-300 mt-1 block font-outfit">
                    = {syrupResults.spoonText}
                  </span>
                </div>

                <div className="bg-[#12031a]/90 border border-purple-900/60 rounded-2xl p-4.5">
                  <span className="text-xs text-purple-200/80 font-bold font-outfit">Kebutuhan Botol ({numSyrupDays} Hari)</span>
                  <div className="flex items-baseline gap-2 mt-1 font-outfit">
                    <span className="text-3xl font-black text-amber-300 font-outfit">{syrupResults.bottlesRequired}</span>
                    <span className="text-sm font-bold text-purple-100 font-outfit">Botol ({syrupResults.activeForm.bottleSizeMl} mL)</span>
                  </div>
                  <span className="text-xs text-purple-200/70 mt-1 block font-outfit">
                    Total volume dibutuhkan: {syrupResults.totalMlNeeded} mL
                  </span>
                </div>
              </div>

              {/* Beyond Use Date (BUD) Warning */}
              <div className="p-4 rounded-2xl bg-[#12031a]/90 border border-purple-900/60 space-y-2 font-outfit">
                <div className="flex items-center gap-2 text-xs font-bold text-purple-200 font-outfit">
                  <Clock className="w-4 h-4 text-amber-400" />
                  Informasi Beyond Use Date (BUD) &amp; Penyimpanan:
                </div>
                <div className="text-xs text-purple-100/90 space-y-1 font-medium font-outfit">
                  <p>• Masa simpan aman pasca dilarutkan/dibuka: <strong className="text-amber-300 font-bold">{syrupResults.budDays} Hari</strong>.</p>
                  <p>• {syrupResults.activeForm.form === 'sirup' && syrupResults.activeForm.budAfterOpenDays && syrupResults.activeForm.budAfterOpenDays <= 7 ? 'HARUS DISIMPAN DI LEMARI ES (2 - 8°C) DAN JANGAN DIBEKUKAN.' : 'Simpan pada suhu ruang sejuk (&lt;25°C) terlindung dari sinar matahari langsung.'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: RUMUS KLASIK FARMAKOPE */}
      {/* ========================================================================= */}
      {activeSubTab === 'classic' && (
        <div className="space-y-6 font-outfit">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-sm space-y-4 font-outfit">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 flex items-center justify-center font-bold">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900 dark:text-white font-outfit">Komparasi Rumus Dosis Klasik Farmakope Indonesia</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium font-outfit">Verifikasi dosis anak terhadap Dosis Maksimum (DM) Dewasa</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 font-outfit">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 font-outfit">Nama Obat Acuan</label>
                <input
                  type="text"
                  value={classicDrugName}
                  onChange={(e) => setClassicDrugName(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold text-slate-900 dark:text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 shadow-2xs font-outfit"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 font-outfit">Dosis Maksimum / Standar Dewasa (mg)</label>
                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    value={classicAdultDoseMg}
                    onChange={(e) => setClassicAdultDoseMg(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl pl-3 pr-20 py-2 text-xs font-bold text-slate-900 dark:text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 shadow-2xs font-outfit"
                  />
                  <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 pointer-events-none font-outfit">mg / dosis</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm overflow-hidden space-y-3">
            <h4 className="text-xs font-black text-slate-800 dark:text-slate-200 uppercase tracking-wider">Tabel Hasil Perhitungan Semua Rumus</h4>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800 font-bold">
                    <th className="py-3 px-3">Metode / Rumus</th>
                    <th className="py-3 px-3">Kesesuaian Populasi</th>
                    <th className="py-3 px-3">Formula Perhitungan</th>
                    <th className="py-3 px-3 text-purple-900 dark:text-purple-300 font-black">Hasil Dosis Anak</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-800 dark:text-slate-200 font-medium">
                  {classicResults.map((res, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition">
                      <td className="py-3 px-3 font-black text-slate-900 dark:text-white flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 text-[10px] flex items-center justify-center font-bold">
                          {idx + 1}
                        </span>
                        {res.formulaName}
                      </td>
                      <td className="py-3 px-3 text-slate-600 dark:text-slate-400 font-medium">{res.indication}</td>
                      <td className="py-3 px-3 font-mono text-[11px] text-slate-700 dark:text-slate-300">{res.formulaDescription}</td>
                      <td className="py-3 px-3">
                        <span className="px-2.5 py-1 rounded-lg bg-purple-50 dark:bg-purple-950/40 text-purple-900 dark:text-purple-300 font-black text-xs border border-purple-200 dark:border-purple-800">
                          {res.calculatedDoseMg} mg
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      {/* MODAL: KATALOG LENGKAP SEDIAAN TABLET RACIKAN INDONESIA */}
      {isCatalogModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-800 rounded-3xl w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden font-outfit animate-in fade-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-purple-50/50 dark:bg-purple-950/20">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold shadow-xs">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900 dark:text-white">Katalog Sediaan Tablet Racikan Indonesia</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Pilih obat untuk langsung dimasukkan ke formulator racikan puyer / kapsul</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsCatalogModalOpen(false)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Search & Category Filter */}
            <div className="p-4 border-b border-slate-100 dark:border-slate-800 space-y-3 bg-white dark:bg-slate-900">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  value={catalogSearchQuery}
                  onChange={(e) => setCatalogSearchQuery(e.target.value)}
                  placeholder="Cari obat generik, merk/paten (Sanmol, Ventolin, Medixon, Vometa...), atau kategori..."
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl pl-9 pr-4 py-2 text-xs font-bold text-slate-900 dark:text-white focus:outline-none focus:border-purple-600 shadow-2xs"
                />
              </div>

              <div className="flex flex-wrap gap-1.5 overflow-x-auto pb-1 text-xs">
                {['Semua', 'Analgesik', 'Mukolitik', 'Bronkodilator', 'Antihistamin', 'Kortikosteroid', 'Antiemetik', 'Spasmolitik', 'Saraf', 'Antibiotik', 'OAT', 'Diuretik', 'Suplemen'].map(cat => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setCatalogCategoryFilter(cat)}
                    className={`px-3 py-1 rounded-xl text-xs font-bold transition cursor-pointer ${
                      catalogCategoryFilter === cat
                        ? 'bg-purple-600 text-white shadow-2xs'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-purple-50 dark:hover:bg-purple-950/50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Drug Cards Grid */}
            <div className="p-4 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[50vh] bg-slate-50/40 dark:bg-slate-950/20">
              {filteredCatalogPresets.map(preset => (
                <div
                  key={preset.id}
                  className="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-purple-300 dark:hover:border-purple-700 bg-white dark:bg-slate-900 shadow-2xs hover:shadow-xs transition flex flex-col justify-between gap-2.5"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-xs font-black text-slate-900 dark:text-white">{preset.name}</h4>
                      <span className="text-[10px] font-black px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 shrink-0 border border-purple-200 dark:border-purple-800">
                        {preset.defaultStrengthMg} mg
                      </span>
                    </div>
                    <p className="text-[11px] text-purple-700 dark:text-purple-400 font-bold mt-0.5">{preset.category}</p>
                    
                    {preset.brandSynonyms.length > 0 && (
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">
                        Paten: <strong>{preset.brandSynonyms.join(', ')}</strong>
                      </p>
                    )}

                    {preset.availableStrengthsMg.length > 1 && (
                      <p className="text-[10px] text-slate-600 dark:text-slate-300 mt-1">
                        Sediaan Beredar: <span className="font-black text-purple-600 dark:text-purple-400">{preset.availableStrengthsMg.join(', ')} mg/tab</span>
                      </p>
                    )}

                    {preset.pediatricDoseRangeLabel && (
                      <p className="text-[10px] text-emerald-700 dark:text-emerald-400 font-semibold mt-1">
                        Dosis Acuan: {preset.pediatricDoseRangeLabel}
                      </p>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      handleAddCompoundingItem(preset);
                      setIsCatalogModalOpen(false);
                    }}
                    className="w-full py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition cursor-pointer shadow-2xs"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    + Masukkan ke Racikan
                  </button>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>Menampilkan {filteredCatalogPresets.length} dari {COMPOUNDING_TABLET_PRESETS.length} obat tablet racikan</span>
              <button
                type="button"
                onClick={() => setIsCatalogModalOpen(false)}
                className="px-4 py-1.5 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 font-bold text-slate-700 dark:text-slate-300 transition cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
