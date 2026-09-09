import React from 'react';
import {
  HeartPulse,
  Stethoscope,
  ShieldAlert,
  ArrowDown,
  ExternalLink,
  Zap,
  Sparkles,
  Layers,
  Scale,
  Activity,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import { DiseaseFlowchartData } from '../../data/clinicalFlowchartData';

interface DiagramProps {
  currentDisease: DiseaseFlowchartData;
  onDrugClick: (drugName: string) => void;
  onTestRegimen: (drugList: string[]) => void;
}

export const DiagramHfref: React.FC<DiagramProps> = ({
  onDrugClick,
  onTestRegimen
}) => {
  return (
    <div className="space-y-6 bg-gradient-to-b from-[#021814] via-[#04261f] to-[#011410] rounded-3xl p-4 sm:p-7 border-2 border-emerald-500/30 shadow-2xl relative overflow-hidden text-white font-outfit">
      {/* Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* ================================================================= */}
      {/* LEVEL 1: DIAGNOSIS HFrEF & EVALUASI STATUS KONGESTI               */}
      {/* ================================================================= */}
      <div className="max-w-4xl mx-auto space-y-3 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Konfirmasi Diagnostik */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-[#03231d] via-[#053229] to-[#03231d] border-2 border-teal-400/60 shadow-xl shadow-teal-950/40 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/40 text-[11px] font-black uppercase tracking-wider">
              <Sparkles className="w-3 h-3 text-teal-400" />
              <span>Tahap 1: Kriteria Diagnostik HFrEF</span>
            </div>
            <h4 className="text-base font-black text-white flex items-center gap-2">
              <Stethoscope className="w-5 h-5 text-teal-400 shrink-0" />
              <span>Konfirmasi Ekhokardiografi &amp; Biomarker</span>
            </h4>
            <div className="space-y-1 text-xs text-teal-100/80 font-medium leading-relaxed">
              <p>• <strong>Gejala &amp; Tanda Khas:</strong> Sesak napas saat aktivitas (dyspnea on exertion), ortopnea, PND, kelelahan, dan edema tungkai.</p>
              <p>• <strong>LVEF &le; 40%:</strong> Fraksi ejeksi ventrikel kiri menurun terbukti via Echocardiography.</p>
              <p>• <strong>Biomarker Jantung:</strong> NT-proBNP &ge; 125 pg/mL (rawat jalan non-akut) atau BNP &ge; 35 pg/mL.</p>
            </div>
          </div>

          {/* Evaluasi Kongesti (Basah vs Kering) */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-[#032a24] via-[#063830] to-[#032a24] border-2 border-emerald-400/60 shadow-xl shadow-emerald-950/40 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 text-[11px] font-black uppercase tracking-wider">
              <Activity className="w-3 h-3 text-emerald-400" />
              <span>Status Cairan Hemodinamik</span>
            </div>
            <h4 className="text-base font-black text-white flex items-center gap-2">
              <Scale className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Penilaian Status Volume (Wet vs Dry)</span>
            </h4>
            <div className="space-y-1 text-xs text-emerald-100/80 leading-snug">
              <p>• <strong>Kongesti Positif (Wet):</strong> JVP meningkat, ronki basah halus paru, hepatomegali, asites, edema perifer pitting.</p>
              <p className="text-amber-200">• <strong>Tindakan:</strong> Inisiasi <strong>Furosemid</strong> titrasi hingga mencapai status euvolemik (kering), lalu segera pasang 4 Pilar Emas!</p>
            </div>
          </div>
        </div>
      </div>

      {/* CONNECTING ARROW 1 */}
      <div className="flex flex-col items-center justify-center relative z-10 -my-2">
        <div className="w-0.5 h-7 bg-gradient-to-b from-teal-400 to-emerald-500" />
        <div className="w-2.5 h-2.5 border-r-2 border-b-2 border-emerald-400 rotate-45 -mt-1.5" />
      </div>

      {/* ================================================================= */}
      {/* LEVEL 2: 4 PILAR BAKU EMAS (THE FANTASTIC FOUR)                   */}
      {/* ================================================================= */}
      <div className="max-w-5xl mx-auto relative z-10 space-y-3">
        <div className="p-5 rounded-3xl bg-gradient-to-r from-[#04241d] via-[#083b30] to-[#04241d] border-2 border-emerald-400/70 shadow-2xl space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-emerald-500/30 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center font-black text-base shadow-lg">
                4P
              </div>
              <div>
                <h3 className="text-lg font-black text-white flex items-center gap-2">
                  <span>Tahap 2: Inisiasi Simultan 4 Pilar Emas ("The Fantastic Four")</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-400 text-slate-950 text-[10px] font-black uppercase">Kelas I, EBM A</span>
                </h3>
                <p className="text-xs text-emerald-200/80 font-medium">
                  Harus diinisiasi secepatnya dalam 4-6 minggu pertama untuk memangkas mortalitas hingga 73%
                </p>
              </div>
            </div>

            <button
              onClick={() => onTestRegimen(['Sacubitril/Valsartan', 'Bisoprolol', 'Spironolactone', 'Dapagliflozin'])}
              className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-black text-xs shadow-md flex items-center gap-1.5 cursor-pointer self-start sm:self-auto"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Uji Interaksi 4 Pilar Lengkap</span>
            </button>
          </div>

          {/* 4 Pilar Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Pilar 1: ARNI / ACEi */}
            <div className="p-3.5 rounded-2xl bg-black/40 border border-emerald-500/40 hover:border-emerald-400 transition-all space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black bg-emerald-500/30 text-emerald-300 px-2 py-0.5 rounded">
                  PILAR 1: ARNI / ACEi
                </span>
                <span className="text-[9px] font-bold text-emerald-400">Proteksi Jantung</span>
              </div>
              <h5 className="text-sm font-black text-white">ARNI (Sacubitril/Valsartan)</h5>
              <p className="text-[11px] text-emerald-100/70">
                Pilihan utama pengganti ACEi. Menghambat neprilisin &amp; blokade AT1.
              </p>
              <div className="space-y-1 pt-1">
                <button
                  onClick={() => onDrugClick('Sacubitril/Valsartan')}
                  className="w-full text-left px-2.5 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-xs font-bold text-emerald-200 border border-emerald-500/30 flex items-center justify-between cursor-pointer"
                >
                  <span>Sacubitril/Valsartan 49/51 mg</span>
                  <ExternalLink className="w-3 h-3 text-emerald-400" />
                </button>
                <button
                  onClick={() => onDrugClick('Ramipril')}
                  className="w-full text-left px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-[11px] text-slate-300 flex items-center justify-between cursor-pointer"
                >
                  <span>Alt: Ramipril 2.5-5 mg (ACEi)</span>
                  <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
                </button>
              </div>
            </div>

            {/* Pilar 2: Beta-Blocker */}
            <div className="p-3.5 rounded-2xl bg-black/40 border border-teal-500/40 hover:border-teal-400 transition-all space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black bg-teal-500/30 text-teal-300 px-2 py-0.5 rounded">
                  PILAR 2: BETA-BLOCKER
                </span>
                <span className="text-[9px] font-bold text-teal-400">Euvolemik Only</span>
              </div>
              <h5 className="text-sm font-black text-white">Beta-Blocker Spesifik EBM</h5>
              <p className="text-[11px] text-teal-100/70">
                Hanya 3 BB terbukti EBM: Bisoprolol, Carvedilol, Metoprolol Succinate.
              </p>
              <div className="space-y-1 pt-1">
                <button
                  onClick={() => onDrugClick('Bisoprolol')}
                  className="w-full text-left px-2.5 py-1.5 rounded-lg bg-teal-500/10 hover:bg-teal-500/20 text-xs font-bold text-teal-200 border border-teal-500/30 flex items-center justify-between cursor-pointer"
                >
                  <span>Bisoprolol 1.25 - 10 mg</span>
                  <ExternalLink className="w-3 h-3 text-teal-400" />
                </button>
                <button
                  onClick={() => onDrugClick('Carvedilol')}
                  className="w-full text-left px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-[11px] text-slate-300 flex items-center justify-between cursor-pointer"
                >
                  <span>Carvedilol 3.125 - 25 mg</span>
                  <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
                </button>
              </div>
            </div>

            {/* Pilar 3: MRA */}
            <div className="p-3.5 rounded-2xl bg-black/40 border border-cyan-500/40 hover:border-cyan-400 transition-all space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black bg-cyan-500/30 text-cyan-300 px-2 py-0.5 rounded">
                  PILAR 3: MRA
                </span>
                <span className="text-[9px] font-bold text-cyan-400">Cek K+ &le; 5.0</span>
              </div>
              <h5 className="text-sm font-black text-white">Antagonis Aldosteron</h5>
              <p className="text-[11px] text-cyan-100/70">
                Mencegah fibrosis miokardium dan remodeling ventrikel progresif.
              </p>
              <div className="space-y-1 pt-1">
                <button
                  onClick={() => onDrugClick('Spironolactone')}
                  className="w-full text-left px-2.5 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-xs font-bold text-cyan-200 border border-cyan-500/30 flex items-center justify-between cursor-pointer"
                >
                  <span>Spironolakton 25 - 50 mg</span>
                  <ExternalLink className="w-3 h-3 text-cyan-400" />
                </button>
                <button
                  onClick={() => onDrugClick('Eplerenone')}
                  className="w-full text-left px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-[11px] text-slate-300 flex items-center justify-between cursor-pointer"
                >
                  <span>Alt: Eplerenon 25 - 50 mg</span>
                  <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
                </button>
              </div>
            </div>

            {/* Pilar 4: SGLT2-i */}
            <div className="p-3.5 rounded-2xl bg-black/40 border border-emerald-400/40 hover:border-emerald-300 transition-all space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black bg-emerald-500/30 text-emerald-300 px-2 py-0.5 rounded">
                  PILAR 4: SGLT2-i
                </span>
                <span className="text-[9px] font-bold text-emerald-400">Non-Titrasi</span>
              </div>
              <h5 className="text-sm font-black text-white">Dapagliflozin / Empagliflozin</h5>
              <p className="text-[11px] text-emerald-100/70">
                Dosis tetap sejak hari pertama, efektif pada pasien DM maupun non-DM!
              </p>
              <div className="space-y-1 pt-1">
                <button
                  onClick={() => onDrugClick('Dapagliflozin')}
                  className="w-full text-left px-2.5 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-xs font-bold text-emerald-200 border border-emerald-500/30 flex items-center justify-between cursor-pointer"
                >
                  <span>Dapagliflozin 10 mg 1x/hari</span>
                  <ExternalLink className="w-3 h-3 text-emerald-400" />
                </button>
                <button
                  onClick={() => onDrugClick('Empagliflozin')}
                  className="w-full text-left px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-[11px] text-slate-300 flex items-center justify-between cursor-pointer"
                >
                  <span>Empagliflozin 10 mg 1x/hari</span>
                  <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
                </button>
              </div>
            </div>
          </div>

          {/* Diuretik Loop Alert */}
          <div className="p-3 rounded-2xl bg-amber-950/40 border border-amber-500/40 flex items-center justify-between gap-3 flex-wrap">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="text-xs text-amber-100">
                <strong>Diuretik Loop (Furosemid 20-40 mg):</strong> Hanya untuk eliminasi kongesti/retensi cairan, bukan untuk menurunkan mortalitas. Titrasi turun ke dosis terendah bila pasien sudah kering.
              </span>
            </div>
            <button
              onClick={() => onDrugClick('Furosemide')}
              className="px-3 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-bold border border-amber-500/40 cursor-pointer"
            >
              Cek Furosemid
            </button>
          </div>
        </div>
      </div>

      {/* CONNECTING ARROW 2 */}
      <div className="flex flex-col items-center justify-center relative z-10 -my-2">
        <div className="w-0.5 h-7 bg-gradient-to-b from-emerald-500 to-teal-500" />
        <div className="w-2.5 h-2.5 border-r-2 border-b-2 border-teal-400 rotate-45 -mt-1.5" />
      </div>

      {/* ================================================================= */}
      {/* LEVEL 3: TITRASI KE DOSIS TARGET & MONITORING LAB GINJAL/KALIUM   */}
      {/* ================================================================= */}
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="p-4 rounded-2xl bg-gradient-to-r from-[#07241e] via-[#0d362d] to-[#07241e] border-2 border-teal-500/60 shadow-xl space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-black text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-teal-400" />
              <span>Tahap 3: Titrasi Menuju Dosis Target Toleransi Maksimal (Tiap 2-4 Minggu)</span>
            </h4>
            <span className="text-[10px] font-black bg-teal-400 text-slate-950 px-2 py-0.5 rounded">
              Up-Titration
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-teal-100/90">
            <div className="p-2.5 rounded-xl bg-black/40 border border-teal-500/30">
              <strong className="text-teal-300 block">🎯 Target ARNI:</strong>
              <span>Sacubitril/Valsartan 97/103 mg 2x/hari</span>
            </div>
            <div className="p-2.5 rounded-xl bg-black/40 border border-teal-500/30">
              <strong className="text-teal-300 block">🎯 Target Beta-Blocker:</strong>
              <span>Bisoprolol 10 mg 1x / Carvedilol 25 mg 2x</span>
            </div>
            <div className="p-2.5 rounded-xl bg-black/40 border border-teal-500/30">
              <strong className="text-teal-300 block">🎯 Target MRA:</strong>
              <span>Spironolakton 50 mg 1x/hari</span>
            </div>
          </div>
          <p className="text-[11px] text-teal-200/80">
            Pemantauan laboratorium: Cek Kalium serum dan Kreatinin/eGFR 1-2 minggu pasca inisiasi atau kenaikan dosis. Peningkatan kreatinin hingga &le; 50% atau eGFR turun &le; 10% masih dapat ditoleransi (efek hemodinamik).
          </p>
        </div>
      </div>

      {/* CONNECTING ARROW 3 */}
      <div className="flex flex-col items-center justify-center relative z-10 -my-2">
        <div className="w-0.5 h-7 bg-gradient-to-b from-teal-500 to-indigo-500" />
        <div className="w-2.5 h-2.5 border-r-2 border-b-2 border-indigo-400 rotate-45 -mt-1.5" />
      </div>

      {/* ================================================================= */}
      {/* LEVEL 4: TERAPI LANJUTAN & FENOTIPE KHUSUS                         */}
      {/* ================================================================= */}
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="p-4 rounded-2xl bg-gradient-to-r from-[#0a192f] via-[#102a4e] to-[#0a192f] border-2 border-indigo-500/60 shadow-xl space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-black text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-indigo-400" />
              <span>Tahap 4: Terapi Tambahan untuk Pasien dengan Gejala Menetap (NYHA II-IV)</span>
            </h4>
            <span className="text-[10px] font-black bg-indigo-400 text-slate-950 px-2 py-0.5 rounded">
              Advanced HFrEF
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Ivabradine */}
            <div className="p-3 rounded-xl bg-black/40 border border-indigo-500/30 space-y-1.5">
              <span className="text-[10px] font-black text-indigo-300 uppercase">Sinus Rhythm HR &ge; 70 bpm</span>
              <h6 className="text-xs font-black text-white">Ivabradin 5 - 7.5 mg 2x/hari</h6>
              <p className="text-[10px] text-indigo-100/70">
                Menghambat kanal If nodus SA untuk menurunkan laju nadi tanpa efek inotropik negatif.
              </p>
              <button
                onClick={() => onDrugClick('Ivabradine')}
                className="text-[10px] text-indigo-300 hover:text-white font-bold underline cursor-pointer"
              >
                Monografi Ivabradin &rarr;
              </button>
            </div>

            {/* Vericiguat */}
            <div className="p-3 rounded-xl bg-black/40 border border-indigo-500/30 space-y-1.5">
              <span className="text-[10px] font-black text-indigo-300 uppercase">Rawat Inap Dekompensasi</span>
              <h6 className="text-xs font-black text-white">Vericiguat 2.5 - 10 mg 1x/hari</h6>
              <p className="text-[10px] text-indigo-100/70">
                Stimulator langsung sGC oral, memperbaiki sensitivitas NO intraseluler miokardial.
              </p>
              <button
                onClick={() => onDrugClick('Vericiguat')}
                className="text-[10px] text-indigo-300 hover:text-white font-bold underline cursor-pointer"
              >
                Monografi Vericiguat &rarr;
              </button>
            </div>

            {/* Device Therapy */}
            <div className="p-3 rounded-xl bg-black/40 border border-indigo-500/30 space-y-1.5">
              <span className="text-[10px] font-black text-indigo-300 uppercase">Disinkroni / Aritmia</span>
              <h6 className="text-xs font-black text-white">CRT-D / ICD (Implantable Device)</h6>
              <p className="text-[10px] text-indigo-100/70">
                Indikasi LVEF &le; 35%, QRS &ge; 130 ms pola LBBB, profilaksis henti jantung mendadak (SCD).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
