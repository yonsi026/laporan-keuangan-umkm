import { Hero } from '../components/Hero';
import { TrustStatement } from '../components/TrustStatement';
import { ProblemSection } from '../components/ProblemSection';
import { SolutionSection } from '../components/SolutionSection';
import { CTASection } from '../components/CTASection';
import { TransactionItem, PageId } from '../types';
import { ArrowRight, Layers, SlidersHorizontal, Compass, ShieldCheck, BarChart3 } from 'lucide-react';

interface HomePageProps {
  saldo: number;
  pemasukan: number;
  pengeluaran: number;
  aset: number;
  transactions: TransactionItem[];
  onOpenAuth: (mode: 'masuk' | 'daftar') => void;
  onAddTransaction: () => void;
  onNavigate: (page: PageId) => void;
}

export function HomePage({
  saldo,
  pemasukan,
  pengeluaran,
  aset,
  transactions,
  onOpenAuth,
  onAddTransaction,
  onNavigate,
}: HomePageProps) {
  const directoryCards: Array<{
    page: PageId;
    code: string;
    title: string;
    description: string;
    icon: typeof Layers;
  }> = [
    {
      page: 'fitur',
      code: '01',
      title: 'Fitur & Transaksi',
      description: 'Pencatatan kas masuk & keluar, daftar portofolio investasi, dan inventaris aset usaha.',
      icon: Layers,
    },
    {
      page: 'preview',
      code: '02',
      title: 'Preview Sistem',
      description: 'Simulasi interaktif dashboard desktop dan smartphone untuk operasional gerai.',
      icon: SlidersHorizontal,
    },
    {
      page: 'cara-kerja',
      code: '03',
      title: 'Cara Kerja',
      description: 'Alur 4 tahap implementasi pembukuan tanpa instalasi aplikasi berat.',
      icon: Compass,
    },
    {
      page: 'perencanaan',
      code: '04',
      title: 'Perencanaan Finansial',
      description: 'Penetapan target omzet, pagu belanja, dan tabel evaluasi Rencana vs Realita.',
      icon: BarChart3,
    },
    {
      page: 'laporan',
      code: '05',
      title: 'Laporan & Tren',
      description: 'Rekapitulasi keuangan bulanan, visualisasi grafik monokrom, dan ekspor laporan.',
      icon: BarChart3,
    },
    {
      page: 'keamanan',
      code: '06',
      title: 'Keamanan Data',
      description: 'Jaminan privasi, autentikasi terlindungi, dan kedaulatan data pemilik akun.',
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="space-y-0">
      {/* Hero */}
      <Hero
        saldo={saldo}
        pemasukan={pemasukan}
        pengeluaran={pengeluaran}
        aset={aset}
        transactions={transactions}
        onOpenAuth={onOpenAuth}
        onAddTransaction={onAddTransaction}
      />

      {/* Trust statement */}
      <TrustStatement />

      {/* Directory of Separate Pages */}
      <section className="bg-white border-b border-[#111111] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#666666] tracking-widest uppercase mb-2">
              <span className="w-6 h-[1.5px] bg-[#111111]" />
              NAVIGASI HALAMAN TERPISAH
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#111111] tracking-tight">
              Jelajahi setiap modul per halaman khusus.
            </h2>
            <p className="text-base text-[#666666] mt-3">
              Setiap halaman dirancang fokus pada fungsi spesifik tanpa distraksi informasi berlebihan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {directoryCards.map((card) => {
              const IconComp = card.icon;
              return (
                <button
                  key={card.page}
                  type="button"
                  onClick={() => onNavigate(card.page)}
                  className="bg-[#F5F5F3] border border-[#111111] p-6 text-left hover:bg-white transition-all shadow-[3px_3px_0px_0px_#111111] hover:-translate-y-1 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-white bg-[#111111] px-2 py-0.5">
                        HALAMAN {card.code}
                      </span>
                      <IconComp className="w-5 h-5 text-[#111111]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#111111] group-hover:underline">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#666666] mt-2 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-[#D9D9D9] flex items-center justify-between text-xs font-mono font-bold text-[#111111]">
                    <span>Buka Halaman {card.title}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Problem */}
      <ProblemSection />

      {/* Solution Overview */}
      <SolutionSection />

      {/* CTA */}
      <CTASection onOpenAuth={onOpenAuth} />
    </div>
  );
}
