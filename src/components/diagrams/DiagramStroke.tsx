import React from 'react';
import {
  Activity,
  AlertTriangle,
  ArrowDown,
  ExternalLink,
  ShieldAlert,
  Clock,
  Zap,
  Sparkles,
  CheckCircle2,
  Pill,
  Brain,
  ShieldCheck
} from 'lucide-react';
import { DiseaseFlowchartData } from '../../data/clinicalFlowchartData';

interface DiagramProps {
  currentDisease: DiseaseFlowchartData;
  onDrugClick: (drugName: string) => void;
  onTestRegimen: (drugList: string[]) => void;
}

export const DiagramStroke: React.FC<DiagramProps> = ({
  onDrugClick,
  onTestRegimen
}) => {
  return (
    <div className="space-y-6 bg-gradient-to-b from-[#1c0c02] via-[#2d1405] to-[#170901] rounded-3xl p-4 sm:p-7 border-2 border-amber-500/30 shadow-2xl relative overflow-hidden text-white font-outfit">
      {/* Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* LEVEL 1: TRIASE FAST, GULA DARAH & CT SCAN NON-KONTRAS */}
      <div className="max-w-5xl mx-auto space-y-3 relative z-10">
        <div className="p-4 rounded-3xl bg-gradient-to-r from-[#3d1805] via-[#522007] to-[#3d1805] border-2 border-amber-400/60 shadow-xl space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-500/30 pb-2">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-400" />
              <h4 className="text-base font-black text-white">
                Tahap 1: Triase Cepat KODE STROKE &amp; Penentuan Onset Waktu Serangan
              </h4>
            </div>
            <span className="px-3 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40 text-xs font-black uppercase tracking-wider">
              Time is Brain (1.9 Juta Neuron/Menit)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
            <div className="p-3.5 rounded-2xl bg-black/40 border border-amber-500/30 space-y-1">
              <span className="text-xs font-black text-amber-300 uppercase">1. Skrining FAST:</span>
              <p className="text-[11px] text-amber-100/80 leading-snug">
                Face drooping (mulut mencong), Arm weakness (kelemahan lengan), Speech difficulty (bicara pelo), Time to call code stroke.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-black/40 border border-amber-500/30 space-y-1">
              <span className="text-xs font-black text-amber-300 uppercase">2. Singkirkan Mimics:</span>
              <p className="text-[11px] text-amber-100/80 leading-snug">
                Periksa <strong>Gula Darah Sewaktu (GDS)</strong> instan untuk menyingkirkan hipoglikemia (&lt; 60 mg/dL).
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-black/40 border border-amber-500/30 space-y-1">
              <span className="text-xs font-black text-amber-300 uppercase">3. CT-Scan Kepala Cito:</span>
              <p className="text-[11px] text-amber-100/80 leading-snug">
                Door-to-CT &lt; 20 menit: Wajib memastikan <strong>TIDAK ADA PERDARAHAN</strong> intrakranial sebelum trombolisis.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CONNECTING ARROW */}
      <div className="flex flex-col items-center justify-center relative z-10 -my-2">
        <div className="w-0.5 h-6 bg-gradient-to-b from-amber-400 to-rose-500" />
        <div className="w-2.5 h-2.5 border-r-2 border-b-2 border-rose-400 rotate-45 -mt-1.5" />
      </div>

      {/* LEVEL 2: JALUR KEPUTUSAN TROMBOLISIS VS DAPT 21 HARI */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 relative z-10">
        {/* JALUR A: WINDOW PERIOD < 4.5 JAM (TROMBOLISIS r-tPA) */}
        <div className="p-5 rounded-3xl bg-gradient-to-b from-[#380e0a] to-[#240805] border-2 border-rose-500/70 shadow-xl space-y-3">
          <div className="flex items-center justify-between border-b border-rose-800 pb-2">
            <span className="text-xs font-black text-rose-300 uppercase tracking-wide flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-rose-400" />
              Onset &lt; 4.5 Jam: Trombolisis IV Alteplase
            </span>
            <span className="text-[10px] font-bold bg-rose-950 text-rose-300 px-2 py-0.5 rounded-full border border-rose-600/40">
              Target Door-to-Needle &lt; 45 mnt
            </span>
          </div>

          <div className="p-3 rounded-2xl bg-black/40 border border-rose-500/30 text-xs space-y-1">
            <span className="font-bold text-rose-300 block">Kriteria Tekanan Darah Pra-Trombolisis:</span>
            <p className="text-rose-100/80 leading-relaxed text-[11px]">
              TD harus &lt; 185/110 mmHg. Jika lebih tinggi, berikan <strong>Nicardipine IV drip 5–15 mg/jam</strong> hingga target tercapai sebelum r-tPA dimasukkan.
            </p>
          </div>

          <div className="space-y-2 pt-1">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => onDrugClick('Alteplase')}
                className="px-2.5 py-1.5 rounded-xl bg-rose-500/20 text-rose-200 text-xs font-black border border-rose-400/40 flex items-center gap-1 hover:bg-rose-500/30 transition-all cursor-pointer"
              >
                <Pill className="w-3.5 h-3.5 text-rose-400" />
                <span>Alteplase (Actilyse r-tPA) 0.9 mg/kg (Maks 90 mg)</span>
                <ExternalLink className="w-2.5 h-2.5 text-rose-400" />
              </button>

              <button
                onClick={() => onDrugClick('Nicardipine')}
                className="px-2.5 py-1.5 rounded-xl bg-rose-500/20 text-rose-200 text-xs font-black border border-rose-400/40 flex items-center gap-1 hover:bg-rose-500/30 transition-all cursor-pointer"
              >
                <Pill className="w-3.5 h-3.5 text-rose-400" />
                <span>Nicardipine IV Titrasi</span>
                <ExternalLink className="w-2.5 h-2.5 text-rose-400" />
              </button>
            </div>

            <p className="text-[10px] text-amber-200 font-semibold pt-1">
              ⚠️ JANGAN berikan antiplatelet atau antikoagulan apa pun dalam 24 jam pertama pasca-trombolisis!
            </p>
          </div>
        </div>

        {/* JALUR B: PROTOKOL DAPT 21 HARI (STROKE MINOR / TIA RISIKO TINGGI) */}
        <div className="p-5 rounded-3xl bg-gradient-to-b from-[#2b1605] to-[#1a0c02] border-2 border-amber-500/60 shadow-xl space-y-3">
          <div className="flex items-center justify-between border-b border-amber-900 pb-2">
            <span className="text-xs font-black text-amber-300 uppercase tracking-wide flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              Protokol DAPT 21 Hari (POINT / CHANCE)
            </span>
            <span className="text-[10px] font-bold bg-amber-950 text-amber-300 px-2 py-0.5 rounded-full border border-amber-600/40">
              NIHSS &le; 3 atau ABCD2 &ge; 4
            </span>
          </div>

          <p className="text-xs text-amber-100/90 leading-relaxed">
            Diberikan dalam 24 jam pertama serangan pada stroke minor non-kardioembolik untuk mencegah stroke berat sekunder.
          </p>

          <div className="space-y-2 pt-1">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => onDrugClick('Aspirin')}
                className="px-2.5 py-1.5 rounded-xl bg-amber-500/20 text-amber-200 text-xs font-black border border-amber-400/40 flex items-center gap-1 hover:bg-amber-500/30 transition-all cursor-pointer"
              >
                <Pill className="w-3.5 h-3.5 text-amber-400" />
                <span>Aspirin (Loading 160–325 mg &rarr; 81–100 mg/hari)</span>
                <ExternalLink className="w-2.5 h-2.5 text-amber-400" />
              </button>

              <button
                onClick={() => onDrugClick('Clopidogrel')}
                className="px-2.5 py-1.5 rounded-xl bg-amber-500/20 text-amber-200 text-xs font-black border border-amber-400/40 flex items-center gap-1 hover:bg-amber-500/30 transition-all cursor-pointer"
              >
                <Pill className="w-3.5 h-3.5 text-amber-400" />
                <span>Clopidogrel (Loading 300 mg &rarr; 75 mg/hari)</span>
                <ExternalLink className="w-2.5 h-2.5 text-amber-400" />
              </button>

              <button
                onClick={() => onDrugClick('Atorvastatin')}
                className="px-2.5 py-1.5 rounded-xl bg-amber-500/20 text-amber-200 text-xs font-black border border-amber-400/40 flex items-center gap-1 hover:bg-amber-500/30 transition-all cursor-pointer"
              >
                <Pill className="w-3.5 h-3.5 text-amber-400" />
                <span>Atorvastatin 40–80 mg (Statin Intensitas Tinggi)</span>
                <ExternalLink className="w-2.5 h-2.5 text-amber-400" />
              </button>
            </div>

            <button
              onClick={() => onTestRegimen(['Aspirin', 'Clopidogrel', 'Atorvastatin'])}
              className="text-[11px] font-bold text-amber-300 hover:text-white underline cursor-pointer pt-1 block"
            >
              ➔ Uji Interaksi Regimen DAPT &plus; Statin Intensitas Tinggi
            </button>
          </div>
        </div>
      </div>

      {/* CONNECTING ARROW */}
      <div className="flex flex-col items-center justify-center relative z-10 -my-2">
        <div className="w-0.5 h-6 bg-gradient-to-b from-amber-400 to-purple-500" />
        <div className="w-2.5 h-2.5 border-r-2 border-b-2 border-purple-400 rotate-45 -mt-1.5" />
      </div>

      {/* LEVEL 3: ATURAN 1-3-6-12 HARI UNTUK STROKE KARDIOEMBOLIK (ATRIAL FIBRILASI) */}
      <div className="max-w-5xl mx-auto p-4 rounded-3xl bg-gradient-to-r from-[#210933] via-[#320e4d] to-[#210933] border-2 border-purple-500/60 shadow-xl space-y-3 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-purple-500/30 pb-2">
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-purple-400" />
            <h4 className="text-base font-black text-white">
              Aturan 1–3–6–12 Hari Inisiasi Antikoagulan (DOAC) Pasca-Stroke dengan Atrial Fibrilasi
            </h4>
          </div>
          <span className="px-3 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/40 text-xs font-black uppercase tracking-wider">
            Cegah Transformasi Perdarahan
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 pt-1 text-xs">
          <div className="p-3 rounded-2xl bg-black/40 border border-purple-500/30 space-y-1">
            <span className="font-bold text-purple-300 block">Hari ke-1: TIA</span>
            <p className="text-purple-100/80 leading-relaxed text-[11px]">
              Gejala defisit neurologis membaik total &lt; 24 jam tanpa lesi infark pada pencitraan otak.
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-black/40 border border-purple-500/30 space-y-1">
            <span className="font-bold text-purple-300 block">Hari ke-3: Infark Kecil</span>
            <p className="text-purple-100/80 leading-relaxed text-[11px]">
              Stroke iskemik ringan dengan skor <strong>NIHSS &lt; 8</strong> dan lesi infark fokal kecil.
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-black/40 border border-purple-500/30 space-y-1">
            <span className="font-bold text-purple-300 block">Hari ke-6: Infark Sedang</span>
            <p className="text-purple-100/80 leading-relaxed text-[11px]">
              Stroke iskemik sedang dengan skor <strong>NIHSS 8–15</strong> setelah evaluasi CT-scan ulang.
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-black/40 border border-purple-500/30 space-y-1">
            <span className="font-bold text-purple-300 block">Hari ke-12: Infark Luas</span>
            <p className="text-purple-100/80 leading-relaxed text-[11px]">
              Stroke iskemik berat dengan skor <strong>NIHSS &ge; 16</strong> pasca CT-scan memastikan tidak ada perdarahan.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          <button
            onClick={() => onDrugClick('Rivaroxaban')}
            className="px-2.5 py-1.5 rounded-xl bg-purple-500/20 text-purple-200 text-xs font-black border border-purple-400/40 flex items-center gap-1 hover:bg-purple-500/30 transition-all cursor-pointer"
          >
            <Pill className="w-3.5 h-3.5 text-purple-400" />
            <span>Rivaroxaban 20 mg 1x/hari (DOAC)</span>
            <ExternalLink className="w-2.5 h-2.5 text-purple-400" />
          </button>
          <button
            onClick={() => onDrugClick('Apixaban')}
            className="px-2.5 py-1.5 rounded-xl bg-purple-500/20 text-purple-200 text-xs font-black border border-purple-400/40 flex items-center gap-1 hover:bg-purple-500/30 transition-all cursor-pointer"
          >
            <Pill className="w-3.5 h-3.5 text-purple-400" />
            <span>Apixaban 5 mg 2x/hari (DOAC)</span>
            <ExternalLink className="w-2.5 h-2.5 text-purple-400" />
          </button>
        </div>
      </div>
    </div>
  );
};
