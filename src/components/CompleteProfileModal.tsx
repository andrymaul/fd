import React, { useState } from 'react';
import { UserProfile } from '../types';
import { 
  Building2, 
  Phone, 
  User, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  LogOut, 
  X, 
  Sparkles, 
  Save, 
  Loader2 
} from 'lucide-react';

interface CompleteProfileModalProps {
  currentUser: UserProfile;
  isMandatory: boolean;
  onSave: (updatedProfile: UserProfile) => Promise<void> | void;
  onClose: () => void;
  onLogout?: () => void;
}

export const CompleteProfileModal: React.FC<CompleteProfileModalProps> = ({
  currentUser,
  isMandatory,
  onSave,
  onClose,
  onLogout
}) => {
  const defaultName = currentUser.name && currentUser.name !== currentUser.email?.split('@')[0]
    ? currentUser.name
    : '';

  const [name, setName] = useState(defaultName || currentUser.name || '');
  const [institution, setInstitution] = useState(currentUser.institution || '');
  const [phone, setPhone] = useState(currentUser.phone || '');
  const [licenseNumber, setLicenseNumber] = useState(currentUser.licenseNumber || '');
  
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const cleanName = name.trim();
    const cleanInstitution = institution.trim();
    const cleanPhone = phone.trim();
    const cleanLicense = licenseNumber.trim();

    if (!cleanName || cleanName.length < 2) {
      setError('Mohon masukkan nama lengkap Anda (minimal 2 karakter).');
      return;
    }

    if (!cleanInstitution || cleanInstitution.length < 2) {
      setError('Mohon masukkan nama instansi atau institusi Anda.');
      return;
    }

    if (!cleanPhone || cleanPhone.length < 8) {
      setError('Mohon masukkan nomor WhatsApp atau nomor telepon aktif yang valid (minimal 8 digit).');
      return;
    }

    setSaving(true);
    try {
      const updatedProfile: UserProfile = {
        ...currentUser,
        name: cleanName,
        institution: cleanInstitution,
        phone: cleanPhone,
        licenseNumber: cleanLicense
      };

      await onSave(updatedProfile);
      setSuccess(true);
      setTimeout(() => {
        onClose();
      }, 1000);
    } catch (err: any) {
      setError(err?.message || 'Gagal menyimpan profil. Silakan coba lagi.');
      setSaving(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={() => {
        if (!isMandatory) onClose();
      }}
    >
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden text-slate-800 animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Clean Minimalist Header */}
        <div className="px-6 pt-6 pb-4 border-b border-slate-100 flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-teal-50 border border-teal-200/80 text-teal-700 flex items-center justify-center font-bold shrink-0 shadow-2xs">
              <User className="w-5 h-5 text-teal-600" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-black tracking-tight font-outfit text-slate-900">
                  {isMandatory ? 'Lengkapi Data Profil' : 'Pengaturan Profil'}
                </h2>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-teal-50 text-teal-700 border border-teal-200 uppercase tracking-wider font-outfit">
                  {currentUser.subscriptionPlan || 'Pro'}
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5 font-medium">
                {isMandatory 
                  ? 'Lengkapi data untuk validasi identitas & laporan klinis' 
                  : 'Perbarui nama, instansi, kontak, dan izin praktik Anda'}
              </p>
            </div>
          </div>

          {!isMandatory && (
            <button
              type="button"
              onClick={onClose}
              className="text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-colors cursor-pointer shrink-0"
              title="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-4 max-h-[80vh] overflow-y-auto custom-scrollbar text-xs">
          
          {/* User Account Quick Info Card */}
          <div className="flex items-center justify-between px-3.5 py-2.5 bg-slate-50/90 rounded-2xl border border-slate-200/70">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-8.5 h-8.5 rounded-full bg-gradient-to-tr from-teal-700 via-teal-600 to-emerald-500 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-xs border border-white/60">
                {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : 'U'}
              </div>
              <div className="min-w-0">
                <p className="font-bold text-xs text-slate-900 truncate font-outfit">
                  {currentUser.name || 'Pengguna FarmasiDruggist'}
                </p>
                <p className="text-[11px] text-slate-500 truncate font-mono">
                  {currentUser.email}
                </p>
              </div>
            </div>
            <span className="text-[10px] font-semibold text-slate-400 bg-white px-2 py-0.5 rounded-md border border-slate-200 shrink-0 font-mono">
              Akun Aktif
            </span>
          </div>

          {/* Mandatory Alert Notice */}
          {isMandatory && (
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-2xl flex items-start gap-2.5 text-amber-900">
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-[11px] leading-relaxed text-amber-800">
                Data <strong>Instansi</strong> dan <strong>No. WhatsApp</strong> digunakan untuk mencetak kop resep klinis & validasi akun Anda.
              </p>
            </div>
          )}

          {/* Success Banner */}
          {success && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl flex items-center gap-2 font-bold animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Profil berhasil disimpan! Menutup...</span>
            </div>
          )}

          {/* Error Banner */}
          {error && (
            <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl flex items-center gap-2 font-bold">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3.5">
            {/* Nama Lengkap */}
            <div>
              <label className="block text-slate-700 font-bold mb-1 font-outfit">
                Nama Lengkap & Gelar
              </label>
              <div className="relative flex items-center">
                <User className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Contoh: apt. Andry Maulana, S.Farm"
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-semibold focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-all"
                />
              </div>
            </div>

            {/* Instansi & WhatsApp (2-Col Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Instansi / Institusi */}
              <div>
                <label className="block text-slate-700 font-bold mb-1 font-outfit">
                  Instansi / Faskes
                </label>
                <div className="relative flex items-center">
                  <Building2 className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
                  <input
                    type="text"
                    required
                    value={institution}
                    onChange={(e) => setInstitution(e.target.value)}
                    placeholder="Contoh: RS Farist / PT Farist / Dinkes / Apotek FD / Universitas Farist"
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-semibold focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* No. WhatsApp / HP */}
              <div>
                <label className="block text-slate-700 font-bold mb-1 font-outfit">
                  No. WhatsApp / HP
                </label>
                <div className="relative flex items-center">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Contoh: 0812-3456-7890"
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-semibold focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Nomor SIPA / SIP / STR (Opsional) */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-slate-700 font-bold font-outfit">
                  Nomor SIPA / SIP / STR / Izin Praktik
                </label>
                <span className="text-[10px] text-slate-400 font-medium">Opsional</span>
              </div>
              <div className="relative flex items-center">
                <FileText className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
                <input
                  type="text"
                  value={licenseNumber}
                  onChange={(e) => setLicenseNumber(e.target.value)}
                  placeholder="Contoh: SIPA: 19920814/SIPA_31.74/2023/2019"
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none transition-all"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
              {isMandatory ? (
                onLogout ? (
                  <button
                    type="button"
                    onClick={onLogout}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition-colors font-bold cursor-pointer font-outfit"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Keluar (Logout)</span>
                  </button>
                ) : <div />
              ) : (
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 font-bold transition-colors cursor-pointer font-outfit"
                >
                  Batal
                </button>
              )}

              <button
                type="submit"
                disabled={saving || success}
                className="flex-1 sm:flex-initial px-5 py-2.5 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 disabled:opacity-70 text-white font-bold rounded-xl shadow-xs hover:shadow-teal-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer font-outfit active:scale-95"
              >
                {saving ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Menyimpan...</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    <span>{isMandatory ? 'Simpan & Buka Dashboard' : 'Simpan Perubahan'}</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
