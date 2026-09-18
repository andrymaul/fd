import React, { useState, useMemo, useEffect } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  CheckCircle2, 
  HelpCircle, 
  Calculator, 
  Stethoscope, 
  Sparkles, 
  Search, 
  ChevronLeft,
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
  ShieldCheck,
  Award,
  ShieldAlert,
  Target,
  Activity
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
import { LAB_NORMAL_VALUES, LabValueItem } from '../data/competency/labNormalValues';

interface PharmacyCompetencyCenterProps {
  onSelectTab?: (tabId: string) => void;
  onOpenPricingModal?: () => void;
  forcedPortal?: 'ukmppai' | 'uktvk';
}

export const PharmacyCompetencyCenter: React.FC<PharmacyCompetencyCenterProps> = ({
  onSelectTab,
  forcedPortal = 'ukmppai'
}) => {
  // Main Subtab State
  const [activeMainTab, setActiveMainTab] = useState<'topics' | 'cbt' | 'calc' | 'osce' | 'flashcards'>('topics');
  // Exam Level Segmentation State: UKMPPAI (Apoteker) vs UKTVK (Vokasi TTK)
  const [selectedExamLevel, setSelectedExamLevel] = useState<'ukmppai' | 'uktvk'>(forcedPortal);

  useEffect(() => {
    setSelectedExamLevel(forcedPortal);
    setCurrentQuestionIndex(0);
    setCurrentFlashcardIdx(0);
  }, [forcedPortal]);

  const isUktvk = selectedExamLevel === 'uktvk';

  // Competency Domains configuration tailored for UKTVF (APDFI Vokasi) vs UKMPPAI (KFN Apoteker)
  const currentDomains = useMemo(() => {
    if (isUktvk) {
      return [
        {
          id: 'klinis' as const,
          name: 'Pelayanan Farmasi Komunitas, Dispensing & KIE',
          shortName: 'Komunitas & KIE',
          icon: 'Stethoscope',
          color: 'teal',
          badgeColor: 'bg-teal-600 text-white',
          description: 'Skrining administrasi & farmasetik resep, DOWA 1-3, KIE cara pakai sediaan khusus (inhaler MDI, supositoria, tetes, insulin), peracikan obat, dan perhitungan % DM FI III.',
          weightPercentage: '25% - 35%'
        },
        {
          id: 'manajemen' as const,
          name: 'Alat Kesehatan (BMHP) & Logistik Farmasi',
          shortName: 'Alkes & Logistik',
          icon: 'Briefcase',
          color: 'blue',
          badgeColor: 'bg-blue-600 text-white',
          description: 'Pengenalan & penyerahan Alkes BMHP (kateter urin, NGT, infus set, spuit, cannula), rantai dingin vaksin & VVM, penyimpanan FEFO/FIFO, LASA, serta administrasi Narkotika/SIPNAP.',
          weightPercentage: '20% - 30%'
        },
        {
          id: 'teknologi' as const,
          name: 'Teknologi Farmasi & Kontrol Kualitas (QC)',
          shortName: 'Teknologi & QC',
          icon: 'FlaskConical',
          color: 'violet',
          badgeColor: 'bg-violet-600 text-white',
          description: 'Evaluasi mutu fisik tablet (kerapuhan Roche, waktu hancur, kekerasan), evaluasi suspensi & emulsi, salep, sterilisasi autoklaf (121°C)/oven/filtrasi 0,22 µm, dan ruang bersih CPOB.',
          weightPercentage: '20% - 30%'
        },
        {
          id: 'bahan_alam' as const,
          name: 'Farmasi Bahan Alam & Obat Tradisional',
          shortName: 'Bahan Alam & Jamu',
          icon: 'Leaf',
          color: 'amber',
          badgeColor: 'bg-amber-600 text-white',
          description: 'Metode ekstraksi (maserasi, perkolasi, sokletasi, infusa/dekokta), fragmen mikroskopik simplisia MMI, skrining fitokimia tabung, dan regulasi Jamu, OHT, serta Fitofarmaka BPOM.',
          weightPercentage: '15% - 25%'
        }
      ];
    }
    return COMPETENCY_DOMAINS;
  }, [isUktvk]);

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
  const [isConfirmSubmitOpen, setIsConfirmSubmitOpen] = useState<boolean>(false);
  const [isReviewMode, setIsReviewMode] = useState<boolean>(false);
  const [tryoutPreset, setTryoutPreset] = useState<'quick' | 'mini' | 'standard' | 'uktvf180' | 'ukmppai200' | 'full'>('quick');
  const [isShuffleEnabled, setIsShuffleEnabled] = useState<boolean>(true);
  const [tryoutSessionKey, setTryoutSessionKey] = useState<number>(1);
  const [tryoutInitialDuration, setTryoutInitialDuration] = useState<number>(15 * 60); // 15 mins default
  const [tryoutTimeLeft, setTryoutTimeLeft] = useState<number>(15 * 60); // 15 mins demo timer
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [showRightPanel, setShowRightPanel] = useState<boolean>(true);
  const [paletteStatusFilter, setPaletteStatusFilter] = useState<'all' | 'unanswered' | 'flagged' | 'answered' | 'incorrect' | 'correct'>('all');
  const [quickJumpNumber, setQuickJumpNumber] = useState<string>('');
  const [cbtTextSize, setCbtTextSize] = useState<'sm' | 'base' | 'lg'>('base');

  // Lab Normal Values Modal State (Standard Fitur CBT APDFI)
  const [isLabValuesModalOpen, setIsLabValuesModalOpen] = useState<boolean>(false);
  const [labSearchQuery, setLabSearchQuery] = useState<string>('');
  const [selectedLabCategory, setSelectedLabCategory] = useState<string>('all');

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

  // Portal Topics: All topics available for the active portal (UKTVF vs UKMPPAI)
  const portalTopics = useMemo(() => {
    return HIGH_YIELD_TOPICS.filter((topic) => {
      return isUktvk
        ? (topic.targetExam === 'uktvk' || topic.targetExam === 'all')
        : (topic.targetExam === 'ukmppai' || topic.targetExam === 'all' || !topic.targetExam);
    });
  }, [isUktvk]);

  // Filtered Topics: Filtered by domain and search query for display
  const filteredTopics = useMemo(() => {
    return portalTopics.filter((topic) => {
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
  }, [portalTopics, selectedDomainFilter, topicSearchQuery]);

  // Helper for Fisher-Yates Array Shuffle
  const shuffleArray = <T,>(array: T[]): T[] => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  // Filtered CBT Questions with Stratified Blueprint Sampling & Shuffle
  const filteredQuestions = useMemo(() => {
    const basePool = EXAM_QUESTION_BANK.filter((q) => {
      const matchExam = isUktvk
        ? (q.targetExam === 'uktvk')
        : (q.targetExam !== 'uktvk');
      if (!matchExam) return false;
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

    // In Study Mode or if specific single domain filter is active:
    if (cbtMode === 'study' || cbtDomainFilter !== 'all') {
      const filtered = cbtDomainFilter === 'all' 
        ? basePool 
        : basePool.filter(q => q.domainId === cbtDomainFilter);
      return isShuffleEnabled && cbtMode === 'tryout' ? shuffleArray(filtered) : filtered;
    }

    // In Tryout Mode with All Domains: Stratified Blueprint Quotas
    if (cbtMode === 'tryout') {
      // Stratified Quota Mapping based on National Blueprint:
      // UKMPPAI (Apoteker): Klinis ~50%, Manajemen ~20%, Teknologi ~20%, Bahan Alam ~10% (200 Soal)
      // UKTVF (APDFI Vokasi): Komunitas & Farmakologi ~30%, Alkes & Manajemen ~25%, QC Teknofar ~25%, Bahan Alam ~20% (180 Soal)
      let quotas = isUktvk 
        ? { klinis: 55, manajemen: 45, teknologi: 45, bahan_alam: 35 } // 180 UKTVF
        : { klinis: 100, manajemen: 40, teknologi: 40, bahan_alam: 20 }; // 200 UKMPPAI
      if (tryoutPreset === 'quick') quotas = { klinis: 8, manajemen: 3, teknologi: 3, bahan_alam: 1 }; // 15
      else if (tryoutPreset === 'mini') quotas = { klinis: 26, manajemen: 10, teknologi: 10, bahan_alam: 4 }; // 50
      else if (tryoutPreset === 'standard') quotas = { klinis: 50, manajemen: 20, teknologi: 20, bahan_alam: 10 }; // 100
      else if (tryoutPreset === 'uktvf180') quotas = { klinis: 55, manajemen: 45, teknologi: 45, bahan_alam: 35 }; // 180 Soal (Standar Ujian APDFI Vokasi)
      else if (tryoutPreset === 'ukmppai200') quotas = { klinis: 100, manajemen: 40, teknologi: 40, bahan_alam: 20 }; // 200 Soal (Standar Nasional UKMPPAI)
      else if (tryoutPreset === 'full') {
        return isShuffleEnabled ? shuffleArray(basePool) : basePool;
      }

      // Group questions by domain
      const klinisPool = basePool.filter(q => q.domainId === 'klinis');
      const manajemenPool = basePool.filter(q => q.domainId === 'manajemen');
      const teknologiPool = basePool.filter(q => q.domainId === 'teknologi');
      const bahanAlamPool = basePool.filter(q => q.domainId === 'bahan_alam');

      const sampledKlinis = (isShuffleEnabled ? shuffleArray(klinisPool) : klinisPool).slice(0, quotas.klinis);
      const sampledManajemen = (isShuffleEnabled ? shuffleArray(manajemenPool) : manajemenPool).slice(0, quotas.manajemen);
      const sampledTeknologi = (isShuffleEnabled ? shuffleArray(teknologiPool) : teknologiPool).slice(0, quotas.teknologi);
      const sampledBahanAlam = (isShuffleEnabled ? shuffleArray(bahanAlamPool) : bahanAlamPool).slice(0, quotas.bahan_alam);

      const combined = [
        ...sampledKlinis,
        ...sampledManajemen,
        ...sampledTeknologi,
        ...sampledBahanAlam
      ];

      // Interleave/shuffle the combined list so domains are distributed naturally
      return isShuffleEnabled ? shuffleArray(combined) : combined;
    }

    return basePool;
  }, [cbtDomainFilter, cbtDifficultyFilter, cbtSearchQuery, isUktvk, cbtMode, tryoutPreset, isShuffleEnabled, tryoutSessionKey]);

  const activeQuestion = filteredQuestions[currentQuestionIndex] || filteredQuestions[0];

  // Filtered Lab Values for CBT Reference Modal (Standard APDFI / UKMPPAI)
  const filteredLabValues = useMemo(() => {
    return LAB_NORMAL_VALUES.filter((item) => {
      const matchCat = selectedLabCategory === 'all' || item.category === selectedLabCategory;
      if (!matchCat) return false;
      if (!labSearchQuery.trim()) return true;
      const q = labSearchQuery.toLowerCase();
      return (
        item.name.toLowerCase().includes(q) ||
        item.normalRange.toLowerCase().includes(q) ||
        item.unit.toLowerCase().includes(q) ||
        item.clinicalSignificance.toLowerCase().includes(q)
      );
    });
  }, [selectedLabCategory, labSearchQuery]);

  // Tryout Score Calculation & Detailed Domain Blueprint Analytics
  const tryoutScore = useMemo(() => {
    let correctCount = 0;
    let incorrectCount = 0;
    let unansweredCount = 0;
    let flaggedCount = 0;

    const domainStats: Record<'klinis' | 'manajemen' | 'teknologi' | 'bahan_alam', { total: number; correct: number; incorrect: number; percent: number }> = {
      klinis: { total: 0, correct: 0, incorrect: 0, percent: 0 },
      manajemen: { total: 0, correct: 0, incorrect: 0, percent: 0 },
      teknologi: { total: 0, correct: 0, incorrect: 0, percent: 0 },
      bahan_alam: { total: 0, correct: 0, incorrect: 0, percent: 0 },
    };

    filteredQuestions.forEach((q) => {
      const ans = userAnswers[q.id];
      if (flaggedQuestions[q.id]) flaggedCount++;

      if (domainStats[q.domainId]) {
        domainStats[q.domainId].total++;
      }

      if (!ans) {
        unansweredCount++;
      } else if (ans === q.correctAnswer) {
        correctCount++;
        if (domainStats[q.domainId]) domainStats[q.domainId].correct++;
      } else {
        incorrectCount++;
        if (domainStats[q.domainId]) domainStats[q.domainId].incorrect++;
      }
    });

    // Calculate percentage per domain
    (Object.keys(domainStats) as ('klinis' | 'manajemen' | 'teknologi' | 'bahan_alam')[]).forEach((d) => {
      const ds = domainStats[d];
      ds.percent = ds.total > 0 ? Math.round((ds.correct / ds.total) * 1000) / 10 : 0;
    });

    const total = filteredQuestions.length;
    const percentage = total > 0 ? Math.round((correctCount / total) * 1000) / 10 : 0;
    const passingGrade = (selectedExamLevel === 'uktvk' || tryoutPreset === 'uktvf180') ? 55.0 : 68.5; // NBL Standar APDFI Vokasi (55.0%) vs UKMPPAI Nasional (68.5%)
    const isPassed = percentage >= passingGrade;

    const timeSpentSeconds = Math.max(1, tryoutInitialDuration - tryoutTimeLeft);
    const avgSecondsPerQuestion = total > 0 ? Math.round(timeSpentSeconds / total) : 0;

    // Find weakest domain among domains with at least 1 question
    let lowestScore = 101;
    let weakestDomainKey: 'klinis' | 'manajemen' | 'teknologi' | 'bahan_alam' = 'klinis';
    (Object.keys(domainStats) as ('klinis' | 'manajemen' | 'teknologi' | 'bahan_alam')[]).forEach((d) => {
      if (domainStats[d].total > 0 && domainStats[d].percent < lowestScore) {
        lowestScore = domainStats[d].percent;
        weakestDomainKey = d;
      }
    });

    return {
      total,
      correctCount,
      incorrectCount,
      unansweredCount,
      flaggedCount,
      percentage,
      passingGrade,
      isPassed,
      timeSpentSeconds,
      avgSecondsPerQuestion,
      domainStats,
      weakestDomainKey
    };
  }, [filteredQuestions, userAnswers, flaggedQuestions, tryoutInitialDuration, tryoutTimeLeft]);

  // CBT Learning Progress Stats
  const cbtProgressStats = useMemo(() => {
    const total = filteredQuestions.length;
    let answered = 0;
    let flagged = 0;
    filteredQuestions.forEach((q) => {
      if (userAnswers[q.id]) answered++;
      if (flaggedQuestions[q.id]) flagged++;
    });
    const percent = total > 0 ? Math.round((answered / total) * 100) : 0;
    return { answered, flagged, total, percent };
  }, [filteredQuestions, userAnswers, flaggedQuestions]);

  // CBT Tryout & Review Handlers
  const handleSelectTryoutPreset = (preset: 'quick' | 'mini' | 'standard' | 'uktvf180' | 'ukmppai200' | 'full') => {
    setTryoutPreset(preset);
    let count = 15;
    if (preset === 'quick') count = 15;
    else if (preset === 'mini') count = 50;
    else if (preset === 'standard') count = 100;
    else if (preset === 'uktvf180') count = 180;
    else if (preset === 'ukmppai200') count = 200;
    else if (preset === 'full') count = filteredQuestions.length;

    const dur = count * 60;
    setTryoutInitialDuration(dur);
    setTryoutTimeLeft(dur);
    setUserAnswers({});
    setFlaggedQuestions({});
    setCurrentQuestionIndex(0);
    setIsTryoutSubmitted(false);
    setIsReviewMode(false);
    setIsConfirmSubmitOpen(false);
    setIsTimerRunning(true);
    setCbtMode('tryout');
    setTryoutSessionKey(prev => prev + 1);
  };

  const handleConfirmSubmit = () => {
    setIsConfirmSubmitOpen(false);
    setIsTryoutSubmitted(true);
    setIsTimerRunning(false);
    setIsReviewMode(false);
  };

  const handleStartReview = () => {
    setIsReviewMode(true);
    setCurrentQuestionIndex(0);
    setPaletteStatusFilter('all');
  };

  const handleBackToScorecard = () => {
    setIsReviewMode(false);
  };

  const handleResetTryout = () => {
    handleSelectTryoutPreset(tryoutPreset);
  };

  // Keyboard Shortcuts for CBT
  React.useEffect(() => {
    if (activeMainTab !== 'cbt' || !activeQuestion || isConfirmSubmitOpen || (isTryoutSubmitted && !isReviewMode)) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const tag = target?.tagName?.toLowerCase();
      if (tag === 'input' || tag === 'textarea' || tag === 'select' || target?.isContentEditable) return;

      const key = e.key.toUpperCase();
      if (['A', 'B', 'C', 'D', 'E'].includes(key)) {
        e.preventDefault();
        setUserAnswers(prev => ({ ...prev, [activeQuestion.id]: key as 'A' | 'B' | 'C' | 'D' | 'E' }));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentQuestionIndex(prev => Math.max(0, prev - 1));
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        setCurrentQuestionIndex(prev => Math.min(filteredQuestions.length - 1, prev + 1));
      } else if (key === 'F') {
        e.preventDefault();
        setFlaggedQuestions(prev => ({ ...prev, [activeQuestion.id]: !prev[activeQuestion.id] }));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeMainTab, activeQuestion, filteredQuestions.length]);

  // Active OSCE Stations filtered by portal
  const portalOsceStations = useMemo(() => {
    if (isUktvk) {
      const uktvkIds = [
        'osce-dry-syrup-bud',
        'osce-compounding-capsule-child',
        'osce-tablet-qc',
        'osce-coldchain-warehouse',
        'osce-narcotics-sp-sipnap',
        'osce-inhaler',
        'osce-insulin-pen',
        'osce-eye-ear-drops',
        'osce-suppositoria',
        'osce-swamedikasi-diare'
      ];
      return OSCE_STATIONS.filter(s => uktvkIds.includes(s.id));
    }
    return OSCE_STATIONS;
  }, [isUktvk]);

  // Active OSCE Station
  const activeOsceStation = useMemo(() => {
    return portalOsceStations.find(s => s.id === selectedOsceId) || portalOsceStations[0] || OSCE_STATIONS[0];
  }, [portalOsceStations, selectedOsceId]);

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

  // Portal-filtered Flashcards pool
  const portalFlashcardsPool = useMemo(() => {
    return FLASHCARD_DECK.filter((card) => {
      return isUktvk ? card.targetExam === 'uktvk' : card.targetExam !== 'uktvk';
    });
  }, [isUktvk]);

  // Filtered Flashcards with Category
  const filteredFlashcards = useMemo(() => {
    return portalFlashcardsPool.filter((card) => {
      if (flashcardCategory === 'all') return true;
      return card.category === flashcardCategory;
    });
  }, [portalFlashcardsPool, flashcardCategory]);

  // Counts by exam level for the current active subtab
  const examLevelCounts = useMemo(() => {
    const isUktvkItem = (item: any) => {
      if (item.targetExam === 'uktvk') return true;
      if (item.targetExam === 'ukmppai' || item.targetExam === 'all') return false;
      if (item.id && typeof item.id === 'string') {
        const num = parseInt(item.id.replace(/\D/g, ''), 10);
        if (!isNaN(num) && num >= 654 && num <= 1120) return true;
      }
      return false;
    };

    if (activeMainTab === 'topics') {
      const all = HIGH_YIELD_TOPICS.length;
      const ukmppai = HIGH_YIELD_TOPICS.filter(t => !t.targetExam || t.targetExam === 'all' || t.targetExam === 'ukmppai').length;
      const uktvk = HIGH_YIELD_TOPICS.filter(t => t.targetExam === 'uktvk' || t.targetExam === 'all').length;
      return { all, ukmppai, uktvk, label: 'Topik' };
    }
    if (activeMainTab === 'cbt') {
      const all = EXAM_QUESTION_BANK.length;
      const uktvk = EXAM_QUESTION_BANK.filter(isUktvkItem).length;
      const ukmppai = all - uktvk;
      return { all, ukmppai, uktvk, label: 'Soal' };
    }
    if (activeMainTab === 'flashcards') {
      const all = FLASHCARD_DECK.length;
      const ukmppai = FLASHCARD_DECK.filter(c => !c.targetExam || c.targetExam === 'all' || c.targetExam === 'ukmppai').length;
      const uktvk = FLASHCARD_DECK.filter(c => c.targetExam === 'uktvk').length;
      return { all, ukmppai, uktvk, label: 'Kartu' };
    }
    const all = EXAM_QUESTION_BANK.length;
    const uktvk = EXAM_QUESTION_BANK.filter(isUktvkItem).length;
    const ukmppai = all - uktvk;
    return { all, ukmppai, uktvk, label: 'Item' };
  }, [activeMainTab]);

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
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    if (hrs > 0) {
      return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6 pb-16 animate-fade-in font-sans">
      {/* Hero Header Section - DYNAMIC PER PORTAL */}
      <div className={`relative overflow-hidden rounded-3xl p-6 sm:p-8 text-white border shadow-2xl transition-all ${
        isUktvk
          ? 'bg-gradient-to-br from-[#021817] via-[#052e2a] to-[#0a4740] border-teal-500/30'
          : 'bg-gradient-to-br from-[#030e0a] via-[#082218] to-[#0d3626] border-emerald-500/25'
      }`}>
        <FloatingPillsBackground density="low" accentColor={isUktvk ? '#2dd4bf' : '#34d399'} />
        <div className={`absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 rounded-full blur-3xl pointer-events-none ${
          isUktvk ? 'bg-teal-500/15' : 'bg-emerald-500/15'
        }`} />
        <div className="absolute -right-6 -bottom-6 opacity-10 pointer-events-none hidden sm:block">
          {isUktvk ? (
            <FlaskConical className="w-64 h-64 text-teal-400 -rotate-12" />
          ) : (
            <GraduationCap className="w-64 h-64 text-emerald-400 -rotate-12" />
          )}
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold font-outfit border ${
              isUktvk
                ? 'bg-teal-500/20 text-teal-300 border-teal-500/30'
                : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
            }`}>
              {isUktvk ? (
                <>
                  <FlaskConical className="w-3.5 h-3.5 text-teal-400" />
                  <span>Portal Khusus Tenaga Vokasi Farmasi (D3/D4) - Standar APDFI &amp; PAFI</span>
                </>
              ) : (
                <>
                  <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Portal Khusus Calon Apoteker Indonesia - Standar KFN &amp; IAI</span>
                </>
              )}
            </div>

            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-2xl text-white flex items-center justify-center shadow-lg shrink-0 ${
                isUktvk
                  ? 'bg-gradient-to-br from-teal-500 to-cyan-600 shadow-teal-950/50'
                  : 'bg-gradient-to-br from-emerald-500 to-amber-600 shadow-emerald-950/50'
              }`}>
                {isUktvk ? (
                  <FlaskConical className="w-6 h-6" />
                ) : (
                  <GraduationCap className="w-6 h-6" />
                )}
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-black font-outfit tracking-tight">
                  {isUktvk ? 'Pusat Belajar UKTVF (Vokasi Farmasi D3)' : 'Pusat Belajar UKMPPAI (Profesi Apoteker)'}
                </h1>
                <p className="text-xs sm:text-sm text-emerald-100/80 font-medium">
                  {isUktvk
                    ? `Platform akselerasi kelulusan Uji Kompetensi Tenaga Vokasi Farmasi: ${filteredQuestions.length} bank soal CBT autentik APDFI, praktikum evaluasi mutu fisik, perhitungan % DM FI III, pengenceran serbuk, & flashcards vokasi.`
                    : `Platform akselerasi kelulusan UKMPPAI (CBT & OSCE): 4 Domain Blueprint KFN, ${filteredQuestions.length} bank soal kasus klinis autentik, simulasi CBT 200 soal/200 menit, & panduan ${portalOsceStations.length} stase OSCE apoteker.`}
                </p>
              </div>
            </div>

            {/* Feature Highlights Pills */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs">
              <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border ${
                isUktvk 
                  ? 'bg-teal-950/60 border-teal-800/50 text-teal-200' 
                  : 'bg-emerald-950/60 border-emerald-800/50 text-emerald-200'
              }`}>
                <Layers className={`w-3.5 h-3.5 shrink-0 ${isUktvk ? 'text-teal-400' : 'text-emerald-400'}`} />
                <span>{isUktvk ? '4 Bidang Blueprint APDFI (D3)' : '4 Domain Blueprint KFN (Apoteker)'}</span>
              </div>
              <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border ${
                isUktvk 
                  ? 'bg-teal-950/60 border-teal-800/50 text-teal-200' 
                  : 'bg-emerald-950/60 border-emerald-800/50 text-emerald-200'
              }`}>
                <BookOpen className={`w-3.5 h-3.5 shrink-0 ${isUktvk ? 'text-teal-400' : 'text-emerald-400'}`} />
                <span>{portalTopics.length} Topik High-Yield &amp; Kasus Klinis</span>
              </div>
              <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border ${
                isUktvk 
                  ? 'bg-teal-950/60 border-teal-800/50 text-teal-200' 
                  : 'bg-emerald-950/60 border-emerald-800/50 text-emerald-200'
              }`}>
                <Target className={`w-3.5 h-3.5 shrink-0 ${isUktvk ? 'text-cyan-400' : 'text-amber-400'}`} />
                <span>{portalOsceStations.length} Stase {isUktvk ? 'Praktik' : 'OSCE'} &amp; {portalFlashcardsPool.length} Flashcard</span>
              </div>
            </div>
          </div>

          {/* Right Hero Badge: Database Status */}
          <div className="flex flex-col gap-3 lg:w-72 shrink-0 relative z-10">
            <div className={`bg-black/60 backdrop-blur-md p-4 rounded-2xl border space-y-2.5 shadow-xl ${
              isUktvk ? 'border-teal-500/40' : 'border-emerald-500/40'
            }`}>
              <div className={`flex items-center justify-between text-xs font-bold border-b pb-2 ${
                isUktvk ? 'text-teal-300 border-teal-800/60' : 'text-emerald-300 border-emerald-800/60'
              }`}>
                <span className="flex items-center gap-1.5 font-black font-outfit">
                  <Activity className={`w-3.5 h-3.5 ${isUktvk ? 'text-teal-400' : 'text-emerald-400'}`} />
                  <span>Status Database</span>
                </span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-black border ${
                  isUktvk 
                    ? 'bg-teal-950 text-teal-300 border-teal-600/40' 
                    : 'bg-emerald-950 text-emerald-300 border-emerald-600/40'
                }`}>
                  {filteredQuestions.length} Soal Terverifikasi
                </span>
              </div>
              <div className={`text-xs space-y-1.5 font-medium ${
                isUktvk ? 'text-teal-100/80' : 'text-emerald-100/80'
              }`}>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Topik High-Yield:</span>
                  <span className={`font-bold ${isUktvk ? 'text-teal-200' : 'text-emerald-200'}`}>
                    {portalTopics.length} Modul Inti
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Stase Uji Praktik:</span>
                  <span className={`font-bold ${isUktvk ? 'text-teal-200' : 'text-emerald-200'}`}>
                    {portalOsceStations.length} Stase {isUktvk ? 'Vokasi' : 'OSCE'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Flashcard &amp; Rumus:</span>
                  <span className={`font-bold ${isUktvk ? 'text-cyan-300' : 'text-amber-300'}`}>
                    {portalFlashcardsPool.length} Kartu / {FORMULA_GUIDES.length} Rumus
                  </span>
                </div>
                <div className={`flex justify-between items-center pt-1 border-t text-[10px] ${
                  isUktvk ? 'border-teal-900/40 text-teal-300/80' : 'border-emerald-900/40 text-emerald-300/80'
                }`}>
                  <span>Standar Acuan:</span>
                  <span className="font-bold text-white">
                    {isUktvk ? 'Blueprint APDFI & PAFI' : 'Blueprint KFN & IAI'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Portal Switcher & Status Bar */}
      <div className={`p-3.5 rounded-2xl border shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3 ${
        isUktvk
          ? 'bg-gradient-to-r from-teal-950/40 via-slate-900 to-slate-900/90 border-teal-500/30'
          : 'bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900/90 border-emerald-500/30'
      }`}>
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-xl border flex items-center justify-center shrink-0 ${
            isUktvk
              ? 'bg-teal-500/20 text-teal-400 border-teal-500/30'
              : 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
          }`}>
            {isUktvk ? <FlaskConical className="w-4 h-4" /> : <GraduationCap className="w-4 h-4" />}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-black text-white font-outfit uppercase tracking-wider">
                Portal Aktif: {isUktvk ? 'UKTVF (Tenaga Vokasi D3)' : 'UKMPPAI (Profesi Apoteker)'}
              </span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold border ${
                isUktvk
                  ? 'bg-teal-500/20 text-teal-300 border-teal-500/30'
                  : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
              }`}>
                {isUktvk ? `${filteredQuestions.length} Soal CBT Autentik` : `${filteredQuestions.length} Soal Kasus CBT`}
              </span>
            </div>
            <p className="text-[11px] text-slate-400 mt-0.5">
              {isUktvk
                ? 'Materi, bank soal, dan simulasi terisolasi khusus kurikulum D3 Farmasi APDFI & PAFI.'
                : 'Materi, bank soal kasus, dan simulasi terisolasi khusus calon Apoteker (Blueprint KFN).'}
            </p>
          </div>
        </div>

        {isUktvk ? (
          <button
            onClick={() => {
              if (onSelectTab) {
                onSelectTab('competency');
              } else {
                setSelectedExamLevel('ukmppai');
              }
              setCurrentQuestionIndex(0);
              setCurrentFlashcardIdx(0);
            }}
            className="w-full sm:w-auto px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-500 hover:to-amber-500 text-white text-xs font-extrabold flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer shrink-0 font-outfit"
          >
            <GraduationCap className="w-4 h-4" />
            <span>Beralih ke Portal UKMPPAI (Apoteker)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        ) : (
          <button
            onClick={() => {
              if (onSelectTab) {
                onSelectTab('competency-vokasi');
              } else {
                setSelectedExamLevel('uktvk');
              }
              setCurrentQuestionIndex(0);
              setCurrentFlashcardIdx(0);
            }}
            className="w-full sm:w-auto px-4 py-2 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white text-xs font-extrabold flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer shrink-0 font-outfit"
          >
            <FlaskConical className="w-4 h-4" />
            <span>Beralih ke Portal UKTVF (Vokasi D3)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Main Subtab Navigation Bar - Royal Emerald & Teal Suite */}
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
          <span>Rangkuman {isUktvk ? 'Materi Vokasi' : '4 Domain KFN'}</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/20 text-white font-bold">
            {portalTopics.length} Topik
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
          <span>Bank Soal &amp; Tryout CBT</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/20 text-white font-bold">
            {filteredQuestions.length} Soal
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
          <span>Kalkulator &amp; Rumus Cepat</span>
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
          <span>{isUktvk ? 'Panduan Praktikum Vokasi' : 'Panduan Stasi OSCE'}</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/20 text-white font-bold">
            {portalOsceStations.length} Stase
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
          <span>Flashcard &amp; Hafalan Cepat</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/20 text-white font-bold">
            {portalFlashcardsPool.length} Kartu
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
                  {isUktvk 
                    ? 'Kompilasi materi vokasi 4 bidang APDFI & standar pelayanan kefarmasian.'
                    : 'Kompilasi seluruh materi uji kompetensi 4 domain blueprint KFN.'}
                </p>
              </div>
              <div className="mt-3 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <span>{portalTopics.length} Materi {isUktvk ? 'Vokasi' : 'Inti'}</span>
                <ChevronRight className="w-3 h-3" />
              </div>
            </button>

            {currentDomains.map((domain) => {
              const isSelected = selectedDomainFilter === domain.id;
              const topicCount = portalTopics.filter(t => t.domainId === domain.id).length;
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

          {/* Search Bar & Quick Chips */}
          <div className="space-y-2">
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
            {/* Quick Topic Chips */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="text-[11px] font-bold text-slate-400 mr-1 font-outfit">Topik Favorit:</span>
              {(isUktvk
                ? ['Skrining Resep', 'DOWA', '% DM', 'Kateter & NGT', 'Cold Chain', 'Uji Tablet', 'Maserasi & Jamu', 'BKO']
                : ['Hipertensi', 'Diabetes', 'TB & Infeksi', 'Ginjal', 'Onkologi', 'ABC-VEN', 'CPOB & Disolusi', 'Standardisasi FHI']
              ).map((term) => {
                const isActive = topicSearchQuery.toLowerCase() === term.toLowerCase();
                return (
                  <button
                    key={term}
                    type="button"
                    onClick={() => setTopicSearchQuery(isActive ? '' : term)}
                    className={`px-2.5 py-1 rounded-xl text-[11px] font-bold transition-all cursor-pointer font-outfit ${
                      isActive
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-700 dark:hover:text-emerald-300'
                    }`}
                  >
                    {term}
                  </button>
                );
              })}
              {topicSearchQuery && (
                <button
                  type="button"
                  onClick={() => setTopicSearchQuery('')}
                  className="px-2 py-1 rounded-xl text-[11px] font-bold text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-all cursor-pointer font-outfit"
                >
                  Reset Pencarian
                </button>
              )}
            </div>
          </div>

          {/* High-Yield Topics List */}
          <div className="space-y-4">
            {filteredTopics.map((topic: HighYieldTopic) => {
              const isExpanded = expandedTopicId === topic.id;
              const domainInfo = currentDomains.find(d => d.id === topic.domainId);

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
                            🔬 UKTVF
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
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-[#0c141d] border border-slate-200 dark:border-slate-800 shadow-sm">
            {/* Mode Switcher & Presets */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-800">
                <button
                  onClick={() => {
                    setCbtMode('study');
                    setIsTryoutSubmitted(false);
                    setIsReviewMode(false);
                    setIsTimerRunning(false);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer font-outfit ${
                    cbtMode === 'study'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                  }`}
                >
                  Mode Belajar (Instant Rationale)
                </button>
                <button
                  onClick={() => {
                    setCbtMode('tryout');
                    if (!isTryoutSubmitted && !isTimerRunning) setIsTimerRunning(true);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer font-outfit ${
                    cbtMode === 'tryout'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                  }`}
                >
                  Mode Tryout CBT (Berwaktu)
                </button>
              </div>

              {/* Tryout Preset Selector (Only in Tryout Mode & Before Submit) */}
              {cbtMode === 'tryout' && !isTryoutSubmitted && (
                <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-[11px] font-bold font-outfit">
                  <span className="text-[10px] text-slate-400 font-mono px-1.5">Paket:</span>
                  <button
                    onClick={() => handleSelectTryoutPreset('quick')}
                    className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                      tryoutPreset === 'quick' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    15 Soal
                  </button>
                  <button
                    onClick={() => handleSelectTryoutPreset('mini')}
                    className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                      tryoutPreset === 'mini' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    50 Soal
                  </button>
                  <button
                    onClick={() => handleSelectTryoutPreset('standard')}
                    className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                      tryoutPreset === 'standard' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    100 Soal
                  </button>
                  {isUktvk ? (
                    <button
                      onClick={() => handleSelectTryoutPreset('uktvf180')}
                      className={`px-3 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 font-bold ${
                        tryoutPreset === 'uktvf180'
                          ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-xs font-black ring-2 ring-teal-400/40'
                          : 'text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800/60 hover:bg-teal-100 dark:hover:bg-teal-900/40'
                      }`}
                    >
                      <Award className="w-3 h-3" />
                      <span>180 Soal (Simulasi Standar UKTVF)</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => handleSelectTryoutPreset('ukmppai200')}
                      className={`px-3 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 font-bold ${
                        tryoutPreset === 'ukmppai200'
                          ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-xs font-black ring-2 ring-amber-400/40'
                          : 'text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 hover:bg-amber-100 dark:hover:bg-amber-900/40'
                      }`}
                    >
                      <Trophy className="w-3 h-3" />
                      <span>200 Soal (Simulasi Standar UKMPPAI)</span>
                    </button>
                  )}
                  <button
                    onClick={() => handleSelectTryoutPreset('full')}
                    className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                      tryoutPreset === 'full' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    Penuh ({filteredQuestions.length})
                  </button>
                  {/* Shuffle Toggle Button */}
                  <button
                    onClick={() => {
                      setIsShuffleEnabled(prev => !prev);
                      setTryoutSessionKey(prev => prev + 1);
                    }}
                    title={isShuffleEnabled ? 'Mode Acak Soal Aktif (Stratified Shuffle)' : 'Mode Urut Sesuai Bank Soal'}
                    className={`ml-1 px-2.5 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1 text-[11px] font-bold ${
                      isShuffleEnabled 
                        ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 shadow-2xs' 
                        : 'bg-slate-200/60 dark:bg-slate-700 text-slate-500 dark:text-slate-400 hover:bg-slate-300'
                    }`}
                  >
                    <Shuffle className="w-3 h-3" />
                    <span>{isShuffleEnabled ? 'Acak: ON' : 'Acak: OFF'}</span>
                  </button>
                </div>
              )}
            </div>

            {/* Timer & Domain Filter */}
            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto justify-between lg:justify-end">
              {cbtMode === 'tryout' && !isTryoutSubmitted && (
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 text-emerald-400 border border-slate-700 font-mono text-xs font-black shadow-xs">
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
                <option value="all">Semua Domain ({filteredQuestions.length} Soal)</option>
                <option value="klinis">{isUktvk ? 'Farmasi Komunitas & KIE' : 'Farmasi Klinis'}</option>
                <option value="manajemen">{isUktvk ? 'Alkes BMHP & Logistik' : 'Manajemen & Hukum'}</option>
                <option value="teknologi">{isUktvk ? 'Teknologi & QC Sediaan' : 'Teknologi & CPOB'}</option>
                <option value="bahan_alam">{isUktvk ? 'Bahan Alam & Jamu' : 'Bahan Alam'}</option>
              </select>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* VIEW A: RAPOR KELULUSAN RESMI (SCORECARD & BLUEPRINT ANALYTICS)           */}
          {/* ========================================================================= */}
          {cbtMode === 'tryout' && isTryoutSubmitted && !isReviewMode ? (
            <div className="space-y-6 animate-fade-in font-outfit">
              {/* 1. Hero Graduation Result Card */}
              <div className={`relative overflow-hidden rounded-3xl p-6 sm:p-8 border shadow-2xl transition-all ${
                tryoutScore.isPassed
                  ? 'bg-gradient-to-br from-emerald-950 via-[#072418] to-[#041710] border-emerald-500/50 text-white'
                  : 'bg-gradient-to-br from-slate-950 via-rose-950/40 to-slate-900 border-rose-500/40 text-white'
              }`}>
                <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="space-y-3 max-w-2xl">
                    <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-xs ${
                      tryoutScore.isPassed 
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' 
                        : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                    }`}>
                      {tryoutScore.isPassed ? (
                        <>
                          <Award className="w-4 h-4 text-emerald-400" />
                          <span>Status Resmi: Memenuhi Nilai Batas Lulus (NBL)</span>
                        </>
                      ) : (
                        <>
                          <AlertTriangle className="w-4 h-4 text-rose-400" />
                          <span>Status Resmi: Belum Memenuhi Nilai Batas Lulus (NBL)</span>
                        </>
                      )}
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
                      {tryoutScore.isPassed ? (
                        <span>🎉 SELAMAT! ANDA DINYATAKAN <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-emerald-400">LULUS (KOMPETEN)</span></span>
                      ) : (
                        <span>⚠️ HASIL SIMULASI: <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-300 to-rose-300">PERLU REMEDIAL</span></span>
                      )}
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl font-normal">
                      {tryoutScore.isPassed ? (
                        `Skor akhir Anda berhasil mencapai ${tryoutScore.percentage}%, melampaui Nilai Batas Lulus (NBL) acuan ${(selectedExamLevel === 'uktvk' || tryoutPreset === 'uktvf180') ? 'APDFI Vokasi Farmasi (D3/TTK)' : 'Standar Nasional UKMPPAI (Apoteker)'} sebesar ${tryoutScore.passingGrade}%. Terus jaga ketajaman analisis klinis dan kalkulasi farmasi Anda!`
                      ) : (
                        `Skor akhir Anda sebesar ${tryoutScore.percentage}% masih berada di bawah Nilai Batas Lulus (NBL) acuan ${(selectedExamLevel === 'uktvk' || tryoutPreset === 'uktvf180') ? 'APDFI Vokasi Farmasi (D3/TTK)' : 'Standar Nasional UKMPPAI (Apoteker)'} (${tryoutScore.passingGrade}%). Manfaatkan review pembahasan untuk memperbaiki miskonsepsi klinis pada domain terlemah.`
                      )}
                    </p>
                  </div>

                  {/* Big Score Stamp Badge */}
                  <div className="flex flex-col items-center justify-center p-6 rounded-3xl bg-black/40 border border-white/10 backdrop-blur-md shrink-0 text-center min-w-[190px] shadow-2xl">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Skor Akhir Ujian</span>
                    <div className={`text-4xl sm:text-5xl font-black font-mono mt-1 ${
                      tryoutScore.isPassed ? 'text-emerald-400' : 'text-rose-400'
                    }`}>
                      {tryoutScore.percentage}%
                    </div>
                    <div className="mt-2 text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-white/10 text-slate-300">
                      NBL Acuan: {tryoutScore.passingGrade}% ({tryoutScore.isPassed ? `+${(tryoutScore.percentage - tryoutScore.passingGrade).toFixed(1)}%` : `-${(tryoutScore.passingGrade - tryoutScore.percentage).toFixed(1)}%`})
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Four Core Performance Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Metric 1: Skor & Ketepatan */}
                <div className="p-4.5 rounded-2xl bg-white dark:bg-[#0c141d] border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                    <span>Rasio Jawaban Benar</span>
                    <Trophy className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div className="text-2xl font-black text-slate-900 dark:text-white font-mono">
                    {tryoutScore.correctCount} <span className="text-sm font-bold text-slate-400">/ {tryoutScore.total} Soal</span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Tingkat ketuntasan: <strong className="text-emerald-600 dark:text-emerald-400">{tryoutScore.percentage}%</strong>
                  </p>
                </div>

                {/* Metric 2: Rincian Butir Soal */}
                <div className="p-4.5 rounded-2xl bg-white dark:bg-[#0c141d] border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                    <span>Rincian Lembar Jawaban</span>
                    <Layers className="w-4 h-4 text-blue-500" />
                  </div>
                  <div className="flex items-center gap-1.5 pt-1">
                    <span className="px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-black">
                      {tryoutScore.correctCount} Benar
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 text-xs font-black">
                      {tryoutScore.incorrectCount} Salah
                    </span>
                    {tryoutScore.unansweredCount > 0 && (
                      <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-black">
                        {tryoutScore.unansweredCount} Kosong
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500">
                    {tryoutScore.flaggedCount > 0 ? `${tryoutScore.flaggedCount} butir sempat ditandai ragu.` : 'Tidak ada butir bertanda ragu.'}
                  </p>
                </div>

                {/* Metric 3: Waktu Pengerjaan */}
                <div className="p-4.5 rounded-2xl bg-white dark:bg-[#0c141d] border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                    <span>Kecepatan Pengerjaan</span>
                    <Clock className="w-4 h-4 text-amber-500" />
                  </div>
                  <div className="text-2xl font-black text-slate-900 dark:text-white font-mono">
                    {tryoutScore.avgSecondsPerQuestion} <span className="text-sm font-bold text-slate-400">detik / soal</span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Total waktu: <strong>{formatTimer(tryoutScore.timeSpentSeconds)}</strong> • {tryoutScore.avgSecondsPerQuestion <= 60 ? '⚡ Kecepatan ideal (≤60s)' : '⚠️ Cenderung lambat (>60s)'}
                  </p>
                </div>

                {/* Metric 4: Akurasi Jawaban Terisi */}
                <div className="p-4.5 rounded-2xl bg-white dark:bg-[#0c141d] border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                    <span>Akurasi Soal Terjawab</span>
                    <Target className="w-4 h-4 text-purple-500" />
                  </div>
                  <div className="text-2xl font-black text-slate-900 dark:text-white font-mono">
                    {cbtProgressStats.answered > 0 ? Math.round((tryoutScore.correctCount / cbtProgressStats.answered) * 100) : 0}%
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Dari {cbtProgressStats.answered} soal yang diisi ({tryoutScore.unansweredCount} dikosongkan).
                  </p>
                </div>
              </div>

              {/* 3. National Blueprint 4-Domain Analysis */}
              <div className="p-6 rounded-3xl bg-white dark:bg-[#0c141d] border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">
                        Analisis Capaian 4 Domain Blueprint Nasional
                      </h3>
                      <p className="text-xs text-slate-500">
                        Peta penguasaan materi Anda berdasarkan kurikulum blueprint resmi UKMPPAI & UKTVF
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 font-mono hidden sm:inline">
                    Nilai Batas Lulus: {isUktvk ? '55% (Standar APDFI)' : '68.5% (Standar Nasional KFN/IAI)'}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                  {currentDomains.map((domain) => {
                    const stat = tryoutScore.domainStats[domain.id];
                    if (!stat || stat.total === 0) return null;

                    const domainPassingGrade = isUktvk ? 55.0 : 68.5;
                    const isDomainPassed = stat.percent >= domainPassingGrade;
                    const isStrong = stat.percent >= (domainPassingGrade + 10.0);

                    let statusLabel = 'Kritis / Prioritas Remedial';
                    let statusBadge = 'bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-800';
                    let barColor = 'from-rose-500 to-amber-500';

                    if (isStrong) {
                      statusLabel = 'Kuat / Sangat Menguasai';
                      statusBadge = 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800';
                      barColor = 'from-emerald-500 to-teal-500';
                    } else if (isDomainPassed) {
                      statusLabel = 'Cukup / Perlu Penguatan';
                      statusBadge = 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-800';
                      barColor = 'from-amber-500 to-yellow-500';
                    }

                    return (
                      <div
                        key={domain.id}
                        className="p-4 rounded-2xl bg-slate-50/70 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80 space-y-3"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-black text-slate-900 dark:text-white">
                                {domain.name}
                              </span>
                              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                                Bobot {domain.weightPercentage}
                              </span>
                            </div>
                            <span className="text-[11px] text-slate-500 font-mono">
                              {stat.correct} dari {stat.total} soal benar ({stat.incorrect} salah)
                            </span>
                          </div>

                          <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${statusBadge}`}>
                            {statusLabel}
                          </span>
                        </div>

                        {/* Domain Progress Bar */}
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-[11px] font-bold font-mono">
                            <span className="text-slate-600 dark:text-slate-400">Capaian Domain:</span>
                            <span className={isDomainPassed ? 'text-emerald-600 dark:text-emerald-400 font-black' : 'text-rose-600 dark:text-rose-400 font-black'}>
                              {stat.percent}%
                            </span>
                          </div>
                          <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${barColor} rounded-full transition-all duration-500`}
                              style={{ width: `${stat.percent}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 4. Personalized Remedial Action Plan */}
              <div className="p-5 sm:p-6 rounded-3xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-black uppercase tracking-wider text-amber-900 dark:text-amber-300">
                      Rekomendasi Remedial Berdasarkan Analisis Kelemahan
                    </h4>
                    <p className="text-xs text-amber-800/90 dark:text-amber-300/80 leading-relaxed max-w-2xl">
                      Capaian Anda paling rendah pada domain <strong className="underline decoration-amber-500 underline-offset-2">{currentDomains.find(d => d.id === tryoutScore.weakestDomainKey)?.name}</strong> ({tryoutScore.domainStats[tryoutScore.weakestDomainKey]?.percent}%). Disarankan membaca ulang rangkuman materi dan rumus cepat terkait sebelum mengulang simulasi.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setActiveMainTab('topics');
                    setSelectedDomainFilter(tryoutScore.weakestDomainKey);
                  }}
                  className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-all cursor-pointer shrink-0 shadow-md flex items-center gap-1.5"
                >
                  <span>Buka Materi Domain Ini</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* 5. Post-Exam Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-3xl bg-white dark:bg-[#0c141d] border border-slate-200 dark:border-slate-800 shadow-xl">
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={handleStartReview}
                    className="px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs font-black shadow-lg shadow-emerald-600/25 transition-all cursor-pointer flex items-center gap-2 font-outfit"
                  >
                    <Search className="w-4 h-4" />
                    <span>🔍 Tinjau Ulang & Pembahasan Lengkap (Review Mode)</span>
                  </button>

                  <button
                    onClick={handleResetTryout}
                    className="px-5 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold transition-all cursor-pointer flex items-center gap-2 font-outfit"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Ulangi Tryout Baru</span>
                  </button>
                </div>

                <button
                  onClick={() => setActiveMainTab('topics')}
                  className="text-xs font-bold text-slate-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>Pelajari Rangkuman 4 Domain</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ) : (
            /* ========================================================================= */
            /* VIEW B: QUESTION & EXAM PALETTE (STUDY, TRYOUT IN PROGRESS, REVIEW)       */
            /* ========================================================================= */
            <>
              {/* Review Mode Banner */}
              {isReviewMode && (
                <div className="p-4 rounded-2xl bg-slate-900 text-white border border-emerald-500/40 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-fade-in font-outfit">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={handleBackToScorecard}
                      className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-bold text-slate-200 transition-colors cursor-pointer flex items-center gap-1 shrink-0"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      <span>Kembali ke Rapor Skor</span>
                    </button>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black text-emerald-400 uppercase tracking-wider">
                          Mode Tinjauan Ujian (Exam Review Mode)
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          Skor Anda: {tryoutScore.percentage}% ({tryoutScore.correctCount}/{tryoutScore.total} Benar)
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400">
                        Periksa kunci jawaban resmi, jawaban Anda, serta pembahasan rasional klinis per nomor soal.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-bold shrink-0">
                    <span className="text-[10px] text-slate-400 font-mono hidden sm:inline">Filter:</span>
                    <button
                      onClick={() => setPaletteStatusFilter('all')}
                      className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                        paletteStatusFilter === 'all' ? 'bg-emerald-600 text-white font-black' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      Semua
                    </button>
                    <button
                      onClick={() => setPaletteStatusFilter('incorrect')}
                      className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                        paletteStatusFilter === 'incorrect' ? 'bg-rose-600 text-white font-black' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      Salah ({tryoutScore.incorrectCount})
                    </button>
                    <button
                      onClick={() => setPaletteStatusFilter('correct')}
                      className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                        paletteStatusFilter === 'correct' ? 'bg-emerald-600 text-white font-black' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      Benar ({tryoutScore.correctCount})
                    </button>
                  </div>
                </div>
              )}

              {/* Real-Time Learning Progress & Reader Tools Bar */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-[#0c141d] border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-2.5">
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-bold text-slate-700 dark:text-slate-300">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-outfit">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{cbtProgressStats.answered} / {filteredQuestions.length} Terjawab ({cbtProgressStats.percent}%)</span>
                    </span>
                    {cbtProgressStats.flagged > 0 && (
                      <span className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 text-[11px]">
                        <Flag className="w-3 h-3" />
                        <span>{cbtProgressStats.flagged} Ragu</span>
                      </span>
                    )}
                    <span className="text-slate-400 dark:text-slate-500 text-[11px] font-normal hidden sm:inline">
                      • Sisa {cbtProgressStats.total - cbtProgressStats.answered} soal
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    {/* Font Size Comfort Adjuster */}
                    <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800/90 rounded-xl p-1 text-[11px] font-bold border border-slate-200/60 dark:border-slate-700/60">
                      <span className="text-[10px] text-slate-400 px-1 font-mono">Teks:</span>
                      <button
                        onClick={() => setCbtTextSize('sm')}
                        title="Font Ringkas"
                        className={`px-2 py-0.5 rounded-lg transition-all cursor-pointer font-bold ${
                          cbtTextSize === 'sm' ? 'bg-white dark:bg-slate-700 text-emerald-600 dark:text-emerald-400 shadow-xs' : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'
                        }`}
                      >
                        A-
                      </button>
                      <button
                        onClick={() => setCbtTextSize('base')}
                        title="Font Normal"
                        className={`px-2 py-0.5 rounded-lg transition-all cursor-pointer font-bold ${
                          cbtTextSize === 'base' ? 'bg-white dark:bg-slate-700 text-emerald-600 dark:text-emerald-400 shadow-xs' : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'
                        }`}
                      >
                        A
                      </button>
                      <button
                        onClick={() => setCbtTextSize('lg')}
                        title="Font Besar & Nyaman"
                        className={`px-2 py-0.5 rounded-lg transition-all cursor-pointer font-bold ${
                          cbtTextSize === 'lg' ? 'bg-white dark:bg-slate-700 text-emerald-600 dark:text-emerald-400 shadow-xs' : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'
                        }`}
                      >
                        A+
                      </button>
                    </div>

                    {/* Toggle Right Panel Button */}
                    <button
                      onClick={() => setShowRightPanel(prev => !prev)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer font-outfit ${
                        showRightPanel
                          ? 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                          : 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-sm shadow-emerald-600/30'
                      }`}
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>{showRightPanel ? 'Sembunyikan Panel' : `Buka Lembar Nomor (${filteredQuestions.length})`}</span>
                    </button>
                  </div>
                </div>

                {/* Smooth Progress Bar */}
                <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800/80 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 transition-all duration-300 rounded-full"
                    style={{ width: `${cbtProgressStats.percent}%` }}
                  />
                </div>
              </div>

              {/* 2-Column Split Layout: Question on Left, Question Matrix Palette on Right */}
              {filteredQuestions.length > 0 && (
                <div className="flex flex-col lg:flex-row gap-5 items-start">
                  {/* LEFT COLUMN: Active Question Display Card */}
                  <div className="flex-1 min-w-0 w-full space-y-4">
                    {activeQuestion && (
                      <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#0c141d] border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-6 animate-fade-in">
                        {/* Question Header */}
                        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800/80 pb-4">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xs font-black font-outfit text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-3 py-1.5 rounded-xl border border-emerald-200 dark:border-emerald-800/60 shadow-xs">
                              Soal No. {currentQuestionIndex + 1} dari {filteredQuestions.length}
                            </span>
                            <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                              Tingkat: {activeQuestion.difficulty}
                            </span>
                            {activeQuestion.targetExam === 'uktvk' && (
                              <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-800">
                                🔬 Target: UKTVF
                              </span>
                            )}
                            {activeQuestion.targetExam === 'ukmppai' && (
                              <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-300 dark:border-blue-800">
                                🎓 Target: UKMPPAI
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-2">
                            {!isReviewMode && (
                              <button
                                onClick={() => {
                                  setFlaggedQuestions(prev => ({ ...prev, [activeQuestion.id]: !prev[activeQuestion.id] }));
                                }}
                                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                                  flaggedQuestions[activeQuestion.id]
                                    ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800 shadow-xs'
                                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                }`}
                              >
                                <Flag className="w-3.5 h-3.5" />
                                <span>{flaggedQuestions[activeQuestion.id] ? 'Ragu-ragu (Ditandai)' : 'Tandai Ragu (F)'}</span>
                              </button>
                            )}
                          </div>
                        </div>

                        {/* Case Vignette with Medical Scenario Box */}
                        <div className="rounded-2xl bg-slate-50/80 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80 overflow-hidden shadow-xs">
                          <div className="flex items-center justify-between px-4 py-2 bg-slate-100/70 dark:bg-slate-800/60 border-b border-slate-200/60 dark:border-slate-800 text-[11px] font-bold text-slate-600 dark:text-slate-400">
                            <div className="flex items-center gap-2">
                              <Stethoscope className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                              <span>Kasus Klinis / Skenario Farmasi (Vignette)</span>
                            </div>
                            <span className="font-mono text-[10px] text-slate-400">ID: {activeQuestion.id}</span>
                          </div>
                          <div className={`p-4 sm:p-5 leading-relaxed text-slate-800 dark:text-slate-200 font-medium ${
                            cbtTextSize === 'sm' ? 'text-xs sm:text-sm leading-relaxed' : cbtTextSize === 'lg' ? 'text-base sm:text-lg leading-loose' : 'text-sm sm:text-base leading-relaxed'
                          }`}>
                            {activeQuestion.vignette}
                          </div>
                        </div>

                        {/* Core Lead-in Question (Highlighted Callout Box) */}
                        <div className="p-4 sm:p-4.5 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-transparent dark:from-emerald-950/40 dark:via-teal-950/20 border-l-4 border-emerald-500 border-y border-r border-slate-200/60 dark:border-slate-800/80 space-y-1">
                          <div className="flex items-center gap-1.5 text-[11px] font-extrabold text-emerald-700 dark:text-emerald-400 font-outfit uppercase tracking-wider">
                            <HelpCircle className="w-3.5 h-3.5" />
                            <span>Pertanyaan Kasus Inti:</span>
                          </div>
                          <p className={`font-black text-slate-900 dark:text-white font-outfit leading-snug ${
                            cbtTextSize === 'sm' ? 'text-xs sm:text-sm' : cbtTextSize === 'lg' ? 'text-base sm:text-lg' : 'text-sm sm:text-base'
                          }`}>
                            {activeQuestion.question}
                          </p>
                        </div>

                        {/* Options A - E with Smart Validation Feedback */}
                        <div className="space-y-3">
                          {activeQuestion.options.map((opt) => {
                            const isSelected = userAnswers[activeQuestion.id] === opt.key;
                            const isCorrectAnswer = activeQuestion.correctAnswer === opt.key;
                            const isAnswered = Boolean(userAnswers[activeQuestion.id]);
                            const isFeedbackVisible = (cbtMode === 'study' && isAnswered) || isReviewMode;

                            let optionStyle = 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900';
                            let badge = null;

                            if (isFeedbackVisible) {
                              if (isSelected && isCorrectAnswer) {
                                optionStyle = 'border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/60 ring-2 ring-emerald-500/30 text-emerald-950 dark:text-emerald-100 font-bold';
                                badge = (
                                  <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-600 text-white flex items-center gap-1 shrink-0">
                                    <CheckCircle2 className="w-3 h-3" /> Benar!
                                  </span>
                                );
                              } else if (isSelected && !isCorrectAnswer) {
                                optionStyle = 'border-rose-500 bg-rose-50/80 dark:bg-rose-950/50 ring-2 ring-rose-500/30 text-rose-950 dark:text-rose-100';
                                badge = (
                                  <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-rose-600 text-white flex items-center gap-1 shrink-0">
                                    <X className="w-3 h-3" /> Pilihan Anda
                                  </span>
                                );
                              } else if (!isSelected && isCorrectAnswer) {
                                optionStyle = 'border-emerald-500/80 border-dashed bg-emerald-50/40 dark:bg-emerald-950/30 ring-1 ring-emerald-500/30 text-emerald-900 dark:text-emerald-200 font-semibold';
                                badge = (
                                  <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/40 flex items-center gap-1 shrink-0">
                                    <CheckCircle2 className="w-3 h-3" /> Kunci Jawaban
                                  </span>
                                );
                              }
                            } else if (isSelected) {
                              optionStyle = 'border-emerald-500 bg-emerald-50/60 dark:bg-emerald-950/40 ring-2 ring-emerald-500/20';
                            }

                            return (
                              <button
                                key={opt.key}
                                onClick={() => {
                                  if (!isReviewMode) {
                                    setUserAnswers(prev => ({ ...prev, [activeQuestion.id]: opt.key }));
                                  }
                                }}
                                className={`w-full p-3.5 sm:p-4 rounded-2xl border text-left flex items-center gap-3 transition-all ${isReviewMode ? 'cursor-default' : 'cursor-pointer'} ${optionStyle}`}
                              >
                                <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs font-outfit shrink-0 ${
                                  isSelected 
                                    ? (isFeedbackVisible && !isCorrectAnswer ? 'bg-rose-600 text-white' : 'bg-emerald-600 text-white')
                                    : (isFeedbackVisible && isCorrectAnswer ? 'bg-emerald-600/20 text-emerald-600 dark:text-emerald-400 font-black' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400')
                                }`}>
                                  {opt.key}
                                </span>
                                <span className={`flex-1 font-medium text-slate-800 dark:text-slate-200 ${
                                  cbtTextSize === 'sm' ? 'text-xs sm:text-sm' : cbtTextSize === 'lg' ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'
                                }`}>
                                  {opt.text}
                                </span>
                                {badge}
                              </button>
                            );
                          })}
                        </div>

                        {/* Authentic APDFI / CBT Exam Action Bar (Ragu-ragu & Kosongkan Jawaban) */}
                        {!isReviewMode && (
                          <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
                            {/* Checkbox Ragu-ragu (APDFI Standard) */}
                            <label className="flex items-center gap-2.5 cursor-pointer select-none text-xs font-bold text-amber-800 dark:text-amber-300">
                              <input
                                type="checkbox"
                                checked={!!flaggedQuestions[activeQuestion.id]}
                                onChange={() => {
                                  setFlaggedQuestions(prev => ({
                                    ...prev,
                                    [activeQuestion.id]: !prev[activeQuestion.id]
                                  }));
                                }}
                                className="w-4 h-4 rounded text-amber-600 focus:ring-amber-500 border-amber-400 cursor-pointer"
                              />
                              <div className="flex items-center gap-1.5">
                                <Flag className={`w-3.5 h-3.5 ${flaggedQuestions[activeQuestion.id] ? 'fill-amber-500 text-amber-500' : 'text-amber-600'}`} />
                                <span>Ragu-ragu</span>
                              </div>
                            </label>

                            {/* Tombol Kosongkan Jawaban (Standard APDFI) */}
                            {userAnswers[activeQuestion.id] && (
                              <button
                                onClick={() => {
                                  setUserAnswers(prev => {
                                    const next = { ...prev };
                                    delete next[activeQuestion.id];
                                    return next;
                                  });
                                }}
                                className="px-3 py-1 rounded-xl text-xs font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 border border-rose-200 dark:border-rose-900/40 transition-colors cursor-pointer"
                              >
                                Kosongkan Jawaban
                              </button>
                            )}
                          </div>
                        )}

                        {/* Rationale Explanation (Instant in Study Mode, or in Review Mode) */}
                        {((cbtMode === 'study' && userAnswers[activeQuestion.id]) || isReviewMode) && (
                          <div className="p-5 sm:p-6 rounded-2xl bg-emerald-50/90 dark:bg-emerald-950/40 border border-emerald-300/80 dark:border-emerald-800/80 space-y-3 animate-fade-in shadow-xs">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 text-xs font-black text-emerald-900 dark:text-emerald-300 font-outfit">
                                <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                                <span>Pembahasan Rasional Kunci Jawaban: {activeQuestion.correctAnswer}</span>
                              </div>
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-600/15 text-emerald-700 dark:text-emerald-300">
                                Rasional Klinis Resmi
                              </span>
                            </div>
                            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium whitespace-pre-line">
                              {activeQuestion.explanation}
                            </p>
                            <div className="text-[11px] text-emerald-800 dark:text-emerald-400 font-semibold pt-2 border-t border-emerald-200/60 dark:border-emerald-900/60 flex items-center gap-1.5">
                              <BookOpen className="w-3.5 h-3.5" />
                              <span>Referensi: {activeQuestion.clinicalReference}</span>
                            </div>
                          </div>
                        )}

                        {/* Navigation Footer with Keyboard Shortcuts Tip */}
                        <div className="space-y-3 pt-2">
                          <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                            <button
                              disabled={currentQuestionIndex === 0}
                              onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 disabled:opacity-40 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer font-outfit"
                            >
                              <ChevronLeft className="w-4 h-4" />
                              <span>Sebelumnya (←)</span>
                            </button>

                            <div className="text-xs font-bold text-slate-500 font-mono hidden sm:block">
                              {currentQuestionIndex + 1} / {filteredQuestions.length}
                            </div>

                            {currentQuestionIndex < filteredQuestions.length - 1 ? (
                              <button
                                onClick={() => setCurrentQuestionIndex(prev => Math.min(filteredQuestions.length - 1, prev + 1))}
                                className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md shadow-emerald-600/20 transition-all cursor-pointer font-outfit"
                              >
                                <span>Selanjutnya (→)</span>
                                <ChevronRight className="w-4 h-4" />
                              </button>
                            ) : (
                              <button
                                onClick={() => {
                                  if (cbtMode === 'tryout' && !isReviewMode) {
                                    setIsConfirmSubmitOpen(true);
                                  } else if (isReviewMode) {
                                    setIsReviewMode(false);
                                  }
                                }}
                                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs font-black shadow-lg cursor-pointer font-outfit"
                              >
                                {isReviewMode ? 'Kembali ke Rapor Skor' : 'Selesai & Kumpulkan Ujian'}
                              </button>
                            )}
                          </div>

                          {/* Keyboard Shortcuts Hint Bar */}
                          {!isReviewMode && (
                            <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] text-slate-400 dark:text-slate-500 pt-1">
                              <span>💡 <strong className="text-slate-600 dark:text-slate-400">Pintasan Keyboard:</strong> Tekan <kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono text-[10px] text-slate-700 dark:text-slate-300">A</kbd> - <kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono text-[10px] text-slate-700 dark:text-slate-300">E</kbd> untuk memilih</span>
                              <span>• Panah <kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono text-[10px] text-slate-700 dark:text-slate-300">←</kbd> / <kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono text-[10px] text-slate-700 dark:text-slate-300">→</kbd> untuk navigasi</span>
                              <span>• Tekan <kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono text-[10px] text-slate-700 dark:text-slate-300">F</kbd> untuk tandai ragu</span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* RIGHT COLUMN: Question Number Palette Grid (Sidebar Panel) */}
                  {showRightPanel && (
                    <div className="w-full lg:w-80 shrink-0 sticky top-4 bg-white dark:bg-[#0c141d] border border-slate-200/80 dark:border-slate-800 rounded-3xl p-5 shadow-xl space-y-4 animate-fade-in font-outfit">
                      {/* Panel Header */}
                      <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                            <Layers className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="text-xs font-black font-outfit text-slate-900 dark:text-white uppercase tracking-wider">
                              Lembar Nomor Soal
                            </h4>
                            <span className="text-[11px] text-slate-400 font-mono">
                              {filteredQuestions.length} Soal Terpilih
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => setShowRightPanel(false)}
                          title="Sembunyikan Panel (Mode Fokus)"
                          className="text-xs text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 px-2 py-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer flex items-center gap-1 font-bold"
                        >
                          <span>Tutup</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Nilai Normal Lab Button (Fitur Resmi CBT APDFI / UKMPPAI) */}
                      <button
                        onClick={() => setIsLabValuesModalOpen(true)}
                        className="w-full py-2.5 px-3 rounded-2xl bg-gradient-to-r from-teal-500/10 to-emerald-500/10 hover:from-teal-500/20 hover:to-emerald-500/20 border border-teal-500/30 text-teal-800 dark:text-teal-300 text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                      >
                        <FlaskConical className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                        <span>Lihat Nilai Normal Lab</span>
                      </button>

                      {/* Tryout Timer in Panel */}
                      {cbtMode === 'tryout' && !isTryoutSubmitted && (
                        <div className="p-3 rounded-2xl bg-slate-950 text-center border border-slate-800 space-y-1 shadow-inner">
                          <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                            <Clock className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Sisa Waktu Ujian</span>
                          </div>
                          <div className="text-xl font-black font-mono text-emerald-400 tracking-wider">
                            {formatTimer(tryoutTimeLeft)}
                          </div>
                        </div>
                      )}

                      {/* Legend Status Counts (Review Mode vs Normal Mode with APDFI Palettes) */}
                      {isReviewMode ? (
                        <div className="grid grid-cols-3 gap-1.5 p-2 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 text-center text-[10px] font-bold">
                          <div className="p-1.5 rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                            <div className="font-extrabold text-xs">{tryoutScore.correctCount}</div>
                            <div>Benar</div>
                          </div>
                          <div className="p-1.5 rounded-xl bg-rose-500/10 text-rose-700 dark:text-rose-400 border border-rose-500/20">
                            <div className="font-extrabold text-xs">{tryoutScore.incorrectCount}</div>
                            <div>Salah</div>
                          </div>
                          <div className="p-1.5 rounded-xl bg-slate-200/60 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                            <div className="font-extrabold text-xs">{tryoutScore.unansweredCount}</div>
                            <div>Kosong</div>
                          </div>
                        </div>
                      ) : (
                        <div className="grid grid-cols-3 gap-1.5 p-2 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 text-center text-[10px] font-bold">
                          <div className="p-1.5 rounded-xl bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                            <div className="font-extrabold text-xs">{cbtProgressStats.answered}</div>
                            <div>Yakin (Hijau)</div>
                          </div>
                          <div className="p-1.5 rounded-xl bg-blue-500/15 text-blue-700 dark:text-blue-400 border border-blue-500/30">
                            <div className="font-extrabold text-xs">{cbtProgressStats.flagged}</div>
                            <div>Ragu (Biru)</div>
                          </div>
                          <div className="p-1.5 rounded-xl bg-slate-200/60 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                            <div className="font-extrabold text-xs">{cbtProgressStats.total - cbtProgressStats.answered}</div>
                            <div>Belum</div>
                          </div>
                        </div>
                      )}

                      {/* Quick Jump Input Form */}
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          const num = parseInt(quickJumpNumber, 10);
                          if (!isNaN(num) && num >= 1 && num <= filteredQuestions.length) {
                            setCurrentQuestionIndex(num - 1);
                            setQuickJumpNumber('');
                          }
                        }}
                        className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-xl p-1 shadow-2xs"
                      >
                        <span className="text-[11px] font-bold text-slate-400 px-2 font-outfit uppercase">Lompat:</span>
                        <input
                          type="number"
                          min={1}
                          max={filteredQuestions.length}
                          placeholder={`1-${filteredQuestions.length}`}
                          value={quickJumpNumber}
                          onChange={(e) => setQuickJumpNumber(e.target.value)}
                          className="flex-1 text-xs font-bold text-center bg-white dark:bg-slate-800 rounded-lg py-1 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-900 dark:text-white"
                        />
                        <button
                          type="submit"
                          className="px-3 py-1 text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors cursor-pointer"
                        >
                          Go
                        </button>
                      </form>

                      {/* Filter Status Tabs in Palette */}
                      <div className="grid grid-cols-4 gap-1 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-xl text-[10px] font-bold text-center">
                        <button
                          onClick={() => setPaletteStatusFilter('all')}
                          className={`py-1 rounded-lg transition-all cursor-pointer ${
                            paletteStatusFilter === 'all'
                              ? 'bg-white dark:bg-slate-700 text-emerald-600 dark:text-emerald-400 shadow-xs font-black'
                              : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'
                          }`}
                        >
                          Semua
                        </button>
                        {isReviewMode ? (
                          <>
                            <button
                              onClick={() => setPaletteStatusFilter('incorrect')}
                              className={`py-1 rounded-lg transition-all cursor-pointer ${
                                paletteStatusFilter === 'incorrect'
                                  ? 'bg-white dark:bg-slate-700 text-rose-600 dark:text-rose-400 shadow-xs font-black'
                                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'
                              }`}
                            >
                              Salah
                            </button>
                            <button
                              onClick={() => setPaletteStatusFilter('correct')}
                              className={`py-1 rounded-lg transition-all cursor-pointer ${
                                paletteStatusFilter === 'correct'
                                  ? 'bg-white dark:bg-slate-700 text-emerald-600 dark:text-emerald-400 shadow-xs font-black'
                                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'
                              }`}
                            >
                              Benar
                            </button>
                            <button
                              onClick={() => setPaletteStatusFilter('flagged')}
                              className={`py-1 rounded-lg transition-all cursor-pointer ${
                                paletteStatusFilter === 'flagged'
                                  ? 'bg-white dark:bg-slate-700 text-amber-600 dark:text-amber-400 shadow-xs font-black'
                                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'
                              }`}
                            >
                              Ragu
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              onClick={() => setPaletteStatusFilter('unanswered')}
                              className={`py-1 rounded-lg transition-all cursor-pointer ${
                                paletteStatusFilter === 'unanswered'
                                  ? 'bg-white dark:bg-slate-700 text-emerald-600 dark:text-emerald-400 shadow-xs font-black'
                                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'
                              }`}
                            >
                              Belum
                            </button>
                            <button
                              onClick={() => setPaletteStatusFilter('flagged')}
                              className={`py-1 rounded-lg transition-all cursor-pointer ${
                                paletteStatusFilter === 'flagged'
                                  ? 'bg-white dark:bg-slate-700 text-amber-600 dark:text-amber-400 shadow-xs font-black'
                                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'
                              }`}
                            >
                              Ragu
                            </button>
                            <button
                              onClick={() => setPaletteStatusFilter('answered')}
                              className={`py-1 rounded-lg transition-all cursor-pointer ${
                                paletteStatusFilter === 'answered'
                                  ? 'bg-white dark:bg-slate-700 text-emerald-600 dark:text-emerald-400 shadow-xs font-black'
                                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'
                              }`}
                            >
                              Selesai
                            </button>
                          </>
                        )}
                      </div>

                      {/* Scrollable 5-Column Question Grid Palette */}
                      <div className="max-h-[380px] overflow-y-auto custom-scrollbar p-0.5">
                        <div className="grid grid-cols-5 gap-2">
                          {filteredQuestions.map((q, idx) => {
                            const isCurrent = idx === currentQuestionIndex;
                            const isAnswered = Boolean(userAnswers[q.id]);
                            const isFlagged = Boolean(flaggedQuestions[q.id]);
                            const isCorrect = userAnswers[q.id] === q.correctAnswer;

                            // Filter logic for palette
                            if (isReviewMode) {
                              if (paletteStatusFilter === 'incorrect' && isCorrect) return null;
                              if (paletteStatusFilter === 'correct' && !isCorrect) return null;
                              if (paletteStatusFilter === 'flagged' && !isFlagged) return null;
                            } else {
                              if (paletteStatusFilter === 'unanswered' && isAnswered) return null;
                              if (paletteStatusFilter === 'flagged' && !isFlagged) return null;
                              if (paletteStatusFilter === 'answered' && !isAnswered) return null;
                            }

                            let itemStyle = 'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-emerald-500';

                            if (isReviewMode) {
                              if (!isAnswered) {
                                itemStyle = 'bg-slate-200 dark:bg-slate-800 text-slate-500 border-slate-300 dark:border-slate-700 font-bold';
                              } else if (isCorrect) {
                                itemStyle = 'bg-emerald-500 text-white border-emerald-600 font-black shadow-xs';
                              } else {
                                itemStyle = 'bg-rose-500 text-white border-rose-600 font-black shadow-xs';
                              }
                            } else {
                              if (isAnswered && !isFlagged) {
                                itemStyle = 'bg-emerald-500 text-white border-emerald-600 font-bold shadow-xs'; // Dijawab yakin (Hijau APDFI)
                              } else if (isAnswered && isFlagged) {
                                itemStyle = 'bg-blue-600 text-white border-blue-700 font-bold shadow-xs'; // Dijawab ragu-ragu (Biru APDFI)
                              } else if (!isAnswered && isFlagged) {
                                itemStyle = 'bg-amber-500 text-white border-amber-600 font-bold shadow-xs'; // Belum dijawab tapi ditandai ragu
                              }
                            }

                            if (isCurrent) itemStyle += ' ring-2 ring-emerald-400 ring-offset-2 dark:ring-offset-slate-900 font-black scale-105';

                            return (
                              <button
                                key={q.id}
                                onClick={() => setCurrentQuestionIndex(idx)}
                                className={`h-10 rounded-xl border text-xs font-outfit transition-all flex items-center justify-center relative cursor-pointer ${itemStyle}`}
                              >
                                <span>{idx + 1}</span>
                                {isFlagged && (
                                  <span className="w-2 h-2 rounded-full bg-white absolute top-1 right-1" />
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Submit / Return Button in Right Panel */}
                      {cbtMode === 'tryout' && !isReviewMode && (
                        <button
                          onClick={() => setIsConfirmSubmitOpen(true)}
                          className="w-full py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs font-black shadow-md shadow-emerald-600/30 transition-all cursor-pointer font-outfit text-center"
                        >
                          Selesai & Kumpulkan Ujian
                        </button>
                      )}
                      {isReviewMode && (
                        <button
                          onClick={handleBackToScorecard}
                          className="w-full py-3 rounded-2xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 text-white text-xs font-black shadow-md transition-all cursor-pointer font-outfit text-center flex items-center justify-center gap-2"
                        >
                          <ChevronLeft className="w-4 h-4" />
                          <span>Kembali ke Rapor Skor</span>
                        </button>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Empty Search / Filter State */}
              {filteredQuestions.length === 0 && (
                <div className="p-12 text-center rounded-3xl bg-white dark:bg-[#0c141d] border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm font-outfit">
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
            </>
          )}

          {/* ========================================================================= */}
          {/* CBT SUBMIT CONFIRMATION MODAL (STANDAR RESMI CAT BKN / UKMPPAI)           */}
          {/* ========================================================================= */}
          {isConfirmSubmitOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fade-in font-outfit">
              <div className="w-full max-w-lg rounded-3xl bg-white dark:bg-[#0c141d] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden space-y-5 p-6 sm:p-7">
                {/* Modal Header */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                    <ShieldAlert className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-snug">
                      Konfirmasi Pengumpulan Lembar Jawaban
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Apakah Anda yakin ingin menyelesaikan simulasi CBT sekarang dan mengirimkan lembar jawaban Anda?
                    </p>
                  </div>
                </div>

                {/* Answer Sheet Status Breakdown */}
                <div className="grid grid-cols-3 gap-2.5 p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 text-center font-mono">
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                    <span className="text-lg font-black">{cbtProgressStats.answered}</span>
                    <div className="text-[10px] font-sans font-bold uppercase tracking-wider text-slate-500">Terjawab</div>
                  </div>
                  <div className="p-2 rounded-xl bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20">
                    <span className="text-lg font-black">{cbtProgressStats.flagged}</span>
                    <div className="text-[10px] font-sans font-bold uppercase tracking-wider text-slate-500">Ragu-ragu</div>
                  </div>
                  <div className="p-2 rounded-xl bg-rose-500/10 text-rose-700 dark:text-rose-400 border border-rose-500/20">
                    <span className="text-lg font-black">{filteredQuestions.length - cbtProgressStats.answered}</span>
                    <div className="text-[10px] font-sans font-bold uppercase tracking-wider text-slate-500">Kosong</div>
                  </div>
                </div>

                {/* Critical Warnings */}
                {filteredQuestions.length - cbtProgressStats.answered > 0 && (
                  <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 text-xs text-rose-800 dark:text-rose-300 leading-relaxed flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Perhatian:</strong> Masih ada <strong>{filteredQuestions.length - cbtProgressStats.answered} butir soal yang belum dijawab</strong>. Pada ujian CBT UKMPPAI tidak ada penalti nilai minus untuk jawaban salah. Anda sangat disarankan untuk mengisi seluruh nomor.
                    </span>
                  </div>
                )}

                {cbtProgressStats.flagged > 0 && (
                  <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-xs text-amber-800 dark:text-amber-300 leading-relaxed flex items-start gap-2">
                    <Flag className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>
                      Anda masih memiliki <strong>{cbtProgressStats.flagged} nomor bertanda ragu-ragu</strong>.
                    </span>
                  </div>
                )}

                {/* Actions */}
                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    onClick={() => setIsConfirmSubmitOpen(false)}
                    className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    Kembali ke Ujian
                  </button>
                  <button
                    onClick={handleConfirmSubmit}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs font-black shadow-lg shadow-emerald-600/30 transition-all cursor-pointer"
                  >
                    Kumpulkan Lembar Jawaban Sekarang
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* NILAI NORMAL LABORATORIUM MODAL (STANDAR RESMI CBT APDFI / UKMPPAI)      */}
          {/* ========================================================================= */}
          {isLabValuesModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-fade-in font-outfit">
              <div className="w-full max-w-4xl max-h-[90vh] rounded-3xl bg-white dark:bg-[#0c141d] border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col overflow-hidden">
                {/* Modal Header */}
                <div className="flex items-center justify-between p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-teal-500/15 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                      <FlaskConical className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                        Tabel Nilai Normal Laboratorium Klinis
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Standar Rujukan Resmi Ujian Kompetensi Farmasi (UKMPPAI & APDFI CBT)
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsLabValuesModalOpen(false)}
                    className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Filter and Search Bar */}
                <div className="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 space-y-3 bg-white dark:bg-[#0c141d]">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                      <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Cari parameter lab, satuan, atau implikasi klinis (cth: Hemoglobin, Kreatinin, SGPT)..."
                        value={labSearchQuery}
                        onChange={(e) => setLabSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 font-medium"
                      />
                    </div>
                  </div>

                  {/* Category Pills */}
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1 custom-scrollbar text-[11px] font-bold">
                    {['all', 'Hematologi', 'Ginjal & Elektrolit', 'Fungsi Hati', 'Glukosa & Lipid', 'Gas Darah & Tanda Vital'].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedLabCategory(cat)}
                        className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                          selectedLabCategory === cat
                            ? 'bg-teal-600 text-white shadow-xs'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                        }`}
                      >
                        {cat === 'all' ? 'Semua Parameter' : cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Scrollable Lab Table */}
                <div className="flex-1 overflow-y-auto custom-scrollbar p-4 sm:p-6">
                  <div className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-xs">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-slate-100/90 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-black uppercase text-[10px] tracking-wider border-b border-slate-200 dark:border-slate-700">
                          <th className="p-3">Parameter Uji</th>
                          <th className="p-3">Kategori</th>
                          <th className="p-3">Rentang Normal</th>
                          <th className="p-3">Satuan</th>
                          <th className="p-3 min-w-[240px]">Signifikansi Klinis & Poin Kunci Ukom</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                        {filteredLabValues.map((item, idx) => (
                          <tr key={idx} className="hover:bg-teal-50/40 dark:hover:bg-teal-950/20 transition-colors">
                            <td className="p-3 font-black text-slate-900 dark:text-white font-mono">
                              {item.name}
                            </td>
                            <td className="p-3">
                              <span className="px-2 py-0.5 rounded-md bg-teal-500/10 text-teal-700 dark:text-teal-300 text-[10px] font-extrabold border border-teal-500/20">
                                {item.category}
                              </span>
                            </td>
                            <td className="p-3 font-mono font-black text-emerald-600 dark:text-emerald-400 whitespace-nowrap">
                              {item.normalRange}
                            </td>
                            <td className="p-3 font-mono text-slate-500 dark:text-slate-400">
                              {item.unit || '-'}
                            </td>
                            <td className="p-3 text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                              {item.clinicalSignificance}
                            </td>
                          </tr>
                        ))}
                        {filteredLabValues.length === 0 && (
                          <tr>
                            <td colSpan={5} className="p-8 text-center text-slate-400">
                              Tidak ditemukan parameter lab yang cocok dengan pencarian Anda.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/60 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">
                    Menampilkan <strong>{filteredLabValues.length}</strong> parameter nilai normal
                  </span>
                  <button
                    onClick={() => setIsLabValuesModalOpen(false)}
                    className="px-5 py-2 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 text-white font-bold transition-all cursor-pointer"
                  >
                    Tutup Lembar Nilai Normal
                  </button>
                </div>
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
                      🔬 Standar UKTVF &amp; Farmakope Indonesia III
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
                      🔬 Standar UKTVF &amp; Farmasetika Dasar FI III
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
            {portalOsceStations.map((station) => {
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
              {Array.from(new Set(['all', ...portalFlashcardsPool.map(c => c.category)])).map(cat => (
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
                        🔬 UKTVF
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
