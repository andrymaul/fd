import React, { useState, useEffect, useMemo } from 'react';
import { Drug, DrugInteraction, UserProfile } from '../types';
import { 
  Search, 
  Filter, 
  Pill, 
  Plus, 
  Info, 
  ShieldAlert, 
  Database,
  ExternalLink,
  Sparkles,
  ArrowUpDown,
  RotateCcw,
  SlidersHorizontal,
  Baby,
  X,
  Check,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Layers,
  ShieldCheck,
  AlertTriangle,
  ArrowUpRight,
  Building2,
  Activity
} from 'lucide-react';
import { FloatingPillsBackground } from './FloatingPillsBackground';
import { EvidenceSourceBadge } from './EvidenceSourceBadge';
import { DDINTER_CATEGORIES, resolveDrugFromDDInter, deduplicateDrugs } from '../utils/ddinterEngine';
import { getFornasRestriction } from '../data/fornasRestrictionsData';
import { 
  BpomClassKey, 
  getBpomClassificationKey, 
  getBpomBadge, 
  getBpomLabel, 
  matchesCategoryFilter 
} from '../utils/bpomHelper';

interface DrugDirectoryProps {
  drugs: Drug[];
  interactions: DrugInteraction[];
  currentUser: UserProfile | null;
  onSelectDrug: (drug: Drug) => void;
  onCheckInteractionWith: (drugName: string) => void;
  onOpenAddDrugModal?: () => void;
  onAddToPioCard?: (drug: Drug) => void;
  initialSearchQuery?: string;
  onSelectTab?: (tab: string) => void;
}

type SortOption = 'name-asc' | 'name-desc' | 'interactions-desc' | 'atc-asc' | 'ddinter-asc' | 'pregnancy-asc' | 'off-label-first';

const formatTitleCase = (str: string): string => {
  if (!str) return '';
  const trimmed = str.trim();
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
};

