export function PlanVsReality() {
  const comparisonData = [
    {
      metric: 'Pemasukan (Omzet)',
      subtext: 'Penerimaan kotor dari penjualan produk & jasa',
      rencana: 'Rp 40.000.000',
      realita: 'Rp 38.500.000',
      selisih: '-Rp 1.500.000',
      status: 'DI BAWAH TARGET (96.2%)',
      evaluation: 'Perlu dorong promosi minggu terakhir untuk menutup gap 3.8%.'
    },
    {
      metric: 'Pengeluaran (Biaya Usaha)',
      subtext: 'Bahan baku, utilitas workshop, transportasi, upah',
      rencana: 'Rp 25.000.000',
      realita: 'Rp 21.000.000',
      selisih: '+Rp 4.000.000',
      status: 'EFISIENSI / HEMAT (+16.0%)',
      evaluation: 'Realisasi biaya tetap terkendali dengan sisa pagu Rp 4.000.000.'
    },
    {
      metric: 'Tabungan Cadangan Usaha',
      subtext: 'Dana likuid darurat disisihkan ke rekening cadangan',
      rencana: 'Rp 5.000.000',
      realita: 'Rp 6.000.000',
      selisih: '+Rp 1.000.000',
      status: 'MELAMPAUI TARGET (120%)',
      evaluation: 'Surplus efisiensi belanja dialihkan langsung ke kas tabungan.'
    }
  ];

  return (
    <section
      id="rencana-vs-realita"
      className="bg-[#F5F5F3] border-b border-[#111111] py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#666666] tracking-widest uppercase mb-3">
            <span className="w-6 h-[1.5px] bg-[#111111]" />
            EVALUASI AKURASI
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#111111] tracking-tight leading-[1.12]">
            Rencana vs Realita. Lihat apakah usaha berjalan sesuai target.
          </h2>
          <p className="text-base text-[#666666] mt-4 leading-relaxed">
            Menghilangkan tebak-tebakan. Ketahui secara presisi apakah bisnis Anda surplus, defisit, atau tepat pada koridor perencanaan.
          </p>
        </div>

        {/* Comparison Table in Strict Swiss International Typography */}
        <div className="bg-white border border-[#111111] shadow-[4px_4px_0px_0px_#111111]">
          {/* Table Header Columns */}
          <div className="hidden md:grid grid-cols-12 p-5 bg-[#111111] text-white text-xs font-mono font-bold tracking-widest uppercase border-b border-[#111111]">
            <div className="col-span-4">INDIKATOR POS KEUANGAN</div>
            <div className="col-span-2 text-right">RENCANA</div>
            <div className="col-span-3 text-right">REALITA</div>
            <div className="col-span-3 text-right">SELISIH / VARIANSI</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-[#D9D9D9]">
            {comparisonData.map((row, idx) => (
              <div
                key={row.metric}
                className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:bg-[#F5F5F3] transition-colors"
              >
                {/* Metric Title & Description */}
                <div className="md:col-span-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs font-bold text-[#666666]">
                      0{idx + 1}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#111111]">
                      {row.metric}
                    </h3>
                  </div>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    {row.subtext}
                  </p>
                </div>

                {/* Column Rencana */}
                <div className="md:col-span-2 flex md:flex-col justify-between items-baseline md:items-end">
                  <span className="text-[10px] font-mono text-[#666666] md:hidden">RENCANA:</span>
                  <div className="text-sm sm:text-base font-mono font-medium text-[#666666]">
                    {row.rencana}
                  </div>
                  <span className="text-[10px] font-mono text-[#666666] hidden md:block">Pagu Awal</span>
                </div>

                {/* Column Realita */}
                <div className="md:col-span-3 flex md:flex-col justify-between items-baseline md:items-end">
                  <span className="text-[10px] font-mono text-[#666666] md:hidden">REALITA:</span>
                  <div className="text-base sm:text-lg font-mono font-bold text-[#111111]">
                    {row.realita}
                  </div>
                  <span className="text-[10px] font-mono text-[#111111] font-semibold hidden md:block">
                    {row.status}
                  </span>
                </div>

                {/* Column Selisih */}
                <div className="md:col-span-3 flex md:flex-col justify-between items-baseline md:items-end border-t md:border-t-0 pt-3 md:pt-0 border-[#D9D9D9]">
                  <span className="text-[10px] font-mono text-[#666666] md:hidden">SELISIH:</span>
                  <div className="text-lg sm:text-xl font-mono font-black text-[#111111]">
                    {row.selisih}
                  </div>
                  <div className="text-right text-[11px] text-[#666666] mt-1 max-w-xs">
                    {row.evaluation}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Table Summary Footer */}
          <div className="p-4 bg-[#F5F5F3] border-t border-[#111111] flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-[#222222] gap-2">
            <span>KONTROL PERIODIK: DITINJAU SETIAP AKHIR PEKAN</span>
            <span className="font-bold">HASIL AKHIR: SURPLUS BERSIH TERKONTROL</span>
          </div>
        </div>
      </div>
    </section>
  );
}
