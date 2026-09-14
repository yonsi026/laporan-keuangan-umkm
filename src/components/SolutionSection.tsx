import { useState, ReactNode } from 'react';
import { ArrowLeftRight, TrendingUp, Landmark, CalendarRange, FileText, Check } from 'lucide-react';
import { solutionModules } from '../data/content';

export function SolutionSection() {
  const [activeModule, setActiveModule] = useState('transaksi');

  const iconsMap: Record<string, ReactNode> = {
    transaksi: <ArrowLeftRight className="w-5 h-5" />,
    investasi: <TrendingUp className="w-5 h-5" />,
    aset: <Landmark className="w-5 h-5" />,
    rencana: <CalendarRange className="w-5 h-5" />,
    laporan: <FileText className="w-5 h-5" />,
  };

  const modulePreviews: Record<string, { title: string; subtitle: string; preview: string[]; stat: string; statLabel: string }> = {
    transaksi: {
      title: 'Buku Kas Digital Cepat',
      subtitle: 'Catat pemasukan dan pengeluaran harian dalam hitungan detik tanpa rumus rumit.',
      preview: [
        'Input nominal, pilih kategori (Penjualan, Bahan Baku, Operasional)',
        'Unggah atau ketik keterangan transaksi untuk rujukan audit',
        'Otomatis memperbarui saldo berjalan dan metrik mingguan'
      ],
      stat: '5 Detik',
      statLabel: 'Rata-rata waktu pencatatan transaksi dari HP'
    },
    investasi: {
      title: 'Pemantauan Modal & Portofolio Usaha',
      subtitle: 'Pantau dana cadangan, ekspansi cabang, dan deposito operasional.',
      preview: [
        'Kategorisasi investasi jangka pendek vs jangka panjang',
        'Penyesuaian nilai pasar terkini secara periodik',
        'Grafik pertumbuhan imbal hasil modal kerja'
      ],
      stat: '+12.4%',
      statLabel: 'Rata-rata kenaikan nilai cadangan terkelola'
    },
    aset: {
      title: 'Katalog Aset & Inventaris Fisik',
      subtitle: 'Ketahui semua mesin, kendaraan operasional, dan alat produksi yang dimiliki.',
      preview: [
        'Pencatatan nilai beli (harga perolehan) dan nilai buku saat ini',
        'Pantau kondisi kelayakan alat (Sangat Baik, Baik, Butuh Servis)',
        'Menghitung total kekayaan bersih usaha (Net Worth Usaha)'
      ],
      stat: '100%',
      statLabel: 'Transparansi total modal fisik terinventaris'
    },
    rencana: {
      title: 'Pagu Anggaran & Target Bulanan',
      subtitle: 'Rencanakan pemasukan dan batas maksimal belanja sebelum tanggal 1 setiap bulan.',
      preview: [
        'Tetapkan target omzet penjualan realistis',
        'Batas pengeluaran per kategori (Bahan baku, gaji, logistik)',
        'Target tabungan cadangan darurat usaha'
      ],
      stat: '1 Pagu',
      statLabel: 'Menghindarkan pengeluaran impulsif tanpa rencana'
    },
    laporan: {
      title: 'Laporan Rekapitulasi Otomatis',
      subtitle: 'Laporan bulanan bersih siap cetak atau dibagikan ke mitra bisnis dan perbankan.',
      preview: [
        'Laporan laba kotor & kas bersih per bulan',
        'Tren arus kas multi-bulan dalam grafik monokrom',
        'Ringkasan eksekutif untuk evaluasi pengambilan keputusan'
      ],
      stat: '1 Klik',
      statLabel: 'Ekspor ringkasan neraca kas UMKM'
    }
  };

  const currentPreview = modulePreviews[activeModule];

  return (
    <section
      id="solution-section"
      className="bg-white border-b border-[#111111] py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#666666] tracking-widest uppercase mb-3">
            <span className="w-6 h-[1.5px] bg-[#111111]" />
            SOLUSI TERINTEGRASI
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#111111] tracking-tight leading-[1.15] mb-4">
            Satu dashboard untuk memahami seluruh keuangan usaha.
          </h2>
          <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
            Keuangan UMKM menyatukan pencatatan transaksi, investasi, aset, perencanaan, dan laporan dalam satu sistem yang sederhana.
          </p>
        </div>

        {/* Modular Grid with Interactive Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-[#111111] divide-y lg:divide-y-0 lg:divide-x divide-[#111111]">
          {/* Left: 5 Modules Selector (5 columns) */}
          <div className="lg:col-span-5 divide-y divide-[#D9D9D9] bg-[#F5F5F3]">
            {solutionModules.map((module) => {
              const isSelected = activeModule === module.id;
              return (
                <button
                  key={module.id}
                  type="button"
                  onClick={() => setActiveModule(module.id)}
                  className={`w-full p-5 sm:p-6 text-left transition-colors flex items-start gap-4 focus:outline-none ${
                    isSelected
                      ? 'bg-white text-[#111111] shadow-[inset_4px_0px_0px_0px_#111111]'
                      : 'hover:bg-[#EBEBEA] text-[#222222]'
                  }`}
                >
                  <div
                    className={`p-2.5 border ${
                      isSelected
                        ? 'bg-[#111111] text-white border-[#111111]'
                        : 'bg-white text-[#111111] border-[#D9D9D9]'
                    }`}
                  >
                    {iconsMap[module.id]}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-xs font-bold tracking-wider uppercase text-[#666666]">
                        {module.code}
                      </span>
                      <span className="font-mono text-xs font-semibold text-[#111111]">
                        {module.name}
                      </span>
                    </div>
                    <div className="text-base font-bold text-[#111111] mb-1">
                      {module.title}
                    </div>
                    <p className="text-xs text-[#666666] line-clamp-2 leading-relaxed">
                      {module.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Active Module Visual Demonstration (7 columns) */}
          <div className="lg:col-span-7 p-6 sm:p-10 bg-white flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#D9D9D9] pb-4 mb-6">
                <div>
                  <span className="text-xs font-mono tracking-widest text-[#666666] uppercase">
                    DETAIL ARSITEKTUR MODUL
                  </span>
                  <h3 className="text-2xl font-black text-[#111111] mt-1">
                    {currentPreview.title}
                  </h3>
                </div>
                <div className="hidden sm:block text-right">
                  <span className="text-2xl font-mono font-bold text-[#111111]">
                    {currentPreview.stat}
                  </span>
                  <div className="text-[10px] font-mono text-[#666666]">
                    {currentPreview.statLabel}
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#222222] mb-6 leading-relaxed">
                {currentPreview.subtitle}
              </p>

              {/* Functional Preview Checkpoints */}
              <div className="space-y-3 mb-8">
                {currentPreview.preview.map((line, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-[#F5F5F3] border border-[#D9D9D9] flex items-start gap-3"
                  >
                    <div className="w-5 h-5 bg-[#111111] text-white flex items-center justify-center shrink-0 mt-0.5 text-xs">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-[#111111] leading-tight">
                      {line}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Micro Dashboard Strip */}
            <div className="p-4 bg-[#111111] text-white border border-[#111111]">
              <div className="flex items-center justify-between text-xs font-mono text-[#D9D9D9] mb-2">
                <span>STATUS INTEGRASI MODUL</span>
                <span>AKTIF & SINKRON</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold tracking-tight">
                  Semua transaksi langsung tercermin di laporan & aset
                </span>
                <span className="font-mono text-xs underline cursor-pointer hover:text-white">
                  Otomatis
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
