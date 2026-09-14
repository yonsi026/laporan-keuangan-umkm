import { ReportSection } from '../components/ReportSection';
import { PageHeader } from '../components/PageHeader';
import { PagePagination } from '../components/PagePagination';
import { PageId } from '../types';

interface ReportPageProps {
  onNavigate: (page: PageId) => void;
  onOpenAuth: (mode: 'masuk' | 'daftar') => void;
}

export function ReportPage({ onNavigate, onOpenAuth }: ReportPageProps) {
  return (
    <div>
      <PageHeader
        pageCode="05 — LAPORAN & TREN"
        title="Laporan Berkala & Analisis Keputusan."
        subtitle="Ubah tumpukan transaksi menjadi wawasan bisnis yang konkret. Pantau margin keuntungan bulanan dan akumulasi tabungan cadangan usaha."
        currentPage="laporan"
        onNavigate={onNavigate}
        prevPage={{ id: 'perencanaan', label: '04 / Perencanaan' }}
        nextPage={{ id: 'keamanan', label: '06 / Keamanan' }}
        actionButton={{
          label: 'Buka Ekspor PDF',
          onClick: () => onOpenAuth('masuk'),
        }}
      />

      <ReportSection />

      <PagePagination
        currentPage="laporan"
        onNavigate={onNavigate}
        prevPage={{
          id: 'perencanaan',
          title: 'Perencanaan & Target',
          subtitle: 'Kembali ke lembar kerja rencana dan evaluasi realita',
        }}
        nextPage={{
          id: 'keamanan',
          title: 'Keamanan & Kedaulatan Data',
          subtitle: 'Ketahui bagaimana data keuangan usaha Anda dilindungi',
        }}
      />
    </div>
  );
}
