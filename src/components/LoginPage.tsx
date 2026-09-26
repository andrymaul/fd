import React, { useState, useEffect } from 'react';
import { UserProfile } from '../types';
import { Mail, Eye, EyeOff, RefreshCw, CheckCircle2, Sparkles, ArrowLeft, Check } from 'lucide-react';
import { loginWithEmail, registerWithEmail, resendVerificationEmail } from '../firebase';

const PROFESSION_GROUPS = [
  {
    group: 'Kefarmasian',
    options: [
      { id: 'Apoteker - Rumah Sakit / Klinik', label: 'Apoteker - Rumah Sakit / Klinik' },
      { id: 'Apoteker - Apotek / Komunitas', label: 'Apoteker - Apotek / Komunitas' },
      { id: 'Apoteker - Puskesmas / Faskes Primer', label: 'Apoteker - Puskesmas' },
      { id: 'Apoteker - Industri Farmasi (QA/QC/R&D/Produksi)', label: 'Apoteker - Industri Farmasi (Pabrik Obat)' },
      { id: 'Apoteker - Distribusi / PBF', label: 'Apoteker - PBF / Distribusi Obat' },
      { id: 'Apoteker - Regulasi & Pemerintahan (Dinkes/BPOM/Kemenkes)', label: 'Apoteker - Dinkes / BPOM / Kemenkes' },
      { id: 'Tenaga Teknis Kefarmasian (TTK / D3 Farmasi)', label: 'Tenaga Teknis Kefarmasian (TTK / D3 Farmasi)' },
      { id: 'Asisten Tenaga Kefarmasian (SMK Farmasi)', label: 'Asisten Tenaga Kefarmasian (SMK Farmasi)' }
    ]
  },
  {
    group: 'Kedokteran & Keperawatan',
    options: [
      { id: 'Dokter Umum', label: 'Dokter Umum' },
      { id: 'Dokter Spesialis', label: 'Dokter Spesialis' },
      { id: 'Dokter Gigi', label: 'Dokter Gigi' },
      { id: 'Perawat (Nurse)', label: 'Perawat (Nurse)' },
      { id: 'Bidan', label: 'Bidan' }
    ]
  },
  {
    group: 'Industri, Manajemen & Pemerintahan',
    options: [
      { id: 'Profesional Industri Farmasi / Alkes', label: 'Staff / Profesional Industri Farmasi' },
      { id: 'Staf Regulasi & Pengawasan Obat (Dinkes/BPOM)', label: 'Staf Dinkes / BPOM / Kementerian' },
      { id: 'Manajemen / Pengelola Fasilitas Kesehatan', label: 'Manajemen RS / Pemilik Sarana Apotek' }
    ]
  },
  {
    group: 'Pendidikan & Calon Nakes',
    options: [
      { id: 'Mahasiswa Profesi Apoteker (PSPPA)', label: 'Mahasiswa Profesi Apoteker (PSPPA)' },
      { id: 'Mahasiswa S1 Farmasi', label: 'Mahasiswa S1 Farmasi' },
      { id: 'Mahasiswa D3 / Vokasi Farmasi', label: 'Mahasiswa D3 / Vokasi Farmasi' },
      { id: 'Mahasiswa Kedokteran / Co-Ass', label: 'Mahasiswa Kedokteran / Co-Ass' },
      { id: 'Dosen / Peneliti Farmasi & Kedokteran', label: 'Dosen / Peneliti Farmasi' }
    ]
  },
  {
    group: 'Lainnya',
    options: [
      { id: 'Tenaga Kesehatan Lainnya', label: 'Tenaga Kesehatan Lainnya' }
    ]
  }
];


interface LoginPageProps {
  onLoginSuccess: (user: UserProfile) => void;
  onNewAccountCreated?: (user: UserProfile) => void;
  onSelectTab: (tab: string) => void;
  initialMode?: 'login' | 'register';
}

