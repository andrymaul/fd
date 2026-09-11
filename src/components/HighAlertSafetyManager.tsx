import React, { useState, useMemo } from 'react';
import {
  ShieldAlert,
  AlertTriangle,
  Search,
  Printer,
  Copy,
  Check,
  Zap,
  Info,
  Layers,
  FileText,
  Lock,
  Flame,
  CheckCircle2,
  XCircle,
  ExternalLink,
  ArrowRight,
  ShieldCheck,
  Syringe,
  Activity,
  AlertOctagon
} from 'lucide-react';
import {
  LASA_PAIRS,
  HIGH_ALERT_DRUGS,
  OOT_PRECURSOR_DRUGS,
  LasaPair,
  HighAlertDrug,
  OotPrecursorDrug,
  checkPrescriptionDrugRisk,
  DrugRiskCheckResult
} from '../data/highAlertLasaData';
import { FloatingPillsBackground } from './FloatingPillsBackground';

interface HighAlertSafetyManagerProps {
  onDrugClick?: (drugName: string) => void;
}

export const HighAlertSafetyManager: React.FC<HighAlertSafetyManagerProps> = ({
  onDrugClick
}) => {
  const [activeTab, setActiveTab] = useState<
    'screener' | 'lasa' | 'high_alert' | 'electrolyte' | 'oot_precursor' | 'stickers'
  >('screener');

  // Screener State
  const [screenInput, setScreenInput] = useState<string>('efedrin');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  // Filter & Search States
  const [lasaSearch, setLasaSearch] = useState<string>('');
  const [haSearch, setHaSearch] = useState<string>('');
  const [haCategoryFilter, setHaCategoryFilter] = useState<string>('all');
  const [ootSearch, setOotSearch] = useState<string>('');
  const [selectedLasaModal, setSelectedLasaModal] = useState<LasaPair | null>(null);
  const [selectedHaModal, setSelectedHaModal] = useState<HighAlertDrug | null>(null);

  // Sticker Print Selection State
  const [selectedStickerTypes, setSelectedStickerTypes] = useState<string[]>([
    'high_alert',
    'lasa',
    'electrolyte',
    'cytotoxic'
  ]);

  // Screen result evaluation
  const screenResult = useMemo<DrugRiskCheckResult>(() => {
    return checkPrescriptionDrugRisk(screenInput);
  }, [screenInput]);

  // Filtered LASA pairs
  const filteredLasaPairs = useMemo(() => {
    const q = lasaSearch.trim().toLowerCase();
    if (!q) return LASA_PAIRS;
    return LASA_PAIRS.filter(
      p =>
        p.drugA.name.toLowerCase().includes(q) ||
        p.drugB.name.toLowerCase().includes(q) ||
        p.drugA.tallManName.toLowerCase().includes(q) ||
        p.drugB.tallManName.toLowerCase().includes(q) ||
        p.clinicalRisk.toLowerCase().includes(q)
    );
  }, [lasaSearch]);

  // Filtered High Alert drugs
  const filteredHighAlert = useMemo(() => {
    return HIGH_ALERT_DRUGS.filter(ha => {
      const matchCat = haCategoryFilter === 'all' || ha.category === haCategoryFilter;
      if (!matchCat) return false;
      if (!haSearch.trim()) return true;
      const q = haSearch.toLowerCase();
      return (
        ha.name.toLowerCase().includes(q) ||
        (ha.tallManName && ha.tallManName.toLowerCase().includes(q)) ||
        ha.categoryLabel.toLowerCase().includes(q) ||
        (ha.brandExamples || []).some(b => b.toLowerCase().includes(q))
      );
    });
  }, [haSearch, haCategoryFilter]);

  // Filtered OOT & Precursors
  const filteredOotPrecursors = useMemo(() => {
    const q = ootSearch.trim().toLowerCase();
    if (!q) return OOT_PRECURSOR_DRUGS;
    return OOT_PRECURSOR_DRUGS.filter(
      item =>
        item.name.toLowerCase().includes(q) ||
        item.activeSubstance.toLowerCase().includes(q) ||
        (item.commonBrands || []).some(b => b.toLowerCase().includes(q))
    );
  }, [ootSearch]);

  // Electrolyte only list
  const electrolyteDrugs = useMemo(() => {
    return HIGH_ALERT_DRUGS.filter(ha => ha.category === 'concentrated_electrolyte');
  }, []);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2500);
  };

  // Printable sticker generator for hospital accreditation
  const handlePrintStickerSheet = () => {
    const printWin = window.open('', '_blank');
    if (!printWin) {
      alert('Izinkan pop-up peramban untuk mencetak stiker akreditasi.');
      return;
    }

    const html = `
      <!DOCTYPE html>
      <html lang="id">
      <head>
        <meta charset="utf-8" />
        <title>Stiker Label Akreditasi STARKES: High-Alert, LASA & Elektrolit Pekat</title>
        <style>
          @page { size: A4 portrait; margin: 10mm; }
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif; margin: 0; padding: 0; color: #1e293b; }
          .header-info { text-align: center; border-bottom: 2px solid #0f172a; padding-bottom: 6px; margin-bottom: 12px; }
          .header-title { font-size: 14px; font-weight: 900; }
          .header-sub { font-size: 9px; color: #64748b; }
          .sticker-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
          .sticker {
            border: 2px dashed #94a3b8;
            border-radius: 6px;
            padding: 8px 10px;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
            min-height: 70px;
          }
          .sticker-high-alert {
            background-color: #dc2626;
            color: #ffffff;
            border: 2px solid #b91c1c;
          }
          .sticker-high-alert .tag { font-size: 14px; font-weight: 900; letter-spacing: 1px; }
          .sticker-high-alert .desc { font-size: 8px; font-weight: bold; margin-top: 2px; }

          .sticker-lasa {
            background-color: #fef08a;
            color: #854d0e;
            border: 2px solid #ca8a04;
          }
          .sticker-lasa .tag { font-size: 14px; font-weight: 900; }
          .sticker-lasa .desc { font-size: 8px; font-weight: bold; margin-top: 2px; }

          .sticker-electrolyte {
            background-color: #ffffff;
            color: #b91c1c;
            border: 3px solid #dc2626;
          }
          .sticker-electrolyte .tag { font-size: 11px; font-weight: 900; color: #dc2626; }
          .sticker-electrolyte .desc { font-size: 8px; font-weight: 800; background: #dc2626; color: white; padding: 2px 4px; border-radius: 3px; margin-top: 2px; }

          .sticker-cytotoxic {
            background-color: #581c87;
            color: #ffffff;
            border: 2px solid #3b0764;
          }
          .sticker-cytotoxic .tag { font-size: 12px; font-weight: 900; }
          .sticker-cytotoxic .desc { font-size: 8px; font-weight: bold; margin-top: 2px; }

          .sticker-oot {
            background-color: #0284c7;
            color: #ffffff;
            border: 2px solid #0369a1;
          }
          .sticker-oot .tag { font-size: 12px; font-weight: 900; }
          .sticker-oot .desc { font-size: 8px; font-weight: bold; margin-top: 2px; }

          .cut-line { font-size: 7px; color: #94a3b8; text-align: center; margin-top: 4px; }
        </style>
      </head>
      <body>
        <div class="header-info">
          <div class="header-title">INSTALASI FARMASI — LEMBAR STIKER LABEL AKREDITASI SKP 3 STARKES / KARS</div>
          <div class="header-sub">Gunting mengikuti garis putus-putus dan tempelkan pada kotak obat, rak penyimpanan, atau spuit injeksi • Farmasi Druggist</div>
        </div>

        <div class="sticker-grid">
          <!-- 6 High Alert Stickers -->
          ${Array(6).fill(0).map(() => `
            <div class="sticker sticker-high-alert">
              <div class="tag">⚠️ HIGH ALERT</div>
              <div class="desc">AWAS! OBAT BERISIKO TINGGI<br/>VERIFIKASI GANDA INDEPENDEN</div>
            </div>
          `).join('')}

          <!-- 6 LASA Stickers -->
          ${Array(6).fill(0).map(() => `
            <div class="sticker sticker-lasa">
              <div class="tag">🔶 LASA / NORUM</div>
              <div class="desc">NAMA OBAT RUPA UCAPAN MIRIP<br/>BACA TELITI & TELAAH DOSIS</div>
            </div>
          `).join('')}

          <!-- 6 Electrolyte Concentrated Stickers -->
          ${Array(6).fill(0).map(() => `
            <div class="sticker sticker-electrolyte">
              <div class="tag">⚡ ELEKTROLIT KONSENTRAT</div>
              <div class="desc">WAJIB DIENCERKAN SEBELUM DIGUNAKAN!</div>
            </div>
          `).join('')}

          <!-- 3 Cytotoxic Stickers -->
          ${Array(3).fill(0).map(() => `
            <div class="sticker sticker-cytotoxic">
              <div class="tag">☣️ BAHAYA SITOSTATIKA</div>
              <div class="desc">OBAT KEMOTERAPI KANKER<br/>GUNAKAN APD LENGKAP</div>
            </div>
          `).join('')}

          <!-- 3 OOT Stickers -->
          ${Array(3).fill(0).map(() => `
            <div class="sticker sticker-oot">
              <div class="tag">🛡️ OOT / PREKURSOR</div>
              <div class="desc">OBAT-OBAT TERTENTU DIAWASI<br/>WAJIB RESEP & KARTU STOK</div>
            </div>
          `).join('')}
        </div>

        <div class="cut-line">Dicetak: ${new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })} • Farmasi Druggist Standard Akreditasi SKP 3</div>

        <script>
          window.onload = function() {
            window.print();
          };
        </script>
      </body>
      </html>
    `;

    printWin.document.open();
    printWin.document.write(html);
    printWin.document.close();
  };

  return (
    <div className="space-y-6">
      {/* HERO BANNER - AMBER CRIMSON ACCENTS */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#120606] via-[#210c0a] to-[#38110e] p-6 sm:p-8 text-white shadow-2xl border border-amber-500/30">
        <FloatingPillsBackground density="low" accentColor="#f59e0b" />
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-6 bottom-4 opacity-10 pointer-events-none">
          <ShieldAlert className="w-48 h-48 text-amber-400" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold font-outfit">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Standar Akreditasi Kemenkes STARKES SKP 3, ISMP &amp; BPOM RI</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-rose-600 text-white flex items-center justify-center shadow-lg shadow-amber-950/50 shrink-0">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-black font-outfit tracking-tight">
                  Manajemen Obat Risiko Tinggi (High-Alert &amp; LASA)
                </h1>
                <p className="text-xs sm:text-sm text-amber-100/80 font-medium">
                  Standar penulisan Tall-Man Letters, tata kelola Elektrolit Konsentrat, regulasi OOT &amp; Prekursor, serta generator stiker label akreditasi rumah sakit.
                </p>
              </div>
            </div>

            {/* Quick Stat Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <div className="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-xs flex items-center gap-1.5 font-bold text-amber-200">
                <Layers className="w-3.5 h-3.5 text-amber-400" />
                <span>{LASA_PAIRS.length} Pasangan Tall-Man Letters</span>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-xs flex items-center gap-1.5 font-bold text-rose-200">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                <span>{HIGH_ALERT_DRUGS.length} Obat High-Alert &amp; Elektrolit</span>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-xs flex items-center gap-1.5 font-bold text-sky-200">
                <Lock className="w-3.5 h-3.5 text-sky-400" />
                <span>{OOT_PRECURSOR_DRUGS.length} Regulasi OOT &amp; Prekursor</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 relative z-10">
            <button
              onClick={handlePrintStickerSheet}
              className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-400 hover:to-rose-500 text-white text-xs font-black font-outfit flex items-center gap-2 shadow-lg shadow-rose-950/50 transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Cetak Lembar Stiker A4</span>
            </button>
          </div>
        </div>
      </div>

      {/* NAVIGATION TABS */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-amber-100 dark:border-amber-950/80">
        <button
          onClick={() => setActiveTab('screener')}
          className={`px-4 py-2.5 rounded-2xl text-xs font-black font-outfit transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
            activeTab === 'screener'
              ? 'bg-gradient-to-r from-amber-600 to-rose-600 text-white shadow-md shadow-amber-950/40 border border-amber-400/30'
              : 'bg-white dark:bg-[#140807] text-slate-600 dark:text-slate-300 hover:bg-amber-50 dark:hover:bg-amber-950/40 border border-slate-200 dark:border-amber-900/30'
          }`}
        >
          <Zap className="w-4 h-4" />
          <span>Pendeteksi Resep Berisiko</span>
        </button>

        <button
          onClick={() => setActiveTab('lasa')}
          className={`px-4 py-2.5 rounded-2xl text-xs font-black font-outfit transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
            activeTab === 'lasa'
              ? 'bg-gradient-to-r from-amber-600 to-rose-600 text-white shadow-md shadow-amber-950/40 border border-amber-400/30'
              : 'bg-white dark:bg-[#140807] text-slate-600 dark:text-slate-300 hover:bg-amber-50 dark:hover:bg-amber-950/40 border border-slate-200 dark:border-amber-900/30'
          }`}
        >
          <AlertOctagon className="w-4 h-4" />
          <span>Pasangan LASA (Tall-Man)</span>
        </button>

        <button
          onClick={() => setActiveTab('high_alert')}
          className={`px-4 py-2.5 rounded-2xl text-xs font-black font-outfit transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
            activeTab === 'high_alert'
              ? 'bg-gradient-to-r from-amber-600 to-rose-600 text-white shadow-md shadow-amber-950/40 border border-amber-400/30'
              : 'bg-white dark:bg-[#140807] text-slate-600 dark:text-slate-300 hover:bg-amber-50 dark:hover:bg-amber-950/40 border border-slate-200 dark:border-amber-900/30'
          }`}
        >
          <AlertTriangle className="w-4 h-4" />
          <span>Obat High-Alert (HAM)</span>
        </button>

        <button
          onClick={() => setActiveTab('electrolyte')}
          className={`px-4 py-2.5 rounded-2xl text-xs font-black font-outfit transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
            activeTab === 'electrolyte'
              ? 'bg-gradient-to-r from-amber-600 to-rose-600 text-white shadow-md shadow-amber-950/40 border border-amber-400/30'
              : 'bg-white dark:bg-[#140807] text-slate-600 dark:text-slate-300 hover:bg-amber-50 dark:hover:bg-amber-950/40 border border-slate-200 dark:border-amber-900/30'
          }`}
        >
          <Syringe className="w-4 h-4" />
          <span>Elektrolit Konsentrat</span>
        </button>

        <button
          onClick={() => setActiveTab('oot_precursor')}
          className={`px-4 py-2.5 rounded-2xl text-xs font-black font-outfit transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
            activeTab === 'oot_precursor'
              ? 'bg-gradient-to-r from-amber-600 to-rose-600 text-white shadow-md shadow-amber-950/40 border border-amber-400/30'
              : 'bg-white dark:bg-[#140807] text-slate-600 dark:text-slate-300 hover:bg-amber-50 dark:hover:bg-amber-950/40 border border-slate-200 dark:border-amber-900/30'
          }`}
        >
          <Lock className="w-4 h-4" />
          <span>OOT &amp; Prekursor</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* SUBTAB 1: SKRINING CEPAT RESEP BERISIKO                                   */}
      {/* ========================================================================= */}
      {activeTab === 'screener' && (
        <div className="space-y-6 animate-fade-in">
          {/* Screener Input Box */}
          <div className="p-6 rounded-3xl bg-white dark:bg-[#140807] border border-amber-200 dark:border-amber-900/50 shadow-sm space-y-4">
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white font-outfit flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-500" />
                <span>Pendeteksi Otomatis Obat Berisiko Tinggi &amp; LASA</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">
                Ketikkan nama obat yang tercantum pada resep. Sistem akan menganalisis apakah obat tersebut memiliki pasangan mirip (LASA), memerlukan penulisan Tall-Man Letters, tergolong High-Alert, atau diawasi khusus sebagai OOT/Prekursor.
              </p>
            </div>

            <div className="relative">
              <Search className="w-5 h-5 absolute left-4 top-3.5 text-slate-400" />
              <input
                type="text"
                value={screenInput}
                onChange={e => setScreenInput(e.target.value)}
                placeholder="Ketik nama obat (contoh: efedrin, kcl, tramadol, rhinos, insulin, heparin, vinkristin)..."
                className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-sm font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500/40 focus:outline-none"
              />
            </div>

            {/* Sample Quick Chips */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="text-slate-400 text-[11px] font-medium">Uji Coba Cepat:</span>
              {['efedrin', 'epinefrin', 'kcl', 'tramadol', 'heparin', 'rhinos', 'vinkristin', 'amitriptilin'].map(
                chip => (
                  <button
                    key={chip}
                    onClick={() => setScreenInput(chip)}
                    className="px-2.5 py-1 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 hover:bg-amber-100 text-[11px] font-bold border border-amber-200 dark:border-amber-900/50 cursor-pointer transition-colors"
                  >
                    {chip}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Screener Output Result */}
          {screenResult.hasRisk ? (
            <div className="space-y-4">
              {/* 1. Matched LASA Pairs */}
              {screenResult.matchedLasaPairs.map(pair => (
                <div
                  key={pair.id}
                  className="p-6 rounded-3xl bg-amber-50/70 dark:bg-amber-950/20 border-2 border-amber-400 dark:border-amber-500/40 shadow-sm space-y-4 animate-in fade-in"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-200 dark:border-amber-900/50 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-amber-500 text-slate-950 font-black text-xs font-outfit uppercase">
                        ⚠️ PERINGATAN LASA / NORUM
                      </span>
                      <span className="text-xs font-bold text-amber-900 dark:text-amber-300">
                        {pair.similarityType === 'sound_alike' ? 'Ucapan Mirip (Sound-Alike)' : pair.similarityType === 'look_alike' ? 'Rupa/Kemasan Mirip (Look-Alike)' : 'Rupa & Ucapan Mirip'}
                      </span>
                    </div>

                    <button
                      onClick={() => handleCopy(`${pair.drugA.tallManName} vs ${pair.drugB.tallManName}`)}
                      className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 text-amber-900 dark:text-amber-200 text-xs font-bold border border-amber-300 dark:border-amber-800 flex items-center gap-1 hover:bg-amber-100 cursor-pointer"
                    >
                      {copiedText === `${pair.drugA.tallManName} vs ${pair.drugB.tallManName}` ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                      <span>Salin Tall-Man</span>
                    </button>
                  </div>

                  {/* Visual Tall-Man Letters Display */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-amber-300 dark:border-amber-800/80 space-y-1.5 shadow-sm">
                      <span className="text-[10px] font-extrabold uppercase text-amber-600 block">
                        Obat Pasangan 1 (Tall-Man Letters):
                      </span>
                      <div className="text-lg sm:text-xl font-black font-mono text-amber-950 dark:text-amber-300">
                        {pair.drugA.tallManName}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                        <strong>Bentuk:</strong> {pair.drugA.dosageForm}
                      </div>
                      <div className="text-xs text-slate-500">
                        <strong>Indikasi:</strong> {pair.drugA.indication}
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-amber-300 dark:border-amber-800/80 space-y-1.5 shadow-sm">
                      <span className="text-[10px] font-extrabold uppercase text-amber-600 block">
                        Obat Pasangan 2 (Tall-Man Letters):
                      </span>
                      <div className="text-lg sm:text-xl font-black font-mono text-amber-950 dark:text-amber-300">
                        {pair.drugB.tallManName}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                        <strong>Bentuk:</strong> {pair.drugB.dosageForm}
                      </div>
                      <div className="text-xs text-slate-500">
                        <strong>Indikasi:</strong> {pair.drugB.indication}
                      </div>
                    </div>
                  </div>

                  {/* Clinical Risk Box */}
                  <div className="p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/50 text-xs text-rose-950 dark:text-rose-200 space-y-1">
                    <div className="font-bold flex items-center gap-1.5 text-rose-900 dark:text-rose-300">
                      <AlertTriangle className="w-4 h-4 text-rose-500" />
                      <span>Risiko Klinis Fatal Bila Tertukar:</span>
                    </div>
                    <p className="leading-relaxed">{pair.clinicalRisk}</p>
                  </div>

                  {/* Prevention Measures */}
                  <div className="text-xs space-y-1 text-slate-700 dark:text-slate-300">
                    <div className="font-bold text-amber-900 dark:text-amber-300">
                      Langkah Pencegahan Akreditasi STARKES:
                    </div>
                    <ul className="list-disc list-inside space-y-0.5 text-[11px]">
                      {pair.preventionMeasures.map((m, idx) => (
                        <li key={idx}>{m}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}

              {/* 2. Matched High Alert Drugs */}
              {screenResult.matchedHighAlert.map(ha => (
                <div
                  key={ha.id}
                  className="p-6 rounded-3xl bg-rose-50/70 dark:bg-rose-950/20 border-2 border-rose-500 shadow-sm space-y-4 animate-in fade-in"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-rose-200 dark:border-rose-900/50 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-rose-600 text-white font-black text-xs font-outfit uppercase">
                        🚨 OBAT HIGH-ALERT ({ha.riskLevel.toUpperCase()})
                      </span>
                      <span className="text-xs font-bold text-rose-900 dark:text-rose-300">
                        {ha.categoryLabel}
                      </span>
                    </div>

                    <span className="px-2.5 py-0.5 rounded-lg bg-rose-100 dark:bg-rose-900/50 text-rose-800 dark:text-rose-200 text-xs font-bold border border-rose-300 dark:border-rose-800">
                      Label: {ha.labelColor}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-lg font-black text-slate-900 dark:text-white font-outfit">
                      {ha.tallManName || ha.name}
                    </h4>
                    <p className="text-xs text-rose-700 dark:text-rose-300 font-bold mt-0.5">
                      {ha.highAlertReason}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-900/40 space-y-1">
                      <div className="font-bold text-rose-900 dark:text-rose-300 uppercase tracking-wider text-[10px]">
                        Aturan Penyimpanan Khusus:
                      </div>
                      <ul className="list-disc list-inside space-y-0.5 text-slate-600 dark:text-slate-300 text-[11px]">
                        {ha.storageRules.map((r, i) => (
                          <li key={i}>{r}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-900/40 space-y-1">
                      <div className="font-bold text-rose-900 dark:text-rose-300 uppercase tracking-wider text-[10px]">
                        Peringatan Pemberian (Double-Check):
                      </div>
                      <ul className="list-disc list-inside space-y-0.5 text-slate-600 dark:text-slate-300 text-[11px]">
                        {ha.administrationAlerts.map((a, i) => (
                          <li key={i}>{a}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {ha.antidoteOrRescue && (
                    <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-xs text-emerald-950 dark:text-emerald-200">
                      <strong>Antidotum / Terapi Penyelamat:</strong> {ha.antidoteOrRescue}
                    </div>
                  )}
                </div>
              ))}

              {/* 3. Matched OOT / Precursor */}
              {screenResult.matchedOotPrecursors.map(item => (
                <div
                  key={item.id}
                  className="p-6 rounded-3xl bg-sky-50/70 dark:bg-sky-950/20 border-2 border-sky-400 dark:border-sky-500/40 shadow-sm space-y-4 animate-in fade-in"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-sky-200 dark:border-sky-900/50 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-sky-600 text-white font-black text-xs font-outfit uppercase">
                        🛡️ REGULASI PENGAWASAN {item.typeLabel.toUpperCase()}
                      </span>
                    </div>

                    <span className="px-2.5 py-0.5 rounded-lg bg-sky-100 dark:bg-sky-900/50 text-sky-800 dark:text-sky-200 text-xs font-bold border border-sky-300 dark:border-sky-800">
                      Label: {item.labelColor}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-lg font-black text-slate-900 dark:text-white font-outfit">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-500">Zat Aktif: {item.activeSubstance}</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-300 text-xs space-y-1">
                    <div className="font-bold text-amber-900 dark:text-amber-300">Potensi Penyalahgunaan:</div>
                    <p className="text-amber-950 dark:text-amber-200">{item.abusePotential}</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-sky-200 dark:border-sky-900/40 text-xs space-y-1">
                    <div className="font-bold text-sky-900 dark:text-sky-300">Ketentuan Penyerahan di Apotek / RS:</div>
                    <ul className="list-disc list-inside space-y-0.5 text-slate-700 dark:text-slate-300 text-[11px]">
                      {item.dispensingRules.map((rule, idx) => (
                        <li key={idx}>{rule}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-[11px] text-slate-500">
                    <strong>Penyimpanan &amp; Pelaporan:</strong> {item.storageAndReporting}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12 rounded-3xl bg-white dark:bg-[#140807] border border-slate-200 dark:border-slate-800 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
              <h4 className="text-base font-black text-slate-900 dark:text-white font-outfit">
                Tidak Terdeteksi Risiko High-Alert / LASA pada Kata Kunci Tersebut
              </h4>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Obat "{screenInput}" tidak ditemukan dalam daftar kewaspadaan tinggi khusus. Tetap lakukan skrining farmasi standar (dosis, interaksi, dan instruksi minum pasien).
              </p>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* SUBTAB 2: PASANGAN LASA / NORUM (TALL-MAN LETTERS)                        */}
      {/* ========================================================================= */}
      {activeTab === 'lasa' && (
        <div className="space-y-6 animate-fade-in">
          {/* Search Bar */}
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row gap-3 items-center justify-between">
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
              <input
                type="text"
                value={lasaSearch}
                onChange={e => setLasaSearch(e.target.value)}
                placeholder="Cari pasangan obat LASA (misal: efedrin, hidralazin, klorpromazin, vinkristin)..."
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none"
              />
            </div>
            <span className="text-xs font-bold text-slate-500 whitespace-nowrap">
              Menampilkan {filteredLasaPairs.length} Pasangan Tall-Man
            </span>
          </div>

          {/* LASA Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredLasaPairs.map(pair => (
              <div
                key={pair.id}
                className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                    <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                      LASA / NORUM
                    </span>
                    <span className="text-[11px] font-bold text-slate-400">
                      {pair.similarityType === 'sound_alike' ? 'Ucapan Mirip' : pair.similarityType === 'look_alike' ? 'Rupa Mirip' : 'Rupa & Ucapan'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-center">
                    <div className="p-3 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50">
                      <div className="font-mono font-black text-sm text-amber-950 dark:text-amber-300">
                        {pair.drugA.tallManName}
                      </div>
                      <div className="text-[10px] text-slate-500 mt-1">{pair.drugA.dosageForm}</div>
                    </div>

                    <div className="p-3 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50">
                      <div className="font-mono font-black text-sm text-amber-950 dark:text-amber-300">
                        {pair.drugB.tallManName}
                      </div>
                      <div className="text-[10px] text-slate-500 mt-1">{pair.drugB.dosageForm}</div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                    {pair.clinicalRisk}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <button
                    onClick={() => handleCopy(`${pair.drugA.tallManName} vs ${pair.drugB.tallManName}`)}
                    className="font-bold text-slate-500 hover:text-amber-600 flex items-center gap-1 cursor-pointer text-[11px]"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>Salin Tall-Man</span>
                  </button>

                  <button
                    onClick={() => setSelectedLasaModal(pair)}
                    className="font-bold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1 cursor-pointer text-[11px]"
                  >
                    <span>Protokol Lengkap</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SUBTAB 3: OBAT HIGH-ALERT (HAM)                                           */}
      {/* ========================================================================= */}
      {activeTab === 'high_alert' && (
        <div className="space-y-6 animate-fade-in">
          {/* Filter Bar */}
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row gap-3 items-center justify-between">
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
              <input
                type="text"
                value={haSearch}
                onChange={e => setHaSearch(e.target.value)}
                placeholder="Cari obat High-Alert (misal: KCl, Heparin, Insulin, Norepinefrin)..."
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none"
              />
            </div>

            <select
              value={haCategoryFilter}
              onChange={e => setHaCategoryFilter(e.target.value)}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-slate-900 dark:text-white shrink-0"
            >
              <option value="all">Semua Kategori ({HIGH_ALERT_DRUGS.length})</option>
              <option value="concentrated_electrolyte">Elektrolit Konsentrat</option>
              <option value="cytotoxic">Sitostatika / Kanker</option>
              <option value="vasopressor_inotropic">Vasopresor / Agonis Adrenergik</option>
              <option value="anticoagulant">Antikoagulan Parenteral</option>
              <option value="insulin">Insulin Parenteral</option>
              <option value="nmba">Pelemas Otot (NMBA)</option>
              <option value="opioid">Narkotika &amp; Opioid</option>
            </select>
          </div>

          {/* High Alert Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredHighAlert.map(ha => (
              <div
                key={ha.id}
                className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                    <div>
                      <h4 className="text-base font-black text-slate-900 dark:text-white font-outfit">
                        {ha.tallManName || ha.name}
                      </h4>
                      <span className="text-[11px] font-bold text-rose-600 dark:text-rose-400">
                        {ha.categoryLabel}
                      </span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-lg bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 font-bold text-[10px] shrink-0 border border-rose-300 dark:border-rose-800">
                      {ha.riskLevel}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                    {ha.highAlertReason}
                  </p>

                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 text-[11px] text-slate-700 dark:text-slate-300 space-y-1">
                    <div>
                      <strong>Penyimpanan:</strong> {ha.storageRules[0]}
                    </div>
                    <div>
                      <strong>Pemberian:</strong> {ha.administrationAlerts[0]}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-[10px] text-slate-400">Contoh: {(ha.brandExamples || []).slice(0, 2).join(', ')}</span>
                  <button
                    onClick={() => setSelectedHaModal(ha)}
                    className="font-bold text-rose-600 dark:text-rose-400 hover:underline flex items-center gap-1 cursor-pointer text-[11px]"
                  >
                    <span>SOP Lengkap</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SUBTAB 4: ELEKTROLIT KONSENTRAT TINGGI                                    */}
      {/* ========================================================================= */}
      {activeTab === 'electrolyte' && (
        <div className="space-y-6 animate-fade-in">
          {/* Warning Banner */}
          <div className="p-5 rounded-3xl bg-gradient-to-r from-red-600/15 via-rose-500/10 to-transparent border-2 border-red-500/40 space-y-2">
            <div className="flex items-center gap-2 text-red-900 dark:text-red-300 font-black text-sm font-outfit">
              <AlertOctagon className="w-5 h-5 text-red-600" />
              <span>Standar Keselamatan Pasien SKP 3: Pengelolaan Elektrolit Konsentrat</span>
            </div>
            <p className="text-xs text-red-950 dark:text-red-200 leading-relaxed">
              DILARANG KERAS menyimpan elektrolit konsentrat tinggi (KCl 7.46%, NaCl 3%, MgSO4 40%) di bangsal rawat inap umum. Elektrolit konsentrat hanya boleh berada di Instalasi Farmasi, ICU/ICCU, dan OK dengan akses terbatas, wadah bertanda khusus, dan wajib diencerkan sebelum diinfuskan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {electrolyteDrugs.map(ha => (
              <div
                key={ha.id}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border-2 border-red-400 dark:border-red-600/50 shadow-sm space-y-3"
              >
                <div className="flex items-start justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-2.5">
                  <h4 className="text-base font-black text-slate-900 dark:text-white font-outfit">
                    {ha.tallManName || ha.name}
                  </h4>
                  <span className="px-2.5 py-0.5 rounded-full bg-red-600 text-white font-black text-[10px] uppercase">
                    Wajib Encerkan
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-2xl bg-red-50 dark:bg-red-950/40 text-red-950 dark:text-red-200 font-bold border border-red-200 dark:border-red-900/50">
                    ⚠️ {ha.highAlertReason}
                  </div>

                  <div className="space-y-1">
                    <strong className="text-slate-800 dark:text-slate-200">Ketentuan Penyimpanan:</strong>
                    <ul className="list-disc list-inside space-y-0.5 text-slate-600 dark:text-slate-300 text-[11px]">
                      {ha.storageRules.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-1">
                    <strong className="text-slate-800 dark:text-slate-200">Protokol Pemberian Aman:</strong>
                    <ul className="list-disc list-inside space-y-0.5 text-slate-600 dark:text-slate-300 text-[11px]">
                      {ha.administrationAlerts.map((a, i) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                  </div>

                  {ha.antidoteOrRescue && (
                    <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-950 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-800 text-[11px]">
                      <strong>Antidot / Penyelamat:</strong> {ha.antidoteOrRescue}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SUBTAB 5: OBAT-OBAT TERTENTU (OOT) & PREKURSOR FARMASI                     */}
      {/* ========================================================================= */}
      {activeTab === 'oot_precursor' && (
        <div className="space-y-6 animate-fade-in">
          {/* Header Description */}
          <div className="p-5 rounded-3xl bg-sky-500/10 border border-sky-500/30 space-y-2">
            <div className="flex items-center gap-2 text-sky-950 dark:text-sky-300 font-black text-sm font-outfit">
              <Lock className="w-5 h-5 text-sky-600" />
              <span>Pedoman Pengawasan Obat-Obat Tertentu (OOT) &amp; Prekursor Farmasi BPOM RI</span>
            </div>
            <p className="text-xs text-sky-900 dark:text-sky-200 leading-relaxed">
              Kepatuhan terhadap Peraturan BPOM No. 10 Tahun 2019 juncto No. 24 Tahun 2021 dan PP No. 44 Tahun 2010. Melindungi fasilitas pelayanan kefarmasian dari peredaran ilegal, penyalahgunaan obat keras sistem saraf pusat, dan diversion prekursor.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredOotPrecursors.map(item => (
              <div
                key={item.id}
                className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3"
              >
                <div className="flex items-start justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-2.5">
                  <div>
                    <h4 className="text-base font-black text-slate-900 dark:text-white font-outfit">
                      {item.name}
                    </h4>
                    <span className="text-xs text-slate-500 font-medium">Zat: {item.activeSubstance}</span>
                  </div>
                  <span
                    className={`px-2.5 py-0.5 rounded-lg text-xs font-bold ${
                      item.type === 'oot'
                        ? 'bg-sky-100 dark:bg-sky-950/60 text-sky-800 dark:text-sky-300 border border-sky-300 dark:border-sky-800'
                        : 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800'
                    }`}
                  >
                    {item.typeLabel}
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 border border-amber-200 dark:border-amber-900/40">
                    <strong>Potensi Penyalahgunaan:</strong> {item.abusePotential}
                  </div>

                  <div className="space-y-1 text-slate-700 dark:text-slate-300">
                    <strong className="text-slate-900 dark:text-white">Ketentuan Pelayanan di Apotek:</strong>
                    <ul className="list-disc list-inside space-y-0.5 text-[11px]">
                      {item.dispensingRules.map((rule, idx) => (
                        <li key={idx}>{rule}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <strong>Penyimpanan &amp; Surat Pesanan:</strong> {item.storageAndReporting}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* MODAL: DETAIL PROTOKOL LASA */}
      {selectedLasaModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white dark:bg-[#180807] w-full max-w-xl rounded-3xl shadow-2xl p-6 space-y-5 animate-in zoom-in-95 border border-amber-500/40 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white font-outfit">
                  Protokol Keselamatan LASA / NORUM
                </h3>
                <span className="text-xs text-amber-600 dark:text-amber-400 font-bold">
                  Standar Akreditasi KARS / STARKES SKP 3
                </span>
              </div>
              <button
                onClick={() => setSelectedLasaModal(null)}
                className="p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <XCircle className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 text-center">
                  <div className="font-mono font-black text-base text-amber-950 dark:text-amber-200">
                    {selectedLasaModal.drugA.tallManName}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">{selectedLasaModal.drugA.dosageForm}</div>
                  <div className="text-[11px] text-slate-700 dark:text-slate-300 mt-0.5">{selectedLasaModal.drugA.indication}</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 text-center">
                  <div className="font-mono font-black text-base text-amber-950 dark:text-amber-200">
                    {selectedLasaModal.drugB.tallManName}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">{selectedLasaModal.drugB.dosageForm}</div>
                  <div className="text-[11px] text-slate-700 dark:text-slate-300 mt-0.5">{selectedLasaModal.drugB.indication}</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/50 space-y-1">
                <div className="font-bold text-rose-900 dark:text-rose-300">Konsekuensi Klinis Bila Salah Ambil:</div>
                <p className="text-rose-950 dark:text-rose-200 leading-relaxed">{selectedLasaModal.clinicalRisk}</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
                <div className="font-bold text-slate-900 dark:text-white">Prosedur Pengamanan Farmasi:</div>
                <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300 text-[11px]">
                  {selectedLasaModal.preventionMeasures.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                <button
                  onClick={() => setSelectedLasaModal(null)}
                  className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-slate-800 text-white font-bold text-xs cursor-pointer"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: DETAIL SOP HIGH-ALERT */}
      {selectedHaModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white dark:bg-[#180807] w-full max-w-xl rounded-3xl shadow-2xl p-6 space-y-5 animate-in zoom-in-95 border border-rose-500/40 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white font-outfit">
                  {selectedHaModal.tallManName || selectedHaModal.name}
                </h3>
                <span className="text-xs text-rose-600 dark:text-rose-400 font-bold">
                  Kategori: {selectedHaModal.categoryLabel}
                </span>
              </div>
              <button
                onClick={() => setSelectedHaModal(null)}
                className="p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <XCircle className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-300 text-rose-950 dark:text-rose-200">
                <strong>Alasan High-Alert:</strong> {selectedHaModal.highAlertReason}
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                <div className="font-bold text-slate-900 dark:text-white">Standar Penyimpanan:</div>
                <ul className="list-disc list-inside space-y-0.5 text-slate-700 dark:text-slate-300 text-[11px]">
                  {selectedHaModal.storageRules.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                <div className="font-bold text-slate-900 dark:text-white">Protokol Pemberian &amp; Verifikasi Ganda:</div>
                <ul className="list-disc list-inside space-y-0.5 text-slate-700 dark:text-slate-300 text-[11px]">
                  {selectedHaModal.administrationAlerts.map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>
              </div>

              {selectedHaModal.antidoteOrRescue && (
                <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200">
                  <strong>Antidot / Terapi Penyelamat CITO:</strong> {selectedHaModal.antidoteOrRescue}
                </div>
              )}

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                <button
                  onClick={() => setSelectedHaModal(null)}
                  className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-slate-800 text-white font-bold text-xs cursor-pointer"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
