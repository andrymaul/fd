import React, { useState, useMemo, useEffect, useRef } from 'react';
import { PRICING_PLANS, INITIAL_INTERACTIONS } from '../data/ddinterData';
import { Drug, DrugInteraction, DrugFoodInteraction, UserProfile, PricingPlan } from '../types';
import { 
  ShieldAlert, 
  CheckCircle2, 
  Database, 
  Sparkles, 
  Search, 
  ArrowRight, 
  Check, 
  HelpCircle, 
  Activity, 
  Stethoscope, 
  Calculator, 
  ShieldCheck, 
  Zap, 
  BookMarked, 
  Plus, 
  X, 
  Pill, 
  AlertTriangle, 
  Trash2,
  Lock,
  CalendarClock,
  HeartHandshake,
  FlaskConical,
  Leaf,
  GraduationCap,
  HeartPulse,
  Baby,
  Syringe,
  MessageSquare,
  ClipboardList,
  Scale,
  BookOpen,
  ChevronRight,
  ChevronDown,
  Copy,
  CheckCheck,
  Building2,
  Smartphone,
  Send,
  Brain,
  RotateCcw,
  Layers,
  Star,
  Quote,
  Clock,
  AlertOctagon,
  Utensils,
  Flame,
  ExternalLink
} from 'lucide-react';
import { resolveDrugFromDDInter, resolveInteractionPair, evaluateFoodInteractions, sortInteractionsByDDInterPriority } from '../utils/ddinterEngine';
import { SingleColumnFeatureSpotlight } from './SingleColumnFeatureSpotlight';
import { SWAMEDIKASI_PROTOCOLS, searchSwamedikasiProtocols } from '../data/swamedikasiData';
import { SwamedikasiProtocol } from '../types';

