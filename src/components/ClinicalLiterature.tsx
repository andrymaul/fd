import React, { useState, useMemo, useEffect } from 'react';
import { 
  BookMarked, 
  Search, 
  ExternalLink, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Copy, 
  Check, 
  FileText, 
  Layers, 
  Award, 
  Send, 
  HeartHandshake,
  TableProperties,
  Stethoscope,
  Info,
  BookOpen,
  Activity
} from 'lucide-react';
import { 
  CLINICAL_LITERATURE_DATABASE, 
  LITERATURE_CATEGORIES, 
  FEATURE_EVIDENCE_MAPPING,
  LiteratureSource 
} from '../data/clinicalLiteratureData';
import { PaginationControls } from './PaginationControls';

interface ClinicalLiteratureProps {
  onSelectTab?: (tabId: string) => void;
}

export const ClinicalLiterature: React.FC<ClinicalLiteratureProps> = ({ onSelectTab }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [copiedCitationId, setCopiedCitationId] = useState<string | null>(null);
  const [activeView, setActiveView] = useState<'cards' | 'matrix'>('cards');
  
  // Feedback Modal State
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [feedbackSuccess, setFeedbackSuccess] = useState(false);
  const [feedbackData, setFeedbackData] = useState({
    name: '',
    profession: 'Apoteker',
    sourceName: '',
    proposedUpdate: '',
    referenceLink: ''
  });

  const filteredSources = useMemo(() => {
    return CLINICAL_LITERATURE_DATABASE.filter(item => {
      const matchCategory = selectedCategory === 'all' || item.category === selectedCategory;
      if (!matchCategory) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        item.title.toLowerCase().includes(q) ||
        item.institution.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        (item.documentCode && item.documentCode.toLowerCase().includes(q)) ||
        item.keyTopics.some(t => t.toLowerCase().includes(q)) ||
        item.appliedInFeatures.some(f => f.featureName.toLowerCase().includes(q) || f.description.toLowerCase().includes(q))
      );
    });
  }, [searchQuery, selectedCategory]);

  // Literature Pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(6);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  const totalItems = filteredSources.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const validCurrentPage = Math.min(currentPage, totalPages);

  const paginatedSources = useMemo(() => {
    const start = (validCurrentPage - 1) * itemsPerPage;
    return filteredSources.slice(start, start + itemsPerPage);
  }, [filteredSources, validCurrentPage, itemsPerPage]);

  const handleCopyCitation = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCitationId(id);
    setTimeout(() => {
      setCopiedCitationId(null);
    }, 2500);
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedbackSuccess(true);
    setTimeout(() => {
      setFeedbackSuccess(false);
      setShowFeedbackModal(false);
      setFeedbackData({
        name: '',
        profession: 'Apoteker',
        sourceName: '',
        proposedUpdate: '',
        referenceLink: ''
      });
    }, 2000);
  };

  return (
    <div className="space-y-8 pb-16">
      {/* CLEAN CLINICAL COMMAND HEADER */}
      <div className="bg-white dark:bg-[#0c1427] border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-2xs print:hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-teal-50 dark:bg-teal-950/60 text-[#005f5a] dark:text-teal-300 border border-teal-200/80 dark:border-teal-800/60">
                <ShieldCheck className="w-3.5 h-3.5 text-[#005f5a] dark:text-teal-400" />
                Evidence-Based Medicine (EBM) &amp; Pedoman Resmi
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                WHO, Kemenkes RI, FDA, Sanford &amp; Micromedex
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/50 text-[#005f5a] dark:text-teal-300 flex items-center justify-center border border-teal-200/60 dark:border-teal-800/60 shrink-0">
                <BookMarked className="w-5 h-5 text-[#005f5a] dark:text-teal-400" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold font-outfit text-slate-900 dark:text-white tracking-tight">
                  Literatur &amp; Basis Ilmiah Farmasi
                </h1>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Rujukan ilmiah, pedoman klinis PNPK, konsensus IDAI/PERKI/PAPDI, dan standar pedoman akreditasi.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Badges & Feedback Action */}
          <div className="flex items-center gap-3 flex-wrap lg:justify-end">
            <div className="flex items-center gap-2">
              <div className="px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 text-left">
                <div className="text-[10px] text-slate-400 font-medium">Total Literatur</div>
                <div className="text-xs font-bold font-mono text-slate-800 dark:text-slate-200">
                  {CLINICAL_LITERATURE_DATABASE.length} Dokumen
                </div>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 text-left">
                <div className="text-[10px] text-slate-400 font-medium">Panduan Nasional</div>
                <div className="text-xs font-bold font-mono text-slate-800 dark:text-slate-200">
                  {CLINICAL_LITERATURE_DATABASE.filter(i => i.category === 'guidelines').length} PNPK/KMK
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowFeedbackModal(true)}
              className="px-3.5 py-2 rounded-xl bg-teal-50 dark:bg-teal-950/50 text-[#005f5a] dark:text-teal-300 border border-teal-200 dark:border-teal-800 text-xs font-bold font-outfit flex items-center gap-1.5 hover:bg-teal-100 dark:hover:bg-teal-900/40 cursor-pointer transition shadow-2xs"
            >
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Usulkan Pembaruan Referensi</span>
            </button>
          </div>
        </div>
      </div>

      {/* SUBTAB NAVIGATION */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        <button
          onClick={() => setActiveView('cards')}
          className={`rounded-xl px-4 py-2 text-xs font-bold font-outfit whitespace-nowrap cursor-pointer transition-all flex items-center gap-2 shrink-0 ${
            activeView === 'cards'
              ? 'bg-[#005f5a] text-white shadow-xs'
              : 'bg-white dark:bg-[#0c1427] text-slate-600 dark:text-slate-300 hover:bg-teal-50 dark:hover:bg-teal-950/40 border border-slate-200 dark:border-slate-800'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Katalog Literatur Primer &amp; EBM</span>
          <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
            activeView === 'cards'
              ? 'bg-white/20 text-white'
              : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
          }`}>
            {CLINICAL_LITERATURE_DATABASE.length}
          </span>
        </button>

        <button
          onClick={() => setActiveView('matrix')}
          className={`rounded-xl px-4 py-2 text-xs font-bold font-outfit whitespace-nowrap cursor-pointer transition-all flex items-center gap-2 shrink-0 ${
            activeView === 'matrix'
              ? 'bg-[#005f5a] text-white shadow-xs'
              : 'bg-white dark:bg-[#0c1427] text-slate-600 dark:text-slate-300 hover:bg-teal-50 dark:hover:bg-teal-950/40 border border-slate-200 dark:border-slate-800'
          }`}
        >
          <TableProperties className="w-4 h-4" />
          <span>Matriks Fitur &amp; Analisis Komparasi</span>
        </button>
      </div>

      {/* SEARCH BAR & FILTER - TEAL CYAN SUITE */}
      <div className="space-y-3">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari literatur, institusi (PERKI, Kemenkes, ASHP, IDAI), obat, atau topik penyakit..."
            className="w-full pl-11 pr-4 py-3 bg-white dark:bg-[#061e2b] border border-teal-200/80 dark:border-teal-500/25 rounded-2xl text-sm font-bold font-outfit text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-xs transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold font-outfit text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg cursor-pointer"
            >
              Reset
            </button>
          )}
        </div>

        {/* Quick Tag Pills */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
          <span className="font-bold font-outfit text-slate-700 dark:text-slate-300">Pencarian Cepat:</span>
          {['PERKI', 'PERKENI', 'ADA 2024', 'IDAI', 'ASHP Trissel', 'ASPEN', 'DDInter', 'Martindale', 'Briggs', 'FORNAS', 'KDIGO', 'BPOM', 'POGI', 'Puyer'].map((tag) => (
            <button
              key={tag}
              onClick={() => {
                setSearchQuery(tag);
                setSelectedCategory('all');
              }}
              className={`px-2.5 py-0.5 rounded-lg border text-[11px] font-bold font-outfit transition-all cursor-pointer ${
                searchQuery.toLowerCase() === tag.toLowerCase()
                  ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white border-teal-500 shadow-2xs'
                  : 'bg-white dark:bg-[#061e2b] text-slate-600 dark:text-slate-300 border-slate-200 dark:border-teal-900/30 hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* CATEGORY TABS (HANYA MUNCUL DI VIEW CARDS) */}
      {activeView === 'cards' && (
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-teal-100 dark:border-teal-950/40">
          {LITERATURE_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`rounded-2xl px-3.5 py-2 text-xs font-bold font-outfit whitespace-nowrap transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-md shadow-teal-950/40 border border-teal-400/30'
                  : 'bg-white dark:bg-[#061e2b] text-slate-600 dark:text-slate-300 hover:bg-teal-50/60 dark:hover:bg-teal-950/30 border border-slate-200 dark:border-teal-900/30 shadow-2xs'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-black ${
                selectedCategory === cat.id
                  ? 'bg-white/20 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* VIEW: CARDS */}
      {activeView === 'cards' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {paginatedSources.map((source: LiteratureSource) => (
            <div 
              key={source.id}
              className="bg-white dark:bg-[#0e1320] rounded-3xl border border-slate-200/90 dark:border-slate-800/90 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header Card */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        {source.categoryLabel}
                      </span>
                      <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md ${source.badgeColor}`}>
                        {source.evidenceGrade}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold font-outfit text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors leading-snug">
                      {source.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                      Penerbit: <strong className="text-slate-700 dark:text-slate-200">{source.institution}</strong>
                    </p>
                  </div>
                  
                  <div className="shrink-0 text-right">
                    <span className="inline-block text-[11px] font-semibold text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/50 px-2 py-1 rounded-lg border border-teal-200 dark:border-teal-900/60">
                      Rilis: {source.releaseYear}
                    </span>
                  </div>
                </div>

                {/* Evidence Level & Document Code */}
                <div className="flex flex-wrap items-center gap-2 text-xs py-2 px-3 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-100 dark:border-slate-800/60">
                  <div className="flex items-center gap-1 text-slate-600 dark:text-slate-300 font-medium">
                    <Award className="w-3.5 h-3.5 text-amber-500" />
                    <span>{source.evidenceLevel}</span>
                  </div>
                  {source.documentCode && (
                    <>
                      <span className="text-slate-300 dark:text-slate-700">•</span>
                      <div className="text-slate-500 dark:text-slate-400 font-mono text-[11px]">
                        {source.documentCode}
                      </div>
                    </>
                  )}
                </div>

                {/* Summary */}
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {source.summary}
                </p>

                {/* Key Topics Badges */}
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1.5">
                    Fokus & Parameter Utama:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {source.keyTopics.map((topic, i) => (
                      <span
                        key={i}
                        className="text-[11px] bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-lg border border-slate-200/60 dark:border-slate-700/60"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Feature Integration Box */}
                <div className="p-3.5 bg-teal-50/60 dark:bg-teal-950/20 border border-teal-100 dark:border-teal-900/40 rounded-2xl space-y-2">
                  <div className="text-[11px] font-extrabold text-teal-800 dark:text-teal-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                    <span>Diterapkan pada Fitur FarmasiDruggist:</span>
                  </div>
                  <div className="space-y-1.5">
                    {source.appliedInFeatures.map((feat, idx) => (
                      <div key={idx} className="flex items-center justify-between gap-2 text-xs">
                        <div className="text-slate-700 dark:text-slate-300">
                          <strong className="font-semibold text-slate-900 dark:text-white">{feat.featureName}:</strong> {feat.description}
                        </div>
                        {onSelectTab && (
                          <button
                            onClick={() => onSelectTab(feat.tabId)}
                            className="shrink-0 text-[11px] font-bold text-teal-700 dark:text-teal-300 hover:text-teal-800 dark:hover:text-white bg-white dark:bg-teal-900/40 px-2.5 py-1 rounded-lg border border-teal-200 dark:border-teal-800/60 flex items-center gap-1 transition-all cursor-pointer hover:scale-105"
                          >
                            <span>Buka</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Formal Citation Box */}
                <div className="p-2.5 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-xl">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase text-slate-400 dark:text-slate-500 font-mono">
                      Sitasi Resmi (Vancouver Format):
                    </span>
                    <button
                      onClick={() => handleCopyCitation(source.id, source.citation)}
                      className="text-[11px] font-semibold text-slate-500 hover:text-teal-600 dark:hover:text-teal-400 flex items-center gap-1 cursor-pointer"
                      title="Salin Sitasi Resmi"
                    >
                      {copiedCitationId === source.id ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-500" />
                          <span className="text-emerald-600 dark:text-emerald-400">Tersalin!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Salin Sitasi</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-[11px] font-mono text-slate-600 dark:text-slate-400 italic leading-snug">
                    "{source.citation}"
                  </p>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                <div className="text-[11px] text-slate-400">
                  Update Terakhir: <strong className="text-slate-600 dark:text-slate-300">{source.lastUpdated}</strong>
                </div>
                {source.officialUrl && (
                  <a
                    href={source.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 hover:underline"
                  >
                    <span>{source.officialUrlLabel || 'Akses Dokumen Resmi'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
          </div>

          {/* Pagination Controls */}
          <PaginationControls
            currentPage={validCurrentPage}
            totalPages={totalPages}
            totalItems={totalItems}
            itemsOnCurrentPage={paginatedSources.length}
            onPageChange={(newPage) => setCurrentPage(newPage)}
            itemLabel="sumber ilmiah"
            itemsPerPage={itemsPerPage}
            onItemsPerPageChange={(newSize) => {
              setItemsPerPage(newSize);
              setCurrentPage(1);
            }}
            pageSizeOptions={[4, 6, 8, 12]}
            colorTheme="teal"
          />
        </div>
      )}

      {/* VIEW: MATRIX TABLE */}
      {activeView === 'matrix' && (
        <div className="bg-white dark:bg-[#0e1320] rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm overflow-hidden space-y-4">
          <div>
            <h3 className="text-lg font-bold font-outfit text-slate-900 dark:text-white">
              Matriks Pemetaan Fitur & Sumber Data Ilmiah
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Panduan transparansi pemanfaatan database medis untuk setiap modul klinis di FarmasiDruggist.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                  <th className="py-3.5 px-4 font-bold text-slate-700 dark:text-slate-300">Fitur / Modul Aplikasi</th>
                  <th className="py-3.5 px-4 font-bold text-slate-700 dark:text-slate-300">Sumber Primer & Penerbit</th>
                  <th className="py-3.5 px-4 font-bold text-slate-700 dark:text-slate-300">Standar & Parameter Klinis</th>
                  <th className="py-3.5 px-4 font-bold text-slate-700 dark:text-slate-300">Tingkat Evidens</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {FEATURE_EVIDENCE_MAPPING.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 dark:hover:bg-slate-900/30 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-slate-900 dark:text-white">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-teal-500" />
                        <span>{row.feature}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-slate-700 dark:text-slate-300">
                      {row.primarySource}
                    </td>
                    <td className="py-3.5 px-4 text-slate-600 dark:text-slate-400">
                      {row.standards}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-900/60">
                        {row.evidenceLevel}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* EDITORIAL POLICY & DISCLAIMER */}
      <div className="bg-slate-50 dark:bg-[#0e1320] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-teal-100 dark:bg-teal-950/60 text-teal-700 dark:text-teal-400">
            <Stethoscope className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold font-outfit text-slate-900 dark:text-white">
              Kebijakan Tata Kelola Data & Disclaimer Medis
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Prinsip integritas kurasi ilmiah FarmasiDruggist untuk apoteker dan tenaga medis.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-2">
          <div className="p-4 bg-white dark:bg-[#0b0f19] rounded-2xl border border-slate-200/80 dark:border-slate-800/80 space-y-2">
            <strong className="text-slate-900 dark:text-white flex items-center gap-1.5 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              1. Prinsip Kurasi Ilmiah Independen
            </strong>
            <p>
              Data farmakoterapi tidak dihasilkan melalui inferensi acak, melainkan diekstraksi secara presisi dari literatur baku, pedoman PNPK Kemenkes RI, dan jurnal bereputasi tinggi. Database diperbarui berkala setiap ada adendum/revisi pedoman organisasi profesi.
            </p>
          </div>

          <div className="p-4 bg-white dark:bg-[#0b0f19] rounded-2xl border border-slate-200/80 dark:border-slate-800/80 space-y-2">
            <strong className="text-slate-900 dark:text-white flex items-center gap-1.5 font-semibold">
              <Info className="w-4 h-4 text-amber-500" />
              2. Pendukung Keputusan Klinis (CDSS)
            </strong>
            <p>
              Sistem ini dirancang sebagai alat bantu komputasi dan penapisan cepat (*Clinical Decision Support*). Pertimbangan profesional apoteker, dokter spesialis, kondisi klinis individual pasien, serta hasil laboratorium tetap memegang peranan utama dalam keputusan peresepan akhir.
            </p>
          </div>
        </div>
      </div>

      {/* MODAL USULAN PEMBARUAN PEDOMAN / FEEDBACK */}
      {showFeedbackModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="bg-white dark:bg-[#0e1320] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold font-outfit text-slate-900 dark:text-white">
                  Usulkan Pembaruan / Koreksi Literatur
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Menemukan pedoman atau regulasi baru yang belum tercantum? Bantu kami memperbarui database.
                </p>
              </div>
              <button
                onClick={() => setShowFeedbackModal(false)}
                className="p-1 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                ✕
              </button>
            </div>

            {feedbackSuccess ? (
              <div className="p-6 text-center space-y-2 bg-emerald-50 dark:bg-emerald-950/30 rounded-2xl border border-emerald-200 dark:border-emerald-800/60">
                <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">Terima Kasih atas Masukan Anda!</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Usulan pembaruan telah dicatat dan akan ditinjau oleh tim kurasi klinis kami.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFeedbackSubmit} className="space-y-3 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Nama & Profesi
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      required
                      placeholder="Nama Lengkap"
                      value={feedbackData.name}
                      onChange={(e) => setFeedbackData({ ...feedbackData, name: e.target.value })}
                      className="px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800 dark:text-slate-100"
                    />
                    <select
                      value={feedbackData.profession}
                      onChange={(e) => setFeedbackData({ ...feedbackData, profession: e.target.value })}
                      className="px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800 dark:text-slate-100"
                    >
                      <option value="Apoteker">Apoteker (apt.)</option>
                      <option value="Dokter Spesialis">Dokter Spesialis (Sp.)</option>
                      <option value="Dokter Umum">Dokter Umum (dr.)</option>
                      <option value="TTK / Asisten Apoteker">Tenaga Vokasi / TTK</option>
                      <option value="Mahasiswa Farmasi">Mahasiswa Farmasi</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Nama Pedoman / Regulasi yang Diusulkan
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Konsensus PERKI Sindrom Koroner Akut 2024"
                    value={feedbackData.sourceName}
                    onChange={(e) => setFeedbackData({ ...feedbackData, sourceName: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800 dark:text-slate-100"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Rincian Pembaruan / Catatan Koreksi
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Jelaskan perubahan dosis, algoritma terapi, atau interaksi obat yang perlu diperbarui..."
                    value={feedbackData.proposedUpdate}
                    onChange={(e) => setFeedbackData({ ...feedbackData, proposedUpdate: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800 dark:text-slate-100 resize-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Tautan Dokumen / Jurnal Resmi (Opsional)
                  </label>
                  <input
                    type="url"
                    placeholder="https://kemkes.go.id/... atau https://inaheart.org/..."
                    value={feedbackData.referenceLink}
                    onChange={(e) => setFeedbackData({ ...feedbackData, referenceLink: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800 dark:text-slate-100"
                  />
                </div>

                <div className="pt-3 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowFeedbackModal(false)}
                    className="px-4 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold flex items-center gap-1.5 shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Kirim Usulan</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