export const DrugDirectory: React.FC<DrugDirectoryProps> = ({
  drugs,
  interactions,
  currentUser,
  onSelectDrug,
  onCheckInteractionWith,
  onOpenAddDrugModal,
  onAddToPioCard,
  initialSearchQuery,
  onSelectTab
}) => {
  const [searchTerm, setSearchTerm] = useState(initialSearchQuery);
  const [debouncedSearch, setDebouncedSearch] = useState(initialSearchQuery);
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua Kategori');
  const [selectedPregnancyCat, setSelectedPregnancyCat] = useState<string>('Semua');
  const [bpomClassFilter, setBpomClassFilter] = useState<'all' | 'bebas' | 'bebas-terbatas' | 'obat-keras' | 'oot' | 'prekursor' | 'psikotropika' | 'narkotika'>('all');
  const [fornasFilter, setFornasFilter] = useState<'all' | 'fornas-only' | 'faskes-1' | 'faskes-2-3' | 'non-fornas'>('all');
  const [interactionFilter, setInteractionFilter] = useState<'all' | 'has-interactions' | 'no-interactions'>('all');
  const [offLabelFilter, setOffLabelFilter] = useState<'all' | 'off-label' | 'on-label'>('all');
  const [sortBy, setSortBy] = useState<SortOption>('name-asc');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(24);

  // Debounce search input for silky-smooth typing (200ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 200);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Pre-calculate interaction count for fast filter/sort
  const interactionCountMap = useMemo(() => {
    const map = new Map<string, number>();
    for (const inter of interactions) {
      const nameA = inter.drugAName.toLowerCase();
      const nameB = inter.drugBName.toLowerCase();
      map.set(nameA, (map.get(nameA) || 0) + 1);
      map.set(nameB, (map.get(nameB) || 0) + 1);
    }
    return map;
  }, [interactions]);

  // Deduplicate drugs array for clean directory view
  const cleanDrugs = useMemo(() => deduplicateDrugs(drugs), [drugs]);

  // Count how many drugs have documented off-label indications
  const offLabelCount = useMemo(() => {
    return cleanDrugs.filter((d) => Boolean(d.offLabelIndication && d.offLabelIndication.trim() !== '')).length;
  }, [cleanDrugs]);

  // Dynamic filter & sort
  const filteredAndSortedDrugs = useMemo(() => {
    const result = cleanDrugs.filter((drug) => {
      const query = debouncedSearch.toLowerCase().trim();
      const matchesSearch =
        !query ||
        (drug.name && drug.name.toLowerCase().includes(query)) ||
        (drug.genericName && drug.genericName.toLowerCase().includes(query)) ||
        (drug.atcCode && drug.atcCode.toLowerCase().includes(query)) ||
        (drug.ddinterId && drug.ddinterId.toLowerCase().includes(query)) ||
        (drug.indication && drug.indication.toLowerCase().includes(query)) ||
        (drug.offLabelIndication && drug.offLabelIndication.toLowerCase().includes(query)) ||
        (drug.blackBoxWarning && drug.blackBoxWarning.toLowerCase().includes(query)) ||
        (drug.cypPathway && drug.cypPathway.toLowerCase().includes(query)) ||
        (drug.foodInteraction && drug.foodInteraction.toLowerCase().includes(query)) ||
        (drug.monitoringParameters && drug.monitoringParameters.toLowerCase().includes(query)) ||
        (drug.brandNames && Array.isArray(drug.brandNames) && drug.brandNames.some((b) => b && b.toLowerCase().includes(query)));

      const matchesCategory = matchesCategoryFilter(drug, selectedCategory);

      const matchesPregnancy =
        selectedPregnancyCat === 'Semua' ||
        drug.pregnancyCategory === selectedPregnancyCat;

      const count = interactionCountMap.get(drug.name.toLowerCase()) || 0;
      const matchesInteraction =
        interactionFilter === 'all' ||
        (interactionFilter === 'has-interactions' && count > 0) ||
        (interactionFilter === 'no-interactions' && count === 0);

      const matchesBpom =
        bpomClassFilter === 'all' ||
        getBpomClassificationKey(drug) === bpomClassFilter;

      const fornasData = drug.fornasData || getFornasRestriction(drug);
      const matchesFornas =
        fornasFilter === 'all' ||
        (fornasFilter === 'fornas-only' && Boolean(fornasData?.isFornas)) ||
        (fornasFilter === 'faskes-1' && Boolean(fornasData?.isFornas && (fornasData.tier === '1' || fornasData.tier === '1, 2, 3'))) ||
        (fornasFilter === 'faskes-2-3' && Boolean(fornasData?.isFornas && (fornasData.tier === '2, 3' || fornasData.tier === '2' || fornasData.tier === '3'))) ||
        (fornasFilter === 'non-fornas' && !fornasData?.isFornas);

      const matchesOffLabel =
        offLabelFilter === 'all' ||
        (offLabelFilter === 'off-label' && Boolean(drug.offLabelIndication && drug.offLabelIndication.trim() !== '')) ||
        (offLabelFilter === 'on-label' && (!drug.offLabelIndication || drug.offLabelIndication.trim() === ''));

      return matchesSearch && matchesCategory && matchesPregnancy && matchesInteraction && matchesBpom && matchesFornas && matchesOffLabel;
    });

    return result.sort((a, b) => {
      if (sortBy === 'name-asc') return (a.name || '').localeCompare(b.name || '');
      if (sortBy === 'name-desc') return (b.name || '').localeCompare(a.name || '');
      if (sortBy === 'atc-asc') return (a.atcCode || '').localeCompare(b.atcCode || '');
      if (sortBy === 'ddinter-asc') return (a.ddinterId || a.id || '').localeCompare(b.ddinterId || b.id || '');
      if (sortBy === 'off-label-first') {
        const hasA = Boolean(a.offLabelIndication && a.offLabelIndication.trim() !== '') ? 1 : 0;
        const hasB = Boolean(b.offLabelIndication && b.offLabelIndication.trim() !== '') ? 1 : 0;
        if (hasB !== hasA) return hasB - hasA;
        return (a.name || '').localeCompare(b.name || '');
      }
      if (sortBy === 'interactions-desc') {
        const countA = interactionCountMap.get((a.name || '').toLowerCase()) || 0;
        const countB = interactionCountMap.get((b.name || '').toLowerCase()) || 0;
        return countB - countA;
      }
      if (sortBy === 'pregnancy-asc') {
        const order = { 'A': 1, 'B': 2, 'C': 3, 'D': 4, 'X': 5 };
        const valA = order[a.pregnancyCategory as keyof typeof order] || 99;
        const valB = order[b.pregnancyCategory as keyof typeof order] || 99;
        return valA - valB;
      }
      return 0;
    });
  }, [cleanDrugs, debouncedSearch, selectedCategory, selectedPregnancyCat, bpomClassFilter, interactionFilter, offLabelFilter, sortBy, interactionCountMap]);

  // Reset to page 1 whenever any filter criteria change
  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch, selectedCategory, selectedPregnancyCat, bpomClassFilter, interactionFilter, offLabelFilter, sortBy, itemsPerPage]);

  // Pagination slicing & calculations
  const totalItems = filteredAndSortedDrugs.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const validCurrentPage = Math.min(currentPage, totalPages);

  const paginatedDrugs = useMemo(() => {
    const start = (validCurrentPage - 1) * itemsPerPage;
    return filteredAndSortedDrugs.slice(start, start + itemsPerPage);
  }, [filteredAndSortedDrugs, validCurrentPage, itemsPerPage]);

  const startIndex = (validCurrentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    const catalogContainer = document.getElementById('katalog-obat-container');
    if (catalogContainer) {
      catalogContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getPageNumbers = () => {
    const delta = 1;
    const range: (number | string)[] = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= validCurrentPage - delta && i <= validCurrentPage + delta)
      ) {
        range.push(i);
      } else if (range[range.length - 1] !== '...') {
        range.push('...');
      }
    }
    return range;
  };

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('Semua Kategori');
    setSelectedPregnancyCat('Semua');
    setBpomClassFilter('all');
    setFornasFilter('all');
    setInteractionFilter('all');
    setOffLabelFilter('all');
    setSortBy('name-asc');
  };

  const isFiltered =
    searchTerm.trim() !== '' ||
    selectedCategory !== 'Semua Kategori' ||
    selectedPregnancyCat !== 'Semua' ||
    bpomClassFilter !== 'all' ||
    fornasFilter !== 'all' ||
    interactionFilter !== 'all' ||
    offLabelFilter !== 'all';

  const getPregnancyBadgeStyle = (category?: string) => {
    switch (category) {
      case 'A': return 'bg-emerald-100 text-emerald-900 border-emerald-300';
      case 'B': return 'bg-teal-100 text-teal-900 border-teal-300';
      case 'C': return 'bg-amber-100 text-amber-900 border-amber-300';
      case 'D': return 'bg-orange-100 text-orange-900 border-orange-300';
      case 'X': return 'bg-rose-100 text-rose-900 border-rose-300 font-bold';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const handleDynamicDDInterSearch = () => {
    if (!searchTerm.trim()) return;
    const dynamicDrug = resolveDrugFromDDInter(searchTerm.trim(), drugs);
    if (dynamicDrug) {
      onSelectDrug(dynamicDrug);
    }
  };

  return (
    <div id="katalog-obat-container" className="space-y-6">
      
      {/* HERO BANNER - DEEP OCEANIC TEAL & OBSIDIAN */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#030c0f] via-[#071e24] to-[#0c2f38] p-6 sm:p-8 text-white shadow-2xl border border-teal-500/25">
        <FloatingPillsBackground density="low" accentColor="#2dd4bf" />
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-72 -bottom-10 opacity-10 pointer-events-none hidden lg:block">
          <Pill className="w-56 h-56 text-teal-400 -rotate-12" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-bold font-outfit">
              <Database className="w-3.5 h-3.5 text-teal-400" />
              <span>Direktori Farmakologi &amp; Monografi Resmi BPOM &amp; FDA</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 text-white flex items-center justify-center shadow-lg shadow-teal-950/50 shrink-0">
                <Pill className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-black font-outfit tracking-tight">
                  Katalog Informasi &amp; Monografi Obat
                </h1>
                <p className="text-xs sm:text-sm text-teal-100/80 font-medium">
                  Direktori komprehensif indikasi medis, dosis baku, kategori kehamilan FDA, dan identifikasi merk dagang Indonesia.
                </p>
              </div>
            </div>

            {/* Feature Highlights Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-teal-950/60 border border-teal-800/50 text-teal-200">
                <Layers className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>{DDINTER_CATEGORIES.length - 1} Kategori Terapi &amp; ATC</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-teal-950/60 border border-teal-800/50 text-teal-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Klasifikasi Resmi BPOM &amp; Restriksi FORNAS</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-teal-950/60 border border-teal-800/50 text-teal-200">
                <Baby className="w-3.5 h-3.5 text-pink-300 shrink-0" />
                <span>Kategori Kehamilan FDA &amp; Bukti Off-Label EBM</span>
              </div>
            </div>
          </div>

          {/* Right Hero Badge: Database Status */}
          <div className="flex flex-col gap-3 lg:w-72 shrink-0 relative z-10">
            <div className="bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-teal-500/40 space-y-2.5 shadow-xl">
              <div className="flex items-center justify-between text-xs font-bold text-teal-300 border-b border-teal-800/60 pb-2">
                <span className="flex items-center gap-1.5 font-black font-outfit">
                  <Activity className="w-3.5 h-3.5 text-teal-400" />
                  <span>Status Database</span>
                </span>
                <span className="bg-teal-950 text-teal-300 px-2 py-0.5 rounded-full text-[10px] font-black border border-teal-600/40">
                  {cleanDrugs.length.toLocaleString('id-ID')} Obat Terverifikasi
                </span>
              </div>
              <div className="text-xs text-teal-100/80 space-y-1.5 font-medium">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Kategori Terapi ATC:</span>
                  <span className="font-bold text-teal-200">{DDINTER_CATEGORIES.length - 1} Kategori</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Restriksi FORNAS:</span>
                  <span className="font-bold text-teal-200">{cleanDrugs.filter(d => Boolean(d.fornasData?.isFornas || getFornasRestriction(d))).length} Formularium</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Indikasi Off-Label:</span>
                  <span className="font-bold text-emerald-400">{offLabelCount} Obat Terdata</span>
                </div>
                <div className="flex justify-between items-center pt-1 border-t border-teal-900/40 text-[10px] text-teal-300/80">
                  <span>Standar Acuan:</span>
                  <span className="font-bold text-white">BPOM RI, FORNAS &amp; FDA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Toolbar - Emerald Mint Suite */}
      <div className="bg-white dark:bg-[#071c17] p-5 sm:p-6 rounded-3xl border border-teal-200/80 dark:border-teal-500/25 shadow-sm space-y-4">
        
        {/* Top Search Input & Primary Actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari obat apa saja (misal: Warfarin, Atorvastatin, Sanmol, Plavix, Ciprofloxacin, J01MA02)..."
              className="w-full pl-10 pr-4 py-2.5 text-xs font-bold font-outfit text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30 transition-colors"
            />
          </div>

          {currentUser?.role === 'admin' && onOpenAddDrugModal && (
            <button
              onClick={onOpenAddDrugModal}
              className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white px-4 py-2.5 rounded-xl font-bold font-outfit text-xs flex items-center justify-center gap-1.5 transition-all shadow-md shadow-teal-950/40 shrink-0 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Tambah Obat</span>
            </button>
          )}
        </div>

        {/* Filter Controls Grid (7 Columns) */}
        <div className="pt-3 border-t border-teal-100 dark:border-teal-950/80 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3">
          
          {/* Filter 1: Kategori Terapi Obat */}
          <div className="space-y-1">
            <label className="text-[11px] font-extrabold font-outfit text-slate-600 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span>Kategori Terapi</span>
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-2.5 text-xs font-bold font-outfit text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-teal-500 cursor-pointer"
            >
              {DDINTER_CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Filter 2: Golongan Obat BPOM */}
          <div className="space-y-1">
            <label className="text-[11px] font-extrabold font-outfit text-slate-600 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1">
              <ShieldAlert className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span>Golongan Obat (BPOM)</span>
            </label>
            <select
              value={bpomClassFilter}
              onChange={(e) => setBpomClassFilter(e.target.value as any)}
              className="w-full p-2.5 text-xs font-bold font-outfit text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-teal-500 cursor-pointer"
            >
              <option value="all">Semua Golongan Obat</option>
              <option value="bebas">🟢 Obat Bebas</option>
              <option value="bebas-terbatas">🔵 Obat Bebas Terbatas</option>
              <option value="obat-keras">🔴 Obat Keras (K)</option>
              <option value="oot">⚠️ Obat-Obat Tertentu (OOT)</option>
              <option value="prekursor">🧪 Prekursor Farmasi</option>
              <option value="psikotropika">🧠 Psikotropika</option>
              <option value="narkotika">🛑 Narkotika</option>
            </select>
          </div>

          {/* Filter 3: Formularium Nasional & BPJS */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label className="text-[11px] font-extrabold font-outfit text-emerald-700 dark:text-emerald-300 uppercase tracking-wider flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Fornas &amp; BPJS</span>
              </label>
            </div>
            <select
              id="filter-fornas"
              value={fornasFilter}
              onChange={(e) => setFornasFilter(e.target.value as any)}
              className={`w-full p-2.5 text-xs font-bold font-outfit rounded-xl border focus:outline-none focus:border-emerald-500 cursor-pointer transition-colors ${
                fornasFilter !== 'all'
                  ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-950 dark:text-emerald-200 border-emerald-400 dark:border-emerald-600 shadow-xs'
                  : 'bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-800'
              }`}
            >
              <option value="all">Semua Obat</option>
              <option value="fornas-only">🟢 Semua Obat Fornas</option>
              <option value="faskes-1">🏥 Faskes 1 (FKTP/Puskesmas)</option>
              <option value="faskes-2-3">🏛️ Faskes 2 &amp; 3 (RS Rujukan)</option>
              <option value="non-fornas">⚪ Non-Fornas</option>
            </select>
          </div>
          
          {/* Filter 3: Kategori Kehamilan */}
          <div className="space-y-1">
            <label className="text-[11px] font-extrabold font-outfit text-slate-600 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1">
              <Baby className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span>Kategori Kehamilan</span>
            </label>
            <select
              value={selectedPregnancyCat}
              onChange={(e) => setSelectedPregnancyCat(e.target.value)}
              className="w-full p-2.5 text-xs font-bold font-outfit text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-teal-500 cursor-pointer"
            >
              <option value="Semua">Semua Kategori (A, B, C, D, X)</option>
              <option value="A">Kategori A (Aman)</option>
              <option value="B">Kategori B (Risiko Rendah)</option>
              <option value="C">Kategori C (Perlu Kehati-hatian)</option>
              <option value="D">Kategori D (Ada Risiko Janin)</option>
              <option value="X">Kategori X (Kontraindikasi Mutlak)</option>
            </select>
          </div>

          {/* Filter 4: Status Interaksi Obat */}
          <div className="space-y-1">
            <label className="text-[11px] font-extrabold font-outfit text-slate-600 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1">
              <ShieldAlert className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span>Status Interaksi</span>
            </label>
            <select
              value={interactionFilter}
              onChange={(e) => setInteractionFilter(e.target.value as any)}
              className="w-full p-2.5 text-xs font-bold font-outfit text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-teal-500 cursor-pointer"
            >
              <option value="all">Semua Obat</option>
              <option value="has-interactions">Memiliki Interaksi Terdaftar</option>
              <option value="no-interactions">Tanpa Interaksi Terdaftar</option>
            </select>
          </div>

          {/* Filter 5: Indikasi Off-Label (EBM) */}
          <div className="space-y-1">
            <label className="text-[11px] font-extrabold font-outfit text-purple-700 dark:text-purple-300 uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
              <span>Status Off-Label</span>
            </label>
            <select
              id="filter-off-label"
              value={offLabelFilter}
              onChange={(e) => setOffLabelFilter(e.target.value as any)}
              className={`w-full p-2.5 text-xs font-bold font-outfit rounded-xl border focus:outline-none focus:border-purple-500 cursor-pointer transition-colors ${
                offLabelFilter === 'off-label'
                  ? 'bg-purple-100 dark:bg-purple-950 text-purple-950 dark:text-purple-200 border-purple-400 dark:border-purple-600 shadow-xs'
                  : 'bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-800'
              }`}
            >
              <option value="all">Semua Obat (On/Off-Label)</option>
              <option value="off-label">💜 Hanya Obat Off-Label ({offLabelCount})</option>
              <option value="on-label">Indikasi On-Label Standar</option>
            </select>
          </div>

          {/* Filter 6: Urutkan Berdasarkan */}
          <div className="space-y-1">
            <label className="text-[11px] font-extrabold font-outfit text-slate-600 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1">
              <ArrowUpDown className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span>Urutkan Berdasarkan</span>
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="w-full p-2.5 text-xs font-bold font-outfit text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-teal-500 cursor-pointer"
            >
              <option value="name-asc">Nama Obat (A - Z)</option>
              <option value="name-desc">Nama Obat (Z - A)</option>
              <option value="off-label-first">💜 Prioritas Obat Off-Label</option>
              <option value="interactions-desc">Interaksi Terbanyak</option>
              <option value="atc-asc">Kode ATC (A - Z)</option>
              <option value="ddinter-asc">Urutan Default</option>
              <option value="pregnancy-asc">Kategori Kehamilan (A → X)</option>
            </select>
          </div>

        </div>

        {/* Filter Summary Status & Items Per Page Selector */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-medium text-slate-500 dark:text-slate-400 pt-1 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2 flex-wrap">
            <p>
              Menampilkan <span className="font-black text-[#0f766e] dark:text-teal-400">{totalItems === 0 ? 0 : `${(startIndex + 1).toLocaleString('id-ID')}–${endIndex.toLocaleString('id-ID')}`}</span> dari <span className="font-black text-slate-900 dark:text-white">{totalItems.toLocaleString('id-ID')}</span> hasil filter ({cleanDrugs.length.toLocaleString('id-ID')} obat terdaftar).
            </p>
            {isFiltered && (
              <span className="text-[10px] bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 font-bold px-2 py-0.5 rounded-full border border-teal-200 dark:border-teal-800">
                Filter Aktif
              </span>
            )}
            {/* Quick Off-Label Badge Toggle */}
            <button
              id="quick-toggle-off-label"
              onClick={() => setOffLabelFilter((prev) => (prev === 'off-label' ? 'all' : 'off-label'))}
              className={`text-[11px] font-extrabold px-2.5 py-1 rounded-lg border transition-all flex items-center gap-1.5 cursor-pointer ${
                offLabelFilter === 'off-label'
                  ? 'bg-purple-600 text-white border-purple-700 shadow-xs'
                  : 'bg-purple-50 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-900/60'
              }`}
              title="Klik untuk menyaring hanya obat dengan monografi off-label terverifikasi EBM"
            >
              <Sparkles className="w-3 h-3 text-purple-600 dark:text-purple-400" />
              <span>Obat Off-Label ({offLabelCount})</span>
              {offLabelFilter === 'off-label' && <span className="text-[10px] bg-white/20 px-1 rounded-full">✓</span>}
            </button>
            {isFiltered && (
              <button
                onClick={resetFilters}
                className="text-[11px] font-bold text-rose-600 hover:underline cursor-pointer"
              >
                Reset Filter
              </button>
            )}
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {/* Items Per Page */}
            <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300">
              <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-400">Tampilkan:</span>
              <select
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
                className="bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-2 py-1 text-xs font-bold text-slate-800 dark:text-slate-200 cursor-pointer focus:outline-none"
              >
                <option value={12}>12 / hal</option>
                <option value={24}>24 / hal (Rekomendasi)</option>
                <option value={48}>48 / hal</option>
                <option value={96}>96 / hal</option>
              </select>
            </div>

            {/* Current Page Pill */}
            {totalPages > 1 && (
              <span className="font-mono text-[11px] bg-slate-100 dark:bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-bold">
                Hal {validCurrentPage} / {totalPages}
              </span>
            )}
          </div>
        </div>

        {/* Active Filter Badges Chips Bar */}
        {isFiltered && (
          <div className="pt-2 flex items-center gap-2 flex-wrap border-t border-slate-100">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Filter Aktif:</span>
            
            {selectedCategory !== 'Semua Kategori' && (
              <button
                onClick={() => setSelectedCategory('Semua Kategori')}
                className="bg-teal-50 hover:bg-teal-100 text-teal-800 text-xs font-bold px-2.5 py-1 rounded-lg border border-teal-200 flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>Kategori: {selectedCategory}</span>
                <X className="w-3 h-3 text-teal-600" />
              </button>
            )}

            {bpomClassFilter !== 'all' && (
              <button
                onClick={() => setBpomClassFilter('all')}
                className="bg-indigo-50 hover:bg-indigo-100 text-indigo-800 text-xs font-bold px-2.5 py-1 rounded-lg border border-indigo-200 flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>Golongan: {getBpomLabel(bpomClassFilter)}</span>
                <X className="w-3 h-3 text-indigo-600" />
              </button>
            )}

            {fornasFilter !== 'all' && (
              <button
                onClick={() => setFornasFilter('all')}
                className="bg-emerald-50 hover:bg-emerald-100 text-emerald-900 text-xs font-bold px-2.5 py-1 rounded-lg border border-emerald-200 flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>Fornas: {
                  fornasFilter === 'fornas-only' ? 'Semua Obat Fornas' :
                  fornasFilter === 'faskes-1' ? 'Faskes 1 (Puskesmas)' :
                  fornasFilter === 'faskes-2-3' ? 'Faskes 2 & 3 (RS)' : 'Non-Fornas'
                }</span>
                <X className="w-3 h-3 text-emerald-600" />
              </button>
            )}

            {selectedPregnancyCat !== 'Semua' && (
              <button
                onClick={() => setSelectedPregnancyCat('Semua')}
                className="bg-purple-50 hover:bg-purple-100 text-purple-800 text-xs font-bold px-2.5 py-1 rounded-lg border border-purple-200 flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>Kehamilan: Kat. {selectedPregnancyCat}</span>
                <X className="w-3 h-3 text-purple-600" />
              </button>
            )}

            {interactionFilter !== 'all' && (
              <button
                onClick={() => setInteractionFilter('all')}
                className="bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-lg border border-amber-200 flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>Interaksi: {interactionFilter === 'has-interactions' ? 'Ada Interaksi' : 'Tanpa Interaksi'}</span>
                <X className="w-3 h-3 text-amber-600" />
              </button>
            )}

            {offLabelFilter !== 'all' && (
              <button
                onClick={() => setOffLabelFilter('all')}
                className="bg-purple-50 hover:bg-purple-100 text-purple-900 text-xs font-bold px-2.5 py-1 rounded-lg border border-purple-200 flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>Status: {offLabelFilter === 'off-label' ? 'Obat Off-Label' : 'On-Label Standar'}</span>
                <X className="w-3 h-3 text-purple-600" />
              </button>
            )}

            {searchTerm.trim() !== '' && (
              <button
                onClick={() => setSearchTerm('')}
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold px-2.5 py-1 rounded-lg border border-slate-300 flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>Cari: "{searchTerm}"</span>
                <X className="w-3 h-3 text-slate-600" />
              </button>
            )}

            <button
              onClick={resetFilters}
              className="text-[11px] text-red-600 hover:text-red-800 font-bold underline ml-1 cursor-pointer"
            >
              Hapus Semua Filter
            </button>
          </div>
        )}

      </div>

      {/* Quick Live Lookup Banner when search has query */}
      {searchTerm.trim().length > 1 && (
        <div className="bg-teal-50 border border-teal-200/90 p-4 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-5 h-5 text-[#0f766e] shrink-0" />
            <div>
              <p className="text-xs font-black text-teal-950">
                Pencarian Langsung Database Obat: <span className="underline">{searchTerm}</span>
              </p>
              <p className="text-[11px] text-teal-800 font-medium">
                Akses monografi lengkap & parameter klinis untuk obat "{searchTerm}".
              </p>
            </div>
          </div>

          <button
            onClick={handleDynamicDDInterSearch}
            className="bg-[#0f766e] hover:bg-[#115e59] text-white px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-colors shadow-xs shrink-0 cursor-pointer"
          >
            <Info className="w-3.5 h-3.5" />
            <span>Buka Monografi Obat</span>
          </button>
        </div>
      )}

      {/* Drug Cards Grid */}
      {filteredAndSortedDrugs.length > 0 ? (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {paginatedDrugs.map((drug) => {
            const bpomBadge = getBpomBadge(drug);
            const fornasInfo = drug.fornasData || getFornasRestriction(drug);

            return (
              <div
                key={drug.id}
                onClick={() => onSelectDrug(drug)}
                className="bg-white dark:bg-[#071d21] rounded-2xl border border-slate-200/90 dark:border-[#144951] p-4 sm:p-5 shadow-xs hover:border-teal-500 dark:hover:border-teal-400 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group flex flex-col justify-between"
                title={`Buka monografi klinis ${drug.name}`}
              >
                <div className="space-y-3">
                  
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className={`text-[10px] px-2.5 py-0.5 rounded-full border font-extrabold ${bpomBadge.style}`}>
                      {bpomBadge.label}
                    </span>

                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 text-[10px] font-bold px-2 py-0.5 rounded border border-teal-200 dark:border-teal-800">
                        ATC: {drug.atcCode}
                      </span>
                      {fornasInfo?.isFornas && (
                        <span
                          className={`text-[10px] font-extrabold px-2 py-0.5 rounded border flex items-center gap-1 ${
                            fornasInfo.tier === '1, 2, 3' || fornasInfo.tier === '1'
                              ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
                              : 'bg-cyan-50 dark:bg-cyan-950/60 text-cyan-800 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800'
                          }`}
                          title={`Formularium Nasional: ${fornasInfo.tierLabel} - ${fornasInfo.restrictionNote}`}
                        >
                          <Building2 className="w-2.5 h-2.5 shrink-0" />
                          <span>FORNAS {fornasInfo.tier === '1, 2, 3' ? 'F1-3' : 'F2-3'}</span>
                        </span>
                      )}
                      {drug.pregnancyCategory && (
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${getPregnancyBadgeStyle(drug.pregnancyCategory)}`}>
                          Hamil: {drug.pregnancyCategory}
                        </span>
                      )}
                      {drug.offLabelIndication && (
                        <span className="bg-purple-100 dark:bg-purple-950/60 text-purple-900 dark:text-purple-300 text-[10px] font-extrabold px-2 py-0.5 rounded border border-purple-200 dark:border-purple-800" title="Memiliki data indikasi & dosis klinis off-label">
                          Off-Label
                        </span>
                      )}
                      {drug.blackBoxWarning && (
                        <span className="bg-rose-100 dark:bg-rose-950/60 text-rose-900 dark:text-rose-300 text-[10px] font-extrabold px-2 py-0.5 rounded border border-rose-300 dark:border-rose-800 flex items-center gap-1" title="Peringatan Khusus (Boxed Warning)">
                          <AlertTriangle className="w-3 h-3 text-rose-600 dark:text-rose-400 shrink-0" />
                          <span>Boxed Warning</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & Generic - High Contrast White in Dark Mode */}
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-lg font-black text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-[#5fd0df] transition-colors font-outfit">
                        {formatTitleCase(drug.name)}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-teal-500 dark:group-hover:text-teal-300 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-300 font-semibold">{drug.genericName}</p>
                    <p className="text-[11px] font-bold text-teal-600 dark:text-teal-400 mt-0.5">{drug.category}</p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination Controls Bottom */}
        {totalPages > 1 && (
          <div className="bg-white dark:bg-[#071d21] rounded-2xl border border-slate-200/90 dark:border-[#144951] p-4 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Halaman <span className="font-bold text-slate-900 dark:text-white">{validCurrentPage}</span> dari <span className="font-bold text-slate-900 dark:text-white">{totalPages}</span> (Menampilkan {paginatedDrugs.length} dari {totalItems.toLocaleString('id-ID')} obat)
            </div>

            <div className="flex items-center gap-1 flex-wrap justify-center">
              {/* First Page */}
              <button
                type="button"
                onClick={() => handlePageChange(1)}
                disabled={validCurrentPage === 1}
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-teal-700 dark:hover:text-teal-300 hover:bg-teal-50 dark:hover:bg-[#0c2a30] disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer border border-slate-200 dark:border-[#144951]"
                title="Halaman Pertama"
              >
                <ChevronsLeft className="w-4 h-4" />
              </button>

              {/* Previous Page */}
              <button
                type="button"
                onClick={() => handlePageChange(validCurrentPage - 1)}
                disabled={validCurrentPage === 1}
                className="px-3 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-teal-700 dark:hover:text-teal-300 hover:bg-teal-50 dark:hover:bg-[#0c2a30] disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer flex items-center gap-1 border border-slate-200 dark:border-[#144951]"
                title="Halaman Sebelumnya"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Sebelumnya</span>
              </button>

              {/* Numbered Page Buttons */}
              <div className="flex items-center gap-1 mx-1">
                {getPageNumbers().map((pageItem, idx) => {
                  if (pageItem === '...') {
                    return (
                      <span key={`ellipsis-${idx}`} className="px-2 py-1 text-xs text-slate-400 font-bold select-none">
                        ...
                      </span>
                    );
                  }

                  const pageNumber = pageItem as number;
                  const isActive = pageNumber === validCurrentPage;

                  return (
                    <button
                      key={pageNumber}
                      type="button"
                      onClick={() => handlePageChange(pageNumber)}
                      className={`min-w-[36px] h-9 px-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#0f766e] text-white shadow-xs scale-105'
                          : 'bg-white dark:bg-[#071d21] text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#0c2a30] border border-slate-200 dark:border-[#144951]'
                      }`}
                    >
                      {pageNumber}
                    </button>
                  );
                })}
              </div>

              {/* Next Page */}
              <button
                type="button"
                onClick={() => handlePageChange(validCurrentPage + 1)}
                disabled={validCurrentPage === totalPages}
                className="px-3 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-teal-700 dark:hover:text-teal-300 hover:bg-teal-50 dark:hover:bg-[#0c2a30] disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer flex items-center gap-1 border border-slate-200 dark:border-[#144951]"
                title="Halaman Berikutnya"
              >
                <span className="hidden sm:inline">Berikutnya</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Last Page */}
              <button
                type="button"
                onClick={() => handlePageChange(totalPages)}
                disabled={validCurrentPage === totalPages}
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-teal-700 dark:hover:text-teal-300 hover:bg-teal-50 dark:hover:bg-[#0c2a30] disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer border border-slate-200 dark:border-[#144951]"
                title="Halaman Terakhir"
              >
                <ChevronsRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
        </div>
      ) : (
        <div className="bg-white dark:bg-[#071d21] p-10 rounded-2xl border border-slate-200 dark:border-[#144951] text-center space-y-4 shadow-xs">
          <Pill className="w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto" />
          <div className="space-y-1">
            <h3 className="text-base font-extrabold text-[#082a24] dark:text-white">Obat Tidak Ditemukan di Hasil Filter</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto font-medium">
              Tidak ada obat dalam tampilan cepat yang cocok dengan kriteria filter saat ini. Coba reset filter atau cari kata kunci lain.
            </p>
          </div>

          <div className="flex items-center justify-center gap-3">
            {isFiltered && (
              <button
                onClick={resetFilters}
                className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs px-4 py-2.5 rounded-xl transition-colors inline-flex items-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset Semua Filter</span>
              </button>
            )}

            {searchTerm.trim().length > 0 && (
              <button
                onClick={handleDynamicDDInterSearch}
                className="bg-[#0f766e] hover:bg-[#115e59] text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-colors inline-flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Muat Monografi Obat untuk "{searchTerm}"</span>
              </button>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
