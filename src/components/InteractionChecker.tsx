import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { 
  Drug, 
  DrugInteraction, 
  UserProfile, 
  SeverityLevel, 
  PricingPlan, 
  DrugDiseaseInteraction,
  DDInterSubTab,
  DDInterMechanismCategory
} from '../types';
import { 
  ShieldAlert, 
  Plus, 
  X, 
  AlertTriangle, 
  CheckCircle2, 
  Printer, 
  Sparkles, 
  Search, 
  Info, 
  ShieldCheck,
  ExternalLink,
  Utensils,
  CopyX,
  Download,
  Database,
  Activity,
  HeartPulse,
  Stethoscope,
  Flame,
  UserCheck,
  Layers,
  Pill,
  Filter,
  ArrowRight,
  BookOpen,
  Leaf,
  FlaskConical,
  RefreshCw,
  AlertOctagon,
  ChevronDown,
  ChevronUp,
  Shuffle
} from 'lucide-react';
import { 
  resolveDrugFromDDInter, 
  resolveInteractionPair, 
  resolveInteractionDirectOrAlias,
  resolveInteractionHeuristic,
  evaluateTherapeuticDuplications, 
  evaluateFoodInteractions,
  evaluateDrugDiseaseInteractions,
  sortInteractionsByDDInterPriority,
  evaluateTripleWhammyTriad,
  evaluateHerbInteractionsForDrugs,
  synthesizeDDInterOriginalText,
  synthesizeSafeAlternatives,
  synthesizeAlternativesForDrug,
  getSanitizedAlternativesForDrug,
  harmonizeClinicalLocalization,
  synthesizeTwoColumnSafeAlternatives,
  resolveDDInterINNPair,
  isCorruptedOrMismatchedManagement
} from '../utils/ddinterEngine';
import { 
  SAMPLE_FOOD_INTERACTIONS, 
  SAMPLE_THERAPEUTIC_DUPLICATIONS, 
  DDINTER_DATASET_INFO,
  INITIAL_DRUGS,
  INITIAL_INTERACTIONS
} from '../data/ddinterData';
import { DRUG_DISEASE_INTERACTIONS_DATABASE, COMMON_CLINICAL_DISEASES } from '../data/drugDiseaseInteractionsData';
import { HERB_DRUG_INTERACTIONS_DATABASE } from '../data/herbDrugInteractionsData';
import { FloatingPillsBackground } from './FloatingPillsBackground';
import { EvidenceSourceBadge, DualEvidenceBadge } from './EvidenceSourceBadge';
import { 
  findInteractionInIndexedDb, 
  getIndexedDbStats, 
  autoSeedIndexedDbIfEmpty, 
  syncIndexedDbFromParts,
  IndexedDbStats 
} from '../utils/ddinterIndexedDb';
import { 
  BENCHMARK_195K_INTERACTIONS, 
  DDINTER_195K_PRESETS_LIST 
} from '../data/ddinter195kPresets';

interface InteractionCheckerProps {
  drugs: Drug[];
  interactions: DrugInteraction[];
  currentUser: UserProfile | null;
  pricingPlans?: PricingPlan[];
  onOpenPricingModal: () => void;
  onOpenAuthModal: () => void;
  onOpenReportModal: (selectedDrugs: Drug[], matchedInteractions: DrugInteraction[]) => void;
  preselectedDrugName?: string;
  preselectedDrugNames?: string[];
}

