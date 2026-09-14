import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Plus, ChevronRight } from 'lucide-react';
import { PageId } from '../types';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenAuth: (mode: 'masuk' | 'daftar') => void;
  onOpenNewTransaction: () => void;
  saldo: number;
}

export function Navbar({
  currentPage,
  onNavigate,
  onOpenAuth,
  onOpenNewTransaction,
  saldo,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: Array<{ id: PageId; code: string; label: string }> = [
    { id: 'beranda', code: '00', label: 'Beranda' },
    { id: 'fitur', code: '01', label: 'Fitur' },
    { id: 'preview', code: '02', label: 'Preview' },
    { id: 'cara-kerja', code: '03', label: 'Cara Kerja' },
    { id: 'perencanaan', code: '04', label: 'Perencanaan' },
    { id: 'laporan', code: '05', label: 'Laporan' },
    { id: 'keamanan', code: '06', label: 'Keamanan' },
  ];

  const currentPageObj = navItems.find((item) => item.id === currentPage) || navItems[0];

  const handleItemClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formattedSaldo = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(saldo);

  return (
    <header
      id="main-navbar"
      className={`sticky top-0 z-40 w-full bg-white transition-all duration-200 ${
        scrolled ? 'shadow-[0_2px_0px_0px_#111111]' : ''
      }`}
    >
      {/* 1. Main Navigation Bar */}
      <div className="border-b border-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <button
              type="button"
              id="brand-logo"
              onClick={() => handleItemClick('beranda')}
              className="flex items-center gap-3 text-left group focus:outline-none"
            >
              <span className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 bg-[#111111] text-white font-mono font-bold text-sm tracking-tighter border border-[#111111] group-hover:bg-[#333333] transition-colors">
                KU
              </span>
              <div className="flex flex-col">
                <span className="font-bold text-base sm:text-lg tracking-tight text-[#111111] uppercase leading-none">
                  Keuangan UMKM
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[#666666] uppercase mt-0.5">
                  Financial Control
                </span>
              </div>
            </button>

            {/* Desktop Navigation Tabs */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Navigasi Halaman">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    id={`nav-tab-${item.id}`}
                    type="button"
                    onClick={() => handleItemClick(item.id)}
                    className={`px-3 py-1.5 text-xs font-mono font-bold transition-all relative flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-[#111111] text-white shadow-[2px_2px_0px_0px_#666666]'
                        : 'text-[#333333] hover:text-[#000000] hover:bg-[#F5F5F3]'
                    }`}
                  >
                    <span className={isActive ? 'text-white/60' : 'text-[#888888]'}>
                      {item.code}
                    </span>
                    <span className="font-sans font-medium text-sm tracking-tight">
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </nav>

            {/* Right Side Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                type="button"
                onClick={onOpenNewTransaction}
                className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold text-[#111111] bg-[#F5F5F3] border border-[#111111] hover:bg-white transition-colors"
                title="Catat Pemasukan atau Pengeluaran Cepat"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>+ Transaksi</span>
              </button>

              <button
                id="navbar-btn-login"
                type="button"
                onClick={() => onOpenAuth('masuk')}
                className="px-3.5 py-1.5 text-xs font-mono font-bold text-[#111111] bg-white border border-[#D9D9D9] hover:border-[#111111] hover:bg-[#F5F5F3] transition-colors"
              >
                Masuk
              </button>
              <button
                id="navbar-btn-cta"
                type="button"
                onClick={() => onOpenAuth('daftar')}
                className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-mono font-bold text-white bg-[#111111] border border-[#111111] hover:bg-[#222222] transition-colors"
              >
                <span>Daftar</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile menu hamburger toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={onOpenNewTransaction}
                className="p-1.5 bg-[#111111] text-white text-xs font-mono font-bold sm:hidden"
                aria-label="Catat Transaksi"
              >
                <Plus className="w-4 h-4" />
              </button>

              <button
                id="navbar-mobile-toggle"
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#111111] hover:bg-[#F5F5F3] border border-[#111111]"
                aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Contextual Sub-Navbar / Page Identity Bar */}
      <div className="bg-[#F5F5F3] border-b border-[#D9D9D9] px-4 sm:px-6 lg:px-8 py-2">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2 text-[#666666]">
            <span className="font-bold text-[#111111] uppercase tracking-wider">
              HALAMAN AKTIF:
            </span>
            <span className="inline-flex items-center gap-1 bg-[#111111] text-white px-2 py-0.5 font-bold">
              {currentPageObj.code} / {currentPageObj.label.toUpperCase()}
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-[#999999]" />
            <span className="hidden sm:inline text-[#666666]">
              {currentPage === 'beranda' && 'Ikhtisar & Masalah UMKM'}
              {currentPage === 'fitur' && 'Pencatatan Arus Kas & Aset'}
              {currentPage === 'preview' && 'Simulasi Desktop & Ponsel'}
              {currentPage === 'cara-kerja' && 'Panduan 4 Langkah Implementasi'}
              {currentPage === 'perencanaan' && 'Worksheet Pagu & Evaluasi Variansi'}
              {currentPage === 'laporan' && 'Rekapitulasi & Grafik Tren'}
              {currentPage === 'keamanan' && 'Kedaulatan & Perlindungan Data'}
            </span>
          </div>

          <div className="flex items-center gap-4 text-[#666666]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#111111] animate-pulse" />
              <span className="hidden md:inline">Kas Berjalan:</span>
              <strong className="text-[#111111] font-bold">{formattedSaldo}</strong>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b-2 border-[#111111] bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="text-[11px] font-mono text-[#666666] uppercase tracking-wider pb-2 mb-2 border-b border-[#D9D9D9]">
            PILIH HALAMAN TERPISAH
          </div>
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleItemClick(item.id)}
                  className={`px-3 py-2.5 text-left text-sm font-medium flex items-center justify-between border transition-colors ${
                    isActive
                      ? 'bg-[#111111] text-white border-[#111111] font-bold'
                      : 'bg-white text-[#111111] border-[#E5E5E5] hover:bg-[#F5F5F3]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs opacity-75">
                      {item.code}
                    </span>
                    <span>{item.label}</span>
                  </div>
                  {isActive ? (
                    <span className="text-[10px] font-mono uppercase bg-white text-[#111111] px-1.5 py-0.5 font-bold">
                      Aktif
                    </span>
                  ) : (
                    <ChevronRight className="w-4 h-4 text-[#888888]" />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="pt-4 mt-3 border-t border-[#D9D9D9] flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenNewTransaction();
              }}
              className="w-full py-2.5 text-center text-xs font-mono font-bold uppercase text-[#111111] bg-[#F5F5F3] border border-[#111111]"
            >
              + Catat Transaksi Baru
            </button>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth('masuk');
                }}
                className="py-2.5 text-center text-xs font-mono font-bold uppercase text-[#111111] bg-white border border-[#111111]"
              >
                Masuk
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth('daftar');
                }}
                className="py-2.5 text-center text-xs font-mono font-bold uppercase text-white bg-[#111111] border border-[#111111]"
              >
                Daftar
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
