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

export const DiagramAsthma: React.FC<DiagramProps> = ({
  onDrugClick,
  onTestRegimen
}) => {
  return (
    <div className="space-y-6 bg-gradient-to-b from-[#021724] via-[#04243b] to-[#021420] rounded-3xl p-4 sm:p-7 border-2 border-cyan-500/30 shadow-2xl relative overflow-hidden text-white font-outfit">
      {/* Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* ================================================================= */}
      {/* LEVEL 1: PENILAIAN KENDALI GEJALA & REVOLUSI GINA 2024            */}
      {/* ================================================================= */}
      <div className="max-w-5xl mx-auto space-y-3 relative z-10">
        <div className="p-4 rounded-3xl bg-gradient-to-r from-[#05293d] via-[#093c59] to-[#05293d] border-2 border-cyan-400/60 shadow-xl space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-cyan-500/30 pb-2">
            <div className="flex items-center gap-2">
              <Wind className="w-5 h-5 text-cyan-400" />
              <h4 className="text-base font-black text-white">
                Tahap 1: Penilaian Derajat Kendali Gejala &amp; Skrining Risiko Eksaserbasi (GINA 2024)
              </h4>
            </div>
            <span className="px-3 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 text-xs font-black uppercase tracking-wider">
              Konsensus PDPI / GINA 2024
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
            <div className="p-3.5 rounded-2xl bg-black/40 border border-cyan-500/30 space-y-1.5">
              <span className="text-xs font-black text-cyan-300 uppercase">4 Pertanyaan Penilaian 4 Minggu Terakhir:</span>
              <ul className="text-xs text-cyan-100/80 space-y-1">
                <li>1. Gejala siang hari &gt; 2 kali seminggu?</li>
                <li>2. Terbangun malam hari karena sesak/batuk?</li>
                <li>3. Butuh pelega (reliever) &gt; 2 kali seminggu?</li>
                <li>4. Aktivitas fisik harian terganggu oleh asma?</li>
              </ul>
              <div className="text-[10px] text-cyan-200 bg-cyan-950/60 p-2 rounded-lg border border-cyan-500/30">
                Skor: 0 (Terkontrol Baik) | 1-2 (Terkontrol Sebagian) | 3-4 (Tidak Terkontrol)
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-rose-950/60 border border-rose-500/60 space-y-1.5">
              <div className="flex items-center gap-1.5 text-rose-300 font-black text-xs uppercase">
                <AlertTriangle className="w-4 h-4 text-rose-400" />
                <span>Peringatan Paradigma Baru GINA: Monoterapi SABA Dilarang!</span>
              </div>
              <p className="text-xs text-rose-100/90 leading-relaxed">
                Penggunaan SABA monoterapi (tanpa kortikosteroid inhalasi) meningkatkan risiko serangan eksaserbasi berat, penurunan fungsi paru jangka panjang, dan kematian fatal. <strong>Semua pasien asma wajib mendapat ICS!</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CONNECTING ARROW 1 */}
      <div className="flex flex-col items-center justify-center relative z-10 -my-2">
        <div className="w-0.5 h-7 bg-gradient-to-b from-cyan-400 to-sky-500" />
        <div className="w-2.5 h-2.5 border-r-2 border-b-2 border-sky-400 rotate-45 -mt-1.5" />
      </div>

      {/* ================================================================= */}
      {/* LEVEL 2: DUA JALUR UTAMA GINA (TRACK 1 PILIHAN UTAMA VS TRACK 2)   */}
      {/* ================================================================= */}
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="p-5 rounded-3xl bg-gradient-to-r from-[#031d2e] via-[#07304d] to-[#031d2e] border-2 border-sky-500/70 shadow-2xl space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-sky-500/30 pb-2">
            <div>
              <h4 className="text-base font-black text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-sky-400" />
                <span>Tahap 2: Pemilihan Jalur Terapi: Track 1 (Preferred) vs Track 2 (Alternative)</span>
              </h4>
              <p className="text-xs text-sky-200/80">
                Track 1 menggunakan ICS-Formoterol sebagai pelega dan pengontrol tunggal (Strategi MART)
              </p>
            </div>
            <button
              onClick={() => onTestRegimen(['Budesonide/Formoterol', 'Tiotropium'])}
              className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-400 hover:to-sky-500 text-slate-950 font-black text-xs shadow-md flex items-center gap-1.5 cursor-pointer self-start sm:self-auto"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Uji Regimen MART Asma</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Track 1: Preferred MART */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-[#06334a] to-[#042033] border-2 border-emerald-400/80 shadow-lg space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black bg-emerald-500 text-slate-950 px-2.5 py-0.5 rounded-md uppercase">
                  TRACK 1 (PILIHAN UTAMA GINA)
                </span>
                <span className="text-[10px] font-bold text-emerald-300">Menurunkan Eksaserbasi 60%</span>
              </div>
              <h5 className="text-sm font-black text-white">ICS-Formoterol Dosis Rendah Sebagai Pelega &amp; Pengontrol Tunggal (MART)</h5>
              <p className="text-xs text-emerald-100/80 leading-relaxed">
                Kombinasi Budesonide/Formoterol (160/4.5 mcg). Pasien cukup membawa 1 jenis inhaler: dihisap untuk kontrol harian dan dihisap ekstra bila sesak timbul. Begitu sesak dipicu, anti-inflamasi steroid ikut terhirup otomatis!
              </p>
              <div className="pt-1">
                <button
                  onClick={() => onDrugClick('Budesonide/Formoterol')}
                  className="px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-200 text-xs font-black border border-emerald-500/40 flex items-center gap-1.5 cursor-pointer"
                >
                  <span>💊 Budesonide / Formoterol (Symbicort)</span>
                  <ExternalLink className="w-3 h-3 text-emerald-400" />
                </button>
              </div>
            </div>

            {/* Track 2: Alternative SABA */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-[#072437] to-[#041926] border-2 border-amber-400/60 shadow-lg space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black bg-amber-500 text-slate-950 px-2.5 py-0.5 rounded-md uppercase">
                  TRACK 2 (ALTERNATIF)
                </span>
                <span className="text-[10px] font-bold text-amber-300">Bila Track 1 Tidak Tersedia</span>
              </div>
              <h5 className="text-sm font-black text-white">SABA Sebagai Pelega + ICS Rumatan Harian Terpisah</h5>
              <p className="text-xs text-amber-100/80 leading-relaxed">
                Pelega Salbutamol 100 mcg PRN, namun <strong>WAJIB selalu didampingi ICS reguler</strong> (Fluticasone atau Budesonide). SABA hanya untuk merelaksasi otot bronkus, tidak memadamkan inflamasi saluran napas.
              </p>
              <div className="pt-1">
                <button
                  onClick={() => onDrugClick('Salbutamol')}
                  className="px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 text-xs font-black border border-amber-500/40 flex items-center gap-1.5 cursor-pointer"
                >
                  <span>💊 Salbutamol Inhaler (Ventolin)</span>
                  <ExternalLink className="w-3 h-3 text-amber-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONNECTING ARROW 2 */}
      <div className="flex flex-col items-center justify-center relative z-10 -my-2">
        <div className="w-0.5 h-7 bg-gradient-to-b from-sky-500 to-indigo-500" />
        <div className="w-2.5 h-2.5 border-r-2 border-b-2 border-indigo-400 rotate-45 -mt-1.5" />
      </div>

      {/* ================================================================= */}
      {/* LEVEL 3: TANGGA 5 LANGKAH GINA (STEPS 1 - 5)                      */}
      {/* ================================================================= */}
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="p-5 rounded-3xl bg-gradient-to-r from-[#051d38] via-[#092b52] to-[#051d38] border-2 border-indigo-500/60 shadow-xl space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-base font-black text-white flex items-center gap-2">
              <Activity className="w-5 h-5 text-indigo-400" />
              <span>Tahap 3: Tangga Eskalasi Terapi 5 Langkah (GINA Steps 1 - 5)</span>
            </h4>
            <span className="text-[10px] font-black bg-indigo-500 text-white px-2 py-0.5 rounded">
              Stepwise Escalation
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 pt-1">
            <div className="p-3 rounded-2xl bg-black/40 border border-indigo-500/30 space-y-1">
              <span className="text-[10px] font-black bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded block w-max">
                STEP 1 - 2
              </span>
              <h6 className="text-xs font-black text-white">Gejala Jarang</h6>
              <p className="text-[10px] text-indigo-100/70 leading-snug">
                ICS-Formoterol dosis rendah <strong>hanya saat butuh (PRN)</strong> untuk meredakan gejala.
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-black/40 border border-indigo-500/30 space-y-1">
              <span className="text-[10px] font-black bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded block w-max">
                STEP 3
              </span>
              <h6 className="text-xs font-black text-white">Gejala Sebagian Hari</h6>
              <p className="text-[10px] text-indigo-100/70 leading-snug">
                ICS-Formoterol dosis rendah rumatan harian (1x1 atau 1x2) + ekstra PRN saat sesak.
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-black/40 border border-indigo-500/30 space-y-1">
              <span className="text-[10px] font-black bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded block w-max">
                STEP 4
              </span>
              <h6 className="text-xs font-black text-white">Gejala Harian / Malam</h6>
              <p className="text-[10px] text-indigo-100/70 leading-snug">
                Tingkatkan ke ICS-Formoterol dosis sedang rumatan (160/4.5 2x2) + ekstra PRN.
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-black/40 border border-indigo-500/30 space-y-1">
              <span className="text-[10px] font-black bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded block w-max">
                STEP 5: ADD-ON LAMA
              </span>
              <h6 className="text-xs font-black text-white">Triple Therapy Inhalasi</h6>
              <p className="text-[10px] text-indigo-100/70 leading-snug">
                Tambahkan <strong>Tiotropium Respimat 5 mcg</strong> (LAMA) untuk blokade bronkokonstriksi kolinergik.
              </p>
              <button
                onClick={() => onDrugClick('Tiotropium')}
                className="text-[9px] text-indigo-300 hover:text-white font-bold underline cursor-pointer"
              >
                Cek Tiotropium
              </button>
            </div>

            <div className="p-3 rounded-2xl bg-black/40 border border-purple-500/40 space-y-1">
              <span className="text-[10px] font-black bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded block w-max">
                STEP 5: BIOLOGIS
              </span>
              <h6 className="text-xs font-black text-white">Asma Berat Tipe 2</h6>
              <p className="text-[10px] text-purple-100/70 leading-snug">
                Evaluasi fenotipe eosinofil / IgE: Omalizumab (Anti-IgE), Mepolizumab (Anti-IL5), Dupilumab.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CONNECTING ARROW 3 */}
      <div className="flex flex-col items-center justify-center relative z-10 -my-2">
        <div className="w-0.5 h-7 bg-gradient-to-b from-indigo-500 to-rose-500" />
        <div className="w-2.5 h-2.5 border-r-2 border-b-2 border-rose-400 rotate-45 -mt-1.5" />
      </div>

      {/* ================================================================= */}
      {/* LEVEL 4: TATALAKSANA SERANGAN AKUT / EKSASERBASI DI FASKES         */}
      {/* ================================================================= */}
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="p-5 rounded-3xl bg-gradient-to-r from-[#260a14] via-[#3a0e1e] to-[#260a14] border-2 border-rose-500/60 shadow-xl space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-base font-black text-white flex items-center gap-2">
              <Flame className="w-5 h-5 text-rose-400" />
              <span>Tahap 4: Tatalaksana Serangan Eksaserbasi Asma Akut di Faskes / IGD</span>
            </h4>
            <span className="text-[10px] font-black bg-rose-500 text-white px-2 py-0.5 rounded">
              Emergency Protocol
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-black/40 border border-rose-500/30 space-y-1">
              <span className="text-[10px] font-bold text-rose-300">1. Oksigen Terkontrol</span>
              <h6 className="text-xs font-black text-white">Nasal Kanul / Masker</h6>
              <p className="text-[10px] text-rose-100/70">
                Target SpO2 93 - 95% (pada anak/wanita hamil 94 - 98%). Hindari hiperoksia agresif.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-black/40 border border-rose-500/30 space-y-1">
              <span className="text-[10px] font-bold text-rose-300">2. Bronkodilator Inhalasi Cito</span>
              <h6 className="text-xs font-black text-white">Salbutamol + Ipratropium</h6>
              <p className="text-[10px] text-rose-100/70">
                Nebulisasi Salbutamol 2.5-5 mg + Ipratropium Bromida 0.5 mg tiap 20 menit dalam 1 jam pertama.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-black/40 border border-rose-500/30 space-y-1">
              <span className="text-[10px] font-bold text-rose-300">3. Steroid Sistemik</span>
              <h6 className="text-xs font-black text-white">Metilprednisolon Oral / IV</h6>
              <p className="text-[10px] text-rose-100/70">
                Metilprednisolon 32-40 mg oral (atau hidrokortison IV bila tidak bisa menelan) selama 5-7 hari tanpa tapering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
