import React, { useState, useMemo } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  CheckCircle2, 
  HelpCircle, 
  Calculator, 
  Stethoscope, 
  Sparkles, 
  Search, 
  ChevronRight, 
  ChevronDown, 
  Clock, 
  AlertTriangle, 
  RotateCcw, 
  Trophy, 
  BarChart3, 
  Layers, 
  FlaskConical, 
  Briefcase, 
  Leaf, 
  FileText, 
  Shuffle, 
  Check, 
  X, 
  Flag, 
  ArrowRight, 
  Eye, 
  EyeOff, 
  BookMarked,
  Zap,
  Info,
  TrendingUp,
  ClipboardList,
  Baby,
  ShieldCheck
} from 'lucide-react';
import { FloatingPillsBackground } from './FloatingPillsBackground';
import {
  COMPETENCY_DOMAINS,
  HIGH_YIELD_TOPICS,
  EXAM_QUESTION_BANK,
  FORMULA_GUIDES,
  OSCE_STATIONS,
  FLASHCARD_DECK,
  CALCULATION_FORMULA_DETAILS,
  HighYieldTopic,
  ExamQuestion,
  FormulaCalculatorGuide,
  OsceStationGuide,
  FlashcardItem
} from '../data/competencyExamData';

interface PharmacyCompetencyCenterProps {
  onSelectTab?: (tabId: string) => void;
  onOpenPricingModal?: () => void;
}

