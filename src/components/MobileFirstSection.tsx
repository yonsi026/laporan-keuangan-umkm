import { useState } from 'react';
import { Smartphone, Zap, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { formatRupiah } from '../data/content';

export function MobileFirstSection() {
  const [activeScreen, setActiveScreen] = useState<'dashboard' | 'transaksi' | 'rencana' | 'laporan'>('dashboard');

  return (
    <section
      id="mobile-experience"
      className="bg-[#F5F5F3] border-b border-[#111111] py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#666666] tracking-widest uppercase mb-3">
            <span className="w-6 h-[1.5px] bg-[#111111]" />
            OPTIMALISASI MOBILE
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#111111] tracking-tight leading-[1.12]">
            Keuangan usaha selalu ada di tangan Anda.
          </h2>
          <p className="text-base sm:text-lg text-[#666666] mt-4 leading-relaxed">
            Dirancang untuk digunakan dari HP, sehingga Anda dapat mencatat transaksi dan memantau kondisi usaha kapan saja tanpa harus membuka laptop di workshop.
          </p>
        </div>

        {/* Swiss Grid Composition with Smartphone Mockup in Center & Callouts Around */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Callouts (3 cols) */}
          <div className="lg:col-span-3 space-y-6 order-2 lg:order-1">
            <div className="p-5 bg-white border border-[#111111] shadow-[3px_3px_0px_0px_#111111]">
              <span className="font-mono text-xs font-bold text-[#666666] uppercase block mb-1">
                LABEL 01
              </span>
              <h3 className="text-base font-bold text-[#111111] mb-1">
                Input Cepat Satu Tangan
              </h3>
              <p className="text-xs text-[#666666] leading-relaxed">
                Tombol dan input berukuran minimal 44px, nyaman digunakan saat berdiri di toko atau kasir.
              </p>
            </div>

            <div className="p-5 bg-white border border-[#111111] shadow-[3px_3px_0px_0px_#111111]">
              <span className="font-mono text-xs font-bold text-[#666666] uppercase block mb-1">
                LABEL 02
              </span>
              <h3 className="text-base font-bold text-[#111111] mb-1">
                Akses Browser Tanpa Install
              </h3>
              <p className="text-xs text-[#666666] leading-relaxed">
                Langsung buka dari Chrome atau Safari HP tanpa memakan memori penyimpanan internal.
              </p>
            </div>
          </div>

          {/* Center Smartphone Mockup (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-center order-1 lg:order-2">
            {/* Screen View Selector Tabs */}
            <div className="flex items-center gap-1 mb-4 p-1 bg-white border border-[#111111] text-xs font-mono overflow-x-auto max-w-full">
              <button
                type="button"
                onClick={() => setActiveScreen('dashboard')}
                className={`px-3 py-1.5 whitespace-nowrap transition-colors ${
                  activeScreen === 'dashboard' ? 'bg-[#111111] text-white font-bold' : 'hover:bg-[#F5F5F3]'
                }`}
              >
                1. Dashboard
              </button>
              <button
                type="button"
                onClick={() => setActiveScreen('transaksi')}
                className={`px-3 py-1.5 whitespace-nowrap transition-colors ${
                  activeScreen === 'transaksi' ? 'bg-[#111111] text-white font-bold' : 'hover:bg-[#F5F5F3]'
                }`}
              >
                2. + Transaksi
              </button>
              <button
                type="button"
                onClick={() => setActiveScreen('rencana')}
                className={`px-3 py-1.5 whitespace-nowrap transition-colors ${
                  activeScreen === 'rencana' ? 'bg-[#111111] text-white font-bold' : 'hover:bg-[#F5F5F3]'
                }`}
              >
                3. Rencana
              </button>
              <button
                type="button"
                onClick={() => setActiveScreen('laporan')}
                className={`px-3 py-1.5 whitespace-nowrap transition-colors ${
                  activeScreen === 'laporan' ? 'bg-[#111111] text-white font-bold' : 'hover:bg-[#F5F5F3]'
                }`}
              >
                4. Laporan
              </button>
            </div>

            {/* Smartphone Hardware Frame */}
            <div className="w-full max-w-[340px] bg-[#000000] p-4 border-2 border-[#111111] shadow-[8px_8px_0px_0px_#111111]">
              {/* Phone Camera Punch Hole & Status */}
              <div className="flex justify-between items-center text-[10px] font-mono text-white px-2 mb-3">
                <span>09:41</span>
                <div className="w-16 h-2 bg-[#222222] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#111111]" />
                </div>
                <span>100% 4G</span>
              </div>

              {/* Phone Display Screen */}
              <div className="bg-white min-h-[460px] p-4 flex flex-col justify-between border border-[#222222]">
                {/* Top Nav in Mobile App */}
                <div className="flex items-center justify-between border-b border-[#D9D9D9] pb-3 mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-5 h-5 bg-[#111111] text-white text-[10px] font-mono flex items-center justify-center font-bold">
                      KU
                    </span>
                    <span className="font-bold text-xs">KEUANGAN UMKM</span>
                  </div>
                  <span className="text-[10px] font-mono bg-[#F5F5F3] px-2 py-0.5 border border-[#D9D9D9]">
                    Kopi Berkah
                  </span>
                </div>

                {/* SCREEN 1: DASHBOARD */}
                {activeScreen === 'dashboard' && (
                  <div className="space-y-3">
                    <div className="bg-[#111111] text-white p-3.5">
                      <span className="text-[9px] font-mono text-[#D9D9D9] block uppercase">
                        TOTAL SALDO KAS
                      </span>
                      <div className="text-xl font-mono font-extrabold mt-0.5">
                        Rp 24.850.000
                      </div>
                      <div className="text-[9px] font-mono text-[#D9D9D9] mt-1.5 pt-1.5 border-t border-[#333333] flex justify-between">
                        <span>Pemasukan: Rp 38.5jt</span>
                        <span>Beban: Rp 13.6jt</span>
                      </div>
                    </div>

                    <div className="p-3 bg-[#F5F5F3] border border-[#D9D9D9]">
                      <div className="flex justify-between text-[10px] font-mono mb-1">
                        <span className="font-bold">TARGET BULANAN</span>
                        <span className="font-bold">78%</span>
                      </div>
                      <div className="w-full h-2 bg-white border border-[#D9D9D9]">
                        <div className="h-full bg-[#111111] w-[78%]" />
                      </div>
                    </div>

                    <div>
                      <div className="text-[10px] font-mono font-bold uppercase mb-1">
                        Transaksi Hari Ini
                      </div>
                      <div className="divide-y divide-[#D9D9D9] border border-[#D9D9D9] text-xs">
                        <div className="p-2 flex justify-between bg-white">
                          <span className="truncate pr-2">Penjualan Toko</span>
                          <span className="font-mono font-bold">+Rp 2.500.000</span>
                        </div>
                        <div className="p-2 flex justify-between bg-white">
                          <span className="truncate pr-2">Bahan Kemasan</span>
                          <span className="font-mono font-bold">-Rp 750.000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* SCREEN 2: TRANSAKSI */}
                {activeScreen === 'transaksi' && (
                  <div className="space-y-2.5">
                    <div className="text-xs font-mono font-bold uppercase text-[#111111]">
                      Catat Transaksi Cepat
                    </div>
                    <div className="grid grid-cols-2 gap-1 text-[11px] font-mono">
                      <div className="p-1.5 bg-[#111111] text-white text-center font-bold">
                        + Pemasukan
                      </div>
                      <div className="p-1.5 bg-white border border-[#D9D9D9] text-center text-[#666666]">
                        - Pengeluaran
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono text-[#666666] block">NOMINAL</span>
                      <div className="p-2 bg-[#F5F5F3] border border-[#111111] text-sm font-mono font-bold">
                        Rp 1.500.000
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono text-[#666666] block">KATEGORI</span>
                      <div className="p-2 bg-[#F5F5F3] border border-[#D9D9D9] text-xs">
                        Penjualan Produk
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono text-[#666666] block">KETERANGAN</span>
                      <div className="p-2 bg-[#F5F5F3] border border-[#D9D9D9] text-xs text-[#666666]">
                        Catering makan siang 30 boks
                      </div>
                    </div>

                    <button
                      type="button"
                      className="w-full py-2 bg-[#111111] text-white text-xs font-mono font-bold uppercase"
                    >
                      Simpan Transaksi
                    </button>
                  </div>
                )}

                {/* SCREEN 3: RENCANA */}
                {activeScreen === 'rencana' && (
                  <div className="space-y-3">
                    <div className="text-xs font-mono font-bold uppercase text-[#111111]">
                      Pagu September 2026
                    </div>
                    <div className="p-3 bg-[#F5F5F3] border border-[#D9D9D9] space-y-2">
                      <div className="flex justify-between text-xs">
                        <span>Target Omzet</span>
                        <strong className="font-mono">Rp 40jt</strong>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>Batas Beban</span>
                        <strong className="font-mono">Rp 25jt</strong>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>Target Tabungan</span>
                        <strong className="font-mono">Rp 5jt</strong>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-[10px] font-mono">
                        <span>Bahan Baku: 84%</span>
                        <span>Sisa Rp 1.6jt</span>
                      </div>
                      <div className="w-full h-2 bg-white border border-[#D9D9D9]">
                        <div className="h-full bg-[#111111] w-[84%]" />
                      </div>
                    </div>
                  </div>
                )}

                {/* SCREEN 4: LAPORAN */}
                {activeScreen === 'laporan' && (
                  <div className="space-y-3">
                    <div className="text-xs font-mono font-bold uppercase text-[#111111]">
                      Ringkasan Kas Bulanan
                    </div>
                    <div className="p-3 bg-[#111111] text-white text-xs font-mono space-y-1">
                      <div>Omzet: Rp 38.500.000</div>
                      <div>Beban: Rp 13.650.000</div>
                      <div className="pt-1 border-t border-[#333333] font-bold">
                        Laba Bersih: Rp 24.850.000
                      </div>
                    </div>
                    <div className="p-3 bg-[#F5F5F3] border border-[#D9D9D9] text-[11px] space-y-1">
                      <div className="font-bold text-[#111111]">Rekomendasi Tindakan:</div>
                      <p className="text-[#666666]">
                        Arus kas surplus. Alokasikan 20% laba untuk cadangan ekspansi bulan depan.
                      </p>
                    </div>
                  </div>
                )}

                {/* Bottom App Navigation Bar inside phone */}
                <div className="pt-3 border-t border-[#D9D9D9] grid grid-cols-4 gap-1 text-[9px] font-mono text-center text-[#666666]">
                  <span className="text-[#111111] font-bold">Home</span>
                  <span>Kas</span>
                  <span>Plan</span>
                  <span>Profil</span>
                </div>
              </div>

              {/* Bottom bar indicator */}
              <div className="flex justify-center pt-3">
                <div className="w-24 h-1 bg-white/40" />
              </div>
            </div>
          </div>

          {/* Right Callouts (3 cols) */}
          <div className="lg:col-span-3 space-y-6 order-3">
            <div className="p-5 bg-white border border-[#111111] shadow-[3px_3px_0px_0px_#111111]">
              <span className="font-mono text-xs font-bold text-[#666666] uppercase block mb-1">
                LABEL 03
              </span>
              <h3 className="text-base font-bold text-[#111111] mb-1">
                Offline-Safe & Cepat
              </h3>
              <p className="text-xs text-[#666666] leading-relaxed">
                Beban halaman sangat ringan tanpa pustaka grafis berat, cepat dibuka meskipun di sinyal 3G.
              </p>
            </div>

            <div className="p-5 bg-white border border-[#111111] shadow-[3px_3px_0px_0px_#111111]">
              <span className="font-mono text-xs font-bold text-[#666666] uppercase block mb-1">
                LABEL 04
              </span>
              <h3 className="text-base font-bold text-[#111111] mb-1">
                Notifikasi Batas Pagu
              </h3>
              <p className="text-xs text-[#666666] leading-relaxed">
                Peringatan visual saat belanja mendekati pagu maksimal agar Anda tidak over-budget.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
