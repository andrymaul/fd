import React, { useState, useRef, useEffect } from 'react';
import { 
  Drug, 
  DrugInteraction, 
  UserProfile, 
  PricingPlan 
} from '../types';
import { 
  ShieldCheck, 
  ExternalLink, 
  RefreshCw, 
  Maximize2, 
  Minimize2, 
  Sparkles, 
  Globe, 
  Activity, 
  Info,
  CheckCircle2,
  Layers
} from 'lucide-react';

export interface InteractionCheckerProps {
  drugs?: Drug[];
  interactions?: DrugInteraction[];
  currentUser?: UserProfile | null;
  pricingPlans?: PricingPlan[];
  onOpenPricingModal?: () => void;
  onOpenAuthModal?: () => void;
  onOpenReportModal?: (selectedDrugs: Drug[], matchedInteractions: DrugInteraction[]) => void;
  preselectedDrugName?: string | null;
  preselectedDrugNames?: string[] | null;
}

export const InteractionChecker: React.FC<InteractionCheckerProps> = ({
  preselectedDrugName,
  preselectedDrugNames
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const SUBDOMAIN_URL = 'https://interaksi.farmasidruggist.id/';

  // Query parameters if preselected drugs are passed from Hero Search or Catalog
  const targetUrl = React.useMemo(() => {
    const drugsToPass = preselectedDrugNames && preselectedDrugNames.length > 0 
      ? preselectedDrugNames 
      : (preselectedDrugName ? [preselectedDrugName] : []);
    
    if (drugsToPass.length > 0) {
      return `${SUBDOMAIN_URL}?drugs=${encodeURIComponent(drugsToPass.join(','))}`;
    }
    return SUBDOMAIN_URL;
  }, [preselectedDrugName, preselectedDrugNames]);

  const handleRefresh = () => {
    setIsLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  const handleToggleFullscreen = () => {
    setIsFullscreen((prev) => !prev);
  };

  const handleOpenExternal = () => {
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  // Escape key to exit fullscreen
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen]);

  return (
    <div className={`transition-all duration-300 ${isFullscreen ? 'fixed inset-0 z-50 bg-slate-900/90 backdrop-blur-md p-2 sm:p-4 flex flex-col' : 'space-y-4'}`}>
      {/* Top Clinical Header & Integration Control Bar */}
      <div className="bg-white dark:bg-[#0c1427] border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start sm:items-center gap-3.5">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-rose-500/10 to-teal-500/10 border border-rose-200 dark:border-rose-900/40 text-rose-600 dark:text-rose-400 shrink-0 shadow-2xs">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                Analisis Interaksi Obat &amp; Duplikasi Terapi
              </h2>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live Engine Terverifikasi
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span>Terhubung langsung ke </span>
              <a 
                href={SUBDOMAIN_URL} 
                target="_blank" 
                rel="noreferrer" 
                className="font-mono text-teal-600 dark:text-teal-400 hover:underline font-semibold"
              >
                interaksi.farmasidruggist.id
              </a>
              <span className="hidden sm:inline text-slate-300 dark:text-slate-600">• Multi-Consensus DDInter 2.0</span>
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 shrink-0 self-end md:self-auto">
          <button
            onClick={handleRefresh}
            title="Muat Ulang Frame"
            className="p-2 sm:px-3 sm:py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin text-teal-600' : ''}`} />
            <span className="hidden sm:inline">Muat Ulang</span>
          </button>

          <button
            onClick={handleToggleFullscreen}
            title={isFullscreen ? 'Keluar Layar Penuh (Esc)' : 'Tampilan Layar Penuh'}
            className="p-2 sm:px-3 sm:py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            {isFullscreen ? (
              <>
                <Minimize2 className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                <span className="hidden sm:inline">Kecilkan</span>
              </>
            ) : (
              <>
                <Maximize2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                <span className="hidden sm:inline">Layar Penuh</span>
              </>
            )}
          </button>

          <button
            onClick={handleOpenExternal}
            className="px-3.5 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white shadow-sm flex items-center gap-1.5 cursor-pointer transition-all active:scale-95"
          >
            <span>Buka di Tab Baru</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Embedded Iframe Container */}
      <div 
        className={`relative w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1427] shadow-sm overflow-hidden flex-1 ${
          isFullscreen ? 'h-full' : 'h-[calc(100vh-210px)] min-h-[680px]'
        }`}
      >
        {/* Loading Spinner Skeleton */}
        {isLoading && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/95 dark:bg-[#0c1427]/95 backdrop-blur-xs p-6 text-center">
            <div className="relative mb-4">
              <div className="w-12 h-12 rounded-full border-3 border-teal-500/20 border-t-teal-600 dark:border-t-teal-400 animate-spin" />
              <div className="absolute inset-0 flex items-center justify-center text-teal-600 dark:text-teal-400">
                <Activity className="w-5 h-5 animate-pulse" />
              </div>
            </div>
            <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100">
              Menghubungkan ke Mesin Interaksi Terverifikasi...
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm">
              Memuat database komprehensif monografi, interaksi obat-obat (DDI), makanan (DFI), dan duplikasi terapi.
            </p>
          </div>
        )}

        <iframe
          key={iframeKey}
          ref={iframeRef}
          src={targetUrl}
          title="FD Interaksi Obat Terverifikasi"
          onLoad={() => setIsLoading(false)}
          className="w-full h-full border-0"
          allow="clipboard-write; fullscreen"
          loading="lazy"
        />
      </div>

      {/* Quick Footnote & Architecture Badge */}
      {!isFullscreen && (
        <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 px-1">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Didukung Dedicated Server Interaksi Farmasi Druggist — Akses Cepat, Mandiri &amp; Ringan.</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="font-mono text-[10px] text-slate-400">v4.7.0 Micro-Frontend</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractionChecker;
