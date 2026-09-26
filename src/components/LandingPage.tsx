import React, { useState, memo } from 'react';
import { UserProfile } from '../types';
import { Search, ArrowRight, Flame } from 'lucide-react';
import { SingleColumnFeatureSpotlight } from './SingleColumnFeatureSpotlight';

interface LandingPageProps {
  currentUser?: UserProfile | null;
  onSelectTab: (tab: string) => void;
  onOpenSwamedikasiProtocol?: (protocolId: string) => void;
  onSearchDrug?: (query: string) => void;
}

export const LandingPage: React.FC<LandingPageProps> = memo(({
  currentUser,
  onSelectTab,
  onOpenSwamedikasiProtocol,
  onSearchDrug
}) => {
  const [heroSearch, setHeroSearch] = useState('');

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
    <div className="pb-1 sm:pb-2 bg-transparent text-slate-900 transition-colors duration-300">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4">
        <SingleColumnFeatureSpotlight
          onSelectTab={onSelectTab}
          onOpenSwamedikasiProtocol={onOpenSwamedikasiProtocol}
          currentUser={currentUser}
          heroContent={
            <div className="space-y-3 sm:space-y-3.5 text-left">
              
              {/* Badge: Promo Diskon Mencolok dengan Warna Solid Orange */}
              <div>
                <a
                  href="/pricing"
                  onClick={(e) => {
                    if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
                      e.preventDefault();
                      onSelectTab('pricing');
                    }
                  }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-600 hover:bg-orange-700 text-white text-xs font-black font-outfit shadow-md shadow-orange-600/30 hover:scale-105 active:scale-95 transition-all cursor-pointer group"
                  title="Lihat Promo Paket Berlangganan (Hemat hingga 80%)"
                >
                  <Flame className="w-3.5 h-3.5 fill-white text-white shrink-0" />
                  <span className="tracking-wide uppercase font-black text-xs">
                    PROMO HINGGA 80%
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>

              {/* Main Title: Eksplorasi apa hari ini? (Diperbesar) */}
              <div>
                <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black text-slate-900 tracking-tight font-outfit leading-[1.12]">
                  Eksplorasi apa hari ini?
                </h1>
              </div>

              {/* Clean & Fast Search Box */}
              <form onSubmit={handleHeroSearchSubmit} className="w-full pt-0.5">
                <div className="relative flex items-center bg-white rounded-xl p-1 sm:p-1.5 border border-slate-200 shadow-sm hover:border-teal-400 focus-within:border-teal-500 focus-within:ring-2 focus-within:ring-teal-500/10 transition-all">
                  <Search className="w-4 h-4 text-teal-600 ml-2.5 shrink-0" />
                  <input
                    type="text"
                    value={heroSearch}
                    onChange={(e) => setHeroSearch(e.target.value)}
                    placeholder="Cari obat, interaksi klinis, keluhan (misal: Paracetamol)..."
                    className="w-full px-2 py-1 text-slate-900 placeholder-slate-400 font-medium text-xs sm:text-sm focus:outline-none bg-transparent"
                  />
                  <button
                    type="submit"
                    className="px-3.5 sm:px-4 py-1.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-lg transition-all shrink-0 flex items-center gap-1 cursor-pointer shadow-xs active:scale-95 font-outfit"
                  >
                    <span>Cari</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </form>

            </div>
          }
        />
      </section>
    </div>
  );
});

LandingPage.displayName = 'LandingPage';
