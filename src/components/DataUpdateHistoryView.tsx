import React, { useState, useMemo, useEffect } from 'react';
import {
  Clock,
  Sparkles,
  Search,
  CheckCircle2,
  Calendar,
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
  ChevronRight
} from 'lucide-react';
import {
  SYSTEM_CHANGELOG_DATABASE,
  ChangelogCategory,
  ChangelogItem,
  getLatestChangelogEntry
} from '../data/systemChangelogData';
import { PaginationControls } from './PaginationControls';

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

  // Pagination state
  const [changelogPage, setChangelogPage] = useState<number>(1);
  const [changelogPerPage, setChangelogPerPage] = useState<number>(5);

  // Reset page when category or search query changes
  useEffect(() => {
    setChangelogPage(1);
  }, [searchQuery, selectedCategory]);

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

  // Paginated changelogs
  const paginatedChangelogs = useMemo(() => {
    const start = (changelogPage - 1) * changelogPerPage;
    return filteredChangelogs.slice(start, start + changelogPerPage);
  }, [filteredChangelogs, changelogPage, changelogPerPage]);

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


  return (
    <div className="space-y-6 pb-20">
      {/* CLEAN CLINICAL COMMAND HEADER */}
      <div className="bg-white dark:bg-[#0c1427] border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-2xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-[#005f5a]/10 text-[#005f5a] flex items-center justify-center border border-[#005f5a]/20 shadow-xs shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-xl sm:text-2xl font-bold font-outfit text-slate-900 dark:text-white tracking-tight">
                  Riwayat Pembaruan Data Klinis
                </h1>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#005f5a]/10 text-[#005f5a] border border-[#005f5a]/20 font-mono">
                  {formatVersion(latestUpdate.version)}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Live &amp; Terverifikasi
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Log pembaruan sistem dan database farmasi klinis FARMASIDRUGGIST berstandar Kemenkes RI
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleSimulatedCloudSync}
              disabled={isSyncing}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer flex items-center justify-center gap-2 shadow-xs active:scale-95 ${
                syncSuccess
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-[#005f5a] hover:text-[#005f5a]'
              }`}
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin text-[#005f5a]' : ''}`} />
              <span>{isSyncing ? 'Memeriksa Cloud...' : syncSuccess ? 'Data Terkini Terverifikasi!' : 'Cek Status Cloud'}</span>
            </button>
          </div>
        </div>

        {/* Clinical Stat Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80">
          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
            <div className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider">Update Terkini:</div>
            <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 mt-0.5 font-outfit">
              {latestUpdate.releaseDate}
            </div>
            <div className="text-[10px] text-slate-400 font-mono">
              {formatTime(latestUpdate.releaseTime)}
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
            <div className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider">Formularium Nasional:</div>
            <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 mt-0.5 font-outfit">
              415 Obat Terdaftar
            </div>
            <div className="text-[10px] text-slate-400 font-mono">
              KMK 2025 Terkini
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
            <div className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider">Kamus Resep Latin:</div>
            <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 mt-0.5 font-outfit">
              200+ Singkatan
            </div>
            <div className="text-[10px] text-slate-400 font-mono">
              Audio &amp; Kuis Resep
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
            <div className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider">Standar Acuan:</div>
            <div className="text-xs sm:text-sm font-bold text-[#005f5a] mt-0.5 font-outfit">
              Kemenkes RI
            </div>
            <div className="text-[10px] text-slate-400 font-mono">
              Terakreditasi RS
            </div>
          </div>
        </div>
      </div>


      {/* Search Bar Input */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-3 sm:p-4 border border-slate-200/80 dark:border-slate-800 shadow-xs">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari log pembaruan (contoh: Subtab, FORNAS, Haloperidol, Singkatan Latin, KMK 2025, DDInter)..."
            className="w-full pl-11 pr-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
          />
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. TIMELINE OF RELEASES */}
      {/* ========================================================================= */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <h2 className="text-base sm:text-lg font-bold font-outfit text-slate-900 dark:text-white flex items-center gap-2">
            <Calendar className="w-4 h-4 text-fuchsia-500" />
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
          <>
            <div id="changelog-timeline-container" className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-2 sm:before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-purple-500/30 dark:before:bg-purple-500/20">
            {paginatedChangelogs.map((item) => {
              const isExpanded = !!expandedDrugsMap[item.id];
              return (
                <div key={item.id} className="relative group">
                  {/* Timeline node dot */}
                  <div className="absolute -left-6 sm:-left-8 top-5 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 sm:border-3 border-purple-500 bg-white dark:bg-slate-950 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-fuchsia-500"></div>
                  </div>

                  {/* Main Entry Card */}
                  <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-purple-500/40 transition-all shadow-sm space-y-4">
                    
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="px-2.5 py-0.5 rounded-lg bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800/60 text-purple-700 dark:text-purple-300 font-mono text-xs font-black">
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
                        <Calendar className="w-3.5 h-3.5 text-purple-500" />
                        <span>{item.releaseDate}</span>
                        <span>•</span>
                        <Clock className="w-3.5 h-3.5 text-purple-500" />
                        <span>{formatTime(item.releaseTime)}</span>
                      </div>
                    </div>

                    {/* Title & Summary */}
                    <div>
                      <h3 className="text-base sm:text-lg font-bold font-outfit text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-fuchsia-400 transition-colors">
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
                          <div key={mIdx} className="p-2.5 rounded-2xl bg-purple-50/70 dark:bg-purple-950/30 border border-purple-100 dark:border-purple-900/40 flex items-center gap-2.5 text-xs">
                            <TrendingUp className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
                            <div className="font-medium text-slate-700 dark:text-slate-300">
                              <span className="font-bold text-purple-800 dark:text-purple-200 mr-1.5">{m.metric}:</span>
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
                            <Tag className="w-3.5 h-3.5 text-fuchsia-500" />
                            <span>Zat Aktif / Item Kunci yang Ditambahkan ({item.keyDrugsOrItemsAdded.length})</span>
                          </span>
                          {item.keyDrugsOrItemsAdded.length > 8 && (
                            <button
                              onClick={() => toggleDrugExpand(item.id)}
                              className="text-[11px] text-purple-600 dark:text-fuchsia-400 hover:underline cursor-pointer font-bold"
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
                              className="px-2.5 py-1 rounded-lg bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 text-xs font-bold border border-purple-200 dark:border-purple-800/50 cursor-pointer"
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
                            <CheckCircle2 className="w-3.5 h-3.5 text-fuchsia-500 shrink-0 mt-0.5" />
                            <span>{change}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Regulation & Module Jump Link Footer */}
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                      {item.regulationsReference ? (
                        <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                          <FileText className="w-3.5 h-3.5 text-purple-500 shrink-0" />
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
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-purple-50 dark:bg-purple-950/50 hover:bg-purple-100 dark:hover:bg-purple-900/60 text-purple-700 dark:text-purple-300 font-bold text-xs transition-colors cursor-pointer"
                          >
                            <span>Lihat Monografi &amp; FORNAS</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        )}

                        {item.category === 'LATIN_TERMS' && onSelectTab && (
                          <button
                            onClick={() => onSelectTab('latin-terms')}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-purple-50 dark:bg-purple-950/50 hover:bg-purple-100 dark:hover:bg-purple-900/60 text-purple-700 dark:text-purple-300 font-bold text-xs transition-colors cursor-pointer"
                          >
                            <span>Buka Modul Kamus Latin</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        )}

                        {item.category === 'COMPETENCY' && onSelectTab && (
                          <button
                            onClick={() => onSelectTab('competency')}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-purple-50 dark:bg-purple-950/50 hover:bg-purple-100 dark:hover:bg-purple-900/60 text-purple-700 dark:text-purple-300 font-bold text-xs transition-colors cursor-pointer"
                          >
                            <span>Buka Portal UKMPPAI &amp; UKTVF</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        )}

                        {item.category === 'INTERACTIONS' && onSelectTab && (
                          <button
                            onClick={() => onSelectTab('interactions')}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-purple-50 dark:bg-purple-950/50 hover:bg-purple-100 dark:hover:bg-purple-900/60 text-purple-700 dark:text-purple-300 font-bold text-xs transition-colors cursor-pointer"
                          >
                            <span>Buka Cek Interaksi Obat</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        )}

                        {item.category === 'CLINICAL_SAFETY' && onSelectTab && (
                          <button
                            onClick={() => onSelectTab('toxicology')}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-purple-50 dark:bg-purple-950/50 hover:bg-purple-100 dark:hover:bg-purple-900/60 text-purple-700 dark:text-purple-300 font-bold text-xs transition-colors cursor-pointer"
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

          {/* Pagination Controls */}
          <PaginationControls
            currentPage={changelogPage}
            totalItems={filteredChangelogs.length}
            itemsPerPage={changelogPerPage}
            onPageChange={setChangelogPage}
            onItemsPerPageChange={setChangelogPerPage}
            colorTheme="purple"
            itemLabel="rilis pembaruan"
            scrollToId="changelog-timeline-container"
          />
          </>
        )}
      </div>

      {/* Trust & Verification Footer Note */}
      <div className="p-4 rounded-2xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-100 dark:border-purple-900/30 flex items-center gap-3 text-xs text-slate-600 dark:text-slate-300">
        <ShieldCheck className="w-5 h-5 text-purple-600 dark:text-purple-400 shrink-0" />
        <div>
          <span className="font-bold text-purple-800 dark:text-purple-200">Kepatuhan Medis &amp; Regulasi:</span> Seluruh log perubahan data diaudit dan diverifikasi langsung berdasarkan Keputusan Menteri Kesehatan RI, Formularium Nasional, dan Pedoman Nasional Pelayanan Kedokteran (PNPK).
        </div>
      </div>
    </div>
  );
};
