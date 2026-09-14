import { useState, FormEvent } from 'react';
import { X, Check } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  initialMode: 'masuk' | 'daftar';
  onClose: () => void;
}

export function AuthModal({ isOpen, initialMode, onClose }: AuthModalProps) {
  const [mode, setMode] = useState<'masuk' | 'daftar'>(initialMode);
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSuccessMessage(true);
    setTimeout(() => {
      setSuccessMessage(false);
      onClose();
    }, 1800);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs"
    >
      <div className="w-full max-w-md bg-white border-2 border-[#111111] p-6 sm:p-8 shadow-[8px_8px_0px_0px_#111111] animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#D9D9D9] pb-3 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#111111]" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#111111]">
              PORTAL KEUANGAN UMKM
            </span>
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

        {/* Tab switcher */}
        <div className="grid grid-cols-2 gap-2 mb-6 p-1 bg-[#F5F5F3] border border-[#D9D9D9]">
          <button
            type="button"
            onClick={() => setMode('masuk')}
            className={`py-2 text-xs font-mono font-bold transition-colors ${
              mode === 'masuk'
                ? 'bg-[#111111] text-white'
                : 'text-[#666666] hover:text-[#111111]'
            }`}
          >
            Masuk
          </button>
          <button
            type="button"
            onClick={() => setMode('daftar')}
            className={`py-2 text-xs font-mono font-bold transition-colors ${
              mode === 'daftar'
                ? 'bg-[#111111] text-white'
                : 'text-[#666666] hover:text-[#111111]'
            }`}
          >
            Daftar Baru
          </button>
        </div>

        {successMessage ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 bg-[#111111] text-white flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-[#111111]">
              {mode === 'masuk' ? 'Berhasil Masuk ke Akun!' : 'Pendaftaran Berhasil!'}
            </h4>
            <p className="text-xs text-[#666666] font-mono">
              Membuka dasbor keuangan usaha Anda...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'daftar' && (
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-[#111111] mb-1">
                  Nama Usaha / Toko
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Kopi Berkah Nusantara"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full px-3 py-2 bg-[#F5F5F3] border border-[#D9D9D9] text-xs text-[#111111] focus:outline-none focus:border-[#111111]"
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-mono font-bold uppercase text-[#111111] mb-1">
                Alamat Email
              </label>
              <input
                type="email"
                required
                placeholder="pemilik@usaha.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-[#F5F5F3] border border-[#D9D9D9] text-xs text-[#111111] focus:outline-none focus:border-[#111111]"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase text-[#111111] mb-1">
                Kata Sandi
              </label>
              <input
                type="password"
                required
                placeholder="Minimal 8 karakter"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 bg-[#F5F5F3] border border-[#D9D9D9] text-xs text-[#111111] focus:outline-none focus:border-[#111111]"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 bg-[#111111] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#222222] transition-colors border border-[#111111]"
              >
                {mode === 'masuk' ? 'Masuk ke Dashboard' : 'Mulai Kelola Keuangan Sekarang'}
              </button>
            </div>

            <p className="text-[11px] font-mono text-[#666666] text-center pt-2">
              Keamanan data terjamin. Hanya Anda yang dapat mengakses pembukuan ini.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
