import React, { useState, useMemo, useEffect } from 'react';
import {
  Sparkles,
  Copy,
  Check,
  ExternalLink,
  Bot,
  Layout,
  BookOpen,
  Instagram,
  Video,
  MessageSquare,
  Flag,
  FileText,
  Users,
  HeartHandshake,
  CheckCircle2,
  Sliders,
  RotateCcw,
  Layers,
  Wand2,
  Info,
  Eye,
  Pill,
  Send,
  Zap,
  HelpCircle,
  Share2,
  Activity,
  Search,
  Download,
  Printer,
  ChevronLeft,
  ChevronRight,
  Clock,
  Heart,
  Bookmark,
  MessageCircle,
  CheckCheck,
  Globe,
  ThumbsUp,
  ShieldAlert,
  Smartphone,
  Phone,
  Video as VideoIcon,
  Smile,
  Paperclip,
  Mic,
  AlertTriangle,
  FileDown
} from 'lucide-react';
import {
  HEALTH_TOPIC_PRESETS,
  MEDIA_TYPE_OPTIONS,
  TARGET_AUDIENCE_OPTIONS,
  COMMUNICATION_TONE_OPTIONS,
  REGIONAL_LANGUAGE_OPTIONS,
  HealthTopicPreset,
  MediaTypeOption,
  TargetAudienceOption,
  CommunicationToneOption,
  RegionalLanguageOption,
  buildEducationMasterPrompt,
  getSimulatedOutputPreview,
  getStructuredSimulationData,
  StructuredSimulationData
} from '../data/educationPromptData';
import { ClinicBrandingSettings } from '../types';
import { PaginationControls } from './PaginationControls';

interface EducationPromptGeneratorProps {
  clinicBranding?: ClinicBrandingSettings;
}