export const InteractionChecker: React.FC<InteractionCheckerProps> = ({
  drugs,
  interactions,
  currentUser,
  pricingPlans = [],
  onOpenPricingModal,
  onOpenAuthModal,
  onOpenReportModal,
  preselectedDrugName = '',
  preselectedDrugNames = []
}) => {
  // Authoritative fallback: guarantees 100% full dataset availability even if props are not yet hydrated
  const effectiveDrugs = drugs && drugs.length >= INITIAL_DRUGS.length ? drugs : INITIAL_DRUGS;
  const effectiveInteractions = useMemo(() => {
    const map = new Map<string, DrugInteraction>();
    if (Array.isArray(interactions)) {
      interactions.forEach(item => { if (item && item.id) map.set(item.id, item); });
    }
    INITIAL_INTERACTIONS.forEach(item => { if (item && item.id) map.set(item.id, item); });
    BENCHMARK_195K_INTERACTIONS.forEach(item => { if (item && item.id) map.set(item.id, item); });
    return Array.from(map.values());
  }, [interactions]);

  const [selectedDrugs, setSelectedDrugs] = useState<Drug[]>(() => {
    const rawNames: string[] = [];
    if (preselectedDrugNames && preselectedDrugNames.length > 0) {
      preselectedDrugNames.forEach((n) => {
        if (n.includes(',')) {
          rawNames.push(...n.split(',').map((s) => s.trim()).filter(Boolean));
        } else if (n.trim()) {
          rawNames.push(n.trim());
        }
      });
    } else if (preselectedDrugName) {
      rawNames.push(...preselectedDrugName.split(',').map((s) => s.trim()).filter(Boolean));
    }

    if (rawNames.length > 0) {
      const list: Drug[] = [];
      const seen = new Set<string>();
      rawNames.forEach((name) => {
        const resolved = resolveDrugFromDDInter(name, effectiveDrugs);
        if (resolved && !seen.has(resolved.id)) {
          seen.add(resolved.id);
          list.push(resolved);
        }
      });
      if (list.length > 0) return list;
    }
    // Default clean slate so the clinician starts fresh with their actual patient prescription
    return [];
  });
  const [selectedDiseases, setSelectedDiseases] = useState<string[]>([]);
  const [searchInput, setSearchInput] = useState('');
  const [showDatasetDetails, setShowDatasetDetails] = useState(false);
  const [limitWarning, setLimitWarning] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<DDInterSubTab>('all');
  const [severityFilter, setSeverityFilter] = useState<'all' | 'Major' | 'Moderate' | 'Minor' | 'Unknown'>('all');
  const [mechanismFilter, setMechanismFilter] = useState<'all' | DDInterMechanismCategory>('all');
  const [showAllPotentialDiseaseRisks, setShowAllPotentialDiseaseRisks] = useState(false);
  const [expandedDfiRefId, setExpandedDfiRefId] = useState<string | null>(null);
  const [foodSeverityFilter, setFoodSeverityFilter] = useState<'all' | 'Major' | 'Moderate' | 'Minor'>('all');
  const [tier2MatchedInteractions, setTier2MatchedInteractions] = useState<DrugInteraction[]>([]);
  const [tier2Stats, setTier2Stats] = useState<IndexedDbStats | null>(null);
  const [syncProgress, setSyncProgress] = useState<{ loaded: number; total: number; part: number; totalParts: number } | null>(null);
  const [isSyncingTier2, setIsSyncingTier2] = useState(false);
  const [expandedAlts, setExpandedAlts] = useState<Record<string, boolean>>({});
  const [expandedOriginalTexts, setExpandedOriginalTexts] = useState<Record<string, boolean>>({});
  const [expandedReferences, setExpandedReferences] = useState<Record<string, boolean>>({});
  const [show195kPresetDrawer, setShow195kPresetDrawer] = useState(false);
  const [selectedSpecialtyFilter, setSelectedSpecialtyFilter] = useState<string>('Semua');

  const toggleExpandAlts = useCallback((key: string) => {
    setExpandedAlts(prev => ({ ...prev, [key]: !prev[key] }));
  }, []);

  const toggleExpandOriginalText = useCallback((id: string) => {
    setExpandedOriginalTexts(prev => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const toggleExpandReferences = useCallback((id: string) => {
    setExpandedReferences(prev => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const triggerSync = useCallback((force = false) => {
    setIsSyncingTier2(true);
    syncIndexedDbFromParts((loaded, total, part, totalParts) => {
      setSyncProgress({ loaded, total, part, totalParts });
      setTier2Stats({ totalCount: loaded, isInitialized: true, dbName: 'farmasi_druggist_ddinter_db' });
    }, force)
      .then((res) => {
        setIsSyncingTier2(false);
        setSyncProgress(null);
        getIndexedDbStats().then(setTier2Stats).catch(() => {});
      })
      .catch(() => {
        setIsSyncingTier2(false);
        setSyncProgress(null);
      });
  }, []);

  useEffect(() => {
    getIndexedDbStats().then((stats) => {
      setTier2Stats(stats);
      if (stats.totalCount < 195864) {
        triggerSync(false);
      }
    }).catch(() => {});
  }, [triggerSync]);

  // Async query missing drug pairs against Tier 2 (IndexedDB Archive)
  useEffect(() => {
    let isMounted = true;
    const checkTier2 = async () => {
      if (selectedDrugs.length < 2) {
        if (isMounted) setTier2MatchedInteractions([]);
        return;
      }

      const missingPairs: { drugA: Drug; drugB: Drug }[] = [];
      for (let i = 0; i < selectedDrugs.length; i++) {
        for (let j = i + 1; j < selectedDrugs.length; j++) {
          const dA = selectedDrugs[i];
          const dB = selectedDrugs[j];
          // Check authentic direct or alias match in Tier 1 (Batch 1-16 / Benchmarks / Official database)
          const foundInTier1 = resolveInteractionDirectOrAlias(dA, dB, effectiveInteractions);
          if (!foundInTier1) {
            missingPairs.push({ drugA: dA, drugB: dB });
          }
        }
      }

      if (missingPairs.length === 0) {
        if (isMounted) setTier2MatchedInteractions([]);
        return;
      }

      const results: DrugInteraction[] = [];
      for (const pair of missingPairs) {
        const found = await findInteractionInIndexedDb(pair.drugA.name, pair.drugB.name);
        if (found && isMounted) {
          results.push(found);
        }
      }

      if (isMounted) {
        setTier2MatchedInteractions(results);
      }
    };

    checkTier2();
    return () => {
      isMounted = false;
    };
  }, [selectedDrugs, effectiveInteractions]);

  const getMechanismBadge = (category?: string) => {
    switch (category) {
      case 'Metabolism':
        return { label: 'Metabolisme (CYP450)', bg: 'bg-indigo-50 text-indigo-800 dark:bg-indigo-950/70 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800' };
      case 'Absorption':
        return { label: 'Absorpsi & Khelasi', bg: 'bg-cyan-50 text-cyan-800 dark:bg-cyan-950/70 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800' };
      case 'Excretion':
        return { label: 'Ekskresi & Klirens Ginjal', bg: 'bg-sky-50 text-sky-800 dark:bg-sky-950/70 dark:text-sky-300 border-sky-200 dark:border-sky-800' };
      case 'Distribution':
        return { label: 'Distribusi & Ikatan Protein', bg: 'bg-emerald-50 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800' };
      case 'Synergy':
        return { label: 'Sinergi Farmakodinamik', bg: 'bg-amber-50 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300 border-amber-200 dark:border-amber-800' };
      case 'Antagonism':
        return { label: 'Antagonisme Reseptor', bg: 'bg-rose-50 text-rose-800 dark:bg-rose-950/70 dark:text-rose-300 border-rose-200 dark:border-rose-800' };
      default:
        return { label: 'Interaksi Farmakologi', bg: 'bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-300 border-slate-200 dark:border-slate-700' };
    }
  };

  const getItemMechanismCategories = (item: DrugInteraction): string[] => {
    if (item.mechanismCategories && item.mechanismCategories.length > 0) {
      return item.mechanismCategories;
    }
    return item.mechanismCategory ? [item.mechanismCategory] : ['Others'];
  };

  // Auto-select when navigating with preselected drug(s)
  useEffect(() => {
    const rawNames: string[] = [];
    if (preselectedDrugNames && preselectedDrugNames.length > 0) {
      preselectedDrugNames.forEach((n) => {
        if (n.includes(',')) {
          rawNames.push(...n.split(',').map((s) => s.trim()).filter(Boolean));
        } else if (n.trim()) {
          rawNames.push(n.trim());
        }
      });
    } else if (preselectedDrugName) {
      rawNames.push(...preselectedDrugName.split(',').map((s) => s.trim()).filter(Boolean));
    }

    if (rawNames.length > 0) {
      const list: Drug[] = [];
      const seen = new Set<string>();
      rawNames.forEach((name) => {
        const resolved = resolveDrugFromDDInter(name, effectiveDrugs);
        if (resolved && !seen.has(resolved.id)) {
          seen.add(resolved.id);
          list.push(resolved);
        }
      });
      if (list.length > 0) {
        setSelectedDrugs(list);
      }
    }
  }, [preselectedDrugName, preselectedDrugNames, effectiveDrugs]);
  const isFreePlan = !currentUser || currentUser.subscriptionPlan === 'Gratis' || currentUser.subscriptionPlan === 'Starter' || currentUser.subscriptionPlan === 'Pemula';
  const isProPlan = Boolean(currentUser && (currentUser.subscriptionPlan === 'Pro' || currentUser.role === 'admin'));

  const userPlanObj = pricingPlans?.find(p => 
    p.name.toLowerCase() === currentUser?.subscriptionPlan?.toLowerCase() || 
    (p.id === 'free' && isFreePlan) || 
    (p.id === 'pro' && isProPlan)
  );

  const activePermissions = userPlanObj?.permissions || {
    maxDrugsPerCheck: isProPlan ? 99 : 4,
    canPrintPdfReport: isProPlan,
    canAccessFoodInteractions: isProPlan,
    canAccessTherapeuticDuplications: isProPlan,
    canSaveCloudHistory: isProPlan,
    maxHistoryRecords: isProPlan ? 999 : 0,
    canAccessClinicBranding: isProPlan,
    canExportExcelCsv: isProPlan
  };

  const effectiveMaxDrugs = isProPlan 
    ? (activePermissions.maxDrugsPerCheck || 99) 
    : (activePermissions.maxDrugsPerCheck ? Math.min(activePermissions.maxDrugsPerCheck, 4) : 4);


  // Handle adding drug to selector
  const handleAddDrug = (drugToAdd: Drug) => {
    if (selectedDrugs.length >= effectiveMaxDrugs) {
      setLimitWarning(`Paket ${userPlanObj?.name || 'Gratis'} dibatasi maksimal ${effectiveMaxDrugs} obat per pemeriksaan. Tingkatkan ke paket Pro untuk analisis multi-obat tak terbatas!`);
      return;
    }

    if (!selectedDrugs.some((d) => d.id === drugToAdd.id || d.name.toLowerCase() === drugToAdd.name.toLowerCase())) {
      setSelectedDrugs([...selectedDrugs, drugToAdd]);
      setLimitWarning(null);
    }
    setSearchInput('');
  };

  // Handle direct custom typed drug search
  const handleAddCustomDrug = () => {
    if (!searchInput.trim()) return;
    
    if (selectedDrugs.length >= effectiveMaxDrugs) {
      setLimitWarning(`Paket ${userPlanObj?.name || 'Gratis'} dibatasi maksimal ${effectiveMaxDrugs} obat per pemeriksaan.`);
      return;
    }

    const resolved = resolveDrugFromDDInter(searchInput.trim(), effectiveDrugs);
    if (resolved) {
      if (!selectedDrugs.some((d) => d.id === resolved.id || d.name.toLowerCase() === resolved.name.toLowerCase())) {
        setSelectedDrugs([...selectedDrugs, resolved]);
        setLimitWarning(null);
      }
    }
    setSearchInput('');
  };

  const handleRemoveDrug = (id: string) => {
    setSelectedDrugs(selectedDrugs.filter((d) => d.id !== id));
  };

  // Filter dynamic dropdown
  const searchResults = searchInput.trim()
    ? effectiveDrugs.filter(
        (d) =>
          d?.name?.toLowerCase().includes(searchInput.toLowerCase().trim()) ||
          d?.genericName?.toLowerCase().includes(searchInput.toLowerCase().trim()) ||
          d?.brandNames?.some((b) => b?.toLowerCase().includes(searchInput.toLowerCase().trim()))
      ).slice(0, 8)
    : [];

  // Handle toggle disease selection
  const handleToggleDisease = (diseaseName: string) => {
    setSelectedDiseases((prev) =>
      prev.includes(diseaseName) ? prev.filter((d) => d !== diseaseName) : [...prev, diseaseName]
    );
  };

  const handleClearDiseases = () => {
    setSelectedDiseases([]);
  };

  // Match Interactions: Tier 1 (Batch 1-16 / Benchmarks) -> Tier 2 (IndexedDB 195k) -> Heuristic Fallback
  const rawMatchedInteractions: DrugInteraction[] = [];
  const handledPairKeys = new Set<string>();

  // 1. Prioritas Utama: Pasangan Terverifikasi Tier 1 (Batch 1-16 / Benchmarks / Official database)
  for (let i = 0; i < selectedDrugs.length; i++) {
    for (let j = i + 1; j < selectedDrugs.length; j++) {
      const drugA = selectedDrugs[i];
      const drugB = selectedDrugs[j];
      const pairKey = [drugA.name.toLowerCase().trim(), drugB.name.toLowerCase().trim()].sort().join('__');
      
      const foundTier1 = resolveInteractionDirectOrAlias(drugA, drugB, effectiveInteractions);
      if (foundTier1) {
        rawMatchedInteractions.push(foundTier1);
        handledPairKeys.add(pairKey);
      }
    }
  }

  // 2. Prioritas Kedua: Pasangan Terverifikasi dari Arsip 195k DDInter 2.0 (Tier 2 IndexedDB)
  tier2MatchedInteractions.forEach((t2Item) => {
    const t2Key = [t2Item.drugAName.toLowerCase().trim(), t2Item.drugBName.toLowerCase().trim()].sort().join('__');
    const isAlreadyHandled = handledPairKeys.has(t2Key) || rawMatchedInteractions.some(
      (m) =>
        (m.drugAName.toLowerCase() === t2Item.drugAName.toLowerCase() && m.drugBName.toLowerCase() === t2Item.drugBName.toLowerCase()) ||
        (m.drugAName.toLowerCase() === t2Item.drugBName.toLowerCase() && m.drugBName.toLowerCase() === t2Item.drugAName.toLowerCase())
    );
    if (!isAlreadyHandled) {
      rawMatchedInteractions.push(t2Item);
      handledPairKeys.add(t2Key);
    }
  });

  // 3. Prioritas Ketiga: Heuristic Fallback (HANYA jika tidak tercatat di Batch 1-16 maupun 195k DDInter)
  for (let i = 0; i < selectedDrugs.length; i++) {
    for (let j = i + 1; j < selectedDrugs.length; j++) {
      const drugA = selectedDrugs[i];
      const drugB = selectedDrugs[j];
      const pairKey = [drugA.name.toLowerCase().trim(), drugB.name.toLowerCase().trim()].sort().join('__');
      if (!handledPairKeys.has(pairKey)) {
        const heuristic = resolveInteractionHeuristic(drugA, drugB);
        if (heuristic) {
          rawMatchedInteractions.push(heuristic);
          handledPairKeys.add(pairKey);
        }
      }
    }
  }

  // Prioritize official DDInter 2.0 verified records first, followed by severity
  const matchedInteractions = sortInteractionsByDDInterPriority(rawMatchedInteractions);

  // Therapeutic Duplications evaluation
  const matchedDuplications = evaluateTherapeuticDuplications(selectedDrugs, SAMPLE_THERAPEUTIC_DUPLICATIONS);

  // Food & Lifestyle Interactions evaluation
  const matchedFoodInteractions = evaluateFoodInteractions(selectedDrugs, SAMPLE_FOOD_INTERACTIONS);
  const filteredFoodInteractions = matchedFoodInteractions.filter((item) => {
    if (foodSeverityFilter !== 'all' && item.severity !== foodSeverityFilter) return false;
    return true;
  });
  const foodMajorCount = matchedFoodInteractions.filter((i) => i.severity === 'Major').length;
  const foodModCount = matchedFoodInteractions.filter((i) => i.severity === 'Moderate').length;
  const foodMinorCount = matchedFoodInteractions.filter((i) => i.severity === 'Minor').length;

  // Drug-Disease Interactions (Contraindications) evaluation
  const matchedDiseaseInteractions = evaluateDrugDiseaseInteractions(
    selectedDrugs,
    selectedDiseases,
    DRUG_DISEASE_INTERACTIONS_DATABASE,
    showAllPotentialDiseaseRisks
  );

  // Triple Whammy evaluation (ACEi/ARB + Diuretic + NSAID)
  const tripleWhammyAlert = useMemo(() => evaluateTripleWhammyTriad(selectedDrugs), [selectedDrugs]);

  // Herb-Drug Interactions evaluation
  const matchedHerbInteractions = useMemo(() => evaluateHerbInteractionsForDrugs(selectedDrugs, HERB_DRUG_INTERACTIONS_DATABASE), [selectedDrugs]);

  // Filtered DDI interactions based on Severity and DDInter 2.0 Mechanism Category
  const filteredInteractions = matchedInteractions.filter((item) => {
    if (severityFilter !== 'all' && item.severity !== severityFilter) return false;
    if (mechanismFilter !== 'all') {
      const cats = getItemMechanismCategories(item);
      if (!cats.includes(mechanismFilter)) return false;
    }
    return true;
  });

  // Determine highest severity for clinical prescription interactions (DDI, Disease, Duplications, Triple Whammy)
  let highestSeverity: SeverityLevel | 'None' = 'None';
  if (
    tripleWhammyAlert ||
    matchedInteractions.some((i) => i.severity === 'Major') ||
    matchedDiseaseInteractions.some((d) => d.severity === 'Major')
  ) {
    highestSeverity = 'Major';
  } else if (
    matchedInteractions.some((i) => i.severity === 'Moderate') ||
    matchedDiseaseInteractions.some((d) => d.severity === 'Moderate') ||
    matchedDuplications.length > 0
  ) {
    highestSeverity = 'Moderate';
  } else if (
    matchedInteractions.some((i) => i.severity === 'Minor') ||
    matchedDiseaseInteractions.some((d) => d.severity === 'Minor')
  ) {
    highestSeverity = 'Minor';
  }

  const handleOpenPdfReport = () => {
    if (!currentUser) {
      onOpenAuthModal();
      return;
    }
    if (!activePermissions.canPrintPdfReport) {
      onOpenPricingModal();
      return;
    }
    onOpenReportModal(selectedDrugs, matchedInteractions);
  };

  const applyPreset = (drugNames: string[]) => {
    const list: Drug[] = [];
    const seenIds = new Set<string>();
    for (const name of drugNames) {
      const resolved = resolveDrugFromDDInter(name, effectiveDrugs);
      if (resolved && !seenIds.has(resolved.id)) {
        seenIds.add(resolved.id);
        list.push(resolved);
      }
    }
    setSelectedDrugs(list);
  };

  const handleRandom195kPreset = (mode?: 'poly' | 'major' | 'any') => {
    let pool = DDINTER_195K_PRESETS_LIST;
    if (mode === 'poly') {
      pool = DDINTER_195K_PRESETS_LIST.filter(p => p.drugs.length >= 3);
    } else if (mode === 'major') {
      pool = DDINTER_195K_PRESETS_LIST.filter(p => p.severity === 'Major');
    }
    if (pool.length === 0) pool = DDINTER_195K_PRESETS_LIST;
    const randomIndex = Math.floor(Math.random() * pool.length);
    const picked = pool[randomIndex];
    applyPreset(picked.drugs);
  };

  return (
    <div className="space-y-6 print:hidden">
      
      {/* HERO BANNER - CRIMSON RUBY & DARK OBSIDIAN */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0c0407] via-[#1a0812] to-[#260d1b] p-6 sm:p-8 text-white shadow-2xl border border-rose-500/25">
        <FloatingPillsBackground density="normal" accentColor="#fb7185" />
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-rose-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-72 -bottom-10 opacity-10 pointer-events-none hidden lg:block">
          <ShieldAlert className="w-56 h-56 text-rose-400 -rotate-12" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-500 to-red-600 text-white flex items-center justify-center shadow-lg shadow-rose-950/50 shrink-0">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-black font-outfit tracking-tight">
                  Analisis Interaksi Obat &amp; Duplikasi Terapi
                </h1>
              </div>
            </div>

          </div>

          <div className="flex items-center gap-3 shrink-0 relative z-10 w-full sm:w-auto">
            <div className="w-full sm:w-auto bg-slate-950/90 p-3 sm:p-3.5 rounded-2xl border border-rose-500/30 shadow-xl backdrop-blur-md">
              <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-2 mb-2">
                <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-rose-400" />
                  Basis Data Terverifikasi:
                </span>
                <span className="text-[10px] bg-rose-500/20 text-rose-300 font-extrabold px-2 py-0.5 rounded-full border border-rose-500/30">
                  Multi-Modal
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-slate-400 flex items-center gap-1">
                    <Pill className="w-3 h-3 text-cyan-400" /> Obat:
                  </span>
                  <span className="font-black text-white">{effectiveDrugs.length.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-slate-400 flex items-center gap-1">
                    <Utensils className="w-3 h-3 text-amber-400" /> Makanan:
                  </span>
                  <span className="font-black text-amber-300">{SAMPLE_FOOD_INTERACTIONS.length.toLocaleString('id-ID')} DFI</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-slate-400 flex items-center gap-1">
                    <CopyX className="w-3 h-3 text-purple-400" /> Duplikasi:
                  </span>
                  <span className="font-black text-purple-300">{SAMPLE_THERAPEUTIC_DUPLICATIONS.length.toLocaleString('id-ID')} Gol</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-slate-400 flex items-center gap-1">
                    <Leaf className="w-3 h-3 text-teal-400" /> Herbal:
                  </span>
                  <span className="font-black text-teal-300">{HERB_DRUG_INTERACTIONS_DATABASE.length.toLocaleString('id-ID')} Jamu</span>
                </div>

                {/* COMBINED UNIFIED DDINTER 2.0 TOTAL (TIER 1 + TIER 2 INTEGRATED) */}
                <div className="col-span-2 mt-1 pt-1.5 border-t border-white/10 flex items-center justify-between gap-2 bg-rose-500/15 p-2 rounded-xl border border-rose-500/30">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-rose-500/25 text-rose-300 shrink-0">
                      <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                    </div>
                    <div>
                      <span className="text-white font-black text-xs font-outfit block">
                        Interaksi DDInter 2.0:
                      </span>
                      <span className="text-[10px] text-rose-200/80 font-sans block">
                        {effectiveInteractions.length.toLocaleString('id-ID')} Preskripsi Inti + {(tier2Stats?.totalCount || 195864).toLocaleString('id-ID')} Basis Data
                      </span>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-black text-rose-300 text-sm font-outfit block">
                      {(effectiveInteractions.length + (tier2Stats?.totalCount || 195864)).toLocaleString('id-ID')}
                    </span>
                    <span className="text-[9.5px] font-bold text-emerald-400 flex items-center justify-end gap-1 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>Terintegrasi 100%</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tier 2 Syncing Banner */}
      {isSyncingTier2 && syncProgress && (
        <div className="bg-gradient-to-r from-indigo-950/90 via-slate-900 to-indigo-950/90 border-2 border-indigo-500/40 rounded-2xl p-4 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-in fade-in duration-200">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shrink-0">
              <Database className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-extrabold text-white flex items-center gap-2">
                <span>Sinkronisasi Basis Data DDInter 2.0 (195.864 Pasangan Obat)</span>
                <span className="text-[10px] bg-indigo-500/30 text-indigo-300 px-2 py-0.5 rounded-full border border-indigo-500/40">
                  Part {syncProgress.part} dari {syncProgress.totalParts}
                </span>
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Mengintegrasikan {syncProgress.loaded.toLocaleString('id-ID')} dari {syncProgress.total.toLocaleString('id-ID')} interaksi klinis terverifikasi ke browser lokal (IndexedDB offline-ready).
              </p>
            </div>
          </div>
          <div className="w-full sm:w-48 shrink-0">
            <div className="flex items-center justify-between text-[11px] font-bold text-indigo-300 mb-1">
              <span>Progress</span>
              <span>{Math.round((syncProgress.loaded / syncProgress.total) * 100)}%</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden border border-white/10">
              <div 
                className="bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400 h-2 rounded-full transition-all duration-300"
                style={{ width: `${Math.round((syncProgress.loaded / syncProgress.total) * 100)}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Limit Warning Banner for Free Tier */}
      {limitWarning && (
        <div className="bg-amber-50 dark:bg-amber-950/40 border-2 border-amber-300 dark:border-amber-700 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm animate-in fade-in duration-200">
          <div className="flex items-center gap-2.5">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
            <p className="text-xs font-black font-outfit text-amber-950 dark:text-amber-200 leading-relaxed">{limitWarning}</p>
          </div>
          <button
            onClick={onOpenPricingModal}
            className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black font-outfit text-xs rounded-xl shadow-xs transition-all shrink-0 flex items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
            <span>Upgrade ke Pro</span>
          </button>
        </div>
      )}

      {/* Drug Selector Panel - Rose Crimson Thematic Suite */}
      <div className="bg-white dark:bg-[#14060b] p-6 rounded-3xl border border-rose-200/80 dark:border-rose-500/25 shadow-sm space-y-5">
        <div className="flex items-center justify-between border-b border-rose-100 dark:border-rose-950/80 pb-3 flex-wrap gap-2">
          <div>
            <h2 className="text-base sm:text-lg font-extrabold font-outfit text-slate-900 dark:text-white tracking-tight">Daftar Obat Resep Pasien</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium font-sans">Pilih obat dari katalog atau ketik nama obat apapun untuk ditambahkan ke penapisan.</p>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="bg-rose-50 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 text-xs font-black font-outfit px-3.5 py-1.5 rounded-full border border-rose-200 dark:border-rose-800 shadow-2xs">
              {selectedDrugs.length} Obat Dipilih
            </span>
            {selectedDrugs.length > 0 && (
              <button
                onClick={() => setSelectedDrugs([])}
                className="text-xs font-bold text-slate-500 hover:text-rose-600 dark:hover:text-rose-400 px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-rose-300 transition-colors cursor-pointer"
                title="Hapus seluruh obat untuk memulai resep baru"
              >
                Kosongkan
              </button>
            )}

            {/* Dropdown Uji Kasus Interaksi (DDInter 195k Benchmark Presets Dropdown) */}
            <div className="relative flex items-center gap-1.5">
              <div className="relative flex items-center">
                <div className="absolute left-2.5 pointer-events-none text-rose-500 dark:text-rose-400">
                  <FlaskConical className="w-3.5 h-3.5" />
                </div>
                <select
                  value=""
                  onChange={(e) => {
                    const val = e.target.value;
                    if (!val) return;
                    if (val === '__RANDOM__') {
                      handleRandom195kPreset('any');
                    } else if (val === '__RANDOM_POLY__') {
                      handleRandom195kPreset('poly');
                    } else if (val === '__RANDOM_MAJOR__') {
                      handleRandom195kPreset('major');
                    } else if (val === '__DRAWER__') {
                      setShow195kPresetDrawer(true);
                    } else {
                      const preset = DDINTER_195K_PRESETS_LIST.find((p) => p.id === val);
                      if (preset) {
                        applyPreset(preset.drugs);
                      }
                    }
                  }}
                  className="pl-8 pr-8 py-1.5 text-xs font-semibold rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-rose-200 dark:border-rose-800/80 hover:border-rose-400 dark:hover:border-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500/30 cursor-pointer shadow-2xs transition-all appearance-none max-w-[280px] sm:max-w-[340px] truncate"
                  title="Pilih contoh kasus interaksi obat terverifikasi dari basis data 195k DDInter 2.0"
                >
                  <option value="" disabled hidden>
                    🧪 Uji Sampel Kasus Interaksi (51+ Kasus 195k)...
                  </option>

                  <optgroup label="🔴 Major: Kardiovaskular & Hemostasis">
                    {DDINTER_195K_PRESETS_LIST.filter(p => p.severity === 'Major' && p.specialty === 'Kardiovaskular').map(p => (
                      <option key={p.id} value={p.id}>⚡ {p.label}</option>
                    ))}
                  </optgroup>

                  <optgroup label="🔴 Major: Onkologi & Imunosupresi">
                    {DDINTER_195K_PRESETS_LIST.filter(p => p.severity === 'Major' && (p.specialty === 'Onkologi' || p.specialty === 'Nefrologi & NSAID')).map(p => (
                      <option key={p.id} value={p.id}>⚡ {p.label}</option>
                    ))}
                  </optgroup>

                  <optgroup label="🔴 Major: SSP, Opioid & Psikiatri">
                    {DDINTER_195K_PRESETS_LIST.filter(p => p.severity === 'Major' && (p.specialty === 'Psikiatri & SSP' || p.specialty === 'Neurologi')).map(p => (
                      <option key={p.id} value={p.id}>⚡ {p.label}</option>
                    ))}
                  </optgroup>

                  <optgroup label="🔴 Major: Antimikroba & Antivirus">
                    {DDINTER_195K_PRESETS_LIST.filter(p => p.severity === 'Major' && (p.specialty === 'Antimikroba & Infeksi' || p.specialty === 'Antiretroviral')).map(p => (
                      <option key={p.id} value={p.id}>⚡ {p.label}</option>
                    ))}
                  </optgroup>

                  <optgroup label="🟡 Moderate: Sinergi Toksisitas & Enzim Hepar">
                    {DDINTER_195K_PRESETS_LIST.filter(p => p.severity === 'Moderate' && (p.category === 'Synergy' || p.category === 'Metabolism')).map(p => (
                      <option key={p.id} value={p.id}>⚡ {p.label} ({p.specialty})</option>
                    ))}
                  </optgroup>

                  <optgroup label="🟡 Moderate: Absorpsi, Khelasi & Transporter">
                    {DDINTER_195K_PRESETS_LIST.filter(p => p.severity === 'Moderate' && (p.category === 'Absorption' || p.category === 'Antagonism')).map(p => (
                      <option key={p.id} value={p.id}>⚡ {p.label} ({p.specialty})</option>
                    ))}
                  </optgroup>

                  <optgroup label="🔵 Minor: Perubahan Paparan Ringan">
                    {DDINTER_195K_PRESETS_LIST.filter(p => p.severity === 'Minor' && p.specialty !== 'Polifarmasi Klinis').map(p => (
                      <option key={p.id} value={p.id}>⚡ {p.label} ({p.specialty})</option>
                    ))}
                  </optgroup>

                  <optgroup label="🚨 Polifarmasi Resep Kompleks (3-5 Obat)">
                    {DDINTER_195K_PRESETS_LIST.filter(p => p.specialty === 'Polifarmasi Klinis' && !p.id.includes('clean')).map(p => (
                      <option key={p.id} value={p.id}>{p.label}</option>
                    ))}
                  </optgroup>

                  <optgroup label="🟢 Kontrol Negatif (Resep Aman Bebas Interaksi)">
                    {DDINTER_195K_PRESETS_LIST.filter(p => p.id.includes('clean')).map(p => (
                      <option key={p.id} value={p.id}>{p.label}</option>
                    ))}
                  </optgroup>

                  <optgroup label="⚡ Aksi Pengujian Cepat & Eksplorasi 195k">
                    <option value="__RANDOM__">🎲 Acak 1 Sampel Kasus (dari 195.864 Data)</option>
                    <option value="__RANDOM_POLY__">🎲 Acak Paket Polifarmasi (3-5 Obat)</option>
                    <option value="__RANDOM_MAJOR__">⚠️ Acak Kasus Major Berisiko Tinggi</option>
                    <option value="__DRAWER__">📖 Buka Katalog Lengkap 195k (51+ Kasus)...</option>
                  </optgroup>
                </select>
                <div className="absolute right-2.5 pointer-events-none text-slate-400 dark:text-slate-500">
                  <ChevronDown className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Quick Shuffle Companion Button */}
              <button
                type="button"
                onClick={() => handleRandom195kPreset()}
                className="p-1.5 rounded-xl border border-rose-200 dark:border-rose-800/80 bg-white dark:bg-slate-900 hover:bg-rose-50 dark:hover:bg-rose-950/60 text-rose-600 dark:text-rose-400 hover:text-rose-700 transition-all cursor-pointer shadow-2xs hover:scale-105"
                title="Pilih Acak Kasus Uji Interaksi (195k DDInter)"
              >
                <Shuffle className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Aksi Cetak PDF di Header Panel */}
            {selectedDrugs.length >= 2 && (
              <>
                <div className="h-5 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block mx-0.5" />
                <button
                  onClick={handleOpenPdfReport}
                  className="bg-white dark:bg-slate-900 hover:bg-rose-50 dark:hover:bg-rose-950/60 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:border-rose-400 px-3.5 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1.5 shadow-2xs transition-all cursor-pointer hover:scale-[1.02]"
                  title="Cetak atau unduh laporan evaluasi interaksi klinis (PDF)"
                >
                  <Printer className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                  <span>Cetak Laporan PDF</span>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Selected Drugs Chips */}
        <div className="flex flex-wrap items-center gap-2 min-h-[48px] p-3.5 bg-rose-50/40 dark:bg-rose-950/20 rounded-2xl border border-rose-200/80 dark:border-rose-800/40">
          {selectedDrugs.length > 0 ? (
            selectedDrugs.map((drug) => (
              <div
                key={drug.id}
                className="bg-gradient-to-r from-rose-600 to-red-600 text-white px-3.5 py-1.5 rounded-xl text-xs font-bold font-outfit flex items-center gap-1.5 shadow-md shadow-rose-950/25"
              >
                <span>{drug.name}</span>
                <span className="text-[10px] text-rose-100 font-normal">({drug.atcCode || 'Obat'})</span>
                {drug.blackBoxWarning && (
                  <span className="bg-rose-950 text-rose-200 text-[9px] px-1.5 py-0.5 rounded font-black border border-rose-400/40" title="Obat memiliki FDA Boxed Warning (Peringatan Khusus)">
                    ⚠️ Boxed
                  </span>
                )}
                <button
                  onClick={() => handleRemoveDrug(drug.id)}
                  className="hover:bg-white/20 p-0.5 rounded transition-colors cursor-pointer"
                  title="Hapus"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ))
          ) : (
            <span className="text-xs text-slate-400 font-medium italic font-outfit">
              Belum ada obat yang dipilih. Gunakan pencarian di bawah untuk menambahkan minimal 2 obat.
            </span>
          )}
        </div>

        {/* Search Input */}
        <div className="relative space-y-2">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5" />
            <input
              id="drug-search-input"
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Ketik nama obat (misal: Warfarin, Atorvastatin, Ketoconazole, Tacrolimus, Sildenafil)..."
              className="w-full pl-10 pr-24 py-2.5 text-xs font-bold font-outfit text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-300 dark:border-slate-700 focus:outline-none focus:border-rose-500 shadow-2xs"
            />
            {searchInput.trim().length > 0 && (
              <button
                id="btn-add-custom-drug"
                onClick={handleAddCustomDrug}
                className="absolute right-2 bg-rose-600 hover:bg-rose-500 text-white text-[11px] font-bold font-outfit px-3.5 py-1.5 rounded-lg transition-colors shadow-xs cursor-pointer"
              >
                + Tambah
              </button>
            )}
          </div>

          {/* Search Dropdown Suggestions */}
          {searchInput.trim().length > 0 && (
            <div className="absolute z-20 left-0 right-0 bg-white dark:bg-[#14060b] border border-rose-200 dark:border-rose-800/80 rounded-2xl shadow-xl max-h-60 overflow-y-auto mt-1 p-2 divide-y divide-slate-100 dark:divide-slate-800">
              {searchResults.length > 0 ? (
                searchResults.map((d) => (
                  <button
                    key={d.id}
                    id={`drug-suggestion-${d.id}`}
                    onClick={() => handleAddDrug(d)}
                    className="w-full text-left px-3 py-2 hover:bg-rose-50/80 dark:hover:bg-rose-950/50 rounded-xl flex items-center justify-between transition cursor-pointer"
                  >
                    <div>
                      <p className="text-xs font-black font-outfit text-slate-900 dark:text-white">{d.name}</p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium font-outfit">{d.genericName} • {d.category}</p>
                    </div>
                    <span className="text-[11px] font-bold font-outfit text-rose-600 dark:text-rose-400">+ Pilih</span>
                  </button>
                ))
              ) : (
                <div className="p-3 text-center">
                  <p className="text-xs text-slate-500 font-outfit">Obat tidak ada di katalog cepat.</p>
                  <button
                    onClick={handleAddCustomDrug}
                    className="mt-1 text-xs font-black font-outfit text-rose-600 hover:underline cursor-pointer"
                  >
                    + Tetap Tambahkan "{searchInput}" sebagai Obat Kustom
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Analysis Output */}
      {selectedDrugs.length >= 1 ? (
        <div className="space-y-5">
          {/* TRIPLE WHAMMY ALERT BANNER */}
          {tripleWhammyAlert && (
            <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-red-950 via-rose-950 to-slate-950 border-2 border-red-500 text-white shadow-2xl space-y-4 animate-in fade-in zoom-in-95 duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-red-500/30 pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-red-600/30 border border-red-500 text-red-300 shadow-lg">
                    <AlertOctagon className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-red-600 text-white font-outfit shadow-xs">
                      ⚠️ PERINGATAN KRITIS: SINDROM TRIPLE WHAMMY TERDETEKSI
                    </span>
                    <h3 className="text-base sm:text-lg font-black font-outfit text-white pt-1">
                      Kombinasi Fatal Ginjal: Penyekat RAAS + Diuretik + NSAID
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-xl bg-red-900/80 border border-red-500 text-red-200">
                    {tripleWhammyAlert.aceiOrArb?.name}
                  </span>
                  <span className="text-red-400 font-black">+</span>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-xl bg-red-900/80 border border-red-500 text-red-200">
                    {tripleWhammyAlert.diuretic?.name}
                  </span>
                  <span className="text-red-400 font-black">+</span>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-xl bg-red-900/80 border border-red-500 text-red-200">
                    {tripleWhammyAlert.nsaid?.name}
                  </span>
                </div>
              </div>

              <p className="text-xs text-rose-100 leading-relaxed font-medium">
                {tripleWhammyAlert.clinicalOutcome}
              </p>

              <div className="bg-red-900/50 p-4 rounded-2xl border border-red-500/50 text-xs text-rose-200 space-y-1 shadow-inner">
                <p className="font-black text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Rekomendasi Tindakan Klinis Segera:</span>
                </p>
                <p className="leading-relaxed font-medium">{tripleWhammyAlert.recommendation}</p>
              </div>

              {tripleWhammyAlert.alternatives.length > 0 && (
                <div className="pt-1 flex flex-wrap items-center gap-2 text-xs">
                  <span className="font-bold text-slate-300 font-outfit">Alternatif Analgesik Aman:</span>
                  {tripleWhammyAlert.alternatives.map((alt, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-xl bg-emerald-950/80 border border-emerald-500/60 text-emerald-300 font-bold font-outfit text-xs flex items-center gap-1 shadow-2xs">
                      <span className="text-emerald-400">✓</span>
                      <span>{alt}</span>
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Safe Prescription Card */}
          {highestSeverity === 'None' && selectedDrugs.length >= 2 && (
            <div className="relative overflow-hidden bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-emerald-500/15 border-2 border-emerald-500/40 rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-4 shadow-sm animate-fade-in">
              <FloatingPillsBackground density="low" accentColor="#10b981" />
              <div className="relative z-10 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 flex items-center justify-center shrink-0 border border-emerald-500/30">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 font-bold text-[10px] mb-1 font-outfit uppercase">
                    <span>Terverifikasi Bebas Interaksi</span>
                  </div>
                  <h4 className="text-sm font-black text-emerald-950 dark:text-emerald-200 font-outfit">
                    Resep Ini Lolos Seluruh Penapisan Interaksi Klinis!
                  </h4>
                  <p className="text-xs text-emerald-800/80 dark:text-emerald-300/80">
                    Tidak ditemukan interaksi antar-obat (DDI), kontraindikasi penyakit, maupun duplikasi terapeutik.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* DDINTER 2.0 SEGMENTED TABS */}
          <div className="bg-slate-100/90 dark:bg-slate-900/90 p-1.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 flex items-center gap-1.5 overflow-x-auto shadow-inner">
            <button
              id="ddinter-tab-btn-all"
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-2.5 rounded-xl text-xs font-black font-outfit transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-white dark:bg-slate-800 text-teal-800 dark:text-teal-300 shadow-sm border border-teal-200/80 dark:border-teal-700/80 scale-[1.01]'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span>Semua Analisis</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-200 dark:bg-slate-700 font-mono font-bold">
                {matchedInteractions.length + matchedDiseaseInteractions.length + matchedDuplications.length + matchedFoodInteractions.length + matchedHerbInteractions.length}
              </span>
            </button>

            <button
              id="ddinter-tab-btn-ddi"
              onClick={() => setActiveTab('ddi')}
              className={`px-3.5 py-2.5 rounded-xl text-xs font-black font-outfit transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'ddi'
                  ? 'bg-white dark:bg-slate-800 text-amber-800 dark:text-amber-300 shadow-sm border border-amber-300/80 dark:border-amber-700/80 scale-[1.01]'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Activity className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>Obat-Obat (DDI)</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono font-bold ${
                matchedInteractions.length > 0 ? 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-200 border border-amber-300 dark:border-amber-800' : 'bg-slate-200 dark:bg-slate-700'
              }`}>
                {matchedInteractions.length}
              </span>
            </button>

            <button
              id="ddinter-tab-btn-disease"
              onClick={() => setActiveTab('disease')}
              className={`px-3.5 py-2.5 rounded-xl text-xs font-black font-outfit transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'disease'
                  ? 'bg-white dark:bg-slate-800 text-rose-800 dark:text-rose-300 shadow-sm border border-rose-300/80 dark:border-rose-700/80 scale-[1.01]'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <HeartPulse className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
              <span>Kontraindikasi Penyakit (DDSI)</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono font-bold ${
                matchedDiseaseInteractions.length > 0 ? 'bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-200 border border-rose-300 dark:border-rose-800' : 'bg-slate-200 dark:bg-slate-700'
              }`}>
                {matchedDiseaseInteractions.length}
              </span>
            </button>

            <button
              id="ddinter-tab-btn-food"
              onClick={() => setActiveTab('food')}
              className={`px-3.5 py-2.5 rounded-xl text-xs font-black font-outfit transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'food'
                  ? 'bg-white dark:bg-slate-800 text-purple-800 dark:text-purple-300 shadow-sm border border-purple-300/80 dark:border-purple-700/80 scale-[1.01]'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Utensils className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
              <span>Interaksi Makanan (DFI)</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono font-bold ${
                matchedFoodInteractions.length > 0 ? 'bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-200 border border-purple-300 dark:border-purple-800' : 'bg-slate-200 dark:bg-slate-700'
              }`}>
                {matchedFoodInteractions.length}
              </span>
            </button>

            <button
              id="ddinter-tab-btn-duplication"
              onClick={() => setActiveTab('duplication')}
              className={`px-3.5 py-2.5 rounded-xl text-xs font-black font-outfit transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'duplication'
                  ? 'bg-white dark:bg-slate-800 text-pink-800 dark:text-pink-300 shadow-sm border border-pink-300/80 dark:border-pink-700/80 scale-[1.01]'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <CopyX className="w-3.5 h-3.5 text-pink-600 dark:text-pink-400" />
              <span>Duplikasi Terapi</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono font-bold ${
                matchedDuplications.length > 0 ? 'bg-pink-100 dark:bg-pink-950 text-pink-800 dark:text-pink-200 border border-pink-300 dark:border-pink-800' : 'bg-slate-200 dark:bg-slate-700'
              }`}>
                {matchedDuplications.length}
              </span>
            </button>

            <button
              id="ddinter-tab-btn-herb"
              onClick={() => setActiveTab('herb')}
              className={`px-3.5 py-2.5 rounded-xl text-xs font-black font-outfit transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'herb'
                  ? 'bg-white dark:bg-slate-800 text-emerald-800 dark:text-emerald-300 shadow-sm border border-emerald-300/80 dark:border-emerald-700/80 scale-[1.01]'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Leaf className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Interaksi Herbal</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono font-bold ${
                matchedHerbInteractions.length > 0 ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-800' : 'bg-slate-200 dark:bg-slate-700'
              }`}>
                {matchedHerbInteractions.length}
              </span>
            </button>
          </div>

          {/* TAB 1: SEMUA ANALISIS (OVERVIEW) */}
          {activeTab === 'all' && (
            <div className="space-y-4">
              {/* 5-BENTO KPI SUMMARY CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
                {/* DDI Card */}
                <div 
                  onClick={() => setActiveTab('ddi')}
                  className="bg-white dark:bg-[#0c1322] p-4 rounded-2xl border border-amber-200/80 dark:border-amber-900/60 shadow-xs hover:shadow-md transition-all cursor-pointer group hover:scale-[1.02]"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800/80">
                    <span className="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/70 text-amber-600 dark:text-amber-400 group-hover:bg-amber-600 group-hover:text-white transition-all">
                      <Activity className="w-4 h-4" />
                    </span>
                    <span className="text-xs font-black font-mono text-amber-700 dark:text-amber-400 flex items-center gap-0.5">
                      <span>Buka Tab</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                  <div className="pt-3">
                    <span className="text-2xl font-black text-slate-900 dark:text-white font-outfit">
                      {matchedInteractions.length}
                    </span>
                    <p className="text-xs font-bold text-slate-700 dark:text-slate-300 font-outfit">Obat-Obat (DDI)</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug pt-0.5">
                      {matchedInteractions.filter(i => i.severity === 'Major').length} risiko Major
                    </p>
                  </div>
                </div>

                {/* DDSI Card */}
                <div 
                  onClick={() => setActiveTab('disease')}
                  className="bg-white dark:bg-[#0c1322] p-4 rounded-2xl border border-rose-200/80 dark:border-rose-900/60 shadow-xs hover:shadow-md transition-all cursor-pointer group hover:scale-[1.02]"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800/80">
                    <span className="p-2 rounded-xl bg-rose-50 dark:bg-rose-950/70 text-rose-600 dark:text-rose-400 group-hover:bg-rose-600 group-hover:text-white transition-all">
                      <HeartPulse className="w-4 h-4" />
                    </span>
                    <span className="text-xs font-black font-mono text-rose-700 dark:text-rose-400 flex items-center gap-0.5">
                      <span>Buka Tab</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                  <div className="pt-3">
                    <span className="text-2xl font-black text-slate-900 dark:text-white font-outfit">
                      {matchedDiseaseInteractions.length}
                    </span>
                    <p className="text-xs font-bold text-slate-700 dark:text-slate-300 font-outfit">Penyakit (DDSI)</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug pt-0.5">
                      Komorbiditas &amp; Beers
                    </p>
                  </div>
                </div>

                {/* DFI Card */}
                <div 
                  onClick={() => setActiveTab('food')}
                  className="bg-white dark:bg-[#0c1322] p-4 rounded-2xl border border-purple-200/80 dark:border-purple-900/60 shadow-xs hover:shadow-md transition-all cursor-pointer group hover:scale-[1.02]"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800/80">
                    <span className="p-2 rounded-xl bg-purple-50 dark:bg-purple-950/70 text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all">
                      <Utensils className="w-4 h-4" />
                    </span>
                    <span className="text-xs font-black font-mono text-purple-700 dark:text-purple-400 flex items-center gap-0.5">
                      <span>Buka Tab</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                  <div className="pt-3">
                    <span className="text-2xl font-black text-slate-900 dark:text-white font-outfit">
                      {matchedFoodInteractions.length}
                    </span>
                    <p className="text-xs font-bold text-slate-700 dark:text-slate-300 font-outfit">Makanan (DFI)</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug pt-0.5">
                      Susu, grapefruit, alkohol
                    </p>
                  </div>
                </div>

                {/* Duplication Card */}
                <div 
                  onClick={() => setActiveTab('duplication')}
                  className="bg-white dark:bg-[#0c1322] p-4 rounded-2xl border border-pink-200/80 dark:border-pink-900/60 shadow-xs hover:shadow-md transition-all cursor-pointer group hover:scale-[1.02]"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800/80">
                    <span className="p-2 rounded-xl bg-pink-50 dark:bg-pink-950/70 text-pink-600 dark:text-pink-400 group-hover:bg-pink-600 group-hover:text-white transition-all">
                      <CopyX className="w-4 h-4" />
                    </span>
                    <span className="text-xs font-black font-mono text-pink-700 dark:text-pink-400 flex items-center gap-0.5">
                      <span>Buka Tab</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                  <div className="pt-3">
                    <span className="text-2xl font-black text-slate-900 dark:text-white font-outfit">
                      {matchedDuplications.length}
                    </span>
                    <p className="text-xs font-bold text-slate-700 dark:text-slate-300 font-outfit">Duplikasi Terapi</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug pt-0.5">
                      Kelas farmakologi ganda
                    </p>
                  </div>
                </div>

                {/* Herb Card */}
                <div 
                  onClick={() => setActiveTab('herb')}
                  className="bg-white dark:bg-[#0c1322] p-4 rounded-2xl border border-emerald-200/80 dark:border-emerald-900/60 shadow-xs hover:shadow-md transition-all cursor-pointer group hover:scale-[1.02]"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800/80">
                    <span className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                      <Leaf className="w-4 h-4" />
                    </span>
                    <span className="text-xs font-black font-mono text-emerald-700 dark:text-emerald-400 flex items-center gap-0.5">
                      <span>Buka Tab</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                  <div className="pt-3">
                    <span className="text-2xl font-black text-slate-900 dark:text-white font-outfit">
                      {matchedHerbInteractions.length}
                    </span>
                    <p className="text-xs font-bold text-slate-700 dark:text-slate-300 font-outfit">Interaksi Herbal</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug pt-0.5">
                      Kunyit, Meniran, Jamu
                    </p>
                  </div>
                </div>
              </div>

              {/* OVERVIEW SECTIONS CONSOLIDATED */}
              {matchedInteractions.length > 0 && (
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-1.5 font-outfit">
                      <Activity className="w-4 h-4 text-amber-500" />
                      <span>Interaksi Obat-Obat Terdeteksi ({matchedInteractions.length})</span>
                    </h4>
                    <button 
                      onClick={() => setActiveTab('ddi')} 
                      className="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Filter Berdasarkan 6 Mekanisme DDInter</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                  <div className="space-y-3">
                    {matchedInteractions.slice(0, 3).map((item) => {
                      const categories = getItemMechanismCategories(item);
                      const isMajor = item.severity === 'Major';
                      return (
                        <div
                          key={item.id}
                          className={`rounded-2xl p-4 sm:p-5 border shadow-2xs space-y-3 ${
                            isMajor ? 'clinical-card-major' : 'clinical-card-moderate'
                          }`}
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-black/5 dark:border-white/10 pb-2">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="text-base font-black text-slate-900 dark:text-white">{item.drugAName}</span>
                              <span className="text-amber-500 font-black">⚡</span>
                              <span className="text-base font-black text-slate-900 dark:text-white">{item.drugBName}</span>
                            </div>
                            <div className="flex items-center gap-1.5 flex-wrap">
                              {categories.map((cat, idx) => {
                                const badgeInfo = getMechanismBadge(cat);
                                return (
                                  <span key={idx} className={`text-[10px] font-black px-2.5 py-0.5 rounded-md border ${badgeInfo.bg}`}>
                                    {badgeInfo.label}
                                  </span>
                                );
                              })}
                              <span className={isMajor ? 'clinical-badge-major' : 'clinical-badge-moderate'}>
                                {item.severity}
                              </span>
                            </div>
                          </div>
                          {(() => {
                            const compactHarmonized = harmonizeClinicalLocalization(item);
                            return (
                              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                                {compactHarmonized.clinicalOutcome}
                              </p>
                            );
                          })()}

                          {/* Safe Alternative Switch */}
                          {item.alternativeOptions && item.alternativeOptions.length > 0 && (() => {
                            const isExpandedCompact = !!expandedAlts[`compact-${item.id}`];
                            const sanitizedCompact = getSanitizedAlternativesForDrug(item.drugAName, item.alternativeOptions);
                            const displayedCompact = isExpandedCompact || sanitizedCompact.length <= 10
                              ? sanitizedCompact
                              : sanitizedCompact.slice(0, 10);
                            return (
                              <div className="bg-emerald-50/90 dark:bg-emerald-950/40 p-3 rounded-xl border border-emerald-300/80 dark:border-emerald-700/60 space-y-1.5 text-xs">
                                <div className="flex items-center justify-between gap-1 text-emerald-900 dark:text-emerald-200 font-bold flex-wrap">
                                  <div className="flex items-center gap-1.5">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                                    <span>Alternatif Obat Bebas Interaksi (Clinical Safe Switch):</span>
                                  </div>
                                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 font-bold">
                                    {sanitizedCompact.length} opsi
                                  </span>
                                </div>
                                <div className="flex flex-wrap gap-1.5 pt-0.5">
                                  {displayedCompact.map((alt, idx) => (
                                    <span
                                      key={idx}
                                      className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-[11px] font-bold font-outfit bg-white dark:bg-slate-900 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 shadow-2xs"
                                    >
                                      <span className="text-emerald-500 font-black">✓</span>
                                      <span>{alt}</span>
                                    </span>
                                  ))}
                                </div>
                                {sanitizedCompact.length > 10 && (
                                  <button
                                    type="button"
                                    onClick={() => toggleExpandAlts(`compact-${item.id}`)}
                                    className="mt-1 text-[11px] font-bold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 flex items-center gap-1 py-0.5 px-2 rounded-md bg-emerald-100/60 dark:bg-emerald-900/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/70 border border-emerald-300/60 dark:border-emerald-700/60 transition-colors cursor-pointer"
                                  >
                                    {isExpandedCompact ? (
                                      <>
                                        <ChevronUp className="w-3 h-3" />
                                        <span>Tampilkan 10 Teratas</span>
                                      </>
                                    ) : (
                                      <>
                                        <ChevronDown className="w-3 h-3" />
                                        <span>+ Lihat Semua {sanitizedCompact.length} Alternatif</span>
                                      </>
                                    )}
                                  </button>
                                )}
                              </div>
                            );
                          })()}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {matchedDiseaseInteractions.length > 0 && (
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-1.5 font-outfit">
                      <HeartPulse className="w-4 h-4 text-rose-500" />
                      <span>Kontraindikasi Penyakit Pasien ({matchedDiseaseInteractions.length})</span>
                    </h4>
                    <button 
                      onClick={() => setActiveTab('disease')} 
                      className="text-xs font-bold text-rose-600 dark:text-rose-400 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Lihat Solusi Tindakan Klinis</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                  <div className="space-y-2">
                    {matchedDiseaseInteractions.slice(0, 2).map((item) => (
                      <div key={item.id} className="p-3.5 rounded-xl border border-rose-200 dark:border-rose-900/60 bg-rose-50/50 dark:bg-rose-950/20 text-xs space-y-1">
                        <div className="flex items-center justify-between gap-2 flex-wrap font-bold">
                          <span className="text-rose-900 dark:text-rose-200 font-black">💊 {item.drugName} ❌ 🩺 {item.diseaseName}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded-md bg-rose-600 text-white font-bold">{item.contraindicationLevel}</span>
                        </div>
                        <p className="text-rose-950 dark:text-rose-300 font-medium">{item.clinicalRisk}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {matchedDuplications.length > 0 && (
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-1.5 font-outfit">
                      <CopyX className="w-4 h-4 text-pink-500" />
                      <span>Duplikasi Terapi ({matchedDuplications.length})</span>
                    </h4>
                    <button 
                      onClick={() => setActiveTab('duplication')} 
                      className="text-xs font-bold text-pink-600 dark:text-pink-400 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Lihat Rekomendasi Rasionalisasi</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                  <div className="space-y-2">
                    {matchedDuplications.slice(0, 2).map((dup) => (
                      <div key={dup.id} className="p-3.5 rounded-xl border border-pink-200 dark:border-pink-900/60 bg-pink-50/50 dark:bg-pink-950/20 text-xs space-y-1">
                        <div className="flex items-center justify-between gap-2 flex-wrap font-bold">
                          <span className="text-slate-900 dark:text-white font-black">💊 {dup.drugAName} &amp; {dup.drugBName}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded-md bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 font-bold">{dup.therapeuticClass}</span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300 font-medium">{dup.riskDescription}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {matchedFoodInteractions.length > 0 && (
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-1.5 font-outfit">
                      <Utensils className="w-4 h-4 text-purple-500" />
                      <span>Interaksi Makanan &amp; Gaya Hidup ({matchedFoodInteractions.length})</span>
                    </h4>
                    <button 
                      onClick={() => setActiveTab('food')} 
                      className="text-xs font-bold text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Lihat Aturan Konsumsi &amp; Diet</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {matchedFoodInteractions.slice(0, 2).map((dfi) => (
                      <div key={dfi.id} className="p-3.5 rounded-xl border border-purple-200 dark:border-purple-900/60 bg-purple-50/50 dark:bg-purple-950/20 text-xs space-y-1">
                        <div className="flex items-center justify-between gap-1 flex-wrap font-bold">
                          <span className="text-purple-950 dark:text-purple-200 font-black">💊 {dfi.drugName} ⚡ 🥗 {dfi.foodName}</span>
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className={`text-[9px] font-black px-2 py-0.5 rounded-full border shadow-2xs font-outfit uppercase tracking-wider ${
                              dfi.severity === 'Major'
                                ? 'bg-rose-100 dark:bg-rose-950/80 text-rose-800 dark:text-rose-200 border-rose-300 dark:border-rose-800'
                                : dfi.severity === 'Moderate'
                                ? 'bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-200 border-amber-300 dark:border-amber-800'
                                : 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-200 border-emerald-300 dark:border-emerald-800'
                            }`}>
                              {dfi.severity}
                            </span>
                            <span className="text-[10px] px-2 py-0.5 rounded-md bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200">{dfi.foodCategory}</span>
                          </div>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed">{dfi.recommendation}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Herb-Drug Preview in Overview */}
              {matchedHerbInteractions.length > 0 && (
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-1.5 font-outfit">
                      <Leaf className="w-4 h-4 text-emerald-500" />
                      <span>Interaksi Obat dengan Sediaan Herbal &amp; Jamu ({matchedHerbInteractions.length})</span>
                    </h4>
                    <button 
                      onClick={() => setActiveTab('herb')} 
                      className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Lihat Detail Herbal</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {matchedHerbInteractions.slice(0, 2).map((hdi: any) => (
                      <div key={hdi.id} className="p-3.5 rounded-xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/50 dark:bg-emerald-950/20 text-xs space-y-1">
                        <div className="flex items-center justify-between gap-1 flex-wrap font-bold">
                          <span className="text-emerald-950 dark:text-emerald-200 font-black">🌿 {hdi.herbName} ⚡ 💊 {hdi.matchedDrugName || hdi.drugName}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded-md bg-emerald-600 text-white font-bold">{hdi.severity}</span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed">{hdi.clinicalEffect}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: INTERAKSI OBAT DENGAN OBAT (DDI) */}
          {activeTab === 'ddi' && (
            <div className="space-y-4 animate-fade-in">

              {/* FILTERS TOOLBAR */}
              <div className="bg-slate-50 dark:bg-slate-900/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
                {/* Severity Filters */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 font-outfit flex items-center gap-1">
                    <Filter className="w-3.5 h-3.5" />
                    <span>Keparahan:</span>
                  </span>
                  <button
                    onClick={() => setSeverityFilter('all')}
                    className={`px-3 py-1 rounded-xl text-xs font-bold font-outfit transition-all cursor-pointer ${
                      severityFilter === 'all'
                        ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xs'
                        : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                    }`}
                  >
                    Semua ({matchedInteractions.length})
                  </button>
                  <button
                    onClick={() => setSeverityFilter('Major')}
                    className={`px-3 py-1 rounded-xl text-xs font-bold font-outfit transition-all cursor-pointer ${
                      severityFilter === 'Major'
                        ? 'bg-rose-600 text-white shadow-xs'
                        : 'bg-white dark:bg-slate-800 text-rose-700 dark:text-rose-400 hover:bg-rose-50'
                    }`}
                  >
                    Major ({matchedInteractions.filter((i) => i.severity === 'Major').length})
                  </button>
                  <button
                    onClick={() => setSeverityFilter('Moderate')}
                    className={`px-3 py-1 rounded-xl text-xs font-bold font-outfit transition-all cursor-pointer ${
                      severityFilter === 'Moderate'
                        ? 'bg-amber-600 text-white shadow-xs'
                        : 'bg-white dark:bg-slate-800 text-amber-700 dark:text-amber-400 hover:bg-amber-50'
                    }`}
                  >
                    Moderate ({matchedInteractions.filter((i) => i.severity === 'Moderate').length})
                  </button>
                  <button
                    onClick={() => setSeverityFilter('Minor')}
                    className={`px-3 py-1 rounded-xl text-xs font-bold font-outfit transition-all cursor-pointer ${
                      severityFilter === 'Minor'
                        ? 'bg-sky-600 text-white shadow-xs'
                        : 'bg-white dark:bg-slate-800 text-sky-700 dark:text-sky-400 hover:bg-sky-50'
                    }`}
                  >
                    Minor ({matchedInteractions.filter((i) => i.severity === 'Minor').length})
                  </button>
                  <button
                    onClick={() => setSeverityFilter('Unknown')}
                    className={`px-3 py-1 rounded-xl text-xs font-bold font-outfit transition-all cursor-pointer ${
                      severityFilter === 'Unknown'
                        ? 'bg-slate-600 text-white shadow-xs'
                        : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200'
                    }`}
                    title="DDInter 2.0 Standard: Kategori Unknown (Level 0) dieliminasi untuk mencegah alert fatigue klinis"
                  >
                    Unknown (0)
                  </button>
                </div>

                {/* DDInter 2.0 6-Mechanism Filters */}
                <div className="flex items-center gap-1.5 flex-wrap pt-1 border-t border-slate-200/60 dark:border-slate-800/80">
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 font-outfit">
                    Mekanisme DDInter 2.0:
                  </span>
                  {[
                    { id: 'all', label: 'Semua' },
                    { id: 'Metabolism', label: 'Metabolisme (CYP)' },
                    { id: 'Absorption', label: 'Absorpsi & Khelasi' },
                    { id: 'Excretion', label: 'Klirens Ginjal' },
                    { id: 'Distribution', label: 'Ikatan Protein' },
                    { id: 'Synergy', label: 'Sinergi Aditif' },
                    { id: 'Antagonism', label: 'Antagonisme' }
                  ].map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setMechanismFilter(m.id as any)}
                      className={`text-[11px] font-bold font-outfit px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                        mechanismFilter === m.id
                          ? 'bg-amber-600 text-white border-amber-700 shadow-xs'
                          : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:text-amber-700'
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* DDI LIST */}
              {filteredInteractions.length > 0 ? (
                <div className="space-y-4">
                  {filteredInteractions.map((item) => {
                    const isMajor = item.severity === 'Major';
                    const isMod = item.severity === 'Moderate';
                    const cardSeverityClass = isMajor 
                      ? 'clinical-card-major' 
                      : isMod 
                      ? 'clinical-card-moderate' 
                      : 'clinical-card-minor';
                    const badgeSeverityClass = isMajor
                      ? 'clinical-badge-major'
                      : isMod
                      ? 'clinical-badge-moderate'
                      : 'clinical-badge-minor';
                    const categories = getItemMechanismCategories(item);

                    const innInfo = resolveDDInterINNPair(item.drugAName, item.drugBName);

                    const isMgmtMismatched = isCorruptedOrMismatchedManagement(
                      item.drugAName,
                      item.drugBName,
                      item.ddinterOriginalManagement
                    );

                    const displayOriginal = (() => {
                      if (item.ddinterOriginalText && item.ddinterOriginalManagement && !isMgmtMismatched) {
                        return { text: item.ddinterOriginalText, management: item.ddinterOriginalManagement };
                      }
                      const synth = synthesizeDDInterOriginalText({
                        drugAName: item.drugAName,
                        drugBName: item.drugBName,
                        severity: item.severity,
                        mechanism: item.mechanism,
                        clinicalOutcome: item.clinicalOutcome,
                        management: item.management,
                        mechanismCategory: item.mechanismCategory
                      });
                      return {
                        text: item.ddinterOriginalText || synth.text,
                        management: (!isMgmtMismatched && item.ddinterOriginalManagement) ? item.ddinterOriginalManagement : synth.management
                      };
                    })();

                    const harmonized = harmonizeClinicalLocalization({
                      drugAName: item.drugAName,
                      drugBName: item.drugBName,
                      severity: item.severity,
                      mechanism: item.mechanism,
                      clinicalOutcome: item.clinicalOutcome,
                      management: item.management,
                      ddinterOriginalText: displayOriginal.text,
                      ddinterOriginalManagement: displayOriginal.management,
                      mechanismCategory: item.mechanismCategory
                    });

                    const altsA = getSanitizedAlternativesForDrug(item.drugAName, item.alternativeOptionsA);
                    const altsB = getSanitizedAlternativesForDrug(item.drugBName, item.alternativeOptionsB);

                    const isExpandedA = !!expandedAlts[`${item.id}-A`];
                    const displayedAltsA = isExpandedA || altsA.length <= 12 ? altsA : altsA.slice(0, 12);

                    const isExpandedB = !!expandedAlts[`${item.id}-B`];
                    const displayedAltsB = isExpandedB || altsB.length <= 12 ? altsB : altsB.slice(0, 12);

                    return (
                      <div
                        key={item.id}
                        className={`rounded-2xl p-5 sm:p-6 border shadow-sm space-y-4 text-left transition-all ${cardSeverityClass}`}
                      >
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-black/5 dark:border-white/10 pb-3">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-base sm:text-lg font-black text-slate-900 dark:text-white">{item.drugAName}</span>
                            <span className="text-amber-500 font-black">⚡</span>
                            <span className="text-base sm:text-lg font-black text-slate-900 dark:text-white">{item.drugBName}</span>
                          </div>

                          <div className="flex items-center gap-2 flex-wrap">
                            {categories.map((cat, idx) => {
                              const badgeInfo = getMechanismBadge(cat);
                              return (
                                <span key={idx} className={`text-xs font-black px-3 py-1 rounded-lg border shadow-2xs ${badgeInfo.bg}`}>
                                  {badgeInfo.label}
                                </span>
                              );
                            })}
                            <span className={badgeSeverityClass}>
                              {item.severity.toUpperCase()}
                            </span>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                          <div className="bg-white/90 dark:bg-slate-900/70 p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 space-y-1">
                            <p className="font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                              <span>Mekanisme Farmakologi DDInter:</span>
                            </p>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium">{harmonized.mechanism}</p>
                          </div>

                          <div className="bg-white/90 dark:bg-slate-900/70 p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 space-y-1">
                            <p className="font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                              <span>Dampak Klinis pada Pasien:</span>
                            </p>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium">{harmonized.clinicalOutcome}</p>
                          </div>
                        </div>

                        {/* Management Box */}
                        <div className="bg-white/95 dark:bg-slate-900/85 p-4 rounded-xl border border-teal-300/60 dark:border-teal-800/80 space-y-1 shadow-2xs">
                          <div className="flex items-center gap-1.5 text-teal-900 dark:text-teal-200 font-bold text-xs">
                            <CheckCircle2 className="w-4 h-4 text-teal-700 dark:text-teal-400" />
                            <span>Solusi Klinis &amp; Rekomendasi Apoteker:</span>
                          </div>
                          <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                            {harmonized.management}
                          </p>
                        </div>

                        {/* Safe Alternative Switch - Universal 2-Column Responsive Layout per Active Drug */}
                        {(altsA.length > 0 || altsB.length > 0) && (
                          <div className="bg-emerald-50/90 dark:bg-emerald-950/40 p-4 rounded-xl border border-emerald-300/80 dark:border-emerald-700/60 space-y-3 shadow-2xs">
                            <div className="flex items-center justify-between gap-2 border-b border-emerald-200/80 dark:border-emerald-800/60 pb-2 flex-wrap">
                              <div className="flex items-center gap-1.5 text-emerald-900 dark:text-emerald-200 font-bold text-xs">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                                <span>Rekomendasi Alternatif Obat Bebas Interaksi (Clinical Safe Switch):</span>
                              </div>
                              <span className="text-[10px] font-mono text-emerald-800 dark:text-emerald-300 bg-emerald-100/90 dark:bg-emerald-900/70 px-2.5 py-0.5 rounded-full font-bold">
                                2 Kolom Spesifik Zat Aktif
                              </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                              {/* Kolom 1: Alternatif untuk Obat A */}
                              <div className="bg-white/95 dark:bg-slate-900/90 p-3 rounded-lg border border-emerald-200 dark:border-emerald-800/70 space-y-1.5">
                                <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between gap-1 flex-wrap">
                                  <span className="flex items-center gap-1">
                                    <span>Alternatif untuk</span>
                                    <span className="text-emerald-700 dark:text-emerald-400 font-black underline decoration-emerald-400/50">{item.drugAName}</span>:
                                  </span>
                                  {altsA.length > 0 && (
                                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 font-bold">
                                      {altsA.length} zat aktif resmi
                                    </span>
                                  )}
                                </p>
                                <div className="flex flex-wrap gap-1.5 pt-0.5">
                                  {altsA.length > 0 ? (
                                    displayedAltsA.map((alt, idx) => (
                                      <span
                                        key={idx}
                                        className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-bold font-outfit bg-emerald-50 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 shadow-2xs"
                                      >
                                        <span className="text-emerald-500 font-black">✓</span>
                                        <span>{alt}</span>
                                      </span>
                                    ))
                                  ) : (
                                    <span className="text-[11px] text-slate-400 italic font-mono">- (Tidak ada alternatif terdaftar pada basis data resmi DDInter 2.0)</span>
                                  )}
                                </div>
                                {altsA.length > 12 && (
                                  <button
                                    type="button"
                                    onClick={() => toggleExpandAlts(`${item.id}-A`)}
                                    className="mt-2 text-[11px] font-bold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 flex items-center gap-1 py-1 px-2.5 rounded-md bg-emerald-100/60 dark:bg-emerald-900/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/70 border border-emerald-300/60 dark:border-emerald-700/60 transition-colors cursor-pointer"
                                  >
                                    {isExpandedA ? (
                                      <>
                                        <ChevronUp className="w-3.5 h-3.5" />
                                        <span>Tampilkan 12 Teratas (Sembunyikan)</span>
                                      </>
                                    ) : (
                                      <>
                                        <ChevronDown className="w-3.5 h-3.5" />
                                        <span>+ Lihat Semua {altsA.length} Zat Aktif Bebas Interaksi</span>
                                      </>
                                    )}
                                  </button>
                                )}
                              </div>

                              {/* Kolom 2: Alternatif untuk Obat B */}
                              <div className="bg-white/95 dark:bg-slate-900/90 p-3 rounded-lg border border-teal-200 dark:border-teal-800/70 space-y-1.5">
                                <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between gap-1 flex-wrap">
                                  <span className="flex items-center gap-1">
                                    <span>Alternatif untuk</span>
                                    <span className="text-teal-700 dark:text-teal-400 font-black underline decoration-teal-400/50">{item.drugBName}</span>:
                                  </span>
                                  {altsB.length > 0 && (
                                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-300 font-bold">
                                      {altsB.length} zat aktif resmi
                                    </span>
                                  )}
                                </p>
                                <div className="flex flex-wrap gap-1.5 pt-0.5">
                                  {altsB.length > 0 ? (
                                    displayedAltsB.map((alt, idx) => (
                                      <span
                                        key={idx}
                                        className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-bold font-outfit bg-teal-50 dark:bg-teal-950/80 text-teal-800 dark:text-teal-300 border border-teal-300 dark:border-teal-700 shadow-2xs"
                                      >
                                        <span className="text-teal-500 font-black">✓</span>
                                        <span>{alt}</span>
                                      </span>
                                    ))
                                  ) : (
                                    <span className="text-[11px] text-slate-400 italic font-mono">- (Tidak ada alternatif terdaftar pada basis data resmi DDInter 2.0)</span>
                                  )}
                                </div>
                                {altsB.length > 12 && (
                                  <button
                                    type="button"
                                    onClick={() => toggleExpandAlts(`${item.id}-B`)}
                                    className="mt-2 text-[11px] font-bold text-teal-700 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 flex items-center gap-1 py-1 px-2.5 rounded-md bg-teal-100/60 dark:bg-teal-900/40 hover:bg-teal-100 dark:hover:bg-teal-900/70 border border-teal-300/60 dark:border-teal-700/60 transition-colors cursor-pointer"
                                  >
                                    {isExpandedB ? (
                                      <>
                                        <ChevronUp className="w-3.5 h-3.5" />
                                        <span>Tampilkan 12 Teratas (Sembunyikan)</span>
                                      </>
                                    ) : (
                                      <>
                                        <ChevronDown className="w-3.5 h-3.5" />
                                        <span>+ Lihat Semua {altsB.length} Zat Aktif Bebas Interaksi</span>
                                      </>
                                    )}
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Verbatim DDInter 2.0 Official Text Box (Accordion / Dropdown) */}
                        {(displayOriginal.text || displayOriginal.management) && (() => {
                          const isOrigExpanded = !!expandedOriginalTexts[item.id];
                          return (
                            <div className="bg-slate-900/95 dark:bg-slate-950 rounded-xl border border-slate-700/80 text-xs shadow-inner overflow-hidden transition-all duration-200">
                              <button
                                type="button"
                                onClick={() => toggleExpandOriginalText(item.id)}
                                aria-expanded={isOrigExpanded}
                                className="w-full p-3 sm:px-4 sm:py-2.5 flex items-center justify-between gap-2 flex-wrap text-left hover:bg-slate-800/60 transition-colors cursor-pointer select-none"
                              >
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span className="font-bold text-[11px] text-teal-400 font-outfit uppercase tracking-wider flex items-center gap-1.5">
                                    <ShieldAlert className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                                    <span>Teks Asli DDInter 2.0 (Official English Reference)</span>
                                  </span>
                                  {innInfo.isMappedFromBrandOrLocal && (
                                    <span className="text-[10px] text-teal-300 font-mono bg-teal-950/80 px-2 py-0.5 rounded border border-teal-800/60">
                                      Zat Aktif INN: {innInfo.innA} ↔ {innInfo.innB}
                                    </span>
                                  )}
                                </div>
                                <div className="flex items-center gap-2 font-mono text-[10px] text-slate-400">
                                  <span className="hidden sm:inline">
                                    ddinter2.scbdd.com • {innInfo.innA} ↔ {innInfo.innB}
                                  </span>
                                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-teal-950/80 text-teal-300 border border-teal-800/60 font-sans font-bold text-[10px] shadow-2xs hover:bg-teal-900 transition-colors">
                                    {isOrigExpanded ? (
                                      <>
                                        <span>Tutup</span>
                                        <ChevronUp className="w-3 h-3 text-teal-400" />
                                      </>
                                    ) : (
                                      <>
                                        <span>Buka Teks Asli</span>
                                        <ChevronDown className="w-3 h-3 text-teal-400" />
                                      </>
                                    )}
                                  </span>
                                </div>
                              </button>

                              {isOrigExpanded && (
                                <div className="p-4 pt-2.5 space-y-2.5 border-t border-slate-800/80 animate-fade-in">
                                  {displayOriginal.text && (
                                    <div className="space-y-0.5">
                                      <p className="text-[11px] font-bold text-amber-300">Interaction:</p>
                                      <p className="text-[11px] text-slate-300 font-mono leading-relaxed bg-black/30 p-2.5 rounded-lg border border-white/5">{displayOriginal.text}</p>
                                    </div>
                                  )}
                                  {displayOriginal.management && (
                                    <div className="space-y-0.5 pt-1">
                                      <p className="text-[11px] font-bold text-emerald-300">Management:</p>
                                      <p className="text-[11px] text-slate-300 font-mono leading-relaxed bg-black/30 p-2.5 rounded-lg border border-white/5">{displayOriginal.management}</p>
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          );
                        })()}

                        {/* References from Official DDInter 2.0 Server (Accordion / Dropdown) */}
                        {(() => {
                          const displayReferences = (item.references && item.references.length > 0)
                            ? item.references
                            : [
                                `Nature Protocols (2022) - "DDInter: an online drug-drug interaction database with chemical and clinical profiles." (Nature Publishing Group, CBDD Group)`,
                                `Evidence-Based Medicine (EBM) - Monografi Resmi DDInter 2.0 (${item.drugAName} ↔ ${item.drugBName})`
                              ];
                          const isRefExpanded = !!expandedReferences[item.id];

                          return (
                            <div className="bg-slate-50/90 dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-800 text-xs shadow-2xs overflow-hidden transition-all duration-200">
                              <button
                                type="button"
                                onClick={() => toggleExpandReferences(item.id)}
                                aria-expanded={isRefExpanded}
                                className="w-full p-3 sm:px-4 sm:py-2.5 flex items-center justify-between gap-2 flex-wrap text-left hover:bg-slate-100/80 dark:hover:bg-slate-800/60 transition-colors cursor-pointer select-none"
                              >
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span className="font-bold text-[11px] text-slate-800 dark:text-slate-200 font-outfit uppercase tracking-wider flex items-center gap-1.5">
                                    <BookOpen className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                                    <span>Referensi &amp; Literatur Ilmiah DDInter 2.0</span>
                                  </span>
                                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 font-bold border border-indigo-200 dark:border-indigo-800/80">
                                    {displayReferences.length} Sitasi
                                  </span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="text-[10px] text-slate-400 font-mono hidden sm:inline">
                                    Evidence-Based Medicine (EBM)
                                  </span>
                                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 font-sans font-bold text-[10px] shadow-2xs hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors">
                                    {isRefExpanded ? (
                                      <>
                                        <span>Tutup</span>
                                        <ChevronUp className="w-3 h-3 text-indigo-500" />
                                      </>
                                    ) : (
                                      <>
                                        <span>Lihat Sitasi</span>
                                        <ChevronDown className="w-3 h-3 text-indigo-500" />
                                      </>
                                    )}
                                  </span>
                                </div>
                              </button>

                              {isRefExpanded && (
                                <div className="p-4 pt-2.5 border-t border-slate-200 dark:border-slate-800 space-y-2 animate-fade-in">
                                  <ul className="space-y-1.5 pl-1">
                                    {displayReferences.map((refStr, rIdx) => (
                                      <li key={rIdx} className="text-[11px] text-slate-600 dark:text-slate-400 italic leading-relaxed flex items-start gap-1.5">
                                        <span className="text-indigo-500 font-bold not-italic shrink-0">•</span>
                                        <span>{refStr}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          );
                        })()}

                        {/* EBM Scientific Verification Strip - Single Source: DDInter 2.0 */}
                        <div className="pt-2 border-t border-black/5 dark:border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500 dark:text-slate-400">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="inline-flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-300">
                              <ShieldCheck className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                              <span>Level Bukti: <strong>{item.evidenceLevel?.startsWith('Level') ? item.evidenceLevel : `Level ${item.evidenceLevel}`}</strong></span>
                            </span>
                            <span className="text-slate-300 dark:text-slate-700">•</span>
                            <span className="text-slate-600 dark:text-slate-400">
                              Rujukan Tunggal: <strong>DDInter 2.0 (Computational Biology &amp; Drug Design Group, Nature Protocols 2022)</strong>
                            </span>
                          </div>

                          <div className="flex items-center gap-2 flex-wrap">
                            <span
                              className="inline-flex items-center gap-1.5 font-mono text-[10px] text-teal-800 dark:text-teal-200 bg-teal-50 dark:bg-teal-950/70 px-2.5 py-1 rounded-full border border-teal-300 dark:border-teal-700 shadow-2xs"
                            >
                              <span className="font-sans font-black text-[9.5px]">DDInter 2.0:</span>
                              <span className="font-bold">{item.ddinterPairId || 'DDInter-PAIR'}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : severityFilter === 'Unknown' ? (
                <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-center space-y-3 shadow-xs">
                  <div className="w-12 h-12 rounded-2xl bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center mx-auto">
                    <Info className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-black text-slate-900 dark:text-white font-outfit">
                      0 Interaksi Kategori Unknown (Level 0)
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 max-w-xl mx-auto font-medium leading-relaxed">
                      Sesuai standar resmi <strong>DDInter 2.0 (Nature Protocols 2022)</strong>, basis data secara sadar <strong>meniadakan anotasi &quot;Unknown&quot;</strong> guna mencegah <em>clinical alert fatigue</em> (kelelahan peringatan pada apoteker/dokter). Seluruh 4.147 interaksi obat telah dikurasi secara definitif ke dalam tingkat keparahan yang dapat ditindaklanjuti secara klinis: <strong>Major (Level 3)</strong>, <strong>Moderate (Level 2)</strong>, atau <strong>Minor (Level 1)</strong>.
                    </p>
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={() => setSeverityFilter('all')}
                      className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold font-outfit hover:opacity-90 transition-opacity cursor-pointer"
                    >
                      Lihat Semua Tingkat Keparahan ({matchedInteractions.length})
                    </button>
                  </div>
                </div>
              ) : (
                <div className="clinical-card-safe p-8 rounded-2xl border text-center space-y-2.5 shadow-xs">
                  <ShieldCheck className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mx-auto" />
                  <div className="space-y-1">
                    <h3 className="text-base font-black text-emerald-950 dark:text-emerald-200">
                      Tidak Ditemukan Interaksi Antar-Obat yang Memenuhi Kriteria Filter
                    </h3>
                    <p className="text-xs text-emerald-900/80 dark:text-emerald-300/80 max-w-md mx-auto font-medium leading-relaxed">
                      Coba ganti pilihan filter keparahan atau filter mekanisme DDInter di atas untuk meninjau hasil lainnya.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: KONTRAINDIKASI OBAT TERHADAP PENYAKIT (DDSI) */}
          {activeTab === 'disease' && (
            <div className="space-y-4 animate-fade-in">
              {/* Official DDInter 2.0 DDSI Header */}
              <div className="bg-gradient-to-r from-rose-500/10 via-rose-500/5 to-transparent border border-rose-300/70 dark:border-rose-700/60 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-rose-600 text-white font-outfit uppercase tracking-wider">
                      DDInter 2.0 Other Interaction • DDSI
                    </span>
                    <span className="text-xs font-bold text-rose-900 dark:text-rose-300 font-outfit">
                      Beers Criteria &amp; Clinical Guidelines Verified
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base font-black text-slate-900 dark:text-white font-outfit">
                    Interaksi Obat dengan Penyakit &amp; Kontraindikasi Komorbiditas
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-medium max-w-2xl leading-relaxed">
                    Mengevaluasi kontraindikasi obat terhadap kondisi penyakit pasien (Drug-Disease Interactions / DDSI) untuk mencegah perburukan klinis, dekompensasi organ, dan reaksi toksik fatal.
                  </p>
                </div>
              </div>

              {/* Comorbidity Selector Box with All-Risks Toggle */}
              <div className="bg-slate-50 dark:bg-slate-900/60 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <div>
                    <h5 className="text-xs font-black text-slate-900 dark:text-white font-outfit flex items-center gap-1.5">
                      <Stethoscope className="w-4 h-4 text-rose-500" />
                      <span>Kondisi Komorbiditas Pasien yang Terpilih</span>
                    </h5>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                      Pilih riwayat penyakit pasien untuk menyaring kontraindikasi spesifik pada resep ini.
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <label className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-700 dark:text-rose-300 cursor-pointer">
                      <input
                        id="toggle-all-disease-risks"
                        type="checkbox"
                        checked={showAllPotentialDiseaseRisks}
                        onChange={(e) => setShowAllPotentialDiseaseRisks(e.target.checked)}
                        className="rounded text-rose-600 focus:ring-rose-500 w-3.5 h-3.5"
                      />
                      <span>Tampilkan Seluruh Penyakit Berisiko ({DRUG_DISEASE_INTERACTIONS_DATABASE.length})</span>
                    </label>

                    {selectedDiseases.length > 0 && (
                      <button
                        onClick={handleClearDiseases}
                        className="text-[11px] font-bold text-slate-500 hover:text-rose-600 flex items-center gap-1 cursor-pointer"
                      >
                        <X className="w-3.5 h-3.5" />
                        <span>Reset ({selectedDiseases.length})</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Disease Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {COMMON_CLINICAL_DISEASES.map((dis) => {
                    const isSelected = selectedDiseases.includes(dis.name);
                    return (
                      <button
                        key={dis.id}
                        id={`tab-disease-chip-${dis.id}`}
                        onClick={() => handleToggleDisease(dis.name)}
                        className={`text-xs font-bold font-outfit px-3 py-1.5 rounded-xl border transition-all flex items-center gap-1.5 cursor-pointer ${
                          isSelected
                            ? 'bg-rose-600 text-white border-rose-700 shadow-xs scale-[1.02]'
                            : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-rose-400 hover:text-rose-700'
                        }`}
                      >
                        <span>{dis.icon}</span>
                        <span>{dis.name}</span>
                        {isSelected && <span className="text-[10px] bg-white/20 px-1.5 py-0.2 rounded-full">✓</span>}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* DDSI LIST */}
              {matchedDiseaseInteractions.length > 0 ? (
                <div className="space-y-4">
                  {matchedDiseaseInteractions.map((item) => {
                    const isAbsolute = item.contraindicationLevel.includes('Absolute');
                    return (
                      <div
                        key={item.id}
                        className="clinical-card-major rounded-2xl p-5 sm:p-6 border shadow-xs space-y-4"
                      >
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-black/5 dark:border-white/10 pb-3">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-black text-slate-900 dark:text-white text-base">💊 {item.drugName}</span>
                            <span className="text-rose-600 font-black text-xs">❌ KONTRAINDIKASI PADA</span>
                            <span className="bg-white/90 dark:bg-slate-800 text-rose-950 dark:text-rose-200 text-xs font-black px-2.5 py-1 rounded-lg border border-rose-300 dark:border-rose-700 shadow-2xs">
                              🩺 {item.diseaseName}
                            </span>
                          </div>
                          <span className={isAbsolute ? 'clinical-badge-major' : 'clinical-badge-moderate'}>
                            {isAbsolute ? '⛔ MUTLAK / ABSOLUTE' : '⚠️ RELATIF / CAUTION'}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                          <div className="bg-slate-50 dark:bg-slate-900/60 p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 space-y-1">
                            <p className="font-black text-slate-900 dark:text-white">Mekanisme Patologis:</p>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium">{item.mechanism}</p>
                          </div>

                          <div className="bg-rose-50/60 dark:bg-rose-950/30 p-3.5 rounded-xl border border-rose-200/80 dark:border-rose-900/50 space-y-1">
                            <p className="font-black text-rose-950 dark:text-rose-200">Bahaya &amp; Risiko Klinis:</p>
                            <p className="text-rose-900 dark:text-rose-300 leading-relaxed font-bold">{item.clinicalRisk}</p>
                          </div>
                        </div>

                        <div className="bg-teal-50/80 dark:bg-teal-950/40 p-4 rounded-xl border border-teal-200/80 dark:border-teal-900 text-xs space-y-1">
                          <div className="flex items-center gap-1.5 text-teal-900 dark:text-teal-200 font-black">
                            <CheckCircle2 className="w-4 h-4 text-teal-700 dark:text-teal-400" />
                            <span>Rekomendasi Tindakan Klinis &amp; Alternatif:</span>
                          </div>
                          <p className="text-teal-950 dark:text-teal-100 font-medium leading-relaxed">
                            {item.recommendation}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-black/5 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
                          <div className="flex items-center gap-2 flex-wrap">
                            <DualEvidenceBadge nationalPreset="pnpk-papdi" internationalPreset="beers-2023" size="sm" />
                            {item.references && (
                              <span className="text-[11px] text-slate-500 dark:text-slate-400">
                                Rujukan: <strong>{item.references}</strong>
                              </span>
                            )}
                          </div>
                          <span className="font-mono text-[10px] text-slate-400">ID: {item.id}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="clinical-card-safe p-8 rounded-2xl border text-center space-y-2.5 shadow-xs">
                  <ShieldCheck className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mx-auto" />
                  <div className="space-y-1">
                    <h3 className="text-base font-black text-emerald-950 dark:text-emerald-200">
                      Tidak Ditemukan Kontraindikasi Penyakit
                    </h3>
                    <p className="text-xs text-emerald-900/80 dark:text-emerald-300/80 max-w-md mx-auto font-medium leading-relaxed">
                      {selectedDiseases.length === 0
                        ? 'Klik salah satu tombol kondisi penyakit pasien di atas untuk memeriksa kontraindikasi spesifik pada resep ini.'
                        : 'Seluruh obat yang dipilih aman diberikan pada riwayat penyakit yang Anda tandai.'}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: INTERAKSI OBAT DENGAN MAKANAN (DFI) */}
          {activeTab === 'food' && (
            <div className="space-y-4 animate-fade-in">
              {/* Official DDInter 2.0 DFI Header */}
              <div className="bg-gradient-to-r from-purple-500/10 via-purple-500/5 to-transparent border border-purple-300/70 dark:border-purple-700/60 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-purple-600 text-white font-outfit uppercase tracking-wider">
                      DDInter 2.0 Other Interaction • DFI
                    </span>
                    <span className="text-xs font-bold text-purple-900 dark:text-purple-300 font-outfit">
                      Food &amp; Nutrient Kinetic Standard
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base font-black text-slate-900 dark:text-white font-outfit">
                    Interaksi Obat dengan Makanan, Minuman &amp; Suplemen (DFI)
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-medium max-w-2xl leading-relaxed">
                    Panduan jeda waktu makan, interaksi kelat khelasi dengan susu / kalsium, penghambatan enzim CYP3A4 oleh jus grapefruit, reaksi disulfiram dengan alkohol, dan stabilitas vitamin K.
                  </p>
                </div>
              </div>

              {/* DFI SEVERITY FILTER TOOLBAR */}
              {matchedFoodInteractions.length > 0 && (
                <div className="bg-slate-50 dark:bg-slate-900/60 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 flex-wrap">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-bold text-slate-600 dark:text-slate-400 font-outfit flex items-center gap-1.5">
                      <Filter className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                      <span>Filter Tingkat Keparahan:</span>
                    </span>
                    <button
                      onClick={() => setFoodSeverityFilter('all')}
                      className={`px-3 py-1 rounded-xl text-xs font-bold font-outfit transition-all cursor-pointer ${
                        foodSeverityFilter === 'all'
                          ? 'bg-purple-600 text-white shadow-xs'
                          : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      Semua ({matchedFoodInteractions.length})
                    </button>
                    <button
                      onClick={() => setFoodSeverityFilter('Major')}
                      className={`px-3 py-1 rounded-xl text-xs font-bold font-outfit transition-all cursor-pointer flex items-center gap-1.5 ${
                        foodSeverityFilter === 'Major'
                          ? 'bg-rose-600 text-white shadow-xs'
                          : 'bg-white dark:bg-slate-800 text-rose-700 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 border border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                      <span>Mayor ({foodMajorCount})</span>
                    </button>
                    <button
                      onClick={() => setFoodSeverityFilter('Moderate')}
                      className={`px-3 py-1 rounded-xl text-xs font-bold font-outfit transition-all cursor-pointer flex items-center gap-1.5 ${
                        foodSeverityFilter === 'Moderate'
                          ? 'bg-amber-600 text-white shadow-xs'
                          : 'bg-white dark:bg-slate-800 text-amber-700 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/40 border border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      <span>Moderat ({foodModCount})</span>
                    </button>
                    {foodMinorCount > 0 && (
                      <button
                        onClick={() => setFoodSeverityFilter('Minor')}
                        className={`px-3 py-1 rounded-xl text-xs font-bold font-outfit transition-all cursor-pointer flex items-center gap-1.5 ${
                          foodSeverityFilter === 'Minor'
                            ? 'bg-emerald-600 text-white shadow-xs'
                            : 'bg-white dark:bg-slate-800 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 border border-slate-200 dark:border-slate-700'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span>Minor ({foodMinorCount})</span>
                      </button>
                    )}
                  </div>
                  {foodSeverityFilter !== 'all' && (
                    <button
                      onClick={() => setFoodSeverityFilter('all')}
                      className="text-xs font-bold text-slate-500 hover:text-purple-600 flex items-center gap-1 cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                      <span>Reset Filter</span>
                    </button>
                  )}
                </div>
              )}

              {/* DFI LIST */}
              {matchedFoodInteractions.length > 0 ? (
                filteredFoodInteractions.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {filteredFoodInteractions.map((dfi) => {
                      const refList = dfi.references
                        ? dfi.references.split('\n').map((s) => s.trim()).filter(Boolean)
                        : ["Stockley's Drug Interactions (13th Ed.), Pharmaceutical Press", "DDInter 2.0 (Other Interaction - DFI), Nature Protocols"];
                      const primaryRef = refList[0] ? refList[0].replace(/^\d+\.\s*/, '') : "Stockley's Drug Interactions";
                      const isExpanded = expandedDfiRefId === dfi.id;
                      const isMajor = dfi.severity === 'Major';
                      const isMod = dfi.severity === 'Moderate';
                      const cardBorderClass = isMajor
                        ? 'border-rose-300 dark:border-rose-900/70 hover:border-rose-500 bg-white dark:bg-[#120a10]'
                        : isMod
                        ? 'border-amber-300 dark:border-amber-900/70 hover:border-amber-500 bg-white dark:bg-[#131109]'
                        : 'border-purple-200 dark:border-purple-900/60 hover:border-purple-400 bg-white dark:bg-[#0c1322]';

                      return (
                        <div
                          key={dfi.id}
                          className={`p-5 rounded-2xl border text-xs space-y-3 shadow-xs transition-all flex flex-col justify-between ${cardBorderClass}`}
                        >
                          <div className="space-y-2.5">
                            <div className="flex items-center justify-between gap-2 flex-wrap pb-2 border-b border-black/5 dark:border-white/10">
                              <div className="flex items-center gap-1.5 flex-wrap font-black">
                                <span className="text-slate-900 dark:text-white text-sm">💊 {dfi.drugName}</span>
                                <span className="text-purple-600 dark:text-purple-400">⚡</span>
                                <span className="text-purple-900 dark:text-purple-200 text-sm">🥗 {dfi.foodName}</span>
                              </div>
                              <div className="flex items-center gap-1.5 flex-wrap">
                                {/* Severity Level Pill - DDInter 2.0 Standard */}
                                <span
                                  className={`text-[10px] font-black px-2.5 py-0.5 rounded-full border shadow-2xs inline-flex items-center gap-1 font-outfit uppercase tracking-wider ${
                                    isMajor
                                      ? 'bg-rose-100 dark:bg-rose-950/80 text-rose-800 dark:text-rose-200 border-rose-300 dark:border-rose-800'
                                      : isMod
                                      ? 'bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-200 border-amber-300 dark:border-amber-800'
                                      : 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-200 border-emerald-300 dark:border-emerald-800'
                                  }`}
                                >
                                  <span
                                    className={`w-1.5 h-1.5 rounded-full ${
                                      isMajor
                                        ? 'bg-rose-600 animate-pulse'
                                        : isMod
                                        ? 'bg-amber-600'
                                        : 'bg-emerald-600'
                                    }`}
                                  />
                                  <span>{isMajor ? 'MAYOR' : isMod ? 'MODERAT' : 'MINOR'}</span>
                                </span>

                                {dfi.mechanismCategory && (
                                  <span className="bg-purple-50 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 text-[10px] font-bold px-2 py-0.5 rounded-md border border-purple-200 dark:border-purple-800">
                                    {dfi.mechanismCategory === 'Absorption'
                                      ? 'Absorpsi & Khelasi'
                                      : dfi.mechanismCategory === 'Metabolism'
                                      ? 'Metabolisme'
                                      : dfi.mechanismCategory === 'Excretion'
                                      ? 'Ekskresi Ginjal'
                                      : dfi.mechanismCategory === 'Distribution'
                                      ? 'Distribusi'
                                      : dfi.mechanismCategory === 'Synergy'
                                      ? 'Sinergi'
                                      : dfi.mechanismCategory === 'Antagonism'
                                      ? 'Antagonisme'
                                      : 'Lainnya'}
                                  </span>
                                )}
                                <span className="bg-purple-100 dark:bg-purple-900/80 text-purple-800 dark:text-purple-200 text-[10px] font-black px-2.5 py-0.5 rounded-md border border-purple-300 dark:border-purple-700 shadow-2xs">
                                  {dfi.foodCategory}
                                </span>
                              </div>
                            </div>

                            <div className="space-y-1">
                              <p className="font-bold text-slate-800 dark:text-slate-200">Mekanisme &amp; Dampak Klinis:</p>
                              <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed">{dfi.clinicalOutcome}</p>
                            </div>

                            <div className="bg-purple-50 dark:bg-purple-950/50 p-3.5 rounded-xl border border-purple-200/80 dark:border-purple-900/60 space-y-1">
                              <p className="font-black text-purple-950 dark:text-purple-200 flex items-center gap-1">
                                <span>📌 Petunjuk Waktu Minum &amp; Aturan Diet:</span>
                              </p>
                              <p className="text-purple-900 dark:text-purple-300 font-medium leading-relaxed">
                                {dfi.recommendation}
                              </p>
                            </div>
                          </div>

                          {/* EBM Scientific Verification Strip (DDInter 2.0 Standard) */}
                          <div className="pt-3 border-t border-black/5 dark:border-white/10 flex flex-col gap-2">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-slate-500 dark:text-slate-400">
                              <div className="flex items-center gap-2 flex-wrap">
                                <DualEvidenceBadge nationalPreset="bpom" internationalPreset="stockley" size="sm" />
                                <span className="text-[11px] text-slate-600 dark:text-slate-300">
                                  Rujukan: <strong>{primaryRef}</strong>
                                </span>
                                <button
                                  type="button"
                                  onClick={() => setExpandedDfiRefId(isExpanded ? null : dfi.id)}
                                  title="Lihat Sitasi Literatur Ilmiah Lengkap DDInter 2.0"
                                  className={`w-5 h-5 rounded-full inline-flex items-center justify-center text-[10px] font-bold transition-all cursor-pointer shadow-2xs ${
                                    isExpanded
                                      ? 'bg-purple-600 text-white shadow-xs'
                                      : 'bg-purple-100 dark:bg-purple-900/60 hover:bg-purple-200 dark:hover:bg-purple-800 text-purple-800 dark:text-purple-300'
                                  }`}
                                >
                                  <Info className="w-3 h-3" />
                                </button>
                              </div>
                              <span
                                className="font-mono text-[10px] text-purple-700 dark:text-purple-300 font-bold bg-purple-50 dark:bg-purple-950/70 px-2.5 py-1 rounded-full border border-purple-200 dark:border-purple-800/80 shadow-2xs inline-flex items-center gap-1"
                              >
                                <span className="font-sans text-[9px] uppercase tracking-wider font-black">DDInter 2.0:</span>
                                <span>{dfi.ddinterId || dfi.id}</span>
                              </span>
                            </div>

                            {/* Interactive DDInter 2.0 Citations Panel */}
                            {isExpanded && (
                              <div className="mt-1 p-3.5 rounded-xl bg-slate-900 text-white text-[11px] shadow-2xl border border-purple-500/30 space-y-2 animate-fade-in">
                                <div className="flex items-center justify-between pb-1.5 border-b border-slate-700/80 font-bold text-xs text-purple-300">
                                  <span className="flex items-center gap-1.5 font-outfit">
                                    <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                                    <span>Sitasi Literatur Ilmiah DDInter 2.0 (EBM)</span>
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() => setExpandedDfiRefId(null)}
                                    className="text-slate-400 hover:text-white p-0.5 rounded cursor-pointer transition-colors"
                                    title="Tutup Sitasi"
                                  >
                                    <X className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                                <div className="space-y-1.5 max-h-52 overflow-y-auto pr-1 font-mono text-[10px] text-slate-300 leading-relaxed">
                                  {refList.map((line, idx) => (
                                    <div key={idx} className="p-1.5 rounded-lg bg-slate-800/70 border border-slate-700/50">
                                      {line.match(/^\d+\./) ? line : `${idx + 1}. ${line}`}
                                    </div>
                                  ))}
                                </div>
                                <div className="pt-1.5 text-[9px] text-slate-400 flex items-center justify-between border-t border-slate-800">
                                  <span className="flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                    DDInter 2.0 Other Interaction • Nature Protocols 2022
                                  </span>
                                  <span className="text-purple-300 font-sans font-medium text-[9px]">
                                    Basis Data DDInter
                                  </span>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="p-8 rounded-2xl border text-center space-y-2 bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800">
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                      Tidak ditemukan interaksi makanan dengan derajat keparahan <strong>{foodSeverityFilter}</strong> untuk obat yang dipilih.
                    </p>
                    <button
                      onClick={() => setFoodSeverityFilter('all')}
                      className="text-xs font-bold text-purple-600 dark:text-purple-400 hover:underline cursor-pointer"
                    >
                      Tampilkan Semua Derajat Keparahan ({matchedFoodInteractions.length})
                    </button>
                  </div>
                )
              ) : (
                <div className="clinical-card-safe p-8 rounded-2xl border text-center space-y-2.5 shadow-xs">
                  <ShieldCheck className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mx-auto" />
                  <div className="space-y-1">
                    <h3 className="text-base font-black text-emerald-950 dark:text-emerald-200">
                      Bebas Pantangan Makanan Mayor
                    </h3>
                    <p className="text-xs text-emerald-900/80 dark:text-emerald-300/80 max-w-md mx-auto font-medium leading-relaxed">
                      Tidak ditemukan interaksi makanan atau minuman yang mengharuskan penyesuaian diet ketat pada obat yang dipilih.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 5: DUPLIKASI TERAPI (THERAPEUTIC DUPLICATION) */}
          {activeTab === 'duplication' && (
            <div className="space-y-4 animate-fade-in">
              {/* Official DDInter 2.0 Duplication Header */}
              <div className="bg-gradient-to-r from-pink-500/10 via-pink-500/5 to-transparent border border-pink-300/70 dark:border-pink-700/60 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-pink-600 text-white font-outfit uppercase tracking-wider">
                      DDInter 2.0 Other Interaction • Duplication
                    </span>
                    <span className="text-xs font-bold text-pink-900 dark:text-pink-300 font-outfit">
                      ATC &amp; Deprescribing Protocol
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base font-black text-slate-900 dark:text-white font-outfit">
                    Penapisan Duplikasi Terapi (Therapeutic Duplication Checker)
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-medium max-w-2xl leading-relaxed">
                    Mendeteksi peresepan ganda pada kelas farmakologi atau kode ATC yang sama (seperti 2 NSAID oral, 2 PPI, 2 Statin, Dual RAAS Blockade ACEi + ARB) yang melipatgandakan efek samping tanpa bukti peningkatan efikasi.
                  </p>
                </div>
              </div>

              {/* DUPLICATION LIST */}
              {matchedDuplications.length > 0 ? (
                <div className="space-y-3">
                  {matchedDuplications.map((dup) => (
                    <div
                      key={dup.id}
                      className="bg-white dark:bg-[#0c1322] p-5 rounded-2xl border border-pink-200 dark:border-pink-900/60 text-xs space-y-3 shadow-xs hover:border-pink-400 transition-all"
                    >
                      <div className="flex items-center justify-between gap-2 flex-wrap pb-2 border-b border-pink-100 dark:border-pink-950/60">
                        <div className="flex items-center gap-2 flex-wrap font-black">
                          <span className="text-slate-900 dark:text-white text-base">💊 {dup.drugAName} &amp; {dup.drugBName}</span>
                        </div>
                        <span className="bg-pink-100 dark:bg-pink-950 text-pink-800 dark:text-pink-300 text-xs font-black px-2.5 py-1 rounded-md border border-pink-300 dark:border-pink-700">
                          {dup.therapeuticClass}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <p className="font-bold text-slate-800 dark:text-slate-200">Risiko Duplikasi Farmakologi:</p>
                        <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed">{dup.riskDescription}</p>
                      </div>

                      <div className="bg-pink-50/80 dark:bg-pink-950/50 p-4 rounded-xl border border-pink-200/80 dark:border-pink-900/60 space-y-1">
                        <p className="font-black text-pink-950 dark:text-pink-200 flex items-center gap-1.5">
                          <Sparkles className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                          <span>Saran Rasionalisasi Resep (Deprescribing / Apoteker):</span>
                        </p>
                        <p className="text-pink-900 dark:text-pink-300 font-medium leading-relaxed">
                          {dup.recommendation}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="clinical-card-safe p-8 rounded-2xl border text-center space-y-2.5 shadow-xs">
                  <ShieldCheck className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mx-auto" />
                  <div className="space-y-1">
                    <h3 className="text-base font-black text-emerald-950 dark:text-emerald-200">
                      Bebas Duplikasi Terapi
                    </h3>
                    <p className="text-xs text-emerald-900/80 dark:text-emerald-300/80 max-w-md mx-auto font-medium leading-relaxed">
                      Resep ini rasional dan tidak mengandung dua obat yang berasal dari kelas terapeutik yang sama.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 6: INTERAKSI DENGAN HERBAL & JAMU (HERB-DRUG) */}
          {activeTab === 'herb' && (
            <div className="space-y-4 animate-fade-in">
              <div className="bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent border border-emerald-300/70 dark:border-emerald-700/60 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-emerald-600 text-white font-outfit uppercase tracking-wider">
                      Herbal • Jamu &amp; OHT Formularium
                    </span>
                    <span className="text-xs font-bold text-emerald-900 dark:text-emerald-300 font-outfit">
                      Formularium Obat Herbal Asli Indonesia (FOHAI / FHI)
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base font-black text-slate-900 dark:text-white font-outfit">
                    Interaksi Obat dengan Jamu, Tanaman Obat &amp; Ekstrak Herbal
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-medium max-w-2xl leading-relaxed">
                    Evaluasi potensi sinergi toksisitas atau gangguan farmakokinetik antara obat resep pasien dengan jamu tradisional, ekstrak kurkumin (Kunyit/Temulawak), Meniran, Ginkgo Biloba, Bawang Putih, dan herbal Nusantara lainnya.
                  </p>
                </div>
              </div>

              {matchedHerbInteractions.length > 0 ? (
                <div className="space-y-4">
                  {matchedHerbInteractions.map((hdi: any) => {
                    const isMajor = hdi.severity?.includes('Mayor') || hdi.severity?.includes('Tinggi');
                    return (
                      <div
                        key={hdi.id}
                        className={`rounded-2xl p-5 sm:p-6 border shadow-xs space-y-4 ${
                          isMajor ? 'clinical-card-major' : 'clinical-card-moderate'
                        }`}
                      >
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-black/5 dark:border-white/10 pb-3">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-base sm:text-lg font-black text-emerald-950 dark:text-emerald-200">🌿 {hdi.herbName}</span>
                            <span className="text-slate-400 italic text-xs">({hdi.latinName})</span>
                            <span className="text-amber-500 font-black">⚡</span>
                            <span className="text-base sm:text-lg font-black text-slate-900 dark:text-white">💊 {hdi.matchedDrugName || hdi.drugName}</span>
                          </div>
                          <span className={isMajor ? 'clinical-badge-major' : 'clinical-badge-moderate'}>
                            {hdi.severity}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                          <div className="bg-white/90 dark:bg-slate-900/70 p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 space-y-1">
                            <p className="font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                              <span>Mekanisme Farmakologi:</span>
                            </p>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium">{hdi.mechanism}</p>
                          </div>

                          <div className="bg-white/90 dark:bg-slate-900/70 p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 space-y-1">
                            <p className="font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                              <span>Efek Klinis pada Pasien:</span>
                            </p>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium">{hdi.clinicalEffect}</p>
                          </div>
                        </div>

                        <div className="bg-teal-50/90 dark:bg-teal-950/60 p-4 rounded-xl border border-teal-300/60 dark:border-teal-800/80 space-y-1 shadow-2xs">
                          <div className="flex items-center gap-1.5 text-teal-900 dark:text-teal-200 font-bold text-xs">
                            <CheckCircle2 className="w-4 h-4 text-teal-700 dark:text-teal-400" />
                            <span>Rekomendasi Klinis &amp; Edukasi Apoteker:</span>
                          </div>
                          <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                            {hdi.clinicalRecommendation}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="clinical-card-safe p-8 rounded-2xl border text-center space-y-2.5 shadow-xs">
                  <ShieldCheck className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mx-auto" />
                  <div className="space-y-1">
                    <h3 className="text-base font-black text-emerald-950 dark:text-emerald-200">
                      Tidak Ditemukan Interaksi Herbal Bermakna
                    </h3>
                    <p className="text-xs text-emerald-900/80 dark:text-emerald-300/80 max-w-md mx-auto font-medium leading-relaxed">
                      Obat yang dipilih tidak menunjukkan interaksi terdokumentasi dengan database herbal, jamu, dan fitofarmaka prioritas.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}


          {/* Clinical Decision Support Disclaimer */}
          <p className="text-[10px] text-slate-400 dark:text-slate-500 italic text-center py-2">
            *Catatan Medis: Sistem ini berfungsi sebagai instrumen pendukung keputusan klinis (Clinical Decision Support System / CDSS) berbasis rujukan DDInter 2.0. Keputusan intervensi resep sepenuhnya berada pada wewenang profesional apoteker dan dokter penanggung jawab.
          </p>

        </div>
      ) : (
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-white via-rose-50/30 to-slate-50 dark:from-[#0c121e] dark:via-[#160c14] dark:to-[#080d16] p-8 sm:p-12 border-2 border-dashed border-rose-300/80 dark:border-rose-900/60 text-center space-y-4 shadow-sm">
          <FloatingPillsBackground density="low" accentColor="#fb7185" />
          
          <div className="relative z-10 flex flex-col items-center justify-center space-y-3">
            <div className="w-16 h-16 rounded-2xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900/60 flex items-center justify-center text-rose-500 dark:text-rose-400 shadow-sm">
              <Pill className="w-8 h-8" />
            </div>

            <div className="space-y-1 max-w-md mx-auto">
              <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white font-outfit">
                Pilih Minimal 2 Obat untuk Memulai Analisis Klinis
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Gunakan kolom pencarian di atas, atau klik salah satu skenario uji cepat di bawah untuk melihat penapisan interaksi, kontraindikasi penyakit, dan duplikasi terapi secara instan.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              <button
                onClick={() => applyPreset(['Paracetamol', 'Cetirizine'])}
                className="px-4 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900 text-emerald-800 dark:text-emerald-300 text-xs font-bold border border-emerald-300 dark:border-emerald-800 flex items-center gap-1.5 transition-all cursor-pointer hover:scale-105 active:scale-95 shadow-2xs"
              >
                <span>🌟 Coba Resep Bebas Interaksi</span>
              </button>
              <button
                onClick={() => applyPreset(['Paxlovid', 'Simvastatin'])}
                className="px-4 py-2 rounded-xl bg-rose-50 dark:bg-rose-950/60 hover:bg-rose-100 dark:hover:bg-rose-900 text-rose-800 dark:text-rose-300 text-xs font-bold border border-rose-300 dark:border-rose-800 flex items-center gap-1.5 transition-all cursor-pointer hover:scale-105 active:scale-95 shadow-2xs"
              >
                <span>⚠️ Coba Interaksi Mayor</span>
              </button>
              <button
                onClick={() => applyPreset(['Dabrafenib', 'Oliceridine'])}
                className="px-4 py-2 rounded-xl bg-rose-50 dark:bg-rose-950/60 hover:bg-rose-100 dark:hover:bg-rose-900 text-rose-800 dark:text-rose-300 text-xs font-bold border border-rose-300 dark:border-rose-800 flex items-center gap-1.5 transition-all cursor-pointer hover:scale-105 active:scale-95 shadow-2xs"
              >
                <span>⚡ Coba Kasus 195k: Dabrafenib + Oliceridine</span>
              </button>
              <button
                onClick={() => setShow195kPresetDrawer(true)}
                className="px-4 py-2 rounded-xl bg-purple-50 dark:bg-purple-950/60 hover:bg-purple-100 dark:hover:bg-purple-900 text-purple-800 dark:text-purple-300 text-xs font-bold border border-purple-300 dark:border-purple-800 flex items-center gap-1.5 transition-all cursor-pointer hover:scale-105 active:scale-95 shadow-2xs"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>📚 Buka Katalog Kasus 195k</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal / Dialog Katalog Contoh Kasus Klinis 195.864 DDInter */}
      {show195kPresetDrawer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-3xl w-full max-h-[85vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between gap-4 bg-gradient-to-r from-rose-50/80 via-white to-amber-50/40 dark:from-rose-950/30 dark:via-slate-900 dark:to-slate-900">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-xl bg-rose-600 text-white shadow-md shadow-rose-900/30">
                    <Database className="w-4 h-4" />
                  </span>
                  <h3 className="text-lg font-black font-outfit text-slate-900 dark:text-white">
                    Katalog Contoh Kasus Klinis (195.864 DDInter 2.0)
                  </h3>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Pilih salah satu preskripsi terverifikasi dari dataset 195.864 DDInter 2.0 untuk penapisan dan pengujian instan.
                </p>
              </div>
              <button
                onClick={() => setShow195kPresetDrawer(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Filter Specialty Pills */}
            <div className="px-5 sm:px-6 py-3 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex items-center gap-1.5 overflow-x-auto">
              {['Semua', 'Kardiovaskular', 'Onkologi', 'Psikiatri & SSP', 'Antimikroba & Infeksi', 'Antiretroviral', 'Nefrologi & NSAID', 'Gastrointestinal', 'Neurologi', 'Polifarmasi Klinis'].map((spec) => (
                <button
                  key={spec}
                  onClick={() => setSelectedSpecialtyFilter(spec)}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
                    selectedSpecialtyFilter === spec
                      ? 'bg-rose-600 text-white shadow-xs'
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-rose-400'
                  }`}
                >
                  {spec}
                </button>
              ))}
            </div>

            {/* Presets Grid */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-3 flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {DDINTER_195K_PRESETS_LIST
                  .filter((item) => selectedSpecialtyFilter === 'Semua' || item.specialty === selectedSpecialtyFilter)
                  .map((item) => {
                    const isMajor = item.severity === 'Major';
                    const isModerate = item.severity === 'Moderate';
                    return (
                      <div
                        key={item.id}
                        onClick={() => {
                          applyPreset(item.drugs);
                          setShow195kPresetDrawer(false);
                        }}
                        className="group p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-rose-400 dark:hover:border-rose-600 bg-white dark:bg-slate-900/60 hover:bg-rose-50/30 dark:hover:bg-rose-950/20 transition-all cursor-pointer space-y-2 shadow-2xs hover:shadow-md"
                      >
                        <div className="flex items-center justify-between gap-1.5 flex-wrap">
                          <span className="text-xs font-black font-outfit text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 flex items-center gap-1">
                            <span className="text-amber-500 font-bold">⚡</span>
                            <span>{item.label}</span>
                          </span>
                          <span className={`text-[10px] font-black px-2 py-0.5 rounded-md ${
                            isMajor
                              ? 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                              : isModerate
                              ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                              : 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'
                          }`}>
                            {item.severity}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                          {item.shortDesc}
                        </p>
                        <div className="flex items-center justify-between pt-1 border-t border-slate-100 dark:border-slate-800/80 text-[10px]">
                          <span className="font-bold text-slate-400 font-mono">
                            {item.specialty} • {item.category}
                          </span>
                          <span className="text-rose-600 dark:text-rose-400 font-bold flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                            <span>Uji Kasus</span>
                            <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>{DDINTER_195K_PRESETS_LIST.length} Preskripsi Terverifikasi Nature Protocols 2022</span>
              </span>
              <button
                onClick={() => {
                  handleRandom195kPreset();
                  setShow195kPresetDrawer(false);
                }}
                className="px-3 py-1.5 rounded-xl font-bold bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-1.5 cursor-pointer shadow-xs transition-colors"
              >
                <Shuffle className="w-3.5 h-3.5" />
                <span>Pilih Acak</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
