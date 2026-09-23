import React, { useState, useMemo, useEffect } from 'react';
import {
  ShieldCheck,
  Search,
  CheckCircle2,
  AlertTriangle,
  Copy,
  Check,
  Printer,
  Activity,
  Zap,
  Clock,
  Layers,
  Sparkles,
  Info,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  RefreshCw,
  Calculator,
  Pill,
  BookOpen,
  FlaskConical,
  FileCheck,
  Lock,
  Flame,
  Bookmark,
  Scale,
  Scissors,
  Filter,
  ShieldAlert
} from 'lucide-react';
import { PaginationControls } from './PaginationControls';
import { FloatingPillsBackground } from './FloatingPillsBackground';
import {
  AwareCategory,
  AwareAntibiotic,
  WHO_AWARE_ANTIBIOTICS,
  PathogenAntibiogram,
  SAMPLE_HOSPITAL_ANTIBIOGRAM,
  GyssensCategoryInfo,
  GYSSENS_CATEGORIES,
  PkPdCategoryInfo,
  PKPD_OPTIMIZATION_GUIDELINES,
  WhoDddItem,
  WHO_DDD_DATABASE,
  calculateDddPer100PatientDays,
  SurgicalProphylaxisItem,
  SURGICAL_PROPHYLAXIS_DATABASE
} from '../data/antimicrobialStewardshipData';

interface AntimicrobialStewardshipManagerProps {
  onSelectTab?: (tab: string) => void;
}

