import { SecuritySection } from '../components/SecuritySection';
import { PageHeader } from '../components/PageHeader';
import { PagePagination } from '../components/PagePagination';
import { PageId } from '../types';
import { ShieldCheck, Lock, Database, UserCheck } from 'lucide-react';

interface SecurityPageProps {
  onNavigate: (page: PageId) => void;
  onOpenAuth: (mode: 'masuk' | 'daftar') => void;
}

export function SecurityPage({ onNavigate, onOpenAuth }: SecurityPageProps) {
  const securityChecklist = [
    {
      label: 'Isolasi Akun Privat',
      desc: 'Setiap akun toko/gerai memiliki ruang data terenkripsi independen. Pengguna lain tidak dapat melihat catatan kas Anda.',
      icon: UserCheck,
    },
    {
      label: 'Tanpa Iklan & Pelacak Data',
      desc: 'Platform tidak memasang kode pelacak pihak ketiga atau menjual pola belanja bisnis Anda ke perusahaan iklan.',
      icon: ShieldCheck,
    },
    {
      label: 'Penyimpanan Database Terproteksi',
      desc: 'Sistem penyimpanan cloud dengan replikasi cadangan otomatis untuk mencegah risiko kehilangan data saat ponsel rusak.',
      icon: Database,
    },
    {
      label: 'Sesi Login Terverifikasi',
      desc: 'Autentikasi sesi aman dengan opsi keluar perangkat sewaktu-waktu dari pengaturan akun.',
      icon: Lock,
    },
  ];

  return (
    <div>
      <PageHeader
        pageCode="06 — KEAMANAN"
        title="Keamanan & Kedaulatan Data Usaha."
        subtitle="Data finansial adalah aset paling sensitif dari usaha Anda. Kami memprioritaskan privasi, kontrol kepemilikan, dan keamanan sistem secara faktual."
        currentPage="keamanan"
        onNavigate={onNavigate}
        prevPage={{ id: 'laporan', label: '05 / Laporan' }}
        nextPage={{ id: 'beranda', label: 'Kembali ke Beranda' }}
        actionButton={{
          label: 'Buat Akun Aman Anda',
          onClick: () => onOpenAuth('daftar'),
        }}
      />

      <SecuritySection />

      {/* Additional Specification Matrix */}
      <section className="bg-white border-b border-[#111111] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-[#666666] uppercase tracking-widest block mb-2">
              SPESIFIKASI KEAMANAN INFRASTRUKTUR
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#111111] tracking-tight">
              Standar perlindungan data tanpa kompromi.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {securityChecklist.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="p-6 bg-[#F5F5F3] border border-[#111111] flex items-start gap-4 shadow-[2px_2px_0px_0px_#111111]"
                >
                  <div className="w-10 h-10 bg-[#111111] text-white flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[#111111] mb-1">{item.label}</h3>
                    <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <PagePagination
        currentPage="keamanan"
        onNavigate={onNavigate}
        prevPage={{
          id: 'laporan',
          title: 'Laporan & Tren Finansial',
          subtitle: 'Kembali melihat laporan laba rugi dan tren pertumbuhan',
        }}
        nextPage={{
          id: 'beranda',
          title: 'Beranda Utama',
          subtitle: 'Kembali ke halaman muka Keuangan UMKM',
        }}
      />
    </div>
  );
}
