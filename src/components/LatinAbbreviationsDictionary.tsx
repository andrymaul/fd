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
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-teal-900 via-slate-900 to-cyan-950 p-6 md:p-8 text-white border border-teal-500/20 shadow-2xl">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs font-semibold tracking-wide uppercase">
              <Languages className="w-3.5 h-3.5" />
              <span>Standar Farmakope Indonesia &amp; Resep Klinis</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white flex items-center gap-2">
              Kamus &amp; Penerjemah Singkatan Latin Resep
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed">
              Panduan lengkap 180+ singkatan Latin farmasi, pengurai signa resep otomatis, verifikasi etiket obat, serta penapisan singkatan berbahaya standar <span className="text-cyan-300 font-medium">ISMP &amp; KARS</span>.
            </p>

            {/* Feature Highlights Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              <div className="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-xs flex items-center gap-1.5 font-bold text-cyan-200">
                <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                <span>Pengurai Signa Resep Otomatis</span>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-xs flex items-center gap-1.5 font-bold text-rose-200">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-300" />
                <span>Penapisan Singkatan Berbahaya ISMP</span>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-xs flex items-center gap-1.5 font-bold text-teal-200">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-300" />
                <span>Standar Penulisan Etiket Apotek</span>
              </div>
            </div>
          </div>

          {/* Right Hero Badge: Database Status */}
          <div className="flex flex-col gap-3 lg:w-72 shrink-0 relative z-10">
            <div className="bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-cyan-500/40 space-y-2.5 shadow-xl">
              <div className="flex items-center justify-between text-xs font-bold text-cyan-300 border-b border-cyan-800/60 pb-2">
                <span className="flex items-center gap-1.5 font-black font-outfit">
                  <Activity className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Status Database</span>
                </span>
                <span className="bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded-full text-[10px] font-black border border-cyan-600/40">
                  {LATIN_ABBREVIATIONS.length} Data Terverifikasi
                </span>
              </div>
              <div className="text-xs text-cyan-100/80 space-y-1.5 font-medium">
                <div className="flex justify-between items-center">
                  <span>Kamus Singkatan:</span>
                  <span className="font-mono font-bold text-white bg-white/10 px-2 py-0.5 rounded-md text-[11px]">{LATIN_ABBREVIATIONS.length} Istilah</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Kategori Klinis:</span>
                  <span className="font-mono font-bold text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded-md text-[11px]">{LATIN_CATEGORIES.length - 1} Kategori</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Do Not Use (ISMP):</span>
                  <span className="font-mono font-bold text-rose-300 bg-rose-950/60 px-2 py-0.5 rounded-md text-[11px]">{highAlertItems.length} Singkatan</span>
                </div>
                <div className="flex justify-between items-center pt-1 border-t border-cyan-900/40 text-[10px] text-cyan-300/80">
                  <span>Standar Acuan:</span>
                  <span className="font-bold text-white">Farmakope Indonesia &amp; ISMP</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MODE TABS BAR */}
        <div className="relative z-10 mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-2">
          <button
            onClick={() => setViewMode('dictionary')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
              viewMode === 'dictionary'
                ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/25 ring-2 ring-cyan-400/40'
                : 'bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Kamus &amp; Pencarian ({filteredItems.length})</span>
          </button>

          <button
            onClick={() => setViewMode('translator')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
              viewMode === 'translator'
                ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/25 ring-2 ring-cyan-400/40'
                : 'bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>⚡ Penerjemah Signa Resep</span>
          </button>

          <button
            onClick={() => setViewMode('highalert')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
              viewMode === 'highalert'
                ? 'bg-gradient-to-r from-rose-600 to-amber-600 text-white shadow-lg shadow-rose-500/25 ring-2 ring-rose-400/40'
                : 'bg-white/10 hover:bg-rose-500/20 text-slate-300 hover:text-rose-200'
            }`}
          >
            <AlertOctagon className="w-4 h-4 text-rose-400" />
            <span>Daftar Rawan Bahaya ISMP ({highAlertItems.length})</span>
          </button>

          <button
            onClick={() => setViewMode('flashcards')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
              viewMode === 'flashcards'
                ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-500/25 ring-2 ring-indigo-400/40'
                : 'bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white'
            }`}
          >
            <RotateCw className="w-4 h-4 text-indigo-300" />
            <span>🃏 Flashcard Hafalan UKMPPAI</span>
          </button>
        </div>
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
                className="w-full pl-11 pr-10 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 transition-all placeholder:text-slate-400"
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
                        ? 'bg-teal-600 text-white shadow-sm font-semibold'
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
                  className="inline-flex items-center gap-1 text-teal-600 dark:text-teal-400 hover:underline font-medium"
                >
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Kalkulator Puyer / D.T.D.</span>
                </button>
                <button
                  onClick={() => onSelectTab('drug-notes')}
                  className="inline-flex items-center gap-1 text-cyan-600 dark:text-cyan-400 hover:underline font-medium"
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
                className="px-4 py-2 rounded-xl bg-teal-600 text-white text-xs font-semibold hover:bg-teal-700"
              >
                Reset Pencarian
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredItems.map((item) => {
                const isCopied = copiedId === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedItemForModal(item)}
                    className="group relative bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 hover:border-teal-500/50 dark:hover:border-teal-400/50 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-start justify-between gap-2 mb-2.5">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-xs px-2.5 py-0.5 rounded-md font-semibold bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800/60">
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
                          className="p-1.5 rounded-lg text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                          title="Salin arti singkatan"
                        >
                          {isCopied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>

                      {/* Main Title & Latin */}
                      <div className="space-y-1">
                        <div className="flex items-baseline gap-2">
                          <h3 className="text-xl font-black text-slate-900 dark:text-white font-mono tracking-tight group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                            {item.abbr}
                          </h3>
                        </div>
                        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 italic">
                          "{item.fullLatin}"
                        </div>
                      </div>

                      {/* Indonesian Meaning */}
                      <div className="mt-3 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                        <div className="text-xs font-bold text-teal-800 dark:text-teal-300">
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
                        <span className="text-teal-600 dark:text-teal-400 font-semibold group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-0.5">
                          Detail <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
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
                  <div className="w-8 h-8 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold">
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
                  className="w-full p-4 font-mono text-sm rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 transition-all placeholder:text-slate-400"
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
                      className="text-left px-2.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-teal-500/10 hover:border-teal-500/30 border border-transparent text-slate-700 dark:text-slate-300 text-xs transition-colors"
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
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/10 hover:bg-white/20 text-cyan-300 text-xs font-medium transition-colors"
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
                  <div className="text-[11px] text-cyan-400 font-semibold uppercase tracking-wider">
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
                    <div className="text-sm font-black text-blue-900 py-1">
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
                              ? 'bg-teal-950/60 border-teal-500/40 text-teal-200'
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
                <span className="text-cyan-400 font-medium">Validasi Klinis</span>
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

            <div className="text-xs font-bold text-teal-600 dark:text-teal-400">
              Kartu {flashcardIndex + 1} dari {shuffledCards.length}
            </div>
          </div>

          {/* FLASHCARD INTERACTIVE FLIP BOX */}
          {shuffledCards.length > 0 && (
            <div
              onClick={() => setIsFlipped(!isFlipped)}
              className="relative cursor-pointer min-h-[340px] rounded-3xl p-8 bg-gradient-to-br from-teal-900 via-slate-900 to-cyan-950 border-2 border-teal-500/30 text-white shadow-2xl flex flex-col justify-between transition-all duration-300 hover:border-cyan-400/60"
            >
              <div className="flex items-center justify-between text-xs text-cyan-300">
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
                    <div className="text-xs text-cyan-400 font-medium italic">
                      (Klik kartu untuk melihat jawaban &amp; contoh kasus)
                    </div>
                  </>
                ) : (
                  <div className="space-y-3 animate-fadeIn">
                    <div className="text-3xl font-black text-cyan-300 font-mono">
                      {shuffledCards[flashcardIndex].abbr}
                    </div>
                    <div className="text-sm font-semibold text-slate-300 italic">
                      "{shuffledCards[flashcardIndex].fullLatin}"
                    </div>
                    <div className="p-4 rounded-2xl bg-white/10 border border-white/20 text-base font-bold text-emerald-300">
                      Arti: {shuffledCards[flashcardIndex].indonesianMeaning}
                    </div>
                    <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                      {shuffledCards[flashcardIndex].explanation}
                    </p>
                    {shuffledCards[flashcardIndex].exampleInRecipe && (
                      <div className="text-[11px] font-mono text-cyan-200 bg-black/30 p-2 rounded-xl border border-white/5 inline-block">
                        Contoh: {shuffledCards[flashcardIndex].exampleInRecipe.split('\n')[0]}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Progress Indicator */}
              <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-teal-400 to-cyan-400 h-full transition-all duration-300"
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
              className="flex-1 py-3 px-4 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-colors"
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
                <span className="text-xs px-2.5 py-0.5 rounded-md font-semibold bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800/60">
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
            <div className="p-4 rounded-2xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800">
              <div className="text-[11px] font-bold text-teal-700 dark:text-teal-400 uppercase tracking-wider">
                Terjemahan Resmi Bahasa Indonesia
              </div>
              <div className="text-base font-bold text-teal-900 dark:text-teal-200 mt-0.5">
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
                    <div className="text-teal-600 dark:text-teal-400 font-sans text-[11px] pt-1 border-t border-slate-200 dark:border-slate-700">
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
                className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold"
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
