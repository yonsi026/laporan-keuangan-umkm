import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PageId } from '../types';

interface PagePaginationProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  prevPage?: { id: PageId; title: string; subtitle: string };
  nextPage?: { id: PageId; title: string; subtitle: string };
}

export function PagePagination({ prevPage, nextPage, onNavigate }: PagePaginationProps) {
  return (
    <div className="bg-[#F5F5F3] border-t border-[#111111] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevPage ? (
            <button
              type="button"
              onClick={() => onNavigate(prevPage.id)}
              className="p-5 bg-white border border-[#111111] text-left hover:bg-[#F5F5F3] transition-colors shadow-[2px_2px_0px_0px_#111111] group flex flex-col justify-between"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-[#666666] mb-1">
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                <span>HALAMAN SEBELUMNYA</span>
              </div>
              <div className="font-bold text-base text-[#111111]">{prevPage.title}</div>
              <div className="text-xs text-[#666666] mt-1">{prevPage.subtitle}</div>
            </button>
          ) : (
            <div className="hidden sm:block" />
          )}

          {nextPage && (
            <button
              type="button"
              onClick={() => onNavigate(nextPage.id)}
              className="p-5 bg-white border border-[#111111] text-right hover:bg-[#F5F5F3] transition-colors shadow-[2px_2px_0px_0px_#111111] group flex flex-col justify-between"
            >
              <div className="flex items-center justify-end gap-2 text-xs font-mono text-[#666666] mb-1">
                <span>HALAMAN BERIKUTNYA</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="font-bold text-base text-[#111111]">{nextPage.title}</div>
              <div className="text-xs text-[#666666] mt-1">{nextPage.subtitle}</div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
