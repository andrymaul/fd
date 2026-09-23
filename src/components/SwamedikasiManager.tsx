import React, { useState, useMemo, useEffect } from 'react';
import { 
  SwamedikasiProtocol, 
  SwamedikasiCategoryKey, 
  Drug, 
  ClinicBrandingSettings,
  SwamedikasiComorbidType,
  DecisionTreeNode
} from '../types';
import { 
  SWAMEDIKASI_PROTOCOLS, 
  SWAMEDIKASI_CATEGORIES,
  SWAMEDIKASI_COMORBID_OPTIONS,
  getProtocolDecisionTree,
  searchSwamedikasiProtocols,
  getProtocolsByCategory
} from '../data/swamedikasiData';
import { 
  Search, 
  Sparkles, 
  Flame, 
  ShieldAlert, 
  CloudRain, 
  Eye, 
  Smile, 
  Baby, 
  Compass, 
  AlertTriangle, 
  CheckCircle2, 
  Pill, 
  Clock, 
  Utensils, 
  ShieldCheck, 
  AlertOctagon, 
  Copy, 
  Check, 
  MessageSquare, 
  X, 
  ArrowLeft,
  ArrowRight, 
  Share2, 
  FileText, 
  HeartHandshake, 
  Info,
  ExternalLink,
  Stethoscope,
  ChevronRight,
  ChevronLeft,
  ChevronsLeft,
  ChevronsRight,
  RotateCcw,
  Layers,
  Printer,
  User,
  Activity,
  HeartPulse,
  GitMerge,
  Scale,
  Wind,
  Droplets,
  Filter,
  CheckCheck,
  Heart
} from 'lucide-react';
import { FloatingPillsBackground } from './FloatingPillsBackground';

interface SwamedikasiManagerProps {
  drugs: Drug[];
  clinicBranding?: ClinicBrandingSettings;
  initialProtocolId?: string | null;
  onCheckInteractionWith?: (drugName: string) => void;
  onAddToPioCard?: (drug: Drug) => void;
  onSelectTab?: (tab: string) => void;
}

