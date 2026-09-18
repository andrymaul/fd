import React, { useState, useMemo, useRef, useEffect } from 'react';
import { 
  IV_DRUGS_DATABASE, 
  IvDrugProfile, 
  YSiteCompatibilityPair, 
  checkYSiteCompatibility, 
  calculateSyringePumpRate, 
  calculateGravityDripRate,
  CompatibilityStatus,
  checkSyringeAdmixture,
  SYRINGE_ADMIXTURE_DATABASE,
  SyringeAdmixturePair 
} from '../data/ivCompatibilityData';
import { 
  Syringe, 
  FlaskConical, 
  AlertTriangle, 
  CheckCircle2, 
  Info, 
  Search, 
  Clock, 
  SunMedium, 
  Filter, 
  Calculator, 
  Layers, 
  Check, 
  X, 
  Sparkles, 
  Activity, 
  HelpCircle,
  BookOpen,
  ShieldCheck,
  ShieldAlert,
  Zap,
  Flame,
  Thermometer,
  Baby,
  ArrowRight,
  FileCheck,
  ArrowLeftRight,
  ChevronDown,
  Plus
} from 'lucide-react';
import { FloatingPillsBackground } from './FloatingPillsBackground';
import { EvidenceSourceBadge, DualEvidenceBadge } from './EvidenceSourceBadge';
import { PediatricDisplacementCalculator } from './PediatricDisplacementCalculator';

interface IvCompatibilityCheckerProps {
  onSelectTab?: (tab: string) => void;
}

