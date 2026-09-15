import React, { useState, useMemo } from 'react';
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
  Share2
} from 'lucide-react';
import { FloatingPillsBackground } from './FloatingPillsBackground';
import {
  HEALTH_TOPIC_PRESETS,
  MEDIA_TYPE_OPTIONS,
  TARGET_AUDIENCE_OPTIONS,
  COMMUNICATION_TONE_OPTIONS,
  HealthTopicPreset,
  MediaTypeOption,
  TargetAudienceOption,
  CommunicationToneOption,
  buildEducationMasterPrompt,
  getSimulatedOutputPreview
} from '../data/educationPromptData';
import { ClinicBrandingSettings } from '../types';

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

  // Media, Audience, Tone states
  const [selectedMediaTypeId, setSelectedMediaTypeId] = useState<string>('poster');
  const [selectedAudienceId, setSelectedAudienceId] = useState<string>('general');
  const [selectedToneId, setSelectedToneId] = useState<string>('empathetic');

  // Toggles & Customization
  const [includeVisualPrompt, setIncludeVisualPrompt] = useState<boolean>(true);
  const [includeDosAndDonts, setIncludeDosAndDonts] = useState<boolean>(true);
  const [includePharmacyIdentity, setIncludePharmacyIdentity] = useState<boolean>(true);
  const [pharmacyName, setPharmacyName] = useState<string>(
    clinicBranding?.clinicName ? `${clinicBranding.clinicName} (Apoteker Penanggung Jawab: ${clinicBranding.pharmacistName || 'Apoteker'})` : 'Farmasi Druggist / Apotek'
  );

  // Active Output Tab
  const [activeOutputTab, setActiveOutputTab] = useState<'prompt' | 'simulation'>('prompt');
  const [copied, setCopied] = useState<boolean>(false);

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

  // Filtered topics
  const filteredTopics = useMemo(() => {
    if (topicCategoryFilter === 'all') return HEALTH_TOPIC_PRESETS;
    return HEALTH_TOPIC_PRESETS.filter(t => t.category === topicCategoryFilter);
  }, [topicCategoryFilter]);

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
    includeVisualPrompt,
    includeDosAndDonts,
    includePharmacyIdentity,
    pharmacyName
  ]);

  // Simulated Output
  const simulatedOutput = useMemo(() => {
    return getSimulatedOutputPreview(activeTopic, activeMediaType);
  }, [activeTopic, activeMediaType]);

  // Copy handler
  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(masterPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
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

  return (
    <div className="space-y-6">

      {/* HERO BANNER - OBSIDIAN CYAN & TEAL WITH FLOATING PILLS */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#04121a] via-[#08232e] to-[#0d343f] p-6 sm:p-8 text-white shadow-2xl border border-teal-500/25">
        <FloatingPillsBackground density="low" accentColor="#14b8a6" />
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-6 bottom-4 opacity-10 pointer-events-none">
          <Wand2 className="w-48 h-48 text-teal-400" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-bold font-outfit">
              <Sparkles className="w-3.5 h-3.5 text-teal-400" />
              <span>AI Prompt Engineering for Healthcare Communication</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 text-white flex items-center justify-center shadow-lg shadow-teal-950/50 shrink-0">
                <Wand2 className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-black font-outfit tracking-tight">
                  Generator Edukasi Farmasi AI
                </h1>
                <p className="text-xs sm:text-sm text-teal-100/80 font-medium">
                  Rancang Master Prompt AI tingkat lanjut untuk membuat naskah Poster, Leaflet, Carousel Instagram, dan Naskah Video Edukasi Pasien siap salin ke ChatGPT atau Gemini.
                </p>
              </div>
            </div>

            {/* Quick Stat Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <div className="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-xs flex items-center gap-1.5 font-bold text-teal-200">
                <Pill className="w-3.5 h-3.5 text-teal-400" />
                <span>10+ Preset Topik Klinis Populer</span>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-xs flex items-center gap-1.5 font-bold text-cyan-200">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                <span>6 Format Media Komunikasi</span>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-xs flex items-center gap-1.5 font-bold text-amber-200">
                <Bot className="w-3.5 h-3.5 text-amber-400" />
                <span>Format Standar CDC &amp; WHO</span>
              </div>
            </div>
          </div>

          {/* Quick Direct Copy / Open Action */}
          <div className="flex flex-col items-stretch sm:items-end gap-2.5 shrink-0 relative z-10">
            <div className="bg-slate-950/80 px-4 py-2.5 rounded-2xl border border-teal-950/60 text-right shadow-md">
              <span className="text-[11px] text-slate-400 block font-medium">Format Terpilih:</span>
              <span className="text-sm font-black text-teal-300 font-outfit">{activeMediaType.name}</span>
            </div>
            <button
              onClick={handleCopyPrompt}
              className="bg-teal-600 hover:bg-teal-500 text-white px-4 py-2.5 rounded-xl flex items-center justify-center gap-2 text-xs font-bold transition-all shadow-md cursor-pointer active:scale-95 font-outfit"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Prompt Tersalin ke Clipboard!' : 'Salin Master Prompt AI'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* MAIN TWO-COLUMN WORKSPACE: LEFT CONTROLS (5 COLS) + RIGHT PROMPT PREVIEW (7 COLS) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

        {/* LEFT COLUMN: CONTROLS & SELECTION (5 COLS) */}
        <div className="lg:col-span-5 space-y-5">

          {/* 1. SELEKSI TOPIK KESEHATAN */}
          <div className="bg-white dark:bg-[#0c1322] border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-black font-outfit uppercase tracking-wider text-slate-700 dark:text-slate-300">
                <span className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center text-[10px] font-black">1</span>
                <span>Pilih Topik Edukasi Farmasi</span>
              </div>
              <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-900 p-1 rounded-xl text-[11px] font-bold">
                <button
                  onClick={() => setIsCustomTopic(false)}
                  className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                    !isCustomTopic
                      ? 'bg-teal-600 text-white shadow-xs'
                      : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                  }`}
                >
                  Preset Teruji
                </button>
                <button
                  onClick={() => setIsCustomTopic(true)}
                  className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                    isCustomTopic
                      ? 'bg-teal-600 text-white shadow-xs'
                      : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                  }`}
                >
                  Kustom Sendiri
                </button>
              </div>
            </div>

            {!isCustomTopic ? (
              <div className="space-y-3">
                {/* Category Pills */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 custom-scrollbar">
                  {[
                    { id: 'all', label: 'Semua' },
                    { id: 'dagusibu', label: 'DAGUSIBU' },
                    { id: 'chronic', label: 'Kronis' },
                    { id: 'otc', label: 'Lambung & Asma' },
                    { id: 'special-pop', label: 'Bumil/Busui' },
                    { id: 'safety', label: 'Keamanan Obat' },
                    { id: 'general', label: 'Ramadhan' }
                  ].map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setTopicCategoryFilter(cat.id)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-bold whitespace-nowrap transition-all cursor-pointer font-outfit ${
                        topicCategoryFilter === cat.id
                          ? 'bg-teal-500/20 text-teal-700 dark:text-teal-300 border border-teal-500/40'
                          : 'bg-slate-100 dark:bg-slate-900 text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

                {/* Preset List */}
                <div className="space-y-2 max-h-64 overflow-y-auto pr-1 custom-scrollbar">
                  {filteredTopics.map(topic => (
                    <div
                      key={topic.id}
                      onClick={() => setSelectedTopicId(topic.id)}
                      className={`p-3 rounded-2xl border transition-all cursor-pointer text-left space-y-1 ${
                        selectedTopicId === topic.id
                          ? 'bg-teal-50 dark:bg-teal-950/30 border-teal-500 text-slate-900 dark:text-white shadow-xs ring-1 ring-teal-500/30'
                          : 'bg-slate-50/70 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-teal-300 dark:hover:border-teal-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold font-outfit text-slate-900 dark:text-white line-clamp-1">
                          {topic.title}
                        </span>
                        <span className="text-[9px] font-black px-1.5 py-0.2 rounded-md bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-300 shrink-0 ml-2">
                          {topic.badge}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                        {topic.tagline}
                      </p>
                    </div>
                  ))}
                </div>
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
                    className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-teal-500"
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
                    className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-teal-500"
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
                    className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-teal-500"
                  />
                </div>
              </div>
            )}
          </div>

          {/* 2. PILIH FORMAT MEDIA */}
          <div className="bg-white dark:bg-[#0c1322] border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-xs font-black font-outfit uppercase tracking-wider text-slate-700 dark:text-slate-300">
              <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center text-[10px] font-black">2</span>
              <span>Pilih Format Media Edukasi</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {MEDIA_TYPE_OPTIONS.map(media => {
                const Icon = getMediaIcon(media.id);
                const isSelected = selectedMediaTypeId === media.id;
                return (
                  <button
                    key={media.id}
                    onClick={() => setSelectedMediaTypeId(media.id)}
                    className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-cyan-50 dark:bg-cyan-950/30 border-cyan-500 text-slate-900 dark:text-white ring-1 ring-cyan-500/30 shadow-xs'
                        : 'bg-slate-50/70 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-cyan-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <Icon className={`w-4 h-4 ${isSelected ? 'text-cyan-600 dark:text-cyan-400' : 'text-slate-400'}`} />
                      <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-slate-200/80 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
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

          {/* 3. TARGET AUDIENS & TONE KOMUNIKASI */}
          <div className="bg-white dark:bg-[#0c1322] border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-xs font-black font-outfit uppercase tracking-wider text-slate-700 dark:text-slate-300">
              <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center text-[10px] font-black">3</span>
              <span>Target Audiens &amp; Gaya Komunikasi</span>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Target Sasaran Pasien:
                </label>
                <select
                  value={selectedAudienceId}
                  onChange={(e) => setSelectedAudienceId(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-bold focus:outline-none focus:border-amber-500"
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
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-bold focus:outline-none focus:border-amber-500"
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
            </div>
          </div>

          {/* 4. FITUR TAMBAHAN PROMPT (TOGGLES) */}
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
                  className="w-4 h-4 text-teal-600 rounded focus:ring-teal-500 cursor-pointer"
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
                  className="w-4 h-4 text-teal-600 rounded focus:ring-teal-500 cursor-pointer"
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
                  className="w-4 h-4 text-teal-600 rounded focus:ring-teal-500 cursor-pointer"
                />
              </label>

              {includePharmacyIdentity && (
                <div className="pt-1">
                  <input
                    type="text"
                    value={pharmacyName}
                    onChange={(e) => setPharmacyName(e.target.value)}
                    placeholder="Nama Apotek / Klinik & SIPA Apoteker"
                    className="w-full p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-teal-500"
                  />
                </div>
              )}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: LIVE PROMPT & SIMULATION PREVIEW (7 COLS) */}
        <div className="lg:col-span-7 space-y-4">

          {/* TAB HEADER & ACTION BUTTONS */}
          <div className="bg-white dark:bg-[#0c1322] border border-slate-200 dark:border-slate-800 rounded-2xl p-2.5 flex flex-wrap items-center justify-between gap-3 shadow-xs">
            {/* View Mode Tabs */}
            <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900 p-1 rounded-xl text-xs font-bold font-outfit">
              <button
                onClick={() => setActiveOutputTab('prompt')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeOutputTab === 'prompt'
                    ? 'bg-teal-600 text-white shadow-xs'
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
                    ? 'bg-teal-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Simulasi Hasil Media</span>
              </button>
            </div>

            {/* Direct Open in AI Tools */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={handleCopyPrompt}
                className="px-3 py-1.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all cursor-pointer font-outfit"
                title="Salin seluruh teks prompt ke clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-200" /> : <Copy className="w-3.5 h-3.5" />}
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
            </div>
          </div>

          {/* MAIN PROMPT OUTPUT PANEL */}
          {activeOutputTab === 'prompt' && (
            <div className="bg-[#090e17] rounded-3xl border border-teal-500/20 p-5 text-slate-200 shadow-xl space-y-4 font-mono text-xs leading-relaxed relative">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 font-sans text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-bold text-teal-300 font-outfit">Ready-to-Paste Master Prompt</span>
                  <span className="text-[10px] text-slate-400 font-normal">({masterPrompt.length} karakter)</span>
                </div>
                <button
                  onClick={handleCopyPrompt}
                  className="text-slate-400 hover:text-white text-xs flex items-center gap-1 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Tersalin' : 'Copy'}</span>
                </button>
              </div>

              {/* Scrollable Prompt Box */}
              <div className="max-h-[600px] overflow-y-auto pr-2 custom-scrollbar space-y-3 whitespace-pre-wrap selection:bg-teal-900 selection:text-white">
                {masterPrompt}
              </div>

              {/* Tips Footer */}
              <div className="border-t border-slate-800/80 pt-3 flex items-center justify-between text-[11px] font-sans text-slate-400">
                <span className="flex items-center gap-1">
                  <Info className="w-3.5 h-3.5 text-teal-400" />
                  <span>Cukup klik tombol <strong>Salin Prompt</strong> lalu tempelkan (Ctrl+V) ke ChatGPT atau Gemini.</span>
                </span>
                <span className="text-teal-400 font-bold hidden sm:inline">Tekan Ctrl+C / Salin</span>
              </div>
            </div>
          )}

          {/* SIMULATION PREVIEW PANEL */}
          {activeOutputTab === 'simulation' && (
            <div className="bg-white dark:bg-[#0c1322] rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-5 text-slate-800 dark:text-slate-200">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-500" />
                  <span className="text-xs font-bold font-outfit uppercase tracking-wider text-slate-900 dark:text-white">
                    Simulasi Contoh Output Media ({activeMediaType.name})
                  </span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 font-bold">
                  Mockup Preview
                </span>
              </div>

              {/* Rendered Mockup Container */}
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 space-y-4">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-teal-600 dark:text-teal-400 font-outfit block mb-1">
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
                    Poin Edukasi Pasien:
                  </span>
                  {activeTopic.clinicalPoints.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0 mt-0.5" />
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

                <div className="border-t border-slate-200 dark:border-slate-800 pt-3 text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
                  <span>Konsultasikan obat Anda dengan Apoteker di <strong>{pharmacyName}</strong></span>
                  <span className="text-teal-600 dark:text-teal-400 font-bold">#TanyaApoteker</span>
                </div>
              </div>

              {/* Raw Simulation Markdown */}
              <div className="space-y-2">
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
