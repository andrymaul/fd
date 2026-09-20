import React, { useState, useMemo, useEffect, useRef } from 'react';
import { PRICING_PLANS, PRICING_FAQS, INITIAL_INTERACTIONS } from '../data/ddinterData';
import { Drug, DrugInteraction, DrugFoodInteraction, UserProfile, PricingPlan } from '../types';
import { 
  ShieldAlert, 
  CheckCircle2, 
  Database, 
  Sparkles, 
  Search, 
  ArrowRight, 
  Check, 
  HelpCircle, 
  Activity, 
  Stethoscope, 
  Calculator, 
  ShieldCheck, 
  Zap, 
  BookMarked, 
  Plus, 
  X, 
  Pill, 
  AlertTriangle, 
  Trash2,
  Lock,
  CalendarClock,
  HeartHandshake,
  FlaskConical,
  Leaf,
  GraduationCap,
  HeartPulse,
  Baby,
  Syringe,
  MessageSquare,
  ClipboardList,
  Scale,
  BookOpen,
  ChevronRight,
  ChevronDown,
  Copy,
  CheckCheck,
  Building2,
  Smartphone,
  Send,
  Brain,
  RotateCcw,
  Layers,
  Star,
  Quote,
  Clock,
  AlertOctagon,
  Utensils,
  Flame,
  ExternalLink
} from 'lucide-react';
import { resolveDrugFromDDInter, resolveInteractionPair, evaluateFoodInteractions, sortInteractionsByDDInterPriority } from '../utils/ddinterEngine';
import { FloatingPillsBackground } from './FloatingPillsBackground';
import { SingleColumnFeatureSpotlight } from './SingleColumnFeatureSpotlight';
import { SWAMEDIKASI_PROTOCOLS, searchSwamedikasiProtocols } from '../data/swamedikasiData';
import { SwamedikasiProtocol } from '../types';

