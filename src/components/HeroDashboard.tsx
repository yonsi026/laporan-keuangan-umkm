import { ArrowDownLeft, ArrowUpRight, TrendingUp, Plus, CheckCircle2 } from 'lucide-react';
import { TransactionItem } from '../types';
import { formatRupiah } from '../data/content';

interface HeroDashboardProps {
  saldo: number;
  pemasukan: number;
  pengeluaran: number;
  aset: number;
  transactions: TransactionItem[];
  onAddTransaction: () => void;
}

export function HeroDashboard({
  saldo,
  pemasukan,
  pengeluaran,
  aset,
  transactions,
  onAddTransaction,
}: HeroDashboardProps) {
  // 4-week chart data for the mini chart in hero
  const chartWeeks = [
    { week: 'M1', income: 7200000, expense: 3100000 },
    { week: 'M2', income: 9400000, expense: 3400000 },
    { week: 'M3', income: 11100000, expense: 3950000 },
    { week: 'M4', income: 10800000, expense: 3200000 },
  ];
  const maxAmount = 12000000;

  // Monthly plan progress
  const targetIncome = 40000000;
  const progressPercent = Math.min(100, Math.round((pemasukan / targetIncome) * 100));

  return (
    <div
      id="hero-dashboard-mockup"
      className="w-full bg-white border border-[#111111] p-4 sm:p-6 shadow-[4px_4px_0px_0px_#111111] relative"
    >
      {/* App window titlebar in Swiss editorial fashion */}
      <div className="flex items-center justify-between border-b border-[#D9D9D9] pb-3 mb-5">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 bg-[#111111]" />
          <span className="font-mono text-xs font-semibold tracking-wider text-[#111111] uppercase">
            SISTEM KEUANGAN UMKM / VERSI 2.6
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[11px] font-mono font-medium bg-[#F5F5F3] text-[#222222] border border-[#D9D9D9]">
            <span className="w-1.5 h-1.5 bg-[#111111]" />
            LIVE DEMO
          </span>
          <button
            type="button"
            onClick={onAddTransaction}
            className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-white bg-[#111111] hover:bg-[#222222] transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>+ Catat</span>
          </button>
        </div>
      </div>

      {/* Saldo Usaha Hero Block */}
      <div className="bg-[#111111] text-white p-4 sm:p-5 mb-4 border border-[#111111]">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[11px] font-mono tracking-widest text-[#D9D9D9] uppercase">
            SALDO USAHA AKTIF
          </span>
          <span className="text-[11px] font-mono text-[#D9D9D9]">Per 13 Sep 2026</span>
        </div>
        <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-mono">
          {formatRupiah(saldo)}
        </div>
        <div className="flex items-center gap-2 mt-2 pt-2 border-t border-[#333333] text-xs text-[#D9D9D9]">
          <TrendingUp className="w-3.5 h-3.5 text-white" />
          <span>Kas bersih usaha siap operasional & cadangan likuid</span>
        </div>
      </div>

      {/* 3 Metric cards in strict grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
        <div className="p-3 bg-[#F5F5F3] border border-[#D9D9D9]">
          <div className="flex items-center justify-between text-[#666666] mb-1">
            <span className="text-[10px] font-mono uppercase tracking-wider">PEMASUKAN</span>
            <ArrowDownLeft className="w-3.5 h-3.5 text-[#111111]" />
          </div>
          <div className="text-base sm:text-lg font-bold font-mono text-[#111111]">
            {formatRupiah(pemasukan)}
          </div>
          <div className="text-[10px] font-mono text-[#666666] mt-0.5">Bulan berjalan</div>
        </div>

        <div className="p-3 bg-[#F5F5F3] border border-[#D9D9D9]">
          <div className="flex items-center justify-between text-[#666666] mb-1">
            <span className="text-[10px] font-mono uppercase tracking-wider">PENGELUARAN</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#111111]" />
          </div>
          <div className="text-base sm:text-lg font-bold font-mono text-[#111111]">
            {formatRupiah(pengeluaran)}
          </div>
          <div className="text-[10px] font-mono text-[#666666] mt-0.5">Terkontrol batas</div>
        </div>

        <div className="p-3 bg-[#F5F5F3] border border-[#D9D9D9]">
          <div className="flex items-center justify-between text-[#666666] mb-1">
            <span className="text-[10px] font-mono uppercase tracking-wider">NILAI ASET</span>
            <span className="text-[10px] font-mono text-[#111111]">4 Unit</span>
          </div>
          <div className="text-base sm:text-lg font-bold font-mono text-[#111111]">
            {formatRupiah(aset)}
          </div>
          <div className="text-[10px] font-mono text-[#666666] mt-0.5">Mesin & alat</div>
        </div>
      </div>

      {/* Monochrome Bar Chart: Pemasukan vs Pengeluaran */}
      <div className="p-4 bg-white border border-[#D9D9D9] mb-5">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#111111]">
              Pemasukan vs Pengeluaran (Mingguan)
            </h4>
            <p className="text-[11px] text-[#666666]">Perbandingan arus kas mingguan September</p>
          </div>
          <div className="flex items-center gap-3 text-[11px] font-mono">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 bg-[#111111]" /> Pemasukan
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 bg-[#D9D9D9] border border-[#666666]" /> Pengeluaran
            </span>
          </div>
        </div>

        {/* Custom Swiss monochrome bar visualization */}
        <div className="space-y-3 pt-2">
          {chartWeeks.map((item) => {
            const incPct = Math.round((item.income / maxAmount) * 100);
            const expPct = Math.round((item.expense / maxAmount) * 100);
            return (
              <div key={item.week} className="space-y-1">
                <div className="flex justify-between text-[10px] font-mono text-[#666666]">
                  <span className="font-bold text-[#111111]">{item.week}</span>
                  <span>
                    Masuk: {formatRupiah(item.income)} | Keluar: {formatRupiah(item.expense)}
                  </span>
                </div>
                <div className="h-4 w-full bg-[#F5F5F3] border border-[#D9D9D9] flex gap-1 p-0.5">
                  <div
                    style={{ width: `${incPct}%` }}
                    className="h-full bg-[#111111] transition-all duration-300"
                    title={`Pemasukan: ${formatRupiah(item.income)}`}
                  />
                  <div
                    style={{ width: `${expPct}%` }}
                    className="h-full bg-[#D9D9D9] border-l border-[#666666] transition-all duration-300"
                    title={`Pengeluaran: ${formatRupiah(item.expense)}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Progress Rencana Bulanan */}
      <div className="p-3.5 bg-[#F5F5F3] border border-[#D9D9D9] mb-4">
        <div className="flex items-center justify-between text-xs mb-1.5">
          <span className="font-bold uppercase tracking-wider text-[#111111]">
            Target Pemasukan September
          </span>
          <span className="font-mono font-bold text-[#111111]">{progressPercent}%</span>
        </div>
        <div className="w-full h-2.5 bg-white border border-[#D9D9D9] overflow-hidden">
          <div
            className="h-full bg-[#111111] transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <div className="flex justify-between text-[10px] font-mono text-[#666666] mt-1.5">
          <span>Tercapai: {formatRupiah(pemasukan)}</span>
          <span>Target: {formatRupiah(targetIncome)}</span>
        </div>
      </div>

      {/* Recent Transactions List */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#111111]">
            Transaksi Terbaru
          </span>
          <span className="text-[11px] font-mono text-[#666666]">
            {transactions.length} tercatat
          </span>
        </div>
        <div className="divide-y divide-[#D9D9D9] border border-[#D9D9D9]">
          {transactions.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="p-2.5 bg-white flex items-center justify-between text-xs hover:bg-[#F5F5F3] transition-colors"
            >
              <div className="flex items-center gap-2 min-w-0 pr-2">
                <span
                  className={`w-4 h-4 text-[10px] font-mono flex items-center justify-center font-bold border ${
                    item.type === 'pemasukan'
                      ? 'bg-[#111111] text-white border-[#111111]'
                      : 'bg-white text-[#111111] border-[#111111]'
                  }`}
                >
                  {item.type === 'pemasukan' ? '+' : '-'}
                </span>
                <div className="truncate">
                  <div className="font-medium text-[#111111] truncate">{item.title}</div>
                  <div className="text-[10px] font-mono text-[#666666]">{item.category} • {item.date}</div>
                </div>
              </div>
              <div className="text-right font-mono font-bold whitespace-nowrap">
                {item.type === 'pemasukan' ? '+' : '-'} {formatRupiah(item.amount)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Live interaction hint */}
      <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#666666] pt-2 border-t border-[#D9D9D9]">
        <span className="flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#111111]" /> Data tersinkronisasi lokal
        </span>
        <button
          type="button"
          onClick={onAddTransaction}
          className="text-[#111111] underline hover:no-underline font-semibold"
        >
          Coba Tambah Transaksi &rarr;
        </button>
      </div>
    </div>
  );
}
