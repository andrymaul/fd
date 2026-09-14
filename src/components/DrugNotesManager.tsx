import React, { useState, useMemo, useEffect } from 'react';
import { 
  BookOpen, 
  Search, 
  Bookmark, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  Printer, 
  ArrowRight, 
  ChevronRight, 
  ChevronDown, 
  Zap, 
  GraduationCap, 
  Lightbulb, 
  Eye, 
  EyeOff, 
  Pill,
  BookMarked,
  Flame,
  Check,
  Layers,
  Shuffle
} from 'lucide-react';
import { FloatingPillsBackground } from './FloatingPillsBackground';
import { 
  DRUG_NOTES_DATABASE, 
  DrugNoteItem, 
  DrugNotesChapter, 
  searchDrugNotes, 
  getAllDrugNotes 
} from '../data/drugNotesData';

interface DrugNotesManagerProps {
  onSelectTab?: (tab: string) => void;
  onCheckInteractionWith?: (drugName: string) => void;
}

export const DrugNotesManager: React.FC<DrugNotesManagerProps> = ({
  onSelectTab,
  onCheckInteractionWith
}) => {
  // State management
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItemId, setSelectedItemId] = useState<string>('note-3-1');
  const [expandedChapters, setExpandedChapters] = useState<Record<string, boolean>>({
    'bab-2': true,
    'bab-3': true,
    'bab-5': true,
    'bab-8': true
  });
  
  // Flashcard memorization mode (hide/show typical side effects or rhymes to test memory)
  const [flashcardMode, setFlashcardMode] = useState<boolean>(false);
  const [revealedItems, setRevealedItems] = useState<Record<string, boolean>>({});

  // Learning tracker filter ('all' | 'unmastered' | 'mastered' | 'bookmarked')
  type LearningFilter = 'all' | 'unmastered' | 'mastered' | 'bookmarked';
  const [learningFilter, setLearningFilter] = useState<LearningFilter>('all');

  // Bookmarks saved in localStorage
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('farmasi_drug_notes_bookmarks');
      return saved ? JSON.parse(saved) : ['note-3-1', 'note-8-1'];
    } catch {
      return ['note-3-1', 'note-8-1'];
    }
  });

  // Mastered / Memorized notes saved in localStorage
  const [masteredIds, setMasteredIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('farmasi_drug_notes_mastered');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Save bookmarks to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('farmasi_drug_notes_bookmarks', JSON.stringify(bookmarkedIds));
    } catch (e) {
      console.error('Failed to save drug notes bookmarks', e);
    }
  }, [bookmarkedIds]);

  // Save mastered to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('farmasi_drug_notes_mastered', JSON.stringify(masteredIds));
    } catch (e) {
      console.error('Failed to save mastered drug notes', e);
    }
  }, [masteredIds]);

  // Toggle chapter collapse
  const toggleChapter = (chapterId: string) => {
    setExpandedChapters(prev => ({
      ...prev,
      [chapterId]: !prev[chapterId]
    }));
  };

  // Toggle bookmark
  const toggleBookmark = (id: string) => {
    setBookmarkedIds(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  // Toggle mastered
  const toggleMastered = (id: string) => {
    setMasteredIds(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  // Toggle flashcard reveal
  const toggleReveal = (key: string) => {
    setRevealedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Filtered items based on search query
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    return searchDrugNotes(searchQuery);
  }, [searchQuery]);

  // All items flattened
  const allItems = useMemo(() => getAllDrugNotes(), []);
  
  const currentItem = useMemo(() => {
    const found = allItems.find(item => item.id === selectedItemId);
    return found || allItems[0];
  }, [allItems, selectedItemId]);

  // Auto-expand chapter when item is selected
  useEffect(() => {
    if (currentItem?.chapterId) {
      setExpandedChapters(prev => ({
        ...prev,
        [currentItem.chapterId]: true
      }));
    }
  }, [currentItem?.chapterId]);

  // Total stats
  const totalNotesCount = allItems.length;
  const masteredCount = masteredIds.length;
  const masteryPercentage = Math.round((masteredCount / (totalNotesCount || 1)) * 100);

  // Filter chapters based on active learning status filter
  const filteredChapters = useMemo(() => {
    if (learningFilter === 'all') return DRUG_NOTES_DATABASE;
    return DRUG_NOTES_DATABASE.map(ch => {
      const subChapters = ch.subChapters.map(sub => {
        const items = sub.items.filter(item => {
          if (learningFilter === 'mastered') return masteredIds.includes(item.id);
          if (learningFilter === 'unmastered') return !masteredIds.includes(item.id);
          if (learningFilter === 'bookmarked') return bookmarkedIds.includes(item.id);
          return true;
        });
        return { ...sub, items };
      }).filter(sub => sub.items.length > 0);
      return { ...ch, subChapters };
    }).filter(ch => ch.subChapters.length > 0);
  }, [learningFilter, masteredIds, bookmarkedIds]);

  // Jump to a random topic (Active Recall / Random Quiz)
  const handleRandomTopic = () => {
    if (allItems.length === 0) return;
    let pool = allItems;
    if (learningFilter === 'unmastered') {
      const unmastered = allItems.filter(i => !masteredIds.includes(i.id));
      if (unmastered.length > 0) pool = unmastered;
    } else if (learningFilter === 'mastered') {
      const mastered = allItems.filter(i => masteredIds.includes(i.id));
      if (mastered.length > 0) pool = mastered;
    } else if (learningFilter === 'bookmarked') {
      const bmed = allItems.filter(i => bookmarkedIds.includes(i.id));
      if (bmed.length > 0) pool = bmed;
    }
    const randomIndex = Math.floor(Math.random() * pool.length);
    setSelectedItemId(pool[randomIndex].id);
  };

  // Trigger interaction check
  const handleJumpToInteractions = (drugName: string) => {
    if (onCheckInteractionWith) {
      onCheckInteractionWith(drugName);
    } else if (onSelectTab) {
      onSelectTab('interactions');
    }
  };

  // Print current note
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 pb-12">
      {/* HERO BANNER - DEEP OBSIDIAN & WARM AMBER (Matches other core menus) */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0c0802] via-[#1b1104] to-[#261706] p-6 sm:p-8 text-white shadow-2xl border border-amber-500/25">
        <FloatingPillsBackground density="low" accentColor="#f59e0b" />
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-6 bottom-4 opacity-10 pointer-events-none">
          <BookOpen className="w-48 h-48 text-amber-400" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold font-outfit">
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span>Edisi Saku Farmasi Klinis &amp; UKMPPAI &bull; {DRUG_NOTES_DATABASE.length} Bab Lengkap</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center shadow-lg shadow-amber-950/50 shrink-0">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-black font-outfit tracking-tight">
                  Hafalan Obat: Jembatan Keledai &amp; Rima Klinis
                </h1>
                <p className="text-xs sm:text-sm text-amber-100/80 font-medium">
                  Kuasai kombinasi obat, rasionalitas formulasi, efek samping unik, antidotum, dan aturan minum dalam hitungan menit dengan rima suku kata yang mudah diingat seumur hidup.
                </p>
              </div>
            </div>

            {/* Quick Stat Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <div className="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-xs flex items-center gap-1.5 font-bold text-amber-200">
                <Layers className="w-3.5 h-3.5 text-amber-400" />
                <span>{DRUG_NOTES_DATABASE.length} Bab &amp; {totalNotesCount} Topik Klinis</span>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-xs flex items-center gap-1.5 font-bold text-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
                <span>{masteredCount} Topik Dihafal ({masteryPercentage}%)</span>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-xs flex items-center gap-1.5 font-bold text-amber-100">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Suku Kata &amp; Rima Emas</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 relative z-10">
            <div className="bg-slate-950/80 px-4 py-3 rounded-2xl border border-amber-950/60 text-right shadow-md">
              <span className="text-[11px] text-slate-400 block font-medium">Progres Hafalan Anda:</span>
              <span className="text-lg font-black text-amber-400">{masteredCount} / {totalNotesCount} Topik</span>
              <div className="w-36 bg-slate-800 rounded-full h-1.5 overflow-hidden mt-1.5 ml-auto">
                <div 
                  className="bg-gradient-to-r from-amber-400 to-emerald-400 h-full rounded-full transition-all duration-500" 
                  style={{ width: `${masteryPercentage}%` }} 
                />
              </div>
              <span className="text-[10px] text-slate-400 block mt-1">Tingkat Penguasaan: <strong className="text-emerald-400">{masteryPercentage}%</strong></span>
            </div>
          </div>
        </div>

        {/* Integrated Search Bar & Flashcard Control */}
        <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3 relative z-10">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-300/70" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari jembatan keledai (contoh: Al-MaSi, R-I-P-E-S, FeKarValEto, AciValFam, MetroTini, Antidotum)..."
              className="w-full pl-10 pr-10 py-2.5 bg-white/10 hover:bg-white/15 focus:bg-slate-900/90 text-white placeholder-amber-200/60 focus:placeholder-slate-400 rounded-xl border border-white/15 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/30 transition-all text-xs sm:text-sm font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs bg-white/20 hover:bg-white/30 text-white rounded-full px-2 py-0.5 cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Random Topic Button */}
          <button
            onClick={handleRandomTopic}
            className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-white/10 hover:bg-white/20 text-amber-200 hover:text-white border border-white/15 transition-all shadow-md shrink-0 cursor-pointer"
            title="Buka topik acak untuk menguji hafalan Anda secara spontan"
          >
            <Shuffle className="w-4 h-4 text-amber-300" />
            <span>Topik Acak</span>
          </button>

          <button
            onClick={() => setFlashcardMode(!flashcardMode)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md shrink-0 cursor-pointer ${
              flashcardMode 
                ? 'bg-amber-400 text-slate-950 border border-amber-300 shadow-amber-500/20' 
                : 'bg-white/10 hover:bg-white/15 text-white border border-white/15'
            }`}
            title="Sembunyikan rima &amp; efek samping untuk menguji daya ingat Anda"
          >
            {flashcardMode ? <EyeOff className="w-4 h-4 text-slate-950" /> : <Eye className="w-4 h-4 text-amber-300" />}
            <span>{flashcardMode ? 'Mode Tes Aktif' : 'Uji Hafalan (Flashcard)'}</span>
          </button>
        </div>
      </div>

      {/* Main Content Workspace Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* =========================================================================
              LEFT SIDEBAR: CHAPTER ACCORDION & INDEX
              ========================================================================= */}
          <div className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden sticky top-6">
            <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/70 dark:bg-slate-800/50">
              <div className="flex items-center gap-2">
                <BookMarked className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <h2 className="font-bold text-sm text-slate-800 dark:text-slate-200">
                  Daftar Isi &amp; Modul Hafalan
                </h2>
              </div>
              <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 font-semibold">
                {allItems.length} Topik &bull; {DRUG_NOTES_DATABASE.length} Bab
              </span>
            </div>

            {/* Learning Status Filter Tabs */}
            <div className="p-2 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 grid grid-cols-4 gap-1 text-[11px] font-bold">
              <button
                onClick={() => setLearningFilter('all')}
                className={`py-1 px-1 rounded-lg text-center transition-all cursor-pointer truncate ${
                  learningFilter === 'all'
                    ? 'bg-amber-500 text-white shadow-xs'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200/60 dark:border-slate-700/60'
                }`}
              >
                Semua ({allItems.length})
              </button>
              <button
                onClick={() => setLearningFilter('unmastered')}
                className={`py-1 px-1 rounded-lg text-center transition-all cursor-pointer truncate ${
                  learningFilter === 'unmastered'
                    ? 'bg-amber-500 text-white shadow-xs'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200/60 dark:border-slate-700/60'
                }`}
                title="Topik yang belum ditandai hafal"
              >
                Belum ({allItems.length - masteredCount})
              </button>
              <button
                onClick={() => setLearningFilter('mastered')}
                className={`py-1 px-1 rounded-lg text-center transition-all cursor-pointer truncate ${
                  learningFilter === 'mastered'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200/60 dark:border-slate-700/60'
                }`}
                title="Topik yang sudah berhasil dihafal"
              >
                Hafal ({masteredCount})
              </button>
              <button
                onClick={() => setLearningFilter('bookmarked')}
                className={`py-1 px-1 rounded-lg text-center transition-all cursor-pointer truncate ${
                  learningFilter === 'bookmarked'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200/60 dark:border-slate-700/60'
                }`}
                title="Topik yang dibookmark favorit"
              >
                Favorit ({bookmarkedIds.length})
              </button>
            </div>

            {/* If Search Query Active */}
            {searchResults !== null ? (
              <div className="p-3 max-h-[calc(100vh-280px)] overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800">
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 px-2 py-1.5 mb-1">
                  Hasil Pencarian: {searchResults.length} ditemukan
                </div>
                {searchResults.length === 0 ? (
                  <div className="p-6 text-center text-slate-500 dark:text-slate-400 text-sm">
                    Tidak ada jembatan keledai yang cocok dengan &quot;{searchQuery}&quot;. Coba kata kunci lain seperti &quot;Al-MaSi&quot;, &quot;FeKarValEto&quot;, atau &quot;OAT&quot;.
                  </div>
                ) : (
                  searchResults.map(item => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setSelectedItemId(item.id);
                        setSearchQuery('');
                      }}
                      className={`w-full text-left p-3 rounded-xl transition-all flex flex-col gap-1 ${
                        selectedItemId === item.id 
                          ? 'bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60' 
                          : 'hover:bg-slate-50 dark:hover:bg-slate-800/60'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
                          {item.chapterNumber} &bull; {item.subChapterNumber}
                        </span>
                        {masteredIds.includes(item.id) && (
                          <span className="text-[10px] bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 px-1.5 py-0.5 rounded-md font-bold flex items-center gap-0.5">
                            <Check className="w-3 h-3" /> Hafal
                          </span>
                        )}
                      </div>
                      <div className="text-sm font-bold text-slate-800 dark:text-slate-100">
                        {item.heroMnemonic}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                        {item.rhymeTagline}
                      </div>
                    </button>
                  ))
                )}
              </div>
            ) : (
              /* Regular Accordion Chapter Hierarchy */
              <div className="p-3 max-h-[calc(100vh-280px)] overflow-y-auto space-y-2">
                {filteredChapters.length === 0 ? (
                  <div className="p-8 text-center text-slate-400 dark:text-slate-500 text-xs">
                    <p className="font-semibold text-slate-600 dark:text-slate-300 mb-1">
                      {learningFilter === 'mastered' 
                        ? 'Belum ada topik yang ditandai hafal.' 
                        : learningFilter === 'bookmarked'
                        ? 'Belum ada topik yang difavoritkan.'
                        : 'Tidak ada topik yang sesuai kriteria.'}
                    </p>
                    <p>Klik tombol &quot;Tandai Hafal&quot; atau bintang bookmark pada topik untuk mengelompokkan materi hafalan Anda.</p>
                  </div>
                ) : (
                  filteredChapters.map(chapter => {
                    const isExpanded = !!expandedChapters[chapter.id];
                    const totalSubItems = chapter.subChapters.reduce((acc, sub) => acc + sub.items.length, 0);

                    return (
                    <div 
                      key={chapter.id} 
                      className="border border-slate-100 dark:border-slate-800 rounded-xl overflow-hidden bg-slate-50/50 dark:bg-slate-900/40"
                    >
                      {/* Chapter Accordion Header */}
                      <button
                        onClick={() => toggleChapter(chapter.id)}
                        className="w-full flex items-center justify-between p-3 text-left font-semibold text-xs sm:text-sm text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 text-[11px] font-bold rounded-md">
                            {chapter.number}
                          </span>
                          <span className="font-bold line-clamp-1">{chapter.title}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-400">
                          <span className="text-[10px] font-normal">{totalSubItems} note</span>
                          {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                        </div>
                      </button>

                      {/* Chapter Items List */}
                      {isExpanded && (
                        <div className="p-2 pt-0 space-y-1 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800/80">
                          {chapter.subChapters.map(sub => (
                            <div key={sub.id} className="pt-1.5">
                              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-2 py-1 flex items-center gap-1">
                                <span>{sub.number}</span>
                                <span>{sub.title}</span>
                              </div>
                              <div className="space-y-0.5">
                                {sub.items.map(item => {
                                  const isSelected = selectedItemId === item.id;
                                  const isMastered = masteredIds.includes(item.id);

                                  return (
                                    <button
                                      key={item.id}
                                      onClick={() => setSelectedItemId(item.id)}
                                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all flex items-center justify-between group cursor-pointer ${
                                        isSelected
                                          ? 'bg-amber-500 text-white shadow-xs font-semibold'
                                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                                      }`}
                                    >
                                      <div className="flex items-center gap-2 min-w-0 pr-2">
                                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isSelected ? 'bg-white' : 'bg-amber-500'}`} />
                                        <span className="truncate">{item.heroMnemonic}</span>
                                      </div>
                                      <div className="flex items-center gap-1 shrink-0">
                                        {isMastered && (
                                          <CheckCircle2 className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-emerald-500'}`} />
                                        )}
                                        {bookmarkedIds.includes(item.id) && (
                                          <Bookmark className={`w-3 h-3 fill-current ${isSelected ? 'text-amber-200' : 'text-amber-500'}`} />
                                        )}
                                      </div>
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }))}
              </div>
            )}
          </div>

          {/* =========================================================================
              RIGHT PANE: EDITORIAL MNEMONIC DOSSIER CARD
              ========================================================================= */}
          <div className="lg:col-span-8 space-y-6">
            {currentItem ? (
              <article className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden print:border-none print:shadow-none">
                
                {/* 1. Header Bar: Breadcrumb & Actions */}
                <div className="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 bg-gradient-to-b from-slate-50/80 to-white dark:from-slate-800/40 dark:to-slate-900">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400 tracking-wide uppercase">
                      <span>{currentItem.chapterNumber}</span>
                      <span>&gt;</span>
                      <span>{currentItem.breadcrumb}</span>
                    </div>

                    {/* Toolbar Actions */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleMastered(currentItem.id)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                          masteredIds.includes(currentItem.id)
                            ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                        }`}
                        title="Tandai sudah hafal topik ini"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{masteredIds.includes(currentItem.id) ? 'Sudah Dihafal' : 'Tandai Hafal'}</span>
                      </button>

                      <button
                        onClick={() => toggleBookmark(currentItem.id)}
                        className={`p-2 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                          bookmarkedIds.includes(currentItem.id)
                            ? 'bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border-amber-300 dark:border-amber-800'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:text-slate-800'
                        }`}
                        title="Simpan ke favorit"
                      >
                        <Bookmark className={`w-4 h-4 ${bookmarkedIds.includes(currentItem.id) ? 'fill-current' : ''}`} />
                      </button>

                      <button
                        onClick={handlePrint}
                        className="p-2 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:text-slate-800 dark:hover:text-slate-200 transition-all print:hidden cursor-pointer"
                        title="Cetak catatan ini"
                      >
                        <Printer className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Category Pill */}
                  <div className="inline-block px-2.5 py-1 rounded-md text-[11px] font-extrabold uppercase tracking-wider bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20 mb-3">
                    {currentItem.categoryTag}
                  </div>

                  {/* Subchapter Title */}
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white font-outfit">
                    {currentItem.subChapterNumber} {currentItem.subChapterTitle}
                  </h2>
                </div>

                {/* 2. Hero Mnemonic Card */}
                <div className="p-5 sm:p-6 space-y-6">
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 p-6 sm:p-8 text-white shadow-md">
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                    
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <span className="text-xs uppercase tracking-widest font-extrabold text-amber-200 mb-2">
                        ⭐ JEMBATAN KELEDAI EMAS ⭐
                      </span>
                      
                      {/* Big Mnemonic Title */}
                      <h3 className="text-3xl sm:text-5xl font-black tracking-tight font-outfit text-white drop-shadow-sm mb-3">
                        {currentItem.heroMnemonic}
                      </h3>

                      {/* Tagline / Rhyme */}
                      {flashcardMode && !revealedItems[`rhyme-${currentItem.id}`] ? (
                        <button
                          onClick={() => toggleReveal(`rhyme-${currentItem.id}`)}
                          className="mt-2 px-4 py-2 rounded-xl bg-black/30 hover:bg-black/40 text-amber-200 text-xs font-semibold flex items-center gap-2 border border-white/20 transition-all cursor-pointer"
                        >
                          <Eye className="w-4 h-4" />
                          <span>Klik untuk Mengintip Rima Hafalan</span>
                        </button>
                      ) : (
                        <p className="text-base sm:text-lg font-medium text-amber-100 max-w-2xl italic leading-relaxed">
                          &quot;{currentItem.rhymeTagline}&quot;
                        </p>
                      )}
                    </div>
                  </div>

                  {/* 3. Syllable Breakdown Table */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-amber-500" />
                        Bedah Suku Kata &amp; Efek Samping Khas
                      </h4>
                      <span className="text-xs text-slate-400">
                        {currentItem.syllableBreakdown.length} Unsur Hafalan
                      </span>
                    </div>

                    <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-2xs">
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs sm:text-sm">
                          <thead className="bg-slate-100/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800 uppercase text-[11px] tracking-wider">
                            <tr>
                              <th className="p-3.5 sm:px-4 w-28">Suku Kata</th>
                              <th className="p-3.5 sm:px-4">Nama Obat / Zat Aktif</th>
                              <th className="p-3.5 sm:px-4">Golongan / DOEN</th>
                              <th className="p-3.5 sm:px-4">Efek Samping Khas / Peran Klinis</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900">
                            {currentItem.syllableBreakdown.map((syl, idx) => {
                              const isHidden = flashcardMode && !revealedItems[`syl-${currentItem.id}-${idx}`];

                              return (
                                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                  {/* Suku Kata Pill */}
                                  <td className="p-3.5 sm:px-4 font-black">
                                    <span className="inline-block px-3 py-1.5 rounded-lg bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30 text-xs sm:text-sm font-black tracking-wide">
                                      {syl.syllable}
                                    </span>
                                  </td>

                                  {/* Nama Obat */}
                                  <td className="p-3.5 sm:px-4 font-bold text-slate-900 dark:text-white">
                                    {syl.drugName}
                                  </td>

                                  {/* Golongan / Badge */}
                                  <td className="p-3.5 sm:px-4">
                                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                                      {syl.badgeType || (syl.isDoen ? 'DOEN RI' : 'Standar')}
                                    </span>
                                  </td>

                                  {/* Efek Samping Khas */}
                                  <td className="p-3.5 sm:px-4 font-medium text-slate-700 dark:text-slate-300">
                                    {isHidden ? (
                                      <button
                                        onClick={() => toggleReveal(`syl-${currentItem.id}-${idx}`)}
                                        className="text-xs text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1 font-semibold cursor-pointer"
                                      >
                                        <Eye className="w-3.5 h-3.5" />
                                        <span>[Klik untuk Melihat Efek Samping]</span>
                                      </button>
                                    ) : (
                                      <span className="text-slate-800 dark:text-slate-200 font-semibold">
                                        {syl.typicalSideEffect}
                                      </span>
                                    )}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  {/* 4. Clinical Key Pearls Callout (Kotak Hijau Pencerahan) */}
                  <div className="rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 p-5 shadow-xs">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 shrink-0">
                        <Lightbulb className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-emerald-900 dark:text-emerald-300">
                          Catatan Rasionalitas Formulasi &amp; Kunci Klinis Apoteker
                        </h4>
                        <p className="text-xs sm:text-sm text-emerald-800 dark:text-emerald-200/90 leading-relaxed">
                          {currentItem.clinicalKeyPearls}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 5. Clinical Warnings & DDI Callout (Kotak Kuning/Amber Peringatan) */}
                  <div className="rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 p-5 shadow-xs">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400 shrink-0">
                        <AlertTriangle className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-amber-900 dark:text-amber-300">
                          Peringatan Klinis, Kontraindikasi &amp; Interaksi Signifikan
                        </h4>
                        <p className="text-xs sm:text-sm text-amber-800 dark:text-amber-200/90 leading-relaxed">
                          {currentItem.clinicalWarnings}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 6. Comparison Table */}
                  {currentItem.comparisonTable && currentItem.comparisonTable.length > 0 && (
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
                          <Pill className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                          Tabel Komparasi Farmakologi &amp; Kehamilan FDA
                        </h4>
                      </div>

                      <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-2xs">
                        <div className="overflow-x-auto">
                          <table className="w-full text-left text-xs sm:text-sm">
                            <thead className="bg-slate-100/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800 uppercase text-[11px] tracking-wider">
                              <tr>
                                <th className="p-3.5 sm:px-4">Formula / Obat</th>
                                <th className="p-3.5 sm:px-4">Mekanisme Kerja</th>
                                <th className="p-3.5 sm:px-4">Efek Samping Lengkap</th>
                                <th className="p-3.5 sm:px-4 text-center w-24">Kat. FDA</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900">
                              {currentItem.comparisonTable.map((row, rIdx) => (
                                <tr key={rIdx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                  <td className="p-3.5 sm:px-4 font-bold text-slate-900 dark:text-white">
                                    {row.drugFormula}
                                  </td>
                                  <td className="p-3.5 sm:px-4 text-slate-600 dark:text-slate-400 text-xs">
                                    {row.mechanism}
                                  </td>
                                  <td className="p-3.5 sm:px-4 text-slate-600 dark:text-slate-400 text-xs">
                                    {row.detailedSideEffects}
                                  </td>
                                  <td className="p-3.5 sm:px-4 text-center">
                                    {row.fdaCategory && (
                                      <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-bold ${
                                        row.fdaCategory === 'A' || row.fdaCategory === 'B'
                                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                                          : row.fdaCategory === 'C'
                                          ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300'
                                          : 'bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300'
                                      }`}>
                                        Kat. {row.fdaCategory}
                                      </span>
                                    )}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 7. Action Shortcuts & Cross-Module Bridges */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      {currentItem.relatedDrugName && (
                        <button
                          onClick={() => handleJumpToInteractions(currentItem.relatedDrugName || '')}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-600 text-white shadow-xs transition-all hover:scale-[1.02] cursor-pointer"
                        >
                          <Zap className="w-4 h-4 text-amber-200" />
                          <span>Cek Interaksi {currentItem.relatedDrugName} di DDI Engine</span>
                        </button>
                      )}

                      {onSelectTab && (
                        <button
                          onClick={() => onSelectTab('competency')}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-teal-600 hover:bg-teal-700 text-white shadow-xs transition-all hover:scale-[1.02] cursor-pointer"
                        >
                          <GraduationCap className="w-4 h-4 text-teal-200" />
                          <span>Latihan Soal UKMPPAI Kasus Ini</span>
                        </button>
                      )}

                      {onSelectTab && (
                        <button
                          onClick={() => onSelectTab('drugs')}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-all cursor-pointer"
                        >
                          <BookOpen className="w-4 h-4 text-slate-500" />
                          <span>Buka Monografi Obat Lengkap</span>
                        </button>
                      )}
                    </div>

                    {/* Navigation Prev / Next Note */}
                    <div className="flex items-center gap-2">
                      {(() => {
                        const currentIndex = allItems.findIndex(i => i.id === currentItem.id);
                        const prevItem = currentIndex > 0 ? allItems[currentIndex - 1] : null;
                        const nextItem = currentIndex < allItems.length - 1 ? allItems[currentIndex + 1] : null;

                        return (
                          <>
                            {prevItem && (
                              <button
                                onClick={() => setSelectedItemId(prevItem.id)}
                                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 transition-all cursor-pointer"
                              >
                                &larr; Sebelumnya
                              </button>
                            )}
                            {nextItem && (
                              <button
                                onClick={() => setSelectedItemId(nextItem.id)}
                                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 transition-all flex items-center gap-1 cursor-pointer"
                              >
                                <span>Selanjutnya</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </>
                        );
                      })()}
                    </div>
                  </div>

                </div>
              </article>
            ) : (
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-12 text-center text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800">
                Pilih salah satu catatan jembatan keledai di panel kiri untuk membuka dossier hafalan lengkap.
              </div>
            )}
          </div>

        </div>
    </div>
  );
};
