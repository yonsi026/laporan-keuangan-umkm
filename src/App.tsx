import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { TransactionModal } from './components/TransactionModal';
import { AuthModal } from './components/AuthModal';
import { initialTransactions } from './data/content';
import { TransactionItem, PageId } from './types';

// Individual Separated Pages
import { HomePage } from './pages/HomePage';
import { FeaturesPage } from './pages/FeaturesPage';
import { PreviewPage } from './pages/PreviewPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { PlanningPage } from './pages/PlanningPage';
import { ReportPage } from './pages/ReportPage';
import { SecurityPage } from './pages/SecurityPage';

const validPages: PageId[] = [
  'beranda',
  'fitur',
  'preview',
  'cara-kerja',
  'perencanaan',
  'laporan',
  'keamanan',
];

export default function App() {
  // Page routing state
  const [currentPage, setCurrentPage] = useState<PageId>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (validPages.includes(hash)) {
        return hash;
      }
    }
    return 'beranda';
  });

  // Live financial state for the interactive product demo
  const [saldo, setSaldo] = useState<number>(24850000);
  const [pemasukan, setPemasukan] = useState<number>(38500000);
  const [pengeluaran, setPengeluaran] = useState<number>(13650000);
  const [aset] = useState<number>(42300000);
  const [transactions, setTransactions] = useState<TransactionItem[]>(initialTransactions);

  // Modals state
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'masuk' | 'daftar'>('daftar');
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);

  // Sync hash changes with browser navigation (Back / Forward)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Add transaction handler
  const handleAddTransaction = (newTx: Omit<TransactionItem, 'id'>) => {
    const item: TransactionItem = {
      ...newTx,
      id: `t-${Date.now()}`
    };

    setTransactions((prev) => [item, ...prev]);

    if (newTx.type === 'pemasukan') {
      setSaldo((prev) => prev + newTx.amount);
      setPemasukan((prev) => prev + newTx.amount);
    } else {
      setSaldo((prev) => prev - newTx.amount);
      setPengeluaran((prev) => prev + newTx.amount);
    }
  };

  const openAuth = (mode: 'masuk' | 'daftar') => {
    setAuthMode(mode);
    setIsAuthOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F3] text-[#111111] font-sans flex flex-col selection:bg-[#111111] selection:text-[#FFFFFF]">
      {/* 1. NAVBAR - Now distinctly connected per page */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenAuth={openAuth}
        onOpenNewTransaction={() => setIsTransactionModalOpen(true)}
        saldo={saldo}
      />

      {/* 2. DEDICATED SEPARATED PAGE VIEW */}
      <main className="flex-1">
        {currentPage === 'beranda' && (
          <HomePage
            saldo={saldo}
            pemasukan={pemasukan}
            pengeluaran={pengeluaran}
            aset={aset}
            transactions={transactions}
            onOpenAuth={openAuth}
            onAddTransaction={() => setIsTransactionModalOpen(true)}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'fitur' && (
          <FeaturesPage
            onAddTransactionDirect={handleAddTransaction}
            onOpenAddModal={() => setIsTransactionModalOpen(true)}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'preview' && (
          <PreviewPage
            onNavigate={handleNavigate}
            onOpenAuth={openAuth}
          />
        )}

        {currentPage === 'cara-kerja' && (
          <HowItWorksPage
            onNavigate={handleNavigate}
            onOpenAuth={openAuth}
          />
        )}

        {currentPage === 'perencanaan' && (
          <PlanningPage
            onNavigate={handleNavigate}
            onOpenAuth={openAuth}
          />
        )}

        {currentPage === 'laporan' && (
          <ReportPage
            onNavigate={handleNavigate}
            onOpenAuth={openAuth}
          />
        )}

        {currentPage === 'keamanan' && (
          <SecurityPage
            onNavigate={handleNavigate}
            onOpenAuth={openAuth}
          />
        )}
      </main>

      {/* 3. FOOTER */}
      <Footer
        currentPage={currentPage}
        onOpenAuth={openAuth}
        onNavigate={handleNavigate}
      />

      {/* Interactive Modals */}
      <TransactionModal
        isOpen={isTransactionModalOpen}
        onClose={() => setIsTransactionModalOpen(false)}
        onAddTransaction={handleAddTransaction}
      />

      <AuthModal
        isOpen={isAuthOpen}
        initialMode={authMode}
        onClose={() => setIsAuthOpen(false)}
      />
    </div>
  );
}
