import React, { useState, useRef } from 'react';
import { toPng } from 'html-to-image';
import {
  Instagram,
  Download,
  Copy,
  Check,
  Sparkles,
  Layers,
  Palette,
  Eye,
  CheckCircle2,
  ShieldAlert,
  Pill,
  AlertTriangle,
  BookOpen,
  HeartPulse,
  Baby,
  Syringe,
  Share2,
  Calculator,
  Scale,
  GraduationCap,
  ClipboardList,
  Flame,
  Clock,
  AlertOctagon,
  Skull,
  ShieldCheck,
  HeartHandshake,
  Stethoscope,
  FileCheck,
  Search,
  X,
  Activity,
  TestTube,
  AlertCircle,
  GitBranch,
  Workflow,
  Landmark,
  Hospital,
  Award,
  Leaf
} from 'lucide-react';
import { FloatingPillsBackground } from './FloatingPillsBackground';
import {
  TemplateCategory,
  TemplateType,
  TEMPLATE_CATEGORIES,
  TEMPLATE_DEFINITIONS,
  INTERACTION_PRESETS,
  IV_COMPAT_PRESETS,
  HIGH_ALERT_PRESETS,
  DOWA_PRESETS,
  PREGNANCY_PRESETS,
  TOXICOLOGY_PRESETS,
  SWAM_TRIAGE_PRESETS,
  SWAM_BATUK_PRESETS,
  SWAM_DIARE_PRESETS,
  SWAM_MAAG_PRESETS,
  DRUG_LAB_PRESETS,
  SIDE_EFFECT_PRESETS,
  RENAL_DOSING_PRESETS,
  PEDIATRIC_DOSE_PRESETS,
  BEERS_PRESETS,
  PATIENT_COUNSELING_PRESETS,
  DRUG_NOTES_PRESETS,
  SOP_FARMASI_PRESETS,
  REGULATIONS_PRESETS,
  THERAPY_ALGORITHM_PRESETS,
  INTERACTIVE_FLOWCHART_PRESETS,
  GUIDELINE_PILLARS_PRESETS,
  CLINICAL_PATHWAY_PRESETS,
  UKMPPAI_QUIZ_PRESETS,
  UKTVF_QUIZ_PRESETS,
  HERB_DRUG_PRESETS,
  CHRONO_DOSING_PRESETS,
  PPRA_AWARE_PRESETS,
  TDM_DRUGS_PRESETS,
  OFF_LABEL_PRESETS,
  generateInstagramCaption
} from '../data/instagramStudioPresets';

type AspectRatio = 'portrait' | 'square' | 'story';
type ThemeColor =
  | 'dark-teal'
  | 'midnight-sapphire'
  | 'crimson-alert'
  | 'emerald-botanical'
  | 'royal-amethyst'
  | 'sunset-amber'
  | 'obsidian-luxe'
  | 'clean-medical'
  | 'sakura-blossom'
  | 'nordic-sky';

