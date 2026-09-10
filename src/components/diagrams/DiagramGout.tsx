import React from 'react';
import {
  Flame,
  Stethoscope,
  ShieldAlert,
  ArrowDown,
  ExternalLink,
  Zap,
  Sparkles,
  Layers,
  Activity,
  CheckCircle2,
  AlertTriangle,
  Pill,
  ShieldCheck,
  Footprints
} from 'lucide-react';
import { DiseaseFlowchartData } from '../../data/clinicalFlowchartData';

interface DiagramProps {
  currentDisease: DiseaseFlowchartData;
  onDrugClick: (drugName: string) => void;
  onTestRegimen: (drugList: string[]) => void;
}

export const DiagramGout: React.FC<DiagramProps> = ({
  onDrugClick,
  onTestRegimen
}) => {
  return (
    <div className="space-y-6 bg-gradient-to-b from-[#180824] via-[#260c38] to-[#12051c] rounded-3xl p-4 sm:p-7 border-2 border-purple-500/30 shadow-2xl relative overflow-hidden text-white font-outfit">
      {/* Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* LEVEL 1: PENANGANAN SERANGAN AKUT (< 24 JAM) */}
      <div className="max-w-5xl mx-auto space-y-3 relative z-10">
        <div className="p-4 rounded-3xl bg-gradient-to-r from-[#290a3d] via-[#3a1057] to-[#290a3d] border-2 border-purple-400/60 shadow-xl space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-purple-500/30 pb-2">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-purple-400" />
              <h4 className="text-base font-black text-white">
                Tahap 1: Tatalaksana Cepat Serangan Gout Akut (&lt; 24–36 Jam Pertama)
              </h4>
            </div>
            <span className="px-3 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/40 text-xs font-black uppercase tracking-wider">
              Konsensus IRA 2023 / ACR
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
            <div className="p-3.5 rounded-2xl bg-black/40 border border-purple-400/40 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-purple-300">Pilihan 1: Kolkisin Dosis Rendah</span>
                <span className="text-[10px] text-emerald-400 font-bold">Lini Pertama</span>
              </div>
              <p className="text-[11px] text-purple-100/80 leading-relaxed">
                <strong>1.2 mg segera &plus; 0.6 mg setelah 1 jam</strong> (maks 1.8 mg di hari ke-1), lanjut 0.5–0.6 mg 1–2x/hari hingga reda.
              </p>
              <button
                onClick={() => onDrugClick('Colchicine')}
                className="px-2 py-1 rounded-lg bg-purple-500/20 text-purple-200 text-[11px] font-bold border border-purple-400/40 flex items-center gap-1 hover:bg-purple-500/30 transition-all cursor-pointer"
              >
                <Pill className="w-3 h-3 text-purple-400" />
                <span>Colchicine (Recolfar)</span>
                <ExternalLink className="w-2.5 h-2.5 text-purple-400" />
              </button>
            </div>

            <div className="p-3.5 rounded-2xl bg-black/40 border border-purple-400/40 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-purple-300">Pilihan 2: NSAID Potensi Tinggi</span>
                <span className="text-[10px] text-emerald-400 font-bold">Usia Muda / Tanpa CKD</span>
              </div>
              <p className="text-[11px] text-purple-100/80 leading-relaxed">
                <strong>Kalium Diklofenak 50 mg 3x/hari</strong> atau <strong>Naproxen 500 mg 2x/hari</strong> sesudah makan selama 3–5 hari.
              </p>
              <button
                onClick={() => onDrugClick('Kalium Diklofenak')}
                className="px-2 py-1 rounded-lg bg-purple-500/20 text-purple-200 text-[11px] font-bold border border-purple-400/40 flex items-center gap-1 hover:bg-purple-500/30 transition-all cursor-pointer"
              >
                <Pill className="w-3 h-3 text-purple-400" />
                <span>Kalium Diklofenak 50 mg</span>
                <ExternalLink className="w-2.5 h-2.5 text-purple-400" />
              </button>
            </div>

            <div className="p-3.5 rounded-2xl bg-black/40 border border-purple-400/40 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-purple-300">Pilihan 3: Kortikosteroid Oral</span>
                <span className="text-[10px] text-amber-300 font-bold">Bila Kontraindikasi NSAID</span>
              </div>
              <p className="text-[11px] text-purple-100/80 leading-relaxed">
                <strong>Metilprednisolon 16–32 mg/hari</strong> selama 3–5 hari, dilanjutkan tapering bertahap dalam 7–10 hari.
              </p>
              <button
                onClick={() => onDrugClick('Methylprednisolone')}
                className="px-2 py-1 rounded-lg bg-purple-500/20 text-purple-200 text-[11px] font-bold border border-purple-400/40 flex items-center gap-1 hover:bg-purple-500/30 transition-all cursor-pointer"
              >
                <Pill className="w-3 h-3 text-purple-400" />
                <span>Methylprednisolone Oral</span>
                <ExternalLink className="w-2.5 h-2.5 text-purple-400" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CONNECTING ARROW */}
      <div className="flex flex-col items-center justify-center relative z-10 -my-2">
        <div className="w-0.5 h-6 bg-gradient-to-b from-purple-400 to-indigo-500" />
        <div className="w-2.5 h-2.5 border-r-2 border-b-2 border-indigo-400 rotate-45 -mt-1.5" />
      </div>

      {/* LEVEL 2: URATE-LOWERING THERAPY (ULT) & PROFILAKSIS FLARE */}
      <div className="max-w-5xl mx-auto space-y-4 relative z-10">
        <div className="p-5 rounded-3xl bg-gradient-to-r from-[#1f0a38] via-[#2f1054] to-[#1f0a38] border-2 border-indigo-500/60 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-indigo-700/60 pb-2">
            <span className="text-sm font-black text-indigo-300 uppercase tracking-wide flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-indigo-400" />
              Inisiasi &amp; Titrasi Allopurinol / Febuxostat Disertai Profilaksis Flare
            </span>
            <span className="text-[10px] font-bold bg-indigo-950 text-indigo-200 px-2.5 py-0.5 rounded-full border border-indigo-500/40">
              Treat-to-Target &lt; 6.0 mg/dL
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* LINI 1 ULT: ALLOPURINOL TITRASI NAIK */}
            <div className="p-4 rounded-2xl bg-black/40 border border-indigo-400/40 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-indigo-300">1. Allopurinol (Mulai Dosis Rendah)</span>
                <span className="text-[10px] text-emerald-400 font-bold">Lini 1 Pilihan</span>
              </div>
              <p className="text-[11px] text-indigo-100/80 leading-relaxed">
                Mulai <strong>100 mg 1x/hari</strong> (50 mg bila CKD stadium 3–4). Cek asam urat serum tiap 2–4 minggu dan naikkan dosis bertahap (200 mg, 300 mg, dst) hingga target tercapai.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <button
                  onClick={() => onDrugClick('Allopurinol')}
                  className="px-2.5 py-1.5 rounded-xl bg-indigo-500/20 text-indigo-200 text-xs font-black border border-indigo-400/40 flex items-center gap-1 hover:bg-indigo-500/30 transition-all cursor-pointer"
                >
                  <Pill className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Allopurinol 100 / 300 mg</span>
                  <ExternalLink className="w-2.5 h-2.5 text-indigo-400" />
                </button>
              </div>
            </div>

            {/* LINI 1 ALTERNATIF: FEBUXOSTAT */}
            <div className="p-4 rounded-2xl bg-black/40 border border-indigo-400/40 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-indigo-300">2. Febuxostat (Non-Purine XOI)</span>
                <span className="text-[10px] text-indigo-300 font-bold">Pilihan Gangguan Ginjal</span>
              </div>
              <p className="text-[11px] text-indigo-100/80 leading-relaxed">
                <strong>40 mg 1x/hari</strong> (dapat dinaikkan ke 80 mg bila belum target). Pilihan utama bila alergi Allopurinol atau pasien dengan eGFR &lt; 30 mL/min.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <button
                  onClick={() => onDrugClick('Febuxostat')}
                  className="px-2.5 py-1.5 rounded-xl bg-indigo-500/20 text-indigo-200 text-xs font-black border border-indigo-400/40 flex items-center gap-1 hover:bg-indigo-500/30 transition-all cursor-pointer"
                >
                  <Pill className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Febuxostat (Feburic) 40 / 80 mg</span>
                  <ExternalLink className="w-2.5 h-2.5 text-indigo-400" />
                </button>
              </div>
            </div>
          </div>

          {/* PROFILAKSIS FLARE WAJIB */}
          <div className="p-3.5 rounded-2xl bg-purple-950/50 border border-purple-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-0.5">
              <span className="text-xs font-bold text-purple-200 block">
                🛡️ Profilaksis Flare Wajib (3–6 Bulan Pertama):
              </span>
              <p className="text-[11px] text-purple-300/80">
                Berikan <strong>Kolkisin 0.5–0.6 mg 1–2x/hari</strong> bersamaan dengan inisiasi Allopurinol/Febuxostat untuk mencegah lonjakan radang sendi saat kristal urat melarut.
              </p>
            </div>
            <button
              onClick={() => onTestRegimen(['Allopurinol', 'Colchicine'])}
              className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold shrink-0 cursor-pointer shadow-xs"
            >
              Uji Regimen ULT &plus; Kolkisin
            </button>
          </div>
        </div>
      </div>

      {/* CONNECTING ARROW */}
      <div className="flex flex-col items-center justify-center relative z-10 -my-2">
        <div className="w-0.5 h-6 bg-gradient-to-b from-indigo-400 to-emerald-500" />
        <div className="w-2.5 h-2.5 border-r-2 border-b-2 border-emerald-400 rotate-45 -mt-1.5" />
      </div>

      {/* LEVEL 3: TARGET ASAM URAT & RESOLUSI TOFUS */}
      <div className="max-w-5xl mx-auto p-4 rounded-3xl bg-gradient-to-r from-[#0d2616] via-[#143a21] to-[#0d2616] border-2 border-emerald-500/60 shadow-xl space-y-3 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-emerald-500/30 pb-2">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <h4 className="text-base font-black text-white">
              Target Terapi Jangka Panjang (Treat-to-Target Konsensus IRA 2023)
            </h4>
          </div>
          <span className="px-3 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 text-xs font-black uppercase tracking-wider">
            Remisi &amp; Kuratif
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1 text-xs">
          <div className="p-3.5 rounded-2xl bg-black/40 border border-emerald-500/30 space-y-1">
            <span className="font-bold text-emerald-300 block">Target Standar: &lt; 6.0 mg/dL (360 &mu;mol/L)</span>
            <p className="text-emerald-100/80 leading-relaxed text-[11px]">
              Untuk semua pasien gout artritis tanpa tofus subkutan yang teraba. Mencegah pembentukan nukleasi kristal monosodium urat baru di rongga sendi.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-black/40 border border-emerald-500/30 space-y-1">
            <span className="font-bold text-emerald-300 block">Target Tofus Berat: &lt; 5.0 mg/dL (300 &mu;mol/L)</span>
            <p className="text-emerald-100/80 leading-relaxed text-[11px]">
              Untuk pasien dengan tofus klinis teraba atau erosi sendi radiologis. Diperlukan konsentrasi serum yang lebih rendah untuk mempercepat pelarutan deposit tofus padat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