export const IvCompatibilityChecker: React.FC<IvCompatibilityCheckerProps> = () => {
  const [activeSubTab, setActiveSubTab] = useState<'ysite' | 'admixture' | 'directory' | 'calculator' | 'displacement'>('ysite');
  const [selectedDisplacementPresetFromCard, setSelectedDisplacementPresetFromCard] = useState<string>('disp-ceftriaxone-1g');

  // Y-Site multi-drug selection (Default clean slate)
  const [selectedYSiteDrugIds, setSelectedYSiteDrugIds] = useState<string[]>([]);

  // Y-Site Searchable Dropdown State
  const [isYSiteDropdownOpen, setIsYSiteDropdownOpen] = useState(false);
  const [ySiteSearchQuery, setYSiteSearchQuery] = useState('');
  const [ySiteCategoryFilter, setYSiteCategoryFilter] = useState('Semua');
  const [ySiteHighlightedIndex, setYSiteHighlightedIndex] = useState(0);
  const ySiteDropdownRef = useRef<HTMLDivElement>(null);
  const ySiteSearchInputRef = useRef<HTMLInputElement>(null);

  // Close dropdown on click outside or escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ySiteDropdownRef.current && !ySiteDropdownRef.current.contains(event.target as Node)) {
        setIsYSiteDropdownOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isYSiteDropdownOpen) {
        setIsYSiteDropdownOpen(false);
      }
    };

    if (isYSiteDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isYSiteDropdownOpen]);

  // Reset highlight index when dropdown closes
  useEffect(() => {
    if (!isYSiteDropdownOpen) {
      setYSiteHighlightedIndex(0);
    }
  }, [isYSiteDropdownOpen]);

  // Directory Search & Filter State (Tab 2 - Alistair Gray 2021)
  const [directorySearchQuery, setDirectorySearchQuery] = useState<string>('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('Semua');
  const [selectedNpsaFilter, setSelectedNpsaFilter] = useState<string>('Semua');
  const [expandedDrugId, setExpandedDrugId] = useState<string | null>('iv-norepinephrine');
  const [checkedPreChecks, setCheckedPreChecks] = useState<Record<string, boolean>>({});

  const togglePreCheck = (key: string) => {
    setCheckedPreChecks(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Syringe Pump Calculator State (Tab 3)
  const [calcDrugPreset, setCalcDrugPreset] = useState<string>('iv-norepinephrine');
  const [calcPatientWeightKg, setCalcPatientWeightKg] = useState<number>(60);
  const [calcTargetDose, setCalcTargetDose] = useState<number>(0.05); // mcg/kg/min or mg/hr
  const [calcDrugMgInSyringe, setCalcDrugMgInSyringe] = useState<number>(4); // 4 mg
  const [calcSyringeVolumeMl, setCalcSyringeVolumeMl] = useState<number>(50); // 50 mL

  // Gravity drip state
  const [dripVolumeMl, setDripVolumeMl] = useState<number>(500);
  const [dripDurationHours, setDripDurationHours] = useState<number>(8);
  const [dripFactor, setDripFactor] = useState<20 | 60>(20);

  // Y-Site Combinations evaluation
  const ySitePairwiseResults = useMemo(() => {
    const pairs: { drugA: IvDrugProfile; drugB: IvDrugProfile; result: YSiteCompatibilityPair }[] = [];

    for (let i = 0; i < selectedYSiteDrugIds.length; i++) {
      for (let j = i + 1; j < selectedYSiteDrugIds.length; j++) {
        const idA = selectedYSiteDrugIds[i];
        const idB = selectedYSiteDrugIds[j];
        const drugA = IV_DRUGS_DATABASE.find(d => d.id === idA);
        const drugB = IV_DRUGS_DATABASE.find(d => d.id === idB);

        if (drugA && drugB) {
          const result = checkYSiteCompatibility(idA, idB);
          pairs.push({ drugA, drugB, result });
        }
      }
    }

    return pairs;
  }, [selectedYSiteDrugIds]);

  // Overall Y-Site status
  const overallYSiteStatus = useMemo(() => {
    if (selectedYSiteDrugIds.length < 2) return 'insufficient';
    if (ySitePairwiseResults.some(p => p.result.status === 'incompatible')) return 'incompatible';
    if (ySitePairwiseResults.some(p => p.result.status === 'conditional')) return 'conditional';
    if (ySitePairwiseResults.every(p => p.result.status === 'compatible')) return 'compatible';
    return 'conditional';
  }, [selectedYSiteDrugIds.length, ySitePairwiseResults]);

  // Available drugs for Y-Site (exclude already selected)
  const availableYSiteDrugs = useMemo(() => {
    return IV_DRUGS_DATABASE.filter(d => !selectedYSiteDrugIds.includes(d.id));
  }, [selectedYSiteDrugIds]);

  // Unique categories for filtering
  const ySiteCategories = useMemo(() => {
    const cats = new Set(availableYSiteDrugs.map(d => d.category));
    return ['Semua', ...Array.from(cats)];
  }, [availableYSiteDrugs]);

  // Filtered drugs by search query and category
  const filteredYSiteDrugs = useMemo(() => {
    const q = ySiteSearchQuery.toLowerCase().trim();
    return availableYSiteDrugs.filter(drug => {
      if (ySiteCategoryFilter !== 'Semua' && drug.category !== ySiteCategoryFilter) {
        return false;
      }
      if (!q) return true;
      const nameMatch = drug.name.toLowerCase().includes(q);
      const genMatch = drug.genericName?.toLowerCase().includes(q);
      const catMatch = drug.category.toLowerCase().includes(q);
      const brandMatch = drug.brandNames?.some(b => b.toLowerCase().includes(q));
      const phMatch = drug.phRange.toLowerCase().includes(q) || `ph ${drug.phRange}`.toLowerCase().includes(q);
      return nameMatch || genMatch || catMatch || brandMatch || phMatch;
    });
  }, [availableYSiteDrugs, ySiteSearchQuery, ySiteCategoryFilter]);

  // Keyboard navigation for dropdown
  const handleDropdownKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsYSiteDropdownOpen(false);
      return;
    }

    if (!isYSiteDropdownOpen) {
      if (e.key === 'ArrowDown' || e.key === 'Enter') {
        setIsYSiteDropdownOpen(true);
      }
      return;
    }

    if (filteredYSiteDrugs.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setYSiteHighlightedIndex(prev => (prev + 1) % filteredYSiteDrugs.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setYSiteHighlightedIndex(prev => (prev - 1 + filteredYSiteDrugs.length) % filteredYSiteDrugs.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const selected = filteredYSiteDrugs[ySiteHighlightedIndex];
      if (selected) {
        handleAddYSiteDrug(selected.id);
        setYSiteSearchQuery('');
        ySiteSearchInputRef.current?.focus();
      }
    }
  };

  // Add drug to Y-Site
  const handleAddYSiteDrug = (drugId: string) => {
    if (!selectedYSiteDrugIds.includes(drugId)) {
      setSelectedYSiteDrugIds([...selectedYSiteDrugIds, drugId]);
    }
  };

  // Remove drug from Y-Site
  const handleRemoveYSiteDrug = (drugId: string) => {
    setSelectedYSiteDrugIds(selectedYSiteDrugIds.filter(id => id !== drugId));
  };

  // Y-Site Filter state
  const [ySiteFilter, setYSiteFilter] = useState<'all' | 'incompatible' | 'conditional' | 'compatible'>('all');

  // Selected Matrix Pair for interactive detail popup
  const [selectedMatrixPair, setSelectedMatrixPair] = useState<{
    drugA: IvDrugProfile;
    drugB: IvDrugProfile;
    result: YSiteCompatibilityPair;
  } | null>(null);

  // Y-Site Counts
  const ySiteCounts = useMemo(() => {
    return {
      all: ySitePairwiseResults.length,
      incompatible: ySitePairwiseResults.filter(p => p.result.status === 'incompatible').length,
      conditional: ySitePairwiseResults.filter(p => p.result.status === 'conditional').length,
      compatible: ySitePairwiseResults.filter(p => p.result.status === 'compatible').length,
    };
  }, [ySitePairwiseResults]);

  // Filtered Y-Site results
  const filteredYSitePairwiseResults = useMemo(() => {
    if (ySiteFilter === 'all') return ySitePairwiseResults;
    return ySitePairwiseResults.filter(p => p.result.status === ySiteFilter);
  }, [ySitePairwiseResults, ySiteFilter]);

  // Syringe-Driver Admixture State (Single-Syringe Mixing / PCA / Palliative CSCI)
  const [admixtureDrugAId, setAdmixtureDrugAId] = useState<string>('iv-morphine');
  const [admixtureDrugBId, setAdmixtureDrugBId] = useState<string>('iv-midazolam');
  const [admixtureSearchQuery, setAdmixtureSearchQuery] = useState<string>('');
  const [admixtureStatusFilter, setAdmixtureStatusFilter] = useState<string>('all');

  // Computed Admixture Evaluation
  const currentAdmixtureResult = useMemo(() => {
    if (!admixtureDrugAId || !admixtureDrugBId || admixtureDrugAId === admixtureDrugBId) return null;
    return checkSyringeAdmixture(admixtureDrugAId, admixtureDrugBId);
  }, [admixtureDrugAId, admixtureDrugBId]);

  // Filtered Admixture Table
  const filteredAdmixtureDatabase = useMemo(() => {
    return SYRINGE_ADMIXTURE_DATABASE.filter(pair => {
      const drugA = IV_DRUGS_DATABASE.find(d => d.id === pair.drugAId);
      const drugB = IV_DRUGS_DATABASE.find(d => d.id === pair.drugBId);
      const searchStr = `${drugA?.name || ''} ${drugB?.name || ''} ${pair.clinicalContext} ${pair.clinicalNotes} ${pair.diluent}`.toLowerCase();
      const matchesQuery = searchStr.includes(admixtureSearchQuery.toLowerCase());
      const matchesStatus = admixtureStatusFilter === 'all' || pair.status === admixtureStatusFilter;
      return matchesQuery && matchesStatus;
    });
  }, [admixtureSearchQuery, admixtureStatusFilter]);

  // Filtered Directory drugs (Alistair Gray 2021)
  const filteredDirectoryDrugs = useMemo(() => {
    return IV_DRUGS_DATABASE.filter(drug => {
      const matchQuery = 
        drug.name.toLowerCase().includes(directorySearchQuery.toLowerCase()) ||
        drug.genericName.toLowerCase().includes(directorySearchQuery.toLowerCase()) ||
        drug.brandNames.some(b => b.toLowerCase().includes(directorySearchQuery.toLowerCase()));

      const matchCat = selectedCategoryFilter === 'Semua' || drug.category === selectedCategoryFilter;
      const matchNpsa = selectedNpsaFilter === 'Semua' || drug.grayIdg?.npsaRiskRating === selectedNpsaFilter;
      return matchQuery && matchCat && matchNpsa;
    });
  }, [directorySearchQuery, selectedCategoryFilter, selectedNpsaFilter]);

  // Calculated Syringe Pump values
  const syringePumpCalculations = useMemo(() => {
    return calculateSyringePumpRate(
      calcTargetDose,
      calcPatientWeightKg,
      calcDrugMgInSyringe,
      calcSyringeVolumeMl
    );
  }, [calcTargetDose, calcPatientWeightKg, calcDrugMgInSyringe, calcSyringeVolumeMl]);

  // Calculated Gravity Drip values
  const gravityDripCalculations = useMemo(() => {
    return calculateGravityDripRate(dripVolumeMl, dripDurationHours, dripFactor);
  }, [dripVolumeMl, dripDurationHours, dripFactor]);

  // Helper badge for status
  const renderStatusBadge = (status: CompatibilityStatus) => {
    switch (status) {
      case 'compatible':
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black bg-emerald-600 text-white shadow-xs">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Kompatibel (Aman)
          </span>
        );
      case 'incompatible':
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black bg-rose-600 text-white shadow-xs">
            <AlertTriangle className="w-3.5 h-3.5" />
            Inkompatibel (Bahaya)
          </span>
        );
      case 'conditional':
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black bg-amber-600 text-white shadow-xs">
            <Info className="w-3.5 h-3.5" />
            Bersyarat / Waspada
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
            <HelpCircle className="w-3.5 h-3.5" />
            Belum Ada Data Uji
          </span>
        );
    }
  };

  return (
    <div className="space-y-6 pb-12">
      {/* HERO BANNER - COBALT ICE & DARK SAPPHIRE */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#040914] via-[#09172f] to-[#0d2347] p-6 sm:p-8 text-white shadow-2xl border border-blue-500/25">
        <FloatingPillsBackground density="low" accentColor="#60a5fa" />
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-6 bottom-4 opacity-10 pointer-events-none">
          <Syringe className="w-48 h-48 text-blue-400" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-bold font-outfit">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Standar Trissel’s 2024 &amp; ASHP Injectable Drugs Handbook</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-blue-950/50 shrink-0">
                <Syringe className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-black font-outfit tracking-tight">
                  Uji Kompatibilitas Injeksi IV &amp; Y-Site
                </h1>
                <p className="text-xs sm:text-sm text-blue-100/80 font-medium">
                  Evaluasi kompatibilitas percabangan jalur infus bersama (Y-Site), skrining presipitasi asam-basa, kompatibilitas pelarut infus, dan titrasi syringe pump.
                </p>
              </div>
            </div>

            {/* Feature Highlights Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <div className="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-xs flex items-center gap-1.5 font-bold text-blue-200">
                <Syringe className="w-3.5 h-3.5 text-blue-400" />
                <span>Skrining Y-Site Percabangan Infus</span>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-xs flex items-center gap-1.5 font-bold text-teal-200">
                <FlaskConical className="w-3.5 h-3.5 text-teal-300" />
                <span>Pencampuran 1 Spuit (PCA/Paliatif)</span>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-xs flex items-center gap-1.5 font-bold text-sky-200">
                <Zap className="w-3.5 h-3.5 text-sky-300" />
                <span>Titrasi Syringe Pump &amp; Drip</span>
              </div>
            </div>
          </div>

          {/* Right Hero Badge: Database Status */}
          <div className="flex flex-col gap-3 lg:w-72 shrink-0 relative z-10">
            <div className="bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-blue-500/40 space-y-2.5 shadow-xl">
              <div className="flex items-center justify-between text-xs font-bold text-blue-300 border-b border-blue-800/60 pb-2">
                <span className="flex items-center gap-1.5 font-black font-outfit">
                  <Activity className="w-3.5 h-3.5 text-blue-400" />
                  <span>Status Database</span>
                </span>
                <span className="bg-blue-950 text-blue-300 px-2 py-0.5 rounded-full text-[10px] font-black border border-blue-600/40">
                  {IV_DRUGS_DATABASE.length + SYRINGE_ADMIXTURE_DATABASE.length} Data Terverifikasi
                </span>
              </div>
              <div className="text-xs text-blue-100/80 space-y-1.5 font-medium">
                <div className="flex justify-between items-center">
                  <span>Sediaan Injeksi IV:</span>
                  <span className="font-mono font-bold text-white bg-white/10 px-2 py-0.5 rounded-md text-[11px]">{IV_DRUGS_DATABASE.length} Obat</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Pencampuran Spuit:</span>
                  <span className="font-mono font-bold text-blue-300 bg-blue-950/60 px-2 py-0.5 rounded-md text-[11px]">{SYRINGE_ADMIXTURE_DATABASE.length} Admixture</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Evaluasi Fisikokimia:</span>
                  <span className="font-mono font-bold text-sky-300 bg-sky-950/60 px-2 py-0.5 rounded-md text-[11px]">pH &amp; Presipitasi</span>
                </div>
                <div className="flex justify-between items-center pt-1 border-t border-blue-900/40 text-[10px] text-blue-300/80">
                  <span>Standar Acuan:</span>
                  <span className="font-bold text-white">Trissel's 2024 &amp; Gray IDG</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NAVIGATION SUBTABS - OCEAN SKY & BLUE */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-sky-100 dark:border-sky-950/80">
        <button
          onClick={() => setActiveSubTab('ysite')}
          className={`px-4 py-2.5 rounded-2xl text-xs font-black font-outfit transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer shrink-0 ${
            activeSubTab === 'ysite'
              ? 'bg-gradient-to-r from-sky-600 to-blue-600 text-white shadow-md shadow-sky-950/40 border border-sky-400/30'
              : 'bg-white dark:bg-[#071726] text-slate-600 dark:text-slate-300 hover:bg-sky-50 dark:hover:bg-sky-950/40 border border-slate-200 dark:border-sky-900/30 shadow-2xs'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Uji Kompatibilitas Percabangan Y-Site</span>
          <span className={`px-2 py-0.5 text-[10px] font-bold font-outfit rounded-full ${activeSubTab === 'ysite' ? 'bg-white/20 text-white' : 'bg-sky-100 dark:bg-sky-950/60 text-sky-800 dark:text-sky-300 border border-sky-200 dark:border-sky-800'}`}>
            Multi-Drug
          </span>
        </button>

        <button
          onClick={() => setActiveSubTab('admixture')}
          className={`px-4 py-2.5 rounded-2xl text-xs font-black font-outfit transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer shrink-0 ${
            activeSubTab === 'admixture'
              ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-md shadow-teal-950/40 border border-teal-400/30'
              : 'bg-white dark:bg-[#071726] text-slate-600 dark:text-slate-300 hover:bg-teal-50 dark:hover:bg-teal-950/40 border border-slate-200 dark:border-teal-900/30 shadow-2xs'
          }`}
        >
          <Syringe className="w-4 h-4" />
          <span>Pencampuran 1 Spuit (Syringe Admixture)</span>
          <span className={`px-2 py-0.5 text-[10px] font-bold font-outfit rounded-full ${activeSubTab === 'admixture' ? 'bg-white/20 text-white' : 'bg-teal-100 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800'}`}>
            PCA &amp; Paliatif
          </span>
        </button>

        <button
          onClick={() => setActiveSubTab('directory')}
          className={`px-4 py-2.5 rounded-2xl text-xs font-black font-outfit transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer shrink-0 ${
            activeSubTab === 'directory'
              ? 'bg-gradient-to-r from-sky-600 to-blue-600 text-white shadow-md shadow-sky-950/40 border border-sky-400/30'
              : 'bg-white dark:bg-[#071726] text-slate-600 dark:text-slate-300 hover:bg-sky-50 dark:hover:bg-sky-950/40 border border-slate-200 dark:border-sky-900/30 shadow-2xs'
          }`}
        >
          <FlaskConical className="w-4 h-4" />
          <span>Direktori &amp; Monografi Gray (2021)</span>
          <span className={`px-2 py-0.5 text-[10px] font-bold font-outfit rounded-full ${activeSubTab === 'directory' ? 'bg-white/20 text-white' : 'bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-800'}`}>
            NPSA &amp; Ekstravasasi
          </span>
        </button>

        <button
          onClick={() => setActiveSubTab('calculator')}
          className={`px-4 py-2.5 rounded-2xl text-xs font-black font-outfit transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer shrink-0 ${
            activeSubTab === 'calculator'
              ? 'bg-gradient-to-r from-sky-600 to-blue-600 text-white shadow-md shadow-sky-950/40 border border-sky-400/30'
              : 'bg-white dark:bg-[#071726] text-slate-600 dark:text-slate-300 hover:bg-sky-50 dark:hover:bg-sky-950/40 border border-slate-200 dark:border-sky-900/30 shadow-2xs'
          }`}
        >
          <Calculator className="w-4 h-4" />
          <span>Kalkulator Syringe Pump &amp; Drip</span>
        </button>

        <button
          onClick={() => setActiveSubTab('displacement')}
          className={`px-4 py-2.5 rounded-2xl text-xs font-black font-outfit transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer shrink-0 ${
            activeSubTab === 'displacement'
              ? 'bg-gradient-to-r from-indigo-600 to-sky-600 text-white shadow-md shadow-indigo-950/40 border border-indigo-400/30'
              : 'bg-white dark:bg-[#071726] text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 border border-slate-200 dark:border-indigo-900/30 shadow-2xs'
          }`}
        >
          <Baby className="w-4 h-4" />
          <span>Kalkulator Displacement Serbuk</span>
          <span className={`px-2 py-0.5 text-[10px] font-bold font-outfit rounded-full ${activeSubTab === 'displacement' ? 'bg-white/20 text-white' : 'bg-indigo-100 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800'}`}>
            Pediatrik
          </span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: UJI KOMPATIBILITAS Y-SITE */}
      {/* ========================================================================= */}
      {activeSubTab === 'ysite' && (
        <div className="space-y-6">
          {/* Drug Selection Card - Sky & Navy Thematic Suite */}
          <div className="bg-white dark:bg-[#071726] border border-sky-200/80 dark:border-sky-500/25 rounded-3xl p-5 sm:p-6 shadow-sm space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-sky-100 dark:border-sky-950/80">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-sky-500/15 text-sky-600 dark:text-sky-400 border border-sky-400/30 flex items-center justify-center font-bold shadow-2xs">
                  <Syringe className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold font-outfit text-slate-900 dark:text-white tracking-tight">Pilih Obat Injeksi yang Dialirkan Sejalur (Y-Site)</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Pilih 2 atau lebih obat untuk menguji kompatibilitas fisikokimia larutan</p>
                </div>
              </div>

              {/* Status Header Badge & Counter / Reset */}
              <div className="flex items-center gap-2 flex-wrap">
                {overallYSiteStatus === 'insufficient' && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold font-outfit bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    <Info className="w-3.5 h-3.5 text-sky-500" />
                    PILIH MINIMAL 2 OBAT
                  </span>
                )}
                {overallYSiteStatus === 'incompatible' && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-black font-outfit bg-rose-600 text-white shadow-md shadow-rose-900/20">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    TERDETEKSI INKOMPATIBILITAS BERBAHAYA!
                  </span>
                )}
                {overallYSiteStatus === 'compatible' && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-black font-outfit bg-emerald-600 text-white shadow-md shadow-emerald-900/20">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    SEMUA OBAT KOMPATIBEL DI JALUR Y-SITE
                  </span>
                )}
                {overallYSiteStatus === 'conditional' && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-black font-outfit bg-amber-500 text-slate-950 shadow-md shadow-amber-950/20">
                    <Info className="w-3.5 h-3.5" />
                    PERHATIAN KHUSUS / PEMBILASAN
                  </span>
                )}

                <span className="bg-sky-50 dark:bg-sky-950/60 text-sky-800 dark:text-sky-300 text-xs font-black font-outfit px-3 py-1 rounded-xl border border-sky-200 dark:border-sky-800 shadow-2xs">
                  {selectedYSiteDrugIds.length} Obat Dipilih
                </span>

                {selectedYSiteDrugIds.length > 0 ? (
                  <button
                    type="button"
                    onClick={() => setSelectedYSiteDrugIds([])}
                    className="text-xs font-bold text-slate-500 hover:text-rose-600 dark:hover:text-rose-400 px-2.5 py-1 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-rose-300 transition-colors cursor-pointer"
                    title="Hapus seluruh obat untuk memulai telaah baru"
                  >
                    Kosongkan
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setSelectedYSiteDrugIds(['iv-norepinephrine', 'iv-dobutamine', 'iv-furosemide'])}
                    className="text-xs font-bold text-sky-600 dark:text-sky-400 hover:underline px-2 py-1 cursor-pointer"
                  >
                    + Muat Contoh
                  </button>
                )}
              </div>
            </div>

            {/* Selected Drugs Chips (Dedicated Panel) */}
            <div className="flex flex-wrap items-center gap-2 min-h-[48px] p-3.5 bg-sky-50/40 dark:bg-sky-950/20 rounded-2xl border border-sky-200/80 dark:border-sky-800/40">
              {selectedYSiteDrugIds.length > 0 ? (
                selectedYSiteDrugIds.map(drugId => {
                  const drug = IV_DRUGS_DATABASE.find(d => d.id === drugId);
                  if (!drug) return null;
                  return (
                    <span
                      key={drug.id}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold font-outfit bg-white dark:bg-[#0c243c] border border-sky-200 dark:border-sky-700 text-slate-900 dark:text-white shadow-2xs group hover:border-sky-400 transition-all"
                    >
                      <span className="w-2 h-2 rounded-full bg-sky-500 ring-2 ring-sky-400/40" />
                      <span>{drug.name}</span>
                      <span className="text-[11px] text-sky-700 dark:text-sky-300 font-mono font-bold bg-sky-500/10 px-1.5 py-0.5 rounded-md">
                        (pH {drug.phRange})
                      </span>
                      <button
                        type="button"
                        onClick={() => handleRemoveYSiteDrug(drug.id)}
                        className="text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 transition cursor-pointer ml-0.5 p-0.5 rounded-md hover:bg-rose-50 dark:hover:bg-rose-950/40"
                        title={`Hapus ${drug.name}`}
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </span>
                  );
                })
              ) : (
                <div className="flex items-center justify-between w-full py-1 text-xs text-slate-500 dark:text-slate-400 font-medium font-outfit">
                  <span className="italic">
                    Belum ada obat injeksi dipilih. Silakan cari obat di bawah atau gunakan preset 1-klik untuk memulai telaah.
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedYSiteDrugIds(['iv-norepinephrine', 'iv-dobutamine', 'iv-furosemide'])}
                    className="text-xs font-bold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 bg-white dark:bg-sky-950/80 px-2.5 py-1 rounded-lg border border-sky-200 dark:border-sky-800 shadow-2xs cursor-pointer ml-2 shrink-0 transition-colors"
                  >
                    + Muat Contoh Kasus
                  </button>
                </div>
              )}
            </div>

            {/* Dedicated Search Input & Autocomplete Suggestions (Mode Cek Interaksi Obat) */}
            <div className="relative space-y-2.5" ref={ySiteDropdownRef}>
              <div className="relative flex items-center">
                <Search className="w-4 h-4 text-sky-500 absolute left-3.5 pointer-events-none" />
                <input
                  ref={ySiteSearchInputRef}
                  type="text"
                  value={ySiteSearchQuery}
                  onFocus={() => setIsYSiteDropdownOpen(true)}
                  onChange={(e) => {
                    setYSiteSearchQuery(e.target.value);
                    setYSiteHighlightedIndex(0);
                    setIsYSiteDropdownOpen(true);
                  }}
                  onKeyDown={handleDropdownKeyDown}
                  placeholder="Ketik nama obat injeksi (misal: Norepinephrine, Dobutamine, Furosemide, Pantoprazole, Ceftriaxone)..."
                  className="w-full pl-10 pr-28 py-2.5 text-xs font-bold font-outfit text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-300 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 shadow-2xs transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                />
                {ySiteSearchQuery ? (
                  <button
                    type="button"
                    onClick={() => {
                      setYSiteSearchQuery('');
                      setYSiteHighlightedIndex(0);
                      ySiteSearchInputRef.current?.focus();
                    }}
                    className="absolute right-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 cursor-pointer transition-colors"
                    title="Hapus kata kunci"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <span className="absolute right-3 text-[10px] font-mono text-slate-400 dark:text-slate-500 pointer-events-none hidden sm:inline-block">
                    {availableYSiteDrugs.length} Obat Tersedia
                  </span>
                )}
              </div>

              {/* Category Filter Pills Bar */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-[11px] font-bold font-outfit">
                <span className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
                  <Filter className="w-3 h-3 text-sky-500" /> Filter:
                </span>
                {ySiteCategories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => {
                      setYSiteCategoryFilter(cat);
                      setYSiteHighlightedIndex(0);
                      setIsYSiteDropdownOpen(true);
                      ySiteSearchInputRef.current?.focus();
                    }}
                    className={`px-2.5 py-1 rounded-xl whitespace-nowrap transition-all cursor-pointer text-xs ${
                      ySiteCategoryFilter === cat
                        ? 'bg-sky-500 text-white shadow-2xs font-black'
                        : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-sky-100 dark:hover:bg-sky-950/60 border border-slate-200 dark:border-slate-800'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Autocomplete Suggestions Dropdown List */}
              {isYSiteDropdownOpen && (
                <div className="absolute left-0 right-0 top-full mt-1.5 z-50 bg-white dark:bg-[#071828] border-2 border-sky-400/60 dark:border-sky-600/60 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150 max-h-72 flex flex-col">
                  {/* Results Header */}
                  <div className="px-3.5 py-2 border-b border-sky-100 dark:border-sky-950 bg-sky-50/70 dark:bg-sky-950/40 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    <span>
                      Ditemukan <strong className="text-sky-600 dark:text-sky-400 font-bold">{filteredYSiteDrugs.length}</strong> obat injeksi
                      {ySiteCategoryFilter !== 'Semua' && ` (Kategori: ${ySiteCategoryFilter})`}
                    </span>
                    <span className="text-[10px] text-slate-400 flex items-center gap-1">
                      Gunakan <kbd className="px-1 py-0.2 rounded bg-slate-200 dark:bg-slate-800 text-[9px] font-mono">↑</kbd><kbd className="px-1 py-0.2 rounded bg-slate-200 dark:bg-slate-800 text-[9px] font-mono">↓</kbd> &amp; <kbd className="px-1 py-0.2 rounded bg-slate-200 dark:bg-slate-800 text-[9px] font-mono">Enter</kbd>
                    </span>
                  </div>

                  {/* Scrollable Results */}
                  <div className="overflow-y-auto p-1.5 space-y-1 divide-y divide-slate-100 dark:divide-slate-800/40">
                    {filteredYSiteDrugs.length > 0 ? (
                      filteredYSiteDrugs.map((drug, idx) => {
                        const isHighlighted = idx === ySiteHighlightedIndex;
                        return (
                          <button
                            key={drug.id}
                            type="button"
                            onClick={() => {
                              handleAddYSiteDrug(drug.id);
                              setYSiteSearchQuery('');
                              ySiteSearchInputRef.current?.focus();
                            }}
                            onMouseEnter={() => setYSiteHighlightedIndex(idx)}
                            className={`w-full flex items-center justify-between gap-2.5 p-2.5 rounded-xl text-left transition-all cursor-pointer ${
                              isHighlighted
                                ? 'bg-sky-500/15 dark:bg-sky-500/25 text-sky-950 dark:text-sky-100 border border-sky-400/50 ring-1 ring-sky-400/30'
                                : 'hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-800 dark:text-slate-200 border border-transparent'
                            }`}
                          >
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="text-xs font-black font-outfit text-slate-900 dark:text-white">
                                  {drug.name}
                                </span>
                                <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-sky-500/10 text-sky-600 dark:text-sky-300 font-mono font-bold border border-sky-400/20">
                                  pH {drug.phRange}
                                </span>
                                <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
                                  {drug.category}
                                </span>
                              </div>
                              {drug.brandNames && drug.brandNames.length > 0 && (
                                <div className="text-[11px] text-slate-400 mt-0.5 truncate">
                                  Merek: <span className="italic">{drug.brandNames.join(', ')}</span>
                                </div>
                              )}
                            </div>

                            <span className={`shrink-0 px-2.5 py-1 rounded-lg text-xs font-bold font-outfit flex items-center gap-1 transition-colors ${
                              isHighlighted
                                ? 'bg-sky-500 text-white shadow-xs'
                                : 'bg-sky-500/10 text-sky-600 dark:text-sky-400'
                            }`}>
                              <Plus className="w-3.5 h-3.5" />
                              <span>+ Tambah</span>
                            </span>
                          </button>
                        );
                      })
                    ) : (
                      <div className="py-8 text-center space-y-2">
                        <FlaskConical className="w-8 h-8 mx-auto text-slate-300 dark:text-slate-600" />
                        <p className="text-xs font-bold text-slate-700 dark:text-slate-300 font-outfit">
                          Obat injeksi tidak ditemukan
                        </p>
                        <p className="text-[11px] text-slate-400 dark:text-slate-500 max-w-[260px] mx-auto">
                          Coba kata kunci lain atau ubah filter kategori di atas.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Quick Clinical Presets (Ward & Clinical Scenarios) */}
            <div className="pt-3 border-t border-sky-100 dark:border-sky-950/80 space-y-2">
              <div className="flex flex-wrap items-center gap-1.5 text-xs">
                <span className="text-slate-700 dark:text-slate-300 font-black font-outfit flex items-center gap-1 text-xs shrink-0 mr-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Preset Ruangan Rawat (1-Click):</span>
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedYSiteDrugIds(['iv-norepinephrine', 'iv-vasopressin', 'iv-meropenem', 'iv-vancomycin', 'iv-fentanyl'])}
                  className="px-2.5 py-1 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-900 dark:text-amber-200 border border-amber-300/80 dark:border-amber-700/60 font-bold font-outfit cursor-pointer transition-all flex items-center gap-1.5 active:scale-95 shadow-2xs"
                  title="Paket Syok Sepsis: Norepinephrine + Vasopressin + Meropenem + Vancomycin + Fentanyl"
                >
                  <span>🩺</span>
                  <span>ICU Syok Sepsis (5 Obat)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedYSiteDrugIds(['iv-propofol', 'iv-rocuronium', 'iv-fentanyl', 'iv-ondansetron', 'iv-dexamethasone'])}
                  className="px-2.5 py-1 rounded-xl bg-teal-500/10 hover:bg-teal-500/20 text-teal-900 dark:text-teal-200 border border-teal-300/80 dark:border-teal-700/60 font-bold font-outfit cursor-pointer transition-all flex items-center gap-1.5 active:scale-95 shadow-2xs"
                  title="Paket Anestesi: Propofol + Rocuronium + Fentanyl + Ondansetron + Dexamethasone"
                >
                  <span>🔪</span>
                  <span>Kamar Bedah / Anestesi</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedYSiteDrugIds(['iv-ampicillin-sulbactam', 'iv-gentamicin', 'iv-calcium-gluconate', 'iv-aminophylline'])}
                  className="px-2.5 py-1 rounded-xl bg-pink-500/10 hover:bg-pink-500/20 text-pink-900 dark:text-pink-200 border border-pink-300/80 dark:border-pink-700/60 font-bold font-outfit cursor-pointer transition-all flex items-center gap-1.5 active:scale-95 shadow-2xs"
                  title="Paket Neonatus: Ampicillin/Sulbactam + Gentamicin + Calcium Gluconate + Aminophylline"
                >
                  <span>👶</span>
                  <span>Neonatus / NICU</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedYSiteDrugIds(['iv-nicardipine', 'iv-furosemide', 'iv-amiodarone', 'iv-heparin', 'iv-nitroglycerin'])}
                  className="px-2.5 py-1 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-900 dark:text-rose-200 border border-rose-300/80 dark:border-rose-700/60 font-bold font-outfit cursor-pointer transition-all flex items-center gap-1.5 active:scale-95 shadow-2xs"
                  title="Paket Kardiologi: Nicardipine + Furosemide + Amiodarone + Heparin + NTG"
                >
                  <span>🫀</span>
                  <span>Kardiologi Akut</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedYSiteDrugIds(['iv-morphine', 'iv-midazolam', 'iv-clonidine', 'iv-metoclopramide'])}
                  className="px-2.5 py-1 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-900 dark:text-indigo-200 border border-indigo-300/80 dark:border-indigo-700/60 font-bold font-outfit cursor-pointer transition-all flex items-center gap-1.5 active:scale-95 shadow-2xs"
                  title="Paket Paliatif: Morphine + Midazolam + Clonidine + Metoclopramide"
                >
                  <span>🕊️</span>
                  <span>Paliatif Terminal</span>
                </button>
              </div>

              {/* Specific Clinical Cases */}
              <div className="flex flex-wrap items-center gap-1.5 text-[11px] pt-1 border-t border-slate-100 dark:border-slate-800/60">
                <span className="text-slate-400 font-bold font-outfit shrink-0 mr-1">
                  Kasus Spesifik:
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedYSiteDrugIds(['iv-norepinephrine', 'iv-dobutamine', 'iv-furosemide'])}
                  className="px-2 py-0.5 rounded-lg bg-sky-50 dark:bg-sky-950/40 text-sky-800 dark:text-sky-300 hover:bg-sky-100 border border-sky-200 dark:border-sky-800/60 font-medium cursor-pointer transition-colors"
                >
                  Syok Kardiogenik
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedYSiteDrugIds(['iv-mannitol', 'iv-furosemide', 'iv-phenytoin'])}
                  className="px-2 py-0.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300 hover:bg-blue-100 border border-blue-200 dark:border-blue-800/60 font-medium cursor-pointer transition-colors"
                >
                  Edema Serebral
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedYSiteDrugIds(['iv-thiopental', 'iv-atracurium', 'iv-midazolam'])}
                  className="px-2 py-0.5 rounded-lg bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 hover:bg-rose-100 border border-rose-200 dark:border-rose-800/60 font-medium cursor-pointer transition-colors"
                >
                  ⚠️ Bahaya Thiopental
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedYSiteDrugIds(['iv-calcium-gluconate', 'iv-potassium-phosphate', 'iv-sodium-bicarbonate'])}
                  className="px-2 py-0.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 hover:bg-amber-100 border border-amber-200 dark:border-amber-800/60 font-medium cursor-pointer transition-colors"
                >
                  ⚡ Presipitasi Kapur Ca-P
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedYSiteDrugIds(['iv-oxytocin', 'iv-tranexamic-acid', 'iv-magnesium-sulfate'])}
                  className="px-2 py-0.5 rounded-lg bg-pink-50 dark:bg-pink-950/40 text-pink-800 dark:text-pink-300 hover:bg-pink-100 border border-pink-200 dark:border-pink-800/60 font-medium cursor-pointer transition-colors"
                >
                  Kebidanan PPH
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedYSiteDrugIds(['iv-piperacillin-tazobactam', 'iv-gentamicin', 'iv-fentanyl'])}
                  className="px-2 py-0.5 rounded-lg bg-red-50 dark:bg-red-950/40 text-red-800 dark:text-red-300 hover:bg-red-100 border border-red-200 dark:border-red-800/60 font-medium cursor-pointer transition-colors"
                >
                  Piptazobactam + Gentamisin
                </button>
              </div>
            </div>
          </div>

          {/* Matrix Grid Overview (if >=2 drugs) */}
          {selectedYSiteDrugIds.length >= 2 && (
            <div className="bg-white dark:bg-[#071726] border border-sky-200/80 dark:border-sky-500/25 rounded-3xl p-5 sm:p-6 shadow-sm overflow-x-auto">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <h4 className="text-xs font-black font-outfit text-slate-800 dark:text-slate-200 uppercase tracking-wider flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-sky-500" />
                  <span>Matriks Kompatibilitas Y-Site Antar Pasangan (Heatmap Grid)</span>
                </h4>
                <span className="text-[11px] text-sky-600 dark:text-sky-400 font-bold bg-sky-50 dark:bg-sky-950/60 px-2.5 py-0.5 rounded-full border border-sky-200 dark:border-sky-800">
                  💡 Klik sembarang sel C / I / V / ? untuk melihat mekanisme lengkap
                </span>
              </div>

              <table className="w-full text-center text-xs border-collapse">
                <thead>
                  <tr className="border-b border-sky-100 dark:border-sky-950/80">
                    <th className="p-2 text-left text-slate-600 dark:text-slate-400 font-bold font-outfit">Obat</th>
                    {selectedYSiteDrugIds.map(id => {
                      const d = IV_DRUGS_DATABASE.find(item => item.id === id);
                      return (
                        <th key={id} className="p-2 text-slate-800 dark:text-slate-200 font-bold font-outfit max-w-[110px] truncate" title={d?.name}>
                          {d?.name.split(' ')[0]}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody className="divide-y divide-sky-100/60 dark:divide-sky-950/60">
                  {selectedYSiteDrugIds.map((rowId) => {
                    const rowDrug = IV_DRUGS_DATABASE.find(d => d.id === rowId);
                    return (
                      <tr key={rowId}>
                        <td className="p-2 text-left font-black font-outfit text-slate-900 dark:text-white whitespace-nowrap">
                          {rowDrug?.name}
                        </td>
                        {selectedYSiteDrugIds.map((colId) => {
                          if (rowId === colId) {
                            return (
                              <td key={colId} className="p-2 bg-slate-50 dark:bg-slate-950 text-slate-400 font-bold">
                                —
                              </td>
                            );
                          }
                          const check = checkYSiteCompatibility(rowId, colId);
                          const colDrug = IV_DRUGS_DATABASE.find(d => d.id === colId);
                          return (
                            <td key={colId} className="p-2">
                              <button
                                type="button"
                                onClick={() => {
                                  if (rowDrug && colDrug) {
                                    setSelectedMatrixPair({
                                      drugA: rowDrug,
                                      drugB: colDrug,
                                      result: check
                                    });
                                  }
                                }}
                                className="group relative cursor-pointer hover:scale-115 active:scale-95 transition-all"
                                title={`Klik untuk rincian klinis: ${rowDrug?.name} + ${colDrug?.name}`}
                              >
                                {check.status === 'compatible' && (
                                  <span className="inline-block w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-300 leading-7 font-black font-outfit border border-emerald-300 dark:border-emerald-500/30 shadow-2xs group-hover:ring-2 group-hover:ring-emerald-400">
                                    C
                                  </span>
                                )}
                                {check.status === 'incompatible' && (
                                  <span className="inline-block w-7 h-7 rounded-lg bg-rose-100 text-rose-800 dark:bg-rose-500/20 dark:text-rose-300 leading-7 font-black font-outfit border border-rose-300 dark:border-rose-500/30 shadow-2xs animate-pulse group-hover:ring-2 group-hover:ring-rose-400">
                                    I
                                  </span>
                                )}
                                {check.status === 'conditional' && (
                                  <span className="inline-block w-7 h-7 rounded-lg bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-300 leading-7 font-black font-outfit border border-amber-300 dark:border-amber-500/30 shadow-2xs group-hover:ring-2 group-hover:ring-amber-400">
                                    V
                                  </span>
                                )}
                                {check.status === 'no_data' && (
                                  <span className="inline-block w-7 h-7 rounded-lg bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 leading-7 font-bold font-outfit border border-slate-200 dark:border-slate-700 shadow-2xs group-hover:ring-2 group-hover:ring-slate-400">
                                    ?
                                  </span>
                                )}
                              </button>
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 dark:text-slate-400 mt-4 pt-3 border-t border-sky-100 dark:border-sky-950/80 font-medium font-outfit">
                <span className="flex items-center gap-1.5"><span className="w-4 h-4 rounded bg-emerald-100 text-emerald-800 font-black flex items-center justify-center text-[10px] border border-emerald-300">C</span> Kompatibel (Aman Co-Infus)</span>
                <span className="flex items-center gap-1.5"><span className="w-4 h-4 rounded bg-rose-100 text-rose-800 font-black flex items-center justify-center text-[10px] border border-rose-300">I</span> Inkompatibel (Bahaya / Presipitasi)</span>
                <span className="flex items-center gap-1.5"><span className="w-4 h-4 rounded bg-amber-100 text-amber-800 font-black flex items-center justify-center text-[10px] border border-amber-300">V</span> Bersyarat (Waspada pH / Buffer)</span>
                <span className="flex items-center gap-1.5"><span className="w-4 h-4 rounded bg-slate-100 text-slate-700 font-black flex items-center justify-center text-[10px] border border-slate-200">?</span> Belum Ada Data Uji</span>
              </div>
            </div>
          )}

          {/* Interactive Modal for Clicked Matrix Cell */}
          {selectedMatrixPair && (
            <div 
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in"
              onClick={() => setSelectedMatrixPair(null)}
            >
              <div 
                className="bg-white dark:bg-[#071828] border-2 border-sky-400/80 dark:border-sky-500/60 rounded-3xl p-6 max-w-xl w-full shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-start justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-extrabold text-sky-600 dark:text-sky-400">
                      Detail Kompatibilitas Matriks Y-Site
                    </span>
                    <h3 className="text-base sm:text-lg font-black font-outfit text-slate-900 dark:text-white flex items-center gap-2 mt-0.5">
                      <span>{selectedMatrixPair.drugA.name}</span>
                      <ArrowLeftRight className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{selectedMatrixPair.drugB.name}</span>
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedMatrixPair(null)}
                    className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Status Banner */}
                <div className={`p-4 rounded-2xl border flex items-center gap-3 ${
                  selectedMatrixPair.result.status === 'compatible'
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
                    : selectedMatrixPair.result.status === 'incompatible'
                    ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200'
                    : selectedMatrixPair.result.status === 'conditional'
                    ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200'
                    : 'bg-slate-50 dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200'
                }`}>
                  {selectedMatrixPair.result.status === 'compatible' && <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0" />}
                  {selectedMatrixPair.result.status === 'incompatible' && <AlertTriangle className="w-6 h-6 text-rose-600 dark:text-rose-400 shrink-0 animate-bounce" />}
                  {selectedMatrixPair.result.status === 'conditional' && <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0" />}
                  {selectedMatrixPair.result.status === 'no_data' && <HelpCircle className="w-6 h-6 text-slate-500 shrink-0" />}
                  <div>
                    <span className="text-xs font-black uppercase tracking-wider block">
                      {selectedMatrixPair.result.status === 'compatible' && 'KOMPATIBEL (AMAN CO-INFUS VIA Y-SITE)'}
                      {selectedMatrixPair.result.status === 'incompatible' && 'INKOMPATIBEL (BAHAYA / KONTRAINDIKASI SEJALUR)'}
                      {selectedMatrixPair.result.status === 'conditional' && 'BERSYARAT (WASPADA pH / KONSENTRASI)'}
                      {selectedMatrixPair.result.status === 'no_data' && 'BELUM ADA DATA UJI LANGSUNG'}
                    </span>
                    <span className="text-xs font-medium opacity-90 block mt-0.5">
                      Bukti Ilmiah: <strong>{selectedMatrixPair.result.evidence}</strong>
                    </span>
                  </div>
                </div>

                {/* Mechanism & Effect */}
                {selectedMatrixPair.result.mechanism && (
                  <div className="p-3.5 bg-slate-50 dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-1">
                    <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                      Mekanisme Fisiko-Kimiawi:
                    </span>
                    <p className="text-xs font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
                      {selectedMatrixPair.result.mechanism}
                    </p>
                  </div>
                )}

                {selectedMatrixPair.result.clinicalEffect && (
                  <div className="p-3.5 bg-slate-50 dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-1">
                    <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                      Dampak Klinis Terhadap Pasien:
                    </span>
                    <p className="text-xs font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
                      {selectedMatrixPair.result.clinicalEffect}
                    </p>
                  </div>
                )}

                {/* Recommendation */}
                <div className="p-3.5 bg-sky-50/60 dark:bg-sky-950/40 rounded-2xl border border-sky-200 dark:border-sky-800 space-y-1">
                  <span className="text-[11px] font-bold text-sky-700 dark:text-sky-300 uppercase tracking-wider block">
                    Rekomendasi Tindakan Klinis:
                  </span>
                  <p className="text-xs font-bold text-slate-900 dark:text-white leading-relaxed">
                    {selectedMatrixPair.result.recommendation}
                  </p>
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedMatrixPair(null)}
                    className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs font-outfit shadow-md cursor-pointer transition-colors"
                  >
                    Tutup Rincian
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Detailed Pairwise Cards or Empty State */}
          {selectedYSiteDrugIds.length >= 2 ? (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <h4 className="text-sm sm:text-base font-extrabold font-outfit text-slate-900 dark:text-white flex items-center gap-2 tracking-tight">
                  <Activity className="w-4 h-4 text-sky-500" />
                  Rincian Klinis Kompatibilitas Antar Pasangan ({filteredYSitePairwiseResults.length} / {ySitePairwiseResults.length} Pasangan)
                </h4>

                {/* Status Filter Buttons */}
                <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-800 text-xs">
                  <button
                    onClick={() => setYSiteFilter('all')}
                    className={`px-3 py-1.5 rounded-lg font-bold font-outfit transition cursor-pointer ${
                      ySiteFilter === 'all'
                        ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    Semua ({ySiteCounts.all})
                  </button>
                  <button
                    onClick={() => setYSiteFilter('incompatible')}
                    className={`px-3 py-1.5 rounded-lg font-bold font-outfit transition cursor-pointer flex items-center gap-1.5 ${
                      ySiteFilter === 'incompatible'
                        ? 'bg-rose-600 text-white shadow-2xs'
                        : 'text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40'
                    }`}
                  >
                    <AlertTriangle className="w-3.5 h-3.5" />
                    Inkompatibel ({ySiteCounts.incompatible})
                  </button>
                  <button
                    onClick={() => setYSiteFilter('conditional')}
                    className={`px-3 py-1.5 rounded-lg font-bold font-outfit transition cursor-pointer flex items-center gap-1.5 ${
                      ySiteFilter === 'conditional'
                        ? 'bg-amber-600 text-white shadow-2xs'
                        : 'text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/40'
                    }`}
                  >
                    <Info className="w-3.5 h-3.5" />
                    Bersyarat ({ySiteCounts.conditional})
                  </button>
                  <button
                    onClick={() => setYSiteFilter('compatible')}
                    className={`px-3 py-1.5 rounded-lg font-bold font-outfit transition cursor-pointer flex items-center gap-1.5 ${
                      ySiteFilter === 'compatible'
                        ? 'bg-emerald-600 text-white shadow-2xs'
                        : 'text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Kompatibel ({ySiteCounts.compatible})
                  </button>
                </div>
              </div>

              {filteredYSitePairwiseResults.length === 0 ? (
                <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 text-center space-y-2">
                  <Info className="w-8 h-8 text-slate-400 mx-auto" />
                  <p className="text-sm font-bold text-slate-700 dark:text-slate-300 font-outfit">
                    Tidak ada pasangan dengan status ini pada kombinasi obat terpilih.
                  </p>
                  <button
                    onClick={() => setYSiteFilter('all')}
                    className="text-xs text-sky-600 dark:text-sky-400 underline font-bold"
                  >
                    Tampilkan Semua ({ySiteCounts.all})
                  </button>
                </div>
              ) : (
                filteredYSitePairwiseResults.map((pair, idx) => (
                  <div
                    key={idx}
                    className={`rounded-3xl p-5 sm:p-6 shadow-sm transition space-y-4 border ${
                      pair.result.status === 'incompatible'
                        ? 'bg-rose-50/90 dark:bg-rose-950/30 border-2 border-rose-400 dark:border-rose-700/80'
                        : pair.result.status === 'conditional'
                        ? 'bg-amber-50/90 dark:bg-amber-950/30 border-2 border-amber-400 dark:border-amber-700/80'
                        : 'bg-white dark:bg-[#071726] border-sky-200/80 dark:border-sky-500/25'
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200/80 dark:border-slate-800">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`text-base sm:text-lg font-black font-outfit ${
                          pair.result.status === 'incompatible' ? 'text-rose-950 dark:text-rose-100' :
                          pair.result.status === 'conditional' ? 'text-amber-950 dark:text-amber-100' :
                          'text-slate-900 dark:text-white'
                        }`}>
                          {pair.drugA.name}
                        </span>
                        <span className="text-sm font-black text-slate-400">+</span>
                        <span className={`text-base sm:text-lg font-black font-outfit ${
                          pair.result.status === 'incompatible' ? 'text-rose-950 dark:text-rose-100' :
                          pair.result.status === 'conditional' ? 'text-amber-950 dark:text-amber-100' :
                          'text-slate-900 dark:text-white'
                        }`}>
                          {pair.drugB.name}
                        </span>
                      </div>

                      <div className="flex items-center gap-2.5 flex-wrap">
                        {renderStatusBadge(pair.result.status)}
                        <DualEvidenceBadge nationalPreset="kemenkes-iv" internationalPreset="ashp-iv" size="sm" />
                        <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 font-mono">
                          Ref: {pair.result.evidence}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div className="bg-slate-50/80 dark:bg-slate-900/80 rounded-2xl p-4 border border-slate-200/80 dark:border-slate-800 shadow-2xs">
                        <span className="text-slate-700 dark:text-slate-300 font-bold font-outfit block mb-1">Parameter pH Larutan:</span>
                        <div className="flex flex-wrap items-center gap-3 mt-1.5 font-medium">
                          <span className="text-slate-800 dark:text-slate-200 font-mono">
                            {pair.drugA.name.split(' ')[0]}: <strong className="text-sky-700 dark:text-sky-300 font-black">pH {pair.drugA.phRange}</strong>
                          </span>
                          <span className="text-slate-800 dark:text-slate-200 font-mono">
                            {pair.drugB.name.split(' ')[0]}: <strong className="text-sky-700 dark:text-sky-300 font-black">pH {pair.drugB.phRange}</strong>
                          </span>
                        </div>
                      </div>

                      {pair.result.mechanism && (
                        <div className="bg-white dark:bg-slate-900 rounded-xl p-3.5 border border-slate-200 dark:border-slate-800 shadow-2xs">
                          <span className="text-slate-700 dark:text-slate-300 font-bold block mb-1">Mekanisme Reaksi:</span>
                          <p className="text-slate-800 dark:text-slate-200 leading-relaxed font-medium">{pair.result.mechanism}</p>
                        </div>
                      )}
                    </div>

                    {pair.result.clinicalEffect && (
                      <div className="p-3.5 bg-rose-100/90 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-700/80 rounded-xl text-xs">
                        <span className="font-black text-rose-950 dark:text-rose-200">Dampak Klinis: </span>
                        <span className="text-rose-950 dark:text-rose-100 font-bold">{pair.result.clinicalEffect}</span>
                      </div>
                    )}

                    <div className="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700/70 rounded-xl flex items-start gap-2.5 text-xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-black text-emerald-950 dark:text-emerald-200">Rekomendasi Farmasi: </span>
                        <span className="text-emerald-950 dark:text-emerald-100 font-bold">{pair.result.recommendation}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          ) : selectedYSiteDrugIds.length === 1 ? (
            <div className="bg-sky-50/70 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 rounded-3xl p-8 text-center space-y-2 font-outfit">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/60 text-sky-600 dark:text-sky-400 flex items-center justify-center mx-auto shadow-2xs">
                <Syringe className="w-6 h-6" />
              </div>
              <h4 className="text-sm sm:text-base font-black text-slate-900 dark:text-white">
                Obat Pertama Terpilih
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
                Silakan cari dan tambahkan minimal 1 obat injeksi lagi untuk menganalisis kompatibilitas fisiko-kimia percabangan Y-Site, presipitasi, dan perubahan pH.
              </p>
            </div>
          ) : (
            <div className="bg-white dark:bg-[#071726] rounded-3xl p-8 sm:p-12 border-2 border-dashed border-sky-200 dark:border-sky-800/80 text-center space-y-4 shadow-sm font-outfit">
              <div className="w-16 h-16 rounded-2xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center mx-auto border border-sky-200 dark:border-sky-800 shadow-sm">
                <Syringe className="w-8 h-8" />
              </div>
              <div className="max-w-md mx-auto space-y-1.5">
                <h4 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                  Mulai Telaah Kompatibilitas Percabangan Y-Site
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Pilih minimal 2 obat injeksi yang akan dialirkan bersamaan dalam satu jalur infus intravena, atau gunakan preset kasus ruangan rawat di atas untuk demonstrasi klinis.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setSelectedYSiteDrugIds(['iv-norepinephrine', 'iv-dobutamine', 'iv-furosemide'])}
                  className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold font-outfit shadow-md transition-all cursor-pointer flex items-center gap-1.5 active:scale-95"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Coba Kasus ICU Syok Sepsis (3 Obat)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedYSiteDrugIds(['iv-propofol', 'iv-fentanyl', 'iv-rocuronium'])}
                  className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 text-xs font-bold font-outfit border border-slate-200 dark:border-slate-700 transition-all cursor-pointer active:scale-95"
                >
                  <span>Kamar Bedah / Anestesi</span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB: PENCAMPURAN 1 SPUIT (SYRINGE-DRIVER ADMIXTURE & PCA) */}
      {/* Standar: Dickman Palliative Care 5th Ed, ASHP 2024, Trissel's 2024, PCF8 */}
      {/* ========================================================================= */}
      {activeSubTab === 'admixture' && (
        <div className="space-y-6">
          {/* Clinical Educational Alert: Y-Site vs Syringe Driver */}
          <div className="bg-gradient-to-r from-teal-50/90 via-emerald-50/50 to-teal-100/40 dark:from-teal-950/70 dark:via-slate-900/80 dark:to-emerald-950/70 border border-teal-200 dark:border-teal-500/30 rounded-3xl p-5 sm:p-6 backdrop-blur-sm space-y-3 shadow-sm dark:shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-teal-600/10 dark:bg-teal-500/20 text-teal-700 dark:text-teal-400 border border-teal-300/60 dark:border-teal-400/30 flex items-center justify-center font-bold shadow-2xs">
                <Syringe className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black font-outfit text-teal-950 dark:text-white tracking-tight flex items-center gap-2 flex-wrap">
                  <span>Pencampuran 1 Spuit (Syringe-Driver Admixture)</span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-teal-600/15 dark:bg-teal-500/20 text-teal-800 dark:text-teal-300 border border-teal-300/80 dark:border-teal-400/40">
                    PCA, Paliatif CSCI &amp; ICU
                  </span>
                </h3>
                <p className="text-xs text-teal-900/80 dark:text-teal-200/80 font-medium">
                  Pengujian stabilitas fisiko-kimiawi campuran obat pekat dalam satu spuit (pompa spuit / continuous infusion) selama 12–24 jam.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-xs">
              <div className="bg-white/90 dark:bg-slate-950/60 rounded-2xl p-3.5 border border-sky-200/90 dark:border-sky-500/20 space-y-1 shadow-2xs">
                <span className="font-bold text-sky-800 dark:text-sky-300 flex items-center gap-1.5 font-outfit">
                  <Layers className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                  Percabangan Y-Site (Kontak Singkat)
                </span>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  Obat hanya berkontak <strong className="text-slate-900 dark:text-white font-bold">1–2 menit</strong> di konektor Y sebelum masuk ke aliran darah vena dan terencerkan masif.
                </p>
              </div>
              <div className="bg-white/90 dark:bg-slate-950/60 rounded-2xl p-3.5 border border-teal-200/90 dark:border-teal-500/20 space-y-1 shadow-2xs">
                <span className="font-bold text-teal-800 dark:text-teal-300 flex items-center gap-1.5 font-outfit">
                  <Syringe className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                  Syringe Admixture (Kontak Lama 24 Jam)
                </span>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  Obat berada dalam konsentrasi tinggi bersama-sama selama <strong className="text-slate-900 dark:text-white font-bold">12 hingga 24 jam</strong>. Menuntut stabilitas kimia ketat tanpa presipitasi mikroskopik.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Tester Card */}
          <div className="bg-white dark:bg-[#071726] border border-teal-200/80 dark:border-teal-500/25 rounded-3xl p-5 sm:p-6 shadow-sm space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-teal-100 dark:border-teal-950/80">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-teal-500/15 text-teal-600 dark:text-teal-400 border border-teal-400/30 flex items-center justify-center font-bold">
                  <FlaskConical className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-extrabold font-outfit text-slate-900 dark:text-white tracking-tight">
                    Uji Pasangan Obat dalam 1 Spuit
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Pilih 2 sediaan injeksi untuk memeriksa kompatibilitas dan durasi stabilitas spuit
                  </p>
                </div>
              </div>

              {/* Status Pill in Header */}
              {currentAdmixtureResult && (
                <div>
                  {currentAdmixtureResult.status === 'compatible' && (
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-black font-outfit bg-emerald-600 text-white shadow-md shadow-emerald-900/20">
                      <CheckCircle2 className="w-4 h-4" />
                      KOMPATIBEL ({currentAdmixtureResult.stabilityHours} JAM)
                    </span>
                  )}
                  {currentAdmixtureResult.status === 'incompatible' && (
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-black font-outfit bg-rose-600 text-white shadow-md shadow-rose-900/20">
                      <AlertTriangle className="w-4 h-4" />
                      INKOMPATIBEL MUTLAK
                    </span>
                  )}
                  {currentAdmixtureResult.status === 'conditional' && (
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-black font-outfit bg-amber-500 text-slate-950 shadow-md shadow-amber-950/20">
                      <Info className="w-4 h-4" />
                      BERSYARAT ({currentAdmixtureResult.stabilityHours} JAM)
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Drug Selection Row */}
            <div className="grid grid-cols-1 md:grid-cols-11 gap-3 items-center">
              {/* Drug A */}
              <div className="md:col-span-5 space-y-1.5">
                <label className="text-xs font-extrabold font-outfit text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-teal-500" />
                  Obat Injeksi A
                </label>
                <select
                  value={admixtureDrugAId}
                  onChange={(e) => setAdmixtureDrugAId(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-900/90 text-slate-900 dark:text-white border border-teal-200 dark:border-teal-800/80 rounded-2xl px-4 py-3 text-xs sm:text-sm font-bold font-outfit focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer"
                >
                  {IV_DRUGS_DATABASE.map(drug => (
                    <option key={drug.id} value={drug.id}>
                      {drug.name} ({drug.category})
                    </option>
                  ))}
                </select>
              </div>

              {/* Swap Button */}
              <div className="md:col-span-1 flex justify-center pt-4 md:pt-6">
                <button
                  onClick={() => {
                    const temp = admixtureDrugAId;
                    setAdmixtureDrugAId(admixtureDrugBId);
                    setAdmixtureDrugBId(temp);
                  }}
                  className="w-10 h-10 rounded-2xl bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-600 dark:text-teal-300 flex items-center justify-center hover:bg-teal-100 dark:hover:bg-teal-900/60 transition cursor-pointer shadow-2xs"
                  title="Tukar Posisi Obat"
                >
                  <ArrowLeftRight className="w-4 h-4" />
                </button>
              </div>

              {/* Drug B */}
              <div className="md:col-span-5 space-y-1.5">
                <label className="text-xs font-extrabold font-outfit text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Obat Injeksi B
                </label>
                <select
                  value={admixtureDrugBId}
                  onChange={(e) => setAdmixtureDrugBId(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-900/90 text-slate-900 dark:text-white border border-teal-200 dark:border-teal-800/80 rounded-2xl px-4 py-3 text-xs sm:text-sm font-bold font-outfit focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer"
                >
                  {IV_DRUGS_DATABASE.map(drug => (
                    <option key={drug.id} value={drug.id}>
                      {drug.name} ({drug.category})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Quick Clinical Admixture Presets */}
            <div className="pt-3 border-t border-teal-100 dark:border-teal-950/80 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-slate-500 dark:text-slate-400 font-extrabold font-outfit flex items-center gap-1.5 text-xs">
                <Sparkles className="w-3.5 h-3.5 text-teal-500" />
                <span>Kasus Lazim 1 Spuit:</span>
              </span>
              <button
                onClick={() => { setAdmixtureDrugAId('iv-morphine'); setAdmixtureDrugBId('iv-midazolam'); }}
                className="px-2.5 py-1 rounded-lg bg-teal-50 dark:bg-teal-950/40 text-teal-900 dark:text-teal-200 border border-teal-200 dark:border-teal-800/60 hover:bg-teal-100 font-bold font-outfit cursor-pointer transition-colors"
              >
                🕊️ Paliatif Nyeri + Agitasi (Morfin + Midazolam)
              </button>
              <button
                onClick={() => { setAdmixtureDrugAId('iv-morphine'); setAdmixtureDrugBId('iv-ketorolac'); }}
                className="px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800/60 hover:bg-emerald-100 font-bold font-outfit cursor-pointer transition-colors"
              >
                ⚡ PCA Post-Op (Morfin + Ketorolac)
              </button>
              <button
                onClick={() => { setAdmixtureDrugAId('iv-propofol'); setAdmixtureDrugBId('iv-lidocaine'); }}
                className="px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 border border-amber-200 dark:border-amber-800/60 hover:bg-amber-100 font-bold font-outfit cursor-pointer transition-colors"
              >
                ⚠️ Induksi Anestesi (Propofol + Lidokain - 30 Mnt)
              </button>
              <button
                onClick={() => { setAdmixtureDrugAId('iv-ondansetron'); setAdmixtureDrugBId('iv-dexamethasone'); }}
                className="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200 border border-blue-200 dark:border-blue-800/60 hover:bg-blue-100 font-bold font-outfit cursor-pointer transition-colors"
              >
                🤢 Antiemetik CINV (Ondansetron + Deksametason)
              </button>
              <button
                onClick={() => { setAdmixtureDrugAId('iv-morphine'); setAdmixtureDrugBId('iv-furosemide'); }}
                className="px-2.5 py-1 rounded-lg bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 border border-rose-200 dark:border-rose-800/60 hover:bg-rose-100 font-bold font-outfit cursor-pointer transition-colors"
              >
                🛑 Fatal Presipitasi (Morfin + Furosemid)
              </button>
              <button
                onClick={() => { setAdmixtureDrugAId('iv-pantoprazole'); setAdmixtureDrugBId('iv-morphine'); }}
                className="px-2.5 py-1 rounded-lg bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 border border-rose-200 dark:border-rose-800/60 hover:bg-rose-100 font-bold font-outfit cursor-pointer transition-colors"
              >
                🛑 Rusak Asam-Basa (Pantoprazole + Morfin)
              </button>
              <button
                onClick={() => { setAdmixtureDrugAId('iv-dexmedetomidine'); setAdmixtureDrugBId('iv-ketamine'); }}
                className="px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200 border border-indigo-200 dark:border-indigo-800/60 hover:bg-indigo-100 font-bold font-outfit cursor-pointer transition-colors"
              >
                🌟 Ketodex ICU (Dexmedetomidine + Ketamin)
              </button>
              <button
                onClick={() => { setAdmixtureDrugAId('iv-dobutamine'); setAdmixtureDrugBId('iv-dopamine'); }}
                className="px-2.5 py-1 rounded-lg bg-sky-50 dark:bg-sky-950/40 text-sky-900 dark:text-sky-200 border border-sky-200 dark:border-sky-800/60 hover:bg-sky-100 font-bold font-outfit cursor-pointer transition-colors"
              >
                💓 Inotropik Syok (Dobutamin + Dopamin)
              </button>
            </div>

            {/* Evaluation Result Detail Box */}
            {currentAdmixtureResult ? (
              <div
                className={`rounded-3xl p-5 sm:p-6 transition space-y-4 border ${
                  currentAdmixtureResult.status === 'incompatible'
                    ? 'bg-rose-50/90 dark:bg-rose-950/30 border-2 border-rose-400 dark:border-rose-700/80'
                    : currentAdmixtureResult.status === 'conditional'
                    ? 'bg-amber-50/90 dark:bg-amber-950/30 border-2 border-amber-400 dark:border-amber-700/80'
                    : 'bg-emerald-50/70 dark:bg-emerald-950/20 border-2 border-emerald-400 dark:border-emerald-700/80'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200/80 dark:border-slate-800">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-base sm:text-lg font-black font-outfit text-slate-900 dark:text-white">
                      {IV_DRUGS_DATABASE.find(d => d.id === currentAdmixtureResult.drugAId)?.name}
                    </span>
                    <span className="text-sm font-black text-slate-400">+</span>
                    <span className="text-base sm:text-lg font-black font-outfit text-slate-900 dark:text-white">
                      {IV_DRUGS_DATABASE.find(d => d.id === currentAdmixtureResult.drugBId)?.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 font-mono bg-white dark:bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-800">
                      Sumber: {currentAdmixtureResult.evidence}
                    </span>
                  </div>
                </div>

                {/* 4 Feature Parameter Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                  <div className="bg-white dark:bg-slate-900/90 rounded-2xl p-3.5 border border-slate-200/80 dark:border-slate-800 shadow-2xs">
                    <span className="text-slate-500 dark:text-slate-400 font-bold font-outfit block flex items-center gap-1.5 mb-1">
                      <Clock className="w-3.5 h-3.5 text-teal-500" />
                      Stabilitas Campuran Spuit
                    </span>
                    <span className="text-sm font-black font-outfit text-slate-900 dark:text-white">
                      {currentAdmixtureResult.stabilityHours > 0 ? `${currentAdmixtureResult.stabilityHours} Jam` : '0 Jam (Langsung Rusak)'}
                    </span>
                  </div>

                  <div className="bg-white dark:bg-slate-900/90 rounded-2xl p-3.5 border border-slate-200/80 dark:border-slate-800 shadow-2xs">
                    <span className="text-slate-500 dark:text-slate-400 font-bold font-outfit block flex items-center gap-1.5 mb-1">
                      <FlaskConical className="w-3.5 h-3.5 text-sky-500" />
                      Pelarut Pengencer
                    </span>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                      {currentAdmixtureResult.diluent}
                    </span>
                  </div>

                  <div className="bg-white dark:bg-slate-900/90 rounded-2xl p-3.5 border border-slate-200/80 dark:border-slate-800 shadow-2xs sm:col-span-2">
                    <span className="text-slate-500 dark:text-slate-400 font-bold font-outfit block flex items-center gap-1.5 mb-1">
                      <Activity className="w-3.5 h-3.5 text-indigo-500" />
                      Konteks Penggunaan Klinis
                    </span>
                    <span className="text-xs font-bold text-indigo-900 dark:text-indigo-200">
                      {currentAdmixtureResult.clinicalContext}
                    </span>
                  </div>
                </div>

                {/* Physical Observations */}
                <div className="bg-white dark:bg-slate-900/90 rounded-2xl p-4 border border-slate-200/80 dark:border-slate-800 shadow-2xs text-xs space-y-1">
                  <span className="text-slate-700 dark:text-slate-300 font-bold font-outfit block">
                    Pengamatan Fisik Larutan (Kejernihan &amp; Partikel):
                  </span>
                  <p className="text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                    {currentAdmixtureResult.physicalObservations}
                  </p>
                </div>

                {/* Clinical Notes & Pharmacy Recommendation */}
                <div className={`p-4 rounded-2xl text-xs space-y-1.5 border ${
                  currentAdmixtureResult.status === 'incompatible'
                    ? 'bg-rose-100/90 dark:bg-rose-950/60 border-rose-300 dark:border-rose-800 text-rose-950 dark:text-rose-100'
                    : currentAdmixtureResult.status === 'conditional'
                    ? 'bg-amber-100/90 dark:bg-amber-950/60 border-amber-300 dark:border-amber-800 text-amber-950 dark:text-amber-100'
                    : 'bg-emerald-100/90 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-100'
                }`}>
                  <span className="font-black font-outfit block">
                    Rekomendasi Farmasis Klinis &amp; Prosedur Pemberian:
                  </span>
                  <p className="leading-relaxed font-medium">
                    {currentAdmixtureResult.clinicalNotes}
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 text-center space-y-2">
                <HelpCircle className="w-8 h-8 text-slate-400 mx-auto" />
                <h5 className="text-sm font-bold font-outfit text-slate-800 dark:text-slate-200">
                  Data Pengujian 1 Spuit Belum Tersedia
                </h5>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-lg mx-auto font-medium">
                  Kombinasi kedua obat ini belum tercatat dalam pengujian stabilitas continuous subcutaneous / syringe driver (Dickman 5th Ed &amp; ASHP). Direkomendasikan memberikan melalui spuit dan jalur terpisah.
                </p>
              </div>
            )}
          </div>

          {/* Searchable Admixture Directory Table */}
          <div className="bg-white dark:bg-[#071726] border border-teal-200/80 dark:border-teal-500/25 rounded-3xl p-5 sm:p-6 shadow-sm space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h4 className="text-sm sm:text-base font-extrabold font-outfit text-slate-900 dark:text-white flex items-center gap-2 tracking-tight">
                  <BookOpen className="w-4 h-4 text-teal-500" />
                  Direktori Basis Data Admixture 1 Spuit ({filteredAdmixtureDatabase.length} Pasangan Terverifikasi)
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Kompilasi lengkap pengujian stabilitas spuit berdasarkan Dickman Palliative Care &amp; ASHP Injectable Drugs
                </p>
              </div>

              {/* Search input */}
              <div className="relative min-w-[240px]">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  value={admixtureSearchQuery}
                  onChange={(e) => setAdmixtureSearchQuery(e.target.value)}
                  placeholder="Cari nama obat / indikasi..."
                  className="w-full pl-9 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border border-teal-200 dark:border-teal-800 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-800 text-xs w-fit">
              <button
                onClick={() => setAdmixtureStatusFilter('all')}
                className={`px-3 py-1 rounded-lg font-bold font-outfit transition cursor-pointer ${
                  admixtureStatusFilter === 'all'
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                Semua ({SYRINGE_ADMIXTURE_DATABASE.length})
              </button>
              <button
                onClick={() => setAdmixtureStatusFilter('compatible')}
                className={`px-3 py-1 rounded-lg font-bold font-outfit transition cursor-pointer ${
                  admixtureStatusFilter === 'compatible'
                    ? 'bg-emerald-600 text-white shadow-2xs'
                    : 'text-emerald-600 dark:text-emerald-400'
                }`}
              >
                Kompatibel
              </button>
              <button
                onClick={() => setAdmixtureStatusFilter('conditional')}
                className={`px-3 py-1 rounded-lg font-bold font-outfit transition cursor-pointer ${
                  admixtureStatusFilter === 'conditional'
                    ? 'bg-amber-600 text-white shadow-2xs'
                    : 'text-amber-600 dark:text-amber-400'
                }`}
              >
                Bersyarat
              </button>
              <button
                onClick={() => setAdmixtureStatusFilter('incompatible')}
                className={`px-3 py-1 rounded-lg font-bold font-outfit transition cursor-pointer ${
                  admixtureStatusFilter === 'incompatible'
                    ? 'bg-rose-600 text-white shadow-2xs'
                    : 'text-rose-600 dark:text-rose-400'
                }`}
              >
                Inkompatibel
              </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto rounded-2xl border border-teal-100 dark:border-teal-950">
              <table className="w-full text-left text-xs border-collapse">
                <thead className="bg-slate-50 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 font-extrabold font-outfit border-b border-teal-100 dark:border-teal-950">
                  <tr>
                    <th className="p-3">Obat A</th>
                    <th className="p-3">Obat B</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Stabilitas</th>
                    <th className="p-3">Pelarut</th>
                    <th className="p-3">Konteks Klinis</th>
                    <th className="p-3 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-teal-100/60 dark:divide-teal-950/60 font-medium">
                  {filteredAdmixtureDatabase.map((item) => {
                    const drugA = IV_DRUGS_DATABASE.find(d => d.id === item.drugAId);
                    const drugB = IV_DRUGS_DATABASE.find(d => d.id === item.drugBId);
                    return (
                      <tr key={item.id} className="hover:bg-teal-50/50 dark:hover:bg-teal-950/30 transition-colors">
                        <td className="p-3 font-bold font-outfit text-slate-900 dark:text-white">
                          {drugA?.name || item.drugAId}
                        </td>
                        <td className="p-3 font-bold font-outfit text-slate-900 dark:text-white">
                          {drugB?.name || item.drugBId}
                        </td>
                        <td className="p-3">
                          {item.status === 'compatible' && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-black bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                              <CheckCircle2 className="w-3 h-3" /> Kompatibel
                            </span>
                          )}
                          {item.status === 'incompatible' && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-black bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300">
                              <AlertTriangle className="w-3 h-3" /> Inkompatibel
                            </span>
                          )}
                          {item.status === 'conditional' && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-black bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300">
                              <Info className="w-3 h-3" /> Bersyarat
                            </span>
                          )}
                        </td>
                        <td className="p-3 font-bold text-slate-800 dark:text-slate-200">
                          {item.stabilityHours > 0 ? `${item.stabilityHours} Jam` : '0 Jam'}
                        </td>
                        <td className="p-3 text-slate-600 dark:text-slate-400">
                          {item.diluent}
                        </td>
                        <td className="p-3 text-slate-700 dark:text-slate-300">
                          {item.clinicalContext}
                        </td>
                        <td className="p-3 text-right">
                          <button
                            onClick={() => {
                              setAdmixtureDrugAId(item.drugAId);
                              setAdmixtureDrugBId(item.drugBId);
                              window.scrollTo({ top: 300, behavior: 'smooth' });
                            }}
                            className="px-2.5 py-1 rounded-lg bg-teal-50 dark:bg-teal-950/80 text-teal-800 dark:text-teal-300 hover:bg-teal-100 dark:hover:bg-teal-900 border border-teal-200 dark:border-teal-800 text-[11px] font-bold font-outfit cursor-pointer transition-colors"
                          >
                            Uji Pasangan Ini
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: DIREKTORI PELARUT & STABILITAS REKONSTITUSI */}
      {/* ========================================================================= */}
      {activeSubTab === 'directory' && (
        <div className="space-y-6">
          {/* Search and Filters */}
          <div className="bg-white dark:bg-[#071726] border border-sky-200/80 dark:border-sky-500/25 rounded-3xl p-5 sm:p-6 shadow-sm flex flex-wrap items-center justify-between gap-4">
            <div className="relative flex-1 min-w-[240px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={directorySearchQuery}
                onChange={(e) => setDirectorySearchQuery(e.target.value)}
                placeholder="Cari obat injeksi (nama generik / merk dagang)..."
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl pl-10 pr-4 py-2 text-sm text-slate-900 dark:text-white font-bold font-outfit focus:outline-none focus:border-sky-500"
              />
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold font-outfit text-slate-600 dark:text-slate-400">Kategori:</span>
              <select
                value={selectedCategoryFilter}
                onChange={(e) => setSelectedCategoryFilter(e.target.value)}
                className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2 text-xs font-bold font-outfit text-slate-900 dark:text-white focus:outline-none focus:border-sky-500 cursor-pointer"
              >
                <option value="Semua">Semua Kategori</option>
                <option value="Vasoaktif / Inotropik">Vasoaktif / Inotropik</option>
                <option value="Antibiotik / Antijamur">Antibiotik / Antijamur</option>
                <option value="Nutrisi Parenteral & Cairan Khusus">Nutrisi Parenteral & Cairan Khusus</option>
                <option value="Kemoterapi Onkologi & Imunologi">Kemoterapi Onkologi & Imunologi</option>
                <option value="Sedasi & Anestesi">Sedasi & Anestesi</option>
                <option value="Analgesik & Antiinflamasi">Analgesik & Antiinflamasi</option>
                <option value="Antikoagulan & Kardiovaskular">Antikoagulan & Kardiovaskular</option>
                <option value="Gastrointestinal">Gastrointestinal</option>
                <option value="Elektrolit & Koreksi">Elektrolit & Koreksi</option>
                <option value="Lainnya">Lainnya</option>
              </select>

              <span className="text-xs font-bold font-outfit text-slate-600 dark:text-slate-400 ml-1">Risiko NPSA:</span>
              <select
                value={selectedNpsaFilter}
                onChange={(e) => setSelectedNpsaFilter(e.target.value)}
                className="bg-slate-50 dark:bg-slate-950 border border-purple-200 dark:border-purple-800/80 rounded-xl px-3 py-2 text-xs font-bold font-outfit text-purple-900 dark:text-purple-300 focus:outline-none focus:border-purple-500 cursor-pointer"
              >
                <option value="Semua">Semua Risiko NPSA</option>
                <option value="High Risk">🔴 High Risk (Tinggi)</option>
                <option value="Moderate Risk">🟡 Moderate Risk (Sedang)</option>
                <option value="Low Risk">🟢 Low Risk (Rendah)</option>
              </select>
            </div>
          </div>

          {/* Directory Drug Cards */}
          <div className="space-y-4">
            {filteredDirectoryDrugs.map(drug => {
              const idg = drug.grayIdg;
              return (
                <div
                  key={drug.id}
                  className="bg-white dark:bg-[#071726] border border-sky-200/80 dark:border-sky-500/25 rounded-3xl p-5 sm:p-6 shadow-sm hover:border-sky-400 dark:hover:border-sky-400/60 transition space-y-4"
                >
                  <div
                    className="flex flex-wrap items-center justify-between gap-3 cursor-pointer"
                    onClick={() => setExpandedDrugId(expandedDrugId === drug.id ? null : drug.id)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-sky-500/15 text-sky-600 dark:text-sky-400 border border-sky-400/30 flex items-center justify-center font-bold shadow-2xs">
                        <FlaskConical className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-extrabold font-outfit text-slate-900 dark:text-white flex items-center gap-2 flex-wrap">
                          {drug.name}
                          <span className="text-xs font-semibold text-slate-500 font-mono">({drug.genericName})</span>
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 mt-1">
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-black font-outfit bg-sky-50 dark:bg-sky-950/60 text-sky-800 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                            {drug.category}
                          </span>
                          <span className="text-xs text-slate-600 dark:text-slate-400 font-mono">
                            pH: <strong className="text-slate-900 dark:text-slate-200 font-black">{drug.phRange}</strong>
                          </span>
                          <span className="text-xs text-slate-600 dark:text-slate-400">
                            Merk: <em className="text-slate-800 dark:text-slate-200 font-bold">{drug.brandNames.join(', ')}</em>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 flex-wrap">
                      {/* NPSA Risk Badge */}
                      {idg && (
                        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-black font-outfit border shadow-2xs ${
                          idg.npsaRiskRating === 'High Risk'
                            ? 'bg-rose-50 text-rose-800 dark:bg-rose-950/70 dark:text-rose-200 border-rose-300 dark:border-rose-700'
                            : idg.npsaRiskRating === 'Moderate Risk'
                            ? 'bg-amber-50 text-amber-800 dark:bg-amber-950/70 dark:text-amber-200 border-amber-300 dark:border-amber-700'
                            : 'bg-emerald-50 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-200 border-emerald-300 dark:border-emerald-700'
                        }`}>
                          {idg.npsaRiskRating === 'High Risk' ? <ShieldAlert className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" /> : <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />}
                          NPSA: {idg.npsaRiskRating.toUpperCase()}
                        </span>
                      )}

                      {/* Vascular Access Badge */}
                      {idg && (
                        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-black font-outfit border ${
                          idg.vascularAccess.preferredRoute.includes('Wajib')
                            ? 'bg-purple-100 text-purple-900 dark:bg-purple-950/70 dark:text-purple-200 border-purple-300 dark:border-purple-700'
                            : idg.vascularAccess.preferredRoute.includes('Dianjurkan')
                            ? 'bg-indigo-50 text-indigo-900 dark:bg-indigo-950/70 dark:text-indigo-200 border-indigo-300 dark:border-indigo-700'
                            : 'bg-teal-50 text-teal-900 dark:bg-teal-950/70 dark:text-teal-200 border-teal-300 dark:border-teal-700'
                        }`}>
                          <Zap className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                          {idg.vascularAccess.preferredRoute.includes('Wajib') ? 'CVC Wajib' : idg.vascularAccess.preferredRoute.includes('Dianjurkan') ? 'CVC Dianjurkan' : 'Perifer OK'}
                        </span>
                      )}

                      {/* Extravasation Badge */}
                      {idg && idg.extravasation.classification !== 'Non-vesicant' && (
                        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-black font-outfit border shadow-2xs ${
                          idg.extravasation.classification === 'Vesicant'
                            ? 'bg-red-600 text-white border-red-700'
                            : 'bg-amber-600 text-white border-amber-700'
                        }`}>
                          <Flame className="w-3 h-3" />
                          {idg.extravasation.classification.toUpperCase()}
                        </span>
                      )}

                      {drug.stability.lightProtectionRequired && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] font-black font-outfit bg-amber-100 text-amber-900 border border-amber-300" title="Wajib Flabot Gelap / Aluminium Foil">
                          <SunMedium className="w-3 h-3" />
                          Pelindung Cahaya
                        </span>
                      )}
                      {drug.stability.filterRequired && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] font-black font-outfit bg-purple-100 text-purple-900 border border-purple-300" title="Wajib In-line Filter">
                          <Filter className="w-3 h-3" />
                          In-line Filter
                        </span>
                      )}
                      <span className="text-xs text-sky-600 dark:text-sky-400 font-bold font-outfit underline ml-1">
                        {expandedDrugId === drug.id ? 'Tutup Rincian' : 'Lihat Monografi Lengkap'}
                      </span>
                    </div>
                  </div>

                  {/* Expanded Alistair Gray (2021) Details */}
                  {expandedDrugId === drug.id && (
                    <div className="mt-5 pt-4 border-t border-sky-100 dark:border-sky-950/80 space-y-4 text-xs">
                      {/* SECTION 1: NPSA RISK & CLINICAL PRE-CHECKS (ALISTAIR GRAY 2021) */}
                      {idg && (
                        <div className="bg-gradient-to-r from-purple-50/70 via-slate-50 to-sky-50/70 dark:from-purple-950/20 dark:via-slate-900/40 dark:to-sky-950/20 rounded-2xl p-4 sm:p-5 border border-purple-200/80 dark:border-purple-800/60 space-y-3 shadow-2xs">
                          <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-purple-200/60 dark:border-purple-800/40">
                            <span className="text-xs font-black font-outfit uppercase tracking-wider text-purple-900 dark:text-purple-200 flex items-center gap-1.5">
                              <ShieldAlert className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                              Standar Keselamatan NPSA Alert 20 &amp; Alistair Gray (2021)
                            </span>
                            <span className="text-[11px] font-mono text-purple-700 dark:text-purple-300 font-bold">
                              Tingkat Risiko: <strong>{idg.npsaRiskRating}</strong>
                            </span>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Risk Rationale & Monitoring */}
                            <div className="space-y-2">
                              <span className="font-bold text-slate-800 dark:text-slate-200 block">Faktor Risiko Klinis:</span>
                              <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside">
                                {idg.npsaRiskRationale.map((r, i) => (
                                  <li key={i} className="leading-relaxed">{r}</li>
                                ))}
                              </ul>

                              <span className="font-bold text-slate-800 dark:text-slate-200 block pt-1">Pemantauan Bedside Saat Infus:</span>
                              <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc list-inside">
                                {idg.bedsideMonitoring.map((m, i) => (
                                  <li key={i} className="leading-relaxed text-sky-900 dark:text-sky-300 font-medium">{m}</li>
                                ))}
                              </ul>
                            </div>

                            {/* Bedside Interactive Pre-checks */}
                            <div className="bg-white/80 dark:bg-slate-950/80 rounded-xl p-3.5 border border-purple-200/60 dark:border-purple-800/60 space-y-2">
                              <span className="font-black text-purple-900 dark:text-purple-200 flex items-center gap-1.5 text-xs">
                                <FileCheck className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                                Checklist Pra-Pemberian (Verifikasi Perawat/Farmasis):
                              </span>
                              <div className="space-y-1.5 pt-1">
                                {idg.preAdministrationChecks.map((chk, i) => {
                                  const key = `${drug.id}-chk-${i}`;
                                  const isChecked = !!checkedPreChecks[key];
                                  return (
                                    <label
                                      key={i}
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        togglePreCheck(key);
                                      }}
                                      className={`flex items-start gap-2 p-2 rounded-lg border text-[11px] cursor-pointer transition ${
                                        isChecked
                                          ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200'
                                          : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-purple-300'
                                      }`}
                                    >
                                      <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 border ${isChecked ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-300 dark:border-slate-700'}`}>
                                        {isChecked && <Check className="w-3 h-3" />}
                                      </div>
                                      <span className="leading-tight select-none">{chk}</span>
                                    </label>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* SECTION 2: DILUENT COMPATIBILITY, RECONSTITUTION & DISPLACEMENT */}
                      <div className="space-y-3">
                        {/* Diluent Compatibility Grid */}
                        <div className="bg-slate-50 dark:bg-[#040f1a] rounded-2xl p-4 border border-sky-200/60 dark:border-sky-900/40">
                          <span className="text-xs font-black font-outfit text-slate-800 dark:text-slate-200 block mb-2">
                            Kompatibilitas Pelarut Pembawa / Cairan Infus:
                          </span>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {Object.entries(drug.diluents).filter(([k]) => k !== 'notes').map(([key, val], idx) => (
                              <div
                                key={idx}
                                className={`p-2.5 rounded-xl border flex items-center justify-between ${
                                  val
                                    ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800/80 text-emerald-900 dark:text-emerald-300'
                                    : 'bg-rose-50 dark:bg-rose-950/30 border-rose-300 dark:border-rose-800/80 text-rose-900 dark:text-rose-300'
                                }`}
                              >
                                <span className="font-bold font-outfit">{key.toUpperCase()}</span>
                                <span className="font-black font-outfit text-xs">
                                  {val ? '✓ Ya' : '✕ Tidak'}
                                </span>
                              </div>
                            ))}
                          </div>
                          {drug.diluents.notes && (
                            <p className="text-xs text-amber-900 dark:text-amber-300 mt-2 font-bold font-outfit">
                              *Catatan: {drug.diluents.notes}
                            </p>
                          )}
                        </div>

                        {/* Reconstitution & BUD Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="p-4 bg-sky-50/60 dark:bg-sky-950/30 rounded-2xl border border-sky-200/80 dark:border-sky-800/60 space-y-2">
                            <span className="font-black font-outfit text-sky-900 dark:text-sky-300 block flex items-center gap-1.5">
                              <FlaskConical className="w-4 h-4 text-sky-600" />
                              Panduan Rekonstitusi:
                            </span>
                            <p className="text-slate-700 dark:text-slate-300 font-medium font-outfit">{drug.reconstitution.instructions}</p>
                            <div className="text-[11px] text-slate-600 dark:text-slate-400 font-mono pt-1 border-t border-sky-200/60 dark:border-sky-900/60 space-y-0.5">
                              <p>Pelarut: <strong>{drug.reconstitution.recommendedDiluent}</strong></p>
                              <p>Volume Rekonstitusi: <strong>{drug.reconstitution.volumeToReconstitute}</strong></p>
                              <p>Konsentrasi Akhir: <strong>{drug.reconstitution.resultantConcentration}</strong></p>
                            </div>
                          </div>

                          <div className="p-4 bg-blue-50/60 dark:bg-blue-950/30 rounded-2xl border border-blue-200/80 dark:border-blue-800/60 space-y-2">
                            <span className="font-black font-outfit text-blue-900 dark:text-blue-300 block flex items-center gap-1.5">
                              <Clock className="w-4 h-4 text-blue-600" />
                              Stabilitas &amp; Beyond Use Date (BUD):
                            </span>
                            <div className="text-slate-700 dark:text-slate-300 text-[11px] font-outfit font-medium space-y-0.5">
                              <p>Suhu Kamar (20–25°C): <strong>{drug.stability.roomTemp25C}</strong></p>
                              <p>Lemari Pendingin (2–8°C): <strong>{drug.stability.refrigerated2to8C}</strong></p>
                            </div>
                            <div className="pt-2 border-t border-blue-200/60 dark:border-blue-900/60 flex items-center justify-between">
                              <DualEvidenceBadge nationalPreset="kemenkes-iv" internationalPreset="usp-795" size="sm" />
                            </div>
                          </div>
                        </div>

                        {/* Special Displacement Value Card (Gray 2021) */}
                        {idg?.displacementData && (
                          <div className="p-4 bg-indigo-50/80 dark:bg-indigo-950/40 rounded-2xl border-2 border-indigo-300 dark:border-indigo-800/80 space-y-3">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <div className="flex items-center gap-2">
                                <Baby className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                                <span className="font-black font-outfit text-indigo-950 dark:text-indigo-200 text-xs sm:text-sm">
                                  Faktor Pemindahan Volume Serbuk (Displacement Value - Gray 2021)
                                </span>
                              </div>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (drug.id === 'iv-ceftriaxone') setSelectedDisplacementPresetFromCard('disp-ceftriaxone-1g');
                                  else if (drug.id === 'iv-meropenem') setSelectedDisplacementPresetFromCard('disp-meropenem-1g');
                                  else if (drug.id === 'iv-vancomycin') setSelectedDisplacementPresetFromCard('disp-vancomycin-500mg');
                                  else setSelectedDisplacementPresetFromCard('disp-ceftriaxone-1g');
                                  setActiveSubTab('displacement');
                                }}
                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-[11px] font-black font-outfit shadow-sm transition cursor-pointer"
                              >
                                <span>Hitung Dosis Pediatrik</span>
                                <ArrowRight className="w-3 h-3" />
                              </button>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                              <div className="p-2.5 bg-white/80 dark:bg-slate-900/80 rounded-xl border border-indigo-200 dark:border-indigo-900/60">
                                <span className="text-[10px] font-bold text-slate-500 block">Bobot Serbuk Vial:</span>
                                <span className="text-xs font-black font-mono text-indigo-950 dark:text-indigo-200">{idg.displacementData.powderWeightMg} mg</span>
                              </div>
                              <div className="p-2.5 bg-white/80 dark:bg-slate-900/80 rounded-xl border border-indigo-200 dark:border-indigo-900/60">
                                <span className="text-[10px] font-bold text-slate-500 block">Displacement ($V_d$):</span>
                                <span className="text-xs font-black font-mono text-indigo-600 dark:text-indigo-400">{idg.displacementData.displacementVolumeMl} mL</span>
                              </div>
                              <div className="p-2.5 bg-white/80 dark:bg-slate-900/80 rounded-xl border border-indigo-200 dark:border-indigo-900/60">
                                <span className="text-[10px] font-bold text-slate-500 block">Pelarut Ditambahkan:</span>
                                <span className="text-xs font-black font-mono text-slate-900 dark:text-white">{idg.displacementData.standardDiluentVolumeMl} mL WFI</span>
                              </div>
                              <div className="p-2.5 bg-white/80 dark:bg-slate-900/80 rounded-xl border border-indigo-200 dark:border-indigo-900/60">
                                <span className="text-[10px] font-bold text-slate-500 block">Konsentrasi Sebenarnya:</span>
                                <span className="text-xs font-black font-mono text-emerald-600 dark:text-emerald-400">{idg.displacementData.reconstitutedConcentrationMgMl} mg/mL</span>
                              </div>
                            </div>
                            <p className="text-[11px] text-indigo-900 dark:text-indigo-300 font-medium leading-relaxed">
                              {idg.displacementData.notes}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* SECTION 3 & 4: VASCULAR ACCESS, FLUSHING & EXTRAVASATION PROTOCOL */}
                      {idg && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Vascular Access & Flush */}
                          <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-200/80 dark:border-slate-800 space-y-3">
                            <div className="flex items-center gap-2 pb-1 border-b border-slate-200 dark:border-slate-800">
                              <Zap className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                              <span className="font-black font-outfit text-slate-900 dark:text-white text-xs">
                                Jalur Akses Vena &amp; Protokol Pembilasan (Line Flush)
                              </span>
                            </div>

                            <div className="space-y-2 text-xs">
                              <div>
                                <span className="text-[11px] font-bold text-slate-500 block">Rekomendasi Jalur:</span>
                                <p className="font-black text-purple-900 dark:text-purple-300">{idg.vascularAccess.preferredRoute}</p>
                                <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5 leading-tight">{idg.vascularAccess.recommendations}</p>
                              </div>

                              <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
                                <span className="text-[11px] font-bold text-slate-500 block">Cairan Pembilas (Line Flush):</span>
                                <p className="font-bold text-slate-800 dark:text-slate-200">
                                  {idg.flushing.preferredFlushSolution} (Minimal: {idg.flushing.minFlushVolumeMl} mL)
                                </p>
                                {idg.flushing.flushIncompatibilityWarning && (
                                  <p className="text-[11px] text-rose-600 dark:text-rose-400 font-bold mt-1">
                                    ⚠️ {idg.flushing.flushIncompatibilityWarning}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Extravasation Emergency Protocol */}
                          <div className={`p-4 rounded-2xl border-2 space-y-3 ${
                            idg.extravasation.classification === 'Vesicant'
                              ? 'bg-rose-50/90 dark:bg-rose-950/30 border-rose-400 dark:border-rose-800/80 text-rose-950 dark:text-rose-100'
                              : idg.extravasation.classification === 'Irritant'
                              ? 'bg-amber-50/90 dark:bg-amber-950/30 border-amber-400 dark:border-amber-800/80 text-amber-950 dark:text-amber-100'
                              : 'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-200'
                          }`}>
                            <div className="flex items-center justify-between gap-2 pb-1 border-b border-current/20">
                              <span className="font-black font-outfit text-xs flex items-center gap-1.5">
                                <Flame className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                                Kedaruratan Ekstravasasi: {idg.extravasation.classification.toUpperCase()}
                              </span>
                              <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-white/70 dark:bg-slate-950/60 border border-current/30">
                                {idg.extravasation.thermalIntervention}
                              </span>
                            </div>

                            <p className="text-[11px] leading-relaxed font-medium">
                              <strong>Toksisitas Jaringan:</strong> {idg.extravasation.tissueToxicity}
                            </p>

                            {idg.extravasation.antidoteName && (
                              <div className="p-2.5 rounded-xl bg-white/80 dark:bg-slate-950/70 border border-current/30 text-[11px] space-y-1">
                                <span className="font-black block text-rose-700 dark:text-rose-300">
                                  Antidotum Spesifik: {idg.extravasation.antidoteName}
                                </span>
                                {idg.extravasation.antidoteDoseAndRoute && (
                                  <p className="font-mono text-[10px] font-bold">{idg.extravasation.antidoteDoseAndRoute}</p>
                                )}
                                {idg.extravasation.antidoteInstructions && (
                                  <p className="text-[10px] text-slate-600 dark:text-slate-400 leading-tight">{idg.extravasation.antidoteInstructions}</p>
                                )}
                              </div>
                            )}

                            <div>
                              <span className="font-bold text-[11px] block mb-1">Langkah Tanggap Darurat Bedside:</span>
                              <ol className="space-y-1 text-[10px] list-decimal list-inside font-medium leading-tight">
                                {idg.extravasation.emergencySteps.map((step, idx) => (
                                  <li key={idx}>{step}</li>
                                ))}
                              </ol>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* SECTION 5: EQUIPMENT & NON-PVC / FILTER GUIDANCE */}
                      {idg && (
                        <div className="p-3.5 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                          <div className="flex items-center gap-2">
                            <Filter className="w-4 h-4 text-purple-600" />
                            <span className="font-bold text-slate-700 dark:text-slate-300">In-line Filter:</span>
                            <span className="font-black text-slate-900 dark:text-white font-mono">{idg.equipment.inlineFilter}</span>
                            {idg.equipment.inlineFilterReason && (
                              <span className="text-[11px] text-slate-500">({idg.equipment.inlineFilterReason})</span>
                            )}
                          </div>

                          <div className="flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-sky-600" />
                            <span className="font-bold text-slate-700 dark:text-slate-300">Material Wadah:</span>
                            <span className="font-black text-slate-900 dark:text-white">{idg.equipment.containerMaterial}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: KALKULATOR TITRASI SYRINGE PUMP & DRIP */}
      {/* ========================================================================= */}
      {activeSubTab === 'calculator' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Controls Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white dark:bg-[#071726] border border-sky-200/80 dark:border-sky-500/25 rounded-3xl p-6 shadow-sm space-y-4">
              <h3 className="text-base font-extrabold font-outfit text-slate-900 dark:text-white flex items-center gap-2">
                <Calculator className="w-5 h-5 text-sky-500" />
                Parameter Syringe Pump ICU
              </h3>

              <div>
                <label className="block text-xs font-bold font-outfit text-slate-700 dark:text-slate-300 mb-1">Pilih Preset Obat Vasoaktif:</label>
                <select
                  value={calcDrugPreset}
                  onChange={(e) => {
                    setCalcDrugPreset(e.target.value);
                    if (e.target.value === 'iv-norepinephrine') {
                      setCalcTargetDose(0.05);
                      setCalcDrugMgInSyringe(4);
                      setCalcSyringeVolumeMl(50);
                    } else if (e.target.value === 'iv-dobutamine') {
                      setCalcTargetDose(5);
                      setCalcDrugMgInSyringe(250);
                      setCalcSyringeVolumeMl(50);
                    } else if (e.target.value === 'iv-dopamine') {
                      setCalcTargetDose(5);
                      setCalcDrugMgInSyringe(200);
                      setCalcSyringeVolumeMl(50);
                    } else if (e.target.value === 'iv-nicardipine') {
                      setCalcTargetDose(5); // mg/hr
                      setCalcDrugMgInSyringe(10);
                      setCalcSyringeVolumeMl(50);
                    }
                  }}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2.5 text-xs font-bold font-outfit text-slate-900 dark:text-white focus:outline-none focus:border-sky-500"
                >
                  <option value="iv-norepinephrine">Norepinephrine (Vascon) 4 mg / 50 mL</option>
                  <option value="iv-dobutamine">Dobutamine (Inotrop) 250 mg / 50 mL</option>
                  <option value="iv-dopamine">Dopamine 200 mg / 50 mL</option>
                  <option value="iv-nicardipine">Nicardipine (Perdipine) 10 mg / 50 mL</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold font-outfit text-slate-700 dark:text-slate-300 mb-1">Berat Badan (kg)</label>
                  <input
                    type="number"
                    min="1"
                    value={calcPatientWeightKg}
                    onChange={(e) => setCalcPatientWeightKg(Math.max(1, parseFloat(e.target.value) || 1))}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold font-outfit text-slate-900 dark:text-white focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold font-outfit text-slate-700 dark:text-slate-300 mb-1">Target Dosis Titrasi</label>
                  <div className="relative">
                    <input
                      type="number"
                      step="0.01"
                      min="0.001"
                      value={calcTargetDose}
                      onChange={(e) => setCalcTargetDose(Math.max(0.001, parseFloat(e.target.value) || 0))}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-black font-outfit text-sky-800 dark:text-sky-300 focus:outline-none focus:border-sky-500"
                    />
                    <span className="absolute right-2.5 top-2 text-[10px] text-slate-500 font-bold font-outfit">mcg/kg/mnt</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Gravity Drip Section */}
            <div className="bg-white dark:bg-[#071726] border border-sky-200/80 dark:border-sky-500/25 rounded-3xl p-6 shadow-sm space-y-3">
              <h3 className="text-xs font-black font-outfit text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                Kalkulator Tetesan Infus Gravitasi
              </h3>
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block text-[11px] font-bold font-outfit text-slate-600 dark:text-slate-400 mb-1">Vol (mL)</label>
                  <input
                    type="number"
                    value={dripVolumeMl}
                    onChange={(e) => setDripVolumeMl(parseInt(e.target.value) || 100)}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-2.5 py-1.5 text-xs font-bold font-outfit text-slate-900 dark:text-white focus:outline-none focus:border-sky-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold font-outfit text-slate-600 dark:text-slate-400 mb-1">Jam</label>
                  <input
                    type="number"
                    value={dripDurationHours}
                    onChange={(e) => setDripDurationHours(parseInt(e.target.value) || 1)}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-2.5 py-1.5 text-xs font-bold font-outfit text-slate-900 dark:text-white focus:outline-none focus:border-sky-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold font-outfit text-slate-600 dark:text-slate-400 mb-1">Factor</label>
                  <select
                    value={dripFactor}
                    onChange={(e) => setDripFactor(parseInt(e.target.value) as any)}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-2 py-1.5 text-xs font-bold font-outfit text-slate-900 dark:text-white focus:outline-none focus:border-sky-500"
                  >
                    <option value={20}>Makro</option>
                    <option value={60}>Mikro</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-gradient-to-r from-[#031522] via-[#072438] to-[#041926] border border-sky-500/30 rounded-3xl p-6 text-white shadow-xl space-y-5">
              <span className="text-xs font-extrabold font-outfit text-sky-400 uppercase tracking-wider block">
                Hasil Setting Syringe Pump
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#020d16]/90 border border-sky-500/25 rounded-2xl p-4">
                  <span className="text-xs text-sky-200/80 font-medium font-outfit">Setting Pump</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-3xl font-black font-outfit text-sky-400">{syringePumpCalculations.rateMlPerHour}</span>
                    <span className="text-sm font-bold font-outfit text-sky-100">mL / jam</span>
                  </div>
                </div>
                <div className="bg-[#020d16]/90 border border-sky-500/25 rounded-2xl p-4">
                  <span className="text-xs text-sky-200/80 font-medium font-outfit">Habis Dalam</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-3xl font-black font-outfit text-emerald-300">~{syringePumpCalculations.syringeDurationHours}</span>
                    <span className="text-sm font-bold font-outfit text-sky-100">Jam</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#041624] border border-sky-500/30 rounded-2xl p-4">
                <span className="text-xs font-bold font-outfit text-sky-300 block mb-1">
                  Hasil Tetesan Gravitasi ({dripVolumeMl} mL / {dripDurationHours} jam):
                </span>
                <span className="text-2xl font-black font-outfit text-white">{gravityDripCalculations.dripRateGttPerMin}</span>
                <span className="text-xs font-bold font-outfit text-sky-300 ml-1">tetes / menit</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: KALKULATOR DISPLACEMENT SERBUK PEDIATRIK (ALISTAIR GRAY 2021)      */}
      {/* ========================================================================= */}
      {activeSubTab === 'displacement' && (
        <PediatricDisplacementCalculator initialPresetId={selectedDisplacementPresetFromCard} />
      )}

      {/* VERIFIED CLINICAL REFERENCES FOOTER */}
      <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm space-y-3">
        <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200">
          <BookOpen className="w-4 h-4 text-sky-600 dark:text-sky-400" />
          <h4 className="text-xs font-black font-outfit uppercase tracking-wider text-slate-800 dark:text-slate-200">
            Sumber Referensi Resmi &amp; Literatur Terverifikasi:
          </h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
          <div className="p-3.5 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="font-black text-[#0f766e] dark:text-teal-300 block flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              1. Handbook on Injectable Drugs
            </span>
            <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              Lawrence A. Trissel, American Society of Health-System Pharmacists (ASHP). Rujukan baku dunia untuk data kompatibilitas Y-Site, presipitasi fisiko-kimiawi, dan stabilitas Beyond Use Date (BUD).
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="font-black text-[#0f766e] dark:text-teal-300 block flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              2. ASHP Injectable Drug Info
            </span>
            <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              American Society of Health-System Pharmacists. Standar monografi rekonstitusi, pelarut yang direkomendasikan (NS, D5W, RL), filter membran, dan perlindungan cahaya.
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="font-black text-[#0f766e] dark:text-teal-300 block flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              3. Pedoman Obat Suntik Kemenkes RI
            </span>
            <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              Direktorat Bina Farmasi Komunitas dan Klinik, Ditjen Binfar dan Alkes, Kementerian Kesehatan Republik Indonesia. Standar teknik aseptis dispensing sediaan steril.
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="font-black text-[#0f766e] dark:text-teal-300 block flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              4. FDA &amp; King Guide to Admixtures
            </span>
            <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              Black Box Warnings FDA (seperti kontraindikasi fatal Seftriakson + Kalsium) dan data kompatibilitas cairan infus parenteral multi-komponen.
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="font-black text-[#0f766e] dark:text-teal-300 block flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              5. Injectable Drugs Guide (Gray 2021)
            </span>
            <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              Alistair Gray, Jane Wright, Vincent Goodey. Pharmaceutical Press / RPS &amp; NPSA Alert 20. Standar penilaian risiko NPSA, displacement values serbuk pediatrik, tata laksana ekstravasasi, dan CVC.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
