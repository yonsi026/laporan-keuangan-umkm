import { Lock, UserCheck, KeyRound, LogOut, Check } from 'lucide-react';
import { securityPoints } from '../data/content';

export function SecuritySection() {
  const icons = [
    <KeyRound className="w-5 h-5" key="key" />,
    <UserCheck className="w-5 h-5" key="user" />,
    <Lock className="w-5 h-5" key="lock" />,
    <LogOut className="w-5 h-5" key="logout" />,
  ];

  return (
    <section
      id="keamanan"
      className="bg-white border-b border-[#111111] py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Headline and Icon */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#666666] tracking-widest uppercase mb-3">
              <span className="w-6 h-[1.5px] bg-[#111111]" />
              KEAMANAN & PRIVASI
            </div>

            <div className="w-14 h-14 bg-[#111111] text-white flex items-center justify-center mb-6">
              <Lock className="w-7 h-7" />
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-[#111111] tracking-tight leading-[1.12] mb-4">
              Data keuangan Anda tetap milik Anda.
            </h2>

            <p className="text-base text-[#666666] leading-relaxed mb-6">
              Keuangan UMKM dirancang dengan autentikasi akun sehingga data keuangan hanya dapat diakses oleh pemilik akun. Kami berkomitmen menjaga integritas data tanpa klaim berlebihan yang menyesatkan.
            </p>

            <div className="p-4 bg-[#F5F5F3] border border-[#111111] text-xs font-mono text-[#222222]">
              <span className="font-bold block mb-1">KOMITMEN PRIVASI UMKM:</span>
              Data transaksi, aset, dan catatan laba Anda tidak pernah dijual atau dibagikan ke pihak periklanan manapun.
            </div>
          </div>

          {/* Right Column: 4 Factual Security Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {securityPoints.map((point, index) => (
              <div
                key={point.title}
                className="p-6 bg-[#F5F5F3] border border-[#111111] flex flex-col justify-between hover:bg-white transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 bg-white border border-[#111111] flex items-center justify-center text-[#111111]">
                      {icons[index]}
                    </div>
                    <span className="text-xs font-mono font-bold text-[#666666]">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#111111] mb-2 leading-snug">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                    {point.detail}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#D9D9D9] flex items-center gap-1.5 text-xs font-mono text-[#111111]">
                  <Check className="w-3.5 h-3.5" />
                  <span>Faktual & Teruji</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