export const LoginPage: React.FC<LoginPageProps> = ({
  onLoginSuccess,
  onNewAccountCreated,
  onSelectTab,
  initialMode = 'login',
}) => {
  const [isRegister, setIsRegister] = useState(initialMode === 'register');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [institution, setInstitution] = useState('');
  const [profession, setProfession] = useState('Apoteker');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Email verification state
  const [unverifiedEmail, setUnverifiedEmail] = useState<string | null>(null);
  const [resendLoading, setResendLoading] = useState(false);
  const [resendSuccess, setResendSuccess] = useState<string | null>(null);
  const [resendCooldown, setResendCooldown] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = isRegister 
      ? 'Daftar Akun Baru • Farmasi Druggist' 
      : 'Masuk Akun • Farmasi Druggist';
  }, [isRegister]);

  useEffect(() => {
    if (resendCooldown <= 0) return;
    const timer = setInterval(() => {
      setResendCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [resendCooldown]);

  const hasMinLength = password.length >= 6;
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const isConfirmMatch = confirmPassword.length > 0 && confirmPassword === password;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResendSuccess(null);

    try {
      if (isRegister) {
        if (password.length < 6) {
          setError('Kata sandi minimal 6 karakter.');
          setLoading(false);
          return;
        }
        if (!/[A-Z]/.test(password)) {
          setError('Kata sandi wajib mengandung setidaknya 1 huruf besar (A-Z).');
          setLoading(false);
          return;
        }
        if (!/[0-9]/.test(password)) {
          setError('Kata sandi wajib mengandung setidaknya 1 angka (0-9).');
          setLoading(false);
          return;
        }
        if (password !== confirmPassword) {
          setError('Konfirmasi kata sandi tidak cocok.');
          setLoading(false);
          return;
        }

        const formattedPhone = phone.trim() ? (phone.trim().startsWith('+62') ? phone.trim() : `+62${phone.trim()}`) : '';
        const finalInstitution = institution.trim() || 'Praktik Mandiri / Non-Faskes';

        const res = await registerWithEmail(email, password, name, formattedPhone, finalInstitution, profession);
        if (res.userProfile && onNewAccountCreated) {
          onNewAccountCreated(res.userProfile);
        }
        if (res.emailSent) {
          setUnverifiedEmail(res.emailSent);
          setResendCooldown(30);
        }
      } else {
        const res = await loginWithEmail(email, password);
        if (res.emailUnverified) {
          setUnverifiedEmail(res.emailUnverified);
        } else if (res.user) {
          if (onNewAccountCreated) {
            onNewAccountCreated(res.user);
          }
          onLoginSuccess(res.user);
        }
      }
    } catch (err: any) {
      setError(err?.message || 'Email atau kata sandi tidak sesuai.');
    } finally {
      setLoading(false);
    }
  };

  const handleResendEmail = async () => {
    if (!unverifiedEmail || resendCooldown > 0 || resendLoading) return;
    setResendLoading(true);
    setError(null);
    setResendSuccess(null);

    try {
      const res = await resendVerificationEmail(unverifiedEmail, password);
      setResendSuccess(res.message);
      setResendCooldown(45);
    } catch (err: any) {
      setError(err?.message || 'Tidak dapat mengirim ulang email verifikasi.');
    } finally {
      setResendLoading(false);
    }
  };

  const handleProceedToLogin = () => {
    if (unverifiedEmail) {
      setEmail(unverifiedEmail);
    }
    setUnverifiedEmail(null);
    setIsRegister(false);
    setConfirmPassword('');
    setError(null);
    setResendSuccess(null);
  };

  const handleGoHome = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.location.pathname !== '/') {
      window.history.pushState(null, '', '/');
    }
    onSelectTab('landing');
  };

  // 1. TAMPILAN LAYAR VERIFIKASI EMAIL
  if (unverifiedEmail) {
    return (
      <div className="w-full flex-1 flex flex-col items-center justify-center py-6 sm:py-10 px-4 sm:px-6">
        <div className="w-full max-w-sm sm:max-w-md space-y-5 text-center animate-fadeIn">
          
          {/* Mail Icon */}
          <div className="relative w-20 h-20 mx-auto">
            <div className="w-20 h-20 rounded-2xl bg-teal-50 border-2 border-teal-200/80 flex items-center justify-center text-[#0f766e] shadow-inner">
              <Mail className="w-10 h-10 animate-bounce text-[#0f766e]" />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-amber-500 text-white p-1.5 rounded-full shadow-md">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
          </div>

          <div className="space-y-2">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-50 border border-amber-200 text-amber-800 text-[11px] font-extrabold rounded-full font-outfit uppercase tracking-wider">
              Verifikasi Email
            </span>
            <h1 className="text-2xl font-black text-slate-900 font-outfit">
              Cek Email Anda
            </h1>
            <p className="text-xs text-slate-600 font-medium leading-relaxed max-w-sm mx-auto">
              Tautan aktivasi telah dikirimkan ke <span className="font-bold text-teal-800 font-mono break-all">{unverifiedEmail}</span>. Silakan klik tautan di inbox email Anda, lalu masuk kembali.
            </p>
          </div>

          {/* Success Banner */}
          {resendSuccess && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold rounded-xl flex items-center gap-2 text-left animate-fadeIn">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
              <span>{resendSuccess}</span>
            </div>
          )}

          {/* Error Banner */}
          {error && (
            <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold rounded-xl text-center">
              {error}
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-2.5 pt-2">
            <button
              onClick={handleProceedToLogin}
              className="w-full py-3.5 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-black rounded-2xl shadow-md shadow-teal-600/20 transition-all text-xs flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01] font-outfit"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Saya Sudah Verifikasi, Lanjut Masuk</span>
            </button>

            <button
              type="button"
              onClick={handleResendEmail}
              disabled={resendLoading || resendCooldown > 0}
              className="w-full py-3 bg-slate-50 hover:bg-slate-100 disabled:opacity-60 disabled:cursor-not-allowed text-slate-700 font-bold rounded-2xl border border-slate-200 transition-all text-xs flex items-center justify-center gap-2 cursor-pointer font-outfit"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${resendLoading ? 'animate-spin' : ''}`} />
              <span>
                {resendLoading 
                  ? 'Mengirimkan...' 
                  : resendCooldown > 0 
                    ? `Kirim Ulang Email (${resendCooldown}s)` 
                    : 'Kirim Ulang Email Verifikasi'}
              </span>
            </button>
          </div>

          <div className="pt-2 border-t border-slate-100">
            <a
              href="/"
              onClick={handleGoHome}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-teal-700 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kembali ke Beranda</span>
            </a>
          </div>
        </div>
      </div>
    );
  }

  // 2. TAMPILAN UTAMA HALAMAN LOGIN & DAFTAR (DEDICATED FULL PAGE /login)
  return (
    <div className="w-full flex-1 flex flex-col items-center justify-center py-6 sm:py-8 px-4 sm:px-6">
      <div className={`w-full transition-all duration-300 ${isRegister ? 'max-w-xl lg:max-w-2xl' : 'max-w-sm sm:max-w-md'} space-y-4 animate-fadeIn`}>
        
        {/* Judul Halaman */}
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-outfit tracking-tight">
            {isRegister ? 'Daftar Akun Baru' : 'Masuk Akun'}
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-1">
            {isRegister ? 'Akses gratis instan ke instrumen klinis & database obat Farmasi Druggist' : 'Masuk ke dashboard farmasi klinis Anda'}
          </p>
        </div>

        {/* Tab Pilihan Masuk / Daftar */}
        <div className="grid grid-cols-2 p-1 bg-white/80 backdrop-blur-xs border border-teal-200/60 rounded-2xl text-xs font-bold font-outfit shadow-2xs">
          <button
            type="button"
            onClick={() => {
              setIsRegister(false);
              setConfirmPassword('');
              setError(null);
            }}
            className={`py-2 rounded-xl transition-all cursor-pointer ${
              !isRegister
                ? 'bg-white text-slate-900 shadow-xs font-black'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Masuk
          </button>
          <button
            type="button"
            onClick={() => {
              setIsRegister(true);
              setConfirmPassword('');
              setError(null);
            }}
            className={`py-2 rounded-xl transition-all cursor-pointer ${
              isRegister
                ? 'bg-white text-slate-900 shadow-xs font-black'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Daftar Baru
          </button>
        </div>

        {/* Info Banner when registering */}
        {isRegister && (
          <div className="p-3 bg-teal-50/80 border border-teal-200/80 rounded-2xl text-[11px] text-teal-800 font-medium flex items-center gap-2.5">
            <Mail className="w-4 h-4 text-teal-700 shrink-0" />
            <span>Link verifikasi akan otomatis dikirimkan ke email untuk aktivasi akun instan.</span>
          </div>
        )}

        {/* Form Masuk / Daftar */}
        <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
          {isRegister ? (
            <>
              {/* 1. Grid 2 Kolom: Nama Lengkap & Profesi Nakes (Dropdown Tanpa Ikon) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-extrabold text-slate-700 block mb-1 font-outfit text-xs">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contoh: apt. Budi Santoso, S.Farm"
                    className="w-full px-3.5 py-2.5 bg-slate-50 rounded-xl border border-slate-200 text-slate-900 font-semibold focus:outline-none focus:border-teal-600 focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="font-extrabold text-slate-700 block mb-1 font-outfit text-xs">
                    Profesi / Peran Tenaga Kesehatan
                  </label>
                  <select
                    value={profession}
                    onChange={(e) => setProfession(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-50 rounded-xl border border-slate-200 text-slate-900 font-semibold focus:outline-none focus:border-teal-600 focus:bg-white transition-colors cursor-pointer text-xs"
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

              {/* 2. Grid 2 Kolom: Nomor WhatsApp & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-extrabold text-slate-700 block mb-1 font-outfit text-xs flex items-center justify-between">
                    <span>Nomor WhatsApp / HP</span>
                    <span className="text-[10px] text-teal-700 font-bold font-mono">Aktif WA</span>
                  </label>
                  <div className="relative flex items-center rounded-xl border border-slate-200 bg-slate-50 overflow-hidden focus-within:border-teal-600 focus-within:bg-white transition-colors">
                    <div className="px-3 py-2.5 bg-slate-100/90 border-r border-slate-200 text-slate-700 font-bold font-mono text-xs flex items-center gap-1.5 shrink-0 select-none">
                      <span>🇮🇩</span>
                      <span>+62</span>
                    </div>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => {
                        let val = e.target.value.replace(/\D/g, '');
                        if (val.startsWith('62')) val = val.slice(2);
                        else if (val.startsWith('0')) val = val.slice(1);
                        setPhone(val);
                      }}
                      placeholder="81234567890"
                      className="w-full px-3 py-2.5 bg-transparent text-slate-900 font-semibold focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-extrabold text-slate-700 block mb-1 font-outfit text-xs">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@email.com"
                    className="w-full px-3.5 py-2.5 bg-slate-50 rounded-xl border border-slate-200 text-slate-900 font-semibold focus:outline-none focus:border-teal-600 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* 3. Baris Penuh: Instansi / Tempat Bertugas / Perusahaan */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="font-extrabold text-slate-700 font-outfit text-xs">
                    Instansi / Tempat Bertugas / Perusahaan
                  </label>
                  <span className="text-[10px] text-slate-400 font-medium">(Opsional / Kampus / Mandiri)</span>
                </div>
                <input
                  type="text"
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                  placeholder="Contoh: RS Farist / PT Farist / Dinkes / Apotek FD / Universitas Farist"
                  className="w-full px-3.5 py-2.5 bg-slate-50 rounded-xl border border-slate-200 text-slate-900 font-semibold focus:outline-none focus:border-teal-600 focus:bg-white transition-colors"
                />
              </div>

              {/* 4. Grid 2 Kolom: Kata Sandi & Konfirmasi Kata Sandi */}
              <div className="space-y-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="font-extrabold text-slate-700 block mb-1 font-outfit text-xs">
                      Kata Sandi
                    </label>
                    <div className="relative flex items-center">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        minLength={6}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Minimal 6 karakter"
                        className="w-full pl-3.5 pr-9 py-2.5 bg-slate-50 rounded-xl border border-slate-200 text-slate-900 font-semibold focus:outline-none focus:border-teal-600 focus:bg-white transition-colors"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 text-slate-400 hover:text-slate-600 cursor-pointer"
                        title={showPassword ? 'Sembunyikan sandi' : 'Tampilkan sandi'}
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="font-extrabold text-slate-700 block mb-1 font-outfit text-xs flex items-center justify-between">
                      <span>Konfirmasi Kata Sandi</span>
                      {confirmPassword && isConfirmMatch && (
                        <span className="text-[10.5px] text-emerald-600 font-bold flex items-center gap-0.5">
                          <CheckCircle2 className="w-3 h-3" /> Cocok
                        </span>
                      )}
                      {confirmPassword && !isConfirmMatch && (
                        <span className="text-[10.5px] text-rose-500 font-bold">
                          Belum cocok
                        </span>
                      )}
                    </label>
                    <div className="relative flex items-center">
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Ulangi kata sandi"
                        className={`w-full pl-3.5 pr-9 py-2.5 bg-slate-50 rounded-xl border text-slate-900 font-semibold focus:outline-none focus:bg-white transition-colors ${
                          confirmPassword && !isConfirmMatch
                            ? 'border-rose-400 focus:border-rose-500'
                            : confirmPassword && isConfirmMatch
                              ? 'border-emerald-500 focus:border-emerald-600'
                              : 'border-slate-200 focus:border-teal-600'
                        }`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 text-slate-400 hover:text-slate-600 cursor-pointer"
                        title={showConfirmPassword ? 'Sembunyikan sandi' : 'Tampilkan sandi'}
                      >
                        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Ketentuan Sandi Ringkas & Kompak (Horizontal Chips) */}
                <div className="flex items-center gap-1.5 flex-wrap pt-0.5">
                  <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10.5px] border transition-all ${
                    hasMinLength
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-700 font-bold'
                      : 'bg-slate-50 border-slate-200 text-slate-500'
                  }`}>
                    <Check className={`w-3 h-3 ${hasMinLength ? 'text-emerald-600 stroke-[3]' : 'text-slate-300'}`} />
                    <span>Min. 6 Karakter</span>
                  </span>

                  <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10.5px] border transition-all ${
                    hasUppercase
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-700 font-bold'
                      : 'bg-slate-50 border-slate-200 text-slate-500'
                  }`}>
                    <Check className={`w-3 h-3 ${hasUppercase ? 'text-emerald-600 stroke-[3]' : 'text-slate-300'}`} />
                    <span>Huruf Besar (A-Z)</span>
                  </span>

                  <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10.5px] border transition-all ${
                    hasNumber
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-700 font-bold'
                      : 'bg-slate-50 border-slate-200 text-slate-500'
                  }`}>
                    <Check className={`w-3 h-3 ${hasNumber ? 'text-emerald-600 stroke-[3]' : 'text-slate-300'}`} />
                    <span>Angka (0-9)</span>
                  </span>
                </div>
              </div>
            </>
          ) : (
            /* Mode Masuk / Login */
            <>
              <div>
                <label className="font-extrabold text-slate-700 block mb-1 font-outfit text-xs">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nama@email.com"
                  className="w-full px-3.5 py-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-900 font-semibold focus:outline-none focus:border-teal-600 focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="font-extrabold text-slate-700 block mb-1 font-outfit text-xs">
                  Kata Sandi
                </label>
                <div className="relative flex items-center">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    minLength={6}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Masukkan kata sandi"
                    className="w-full pl-3.5 pr-10 py-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-900 font-semibold focus:outline-none focus:border-teal-600 focus:bg-white transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 text-slate-400 hover:text-slate-600 cursor-pointer"
                    title={showPassword ? 'Sembunyikan sandi' : 'Tampilkan sandi'}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </>
          )}

          {/* Error Alert Banner */}
          {error && (
            <div className="p-3.5 bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold rounded-2xl text-center shadow-2xs space-y-1">
              <p>{error}</p>
              {error.includes('sudah terdaftar') && isRegister && (
                <button
                  type="button"
                  onClick={() => {
                    setIsRegister(false);
                    setError(null);
                  }}
                  className="text-teal-700 underline font-black cursor-pointer hover:text-teal-900 block mx-auto pt-1 font-outfit"
                >
                  Klik di sini untuk Masuk Akun →
                </button>
              )}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 disabled:opacity-60 text-white font-black rounded-2xl shadow-md shadow-teal-600/20 transition-all text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01] active:scale-98 font-outfit mt-2"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Memproses...</span>
              </span>
            ) : isRegister ? (
              'Daftar Akun & Kirim Verifikasi'
            ) : (
              'Masuk dengan Email'
            )}
          </button>
        </form>

        {/* Toggle Register / Login Link */}
        <div className="text-center text-xs text-slate-500 font-medium pt-2 border-t border-slate-100">
          {isRegister ? (
            <span>Sudah punya akun? <button onClick={() => { setIsRegister(false); setConfirmPassword(''); setError(null); }} className="text-teal-700 font-black hover:underline cursor-pointer font-outfit ml-1">Masuk di sini</button></span>
          ) : (
            <span>Belum punya akun? <button onClick={() => { setIsRegister(true); setConfirmPassword(''); setError(null); }} className="text-teal-700 font-black hover:underline cursor-pointer font-outfit ml-1">Daftar akun baru</button></span>
          )}
        </div>

      </div>
    </div>
  );
};
