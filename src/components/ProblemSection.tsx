import { problemList } from '../data/content';
import { AlertCircle } from 'lucide-react';

export function ProblemSection() {
  return (
    <section
      id="problem-section"
      className="bg-[#F5F5F3] border-b border-[#111111] py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 sm:mb-16 items-start">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#666666] tracking-widest uppercase mb-3">
              <span className="w-6 h-[1.5px] bg-[#111111]" />
              MASALAH NYATA UMKM
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#111111] tracking-tight leading-[1.15]">
              Masih mencatat keuangan di banyak tempat?
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pt-8">
            <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
              Sebagian besar pelaku UMKM menghabiskan waktu berjam-jam mencoba merapikan pembukuan, namun saat ditanya saldo riil atau proyeksi bulan depan, jawabannya tetap tidak pasti.
            </p>
          </div>
        </div>

        {/* Structured 6-item list with large numbers and horizontal dividers */}
        <div className="border-t border-[#111111] divide-y divide-[#D9D9D9]">
          {problemList.map((item) => (
            <div
              key={item.number}
              className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline group hover:bg-white transition-colors px-2 sm:px-4"
            >
              {/* Large Number */}
              <div className="md:col-span-2">
                <span className="font-mono text-3xl sm:text-4xl font-extrabold text-[#111111] group-hover:underline decoration-2 underline-offset-4">
                  {item.number}
                </span>
              </div>

              {/* Title */}
              <div className="md:col-span-5">
                <h3 className="text-lg sm:text-xl font-bold text-[#111111] tracking-tight">
                  {item.title}
                </h3>
              </div>

              {/* Detailed Description */}
              <div className="md:col-span-5">
                <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom takeaway banner */}
        <div className="mt-12 p-5 bg-white border border-[#111111] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-[#111111] shrink-0" />
            <span className="text-sm font-semibold text-[#111111]">
              Akibatnya: Banyak UMKM merasa penjualan ramai, tapi kas bersih selalu kekurangan modal di akhir bulan.
            </span>
          </div>
          <span className="text-xs font-mono text-[#666666] uppercase whitespace-nowrap">
            Solusi &rarr; Sentralisasi Data
          </span>
        </div>
      </div>
    </section>
  );
}
