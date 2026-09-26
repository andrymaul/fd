import React, { useState } from 'react';
import { 
  FileText, 
  Search, 
  BookOpen, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  Printer, 
  Building2, 
  Sliders, 
  Lock, 
  ThermometerSnowflake, 
  Pill, 
  Clock, 
  Download, 
  ExternalLink,
  ChevronRight,
  Sparkles,
  ClipboardList,
  Layers,
  Activity
} from 'lucide-react';
import { PHARMACY_SOP_LIST, PharmacySopItem } from '../data/pharmacySopData';
import { ClinicBrandingSettings } from '../types';
import { PaginationControls } from './PaginationControls';

interface PharmacySopManagerProps {
  clinicBranding: ClinicBrandingSettings;
}

export const PharmacySopManager: React.FC<PharmacySopManagerProps> = ({
  clinicBranding
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSop, setSelectedSop] = useState<PharmacySopItem>(PHARMACY_SOP_LIST[0]);

  const categories = [
    { id: 'all', label: 'Semua SOP', count: PHARMACY_SOP_LIST.length },
    { id: 'klinis', label: 'Pelayanan Klinis', count: PHARMACY_SOP_LIST.filter(s => s.category === 'klinis').length },
    { id: 'logistik', label: 'Logistik & Cold Chain', count: PHARMACY_SOP_LIST.filter(s => s.category === 'logistik').length },
    { id: 'khusus', label: 'Regulasi Khusus & High Alert', count: PHARMACY_SOP_LIST.filter(s => s.category === 'khusus').length },
    { id: 'safety', label: 'Keselamatan & Mutu', count: PHARMACY_SOP_LIST.filter(s => s.category === 'safety').length }
  ];

  const filteredSops = PHARMACY_SOP_LIST.filter((item) => {
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.docNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.purpose.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.categoryLabel.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  // SOP Pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(6);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  const totalItems = filteredSops.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const validCurrentPage = Math.min(currentPage, totalPages);

  const paginatedSops = React.useMemo(() => {
    const start = (validCurrentPage - 1) * itemsPerPage;
    return filteredSops.slice(start, start + itemsPerPage);
  }, [filteredSops, validCurrentPage, itemsPerPage]);

  const handlePrint = () => {
    window.print();
  };

  const getCategoryBadgeColor = (cat: string) => {
    switch (cat) {
      case 'klinis': return 'bg-teal-100 text-teal-800 border-teal-200 dark:bg-teal-900/40 dark:text-teal-300 dark:border-teal-800';
      case 'logistik': return 'bg-sky-100 text-sky-800 border-sky-200 dark:bg-sky-900/40 dark:text-sky-300 dark:border-sky-800';
      case 'khusus': return 'bg-rose-100 text-rose-800 border-rose-200 dark:bg-rose-900/40 dark:text-rose-300 dark:border-rose-800';
      case 'safety': return 'bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900/40 dark:text-amber-300 dark:border-amber-800';
      default: return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  return (
    <div className="space-y-6">
      
      {/* CLEAN CLINICAL COMMAND HEADER */}
      <div className="bg-white dark:bg-[#0c1427] border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-2xs print:hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-teal-50 dark:bg-teal-950/60 text-[#005f5a] dark:text-teal-300 border border-teal-200/80 dark:border-teal-800/60">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#005f5a] dark:text-teal-400" />
                Standar Akreditasi Faskes &amp; Mutu Kefarmasian
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                PMK 73/2016, 72/2016 &amp; CDOB BPOM
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/50 text-[#005f5a] dark:text-teal-300 flex items-center justify-center border border-teal-200/60 dark:border-teal-800/60 shrink-0">
                <ClipboardList className="w-5 h-5 text-[#005f5a] dark:text-teal-400" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold font-outfit text-slate-900 dark:text-white tracking-tight">
                  Standar Prosedur Operasional (SOP) Farmasi
                </h1>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Koleksi baku dokumen tata kelola mutu pelayanan klinis, peracikan, pengelolaan rantai dingin (cold chain), dan logistik.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Badges & Print Action */}
          <div className="flex items-center gap-3 flex-wrap lg:justify-end">
            <div className="flex items-center gap-2">
              <div className="px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 text-left">
                <div className="text-[10px] text-slate-400 font-medium">Total SOP</div>
                <div className="text-xs font-bold font-mono text-slate-800 dark:text-slate-200">
                  {PHARMACY_SOP_LIST.length} Prosedur
                </div>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 text-left">
                <div className="text-[10px] text-slate-400 font-medium">Pelayanan Klinis</div>
                <div className="text-xs font-bold font-mono text-slate-800 dark:text-slate-200">
                  {PHARMACY_SOP_LIST.filter(s => s.category === 'klinis').length} Prosedur
                </div>
              </div>
            </div>

            <button
              onClick={handlePrint}
              className="px-3.5 py-2 rounded-xl bg-teal-50 dark:bg-teal-950/50 text-[#005f5a] dark:text-teal-300 border border-teal-200 dark:border-teal-800 text-xs font-bold font-outfit flex items-center gap-1.5 hover:bg-teal-100 dark:hover:bg-teal-900/40 cursor-pointer transition shadow-2xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak Dokumen SOP</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: SOP Navigation & Directory */}
        <div className="lg:col-span-4 space-y-4 print:hidden">
          
          {/* Search Box */}
          <div className="bg-white dark:bg-[#0c1427] p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Cari judul SOP / nomor / kata kunci..."
                className="w-full pl-9 pr-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-bold font-outfit text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#005f5a]"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-xl text-[11px] font-bold font-outfit transition-all cursor-pointer flex items-center gap-1.5 ${
                    selectedCategory === cat.id
                      ? 'bg-[#005f5a] text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-teal-50 dark:hover:bg-teal-950/40'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    selectedCategory === cat.id ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* SOP List Cards */}
          <div className="space-y-3">
            <div className="space-y-2.5">
              {filteredSops.length === 0 ? (
                <div className="bg-white dark:bg-[#0c1427] p-6 rounded-2xl text-center border border-slate-200 dark:border-slate-800 text-xs text-slate-500">
                  <FileText className="w-8 h-8 mx-auto text-slate-300 mb-2" />
                  <p>Tidak ada dokumen SOP yang sesuai dengan pencarian.</p>
                </div>
              ) : (
                paginatedSops.map((sop) => {
                  const isSelected = selectedSop.id === sop.id;
                  return (
                    <div
                      key={sop.id}
                      onClick={() => setSelectedSop(sop)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer text-left space-y-2 ${
                        isSelected
                          ? 'bg-teal-50/70 dark:bg-teal-950/40 border-[#005f5a] shadow-xs ring-1 ring-[#005f5a]'
                          : 'bg-white dark:bg-[#0c1427] border-slate-200 dark:border-slate-800 hover:border-teal-300 hover:shadow-xs'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border ${getCategoryBadgeColor(sop.category)}`}>
                          {sop.categoryLabel}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 font-semibold">
                          Rev. {sop.revision}
                        </span>
                      </div>

                      <h3 className={`text-xs font-black leading-snug ${isSelected ? 'text-[#005f5a] dark:text-teal-200' : 'text-slate-900 dark:text-white'}`}>
                        {sop.title}
                      </h3>

                      <p className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                        {sop.purpose}
                      </p>

                      <div className="flex items-center justify-between pt-1 border-t border-slate-100 dark:border-slate-800 text-[10px] text-slate-400 font-medium">
                        <span className="font-mono">{sop.docNumber}</span>
                        <span className="flex items-center gap-1 text-[#005f5a] dark:text-teal-400 font-bold">
                          Buka SOP <ChevronRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Pagination Controls */}
            <PaginationControls
              currentPage={validCurrentPage}
              totalPages={totalPages}
              totalItems={totalItems}
              itemsOnCurrentPage={paginatedSops.length}
              onPageChange={(newPage) => setCurrentPage(newPage)}
              itemLabel="dokumen SOP"
              itemsPerPage={itemsPerPage}
              onItemsPerPageChange={(newSize) => {
                setItemsPerPage(newSize);
                setCurrentPage(1);
              }}
              pageSizeOptions={[4, 6, 8, 12]}
              colorTheme="emerald"
            />
          </div>
        </div>

        {/* Right Column: Complete Interactive SOP Document View */}
        <div className="lg:col-span-8 bg-white dark:bg-[#0c1427] rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-6">
          
          {/* Printable Official Letterhead (Kop Surat) */}
          <div className="border-b-2 border-slate-200 dark:border-slate-800 pb-4 text-center space-y-1">
            <div className="flex items-center justify-center gap-3">
              {clinicBranding.logoUrl ? (
                <img src={clinicBranding.logoUrl} alt="Logo" className="w-12 h-12 object-contain rounded-xl" />
              ) : (
                <div className="w-10 h-10 rounded-xl bg-[#005f5a] flex items-center justify-center text-white font-black text-lg">
                  {clinicBranding.clinicName.charAt(0) || 'F'}
                </div>
              )}
              <div className="text-left">
                <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight">
                  {clinicBranding.clinicName || 'INSTALASI FARMASI & APOTEK KLINIS'}
                </h2>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  {clinicBranding.tagline || 'Pelayanan Informasi Obat & Standar Mutu Akreditasi Kefarmasian'}
                </p>
              </div>
            </div>

            <p className="text-[10px] text-slate-400 dark:text-slate-400 pt-1">
              {clinicBranding.address || 'Jl. Kesehatan No. 10, Jakarta Pusat'} • Telp: {clinicBranding.phone || '(021) 555-0199'} • SIA/SIPA: {clinicBranding.licenseNumber || 'SIA-1988/DINKES/2026'}
            </p>
          </div>

          {/* SOP Header Document Control Box */}
          <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden text-xs">
            <div className="bg-slate-50 dark:bg-slate-850 p-3 text-center border-b border-slate-200 dark:border-slate-800">
              <h2 className="text-sm sm:text-base font-black text-slate-900 dark:text-teal-200 uppercase tracking-wide">
                {selectedSop.title}
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-slate-200 dark:divide-slate-800 bg-white dark:bg-[#0c1427] text-[11px]">
              <div className="p-2.5 space-y-0.5">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Nomor Dokumen:</p>
                <p className="font-mono font-bold text-slate-900 dark:text-white">{selectedSop.docNumber}</p>
              </div>
              <div className="p-2.5 space-y-0.5">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Tanggal Berlaku:</p>
                <p className="font-bold text-slate-900 dark:text-white">{selectedSop.effectiveDate}</p>
              </div>
              <div className="p-2.5 space-y-0.5">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Nomor Revisi:</p>
                <p className="font-bold text-slate-900 dark:text-white">{selectedSop.revision}</p>
              </div>
              <div className="p-2.5 space-y-0.5">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Penanggung Jawab:</p>
                <p className="font-bold text-[#005f5a] dark:text-teal-400">{clinicBranding.doctorName || 'Apoteker Penanggung Jawab'}</p>
              </div>
            </div>
          </div>

          {/* Section 1: Pengertian, Tujuan & Kebijakan */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="bg-slate-50 dark:bg-slate-850 p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
              <p className="font-black text-slate-900 dark:text-teal-300 flex items-center gap-1.5 text-xs">
                <BookOpen className="w-4 h-4 text-[#005f5a]" />
                <span>1. TUJUAN:</span>
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[11px]">
                {selectedSop.purpose}
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-850 p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
              <p className="font-black text-slate-900 dark:text-teal-300 flex items-center gap-1.5 text-xs">
                <ShieldCheck className="w-4 h-4 text-[#005f5a]" />
                <span>2. RUANG LINGKUP:</span>
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[11px]">
                {selectedSop.scope}
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-850 p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
              <p className="font-black text-slate-900 dark:text-teal-300 flex items-center gap-1.5 text-xs">
                <Lock className="w-4 h-4 text-[#005f5a]" />
                <span>3. KEBIJAKAN MUTU:</span>
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[11px]">
                {selectedSop.policy}
              </p>
            </div>
          </div>

          {/* Section 2: Dasar Hukum */}
          <div className="bg-teal-50/70 dark:bg-teal-950/30 p-4 rounded-xl border border-teal-200/80 dark:border-teal-800 text-xs space-y-1.5">
            <p className="font-black text-[#005f5a] dark:text-teal-200 uppercase tracking-wider text-[11px]">
              ⚖️ Dasar Hukum & Pedoman Regulator:
            </p>
            <ul className="list-disc list-inside space-y-1 text-teal-900 dark:text-teal-200 text-[11px]">
              {selectedSop.legalBasis.map((law, idx) => (
                <li key={idx} className="leading-snug">{law}</li>
              ))}
            </ul>
          </div>

          {/* Section 3: Prosedur Langkah-demi-Langkah */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
              <ClipboardList className="w-5 h-5 text-[#005f5a]" />
              <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">
                Langkah-Langkah Prosedur Kerja Baku
              </h3>
            </div>

            <div className="space-y-3">
              {selectedSop.procedureSteps.map((step) => (
                <div key={step.stepNumber} className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xs space-y-2">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#005f5a] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                      {step.stepNumber}
                    </span>
                    <div className="space-y-1 flex-1">
                      <h4 className="text-xs font-extrabold text-slate-900 dark:text-teal-200">
                        {step.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {step.description}
                      </p>

                      {step.keyPoints && step.keyPoints.length > 0 && (
                        <div className="bg-slate-50 dark:bg-slate-850 p-3 rounded-xl border border-slate-200 dark:border-slate-800 mt-2 space-y-1">
                          {step.keyPoints.map((point, pIdx) => (
                            <p key={pIdx} className="text-[11px] text-slate-700 dark:text-slate-300 flex items-start gap-2">
                              <span className="text-[#005f5a] font-bold">•</span>
                              <span className="leading-snug">{point}</span>
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Critical Quality Checklist & Formulir Terkait */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            
            {/* Checklist Mutu */}
            <div className="bg-emerald-50/70 dark:bg-emerald-950/30 p-4 rounded-xl border border-emerald-200 dark:border-emerald-800 space-y-2">
              <p className="font-extrabold text-emerald-950 dark:text-emerald-200 flex items-center gap-1.5 text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Titik Kendali Kritis (Quality Control Checklist):</span>
              </p>
              <div className="space-y-1.5">
                {selectedSop.criticalChecklist.map((chk, cIdx) => (
                  <div key={cIdx} className="flex items-start gap-2 text-[11px] text-emerald-900 dark:text-emerald-300">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span className="leading-snug">{chk}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Formulir Terkait */}
            <div className="bg-slate-50 dark:bg-slate-850 p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
              <p className="font-extrabold text-slate-900 dark:text-teal-300 flex items-center gap-1.5 text-xs">
                <FileText className="w-4 h-4 text-[#005f5a]" />
                <span>Formulir & Rekaman Terkait:</span>
              </p>
              <div className="space-y-1">
                {selectedSop.relatedForms.map((frm, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2 text-[11px] text-slate-700 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#005f5a]"></span>
                    <span>{frm}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 5: Signature & Validation Block */}
          <div className="pt-6 border-t-2 border-slate-200 dark:border-slate-800 grid grid-cols-2 text-center text-xs">
            <div className="space-y-14">
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-bold">Disiapkan Oleh (Tim Farmasi):</p>
              <div>
                <p className="font-bold text-slate-900 dark:text-white underline">Apoteker Penanggung Jawab</p>
                <p className="text-[10px] text-slate-400">SIPA. 19881024/SIPA_31.71/2026</p>
              </div>
            </div>

            <div className="space-y-14">
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-bold">Disahkan Oleh (Pimpinan Faskes):</p>
              <div>
                <p className="font-bold text-slate-900 dark:text-white underline">{clinicBranding.doctorName || 'Direktur / Kepala Klinik'}</p>
                <p className="text-[10px] text-slate-400">SIP. {clinicBranding.sipNumber || 'SIP.01.2026/DINKES'}</p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
