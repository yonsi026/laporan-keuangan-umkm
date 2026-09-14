import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PageId } from '../types';

interface PageHeaderProps {
  pageCode: string;
  title: string;
  subtitle: string;
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  prevPage?: { id: PageId; label: string };
  nextPage?: { id: PageId; label: string };
  actionButton?: {
    label: string;
    onClick: () => void;
  };
}

export function PageHeader({
  pageCode,
  title,
  subtitle,
  prevPage,
  nextPage,
  onNavigate,
  actionButton,
}: PageHeaderProps) {
  return (
    <div className="bg-white border-b border-[#111111] pt-8 pb-8 sm:pt-10 sm:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb line */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#666666] pb-4 mb-4 border-b border-[#D9D9D9]">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onNavigate('beranda')}
              className="hover:text-[#111111] hover:underline"
            >
              BERANDA
            </button>
            <span>/</span>
            <span className="text-[#111111] font-bold uppercase">{pageCode}</span>
          </div>

          <div className="flex items-center gap-4">
            {prevPage && (
              <button
                type="button"
                onClick={() => onNavigate(prevPage.id)}
                className="inline-flex items-center gap-1 hover:text-[#111111] hover:underline"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>{prevPage.label}</span>
              </button>
            )}
            {nextPage && (
              <button
                type="button"
                onClick={() => onNavigate(nextPage.id)}
                className="inline-flex items-center gap-1 hover:text-[#111111] hover:underline"
              >
                <span>{nextPage.label}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Title and Subtitle and Action */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#666666] tracking-widest uppercase mb-2">
              <span className="w-6 h-[1.5px] bg-[#111111]" />
              HALAMAN {pageCode}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] tracking-tight leading-tight">
              {title}
            </h1>
            <p className="text-base text-[#666666] mt-3 leading-relaxed">
              {subtitle}
            </p>
          </div>

          {actionButton && (
            <div className="shrink-0">
              <button
                type="button"
                onClick={actionButton.onClick}
                className="px-5 py-2.5 bg-[#111111] text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#222222] transition-colors border border-[#111111] shadow-[2px_2px_0px_0px_#111111]"
              >
                {actionButton.label}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
