import React from 'react';
import {
  HeartPulse,
  Activity,
  Zap,
  Target,
  ShieldAlert,
  ArrowDown,
  ExternalLink,
  Sparkles,
  Layers,
  AlertTriangle,
  Flame,
  CheckCircle2,
  Filter
} from 'lucide-react';
import { DiseaseFlowchartData } from '../../data/clinicalFlowchartData';

interface DiagramProps {
  currentDisease: DiseaseFlowchartData;
  onDrugClick: (drugName: string) => void;
  onTestRegimen: (drugList: string[]) => void;
}

export const DiagramDyslipidemia: React.FC<DiagramProps> = ({
  onDrugClick,
  onTestRegimen
}) => {
  return (
    <div className="space-y-6 bg-gradient-to-b from-[#0e041d] via-[#1a0836] to-[#0a0214] rounded-3xl p-4 sm:p-7 border-2 border-purple-500/30 shadow-2xl relative overflow-hidden text-white font-outfit">
      {/* Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* ================================================================= */}
      {/* LEVEL 1: STRATIFIKASI RISIKO KARDIOVASKULAR & TARGET LDL          */}
      {/* ================================================================= */}
      <div className="max-w-5xl mx-auto space-y-3 relative z-10">
        <div className="p-4 rounded-3xl bg-gradient-to-r from-[#1c093a] via-[#2c0e5a] to-[#1c093a] border-2 border-purple-400/60 shadow-xl space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-purple-500/30 pb-2">
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-purple-400" />
              <h4 className="text-base font-black text-white">
                Tahap 1: Stratifikasi Risiko Kardiovaskular Total &amp; Sasaran Target Agresif LDL-C
              </h4>
            </div>
            <span className="px-3 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/40 text-xs font-black uppercase tracking-wider">
              PERKI 2023 / ESC 2019
            </span>
          </div>

          <p className="text-xs text-purple-100/80 leading-relaxed">
            Paradigma EBM mutakhir: <strong>"The Lower, The Better"</strong> dan <strong>"The Earlier, The Better"</strong>. Makin tinggi risiko kardiovaskular pasien, makin rendah dan agresif target kadar kolesterol LDL yang harus dicapai.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 pt-1">
            <div className="p-3 rounded-2xl bg-rose-950/60 border border-rose-500/60 space-y-1">
              <span className="text-[10px] font-black bg-rose-500 text-white px-2 py-0.5 rounded block w-max">
                RISIKO EKSTRIM
              </span>
              <strong className="text-xs text-rose-200 block">ASCVD Berulang &lt; 2 Thn</strong>
              <div className="text-sm font-black text-white bg-black/40 p-1.5 rounded-lg border border-rose-500/40 text-center">
                Target LDL &lt; 40 mg/dL
              </div>
              <span className="text-[10px] text-rose-200/80 block">Kombinasi Statin + Ezetimibe sejak awal</span>
            </div>

            <div className="p-3 rounded-2xl bg-red-950/60 border border-red-500/60 space-y-1">
              <span className="text-[10px] font-black bg-red-600 text-white px-2 py-0.5 rounded block w-max">
                RISIKO SANGAT TINGGI
              </span>
              <strong className="text-xs text-red-200 block">Riwayat ACS, Stroke, DM+TOD</strong>
              <div className="text-sm font-black text-white bg-black/40 p-1.5 rounded-lg border border-red-500/40 text-center">
                Target LDL &lt; 55 mg/dL
              </div>
              <span className="text-[10px] text-red-200/80 block">&amp; Reduksi &ge; 50% dari baseline</span>
            </div>

            <div className="p-3 rounded-2xl bg-amber-950/60 border border-amber-500/60 space-y-1">
              <span className="text-[10px] font-black bg-amber-500 text-slate-950 px-2 py-0.5 rounded block w-max">
                RISIKO TINGGI
              </span>
              <strong className="text-xs text-amber-200 block">DM &gt; 10 Thn / CKD Stadium 3</strong>
              <div className="text-sm font-black text-white bg-black/40 p-1.5 rounded-lg border border-amber-500/40 text-center">
                Target LDL &lt; 70 mg/dL
              </div>
              <span className="text-[10px] text-amber-200/80 block">&amp; Reduksi &ge; 50% dari baseline</span>
            </div>

            <div className="p-3 rounded-2xl bg-yellow-950/60 border border-yellow-500/60 space-y-1">
              <span className="text-[10px] font-black bg-yellow-500 text-slate-950 px-2 py-0.5 rounded block w-max">
                RISIKO SEDANG
              </span>
              <strong className="text-xs text-yellow-200 block">DM Muda Tanpa Faktor Risiko Lain</strong>
              <div className="text-sm font-black text-white bg-black/40 p-1.5 rounded-lg border border-yellow-500/40 text-center">
                Target LDL &lt; 100 mg/dL
              </div>
              <span className="text-[10px] text-yellow-200/80 block">Gaya hidup + Statin sedang</span>
            </div>
          </div>
        </div>
      </div>

      {/* CONNECTING ARROW 1 */}
      <div className="flex flex-col items-center justify-center relative z-10 -my-2">
        <div className="w-0.5 h-7 bg-gradient-to-b from-purple-400 to-indigo-500" />
        <div className="w-2.5 h-2.5 border-r-2 border-b-2 border-indigo-400 rotate-45 -mt-1.5" />
      </div>

      {/* ================================================================= */}
      {/* LEVEL 2: LANGKAH 1 - INISIASI STATIN INTENSITAS TINGGI            */}
      {/* ================================================================= */}
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="p-5 rounded-3xl bg-gradient-to-r from-[#170830] via-[#240d4a] to-[#170830] border-2 border-indigo-500/70 shadow-2xl space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-indigo-500/30 pb-2">
            <div>
              <h4 className="text-base font-black text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-400" />
                <span>Tahap 2: Inisiasi Statin Toleransi Maksimal (High-Intensity Statin)</span>
              </h4>
              <p className="text-xs text-indigo-200/80">
                Pondasi mutlak pencegahan sekunder dan primer risiko kardiovaskular tinggi
              </p>
            </div>
            <button
              onClick={() => onTestRegimen(['Atorvastatin', 'Ezetimibe'])}
              className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black text-xs shadow-md flex items-center gap-1.5 cursor-pointer self-start sm:self-auto"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Uji Kombinasi Statin + Ezetimibe</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-2xl bg-black/40 border border-indigo-400/40 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-indigo-300 uppercase">PILIHAN 1: ATORVASTATIN</span>
                <span className="text-[10px] font-bold text-emerald-400">Turunkan LDL &ge; 50%</span>
              </div>
              <h5 className="text-sm font-black text-white">Atorvastatin 40 - 80 mg 1x/hari</h5>
              <p className="text-xs text-indigo-100/70 leading-relaxed">
                Aman pada gangguan ginjal (tidak memerlukan penyesuaian dosis eGFR). Efek pleiotropik menstabilkan plak ateroma.
              </p>
              <button
                onClick={() => onDrugClick('Atorvastatin')}
                className="px-3 py-1 rounded-lg bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-200 text-xs font-bold border border-indigo-500/40 flex items-center gap-1 cursor-pointer"
              >
                <span>Cek Atorvastatin</span>
                <ExternalLink className="w-3 h-3 text-indigo-400" />
              </button>
            </div>

            <div className="p-3.5 rounded-2xl bg-black/40 border border-indigo-400/40 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-indigo-300 uppercase">PILIHAN 2: ROSUVASTATIN</span>
                <span className="text-[10px] font-bold text-emerald-400">Potensi Kuat (55-60%)</span>
              </div>
              <h5 className="text-sm font-black text-white">Rosuvastatin 20 - 40 mg 1x/hari</h5>
              <p className="text-xs text-indigo-100/70 leading-relaxed">
                Statin hidrofilik dengan penetrasi minimal ke sel otot rangka (mengurangi risiko mialgia dibanding statin lipofilik).
              </p>
              <button
                onClick={() => onDrugClick('Rosuvastatin')}
                className="px-3 py-1 rounded-lg bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-200 text-xs font-bold border border-indigo-500/40 flex items-center gap-1 cursor-pointer"
              >
                <span>Cek Rosuvastatin</span>
                <ExternalLink className="w-3 h-3 text-indigo-400" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CONNECTING ARROW 2 */}
      <div className="flex flex-col items-center justify-center relative z-10 -my-2">
        <span className="text-[10px] font-bold text-purple-300 bg-purple-950 px-2 py-0.5 rounded border border-purple-700">
          Evaluasi Profil Lipid dalam 4 - 12 Minggu
        </span>
        <div className="w-0.5 h-7 bg-gradient-to-b from-indigo-500 to-violet-500" />
        <div className="w-2.5 h-2.5 border-r-2 border-b-2 border-violet-400 rotate-45 -mt-1.5" />
      </div>

      {/* ================================================================= */}
      {/* LEVEL 3: LANGKAH 2 - ADD-ON EZETIMIBE 10 MG                       */}
      {/* ================================================================= */}
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="p-5 rounded-3xl bg-gradient-to-r from-[#190933] via-[#260e4c] to-[#190933] border-2 border-violet-500/70 shadow-xl space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-base font-black text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-violet-400" />
              <span>Tahap 3: Eskalasi Kombinasi Lini 2: Tambahkan Ezetimibe 10 mg</span>
            </h4>
            <span className="text-[10px] font-black bg-violet-500 text-white px-2 py-0.5 rounded">
              Dual Pathway Blockade
            </span>
          </div>

          <div className="p-3.5 rounded-2xl bg-black/40 border border-violet-500/40 space-y-2">
            <p className="text-xs text-violet-100/90 leading-relaxed">
              Jika target LDL-C belum tercapai dengan Statin dosis maksimal toleransi, <strong>JANGAN mengganti statin</strong> melainkan <strong>TAMBAHKAN Ezetimibe 10 mg</strong>. Kombinasi ini memberikan tambahan reduksi LDL 15-20% tanpa memicu toksisitas otot.
            </p>
            <div className="flex items-center gap-2 flex-wrap pt-1">
              <button
                onClick={() => onDrugClick('Ezetimibe')}
                className="px-3 py-1.5 rounded-lg bg-violet-500/20 hover:bg-violet-500/30 text-white text-xs font-black border border-violet-400/50 flex items-center gap-1.5 cursor-pointer"
              >
                <span>💊 Ezetimibe 10 mg 1x/hari</span>
                <ExternalLink className="w-3 h-3 text-violet-400" />
              </button>
              <span className="text-xs text-violet-300">
                (Atau sediaan kombinasi tetap Single-Pill SPC Atorvastatin/Ezetimibe)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* CONNECTING ARROW 3 */}
      <div className="flex flex-col items-center justify-center relative z-10 -my-2">
        <span className="text-[10px] font-bold text-violet-300 bg-violet-950 px-2 py-0.5 rounded border border-violet-700">
          Jika LDL Tetap &ge; 55 mg/dL pada Pasien Risiko Sangat Tinggi / Ekstrim
        </span>
        <div className="w-0.5 h-7 bg-gradient-to-b from-violet-500 to-rose-500" />
        <div className="w-2.5 h-2.5 border-r-2 border-b-2 border-rose-400 rotate-45 -mt-1.5" />
      </div>

      {/* ================================================================= */}
      {/* LEVEL 4: LANGKAH 3 - INHIBITOR PCSK9 (EVOLOCUMAB / ALIROCUMAB)    */}
      {/* ================================================================= */}
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="p-5 rounded-3xl bg-gradient-to-r from-[#210926] via-[#330f3a] to-[#210926] border-2 border-pink-500/70 shadow-xl space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-base font-black text-white flex items-center gap-2">
              <Activity className="w-5 h-5 text-pink-400" />
              <span>Tahap 4: Terapi Biologis Lanjutan: Penghambat PCSK9 Subkutan</span>
            </h4>
            <span className="text-[10px] font-black bg-pink-600 text-white px-2 py-0.5 rounded">
              Maximal LDL Clearance
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
            <div className="p-3.5 rounded-2xl bg-black/40 border border-pink-500/40 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-pink-300">EVOLOCUMAB (REPATHA)</span>
                <span className="text-[10px] font-bold text-emerald-400">Reduksi Tambahan 60%</span>
              </div>
              <h5 className="text-sm font-black text-white">140 mg SC tiap 2 minggu / 420 mg bulanan</h5>
              <p className="text-[11px] text-pink-100/70">
                Antibodi monoklonal yang melipatgandakan daur ulang reseptor LDL hepatosit. Terbukti RCT FOURIER memangkas kejadian infark dan stroke berulang.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-black/40 border border-pink-500/40 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-pink-300">ALIROCUMAB (PRALUENT)</span>
                <span className="text-[10px] font-bold text-emerald-400">ODYSSEY Outcomes</span>
              </div>
              <h5 className="text-sm font-black text-white">75 - 150 mg SC tiap 2 minggu</h5>
              <p className="text-[11px] text-pink-100/70">
                Pilihan utama untuk hiperkolesterolemia familial heterozigot atau pasien pasca sindrom koroner akut dengan kadar LDL refrakter.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================================================================= */}
      {/* LEVEL 5: CABANG KHUSUS HIPERTRIGLISERIDEMIA BERAT                 */}
      {/* ================================================================= */}
      <div className="max-w-5xl mx-auto relative z-10 pt-2">
        <div className="p-4 rounded-3xl bg-[#261608] border-2 border-amber-500/70 shadow-lg space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
              <h4 className="text-sm font-black text-white">
                Cabang Fenotipe Khusus: Hipertrigliseridemia Berat (Trigliserida &ge; 500 mg/dL)
              </h4>
            </div>
            <span className="text-[10px] font-black bg-amber-500 text-slate-950 px-2 py-0.5 rounded">
              Cegah Pankreatitis Akut
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div className="space-y-1.5">
              <p className="text-amber-100/90 leading-relaxed">
                Bila kadar Trigliserida &ge; 500 mg/dL, target primer berubah: <strong>Cegah inflamasi nekrosis pankreatitis akut</strong> sebelum mengejar target LDL-C. Inisiasi <strong>Fenofibrat 100-200 mg/hari</strong> dan diet sangat rendah lemak.
              </p>
              <button
                onClick={() => onDrugClick('Fenofibrate')}
                className="px-2.5 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-bold border border-amber-500/40 cursor-pointer"
              >
                Cek Fenofibrat &rarr;
              </button>
            </div>

            <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-500/60 text-rose-100 space-y-1">
              <strong className="text-rose-300 block font-bold">⚠️ BLACK BOX INTERACTION WARNING:</strong>
              <p className="text-[11px] leading-snug">
                <strong>DILARANG KERAS MENGGABUNGKAN GEMFIBROZIL DENGAN STATIN!</strong> Gemfibrozil menghambat glukuronidasi statin dan melipatgandakan risiko <strong>rabdomiolisis fatal</strong> hingga 500%. Gunakan <strong>Fenofibrat</strong> bila kombinasi statin + fibrat mutlak diperlukan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