const EBM_STANDARDS = [
  {
    name: 'Kemenkes RI',
    sub: 'PNPK PAPDI & PERKI',
    tag: 'Pedoman Nasional',
    icon: Building2,
    iconBg: 'bg-rose-50 border-rose-200 text-rose-600',
    tagClass: 'text-rose-700 bg-rose-50/70 border-rose-200/60',
    borderHover: 'hover:border-rose-300',
    tab: 'guidelines',
  },
  {
    name: 'Badan POM RI',
    sub: 'CekBPOM & Database NIE',
    tag: 'Regulasi Resmi',
    icon: ShieldCheck,
    iconBg: 'bg-sky-50 border-sky-200 text-sky-600',
    tagClass: 'text-sky-700 bg-sky-50/70 border-sky-200/60',
    borderHover: 'hover:border-sky-300',
    tab: 'drugs',
  },
  {
    name: 'WHO AWaRe 2024',
    sub: 'Stewardship Antibiotik',
    tag: 'Access • Watch • Reserve',
    icon: Sparkles,
    iconBg: 'bg-teal-50 border-teal-200 text-teal-600',
    tagClass: 'text-teal-700 bg-teal-50/70 border-teal-200/60',
    borderHover: 'hover:border-teal-300',
    tab: 'antimicrobial-stewardship',
  },
  {
    name: "ASHP Trissel's",
    sub: 'Injeksi IV & Y-Site 2024',
    tag: 'Inkompatibilitas',
    icon: Syringe,
    iconBg: 'bg-teal-50 border-teal-200 text-teal-600',
    tagClass: 'text-teal-700 bg-teal-50/70 border-teal-200/60',
    borderHover: 'hover:border-teal-300',
    tab: 'iv-compatibility',
  },
  {
    name: 'DDInter Global',
    sub: 'Nature npj Digital Med',
    tag: '6 DB Konsensus',
    icon: Activity,
    iconBg: 'bg-cyan-50 border-cyan-200 text-cyan-600',
    tagClass: 'text-cyan-700 bg-cyan-50/70 border-cyan-200/60',
    borderHover: 'hover:border-cyan-300',
    tab: 'interactions',
  },
  {
    name: 'FDA PLLR',
    sub: 'Pregnancy & Lactation',
    tag: 'Keamanan Bumil & Busui',
    icon: Baby,
    iconBg: 'bg-pink-50 border-pink-200 text-pink-600',
    tagClass: 'text-pink-700 bg-pink-50/70 border-pink-200/60',
    borderHover: 'hover:border-pink-300',
    tab: 'pregnancy',
  },
  {
    name: 'USP <795> & FI VI',
    sub: 'BUD Racikan Non-Steril',
    tag: 'Compounding EBM',
    icon: BookMarked,
    iconBg: 'bg-amber-50 border-amber-200 text-amber-600',
    tagClass: 'text-amber-700 bg-amber-50/70 border-amber-200/60',
    borderHover: 'hover:border-amber-300',
    tab: 'bud',
  },
  {
    name: 'Beers 2023 AGS',
    sub: 'Skrining Geriatri AGS',
    tag: 'Kriteria Lansia',
    icon: HeartPulse,
    iconBg: 'bg-emerald-50 border-emerald-200 text-emerald-600',
    tagClass: 'text-emerald-700 bg-emerald-50/70 border-emerald-200/60',
    borderHover: 'hover:border-emerald-300',
    tab: 'polypharmacy',
  },
  {
    name: 'KDIGO 2024',
    sub: 'Dosis Gangguan Ginjal',
    tag: 'CKD & GFR Staging',
    icon: Calculator,
    iconBg: 'bg-purple-50 border-purple-200 text-purple-600',
    tagClass: 'text-purple-700 bg-purple-50/70 border-purple-200/60',
    borderHover: 'hover:border-purple-300',
    tab: 'renal',
  },
  {
    name: 'FORNAS KMK 2025',
    sub: 'Restriksi Obat Nasional',
    tag: 'Formularium Faskes',
    icon: CheckCircle2,
    iconBg: 'bg-indigo-50 border-indigo-200 text-indigo-600',
    tagClass: 'text-indigo-700 bg-indigo-50/70 border-indigo-200/60',
    borderHover: 'hover:border-indigo-300',
    tab: 'fornas',
  },
];

