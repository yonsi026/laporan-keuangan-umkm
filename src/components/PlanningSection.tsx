import { formatRupiah, monthlyPlanSeptember2026 } from '../data/content';

export function PlanningSection() {
  const plan = monthlyPlanSeptember2026;

  return (
    <section
      id="perencanaan"
      className="bg-white border-b border-[#111111] py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#666666] tracking-widest uppercase mb-3">
            <span className="w-6 h-[1.5px] bg-[#111111]" />
            PERENCANAAN FINANSIAL
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#111111] tracking-tight leading-[1.12]">
            Jangan hanya mencatat bulan ini. Rencanakan bulan berikutnya.
          </h2>
          <p className="text-base sm:text-lg text-[#666666] mt-4 leading-relaxed">
            Dengan Rencana Bulanan, Anda dapat menentukan target pemasukan, batas pengeluaran, dan target tabungan sebelum bulan dimulai.
          </p>
        </div>

        {/* Visual Planning Interface Card */}
        <div className="bg-[#F5F5F3] border border-[#111111] p-6 sm:p-10 shadow-[4px_4px_0px_0px_#111111]">
          {/* Card Title Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-[#D9D9D9] gap-4">
            <div>
              <span className="text-xs font-mono text-[#666666] uppercase tracking-widest">
                LEMBAR KERJA PERENCANAAN
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#111111] mt-1 font-mono">
                RENCANA SEPTEMBER 2026
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="px-3 py-1 bg-white border border-[#111111] text-[#111111]">
                Status: Aktif Dipantau
              </span>
            </div>
          </div>

          {/* 3 Core Targets Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="p-5 bg-white border border-[#111111]">
              <span className="text-xs font-mono uppercase text-[#666666] block mb-1">
                TARGET PEMASUKAN
              </span>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-[#111111]">
                {formatRupiah(plan.targetIncome)}
              </div>
              <p className="text-xs text-[#666666] mt-2">
                Ekspektasi omzet penjualan produk & jasa
              </p>
            </div>

            <div className="p-5 bg-white border border-[#111111]">
              <span className="text-xs font-mono uppercase text-[#666666] block mb-1">
                BATAS PENGELUARAN
              </span>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-[#111111]">
                {formatRupiah(plan.expenseLimit)}
              </div>
              <p className="text-xs text-[#666666] mt-2">
                Pagu maksimal biaya produksi & operasional
              </p>
            </div>

            <div className="p-5 bg-white border border-[#111111]">
              <span className="text-xs font-mono uppercase text-[#666666] block mb-1">
                TARGET TABUNGAN
              </span>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-[#111111]">
                {formatRupiah(plan.targetSavings)}
              </div>
              <p className="text-xs text-[#666666] mt-2">
                Alokasi cadangan darurat & investasi usaha
              </p>
            </div>
          </div>

          {/* Category Limits with clean black-and-white progress bars */}
          <div className="bg-white border border-[#111111] p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#D9D9D9]">
              <div>
                <h4 className="text-base font-bold text-[#111111] uppercase tracking-wider">
                  Batas Pagu Per Kategori (Category Limits)
                </h4>
                <p className="text-xs text-[#666666]">
                  Pantau penyerapan dana operasional sebelum melampaui batas maksimal
                </p>
              </div>
              <span className="text-xs font-mono text-[#111111] hidden sm:block">
                Total Alokasi: Rp 20.000.000
              </span>
            </div>

            <div className="space-y-6">
              {plan.categories.map((cat) => {
                const percent = Math.round((cat.used / cat.allocated) * 100);
                return (
                  <div key={cat.category} className="space-y-1.5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono">
                      <span className="font-bold text-[#111111] text-sm">
                        {cat.category}
                      </span>
                      <div className="flex items-center gap-4 text-[#666666]">
                        <span>Terpakai: {formatRupiah(cat.used)}</span>
                        <span>Alokasi: <strong className="text-[#111111]">{formatRupiah(cat.allocated)}</strong></span>
                        <span className="font-bold text-[#111111] bg-[#F5F5F3] px-2 py-0.5 border border-[#D9D9D9]">
                          {percent}%
                        </span>
                      </div>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="w-full h-3.5 bg-[#F5F5F3] border border-[#111111] p-0.5">
                      <div
                        className="h-full bg-[#111111] transition-all duration-300"
                        style={{ width: `${Math.min(100, percent)}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