export const PharmacyCompetencyCenter: React.FC<PharmacyCompetencyCenterProps> = ({
  onSelectTab
}) => {
  // Main Subtab State
  const [activeMainTab, setActiveMainTab] = useState<'topics' | 'cbt' | 'calc' | 'osce' | 'flashcards'>('topics');
  // Exam Level Segmentation State: All vs UKMPPAI (Apoteker) vs UKTVK (Vokasi TTK)
  const [selectedExamLevel, setSelectedExamLevel] = useState<'all' | 'ukmppai' | 'uktvk'>('all');

  // 1. High-Yield Topics State
  const [selectedDomainFilter, setSelectedDomainFilter] = useState<string>('all');
  const [topicSearchQuery, setTopicSearchQuery] = useState<string>('');
  const [expandedTopicId, setExpandedTopicId] = useState<string | null>(HIGH_YIELD_TOPICS[0]?.id || null);

  // 2. CBT Exam Bank State
  const [cbtMode, setCbtMode] = useState<'study' | 'tryout'>('study');
  const [cbtDomainFilter, setCbtDomainFilter] = useState<string>('all');
  const [cbtDifficultyFilter, setCbtDifficultyFilter] = useState<string>('all');
  const [cbtSearchQuery, setCbtSearchQuery] = useState<string>('');
  const [userAnswers, setUserAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D' | 'E'>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<string, boolean>>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [isTryoutSubmitted, setIsTryoutSubmitted] = useState<boolean>(false);
  const [tryoutTimeLeft, setTryoutTimeLeft] = useState<number>(15 * 60); // 15 mins demo timer
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  // 3. Interactive Formula Calculators State
  const [selectedCalcCategory, setSelectedCalcCategory] = useState<string>('alligation');
  // Alligation Inputs
  const [alliHigh, setAlliHigh] = useState<number>(96);
  const [alliLow, setAlliLow] = useState<number>(0);
  const [alliTarget, setAlliTarget] = useState<number>(70);
  const [alliVol, setAlliVol] = useState<number>(100);
  // HLB Inputs
  const [hlbTarget, setHlbTarget] = useState<number>(12);
  const [hlbA, setHlbA] = useState<number>(15); // Tween 80
  const [hlbB, setHlbB] = useState<number>(4.3); // Span 80
  const [hlbTotalWeight, setHlbTotalWeight] = useState<number>(10);
  // Tonicity Inputs
  const [tonicVol, setTonicVol] = useState<number>(100);
  const [tonicDrugWeight, setTonicDrugWeight] = useState<number>(1.0);
  const [tonicEVal, setTonicEVal] = useState<number>(0.13);
  // PK Inputs
  const [pkCss, setPkCss] = useState<number>(15);
  const [pkVd, setPkVd] = useState<number>(35);
  const [pkCl, setPkCl] = useState<number>(2.8);
  // HJA Inputs
  const [hjaHpp, setHjaHpp] = useState<number>(100000);
  const [hjaPpnRate, setHjaPpnRate] = useState<number>(11);
  const [hjaMarginPercent, setHjaMarginPercent] = useState<number>(20);
  // ICER Inputs
  const [icerCostA, setIcerCostA] = useState<number>(200000);
  const [icerCostB, setIcerCostB] = useState<number>(500000);
  const [icerEffectA, setIcerEffectA] = useState<number>(10);
  const [icerEffectB, setIcerEffectB] = useState<number>(16);
  // Consumption Planning Inputs
  const [consAvg, setConsAvg] = useState<number>(3000);
  const [consPeriod, setConsPeriod] = useState<number>(1);
  const [consLeadTime, setConsLeadTime] = useState<number>(0.5);
  const [consBuffer, setConsBuffer] = useState<number>(1500);
  const [consCurrentStock, setConsCurrentStock] = useState<number>(800);
  // Friability Inputs
  const [friaW1, setFriaW1] = useState<number>(6.50);
  const [friaW2, setFriaW2] = useState<number>(6.44);
  // BSA Mosteller Inputs
  const [bsaHeight, setBsaHeight] = useState<number>(120);
  const [bsaWeight, setBsaWeight] = useState<number>(25);
  // CrCl Cockcroft-Gault Inputs
  const [crclAge, setCrclAge] = useState<number>(65);
  const [crclWeight, setCrclWeight] = useState<number>(54);
  const [crclScr, setCrclScr] = useState<number>(1.6);
  const [crclGender, setCrclGender] = useState<'male' | 'female'>('female');
  // Reorder Point (ROP) Inputs
  const [ropLeadTime, setRopLeadTime] = useState<number>(3);
  const [ropDailyUsage, setRopDailyUsage] = useState<number>(30);
  const [ropSafetyStock, setRopSafetyStock] = useState<number>(60);
  // f2 Dissolution Inputs (4 sampling points: 10, 20, 30, 45 min)
  const [f2R1, setF2R1] = useState<number>(45);
  const [f2T1, setF2T1] = useState<number>(42);
  const [f2R2, setF2R2] = useState<number>(70);
  const [f2T2, setF2T2] = useState<number>(66);
  const [f2R3, setF2R3] = useState<number>(85);
  const [f2T3, setF2T3] = useState<number>(81);
  const [f2R4, setF2R4] = useState<number>(95);
  const [f2T4, setF2T4] = useState<number>(93);
  // MACO Cleaning Validation Inputs
  const [macoTddA, setMacoTddA] = useState<number>(500);
  const [macoBatchB, setMacoBatchB] = useState<number>(200);
  const [macoMaxDdB, setMacoMaxDdB] = useState<number>(16);
  const [macoSafetyFactor, setMacoSafetyFactor] = useState<number>(1000);
  // Pediatric Child Dosing Inputs
  const [childAgeYears, setChildAgeYears] = useState<number>(4);
  const [childAgeMonths, setChildAgeMonths] = useState<number>(18);
  const [childWeightKg, setChildWeightKg] = useState<number>(16);
  const [childAdultDose, setChildAdultDose] = useState<number>(500);
  // % Dosis Maksimum FI III Inputs
  const [dmAgeYears, setDmAgeYears] = useState<number>(6);
  const [dm1xAdult, setDm1xAdult] = useState<number>(500);
  const [dmDailyAdult, setDmDailyAdult] = useState<number>(1500);
  const [dm1xPrescription, setDm1xPrescription] = useState<number>(100);
  const [dmDailyPrescription, setDmDailyPrescription] = useState<number>(300);
  // Pengenceran Obat Bertingkat (Triturasi < 50 mg) Inputs
  const [triturDrugNeeded, setTriturDrugNeeded] = useState<number>(15);
  const [triturMinWeigh, setTriturMinWeigh] = useState<number>(50);
  const [triturTotalMix, setTriturTotalMix] = useState<number>(500);
  // Validasi Metode Analisis LOD & LOQ Inputs
  const [lodBlankSd, setLodBlankSd] = useState<number>(0.012);
  const [lodSlope, setLodSlope] = useState<number>(0.045);

  // 4. OSCE State
  const [selectedOsceId, setSelectedOsceId] = useState<string>(OSCE_STATIONS[0]?.id || '');
  const [completedChecklistItems, setCompletedChecklistItems] = useState<Record<string, boolean>>({});

  // 5. Flashcard State
  const [flashcardCategory, setFlashcardCategory] = useState<string>('all');
  const [currentFlashcardIdx, setCurrentFlashcardIdx] = useState<number>(0);
  const [isCardFlipped, setIsCardFlipped] = useState<boolean>(false);
  const [showCardHint, setShowCardHint] = useState<boolean>(false);
  const [masteredCards, setMasteredCards] = useState<Record<string, boolean>>({});

  // Filtered Topics
  const filteredTopics = useMemo(() => {
    return HIGH_YIELD_TOPICS.filter((topic) => {
      const matchExam = selectedExamLevel === 'all' || !topic.targetExam || topic.targetExam === 'all' || topic.targetExam === selectedExamLevel;
      if (!matchExam) return false;
      const matchDomain = selectedDomainFilter === 'all' || topic.domainId === selectedDomainFilter;
      if (!matchDomain) return false;
      if (!topicSearchQuery.trim()) return true;
      const q = topicSearchQuery.toLowerCase();
      return (
        topic.title.toLowerCase().includes(q) ||
        topic.category.toLowerCase().includes(q) ||
        topic.summary.toLowerCase().includes(q) ||
        topic.tags.some(t => t.toLowerCase().includes(q))
      );
    });
  }, [selectedDomainFilter, topicSearchQuery, selectedExamLevel]);

  // Filtered CBT Questions
  const filteredQuestions = useMemo(() => {
    return EXAM_QUESTION_BANK.filter((q) => {
      const matchExam = selectedExamLevel === 'all' || !q.targetExam || q.targetExam === 'all' || q.targetExam === selectedExamLevel;
      if (!matchExam) return false;
      const matchDomain = cbtDomainFilter === 'all' || q.domainId === cbtDomainFilter;
      if (!matchDomain) return false;
      const matchDifficulty = cbtDifficultyFilter === 'all' || q.difficulty === cbtDifficultyFilter;
      if (!matchDifficulty) return false;
      if (!cbtSearchQuery.trim()) return true;
      const term = cbtSearchQuery.toLowerCase();
      return (
        q.vignette.toLowerCase().includes(term) ||
        q.question.toLowerCase().includes(term) ||
        q.explanation.toLowerCase().includes(term) ||
        q.clinicalReference.toLowerCase().includes(term)
      );
    });
  }, [cbtDomainFilter, cbtDifficultyFilter, cbtSearchQuery, selectedExamLevel]);

  const activeQuestion = filteredQuestions[currentQuestionIndex] || filteredQuestions[0];

  // Tryout Score Calculation
  const tryoutScore = useMemo(() => {
    let correctCount = 0;
    filteredQuestions.forEach((q) => {
      if (userAnswers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });
    const percentage = filteredQuestions.length > 0 ? Math.round((correctCount / filteredQuestions.length) * 100) : 0;
    return { correctCount, total: filteredQuestions.length, percentage };
  }, [filteredQuestions, userAnswers]);

  // Active OSCE Station
  const activeOsceStation = useMemo(() => {
    return OSCE_STATIONS.find(s => s.id === selectedOsceId) || OSCE_STATIONS[0];
  }, [selectedOsceId]);

  // OSCE Score
  const osceTotalScore = useMemo(() => {
    if (!activeOsceStation) return 0;
    let earned = 0;
    activeOsceStation.criticalChecklist.forEach((item, idx) => {
      if (completedChecklistItems[`${activeOsceStation.id}-${idx}`]) {
        earned += item.points;
      }
    });
    return earned;
  }, [activeOsceStation, completedChecklistItems]);

  // Filtered Flashcards
  const filteredFlashcards = useMemo(() => {
    return FLASHCARD_DECK.filter((card) => {
      const matchExam = selectedExamLevel === 'all' || !card.targetExam || card.targetExam === 'all' || card.targetExam === selectedExamLevel;
      if (!matchExam) return false;
      if (flashcardCategory === 'all') return true;
      return card.category === flashcardCategory;
    });
  }, [flashcardCategory, selectedExamLevel]);

  const activeCard = filteredFlashcards[currentFlashcardIdx] || filteredFlashcards[0];

  const handleNextCard = () => {
    setIsCardFlipped(false);
    setShowCardHint(false);
    setCurrentFlashcardIdx((prev) => (prev + 1) % filteredFlashcards.length);
  };

  const handlePrevCard = () => {
    setIsCardFlipped(false);
    setShowCardHint(false);
    setCurrentFlashcardIdx((prev) => (prev - 1 + filteredFlashcards.length) % filteredFlashcards.length);
  };

  const handleShuffleCards = () => {
    setIsCardFlipped(false);
    setShowCardHint(false);
    setCurrentFlashcardIdx(Math.floor(Math.random() * filteredFlashcards.length));
  };

  // Timer Effect for Tryout
  React.useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && tryoutTimeLeft > 0 && !isTryoutSubmitted) {
      interval = setInterval(() => {
        setTryoutTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (tryoutTimeLeft === 0 && !isTryoutSubmitted) {
      setIsTryoutSubmitted(true);
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, tryoutTimeLeft, isTryoutSubmitted]);

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6 pb-16 animate-fade-in font-sans">
      {/* Hero Header Section - EMERALD GOLD & DEEP FOREST */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#030e0a] via-[#082218] to-[#0d3626] p-6 sm:p-8 text-white border border-emerald-500/25 shadow-2xl">
        <FloatingPillsBackground density="low" accentColor="#34d399" />
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -right-6 -bottom-6 opacity-10 pointer-events-none hidden sm:block">
          <GraduationCap className="w-64 h-64 text-emerald-400 -rotate-12" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold font-outfit">
              <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
              <span>Modul Resmi Persiapan UKMPPAI &amp; UKTVF Nasional</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-amber-600 text-white flex items-center justify-center shadow-lg shadow-emerald-950/50 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-black font-outfit tracking-tight">
                  Pusat Belajar Uji Kompetensi Farmasi
                </h1>
                <p className="text-xs sm:text-sm text-emerald-100/80 font-medium">
                  Platform akselerasi kelulusan UKMPPAI (CBT &amp; OSCE) dan UKTVF: 4 Blueprint KFN, bank soal kasus, simulasi CBT, dan panduan OSCE.
                </p>
              </div>
            </div>

            {/* Quick Stat Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <div className="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-xs flex items-center gap-1.5 font-bold text-emerald-200">
                <Layers className="w-3.5 h-3.5 text-emerald-400" />
                <span>4 Domain Blueprint KFN</span>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-xs flex items-center gap-1.5 font-bold text-teal-200">
                <BookOpen className="w-3.5 h-3.5 text-teal-400" />
                <span>{HIGH_YIELD_TOPICS.length} Topik High-Yield</span>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-xs flex items-center gap-1.5 font-bold text-amber-200">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>{EXAM_QUESTION_BANK.length} Soal CBT &amp; {OSCE_STATIONS.length} Stase OSCE</span>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-xs flex items-center gap-1.5 font-bold text-cyan-200">
                <BookMarked className="w-3.5 h-3.5 text-cyan-300" />
                <span>{FLASHCARD_DECK.length} Flashcard &amp; {FORMULA_GUIDES.length} Kalkulator</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 relative z-10">
            <div className="bg-slate-950/80 px-4 py-2.5 rounded-2xl border border-emerald-950/60 text-right shadow-md">
              <span className="text-[11px] text-slate-400 block font-medium">Bank Soal &amp; Kasus:</span>
              <span className="text-lg font-black text-emerald-400">{EXAM_QUESTION_BANK.length} Soal Uji CBT</span>
            </div>
          </div>
        </div>
      </div>

      {/* Segmentasi Jenjang Ujian: UKMPPAI vs UKTVK */}
      <div className="bg-white dark:bg-[#0c141d] p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 text-xs font-bold text-slate-700 dark:text-slate-300">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
            <GraduationCap className="w-4 h-4" />
          </div>
          <div>
            <span className="text-slate-900 dark:text-white font-extrabold font-outfit block">Filter Fokus Jenjang Ujian:</span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 font-normal">Pilih materi spesifik Apoteker (UKMPPAI) atau Tenaga Vokasi Kefarmasian (UKTVK D3/D4)</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-1.5 w-full sm:w-auto shrink-0">
          <button
            onClick={() => setSelectedExamLevel('all')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer font-outfit text-center flex items-center justify-center gap-1.5 ${
              selectedExamLevel === 'all'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-500/20'
                : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <span>🌐 Semua</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-black/20 text-white font-mono">{HIGH_YIELD_TOPICS.length}</span>
          </button>
          <button
            onClick={() => setSelectedExamLevel('ukmppai')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer font-outfit text-center flex items-center justify-center gap-1.5 ${
              selectedExamLevel === 'ukmppai'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-500/20'
                : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <span>🎓 UKMPPAI</span>
            <span className="text-[10px] text-slate-300 dark:text-slate-400 font-normal hidden md:inline">(Apoteker)</span>
          </button>
          <button
            onClick={() => setSelectedExamLevel('uktvk')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer font-outfit text-center flex items-center justify-center gap-1.5 ${
              selectedExamLevel === 'uktvk'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-500/20'
                : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <span>🔬 UKTVK</span>
            <span className="text-[10px] text-slate-300 dark:text-slate-400 font-normal hidden md:inline">(D3/D4 TTK)</span>
          </button>
        </div>
      </div>

      {/* Main Subtab Navigation Bar - Royal Emerald Suite */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 custom-scrollbar border-b border-emerald-100 dark:border-emerald-950/80">
        <button
          onClick={() => setActiveMainTab('topics')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all shrink-0 cursor-pointer font-outfit ${
            activeMainTab === 'topics'
              ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-950/40 border border-emerald-400/30 scale-[1.02]'
              : 'text-slate-600 dark:text-slate-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-700 dark:hover:text-emerald-300'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Rangkuman 4 Domain</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/20 text-white font-bold">
            {HIGH_YIELD_TOPICS.length} Topik
          </span>
        </button>

        <button
          onClick={() => setActiveMainTab('cbt')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all shrink-0 cursor-pointer font-outfit ${
            activeMainTab === 'cbt'
              ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-950/40 border border-emerald-400/30 scale-[1.02]'
              : 'text-slate-600 dark:text-slate-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-700 dark:hover:text-emerald-300'
          }`}
        >
          <Trophy className="w-4 h-4" />
          <span>Bank Soal & Tryout CBT</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/20 text-white font-bold">
            Simulasi
          </span>
        </button>

        <button
          onClick={() => setActiveMainTab('calc')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all shrink-0 cursor-pointer font-outfit ${
            activeMainTab === 'calc'
              ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-950/40 border border-emerald-400/30 scale-[1.02]'
              : 'text-slate-600 dark:text-slate-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-700 dark:hover:text-emerald-300'
          }`}
        >
          <Calculator className="w-4 h-4" />
          <span>Kalkulator & Rumus Cepat</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/20 text-white font-bold">
            {FORMULA_GUIDES.length} Rumus
          </span>
        </button>

        <button
          onClick={() => setActiveMainTab('osce')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all shrink-0 cursor-pointer font-outfit ${
            activeMainTab === 'osce'
              ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-950/40 border border-emerald-400/30 scale-[1.02]'
              : 'text-slate-600 dark:text-slate-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-700 dark:hover:text-emerald-300'
          }`}
        >
          <Stethoscope className="w-4 h-4" />
          <span>Panduan Stasi OSCE</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/20 text-white font-bold">
            Praktik
          </span>
        </button>

        <button
          onClick={() => setActiveMainTab('flashcards')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all shrink-0 cursor-pointer font-outfit ${
            activeMainTab === 'flashcards'
              ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-950/40 border border-emerald-400/30 scale-[1.02]'
              : 'text-slate-600 dark:text-slate-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-700 dark:hover:text-emerald-300'
          }`}
        >
          <Zap className="w-4 h-4" />
          <span>Flashcard & Hafalan Cepat</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/20 text-white font-bold">
            {FLASHCARD_DECK.length} Kartu
          </span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* SUBTAB 1: RANGKUMAN 4 DOMAIN HIGH-YIELD                                   */}
      {/* ========================================================================= */}
      {activeMainTab === 'topics' && (
        <div className="space-y-6">
          {/* Domain Blueprint Filter Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <button
              onClick={() => setSelectedDomainFilter('all')}
              className={`p-4 rounded-2xl text-left border transition-all cursor-pointer font-outfit flex flex-col justify-between ${
                selectedDomainFilter === 'all'
                  ? 'bg-emerald-50/80 dark:bg-emerald-950/40 border-emerald-500 shadow-md ring-2 ring-emerald-500/20'
                  : 'bg-white dark:bg-[#0c141d] border-slate-200 dark:border-slate-800 hover:border-slate-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-slate-800 dark:text-white">Semua Domain</span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    100%
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  Kompilasi seluruh materi uji kompetensi 4 domain.
                </p>
              </div>
              <div className="mt-3 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <span>{HIGH_YIELD_TOPICS.length} Materi Inti</span>
                <ChevronRight className="w-3 h-3" />
              </div>
            </button>

            {COMPETENCY_DOMAINS.map((domain) => {
              const isSelected = selectedDomainFilter === domain.id;
              const topicCount = HIGH_YIELD_TOPICS.filter(t => t.domainId === domain.id).length;
              return (
                <button
                  key={domain.id}
                  onClick={() => setSelectedDomainFilter(domain.id)}
                  className={`p-4 rounded-2xl text-left border transition-all cursor-pointer font-outfit flex flex-col justify-between ${
                    isSelected
                      ? 'bg-emerald-50/80 dark:bg-emerald-950/40 border-emerald-500 shadow-md ring-2 ring-emerald-500/20'
                      : 'bg-white dark:bg-[#0c141d] border-slate-200 dark:border-slate-800 hover:border-slate-300'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold text-slate-800 dark:text-white">{domain.shortName}</span>
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${domain.badgeColor}`}>
                        {domain.weightPercentage}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                      {domain.description}
                    </p>
                  </div>
                  <div className="mt-3 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <span>{topicCount} Materi</span>
                    <ChevronRight className="w-3 h-3" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={topicSearchQuery}
              onChange={(e) => setTopicSearchQuery(e.target.value)}
              placeholder="Cari materi ringkas, diagnosis (Hipertensi, DM, TB), rumus, atau regulasi..."
              className="w-full pl-10 pr-4 py-3 bg-white dark:bg-[#0c141d] border border-slate-200 dark:border-slate-800 rounded-2xl text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* High-Yield Topics List */}
          <div className="space-y-4">
            {filteredTopics.map((topic: HighYieldTopic) => {
              const isExpanded = expandedTopicId === topic.id;
              const domainInfo = COMPETENCY_DOMAINS.find(d => d.id === topic.domainId);

              return (
                <div
                  key={topic.id}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c141d] shadow-sm overflow-hidden transition-all duration-200"
                >
                  {/* Topic Card Header */}
                  <div
                    onClick={() => setExpandedTopicId(isExpanded ? null : topic.id)}
                    className="p-4 sm:p-5 flex items-start justify-between gap-4 cursor-pointer hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors"
                  >
                    <div className="space-y-1.5 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${domainInfo?.badgeColor}`}>
                          {domainInfo?.shortName}
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                          {topic.category}
                        </span>
                        {topic.targetExam === 'uktvk' && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-800">
                            🔬 UKTVK
                          </span>
                        )}
                        {topic.targetExam === 'ukmppai' && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-300 dark:border-blue-800">
                            🎓 UKMPPAI
                          </span>
                        )}
                      </div>
                      <h3 className="text-sm sm:text-base font-black text-slate-900 dark:text-white font-outfit">
                        {topic.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                        {topic.summary}
                      </p>
                    </div>

                    <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 shrink-0">
                      {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                    </div>
                  </div>

                  {/* Expanded Content Drawer */}
                  {isExpanded && (
                    <div className="p-4 sm:p-6 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#080d14]/70 space-y-4 animate-fade-in">
                      {/* Key High-Yield Pearls */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs font-black text-emerald-800 dark:text-emerald-300 font-outfit uppercase tracking-wider">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                          <span>Poin Emas Wajib Hafal (High-Yield Pearls):</span>
                        </div>
                        <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/60 space-y-2 text-xs text-slate-800 dark:text-slate-200 font-medium">
                          {topic.keyPearls.map((pearl, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 mt-1.5 shrink-0" />
                              <span className="leading-relaxed">{pearl}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Frequent Exam Pitfalls */}
                      {topic.frequentExamPitfalls.length > 0 && (
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-xs font-black text-amber-800 dark:text-amber-300 font-outfit uppercase tracking-wider">
                            <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                            <span>Jebakan Soal yang Sering Mengecoh (Exam Pitfalls):</span>
                          </div>
                          <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/60 space-y-2 text-xs text-amber-950 dark:text-amber-200 font-medium">
                            {topic.frequentExamPitfalls.map((pitfall, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-600 dark:bg-amber-400 mt-1.5 shrink-0" />
                                <span className="leading-relaxed">{pitfall}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Reference & Quick Link Actions */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-[11px] text-slate-500">
                        <div className="flex items-center gap-1.5">
                          <BookMarked className="w-3.5 h-3.5 text-slate-400" />
                          <span>Standar Rujukan: <strong>{topic.referenceStandard}</strong></span>
                        </div>

                        {onSelectTab && topic.domainId === 'klinis' && (
                          <button
                            onClick={() => onSelectTab('guidelines')}
                            className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold hover:underline cursor-pointer"
                          >
                            <span>Buka PNPK Terkait</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SUBTAB 2: BANK SOAL & SIMULASI TRYOUT CBT                                */}
      {/* ========================================================================= */}
      {activeMainTab === 'cbt' && (
        <div className="space-y-6">
          {/* Top Control Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-[#0c141d] border border-slate-200 dark:border-slate-800 shadow-sm">
            {/* Mode Switcher */}
            <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-800">
              <button
                onClick={() => { setCbtMode('study'); setIsTryoutSubmitted(false); setIsTimerRunning(false); }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer font-outfit ${
                  cbtMode === 'study'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                }`}
              >
                Mode Belajar (Instant Rationale)
              </button>
              <button
                onClick={() => { setCbtMode('tryout'); setIsTimerRunning(true); }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer font-outfit ${
                  cbtMode === 'tryout'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                }`}
              >
                Mode Tryout CBT (Berwaktu)
              </button>
            </div>

            {/* Timer & Domain Filter */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
              {cbtMode === 'tryout' && (
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 text-emerald-400 border border-slate-700 font-mono text-xs font-black">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{formatTimer(tryoutTimeLeft)}</span>
                </div>
              )}

              {/* CBT Search Input */}
              <div className="relative w-full sm:w-44">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Cari topik / obat..."
                  value={cbtSearchQuery}
                  onChange={(e) => {
                    setCbtSearchQuery(e.target.value);
                    setCurrentQuestionIndex(0);
                  }}
                  className="w-full pl-8 pr-3 py-2 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
                />
              </div>

              {/* CBT Difficulty Filter */}
              <select
                value={cbtDifficultyFilter}
                onChange={(e) => {
                  setCbtDifficultyFilter(e.target.value);
                  setCurrentQuestionIndex(0);
                }}
                className="px-3 py-2 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-800 dark:text-white focus:outline-none"
              >
                <option value="all">Semua Tingkat</option>
                <option value="Mudah">Mudah</option>
                <option value="Sedang">Sedang</option>
                <option value="Tinggi">Tinggi</option>
              </select>

              <select
                value={cbtDomainFilter}
                onChange={(e) => {
                  setCbtDomainFilter(e.target.value);
                  setCurrentQuestionIndex(0);
                }}
                className="px-3 py-2 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-800 dark:text-white focus:outline-none"
              >
                <option value="all">Semua Domain ({EXAM_QUESTION_BANK.length} Soal)</option>
                <option value="klinis">Farmasi Klinis</option>
                <option value="manajemen">Manajemen & Hukum</option>
                <option value="teknologi">Teknologi & CPOB</option>
                <option value="bahan_alam">Bahan Alam</option>
              </select>
            </div>
          </div>

          {/* Question Number Matrix Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 custom-scrollbar">
            {filteredQuestions.map((q, idx) => {
              const isCurrent = idx === currentQuestionIndex;
              const isAnswered = Boolean(userAnswers[q.id]);
              const isFlagged = Boolean(flaggedQuestions[q.id]);

              let buttonStyle = 'bg-white dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300';
              if (isAnswered) buttonStyle = 'bg-emerald-100 dark:bg-emerald-950/60 border-emerald-400 text-emerald-800 dark:text-emerald-300';
              if (isCurrent) buttonStyle = 'bg-emerald-600 text-white border-emerald-600 ring-2 ring-emerald-500/30';

              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentQuestionIndex(idx)}
                  className={`w-9 h-9 rounded-xl border text-xs font-black font-outfit shrink-0 transition-all flex items-center justify-center relative cursor-pointer ${buttonStyle}`}
                >
                  <span>{idx + 1}</span>
                  {isFlagged && (
                    <span className="w-2 h-2 rounded-full bg-amber-500 absolute top-1 right-1" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Question Display Card */}
          {activeQuestion && (
            <div className="p-6 rounded-3xl bg-white dark:bg-[#0c141d] border border-slate-200 dark:border-slate-800 shadow-lg space-y-6">
              {/* Question Header */}
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black font-outfit text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-1 rounded-lg border border-emerald-200 dark:border-emerald-800/60">
                    Soal No. {currentQuestionIndex + 1} dari {filteredQuestions.length}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    Tingkat: {activeQuestion.difficulty}
                  </span>
                  {activeQuestion.targetExam === 'uktvk' && (
                    <span className="text-[10px] font-bold px-2 py-1 rounded bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-800">
                      🔬 Target: UKTVK (Vokasi TTK)
                    </span>
                  )}
                  {activeQuestion.targetExam === 'ukmppai' && (
                    <span className="text-[10px] font-bold px-2 py-1 rounded bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-300 dark:border-blue-800">
                      🎓 Target: UKMPPAI (Apoteker)
                    </span>
                  )}
                </div>

                <button
                  onClick={() => {
                    setFlaggedQuestions(prev => ({ ...prev, [activeQuestion.id]: !prev[activeQuestion.id] }));
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                    flaggedQuestions[activeQuestion.id]
                      ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white'
                  }`}
                >
                  <Flag className="w-3.5 h-3.5" />
                  <span>{flaggedQuestions[activeQuestion.id] ? 'Ragu-ragu (Ditandai)' : 'Tandai Ragu'}</span>
                </button>
              </div>

              {/* Case Vignette */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                {activeQuestion.vignette}
              </div>

              {/* Core Question */}
              <p className="text-xs sm:text-sm font-black text-slate-900 dark:text-white font-outfit">
                {activeQuestion.question}
              </p>

              {/* Options A - E */}
              <div className="space-y-2.5">
                {activeQuestion.options.map((opt) => {
                  const isSelected = userAnswers[activeQuestion.id] === opt.key;
                  const isCorrect = activeQuestion.correctAnswer === opt.key;
                  const showAnswerValidation = cbtMode === 'study' && isSelected;

                  let optionStyle = 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900';
                  if (isSelected) {
                    optionStyle = 'border-emerald-500 bg-emerald-50/60 dark:bg-emerald-950/40 ring-2 ring-emerald-500/20';
                  }

                  if (showAnswerValidation) {
                    if (isCorrect) {
                      optionStyle = 'border-emerald-500 bg-emerald-100/60 dark:bg-emerald-950/60 text-emerald-950 dark:text-emerald-200 font-bold';
                    } else {
                      optionStyle = 'border-rose-500 bg-rose-50/60 dark:bg-rose-950/40 text-rose-950 dark:text-rose-200';
                    }
                  }

                  return (
                    <button
                      key={opt.key}
                      onClick={() => {
                        setUserAnswers(prev => ({ ...prev, [activeQuestion.id]: opt.key }));
                      }}
                      className={`w-full p-3.5 sm:p-4 rounded-2xl border text-left flex items-center gap-3 transition-all cursor-pointer ${optionStyle}`}
                    >
                      <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs font-outfit shrink-0 ${
                        isSelected 
                          ? 'bg-emerald-600 text-white' 
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                      }`}>
                        {opt.key}
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 flex-1">
                        {opt.text}
                      </span>
                      {showAnswerValidation && isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      )}
                      {showAnswerValidation && !isCorrect && (
                        <X className="w-5 h-5 text-rose-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Study Mode: Instant Rational Explanation */}
              {cbtMode === 'study' && userAnswers[activeQuestion.id] && (
                <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800/80 space-y-2.5 animate-fade-in">
                  <div className="flex items-center gap-2 text-xs font-black text-emerald-900 dark:text-emerald-300 font-outfit">
                    <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Pembahasan Rasional Kunci Jawaban: {activeQuestion.correctAnswer}</span>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium whitespace-pre-line">
                    {activeQuestion.explanation}
                  </p>
                  <div className="text-[11px] text-emerald-800 dark:text-emerald-400 font-semibold pt-1">
                    📖 Referensi: {activeQuestion.clinicalReference}
                  </div>
                </div>
              )}

              {/* Navigation Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  disabled={currentQuestionIndex === 0}
                  onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 disabled:opacity-40 cursor-pointer"
                >
                  Sebelumnya
                </button>

                {currentQuestionIndex < filteredQuestions.length - 1 ? (
                  <button
                    onClick={() => setCurrentQuestionIndex(prev => Math.min(filteredQuestions.length - 1, prev + 1))}
                    className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md cursor-pointer"
                  >
                    Selanjutnya
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setIsTryoutSubmitted(true);
                      setIsTimerRunning(false);
                    }}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-black shadow-lg cursor-pointer font-outfit"
                  >
                    Selesai & Kumpulkan Ujian
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Empty Search / Filter State */}
          {filteredQuestions.length === 0 && (
            <div className="p-12 text-center rounded-3xl bg-white dark:bg-[#0c141d] border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
              <AlertTriangle className="w-10 h-10 text-amber-500 mx-auto" />
              <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">Tidak Ada Soal yang Cocok</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                Tidak ditemukan soal dengan filter domain &ldquo;{cbtDomainFilter}&rdquo;{cbtSearchQuery ? ` atau kata kunci "${cbtSearchQuery}"` : ''}. Coba ubah kata kunci pencarian atau reset filter.
              </p>
              <button
                onClick={() => {
                  setCbtDomainFilter('all');
                  setCbtDifficultyFilter('all');
                  setCbtSearchQuery('');
                  setCurrentQuestionIndex(0);
                }}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all cursor-pointer shadow-md"
              >
                Reset Semua Filter
              </button>
            </div>
          )}

          {/* Tryout Result Modal / Score Card */}
          {isTryoutSubmitted && (
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950 text-white border border-emerald-500/40 shadow-2xl space-y-5 animate-fade-in">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Trophy className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-black font-outfit">Hasil Rekapitulasi Tryout CBT</h3>
                  <p className="text-xs text-slate-300">Evaluasi skor ketuntasan uji kompetensi Anda.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <span className="text-xs text-slate-400 font-bold">Skor Kelulusan</span>
                  <p className="text-3xl font-black font-outfit text-emerald-400 mt-1">{tryoutScore.percentage}%</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <span className="text-xs text-slate-400 font-bold">Jawaban Benar</span>
                  <p className="text-3xl font-black font-outfit text-white mt-1">{tryoutScore.correctCount} / {tryoutScore.total}</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <span className="text-xs text-slate-400 font-bold">Status Prediksi</span>
                  <p className={`text-xl font-black font-outfit mt-2 ${tryoutScore.percentage >= 65 ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {tryoutScore.percentage >= 65 ? 'LULUS (KOMPETEN)' : 'PERLU DRILLING'}
                  </p>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  onClick={() => {
                    setIsTryoutSubmitted(false);
                    setUserAnswers({});
                    setFlaggedQuestions({});
                    setTryoutTimeLeft(15 * 60);
                    setIsTimerRunning(true);
                  }}
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition cursor-pointer"
                >
                  Ulangi Tryout
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* SUBTAB 3: KALKULATOR & RUMUS CEPAT HITUNGAN UKMPPAI                     */}
      {/* ========================================================================= */}
      {activeMainTab === 'calc' && (
        <div className="space-y-6">
          {/* Category Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {[
              { id: 'alligation', label: 'Aligasi Silang', icon: FlaskConical },
              { id: 'hlb', label: 'HLB Campuran', icon: Layers },
              { id: 'tonicity', label: 'Tonisitas E-NaCl', icon: Sparkles },
              { id: 'pk', label: 'Farmakokinetika (LD/MD)', icon: Calculator },
              { id: 'crcl', label: 'Klirens Kreatinin (CrCl)', icon: Stethoscope },
              { id: 'hja', label: 'HJA, Margin & PPN', icon: Briefcase },
              { id: 'icer', label: 'Farmakoekonomi (ICER)', icon: TrendingUp },
              { id: 'consumption', label: 'Metode Konsumsi', icon: ClipboardList },
              { id: 'rop', label: 'Reorder Point (ROP)', icon: RotateCcw },
              { id: 'friability', label: 'Kerapuhan Tablet (%)', icon: Zap },
              { id: 'bsa', label: 'BSA Mosteller (m²)', icon: BarChart3 },
              { id: 'f2_dissolution', label: 'Disolusi Terbanding (f2)', icon: FlaskConical },
              { id: 'maco_cleaning', label: 'Validasi MACO CPOB', icon: ShieldCheck },
              { id: 'child_dosing', label: 'Konversi Dosis Anak', icon: Baby },
              { id: 'max_dose_fi3', label: '% Dosis Maksimum FI', icon: Calculator },
              { id: 'trituration_dilution', label: 'Pengenceran < 50mg', icon: Layers },
              { id: 'lod_loq_validation', label: 'Batas LOD & LOQ', icon: BarChart3 }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCalcCategory(cat.id)}
                className={`p-3 rounded-2xl border text-center font-outfit text-xs font-bold transition-all cursor-pointer flex flex-col items-center justify-center gap-1.5 ${
                  selectedCalcCategory === cat.id
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-500/20'
                    : 'bg-white dark:bg-[#0c141d] border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                }`}
              >
                <cat.icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Interactive Calculator Box */}
          <div className="p-6 rounded-3xl bg-white dark:bg-[#0c141d] border border-slate-200 dark:border-slate-800 shadow-lg space-y-6">
            {/* 1. Aligasi Calculator */}
            {selectedCalcCategory === 'alligation' && (
              <div className="space-y-5">
                <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                  <h3 className="text-base font-black text-slate-900 dark:text-white font-outfit">
                    Kalkulator Aligasi Silang (Pengenceran Multi-Konsentrasi)
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Menghitung proporsi volume/bobot sediaan pekat dan encer untuk menghasilkan konsentrasi target.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs font-bold">
                  <div>
                    <label className="text-slate-600 dark:text-slate-400 mb-1 block">Konsentrasi Tinggi (%)</label>
                    <input
                      type="number"
                      value={alliHigh}
                      onChange={(e) => setAlliHigh(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="text-slate-600 dark:text-slate-400 mb-1 block">Konsentrasi Rendah (%)</label>
                    <input
                      type="number"
                      value={alliLow}
                      onChange={(e) => setAlliLow(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="text-slate-600 dark:text-slate-400 mb-1 block">Konsentrasi Target (%)</label>
                    <input
                      type="number"
                      value={alliTarget}
                      onChange={(e) => setAlliTarget(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="text-slate-600 dark:text-slate-400 mb-1 block">Volume Target (mL)</label>
                    <input
                      type="number"
                      value={alliVol}
                      onChange={(e) => setAlliVol(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                </div>

                {/* Calculation Output */}
                {(() => {
                  const partHigh = Math.abs(alliTarget - alliLow);
                  const partLow = Math.abs(alliHigh - alliTarget);
                  const totalParts = partHigh + partLow;
                  const volHigh = totalParts > 0 ? (partHigh / totalParts) * alliVol : 0;
                  const volLow = totalParts > 0 ? (partLow / totalParts) * alliVol : 0;

                  return (
                    <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-xs space-y-2 font-medium text-emerald-950 dark:text-emerald-200">
                      <div className="font-bold text-emerald-900 dark:text-emerald-300">Hasil Perhitungan Aligasi:</div>
                      <div>• Bagian Sediaan Tinggi ({alliHigh}%): <strong>{partHigh} bagian</strong> &rarr; Butuh <strong>{volHigh.toFixed(2)} mL</strong></div>
                      <div>• Bagian Sediaan Rendah ({alliLow}%): <strong>{partLow} bagian</strong> &rarr; Butuh <strong>{volLow.toFixed(2)} mL</strong></div>
                      <div>• Total Volume Akhir: <strong>{alliVol} mL ({alliTarget}%)</strong></div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* 2. HLB Calculator */}
            {selectedCalcCategory === 'hlb' && (
              <div className="space-y-5">
                <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                  <h3 className="text-base font-black text-slate-900 dark:text-white font-outfit">
                    Kalkulator HLB Campuran Emulgator
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Menghitung bobot masing-masing surfaktan (misal: Tween 80 & Span 80) untuk mencapai nilai RHLB emulsi.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs font-bold">
                  <div>
                    <label className="text-slate-600 dark:text-slate-400 mb-1 block">RHLB Target</label>
                    <input
                      type="number"
                      step="0.1"
                      value={hlbTarget}
                      onChange={(e) => setHlbTarget(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="text-slate-600 dark:text-slate-400 mb-1 block">HLB Surfaktan A (Tinggi)</label>
                    <input
                      type="number"
                      step="0.1"
                      value={hlbA}
                      onChange={(e) => setHlbA(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="text-slate-600 dark:text-slate-400 mb-1 block">HLB Surfaktan B (Rendah)</label>
                    <input
                      type="number"
                      step="0.1"
                      value={hlbB}
                      onChange={(e) => setHlbB(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="text-slate-600 dark:text-slate-400 mb-1 block">Total Bobot Emulgator (gram)</label>
                    <input
                      type="number"
                      value={hlbTotalWeight}
                      onChange={(e) => setHlbTotalWeight(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                </div>

                {(() => {
                  const denom = hlbA - hlbB;
                  const weightA = denom !== 0 ? ((hlbTarget - hlbB) / denom) * hlbTotalWeight : 0;
                  const weightB = hlbTotalWeight - weightA;

                  return (
                    <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-xs space-y-2 font-medium text-emerald-950 dark:text-emerald-200">
                      <div className="font-bold text-emerald-900 dark:text-emerald-300">Hasil Penimbangan Emulgator:</div>
                      <div>• Surfaktan A (HLB {hlbA}): <strong>{weightA.toFixed(2)} gram</strong> ({((weightA/hlbTotalWeight)*100).toFixed(1)}%)</div>
                      <div>• Surfaktan B (HLB {hlbB}): <strong>{weightB.toFixed(2)} gram</strong> ({((weightB/hlbTotalWeight)*100).toFixed(1)}%)</div>
                      <div>• Total Campuran: <strong>{hlbTotalWeight} gram (RHLB {hlbTarget})</strong></div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* 3. Tonicity Calculator */}
            {selectedCalcCategory === 'tonicity' && (
              <div className="space-y-5">
                <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                  <h3 className="text-base font-black text-slate-900 dark:text-white font-outfit">
                    Kalkulator Tonisitas & Ekivalensi NaCl (Metode E-NaCl)
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Menghitung kekurangan bobot NaCl murni agar sediaan tetes mata atau injeksi mencapai kondisi isotonis (setara NaCl 0,9%).
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-bold">
                  <div>
                    <label className="text-slate-600 dark:text-slate-400 mb-1 block">Volume Sediaan (mL)</label>
                    <input
                      type="number"
                      value={tonicVol}
                      onChange={(e) => setTonicVol(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="text-slate-600 dark:text-slate-400 mb-1 block">Bobot Zat Aktif (gram)</label>
                    <input
                      type="number"
                      step="0.01"
                      value={tonicDrugWeight}
                      onChange={(e) => setTonicDrugWeight(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="text-slate-600 dark:text-slate-400 mb-1 block">Nilai Ekivalensi NaCl (E)</label>
                    <input
                      type="number"
                      step="0.01"
                      value={tonicEVal}
                      onChange={(e) => setTonicEVal(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                </div>

                {(() => {
                  const reqNacl = (0.9 / 100) * tonicVol;
                  const suppliedNacl = tonicDrugWeight * tonicEVal;
                  const deficit = Math.max(0, reqNacl - suppliedNacl).toFixed(3);

                  return (
                    <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-xs space-y-2 font-medium text-emerald-950 dark:text-emerald-200">
                      <div className="font-bold text-emerald-900 dark:text-emerald-300">Hasil Perhitungan Isotonisitas:</div>
                      <div>• Kebutuhan NaCl isotonis murni: <strong>{reqNacl.toFixed(3)} gram</strong></div>
                      <div>• Tonisitas dari zat aktif: <strong>{suppliedNacl.toFixed(3)} gram setara NaCl</strong></div>
                      <div>• <strong>Kekurangan NaCl yang wajib ditambahkan: {deficit} gram</strong></div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* 4. PK Calculator */}
            {selectedCalcCategory === 'pk' && (
              <div className="space-y-5">
                <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                  <h3 className="text-base font-black text-slate-900 dark:text-white font-outfit">
                    Kalkulator Farmakokinetika Klinis (Loading Dose, Maintenance Dose, t1/2)
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Menghitung dosis muatan awal dan laju infus pemeliharaan obat indeks terapi sempit.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-bold">
                  <div>
                    <label className="text-slate-600 dark:text-slate-400 mb-1 block">Target Kadar Tunak Css (mg/L)</label>
                    <input
                      type="number"
                      value={pkCss}
                      onChange={(e) => setPkCss(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="text-slate-600 dark:text-slate-400 mb-1 block">Volume Distribusi Vd (Liter)</label>
                    <input
                      type="number"
                      value={pkVd}
                      onChange={(e) => setPkVd(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="text-slate-600 dark:text-slate-400 mb-1 block">Klirens Total Cl (L/jam)</label>
                    <input
                      type="number"
                      step="0.1"
                      value={pkCl}
                      onChange={(e) => setPkCl(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                </div>

                {(() => {
                  const ld = (pkCss * pkVd).toFixed(1);
                  const md = (pkCss * pkCl).toFixed(1);
                  const kel = pkVd > 0 ? (pkCl / pkVd) : 0;
                  const tHalf = kel > 0 ? (0.693 / kel).toFixed(2) : '0';

                  return (
                    <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-xs space-y-2 font-medium text-emerald-950 dark:text-emerald-200">
                      <div className="font-bold text-emerald-900 dark:text-emerald-300">Hasil Perhitungan Farmakokinetika:</div>
                      <div>• Loading Dose (LD): <strong>{ld} mg</strong> (IV Bolus Awal)</div>
                      <div>• Maintenance Dose (MD): <strong>{md} mg / jam</strong> (Laju Infus Kontinu)</div>
                      <div>• Konstanta Eliminasi (Kel): <strong>{kel.toFixed(4)} jam⁻¹</strong></div>
                      <div>• Waktu Paruh Eliminasi (t½): <strong>{tHalf} jam</strong></div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* 5. HJA Calculator */}
            {selectedCalcCategory === 'hja' && (
              <div className="space-y-5">
                <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                  <h3 className="text-base font-black text-slate-900 dark:text-white font-outfit">
                    Kalkulator HJA, Margin & Pajak PPN Apotek
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Menghitung harga jual apotek berdasarkan harga netto beli PBF, PPN, dan target margin.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-bold">
                  <div>
                    <label className="text-slate-600 dark:text-slate-400 mb-1 block">Harga Netto Beli PBF (Rp)</label>
                    <input
                      type="number"
                      step="1000"
                      value={hjaHpp}
                      onChange={(e) => setHjaHpp(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="text-slate-600 dark:text-slate-400 mb-1 block">Tarif PPN (%)</label>
                    <input
                      type="number"
                      value={hjaPpnRate}
                      onChange={(e) => setHjaPpnRate(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="text-slate-600 dark:text-slate-400 mb-1 block">Target Margin dari HJA (%)</label>
                    <input
                      type="number"
                      value={hjaMarginPercent}
                      onChange={(e) => setHjaMarginPercent(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                </div>

                {(() => {
                  const hppWithPpn = hjaHpp * (1 + (hjaPpnRate / 100));
                  const marginFrac = hjaMarginPercent / 100;
                  const hjaFinal = marginFrac < 1 ? (hppWithPpn / (1 - marginFrac)) : 0;
                  const grossProfit = hjaFinal - hppWithPpn;

                  return (
                    <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-xs space-y-2 font-medium text-emerald-950 dark:text-emerald-200">
                      <div className="font-bold text-emerald-900 dark:text-emerald-300">Hasil Penentuan Harga Jual Apotek:</div>
                      <div>• HPP Termasuk PPN: <strong>Rp {Math.round(hppWithPpn).toLocaleString('id-ID')}</strong></div>
                      <div>• <strong>Harga Jual Apotek (HJA): Rp {Math.round(hjaFinal).toLocaleString('id-ID')}</strong></div>
                      <div>• Laba Kotor per Unit: <strong>Rp {Math.round(grossProfit).toLocaleString('id-ID')}</strong></div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* 6. ICER Calculator */}
            {selectedCalcCategory === 'icer' && (
              <div className="space-y-5">
                <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                  <h3 className="text-base font-black text-slate-900 dark:text-white font-outfit">
                    Kalkulator Farmakoekonomi (ICER - Incremental Cost-Effectiveness Ratio)
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Menghitung rasio penambahan biaya yang dibutuhkan untuk menghasilkan setiap satu unit peningkatan efektivitas klinis baru.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-bold">
                  <div>
                    <label className="text-slate-600 dark:text-slate-400 mb-1 block">Biaya Terapi A (Rp)</label>
                    <input
                      type="number"
                      step="10000"
                      value={icerCostA}
                      onChange={(e) => setIcerCostA(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="text-slate-600 dark:text-slate-400 mb-1 block">Efektivitas Terapi A</label>
                    <input
                      type="number"
                      step="0.1"
                      value={icerEffectA}
                      onChange={(e) => setIcerEffectA(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="text-slate-600 dark:text-slate-400 mb-1 block">Biaya Terapi B (Rp)</label>
                    <input
                      type="number"
                      step="10000"
                      value={icerCostB}
                      onChange={(e) => setIcerCostB(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="text-slate-600 dark:text-slate-400 mb-1 block">Efektivitas Terapi B</label>
                    <input
                      type="number"
                      step="0.1"
                      value={icerEffectB}
                      onChange={(e) => setIcerEffectB(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                </div>

                {(() => {
                  const deltaCost = icerCostB - icerCostA;
                  const deltaEffect = icerEffectB - icerEffectA;
                  const icerValue = deltaEffect !== 0 ? (deltaCost / deltaEffect) : 0;

                  return (
                    <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-xs space-y-2 font-medium text-emerald-950 dark:text-emerald-200">
                      <div className="font-bold text-emerald-900 dark:text-emerald-300">Hasil Evaluasi Farmakoekonomi:</div>
                      <div>• Selisih Biaya (ΔC): <strong>Rp {deltaCost.toLocaleString('id-ID')}</strong></div>
                      <div>• Selisih Efektivitas (ΔE): <strong>{deltaEffect.toFixed(2)} unit</strong></div>
                      <div>• <strong>Nilai ICER: Rp {Math.round(icerValue).toLocaleString('id-ID')} per tambahan unit efektivitas</strong></div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        *Pedoman Kemenkes RI: Terapi dinilai <em>Cost-Effective</em> jika ICER &lt; 1-3x PDB per kapita Indonesia (~Rp 75-225 juta).
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* 7. Consumption Planning Calculator */}
            {selectedCalcCategory === 'consumption' && (
              <div className="space-y-5">
                <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                  <h3 className="text-base font-black text-slate-900 dark:text-white font-outfit">
                    Kalkulator Perencanaan Pengadaan: Metode Konsumsi
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Menghitung kuantitas riil obat yang harus dipesan dengan mempertimbangkan rata-rata konsumsi, waktu tunggu PBF, safety stock, dan sisa persediaan.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-xs font-bold">
                  <div>
                    <label className="text-slate-600 dark:text-slate-400 mb-1 block">Pemakaian Rerata/Bulan</label>
                    <input
                      type="number"
                      value={consAvg}
                      onChange={(e) => setConsAvg(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="text-slate-600 dark:text-slate-400 mb-1 block">Periode Rencana (Bulan)</label>
                    <input
                      type="number"
                      value={consPeriod}
                      onChange={(e) => setConsPeriod(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="text-slate-600 dark:text-slate-400 mb-1 block">Lead Time PBF (Bulan)</label>
                    <input
                      type="number"
                      step="0.1"
                      value={consLeadTime}
                      onChange={(e) => setConsLeadTime(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="text-slate-600 dark:text-slate-400 mb-1 block">Safety Stock (Unit)</label>
                    <input
                      type="number"
                      value={consBuffer}
                      onChange={(e) => setConsBuffer(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="text-slate-600 dark:text-slate-400 mb-1 block">Sisa Stok Gudang (Unit)</label>
                    <input
                      type="number"
                      value={consCurrentStock}
                      onChange={(e) => setConsCurrentStock(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                </div>

                {(() => {
                  const periodNeed = consAvg * consPeriod;
                  const leadTimeNeed = consAvg * consLeadTime;
                  const totalNeed = periodNeed + leadTimeNeed + consBuffer;
                  const orderQuantity = Math.max(0, totalNeed - consCurrentStock);

                  return (
                    <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-xs space-y-2 font-medium text-emerald-950 dark:text-emerald-200">
                      <div className="font-bold text-emerald-900 dark:text-emerald-300">Hasil Rencana Pengadaan (SP):</div>
                      <div>• Kebutuhan Selama Periode ({consPeriod} bln): <strong>{periodNeed.toLocaleString('id-ID')} unit</strong></div>
                      <div>• Kebutuhan Lead Time ({consLeadTime} bln): <strong>{leadTimeNeed.toLocaleString('id-ID')} unit</strong></div>
                      <div>• Safety Stock: <strong>{consBuffer.toLocaleString('id-ID')} unit</strong></div>
                      <div>• Total Estimasi Kebutuhan: <strong>{totalNeed.toLocaleString('id-ID')} unit</strong></div>
                      <div>• <strong>Kuantitas Pengadaan Riil yang Dipesan: {orderQuantity.toLocaleString('id-ID')} unit</strong></div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* 8. Friability Calculator */}
            {selectedCalcCategory === 'friability' && (
              <div className="space-y-5">
                <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                  <h3 className="text-base font-black text-slate-900 dark:text-white font-outfit">
                    Kalkulator Uji Kerapuhan Tablet (Friability Test)
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Menguji persentase bobot tablet yang tergerus setelah pemutaran 100 putaran pada alat friabilator (Syarat FI VI: &lt; 1,0%).
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-bold">
                  <div>
                    <label className="text-slate-600 dark:text-slate-400 mb-1 block">Bobot Awal Tablet (W1) dalam gram</label>
                    <input
                      type="number"
                      step="0.01"
                      value={friaW1}
                      onChange={(e) => setFriaW1(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="text-slate-600 dark:text-slate-400 mb-1 block">Bobot Akhir Tablet (W2) dalam gram</label>
                    <input
                      type="number"
                      step="0.01"
                      value={friaW2}
                      onChange={(e) => setFriaW2(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                </div>

                {(() => {
                  const weightLoss = friaW1 - friaW2;
                  const friabilityPercent = friaW1 > 0 ? (weightLoss / friaW1) * 100 : 0;
                  const isPassed = friabilityPercent < 1.0 && friabilityPercent >= 0;

                  return (
                    <div className={`p-4 rounded-2xl border text-xs space-y-2 font-medium ${
                      isPassed
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200'
                        : 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 text-rose-950 dark:text-rose-200'
                    }`}>
                      <div className="font-bold">Hasil Uji Kerapuhan:</div>
                      <div>• Selisih Bobot Hilang: <strong>{weightLoss.toFixed(3)} gram</strong></div>
                      <div>• <strong>Persentase Kerapuhan (% F): {friabilityPercent.toFixed(3)}%</strong></div>
                      <div className="flex items-center gap-1.5 font-bold">
                        <span>Status Kelulusan Farmakope:</span>
                        <span className={`px-2 py-0.5 rounded text-[11px] text-white ${isPassed ? 'bg-emerald-600' : 'bg-rose-600'}`}>
                          {isPassed ? 'LULUS (Memenuhi Syarat < 1,0%)' : 'TIDAK LULUS (Kerapuhan >= 1,0%)'}
                        </span>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* 9. BSA Mosteller Calculator */}
            {selectedCalcCategory === 'bsa' && (
              <div className="space-y-5">
                <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                  <h3 className="text-base font-black text-slate-900 dark:text-white font-outfit">
                    Kalkulator Luas Permukaan Tubuh (BSA Mosteller)
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Menghitung Body Surface Area (BSA) untuk penentuan dosis pediatrik, kemoterapi sitostatika, dan obat dengan indeks terapi sempit.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-bold">
                  <div>
                    <label className="text-slate-600 dark:text-slate-400 mb-1 block">Tinggi Badan (cm)</label>
                    <input
                      type="number"
                      value={bsaHeight}
                      onChange={(e) => setBsaHeight(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="text-slate-600 dark:text-slate-400 mb-1 block">Berat Badan (kg)</label>
                    <input
                      type="number"
                      value={bsaWeight}
                      onChange={(e) => setBsaWeight(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                </div>

                {(() => {
                  const bsaVal = Math.sqrt((bsaHeight * bsaWeight) / 3600);

                  return (
                    <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-xs space-y-2 font-medium text-emerald-950 dark:text-emerald-200">
                      <div className="font-bold text-emerald-900 dark:text-emerald-300">Hasil Perhitungan BSA:</div>
                      <div>• Tinggi: <strong>{bsaHeight} cm</strong> | Berat: <strong>{bsaWeight} kg</strong></div>
                      <div>• <strong>Nilai BSA (Mosteller): {bsaVal.toFixed(3)} m²</strong></div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        *Rumus Dosis Anak = (BSA Pasien / 1,73 m²) x Dosis Dewasa Standar.
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* 10. CrCl Cockcroft-Gault Calculator */}
            {selectedCalcCategory === 'crcl' && (
              <div className="space-y-5">
                <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                  <h3 className="text-base font-black text-slate-900 dark:text-white font-outfit">
                    Kalkulator Klirens Kreatinin (Cockcroft-Gault) & Penyesuaian Dosis Ginjal
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Estimasi Klirens Kreatinin (CrCl) berbasis usia, berat badan, serum kreatinin, dan jenis kelamin.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-semibold">
                  <div>
                    <label className="block text-slate-600 dark:text-slate-300 mb-1">Usia Pasien (Tahun):</label>
                    <input
                      type="number"
                      value={crclAge}
                      onChange={(e) => setCrclAge(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 dark:text-slate-300 mb-1">Berat Badan (kg):</label>
                    <input
                      type="number"
                      value={crclWeight}
                      onChange={(e) => setCrclWeight(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 dark:text-slate-300 mb-1">Serum Kreatinin (mg/dL):</label>
                    <input
                      type="number"
                      step="0.1"
                      value={crclScr}
                      onChange={(e) => setCrclScr(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 dark:text-slate-300 mb-1">Jenis Kelamin:</label>
                    <select
                      value={crclGender}
                      onChange={(e) => setCrclGender(e.target.value as 'male' | 'female')}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    >
                      <option value="male">Laki-laki (Faktor = 1,00)</option>
                      <option value="female">Perempuan (Faktor = 0,85)</option>
                    </select>
                  </div>
                </div>

                {(() => {
                  const baseCrCl = crclScr > 0 ? ((140 - crclAge) * crclWeight) / (72 * crclScr) : 0;
                  const finalCrCl = crclGender === 'female' ? baseCrCl * 0.85 : baseCrCl;
                  
                  let stageText = 'Normal / Minimal (Stage 1)';
                  let stageColor = 'text-emerald-600 dark:text-emerald-400';
                  let recText = 'Dosis obat standar normal. Pantau fungsi ginjal berkala.';

                  if (finalCrCl < 15) {
                    stageText = 'Gagal Ginjal Terminal / End-Stage (Stage 5)';
                    stageColor = 'text-rose-600 dark:text-rose-400';
                    recText = 'Dosis obat harus diturunkan drastis (75-80%) atau interval diperpanjang. Hentikan obat nefrotoksik & Metformin.';
                  } else if (finalCrCl < 30) {
                    stageText = 'Gangguan Ginjal Berat (Stage 4)';
                    stageColor = 'text-orange-600 dark:text-orange-400';
                    recText = 'KONTRAINDIKASI Metformin (risiko Asidosis Laktat). Dosis antibiotik (Cefepime, Meropenem) diturunkan 50%.';
                  } else if (finalCrCl < 60) {
                    stageText = 'Gangguan Ginjal Sedang (Stage 3)';
                    stageColor = 'text-amber-600 dark:text-amber-400';
                    recText = 'Pertimbangkan penyesuaian dosis obat dengan eliminasi ginjal tinggi. Metformin maksimal 1000 mg/hari jika eGFR 30-44.';
                  } else if (finalCrCl < 90) {
                    stageText = 'Gangguan Ginjal Ringan (Stage 2)';
                    stageColor = 'text-teal-600 dark:text-teal-400';
                    recText = 'Fungsi ginjal sedikit menurun, umumnya dosis obat standar masih dapat ditoleransi.';
                  }

                  return (
                    <div className="p-4 rounded-2xl bg-teal-50 dark:bg-teal-950/40 border border-teal-300 dark:border-teal-800 text-xs space-y-2 font-medium text-teal-950 dark:text-teal-200">
                      <div className="font-bold text-teal-900 dark:text-teal-300 text-sm">Hasil Estimasi Klirens Kreatinin (CrCl):</div>
                      <div className="text-base font-black font-outfit text-teal-700 dark:text-teal-300">
                        CrCl = {finalCrCl > 0 ? finalCrCl.toFixed(2) : 0} mL/min
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-teal-200/60 dark:border-teal-800/60">
                        <div>
                          • Klasifikasi Fungsi: <strong className={stageColor}>{stageText}</strong>
                        </div>
                        <div>
                          • Jenis Kelamin: <strong>{crclGender === 'female' ? 'Perempuan (x 0,85)' : 'Laki-laki (x 1,00)'}</strong>
                        </div>
                      </div>
                      <div className="text-[11px] text-slate-600 dark:text-slate-300 pt-1">
                        <strong>Rekomendasi Farmasi Klinis:</strong> {recText}
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* 11. Reorder Point (ROP) Calculator */}
            {selectedCalcCategory === 'rop' && (
              <div className="space-y-5">
                <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                  <h3 className="text-base font-black text-slate-900 dark:text-white font-outfit">
                    Kalkulator Titik Pemesanan Kembali (Reorder Point / ROP)
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Kalkulasi batas kuantitas minimum untuk menerbitkan Surat Pesanan (SP) baru ke distributor PBF.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-semibold">
                  <div>
                    <label className="block text-slate-600 dark:text-slate-300 mb-1">Waktu Tunggu / Lead Time (Hari):</label>
                    <input
                      type="number"
                      value={ropLeadTime}
                      onChange={(e) => setRopLeadTime(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 dark:text-slate-300 mb-1">Rata-Rata Pemakaian Harian (Unit/Hari):</label>
                    <input
                      type="number"
                      value={ropDailyUsage}
                      onChange={(e) => setRopDailyUsage(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 dark:text-slate-300 mb-1">Stok Pengaman / Safety Stock (Unit):</label>
                    <input
                      type="number"
                      value={ropSafetyStock}
                      onChange={(e) => setRopSafetyStock(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                </div>

                {(() => {
                  const leadTimeStock = ropLeadTime * ropDailyUsage;
                  const totalRop = leadTimeStock + ropSafetyStock;

                  return (
                    <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 text-xs space-y-2 font-medium text-amber-950 dark:text-amber-200">
                      <div className="font-bold text-amber-900 dark:text-amber-300 text-sm">Hasil Perhitungan Reorder Point:</div>
                      <div className="text-base font-black font-outfit text-amber-700 dark:text-amber-300">
                        Titik Reorder (ROP) = {totalRop} Unit
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-amber-200/60 dark:border-amber-800/60">
                        <div>
                          • Kebutuhan Selama Lead Time: <strong>{leadTimeStock} Unit</strong> ({ropLeadTime} hari × {ropDailyUsage} unit)
                        </div>
                        <div>
                          • Cadangan Pengaman (Safety Stock): <strong>{ropSafetyStock} Unit</strong>
                        </div>
                      </div>
                      <div className="text-[11px] text-slate-600 dark:text-slate-300 pt-1">
                        <strong>Instruksi Pengadaan Apotek:</strong> Segera terbitkan Surat Pesanan (SP) baru ke PBF ketika sisa fisik obat di rak apotek telah menyentuh angka <strong>{totalRop} Unit</strong>.
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* 12. f2 Dissolution Similarity Calculator */}
            {selectedCalcCategory === 'f2_dissolution' && (
              <div className="space-y-5">
                <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                  <h3 className="text-base font-black text-slate-900 dark:text-white font-outfit">
                    Kalkulator Faktor Kemiripan Disolusi Terbanding (f2)
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Uji bioekivalensi in vitro BPOM: Membandingkan persentase kumulatif terlarut produk Inovator (R) vs Uji Generik (T).
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Input Data Disolusi Kumulatif (% Terdisolusi):
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-semibold">
                    <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                      <div className="font-bold text-teal-600 dark:text-teal-400">Titik 1: Menit ke-10</div>
                      <div>
                        <label className="block text-[11px] text-slate-500 dark:text-slate-400 mb-0.5">Inovator R1 (%)</label>
                        <input
                          type="number"
                          step="0.1"
                          value={f2R1}
                          onChange={(e) => setF2R1(Number(e.target.value))}
                          className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] text-slate-500 dark:text-slate-400 mb-0.5">Uji Generik T1 (%)</label>
                        <input
                          type="number"
                          step="0.1"
                          value={f2T1}
                          onChange={(e) => setF2T1(Number(e.target.value))}
                          className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
                        />
                      </div>
                    </div>

                    <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                      <div className="font-bold text-teal-600 dark:text-teal-400">Titik 2: Menit ke-20</div>
                      <div>
                        <label className="block text-[11px] text-slate-500 dark:text-slate-400 mb-0.5">Inovator R2 (%)</label>
                        <input
                          type="number"
                          step="0.1"
                          value={f2R2}
                          onChange={(e) => setF2R2(Number(e.target.value))}
                          className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] text-slate-500 dark:text-slate-400 mb-0.5">Uji Generik T2 (%)</label>
                        <input
                          type="number"
                          step="0.1"
                          value={f2T2}
                          onChange={(e) => setF2T2(Number(e.target.value))}
                          className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
                        />
                      </div>
                    </div>

                    <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                      <div className="font-bold text-teal-600 dark:text-teal-400">Titik 3: Menit ke-30</div>
                      <div>
                        <label className="block text-[11px] text-slate-500 dark:text-slate-400 mb-0.5">Inovator R3 (%)</label>
                        <input
                          type="number"
                          step="0.1"
                          value={f2R3}
                          onChange={(e) => setF2R3(Number(e.target.value))}
                          className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] text-slate-500 dark:text-slate-400 mb-0.5">Uji Generik T3 (%)</label>
                        <input
                          type="number"
                          step="0.1"
                          value={f2T3}
                          onChange={(e) => setF2T3(Number(e.target.value))}
                          className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
                        />
                      </div>
                    </div>

                    <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                      <div className="font-bold text-teal-600 dark:text-teal-400">Titik 4: Menit ke-45</div>
                      <div>
                        <label className="block text-[11px] text-slate-500 dark:text-slate-400 mb-0.5">Inovator R4 (%)</label>
                        <input
                          type="number"
                          step="0.1"
                          value={f2R4}
                          onChange={(e) => setF2R4(Number(e.target.value))}
                          className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] text-slate-500 dark:text-slate-400 mb-0.5">Uji Generik T4 (%)</label>
                        <input
                          type="number"
                          step="0.1"
                          value={f2T4}
                          onChange={(e) => setF2T4(Number(e.target.value))}
                          className="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {(() => {
                  const sq1 = Math.pow(f2R1 - f2T1, 2);
                  const sq2 = Math.pow(f2R2 - f2T2, 2);
                  const sq3 = Math.pow(f2R3 - f2T3, 2);
                  const sq4 = Math.pow(f2R4 - f2T4, 2);
                  const sumSq = sq1 + sq2 + sq3 + sq4;
                  const msd = sumSq / 4;
                  const bracket = 1 + msd;
                  const invSqrt = Math.pow(bracket, -0.5);
                  const insideLog = invSqrt * 100;
                  const f2Score = insideLog > 0 ? 50 * Math.log10(insideLog) : 0;
                  const isSimilar = f2Score >= 50 && f2Score <= 100;

                  return (
                    <div className={`p-4 rounded-2xl border text-xs space-y-2 font-medium ${
                      isSimilar
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200'
                        : 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 text-rose-950 dark:text-rose-200'
                    }`}>
                      <div className="font-bold text-sm">Hasil Evaluasi Kemiripan Disolusi Terbanding:</div>
                      <div className="text-xl font-black font-outfit">
                        Skor Kemiripan f2 = {f2Score.toFixed(2)}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-current/20">
                        <div>• Rata-rata Kuadrat Selisih (MSD): <strong>{msd.toFixed(2)}</strong></div>
                        <div>• Syarat Keberterimaan BPOM: <strong>f2 &ge; 50 (Rentang 50 - 100)</strong></div>
                      </div>
                      <div className="flex items-center gap-2 pt-1 font-bold">
                        <span>Kesimpulan Status Bioekivalensi In Vitro:</span>
                        <span className={`px-2.5 py-0.5 rounded text-[11px] text-white ${isSimilar ? 'bg-emerald-600' : 'bg-rose-600'}`}>
                          {isSimilar ? 'MEMENUHI SYARAT (SIMILAR / EKIVALEN)' : 'TIDAK MEMENUHI SYARAT (TIDAK EKIVALEN)'}
                        </span>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* 13. MACO Cleaning Validation Calculator */}
            {selectedCalcCategory === 'maco_cleaning' && (
              <div className="space-y-5">
                <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                  <h3 className="text-base font-black text-slate-900 dark:text-white font-outfit">
                    Kalkulator Batas Residu Validasi Pembersihan (MACO CPOB)
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Menghitung batas kontaminasi silang residu zat aktif obat A pada mesin sebelum memproduksi obat B.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-semibold">
                  <div>
                    <label className="block text-slate-600 dark:text-slate-300 mb-1">Dosis Terkecil Produk A (TDDA) dalam mg:</label>
                    <input
                      type="number"
                      value={macoTddA}
                      onChange={(e) => setMacoTddA(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 dark:text-slate-300 mb-1">Ukuran Bets Produk B (kg):</label>
                    <input
                      type="number"
                      value={macoBatchB}
                      onChange={(e) => setMacoBatchB(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 dark:text-slate-300 mb-1">Dosis Harian Maksimum Produk B (mg):</label>
                    <input
                      type="number"
                      value={macoMaxDdB}
                      onChange={(e) => setMacoMaxDdB(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 dark:text-slate-300 mb-1">Faktor Pengaman (Safety Factor):</label>
                    <select
                      value={macoSafetyFactor}
                      onChange={(e) => setMacoSafetyFactor(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    >
                      <option value={1000}>1.000 (Sediaan Oral Padat Standar)</option>
                      <option value={10000}>10.000 (Sediaan Injeksi / Oftalmik)</option>
                      <option value={100000}>100.000 (Sitostatika / Onkologi Kritis)</option>
                    </select>
                  </div>
                </div>

                {(() => {
                  const doseMacoMg = (macoSafetyFactor > 0 && macoMaxDdB > 0)
                    ? (macoTddA * (macoBatchB * 1000)) / (macoSafetyFactor * macoMaxDdB)
                    : 0;
                  const ppm10MacoMg = 10 * macoBatchB;
                  const chosenMacoMg = Math.min(doseMacoMg, ppm10MacoMg);
                  const isDoseStricter = doseMacoMg <= ppm10MacoMg;

                  return (
                    <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-300 dark:border-indigo-800 text-xs space-y-2 font-medium text-indigo-950 dark:text-indigo-200">
                      <div className="font-bold text-indigo-900 dark:text-indigo-300 text-sm">Hasil Perhitungan Batas MACO Validasi Pembersihan:</div>
                      <div className="text-xl font-black font-outfit text-indigo-700 dark:text-indigo-300">
                        Batas MACO Terpilih = {chosenMacoMg.toLocaleString('id-ID', { maximumFractionDigits: 2 })} mg ({ (chosenMacoMg / 1000).toFixed(3) } gram)
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-indigo-200/60 dark:border-indigo-800/60">
                        <div>
                          • Kriteria Dosis Terapeutik: <strong>{doseMacoMg.toLocaleString('id-ID', { maximumFractionDigits: 2 })} mg</strong>
                        </div>
                        <div>
                          • Kriteria Batas 10 ppm: <strong>{ppm10MacoMg.toLocaleString('id-ID')} mg</strong>
                        </div>
                      </div>
                      <div className="text-[11px] text-slate-600 dark:text-slate-300 pt-1">
                        <strong>Prinsip CPOB:</strong> Ditetapkan kriteria <strong>{isDoseStricter ? 'Dosis Terapeutik' : 'Batas 10 ppm'}</strong> karena menghasilkan nilai batas residu yang paling ketat/terkecil guna menjamin keselamatan pasien.
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* 14. Child Dosing Rules Calculator */}
            {selectedCalcCategory === 'child_dosing' && (
              <div className="space-y-5">
                <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                  <h3 className="text-base font-black text-slate-900 dark:text-white font-outfit">
                    Kalkulator Konversi Dosis Pediatri (Young, Dilling, Fried, Cowling & Clark)
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Menghitung takaran dosis anak berdasarkan usia dan berat badan dari dosis lazim dewasa standar.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-semibold">
                  <div>
                    <label className="block text-slate-600 dark:text-slate-300 mb-1">Usia Anak (Tahun):</label>
                    <input
                      type="number"
                      step="0.5"
                      value={childAgeYears}
                      onChange={(e) => setChildAgeYears(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 dark:text-slate-300 mb-1">Usia Bayi (Bulan, untuk Fried):</label>
                    <input
                      type="number"
                      value={childAgeMonths}
                      onChange={(e) => setChildAgeMonths(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 dark:text-slate-300 mb-1">Berat Badan Anak (kg):</label>
                    <input
                      type="number"
                      step="0.5"
                      value={childWeightKg}
                      onChange={(e) => setChildWeightKg(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 dark:text-slate-300 mb-1">Dosis Standar Dewasa (mg):</label>
                    <input
                      type="number"
                      value={childAdultDose}
                      onChange={(e) => setChildAdultDose(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                </div>

                {(() => {
                  const young = childAgeYears > 0 ? (childAgeYears / (childAgeYears + 12)) * childAdultDose : 0;
                  const dilling = childAgeYears > 0 ? (childAgeYears / 20) * childAdultDose : 0;
                  const cowling = childAgeYears > 0 ? ((childAgeYears + 1) / 24) * childAdultDose : 0;
                  const fried = childAgeMonths > 0 ? (childAgeMonths / 150) * childAdultDose : 0;
                  const clark = childWeightKg > 0 ? (childWeightKg / 70) * childAdultDose : 0;

                  return (
                    <div className="p-4 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-sky-300 dark:border-sky-800 text-xs space-y-3 font-medium text-sky-950 dark:text-sky-200">
                      <div className="font-bold text-sky-900 dark:text-sky-300 text-sm">Hasil Komparasi Rumus Pediatri Farmakope:</div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        <div className={`p-3 rounded-xl border ${childAgeYears >= 1 && childAgeYears < 8 ? 'bg-emerald-100/70 dark:bg-emerald-950/70 border-emerald-400 font-bold' : 'bg-white/60 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700'}`}>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400">Rumus Young (1-8 tahun):</div>
                          <div className="text-base font-black font-outfit text-emerald-700 dark:text-emerald-300">
                            {young.toFixed(1)} mg
                          </div>
                          <div className="text-[10px] text-slate-500 dark:text-slate-400">[n / (n + 12)] × D</div>
                        </div>

                        <div className={`p-3 rounded-xl border ${childAgeYears >= 8 ? 'bg-emerald-100/70 dark:bg-emerald-950/70 border-emerald-400 font-bold' : 'bg-white/60 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700'}`}>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400">Rumus Dilling (&ge; 8 tahun):</div>
                          <div className="text-base font-black font-outfit text-teal-700 dark:text-teal-300">
                            {dilling.toFixed(1)} mg
                          </div>
                          <div className="text-[10px] text-slate-500 dark:text-slate-400">[n / 20] × D</div>
                        </div>

                        <div className="p-3 rounded-xl border bg-white/60 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700">
                          <div className="text-[11px] text-slate-500 dark:text-slate-400">Rumus Cowling:</div>
                          <div className="text-base font-black font-outfit text-cyan-700 dark:text-cyan-300">
                            {cowling.toFixed(1)} mg
                          </div>
                          <div className="text-[10px] text-slate-500 dark:text-slate-400">[(n + 1) / 24] × D</div>
                        </div>

                        <div className={`p-3 rounded-xl border ${childAgeMonths < 12 ? 'bg-emerald-100/70 dark:bg-emerald-950/70 border-emerald-400 font-bold' : 'bg-white/60 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700'}`}>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400">Rumus Fried (Bayi &lt; 1 th):</div>
                          <div className="text-base font-black font-outfit text-amber-700 dark:text-amber-300">
                            {fried.toFixed(1)} mg
                          </div>
                          <div className="text-[10px] text-slate-500 dark:text-slate-400">[m / 150] × D ({childAgeMonths} bln)</div>
                        </div>

                        <div className="p-3 rounded-xl border bg-white/60 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 sm:col-span-2 lg:col-span-2">
                          <div className="text-[11px] text-slate-500 dark:text-slate-400">Rumus Clark (Basis Berat Badan):</div>
                          <div className="text-base font-black font-outfit text-blue-700 dark:text-blue-300">
                            {clark.toFixed(1)} mg
                          </div>
                          <div className="text-[10px] text-slate-500 dark:text-slate-400">[BB / 70 kg] × D ({childWeightKg} kg)</div>
                        </div>
                      </div>
                      <div className="text-[11px] text-slate-600 dark:text-slate-300 pt-1">
                        *Catatan Klinis: Kotak berwarna hijau menandakan formula yang paling sesuai berdasarkan rentang usia pasien saat ini.
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* 15. % Dosis Maksimum FI III Calculator */}
            {selectedCalcCategory === 'max_dose_fi3' && (
              <div className="space-y-5">
                <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-800">
                      🔬 Standar UKTVK &amp; Farmakope Indonesia III
                    </span>
                  </div>
                  <h3 className="text-base font-black text-slate-900 dark:text-white font-outfit mt-1">
                    Kalkulator Skrining % Dosis Maksimum (% DM Farmakope III)
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Menghitung persentase Dosis Maksimum (1x pakai dan 1 hari pakai) untuk pasien anak dengan rumus Young (&lt; 8 th) atau Dilling (&ge; 8 th).
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-xs font-semibold">
                  <div>
                    <label className="block text-slate-600 dark:text-slate-300 mb-1">Usia Pasien (Tahun):</label>
                    <input
                      type="number"
                      step="1"
                      min="1"
                      max="20"
                      value={dmAgeYears}
                      onChange={(e) => setDmAgeYears(Math.max(1, Number(e.target.value)))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 dark:text-slate-300 mb-1">DM Dewasa 1x (mg):</label>
                    <input
                      type="number"
                      value={dm1xAdult}
                      onChange={(e) => setDm1xAdult(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 dark:text-slate-300 mb-1">DM Dewasa 1 Hari (mg):</label>
                    <input
                      type="number"
                      value={dmDailyAdult}
                      onChange={(e) => setDmDailyAdult(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 dark:text-slate-300 mb-1">Dosis Resep 1x (mg):</label>
                    <input
                      type="number"
                      value={dm1xPrescription}
                      onChange={(e) => setDm1xPrescription(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 dark:text-slate-300 mb-1">Dosis Resep 1 Hari (mg):</label>
                    <input
                      type="number"
                      value={dmDailyPrescription}
                      onChange={(e) => setDmDailyPrescription(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                </div>

                {(() => {
                  const isYoung = dmAgeYears < 8;
                  const factor = isYoung ? (dmAgeYears / (dmAgeYears + 12)) : (dmAgeYears / 20);
                  const formulaUsed = isYoung ? `Rumus Young [${dmAgeYears} / (${dmAgeYears} + 12)]` : `Rumus Dilling [${dmAgeYears} / 20]`;
                  const dmChild1x = factor * dm1xAdult;
                  const dmChildDaily = factor * dmDailyAdult;

                  const percent1x = dmChild1x > 0 ? (dm1xPrescription / dmChild1x) * 100 : 0;
                  const percentDaily = dmChildDaily > 0 ? (dmDailyPrescription / dmChildDaily) * 100 : 0;

                  const isOverdose = percent1x > 100 || percentDaily > 100;
                  const isWarning = !isOverdose && (percent1x > 80 || percentDaily > 80);

                  return (
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs text-slate-600 dark:text-slate-300 font-bold">
                          Metode Konversi: <span className="text-emerald-600 dark:text-emerald-400">{formulaUsed}</span> (Faktor: {factor.toFixed(3)})
                        </span>
                        <div className="flex items-center gap-2">
                          {isOverdose ? (
                            <span className="px-3 py-1 rounded-full bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-300 border border-red-300 dark:border-red-800 text-xs font-black">
                              🚨 OVERDOSIS (&gt;100%) - Butuh Paraf Dokter (!)
                            </span>
                          ) : isWarning ? (
                            <span className="px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800 text-xs font-black">
                              ⚠️ Dosis Tinggi Waspada (80% - 100%)
                            </span>
                          ) : (
                            <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 text-xs font-black">
                              ✅ Dosis Aman &amp; Rasional (&le;80%)
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* 1x Pakai */}
                        <div className={`p-4 rounded-2xl border ${percent1x > 100 ? 'bg-red-50/80 dark:bg-red-950/30 border-red-300 dark:border-red-800' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'}`}>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 font-bold">Dosis Maksimum 1 Kali Pakai:</div>
                          <div className="flex items-baseline gap-2 mt-1">
                            <span className="text-2xl font-black font-outfit text-slate-900 dark:text-white">
                              {percent1x.toFixed(1)}%
                            </span>
                            <span className="text-xs text-slate-500">
                              ({dm1xPrescription} mg / {dmChild1x.toFixed(2)} mg)
                            </span>
                          </div>
                          <div className="text-[11px] text-slate-600 dark:text-slate-300 mt-2">
                            • DM Anak 1x = {factor.toFixed(3)} &times; {dm1xAdult} mg = <strong>{dmChild1x.toFixed(2)} mg</strong>
                          </div>
                        </div>

                        {/* 1 Hari Pakai */}
                        <div className={`p-4 rounded-2xl border ${percentDaily > 100 ? 'bg-red-50/80 dark:bg-red-950/30 border-red-300 dark:border-red-800' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'}`}>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 font-bold">Dosis Maksimum 1 Hari Pakai:</div>
                          <div className="flex items-baseline gap-2 mt-1">
                            <span className="text-2xl font-black font-outfit text-slate-900 dark:text-white">
                              {percentDaily.toFixed(1)}%
                            </span>
                            <span className="text-xs text-slate-500">
                              ({dmDailyPrescription} mg / {dmChildDaily.toFixed(2)} mg)
                            </span>
                          </div>
                          <div className="text-[11px] text-slate-600 dark:text-slate-300 mt-2">
                            • DM Anak 1 Hari = {factor.toFixed(3)} &times; {dmDailyAdult} mg = <strong>{dmChildDaily.toFixed(2)} mg</strong>
                          </div>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-300 space-y-1">
                        <div className="font-bold text-slate-800 dark:text-slate-200">Kaidah Hukum Skrining Resep (Permenkes &amp; FI III):</div>
                        <div>1. Jika % DM &gt; 100%, obat tergolong <strong>overdosis toksik</strong>. Apoteker / TTK wajib konfirmasi dokter penulis resep.</div>
                        <div>2. Resep dapat diracik jika dokter memberikan tanda seru (!) dan paraf resmi di samping dosis obat yang melebihi DM.</div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* 16. Triturasi / Pengenceran Bertingkat Calculator */}
            {selectedCalcCategory === 'trituration_dilution' && (
              <div className="space-y-5">
                <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-800">
                      🔬 Standar UKTVK &amp; Farmasetika Dasar FI III
                    </span>
                  </div>
                  <h3 className="text-base font-black text-slate-900 dark:text-white font-outfit mt-1">
                    Kalkulator Pengenceran Obat Bertingkat (Triturasi Serbuk &lt; 50 mg)
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Menghitung bobot zat aktif, vehikulum pengencer (SL / Karmin), dan porsi campuran yang harus diambil saat menimbang bahan di bawah batas kepekaan timbangan (&lt; 50 mg).
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-semibold">
                  <div>
                    <label className="block text-slate-600 dark:text-slate-300 mb-1">Zat Aktif Butuh di Resep (mg):</label>
                    <input
                      type="number"
                      step="0.5"
                      value={triturDrugNeeded}
                      onChange={(e) => setTriturDrugNeeded(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 dark:text-slate-300 mb-1">Bobot Timbang Minimum Standar (mg):</label>
                    <input
                      type="number"
                      value={triturMinWeigh}
                      onChange={(e) => setTriturMinWeigh(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 dark:text-slate-300 mb-1">Total Bobot Campuran Pengenceran (mg):</label>
                    <input
                      type="number"
                      value={triturTotalMix}
                      onChange={(e) => setTriturTotalMix(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                </div>

                {(() => {
                  const diluentWeight = Math.max(0, triturTotalMix - triturMinWeigh);
                  const takenWeight = triturMinWeigh > 0 ? (triturDrugNeeded / triturMinWeigh) * triturTotalMix : 0;
                  const leftoverWeight = Math.max(0, triturTotalMix - takenWeight);

                  const isDirectWeighable = triturDrugNeeded >= triturMinWeigh;
                  const isTakenTooSmall = !isDirectWeighable && takenWeight < triturMinWeigh;

                  return (
                    <div className="p-4 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800/60 space-y-4 text-xs font-medium text-slate-800 dark:text-slate-200">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="font-bold text-indigo-900 dark:text-indigo-300 text-sm">
                          Rasio Pengenceran: 1 : {(triturTotalMix / triturMinWeigh).toFixed(0)} ({triturMinWeigh} mg zat aktif dalam {triturTotalMix} mg campuran)
                        </span>
                        {isDirectWeighable ? (
                          <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 text-xs font-bold border border-blue-300 dark:border-blue-800">
                            ℹ️ Kebutuhan &ge; {triturMinWeigh} mg: Dapat ditimbang langsung
                          </span>
                        ) : isTakenTooSmall ? (
                          <span className="px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 text-xs font-bold border border-amber-300 dark:border-amber-800">
                            ⚠️ Hasil Ambil &lt; {triturMinWeigh} mg: Gunakan Pengenceran Bertingkat 2 Tahap (1:50)
                          </span>
                        ) : (
                          <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold border border-emerald-300 dark:border-emerald-800">
                            ✅ Pengenceran Valid (Hasil Ambil &ge; {triturMinWeigh} mg)
                          </span>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                          <div className="text-[11px] text-slate-500 dark:text-slate-400">1. Penimbangan Tahap Awal:</div>
                          <div className="text-base font-black text-slate-900 dark:text-white font-outfit mt-1">
                            {triturMinWeigh} mg Zat Aktif
                          </div>
                          <div className="text-[11px] text-slate-600 dark:text-slate-300 mt-1">
                            + {diluentWeight} mg Saccharum Lactis (SL) + sedikit Karmin hingga homogen.
                          </div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-emerald-400 dark:border-emerald-700 ring-2 ring-emerald-500/20">
                          <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold">2. Porsi Campuran Diambil:</div>
                          <div className="text-2xl font-black text-emerald-700 dark:text-emerald-300 font-outfit mt-1">
                            {takenWeight.toFixed(1)} mg
                          </div>
                          <div className="text-[11px] text-slate-600 dark:text-slate-300 mt-1">
                            Setara tepat mengandung <strong>{triturDrugNeeded} mg zat aktif</strong> untuk resep.
                          </div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                          <div className="text-[11px] text-slate-500 dark:text-slate-400">3. Sisa Serbuk Pengenceran:</div>
                          <div className="text-base font-black text-amber-600 dark:text-amber-400 font-outfit mt-1">
                            {leftoverWeight.toFixed(1)} mg
                          </div>
                          <div className="text-[11px] text-slate-600 dark:text-slate-300 mt-1">
                            Dibungkus tersendiri dan diberi etiket &ldquo;Sisa Pengenceran {triturDrugNeeded} mg&rdquo;.
                          </div>
                        </div>
                      </div>

                      <div className="text-[11px] text-slate-600 dark:text-slate-400 italic">
                        *Pedoman FI III: Timbangan miligram laboratorium memiliki daya beban maksimum 10-50 g dan kepekaan 5 mg. Penimbangan zat di bawah 50 mg wajib diencerkan untuk menghindari deviasi bobot &gt; 5%.
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* 17. Batas Deteksi & Kuantitasi (LOD & LOQ) Calculator */}
            {selectedCalcCategory === 'lod_loq_validation' && (
              <div className="space-y-5">
                <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-300 dark:border-blue-800">
                      🎓 Standar ICH Q2(R1) &amp; Farmakope Indonesia VI
                    </span>
                  </div>
                  <h3 className="text-base font-black text-slate-900 dark:text-white font-outfit mt-1">
                    Kalkulator Batas Deteksi (LOD) &amp; Batas Kuantitasi (LOQ)
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Menghitung parameter sensitivitas metode analisis instrumental (Spektrofotometri UV-Vis, KCKT / HPLC) berdasarkan kurva kalibrasi regresi linear.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold">
                  <div>
                    <label className="block text-slate-600 dark:text-slate-300 mb-1">Simpangan Baku Blanko / Residual (SD / Sy/x):</label>
                    <input
                      type="number"
                      step="0.001"
                      value={lodBlankSd}
                      onChange={(e) => setLodBlankSd(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 dark:text-slate-300 mb-1">Kemiringan Garis Regresi / Slope (S):</label>
                    <input
                      type="number"
                      step="0.001"
                      value={lodSlope}
                      onChange={(e) => setLodSlope(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono"
                    />
                  </div>
                </div>

                {(() => {
                  const lodVal = lodSlope > 0 ? (3.3 * lodBlankSd) / lodSlope : 0;
                  const loqVal = lodSlope > 0 ? (10 * lodBlankSd) / lodSlope : 0;
                  const ratio = lodVal > 0 ? loqVal / lodVal : 0;

                  return (
                    <div className="p-4 rounded-2xl bg-teal-50/60 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800/60 space-y-4 text-xs font-medium text-slate-800 dark:text-slate-200">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="font-bold text-teal-900 dark:text-teal-300 text-sm">
                          Hasil Evaluasi Validasi Metode Analisis (ICH Q2):
                        </span>
                        <span className="px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 text-xs font-bold border border-teal-300 dark:border-teal-800">
                          Rasio LOQ / LOD = {ratio.toFixed(2)}x (~3.03x)
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
                            Batas Deteksi (LOD / Limit of Detection):
                          </div>
                          <div className="text-3xl font-black text-teal-700 dark:text-teal-300 font-outfit">
                            {lodVal.toFixed(4)} <span className="text-xs font-normal text-slate-500">ppm / &mu;g/mL</span>
                          </div>
                          <div className="text-[11px] text-slate-600 dark:text-slate-400 pt-1">
                            Formula: <strong>(3.3 &times; {lodBlankSd}) / {lodSlope}</strong>. Menunjukkan konsentrasi terendah yang sinyalnya masih dapat dibedakan dari derau (Noise S/N &ge; 3:1).
                          </div>
                        </div>

                        <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-emerald-400 dark:border-emerald-700 ring-2 ring-emerald-500/20 space-y-1">
                          <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">
                            Batas Kuantitasi (LOQ / Limit of Quantification):
                          </div>
                          <div className="text-3xl font-black text-emerald-700 dark:text-emerald-300 font-outfit">
                            {loqVal.toFixed(4)} <span className="text-xs font-normal text-slate-500">ppm / &mu;g/mL</span>
                          </div>
                          <div className="text-[11px] text-slate-600 dark:text-slate-400 pt-1">
                            Formula: <strong>(10 &times; {lodBlankSd}) / {lodSlope}</strong>. Menunjukkan batas bawah konsentrasi yang dapat dihitung secara kuantitatif dengan akurasi dan presisi memenuhi syarat (S/N &ge; 10:1).
                          </div>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-white/70 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-[11px] text-slate-600 dark:text-slate-300 space-y-1">
                        <div className="font-bold text-slate-800 dark:text-slate-200">Aplikasi Klinis &amp; Industri Farmasi:</div>
                        <div>• <strong>Uji Cemaran Obat &amp; Degradan (Impurity Testing):</strong> Memastikan instrumen mampu mengukur kadar pengotor di bawah batas spesifikasi Farmakope (&le; 0.1%).</div>
                        <div>• <strong>Uji Residu Pembersihan (Cleaning Validation MACO):</strong> Menjamin metode swabbing mampu mengukur residu hingga batas LOQ.</div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* ========================================================================= */}
            {/* EDUKASI MATERI, PENJELASAN RUMUS & CONTOH KASUS CBT UKMPPAI & UKTVF     */}
            {/* ========================================================================= */}
            {(() => {
              const currentFormulaDetail = CALCULATION_FORMULA_DETAILS[selectedCalcCategory];
              if (!currentFormulaDetail) return null;

              return (
                <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 space-y-6 animate-fade-in">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-teal-500/15 text-teal-700 dark:text-teal-300 flex items-center justify-center font-bold">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-wider font-extrabold text-teal-700 dark:text-teal-400 font-outfit">
                          Modul Pembelajaran Resmi • {currentFormulaDetail.categoryName}
                        </span>
                        <h4 className="text-base sm:text-lg font-black text-slate-900 dark:text-white font-outfit">
                          Penjelasan Rumus & Teori: {currentFormulaDetail.title}
                        </h4>
                      </div>
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 font-outfit">
                      {currentFormulaDetail.badgeDomain}
                    </span>
                  </div>

                  {/* 1. Rumus Matematika Resmi & Notasi */}
                  <div className="p-5 rounded-3xl bg-slate-900 text-white shadow-md space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-teal-300 font-outfit uppercase tracking-wider">
                      <Calculator className="w-4 h-4 text-teal-400" />
                      <span>Formula Matematis Baku:</span>
                    </div>
                    <div className="space-y-1.5 font-mono text-xs sm:text-sm bg-slate-950/80 p-4 rounded-2xl border border-slate-800 text-emerald-300">
                      {currentFormulaDetail.mathFormula.map((formula, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-slate-500 select-none">▶</span>
                          <span className="font-bold">{formula}</span>
                        </div>
                      ))}
                    </div>

                    {/* Penjelasan Notasi / Variabel */}
                    <div className="pt-2 border-t border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                      {currentFormulaDetail.variableExplanations.map((v, idx) => (
                        <div key={idx} className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                          <span className="font-bold text-teal-200 font-outfit">{v.symbol}</span>: <span className="text-slate-300">{v.meaning}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 2. Konsep Dasar & Alur Langkah Kerja */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* Konsep */}
                    <div className="p-5 rounded-3xl bg-teal-50/60 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-900/50 space-y-2.5">
                      <div className="flex items-center gap-2 text-xs font-bold text-teal-900 dark:text-teal-300 font-outfit uppercase tracking-wider">
                        <Info className="w-4 h-4 text-teal-600" />
                        <span>Konsep Dasar & Teori Farmasetika:</span>
                      </div>
                      <p className="text-xs text-teal-950 dark:text-teal-100/90 leading-relaxed font-medium">
                        {currentFormulaDetail.conceptExplanation}
                      </p>
                    </div>

                    {/* Langkah Kerja */}
                    <div className="p-5 rounded-3xl bg-indigo-50/60 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-900/50 space-y-2.5">
                      <div className="flex items-center gap-2 text-xs font-bold text-indigo-900 dark:text-indigo-300 font-outfit uppercase tracking-wider">
                        <TrendingUp className="w-4 h-4 text-indigo-600" />
                        <span>Alur Langkah Perhitungan Manual:</span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-indigo-950 dark:text-indigo-100/90 font-medium">
                        {currentFormulaDetail.stepByStepGuide.map((step, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-4 h-4 rounded-full bg-indigo-200 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
                              {idx + 1}
                            </span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* 3. Contoh Kasus Nyata Soal CBT UKMPPAI & Langkah Hitung Manual */}
                  <div className="p-6 rounded-3xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/50 space-y-4">
                    <div className="flex items-center justify-between border-b border-amber-200/80 dark:border-amber-900/60 pb-3">
                      <div className="flex items-center gap-2 text-xs font-black text-amber-950 dark:text-amber-300 font-outfit uppercase tracking-wider">
                        <Trophy className="w-4 h-4 text-amber-600" />
                        <span>Contoh Kasus Soal CBT Vignette & Pembahasan Lengkap:</span>
                      </div>
                      <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-amber-200 dark:bg-amber-900 text-amber-900 dark:text-amber-200">
                        Standar Ujian
                      </span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <p className="text-amber-950 dark:text-amber-200 leading-relaxed font-semibold italic">
                        "{currentFormulaDetail.exampleCase.vignette}"
                      </p>
                      <p className="text-slate-900 dark:text-white font-black font-outfit">
                        Pertanyaan: {currentFormulaDetail.exampleCase.question}
                      </p>
                    </div>

                    {/* Langkah Pembahasan */}
                    <div className="p-4 rounded-2xl bg-white dark:bg-[#0c141d] border border-amber-200 dark:border-amber-900/60 space-y-2 text-xs">
                      <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Langkah Penyelesaian Matematis Manual:</span>
                      </div>
                      <div className="space-y-1 text-slate-700 dark:text-slate-300 font-mono text-[11px] leading-relaxed">
                        {currentFormulaDetail.exampleCase.stepByStepCalculation.map((calc, idx) => (
                          <div key={idx} className="p-1 rounded bg-slate-50 dark:bg-slate-800/60">
                            {calc}
                          </div>
                        ))}
                      </div>
                      <div className="pt-2 border-t border-slate-100 dark:border-slate-800 font-bold text-emerald-700 dark:text-emerald-400">
                        🎯 Kesimpulan Jawaban: {currentFormulaDetail.exampleCase.finalAnswer}
                      </div>
                    </div>
                  </div>

                  {/* 4. Tips Kritis Ujian & Rujukan Resmi */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-rose-50/70 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/50 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-rose-950 dark:text-rose-300 font-outfit">
                        <AlertTriangle className="w-4 h-4 text-rose-600" />
                        <span>Poin Kritis & Jebakan Ujian (Exam Key Pearls):</span>
                      </div>
                      <ul className="list-disc list-inside text-xs text-rose-950 dark:text-rose-200 space-y-1 font-medium leading-relaxed">
                        {currentFormulaDetail.examKeyPearls.map((pearl, idx) => (
                          <li key={idx}>{pearl}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-2 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white font-outfit">
                          <BookMarked className="w-4 h-4 text-teal-600" />
                          <span>Sumber Kepustakaan & Rujukan Baku:</span>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                          {currentFormulaDetail.referenceStandard}
                        </p>
                      </div>
                      <div className="text-[11px] text-teal-700 dark:text-teal-400 font-bold pt-2 border-t border-slate-200 dark:border-slate-700 flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" />
                        <span>Tervalidasi sesuai Blueprint Uji Kompetensi Apoteker & TTK Indonesia</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SUBTAB 4: PANDUAN STASI PRAKTIK OSCE                                     */}
      {/* ========================================================================= */}
      {activeMainTab === 'osce' && (
        <div className="space-y-6">
          {/* Station Selector Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {OSCE_STATIONS.map((station) => {
              const isSelected = selectedOsceId === station.id;
              return (
                <button
                  key={station.id}
                  onClick={() => setSelectedOsceId(station.id)}
                  className={`p-4 rounded-2xl text-left border transition-all cursor-pointer font-outfit ${
                    isSelected
                      ? 'bg-emerald-50/90 dark:bg-emerald-950/40 border-emerald-500 shadow-md ring-2 ring-emerald-500/20'
                      : 'bg-white dark:bg-[#0c141d] border-slate-200 dark:border-slate-800 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-600 text-white">
                      {station.stationType}
                    </span>
                    <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {station.durationMinutes} Menit
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white mt-2">
                    {station.title}
                  </h4>
                </button>
              );
            })}
          </div>

          {/* Active Station Detail & Checklist */}
          {activeOsceStation && (
            <div className="p-6 rounded-3xl bg-white dark:bg-[#0c141d] border border-slate-200 dark:border-slate-800 shadow-lg space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-outfit">
                      {activeOsceStation.stationType}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      Standar Waktu Uji: {activeOsceStation.durationMinutes} Menit
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-slate-900 dark:text-white font-outfit mt-1.5">
                    {activeOsceStation.title}
                  </h3>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-right">
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block font-outfit">Skor Praktik Anda</span>
                    <span className="text-base font-black text-emerald-600 dark:text-emerald-400 font-outfit">
                      {osceTotalScore} / 100 Poin
                    </span>
                  </div>
                  <div className="text-xs font-black px-2 py-1 rounded-lg bg-emerald-600 text-white font-outfit">
                    {osceTotalScore}%
                  </div>
                </div>
              </div>

              {/* Skenario Kasus & Script Pasien */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/50 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-900 dark:text-amber-300 font-outfit">
                    <FileText className="w-4 h-4 text-amber-600" />
                    <span>Instruksi Soal / Tugas Peserta (Candidate Task):</span>
                  </div>
                  <p className="text-xs text-amber-950 dark:text-amber-200/90 leading-relaxed">
                    {activeOsceStation.candidateTask}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-900/50 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-indigo-900 dark:text-indigo-300 font-outfit">
                    <HelpCircle className="w-4 h-4 text-indigo-600" />
                    <span>Respon / Skenario Pasien Standar (Simulated Patient):</span>
                  </div>
                  <p className="text-xs text-indigo-950 dark:text-indigo-200/90 leading-relaxed italic">
                    "{activeOsceStation.simulatedPatientScript}"
                  </p>
                </div>
              </div>

              {/* Checklist Penguji */}
              <div className="space-y-3">
                <h4 className="text-sm font-black text-slate-900 dark:text-white font-outfit flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Rubrik Penilaian Objektif Stasi (Evaluator Checklist):</span>
                </h4>

                <div className="space-y-2">
                  {activeOsceStation.criticalChecklist.map((item, idx) => {
                    const itemKey = `${activeOsceStation.id}-${idx}`;
                    const isChecked = completedChecklistItems[itemKey] || false;

                    return (
                      <div
                        key={idx}
                        onClick={() => {
                          setCompletedChecklistItems(prev => ({ ...prev, [itemKey]: !prev[itemKey] }));
                        }}
                        className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                          isChecked
                            ? 'bg-emerald-50/80 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200'
                            : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                        }`}
                      >
                        <div className={`mt-0.5 w-5 h-5 rounded-lg flex items-center justify-center border transition-all shrink-0 ${
                          isChecked
                            ? 'bg-emerald-600 border-emerald-600 text-white'
                            : 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-transparent'
                        }`}>
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>

                        <div className="flex-1 text-xs space-y-0.5">
                          <div className="flex items-center justify-between font-bold">
                            <span className="font-outfit text-slate-900 dark:text-white">{item.step}</span>
                            <span className="text-[11px] font-black text-emerald-600 dark:text-emerald-400">+{item.points} Poin</span>
                          </div>
                          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Tips Penguji */}
              {activeOsceStation.examinerTips && activeOsceStation.examinerTips.length > 0 && (
                <div className="p-4 rounded-2xl bg-rose-50/70 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/50 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-rose-900 dark:text-rose-300 font-outfit">
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                    <span>Poin Kritis Penguji (Critical Assessment Pearls):</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-rose-950 dark:text-rose-200/90 space-y-1">
                    {activeOsceStation.examinerTips.map((tip, idx) => (
                      <li key={idx}>{tip}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* SUBTAB 5: FLASHCARD DIGITAL & HAFALAN KILAT                                */}
      {/* ========================================================================= */}
      {activeMainTab === 'flashcards' && (
        <div className="space-y-6">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2">
              {Array.from(new Set(['all', ...FLASHCARD_DECK.map(c => c.category)])).map(cat => (
                <button
                  key={cat}
                  onClick={() => {
                    setFlashcardCategory(cat);
                    setCurrentFlashcardIdx(0);
                    setIsCardFlipped(false);
                    setShowCardHint(false);
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer font-outfit ${
                    flashcardCategory === cat
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-300'
                  }`}
                >
                  {cat === 'all' ? `Semua (${filteredFlashcards.length})` : cat}
                </button>
              ))}
            </div>

            <button
              onClick={handleShuffleCards}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-slate-200 transition cursor-pointer"
            >
              <Shuffle className="w-3.5 h-3.5 text-emerald-500" />
              <span>Acak Kartu</span>
            </button>
          </div>

          {/* Interactive 3D Flip Flashcard */}
          {activeCard && (
            <div className="max-w-xl mx-auto space-y-4">
              <div
                onClick={() => setIsCardFlipped(!isCardFlipped)}
                className={`min-h-[280px] sm:min-h-[320px] rounded-3xl p-6 sm:p-8 flex flex-col justify-between text-center border cursor-pointer transition-all duration-300 shadow-xl ${
                  isCardFlipped
                    ? 'bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950 text-white border-emerald-500/50 shadow-emerald-500/10'
                    : 'bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-[#0d1622] dark:to-[#080d14] text-slate-900 dark:text-white border-slate-200 dark:border-slate-800'
                }`}
              >
                {/* Card Top Label */}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold px-2.5 py-0.5 rounded-full bg-emerald-600/20 text-emerald-600 dark:text-emerald-400 font-outfit">
                      {activeCard.category}
                    </span>
                    {activeCard.targetExam === 'uktvk' && (
                      <span className="font-bold px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-600 dark:text-purple-400 text-[10px] font-outfit">
                        🔬 UKTVK
                      </span>
                    )}
                    {activeCard.targetExam === 'ukmppai' && (
                      <span className="font-bold px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-600 dark:text-blue-400 text-[10px] font-outfit">
                        🎓 UKMPPAI
                      </span>
                    )}
                  </div>
                  <span className="text-slate-400 font-mono text-[11px]">
                    Kartu {currentFlashcardIdx + 1} / {filteredFlashcards.length}
                  </span>
                </div>

                {/* Card Main Text */}
                <div className="py-6 space-y-3">
                  {!isCardFlipped ? (
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold block mb-2 font-outfit">
                        Pertanyaan / Soal:
                      </span>
                      <h3 className="text-base sm:text-xl font-black font-outfit leading-relaxed">
                        {activeCard.frontText}
                      </h3>
                      <p className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-4 font-bold flex items-center justify-center gap-1">
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Klik kartu untuk membalik & melihat jawaban</span>
                      </p>
                    </div>
                  ) : (
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold block mb-2 font-outfit">
                        Jawaban & Penjelasan:
                      </span>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium whitespace-pre-line text-left">
                        {activeCard.backText}
                      </p>
                    </div>
                  )}
                </div>

                {/* Hint Bar */}
                <div className="text-xs">
                  {showCardHint ? (
                    <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-300 text-[11px] font-medium">
                      💡 Petunjuk: {activeCard.hint}
                    </div>
                  ) : (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowCardHint(true);
                      }}
                      className="text-[11px] text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 font-bold"
                    >
                      Buka Petunjuk (Hint)
                    </button>
                  )}
                </div>
              </div>

              {/* Flip & Next Controls */}
              <div className="flex items-center justify-between gap-3 pt-2">
                <button
                  onClick={handlePrevCard}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 cursor-pointer"
                >
                  Sebelumnya
                </button>

                <button
                  onClick={() => setIsCardFlipped(!isCardFlipped)}
                  className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md cursor-pointer flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Balik Kartu</span>
                </button>

                <button
                  onClick={handleNextCard}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 cursor-pointer"
                >
                  Selanjutnya
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
