import { useState } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { Smartphone, Monitor, ArrowDownLeft, ArrowUpRight, TrendingUp } from 'lucide-react';
import { formatRupiah } from '../data/content';

export function DashboardPreview() {
  const [viewMode, setViewMode] = useState<'both' | 'desktop' | 'mobile'>('both');

  // Realistic sample chart data for the preview
  const weeklyData = [
    { name: 'Mgg 1', pemasukan: 8500000, pengeluaran: 3200000 },
    { name: 'Mgg 2', pemasukan: 9800000, pengeluaran: 3600000 },
    { name: 'Mgg 3', pemasukan: 11200000, pengeluaran: 4100000 },
    { name: 'Mgg 4', pemasukan: 9000000, pengeluaran: 2750000 },
  ];

  return (
    <section
      id="preview-dashboard"
      className="bg-white border-b border-[#111111] py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#666666] tracking-widest uppercase mb-3">
              <span className="w-6 h-[1.5px] bg-[#111111]" />
              PREVIEW PRODUK NYATA
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#111111] tracking-tight leading-[1.12]">
              Buka dashboard. Langsung tahu kondisinya.
            </h2>
            <p className="text-base text-[#666666] mt-4 leading-relaxed">
              Tidak perlu membuang waktu menghitung ulang nota fisik. Masuk ke aplikasi dan seluruh posisi kas, target bulanan, serta transaksi tercatat rapi.
            </p>
          </div>

          {/* View Mode Toggle Controls */}
          <div className="inline-flex p-1 bg-[#F5F5F3] border border-[#111111] self-start md:self-auto">
            <button
              type="button"
              onClick={() => setViewMode('both')}
              className={`px-3 py-1.5 text-xs font-mono font-bold transition-colors ${
                viewMode === 'both' ? 'bg-[#111111] text-white' : 'text-[#111111] hover:bg-white'
              }`}
            >
              Desktop & Mobile
            </button>
            <button
              type="button"
              onClick={() => setViewMode('desktop')}
              className={`px-3 py-1.5 text-xs font-mono font-bold flex items-center gap-1.5 transition-colors ${
                viewMode === 'desktop' ? 'bg-[#111111] text-white' : 'text-[#111111] hover:bg-white'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Desktop</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('mobile')}
              className={`px-3 py-1.5 text-xs font-mono font-bold flex items-center gap-1.5 transition-colors ${
                viewMode === 'mobile' ? 'bg-[#111111] text-white' : 'text-[#111111] hover:bg-white'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile</span>
            </button>
          </div>
        </div>

        {/* Side by Side Showcase Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* DESKTOP DASHBOARD MOCKUP */}
          {(viewMode === 'both' || viewMode === 'desktop') && (
            <div
              className={`${
                viewMode === 'both' ? 'lg:col-span-8' : 'lg:col-span-12'
              } bg-[#F5F5F3] border border-[#111111] p-4 sm:p-6 shadow-[4px_4px_0px_0px_#111111] transition-all`}
            >
              {/* Mockup Browser Window Chrome */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#D9D9D9] text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-[#111111] inline-block" />
                  <span className="font-semibold text-[#111111]">app.keuanganumkm.id/dashboard</span>
                </div>
                <div className="flex items-center gap-3 text-[#666666]">
                  <span>Mode: Live UMKM</span>
                  <span className="px-2 py-0.5 bg-white border border-[#D9D9D9] text-[#111111]">
                    PT Sumber Berkah Kopi
                  </span>
                </div>
              </div>

              {/* Header inside dashboard */}
              <div className="bg-white border border-[#D9D9D9] p-4 sm:p-5 mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-mono text-[#666666] uppercase">PORTAL FINANSIAL USAHA</div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#111111]">
                    Selamat datang kembali, Budi Santoso
                  </h3>
                  <p className="text-xs text-[#666666] mt-0.5">
                    Periode aktif: September 2026 • Terakhir diperbarui 5 menit lalu
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 bg-[#111111] text-white text-xs font-mono">
                    Status Kas: Sehat
                  </span>
                </div>
              </div>

              {/* Financial Summary: Saldo, Pemasukan, Pengeluaran, Aset */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                <div className="p-3.5 bg-[#111111] text-white">
                  <div className="text-[10px] font-mono tracking-widest text-[#D9D9D9] uppercase">
                    SALDO
                  </div>
                  <div className="text-lg sm:text-xl font-mono font-bold mt-1">
                    Rp 24.850.000
                  </div>
                  <div className="text-[10px] font-mono text-[#D9D9D9] mt-0.5">Kas riil siap pakai</div>
                </div>

                <div className="p-3.5 bg-white border border-[#D9D9D9]">
                  <div className="text-[10px] font-mono tracking-widest text-[#666666] uppercase flex items-center justify-between">
                    <span>PEMASUKAN</span>
                    <ArrowDownLeft className="w-3 h-3 text-[#111111]" />
                  </div>
                  <div className="text-lg sm:text-xl font-mono font-bold text-[#111111] mt-1">
                    Rp 38.500.000
                  </div>
                  <div className="text-[10px] font-mono text-[#666666] mt-0.5">Omzet berjalan</div>
                </div>

                <div className="p-3.5 bg-white border border-[#D9D9D9]">
                  <div className="text-[10px] font-mono tracking-widest text-[#666666] uppercase flex items-center justify-between">
                    <span>PENGELUARAN</span>
                    <ArrowUpRight className="w-3 h-3 text-[#111111]" />
                  </div>
                  <div className="text-lg sm:text-xl font-mono font-bold text-[#111111] mt-1">
                    Rp 13.650.000
                  </div>
                  <div className="text-[10px] font-mono text-[#666666] mt-0.5">Total biaya usaha</div>
                </div>

                <div className="p-3.5 bg-white border border-[#D9D9D9]">
                  <div className="text-[10px] font-mono tracking-widest text-[#666666] uppercase">
                    ASET
                  </div>
                  <div className="text-lg sm:text-xl font-mono font-bold text-[#111111] mt-1">
                    Rp 42.300.000
                  </div>
                  <div className="text-[10px] font-mono text-[#666666] mt-0.5">4 Unit produktif</div>
                </div>
              </div>

              {/* Chart & Monthly Plan Progress */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-5">
                {/* Grayscale Recharts Bar Chart */}
                <div className="md:col-span-7 bg-white p-4 border border-[#D9D9D9]">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold uppercase text-[#111111]">
                      Pemasukan vs Pengeluaran
                    </span>
                    <div className="flex items-center gap-3 text-[10px] font-mono">
                      <span className="flex items-center gap-1">
                        <span className="w-2.5 h-2.5 bg-[#111111]" /> Masuk
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="w-2.5 h-2.5 bg-[#D9D9D9] border border-[#666666]" /> Keluar
                      </span>
                    </div>
                  </div>

                  <div className="h-44 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={weeklyData} margin={{ top: 10, right: 10, left: -15, bottom: 0 }}>
                        <XAxis dataKey="name" tick={{ fontSize: 10, fontFamily: 'IBM Plex Mono' }} />
                        <YAxis tick={{ fontSize: 9, fontFamily: 'IBM Plex Mono' }} tickFormatter={(v) => `${v / 1000000}jt`} />
                        <Tooltip
                          formatter={(value: number | string | undefined) => [typeof value === 'number' ? formatRupiah(value) : (value ?? ''), '']}
                          contentStyle={{ backgroundColor: '#111111', color: '#FFFFFF', border: 'none', fontFamily: 'IBM Plex Mono', fontSize: '11px' }}
                        />
                        <Bar dataKey="pemasukan" fill="#111111" />
                        <Bar dataKey="pengeluaran" fill="#D9D9D9" stroke="#666666" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Monthly Plan Progress Widget */}
                <div className="md:col-span-5 bg-white p-4 border border-[#D9D9D9] flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-mono font-bold uppercase text-[#111111] mb-2">
                      Progress Rencana Bulanan
                    </div>
                    <div className="space-y-3 text-xs">
                      <div>
                        <div className="flex justify-between text-[11px] font-mono mb-1">
                          <span className="text-[#666666]">Target Pemasukan:</span>
                          <span className="font-bold text-[#111111]">Rp 40.000.000</span>
                        </div>
                        <div className="w-full h-2 bg-[#F5F5F3] border border-[#D9D9D9]">
                          <div className="h-full bg-[#111111] w-[78%]" />
                        </div>
                        <div className="flex justify-between text-[10px] font-mono text-[#666666] mt-0.5">
                          <span>Realisasi: Rp 31.200.000</span>
                          <span className="font-bold text-[#111111]">78%</span>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-[#D9D9D9]">
                        <div className="flex justify-between text-[11px] font-mono mb-1">
                          <span className="text-[#666666]">Target Tabungan:</span>
                          <span className="font-bold text-[#111111]">Rp 5.000.000</span>
                        </div>
                        <div className="w-full h-2 bg-[#F5F5F3] border border-[#D9D9D9]">
                          <div className="h-full bg-[#111111] w-[100%]" />
                        </div>
                        <div className="flex justify-between text-[10px] font-mono text-[#666666] mt-0.5">
                          <span>Tersimpan: Rp 5.000.000</span>
                          <span className="font-bold text-[#111111]">100%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 p-2 bg-[#F5F5F3] border border-[#D9D9D9] text-[10px] font-mono text-[#666666] flex items-center gap-1.5">
                    <TrendingUp className="w-3 h-3 text-[#111111]" />
                    <span>Performa: On Track sesuai rencana target</span>
                  </div>
                </div>
              </div>

              {/* Recent Transactions Table */}
              <div className="bg-white border border-[#D9D9D9] p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold uppercase text-[#111111]">
                    Transaksi Terbaru
                  </span>
                  <span className="text-[10px] font-mono text-[#666666]">Terakhir 4 transaksi</span>
                </div>
                <div className="divide-y divide-[#D9D9D9]">
                  <div className="py-2 flex justify-between items-center text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#111111]" />
                      <span className="font-medium text-[#111111]">Penjualan Produk Kopi Kemasan</span>
                    </div>
                    <span className="font-mono font-bold text-[#111111]">+Rp 2.500.000</span>
                  </div>
                  <div className="py-2 flex justify-between items-center text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 border border-[#111111] bg-white" />
                      <span className="font-medium text-[#111111]">Bahan baku kantong drip & beans</span>
                    </div>
                    <span className="font-mono font-bold text-[#111111]">-Rp 750.000</span>
                  </div>
                  <div className="py-2 flex justify-between items-center text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 border border-[#111111] bg-white" />
                      <span className="font-medium text-[#111111]">Transportasi kurir hari ini</span>
                    </div>
                    <span className="font-mono font-bold text-[#111111]">-Rp 150.000</span>
                  </div>
                  <div className="py-2 flex justify-between items-center text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#111111]" />
                      <span className="font-medium text-[#111111]">Penjualan Offline Gerai</span>
                    </div>
                    <span className="font-mono font-bold text-[#111111]">+Rp 1.800.000</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* MOBILE DASHBOARD MOCKUP */}
          {(viewMode === 'both' || viewMode === 'mobile') && (
            <div
              className={`${
                viewMode === 'both' ? 'lg:col-span-4' : 'lg:col-span-8 lg:mx-auto max-w-md'
              } w-full`}
            >
              {/* Phone Hardware Shell in Swiss pure black */}
              <div className="bg-[#111111] p-3 rounded-none border border-[#111111] shadow-[4px_4px_0px_0px_#666666]">
                {/* Speaker notch & status bar */}
                <div className="flex items-center justify-between text-[10px] font-mono text-white px-2 mb-2">
                  <span>09:41</span>
                  <div className="w-12 h-1 bg-white/30" />
                  <span>100%</span>
                </div>

                {/* Screen content */}
                <div className="bg-white p-4 space-y-4 border border-[#333333]">
                  {/* App bar inside mobile */}
                  <div className="flex items-center justify-between border-b border-[#D9D9D9] pb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-5 h-5 bg-[#111111] text-white text-[9px] font-mono flex items-center justify-center font-bold">
                        KU
                      </span>
                      <span className="font-bold text-xs uppercase tracking-tight">KEUANGAN UMKM</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#666666]">Sep 2026</span>
                  </div>

                  {/* Saldo Mobile Card */}
                  <div className="bg-[#111111] text-white p-3.5">
                    <span className="text-[9px] font-mono text-[#D9D9D9] uppercase tracking-wider block">
                      SALDO KAS AKTIF
                    </span>
                    <div className="text-xl font-mono font-bold mt-0.5">Rp 24.850.000</div>
                    <div className="flex justify-between items-center text-[9px] font-mono text-[#D9D9D9] mt-2 pt-1 border-t border-[#333333]">
                      <span>Masuk: Rp 38.5jt</span>
                      <span>Keluar: Rp 13.6jt</span>
                    </div>
                  </div>

                  {/* Quick Action Button on Mobile */}
                  <button
                    type="button"
                    className="w-full py-2 bg-white border border-[#111111] text-xs font-bold font-mono text-[#111111] hover:bg-[#F5F5F3] flex items-center justify-center gap-1"
                  >
                    <span>+ Catat Transaksi Cepat</span>
                  </button>

                  {/* Mini Progress bar */}
                  <div className="p-3 bg-[#F5F5F3] border border-[#D9D9D9]">
                    <div className="flex justify-between text-[10px] font-mono mb-1">
                      <span className="font-bold text-[#111111]">TARGET BULANAN</span>
                      <span className="font-bold">78%</span>
                    </div>
                    <div className="w-full h-2 bg-white border border-[#D9D9D9]">
                      <div className="h-full bg-[#111111] w-[78%]" />
                    </div>
                    <div className="text-[9px] font-mono text-[#666666] mt-1">
                      Realisasi: Rp 31.200.000 / Rp 40jt
                    </div>
                  </div>

                  {/* Recent 3 items */}
                  <div className="space-y-1.5 pt-1">
                    <div className="text-[10px] font-mono font-bold uppercase text-[#111111]">
                      Transaksi Terbaru
                    </div>
                    <div className="divide-y divide-[#D9D9D9] border border-[#D9D9D9] text-[11px]">
                      <div className="p-2 flex justify-between bg-white">
                        <span className="font-medium text-[#111111]">Penjualan</span>
                        <span className="font-mono font-bold">+Rp 2.500.000</span>
                      </div>
                      <div className="p-2 flex justify-between bg-white">
                        <span className="font-medium text-[#111111]">Bahan Baku</span>
                        <span className="font-mono font-bold">-Rp 750.000</span>
                      </div>
                      <div className="p-2 flex justify-between bg-white">
                        <span className="font-medium text-[#111111]">Transportasi</span>
                        <span className="font-mono font-bold">-Rp 150.000</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Home Indicator */}
                <div className="flex justify-center pt-2">
                  <div className="w-20 h-1 bg-white/40" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