export const EducationPromptGenerator: React.FC<EducationPromptGeneratorProps> = ({
  clinicBranding
}) => {
  // Topic state
  const [selectedTopicId, setSelectedTopicId] = useState<string>(HEALTH_TOPIC_PRESETS[0].id);
  const [isCustomTopic, setIsCustomTopic] = useState<boolean>(false);
  const [customTopicTitle, setCustomTopicTitle] = useState<string>('');
  const [customTopicTagline, setCustomTopicTagline] = useState<string>('');
  const [customPointsText, setCustomPointsText] = useState<string>('');
  const [topicCategoryFilter, setTopicCategoryFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Media, Audience, Tone, Language states
  const [selectedMediaTypeId, setSelectedMediaTypeId] = useState<string>('poster');
  const [selectedAudienceId, setSelectedAudienceId] = useState<string>('general');
  const [selectedToneId, setSelectedToneId] = useState<string>('empathetic');
  const [selectedLanguageId, setSelectedLanguageId] = useState<string>('id-standard');

  // Toggles & Customization
  const [includeVisualPrompt, setIncludeVisualPrompt] = useState<boolean>(true);
  const [includeDosAndDonts, setIncludeDosAndDonts] = useState<boolean>(true);
  const [includePharmacyIdentity, setIncludePharmacyIdentity] = useState<boolean>(true);
  const [pharmacyName, setPharmacyName] = useState<string>(
    clinicBranding?.clinicName
      ? `${clinicBranding.clinicName} (Apoteker Penanggung Jawab: ${clinicBranding.pharmacistName || 'Apoteker'})`
      : 'Farmasi Druggist / Apotek Kita'
  );

  // Active Output Tab & Interactive Mockup States
  const [activeOutputTab, setActiveOutputTab] = useState<'prompt' | 'simulation'>('prompt');
  const [carouselSlideIndex, setCarouselSlideIndex] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);
  const [copiedNaskah, setCopiedNaskah] = useState<boolean>(false);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);

  // Active objects
  const activeTopic = useMemo(() => {
    return HEALTH_TOPIC_PRESETS.find(t => t.id === selectedTopicId) || HEALTH_TOPIC_PRESETS[0];
  }, [selectedTopicId]);

  const activeMediaType = useMemo(() => {
    return MEDIA_TYPE_OPTIONS.find(m => m.id === selectedMediaTypeId) || MEDIA_TYPE_OPTIONS[0];
  }, [selectedMediaTypeId]);

  const activeAudience = useMemo(() => {
    return TARGET_AUDIENCE_OPTIONS.find(a => a.id === selectedAudienceId) || TARGET_AUDIENCE_OPTIONS[0];
  }, [selectedAudienceId]);

  const activeTone = useMemo(() => {
    return COMMUNICATION_TONE_OPTIONS.find(t => t.id === selectedToneId) || COMMUNICATION_TONE_OPTIONS[0];
  }, [selectedToneId]);

  const activeLanguage = useMemo(() => {
    return REGIONAL_LANGUAGE_OPTIONS.find(l => l.id === selectedLanguageId) || REGIONAL_LANGUAGE_OPTIONS[0];
  }, [selectedLanguageId]);

  // Filtered topics by category and search query
  const filteredTopics = useMemo(() => {
    return HEALTH_TOPIC_PRESETS.filter(topic => {
      const matchCat = topicCategoryFilter === 'all' || topic.category === topicCategoryFilter;
      const matchSearch = topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        topic.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        topic.clinicalPoints.some(p => p.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [topicCategoryFilter, searchQuery]);

  // Topic Pagination
  const [topicPage, setTopicPage] = useState<number>(1);
  const [topicsPerPage, setTopicsPerPage] = useState<number>(6);

  useEffect(() => {
    setTopicPage(1);
  }, [topicCategoryFilter, searchQuery]);

  const totalTopicItems = filteredTopics.length;
  const totalTopicPages = Math.max(1, Math.ceil(totalTopicItems / topicsPerPage));
  const validTopicPage = Math.min(topicPage, totalTopicPages);

  const paginatedTopics = useMemo(() => {
    const start = (validTopicPage - 1) * topicsPerPage;
    return filteredTopics.slice(start, start + topicsPerPage);
  }, [filteredTopics, validTopicPage, topicsPerPage]);

  // Master Prompt Generation
  const masterPrompt = useMemo(() => {
    if (isCustomTopic) {
      const parsedPoints = customPointsText
        .split('\n')
        .map(p => p.trim())
        .filter(p => p.length > 0);

      return buildEducationMasterPrompt({
        topicTitle: customTopicTitle || 'Topik Edukasi Farmasi Kustom',
        topicTagline: customTopicTagline || undefined,
        clinicalPoints: parsedPoints.length > 0 ? parsedPoints : ['Edukasi cara minum dan keselamatan obat secara tepat.'],
        mediaType: activeMediaType,
        targetAudience: activeAudience,
        communicationTone: activeTone,
        regionalLanguage: activeLanguage,
        includeVisualPrompt,
        includeDosAndDonts,
        includePharmacyIdentity,
        pharmacyName
      });
    }

    return buildEducationMasterPrompt({
      topicTitle: activeTopic.title,
      topicTagline: activeTopic.tagline,
      clinicalPoints: activeTopic.clinicalPoints,
      dosAndDonts: activeTopic.suggestedDosAndDonts,
      visualIdea: activeTopic.visualIdea,
      mediaType: activeMediaType,
      targetAudience: activeAudience,
      communicationTone: activeTone,
      regionalLanguage: activeLanguage,
      includeVisualPrompt,
      includeDosAndDonts,
      includePharmacyIdentity,
      pharmacyName
    });
  }, [
    isCustomTopic,
    customTopicTitle,
    customTopicTagline,
    customPointsText,
    activeTopic,
    activeMediaType,
    activeAudience,
    activeTone,
    activeLanguage,
    includeVisualPrompt,
    includeDosAndDonts,
    includePharmacyIdentity,
    pharmacyName
  ]);

  // Structured Simulation Data for Rich Interactive Mockups
  const structuredData = useMemo(() => {
    if (isCustomTopic) {
      const parsedPoints = customPointsText
        .split('\n')
        .map(p => p.trim())
        .filter(p => p.length > 0);

      const syntheticTopic: HealthTopicPreset = {
        id: 'custom-topic',
        category: 'general',
        title: customTopicTitle || 'Topik Edukasi Farmasi Kustom',
        tagline: customTopicTagline || 'Panduan Penggunaan Obat Aman & Rasional',
        badge: 'Kustom Pasien',
        keyKeywords: 'edukasi farmasi, cara minum obat, keselamatan pasien',
        clinicalPoints: parsedPoints.length > 0 ? parsedPoints : ['Minum obat sesuai anjuran dan tanyakan pada Apoteker.'],
        suggestedDosAndDonts: {
          dos: ['Konsultasikan dengan Apoteker', 'Minum air putih yang cukup'],
          donts: ['Jangan hentikan obat sembarangan', 'Jangan berbagi obat pribadi']
        },
        visualIdea: 'Desain infografis medis bersih dan komunikatif'
      };
      return getStructuredSimulationData(syntheticTopic, pharmacyName);
    }

    return getStructuredSimulationData(activeTopic, pharmacyName);
  }, [isCustomTopic, customTopicTitle, customTopicTagline, customPointsText, activeTopic, pharmacyName]);

  // Simulated Output (Raw Markdown fallback)
  const simulatedOutput = useMemo(() => {
    return getSimulatedOutputPreview(activeTopic, activeMediaType);
  }, [activeTopic, activeMediaType]);

  // Copy Prompt handler
  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(masterPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Copy Simulation Naskah handler
  const handleCopyNaskah = () => {
    const textToCopy = selectedMediaTypeId === 'whatsapp'
      ? structuredData.whatsappMessage
      : selectedMediaTypeId === 'carousel'
      ? `${structuredData.caption}\n\n${structuredData.hashtags.join(' ')}`
      : simulatedOutput;

    navigator.clipboard.writeText(textToCopy);
    setCopiedNaskah(true);
    setTimeout(() => setCopiedNaskah(false), 2500);
  };

  // Download Naskah file (.txt)
  const handleDownloadNaskah = () => {
    const content = `NASKAH EDUKASI KESEHATAN FARMASI
Topik: ${activeTopic.title}
Tagline: ${activeTopic.tagline}
Format Media: ${activeMediaType.name} (${activeMediaType.aspectRatio})
Target Sasaran: ${activeAudience.name}
Gaya Bahasa: ${activeTone.name} (${activeLanguage.name})
Penyelenggara: ${pharmacyName}

==================================================
1. POIN KLINIS KUNCI YANG WAJIB DIKETAHUI PASIEN:
${activeTopic.clinicalPoints.map((p, i) => `${i + 1}. ${p}`).join('\n')}

==================================================
2. PANDUAN BOLEH & JANGAN (DO'S & DON'TS):
HAL YANG DIANJURKAN (DO'S):
${activeTopic.suggestedDosAndDonts.dos.map(d => `• ${d}`).join('\n')}

HAL YANG DILARANG (DON'TS):
${activeTopic.suggestedDosAndDonts.donts.map(d => `• ${d}`).join('\n')}

==================================================
3. NASKAH PESAN WHATSAPP BROADCAST SIAP PAKAI:
${structuredData.whatsappMessage}

==================================================
4. MASTER PROMPT AI (CHATGPT / GEMINI / CLAUDE):
${masterPrompt}
`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Naskah_Edukasi_${activeTopic.id}.txt`;
    link.click();
    URL.revokeObjectURL(url);
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 2500);
  };

  // Direct open handlers
  const handleOpenChatGPT = () => {
    navigator.clipboard.writeText(masterPrompt);
    const chatGptUrl = `https://chatgpt.com/?q=${encodeURIComponent(masterPrompt)}`;
    window.open(chatGptUrl, '_blank');
  };

  const handleOpenGemini = () => {
    navigator.clipboard.writeText(masterPrompt);
    window.open('https://gemini.google.com/app', '_blank');
  };

  const handleOpenWhatsAppWeb = () => {
    const url = `https://web.whatsapp.com/send?text=${encodeURIComponent(structuredData.whatsappMessage)}`;
    window.open(url, '_blank');
  };

  const handlePrint = () => {
    window.print();
  };

  const getMediaIcon = (id: string) => {
    switch (id) {
      case 'poster': return Layout;
      case 'leaflet': return BookOpen;
      case 'carousel': return Instagram;
      case 'video-script': return Video;
      case 'whatsapp': return MessageSquare;
      case 'rollup-banner': return Flag;
      default: return FileText;
    }
  };

  const TOPIC_CATEGORIES = [
    { id: 'all', label: 'Semua (17)' },
    { id: 'dagusibu', label: 'DAGUSIBU' },
    { id: 'chronic', label: 'Kronis & OAT' },
    { id: 'device', label: 'Sediaan Khusus' },
    { id: 'pediatric', label: 'Pediatrik & Diare' },
    { id: 'otc', label: 'Lambung & Asma' },
    { id: 'special-pop', label: 'Bumil/Busui' },
    { id: 'safety', label: 'Keamanan & Beers' },
    { id: 'general', label: 'Ramadhan' }
  ];

  return (
    <div className="space-y-6">

      {/* CLEAN CLINICAL COMMAND HEADER */}
      <div className="bg-white dark:bg-[#0c1427] border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-2xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-[#005f5a]/10 text-[#005f5a] flex items-center justify-center border border-[#005f5a]/20 shadow-xs shrink-0">
              <Wand2 className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-bold font-outfit text-slate-900 dark:text-white tracking-tight">
                  Generator Edukasi Farmasi AI
                </h1>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 font-mono">
                  Promkes Standard
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Rancang prompt edukasi klinis multi-format berstandar Kemenkes &amp; WHO untuk pasien &amp; publik
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2 text-xs">
              <span className="text-slate-500 dark:text-slate-400">Preset:</span>
              <span className="font-bold text-slate-800 dark:text-slate-200 font-mono">{HEALTH_TOPIC_PRESETS.length} Topik</span>
              <span className="text-slate-300 dark:text-slate-700">|</span>
              <span className="text-slate-500 dark:text-slate-400">Media:</span>
              <span className="font-bold text-[#005f5a]">{activeMediaType.name}</span>
            </div>

            <button
              onClick={handleCopyPrompt}
              className="bg-[#005f5a] hover:bg-[#004d49] text-white px-4 py-2.5 rounded-xl flex items-center justify-center gap-2 text-xs font-semibold transition-all shadow-xs cursor-pointer active:scale-95 font-outfit"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Prompt Tersalin!' : 'Salin Master Prompt AI'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* MAIN TWO-COLUMN WORKSPACE: LEFT CONTROLS (5 COLS) + RIGHT PROMPT/SIMULATION PREVIEW (7 COLS) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

        {/* LEFT COLUMN: CONTROLS & SELECTION (5 COLS) */}
        <div className="lg:col-span-5 space-y-5">

          {/* 1. SELEKSI TOPIK KESEHATAN DENGAN SEARCH BAR */}
          <div className="bg-white dark:bg-[#0c1322] border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-black font-outfit uppercase tracking-wider text-slate-700 dark:text-slate-300">
                <span className="w-5 h-5 rounded-full bg-pink-500/20 text-pink-600 dark:text-pink-400 flex items-center justify-center text-[10px] font-black">1</span>
                <span>Pilih Topik Edukasi Farmasi</span>
              </div>
              <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-900 p-1 rounded-xl text-[11px] font-bold">
                <button
                  onClick={() => setIsCustomTopic(false)}
                  className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                    !isCustomTopic
                      ? 'bg-pink-600 text-white shadow-xs'
                      : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                  }`}
                >
                  Preset Teruji ({HEALTH_TOPIC_PRESETS.length})
                </button>
                <button
                  onClick={() => setIsCustomTopic(true)}
                  className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                    isCustomTopic
                      ? 'bg-pink-600 text-white shadow-xs'
                      : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                  }`}
                >
                  Kustom Sendiri
                </button>
              </div>
            </div>

            {!isCustomTopic ? (
              <div className="space-y-3">
                {/* Search Bar */}
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari topik (cth: tetes telinga, diare, tb, supositoria, tensi)..."
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-pink-500"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                    >
                      ✕
                    </button>
                  )}
                </div>

                {/* Category Pills */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 custom-scrollbar">
                  {TOPIC_CATEGORIES.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setTopicCategoryFilter(cat.id)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-bold whitespace-nowrap transition-all cursor-pointer font-outfit ${
                        topicCategoryFilter === cat.id
                          ? 'bg-pink-500/20 text-pink-700 dark:text-pink-300 border border-pink-500/40'
                          : 'bg-slate-100 dark:bg-slate-900 text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

                {/* Preset List */}
                <div className="space-y-2">
                  {filteredTopics.length > 0 ? (
                    paginatedTopics.map(topic => (
                      <div
                        key={topic.id}
                        onClick={() => setSelectedTopicId(topic.id)}
                        className={`p-3 rounded-2xl border transition-all cursor-pointer text-left space-y-1 ${
                          selectedTopicId === topic.id
                            ? 'bg-pink-50 dark:bg-pink-950/30 border-pink-500 text-slate-900 dark:text-white shadow-xs ring-1 ring-pink-500/30'
                            : 'bg-slate-50/70 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-pink-300 dark:hover:border-pink-700'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold font-outfit text-slate-900 dark:text-white line-clamp-1">
                            {topic.title}
                          </span>
                          <span className="text-[9px] font-black px-1.5 py-0.5 rounded-md bg-pink-100 dark:bg-pink-900/60 text-pink-800 dark:text-pink-300 shrink-0 ml-2 font-outfit">
                            {topic.badge}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                          {topic.tagline}
                        </p>
                      </div>
                    ))
                  ) : (
                    <div className="p-6 text-center text-xs text-slate-400 space-y-1">
                      <p className="font-bold">Topik tidak ditemukan</p>
                      <p className="text-[11px]">Coba cari dengan kata kunci lain atau pilih tab 'Semua'.</p>
                    </div>
                  )}
                </div>

                {/* Pagination Controls */}
                <PaginationControls
                  currentPage={validTopicPage}
                  totalPages={totalTopicPages}
                  totalItems={totalTopicItems}
                  itemsOnCurrentPage={paginatedTopics.length}
                  onPageChange={(newPage) => setTopicPage(newPage)}
                  itemLabel="preset topik"
                  itemsPerPage={topicsPerPage}
                  onItemsPerPageChange={(newSize) => {
                    setTopicsPerPage(newSize);
                    setTopicPage(1);
                  }}
                  pageSizeOptions={[4, 6, 8, 12]}
                  colorTheme="pink"
                />
              </div>
            ) : (
              <div className="space-y-3 text-xs">
                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Judul Topik Kesehatan *
                  </label>
                  <input
                    type="text"
                    value={customTopicTitle}
                    onChange={(e) => setCustomTopicTitle(e.target.value)}
                    placeholder="Misal: Bahaya Minum Obat Tanpa Air Putih / Etiket Biru vs Putih"
                    className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-pink-500"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Tagline / Sub-headline Pendukung (Opsional)
                  </label>
                  <input
                    type="text"
                    value={customTopicTagline}
                    onChange={(e) => setCustomTopicTagline(e.target.value)}
                    placeholder="Misal: Jangan Sepelekan Aturan Minum Obat demi Keselamatan Anda!"
                    className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-pink-500"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Poin Klinis Kunci (Pisahkan dengan baris baru Enter)
                  </label>
                  <textarea
                    rows={3}
                    value={customPointsText}
                    onChange={(e) => setCustomPointsText(e.target.value)}
                    placeholder="1. Poin penting pertama&#10;2. Poin penting kedua&#10;3. Waspada efek samping..."
                    className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-pink-500"
                  />
                </div>
              </div>
            )}
          </div>

          {/* 2. PILIH FORMAT MEDIA */}
          <div className="bg-white dark:bg-[#0c1322] border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-xs font-black font-outfit uppercase tracking-wider text-slate-700 dark:text-slate-300">
              <span className="w-5 h-5 rounded-full bg-pink-500/20 text-pink-600 dark:text-pink-400 flex items-center justify-center text-[10px] font-black">2</span>
              <span>Pilih Format Media Edukasi</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {MEDIA_TYPE_OPTIONS.map(media => {
                const Icon = getMediaIcon(media.id);
                const isSelected = selectedMediaTypeId === media.id;
                return (
                  <button
                    key={media.id}
                    onClick={() => {
                      setSelectedMediaTypeId(media.id);
                      setCarouselSlideIndex(0);
                    }}
                    className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-pink-50 dark:bg-pink-950/30 border-pink-500 text-slate-900 dark:text-white ring-1 ring-pink-500/30 shadow-xs'
                        : 'bg-slate-50/70 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-pink-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <Icon className={`w-4 h-4 ${isSelected ? 'text-pink-600 dark:text-pink-400' : 'text-slate-400'}`} />
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-slate-200/80 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                        {media.badge}
                      </span>
                    </div>
                    <span className="text-xs font-bold font-outfit block line-clamp-1">
                      {media.name}
                    </span>
                    <span className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">
                      {media.aspectRatio}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. TARGET AUDIENS, GAYA KOMUNIKASI & KEARIFAN LOKAL */}
          <div className="bg-white dark:bg-[#0c1322] border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-xs font-black font-outfit uppercase tracking-wider text-slate-700 dark:text-slate-300">
              <span className="w-5 h-5 rounded-full bg-pink-500/20 text-pink-600 dark:text-pink-400 flex items-center justify-center text-[10px] font-black">3</span>
              <span>Target Audiens, Tone &amp; Bahasa Daerah</span>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Target Sasaran Pasien:
                </label>
                <select
                  value={selectedAudienceId}
                  onChange={(e) => setSelectedAudienceId(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-bold focus:outline-none focus:border-pink-500"
                >
                  {TARGET_AUDIENCE_OPTIONS.map(aud => (
                    <option key={aud.id} value={aud.id}>
                      {aud.name} ({aud.readingLevel})
                    </option>
                  ))}
                </select>
                <p className="text-[11px] text-slate-400 mt-1">
                  💡 {activeAudience.description}
                </p>
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Tone &amp; Pendekatan Bahasa:
                </label>
                <select
                  value={selectedToneId}
                  onChange={(e) => setSelectedToneId(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-bold focus:outline-none focus:border-pink-500"
                >
                  {COMMUNICATION_TONE_OPTIONS.map(tone => (
                    <option key={tone.id} value={tone.id}>
                      {tone.name}
                    </option>
                  ))}
                </select>
                <p className="text-[11px] text-slate-400 mt-1">
                  💡 {activeTone.description}
                </p>
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1 flex items-center justify-between">
                  <span>Kearifan Lokal / Bahasa Daerah (Opsional):</span>
                  <span className="text-[10px] text-pink-600 dark:text-pink-400 font-normal">Bilingual Support</span>
                </label>
                <select
                  value={selectedLanguageId}
                  onChange={(e) => setSelectedLanguageId(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-bold focus:outline-none focus:border-pink-500"
                >
                  {REGIONAL_LANGUAGE_OPTIONS.map(lang => (
                    <option key={lang.id} value={lang.id}>
                      {lang.name}
                    </option>
                  ))}
                </select>
                <p className="text-[11px] text-slate-400 mt-1">
                  🌾 {activeLanguage.description}
                </p>
              </div>
            </div>
          </div>

          {/* 4. PARAMETER TAMBAHAN PROMPT (TOGGLES) */}
          <div className="bg-white dark:bg-[#0c1322] border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-xs space-y-3">
            <span className="text-xs font-black font-outfit uppercase tracking-wider text-slate-700 dark:text-slate-300 block">
              Parameter Tambahan Prompt
            </span>

            <div className="space-y-2 text-xs">
              <label className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 cursor-pointer">
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  Sertakan Prompt Desain Gambar Visual AI (Midjourney/DALL-E)
                </span>
                <input
                  type="checkbox"
                  checked={includeVisualPrompt}
                  onChange={(e) => setIncludeVisualPrompt(e.target.checked)}
                  className="w-4 h-4 text-pink-600 rounded focus:ring-pink-500 cursor-pointer"
                />
              </label>

              <label className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 cursor-pointer">
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  Sertakan Boks Perbandingan Boleh vs Jangan (Do's &amp; Don'ts)
                </span>
                <input
                  type="checkbox"
                  checked={includeDosAndDonts}
                  onChange={(e) => setIncludeDosAndDonts(e.target.checked)}
                  className="w-4 h-4 text-pink-600 rounded focus:ring-pink-500 cursor-pointer"
                />
              </label>

              <label className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 cursor-pointer">
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  Sertakan Identitas Apotek &amp; Apoteker di Call To Action
                </span>
                <input
                  type="checkbox"
                  checked={includePharmacyIdentity}
                  onChange={(e) => setIncludePharmacyIdentity(e.target.checked)}
                  className="w-4 h-4 text-pink-600 rounded focus:ring-pink-500 cursor-pointer"
                />
              </label>

              {includePharmacyIdentity && (
                <div className="pt-1">
                  <input
                    type="text"
                    value={pharmacyName}
                    onChange={(e) => setPharmacyName(e.target.value)}
                    placeholder="Nama Apotek / Klinik & SIPA Apoteker"
                    className="w-full p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-pink-500"
                  />
                </div>
              )}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: LIVE PROMPT & INTERACTIVE SIMULATION PREVIEW (7 COLS) */}
        <div className="lg:col-span-7 space-y-4">

          {/* TAB HEADER & ACTION BUTTONS */}
          <div className="bg-white dark:bg-[#0c1322] border border-slate-200 dark:border-slate-800 rounded-2xl p-2.5 flex flex-wrap items-center justify-between gap-3 shadow-xs">
            {/* View Mode Tabs */}
            <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900 p-1 rounded-xl text-xs font-bold font-outfit">
              <button
                onClick={() => setActiveOutputTab('prompt')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeOutputTab === 'prompt'
                    ? 'bg-pink-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Bot className="w-3.5 h-3.5" />
                <span>Master Prompt AI</span>
              </button>
              <button
                onClick={() => setActiveOutputTab('simulation')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeOutputTab === 'simulation'
                    ? 'bg-pink-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Simulasi Mockup Media</span>
              </button>
            </div>

            {/* Quick Actions Bar */}
            <div className="flex items-center gap-1.5 flex-wrap">
              {activeOutputTab === 'prompt' ? (
                <>
                  <button
                    onClick={handleCopyPrompt}
                    className="px-3 py-1.5 rounded-xl bg-pink-600 hover:bg-pink-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all cursor-pointer font-outfit"
                    title="Salin seluruh teks prompt ke clipboard"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-pink-200" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Tersalin!' : 'Salin Prompt'}</span>
                  </button>

                  <button
                    onClick={handleOpenChatGPT}
                    className="px-3 py-1.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all cursor-pointer font-outfit"
                    title="Buka ChatGPT dan tempelkan prompt ini"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>ChatGPT</span>
                  </button>

                  <button
                    onClick={handleOpenGemini}
                    className="px-3 py-1.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all cursor-pointer font-outfit"
                    title="Buka Google Gemini"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>Gemini</span>
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={handleCopyNaskah}
                    className="px-3 py-1.5 rounded-xl bg-pink-600 hover:bg-pink-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all cursor-pointer font-outfit"
                    title="Salin naskah edukasi"
                  >
                    {copiedNaskah ? <Check className="w-3.5 h-3.5 text-pink-200" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedNaskah ? 'Tersalin!' : 'Salin Naskah'}</span>
                  </button>

                  <button
                    onClick={handleDownloadNaskah}
                    className="px-3 py-1.5 rounded-xl bg-slate-800 dark:bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all cursor-pointer font-outfit"
                    title="Unduh naskah sebagai file teks (.txt)"
                  >
                    {downloadSuccess ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Download className="w-3.5 h-3.5" />}
                    <span>{downloadSuccess ? 'Tersimpan!' : 'Unduh TXT'}</span>
                  </button>

                  {selectedMediaTypeId === 'whatsapp' && (
                    <button
                      onClick={handleOpenWhatsAppWeb}
                      className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all cursor-pointer font-outfit"
                      title="Kirim naskah langsung ke WhatsApp Web"
                    >
                      <Send className="w-3 h-3" />
                      <span>WA Web</span>
                    </button>
                  )}

                  <button
                    onClick={handlePrint}
                    className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all cursor-pointer font-outfit"
                    title="Cetak atau Simpan sebagai PDF"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Cetak</span>
                  </button>
                </>
              )}
            </div>
          </div>

          {/* 1. MAIN PROMPT OUTPUT PANEL */}
          {activeOutputTab === 'prompt' && (
            <div className="bg-[#130611] rounded-3xl border border-pink-500/25 p-5 text-slate-200 shadow-xl space-y-4 font-mono text-xs leading-relaxed relative">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 font-sans text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-pink-400 animate-pulse" />
                  <span className="font-bold text-pink-300 font-outfit">Ready-to-Paste Master Prompt</span>
                  <span className="text-[10px] text-slate-400 font-normal">({masterPrompt.length} karakter)</span>
                </div>
                <button
                  onClick={handleCopyPrompt}
                  className="text-slate-400 hover:text-white text-xs flex items-center gap-1 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-pink-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Tersalin' : 'Copy'}</span>
                </button>
              </div>

              {/* Scrollable Prompt Box */}
              <div className="max-h-[600px] overflow-y-auto pr-2 custom-scrollbar space-y-3 whitespace-pre-wrap selection:bg-pink-900 selection:text-white">
                {masterPrompt}
              </div>

              {/* Tips Footer */}
              <div className="border-t border-slate-800/80 pt-3 flex items-center justify-between text-[11px] font-sans text-slate-400">
                <span className="flex items-center gap-1">
                  <Info className="w-3.5 h-3.5 text-pink-400" />
                  <span>Cukup klik tombol <strong>Salin Prompt</strong> lalu tempelkan (Ctrl+V) ke ChatGPT atau Gemini.</span>
                </span>
                <span className="text-pink-400 font-bold hidden sm:inline">Tekan Ctrl+C / Salin</span>
              </div>
            </div>
          )}

          {/* 2. RICH INTERACTIVE SIMULATION MOCKUP PANEL */}
          {activeOutputTab === 'simulation' && (
            <div className="bg-white dark:bg-[#0c1322] rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-5 text-slate-800 dark:text-slate-200">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-pink-500" />
                  <span className="text-xs font-bold font-outfit uppercase tracking-wider text-slate-900 dark:text-white">
                    Pratinjau Visual Interaktif ({activeMediaType.name})
                  </span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-pink-50 dark:bg-pink-950/50 text-pink-700 dark:text-pink-300 font-bold">
                  Interactive Realistic Mockup
                </span>
              </div>

              {/* A. WHATSAPP CHAT BUBBLE MOCKUP */}
              {selectedMediaTypeId === 'whatsapp' && (
                <div className="max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl border border-emerald-800/30 font-sans">
                  {/* WhatsApp Top Bar */}
                  <div className="bg-[#075e54] text-white p-3.5 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-emerald-700 flex items-center justify-center font-bold text-sm shadow-inner">
                        🏥
                      </div>
                      <div>
                        <div className="text-xs font-bold flex items-center gap-1">
                          <span>{pharmacyName.split('(')[0]}</span>
                          <span className="text-emerald-300 text-[10px]">✓</span>
                        </div>
                        <div className="text-[10px] text-emerald-200">Online • Akun Bisnis Terverifikasi</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-white/90">
                      <VideoIcon className="w-4 h-4 cursor-pointer" />
                      <Phone className="w-4 h-4 cursor-pointer" />
                    </div>
                  </div>

                  {/* WhatsApp Chat Area */}
                  <div className="bg-[#e5ddd5] dark:bg-[#0b141a] p-4 min-h-[360px] flex flex-col justify-end space-y-3 relative">
                    {/* Timestamp Center Pill */}
                    <div className="mx-auto bg-white/80 dark:bg-slate-800/80 px-2.5 py-0.5 rounded-full text-[10px] text-slate-600 dark:text-slate-300 font-semibold shadow-xs">
                      HARI INI
                    </div>

                    {/* Speech Bubble */}
                    <div className="bg-[#dcf8c6] dark:bg-[#005c4b] text-slate-800 dark:text-white p-3.5 rounded-2xl rounded-tl-none shadow-md max-w-[92%] space-y-2 text-xs leading-relaxed">
                      <div className="font-bold text-emerald-950 dark:text-emerald-200 text-xs border-b border-emerald-700/20 pb-1">
                        📢 {activeTopic.title}
                      </div>
                      <div className="italic text-[11px] text-emerald-900/80 dark:text-emerald-100/80">
                        "{activeTopic.tagline}"
                      </div>
                      <div className="space-y-1 pt-1 text-[11px]">
                        <span className="font-bold block text-slate-900 dark:text-slate-100">📌 Poin Penting:</span>
                        {activeTopic.clinicalPoints.slice(0, 3).map((p, i) => (
                          <div key={i} className="flex items-start gap-1">
                            <span>•</span>
                            <span>{p}</span>
                          </div>
                        ))}
                      </div>

                      {includeDosAndDonts && activeTopic.suggestedDosAndDonts && (
                        <div className="pt-1 text-[10px] space-y-1 border-t border-emerald-700/20">
                          <div className="text-emerald-800 dark:text-emerald-300 font-bold">
                            ✅ Anjuran: {activeTopic.suggestedDosAndDonts.dos[0]}
                          </div>
                          <div className="text-rose-700 dark:text-rose-300 font-bold">
                            ❌ Hindari: {activeTopic.suggestedDosAndDonts.donts[0]}
                          </div>
                        </div>
                      )}

                      <div className="flex items-center justify-end gap-1 text-[9px] text-slate-500 dark:text-slate-400 pt-1">
                        <span>10:15</span>
                        <CheckCheck className="w-3.5 h-3.5 text-blue-500" />
                      </div>
                    </div>

                    {/* WhatsApp Input Bar Mockup */}
                    <div className="flex items-center gap-2 pt-2">
                      <div className="flex-1 bg-white dark:bg-slate-800 rounded-full px-3 py-1.5 text-xs text-slate-400 flex items-center justify-between shadow-xs">
                        <span>Ketik pesan balasan...</span>
                        <div className="flex items-center gap-1 text-slate-400">
                          <Paperclip className="w-3.5 h-3.5" />
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#075e54] text-white flex items-center justify-center shadow-xs">
                        <Mic className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="bg-slate-100 dark:bg-slate-900 p-3 flex items-center justify-between gap-2 border-t border-slate-200 dark:border-slate-800">
                    <button
                      onClick={handleCopyNaskah}
                      className="flex-1 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center justify-center gap-1.5 transition-colors"
                    >
                      {copiedNaskah ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedNaskah ? 'Pesan Tersalin' : 'Salin Pesan WA'}</span>
                    </button>
                    <button
                      onClick={handleOpenWhatsAppWeb}
                      className="flex-1 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Kirim ke WA Web</span>
                    </button>
                  </div>
                </div>
              )}

              {/* B. INSTAGRAM CAROUSEL SLIDE-BY-SLIDE MOCKUP */}
              {selectedMediaTypeId === 'carousel' && (
                <div className="max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 font-sans">
                  {/* IG Profile Header */}
                  <div className="p-3.5 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 p-0.5">
                        <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center text-xs font-black text-pink-600">
                          💊
                        </div>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1">
                          <span>{pharmacyName.toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 15) || 'apoteker'}_id</span>
                          <span className="text-blue-500 text-[10px]">●</span>
                        </div>
                        <div className="text-[10px] text-slate-400">Edukasi Farmasi Klinis • Slide {carouselSlideIndex + 1}/10</div>
                      </div>
                    </div>
                    <span className="text-slate-400 text-sm">•••</span>
                  </div>

                  {/* Active Slide Display (Square 1:1) */}
                  <div className="relative aspect-square bg-gradient-to-br from-[#1b0616] via-[#2f0b27] to-[#450e39] text-white p-6 flex flex-col justify-between select-none">
                    {/* Slide Top Badge */}
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full bg-pink-500/30 text-pink-300 border border-pink-400/30 text-[10px] font-bold font-outfit uppercase">
                        {structuredData.carouselSlides[carouselSlideIndex]?.badge || 'Edukasi'}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-black/40 text-slate-300 text-[10px] font-mono font-bold">
                        {carouselSlideIndex + 1} / 10
                      </span>
                    </div>

                    {/* Slide Content */}
                    <div className="my-auto space-y-3 text-center">
                      <h3 className="text-lg md:text-xl font-black font-outfit text-white leading-snug">
                        {structuredData.carouselSlides[carouselSlideIndex]?.title}
                      </h3>
                      {structuredData.carouselSlides[carouselSlideIndex]?.subtitle && (
                        <p className="text-xs text-pink-200/80 font-medium">
                          {structuredData.carouselSlides[carouselSlideIndex]?.subtitle}
                        </p>
                      )}
                      <div className="space-y-1.5 text-xs text-slate-200 max-w-xs mx-auto text-left pt-2">
                        {structuredData.carouselSlides[carouselSlideIndex]?.points.map((pt, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="text-pink-400 font-bold">•</span>
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                      {structuredData.carouselSlides[carouselSlideIndex]?.callout && (
                        <div className="inline-block p-2 rounded-xl bg-pink-500/20 border border-pink-400/30 text-[11px] font-bold text-pink-200 mt-2">
                          {structuredData.carouselSlides[carouselSlideIndex]?.callout}
                        </div>
                      )}
                    </div>

                    {/* Visual Note Footer on Card */}
                    <div className="text-[9px] text-pink-300/60 text-center italic border-t border-white/10 pt-2">
                      💡 Visual: {structuredData.carouselSlides[carouselSlideIndex]?.visualNote}
                    </div>

                    {/* Navigation Arrows */}
                    <button
                      onClick={() => setCarouselSlideIndex(prev => Math.max(0, prev - 1))}
                      disabled={carouselSlideIndex === 0}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center disabled:opacity-20 hover:bg-black/80 transition-opacity cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setCarouselSlideIndex(prev => Math.min(structuredData.carouselSlides.length - 1, prev + 1))}
                      disabled={carouselSlideIndex === structuredData.carouselSlides.length - 1}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center disabled:opacity-20 hover:bg-black/80 transition-opacity cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* 10-Slide Pagination Dots Indicator */}
                  <div className="flex items-center justify-center gap-1.5 py-2.5 bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
                    {structuredData.carouselSlides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCarouselSlideIndex(idx)}
                        className={`transition-all rounded-full cursor-pointer ${
                          carouselSlideIndex === idx
                            ? 'w-4 h-1.5 bg-pink-600'
                            : 'w-1.5 h-1.5 bg-slate-300 dark:bg-slate-700'
                        }`}
                      />
                    ))}
                  </div>

                  {/* IG Actions Bar */}
                  <div className="p-3.5 space-y-2">
                    <div className="flex items-center justify-between text-slate-800 dark:text-slate-200">
                      <div className="flex items-center gap-3">
                        <Heart className="w-5 h-5 text-rose-500 fill-rose-500 cursor-pointer" />
                        <MessageCircle className="w-5 h-5 cursor-pointer" />
                        <Send className="w-5 h-5 cursor-pointer" />
                      </div>
                      <Bookmark className="w-5 h-5 cursor-pointer" />
                    </div>

                    {/* Caption Preview */}
                    <div className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
                      <div className="line-clamp-2">
                        <span className="font-bold text-slate-900 dark:text-white mr-1.5">
                          {pharmacyName.toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 15) || 'apoteker'}_id
                        </span>
                        <span>{structuredData.caption.split('\n')[0]}</span>
                      </div>
                      <div className="text-pink-600 dark:text-pink-400 font-semibold text-[11px]">
                        {structuredData.hashtags.slice(0, 4).join(' ')}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* C. POSTER EDUKASI FASKES (A3 / A4) MOCKUP */}
              {selectedMediaTypeId === 'poster' && (
                <div className="max-w-lg mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d1627] p-6 space-y-5 font-sans">
                  {/* Poster Header */}
                  <div className="text-center space-y-1.5 border-b-2 border-pink-500/30 pb-4">
                    <div className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-pink-50 dark:bg-pink-950/60 text-pink-700 dark:text-pink-300 text-[10px] font-black uppercase tracking-wider font-outfit border border-pink-300 dark:border-pink-800">
                      <span>🏥 {pharmacyName}</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black font-outfit text-slate-900 dark:text-white uppercase tracking-tight">
                      {activeTopic.title}
                    </h2>
                    <p className="text-xs text-pink-600 dark:text-pink-400 font-bold">
                      {activeTopic.tagline}
                    </p>
                  </div>

                  {/* 3 Key Takeaways Cards */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 font-outfit block">
                      3 Kunci Utama Penggunaan Obat:
                    </span>
                    <div className="grid grid-cols-1 gap-2">
                      {structuredData.posterTakeaways.map((pt, i) => (
                        <div key={i} className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-2.5">
                          <div className="w-7 h-7 rounded-xl bg-pink-500/10 text-pink-600 dark:text-pink-400 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                            {i + 1}
                          </div>
                          <div>
                            <span className="text-xs font-bold text-slate-900 dark:text-white block font-outfit">
                              {pt.title}
                            </span>
                            <span className="text-[11px] text-slate-600 dark:text-slate-300">
                              {pt.desc}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 2-Column Do's & Don'ts Table */}
                  {includeDosAndDonts && activeTopic.suggestedDosAndDonts && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 space-y-1.5">
                        <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1 font-outfit">
                          <span>✅ Yang Dianjurkan (Do's):</span>
                        </span>
                        <ul className="text-[11px] text-emerald-950 dark:text-emerald-200 space-y-1">
                          {activeTopic.suggestedDosAndDonts.dos.map((d, i) => (
                            <li key={i}>• {d}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-3 rounded-2xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800/50 space-y-1.5">
                        <span className="text-xs font-bold text-rose-800 dark:text-rose-300 flex items-center gap-1 font-outfit">
                          <span>❌ Yang Dilarang (Don'ts):</span>
                        </span>
                        <ul className="text-[11px] text-rose-950 dark:text-rose-200 space-y-1">
                          {activeTopic.suggestedDosAndDonts.donts.map((d, i) => (
                            <li key={i}>• {d}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Poster Footer CTA */}
                  <div className="pt-3 border-t-2 border-slate-100 dark:border-slate-800 text-center space-y-1">
                    <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
                      {structuredData.callToAction}
                    </p>
                    <p className="text-[10px] text-pink-600 dark:text-pink-400 font-bold">
                      #TanyaApoteker • #GeMaCerMat • Akreditasi Faskes Promkes
                    </p>
                  </div>
                </div>
              )}

              {/* D. VIDEO SHORT / TIKTOK TELEPROMPTER MOCKUP */}
              {selectedMediaTypeId === 'video-script' && (
                <div className="max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800 bg-black text-white p-5 space-y-4 font-sans relative">
                  {/* Phone Header Indicator */}
                  <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-800 pb-2">
                    <div className="flex items-center gap-1 text-rose-400 font-bold">
                      <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                      <span>REC 00:60</span>
                    </div>
                    <span className="font-mono">9:16 Shorts / Reels</span>
                    <span>1080x1920</span>
                  </div>

                  {/* Teleprompter Script Scenes */}
                  <div className="space-y-3 max-h-96 overflow-y-auto pr-1 custom-scrollbar text-xs">
                    {structuredData.videoScript.map((scene, i) => (
                      <div key={i} className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                        <div className="flex items-center justify-between text-[10px]">
                          <span className="px-2 py-0.5 rounded bg-pink-500/20 text-pink-300 font-bold font-mono">
                            ⏱️ {scene.time}
                          </span>
                          <span className="text-slate-400 text-[10px] italic">
                            🎵 {scene.sfx}
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-400">
                          <strong>Aksi Visual:</strong> {scene.cameraAction}
                        </div>
                        <div className="text-xs font-bold text-pink-200 bg-black/40 p-2.5 rounded-xl border border-pink-500/20">
                          🗣️ {scene.dialogue}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="text-center pt-2 text-[11px] text-slate-400 border-t border-slate-800">
                    💡 Tips Kreator: Taruh kamera setinggi mata (eye-level) dan ucapkan dengan intonasi ramah &amp; berenergi!
                  </div>
                </div>
              )}

              {/* E. LEAFLET & ROLLUP BANNER PREVIEW */}
              {(selectedMediaTypeId === 'leaflet' || selectedMediaTypeId === 'rollup-banner') && (
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-4">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-pink-600 dark:text-pink-400 font-outfit block mb-1">
                      {activeTopic.badge} • {activeMediaType.name}
                    </span>
                    <h2 className="text-lg font-black font-outfit text-slate-900 dark:text-white leading-snug">
                      {activeTopic.title}
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">
                      {activeTopic.tagline}
                    </p>
                  </div>

                  <div className="space-y-2 border-t border-slate-200 dark:border-slate-800 pt-3">
                    <span className="text-xs font-bold text-slate-900 dark:text-white block font-outfit">
                      Substansi Klinis Edukasi:
                    </span>
                    {activeTopic.clinicalPoints.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-pink-500 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>

                  {includeDosAndDonts && activeTopic.suggestedDosAndDonts && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 space-y-1.5">
                        <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1 font-outfit">
                          <span>✅ Yang Boleh Dilakukan:</span>
                        </span>
                        <ul className="text-[11px] text-emerald-950 dark:text-emerald-200 space-y-1">
                          {activeTopic.suggestedDosAndDonts.dos.map((d, i) => (
                            <li key={i}>• {d}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800/50 space-y-1.5">
                        <span className="text-xs font-bold text-rose-800 dark:text-rose-300 flex items-center gap-1 font-outfit">
                          <span>❌ Yang Harus Dihindari:</span>
                        </span>
                        <ul className="text-[11px] text-rose-950 dark:text-rose-200 space-y-1">
                          {activeTopic.suggestedDosAndDonts.donts.map((d, i) => (
                            <li key={i}>• {d}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Raw Simulation Markdown Collapsible */}
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <span className="text-xs font-bold font-outfit uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                  Format Naskah Teks Mentah (Markdown)
                </span>
                <pre className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[11px] font-mono text-slate-700 dark:text-slate-300 overflow-x-auto whitespace-pre-wrap max-h-48">
                  {simulatedOutput}
                </pre>
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