export const AntimicrobialStewardshipManager: React.FC<AntimicrobialStewardshipManagerProps> = ({
  onSelectTab
}) => {
  // Main Tab State
  type MainTab = 'antibiogram' | 'aware' | 'gyssens' | 'clsipkpd' | 'ddd' | 'prophylaxis';
  const [activeTab, setActiveTab] = useState<MainTab>('antibiogram');

  // --- 1. Antibiogram State ---
  const [antibiogramGramFilter, setAntibiogramGramFilter] = useState<'all' | 'negative' | 'positive'>('all');
  const [antibiogramSearch, setAntibiogramSearch] = useState('');
  const [selectedPathogenId, setSelectedPathogenId] = useState<string>('ecoli-esbl');

  // --- 2. WHO AWaRe State ---
  const [awareFilter, setAwareFilter] = useState<'All' | AwareCategory>('All');
  const [awareSearch, setAwareSearch] = useState('');

  // --- 3. Gyssens Wizard State ---
  const [gyssensPatientName, setGyssensPatientName] = useState('Tn. Budi (48 th) - RM #82914');
  const [gyssensDrugName, setGyssensDrugName] = useState('Meropenem 1g IV tiap 8 jam');
  const [gyssensDiagnosis, setGyssensDiagnosis] = useState('Sepsis urogenital e.c. ISK komplikasi');
  const [step1CompleteRecord, setStep1CompleteRecord] = useState<'yes' | 'no'>('yes');
  const [step2HasIndication, setStep2HasIndication] = useState<'yes' | 'no'>('yes');
  const [step3MoreEffective, setStep3MoreEffective] = useState<'no' | 'yes'>('no');
  const [step4LessToxic, setStep4LessToxic] = useState<'no' | 'yes'>('no');
  const [step5Cheaper, setStep5Cheaper] = useState<'no' | 'yes'>('no');
  const [step6Deescalation, setStep6Deescalation] = useState<'no' | 'yes'>('no');
  const [step7Duration, setStep7Duration] = useState<'appropriate' | 'too_long' | 'too_short'>('appropriate');
  const [step8DosageDose, setStep8DosageDose] = useState<'appropriate' | 'wrong_dose' | 'wrong_interval' | 'wrong_route'>('appropriate');
  const [step9Timing, setStep9Timing] = useState<'appropriate' | 'inappropriate'>('appropriate');
  const [copiedGyssens, setCopiedGyssens] = useState(false);

  // --- 4. DDD Calculator State ---
  const [selectedDddItem, setSelectedDddItem] = useState<string>('ddd-meropenem-iv');
  const [totalGramsInput, setTotalGramsInput] = useState<string>('45');
  const [patientDaysInput, setPatientDaysInput] = useState<string>('120');


  // --- 5. Surgical Prophylaxis State ---
  const [prophylaxisCatFilter, setProphylaxisCatFilter] = useState<string>('all');
  const [prophylaxisSearch, setProphylaxisSearch] = useState('');
  const [selectedProphylaxisId, setSelectedProphylaxisId] = useState<string>('proph-appendectomy');

  // Filtered Antibiogram Pathogens
  const filteredPathogens = useMemo(() => {
    return SAMPLE_HOSPITAL_ANTIBIOGRAM.filter(p => {
      const matchGram = antibiogramGramFilter === 'all' || p.gram === antibiogramGramFilter;
      const matchSearch = p.name.toLowerCase().includes(antibiogramSearch.toLowerCase()) ||
        p.commonInfections.some(i => i.toLowerCase().includes(antibiogramSearch.toLowerCase()));
      return matchGram && matchSearch;
    });
  }, [antibiogramGramFilter, antibiogramSearch]);

  const activePathogen = useMemo(() => {
    return SAMPLE_HOSPITAL_ANTIBIOGRAM.find(p => p.id === selectedPathogenId) || SAMPLE_HOSPITAL_ANTIBIOGRAM[0];
  }, [selectedPathogenId]);

  // Filtered WHO AWaRe Antibiotics
  const filteredAwareList = useMemo(() => {
    return WHO_AWARE_ANTIBIOTICS.filter(a => {
      const matchCat = awareFilter === 'All' || a.category === awareFilter;
      const matchSearch = a.name.toLowerCase().includes(awareSearch.toLowerCase()) ||
        a.genericName.toLowerCase().includes(awareSearch.toLowerCase()) ||
        a.chemicalClass.toLowerCase().includes(awareSearch.toLowerCase()) ||
        a.primaryIndications.toLowerCase().includes(awareSearch.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [awareFilter, awareSearch]);

  // Pagination for WHO AWaRe catalog
  const [awareCurrentPage, setAwareCurrentPage] = useState(1);
  const [awareItemsPerPage, setAwareItemsPerPage] = useState(12);

  useEffect(() => {
    setAwareCurrentPage(1);
  }, [awareFilter, awareSearch]);

  const totalAwareItems = filteredAwareList.length;
  const totalAwarePages = Math.max(1, Math.ceil(totalAwareItems / awareItemsPerPage));
  const validAwarePage = Math.min(awareCurrentPage, totalAwarePages);

  const paginatedAwareList = useMemo(() => {
    const start = (validAwarePage - 1) * awareItemsPerPage;
    return filteredAwareList.slice(start, start + awareItemsPerPage);
  }, [filteredAwareList, validAwarePage, awareItemsPerPage]);


  // Filtered Surgical Prophylaxis Procedures
  const filteredProphylaxisList = useMemo(() => {
    return SURGICAL_PROPHYLAXIS_DATABASE.filter(p => {
      const matchCat = prophylaxisCatFilter === 'all' || p.category === prophylaxisCatFilter;
      const matchSearch =
        p.procedureName.toLowerCase().includes(prophylaxisSearch.toLowerCase()) ||
        p.categoryLabel.toLowerCase().includes(prophylaxisSearch.toLowerCase()) ||
        p.firstLineAntibiotic.toLowerCase().includes(prophylaxisSearch.toLowerCase()) ||
        p.targetPathogens.some(t => t.toLowerCase().includes(prophylaxisSearch.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [prophylaxisCatFilter, prophylaxisSearch]);

  const activeProphylaxis = useMemo(() => {
    return SURGICAL_PROPHYLAXIS_DATABASE.find(p => p.id === selectedProphylaxisId) || SURGICAL_PROPHYLAXIS_DATABASE[0];
  }, [selectedProphylaxisId]);

  // Evaluasi Logika Kategori Gyssens
  const evaluatedGyssens = useMemo((): GyssensCategoryInfo => {
    if (step1CompleteRecord === 'no') {
      return GYSSENS_CATEGORIES.find(c => c.category === 'VI')!;
    }
    if (step2HasIndication === 'no') {
      return GYSSENS_CATEGORIES.find(c => c.category === 'V')!;
    }
    if (step3MoreEffective === 'yes') {
      return GYSSENS_CATEGORIES.find(c => c.category === 'IVA')!;
    }
    if (step4LessToxic === 'yes') {
      return GYSSENS_CATEGORIES.find(c => c.category === 'IVB')!;
    }
    if (step5Cheaper === 'yes') {
      return GYSSENS_CATEGORIES.find(c => c.category === 'IVC')!;
    }
    if (step6Deescalation === 'yes') {
      return GYSSENS_CATEGORIES.find(c => c.category === 'IVD')!;
    }
    if (step7Duration === 'too_long') {
      return GYSSENS_CATEGORIES.find(c => c.category === 'IIIA')!;
    }
    if (step7Duration === 'too_short') {
      return GYSSENS_CATEGORIES.find(c => c.category === 'IIIB')!;
    }
    if (step8DosageDose === 'wrong_dose') {
      return GYSSENS_CATEGORIES.find(c => c.category === 'IIA')!;
    }
    if (step8DosageDose === 'wrong_interval') {
      return GYSSENS_CATEGORIES.find(c => c.category === 'IIB')!;
    }
    if (step8DosageDose === 'wrong_route') {
      return GYSSENS_CATEGORIES.find(c => c.category === 'IIC')!;
    }
    if (step9Timing === 'inappropriate') {
      return GYSSENS_CATEGORIES.find(c => c.category === 'I')!;
    }
    return GYSSENS_CATEGORIES.find(c => c.category === '0')!;
  }, [
    step1CompleteRecord,
    step2HasIndication,
    step3MoreEffective,
    step4LessToxic,
    step5Cheaper,
    step6Deescalation,
    step7Duration,
    step8DosageDose,
    step9Timing
  ]);

  // Copy Gyssens Report Text
  const handleCopyGyssens = () => {
    const text = `📋 FORMULIR EVALUASI AUDIT KUALITATIF GYSSENS (PPRA RS)
-----------------------------------------------------------
Pasien/RM       : ${gyssensPatientName}
Diagnosis       : ${gyssensDiagnosis}
Regimen Obat    : ${gyssensDrugName}
Hasil Evaluasi  : ${evaluatedGyssens.code} - ${evaluatedGyssens.title}
Status Klinis   : ${evaluatedGyssens.description}
Rekomendasi     : ${evaluatedGyssens.recommendation}
Tindak Lanjut   : ${evaluatedGyssens.actionRequired}
-----------------------------------------------------------
Apoteker Penilai: Tim Farmasi Klinis KPRA / FarmasiDruggist`;

    navigator.clipboard.writeText(text);
    setCopiedGyssens(true);
    setTimeout(() => setCopiedGyssens(false), 2500);
  };

  // DDD Calculations
  const currentDddObj = useMemo(() => {
    return WHO_DDD_DATABASE.find(d => d.id === selectedDddItem) || WHO_DDD_DATABASE[0];
  }, [selectedDddItem]);

  const calculatedDddResult = useMemo(() => {
    const grams = parseFloat(totalGramsInput) || 0;
    const days = parseFloat(patientDaysInput) || 0;
    return calculateDddPer100PatientDays(grams, currentDddObj.dddValueGrams, days);
  }, [totalGramsInput, patientDaysInput, currentDddObj]);

  return (
    <div className="space-y-8 pb-16">
      {/* HERO BANNER */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#02131b] via-[#052331] to-[#09374d] p-6 sm:p-8 text-white shadow-2xl border border-teal-500/25">
        <FloatingPillsBackground density="low" accentColor="#14b8a6" />
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-72 -bottom-10 opacity-10 pointer-events-none hidden lg:block">
          <ShieldCheck className="w-56 h-56 text-teal-400 -rotate-12" />
        </div>

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
            <div className="space-y-3 max-w-2xl">

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 text-white flex items-center justify-center shadow-lg shadow-teal-950/50 shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-black font-outfit tracking-tight">
                    Stewardship Antibiotik (PPRA) &amp; Antibiogram
                  </h1>
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
                    {WHO_AWARE_ANTIBIOTICS.length} Antibiotik
                  </span>
                </div>
                <div className="text-xs text-teal-100/80 space-y-1.5 font-medium">
                  <div className="flex justify-between items-center">
                    <span>Database AWaRe:</span>
                    <span className="font-mono font-bold text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded-md text-[11px]">{WHO_AWARE_ANTIBIOTICS.length} Molekul</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Peta Antibiogram:</span>
                    <span className="font-mono font-bold text-teal-300 bg-teal-950/60 px-2 py-0.5 rounded-md text-[11px]">{SAMPLE_HOSPITAL_ANTIBIOGRAM.length} Patogen RS</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Kalkulator Kuantitatif:</span>
                    <span className="font-mono font-bold text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded-md text-[11px]">{WHO_DDD_DATABASE.length} Standar DDD</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Profilaksis Bedah:</span>
                    <span className="font-mono font-bold text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded-md text-[11px]">{SURGICAL_PROPHYLAXIS_DATABASE.length} Prosedur</span>
                  </div>
                  <div className="flex justify-between items-center pt-1 border-t border-teal-900/40 text-[10px] text-teal-300/80">
                    <span>Standar Acuan:</span>
                    <span className="font-bold text-white">PMK 8/2015 &amp; WHO AWaRe</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NAVIGATION TABS (STANDALONE PILLS OUTSIDE HERO BANNER) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-teal-100 dark:border-teal-950/80 scrollbar-none">
        {[
          { id: 'antibiogram', label: 'Peta Kuman & Antibiogram', icon: FlaskConical, badge: `${SAMPLE_HOSPITAL_ANTIBIOGRAM.length}` },
          { id: 'aware', label: 'Klasifikasi WHO AWaRe 2024', icon: Pill, badge: `${WHO_AWARE_ANTIBIOTICS.length}` },
          { id: 'prophylaxis', label: 'Protokol Profilaksis Bedah', icon: ShieldAlert, badge: `${SURGICAL_PROPHYLAXIS_DATABASE.length}` },
          { id: 'gyssens', label: 'Alur Evaluasi Gyssens', icon: FileCheck, badge: 'I-VI' },
          { id: 'clsipkpd', label: 'CLSI S/I/R & Optimasi PK/PD', icon: Activity, badge: 'PK/PD' },
          { id: 'ddd', label: 'Kalkulator DDD Kemenkes', icon: Calculator, badge: `${WHO_DDD_DATABASE.length}` }
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as MainTab)}
              className={`rounded-2xl px-4 py-2.5 text-xs font-black font-outfit whitespace-nowrap cursor-pointer transition-all flex items-center gap-2 shrink-0 ${
                isActive
                  ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-md shadow-teal-950/40 border border-teal-400/30'
                  : 'bg-white dark:bg-[#041a1a] text-slate-600 dark:text-slate-300 hover:bg-teal-50/70 dark:hover:bg-teal-950/30 border border-slate-200 dark:border-teal-900/40 shadow-2xs'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-teal-600 dark:text-teal-400'}`} />
              <span>{tab.label}</span>
              {tab.badge && (
                <span className={`text-[9px] px-1.5 py-0.2 rounded-full font-mono font-bold ${
                  isActive ? 'bg-white/20 text-white' : 'bg-teal-500/10 text-teal-700 dark:text-teal-300'
                }`}>
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: PETA KUMAN & ANTIBIOGRAM INTERAKTIF */}
      {/* ========================================================================= */}
      {activeTab === 'antibiogram' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* SISI KIRI: DAFTAR PATOGEN (4 COLS) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white dark:bg-[#061e2b] border border-teal-200/80 dark:border-teal-500/25 rounded-3xl p-5 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black font-outfit uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <FlaskConical className="w-4 h-4 text-teal-500" />
                  Daftar Patogen Rumah Sakit
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 font-bold">
                  {filteredPathogens.length} Patogen
                </span>
              </div>

              {/* Filter Gram */}
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { id: 'all', label: 'Semua' },
                  { id: 'negative', label: 'Gram (-)' },
                  { id: 'positive', label: 'Gram (+)' }
                ].map(gf => (
                  <button
                    key={gf.id}
                    onClick={() => setAntibiogramGramFilter(gf.id as any)}
                    className={`py-1.5 rounded-xl text-[11px] font-bold transition-all cursor-pointer ${
                      antibiogramGramFilter === gf.id
                        ? 'bg-teal-500 text-white shadow-xs'
                        : 'bg-slate-100 dark:bg-[#03151e] text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                    }`}
                  >
                    {gf.label}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={antibiogramSearch}
                  onChange={(e) => setAntibiogramSearch(e.target.value)}
                  placeholder="Cari kuman (contoh: E. coli, MRSA, Pseudomonas)..."
                  className="w-full pl-8 pr-3 py-2 bg-slate-50 dark:bg-[#03151e] border border-slate-200 dark:border-teal-900/40 rounded-xl text-xs text-slate-800 dark:text-slate-200"
                />
              </div>

              {/* Pathogen List */}
              <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1">
                {filteredPathogens.map(pat => {
                  const isSelected = selectedPathogenId === pat.id;
                  return (
                    <button
                      key={pat.id}
                      onClick={() => setSelectedPathogenId(pat.id)}
                      className={`w-full text-left p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-2 ${
                        isSelected
                          ? 'border-teal-500 bg-teal-50/60 dark:bg-teal-950/40 ring-2 ring-teal-500/20'
                          : 'border-slate-200 dark:border-teal-900/30 hover:border-teal-400 bg-white dark:bg-[#04141d]'
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className={`w-2 h-2 rounded-full ${pat.gram === 'negative' ? 'bg-rose-500' : 'bg-purple-500'}`} />
                          <span className="text-xs font-black font-outfit text-slate-900 dark:text-white">
                            {pat.name}
                          </span>
                        </div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                          {pat.testedIsolatesCount} isolat teruji &bull; {pat.shape}
                        </div>
                      </div>
                      <ChevronRight className={`w-4 h-4 shrink-0 ${isSelected ? 'text-teal-500' : 'text-slate-400'}`} />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* SISI KANAN: DETAIL ANTIBIOGRAM MATRIKS (8 COLS) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white dark:bg-[#061e2b] border border-teal-200/80 dark:border-teal-500/25 rounded-3xl p-6 shadow-sm space-y-6">
              {/* Header Info Kuman */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-teal-900/40 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                      activePathogen.gram === 'negative'
                        ? 'bg-rose-500/20 text-rose-700 dark:text-rose-300 border border-rose-500/30'
                        : 'bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-500/30'
                    }`}>
                      Gram {activePathogen.gram === 'negative' ? 'Negatif (-)' : 'Positif (+)'} &bull; {activePathogen.shape}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
                      Sampel n = {activePathogen.testedIsolatesCount} Isolat
                    </span>
                  </div>
                  <h2 className="text-xl font-black font-outfit text-slate-900 dark:text-white mt-1">
                    {activePathogen.name}
                  </h2>
                </div>

                <div className="text-right sm:text-right">
                  <span className="text-[10px] text-slate-400 font-bold block">Rekomendasi Empiris Lini 1:</span>
                  <span className="text-xs font-black text-teal-600 dark:text-teal-400">
                    {activePathogen.firstLineEmpiric}
                  </span>
                </div>
              </div>

              {/* Mekanisme & Mutiara Klinis */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs">
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-800 dark:text-amber-300 block mb-1 flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    Mekanisme Resistensi Khas:
                  </span>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    {activePathogen.resistanceMechanism}
                  </p>
                </div>
                <div className="p-3.5 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-xs">
                  <span className="text-[10px] font-black uppercase tracking-wider text-teal-800 dark:text-teal-300 block mb-1 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    Pertimbangan Farmasi Klinis:
                  </span>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    {activePathogen.clinicalPearls}
                  </p>
                </div>
              </div>

              {/* Tabel Matriks Kepekaan Antibiotik */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-black font-outfit uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Matriks Kepekaan Antibiotik (Uji Difusi Cakram &amp; MIC VITEK/MicroScan)
                  </h3>
                  <div className="flex items-center gap-2 text-[10px]">
                    <span className="flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" /> &ge;80% Peka
                    </span>
                    <span className="flex items-center gap-1 font-bold text-amber-600 dark:text-amber-400">
                      <span className="w-2 h-2 rounded-full bg-amber-500" /> 60-79% Mod
                    </span>
                    <span className="flex items-center gap-1 font-bold text-rose-600 dark:text-rose-400">
                      <span className="w-2 h-2 rounded-full bg-rose-500" /> &lt;60% Res
                    </span>
                  </div>
                </div>

                <div className="border border-slate-200 dark:border-teal-900/30 rounded-2xl overflow-hidden">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50 dark:bg-[#03151e] border-b border-slate-200 dark:border-teal-900/40 text-[11px] font-bold text-slate-500 dark:text-slate-400 font-outfit">
                      <tr>
                        <th className="p-3">Antibiotik Teruji</th>
                        <th className="p-3 text-center">Persentase Sensitif (%S)</th>
                        <th className="p-3">CLSI Breakpoint MIC</th>
                        <th className="p-3">Interpretasi &amp; Catatan Klinis</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-teal-900/20">
                      {activePathogen.susceptibilities.map((s, idx) => {
                        const isHigh = s.percentS >= 80;
                        const isMed = s.percentS >= 60 && s.percentS < 80;
                        const isLow = s.percentS < 60;

                        return (
                          <tr key={idx} className="hover:bg-slate-50/60 dark:hover:bg-teal-950/20 transition-colors">
                            <td className="p-3 font-black text-slate-900 dark:text-white">
                              {s.antibiotic}
                            </td>
                            <td className="p-3 text-center">
                              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-black text-xs font-outfit">
                                <span className={`px-2 py-0.5 rounded-full ${
                                  isHigh ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-black' :
                                  isMed ? 'bg-amber-500/20 text-amber-700 dark:text-amber-300 font-bold' :
                                  'bg-rose-500/20 text-rose-700 dark:text-rose-300 font-bold'
                                }`}>
                                  {s.percentS}%
                                </span>
                              </div>
                            </td>
                            <td className="p-3 font-mono text-[11px] text-slate-600 dark:text-slate-400">
                              {s.micBreakpoints}
                            </td>
                            <td className="p-3">
                              <div className="flex items-center gap-1.5">
                                <span className={`text-[10px] px-1.5 py-0.2 rounded font-bold uppercase ${
                                  s.interpretationHint === 'Pilihan Utama' ? 'bg-teal-500 text-white' :
                                  s.interpretationHint === 'Sensitif' ? 'bg-emerald-100 text-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-300' :
                                  s.interpretationHint === 'Intermediet' ? 'bg-amber-100 text-amber-900 dark:bg-amber-950/60 dark:text-amber-300' :
                                  'bg-rose-100 text-rose-900 dark:bg-rose-950/60 dark:text-rose-300'
                                }`}>
                                  {s.interpretationHint}
                                </span>
                                {s.note && (
                                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                                    &bull; {s.note}
                                  </span>
                                )}
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: KLASIFIKASI WHO AWaRe 2024 */}
      {/* ========================================================================= */}
      {activeTab === 'aware' && (
        <div className="space-y-6">
          {/* Top Filter & Explanation Banner */}
          <div className="bg-white dark:bg-[#061e2b] border border-teal-200/80 dark:border-teal-500/25 rounded-3xl p-6 shadow-sm space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-black font-outfit text-slate-900 dark:text-white">
                  Katalog WHO AWaRe Classification (Access, Watch, Reserve)
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Standar baku Program Pengendalian Resistensi Antimikroba (PPRA Kemenkes RI &amp; Akreditasi STARKES).
                </p>
              </div>

              {/* Search Bar */}
              <div className="relative w-full md:w-72">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={awareSearch}
                  onChange={(e) => setAwareSearch(e.target.value)}
                  placeholder="Cari antibiotik AWaRe..."
                  className="w-full pl-8 pr-3 py-2 bg-slate-50 dark:bg-[#03151e] border border-slate-200 dark:border-teal-900/40 rounded-xl text-xs text-slate-800 dark:text-slate-200"
                />
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-teal-900/30">
              {[
                { id: 'All', label: 'Semua Kategori', count: WHO_AWARE_ANTIBIOTICS.length, color: 'bg-slate-800 text-white' },
                { id: 'Access', label: 'Access (Lini Pertama Aman)', count: WHO_AWARE_ANTIBIOTICS.filter(a => a.category === 'Access').length, color: 'bg-emerald-600 text-white' },
                { id: 'Watch', label: 'Watch (Pengawasan Ketat)', count: WHO_AWARE_ANTIBIOTICS.filter(a => a.category === 'Watch').length, color: 'bg-amber-500 text-slate-950 font-black' },
                { id: 'Reserve', label: 'Reserve (Cadangan Terakhir / MDR)', count: WHO_AWARE_ANTIBIOTICS.filter(a => a.category === 'Reserve').length, color: 'bg-rose-600 text-white' }
              ].map(cf => (
                <button
                  key={cf.id}
                  onClick={() => setAwareFilter(cf.id as any)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold font-outfit transition-all cursor-pointer flex items-center gap-1.5 ${
                    awareFilter === cf.id
                      ? `${cf.color} shadow-sm ring-2 ring-teal-400/30`
                      : 'bg-slate-100 dark:bg-[#03151e] text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  <span>{cf.label}</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-black/20 text-white">
                    {cf.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Grid Antibiotics Cards */}
          <div className="space-y-4" id="aware-catalog-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {paginatedAwareList.map(item => {
              const isAccess = item.category === 'Access';
              const isWatch = item.category === 'Watch';
              const isReserve = item.category === 'Reserve';

              return (
                <div
                  key={item.id}
                  className={`border rounded-3xl p-5 shadow-sm space-y-3 flex flex-col justify-between transition-all ${
                    isAccess
                      ? 'border-emerald-200/80 dark:border-emerald-500/30 bg-emerald-50/30 dark:bg-[#041e17]'
                      : isWatch
                      ? 'border-amber-200/80 dark:border-amber-500/30 bg-amber-50/30 dark:bg-[#1f1704]'
                      : 'border-rose-200/80 dark:border-rose-500/30 bg-rose-50/30 dark:bg-[#20050c]'
                  }`}
                >
                  <div className="space-y-2.5">
                    {/* Badge Category & Route */}
                    <div className="flex items-center justify-between gap-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black font-outfit uppercase tracking-wider ${
                        isAccess
                          ? 'bg-emerald-500 text-white shadow-xs'
                          : isWatch
                          ? 'bg-amber-400 text-slate-950 font-black shadow-xs'
                          : 'bg-rose-600 text-white font-black shadow-xs'
                      }`}>
                        {item.category}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-slate-300 font-bold">
                        {item.route}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-black font-outfit text-slate-900 dark:text-white leading-tight">
                        {item.name}
                      </h3>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                        {item.genericName} &bull; {item.chemicalClass}
                      </div>
                    </div>

                    <div className="space-y-1.5 text-xs">
                      <div className="p-2 rounded-xl bg-white/70 dark:bg-black/20 border border-slate-200/60 dark:border-white/5 space-y-0.5">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide block">Indikasi Primer:</span>
                        <p className="text-[11px] text-slate-700 dark:text-slate-300 leading-snug line-clamp-2">
                          {item.primaryIndications}
                        </p>
                      </div>

                      <div className="p-2 rounded-xl bg-white/70 dark:bg-black/20 border border-slate-200/60 dark:border-white/5 space-y-0.5">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide block">Dosis Lazim Dewasa:</span>
                        <p className="text-[11px] font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                          {item.typicalDose}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200/60 dark:border-white/10 space-y-2">
                    <div className="text-[10.5px] leading-relaxed text-slate-600 dark:text-slate-300">
                      💡 <span className="font-bold">Rekomendasi KPRA:</span> {item.stewardshipRecommendation}
                    </div>

                    <div className="flex items-center justify-between text-[10px]">
                      <span className="font-medium text-slate-400">Otorisasi Resep:</span>
                      <span className={`font-bold ${
                        isReserve ? 'text-rose-500 dark:text-rose-400 font-black' : 'text-slate-700 dark:text-slate-300'
                      }`}>
                        {item.kpraLevel}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
            </div>

            {/* Pagination Controls */}
            <PaginationControls
              currentPage={validAwarePage}
              totalPages={totalAwarePages}
              totalItems={totalAwareItems}
              itemsOnCurrentPage={paginatedAwareList.length}
              onPageChange={(newPage) => setAwareCurrentPage(newPage)}
              itemLabel="antibiotik AWaRe"
              itemsPerPage={awareItemsPerPage}
              onItemsPerPageChange={(newSize) => {
                setAwareItemsPerPage(newSize);
                setAwareCurrentPage(1);
              }}
              pageSizeOptions={[9, 12, 24, 48]}
              colorTheme="emerald"
              scrollToTopId="aware-catalog-container"
            />
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: ALUR EVALUASI KUALITATIF GYSSENS */}
      {/* ========================================================================= */}
      {activeTab === 'gyssens' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* SISI KIRI: WIZARD AUDIT PER RESEP (7 COLS) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white dark:bg-[#061e2b] border border-teal-200/80 dark:border-teal-500/25 rounded-3xl p-6 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-teal-900/40 pb-4">
                <div>
                  <h2 className="text-lg font-black font-outfit text-slate-900 dark:text-white flex items-center gap-2">
                    <FileCheck className="w-5 h-5 text-teal-500" />
                    Wizard Evaluasi Resep Metode Gyssens
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Ikuti 9 langkah baku evaluasi kerasionalan antibiotik rawat inap.
                  </p>
                </div>
                <button
                  onClick={handleCopyGyssens}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-teal-500 text-white hover:bg-teal-600 text-xs font-bold transition-all cursor-pointer shadow-xs"
                >
                  {copiedGyssens ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedGyssens ? 'Tersalin!' : 'Salin Laporan'}</span>
                </button>
              </div>

              {/* Data Pasien Form Input */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-[#03151e] border border-slate-200 dark:border-teal-900/40 text-xs">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 block mb-1">Nama Pasien &amp; No. RM:</span>
                  <input
                    type="text"
                    value={gyssensPatientName}
                    onChange={(e) => setGyssensPatientName(e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-lg bg-white dark:bg-[#061e2b] border border-slate-200 dark:border-teal-900/40 font-bold"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 block mb-1">Antibiotik &amp; Dosis:</span>
                  <input
                    type="text"
                    value={gyssensDrugName}
                    onChange={(e) => setGyssensDrugName(e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-lg bg-white dark:bg-[#061e2b] border border-slate-200 dark:border-teal-900/40 font-bold"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 block mb-1">Diagnosis Kerja Infeksi:</span>
                  <input
                    type="text"
                    value={gyssensDiagnosis}
                    onChange={(e) => setGyssensDiagnosis(e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-lg bg-white dark:bg-[#061e2b] border border-slate-200 dark:border-teal-900/40 font-bold"
                  />
                </div>
              </div>

              {/* 9 Langkah Alur Keputusan Gyssens */}
              <div className="space-y-3.5 text-xs">
                {/* Langkah 1: Kelengkapan Rekam Medis */}
                <div className="p-3.5 rounded-2xl border border-slate-200 dark:border-teal-900/40 flex items-center justify-between gap-3">
                  <div>
                    <span className="font-black text-slate-900 dark:text-white block">
                      1. Apakah catatan rekam medis &amp; data laboratorium lengkap untuk dievaluasi?
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      Jika tidak lengkap &rarr; otomatis Kategori VI (Tidak Dapat Dievaluasi)
                    </span>
                  </div>
                  <div className="flex gap-1.5 shrink-0">
                    <button
                      onClick={() => setStep1CompleteRecord('yes')}
                      className={`px-3 py-1 rounded-xl font-bold cursor-pointer transition-all ${
                        step1CompleteRecord === 'yes' ? 'bg-teal-500 text-white' : 'bg-slate-100 dark:bg-slate-800'
                      }`}
                    >
                      Lengkap
                    </button>
                    <button
                      onClick={() => setStep1CompleteRecord('no')}
                      className={`px-3 py-1 rounded-xl font-bold cursor-pointer transition-all ${
                        step1CompleteRecord === 'no' ? 'bg-rose-500 text-white' : 'bg-slate-100 dark:bg-slate-800'
                      }`}
                    >
                      Tidak (Kat VI)
                    </button>
                  </div>
                </div>

                {/* Langkah 2: Indikasi Infeksi */}
                <div className="p-3.5 rounded-2xl border border-slate-200 dark:border-teal-900/40 flex items-center justify-between gap-3">
                  <div>
                    <span className="font-black text-slate-900 dark:text-white block">
                      2. Apakah ada indikasi infeksi bakteri pada pasien ini?
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      Jika bukan bakteri (virus murni / non-infeksi) &rarr; Kategori V (Tanpa Indikasi)
                    </span>
                  </div>
                  <div className="flex gap-1.5 shrink-0">
                    <button
                      onClick={() => setStep2HasIndication('yes')}
                      className={`px-3 py-1 rounded-xl font-bold cursor-pointer transition-all ${
                        step2HasIndication === 'yes' ? 'bg-teal-500 text-white' : 'bg-slate-100 dark:bg-slate-800'
                      }`}
                    >
                      Ada Indikasi
                    </button>
                    <button
                      onClick={() => setStep2HasIndication('no')}
                      className={`px-3 py-1 rounded-xl font-bold cursor-pointer transition-all ${
                        step2HasIndication === 'no' ? 'bg-rose-500 text-white' : 'bg-slate-100 dark:bg-slate-800'
                      }`}
                    >
                      Tidak (Kat V)
                    </button>
                  </div>
                </div>

                {/* Langkah 3: Alternatif Lebih Efektif (IVA) */}
                <div className="p-3.5 rounded-2xl border border-slate-200 dark:border-teal-900/40 flex items-center justify-between gap-3">
                  <div>
                    <span className="font-black text-slate-900 dark:text-white block">
                      3. Apakah ada pilihan antibiotik lain yang terbukti LEBIH EFEKTIF?
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      Misal Vankomisin pada MSSA padahal Sefazolin jauh lebih bakterisid &rarr; Kategori IV-A
                    </span>
                  </div>
                  <div className="flex gap-1.5 shrink-0">
                    <button
                      onClick={() => setStep3MoreEffective('no')}
                      className={`px-3 py-1 rounded-xl font-bold cursor-pointer transition-all ${
                        step3MoreEffective === 'no' ? 'bg-teal-500 text-white' : 'bg-slate-100 dark:bg-slate-800'
                      }`}
                    >
                      Sudah Efektif
                    </button>
                    <button
                      onClick={() => setStep3MoreEffective('yes')}
                      className={`px-3 py-1 rounded-xl font-bold cursor-pointer transition-all ${
                        step3MoreEffective === 'yes' ? 'bg-amber-500 text-slate-950 font-black' : 'bg-slate-100 dark:bg-slate-800'
                      }`}
                    >
                      Ada Lebih Efektif (IV-A)
                    </button>
                  </div>
                </div>

                {/* Langkah 4: Alternatif Lebih Aman (IVB) */}
                <div className="p-3.5 rounded-2xl border border-slate-200 dark:border-teal-900/40 flex items-center justify-between gap-3">
                  <div>
                    <span className="font-black text-slate-900 dark:text-white block">
                      4. Apakah ada pilihan antibiotik yang KURANG TOKSIK / LEBIH AMAN?
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      Misal Aminoglikosida pada geriatri gangguan ginjal padahal ada alternatif aman &rarr; Kategori IV-B
                    </span>
                  </div>
                  <div className="flex gap-1.5 shrink-0">
                    <button
                      onClick={() => setStep4LessToxic('no')}
                      className={`px-3 py-1 rounded-xl font-bold cursor-pointer transition-all ${
                        step4LessToxic === 'no' ? 'bg-teal-500 text-white' : 'bg-slate-100 dark:bg-slate-800'
                      }`}
                    >
                      Sudah Aman
                    </button>
                    <button
                      onClick={() => setStep4LessToxic('yes')}
                      className={`px-3 py-1 rounded-xl font-bold cursor-pointer transition-all ${
                        step4LessToxic === 'yes' ? 'bg-amber-500 text-slate-950 font-black' : 'bg-slate-100 dark:bg-slate-800'
                      }`}
                    >
                      Ada Lebih Aman (IV-B)
                    </button>
                  </div>
                </div>

                {/* Langkah 5: De-eskalasi Spektrum Luas (IVD) */}
                <div className="p-3.5 rounded-2xl border border-slate-200 dark:border-teal-900/40 flex items-center justify-between gap-3">
                  <div>
                    <span className="font-black text-slate-900 dark:text-white block">
                      5. Hasil biakan kultur sudah ada, apakah spektrum terlalu luas? (De-eskalasi)
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      Kuman peka seftriakson tapi masih diberikan meropenem &rarr; Kategori IV-D
                    </span>
                  </div>
                  <div className="flex gap-1.5 shrink-0">
                    <button
                      onClick={() => setStep6Deescalation('no')}
                      className={`px-3 py-1 rounded-xl font-bold cursor-pointer transition-all ${
                        step6Deescalation === 'no' ? 'bg-teal-500 text-white' : 'bg-slate-100 dark:bg-slate-800'
                      }`}
                    >
                      Spektrum Pas
                    </button>
                    <button
                      onClick={() => setStep6Deescalation('yes')}
                      className={`px-3 py-1 rounded-xl font-bold cursor-pointer transition-all ${
                        step6Deescalation === 'yes' ? 'bg-amber-500 text-slate-950 font-black' : 'bg-slate-100 dark:bg-slate-800'
                      }`}
                    >
                      De-eskalasi (IV-D)
                    </button>
                  </div>
                </div>

                {/* Langkah 6: Durasi Terapi (IIIA / IIIB) */}
                <div className="p-3.5 rounded-2xl border border-slate-200 dark:border-teal-900/40 flex items-center justify-between gap-3">
                  <div>
                    <span className="font-black text-slate-900 dark:text-white block">
                      6. Bagaimana durasi pemberian antibiotik pasien ini?
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      Terlalu lama &rarr; Kategori III-A | Terlalu singkat &rarr; Kategori III-B
                    </span>
                  </div>
                  <div className="flex gap-1.5 shrink-0">
                    <button
                      onClick={() => setStep7Duration('appropriate')}
                      className={`px-3 py-1 rounded-xl font-bold cursor-pointer transition-all ${
                        step7Duration === 'appropriate' ? 'bg-teal-500 text-white' : 'bg-slate-100 dark:bg-slate-800'
                      }`}
                    >
                      Tepat
                    </button>
                    <button
                      onClick={() => setStep7Duration('too_long')}
                      className={`px-3 py-1 rounded-xl font-bold cursor-pointer transition-all ${
                        step7Duration === 'too_long' ? 'bg-orange-500 text-white' : 'bg-slate-100 dark:bg-slate-800'
                      }`}
                    >
                      Lama (III-A)
                    </button>
                    <button
                      onClick={() => setStep7Duration('too_short')}
                      className={`px-3 py-1 rounded-xl font-bold cursor-pointer transition-all ${
                        step7Duration === 'too_short' ? 'bg-orange-500 text-white' : 'bg-slate-100 dark:bg-slate-800'
                      }`}
                    >
                      Singkat (III-B)
                    </button>
                  </div>
                </div>

                {/* Langkah 7: Dosis, Interval, Rute (IIA, IIB, IIC) */}
                <div className="p-3.5 rounded-2xl border border-slate-200 dark:border-teal-900/40 flex items-center justify-between gap-3">
                  <div>
                    <span className="font-black text-slate-900 dark:text-white block">
                      7. Ketepatan Dosis, Frekuensi Interval, dan Rute (IV-to-Oral Switch):
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      Dosis salah (II-A) | Interval salah (II-B) | Rute salah/bisa oral (II-C)
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 shrink-0">
                    <button
                      onClick={() => setStep8DosageDose('appropriate')}
                      className={`px-2.5 py-1 rounded-xl font-bold cursor-pointer transition-all ${
                        step8DosageDose === 'appropriate' ? 'bg-teal-500 text-white' : 'bg-slate-100 dark:bg-slate-800'
                      }`}
                    >
                      Semua Tepat
                    </button>
                    <button
                      onClick={() => setStep8DosageDose('wrong_dose')}
                      className={`px-2.5 py-1 rounded-xl font-bold cursor-pointer transition-all ${
                        step8DosageDose === 'wrong_dose' ? 'bg-yellow-500 text-slate-950 font-bold' : 'bg-slate-100 dark:bg-slate-800'
                      }`}
                    >
                      Dosis (II-A)
                    </button>
                    <button
                      onClick={() => setStep8DosageDose('wrong_interval')}
                      className={`px-2.5 py-1 rounded-xl font-bold cursor-pointer transition-all ${
                        step8DosageDose === 'wrong_interval' ? 'bg-yellow-500 text-slate-950 font-bold' : 'bg-slate-100 dark:bg-slate-800'
                      }`}
                    >
                      Interval (II-B)
                    </button>
                    <button
                      onClick={() => setStep8DosageDose('wrong_route')}
                      className={`px-2.5 py-1 rounded-xl font-bold cursor-pointer transition-all ${
                        step8DosageDose === 'wrong_route' ? 'bg-yellow-500 text-slate-950 font-bold' : 'bg-slate-100 dark:bg-slate-800'
                      }`}
                    >
                      IV-to-Oral (II-C)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SISI KANAN: HASIL KATEGORI GYSSENS (5 COLS) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-[#061e2b] border border-teal-200/80 dark:border-teal-500/25 rounded-3xl p-6 shadow-sm space-y-4">
              <span className="text-xs font-black font-outfit uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                Hasil Kesimpulan Audit Kualitatif
              </span>

              {/* Result Card */}
              <div className={`border-2 rounded-3xl p-6 text-center space-y-3 ${evaluatedGyssens.color}`}>
                <div className="text-3xl font-black font-outfit tracking-tight">
                  {evaluatedGyssens.code}
                </div>
                <div className="text-sm font-black uppercase tracking-wide">
                  {evaluatedGyssens.title}
                </div>
                <p className="text-xs leading-relaxed font-medium opacity-90">
                  {evaluatedGyssens.description}
                </p>
              </div>

              {/* Action & Recommendation Box */}
              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-teal-500/10 border border-teal-500/20 space-y-1">
                  <span className="text-[10px] font-black text-teal-800 dark:text-teal-300 uppercase tracking-wide block">
                    Rekomendasi Apoteker Klinis KPRA:
                  </span>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    {evaluatedGyssens.recommendation}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-[#03151e] border border-slate-200 dark:border-teal-900/40 space-y-1">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-wide block">
                    Tindak Lanjut Dokumen Rekam Medis (CPPT):
                  </span>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    {evaluatedGyssens.actionRequired}
                  </p>
                </div>
              </div>
            </div>

            {/* Referensi 13 Kategori Gyssens */}
            <div className="bg-white dark:bg-[#061e2b] border border-slate-200 dark:border-teal-900/30 rounded-3xl p-5 shadow-sm space-y-3">
              <span className="text-xs font-black font-outfit uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                Referensi Klasifikasi Baku Gyssens (0 s/d VI)
              </span>
              <div className="space-y-1 text-[11px]">
                {GYSSENS_CATEGORIES.map(c => (
                  <div key={c.category} className="flex items-center justify-between p-1.5 rounded-lg hover:bg-slate-50 dark:hover:bg-[#03151e]">
                    <span className="font-bold text-slate-800 dark:text-slate-200">{c.code}</span>
                    <span className="text-slate-500 dark:text-slate-400 truncate max-w-[200px]">{c.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: INTERPRETASI CLSI S/I/R & OPTIMASI PK/PD */}
      {/* ========================================================================= */}
      {activeTab === 'clsipkpd' && (
        <div className="space-y-6">
          {/* Penjelasan Definisi S, I, R CLSI / EUCAST */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* S */}
            <div className="bg-white dark:bg-[#061e2b] border-2 border-emerald-400 dark:border-emerald-500/40 rounded-3xl p-5 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-9 h-9 rounded-2xl bg-emerald-500 text-white font-black text-base flex items-center justify-center font-outfit">
                  S
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-black">
                  SUSCEPTIBLE
                </span>
              </div>
              <div>
                <h3 className="text-sm font-black font-outfit text-slate-900 dark:text-white">
                  Peka pada Dosis Standar
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                  Probabilitas keberhasilan terapi sangat tinggi menggunakan dosis rejimen standar yang direkomendasikan pada etiket obat.
                </p>
              </div>
              <div className="text-[11px] p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-300 font-medium">
                ✅ Pilihan terapi lini pertama aman dan efektif.
              </div>
            </div>

            {/* I */}
            <div className="bg-white dark:bg-[#061e2b] border-2 border-amber-400 dark:border-amber-500/40 rounded-3xl p-5 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-9 h-9 rounded-2xl bg-amber-400 text-slate-950 font-black text-base flex items-center justify-center font-outfit">
                  I
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 font-black">
                  INCREASED EXPOSURE
                </span>
              </div>
              <div>
                <h3 className="text-sm font-black font-outfit text-slate-900 dark:text-white">
                  Peka dengan Peningkatan Paparan
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                  Kuman TETAP DAPAT DIOBATI, namun membutuhkan peningkatan dosis, pemendekan interval, perpanjangan waktu infus (Extended Infusion), atau konsentrasi pekat lokal di organ target (misal ISK).
                </p>
              </div>
              <div className="text-[11px] p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 text-amber-900 dark:text-amber-300 font-medium">
                ⚠️ Gunakan dosis maksimal atau strategi infus 3-4 jam.
              </div>
            </div>

            {/* R */}
            <div className="bg-white dark:bg-[#061e2b] border-2 border-rose-400 dark:border-rose-500/40 rounded-3xl p-5 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-9 h-9 rounded-2xl bg-rose-500 text-white font-black text-base flex items-center justify-center font-outfit">
                  R
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-900 dark:text-rose-300 font-black">
                  RESISTANT
                </span>
              </div>
              <div>
                <h3 className="text-sm font-black font-outfit text-slate-900 dark:text-white">
                  Resisten (Gagal Terapi)
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                  Probabilitas tinggi kegagalan klinis bahkan dengan dosis maksimal. Kuman memiliki mekanisme inaktivasi enzim, mutasi target, atau pompa efluks.
                </p>
              </div>
              <div className="text-[11px] p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/30 text-rose-900 dark:text-rose-300 font-medium">
                ❌ HINDARI PENGGUNAAN! Cari alternatif kelas lain.
              </div>
            </div>
          </div>

          {/* 3 Parameter PK/PD Utama */}
          <div className="bg-white dark:bg-[#061e2b] border border-teal-200/80 dark:border-teal-500/25 rounded-3xl p-6 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-black font-outfit text-slate-900 dark:text-white flex items-center gap-2">
                  <Activity className="w-5 h-5 text-teal-500" />
                  Optimasi Parameter Farmakokinetika &amp; Farmakodinamika (PK/PD)
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Tiga pola dasar pembunuhan bakteri untuk mencapai Clinical Cure dan mencegah resistensi.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {PKPD_OPTIMIZATION_GUIDELINES.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-3xl bg-slate-50 dark:bg-[#03151e] border border-slate-200 dark:border-teal-900/30 space-y-3.5"
                >
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/15 text-teal-800 dark:text-teal-300 font-black text-xs font-outfit border border-teal-500/20">
                    <Zap className="w-3.5 h-3.5 text-teal-500" />
                    <span>{item.indexType}</span>
                  </div>

                  <div className="space-y-1.5 text-xs">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide block">Golongan Antibiotik:</span>
                      <p className="font-bold text-slate-800 dark:text-slate-200">{item.primaryClasses}</p>
                    </div>

                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide block">Target Sasaran PK/PD:</span>
                      <p className="text-slate-600 dark:text-slate-300 leading-snug">{item.targetGoal}</p>
                    </div>

                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide block">Strategi Dosing Apoteker:</span>
                      <p className="font-semibold text-teal-700 dark:text-teal-300 leading-snug">{item.optimizationStrategy}</p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white dark:bg-[#061e2b] border border-slate-200/80 dark:border-teal-900/40">
                      <span className="text-[10px] font-black text-amber-600 dark:text-amber-400 block mb-0.5">Contoh Protokol RS:</span>
                      <p className="text-[11px] text-slate-700 dark:text-slate-300 font-medium leading-snug">
                        {item.clinicalExamples}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 5: KALKULATOR KUANTITATIF DDD WHO / KEMENKES */}
      {/* ========================================================================= */}
      {activeTab === 'ddd' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* SISI KIRI: KALKULATOR INPUT (6 COLS) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white dark:bg-[#061e2b] border border-teal-200/80 dark:border-teal-500/25 rounded-3xl p-6 shadow-sm space-y-5">
              <div>
                <h2 className="text-lg font-black font-outfit text-slate-900 dark:text-white flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-teal-500" />
                  Kalkulator DDD per 100 Patient-Days
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Standar evaluasi kuantitatif konsumsi antibiotik RS (Permenkes 8/2015 &amp; WHO ATC/DDD).
                </p>
              </div>

              {/* Form Input */}
              <div className="space-y-4 text-xs">
                <div>
                  <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 block mb-1">
                    Pilih Antibiotik Terdata (Standar Baku WHO):
                  </label>
                  <select
                    value={selectedDddItem}
                    onChange={(e) => setSelectedDddItem(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-[#03151e] border border-slate-200 dark:border-teal-900/40 text-xs font-bold text-slate-800 dark:text-slate-200"
                  >
                    {WHO_DDD_DATABASE.map(d => (
                      <option key={d.id} value={d.id}>
                        {d.antibioticName} ({d.route}) &bull; DDD: {d.dddValueGrams} {d.unit} &bull; ATC: {d.atcCode}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 block mb-1">
                      Total Konsumsi (Gram):
                    </label>
                    <input
                      type="number"
                      step="any"
                      value={totalGramsInput}
                      onChange={(e) => setTotalGramsInput(e.target.value)}
                      placeholder="Contoh: 45"
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-[#03151e] border border-slate-200 dark:border-teal-900/40 text-xs font-bold text-slate-800 dark:text-slate-200"
                    />
                    <span className="text-[10px] text-slate-400 mt-1 block">Total vial/tablet &times; kekuatan gram</span>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400 block mb-1">
                      Hari Rawat (Patient Days):
                    </label>
                    <input
                      type="number"
                      value={patientDaysInput}
                      onChange={(e) => setPatientDaysInput(e.target.value)}
                      placeholder="Contoh: 120"
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-[#03151e] border border-slate-200 dark:border-teal-900/40 text-xs font-bold text-slate-800 dark:text-slate-200"
                    />
                    <span className="text-[10px] text-slate-400 mt-1 block">Jumlah pasien &times; lama rawat (LOS)</span>
                  </div>
                </div>
              </div>

              {/* Rumus Matematika Box */}
              <div className="p-4 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-xs space-y-1.5">
                <span className="text-[10px] font-black uppercase tracking-wider text-teal-800 dark:text-teal-300 block">
                  Rumus Baku Kemenkes &amp; WHO:
                </span>
                <div className="font-mono text-[11px] text-slate-800 dark:text-teal-200 font-bold">
                  DDD / 100 Patient-Days = (Total Gram / DDD WHO) &times; 100 / Hari Rawat
                </div>
              </div>
            </div>
          </div>

          {/* SISI KANAN: HASIL KALKULASI & INTERPRETASI (6 COLS) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white dark:bg-[#061e2b] border border-teal-200/80 dark:border-teal-500/25 rounded-3xl p-6 shadow-sm space-y-5">
              <span className="text-xs font-black font-outfit uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                Hasil Densitas Konsumsi
              </span>

              {/* Output Score Box */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-[#031822] to-[#073042] text-white text-center space-y-2 border border-teal-500/30 shadow-xl">
                <span className="text-[11px] text-teal-300 font-bold uppercase tracking-wider block">
                  {currentDddObj.antibioticName} ({currentDddObj.category})
                </span>
                <div className="text-4xl sm:text-5xl font-black font-outfit text-teal-400 tracking-tight">
                  {calculatedDddResult}
                </div>
                <div className="text-xs font-medium text-slate-300">
                  DDD per 100 Patient-Days (Hari Rawat)
                </div>
              </div>

              {/* Interpretasi Hasil */}
              <div className="space-y-2.5 text-xs">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-[#03151e] border border-slate-200 dark:border-teal-900/30">
                  <span className="text-slate-500 font-medium">DDD Standar WHO:</span>
                  <span className="font-black text-slate-900 dark:text-white font-mono">
                    {currentDddObj.dddValueGrams} {currentDddObj.unit} / hari
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-[#03151e] border border-slate-200 dark:border-teal-900/30">
                  <span className="text-slate-500 font-medium">Kode ATC Internasional:</span>
                  <span className="font-mono font-bold text-teal-600 dark:text-teal-400">
                    {currentDddObj.atcCode}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-800 dark:text-amber-300 block mb-0.5">
                    Catatan Kemenkes RI:
                  </span>
                  <p className="text-[11px] text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    {currentDddObj.clinicalNote}. Data ini dilaporkan berkala per semester kepada Komite Pengendalian Resistensi Antimikroba (KPRA) rumah sakit untuk evaluasi tren resistensi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 6: PROTOKOL PROFILAKSIS BEDAH (SURGICAL PROPHYLAXIS) */}
      {/* ========================================================================= */}
      {activeTab === 'prophylaxis' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* SISI KIRI: DAFTAR PROSEDUR BEDAH (4 COLS) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white dark:bg-[#061e2b] border border-teal-200/80 dark:border-teal-500/25 rounded-3xl p-5 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black font-outfit uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <Scissors className="w-4 h-4 text-teal-500" />
                  Daftar Prosedur Bedah
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 font-bold">
                  {filteredProphylaxisList.length} Prosedur
                </span>
              </div>

              {/* Filter Spesialisasi Bedah */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 custom-scrollbar">
                {[
                  { id: 'all', label: 'Semua' },
                  { id: 'digestif', label: 'Digestif' },
                  { id: 'obgyn', label: 'Obgyn' },
                  { id: 'ortho', label: 'Ortopedi' },
                  { id: 'cardio', label: 'Jantung' },
                  { id: 'urology', label: 'Urologi' },
                  { id: 'neuro', label: 'Saraf' },
                  { id: 'general', label: 'Umum' },
                  { id: 'ent', label: 'THT' }
                ].map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setProphylaxisCatFilter(cat.id)}
                    className={`px-2.5 py-1 rounded-xl text-[10px] font-bold whitespace-nowrap transition-all cursor-pointer ${
                      prophylaxisCatFilter === cat.id
                        ? 'bg-teal-500 text-white shadow-xs'
                        : 'bg-slate-100 dark:bg-[#03151e] text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={prophylaxisSearch}
                  onChange={(e) => setProphylaxisSearch(e.target.value)}
                  placeholder="Cari operasi (misal: sesar, apendiktomi, panggul)..."
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#04141d] border border-slate-200 dark:border-teal-900/40 rounded-xl text-xs font-medium font-outfit text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-hidden focus:border-teal-500"
                />
              </div>

              {/* Procedure Cards List */}
              <div className="space-y-2 max-h-[460px] overflow-y-auto pr-1 custom-scrollbar">
                {filteredProphylaxisList.map(p => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedProphylaxisId(p.id)}
                    className={`w-full text-left p-3 rounded-2xl border transition-all cursor-pointer ${
                      selectedProphylaxisId === p.id
                        ? 'bg-teal-50 dark:bg-teal-950/40 border-teal-500 shadow-xs ring-1 ring-teal-500/30'
                        : 'bg-white dark:bg-[#041620] border-slate-200 dark:border-teal-900/30 hover:border-teal-400'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1.5 mb-1">
                      <span className="text-[9px] font-bold px-2 py-0.2 rounded-md bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20">
                        {p.categoryLabel.split('/')[0].trim()}
                      </span>
                      <span className={`text-[9px] font-bold px-2 py-0.2 rounded-md ${
                        p.woundClassification === 'Bersih'
                          ? 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20'
                          : 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20'
                      }`}>
                        {p.woundClassification}
                      </span>
                    </div>
                    <div className="text-xs font-bold font-outfit text-slate-800 dark:text-slate-200 leading-snug">
                      {p.procedureName}
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 truncate">
                      💊 {p.firstLineAntibiotic.split('+')[0].split('(')[0]}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* SISI KANAN: DETAIL PROTOKOL PROFILAKSIS (8 COLS) */}
          <div className="lg:col-span-8 space-y-5">
            {activeProphylaxis && (
              <div className="bg-white dark:bg-[#061e2b] border border-teal-200/80 dark:border-teal-500/25 rounded-3xl p-6 sm:p-7 shadow-sm space-y-6">
                {/* Header Prosedur */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-teal-900/40 pb-4">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-700 dark:text-teal-300 border border-teal-500/30 font-outfit">
                        {activeProphylaxis.categoryLabel}
                      </span>
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        Klasifikasi Luka: <strong className="text-teal-600 dark:text-teal-400">{activeProphylaxis.woundClassification}</strong>
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black font-outfit text-slate-900 dark:text-white">
                      {activeProphylaxis.procedureName}
                    </h2>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-700 dark:text-teal-300 text-xs font-bold font-outfit self-start sm:self-center">
                    <ShieldCheck className="w-4 h-4 text-teal-500" />
                    <span>Standar Permenkes 8/2015 &amp; ASHP</span>
                  </div>
                </div>

                {/* 1. LINI PERTAMA ANTIBIOTIK & DOSIS */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-teal-500/10 via-emerald-500/10 to-transparent border border-teal-500/30 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-teal-700 dark:text-teal-300 font-outfit">
                    <Pill className="w-4 h-4 text-teal-500" />
                    <span>Antibiotik Lini Pertama &amp; Dosis Standar Dewasa</span>
                  </div>
                  <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {activeProphylaxis.firstLineAntibiotic}
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                    {activeProphylaxis.standardDoseAdult}
                  </div>
                </div>

                {/* 2. TIMELINE JAM PEMBERIAN PRE-INSISI & REDOSING */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* Timing Box */}
                  <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40 space-y-1">
                    <div className="flex items-center gap-1.5 text-[10px] font-black uppercase text-amber-700 dark:text-amber-400 font-outfit">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Waktu Pre-Insisi:</span>
                    </div>
                    <div className="text-xs font-bold text-amber-950 dark:text-amber-200">
                      {activeProphylaxis.timingPreIncision}
                    </div>
                    <div className="text-[10px] text-amber-800/80 dark:text-amber-300/80">
                      Wajib tuntas sebelum pisau menyayat kulit
                    </div>
                  </div>

                  {/* Redosing Box */}
                  <div className="p-4 rounded-2xl bg-teal-50 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800/40 space-y-1">
                    <div className="flex items-center gap-1.5 text-[10px] font-black uppercase text-teal-700 dark:text-teal-400 font-outfit">
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Dosis Ulang (Redosing):</span>
                    </div>
                    <div className="text-xs font-bold text-teal-950 dark:text-teal-200">
                      {activeProphylaxis.redosingIntervalHours}
                    </div>
                    <div className="text-[10px] text-teal-800/80 dark:text-teal-300/80">
                      Juga diulang bila perdarahan &gt;1.500 mL
                    </div>
                  </div>

                  {/* Max Duration Box */}
                  <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800/40 space-y-1">
                    <div className="flex items-center gap-1.5 text-[10px] font-black uppercase text-rose-700 dark:text-rose-400 font-outfit">
                      <Zap className="w-3.5 h-3.5" />
                      <span>Durasi Maksimal:</span>
                    </div>
                    <div className="text-xs font-bold text-rose-950 dark:text-rose-200">
                      {activeProphylaxis.maxDurationHours}
                    </div>
                    <div className="text-[10px] text-rose-800/80 dark:text-rose-300/80">
                      Stop order otomatis berlaku
                    </div>
                  </div>
                </div>

                {/* 3. PENYESUAIAN OBESITAS & ALERGI PENISILIN */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#03151e] border border-slate-200 dark:border-teal-900/30 space-y-1">
                    <div className="text-[10px] font-black uppercase text-slate-500 dark:text-slate-400 font-outfit">
                      ⚖️ Penyesuaian Dosis Obesitas (BB &gt;120 kg):
                    </div>
                    <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                      {activeProphylaxis.obeseDoseAdjustment}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-rose-50/70 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-800/30 space-y-1">
                    <div className="text-[10px] font-black uppercase text-rose-700 dark:text-rose-400 font-outfit">
                      ⚠️ Alternatif Alergi Penisilin / Beta-Laktam:
                    </div>
                    <p className="text-xs font-semibold text-rose-900 dark:text-rose-200">
                      {activeProphylaxis.betaLactamAllergyAlternative}
                    </p>
                  </div>
                </div>

                {/* 4. TARGET PATOGEN BAKTERI */}
                <div className="space-y-2">
                  <span className="text-xs font-black font-outfit uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    🦠 Target Patogen Bakteri Penyebab ILO (Infeksi Luka Operasi):
                  </span>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {activeProphylaxis.targetPathogens.map((tp, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800/50 text-xs font-semibold text-teal-800 dark:text-teal-200"
                      >
                        {tp}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 5. CRITICAL CHECKPOINTS AKREDITASI STARKES */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#03151e] border border-slate-200 dark:border-teal-900/30 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-teal-700 dark:text-teal-300 font-outfit">
                    <FileCheck className="w-4 h-4 text-teal-500" />
                    <span>Kaidah Mutu Klinis &amp; Akreditasi STARKES (PPRA)</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                    {activeProphylaxis.clinicalCheckpoints.map((cp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{cp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
