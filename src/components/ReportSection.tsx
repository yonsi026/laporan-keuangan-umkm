import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { monthlyTrendData, formatRupiah } from '../data/content';
import { FileDown, Calendar, CheckCircle } from 'lucide-react';

export function ReportSection() {
  return (
    <section
      id="laporan"
      className="bg-white border-b border-[#111111] py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#666666] tracking-widest uppercase mb-3">
            <span className="w-6 h-[1.5px] bg-[#111111]" />
            LAPORAN & ANALISIS
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#111111] tracking-tight leading-[1.12]">
            Dari angka menjadi keputusan.
          </h2>
          <p className="text-base sm:text-lg text-[#666666] mt-4 leading-relaxed">
            Laporan membantu Anda melihat perkembangan keuangan usaha dari waktu ke waktu tanpa perlu menyewa konsultan akuntansi mahal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Laporan Bulanan Rekap Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#F5F5F3] border border-[#111111] p-6 shadow-[3px_3px_0px_0px_#111111]">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#D9D9D9]">
                <div>
                  <span className="text-xs font-mono text-[#666666] uppercase tracking-widest">
                    RINGKASAN EKSEKUTIF
                  </span>
                  <h3 className="text-xl font-bold text-[#111111]">
                    Laporan Bulanan (September 2026)
                  </h3>
                </div>
                <Calendar className="w-5 h-5 text-[#111111]" />
              </div>

              {/* Rekap metrics */}
              <div className="space-y-3">
                <div className="p-3.5 bg-white border border-[#D9D9D9] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#666666] block">
                      TOTAL PEMASUKAN
                    </span>
                    <span className="text-lg font-mono font-bold text-[#111111]">
                      Rp 38.500.000
                    </span>
                  </div>
                  <span className="text-xs font-mono bg-[#111111] text-white px-2 py-0.5">
                    +4.6% bln lalu
                  </span>
                </div>

                <div className="p-3.5 bg-white border border-[#D9D9D9] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#666666] block">
                      TOTAL PENGELUARAN
                    </span>
                    <span className="text-lg font-mono font-bold text-[#111111]">
                      Rp 13.650.000
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#111111] border border-[#111111] px-2 py-0.5">
                    Terkontrol
                  </span>
                </div>

                <div className="p-3.5 bg-white border border-[#D9D9D9] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#666666] block">
                      SALDO KAS BERJALAN
                    </span>
                    <span className="text-lg font-mono font-bold text-[#111111]">
                      Rp 24.850.000
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#666666]">
                    Kas Likuid
                  </span>
                </div>

                <div className="p-3.5 bg-white border border-[#D9D9D9] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#666666] block">
                      TOTAL NILAI ASET
                    </span>
                    <span className="text-lg font-mono font-bold text-[#111111]">
                      Rp 42.300.000
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#666666]">
                    4 Alat Produksi
                  </span>
                </div>
              </div>

              {/* Action */}
              <div className="mt-5 pt-4 border-t border-[#D9D9D9] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => alert('Fitur ekspor PDF laporan siap saat Anda masuk ke akun.')}
                  className="w-full py-2.5 bg-white border border-[#111111] text-xs font-mono font-bold text-[#111111] hover:bg-[#111111] hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Unduh Rekap Laporan (PDF/CSV)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Monochrome Multi-month Trend Chart (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-[#111111] p-6 sm:p-8 shadow-[3px_3px_0px_0px_#111111]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-[#D9D9D9] gap-2">
              <div>
                <span className="text-xs font-mono text-[#666666] uppercase tracking-widest">
                  VISUALISASI PERIODE
                </span>
                <h3 className="text-xl font-bold text-[#111111]">
                  Tren Keuangan Usaha (Juni — September 2026)
                </h3>
              </div>
              <div className="text-xs font-mono text-[#666666] flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#111111]" />
                <span>Pertumbuhan Konsisten</span>
              </div>
            </div>

            {/* Strict Monochromatic Line Chart */}
            <div className="h-72 w-full pt-2">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyTrendData} margin={{ top: 15, right: 20, left: -10, bottom: 5 }}>
                  <CartesianGrid stroke="#E5E5E5" strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" tick={{ fontSize: 12, fontFamily: 'IBM Plex Mono' }} stroke="#111111" />
                  <YAxis
                    tick={{ fontSize: 10, fontFamily: 'IBM Plex Mono' }}
                    stroke="#111111"
                    tickFormatter={(val) => `${val / 1000000}jt`}
                  />
                  <Tooltip
                    formatter={(val: number | string | undefined) => [typeof val === 'number' ? formatRupiah(val) : (val ?? ''), '']}
                    contentStyle={{ backgroundColor: '#111111', color: '#FFFFFF', border: '1px solid #111111', fontFamily: 'IBM Plex Mono', fontSize: '11px' }}
                  />
                  <Legend
                    wrapperStyle={{ paddingTop: 15, fontFamily: 'IBM Plex Mono', fontSize: '11px' }}
                  />
                  {/* Black primary line for Pemasukan */}
                  <Line
                    name="Pemasukan (Omzet)"
                    type="monotone"
                    dataKey="income"
                    stroke="#000000"
                    strokeWidth={2.5}
                    dot={{ fill: '#000000', r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  {/* Dark Gray line for Pengeluaran */}
                  <Line
                    name="Pengeluaran (Beban)"
                    type="monotone"
                    dataKey="expense"
                    stroke="#666666"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={{ fill: '#666666', r: 3 }}
                  />
                  {/* Light/Medium Gray line for Tabungan */}
                  <Line
                    name="Tabungan Usaha"
                    type="monotone"
                    dataKey="savings"
                    stroke="#999999"
                    strokeWidth={1.5}
                    dot={{ fill: '#999999', r: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Editorial Chart Legend Explainer */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 mt-4 border-t border-[#D9D9D9] text-xs font-mono">
              <div className="p-2.5 bg-[#F5F5F3] border border-[#D9D9D9]">
                <span className="text-[#666666] text-[10px] block uppercase">GARIS TEBAL HITAM</span>
                <span className="font-bold text-[#111111]">Pemasukan</span>
                <p className="text-[10px] text-[#666666] mt-0.5">Tren omzet bulanan naik bertahap</p>
              </div>
              <div className="p-2.5 bg-[#F5F5F3] border border-[#D9D9D9]">
                <span className="text-[#666666] text-[10px] block uppercase">GARIS PUTUS-PUTUS</span>
                <span className="font-bold text-[#111111]">Pengeluaran</span>
                <p className="text-[10px] text-[#666666] mt-0.5">Beban tertahan stabil di ~21jt</p>
              </div>
              <div className="p-2.5 bg-[#F5F5F3] border border-[#D9D9D9]">
                <span className="text-[#666666] text-[10px] block uppercase">GARIS TIPIS ABU</span>
                <span className="font-bold text-[#111111]">Tabungan</span>
                <p className="text-[10px] text-[#666666] mt-0.5">Akumulasi modal likuid bisnis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
