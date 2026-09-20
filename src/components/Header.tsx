import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { UserProfile } from '../types';
import { getLatestChangelogEntry } from '../data/systemChangelogData';
import { 
  Menu, 
  X,
  Sparkles, 
  Pill, 
  CreditCard, 
  LogOut, 
  LogIn, 
  ShieldCheck, 
  Stethoscope, 
  HeartPulse,
  BookMarked,
  GraduationCap,
  ShieldAlert,
  AlertOctagon,
  Activity,
  Building2,
  BookOpen,
  History,
  Calculator,
  Baby,
  Syringe,
  MessageSquare,
  ClipboardList,
  Scale,
  Database,
  UserCheck,
  User,
  HeartHandshake,
  FlaskConical,
  CalendarClock,
  Leaf,
  Send,
  ArrowUpRight,
  Clock,
  Instagram,
  Wand2,
  Languages
} from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  currentUser: UserProfile | null;
  onOpenAuthModal: () => void;
  onLogout: () => void;
  onOpenPricingModal: () => void;
  onToggleMobileSidebar?: () => void;
  onOpenProfileModal?: () => void;
  onOpenChangelogModal?: () => void;
  onStartTrial?: () => void;
  isTrialActive?: boolean;
  trialRemainingText?: string;
  hasClaimedTrial?: boolean;
  isTrialEnabled?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  currentUser,
  onOpenAuthModal,
  onLogout,
  onOpenPricingModal,
  onToggleMobileSidebar,
  onOpenProfileModal,
  onOpenChangelogModal,
  onStartTrial,
  isTrialActive = false,
  trialRemainingText,
  hasClaimedTrial = false,
  isTrialEnabled = true
}) => {
  const [landingMobileMenuOpen, setLandingMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLanding = activeTab === 'landing';

  // Landing Header Rendering - Clean White Glassmorphism with Seamless Light Background
  if (isLanding) {
    return (
      <header className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur-xl pt-2 pb-2 sm:pt-3 sm:pb-3 px-3 sm:px-6 transition-all duration-300 border-b border-slate-200/80 shadow-xs">
        <div className="max-w-6xl mx-auto">
          <div className={`rounded-full transition-all duration-300 px-3.5 sm:px-5 py-2 sm:py-2.5 flex items-center justify-between ${
            isScrolled 
              ? 'bg-white/95 backdrop-blur-2xl border border-slate-200/90 shadow-md shadow-slate-900/5' 
              : 'bg-slate-50/90 backdrop-blur-xl border border-slate-200/70 shadow-xs'
          }`}>
            
            {/* Brand Logo */}
            <button 
              onClick={() => {
                setActiveTab('landing');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="focus:outline-none flex items-center gap-2 group text-left cursor-pointer transition-transform hover:scale-[1.02]"
            >
              <Logo size="sm" variant="light" />
            </button>

            {/* Nav Items on Landing - Sleek Minimalist Capsule Pills */}
            <nav className="hidden lg:flex items-center space-x-1 text-xs font-semibold font-outfit">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-teal-800 bg-teal-500/10 border border-teal-500/20 px-3 py-1.5 rounded-full transition-all cursor-pointer shadow-2xs"
              >
                Beranda
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('interactive-playground');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else if (!currentUser) onOpenAuthModal();
                  else setActiveTab('drugs');
                }}
                className="text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-full hover:bg-slate-100 hover:text-teal-800 transition-all flex items-center gap-1.5 cursor-pointer font-medium"
              >
                <Pill className="w-3 h-3 text-teal-600" />
                <span>Simulasi Klinis</span>
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('bento-features');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-full hover:bg-slate-100 hover:text-teal-800 transition-all flex items-center gap-1.5 cursor-pointer font-medium"
              >
                <BookOpen className="w-3 h-3 text-cyan-600" />
                <span>26 Modul</span>
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('suara-sejawat');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-full hover:bg-slate-100 hover:text-teal-800 transition-all flex items-center gap-1.5 cursor-pointer font-medium"
              >
                <MessageSquare className="w-3 h-3 text-emerald-600" />
                <span>Suara Sejawat</span>
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('pricing-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-full hover:bg-slate-100 hover:text-teal-800 transition-all flex items-center gap-1.5 cursor-pointer font-medium"
              >
                <CreditCard className="w-3 h-3 text-amber-600" />
                <span>Paket Akses</span>
              </button>
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center space-x-2">
              {/* Telegram Community Button */}
              <a
                href="https://t.me/+lHiIMC_TdoM2NTk1"
                target="_blank"
                rel="noopener noreferrer"
                title="Gabung Komunitas Telegram (7.000+ Sejawat)"
                className="h-8 px-3 rounded-full text-[11px] font-bold text-sky-700 hover:text-sky-900 bg-sky-50 hover:bg-sky-100 border border-sky-200/80 transition-all flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer shadow-2xs"
              >
                <Send className="w-3 h-3 text-[#229ED9] fill-[#229ED9] shrink-0" />
                <span>Komunitas (7.000+)</span>
              </a>


              {!currentUser ? (
                <button
                  onClick={onOpenAuthModal}
                  className="h-8 px-3.5 sm:px-4 rounded-full text-xs font-black text-white bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-600 hover:from-teal-500 hover:to-emerald-500 transition-all flex items-center justify-center gap-1 whitespace-nowrap shadow-md shadow-teal-700/20 hover:scale-[1.02] active:scale-95 cursor-pointer group"
                >
                  <span>Masuk Sistem</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              ) : (
                <div className="flex items-center space-x-1.5">
                  {onOpenProfileModal && (
                    <button
                      type="button"
                      onClick={onOpenProfileModal}
                      title="Lihat & Edit Profil Akun"
                      className="text-xs font-bold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs"
                    >
                      <User className="w-3 h-3 text-teal-600" />
                      <span className="max-w-[100px] truncate">{currentUser.name}</span>
                    </button>
                  )}
                  <button
                    onClick={() => setActiveTab('dashboard')}
                    className="text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 px-3.5 py-1.5 rounded-full shadow-xs transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>Dashboard</span>
                  </button>
                  <button
                    onClick={onLogout}
                    title="Keluar"
                    className="p-1.5 text-slate-400 hover:text-rose-500 rounded-full hover:bg-rose-50 transition-all cursor-pointer"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button on Landing */}
            <div className="flex items-center space-x-2 lg:hidden">
              <button
                onClick={() => setLandingMobileMenuOpen(!landingMobileMenuOpen)}
                className="p-1.5 rounded-full text-slate-700 hover:bg-slate-100 transition-all cursor-pointer"
              >
                {landingMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>

          {/* Floating Mobile Dropdown */}
          {landingMobileMenuOpen && (
            <div className="pointer-events-auto mt-2 rounded-2xl bg-white/95 backdrop-blur-2xl border border-slate-200 p-4 space-y-2 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 text-slate-800">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setLandingMobileMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-100 flex items-center gap-2"
              >
                <span>Beranda</span>
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('interactive-playground');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  setLandingMobileMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-100 flex items-center gap-2"
              >
                <Pill className="w-3.5 h-3.5 text-teal-600" />
                <span>Simulasi Klinis</span>
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('bento-features');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  setLandingMobileMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-100 flex items-center gap-2"
              >
                <BookOpen className="w-3.5 h-3.5 text-cyan-600" />
                <span>26 Modul Klinis</span>
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('suara-sejawat');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  setLandingMobileMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-100 flex items-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>Suara Sejawat</span>
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('pricing-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  setLandingMobileMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-100 flex items-center gap-2"
              >
                <CreditCard className="w-3.5 h-3.5 text-amber-600" />
                <span>Paket Akses</span>
              </button>
            </div>
          )}
        </div>
      </header>
    );
  }

  // App Topbar Rendering (When Sidebar is active)
  const getTabTitle = (tab: string) => {
    switch (tab) {
      case 'dashboard':
        return {
          title: 'Dashboard Utama',
          desc: 'Ringkasan aktivitas & analisis obat klinis',
          icon: Sparkles,
          iconColor: 'text-amber-500 bg-amber-500/10 border-amber-400/30',
          headerBg: 'bg-gradient-to-r from-amber-50/85 via-teal-50/40 to-white/95 dark:from-[#110c03]/95 dark:via-[#161205]/90 dark:to-[#090702]/95 border-b border-amber-200/60 dark:border-amber-500/25',
          glowAccent: 'from-amber-500/10 via-teal-500/5 to-transparent'
        };
      case 'drugs':
        return {
          title: 'Katalog Informasi Obat',
          desc: 'Direktori komprehensif indikasi, dosis & efek samping',
          icon: Pill,
          iconColor: 'text-teal-600 dark:text-teal-400 bg-teal-500/10 border-teal-400/30',
          headerBg: 'bg-gradient-to-r from-teal-50/85 via-blue-50/40 to-white/95 dark:from-[#031518]/95 dark:via-[#051e24]/90 dark:to-[#020b0d]/95 border-b border-teal-200/60 dark:border-teal-500/25',
          glowAccent: 'from-teal-500/10 via-cyan-500/5 to-transparent'
        };
      case 'fornas':
        return {
          title: 'Formularium Nasional (FORNAS) & Restriksi BPJS Kesehatan',
          desc: 'Keputusan Menkes No. HK.01.07/MENKES/1199/2025, penapisan faskes FKTP/FKRTL, kuota peresepan maksimal & verifikasi klaim BPJS',
          icon: Building2,
          iconColor: 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-400/30',
          headerBg: 'bg-gradient-to-r from-emerald-50/85 via-teal-50/40 to-white/95 dark:from-[#021814]/95 dark:via-[#03231e]/90 dark:to-[#010e0b]/95 border-b border-emerald-200/60 dark:border-emerald-500/25',
          glowAccent: 'from-emerald-500/10 via-teal-500/5 to-transparent'
        };
      case 'pregnancy':
        return {
          title: 'Keamanan Obat Ibu Hamil & Menyusui (Pregnancy & Lactation)',
          desc: 'Penapisan risiko teratogenik FDA PLLR, profil laktasi Hale’s L1-L5, RID %, dan direktori alternatif obat aman',
          icon: HeartHandshake,
          iconColor: 'text-pink-600 dark:text-pink-400 bg-pink-500/10 border-pink-400/30',
          headerBg: 'bg-gradient-to-r from-pink-50/90 via-rose-50/50 to-white/95 dark:from-[#1a0614]/95 dark:via-[#26091e]/90 dark:to-[#0e020a]/95 border-b border-pink-200/60 dark:border-pink-500/25',
          glowAccent: 'from-pink-500/10 via-rose-500/5 to-transparent'
        };
      case 'drug-lab':
        return {
          title: 'Interaksi Obat dengan Uji Laboratorium (DLI)',
          desc: 'Deteksi distorsi analit in vitro & hasil positif/negatif palsu pemeriksaan Troponin, Tiroid, Ginjal, Glukosa & Narkoba Urin',
          icon: FlaskConical,
          iconColor: 'text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border-cyan-400/30',
          headerBg: 'bg-gradient-to-r from-cyan-50/90 via-teal-50/50 to-white/95 dark:from-[#03171e]/95 dark:via-[#05232c]/90 dark:to-[#020d10]/95 border-b border-cyan-200/60 dark:border-cyan-500/25',
          glowAccent: 'from-cyan-500/10 via-teal-500/5 to-transparent'
        };
      case 'herb-drug':
        return {
          title: 'Interaksi Herbal & Obat Indonesia (Herb-Drug Interactions)',
          desc: 'Penapisan interaksi Jamu, OHT & Fitofarmaka (Kunyit, Temulawak, Sambiloto, Bawang Putih, Ginkgo) terhadap obat resep sintetik',
          icon: Leaf,
          iconColor: 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-400/30',
          headerBg: 'bg-gradient-to-r from-emerald-50/90 via-green-50/50 to-white/95 dark:from-[#03170e]/95 dark:via-[#052417]/90 dark:to-[#020d08]/95 border-b border-emerald-200/60 dark:border-emerald-500/25',
          glowAccent: 'from-emerald-500/10 via-green-500/5 to-transparent'
        };
      case 'bud':
        return {
          title: 'Kalkulator Stabilitas & Beyond Use Date (BUD)',
          desc: 'Penetapan batas kadaluarsa sediaan racikan puyer, sirup oral, krim/gel, tetes mata, insulin & injeksi steril berstandar USP <795>, <797> & FI VI',
          icon: CalendarClock,
          iconColor: 'text-teal-600 dark:text-teal-400 bg-teal-500/10 border-teal-400/30',
          headerBg: 'bg-gradient-to-r from-teal-50/90 via-emerald-50/50 to-white/95 dark:from-[#031818]/95 dark:via-[#052525]/90 dark:to-[#020d0d]/95 border-b border-teal-200/60 dark:border-teal-500/25',
          glowAccent: 'from-teal-500/10 via-emerald-500/5 to-transparent'
        };
      case 'drug-notes':
        return {
          title: 'Hafalan Obat: Jembatan Keledai & Rima Klinis',
          desc: 'Metode hafalan cepat berbasis suku kata rima, rasionalitas formulasi, efek samping unik & komparasi farmakologi',
          icon: BookOpen,
          iconColor: 'text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-400/30',
          headerBg: 'bg-gradient-to-r from-amber-50/90 via-orange-50/50 to-white/95 dark:from-[#1c0f03]/95 dark:via-[#291705]/90 dark:to-[#0e0701]/95 border-b border-amber-200/60 dark:border-amber-500/25',
          glowAccent: 'from-amber-500/10 via-orange-500/5 to-transparent'
        };
      case 'latin-terms':
        return {
          title: 'Kamus & Penerjemah Singkatan Latin Resep',
          desc: '180+ singkatan Latin farmasi standar FI VI & resep klinis, pengurai signa etiket otomatis & peringatan bahaya ISMP',
          icon: Languages,
          iconColor: 'text-purple-600 dark:text-purple-400 bg-purple-500/10 border-purple-400/30',
          headerBg: 'bg-gradient-to-r from-purple-50/90 via-indigo-50/50 to-white/95 dark:from-[#13051e]/95 dark:via-[#210933]/90 dark:to-[#0c0313]/95 border-b border-purple-200/60 dark:border-purple-500/25',
          glowAccent: 'from-purple-500/10 via-indigo-500/5 to-transparent'
        };
      case 'competency':
        return {
          title: 'Pusat Belajar Uji Kompetensi Apoteker (UKMPPAI)',
          desc: 'Blueprint nasional KFN & IAI, 653 soal CBT kasus vignette profesi, simulasi CBT 200 soal & 10 stase OSCE klinis',
          icon: GraduationCap,
          iconColor: 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-400/30',
          headerBg: 'bg-gradient-to-r from-emerald-50/90 via-teal-50/50 to-white/95 dark:from-[#041812]/95 dark:via-[#06251b]/90 dark:to-[#020d09]/95 border-b border-emerald-200/60 dark:border-emerald-500/25',
          glowAccent: 'from-emerald-500/10 via-teal-500/5 to-transparent'
        };
      case 'competency-vokasi':
        return {
          title: 'Pusat Belajar Uji Kompetensi Vokasi Farmasi (UKTVF / APDFI)',
          desc: 'Standar Nasional APDFI, 480 soal CBT autentik D3, simulasi CBT 180 soal, modul BMHP & evaluasi mutu fisik',
          icon: FlaskConical,
          iconColor: 'text-teal-600 dark:text-teal-400 bg-teal-500/10 border-teal-400/30',
          headerBg: 'bg-gradient-to-r from-teal-50/90 via-emerald-50/50 to-white/95 dark:from-[#031818]/95 dark:via-[#052525]/90 dark:to-[#020d0d]/95 border-b border-teal-200/60 dark:border-teal-500/25',
          glowAccent: 'from-teal-500/10 via-emerald-500/5 to-transparent'
        };
      case 'guidelines':
        return {
          title: 'Panduan Terapi Klinis Indonesia',
          desc: 'Pedoman Nasional Pelayanan Kedokteran (PNPK) & Konsensus Organisasi Profesi Spesialis RI',
          icon: HeartPulse,
          iconColor: 'text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-400/30',
          headerBg: 'bg-gradient-to-r from-blue-50/90 via-indigo-50/50 to-white/95 dark:from-[#051025]/95 dark:via-[#081838]/90 dark:to-[#020814]/95 border-b border-blue-200/60 dark:border-blue-500/25',
          glowAccent: 'from-blue-500/10 via-indigo-500/5 to-transparent'
        };
      case 'polypharmacy':
        return {
          title: 'Evaluasi Klinis & Penapisan Polifarmasi',
          desc: 'Parameter klinis pasien, penapisan resep, generator jadwal harian & interaksi makanan',
          icon: Stethoscope,
          iconColor: 'text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 border-indigo-400/30',
          headerBg: 'bg-gradient-to-r from-indigo-50/90 via-blue-50/50 to-white/95 dark:from-[#070b22]/95 dark:via-[#0b1233]/90 dark:to-[#030512]/95 border-b border-indigo-200/60 dark:border-indigo-500/25',
          glowAccent: 'from-indigo-500/10 via-blue-500/5 to-transparent'
        };
      case 'interactions':
        return {
          title: 'Deteksi Interaksi Obat (Evaluasi Klinis)',
          desc: 'Pemeriksaan potensi efek samping & tingkat keparahan',
          icon: ShieldAlert,
          iconColor: 'text-rose-600 dark:text-rose-400 bg-rose-500/10 border-rose-400/30',
          headerBg: 'bg-gradient-to-r from-rose-50/90 via-red-50/50 to-white/95 dark:from-[#1b0609]/95 dark:via-[#28090e]/90 dark:to-[#0d0204]/95 border-b border-rose-200/60 dark:border-rose-500/25',
          glowAccent: 'from-rose-500/10 via-red-500/5 to-transparent'
        };
      case 'side-effects':
        return {
          title: 'Pusat Analisis Efek Samping & Toksisitas Organ',
          desc: 'Evaluasi toksisitas kumulatif multi-obat, pelacak gejala KTD & algoritma farmakovigilans BPOM',
          icon: Activity,
          iconColor: 'text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-400/30',
          headerBg: 'bg-gradient-to-r from-amber-50/90 via-yellow-50/50 to-white/95 dark:from-[#1a1203]/95 dark:via-[#271b05]/90 dark:to-[#0e0901]/95 border-b border-amber-200/60 dark:border-amber-500/25',
          glowAccent: 'from-amber-500/10 via-yellow-500/5 to-transparent'
        };
      case 'usage':
        return {
          title: 'Panduan Penggunaan Obat',
          desc: 'Petunjuk langkah demi langkah tata cara penggunaan sediaan obat khusus',
          icon: BookOpen,
          iconColor: 'text-sky-600 dark:text-sky-400 bg-sky-500/10 border-sky-400/30',
          headerBg: 'bg-gradient-to-r from-sky-50/90 via-blue-50/50 to-white/95 dark:from-[#031422]/95 dark:via-[#051e33]/90 dark:to-[#020b13]/95 border-b border-sky-200/60 dark:border-sky-500/25',
          glowAccent: 'from-sky-500/10 via-blue-500/5 to-transparent'
        };
      case 'literature':
        return {
          title: 'Literatur & Basis Ilmiah (EBM)',
          desc: 'Direktori komprehensif pedoman PNPK Kemenkes, konsensus organisasi profesi & standar internasional',
          icon: BookMarked,
          iconColor: 'text-teal-600 dark:text-teal-400 bg-teal-500/10 border-teal-400/30',
          headerBg: 'bg-gradient-to-r from-teal-50/90 via-cyan-50/50 to-white/95 dark:from-[#03181a]/95 dark:via-[#052529]/90 dark:to-[#020d0e]/95 border-b border-teal-200/60 dark:border-teal-500/25',
          glowAccent: 'from-teal-500/10 via-cyan-500/5 to-transparent'
        };
      case 'history':
        return {
          title: 'Riwayat Pemeriksaan',
          desc: 'Rekam jejak simulasi & penelusuran interaksi',
          icon: History,
          iconColor: 'text-purple-600 dark:text-purple-400 bg-purple-500/10 border-purple-400/30',
          headerBg: 'bg-gradient-to-r from-purple-50/90 via-indigo-50/50 to-white/95 dark:from-[#110722]/95 dark:via-[#1a0b33]/90 dark:to-[#090312]/95 border-b border-purple-200/60 dark:border-purple-500/25',
          glowAccent: 'from-purple-500/10 via-indigo-500/5 to-transparent'
        };
      case 'renal-adjuster':
        return {
          title: 'Kalkulator Medis & Penyesuaian Dosis',
          desc: 'Suite kalkulator farmako-klinis terpadu: Dosis Ginjal, Hepar, Syringe Pump, Opioid, IBW, dan Skor Klinis',
          icon: Calculator,
          iconColor: 'text-violet-600 dark:text-violet-400 bg-violet-500/10 border-violet-400/30',
          headerBg: 'bg-gradient-to-r from-violet-50/90 via-purple-50/50 to-white/95 dark:from-[#120824]/95 dark:via-[#1c0c38]/90 dark:to-[#0a0414]/95 border-b border-violet-200/60 dark:border-violet-500/25',
          glowAccent: 'from-violet-500/10 via-purple-500/5 to-transparent'
        };
      case 'pediatric':
        return {
          title: 'Kalkulator Dosis Pediatrik & Puyer',
          desc: 'Perhitungan dosis anak berbasis BB/BSA, konversi puyer, takaran sirup & batas dosis toksik',
          icon: Baby,
          iconColor: 'text-rose-500 dark:text-rose-400 bg-rose-500/10 border-rose-400/30',
          headerBg: 'bg-gradient-to-r from-rose-50/90 via-pink-50/50 to-white/95 dark:from-[#1d0810]/95 dark:via-[#2b0c17]/90 dark:to-[#100308]/95 border-b border-rose-200/60 dark:border-rose-500/25',
          glowAccent: 'from-rose-500/10 via-pink-500/5 to-transparent'
        };
      case 'iv-compatibility':
        return {
          title: 'Uji Kompatibilitas Injeksi IV',
          desc: 'Skrining kompatibilitas percabangan Y-Site, presipitasi pelarut infus & stabilitas rekonstitusi',
          icon: Syringe,
          iconColor: 'text-sky-600 dark:text-sky-400 bg-sky-500/10 border-sky-400/30',
          headerBg: 'bg-gradient-to-r from-sky-50/90 via-blue-50/50 to-white/95 dark:from-[#031522]/95 dark:via-[#041f33]/90 dark:to-[#020c13]/95 border-b border-sky-200/60 dark:border-sky-500/25',
          glowAccent: 'from-sky-500/10 via-blue-500/5 to-transparent'
        };
      case 'toxicology':
        return {
          title: 'Toksikologi, Overdosis & Antidotum IGD',
          desc: 'Rujukan cepat protokol penanganan intoksikasi darurat, dosis antidotum baku emas & kalkulator Nomogram Rumack-Matthew SIKer BPOM',
          icon: AlertOctagon,
          iconColor: 'text-rose-600 dark:text-rose-400 bg-rose-500/10 border-rose-400/30',
          headerBg: 'bg-gradient-to-r from-rose-50/90 via-red-50/50 to-white/95 dark:from-[#1c0808]/95 dark:via-[#2a0c0c]/90 dark:to-[#100303]/95 border-b border-rose-200/60 dark:border-rose-500/25',
          glowAccent: 'from-rose-500/10 via-red-500/5 to-transparent'
        };
      case 'high-alert':
        return {
          title: 'Manajemen Keamanan Obat High-Alert & LASA/NORUM',
          desc: 'Standar Akreditasi Kemenkes STARKES SKP 3, label peringatan visual, elektrolit pekat & sitostatika',
          icon: ShieldAlert,
          iconColor: 'text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-400/30',
          headerBg: 'bg-gradient-to-r from-amber-50/90 via-orange-50/50 to-white/95 dark:from-[#1a0e03]/95 dark:via-[#261505]/90 dark:to-[#0e0801]/95 border-b border-amber-200/60 dark:border-amber-500/25',
          glowAccent: 'from-amber-500/10 via-orange-500/5 to-transparent'
        };
      case 'pricing':
        return {
          title: 'Paket Berlangganan & Lisensi Profesional',
          desc: 'Pilihan paket akses penuh fitur interaksi obat klinis, kalkulator medis & database farmasi',
          icon: CreditCard,
          iconColor: 'text-teal-600 dark:text-teal-400 bg-teal-500/10 border-teal-400/30',
          headerBg: 'bg-gradient-to-r from-teal-50/90 via-emerald-50/50 to-white/95 dark:from-[#031818]/95 dark:via-[#052525]/90 dark:to-[#020d0d]/95 border-b border-teal-200/60 dark:border-teal-500/25',
          glowAccent: 'from-teal-500/10 via-emerald-500/5 to-transparent'
        };
      case 'admin-branding':
        return {
          title: 'Kustomisasi Kop & Branding Instansi',
          desc: 'Pengaturan kop surat resep, logo klinik/apotek, stempel digital & identitas faskes',
          icon: Building2,
          iconColor: 'text-pink-600 dark:text-pink-400 bg-pink-500/10 border-pink-400/30',
          headerBg: 'bg-gradient-to-r from-pink-50/90 via-rose-50/50 to-white/95 dark:from-[#1a0614]/95 dark:via-[#26091e]/90 dark:to-[#0e020a]/95 border-b border-pink-200/60 dark:border-pink-500/25',
          glowAccent: 'from-pink-500/10 via-rose-500/5 to-transparent'
        };
      case 'swamedikasi':
        return {
          title: 'Swamedikasi & Clinical Triage Keluhan',
          desc: 'Panduan pemilihan obat bebas & OWA resmi Kemenkes RI, penapisan tanda bahaya ke dokter, dan terapi alami',
          icon: Sparkles,
          iconColor: 'text-amber-500 dark:text-amber-300 bg-amber-500/15 border-amber-400/40 shadow-xs',
          headerBg: 'bg-gradient-to-r from-amber-50/90 via-orange-50/50 to-white/95 dark:from-[#1c0f03]/95 dark:via-[#291705]/90 dark:to-[#0e0701]/95 border-b border-amber-200/60 dark:border-amber-500/25',
          glowAccent: 'from-amber-500/10 via-orange-500/5 to-transparent'
        };
      case 'whatsapp-pio':
        return {
          title: 'Kartu PIO Pasien WhatsApp',
          desc: 'Generator kartu edukasi aturan pakai & etiket resep siap kirim langsung ke WhatsApp pasien',
          icon: MessageSquare,
          iconColor: 'text-teal-600 dark:text-teal-400 bg-teal-500/10 border-teal-400/30',
          headerBg: 'bg-gradient-to-r from-teal-50/90 via-emerald-50/50 to-white/95 dark:from-[#031816]/95 dark:via-[#052522]/90 dark:to-[#020d0c]/95 border-b border-teal-200/60 dark:border-teal-500/25',
          glowAccent: 'from-teal-500/10 via-emerald-500/5 to-transparent'
        };
      case 'sop':
        return {
          title: 'Standar Operasional Prosedur (SOP) Farmasi',
          desc: 'Kumpulan SOP Pelayanan Kefarmasian berstandar Permenkes No. 73/2016 & BPOM',
          icon: ClipboardList,
          iconColor: 'text-slate-700 dark:text-slate-300 bg-slate-500/10 border-slate-400/30',
          headerBg: 'bg-gradient-to-r from-slate-100/90 via-slate-50/50 to-white/95 dark:from-[#0d131a]/95 dark:via-[#141d27]/90 dark:to-[#070a0e]/95 border-b border-slate-200/70 dark:border-slate-700/50',
          glowAccent: 'from-slate-500/10 via-slate-400/5 to-transparent'
        };
      case 'regulations':
        return {
          title: 'Regulasi & Kebijakan Farmasi Indonesia',
          desc: 'Kompilasi UU Kesehatan No. 17/2023, Narkotika, Psikotropika, DOWA & PerBPOM',
          icon: Scale,
          iconColor: 'text-amber-700 dark:text-amber-400 bg-amber-500/10 border-amber-400/30',
          headerBg: 'bg-gradient-to-r from-amber-50/90 via-orange-50/50 to-white/95 dark:from-[#1b1203]/95 dark:via-[#261a05]/90 dark:to-[#0e0901]/95 border-b border-amber-200/60 dark:border-amber-600/30',
          glowAccent: 'from-amber-500/10 via-orange-500/5 to-transparent'
        };
      case 'admin-instagram':
      case 'instagram-studio':
        return {
          title: 'Studio Konten & Promosi Instagram',
          desc: 'Generator infografis promosi resolusi tinggi, kartu edukasi klinis, dan caption otomatis',
          icon: Instagram,
          iconColor: 'text-rose-600 dark:text-rose-400 bg-rose-500/10 border-rose-400/30',
          headerBg: 'bg-gradient-to-r from-rose-50/90 via-pink-50/50 to-white/95 dark:from-[#1c0812]/95 dark:via-[#2a0c1c]/90 dark:to-[#10030a]/95 border-b border-rose-200/60 dark:border-rose-500/25',
          glowAccent: 'from-rose-500/10 via-pink-500/5 to-transparent'
        };
      case 'education-generator':
        return {
          title: 'Generator Edukasi Farmasi AI',
          desc: 'Perancang Master Prompt AI untuk Poster, Leaflet, Carousel IG & Naskah Edukasi Pasien',
          icon: Wand2,
          iconColor: 'text-pink-600 dark:text-pink-400 bg-pink-500/10 border-pink-400/30',
          headerBg: 'bg-gradient-to-r from-pink-50/90 via-rose-50/50 to-white/95 dark:from-[#1d0617]/95 dark:via-[#2b0c23]/90 dark:to-[#11030d]/95 border-b border-pink-200/60 dark:border-pink-500/25',
          glowAccent: 'from-pink-500/10 via-rose-500/5 to-transparent'
        };
      case 'antimicrobial-stewardship':
        return {
          title: 'Stewardship Antibiotik (PPRA) & Antibiogram',
          desc: 'Peta kuman antibiogram, klasifikasi WHO AWaRe 2024, evaluasi kualitatif Gyssens, panduan CLSI S/I/R & kalkulator DDD',
          icon: ShieldCheck,
          iconColor: 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-400/30',
          headerBg: 'bg-gradient-to-r from-emerald-50/90 via-teal-50/50 to-white/95 dark:from-[#031916]/95 dark:via-[#052621]/90 dark:to-[#02100e]/95 border-b border-teal-200/60 dark:border-teal-500/25',
          glowAccent: 'from-emerald-500/10 via-teal-500/5 to-transparent'
        };
      case 'admin':
      case 'admin-firebase':
      case 'admin-pricing':
      case 'admin-users':
      case 'admin-subscriptions':
      case 'subscriptions':
        return {
          title: tab === 'subscriptions' || tab === 'admin-subscriptions' 
            ? 'Manajemen Berlangganan Customer' 
            : tab === 'admin-pricing' 
            ? 'Pengaturan Tarif & Hak Akses'
            : tab === 'admin-users'
            ? 'Kelola Tim Administrator'
            : tab === 'admin-firebase'
            ? 'Sinkronisasi Database Firebase'
            : 'Panel Administrasi',
          desc: 'Pengelolaan basis data obat, hak akses subskripsi, akun tim & integrasi Cloud Firestore',
          icon: tab === 'subscriptions' || tab === 'admin-subscriptions' ? UserCheck : Database,
          iconColor: 'text-amber-500 dark:text-amber-300 bg-amber-500/15 border-amber-400/40 shadow-xs',
          headerBg: 'bg-gradient-to-r from-amber-50/85 via-orange-50/40 to-white/95 dark:from-[#120e03]/95 dark:via-[#1e1705]/90 dark:to-[#0a0701]/95 border-b border-amber-300/50 dark:border-amber-500/30',
          glowAccent: 'from-amber-500/15 via-yellow-500/5 to-transparent'
        };
      default:
        return {
          title: 'Farmasi & Klinik DDI Interaksi',
          desc: 'Platform Integrasi Klinis Penilaian Interaksi Obat',
          icon: Sparkles,
          iconColor: 'text-teal-600 dark:text-teal-400 bg-teal-500/10 border-teal-400/30',
          headerBg: 'bg-gradient-to-r from-teal-50/85 via-cyan-50/40 to-white/95 dark:from-[#031518]/95 dark:via-[#051e24]/90 dark:to-[#020b0d]/95 border-b border-teal-200/60 dark:border-teal-500/25',
          glowAccent: 'from-teal-500/10 via-cyan-500/5 to-transparent'
        };
    }
  };

  const currentTabMeta = getTabTitle(activeTab);
  const { title, desc, icon: TabIcon, iconColor, headerBg, glowAccent } = currentTabMeta;

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 px-4 sm:px-6 lg:px-8 py-3 print:hidden backdrop-blur-2xl shadow-xs relative overflow-hidden ${headerBg}`}>
      {/* Subtle Dynamic Ambient Glow Accent */}
      <div className={`absolute -top-12 left-1/4 w-96 h-24 bg-gradient-to-b ${glowAccent} blur-3xl pointer-events-none -z-10`} />

      <div className="flex items-center justify-between gap-4 relative z-10">
        
        {/* Mobile Sidebar Toggle & Title */}
        <div className="flex items-center gap-3">
          {onToggleMobileSidebar && (
            <button
              onClick={onToggleMobileSidebar}
              className="md:hidden p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:text-teal-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Buka Menu Sidebar"
            >
              <Menu className="w-6 h-6" />
            </button>
          )}

          <div className="md:hidden">
            <button onClick={() => setActiveTab(currentUser ? 'dashboard' : 'landing')}>
              <Logo size="sm" variant="light" />
            </button>
          </div>

          {/* Desktop Tab Header Info */}
          <div className="hidden md:flex items-center gap-3">
            {TabIcon && (
              <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 shadow-2xs ${iconColor}`}>
                <TabIcon className="w-5 h-5 stroke-[2.2]" />
              </div>
            )}
            <div>
              <h1 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2 font-outfit">
                {title}
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-300/90 hidden lg:block font-medium">{desc}</p>
            </div>
          </div>
        </div>

        {/* Right Header Actions */}
        <div className="flex items-center gap-2.5 sm:gap-3">

          {/* Clinical Database Live Version Pill */}
          {(() => {
            const latest = getLatestChangelogEntry();
            const dateShort = latest.releaseDate.split(' ')[0] + ' ' + (latest.releaseDate.split(' ')[1] || '').slice(0, 3);
            const timeShort = latest.releaseTime.replace(' WIB', '');
            return (
              <button
                onClick={() => setActiveTab('changelog')}
                title={`Audit Trail: Riwayat Pembaruan Data Medis & FORNAS (${latest.releaseDate}, ${latest.releaseTime}) - Buka Halaman Riwayat Update Data`}
                className="h-9 px-3 rounded-full text-xs font-bold text-purple-900 dark:text-purple-200 bg-purple-500/15 hover:bg-purple-500/25 border border-purple-500/30 hover:border-fuchsia-500/60 shadow-2xs cursor-pointer font-outfit hover:scale-105 transition-all flex items-center gap-1.5 shrink-0"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-500"></span>
                </span>
                <span className="font-mono">{latest.version}</span>
                <span className="hidden sm:inline text-[11px] text-purple-700 dark:text-purple-300 font-semibold">• {dateShort} {timeShort}</span>
              </button>
            );
          })()}

          {/* Telegram Community Join Button (Icon-only circle) */}
          <a
            href="https://t.me/+lHiIMC_TdoM2NTk1"
            target="_blank"
            rel="noopener noreferrer"
            title="Gabung Komunitas Telegram Apoteker & Tenaga Kesehatan FarmasiDruggist"
            className="w-9 h-9 rounded-full bg-[#229ED9]/15 hover:bg-[#229ED9]/25 text-[#1b8bc2] dark:text-sky-300 border border-[#229ED9]/40 hover:border-[#229ED9]/70 flex items-center justify-center transition-all shadow-2xs hover:scale-105 shrink-0"
            aria-label="Gabung Komunitas Telegram"
          >
            <Send className="w-4 h-4 fill-[#229ED9] dark:fill-sky-300 -translate-x-0.5 translate-y-0.5" />
          </a>


          {/* Trial Active Badge */}
          {isTrialActive && (
            <button
              onClick={onOpenPricingModal}
              title={`Masa Uji Coba Pro Sedang Aktif: ${trialRemainingText || 'Aktif'} - Klik untuk Ambil Promo Permanen`}
              className="h-9 px-3 rounded-full text-xs font-black text-amber-950 dark:text-amber-200 bg-amber-400/90 dark:bg-amber-950/80 border border-amber-500/50 shadow-xs cursor-pointer font-outfit hover:scale-105 transition-all flex items-center gap-1.5 shrink-0"
            >
              <Clock className="w-3.5 h-3.5 text-amber-950 dark:text-amber-300 animate-pulse" />
              <span>Trial: {trialRemainingText || 'Aktif'}</span>
            </button>
          )}

          {/* Quick Trial Start Button for Pemula Users and Admin Testing */}
          {isTrialEnabled && currentUser && !isTrialActive && (!hasClaimedTrial || currentUser.role === 'admin') && onStartTrial && (
            <button
              onClick={onStartTrial}
              title="Coba Gratis Paket Pro Selama 3 Hari"
              className="h-9 px-3.5 rounded-full text-xs font-black text-white bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 transition-all shadow-xs cursor-pointer font-outfit hover:scale-105 flex items-center gap-1.5 shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5 fill-white" />
              <span>Coba Pro</span>
            </button>
          )}

          {/* Quick Pricing Badge */}
          {currentUser && (currentUser.subscriptionPlan === 'Gratis' || currentUser.subscriptionPlan === 'Pemula') && !isTrialActive && (
            <button
              onClick={onOpenPricingModal}
              title="Upgrade ke Paket Pro Akses Penuh"
              className="h-9 px-3.5 rounded-full text-xs font-black text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all shadow-xs cursor-pointer font-outfit flex items-center gap-1.5 shrink-0 hover:scale-105"
            >
              <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
              <span>Upgrade</span>
            </button>
          )}

          {/* User Account / Auth Actions */}
          {!currentUser ? (
            <div className="flex items-center gap-2 font-outfit">
              <button
                onClick={onOpenAuthModal}
                className="h-9 px-3.5 text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer shrink-0"
              >
                Masuk
              </button>
              <button
                onClick={onOpenPricingModal}
                className="h-9 px-3.5 text-xs font-bold text-white bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 rounded-full shadow-xs transition-all cursor-pointer hover:scale-[1.02] shrink-0"
              >
                Berlangganan
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              {/* Header profile chip on desktop (clickable to edit profile) */}
              <button
                type="button"
                onClick={onOpenProfileModal}
                title={`Profil: ${currentUser.name} (${currentUser.subscriptionPlan}) - Klik untuk Edit Profil`}
                className="hidden sm:flex items-center gap-2 h-9 pl-2 pr-2.5 bg-slate-50 dark:bg-slate-900 hover:bg-teal-50 dark:hover:bg-teal-950/40 rounded-full border border-slate-200 dark:border-slate-800 hover:border-teal-400 dark:hover:border-teal-700 shadow-2xs transition-all cursor-pointer group shrink-0"
              >
                <div className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-700 dark:text-teal-300 font-black text-[11px] flex items-center justify-center font-outfit shrink-0">
                  {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : 'U'}
                </div>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-teal-700 dark:group-hover:text-teal-300 font-outfit max-w-[120px] truncate">
                  {currentUser.name.split(' ')[0]}
                </span>
                {isTrialActive ? (
                  <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/70 text-amber-900 dark:text-amber-200 border border-amber-300 dark:border-amber-700 flex items-center gap-0.5 font-outfit shrink-0">
                    <Sparkles className="w-2.5 h-2.5 text-amber-500" />
                    Trial
                  </span>
                ) : (
                  <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 flex items-center gap-0.5 font-outfit shrink-0">
                    <ShieldCheck className="w-2.5 h-2.5 text-teal-600 dark:text-teal-400" />
                    {currentUser.subscriptionPlan}
                  </span>
                )}
              </button>

              {/* Logout Button (Icon-only circle) */}
              <button
                onClick={onLogout}
                title="Keluar / Logout dari Akun"
                className="w-9 h-9 rounded-full text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 dark:hover:bg-rose-900/60 border border-rose-200 dark:border-rose-800/60 transition-all flex items-center justify-center cursor-pointer hover:scale-105 shadow-2xs shrink-0"
                aria-label="Keluar / Logout"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

      </div>
    </header>
  );
};
