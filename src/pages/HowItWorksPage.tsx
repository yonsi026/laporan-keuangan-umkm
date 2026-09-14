import { HowItWorks } from '../components/HowItWorks';
import { PageHeader } from '../components/PageHeader';
import { PagePagination } from '../components/PagePagination';
import { PageId } from '../types';
import { CheckCircle2, Zap, Shield, Sparkles } from 'lucide-react';

interface HowItWorksPageProps {
  onNavigate: (page: PageId) => void;
  onOpenAuth: (mode: 'masuk' | 'daftar') => void;
}

export function HowItWorksPage({ onNavigate, onOpenAuth }: HowItWorksPageProps) {
  const implementationGuides = [
    {
      title: 'Tanpa Instalasi Rumit',
      desc: 'Buka via peramban web HP atau laptop. Langsung login tanpa mengunduh file APK atau aplikasi berat.',
      icon: Zap,
    },
    {
      title: 'Standar Akuntansi Sederhana',
      desc: 'Diformulasikan sesuai kebiasaan pemilik toko dan gerai, memisahkan uang pribadi dan kas bisnis.',
      icon: CheckCircle2,
    },
    {
      title: 'Pencadangan Otomatis',
      desc: 'Setiap transaksi tersimpan dengan aman di server cloud sehingga tidak hilang jika HP rusak atau ganti nomor.',
      icon: Shield,
    },
    {
      title: 'Keputusan Bisnis Lebih Tajam',
      desc: 'Grafik dan evaluasi mingguan membantu Anda tahu kapan saat tepat menyetok barang atau menahan belanja.',
      icon: Sparkles,
    },
  ];

  return (
    <div>
      <PageHeader
        pageCode="03 — CARA KERJA"
        title="Mulai Rapikan Keuangan dalam 4 Langkah."
        subtitle="Dari pendaftaran kilat, pencatatan harian, hingga penentuan pagu bulanan yang mudah dipahami siapa saja."
        currentPage="cara-kerja"
        onNavigate={onNavigate}
        prevPage={{ id: 'preview', label: '02 / Preview' }}
        nextPage={{ id: 'perencanaan', label: '04 / Perencanaan' }}
        actionButton={{
          label: 'Mulai Langkah 1 Sekarang',
          onClick: () => onOpenAuth('daftar'),
        }}
      />

      <HowItWorks onOpenAuth={onOpenAuth} />

      {/* Editorial Implementation Principles */}
      <section className="bg-white border-b border-[#111111] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-[#666666] uppercase tracking-widest block mb-2">
              PANDUAN PRAKTIS IMPLEMENTASI
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#111111] tracking-tight">
              Kunci disiplin keuangan untuk pemilik usaha mikro.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {implementationGuides.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 bg-[#F5F5F3] border border-[#111111] flex flex-col justify-between shadow-[2px_2px_0px_0px_#111111]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-8 h-8 bg-white border border-[#111111] flex items-center justify-center">
                        <IconComp className="w-4 h-4 text-[#111111]" />
                      </div>
                      <span className="font-mono text-xs text-[#666666]">#0{idx + 1}</span>
                    </div>
                    <h3 className="font-bold text-base text-[#111111] mb-2">{item.title}</h3>
                    <p className="text-xs text-[#666666] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <PagePagination
        currentPage="cara-kerja"
        onNavigate={onNavigate}
        prevPage={{
          id: 'preview',
          title: 'Preview Sistem & Ponsel',
          subtitle: 'Kembali melihat antarmuka dan responsivitas layar HP',
        }}
        nextPage={{
          id: 'perencanaan',
          title: 'Perencanaan & Target',
          subtitle: 'Lihat simulasi pagu anggaran dan tabel rencana vs realita',
        }}
      />
    </div>
  );
}
