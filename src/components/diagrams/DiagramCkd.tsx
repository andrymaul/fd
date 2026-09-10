import React from 'react';
import {
  Activity,
  HeartPulse,
  AlertTriangle,
  ArrowDown,
  ExternalLink,
  ShieldAlert,
  CheckCircle2,
  Sparkles,
  Zap,
  Layers,
  Pill,
  Droplets,
  ShieldCheck
} from 'lucide-react';
import { DiseaseFlowchartData } from '../../data/clinicalFlowchartData';

interface DiagramProps {
  currentDisease: DiseaseFlowchartData;
  onDrugClick: (drugName: string) => void;
  onTestRegimen: (drugList: string[]) => void;
}

export const DiagramCkd: React.FC<DiagramProps> = ({
  onDrugClick,
  onTestRegimen
}) => {
  return (
    <div className="space-y-6 bg-gradient-to-b from-[#120724] via-[#1c0c38] to-[#100520] rounded-3xl p-4 sm:p-7 border-2 border-purple-500/30 shadow-2xl relative overflow-hidden text-white font-outfit">
      {/* Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* LEVEL 1: MATRIKS HEATMAP RISIKO eGFR vs ALBUMINURIA (KDIGO) */}
      <div className="max-w-5xl mx-auto space-y-3 relative z-10">
        <div className="p-4 rounded-3xl bg-gradient-to-r from-[#210c42] via-[#2f135e] to-[#210c42] border-2 border-purple-400/60 shadow-xl space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-purple-500/30 pb-2">
            <div className="flex items-center gap-2">
              <Droplets className="w-5 h-5 text-purple-400" />
              <h4 className="text-base font-black text-white">
                Tahap 1: Evaluasi Matriks eGFR (CKD-EPI) &amp; Rasio Albumin-Kreatinin Urin (UACR)
              </h4>
            </div>
            <span className="px-3 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/40 text-xs font-black uppercase tracking-wider">
              Standar KDIGO 2024 / PERNEFRI
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
            <div className="p-3.5 rounded-2xl bg-black/40 border border-emerald-500/30 space-y-1">
              <span className="text-xs font-black text-emerald-300 uppercase">A1: Normal / Ringan</span>
              <p className="text-[11px] text-emerald-100/80 leading-snug">
                UACR &lt; 30 mg/g. Risiko kardiorenal rendah jika eGFR &ge; 60.
              </p>
              <span className="text-[10px] font-bold text-slate-400 block pt-1">
                Fokus: Kendali TD &lt; 120 mmHg &amp; Gaya Hidup.
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-black/40 border border-amber-500/30 space-y-1">
              <span className="text-xs font-black text-amber-300 uppercase">A2: Mikroalbuminuria</span>
              <p className="text-[11px] text-amber-100/80 leading-snug">
                UACR 30 – 300 mg/g. Kerusakan podosit ginjal awal.
              </p>
              <span className="text-[10px] font-bold text-amber-300 block pt-1">
                Indikasi Wajib: Inisiasi ACEi atau ARB &plus; SGLT2-i.
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-black/40 border border-rose-500/30 space-y-1">
              <span className="text-xs font-black text-rose-300 uppercase">A3: Makroalbuminuria</span>
              <p className="text-[11px] text-rose-100/80 leading-snug">
                UACR &gt; 300 mg/g. Risiko tinggi gagal ginjal terminal (ESRD).
              </p>
              <span className="text-[10px] font-bold text-rose-300 block pt-1">
                Indikasi: 4 Pilar Terapi Kardiorenal Maksimal.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* CONNECTING ARROW */}
      <div className="flex flex-col items-center justify-center relative z-10 -my-2">
        <div className="w-0.5 h-6 bg-gradient-to-b from-purple-400 to-indigo-500" />
        <div className="w-2.5 h-2.5 border-r-2 border-b-2 border-indigo-400 rotate-45 -mt-1.5" />
      </div>

      {/* LEVEL 2: EMPAT PILAR FARMAKOTERAPI RENAL KDIGO 2024 */}
      <div className="max-w-5xl mx-auto space-y-4 relative z-10">
        <div className="p-5 rounded-3xl bg-gradient-to-r from-[#1d0a3d] via-[#290e57] to-[#1d0a3d] border-2 border-indigo-500/60 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-indigo-700/60 pb-2">
            <span className="text-sm font-black text-indigo-300 uppercase tracking-wide flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-indigo-400" />
              The 4 Pillars of Kidney Protection (KDIGO 2024)
            </span>
            <span className="text-[10px] font-bold bg-indigo-950 text-indigo-200 px-2.5 py-0.5 rounded-full border border-indigo-500/40">
              Evidence Level A
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* PILAR 1: SGLT2 INHIBITOR */}
            <div className="p-4 rounded-2xl bg-black/40 border border-indigo-400/40 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-indigo-300">1. SGLT2 Inhibitor (DAPA / EMPA)</span>
                <span className="text-[10px] text-emerald-400 font-bold">Semua eGFR &ge; 20</span>
              </div>
              <p className="text-[11px] text-indigo-100/80 leading-relaxed">
                Menurunkan tekanan intraglomerulus, mereduksi progresivitas PGK 40%, dan menurunkan angka rawat inap gagal jantung.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <button
                  onClick={() => onDrugClick('Dapagliflozin')}
                  className="px-2.5 py-1 rounded-xl bg-indigo-500/20 text-indigo-200 text-xs font-black border border-indigo-400/40 flex items-center gap-1 hover:bg-indigo-500/30 transition-all cursor-pointer"
                >
                  <Pill className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Dapagliflozin 10 mg</span>
                  <ExternalLink className="w-2.5 h-2.5 text-indigo-400" />
                </button>
                <button
                  onClick={() => onDrugClick('Empagliflozin')}
                  className="px-2.5 py-1 rounded-xl bg-indigo-500/20 text-indigo-200 text-xs font-black border border-indigo-400/40 flex items-center gap-1 hover:bg-indigo-500/30 transition-all cursor-pointer"
                >
                  <Pill className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Empagliflozin 10 mg</span>
                  <ExternalLink className="w-2.5 h-2.5 text-indigo-400" />
                </button>
              </div>
            </div>

            {/* PILAR 2: ACEi / ARB */}
            <div className="p-4 rounded-2xl bg-black/40 border border-indigo-400/40 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-indigo-300">2. ACEi atau ARB Dosis Maksimal</span>
                <span className="text-[10px] text-emerald-400 font-bold">Bila UACR &ge; 30 mg/g</span>
              </div>
              <p className="text-[11px] text-indigo-100/80 leading-relaxed">
                Vasodilatasi arteriol eferen glomerulus, menurunkan proteinuria, dan melindungi sawar filtrasi podosit.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <button
                  onClick={() => onDrugClick('Candesartan')}
                  className="px-2.5 py-1 rounded-xl bg-indigo-500/20 text-indigo-200 text-xs font-black border border-indigo-400/40 flex items-center gap-1 hover:bg-indigo-500/30 transition-all cursor-pointer"
                >
                  <Pill className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Candesartan 8–32 mg</span>
                  <ExternalLink className="w-2.5 h-2.5 text-indigo-400" />
                </button>
                <button
                  onClick={() => onDrugClick('Lisinopril')}
                  className="px-2.5 py-1 rounded-xl bg-indigo-500/20 text-indigo-200 text-xs font-black border border-indigo-400/40 flex items-center gap-1 hover:bg-indigo-500/30 transition-all cursor-pointer"
                >
                  <Pill className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Lisinopril 10–20 mg</span>
                  <ExternalLink className="w-2.5 h-2.5 text-indigo-400" />
                </button>
              </div>
            </div>

            {/* PILAR 3: NON-STEROIDAL MRA (FINERENONE) */}
            <div className="p-4 rounded-2xl bg-black/40 border border-purple-400/40 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-purple-300">3. Non-Steroidal MRA: Finerenone</span>
                <span className="text-[10px] text-purple-300 font-bold">DM2 + Albuminuria Persisten</span>
              </div>
              <p className="text-[11px] text-purple-100/80 leading-relaxed">
                Anti-inflamasi &amp; anti-fibrosis interstitial ginjal tanpa efek samping hormonal steroid (FIDELIO-DKD).
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <button
                  onClick={() => onDrugClick('Finerenone')}
                  className="px-2.5 py-1 rounded-xl bg-purple-500/20 text-purple-200 text-xs font-black border border-purple-400/40 flex items-center gap-1 hover:bg-purple-500/30 transition-all cursor-pointer"
                >
                  <Pill className="w-3.5 h-3.5 text-purple-400" />
                  <span>Finerenone (Kerendia) 10 / 20 mg</span>
                  <ExternalLink className="w-2.5 h-2.5 text-purple-400" />
                </button>
              </div>
            </div>

            {/* PILAR 4: GLP-1 RECEPTOR AGONIST */}
            <div className="p-4 rounded-2xl bg-black/40 border border-purple-400/40 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-purple-300">4. GLP-1 RA (Semaglutide)</span>
                <span className="text-[10px] text-purple-300 font-bold">Trial FLOW 2024</span>
              </div>
              <p className="text-[11px] text-purple-100/80 leading-relaxed">
                Proteksi kardiometabolik superior, reduksi mortalitas kardiovaskular, dan perlambatan penurunan eGFR pada DM2.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <button
                  onClick={() => onDrugClick('Semaglutide')}
                  className="px-2.5 py-1 rounded-xl bg-purple-500/20 text-purple-200 text-xs font-black border border-purple-400/40 flex items-center gap-1 hover:bg-purple-500/30 transition-all cursor-pointer"
                >
                  <Pill className="w-3.5 h-3.5 text-purple-400" />
                  <span>Semaglutide SC (Ozempic) 0.5–1 mg</span>
                  <ExternalLink className="w-2.5 h-2.5 text-purple-400" />
                </button>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-indigo-900/60 flex items-center justify-between">
            <button
              onClick={() => onTestRegimen(['Dapagliflozin', 'Candesartan', 'Finerenone'])}
              className="text-xs font-bold text-indigo-300 hover:text-white underline cursor-pointer"
            >
              ➔ Uji Interaksi Regimen Kardiorenal (SGLT2-i + ARB + Finerenone)
            </button>
            <span className="text-[11px] text-amber-300 font-semibold">
              ⚠️ Monitor Kalium &amp; Kreatinin pasca 2–4 minggu inisiasi
            </span>
          </div>
        </div>
      </div>

      {/* CONNECTING ARROW */}
      <div className="flex flex-col items-center justify-center relative z-10 -my-2">
        <div className="w-0.5 h-6 bg-gradient-to-b from-indigo-400 to-rose-500" />
        <div className="w-2.5 h-2.5 border-r-2 border-b-2 border-rose-400 rotate-45 -mt-1.5" />
      </div>

      {/* LEVEL 3: KOMPLIKASI METABOLIK (ANEMIA, ASIDOSIS, & MBD) */}
      <div className="max-w-5xl mx-auto p-4 rounded-3xl bg-gradient-to-r from-[#2d091e] via-[#400e2b] to-[#2d091e] border-2 border-rose-500/60 shadow-xl space-y-3 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-rose-500/30 pb-2">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-rose-400" />
            <h4 className="text-base font-black text-white">
              Manajemen Komplikasi Metabolik PGK Lanjut (G3–G5)
            </h4>
          </div>
          <span className="px-3 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-400/40 text-xs font-black uppercase tracking-wider">
            Target Homeostasis
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
          <div className="p-3 rounded-2xl bg-black/40 border border-rose-500/30 text-xs space-y-1">
            <span className="font-bold text-rose-300 block">1. Anemia Renal (Hb &lt; 10 g/dL):</span>
            <p className="text-rose-100/80 leading-relaxed text-[11px]">
              Inisiasi <strong>Erythropoietin (Epoetin Alfa 2000–4000 IU SC)</strong> &plus; Terapi Besi IV (Venofer). Target Hb aman: <strong>10.0–11.5 g/dL</strong> (hindari &gt; 12 g/dL).
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-black/40 border border-rose-500/30 text-xs space-y-1">
            <span className="font-bold text-rose-300 block">2. Asidosis Metabolik (HCO3 &lt; 22):</span>
            <p className="text-rose-100/80 leading-relaxed text-[11px]">
              Koreksi dengan <strong>Natrium Bikarbonat oral 500–1000 mg 2–3x/hari</strong>. Memperlambat laju penurunan fungsi ginjal dan atrofi otot uremik.
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-black/40 border border-rose-500/30 text-xs space-y-1">
            <span className="font-bold text-rose-300 block">3. Hiperfosfatemia (MBD):</span>
            <p className="text-rose-100/80 leading-relaxed text-[11px]">
              Kendalikan fosfat dengan <strong>Kalsium Karbonat 500 mg dikunyah BERSAMA MAKANAN</strong> untuk mengikat fosfat makanan di saluran cerna.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
