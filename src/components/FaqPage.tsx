import React, { useState, useMemo } from 'react';
import { PRICING_FAQS } from '../data/ddinterData';
import { 
  HelpCircle, 
  ChevronDown, 
  ArrowLeft, 
  Search, 
  Sparkles, 
  ShieldCheck, 
  Database, 
  CheckCircle2,
  ExternalLink,
  BookOpen,
  CreditCard,
  Lock
} from 'lucide-react';

interface FaqPageProps {
  onSelectTab: (tab: string) => void;
  onOpenAuthModal?: () => void;
}

interface FaqItem {
  id: string;
  category: 'pricing' | 'database' | 'features' | 'security';
  q: string;
  a: string;
}

const ALL_FAQS: FaqItem[] = [
  // Category: Pricing & Akun
  {
    id: 'pricing-1',
    category: 'pricing',
    q: 'Berapa tarif langganan Paket Pro dan berapa lama masa aktifnya?',
    a: 'Paket Pro sedang promo spesial dari harga normal Rp 999.000/tahun menjadi hanya Rp 199.000/tahun (hemat 80% atau hanya ~Rp 16.500/bulan). Masa aktif berlaku 1 tahun penuh (365 hari).'
  },
  {
    id: 'pricing-2',
    category: 'pricing',
    q: 'Apa perbedaan mendasar antara Paket Starter dan Paket Pro?',
    a: 'Paket Starter 100% gratis untuk pencarian seluruh monografi obat, cek interaksi hingga 4 obat sekaligus, modul swamedikasi keluhan apotek & DOWA BPOM, dan panduan cara pakai obat. Paket Pro membuka seluruh 26 modul klinis terpadu: evaluasi polifarmasi tanpa batas (>10 obat sekaligus), kriteria Beers 2023, kompatibilitas IV ICU ASHP Trissel’s, kalkulator BUD racikan USP <795>, dosis anak, keamanan bumil & busui, kartu PIO WhatsApp, Pusat Belajar Farmasi (UKMPPAI & OSCE), interaksi lab semu, jamu/herbal, efek samping Naranjo, kalkulator ginjal & skor medis, panduan terapi PNPK Kemenkes, cetak laporan PDF dengan kop surat faskes, dan arsip riwayat cloud.'
  },
  {
    id: 'pricing-3',
    category: 'pricing',
    q: 'Metode pembayaran apa saja yang didukung untuk Paket Pro?',
    a: 'Kami menerima pembayaran melalui QRIS (GoPay, OVO, Dana, ShopeePay, BCA/Mandiri Mobile) dan Transfer Rekening Bank Manual (BCA, Mandiri, BRI, BNI). Konfirmasi aktivasi dilakukan secara instan via WhatsApp Admin.'
  },
  {
    id: 'pricing-4',
    category: 'pricing',
    q: 'Apakah saya bisa langsung aktif setelah membayar?',
    a: 'Ya, setelah pembayaran terkonfirmasi, akun Anda langsung berstatus Pro Aktif dalam hitungan menit dan seluruh 26 fitur lanjutan dapat langsung digunakan seketika tanpa batasan.'
  },

  // Category: Database & Standar Medis
  {
    id: 'db-1',
    category: 'database',
    q: 'Dari mana sumber data interaksi obat dan seberapa akurat database FarmasiDruggist?',
    a: 'Database kami dibangun berbasis konsensus ilmiah internasional DDInter 2.0 (Computational Biology & Drug Design Group, Nature npj Digital Medicine 2022) yang mencakup 312.000+ pasangan interaksi obat klinis. Data diperkaya dengan referensi ASHP Drug Information, AHFS, Drugs.com Clinical Monograph, Stockley’s Drug Interactions (13th Ed.), Medscape Reference, serta diselaraskan dengan Nomor Izin Edar (NIE) Badan POM RI.'
  },
  {
    id: 'db-2',
    category: 'database',
    q: 'Apakah panduan klinis disesuaikan dengan regulasi dan PNPK Kementerian Kesehatan RI?',
    a: 'Tentu. Modul panduan terapi, FORNAS (Formularium Nasional), dan program PPRA (Program Pengendalian Resistensi Antimikroba) disusun merujuk pada KMK PNPK Kemenkes RI terbaru, konsensus perhimpunan dokter spesialis (PAPDI, PERKI, IDAI, POGI), dan klasifikasi WHO AWaRe 2024.'
  },
  {
    id: 'db-3',
    category: 'database',
    q: 'Seberapa sering database obat dan monografi diperbarui?',
    a: 'Pembaruan data (drug database ingestion) dilakukan secara berkala setiap bulan untuk memasukkan obat baru yang terdaftar di BPOM RI, revisi penarikan obat (safety alerts), dan bukti uji klinis interaksi obat terbaru.'
  },

  // Category: Fitur & Penggunaan
  {
    id: 'feat-1',
    category: 'features',
    q: 'Apakah aplikasi ini bisa diakses melalui smartphone (HP) atau tablet?',
    a: 'Bisa. FarmasiDruggist dirancang responsif secara optimal (Web App PWA). Anda dapat membukanya melalui peramban (Chrome, Safari, Edge) di HP Android, iPhone, iPad, tablet, maupun laptop/komputer tanpa perlu instalasi aplikasi berat dari app store.'
  },
  {
    id: 'feat-2',
    category: 'features',
    q: 'Bagaimana cara mencetak laporan evaluasi interaksi atau kajian resep?',
    a: 'Di modul Cek Interaksi Obat dan Evaluasi Polifarmasi, terdapat tombol "Cetak Laporan Klinis / Ekspor PDF". Anda dapat menyertakan identitas pasien, nomor resep, catatan klinis apoteker, dan kop surat klinik/rumah sakit/apotek Anda.'
  },
  {
    id: 'feat-3',
    category: 'features',
    q: 'Apa itu fitur Kartu Edukasi WhatsApp PIO?',
    a: 'Fitur WhatsApp PIO memungkinkan Apoteker menyusun pesan edukasi cara minum obat, peringatan efek samping, dan jadwal minum pasien dalam format teks rapi dengan satu klik tombol "Kirim via WhatsApp" langsung ke nomor pasien.'
  },

  // Category: Keamanan & Privasi
  {
    id: 'sec-1',
    category: 'security',
    q: 'Bagaimana keamanan data pasien dan catatan telaah resep saya?',
    a: 'Data telaah resep dan catatan pasien disimpan dengan enkripsi standar industri (Google Cloud Firestore Security Rules) yang terikat langsung pada ID akun terverifikasi Anda. Tenaga kesehatan lain atau pihak eksternal tidak dapat membaca data telaah resep Anda.'
  },
  {
    id: 'sec-2',
    category: 'security',
    q: 'Jika saya berganti perangkat/HP, apakah riwayat analisis saya hilang?',
    a: 'Tidak. Selama Anda login menggunakan email dan password akun yang sama, seluruh riwayat analisis, catatan klinis, dan status langganan Anda akan otomatis tersinkronisasi secara real-time.'
  }
];

