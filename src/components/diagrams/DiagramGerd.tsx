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
  ShieldCheck
} from 'lucide-react';
import { DiseaseFlowchartData } from '../../data/clinicalFlowchartData';

interface DiagramProps {
  currentDisease: DiseaseFlowchartData;
  onDrugClick: (drugName: string) => void;
  onTestRegimen: (drugList: string[]) => void;
}

export const DiagramGerd: React.FC<DiagramProps> = ({
  onDrugClick,
  onTestRegimen
}) => {
  return (
    <div className="space-y-6 bg-gradient-to-b from-[#1c0c03] via-[#291405] to-[#140801] rounded-3xl p-4 sm:p-7 border-2 border-orange-500/30 shadow-2xl relative overflow-hidden text-white font-outfit">
      {/* Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* LEVEL 1: SKRINING ALARM SIGNS vs GEJALA TIPIKAL */}
      <div className="max-w-5xl mx-auto space-y-3 relative z-10">
        <div className="p-4 rounded-3xl bg-gradient-to-r from-[#381604] via-[#4d2007] to-[#381604] border-2 border-orange-400/60 shadow-xl space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-orange-500/30 pb-2">
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-orange-400" />
              <h4 className="text-base font-black text-white">
                Tahap 1: Evaluasi Gejala Heartburn, Regurgitasi, &amp; Skrining Tanda Bahaya
              </h4>
            </div>
            <span className="px-3 py-0.5 rounded-full bg-orange-500/20 text-orange-300 border border-orange-400/40 text-xs font-black uppercase tracking-wider">
              Konsensus PGI-PEGI 2023
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
            <div className="p-3.5 rounded-2xl bg-black/40 border border-emerald-500/30 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-emerald-300 uppercase">Jalur Tipikal: Tanpa Tanda Bahaya</span>
                <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded-md font-bold">Uncomplicated</span>
              </div>
              <p className="text-[11px] text-emerald-100/80 leading-snug">
                Sensasi rasa terbakar di dada (heartburn) dan rasa asam pahit di lidah (regurgitasi) &ge; 2x/minggu. Lakukan <strong>PPI Test empiris 2–4 minggu</strong>.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-black/40 border border-rose-500/30 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-rose-300 uppercase">Jalur Alarm Signs: Rujuk Endoskopi Cito</span>
                <span className="text-[10px] bg-rose-950 text-rose-300 px-2 py-0.5 rounded-md font-bold">Red Flags</span>
              </div>
              <p className="text-[11px] text-rose-100/80 leading-snug">
                Disfagia (sulit menelan), odinofagia, penurunan BB tidak disengaja, muntah darah / melena, anemia defisiensi, usia &gt; 45–50 tahun.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CONNECTING ARROW */}
      <div className="flex flex-col items-center justify-center relative z-10 -my-2">
        <div className="w-0.5 h-6 bg-gradient-to-b from-orange-400 to-amber-500" />
        <div className="w-2.5 h-2.5 border-r-2 border-b-2 border-amber-400 rotate-45 -mt-1.5" />
      </div>

      {/* LEVEL 2: PPI TEST DOSIS GANDA VS P-CAB VONOPRAZAN */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 relative z-10">
        {/* PPI TEST & TERAPI INISIASI */}
        <div className="p-5 rounded-3xl bg-gradient-to-b from-[#2e1305] to-[#1c0a02] border-2 border-orange-500/60 shadow-xl space-y-3">
          <div className="flex items-center justify-between border-b border-orange-800 pb-2">
            <span className="text-xs font-black text-orange-300 uppercase tracking-wide flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-orange-400" />
              Lini 1: PPI Dosis Ganda (4–8 Minggu)
            </span>
            <span className="text-[10px] font-bold bg-orange-950 text-orange-300 px-2 py-0.5 rounded-full border border-orange-600/40">
              30–60 Menit ac
            </span>
          </div>

          <p className="text-xs text-orange-100/90 leading-relaxed">
            Berikan PPI dua kali sehari sebelum makan pagi dan makan malam. Respon gejala berkurang &gt; 50% mengonfirmasi diagnosis klinis GERD.
          </p>

          <div className="space-y-2 pt-1">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => onDrugClick('Lansoprazole')}
                className="px-2.5 py-1.5 rounded-xl bg-orange-500/20 text-orange-200 text-xs font-black border border-orange-400/40 flex items-center gap-1 hover:bg-orange-500/30 transition-all cursor-pointer"
              >
                <Pill className="w-3.5 h-3.5 text-orange-400" />
                <span>Lansoprazole 30 mg 2x/hari</span>
                <ExternalLink className="w-2.5 h-2.5 text-orange-400" />
              </button>

              <button
                onClick={() => onDrugClick('Esomeprazole')}
                className="px-2.5 py-1.5 rounded-xl bg-orange-500/20 text-orange-200 text-xs font-black border border-orange-400/40 flex items-center gap-1 hover:bg-orange-500/30 transition-all cursor-pointer"
              >
                <Pill className="w-3.5 h-3.5 text-orange-400" />
                <span>Esomeprazole 40 mg 1–2x/hari</span>
                <ExternalLink className="w-2.5 h-2.5 text-orange-400" />
              </button>
            </div>

            <p className="text-[10px] text-amber-300 font-semibold pt-1">
              ⚠️ Penting: PPI harus diminum saat perut kosong 30-60 menit sebelum makan agar memblokade pompa proton aktif.
            </p>
          </div>
        </div>

        {/* P-CAB VONOPRAZAN (KASUS REFRAKTER & LA GRADE C/D) */}
        <div className="p-5 rounded-3xl bg-gradient-to-b from-[#2e0915] to-[#1a040b] border-2 border-rose-500/60 shadow-xl space-y-3">
          <div className="flex items-center justify-between border-b border-rose-900 pb-2">
            <span className="text-xs font-black text-rose-300 uppercase tracking-wide flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-rose-400" />
              Eskalasi: P-CAB (Vonoprazan)
            </span>
            <span className="text-[10px] font-bold bg-rose-950 text-rose-300 px-2 py-0.5 rounded-full border border-rose-600/40">
              Untuk Kasus Refrakter
            </span>
          </div>

          <p className="text-xs text-rose-100/90 leading-relaxed">
            Inhibitor pompa kalium kompetitif tanpa butuh aktivasi asam; memberikan supresi asam lambung &gt; 90% selama 24 jam penuh sejak dosis pertama.
          </p>

          <div className="space-y-2 pt-1">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => onDrugClick('Vonoprazan')}
                className="px-2.5 py-1.5 rounded-xl bg-rose-500/20 text-rose-200 text-xs font-black border border-rose-400/40 flex items-center gap-1 hover:bg-rose-500/30 transition-all cursor-pointer"
              >
                <Pill className="w-3.5 h-3.5 text-rose-400" />
                <span>Vonoprazan (Vocinti) 20 mg 1x/hari</span>
                <ExternalLink className="w-2.5 h-2.5 text-rose-400" />
              </button>

              <button
                onClick={() => onDrugClick('Rebamipide')}
                className="px-2.5 py-1.5 rounded-xl bg-rose-500/20 text-rose-200 text-xs font-black border border-rose-400/40 flex items-center gap-1 hover:bg-rose-500/30 transition-all cursor-pointer"
              >
                <Pill className="w-3.5 h-3.5 text-rose-400" />
                <span>Rebamipide 100 mg 3x/hari</span>
                <ExternalLink className="w-2.5 h-2.5 text-rose-400" />
              </button>
            </div>

            <button
              onClick={() => onTestRegimen(['Vonoprazan', 'Rebamipide'])}
              className="text-[11px] font-bold text-rose-300 hover:text-white underline cursor-pointer pt-1 block"
            >
              ➔ Uji Interaksi Regimen P-CAB &plus; Mukoprotektor
            </button>
          </div>
        </div>
      </div>

      {/* CONNECTING ARROW */}
      <div className="flex flex-col items-center justify-center relative z-10 -my-2">
        <div className="w-0.5 h-6 bg-gradient-to-b from-orange-400 to-amber-500" />
        <div className="w-2.5 h-2.5 border-r-2 border-b-2 border-amber-400 rotate-45 -mt-1.5" />
      </div>

      {/* LEVEL 3: TERAPI PEMELIHARAAN (STEPPING DOWN & ON-DEMAND) */}
      <div className="max-w-5xl mx-auto p-4 rounded-3xl bg-gradient-to-r from-[#291304] via-[#3a1b06] to-[#291304] border-2 border-amber-500/60 shadow-xl space-y-3 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-500/30 pb-2">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <h4 className="text-base font-black text-white">
              Strategi Pemeliharaan Jangka Panjang &amp; Komorbid Dispepsia
            </h4>
          </div>
          <span className="px-3 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 text-xs font-black uppercase tracking-wider">
            Resolusi Pasca 8 Minggu
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1 text-xs">
          <div className="p-3 rounded-2xl bg-black/40 border border-amber-500/30 space-y-1">
            <span className="font-bold text-amber-300 block">1. Terapi On-Demand (NERD / Esofagitis A-B):</span>
            <p className="text-amber-100/80 leading-relaxed text-[11px]">
              Hentikan minum obat harian; pasien hanya meminum <strong>Lansoprazole 15–30 mg saat timbul gejala</strong> kekambuhan.
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-black/40 border border-amber-500/30 space-y-1">
            <span className="font-bold text-amber-300 block">2. Terapi Kontinu (Esofagitis C-D):</span>
            <p className="text-amber-100/80 leading-relaxed text-[11px]">
              Lanjutkan dosis pemeliharaan terendah efektif (PPI dosis standar atau Vonoprazan 10 mg 1x/hari) untuk mencegah striktur dan esofagus Barrett.
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-black/40 border border-amber-500/30 space-y-1">
            <span className="font-bold text-amber-300 block">3. Tambahan Prokinetik (Bila Begah/PDS):</span>
            <p className="text-amber-100/80 leading-relaxed text-[11px]">
              Kombinasikan dengan <strong>Domperidone 10 mg 3x/hari ac</strong> (maksimal 7 hari) jika ada keluhan rasa cepat kenyang dan kembung.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
