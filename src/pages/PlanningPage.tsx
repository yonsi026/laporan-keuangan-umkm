import { PlanningSection } from '../components/PlanningSection';
import { PlanVsReality } from '../components/PlanVsReality';
import { PageHeader } from '../components/PageHeader';
import { PagePagination } from '../components/PagePagination';
import { PageId } from '../types';

interface PlanningPageProps {
  onNavigate: (page: PageId) => void;
  onOpenAuth: (mode: 'masuk' | 'daftar') => void;
}

export function PlanningPage({ onNavigate, onOpenAuth }: PlanningPageProps) {
  return (
    <div>
      <PageHeader
        pageCode="04 — PERENCANAAN"
        title="Rencana Bulanan & Evaluasi Target."
        subtitle="Tetapkan batas pengeluaran sebelum modal terkuras habis. Bandingkan angka rencana dengan data aktual untuk menjaga kestabilan bisnis."
        currentPage="perencanaan"
        onNavigate={onNavigate}
        prevPage={{ id: 'cara-kerja', label: '03 / Cara Kerja' }}
        nextPage={{ id: 'laporan', label: '05 / Laporan' }}
        actionButton={{
          label: 'Buat Rencana Bulan Depan',
          onClick: () => onOpenAuth('daftar'),
        }}
      />

      {/* 1. Monthly Budget Sheet */}
      <PlanningSection />

      {/* 2. Plan vs Reality Evaluation Table */}
      <PlanVsReality />

      <PagePagination
        currentPage="perencanaan"
        onNavigate={onNavigate}
        prevPage={{
          id: 'cara-kerja',
          title: 'Alur & Cara Kerja',
          subtitle: 'Kembali melihat 4 fase implementasi pembukuan',
        }}
        nextPage={{
          id: 'laporan',
          title: 'Laporan & Tren Finansial',
          subtitle: 'Pelajari rekapitulasi laba rugi dan visualisasi grafik',
        }}
      />
    </div>
  );
}
