import React, { useState } from 'react';
import { PRICING_PLANS, PRICING_FAQS } from '../data/ddinterData';
import { PricingPlan, UserProfile } from '../types';
import { 
  Check, 
  X, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  ArrowLeft, 
  ArrowRight, 
  HelpCircle, 
  ChevronDown, 
  CreditCard, 
  Building2, 
  PhoneCall,
  CheckCircle2,
  Lock
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
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
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
    if (window.location.pathname !== '/') {
      window.history.pushState(null, '', '/');
    }
    onSelectTab('landing');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <div className="space-y-16 pb-20 bg-slate-50 text-slate-900 transition-colors duration-300">
      
      {/* =========================================================================
          HERO HEADER SECTION
          ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-teal-50/60 via-white to-slate-50 pt-10 sm:pt-14 pb-12 sm:pb-16 border-b border-slate-200/80">
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

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-[11px] font-black text-teal-800 uppercase tracking-wider font-outfit shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>Pilihan Lisensi Resmi &amp; Investasi Praktik Klinis</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-outfit">
            Tarif &amp; Lisensi Layanan FARMASIDRUGGIST
          </h1>

          <p className="text-sm sm:text-base text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Akses penuh ke ekosistem 26 modul farmasi klinis berstandar Evidence-Based Medicine (EBM), PNPK Kemenkes, dan DDInter 2.0. Pilih paket yang paling sesuai untuk Anda.
          </p>

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

      {/* =========================================================================
          FEATURE COMPARISON TABLE
          ========================================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-1">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-outfit">
            Perbandingan Fitur Pemula vs Pro
          </h2>
          <p className="text-xs text-slate-500">Detail kapabilitas klinis di setiap level akun</p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden text-xs">
          <div className="grid grid-cols-12 bg-slate-50/90 p-4 border-b border-slate-200 font-black font-outfit text-slate-700">
            <div className="col-span-6 sm:col-span-7">Fitur &amp; Modul Klinis</div>
            <div className="col-span-3 sm:col-span-2 text-center text-slate-600">Pemula</div>
            <div className="col-span-3 text-center text-teal-800">Pro (Rekomendasi)</div>
          </div>

          <div className="divide-y divide-slate-100">
            {[
              { name: 'Katalog Monografi & Dosis Obat BPOM', pemula: '80+ Obat', pro: 'Lengkap (Seluruh BPOM)' },
              { name: 'Cek Interaksi Obat (DDI Global)', pemula: 'Maks. 4 Obat', pro: 'Tanpa Batas (>10 Obat)' },
              { name: 'Interaksi Obat dengan Makanan (DFI) & Jamu', pemula: false, pro: true },
              { name: 'Inkompatibilitas Injeksi IV & ICU (ASHP Trissel)', pemula: false, pro: true },
              { name: 'Kalkulator Penyesuaian Dosis Ginjal (CrCl)', pemula: false, pro: true },
              { name: 'Kalkulator Dosis Anak & Racikan Puyer (BSA)', pemula: false, pro: true },
              { name: 'Kalkulator Beyond-Use Date (USP <795>)', pemula: false, pro: true },
              { name: 'Keamanan Kehamilan & Laktasi (PLLR 2024)', pemula: false, pro: true },
              { name: 'Kriteria Beers 2023 untuk Pasien Geriatri', pemula: false, pro: true },
              { name: 'Klasifikasi AWaRe WHO & Stewardship (PPRA)', pemula: false, pro: true },
              { name: 'Bank Soal Latihan CBT & OSCE UKMPPAI', pemula: false, pro: true },
              { name: 'Kartu Edukasi WhatsApp untuk Pasien', pemula: false, pro: true },
              { name: 'Bantuan Konsultasi Prioritas Admin Apoteker', pemula: false, pro: true },
            ].map((row, idx) => (
              <div key={idx} className="grid grid-cols-12 p-3.5 sm:p-4 items-center hover:bg-slate-50/60 transition-colors">
                <div className="col-span-6 sm:col-span-7 font-medium text-slate-800 pr-2">
                  {row.name}
                </div>
                <div className="col-span-3 sm:col-span-2 text-center text-slate-500 font-semibold">
                  {typeof row.pemula === 'boolean' ? (
                    row.pemula ? <Check className="w-4 h-4 text-teal-600 mx-auto" /> : <X className="w-4 h-4 text-slate-300 mx-auto" />
                  ) : (
                    <span>{row.pemula}</span>
                  )}
                </div>
                <div className="col-span-3 text-center font-bold text-teal-800">
                  {typeof row.pro === 'boolean' ? (
                    <Check className="w-4 h-4 text-emerald-600 mx-auto stroke-[2.5]" />
                  ) : (
                    <span className="text-emerald-700 font-black">{row.pro}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          FAQ SECTION
          ========================================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-1">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-outfit">
            Pertanyaan Sering Diajukan (FAQ)
          </h2>
          <p className="text-xs text-slate-500">Seputar aktivasi akun, pembayaran, dan lisensi Pro</p>
        </div>

        <div className="space-y-3">
          {PRICING_FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;

            return (
              <div 
                key={idx} 
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'border-teal-500 shadow-md ring-1 ring-teal-500/30' 
                    : 'border-slate-200/90 shadow-xs hover:border-teal-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <h3 className={`text-xs sm:text-sm font-bold flex items-center gap-2.5 transition-colors ${
                    isOpen ? 'text-teal-800' : 'text-slate-900'
                  }`}>
                    <span className={`p-1.5 rounded-xl transition-colors shrink-0 ${
                      isOpen ? 'bg-teal-100 text-teal-700' : 'bg-slate-100 text-slate-500'
                    }`}>
                      <HelpCircle className="w-4 h-4" />
                    </span>
                    <span className="font-outfit">{faq.q}</span>
                  </h3>
                  <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-teal-600' : 'text-slate-400'
                  }`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-slate-600 pl-12 leading-relaxed border-t border-slate-100 font-medium">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help Banner */}
        <div className="p-5 rounded-2xl bg-teal-50/80 border border-teal-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-xs sm:text-sm font-bold text-teal-900 font-outfit">
              Ada pertanyaan khusus atau ingin aktivasi kolektif institusi/kampus?
            </h4>
            <p className="text-[11px] text-slate-600">
              Tim apoteker admin kami siap membantu Anda setiap hari via WhatsApp.
            </p>
          </div>
          <button
            onClick={handleDirectWhatsAppPro}
            className="px-4 py-2 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shrink-0 flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Chat WhatsApp Admin</span>
          </button>
        </div>

      </section>

    </div>
  );
};
