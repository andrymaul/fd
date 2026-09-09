import React from 'react';
import {
  HeartPulse,
  Activity,
  Zap,
  Clock,
  ShieldAlert,
  ArrowDown,
  ExternalLink,
  Sparkles,
  Layers,
  AlertTriangle,
  Flame,
  Pill,
  CheckCircle2
} from 'lucide-react';
import { DiseaseFlowchartData } from '../../data/clinicalFlowchartData';

interface DiagramProps {
  currentDisease: DiseaseFlowchartData;
  onDrugClick: (drugName: string) => void;
  onTestRegimen: (drugList: string[]) => void;
}

export const DiagramAcs: React.FC<DiagramProps> = ({
  onDrugClick,
  onTestRegimen
}) => {
  return (
    <div className="space-y-6 bg-gradient-to-b from-[#190409] via-[#280812] to-[#120206] rounded-3xl p-4 sm:p-7 border-2 border-rose-500/30 shadow-2xl relative overflow-hidden text-white font-outfit">
      {/* Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* ================================================================= */}
      {/* LEVEL 1: TRIAGE 10 MENIT PERTAMA & DIVERGENSI STEMI VS NSTEMI    */}
      {/* ================================================================= */}
      <div className="max-w-5xl mx-auto space-y-3 relative z-10">
        <div className="p-4 rounded-3xl bg-gradient-to-r from-[#2a0711] via-[#3a0b19] to-[#2a0711] border-2 border-rose-500/60 shadow-xl space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-rose-500/30 pb-2">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-rose-400 animate-pulse" />
              <h4 className="text-base font-black text-white">
                Tahap 1: Triage 10 Menit Pertama Pasien Nyeri Dada Akut (Angina Khas)
              </h4>
            </div>
            <span className="px-3 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-400/40 text-xs font-black uppercase tracking-wider">
              Target Door-to-ECG &lt; 10 Menit
            </span>
          </div>

          <p className="text-xs text-rose-100/80 leading-relaxed">
            Evaluasi nyeri dada tipikal (substernal menjalar ke rahang/lengan kiri, rasa tertindih beban berat &gt; 20 menit tidak berkurang dengan istirahat). Rekam EKG 12 sandapan segera dan ambil sampel Troponin I/T hs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
            {/* Cabang STEMI */}
            <div className="p-3.5 rounded-2xl bg-rose-950/70 border-2 border-red-500/80 shadow-md space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-red-300 uppercase tracking-wide">
                  CABANG A: STEMI (ELEVASI ST PERSISTEN)
                </span>
                <span className="text-[10px] font-black bg-red-500 text-white px-2 py-0.5 rounded">
                  Emergensi CITO
                </span>
              </div>
              <p className="text-[11px] text-rose-100">
                Elevasi segmen ST &ge; 1 mm di &ge; 2 sandapan bersebelahan (atau LBBB baru). Oklusi total arteri koroner.
              </p>
              <div className="text-[10px] text-red-200 font-bold bg-red-900/40 p-2 rounded-lg border border-red-500/30">
                🚨 Tindakan: Loading DAPT + Aktivasi Kateterisasi Jantung SEGERA (Door-to-Balloon &lt; 90 min) atau Fibrinolisis (&lt; 30 min)!
              </div>
            </div>

            {/* Cabang NSTEMI / UAP */}
            <div className="p-3.5 rounded-2xl bg-[#261019] border-2 border-amber-500/70 shadow-md space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-amber-300 uppercase tracking-wide">
                  CABANG B: NSTEMI / ANGINA TIDAK STABIL (UAP)
                </span>
                <span className="text-[10px] font-black bg-amber-500 text-slate-950 px-2 py-0.5 rounded">
                  Stratifikasi Risiko
                </span>
              </div>
              <p className="text-[11px] text-amber-100">
                Depresi segmen ST, inversi gelombang T, atau EKG nondiagnostik. Oklusi subtotal / trombus non-oklusif.
              </p>
              <div className="text-[10px] text-amber-200 font-bold bg-amber-950/40 p-2 rounded-lg border border-amber-500/30">
                ⚠️ Tindakan: Hitung Skor TIMI / GRACE. Pasien risiko sangat tinggi (syok, aritmia fatal) -&gt; Angiografi Invasif &lt; 2 jam.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONNECTING ARROW 1 */}
      <div className="flex flex-col items-center justify-center relative z-10 -my-2">
        <div className="w-0.5 h-7 bg-gradient-to-b from-rose-500 to-red-500" />
        <div className="w-2.5 h-2.5 border-r-2 border-b-2 border-red-400 rotate-45 -mt-1.5" />
      </div>

      {/* ================================================================= */}
      {/* LEVEL 2: PROTOKOL GAWAT DARURAT AWAL (FONA / MONA)                */}
      {/* ================================================================= */}
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="p-5 rounded-3xl bg-gradient-to-r from-[#20050e] via-[#300916] to-[#20050e] border-2 border-red-500/70 shadow-2xl space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-red-500/30 pb-2">
            <div>
              <h4 className="text-base font-black text-white flex items-center gap-2">
                <Flame className="w-5 h-5 text-red-400" />
                <span>Tahap 2: Resusitasi &amp; Tatalaksana Awal Ruang Gawat Darurat (Protokol FONA)</span>
              </h4>
              <p className="text-xs text-rose-200/80">
                Diberikan segera di UGD bersamaan dengan persiapan transfer ke lab kateterisasi
              </p>
            </div>
            <button
              onClick={() => onTestRegimen(['Aspirin', 'Ticagrelor', 'Isosorbide Dinitrate', 'Enoxaparin'])}
              className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-black text-xs shadow-md flex items-center gap-1.5 cursor-pointer self-start sm:self-auto"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Uji Interaksi Regimen Akut</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* F: Fentanyl / Morfin */}
            <div className="p-3 rounded-2xl bg-black/40 border border-rose-500/40 space-y-1.5">
              <span className="text-[10px] font-black bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded block w-max">
                F - ANALGESIK NARKOTIK
              </span>
              <h5 className="text-xs font-black text-white">Morfin IV / Fentanyl IV</h5>
              <p className="text-[10px] text-rose-100/70">
                Morfin 2 - 4 mg IV bolus lambat (hanya jika nyeri refrakter terhadap nitrat).
              </p>
            </div>

            {/* O: Oksigen */}
            <div className="p-3 rounded-2xl bg-black/40 border border-sky-500/40 space-y-1.5">
              <span className="text-[10px] font-black bg-sky-500/20 text-sky-300 px-2 py-0.5 rounded block w-max">
                O - OKSIGEN TERATUR
              </span>
              <h5 className="text-xs font-black text-white">Nasal Kanul 2 - 4 L/min</h5>
              <p className="text-[10px] text-sky-100/70">
                HANYA diberikan bila saturasi O2 &lt; 90% atau sesak napas. Hindari hiperoksia karena memicu vasokonstriksi koroner!
              </p>
            </div>

            {/* N: Nitrat */}
            <div className="p-3 rounded-2xl bg-black/40 border border-amber-500/40 space-y-1.5">
              <span className="text-[10px] font-black bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded block w-max">
                N - VASODILATOR NITRAT
              </span>
              <h5 className="text-xs font-black text-white">ISDN 5 mg Sublingual</h5>
              <p className="text-[10px] text-amber-100/70">
                Tiap 5 menit maks 3 dosis. KONTRAINDIKASI: TD sistolik &lt; 90, infark RV, atau pemakaian PDE-5i &lt; 24 jam.
              </p>
              <button
                onClick={() => onDrugClick('Isosorbide Dinitrate')}
                className="text-[10px] text-amber-300 hover:text-white font-bold underline cursor-pointer"
              >
                Cek ISDN &rarr;
              </button>
            </div>

            {/* A: Antiplatelet Loading */}
            <div className="p-3 rounded-2xl bg-black/40 border border-red-500/40 space-y-1.5">
              <span className="text-[10px] font-black bg-red-500/20 text-red-300 px-2 py-0.5 rounded block w-max">
                A - DAPT LOADING DOSE
              </span>
              <h5 className="text-xs font-black text-white">Aspirin + Ticagrelor / Clopidogrel</h5>
              <p className="text-[10px] text-red-100/70">
                Aspirin 160-320 mg dikunyah + Ticagrelor 180 mg (atau Clopidogrel 300-600 mg).
              </p>
              <div className="flex gap-1 pt-0.5">
                <button
                  onClick={() => onDrugClick('Aspirin')}
                  className="px-1.5 py-0.5 rounded bg-red-500/20 text-[9px] font-bold text-red-200 cursor-pointer"
                >
                  Aspirin
                </button>
                <button
                  onClick={() => onDrugClick('Ticagrelor')}
                  className="px-1.5 py-0.5 rounded bg-red-500/20 text-[9px] font-bold text-red-200 cursor-pointer"
                >
                  Ticagrelor
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONNECTING ARROW 2 */}
      <div className="flex flex-col items-center justify-center relative z-10 -my-2">
        <div className="w-0.5 h-7 bg-gradient-to-b from-red-500 to-indigo-500" />
        <div className="w-2.5 h-2.5 border-r-2 border-b-2 border-indigo-400 rotate-45 -mt-1.5" />
      </div>

      {/* ================================================================= */}
      {/* LEVEL 3: REPERFUSI KORONER & ANTIKOAGULASI PARENTERAL             */}
      {/* ================================================================= */}
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="p-5 rounded-3xl bg-gradient-to-r from-[#140822] via-[#210e38] to-[#140822] border-2 border-indigo-500/60 shadow-xl space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-base font-black text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-indigo-400" />
              <span>Tahap 3: Strategi Reperfusi STEMI (Door-to-Balloon vs Door-to-Needle)</span>
            </h4>
            <span className="text-[10px] font-black bg-indigo-500 text-white px-2 py-0.5 rounded">
              Waktu Adalah Otot Jantung
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
            {/* Reperfusi 1: Primary PCI */}
            <div className="p-3.5 rounded-2xl bg-black/40 border border-indigo-400/40 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-indigo-300">PILIHAN 1: PRIMARY PCI (BAKU EMAS)</span>
                <span className="text-[10px] font-bold text-emerald-400">&lt; 90-120 Menit</span>
              </div>
              <p className="text-[11px] text-indigo-100">
                Pemasangan ring/stent darurat di lab kateterisasi jantung. Angioplasti balon + stenting DES membuka oklusi secara mekanik definitif.
              </p>
              <div className="text-[10px] text-indigo-200 bg-indigo-950/60 p-2 rounded-lg border border-indigo-500/30">
                Antikoagulasi PCI: Heparin UFH 70-100 unit/kg IV bolus (target ACT 250-300 detik) atau Bivalirudin.
              </div>
            </div>

            {/* Reperfusi 2: Fibrinolysis */}
            <div className="p-3.5 rounded-2xl bg-black/40 border border-purple-400/40 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-purple-300">PILIHAN 2: TERAPI FIBRINOLISIS</span>
                <span className="text-[10px] font-bold text-amber-400">Door-to-Needle &lt; 30 Menit</span>
              </div>
              <p className="text-[11px] text-purple-100">
                Diberikan jika estimasi waktu transfer menuju faskes PCI &gt; 120 menit dan onset gejala &lt; 12 jam tanpa kontraindikasi perdarahan.
              </p>
              <div className="text-[10px] text-purple-200 bg-purple-950/60 p-2 rounded-lg border border-purple-500/30">
                Agen: Streptokinase 1.5 juta unit IV drip dalam 60 menit ATAU Alteplase (tPA) bolus bertahap + Enoxaparin IV/SC.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONNECTING ARROW 3 */}
      <div className="flex flex-col items-center justify-center relative z-10 -my-2">
        <div className="w-0.5 h-7 bg-gradient-to-b from-indigo-500 to-emerald-500" />
        <div className="w-2.5 h-2.5 border-r-2 border-b-2 border-emerald-400 rotate-45 -mt-1.5" />
      </div>

      {/* ================================================================= */}
      {/* LEVEL 4: PENCEGAHAN SEKUNDER JANGKA PANJANG (DISCHARGE REGIMEN)   */}
      {/* ================================================================= */}
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="p-5 rounded-3xl bg-gradient-to-r from-[#031d17] via-[#062c23] to-[#031d17] border-2 border-emerald-500/60 shadow-xl space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-base font-black text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>Tahap 4: Terapi Pencegahan Sekunder Jangka Panjang (Regimen Pulang EBM)</span>
            </h4>
            <span className="text-[10px] font-black bg-emerald-500 text-slate-950 px-2 py-0.5 rounded">
              Post-ACS Protection
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="p-3 rounded-xl bg-black/40 border border-emerald-500/30 space-y-1">
              <span className="text-[10px] font-bold text-emerald-400">1. DAPT 12 Bulan</span>
              <h6 className="text-xs font-black text-white">Aspirin 80-100 mg + Ticagrelor 90 mg 2x</h6>
              <p className="text-[10px] text-emerald-100/70">
                Wajib minimal 12 bulan pasca stenting PCI untuk mencegah trombosis stent berulang.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-black/40 border border-emerald-500/30 space-y-1">
              <span className="text-[10px] font-bold text-emerald-400">2. Statin Dosis Tinggi</span>
              <h6 className="text-xs font-black text-white">Atorvastatin 80 mg 1x/hari</h6>
              <p className="text-[10px] text-emerald-100/70">
                Stabilisasi plak ateroma. Target LDL-C &lt; 55 mg/dL dan reduksi &ge; 50%.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-black/40 border border-emerald-500/30 space-y-1">
              <span className="text-[10px] font-bold text-emerald-400">3. Beta-Blocker</span>
              <h6 className="text-xs font-black text-white">Bisoprolol 2.5 - 10 mg 1x/hari</h6>
              <p className="text-[10px] text-emerald-100/70">
                Menurunkan konsumsi oksigen miokard &amp; mencegah aritmia fatal pasca infark.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-black/40 border border-emerald-500/30 space-y-1">
              <span className="text-[10px] font-bold text-emerald-400">4. ACE-Inhibitor</span>
              <h6 className="text-xs font-black text-white">Ramipril 2.5 - 10 mg 1x/hari</h6>
              <p className="text-[10px] text-emerald-100/70">
                Mencegah remodeling ventrikel kiri patologis pasca infark miokard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