interface LandingPageProps {
  drugs: Drug[];
  interactions?: DrugInteraction[];
  foodInteractions?: DrugFoodInteraction[];
  currentUser?: UserProfile | null;
  pricingPlans?: PricingPlan[];
  onSelectTab: (tab: string) => void;
  onOpenSwamedikasiProtocol?: (protocolId: string) => void;
  onSearchDrug?: (query: string) => void;
  onOpenPricingModal: () => void;
  onOpenAuthModal: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  drugs,
  interactions = INITIAL_INTERACTIONS,
  foodInteractions = [],
  currentUser,
  pricingPlans = PRICING_PLANS,
  onSelectTab,
  onOpenSwamedikasiProtocol,
  onSearchDrug,
  onOpenPricingModal,
  onOpenAuthModal
}) => {
  const [heroSearch, setHeroSearch] = useState('');

  // Animated rotating placeholder for hero search bar
  const samplePlaceholders = useMemo(() => [
    'Cari Warfarin, Simvastatin, Clopidogrel...',
    'Cari Keluhan: Meriang, Sakit Maag, Diare, Flu Batuk...',
    'Cari Paxlovid, Ketoconazole, Amiodarone...',
    'Cari Paracetamol, Amoxicillin, Cetirizine...',
    'Cari Dosis Puyer Anak, Salbutamol, Dexamethasone...',
    'Cari Interaksi Obat Bumil & Busui Trimester 1-3...'
  ], []);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % samplePlaceholders.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [samplePlaceholders.length]);


  const handleHeroSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (heroSearch.trim()) {
      const q = heroSearch.toLowerCase().trim();
      const swamedikasiKeywords = [
        'meriang', 'demam', 'maag', 'lambung', 'gerd', 'diare', 'mencret', 
        'flu', 'pilek', 'mampet', 'batuk', 'dahak', 'sariawan', 'biduran', 
        'gatal', 'alergi', 'mabuk', 'wasir', 'sembelit', 'konstipasi', 
        'mata merah', 'sakit gigi', 'panu', 'kadas', 'kurap'
      ];
      if (swamedikasiKeywords.some(k => q.includes(k))) {
        onSelectTab('swamedikasi');
        return;
      }
      if (onSearchDrug) onSearchDrug(heroSearch);
      onSelectTab('drugs');
    }
  };



  return (
    <div className="space-y-12 sm:space-y-16 pb-20 bg-slate-50 text-slate-900 transition-colors duration-300">
      
      {/* =========================================================================
          HERO EXPLORATION SECTION: Lightweight, Fast & Intuitive ("Eksplorasi apa hari ini?")
          ========================================================================= */}
      <section id="hero-section" className="relative bg-gradient-to-b from-teal-50/40 via-white to-slate-50 text-slate-900 pt-8 sm:pt-12 pb-4 sm:pb-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5">
          
          {/* Main Title */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-outfit">
              Eksplorasi apa hari ini?
            </h1>
          </div>

          {/* Clean & Fast Search Box */}
          <form onSubmit={handleHeroSearchSubmit} className="max-w-2xl mx-auto pt-1">
            <div className="relative flex items-center bg-white rounded-2xl p-1.5 sm:p-2 border border-slate-200 shadow-md hover:border-teal-400 focus-within:border-teal-500 focus-within:ring-4 focus-within:ring-teal-500/10 transition-all">
              <Search className="w-5 h-5 text-teal-600 ml-2.5 sm:ml-3 shrink-0" />
              <input
                type="text"
                value={heroSearch}
                onChange={(e) => setHeroSearch(e.target.value)}
                placeholder="Cari obat, interaksi klinis, atau keluhan (misal: Paracetamol, Maag, Diare)..."
                className="w-full px-3 py-2 text-slate-900 placeholder-slate-400 font-medium text-xs sm:text-sm focus:outline-none bg-transparent"
              />
              <button
                type="submit"
                className="px-4 sm:px-6 py-2 sm:py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shrink-0 flex items-center gap-1.5 cursor-pointer shadow-xs active:scale-95 font-outfit"
              >
                <span>Cari</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Quick Keyword Suggestions */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 mt-3 text-xs">
              <span className="font-semibold text-slate-400 text-[11px]">Pencarian Cepat:</span>
              {['Warfarin', 'Aspirin', 'Simvastatin', 'Sakit Maag', 'Diare'].map((sample) => (
                <button
                  key={sample}
                  type="button"
                  onClick={() => {
                    if (sample === 'Sakit Maag' || sample === 'Diare') {
                      onSelectTab('swamedikasi');
                    } else {
                      if (onSearchDrug) onSearchDrug(sample);
                      onSelectTab('drugs');
                    }
                  }}
                  className="px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all cursor-pointer bg-white hover:bg-teal-50 text-slate-600 hover:text-teal-800 border border-slate-200 hover:border-teal-300 shadow-2xs flex items-center gap-1"
                >
                  <Pill className="w-2.5 h-2.5 text-teal-600" />
                  <span>{sample}</span>
                </button>
              ))}
            </div>
          </form>

        </div>
      </section>

      {/* =========================================================================
          STAGE 3: MODERN BENTO GRID ARCHITECTURE - 26 MODUL KLINIS (NEO-CLINICAL TECH)
          ========================================================================= */}
      <section id="bento-features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8">

        {/* Single-Column Spotlight Showcase */}
        <SingleColumnFeatureSpotlight
          onSelectTab={onSelectTab}
          onOpenSwamedikasiProtocol={onOpenSwamedikasiProtocol}
          currentUser={currentUser}
        />

      </section>

    </div>
  );
};
