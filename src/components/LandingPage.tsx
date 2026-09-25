import React, { useState, useMemo, useEffect } from 'react';
import { PRICING_PLANS, INITIAL_INTERACTIONS } from '../data/ddinterData';
import { Drug, DrugInteraction, DrugFoodInteraction, UserProfile, PricingPlan } from '../types';
import { Search, ArrowRight } from 'lucide-react';
import { SingleColumnFeatureSpotlight } from './SingleColumnFeatureSpotlight';

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
    <div className="space-y-12 sm:space-y-16 pb-20 bg-transparent text-slate-900 transition-colors duration-300">
      
      {/* =========================================================================
          HERO EXPLORATION SECTION: Lightweight, Fast & Intuitive ("Eksplorasi apa hari ini?")
          ========================================================================= */}
      <section id="hero-section" className="relative bg-transparent text-slate-900 pt-6 sm:pt-10 pb-4 sm:pb-6">
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
          </form>

        </div>
      </section>

      {/* =========================================================================
          STAGE 3: MODERN BENTO GRID ARCHITECTURE - 26 MODUL KLINIS (NEO-CLINICAL TECH)
          ========================================================================= */}
      <section id="bento-features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-10">

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
