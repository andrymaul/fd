import React from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

export type PaginationColorTheme = 
  | 'teal' 
  | 'purple' 
  | 'amber' 
  | 'emerald' 
  | 'blue' 
  | 'indigo' 
  | 'rose' 
  | 'pink' 
  | 'cyan';

export interface PaginationControlsProps {
  currentPage: number;
  totalPages?: number;
  totalItems: number;
  itemsOnCurrentPage?: number;
  onPageChange: (newPage: number) => void;
  itemLabel?: string;
  itemsPerPage?: number;
  onItemsPerPageChange?: (newSize: number) => void;
  pageSizeOptions?: number[];
  colorTheme?: PaginationColorTheme;
  scrollToTopId?: string;
  scrollToId?: string;
  containerClassName?: string;
}

export const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage,
  totalPages,
  totalItems,
  itemsOnCurrentPage,
  onPageChange,
  itemLabel = 'data',
  itemsPerPage = 10,
  onItemsPerPageChange,
  pageSizeOptions,
  colorTheme = 'teal',
  scrollToTopId,
  scrollToId,
  containerClassName = ''
}) => {
  const effectiveTotalPages = totalPages ?? Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const effectiveItemsOnCurrentPage = itemsOnCurrentPage ?? Math.min(itemsPerPage, Math.max(0, totalItems - (currentPage - 1) * itemsPerPage));
  const targetScrollId = scrollToId || scrollToTopId;

  if (effectiveTotalPages <= 1 && totalItems <= itemsPerPage) {
    return null;
  }

  const validCurrentPage = Math.min(Math.max(1, currentPage), Math.max(1, effectiveTotalPages));

  const handlePageClick = (page: number) => {
    if (page < 1 || page > effectiveTotalPages || page === validCurrentPage) return;
    onPageChange(page);

    if (targetScrollId) {
      const el = document.getElementById(targetScrollId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Helper page numbers with ellipsis (...)
  const getPageNumbers = () => {
    const delta = 1;
    const range: (number | string)[] = [];
    for (let i = 1; i <= effectiveTotalPages; i++) {
      if (
        i === 1 ||
        i === effectiveTotalPages ||
        (i >= validCurrentPage - delta && i <= validCurrentPage + delta)
      ) {
        range.push(i);
      } else if (range[range.length - 1] !== '...') {
        range.push('...');
      }
    }
    return range;
  };

  // Color Theme styles for active page button & hover states
  const getThemeStyles = () => {
    switch (colorTheme) {
      case 'purple':
        return {
          activeBtn: 'bg-purple-600 text-white shadow-xs shadow-purple-600/30 scale-105 border-purple-600',
          hoverBtn: 'hover:text-purple-700 dark:hover:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-950/40',
          highlightText: 'text-purple-700 dark:text-purple-300',
          selectRing: 'focus:ring-purple-500'
        };
      case 'amber':
        return {
          activeBtn: 'bg-amber-600 text-white shadow-xs shadow-amber-600/30 scale-105 border-amber-600',
          hoverBtn: 'hover:text-amber-700 dark:hover:text-amber-300 hover:bg-amber-50 dark:hover:bg-amber-950/40',
          highlightText: 'text-amber-700 dark:text-amber-300',
          selectRing: 'focus:ring-amber-500'
        };
      case 'emerald':
        return {
          activeBtn: 'bg-emerald-600 text-white shadow-xs shadow-emerald-600/30 scale-105 border-emerald-600',
          hoverBtn: 'hover:text-emerald-700 dark:hover:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40',
          highlightText: 'text-emerald-700 dark:text-emerald-300',
          selectRing: 'focus:ring-emerald-500'
        };
      case 'rose':
        return {
          activeBtn: 'bg-rose-600 text-white shadow-xs shadow-rose-600/30 scale-105 border-rose-600',
          hoverBtn: 'hover:text-rose-700 dark:hover:text-rose-300 hover:bg-rose-50 dark:hover:bg-rose-950/40',
          highlightText: 'text-rose-700 dark:text-rose-300',
          selectRing: 'focus:ring-rose-500'
        };
      case 'pink':
        return {
          activeBtn: 'bg-pink-600 text-white shadow-xs shadow-pink-600/30 scale-105 border-pink-600',
          hoverBtn: 'hover:text-pink-700 dark:hover:text-pink-300 hover:bg-pink-50 dark:hover:bg-pink-950/40',
          highlightText: 'text-pink-700 dark:text-pink-300',
          selectRing: 'focus:ring-pink-500'
        };
      case 'indigo':
        return {
          activeBtn: 'bg-indigo-600 text-white shadow-xs shadow-indigo-600/30 scale-105 border-indigo-600',
          hoverBtn: 'hover:text-indigo-700 dark:hover:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/40',
          highlightText: 'text-indigo-700 dark:text-indigo-300',
          selectRing: 'focus:ring-indigo-500'
        };
      case 'blue':
        return {
          activeBtn: 'bg-blue-600 text-white shadow-xs shadow-blue-600/30 scale-105 border-blue-600',
          hoverBtn: 'hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-950/40',
          highlightText: 'text-blue-700 dark:text-blue-300',
          selectRing: 'focus:ring-blue-500'
        };
      case 'cyan':
        return {
          activeBtn: 'bg-cyan-600 text-white shadow-xs shadow-cyan-600/30 scale-105 border-cyan-600',
          hoverBtn: 'hover:text-cyan-700 dark:hover:text-cyan-300 hover:bg-cyan-50 dark:hover:bg-cyan-950/40',
          highlightText: 'text-cyan-700 dark:text-cyan-300',
          selectRing: 'focus:ring-cyan-500'
        };
      case 'teal':
      default:
        return {
          activeBtn: 'bg-[#0f766e] text-white shadow-xs shadow-teal-700/30 scale-105 border-[#0f766e]',
          hoverBtn: 'hover:text-teal-700 dark:hover:text-teal-300 hover:bg-teal-50 dark:hover:bg-[#0c2a30]',
          highlightText: 'text-teal-700 dark:text-teal-300',
          selectRing: 'focus:ring-teal-500'
        };
    }
  };

  const theme = getThemeStyles();

  return (
    <div
      className={`bg-white dark:bg-[#071d21] rounded-2xl border border-slate-200/90 dark:border-[#144951] p-4 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 font-sans ${containerClassName}`}
    >
      {/* Left Info: Counter & Optional Page Size Selector */}
      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 font-medium">
        <div>
          Halaman{' '}
          <span className="font-bold text-slate-900 dark:text-white">{validCurrentPage}</span> dari{' '}
          <span className="font-bold text-slate-900 dark:text-white">{effectiveTotalPages}</span>{' '}
          <span className="text-slate-400 dark:text-slate-500 font-normal">
            (Menampilkan <strong className="text-slate-800 dark:text-slate-200 font-bold">{effectiveItemsOnCurrentPage}</strong> dari{' '}
            <strong className="text-slate-800 dark:text-slate-200 font-bold">{totalItems.toLocaleString('id-ID')}</strong> {itemLabel})
          </span>
        </div>

        {pageSizeOptions && onItemsPerPageChange && itemsPerPage && (
          <div className="flex items-center gap-1.5 border-l border-slate-200 dark:border-slate-800 pl-3">
            <span className="text-[11px]">Tampilkan:</span>
            <select
              value={itemsPerPage}
              onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
              className={`bg-slate-50 dark:bg-[#0c2a30] border border-slate-200 dark:border-[#144951] rounded-lg px-2 py-1 text-xs font-bold text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-1 ${theme.selectRing} cursor-pointer`}
            >
              {pageSizeOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt} / hal
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Right: Navigation Buttons */}
      <div className="flex items-center gap-1 flex-wrap justify-center">
        {/* First Page Button */}
        <button
          type="button"
          onClick={() => handlePageClick(1)}
          disabled={validCurrentPage === 1}
          className={`p-2 rounded-xl text-slate-600 dark:text-slate-300 ${theme.hoverBtn} disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer border border-slate-200 dark:border-[#144951]`}
          title="Halaman Pertama"
        >
          <ChevronsLeft className="w-4 h-4" />
        </button>

        {/* Previous Page Button */}
        <button
          type="button"
          onClick={() => handlePageClick(validCurrentPage - 1)}
          disabled={validCurrentPage === 1}
          className={`px-3 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 ${theme.hoverBtn} disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer flex items-center gap-1 border border-slate-200 dark:border-[#144951]`}
          title="Halaman Sebelumnya"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Sebelumnya</span>
        </button>

        {/* Numbered Page Buttons with Ellipsis */}
        <div className="flex items-center gap-1 mx-1">
          {getPageNumbers().map((pageItem, idx) => {
            if (pageItem === '...') {
              return (
                <span
                  key={`ellipsis-${idx}`}
                  className="px-2 py-1 text-xs text-slate-400 font-bold select-none"
                >
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
                onClick={() => handlePageClick(pageNumber)}
                className={`min-w-[36px] h-9 px-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                  isActive
                    ? theme.activeBtn
                    : 'bg-white dark:bg-[#071d21] text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#0c2a30] border border-slate-200 dark:border-[#144951]'
                }`}
              >
                {pageNumber}
              </button>
            );
          })}
        </div>

        {/* Next Page Button */}
        <button
          type="button"
          onClick={() => handlePageClick(validCurrentPage + 1)}
          disabled={validCurrentPage === effectiveTotalPages}
          className={`px-3 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 ${theme.hoverBtn} disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer flex items-center gap-1 border border-slate-200 dark:border-[#144951]`}
          title="Halaman Berikutnya"
        >
          <span className="hidden sm:inline">Berikutnya</span>
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Last Page Button */}
        <button
          type="button"
          onClick={() => handlePageClick(effectiveTotalPages)}
          disabled={validCurrentPage === effectiveTotalPages}
          className={`p-2 rounded-xl text-slate-600 dark:text-slate-300 ${theme.hoverBtn} disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer border border-slate-200 dark:border-[#144951]`}
          title="Halaman Terakhir"
        >
          <ChevronsRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
