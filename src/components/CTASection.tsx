import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface CTASectionProps {
  onOpenAuth: (mode: 'masuk' | 'daftar') => void;
}

export function CTASection({ onOpenAuth }: CTASectionProps) {
  return (
    <section
      id="cta-section"
      className="bg-[#000000] text-white py-20 sm:py-32 border-b border-[#222222] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-[#000000] text-xs font-mono font-bold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 bg-[#000000]" />
              LANGKAH BERIKUTNYA
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6">
              Mulai memahami keuangan usaha Anda.
            </h2>

            <p className="text-xl sm:text-2xl text-[#D9D9D9] font-light leading-relaxed mb-4">
              Catat. Pantau. Rencanakan. Semua dalam satu tempat.
            </p>

            <p className="text-sm sm:text-base text-[#666666] font-mono mb-8">
              Kelola keuangan usaha dengan lebih sederhana.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                id="cta-btn-start"
                type="button"
                onClick={() => onOpenAuth('daftar')}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#000000] font-bold text-base hover:bg-[#D9D9D9] transition-colors border border-white"
              >
                <span>Mulai Sekarang</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => onOpenAuth('masuk')}
                className="flex items-center justify-center px-8 py-4 bg-transparent text-white font-medium text-base border border-[#666666] hover:border-white transition-colors"
              >
                <span>Masuk ke Akun Saya</span>
              </button>
            </div>
          </div>

          {/* Right Visual Summary Box */}
          <div className="lg:col-span-4 border border-[#333333] p-6 bg-[#111111] space-y-4 font-mono text-xs text-[#D9D9D9]">
            <div className="text-xs uppercase tracking-widest text-[#666666] border-b border-[#333333] pb-2 font-bold">
              KEUNGGULAN UTAMA
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
              <span>Pencatatan kas masuk & keluar dalam hitungan detik</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
              <span>Batas pagu anggaran bulanan pencegah defisit modal</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
              <span>Katalog aset & pantau pertumbuhan nilai investasi</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
              <span>Aman, privat, dan dirancang optimal untuk layar HP</span>
            </div>
            <div className="pt-3 border-t border-[#333333] text-[11px] text-[#666666]">
              Telah digunakan oleh ratusan pemilik gerai, toko online, dan workshop UMKM di Indonesia.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
