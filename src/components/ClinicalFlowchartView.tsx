import React, { useState, useMemo, useEffect } from 'react';
import {
  GitBranch,
  Table as TableIcon,
  ShieldAlert,
  Search,
  CheckCircle2,
  AlertTriangle,
  Pill,
  Printer,
  ExternalLink,
  BookOpen,
  Target,
  Clock,
  HeartPulse,
  Activity,
  Layers,
  ArrowDown,
  Info,
  ChevronRight,
  Calculator,
  Filter,
  Stethoscope,
  Sparkles,
  Zap,
  BookmarkCheck,
  LayoutTemplate,
  FileText,
  X
} from 'lucide-react';
import {
  CLINICAL_FLOWCHART_DATABASE,
  DiseaseFlowchartData,
  FlowchartNode,
  DrugClassificationRow
} from '../data/clinicalFlowchartData';
import { Drug, ClinicBrandingSettings } from '../types';
import { InteractiveFlowchartDiagram } from './InteractiveFlowchartDiagram';

interface ClinicalFlowchartViewProps {
  allDrugs?: Drug[];
  clinicBranding?: ClinicBrandingSettings;
  onSelectDrugForDetail?: (drug: Drug) => void;
  onCheckInteractionsWithRegimen?: (drugNames: string[]) => void;
  onOpenCalculator?: (type: string) => void;
  initialDiseaseId?: string;
}

const getDiseaseBadgeInfo = (id: string, fallbackName: string) => {
  switch (id) {
    case 'flowchart-hypertension':
      return { icon: '❤️', label: 'Hipertensi Dewasa', shortIcd: 'I10' };
    case 'flowchart-t2dm':
      return { icon: '🩸', label: 'Diabetes Melitus Tipe 2', shortIcd: 'E11' };
    case 'flowchart-hfref':
      return { icon: '🫀', label: 'Gagal Jantung HFrEF', shortIcd: 'I50.2' };
    case 'flowchart-acs':
      return { icon: '⚡', label: 'Sindrom Koroner Akut', shortIcd: 'I21' };
    case 'flowchart-asthma':
      return { icon: '🫁', label: 'Asma Bronkial', shortIcd: 'J45' };
    case 'flowchart-dyslipidemia':
      return { icon: '🧬', label: 'Dislipidemia ASCVD', shortIcd: 'E78' };
    default:
      return { icon: '📋', label: fallbackName.split('(')[0].trim(), shortIcd: 'EBM' };
  }
};

