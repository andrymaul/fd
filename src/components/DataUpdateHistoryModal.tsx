import React, { useState, useMemo } from 'react';
import {
  X,
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
  AlertCircle
} from 'lucide-react';
import {
  SYSTEM_CHANGELOG_DATABASE,
  ChangelogCategory,
  ChangelogItem,
  getLatestChangelogEntry
} from '../data/systemChangelogData';

interface DataUpdateHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: ChangelogCategory;
  onSelectTab?: (tab: string) => void;
}

export const DataUpdateHistoryModal: React.FC<DataUpdateHistoryModalProps> = ({
  isOpen,
  onClose,
  initialCategory = 'ALL',
  onSelectTab
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

  if (!isOpen) return null;

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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/75 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white dark:bg-[#0c0818] rounded-3xl shadow-2xl border border-slate-200 dark:border-purple-500/30 overflow-hidden my-4 max-h-[92vh] flex flex-col">
        
        {/* ========================================================================= */}
        {/* HEADER: Cosmic Violet & Electric Pink Palette */}
        {/* ========================================================================= */}
        <div className="bg-gradient-to-br from-[#0c0818] via-[#170c2a] to-[#260e3a] p-5 sm:p-6 text-white relative border-b border-purple-500/30 shrink-0">
          <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-48 h-48 bg-fuchsia-500/20 rounded-full blur-3xl pointer-events-none" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer z-10"
            aria-label="Tutup Riwayat Pembaruan"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1.5 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-fuchsia-300 border border-purple-500/30 text-xs font-bold font-outfit">
                <ShieldCheck className="w-3.5 h-3.5 text-fuchsia-400" />
                <span>Audit Trail &amp; Transparansi Data Medis Resmi</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-purple-500 via-fuchsia-500 to-pink-500 flex items-center justify-center text-white shadow-lg shadow-purple-950/50 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black font-outfit text-white tracking-tight flex items-center gap-2.5">
                    Riwayat Pembaruan Data Klinis
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-fuchsia-400/20 text-fuchsia-300 border border-fuchsia-400/30 font-mono font-bold">
                      {latestUpdate.version}
                    </span>
                  </h2>
                  <p className="text-xs sm:text-sm text-purple-100/80 font-medium">
                    Catatan lengkap penambahan obat, revisi restriksi FORNAS BPJS, tanggal &amp; jam rilis, serta dasar regulasi KMK.
                  </p>
                </div>
              </div>
            </div>

            {/* Live Sync Action Button */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleSimulatedCloudSync}
                disabled={isSyncing}
                className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-purple-200 border border-white/15 text-xs font-bold font-outfit transition-all flex items-center gap-2 cursor-pointer shadow-sm hover:scale-102"
                title="Periksa sinkronisasi database dengan server cloud"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin text-fuchsia-400' : ''}`} />
                <span>{isSyncing ? 'Memeriksa Server...' : syncSuccess ? 'Database Termutakhir!' : 'Cek Status Cloud'}</span>
              </button>
            </div>
          </div>

          {/* Quick Snapshot KPIs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-5 pt-4 border-t border-purple-500/20 text-xs">
            <div className="bg-white/5 rounded-xl p-2.5 border border-white/10">
              <span className="text-purple-200/70 block text-[10px] font-medium">Update Terkini:</span>
              <span className="font-bold text-white font-mono">{latestUpdate.releaseDate}</span>
              <span className="text-[10px] text-fuchsia-400 block font-semibold">{latestUpdate.releaseTime}</span>
            </div>
            <div className="bg-white/5 rounded-xl p-2.5 border border-white/10">
              <span className="text-purple-200/70 block text-[10px] font-medium">Formularium Nasional:</span>
              <span className="font-bold text-emerald-300 font-outfit text-sm">415 Obat Terdaftar</span>
              <span className="text-[10px] text-purple-200/80 block">KMK 2025 Terkini</span>
            </div>
            <div className="bg-white/5 rounded-xl p-2.5 border border-white/10">
              <span className="text-purple-200/70 block text-[10px] font-medium">Kamus Resep Latin:</span>
              <span className="font-bold text-sky-300 font-outfit text-sm">200+ Singkatan</span>
              <span className="text-[10px] text-purple-200/80 block">Audio &amp; Kuis Resep</span>
            </div>
            <div className="bg-white/5 rounded-xl p-2.5 border border-white/10">
              <span className="text-purple-200/70 block text-[10px] font-medium">Status Basis Data:</span>
              <span className="font-bold text-emerald-400 flex items-center gap-1.5 font-outfit text-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Live &amp; Terverifikasi
              </span>
              <span className="text-[10px] text-purple-200/80 block">Kemenkes RI Standar</span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CONTROLS: Search and Category Filter Pills */}
        {/* ========================================================================= */}
        <div className="p-4 sm:p-5 bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800 space-y-3 shrink-0">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Cari log pembaruan (contoh: FORNAS, Haloperidol, Singkatan Latin, KMK 2025, DDInter)..."
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-950 border border-slate-200 dark:border-purple-500/30 rounded-xl text-xs sm:text-sm text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <button
              onClick={() => setSelectedCategory('ALL')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                selectedCategory === 'ALL'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-purple-50 dark:hover:bg-slate-700'
              }`}
            >
              Semua Log ({SYSTEM_CHANGELOG_DATABASE.length})
            </button>
            <button
              onClick={() => setSelectedCategory('FORNAS')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedCategory === 'FORNAS'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-emerald-50 dark:hover:bg-slate-700'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              FORNAS &amp; BPJS
            </button>
            <button
              onClick={() => setSelectedCategory('LATIN_TERMS')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedCategory === 'LATIN_TERMS'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-sky-50 dark:hover:bg-slate-700'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              Kamus Singkatan Latin
            </button>
            <button
              onClick={() => setSelectedCategory('DRUG_MONOGRAPHS')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedCategory === 'DRUG_MONOGRAPHS'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-indigo-50 dark:hover:bg-slate-700'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              Monografi Obat
            </button>
            <button
              onClick={() => setSelectedCategory('INTERACTIONS')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedCategory === 'INTERACTIONS'
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-rose-50 dark:hover:bg-slate-700'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              Interaksi DDInter
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TIMELINE LIST: Chronological Update Cards */}
        {/* ========================================================================= */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {filteredChangelogs.length === 0 ? (
            <div className="text-center py-12 space-y-2">
              <AlertCircle className="w-10 h-10 text-slate-400 mx-auto" />
              <h3 className="text-base font-bold text-slate-700 dark:text-slate-200">Tidak ada riwayat pembaruan yang cocok</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Coba ubah kata kunci pencarian atau pilih kategori lain.</p>
            </div>
          ) : (
            filteredChangelogs.map((item, idx) => {
              const isExpanded = Boolean(expandedDrugsMap[item.id]);
              const displayedDrugs = isExpanded 
                ? (item.keyDrugsOrItemsAdded || [])
                : (item.keyDrugsOrItemsAdded || []).slice(0, 12);
              const remainingCount = (item.keyDrugsOrItemsAdded || []).length - displayedDrugs.length;

              return (
                <div
                  key={item.id}
                  className="relative pl-6 sm:pl-8 border-l-2 border-purple-500/40 dark:border-purple-500/30 pb-2 group"
                >
                  {/* Timeline Dot with Pulse on Latest */}
                  <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-white dark:border-slate-900 ${
                    idx === 0 ? 'bg-fuchsia-500 ring-4 ring-fuchsia-500/20' : 'bg-purple-600'
                  }`} />

                  {/* Card Container */}
                  <div className="rounded-2xl bg-slate-50/80 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 space-y-4 hover:border-purple-400/60 dark:hover:border-purple-500/50 transition-all shadow-2xs">
                    
                    {/* Card Header: Timestamp & Version Tags */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 dark:border-slate-800/80 pb-3">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-purple-100 dark:bg-purple-500/20 text-purple-800 dark:text-purple-300 border border-purple-300 dark:border-purple-500/40">
                          {item.version}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                          {item.categoryLabel}
                        </span>
                        {item.type === 'major' && (
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-extrabold uppercase bg-amber-100 dark:bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-500/40">
                            Major Update
                          </span>
                        )}
                      </div>

                      {/* Precise Timestamp Badge */}
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-purple-300 bg-white dark:bg-slate-950 px-3 py-1 rounded-xl border border-slate-200 dark:border-purple-500/30 shadow-2xs">
                        <Calendar className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                        <span>{item.releaseDate}</span>
                        <span className="text-slate-400 dark:text-slate-500">•</span>
                        <Clock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                        <span className="font-mono">{item.releaseTime}</span>
                      </div>
                    </div>

                    {/* Title & Summary */}
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-fuchsia-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300/90 leading-relaxed mt-1">
                        {item.summary}
                      </p>
                    </div>

                    {/* Metrics Before & After Comparison Pills */}
                    {item.metricsBeforeAfter && item.metricsBeforeAfter.length > 0 && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 pt-1">
                        {item.metricsBeforeAfter.map((m, mIdx) => (
                          <div
                            key={mIdx}
                            className="bg-white dark:bg-slate-950/80 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-xs shadow-2xs"
                          >
                            <span className="text-[10px] text-slate-500 dark:text-slate-400 block truncate font-medium" title={m.metric}>
                              {m.metric}
                            </span>
                            <div className="flex items-baseline justify-between mt-1">
                              <span className="font-bold text-slate-800 dark:text-white">{m.after}</span>
                              <span className="text-[10px] font-extrabold text-emerald-600 dark:text-emerald-400 flex items-center">
                                <TrendingUp className="w-2.5 h-2.5 inline mr-0.5" />
                                {m.change}
                              </span>
                            </div>
                            <span className="text-[10px] text-slate-400 block line-through">Semula: {m.before}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Key Drugs / Items Added Cloud */}
                    {item.keyDrugsOrItemsAdded && item.keyDrugsOrItemsAdded.length > 0 && (
                      <div className="bg-white dark:bg-slate-950/60 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800/80 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-purple-800 dark:text-purple-300 flex items-center gap-1.5">
                            <Tag className="w-3.5 h-3.5 text-fuchsia-500" />
                            Obat &amp; Substansi Kunci yang Ditambahkan / Dimutakhirkan:
                          </span>
                          <span className="text-[11px] font-mono text-slate-400">
                            {item.keyDrugsOrItemsAdded.length} Item
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {displayedDrugs.map((drug, dIdx) => (
                            <span
                              key={dIdx}
                              className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-purple-50 dark:bg-purple-500/15 text-purple-800 dark:text-purple-200 border border-purple-200/80 dark:border-purple-500/30"
                            >
                              {drug}
                            </span>
                          ))}
                          {remainingCount > 0 && (
                            <button
                              onClick={() => toggleDrugExpand(item.id)}
                              className="px-2 py-0.5 rounded-md text-[11px] font-bold text-purple-700 dark:text-purple-300 bg-purple-100/80 dark:bg-purple-500/25 hover:bg-purple-200 cursor-pointer transition-colors"
                            >
                              +{remainingCount} lainnya...
                            </button>
                          )}
                          {isExpanded && (
                            <button
                              onClick={() => toggleDrugExpand(item.id)}
                              className="px-2 py-0.5 rounded-md text-[11px] font-bold text-slate-500 hover:text-slate-800 dark:hover:text-white cursor-pointer"
                            >
                              Tutup ringkasan
                            </button>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Detailed Change Bullet Points */}
                    <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                      <span className="font-bold text-slate-900 dark:text-white block">
                        Rincian Perubahan Klinis &amp; Teknis:
                      </span>
                      <ul className="space-y-1 pl-4 list-disc text-slate-600 dark:text-slate-300/90 leading-relaxed">
                        {item.detailedChanges.map((change, cIdx) => (
                          <li key={cIdx}>{change}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Card Footer: Regulation Reference & Clinical Impact Note */}
                    <div className="pt-3 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px]">
                      {item.regulationsReference && (
                        <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                          <FileText className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 shrink-0" />
                          <span><strong>Regulasi Rujukan:</strong> {item.regulationsReference}</span>
                        </div>
                      )}
                      {item.category === 'FORNAS' && onSelectTab && (
                        <button
                          onClick={() => {
                            onClose();
                            onSelectTab('drugs');
                          }}
                          className="font-bold text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-1 self-end sm:self-auto cursor-pointer"
                        >
                          <span>Lihat Monografi &amp; FORNAS</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      )}
                      {item.category === 'LATIN_TERMS' && onSelectTab && (
                        <button
                          onClick={() => {
                            onClose();
                            onSelectTab('latin-terms');
                          }}
                          className="font-bold text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-1 self-end sm:self-auto cursor-pointer"
                        >
                          <span>Buka Kamus Singkatan Latin</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* ========================================================================= */}
        {/* MODAL FOOTER */}
        {/* ========================================================================= */}
        <div className="p-4 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs shrink-0">
          <div className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span>Semua pembaruan diaudit dan divalidasi oleh FarmasiDruggist Clinical Intelligence.</span>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold cursor-pointer transition-colors shadow-xs"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
};