export const SwamedikasiManager: React.FC<SwamedikasiManagerProps> = ({
  drugs,
  clinicBranding,
  initialProtocolId,
  onCheckInteractionWith,
  onAddToPioCard,
  onSelectTab
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProtocol, setActiveProtocol] = useState<SwamedikasiProtocol | null>(null);
  const [activeTabModal, setActiveTabModal] = useState<'drugs' | 'decision-tree' | 'lifestyle' | 'redflags' | 'populations' | 'dagusibu'>('drugs');
  const [selectedComorbidities, setSelectedComorbidities] = useState<SwamedikasiComorbidType[]>([]);
  const [copiedNotification, setCopiedNotification] = useState(false);

  // Automatically open specific protocol if requested from landing page or deep-link
  useEffect(() => {
    if (initialProtocolId) {
      const found = SWAMEDIKASI_PROTOCOLS.find(p => p.id === initialProtocolId);
      if (found) {
        setActiveProtocol(found);
        setActiveTabModal('drugs');
      }
    }
  }, [initialProtocolId]);

  const toggleComorbidity = (comorbid: SwamedikasiComorbidType) => {
    setSelectedComorbidities(prev => 
      prev.includes(comorbid)
        ? prev.filter(c => c !== comorbid)
        : [...prev, comorbid]
    );
  };

  // Helper for comorbidity icon
  const getComorbidIcon = (iconName: string, className: string = 'w-3.5 h-3.5') => {
    switch (iconName) {
      case 'HeartPulse': return <HeartPulse className={className} />;
      case 'Wind': return <Wind className={className} />;
      case 'Flame': return <Flame className={className} />;
      case 'Activity': return <Activity className={className} />;
      case 'Droplets': return <Droplets className={className} />;
      case 'Eye': return <Eye className={className} />;
      case 'Baby': return <Baby className={className} />;
      default: return <Activity className={className} />;
    }
  };

  // Filtered protocols based on category and search query
  const filteredProtocols = useMemo(() => {
    let result = selectedCategory === 'all' 
      ? SWAMEDIKASI_PROTOCOLS 
      : getProtocolsByCategory(selectedCategory as SwamedikasiCategoryKey);

    if (searchQuery.trim()) {
      result = searchSwamedikasiProtocols(searchQuery).filter(item => 
        selectedCategory === 'all' || item.category === selectedCategory
      );
    }
    return result;
  }, [selectedCategory, searchQuery]);

  // Pagination State (Identical to DrugDirectory.tsx)
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(12);

  // Reset to page 1 whenever category or search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  const totalItems = filteredProtocols.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const validCurrentPage = Math.min(Math.max(1, currentPage), totalPages);
  const startIndex = (validCurrentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  const paginatedProtocols = useMemo(() => {
    return filteredProtocols.slice(startIndex, endIndex);
  }, [filteredProtocols, startIndex, endIndex]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      const targetElement = document.getElementById('swamedikasi-category-header');
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (validCurrentPage > 3) pages.push('...');
      const start = Math.max(2, validCurrentPage - 1);
      const end = Math.min(totalPages - 1, validCurrentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (validCurrentPage < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  };

  // Icon mapping helper
  const getCategoryIcon = (iconName: string, className: string = 'w-4 h-4') => {
    switch (iconName) {
      case 'Flame': return <Flame className={className} />;
      case 'ShieldAlert': return <ShieldAlert className={className} />;
      case 'CloudRain': return <CloudRain className={className} />;
      case 'Eye': return <Eye className={className} />;
      case 'Smile': return <Smile className={className} />;
      case 'Baby': return <Baby className={className} />;
      case 'Compass': return <Compass className={className} />;
      case 'Heart': return <Heart className={className} />;
      default: return <Sparkles className={className} />;
    }
  };

  // BPOM Classification Badge Styling
  const renderBpomBadge = (bpomClass: string) => {
    if (bpomClass.includes('Hijau') || bpomClass.includes('Bebas (Hijau)')) {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-emerald-300 dark:ring-emerald-700"></span>
          Obat Bebas (Hijau)
        </span>
      );
    }
    if (bpomClass.includes('Biru') || bpomClass.includes('Bebas Terbatas')) {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-950/70 text-blue-800 dark:text-blue-300 border border-blue-300 dark:border-blue-700">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 ring-2 ring-blue-300 dark:ring-blue-700"></span>
          Bebas Terbatas (Biru)
        </span>
      );
    }
    if (bpomClass.includes('OWA') || bpomClass.includes('Wajib Apotek')) {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-700">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 ring-2 ring-amber-300 dark:ring-amber-700"></span>
          OWA (Obat Wajib Apotek)
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700">
        {bpomClass}
      </span>
    );
  };

  // Convert recommended drug to a Drug model so it can be added to WhatsApp PIO card
  const handleTransferToPio = (genericName: string, brandExamples: string[], dosage: string, timing: string) => {
    const existing = drugs.find(d => 
      d.name.toLowerCase().includes(genericName.toLowerCase()) ||
      d.genericName.toLowerCase().includes(genericName.toLowerCase())
    );

    if (existing) {
      onAddToPioCard?.(existing);
    } else {
      const syntheticDrug: Drug = {
        id: 'swam-' + Date.now(),
        name: brandExamples[0] ? `${genericName} (${brandExamples[0]})` : genericName,
        genericName: genericName,
        brandNames: brandExamples,
        atcCode: 'SWAMEDIKASI',
        category: 'Swamedikasi Bebas / OWA',
        dosage: dosage,
        indication: activeProtocol?.title || 'Swamedikasi Keluhan Ringan',
        mechanismOfAction: timing
      };
      onAddToPioCard?.(syntheticDrug);
    }
  };

  // Copy structured patient counseling education text for WhatsApp
  const handleCopyWhatsAppCounseling = () => {
    if (!activeProtocol) return;

    const clinicHeader = clinicBranding?.clinicName 
      ? `*${clinicBranding.clinicName.toUpperCase()}*\n_${clinicBranding.tagline || 'Layanan Informasi Obat & Konseling Farmasi' }_\n` 
      : `*FARMASI DRUGGIST CLINICAL CARE*\n_Panduan Informasi Obat & Konseling Swamedikasi_\n`;

    const drugsText = activeProtocol.recommendedDrugs.map((d, i) => {
      const details = d.dosageDetails;
      const firstLineTag = d.isFirstLine ? ' [★ PILIHAN UTAMA]' : '';
      const owaTag = d.owaDetails ? ` [DOWA No. ${d.owaDetails.owaNumber} - Maks: ${d.owaDetails.maxDispense}]` : '';
      const dosageStr = details
        ? `   • 👨 Dosis Dewasa: ${details.adult}\n` +
          `   • 👶 Dosis Anak (1-12 th): ${details.pediatric}\n` +
          (details.infant ? `   • 🍼 Dosis Bayi (< 1 th): ${details.infant}\n` : '') +
          `   • 🤰 Bumil / Menyusui: ${details.pregnancy}\n` +
          `   • 🧓 Lansia (Geriatri): ${details.geriatric}\n`
        : `   • Aturan Dosis: ${d.dosageGuideline}\n`;

      return (
        `*${i + 1}. ${d.genericName}* (${d.bpomClass})${firstLineTag}${owaTag}\n` +
        `   • Contoh Merk: ${d.brandExamples.slice(0, 3).join(', ')}\n` +
        dosageStr +
        `   • Waktu Minum: ${d.timing}\n` +
        `   • Catatan Apoteker: ${d.cautionNotes || '-'}\n`
      );
    }).join('\n');

    const lifestyleText = activeProtocol.nonPharmacolTherapy.map(t => `   ✓ ${t}`).join('\n');
    const redFlagsText = activeProtocol.redFlags.map(r => `   ⚠️ ${r}`).join('\n');

    const message = 
`${clinicHeader}
=======================================
📋 *EDUKASI SWAMEDIKASI MANDIRI PASIEN*
Keluhan: *${activeProtocol.title}*
Batas Maksimal Swamedikasi: *${activeProtocol.maxSelfMedDays} Hari*
=======================================

💊 *REKOMENDASI OBAT BEBAS / OWA RESMI:*
${drugsText}
🌿 *TERAPI ALAMI & POLA HIDUP (NON-OBAT):*
${lifestyleText}

🚨 *TANDA BAHAYA (SEGERA KE DOKTER / IGD JIKA):*
${redFlagsText}

💡 *PENGINGAT GEMA CERMAT & DAGUSIBU KEMENKES:*
- JANGAN menggunakan Antibiotik secara mandiri tanpa resep dokter!
- Simpan obat pada suhu sejuk terhindar dari sinar matahari dan jangkauan anak.
- Bila keluhan belum membaik dalam ${activeProtocol.maxSelfMedDays} hari, segera konsultasikan ke Dokter.

Semoga lekas pulih dan sehat selalu! 🙏
=======================================`;

    navigator.clipboard.writeText(message);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 3000);
  };

  // Trigger print dialog for 1-page patient swamedikasi sheet
  const handlePrint = (protocol?: SwamedikasiProtocol) => {
    if (protocol) {
      setActiveProtocol(protocol);
      setTimeout(() => {
        window.print();
      }, 100);
    } else {
      window.print();
    }
  };

  // Fallback protocol for print if none opened
  const protocolToPrint = activeProtocol || filteredProtocols[0] || SWAMEDIKASI_PROTOCOLS[0];

  return (
    <div className="space-y-6 animate-in fade-in duration-200 print:max-w-none print:w-full print:m-0 print:p-0">
      {/* SCREEN UI WRAPPER (HIDDEN ON PRINT) */}
      <div className="space-y-6 pb-16 print:hidden">
        {/* HERO BANNER - DEEP OBSIDIAN & WARM AMBER (Matches Amber Sidebar & Header theme) */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#180d02] via-[#2c1705] to-[#452509] p-6 sm:p-8 text-white shadow-2xl border border-amber-500/30">
        <FloatingPillsBackground density="low" accentColor="#f59e0b" />
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-72 -bottom-10 opacity-10 pointer-events-none hidden lg:block">
          <Sparkles className="w-56 h-56 text-amber-400 -rotate-12" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              {onSelectTab && (
                <button
                  type="button"
                  onClick={() => onSelectTab('landing')}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-amber-200 hover:text-white border border-white/20 text-xs font-bold transition-all cursor-pointer font-outfit shadow-2xs hover:scale-105 active:scale-95"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Kembali ke Beranda</span>
                </button>
              )}
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center shadow-lg shadow-amber-950/50 shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-black font-outfit tracking-tight">
                  Swamedikasi &amp; Clinical Triage Keluhan
                </h1>
              </div>
            </div>

          </div>

          {/* Right Hero Badge: Database Status */}
          <div className="flex flex-col gap-3 lg:w-72 shrink-0 relative z-10">
            <div className="bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-amber-500/40 space-y-2.5 shadow-xl">
              <div className="flex items-center justify-between text-xs font-bold text-amber-300 border-b border-amber-800/60 pb-2">
                <span className="flex items-center gap-1.5 font-black font-outfit">
                  <Activity className="w-3.5 h-3.5 text-amber-400" />
                  <span>Status Database</span>
                </span>
                <span className="bg-amber-950 text-amber-300 px-2 py-0.5 rounded-full text-[10px] font-black border border-amber-600/40">
                  {SWAMEDIKASI_PROTOCOLS.length} Data Terverifikasi
                </span>
              </div>
              <div className="text-xs text-amber-100/85 space-y-1.5 font-medium">
                <div className="flex justify-between items-center">
                  <span>Protokol Keluhan:</span>
                  <span className="font-mono font-bold text-white bg-white/10 px-2 py-0.5 rounded-md text-[11px]">{SWAMEDIKASI_PROTOCOLS.length} Panduan</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Klasifikasi Obat:</span>
                  <span className="font-mono font-bold text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded-md text-[11px]">Bebas, Terbatas &amp; DOWA</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Edukasi Non-Obat:</span>
                  <span className="font-mono font-bold text-orange-300 bg-orange-950/60 px-2 py-0.5 rounded-md text-[11px]">Terapi Alami Terintegrasi</span>
                </div>
                <div className="flex justify-between items-center pt-1 border-t border-amber-900/40 text-[10px] text-amber-300/80">
                  <span>Standar Acuan:</span>
                  <span className="font-bold text-white">GEMA CERMAT &amp; OWA BPOM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FILTER & SEARCH TOOLBAR */}
      <div className="bg-white dark:bg-[#1a0f04] p-5 sm:p-6 rounded-3xl border border-amber-200/80 dark:border-amber-500/25 shadow-sm space-y-4">
        {/* Top Search Input & Action */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari keluhan: meriang, flu batuk, sakit gigi, lambung perih, mencret, gatal alergi..."
              className="w-full pl-10 pr-10 py-2.5 text-xs font-bold font-outfit text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 cursor-pointer"
                title="Hapus kata kunci"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {searchQuery && (
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="px-3 py-2 text-xs font-bold font-outfit text-slate-600 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 flex items-center justify-center gap-1.5 transition-colors cursor-pointer shrink-0"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Pencarian</span>
            </button>
          )}
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div id="swamedikasi-category-header" className="space-y-2.5">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-extrabold font-outfit text-slate-600 dark:text-slate-400 uppercase tracking-wider flex items-center gap-2">
            <span>Kategori Keluhan Pasien</span>
            <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400">({filteredProtocols.length} Protokol Ditemukan)</span>
          </h3>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
          {SWAMEDIKASI_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-2xl text-xs font-black font-outfit transition-all whitespace-nowrap cursor-pointer border ${
                  isSelected
                    ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md shadow-amber-950/40 border-amber-400/30'
                    : 'bg-white dark:bg-[#160d03] text-slate-600 dark:text-slate-300 hover:bg-amber-50 dark:hover:bg-amber-950/40 border-slate-200 dark:border-amber-900/30'
                }`}
              >
                {getCategoryIcon(cat.icon, 'w-3.5 h-3.5')}
                <span>{cat.label}</span>
                {cat.key !== 'all' && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                  }`}>
                    {cat.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Protocol Cards Grid */}
      {filteredProtocols.length === 0 ? (
        <div className="text-center py-16 px-4 bg-white dark:bg-slate-900/60 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-3">
          <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 mx-auto flex items-center justify-center">
            <Search className="w-8 h-8" />
          </div>
          <h3 className="text-base font-bold text-slate-700 dark:text-slate-200">
            Keluhan "{searchQuery}" Tidak Ditemukan
          </h3>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            Coba gunakan kata kunci umum lainnya seperti "demam", "batuk", "maag", "alergi", atau klik kategori di atas.
          </p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
            className="mt-2 text-xs font-semibold px-4 py-2 rounded-xl bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 hover:bg-amber-100 transition-colors cursor-pointer"
          >
            Reset Pencarian
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {paginatedProtocols.map((protocol) => {
              return (
                <div
                  key={protocol.id}
                  onClick={() => {
                    setActiveProtocol(protocol);
                    setActiveTabModal('drugs');
                  }}
                  className="group relative bg-white dark:bg-slate-900/90 hover:bg-amber-50/40 dark:hover:bg-amber-950/25 rounded-2xl p-5 border border-slate-200/80 dark:border-amber-900/30 hover:border-amber-500/50 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    {/* Category Pill & Max Days Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold font-outfit bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200/70 dark:border-amber-800/60">
                        {getCategoryIcon(protocol.iconName, 'w-3.5 h-3.5 text-amber-600 dark:text-amber-400')}
                        {protocol.categoryLabel}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold font-outfit bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200/80 dark:border-amber-800/50">
                        <Clock className="w-3.5 h-3.5 text-amber-500" />
                        Maks. {protocol.maxSelfMedDays} Hari
                      </span>
                    </div>

                    {/* Title & Quick Summary */}
                    <div>
                      <h3 className="text-base sm:text-lg font-black font-outfit text-slate-800 dark:text-slate-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                        {protocol.title}
                      </h3>
                      <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed font-medium">
                        {protocol.quickSummary}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* PAGINATION CONTROL BAR */}
          {totalPages > 1 && (
            <div className="bg-white dark:bg-[#1a0f04] p-4 sm:p-5 rounded-2xl border border-amber-200/80 dark:border-amber-500/25 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4 mt-6">
              {/* Left: Summary Info */}
              <div className="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-300 font-medium">
                <p>
                  Halaman <span className="font-black text-amber-700 dark:text-amber-400">{validCurrentPage}</span> dari <span className="font-black text-slate-900 dark:text-white">{totalPages}</span> (Menampilkan <span className="font-black text-amber-700 dark:text-amber-400">{totalItems === 0 ? 0 : `${startIndex + 1}–${endIndex}`}</span> dari <span className="font-black text-slate-900 dark:text-white">{totalItems}</span> keluhan)
                </p>
              </div>

              {/* Right: Items Per Page & Page Navigation Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                {/* Items Per Page Selector */}
                <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300 mr-1 sm:mr-2">
                  <span className="text-[11px] font-bold text-slate-400">Tampilkan:</span>
                  <select
                    value={itemsPerPage}
                    onChange={(e) => {
                      setItemsPerPage(Number(e.target.value));
                      setCurrentPage(1);
                    }}
                    className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-amber-900/40 rounded-xl px-2.5 py-1 text-xs font-bold text-slate-800 dark:text-slate-200 cursor-pointer focus:outline-none focus:border-amber-500"
                  >
                    <option value={12}>12 / hal</option>
                    <option value={24}>24 / hal</option>
                    <option value={50}>Semua (50 / hal)</option>
                  </select>
                </div>

                {/* First Page */}
                <button
                  type="button"
                  onClick={() => handlePageChange(1)}
                  disabled={validCurrentPage === 1}
                  className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-amber-700 dark:hover:text-amber-300 hover:bg-amber-50 dark:hover:bg-amber-950/60 disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer border border-slate-200 dark:border-amber-900/40"
                  title="Halaman Pertama"
                >
                  <ChevronsLeft className="w-4 h-4" />
                </button>

                {/* Previous Page */}
                <button
                  type="button"
                  onClick={() => handlePageChange(validCurrentPage - 1)}
                  disabled={validCurrentPage === 1}
                  className="px-3 py-2 rounded-xl text-xs font-bold font-outfit text-slate-700 dark:text-slate-200 hover:text-amber-700 dark:hover:text-amber-300 hover:bg-amber-50 dark:hover:bg-amber-950/60 disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer flex items-center gap-1 border border-slate-200 dark:border-amber-900/40"
                  title="Halaman Sebelumnya"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Sebelumnya</span>
                </button>

                {/* Numbered Page Buttons */}
                <div className="flex items-center gap-1 mx-1">
                  {getPageNumbers().map((pageItem, idx) => {
                    if (pageItem === '...') {
                      return (
                        <span key={`ellipsis-${idx}`} className="px-2 py-1 text-xs text-slate-400 font-bold select-none">
                          ...
                        </span>
                      );
                    }

                    const pageNumber = pageItem as number;
                    const isActive = pageNumber === validCurrentPage;

                    return (
                      <button
                        key={pageNumber}
                        type="button"
                        onClick={() => handlePageChange(pageNumber)}
                        className={`min-w-[36px] h-9 px-2 rounded-xl text-xs font-black font-outfit transition-all cursor-pointer ${
                          isActive
                            ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md shadow-amber-950/30 scale-105 border border-amber-400/30'
                            : 'bg-white dark:bg-[#1a0f04] text-slate-700 dark:text-slate-200 hover:bg-amber-50 dark:hover:bg-amber-950/40 border border-slate-200 dark:border-amber-900/40'
                        }`}
                      >
                        {pageNumber}
                      </button>
                    );
                  })}
                </div>

                {/* Next Page */}
                <button
                  type="button"
                  onClick={() => handlePageChange(validCurrentPage + 1)}
                  disabled={validCurrentPage === totalPages}
                  className="px-3 py-2 rounded-xl text-xs font-bold font-outfit text-slate-700 dark:text-slate-200 hover:text-amber-700 dark:hover:text-amber-300 hover:bg-amber-50 dark:hover:bg-amber-950/60 disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer flex items-center gap-1 border border-slate-200 dark:border-amber-900/40"
                  title="Halaman Berikutnya"
                >
                  <span className="hidden sm:inline">Berikutnya</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Last Page */}
                <button
                  type="button"
                  onClick={() => handlePageChange(totalPages)}
                  disabled={validCurrentPage === totalPages}
                  className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-amber-700 dark:hover:text-amber-300 hover:bg-amber-50 dark:hover:bg-amber-950/60 disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer border border-slate-200 dark:border-amber-900/40"
                  title="Halaman Terakhir"
                >
                  <ChevronsRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {/* DETAILED CLINICAL TRIAGE MODAL */}
      {activeProtocol && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
            
            {/* Modal Top Banner */}
            <div className="flex-shrink-0 px-4 sm:px-6 py-4 sm:py-5 bg-gradient-to-r from-amber-900 via-[#3a1d08] to-stone-950 text-white flex items-start justify-between gap-4 border-b border-amber-700/50">
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/20 text-amber-100 border border-white/20">
                    {getCategoryIcon(activeProtocol.iconName, 'w-3 h-3 text-amber-200')}
                    {activeProtocol.categoryLabel}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-400/20 text-amber-200 border border-amber-300/30">
                    <Clock className="w-3 h-3 text-amber-300" />
                    Batas Swamedikasi: Maksimal {activeProtocol.maxSelfMedDays} Hari
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                  {activeProtocol.title}
                </h2>
                <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed max-w-2xl">
                  {activeProtocol.quickSummary}
                </p>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  type="button"
                  onClick={() => handlePrint()}
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
                  title="Cetak Lembar Swamedikasi Pasien (Format 1 Halaman A4)"
                >
                  <Printer className="w-4 h-4 text-white" />
                  <span className="hidden sm:inline">Cetak (1 Hlm)</span>
                </button>
                <button
                  type="button"
                  onClick={handleCopyWhatsAppCounseling}
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
                  title="Salin Teks Konseling Edukasi Pasien untuk WhatsApp"
                >
                  {copiedNotification ? (
                    <>
                      <Check className="w-4 h-4 text-amber-300" />
                      <span className="hidden sm:inline text-amber-300">Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-white" />
                      <span className="hidden sm:inline">Salin WA</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveProtocol(null)}
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Red Flag Warning Callout Banner in Modal */}
            <div className="flex-shrink-0 px-4 sm:px-6 py-3 bg-rose-50 dark:bg-rose-950/50 border-b border-rose-200 dark:border-rose-900/60 flex items-start gap-3">
              <AlertOctagon className="w-5 h-5 text-rose-600 dark:text-rose-400 flex-shrink-0 mt-0.5 animate-pulse" />
              <div className="text-xs text-rose-900 dark:text-rose-200 leading-relaxed">
                <span className="font-bold">PERINGATAN TANDA BAHAYA (RED FLAGS): </span>
                Jika Anda mendapati tanda darurat seperti demam &gt; 39°C, sesak berat, kaku kuduk, muntah darah, atau tidak membaik &gt; {activeProtocol.maxSelfMedDays} hari, 
                <strong> JANGAN lanjutkan swamedikasi</strong> dan segera periksakan ke dokter/IGD!
              </div>
            </div>

            {/* Modal Navigation Tabs - Modern Pill Segmented Control */}
            <div className="flex-shrink-0 px-4 sm:px-6 py-3 bg-slate-50 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700">
                <button
                  type="button"
                  onClick={() => setActiveTabModal('drugs')}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer ${
                    activeTabModal === 'drugs'
                      ? 'bg-amber-600 text-white shadow-sm shadow-amber-900/20 border border-amber-500 ring-2 ring-amber-400/20'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <Pill className="w-3.5 h-3.5 text-amber-400" />
                  <span>Pilihan Obat ({activeProtocol.recommendedDrugs.length})</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTabModal('decision-tree')}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer ${
                    activeTabModal === 'decision-tree'
                      ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-sm shadow-amber-900/30 border border-amber-500 ring-2 ring-amber-400/20'
                      : 'bg-white dark:bg-slate-800 text-amber-700 dark:text-amber-300 hover:bg-amber-50 dark:hover:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60'
                  }`}
                >
                  <GitMerge className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                  <span>Bagan Alur Triage</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTabModal('lifestyle')}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer ${
                    activeTabModal === 'lifestyle'
                      ? 'bg-amber-600 text-white shadow-sm shadow-amber-900/20 border border-amber-500 ring-2 ring-amber-400/20'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <HeartHandshake className="w-3.5 h-3.5 text-amber-400" />
                  <span>Terapi Alami &amp; Gaya Hidup</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTabModal('redflags')}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer ${
                    activeTabModal === 'redflags'
                      ? 'bg-rose-600 text-white shadow-sm shadow-rose-900/30 border border-rose-500 ring-2 ring-rose-400/20'
                      : 'bg-white dark:bg-slate-800 text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 border border-rose-200 dark:border-rose-900/50'
                  }`}
                >
                  <AlertOctagon className="w-3.5 h-3.5 text-rose-500" />
                  <span>Tanda Bahaya ({activeProtocol.redFlags.length})</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTabModal('populations')}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer ${
                    activeTabModal === 'populations'
                      ? 'bg-amber-600 text-white shadow-sm shadow-amber-900/20 border border-amber-500 ring-2 ring-amber-400/20'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <Baby className="w-3.5 h-3.5 text-amber-400" />
                  <span>Bumil, Anak &amp; Lansia</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTabModal('dagusibu')}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer ${
                    activeTabModal === 'dagusibu'
                      ? 'bg-amber-600 text-white shadow-sm shadow-amber-900/20 border border-amber-500 ring-2 ring-amber-400/20'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>Edukasi DAGUSIBU</span>
                </button>
              </div>
            </div>

            {/* Modal Body Content - Natural Flex Scroll Container */}
            <div className="flex-1 min-h-0 overflow-y-auto p-4 sm:p-6 space-y-6">
              
              {/* TAB 1: DRUGS RECOMMENDATION */}
              {activeTabModal === 'drugs' && (
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100">
                        Pilihan Obat Resmi yang Aman Dikonsumsi Mandiri:
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Disusun berdasarkan Kepmenkes RI tentang Obat Wajib Apotek (OWA 1/2/3) & Daftar Obat Bebas Terdaftar BPOM.
                      </p>
                    </div>
                  </div>

                  {/* INTERACTIVE COMORBIDITY SCREENING FILTER BAR */}
                  <div className="bg-gradient-to-r from-slate-50 via-amber-50/40 to-slate-50 dark:from-slate-800/80 dark:via-amber-950/20 dark:to-slate-800/80 p-4 rounded-2xl border border-amber-200/80 dark:border-amber-800/60 shadow-xs space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-lg bg-amber-600 text-white shadow-xs shrink-0">
                          <Filter className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-sm font-black text-slate-800 dark:text-slate-100 flex items-center gap-2">
                            <span>Skrining Riwayat Komorbid Pasien:</span>
                            {selectedComorbidities.length > 0 && (
                              <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-600 text-white font-bold animate-pulse">
                                {selectedComorbidities.length} Terpilih
                              </span>
                            )}
                          </h4>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400">
                            Pilih kondisi penyerta pasien untuk penapisan instan ⛔ Kontraindikasi, ⚠️ Perhatian Khusus, &amp; 🛡️ Obat Aman.
                          </p>
                        </div>
                      </div>

                      {selectedComorbidities.length > 0 && (
                        <button
                          type="button"
                          onClick={() => setSelectedComorbidities([])}
                          className="self-start sm:self-center px-2.5 py-1 text-xs font-bold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/50 rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          <RotateCcw className="w-3 h-3" />
                          <span>Reset Skrining</span>
                        </button>
                      )}
                    </div>

                    {/* Comorbidity Chips */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {SWAMEDIKASI_COMORBID_OPTIONS.map((c) => {
                        const isSelected = selectedComorbidities.includes(c.id);
                        return (
                          <button
                            key={c.id}
                            type="button"
                            onClick={() => toggleComorbidity(c.id)}
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                              isSelected
                                ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white border-amber-500 shadow-sm shadow-amber-950/30 ring-2 ring-amber-400/30'
                                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-amber-50/70 dark:hover:bg-amber-950/40 border-slate-200 dark:border-slate-700'
                            }`}
                            title={c.shortDesc}
                          >
                            {getComorbidIcon(c.icon, isSelected ? 'text-white w-3.5 h-3.5' : 'text-amber-600 dark:text-amber-400 w-3.5 h-3.5')}
                            <span>{c.badgeLabel}</span>
                            {isSelected && <Check className="w-3 h-3 text-white" />}
                          </button>
                        );
                      })}
                    </div>

                    {/* Active Screen Summary Banner */}
                    {selectedComorbidities.length > 0 && (
                      <div className="p-2.5 rounded-xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800/50 text-xs text-amber-900 dark:text-amber-200 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                        <span className="leading-snug">
                          <strong>Penapisan Aktif:</strong> Memeriksa keamanan obat untuk riwayat{' '}
                          <span className="font-extrabold underline">{selectedComorbidities.join(', ').toUpperCase()}</span>. Periksa banner peringatan berwarna pada kartu obat di bawah!
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    {activeProtocol.recommendedDrugs.map((drug, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-700/80 space-y-4 shadow-sm"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-700">
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <h5 className="text-base font-bold text-slate-900 dark:text-white">
                                {drug.genericName}
                              </h5>
                              {renderBpomBadge(drug.bpomClass)}
                              {drug.isFirstLine && (
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-200 border border-amber-300 dark:border-amber-700 shadow-2xs">
                                  <ShieldCheck className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                                  PILIHAN UTAMA (FIRST-LINE)
                                </span>
                              )}
                            </div>
                            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                              <strong>Contoh Merk Dagang Populer di Apotek:</strong> {drug.brandExamples.join(', ')}
                            </div>
                          </div>

                          {/* Action Buttons: Cross-check interaction & Create WhatsApp PIO Card */}
                          <div className="flex items-center gap-2 flex-shrink-0">
                            {onCheckInteractionWith && (
                              <button
                                onClick={() => {
                                  onCheckInteractionWith(drug.genericName.split(' ')[0]);
                                }}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800 hover:bg-rose-100 transition-colors"
                                title="Cek apakah obat ini berinteraksi dengan obat rutin yang sedang diminum pasien"
                              >
                                <ShieldAlert className="w-3.5 h-3.5" />
                                <span>Cek Interaksi</span>
                              </button>
                            )}

                            {onAddToPioCard && (
                              <button
                                onClick={() => {
                                  handleTransferToPio(drug.genericName, drug.brandExamples, drug.dosageGuideline, drug.timing);
                                }}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-amber-600 hover:bg-amber-700 text-white shadow-sm transition-colors cursor-pointer"
                                title="Buat Kartu Aturan Minum WhatsApp Pasien"
                              >
                                <MessageSquare className="w-3.5 h-3.5" />
                                <span>Kartu WA</span>
                              </button>
                            )}
                          </div>
                        </div>

                        {/* DOWA LEGAL BADGE & STATUTORY LIMITS CARD */}
                        {drug.owaDetails && (
                          <div className="p-3.5 rounded-xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent dark:from-amber-950/40 border border-amber-300/80 dark:border-amber-700/60 space-y-2">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <div className="flex flex-wrap items-center gap-2">
                                <Scale className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                                <span className="text-xs font-extrabold text-amber-950 dark:text-amber-200">
                                  Landasan Hukum DOWA No. {drug.owaDetails.owaNumber}
                                </span>
                                <span className="text-[10px] px-2 py-0.5 rounded-md font-bold bg-amber-200/90 dark:bg-amber-900/60 text-amber-900 dark:text-amber-100 border border-amber-300 dark:border-amber-700">
                                  {drug.owaDetails.skMenkes}
                                </span>
                              </div>
                              <div className="text-xs font-black text-amber-900 dark:text-amber-200">
                                Batas Penyerahan Maksimal: <span className="underline">{drug.owaDetails.maxDispense}</span>
                              </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-700 dark:text-slate-300 pt-1 border-t border-amber-200/60 dark:border-amber-800/40">
                              <div>
                                <span className="font-bold text-amber-900 dark:text-amber-200">Kriteria Klinis:</span> {drug.owaDetails.clinicalConditions || 'Pengobatan keluhan ulangan yang pernah diperiksa dokter.'}
                              </div>
                              <div>
                                <span className="font-bold text-amber-900 dark:text-amber-200">Kewajiban Apoteker:</span> {drug.owaDetails.patientNotesRequired ? 'Wajib mencatat identitas & riwayat pengobatan dalam PMR Apotek.' : 'Memberikan KIE lengkap.'}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* DYNAMIC COMORBIDITY SCREENING ALERTS */}
                        {selectedComorbidities.length > 0 && drug.comorbidWarnings && (
                          <div className="space-y-2 pt-1">
                            {drug.comorbidWarnings
                              .filter(w => selectedComorbidities.includes(w.comorbid))
                              .map((w, wIdx) => {
                                if (w.status === 'kontraindikasi') {
                                  return (
                                    <div
                                      key={wIdx}
                                      className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/60 border-2 border-rose-500 text-rose-950 dark:text-rose-100 flex items-start gap-3 shadow-xs animate-pulse"
                                    >
                                      <div className="p-1 rounded-lg bg-rose-600 text-white shrink-0 mt-0.5">
                                        <AlertOctagon className="w-4 h-4" />
                                      </div>
                                      <div className="space-y-0.5">
                                        <div className="text-xs font-black text-rose-700 dark:text-rose-300 uppercase tracking-wide">
                                          ⛔ KONTRAINDIKASI RIWAYAT: {w.comorbid.toUpperCase()}
                                        </div>
                                        <p className="text-xs font-medium text-rose-900 dark:text-rose-200 leading-relaxed">
                                          {w.note}
                                        </p>
                                      </div>
                                    </div>
                                  );
                                }
                                if (w.status === 'hati-hati') {
                                  return (
                                    <div
                                      key={wIdx}
                                      className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/60 border-2 border-amber-500 text-amber-950 dark:text-amber-100 flex items-start gap-3 shadow-xs"
                                    >
                                      <div className="p-1 rounded-lg bg-amber-600 text-white shrink-0 mt-0.5">
                                        <AlertTriangle className="w-4 h-4" />
                                      </div>
                                      <div className="space-y-0.5">
                                        <div className="text-xs font-black text-amber-700 dark:text-amber-300 uppercase tracking-wide">
                                          ⚠️ PERHATIAN KHUSUS / HATI-HATI: {w.comorbid.toUpperCase()}
                                        </div>
                                        <p className="text-xs font-medium text-amber-900 dark:text-amber-200 leading-relaxed">
                                          {w.note}
                                        </p>
                                      </div>
                                    </div>
                                  );
                                }
                                return (
                                  <div
                                    key={wIdx}
                                    className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-400 text-emerald-950 dark:text-emerald-100 flex items-start gap-2.5"
                                  >
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                                    <div className="space-y-0.5">
                                      <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300">
                                        🛡️ AMAN / DIREKOMENDASIKAN UNTUK {w.comorbid.toUpperCase()}
                                      </span>
                                      <p className="text-xs text-emerald-900 dark:text-emerald-200 leading-relaxed">{w.note}</p>
                                    </div>
                                  </div>
                                );
                              })}
                          </div>
                        )}

                        {/* 1. Panduan Dosis Spesifik Populasi (Dewasa, Anak, Bumil, Lansia) */}
                        <div className="space-y-2 pt-1">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                              <Clock className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                              <span>Panduan Dosis Spesifik Populasi:</span>
                            </span>
                            <span className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                              Standar Klinis &amp; EBM Terverifikasi
                            </span>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 text-xs">
                            {/* Dosis Dewasa */}
                            <div className="bg-blue-50/80 dark:bg-blue-950/40 p-3 rounded-xl border border-blue-200/80 dark:border-blue-900/60 space-y-1">
                              <div className="font-bold text-blue-900 dark:text-blue-200 flex items-center gap-1.5">
                                <User className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                                <span>Dosis Dewasa (&gt; 12 Thn)</span>
                              </div>
                              <p className="text-slate-700 dark:text-slate-300 text-[11px] leading-relaxed">
                                {drug.dosageDetails?.adult || drug.dosageGuideline}
                              </p>
                            </div>

                            {/* Dosis Anak */}
                            <div className="bg-amber-50/80 dark:bg-amber-950/40 p-3 rounded-xl border border-amber-200/80 dark:border-amber-900/60 space-y-1">
                              <div className="font-bold text-amber-900 dark:text-amber-200 flex items-center gap-1.5">
                                <Baby className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                                <span>Dosis Anak (1–12 Thn)</span>
                              </div>
                              <p className="text-slate-700 dark:text-slate-300 text-[11px] leading-relaxed">
                                {drug.dosageDetails?.pediatric || 'Gunakan sediaan khusus anak atau konsultasikan dosis berbasis berat badan (BB) dengan Apoteker.'}
                              </p>
                            </div>

                            {/* Dosis Bayi (< 1 Thn) */}
                            <div className="bg-cyan-50/80 dark:bg-cyan-950/40 p-3 rounded-xl border border-cyan-200/80 dark:border-cyan-900/60 space-y-1">
                              <div className="font-bold text-cyan-900 dark:text-cyan-200 flex items-center gap-1.5">
                                <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                                <span>Dosis Bayi (&lt; 1 Thn)</span>
                              </div>
                              <p className="text-slate-700 dark:text-slate-300 text-[11px] leading-relaxed">
                                {drug.dosageDetails?.infant || 'Wajib konsultasi dokter spesialis anak. Hindari swamedikasi bebas pada bayi < 1 tahun.'}
                              </p>
                            </div>

                            {/* Ibu Hamil & Menyusui */}
                            <div className="bg-purple-50/80 dark:bg-purple-950/40 p-3 rounded-xl border border-purple-200/80 dark:border-purple-900/60 space-y-1">
                              <div className="font-bold text-purple-900 dark:text-purple-200 flex items-center gap-1.5">
                                <HeartHandshake className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 shrink-0" />
                                <span>Ibu Hamil &amp; Menyusui</span>
                              </div>
                              <p className="text-slate-700 dark:text-slate-300 text-[11px] leading-relaxed">
                                {drug.dosageDetails?.pregnancy || 'Konsultasikan dengan Dokter Spesialis Kandungan / Apoteker sebelum menggunakan obat ini.'}
                              </p>
                            </div>

                            {/* Lansia / Geriatri */}
                            <div className="bg-emerald-50/80 dark:bg-emerald-950/40 p-3 rounded-xl border border-emerald-200/80 dark:border-emerald-900/60 space-y-1">
                              <div className="font-bold text-emerald-900 dark:text-emerald-200 flex items-center gap-1.5">
                                <Activity className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                                <span>Lansia (Geriatri)</span>
                              </div>
                              <p className="text-slate-700 dark:text-slate-300 text-[11px] leading-relaxed">
                                {drug.dosageDetails?.geriatric || 'Gunakan dosis terendah efektif. Perhatikan penurunan klirens ginjal dan interaksi obat rutin.'}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* 2. Aturan Minum & Catatan Penting Apoteker */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs pt-1">
                          <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200/80 dark:border-slate-800 space-y-1">
                            <div className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                              <Utensils className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                              <span>Aturan Minum, Waktu &amp; Cara Pakai</span>
                            </div>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                              {drug.timing}
                            </p>
                          </div>

                          <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200/80 dark:border-slate-800 space-y-1">
                            <div className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                              <Info className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                              <span>Catatan Penting Apoteker &amp; Keamanan</span>
                            </div>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                              {drug.cautionNotes || 'Gunakan sesuai dosis tertera. Segera periksakan ke dokter jika keluhan menetap atau timbul reaksi alergi.'}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Anti-Microbial Resistance Reminder */}
                  <div className="p-4 rounded-2xl bg-slate-900 text-white dark:bg-slate-950 border border-slate-800 flex items-start gap-3">
                    <AlertOctagon className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                    <div className="text-xs space-y-1">
                      <div className="font-bold text-rose-300">
                        STOP PENYALAHGUNAAN ANTIBIOTIK PADA SWAMEDIKASI!
                      </div>
                      <p className="text-slate-300 leading-relaxed">
                        Infeksi virus seperti flu batuk biasa, radang tenggorokan akut, demam hari pertama, dan diare akut 
                        <strong> TIDAK MEMBUTUHKAN ANTIBIOTIK</strong> (seperti Amoxicillin, Cefadroxil, Ciprofloxacin). 
                        Penggunaan antibiotik tanpa resep dokter memicu resistensi kuman bakteri kebal obat yang mematikan.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: CLINICAL DECISION TREE FLOWCHART */}
              {activeTabModal === 'decision-tree' && (
                <div className="space-y-5">
                  <div className="bg-gradient-to-r from-[#2c1705] via-amber-950 to-[#180d02] p-5 rounded-2xl text-white space-y-2 shadow-md border border-amber-500/30">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-white/10 backdrop-blur-sm">
                        <GitMerge className="w-5 h-5 text-amber-400" />
                      </div>
                      <div>
                        <h4 className="text-base font-black tracking-tight">
                          Bagan Alur Pengambilan Keputusan Klinis (Decision Tree)
                        </h4>
                        <p className="text-xs text-amber-200/90 font-medium">
                          Standar Triage &amp; Clinical Pathway: {activeProtocol.title}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-amber-100/80 leading-relaxed">
                      Alur penapisan 6-tahap berstandar farmasi klinis: Anamnesis WWHAM, Skrining Red Flags (rujuk darurat), Stratifikasi Kelayakan Kasus (&lt; {activeProtocol.maxSelfMedDays} Hari), Pemilihan Obat Lini Pertama, Pertimbangan Alternatif/DOWA, serta Batas Waktu Evaluasi Rujukan.
                    </p>
                  </div>

                  {/* Flowchart Timeline */}
                  <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-3 sm:before:left-4 before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-amber-500 before:via-orange-400 before:to-purple-500">
                    {getProtocolDecisionTree(activeProtocol).map((node, nIdx) => {
                      const getStageBadgeColor = (actionType: string) => {
                        switch (actionType) {
                          case 'danger_refer':
                            return 'bg-rose-100 dark:bg-rose-950/80 text-rose-800 dark:text-rose-200 border-rose-300 dark:border-rose-700';
                          case 'recommend_firstline':
                            return 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-200 border-emerald-300 dark:border-emerald-700';
                          case 'recommend_secondline':
                            return 'bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-200 border-blue-300 dark:border-blue-700';
                          case 'monitor_days':
                            return 'bg-purple-100 dark:bg-purple-950/80 text-purple-800 dark:text-purple-200 border-purple-300 dark:border-purple-700';
                          default:
                            return 'bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-200 border-amber-300 dark:border-amber-700';
                        }
                      };

                      const getNodeCircleStyle = (actionType: string) => {
                        switch (actionType) {
                          case 'danger_refer':
                            return 'bg-rose-600 text-white ring-4 ring-rose-200 dark:ring-rose-900/60';
                          case 'recommend_firstline':
                            return 'bg-emerald-600 text-white ring-4 ring-emerald-200 dark:ring-emerald-900/60';
                          case 'recommend_secondline':
                            return 'bg-blue-600 text-white ring-4 ring-blue-200 dark:ring-blue-900/60';
                          case 'monitor_days':
                            return 'bg-purple-600 text-white ring-4 ring-purple-200 dark:ring-purple-900/60';
                          default:
                            return 'bg-amber-600 text-white ring-4 ring-amber-200 dark:ring-amber-900/60';
                        }
                      };

                      return (
                        <div key={nIdx} className="relative group">
                          {/* Step Number Circle */}
                          <div className={`absolute -left-6 sm:-left-8 top-1 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center font-black text-xs shadow-md transition-transform group-hover:scale-110 ${getNodeCircleStyle(node.actionType)}`}>
                            {node.step}
                          </div>

                          {/* Node Card */}
                          <div className="bg-slate-50 dark:bg-slate-800/70 p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 space-y-2.5 shadow-xs hover:border-amber-400/50 transition-all">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold border ${getStageBadgeColor(node.actionType)}`}>
                                {node.badgeText || node.stage}
                              </span>
                              <span className="text-[11px] font-bold text-slate-400">
                                Tahap {node.step} dari 6
                              </span>
                            </div>

                            <h5 className="text-sm sm:text-base font-black text-slate-900 dark:text-white">
                              {node.title}
                            </h5>

                            <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed">
                              {node.description}
                            </p>

                            {node.note && (
                              <div className="pt-2">
                                <div className="p-2.5 rounded-xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 text-xs flex items-start gap-2">
                                  <Info className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                                  <span className="font-medium">{node.note}</span>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* TAB 2: NON-PHARMACOLOGICAL LIFESTYLE THERAPY */}
              {activeTabModal === 'lifestyle' && (
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100">
                      Terapi Alami, Perawatan Rumahan & Modifikasi Gaya Hidup:
                    </h4>
                    <p className="text-xs text-slate-500">
                      Lakukan langkah pendukung non-obat ini terlebih dahulu sebelum mengonsumsi obat-obatan.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {activeProtocol.nonPharmacolTherapy.map((therapy, tIdx) => (
                      <div
                        key={tIdx}
                        className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-800/40 flex items-start gap-3"
                      >
                        <div className="p-1.5 rounded-lg bg-emerald-500 text-white flex-shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <div className="text-xs text-slate-700 dark:text-slate-200 font-medium leading-relaxed">
                          {therapy}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Prohibited Self-Care Actions */}
                  {activeProtocol.contraindicatedForSelfMed && activeProtocol.contraindicatedForSelfMed.length > 0 && (
                    <div className="mt-6 p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/60 space-y-2">
                      <div className="text-xs font-bold text-rose-900 dark:text-rose-200 flex items-center gap-1.5">
                        <AlertTriangle className="w-4 h-4 text-rose-600" />
                        <span>Hal-Hal yang DILARANG / PANTANGAN Selama Swamedikasi:</span>
                      </div>
                      <ul className="space-y-1.5 pl-5 list-disc text-xs text-rose-800 dark:text-rose-300">
                        {activeProtocol.contraindicatedForSelfMed.map((contra, cIdx) => (
                          <li key={cIdx} className="leading-relaxed">
                            {contra}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: RED FLAGS & WHEN TO SEE DOCTOR */}
              {activeTabModal === 'redflags' && (
                <div className="space-y-5">
                  <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 space-y-2">
                    <h4 className="text-sm font-bold text-rose-900 dark:text-rose-200 flex items-center gap-2">
                      <AlertOctagon className="w-5 h-5 text-rose-600" />
                      <span>Daftar Tanda Bahaya (Red Flags) Pasien Wajib Segera ke Dokter:</span>
                    </h4>
                    <p className="text-xs text-rose-800 dark:text-rose-300">
                      Bila Anda atau pasien menemui SATU saja dari kriteria berikut, segera hentikan pengobatan mandiri dan lakukan rujukan medis:
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    {activeProtocol.redFlags.map((flag, fIdx) => (
                      <div
                        key={fIdx}
                        className="p-3.5 rounded-xl bg-white dark:bg-slate-800/80 border-l-4 border-l-rose-500 border-y border-r border-slate-200 dark:border-slate-700 flex items-start gap-3 shadow-xs"
                      >
                        <div className="p-1 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400 mt-0.5 flex-shrink-0">
                          <AlertTriangle className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100 leading-relaxed">
                          {flag}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* When to see doctor checklist */}
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-2">
                    <h5 className="text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider">
                      Waktu Tepat Menemui Dokter / IGD:
                    </h5>
                    <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                      {activeProtocol.whenToSeeDoctor.map((item, wIdx) => (
                        <li key={wIdx} className="flex items-start gap-2">
                          <span className="text-teal-500 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* TAB 4: SPECIAL POPULATIONS */}
              {activeTabModal === 'populations' && (
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100">
                      Panduan Khusus untuk Ibu Hamil, Balita & Lansia:
                    </h4>
                    <p className="text-xs text-slate-500">
                      Kelompok pasien rentan membutuhkan kehati-hatian ekstra terhadap pemilihan obat dan dosis.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {/* Pregnancy */}
                    <div className="p-4 rounded-2xl bg-pink-50/50 dark:bg-pink-950/20 border border-pink-200/80 dark:border-pink-900/40 space-y-1.5">
                      <div className="flex items-center gap-2 text-pink-800 dark:text-pink-300 font-bold text-xs">
                        <HeartHandshake className="w-4 h-4 text-pink-500" />
                        <span>Ibu Hamil & Menyusui (Bumil / Busui)</span>
                      </div>
                      <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
                        {activeProtocol.specialPopulations.pregnancyWarning}
                      </p>
                    </div>

                    {/* Pediatric */}
                    <div className="p-4 rounded-2xl bg-sky-50/50 dark:bg-sky-950/20 border border-sky-200/80 dark:border-sky-900/40 space-y-1.5">
                      <div className="flex items-center gap-2 text-sky-800 dark:text-sky-300 font-bold text-xs">
                        <Baby className="w-4 h-4 text-sky-500" />
                        <span>Anak-Anak & Balita</span>
                      </div>
                      <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
                        {activeProtocol.specialPopulations.pediatricWarning}
                      </p>
                    </div>

                    {/* Geriatric */}
                    <div className="p-4 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40 space-y-1.5">
                      <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-bold text-xs">
                        <Clock className="w-4 h-4 text-amber-500" />
                        <span>Lansia (Geriatri &gt; 65 Tahun)</span>
                      </div>
                      <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
                        {activeProtocol.specialPopulations.geriatricWarning}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 5: DAGUSIBU KEMENKES */}
              {activeTabModal === 'dagusibu' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-950 via-[#2c1705] to-orange-950 text-white space-y-1 border border-amber-500/30">
                    <h4 className="text-sm font-bold flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-amber-400" />
                      <span>Edukasi DAGUSIBU Kemenkes RI:</span>
                    </h4>
                    <p className="text-xs text-amber-100">
                      Dapatkan, Gunakan, Simpan, dan Buang Obat dengan Tepat dan Benar.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                      <div className="text-xs font-bold text-amber-600 dark:text-amber-400">
                        1. DAPATKAN (DA)
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        Beli obat selalu di sarana resmi: Apotek berizin, Klinik, atau Toko Obat Berizin. Periksa kemasan segel dan nomor registrasi BPOM.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                      <div className="text-xs font-bold text-amber-600 dark:text-amber-400">
                        2. GUNAKAN (GU)
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        Gunakan obat sesuai aturan pakai (sebelum/sesudah makan), takar sirup dengan sendok takar resmi, jangan berbagi obat resep dengan orang lain.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                      <div className="text-xs font-bold text-amber-600 dark:text-amber-400">
                        3. SIMPAN (SI)
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        Simpan di kotak obat pada suhu sejuk terhindar sinar matahari langsung. Jauhkan dari jangkauan anak-anak. Jangan simpan salep/tetes mata yang lewat BUD.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                      <div className="text-xs font-bold text-amber-600 dark:text-amber-400">
                        4. BUANG (BU)
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        Hancurkan tablet/kapsul campur dengan tanah/kopi sebelum dibuang ke sampah. Rusak label botol sirup dan gunting blister agar tidak disalahgunakan.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Bottom Action Bar */}
            <div className="flex-shrink-0 px-4 sm:px-6 py-3.5 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-slate-500 flex items-center gap-1.5">
                <Info className="w-4 h-4 text-amber-500" />
                <span>Edukasi resmi farmasis klinis Farmasi Druggist</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handlePrint()}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white shadow-sm transition-colors cursor-pointer"
                  title="Cetak Lembar Pasien Swamedikasi (Format Pas 1 Halaman A4)"
                >
                  <Printer className="w-4 h-4 text-amber-200" />
                  <span>Cetak (1 Halaman)</span>
                </button>

                <button
                  onClick={handleCopyWhatsAppCounseling}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-sm transition-colors cursor-pointer"
                >
                  {copiedNotification ? (
                    <>
                      <Check className="w-4 h-4 text-amber-200" />
                      <span>Teks Edukasi Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-4 h-4" />
                      <span>Salin Konseling Pasien WA</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => setActiveProtocol(null)}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Close SCREEN UI WRAPPER */}
      </div>

      {/* ========================================================================= */}
      {/* DEDICATED 1-PAGE PRINT LAYOUT (A4 PORTRAIT - FIT TO EXACTLY 1 PAGE)        */}
      {/* ========================================================================= */}
      {protocolToPrint && (
        <div className="hidden print:block print:fixed print:inset-0 print:z-[999999] print:bg-white print:p-0 print:m-0 font-sans text-slate-900 space-y-1.5 print-one-page">
          <style>{`
            @media print {
              @page {
                size: A4 portrait;
                margin: 5mm 6mm;
              }
              html, body {
                margin: 0 !important;
                padding: 0 !important;
                width: 100vw !important;
                height: 100vh !important;
                overflow: hidden !important;
                background: #ffffff !important;
                color: #0f172a !important;
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
              }
              .print-one-page {
                width: 100% !important;
                max-height: 282mm !important;
                overflow: hidden !important;
                box-sizing: border-box !important;
                page-break-after: avoid !important;
                page-break-before: avoid !important;
                break-after: avoid !important;
              }
              * {
                box-sizing: border-box !important;
                page-break-inside: avoid !important;
                break-inside: avoid !important;
              }
            }
          `}</style>

          {/* 1. KOP SURAT KLINIK / APOTEK (HEADER) */}
          <div className="border-b-2 pb-1 flex items-center justify-between" style={{ borderColor: clinicBranding?.primaryColor || '#0d9488' }}>
            <div className="flex items-center gap-2">
              {clinicBranding?.logoUrl ? (
                <img src={clinicBranding.logoUrl} alt="Logo" className="w-9 h-9 object-contain shrink-0" />
              ) : (
                <div 
                  className="w-9 h-9 rounded-lg text-white flex items-center justify-center font-black text-xs shrink-0"
                  style={{ backgroundColor: clinicBranding?.primaryColor || '#0d9488' }}
                >
                  FD
                </div>
              )}
              <div>
                <h1 className="text-xs font-black uppercase tracking-wider text-slate-900 leading-tight" style={{ color: clinicBranding?.primaryColor || '#0d9488' }}>
                  {clinicBranding?.clinicName || 'KLINIK & APOTEK MEDIKA SEJAHTERA'}
                </h1>
                <p className="text-[8px] text-slate-700 font-bold leading-tight">
                  {clinicBranding?.tagline || 'Pusat Pelayanan Resep & Farmasi Klinis Terpadu • Pelayanan Informasi Obat (PIO)'}
                </p>
                <p className="text-[7px] text-slate-500">
                  {clinicBranding?.address || 'Jl. Jendral Sudirman No. 45, Jakarta'} {clinicBranding?.phone ? `• Telp: ${clinicBranding.phone}` : ''}
                </p>
              </div>
            </div>
            <div className="text-right text-[7.5px] text-slate-600 font-medium">
              <span className="inline-block px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold border border-emerald-300 text-[8px] mb-0.5">
                LEMBAR SWAMEDIKASI PASIEN
              </span>
              <p className="font-semibold text-slate-800">Tanggal: {new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
              <p className="text-amber-800 font-bold">Batas Waktu: Maksimal {protocolToPrint.maxSelfMedDays} Hari</p>
            </div>
          </div>

          {/* 2. IDENTITAS KELUHAN, DESKRIPSI & GEJALA KHAS */}
          <div className="bg-slate-50 border border-slate-300 p-2 rounded space-y-1">
            <div className="flex items-center justify-between border-b border-slate-200 pb-1">
              <div className="flex items-center gap-2">
                <span className="text-[7.5px] font-bold bg-emerald-100 text-emerald-900 border border-emerald-300 px-2 py-0.5 rounded uppercase tracking-wide">
                  {protocolToPrint.categoryLabel}
                </span>
                <h2 className="text-[10.5px] font-black text-slate-900 tracking-tight">
                  {protocolToPrint.title}
                </h2>
              </div>
              <span className="text-[7.5px] text-slate-600 font-medium">
                Kata Kunci Awam: <span className="font-bold text-slate-800">{protocolToPrint.laymanKeywords.slice(0, 4).join(', ')}</span>
              </span>
            </div>

            {/* Deskripsi Lengkap Tanpa Terpotong */}
            <p className="text-[7.5px] text-slate-700 leading-snug">
              <strong className="text-slate-900 font-bold">Definisi Klinis:</strong> {protocolToPrint.quickSummary}
            </p>

            {/* Tanda & Gejala Khas yang Jelas */}
            <div className="pt-0.5 flex items-start gap-1 text-[7.5px] leading-snug">
              <strong className="text-slate-900 font-bold shrink-0">Gejala Khas:</strong>
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-0.5">
                {protocolToPrint.typicalSymptoms.map((symp, idx) => (
                  <span key={idx} className="inline-flex items-center gap-1 text-slate-800">
                    <span className="w-1 h-1 rounded-full bg-emerald-600 shrink-0"></span>
                    <span>{symp}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 3. PERINGATAN TANDA BAHAYA (RED FLAGS - WAJIB RUJUK) */}
          <div className="bg-rose-50/70 border border-rose-300 p-1.5 rounded text-[7.5px] text-rose-950">
            <div className="flex items-center gap-1 text-rose-900 font-bold mb-0.5">
              <span className="text-rose-600 font-black text-[8px]">⚠️ PERINGATAN TANDA BAHAYA (SEGERA KE DOKTER / IGD JIKA MENGALAMI):</span>
            </div>
            <div className="grid grid-cols-2 gap-x-3 gap-y-0.5">
              {protocolToPrint.redFlags.map((rf, idx) => (
                <div key={idx} className="flex items-start gap-1 leading-tight">
                  <span className="text-rose-600 font-bold shrink-0">•</span>
                  <span>{rf}</span>
                </div>
              ))}
            </div>
            <p className="text-[6.5px] text-rose-800 mt-0.5 font-medium italic">
              *Bila keluhan tidak membaik dalam {protocolToPrint.maxSelfMedDays} hari atau timbul tanda bahaya di atas, hentikan swamedikasi dan segera periksa ke dokter.
            </p>
          </div>

          {/* 4. TABEL REKOMENDASI OBAT BEBAS, BEBAS TERBATAS & OWA (CLEAN HIGH CONTRAST) */}
          <div className="space-y-0.5">
            <div className="flex items-center justify-between pb-0.5">
              <h3 className="text-[8px] font-black text-slate-900 uppercase tracking-wide flex items-center gap-1">
                <span>💊 Rekomendasi Obat Bebas, Bebas Terbatas &amp; OWA (Resmi BPOM)</span>
              </h3>
              <span className="text-[7px] text-rose-700 font-semibold italic">
                Dilarang menggunakan antibiotik oral secara mandiri tanpa resep dokter
              </span>
            </div>
            <table className="w-full text-left text-[7.5px] border border-slate-300 rounded overflow-hidden">
              <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-300">
                <tr>
                  <th className="p-1 w-[26%]">Nama Obat &amp; Golongan BPOM</th>
                  <th className="p-1 w-[28%]">Panduan Dosis Spesifik (Dws/Anak/Bumil/Lansia)</th>
                  <th className="p-1 w-[20%]">Waktu &amp; Cara Minum</th>
                  <th className="p-1 w-[26%]">Catatan Penting Apoteker</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {protocolToPrint.recommendedDrugs.map((drug, idx) => (
                  <tr key={idx} className="bg-white">
                    <td className="p-1 align-top">
                      <strong className="text-slate-900 block font-bold text-[8px]">{drug.genericName}</strong>
                      <span className="text-[7px] text-slate-500 block leading-tight">Merk: {drug.brandExamples.slice(0, 3).join(', ')}</span>
                      <span className={`inline-block mt-0.5 px-1.5 py-0.2 rounded text-[6.5px] font-bold ${
                        drug.bpomClass.includes('Hijau')
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-400'
                          : drug.bpomClass.includes('Biru')
                          ? 'bg-sky-50 text-sky-800 border border-sky-400'
                          : 'bg-amber-50 text-amber-900 border border-amber-400'
                      }`}>
                        {drug.bpomClass}
                      </span>
                    </td>
                    <td className="p-1 align-top text-slate-800 leading-tight">
                      {drug.dosageDetails ? (
                        <div className="space-y-0.5 text-[6.5px]">
                          <div><strong className="text-blue-900">Dws:</strong> {drug.dosageDetails.adult}</div>
                          <div><strong className="text-amber-800">Anak:</strong> {drug.dosageDetails.pediatric}</div>
                          {drug.dosageDetails.infant && (
                            <div><strong className="text-cyan-800">Bayi:</strong> {drug.dosageDetails.infant}</div>
                          )}
                          <div><strong className="text-purple-800">Bumil:</strong> {drug.dosageDetails.pregnancy}</div>
                          <div><strong className="text-emerald-800">Lansia:</strong> {drug.dosageDetails.geriatric}</div>
                        </div>
                      ) : (
                        <span className="text-[7px]">{drug.dosageGuideline}</span>
                      )}
                    </td>
                    <td className="p-1 align-top text-slate-800 leading-tight">
                      {drug.timing}
                    </td>
                    <td className="p-1 align-top text-slate-600 leading-tight text-[7px]">
                      {drug.cautionNotes || 'Gunakan sesuai petunjuk dan hentikan bila timbul alergi.'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 5. DUA KOLOM: TERAPI ALAMI & POPULASI KHUSUS (MATCHING CLEAN CARDS) */}
          <div className="grid grid-cols-2 gap-2 text-[7.5px]">
            {/* Kolom Kiri: Terapi Alami */}
            <div className="bg-white border border-slate-300 p-1.5 rounded space-y-0.5">
              <div className="bg-emerald-50 text-emerald-900 font-bold text-[7.5px] px-1.5 py-0.5 rounded border border-emerald-200 flex items-center justify-between">
                <span>🌿 Terapi Alami &amp; Gaya Hidup (Non-Obat):</span>
                <span className="text-[6.5px] text-emerald-700 font-semibold">Alami Tanpa Efek Samping</span>
              </div>
              <ul className="space-y-0.5 text-slate-800 pt-0.5">
                {protocolToPrint.nonPharmacolTherapy.slice(0, 4).map((th, i) => (
                  <li key={i} className="flex items-start gap-1 leading-tight">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span>{th}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kolom Kanan: Peringatan Khusus & Larangan */}
            <div className="bg-white border border-slate-300 p-1.5 rounded space-y-0.5">
              <div className="bg-slate-100 text-slate-900 font-bold text-[7.5px] px-1.5 py-0.5 rounded border border-slate-200 flex items-center justify-between">
                <span>🛡️ Populasi Khusus &amp; Peringatan Keamanan:</span>
                <span className="text-[6.5px] text-slate-600 font-semibold">Keamanan Terverifikasi</span>
              </div>
              <div className="space-y-0.5 text-[7px] text-slate-800 pt-0.5">
                <p className="leading-tight">
                  <strong className="text-pink-700">Ibu Hamil/Menyusui:</strong> {protocolToPrint.specialPopulations.pregnancyWarning}
                </p>
                <p className="leading-tight">
                  <strong className="text-sky-700">Anak / Balita:</strong> {protocolToPrint.specialPopulations.pediatricWarning}
                </p>
                {protocolToPrint.specialPopulations.geriatricWarning && (
                  <p className="leading-tight">
                    <strong className="text-indigo-700">Lansia:</strong> {protocolToPrint.specialPopulations.geriatricWarning}
                  </p>
                )}
                <p className="leading-tight text-rose-800 bg-rose-50 p-0.5 rounded border border-rose-200">
                  <strong>Larangan:</strong> {protocolToPrint.contraindicatedForSelfMed.join('; ')}
                </p>
              </div>
            </div>
          </div>

          {/* 6. STRIP EDUKASI GEMA CERMAT & DAGUSIBU (CLEAN CRISP BAR) */}
          <div className="bg-slate-50 border border-slate-300 p-1 rounded text-[7px] text-slate-800 flex items-center justify-between gap-2">
            <span className="bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold text-[7px] px-1.5 py-0.2 rounded shrink-0">
              💡 GEMA CERMAT &amp; DAGUSIBU
            </span>
            <span className="leading-tight text-slate-700">
              <strong>DA</strong>patkan di Apotek Resmi • <strong>GU</strong>nakan Tepat Indikasi &amp; Dosis • <strong>SI</strong>mpan di Tempat Sejuk • <strong>BU</strong>ang Obat Rusak dengan Benar.
            </span>
          </div>

          {/* 7. KAKI LEMBAR & LEGALISASI APOTEKER PENANGGUNG JAWAB */}
          <div className="border-t border-slate-300 pt-1 flex items-end justify-between text-[7.5px] text-slate-600">
            <div className="space-y-0.5">
              <p className="font-bold text-slate-800 text-[8px]">Dokumen Resmi Pelayanan Informasi Obat (PIO) Swamedikasi</p>
              <p className="text-[6.5px] text-slate-500 max-w-sm leading-tight">
                Disusun berbasis Evidence-Based Medicine (EBM) dan regulasi Kementerian Kesehatan RI. Bila keluhan menetap &gt; {protocolToPrint.maxSelfMedDays} hari, segera konsultasikan ke dokter.
              </p>
              <p className="text-[6px] text-slate-400">Dicetak melalui FARMASI DRUGGIST DSS • ID: {protocolToPrint.id}</p>
            </div>

            <div className="text-center w-36 shrink-0 relative space-y-0.5">
              {clinicBranding?.enableDigitalStamp !== false && clinicBranding?.stampUrl && (
                <img 
                  src={clinicBranding.stampUrl} 
                  alt="Stempel Digital" 
                  className="w-11 h-11 object-contain absolute -top-3 right-3 opacity-80 pointer-events-none" 
                />
              )}
              <p className="font-medium text-[7px]">
                {new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
              <p className="font-bold text-slate-900 text-[7.5px]">Apoteker Penanggung Jawab</p>
              <div className="h-4 flex items-center justify-center italic text-slate-400 text-[6.5px]">
                ( Tanda Tangan &amp; Stempel Resmi )
              </div>
              <p className="font-bold underline text-slate-900 border-t border-slate-800 pt-0.5 text-[7.5px]">
                {clinicBranding?.pharmacistName || '( apt. Penanggung Jawab, S.Farm. )'}
              </p>
              <p className="text-[6.5px] text-slate-600 font-semibold">{clinicBranding?.pharmacistSipa || 'SIPA: 19940825/SIPA-31.71/2026/2088'}</p>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};
