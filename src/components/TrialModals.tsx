import React from 'react';
import { X, Sparkles, Clock, CheckCircle2, ShieldCheck, ArrowRight, Zap, Check } from 'lucide-react';

interface TrialConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => Promise<void> | void;
  loading?: boolean;
}

export const TrialConfirmModal: React.FC<TrialConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  loading = false
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white dark:bg-[#071c21] rounded-3xl shadow-2xl border border-amber-300 dark:border-amber-500/30 p-6 sm:p-8 space-y-6 overflow-hidden">
        {/* Glow ambient */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          disabled={loading}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Icon & Title */}
        <div className="text-center space-y-3 relative z-10">
          <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-amber-400 to-amber-500 text-slate-950 flex items-center justify-center shadow-lg shadow-amber-400/30 mx-auto">
            <Sparkles className="w-8 h-8 fill-slate-950" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-950 dark:text-amber-200 text-xs font-black border border-amber-300 dark:border-amber-800">
            <Clock className="w-3.5 h-3.5" />
            <span>Masa Berlaku 3 Hari (72 Jam Penuh)</span>
          </div>

          <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Aktifkan Uji Coba Paket Pro
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-md mx-auto">
            Rasakan langsung seluruh kemudahan kerja klinis dengan akses penuh tanpa batas ke 15+ modul unggulan Farmasi Druggist.
          </p>
        </div>

        {/* Highlight Features */}
        <div className="relative z-10 bg-slate-50 dark:bg-[#051317] p-4 rounded-2xl border border-slate-200 dark:border-slate-800/80 space-y-2.5 text-xs">
          <p className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span>Yang Langsung Terbuka Selama 72 Jam:</span>
          </p>
          <ul className="space-y-1.5 text-slate-600 dark:text-slate-300 font-medium">
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>Kalkulator Dosis Pediatrik & Konversi Puyer / Sirup</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>Skrining Kompatibilitas Injeksi IV & Y-Site Co-Infusion</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>Simulasi CBT 1.130+ Soal Kasus UKMPPAI & UKTVF</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>Kalkulator Penyesuaian Dosis Ginjal (CrCl) & Skor Hepar</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>Kartu PIO Edukasi Pasien Siap Kirim via WhatsApp</span>
            </li>
          </ul>
        </div>

        {/* Terms note */}
        <div className="relative z-10 p-3 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 text-[11px] text-amber-900 dark:text-amber-200/90 leading-relaxed">
          <strong>Catatan:</strong> Uji coba berlaku 72 jam sejak diaktifkan dan hanya dapat diklaim <strong>1 kali per akun</strong>. Setelah 3 hari, akun otomatis kembali ke paket Starter tanpa dipungut biaya apapun.
        </div>

        {/* Action Buttons */}
        <div className="relative z-10 flex flex-col sm:flex-row gap-2 pt-1">
          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition-colors cursor-pointer"
          >
            Nanti Saja
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={loading}
            className="flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-xs shadow-lg shadow-amber-400/25 flex items-center justify-center gap-2 transition-all cursor-pointer hover:scale-[1.02]"
          >
            {loading ? (
              <span>Mengaktifkan...</span>
            ) : (
              <>
                <Sparkles className="w-4 h-4 fill-slate-950" />
                <span>Mulai Uji Coba Pro 3 Hari Sekarang</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

interface TrialExpiredModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPricingModal: () => void;
}

export const TrialExpiredModal: React.FC<TrialExpiredModalProps> = ({
  isOpen,
  onClose,
  onOpenPricingModal
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white dark:bg-[#071c21] rounded-3xl shadow-2xl border border-slate-200 dark:border-teal-500/20 p-6 sm:p-8 space-y-6 overflow-hidden text-center">
        {/* Glow ambient */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Icon & Title */}
        <div className="space-y-3 relative z-10">
          <div className="w-16 h-16 rounded-3xl bg-teal-50 dark:bg-teal-950/80 border border-teal-200 dark:border-teal-700/60 text-teal-600 dark:text-teal-400 flex items-center justify-center mx-auto shadow-md">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold">
            <Clock className="w-3.5 h-3.5 text-amber-500" />
            <span>Masa Uji Coba Selesai</span>
          </div>

          <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Masa Uji Coba 3 Hari Telah Berakhir
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-md mx-auto">
            Terima kasih telah mencoba fitur klinis <strong>Farmasi Druggist</strong>! Akun Anda kini kembali ke <strong>Paket Starter (Gratis)</strong>. Seluruh data riwayat penapisan Anda tetap tersimpan dengan aman.
          </p>
        </div>

        {/* Promo Price Offer Box */}
        <div className="relative z-10 p-4 rounded-2xl bg-gradient-to-r from-teal-50/80 via-emerald-50/80 to-teal-50/80 dark:from-teal-950/40 dark:via-emerald-950/40 dark:to-teal-950/40 border border-teal-300 dark:border-teal-700/60 text-center space-y-1">
          <div className="flex items-center justify-center gap-2">
            <span className="text-xs line-through text-slate-400 font-bold decoration-rose-500 decoration-2">
              Rp 999.000 / tahun
            </span>
            <span className="bg-rose-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-2xs">
              Hemat 80%
            </span>
          </div>
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-3xl font-black text-teal-800 dark:text-teal-200">
              Rp 199.000
            </span>
            <span className="text-xs font-bold text-slate-600 dark:text-slate-300">
              / tahun
            </span>
          </div>
          <p className="text-[11px] text-teal-700 dark:text-teal-300 font-bold">
            Hanya ~Rp 16.500 / bulan (Aktif 365 Hari Penuh)
          </p>
        </div>

        {/* Action Buttons */}
        <div className="relative z-10 flex flex-col sm:flex-row gap-2 pt-1">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition-colors cursor-pointer"
          >
            Lanjut Pakai Starter
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenPricingModal();
            }}
            className="flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-black text-xs shadow-md shadow-teal-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer hover:scale-[1.02]"
          >
            <span>Upgrade ke Pro Sekarang</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
