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
  ShieldCheck,
  Flame,
  Droplets
} from 'lucide-react';
import { DiseaseFlowchartData } from '../../data/clinicalFlowchartData';

interface DiagramProps {
  currentDisease: DiseaseFlowchartData;
  onDrugClick: (drugName: string) => void;
  onTestRegimen: (drugList: string[]) => void;
}

export const DiagramTb: React.FC<DiagramProps> = ({
  onDrugClick,
  onTestRegimen
}) => {
  return (
    <div className="space-y-6 bg-gradient-to-b from-[#1c0505] via-[#2d0909] to-[#140303] rounded-3xl p-4 sm:p-7 border-2 border-red-500/30 shadow-2xl relative overflow-hidden text-white font-outfit">
      {/* Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* LEVEL 1: ALUR TES CEPAT MOLEKULER (TCM GENEXPERT) */}
      <div className="max-w-5xl mx-auto space-y-3 relative z-10">
        <div className="p-4 rounded-3xl bg-gradient-to-r from-[#380909] via-[#4d0d0d] to-[#380909] border-2 border-red-400/60 shadow-xl space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-red-500/30 pb-2">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-red-400" />
              <h4 className="text-base font-black text-white">
                Tahap 1: Diagnosis Molekuler Dahak TCM GeneXpert MTB/RIF (&lt; 2 Jam)
              </h4>
            </div>
            <span className="px-3 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-400/40 text-xs font-black uppercase tracking-wider">
              Baku Emas PNPK Kemenkes RI
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
            <div className="p-3.5 rounded-2xl bg-black/40 border border-emerald-500/30 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-emerald-300 uppercase">Jalur 1: Rifampisin Sensitif (TB-SO)</span>
                <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded-md font-bold">&gt; 90% Kasus</span>
              </div>
              <p className="text-[11px] text-emerald-100/80 leading-snug">
                MTB Terdeteksi, Rifampisin Resisten TIDAK Terdeteksi. Langsung inisiasi paduan FDC Kategori 1 (2RHZE / 4RH).
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-black/40 border border-rose-500/30 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-rose-300 uppercase">Jalur 2: Rifampisin Resisten (TB-RO)</span>
                <span className="text-[10px] bg-rose-950 text-rose-300 px-2 py-0.5 rounded-md font-bold">Layanan Rujukan</span>
              </div>
              <p className="text-[11px] text-rose-100/80 leading-snug">
                MTB Terdeteksi, Rifampisin Resisten TERDETEKSI. Rujuk ke RS TB-RO untuk paduan All-Oral 6 Bulan (BPaLM / BPaL).
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CONNECTING ARROW */}
      <div className="flex flex-col items-center justify-center relative z-10 -my-2">
        <div className="w-0.5 h-6 bg-gradient-to-b from-red-400 to-rose-500" />
        <div className="w-2.5 h-2.5 border-r-2 border-b-2 border-rose-400 rotate-45 -mt-1.5" />
      </div>

      {/* LEVEL 2: REGIMEN FARMAKOTERAPI TB-SO VS TB-RO */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 relative z-10">
        {/* PADUAN TB-SO FDC KATEGORI 1 */}
        <div className="p-5 rounded-3xl bg-gradient-to-b from-[#2e0808] to-[#1a0404] border-2 border-red-500/60 shadow-xl space-y-3">
          <div className="flex items-center justify-between border-b border-red-800 pb-2">
            <span className="text-xs font-black text-red-300 uppercase tracking-wide flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-red-400" />
              Paduan TB-SO: 2RHZE / 4RH (FDC)
            </span>
            <span className="text-[10px] font-bold bg-red-950 text-red-300 px-2 py-0.5 rounded-full border border-red-600/40">
              Total 6 Bulan
            </span>
          </div>

          <div className="p-3 rounded-2xl bg-black/40 border border-red-500/30 text-xs space-y-1">
            <span className="font-bold text-red-300 block">Aturan Dosis Sesuai Berat Badan (BB):</span>
            <p className="text-red-100/80 leading-relaxed text-[11px]">
              - BB 30–37 kg: 2 tablet/hari<br />
              - BB 38–54 kg: 3 tablet/hari<br />
              - BB 55–70 kg: 4 tablet/hari<br />
              Diminum sekali sehari saat perut kosong (pagi sebelum makan).
            </p>
          </div>

          <div className="space-y-2 pt-1">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => onDrugClick('Rifampisin')}
                className="px-2.5 py-1.5 rounded-xl bg-red-500/20 text-red-200 text-xs font-black border border-red-400/40 flex items-center gap-1 hover:bg-red-500/30 transition-all cursor-pointer"
              >
                <Pill className="w-3.5 h-3.5 text-red-400" />
                <span>4KDT FDC (Rifampisin + INH + Pirazinamid + Etambutol)</span>
                <ExternalLink className="w-2.5 h-2.5 text-red-400" />
              </button>

              <button
                onClick={() => onDrugClick('Isoniazid')}
                className="px-2.5 py-1.5 rounded-xl bg-red-500/20 text-red-200 text-xs font-black border border-red-400/40 flex items-center gap-1 hover:bg-red-500/30 transition-all cursor-pointer"
              >
                <Pill className="w-3.5 h-3.5 text-red-400" />
                <span>Pyridoxine HCl (Vit B6) 10–25 mg</span>
                <ExternalLink className="w-2.5 h-2.5 text-red-400" />
              </button>
            </div>

            <p className="text-[10px] text-amber-300 font-semibold pt-1">
              ⚠️ Edukasi wajib: Air seni (urin) akan berwarna merah kemerahan akibat metabolit Rifampisin.
            </p>
          </div>
        </div>

        {/* PADUAN TB-RO ALL-ORAL BPaLM */}
        <div className="p-5 rounded-3xl bg-gradient-to-b from-[#2e0c1b] to-[#1a060f] border-2 border-rose-500/60 shadow-xl space-y-3">
          <div className="flex items-center justify-between border-b border-rose-900 pb-2">
            <span className="text-xs font-black text-rose-300 uppercase tracking-wide flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-rose-400" />
              Paduan TB-RO: BPaLM / BPaL 6 Bulan
            </span>
            <span className="text-[10px] font-bold bg-rose-950 text-rose-300 px-2 py-0.5 rounded-full border border-rose-600/40">
              Tanpa Suntikan (All-Oral)
            </span>
          </div>

          <p className="text-xs text-rose-100/90 leading-relaxed">
            Regimen revolusioner WHO &amp; Kemenkes RI menggantikan paduan suntikan lama 2 tahun dengan angka kesembuhan &gt; 85%.
          </p>

          <div className="space-y-2 pt-1">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => onDrugClick('Bedaquiline')}
                className="px-2.5 py-1.5 rounded-xl bg-rose-500/20 text-rose-200 text-xs font-black border border-rose-400/40 flex items-center gap-1 hover:bg-rose-500/30 transition-all cursor-pointer"
              >
                <Pill className="w-3.5 h-3.5 text-rose-400" />
                <span>Bedaquiline (Sirturo)</span>
                <ExternalLink className="w-2.5 h-2.5 text-rose-400" />
              </button>

              <button
                onClick={() => onDrugClick('Linezolid')}
                className="px-2.5 py-1.5 rounded-xl bg-rose-500/20 text-rose-200 text-xs font-black border border-rose-400/40 flex items-center gap-1 hover:bg-rose-500/30 transition-all cursor-pointer"
              >
                <Pill className="w-3.5 h-3.5 text-rose-400" />
                <span>Linezolid (Zyvox) 600 mg</span>
                <ExternalLink className="w-2.5 h-2.5 text-rose-400" />
              </button>

              <button
                onClick={() => onDrugClick('Pretomanid')}
                className="px-2.5 py-1.5 rounded-xl bg-rose-500/20 text-rose-200 text-xs font-black border border-rose-400/40 flex items-center gap-1 hover:bg-rose-500/30 transition-all cursor-pointer"
              >
                <Pill className="w-3.5 h-3.5 text-rose-400" />
                <span>Pretomanid 200 mg</span>
                <ExternalLink className="w-2.5 h-2.5 text-rose-400" />
              </button>
            </div>

            <p className="text-[10px] text-rose-200 font-semibold pt-1">
              ⚠️ Monitor EKG serial untuk QTc (Bedaquiline + Moxifloxacin) &amp; Darah Lengkap serial untuk Linezolid.
            </p>
          </div>
        </div>
      </div>

      {/* CONNECTING ARROW */}
      <div className="flex flex-col items-center justify-center relative z-10 -my-2">
        <div className="w-0.5 h-6 bg-gradient-to-b from-red-400 to-amber-500" />
        <div className="w-2.5 h-2.5 border-r-2 border-b-2 border-amber-400 rotate-45 -mt-1.5" />
      </div>

      {/* LEVEL 3: PROTOKOL DRUG-INDUCED LIVER INJURY (DILI) */}
      <div className="max-w-5xl mx-auto p-4 rounded-3xl bg-gradient-to-r from-[#290d0d] via-[#3a1313] to-[#290d0d] border-2 border-amber-500/60 shadow-xl space-y-3 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-500/30 pb-2">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-400" />
            <h4 className="text-base font-black text-white">
              Tatalaksana Toksisitas Hati Akut Akibat OAT (DILI Protocol)
            </h4>
          </div>
          <span className="px-3 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40 text-xs font-black uppercase tracking-wider">
            Kriteria Penghentian OAT
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1 text-xs">
          <div className="p-3 rounded-2xl bg-black/40 border border-amber-500/30 space-y-1">
            <span className="font-bold text-amber-300 block">Kriteria Hentikan OAT:</span>
            <p className="text-amber-100/80 leading-relaxed text-[11px]">
              SGOT/SGPT &gt; 3x batas normal &plus; ikterus/mual ATAU SGOT/SGPT &gt; 5x tanpa gejala ATAU Bilirubin total &gt; 2.0 mg/dL.
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-black/40 border border-amber-500/30 space-y-1">
            <span className="font-bold text-amber-300 block">Paduan Pengganti Sementara:</span>
            <p className="text-amber-100/80 leading-relaxed text-[11px]">
              Hentikan R, H, Z. Berikan OAT non-hepatotoksik sementara: <strong>Etambutol &plus; Streptomisin / Levofloksasin</strong>.
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-black/40 border border-amber-500/30 space-y-1">
            <span className="font-bold text-amber-300 block">Re-Challenge Bertahap:</span>
            <p className="text-amber-100/80 leading-relaxed text-[11px]">
              Setelah enzim hepar normal: Masukkan kembali bertahap dimulai dari <strong>Rifampisin</strong>, selang 3–7 hari <strong>Isoniazid</strong>, dan pertimbangkan hindari Pirazinamid.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
