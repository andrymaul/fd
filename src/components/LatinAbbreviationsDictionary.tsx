import React, { useState, useMemo, useEffect } from 'react';
import {
  Search,
  BookOpen,
  Languages,
  Copy,
  Check,
  AlertTriangle,
  AlertOctagon,
  Info,
  RotateCw,
  Shuffle,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  ArrowRight,
  Filter,
  CheckCircle2,
  Share2,
  Printer,
  Calculator,
  ShieldCheck,
  Bookmark,
  Activity
} from 'lucide-react';
import {
  LATIN_ABBREVIATIONS,
  LATIN_CATEGORIES,
  POPULAR_SIGNA_PRESETS,
  parseAndTranslateSigna,
  searchLatinAbbreviations
} from '../data/latinPrescriptionData';
import { PaginationControls } from './PaginationControls';
import { FloatingPillsBackground } from './FloatingPillsBackground';
import { LatinAbbreviation, LatinCategoryKey, SignaTranslationResult, ClinicBrandingSettings } from '../types';

interface LatinAbbreviationsDictionaryProps {
  onSelectTab?: (tab: string) => void;
  clinicBranding?: ClinicBrandingSettings;
}

type ActiveViewMode = 'dictionary' | 'translator' | 'highalert' | 'flashcards';

export const LatinAbbreviationsDictionary: React.FC<LatinAbbreviationsDictionaryProps> = ({
  onSelectTab,
  clinicBranding
}) => {
  const [viewMode, setViewMode] = useState<ActiveViewMode>('dictionary');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<LatinCategoryKey>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedItemForModal, setSelectedItemForModal] = useState<LatinAbbreviation | null>(null);

  // Signa Translator State
  const [signaInput, setSignaInput] = useState('s. 3 d.d. pulv I d.t.d. p.c. p.r.n.');
  const [translationResult, setTranslationResult] = useState<SignaTranslationResult>(() =>
    parseAndTranslateSigna('s. 3 d.d. pulv I d.t.d. p.c. p.r.n.')
  );
  const [copiedLabel, setCopiedLabel] = useState(false);

  // Flashcards State
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [flashcardCategory, setFlashcardCategory] = useState<LatinCategoryKey>('all');
  const [shuffledCards, setShuffledCards] = useState<LatinAbbreviation[]>(LATIN_ABBREVIATIONS);

  // Update translation whenever signaInput changes
  useEffect(() => {
    const res = parseAndTranslateSigna(signaInput);
    setTranslationResult(res);
  }, [signaInput]);

  // Flashcards deck filter & shuffle
  useEffect(() => {
    const deck = flashcardCategory === 'all'
      ? [...LATIN_ABBREVIATIONS]
      : LATIN_ABBREVIATIONS.filter(item => item.category === flashcardCategory);
    setShuffledCards(deck);
    setFlashcardIndex(0);
    setIsFlipped(false);
  }, [flashcardCategory]);

  const handleShuffleDeck = () => {
    const array = [...shuffledCards];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    setShuffledCards(array);
    setFlashcardIndex(0);
    setIsFlipped(false);
  };

  // Filtered list for dictionary view
  const filteredItems = useMemo(() => {
    return searchLatinAbbreviations(searchQuery, selectedCategory);
  }, [searchQuery, selectedCategory]);

  // Pagination for dictionary view
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(24);

  // Auto-reset page when search query or category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  const totalItems = filteredItems.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const validCurrentPage = Math.min(currentPage, totalPages);

  const paginatedItems = useMemo(() => {
    const start = (validCurrentPage - 1) * itemsPerPage;
    return filteredItems.slice(start, start + itemsPerPage);
  }, [filteredItems, validCurrentPage, itemsPerPage]);

  // High alert list
  const highAlertItems = useMemo(() => {
    return LATIN_ABBREVIATIONS.filter(item => item.isHighAlertWarning);
  }, []);

  const handleCopyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleCopyLabelText = () => {
    if (!translationResult.instructionsForLabel) return;
    navigator.clipboard.writeText(translationResult.instructionsForLabel);
    setCopiedLabel(true);
    setTimeout(() => setCopiedLabel(false), 2000);
  };

  return (
    <div className="space-y-6 pb-20">
      {/* ================= HEADER BANNER ================= */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0e0417] via-[#1d092f] to-[#2d0d48] p-6 sm:p-8 text-white shadow-2xl border border-purple-500/25">
        <FloatingPillsBackground density="low" accentColor="#c084fc" />
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-72 -bottom-10 opacity-10 pointer-events-none hidden lg:block">
          <Languages className="w-56 h-56 text-purple-400 -rotate-12" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-purple-950/50 shrink-0">
                <Languages className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-black font-outfit tracking-tight">
                  Kamus &amp; Penerjemah Singkatan Latin Resep
                </h1>
                <p className="text-xs sm:text-sm text-purple-100/80 font-medium">
                  Panduan lengkap 180+ singkatan Latin farmasi, pengurai signa resep otomatis, verifikasi etiket obat, serta penapisan singkatan berbahaya standar <span className="text-purple-300 font-bold">ISMP &amp; KARS</span>.
                </p>
              </div>
            </div>

            {/* Feature Highlights Pills */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-950/60 border border-purple-800/50 text-purple-200">
                <BookOpen className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>Pengurai Signa Resep Otomatis</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-950/60 border border-rose-800/50 text-rose-200">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>Penapisan Singkatan Berbahaya ISMP</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-950/60 border border-purple-800/50 text-purple-200">
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>Standar Penulisan Etiket Apotek</span>
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
                  {LATIN_ABBREVIATIONS.length} Data Terverifikasi
                </span>
              </div>
              <div className="text-xs text-purple-100/80 space-y-1.5 font-medium">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Kamus Singkatan:</span>
                  <span className="font-mono font-bold text-white bg-white/10 px-2 py-0.5 rounded-md text-[11px]">{LATIN_ABBREVIATIONS.length} Istilah</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Kategori Klinis:</span>
                  <span className="font-mono font-bold text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded-md text-[11px]">{LATIN_CATEGORIES.length - 1} Kategori</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Do Not Use (ISMP):</span>
                  <span className="font-mono font-bold text-rose-300 bg-rose-950/60 px-2 py-0.5 rounded-md text-[11px]">{highAlertItems.length} Singkatan</span>
                </div>
                <div className="flex justify-between items-center pt-1 border-t border-purple-900/40 text-[10px] text-purple-300/80">
                  <span>Standar Acuan:</span>
                  <span className="font-bold text-white">Farmakope Indonesia &amp; ISMP</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ================= GOLD STANDARD NAVIGATION SUBTABS BAR ================= */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
        <button
          onClick={() => setViewMode('dictionary')}
          className={`rounded-2xl px-4 py-2.5 text-xs font-black font-outfit whitespace-nowrap cursor-pointer transition-all flex items-center gap-2 shrink-0 ${
            viewMode === 'dictionary'
              ? 'bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-500 text-white shadow-md shadow-purple-950/40 border border-purple-400/30 ring-2 ring-purple-400/20'
              : 'bg-white dark:bg-[#12081c] text-slate-600 dark:text-slate-300 hover:bg-purple-50 dark:hover:bg-purple-950/40 border border-slate-200 dark:border-purple-900/30 shadow-2xs'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Kamus &amp; Pencarian ({filteredItems.length})</span>
        </button>

        <button
          onClick={() => setViewMode('translator')}
          className={`rounded-2xl px-4 py-2.5 text-xs font-black font-outfit whitespace-nowrap cursor-pointer transition-all flex items-center gap-2 shrink-0 ${
            viewMode === 'translator'
              ? 'bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-500 text-white shadow-md shadow-purple-950/40 border border-purple-400/30 ring-2 ring-purple-400/20'
              : 'bg-white dark:bg-[#12081c] text-slate-600 dark:text-slate-300 hover:bg-purple-50 dark:hover:bg-purple-950/40 border border-slate-200 dark:border-purple-900/30 shadow-2xs'
          }`}
        >
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>⚡ Penerjemah Signa Resep</span>
        </button>

        <button
          onClick={() => setViewMode('highalert')}
          className={`rounded-2xl px-4 py-2.5 text-xs font-black font-outfit whitespace-nowrap cursor-pointer transition-all flex items-center gap-2 shrink-0 ${
            viewMode === 'highalert'
              ? 'bg-gradient-to-r from-rose-600 via-amber-600 to-rose-600 text-white shadow-md shadow-rose-950/40 border border-rose-400/30 ring-2 ring-rose-400/20'
              : 'bg-white dark:bg-[#12081c] text-slate-600 dark:text-slate-300 hover:bg-rose-50 dark:hover:bg-rose-950/40 border border-slate-200 dark:border-rose-900/30 shadow-2xs'
          }`}
        >
          <AlertOctagon className="w-4 h-4 text-rose-500" />
          <span>Daftar Rawan Bahaya ISMP ({highAlertItems.length})</span>
        </button>

        <button
          onClick={() => setViewMode('flashcards')}
          className={`rounded-2xl px-4 py-2.5 text-xs font-black font-outfit whitespace-nowrap cursor-pointer transition-all flex items-center gap-2 shrink-0 ${
            viewMode === 'flashcards'
              ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500 text-white shadow-md shadow-indigo-950/40 border border-indigo-400/30 ring-2 ring-indigo-400/20'
              : 'bg-white dark:bg-[#12081c] text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 border border-slate-200 dark:border-indigo-900/30 shadow-2xs'
          }`}
        >
          <RotateCw className="w-4 h-4 text-indigo-400" />
          <span>🃏 Flashcard Hafalan UKMPPAI</span>
        </button>
      </div>

      {/* ================= VIEW 1: KAMUS & PENCARIAN ================= */}
      {viewMode === 'dictionary' && (
        <div className="space-y-6">
          {/* SEARCH & CATEGORY FILTER BAR */}
          <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari singkatan (cth: dtd, a.c., mfla), kepanjangan Latin (ante coenam), atau arti (sebelum makan, sendok makan)..."
                className="w-full pl-11 pr-10 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition-all placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 px-1.5 py-0.5 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  Clear
                </button>
              )}
            </div>

            {/* CATEGORY CHIPS */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
              {LATIN_CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    onClick={() => setSelectedCategory(cat.key)}
                    className={`whitespace-nowrap px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-150 flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-purple-600 text-white shadow-sm font-semibold'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RESULTS COUNT & SHORTCUTS */}
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
            <span>
              Menampilkan <strong className="text-slate-900 dark:text-white">{filteredItems.length}</strong> singkatan
              {selectedCategory !== 'all' ? ` pada kategori ${LATIN_CATEGORIES.find(c => c.key === selectedCategory)?.label}` : ''}
            </span>
            {onSelectTab && (
              <div className="flex items-center gap-3">
                <button
                  onClick={() => onSelectTab('pediatric')}
                  className="inline-flex items-center gap-1 text-purple-600 dark:text-purple-400 hover:underline font-medium"
                >
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Kalkulator Puyer / D.T.D.</span>
                </button>
                <button
                  onClick={() => onSelectTab('drug-notes')}
                  className="inline-flex items-center gap-1 text-purple-600 dark:text-purple-400 hover:underline font-medium"
                >
                  <Bookmark className="w-3.5 h-3.5" />
                  <span>Hafalan Obat</span>
                </button>
              </div>
            )}
          </div>

          {/* GRID OF ABBREVIATIONS CARDS */}
          {filteredItems.length === 0 ? (
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-12 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center mx-auto">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
                Tidak ada singkatan yang cocok dengan "{searchQuery}"
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                Coba cari dengan kata kunci lain atau pilih "Semua Kategori" untuk melihat daftar lengkap.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="px-4 py-2 rounded-xl bg-purple-600 text-white text-xs font-semibold hover:bg-purple-700"
              >
                Reset Pencarian
              </button>
            </div>
          ) : (
            <div className="space-y-4" id="latin-terms-grid">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {paginatedItems.map((item) => {
                const isCopied = copiedId === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedItemForModal(item)}
                    className="group relative bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 hover:border-purple-500/50 dark:hover:border-purple-400/50 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-start justify-between gap-2 mb-2.5">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-xs px-2.5 py-0.5 rounded-md font-semibold bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/60">
                            {item.categoryLabel}
                          </span>
                          {item.isHighAlertWarning && (
                            <span className="text-[10px] px-2 py-0.5 rounded-md font-bold bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/30 flex items-center gap-1">
                              <AlertTriangle className="w-3 h-3" />
                              <span>ISMP Alert</span>
                            </span>
                          )}
                        </div>

                        {/* Copy button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCopyText(`${item.abbr} (${item.fullLatin}) = ${item.indonesianMeaning}`, item.id);
                          }}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                          title="Salin arti singkatan"
                        >
                          {isCopied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>

                      {/* Main Title & Latin */}
                      <div className="space-y-1">
                        <div className="flex items-baseline gap-2">
                          <h3 className="text-xl font-black text-slate-900 dark:text-white font-mono tracking-tight group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                            {item.abbr}
                          </h3>
                        </div>
                        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 italic">
                          "{item.fullLatin}"
                        </div>
                      </div>

                      {/* Indonesian Meaning */}
                      <div className="mt-3 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                        <div className="text-xs font-bold text-purple-800 dark:text-purple-300">
                          Arti: {item.indonesianMeaning}
                        </div>
                      </div>

                      {/* Explanation excerpt */}
                      <p className="mt-2.5 text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                        {item.explanation}
                      </p>
                    </div>

                    {/* Footer recipe preview */}
                    {item.exampleInRecipe && (
                      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                        <span className="font-mono text-slate-700 dark:text-slate-300 truncate max-w-[200px]">
                          {item.exampleInRecipe.split('\n')[0]}
                        </span>
                        <span className="text-purple-600 dark:text-purple-400 font-semibold group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-0.5">
                          Detail <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Pagination Controls */}
            <PaginationControls
              currentPage={validCurrentPage}
              totalPages={totalPages}
              totalItems={totalItems}
              itemsOnCurrentPage={paginatedItems.length}
              onPageChange={(newPage) => setCurrentPage(newPage)}
              itemLabel="istilah singkatan"
              itemsPerPage={itemsPerPage}
              onItemsPerPageChange={(newSize) => {
                setItemsPerPage(newSize);
                setCurrentPage(1);
              }}
              pageSizeOptions={[12, 24, 48, 96]}
              colorTheme="purple"
              scrollToTopId="latin-terms-grid"
            />
          </div>
          )}
        </div>
      )}

      {/* ================= VIEW 2: PENERJEMAH SIGNA RESEP (TRANSLATOR) ================= */}
      {viewMode === 'translator' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* INPUT PANEL (LEFT 6 COLS) */}
            <div className="lg:col-span-6 bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold">
                    ✍️
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-slate-900 dark:text-white">
                      Tulis Signa / Resep Dokter
                    </h2>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      Ketik kode signa atau pilih salah satu template resep klinis di bawah.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSignaInput('')}
                  className="text-xs text-slate-400 hover:text-rose-500 transition-colors"
                >
                  Kosongkan
                </button>
              </div>

              {/* Text Area */}
              <div className="relative">
                <textarea
                  rows={4}
                  value={signaInput}
                  onChange={(e) => setSignaInput(e.target.value)}
                  placeholder="Ketik signa disini, contoh: s. 3 d.d. tab I p.c. p.r.n."
                  className="w-full p-4 font-mono text-sm rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition-all placeholder:text-slate-400"
                />
              </div>

              {/* PRESETS BUTTONS */}
              <div className="space-y-2">
                <div className="text-xs font-semibold text-slate-600 dark:text-slate-300 flex items-center gap-1">
                  <span>💡 Contoh Signa Resep Populer:</span>
                </div>
                <div className="flex flex-wrap gap-1.5 max-h-48 overflow-y-auto pr-1">
                  {POPULAR_SIGNA_PRESETS.map((preset, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSignaInput(preset.signa)}
                      className="text-left px-2.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-purple-500/10 hover:border-purple-500/30 border border-transparent text-slate-700 dark:text-slate-300 text-xs transition-colors"
                    >
                      <span className="font-medium">{preset.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* OUTPUT TRANSLATION PANEL (RIGHT 6 COLS) */}
            <div className="lg:col-span-6 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-6 border border-slate-800 shadow-xl space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                {/* Panel Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <h3 className="text-sm font-bold text-white tracking-wide uppercase">
                      Hasil Terjemahan Bahasa Indonesia
                    </h3>
                  </div>
                  <button
                    onClick={handleCopyLabelText}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/10 hover:bg-white/20 text-purple-300 text-xs font-medium transition-colors"
                  >
                    {copiedLabel ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Salin untuk Etiket</span>
                      </>
                    )}
                  </button>
                </div>

                {/* HIGH ALERT WARNINGS IF ANY */}
                {translationResult.warnings.length > 0 && (
                  <div className="p-3.5 rounded-2xl bg-rose-500/15 border border-rose-500/40 text-rose-200 text-xs space-y-1.5">
                    <div className="font-bold flex items-center gap-1.5 text-rose-300">
                      <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>Peringatan Keselamatan Resep (ISMP / KARS):</span>
                    </div>
                    {translationResult.warnings.map((warn, i) => (
                      <p key={i} className="pl-5 leading-relaxed text-[11px] text-rose-200/90">
                        • {warn}
                      </p>
                    ))}
                  </div>
                )}

                {/* FULL TRANSLATION BOX */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <div className="text-[11px] text-purple-400 font-semibold uppercase tracking-wider">
                    Terjemahan Lengkap Kalimat Signa
                  </div>
                  <div className="text-base font-semibold text-white leading-relaxed">
                    {translationResult.translatedText || 'Belum ada input signa.'}
                  </div>
                </div>

                {/* PATIENT MEDICATION LABEL SIMULATION (ETIKET OBAT) */}
                <div className="p-4 rounded-2xl bg-slate-800/90 border border-slate-700 text-slate-200 space-y-2 font-mono text-xs">
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest font-sans font-bold flex items-center justify-between">
                    <span>Simulasi Label Etiket Pasien</span>
                    <span className="text-emerald-400 font-sans">✓ Siap Cetak</span>
                  </div>
                  <div className="bg-white text-slate-900 p-3.5 rounded-xl border border-slate-300 shadow-inner font-sans space-y-1 text-center">
                    <div className="font-bold text-xs text-slate-800 border-b pb-1">
                      {clinicBranding?.clinicName || 'APOTEK FARMASI DRUGGIST'}
                    </div>
                    <div className="text-sm font-black text-purple-900 py-1">
                      {translationResult.instructionsForLabel || 'Tandailah aturan pakai'}
                    </div>
                    <div className="text-[10px] text-slate-500 italic">
                      Diminum teratur sesuai petunjuk dokter/apoteker
                    </div>
                  </div>
                </div>

                {/* TOKEN BREAKDOWN */}
                <div className="space-y-1.5">
                  <div className="text-[11px] font-semibold text-slate-400">
                    Uraian Kata per Kata:
                  </div>
                  <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto">
                    {translationResult.detectedTerms.map((term, index) => {
                      const isRecognized = !!term.matchedItem;
                      return (
                        <div
                          key={index}
                          className={`px-2.5 py-1 rounded-xl text-[11px] border flex items-center gap-1.5 ${
                            isRecognized
                              ? 'bg-purple-950/60 border-purple-500/40 text-purple-200'
                              : 'bg-slate-800/60 border-slate-700 text-slate-400'
                          }`}
                        >
                          <span className="font-mono font-bold">{term.token}</span>
                          <ArrowRight className="w-3 h-3 text-slate-500" />
                          <span>{term.meaning || 'kata umum'}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Bottom Quick Help */}
              <div className="pt-3 border-t border-white/10 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Standar: FI VI, Remington, &amp; Permenkes 73/2016</span>
                <span className="text-purple-400 font-medium">Validasi Klinis</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= VIEW 3: HIGH ALERT (ISMP DO NOT USE) ================= */}
      {viewMode === 'highalert' && (
        <div className="space-y-6">
          <div className="bg-rose-50 dark:bg-rose-950/30 p-5 rounded-3xl border border-rose-200 dark:border-rose-900/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-bold text-base">
                <AlertOctagon className="w-5 h-5" />
                <span>ISMP &amp; KARS "Do Not Use" List — Standar Keselamatan Pasien (SKP-3)</span>
              </div>
              <p className="text-xs text-rose-800 dark:text-rose-300/90 leading-relaxed max-w-3xl">
                Singkatan-singkatan berikut adalah penyebab utama insiden medication error fatal di dunia. Standar Akreditasi Rumah Sakit (KARS / STARKES) dan Institute for Safe Medication Practices (ISMP) melarang keras penggunaannya pada resep dan rekam medis.
              </p>
            </div>
            <div className="shrink-0 px-3 py-1.5 rounded-xl bg-rose-600 text-white text-xs font-bold text-center">
              Dilarang dalam Akreditasi RS
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {highAlertItems.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-slate-900 p-5 rounded-2xl border-2 border-rose-500/30 dark:border-rose-500/40 shadow-sm space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xl font-black text-rose-600 dark:text-rose-400 px-3 py-1 rounded-xl bg-rose-100 dark:bg-rose-950/80 border border-rose-200 dark:border-rose-800">
                      {item.abbr}
                    </span>
                    <div>
                      <div className="text-xs font-bold text-slate-800 dark:text-slate-200">{item.fullLatin}</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">Arti: {item.indonesianMeaning}</div>
                    </div>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-md font-bold uppercase bg-rose-600 text-white">
                    BAHAYA
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-900 dark:text-rose-200 leading-relaxed font-medium">
                  {item.warningDetails}
                </div>

                <div className="text-xs text-slate-600 dark:text-slate-300">
                  <strong className="text-slate-900 dark:text-white">Rekomendasi Aman: </strong>
                  {item.exampleInRecipe}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= VIEW 4: FLASHCARDS HAFALAN ================= */}
      {viewMode === 'flashcards' && (
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Controls Bar */}
          <div className="flex items-center justify-between gap-3 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <select
                value={flashcardCategory}
                onChange={(e) => setFlashcardCategory(e.target.value as LatinCategoryKey)}
                className="text-xs font-semibold py-1.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:outline-none"
              >
                {LATIN_CATEGORIES.map(c => (
                  <option key={c.key} value={c.key}>{c.label}</option>
                ))}
              </select>

              <button
                onClick={handleShuffleDeck}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300 transition-colors"
                title="Acak Kartu"
              >
                <Shuffle className="w-3.5 h-3.5" />
                <span>Acak Kartu</span>
              </button>
            </div>

            <div className="text-xs font-bold text-purple-600 dark:text-purple-400">
              Kartu {flashcardIndex + 1} dari {shuffledCards.length}
            </div>
          </div>

          {/* FLASHCARD INTERACTIVE FLIP BOX */}
          {shuffledCards.length > 0 && (
            <div
              onClick={() => setIsFlipped(!isFlipped)}
              className="relative cursor-pointer min-h-[340px] rounded-3xl p-8 bg-gradient-to-br from-[#120520] via-[#1f0933] to-[#2d0e46] border-2 border-purple-500/30 text-white shadow-2xl flex flex-col justify-between transition-all duration-300 hover:border-purple-400/60"
            >
              <div className="flex items-center justify-between text-xs text-purple-300">
                <span className="px-2.5 py-1 rounded-full bg-white/10 font-semibold">
                  {shuffledCards[flashcardIndex].categoryLabel}
                </span>
                <span className="flex items-center gap-1 text-[11px] text-slate-300">
                  <RotateCw className="w-3 h-3" />
                  <span>Klik untuk {isFlipped ? 'tutup' : 'buka arti'}</span>
                </span>
              </div>

              {/* CARD FRONT / BACK CONTENT */}
              <div className="my-auto text-center py-6 space-y-4">
                {!isFlipped ? (
                  <>
                    <div className="text-xs font-semibold text-slate-300 tracking-widest uppercase">
                      Apa arti singkatan ini?
                    </div>
                    <div className="text-5xl md:text-6xl font-black font-mono tracking-tight text-white drop-shadow-md">
                      {shuffledCards[flashcardIndex].abbr}
                    </div>
                    <div className="text-xs text-purple-300/90 font-medium italic">
                      (Klik kartu untuk melihat jawaban &amp; contoh kasus)
                    </div>
                  </>
                ) : (
                  <div className="space-y-3 animate-fadeIn">
                    <div className="text-3xl font-black text-purple-300 font-mono">
                      {shuffledCards[flashcardIndex].abbr}
                    </div>
                    <div className="text-sm font-semibold text-slate-300 italic">
                      "{shuffledCards[flashcardIndex].fullLatin}"
                    </div>
                    <div className="p-4 rounded-2xl bg-purple-950/50 border border-purple-400/30 text-base font-bold text-purple-200">
                      Arti: {shuffledCards[flashcardIndex].indonesianMeaning}
                    </div>
                    <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                      {shuffledCards[flashcardIndex].explanation}
                    </p>
                    {shuffledCards[flashcardIndex].exampleInRecipe && (
                      <div className="text-[11px] font-mono text-purple-200 bg-black/30 p-2 rounded-xl border border-purple-500/20 inline-block">
                        Contoh: {shuffledCards[flashcardIndex].exampleInRecipe.split('\n')[0]}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Progress Indicator */}
              <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-purple-400 to-indigo-400 h-full transition-all duration-300"
                  style={{ width: `${((flashcardIndex + 1) / shuffledCards.length) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* CARD NAVIGATION BUTTONS */}
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={() => {
                setIsFlipped(false);
                setFlashcardIndex((prev) => (prev > 0 ? prev - 1 : shuffledCards.length - 1));
              }}
              className="flex-1 py-3 px-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center justify-center gap-2 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Sebelumnya</span>
            </button>

            <button
              onClick={() => {
                setIsFlipped(false);
                setFlashcardIndex((prev) => (prev < shuffledCards.length - 1 ? prev + 1 : 0));
              }}
              className="flex-1 py-3 px-4 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-colors"
            >
              <span>Selanjutnya</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ================= MODAL DETAIL ABBREVIATION ================= */}
      {selectedItemForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full p-6 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-5"
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div>
                <span className="text-xs px-2.5 py-0.5 rounded-md font-semibold bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/60">
                  {selectedItemForModal.categoryLabel}
                </span>
                <h3 className="text-2xl font-black font-mono text-slate-900 dark:text-white mt-1">
                  {selectedItemForModal.abbr}
                </h3>
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 italic">
                  "{selectedItemForModal.fullLatin}"
                </div>
              </div>

              <button
                onClick={() => setSelectedItemForModal(null)}
                className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            {/* Meaning box */}
            <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800">
              <div className="text-[11px] font-bold text-purple-700 dark:text-purple-400 uppercase tracking-wider">
                Terjemahan Resmi Bahasa Indonesia
              </div>
              <div className="text-base font-bold text-purple-900 dark:text-purple-200 mt-0.5">
                {selectedItemForModal.indonesianMeaning}
              </div>
            </div>

            {/* High Alert Warning if applicable */}
            {selectedItemForModal.isHighAlertWarning && (
              <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-800 dark:text-rose-200 text-xs space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-rose-600 dark:text-rose-400">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Peringatan ISMP &amp; KARS High Alert</span>
                </div>
                <p className="leading-relaxed">{selectedItemForModal.warningDetails}</p>
              </div>
            )}

            {/* Clinical Explanation */}
            <div className="space-y-1">
              <div className="text-xs font-bold text-slate-700 dark:text-slate-300">
                Penjelasan &amp; Konteks Pelayanan Farmasi:
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {selectedItemForModal.explanation}
              </p>
            </div>

            {/* Example In Recipe */}
            {selectedItemForModal.exampleInRecipe && (
              <div className="space-y-1.5">
                <div className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Contoh Penulisan dalam Resep Dokter:
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-1 font-mono text-xs">
                  <div className="text-slate-800 dark:text-slate-200 font-bold whitespace-pre-line">
                    {selectedItemForModal.exampleInRecipe}
                  </div>
                  {selectedItemForModal.recipeTranslation && (
                    <div className="text-purple-600 dark:text-purple-400 font-sans text-[11px] pt-1 border-t border-slate-200 dark:border-slate-700">
                      Artinya: {selectedItemForModal.recipeTranslation}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Modal Actions */}
            <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={() => {
                  handleCopyText(
                    `${selectedItemForModal.abbr} (${selectedItemForModal.fullLatin}) = ${selectedItemForModal.indonesianMeaning}`,
                    'modal'
                  );
                }}
                className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5"
              >
                {copiedId === 'modal' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Tersalin</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Salin Info</span>
                  </>
                )}
              </button>
              <button
                onClick={() => setSelectedItemForModal(null)}
                className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold"
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
