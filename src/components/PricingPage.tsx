import React from 'react';
import { PRICING_PLANS } from '../data/ddinterData';
import { PricingPlan, UserProfile } from '../types';
import { 
  Check, 
  ArrowLeft, 
  CheckCircle2
} from 'lucide-react';

interface PricingPageProps {
  currentUser?: UserProfile | null;
  pricingPlans?: PricingPlan[];
  onOpenAuthModal: () => void;
  onSelectTab: (tab: string) => void;
  onOpenPricingModal?: () => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({
  currentUser,
  pricingPlans = PRICING_PLANS,
  onOpenAuthModal,
  onSelectTab
}) => {
  const activePlans = pricingPlans && pricingPlans.length > 0 ? pricingPlans : PRICING_PLANS;

  const handleDirectWhatsAppPro = () => {
    const userName = currentUser?.name || 'Sejawat Farmasi / Calon Pengguna';
    const userEmail = currentUser?.email ? ` (${currentUser.email})` : '';
    const message = `Halo Admin Farmasi Druggist, saya ingin mengambil Promo Paket Pro Tahunan (Rp 199.000 / tahun).\n\n• Nama: ${userName}${userEmail}\n• Paket: Pro Tahunan (Promo Rp 199rb)\n\nMohon petunjuk nomor rekening pembayaran manual dan konfirmasi aktivasinya. Terima kasih!`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/6287778402266?text=${encoded}`, '_blank');
  };

  const handleBackToHome = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState(null, '', '/');
    onSelectTab('landing');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <div className="space-y-16 pb-20 bg-transparent text-slate-900 transition-colors duration-300">
      
      {/* =========================================================================
          HERO HEADER SECTION
          ========================================================================= */}
      <section className="relative overflow-hidden bg-transparent pt-8 sm:pt-12 pb-12 sm:pb-16 border-b border-teal-200/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          
          {/* Back to Home Button */}
          <div className="flex justify-center mb-2">
            <a
              href="/"
              onClick={handleBackToHome}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-600 hover:text-teal-900 bg-white hover:bg-slate-100 border border-slate-200/90 shadow-2xs transition-all hover:scale-105"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-teal-600" />
              <span>Kembali ke Beranda</span>
            </a>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-outfit">
            Tarif &amp; Lisensi Layanan FARMASIDRUGGIST
          </h1>

          {/* Quick highlights row */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-2 text-xs font-semibold text-slate-600">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              <span>Akses Multi-Device (HP &amp; Laptop)</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              <span>Aktivasi Instan &amp; Praktis</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              <span>Bebas Iklan &amp; Teruji Klinis</span>
            </span>
          </div>

        </div>
      </section>

      {/* =========================================================================
          PRICING CARDS SECTION
          ========================================================================= */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {activePlans.map((plan) => {
            const isPopular = plan.isPopular;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-6 sm:p-8 border flex flex-col justify-between relative transition-all ${
                  isPopular 
                    ? 'bg-gradient-to-b from-white via-teal-50/20 to-emerald-50/15 border-2 border-teal-500 shadow-2xl shadow-teal-900/10 scale-[1.02]' 
                    : 'bg-white border-slate-200/90 shadow-lg hover:border-teal-400/50'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 text-[10.5px] font-black rounded-full uppercase tracking-wider shadow-md bg-gradient-to-r from-amber-400 to-amber-300 text-slate-950 font-outfit border border-amber-200">
                    {plan.badge}
                  </div>
                )}

                <div className="space-y-4 text-left">
                  <div>
                    <h2 className="text-2xl font-black text-slate-900 font-outfit">{plan.name}</h2>
                    <p className="text-xs text-slate-500 mt-1 min-h-[32px] font-medium leading-relaxed">{plan.description}</p>
                  </div>

                  <div className="border-y border-slate-100 py-4">
                    {plan.originalPriceFormatted && (
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs line-through text-slate-400 font-bold decoration-rose-500 decoration-2">
                          {plan.originalPriceFormatted} / tahun
                        </span>
                        {plan.discountBadge && (
                          <span className="bg-rose-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-2xs font-outfit">
                            {plan.discountBadge}
                          </span>
                        )}
                      </div>
                    )}
                    <div className="flex items-baseline gap-1.5">
                      {plan.priceValue > 0 && <span className="text-sm font-bold text-slate-500">Rp</span>}
                      <span className="text-4xl font-black text-slate-900 font-outfit">
                        {plan.priceValue === 0 ? 'Gratis' : plan.priceValue.toLocaleString('id-ID')}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {plan.priceValue === 0 ? 'Selamanya' : '/tahun'}
                      </span>
                    </div>
                    {plan.priceValue > 0 && (
                      <p className="text-xs text-teal-600 font-black mt-1">
                        Hanya ~Rp 16.500 / bulan (Hemat Rp 800.000!)
                      </p>
                    )}
                  </div>

                  <ul className="space-y-2.5 text-xs text-slate-700">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span className="font-medium leading-tight">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <button
                    onClick={plan.priceValue === 0 ? onOpenAuthModal : handleDirectWhatsAppPro}
                    className={`w-full py-3.5 sm:py-4 rounded-full font-black text-xs transition-all cursor-pointer font-outfit shadow-md ${
                      isPopular
                        ? 'bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-300 hover:from-amber-300 hover:to-yellow-300 text-slate-950 shadow-amber-900/10 hover:scale-[1.02] active:scale-95'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300 hover:scale-[1.01] active:scale-95'
                    }`}
                  >
                    {plan.priceValue === 0 ? 'Mulai Akses Pemula Gratis' : 'Ambil Promo Paket Pro Rp 199rb / Tahun'}
                  </button>
                  <p className="text-[10px] text-center text-slate-400 mt-2 font-medium">
                    {plan.priceValue === 0 ? 'Tanpa kartu kredit • Langsung pakai' : 'Konfirmasi instan via WhatsApp Admin'}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
