import { CoreFeatures } from '../components/CoreFeatures';
import { PageHeader } from '../components/PageHeader';
import { PagePagination } from '../components/PagePagination';
import { PageId, TransactionItem } from '../types';

interface FeaturesPageProps {
  onAddTransactionDirect: (item: Omit<TransactionItem, 'id'>) => void;
  onOpenAddModal: () => void;
  onNavigate: (page: PageId) => void;
}

export function FeaturesPage({
  onAddTransactionDirect,
  onOpenAddModal,
  onNavigate,
}: FeaturesPageProps) {
  return (
    <div>
      <PageHeader
        pageCode="01 — FITUR & TRANSAKSI"
        title="Modul Transaksi, Investasi, & Aset Usaha."
        subtitle="Catat arus kas masuk & keluar, pantau modal likuid yang diinvestasikan kembali, serta inventarisasi peralatan usaha berharga Anda."
        currentPage="fitur"
        onNavigate={onNavigate}
        prevPage={{ id: 'beranda', label: 'Beranda' }}
        nextPage={{ id: 'preview', label: '02 / Preview' }}
        actionButton={{
          label: '+ Catat Transaksi Cepat',
          onClick: onOpenAddModal,
        }}
      />

      <CoreFeatures
        onAddTransactionDirect={onAddTransactionDirect}
        onOpenAddModal={onOpenAddModal}
      />

      <PagePagination
        currentPage="fitur"
        onNavigate={onNavigate}
        prevPage={{
          id: 'beranda',
          title: 'Beranda & Ringkasan',
          subtitle: 'Kembali ke ringkasan utama dan masalah keuangan UMKM',
        }}
        nextPage={{
          id: 'preview',
          title: 'Preview Dashboard & Mobile',
          subtitle: 'Lihat simulasi antarmuka pada layar desktop dan ponsel',
        }}
      />
    </div>
  );
}
