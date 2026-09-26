import React, { useState, useMemo } from 'react';
import { UserProfile, Drug, DrugInteraction } from '../types';
import { getPathFromTab } from '../utils/routes';
import { 
  Sparkles, 
  Search, 
  X,
  Gift
} from 'lucide-react';
import {
  DuoInteractionIcon,
  DuoPregnancyIcon,
  DuoHerbalIcon,
  DuoSideEffectsIcon,
  DuoIvCompatibilityIcon,
  DuoToxicologyIcon,
  DuoHighAlertIcon,
  DuoPolypharmacyIcon,
  DuoGuidelinesIcon,
  DuoBudIcon,
  DuoMedicalCalculatorIcon,
  DuoAntimicrobialIcon,
  DuoSwamedikasiIcon,
  DuoWhatsappPioIcon,
  DuoEducationAiIcon,
  DuoUsageGuideIcon,
  DuoLatinTermsIcon,
  DuoCompetencyApotekerIcon,
  DuoCompetencyVokasiIcon,
  DuoDrugNotesIcon,
  DuoLiteratureIcon,
  DuoSopIcon,
  DuoRegulationsIcon,
  DuoDrugCatalogIcon
} from './icons/ClinicalDuoIcons';

interface DashboardProps {
  currentUser: UserProfile | null;
  drugs: Drug[];
  interactions: DrugInteraction[];
  onSelectTab: (tab: string) => void;
  onSearchDrug?: (query: string) => void;
  onCheckInteractionWith?: (drugName: string) => void;
  onOpenPricingModal: () => void;
  onStartTrial?: () => void;
  isTrialActive?: boolean;
  trialRemainingText?: string;
  hasClaimedTrial?: boolean;
  onSimulateTrial?: (mode: 'free-new' | 'start-trial' | 'trial-expired' | 'reset-admin') => void;
  isTrialEnabled?: boolean;
  trialDurationDays?: number;
  onToggleTrialStatus?: () => void;
}

interface LauncherModule {
  id: string;
  title: string;
  keywords?: string;
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
  iconBg: string;
}

const STARTER_MODULE_IDS = new Set(['drugs', 'swamedikasi', 'usage']);

