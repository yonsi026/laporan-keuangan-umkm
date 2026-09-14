import { PageId } from '../types';

interface FooterProps {
  onOpenAuth: (mode: 'masuk' | 'daftar') => void;
  onNavigate: (page: PageId) => void;
  currentPage: PageId;
}

export function Footer({ onOpenAuth, onNavigate, currentPage }: FooterProps) {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-white border-t border-[#111111] text-[#111111] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12">
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <button
              type="button"
              onClick={() => handleNav('beranda')}
              className="flex items-center gap-3 text-left group"
            >
              <span className="w-8 h-8 bg-[#111111] text-white font-mono font-bold text-sm flex items-center justify-center border border-[#111111] group-hover:bg-[#333333] transition-colors">
                KU
              </span>
              <span className="font-bold text-lg tracking-tight uppercase">
                Keuangan UMKM
              </span>
            </button>
            <p className="text-sm text-[#666666] max-w-sm leading-relaxed">
              Platform pembukuan dan perencanaan keuangan khusus UMKM. Dirancang dalam halaman terpisah agar pemilik usaha dapat fokus menuntaskan setiap aspek finansial.
            </p>
            <div className="pt-2 text-xs font-mono text-[#666666]">
              Sistem Navigasi Multi-Halaman &bull; Swiss International Style
            </div>
          </div>

          {/* Navigation Columns (7 cols) */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Halaman Produk */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#111111] mb-4">
                HALAMAN SISTEM
              </h4>
              <ul className="space-y-2.5 text-sm text-[#666666]">
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('beranda')}
                    className={`hover:text-[#000000] transition-colors ${
                      currentPage === 'beranda' ? 'font-bold text-[#111111] underline' : ''
                    }`}
                  >
                    00. Beranda Utama
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('fitur')}
                    className={`hover:text-[#000000] transition-colors ${
                      currentPage === 'fitur' ? 'font-bold text-[#111111] underline' : ''
                    }`}
                  >
                    01. Fitur & Transaksi
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('preview')}
                    className={`hover:text-[#000000] transition-colors ${
                      currentPage === 'preview' ? 'font-bold text-[#111111] underline' : ''
                    }`}
                  >
                    02. Preview Sistem
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('cara-kerja')}
                    className={`hover:text-[#000000] transition-colors ${
                      currentPage === 'cara-kerja' ? 'font-bold text-[#111111] underline' : ''
                    }`}
                  >
                    03. Cara Kerja
                  </button>
                </li>
              </ul>
            </div>

            {/* Analisis & Kontrol */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#111111] mb-4">
                ANALISIS & KONTROL
              </h4>
              <ul className="space-y-2.5 text-sm text-[#666666]">
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('perencanaan')}
                    className={`hover:text-[#000000] transition-colors ${
                      currentPage === 'perencanaan' ? 'font-bold text-[#111111] underline' : ''
                    }`}
                  >
                    04. Perencanaan
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('laporan')}
                    className={`hover:text-[#000000] transition-colors ${
                      currentPage === 'laporan' ? 'font-bold text-[#111111] underline' : ''
                    }`}
                  >
                    05. Laporan & Tren
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNav('keamanan')}
                    className={`hover:text-[#000000] transition-colors ${
                      currentPage === 'keamanan' ? 'font-bold text-[#111111] underline' : ''
                    }`}
                  >
                    06. Keamanan Data
                  </button>
                </li>
              </ul>
            </div>

            {/* Akun */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#111111] mb-4">
                AKSES AKUN
              </h4>
              <ul className="space-y-2.5 text-sm text-[#666666]">
                <li>
                  <button
                    type="button"
                    onClick={() => onOpenAuth('masuk')}
                    className="hover:text-[#000000] hover:underline"
                  >
                    Masuk ke Akun
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onOpenAuth('daftar')}
                    className="hover:text-[#000000] hover:underline"
                  >
                    Registrasi Toko Baru
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Thin Horizontal Divider & Copyright */}
        <div className="pt-8 border-t border-[#D9D9D9] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#666666] gap-4">
          <div>
            &copy; 2026 Keuangan UMKM. Hak cipta dilindungi undang-undang.
          </div>
          <div className="flex items-center gap-6">
            <span>Privasi & Kebijakan Data</span>
            <span>Made for Indonesian UMKM</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