interface LandingPageProps {
  drugs: Drug[];
  interactions?: DrugInteraction[];
  foodInteractions?: DrugFoodInteraction[];
  currentUser?: UserProfile | null;
  pricingPlans?: PricingPlan[];
  onSelectTab: (tab: string) => void;
  onOpenSwamedikasiProtocol?: (protocolId: string) => void;
  onSearchDrug?: (query: string) => void;
  onOpenPricingModal: () => void;
  onOpenAuthModal: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  drugs,
  interactions = INITIAL_INTERACTIONS,
  foodInteractions = [],
  currentUser,
  pricingPlans = PRICING_PLANS,
  onSelectTab,
  onOpenSwamedikasiProtocol,
  onSearchDrug,
  onOpenPricingModal,
  onOpenAuthModal
}) => {
  const [heroSearch, setHeroSearch] = useState('');
  const [activePlaygroundTab, setActivePlaygroundTab] = useState<'ddi' | 'swamedikasi' | 'srq20'>('ddi');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Playground Swamedikasi State: Searchable Dropdown (starts empty so user can choose)
  const [selectedProtocolId, setSelectedProtocolId] = useState<string>('');
  const [isSwamedikasiDropdownOpen, setIsSwamedikasiDropdownOpen] = useState(false);
  const [swamedikasiSearchQuery, setSwamedikasiSearchQuery] = useState('');
  const swamedikasiDropdownRef = useRef<HTMLDivElement>(null);
  const swamedikasiSearchInputRef = useRef<HTMLInputElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (swamedikasiDropdownRef.current && !swamedikasiDropdownRef.current.contains(event.target as Node)) {
        setIsSwamedikasiDropdownOpen(false);
      }
    };
    if (isSwamedikasiDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSwamedikasiDropdownOpen]);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isSwamedikasiDropdownOpen) {
      setTimeout(() => {
        swamedikasiSearchInputRef.current?.focus();
      }, 50);
    }
  }, [isSwamedikasiDropdownOpen]);

  // Close dropdown on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSwamedikasiDropdownOpen) {
        setIsSwamedikasiDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSwamedikasiDropdownOpen]);

  const filteredSwamedikasiProtocols = useMemo(() => {
    if (!swamedikasiSearchQuery.trim()) return SWAMEDIKASI_PROTOCOLS;
    return searchSwamedikasiProtocols(swamedikasiSearchQuery);
  }, [swamedikasiSearchQuery]);

  const groupedSwamedikasiProtocols = useMemo(() => {
    const groups: { [cat: string]: SwamedikasiProtocol[] } = {};
    filteredSwamedikasiProtocols.forEach((p) => {
      const cat = p.categoryLabel || 'Lainnya';
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push(p);
    });
    return groups;
  }, [filteredSwamedikasiProtocols]);

  const activePlaygroundProtocol = useMemo(() => {
    if (!selectedProtocolId) return null;
    return SWAMEDIKASI_PROTOCOLS.find(p => p.id === selectedProtocolId) || null;
  }, [selectedProtocolId]);

  const popularSwamedikasiPresets = useMemo(() => [
    { id: 'swam-demam-dewasa', label: 'Demam & Meriang Dewasa' },
    { id: 'swam-maag-dispepsia', label: 'Maag & Dispepsia' },
    { id: 'swam-flu-hidung-tersumbat', label: 'Flu & Hidung Tersumbat' },
    { id: 'swam-batuk-berdahak', label: 'Batuk Berdahak' },
    { id: 'swam-sakit-gigi', label: 'Sakit Gigi & Gusi' },
    { id: 'swam-diare-dewasa', label: 'Diare Dewasa' },
  ], []);

  // Feedback Questionnaire to WhatsApp State
  const [feedbackName, setFeedbackName] = useState('');
  const [feedbackProfession, setFeedbackProfession] = useState('');
  const [feedbackInstitution, setFeedbackInstitution] = useState('');
  const [feedbackCity, setFeedbackCity] = useState('');
  const [feedbackRating, setFeedbackRating] = useState(5);
  const [feedbackModule, setFeedbackModule] = useState('Cek Interaksi Obat (DDInter Multi-Consensus)');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleSendFeedbackWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const stars = '⭐'.repeat(feedbackRating);
    const message = `Halo Admin FarmasiDruggist, saya ingin menyampaikan testimoni / saran pengguna:

👤 *Nama:* ${feedbackName.trim() || 'Rekan Sejawat'}
🩺 *Profesi:* ${feedbackProfession.trim() || '-'}
🏥 *Instansi / Institusi:* ${feedbackInstitution.trim() || '-'}
📍 *Kota / Daerah:* ${feedbackCity.trim() || '-'}
⭐ *Rating Kepuasan:* ${stars} (${feedbackRating}/5)
🔬 *Modul yang Dinilai:* ${feedbackModule}
💬 *Ulasan, Masukan & Saran:*
"${feedbackMessage.trim() || 'Aplikasi FarmasiDruggist sangat membantu praktik kefarmasian klinis.'}"`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/6287778402266?text=${encoded}`, '_blank');
  };

  const handleDirectWhatsAppPro = () => {
    const userName = currentUser?.name || 'Sejawat Farmasi / Calon Pengguna';
    const userEmail = currentUser?.email ? ` (${currentUser.email})` : '';
    const message = `Halo Admin Farmasi Druggist, saya ingin mengambil Promo Paket Pro Tahunan (Rp 199.000 / tahun).\n\n• Nama: ${userName}${userEmail}\n• Paket: Pro Tahunan (Promo Rp 199rb)\n\nMohon petunjuk nomor rekening pembayaran manual dan konfirmasi aktivasinya. Terima kasih!`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/6287778402266?text=${encoded}`, '_blank');
  };

  // Animated rotating placeholder for hero search bar
  const samplePlaceholders = useMemo(() => [
    'Cari Warfarin, Simvastatin, Clopidogrel...',
    'Cari Keluhan: Meriang, Sakit Maag, Diare, Flu Batuk...',
    'Cari Paxlovid, Ketoconazole, Amiodarone...',
    'Cari Paracetamol, Amoxicillin, Cetirizine...',
    'Cari Dosis Puyer Anak, Salbutamol, Dexamethasone...',
    'Cari Interaksi Obat Bumil & Busui Trimester 1-3...'
  ], []);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % samplePlaceholders.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [samplePlaceholders.length]);

  // =========================================================================
  // 1. PLAYGROUND: DDI INTERACTIVE CHECKER STATE
  // =========================================================================
  const [interactiveSelectedDrugs, setInteractiveSelectedDrugs] = useState<Drug[]>([]);
  const [interactiveSearchInput, setInteractiveSearchInput] = useState('');

  const demoPresets = [
    { label: 'Simvastatin + Gemfibrozil (DDI)', drugs: ['Simvastatin', 'Gemfibrozil'] },
    { label: 'Warfarin + Aspirin (DDI)', drugs: ['Warfarin', 'Aspirin'] },
    { label: 'Simvastatin + Jus Grapefruit (DFI)', drugs: ['Simvastatin'] },
    { label: 'Calcium Lactate + Bayam (DFI)', drugs: ['Calcium lactate'] },
    { label: 'Ciprofloxacin + Antasida (DDI)', drugs: ['Ciprofloxacin', 'Antasida'] },
    { label: 'Irbesartan + Alkohol (DFI)', drugs: ['Irbesartan'] }
  ];

  const handleApplyPreset = (presetDrugNames: string[]) => {
    const resolvedList: Drug[] = [];
    presetDrugNames.forEach(name => {
      const found = resolveDrugFromDDInter(name, drugs);
      if (found && !resolvedList.some(d => d.id === found.id)) {
        resolvedList.push(found);
      }
    });
    setInteractiveSelectedDrugs(resolvedList);
    setInteractiveSearchInput('');
  };

  const handleAddInteractiveDrug = (drugToAdd: Drug) => {
    if (!interactiveSelectedDrugs.some(d => d.id === drugToAdd.id || d.name.toLowerCase() === drugToAdd.name.toLowerCase())) {
      setInteractiveSelectedDrugs(prev => [...prev, drugToAdd]);
    }
    setInteractiveSearchInput('');
  };

  const handleRemoveInteractiveDrug = (id: string) => {
    setInteractiveSelectedDrugs(prev => prev.filter(d => d.id !== id));
  };

  const interactiveSearchResults = interactiveSearchInput.trim()
    ? drugs.filter(
        (d) =>
          (d.name.toLowerCase().includes(interactiveSearchInput.toLowerCase().trim()) ||
           d.genericName.toLowerCase().includes(interactiveSearchInput.toLowerCase().trim()) ||
           d.brandNames?.some((b) => b.toLowerCase().includes(interactiveSearchInput.toLowerCase().trim()))) &&
          !interactiveSelectedDrugs.some(selected => selected.id === d.id)
      ).slice(0, 6)
    : [];

  const interactiveMatchedInteractions: DrugInteraction[] = useMemo(() => {
    const list: DrugInteraction[] = [];
    for (let i = 0; i < interactiveSelectedDrugs.length; i++) {
      for (let j = i + 1; j < interactiveSelectedDrugs.length; j++) {
        const drugA = interactiveSelectedDrugs[i];
        const drugB = interactiveSelectedDrugs[j];
        const found = resolveInteractionPair(drugA, drugB, interactions || INITIAL_INTERACTIONS);
        if (found) {
          list.push(found);
        }
      }
    }
    return sortInteractionsByDDInterPriority(list);
  }, [interactiveSelectedDrugs, interactions]);

  // Live Food Interactions (DFI) matching against current selected drugs with automatic Indonesian localization & deduplication
  const interactiveMatchedFoodInteractions: DrugFoodInteraction[] = useMemo(() => {
    if (!interactiveSelectedDrugs.length) return [];
    return evaluateFoodInteractions(interactiveSelectedDrugs, foodInteractions || []);
  }, [interactiveSelectedDrugs, foodInteractions]);


  const activePlans = pricingPlans && pricingPlans.length > 0 ? pricingPlans : PRICING_PLANS;

  const handleHeroSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (heroSearch.trim()) {
      const q = heroSearch.toLowerCase().trim();
      const swamedikasiKeywords = [
        'meriang', 'demam', 'maag', 'lambung', 'gerd', 'diare', 'mencret', 
        'flu', 'pilek', 'mampet', 'batuk', 'dahak', 'sariawan', 'biduran', 
        'gatal', 'alergi', 'mabuk', 'wasir', 'sembelit', 'konstipasi', 
        'mata merah', 'sakit gigi', 'panu', 'kadas', 'kurap'
      ];
      if (swamedikasiKeywords.some(k => q.includes(k))) {
        onSelectTab('swamedikasi');
        return;
      }
      if (onSearchDrug) onSearchDrug(heroSearch);
      onSelectTab('drugs');
    }
  };

  // =========================================================================
  // SRQ-20 PUBLIC HEALTH SELF-ASSESSMENT STATE & HANDLERS
  // =========================================================================
  const [publicSrqScores, setPublicSrqScores] = useState<number[]>(Array(20).fill(0));
  const [isSrqCopied, setIsSrqCopied] = useState(false);

  const calculatePublicSrq = () => {
    const totalScore = publicSrqScores.reduce((a, b) => a + b, 0);
    const hasSuicidalIdeation = publicSrqScores[16] === 1; // Item 17 (0-indexed 16)

    if (totalScore >= 12) {
      return {
        score: totalScore,
        category: 'Distres Psikologis Berat / GME Signifikan',
        badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
        textColor: 'text-rose-400',
        recommendation:
          'Skor Anda (>= 12 dari 20) mengindikasikan beban psikologis dan emosional yang cukup berat dalam 30 hari terakhir. Kondisi ini sangat wajar terjadi pada situasi penuh tekanan, namun memerlukan bantuan profesional. Sangat disarankan untuk berkonsultasi langsung ke Dokter Spesialis Kedokteran Jiwa (Psikiater) atau Psikolog Klinis di Puskesmas / Rumah Sakit terdekat untuk evaluasi dan pendampingan yang tepat.',
        hasSuicidalIdeation
      };
    } else if (totalScore >= 6) {
      return {
        score: totalScore,
        category: 'Terindikasi Gangguan Mental Emosional (GME)',
        badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
        textColor: 'text-amber-400',
        recommendation:
          'Skor Anda mencapai batas ambang Kemenkes RI (>= 6 poin). Anda kemungkinan mengalami distres emosional bermakna (seperti rasa cemas, murung berlarut, atau keluhan fisik akibat stres/psikosomatis). Lakukan teknik relaksasi pernapasan, bicarakan beban pikiran dengan orang terpercaya, dan jangan ragu untuk berkonsultasi ke dokter di faskes primer/Puskesmas jika keluhan menetap lebih dari 2 minggu.',
        hasSuicidalIdeation
      };
    } else {
      return {
        score: totalScore,
        category: 'Dalam Batas Normal (Kondisi Adaptif)',
        badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
        textColor: 'text-emerald-400',
        recommendation:
          'Skor Anda (< 6 poin) menunjukkan bahwa kondisi kesehatan mental dan emosional Anda dalam 30 hari terakhir berada dalam batas adaptif normal. Pertahankan pola hidup sehat, waktu istirahat yang cukup, olahraga teratur, dan koping stres harian yang positif.',
        hasSuicidalIdeation
      };
    }
  };

  const handleCopySrqResult = () => {
    const res = calculatePublicSrq();
    const text = `[HASIL SKRINING KESEHATAN MENTAL MANDIRI (SRQ-20 KEMENKES RI / WHO)]
Tanggal Pemeriksaan: ${new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
Total Skor: ${res.score} dari 20 (Jawaban "Ya")
Klasifikasi: ${res.category}
Status Butir 17 (Pikiran Mengakhiri Hidup): ${res.hasSuicidalIdeation ? 'POSITIF / RED FLAG (Wajib Bantuan Darurat Segera)' : 'Negatif'}

Rekomendasi:
${res.recommendation}

Catatan Penting:
Skrining ini bersifat indikatif awal mandiri dan tidak menggantikan diagnosis klinis oleh psikiater/psikolog.
Layanan Bantuan Darurat Kemenkes RI: SEJIWA (119 ext 8) | Halo Kemenkes (1500-567)
Diskrining via FarmasiDruggist (https://farmasidruggist.com)`;

    navigator.clipboard.writeText(text).then(() => {
      setIsSrqCopied(true);
      setTimeout(() => setIsSrqCopied(false), 3000);
    });
  };

  const publicSrqQuestions = [
    '1. Apakah Anda sering menderita sakit kepala?',
    '2. Apakah Anda tidak nafsu makan?',
    '3. Apakah Anda sulit tidur nyenyak?',
    '4. Apakah Anda mudah merasa takut?',
    '5. Apakah Anda merasa cemas, tegang, atau khawatir?',
    '6. Apakah tangan Anda gemetar?',
    '7. Apakah pencernaan Anda terganggu atau perut sering kembung?',
    '8. Apakah Anda merasa sulit untuk berpikir jernih?',
    '9. Apakah Anda merasa tidak bahagia, murung, atau sedih?',
    '10. Apakah Anda lebih sering menangis daripada biasanya?',
    '11. Apakah Anda merasa sulit untuk menikmati kegiatan sehari-hari?',
    '12. Apakah Anda merasa sulit untuk mengambil keputusan?',
    '13. Apakah pekerjaan atau aktivitas sehari-hari Anda terganggu?',
    '14. Apakah Anda merasa tidak mampu berperan aktif dalam kehidupan?',
    '15. Apakah Anda kehilangan minat pada hal-hal yang biasanya Anda sukai?',
    '16. Apakah Anda merasa diri Anda tidak berharga?',
    '17. Pernahkah Anda mempunyai pikiran untuk mengakhiri hidup Anda? (Red Flag Kritis)',
    '18. Apakah Anda merasa lelah sepanjang waktu?',
    '19. Apakah Anda mengalami rasa tidak enak atau perih di lambung/perut?',
    '20. Apakah Anda mudah merasa lelah atau lesu?'
  ];

  return (
    <div className="space-y-16 pb-24 bg-slate-50 text-slate-900 transition-colors duration-300">
      
      {/* =========================================================================
          HERO SECTION: Clean Medical Canvas & Modern SaaS Architecture (ala Lynk.id)
          ========================================================================= */}
      <section id="hero-section" className="relative overflow-hidden bg-gradient-to-b from-teal-50/60 via-white to-slate-50 text-slate-900 pt-10 sm:pt-14 pb-20 sm:pb-24 border-b border-slate-200/80">
        {/* Floating Pills Background Particles - Subtle Tint */}
        <FloatingPillsBackground density="low" accentColor="#0d9488" />

        {/* Spatial Radiant Glow Mesh - Soft Pastel Ambient Atmosphere */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[550px] bg-gradient-to-tr from-teal-200/35 via-cyan-200/25 to-emerald-200/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] h-[350px] bg-teal-100/40 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 -left-32 w-80 h-80 bg-teal-100/30 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/3 -right-32 w-80 h-80 bg-cyan-100/30 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* =========================================================================
              2-COLUMN SPLIT HERO GRID: TEXT ON LEFT, CRISP LIVE UI MOCKUP ON RIGHT
              ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column (Span 5 Kolom di Desktop): Copywriting, Search, & CTA */}
            <div className="lg:col-span-5 text-left space-y-5">
              
              {/* Clean Kicker with Pulse Dot */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-teal-50/90 border border-teal-200/90 text-teal-800 text-xs font-bold shadow-xs backdrop-blur-md">
                <span className="w-3.5 h-0.5 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 inline-block shadow-[0_0_8px_rgba(45,212,191,0.8)]" />
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                </span>
                <span className="tracking-wider uppercase text-[10px] sm:text-[11px] font-extrabold text-teal-900">
                  EKOSISTEM DIGITAL 26 MODUL KEFARMASIAN
                </span>
              </div>

              {/* Main Headline with Geometric Sans & High-Contrast Gradient Word */}
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] font-black text-slate-900 tracking-tight leading-[1.14] font-outfit">
                Platform Informasi Obat Terpadu &amp; Kalkulator Klinis yang{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700 drop-shadow-xs">
                  Presisi.
                </span>
              </h1>

              {/* Subtitle - Scannable & High-Readability */}
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-xl">
                <strong className="text-slate-900 font-bold">FARMASIDRUGGIST</strong> mengintegrasikan <strong className="text-teal-700 font-bold">26 Modul Klinis Terpadu</strong>: Skrining Interaksi multi-database global (DDInter, Stockley, Lexicomp), Stewardship Antibiotik PPRA (AWaRe), Generator Edukasi AI, Restriksi FORNAS KMK 2025, Swamedikasi &amp; Clinical Triage BPOM, Keamanan Ibu Hamil PLLR, Kalkulator BUD USP &lt;795&gt;, hingga Evaluasi Geriatri Beers 2023.
              </p>

              {/* Hero Quick Search Box - Crisp White Card ala Lynk.id */}
              <form onSubmit={handleHeroSearchSubmit} className="pt-1">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400/30 via-cyan-400/30 to-emerald-400/30 rounded-2xl blur-sm opacity-50 group-hover:opacity-80 group-focus-within:opacity-100 transition duration-500"></div>
                  <div className="relative flex items-center bg-white rounded-2xl p-1.5 sm:p-2 border border-slate-200/90 shadow-xl shadow-teal-950/5">
                    <Search className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 ml-2 shrink-0" />
                    <input
                      type="text"
                      value={heroSearch}
                      onChange={(e) => setHeroSearch(e.target.value)}
                      placeholder={samplePlaceholders[placeholderIndex]}
                      className="w-full px-2.5 py-1.5 sm:py-2 text-slate-900 placeholder-slate-400 font-semibold text-xs sm:text-sm focus:outline-none bg-transparent transition-all"
                    />
                    <button
                      type="submit"
                      className="px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-black text-xs sm:text-sm rounded-xl shadow-md shadow-teal-600/20 transition-all shrink-0 flex items-center gap-1.5 cursor-pointer border border-teal-500/30 hover:scale-[1.02] active:scale-95 font-outfit"
                    >
                      <span>Cari</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Popular drug sample tags styled as clean micro-pills */}
                <div className="flex flex-wrap items-center gap-1.5 mt-3 text-xs">
                  <span className="font-extrabold text-slate-500 font-outfit text-[11px]">Pencarian Cepat:</span>
                  {['Warfarin', 'Aspirin', 'Simvastatin', 'Sakit Maag', 'Diare'].map((sample) => (
                    <button
                      key={sample}
                      type="button"
                      onClick={() => {
                        if (sample === 'Sakit Maag' || sample === 'Diare') {
                          onSelectTab('swamedikasi');
                        } else {
                          if (onSearchDrug) onSearchDrug(sample);
                          onSelectTab('drugs');
                        }
                      }}
                      className="px-2.5 py-0.5 rounded-full text-[10.5px] font-bold transition-all cursor-pointer bg-white hover:bg-teal-50 text-slate-700 hover:text-teal-900 border border-slate-200 hover:border-teal-300 hover:scale-105 shadow-2xs flex items-center gap-1"
                    >
                      <Pill className="w-2.5 h-2.5 text-teal-600" />
                      <span>{sample}</span>
                    </button>
                  ))}
                </div>
              </form>

              {/* Action Buttons - High-Impact Clean CTA Hierarchy ala Lynk.id */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    const el = document.getElementById('interactive-playground');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 rounded-full bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-600 hover:from-teal-500 hover:to-emerald-500 text-white font-black text-xs sm:text-sm shadow-xl shadow-teal-700/20 hover:shadow-teal-700/30 transition-all flex items-center gap-2.5 cursor-pointer hover:scale-[1.02] active:scale-95 font-outfit group"
                >
                  <span>Coba Simulasi Klinis Gratis</span>
                  <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </span>
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('bento-features');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-5 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 font-bold border border-slate-200 hover:border-slate-300 shadow-xs transition-all flex items-center gap-2 text-xs sm:text-sm cursor-pointer hover:scale-[1.02] active:scale-95"
                >
                  <BookOpen className="w-4 h-4 text-teal-600" />
                  <span>Eksplorasi 26 Modul Terpadu</span>
                </button>
              </div>

            </div>

            {/* Right Column (Span 7 Kolom di Desktop): Floating Clean Live UI Mockup Card ala Lynk.id */}
            <div className="lg:col-span-7">
              <div className="relative group">
                {/* Outer Glow Ambient Halo */}
                <div className="absolute -inset-4 bg-gradient-to-r from-teal-200/40 via-cyan-200/30 to-emerald-200/40 rounded-[40px] blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full border border-teal-200/40 pointer-events-none animate-[spin_30s_linear_infinite]" />
                <div className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full border border-emerald-200/40 pointer-events-none" />

                {/* Floating Glass Badge */}
                <div className="absolute -top-3.5 right-4 sm:right-6 z-20 px-3.5 py-1 rounded-full bg-white/95 border border-teal-200 backdrop-blur-xl shadow-md flex items-center gap-1.5 text-[10px] sm:text-[10.5px] font-black text-teal-800">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500 shrink-0" />
                  <span>99.9% Presisi EBM • Terstandar PNPK</span>
                </div>

                {/* Window Container - Crisp White Card */}
                <div className="relative rounded-3xl bg-white border border-slate-200/90 shadow-2xl shadow-slate-900/8 overflow-hidden transition-all duration-300 group-hover:border-teal-300">
                  
                  {/* Window Title Bar */}
                  <div className="px-4 py-3 bg-slate-50/90 border-b border-slate-200/70 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                      <span className="text-[10.5px] font-mono text-slate-500 ml-2 hidden sm:inline">
                        farmasidruggist-clinical-engine.app • v3.8
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[9.5px] font-black">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Live Multi-Consensus</span>
                      </span>
                    </div>
                  </div>

                  {/* Mockup Dashboard Content */}
                  <div className="p-4 sm:p-5 space-y-4 text-left font-sans">
                    
                    {/* Mock Patient Context Bar */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 p-3 rounded-2xl bg-slate-50/80 border border-slate-200/70">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-black text-xs font-outfit border border-teal-200">
                          PS
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-black text-slate-900">Ny. S (62 th)</span>
                            <span className="text-[9.5px] px-2 py-0.2 rounded-full bg-white text-teal-700 font-mono border border-teal-200">
                              CrCl: 42 mL/min
                            </span>
                          </div>
                          <p className="text-[10px] text-slate-500 font-medium truncate max-w-[240px]">
                            Dx: AFib • Hiperkolesterolemia
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 items-center">
                        <span className="px-2 py-0.5 rounded-lg bg-white text-slate-700 border border-slate-200 text-[10px] font-bold flex items-center gap-1 shadow-2xs">
                          <Pill className="w-2.5 h-2.5 text-teal-600" /> Warfarin 5mg
                        </span>
                        <span className="px-2 py-0.5 rounded-lg bg-white text-slate-700 border border-slate-200 text-[10px] font-bold flex items-center gap-1 shadow-2xs">
                          <Pill className="w-2.5 h-2.5 text-teal-600" /> Aspirin 80mg
                        </span>
                        <span className="px-2 py-0.5 rounded-lg bg-white text-slate-700 border border-slate-200 text-[10px] font-bold flex items-center gap-1 shadow-2xs">
                          <Pill className="w-2.5 h-2.5 text-teal-600" /> Simvastatin 20mg
                        </span>
                      </div>
                    </div>

                    {/* Dual Live Clinical Finding Cards */}
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
                      
                      {/* Finding 1: Major DDI Alert */}
                      <div className="p-3.5 rounded-2xl bg-rose-50/80 border border-rose-200 shadow-xs space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 text-[9px] font-black border border-rose-200 uppercase tracking-wider">
                            <AlertTriangle className="w-3 h-3 text-rose-600" />
                            Interaksi Mayor
                          </span>
                          <span className="text-[9.5px] text-rose-700 font-mono font-bold">Skor: 0.89</span>
                        </div>

                        <div>
                          <h4 className="text-[11.5px] font-black text-slate-900 font-outfit">
                            Warfarin + Aspirin (Antiplatelet Sinergis)
                          </h4>
                          <p className="text-[10px] text-slate-700 mt-0.5 leading-relaxed">
                            Risiko perdarahan mayor GI/intrakranial naik hingga <strong>3.8x</strong> tanpa bukti manfaat proteksi tambahan.
                          </p>
                        </div>

                        <div className="p-2 rounded-xl bg-white border border-rose-200/80 text-[9.5px] text-slate-800 space-y-0.5 shadow-2xs">
                          <div className="font-bold text-rose-700 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-rose-600 shrink-0" />
                            <span>Rekomendasi EBM:</span>
                          </div>
                          <p className="text-slate-600 leading-tight">
                            Evaluasi ulang indikasi. Pantau INR ketat (2.0-2.5) dan resepkan gastroprotektor PPI.
                          </p>
                        </div>
                      </div>

                      {/* Finding 2: Moderate DDI & DFI Alert */}
                      <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200 shadow-xs space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[9px] font-black border border-amber-200 uppercase tracking-wider">
                            <ShieldAlert className="w-3 h-3 text-amber-600" />
                            Interaksi Makanan (DFI)
                          </span>
                          <span className="text-[9.5px] text-amber-700 font-mono font-bold">CYP3A4</span>
                        </div>

                        <div>
                          <h4 className="text-[11.5px] font-black text-slate-900 font-outfit">
                            Simvastatin + Jus Grapefruit
                          </h4>
                          <p className="text-[10px] text-slate-700 mt-0.5 leading-relaxed">
                            Inhibisi enzim CYP3A4 usus menaikkan AUC Simvastatin hingga <strong>330%</strong> (risiko rhabdomyolysis).
                          </p>
                        </div>

                        <div className="p-2 rounded-xl bg-white border border-amber-200/80 text-[9.5px] text-slate-800 space-y-0.5 shadow-2xs">
                          <div className="font-bold text-amber-700 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-amber-600 shrink-0" />
                            <span>Solusi Alternatif:</span>
                          </div>
                          <p className="text-slate-600 leading-tight">
                            Ganti Statin non-CYP3A4 seperti <strong>Rosuvastatin (10mg)</strong> atau Pravastatin.
                          </p>
                        </div>
                      </div>

                    </div>

                    {/* Micro Quick Capability Strip */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 text-[10.5px]">
                      <div className="flex flex-wrap gap-2 text-slate-600 font-medium">
                        <span className="flex items-center gap-1 text-slate-700">
                          <Check className="w-3 h-3 text-teal-600" /> 6 Konsensus Global
                        </span>
                        <span className="flex items-center gap-1 text-slate-700">
                          <Check className="w-3 h-3 text-teal-600" /> Beers 2023
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          const el = document.getElementById('interactive-playground');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="text-teal-700 hover:text-teal-900 font-black text-[10.5px] flex items-center gap-1 transition-colors cursor-pointer group"
                      >
                        <span>Coba Simulasi Langsung</span>
                        <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Full-width Stat Counters Row - Clean White Cards ala Lynk.id */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-6 text-left border-t border-slate-200/70">
            <div className="p-4 bg-white hover:bg-teal-50/30 border border-slate-200/80 hover:border-teal-300 rounded-2xl shadow-sm hover:shadow-xl transition-all hover:scale-[1.02] group">
              <div className="flex items-center justify-between mb-1.5">
                <p className="text-2xl sm:text-3xl font-black text-teal-600 font-outfit group-hover:text-teal-700 transition-colors">
                  {drugs.length > 0 ? `${drugs.length}+` : '80+'}
                </p>
                <Pill className="w-4 h-4 text-teal-500/60 group-hover:text-teal-600 transition-colors" />
              </div>
              <p className="text-[10px] sm:text-[10.5px] font-black uppercase tracking-wider text-slate-400">MONOGRAFI BPOM</p>
              <p className="text-[11px] text-slate-600 font-medium leading-tight mt-0.5">Indikasi, Dosis &amp; Interaksi Lengkap</p>
            </div>

            <div className="p-4 bg-white hover:bg-cyan-50/30 border border-slate-200/80 hover:border-cyan-300 rounded-2xl shadow-sm hover:shadow-xl transition-all hover:scale-[1.02] group">
              <div className="flex items-center justify-between mb-1.5">
                <p className="text-2xl sm:text-3xl font-black text-cyan-600 font-outfit group-hover:text-cyan-700 transition-colors">
                  {interactions && interactions.length > 0 ? `${interactions.length}+` : `${INITIAL_INTERACTIONS.length}+`}
                </p>
                <ShieldAlert className="w-4 h-4 text-cyan-500/60 group-hover:text-cyan-600 transition-colors" />
              </div>
              <p className="text-[10px] sm:text-[10.5px] font-black uppercase tracking-wider text-slate-400">PASANGAN DDI</p>
              <p className="text-[11px] text-slate-600 font-medium leading-tight mt-0.5">Konsensus DDInter 6 Database Global</p>
            </div>

            <div className="p-4 bg-white hover:bg-amber-50/30 border border-slate-200/80 hover:border-amber-300 rounded-2xl shadow-sm hover:shadow-xl transition-all hover:scale-[1.02] group">
              <div className="flex items-center justify-between mb-1.5">
                <p className="text-2xl sm:text-3xl font-black text-amber-600 font-outfit group-hover:text-amber-700 transition-colors">
                  26 Modul
                </p>
                <Layers className="w-4 h-4 text-amber-500/60 group-hover:text-amber-600 transition-colors" />
              </div>
              <p className="text-[10px] sm:text-[10.5px] font-black uppercase tracking-wider text-slate-400">EKOSISTEM TERPADU</p>
              <p className="text-[11px] text-slate-600 font-medium leading-tight mt-0.5">Kalkulator Klinis, PLLR &amp; UKMPPAI</p>
            </div>

            <div className="p-4 bg-white hover:bg-emerald-50/30 border border-slate-200/80 hover:border-emerald-300 rounded-2xl shadow-sm hover:shadow-xl transition-all hover:scale-[1.02] group">
              <div className="flex items-center justify-between mb-1.5">
                <p className="text-2xl sm:text-3xl font-black text-emerald-600 font-outfit group-hover:text-emerald-700 transition-colors">
                  7.000+
                </p>
                <ShieldCheck className="w-4 h-4 text-emerald-500/60 group-hover:text-emerald-600 transition-colors" />
              </div>
              <p className="text-[10px] sm:text-[10.5px] font-black uppercase tracking-wider text-slate-400">SEJAWAT AKTIF</p>
              <p className="text-[11px] text-slate-600 font-medium leading-tight mt-0.5">Apoteker &amp; Tenaga Kesehatan se-Indonesia</p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          STAGE 2: TRUST LOGO STRIP & MEDICAL STANDARDS MARQUEE (Clean ala Lynk.id)
          ========================================================================= */}
      <section id="ebm-standards" className="relative z-10 -mt-8 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-xl shadow-slate-900/5 space-y-4 text-slate-900">
          
          {/* Subtle Ambient Spatial Rim Glows */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-teal-100/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-cyan-100/20 rounded-full blur-3xl pointer-events-none" />

          {/* Header Row */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3.5">
            <div className="flex items-center gap-2.5">
              <span className="p-1.5 rounded-xl bg-teal-50 text-teal-700 border border-teal-200 shadow-inner">
                <ShieldCheck className="w-4 h-4" />
              </span>
              <div>
                <p className="text-[11px] font-black uppercase tracking-wider text-teal-800 font-outfit">
                  Kredibilitas Ilmiah &amp; Validasi Standar Evidence-Based Medicine (EBM)
                </p>
                <p className="text-[10px] text-slate-500 font-medium">
                  Tervalidasi 6 Konsensus Resmi Kedokteran &amp; Farmasi Klinis Global
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => onSelectTab('guidelines')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-teal-50 hover:bg-teal-100 text-teal-800 font-bold text-[10.5px] border border-teal-200 transition-all cursor-pointer shadow-xs group"
              >
                <span>Panduan Terapi PNPK</span>
                <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
              </button>
              <button
                type="button"
                onClick={() => onSelectTab('literature')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold text-[10.5px] border border-slate-200 transition-all cursor-pointer shadow-xs"
              >
                <BookMarked className="w-3 h-3 text-teal-600" />
                <span>Direktori EBM</span>
              </button>
            </div>
          </div>

          {/* 6 Standards Cards - Clean White Cards ala Lynk.id */}
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            
            {/* Standard 1: Kemenkes RI */}
            <div className="p-3.5 rounded-2xl bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-teal-300 transition-all duration-300 group hover:scale-[1.02] shadow-xs hover:shadow-md text-left flex flex-col justify-between space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-black text-xs shrink-0 border border-rose-200">
                  <Building2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-black text-slate-900 group-hover:text-teal-700 font-outfit truncate transition-colors">
                  Kemenkes RI
                </span>
              </div>
              <div>
                <p className="text-[10px] text-slate-600 leading-tight font-medium">
                  PNPK PAPDI &amp; PERKI
                </p>
                <span className="inline-block mt-1 text-[8.5px] font-bold text-teal-700 uppercase tracking-wider">
                  Pedoman Nasional
                </span>
              </div>
            </div>

            {/* Standard 2: BPOM RI */}
            <div className="p-3.5 rounded-2xl bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-sky-300 transition-all duration-300 group hover:scale-[1.02] shadow-xs hover:shadow-md text-left flex flex-col justify-between space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-black text-xs shrink-0 border border-sky-200">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-black text-slate-900 group-hover:text-teal-700 font-outfit truncate transition-colors">
                  Badan POM RI
                </span>
              </div>
              <div>
                <p className="text-[10px] text-slate-600 leading-tight font-medium">
                  CekBPOM &amp; Database NIE
                </p>
                <span className="inline-block mt-1 text-[8.5px] font-bold text-sky-700 uppercase tracking-wider">
                  Regulasi Resmi
                </span>
              </div>
            </div>

            {/* Standard 3: ASHP Trissel's */}
            <div className="p-3.5 rounded-2xl bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-teal-300 transition-all duration-300 group hover:scale-[1.02] shadow-xs hover:shadow-md text-left flex flex-col justify-between space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-black text-xs shrink-0 border border-teal-200">
                  <Syringe className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-black text-slate-900 group-hover:text-teal-700 font-outfit truncate transition-colors">
                  ASHP Trissel's
                </span>
              </div>
              <div>
                <p className="text-[10px] text-slate-600 leading-tight font-medium">
                  Injeksi IV &amp; Y-Site 2024
                </p>
                <span className="inline-block mt-1 text-[8.5px] font-bold text-teal-700 uppercase tracking-wider">
                  Inkompatibilitas
                </span>
              </div>
            </div>

            {/* Standard 4: DDInter Global */}
            <div className="p-3.5 rounded-2xl bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-cyan-300 transition-all duration-300 group hover:scale-[1.02] shadow-xs hover:shadow-md text-left flex flex-col justify-between space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center font-black text-xs shrink-0 border border-cyan-200">
                  <Activity className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-black text-slate-900 group-hover:text-teal-700 font-outfit truncate transition-colors">
                  DDInter Global
                </span>
              </div>
              <div>
                <p className="text-[10px] text-slate-600 leading-tight font-medium">
                  Nature npj Digital Med
                </p>
                <span className="inline-block mt-1 text-[8.5px] font-bold text-cyan-700 uppercase tracking-wider">
                  6 DB Konsensus
                </span>
              </div>
            </div>

            {/* Standard 5: USP <795> & Farmakope */}
            <div className="p-3.5 rounded-2xl bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-amber-300 transition-all duration-300 group hover:scale-[1.02] shadow-xs hover:shadow-md text-left flex flex-col justify-between space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-black text-xs shrink-0 border border-amber-200">
                  <BookMarked className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-black text-slate-900 group-hover:text-teal-700 font-outfit truncate transition-colors">
                  USP &lt;795&gt; &amp; FI VI
                </span>
              </div>
              <div>
                <p className="text-[10px] text-slate-600 leading-tight font-medium">
                  BUD Racikan Non-Steril
                </p>
                <span className="inline-block mt-1 text-[8.5px] font-bold text-amber-700 uppercase tracking-wider">
                  Compounding EBM
                </span>
              </div>
            </div>

            {/* Standard 6: Beers Criteria 2023 */}
            <div className="p-3.5 rounded-2xl bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-emerald-300 transition-all duration-300 group hover:scale-[1.02] shadow-xs hover:shadow-md text-left flex flex-col justify-between space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black text-xs shrink-0 border border-emerald-200">
                  <HeartPulse className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-black text-slate-900 group-hover:text-teal-700 font-outfit truncate transition-colors">
                  Beers 2023 AGS
                </span>
              </div>
              <div>
                <p className="text-[10px] text-slate-600 leading-tight font-medium">
                  Skrining Geriatri AGS
                </p>
                <span className="inline-block mt-1 text-[8.5px] font-bold text-emerald-700 uppercase tracking-wider">
                  Kriteria Lansia
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE CLINICAL PLAYGROUND: 5 LIVE DEMOS (NO LOGIN REQUIRED)
          ========================================================================= */}
      <section id="interactive-playground" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Playground Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 text-xs font-black border border-teal-300 dark:border-teal-800">
              <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>Interactive Clinical Playground</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#082a24] dark:text-white mt-1 font-outfit">
              Uji Coba Langsung Modul Klinis FARMASIDRUGGIST
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
              Pilih tab simulasi di bawah untuk menguji keakuratan perhitungan dan logika klinis secara langsung.
            </p>
          </div>

          {/* Tab Switcher Buttons */}
          <div className="flex flex-wrap gap-1.5 bg-slate-200/80 dark:bg-[#031114]/90 p-1.5 rounded-full border border-slate-300 dark:border-teal-500/30 self-start md:self-auto backdrop-blur-xl shadow-lg">
            <button
              onClick={() => setActivePlaygroundTab('ddi')}
              className={`px-4 py-2 rounded-full text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer font-outfit ${
                activePlaygroundTab === 'ddi'
                  ? 'bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-300 text-slate-950 shadow-md'
                  : 'text-slate-700 dark:text-teal-200 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-teal-500/15'
              }`}
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Interaksi Obat</span>
            </button>

            <button
              onClick={() => setActivePlaygroundTab('swamedikasi')}
              className={`px-4 py-2 rounded-full text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer font-outfit ${
                activePlaygroundTab === 'swamedikasi'
                  ? 'bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-300 text-slate-950 shadow-md'
                  : 'text-slate-700 dark:text-teal-200 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-teal-500/15'
              }`}
            >
              <Stethoscope className="w-3.5 h-3.5" />
              <span>Swamedikasi &amp; Triage</span>
            </button>

            <button
              onClick={() => setActivePlaygroundTab('srq20')}
              className={`px-4 py-2 rounded-full text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer font-outfit ${
                activePlaygroundTab === 'srq20'
                  ? 'bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-300 text-slate-950 shadow-md'
                  : 'text-slate-700 dark:text-teal-200 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-teal-500/15'
              }`}
            >
              <Brain className="w-3.5 h-3.5" />
              <span>Cek Jiwa SRQ-20</span>
            </button>
          </div>
        </div>

        {/* ==================== TAB 1: DDI CHECKER DEMO ==================== */}
        {activePlaygroundTab === 'ddi' && (
          <div className="bg-white/95 dark:bg-[#04151a]/95 backdrop-blur-2xl rounded-3xl p-5 sm:p-7 border border-slate-200/90 dark:border-teal-500/30 shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] space-y-5 transition-all">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <h3 className="font-black text-[#082a24] dark:text-emerald-300 text-sm sm:text-base flex items-center gap-2 font-outfit">
                  <ShieldAlert className="w-4 h-4 text-rose-600 animate-pulse" />
                  <span>Simulasi Skrining Interaksi Obat (DDInter &amp; Drugs.com Engine)</span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Uji kombinasi obat secara real-time. Deteksi keparahan Major, Moderate, atau Minor beserta saran klinis.
                </p>
              </div>
              <span className="text-[10px] font-black px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-emerald-600" />
                Live DDI Matrix
              </span>
            </div>

            {/* Quick Case Presets */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-[11px] font-bold text-slate-600 dark:text-slate-400 font-outfit">
                <span>⚡ Coba Kasus Resep Populer:</span>
                {interactiveSelectedDrugs.length > 0 && (
                  <button
                    onClick={() => setInteractiveSelectedDrugs([])}
                    className="text-rose-600 hover:text-rose-700 dark:text-rose-400 text-[10px] font-bold flex items-center gap-0.5 cursor-pointer"
                  >
                    <Trash2 className="w-3 h-3" />
                    Reset Obat
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {demoPresets.map((preset) => (
                  <button
                    key={preset.label}
                    type="button"
                    onClick={() => handleApplyPreset(preset.drugs)}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-slate-100 hover:bg-teal-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-teal-800 dark:hover:text-teal-300 border border-slate-200 dark:border-slate-700 transition cursor-pointer"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Autocomplete */}
            <div className="relative">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={interactiveSearchInput}
                  onChange={(e) => setInteractiveSearchInput(e.target.value)}
                  placeholder="Ketik nama obat untuk ditambah ke pengujian (misal: Warfarin, Amlodipin, Ciprofloxacin)..."
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 font-medium"
                />
              </div>

              {interactiveSearchResults.length > 0 && (
                <div className="absolute z-30 left-0 right-0 mt-1 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xl overflow-hidden max-h-48 overflow-y-auto">
                  {interactiveSearchResults.map((drug) => (
                    <button
                      key={drug.id}
                      type="button"
                      onClick={() => handleAddInteractiveDrug(drug)}
                      className="w-full px-3 py-2 text-left hover:bg-teal-50 dark:hover:bg-teal-950/50 flex items-center justify-between border-b border-slate-100 dark:border-slate-800 last:border-0 cursor-pointer"
                    >
                      <div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white">{drug.name}</div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400">{drug.genericName} • {drug.category}</div>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 flex items-center gap-1">
                        <Plus className="w-3 h-3" /> Tambah
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Selected Chips */}
            <div className="flex flex-wrap items-center gap-1.5 min-h-[32px]">
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-black font-outfit">Obat Diuji:</span>
              {interactiveSelectedDrugs.length === 0 ? (
                <span className="text-xs text-slate-400 italic">Belum ada obat yang dipilih</span>
              ) : (
                interactiveSelectedDrugs.map((drug) => (
                  <span
                    key={drug.id}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-teal-50 dark:bg-teal-950/60 text-teal-900 dark:text-teal-300 border border-teal-300 dark:border-teal-700 shadow-2xs font-outfit"
                  >
                    <Pill className="w-3 h-3 text-teal-600" />
                    {drug.name}
                    <button
                      type="button"
                      onClick={() => handleRemoveInteractiveDrug(drug.id)}
                      className="hover:bg-teal-200 dark:hover:bg-teal-800 rounded-full p-0.5 transition cursor-pointer"
                      title={`Hapus ${drug.name}`}
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))
              )}
            </div>

            {/* Results Display */}
            <div className="space-y-3 pt-1">
              {interactiveSelectedDrugs.length >= 2 ? (
                interactiveMatchedInteractions.length > 0 ? (
                  interactiveMatchedInteractions.map((item, idx) => {
                    const isMajor = item.severity === 'Major';
                    const isMod = item.severity === 'Moderate';
                    return (
                      <div
                        key={idx}
                        className={`p-4 sm:p-5 rounded-2xl border space-y-3 transition-all text-left shadow-xs ${
                          isMajor
                            ? 'clinical-card-major'
                            : isMod
                            ? 'clinical-card-moderate'
                            : 'clinical-card-minor'
                        }`}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-black/5 dark:border-white/10 pb-2.5">
                          <div className="flex items-center gap-2">
                            <span className="text-sm sm:text-base font-black tracking-tight text-slate-900 dark:text-white">
                              {item.drugAName} <span className="text-slate-400 font-normal">&amp;</span> {item.drugBName}
                            </span>
                          </div>
                          <span className={
                            isMajor
                              ? 'clinical-badge-major'
                              : isMod
                              ? 'clinical-badge-moderate'
                              : 'clinical-badge-minor'
                          }>
                            {isMajor ? '⚠️ MAJOR / KONTRAINDIKASI' : isMod ? '⚡ MODERATE / MONITORING' : 'ℹ️ MINOR / WASPADA'}
                          </span>
                        </div>
                        
                        <div className="text-xs space-y-1">
                          <span className="font-extrabold text-slate-900 dark:text-white block">Dampak &amp; Efek Klinis:</span>
                          <p className="leading-relaxed text-slate-700 dark:text-slate-300 font-medium">
                            {item.clinicalOutcome || item.mechanism}
                          </p>
                        </div>

                        {item.management && (
                          <div className="text-xs p-3 rounded-xl bg-white/90 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 space-y-1">
                            <span className="font-extrabold text-teal-800 dark:text-teal-300 flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                              Rekomendasi Manajemen Farmakoterapi:
                            </span>
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                              {item.management}
                            </p>
                          </div>
                        )}

                        {/* Authentic Evidence & Citations from DDInter 2.0 Database */}
                        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-black/5 dark:border-white/10 text-[10.5px]">
                          <span className="font-bold text-slate-500 dark:text-teal-200/70 flex items-center gap-1.5">
                            <BookMarked className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                            <span>Rujukan: {item.sources?.join(', ') || 'DDInter 2.0 Nature Protocols'}</span>
                          </span>
                          {item.evidenceLevel && (
                            <span className="font-mono text-[9.5px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold border border-slate-200 dark:border-slate-700">
                              Level Bukti: {item.evidenceLevel}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="p-5 rounded-2xl clinical-card-safe border space-y-2 text-left shadow-xs">
                    <div className="flex items-center justify-between">
                      <div className="font-black flex items-center gap-2 text-emerald-950 dark:text-emerald-200 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                        <span>Kompatibilitas Aman: Tidak Ditemukan Interaksi Signifikan</span>
                      </div>
                      <span className="clinical-badge-safe">✓ COMPATIBLE</span>
                    </div>
                    <p className="text-xs text-emerald-900/90 dark:text-emerald-200/90 leading-relaxed font-medium">
                      Kombinasi <strong>{interactiveSelectedDrugs.map(d => d.name).join(' + ')}</strong> tidak menunjukkan interaksi farmakokinetik atau farmakodinamik yang membahayakan berdasarkan penelusuran konsensus DDInter Nature &amp; Drugs.com.
                    </p>
                  </div>
                )
              ) : (
                interactiveSelectedDrugs.length === 1 ? (
                  <div className="p-4 rounded-2xl bg-teal-50/70 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 text-slate-700 dark:text-teal-200 text-xs text-center font-medium">
                    Obat <strong>{interactiveSelectedDrugs[0].name}</strong> terpilih. Pilih 1 obat lagi untuk analisis interaksi obat-obat (DDI), atau lihat pantangan makanan terkait di bawah jika ada.
                  </div>
                ) : (
                  <div className="p-8 sm:p-10 rounded-2xl bg-slate-50/70 dark:bg-[#020d11]/60 border-2 border-dashed border-slate-200 dark:border-teal-500/30 text-center space-y-3">
                    <div className="w-12 h-12 mx-auto rounded-2xl bg-teal-100 dark:bg-teal-950/80 text-teal-600 dark:text-teal-400 flex items-center justify-center border border-teal-200 dark:border-teal-800 shadow-xs">
                      <ShieldAlert className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm sm:text-base font-black font-outfit text-slate-900 dark:text-white">
                        Belum Ada Obat yang Dipilih untuk Pengujian
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
                        Ketik nama obat pada kolom pencarian di atas atau klik salah satu <strong>Contoh Kasus Resep Populer</strong> untuk melihat analisis interaksi klinis (DDI) dan pantangan makanan (DFI) secara real-time.
                      </p>
                    </div>
                  </div>
                )
              )}

              {/* LIVE FOOD INTERACTIONS (DFI) SECTION INTEGRATED FROM DDINTER 2.0 */}
              {interactiveMatchedFoodInteractions.length > 0 && (
                <div className="space-y-3 pt-3 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs sm:text-sm font-black text-[#082a24] dark:text-amber-300 font-outfit flex items-center gap-2">
                      <Utensils className="w-4 h-4 text-amber-500 animate-pulse" />
                      <span>Peringatan Interaksi Makanan &amp; Pantangan Diet (DDInter 2.0 DFI)</span>
                    </h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                      {interactiveMatchedFoodInteractions.length} Pantangan Terdeteksi
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {interactiveMatchedFoodInteractions.map((food, fIdx) => {
                      const isMajorFood = food.severity === 'Major';
                      const isModFood = food.severity === 'Moderate';
                      return (
                        <div
                          key={fIdx}
                          className={`p-4 rounded-2xl border space-y-2.5 transition-all text-left shadow-xs ${
                            isMajorFood
                              ? 'bg-rose-50/90 dark:bg-[#1a080c] border-rose-300 dark:border-rose-900/70'
                              : isModFood
                              ? 'bg-amber-50/90 dark:bg-[#1a1406] border-amber-300 dark:border-amber-900/70'
                              : 'bg-emerald-50/90 dark:bg-[#061814] border-emerald-300 dark:border-emerald-900/70'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2 border-b border-black/5 dark:border-white/10 pb-2">
                            <div className="flex items-center gap-1.5 font-black text-xs sm:text-sm text-slate-900 dark:text-white font-outfit truncate">
                              <span className="text-teal-700 dark:text-teal-300">{food.drugName}</span>
                              <span className="text-slate-400 font-normal">+</span>
                              <span className="text-amber-700 dark:text-amber-400">{food.foodName}</span>
                            </div>
                            <span className={`text-[9.5px] font-black uppercase px-2 py-0.5 rounded-full border shrink-0 ${
                              isMajorFood
                                ? 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 border-rose-300 dark:border-rose-800'
                                : isModFood
                                ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border-amber-300 dark:border-amber-800'
                                : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800'
                            }`}>
                              {food.severity ? `${food.severity.toUpperCase()}` : 'MODERATE'}
                            </span>
                          </div>

                          <div className="text-xs space-y-1">
                            <span className="font-bold text-slate-800 dark:text-slate-200 block text-[11px]">Dampak Interaksi Makanan:</span>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[11px]">
                              {food.clinicalOutcome || food.mechanism || (food as any).clinicalEffect || 'Dapat mempengaruhi penyerapan atau efektivitas terapi obat.'}
                            </p>
                          </div>

                          <div className="p-2.5 rounded-xl bg-white/90 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 text-[11px] space-y-1">
                            <span className="font-extrabold text-teal-800 dark:text-teal-300 flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3 text-teal-600 dark:text-teal-400" />
                              Saran Konsumsi / Pantangan:
                            </span>
                            <p className="text-slate-700 dark:text-slate-300 leading-snug">
                              {food.recommendation}
                            </p>
                          </div>

                          <div className="flex flex-col gap-1.5 pt-1.5 border-t border-black/5 dark:border-white/5 text-[10px]">
                            <div className="flex items-center justify-between gap-2">
                              <span className="font-mono text-[9.5px] text-purple-700 dark:text-purple-400 font-bold">
                                ID: {(food as any).ddinterId || food.id}
                              </span>
                            </div>
                            {(food.references || (food as any).ddinterCitation) && (
                              <div className="text-[10px] text-slate-500 dark:text-slate-400 flex items-start gap-1">
                                <BookMarked className="w-3 h-3 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                                <span className="line-clamp-2">
                                  <strong className="text-slate-700 dark:text-slate-300 font-semibold">Rujukan EBM:</strong>{' '}
                                  {food.references || (food as any).ddinterCitation}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* EBM Trust Badges & Clinical Scientific Sources Strip */}
            <div className="p-3.5 rounded-2xl bg-slate-50/90 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 flex flex-col lg:flex-row lg:items-center justify-between gap-3 text-[11px]">
              <div className="flex items-center gap-2 flex-wrap text-slate-600 dark:text-slate-400">
                <span className="font-extrabold text-slate-900 dark:text-slate-100 flex items-center gap-1.5 mr-1">
                  <ShieldCheck className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  <span>Rujukan EBM Terverifikasi:</span>
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white dark:bg-slate-800/90 px-2.5 py-1 rounded-lg border border-amber-200 dark:border-amber-700/60 font-bold text-slate-800 dark:text-amber-200 shadow-2xs">
                  <BookOpen className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                  <span>Stockley's Drug Interactions (13th Ed.)</span>
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white dark:bg-slate-800/90 px-2.5 py-1 rounded-lg border border-teal-200 dark:border-teal-700/60 font-bold text-slate-800 dark:text-teal-200 shadow-2xs">
                  <FlaskConical className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                  <span>DDInter 2.0 (Nature Protocols 2022)</span>
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white dark:bg-slate-800/90 px-2.5 py-1 rounded-lg border border-blue-200 dark:border-blue-700/60 font-bold text-slate-800 dark:text-blue-200 shadow-2xs">
                  <Layers className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>ASHP AHFS &amp; Drugs.com</span>
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white dark:bg-slate-800/90 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 font-bold text-slate-800 dark:text-slate-200 shadow-2xs">
                  <span>📖</span>
                  <span>Farmakope Indonesia VI &amp; BNF</span>
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white dark:bg-slate-800/90 px-2.5 py-1 rounded-lg border border-emerald-200 dark:border-emerald-700/60 font-bold text-slate-800 dark:text-emerald-200 shadow-2xs">
                  <span>🏥</span>
                  <span>Kemenkes RI No. 73/2016 &amp; FORNAS</span>
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0 font-mono text-[10px] text-slate-500 dark:text-slate-400 bg-white/70 dark:bg-slate-800/60 px-2.5 py-1 rounded-lg border border-slate-200/60 dark:border-slate-700/60 self-start lg:self-auto">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Konsensus EBM Terkini • Sept 2026</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onSelectTab('interactions')}
                className="flex-1 py-3 rounded-full bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-300 text-slate-950 font-black text-xs shadow-md transition-all cursor-pointer hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2 font-outfit"
              >
                {!currentUser ? <Lock className="w-4 h-4 text-slate-950" /> : <ShieldAlert className="w-4 h-4 text-slate-950" />}
                <span>{!currentUser ? 'Masuk untuk Buka Cek Interaksi Lengkap' : 'Buka Cek Interaksi Lengkap (Multi-Obat & Export PDF)'}</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
              </button>
            </div>
          </div>
        )}

        {/* ==================== TAB 2: SWAMEDIKASI & CLINICAL TRIAGE DEMO ==================== */}
        {activePlaygroundTab === 'swamedikasi' && (
          <div className="bg-white/95 dark:bg-[#04151a]/95 backdrop-blur-2xl rounded-3xl p-5 sm:p-7 border border-slate-200/90 dark:border-teal-500/30 shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] space-y-6 transition-all">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <h3 className="font-black text-[#082a24] dark:text-emerald-300 text-sm sm:text-base flex items-center gap-2 font-outfit">
                  <Stethoscope className="w-4 h-4 text-emerald-500 animate-pulse" />
                  <span>Simulasi Swamedikasi &amp; Clinical Triage Mandiri (Standar BPOM &amp; Kemenkes)</span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Pilih keluhan untuk melihat tanda bahaya (red flags), rekomendasi obat bebas BPOM &amp; OWA, serta terapi alami tanpa antibiotik.
                </p>
              </div>
              <span className="text-[10px] font-black px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-emerald-600" />
                {SWAMEDIKASI_PROTOCOLS.length} Protokol Terstandar
              </span>
            </div>

            {/* Quick Complaint Presets */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-[11px] font-bold text-slate-600 dark:text-slate-400 font-outfit">
                <span>⚡ Coba Keluhan Populer:</span>
                {selectedProtocolId && (
                  <button
                    type="button"
                    onClick={() => setSelectedProtocolId('')}
                    className="text-rose-600 hover:text-rose-700 dark:text-rose-400 text-[10px] font-bold flex items-center gap-0.5 cursor-pointer"
                  >
                    <Trash2 className="w-3 h-3" />
                    Reset Pilihan
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {popularSwamedikasiPresets.map((preset) => (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => {
                      setSelectedProtocolId(preset.id);
                      setIsSwamedikasiDropdownOpen(false);
                    }}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold border transition cursor-pointer ${
                      selectedProtocolId === preset.id
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                        : 'bg-slate-100 hover:bg-emerald-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-emerald-800 dark:hover:text-emerald-300 border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Searchable Dropdown Selector Protokol Swamedikasi (Standar BPOM & OWA) */}
            <div className="space-y-2.5 relative" ref={swamedikasiDropdownRef}>
              <div className="flex flex-wrap items-center justify-between gap-1">
                <label
                  htmlFor="landing-swamedikasi-trigger"
                  className="text-xs font-black font-outfit text-slate-700 dark:text-teal-200 flex items-center gap-1.5"
                >
                  <Stethoscope className="w-4 h-4 text-emerald-500" />
                  <span>Pilih Keluhan Pasien / Protokol Swamedikasi:</span>
                </label>
                <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 font-mono bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-lg border border-emerald-200 dark:border-emerald-800/60 flex items-center gap-1">
                  <Search className="w-3 h-3" />
                  <span>Dropdown dengan Pencarian Cepat</span>
                </span>
              </div>

              {/* Main Trigger Button */}
              <button
                id="landing-swamedikasi-trigger"
                type="button"
                onClick={() => setIsSwamedikasiDropdownOpen(prev => !prev)}
                aria-expanded={isSwamedikasiDropdownOpen}
                className={`w-full text-left pl-3.5 sm:pl-4 pr-4 py-3 bg-white dark:bg-[#020d11] rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between gap-2 shadow-xs group ${
                  isSwamedikasiDropdownOpen
                    ? 'border-emerald-500 dark:border-emerald-400 ring-4 ring-emerald-500/20 shadow-lg'
                    : 'border-emerald-300 dark:border-teal-500/40 hover:border-emerald-400 dark:hover:border-teal-400'
                }`}
              >
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-200 dark:border-emerald-800/70 group-hover:scale-105 transition-transform">
                    <Stethoscope className="w-4 h-4" />
                  </div>
                  {activePlaygroundProtocol ? (
                    <div className="truncate">
                      <div className="text-xs sm:text-sm font-black font-outfit text-slate-900 dark:text-white truncate">
                        {activePlaygroundProtocol.title}
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-slate-500 dark:text-teal-100/70 flex items-center gap-1.5 font-medium">
                        <span className="font-semibold text-emerald-700 dark:text-emerald-300">{activePlaygroundProtocol.categoryLabel}</span>
                        <span>•</span>
                        <span>Batas Mandiri: Maks. {activePlaygroundProtocol.maxSelfMedDays} Hari</span>
                      </div>
                    </div>
                  ) : (
                    <div className="truncate">
                      <div className="text-xs sm:text-sm font-bold font-outfit text-slate-500 dark:text-slate-400">
                        -- Pilih Keluhan Pasien / Protokol Swamedikasi --
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-slate-400 dark:text-teal-200/60 font-medium">
                        Klik di sini untuk mencari &amp; memilih keluhan (tersedia 42 protokol terstandar BPOM &amp; Kemenkes)
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {selectedProtocolId && (
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProtocolId('');
                      }}
                      className="p-1 rounded-lg text-rose-500 hover:text-rose-700 hover:bg-rose-50 dark:hover:bg-rose-950/50 transition cursor-pointer"
                      title="Reset Pilihan"
                    >
                      <X className="w-4 h-4" />
                    </span>
                  )}
                  <span className="hidden sm:inline-flex items-center gap-1 text-[10.5px] font-bold px-2.5 py-1 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
                    <Search className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                    <span>{activePlaygroundProtocol ? 'Ganti Keluhan' : 'Pilih Keluhan'}</span>
                  </span>
                  <div className={`p-1.5 rounded-xl bg-slate-100 dark:bg-[#062026] text-emerald-600 dark:text-emerald-400 transition-transform duration-200 ${
                    isSwamedikasiDropdownOpen ? 'rotate-180 bg-emerald-100 dark:bg-emerald-950' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </button>

              {/* Floating Searchable Dropdown Menu */}
              {isSwamedikasiDropdownOpen && (
                <div className="absolute z-50 left-0 right-0 top-full mt-2 bg-white dark:bg-[#03151b] rounded-2xl border-2 border-emerald-400/90 dark:border-teal-500/60 shadow-2xl overflow-hidden backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150">
                  {/* Sticky Search Bar */}
                  <div className="p-3 border-b border-slate-200/80 dark:border-teal-500/25 bg-slate-50/90 dark:bg-[#020d11]/95">
                    <div className="relative">
                      <Search className="w-4 h-4 text-emerald-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        ref={swamedikasiSearchInputRef}
                        type="text"
                        value={swamedikasiSearchQuery}
                        onChange={(e) => setSwamedikasiSearchQuery(e.target.value)}
                        placeholder="Ketik keluhan, gejala, atau obat (misal: maag, batuk, pusing, alergi, parasetamol)..."
                        className="w-full pl-10 pr-9 py-2.5 text-xs sm:text-sm font-bold font-outfit text-slate-900 dark:text-white bg-white dark:bg-[#062026] rounded-xl border border-slate-200 dark:border-teal-500/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition-all placeholder:text-slate-400 dark:placeholder:text-teal-200/40"
                      />
                      {swamedikasiSearchQuery && (
                        <button
                          type="button"
                          onClick={() => {
                            setSwamedikasiSearchQuery('');
                            swamedikasiSearchInputRef.current?.focus();
                          }}
                          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                    <div className="flex items-center justify-between mt-2 px-1 text-[10.5px] font-medium text-slate-500 dark:text-teal-100/70">
                      <span>Ditemukan: <strong className="text-emerald-600 dark:text-emerald-400">{filteredSwamedikasiProtocols.length}</strong> keluhan</span>
                      <span>Tekan <kbd className="px-1 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-[9px] font-mono">Esc</kbd> untuk menutup</span>
                    </div>
                  </div>

                  {/* Options List */}
                  <div className="max-h-72 sm:max-h-80 overflow-y-auto p-2 space-y-3 divide-y divide-slate-100 dark:divide-teal-500/15">
                    {filteredSwamedikasiProtocols.length === 0 ? (
                      <div className="p-6 text-center space-y-2">
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          Keluhan tidak ditemukan untuk kata kunci <strong>"{swamedikasiSearchQuery}"</strong>.
                        </p>
                        <button
                          type="button"
                          onClick={() => setSwamedikasiSearchQuery('')}
                          className="px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/60 dark:hover:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 font-bold text-xs border border-emerald-200 dark:border-emerald-800 transition cursor-pointer font-outfit"
                        >
                          Tampilkan Semua {SWAMEDIKASI_PROTOCOLS.length} Keluhan
                        </button>
                      </div>
                    ) : (
                      Object.entries(groupedSwamedikasiProtocols).map(([catLabel, protocols]) => (
                        <div key={catLabel} className="pt-2 first:pt-0 space-y-1">
                          <div className="px-2.5 py-1 text-[10.5px] font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-400 font-outfit flex items-center justify-between">
                            <span>📂 {catLabel}</span>
                            <span className="text-[9.5px] font-mono font-bold text-slate-400 dark:text-teal-200/50">
                              {protocols.length} protokol
                            </span>
                          </div>
                          <div className="space-y-1">
                            {protocols.map((protocol) => {
                              const isSelected = protocol.id === activePlaygroundProtocol?.id;
                              return (
                                <button
                                  key={protocol.id}
                                  type="button"
                                  onClick={() => {
                                    setSelectedProtocolId(protocol.id);
                                    setIsSwamedikasiDropdownOpen(false);
                                    setSwamedikasiSearchQuery('');
                                  }}
                                  className={`w-full text-left p-2.5 rounded-xl transition-all cursor-pointer flex items-center justify-between gap-2 border ${
                                    isSelected
                                      ? 'bg-emerald-50 dark:bg-emerald-950/70 border-emerald-300 dark:border-emerald-700/80 text-emerald-950 dark:text-white shadow-xs'
                                      : 'bg-transparent hover:bg-slate-50 dark:hover:bg-[#062026] border-transparent text-slate-700 dark:text-slate-200'
                                  }`}
                                >
                                  <div className="min-w-0 flex-1">
                                    <div className="flex items-center gap-1.5 flex-wrap">
                                      <span className="text-xs font-bold font-outfit text-slate-900 dark:text-white">
                                        {protocol.title}
                                      </span>
                                      <span className="text-[9.5px] font-semibold px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                                        Maks. {protocol.maxSelfMedDays} Hari
                                      </span>
                                    </div>
                                    <p className="text-[10px] text-slate-500 dark:text-teal-100/65 line-clamp-1 mt-0.5">
                                      {protocol.quickSummary}
                                    </p>
                                  </div>
                                  {isSelected && (
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Live Interactive Triage Display */}
            {activePlaygroundProtocol ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 pt-2">
                {/* Left Column: Complaint Details, Red Flags & Natural Therapies */}
                <div className="lg:col-span-6 space-y-4">
                  {/* Protocol Overview Card */}
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#020d11]/80 border border-slate-200 dark:border-teal-500/25 space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800/60">
                        <Stethoscope className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        {activePlaygroundProtocol.categoryLabel}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/50">
                        <Clock className="w-3.5 h-3.5 text-amber-500" />
                        Batas Swamedikasi: Maks. {activePlaygroundProtocol.maxSelfMedDays} Hari
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-black font-outfit text-slate-900 dark:text-white">
                      {activePlaygroundProtocol.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {activePlaygroundProtocol.quickSummary}
                    </p>

                    {/* Typical Symptoms list */}
                    <div className="pt-1">
                      <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
                        Gejala Khas yang Cocok:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {activePlaygroundProtocol.typicalSymptoms.map((sym, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-md bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                          >
                            <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                            <span>{sym}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Red Flags / Tanda Bahaya Alert Card */}
                  <div className="p-4 rounded-2xl bg-rose-50/90 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 space-y-2 shadow-xs">
                    <div className="flex items-center gap-2 text-rose-800 dark:text-rose-300">
                      <AlertOctagon className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0" />
                      <h5 className="text-xs font-black font-outfit uppercase tracking-wider">
                        Tanda Bahaya (Red Flags) • Wajib Segera ke Dokter / IGD:
                      </h5>
                    </div>
                    <ul className="space-y-1.5 pl-6 list-disc text-xs text-rose-900/90 dark:text-rose-200 font-medium">
                      {activePlaygroundProtocol.redFlags.slice(0, 3).map((rf, idx) => (
                        <li key={idx} className="leading-snug">
                          {rf}
                        </li>
                      ))}
                    </ul>
                    {activePlaygroundProtocol.redFlags.length > 3 && (
                      <p className="text-[10.5px] text-rose-600 dark:text-rose-400 font-semibold pl-6">
                        +{activePlaygroundProtocol.redFlags.length - 3} tanda bahaya lainnya pada protokol lengkap
                      </p>
                    )}
                  </div>

                  {/* Natural Lifestyle Therapies */}
                  <div className="p-3.5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/70 dark:border-emerald-900/40 space-y-1.5">
                    <div className="flex items-center gap-2 text-emerald-900 dark:text-emerald-200">
                      <Leaf className="w-4 h-4 text-emerald-600 shrink-0" />
                      <h5 className="text-xs font-bold font-outfit">
                        Terapi Non-Farmakologi Alami (Pola Hidup):
                      </h5>
                    </div>
                    <p className="text-xs text-emerald-900/80 dark:text-emerald-300/90 pl-6 leading-relaxed">
                      {activePlaygroundProtocol.nonPharmacolTherapy[0] || 'Istirahat cukup, penuhi hidrasi cairan tubuh, dan hindari stres.'}
                    </p>
                  </div>
                </div>

                {/* Right Column: Recommended BPOM/OWA Drugs & Dosage */}
                <div className="lg:col-span-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <h5 className="text-xs font-black font-outfit text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                      <Pill className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>Rekomendasi Obat Bebas Resmi BPOM &amp; OWA</span>
                    </h5>
                    <span className="text-[10px] text-slate-500 font-bold">
                      {activePlaygroundProtocol.recommendedDrugs.length} Opsi Obat
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {activePlaygroundProtocol.recommendedDrugs.map((drug, dIdx) => {
                      const isBebas = drug.bpomClass.includes('Bebas (Hijau)');
                      const isTerbatas = drug.bpomClass.includes('Terbatas');
                      const isOwa = drug.bpomClass.includes('OWA');
                      return (
                        <div
                          key={dIdx}
                          className="p-3.5 rounded-2xl bg-white dark:bg-[#020d11] border border-slate-200 dark:border-teal-500/20 hover:border-emerald-400 transition-colors space-y-2.5 shadow-xs"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div className="space-y-1">
                              <div className="flex items-center gap-1.5 flex-wrap">
                                <h6 className="text-xs font-black font-outfit text-slate-900 dark:text-white">
                                  {drug.genericName}
                                </h6>
                                <span className={`text-[9.5px] font-black px-2 py-0.5 rounded-full border ${
                                  isBebas 
                                    ? 'bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-950 dark:text-emerald-300' 
                                    : isTerbatas 
                                      ? 'bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-950 dark:text-blue-300' 
                                      : 'bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-950 dark:text-amber-300'
                                }`}>
                                  {isBebas ? '🟢 Bebas' : isTerbatas ? '🔵 Bebas Terbatas' : isOwa ? '🧪 OWA' : '💊 Suplemen'}
                                </span>
                                {drug.isFirstLine && (
                                  <span className="text-[9px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-400/40 inline-flex items-center gap-1">
                                    <Sparkles className="w-2.5 h-2.5 text-emerald-500" />
                                    <span>Pilihan Utama</span>
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                                Contoh Merk: {drug.brandExamples.join(', ')}
                              </p>
                              {drug.owaDetails && (
                                <div className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/50 px-2 py-0.5 rounded-md border border-amber-200 dark:border-amber-800/50">
                                  <Scale className="w-3 h-3 text-amber-600 dark:text-amber-400 shrink-0" />
                                  <span>DOWA No. {drug.owaDetails.owaNumber} • Batas: {drug.owaDetails.maxDispense}</span>
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] pt-1.5 border-t border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-300">
                            <div>
                              <strong className="text-slate-700 dark:text-slate-200">Dosis Baku:</strong> {drug.dosageGuideline}
                            </div>
                            <div>
                              <strong className="text-slate-700 dark:text-slate-200">Aturan:</strong> {drug.timing}
                            </div>
                          </div>

                          {/* Quick Comorbid Safety Chips */}
                          {drug.comorbidWarnings && drug.comorbidWarnings.length > 0 && (
                            <div className="flex flex-wrap items-center gap-1 pt-1 border-t border-slate-100 dark:border-slate-800/70">
                              <span className="text-[10px] text-slate-400 font-semibold mr-0.5">Keamanan:</span>
                              {drug.comorbidWarnings.slice(0, 3).map((cw, cwIdx) => {
                                const isAman = cw.status === 'aman';
                                const isHatiHati = cw.status === 'hati-hati';
                                const label = cw.comorbid === 'hipertensi' ? 'Hipertensi' 
                                  : cw.comorbid === 'maag' ? 'Lambung' 
                                  : cw.comorbid === 'asma' ? 'Asma' 
                                  : cw.comorbid === 'hamil' ? 'Bumil' 
                                  : cw.comorbid === 'diabetes' ? 'Diabetes' 
                                  : cw.comorbid === 'ginjal' ? 'Ginjal' 
                                  : cw.comorbid;
                                return (
                                  <span
                                    key={cwIdx}
                                    title={cw.note}
                                    className={`text-[9.5px] font-bold px-1.5 py-0.5 rounded-md border ${
                                      isAman
                                        ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60'
                                        : isHatiHati
                                          ? 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800/60'
                                          : 'bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800/60'
                                    }`}
                                  >
                                    {isAman ? '✓' : isHatiHati ? '⚠️' : '✕'} {label}
                                  </span>
                                );
                              })}
                            </div>
                          )}

                          {drug.cautionNotes && (
                            <p className="text-[10px] text-slate-500 dark:text-slate-400 italic">
                              Perhatian: {drug.cautionNotes}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Anti-Antibiotic Badge */}
                  <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800/60 flex items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-2 text-amber-900 dark:text-amber-200 font-bold">
                      <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>Dilarang Membeli Antibiotik Oral Secara Bebas!</span>
                    </div>
                    <span className="text-[10px] font-black text-amber-800 dark:text-amber-300 bg-amber-200/60 dark:bg-amber-900/60 px-2 py-0.5 rounded-md shrink-0">
                      Standar Permenkes
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-8 sm:p-10 rounded-2xl bg-slate-50/70 dark:bg-[#020d11]/60 border-2 border-dashed border-slate-200 dark:border-teal-500/30 text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-200 dark:border-emerald-800 shadow-xs">
                  <Stethoscope className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm sm:text-base font-black font-outfit text-slate-900 dark:text-white">
                    Belum Ada Protokol Keluhan yang Dipilih
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
                    Silakan klik dropdown di atas untuk mencari dari <strong>42 protokol swamedikasi</strong> berstandar BPOM &amp; Kemenkes, atau klik salah satu tombol <strong>Keluhan Populer</strong> di atas.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsSwamedikasiDropdownOpen(true)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-black bg-emerald-600 hover:bg-emerald-700 text-white shadow-md transition cursor-pointer font-outfit"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Pilih Keluhan Pasien Sekarang</span>
                </button>
              </div>
            )}

            {/* Bottom CTA Action Bar */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <span className="text-xs text-slate-500 dark:text-teal-200/70 font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>{SWAMEDIKASI_PROTOCOLS.length} Protokol Lengkap • Pencarian Cepat Gejala • Edukasi WhatsApp</span>
              </span>
              <button
                type="button"
                onClick={() => {
                  if (onOpenSwamedikasiProtocol) {
                    onOpenSwamedikasiProtocol(selectedProtocolId || SWAMEDIKASI_PROTOCOLS[0]?.id || 'swam-demam-dewasa');
                  } else {
                    onSelectTab('swamedikasi');
                  }
                }}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-white font-black text-xs shadow-md hover:shadow-lg transition-all cursor-pointer hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2 font-outfit"
              >
                {!currentUser ? (
                  <>
                    <Lock className="w-3.5 h-3.5 text-white/90" />
                    <span>Masuk untuk Buka Modul Lengkap</span>
                  </>
                ) : (
                  <>
                    <Stethoscope className="w-4 h-4 text-white" />
                    <span>Buka Modul Swamedikasi Lengkap</span>
                  </>
                )}
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </button>
            </div>
          </div>
        )}

        {/* ==================== TAB 3: SRQ-20 MENTAL HEALTH DEMO ==================== */}
        {activePlaygroundTab === 'srq20' && (
          <div className="bg-white/95 dark:bg-[#04151a]/95 backdrop-blur-2xl rounded-3xl p-5 sm:p-7 border border-slate-200/90 dark:border-teal-500/30 shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] space-y-6 transition-all">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <h3 className="font-black text-[#082a24] dark:text-emerald-300 text-sm sm:text-base flex items-center gap-2 font-outfit">
                  <Brain className="w-4 h-4 text-teal-600 animate-pulse" />
                  <span>Skrining Kesehatan Jiwa Mandiri (SRQ-20 Kemenkes RI / WHO)</span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Uji penapisan mandiri 20 gejala emosional &amp; psikosomatis dalam 30 hari terakhir. 100% anonim &amp; hasil evaluasi instan.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setPublicSrqScores(Array(20).fill(0))}
                  className="px-2.5 py-1 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-1 cursor-pointer transition-all border border-slate-200 dark:border-slate-700"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset Jawaban</span>
                </button>
                <span className="text-[10px] font-black px-2.5 py-1 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 border border-teal-300 dark:border-teal-700 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  Standar Baku Kemenkes RI
                </span>
              </div>
            </div>

            {/* Questions Grid with compact clean layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 max-h-[420px] overflow-y-auto pr-1">
              {publicSrqQuestions.map((questionText, idx) => {
                const isSelectedYes = publicSrqScores[idx] === 1;
                const isRedFlagItem = idx === 16;

                return (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl border transition-all duration-150 flex items-center justify-between gap-3 ${
                      isRedFlagItem && isSelectedYes
                        ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-400 shadow-xs'
                        : isSelectedYes
                        ? 'bg-teal-50/80 dark:bg-teal-950/40 border-teal-400 dark:border-teal-600 shadow-2xs'
                        : 'bg-slate-50/80 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex-1">
                      <p className={`text-xs leading-snug ${
                        isRedFlagItem && isSelectedYes 
                          ? 'font-bold text-rose-900 dark:text-rose-200' 
                          : isSelectedYes 
                          ? 'font-bold text-teal-950 dark:text-teal-200' 
                          : 'text-slate-700 dark:text-slate-300 font-medium'
                      }`}>
                        {questionText}
                      </p>
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        type="button"
                        onClick={() => {
                          const next = [...publicSrqScores];
                          next[idx] = 0;
                          setPublicSrqScores(next);
                        }}
                        className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          !isSelectedYes
                            ? 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 shadow-2xs'
                            : 'bg-transparent text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800'
                        }`}
                      >
                        Tidak
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          const next = [...publicSrqScores];
                          next[idx] = 1;
                          setPublicSrqScores(next);
                        }}
                        className={`px-2.5 py-1 rounded-lg text-xs font-black transition-all cursor-pointer ${
                          isSelectedYes
                            ? isRedFlagItem
                              ? 'bg-rose-600 text-white shadow-xs'
                              : 'bg-teal-600 text-white shadow-xs'
                            : 'bg-transparent text-slate-400 hover:bg-teal-100/50 dark:hover:bg-teal-950/50'
                        }`}
                      >
                        Ya
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Live Result Evaluation Box inside the module */}
            {(() => {
              const res = calculatePublicSrq();

              return (
                <div className={`p-4 sm:p-5 rounded-2xl border ${res.badgeColor} bg-white dark:bg-slate-900/90 space-y-3 shadow-md`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/60 dark:border-slate-800 pb-2">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Hasil Evaluasi Mandiri Kemenkes RI (Ambang Batas &ge; 6 Poin)
                      </span>
                      <h4 className={`text-base sm:text-lg font-black font-outfit mt-0.5 ${res.textColor}`}>
                        {res.category}
                      </h4>
                    </div>

                    <div className="text-left sm:text-right">
                      <span className={`text-2xl sm:text-3xl font-black font-outfit ${res.textColor}`}>
                        {res.score} / 20
                      </span>
                      <span className="block text-[11px] text-slate-500 font-semibold">Skor Jawaban "Ya"</span>
                    </div>
                  </div>

                  {res.hasSuicidalIdeation && (
                    <div className="p-3 bg-rose-600 text-white rounded-xl text-xs font-bold flex items-start gap-2 shadow-md">
                      <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-black">PERHATIAN KRITIS: Terdeteksi Pikiran Mengakhiri Hidup (Butir 17 Positif)</p>
                        <p className="text-[11px] font-medium opacity-90 mt-0.5">Segera hubungi Hotline Kemenkes SEJIWA 119 ext 8 atau dampingi pasien ke IGD faskes terdekat.</p>
                      </div>
                    </div>
                  )}

                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    <strong>Rekomendasi Klinis:</strong> {res.recommendation}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-200/60 dark:border-slate-800">
                    <button
                      type="button"
                      onClick={handleCopySrqResult}
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-300 text-slate-950 text-xs font-black transition-all flex items-center gap-1.5 cursor-pointer shadow-md hover:scale-105 active:scale-95 font-outfit"
                    >
                      {isSrqCopied ? <CheckCheck className="w-3.5 h-3.5 text-slate-950" /> : <Copy className="w-3.5 h-3.5 text-slate-950" />}
                      <span>{isSrqCopied ? 'Hasil Tersalin!' : 'Salin Hasil SRQ-20'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onSelectTab('renal-adjuster')}
                      className="text-xs font-bold text-teal-700 dark:text-teal-300 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Buka Kalkulator Skor Klinis Lengkap (14+ Skor Medis)</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

      </section>



      {/* =========================================================================
          STAGE 3: MODERN BENTO GRID ARCHITECTURE - 26 MODUL KLINIS (NEO-CLINICAL TECH)
          ========================================================================= */}
      <section id="bento-features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-500/15 border border-teal-300 dark:border-teal-400/30 text-teal-800 dark:text-teal-300 text-xs font-black shadow-xs">
            <Layers className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>Ekosistem Klinis Terpadu • 26 Modul Komprehensif</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-[#082a24] dark:text-white font-outfit tracking-tight">
            Arsitektur Fitur Terintegrasi untuk Setiap Titik Pelayanan
          </h2>
          
          <p className="text-xs sm:text-sm text-slate-600 dark:text-teal-100/75 leading-relaxed font-medium">
            Dari apotek komunitas, ruang rawat inap RS &amp; ICU, faskes tenaga kesehatan, hingga pusat persiapan UKMPPAI &amp; Drug Notes. Seluruh modul saling terhubung secara real-time.
          </p>
        </div>

        {/* Single-Column Spotlight Showcase */}
        <SingleColumnFeatureSpotlight
          onSelectTab={onSelectTab}
          onOpenSwamedikasiProtocol={onOpenSwamedikasiProtocol}
          currentUser={currentUser}
        />

      </section>

      {/* =========================================================================
          STAGE 4: PUSAT SUARA PENGGUNA & KUISIONER FEEDBACK WHATSAPP (0877-7840-2266)
          ========================================================================= */}
      <section id="suara-sejawat" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-300 text-xs font-black shadow-xs">
            <Smartphone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Pusat Suara Pengguna &amp; Partisipasi Sejawat</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-[#082a24] dark:text-white font-outfit tracking-tight">
            Bagikan Pengalaman, Ulasan &amp; Usulan Fitur Anda
          </h2>
          
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            Platform ini terus berkembang berkat masukan riil rekan sejawat di lapangan. Sampaikan testimoni praktik Anda, kritik konstruktif, atau usulan fitur baru langsung ke WhatsApp pengembang kami.
          </p>
        </div>

        {/* 2-Column Split: Value Proposition on Left, Interactive Questionnaire Form on Right */}
        <div className="bg-white/95 dark:bg-[#04151a]/95 backdrop-blur-2xl rounded-3xl border border-slate-200/90 dark:border-teal-500/30 shadow-2xl dark:shadow-[0_25px_60px_rgba(0,0,0,0.6)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column (5 Cols): Why Your Voice Matters & Direct Contact */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#04151a] via-[#07252c] to-[#09323c] text-white p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-black uppercase tracking-wider font-outfit border border-emerald-500/30">
                    Transparansi &amp; Kolaborasi
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black font-outfit text-white">
                    Suara Rekan Sejawat Adalah Nyawa Perkembangan Kami
                  </h3>
                  <p className="text-xs sm:text-sm text-teal-100/80 leading-relaxed font-medium">
                    Kami percaya perangkat lunak klinis terbaik tidak lahir di laboratorium tertutup, melainkan dari meja apotek, ruang peracikan, dan bangsal rawat inap nyata.
                  </p>
                </div>

                <div className="space-y-3.5 text-xs">
                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-white">100% Dibaca Tim Pengembang</h4>
                      <p className="text-[11px] text-teal-200/70 mt-0.5">Setiap pesan yang Anda kirim ke WhatsApp langsung ditelaah oleh tim farmasi &amp; engineering kami.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-white/10">
                    <Sparkles className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-white">Prioritas Roadmap Fitur Baru</h4>
                      <p className="text-[11px] text-teal-200/70 mt-0.5">Butuh algoritma obat baru, template etiket khusus, atau kalkulator klinis tertentu? Usulkan di sini.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-white/10">
                    <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-white">Testimoni Asli &amp; Terverifikasi</h4>
                      <p className="text-[11px] text-teal-200/70 mt-0.5">Ulasan autentik dari Anda akan kami tampilkan dengan izin sebagai rujukan kredibel bagi sejawat lain.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-teal-500/20 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-teal-200">
                  <Smartphone className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Layanan Admin Langsung:</span>
                </div>
                <a
                  href="https://wa.me/6287778402266"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-black text-emerald-300 hover:text-emerald-200 font-mono tracking-wide hover:underline block"
                >
                  +62 877-7840-2266
                </a>
              </div>
            </div>

            {/* Right Column (7 Cols): Interactive Form */}
            <div className="lg:col-span-7 p-6 sm:p-10">
              <form onSubmit={handleSendFeedbackWhatsApp} className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div>
                    <h3 className="text-base font-black text-[#082a24] dark:text-white font-outfit">
                      Formulir Kuisioner &amp; Ulasan Pengguna
                    </h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">Isi formulir ringkas di bawah ini untuk mengirim ulasan langsung ke WhatsApp Admin.</p>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-mono font-bold">
                    WhatsApp 1-Klik
                  </span>
                </div>

                {/* Grid Inputs: Nama & Profesi */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1">
                    <label className="text-xs font-black text-slate-700 dark:text-slate-300 font-outfit">
                      Nama &amp; Gelar <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={feedbackName}
                      onChange={(e) => setFeedbackName(e.target.value)}
                      placeholder="misal: apt. Budi Santoso, S.Farm."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-teal-500/25 bg-slate-50 dark:bg-[#062026] text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all font-medium"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-black text-slate-700 dark:text-slate-300 font-outfit">
                      Profesi <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={feedbackProfession}
                      onChange={(e) => setFeedbackProfession(e.target.value)}
                      placeholder="misal: Apoteker / Dokter / TTK / Mahasiswa Farmasi"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-teal-500/25 bg-slate-50 dark:bg-[#062026] text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all font-medium"
                    />
                  </div>
                </div>

                {/* Grid Inputs: Instansi & Kota */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1">
                    <label className="text-xs font-black text-slate-700 dark:text-slate-300 font-outfit">
                      Instansi / Institusi <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={feedbackInstitution}
                      onChange={(e) => setFeedbackInstitution(e.target.value)}
                      placeholder="misal: RSUD dr. Soetomo / Apotek Kimia Farma / Puskesmas / Kampus"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-teal-500/25 bg-slate-50 dark:bg-[#062026] text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all font-medium"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-black text-slate-700 dark:text-slate-300 font-outfit">
                      Kota / Daerah
                    </label>
                    <input
                      type="text"
                      value={feedbackCity}
                      onChange={(e) => setFeedbackCity(e.target.value)}
                      placeholder="misal: Bandung / Surabaya / Medan"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-teal-500/25 bg-slate-50 dark:bg-[#062026] text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all font-medium"
                    />
                  </div>
                </div>

                {/* Input: Modul yang Dinilai */}
                <div className="space-y-1">
                  <label className="text-xs font-black text-slate-700 dark:text-slate-300 font-outfit">
                    Modul yang Dinilai
                  </label>
                  <select
                    value={feedbackModule}
                    onChange={(e) => setFeedbackModule(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-teal-500/25 bg-slate-50 dark:bg-[#062026] text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all font-medium cursor-pointer"
                  >
                    <optgroup label="🌟 Seluruh Platform">
                      <option value="Seluruh Platform FarmasiDruggist (Umum)">Seluruh Platform FarmasiDruggist (Umum)</option>
                    </optgroup>

                    <optgroup label="💊 Utama & Monografi">
                      <option value="Katalog & Monografi Obat (Fornas & Off-Label EBM)">Katalog &amp; Monografi Obat (Fornas &amp; Off-Label EBM)</option>
                      <option value="Panduan Cara Pakai Obat (Inhaler, Insulin, dll.)">Panduan Cara Pakai Obat (Inhaler, Insulin, dll.)</option>
                      <option value="Riwayat Cek Resep & Skrining Pasien">Riwayat Cek Resep &amp; Skrining Pasien</option>
                    </optgroup>

                    <optgroup label="🛡️ Skrining & Keamanan Resep">
                      <option value="Cek Interaksi Obat (DDInter Multi-Consensus)">Cek Interaksi Obat (DDInter Multi-Consensus)</option>
                      <option value="Keamanan Bumil & Busui (FDA PLLR & Hale)">Keamanan Bumil &amp; Busui (FDA PLLR &amp; Hale)</option>
                      <option value="Interaksi Obat & Uji Lab Klinis">Interaksi Obat &amp; Uji Lab Klinis</option>
                      <option value="Interaksi Herbal & Obat (Jamu / Fitofarmaka)">Interaksi Herbal &amp; Obat (Jamu / Fitofarmaka)</option>
                      <option value="Cek Efek Samping Obat & Algoritma Naranjo (ADR)">Cek Efek Samping Obat &amp; Algoritma Naranjo (ADR)</option>
                      <option value="Kompatibilitas Injeksi IV ICU (ASHP Y-Site)">Kompatibilitas Injeksi IV ICU (ASHP Y-Site)</option>
                    </optgroup>

                    <optgroup label="🧮 Kalkulator Medis & Racikan">
                      <option value="Stabilitas & BUD Racikan (USP <795> & <797>)">Stabilitas &amp; BUD Racikan (USP &lt;795&gt; &amp; &lt;797&gt;)</option>
                      <option value="Dosis Pediatrik & Peracikan Puyer Anak">Dosis Pediatrik &amp; Peracikan Puyer Anak</option>
                      <option value="Kalkulator Medis & Klirens Ginjal (Cockcroft-Gault/CKD-EPI)">Kalkulator Medis &amp; Klirens Ginjal (Cockcroft-Gault/CKD-EPI)</option>
                    </optgroup>

                    <optgroup label="🩺 Polifarmasi & Edukasi Pasien">
                      <option value="Swamedikasi & Triage Klinis Apotek (Standar BPOM)">Swamedikasi &amp; Triage Klinis Apotek (Standar BPOM)</option>
                      <option value="Evaluasi Polifarmasi & Kriteria Beers 2023 (STOPP/START)">Evaluasi Polifarmasi &amp; Kriteria Beers 2023 (STOPP/START)</option>
                      <option value="Generator Kartu Informasi Obat (PIO) WhatsApp Pasien">Generator Kartu Informasi Obat (PIO) WhatsApp Pasien</option>
                      <option value="Panduan Terapi Klinis & Clinical Pathways (PNPK Kemenkes)">Panduan Terapi Klinis &amp; Clinical Pathways (PNPK Kemenkes)</option>
                    </optgroup>

                    <optgroup label="🎓 Belajar, SOP & Regulasi">
                      <option value="Pusat Belajar Farmasi (Tryout UKMPPAI & OSCE Klinis)">Pusat Belajar Farmasi (Tryout UKMPPAI &amp; OSCE Klinis)</option>
                      <option value="SOP Standar Pelayanan Kefarmasian Resmi">SOP Standar Pelayanan Kefarmasian Resmi</option>
                      <option value="Database Regulasi Farmasi & UU Kesehatan">Database Regulasi Farmasi &amp; UU Kesehatan</option>
                      <option value="Literatur Ilmiah EBM & Jurnal Farmasi Terpercaya">Literatur Ilmiah EBM &amp; Jurnal Farmasi Terpercaya</option>
                      <option value="Kalkulator Skor Risiko Klinis (CHA2DS2-VASc, HAS-BLED, dll.)">Kalkulator Skor Risiko Klinis (CHA2DS2-VASc, HAS-BLED, dll.)</option>
                    </optgroup>

                    <optgroup label="💡 Lainnya">
                      <option value="Usulan Modul Baru / Fitur Lainnya">Usulan Modul Baru / Fitur Lainnya</option>
                    </optgroup>
                  </select>
                </div>

                {/* Rating Bintang Interaktif */}
                <div className="space-y-1.5 p-3 rounded-2xl bg-amber-50/70 dark:bg-[#062026] border border-amber-200/80 dark:border-teal-500/20">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-slate-800 dark:text-slate-200 font-outfit">
                      Rating Kepuasan Anda terhadap Platform Ini:
                    </span>
                    <span className="text-xs font-black text-amber-600 dark:text-amber-400 font-mono">
                      {feedbackRating} dari 5 Bintang
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFeedbackRating(star)}
                        className="p-1 cursor-pointer transition-transform hover:scale-125 focus:outline-none"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= feedbackRating
                              ? 'fill-amber-400 text-amber-400'
                              : 'fill-slate-200 dark:fill-slate-700 text-slate-300 dark:text-slate-600'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 ml-2 font-medium">
                      {feedbackRating === 5 && 'Sangat Memuaskan & Bermanfaat! 🎉'}
                      {feedbackRating === 4 && 'Bagus & Bermanfaat 👍'}
                      {feedbackRating === 3 && 'Cukup, Perlu Peningkatan 🙂'}
                      {feedbackRating <= 2 && 'Perlu Banyak Pembenahan ✍️'}
                    </span>
                  </div>
                </div>

                {/* Pesan & Saran */}
                <div className="space-y-1">
                  <label className="text-xs font-black text-slate-700 dark:text-slate-300 font-outfit">
                    Ulasan Pengalaman, Kritik Membangun, atau Usulan Fitur Baru <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={feedbackMessage}
                    onChange={(e) => setFeedbackMessage(e.target.value)}
                    placeholder="Ceritakan pengalaman Anda saat mencoba aplikasi ini, modul apa yang paling membantu kerja Anda, atau kendala apa yang Anda temukan..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-teal-500/25 bg-slate-50 dark:bg-[#062026] text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all font-medium leading-relaxed resize-none"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-300 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-black text-xs sm:text-sm rounded-full shadow-xl shadow-emerald-950/40 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01] active:scale-98 font-outfit border border-emerald-400/50"
                >
                  <Send className="w-4 h-4 fill-slate-950" />
                  <span>Kirim Ulasan &amp; Saran ke WhatsApp (+62 877-7840-2266) →</span>
                </button>

                <p className="text-[10px] text-center text-slate-400 dark:text-slate-500">
                  🔒 WhatsApp akan terbuka langsung di ponsel atau browser Anda tanpa perantara.
                </p>
              </form>
            </div>

          </div>
        </div>

      </section>

      {/* =========================================================================
          PRICING & SUBSCRIPTION SECTION (NEO-CLINICAL TECH)
          ========================================================================= */}
      <section id="pricing-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-50 dark:bg-amber-500/15 text-amber-900 dark:text-amber-300 text-xs font-black border border-amber-300 dark:border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>Paket Langganan Hemat (Akses Penuh 1 Tahun)</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-[#082a24] dark:text-white font-outfit tracking-tight">
            Tarif &amp; Lisensi Layanan FARMASIDRUGGIST
          </h2>
          <p className="text-slate-600 dark:text-teal-100/75 text-xs sm:text-sm font-medium leading-relaxed">
            Pilihan paket lisensi tahunan terjangkau untuk mahasiswa, apoteker praktik mandiri, hingga institusi klinik &amp; apotek.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-8">
          {activePlans.map((plan) => {
            const isPopular = plan.isPopular;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-6 sm:p-8 border flex flex-col justify-between relative transition-all ${
                  isPopular 
                    ? 'bg-gradient-to-b from-white via-teal-50/20 to-emerald-50/15 dark:from-[#062026] dark:via-[#072831] dark:to-[#04151a] border-2 border-teal-400 dark:border-teal-400 shadow-2xl dark:shadow-[0_25px_60px_rgba(45,212,191,0.2)] scale-[1.02]' 
                    : 'bg-white/95 dark:bg-[#04151a]/95 backdrop-blur-2xl border-slate-200/90 dark:border-teal-500/25 shadow-xl dark:shadow-[0_15px_40px_rgba(0,0,0,0.4)] hover:border-teal-400/50'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 text-[10.5px] font-black rounded-full uppercase tracking-wider shadow-lg bg-gradient-to-r from-amber-400 to-amber-300 text-slate-950 font-outfit border border-amber-200">
                    {plan.badge}
                  </div>
                )}

                <div className="space-y-4 text-left">
                  <div>
                    <h3 className="text-2xl font-black text-[#082a24] dark:text-white font-outfit">{plan.name}</h3>
                    <p className="text-xs text-slate-500 dark:text-teal-100/70 mt-1 min-h-[32px] font-medium leading-relaxed">{plan.description}</p>
                  </div>

                  <div className="border-y border-slate-100 dark:border-teal-500/20 py-4">
                    {plan.originalPriceFormatted && (
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs line-through text-slate-400 dark:text-slate-500 font-bold decoration-rose-500 decoration-2">
                          {plan.originalPriceFormatted} / tahun
                        </span>
                        {plan.discountBadge && (
                          <span className="bg-rose-500 text-white text-[10px] font-black px-2 py-0.2 rounded-full shadow-2xs font-outfit">
                            {plan.discountBadge}
                          </span>
                        )}
                      </div>
                    )}
                    <div className="flex items-baseline gap-1.5">
                      {plan.priceValue > 0 && <span className="text-sm font-bold text-slate-500 dark:text-teal-200/60">Rp</span>}
                      <span className="text-4xl font-black text-[#082a24] dark:text-white font-outfit">
                        {plan.priceValue === 0 ? 'Gratis' : plan.priceValue.toLocaleString('id-ID')}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-teal-200/60 font-medium">
                        {plan.priceValue === 0 ? 'Selamanya' : '/tahun'}
                      </span>
                    </div>
                    {plan.priceValue > 0 && (
                      <p className="text-xs text-teal-600 dark:text-teal-300 font-black mt-1">
                        Hanya ~Rp 16.500 / bulan (Hemat Rp 800.000!)
                      </p>
                    )}
                  </div>

                  <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-200">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                        <span className="font-medium">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6">
                  <button
                    onClick={plan.priceValue === 0 ? onOpenAuthModal : handleDirectWhatsAppPro}
                    className={`w-full py-4 rounded-full font-black text-xs transition-all cursor-pointer font-outfit ${
                      isPopular
                        ? 'bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-300 hover:from-amber-300 hover:to-yellow-300 text-slate-950 shadow-xl shadow-amber-950/40 hover:scale-105 active:scale-95'
                        : 'bg-slate-100 hover:bg-slate-200 dark:bg-teal-950/60 dark:hover:bg-teal-900/60 text-slate-900 dark:text-teal-200 border border-slate-300 dark:border-teal-500/30 shadow-sm hover:scale-[1.01] active:scale-95'
                    }`}
                  >
                    {plan.priceValue === 0 ? 'Mulai Akses Pemula Gratis' : `Ambil Promo Paket Pro Rp 199rb / Tahun`}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          STAGE 5 & 6: INTERACTIVE ACCORDION FAQ SECTION
          ========================================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 text-xs font-black border border-teal-300 dark:border-teal-800">
            <HelpCircle className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>Pusat Informasi &amp; Transparansi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#082a24] dark:text-white font-outfit">
            Pertanyaan Sering Diajukan (FAQ)
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium max-w-lg mx-auto">
            Informasi lengkap seputar lisensi, validitas bukti klinis (EBM), dan integrasi sistem.
          </p>
        </div>

        <div className="space-y-3">
          {PRICING_FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;

            return (
              <div 
                key={idx} 
                className={`bg-white dark:bg-[#061d23] rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'border-teal-500 shadow-md ring-1 ring-teal-500/30' 
                    : 'border-slate-200/90 dark:border-teal-500/20 shadow-xs hover:border-teal-300 dark:hover:border-teal-500/50'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <h3 className={`text-xs sm:text-sm font-bold flex items-center gap-2.5 transition-colors ${
                    isOpen ? 'text-teal-700 dark:text-teal-300' : 'text-[#082a24] dark:text-white'
                  }`}>
                    <span className={`p-1.5 rounded-xl transition-colors shrink-0 ${
                      isOpen ? 'bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                    }`}>
                      <HelpCircle className="w-4 h-4" />
                    </span>
                    <span className="font-outfit">{faq.q}</span>
                  </h3>
                  <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-teal-600 dark:text-teal-400' : 'text-slate-400'
                  }`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-slate-600 dark:text-slate-300 pl-12 leading-relaxed border-t border-slate-100 dark:border-teal-500/20 font-medium">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          STAGE 6: 2-COLUMN SIDE-BY-SIDE: TELEGRAM COMMUNITY & CONVERTING CTA
          ========================================================================= */}
      <section id="komunitas-telegram" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          
          {/* Left Card: Telegram Community */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#062028] via-[#09323d] to-[#0d4554] p-6 sm:p-8 text-white border-2 border-sky-400/40 shadow-2xl flex flex-col justify-between space-y-6">
            {/* Ambient Glow */}
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#229ED9]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4 text-left relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#229ED9]/20 border border-[#229ED9]/50 text-sky-200 text-xs font-black shadow-inner">
                <Send className="w-3.5 h-3.5 text-sky-300 fill-sky-300" />
                <span>Komunitas Telegram Resmi • Bebas Biaya</span>
              </div>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black font-outfit text-white tracking-tight leading-snug">
                Gabung Forum Diskusi Kasus Klinis &amp; Farmasi Indonesia
              </h2>

              <p className="text-xs sm:text-sm text-teal-100/90 leading-relaxed font-medium">
                Wadah kolaborasi 7.000+ Apoteker, Tenaga Kesehatan, dan Mahasiswa Farmasi seluruh Indonesia. Bedah kasus polifarmasi kompleks, telaah resep faskes, hingga kupas tuntas soal UKMPPAI.
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-sky-400/20 relative z-10">
              <a
                href="https://t.me/+lHiIMC_TdoM2NTk1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-5 bg-gradient-to-r from-sky-400 via-[#229ED9] to-sky-500 hover:from-sky-300 hover:to-sky-400 text-white font-black text-xs sm:text-sm rounded-full shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] border border-sky-300/40 font-outfit"
              >
                <Send className="w-4 h-4 fill-white" />
                <span>Join Grup Telegram (7.000+ Sejawat) →</span>
              </a>
              <p className="text-[10px] text-center text-teal-200/70">
                🔒 Diskusi ilmiah, teratur, dan bebas spam iklan komersial.
              </p>
            </div>
          </div>

          {/* Right Card: Converting Platform CTA */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#031519] via-[#062932] to-[#093c4a] p-6 sm:p-8 text-white border-2 border-teal-500/40 shadow-2xl flex flex-col justify-between space-y-6">
            {/* Ambient Glow */}
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4 text-left relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/40 text-teal-300 text-xs font-black">
                <Sparkles className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                <span>Mulai Transformasi Pelayanan Klinis Anda</span>
              </div>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black font-outfit tracking-tight leading-snug">
                Tingkatkan Keselamatan Pasien &amp; Ketepatan Terapi Hari Ini
              </h2>

              <p className="text-xs sm:text-sm text-teal-100/90 leading-relaxed font-medium">
                Dapatkan akses instan ke 21 modul klinis terpadu, monografi resmi BPOM, skrining interaksi multi-konsensus global, dan kalkulator resep presisi tanpa instalasi rumit.
              </p>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-teal-500/20 relative z-10">
              <button
                onClick={() => {
                  const el = document.getElementById('interactive-playground');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-4 px-5 bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-300 hover:from-teal-300 hover:to-emerald-300 text-slate-950 font-black rounded-full shadow-xl shadow-teal-950/40 transition-all text-xs sm:text-sm cursor-pointer hover:scale-[1.02] active:scale-98 font-outfit flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4 fill-slate-950" />
                <span>Coba Simulasi Klinis Gratis</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleDirectWhatsAppPro}
                className="w-full py-3.5 px-5 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-black rounded-full shadow-md transition-all text-xs cursor-pointer hover:scale-[1.01] active:scale-98 font-outfit flex items-center justify-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
                <span>Ambil Promo Paket Pro (Rp 199rb/Tahun)</span>
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
