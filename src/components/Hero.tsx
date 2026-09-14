import { ArrowRight, Play, Check } from 'lucide-react';
import { HeroDashboard } from './HeroDashboard';
import { TransactionItem } from '../types';

interface HeroProps {
  saldo: number;
  pemasukan: number;
  pengeluaran: number;
  aset: number;
  transactions: TransactionItem[];
  onOpenAuth: (mode: 'masuk' | 'daftar') => void;
  onAddTransaction: () => void;
}

export function Hero({
  saldo,
  pemasukan,
  pengeluaran,
  aset,
  transactions,
  onOpenAuth,
  onAddTransaction,
}: HeroProps) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero-section"
      className="relative border-b border-[#111111] bg-[#F5F5F3] overflow-hidden"
    >
      {/* Swiss architectural grid background subtle lines */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Swiss Asymmetric Typography (Col 1-6) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111111] text-white text-xs font-mono font-semibold tracking-wider uppercase mb-6">
                <span className="w-1.5 h-1.5 bg-white" />
                KEUANGAN UMKM / FINANCIAL CONTROL
              </div>

              {/* H1 Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#111111] leading-[1.08] mb-6">
                Kelola Keuangan Usaha.
                <br />
                <span className="underline decoration-4 decoration-[#111111] underline-offset-8">
                  Lebih Jelas.
                </span>{' '}
                Lebih Terkontrol.
              </h1>

              {/* Supporting Headline */}
              <p className="text-lg sm:text-xl font-semibold text-[#222222] tracking-tight mb-4 leading-snug">
                Satu tempat untuk mencatat transaksi, memantau aset, mengelola investasi, dan merencanakan keuangan usaha.
              </p>

              {/* Supporting Paragraph */}
              <p className="text-base text-[#666666] leading-relaxed mb-8 max-w-xl">
                Keuangan UMKM membantu pemilik usaha melihat kondisi keuangan secara sederhana, memahami progres usaha, dan membuat rencana keuangan berikutnya tanpa pencatatan yang rumit.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10">
                <button
                  id="hero-primary-cta"
                  type="button"
                  onClick={() => onOpenAuth('daftar')}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#111111] text-white font-medium text-base hover:bg-[#222222] transition-colors border border-[#111111] shadow-[3px_3px_0px_0px_#666666] active:translate-x-[1px] active:translate-y-[1px]"
                >
                  <span>Mulai Kelola Keuangan</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  id="hero-secondary-cta"
                  type="button"
                  onClick={() => scrollToSection('cara-kerja')}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-[#111111] font-medium text-base border border-[#111111] hover:bg-[#F5F5F3] transition-colors"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Lihat Cara Kerja</span>
                </button>
              </div>

              {/* Quick credibility bullet tags */}
              <div className="pt-6 border-t border-[#D9D9D9] grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono text-[#222222]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#111111] shrink-0" />
                  <span>Tanpa Akuntansi Rumit</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#111111] shrink-0" />
                  <span>Optimal di Layar HP</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#111111] shrink-0" />
                  <span>Privasi Akun Terpisah</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Monochrome Dashboard Mockup (Col 7-12) */}
          <div className="lg:col-span-6 w-full">
            <HeroDashboard
              saldo={saldo}
              pemasukan={pemasukan}
              pengeluaran={pengeluaran}
              aset={aset}
              transactions={transactions}
              onAddTransaction={onAddTransaction}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
