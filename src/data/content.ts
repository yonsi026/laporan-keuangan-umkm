import { TransactionItem, InvestmentItem, AssetItem, MonthlyPlan, MonthlyTrendData } from '../types';

export const formatRupiah = (amount: number): string => {
  return 'Rp ' + amount.toLocaleString('id-ID');
};

export const initialTransactions: TransactionItem[] = [
  {
    id: 't-1',
    type: 'pemasukan',
    title: 'Penjualan Toko Online',
    category: 'Penjualan',
    amount: 2500000,
    date: '12 Sep 2026',
    note: 'Order #8921 Shopee & Tokopedia'
  },
  {
    id: 't-2',
    type: 'pengeluaran',
    title: 'Pembelian Bahan Baku',
    category: 'Bahan Baku',
    amount: 750000,
    date: '12 Sep 2026',
    note: 'Biji kopi robusta & kemasan pouch'
  },
  {
    id: 't-3',
    type: 'pengeluaran',
    title: 'Transportasi & Logistik',
    category: 'Transportasi',
    amount: 150000,
    date: '11 Sep 2026',
    note: 'BBM operasional pickup & kurir ekspres'
  },
  {
    id: 't-4',
    type: 'pemasukan',
    title: 'Penjualan Langsung (Offline)',
    category: 'Penjualan',
    amount: 1800000,
    date: '10 Sep 2026',
    note: 'Transaksi gerai fisik pasar minggu'
  },
  {
    id: 't-5',
    type: 'pengeluaran',
    title: 'Listrik & Utilitas Usaha',
    category: 'Operasional',
    amount: 450000,
    date: '09 Sep 2026',
    note: 'Tagihan listrik workshop September'
  }
];

export const initialInvestments: InvestmentItem[] = [
  {
    id: 'inv-1',
    name: 'Reksa Dana Pasar Uang Usaha',
    category: 'Dana Cadangan',
    initialValue: 10000000,
    currentValue: 10650000,
    changePercent: 6.5,
    history: '+Rp 650.000 (12 bln)'
  },
  {
    id: 'inv-2',
    name: 'Ekspansi Cabang Kedua',
    category: 'Pengembangan',
    initialValue: 15000000,
    currentValue: 18200000,
    changePercent: 21.3,
    history: '+Rp 3.200.000 (realisasi laba)'
  },
  {
    id: 'inv-3',
    name: 'Deposito Operasional Darurat',
    category: 'Likuiditas',
    initialValue: 8000000,
    currentValue: 8450000,
    changePercent: 5.6,
    history: '+Rp 450.000 (bunga nett)'
  }
];

export const initialAssets: AssetItem[] = [
  {
    id: 'ast-1',
    name: 'Mesin Roasting Espresso Pro',
    category: 'Mesin',
    acquisitionCost: 18500000,
    currentValue: 16000000,
    condition: 'Sangat Baik',
    purchaseDate: 'Mar 2025'
  },
  {
    id: 'ast-2',
    name: 'Motor Operasional Roda Tiga',
    category: 'Kendaraan',
    acquisitionCost: 14000000,
    currentValue: 11500000,
    condition: 'Baik',
    purchaseDate: 'Jan 2024'
  },
  {
    id: 'ast-3',
    name: 'Sealer Kemasan & Timbangan Digital',
    category: 'Peralatan',
    acquisitionCost: 3500000,
    currentValue: 2800000,
    condition: 'Sangat Baik',
    purchaseDate: 'Agu 2025'
  },
  {
    id: 'ast-4',
    name: 'Perangkat Kasir POS Tablet',
    category: 'Peralatan',
    acquisitionCost: 4200000,
    currentValue: 3200000,
    condition: 'Baik',
    purchaseDate: 'Okt 2025'
  }
];

export const monthlyPlanSeptember2026: MonthlyPlan = {
  month: 'September 2026',
  targetIncome: 40000000,
  actualIncome: 38500000,
  expenseLimit: 25000000,
  actualExpense: 21000000,
  targetSavings: 5000000,
  actualSavings: 6000000,
  categories: [
    { category: 'Bahan Baku', allocated: 10000000, used: 8400000 },
    { category: 'Operasional', allocated: 5000000, used: 4600000 },
    { category: 'Transportasi', allocated: 2000000, used: 1650000 },
    { category: 'Lainnya', allocated: 3000000, used: 1850000 }
  ]
};

export const monthlyTrendData: MonthlyTrendData[] = [
  { month: 'Jun', income: 31000000, expense: 19500000, savings: 3500000 },
  { month: 'Jul', income: 34500000, expense: 22000000, savings: 4200000 },
  { month: 'Ags', income: 36800000, expense: 20800000, savings: 5100000 },
  { month: 'Sep', income: 38500000, expense: 21000000, savings: 6000000 }
];

