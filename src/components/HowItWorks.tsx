import { howItWorksSteps } from '../data/content';
import { ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onOpenAuth: (mode: 'masuk' | 'daftar') => void;
}

export function HowItWorks({ onOpenAuth }: HowItWorksProps) {
  return (
    <section
      id="cara-kerja"
      className="bg-[#F5F5F3] border-b border-[#111111] py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#666666] tracking-widest uppercase mb-3">
            <span className="w-6 h-[1.5px] bg-[#111111]" />
            PROSES MUDAH
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#111111] tracking-tight leading-[1.12]">
            Mulai dalam beberapa langkah sederhana.
          </h2>
          <p className="text-base text-[#666666] mt-4 leading-relaxed">
            Tidak ada pelatihan panjang atau setup server rumit. Siap digunakan dalam waktu kurang dari dua menit.
          </p>
        </div>

        {/* 4-Step Horizontal Timeline connected with thin lines */}
        <div className="relative">
          {/* Subtle horizontal connecting line on desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-[1.5px] bg-[#111111] z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {howItWorksSteps.map((stepItem, index) => (
              <div
                key={stepItem.step}
                className="bg-white border border-[#111111] p-6 sm:p-7 flex flex-col justify-between shadow-[3px_3px_0px_0px_#111111] group hover:-translate-y-1 transition-transform"
              >
                <div>
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-[#111111] text-white font-mono text-xl font-bold flex items-center justify-center border border-[#111111]">
                      {stepItem.step}
                    </div>
                    <span className="text-xs font-mono text-[#666666] uppercase">
                      Langkah 0{index + 1}
                    </span>
                  </div>

                  {/* Action Keyword */}
                  <div className="text-xs font-mono font-bold tracking-widest uppercase text-[#666666] mb-1">
                    {stepItem.action}
                  </div>

                  {/* Step Title */}
                  <h3 className="text-lg font-bold text-[#111111] mb-2 leading-tight">
                    {stepItem.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#D9D9D9] flex items-center justify-between text-xs font-mono text-[#111111]">
                  <span>Fase 0{index + 1}</span>
                  <ArrowRight className="w-4 h-4 text-[#111111] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA trigger underneath */}
        <div className="mt-14 pt-8 border-t border-[#D9D9D9] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <span className="text-sm font-semibold text-[#111111]">
            Siap merapikan arus kas usaha hari ini?
          </span>
          <button
            type="button"
            onClick={() => onOpenAuth('daftar')}
            className="px-6 py-3 bg-[#111111] text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#222222] transition-colors border border-[#111111]"
          >
            Buat Akun Gratis &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
