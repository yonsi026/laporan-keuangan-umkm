import { useState, FormEvent } from 'react';
import { X, ArrowDownLeft, ArrowUpRight } from 'lucide-react';
import { TransactionItem } from '../types';

interface TransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddTransaction: (item: Omit<TransactionItem, 'id'>) => void;
}

export function TransactionModal({ isOpen, onClose, onAddTransaction }: TransactionModalProps) {
  const [type, setType] = useState<'pemasukan' | 'pengeluaran'>('pemasukan');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Penjualan');
  const [date, setDate] = useState('13 Sep 2026');
  const [note, setNote] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const cleanAmount = parseInt(amount.replace(/\D/g, ''), 10);
    if (!cleanAmount || cleanAmount <= 0) return;

    onAddTransaction({
      type,
      title: title.trim() || (type === 'pemasukan' ? 'Pemasukan Kas' : 'Pengeluaran Usaha'),
      category,
      amount: cleanAmount,
      date: date || '13 Sep 2026',
      note: note.trim() || 'Dicatat via formulir cepat',
    });

    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs"
    >
      <div className="w-full max-w-md bg-white border-2 border-[#111111] p-6 shadow-[8px_8px_0px_0px_#111111] animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-[#D9D9D9] pb-3 mb-5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#111111]" />
            <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-[#111111]">
              CATAT TRANSAKSI BARU
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-[#111111] hover:bg-[#F5F5F3] border border-[#D9D9D9]"
            aria-label="Tutup"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Type Selector */}
          <div>
            <label className="block text-xs font-mono font-bold uppercase text-[#111111] mb-1.5">
              Jenis Transaksi
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => {
                  setType('pemasukan');
                  setCategory('Penjualan');
                }}
                className={`py-2 text-xs font-bold font-mono border transition-colors flex items-center justify-center gap-1.5 ${
                  type === 'pemasukan'
                    ? 'bg-[#111111] text-white border-[#111111]'
                    : 'bg-white text-[#111111] border-[#D9D9D9] hover:bg-[#F5F5F3]'
                }`}
              >
                <ArrowDownLeft className="w-3.5 h-3.5" />
                <span>+ Pemasukan</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setType('pengeluaran');
                  setCategory('Bahan Baku');
                }}
                className={`py-2 text-xs font-bold font-mono border transition-colors flex items-center justify-center gap-1.5 ${
                  type === 'pengeluaran'
                    ? 'bg-[#111111] text-white border-[#111111]'
                    : 'bg-white text-[#111111] border-[#D9D9D9] hover:bg-[#F5F5F3]'
                }`}
              >
                <ArrowUpRight className="w-3.5 h-3.5" />
                <span>- Pengeluaran</span>
              </button>
            </div>
          </div>

          {/* Amount */}
          <div>
            <label className="block text-xs font-mono font-bold uppercase text-[#111111] mb-1">
              Nominal (Rp)
            </label>
            <input
              type="number"
              required
              autoFocus
              placeholder="Contoh: 1500000"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-3 py-2 bg-[#F5F5F3] border border-[#111111] text-base font-mono font-bold text-[#111111] focus:outline-none focus:bg-white"
            />
          </div>

          {/* Title */}
          <div>
            <label className="block text-xs font-mono font-bold uppercase text-[#111111] mb-1">
              Keterangan / Nama Transaksi
            </label>
            <input
              type="text"
              required
              placeholder="Contoh: Penjualan 20 Pcs Baju"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 bg-white border border-[#D9D9D9] text-xs text-[#111111] focus:outline-none focus:border-[#111111]"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-xs font-mono font-bold uppercase text-[#111111] mb-1">
              Kategori
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2 bg-white border border-[#D9D9D9] text-xs text-[#111111] focus:outline-none focus:border-[#111111]"
            >
              {type === 'pemasukan' ? (
                <>
                  <option value="Penjualan">Penjualan Langsung</option>
                  <option value="Online Order">Order E-Commerce</option>
                  <option value="Piutang Terbayar">Piutang Pelanggan</option>
                  <option value="Lainnya">Pemasukan Lainnya</option>
                </>
              ) : (
                <>
                  <option value="Bahan Baku">Bahan Baku & Persediaan</option>
                  <option value="Operasional">Operasional & Listrik</option>
                  <option value="Transportasi">Transportasi & Kurir</option>
                  <option value="Gaji & Upah">Gaji Tim / Karyawan</option>
                  <option value="Sewa Tempat">Sewa Tempat / Ruko</option>
                  <option value="Lainnya">Biaya Lainnya</option>
                </>
              )}
            </select>
          </div>

          {/* Date & Note */}
          <div className="grid grid-cols-2 gap-2">
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
            <div>
              <label className="block text-xs font-mono font-bold uppercase text-[#111111] mb-1">
                Catatan Tambahan
              </label>
              <input
                type="text"
                placeholder="Opsional"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-[#D9D9D9] text-xs text-[#111111] focus:outline-none focus:border-[#111111]"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 bg-[#111111] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#222222] transition-colors border border-[#111111]"
            >
              Simpan Transaksi ke Saldo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
