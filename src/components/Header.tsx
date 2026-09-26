import React, { useState, useEffect, useRef } from 'react';
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
  HelpCircle,
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
  Languages,
  Users,
  ArrowLeft,
  Settings,
  ExternalLink
} from 'lucide-react';
import { subscribeVisitorStats, VisitorStats, getVisitorStats } from '../services/visitorStatsService';


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

const formatCompactVisits = (num: number): string => {
  if (!num || num <= 0) return '0';
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1000) {
    const inK = num / 1000;
    if (inK >= 100) {
      return Math.round(inK) + 'K';
    }
    return inK.toFixed(1) + 'K';
  }
  return num.toString();
};

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
  const [isScrolled, setIsScrolled] = useState(false);
  const [visitorStats, setVisitorStats] = useState<VisitorStats>(() => getVisitorStats());
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileDropdownRef = useRef<HTMLDivElement>(null);

  // Close profile dropdown on outside click or escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsProfileOpen(false);
      }
    };
    if (isProfileOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isProfileOpen]);

  useEffect(() => {
    const unsubscribe = subscribeVisitorStats((newStats) => {
      setVisitorStats(newStats);
    });
    return () => unsubscribe();
  }, []);

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

  const isLanding = activeTab === 'landing' || activeTab === 'pricing' || activeTab === 'faq' || activeTab === 'login' || activeTab === 'support';

  // Shared Profile Dropdown Component (NgodingPakeAI Style)
  const renderProfileDropdown = () => {
    if (!currentUser) return null;
    const latest = getLatestChangelogEntry();

    const planLabel = isTrialActive 
      ? 'Trial' 
      : (currentUser.role === 'admin' 
          ? 'Admin' 
          : (currentUser.subscriptionPlan || 'Free'));

    return (
      <div className="relative" ref={profileDropdownRef}>
        {/* Avatar Trigger Button */}
        <button
          type="button"
          onClick={() => setIsProfileOpen(prev => !prev)}
          className={`relative p-0.5 rounded-full transition-all cursor-pointer focus:outline-none flex items-center justify-center shrink-0 ${
            isProfileOpen 
              ? 'ring-2 ring-teal-500 dark:ring-teal-400 shadow-md' 
              : 'hover:ring-2 hover:ring-slate-300 dark:hover:ring-slate-600'
          }`}
          aria-expanded={isProfileOpen}
          aria-haspopup="true"
          title={`Akun: ${currentUser.name} (${planLabel})`}
        >
          <div className="w-8.5 h-8.5 rounded-full bg-gradient-to-tr from-teal-700 via-teal-600 to-emerald-500 text-white font-black text-xs flex items-center justify-center shadow-xs border border-white/50 dark:border-slate-700 overflow-hidden font-outfit select-none">
            {currentUser.photoURL ? (
              <img 
                src={currentUser.photoURL} 
                alt={currentUser.name} 
                className="w-full h-full object-cover" 
              />
            ) : (
              <span>
                {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : 'U'}
              </span>
            )}
          </div>
        </button>

        {/* Dropdown Menu Modal/Card (NgodingPakeAI Style) */}
        {isProfileOpen && (
          <div 
            className="absolute right-0 top-full mt-2 w-72 sm:w-80 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl shadow-xl shadow-slate-900/10 dark:shadow-black/60 p-2 z-50 text-left font-sans animate-in fade-in zoom-in-95 duration-150 max-w-[calc(100vw-1.5rem)]"
            role="menu"
            aria-orientation="vertical"
          >
            {/* User Identity Header */}
            <div className="px-3 py-2.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl mb-1.5 border border-slate-100 dark:border-slate-800/80">
              <div className="flex items-center justify-between gap-2">
                <p className="font-bold text-sm text-slate-900 dark:text-white truncate font-outfit">
                  {currentUser.name || 'Andry Maulana'}
                </p>
                <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full border shrink-0 font-outfit ${
                  currentUser.role === 'admin'
                    ? 'bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-300 border-amber-300 dark:border-amber-700'
                    : isTrialActive
                      ? 'bg-cyan-100 dark:bg-cyan-950/80 text-cyan-900 dark:text-cyan-300 border-cyan-300 dark:border-cyan-700'
                      : 'bg-teal-100 dark:bg-teal-950/80 text-teal-800 dark:text-teal-300 border-teal-200 dark:border-teal-800'
                }`}>
                  {planLabel}
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5 font-sans">
                {currentUser.email || 'andrymaul.aem@gmail.com'}
              </p>
            </div>

            <div className="space-y-0.5 text-xs font-semibold text-slate-700 dark:text-slate-200">
              {/* Admin Hub (Only if admin) */}
              {currentUser.role === 'admin' && (
                <a
                  href={activeTab.startsWith('admin') ? '/dashboard' : '/admin'}
                  onClick={(e) => {
                    if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
                      e.preventDefault();
                      setIsProfileOpen(false);
                      setActiveTab(activeTab.startsWith('admin') ? 'dashboard' : 'admin');
                    }
                  }}
                  className="w-full flex items-center justify-between px-3 py-2 hover:bg-amber-50 dark:hover:bg-amber-950/40 rounded-xl transition-colors cursor-pointer text-amber-900 dark:text-amber-200 group"
                  role="menuitem"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-amber-500/15 flex items-center justify-center text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <span className="font-bold font-outfit">
                      {activeTab.startsWith('admin') ? 'Dashboard Medis' : 'Admin Hub'}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-800 dark:text-amber-300 font-outfit">
                    Pusat Kontrol
                  </span>
                </a>
              )}

              {/* Pengaturan Profil */}
              <a
                href="/pengaturan"
                onClick={(e) => {
                  if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
                    e.preventDefault();
                    setIsProfileOpen(false);
                    setActiveTab('settings');
                  }
                }}
                className="w-full flex items-center gap-2.5 px-3 py-2 hover:bg-slate-100/80 dark:hover:bg-slate-800/70 rounded-xl transition-colors cursor-pointer text-slate-700 dark:text-slate-200"
                role="menuitem"
              >
                <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400">
                  <Settings className="w-4 h-4" />
                </div>
                <span>Pengaturan</span>
              </a>

              {/* Bantuan & Support */}
              <a
                href="/bantuan"
                onClick={(e) => {
                  if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
                    e.preventDefault();
                    setIsProfileOpen(false);
                    setActiveTab('support');
                  }
                }}
                className="w-full flex items-center gap-2.5 px-3 py-2 hover:bg-slate-100/80 dark:hover:bg-slate-800/70 rounded-xl transition-colors cursor-pointer text-slate-700 dark:text-slate-200"
                role="menuitem"
              >
                <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <span>Bantuan</span>
              </a>

              {/* Riwayat Update / Changelog */}
              <a
                href="/changelog"
                onClick={(e) => {
                  if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
                    e.preventDefault();
                    setIsProfileOpen(false);
                    setActiveTab('changelog');
                  }
                }}
                className="w-full flex items-center justify-between px-3 py-2 hover:bg-purple-50/70 dark:hover:bg-purple-950/30 rounded-xl transition-colors cursor-pointer text-slate-700 dark:text-slate-300"
                role="menuitem"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-purple-100/70 dark:bg-purple-950/50 flex items-center justify-center text-purple-600 dark:text-purple-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <span>Riwayat Update</span>
                </div>
                <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-300 font-bold">
                  {latest.version}
                </span>
              </a>
            </div>

            {/* Separator */}
            <div className="my-1.5 border-t border-slate-100 dark:border-slate-800" />

            {/* Sign Out Action */}
            <button
              type="button"
              onClick={() => {
                setIsProfileOpen(false);
                onLogout();
              }}
              className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded-xl transition-colors cursor-pointer"
              role="menuitem"
            >
              <div className="w-7 h-7 rounded-lg bg-rose-50 dark:bg-rose-950/40 flex items-center justify-center text-rose-500">
                <LogOut className="w-4 h-4" />
              </div>
              <span className="font-outfit">Sign out</span>
            </button>
          </div>
        )}
      </div>
    );
  };

  // Landing Header Rendering - Clean Seamless Background Integration
  if (isLanding) {
    return (
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#daf6f2]/85 backdrop-blur-md border-b border-teal-900/10 shadow-xs' 
          : 'bg-transparent border-b border-transparent shadow-none'
      }`}>
        <div className="w-full px-3 sm:px-6 lg:px-12 py-2.5 sm:py-3 flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Brand Logo */}
          <a 
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState(null, '', '/');
              setActiveTab('landing');
              window.scrollTo({ top: 0, behavior: 'auto' });
            }}
            className="focus:outline-none flex items-center gap-1.5 sm:gap-2 group text-left cursor-pointer transition-transform hover:scale-[1.02] shrink-0"
          >
            <Logo size="sm" variant="light" />
          </a>

          {/* Center: Live Visitor Counter Badge */}
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/60 dark:bg-slate-800/60 border border-teal-200/60 dark:border-teal-700/60 shadow-2xs backdrop-blur-xs">
            <Users className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0" />
            <span className="font-mono text-xs font-black text-slate-900 dark:text-white">
              {formatCompactVisits(visitorStats.totalVisits)}
            </span>
            <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300 font-outfit">
              Visitor
            </span>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center space-x-2 shrink-0">
            {/* FAQ Button */}
            <a
              href="/faq"
              onClick={(e) => {
                e.preventDefault();
                if (window.location.pathname !== '/faq') {
                  window.history.pushState(null, '', '/faq');
                }
                setActiveTab('faq');
                window.scrollTo({ top: 0, behavior: 'auto' });
              }}
              title="Pertanyaan Sering Diajukan (/faq)"
              className={`h-8 px-3 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-1 whitespace-nowrap cursor-pointer font-outfit ${
                activeTab === 'faq'
                  ? 'text-teal-900 dark:text-teal-200 bg-teal-50 dark:bg-teal-950/60 border border-teal-300 dark:border-teal-700 shadow-xs'
                  : 'text-slate-700 dark:text-slate-300 hover:text-teal-900 dark:hover:text-teal-300 bg-white/70 hover:bg-white border border-teal-200/60 shadow-2xs hover:scale-[1.02] active:scale-95'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0" />
              <span>FAQ</span>
            </a>

            {/* Pricing Button */}
            <a
              href="/pricing"
              onClick={(e) => {
                e.preventDefault();
                if (window.location.pathname !== '/pricing') {
                  window.history.pushState(null, '', '/pricing');
                }
                setActiveTab('pricing');
                window.scrollTo({ top: 0, behavior: 'auto' });
              }}
              title="Lihat Tarif & Lisensi Layanan (/pricing)"
              className={`h-8 px-3 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-1 whitespace-nowrap cursor-pointer font-outfit ${
                activeTab === 'pricing'
                  ? 'text-teal-900 dark:text-teal-200 bg-teal-50 dark:bg-teal-950/60 border border-teal-300 dark:border-teal-700 shadow-xs'
                  : 'text-slate-700 dark:text-slate-300 hover:text-teal-900 dark:hover:text-teal-300 bg-white/70 hover:bg-white border border-teal-200/60 shadow-2xs hover:scale-[1.02] active:scale-95'
              }`}
            >
              <CreditCard className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0" />
              <span>Pricing</span>
            </a>

            {!currentUser ? (
              <a
                href="/login"
                onClick={(e) => {
                  e.preventDefault();
                  if (window.location.pathname !== '/login') {
                    window.history.pushState(null, '', '/login');
                  }
                  setActiveTab('login');
                  window.scrollTo({ top: 0, behavior: 'auto' });
                }}
                title="Masuk ke Akun Anda (/login)"
                className="h-8 px-4 rounded-full text-xs font-black text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 active:scale-95 shadow-xs hover:shadow-orange-500/25 transition-all flex items-center justify-center whitespace-nowrap cursor-pointer font-outfit tracking-wide"
              >
                LOG IN
              </a>
            ) : (
              <div className="flex items-center gap-2">
                <a
                  href="/dashboard"
                  onClick={(e) => {
                    if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
                      e.preventDefault();
                      setActiveTab('dashboard');
                    }
                  }}
                  className="text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 px-3 py-1.5 rounded-full shadow-xs transition-all flex items-center gap-1 cursor-pointer font-outfit"
                >
                  <Sparkles className="w-3 h-3" />
                  <span className="hidden xs:inline sm:inline">Dashboard</span>
                </a>
                {renderProfileDropdown()}
              </div>
            )}
          </div>
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
      case 'settings':
        return {
          title: 'Pengaturan Akun & Profil',
          desc: 'Kelola informasi identitas, instansi faskes, kontak dan izin praktik klinis Anda',
          icon: Settings,
          iconColor: 'text-teal-700 bg-teal-50 border-teal-200/80',
          headerBg: 'bg-white/95 border-b border-slate-200/80 shadow-xs',
          glowAccent: 'from-teal-500/10 via-emerald-500/5 to-transparent'
        };
      case 'support':
        return {
          title: 'Bantuan & Support',
          desc: 'Hubungi tim bantuan FarmasiDruggist via Email dan Telegram',
          icon: HelpCircle,
          iconColor: 'text-orange-600 bg-orange-50 border-orange-200/80',
          headerBg: 'bg-white/95 border-b border-slate-200/80 shadow-xs',
          glowAccent: 'from-orange-500/10 via-amber-500/5 to-transparent'
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
          desc: 'Kompilasi UU Kesehatan No. 17/2023, Permenkes 28/2022, KMK 1803/2024, Narkotika & PerBPOM',
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
      case 'admin-drugs':
      case 'admin-interactions':
      case 'admin-editor':
      case 'admin-logs':
      case 'subscriptions':
        return {
          title: 'Pusat Kontrol Administrator (Admin Hub)',
          desc: 'Manajemen lisensi customer nakes, konfigurasi tarif QRIS, database obat & operasional sistem',
          icon: ShieldCheck,
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
  const { title, desc, icon: TabIcon, iconColor } = currentTabMeta;

  return (
    <header className="sticky top-0 z-40 transition-all duration-300 px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3 print:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-xs relative overflow-visible">
      <div className="flex items-center justify-between gap-3 relative z-10">
        
        {/* Left: Brand Logo & Navigation State */}
        <div className="flex items-center gap-2.5 sm:gap-4 min-w-0">
          <a 
            href={currentUser ? '/dashboard' : '/'}
            onClick={(e) => {
              if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
                e.preventDefault();
                setActiveTab(currentUser ? 'dashboard' : 'landing');
              }
            }}
            className="focus:outline-none flex items-center gap-1.5 sm:gap-2 group text-left cursor-pointer transition-transform hover:scale-[1.02] p-1 -ml-1 rounded-2xl hover:bg-slate-100/60 shrink-0"
            title="FARMASIDRUGGIST - Klik untuk Kembali ke Dashboard Utama"
          >
            <Logo size="sm" variant="light" />
          </a>

          {activeTab !== 'dashboard' && (
            <div className="hidden sm:block w-px h-6 bg-slate-200/90 shrink-0" />
          )}

          {activeTab === 'dashboard' ? (
            <div className="hidden md:flex items-center gap-2">
              <span className="text-xs font-black uppercase tracking-wider text-teal-800 bg-teal-50 px-2.5 py-1 rounded-xl border border-teal-200/80 font-outfit">
                Dashboard Utama
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <a
                href="/dashboard"
                onClick={(e) => {
                  if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
                    e.preventDefault();
                    setActiveTab('dashboard');
                  }
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-teal-50 text-slate-700 hover:text-teal-700 border border-slate-200/90 text-xs font-extrabold font-outfit transition-all cursor-pointer hover:scale-105 shadow-2xs shrink-0"
                title="Kembali ke Dashboard Utama (/dashboard)"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Dashboard</span>
              </a>

              {TabIcon && (
                <div className={`hidden sm:flex w-8 h-8 rounded-xl border items-center justify-center shrink-0 shadow-2xs ${iconColor}`}>
                  <TabIcon className="w-4 h-4 stroke-[2.2]" />
                </div>
              )}

              <div className="min-w-0">
                <h1 className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight truncate font-outfit">
                  {title}
                </h1>
              </div>
            </div>
          )}
        </div>

        {/* Right Header Actions: Clean NgodingPakeAI Style */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          
          {/* Plan Status Pill */}
          <span className="text-[11px] sm:text-xs font-semibold text-slate-500 dark:text-slate-400 px-2 sm:px-2.5 py-1 rounded-full bg-slate-100/90 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 font-outfit shrink-0">
            {isTrialActive ? 'Trial' : (currentUser?.subscriptionPlan === 'pro' || currentUser?.subscriptionPlan === 'Pro' || currentUser?.role === 'admin' ? 'Pro' : 'Free')}
          </span>

          {/* Upgrade CTA Button (Identical to NgodingPakeAI Orange Button) */}
          <a
            href="/pricing"
            onClick={(e) => {
              if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
                e.preventDefault();
                setActiveTab('pricing');
              }
            }}
            title="Lihat Daftar Paket, Tarif Layanan & Lisensi (/pricing)"
            className="h-8 sm:h-8.5 px-3 sm:px-4 rounded-full text-xs font-black text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 active:scale-95 shadow-xs hover:shadow-orange-500/25 transition-all cursor-pointer font-outfit tracking-wide flex items-center gap-1 shrink-0"
          >
            <span>Upgrade</span>
          </a>

          {/* User Profile Avatar with Popover Dropdown Menu */}
          {currentUser ? (
            renderProfileDropdown()
          ) : (
            <a
              href="/login"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab('login');
              }}
              className="h-8.5 px-4 text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition-colors cursor-pointer font-outfit"
            >
              Masuk
            </a>
          )}

        </div>

      </div>
    </header>
  );
};
