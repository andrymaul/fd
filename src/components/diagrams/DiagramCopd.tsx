import React from 'react';
import {
  Wind,
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
  Flame,
  Pill
} from 'lucide-react';
import { DiseaseFlowchartData } from '../../data/clinicalFlowchartData';

interface DiagramProps {
  currentDisease: DiseaseFlowchartData;
  onDrugClick: (drugName: string) => void;
  onTestRegimen: (drugList: string[]) => void;
}

export const DiagramCopd: React.FC<DiagramProps> = ({
  onDrugClick,
  onTestRegimen
}) => {
  return (
    <div className="space-y-6 bg-gradient-to-b from-[#021724] via-[#04243b] to-[#021420] rounded-3xl p-4 sm:p-7 border-2 border-teal-500/30 shadow-2xl relative overflow-hidden text-white font-outfit">
      {/* Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* LEVEL 1: SPIROMETRI & KLASIFIKASI GRUP ABE */}
      <div className="max-w-5xl mx-auto space-y-3 relative z-10">
        <div className="p-4 rounded-3xl bg-gradient-to-r from-[#05293d] via-[#083c59] to-[#05293d] border-2 border-teal-400/60 shadow-xl space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-teal-500/30 pb-2">
            <div className="flex items-center gap-2">
              <Wind className="w-5 h-5 text-teal-400" />
              <h4 className="text-base font-black text-white">
                Tahap 1: Konfirmasi Spirometri (FEV1/FVC &lt; 0.70) &amp; Stratifikasi Grup ABE 2024
              </h4>
            </div>
            <span className="px-3 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/40 text-xs font-black uppercase tracking-wider">
              Konsensus GOLD 2024 / PDPI
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
            <div className="p-3.5 rounded-2xl bg-black/40 border border-emerald-500/30 space-y-1">
              <span className="text-xs font-black text-emerald-300 uppercase">Grup A (Gejala Ringan):</span>
              <p className="text-[11px] text-emerald-100/80 leading-snug">
                Skor CAT &lt; 10 atau mMRC 0–1; Eksaserbasi 0–1x/thn tanpa rawat inap.
              </p>
              <div className="pt-1.5">
                <span className="text-[10px] font-bold text-slate-400 block">Terapi Inisiasi:</span>
                <span className="text-xs font-bold text-emerald-200">Bronkodilator Tunggal (LAMA / LABA)</span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-black/40 border border-teal-500/30 space-y-1">
              <span className="text-xs font-black text-teal-300 uppercase">Grup B (Gejala Signifikan):</span>
              <p className="text-[11px] text-teal-100/80 leading-snug">
                Skor CAT &ge; 10 atau mMRC &ge; 2; Eksaserbasi 0–1x/thn tanpa rawat inap.
              </p>
              <div className="pt-1.5">
                <span className="text-[10px] font-bold text-slate-400 block">Terapi Inisiasi GOLD 2024:</span>
                <span className="text-xs font-bold text-teal-200">Kombinasi Ganda LABA + LAMA Inhalasi</span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-black/40 border border-rose-500/30 space-y-1">
              <span className="text-xs font-black text-rose-300 uppercase">Grup E (Eksaserbasi / Rawat Inap):</span>
              <p className="text-[11px] text-rose-100/80 leading-snug">
                Eksaserbasi &ge; 2x/thn rawat jalan ATAU &ge; 1x eksaserbasi rawat inap RS.
              </p>
              <div className="pt-1.5">
                <span className="text-[10px] font-bold text-slate-400 block">Terapi Inisiasi:</span>
                <span className="text-xs font-bold text-rose-200">LABA + LAMA (Cek Eosinofil Darah)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONNECTING ARROW */}
      <div className="flex flex-col items-center justify-center relative z-10 -my-2">
        <div className="w-0.5 h-6 bg-gradient-to-b from-teal-400 to-emerald-500" />
        <div className="w-2.5 h-2.5 border-r-2 border-b-2 border-emerald-400 rotate-45 -mt-1.5" />
      </div>

      {/* LEVEL 2: ALUR KEPUTUSAN TERAPI RUMATAN */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 relative z-10">
        {/* PILAR 1: KOMBINASI GANDA LABA + LAMA */}
        <div className="p-5 rounded-3xl bg-gradient-to-b from-[#06303d] to-[#041e26] border-2 border-teal-500/60 shadow-xl space-y-3">
          <div className="flex items-center justify-between border-b border-teal-800 pb-2">
            <span className="text-xs font-black text-teal-300 uppercase tracking-wide flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-teal-400" />
              Fondasi Utama: Kombinasi LABA + LAMA
            </span>
            <span className="text-[10px] font-bold bg-teal-950 text-teal-300 px-2 py-0.5 rounded-full border border-teal-600/40">
              GOLD 2024 Rekomendasi A
            </span>
          </div>

          <p className="text-xs text-teal-100/90 leading-relaxed">
            Mekanisme ganda: Relaksasi otot polos bronkus via agonis beta-2 simultan dengan blokade konstriksi kolinergik M3.
          </p>

          <div className="space-y-2 pt-1">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => onDrugClick('Tiotropium')}
                className="px-2.5 py-1.5 rounded-xl bg-teal-500/20 text-teal-200 text-xs font-black border border-teal-400/40 flex items-center gap-1 hover:bg-teal-500/30 transition-all cursor-pointer"
              >
                <Pill className="w-3.5 h-3.5 text-teal-400" />
                <span>Tiotropium (Spiriva) 18 mcg</span>
                <ExternalLink className="w-2.5 h-2.5 text-teal-400" />
              </button>

              <button
                onClick={() => onDrugClick('Tiotropium + Olodaterol')}
                className="px-2.5 py-1.5 rounded-xl bg-teal-500/20 text-teal-200 text-xs font-black border border-teal-400/40 flex items-center gap-1 hover:bg-teal-500/30 transition-all cursor-pointer"
              >
                <Pill className="w-3.5 h-3.5 text-teal-400" />
                <span>Spiolto Respimat (Tiotropium + Olodaterol)</span>
                <ExternalLink className="w-2.5 h-2.5 text-teal-400" />
              </button>

              <button
                onClick={() => onDrugClick('Umeclidinium + Vilanterol')}
                className="px-2.5 py-1.5 rounded-xl bg-teal-500/20 text-teal-200 text-xs font-black border border-teal-400/40 flex items-center gap-1 hover:bg-teal-500/30 transition-all cursor-pointer"
              >
                <Pill className="w-3.5 h-3.5 text-teal-400" />
                <span>Anoro Ellipta (Umeclidinium + Vilanterol)</span>
                <ExternalLink className="w-2.5 h-2.5 text-teal-400" />
              </button>
            </div>

            <button
              onClick={() => onTestRegimen(['Tiotropium', 'Olodaterol'])}
              className="text-[11px] font-bold text-teal-300 hover:text-white underline cursor-pointer pt-1 block"
            >
              ➔ Uji Interaksi Regimen LABA + LAMA
            </button>
          </div>
        </div>

        {/* PILAR 2: ESKALASI TRIPLE THERAPY (LABA + LAMA + ICS) */}
        <div className="p-5 rounded-3xl bg-gradient-to-b from-[#2a0e1c] to-[#1a0710] border-2 border-rose-500/60 shadow-xl space-y-3">
          <div className="flex items-center justify-between border-b border-rose-900 pb-2">
            <span className="text-xs font-black text-rose-300 uppercase tracking-wide flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-rose-400" />
              Eskalasi: Triple Therapy (Inhaler Tunggal)
            </span>
            <span className="text-[10px] font-bold bg-rose-950 text-rose-300 px-2 py-0.5 rounded-full border border-rose-600/40">
              Eosinofil &ge; 300 sel/uL
            </span>
          </div>

          <div className="p-3 rounded-2xl bg-black/40 border border-rose-500/30 text-xs space-y-1">
            <span className="font-bold text-rose-300 block">Kriteria Penambahan Inhalasi Steroid (ICS):</span>
            <p className="text-rose-100/80 leading-relaxed text-[11px]">
              - Riwayat eksaserbasi &ge; 2x/tahun atau 1x rawat inap RS.<br />
              - Hitung Eosinofil darah &ge; 300 sel/uL (sangat kuat) atau &ge; 100 sel/uL.<br />
              - Ada riwayat asma tumpang tindih (Asthma-COPD Overlap / ACO).
            </p>
          </div>

          <div className="space-y-2 pt-1">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => onDrugClick('Fluticasone Furoate + Umeclidinium + Vilanterol')}
                className="px-2.5 py-1.5 rounded-xl bg-rose-500/20 text-rose-200 text-xs font-black border border-rose-400/40 flex items-center gap-1 hover:bg-rose-500/30 transition-all cursor-pointer"
              >
                <Pill className="w-3.5 h-3.5 text-rose-400" />
                <span>Trelegy Ellipta (Fluticasone + Umeclidinium + Vilanterol)</span>
                <ExternalLink className="w-2.5 h-2.5 text-rose-400" />
              </button>

              <button
                onClick={() => onDrugClick('Budesonide + Glycopyrronium + Formoterol')}
                className="px-2.5 py-1.5 rounded-xl bg-rose-500/20 text-rose-200 text-xs font-black border border-rose-400/40 flex items-center gap-1 hover:bg-rose-500/30 transition-all cursor-pointer"
              >
                <Pill className="w-3.5 h-3.5 text-rose-400" />
                <span>Breztri Aerosphere (Budesonide + Glycopyrronium + Formoterol)</span>
                <ExternalLink className="w-2.5 h-2.5 text-rose-400" />
              </button>
            </div>

            <p className="text-[10px] text-rose-200/80 pt-1">
              ⚠️ Perhatian: Hindari ICS bila pasien memiliki riwayat pneumonia berulang atau eosinofil darah &lt; 100 sel/uL.
            </p>
          </div>
        </div>
      </div>

      {/* CONNECTING ARROW */}
      <div className="flex flex-col items-center justify-center relative z-10 -my-2">
        <div className="w-0.5 h-6 bg-gradient-to-b from-teal-400 to-amber-500" />
        <div className="w-2.5 h-2.5 border-r-2 border-b-2 border-amber-400 rotate-45 -mt-1.5" />
      </div>

      {/* LEVEL 3: PROTOKOL EKSASERBASI AKUT */}
      <div className="max-w-5xl mx-auto p-4 rounded-3xl bg-gradient-to-r from-[#291705] via-[#3a2007] to-[#291705] border-2 border-amber-500/60 shadow-xl space-y-3 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-500/30 pb-2">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-400" />
            <h4 className="text-base font-black text-white">
              Tatalaksana Serangan Eksaserbasi Akut (AE-COPD)
            </h4>
          </div>
          <span className="px-3 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40 text-xs font-black uppercase tracking-wider">
            Protokol Kedaruratan
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
          <div className="p-3 rounded-2xl bg-black/40 border border-amber-500/30 text-xs space-y-1">
            <span className="font-bold text-amber-300 block">1. Bronkodilasi Cepat:</span>
            <p className="text-amber-100/80 leading-relaxed text-[11px]">
              Nebulisasi <strong>Salbutamol 2.5–5 mg &plus; Ipratropium 0.5 mg</strong> (Combivent UDV) tiap 4–6 jam.
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-black/40 border border-amber-500/30 text-xs space-y-1">
            <span className="font-bold text-amber-300 block">2. Steroid Sistemik 5 Hari:</span>
            <p className="text-amber-100/80 leading-relaxed text-[11px]">
              <strong>Prednison 40 mg oral/hari</strong> (atau Metilprednisolon 32 mg) selama tepat 5 hari (tanpa tapering).
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-black/40 border border-amber-500/30 text-xs space-y-1">
            <span className="font-bold text-amber-300 block">3. Antibiotika Selektif:</span>
            <p className="text-amber-100/80 leading-relaxed text-[11px]">
              <strong>Azitromisin 500 mg hari 1, lanjut 250 mg hari 2–5</strong> (atau Amoksisilin-Klavulanat) bila sputum purulen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