export const problemList = [
  {
    number: '01',
    title: 'Catatan transaksi tersebar di banyak tempat',
    description: 'Catatan transaksi terserak di nota kertas, chat HP, buku tulis kas, dan beberapa file spreadsheet yang tidak sinkron.'
  },
  {
    number: '02',
    title: 'Sulit mengetahui saldo usaha yang sebenarnya',
    description: 'Uang usaha dan uang pribadi bercampur, membuat pemilik sulit membedakan kas likuid riil dengan modal terpakai.'
  },
  {
    number: '03',
    title: 'Pemasukan dan pengeluaran sulit dibandingkan',
    description: 'Tidak ada visualisasi langsung untuk melihat apakah bulan ini omzet bertambah sehat atau justru terkuras biaya tak terduga.'
  },
  {
    number: '04',
    title: 'Investasi dan aset usaha tidak tercatat rapi',
    description: 'Mesin, peralatan, dan dana cadangan usaha tidak pernah dihitung nilainya, sehingga kekayaan bersih usaha tak terukur.'
  },
  {
    number: '05',
    title: 'Tidak memiliki target keuangan bulan berikutnya',
    description: 'Usaha berjalan reaktif dari hari ke hari tanpa pagu belanja dan tanpa batas pengeluaran yang terukur jelas di awal bulan.'
  },
  {
    number: '06',
    title: 'Sulit mengetahui apakah rencana sesuai realita',
    description: 'Tidak ada sistem perbandingan langsung antara target omzet yang diinginkan dengan angka aktual yang benar-benar masuk kas.'
  }
];

export const solutionModules = [
  {
    id: 'transaksi',
    code: 'MODUL 01',
    name: 'TRANSAKSI',
    title: 'Catat Transaksi Seketika',
    description: 'Pencatatan pemasukan dan pengeluaran kas harian dalam hitungan detik langsung dari ponsel, lengkap dengan kategori dan keterangan.'
  },
  {
    id: 'investasi',
    code: 'MODUL 02',
    name: 'INVESTASI',
    title: 'Pantau Investasi Usaha',
    description: 'Simpan dan pantau dana cadangan, ekspansi cabang, serta deposito operasional dengan rekam riwayat perubahan nilai riil.'
  },
  {
    id: 'aset',
    code: 'MODUL 03',
    name: 'ASET',
    title: 'Kelola Aset Fisik & Alat',
    description: 'Daftar peralatan, kendaraan, mesin, dan inventaris dengan nilai perolehan, taksiran nilai saat ini, dan status kondisi terkini.'
  },
  {
    id: 'rencana',
    code: 'MODUL 04',
    name: 'RENCANA',
    title: 'Rencana Anggaran Bulanan',
    description: 'Tetapkan target pendapatan, batas pengeluaran per pos belanja, dan target tabungan sebelum hari pertama setiap bulan dimulai.'
  },
  {
    id: 'laporan',
    code: 'MODUL 05',
    name: 'LAPORAN',
    title: 'Laporan & Tren Finansial',
    description: 'Rekap otomatis berkala tanpa rumit pembukuan ganda. Dapatkan kepastian data sebelum mengambil keputusan strategis usaha.'
  }
];

export const howItWorksSteps = [
  {
    step: '01',
    action: 'DAFTAR',
    title: 'Buat akun dengan email & kata sandi',
    description: 'Proses pendaftaran cepat tanpa syarat berbelit. Akses instan dari browser komputer maupun smartphone Anda.'
  },
  {
    step: '02',
    action: 'CATAT',
    title: 'Masukkan pemasukan & pengeluaran usaha',
    description: 'Catat setiap transaksi masuk dan keluar harian. Kategorikan sesuai kebutuhan spesifik jenis usaha Anda.'
  },
  {
    step: '03',
    action: 'RENCANAKAN',
    title: 'Tentukan target pemasukan, pengeluaran & tabungan',
    description: 'Atur batas maksimal belanja operasional dan target tabungan cadangan sebelum memasuki bulan baru.'
  },
  {
    step: '04',
    action: 'PANTAU',
    title: 'Bandingkan rencana dengan realita',
    description: 'Lihat selisih target dan pencapaian melalui dashboard ringkas serta laporan berkala kapan saja.'
  }
];

export const securityPoints = [
  {
    title: 'Autentikasi Akun Terlindungi',
    detail: 'Login aman berbasis kata sandi dan email terverifikasi untuk menjamin privasi data keuangan UMKM.'
  },
  {
    title: 'Data Berdasarkan Akun Pengguna',
    detail: 'Setiap entitas usaha terisolasi secara ketat. Pengguna hanya dapat mengakses dan melihat buku kas milik usahanya sendiri.'
  },
  {
    title: 'Akses Khusus Pemilik Usaha',
    detail: 'Tidak ada akses pihak ketiga yang tidak berwenang. Anda memegang kendali penuh atas informasi finansial bisnis Anda.'
  },
  {
    title: 'Kontrol Sesi & Logout Otomatis',
    detail: 'Fasilitas keluar sesi instan saat menggunakan perangkat bersama, memastikan buku kas usaha tetap aman saat ditinggalkan.'
  }
];