export const InstagramPostStudio: React.FC = () => {
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>('portrait');
  const [template, setTemplate] = useState<TemplateType>('showcase');
  const [theme, setTheme] = useState<ThemeColor>('dark-teal');
  const [igUsername, setIgUsername] = useState('@farmasi.druggist');

  // Category and Search Filtering
  const [selectedCategory, setSelectedCategory] = useState<TemplateCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Preset selector states for all clinical templates
  const [selectedInteractionIndex, setSelectedInteractionIndex] = useState(0);
  const [selectedIvIndex, setSelectedIvIndex] = useState(0);
  const [selectedHighAlertIndex, setSelectedHighAlertIndex] = useState(0);
  const [selectedDowaIndex, setSelectedDowaIndex] = useState(0);
  const [selectedPregnancyIndex, setSelectedPregnancyIndex] = useState(0);
  const [selectedToxicologyIndex, setSelectedToxicologyIndex] = useState(0);
  const [selectedTriageIndex, setSelectedTriageIndex] = useState(0);
  const [selectedBatukIndex, setSelectedBatukIndex] = useState(0);
  const [selectedDiareIndex, setSelectedDiareIndex] = useState(0);
  const [selectedMaagIndex, setSelectedMaagIndex] = useState(0);
  const [selectedDrugLabIndex, setSelectedDrugLabIndex] = useState(0);
  const [selectedSideEffectIndex, setSelectedSideEffectIndex] = useState(0);
  const [selectedRenalIndex, setSelectedRenalIndex] = useState(0);
  const [selectedPediatricIndex, setSelectedPediatricIndex] = useState(0);
  const [selectedBeersIndex, setSelectedBeersIndex] = useState(0);
  const [selectedCounselingIndex, setSelectedCounselingIndex] = useState(0);
  const [selectedDrugNotesIndex, setSelectedDrugNotesIndex] = useState(0);
  const [selectedSopIndex, setSelectedSopIndex] = useState(0);
  const [selectedRegulationsIndex, setSelectedRegulationsIndex] = useState(0);
  const [selectedAlgorithmIndex, setSelectedAlgorithmIndex] = useState(0);
  const [selectedFlowchartIndex, setSelectedFlowchartIndex] = useState(0);
  const [selectedPillarsIndex, setSelectedPillarsIndex] = useState(0);
  const [selectedPathwayIndex, setSelectedPathwayIndex] = useState(0);
  const [selectedUkmppaiQuizIndex, setSelectedUkmppaiQuizIndex] = useState(0);
  const [selectedUktvfQuizIndex, setSelectedUktvfQuizIndex] = useState(0);
  const [selectedHerbDrugIndex, setSelectedHerbDrugIndex] = useState(0);
  const [selectedChronoIndex, setSelectedChronoIndex] = useState(0);
  const [selectedPpraIndex, setSelectedPpraIndex] = useState(0);
  const [selectedTdmIndex, setSelectedTdmIndex] = useState(0);
  const [selectedOffLabelIndex, setSelectedOffLabelIndex] = useState(0);

  // Export states
  const [isExporting, setIsExporting] = useState(false);
  const [exportSuccess, setExportSuccess] = useState(false);
  const [copiedCaption, setCopiedCaption] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);

  // Handle PNG Download
  const handleDownload = async () => {
    if (!cardRef.current) return;
    try {
      setIsExporting(true);
      // Generate image with retina resolution (2.25x)
      const dataUrl = await toPng(cardRef.current, {
        quality: 1,
        pixelRatio: 2.25,
        cacheBust: true
      });

      const link = document.createElement('a');
      link.download = `farmasidruggist-${template}-${aspectRatio}.png`;
      link.href = dataUrl;
      link.click();

      setExportSuccess(true);
      setTimeout(() => setExportSuccess(false), 3000);
    } catch (err) {
      console.error('Failed to export image:', err);
      alert('Gagal mengekspor gambar. Pastikan browser mendukung rendering canvas.');
    } finally {
      setIsExporting(false);
    }
  };

  // Generate Instagram Caption from external clinical generator
  const generateCaption = (): string => {
    return generateInstagramCaption(template, {
      interaction: selectedInteractionIndex,
      iv: selectedIvIndex,
      highAlert: selectedHighAlertIndex,
      dowa: selectedDowaIndex,
      pregnancy: selectedPregnancyIndex,
      toxicology: selectedToxicologyIndex,
      triage: selectedTriageIndex,
      batuk: selectedBatukIndex,
      diare: selectedDiareIndex,
      maag: selectedMaagIndex,
      drugLab: selectedDrugLabIndex,
      sideEffect: selectedSideEffectIndex,
      renal: selectedRenalIndex,
      pediatric: selectedPediatricIndex,
      beers: selectedBeersIndex,
      counseling: selectedCounselingIndex,
      drugNotes: selectedDrugNotesIndex,
      sop: selectedSopIndex,
      regulations: selectedRegulationsIndex,
      algorithm: selectedAlgorithmIndex,
      flowchart: selectedFlowchartIndex,
      pillars: selectedPillarsIndex,
      pathway: selectedPathwayIndex,
      ukmppaiQuiz: selectedUkmppaiQuizIndex,
      uktvfQuiz: selectedUktvfQuizIndex,
      herbDrug: selectedHerbDrugIndex,
      chrono: selectedChronoIndex,
      ppra: selectedPpraIndex,
      tdm: selectedTdmIndex,
      offLabel: selectedOffLabelIndex
    });
  };

  const handleCopyCaption = () => {
    navigator.clipboard.writeText(generateCaption());
    setCopiedCaption(true);
    setTimeout(() => setCopiedCaption(false), 2500);
  };

  // Dimensions based on aspect ratio
  const getContainerDimensions = () => {
    switch (aspectRatio) {
      case 'portrait': // 4:5
        return { width: '450px', height: '562px', ratioLabel: '4:5 (Portrait Feed - 1080×1350)' };
      case 'square': // 1:1
        return { width: '450px', height: '450px', ratioLabel: '1:1 (Square Feed - 1080×1080)' };
      case 'story': // 9:16
        return { width: '380px', height: '675px', ratioLabel: '9:16 (Story / Reels - 1080×1920)' };
    }
  };

  const dim = getContainerDimensions();

  // Filtered Templates by Category and Search
  const filteredTemplates = TEMPLATE_DEFINITIONS.filter(t => {
    const matchesCategory = selectedCategory === 'all' || t.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      t.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.badge.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Background Theme Styles with High-Contrast Tokens
  const getThemeClasses = () => {
    switch (theme) {
      case 'dark-teal':
        return {
          isLight: false,
          wrapper: 'bg-[#020b0e] bg-gradient-to-br from-[#020b0e] via-[#051a24] to-[#092a38] text-white border-teal-500/30',
          wrapperStyle: {
            background: 'linear-gradient(135deg, #020b0e 0%, #051a24 50%, #092a38 100%)',
            color: '#ffffff'
          },
          accent: 'from-teal-400 to-cyan-300',
          card: 'bg-white/5 border-teal-500/20 text-slate-100',
          badge: 'bg-teal-500/20 text-teal-300 border-teal-500/30',
          secondaryBadge: 'bg-cyan-500/20 text-cyan-300',
          glow: 'bg-teal-500/15',
          heading: 'text-white',
          subtext: 'text-slate-300/90',
          mutedText: 'text-slate-400',
          cardTitle: 'text-white',
          cardText: 'text-slate-200',
          headerBorder: 'border-white/10',
          headerSub: 'text-teal-300/80',
          igBadge: 'bg-black/20 backdrop-blur-xs border-white/10 text-rose-300',
          stat78: 'text-teal-400',
          stat90: 'text-cyan-400',
          stat57: 'text-amber-400',
          stat52: 'text-rose-400',
          widePill: 'bg-gradient-to-r from-teal-500/20 to-blue-500/20 border-teal-500/30 text-teal-300',
          footerBorder: 'border-white/10',
          footerLabel: 'text-white',
          footerUrl: 'text-teal-400',
          footerBioBtn: 'bg-white/10 backdrop-blur-xs border-white/15 text-teal-300'
        };
      case 'midnight-sapphire':
        return {
          isLight: false,
          wrapper: 'bg-[#020a1c] bg-gradient-to-br from-[#020a1c] via-[#071738] to-[#0d2354] text-white border-cyan-500/30',
          wrapperStyle: {
            background: 'linear-gradient(135deg, #020a1c 0%, #071738 50%, #0d2354 100%)',
            color: '#ffffff'
          },
          accent: 'from-cyan-400 to-blue-400',
          card: 'bg-white/5 border-cyan-500/20 text-slate-100',
          badge: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
          secondaryBadge: 'bg-blue-500/20 text-blue-300',
          glow: 'bg-cyan-500/15',
          heading: 'text-white',
          subtext: 'text-slate-300/90',
          mutedText: 'text-slate-400',
          cardTitle: 'text-white',
          cardText: 'text-slate-200',
          headerBorder: 'border-white/10',
          headerSub: 'text-cyan-300/80',
          igBadge: 'bg-black/20 backdrop-blur-xs border-white/10 text-rose-300',
          stat78: 'text-cyan-400',
          stat90: 'text-blue-400',
          stat57: 'text-amber-400',
          stat52: 'text-rose-400',
          widePill: 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-300',
          footerBorder: 'border-white/10',
          footerLabel: 'text-white',
          footerUrl: 'text-cyan-400',
          footerBioBtn: 'bg-white/10 backdrop-blur-xs border-white/15 text-cyan-300'
        };
      case 'crimson-alert':
        return {
          isLight: false,
          wrapper: 'bg-[#18040a] bg-gradient-to-br from-[#18040a] via-[#2a0712] to-[#3d0b1b] text-white border-rose-500/30',
          wrapperStyle: {
            background: 'linear-gradient(135deg, #18040a 0%, #2a0712 50%, #3d0b1b 100%)',
            color: '#ffffff'
          },
          accent: 'from-rose-400 to-amber-300',
          card: 'bg-white/5 border-rose-500/20 text-slate-100',
          badge: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
          secondaryBadge: 'bg-amber-500/20 text-amber-300',
          glow: 'bg-rose-500/15',
          heading: 'text-white',
          subtext: 'text-slate-300/90',
          mutedText: 'text-slate-400',
          cardTitle: 'text-white',
          cardText: 'text-slate-200',
          headerBorder: 'border-white/10',
          headerSub: 'text-rose-300/80',
          igBadge: 'bg-black/20 backdrop-blur-xs border-white/10 text-rose-300',
          stat78: 'text-rose-400',
          stat90: 'text-amber-400',
          stat57: 'text-orange-400',
          stat52: 'text-red-400',
          widePill: 'bg-gradient-to-r from-rose-500/20 to-amber-500/20 border-rose-500/30 text-rose-300',
          footerBorder: 'border-white/10',
          footerLabel: 'text-white',
          footerUrl: 'text-rose-400',
          footerBioBtn: 'bg-white/10 backdrop-blur-xs border-white/15 text-rose-300'
        };
      case 'emerald-botanical':
        return {
          isLight: false,
          wrapper: 'bg-[#02140b] bg-gradient-to-br from-[#02140b] via-[#052617] to-[#0a3d25] text-white border-emerald-500/30',
          wrapperStyle: {
            background: 'linear-gradient(135deg, #02140b 0%, #052617 50%, #0a3d25 100%)',
            color: '#ffffff'
          },
          accent: 'from-emerald-400 via-teal-300 to-lime-300',
          card: 'bg-white/5 border-emerald-500/20 text-slate-100',
          badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
          secondaryBadge: 'bg-lime-500/20 text-lime-300',
          glow: 'bg-emerald-500/15',
          heading: 'text-white',
          subtext: 'text-slate-300/90',
          mutedText: 'text-slate-400',
          cardTitle: 'text-white',
          cardText: 'text-slate-200',
          headerBorder: 'border-white/10',
          headerSub: 'text-emerald-300/80',
          igBadge: 'bg-black/20 backdrop-blur-xs border-white/10 text-rose-300',
          stat78: 'text-emerald-400',
          stat90: 'text-lime-400',
          stat57: 'text-amber-400',
          stat52: 'text-rose-400',
          widePill: 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-300',
          footerBorder: 'border-white/10',
          footerLabel: 'text-white',
          footerUrl: 'text-emerald-400',
          footerBioBtn: 'bg-white/10 backdrop-blur-xs border-white/15 text-emerald-300'
        };
      case 'royal-amethyst':
        return {
          isLight: false,
          wrapper: 'bg-[#0e031a] bg-gradient-to-br from-[#0e031a] via-[#1d0735] to-[#2f0c54] text-white border-purple-500/30',
          wrapperStyle: {
            background: 'linear-gradient(135deg, #0e031a 0%, #1d0735 50%, #2f0c54 100%)',
            color: '#ffffff'
          },
          accent: 'from-fuchsia-400 via-purple-300 to-pink-300',
          card: 'bg-white/5 border-purple-500/20 text-slate-100',
          badge: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
          secondaryBadge: 'bg-fuchsia-500/20 text-fuchsia-300',
          glow: 'bg-purple-500/15',
          heading: 'text-white',
          subtext: 'text-slate-300/90',
          mutedText: 'text-slate-400',
          cardTitle: 'text-white',
          cardText: 'text-slate-200',
          headerBorder: 'border-white/10',
          headerSub: 'text-purple-300/80',
          igBadge: 'bg-black/20 backdrop-blur-xs border-white/10 text-rose-300',
          stat78: 'text-purple-400',
          stat90: 'text-fuchsia-400',
          stat57: 'text-amber-400',
          stat52: 'text-rose-400',
          widePill: 'bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 border-purple-500/30 text-purple-300',
          footerBorder: 'border-white/10',
          footerLabel: 'text-white',
          footerUrl: 'text-purple-400',
          footerBioBtn: 'bg-white/10 backdrop-blur-xs border-white/15 text-purple-300'
        };
      case 'sunset-amber':
        return {
          isLight: false,
          wrapper: 'bg-[#190d04] bg-gradient-to-br from-[#190d04] via-[#2c1707] to-[#45240c] text-white border-amber-500/30',
          wrapperStyle: {
            background: 'linear-gradient(135deg, #190d04 0%, #2c1707 50%, #45240c 100%)',
            color: '#ffffff'
          },
          accent: 'from-amber-400 via-orange-300 to-yellow-200',
          card: 'bg-white/5 border-amber-500/20 text-slate-100',
          badge: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
          secondaryBadge: 'bg-orange-500/20 text-orange-300',
          glow: 'bg-amber-500/15',
          heading: 'text-white',
          subtext: 'text-slate-300/90',
          mutedText: 'text-slate-400',
          cardTitle: 'text-white',
          cardText: 'text-slate-200',
          headerBorder: 'border-white/10',
          headerSub: 'text-amber-300/80',
          igBadge: 'bg-black/20 backdrop-blur-xs border-white/10 text-rose-300',
          stat78: 'text-amber-400',
          stat90: 'text-orange-400',
          stat57: 'text-yellow-400',
          stat52: 'text-rose-400',
          widePill: 'bg-gradient-to-r from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-300',
          footerBorder: 'border-white/10',
          footerLabel: 'text-white',
          footerUrl: 'text-amber-400',
          footerBioBtn: 'bg-white/10 backdrop-blur-xs border-white/15 text-amber-300'
        };
      case 'obsidian-luxe':
        return {
          isLight: false,
          wrapper: 'bg-[#050608] bg-gradient-to-br from-[#050608] via-[#0f1217] to-[#181d26] text-white border-slate-700/50 shadow-2xl',
          wrapperStyle: {
            background: 'linear-gradient(135deg, #050608 0%, #0f1217 50%, #181d26 100%)',
            color: '#ffffff'
          },
          accent: 'from-slate-100 via-sky-200 to-cyan-300',
          card: 'bg-white/5 border-slate-700/40 text-slate-100',
          badge: 'bg-slate-700/40 text-slate-200 border-slate-500/30',
          secondaryBadge: 'bg-cyan-500/20 text-cyan-300',
          glow: 'bg-slate-400/10',
          heading: 'text-white',
          subtext: 'text-slate-300/90',
          mutedText: 'text-slate-400',
          cardTitle: 'text-white',
          cardText: 'text-slate-200',
          headerBorder: 'border-white/10',
          headerSub: 'text-slate-300/80',
          igBadge: 'bg-black/30 backdrop-blur-xs border-white/10 text-rose-300',
          stat78: 'text-slate-200',
          stat90: 'text-cyan-300',
          stat57: 'text-amber-400',
          stat52: 'text-rose-400',
          widePill: 'bg-gradient-to-r from-slate-700/40 to-slate-800/60 border-slate-600/40 text-slate-200',
          footerBorder: 'border-white/10',
          footerLabel: 'text-white',
          footerUrl: 'text-cyan-300',
          footerBioBtn: 'bg-white/10 backdrop-blur-xs border-white/15 text-slate-200'
        };
      case 'clean-medical':
        return {
          isLight: true,
          wrapper: 'bg-white bg-gradient-to-br from-white via-slate-50 to-teal-50/60 text-slate-900 border-teal-500/40 shadow-2xl',
          wrapperStyle: {
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #ecfdf5 100%)',
            color: '#0f172a'
          },
          accent: 'from-teal-700 via-teal-800 to-cyan-800',
          card: 'bg-white border-slate-200/90 shadow-xs text-slate-800',
          badge: 'bg-teal-100/90 text-teal-900 border-teal-300/80 font-bold',
          secondaryBadge: 'bg-cyan-100 text-cyan-900',
          glow: 'bg-teal-500/10',
          heading: 'text-slate-900',
          subtext: 'text-slate-600',
          mutedText: 'text-slate-500 font-medium',
          cardTitle: 'text-slate-900',
          cardText: 'text-slate-800',
          headerBorder: 'border-slate-200',
          headerSub: 'text-teal-700 font-semibold',
          igBadge: 'bg-rose-50 border-rose-200 text-rose-700 shadow-xs',
          stat78: 'text-teal-700',
          stat90: 'text-cyan-700',
          stat57: 'text-amber-700',
          stat52: 'text-rose-700',
          widePill: 'bg-gradient-to-r from-teal-700 via-teal-800 to-cyan-800 border-teal-800 text-white shadow-md font-black',
          footerBorder: 'border-slate-200',
          footerLabel: 'text-slate-900 font-black',
          footerUrl: 'text-teal-700 font-black',
          footerBioBtn: 'bg-slate-900 text-white border-slate-900 shadow-xs font-bold'
        };
      case 'sakura-blossom':
        return {
          isLight: true,
          wrapper: 'bg-[#fff7f9] bg-gradient-to-br from-[#fff7f9] via-[#fdf2f6] to-[#fce7f3] text-slate-900 border-rose-300/80 shadow-2xl',
          wrapperStyle: {
            background: 'linear-gradient(135deg, #fff7f9 0%, #fdf2f6 50%, #fce7f3 100%)',
            color: '#0f172a'
          },
          accent: 'from-rose-600 via-pink-600 to-purple-700',
          card: 'bg-white/95 border-rose-200/90 shadow-xs text-slate-800',
          badge: 'bg-rose-100 text-rose-900 border-rose-300 font-bold',
          secondaryBadge: 'bg-pink-100 text-pink-900',
          glow: 'bg-rose-400/15',
          heading: 'text-slate-950',
          subtext: 'text-slate-600',
          mutedText: 'text-slate-500 font-medium',
          cardTitle: 'text-slate-950',
          cardText: 'text-slate-800',
          headerBorder: 'border-rose-200',
          headerSub: 'text-rose-700 font-semibold',
          igBadge: 'bg-white border-rose-200 text-rose-700 shadow-xs',
          stat78: 'text-rose-700',
          stat90: 'text-pink-700',
          stat57: 'text-amber-700',
          stat52: 'text-purple-700',
          widePill: 'bg-gradient-to-r from-rose-600 via-pink-600 to-purple-700 border-rose-700 text-white shadow-md font-black',
          footerBorder: 'border-rose-200',
          footerLabel: 'text-slate-950 font-black',
          footerUrl: 'text-rose-700 font-black',
          footerBioBtn: 'bg-rose-900 text-white border-rose-900 shadow-xs font-bold'
        };
      case 'nordic-sky':
        return {
          isLight: true,
          wrapper: 'bg-[#f0f9ff] bg-gradient-to-br from-[#f0f9ff] via-[#e0f2fe] to-[#f8fafc] text-slate-900 border-sky-300/80 shadow-2xl',
          wrapperStyle: {
            background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #f8fafc 100%)',
            color: '#0f172a'
          },
          accent: 'from-sky-700 via-blue-700 to-indigo-800',
          card: 'bg-white/95 border-sky-200/90 shadow-xs text-slate-800',
          badge: 'bg-sky-100 text-sky-900 border-sky-300 font-bold',
          secondaryBadge: 'bg-blue-100 text-blue-900',
          glow: 'bg-sky-400/15',
          heading: 'text-slate-950',
          subtext: 'text-slate-600',
          mutedText: 'text-slate-500 font-medium',
          cardTitle: 'text-slate-950',
          cardText: 'text-slate-800',
          headerBorder: 'border-sky-200',
          headerSub: 'text-sky-700 font-semibold',
          igBadge: 'bg-white border-sky-200 text-sky-700 shadow-xs',
          stat78: 'text-sky-700',
          stat90: 'text-blue-700',
          stat57: 'text-amber-700',
          stat52: 'text-indigo-700',
          widePill: 'bg-gradient-to-r from-sky-700 via-blue-700 to-indigo-800 border-sky-800 text-white shadow-md font-black',
          footerBorder: 'border-sky-200',
          footerLabel: 'text-slate-950 font-black',
          footerUrl: 'text-sky-700 font-black',
          footerBioBtn: 'bg-slate-900 text-white border-slate-900 shadow-xs font-bold'
        };
      default:
        return {
          isLight: false,
          wrapper: 'bg-[#020b0e] bg-gradient-to-br from-[#020b0e] via-[#051a24] to-[#092a38] text-white border-teal-500/30',
          wrapperStyle: {
            background: 'linear-gradient(135deg, #020b0e 0%, #051a24 50%, #092a38 100%)',
            color: '#ffffff'
          },
          accent: 'from-teal-400 to-cyan-300',
          card: 'bg-white/5 border-teal-500/20 text-slate-100',
          badge: 'bg-teal-500/20 text-teal-300 border-teal-500/30',
          secondaryBadge: 'bg-cyan-500/20 text-cyan-300',
          glow: 'bg-teal-500/15',
          heading: 'text-white',
          subtext: 'text-slate-300/90',
          mutedText: 'text-slate-400',
          cardTitle: 'text-white',
          cardText: 'text-slate-200',
          headerBorder: 'border-white/10',
          headerSub: 'text-teal-300/80',
          igBadge: 'bg-black/20 backdrop-blur-xs border-white/10 text-rose-300',
          stat78: 'text-teal-400',
          stat90: 'text-cyan-400',
          stat57: 'text-amber-400',
          stat52: 'text-rose-400',
          widePill: 'bg-gradient-to-r from-teal-500/20 to-blue-500/20 border-teal-500/30 text-teal-300',
          footerBorder: 'border-white/10',
          footerLabel: 'text-white',
          footerUrl: 'text-teal-400',
          footerBioBtn: 'bg-white/10 backdrop-blur-xs border-white/15 text-teal-300'
        };
    }
  };

  const themeStyles = getThemeClasses();
  const currentInteraction = INTERACTION_PRESETS[selectedInteractionIndex];

  return (
    <div className="space-y-8 pb-16">
      {/* HERO BANNER */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#030b0e] via-[#061922] to-[#092634] p-6 sm:p-8 text-white shadow-2xl border border-teal-500/25">
        <FloatingPillsBackground density="low" accentColor="#f43f5e" />
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-rose-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-6 bottom-4 opacity-10 pointer-events-none">
          <Instagram className="w-48 h-48 text-rose-400" />
        </div>

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-bold font-outfit">
                <Sparkles className="w-3.5 h-3.5 text-rose-400" />
                <span>Instagram Studio &amp; Social Promo Kit (220+ Kasus Klinis &amp; CBT)</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-500 via-pink-500 to-amber-500 text-white flex items-center justify-center shadow-lg shadow-rose-950/50 shrink-0">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-black font-outfit tracking-tight">
                    Studio Konten &amp; Promosi Instagram
                  </h1>
                  <p className="text-xs sm:text-sm text-teal-100/80 font-medium">
                    32 template infografis klinis &amp; branding dengan 220+ materi kasus nyata &amp; soal ujian terverifikasi (Soal UKMPPAI, Soal UKTVF, Herbal DDI, Kronofarmakologi, WHO AWaRe, TDM, dll).
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <div className="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-xs flex items-center gap-1.5 font-bold text-rose-200">
                  <Download className="w-3.5 h-3.5 text-rose-400" />
                  <span>Download PNG 2x Retina HD</span>
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-xs flex items-center gap-1.5 font-bold text-teal-200">
                  <Copy className="w-3.5 h-3.5 text-teal-400" />
                  <span>Caption Otomatis Siap Pakai</span>
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-xs flex items-center gap-1.5 font-bold text-amber-200">
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                  <span>Format Feed 4:5, 1:1 &amp; Story</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-950/80 px-4 py-3 rounded-2xl border border-teal-950/60 text-right shadow-md shrink-0">
              <span className="text-[11px] text-slate-400 block font-medium">Koleksi Materi:</span>
              <span className="text-base font-black text-rose-400">220+ Kasus &amp; Soal</span>
              <span className="text-[10px] text-teal-300/70 block mt-0.5">32 Template • 6 Kategori</span>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN STUDIO LAYOUT: CONTROLS (LEFT) + CANVAS PREVIEW (RIGHT) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* CONTROLS PANEL (LEFT 5 COLS) */}
        <div className="lg:col-span-5 space-y-6">
          {/* 1. ASPECT RATIO SELECTOR */}
          <div className="bg-white dark:bg-[#061e2b] border border-teal-200/80 dark:border-teal-500/25 rounded-3xl p-5 shadow-sm space-y-3">
            <label className="text-xs font-black font-outfit uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <Layers className="w-4 h-4 text-teal-500" />
              <span>1. Pilih Ukuran Format Instagram</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setAspectRatio('portrait')}
                className={`flex flex-col items-center justify-center p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                  aspectRatio === 'portrait'
                    ? 'bg-gradient-to-br from-rose-500/10 to-teal-500/10 border-rose-500 text-rose-700 dark:text-rose-400 font-bold shadow-xs'
                    : 'border-slate-200 dark:border-teal-900/30 text-slate-600 dark:text-slate-400 hover:border-teal-400'
                }`}
              >
                <span className="text-xs font-black font-outfit">Feed 4:5</span>
                <span className="text-[10px] text-slate-400 mt-0.5">Portrait (Optimal)</span>
              </button>
              <button
                onClick={() => setAspectRatio('square')}
                className={`flex flex-col items-center justify-center p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                  aspectRatio === 'square'
                    ? 'bg-gradient-to-br from-rose-500/10 to-teal-500/10 border-rose-500 text-rose-700 dark:text-rose-400 font-bold shadow-xs'
                    : 'border-slate-200 dark:border-teal-900/30 text-slate-600 dark:text-slate-400 hover:border-teal-400'
                }`}
              >
                <span className="text-xs font-black font-outfit">Feed 1:1</span>
                <span className="text-[10px] text-slate-400 mt-0.5">Square Klasik</span>
              </button>
              <button
                onClick={() => setAspectRatio('story')}
                className={`flex flex-col items-center justify-center p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                  aspectRatio === 'story'
                    ? 'bg-gradient-to-br from-rose-500/10 to-teal-500/10 border-rose-500 text-rose-700 dark:text-rose-400 font-bold shadow-xs'
                    : 'border-slate-200 dark:border-teal-900/30 text-slate-600 dark:text-slate-400 hover:border-teal-400'
                }`}
              >
                <span className="text-xs font-black font-outfit">Story 9:16</span>
                <span className="text-[10px] text-slate-400 mt-0.5">Story &amp; WA Status</span>
              </button>
            </div>
          </div>

          {/* 2. TEMPLATE CATEGORY & SELECTOR */}
          <div className="bg-white dark:bg-[#061e2b] border border-teal-200/80 dark:border-teal-500/25 rounded-3xl p-5 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-xs font-black font-outfit uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-teal-500" />
                <span>2. Pilih Template Konten ({filteredTemplates.length} / {TEMPLATE_DEFINITIONS.length})</span>
              </label>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 custom-scrollbar">
              {TEMPLATE_CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold font-outfit whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                    selectedCategory === cat.id
                      ? 'bg-gradient-to-r from-teal-500 to-cyan-600 text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-[#04141d] border border-slate-200 dark:border-teal-900/40 text-slate-600 dark:text-slate-400 hover:border-teal-400'
                  }`}
                >
                  {cat.label} ({cat.count})
                </button>
              ))}
            </div>

            {/* Search Filter Input */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari template (misal: batuk, puyer, ginjal, lab)..."
                className="w-full pl-9 pr-8 py-2 bg-slate-50 dark:bg-[#04141d] border border-slate-200 dark:border-teal-900/40 rounded-xl text-xs font-medium font-outfit text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-hidden focus:border-teal-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

            {/* Template List Cards */}
            <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1 custom-scrollbar">
              {filteredTemplates.length === 0 ? (
                <div className="p-4 text-center text-xs text-slate-400 font-medium">
                  Tidak ada template yang sesuai pencarian "{searchQuery}"
                </div>
              ) : (
                filteredTemplates.map(t => (
                  <button
                    key={t.id}
                    onClick={() => setTemplate(t.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                      template === t.id
                        ? 'bg-teal-50 dark:bg-teal-950/40 border-teal-500 text-teal-950 dark:text-teal-200 font-bold shadow-xs'
                        : 'border-slate-200 dark:border-teal-900/30 text-slate-700 dark:text-slate-300 hover:border-teal-400'
                    }`}
                  >
                    <div className="min-w-0 pr-2">
                      <div className="text-xs font-bold font-outfit flex items-center gap-1.5 flex-wrap">
                        <span>{t.label}</span>
                        <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-teal-500/20 text-teal-700 dark:text-teal-300 border border-teal-500/30 font-bold">
                          {t.badge}
                        </span>
                        {t.caseCount > 1 && (
                          <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/20 font-medium">
                            {t.caseCount} Kasus
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 font-normal truncate">
                        {t.desc}
                      </div>
                    </div>
                    <div className={`w-4 h-4 rounded-full border shrink-0 flex items-center justify-center ${template === t.id ? 'border-teal-500 bg-teal-500 text-white' : 'border-slate-300'}`}>
                      {template === t.id && <Check className="w-2.5 h-2.5" />}
                    </div>
                  </button>
                ))
              )}
            </div>
          </div>

          {/* 3. THEME COLOR SELECTOR */}
          <div className="bg-white dark:bg-[#061e2b] border border-teal-200/80 dark:border-teal-500/25 rounded-3xl p-5 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-xs font-black font-outfit uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Palette className="w-4 h-4 text-teal-500" />
                <span>3. Pilih Skema Warna</span>
              </label>
              <span className="text-[10px] font-black uppercase tracking-wider text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/60 px-2 py-0.5 rounded-full border border-teal-200 dark:border-teal-800/50">
                10 Skema Warna
              </span>
            </div>

            {/* Mode Gelap Section */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 dark:text-slate-400">
                <span className="flex items-center gap-1.5 font-outfit uppercase tracking-wider text-[10px] font-black text-slate-500 dark:text-slate-400">
                  🌙 Mode Gelap (Dark Luxe)
                </span>
                <span className="text-[9px] font-medium text-slate-400">7 Pilihan</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  {
                    id: 'dark-teal',
                    label: 'Dark Neon Teal',
                    desc: 'Klinis & Apotek',
                    gradientBg: 'linear-gradient(135deg, #020b0e 0%, #051a24 50%, #092a38 100%)',
                    border: 'border-teal-400'
                  },
                  {
                    id: 'midnight-sapphire',
                    label: 'Midnight Sapphire',
                    desc: 'Royal Blue HD',
                    gradientBg: 'linear-gradient(135deg, #020a1c 0%, #071738 50%, #0d2354 100%)',
                    border: 'border-cyan-400'
                  },
                  {
                    id: 'crimson-alert',
                    label: 'Crimson Alert',
                    desc: 'High Alert / Gawat',
                    gradientBg: 'linear-gradient(135deg, #18040a 0%, #2a0712 50%, #3d0b1b 100%)',
                    border: 'border-rose-400'
                  },
                  {
                    id: 'emerald-botanical',
                    label: 'Emerald Botanical',
                    desc: 'Herbal & Sehat',
                    gradientBg: 'linear-gradient(135deg, #02140b 0%, #052617 50%, #0a3d25 100%)',
                    border: 'border-emerald-400'
                  },
                  {
                    id: 'royal-amethyst',
                    label: 'Royal Amethyst',
                    desc: 'Kuis & Toksikologi',
                    gradientBg: 'linear-gradient(135deg, #0e031a 0%, #1d0735 50%, #2f0c54 100%)',
                    border: 'border-purple-400'
                  },
                  {
                    id: 'sunset-amber',
                    label: 'Sunset Amber',
                    desc: 'Konseling & Hangat',
                    gradientBg: 'linear-gradient(135deg, #190d04 0%, #2c1707 50%, #45240c 100%)',
                    border: 'border-amber-400'
                  },
                  {
                    id: 'obsidian-luxe',
                    label: 'Obsidian Titanium',
                    desc: 'Minimalis & Regulasi',
                    gradientBg: 'linear-gradient(135deg, #050608 0%, #0f1217 50%, #181d26 100%)',
                    border: 'border-slate-400'
                  }
                ].map(th => (
                  <button
                    key={th.id}
                    onClick={() => setTheme(th.id as ThemeColor)}
                    className={`flex items-center gap-2.5 p-2.5 rounded-2xl border text-left transition-all cursor-pointer ${
                      theme === th.id
                        ? 'border-teal-500 ring-2 ring-teal-500/30 bg-teal-50/80 dark:bg-teal-950/50 shadow-xs'
                        : 'border-slate-200 dark:border-teal-900/30 hover:border-teal-400 dark:hover:border-teal-700 bg-white dark:bg-transparent'
                    }`}
                  >
                    <div
                      style={{ background: th.gradientBg }}
                      className={`w-7 h-7 rounded-xl border shrink-0 ${th.border} shadow-xs flex items-center justify-center`}
                    >
                      {theme === th.id && <div className="w-1.5 h-1.5 rounded-full bg-white shadow-xs" />}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-bold font-outfit text-slate-800 dark:text-slate-200 leading-tight truncate">
                        {th.label}
                      </div>
                      <div className="text-[9px] text-slate-500 dark:text-slate-400 leading-tight truncate mt-0.5">
                        {th.desc}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Mode Terang Section */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 dark:text-slate-400">
                <span className="flex items-center gap-1.5 font-outfit uppercase tracking-wider text-[10px] font-black text-slate-500 dark:text-slate-400">
                  ☀️ Mode Terang (Clean Light)
                </span>
                <span className="text-[9px] font-medium text-slate-400">3 Pilihan</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  {
                    id: 'clean-medical',
                    label: 'Clean Medical',
                    desc: 'Putih Klinis',
                    gradientBg: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #ecfdf5 100%)',
                    border: 'border-teal-600'
                  },
                  {
                    id: 'sakura-blossom',
                    label: 'Sakura Maternal',
                    desc: 'Bumil & Anak',
                    gradientBg: 'linear-gradient(135deg, #fff7f9 0%, #fdf2f6 50%, #fce7f3 100%)',
                    border: 'border-rose-400'
                  },
                  {
                    id: 'nordic-sky',
                    label: 'Nordic Sky',
                    desc: 'Infus IV & Lab',
                    gradientBg: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #f8fafc 100%)',
                    border: 'border-sky-500'
                  }
                ].map(th => (
                  <button
                    key={th.id}
                    onClick={() => setTheme(th.id as ThemeColor)}
                    className={`flex items-center gap-2.5 p-2.5 rounded-2xl border text-left transition-all cursor-pointer ${
                      theme === th.id
                        ? 'border-teal-500 ring-2 ring-teal-500/30 bg-teal-50/80 dark:bg-teal-950/50 shadow-xs'
                        : 'border-slate-200 dark:border-teal-900/30 hover:border-teal-400 dark:hover:border-teal-700 bg-white dark:bg-transparent'
                    }`}
                  >
                    <div
                      style={{ background: th.gradientBg }}
                      className={`w-7 h-7 rounded-xl border shrink-0 ${th.border} shadow-xs flex items-center justify-center`}
                    >
                      {theme === th.id && <div className="w-1.5 h-1.5 rounded-full bg-slate-900 shadow-xs" />}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-bold font-outfit text-slate-800 dark:text-slate-200 leading-tight truncate">
                        {th.label}
                      </div>
                      <div className="text-[9px] text-slate-500 dark:text-slate-400 leading-tight truncate mt-0.5">
                        {th.desc}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 4. TEMPLATE SPECIFIC CUSTOMIZATIONS (PRESETS) */}
          {template === 'interaction' && (
            <div className="bg-white dark:bg-[#061e2b] border border-teal-200/80 dark:border-teal-500/25 rounded-3xl p-5 shadow-sm space-y-3">
              <label className="text-xs font-black font-outfit uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Pilih Kasus Interaksi Obat ({INTERACTION_PRESETS.length} Kasus)
              </label>
              <select
                value={selectedInteractionIndex}
                onChange={(e) => setSelectedInteractionIndex(Number(e.target.value))}
                className="w-full px-3 py-2.5 bg-white dark:bg-[#04141d] border border-teal-200/80 dark:border-teal-500/30 rounded-xl text-xs font-bold font-outfit text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-teal-500"
              >
                {INTERACTION_PRESETS.map((preset, idx) => (
                  <option key={idx} value={idx}>
                    {preset.drugA} + {preset.drugB} ({preset.severity})
                  </option>
                ))}
              </select>
            </div>
          )}

          {template === 'iv-compat' && (
            <div className="bg-white dark:bg-[#061e2b] border border-teal-200/80 dark:border-teal-500/25 rounded-3xl p-5 shadow-sm space-y-3">
              <label className="text-xs font-black font-outfit uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Pilih Pasangan Injeksi IV / Cairan ({IV_COMPAT_PRESETS.length} Kasus)
              </label>
              <select
                value={selectedIvIndex}
                onChange={(e) => setSelectedIvIndex(Number(e.target.value))}
                className="w-full px-3 py-2.5 bg-white dark:bg-[#04141d] border border-teal-200/80 dark:border-teal-500/30 rounded-xl text-xs font-bold font-outfit text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-teal-500"
              >
                {IV_COMPAT_PRESETS.map((preset, idx) => (
                  <option key={idx} value={idx}>
                    {preset.drugA} + {preset.drugB}
                  </option>
                ))}
              </select>
            </div>
          )}

          {template === 'high-alert' && (
            <div className="bg-white dark:bg-[#061e2b] border border-teal-200/80 dark:border-teal-500/25 rounded-3xl p-5 shadow-sm space-y-3">
              <label className="text-xs font-black font-outfit uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Pilih Obat High-Alert / LASA ({HIGH_ALERT_PRESETS.length} Kasus)
              </label>
              <select
                value={selectedHighAlertIndex}
                onChange={(e) => setSelectedHighAlertIndex(Number(e.target.value))}
                className="w-full px-3 py-2.5 bg-white dark:bg-[#04141d] border border-teal-200/80 dark:border-teal-500/30 rounded-xl text-xs font-bold font-outfit text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-teal-500"
              >
                {HIGH_ALERT_PRESETS.map((preset, idx) => (
                  <option key={idx} value={idx}>
                    {preset.tallManName} ({preset.category})
                  </option>
                ))}
              </select>
            </div>
          )}

          {template === 'dowa' && (
            <div className="bg-white dark:bg-[#061e2b] border border-teal-200/80 dark:border-teal-500/25 rounded-3xl p-5 shadow-sm space-y-3">
              <label className="text-xs font-black font-outfit uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Pilih Daftar Obat Wajib Apotek ({DOWA_PRESETS.length} Kasus)
              </label>
              <select
                value={selectedDowaIndex}
                onChange={(e) => setSelectedDowaIndex(Number(e.target.value))}
                className="w-full px-3 py-2.5 bg-white dark:bg-[#04141d] border border-teal-200/80 dark:border-teal-500/30 rounded-xl text-xs font-bold font-outfit text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-teal-500"
              >
                {DOWA_PRESETS.map((preset, idx) => (
                  <option key={idx} value={idx}>
                    {preset.drugName} - {preset.maxDispense}
                  </option>
                ))}
              </select>
            </div>
          )}

          {template === 'pregnancy' && (
            <div className="bg-white dark:bg-[#061e2b] border border-teal-200/80 dark:border-teal-500/25 rounded-3xl p-5 shadow-sm space-y-3">
              <label className="text-xs font-black font-outfit uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Pilih Kasus Keamanan Bumil ({PREGNANCY_PRESETS.length} Kasus)
              </label>
              <select
                value={selectedPregnancyIndex}
                onChange={(e) => setSelectedPregnancyIndex(Number(e.target.value))}
                className="w-full px-3 py-2.5 bg-white dark:bg-[#04141d] border border-teal-200/80 dark:border-teal-500/30 rounded-xl text-xs font-bold font-outfit text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-teal-500"
              >
                {PREGNANCY_PRESETS.map((preset, idx) => (
                  <option key={idx} value={idx}>
                    {preset.drugName} ({preset.fdaCategory})
                  </option>
                ))}
              </select>
            </div>
          )}

          {template === 'toxicology' && (
            <div className="bg-white dark:bg-[#061e2b] border border-teal-200/80 dark:border-teal-500/25 rounded-3xl p-5 shadow-sm space-y-3">
              <label className="text-xs font-black font-outfit uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Pilih Kasus Keracunan &amp; Antidotum ({TOXICOLOGY_PRESETS.length} Kasus)
              </label>
              <select
                value={selectedToxicologyIndex}
                onChange={(e) => setSelectedToxicologyIndex(Number(e.target.value))}
                className="w-full px-3 py-2.5 bg-white dark:bg-[#04141d] border border-teal-200/80 dark:border-teal-500/30 rounded-xl text-xs font-bold font-outfit text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-teal-500"
              >
                {TOXICOLOGY_PRESETS.map((preset, idx) => (
                  <option key={idx} value={idx}>
                    {preset.toxicAgent} ➔ {preset.antidoteName}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* New Preset Selectors for Swamedikasi & Clinical Modules */}
          {template === 'swam-triage' && (
            <div className="bg-white dark:bg-[#061e2b] border border-teal-200/80 dark:border-teal-500/25 rounded-3xl p-5 shadow-sm space-y-3">
              <label className="text-xs font-black font-outfit uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Pilih Kondisi Triage &amp; Red Flags ({SWAM_TRIAGE_PRESETS.length} Kasus)
              </label>
              <select
                value={selectedTriageIndex}
                onChange={(e) => setSelectedTriageIndex(Number(e.target.value))}
                className="w-full px-3 py-2.5 bg-white dark:bg-[#04141d] border border-teal-200/80 dark:border-teal-500/30 rounded-xl text-xs font-bold font-outfit text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-teal-500"
              >
                {SWAM_TRIAGE_PRESETS.map((p, idx) => (
                  <option key={idx} value={idx}>{p.condition} ({p.maxSelfMedDays})</option>
                ))}
              </select>
            </div>
          )}

          {template === 'swam-batuk' && (
            <div className="bg-white dark:bg-[#061e2b] border border-teal-200/80 dark:border-teal-500/25 rounded-3xl p-5 shadow-sm space-y-3">
              <label className="text-xs font-black font-outfit uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Pilih Kasus Batuk &amp; Flu ({SWAM_BATUK_PRESETS.length} Kasus)
              </label>
              <select
                value={selectedBatukIndex}
                onChange={(e) => setSelectedBatukIndex(Number(e.target.value))}
                className="w-full px-3 py-2.5 bg-white dark:bg-[#04141d] border border-teal-200/80 dark:border-teal-500/30 rounded-xl text-xs font-bold font-outfit text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-teal-500"
              >
                {SWAM_BATUK_PRESETS.map((p, idx) => (
                  <option key={idx} value={idx}>{p.coughType}</option>
                ))}
              </select>
            </div>
          )}

          {template === 'swam-diare' && (
            <div className="bg-white dark:bg-[#061e2b] border border-teal-200/80 dark:border-teal-500/25 rounded-3xl p-5 shadow-sm space-y-3">
              <label className="text-xs font-black font-outfit uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Pilih Kelompok Pasien Diare ({SWAM_DIARE_PRESETS.length} Kasus)
              </label>
              <select
                value={selectedDiareIndex}
                onChange={(e) => setSelectedDiareIndex(Number(e.target.value))}
                className="w-full px-3 py-2.5 bg-white dark:bg-[#04141d] border border-teal-200/80 dark:border-teal-500/30 rounded-xl text-xs font-bold font-outfit text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-teal-500"
              >
                {SWAM_DIARE_PRESETS.map((p, idx) => (
                  <option key={idx} value={idx}>{p.patientGroup}</option>
                ))}
              </select>
            </div>
          )}

          {template === 'swam-maag' && (
            <div className="bg-white dark:bg-[#061e2b] border border-teal-200/80 dark:border-teal-500/25 rounded-3xl p-5 shadow-sm space-y-3">
              <label className="text-xs font-black font-outfit uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Pilih Gangguan Lambung / Dispepsia ({SWAM_MAAG_PRESETS.length} Kasus)
              </label>
              <select
                value={selectedMaagIndex}
                onChange={(e) => setSelectedMaagIndex(Number(e.target.value))}
                className="w-full px-3 py-2.5 bg-white dark:bg-[#04141d] border border-teal-200/80 dark:border-teal-500/30 rounded-xl text-xs font-bold font-outfit text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-teal-500"
              >
                {SWAM_MAAG_PRESETS.map((p, idx) => (
                  <option key={idx} value={idx}>{p.complaintName}</option>
                ))}
              </select>
            </div>
          )}

          {template === 'drug-lab' && (
            <div className="bg-white dark:bg-[#061e2b] border border-teal-200/80 dark:border-teal-500/25 rounded-3xl p-5 shadow-sm space-y-3">
              <label className="text-xs font-black font-outfit uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Pilih Interaksi Obat &amp; Uji Lab ({DRUG_LAB_PRESETS.length} Kasus)
              </label>
              <select
                value={selectedDrugLabIndex}
                onChange={(e) => setSelectedDrugLabIndex(Number(e.target.value))}
                className="w-full px-3 py-2.5 bg-white dark:bg-[#04141d] border border-teal-200/80 dark:border-teal-500/30 rounded-xl text-xs font-bold font-outfit text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-teal-500"
              >
                {DRUG_LAB_PRESETS.map((p, idx) => (
                  <option key={idx} value={idx}>{p.drugName} ➔ {p.labTestAffected}</option>
                ))}
              </select>
            </div>
          )}

          {template === 'side-effects' && (
            <div className="bg-white dark:bg-[#061e2b] border border-teal-200/80 dark:border-teal-500/25 rounded-3xl p-5 shadow-sm space-y-3">
              <label className="text-xs font-black font-outfit uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Pilih Kasus Efek Samping MESO/ADR ({SIDE_EFFECT_PRESETS.length} Kasus)
              </label>
              <select
                value={selectedSideEffectIndex}
                onChange={(e) => setSelectedSideEffectIndex(Number(e.target.value))}
                className="w-full px-3 py-2.5 bg-white dark:bg-[#04141d] border border-teal-200/80 dark:border-teal-500/30 rounded-xl text-xs font-bold font-outfit text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-teal-500"
              >
                {SIDE_EFFECT_PRESETS.map((p, idx) => (
                  <option key={idx} value={idx}>{p.drugName} - {p.adverseEffect}</option>
                ))}
              </select>
            </div>
          )}

          {template === 'renal-dosing' && (
            <div className="bg-white dark:bg-[#061e2b] border border-teal-200/80 dark:border-teal-500/25 rounded-3xl p-5 shadow-sm space-y-3">
              <label className="text-xs font-black font-outfit uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Pilih Obat Gangguan Ginjal ({RENAL_DOSING_PRESETS.length} Kasus)
              </label>
              <select
                value={selectedRenalIndex}
                onChange={(e) => setSelectedRenalIndex(Number(e.target.value))}
                className="w-full px-3 py-2.5 bg-white dark:bg-[#04141d] border border-teal-200/80 dark:border-teal-500/30 rounded-xl text-xs font-bold font-outfit text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-teal-500"
              >
                {RENAL_DOSING_PRESETS.map((p, idx) => (
                  <option key={idx} value={idx}>{p.drugName} ({p.cutoffCrCl})</option>
                ))}
              </select>
            </div>
          )}

          {template === 'pediatric-dose' && (
            <div className="bg-white dark:bg-[#061e2b] border border-teal-200/80 dark:border-teal-500/25 rounded-3xl p-5 shadow-sm space-y-3">
              <label className="text-xs font-black font-outfit uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Pilih Obat Dosis Puyer Anak ({PEDIATRIC_DOSE_PRESETS.length} Kasus)
              </label>
              <select
                value={selectedPediatricIndex}
                onChange={(e) => setSelectedPediatricIndex(Number(e.target.value))}
                className="w-full px-3 py-2.5 bg-white dark:bg-[#04141d] border border-teal-200/80 dark:border-teal-500/30 rounded-xl text-xs font-bold font-outfit text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-teal-500"
              >
                {PEDIATRIC_DOSE_PRESETS.map((p, idx) => (
                  <option key={idx} value={idx}>{p.drugName}</option>
                ))}
              </select>
            </div>
          )}

          {template === 'beers-geriatric' && (
            <div className="bg-white dark:bg-[#061e2b] border border-teal-200/80 dark:border-teal-500/25 rounded-3xl p-5 shadow-sm space-y-3">
              <label className="text-xs font-black font-outfit uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Pilih Obat Kriteria Beers ({BEERS_PRESETS.length} Kasus)
              </label>
              <select
                value={selectedBeersIndex}
                onChange={(e) => setSelectedBeersIndex(Number(e.target.value))}
                className="w-full px-3 py-2.5 bg-white dark:bg-[#04141d] border border-teal-200/80 dark:border-teal-500/30 rounded-xl text-xs font-bold font-outfit text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-teal-500"
              >
                {BEERS_PRESETS.map((p, idx) => (
                  <option key={idx} value={idx}>{p.drugName}</option>
                ))}
              </select>
            </div>
          )}

          {template === 'patient-counseling' && (
            <div className="bg-white dark:bg-[#061e2b] border border-teal-200/80 dark:border-teal-500/25 rounded-3xl p-5 shadow-sm space-y-3">
              <label className="text-xs font-black font-outfit uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Pilih Alat / Bentuk Sediaan Khusus PIO ({PATIENT_COUNSELING_PRESETS.length} Kasus)
              </label>
              <select
                value={selectedCounselingIndex}
                onChange={(e) => setSelectedCounselingIndex(Number(e.target.value))}
                className="w-full px-3 py-2.5 bg-white dark:bg-[#04141d] border border-teal-200/80 dark:border-teal-500/30 rounded-xl text-xs font-bold font-outfit text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-teal-500"
              >
                {PATIENT_COUNSELING_PRESETS.map((p, idx) => (
                  <option key={idx} value={idx}>{p.deviceType}</option>
                ))}
              </select>
            </div>
          )}

          
          {template === 'ukmppai-quiz' && (
            <div className="bg-white dark:bg-[#061e2b] border border-teal-200/80 dark:border-teal-500/25 rounded-3xl p-5 shadow-sm space-y-3">
              <label className="text-xs font-black font-outfit uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Pilih Soal Kasus CBT UKMPPAI ({UKMPPAI_QUIZ_PRESETS.length} Soal)
              </label>
              <select
                value={selectedUkmppaiQuizIndex}
                onChange={(e) => setSelectedUkmppaiQuizIndex(Number(e.target.value))}
                className="w-full px-3 py-2.5 bg-white dark:bg-[#04141d] border border-teal-200/80 dark:border-teal-500/30 rounded-xl text-xs font-bold font-outfit text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-teal-500"
              >
                {UKMPPAI_QUIZ_PRESETS.map((p, idx) => (
                  <option key={idx} value={idx}>Soal {idx + 1}: {p.domainName} - {p.question.slice(0, 45)}...</option>
                ))}
              </select>
            </div>
          )}

          {template === 'uktvf-quiz' && (
            <div className="bg-white dark:bg-[#061e2b] border border-teal-200/80 dark:border-teal-500/25 rounded-3xl p-5 shadow-sm space-y-3">
              <label className="text-xs font-black font-outfit uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Pilih Soal Kasus CBT UKTVF ({UKTVF_QUIZ_PRESETS.length} Soal)
              </label>
              <select
                value={selectedUktvfQuizIndex}
                onChange={(e) => setSelectedUktvfQuizIndex(Number(e.target.value))}
                className="w-full px-3 py-2.5 bg-white dark:bg-[#04141d] border border-teal-200/80 dark:border-teal-500/30 rounded-xl text-xs font-bold font-outfit text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-teal-500"
              >
                {UKTVF_QUIZ_PRESETS.map((p, idx) => (
                  <option key={idx} value={idx}>Soal {idx + 1}: {p.domainName} - {p.question.slice(0, 45)}...</option>
                ))}
              </select>
            </div>
          )}

          {template === 'drug-notes' && (
            <div className="bg-white dark:bg-[#061e2b] border border-teal-200/80 dark:border-teal-500/25 rounded-3xl p-5 shadow-sm space-y-3">
              <label className="text-xs font-black font-outfit uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Pilih Obat Hafalan / TDM UKMPPAI ({DRUG_NOTES_PRESETS.length} Kasus)
              </label>
              <select
                value={selectedDrugNotesIndex}
                onChange={(e) => setSelectedDrugNotesIndex(Number(e.target.value))}
                className="w-full px-3 py-2.5 bg-white dark:bg-[#04141d] border border-teal-200/80 dark:border-teal-500/30 rounded-xl text-xs font-bold font-outfit text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-teal-500"
              >
                {DRUG_NOTES_PRESETS.map((p, idx) => (
                  <option key={idx} value={idx}>{p.drugName}</option>
                ))}
              </select>
            </div>
          )}

          {template === 'sop-farmasi' && (
            <div className="bg-white dark:bg-[#061e2b] border border-teal-200/80 dark:border-teal-500/25 rounded-3xl p-5 shadow-sm space-y-3">
              <label className="text-xs font-black font-outfit uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Pilih Topik SOP Akreditasi ({SOP_FARMASI_PRESETS.length} Kasus)
              </label>
              <select
                value={selectedSopIndex}
                onChange={(e) => setSelectedSopIndex(Number(e.target.value))}
                className="w-full px-3 py-2.5 bg-white dark:bg-[#04141d] border border-teal-200/80 dark:border-teal-500/30 rounded-xl text-xs font-bold font-outfit text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-teal-500"
              >
                {SOP_FARMASI_PRESETS.map((p, idx) => (
                  <option key={idx} value={idx}>{p.sopTitle}</option>
                ))}
              </select>
            </div>
          )}

          
          {template === 'therapy-algorithm' && (
            <div className="bg-white dark:bg-[#061e2b] border border-teal-200/80 dark:border-teal-500/25 rounded-3xl p-5 shadow-sm space-y-3">
              <label className="text-xs font-black font-outfit uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Pilih Kasus Algoritma Terapi ({THERAPY_ALGORITHM_PRESETS.length} Kasus)
              </label>
              <select
                value={selectedAlgorithmIndex}
                onChange={(e) => setSelectedAlgorithmIndex(Number(e.target.value))}
                className="w-full px-3 py-2.5 bg-white dark:bg-[#04141d] border border-teal-200/80 dark:border-teal-500/30 rounded-xl text-xs font-bold font-outfit text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-teal-500"
              >
                {THERAPY_ALGORITHM_PRESETS.map((p, idx) => (
                  <option key={idx} value={idx}>{p.diseaseName} ({p.guidelineSource})</option>
                ))}
              </select>
            </div>
          )}

          {template === 'interactive-flowchart' && (
            <div className="bg-white dark:bg-[#061e2b] border border-teal-200/80 dark:border-teal-500/25 rounded-3xl p-5 shadow-sm space-y-3">
              <label className="text-xs font-black font-outfit uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Pilih Percabangan Keputusan Klinis ({INTERACTIVE_FLOWCHART_PRESETS.length} Kasus)
              </label>
              <select
                value={selectedFlowchartIndex}
                onChange={(e) => setSelectedFlowchartIndex(Number(e.target.value))}
                className="w-full px-3 py-2.5 bg-white dark:bg-[#04141d] border border-teal-200/80 dark:border-teal-500/30 rounded-xl text-xs font-bold font-outfit text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-teal-500"
              >
                {INTERACTIVE_FLOWCHART_PRESETS.map((p, idx) => (
                  <option key={idx} value={idx}>{p.clinicalCondition}</option>
                ))}
              </select>
            </div>
          )}

          {template === 'guideline-pillars' && (
            <div className="bg-white dark:bg-[#061e2b] border border-teal-200/80 dark:border-teal-500/25 rounded-3xl p-5 shadow-sm space-y-3">
              <label className="text-xs font-black font-outfit uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Pilih Pilar Terapi Baku Emas ({GUIDELINE_PILLARS_PRESETS.length} Kasus)
              </label>
              <select
                value={selectedPillarsIndex}
                onChange={(e) => setSelectedPillarsIndex(Number(e.target.value))}
                className="w-full px-3 py-2.5 bg-white dark:bg-[#04141d] border border-teal-200/80 dark:border-teal-500/30 rounded-xl text-xs font-bold font-outfit text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-teal-500"
              >
                {GUIDELINE_PILLARS_PRESETS.map((p, idx) => (
                  <option key={idx} value={idx}>{p.regimenTitle} - {p.diseaseTarget}</option>
                ))}
              </select>
            </div>
          )}

          {template === 'clinical-pathway' && (
            <div className="bg-white dark:bg-[#061e2b] border border-teal-200/80 dark:border-teal-500/25 rounded-3xl p-5 shadow-sm space-y-3">
              <label className="text-xs font-black font-outfit uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Pilih Hospital Clinical Pathway ({CLINICAL_PATHWAY_PRESETS.length} Kasus)
              </label>
              <select
                value={selectedPathwayIndex}
                onChange={(e) => setSelectedPathwayIndex(Number(e.target.value))}
                className="w-full px-3 py-2.5 bg-white dark:bg-[#04141d] border border-teal-200/80 dark:border-teal-500/30 rounded-xl text-xs font-bold font-outfit text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-teal-500"
              >
                {CLINICAL_PATHWAY_PRESETS.map((p, idx) => (
                  <option key={idx} value={idx}>{p.pathwayTitle} ({p.losTarget})</option>
                ))}
              </select>
            </div>
          )}

          {template === 'regulations' && (
            <div className="bg-white dark:bg-[#061e2b] border border-teal-200/80 dark:border-teal-500/25 rounded-3xl p-5 shadow-sm space-y-3">
              <label className="text-xs font-black font-outfit uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Pilih Topik Regulasi &amp; Hukum ({REGULATIONS_PRESETS.length} Kasus)
              </label>
              <select
                value={selectedRegulationsIndex}
                onChange={(e) => setSelectedRegulationsIndex(Number(e.target.value))}
                className="w-full px-3 py-2.5 bg-white dark:bg-[#04141d] border border-teal-200/80 dark:border-teal-500/30 rounded-xl text-xs font-bold font-outfit text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-teal-500"
              >
                {REGULATIONS_PRESETS.map((p, idx) => (
                  <option key={idx} value={idx}>{p.regulationTitle}</option>
                ))}
              </select>
            </div>
          )}

          {template === 'herb-drug' && (
            <div className="bg-white dark:bg-[#061e2b] border border-teal-200/80 dark:border-teal-500/25 rounded-3xl p-5 shadow-sm space-y-3">
              <label className="text-xs font-black font-outfit uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Pilih Interaksi Herbal vs Obat ({HERB_DRUG_PRESETS.length} Kasus)
              </label>
              <select
                value={selectedHerbDrugIndex}
                onChange={(e) => setSelectedHerbDrugIndex(Number(e.target.value))}
                className="w-full px-3 py-2.5 bg-white dark:bg-[#04141d] border border-teal-200/80 dark:border-teal-500/30 rounded-xl text-xs font-bold font-outfit text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-teal-500"
              >
                {HERB_DRUG_PRESETS.map((p, idx) => (
                  <option key={idx} value={idx}>{p.herbName} + {p.modernDrug} ({p.riskLevel})</option>
                ))}
              </select>
            </div>
          )}

          {template === 'chrono-dosing' && (
            <div className="bg-white dark:bg-[#061e2b] border border-teal-200/80 dark:border-teal-500/25 rounded-3xl p-5 shadow-sm space-y-3">
              <label className="text-xs font-black font-outfit uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Pilih Jadwal Kronofarmakologi ({CHRONO_DOSING_PRESETS.length} Kasus)
              </label>
              <select
                value={selectedChronoIndex}
                onChange={(e) => setSelectedChronoIndex(Number(e.target.value))}
                className="w-full px-3 py-2.5 bg-white dark:bg-[#04141d] border border-teal-200/80 dark:border-teal-500/30 rounded-xl text-xs font-bold font-outfit text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-teal-500"
              >
                {CHRONO_DOSING_PRESETS.map((p, idx) => (
                  <option key={idx} value={idx}>{p.drugName} - {p.optimalTime}</option>
                ))}
              </select>
            </div>
          )}

          {template === 'ppra-aware' && (
            <div className="bg-white dark:bg-[#061e2b] border border-teal-200/80 dark:border-teal-500/25 rounded-3xl p-5 shadow-sm space-y-3">
              <label className="text-xs font-black font-outfit uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Pilih Klasifikasi WHO AWaRe &amp; PPRA ({PPRA_AWARE_PRESETS.length} Kasus)
              </label>
              <select
                value={selectedPpraIndex}
                onChange={(e) => setSelectedPpraIndex(Number(e.target.value))}
                className="w-full px-3 py-2.5 bg-white dark:bg-[#04141d] border border-teal-200/80 dark:border-teal-500/30 rounded-xl text-xs font-bold font-outfit text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-teal-500"
              >
                {PPRA_AWARE_PRESETS.map((p, idx) => (
                  <option key={idx} value={idx}>{p.antibioticName} [{p.awareCategory.split(' ')[0]}]</option>
                ))}
              </select>
            </div>
          )}

          {template === 'tdm-drugs' && (
            <div className="bg-white dark:bg-[#061e2b] border border-teal-200/80 dark:border-teal-500/25 rounded-3xl p-5 shadow-sm space-y-3">
              <label className="text-xs font-black font-outfit uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Pilih Obat Rentang Terapi Sempit / TDM ({TDM_DRUGS_PRESETS.length} Kasus)
              </label>
              <select
                value={selectedTdmIndex}
                onChange={(e) => setSelectedTdmIndex(Number(e.target.value))}
                className="w-full px-3 py-2.5 bg-white dark:bg-[#04141d] border border-teal-200/80 dark:border-teal-500/30 rounded-xl text-xs font-bold font-outfit text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-teal-500"
              >
                {TDM_DRUGS_PRESETS.map((p, idx) => (
                  <option key={idx} value={idx}>{p.drugName}</option>
                ))}
              </select>
            </div>
          )}

          {template === 'off-label' && (
            <div className="bg-white dark:bg-[#061e2b] border border-teal-200/80 dark:border-teal-500/25 rounded-3xl p-5 shadow-sm space-y-3">
              <label className="text-xs font-black font-outfit uppercase tracking-wider text-purple-600 dark:text-purple-400 flex items-center justify-between">
                <span>Pilih Kasus Obat Off-Label ({OFF_LABEL_PRESETS.length} Kasus EBM)</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 font-bold">EBM Terbukti</span>
              </label>
              <select
                value={selectedOffLabelIndex}
                onChange={(e) => setSelectedOffLabelIndex(Number(e.target.value))}
                className="w-full px-3 py-2.5 bg-white dark:bg-[#04141d] border border-purple-200/80 dark:border-purple-500/30 rounded-xl text-xs font-bold font-outfit text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-purple-500"
              >
                {OFF_LABEL_PRESETS.map((p, idx) => (
                  <option key={idx} value={idx}>
                    {p.drugName} ➔ {p.offLabelIndication.split('&')[0].trim()}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* 5. BRANDING & SOCIAL HANDLES */}
          <div className="bg-white dark:bg-[#061e2b] border border-teal-200/80 dark:border-teal-500/25 rounded-3xl p-5 shadow-sm space-y-3">
            <label className="text-xs font-black font-outfit uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Pengaturan Tanda Akun
            </label>
            <div className="space-y-3">
              <div>
                <span className="text-[11px] text-slate-400 font-bold block mb-1">Nama Akun Instagram / Pembuat:</span>
                <div className="relative">
                  <Instagram className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-rose-500" />
                  <input
                    type="text"
                    value={igUsername}
                    onChange={(e) => setIgUsername(e.target.value)}
                    placeholder="@farmasi.druggist"
                    className="w-full pl-9 pr-3 py-2 bg-white dark:bg-[#04141d] border border-teal-200/80 dark:border-teal-500/30 rounded-xl text-xs font-bold font-outfit text-slate-800 dark:text-slate-200"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PREVIEW & ACTIONS (RIGHT 7 COLS) */}
        <div className="lg:col-span-7 space-y-6">
          {/* TOP ACTION BAR */}
          <div className="bg-white dark:bg-[#061e2b] border border-teal-200/80 dark:border-teal-500/25 rounded-3xl p-4 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-teal-500" />
              <span className="text-xs font-bold font-outfit text-slate-700 dark:text-slate-300">
                Live Preview: <span className="text-teal-600 dark:text-teal-400">{dim.ratioLabel}</span>
              </span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={handleCopyCaption}
                className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold font-outfit transition-all cursor-pointer shadow-xs"
              >
                {copiedCaption ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCaption ? 'Caption Tersalin!' : 'Salin Caption'}</span>
              </button>

              <button
                onClick={handleDownload}
                disabled={isExporting}
                className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white text-xs font-bold font-outfit shadow-md shadow-rose-950/30 transition-all cursor-pointer disabled:opacity-50"
              >
                {isExporting ? (
                  <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : exportSuccess ? (
                  <Check className="w-3.5 h-3.5" />
                ) : (
                  <Download className="w-3.5 h-3.5" />
                )}
                <span>{isExporting ? 'Merender HD...' : exportSuccess ? 'Berhasil Diunduh!' : 'Download PNG HD'}</span>
              </button>
            </div>
          </div>

          {/* CANVAS PREVIEW CONTAINER */}
          <div className="flex justify-center items-center bg-slate-200/60 dark:bg-[#030d12]/80 p-4 sm:p-8 rounded-3xl border border-teal-200/50 dark:border-teal-900/30 overflow-x-auto">
            {/* RENDERED CARD */}
            <div
              ref={cardRef}
              style={{
                width: dim.width,
                minHeight: dim.height,
                ...themeStyles.wrapperStyle
              }}
              className={`relative overflow-hidden rounded-3xl p-6 sm:p-7 shadow-2xl border transition-all flex flex-col justify-between ${themeStyles.wrapper}`}
            >
              {/* Subtle background glow circle */}
              <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none ${themeStyles.glow}`} />
              <div className={`absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl pointer-events-none ${themeStyles.glow}`} />

              {/* CARD HEADER */}
              <div className="relative z-10 space-y-3">
                <div className={`flex items-center justify-between gap-3 border-b ${themeStyles.headerBorder} pb-3`}>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center text-slate-950 font-black text-xs shadow-xs">
                      FD
                    </div>
                    <div>
                      <div className={`text-xs font-black font-outfit tracking-wide uppercase ${themeStyles.heading}`}>
                        FarmasiDruggist
                      </div>
                      <div className={`text-[9px] font-medium ${themeStyles.headerSub}`}>
                        Drug &amp; Clinical Database
                      </div>
                    </div>
                  </div>

                  {igUsername && (
                    <div className={`flex items-center gap-1 px-2.5 py-1 rounded-full border text-[10px] font-bold ${themeStyles.igBadge}`}>
                      <Instagram className={`w-3 h-3 ${themeStyles.isLight ? 'text-rose-600' : 'text-rose-400'}`} />
                      <span>{igUsername}</span>
                    </div>
                  )}
                </div>

                {/* TEMPLATE 1: APP SHOWCASE */}
                {template === 'showcase' && (
                  <div className="space-y-4 pt-1">
                    <div>
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold border mb-2 ${themeStyles.badge}`}>
                        <Sparkles className="w-3 h-3" />
                        <span>Platform Rekomendasi Apoteker 2025</span>
                      </div>
                      <h2 className={`text-lg sm:text-xl font-black font-outfit leading-snug ${themeStyles.heading}`}>
                        Semua Kebutuhan Pelayanan Farmasi Klinis dalam{' '}
                        <span className={`bg-gradient-to-r ${themeStyles.accent} bg-clip-text text-transparent`}>
                          1 Genggaman
                        </span>
                      </h2>
                      <p className={`text-[11px] mt-1 ${themeStyles.subtext}`}>
                        Aplikasi web praktis tanpa instal, langsung akses di browser HP &amp; laptop.
                      </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      {[
                        { icon: ShieldAlert, title: 'Cek Interaksi Obat', sub: '11k+ Interaksi Klinis Terkurasi' },
                        { icon: Syringe, title: 'Kompatibilitas IV', sub: 'Trissel’s ASHP 2024 & Y-Site ICU' },
                        { icon: Calculator, title: 'Dosis Ginjal KDIGO', sub: 'CrCl Cockcroft & Dialisis CRRT' },
                        { icon: Baby, title: 'Kalkulator Puyer', sub: 'Dosis Pediatrik mg/kg & Zat Pengisi' },
                        { icon: ClipboardList, title: '57 SOP Farmasi', sub: 'Pelayanan Klinis & Akreditasi RS' },
                        { icon: Scale, title: '52 Regulasi & DOWA', sub: 'UU Kesehatan 17/2023 & Permenkes' },
                        { icon: BookOpen, title: '78 Literatur EBM', sub: 'PNPK Kemenkes, ADA, AHA, ASHP' },
                        { icon: GraduationCap, title: '90 Hafalan Obat', sub: 'Farmakoterapi & TDM UKMPPAI' }
                      ].map((item, idx) => {
                        const Icon = item.icon;
                        return (
                          <div key={idx} className={`p-2 rounded-xl border flex items-start gap-2 ${themeStyles.card}`}>
                            <Icon className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${themeStyles.isLight ? 'text-teal-600' : 'text-teal-400'}`} />
                            <div className="min-w-0">
                              <div className={`text-[11px] font-bold font-outfit leading-tight truncate ${themeStyles.cardTitle}`}>{item.title}</div>
                              <div className={`text-[9px] leading-tight truncate ${themeStyles.mutedText}`}>{item.sub}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* TEMPLATE 2: DRUG INTERACTION ALERT */}
                {template === 'interaction' && (() => {
                  const isModerate = currentInteraction.severity === 'Moderate';
                  const isContraindicated = currentInteraction.severity === 'Kontraindikasi';
                  
                  const badgeClasses = isModerate
                    ? (themeStyles.isLight ? 'bg-amber-50 text-amber-800 border-amber-300' : 'bg-amber-500/20 text-amber-300 border-amber-500/30')
                    : isContraindicated
                    ? (themeStyles.isLight ? 'bg-purple-50 text-purple-800 border-purple-300' : 'bg-purple-500/20 text-purple-300 border-purple-500/30')
                    : (themeStyles.isLight ? 'bg-rose-50 text-rose-700 border-rose-200' : 'bg-rose-500/20 text-rose-300 border-rose-500/30');

                  const iconColor = isModerate
                    ? (themeStyles.isLight ? 'text-amber-600' : 'text-amber-400')
                    : isContraindicated
                    ? (themeStyles.isLight ? 'text-purple-600' : 'text-purple-400')
                    : (themeStyles.isLight ? 'text-rose-600' : 'text-rose-400');

                  const riskSubtext = isModerate
                    ? 'Signifikan Klinis (Butuh Jeda Waktu Minum)'
                    : isContraindicated
                    ? 'Kontraindikasi Mutlak (Hindari Kombinasi)'
                    : 'Kombinasi Berisiko Tinggi';

                  const riskSubtextClass = isModerate
                    ? (themeStyles.isLight ? 'text-amber-800 font-bold' : 'text-amber-300 font-bold')
                    : isContraindicated
                    ? (themeStyles.isLight ? 'text-purple-800 font-black' : 'text-purple-300 font-bold')
                    : (themeStyles.isLight ? 'text-rose-700 font-black' : 'text-rose-300 font-bold');

                  return (
                    <div className="space-y-4 pt-1">
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${badgeClasses}`}>
                        <AlertTriangle className={`w-3 h-3 ${iconColor}`} />
                        <span>CLINICAL DRUG ALERT: TINGKAT {currentInteraction.severity.toUpperCase()}</span>
                      </div>

                      <div className={`border rounded-2xl p-3.5 text-center space-y-2 ${themeStyles.card}`}>
                        <div className="flex items-center justify-center gap-3 font-outfit">
                          <div className={`px-3 py-1.5 rounded-xl font-black text-sm border ${themeStyles.isLight ? 'bg-teal-50 text-teal-900 border-teal-200' : 'bg-teal-500/20 text-teal-300 border-teal-500/30'}`}>
                            {currentInteraction.drugA}
                          </div>
                          <span className={`${isModerate ? 'text-amber-500' : 'text-rose-500'} font-black text-base`}>⚡</span>
                          <div className={`px-3 py-1.5 rounded-xl font-black text-sm border ${themeStyles.isLight ? 'bg-amber-50 text-amber-900 border-amber-200' : 'bg-amber-500/20 text-amber-300 border-amber-500/30'}`}>
                            {currentInteraction.drugB}
                          </div>
                        </div>
                        <div className={`text-[10px] uppercase tracking-wider ${riskSubtextClass}`}>
                          {riskSubtext}
                        </div>
                      </div>

                      <div className="space-y-2.5">
                        <div className={`border rounded-xl p-2.5 ${themeStyles.card}`}>
                          <span className={`text-[10px] font-bold block mb-0.5 uppercase tracking-wide ${themeStyles.mutedText}`}>
                            Mekanisme Bahaya:
                          </span>
                          <p className={`text-[11px] leading-relaxed font-medium ${themeStyles.cardText}`}>
                            {currentInteraction.mechanism}
                          </p>
                        </div>

                        <div className={`border rounded-xl p-2.5 ${themeStyles.isLight ? 'bg-emerald-50 border-emerald-200' : 'bg-emerald-500/10 border-emerald-500/20'}`}>
                          <span className={`text-[10px] font-bold block mb-0.5 uppercase tracking-wide flex items-center gap-1 ${themeStyles.isLight ? 'text-emerald-800' : 'text-emerald-400'}`}>
                            <CheckCircle2 className="w-3 h-3" />
                            Rekomendasi Solusi Apoteker:
                          </span>
                          <p className={`text-[11px] leading-relaxed font-medium ${themeStyles.isLight ? 'text-emerald-950 font-medium' : 'text-emerald-200'}`}>
                            {currentInteraction.solution}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })()}

                {/* TEMPLATE 3: IV COMPATIBILITY & Y-SITE */}
                {template === 'iv-compat' && (() => {
                  const cur = IV_COMPAT_PRESETS[selectedIvIndex];
                  return (
                    <div className="space-y-4 pt-1">
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${themeStyles.isLight ? 'bg-amber-50 text-amber-900 border-amber-200' : 'bg-amber-500/20 text-amber-300 border-amber-500/30'}`}>
                        <Syringe className={`w-3 h-3 ${themeStyles.isLight ? 'text-amber-700' : 'text-amber-400'}`} />
                        <span>STANDAR TRISSEL'S ASHP &amp; ICU SAFETY</span>
                      </div>

                      <div>
                        <h2 className={`text-lg sm:text-xl font-black font-outfit leading-tight ${themeStyles.heading}`}>
                          Inkompatibilitas Injeksi IV &amp; <span className={`bg-gradient-to-r ${themeStyles.accent} bg-clip-text text-transparent`}>Y-Site Infus</span>
                        </h2>
                        <p className={`text-[11px] mt-1 ${themeStyles.subtext}`}>
                          Waspada bahaya kristalisasi mikroskopis dan emboli partikulat pada jalur vena.
                        </p>
                      </div>

                      <div className={`border rounded-2xl p-3 text-center space-y-2 ${themeStyles.card}`}>
                        <div className="flex items-center justify-center gap-2 font-outfit">
                          <div className={`px-2.5 py-1.5 rounded-xl font-black text-xs sm:text-sm border ${themeStyles.isLight ? 'bg-teal-50 text-teal-900 border-teal-200' : 'bg-teal-500/20 text-teal-300 border-teal-500/30'}`}>
                            {cur.drugA}
                          </div>
                          <span className="text-rose-500 font-black text-sm">❌</span>
                          <div className={`px-2.5 py-1.5 rounded-xl font-black text-xs sm:text-sm border ${themeStyles.isLight ? 'bg-rose-50 text-rose-900 border-rose-200' : 'bg-rose-500/20 text-rose-300 border-rose-500/30'}`}>
                            {cur.drugB}
                          </div>
                        </div>
                        <div className={`inline-block text-[10px] px-2 py-0.5 rounded-full font-black uppercase tracking-wider ${themeStyles.isLight ? 'bg-rose-100 text-rose-800' : 'bg-rose-500/20 text-rose-300'}`}>
                          {cur.compatibility}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className={`border rounded-xl p-2.5 ${themeStyles.card}`}>
                          <span className={`text-[10px] font-bold block mb-0.5 uppercase tracking-wide ${themeStyles.mutedText}`}>
                            Mekanisme Inkompatibilitas &amp; Bahaya:
                          </span>
                          <p className={`text-[11px] leading-relaxed font-medium ${themeStyles.cardText}`}>
                            {cur.dangerMechanism}
                          </p>
                        </div>

                        <div className={`border rounded-xl p-2.5 ${themeStyles.isLight ? 'bg-emerald-50 border-emerald-200' : 'bg-emerald-500/10 border-emerald-500/20'}`}>
                          <span className={`text-[10px] font-bold block mb-0.5 uppercase tracking-wide flex items-center gap-1 ${themeStyles.isLight ? 'text-emerald-800' : 'text-emerald-400'}`}>
                            <CheckCircle2 className="w-3 h-3" />
                            Solusi Rekomendasi Apoteker:
                          </span>
                          <p className={`text-[11px] leading-relaxed font-medium ${themeStyles.isLight ? 'text-emerald-950 font-medium' : 'text-emerald-200'}`}>
                            {cur.clinicalSolution}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })()}

                {/* TEMPLATE 4: HIGH ALERT & LASA */}
                {template === 'high-alert' && (() => {
                  const cur = HIGH_ALERT_PRESETS[selectedHighAlertIndex];
                  return (
                    <div className="space-y-4 pt-1">
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${themeStyles.isLight ? 'bg-rose-50 text-rose-800 border-rose-200' : 'bg-rose-500/20 text-rose-300 border-rose-500/30'}`}>
                        <AlertOctagon className={`w-3 h-3 ${themeStyles.isLight ? 'text-rose-600' : 'text-rose-400'}`} />
                        <span>STANDAR KARS &amp; ISMP PATIENT SAFETY</span>
                      </div>

                      <div>
                        <h2 className={`text-lg sm:text-xl font-black font-outfit leading-tight ${themeStyles.heading}`}>
                          Waspada Obat <span className={`bg-gradient-to-r ${themeStyles.accent} bg-clip-text text-transparent`}>High-Alert &amp; LASA</span>
                        </h2>
                        <p className={`text-[11px] mt-1 ${themeStyles.subtext}`}>
                          Obat berisiko tinggi yang dapat menyebabkan cedera fatal jika terjadi kesalahan dosis atau tertukar.
                        </p>
                      </div>

                      <div className={`border-2 rounded-2xl p-3.5 text-center space-y-1.5 ${themeStyles.isLight ? 'bg-rose-50/50 border-rose-400 text-slate-900 shadow-sm' : 'bg-rose-500/10 border-rose-500/40 text-white'}`}>
                        <span className="text-[10px] font-black uppercase tracking-wider text-rose-500">
                          {cur.labelBadge}
                        </span>
                        <div className="text-base sm:text-lg font-black font-outfit text-rose-600 dark:text-rose-300 tracking-wide">
                          {cur.tallManName}
                        </div>
                        <div className={`text-[10px] font-medium ${themeStyles.mutedText}`}>
                          Kategori: {cur.category}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className={`border rounded-xl p-2.5 ${themeStyles.card}`}>
                          <span className={`text-[10px] font-bold block mb-0.5 uppercase tracking-wide ${themeStyles.mutedText}`}>
                            Titik Kritis Bahaya Klinis:
                          </span>
                          <p className={`text-[11px] leading-relaxed font-medium ${themeStyles.cardText}`}>
                            {cur.dangerAlert}
                          </p>
                        </div>

                        <div className={`border rounded-xl p-2.5 ${themeStyles.isLight ? 'bg-teal-50 border-teal-200' : 'bg-teal-500/10 border-teal-500/20'}`}>
                          <span className={`text-[10px] font-bold block mb-0.5 uppercase tracking-wide flex items-center gap-1 ${themeStyles.isLight ? 'text-teal-800' : 'text-teal-400'}`}>
                            <ShieldCheck className="w-3 h-3" />
                            Standar Pengamanan &amp; Double-Check:
                          </span>
                          <p className={`text-[11px] leading-relaxed font-medium ${themeStyles.isLight ? 'text-teal-950 font-medium' : 'text-teal-200'}`}>
                            {cur.safetyRule}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })()}

                {/* TEMPLATE 5: BUD PUYER & RACIKAN */}
                {template === 'bud' && (
                  <div className="space-y-4 pt-1">
                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${themeStyles.badge}`}>
                      <Clock className={`w-3 h-3 ${themeStyles.isLight ? 'text-teal-700' : 'text-teal-400'}`} />
                      <span>Standar Farmakope Indonesia VI &amp; USP &lt;795&gt;</span>
                    </div>

                    <div>
                      <h2 className={`text-lg font-black font-outfit ${themeStyles.heading}`}>
                        Aturan Menetapkan <span className={`bg-gradient-to-r ${themeStyles.accent} bg-clip-text text-transparent`}>Beyond-Use Date (BUD)</span> Puyer &amp; Racikan
                      </h2>
                      <p className={`text-[11px] mt-1 ${themeStyles.subtext}`}>
                        Jangan samakan BUD dengan tanggal kedaluwarsa pabrik (ED)!
                      </p>
                    </div>

                    <div className="space-y-2">
                      {[
                        { title: 'Puyer & Kapsul Bebas Air', bud: 'Maks 25% sisa ED asli atau 6 Bulan', note: 'Suhu ruang terkontrol, wadah tertutup rapat' },
                        { title: 'Sirup Kering Rekonstitusi (Sirup Kering)', bud: '7 - 14 Hari paska dilarutkan', note: 'Amoxicillin/Cefixime, ikuti monograf pabrik' },
                        { title: 'Sediaan Oral Mengandung Air', bud: 'Maksimal 14 Hari di Kulkas', note: 'Suhu dingin 2°C - 8°C' },
                        { title: 'Salep / Krim Bebas Air (Topikal)', bud: '30 - 90 Hari Suhu Ruang', note: 'Hindari kontaminasi jari/spatula kotor' }
                      ].map((item, idx) => (
                        <div key={idx} className={`p-2.5 rounded-xl border flex items-center justify-between gap-3 ${themeStyles.card}`}>
                          <div>
                            <div className={`text-[11px] font-bold font-outfit ${themeStyles.cardTitle}`}>{item.title}</div>
                            <div className={`text-[9px] ${themeStyles.mutedText}`}>{item.note}</div>
                          </div>
                          <div className={`px-2 py-1 rounded-lg border text-[10px] font-black text-right shrink-0 ${themeStyles.isLight ? 'bg-teal-50 text-teal-900 border-teal-200' : 'bg-teal-500/20 text-teal-300 border-teal-500/30'}`}>
                            {item.bud}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* TEMPLATE 6: DOWA */}
                {template === 'dowa' && (() => {
                  const cur = DOWA_PRESETS[selectedDowaIndex];
                  return (
                    <div className="space-y-4 pt-1">
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${themeStyles.badge}`}>
                        <Scale className={`w-3 h-3 ${themeStyles.isLight ? 'text-teal-700' : 'text-teal-400'}`} />
                        <span>KEPUTUSAN MENTERI KESEHATAN RI</span>
                      </div>

                      <div>
                        <h2 className={`text-lg sm:text-xl font-black font-outfit leading-tight ${themeStyles.heading}`}>
                          Aturan Penyerahan <span className={`bg-gradient-to-r ${themeStyles.accent} bg-clip-text text-transparent`}>Obat DOWA</span> di Apotek
                        </h2>
                        <p className={`text-[11px] mt-1 ${themeStyles.subtext}`}>
                          Ketentuan resmi penyerahan obat keras tanpa resep dokter oleh Apoteker.
                        </p>
                      </div>

                      <div className={`border rounded-2xl p-3.5 space-y-2 ${themeStyles.card}`}>
                        <div className="flex items-center justify-between border-b pb-2 border-slate-200/50 dark:border-white/10">
                          <div className="text-sm font-black font-outfit text-teal-600 dark:text-teal-300">
                            {cur.drugName}
                          </div>
                          <span className={`text-[9px] px-2 py-0.5 rounded-md font-bold ${themeStyles.isLight ? 'bg-slate-100 text-slate-700' : 'bg-white/10 text-slate-300'}`}>
                            {cur.regulationNo}
                          </span>
                        </div>

                        <div className={`p-2.5 rounded-xl border text-center ${themeStyles.isLight ? 'bg-teal-50 border-teal-200 text-teal-900' : 'bg-teal-500/20 border-teal-500/30 text-teal-300'}`}>
                          <span className="text-[10px] font-bold block uppercase tracking-wide opacity-80">Batas Maksimal Penyerahan:</span>
                          <span className="text-xs sm:text-sm font-black font-outfit block mt-0.5">{cur.maxDispense}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className={`border rounded-xl p-2.5 ${themeStyles.card}`}>
                          <span className={`text-[10px] font-bold block mb-0.5 uppercase tracking-wide ${themeStyles.mutedText}`}>
                            Indikasi Medis Terbatas:
                          </span>
                          <p className={`text-[11px] leading-relaxed font-medium ${themeStyles.cardText}`}>
                            {cur.indication}
                          </p>
                        </div>

                        <div className={`border rounded-xl p-2.5 ${themeStyles.isLight ? 'bg-amber-50 border-amber-200' : 'bg-amber-500/10 border-amber-500/20'}`}>
                          <span className={`text-[10px] font-bold block mb-0.5 uppercase tracking-wide flex items-center gap-1 ${themeStyles.isLight ? 'text-amber-800' : 'text-amber-400'}`}>
                            <FileCheck className="w-3 h-3" />
                            Edukasi &amp; Catatan Konseling Apoteker:
                          </span>
                          <p className={`text-[11px] leading-relaxed font-medium ${themeStyles.isLight ? 'text-amber-950 font-medium' : 'text-amber-200'}`}>
                            {cur.counselingPoint}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })()}

                {/* TEMPLATE 7: PREGNANCY & LACTATION */}
                {template === 'pregnancy' && (() => {
                  const cur = PREGNANCY_PRESETS[selectedPregnancyIndex];
                  return (
                    <div className="space-y-4 pt-1">
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${themeStyles.isLight ? 'bg-rose-50 text-rose-800 border-rose-200' : 'bg-rose-500/20 text-rose-300 border-rose-500/30'}`}>
                        <Baby className={`w-3 h-3 ${themeStyles.isLight ? 'text-rose-600' : 'text-rose-400'}`} />
                        <span>STANDAR KEAMANAN FDA &amp; BRIGGS DRUGS IN PREGNANCY</span>
                      </div>

                      <div>
                        <h2 className={`text-lg sm:text-xl font-black font-outfit leading-tight ${themeStyles.heading}`}>
                          Keamanan Obat <span className={`bg-gradient-to-r ${themeStyles.accent} bg-clip-text text-transparent`}>Ibu Hamil &amp; Janin</span>
                        </h2>
                        <p className={`text-[11px] mt-1 ${themeStyles.subtext}`}>
                          Mencegah risiko malformasi kongenital, fetotoksisitas, dan komplikasi persalinan.
                        </p>
                      </div>

                      <div className={`border rounded-2xl p-3.5 space-y-2 ${themeStyles.card}`}>
                        <div className="flex items-center justify-between border-b pb-2 border-slate-200/50 dark:border-white/10">
                          <div className="text-sm font-black font-outfit">
                            {cur.drugName}
                          </div>
                          <span className="text-[10px] px-2.5 py-0.5 rounded-full font-black bg-rose-500/20 text-rose-600 dark:text-rose-300 border border-rose-500/30">
                            {cur.fdaCategory}
                          </span>
                        </div>

                        <div className="text-[11px] font-black text-rose-600 dark:text-rose-400 flex items-center gap-1">
                          <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                          <span>{cur.trimesterRisk}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className={`border rounded-xl p-2.5 ${themeStyles.card}`}>
                          <span className={`text-[10px] font-bold block mb-0.5 uppercase tracking-wide ${themeStyles.mutedText}`}>
                            Bahaya Teratogenik / Fetotoksik:
                          </span>
                          <p className={`text-[11px] leading-relaxed font-medium ${themeStyles.cardText}`}>
                            {cur.teratogenicDanger}
                          </p>
                        </div>

                        <div className={`border rounded-xl p-2.5 ${themeStyles.isLight ? 'bg-emerald-50 border-emerald-200' : 'bg-emerald-500/10 border-emerald-500/20'}`}>
                          <span className={`text-[10px] font-bold block mb-0.5 uppercase tracking-wide flex items-center gap-1 ${themeStyles.isLight ? 'text-emerald-800' : 'text-emerald-400'}`}>
                            <HeartHandshake className="w-3 h-3" />
                            Alternatif Lini Pertama Paling Aman:
                          </span>
                          <p className={`text-[11px] leading-relaxed font-medium ${themeStyles.isLight ? 'text-emerald-950 font-medium' : 'text-emerald-200'}`}>
                            {cur.safeAlternative}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })()}

                {/* TEMPLATE 8: TOXICOLOGY & ANTIDOTES */}
                {template === 'toxicology' && (() => {
                  const cur = TOXICOLOGY_PRESETS[selectedToxicologyIndex];
                  return (
                    <div className="space-y-4 pt-1">
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${themeStyles.isLight ? 'bg-amber-50 text-amber-900 border-amber-200' : 'bg-amber-500/20 text-amber-300 border-amber-500/30'}`}>
                        <Skull className={`w-3 h-3 ${themeStyles.isLight ? 'text-amber-700' : 'text-amber-400'}`} />
                        <span>SENTRA TOKSIKOLOGI &amp; GAWAT DARURAT IGD</span>
                      </div>

                      <div>
                        <h2 className={`text-lg sm:text-xl font-black font-outfit leading-tight ${themeStyles.heading}`}>
                          Toksikologi Klinis &amp; <span className={`bg-gradient-to-r ${themeStyles.accent} bg-clip-text text-transparent`}>Antidotum Spesifik</span>
                        </h2>
                        <p className={`text-[11px] mt-1 ${themeStyles.subtext}`}>
                          Protokol intervensi penawar racun lini pertama pada kegawatdaruratan intoksikasi akut.
                        </p>
                      </div>

                      <div className={`border rounded-2xl p-3 space-y-2 text-center ${themeStyles.card}`}>
                        <div className="flex items-center justify-center gap-2 font-outfit">
                          <div className={`px-2.5 py-1.5 rounded-xl font-black text-xs sm:text-sm border ${themeStyles.isLight ? 'bg-rose-50 text-rose-900 border-rose-200' : 'bg-rose-500/20 text-rose-300 border-rose-500/30'}`}>
                            {cur.toxicAgent}
                          </div>
                          <span className="text-teal-500 font-black text-sm">➡️</span>
                          <div className={`px-2.5 py-1.5 rounded-xl font-black text-xs sm:text-sm border ${themeStyles.isLight ? 'bg-emerald-50 text-emerald-900 border-emerald-200' : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'}`}>
                            {cur.antidoteName}
                          </div>
                        </div>
                        <div className={`text-[10px] font-medium ${themeStyles.mutedText}`}>
                          Ambang Toksisitas: {cur.overdoseThreshold}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className={`border rounded-xl p-2.5 ${themeStyles.card}`}>
                          <span className={`text-[10px] font-bold block mb-0.5 uppercase tracking-wide ${themeStyles.mutedText}`}>
                            Mekanisme Keracunan:
                          </span>
                          <p className={`text-[11px] leading-relaxed font-medium ${themeStyles.cardText}`}>
                            {cur.toxicMechanism}
                          </p>
                        </div>

                        <div className={`border rounded-xl p-2.5 ${themeStyles.isLight ? 'bg-emerald-50 border-emerald-200' : 'bg-emerald-500/10 border-emerald-500/20'}`}>
                          <span className={`text-[10px] font-bold block mb-0.5 uppercase tracking-wide flex items-center gap-1 ${themeStyles.isLight ? 'text-emerald-800' : 'text-emerald-400'}`}>
                            <CheckCircle2 className="w-3 h-3" />
                            Protokol Pemberian Antidotum:
                          </span>
                          <p className={`text-[11px] leading-relaxed font-medium ${themeStyles.isLight ? 'text-emerald-950 font-medium' : 'text-emerald-200'}`}>
                            {cur.antidoteProtocol}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })()}

                {/* TEMPLATE 9: STATS & WOW FACTOR */}
                {template === 'stats' && (
                  <div className="space-y-4 pt-1">
                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${themeStyles.isLight ? 'bg-amber-50 text-amber-900 border-amber-200' : 'bg-amber-500/20 text-amber-300 border-amber-500/30'}`}>
                      <Flame className={`w-3 h-3 ${themeStyles.isLight ? 'text-amber-600' : 'text-amber-400'}`} />
                      <span>Paling Lengkap &amp; Terpercaya</span>
                    </div>

                    <div>
                      <h2 className={`text-xl font-black font-outfit ${themeStyles.heading}`}>
                        Kekuatan Database Klinis <span className={`bg-gradient-to-r ${themeStyles.accent} bg-clip-text text-transparent`}>FarmasiDruggist</span>
                      </h2>
                      <p className={`text-[11px] mt-0.5 ${themeStyles.subtext}`}>
                        Divalidasi langsung dari standar Kemenkes RI dan institusi global.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5 pt-1">
                      <div className={`p-3 rounded-2xl border text-center ${themeStyles.card}`}>
                        <div className={`text-2xl font-black font-outfit ${themeStyles.stat78}`}>78+</div>
                        <div className={`text-[11px] font-bold mt-0.5 ${themeStyles.cardTitle}`}>Literatur EBM</div>
                        <div className={`text-[9px] ${themeStyles.mutedText}`}>PNPK, ADA, AHA, ASHP</div>
                      </div>
                      <div className={`p-3 rounded-2xl border text-center ${themeStyles.card}`}>
                        <div className={`text-2xl font-black font-outfit ${themeStyles.stat90}`}>90</div>
                        <div className={`text-[11px] font-bold mt-0.5 ${themeStyles.cardTitle}`}>Hafalan Obat</div>
                        <div className={`text-[9px] ${themeStyles.mutedText}`}>20 Bab Farmakoterapi</div>
                      </div>
                      <div className={`p-3 rounded-2xl border text-center ${themeStyles.card}`}>
                        <div className={`text-2xl font-black font-outfit ${themeStyles.stat57}`}>57</div>
                        <div className={`text-[11px] font-bold mt-0.5 ${themeStyles.cardTitle}`}>SOP Pelayanan</div>
                        <div className={`text-[9px] ${themeStyles.mutedText}`}>Akreditasi &amp; Standar RS</div>
                      </div>
                      <div className={`p-3 rounded-2xl border text-center ${themeStyles.card}`}>
                        <div className={`text-2xl font-black font-outfit ${themeStyles.stat52}`}>52</div>
                        <div className={`text-[11px] font-bold mt-0.5 ${themeStyles.cardTitle}`}>Regulasi Farmasi</div>
                        <div className={`text-[9px] ${themeStyles.mutedText}`}>DOWA 1-2-3 &amp; UU Kesehatan</div>
                      </div>
                    </div>

                    <div className={`p-2.5 rounded-xl border text-center ${themeStyles.widePill}`}>
                      <div className="text-xs font-black font-outfit">
                        11.000+ Database Interaksi Klinis Terkurasi
                      </div>
                    </div>
                  </div>
                )}

                {/* TEMPLATE 10: SWAM-TRIAGE (RED FLAGS) */}
                {template === 'swam-triage' && (() => {
                  const cur = SWAM_TRIAGE_PRESETS[selectedTriageIndex];
                  return (
                    <div className="space-y-4 pt-1">
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${themeStyles.isLight ? 'bg-rose-50 text-rose-800 border-rose-200' : 'bg-rose-500/20 text-rose-300 border-rose-500/30'}`}>
                        <AlertTriangle className="w-3 h-3 text-rose-500" />
                        <span>TRIAGE APOTEK &amp; RED FLAGS RUJUK DOKTER</span>
                      </div>

                      <div>
                        <h2 className={`text-lg sm:text-xl font-black font-outfit leading-tight ${themeStyles.heading}`}>
                          Triage Swamedikasi: <span className={`bg-gradient-to-r ${themeStyles.accent} bg-clip-text text-transparent`}>{cur.condition}</span>
                        </h2>
                        <p className={`text-[11px] mt-1 ${themeStyles.subtext}`}>
                          Apoteker wajib mengenali tanda bahaya sebelum merekomendasikan obat bebas.
                        </p>
                      </div>

                      <div className={`border rounded-2xl p-3 space-y-1.5 ${themeStyles.card}`}>
                        <div className="flex items-center justify-between">
                          <span className={`text-[10px] font-black uppercase tracking-wider ${themeStyles.mutedText}`}>Kriteria Swamedikasi Aman:</span>
                          <span className={`text-[9px] px-2 py-0.5 rounded-md font-bold ${themeStyles.isLight ? 'bg-teal-50 text-teal-800' : 'bg-teal-500/20 text-teal-300'}`}>
                            {cur.maxSelfMedDays}
                          </span>
                        </div>
                        <p className={`text-[11px] leading-relaxed font-medium ${themeStyles.cardText}`}>
                          {cur.safeForSelfMed}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <div className={`border-2 rounded-xl p-2.5 ${themeStyles.isLight ? 'bg-rose-50/70 border-rose-300' : 'bg-rose-950/40 border-rose-500/40'}`}>
                          <span className="text-[10px] font-black uppercase tracking-wide flex items-center gap-1 text-rose-600 dark:text-rose-400">
                            <AlertCircle className="w-3 h-3" />
                            RED FLAGS (Wajib Segera Rujuk Dokter!):
                          </span>
                          <p className={`text-[11px] leading-relaxed font-medium mt-0.5 ${themeStyles.isLight ? 'text-rose-950 font-medium' : 'text-rose-200'}`}>
                            {cur.redFlagsToRefer}
                          </p>
                        </div>

                        <div className={`border rounded-xl p-2.5 ${themeStyles.isLight ? 'bg-teal-50 border-teal-200' : 'bg-teal-500/10 border-teal-500/20'}`}>
                          <span className={`text-[10px] font-bold block mb-0.5 uppercase tracking-wide flex items-center gap-1 ${themeStyles.isLight ? 'text-teal-800' : 'text-teal-400'}`}>
                            <CheckCircle2 className="w-3 h-3" />
                            Rekomendasi Farmakoterapi Lini 1:
                          </span>
                          <p className={`text-[11px] leading-relaxed font-medium ${themeStyles.isLight ? 'text-teal-950 font-medium' : 'text-teal-200'}`}>
                            {cur.pharmacistRecommendation}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })()}

                {/* TEMPLATE 11: SWAM-BATUK */}
                {template === 'swam-batuk' && (() => {
                  const cur = SWAM_BATUK_PRESETS[selectedBatukIndex];
                  return (
                    <div className="space-y-4 pt-1">
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${themeStyles.badge}`}>
                        <HeartPulse className="w-3 h-3 text-teal-500" />
                        <span>PANDUAN SWAMEDIKASI RESPIRATORI APOTEK</span>
                      </div>

                      <div>
                        <h2 className={`text-lg sm:text-xl font-black font-outfit leading-tight ${themeStyles.heading}`}>
                          Manajemen Batuk: <span className={`bg-gradient-to-r ${themeStyles.accent} bg-clip-text text-transparent`}>{cur.coughType}</span>
                        </h2>
                        <p className={`text-[11px] mt-1 ${themeStyles.subtext}`}>
                          Pemilihan obat yang tepat: Antitusif, Ekspektoran, Mukolitik, atau Dekongestan.
                        </p>
                      </div>

                      <div className={`border rounded-2xl p-3 space-y-1.5 ${themeStyles.card}`}>
                        <span className={`text-[10px] font-bold uppercase tracking-wide ${themeStyles.mutedText}`}>Ciri Khas &amp; Gejala Klinis:</span>
                        <p className={`text-[11px] leading-relaxed font-medium ${themeStyles.cardText}`}>
                          {cur.characteristics}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <div className={`border rounded-xl p-2.5 ${themeStyles.isLight ? 'bg-teal-50 border-teal-200' : 'bg-teal-500/10 border-teal-500/20'}`}>
                          <span className={`text-[10px] font-bold block mb-0.5 uppercase tracking-wide flex items-center gap-1 ${themeStyles.isLight ? 'text-teal-800' : 'text-teal-400'}`}>
                            <Pill className="w-3 h-3" />
                            Pilihan Obat Bebas / Bebas Terbatas (Lini 1):
                          </span>
                          <p className={`text-[11px] leading-relaxed font-black ${themeStyles.isLight ? 'text-teal-950' : 'text-teal-200'}`}>
                            {cur.firstLineDrug}
                          </p>
                        </div>

                        <div className={`border rounded-xl p-2.5 ${themeStyles.isLight ? 'bg-amber-50 border-amber-200' : 'bg-amber-500/10 border-amber-500/20'}`}>
                          <span className={`text-[10px] font-bold block mb-0.5 uppercase tracking-wide flex items-center gap-1 ${themeStyles.isLight ? 'text-amber-800' : 'text-amber-400'}`}>
                            <AlertTriangle className="w-3 h-3" />
                            Peringatan Bahaya / Kontraindikasi:
                          </span>
                          <p className={`text-[11px] leading-relaxed font-medium ${themeStyles.isLight ? 'text-amber-950' : 'text-amber-200'}`}>
                            {cur.contraindicationAlert}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })()}

                {/* TEMPLATE 12: SWAM-DIARE */}
                {template === 'swam-diare' && (() => {
                  const cur = SWAM_DIARE_PRESETS[selectedDiareIndex];
                  return (
                    <div className="space-y-4 pt-1">
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${themeStyles.badge}`}>
                        <Stethoscope className="w-3 h-3 text-teal-500" />
                        <span>STANDAR TATALAKSANA DIARE AKUT WHO &amp; KEMENKES</span>
                      </div>

                      <div>
                        <h2 className={`text-lg sm:text-xl font-black font-outfit leading-tight ${themeStyles.heading}`}>
                          Protokol Diare: <span className={`bg-gradient-to-r ${themeStyles.accent} bg-clip-text text-transparent`}>{cur.patientGroup}</span>
                        </h2>
                        <p className={`text-[11px] mt-1 ${themeStyles.subtext}`}>
                          Cegah dehidrasi fatal dengan rehidrasi dini dan suplementasi Zinc 10 hari.
                        </p>
                      </div>

                      <div className={`border rounded-2xl p-3 space-y-1.5 ${themeStyles.card}`}>
                        <span className={`text-[10px] font-bold uppercase tracking-wide ${themeStyles.mutedText}`}>1. Rehidrasi Utama (Cegah Dehidrasi):</span>
                        <p className={`text-[11px] leading-relaxed font-medium ${themeStyles.cardText}`}>
                          {cur.primaryTherapy}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <div className={`border rounded-xl p-2.5 ${themeStyles.isLight ? 'bg-emerald-50 border-emerald-200' : 'bg-emerald-500/10 border-emerald-500/20'}`}>
                          <span className={`text-[10px] font-bold block mb-0.5 uppercase tracking-wide flex items-center gap-1 ${themeStyles.isLight ? 'text-emerald-800' : 'text-emerald-400'}`}>
                            <CheckCircle2 className="w-3 h-3" />
                            2. Terapi Suplementasi (Zinc / Adsorben):
                          </span>
                          <p className={`text-[11px] leading-relaxed font-medium ${themeStyles.isLight ? 'text-emerald-950 font-medium' : 'text-emerald-200'}`}>
                            {cur.supplementTherapy}
                          </p>
                        </div>

                        <div className={`border rounded-xl p-2.5 ${themeStyles.isLight ? 'bg-rose-50 border-rose-200' : 'bg-rose-500/10 border-rose-500/20'}`}>
                          <span className={`text-[10px] font-bold block mb-0.5 uppercase tracking-wide flex items-center gap-1 ${themeStyles.isLight ? 'text-rose-800' : 'text-rose-400'}`}>
                            <AlertTriangle className="w-3 h-3" />
                            Peringatan Keras (Dilarang):
                          </span>
                          <p className={`text-[11px] leading-relaxed font-medium ${themeStyles.isLight ? 'text-rose-950' : 'text-rose-200'}`}>
                            {cur.contraindicatedDrug}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })()}

                {/* TEMPLATE 13: SWAM-MAAG */}
                {template === 'swam-maag' && (() => {
                  const cur = SWAM_MAAG_PRESETS[selectedMaagIndex];
                  return (
                    <div className="space-y-4 pt-1">
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${themeStyles.badge}`}>
                        <Pill className="w-3 h-3 text-teal-500" />
                        <span>MANAJEMEN DISPEPSIA, MAAG &amp; GERD</span>
                      </div>

                      <div>
                        <h2 className={`text-lg sm:text-xl font-black font-outfit leading-tight ${themeStyles.heading}`}>
                          Obat Lambung: <span className={`bg-gradient-to-r ${themeStyles.accent} bg-clip-text text-transparent`}>{cur.complaintName}</span>
                        </h2>
                        <p className={`text-[11px] mt-1 ${themeStyles.subtext}`}>
                          Perbedaan cara kerja dan waktu konsumsi obat antasida, PPI, dan mukoprotektor.
                        </p>
                      </div>

                      <div className={`border rounded-2xl p-3 space-y-1.5 ${themeStyles.card}`}>
                        <div className="text-xs font-black font-outfit text-teal-600 dark:text-teal-300">
                          {cur.preferredDrug}
                        </div>
                        <p className={`text-[11px] leading-relaxed font-medium ${themeStyles.mutedText}`}>
                          Mekanisme: {cur.mechanismRole}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <div className={`border rounded-xl p-2.5 ${themeStyles.isLight ? 'bg-teal-50 border-teal-200' : 'bg-teal-500/10 border-teal-500/20'}`}>
                          <span className={`text-[10px] font-bold block mb-0.5 uppercase tracking-wide flex items-center gap-1 ${themeStyles.isLight ? 'text-teal-800' : 'text-teal-400'}`}>
                            <Clock className="w-3 h-3" />
                            Waktu &amp; Cara Minum yang Benar:
                          </span>
                          <p className={`text-[11px] leading-relaxed font-bold ${themeStyles.isLight ? 'text-teal-950' : 'text-teal-200'}`}>
                            {cur.administrationTiming}
                          </p>
                        </div>

                        <div className={`border rounded-xl p-2.5 ${themeStyles.isLight ? 'bg-amber-50 border-amber-200' : 'bg-amber-500/10 border-amber-500/20'}`}>
                          <span className={`text-[10px] font-bold block mb-0.5 uppercase tracking-wide flex items-center gap-1 ${themeStyles.isLight ? 'text-amber-800' : 'text-amber-400'}`}>
                            <AlertTriangle className="w-3 h-3" />
                            Waspada Interaksi Obat:
                          </span>
                          <p className={`text-[11px] leading-relaxed font-medium ${themeStyles.isLight ? 'text-amber-950' : 'text-amber-200'}`}>
                            {cur.drugInteractionAlert}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })()}

                {/* TEMPLATE 14: DRUG-LAB INTERACTION */}
                {template === 'drug-lab' && (() => {
                  const cur = DRUG_LAB_PRESETS[selectedDrugLabIndex];
                  return (
                    <div className="space-y-4 pt-1">
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${themeStyles.isLight ? 'bg-amber-50 text-amber-900 border-amber-200' : 'bg-amber-500/20 text-amber-300 border-amber-500/30'}`}>
                        <TestTube className="w-3 h-3 text-amber-500" />
                        <span>INTERAKSI OBAT DENGAN PEMERIKSAAN LABORATORIUM</span>
                      </div>

                      <div>
                        <h2 className={`text-lg sm:text-xl font-black font-outfit leading-tight ${themeStyles.heading}`}>
                          Pengaruh Obat pada <span className={`bg-gradient-to-r ${themeStyles.accent} bg-clip-text text-transparent`}>Hasil Uji Lab</span>
                        </h2>
                        <p className={`text-[11px] mt-1 ${themeStyles.subtext}`}>
                          Kenali obat yang menyebabkan hasil positif/negatif palsu pada tes darah &amp; urin.
                        </p>
                      </div>

                      <div className={`border rounded-2xl p-3 text-center space-y-1.5 ${themeStyles.card}`}>
                        <div className="text-xs font-black font-outfit text-rose-600 dark:text-rose-400">
                          {cur.drugName} ➔ {cur.labTestAffected}
                        </div>
                        <div className={`inline-block text-[10px] px-2.5 py-0.5 rounded-full font-black uppercase tracking-wide ${themeStyles.isLight ? 'bg-rose-100 text-rose-800' : 'bg-rose-500/20 text-rose-300'}`}>
                          {cur.testImpact}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className={`border rounded-xl p-2.5 ${themeStyles.card}`}>
                          <span className={`text-[10px] font-bold block mb-0.5 uppercase tracking-wide ${themeStyles.mutedText}`}>
                            Mekanisme Pengacauan Hasil Lab:
                          </span>
                          <p className={`text-[11px] leading-relaxed font-medium ${themeStyles.cardText}`}>
                            {cur.clinicalExplanation}
                          </p>
                        </div>

                        <div className={`border rounded-xl p-2.5 ${themeStyles.isLight ? 'bg-teal-50 border-teal-200' : 'bg-teal-500/10 border-teal-500/20'}`}>
                          <span className={`text-[10px] font-bold block mb-0.5 uppercase tracking-wide flex items-center gap-1 ${themeStyles.isLight ? 'text-teal-800' : 'text-teal-400'}`}>
                            <CheckCircle2 className="w-3 h-3" />
                            Rekomendasi Penanganan Klinis:
                          </span>
                          <p className={`text-[11px] leading-relaxed font-medium ${themeStyles.isLight ? 'text-teal-950 font-medium' : 'text-teal-200'}`}>
                            {cur.recommendation}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })()}

                {/* TEMPLATE 15: SIDE EFFECTS & NARANJO */}
                {template === 'side-effects' && (() => {
                  const cur = SIDE_EFFECT_PRESETS[selectedSideEffectIndex];
                  return (
                    <div className="space-y-4 pt-1">
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${themeStyles.isLight ? 'bg-rose-50 text-rose-800 border-rose-200' : 'bg-rose-500/20 text-rose-300 border-rose-500/30'}`}>
                        <Activity className="w-3 h-3 text-rose-500" />
                        <span>FARMAKOVIGILANS &amp; KAUSALITAS ALGORITMA NARANJO</span>
                      </div>

                      <div>
                        <h2 className={`text-lg sm:text-xl font-black font-outfit leading-tight ${themeStyles.heading}`}>
                          Efek Samping Obat: <span className={`bg-gradient-to-r ${themeStyles.accent} bg-clip-text text-transparent`}>{cur.adverseEffect}</span>
                        </h2>
                        <p className={`text-[11px] mt-1 ${themeStyles.subtext}`}>
                          Kausalitas Adverse Drug Reaction (ADR) dan rencana tindak lanjut apoteker.
                        </p>
                      </div>

                      <div className={`border rounded-2xl p-3 flex items-center justify-between gap-3 ${themeStyles.card}`}>
                        <div>
                          <span className={`text-[10px] font-bold uppercase block ${themeStyles.mutedText}`}>Obat Penyebab:</span>
                          <span className="text-xs font-black font-outfit text-rose-600 dark:text-rose-300">{cur.drugName}</span>
                        </div>
                        <div className={`px-2.5 py-1 rounded-xl text-[10px] font-black border text-right shrink-0 ${themeStyles.isLight ? 'bg-rose-100 text-rose-900 border-rose-200' : 'bg-rose-500/20 text-rose-300 border-rose-500/30'}`}>
                          {cur.naranjoScore}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className={`border rounded-xl p-2.5 ${themeStyles.card}`}>
                          <span className={`text-[10px] font-bold block mb-0.5 uppercase tracking-wide ${themeStyles.mutedText}`}>
                            Patofisiologi Terjadinya Efek Samping:
                          </span>
                          <p className={`text-[11px] leading-relaxed font-medium ${themeStyles.cardText}`}>
                            {cur.pathophysiology}
                          </p>
                        </div>

                        <div className={`border rounded-xl p-2.5 ${themeStyles.isLight ? 'bg-emerald-50 border-emerald-200' : 'bg-emerald-500/10 border-emerald-500/20'}`}>
                          <span className={`text-[10px] font-bold block mb-0.5 uppercase tracking-wide flex items-center gap-1 ${themeStyles.isLight ? 'text-emerald-800' : 'text-emerald-400'}`}>
                            <ShieldCheck className="w-3 h-3" />
                            Action Plan / Rekomendasi Terapi:
                          </span>
                          <p className={`text-[11px] leading-relaxed font-medium ${themeStyles.isLight ? 'text-emerald-950 font-medium' : 'text-emerald-200'}`}>
                            {cur.actionPlan}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })()}

                {/* TEMPLATE 16: RENAL DOSING */}
                {template === 'renal-dosing' && (() => {
                  const cur = RENAL_DOSING_PRESETS[selectedRenalIndex];
                  return (
                    <div className="space-y-4 pt-1">
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${themeStyles.badge}`}>
                        <Calculator className="w-3 h-3 text-teal-500" />
                        <span>PANDUAN PENYESUAIAN DOSIS GINJAL KDIGO &amp; COCKCROFT</span>
                      </div>

                      <div>
                        <h2 className={`text-lg sm:text-xl font-black font-outfit leading-tight ${themeStyles.heading}`}>
                          Dosis Gangguan Ginjal: <span className={`bg-gradient-to-r ${themeStyles.accent} bg-clip-text text-transparent`}>{cur.drugName}</span>
                        </h2>
                        <p className={`text-[11px] mt-1 ${themeStyles.subtext}`}>
                          Penurunan laju filtrasi glomerulus menuntut penyesuaian dosis untuk mencegah akumulasi toksik.
                        </p>
                      </div>

                      <div className={`border rounded-2xl p-3 space-y-2 ${themeStyles.card}`}>
                        <div className="flex items-center justify-between border-b pb-2 border-slate-200/50 dark:border-white/10">
                          <span className={`text-[10px] font-bold uppercase ${themeStyles.mutedText}`}>Dosis Standar (Fungsi Normal):</span>
                          <span className="text-xs font-black font-outfit">{cur.standardDose}</span>
                        </div>
                        <div>
                          <span className="text-[10px] font-black uppercase tracking-wider text-rose-500 block mb-1">
                            Penyesuaian ({cur.cutoffCrCl}):
                          </span>
                          <div className={`p-2 rounded-xl text-xs font-bold leading-relaxed border ${themeStyles.isLight ? 'bg-teal-50 text-teal-900 border-teal-200' : 'bg-teal-500/20 text-teal-300 border-teal-500/30'}`}>
                            {cur.adjustedDose}
                          </div>
                        </div>
                      </div>

                      <div className={`border rounded-xl p-2.5 ${themeStyles.isLight ? 'bg-rose-50 border-rose-200' : 'bg-rose-500/10 border-rose-500/20'}`}>
                        <span className={`text-[10px] font-bold block mb-0.5 uppercase tracking-wide flex items-center gap-1 ${themeStyles.isLight ? 'text-rose-800' : 'text-rose-400'}`}>
                          <AlertTriangle className="w-3 h-3" />
                          Bahaya Akumulasi Bila Dosis Tidak Disesuaikan:
                        </span>
                        <p className={`text-[11px] leading-relaxed font-medium ${themeStyles.isLight ? 'text-rose-950' : 'text-rose-200'}`}>
                          {cur.clinicalToxicity}
                        </p>
                      </div>
                    </div>
                  );
                })()}

                {/* TEMPLATE 17: PEDIATRIC DOSE */}
                {template === 'pediatric-dose' && (() => {
                  const cur = PEDIATRIC_DOSE_PRESETS[selectedPediatricIndex];
                  return (
                    <div className="space-y-4 pt-1">
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${themeStyles.badge}`}>
                        <Baby className="w-3 h-3 text-teal-500" />
                        <span>KALKULATOR DOSIS PUYER PEDIATRIK &amp; RACIKAN</span>
                      </div>

                      <div>
                        <h2 className={`text-lg sm:text-xl font-black font-outfit leading-tight ${themeStyles.heading}`}>
                          Perhitungan Dosis Anak: <span className={`bg-gradient-to-r ${themeStyles.accent} bg-clip-text text-transparent`}>{cur.drugName}</span>
                        </h2>
                        <p className={`text-[11px] mt-1 ${themeStyles.subtext}`}>
                          Penetapan dosis berbasis berat badan (mg/kgBB) dan teknik peracikan puyer yang aman.
                        </p>
                      </div>

                      <div className={`border rounded-2xl p-3 space-y-2 ${themeStyles.card}`}>
                        <div>
                          <span className={`text-[10px] font-bold uppercase block ${themeStyles.mutedText}`}>Rumus Dosis Standar:</span>
                          <span className="text-xs font-black font-outfit text-teal-600 dark:text-teal-300">{cur.doseRuleMgKg}</span>
                        </div>
                        <div className="border-t pt-2 border-slate-200/50 dark:border-white/10">
                          <span className={`text-[10px] font-bold uppercase block ${themeStyles.mutedText}`}>Batas Maksimal Dosis:</span>
                          <span className="text-xs font-bold text-amber-600 dark:text-amber-300">{cur.maxDoseRule}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className={`border rounded-xl p-2.5 ${themeStyles.isLight ? 'bg-teal-50 border-teal-200' : 'bg-teal-500/10 border-teal-500/20'}`}>
                          <span className={`text-[10px] font-bold block mb-0.5 uppercase tracking-wide flex items-center gap-1 ${themeStyles.isLight ? 'text-teal-800' : 'text-teal-400'}`}>
                            <Calculator className="w-3 h-3" />
                            Simulasi Perhitungan Nyata:
                          </span>
                          <p className={`text-[11px] leading-relaxed font-bold ${themeStyles.isLight ? 'text-teal-950' : 'text-teal-200'}`}>
                            {cur.exampleCalculation}
                          </p>
                        </div>

                        <div className={`border rounded-xl p-2.5 ${themeStyles.card}`}>
                          <span className={`text-[10px] font-bold block mb-0.5 uppercase tracking-wide ${themeStyles.mutedText}`}>
                            Tips Peracikan &amp; Bobot Pengisi SL:
                          </span>
                          <p className={`text-[11px] leading-relaxed font-medium ${themeStyles.cardText}`}>
                            {cur.compoundingTips}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })()}

                {/* TEMPLATE 18: BEERS GERIATRIC */}
                {template === 'beers-geriatric' && (() => {
                  const cur = BEERS_PRESETS[selectedBeersIndex];
                  return (
                    <div className="space-y-4 pt-1">
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${themeStyles.isLight ? 'bg-rose-50 text-rose-800 border-rose-200' : 'bg-rose-500/20 text-rose-300 border-rose-500/30'}`}>
                        <AlertTriangle className="w-3 h-3 text-rose-500" />
                        <span>STANDAR KRITERIA BEERS AGS 2023 - OBAT BERISIKO LANSIA</span>
                      </div>

                      <div>
                        <h2 className={`text-lg sm:text-xl font-black font-outfit leading-tight ${themeStyles.heading}`}>
                          Waspada Geriatri: <span className={`bg-gradient-to-r ${themeStyles.accent} bg-clip-text text-transparent`}>{cur.drugName}</span>
                        </h2>
                        <p className={`text-[11px] mt-1 ${themeStyles.subtext}`}>
                          Potentially Inappropriate Medications (PIMs) yang harus dihindari pada pasien usia lanjut &ge;65 tahun.
                        </p>
                      </div>

                      <div className={`border rounded-2xl p-3 text-center space-y-1.5 ${themeStyles.card}`}>
                        <span className={`text-[10px] font-bold uppercase tracking-wider ${themeStyles.mutedText}`}>Klasifikasi Kriteria Beers:</span>
                        <div className="text-xs font-black font-outfit text-rose-600 dark:text-rose-300">
                          {cur.beersClass}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className={`border rounded-xl p-2.5 ${themeStyles.isLight ? 'bg-rose-50 border-rose-200' : 'bg-rose-500/10 border-rose-500/20'}`}>
                          <span className={`text-[10px] font-bold block mb-0.5 uppercase tracking-wide flex items-center gap-1 ${themeStyles.isLight ? 'text-rose-800' : 'text-rose-400'}`}>
                            <AlertCircle className="w-3 h-3" />
                            Bahaya Spesifik pada Lansia:
                          </span>
                          <p className={`text-[11px] leading-relaxed font-medium ${themeStyles.isLight ? 'text-rose-950' : 'text-rose-200'}`}>
                            {cur.geriatricDanger}
                          </p>
                        </div>

                        <div className={`border rounded-xl p-2.5 ${themeStyles.isLight ? 'bg-emerald-50 border-emerald-200' : 'bg-emerald-500/10 border-emerald-500/20'}`}>
                          <span className={`text-[10px] font-bold block mb-0.5 uppercase tracking-wide flex items-center gap-1 ${themeStyles.isLight ? 'text-emerald-800' : 'text-emerald-400'}`}>
                            <CheckCircle2 className="w-3 h-3" />
                            Alternatif Terapi Paling Aman:
                          </span>
                          <p className={`text-[11px] leading-relaxed font-medium ${themeStyles.isLight ? 'text-emerald-950 font-medium' : 'text-emerald-200'}`}>
                            {cur.saferAlternative}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })()}

                {/* TEMPLATE 19: PATIENT COUNSELING */}
                {template === 'patient-counseling' && (() => {
                  const cur = PATIENT_COUNSELING_PRESETS[selectedCounselingIndex];
                  return (
                    <div className="space-y-4 pt-1">
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${themeStyles.badge}`}>
                        <Stethoscope className="w-3 h-3 text-teal-500" />
                        <span>PELAYANAN INFORMASI OBAT &amp; CARA PAKAI ALAT KHUSUS</span>
                      </div>

                      <div>
                        <h2 className={`text-lg sm:text-xl font-black font-outfit leading-tight ${themeStyles.heading}`}>
                          Cara Pakai: <span className={`bg-gradient-to-r ${themeStyles.accent} bg-clip-text text-transparent`}>{cur.deviceType}</span>
                        </h2>
                        <p className={`text-[11px] mt-1 ${themeStyles.subtext}`}>
                          Teknik penggunaan yang tepat menentukan keberhasilan dan efektivitas terapi pasien.
                        </p>
                      </div>

                      <div className={`border rounded-2xl p-3 space-y-1.5 ${themeStyles.card}`}>
                        <span className={`text-[10px] font-bold uppercase tracking-wide block ${themeStyles.mutedText}`}>Protokol Penggunaan Benar:</span>
                        <div className="space-y-1">
                          {cur.stepByStepProtocol.slice(0, 4).map((step, idx) => (
                            <div key={idx} className={`text-[10px] leading-relaxed font-medium ${themeStyles.cardText}`}>
                              {step}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className={`border rounded-xl p-2.5 ${themeStyles.isLight ? 'bg-rose-50 border-rose-200' : 'bg-rose-500/10 border-rose-500/20'}`}>
                          <span className={`text-[10px] font-bold block mb-0.5 uppercase tracking-wide flex items-center gap-1 ${themeStyles.isLight ? 'text-rose-800' : 'text-rose-400'}`}>
                            <AlertTriangle className="w-3 h-3" />
                            Kesalahan Fatal yang Sering Terjadi:
                          </span>
                          <p className={`text-[11px] leading-relaxed font-medium ${themeStyles.isLight ? 'text-rose-950' : 'text-rose-200'}`}>
                            {cur.criticalMistakesToAvoid}
                          </p>
                        </div>

                        <div className={`border rounded-xl p-2.5 ${themeStyles.isLight ? 'bg-teal-50 border-teal-200' : 'bg-teal-500/10 border-teal-500/20'}`}>
                          <span className={`text-[10px] font-bold block mb-0.5 uppercase tracking-wide flex items-center gap-1 ${themeStyles.isLight ? 'text-teal-800' : 'text-teal-400'}`}>
                            <CheckCircle2 className="w-3 h-3" />
                            Penyimpanan &amp; Kebersihan:
                          </span>
                          <p className={`text-[11px] leading-relaxed font-medium ${themeStyles.isLight ? 'text-teal-950 font-medium' : 'text-teal-200'}`}>
                            {cur.cleaningInstructions}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })()}

                {/* TEMPLATE 20: DRUG NOTES (TDM UKMPPAI) */}
                {template === 'drug-notes' && (() => {
                  const cur = DRUG_NOTES_PRESETS[selectedDrugNotesIndex];
                  return (
                    <div className="space-y-4 pt-1">
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${themeStyles.badge}`}>
                        <GraduationCap className="w-3 h-3 text-teal-500" />
                        <span>FLASHCARD FARMAKOTERAPI &amp; TDM UKMPPAI</span>
                      </div>

                      <div>
                        <h2 className={`text-lg sm:text-xl font-black font-outfit leading-tight ${themeStyles.heading}`}>
                          Rentang Terapi Sempit: <span className={`bg-gradient-to-r ${themeStyles.accent} bg-clip-text text-transparent`}>{cur.drugName}</span>
                        </h2>
                        <p className={`text-[11px] mt-1 ${themeStyles.subtext}`}>
                          Therapeutic Drug Monitoring (TDM) dan parameter kunci dalam ujian &amp; farmasi klinis.
                        </p>
                      </div>

                      <div className={`border rounded-2xl p-3 text-center space-y-1.5 ${themeStyles.card}`}>
                        <span className={`text-[10px] font-bold uppercase tracking-wider ${themeStyles.mutedText}`}>Target Rentang Terapi (TDM Window):</span>
                        <div className="text-xs font-black font-outfit text-teal-600 dark:text-teal-300">
                          {cur.therapeuticWindow}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className={`border rounded-xl p-2.5 ${themeStyles.card}`}>
                          <span className={`text-[10px] font-bold block mb-0.5 uppercase tracking-wide ${themeStyles.mutedText}`}>
                            Waktu Sampling Darah (Trough Level):
                          </span>
                          <p className={`text-[11px] leading-relaxed font-medium ${themeStyles.cardText}`}>
                            {cur.clinicalSamplingTime}
                          </p>
                        </div>

                        <div className={`border rounded-xl p-2.5 ${themeStyles.isLight ? 'bg-rose-50 border-rose-200' : 'bg-rose-500/10 border-rose-500/20'}`}>
                          <span className={`text-[10px] font-bold block mb-0.5 uppercase tracking-wide flex items-center gap-1 ${themeStyles.isLight ? 'text-rose-800' : 'text-rose-400'}`}>
                            <AlertTriangle className="w-3 h-3" />
                            Gejala Toksisitas Khas:
                          </span>
                          <p className={`text-[11px] leading-relaxed font-medium ${themeStyles.isLight ? 'text-rose-950' : 'text-rose-200'}`}>
                            {cur.toxicitySymptoms}
                          </p>
                        </div>

                        <div className={`border rounded-xl p-2.5 ${themeStyles.isLight ? 'bg-amber-50 border-amber-200' : 'bg-amber-500/10 border-amber-500/20'}`}>
                          <span className={`text-[10px] font-bold block mb-0.5 uppercase tracking-wide flex items-center gap-1 ${themeStyles.isLight ? 'text-amber-800' : 'text-amber-400'}`}>
                            <Sparkles className="w-3 h-3" />
                            Poin Kunci Apoteker:
                          </span>
                          <p className={`text-[11px] leading-relaxed font-medium ${themeStyles.isLight ? 'text-amber-950' : 'text-amber-200'}`}>
                            {cur.pharmacistKeyPoint}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })()}

                {/* TEMPLATE 21: SOP FARMASI */}
                {template === 'sop-farmasi' && (() => {
                  const cur = SOP_FARMASI_PRESETS[selectedSopIndex];
                  return (
                    <div className="space-y-4 pt-1">
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${themeStyles.badge}`}>
                        <ClipboardList className="w-3 h-3 text-teal-500" />
                        <span>STANDAR OPERASIONAL PROSEDUR (SOP) AKREDITASI</span>
                      </div>

                      <div>
                        <h2 className={`text-base sm:text-lg font-black font-outfit leading-tight ${themeStyles.heading}`}>
                          {cur.sopTitle}
                        </h2>
                        <p className={`text-[10px] mt-1 ${themeStyles.headerSub}`}>
                          Dasar Regulasi: {cur.standardReference}
                        </p>
                      </div>

                      <div className={`border rounded-2xl p-3 space-y-1.5 ${themeStyles.card}`}>
                        <span className={`text-[10px] font-bold uppercase tracking-wide block ${themeStyles.mutedText}`}>Poin Kepatuhan Kunci:</span>
                        <div className="space-y-1">
                          {cur.keyCompliancePoints.map((point, idx) => (
                            <div key={idx} className={`text-[10px] leading-relaxed font-medium flex items-start gap-1.5 ${themeStyles.cardText}`}>
                              <CheckCircle2 className="w-3 h-3 text-teal-500 shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className={`border rounded-xl p-2.5 ${themeStyles.isLight ? 'bg-amber-50 border-amber-200' : 'bg-amber-500/10 border-amber-500/20'}`}>
                        <span className={`text-[10px] font-bold block mb-0.5 uppercase tracking-wide flex items-center gap-1 ${themeStyles.isLight ? 'text-amber-800' : 'text-amber-400'}`}>
                          <Eye className="w-3 h-3" />
                          Fokus Penilaian Audit Akreditasi:
                        </span>
                        <p className={`text-[11px] leading-relaxed font-bold ${themeStyles.isLight ? 'text-amber-950' : 'text-amber-200'}`}>
                          {cur.criticalAuditFocus}
                        </p>
                      </div>
                    </div>
                  );
                })()}

                {/* TEMPLATE 22: REGULATIONS */}
                {template === 'regulations' && (() => {
                  const cur = REGULATIONS_PRESETS[selectedRegulationsIndex];
                  return (
                    <div className="space-y-4 pt-1">
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${themeStyles.badge}`}>
                        <Scale className="w-3 h-3 text-teal-500" />
                        <span>HUKUM KESEHATAN &amp; REGULASI KEFARMASIAN RI</span>
                      </div>

                      <div>
                        <h2 className={`text-base sm:text-lg font-black font-outfit leading-tight ${themeStyles.heading}`}>
                          {cur.regulationTitle}
                        </h2>
                        <p className={`text-[10px] mt-1 ${themeStyles.headerSub}`}>
                          {cur.legalAuthority}
                        </p>
                      </div>

                      <div className={`border rounded-2xl p-3 space-y-1.5 ${themeStyles.card}`}>
                        <span className={`text-[10px] font-bold uppercase tracking-wide block ${themeStyles.mutedText}`}>Mandat &amp; Kewenangan Resmi:</span>
                        <p className={`text-[11px] leading-relaxed font-medium ${themeStyles.cardText}`}>
                          {cur.coreMandate}
                        </p>
                      </div>

                      <div className={`border rounded-xl p-2.5 ${themeStyles.isLight ? 'bg-rose-50 border-rose-200' : 'bg-rose-500/10 border-rose-500/20'}`}>
                        <span className={`text-[10px] font-bold block mb-0.5 uppercase tracking-wide flex items-center gap-1 ${themeStyles.isLight ? 'text-rose-800' : 'text-rose-400'}`}>
                          <AlertTriangle className="w-3 h-3" />
                          Konsekuensi Hukum &amp; Sanksi Pelanggaran:
                        </span>
                        <p className={`text-[11px] leading-relaxed font-medium ${themeStyles.isLight ? 'text-rose-950' : 'text-rose-200'}`}>
                          {cur.penaltyOrConsequence}
                        </p>
                      </div>
                    </div>
                  );
                })()}

                {/* TEMPLATE 23: THERAPY ALGORITHM */}
                {template === 'therapy-algorithm' && (() => {
                  const cur = THERAPY_ALGORITHM_PRESETS[selectedAlgorithmIndex] || THERAPY_ALGORITHM_PRESETS[0];
                  return (
                    <div className="space-y-2 pt-0.5">
                      <div className="flex items-center justify-between gap-2">
                        <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${themeStyles.isLight ? 'bg-cyan-50 text-cyan-900 border-cyan-300' : 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30'}`}>
                          <Workflow className="w-3 h-3 text-cyan-500" />
                          <span>ALGORITMA TATALAKSANA KLINIS</span>
                        </div>
                        <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${themeStyles.isLight ? 'bg-slate-100 border-slate-200 text-slate-700' : 'bg-white/10 border-white/15 text-slate-300'}`}>
                          {cur.guidelineSource}
                        </span>
                      </div>

                      <div>
                        <h2 className={`text-base sm:text-lg font-black font-outfit leading-tight ${themeStyles.heading}`}>
                          {cur.diseaseName}
                        </h2>
                        <p className={`text-[10px] line-clamp-1 mt-0.5 ${themeStyles.subtext}`}>
                          {cur.shortSummary}
                        </p>
                      </div>

                      {/* 4 Sequential Steps */}
                      <div className="space-y-1.5">
                        {cur.steps.slice(0, 4).map((s, idx) => (
                          <div key={idx} className={`p-2 rounded-xl border relative transition-all ${themeStyles.card}`}>
                            <div className="flex items-center justify-between gap-1 mb-0.5">
                              <div className="flex items-center gap-1.5 min-w-0">
                                <span className="w-4 h-4 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 text-slate-950 font-black text-[9px] flex items-center justify-center shrink-0">
                                  {s.stepNum}
                                </span>
                                <span className={`text-[10px] font-black truncate ${themeStyles.cardTitle}`}>
                                  {s.stageTitle}
                                </span>
                              </div>
                              <span className={`text-[8px] font-bold px-1.5 py-0.2 rounded border shrink-0 ${
                                s.categoryBadge.includes('Inisiasi')
                                  ? themeStyles.isLight ? 'bg-teal-50 text-teal-800 border-teal-200' : 'bg-teal-500/20 text-teal-300 border-teal-500/30'
                                  : s.categoryBadge.includes('Dual')
                                  ? themeStyles.isLight ? 'bg-cyan-50 text-cyan-800 border-cyan-200' : 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30'
                                  : s.categoryBadge.includes('Triple')
                                  ? themeStyles.isLight ? 'bg-amber-50 text-amber-800 border-amber-200' : 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                                  : themeStyles.isLight ? 'bg-rose-50 text-rose-800 border-rose-200' : 'bg-rose-500/20 text-rose-300 border-rose-500/30'
                              }`}>
                                {s.categoryBadge}
                              </span>
                            </div>
                            <div className={`text-[10px] font-semibold leading-tight line-clamp-1 ${themeStyles.isLight ? 'text-teal-950 font-bold' : 'text-teal-300'}`}>
                              💊 {s.drugs}
                            </div>
                            <div className="flex items-center justify-between gap-1 text-[9px] mt-0.5">
                              <span className={`truncate ${themeStyles.mutedText}`}>🎯 {s.targetCriteria}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Pharmacist Pearl */}
                      <div className={`border rounded-xl p-2 ${themeStyles.isLight ? 'bg-emerald-50 border-emerald-200 text-emerald-950' : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-200'}`}>
                        <span className={`text-[9px] font-black block uppercase tracking-wide flex items-center gap-1 ${themeStyles.isLight ? 'text-emerald-800' : 'text-emerald-400'}`}>
                          <Sparkles className="w-2.5 h-2.5" />
                          Clinical Pearl Apoteker:
                        </span>
                        <p className="text-[10px] leading-snug line-clamp-2 mt-0.5">
                          {cur.pharmacistPearl}
                        </p>
                      </div>
                    </div>
                  );
                })()}

                {/* TEMPLATE 24: INTERACTIVE FLOWCHART / DECISION TREE */}
                {template === 'interactive-flowchart' && (() => {
                  const cur = INTERACTIVE_FLOWCHART_PRESETS[selectedFlowchartIndex] || INTERACTIVE_FLOWCHART_PRESETS[0];
                  return (
                    <div className="space-y-2 pt-0.5">
                      <div className="flex items-center justify-between gap-2">
                        <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${themeStyles.isLight ? 'bg-indigo-50 text-indigo-900 border-indigo-300' : 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30'}`}>
                          <GitBranch className="w-3 h-3 text-indigo-400" />
                          <span>CLINICAL DECISION TREE</span>
                        </div>
                        <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${themeStyles.isLight ? 'bg-slate-100 border-slate-200 text-slate-700' : 'bg-white/10 border-white/15 text-slate-300'}`}>
                          {cur.guidelineSource}
                        </span>
                      </div>

                      <div>
                        <h2 className={`text-base sm:text-lg font-black font-outfit leading-tight ${themeStyles.heading}`}>
                          {cur.clinicalCondition}
                        </h2>
                        <div className={`border rounded-lg px-2.5 py-1 mt-1 text-[10px] flex items-center gap-1.5 ${themeStyles.isLight ? 'bg-slate-100 text-slate-700' : 'bg-white/5 text-slate-300'}`}>
                          <span className="font-bold shrink-0">👤 Kasus:</span>
                          <span className="truncate">{cur.patientPresentation}</span>
                        </div>
                      </div>

                      {/* 3 Decision Branches */}
                      <div className="space-y-1.5">
                        {cur.branches.map((b, idx) => (
                          <div key={idx} className={`p-2 rounded-xl border ${themeStyles.card}`}>
                            <div className="flex items-center gap-1.5 mb-0.5">
                              <span className={`w-2 h-2 rounded-full shrink-0 ${
                                b.colorTag === 'emerald' ? 'bg-emerald-400' :
                                b.colorTag === 'cyan' ? 'bg-cyan-400' :
                                b.colorTag === 'amber' ? 'bg-amber-400' : 'bg-rose-400'
                              }`} />
                              <span className={`text-[10px] font-black line-clamp-1 ${themeStyles.cardTitle}`}>
                                {b.condition}
                              </span>
                            </div>
                            <div className={`text-[10px] font-bold px-2 py-0.5 rounded-lg mb-0.5 border ${
                              b.colorTag === 'emerald' ? themeStyles.isLight ? 'bg-emerald-50 text-emerald-950 border-emerald-200' : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' :
                              b.colorTag === 'cyan' ? themeStyles.isLight ? 'bg-cyan-50 text-cyan-950 border-cyan-200' : 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30' :
                              b.colorTag === 'amber' ? themeStyles.isLight ? 'bg-amber-50 text-amber-950 border-amber-200' : 'bg-amber-500/20 text-amber-300 border-amber-500/30' :
                              themeStyles.isLight ? 'bg-rose-50 text-rose-950 border-rose-200' : 'bg-rose-500/20 text-rose-300 border-rose-500/30'
                            }`}>
                              👉 {b.recommendation}
                            </div>
                            <p className={`text-[9px] line-clamp-1 leading-tight ${themeStyles.mutedText}`}>
                              {b.rationale}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Decision Tip */}
                      <div className={`border rounded-xl p-2 ${themeStyles.isLight ? 'bg-teal-50 border-teal-200 text-teal-950' : 'bg-teal-500/10 border-teal-500/20 text-teal-200'}`}>
                        <span className={`text-[9px] font-black block uppercase tracking-wide flex items-center gap-1 ${themeStyles.isLight ? 'text-teal-800' : 'text-teal-400'}`}>
                          <CheckCircle2 className="w-2.5 h-2.5" />
                          Decision Tip Apoteker:
                        </span>
                        <p className="text-[10px] leading-snug line-clamp-2 mt-0.5">
                          {cur.decisionTip}
                        </p>
                      </div>
                    </div>
                  );
                })()}

                {/* TEMPLATE 25: GUIDELINE PILLARS */}
                {template === 'guideline-pillars' && (() => {
                  const cur = GUIDELINE_PILLARS_PRESETS[selectedPillarsIndex] || GUIDELINE_PILLARS_PRESETS[0];
                  return (
                    <div className="space-y-2 pt-0.5">
                      <div className="flex items-center justify-between gap-2">
                        <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${themeStyles.isLight ? 'bg-amber-50 text-amber-900 border-amber-300' : 'bg-amber-500/20 text-amber-300 border-amber-500/30'}`}>
                          <Award className="w-3 h-3 text-amber-500" />
                          <span>PILAR TERAPI BAKU EMAS</span>
                        </div>
                        <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${themeStyles.isLight ? 'bg-slate-100 border-slate-200 text-slate-700' : 'bg-white/10 border-white/15 text-slate-300'}`}>
                          {cur.guidelineSource}
                        </span>
                      </div>

                      <div>
                        <h2 className={`text-base sm:text-lg font-black font-outfit leading-tight ${themeStyles.heading}`}>
                          {cur.regimenTitle}
                        </h2>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${themeStyles.isLight ? 'bg-teal-50 text-teal-900 border-teal-200' : 'bg-teal-500/20 text-teal-300 border-teal-500/30'}`}>
                            🎯 {cur.diseaseTarget}
                          </span>
                        </div>
                      </div>

                      {/* Mortality Benefit Banner */}
                      <div className={`p-1.5 rounded-xl border text-center font-bold text-[10px] ${themeStyles.isLight ? 'bg-gradient-to-r from-teal-600 to-cyan-700 text-white shadow-xs' : 'bg-gradient-to-r from-teal-500/25 to-cyan-500/25 border-teal-500/40 text-teal-200'}`}>
                        ✨ {cur.mortalityBenefit}
                      </div>

                      {/* 4 Pillars 2x2 Grid */}
                      <div className="grid grid-cols-2 gap-1.5">
                        {cur.pillars.slice(0, 4).map((p, idx) => (
                          <div key={idx} className={`p-2 rounded-xl border space-y-0.5 ${themeStyles.card}`}>
                            <div className="flex items-center gap-1.5">
                              <span className="w-4 h-4 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-slate-950 font-black text-[9px] flex items-center justify-center shrink-0">
                                {p.pillarNumber}
                              </span>
                              <span className={`text-[9px] font-black truncate leading-tight ${themeStyles.cardTitle}`}>
                                {p.drugClass}
                              </span>
                            </div>
                            <div className={`text-[10px] font-bold line-clamp-1 ${themeStyles.isLight ? 'text-teal-950 font-black' : 'text-teal-300'}`}>
                              💊 {p.exampleDrug}
                            </div>
                            <p className={`text-[8.5px] leading-tight line-clamp-2 ${themeStyles.mutedText}`}>
                              {p.roleBenefit}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Clinical Warning */}
                      <div className={`border rounded-xl p-1.5 ${themeStyles.isLight ? 'bg-rose-50 border-rose-200 text-rose-950' : 'bg-rose-500/10 border-rose-500/20 text-rose-200'}`}>
                        <span className={`text-[9px] font-black block uppercase tracking-wide flex items-center gap-1 ${themeStyles.isLight ? 'text-rose-800' : 'text-rose-400'}`}>
                          <AlertTriangle className="w-2.5 h-2.5" />
                          Peringatan Keselamatan:
                        </span>
                        <p className="text-[9.5px] leading-snug line-clamp-1 mt-0.5">
                          {cur.clinicalWarning}
                        </p>
                      </div>
                    </div>
                  );
                })()}

                {/* TEMPLATE 26: CLINICAL PATHWAY */}
                {template === 'clinical-pathway' && (() => {
                  const cur = CLINICAL_PATHWAY_PRESETS[selectedPathwayIndex] || CLINICAL_PATHWAY_PRESETS[0];
                  return (
                    <div className="space-y-2 pt-0.5">
                      <div className="flex items-center justify-between gap-2">
                        <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${themeStyles.isLight ? 'bg-purple-50 text-purple-900 border-purple-300' : 'bg-purple-500/20 text-purple-300 border-purple-500/30'}`}>
                          <Hospital className="w-3 h-3 text-purple-400" />
                          <span>HOSPITAL CLINICAL PATHWAY</span>
                        </div>
                        <span className={`text-[9px] font-black px-2 py-0.5 rounded-full border ${themeStyles.isLight ? 'bg-emerald-100 text-emerald-900 border-emerald-300' : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'}`}>
                          {cur.losTarget}
                        </span>
                      </div>

                      <div>
                        <h2 className={`text-base sm:text-lg font-black font-outfit leading-tight ${themeStyles.heading}`}>
                          {cur.pathwayTitle}
                        </h2>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className={`text-[9px] font-mono px-2 py-0.5 rounded border ${themeStyles.isLight ? 'bg-slate-100 border-slate-200 text-slate-700' : 'bg-white/5 border-white/10 text-slate-400'}`}>
                            {cur.standardICD}
                          </span>
                          <span className={`text-[9px] truncate ${themeStyles.mutedText}`}>
                            🚨 Masuk: {cur.admissionCriteria}
                          </span>
                        </div>
                      </div>

                      {/* 4 Phases */}
                      <div className="space-y-1.5">
                        {cur.phases.map((ph, idx) => (
                          <div key={idx} className={`p-2 rounded-xl border ${themeStyles.card}`}>
                            <div className="flex items-center justify-between gap-1 mb-0.5">
                              <span className={`text-[9px] font-black px-1.5 py-0.2 rounded border ${themeStyles.isLight ? 'bg-teal-50 text-teal-800 border-teal-200' : 'bg-teal-500/20 text-teal-300 border-teal-500/30'}`}>
                                {ph.dayLabel}
                              </span>
                              <span className={`text-[9px] font-bold truncate ${themeStyles.cardTitle}`}>
                                {ph.clinicalFocus}
                              </span>
                            </div>
                            <div className={`text-[9.5px] font-semibold line-clamp-1 ${themeStyles.isLight ? 'text-teal-950 font-bold' : 'text-teal-200'}`}>
                              💊 {ph.medications}
                            </div>
                            <div className={`text-[8.5px] line-clamp-1 mt-0.5 ${themeStyles.mutedText}`}>
                              🎯 Target: {ph.monitoringTarget}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Discharge Readiness */}
                      <div className={`border rounded-xl p-2 ${themeStyles.isLight ? 'bg-emerald-50 border-emerald-200 text-emerald-950' : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-200'}`}>
                        <span className={`text-[9px] font-black block uppercase tracking-wide flex items-center gap-1 ${themeStyles.isLight ? 'text-emerald-800' : 'text-emerald-400'}`}>
                          <CheckCircle2 className="w-2.5 h-2.5" />
                          Kriteria Pemulangan Aman (Discharge):
                        </span>
                        <p className="text-[9.5px] leading-snug line-clamp-2 mt-0.5">
                          {cur.dischargeReadiness}
                        </p>
                      </div>
                    </div>
                  );
                })()}

                {/* TEMPLATE: UKMPPAI CBT QUIZ */}
                {template === 'ukmppai-quiz' && (() => {
                  const cur = UKMPPAI_QUIZ_PRESETS[selectedUkmppaiQuizIndex] || UKMPPAI_QUIZ_PRESETS[0];
                  return (
                    <div className="space-y-2 pt-0.5">
                      <div className="flex items-center justify-between gap-2">
                        <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black border ${themeStyles.isLight ? 'bg-indigo-50 text-indigo-900 border-indigo-300' : 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30'}`}>
                          <GraduationCap className="w-3.5 h-3.5 text-indigo-500" />
                          <span>LATIHAN SOAL CBT UKMPPAI</span>
                        </div>
                        <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${themeStyles.isLight ? 'bg-slate-100 border-slate-200 text-slate-700' : 'bg-white/10 border-white/15 text-slate-300'}`}>
                          {cur.domainName}
                        </span>
                      </div>

                      {/* Vignette Case Box */}
                      <div className={`p-2.5 rounded-xl border space-y-1 ${themeStyles.card}`}>
                        <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wide text-teal-600 dark:text-teal-400">
                          <Stethoscope className="w-3 h-3" />
                          <span>Skenario Kasus Pasien:</span>
                        </div>
                        <p className={`text-[10px] leading-relaxed font-medium line-clamp-3 ${themeStyles.cardText}`}>
                          {cur.vignette}
                        </p>
                      </div>

                      {/* Question */}
                      <div className="px-1">
                        <div className={`text-[10.5px] font-black leading-snug ${themeStyles.heading}`}>
                          ❓ {cur.question}
                        </div>
                      </div>

                      {/* Options A-E List */}
                      <div className="space-y-1">
                        {cur.options.map(opt => {
                          const isCorrect = opt.key === cur.correctAnswer;
                          return (
                            <div
                              key={opt.key}
                              className={`px-2 py-1 rounded-lg border text-[9.5px] flex items-center justify-between gap-2 transition-all ${
                                isCorrect
                                  ? themeStyles.isLight
                                    ? 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold shadow-xs ring-1 ring-emerald-300'
                                    : 'bg-emerald-500/20 border-emerald-500/50 text-emerald-200 font-bold ring-1 ring-emerald-500/40'
                                  : themeStyles.card
                              }`}
                            >
                              <div className="flex items-center gap-1.5 min-w-0">
                                <span className={`w-4 h-4 rounded-md text-[9px] font-black flex items-center justify-center shrink-0 ${
                                  isCorrect
                                    ? 'bg-emerald-500 text-slate-950'
                                    : themeStyles.isLight ? 'bg-slate-200 text-slate-800' : 'bg-white/10 text-slate-300'
                                }`}>
                                  {opt.key}
                                </span>
                                <span className="truncate">{opt.text}</span>
                              </div>
                              {isCorrect && (
                                <span className="text-[8.5px] font-black text-emerald-600 dark:text-emerald-400 shrink-0">
                                  ✓ Kunci
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {/* Explanation & Pitfall Box */}
                      <div className={`border rounded-xl p-2 space-y-1 ${themeStyles.isLight ? 'bg-teal-50 border-teal-200 text-teal-950' : 'bg-teal-500/10 border-teal-500/20 text-teal-200'}`}>
                        <div className="flex items-center justify-between text-[9px] font-black uppercase tracking-wide">
                          <span className="flex items-center gap-1 text-teal-700 dark:text-teal-300">
                            <CheckCircle2 className="w-2.5 h-2.5" />
                            Kunci: [{cur.correctAnswer}] — Pembahasan Apoteker:
                          </span>
                          <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-white/20 font-bold">
                            {cur.referenceStandard}
                          </span>
                        </div>
                        <p className="text-[9.5px] leading-snug line-clamp-2">
                          {cur.explanation}
                        </p>
                        <div className="text-[8.5px] font-bold text-amber-600 dark:text-amber-400 line-clamp-1 flex items-center gap-1">
                          <AlertTriangle className="w-2.5 h-2.5 shrink-0" />
                          <span>Tips Ujian: {cur.examPitfallTip}</span>
                        </div>
                      </div>
                    </div>
                  );
                })()}

                {/* TEMPLATE: UKTVF CBT QUIZ */}
                {template === 'uktvf-quiz' && (() => {
                  const cur = UKTVF_QUIZ_PRESETS[selectedUktvfQuizIndex] || UKTVF_QUIZ_PRESETS[0];
                  return (
                    <div className="space-y-2 pt-0.5">
                      <div className="flex items-center justify-between gap-2">
                        <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black border ${themeStyles.isLight ? 'bg-violet-50 text-violet-900 border-violet-300' : 'bg-violet-500/20 text-violet-300 border-violet-500/30'}`}>
                          <FileCheck className="w-3.5 h-3.5 text-violet-500" />
                          <span>LATIHAN SOAL CBT UKTVF</span>
                        </div>
                        <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${themeStyles.isLight ? 'bg-slate-100 border-slate-200 text-slate-700' : 'bg-white/10 border-white/15 text-slate-300'}`}>
                          {cur.domainName}
                        </span>
                      </div>

                      {/* Vignette Case Box */}
                      <div className={`p-2.5 rounded-xl border space-y-1 ${themeStyles.card}`}>
                        <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wide text-cyan-600 dark:text-cyan-400">
                          <Stethoscope className="w-3 h-3" />
                          <span>Skenario Praktik Kefarmasian TTK:</span>
                        </div>
                        <p className={`text-[10px] leading-relaxed font-medium line-clamp-3 ${themeStyles.cardText}`}>
                          {cur.vignette}
                        </p>
                      </div>

                      {/* Question */}
                      <div className="px-1">
                        <div className={`text-[10.5px] font-black leading-snug ${themeStyles.heading}`}>
                          ❓ {cur.question}
                        </div>
                      </div>

                      {/* Options A-E List */}
                      <div className="space-y-1">
                        {cur.options.map(opt => {
                          const isCorrect = opt.key === cur.correctAnswer;
                          return (
                            <div
                              key={opt.key}
                              className={`px-2 py-1 rounded-lg border text-[9.5px] flex items-center justify-between gap-2 transition-all ${
                                isCorrect
                                  ? themeStyles.isLight
                                    ? 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold shadow-xs ring-1 ring-emerald-300'
                                    : 'bg-emerald-500/20 border-emerald-500/50 text-emerald-200 font-bold ring-1 ring-emerald-500/40'
                                  : themeStyles.card
                              }`}
                            >
                              <div className="flex items-center gap-1.5 min-w-0">
                                <span className={`w-4 h-4 rounded-md text-[9px] font-black flex items-center justify-center shrink-0 ${
                                  isCorrect
                                    ? 'bg-emerald-500 text-slate-950'
                                    : themeStyles.isLight ? 'bg-slate-200 text-slate-800' : 'bg-white/10 text-slate-300'
                                }`}>
                                  {opt.key}
                                </span>
                                <span className="truncate">{opt.text}</span>
                              </div>
                              {isCorrect && (
                                <span className="text-[8.5px] font-black text-emerald-600 dark:text-emerald-400 shrink-0">
                                  ✓ Kunci
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {/* Explanation & Pitfall Box */}
                      <div className={`border rounded-xl p-2 space-y-1 ${themeStyles.isLight ? 'bg-teal-50 border-teal-200 text-teal-950' : 'bg-teal-500/10 border-teal-500/20 text-teal-200'}`}>
                        <div className="flex items-center justify-between text-[9px] font-black uppercase tracking-wide">
                          <span className="flex items-center gap-1 text-teal-700 dark:text-teal-300">
                            <CheckCircle2 className="w-2.5 h-2.5" />
                            Kunci: [{cur.correctAnswer}] — Pembahasan Vokasi:
                          </span>
                          <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-white/20 font-bold">
                            {cur.referenceStandard}
                          </span>
                        </div>
                        <p className="text-[9.5px] leading-snug line-clamp-2">
                          {cur.explanation}
                        </p>
                        <div className="text-[8.5px] font-bold text-amber-600 dark:text-amber-400 line-clamp-1 flex items-center gap-1">
                          <AlertTriangle className="w-2.5 h-2.5 shrink-0" />
                          <span>Tips Ujian: {cur.examPitfallTip}</span>
                        </div>
                      </div>
                    </div>
                  );
                })()}

                {/* TEMPLATE 29: HERB-DRUG INTERACTION */}
                {template === 'herb-drug' && (() => {
                  const cur = HERB_DRUG_PRESETS[selectedHerbDrugIndex];
                  const isFatal = cur.riskLevel === 'Kritis / Fatal';
                  const isMayor = cur.riskLevel === 'Mayor (Signifikan)';

                  const badgeClass = isFatal
                    ? (themeStyles.isLight ? 'bg-rose-50 text-rose-900 border-rose-300' : 'bg-rose-500/20 text-rose-300 border-rose-500/30')
                    : isMayor
                    ? (themeStyles.isLight ? 'bg-amber-50 text-amber-900 border-amber-300' : 'bg-amber-500/20 text-amber-300 border-amber-500/30')
                    : (themeStyles.isLight ? 'bg-teal-50 text-teal-900 border-teal-300' : 'bg-teal-500/20 text-teal-300 border-teal-500/30');

                  return (
                    <div className="space-y-3.5 pt-1">
                      <div className="flex items-center justify-between gap-2">
                        <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black border ${badgeClass}`}>
                          <Leaf className="w-3.5 h-3.5 text-emerald-500" />
                          <span>INTERAKSI HERBAL VS OBAT MODERN</span>
                        </div>
                        <span className={`text-[9px] font-black px-2 py-0.5 rounded-full border ${isFatal ? 'bg-rose-500/20 text-rose-300 border-rose-500/40' : 'bg-amber-500/20 text-amber-300 border-amber-500/40'}`}>
                          {cur.riskLevel}
                        </span>
                      </div>

                      {/* Header Comparison Box */}
                      <div className={`border rounded-2xl p-3 text-center space-y-2 ${themeStyles.card}`}>
                        <div className="flex items-center justify-center gap-2 font-outfit">
                          <div className={`px-2.5 py-1.5 rounded-xl font-black text-xs border ${themeStyles.isLight ? 'bg-emerald-50 text-emerald-900 border-emerald-300' : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'}`}>
                            🌿 {cur.herbName}
                          </div>
                          <span className="text-rose-500 font-black text-sm">⚡</span>
                          <div className={`px-2.5 py-1.5 rounded-xl font-black text-xs border ${themeStyles.isLight ? 'bg-sky-50 text-sky-900 border-sky-300' : 'bg-sky-500/20 text-sky-300 border-sky-500/30'}`}>
                            💊 {cur.modernDrug}
                          </div>
                        </div>
                        <div className="text-[9.5px] uppercase tracking-wider font-bold text-rose-500 dark:text-rose-400">
                          Risiko Toksisitas &amp; Penurunan Efikasi Terapi
                        </div>
                      </div>

                      {/* Mechanism & Danger */}
                      <div className="space-y-2">
                        <div className={`border rounded-xl p-2.5 space-y-1 ${themeStyles.card}`}>
                          <div className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                            <Workflow className="w-3 h-3 text-teal-500" />
                            <span>Mekanisme Interaksi Farmakologi:</span>
                          </div>
                          <p className={`text-[10.5px] leading-relaxed font-medium ${themeStyles.cardText}`}>
                            {cur.mechanism}
                          </p>
                        </div>

                        <div className={`border rounded-xl p-2.5 space-y-1 ${themeStyles.isLight ? 'bg-rose-50 border-rose-200' : 'bg-rose-500/10 border-rose-500/20'}`}>
                          <div className="flex items-center gap-1 text-[9px] font-black uppercase tracking-wide text-rose-700 dark:text-rose-400">
                            <AlertTriangle className="w-3 h-3 text-rose-500" />
                            <span>Dampak Klinis Berbahaya:</span>
                          </div>
                          <p className={`text-[10px] leading-relaxed font-medium ${themeStyles.isLight ? 'text-rose-950' : 'text-rose-200'}`}>
                            {cur.clinicalDanger}
                          </p>
                        </div>

                        <div className={`border rounded-xl p-2.5 space-y-1 ${themeStyles.isLight ? 'bg-emerald-50 border-emerald-200' : 'bg-emerald-500/10 border-emerald-500/20'}`}>
                          <div className="flex items-center gap-1 text-[9px] font-black uppercase tracking-wide text-emerald-800 dark:text-emerald-400">
                            <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                            <span>Solusi &amp; Rekomendasi Apoteker:</span>
                          </div>
                          <p className={`text-[10px] leading-relaxed font-medium ${themeStyles.isLight ? 'text-emerald-950' : 'text-emerald-200'}`}>
                            {cur.pharmacistAdvice}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })()}

                {/* TEMPLATE 30: CHRONO-DOSING */}
                {template === 'chrono-dosing' && (() => {
                  const cur = CHRONO_DOSING_PRESETS[selectedChronoIndex];
                  const isNight = cur.optimalTime.includes('Malam');

                  return (
                    <div className="space-y-3 pt-1">
                      <div className="flex items-center justify-between gap-2">
                        <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black border ${themeStyles.isLight ? 'bg-amber-50 text-amber-950 border-amber-300' : 'bg-amber-500/20 text-amber-300 border-amber-500/30'}`}>
                          <Clock className="w-3.5 h-3.5 text-amber-500" />
                          <span>KRONOFARMAKOLOGI &amp; RITME SIRKADIAN</span>
                        </div>
                        <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${themeStyles.isLight ? 'bg-slate-100 border-slate-200 text-slate-700' : 'bg-white/10 border-white/15 text-slate-300'}`}>
                          {cur.targetCondition}
                        </span>
                      </div>

                      {/* Optimal Timing Banner */}
                      <div className={`border rounded-2xl p-3 text-center space-y-1.5 ${themeStyles.isLight ? 'bg-gradient-to-r from-amber-50 via-teal-50 to-emerald-50 border-amber-300' : 'bg-gradient-to-r from-amber-500/15 via-teal-500/10 to-emerald-500/15 border-amber-500/30'}`}>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          Obat: <span className="text-slate-900 dark:text-white font-black">{cur.drugName}</span>
                        </div>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-500 text-slate-950 font-black text-xs font-outfit shadow-sm">
                          <span>{isNight ? '🌙' : '🌅'} WAKTU TERBAIK:</span>
                          <span>{cur.optimalTime.toUpperCase()}</span>
                        </div>
                      </div>

                      {/* Circadian Reason */}
                      <div className={`border rounded-xl p-2.5 space-y-1 ${themeStyles.card}`}>
                        <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wide text-cyan-600 dark:text-cyan-400">
                          <Activity className="w-3 h-3" />
                          <span>Alasan Biologis Sirkadian Tubuh:</span>
                        </div>
                        <p className={`text-[10px] leading-relaxed font-medium ${themeStyles.cardText}`}>
                          {cur.circadianReason}
                        </p>
                      </div>

                      {/* Efficacy Benefit */}
                      <div className={`border rounded-xl p-2.5 space-y-1 ${themeStyles.isLight ? 'bg-emerald-50 border-emerald-200 text-emerald-950' : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-200'}`}>
                        <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Keunggulan Efikasi Klinis:</span>
                        </div>
                        <p className="text-[10px] leading-relaxed font-medium">
                          {cur.efficacyBenefit}
                        </p>
                      </div>

                      {/* Counseling Alert */}
                      <div className={`border rounded-xl p-2.5 space-y-1 ${themeStyles.isLight ? 'bg-amber-50 border-amber-200 text-amber-950' : 'bg-amber-500/10 border-amber-500/20 text-amber-200'}`}>
                        <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wide text-amber-700 dark:text-amber-400">
                          <AlertTriangle className="w-3 h-3" />
                          <span>Peringatan Penting Apoteker (PIO):</span>
                        </div>
                        <p className="text-[9.5px] leading-relaxed font-medium">
                          {cur.counselingAlert}
                        </p>
                      </div>
                    </div>
                  );
                })()}

                {/* TEMPLATE 31: PPRA WHO AWARE */}
                {template === 'ppra-aware' && (() => {
                  const cur = PPRA_AWARE_PRESETS[selectedPpraIndex];
                  const isAccess = cur.awareCategory.startsWith('ACCESS');
                  const isWatch = cur.awareCategory.startsWith('WATCH');

                  const badgeStyle = isAccess
                    ? (themeStyles.isLight ? 'bg-emerald-50 text-emerald-950 border-emerald-300' : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40')
                    : isWatch
                    ? (themeStyles.isLight ? 'bg-amber-50 text-amber-950 border-amber-300' : 'bg-amber-500/20 text-amber-300 border-amber-500/40')
                    : (themeStyles.isLight ? 'bg-rose-50 text-rose-950 border-rose-300' : 'bg-rose-500/20 text-rose-300 border-rose-500/40');

                  const tagBg = isAccess
                    ? 'bg-emerald-500 text-slate-950'
                    : isWatch
                    ? 'bg-amber-500 text-slate-950'
                    : 'bg-rose-500 text-white';

                  return (
                    <div className="space-y-3 pt-1">
                      <div className="flex items-center justify-between gap-2">
                        <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black border ${badgeStyle}`}>
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                          <span>STEWARDSHIP PPRA &amp; WHO AWARE</span>
                        </div>
                        <span className={`text-[9px] font-black px-2 py-0.5 rounded-full ${tagBg}`}>
                          {cur.awareCategory.split(' ')[0]}
                        </span>
                      </div>

                      {/* Antibiotic Name & Category Box */}
                      <div className={`border rounded-2xl p-3 text-center space-y-1.5 ${themeStyles.card}`}>
                        <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                          Antibiotik Terpilih:
                        </div>
                        <div className={`text-base font-black font-outfit ${themeStyles.cardTitle}`}>
                          {cur.antibioticName}
                        </div>
                        <div className={`text-[10px] font-bold uppercase tracking-wider ${isAccess ? 'text-emerald-500' : isWatch ? 'text-amber-500' : 'text-rose-500'}`}>
                          {cur.awareCategory}
                        </div>
                      </div>

                      {/* Target Infection */}
                      <div className={`border rounded-xl p-2.5 space-y-1 ${themeStyles.card}`}>
                        <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wide text-cyan-600 dark:text-cyan-400">
                          <Stethoscope className="w-3 h-3" />
                          <span>Indikasi Sasaran Infeksi:</span>
                        </div>
                        <p className={`text-[10px] leading-relaxed font-medium ${themeStyles.cardText}`}>
                          {cur.targetInfection}
                        </p>
                      </div>

                      {/* Spectrum & Mechanism */}
                      <div className={`border rounded-xl p-2.5 space-y-1 ${themeStyles.card}`}>
                        <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                          <Workflow className="w-3 h-3 text-teal-500" />
                          <span>Spektrum &amp; Mekanisme Antimikroba:</span>
                        </div>
                        <p className={`text-[9.5px] leading-relaxed font-medium ${themeStyles.cardText}`}>
                          {cur.spectrumMechanism}
                        </p>
                      </div>

                      {/* Stewardship Rule */}
                      <div className={`border rounded-xl p-2.5 space-y-1 ${themeStyles.isLight ? 'bg-teal-50 border-teal-200 text-teal-950' : 'bg-teal-500/10 border-teal-500/20 text-teal-200'}`}>
                        <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wide text-teal-700 dark:text-teal-300">
                          <FileCheck className="w-3 h-3" />
                          <span>Ketentuan Stewardship PPRA Rumah Sakit:</span>
                        </div>
                        <p className="text-[9.5px] leading-relaxed font-medium">
                          {cur.stewardshipRule}
                        </p>
                      </div>
                    </div>
                  );
                })()}

                {/* TEMPLATE 32: TDM NARROW THERAPEUTIC INDEX */}
                {template === 'tdm-drugs' && (() => {
                  const cur = TDM_DRUGS_PRESETS[selectedTdmIndex];

                  return (
                    <div className="space-y-3 pt-1">
                      <div className="flex items-center justify-between gap-2">
                        <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black border ${themeStyles.isLight ? 'bg-purple-50 text-purple-950 border-purple-300' : 'bg-purple-500/20 text-purple-300 border-purple-500/30'}`}>
                          <Activity className="w-3.5 h-3.5 text-purple-500" />
                          <span>RENTANG TERAPI SEMPIT &amp; TDM</span>
                        </div>
                        <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${themeStyles.isLight ? 'bg-slate-100 border-slate-200 text-slate-700' : 'bg-white/10 border-white/15 text-slate-300'}`}>
                          Kinetika Klinis
                        </span>
                      </div>

                      {/* Drug Name & Narrow Range */}
                      <div className={`border rounded-2xl p-3 text-center space-y-1.5 ${themeStyles.isLight ? 'bg-gradient-to-r from-purple-50 via-pink-50 to-rose-50 border-purple-200' : 'bg-gradient-to-r from-purple-500/15 via-pink-500/10 to-rose-500/15 border-purple-500/30'}`}>
                        <div className={`text-base font-black font-outfit ${themeStyles.heading}`}>
                          {cur.drugName}
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-purple-600 text-white font-black text-xs font-outfit shadow-sm">
                          <span>🎯 RENTANG TARGET:</span>
                          <span>{cur.narrowRange}</span>
                        </div>
                      </div>

                      {/* Sampling Schedule */}
                      <div className={`border rounded-xl p-2.5 space-y-1 ${themeStyles.card}`}>
                        <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wide text-teal-600 dark:text-teal-400">
                          <Clock className="w-3 h-3" />
                          <span>Waktu Pengambilan Sampel (Sampling Window):</span>
                        </div>
                        <p className={`text-[10px] leading-relaxed font-medium ${themeStyles.cardText}`}>
                          {cur.samplingTime}
                        </p>
                      </div>

                      {/* Toxicity Signs */}
                      <div className={`border rounded-xl p-2.5 space-y-1 ${themeStyles.isLight ? 'bg-rose-50 border-rose-200 text-rose-950' : 'bg-rose-500/10 border-rose-500/20 text-rose-200'}`}>
                        <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wide text-rose-700 dark:text-rose-400">
                          <AlertTriangle className="w-3 h-3" />
                          <span>Tanda &amp; Gejala Klinis Toksisitas:</span>
                        </div>
                        <p className="text-[9.5px] leading-relaxed font-medium">
                          {cur.toxicSymptoms}
                        </p>
                      </div>

                      {/* Lab Parameter & Risk Factor */}
                      <div className="grid grid-cols-2 gap-2">
                        <div className={`border rounded-xl p-2 space-y-1 ${themeStyles.card}`}>
                          <span className="text-[8.5px] font-bold uppercase text-slate-500 dark:text-slate-400 block">
                            🔬 Parameter Lab:
                          </span>
                          <p className={`text-[9px] leading-snug font-medium line-clamp-2 ${themeStyles.cardText}`}>
                            {cur.monitoringParameter}
                          </p>
                        </div>
                        <div className={`border rounded-xl p-2 space-y-1 ${themeStyles.card}`}>
                          <span className="text-[8.5px] font-bold uppercase text-amber-600 dark:text-amber-400 block">
                            ⚠️ Faktor Risiko:
                          </span>
                          <p className={`text-[9px] leading-snug font-medium line-clamp-2 ${themeStyles.cardText}`}>
                            {cur.riskFactor}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })()}

                {/* TEMPLATE 33: INDIKASI & DOSIS OFF-LABEL (EBM) */}
                {template === 'off-label' && (() => {
                  const cur = OFF_LABEL_PRESETS[selectedOffLabelIndex];

                  return (
                    <div className="space-y-2.5 pt-0.5">
                      {/* Top Header Badge */}
                      <div className="flex items-center justify-between gap-2">
                        <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black border ${themeStyles.isLight ? 'bg-purple-100 text-purple-900 border-purple-300' : 'bg-purple-500/20 text-purple-300 border-purple-500/30'}`}>
                          <Sparkles className="w-3.5 h-3.5 text-purple-500" />
                          <span>INDIKASI OFF-LABEL (EBM)</span>
                        </div>
                        <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${themeStyles.isLight ? 'bg-slate-100 border-slate-200 text-slate-700' : 'bg-white/10 border-white/15 text-slate-300'}`}>
                          Evidence-Based Practice
                        </span>
                      </div>

                      {/* Drug Name & Class Banner */}
                      <div className={`border rounded-2xl p-2.5 text-center space-y-1 ${themeStyles.isLight ? 'bg-gradient-to-r from-purple-50 via-indigo-50 to-pink-50 border-purple-200' : 'bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-pink-500/15 border-purple-500/30'}`}>
                        <div className={`text-base font-black font-outfit ${themeStyles.heading}`}>
                          {cur.drugName}
                        </div>
                        <div className="flex items-center justify-center gap-1.5 flex-wrap">
                          <span className={`text-[9px] font-bold px-2 py-0.5 rounded-md border ${themeStyles.isLight ? 'bg-white border-purple-200 text-purple-800' : 'bg-purple-950/60 border-purple-400/30 text-purple-200'}`}>
                            🧬 {cur.drugClass}
                          </span>
                        </div>
                      </div>

                      {/* Side-by-Side: On-Label vs Off-Label */}
                      <div className="grid grid-cols-2 gap-2">
                        {/* On-Label Box */}
                        <div className={`border rounded-xl p-2 space-y-1 ${themeStyles.card}`}>
                          <div className="flex items-center gap-1 text-[8.5px] font-black uppercase tracking-wider text-slate-400">
                            <FileCheck className="w-3 h-3 text-slate-400" />
                            <span>Indikasi Resmi (BPOM):</span>
                          </div>
                          <p className={`text-[9px] leading-snug font-medium line-clamp-3 ${themeStyles.cardText}`}>
                            {cur.onLabelIndication}
                          </p>
                        </div>

                        {/* Off-Label Highlight Box */}
                        <div className={`border rounded-xl p-2 space-y-1 ${themeStyles.isLight ? 'bg-purple-50/80 border-purple-300 text-purple-950' : 'bg-purple-500/15 border-purple-500/30 text-purple-200'}`}>
                          <div className="flex items-center gap-1 text-[8.5px] font-black uppercase tracking-wider text-purple-600 dark:text-purple-400">
                            <Sparkles className="w-3 h-3 text-purple-500" />
                            <span>Indikasi Off-Label (EBM):</span>
                          </div>
                          <p className="text-[9px] leading-snug font-bold line-clamp-3">
                            {cur.offLabelIndication}
                          </p>
                        </div>
                      </div>

                      {/* Clinical Dosage Protocol */}
                      <div className={`border rounded-xl p-2.5 space-y-1 ${themeStyles.isLight ? 'bg-teal-50 border-teal-200 text-teal-950' : 'bg-teal-500/10 border-teal-500/25 text-teal-200'}`}>
                        <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wide text-teal-700 dark:text-teal-400">
                          <Pill className="w-3 h-3 text-teal-500" />
                          <span>Protokol &amp; Dosis Klinis Off-Label:</span>
                        </div>
                        <p className="text-[9.5px] leading-relaxed font-semibold">
                          {cur.clinicalDosage}
                        </p>
                      </div>

                      {/* Evidence Basis & Pharmacological Rationale */}
                      <div className={`border rounded-xl p-2.5 space-y-1.5 ${themeStyles.card}`}>
                        <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
                          <BookOpen className="w-3 h-3 text-indigo-500" />
                          <span>Landasan Ilmiah (Guideline EBM):</span>
                        </div>
                        <p className={`text-[9px] leading-relaxed font-bold ${themeStyles.cardText}`}>
                          {cur.evidenceBasis}
                        </p>
                        <p className={`text-[8.5px] leading-relaxed italic ${themeStyles.mutedText}`}>
                          💡 {cur.pharmacologicalRationale}
                        </p>
                      </div>

                      {/* Safety Monitoring Alert */}
                      <div className={`border rounded-xl p-2 space-y-1 ${themeStyles.isLight ? 'bg-amber-50 border-amber-200 text-amber-950' : 'bg-amber-500/10 border-amber-500/20 text-amber-200'}`}>
                        <div className="flex items-center gap-1.5 text-[8.5px] font-black uppercase tracking-wide text-amber-700 dark:text-amber-400">
                          <ShieldAlert className="w-3 h-3 text-amber-500" />
                          <span>Monitoring Keamanan &amp; Patient Safety:</span>
                        </div>
                        <p className="text-[9px] leading-snug font-medium">
                          {cur.safetyMonitoring}
                        </p>
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* CARD FOOTER WITH BRANDING & CALL-TO-ACTION */}
              <div className={`relative z-10 pt-4 border-t ${themeStyles.footerBorder} mt-4 flex items-center justify-between gap-3`}>
                <div className="space-y-0.5">
                  <div className={`text-[11px] font-black font-outfit flex items-center gap-1.5 ${themeStyles.footerLabel}`}>
                    <span>Akses Gratis:</span>
                    <span className={`${themeStyles.footerUrl} underline`}>farmasidruggist.vercel.app</span>
                  </div>
                  <div className={`text-[9px] ${themeStyles.mutedText}`}>
                    Solusi Praktik Kefarmasian &amp; Edukasi Terpadu
                  </div>
                </div>

                <div className={`px-3 py-1 rounded-full border text-[10px] font-bold font-outfit ${themeStyles.footerBioBtn}`}>
                  Link di Bio 📲
                </div>
              </div>
            </div>
          </div>

          {/* CAPTION PREVIEW BOX */}
          <div className="bg-white dark:bg-[#061e2b] border border-teal-200/80 dark:border-teal-500/25 rounded-3xl p-5 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-black font-outfit uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <Share2 className="w-4 h-4 text-teal-500" />
                <span>Caption Instagram Otomatis ({TEMPLATE_DEFINITIONS.find(t => t.id === template)?.label})</span>
              </label>
              <button
                onClick={handleCopyCaption}
                className="text-xs font-bold font-outfit text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1 cursor-pointer"
              >
                {copiedCaption ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                <span>{copiedCaption ? 'Tersalin!' : 'Salin Semua Teks'}</span>
              </button>
            </div>

            <pre className="p-3.5 bg-slate-50 dark:bg-[#04141d] border border-slate-200 dark:border-teal-900/30 rounded-2xl text-[11px] font-mono text-slate-700 dark:text-slate-300 whitespace-pre-wrap max-h-48 overflow-y-auto custom-scrollbar leading-relaxed">
              {generateCaption()}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
