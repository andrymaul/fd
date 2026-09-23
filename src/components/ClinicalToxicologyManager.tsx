import React, { useState, useMemo, useEffect } from 'react';
import {
  AlertOctagon,
  Search,
  Pill,
  ShieldAlert,
  Skull,
  Moon,
  HeartPulse,
  Droplet,
  Flame,
  Activity,
  Zap,
  AlertTriangle,
  Info,
  PhoneCall,
  Printer,
  ChevronRight,
  CheckCircle2,
  XCircle,
  Clock,
  Sparkles,
  Calculator,
  RotateCcw,
  Check,
  FileText,
  FlaskConical,
  Scale,
  Syringe,
  ArrowRight
} from 'lucide-react';
import {
  TOXICOLOGY_ANTIDOTES_DATABASE,
  TOXICOLOGY_CATEGORIES,
  ToxicAgentProfile,
  ToxinCategory,
  searchToxicAgents
} from '../data/toxicologyAntidotesData';
import { FloatingPillsBackground } from './FloatingPillsBackground';
import { PaginationControls } from './PaginationControls';

interface ClinicalToxicologyManagerProps {
  onDrugClick?: (drugName: string) => void;
}

export const ClinicalToxicologyManager: React.FC<ClinicalToxicologyManagerProps> = ({
  onDrugClick
}) => {
  // Navigation State: Directory vs Calculators
  const [activeTab, setActiveTab] = useState<'directory' | 'calculators'>('directory');
  const [activeCalcSubTab, setActiveCalcSubTab] = useState<'rumack-matthew' | 'nac-infusion' | 'osmolal-gap'>('rumack-matthew');

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedAgentId, setSelectedAgentId] = useState<string>('paracetamol');

  // Pagination State
  const [toxicPage, setToxicPage] = useState<number>(1);
  const [toxicPerPage, setToxicPerPage] = useState<number>(10);

  // Reset page when search or category changes
  useEffect(() => {
    setToxicPage(1);
  }, [searchQuery, selectedCategory]);

  // Interactive Rumack-Matthew Calculator State
  const [rmHours, setRmHours] = useState<number>(4);
  const [rmConcentration, setRmConcentration] = useState<number>(160);

  // NAC Infusion Calculator State (Prescott 21-Hour IV Protocol)
  const [nacWeightKg, setNacWeightKg] = useState<number>(60);

  // Serum Osmolal Gap Calculator State (Toxic Alcohols / Methanol / Ethylene Glycol)
  const [ogNa, setOgNa] = useState<number>(140);
  const [ogGlucose, setOgGlucose] = useState<number>(100);
  const [ogBun, setOgBun] = useState<number>(15);
  const [ogMeasured, setOgMeasured] = useState<number>(310);

  // Filtered List
  const filteredAgents = useMemo(() => {
    return searchToxicAgents(searchQuery, selectedCategory);
  }, [searchQuery, selectedCategory]);

  // Paginated List
  const paginatedAgents = useMemo(() => {
    const start = (toxicPage - 1) * toxicPerPage;
    return filteredAgents.slice(start, start + toxicPerPage);
  }, [filteredAgents, toxicPage, toxicPerPage]);

  // Currently Selected Agent
  const selectedAgent = useMemo(() => {
    return (
      TOXICOLOGY_ANTIDOTES_DATABASE.find(a => a.id === selectedAgentId) ||
      filteredAgents[0] ||
      TOXICOLOGY_ANTIDOTES_DATABASE[0]
    );
  }, [selectedAgentId, filteredAgents]);

  // Rumack-Matthew Assessment Calculation
  const rmCalculation = useMemo(() => {
    if (rmHours < 4) {
      return {
        status: 'invalid',
        message: 'Pengukuran kadar parasetamol serum hanya valid dilakukan minimal 4 jam pasca-konsumsi (menunggu absorpsi & distribusi tuntas). Bila pasien tiba < 4 jam, berikan Arang Aktif dan tunggu jam ke-4 untuk ambil sampel darah.',
        needsNac: false,
        threshold: 150
      };
    }
    if (rmHours > 24) {
      return {
        status: 'delayed',
        message: 'Konsumsi > 24 jam: Nomogram tidak lagi valid. Bila terbukti tertelan parasetamol toksik atau terdapat kenaikan enzim hati (ALT/AST), SEGERA berikan NAC tanpa menunggu nomogram!',
        needsNac: true,
        threshold: 4.7
      };
    }

    // Treatment Line formula: 150 mcg/mL at 4h with 4-hour half life -> 150 * (0.5)^((hours - 4)/4)
    const treatmentThreshold = 150 * Math.pow(0.5, (rmHours - 4) / 4);
    const isAboveThreshold = rmConcentration >= treatmentThreshold;

    return {
      status: isAboveThreshold ? 'toxic' : 'safe',
      message: isAboveThreshold
        ? `Kadar ${rmConcentration} mcg/mL berada DI ATAS garis penanganan (Ambang jam ke-${rmHours}: ${treatmentThreshold.toFixed(1)} mcg/mL). SEGERA INISIASI PROTOKOL NAC LENGKAP!`
        : `Kadar ${rmConcentration} mcg/mL berada DI BAWAH garis penanganan (Ambang jam ke-${rmHours}: ${treatmentThreshold.toFixed(1)} mcg/mL). Risiko hepatotoksisitas rendah. Terapi NAC tidak diindikasikan kecuali terjadi peningkatan ALT/AST.`,
      needsNac: isAboveThreshold,
      threshold: treatmentThreshold
    };
  }, [rmHours, rmConcentration]);

  // NAC Weight-Based Calculation (Prescott 21-Hour Protocol)
  const nacDosing = useMemo(() => {
    const w = Math.max(10, Math.min(150, nacWeightKg || 60));
    const bag1Mg = Math.round(w * 150);
    const bag2Mg = Math.round(w * 50);
    const bag3Mg = Math.round(w * 100);
    const totalMg = bag1Mg + bag2Mg + bag3Mg;
    return {
      weight: w,
      bag1: {
        doseMg: bag1Mg,
        volumeMl: 200,
        rateMlPerHour: 200,
        duration: '1 Jam (60 menit)',
        description: 'Dosis Muatan (Loading Dose) 150 mg/kg dalam 200 mL D5W'
      },
      bag2: {
        doseMg: bag2Mg,
        volumeMl: 500,
        rateMlPerHour: 125,
        duration: '4 Jam',
        description: 'Dosis Rumatan Ke-1 50 mg/kg dalam 500 mL D5W'
      },
      bag3: {
        doseMg: bag3Mg,
        volumeMl: 1000,
        rateMlPerHour: 62.5,
        duration: '16 Jam',
        description: 'Dosis Rumatan Ke-2 100 mg/kg dalam 1.000 mL D5W'
      },
      totalMg,
      totalVolumeMl: 1700
    };
  }, [nacWeightKg]);

  // Serum Osmolal Gap Calculation (Methanol / Ethylene Glycol / Toxic Alcohols)
  const osmolalGapCalc = useMemo(() => {
    const na = Number(ogNa) || 0;
    const glu = Number(ogGlucose) || 0;
    const bun = Number(ogBun) || 0;
    const measured = Number(ogMeasured) || 0;

    // Standard formula: Calculated Osmolality = 2*Na + Glucose/18 + BUN/2.8
    const calculated = (2 * na) + (glu / 18) + (bun / 2.8);
    const gap = measured - calculated;
    const isCritical = gap > 20;
    const isElevated = gap > 10;

    return {
      calculated: Math.round(calculated * 10) / 10,
      gap: Math.round(gap * 10) / 10,
      status: isCritical ? 'critical' : isElevated ? 'elevated' : 'normal',
      isElevated,
      isCritical,
      interpretation: isCritical
        ? 'Osmolal Gap KRITIS (> 20 mOsm/kg). Sangat kuat mencurigai intoksikasi alkohol toksik masif (Metanol / Etilen Glikol). Indikasi mutlak Fomepizol/Etanol dan segera siapkan Hemodialisis darurat!'
        : isElevated
        ? 'Osmolal Gap MENINGKAT (> 10 mOsm/kg). Mengindikasikan keberadaan zat osmotik eksogen bermolekul rendah (Metanol, Etilen Glikol, Isopropanol, Propilen Glikol). Evaluasi asidosis metabolik dengan Anion Gap & inisiasi antidot.'
        : 'Osmolal Gap NORMAL (≤ 10 mOsm/kg). Kemungkinan kecil keracunan alkohol toksik fase awal, namun bila pajanan sudah lama (> 12-24 jam), waspadai metabolit asam telah terbentuk dan osmolal gap turun kembali normal.'
    };
  }, [ogNa, ogGlucose, ogBun, ogMeasured]);

  // Print Protocol Handler
  const handlePrintProtocol = () => {
    if (!selectedAgent) return;

    const printWindow = window.open('', '_blank', 'width=900,height=950');
    if (!printWindow) {
      alert('Mohon izinkan pop-up browser untuk mencetak lembar protokol antidotum.');
      return;
    }

    const todayStr = new Date().toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="id">
      <head>
        <meta charset="UTF-8">
        <title>PROTOKOL-ANTIDOTUM-IGD-${selectedAgent.name.toUpperCase().replace(/\s+/g, '-')}</title>
        <style>
          @page { size: A4 portrait; margin: 10mm 12mm; }
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
            color: #0f172a;
            background: #ffffff;
            font-size: 8.5pt;
            line-height: 1.35;
            padding: 4mm;
          }
          .header {
            border-bottom: 2px solid #991b1b;
            padding-bottom: 6px;
            margin-bottom: 8px;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
          }
          .header h1 {
            font-size: 13pt;
            font-weight: 900;
            color: #991b1b;
            text-transform: uppercase;
          }
          .header p { font-size: 8pt; color: #475569; }
          .badge-danger {
            background: #991b1b;
            color: #ffffff;
            font-size: 8pt;
            font-weight: 800;
            padding: 3px 8px;
            border-radius: 4px;
            text-transform: uppercase;
          }
          .box {
            border: 1px solid #cbd5e1;
            border-radius: 6px;
            padding: 6px 8px;
            margin-bottom: 8px;
            background: #f8fafc;
          }
          .box-title {
            font-size: 8pt;
            font-weight: 800;
            text-transform: uppercase;
            color: #0f172a;
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 3px;
            margin-bottom: 4px;
          }
          .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
          .antidote-banner {
            border: 2px solid #059669;
            background: #ecfdf5;
            border-radius: 6px;
            padding: 6px 8px;
            margin-bottom: 8px;
          }
          .antidote-title {
            font-size: 10pt;
            font-weight: 900;
            color: #065f46;
            margin-bottom: 2px;
          }
          .regimen-card {
            border: 1px solid #a7f3d0;
            background: #ffffff;
            padding: 5px;
            border-radius: 4px;
            margin-top: 4px;
            font-size: 8pt;
          }
          .regimen-card strong { color: #047857; }
          .alert-warn {
            border: 1.5px solid #d97706;
            background: #fffbeb;
            padding: 5px 8px;
            border-radius: 4px;
            margin-bottom: 8px;
            font-size: 7.8pt;
            color: #92400e;
          }
          .footer {
            border-top: 1px solid #cbd5e1;
            padding-top: 4px;
            font-size: 7pt;
            color: #64748b;
            display: flex;
            justify-content: space-between;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <h1>LEMBAR PROTOKOL PENANGANAN DARURAT & ANTIDOTUM IGD</h1>
            <p>Sentra Informasi Keracunan (SIKer) & Pelayanan Farmasi Klinis Gawat Darurat • ${todayStr}</p>
          </div>
          <div class="badge-danger">${selectedAgent.severityLevel}</div>
        </div>

        <div class="box">
          <div class="box-title">Identitas Racun / Agen Toksik</div>
          <div style="font-size: 10.5pt; font-weight: 900; color: #0f172a;">${selectedAgent.name}</div>
          <div style="font-size: 8pt; color: #475569; margin-top: 2px;">
            <strong>Kategori:</strong> ${selectedAgent.categoryLabel} &bull; <strong>Alias:</strong> ${selectedAgent.aliases.join(', ')}
          </div>
          <div style="font-size: 7.8pt; color: #dc2626; margin-top: 3px;">
            <strong>Ambang Dosis Bahaya:</strong> ${selectedAgent.toxicThreshold}
          </div>
        </div>

        <div class="grid-2">
          <div class="box">
            <div class="box-title">Tanda & Gejala Khas (Toxidrome)</div>
            <ul style="padding-left: 12px; font-size: 7.5pt; line-height: 1.3;">
              ${selectedAgent.toxidromeSigns.map(s => `<li>${s}</li>`).join('')}
            </ul>
          </div>
          <div class="box">
            <div class="box-title">Mekanisme Toksisitas Seluler</div>
            <p style="font-size: 7.5pt; line-height: 1.35; color: #334155;">
              ${selectedAgent.mechanismOfToxicity}
            </p>
          </div>
        </div>

        <!-- ANTIDOTUM UTAMA & DOSIS -->
        <div class="antidote-banner">
          <div class="antidote-title">🛡️ ANTIDOTUM UTAMA: ${selectedAgent.primaryAntidote.toUpperCase()}</div>
          <div style="font-size: 7.8pt; color: #047857; margin-bottom: 4px;">
            <strong>Mekanisme Reversal:</strong> ${selectedAgent.antidoteMechanism}
          </div>
          ${selectedAgent.dosageRegimens
            .map(
              r => `
            <div class="regimen-card">
              <div><strong>[${r.route}] ${r.protocolName} (${r.stage}):</strong></div>
              <div style="font-weight: 700; color: #0f172a; margin: 2px 0;">${r.dosageText}</div>
              <div style="color: #475569; font-size: 7.2pt;">Instruksi: ${r.preparationInstructions}</div>
              ${r.clinicalPearls ? `<div style="color: #b45309; font-size: 7pt; font-style: italic;">*${r.clinicalPearls}</div>` : ''}
            </div>
          `
            )
            .join('')}
        </div>

        <div class="grid-2">
          <div class="box">
            <div class="box-title">Perawatan Suportif & Dekontaminasi</div>
            <ul style="padding-left: 12px; font-size: 7.5pt; line-height: 1.3;">
              ${selectedAgent.supportiveCare.map(c => `<li>${c}</li>`).join('')}
            </ul>
          </div>
          <div class="box">
            <div class="box-title">Parameter Pemantauan Laboratorium</div>
            <ul style="padding-left: 12px; font-size: 7.5pt; line-height: 1.3;">
              ${selectedAgent.monitoringParameters.map(m => `<li>${m}</li>`).join('')}
            </ul>
          </div>
        </div>

        <div class="alert-warn">
          <strong>⚠️ PERINGATAN KLINIS & KONTRAINDIKASI FATAL:</strong>
          <ul style="padding-left: 12px; margin-top: 2px;">
            ${selectedAgent.contraindicatedOrHazardous.map(w => `<li>${w}</li>`).join('')}
          </ul>
        </div>

        <div class="footer">
          <span>Farmasi Druggist • Standar Gawat Darurat Toksikologi & Antidotum</span>
          <span>Hotline SIKer BPOM: 1500-533 / Ambulans IGD: 119</span>
        </div>
      </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 400);
  };

  return (
    <div className="space-y-6 pb-12 font-outfit">
      {/* 1. HERO BANNER GAWAT DARURAT TOKSIKOLOGI */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1c0808] via-[#2a0c0c] to-[#1a0606] p-6 sm:p-8 text-white shadow-2xl border-2 border-rose-500/30">
        <FloatingPillsBackground density="low" accentColor="#f43f5e" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-72 -bottom-10 opacity-10 pointer-events-none hidden lg:block">
          <AlertOctagon className="w-56 h-56 text-rose-400 -rotate-12" />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Toksikologi, Overdosis &amp; Antidotum IGD
            </h1>

            <p className="text-xs sm:text-sm text-rose-200/90 leading-relaxed font-normal">
              Rujukan cepat protokol penanganan intoksikasi darurat, dosis antidotum baku emas,
              toksidrom klinis, dekontaminasi, serta kalkulator interaktif Nomogram Rumack-Matthew
              sesuai standar Sentra Informasi Keracunan (SIKer) BPOM RI &amp; WHO.
            </p>

            {/* Hotline Emergency Box */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
              <div className="flex items-center gap-2 bg-black/50 px-3 py-1.5 rounded-xl border border-rose-500/40 text-rose-200">
                <PhoneCall className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>
                  <strong>Hotline SIKer BPOM:</strong> 1500-533 / 0812-1999-9533
                </span>
              </div>
              <div className="flex items-center gap-2 bg-black/50 px-3 py-1.5 rounded-xl border border-rose-500/40 text-rose-200">
                <ShieldAlert className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>
                  <strong>Darurat Medis / Ambulans:</strong> 119
                </span>
              </div>
            </div>
          </div>

          {/* Right Hero Badge: Database Status */}
          <div className="flex flex-col gap-3 lg:w-72 shrink-0 relative z-10">
            <div className="bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-rose-500/40 space-y-2.5 shadow-xl">
              <div className="flex items-center justify-between text-xs font-bold text-rose-300 border-b border-rose-800/60 pb-2">
                <span className="flex items-center gap-1.5 font-black font-outfit">
                  <Activity className="w-3.5 h-3.5 text-rose-400" />
                  <span>Status Database</span>
                </span>
                <span className="bg-rose-950 text-rose-300 px-2 py-0.5 rounded-full text-[10px] font-black border border-rose-600/40">
                  {TOXICOLOGY_ANTIDOTES_DATABASE.length} Data Terverifikasi
                </span>
              </div>
              <div className="text-xs text-rose-100/80 space-y-1.5 font-medium">
                <div className="flex justify-between items-center">
                  <span>Total Racun Kritis:</span>
                  <span className="font-mono font-bold text-white bg-white/10 px-2 py-0.5 rounded-md text-[11px]">{TOXICOLOGY_ANTIDOTES_DATABASE.length} Agen</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Kalkulator Nomogram:</span>
                  <span className="font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-md text-[11px]">Rumack-Matthew</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Tox-Syndrome:</span>
                  <span className="font-mono font-bold text-rose-300 bg-rose-950/60 px-2 py-0.5 rounded-md text-[11px]">6 Toksidrom IGD</span>
                </div>
                <div className="flex justify-between items-center pt-1 border-t border-rose-900/40 text-[10px] text-rose-300/80">
                  <span>Standar Acuan:</span>
                  <span className="font-bold text-white">SIKer BPOM &amp; WHO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. NAVIGATION SUBTABS - CRIMSON ROSE & AMBER */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-rose-100 dark:border-rose-950/80">
        <button
          onClick={() => setActiveTab('directory')}
          className={`px-4 py-2.5 rounded-2xl text-xs font-black font-outfit transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer shrink-0 ${
            activeTab === 'directory'
              ? 'bg-gradient-to-r from-rose-600 to-red-600 text-white shadow-md shadow-rose-950/40 border border-rose-400/30'
              : 'bg-white dark:bg-[#07152b] text-slate-600 dark:text-slate-300 hover:bg-rose-50 dark:hover:bg-rose-950/40 border border-slate-200 dark:border-rose-900/30 shadow-2xs'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Direktori &amp; Protokol Antidotum</span>
          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold font-outfit ${activeTab === 'directory' ? 'bg-white/20 text-white' : 'bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800'}`}>
            {TOXICOLOGY_ANTIDOTES_DATABASE.length} Racun
          </span>
        </button>

        <button
          onClick={() => setActiveTab('calculators')}
          className={`px-4 py-2.5 rounded-2xl text-xs font-black font-outfit transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer shrink-0 ${
            activeTab === 'calculators'
              ? 'bg-gradient-to-r from-amber-600 to-rose-600 text-white shadow-md shadow-amber-950/40 border border-amber-400/30'
              : 'bg-white dark:bg-[#07152b] text-slate-600 dark:text-slate-300 hover:bg-amber-50 dark:hover:bg-amber-950/40 border border-slate-200 dark:border-amber-900/30 shadow-2xs'
          }`}
        >
          <Calculator className="w-4 h-4" />
          <span>Kalkulator Toksikologi &amp; Nomogram</span>
          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold font-outfit ${activeTab === 'calculators' ? 'bg-white/20 text-white' : 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800'}`}>
            3 Tool EBM
          </span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: DIREKTORI & PROTOKOL RACUN ANTIDOTUM (29 AGEN) */}
      {/* ========================================================================= */}
      {activeTab === 'directory' && (
        <div className="space-y-4">
          {/* SEARCH & CATEGORY FILTER TABS */}
          <div className="bg-white dark:bg-[#07152b] p-4 rounded-2xl border border-slate-200 dark:border-blue-500/20 shadow-sm space-y-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari nama racun, obat, zat kimia, atau nama antidotum (cth: Parasetamol, Nalokson, Pestisida, Sianida, Ular)..."
                className="w-full pl-10 pr-10 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-[#0c1e38] border border-slate-200 dark:border-blue-500/30 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500/40"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 dark:hover:text-white cursor-pointer"
                >
                  Hapus
                </button>
              )}
            </div>

            {/* Category Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs font-bold scrollbar-thin">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3 py-1.5 rounded-xl shrink-0 transition-all cursor-pointer ${
                  selectedCategory === 'all'
                    ? 'bg-rose-600 text-white shadow-md shadow-rose-900/40 border border-rose-400/40'
                    : 'bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
                }`}
              >
                Semua Kategori ({TOXICOLOGY_ANTIDOTES_DATABASE.length})
              </button>
              {TOXICOLOGY_CATEGORIES.map((cat) => {
                const count = TOXICOLOGY_ANTIDOTES_DATABASE.filter(a => a.category === cat.id).length;
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-xl shrink-0 transition-all flex items-center gap-1.5 cursor-pointer ${
                      isSelected
                        ? 'bg-rose-600 text-white shadow-md shadow-rose-900/40 border border-rose-400/40'
                        : 'bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className="text-[10px] opacity-75 font-mono">({count})</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* MAIN CONTENT: 2-COLUMN VIEW (LIST & DETAIL PROTOCOL) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* LEFT COLUMN: LIST OF TOXIC AGENTS (5 COLS) */}
            <div id="toxic-agents-list-container" className="lg:col-span-5 space-y-2.5">
              <div className="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400 px-1">
                <span>Daftar Racun ({filteredAgents.length} Ditemukan)</span>
                <span className="text-[10px]">Klik untuk melihat protokol</span>
              </div>

              <div className="space-y-2 max-h-[800px] overflow-y-auto pr-1 scrollbar-thin">
                {filteredAgents.length === 0 ? (
                  <div className="text-center p-8 bg-white dark:bg-[#07152b] rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 text-slate-500 text-xs">
                    Tidak ada racun yang cocok dengan kata kunci "{searchQuery}".
                  </div>
                ) : (
                  paginatedAgents.map((agent) => {
                    const isSelected = selectedAgent?.id === agent.id;
                    return (
                      <button
                        key={agent.id}
                        onClick={() => setSelectedAgentId(agent.id)}
                        className={`w-full text-left p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start justify-between gap-3 ${
                          isSelected
                            ? 'bg-gradient-to-r from-rose-950 via-[#1f0909] to-black text-white border-rose-500/80 shadow-lg shadow-rose-950/40 ring-1 ring-rose-400/40'
                            : 'bg-white dark:bg-[#07152b] hover:bg-slate-50 dark:hover:bg-[#0c1e38] text-slate-900 dark:text-white border-slate-200 dark:border-blue-500/20'
                        }`}
                      >
                        <div className="space-y-1 min-w-0">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="text-xs font-black truncate">{agent.name}</span>
                            <span
                              className={`text-[9px] font-bold px-1.5 py-0.2 rounded-full border ${
                                agent.severityLevel === 'Kritis / Mengancam Nyawa'
                                  ? 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                                  : agent.severityLevel === 'Tinggi'
                                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                                  : 'bg-blue-500/20 text-blue-300 border-blue-500/40'
                              }`}
                            >
                              {agent.severityLevel}
                            </span>
                          </div>

                          <div className="text-[11px] text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-medium">
                            <ShieldAlert className="w-3 h-3 shrink-0" />
                            <span className="truncate">Antidot: {agent.primaryAntidote}</span>
                          </div>

                          <p className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-1">
                            Sumber: {agent.commonSources[0]}
                          </p>
                        </div>

                        <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'translate-x-1 text-rose-400' : 'text-slate-400'}`} />
                      </button>
                    );
                  })
                )}
              </div>

              {/* Pagination Controls */}
              <PaginationControls
                currentPage={toxicPage}
                totalItems={filteredAgents.length}
                itemsPerPage={toxicPerPage}
                onPageChange={setToxicPage}
                onItemsPerPageChange={setToxicPerPage}
                colorTheme="rose"
                itemLabel="racun / zat toksik"
                scrollToId="toxic-agents-list-container"
              />
            </div>

            {/* RIGHT COLUMN: DETAILED CLINICAL PROTOCOL (7 COLS) */}
            <div className="lg:col-span-7">
              {selectedAgent ? (
                <div className="bg-white dark:bg-[#07152b] rounded-3xl border border-slate-200 dark:border-blue-500/20 p-5 sm:p-6 shadow-sm space-y-5">
                  {/* Monograph Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black uppercase text-rose-600 dark:text-rose-400 tracking-wider">
                          {selectedAgent.categoryLabel}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                        <span className="text-xs font-mono text-slate-500">ID: {selectedAgent.id}</span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                        {selectedAgent.name}
                      </h2>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        <strong>Alias / Merek:</strong> {selectedAgent.aliases.join(', ')}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-auto">
                      <button
                        onClick={handlePrintProtocol}
                        className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-black text-white text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
                        title="Cetak Lembar Protokol IGD"
                      >
                        <Printer className="w-3.5 h-3.5" />
                        <span>🖨️ Cetak Lembar IGD</span>
                      </button>
                    </div>
                  </div>

                  {/* Dosis Ambang Bahaya */}
                  <div className="p-3 rounded-2xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-500/30 text-xs text-rose-900 dark:text-rose-200 flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <strong>Ambang Batas Toksik / Dosis Letal:</strong> {selectedAgent.toxicThreshold}
                    </div>
                  </div>

                  {/* Shortcut to Dedicated Calculator for Paracetamol */}
                  {selectedAgent.id === 'paracetamol' && (
                    <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/40 border border-amber-300 dark:border-amber-700/80 flex flex-wrap items-center justify-between gap-3 text-xs shadow-2xs">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black shrink-0 shadow-2xs">
                          <Calculator className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="font-black text-amber-950 dark:text-amber-200 block font-outfit text-xs sm:text-sm">
                            Kalkulator Nomogram Rumack-Matthew &amp; Titrasi Dosis NAC
                          </span>
                          <span className="text-amber-900/80 dark:text-amber-300/80 text-[11px]">
                            Uji kadar serum vs jam tertelan dan hitung otomatis protokol infus 21-Jam per kg BB.
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          setActiveTab('calculators');
                          setActiveCalcSubTab('rumack-matthew');
                        }}
                        className="px-3.5 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-black font-outfit text-xs flex items-center gap-1.5 transition cursor-pointer shadow-sm active:scale-95 ml-auto sm:ml-0"
                      >
                        <span>Buka Kalkulator</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}

                  {/* Shortcut to Dedicated Calculator for Methanol / Ethylene Glycol */}
                  {selectedAgent.id === 'methanol-ethylene-glycol' && (
                    <div className="p-3.5 rounded-2xl bg-gradient-to-r from-sky-50 to-cyan-50 dark:from-sky-950/40 dark:to-cyan-950/40 border border-sky-300 dark:border-sky-700/80 flex flex-wrap items-center justify-between gap-3 text-xs shadow-2xs">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-sky-500 text-white flex items-center justify-center font-black shrink-0 shadow-2xs">
                          <FlaskConical className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="font-black text-sky-950 dark:text-sky-200 block font-outfit text-xs sm:text-sm">
                            Kalkulator Serum Osmolal Gap (Skrining Toksik Alkohol)
                          </span>
                          <span className="text-sky-900/80 dark:text-sky-300/80 text-[11px]">
                            Hitung selisih osmolalitas terukur vs terhitung untuk konfirmasi oplosan metanol &amp; indikasi hemodialisis.
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          setActiveTab('calculators');
                          setActiveCalcSubTab('osmolal-gap');
                        }}
                        className="px-3.5 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-black font-outfit text-xs flex items-center gap-1.5 transition cursor-pointer shadow-sm active:scale-95 ml-auto sm:ml-0"
                      >
                        <span>Buka Kalkulator</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}

                  {/* ANTIDOTUM UTAMA & PROTOKOL DOSIS (Highlight Box) */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-950 via-[#062419] to-emerald-950 border-2 border-emerald-500/60 shadow-lg text-white space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-emerald-500/30 pb-2">
                      <span className="text-xs sm:text-sm font-black text-emerald-300 uppercase tracking-wide flex items-center gap-1.5">
                        <ShieldAlert className="w-4 h-4 text-emerald-400" />
                        <span>Antidotum Baku Emas: {selectedAgent.primaryAntidote}</span>
                      </span>
                      {selectedAgent.secondaryAntidote && (
                        <span className="text-[10px] bg-emerald-900/80 text-emerald-200 px-2 py-0.5 rounded-full font-bold border border-emerald-400/40">
                          Adjuvan: {selectedAgent.secondaryAntidote}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-emerald-100/90 leading-relaxed">
                      <strong>Mekanisme Reversal:</strong> {selectedAgent.antidoteMechanism}
                    </p>

                    {/* Regimens */}
                    <div className="space-y-2 pt-1">
                      <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider block">
                        Protokol Rute &amp; Jadwal Pemberian:
                      </span>
                      {selectedAgent.dosageRegimens.map((reg, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-xl bg-black/40 border border-emerald-500/30 space-y-1 text-xs"
                        >
                          <div className="flex items-center justify-between text-[11px] font-black">
                            <span className="text-emerald-400">
                              [{reg.route}] {reg.protocolName}
                            </span>
                            <span className="bg-emerald-950 text-emerald-300 px-1.5 py-0.2 rounded text-[9px] border border-emerald-500/40 font-mono">
                              {reg.stage}
                            </span>
                          </div>
                          <div className="font-bold text-white text-xs sm:text-sm leading-snug">
                            {reg.dosageText}
                          </div>
                          <div className="text-[11px] text-emerald-100/70 leading-tight">
                            <strong>Instruksi Persiapan:</strong> {reg.preparationInstructions}
                          </div>
                          {reg.clinicalPearls && (
                            <div className="text-[10px] text-amber-300 font-medium italic pt-0.5">
                              💡 Catatan Klinis: {reg.clinicalPearls}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Toxidrome & Gejala Klinis */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-black uppercase text-slate-700 dark:text-slate-300 tracking-wider flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 text-rose-500" />
                      <span>Tanda, Gejala &amp; Toksidrom Khas:</span>
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedAgent.toxidromeSigns.map((sign, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-medium"
                        >
                          {sign}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Dekontaminasi & Terapi Suportif */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                    <div className="p-3.5 rounded-2xl bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800/50 space-y-1.5 text-xs">
                      <span className="font-black uppercase text-[11px] flex items-center gap-1 text-blue-700 dark:text-blue-300">
                        <Droplet className="w-3.5 h-3.5" />
                        <span>Dekontaminasi &amp; Terapi Suportif:</span>
                      </span>
                      <ul className="space-y-1 text-slate-700 dark:text-slate-300 text-[11px] leading-relaxed">
                        {selectedAgent.supportiveCare.map((sup, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-blue-500">•</span>
                            <span>{sup}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800/50 space-y-1.5 text-xs">
                      <span className="font-black uppercase text-[11px] flex items-center gap-1 text-purple-700 dark:text-purple-300">
                        <HeartPulse className="w-3.5 h-3.5" />
                        <span>Parameter Monitoring Pasien:</span>
                      </span>
                      <ul className="space-y-1 text-slate-700 dark:text-slate-300 text-[11px] leading-relaxed">
                        {selectedAgent.monitoringParameters.map((mon, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-purple-500">•</span>
                            <span>{mon}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Kontraindikasi Fatal & Bahaya */}
                  <div className="p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-500/40 text-xs text-rose-900 dark:text-rose-200 space-y-1">
                    <span className="font-black uppercase text-[11px] flex items-center gap-1 text-rose-700 dark:text-rose-400">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>Kontraindikasi Fatal &amp; Tindakan Berbahaya:</span>
                    </span>
                    <ul className="space-y-0.5 text-[11px] leading-relaxed">
                      {selectedAgent.contraindicatedOrHazardous.map((coh, idx) => (
                        <li key={idx}>⚠️ {coh}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer Sumber EBM */}
                  <div className="border-t border-slate-200 dark:border-slate-800 pt-3 text-[10px] text-slate-500 dark:text-slate-400 flex items-center justify-between font-mono">
                    <span>Rujukan: {selectedAgent.evidenceSource}</span>
                    <span>Standar Farmasi Klinis Kemenkes RI</span>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: SUITE KALKULATOR TOKSIKOLOGI & NOMOGRAM OVERDOSIS */}
      {/* ========================================================================= */}
      {activeTab === 'calculators' && (
        <div className="space-y-6">
          {/* Sub-Tabs Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100 dark:bg-[#061427] rounded-2xl border border-slate-200 dark:border-slate-800 text-xs font-bold font-outfit">
            <button
              onClick={() => setActiveCalcSubTab('rumack-matthew')}
              className={`px-4 py-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                activeCalcSubTab === 'rumack-matthew'
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-950/30'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>1. Nomogram Rumack-Matthew (Parasetamol)</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] ${activeCalcSubTab === 'rumack-matthew' ? 'bg-white/20 text-white' : 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300'}`}>
                Baku Emas
              </span>
            </button>
            <button
              onClick={() => setActiveCalcSubTab('nac-infusion')}
              className={`px-4 py-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                activeCalcSubTab === 'nac-infusion'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-950/30'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Syringe className="w-4 h-4" />
              <span>2. Titrasi Infus NAC 21-Jam (Per BB Pasien)</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] ${activeCalcSubTab === 'nac-infusion' ? 'bg-white/20 text-white' : 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300'}`}>
                3 Kantong IV
              </span>
            </button>
            <button
              onClick={() => setActiveCalcSubTab('osmolal-gap')}
              className={`px-4 py-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                activeCalcSubTab === 'osmolal-gap'
                  ? 'bg-sky-600 text-white shadow-md shadow-sky-950/30'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <FlaskConical className="w-4 h-4" />
              <span>3. Serum Osmolal Gap (Skrining Metanol &amp; Oplosan)</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] ${activeCalcSubTab === 'osmolal-gap' ? 'bg-white/20 text-white' : 'bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300'}`}>
                Toksik Alkohol
              </span>
            </button>
          </div>

          {/* SUBTAB 1: RUMACK-MATTHEW NOMOGRAM */}
          {activeCalcSubTab === 'rumack-matthew' && (
            <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-amber-50/90 via-orange-50/40 to-amber-100/40 dark:from-[#1c1308] dark:via-[#2a1d0a] dark:to-[#1a1205] border-2 border-amber-300 dark:border-amber-500/50 shadow-md dark:shadow-xl space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-amber-200 dark:border-amber-500/30 pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-base shadow shrink-0">
                    <Calculator className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black font-outfit text-amber-950 dark:text-white flex items-center gap-2 flex-wrap">
                      <span>Kalkulator Nomogram Rumack-Matthew (Parasetamol)</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-400/50 text-[10px] font-black uppercase">
                        Standar Rumus Baku Emas
                      </span>
                    </h3>
                    <p className="text-xs text-amber-900/80 dark:text-amber-200/80 font-medium">
                      Menilai indikasi klinis inisiasi antidotum N-Asetilsistein (NAC) berdasarkan jam pasca-konsumsi akut dan kadar serum.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto flex-wrap">
                  <button
                    onClick={() => {
                      setRmHours(14);
                      setRmConcentration(160);
                    }}
                    className="px-2.5 py-1 rounded-lg bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-200 text-xs font-bold border border-rose-300 dark:border-rose-800/60 hover:bg-rose-200 cursor-pointer transition-colors"
                  >
                    ⚡ Kasus Toksik (14 Jam)
                  </button>
                  <button
                    onClick={() => {
                      setRmHours(6);
                      setRmConcentration(40);
                    }}
                    className="px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-200 text-xs font-bold border border-emerald-300 dark:border-emerald-800/60 hover:bg-emerald-200 cursor-pointer transition-colors"
                  >
                    🛡️ Kasus Aman (6 Jam)
                  </button>
                  <button
                    onClick={() => {
                      setRmHours(4);
                      setRmConcentration(160);
                    }}
                    className="px-2.5 py-1 rounded-lg bg-amber-200/70 dark:bg-amber-500/20 text-amber-900 dark:text-amber-200 text-xs font-bold border border-amber-400/50 flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 pt-1">
                {/* Inputs (5 Cols) */}
                <div className="md:col-span-5 space-y-4 bg-white dark:bg-black/40 p-4 rounded-2xl border border-amber-200 dark:border-amber-500/30 shadow-2xs">
                  <div>
                    <div className="flex justify-between text-xs font-extrabold text-amber-950 dark:text-amber-200 mb-1.5">
                      <span>Jam Pasca Konsumsi (Waktu Tertelan):</span>
                      <span className="font-mono font-black text-amber-600 dark:text-amber-400 text-sm">{rmHours} Jam</span>
                    </div>
                    <input
                      type="range"
                      min={2}
                      max={24}
                      step={1}
                      value={rmHours}
                      onChange={(e) => setRmHours(Number(e.target.value))}
                      className="w-full accent-amber-500 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500 dark:text-amber-200/60 font-mono pt-1">
                      <span>4 Jam (Garis Mulai)</span>
                      <span>12 Jam</span>
                      <span>24 Jam (Garis Akhir)</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-extrabold text-amber-950 dark:text-amber-200 mb-1.5">
                      <span>Kadar Parasetamol Serum:</span>
                      <span className="font-mono font-black text-amber-600 dark:text-amber-400 text-sm">{rmConcentration} &mu;g/mL</span>
                    </div>
                    <input
                      type="number"
                      min={0}
                      max={500}
                      value={rmConcentration}
                      onChange={(e) => setRmConcentration(Math.max(0, Number(e.target.value)))}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-black/60 border border-slate-300 dark:border-amber-500/40 text-slate-900 dark:text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                    <span className="text-[10px] text-slate-500 dark:text-amber-200/60 block pt-1 leading-relaxed">
                      *Satuan &mu;g/mL setara dengan mg/L. (Konversi: 1 &mu;mol/L = 0.151 &mu;g/mL).
                    </span>
                  </div>

                  <div className="p-3 bg-amber-50/80 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800/40 text-[11px] text-amber-900 dark:text-amber-200 leading-relaxed">
                    💡 <strong>Prinsip EBM:</strong> Pengambilan sampel sebelum jam ke-4 tidak akurat karena absorpsi lambung belum tuntas. Jika tertelan &gt; 24 jam dengan riwayat konsumsi toksik, inisiasi NAC segera tanpa menunggu nomogram.
                  </div>
                </div>

                {/* Results (7 Cols) */}
                <div
                  className={`md:col-span-7 p-5 rounded-2xl border-2 flex flex-col justify-between space-y-3.5 transition-all shadow-sm ${
                    rmCalculation.status === 'toxic'
                      ? 'bg-rose-50 dark:bg-rose-950/60 border-rose-400 dark:border-rose-500/80 text-rose-950 dark:text-rose-100'
                      : rmCalculation.status === 'safe'
                      ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-400 dark:border-emerald-500/80 text-emerald-950 dark:text-emerald-100'
                      : 'bg-amber-50 dark:bg-amber-950/60 border-amber-400 dark:border-amber-500/80 text-amber-950 dark:text-amber-100'
                  }`}
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="text-xs font-black uppercase tracking-wider flex items-center gap-1.5 font-outfit">
                        {rmCalculation.status === 'toxic' ? (
                          <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                        ) : rmCalculation.status === 'safe' ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                        ) : (
                          <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                        )}
                        <span>Status Keputusan Klinis:</span>
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-black uppercase font-outfit tracking-wide shadow-xs ${
                          rmCalculation.status === 'toxic'
                            ? 'bg-rose-600 text-white'
                            : rmCalculation.status === 'safe'
                            ? 'bg-emerald-600 text-white'
                            : 'bg-amber-600 text-white'
                        }`}
                      >
                        {rmCalculation.status === 'toxic'
                          ? 'INDIKASI NAC SEGERA'
                          : rmCalculation.status === 'safe'
                          ? 'RISIKO RENDAH'
                          : 'OBSERVASI / DELAYED'}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-bold leading-relaxed">
                      {rmCalculation.message}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-white/90 dark:bg-black/50 border border-slate-200 dark:border-white/10 text-xs space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-white/70 font-medium">Ambang Batas Toksisitas Jam ke-{rmHours}:</span>
                      <span className="font-mono font-black text-amber-700 dark:text-amber-300">{rmCalculation.threshold.toFixed(1)} &mu;g/mL</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600 dark:text-white/70 font-medium">Rekomendasi Terapi:</span>
                      <span className="font-bold text-slate-900 dark:text-white">
                        {rmCalculation.needsNac
                          ? 'Mulai Protokol NAC 21-Jam IV (150 mg/kg loading)'
                          : 'Tidak perlu NAC rutin; pantau ALT/AST & klinis'}
                      </span>
                    </div>
                  </div>

                  {rmCalculation.needsNac && (
                    <button
                      onClick={() => setActiveCalcSubTab('nac-infusion')}
                      className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-black font-outfit flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all active:scale-98"
                    >
                      <Syringe className="w-4 h-4" />
                      <span>Lanjut Hitung Dosis Protokol NAC Berdasarkan BB Pasien Ini</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* SUBTAB 2: NAC 21-HOUR INFUSION PROTOCOL CALCULATOR */}
          {activeCalcSubTab === 'nac-infusion' && (
            <div className="bg-white dark:bg-[#07152b] border border-emerald-200/90 dark:border-emerald-500/30 rounded-3xl p-5 sm:p-6 shadow-sm space-y-5 font-outfit">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-emerald-100 dark:border-emerald-950 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-400/30 flex items-center justify-center font-bold shadow-2xs">
                    <Syringe className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2 flex-wrap">
                      <span>Kalkulator Protokol Titrasi Infus N-Asetilsistein (NAC) IV 21-Jam</span>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700">
                        Protokol Baku Prescott (3 Kantong)
                      </span>
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      Hitung otomatis dosis miligram, volume pelarut D5W, dan kecepatan tetesan syringe pump / infusion pump per jam.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs">
                  <span className="text-slate-500 dark:text-slate-400 font-bold">Preset BB:</span>
                  {[45, 50, 60, 70, 80].map((w) => (
                    <button
                      key={w}
                      onClick={() => setNacWeightKg(w)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-black font-mono transition cursor-pointer ${
                        nacWeightKg === w
                          ? 'bg-emerald-600 text-white shadow-xs'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                      }`}
                    >
                      {w}kg
                    </button>
                  ))}
                </div>
              </div>

              {/* Patient Weight Input */}
              <div className="bg-slate-50 dark:bg-slate-900/90 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-black uppercase text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                    <Scale className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Berat Badan Pasien (Aktual):</span>
                  </label>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Bila berat badan &gt; 110 kg, beberapa pedoman internasional menyarankan pembatasan dosis maksimal pada plafon 110 kg.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min={20}
                    max={120}
                    step={1}
                    value={nacWeightKg}
                    onChange={(e) => setNacWeightKg(Number(e.target.value))}
                    className="w-32 sm:w-48 accent-emerald-600 cursor-pointer"
                  />
                  <div className="flex items-center gap-1 bg-white dark:bg-slate-950 px-3 py-1.5 rounded-xl border border-emerald-300 dark:border-emerald-700">
                    <input
                      type="number"
                      min={10}
                      max={150}
                      value={nacWeightKg}
                      onChange={(e) => setNacWeightKg(Math.max(10, Math.min(150, Number(e.target.value))))}
                      className="w-14 text-right font-mono font-black text-slate-900 dark:text-white text-base focus:outline-none"
                    />
                    <span className="text-xs font-bold text-slate-500">kg</span>
                  </div>
                </div>
              </div>

              {/* 3-Bag Protocol Breakdown Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Bag 1 */}
                <div className="bg-gradient-to-br from-emerald-50/70 to-teal-50/50 dark:from-emerald-950/30 dark:to-teal-950/20 border-2 border-emerald-400 dark:border-emerald-700/80 rounded-2xl p-4 space-y-3 shadow-2xs">
                  <div className="flex items-center justify-between border-b border-emerald-200 dark:border-emerald-800/60 pb-2">
                    <span className="px-2 py-0.5 rounded-lg bg-emerald-600 text-white text-[10px] font-black uppercase">
                      Kantong 1 (Loading)
                    </span>
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Durasi: 1 Jam</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">Target Dosis: 150 mg/kg</span>
                    <div className="text-2xl font-black text-emerald-900 dark:text-emerald-300 font-mono mt-0.5">
                      {nacDosing.bag1.doseMg.toLocaleString('id-ID')} mg
                    </div>
                  </div>
                  <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 font-medium pt-1 border-t border-emerald-200/80 dark:border-emerald-800/60">
                    <div className="flex justify-between">
                      <span>Pelarut D5W:</span>
                      <strong className="font-mono text-slate-900 dark:text-white">200 mL</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Kecepatan Infus:</span>
                      <strong className="font-mono text-emerald-700 dark:text-emerald-400 font-black">200 mL / jam</strong>
                    </div>
                  </div>
                  <div className="text-[10px] text-amber-800 dark:text-amber-300/90 italic bg-amber-100/60 dark:bg-amber-950/40 p-2 rounded-xl border border-amber-200 dark:border-amber-800/40">
                    ⚠️ Waspadai flushing &amp; pruritus pada 15–60 menit awal. Siapkan difenhidramin jika reaksi ringan.
                  </div>
                </div>

                {/* Bag 2 */}
                <div className="bg-gradient-to-br from-blue-50/70 to-sky-50/50 dark:from-blue-950/30 dark:to-sky-950/20 border-2 border-blue-400 dark:border-blue-700/80 rounded-2xl p-4 space-y-3 shadow-2xs">
                  <div className="flex items-center justify-between border-b border-blue-200 dark:border-blue-800/60 pb-2">
                    <span className="px-2 py-0.5 rounded-lg bg-blue-600 text-white text-[10px] font-black uppercase">
                      Kantong 2 (Rumatan 1)
                    </span>
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Durasi: 4 Jam</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">Target Dosis: 50 mg/kg</span>
                    <div className="text-2xl font-black text-blue-900 dark:text-blue-300 font-mono mt-0.5">
                      {nacDosing.bag2.doseMg.toLocaleString('id-ID')} mg
                    </div>
                  </div>
                  <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 font-medium pt-1 border-t border-blue-200/80 dark:border-blue-800/60">
                    <div className="flex justify-between">
                      <span>Pelarut D5W:</span>
                      <strong className="font-mono text-slate-900 dark:text-white">500 mL</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Kecepatan Infus:</span>
                      <strong className="font-mono text-blue-700 dark:text-blue-400 font-black">125 mL / jam</strong>
                    </div>
                  </div>
                  <div className="text-[10px] text-blue-800 dark:text-blue-300/90 italic bg-blue-100/60 dark:bg-blue-950/40 p-2 rounded-xl border border-blue-200 dark:border-blue-800/40">
                    💡 Menjaga cadangan glutation hepar terus terisi untuk menetralisir NAPQI reaktif.
                  </div>
                </div>

                {/* Bag 3 */}
                <div className="bg-gradient-to-br from-indigo-50/70 to-purple-50/50 dark:from-indigo-950/30 dark:to-purple-950/20 border-2 border-indigo-400 dark:border-indigo-700/80 rounded-2xl p-4 space-y-3 shadow-2xs">
                  <div className="flex items-center justify-between border-b border-indigo-200 dark:border-indigo-800/60 pb-2">
                    <span className="px-2 py-0.5 rounded-lg bg-indigo-600 text-white text-[10px] font-black uppercase">
                      Kantong 3 (Rumatan 2)
                    </span>
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Durasi: 16 Jam</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">Target Dosis: 100 mg/kg</span>
                    <div className="text-2xl font-black text-indigo-900 dark:text-indigo-300 font-mono mt-0.5">
                      {nacDosing.bag3.doseMg.toLocaleString('id-ID')} mg
                    </div>
                  </div>
                  <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 font-medium pt-1 border-t border-indigo-200/80 dark:border-indigo-800/60">
                    <div className="flex justify-between">
                      <span>Pelarut D5W:</span>
                      <strong className="font-mono text-slate-900 dark:text-white">1.000 mL</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Kecepatan Infus:</span>
                      <strong className="font-mono text-indigo-700 dark:text-indigo-400 font-black">62.5 mL / jam</strong>
                    </div>
                  </div>
                  <div className="text-[10px] text-indigo-800 dark:text-indigo-300/90 italic bg-indigo-100/60 dark:bg-indigo-950/40 p-2 rounded-xl border border-indigo-200 dark:border-indigo-800/40">
                    🧪 Pada jam ke-20 (4 jam sebelum kantong 3 tuntas), periksa ALT/AST &amp; kadar APAP untuk evaluasi perpanjangan terapi.
                  </div>
                </div>
              </div>

              {/* Total Summary Strip */}
              <div className="p-4 rounded-2xl bg-slate-900 text-white flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-400/30 flex items-center justify-center font-bold">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-bold block">Total Kumulatif Protokol 21-Jam (BB {nacWeightKg} kg):</span>
                    <span className="text-lg font-black text-emerald-400 font-mono">
                      {nacDosing.totalMg.toLocaleString('id-ID')} mg NAC (300 mg/kg)
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono">
                  <div className="text-right">
                    <span className="text-slate-400 block">Total Cairan D5W:</span>
                    <span className="font-bold text-white text-sm">1.700 mL</span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400 block">Durasi Tuntas:</span>
                    <span className="font-bold text-white text-sm">21 Jam</span>
                  </div>
                </div>
              </div>

              {/* Alternative Oral NAC Note */}
              <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40 text-xs text-amber-900 dark:text-amber-200 space-y-1">
                <span className="font-black uppercase text-[11px] flex items-center gap-1.5 text-amber-800 dark:text-amber-300">
                  <Info className="w-4 h-4" />
                  <span>Protokol Alternatif NAC Oral (Bila Sediaan IV Kosong / Tidak Tersedia):</span>
                </span>
                <p className="leading-relaxed">
                  Berikan <strong>Loading 140 mg/kg PO</strong> ({Math.round(nacWeightKg * 140)} mg), dilanjutkan <strong>70 mg/kg PO</strong> ({Math.round(nacWeightKg * 70)} mg) setiap 4 jam sebanyak 17 dosis pemeliharaan (Total durasi 72 jam). Bila pasien muntah dalam 1 jam pasca-minum, ulangi dosis tersebut.
                </p>
              </div>
            </div>
          )}

          {/* SUBTAB 3: SERUM OSMOLAL GAP CALCULATOR */}
          {activeCalcSubTab === 'osmolal-gap' && (
            <div className="bg-white dark:bg-[#07152b] border border-sky-200/90 dark:border-sky-500/30 rounded-3xl p-5 sm:p-6 shadow-sm space-y-5 font-outfit">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-sky-100 dark:border-sky-950 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-sky-500/15 text-sky-600 dark:text-sky-400 border border-sky-400/30 flex items-center justify-center font-bold shadow-2xs">
                    <FlaskConical className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2 flex-wrap">
                      <span>Kalkulator Serum Osmolal Gap (Skrining Toksik Alkohol &amp; Oplosan)</span>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300 border border-sky-300 dark:border-sky-700">
                        Metanol &amp; Etilen Glikol
                      </span>
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      Deteksi dini senyawa molekul toksik eksogen sebelum timbul metabolit asam format (kebutaan) atau asam oksalat (gagal ginjal akut).
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs">
                  <span className="text-slate-500 dark:text-slate-400 font-bold">Preset:</span>
                  <button
                    onClick={() => {
                      setOgNa(140);
                      setOgGlucose(90);
                      setOgBun(14);
                      setOgMeasured(293);
                    }}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 text-xs font-bold transition cursor-pointer"
                  >
                    Normal (Gap 3)
                  </button>
                  <button
                    onClick={() => {
                      setOgNa(140);
                      setOgGlucose(100);
                      setOgBun(15);
                      setOgMeasured(312);
                    }}
                    className="px-2.5 py-1 rounded-lg bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-200 text-xs font-bold transition cursor-pointer"
                  >
                    Oplosan Sedang (Gap 17)
                  </button>
                  <button
                    onClick={() => {
                      setOgNa(138);
                      setOgGlucose(110);
                      setOgBun(18);
                      setOgMeasured(335);
                    }}
                    className="px-2.5 py-1 rounded-lg bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-200 text-xs font-bold transition cursor-pointer"
                  >
                    Kritis Metanol (Gap 36)
                  </button>
                </div>
              </div>

              {/* Formula Callout */}
              <div className="p-3.5 bg-slate-50 dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs space-y-1">
                <span className="font-black text-slate-700 dark:text-slate-300 block">
                  Rumus Baku Emas Osmolalitas Serum Terhitung:
                </span>
                <p className="font-mono text-sky-700 dark:text-sky-300 font-bold">
                  Osmolalitas Terhitung = (2 × Na) + (Glukosa / 18) + (BUN / 2.8)
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-[11px]">
                  Osmolal Gap = Osmolalitas Serum Terukur (Osmometer Laboratorium) &minus; Osmolalitas Terhitung. Normal: &le; 10 mOsm/kg.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                {/* 4 Inputs (6 Cols) */}
                <div className="md:col-span-6 grid grid-cols-2 gap-3.5 bg-slate-50 dark:bg-slate-900/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                  <div className="space-y-1">
                    <label className="text-xs font-black text-slate-700 dark:text-slate-300 block">
                      Natrium Serum (Na⁺):
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        min={100}
                        max={180}
                        value={ogNa}
                        onChange={(e) => setOgNa(Number(e.target.value))}
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 font-mono text-sm font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                      <span className="absolute right-2.5 top-2.5 text-[11px] font-bold text-slate-400">mEq/L</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-black text-slate-700 dark:text-slate-300 block">
                      Glukosa Darah:
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        min={20}
                        max={1000}
                        value={ogGlucose}
                        onChange={(e) => setOgGlucose(Number(e.target.value))}
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 font-mono text-sm font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                      <span className="absolute right-2.5 top-2.5 text-[11px] font-bold text-slate-400">mg/dL</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-black text-slate-700 dark:text-slate-300 block">
                      BUN (Urea Nitrogen):
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        min={1}
                        max={200}
                        value={ogBun}
                        onChange={(e) => setOgBun(Number(e.target.value))}
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 font-mono text-sm font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                      <span className="absolute right-2.5 top-2.5 text-[11px] font-bold text-slate-400">mg/dL</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-black text-sky-700 dark:text-sky-300 block">
                      Osmolalitas Terukur:
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        min={200}
                        max={500}
                        value={ogMeasured}
                        onChange={(e) => setOgMeasured(Number(e.target.value))}
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-950 border-2 border-sky-400 dark:border-sky-600 font-mono text-sm font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                      <span className="absolute right-2.5 top-2.5 text-[11px] font-bold text-sky-500">mOsm/kg</span>
                    </div>
                  </div>
                </div>

                {/* Results Card (6 Cols) */}
                <div
                  className={`md:col-span-6 p-5 rounded-2xl border-2 flex flex-col justify-between space-y-4 ${
                    osmolalGapCalc.status === 'critical'
                      ? 'bg-rose-50 dark:bg-rose-950/50 border-rose-400 dark:border-rose-600 text-rose-950 dark:text-rose-100'
                      : osmolalGapCalc.status === 'elevated'
                      ? 'bg-amber-50 dark:bg-amber-950/50 border-amber-400 dark:border-amber-600 text-amber-950 dark:text-amber-100'
                      : 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-400 dark:border-emerald-600 text-emerald-950 dark:text-emerald-100'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="text-xs font-black uppercase tracking-wider flex items-center gap-1.5">
                        {osmolalGapCalc.status === 'critical' ? (
                          <AlertTriangle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                        ) : osmolalGapCalc.status === 'elevated' ? (
                          <Info className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                        ) : (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                        )}
                        <span>Evaluasi Osmolal Gap:</span>
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-black uppercase ${
                          osmolalGapCalc.status === 'critical'
                            ? 'bg-rose-600 text-white'
                            : osmolalGapCalc.status === 'elevated'
                            ? 'bg-amber-600 text-white'
                            : 'bg-emerald-600 text-white'
                        }`}
                      >
                        {osmolalGapCalc.status === 'critical'
                          ? 'KRITIS (> 20 mOsm/kg)'
                          : osmolalGapCalc.status === 'elevated'
                          ? 'MENINGKAT (> 10 mOsm/kg)'
                          : 'NORMAL (≤ 10 mOsm/kg)'}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-1">
                      <div className="bg-white/90 dark:bg-black/40 p-3 rounded-xl border border-slate-200 dark:border-white/10">
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-medium">Osmolalitas Terhitung:</span>
                        <span className="text-xl font-black font-mono text-slate-900 dark:text-white">
                          {osmolalGapCalc.calculated} <span className="text-xs font-normal">mOsm/kg</span>
                        </span>
                      </div>
                      <div className="bg-white/90 dark:bg-black/40 p-3 rounded-xl border border-slate-200 dark:border-white/10">
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-medium">Serum Osmolal Gap:</span>
                        <span className={`text-xl font-black font-mono ${
                          osmolalGapCalc.status === 'critical'
                            ? 'text-rose-600 dark:text-rose-400'
                            : osmolalGapCalc.status === 'elevated'
                            ? 'text-amber-600 dark:text-amber-400'
                            : 'text-emerald-600 dark:text-emerald-400'
                        }`}>
                          {osmolalGapCalc.gap > 0 ? `+${osmolalGapCalc.gap}` : osmolalGapCalc.gap} <span className="text-xs font-normal">mOsm/kg</span>
                        </span>
                      </div>
                    </div>

                    <p className="text-xs font-bold leading-relaxed pt-1">
                      {osmolalGapCalc.interpretation}
                    </p>
                  </div>

                  {osmolalGapCalc.isElevated && (
                    <div className="p-3 bg-white/90 dark:bg-black/60 rounded-xl border border-slate-200 dark:border-white/10 text-[11px] space-y-1">
                      <strong className="text-slate-900 dark:text-white block">Tindakan Cepat IGD:</strong>
                      <span className="text-slate-700 dark:text-slate-300 block">
                        • Inisiasi <strong>Fomepizole</strong> 15 mg/kg IV ATAU <strong>Etanol 10% IV</strong> (loading 10 mL/kg dalam D5W) untuk menghambat enzim Alcohol Dehydrogenase (ADH).
                      </span>
                      <span className="text-slate-700 dark:text-slate-300 block">
                        • Berikan <strong>Asam Folat / Leucovorin 50 mg IV q4h</strong> (akselerasi degradasi asam format).
                      </span>
                      <span className="text-slate-700 dark:text-slate-300 block">
                        • Konsul nefrologi segera untuk <strong>Hemodialisis Cepat</strong> bila Osmolal Gap &gt; 20 mOsm/kg, timbul gangguan visus, atau asidosis metabolik refrakter (pH &lt; 7.25).
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
