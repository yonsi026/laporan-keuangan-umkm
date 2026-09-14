import { useState, FormEvent } from 'react';
import { Plus, Check, ArrowDownLeft, ArrowUpRight, TrendingUp } from 'lucide-react';
import { initialInvestments, initialAssets, formatRupiah } from '../data/content';
import { TransactionItem } from '../types';

interface CoreFeaturesProps {
  onAddTransactionDirect: (item: Omit<TransactionItem, 'id'>) => void;
  onOpenAddModal: () => void;
}

export function CoreFeatures({ onAddTransactionDirect, onOpenAddModal }: CoreFeaturesProps) {
  // Feature 02 mini form state
  const [formType, setFormType] = useState<'pemasukan' | 'pengeluaran'>('pemasukan');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Penjualan');
  const [date, setDate] = useState('13 Sep 2026');
  const [note, setNote] = useState('');
  const [submittedFeedback, setSubmittedFeedback] = useState(false);

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const numAmount = parseInt(amount.replace(/\D/g, ''), 10) || 1500000;
    onAddTransactionDirect({
      type: formType,
      title: title.trim() || (formType === 'pemasukan' ? 'Penjualan Produk' : 'Biaya Operasional'),
      category,
      amount: numAmount,
      date: date || '13 Sep 2026',
      note: note.trim() || 'Dicatat via formulir fitur cepat'
    });
    setSubmittedFeedback(true);
    setTitle('');
    setAmount('');
    setNote('');
    setTimeout(() => setSubmittedFeedback(false), 3000);
  };

  return (
    <section
      id="fitur"
      className="bg-[#F5F5F3] border-b border-[#111111] py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#666666] tracking-widest uppercase mb-3">
            <span className="w-6 h-[1.5px] bg-[#111111]" />
            FITUR UTAMA
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#111111] tracking-tight leading-[1.12]">
            Semua yang Anda butuhkan untuk mengelola uang usaha.
          </h2>
          <p className="text-base text-[#666666] mt-4 leading-relaxed">
            Lima modul esensial yang dirancang berdasarkan kebutuhan riil pemilik UMKM Indonesia, tanpa kerumitan debit-kredit ganda.
          </p>
        </div>

        {/* Features Container */}
        <div className="space-y-12">
          {/* Feature 01: Dashboard Keuangan */}
          <div className="bg-white border border-[#111111] p-6 sm:p-10 shadow-[3px_3px_0px_0px_#111111]">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#D9D9D9] pb-6 mb-8">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#666666]">
                  FEATURE 01
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#111111] mt-1">
                  Dashboard Keuangan
                </h3>
                <p className="text-sm text-[#666666] mt-1">
                  Lihat kondisi keuangan usaha dalam satu layar yang jelas dan ringkas.
                </p>
              </div>
              <div className="text-xs font-mono text-[#111111] bg-[#F5F5F3] border border-[#D9D9D9] px-3 py-1.5 self-start">
                Satu Pandangan Menyeluruh
              </div>
            </div>

            {/* Dashboard Mini Showcase Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="p-4 bg-[#111111] text-white">
                <span className="text-[10px] font-mono tracking-widest text-[#D9D9D9] uppercase">SALDO AKTIF</span>
                <div className="text-xl sm:text-2xl font-mono font-bold mt-1">Rp 24.850.000</div>
                <div className="text-[10px] font-mono text-[#D9D9D9] mt-1">Kas operasional riil</div>
              </div>
              <div className="p-4 bg-[#F5F5F3] border border-[#D9D9D9]">
                <span className="text-[10px] font-mono tracking-widest text-[#666666] uppercase">PEMASUKAN</span>
                <div className="text-xl sm:text-2xl font-mono font-bold text-[#111111] mt-1">Rp 38.500.000</div>
                <div className="text-[10px] font-mono text-[#666666] mt-1">Omzet bulan berjalan</div>
              </div>
              <div className="p-4 bg-[#F5F5F3] border border-[#D9D9D9]">
                <span className="text-[10px] font-mono tracking-widest text-[#666666] uppercase">PENGELUARAN</span>
                <div className="text-xl sm:text-2xl font-mono font-bold text-[#111111] mt-1">Rp 13.650.000</div>
                <div className="text-[10px] font-mono text-[#666666] mt-1">Total beban usaha</div>
              </div>
              <div className="p-4 bg-[#F5F5F3] border border-[#D9D9D9]">
                <span className="text-[10px] font-mono tracking-widest text-[#666666] uppercase">NILAI ASET</span>
                <div className="text-xl sm:text-2xl font-mono font-bold text-[#111111] mt-1">Rp 42.300.000</div>
                <div className="text-[10px] font-mono text-[#666666] mt-1">Total 4 unit terdaftar</div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7 p-4 bg-[#F5F5F3] border border-[#D9D9D9]">
                <div className="text-xs font-mono font-bold text-[#111111] mb-2 uppercase tracking-wider">
                  Grafik Arus Kas Bulanan
                </div>
                <div className="h-28 flex items-end gap-3 pt-4 border-b border-[#D9D9D9] pb-2">
                  <div className="flex-1 flex flex-col items-center gap-1">
                    <div className="w-full bg-[#111111] h-16" />
                    <span className="text-[10px] font-mono">Minggu 1</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center gap-1">
                    <div className="w-full bg-[#111111] h-20" />
                    <span className="text-[10px] font-mono">Minggu 2</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center gap-1">
                    <div className="w-full bg-[#111111] h-24" />
                    <span className="text-[10px] font-mono">Minggu 3</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center gap-1">
                    <div className="w-full bg-[#666666] h-18" />
                    <span className="text-[10px] font-mono">Minggu 4</span>
                  </div>
                </div>
                <div className="flex justify-between items-center text-[10px] font-mono text-[#666666] mt-2">
                  <span>Gelap = Pemasukan</span>
                  <span>Abu-abu = Target Mingguan</span>
                </div>
              </div>

              <div className="lg:col-span-5 p-4 bg-[#F5F5F3] border border-[#D9D9D9]">
                <div className="text-xs font-mono font-bold text-[#111111] mb-2 uppercase tracking-wider">
                  Transaksi Terakhir
                </div>
                <div className="space-y-2 text-xs">
                  <div className="p-2 bg-white border border-[#D9D9D9] flex justify-between">
                    <div>
                      <div className="font-semibold text-[#111111]">Penjualan Toko Online</div>
                      <div className="text-[10px] font-mono text-[#666666]">12 Sep 2026 • Penjualan</div>
                    </div>
                    <span className="font-mono font-bold text-[#111111]">+Rp 2.500.000</span>
                  </div>
                  <div className="p-2 bg-white border border-[#D9D9D9] flex justify-between">
                    <div>
                      <div className="font-semibold text-[#111111]">Pembelian Bahan Baku</div>
                      <div className="text-[10px] font-mono text-[#666666]">12 Sep 2026 • Bahan Baku</div>
                    </div>
                    <span className="font-mono font-bold text-[#111111]">-Rp 750.000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grid of Feature 02 & Feature 05 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Feature 02: Catat Transaksi (Formulir Nyata) */}
            <div className="lg:col-span-6 bg-white border border-[#111111] p-6 sm:p-8 flex flex-col justify-between shadow-[3px_3px_0px_0px_#111111]">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#666666]">
                  FEATURE 02
                </span>
                <h3 className="text-2xl font-black text-[#111111] mt-1 mb-2">
                  Catat Transaksi
                </h3>
                <p className="text-sm text-[#666666] mb-6">
                  Catat pemasukan dan pengeluaran tanpa proses yang rumit. Coba isi formulir di bawah ini untuk melihat demo langsung:
                </p>

                {/* Interactive Transaction Form Preview */}
                <form onSubmit={handleFormSubmit} className="space-y-4 bg-[#F5F5F3] p-4 sm:p-5 border border-[#D9D9D9]">
                  {/* Jenis Transaksi */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-[#111111] mb-1">
                      Jenis Transaksi
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setFormType('pemasukan');
                          setCategory('Penjualan');
                        }}
                        className={`py-2 text-xs font-bold border transition-colors flex items-center justify-center gap-1.5 ${
                          formType === 'pemasukan'
                            ? 'bg-[#111111] text-white border-[#111111]'
                            : 'bg-white text-[#111111] border-[#D9D9D9]'
                        }`}
                      >
                        <ArrowDownLeft className="w-3.5 h-3.5" />
                        <span>Pemasukan (+)</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setFormType('pengeluaran');
                          setCategory('Bahan Baku');
                        }}
                        className={`py-2 text-xs font-bold border transition-colors flex items-center justify-center gap-1.5 ${
                          formType === 'pengeluaran'
                            ? 'bg-[#111111] text-white border-[#111111]'
                            : 'bg-white text-[#111111] border-[#D9D9D9]'
                        }`}
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                        <span>Pengeluaran (-)</span>
                      </button>
                    </div>
                  </div>

                  {/* Nominal */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-[#111111] mb-1">
                      Nominal (Rp)
                    </label>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="Contoh: 1500000"
                      className="w-full px-3 py-2 bg-white border border-[#D9D9D9] text-sm font-mono text-[#111111] focus:outline-none focus:border-[#111111]"
                    />
                  </div>

                  {/* Judul & Kategori */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-[#111111] mb-1">
                        Keterangan Singkat
                      </label>
                      <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Misal: Penjualan Catering"
                        className="w-full px-3 py-2 bg-white border border-[#D9D9D9] text-xs text-[#111111] focus:outline-none focus:border-[#111111]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-[#111111] mb-1">
                        Kategori
                      </label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-[#D9D9D9] text-xs text-[#111111] focus:outline-none focus:border-[#111111]"
                      >
                        <option value="Penjualan">Penjualan</option>
                        <option value="Bahan Baku">Bahan Baku</option>
                        <option value="Operasional">Operasional</option>
                        <option value="Transportasi">Transportasi</option>
                        <option value="Gaji & Upah">Gaji & Upah</option>
                        <option value="Lainnya">Lainnya</option>
                      </select>
                    </div>
                  </div>

                  {/* Tanggal */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-[#111111] mb-1">
                      Tanggal
                    </label>
                    <input
                      type="text"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-[#D9D9D9] text-xs font-mono text-[#111111] focus:outline-none focus:border-[#111111]"
                    />
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-[#111111] text-white font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#222222] transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    <span>+ Tambah Transaksi</span>
                  </button>

                  {submittedFeedback && (
                    <div className="p-2 bg-[#111111] text-white text-xs font-mono text-center flex items-center justify-center gap-1.5">
                      <Check className="w-3.5 h-3.5" />
                      <span>Transaksi berhasil ditambahkan ke dashboard!</span>
                    </div>
                  )}
                </form>
              </div>

              <div className="mt-4 pt-4 border-t border-[#D9D9D9] flex justify-between items-center">
                <span className="text-xs text-[#666666]">Atau buka modal pencatatan penuh:</span>
                <button
                  type="button"
                  onClick={onOpenAddModal}
                  className="text-xs font-bold text-[#111111] underline hover:no-underline"
                >
                  Buka Form Lengkap &rarr;
                </button>
              </div>
            </div>

            {/* Feature 05: Rencana Bulanan */}
            <div className="lg:col-span-6 bg-white border border-[#111111] p-6 sm:p-8 flex flex-col justify-between shadow-[3px_3px_0px_0px_#111111]">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#666666]">
                  FEATURE 05
                </span>
                <h3 className="text-2xl font-black text-[#111111] mt-1 mb-2">
                  Rencana Bulanan
                </h3>
                <p className="text-sm text-[#666666] mb-6">
                  Tetapkan target sebelum bulan dimulai. Pantau batas pengeluaran dan tabungan dengan visual grayscale yang tegas.
                </p>

                {/* Progress Indicators as described in prompt */}
                <div className="space-y-5 bg-[#F5F5F3] p-5 border border-[#D9D9D9]">
                  {/* Target Pemasukan */}
                  <div>
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="text-xs font-mono font-bold uppercase text-[#111111]">
                        TARGET PEMASUKAN
                      </span>
                      <span className="text-sm font-mono font-bold text-[#111111]">
                        Rp 40.000.000
                      </span>
                    </div>
                    {/* Visual Progress Bar in Swiss ASCII/Grayscale */}
                    <div className="space-y-1">
                      <div className="w-full h-3 bg-white border border-[#D9D9D9] p-0.5">
                        <div className="h-full bg-[#111111] w-[72%]" />
                      </div>
                      <div className="flex justify-between text-[10px] font-mono text-[#666666]">
                        <span>Progress: ████████████░░░░</span>
                        <span className="font-bold text-[#111111]">72% Tercapai</span>
                      </div>
                    </div>
                  </div>

                  {/* Batas Pengeluaran */}
                  <div className="pt-3 border-t border-[#D9D9D9]">
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="text-xs font-mono font-bold uppercase text-[#111111]">
                        BATAS PENGELUARAN
                      </span>
                      <span className="text-sm font-mono font-bold text-[#111111]">
                        Rp 25.000.000
                      </span>
                    </div>
                    <div className="space-y-1">
                      <div className="w-full h-3 bg-white border border-[#D9D9D9] p-0.5">
                        <div className="h-full bg-[#666666] w-[84%]" />
                      </div>
                      <div className="flex justify-between text-[10px] font-mono text-[#666666]">
                        <span>Terpakai: Rp 21.000.000</span>
                        <span className="font-bold text-[#111111]">84% (Aman &lt; 100%)</span>
                      </div>
                    </div>
                  </div>

                  {/* Target Tabungan */}
                  <div className="pt-3 border-t border-[#D9D9D9]">
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="text-xs font-mono font-bold uppercase text-[#111111]">
                        TARGET TABUNGAN CADANGAN
                      </span>
                      <span className="text-sm font-mono font-bold text-[#111111]">
                        Rp 5.000.000
                      </span>
                    </div>
                    <div className="space-y-1">
                      <div className="w-full h-3 bg-white border border-[#D9D9D9] p-0.5">
                        <div className="h-full bg-[#111111] w-[100%]" />
                      </div>
                      <div className="flex justify-between text-[10px] font-mono text-[#666666]">
                        <span>Tersimpan: Rp 6.000.000</span>
                        <span className="font-bold text-[#111111]">120% (Melampaui Target)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-[#D9D9D9] text-xs text-[#666666] flex items-center justify-between">
                <span>Evaluasi Real-time</span>
                <span className="font-mono text-[#111111] font-semibold">Tersinkronisasi Otomatis</span>
              </div>
            </div>
          </div>

          {/* Grid of Feature 03 & Feature 04 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Feature 03: Kelola Investasi */}
            <div className="lg:col-span-6 bg-white border border-[#111111] p-6 sm:p-8 shadow-[3px_3px_0px_0px_#111111]">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#666666]">
                FEATURE 03
              </span>
              <h3 className="text-2xl font-black text-[#111111] mt-1 mb-2">
                Kelola Investasi
              </h3>
              <p className="text-sm text-[#666666] mb-6">
                Pantau investasi usaha dan perubahan nilainya dari waktu ke waktu tanpa perhitungan rumit.
              </p>

              <div className="divide-y divide-[#D9D9D9] border border-[#D9D9D9] bg-[#F5F5F3]">
                {initialInvestments.map((inv) => (
                  <div key={inv.id} className="p-4 bg-white hover:bg-[#F5F5F3] transition-colors">
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <div className="text-sm font-bold text-[#111111]">{inv.name}</div>
                        <span className="text-[10px] font-mono text-[#666666] uppercase">
                          {inv.category}
                        </span>
                      </div>
                      <span className="text-xs font-mono font-bold bg-[#111111] text-white px-2 py-0.5">
                        +{inv.changePercent}%
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-[#D9D9D9] text-xs font-mono">
                      <div>
                        <span className="text-[#666666] text-[10px] block">NILAI AWAL</span>
                        <span className="font-semibold text-[#111111]">{formatRupiah(inv.initialValue)}</span>
                      </div>
                      <div>
                        <span className="text-[#666666] text-[10px] block">NILAI SAAT INI</span>
                        <span className="font-bold text-[#111111]">{formatRupiah(inv.currentValue)}</span>
                      </div>
                    </div>
                    <div className="text-[10px] font-mono text-[#666666] mt-1.5 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 text-[#111111]" />
                      <span>{inv.history}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature 04: Kelola Aset */}
            <div className="lg:col-span-6 bg-white border border-[#111111] p-6 sm:p-8 shadow-[3px_3px_0px_0px_#111111]">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#666666]">
                FEATURE 04
              </span>
              <h3 className="text-2xl font-black text-[#111111] mt-1 mb-2">
                Kelola Aset
              </h3>
              <p className="text-sm text-[#666666] mb-6">
                Ketahui aset apa saja yang dimiliki usaha dan berapa taksiran nilainya saat ini.
              </p>

              <div className="divide-y divide-[#D9D9D9] border border-[#D9D9D9] bg-[#F5F5F3]">
                {initialAssets.map((asset) => (
                  <div key={asset.id} className="p-4 bg-white hover:bg-[#F5F5F3] transition-colors">
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <div className="text-sm font-bold text-[#111111]">{asset.name}</div>
                        <span className="text-[10px] font-mono text-[#666666] uppercase">
                          Kategori: {asset.category} • Beli: {asset.purchaseDate}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono border border-[#111111] px-2 py-0.5 text-[#111111] font-semibold">
                        {asset.condition}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-[#D9D9D9] text-xs font-mono">
                      <div>
                        <span className="text-[#666666] text-[10px] block">NILAI PEROLEHAN</span>
                        <span className="font-semibold text-[#111111]">{formatRupiah(asset.acquisitionCost)}</span>
                      </div>
                      <div>
                        <span className="text-[#666666] text-[10px] block">NILAI SAAT INI</span>
                        <span className="font-bold text-[#111111]">{formatRupiah(asset.currentValue)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
