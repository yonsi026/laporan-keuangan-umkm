import { DashboardPreview } from '../components/DashboardPreview';
import { MobileFirstSection } from '../components/MobileFirstSection';
import { PageHeader } from '../components/PageHeader';
import { PagePagination } from '../components/PagePagination';
import { PageId } from '../types';

interface PreviewPageProps {
  onNavigate: (page: PageId) => void;
  onOpenAuth: (mode: 'masuk' | 'daftar') => void;
}

export function PreviewPage({ onNavigate, onOpenAuth }: PreviewPageProps) {
  return (
    <div>
      <PageHeader
        pageCode="02 — PREVIEW SISTEM"
        title="Tampilan Antarmuka Desktop & Ponsel."
        subtitle="Simulasi visual bagaimana Keuangan UMKM membantu Anda melihat arus kas dengan jelas di komputer kasir toko maupun ponsel genggam saat di lapangan."
        currentPage="preview"
        onNavigate={onNavigate}
        prevPage={{ id: 'fitur', label: '01 / Fitur' }}
        nextPage={{ id: 'cara-kerja', label: '03 / Cara Kerja' }}
        actionButton={{
          label: 'Coba Akun Demo',
          onClick: () => onOpenAuth('daftar'),
        }}
      />

      {/* Desktop Dashboard Preview */}
      <DashboardPreview />

      {/* Mobile-First Interactive Phone Simulator */}
      <MobileFirstSection />

      <PagePagination
        currentPage="preview"
        onNavigate={onNavigate}
        prevPage={{
          id: 'fitur',
          title: 'Modul Fitur & Transaksi',
          subtitle: 'Lihat formulir pencatatan kas dan inventaris aset',
        }}
        nextPage={{
          id: 'cara-kerja',
          title: 'Alur & Cara Kerja',
          subtitle: 'Pelajari 4 tahap implementasi mudah tanpa ribet',
        }}
      />
    </div>
  );
}