export const FaqPage: React.FC<FaqPageProps> = ({ onSelectTab, onOpenAuthModal }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'pricing' | 'database' | 'features' | 'security'>('all');
  const [openFaqId, setOpenFaqId] = useState<string | null>('pricing-1');

  const filteredFaqs = useMemo(() => {
    return ALL_FAQS.filter((faq) => {
      const matchCategory = selectedCategory === 'all' || faq.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch = !q || faq.q.toLowerCase().includes(q) || faq.a.toLowerCase().includes(q);
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          
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
            Pertanyaan Sering Diajukan (FAQ)
          </h1>

          {/* FAQ Search Bar */}
          <div className="max-w-xl mx-auto pt-2">
            <div className="relative flex items-center bg-white rounded-2xl p-1.5 border border-slate-200 shadow-md focus-within:border-teal-500 focus-within:ring-4 focus-within:ring-teal-500/10 transition-all">
              <Search className="w-4 h-4 text-teal-600 ml-3 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari pertanyaan (misal: tarif, cara bayar, akurasi, cetak PDF)..."
                className="w-full px-3 py-2 text-slate-900 placeholder-slate-400 font-medium text-xs sm:text-sm focus:outline-none bg-transparent"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="px-2.5 py-1 text-xs text-slate-400 hover:text-slate-600 font-bold"
                >
                  Reset
                </button>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          FAQ CONTENT & ACCORDION SECTION
          ========================================================================= */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Category Filter Pills (Semua 5 Kategori Rapi dalam 1 Baris) */}
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-2 overflow-x-auto pb-1 max-w-full">
          {[
            { id: 'all', label: 'Semua Pertanyaan', count: ALL_FAQS.length },
            { id: 'pricing', label: 'Tarif & Akun Pro', count: ALL_FAQS.filter(f => f.category === 'pricing').length },
            { id: 'database', label: 'Database & Standar Medis', count: ALL_FAQS.filter(f => f.category === 'database').length },
            { id: 'features', label: 'Modul & Fitur Klinis', count: ALL_FAQS.filter(f => f.category === 'features').length },
            { id: 'security', label: 'Keamanan & Privasi', count: ALL_FAQS.filter(f => f.category === 'security').length }
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-3 sm:px-3.5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer font-outfit flex items-center gap-1.5 shadow-2xs shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-teal-600 text-white shadow-teal-700/20'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/90'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                selectedCategory === cat.id ? 'bg-teal-700 text-teal-100' : 'bg-slate-100 text-slate-500'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="max-w-4xl mx-auto space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 space-y-3 shadow-xs">
              <HelpCircle className="w-10 h-10 text-slate-300 mx-auto" />
              <p className="font-bold text-slate-700 font-outfit text-sm">Tidak menemukan pertanyaan yang cocok</p>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                Coba gunakan kata kunci lain atau hubungi admin bantuan kami langsung melalui WhatsApp.
              </p>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;

              return (
                <div 
                  key={faq.id} 
                  className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen 
                      ? 'border-teal-500 shadow-md ring-1 ring-teal-500/30' 
                      : 'border-slate-200/90 shadow-xs hover:border-teal-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                  >
                    <h3 className={`text-xs sm:text-sm font-bold flex items-center gap-2.5 transition-colors ${
                      isOpen ? 'text-teal-700' : 'text-slate-900'
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
            })
          )}
        </div>

      </section>

    </div>
  );
};