export const Dashboard: React.FC<DashboardProps> = ({
  currentUser,
  drugs = [],
  interactions = [],
  onSelectTab,
  onOpenPricingModal,
  onStartTrial,
  isTrialActive = false,
  trialRemainingText,
  hasClaimedTrial = false,
  onSimulateTrial,
  isTrialEnabled = true,
  trialDurationDays = 3,
  onToggleTrialStatus
}) => {
  const [moduleSearch, setModuleSearch] = useState('');
  const [selectedPackageFilter, setSelectedPackageFilter] = useState<'all' | 'starter' | 'pro'>('all');

  // Standar Palet Warna Pilihan B: Deep Pine Teal (#005f5a) Dominan + Aksen Peringatan Bahaya Medis
  const PINE_TEAL = 'text-[#005f5a] dark:text-teal-400';

  // Seluruh 27 modul klinis dalam format Launcher Ringkas (Ikon + Nama Tanpa Pengotakan)
  const allModules: LauncherModule[] = useMemo(() => {
    const list: LauncherModule[] = [
      // === MODUL STARTER (FREE) DI PALING AWAL ===
      {
        id: 'drugs',
        title: 'Katalog Obat',
        keywords: 'monografi katalog informasi obat bpom mims indikasi dosis efek samping',
        icon: DuoDrugCatalogIcon,
        iconColor: PINE_TEAL,
        iconBg: 'bg-teal-50 dark:bg-teal-950/60'
      },
      {
        id: 'swamedikasi',
        title: 'Swamedikasi',
        keywords: 'swamedikasi triage apotek keluhan umum wwham obat bebas dotb rujukan',
        icon: DuoSwamedikasiIcon,
        iconColor: PINE_TEAL,
        iconBg: 'bg-teal-50 dark:bg-teal-950/60'
      },
      {
        id: 'usage',
        title: 'Cara Pakai',
        keywords: 'panduan tata cara pakai sediaan khusus inhaler mdi insulin pen suppositoria obat',
        icon: DuoUsageGuideIcon,
        iconColor: PINE_TEAL,
        iconBg: 'bg-teal-50 dark:bg-teal-950/60'
      },

      // === MODUL PRO TERPADU ===
      // 1. Skrining & Keamanan Resep
      {
        id: 'interactions',
        title: 'Interaksi Obat',
        keywords: 'cek interaksi obat multi obat ddinter drugs.com major moderate',
        icon: DuoInteractionIcon,
        iconColor: PINE_TEAL,
        iconBg: 'bg-teal-50 dark:bg-teal-950/60'
      },
      {
        id: 'pregnancy',
        title: 'Bumil & Busui',
        keywords: 'keamanan ibu hamil menyusui fda pllr laktasi hale teratogenik',
        icon: DuoPregnancyIcon,
        iconColor: PINE_TEAL,
        iconBg: 'bg-teal-50 dark:bg-teal-950/60'
      },
      {
        id: 'herb-drug',
        title: 'Herbal & Jamu',
        keywords: 'interaksi herbal jamu obat oht fitofarmaka fohi suplemen',
        icon: DuoHerbalIcon,
        iconColor: PINE_TEAL,
        iconBg: 'bg-teal-50 dark:bg-teal-950/60'
      },
      {
        id: 'side-effects',
        title: 'Efek Samping',
        keywords: 'efek samping obat meso bpom naranjo hartwig toksisitas organ adr',
        icon: DuoSideEffectsIcon,
        iconColor: PINE_TEAL,
        iconBg: 'bg-teal-50 dark:bg-teal-950/60'
      },
      {
        id: 'iv-compatibility',
        title: 'Injeksi IV',
        keywords: 'kompatibilitas injeksi iv y-site infus icu pelarut ns d5w presipitasi',
        icon: DuoIvCompatibilityIcon,
        iconColor: PINE_TEAL,
        iconBg: 'bg-teal-50 dark:bg-teal-950/60'
      },
      {
        id: 'toxicology',
        title: 'Toksikologi',
        keywords: 'toksikologi overdosis antidotum igd keracunan cito rumack matthew',
        icon: DuoToxicologyIcon,
        iconColor: PINE_TEAL,
        iconBg: 'bg-rose-50 dark:bg-rose-950/60'
      },
      {
        id: 'high-alert',
        title: 'High-Alert & LASA',
        keywords: 'label lasa norum high alert tall man lettering starkes skp 3 kars',
        icon: DuoHighAlertIcon,
        iconColor: PINE_TEAL,
        iconBg: 'bg-amber-50 dark:bg-amber-950/60'
      },
      {
        id: 'polypharmacy',
        title: 'Polifarmasi',
        keywords: 'evaluasi polifarmasi kriteria beers geriatri ags stopp start lansia',
        icon: DuoPolypharmacyIcon,
        iconColor: PINE_TEAL,
        iconBg: 'bg-teal-50 dark:bg-teal-950/60'
      },
      {
        id: 'guidelines',
        title: 'Panduan PNPK',
        keywords: 'panduan terapi klinis pnpk kemenkes ri konsensus spesialis',
        icon: DuoGuidelinesIcon,
        iconColor: PINE_TEAL,
        iconBg: 'bg-teal-50 dark:bg-teal-950/60'
      },

      // 2. Kalkulator Medis & Racikan
      {
        id: 'bud',
        title: 'BUD Racikan',
        keywords: 'stabilitas beyond use date bud racikan puyer sirup salep krim usp 795',
        icon: DuoBudIcon,
        iconColor: PINE_TEAL,
        iconBg: 'bg-teal-50 dark:bg-teal-950/60'
      },
      {
        id: 'renal-adjuster',
        title: 'Kalkulator Medis',
        keywords: 'kalkulator medis dosis klinis ginjal cockcroft gault egfr ckd-epi crcl hepar opioid ibw oksigen',
        icon: DuoMedicalCalculatorIcon,
        iconColor: PINE_TEAL,
        iconBg: 'bg-teal-50 dark:bg-teal-950/60'
      },
      {
        id: 'antimicrobial-stewardship',
        title: 'PPRA Antibiotik',
        keywords: 'stewardship antibiotik ppra aware who 2024 antibiogram gyssens ddd',
        icon: DuoAntimicrobialIcon,
        iconColor: PINE_TEAL,
        iconBg: 'bg-teal-50 dark:bg-teal-950/60'
      },

      // 3. Konseling & Edukasi Pasien
      {
        id: 'whatsapp-pio',
        title: 'Kartu PIO',
        keywords: 'kartu pio whatsapp pasien etiket digital konseling informasi obat',
        icon: DuoWhatsappPioIcon,
        iconColor: PINE_TEAL,
        iconBg: 'bg-teal-50 dark:bg-teal-950/60'
      },
      {
        id: 'education-generator',
        title: 'Edukasi AI',
        keywords: 'generator edukasi farmasi ai master prompt leaflet poster promkes',
        icon: DuoEducationAiIcon,
        iconColor: PINE_TEAL,
        iconBg: 'bg-teal-50 dark:bg-teal-950/60'
      },
      {
        id: 'latin-terms',
        title: 'Singkatan Latin',
        keywords: 'kamus singkatan latin resep signa aturan pakai dokter farmasi fi vi',
        icon: DuoLatinTermsIcon,
        iconColor: PINE_TEAL,
        iconBg: 'bg-teal-50 dark:bg-teal-950/60'
      },

      // 4. Belajar, SOP & Uji Kompetensi
      {
        id: 'competency',
        title: 'UKMPPAI',
        keywords: 'pusat belajar ukmppai apoteker uji kompetensi 653 soal cbt osce kfn iai',
        icon: DuoCompetencyApotekerIcon,
        iconColor: PINE_TEAL,
        iconBg: 'bg-teal-50 dark:bg-teal-950/60'
      },
      {
        id: 'competency-vokasi',
        title: 'UKTVF D3',
        keywords: 'pusat belajar uktvf vokasi d3 farmasi apdfi 480 soal cbt alkes bmhp',
        icon: DuoCompetencyVokasiIcon,
        iconColor: PINE_TEAL,
        iconBg: 'bg-teal-50 dark:bg-teal-950/60'
      },
      {
        id: 'drug-notes',
        title: 'Hafalan Obat',
        keywords: 'hafalan obat jembatan keledai rima klinis flashcard kelas terapi',
        icon: DuoDrugNotesIcon,
        iconColor: PINE_TEAL,
        iconBg: 'bg-teal-50 dark:bg-teal-950/60'
      },
      {
        id: 'literature',
        title: 'Literatur EBM',
        keywords: 'literatur klinis ebm pnpk jurnal ilmiah ashp ada kdigo esc',
        icon: DuoLiteratureIcon,
        iconColor: PINE_TEAL,
        iconBg: 'bg-teal-50 dark:bg-teal-950/60'
      },
      {
        id: 'sop',
        title: 'SOP Farmasi',
        keywords: 'standar operasional prosedur sop pelayanan farmasi apotek permenkes 73',
        icon: DuoSopIcon,
        iconColor: PINE_TEAL,
        iconBg: 'bg-teal-50 dark:bg-teal-950/60'
      },
      {
        id: 'regulations',
        title: 'Regulasi',
        keywords: 'database regulasi uu kesehatan no 17 2023 hukum permenkes bpom dowa peraturan pemerintah perpres',
        icon: DuoRegulationsIcon,
        iconColor: PINE_TEAL,
        iconBg: 'bg-teal-50 dark:bg-teal-950/60'
      }
    ];

    return list;
  }, []);

  // Modul yang tersaring berdasarkan input pencarian dan filter paket
  const filteredModules = useMemo(() => {
    let list = allModules;

    // Filter berdasarkan paket (Starter / Pro)
    if (selectedPackageFilter === 'starter') {
      list = list.filter((mod) => STARTER_MODULE_IDS.has(mod.id));
    } else if (selectedPackageFilter === 'pro') {
      list = list.filter((mod) => !STARTER_MODULE_IDS.has(mod.id));
    }

    // Filter berdasarkan kata kunci pencarian
    if (!moduleSearch.trim()) return list;
    const q = moduleSearch.toLowerCase().trim();
    return list.filter((mod) => (
      mod.title.toLowerCase().includes(q) ||
      (mod.keywords && mod.keywords.toLowerCase().includes(q)) ||
      mod.id.toLowerCase().includes(q)
    ));
  }, [allModules, moduleSearch, selectedPackageFilter]);

  return (
    <div className="space-y-6 max-w-7xl mx-auto px-1 sm:px-2">
      
      {/* Mode Administrator: Shortcut Langsung ke Admin Hub */}
      {currentUser?.role === 'admin' && (
        <div className="bg-gradient-to-r from-teal-500/10 via-[#005f5a]/10 to-teal-500/10 border border-[#005f5a]/30 rounded-2xl p-3.5 sm:p-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#005f5a]/15 text-[#005f5a] dark:text-teal-300 flex items-center justify-center font-black text-base shrink-0">
              ⚙️
            </div>
            <div>
              <p className="font-bold text-[#0f172a] dark:text-white font-jakarta text-sm">Mode Administrator Aktif</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-jakarta">Dashboard kini 100% khusus modul klinis. Pengelolaan subskripsi, tarif QRIS, data obat & tim staf terpusat di Admin Hub.</p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => onSelectTab('admin')}
              className="px-4 py-2 bg-[#005f5a] hover:bg-[#004b47] text-white font-bold rounded-xl text-xs transition-all shadow-xs cursor-pointer font-jakarta hover:scale-105 active:scale-95 flex items-center gap-1.5"
            >
              <span>Buka Admin Hub</span>
              <span className="text-teal-200">→</span>
            </button>
          </div>
        </div>
      )}

      {/* Trial Banner Callout (Jika user Starter) */}
      {isTrialEnabled && currentUser && !isTrialActive && (!hasClaimedTrial || currentUser.role === 'admin') && onStartTrial && (
        <div className="bg-gradient-to-r from-teal-500/15 via-[#005f5a]/10 to-cyan-500/15 border border-[#005f5a]/30 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs shadow-xs animate-in fade-in">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#005f5a] text-white flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 fill-white" />
            </div>
            <div>
              <span className="font-bold text-[#0f172a] dark:text-white font-jakarta">
                Buka Uji Coba Gratis {trialDurationDays} Hari Akses Penuh Paket Pro
              </span>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 font-jakarta">
                Akses tanpa batas ke seluruh fitur CDSS lanjutan termasuk Dosis Pediatrik, Kompatibilitas IV, dan Bank Soal CBT.
              </p>
            </div>
          </div>
          <button
            onClick={onStartTrial}
            className="w-full sm:w-auto px-4 py-2 bg-[#005f5a] hover:bg-[#004b47] text-white font-bold rounded-xl text-xs transition-all shadow-xs cursor-pointer shrink-0 font-jakarta"
          >
            Aktifkan Sekarang
          </button>
        </div>
      )}

      {/* SEARCH BAR (Bilah Pencarian Cepat Modul) */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5 pointer-events-none" />
        <input
          type="text"
          value={moduleSearch}
          onChange={(e) => setModuleSearch(e.target.value)}
          placeholder="Cari modul klinis (contoh: Interaksi, Pediatrik, Uji Lab, BUD, Ginjal, High-Alert)..."
          className="w-full pl-11 pr-10 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-xs sm:text-sm font-semibold font-jakarta text-[#0f172a] dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#005f5a] dark:focus:border-teal-400 transition-all shadow-2xs"
        />
        {moduleSearch && (
          <button
            onClick={() => setModuleSearch('')}
            className="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* FILTER PAKET: SEMUA MODUL vs PAKET STARTER (FREE) vs PAKET PRO */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 pt-1">
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Semua Modul */}
          <button
            type="button"
            onClick={() => setSelectedPackageFilter('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold font-jakarta transition-all cursor-pointer whitespace-nowrap ${
              selectedPackageFilter === 'all'
                ? 'bg-[#005f5a] text-white shadow-xs'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
            }`}
          >
            Semua Modul ({allModules.length})
          </button>

          {/* Paket Starter (FREE) */}
          <button
            type="button"
            onClick={() => setSelectedPackageFilter('starter')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold font-jakarta transition-all cursor-pointer whitespace-nowrap ${
              selectedPackageFilter === 'starter'
                ? 'bg-emerald-600 text-white shadow-xs ring-2 ring-emerald-500/30'
                : 'bg-emerald-50/90 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-100/80 dark:hover:bg-emerald-950/70 border border-emerald-300/80 dark:border-emerald-800/80'
            }`}
          >
            <Gift className="w-3.5 h-3.5 text-current shrink-0" />
            <span>Paket Starter ({STARTER_MODULE_IDS.size})</span>
            <span className={`text-[10px] font-black uppercase px-1.5 py-0.2 rounded-md font-mono ${
              selectedPackageFilter === 'starter' ? 'bg-emerald-700 text-white' : 'bg-emerald-200/90 text-emerald-900'
            }`}>
              FREE
            </span>
          </button>

          {/* Paket Pro */}
          <button
            type="button"
            onClick={() => setSelectedPackageFilter('pro')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold font-jakarta transition-all cursor-pointer whitespace-nowrap ${
              selectedPackageFilter === 'pro'
                ? 'bg-amber-600 text-white shadow-xs ring-2 ring-amber-500/30'
                : 'bg-amber-50/80 dark:bg-amber-950/30 text-amber-900 dark:text-amber-300 hover:bg-amber-100/80 dark:hover:bg-amber-950/60 border border-amber-300/70 dark:border-amber-800/60'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-current shrink-0" />
            <span>Paket Pro ({allModules.length - STARTER_MODULE_IDS.size})</span>
          </button>
        </div>

        {selectedPackageFilter === 'starter' && (
          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-xl border border-emerald-200 dark:border-emerald-800">
            <span>✨ {STARTER_MODULE_IDS.size} Modul aktif selamanya tanpa biaya langganan</span>
          </div>
        )}
      </div>

      {/* BORDERLESS APP LAUNCHER GRID (Ikon & Nama Singkat Tanpa Pengotakan) */}
      {filteredModules.length === 0 ? (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800 p-10 text-center space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mx-auto">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-sm font-bold text-[#0f172a] dark:text-white font-jakarta">
            Tidak ada modul yang cocok dengan "{moduleSearch}"
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto font-jakarta">
            Coba kata kunci lain untuk melihat seluruh instrumen klinis yang tersedia.
          </p>
          <button
            onClick={() => setModuleSearch('')}
            className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-800 dark:text-slate-200 text-xs font-bold rounded-xl cursor-pointer transition-colors font-jakarta"
          >
            Reset Pencarian
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-y-10 sm:gap-y-12 md:gap-y-14 gap-x-4 sm:gap-x-6 md:gap-x-8 py-6 sm:py-10">
          {filteredModules.map((mod) => {
            const Icon = mod.icon;
            const itemHref = getPathFromTab(mod.id);
            const isStarter = STARTER_MODULE_IDS.has(mod.id);
            return (
              <a
                key={mod.id}
                href={itemHref}
                onClick={(e) => {
                  if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
                    e.preventDefault();
                    onSelectTab(mod.id);
                  }
                }}
                className="group flex flex-col items-center text-center focus:outline-none cursor-pointer select-none py-2 px-1 transition-all duration-300 active:scale-95"
                title={mod.title}
              >
                {/* Pure Large Standalone Icon - Tanpa Pengotakan/Border/Background Box */}
                <div className="relative flex items-center justify-center transition-all duration-300 group-hover:scale-115 group-hover:-translate-y-2">
                  <Icon className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 stroke-[1.75] transition-all duration-300 ${mod.iconColor} group-hover:drop-shadow-[0_8px_16px_rgba(0,95,90,0.22)]`} />
                  {isStarter && (
                    <span className="absolute -top-1 -right-2 text-[9px] font-black uppercase px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 font-mono shadow-2xs">
                      Free
                    </span>
                  )}
                </div>

                {/* Nama Modul Lebih Besar, Tegas & Padat (Font Plus Jakarta Sans) */}
                <span className="mt-3.5 text-xs sm:text-sm md:text-[14.5px] font-bold font-jakarta text-[#0f172a] dark:text-slate-100 group-hover:text-[#005f5a] dark:group-hover:text-teal-300 leading-snug line-clamp-2 max-w-[110px] sm:max-w-[140px] transition-colors tracking-tight">
                  {mod.title}
                </span>
              </a>
            );
          })}
        </div>
      )}

    </div>
  );
};
