import React, { useState, useEffect } from 'react';
import { UserProfile } from '../types';
import { 
  CheckCircle2, 
  AlertCircle, 
  ArrowLeft, 
  Save, 
  Loader2, 
  ShieldCheck, 
  CreditCard, 
  Mail,
  LogOut
} from 'lucide-react';
import { PROFESSION_GROUPS, getLicenseFieldConfig } from '../data/professionData';

interface SettingsPageProps {
  currentUser: UserProfile | null;
  onSave: (updatedProfile: UserProfile) => Promise<void> | void;
  onSelectTab: (tab: string) => void;
  onLogout?: () => void;
  isTrialActive?: boolean;
  trialRemainingText?: string;
}

export const SettingsPage: React.FC<SettingsPageProps> = ({
  currentUser,
  onSave,
  onSelectTab,
  onLogout,
  isTrialActive = false,
  trialRemainingText = ''
}) => {
  const defaultName = currentUser?.name && currentUser?.name !== currentUser?.email?.split('@')[0]
    ? currentUser.name
    : '';

  const [name, setName] = useState(defaultName || currentUser?.name || '');
  const [institution, setInstitution] = useState(currentUser?.institution || '');
  const [phone, setPhone] = useState(currentUser?.phone || '');
  const [profession, setProfession] = useState(currentUser?.profession || 'Apoteker - Rumah Sakit / Klinik');
  const [licenseNumber, setLicenseNumber] = useState(currentUser?.licenseNumber || '');
  
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name || '');
      setInstitution(currentUser.institution || '');
      setPhone(currentUser.phone || '');
      setLicenseNumber(currentUser.licenseNumber || '');
      if (currentUser.profession) {
        setProfession(currentUser.profession);
      }
    }
  }, [currentUser]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser) return;
    setError(null);
    setSuccess(false);

    const cleanName = name.trim();
    const cleanInstitution = institution.trim();
    const cleanPhone = phone.trim();
    const cleanLicense = licenseNumber.trim();

    if (!cleanName || cleanName.length < 2) {
      setError('Mohon masukkan nama lengkap Anda (minimal 2 karakter).');
      return;
    }

    if (!cleanInstitution || cleanInstitution.length < 2) {
      setError('Mohon masukkan nama instansi atau fasilitas kesehatan Anda.');
      return;
    }

    if (!cleanPhone || cleanPhone.length < 8) {
      setError('Mohon masukkan nomor WhatsApp atau telepon aktif yang valid (minimal 8 digit).');
      return;
    }

    setSaving(true);
    try {
      const updatedProfile: UserProfile = {
        ...currentUser,
        name: cleanName,
        institution: cleanInstitution,
        phone: cleanPhone,
        profession: profession,
        licenseNumber: cleanLicense
      };

      await onSave(updatedProfile);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3500);
    } catch (err: any) {
      setError(err?.message || 'Gagal menyimpan profil. Silakan coba lagi.');
    } finally {
      setSaving(false);
    }
  };

  const planLabel = currentUser?.role === 'admin' 
    ? 'Administrator' 
    : isTrialActive 
      ? 'Trial Pro' 
      : (currentUser?.subscriptionPlan || 'Free');

  const licenseConfig = getLicenseFieldConfig(profession);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-6 animate-in fade-in duration-150">
      
      {/* Top Navigation & Breadcrumb */}
      <div>
        <a
          href="/dashboard"
          onClick={(e) => {
            if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
              e.preventDefault();
              onSelectTab('dashboard');
            }
          }}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200 text-xs font-bold font-outfit shadow-2xs transition-all cursor-pointer hover:scale-[1.02]"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Kembali ke Dashboard</span>
        </a>
      </div>

      {/* Page Title */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-outfit">
          Pengaturan Akun & Profil
        </h1>
      </div>

      {/* Card 1: User Account & Subscription Status */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3.5 min-w-0">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-teal-700 via-teal-600 to-emerald-500 text-white font-black text-base flex items-center justify-center shrink-0 shadow-xs border border-white/60 font-outfit">
              {currentUser?.name ? currentUser.name.charAt(0).toUpperCase() : 'U'}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="font-bold text-sm sm:text-base text-slate-900 truncate font-outfit">
                  {currentUser?.name || 'Pengguna FarmasiDruggist'}
                </h2>
                {currentUser?.profession && (
                  <span className="text-[10px] font-bold text-teal-800 bg-teal-50 border border-teal-200/80 px-2 py-0.5 rounded-full shrink-0 font-outfit">
                    {currentUser.profession}
                  </span>
                )}
                <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full border shrink-0 font-outfit ${
                  currentUser?.role === 'admin'
                    ? 'bg-amber-50 text-amber-800 border-amber-300'
                    : isTrialActive
                      ? 'bg-cyan-50 text-cyan-800 border-cyan-300'
                      : 'bg-teal-50 text-teal-800 border-teal-200'
                }`}>
                  {planLabel}
                </span>
              </div>
              <p className="text-xs text-slate-500 truncate mt-0.5 font-mono flex items-center gap-1.5">
                <Mail className="w-3 h-3 text-slate-400" />
                <span>{currentUser?.email || '-'}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href="/pricing"
              onClick={(e) => {
                if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
                  e.preventDefault();
                  onSelectTab('pricing');
                }
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-orange-50 hover:bg-orange-100 text-orange-700 border border-orange-200 text-xs font-bold font-outfit shadow-2xs transition-all cursor-pointer"
            >
              <CreditCard className="w-3.5 h-3.5" />
              <span>Kelola Paket / Upgrade</span>
            </a>
          </div>
        </div>

        {/* Subscription Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs">
          <div className="p-3 bg-slate-50/80 rounded-2xl border border-slate-200/70">
            <p className="text-[11px] font-semibold text-slate-400 font-outfit">Paket Berlangganan</p>
            <p className="font-black text-slate-900 font-outfit mt-0.5">{planLabel}</p>
          </div>

          <div className="p-3 bg-slate-50/80 rounded-2xl border border-slate-200/70">
            <p className="text-[11px] font-semibold text-slate-400 font-outfit">Masa Aktif Layanan</p>
            <p className="font-black text-slate-900 font-outfit mt-0.5">
              {isTrialActive 
                ? (trialRemainingText || 'Aktif (Masa Trial)')
                : currentUser?.role === 'admin'
                  ? 'Akses Penuh Administrator'
                  : 'Aktif'}
            </p>
          </div>

          <div className="p-3 bg-slate-50/80 rounded-2xl border border-slate-200/70">
            <p className="text-[11px] font-semibold text-slate-400 font-outfit">Status Akun</p>
            <p className="font-black text-emerald-700 font-outfit mt-0.5 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Terverifikasi & Aktif</span>
            </p>
          </div>
        </div>
      </div>

      {/* Card 2: Form Edit Profile */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-xs space-y-4">
        <div>
          <h2 className="text-base font-black tracking-tight text-slate-900 font-outfit">
            Informasi Pribadi & Legalitas Praktik
          </h2>
          <p className="text-xs text-slate-500 mt-0.5 font-medium font-outfit">
            Data ini digunakan untuk identitas pencetakan etiket, kop laporan resep klinis, dan bukti telusur akreditasi faskes.
          </p>
        </div>

        {/* Feedback Banners */}
        {success && (
          <div className="p-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl flex items-center gap-2.5 font-bold animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="text-xs">Profil Anda berhasil diperbarui dan disimpan ke cloud!</span>
          </div>
        )}

        {error && (
          <div className="p-3.5 bg-rose-50 border border-rose-200 text-rose-700 rounded-2xl flex items-center gap-2.5 font-bold animate-in fade-in">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            <span className="text-xs">{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 pt-1">
          {/* Grid 2 Kolom: Nama Lengkap & Profesi / Peran Tenaga Kesehatan */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 font-outfit">
                Nama Lengkap & Gelar Klinis
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Contoh: apt. Andry Maulana, S.Farm"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 font-semibold focus:bg-white focus:border-teal-600 focus:outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 font-outfit">
                Profesi / Peran Tenaga Kesehatan
              </label>
              <select
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 font-semibold focus:bg-white focus:border-teal-600 focus:outline-none transition-all cursor-pointer font-outfit"
              >
                {PROFESSION_GROUPS.map((group) => (
                  <optgroup key={group.group} label={`── ${group.group} ──`} className="font-bold text-slate-800 bg-white">
                    {group.options.map((opt) => (
                      <option key={opt.id} value={opt.id} className="font-normal text-slate-700 py-1">
                        {opt.label}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>
          </div>

          {/* 2-Column Grid: Instansi & WhatsApp */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Instansi */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-bold text-slate-700 font-outfit">
                  Instansi / Tempat Bertugas / Perusahaan
                </label>
                <span className="text-[10px] text-slate-400 font-medium font-outfit">(Opsional / Kampus / Mandiri)</span>
              </div>
              <input
                type="text"
                required
                value={institution}
                onChange={(e) => setInstitution(e.target.value)}
                placeholder="Contoh: RS Farist / PT Farist / Dinkes / Apotek FD / Universitas Farist"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 font-semibold focus:bg-white focus:border-teal-600 focus:outline-none transition-all"
              />
            </div>

            {/* Nomor WhatsApp */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 font-outfit">
                Nomor WhatsApp / HP Aktif
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Contoh: 0812-3456-7890"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 font-semibold focus:bg-white focus:border-teal-600 focus:outline-none transition-all"
              />
            </div>
          </div>

          {/* Nomor Izin Praktik / STR / Identitas Profesi */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-bold text-slate-700 font-outfit">
                {licenseConfig.label}
              </label>
              <span className="text-[10px] text-slate-400 font-semibold font-outfit">Opsional</span>
            </div>
            <input
              type="text"
              value={licenseNumber}
              onChange={(e) => setLicenseNumber(e.target.value)}
              placeholder={licenseConfig.placeholder}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 font-medium focus:bg-white focus:border-teal-600 focus:outline-none transition-all"
            />
            <p className="text-[11px] text-slate-400 mt-1 font-medium font-outfit">
              {licenseConfig.description}
            </p>
          </div>

          {/* Submit Button */}
          <div className="pt-2 flex justify-end">
            <button
              type="submit"
              disabled={saving}
              className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 disabled:opacity-70 text-white font-bold rounded-xl shadow-xs hover:shadow-teal-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer font-outfit active:scale-95 text-xs sm:text-sm"
            >
              {saving ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Menyimpan...</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Simpan Perubahan</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Card 3: Account Session & Logout */}
      {onLogout && (
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-bold text-slate-900 font-outfit">
              Sesi Masuk Akun
            </h3>
            <p className="text-xs text-slate-500 mt-0.5 font-medium font-outfit">
              Keluar dari akun Anda pada perangkat ini jika ingin beralih pengguna.
            </p>
          </div>

          <button
            type="button"
            onClick={onLogout}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-rose-600 hover:bg-rose-50 border border-rose-200/80 text-xs font-bold font-outfit transition-colors cursor-pointer shrink-0"
          >
            <LogOut className="w-4 h-4" />
            <span>Keluar dari Akun (Sign Out)</span>
          </button>
        </div>
      )}

    </div>
  );
};

export default SettingsPage;
