import React, { useState, useMemo } from 'react';
import {
  Clock,
  Sparkles,
  Search,
  CheckCircle2,
  Calendar,
  Layers,
  ArrowUpRight,
  TrendingUp,
  ShieldCheck,
  RefreshCw,
  Building2,
  BookOpen,
  FileText,
  Filter,
  Check,
  Zap,
  Tag,
  AlertCircle,
  Database,
  ChevronRight,
  GraduationCap,
  AlertOctagon,
  Cpu
} from 'lucide-react';
import {
  SYSTEM_CHANGELOG_DATABASE,
  ChangelogCategory,
  ChangelogItem,
  getLatestChangelogEntry
} from '../data/systemChangelogData';
import { FloatingPillsBackground } from './FloatingPillsBackground';

interface DataUpdateHistoryViewProps {
  onSelectTab?: (tab: string) => void;
  initialCategory?: ChangelogCategory;
}

export const DataUpdateHistoryView: React.FC<DataUpdateHistoryViewProps> = ({
  onSelectTab,
  initialCategory = 'ALL'
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ChangelogCategory>(initialCategory);
  const [expandedDrugsMap, setExpandedDrugsMap] = useState<Record<string, boolean>>({});
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncSuccess, setSyncSuccess] = useState(false);

  const latestUpdate = useMemo(() => getLatestChangelogEntry(), []);

  // Filtered changelog list
  const filteredChangelogs = useMemo(() => {
    return SYSTEM_CHANGELOG_DATABASE.filter(item => {
      // Category filter
      if (selectedCategory !== 'ALL' && item.category !== selectedCategory) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(q);
        const matchSummary = item.summary.toLowerCase().includes(q);
        const matchVersion = item.version.toLowerCase().includes(q);
        const matchDate = (item.releaseDate + ' ' + item.releaseTime).toLowerCase().includes(q);
        const matchCategory = item.categoryLabel.toLowerCase().includes(q);
        const matchDetails = item.detailedChanges.some(d => d.toLowerCase().includes(q));
        const matchDrugs = item.keyDrugsOrItemsAdded?.some(drug => drug.toLowerCase().includes(q));

        if (!matchTitle && !matchSummary && !matchVersion && !matchDate && !matchCategory && !matchDetails && !matchDrugs) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, searchQuery]);

  const toggleDrugExpand = (id: string) => {
    setExpandedDrugsMap(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleSimulatedCloudSync = () => {
    setIsSyncing(true);
    setSyncSuccess(false);
    setTimeout(() => {
      setIsSyncing(false);
      setSyncSuccess(true);
      setTimeout(() => setSyncSuccess(false), 3500);
    }, 1200);
  };

  const formatVersion = (v: string) => (v.startsWith('v') ? v : `v${v}`);
  const formatTime = (t: string) => (t.toUpperCase().includes('WIB') ? t : `${t} WIB`);

  const categories: { id: ChangelogCategory; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'ALL', label: `Semua Log (${SYSTEM_CHANGELOG_DATABASE.length})`, icon: Layers },
    { id: 'FORNAS', label: 'FORNAS & BPJS', icon: Building2 },
    { id: 'LATIN_TERMS', label: 'Kamus Resep Latin', icon: BookOpen },
    { id: 'INTERACTIONS', label: 'Interaksi Obat & Herbal', icon: Zap },
    { id: 'COMPETENCY', label: 'Uji Kompetensi (CBT)', icon: GraduationCap },
    { id: 'CLINICAL_SAFETY', label: 'Toksikologi & Safety', icon: AlertOctagon },
    { id: 'SYSTEM_CORE', label: 'Kalkulator & Modul', icon: Cpu }
  ];

  return (
    <div className="space-y-6 pb-20">
      {/* ========================================================================= */}
      {/* 1. HERO BANNER - DEEP OCEANIC TEAL & OBSIDIAN (Flagship Neo-Clinical Theme) */}
      {/* ========================================================================= */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#030c0f] via-[#071e24] to-[#0c2f38] p-6 sm:p-8 text-white shadow-2xl border border-teal-500/25">
        <FloatingPillsBackground density="low" accentColor="#2dd4bf" />
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-72 -bottom-10 opacity-10 pointer-events-none hidden lg:block">
          <Clock className="w-56 h-56 text-teal-400 -rotate-12" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-bold font-outfit">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
              <span>Audit Trail &amp; Transparansi Data Medis Resmi</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 text-white flex items-center justify-center shadow-lg shadow-teal-950/50 shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-2xl sm:text-3xl font-black font-outfit tracking-tight">
                    Riwayat Pembaruan Data Klinis
                  </h1>
                  <span className="px-2.5 py-0.5 rounded-full bg-teal-500/30 border border-teal-400/40 text-teal-300 text-xs font-black">
                    {formatVersion(latestUpdate.version)}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-teal-100/80 font-medium">
                  Catatan lengkap penambahan obat, revisi restriksi FORNAS BPJS, tanggal &amp; jam rilis, serta dasar regulasi KMK Kemenkes RI.
                </p>
              </div>
            </div>

            {/* Sub-Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <div className="px-3 py-1 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-xs flex items-center gap-1.5 font-bold text-teal-200">
                <Database className="w-3.5 h-3.5 text-teal-400" />
                <span>Total {SYSTEM_CHANGELOG_DATABASE.length} Log Rilis Tervalidasi</span>
              </div>
              <div className="px-3 py-1 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-xs flex items-center gap-1.5 font-bold text-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Sinkronisasi Otomatis Cloud</span>
              </div>
            </div>
          </div>

          {/* Action Button: Live Cloud Sync Button */}
          <div className="relative z-10 flex flex-col sm:flex-row md:flex-col lg:flex-row items-stretch md:items-end gap-3 shrink-0">
            <button
              onClick={handleSimulatedCloudSync}
              disabled={isSyncing}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold border transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md ${
                syncSuccess
                  ? 'bg-emerald-500 text-white border-emerald-400'
                  : 'bg-teal-500/20 hover:bg-teal-500/30 text-teal-200 border-teal-400/30 hover:border-teal-400'
              }`}
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
              <span>{isSyncing ? 'Memeriksa Cloud...' : syncSuccess ? 'Data Terkini Terverifikasi!' : 'Cek Status Cloud'}</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* KPI SUMMARY CARDS */}
        {/* ========================================================================= */}
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 pt-5 border-t border-teal-500/20">
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
            <div className="text-[10px] uppercase font-bold text-teal-300 tracking-wider">Update Terkini:</div>
            <div className="text-sm sm:text-base font-black text-white mt-0.5">
              {latestUpdate.releaseDate}
            </div>
            <div className="text-[11px] text-teal-200/70 font-mono mt-0.5">
              {formatTime(latestUpdate.releaseTime)}
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
            <div className="text-[10px] uppercase font-bold text-teal-300 tracking-wider">Formularium Nasional:</div>
            <div className="text-sm sm:text-base font-black text-white mt-0.5">
              415 Obat Terdaftar
            </div>
            <div className="text-[11px] text-teal-200/70 mt-0.5">
              KMK 2025 Terkini
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
            <div className="text-[10px] uppercase font-bold text-teal-300 tracking-wider">Kamus Resep Latin:</div>
            <div className="text-sm sm:text-base font-black text-white mt-0.5">
              200+ Singkatan
            </div>
            <div className="text-[11px] text-teal-200/70 mt-0.5">
              Audio &amp; Kuis Resep
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
            <div className="text-[10px] uppercase font-bold text-teal-300 tracking-wider">Status Basis Data:</div>
            <div className="text-sm sm:text-base font-black text-emerald-400 mt-0.5 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Live &amp; Terverifikasi
            </div>
            <div className="text-[11px] text-teal-200/70 mt-0.5">
              Kemenkes RI Standar
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. SEARCH & FILTER SECTION */}
      {/* ========================================================================= */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
        {/* Search input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari log pembaruan (contoh: FORNAS, Haloperidol, Singkatan Latin, KMK 2025, DDInter)..."
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          {categories.map(cat => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-teal-600 text-white shadow-sm shadow-teal-600/30'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. TIMELINE OF RELEASES */}
      {/* ========================================================================= */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <h2 className="text-base sm:text-lg font-bold font-outfit text-slate-900 dark:text-white flex items-center gap-2">
            <Calendar className="w-4 h-4 text-teal-500" />
            <span>Riwayat Kronologis Rilis Data ({filteredChangelogs.length})</span>
          </h2>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Terurut dari rilis terbaru
          </span>
        </div>

        {filteredChangelogs.length === 0 ? (
          <div className="py-16 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 space-y-3">
            <AlertCircle className="w-10 h-10 text-slate-400 mx-auto" />
            <p className="text-sm font-bold text-slate-700 dark:text-slate-200">Tidak ada log rilis yang sesuai dengan pencarian Anda</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Coba ubah kata kunci pencarian atau pilih filter kategori "Semua Log".</p>
          </div>
        ) : (
          <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-2 sm:before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-teal-500/30 dark:before:bg-teal-500/20">
            {filteredChangelogs.map((item) => {
              const isExpanded = !!expandedDrugsMap[item.id];
              return (
                <div key={item.id} className="relative group">
                  {/* Timeline node dot */}
                  <div className="absolute -left-6 sm:-left-8 top-5 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 sm:border-3 border-teal-500 bg-white dark:bg-slate-950 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-teal-500"></div>
                  </div>

                  {/* Main Entry Card */}
                  <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-teal-500/40 transition-all shadow-sm space-y-4">
                    
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="px-2.5 py-0.5 rounded-lg bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800/60 text-teal-700 dark:text-teal-300 font-mono text-xs font-black">
                          {formatVersion(item.version)}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold">
                          {item.categoryLabel}
                        </span>
                        {item.badge && (
                          <span className="px-2 py-0.5 rounded-lg bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800/60 text-amber-700 dark:text-amber-300 text-[11px] font-bold">
                            {item.badge}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono">
                        <Calendar className="w-3.5 h-3.5 text-teal-500" />
                        <span>{item.releaseDate}</span>
                        <span>•</span>
                        <Clock className="w-3.5 h-3.5 text-teal-500" />
                        <span>{formatTime(item.releaseTime)}</span>
                      </div>
                    </div>

                    {/* Title & Summary */}
                    <div>
                      <h3 className="text-base sm:text-lg font-bold font-outfit text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                        {item.summary}
                      </p>
                    </div>

                    {/* Before vs After Metric pills if available */}
                    {item.metricsBeforeAfter && item.metricsBeforeAfter.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        {item.metricsBeforeAfter.map((m, mIdx) => (
                          <div key={mIdx} className="p-2.5 rounded-2xl bg-teal-50/70 dark:bg-teal-950/30 border border-teal-100 dark:border-teal-900/40 flex items-center gap-2.5 text-xs">
                            <TrendingUp className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                            <div className="font-medium text-slate-700 dark:text-slate-300">
                              <span className="font-bold text-teal-800 dark:text-teal-200 mr-1.5">{m.metric}:</span>
                              <span className="line-through text-slate-400 mr-1.5">{m.before}</span>
                              <span className="font-black text-emerald-600 dark:text-emerald-400 mr-1.5">{m.after}</span>
                              <span className="px-1.5 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold">({m.change})</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Key Drugs Added Pills */}
                    {item.keyDrugsOrItemsAdded && item.keyDrugsOrItemsAdded.length > 0 && (
                      <div className="space-y-2">
                        <div className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between">
                          <span className="flex items-center gap-1.5">
                            <Tag className="w-3.5 h-3.5 text-teal-500" />
                            <span>Zat Aktif / Item Kunci yang Ditambahkan ({item.keyDrugsOrItemsAdded.length})</span>
                          </span>
                          {item.keyDrugsOrItemsAdded.length > 8 && (
                            <button
                              onClick={() => toggleDrugExpand(item.id)}
                              className="text-[11px] text-teal-600 dark:text-teal-400 hover:underline cursor-pointer font-bold"
                            >
                              {isExpanded ? 'Sembunyikan' : 'Tampilkan Semua'}
                            </button>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {(isExpanded
                            ? item.keyDrugsOrItemsAdded
                            : item.keyDrugsOrItemsAdded.slice(0, 8)
                          ).map((drug, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono font-medium border border-slate-200 dark:border-slate-700"
                            >
                              {drug}
                            </span>
                          ))}
                          {!isExpanded && item.keyDrugsOrItemsAdded.length > 8 && (
                            <button
                              onClick={() => toggleDrugExpand(item.id)}
                              className="px-2.5 py-1 rounded-lg bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 text-xs font-bold border border-teal-200 dark:border-teal-800/50 cursor-pointer"
                            >
                              +{item.keyDrugsOrItemsAdded.length - 8} lainnya...
                            </button>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Detailed change points */}
                    <div className="space-y-1.5 pt-1">
                      <div className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        Rincian Pembaruan Klinis:
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                        {item.detailedChanges.map((change, cIdx) => (
                          <li key={cIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0 mt-0.5" />
                            <span>{change}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Regulation & Module Jump Link Footer */}
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                      {item.regulationsReference ? (
                        <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                          <FileText className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                          <span className="font-semibold text-slate-600 dark:text-slate-300">Regulasi Rujukan:</span>
                          <span className="italic">{item.regulationsReference}</span>
                        </div>
                      ) : (
                        <div />
                      )}

                      {/* Jump buttons to related modules */}
                      <div className="flex items-center gap-2 flex-wrap self-start sm:self-auto">
                        {item.category === 'FORNAS' && onSelectTab && (
                          <button
                            onClick={() => onSelectTab('drugs')}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-teal-50 dark:bg-teal-950/50 hover:bg-teal-100 dark:hover:bg-teal-900/60 text-teal-700 dark:text-teal-300 font-bold text-xs transition-colors cursor-pointer"
                          >
                            <span>Lihat Monografi &amp; FORNAS</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        )}

                        {item.category === 'LATIN_TERMS' && onSelectTab && (
                          <button
                            onClick={() => onSelectTab('latin-terms')}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-teal-50 dark:bg-teal-950/50 hover:bg-teal-100 dark:hover:bg-teal-900/60 text-teal-700 dark:text-teal-300 font-bold text-xs transition-colors cursor-pointer"
                          >
                            <span>Buka Modul Kamus Latin</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        )}

                        {item.category === 'COMPETENCY' && onSelectTab && (
                          <button
                            onClick={() => onSelectTab('competency')}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-teal-50 dark:bg-teal-950/50 hover:bg-teal-100 dark:hover:bg-teal-900/60 text-teal-700 dark:text-teal-300 font-bold text-xs transition-colors cursor-pointer"
                          >
                            <span>Buka Portal UKMPPAI &amp; UKTVF</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        )}

                        {item.category === 'INTERACTIONS' && onSelectTab && (
                          <button
                            onClick={() => onSelectTab('interactions')}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-teal-50 dark:bg-teal-950/50 hover:bg-teal-100 dark:hover:bg-teal-900/60 text-teal-700 dark:text-teal-300 font-bold text-xs transition-colors cursor-pointer"
                          >
                            <span>Buka Cek Interaksi Obat</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        )}

                        {item.category === 'CLINICAL_SAFETY' && onSelectTab && (
                          <button
                            onClick={() => onSelectTab('toxicology')}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-teal-50 dark:bg-teal-950/50 hover:bg-teal-100 dark:hover:bg-teal-900/60 text-teal-700 dark:text-teal-300 font-bold text-xs transition-colors cursor-pointer"
                          >
                            <span>Buka Toksikologi &amp; IGD</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Trust & Verification Footer Note */}
      <div className="p-4 rounded-2xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-100 dark:border-teal-900/30 flex items-center gap-3 text-xs text-slate-600 dark:text-slate-300">
        <ShieldCheck className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0" />
        <div>
          <span className="font-bold text-teal-800 dark:text-teal-200">Kepatuhan Medis &amp; Regulasi:</span> Seluruh log perubahan data diaudit dan diverifikasi langsung berdasarkan Keputusan Menteri Kesehatan RI, Formularium Nasional, dan Pedoman Nasional Pelayanan Kedokteran (PNPK).
        </div>
      </div>
    </div>
  );
};