export const ClinicalFlowchartView: React.FC<ClinicalFlowchartViewProps> = ({
  allDrugs = [],
  clinicBranding,
  onSelectDrugForDetail,
  onCheckInteractionsWithRegimen,
  onOpenCalculator,
  initialDiseaseId = 'flowchart-hypertension'
}) => {
  const [selectedDiseaseId, setSelectedDiseaseId] = useState<string>(initialDiseaseId);

  useEffect(() => {
    if (initialDiseaseId) {
      setSelectedDiseaseId(initialDiseaseId);
    }
  }, [initialDiseaseId]);
  const [activeTab, setActiveTab] = useState<'all' | 'flowchart' | 'table' | 'ebm'>('all');
  const [flowchartDisplayMode, setFlowchartDisplayMode] = useState<'diagram' | 'steps'>('diagram');
  const [selectedClassFilter, setSelectedClassFilter] = useState<string>('all');
  const [tableSearchQuery, setTableSearchQuery] = useState<string>('');
  const [expandedStepId, setExpandedStepId] = useState<string | null>(null);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState<boolean>(false);
  const [printOrientation, setPrintOrientation] = useState<'landscape' | 'portrait'>('landscape');

  // Active Disease Data
  const currentDisease: DiseaseFlowchartData = useMemo(() => {
    return (
      CLINICAL_FLOWCHART_DATABASE.find((d) => d.id === selectedDiseaseId) ||
      CLINICAL_FLOWCHART_DATABASE[0]
    );
  }, [selectedDiseaseId]);

  // Drug classes list for filtering
  const drugClasses = useMemo(() => {
    const classes = new Set<string>();
    currentDisease.drugClassificationTable.forEach((row) => classes.add(row.drugClass));
    return Array.from(classes);
  }, [currentDisease]);

  // Filtered drug table rows
  const filteredDrugTable = useMemo(() => {
    const q = tableSearchQuery.toLowerCase().trim();
    return currentDisease.drugClassificationTable.filter((row) => {
      const matchesClass =
        selectedClassFilter === 'all' || row.drugClass === selectedClassFilter;
      const matchesQuery =
        !q ||
        row.drugClass.toLowerCase().includes(q) ||
        row.mechanismOfAction.toLowerCase().includes(q) ||
        row.clinicalIndications.toLowerCase().includes(q) ||
        row.adverseEffects.toLowerCase().includes(q) ||
        row.contraindications.toLowerCase().includes(q) ||
        row.exampleDrugs.some(
          (d) =>
            d.name.toLowerCase().includes(q) ||
            d.dailyDosage.toLowerCase().includes(q)
        );
      return matchesClass && matchesQuery;
    });
  }, [currentDisease, selectedClassFilter, tableSearchQuery]);

  // Click drug to view detail
  const handleDrugClick = (drugName: string) => {
    if (!onSelectDrugForDetail) return;
    const clean = drugName.toLowerCase().split('+')[0].trim().replace(/\(.*\)/, '').trim();
    const matched = allDrugs.find(
      (d) =>
        d.name.toLowerCase().includes(clean) ||
        d.genericName.toLowerCase().includes(clean) ||
        clean.includes(d.name.toLowerCase()) ||
        clean.includes(d.genericName.toLowerCase())
    );
    if (matched) {
      onSelectDrugForDetail(matched);
    }
  };

  // Test regimen interaction
  const handleTestRegimen = (drugList: string[]) => {
    if (!onCheckInteractionsWithRegimen) return;
    // Extract base drug names (remove dosage/plus)
    const cleanedNames: string[] = [];
    drugList.forEach((d) => {
      if (d.includes('+')) {
        d.split('+').forEach((sub) => {
          const c = sub.trim().split(' ')[0].replace(/[^a-zA-Z]/g, '');
          if (c && !cleanedNames.includes(c)) cleanedNames.push(c);
        });
      } else {
        const c = d.trim().split(' ')[0].replace(/[^a-zA-Z]/g, '');
        if (c && !cleanedNames.includes(c)) cleanedNames.push(c);
      }
    });
    onCheckInteractionsWithRegimen(cleanedNames.slice(0, 4));
  };

  // Handler for printing with dynamic orientation (Portrait vs Landscape)
  const handlePrint = (orientation: 'landscape' | 'portrait') => {
    setPrintOrientation(orientation);
    setIsPrintModalOpen(false);

    // Inject dynamic @page style for requested orientation
    const existingStyle = document.getElementById('flowchart-print-orientation-style');
    if (existingStyle) {
      existingStyle.remove();
    }
    const styleEl = document.createElement('style');
    styleEl.id = 'flowchart-print-orientation-style';
    styleEl.innerHTML = `
      @page {
        size: A4 ${orientation};
        margin: ${orientation === 'landscape' ? '6mm 8mm' : '7mm 9mm'};
      }
      @media print {
        body {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
          background: #ffffff !important;
        }
      }
    `;
    document.head.appendChild(styleEl);

    // Dynamic professional document title for PDF export
    const prevTitle = document.title;
    document.title = `ALGORITMA-TERAPI-${currentDisease.diseaseName.toUpperCase().replace(/\s+/g, '-')}-EBM-3HALAMAN`;

    setTimeout(() => {
      window.print();
      setTimeout(() => {
        document.title = prevTitle;
      }, 1000);
    }, 150);
  };

  return (
    <>
      {/* ----------------------------------------------------------------- */}
      {/* ON-SCREEN INTERACTIVE VIEW (Hidden during print)                  */}
      {/* ----------------------------------------------------------------- */}
      <div className="space-y-6 animate-in fade-in duration-300 print:hidden">
      
      {/* 1. SLEEK COMPACT TOOLBAR (Eliminates redundant giant banner while keeping Print & Controls) */}
      <div className="bg-white dark:bg-[#07152b] p-3 sm:p-4 rounded-2xl border border-blue-200/80 dark:border-blue-500/25 shadow-sm space-y-3">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          
          {/* Left: Disease Selector */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-black font-outfit uppercase tracking-wider text-slate-500 dark:text-cyan-300 flex items-center gap-1.5 mr-1">
              <Stethoscope className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>Algoritma Penyakit:</span>
            </span>
            {CLINICAL_FLOWCHART_DATABASE.map((disease) => {
              const isSelected = selectedDiseaseId === disease.id;
              const badge = getDiseaseBadgeInfo(disease.id, disease.diseaseName);
              return (
                <button
                  key={disease.id}
                  onClick={() => {
                    setSelectedDiseaseId(disease.id);
                    setSelectedClassFilter('all');
                    setTableSearchQuery('');
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-extrabold font-outfit transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
                    isSelected
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-700 text-white shadow-md shadow-blue-900/40 border border-cyan-400/40 ring-2 ring-cyan-400/25'
                      : 'bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
                  }`}
                >
                  <span>{badge.icon} {badge.label}</span>
                  <span className="text-[10px] opacity-75 font-mono">({badge.shortIcd})</span>
                  {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
                </button>
              );
            })}
          </div>

          {/* Right: Section Filter Tabs & Action Tools (Print & Copy) */}
          <div className="flex items-center gap-2 flex-wrap justify-between sm:justify-end">
            {/* Filter Mode Tabs */}
            <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-950/80 p-1 rounded-xl border border-slate-200 dark:border-blue-900/40">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold font-outfit transition-colors cursor-pointer ${
                  activeTab === 'all'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Semua Bagian
              </button>
              <button
                onClick={() => setActiveTab('flowchart')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold font-outfit transition-colors cursor-pointer ${
                  activeTab === 'flowchart'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Alur Algoritma
              </button>
              <button
                onClick={() => setActiveTab('table')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold font-outfit transition-colors cursor-pointer ${
                  activeTab === 'table'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Tabel Obat
              </button>
              <button
                onClick={() => setActiveTab('ebm')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold font-outfit transition-colors cursor-pointer ${
                  activeTab === 'ebm'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Literatur EBM
              </button>
            </div>

            {/* Print Action */}
            <button
              onClick={() => setIsPrintModalOpen(true)}
              className="px-3.5 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900/60 text-blue-700 dark:text-cyan-200 font-bold font-outfit text-xs border border-blue-200 dark:border-blue-700/60 flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs hover:scale-102"
              title="Cetak Lembar Alur (Print / PDF - Maksimal 3 Halaman)"
            >
              <Printer className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
              <span>Cetak / PDF</span>
            </button>

          </div>

        </div>
      </div>

      {/* =================================================================== */}
      {/* 2. SECTION 1: KLASIFIKASI TEKANAN DARAH / DERAJAT PENYAKIT */}
      {/* =================================================================== */}
      {(activeTab === 'all' || activeTab === 'flowchart') && (
        <div className="bg-white dark:bg-[#060e22] rounded-3xl border border-blue-200/80 dark:border-blue-950/80 p-5 sm:p-7 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-blue-950">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-black font-outfit text-slate-900 dark:text-white tracking-tight">
                  {currentDisease.classificationTitle}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Kriteria diagnostik tensimeter klinik terkalibrasi dan ambang batas inisiasi intervensi
                </p>
              </div>
            </div>
            <span className="text-[11px] font-bold text-slate-400 bg-slate-100 dark:bg-slate-900 px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-800 self-start sm:self-center">
              Klasifikasi Resmi
            </span>
          </div>

          {/* Grid of Classification Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 pt-1">
            {currentDisease.classificationLevels.map((lvl) => (
              <div
                key={lvl.id}
                className={`p-4 rounded-2xl border transition-all flex flex-col justify-between space-y-3 ${lvl.bgColor} ${lvl.borderColor} shadow-2xs hover:shadow-md hover:-translate-y-0.5`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider ${lvl.badgeColor}`}>
                      {lvl.label}
                    </span>
                  </div>

                  {lvl.systolic && lvl.diastolic ? (
                    <div className="space-y-1 pt-1">
                      <div className="bg-white/90 dark:bg-slate-950/70 p-2 rounded-xl border border-slate-200/60 dark:border-slate-800 text-center">
                        <span className="text-[10px] text-slate-400 font-extrabold uppercase block">Sistolik</span>
                        <span className="text-sm font-black text-slate-900 dark:text-white">{lvl.systolic}</span>
                      </div>
                      <div className="bg-white/90 dark:bg-slate-950/70 p-2 rounded-xl border border-slate-200/60 dark:border-slate-800 text-center">
                        <span className="text-[10px] text-slate-400 font-extrabold uppercase block">Diastolik</span>
                        <span className="text-sm font-black text-slate-900 dark:text-white">{lvl.diastolic}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-white/90 dark:bg-slate-950/70 p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-800 text-center">
                      <span className="text-xs font-black text-slate-900 dark:text-white">{lvl.criteria}</span>
                    </div>
                  )}
                </div>

                <div className="pt-2 border-t border-slate-200/50 dark:border-slate-800/80">
                  <span className="text-[9px] font-black uppercase tracking-wider text-slate-400 block mb-0.5">Tindakan Klinis:</span>
                  <p className="text-[11px] text-slate-700 dark:text-slate-300 font-semibold leading-snug">
                    {lvl.clinicalAction}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* 3. SECTION 2: ALGORITMA TATALAKSANA INTERAKTIF (POHON KEPUTUSAN) */}
      {/* =================================================================== */}
      {(activeTab === 'all' || activeTab === 'flowchart') && (
        <div className="bg-white dark:bg-[#060e22] rounded-3xl border border-blue-200/80 dark:border-blue-950/80 p-5 sm:p-7 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-blue-950">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                <GitBranch className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-black font-outfit text-slate-900 dark:text-white tracking-tight">
                  {currentDisease.flowchartTitle}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Tahapan farmakoterapi bertahap dari inisiasi, titrasi, kombinasi 3 obat hingga rujukan spesialis
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 flex-wrap">
              <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-900/90 p-1 rounded-xl border border-slate-200 dark:border-blue-900/60 shadow-2xs">
                <button
                  onClick={() => setFlowchartDisplayMode('diagram')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-black font-outfit transition-all flex items-center gap-1.5 cursor-pointer ${
                    flowchartDisplayMode === 'diagram'
                      ? 'bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-300 hover:text-blue-600'
                  }`}
                >
                  <GitBranch className="w-3.5 h-3.5 text-cyan-300" />
                  <span>Bagan Diagram Alir (Visual Tree)</span>
                  <span className="text-[9px] px-1.5 py-0.2 bg-white text-slate-950 rounded-full font-black">Model Poster</span>
                </button>
                <button
                  onClick={() => setFlowchartDisplayMode('steps')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-black font-outfit transition-all flex items-center gap-1.5 cursor-pointer ${
                    flowchartDisplayMode === 'steps'
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-300 hover:text-blue-600'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Rincian Langkah Bertahap</span>
                </button>
              </div>

              <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/60 px-3 py-1 rounded-xl border border-cyan-200 dark:border-cyan-800 hidden sm:inline-block">
                💡 Klik obat untuk membuka monografi &amp; cek interaksi
              </span>
            </div>
          </div>

          {flowchartDisplayMode === 'diagram' ? (
            <InteractiveFlowchartDiagram
              currentDisease={currentDisease}
              onDrugClick={handleDrugClick}
              onTestRegimen={handleTestRegimen}
            />
          ) : (
            <>
              {/* Node 1: Initial Diagnosis & Lifestyle Intervention */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0a1e38] to-slate-900 text-white border border-blue-950 shadow-md space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-cyan-500 text-slate-950 font-black text-xs flex items-center justify-center">
                      01
                    </span>
                    <h3 className="text-base font-black font-outfit text-white">
                      Evaluasi Awal Tekanan Darah &amp; Modifikasi Gaya Hidup (Diberikan ke Semua Pasien)
                    </h3>
                  </div>
                  <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 uppercase">
                    Wajib Sejak Hari Pertama
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 pt-1">
                  {currentDisease.lifestyleModifications.map((item, idx) => (
                    <div key={idx} className="bg-white/5 hover:bg-white/10 p-3 rounded-xl border border-white/10 space-y-1 transition-colors">
                      <span className="text-xs font-extrabold text-cyan-300 block">{item.title}</span>
                      <span className="text-[10px] font-black text-emerald-400 block">{item.impact}</span>
                      <p className="text-[10px] text-slate-300 font-medium leading-relaxed">{item.details}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Connecting Arrow */}
              <div className="flex items-center justify-center">
                <div className="flex flex-col items-center text-blue-500 dark:text-blue-400 animate-bounce">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest bg-blue-50 dark:bg-blue-950/60 px-3 py-0.5 rounded-full border border-blue-300 dark:border-blue-800">
                    Stratifikasi Komorbiditas &amp; Nilai Target
                  </span>
                  <ArrowDown className="w-5 h-5 mt-1" />
                </div>
              </div>

              {/* Node 2: Comorbid Profiles Split */}
              <div className="space-y-2">
                <span className="text-xs font-black font-outfit text-slate-800 dark:text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                  <Stethoscope className="w-4 h-4 text-blue-500" />
                  <span>Percabangan: Pemilihan Terapi Berbasis Komorbiditas Pasien</span>
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {currentDisease.comorbidProfiles.map((comorbid, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-[#071328] space-y-2 hover:border-blue-400 dark:hover:border-blue-600 transition-all shadow-2xs"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                          <span>{comorbid.icon}</span>
                          <span>{comorbid.name}</span>
                        </span>
                        <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                          Target: {comorbid.targetBP}
                        </span>
                      </div>

                      <div className="bg-white dark:bg-slate-900/80 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase block">Obat Lini Pertama:</span>
                        <span className="text-xs font-black text-teal-800 dark:text-teal-300 block">
                          {comorbid.firstLineDrug}
                        </span>
                      </div>

                      <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
                        <strong className="text-slate-700 dark:text-slate-300 font-bold">Rasional EBM: </strong>
                        {comorbid.rationale}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Connecting Arrow */}
              <div className="flex items-center justify-center">
                <div className="flex flex-col items-center text-indigo-500 dark:text-indigo-400">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest bg-indigo-50 dark:bg-indigo-950/60 px-3 py-0.5 rounded-full border border-indigo-300 dark:border-indigo-800">
                    Alur Tahapan Terapi (Step 1 s/d Step 4)
                  </span>
                  <ArrowDown className="w-5 h-5 mt-1" />
                </div>
              </div>

              {/* Step-by-Step Flowchart Nodes */}
              <div className="space-y-4">
                {currentDisease.flowchartSteps.map((step) => {
                  const isExpanded = expandedStepId === step.stepId;
                  return (
                    <div
                      key={step.stepId}
                      className={`rounded-2xl border transition-all overflow-hidden ${
                        step.branchType === 'resistant'
                          ? 'border-purple-300 dark:border-purple-800 bg-purple-50/20 dark:bg-purple-950/20'
                          : step.stepNumber === 1
                          ? 'border-blue-300 dark:border-blue-800 bg-blue-50/20 dark:bg-blue-950/20'
                          : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-[#071328]'
                      }`}
                    >
                      {/* Step Header */}
                      <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800/80">
                        <div className="flex items-start sm:items-center gap-3">
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center font-black font-outfit text-sm shrink-0 shadow-md ${
                              step.stepNumber === 1
                                ? 'bg-blue-600 text-white shadow-blue-900/40'
                                : step.stepNumber === 2
                                ? 'bg-indigo-600 text-white shadow-indigo-900/40'
                                : step.stepNumber === 3
                                ? 'bg-teal-600 text-white shadow-teal-900/40'
                                : 'bg-purple-600 text-white shadow-purple-900/40'
                            }`}
                          >
                            {step.stepNumber}
                          </div>
                          <div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                                {step.stageBadge}
                              </span>
                              {step.timeline && (
                                <span className="text-[10px] text-slate-500 font-semibold flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  {step.timeline}
                                </span>
                              )}
                              {step.targetBP && (
                                <span className="text-[10px] font-black text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-300 dark:border-emerald-800">
                                  Target: {step.targetBP}
                                </span>
                              )}
                            </div>
                            <h3 className="text-base sm:text-lg font-black font-outfit text-slate-900 dark:text-white mt-0.5">
                              {step.title}
                            </h3>
                            <p className="text-xs text-blue-600 dark:text-blue-400 font-bold">
                              {step.subtitle}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          {onCheckInteractionsWithRegimen && (
                            <button
                              onClick={() => handleTestRegimen(step.drugs.map((d) => d.drugName))}
                              className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-300 border border-slate-200 dark:border-slate-700 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                              title="Uji Interaksi Regimen Obat di Checker"
                            >
                              <ShieldAlert className="w-3.5 h-3.5 text-blue-500" />
                              <span className="hidden sm:inline">Cek Interaksi</span>
                            </button>
                          )}

                          <button
                            onClick={() => setExpandedStepId(isExpanded ? null : step.stepId)}
                            className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-black flex items-center gap-1 transition-colors cursor-pointer shadow-xs"
                          >
                            <span>{isExpanded ? 'Tutup Rincian' : 'Buka Rincian'}</span>
                            <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                          </button>
                        </div>
                      </div>

                      {/* Step Body */}
                      <div className="p-4 sm:p-5 space-y-4">
                        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                          {step.description}
                        </p>

                        {/* Drugs Recommended for this Step */}
                        <div className="space-y-2">
                          <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block">
                            Pilihan Regimen Obat Rekomendasi:
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {step.drugs.map((drug, dIdx) => (
                              <div
                                key={dIdx}
                                className={`p-3.5 rounded-xl border flex flex-col justify-between transition-all ${
                                  drug.isPreferred
                                    ? 'bg-gradient-to-r from-blue-50/80 to-indigo-50/40 dark:from-blue-950/40 dark:to-indigo-950/20 border-blue-300 dark:border-blue-700/80 shadow-2xs'
                                    : 'bg-slate-50/80 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800'
                                }`}
                              >
                                <div className="space-y-1">
                                  <div className="flex items-center justify-between gap-1 flex-wrap">
                                    <button
                                      onClick={() => handleDrugClick(drug.drugName)}
                                      className="text-xs font-black text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:underline flex items-center gap-1 cursor-pointer text-left"
                                      title="Buka Monografi Obat"
                                    >
                                      <span>💊 {drug.drugName}</span>
                                      <ExternalLink className="w-3 h-3 text-blue-500 shrink-0" />
                                    </button>
                                    {drug.fornasTier && (
                                      <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700">
                                        FORNAS: {drug.fornasTier}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-xs font-bold text-slate-700 dark:text-slate-300">
                                    Dosis: <span className="text-blue-700 dark:text-blue-300">{drug.dosage}</span>
                                  </p>
                                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold block">
                                    Peran: {drug.role}
                                  </span>
                                </div>

                                {drug.isPreferred && (
                                  <div className="mt-2 pt-1.5 border-t border-blue-200/60 dark:border-blue-800/60 flex items-center gap-1 text-[10px] font-extrabold text-blue-600 dark:text-blue-300">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                                    <span>Pilihan Utama Rekomendasi Konsensus</span>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Triggers & Clinical Pearls (Expanded or Default Preview) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                          {/* Triggers for next step */}
                          <div className="p-3.5 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 space-y-1">
                            <span className="text-[10px] font-black uppercase tracking-wider text-amber-900 dark:text-amber-300 flex items-center gap-1">
                              <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                              <span>Kriteria Eskalasi (Triggers):</span>
                            </span>
                            <p className="text-[11px] text-amber-950 dark:text-amber-200 font-semibold leading-relaxed">
                              {step.escalationTrigger}
                            </p>
                          </div>

                          {/* Clinical Pearls */}
                          <div className="p-3.5 rounded-xl bg-teal-50/70 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-900/60 space-y-1">
                            <span className="text-[10px] font-black uppercase tracking-wider text-teal-900 dark:text-teal-300 flex items-center gap-1">
                              <Info className="w-3.5 h-3.5 text-teal-600" />
                              <span>Catatan Keamanan &amp; Rasional Klinis:</span>
                            </span>
                            <p className="text-[11px] text-teal-950 dark:text-teal-200 font-medium leading-relaxed">
                              {step.clinicalPearls}
                            </p>
                          </div>
                        </div>

                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      )}

      {/* =================================================================== */}
      {/* 4. SECTION 3: TABEL PENGGOLONGAN OBAT HIPERTENSI KOMPREHENSIF */}
      {/* =================================================================== */}
      {(activeTab === 'all' || activeTab === 'table') && (
        <div className="bg-white dark:bg-[#060e22] rounded-3xl border border-blue-200/80 dark:border-blue-950/80 p-5 sm:p-7 shadow-sm space-y-5">
          {/* Header Table Section */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-blue-950">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400">
                <TableIcon className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-black font-outfit text-slate-900 dark:text-white tracking-tight">
                  Tabel Penggolongan Obat Farmakoterapi
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Mekanisme kerja farmakologi, rentang dosis lazim, keunggulan indikasi organ, efek samping khas, dan status FORNAS
                </p>
              </div>
            </div>

            <span className="text-xs font-bold text-slate-400">
              {filteredDrugTable.length} Golongan Terdaftar
            </span>
          </div>

          {/* Search & Filter Bar */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            {/* Live Search */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={tableSearchQuery}
                onChange={(e) => setTableSearchQuery(e.target.value)}
                placeholder="Cari nama obat (Captopril, Amlodipine, Bisoprolol), mekanisme, atau efek samping..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-bold font-outfit text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Quick Class Dropdown / Pills */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-[11px] font-bold text-slate-400 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5 text-blue-500" />
                <span>Filter:</span>
              </span>
              <button
                onClick={() => setSelectedClassFilter('all')}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold font-outfit transition-colors cursor-pointer ${
                  selectedClassFilter === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-950'
                }`}
              >
                Semua
              </button>
              {drugClasses.slice(0, 6).map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedClassFilter(c)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold font-outfit transition-colors cursor-pointer truncate max-w-[140px] ${
                    selectedClassFilter === c
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-950'
                  }`}
                  title={c}
                >
                  {c.split('(')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800 font-black font-outfit uppercase tracking-wider text-[11px]">
                  <th className="p-3.5 w-48">Golongan Obat</th>
                  <th className="p-3.5 w-64">Contoh Obat &amp; Dosis Lazim</th>
                  <th className="p-3.5 min-w-[240px]">Mekanisme Kerja Farmakologi</th>
                  <th className="p-3.5 min-w-[220px]">Indikasi Khusus &amp; Proteksi Organ</th>
                  <th className="p-3.5 min-w-[240px]">Efek Samping &amp; Kontraindikasi</th>
                  <th className="p-3.5 w-28 text-center">Aksi Cepat</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-200">
                {filteredDrugTable.length > 0 ? (
                  filteredDrugTable.map((row) => (
                    <tr
                      key={row.id}
                      className="hover:bg-blue-50/40 dark:hover:bg-blue-950/20 transition-colors"
                    >
                      {/* Golongan */}
                      <td className="p-3.5 align-top">
                        <span className="font-black text-slate-900 dark:text-white block">
                          {row.drugClass}
                        </span>
                        <span className="text-[10px] text-slate-400 font-semibold mt-1 block">
                          Pemantauan: {row.monitoringKey}
                        </span>
                      </td>

                      {/* Contoh Obat & Dosis */}
                      <td className="p-3.5 align-top space-y-2">
                        {row.exampleDrugs.map((drug, dIdx) => (
                          <div key={dIdx} className="bg-slate-50 dark:bg-slate-900/80 p-2 rounded-xl border border-slate-200/70 dark:border-slate-800 space-y-0.5">
                            <div className="flex items-center justify-between gap-1">
                              <button
                                onClick={() => handleDrugClick(drug.name)}
                                className="font-extrabold text-blue-700 dark:text-blue-300 hover:underline flex items-center gap-1 cursor-pointer text-left"
                                title="Buka Detail Monografi"
                              >
                                <span>{drug.name}</span>
                                <ExternalLink className="w-2.5 h-2.5" />
                              </button>
                              <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                                {drug.fornasTier}
                              </span>
                            </div>
                            <p className="text-[10px] text-slate-600 dark:text-slate-400 font-medium">
                              {drug.dailyDosage}
                            </p>
                          </div>
                        ))}
                      </td>

                      {/* Mekanisme Kerja */}
                      <td className="p-3.5 align-top leading-relaxed text-slate-600 dark:text-slate-300 font-medium text-[11px]">
                        {row.mechanismOfAction}
                      </td>

                      {/* Indikasi Khusus */}
                      <td className="p-3.5 align-top">
                        <div className="p-2.5 rounded-xl bg-teal-50/70 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-900/60 text-[11px] text-teal-950 dark:text-teal-200 font-semibold leading-relaxed">
                          {row.clinicalIndications}
                        </div>
                      </td>

                      {/* Efek Samping & Kontraindikasi */}
                      <td className="p-3.5 align-top space-y-1.5">
                        <div className="p-2.5 rounded-xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/60 text-[11px] space-y-1 leading-relaxed">
                          <p className="text-rose-900 dark:text-rose-300 font-medium">
                            <strong className="text-rose-950 dark:text-rose-200 font-extrabold">Efek Samping: </strong>
                            {row.adverseEffects}
                          </p>
                          <p className="text-rose-950 dark:text-rose-200 font-bold">
                            <strong className="text-rose-950 dark:text-rose-100 font-black">Kontraindikasi: </strong>
                            {row.contraindications}
                          </p>
                        </div>
                      </td>

                      {/* Aksi Cepat */}
                      <td className="p-3.5 align-top text-center space-y-1.5">
                        {onCheckInteractionsWithRegimen && (
                          <button
                            onClick={() => handleTestRegimen(row.exampleDrugs.map((d) => d.name))}
                            className="w-full py-1.5 px-2 rounded-lg bg-blue-50 dark:bg-blue-950/70 hover:bg-blue-100 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 text-[10px] font-extrabold flex items-center justify-center gap-1 transition-colors cursor-pointer"
                            title="Uji Interaksi Obat Golongan Ini"
                          >
                            <ShieldAlert className="w-3 h-3" />
                            <span>Cek Interaksi</span>
                          </button>
                        )}
                        <button
                          onClick={() => handleDrugClick(row.exampleDrugs[0]?.name || '')}
                          className="w-full py-1.5 px-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 text-[10px] font-bold flex items-center justify-center gap-1 transition-colors cursor-pointer"
                          title="Buka Monografi"
                        >
                          <Pill className="w-3 h-3" />
                          <span>Monografi</span>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="p-8 text-center text-slate-400">
                      Tidak ada golongan obat yang cocok dengan pencarian "{tableSearchQuery}".
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* 5. SECTION 4: LITERATUR & BASIS BUKTI EBM RESMI TERVERIFIKASI */}
      {/* =================================================================== */}
      {(activeTab === 'all' || activeTab === 'ebm') && (
        <div className="bg-white dark:bg-[#060e22] rounded-3xl border border-blue-200/80 dark:border-blue-950/80 p-5 sm:p-7 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-blue-950">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-black font-outfit text-slate-900 dark:text-white tracking-tight">
                  Literatur Resmi &amp; Evidence-Based Medicine (EBM)
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Landasan bukti ilmiah pedoman klinis terakreditasi tingkat nasional dan internasional
                </p>
              </div>
            </div>

            <span className="text-[11px] font-black text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/60 px-3 py-1 rounded-xl border border-purple-200 dark:border-purple-800 self-start sm:self-center">
              Level of Evidence: Class I, Level A
            </span>
          </div>

          {/* Grid of Verified References */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-1">
            {currentDisease.ebmReferences.map((ref) => (
              <div
                key={ref.id}
                className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 space-y-2.5 flex flex-col justify-between hover:border-purple-300 dark:hover:border-purple-700 transition-colors shadow-2xs"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-1">
                    <span
                      className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md ${
                        ref.scope === 'Nasional'
                          ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800'
                          : 'bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 border border-blue-300 dark:border-blue-800'
                      }`}
                    >
                      {ref.scope}
                    </span>
                    <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400">
                      {ref.year}
                    </span>
                  </div>

                  <h3 className="text-xs font-black text-slate-900 dark:text-white leading-snug">
                    {ref.title}
                  </h3>
                  <p className="text-[11px] font-bold text-purple-700 dark:text-purple-300">
                    {ref.organization} {ref.citationNumber ? `• ${ref.citationNumber}` : ''}
                  </p>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                    {ref.summary}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-[10px]">
                  <span className="font-extrabold text-slate-500 dark:text-slate-400">Tingkat Bukti:</span>
                  <span className="font-black text-emerald-600 dark:text-emerald-400">{ref.evidenceLevel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      </div>

      {/* PRINT ORIENTATION SELECTION MODAL */}
      {isPrintModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200 print:hidden">
          <div className="bg-white dark:bg-[#07152b] rounded-3xl border border-blue-200 dark:border-blue-500/30 shadow-2xl max-w-md w-full p-6 space-y-5 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-cyan-400 flex items-center justify-center">
                  <Printer className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-black font-outfit text-slate-900 dark:text-white">
                    Cetak Panduan Algoritma EBM
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Output presisi diformat pas maksimal 3 halaman
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsPrintModalOpen(false)}
                className="p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => handlePrint('landscape')}
                className="w-full text-left p-4 rounded-2xl border-2 border-cyan-500/60 bg-gradient-to-r from-cyan-50/50 to-blue-50/40 dark:from-cyan-950/30 dark:to-blue-950/20 hover:border-cyan-500 transition-all flex items-start gap-3.5 group cursor-pointer"
              >
                <div className="p-2.5 rounded-xl bg-cyan-600 text-white shrink-0 shadow-md">
                  <LayoutTemplate className="w-5 h-5" />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-sm text-slate-900 dark:text-white">
                      A4 Landscape (Model Poster)
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-cyan-600 text-white text-[9px] font-black uppercase tracking-wider">
                      Rekomendasi
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Lebar 297 mm. Sangat ideal untuk bagan pohon bercabang horizontal dan tabel 5 kolom obat yang lega tanpa teks terjepit.
                  </p>
                  <div className="text-[10px] font-mono font-semibold text-cyan-700 dark:text-cyan-300 pt-1">
                    Hal 1: Alur • Hal 2: Tabel Obat • Hal 3: EBM &amp; Paraf
                  </div>
                </div>
              </button>

              <button
                onClick={() => handlePrint('portrait')}
                className="w-full text-left p-4 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-400 bg-slate-50/60 dark:bg-slate-900/60 hover:bg-blue-50/30 dark:hover:bg-blue-950/20 transition-all flex items-start gap-3.5 group cursor-pointer"
              >
                <div className="p-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-sm text-slate-900 dark:text-white">
                      A4 Portrait (Standar Rekam Medis)
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[9px] font-bold">
                      Format RM
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Format vertikal standar (210 x 297 mm). Cocok untuk disisipkan langsung ke map status pasien atau berkas resep klinik.
                  </p>
                  <div className="text-[10px] font-mono font-semibold text-slate-500 dark:text-slate-400 pt-1">
                    Hal 1: Alur • Hal 2: Tabel Obat • Hal 3: EBM &amp; Paraf
                  </div>
                </div>
              </button>
            </div>

            <div className="pt-2 flex items-center justify-end">
              <button
                onClick={() => setIsPrintModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* DEDICATED 3-PAGE PRINT TEMPLATE (Strictly 3 Pages, Ink-Saving, White Base) */}
      {/* ========================================================================= */}
      <div className="hidden print:block text-slate-900 bg-white w-full">
        
        {/* ----------------------------------------------------------------------- */}
        {/* HALAMAN 1: KOP RESMI, KLASIFIKASI & DIAGRAM ALUR KEPUTUSAN TERAPI       */}
        {/* ----------------------------------------------------------------------- */}
        <div
          className="page-print-container flex flex-col justify-between py-1"
          style={{ minHeight: '98vh', breakAfter: 'page', pageBreakAfter: 'always' }}
        >
          <div className="space-y-2.5">
            {/* Kop Surat Resmi Faskes */}
            <div className="border-b-2 border-slate-900 pb-2 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {clinicBranding?.logoUrl ? (
                  <img src={clinicBranding.logoUrl} alt="Logo" className="w-10 h-10 object-contain" />
                ) : (
                  <div className="w-9 h-9 rounded-lg border border-slate-900 flex items-center justify-center font-black text-sm font-outfit">
                    FD
                  </div>
                )}
                <div>
                  <h1 className="text-xs font-black uppercase tracking-wider text-slate-900 leading-tight">
                    {clinicBranding?.clinicName || 'FARMASI DRUGGIST CLINICAL DECISION SUPPORT'}
                  </h1>
                  <p className="text-[9.5px] text-slate-600 leading-tight">
                    {clinicBranding?.address || 'Layanan Informasi Obat & Protokol Terapi Klinis Terintegrasi EBM'}
                  </p>
                  <p className="text-[8.5px] text-slate-500 font-mono">
                    Telp: {clinicBranding?.phone || '0812-xxxx-xxxx'} • SIPA/STRA: {clinicBranding?.pharmacistSipa || clinicBranding?.sipNumber || '19900101/SIPA/2026'}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <span className="inline-block px-2 py-0.5 bg-slate-900 text-white text-[8.5px] font-black uppercase rounded tracking-wider mb-0.5">
                  HALAMAN 1 DARI 3: ALUR ALGORITMA
                </span>
                <div className="text-[9.5px] font-bold text-slate-900">
                  {currentDisease.diseaseName}
                </div>
                <div className="text-[8px] text-slate-500 font-mono">
                  ICD-10: {currentDisease.icd10} • Tgl: {new Date().toLocaleDateString('id-ID', { dateStyle: 'medium' })}
                </div>
              </div>
            </div>

            {/* Judul & Sasaran Banner Cetak */}
            <div className="bg-slate-100 p-1.5 rounded border border-slate-300 flex items-center justify-between text-[9.5px]">
              <div>
                <span className="font-black uppercase text-slate-900">Panduan Keputusan Terapi:</span>{' '}
                <span className="font-semibold text-slate-700">{currentDisease.classificationTitle}</span>
              </div>
              <div className="text-[8.5px] font-mono font-bold text-slate-600">
                Standar: PNPK Kemenkes RI • Konsensus Spesialis Terverifikasi
              </div>
            </div>

            {/* 1.1 Klasifikasi Tekanan Darah (Grid 5 Kolom Kompak) */}
            <div>
              <div className="text-[9.5px] font-black uppercase tracking-wider text-slate-900 mb-1">
                1. Klasifikasi Kriteria Diagnostik &amp; Ambang Batas Intervensi
              </div>
              <div className="grid grid-cols-5 gap-1.5 text-center">
                {currentDisease.classificationLevels.map((lvl) => (
                  <div key={lvl.id} className="border border-slate-300 rounded p-1.5 bg-slate-50/70 space-y-0.5">
                    <div className="text-[8.5px] font-black uppercase text-slate-800 border-b border-slate-200 pb-0.5">
                      {lvl.label}
                    </div>
                    <div className="text-[10.5px] font-black text-slate-900">
                      {lvl.systolic && lvl.diastolic ? `${lvl.systolic} / ${lvl.diastolic}` : lvl.criteria}
                    </div>
                    <div className="text-[8px] text-slate-600 leading-tight">
                      {lvl.clinicalAction}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 1.2 Bagan Alur Pohon Keputusan Farmakoterapi Lengkap (Decision Tree) */}
            <div className="border border-slate-300 rounded-lg p-1.5 bg-white space-y-1">
              <div className="text-[9px] font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-0.5 flex items-center justify-between">
                <span>2. BAGAN ALUR POHON KEPUTUSAN TERAPI (DECISION TREE)</span>
                <span className="text-[7.5px] font-mono text-slate-500">Standar Konsensus EBM Nasional &amp; Internasional</span>
              </div>

              {currentDisease.id === 'flowchart-hypertension' ? (
                <>
                  {/* Node 1 & Jalur Cepat Krisis Hipertensi (Grid 2 Kolom Kompak) */}
                  <div className="grid grid-cols-2 gap-1 text-[7.5px]">
                    {/* Kolom 1: Skrining Standar */}
                    <div className="border border-slate-400 rounded p-1 bg-slate-50 space-y-0.5">
                      <div className="font-black text-slate-900 uppercase text-[8px] flex items-center justify-between border-b border-slate-200 pb-0.5">
                        <span>[TAHAP 1: SKRINING &amp; EVALUASI AWAL]</span>
                        <span className="font-mono text-slate-500 text-[7px]">Klinik / ABPM / HBPM</span>
                      </div>
                      <div className="text-slate-800 leading-tight">
                        • <strong>Konfirmasi:</strong> Tensi klinik (2x kunjungan) ATAU ABPM 24-jam (&ge;130/80) / HBPM rumah (&ge;135/85).
                      </div>
                      <div className="text-slate-700 leading-tight">
                        • <strong>Skrining:</strong> Nilai faktor risiko KV (SCORE2), lab eGFR, Kalium serum, proteinuria (UACR), dan EKG 12 lead.
                      </div>
                    </div>

                    {/* Kolom 2: Jalur Cepat Krisis Hipertensi */}
                    <div className="border-2 border-slate-800 rounded p-1 bg-rose-50/50 space-y-0.5">
                      <div className="font-black text-rose-900 uppercase text-[8px] flex items-center justify-between border-b border-rose-200 pb-0.5">
                        <span>[JALUR CEPAT KRISIS: TD &gt; 180 / &gt; 120 mmHg]</span>
                        <span className="text-[7px] font-black text-rose-700">Skrining TOD Akut</span>
                      </div>
                      <div className="text-slate-900 leading-tight">
                        • <strong>EMERGENSI (Ada TOD Akut: Stroke/ACS/Edema Paru/Diseksi):</strong> Rujuk ICU! Titrasi IV kontinyu (Nicardipine IV drip 5–15 mg/jam atau Diltiazem IV). Target: MAP turun 20–25% di jam ke-1.
                      </div>
                      <div className="text-slate-800 leading-tight">
                        • <strong>URGENSI (Tanpa TOD Akut):</strong> Rawat jalan/observasi. Oral Captopril 25 mg SL/oral, Amlodipine 10 mg, atau Clonidine. Target turun dalam 24–48 jam.
                      </div>
                    </div>
                  </div>

                  {/* Node 2: Gaya Hidup Universal & Ambang Batas Inisiasi */}
                  <div className="border border-slate-300 rounded p-1 bg-slate-50/80 text-[7.5px] flex items-center justify-between gap-2">
                    <div className="leading-tight">
                      <strong className="text-slate-900 uppercase text-[8px]">[TAHAP 2: GAYA HIDUP SEHAT UNIVERSAL]:</strong>{' '}
                      Diet DASH &amp; Restriksi Garam (&lt; 2g Na/hari setara &lt; 1 sdt garam) • Olahraga aerobik 150 mnt/mgg • IMT ideal 18.5–22.9 kg/m² • Stop rokok &amp; alkohol.
                    </div>
                  </div>

                  {/* Decision Gate: Ambang Batas Inisiasi */}
                  <div className="border-2 border-slate-700 rounded p-1 bg-indigo-50/60 text-[7.5px] leading-tight space-y-0.5">
                    <div className="font-black text-indigo-950 uppercase text-[8px] flex items-center justify-between border-b border-indigo-200 pb-0.5">
                      <span>[TITIK KEPUTUSAN KLINIS: AMBANG BATAS &amp; KRITERIA INISIASI FARMAKOTERAPI]</span>
                      <span className="text-indigo-800 font-bold text-[7px]">PERKI 2023 / ISH 2020 / ESC 2024</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-slate-800">
                      <div>
                        <strong>• Kapan Monoterapi Awal:</strong> Hipertensi Derajat 1 Risiko Rendah (TD 140–149/90–94) ATAU Usia Lanjut &gt; 80 th / Pasien Rentan (Frail). Pilihan: Amlodipine 5 mg ATAU Candesartan 8 mg ATAU HCT 12.5 mg.
                      </div>
                      <div>
                        <strong>• Kapan Langsung Dual SPC:</strong> Mayoritas pasien dewasa (Derajat 1 Risiko Sedang/Tinggi atau Derajat 2 &ge; 160/100 atau tensi &gt; 20/10 di atas target). Gunakan Kombinasi Dosis Tetap (Single-Pill Combination).
                      </div>
                    </div>
                  </div>

                  {/* Percabangan Utama: Dua Jalur Berdampingan */}
                  <div className="grid grid-cols-2 gap-1.5">
                    
                    {/* CABANG KIRI: KOMORBIDITAS KHUSUS */}
                    <div className="border-2 border-blue-800 rounded p-1 bg-blue-50/40 space-y-1">
                      <div className="text-[8px] font-black uppercase text-blue-950 border-b border-blue-300 pb-0.5 flex items-center justify-between">
                        <span>CABANG A: KOMORBIDITAS KHUSUS</span>
                        <span className="text-[7.5px] font-black text-blue-800 bg-white px-1 py-0.2 rounded border border-blue-200">
                          TARGET: &lt; 130/80 mmHg
                        </span>
                      </div>

                      <div className="text-[7.5px] text-slate-800 space-y-0.5 leading-tight">
                        <div className="border-b border-blue-100 pb-0.5">
                          <strong>1. CKD / Proteinuria (UACR &ge; 30 mg/g):</strong> Lini 1: <strong>ACEi (Ramipril 2.5–10 mg)</strong> atau <strong>ARB (Candesartan 8–16 mg)</strong>. Renoprotektif intraglomerular. Kenaikan kreatinin &lt; 30% ditoleransi. Bila eGFR &lt; 30 ganti Tiazid dgn Furosemide 20–40 mg.
                        </div>
                        <div className="border-b border-blue-100 pb-0.5">
                          <strong>2. CAD / Post-MI / Angina:</strong> Lini 1: <strong>Beta-Blocker (Bisoprolol 2.5–10 mg / Carvedilol 6.25–25 mg 2x)</strong> + <strong>ACEi / ARB</strong>. Pertahankan DBP &ge; 60 mmHg (perfusi koroner). Tambah CCB DHP bila angina belum terkontrol.
                        </div>
                        <div className="border-b border-blue-100 pb-0.5">
                          <strong>3. Gagal Jantung HFrEF (EF &lt; 40%):</strong> 4 Pilar Terapi Mortalitas: <strong>(1) ARNI/ACEi + (2) BB Bisoprolol + (3) MRA Spironolactone + (4) SGLT2i Dapagliflozin</strong>. KONTRAINDIKASI: CCB Non-DHP (Diltiazem/Verapamil).
                        </div>
                        <div className="border-b border-blue-100 pb-0.5">
                          <strong>4. Diabetes Melitus Tipe 2:</strong> Lini 1: <strong>ACEi / ARB</strong> + <strong>CCB DHP (Amlodipine 5–10 mg)</strong> atau Indapamide. Netral metabolik, proteksi vaskular &amp; cegah mikroalbuminuria.
                        </div>
                        <div className="border-b border-blue-100 pb-0.5">
                          <strong>5. Kehamilan / Hipertensi Gestasional (Target 135/85):</strong> Lini 1 Aman: <strong>Methyldopa 250–500 mg 2-3x/hr</strong>, <strong>Labetalol</strong>, atau <strong>Nifedipine Retard</strong>. ⚠️ <span className="text-rose-700 font-bold">KONTRAINDIKASI MUTLAK: ACEi, ARB, MRA (Teratogenik/Fetotoksik)</span>.
                        </div>
                        <div>
                          <strong>6. Pasca Stroke / TIA:</strong> Lini 1: <strong>ACEi/ARB + CCB DHP atau Diuretik Tiazid</strong> (Target &lt; 130/80 mmHg untuk prevensi sekunder stroke berulang).
                        </div>
                      </div>
                    </div>

                    {/* CABANG KANAN: HIPERTENSI UMUM / ESENSIAL */}
                    <div className="border-2 border-indigo-800 rounded p-1 bg-indigo-50/40 space-y-1">
                      <div className="text-[8px] font-black uppercase text-indigo-950 border-b border-indigo-300 pb-0.5 flex items-center justify-between">
                        <span>CABANG B: HIPERTENSI UMUM / ESENSIAL</span>
                        <span className="text-[7.5px] font-black text-indigo-800 bg-white px-1 py-0.2 rounded border border-indigo-200">
                          TARGET: &lt; 140/90 mmHg (&lt; 130/80)
                        </span>
                      </div>

                      <div className="space-y-1 text-[7.5px] leading-tight">
                        {/* Langkah 1 */}
                        <div className="border border-indigo-300 rounded p-1 bg-white space-y-0.5">
                          <div className="flex items-center justify-between font-black text-[8px] text-indigo-950">
                            <span>[LANGKAH 1: DUAL KOMBINASI SPC DOSIS RENDAH]</span>
                            <span className="text-[7px] text-indigo-700 font-mono bg-indigo-100 px-1 rounded">Evaluasi 4 Minggu</span>
                          </div>
                          <div className="text-slate-800">
                            • <strong>Formula Baku EBM:</strong> <strong>A + C</strong> (ACEi/ARB + CCB DHP) ATAU <strong>A + D</strong> (ACEi/ARB + Tiazid-like).
                          </div>
                          <div className="text-slate-900 font-bold">
                            • Contoh: Candesartan 8 mg + Amlodipine 5 mg PO 1x/hr ATAU Ramipril 5 mg + Amlodipine 5 mg.
                          </div>
                          <div className="text-rose-700 font-bold text-[7px] bg-rose-50 p-0.5 rounded border border-rose-200">
                            ⚠️ BLACK BOX WARNING: DILARANG MENGGABUNGKAN ACEi + ARB (Nefrotoksik &amp; Hiperkalemia).
                          </div>
                        </div>

                        {/* Langkah 2 */}
                        <div className="border border-indigo-300 rounded p-1 bg-white space-y-0.5">
                          <div className="flex items-center justify-between font-black text-[8px] text-indigo-950">
                            <span>[LANGKAH 2: ESKALASI DOSIS PENUH KOMBINASI GANDA]</span>
                            <span className="text-[7px] text-indigo-700 font-mono bg-indigo-100 px-1 rounded">Evaluasi 4 Minggu</span>
                          </div>
                          <div className="text-slate-800">
                            • Bila TD tetap &ge; 140/90 setelah 4 minggu: Maksimalkan ke dosis penuh kombinasi ganda:
                          </div>
                          <div className="text-slate-900 font-bold">
                            • Contoh: Candesartan 16 mg + Amlodipine 10 mg PO 1x/hr ATAU Ramipril 10 mg + Amlodipine 10 mg.
                          </div>
                          <div className="text-slate-600 text-[7px]">
                            • Evaluasi kepatuhan minum obat (adherence) &amp; efek samping (edema perifer CCB / batuk ACEi).
                          </div>
                        </div>

                        {/* Langkah 3 */}
                        <div className="border border-indigo-300 rounded p-1 bg-white space-y-0.5">
                          <div className="flex items-center justify-between font-black text-[8px] text-indigo-950">
                            <span>[LANGKAH 3: TRIPLE THERAPY TIGA OBAT (A + C + D)]</span>
                            <span className="text-[7px] text-indigo-700 font-mono bg-indigo-100 px-1 rounded">Evaluasi 4–12 Mgg</span>
                          </div>
                          <div className="text-slate-800">
                            • Bila TD belum mencapai target dengan dosis ganda penuh: Tambahkan Diuretik Tiazid/Tiazid-like:
                          </div>
                          <div className="text-slate-900 font-bold">
                            • Formula: Candesartan 16 mg + Amlodipine 10 mg + HCT 12.5–25 mg (atau Indapamide 1.5 mg) 1x/hr pagi.
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className="text-center text-[7.5px] font-bold text-purple-900 -my-0.5">
                    ↓ Konvergensi Jika Triple Therapy Dosis Maksimal Gagal Capai Target TD &lt; 140/90 mmHg (Evaluasi Kepatuhan &amp; Singkirkan White-Coat)
                  </div>

                  {/* Node 4: Hipertensi Resisten */}
                  <div className="p-1 rounded-lg border-2 border-purple-900 bg-purple-50/60 text-[7.5px] space-y-0.5">
                    <div className="font-black text-purple-950 uppercase text-[8px] flex items-center justify-between border-b border-purple-200 pb-0.5">
                      <span>[LANGKAH 4: TATALAKSANA HIPERTENSI RESISTEN - REFRAKTER DENGAN 3 OBAT DOSIS OPTIMAL]</span>
                      <span className="text-purple-800 font-mono text-[7px]">Konsensus PATHWAY-2</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-slate-800">
                      <div>
                        <strong>1. Singkirkan Pseudoresistance:</strong> Ketidakpatuhan obat (adherence), efek white-coat (ABPM), teknik manset salah, dan zat pemicu (NSAID, jamu herbal bersteroid, dekongestan).
                      </div>
                      <div>
                        <strong>2. Baku Emas Terapi (PATHWAY-2 Trial):</strong> Tambahkan <strong>Spironolactone 25 – 50 mg PO 1x/hari</strong> (MRA).
                        <span className="text-rose-800 font-bold block">Syarat Lab: Kalium serum &lt; 4.5 mEq/L dan eGFR &ge; 45 mL/menit.</span>
                      </div>
                    </div>
                    <div className="text-slate-700 border-t border-purple-200 pt-0.5 flex items-center justify-between">
                      <span><strong>• Alternatif jika MRA KI/Intoleran:</strong> Bisoprolol 5–10 mg / Doxazosin 4–8 mg / Clonidine 0.15 mg.</span>
                      <span className="font-bold text-purple-950">• Rujuk Sp.JP / Sp.PD-KGH untuk evaluasi hipertensi sekunder (Stenosis Renal, Aldosteronisme, OSA).</span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Node 1 & Jalur Cepat Dekompensasi Akut (Grid 2 Kolom Kompak) */}
                  <div className="grid grid-cols-2 gap-1 text-[7.5px]">
                    {/* Kolom 1: Skrining Standar Diagnosis */}
                    <div className="border border-slate-400 rounded p-1 bg-slate-50 space-y-0.5">
                      <div className="font-black text-slate-900 uppercase text-[8px] flex items-center justify-between border-b border-slate-200 pb-0.5">
                        <span>[TAHAP 1: SKRINING &amp; KRITERIA DIAGNOSTIK]</span>
                        <span className="font-mono text-slate-500 text-[7px]">PERKENI / ADA 2024</span>
                      </div>
                      <div className="text-slate-800 leading-tight">
                        • <strong>GDP &ge; 126 mg/dL</strong> (puasa min. 8 jam) | <strong>GD2PP &ge; 200 mg/dL</strong> (TTGO 75g)
                      </div>
                      <div className="text-slate-700 leading-tight">
                        • <strong>HbA1c &ge; 6.5%</strong> terstandar NGSP | <strong>GDS &ge; 200 mg/dL</strong> + Gejala Klasik 4P (Poliuria, Polidipsia, Polifagia, BB Turun)
                      </div>
                    </div>

                    {/* Kolom 2: Jalur Cepat Dekompensasi Akut / Early Insulin */}
                    <div className="border-2 border-slate-800 rounded p-1 bg-rose-50/60 space-y-0.5">
                      <div className="font-black text-rose-950 uppercase text-[8px] flex items-center justify-between border-b border-rose-200 pb-0.5">
                        <span>[JALUR CEPAT: DEKOMPENSASI METABOLIK AKUT]</span>
                        <span className="text-[7px] font-black text-rose-700">Early Insulinization</span>
                      </div>
                      <div className="text-slate-900 leading-tight">
                        • <strong>Kriteria:</strong> HbA1c &gt; 10% ATAU GDS &ge; 300 mg/dL disertai gejala katabolik berat (penurunan BB drastis, ketonuria, KAD/HHS).
                      </div>
                      <div className="text-rose-900 font-bold text-[7px] leading-tight">
                        • <strong>Tindakan:</strong> LANGSUNG INISIASI INSULIN DINI (Basal &plusmn; Prandial) sejak awal untuk mengatasi glukotoksisitas segera!
                      </div>
                    </div>
                  </div>

                  {/* Node 2: Gaya Hidup & Lini Pertama Universal */}
                  <div className="border border-slate-300 rounded p-1 bg-slate-50/80 text-[7.5px] leading-tight">
                    <strong className="text-slate-900 uppercase text-[8px]">[TAHAP 2: TNM, AKTIVITAS FISIK &amp; LINI PERTAMA UNIVERSAL]:</strong>{' '}
                    Terapi Nutrisi Medis (Karbo 45-65%, Lemak &lt;30%) • Olahraga 150 mnt/mgg + Latihan Beban 2x/mgg • Inisiasi <strong>Metformin 500–1000 mg 2x/hr bersama makan</strong> (bila eGFR &ge; 45 mL/min).
                  </div>

                  {/* Node 3: Percabangan Komorbiditas DMT2 (2 Kolom Seimbang) */}
                  <div className="grid grid-cols-2 gap-1.5">
                    {/* Cabang A: Kardio-Renal */}
                    <div className="border-2 border-orange-800 rounded p-1 bg-orange-50/40 space-y-0.5 text-[7.5px]">
                      <div className="text-[8px] font-black uppercase text-orange-950 border-b border-orange-300 pb-0.5 flex items-center justify-between">
                        <span>CABANG A: KOMORBID KARDIO-RENAL TINGGI</span>
                        <span className="text-[7px] font-black text-orange-800 bg-white px-1 py-0.2 rounded border border-orange-200">
                          Independen HbA1c
                        </span>
                      </div>
                      <div className="text-slate-800 space-y-0.5 leading-tight">
                        <div>
                          <strong>• CKD (eGFR &ge; 20, UACR &gt; 30 mg/g):</strong> SGLT2-i (Empagliflozin 10-25 mg / Dapagliflozin 10 mg) + Metformin (Perlambat ESRD).
                        </div>
                        <div>
                          <strong>• Gagal Jantung (HFrEF/HFpEF):</strong> SGLT2-i wajib lini pertama (turunkan hospitalisasi HF).
                        </div>
                        <div>
                          <strong>• ASCVD / Riwayat Stroke / PJK:</strong> GLP-1 RA (Liraglutide / Semaglutide) ATAU SGLT2-i terbukti menurunkan MACE.
                        </div>
                      </div>
                    </div>

                    {/* Cabang B: Tanpa Komorbid Mayor */}
                    <div className="border-2 border-slate-700 rounded p-1 bg-slate-50 space-y-0.5 text-[7.5px]">
                      <div className="text-[8px] font-black uppercase text-slate-900 border-b border-slate-300 pb-0.5 flex items-center justify-between">
                        <span>CABANG B: TANPA KOMORBID KARDIO-RENAL</span>
                        <span className="text-[7px] font-black text-slate-800 bg-white px-1 py-0.2 rounded border border-slate-200">
                          Target HbA1c &lt; 7.0%
                        </span>
                      </div>
                      <div className="text-slate-800 space-y-0.5 leading-tight">
                        <div>
                          <strong>• Langkah 1 (0-3 bln):</strong> Monoterapi Metformin titrasi hingga 1000 mg 2x/hr.
                        </div>
                        <div>
                          <strong>• Langkah 2 (3-6 bln - Dual):</strong> Metformin + SGLT2-i / DPP-4i (Linagliptin 5 mg) / Sulfonilurea (Glimepiride 1-4 mg / Gliclazide MR) / <strong>AGI (Acarbose 50-100 mg 3x/hr)</strong> / <strong>TZD (Pioglitazone 15-30 mg)</strong>. <em>*Waspada Glibenklamid: hindari pada lansia (Kriteria Beers).</em>
                        </div>
                        <div>
                          <strong>• Langkah 3 (6-9 bln - Triple):</strong> Metformin + SGLT2-i + DPP-4i/TZD ATAU Inisiasi Insulin Basal.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Node 4: Protokol Algoritma Terapi Insulin Bertahap */}
                  <div className="p-1 rounded-lg border-2 border-emerald-900 bg-emerald-50/50 text-[7.5px] space-y-0.5">
                    <div className="font-black text-emerald-950 uppercase text-[8px] flex items-center justify-between border-b border-emerald-300 pb-0.5">
                      <span>[LANGKAH 4: ALGORITMA INSULIN BERTAHAP - PERKENI / ADA]</span>
                      <span className="text-emerald-800 font-mono text-[7px] font-bold">Target GDP: 80 - 130 mg/dL</span>
                    </div>

                    <div className="grid grid-cols-3 gap-1.5 text-slate-800">
                      {/* 1. Inisiasi */}
                      <div className="border border-emerald-200 rounded p-1 bg-white">
                        <strong className="text-emerald-950 block text-[7.5px]">1. Inisiasi Basal:</strong>
                        <div>• Glargine U100/U300 atau Degludec <strong>10 Unit (atau 0.1-0.2 U/kgBB)</strong> SC malam jam sama.</div>
                        <div className="text-slate-600 text-[7px]">• Lanjutkan Metformin; kurangi/stop Sulfonilurea.</div>
                      </div>

                      {/* 2. Titrasi Mandiri */}
                      <div className="border border-emerald-200 rounded p-1 bg-white">
                        <strong className="text-emerald-950 block text-[7.5px]">2. Titrasi Mandiri GDP:</strong>
                        <div>• <strong>GDP &gt; 130 mg/dL:</strong> +2 Unit tiap 3 hari</div>
                        <div>• <strong>GDP 80-130:</strong> Pertahankan dosis</div>
                        <div className="text-rose-700 font-bold">• <strong>GDP &lt; 70 (Hipo):</strong> Turunkan 2-4 Unit</div>
                      </div>

                      {/* 3. Overbasalisasi & Intensifikasi */}
                      <div className="border border-emerald-200 rounded p-1 bg-white">
                        <strong className="text-amber-950 block text-[7.5px]">3. Skrining Overbasalisasi:</strong>
                        <div>• Bila Basal <strong>&gt; 0.5 U/kgBB</strong> atau GDP normal tapi HbA1c &ge; 7%: STOP naik basal!</div>
                        <div className="text-emerald-900 font-bold">• <strong>Intensifikasi:</strong> Basal-Plus (+1 Rapid 4 U di makan terbesar), Basal-Bolus Penuh (MDI), atau Premixed 1-2x/hr.</div>
                      </div>
                    </div>

                    {/* Footer Edukasi Farmasi */}
                    <div className="border-t border-emerald-200 pt-0.5 flex items-center justify-between text-[7px] text-slate-700">
                      <div>
                        <strong>🚨 Rule of 15 Hipoglikemia:</strong> Beri 15-20g glukosa cepat serap, tunggu 15 mnt, cek ulang. <em>*Bila minum Acarbose: WAJIB D-Glukosa murni (dekstrosa), bukan gula pasir.</em>
                      </div>
                      <div className="font-bold text-emerald-900">
                        🌡️ Kulkas 2-8°C (belum dibuka) | Suhu ruang &lt;30°C maks 28-30 hari (sedang pakai) • Rotasi suntik 1-2 cm
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Footer Halaman 1 */}
          <div className="border-t border-slate-300 pt-1 text-[8px] text-slate-500 flex items-center justify-between font-mono">
            <span>Farmasi Druggist • PNPK Kemenkes RI Terverifikasi</span>
            <span>Halaman 1 dari 3</span>
          </div>
        </div>

        {/* ----------------------------------------------------------------------- */}
        {/* HALAMAN 2: TABEL PENGGOLONGAN OBAT FARMAKOTERAPI LENGKAP                 */}
        {/* ----------------------------------------------------------------------- */}
        <div
          className="page-print-container flex flex-col justify-between py-1"
          style={{ minHeight: '98vh', breakAfter: 'page', pageBreakAfter: 'always' }}
        >
          <div className="space-y-2.5">
            {/* Header Halaman 2 */}
            <div className="border-b-2 border-slate-900 pb-1.5 flex items-center justify-between">
              <div>
                <h2 className="text-xs font-black uppercase tracking-wider text-slate-900">
                  TABEL PENGGOLONGAN OBAT FARMAKOTERAPI LENGKAP
                </h2>
                <p className="text-[8.5px] text-slate-600">
                  {currentDisease.diseaseName} • Berdasarkan Formularium Nasional (FORNAS BPJS) &amp; Rekomendasi PNPK
                </p>
              </div>
              <span className="px-2 py-0.5 bg-slate-900 text-white text-[8.5px] font-black uppercase rounded tracking-wider">
                HALAMAN 2 DARI 3: TABEL OBAT
              </span>
            </div>

            {/* Tabel 5 Kolom Presisi */}
            <div className="border border-slate-300 rounded overflow-hidden">
              <table className="w-full text-left border-collapse text-[8px]">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-400 text-slate-900 font-black uppercase text-[7.5px]">
                    <th className="p-1.5 border-r border-slate-300 w-[18%]">Golongan Obat</th>
                    <th className="p-1.5 border-r border-slate-300 w-[24%]">Contoh Obat &amp; Dosis Lazim FORNAS</th>
                    <th className="p-1.5 border-r border-slate-300 w-[20%]">Mekanisme Kerja</th>
                    <th className="p-1.5 border-r border-slate-300 w-[19%]">Indikasi &amp; Proteksi Organ</th>
                    <th className="p-1.5 w-[19%]">Efek Samping &amp; Kontraindikasi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {currentDisease.drugClassificationTable.map((drugClass, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                      <td className="p-1 border-r border-slate-200 align-top font-bold text-slate-900">
                        <div>{drugClass.drugClass}</div>
                        <div className="text-[7px] font-normal text-slate-500 mt-0.5">{drugClass.monitoringKey}</div>
                      </td>
                      <td className="p-1 border-r border-slate-200 align-top">
                        <div className="space-y-0.5">
                          {drugClass.exampleDrugs.map((d, dIdx) => (
                            <div key={dIdx} className="leading-tight">
                              <span className="font-bold text-slate-900">{d.name}</span>{' '}
                              <span className="text-slate-600 font-mono">({d.dailyDosage})</span>{' '}
                              <span className="text-[6.5px] px-1 py-0.2 bg-slate-200 text-slate-800 rounded font-semibold">{d.fornasTier}</span>
                            </div>
                          ))}
                        </div>
                      </td>
                      <td className="p-1 border-r border-slate-200 align-top text-slate-700 leading-snug">
                        {drugClass.mechanismOfAction}
                      </td>
                      <td className="p-1 border-r border-slate-200 align-top text-slate-700 leading-snug">
                        {drugClass.clinicalIndications}
                      </td>
                      <td className="p-1 align-top leading-snug">
                        <div className="text-slate-800 font-medium">ES: {drugClass.adverseEffects}</div>
                        <div className="text-rose-700 font-bold text-[7.5px] mt-0.5">KI: {drugClass.contraindications}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-1 rounded bg-slate-100 border border-slate-300 text-[7.5px] text-slate-600 leading-tight">
              <strong>Catatan FORNAS BPJS:</strong> FKTP = Fasilitas Kesehatan Tingkat Pertama (Puskesmas / Klinik Pratama). FKRTL = Fasilitas Kesehatan Rujukan Tingkat Lanjut (Spesialis RS). Penyesuaian dosis wajib mempertimbangkan klirens kreatinin (CrCl/eGFR) dan pemantauan elektrolit berkala.
            </div>
          </div>

          {/* Footer Halaman 2 */}
          <div className="border-t border-slate-300 pt-1 text-[8px] text-slate-500 flex items-center justify-between font-mono">
            <span>Farmasi Druggist • Formularium Nasional BPJS Kesehatan</span>
            <span>Halaman 2 dari 3</span>
          </div>
        </div>

        {/* ----------------------------------------------------------------------- */}
        {/* HALAMAN 3: LITERATUR EBM, TARGET KOMORBID & LEMBAR VALIDASI KLINIS      */}
        {/* ----------------------------------------------------------------------- */}
        <div
          className="page-print-container flex flex-col justify-between py-1"
          style={{ minHeight: '98vh' }}
        >
          <div className="space-y-2.5">
            {/* Header Halaman 3 */}
            <div className="border-b-2 border-slate-900 pb-1.5 flex items-center justify-between">
              <div>
                <h2 className="text-xs font-black uppercase tracking-wider text-slate-900">
                  EVIDENCE-BASED MEDICINE (EBM) &amp; LEMBAR VALIDASI KLINIS
                </h2>
                <p className="text-[8.5px] text-slate-600">
                  Konsensus Terverifikasi &amp; Kolom Pengesahan Tatalaksana Individual Pasien
                </p>
              </div>
              <span className="px-2 py-0.5 bg-slate-900 text-white text-[8.5px] font-black uppercase rounded tracking-wider">
                HALAMAN 3 DARI 3: EBM &amp; VALIDASI
              </span>
            </div>

            {/* 3.1 Profil Sasaran Target Komorbid */}
            <div>
              <div className="text-[9.5px] font-black uppercase tracking-wider text-slate-900 mb-1">
                {currentDisease.id === 'flowchart-hypertension'
                  ? '1. Rekomendasi Sasaran Target Tekanan Darah Berdasarkan Komorbiditas'
                  : '1. Rekomendasi Sasaran Kendali Glikemik & Sasaran Komorbiditas'}
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                {currentDisease.comorbidProfiles.map((p, idx) => (
                  <div key={idx} className="border border-slate-300 rounded p-1.5 bg-slate-50 space-y-0.5">
                    <div className="text-[8.5px] font-black text-slate-900 border-b border-slate-200 pb-0.5">{p.name}</div>
                    <div className="text-[9.5px] font-black text-indigo-900">Target: {p.targetBP}</div>
                    <div className="text-[7.5px] text-slate-700">Lini 1: <strong>{p.firstLineDrug}</strong></div>
                    <div className="text-[7px] text-slate-500 italic leading-tight">{p.rationale}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3.2 6 Literatur Konsensus EBM Terverifikasi */}
            <div>
              <div className="text-[9.5px] font-black uppercase tracking-wider text-slate-900 mb-1">
                2. Rujukan 6 Konsensus Resmi Nasional &amp; Internasional
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {currentDisease.ebmReferences.map((ref, idx) => (
                  <div key={idx} className="border border-slate-300 rounded p-1.5 bg-white space-y-0.5">
                    <div className="flex items-center justify-between text-[7.5px]">
                      <span className="font-bold text-slate-500">{ref.organization} ({ref.year})</span>
                      <span className="font-black text-slate-800 px-1 py-0.2 bg-slate-100 rounded border border-slate-200">
                        {ref.evidenceLevel}
                      </span>
                    </div>
                    <div className="text-[8.5px] font-black text-slate-900 leading-tight">
                      {ref.title}
                    </div>
                    <div className="text-[7.5px] text-slate-600 leading-snug">
                      {ref.summary}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3.3 Catatan Klinis Khusus & Lembar Validasi Medis */}
            <div className="border-2 border-slate-800 rounded-lg p-2 bg-slate-50/50 space-y-1.5">
              <div className="text-[9.5px] font-black uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 flex items-center justify-between">
                <span>3. Lembar Pengesahan &amp; Validasi Pelayanan Farmasi Klinis</span>
                <span className="text-[8px] font-mono text-slate-500">Status Rekam Medis Pasien</span>
              </div>

              {/* Input Kolom Pasien */}
              <div className="grid grid-cols-3 gap-2 text-[8px] border-b border-slate-200 pb-1.5">
                <div><span className="font-bold">Nama Pasien:</span> ....................................................</div>
                <div><span className="font-bold">No. Rekam Medis:</span> ............................................</div>
                <div><span className="font-bold">Tgl Lahir / Usia:</span> ............................................</div>
              </div>

              {/* Catatan Terapi Individual */}
              <div className="text-[8px] space-y-0.5">
                <span className="font-bold block text-slate-800">Catatan Rekomendasi Terapi Individual:</span>
                <div className="h-8 border border-dashed border-slate-300 rounded bg-white p-1 text-[7.5px] text-slate-400">
                  (Rencana titrasi dosis, kombinasi obat terpilih, jadwal kontrol tensi, dan pemantauan laboratorium berkala)
                </div>
              </div>

              {/* Kolom Tanda Tangan 2 Pihak */}
              <div className="grid grid-cols-2 gap-4 pt-1 text-[8px] text-center">
                <div className="border border-slate-300 rounded p-1.5 bg-white space-y-4">
                  <div className="font-bold text-slate-800">Apoteker Penanggung Jawab / Farmasi Klinis</div>
                  <div className="font-bold underline text-slate-900 pt-1">
                    {clinicBranding?.pharmacistName || '( apt. ................................................................ )'}
                  </div>
                  <div className="text-[7px] text-slate-500 -mt-3 font-mono">
                    SIPA/STRA: {clinicBranding?.pharmacistSipa || clinicBranding?.sipNumber || '..........................................................'}
                  </div>
                </div>

                <div className="border border-slate-300 rounded p-1.5 bg-white space-y-4">
                  <div className="font-bold text-slate-800">Dokter Penanggung Jawab Pelayanan (DPJP)</div>
                  <div className="font-bold underline text-slate-900 pt-1">
                    ( dr. ................................................................ )
                  </div>
                  <div className="text-[7px] text-slate-500 -mt-3 font-mono">
                    SIP/NPA: ..........................................................
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Halaman 3 */}
          <div className="border-t border-slate-300 pt-1 text-[8px] text-slate-500 flex items-center justify-between font-mono">
            <span>Dokumen Resmi Panduan Tatalaksana Terapi Klinis • Farmasi Druggist</span>
            <span>Halaman 3 dari 3 (Selesai)</span>
          </div>
        </div>

      </div>
    </>
  );
};
