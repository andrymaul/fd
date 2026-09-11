import React, { useState, useMemo } from 'react';
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
  FileText
} from 'lucide-react';
import {
  TOXICOLOGY_ANTIDOTES_DATABASE,
  TOXICOLOGY_CATEGORIES,
  ToxicAgentProfile,
  ToxinCategory,
  searchToxicAgents
} from '../data/toxicologyAntidotesData';
import { FloatingPillsBackground } from './FloatingPillsBackground';

interface ClinicalToxicologyManagerProps {
  onDrugClick?: (drugName: string) => void;
}

export const ClinicalToxicologyManager: React.FC<ClinicalToxicologyManagerProps> = ({
  onDrugClick
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedAgentId, setSelectedAgentId] = useState<string>('paracetamol');

  // Interactive Rumack-Matthew Calculator State
  const [rmHours, setRmHours] = useState<number>(4);
  const [rmConcentration, setRmConcentration] = useState<number>(160);

  // Filtered List
  const filteredAgents = useMemo(() => {
    return searchToxicAgents(searchQuery, selectedCategory);
  }, [searchQuery, selectedCategory]);

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
        <div className="absolute right-6 bottom-4 opacity-10 pointer-events-none">
          <AlertOctagon className="w-48 h-48 text-rose-400" />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40 text-xs font-black uppercase tracking-wider">
              <AlertOctagon className="w-4 h-4 text-rose-400 animate-pulse" />
              <span>Sentra Informasi Keracunan & Gawat Darurat Farmasi Klinis</span>
            </div>

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

          {/* Right Hero Badge */}
          <div className="bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-rose-500/40 space-y-2 lg:w-72 shrink-0">
            <div className="flex items-center justify-between text-xs font-bold text-rose-300 border-b border-rose-800/80 pb-2">
              <span>Database Status</span>
              <span className="bg-rose-950 text-rose-300 px-2 py-0.5 rounded-full text-[10px] font-black border border-rose-600/40">
                24 Antidotum
              </span>
            </div>
            <div className="text-xs text-rose-100/80 space-y-1">
              <div className="flex justify-between">
                <span>Total Racun Kritis:</span>
                <span className="font-mono font-bold text-white">24 Agen</span>
              </div>
              <div className="flex justify-between">
                <span>Kalkulator Nomogram:</span>
                <span className="font-mono font-bold text-emerald-400">Rumack-Matthew</span>
              </div>
              <div className="flex justify-between">
                <span>Rujukan Resmi:</span>
                <span className="font-mono font-bold text-cyan-300">BPOM / WHO</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. SEARCH & CATEGORY FILTER TABS */}
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

      {/* 3. INTERACTIVE RUMACK-MATTHEW CALCULATOR (IF PARACETAMOL IS ACTIVE OR GLOBAL QUICK TOOL) */}
      <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-[#1c1308] via-[#2a1d0a] to-[#1a1205] border-2 border-amber-500/50 shadow-xl space-y-3 text-white">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-500/30 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-sm shadow shrink-0">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-black text-white flex items-center gap-2">
                <span>Kalkulator Interaktif: Nomogram Rumack-Matthew (Parasetamol)</span>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40 text-[9px] font-black uppercase">
                  Rumus Baku Emas
                </span>
              </h3>
              <p className="text-[11px] text-amber-200/80">
                Tentukan keputusan inisiasi terapi N-Asetilsistein (NAC) berdasarkan jam pasca-konsumsi tunggal akut dan kadar serum.
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              setRmHours(4);
              setRmConcentration(160);
              setSelectedAgentId('paracetamol');
            }}
            className="px-2.5 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 text-xs font-bold border border-amber-400/40 flex items-center gap-1 cursor-pointer self-start sm:self-auto"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset Demo</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-1">
          {/* Inputs (5 Cols) */}
          <div className="md:col-span-5 space-y-3 bg-black/40 p-3.5 rounded-2xl border border-amber-500/30">
            <div>
              <div className="flex justify-between text-xs font-bold text-amber-200 mb-1">
                <span>Jam Pasca Konsumsi (Waktu Tertelan):</span>
                <span className="font-mono font-black text-amber-400">{rmHours} Jam</span>
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
              <div className="flex justify-between text-[10px] text-amber-200/60 font-mono pt-0.5">
                <span>4 Jam (Awal)</span>
                <span>12 Jam</span>
                <span>24 Jam (Maks)</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-amber-200 mb-1">
                <span>Kadar Parasetamol Serum:</span>
                <span className="font-mono font-black text-amber-400">{rmConcentration} &mu;g/mL (mg/L)</span>
              </div>
              <input
                type="number"
                min={0}
                max={500}
                value={rmConcentration}
                onChange={(e) => setRmConcentration(Math.max(0, Number(e.target.value)))}
                className="w-full px-3 py-1.5 rounded-xl bg-black/60 border border-amber-500/40 text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/50"
              />
              <span className="text-[10px] text-amber-200/60 block pt-0.5">
                *Satuan mcg/mL setara dengan mg/L. (Konversi: 1 umol/L = 0.151 mcg/mL).
              </span>
            </div>
          </div>

          {/* Results (7 Cols) */}
          <div
            className={`md:col-span-7 p-4 rounded-2xl border-2 flex flex-col justify-between space-y-2.5 transition-all ${
              rmCalculation.status === 'toxic'
                ? 'bg-rose-950/60 border-rose-500/80 text-rose-100'
                : rmCalculation.status === 'safe'
                ? 'bg-emerald-950/60 border-emerald-500/80 text-emerald-100'
                : 'bg-amber-950/60 border-amber-500/80 text-amber-100'
            }`}
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider flex items-center gap-1.5">
                  {rmCalculation.status === 'toxic' ? (
                    <XCircle className="w-4 h-4 text-rose-400" />
                  ) : rmCalculation.status === 'safe' ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                  )}
                  <span>Status Keputusan Klinis:</span>
                </span>
                <span
                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase ${
                    rmCalculation.status === 'toxic'
                      ? 'bg-rose-900 text-rose-200 border border-rose-400'
                      : rmCalculation.status === 'safe'
                      ? 'bg-emerald-900 text-emerald-200 border border-emerald-400'
                      : 'bg-amber-900 text-amber-200 border border-amber-400'
                  }`}
                >
                  {rmCalculation.status === 'toxic'
                    ? 'INDIKASI NAC SEGERA'
                    : rmCalculation.status === 'safe'
                    ? 'RISIKO RENDAH'
                    : 'OBSERVASI / DELAYED'}
                </span>
              </div>

              <p className="text-xs font-medium leading-relaxed pt-2">
                {rmCalculation.message}
              </p>
            </div>

            <div className="p-2.5 rounded-xl bg-black/40 border border-white/10 text-[11px] space-y-1">
              <div className="flex justify-between">
                <span className="text-white/70">Ambang Batas Toksisitas Jam ke-{rmHours}:</span>
                <span className="font-mono font-bold text-amber-300">{rmCalculation.threshold.toFixed(1)} &mu;g/mL</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Rekomendasi Terapi:</span>
                <span className="font-bold text-white">
                  {rmCalculation.needsNac
                    ? 'Mulai Protokol NAC 21-Jam IV (150 mg/kg loading)'
                    : 'Tidak perlu NAC rutin; pantau ALT/AST & klinis'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. MAIN CONTENT: 2-COLUMN VIEW (LIST & DETAIL PROTOCOL) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* LEFT COLUMN: LIST OF TOXIC AGENTS (5 COLS) */}
        <div className="lg:col-span-5 space-y-2.5">
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
              filteredAgents.map((agent) => {
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
                          className={`text-[9px] font-bold px-2 py-0.2 rounded-full border ${
                            agent.severityLevel === 'Kritis / Mengancam Nyawa'
                              ? 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                              : 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                          }`}
                        >
                          {agent.severityLevel}
                        </span>
                      </div>

                      <div className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                        <ShieldAlert className="w-3 h-3 shrink-0" />
                        <span className="truncate">Antidot: {agent.primaryAntidote}</span>
                      </div>

                      <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                        Sumber: {agent.commonSources.join(', ')}
                      </p>
                    </div>

                    <ChevronRight
                      className={`w-4 h-4 shrink-0 self-center transition-transform ${
                        isSelected ? 'text-rose-400 translate-x-0.5' : 'text-slate-400'
                      }`}
                    />
                  </button>
                );
              })
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: DETAILED PROTOCOL SHEET (7 COLS) */}
        <div className="lg:col-span-7">
          {selectedAgent ? (
            <div className="bg-white dark:bg-[#07152b] rounded-3xl border border-slate-200 dark:border-blue-500/25 shadow-xl p-5 sm:p-7 space-y-5">
              {/* Header Details */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
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
                  <Activity className="w-4 h-4 text-rose-500" />
                  <span>Tanda &amp; Gejala Khas (Toxidrome):</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {selectedAgent.toxidromeSigns.map((sign, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#0c1e38] border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 leading-snug"
                    >
                      {sign}
                    </div>
                  ))}
                </div>
              </div>

              {/* Mekanisme Toksisitas Seluler */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-black uppercase text-slate-700 dark:text-slate-300 tracking-wider flex items-center gap-1.5">
                  <Skull className="w-4 h-4 text-amber-500" />
                  <span>Mekanisme Kerusakan Toksik Seluler:</span>
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-[#0c1e38] p-3 rounded-xl border border-slate-200 dark:border-slate-800 leading-relaxed">
                  {selectedAgent.mechanismOfToxicity}
                </p>
              </div>

              {/* Perawatan Suportif & Monitoring (Grid 2 Kolom) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#0c1e38] border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
                  <span className="font-black text-slate-900 dark:text-white uppercase text-[11px] block border-b border-slate-200 dark:border-slate-800 pb-1">
                    Dekontaminasi &amp; Terapi Suportif
                  </span>
                  <ul className="space-y-1 text-slate-700 dark:text-slate-300 text-[11px] leading-relaxed">
                    {selectedAgent.supportiveCare.map((sc, idx) => (
                      <li key={idx}>• {sc}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#0c1e38] border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
                  <span className="font-black text-slate-900 dark:text-white uppercase text-[11px] block border-b border-slate-200 dark:border-slate-800 pb-1">
                    Parameter Pemantauan Lab
                  </span>
                  <ul className="space-y-1 text-slate-700 dark:text-slate-300 text-[11px] leading-relaxed">
                    {selectedAgent.monitoringParameters.map((mp, idx) => (
                      <li key={idx}>• {mp}</li>
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
  );
};
