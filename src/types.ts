export type PageId =
  | 'beranda'
  | 'fitur'
  | 'preview'
  | 'cara-kerja'
  | 'perencanaan'
  | 'laporan'
  | 'keamanan';

export interface TransactionItem {
  id: string;
  type: 'pemasukan' | 'pengeluaran';
  title: string;
  category: string;
  amount: number;
  date: string;
  note?: string;
}

export interface InvestmentItem {
  id: string;
  name: string;
  category: string;
  initialValue: number;
  currentValue: number;
  changePercent: number;
  history: string;
}

export interface AssetItem {
  id: string;
  name: string;
  category: string;
  acquisitionCost: number;
  currentValue: number;
  condition: 'Sangat Baik' | 'Baik' | 'Perlu Servis';
  purchaseDate: string;
}

export interface CategoryLimit {
  category: string;
  allocated: number;
  used: number;
}

export interface MonthlyPlan {
  month: string;
  targetIncome: number;
  actualIncome: number;
  expenseLimit: number;
  actualExpense: number;
  targetSavings: number;
  actualSavings: number;
  categories: CategoryLimit[];
}

export interface MonthlyTrendData {
  month: string;
  income: number;
  expense: number;
  savings: number;
}
