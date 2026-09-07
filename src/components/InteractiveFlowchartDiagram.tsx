import React from 'react';
import {
  Stethoscope,
  HeartPulse,
  AlertTriangle,
  ArrowDown,
  ExternalLink,
  ShieldAlert,
  CheckCircle2,
  GitBranch,
  Pill,
  Sparkles,
  Zap
} from 'lucide-react';
import { DiseaseFlowchartData } from '../data/clinicalFlowchartData';

interface InteractiveFlowchartDiagramProps {
  currentDisease: DiseaseFlowchartData;
  onDrugClick: (drugName: string) => void;
  onTestRegimen: (drugList: string[]) => void;
}

export const InteractiveFlowchartDiagram: React.FC<InteractiveFlowchartDiagramProps> = ({
  currentDisease,
  onDrugClick,
  onTestRegimen
}) => {
  const isHypertension = currentDisease.id === 'flowchart-hypertension';

  if (isHypertension) {
    return (
      <div className="space-y-6 bg-gradient-to-b from-[#030914] via-[#071328] to-[#040d1e] rounded-3xl p-4 sm:p-7 border-2 border-blue-500/30 shadow-2xl relative overflow-hidden text-white font-outfit">
        {/* Ambient Glows */}
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* ================================================================= */}
        {/* LEVEL 1: EVALUASI AWAL TEKANAN DARAH */}
        {/* ================================================================= */}
        {/* ================================================================= */}
        {/* LEVEL 1: EVALUASI AWAL TEKANAN DARAH & JALUR CEPAT KRISIS */}
        {/* ================================================================= */}
        <div className="max-w-4xl mx-auto space-y-3 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Skrining Standar */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-[#0b1f3d] via-[#102d5a] to-[#0b1f3d] border-2 border-cyan-400/60 shadow-xl shadow-cyan-950/40 space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 text-[11px] font-black uppercase tracking-wider">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                <span>Tahap 1: Evaluasi &amp; Penapisan</span>
              </div>
              <h4 className="text-base font-black text-white flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>Evaluasi Derajat Tekanan Darah Awal</span>
              </h4>
              <p className="text-xs text-cyan-100/80 font-medium leading-relaxed">
                Konfirmasi tensimeter klinik terkalibrasi (minimal 2 kunjungan) atau konfirmasi ABPM (24 jam &ge; 130/80) / HBPM (rumah &ge; 135/85). Skrining risiko kardiovaskular, lab eGFR, kalium, dan UACR.
              </p>
            </div>

            {/* Jalur Cepat Krisis Hipertensi */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-rose-950/80 via-[#2a0c1a] to-rose-950/80 border-2 border-rose-500/70 shadow-xl shadow-rose-950/50 space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-400/40 text-[11px] font-black uppercase tracking-wider">
                <ShieldAlert className="w-3 h-3 text-rose-400" />
                <span>Jalur Cepat: TD &gt; 180 / &gt; 120 mmHg</span>
              </div>
              <h4 className="text-base font-black text-white flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0" />
                <span>Skrining Target Organ Damage (TOD) Akut</span>
              </h4>
              <div className="space-y-1 text-xs text-rose-100/90 leading-snug">
                <div>
                  <strong className="text-rose-300">🚨 Emergensi (Ada TOD Akut):</strong> Rujuk ICU! Titrasi IV kontinyu (Nicardipine IV drip 5–15 mg/jam atau Diltiazem IV). Target MAP turun 20–25% di jam ke-1.
                </div>
                <div>
                  <strong className="text-amber-300">⚠️ Urgensi (Tanpa TOD Akut):</strong> Rawat jalan/observasi. Oral Captopril 25 mg SL/oral, Amlodipine 10 mg, atau Clonidine 0.15 mg. Target turun dalam 24–48 jam.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CONNECTING ARROW 1 */}
        <div className="flex flex-col items-center justify-center relative z-10 -my-2">
          <div className="w-0.5 h-7 bg-gradient-to-b from-cyan-400 to-blue-500" />
          <div className="w-2.5 h-2.5 border-r-2 border-b-2 border-blue-400 rotate-45 -mt-1.5" />
        </div>

        {/* ================================================================= */}
        {/* LEVEL 2: MODIFIKASI GAYA HIDUP */}
        {/* ================================================================= */}
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="p-4 rounded-2xl bg-[#091a33] border-2 border-blue-400/50 shadow-lg space-y-2 text-center">
            <div className="flex items-center justify-center gap-2">
              <HeartPulse className="w-5 h-5 text-emerald-400" />
              <h4 className="text-sm sm:text-base font-black text-white">
                Tahap 2: Modifikasi Gaya Hidup Sehat (Diberikan ke Semua Pasien)
              </h4>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-xs">
              <span className="px-2.5 py-1 rounded-lg bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 font-bold">
                🥗 Diet DASH &amp; Batasi Garam (&lt;2g Na/hari)
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-blue-950/70 border border-blue-500/40 text-blue-300 font-bold">
                🏃 Olahraga 150 mnt/mgg
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-purple-950/70 border border-purple-500/40 text-purple-300 font-bold">
                ⚖️ BB Ideal (IMT 18.5-22.9)
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-rose-950/70 border border-rose-500/40 text-rose-300 font-bold">
                🚭 Stop Rokok &amp; Alkohol
              </span>
            </div>
          </div>
        </div>

        {/* CONNECTING ARROW 2 */}
        <div className="flex flex-col items-center justify-center relative z-10 -my-2">
          <div className="w-0.5 h-7 bg-gradient-to-b from-blue-500 to-amber-500" />
          <div className="w-2.5 h-2.5 border-r-2 border-b-2 border-amber-400 rotate-45 -mt-1.5" />
        </div>

        {/* ================================================================= */}
        {/* LEVEL 3: DECISION SPLIT (AMBANG BATAS INISIASI OBAT) */}
        {/* ================================================================= */}
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/20 via-indigo-600/30 to-amber-500/20 border-2 border-amber-400/60 shadow-xl shadow-amber-950/30 space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-black text-amber-300 uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <span>Titik Keputusan Klinis (Decision Gate: Ambang Batas Inisiasi)</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left text-xs pt-1">
              <div className="p-2.5 rounded-xl bg-black/40 border border-amber-400/30 space-y-1">
                <span className="font-extrabold text-amber-300 block">• Inisiasi Monoterapi Awal:</span>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  Hipertensi Derajat 1 Risiko Rendah (TD 140–149/90–94) atau Usia Lanjut &gt; 80 tahun / Pasien Rentan (Frail). (Amlodipine 5mg / Candesartan 8mg / HCT 12.5mg).
                </p>
              </div>
              <div className="p-2.5 rounded-xl bg-black/40 border border-indigo-400/30 space-y-1">
                <span className="font-extrabold text-indigo-300 block">• Inisiasi Kombinasi 2 Obat (SPC):</span>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  Mayoritas pasien dewasa (Derajat 1 Risiko Sedang/Tinggi atau Derajat 2 &ge; 160/100 atau tensi &gt; 20/10 mmHg di atas target). Formula baku: A + C atau A + D.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SVG BRANCH CONNECTOR (DESKTOP) */}
        <div className="hidden lg:block relative z-10 h-8 -my-1">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 32">
            <path d="M 400 0 L 400 12 L 200 12 L 200 32" fill="none" stroke="#60a5fa" strokeWidth="2.5" strokeDasharray="4 2" />
            <path d="M 400 0 L 400 12 L 600 12 L 600 32" fill="none" stroke="#818cf8" strokeWidth="2.5" strokeDasharray="4 2" />
            <polygon points="196,28 200,32 204,28" fill="#60a5fa" />
            <polygon points="596,28 600,32 604,28" fill="#818cf8" />
          </svg>
        </div>

        {/* ================================================================= */}
        {/* TWO PARALLEL BRANCHES (LEFT: COMORBID | RIGHT: GENERAL) */}
        {/* ================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10 pt-1">
          
          {/* CABANG KIRI: KOMORBIDITAS KHUSUS */}
          <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-b from-[#0b1b36] to-[#08152b] border-2 border-blue-400/60 shadow-2xl space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2 border-b border-blue-900/60 pb-3">
                <span className="px-3 py-1 rounded-xl bg-blue-500/20 text-blue-300 text-xs font-black uppercase tracking-wider border border-blue-400/40 flex items-center gap-1.5">
                  <span>🩺 JALUR A</span>
                </span>
                <span className="text-xs font-black text-cyan-300 bg-cyan-950/80 px-3 py-1 rounded-xl border border-cyan-400/40">
                  TARGET: &lt; 130/80 mmHg
                </span>
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-black text-white">
                  Hipertensi dengan Komorbiditas Spesifik
                </h4>
                <p className="text-xs text-blue-200/70 font-medium mt-0.5">
                  Pemilihan obat lini pertama WAJIB mempertimbangkan proteksi organ target spesifik:
                </p>
              </div>

              {/* 4 Comorbid specific cards */}
              <div className="space-y-2.5 pt-1">
                {/* CKD */}
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 space-y-1.5 hover:border-cyan-400/60 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-white flex items-center gap-1.5">
                      <span>🫘 Penyakit Ginjal Kronik (CKD) &amp; Proteinuria</span>
                    </span>
                    <span className="text-[10px] font-extrabold text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded">
                      Renoprotektif
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <button
                      onClick={() => onDrugClick('Candesartan')}
                      className="px-2.5 py-1 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-200 text-xs font-black border border-cyan-400/40 flex items-center gap-1 cursor-pointer"
                    >
                      <span>💊 ACEi (Ramipril) atau ARB (Candesartan)</span>
                      <ExternalLink className="w-3 h-3 text-cyan-400" />
                    </button>
                  </div>
                  <p className="text-[10px] text-slate-300 leading-snug">
                    Menurunkan tekanan intraglomerular, antiproteinuria, dan menahan penurunan eGFR.
                  </p>
                </div>

                {/* CAD */}
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 space-y-1.5 hover:border-cyan-400/60 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-white flex items-center gap-1.5">
                      <span>🫀 Penyakit Jantung Koroner (CAD / Post-MI)</span>
                    </span>
                    <span className="text-[10px] font-extrabold text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded">
                      Anti-Iskemik
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <button
                      onClick={() => onDrugClick('Bisoprolol')}
                      className="px-2.5 py-1 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-200 text-xs font-black border border-emerald-400/40 flex items-center gap-1 cursor-pointer"
                    >
                      <span>💊 Beta-Blocker (Bisoprolol) + ACEi / ARB</span>
                      <ExternalLink className="w-3 h-3 text-emerald-400" />
                    </button>
                  </div>
                  <p className="text-[10px] text-slate-300 leading-snug">
                    Menurunkan konsumsi O2 miokard, menstabilkan plak ateroma, dan mencegah aritmia ventrikel.
                  </p>
                </div>

                {/* HFrEF */}
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 space-y-1.5 hover:border-cyan-400/60 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-white flex items-center gap-1.5">
                      <span>❤️‍🩹 Gagal Jantung (HFrEF EF &lt; 40%)</span>
                    </span>
                    <span className="text-[10px] font-extrabold text-pink-300 bg-pink-950/80 px-2 py-0.5 rounded">
                      4 Pilar Terapi
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="px-2.5 py-1 rounded-lg bg-pink-500/20 text-pink-200 text-xs font-black border border-pink-400/40">
                      ARNI / ACEi + Bisoprolol + Spironolakton + SGLT2i
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-300 leading-snug">
                    Menurunkan mortalitas dan rawat inap dekompensasi kardiovaskular secara signifikan.
                  </p>
                </div>

                {/* DM */}
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 space-y-1.5 hover:border-cyan-400/60 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-white flex items-center gap-1.5">
                      <span>🩸 Diabetes Melitus Tipe 2 (DMT2)</span>
                    </span>
                    <span className="text-[10px] font-extrabold text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded">
                      Metabolik Aman
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <button
                      onClick={() => onDrugClick('Candesartan')}
                      className="px-2.5 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 text-xs font-black border border-amber-400/40 flex items-center gap-1 cursor-pointer"
                    >
                      <span>💊 ARB / ACEi + CCB DHP (Amlodipine)</span>
                      <ExternalLink className="w-3 h-3 text-amber-400" />
                    </button>
                  </div>
                  <p className="text-[10px] text-slate-300 leading-snug">
                    Netral terhadap lipid &amp; glukosa; mencegah mikroalbuminuria diabetik.
                  </p>
                </div>

                {/* Kehamilan */}
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 space-y-1.5 hover:border-pink-400/60 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-white flex items-center gap-1.5">
                      <span>🤰 Kehamilan (Gestasional / Preeklamsia)</span>
                    </span>
                    <span className="text-[10px] font-extrabold text-pink-300 bg-pink-950/80 px-2 py-0.5 rounded">
                      Target 135/85
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <button
                      onClick={() => onDrugClick('Methyldopa')}
                      className="px-2.5 py-1 rounded-lg bg-pink-500/20 hover:bg-pink-500/30 text-pink-200 text-xs font-black border border-pink-400/40 flex items-center gap-1 cursor-pointer"
                    >
                      <span>💊 Methyldopa / Labetalol / Nifedipine</span>
                      <ExternalLink className="w-3 h-3 text-pink-400" />
                    </button>
                  </div>
                  <p className="text-[10px] text-rose-300 leading-snug font-bold">
                    ⚠️ KONTRAINDIKASI MUTLAK: ACEi, ARB, MRA (Teratogenik &amp; memicu gagal ginjal janin).
                  </p>
                </div>

                {/* Pasca Stroke */}
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 space-y-1.5 hover:border-purple-400/60 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-white flex items-center gap-1.5">
                      <span>🧠 Pasca Stroke Iskemik / TIA</span>
                    </span>
                    <span className="text-[10px] font-extrabold text-purple-300 bg-purple-950/80 px-2 py-0.5 rounded">
                      Prevensi Sekunder
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <button
                      onClick={() => onDrugClick('Ramipril')}
                      className="px-2.5 py-1 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 text-purple-200 text-xs font-black border border-purple-400/40 flex items-center gap-1 cursor-pointer"
                    >
                      <span>💊 ACEi/ARB + CCB DHP atau Diuretik Tiazid</span>
                      <ExternalLink className="w-3 h-3 text-purple-400" />
                    </button>
                  </div>
                  <p className="text-[10px] text-slate-300 leading-snug">
                    Target &lt; 130/80 mmHg; menurunkan risiko stroke infark sekunder &amp; perdarahan serebral.
                  </p>
                </div>
              </div>
            </div>

            {/* Escalation note for comorbid */}
            <div className="pt-3 border-t border-blue-900/60 bg-blue-950/40 p-3 rounded-2xl border border-blue-800/40">
              <span className="text-[10px] font-extrabold text-cyan-300 uppercase block mb-1">
                Eskalasi Jika Target &lt; 130/80 Belum Tercapai:
              </span>
              <p className="text-[11px] text-slate-200 font-medium">
                Kombinasikan Lini 1 dengan CCB DHP atau Diuretik Tiazid (Kombinasi 3 Obat). Jika tensi tetap refrakter → Konvergensi ke <strong>Langkah 4 (Hipertensi Resisten)</strong>.
              </p>
            </div>
          </div>

          {/* CABANG KANAN: HIPERTENSI UMUM / ESENSIAL */}
          <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-b from-[#11183c] to-[#0b102b] border-2 border-indigo-400/60 shadow-2xl space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2 border-b border-indigo-900/60 pb-3">
                <span className="px-3 py-1 rounded-xl bg-indigo-500/20 text-indigo-300 text-xs font-black uppercase tracking-wider border border-indigo-400/40 flex items-center gap-1.5">
                  <span>💊 JALUR B</span>
                </span>
                <span className="text-xs font-black text-indigo-300 bg-indigo-950/80 px-3 py-1 rounded-xl border border-indigo-400/40">
                  TARGET: &lt; 140/90 mmHg (&lt;130/80 Optimal)
                </span>
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-black text-white">
                  Hipertensi Esensial Umum (Tanpa Komorbid Khusus)
                </h4>
                <p className="text-xs text-indigo-200/70 font-medium mt-0.5">
                  Alur titrasi bertahap berbasis Single Pill Combination (SPC) rekomendasi PERKI &amp; ISH:
                </p>
              </div>

              {/* Sequential Step Boxes */}
              <div className="space-y-2.5 pt-1">
                
                {/* Sub-Branch: Low risk monotherapy */}
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-1">
                  <span className="text-[10px] font-extrabold text-amber-300 uppercase block">
                    Pengecualian Monoterapi:
                  </span>
                  <p className="text-[11px] leading-snug">
                    Khusus Lansia Frailty (&gt;80 tahun) atau Hipertensi Derajat 1 Risiko Rendah: 
                    <strong className="text-white ml-1">Monoterapi (Amlodipine 5mg ATAU Candesartan 8mg ATAU HCT 12.5mg)</strong>.
                  </p>
                </div>

                {/* Step 1 Dual SPC */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-blue-950/90 to-indigo-950/90 border-2 border-blue-400/60 space-y-1.5 shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-cyan-300 uppercase tracking-wider">
                      LANGKAH 1: Inisiasi Dual Kombinasi (SPC Dosis Rendah)
                    </span>
                    <span className="text-[9px] font-black bg-cyan-400 text-slate-950 px-2 py-0.5 rounded">
                      Lini 1 Utama
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap pt-0.5">
                    <button
                      onClick={() => onDrugClick('Candesartan')}
                      className="px-2.5 py-1 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-white text-xs font-black border border-cyan-400/50 flex items-center gap-1 cursor-pointer"
                    >
                      <span>💊 Candesartan 8 mg + Amlodipine 5 mg (A + C)</span>
                      <ExternalLink className="w-3 h-3 text-cyan-400" />
                    </button>
                  </div>
                  <div className="p-2 rounded-xl bg-rose-950/60 border border-rose-500/40 text-[10px] text-rose-200 font-bold">
                    ⚠️ BLACK BOX WARNING: Dilarang menggabungkan ACEi + ARB secara bersamaan (Toksisitas ginjal &amp; hiperkalemia).
                  </div>
                  <p className="text-[10px] text-cyan-100/70">
                    Pilihan utama konsensus PERKI/InaSH &amp; ISH 2020. Alternatif: ACEi + CCB atau ARB + Diuretik.
                  </p>
                </div>

                {/* Connecting Step Arrow */}
                <div className="flex justify-center -my-1">
                  <span className="text-[10px] font-extrabold text-indigo-400 bg-indigo-950 px-2 py-0.5 rounded border border-indigo-800 flex items-center gap-1">
                    <ArrowDown className="w-3 h-3" /> Jika setelah 4 minggu tensi ≥ 140/90
                  </span>
                </div>

                {/* Step 2 Full Dose */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-indigo-950/90 to-blue-950/90 border-2 border-indigo-400/60 space-y-1.5 shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-indigo-300 uppercase tracking-wider">
                      LANGKAH 2: Eskalasi ke Dosis Penuh Kombinasi Ganda
                    </span>
                    <span className="text-[9px] font-black bg-indigo-400 text-slate-950 px-2 py-0.5 rounded">
                      Full Dose SPC
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap pt-0.5">
                    <button
                      onClick={() => onDrugClick('Candesartan')}
                      className="px-2.5 py-1 rounded-lg bg-indigo-500/20 hover:bg-indigo-500/30 text-white text-xs font-black border border-indigo-400/50 flex items-center gap-1 cursor-pointer"
                    >
                      <span>💊 Candesartan 16 mg + Amlodipine 10 mg (Dosis Penuh)</span>
                      <ExternalLink className="w-3 h-3 text-indigo-400" />
                    </button>
                  </div>
                  <p className="text-[10px] text-indigo-100/70">
                    Maksimalkan dosis kombinasi 2 obat sebelum beralih ke 3 obat; evaluasi kepatuhan minum obat harian.
                  </p>
                </div>

                {/* Connecting Step Arrow */}
                <div className="flex justify-center -my-1">
                  <span className="text-[10px] font-extrabold text-indigo-400 bg-indigo-950 px-2 py-0.5 rounded border border-indigo-800 flex items-center gap-1">
                    <ArrowDown className="w-3 h-3" /> Jika setelah 4 minggu masih ≥ 140/90
                  </span>
                </div>

                {/* Step 3 Triple Therapy */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-teal-950/90 to-indigo-950/90 border-2 border-teal-400/60 space-y-1.5 shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-teal-300 uppercase tracking-wider">
                      LANGKAH 3: Terapi Kombinasi Tiga Obat (Triple Therapy)
                    </span>
                    <span className="text-[9px] font-black bg-teal-400 text-slate-950 px-2 py-0.5 rounded">
                      A + C + D
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap pt-0.5">
                    <button
                      onClick={() => onDrugClick('Hydrochlorothiazide')}
                      className="px-2.5 py-1 rounded-lg bg-teal-500/20 hover:bg-teal-500/30 text-white text-xs font-black border border-teal-400/50 flex items-center gap-1 cursor-pointer"
                    >
                      <span>💊 Candesartan 16 mg + Amlodipine 10 mg + HCT 12.5 - 25 mg</span>
                      <ExternalLink className="w-3 h-3 text-teal-400" />
                    </button>
                  </div>
                  <p className="text-[10px] text-teal-100/70">
                    Penambahan diuretik tiazid pagi hari untuk mengeliminasi kelebihan natrium intravaskular.
                  </p>
                </div>

              </div>
            </div>

            <div className="pt-3 border-t border-indigo-900/60 text-center">
              <span className="text-[11px] text-indigo-200/80 font-semibold">
                Bila tensi tetap ≥ 140/90 mmHg setelah 1-3 bulan triple therapy dosis optimal → Menuju <strong>Langkah 4</strong>
              </span>
            </div>
          </div>

        </div>

        {/* ================================================================= */}
        {/* CONVERGING BOTTOM ARROWS (BOTH BRANCHES LEAD TO STEP 4) */}
        {/* ================================================================= */}
        <div className="flex flex-col items-center justify-center relative z-10 pt-2">
          <div className="text-[11px] font-black uppercase tracking-widest text-purple-300 bg-purple-950/80 px-4 py-1 rounded-full border border-purple-500/40 flex items-center gap-1.5 shadow-md">
            <AlertTriangle className="w-4 h-4 text-purple-400" />
            <span>Jika Tensi Tetap ≥ 140/90 mmHg Meski 3 Obat Dosis Penuh Termasuk Diuretik</span>
          </div>
          <div className="w-0.5 h-6 bg-gradient-to-b from-purple-400 to-purple-600 mt-1" />
          <div className="w-3 h-3 border-r-2 border-b-2 border-purple-400 rotate-45 -mt-2" />
        </div>

        {/* ================================================================= */}
        {/* LEVEL 4 CONVERGENCE: RESISTANT HYPERTENSION */}
        {/* ================================================================= */}
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-purple-950 via-[#1c0c3a] to-purple-950 border-2 border-purple-400/70 shadow-2xl space-y-3.5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-purple-800/60 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-xl bg-purple-500 text-white font-black text-sm flex items-center justify-center shadow-md">
                  04
                </span>
                <div>
                  <h4 className="text-base sm:text-lg font-black text-white">
                    LANGKAH 4: Tatalaksana Hipertensi Resisten &amp; Rujukan Spesialis
                  </h4>
                  <p className="text-xs text-purple-200/80 font-semibold">
                    Diagnosis Hipertensi Resisten (Studi EBM PATHWAY-2)
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-xl bg-purple-500/30 text-purple-200 text-xs font-black border border-purple-400/40 self-start sm:self-center">
                Pilihan Lini Keempat
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-purple-500/30 space-y-1.5">
                <span className="text-xs font-black text-purple-300 block">
                  1. Terapi Farmakologi Pilihan Utama (MRA):
                </span>
                <button
                  onClick={() => onDrugClick('Spironolactone')}
                  className="px-3 py-1.5 rounded-xl bg-purple-500/20 hover:bg-purple-500/30 text-white text-xs font-black border border-purple-400/50 flex items-center gap-1.5 cursor-pointer"
                >
                  <span>💊 Spironolactone 25 - 50 mg PO 1x/hari</span>
                  <ExternalLink className="w-3 h-3 text-purple-400" />
                </button>
                <p className="text-[10px] text-purple-200/70 leading-relaxed font-medium">
                  Studi PATHWAY-2 membuktikan Spironolakton adalah obat paling superior untuk menembus resistensi aldosteron.
                  <span className="text-amber-300 font-bold block mt-0.5">Syarat Keamanan Lab: K+ serum &lt; 4.5 mEq/L dan eGFR &ge; 45 mL/min.</span>
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-purple-500/30 space-y-1.5">
                <span className="text-xs font-black text-purple-300 block">
                  2. Alternatif Lini Keempat Lainnya:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    onClick={() => onDrugClick('Bisoprolol')}
                    className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Bisoprolol 5 - 10 mg</span>
                  </button>
                  <button
                    onClick={() => onDrugClick('Clonidine')}
                    className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Doxazosin / Clonidine</span>
                  </button>
                </div>
                <p className="text-[10px] text-purple-200/70 leading-relaxed font-medium">
                  Bisoprolol diindikasikan bila resting HR &gt; 80 bpm. Alternatif lain bila MRA intoleran/kontraindikasi hiperkalemia.
                </p>
              </div>
            </div>

            {/* Clinical Action & Referral */}
            <div className="p-3 rounded-2xl bg-purple-900/40 border border-purple-700/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2 text-purple-200 font-bold">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Skrining Hipertensi Sekunder (Stenosis Arteri Renalis, Hiperaldosteronisme Primer, OSA)</span>
              </div>
              <span className="text-purple-300 font-black bg-purple-950 px-3 py-1 rounded-xl border border-purple-500/40">
                🏥 Rujuk ke Sp.JP / Sp.PD-KGH
              </span>
            </div>
          </div>
        </div>

      </div>
    );
  }

  // Fallback for Diabetes Melitus Tipe 2 (DMT2 Flowchart Diagram)
  return (
    <div className="space-y-6 bg-gradient-to-b from-[#100903] via-[#1a0e05] to-[#0c0602] rounded-3xl p-4 sm:p-7 border-2 border-amber-500/30 shadow-2xl relative overflow-hidden text-white font-outfit">
      {/* Top Diagnosis */}
      <div className="max-w-xl mx-auto text-center space-y-1 relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40 text-[11px] font-black uppercase tracking-wider">
          <Sparkles className="w-3 h-3 text-amber-400" />
          <span>Kriteria Diagnostik PERKENI / ADA</span>
        </div>
        <div className="p-4 rounded-2xl bg-[#261507] border-2 border-amber-400/60 shadow-lg text-center space-y-1">
          <h4 className="text-base font-black text-white">
            Konfirmasi Diagnosis Diabetes Melitus Tipe 2
          </h4>
          <p className="text-xs text-amber-200/80">
            GDP ≥ 126 mg/dL ATAU GD2PP ≥ 200 mg/dL ATAU HbA1c ≥ 6.5% dengan konfirmasi lab terstandar
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center relative z-10 -my-2">
        <div className="w-0.5 h-7 bg-gradient-to-b from-amber-400 to-orange-500" />
        <div className="w-2.5 h-2.5 border-r-2 border-b-2 border-orange-400 rotate-45 -mt-1.5" />
      </div>

      {/* TNM & Lifestyle */}
      <div className="max-w-2xl mx-auto relative z-10">
        <div className="p-4 rounded-2xl bg-[#221004] border-2 border-amber-500/50 text-center space-y-1">
          <h4 className="text-sm font-black text-white">
            Terapi Nutrisi Medis (TNM) &amp; Latihan Jasmani Teratur (150 mnt/mgg)
          </h4>
          <p className="text-xs text-amber-200/80">
            Diberikan bersamaan dengan inisiasi Metformin sejak hari pertama terdiagnosis.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center relative z-10 -my-2">
        <div className="w-0.5 h-7 bg-gradient-to-b from-orange-400 to-amber-500" />
        <div className="w-2.5 h-2.5 border-r-2 border-b-2 border-amber-400 rotate-45 -mt-1.5" />
      </div>

      {/* Decision Split for DMT2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10 pt-1">
        {/* Left: ASCVD / CKD / HF */}
        <div className="p-5 rounded-3xl bg-[#1f1005] border-2 border-orange-400/50 space-y-3">
          <div className="flex items-center justify-between border-b border-amber-900/60 pb-2">
            <span className="text-xs font-black text-orange-300">JALUR 1: DENGAN ASCVD / GAGAL JANTUNG / CKD</span>
            <span className="text-[10px] font-bold bg-orange-950 px-2 py-0.5 rounded text-orange-200">Independen HbA1c</span>
          </div>
          <p className="text-xs text-amber-100/70">
            Terapi lini pertama WAJIB memprioritaskan agen dengan pembuktian proteksi organ kardio-renal:
          </p>
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
            <button
              onClick={() => onDrugClick('Empagliflozin')}
              className="px-2.5 py-1 rounded-lg bg-orange-500/20 text-orange-200 text-xs font-black border border-orange-400/40 flex items-center gap-1 cursor-pointer"
            >
              <span>💊 SGLT2-i (Empagliflozin / Dapagliflozin) + Metformin</span>
              <ExternalLink className="w-3 h-3 text-orange-400" />
            </button>
            <p className="text-[10px] text-slate-300">
              Menurunkan risiko kematian kardiovaskular, rawat inap gagal jantung, dan memperlambat ESRD.
            </p>
          </div>
        </div>

        {/* Right: Glycemic Stepped Care */}
        <div className="p-5 rounded-3xl bg-[#1b0d04] border-2 border-amber-400/50 space-y-3">
          <div className="flex items-center justify-between border-b border-amber-900/60 pb-2">
            <span className="text-xs font-black text-amber-300">JALUR 2: TANPA KOMORBID KARDIO-RENAL</span>
            <span className="text-[10px] font-bold bg-amber-950 px-2 py-0.5 rounded text-amber-200">Target HbA1c &lt; 7.0%</span>
          </div>
          <div className="space-y-2">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs">
              <span className="font-bold text-amber-300 block">Langkah 1: Monoterapi</span>
              <button
                onClick={() => onDrugClick('Metformin')}
                className="text-white font-black hover:underline cursor-pointer flex items-center gap-1 mt-0.5"
              >
                <span>💊 Metformin 500 - 1000 mg 2x/hari</span>
                <ExternalLink className="w-2.5 h-2.5 text-amber-400" />
              </button>
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs">
              <span className="font-bold text-amber-300 block">Langkah 2: Kombinasi Ganda (HbA1c ≥ 7.5%)</span>
              <span className="text-white font-black block mt-0.5">
                Metformin + SGLT2i / DPP-4i (Linagliptin) / Glimepiride
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs">
              <span className="font-bold text-amber-300 block">Langkah 3: Triple Oral / Insulin Basal Malam</span>
              <button
                onClick={() => onDrugClick('Insulin')}
                className="text-white font-black hover:underline cursor-pointer flex items-center gap-1 mt-0.5"
              >
                <span>💉 Insulin Glargine 10 Unit SC Malam</span>
                <ExternalLink className="w-2.5 h-2.5 text-amber-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
