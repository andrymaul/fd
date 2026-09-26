import React, { useState } from 'react';
import { 
  Scale, 
  Search, 
  BookOpen, 
  ShieldAlert, 
  CheckCircle2, 
  AlertTriangle, 
  Printer, 
  Building2, 
  FileText, 
  Lock, 
  Pill, 
  ExternalLink,
  ChevronRight,
  Gavel,
  ShieldCheck,
  BookmarkCheck,
  Sparkles,
  Layers,
  Activity
} from 'lucide-react';
import { PHARMACY_REGULATIONS_DATA, RegulationItem } from '../data/pharmacyRegulationsData';
import { ClinicBrandingSettings } from '../types';
import { PaginationControls } from './PaginationControls';

interface PharmacyRegulationsManagerProps {
  clinicBranding: ClinicBrandingSettings;
}

export const PharmacyRegulationsManager: React.FC<PharmacyRegulationsManagerProps> = ({
  clinicBranding
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedReg, setSelectedReg] = useState<RegulationItem>(PHARMACY_REGULATIONS_DATA[0]);

  const categories = [
    { id: 'all', label: 'Semua Regulasi', count: PHARMACY_REGULATIONS_DATA.length },
    { id: 'uu', label: 'Undang-Undang (UU)', count: PHARMACY_REGULATIONS_DATA.filter(r => r.type === 'uu').length },
    { id: 'pp', label: 'Peraturan Pemerintah (PP)', count: PHARMACY_REGULATIONS_DATA.filter(r => r.type === 'pp').length },
    { id: 'permenkes', label: 'Permenkes & KMK Terkini', count: PHARMACY_REGULATIONS_DATA.filter(r => r.type === 'permenkes' || r.type === 'kemenkes').length },
    { id: 'dowa', label: 'Arsip DOWA (Historis)', count: PHARMACY_REGULATIONS_DATA.filter(r => r.type === 'dowa').length },
    { id: 'perbpom', label: 'Peraturan BPOM (OOT & CDOB)', count: PHARMACY_REGULATIONS_DATA.filter(r => r.type === 'perbpom').length }
  ];

  const filteredRegulations = PHARMACY_REGULATIONS_DATA.filter((item) => {
    const matchesType = selectedType === 'all' || 
      (selectedType === 'permenkes' ? (item.type === 'permenkes' || item.type === 'kemenkes') : item.type === selectedType);
    const matchesSearch = 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.regNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.typeLabel.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  // Regulations Pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(6);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedType]);

  const totalItems = filteredRegulations.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const validCurrentPage = Math.min(currentPage, totalPages);

  const paginatedRegulations = React.useMemo(() => {
    const start = (validCurrentPage - 1) * itemsPerPage;
    return filteredRegulations.slice(start, start + itemsPerPage);
  }, [filteredRegulations, validCurrentPage, itemsPerPage]);

  const handlePrint = () => {
    window.print();
  };

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case 'uu': return 'bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/40 dark:text-purple-300 dark:border-purple-800';
      case 'pp': return 'bg-indigo-100 text-indigo-800 border-indigo-200 dark:bg-indigo-900/40 dark:text-indigo-300 dark:border-indigo-800';
      case 'permenkes': return 'bg-teal-100 text-teal-800 border-teal-200 dark:bg-teal-900/40 dark:text-teal-300 dark:border-teal-800';
      case 'kemenkes': return 'bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900/40 dark:text-amber-300 dark:border-amber-800';
      case 'dowa': return 'bg-slate-100 text-slate-700 border-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700';
      case 'perbpom': return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/40 dark:text-blue-300 dark:border-blue-800';
      default: return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  const renderStatusBadge = (status: string) => {
    if (status.includes('Berlaku')) {
      return (
        <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-200/50">
          ✅ {status}
        </span>
      );
    }
    if (status.includes('Historis') || status.includes('Ditransisikan')) {
      return (
        <span className="text-[10px] font-bold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-md border border-amber-200/50">
          📜 {status}
        </span>
      );
    }
    return (
      <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded-md border border-blue-200/50">
        ℹ️ {status}
      </span>
    );
  };

  return (
    <div className="space-y-6">
      
      {/* CLEAN CLINICAL COMMAND HEADER */}
      <div className="bg-white dark:bg-[#0c1427] border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-2xs print:hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-teal-50 dark:bg-teal-950/60 text-[#005f5a] dark:text-teal-300 border border-teal-200/80 dark:border-teal-800/60">
                <ShieldCheck className="w-3.5 h-3.5 text-[#005f5a] dark:text-teal-400" />
                JDIH Kemenkes RI, BPOM &amp; Perundang-undangan RI
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                UU No. 17/2023, PP 28/2024 &amp; Standar Pelayanan
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/50 text-[#005f5a] dark:text-teal-300 flex items-center justify-center border border-teal-200/60 dark:border-teal-800/60 shrink-0">
                <Scale className="w-5 h-5 text-[#005f5a] dark:text-teal-400" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold font-outfit text-slate-900 dark:text-white tracking-tight">
                  Regulasi &amp; Kebijakan Farmasi Indonesia
                </h1>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Kompilasi peraturan hukum kefarmasian, perizinan praktek apoteker, standar pelayanan di apotek/RS, dan arsip DOWA.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Badges & Print Action */}
          <div className="flex items-center gap-3 flex-wrap lg:justify-end">
            <div className="flex items-center gap-2">
              <div className="px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 text-left">
                <div className="text-[10px] text-slate-400 font-medium">Total Regulasi</div>
                <div className="text-xs font-bold font-mono text-slate-800 dark:text-slate-200">
                  {PHARMACY_REGULATIONS_DATA.length} Produk Hukum
                </div>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 text-left">
                <div className="text-[10px] text-slate-400 font-medium">Permenkes &amp; KMK</div>
                <div className="text-xs font-bold font-mono text-slate-800 dark:text-slate-200">
                  {PHARMACY_REGULATIONS_DATA.filter(r => r.type === 'permenkes' || r.type === 'kemenkes').length} Aturan
                </div>
              </div>
            </div>

            <button
              onClick={handlePrint}
              className="px-3.5 py-2 rounded-xl bg-teal-50 dark:bg-teal-950/50 text-[#005f5a] dark:text-teal-300 border border-teal-200 dark:border-teal-800 text-xs font-bold font-outfit flex items-center gap-1.5 hover:bg-teal-100 dark:hover:bg-teal-900/40 cursor-pointer transition shadow-2xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak Intisari Regulasi</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Regulations Directory */}
        <div className="lg:col-span-4 space-y-4 print:hidden">
          
          {/* Search Box */}
          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Cari regulasi / nomor / kata kunci..."
                className="w-full pl-9 pr-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-bold font-outfit text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#005f5a]"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedType(cat.id)}
                  className={`px-3 py-1.5 rounded-xl text-[11px] font-bold font-outfit transition-all cursor-pointer flex items-center gap-1.5 ${
                    selectedType === cat.id
                      ? 'bg-[#005f5a] text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-teal-50 dark:hover:bg-teal-950/40'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    selectedType === cat.id ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Regulations List */}
          <div className="space-y-3">
            <div className="space-y-2.5">
              {filteredRegulations.length === 0 ? (
                <div className="bg-white dark:bg-[#0c1427] p-6 rounded-2xl text-center border border-slate-200 dark:border-slate-800 text-xs text-slate-500">
                  <Scale className="w-8 h-8 mx-auto text-slate-300 mb-2" />
                  <p>Tidak ada regulasi yang sesuai dengan pencarian.</p>
                </div>
              ) : (
                paginatedRegulations.map((reg) => {
                  const isSelected = selectedReg.id === reg.id;
                  return (
                    <div
                      key={reg.id}
                      onClick={() => setSelectedReg(reg)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer text-left space-y-2 ${
                        isSelected
                          ? 'bg-teal-50/70 dark:bg-teal-950/40 border-[#005f5a] shadow-xs ring-1 ring-[#005f5a]'
                          : 'bg-white dark:bg-[#0c1427] border-slate-200 dark:border-slate-800 hover:border-teal-300 hover:shadow-xs'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border ${getTypeBadgeColor(reg.type)}`}>
                          {reg.typeLabel}
                        </span>
                        {renderStatusBadge(reg.status)}
                      </div>

                      <h3 className={`text-xs font-black leading-snug ${isSelected ? 'text-[#005f5a] dark:text-teal-200' : 'text-slate-900 dark:text-white'}`}>
                        {reg.title}
                      </h3>

                      <p className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                        {reg.summary}
                      </p>

                      <div className="flex items-center justify-between pt-1 border-t border-slate-100 dark:border-slate-800 text-[10px] text-slate-400 font-medium">
                        <span className="font-mono font-bold text-slate-600 dark:text-slate-300">{reg.regNumber}</span>
                        <span className="flex items-center gap-1 text-[#005f5a] dark:text-teal-400 font-bold">
                          Buka Detail <ChevronRight className="w-3 h-3" />
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
              itemsOnCurrentPage={paginatedRegulations.length}
              onPageChange={(newPage) => setCurrentPage(newPage)}
              itemLabel="dokumen regulasi"
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

        {/* Right Column: Complete Interactive Regulation Document View */}
        <div className="lg:col-span-8 bg-white dark:bg-[#0c1427] rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-6">
          
          {/* Header Info Box */}
          <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden text-xs">
            <div className="bg-slate-50 dark:bg-slate-850 p-4 text-center border-b border-slate-200 dark:border-slate-800 space-y-1">
              <span className={`text-[10px] font-extrabold px-3 py-0.5 rounded-full border ${getTypeBadgeColor(selectedReg.type)}`}>
                {selectedReg.typeLabel} • TAHUN {selectedReg.year}
              </span>
              <h2 className="text-sm sm:text-base font-black text-slate-900 dark:text-teal-200 uppercase tracking-wide pt-1">
                {selectedReg.title}
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 divide-x divide-y sm:divide-y-0 divide-slate-200 dark:divide-slate-800 bg-white dark:bg-[#0c1427] text-[11px]">
              <div className="p-3 space-y-0.5">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Nomor Regulasi:</p>
                <p className="font-mono font-bold text-slate-900 dark:text-white">{selectedReg.regNumber}</p>
              </div>
              <div className="p-3 space-y-0.5">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Instansi Penerbit:</p>
                <p className="font-bold text-slate-900 dark:text-white">{selectedReg.issuingAuthority}</p>
              </div>
              <div className="p-3 space-y-1">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Status Keberlakuan:</p>
                <div>{renderStatusBadge(selectedReg.status)}</div>
              </div>
            </div>
          </div>

          {/* Section 1: Ringkasan Eksekutif & Ruang Lingkup */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="bg-slate-50 dark:bg-slate-850 p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
              <p className="font-black text-slate-900 dark:text-teal-300 flex items-center gap-1.5 text-xs">
                <BookOpen className="w-4 h-4 text-[#005f5a]" />
                <span>Ringkasan Eksekutif Regulasi:</span>
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[11px]">
                {selectedReg.summary}
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-850 p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
              <p className="font-black text-slate-900 dark:text-teal-300 flex items-center gap-1.5 text-xs">
                <ShieldCheck className="w-4 h-4 text-[#005f5a]" />
                <span>Ruang Lingkup & Subjek Hukum:</span>
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[11px]">
                {selectedReg.scope}
              </p>
            </div>
          </div>

          {/* Section 2: Intisari Pasal-Pasal Kritis & Implikasi Klinis */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
              <Gavel className="w-5 h-5 text-[#005f5a]" />
              <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">
                Intisari Pasal-Pasal Kunci & Implikasi Klinis Apoteker
              </h3>
            </div>

            <div className="space-y-3">
              {selectedReg.keyArticles.map((art, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xs space-y-2">
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-1.5">
                    <span className="font-mono text-xs font-black text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/60 px-2.5 py-0.5 rounded-md">
                      {art.articleNumber}
                    </span>
                    <span className="text-xs font-extrabold text-slate-800 dark:text-white">
                      {art.topic}
                    </span>
                  </div>

                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {art.content}
                  </p>

                  <div className="bg-amber-50/70 dark:bg-amber-950/30 p-2.5 rounded-xl border border-amber-200 dark:border-amber-800 text-[11px] text-amber-900 dark:text-amber-300 flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <p className="leading-snug">
                      <strong>Implikasi Praktik Farmasi:</strong> {art.clinicalImplication}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Lampiran Daftar Obat Regulasi (Jika Ada) */}
          {selectedReg.drugListsOrSchedules && selectedReg.drugListsOrSchedules.length > 0 && (
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
                <Pill className="w-5 h-5 text-[#005f5a]" />
                <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">
                  Lampiran Daftar Golongan & Batas Penyerahan Obat
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                {selectedReg.drugListsOrSchedules.map((schedule, sIdx) => (
                  <div key={sIdx} className="bg-slate-50 dark:bg-slate-850 p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                    <p className="font-extrabold text-[#005f5a] dark:text-teal-200 text-xs">
                      {schedule.category}
                    </p>

                    <div className="space-y-1">
                      {schedule.items.map((item, iIdx) => (
                        <div key={iIdx} className="flex items-center gap-1.5 text-[11px] text-slate-700 dark:text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#005f5a] shrink-0"></span>
                          <span className="font-medium">{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-slate-200 dark:border-slate-700 text-[10px] text-slate-500 dark:text-slate-400">
                      <strong>Aturan Khusus:</strong> {schedule.rules}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 4: Sanksi Hukum & Catatan Kritis */}
          <div className="bg-rose-50/70 dark:bg-rose-950/30 p-4 rounded-xl border border-rose-200 dark:border-rose-800 text-xs space-y-2">
            <p className="font-extrabold text-rose-950 dark:text-rose-200 flex items-center gap-1.5 text-xs">
              <ShieldAlert className="w-4 h-4 text-rose-600" />
              <span>Sanksi Administratif & Ancaman Pidana Pelanggaran:</span>
            </p>
            <ul className="list-disc list-inside space-y-1 text-rose-900 dark:text-rose-300 text-[11px]">
              {selectedReg.sanctionsOrPenalties.map((snc, sncIdx) => (
                <li key={sncIdx} className="leading-snug">{snc}</li>
              ))}
            </ul>
          </div>

          <div className="p-3.5 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
            <strong>Catatan Yuridis:</strong> {selectedReg.notes}
          </div>

        </div>

      </div>

    </div>
  );
};
