import { ArrowDown } from 'lucide-react';

export function TrustStatement() {
  return (
    <section
      id="trust-statement"
      className="bg-white border-b border-[#111111] py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Subheader & Big Statement */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 text-xs font-mono text-[#666666] tracking-widest uppercase mb-4">
            <span className="w-6 h-[1.5px] bg-[#111111]" />
            PRINSIP DASAR
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#111111] tracking-tight leading-[1.1] mb-6">
            Keuangan usaha tidak harus rumit.
          </h2>

          <p className="text-lg sm:text-2xl text-[#666666] font-normal leading-relaxed">
            Yang penting bukan mencatat lebih banyak, tetapi <span className="text-[#111111] font-semibold">memahami ke mana uang bergerak</span> dan apa yang harus dilakukan berikutnya.
          </p>
        </div>

        {/* Three compact Swiss principles with strict grid and oversized numbers */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-[#111111] divide-y md:divide-y-0 md:divide-x divide-[#111111]">
          {/* Principle 01 */}
          <div className="p-6 sm:p-8 flex flex-col justify-between group hover:bg-[#F5F5F3] transition-colors">
            <div>
              <div className="text-3xl sm:text-4xl font-mono font-bold text-[#111111] mb-4">
                01
              </div>
              <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wider text-[#111111] mb-2">
                CATAT
              </h3>
              <p className="text-sm text-[#666666] leading-relaxed">
                Catat pemasukan dan pengeluaran dengan cepat langsung dari ponsel dalam beberapa detik.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#D9D9D9] flex items-center justify-between text-xs font-mono text-[#111111]">
              <span>Harian</span>
              <span>&rarr;</span>
            </div>
          </div>

          {/* Principle 02 */}
          <div className="p-6 sm:p-8 flex flex-col justify-between group hover:bg-[#F5F5F3] transition-colors">
            <div>
              <div className="text-3xl sm:text-4xl font-mono font-bold text-[#111111] mb-4">
                02
              </div>
              <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wider text-[#111111] mb-2">
                PAHAMI
              </h3>
              <p className="text-sm text-[#666666] leading-relaxed">
                Lihat kondisi keuangan usaha dalam satu dashboard yang bersih, objektif, dan tanpa istilah teknis membingungkan.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#D9D9D9] flex items-center justify-between text-xs font-mono text-[#111111]">
              <span>Real-time</span>
              <span>&rarr;</span>
            </div>
          </div>

          {/* Principle 03 */}
          <div className="p-6 sm:p-8 flex flex-col justify-between group hover:bg-[#F5F5F3] transition-colors">
            <div>
              <div className="text-3xl sm:text-4xl font-mono font-bold text-[#111111] mb-4">
                03
              </div>
              <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wider text-[#111111] mb-2">
                RENCANAKAN
              </h3>
              <p className="text-sm text-[#666666] leading-relaxed">
                Tetapkan target pemasukan, batas belanja operasional, dan bandingkan rencana dengan realita aktual.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#D9D9D9] flex items-center justify-between text-xs font-mono text-[#111111]">
              <span>Masa Depan</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
