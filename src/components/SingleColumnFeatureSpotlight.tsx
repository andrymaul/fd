import React, { useState, useEffect, useCallback } from 'react';
import { 
  Building2, 
  Baby, 
  FlaskConical, 
  Syringe, 
  Smartphone, 
  HeartPulse, 
  GraduationCap, 
  Stethoscope, 
  ChevronRight, 
  ChevronLeft, 
  Play, 
  Pause, 
  ArrowRight, 
  Check, 
  Lock,
  Layers,
  Calculator,
  Database,
  Leaf,
  AlertTriangle,
  AlertOctagon,
  ShieldAlert,
  BookOpen,
  BookMarked,
  Pill,
  ClipboardList,
  Scale,
  HelpCircle,
  Activity,
  Flame,
  Sparkles,
  Wand2,
  ShieldCheck,
  Languages
} from 'lucide-react';
import { UserProfile } from '../types';

interface SingleColumnFeatureSpotlightProps {
  onSelectTab: (tab: string) => void;
  onOpenSwamedikasiProtocol?: (protocolId: string) => void;
  currentUser?: UserProfile | null;
}

interface SpotlightModule {
  id: string;
  tabKey: string;
  moduleNumber: string;
  shortLabel: string;
  badgeTop: string;
  badgeEngine: string;
  title: string;
  description: string;
  theme: {
    accent: string;
    border: string;
    glow: string;
    badgeBg: string;
    badgeText: string;
    iconBg: string;
    iconColor: string;
    btnGradient: string;
    btnText: string;
  };
  icon: React.ComponentType<{ className?: string }>;
  forTarget: string;
  ctaText: string;
  renderMicroPreview: () => React.ReactNode;
  onAction?: () => void;
}

export const SingleColumnFeatureSpotlight: React.FC<SingleColumnFeatureSpotlightProps> = ({
  onSelectTab,
  onOpenSwamedikasiProtocol,
  currentUser
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isMarqueeHovered, setIsMarqueeHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  const SLIDE_DURATION = 6000; // 6 detik per modul
  const INTERVAL_STEP = 50; // update progress tiap 50ms

  // Kumpulan Lengkap 26 Modul Klinis Terpadu Farmasi Druggist
  const modules: SpotlightModule[] = [
    {
      id: 'ddi',
      tabKey: 'interactions',
      moduleNumber: '01',
      shortLabel: 'DDI Engine',
      badgeTop: 'Modul Utama #1',
      badgeEngine: 'DDInter Engine • 6 Konsensus Global',
      title: 'Multi-Consensus Drug-Drug Interaction (DDI) Engine',
      description: 'Penapisan simultan >10 obat resep sekaligus. Menggabungkan data dari DDInter (Nature npj), ASHP, Drugs.com, Medscape, Stockley’s Drug Interactions, dan CekBPOM RI secara real-time.',
      forTarget: 'Untuk: Apoteker, Apotek & Tenaga Kesehatan',
      ctaText: 'Buka Cek Interaksi',
      icon: Layers,
      theme: {
        accent: 'teal',
        border: 'border-teal-300 dark:border-teal-500/40',
        glow: 'from-teal-500/20 via-emerald-500/10 to-transparent',
        badgeBg: 'bg-teal-600 dark:bg-teal-500',
        badgeText: 'text-white dark:text-slate-950',
        iconBg: 'bg-teal-100 dark:bg-teal-950/60',
        iconColor: 'text-teal-600 dark:text-teal-400',
        btnGradient: 'from-teal-500 via-emerald-500 to-teal-400',
        btnText: 'text-slate-950'
      },
      renderMicroPreview: () => (
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-teal-300/80">
            <span>Matriks Derajat Keparahan:</span>
            <span className="text-teal-600 dark:text-teal-400 font-mono text-[11px]">Real-time Calculation</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center text-xs font-black">
            <div className="p-3 rounded-2xl bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-300 border border-rose-200 dark:border-rose-500/30">
              <span className="block text-sm sm:text-base font-outfit font-black">Major</span>
              <span className="text-[10px] font-medium opacity-80 mt-0.5 block">Kontraindikasi Relatif</span>
            </div>
            <div className="p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-300 border border-amber-200 dark:border-amber-500/30">
              <span className="block text-sm sm:text-base font-outfit font-black">Moderate</span>
              <span className="text-[10px] font-medium opacity-80 mt-0.5 block">Monitoring Ketat</span>
            </div>
            <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30">
              <span className="block text-sm sm:text-base font-outfit font-black">Minor</span>
              <span className="text-[10px] font-medium opacity-80 mt-0.5 block">Signifikansi Ringan</span>
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#062026] border border-slate-200/80 dark:border-teal-500/20 text-[11px] text-slate-600 dark:text-teal-100/70 flex items-center justify-between">
            <span className="font-semibold">Konsensus Basis Data:</span>
            <span className="font-mono font-bold text-teal-700 dark:text-teal-300">Nature npj • ASHP • CekBPOM</span>
          </div>
        </div>
      )
    },
    {
      id: 'pregnancy',
      tabKey: 'pregnancy',
      moduleNumber: '02',
      shortLabel: 'Keamanan Bumil',
      badgeTop: 'Obstetri & Laktasi',
      badgeEngine: 'FDA PLLR & Hale’s L1-L5',
      title: 'Keamanan Bumil & Busui',
      description: 'Skrining trimester 1, 2, dan 3 berdasar klasifikasi naratif FDA PLLR serta kategori keamanan menyusui Hale L1 (Aman) hingga L5 (Kontraindikasi). Disertai data rasio ekskresi ASI (M/P ratio & RID).',
      forTarget: 'Untuk: Dokter Obgyn, Apoteker & Bidan',
      ctaText: 'Lihat Modul Bumil & Busui',
      icon: Baby,
      theme: {
        accent: 'pink',
        border: 'border-pink-300 dark:border-pink-500/40',
        glow: 'from-pink-500/20 via-rose-500/10 to-transparent',
        badgeBg: 'bg-pink-600 dark:bg-pink-500',
        badgeText: 'text-white dark:text-slate-950',
        iconBg: 'bg-pink-100 dark:bg-pink-950/60',
        iconColor: 'text-pink-600 dark:text-pink-400',
        btnGradient: 'from-pink-500 via-rose-400 to-pink-400',
        btnText: 'text-white dark:text-slate-950'
      },
      renderMicroPreview: () => (
        <div className="space-y-2.5 text-xs font-bold">
          <div className="flex items-center justify-between p-3 rounded-2xl bg-rose-50/80 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40">
            <div>
              <div className="font-outfit text-rose-800 dark:text-rose-200 text-sm font-black">Trimester 1 (Organogenesis)</div>
              <p className="text-[10px] text-rose-600/90 dark:text-rose-300/80 font-medium">Periode paling rentan terhadap efek teratogenik obat</p>
            </div>
            <span className="px-3 py-1 rounded-full bg-rose-200 dark:bg-rose-900 text-rose-900 dark:text-rose-200 text-[10px] font-mono font-black">
              Skrining Ketat
            </span>
          </div>
          <div className="flex items-center justify-between p-3 rounded-2xl bg-pink-50/80 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-900/40">
            <div>
              <div className="font-outfit text-pink-800 dark:text-pink-200 text-sm font-black">Laktasi &amp; Busui (Hale's L1 - L5)</div>
              <p className="text-[10px] text-pink-600/90 dark:text-pink-300/80 font-medium">Evaluasi Relative Infant Dose (RID &lt; 10% aman)</p>
            </div>
            <span className="px-3 py-1 rounded-full bg-pink-200 dark:bg-pink-900 text-pink-900 dark:text-pink-200 text-[10px] font-mono font-black">
              Rasio RID &amp; M/P
            </span>
          </div>
        </div>
      )
    },
    {
      id: 'bud',
      tabKey: 'bud',
      moduleNumber: '03',
      shortLabel: 'Kalkulator BUD',
      badgeTop: 'Farmasi Racikan',
      badgeEngine: 'Standar USP <795> & Farmakope Indonesia VI',
      title: 'Kalkulator BUD Racikan',
      description: 'Penetapan otomatis Beyond-Use Date untuk sediaan non-steril: puyer racikan, kapsul, suspensi, sirup kering antibiotik rekonstitusi, serta salep/krim sesuai parameter suhu dan stabilitas air.',
      forTarget: 'Untuk: Apotek Racikan, Depo Rawat Inap & Laboratorium Farmasi',
      ctaText: 'Buka Kalkulator BUD',
      icon: FlaskConical,
      theme: {
        accent: 'teal',
        border: 'border-teal-300 dark:border-teal-500/40',
        glow: 'from-teal-500/20 via-cyan-500/10 to-transparent',
        badgeBg: 'bg-teal-600 dark:bg-teal-500',
        badgeText: 'text-white dark:text-slate-950',
        iconBg: 'bg-teal-100 dark:bg-teal-950/60',
        iconColor: 'text-teal-600 dark:text-teal-400',
        btnGradient: 'from-teal-500 via-emerald-400 to-teal-400',
        btnText: 'text-slate-950'
      },
      renderMicroPreview: () => (
        <div className="space-y-2 p-3.5 rounded-2xl bg-teal-50/60 dark:bg-[#062026] border border-teal-200/80 dark:border-teal-500/30 text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-teal-200/50 dark:border-teal-500/20">
            <span className="font-bold text-teal-900 dark:text-teal-200">Sediaan Cair Tanpa Air (Non-Aqueous):</span>
            <span className="px-2 py-0.5 rounded-md bg-teal-200 dark:bg-teal-900 text-teal-900 dark:text-teal-200 font-mono font-black text-[11px]">Maks. 90 Hari</span>
          </div>
          <div className="flex items-center justify-between py-1 border-b border-teal-200/50 dark:border-teal-500/20">
            <span className="font-bold text-teal-900 dark:text-teal-200">Sediaan Berair Dingin (2°C - 8°C):</span>
            <span className="px-2 py-0.5 rounded-md bg-teal-200 dark:bg-teal-900 text-teal-900 dark:text-teal-200 font-mono font-black text-[11px]">Maks. 14 Hari</span>
          </div>
          <div className="flex items-center justify-between pt-1">
            <span className="font-bold text-teal-900 dark:text-teal-200">Sirup Kering Antibiotik Rekonstitusi:</span>
            <span className="px-2 py-0.5 rounded-md bg-emerald-200 dark:bg-emerald-900 text-emerald-900 dark:text-emerald-200 font-mono font-black text-[11px]">7 - 14 Hari</span>
          </div>
        </div>
      )
    },
    {
      id: 'iv-compatibility',
      tabKey: 'iv-compatibility',
      moduleNumber: '04',
      shortLabel: 'Injeksi IV Y-Site',
      badgeTop: 'Injeksi Rawat Inap & ICU',
      badgeEngine: 'ASHP Trissel’s 2024 Reference',
      title: 'Kompatibilitas Injeksi IV',
      description: 'Skrining presipitasi & inkompatibilitas Y-Site pada jalur infus ganda ICU. Verifikasi kecocokan pelarut D5W, Normal Saline 0.9%, dan Ringer Laktat untuk mencegah risiko fatal emboli kristal.',
      forTarget: 'Untuk: ICU, HCU, IGD & Apoteker Bangsal RS',
      ctaText: 'Buka Skrining Injeksi IV',
      icon: Syringe,
      theme: {
        accent: 'sky',
        border: 'border-sky-300 dark:border-sky-500/40',
        glow: 'from-sky-500/20 via-blue-500/10 to-transparent',
        badgeBg: 'bg-sky-600 dark:bg-sky-500',
        badgeText: 'text-white dark:text-slate-950',
        iconBg: 'bg-sky-100 dark:bg-sky-950/60',
        iconColor: 'text-sky-600 dark:text-sky-400',
        btnGradient: 'from-sky-500 via-blue-400 to-sky-400',
        btnText: 'text-white dark:text-slate-950'
      },
      renderMicroPreview: () => (
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-2 text-center text-xs font-black">
            <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30 flex items-center justify-center gap-2">
              <span className="text-base">✓</span>
              <span>Kompatibel (C)</span>
            </div>
            <div className="p-3 rounded-2xl bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-500/30 flex items-center justify-center gap-2">
              <span className="text-base">✕</span>
              <span>Inkompatibel (I)</span>
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-sky-50 dark:bg-[#062026] border border-sky-200 dark:border-sky-500/30 flex items-center justify-between text-xs text-sky-800 dark:text-sky-200">
            <span className="font-semibold">Pelarut Teruji:</span>
            <span className="font-mono font-bold">Dextrose 5% • NaCl 0.9% • Ringer Laktat</span>
          </div>
        </div>
      )
    },
    {
      id: 'whatsapp-pio',
      tabKey: 'whatsapp-pio',
      moduleNumber: '05',
      shortLabel: 'Edukasi PIO WA',
      badgeTop: 'Pelayanan Informasi Obat (PIO)',
      badgeEngine: 'WhatsApp One-Click Integration',
      title: 'Edukasi Obat Pasien (PIO)',
      description: 'Buat kartu edukasi aturan minum obat, etiket khusus (sebelum/sesudah makan, antibiotik habiskan), pantangan makanan, dan peringatan efek samping dalam format ramah yang langsung terkirim ke WhatsApp pasien.',
      forTarget: 'Untuk: Apotek Komunitas, Farmasi Rawat Jalan & Klinik',
      ctaText: 'Buka Kartu PIO WhatsApp',
      icon: Smartphone,
      theme: {
        accent: 'emerald',
        border: 'border-emerald-300 dark:border-emerald-500/40',
        glow: 'from-emerald-500/20 via-teal-500/10 to-transparent',
        badgeBg: 'bg-emerald-600 dark:bg-emerald-500',
        badgeText: 'text-white dark:text-slate-950',
        iconBg: 'bg-emerald-100 dark:bg-emerald-950/60',
        iconColor: 'text-emerald-600 dark:text-emerald-400',
        btnGradient: 'from-emerald-500 via-teal-400 to-emerald-400',
        btnText: 'text-slate-950'
      },
      renderMicroPreview: () => (
        <div className="p-3.5 rounded-2xl bg-emerald-50/80 dark:bg-[#062026] border border-emerald-200 dark:border-emerald-500/30 text-xs space-y-2">
          <div className="flex items-center gap-1.5 font-bold text-emerald-800 dark:text-emerald-300">
            <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Format Pesan Ramah Pasien Otomatis</span>
          </div>
          <p className="text-[11px] text-slate-600 dark:text-teal-100/75 leading-relaxed">
            Dilengkapi kop faskes/apotek, nama pasien, rincian obat, aturan pagi/malam, tanda peringatan efek samping, dan tombol langsung kirim ke chat WA tanpa simpan nomor.
          </p>
          <div className="flex gap-1.5 text-[10px] font-mono pt-1">
            <span className="px-2 py-0.5 rounded bg-emerald-200 dark:bg-emerald-900 text-emerald-900 dark:text-emerald-200 font-bold">1-Klik Salin</span>
            <span className="px-2 py-0.5 rounded bg-emerald-200 dark:bg-emerald-900 text-emerald-900 dark:text-emerald-200 font-bold">Langsung Kirim WA</span>
          </div>
        </div>
      )
    },
    {
      id: 'polypharmacy',
      tabKey: 'polypharmacy',
      moduleNumber: '06',
      shortLabel: 'Polifarmasi Beers',
      badgeTop: 'Geriatri & Lansia',
      badgeEngine: 'AGS Beers 2023 & STOPP/START v3',
      title: 'Polifarmasi Geriatri (Beers 2023)',
      description: 'Skrining otomatis obat berisiko tinggi pada lansia (≥65 tahun): antikolinergik burden, sedatif hipnotik, NSAID kronis, interaksi antikoagulan, serta pencegahan peresepan kaskade yang memicu risiko jatuh.',
      forTarget: 'Untuk: Tim Geriatri, Dokter Penyakit Dalam & Apoteker Bangsal',
      ctaText: 'Uji Polifarmasi',
      icon: HeartPulse,
      theme: {
        accent: 'indigo',
        border: 'border-indigo-300 dark:border-indigo-500/40',
        glow: 'from-indigo-500/20 via-violet-500/10 to-transparent',
        badgeBg: 'bg-indigo-600 dark:bg-indigo-500',
        badgeText: 'text-white dark:text-slate-950',
        iconBg: 'bg-indigo-100 dark:bg-indigo-950/60',
        iconColor: 'text-indigo-600 dark:text-indigo-400',
        btnGradient: 'from-indigo-500 via-purple-500 to-indigo-400',
        btnText: 'text-white'
      },
      renderMicroPreview: () => (
        <div className="space-y-2.5">
          <div className="grid grid-cols-3 gap-2 text-center text-xs font-bold">
            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#062026] text-slate-700 dark:text-teal-100 border border-slate-200 dark:border-teal-500/20">
              <span className="block font-outfit text-indigo-700 dark:text-indigo-300 font-black">Beers 2023</span>
              <span className="text-[9.5px] opacity-75 mt-0.5 block">Kriteria PIM</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#062026] text-slate-700 dark:text-teal-100 border border-slate-200 dark:border-teal-500/20">
              <span className="block font-outfit text-indigo-700 dark:text-indigo-300 font-black">STOPP/START</span>
              <span className="text-[9.5px] opacity-75 mt-0.5 block">Deprescribing</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#062026] text-slate-700 dark:text-teal-100 border border-slate-200 dark:border-teal-500/20">
              <span className="block font-outfit text-indigo-700 dark:text-indigo-300 font-black">ACB Score</span>
              <span className="text-[9.5px] opacity-75 mt-0.5 block">Antikolinergik</span>
            </div>
          </div>
          <div className="p-2 rounded-xl bg-indigo-50 dark:bg-[#0a1829] border border-indigo-200 dark:border-indigo-900/40 text-[11px] text-indigo-900 dark:text-indigo-200 flex items-center justify-between font-medium">
            <span>Target Pasien:</span>
            <span className="font-mono font-bold">Lansia Usia $\ge 65$ Tahun</span>
          </div>
        </div>
      )
    },
    {
      id: 'competency',
      tabKey: 'competency',
      moduleNumber: '07',
      shortLabel: 'UKMPPAI & OSCE',
      badgeTop: 'Persiapan Uji Kompetensi',
      badgeEngine: 'Blueprint Nasional UKMPPAI & OSCE',
      title: 'Pusat Belajar UKMPPAI & OSCE',
      description: 'Koleksi soal vignette CBT klinis 4 domain keilmuan farmasi, blueprint stasiun OSCE interaktif, rubrik penilaian resmi, serta panduan telaah resep cepat untuk mahasiswa dan calon apoteker.',
      forTarget: 'Untuk: Mahasiswa Farmasi, Calon Apoteker & Dosen Pembimbing',
      ctaText: 'Mulai Tryout Soal',
      icon: GraduationCap,
      theme: {
        accent: 'amber',
        border: 'border-amber-300 dark:border-amber-500/40',
        glow: 'from-amber-500/20 via-orange-500/10 to-transparent',
        badgeBg: 'bg-amber-600 dark:bg-amber-500',
        badgeText: 'text-slate-950 font-black',
        iconBg: 'bg-amber-100 dark:bg-amber-950/60',
        iconColor: 'text-amber-600 dark:text-amber-400',
        btnGradient: 'from-amber-400 via-orange-400 to-amber-300',
        btnText: 'text-slate-950 font-black'
      },
      renderMicroPreview: () => (
        <div className="space-y-2 text-xs">
          <div className="grid grid-cols-3 gap-2 text-center font-bold">
            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#062026] text-slate-700 dark:text-teal-100 border border-slate-200 dark:border-teal-500/20">
              <span className="block text-amber-700 dark:text-amber-300 font-black font-outfit">CBT Vignette</span>
              <span className="text-[9.5px] opacity-75 mt-0.5 block">4 Domain Utama</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#062026] text-slate-700 dark:text-teal-100 border border-slate-200 dark:border-teal-500/20">
              <span className="block text-amber-700 dark:text-amber-300 font-black font-outfit">OSCE Blueprint</span>
              <span className="text-[9.5px] opacity-75 mt-0.5 block">Rubrik Stasiun</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#062026] text-slate-700 dark:text-teal-100 border border-slate-200 dark:border-teal-500/20">
              <span className="block text-amber-700 dark:text-amber-300 font-black font-outfit">High-Yield</span>
              <span className="text-[9.5px] opacity-75 mt-0.5 block">Pembahasan Lengkap</span>
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-[#211604] border border-amber-200 dark:border-amber-900/40 text-[11px] text-amber-900 dark:text-amber-200 flex justify-between items-center font-medium">
            <span>Kelulusan Uji Kompetensi:</span>
            <span className="font-mono font-bold text-amber-700 dark:text-amber-300">Target First-Taker 100%</span>
          </div>
        </div>
      )
    },
    {
      id: 'swamedikasi',
      tabKey: 'swamedikasi',
      moduleNumber: '08',
      shortLabel: 'Swamedikasi OWA',
      badgeTop: 'Apotek & Pelayanan Swamedikasi',
      badgeEngine: 'Standar GEMA CERMAT & Permenkes OWA',
      title: 'Swamedikasi & Clinical Triage',
      description: 'Panduan pemilihan obat bebas BPOM & Obat Wajib Apotek (OWA 1-3) berbasis keluhan harian, penapisan tanda bahaya (Red Flags) kapan wajib rujuk ke dokter, dan edukasi terapi non-farmakologi tanpa antibiotik.',
      forTarget: 'Untuk: Tenaga Teknis Kefarmasian & Apoteker Pelayanan',
      ctaText: !currentUser ? 'Masuk untuk Buka Modul' : 'Buka Modul Swamedikasi',
      icon: Stethoscope,
      theme: {
        accent: 'emerald',
        border: 'border-emerald-300 dark:border-emerald-500/40',
        glow: 'from-emerald-500/20 via-teal-500/10 to-transparent',
        badgeBg: 'bg-emerald-600 dark:bg-emerald-500',
        badgeText: 'text-white dark:text-slate-950',
        iconBg: 'bg-emerald-100 dark:bg-emerald-950/60',
        iconColor: 'text-emerald-600 dark:text-emerald-400',
        btnGradient: 'from-emerald-500 via-teal-400 to-emerald-400',
        btnText: 'text-slate-950'
      },
      onAction: () => {
        if (onOpenSwamedikasiProtocol) {
          onOpenSwamedikasiProtocol('swam-demam-dewasa');
        } else {
          onSelectTab('swamedikasi');
        }
      },
      renderMicroPreview: () => (
        <div className="space-y-2 text-xs">
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50/80 dark:bg-[#062026] border border-emerald-200 dark:border-teal-500/20 font-bold">
            <span className="text-slate-800 dark:text-teal-100">8 Kategori Keluhan Terstandar</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-mono text-[11px]">BPOM &amp; OWA 1-3</span>
          </div>
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-rose-50/80 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/30 font-bold">
            <span className="text-slate-800 dark:text-teal-100">Penapisan Tanda Bahaya (Red Flags)</span>
            <span className="text-rose-600 dark:text-rose-400 font-mono text-[11px]">Kapan Rujuk Dokter</span>
          </div>
          <div className="p-2 rounded-xl bg-slate-50 dark:bg-[#062026] border border-slate-200 dark:border-teal-500/20 text-[10.5px] text-slate-600 dark:text-teal-200/75">
            Edukasi terapi non-farmakologis, pencegahan resistensi antibiotik, dan takaran sirup anak.
          </div>
        </div>
      )
    },
    {
      id: 'renal-adjuster',
      tabKey: 'renal-adjuster',
      moduleNumber: '09',
      shortLabel: 'Dosis Ginjal & Hepar',
      badgeTop: 'Farmakoterapi Organ',
      badgeEngine: 'Cockcroft-Gault, CKD-EPI & Child-Pugh',
      title: 'Kalkulator Penyesuaian Dosis Ginjal & Hepar',
      description: 'Perhitungan presisi klirens kreatinin (CrCl), estimasi LFG (eGFR CKD-EPI 2021), rekomendasi reduksi dosis antibiotik & obat nefrotoksik, serta evaluasi derajat sirosis hepar (Child-Pugh A-C & MELD).',
      forTarget: 'Untuk: Dokter Spesialis Penyakit Dalam, Apoteker Klinis & Tim Hemodialisa',
      ctaText: 'Buka Kalkulator Ginjal & Hepar',
      icon: Calculator,
      theme: {
        accent: 'cyan',
        border: 'border-cyan-300 dark:border-cyan-500/40',
        glow: 'from-cyan-500/20 via-teal-500/10 to-transparent',
        badgeBg: 'bg-cyan-600 dark:bg-cyan-500',
        badgeText: 'text-white dark:text-slate-950',
        iconBg: 'bg-cyan-100 dark:bg-cyan-950/60',
        iconColor: 'text-cyan-600 dark:text-cyan-400',
        btnGradient: 'from-cyan-500 via-teal-400 to-cyan-400',
        btnText: 'text-slate-950'
      },
      renderMicroPreview: () => (
        <div className="space-y-2 text-xs">
          <div className="p-2.5 rounded-xl bg-cyan-50/80 dark:bg-[#042028] border border-cyan-200 dark:border-cyan-500/30 flex justify-between items-center font-bold">
            <span className="text-cyan-900 dark:text-cyan-100">Klirens Ginjal (CrCl / eGFR):</span>
            <span className="font-mono text-cyan-700 dark:text-cyan-300">Stage 1 - 5 CKD</span>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#062026] border border-slate-200 dark:border-teal-500/20 flex justify-between items-center font-medium text-slate-700 dark:text-teal-200">
            <span>Evaluasi Sirosis Hepar:</span>
            <span className="font-mono font-bold text-amber-600 dark:text-amber-400">Child-Pugh A, B, C &amp; MELD</span>
          </div>
          <div className="p-2 rounded-xl bg-teal-50 dark:bg-[#062026] text-[10.5px] text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-500/20">
            Dilengkapi penyesuaian interval hemodialisa (HD/CRRT) &amp; berat badan ideal (IBW).
          </div>
        </div>
      )
    },
    {
      id: 'pediatric',
      tabKey: 'pediatric',
      moduleNumber: '10',
      shortLabel: 'Dosis Pediatrik',
      badgeTop: 'Farmasi Anak & Pediatri',
      badgeEngine: 'Clark, Young & Luas Permukaan Tubuh (BSA)',
      title: 'Kalkulator Dosis Pediatrik & Konversi Puyer',
      description: 'Penetapan dosis anak berbasis mg/kgBB dan BSA DuBois. Konversi otomatis tablet utuh ke serbuk puyer dengan penambahan zat pengisi Saccharum Lactis (SL), serta takaran sendok sirup yang presisi.',
      forTarget: 'Untuk: Dokter Anak (Sp.A), Apoteker & Asisten Apoteker',
      ctaText: 'Buka Kalkulator Pediatrik',
      icon: Sparkles,
      theme: {
        accent: 'violet',
        border: 'border-violet-300 dark:border-violet-500/40',
        glow: 'from-violet-500/20 via-purple-500/10 to-transparent',
        badgeBg: 'bg-violet-600 dark:bg-violet-500',
        badgeText: 'text-white',
        iconBg: 'bg-violet-100 dark:bg-violet-950/60',
        iconColor: 'text-violet-600 dark:text-violet-400',
        btnGradient: 'from-violet-500 via-purple-400 to-violet-400',
        btnText: 'text-white'
      },
      renderMicroPreview: () => (
        <div className="space-y-2 text-xs">
          <div className="grid grid-cols-2 gap-2 text-center font-bold">
            <div className="p-2.5 rounded-xl bg-violet-50 dark:bg-[#1b1233] text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-900/40">
              <span className="block font-outfit text-sm font-black">Dosis mg/kgBB</span>
              <span className="text-[9.5px] opacity-80 block">Koreksi BB &amp; Usia</span>
            </div>
            <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-[#1b1233] text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-900/40">
              <span className="block font-outfit text-sm font-black">Zat Pengisi SL</span>
              <span className="text-[9.5px] opacity-80 block">Takaran Puyer Pas</span>
            </div>
          </div>
          <div className="p-2 rounded-xl bg-slate-50 dark:bg-[#062026] text-[10.5px] text-slate-600 dark:text-teal-200/70 border border-slate-200 dark:border-teal-500/20">
            Peringatan otomatis bila dosis melebihi ambang batas maksimal sediaan dewasa.
          </div>
        </div>
      )
    },
    {
      id: 'drug-lab',
      tabKey: 'drug-lab',
      moduleNumber: '11',
      shortLabel: 'Interaksi Obat-Lab',
      badgeTop: 'Diagnostik & Laboratorium',
      badgeEngine: 'In Vitro & In Vivo Analyte Interference',
      title: 'Interaksi Obat dengan Uji Laboratorium',
      description: 'Mencegah misdiagnosis akibat hasil tes positif/negatif palsu yang disebabkan konsumsi obat. Meliputi biomarker Troponin, Tiroid (TSH/FT4), Kreatinin Jaffe, Glukosa darah, dan skrining urin NAPZA.',
      forTarget: 'Untuk: Dokter Patologi Klinik, Analis Lab & Apoteker RS',
      ctaText: 'Buka Skrining Obat-Lab',
      icon: Database,
      theme: {
        accent: 'sky',
        border: 'border-sky-300 dark:border-sky-500/40',
        glow: 'from-sky-500/20 via-teal-500/10 to-transparent',
        badgeBg: 'bg-sky-600 dark:bg-sky-500',
        badgeText: 'text-white dark:text-slate-950',
        iconBg: 'bg-sky-100 dark:bg-sky-950/60',
        iconColor: 'text-sky-600 dark:text-sky-400',
        btnGradient: 'from-sky-500 via-teal-400 to-sky-400',
        btnText: 'text-white dark:text-slate-950'
      },
      renderMicroPreview: () => (
        <div className="space-y-2 text-xs">
          <div className="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/30 flex justify-between items-center font-bold">
            <span className="text-rose-900 dark:text-rose-200">Biotin x Tes Troponin / Tiroid:</span>
            <span className="font-mono text-rose-600 dark:text-rose-400 text-[10.5px]">Negatif Palsu Fatal</span>
          </div>
          <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/30 flex justify-between items-center font-bold">
            <span className="text-amber-900 dark:text-amber-200">Kuinolon x Rapid Urine Narkoba:</span>
            <span className="font-mono text-amber-600 dark:text-amber-400 text-[10.5px]">Opiat Positif Palsu</span>
          </div>
        </div>
      )
    },
    {
      id: 'herb-drug',
      tabKey: 'herb-drug',
      moduleNumber: '12',
      shortLabel: 'Herbal & Jamu RI',
      badgeTop: 'Fitofarmaka & Jamu',
      badgeEngine: 'Saintifikasi Jamu Kemenkes RI',
      title: 'Interaksi Herbal & Obat Indonesia',
      description: 'Penapisan interaksi sediaan Jamu, OHT & Fitofarmaka (Kunyit, Temulawak, Sambiloto, Bawang Putih, Ginkgo, Meniran) terhadap obat dokter, risiko pendarahan bersama warfarin/aspirin, dan protokol stop pra-operasi.',
      forTarget: 'Untuk: Dokter Herbal Medik, Apoteker Komunitas & Peneliti',
      ctaText: 'Buka Modul Herb-Drug',
      icon: Leaf,
      theme: {
        accent: 'emerald',
        border: 'border-emerald-300 dark:border-emerald-500/40',
        glow: 'from-emerald-500/20 via-lime-500/10 to-transparent',
        badgeBg: 'bg-emerald-600 dark:bg-emerald-500',
        badgeText: 'text-white dark:text-slate-950',
        iconBg: 'bg-emerald-100 dark:bg-emerald-950/60',
        iconColor: 'text-emerald-600 dark:text-emerald-400',
        btnGradient: 'from-emerald-500 via-lime-400 to-emerald-400',
        btnText: 'text-slate-950'
      },
      renderMicroPreview: () => (
        <div className="space-y-2 text-xs">
          <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-[#062026] border border-emerald-200 dark:border-teal-500/20 flex justify-between items-center font-bold">
            <span className="text-emerald-900 dark:text-emerald-200">Kunyit / Bawang Putih x Antiplatelet:</span>
            <span className="text-rose-600 dark:text-rose-400 font-mono text-[10.5px]">Risiko Pendarahan</span>
          </div>
          <div className="p-2 rounded-xl bg-slate-50 dark:bg-[#062026] text-[10.5px] text-slate-600 dark:text-teal-200/70 border border-slate-200 dark:border-teal-500/20">
            Panduan lengkap waktu penghentian sediaan herbal 7 - 14 hari sebelum tindakan operasi bedah.
          </div>
        </div>
      )
    },
    {
      id: 'side-effects',
      tabKey: 'side-effects',
      moduleNumber: '13',
      shortLabel: 'MESO & Naranjo',
      badgeTop: 'Farmakovigilans RS & Apotek',
      badgeEngine: 'Algoritma Naranjo & Form Kuning BPOM',
      title: 'Pusat Analisis Efek Samping Obat (MESO)',
      description: 'Evaluasi kausalitas Kejadian Tidak Diinginkan (KTD) dengan skor Naranjo & WHO-UMC, penilaian derajat keparahan Hartwig, akumulasi toksisitas organ (Hepatotoksik/Nefrotoksik), dan generator Formulir Kuning BPOM RI.',
      forTarget: 'Untuk: Tim Keselamatan Pasien RS, Apoteker & Tim Farmakovigilans',
      ctaText: 'Buka Analisis Efek Samping',
      icon: AlertTriangle,
      theme: {
        accent: 'rose',
        border: 'border-rose-300 dark:border-rose-500/40',
        glow: 'from-rose-500/20 via-pink-500/10 to-transparent',
        badgeBg: 'bg-rose-600 dark:bg-rose-500',
        badgeText: 'text-white',
        iconBg: 'bg-rose-100 dark:bg-rose-950/60',
        iconColor: 'text-rose-600 dark:text-rose-400',
        btnGradient: 'from-rose-500 via-pink-500 to-rose-400',
        btnText: 'text-white'
      },
      renderMicroPreview: () => (
        <div className="space-y-2 text-xs">
          <div className="grid grid-cols-3 gap-2 text-center font-bold">
            <div className="p-2 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-900/40">
              <span className="block font-black font-outfit">Naranjo</span>
              <span className="text-[9px] opacity-75">Skor Kausalitas</span>
            </div>
            <div className="p-2 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-900/40">
              <span className="block font-black font-outfit">Hartwig</span>
              <span className="text-[9px] opacity-75">Tingkat Keparahan</span>
            </div>
            <div className="p-2 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-900/40">
              <span className="block font-black font-outfit">Form Kuning</span>
              <span className="text-[9px] opacity-75">BPOM RI Ready</span>
            </div>
          </div>
          <div className="p-2 rounded-xl bg-slate-50 dark:bg-[#062026] text-[10.5px] text-slate-600 dark:text-teal-200/70 border border-slate-200 dark:border-teal-500/20">
            Deteksi beban organ kumulatif (Hepatotoksik, Nefrotoksik, Kardiotoksik, dan Ototoksik).
          </div>
        </div>
      )
    },
    {
      id: 'toxicology',
      tabKey: 'toxicology',
      moduleNumber: '14',
      shortLabel: 'Toksikologi IGD',
      badgeTop: 'Gawat Darurat & Toksikologi',
      badgeEngine: 'Standar Sentra Informasi Keracunan',
      title: 'Toksikologi Klinis & Antidotum Darurat',
      description: 'Manajemen keracunan akut dan overdosis obat (parasetamol, opioid, pestisida organofosfat, sianida, digitalis). Dilengkapi protokol pemberian antidotum spesifik (N-Asetilsistein, Nalokson, Atropin) dan titrasi cairan.',
      forTarget: 'Untuk: Dokter IGD, Tim Medis Resusitasi & ICU',
      ctaText: 'Buka Modul Toksikologi',
      icon: Flame,
      theme: {
        accent: 'amber',
        border: 'border-amber-300 dark:border-amber-500/40',
        glow: 'from-amber-500/20 via-red-500/10 to-transparent',
        badgeBg: 'bg-amber-600 dark:bg-amber-500',
        badgeText: 'text-slate-950 font-black',
        iconBg: 'bg-amber-100 dark:bg-amber-950/60',
        iconColor: 'text-amber-600 dark:text-amber-400',
        btnGradient: 'from-amber-500 via-red-400 to-amber-400',
        btnText: 'text-slate-950 font-black'
      },
      renderMicroPreview: () => (
        <div className="space-y-2 text-xs">
          <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-[#201504] border border-amber-200 dark:border-amber-900/40 flex justify-between items-center font-bold">
            <span className="text-amber-900 dark:text-amber-200">Overdosis Parasetamol:</span>
            <span className="font-mono text-emerald-600 dark:text-emerald-400 text-[10.5px]">N-Asetilsistein IV/Oral</span>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#062026] border border-slate-200 dark:border-teal-500/20 flex justify-between items-center font-medium">
            <span className="text-slate-700 dark:text-teal-200">Depresi Nafas Opioid:</span>
            <span className="font-mono font-bold text-rose-600 dark:text-rose-400 text-[10.5px]">Nalokson Titrasi 0.4mg</span>
          </div>
        </div>
      )
    },
    {
      id: 'high-alert',
      tabKey: 'high-alert',
      moduleNumber: '15',
      shortLabel: 'High-Alert & LASA',
      badgeTop: 'Keselamatan Pasien RS',
      badgeEngine: 'Standar ISMP & Standar Akreditasi KARS',
      title: 'High-Alert & LASA Safety Guard',
      description: 'Pencegahan medikasi berbahaya: elektrolit konsentrat (KCl 7.46%, NaCl 3%), sitostatika kanker, antikoagulan, insulin, serta implementasi huruf kapital Tall Man untuk membedakan obat Look-Alike Sound-Alike.',
      forTarget: 'Untuk: Komite Mutu RS, Farmasi Rawat Inap & Perawat Ruangan',
      ctaText: 'Buka Modul High-Alert',
      icon: ShieldAlert,
      theme: {
        accent: 'rose',
        border: 'border-rose-300 dark:border-rose-500/40',
        glow: 'from-rose-500/20 via-orange-500/10 to-transparent',
        badgeBg: 'bg-rose-600 dark:bg-rose-500',
        badgeText: 'text-white',
        iconBg: 'bg-rose-100 dark:bg-rose-950/60',
        iconColor: 'text-rose-600 dark:text-rose-400',
        btnGradient: 'from-rose-500 via-orange-400 to-rose-400',
        btnText: 'text-white'
      },
      renderMicroPreview: () => (
        <div className="space-y-2 text-xs">
          <div className="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/40 flex justify-between items-center font-bold">
            <span className="text-rose-900 dark:text-rose-200">Tall Man Lettering:</span>
            <span className="font-mono text-rose-600 dark:text-rose-400 text-[11px]">DOPAmine vs DOBUTamine</span>
          </div>
          <div className="p-2 rounded-xl bg-slate-50 dark:bg-[#062026] text-[10.5px] text-slate-600 dark:text-teal-200/70 border border-slate-200 dark:border-teal-500/20">
            Regulasi penyimpanan ketat elektrolit konsentrat di luar instalasi farmasi.
          </div>
        </div>
      )
    },
    {
      id: 'guidelines',
      tabKey: 'guidelines',
      moduleNumber: '16',
      shortLabel: 'Panduan Terapi PNPK',
      badgeTop: 'Pedoman Pelayanan Klinis (PNPK)',
      badgeEngine: 'PNPK Resmi Kemenkes RI',
      title: 'Database Panduan Terapi PNPK Kemenkes RI',
      description: 'Kompilasi pedoman resmi Pedoman Nasional Pelayanan Kedokteran (PNPK) Kemenkes RI: Hipertensi, Diabetes Melitus, PPOK, TB Paru, Sepsis, Stroke, Onkologi, hingga Tatalaksana Syok terstandar.',
      forTarget: 'Untuk: Dokter Faskes 1 & Rumah Sakit, Apoteker & DPJP',
      ctaText: 'Buka Panduan PNPK',
      icon: BookOpen,
      theme: {
        accent: 'teal',
        border: 'border-teal-300 dark:border-teal-500/40',
        glow: 'from-teal-500/20 via-emerald-500/10 to-transparent',
        badgeBg: 'bg-teal-600 dark:bg-teal-500',
        badgeText: 'text-white dark:text-slate-950',
        iconBg: 'bg-teal-100 dark:bg-teal-950/60',
        iconColor: 'text-teal-600 dark:text-teal-400',
        btnGradient: 'from-teal-500 via-emerald-400 to-teal-400',
        btnText: 'text-slate-950'
      },
      renderMicroPreview: () => (
        <div className="space-y-2 text-xs">
          <div className="p-2.5 rounded-xl bg-teal-50 dark:bg-[#062026] border border-teal-200 dark:border-teal-500/20 flex justify-between items-center font-bold text-teal-900 dark:text-teal-200">
            <span>Koleksi Protokol PNPK Kemenkes:</span>
            <span className="font-mono text-teal-600 dark:text-teal-400">Terintegrasi EBM</span>
          </div>
          <div className="p-2 rounded-xl bg-slate-50 dark:bg-[#062026] text-[10.5px] text-slate-600 dark:text-teal-200/70 border border-slate-200 dark:border-teal-500/20">
            Lengkap dengan algoritma lini terapi, diagnosis banding, dan target keberhasilan klinis.
          </div>
        </div>
      )
    },
    {
      id: 'literature',
      tabKey: 'literature',
      moduleNumber: '17',
      shortLabel: 'Literatur EBM',
      badgeTop: 'Basis Bukti Ilmiah',
      badgeEngine: 'Level of Evidence Oxford CEBM',
      title: 'Pusat Literatur Klinis & Bukti EBM',
      description: 'Akses komprehensif kepustakaan farmakologi klinis terakreditasi, basis data Evidence-Based Medicine (EBM), ringkasan pedoman internasional (AHA, ADA, KDIGO, GOLD), serta matriks grading pembuktian ilmiah obat.',
      forTarget: 'Untuk: Residen, Apoteker Klinis, Dosen Farmasi & Peneliti',
      ctaText: 'Buka Literatur Klinis',
      icon: BookMarked,
      theme: {
        accent: 'indigo',
        border: 'border-indigo-300 dark:border-indigo-500/40',
        glow: 'from-indigo-500/20 via-blue-500/10 to-transparent',
        badgeBg: 'bg-indigo-600 dark:bg-indigo-500',
        badgeText: 'text-white',
        iconBg: 'bg-indigo-100 dark:bg-indigo-950/60',
        iconColor: 'text-indigo-600 dark:text-indigo-400',
        btnGradient: 'from-indigo-500 via-blue-400 to-indigo-400',
        btnText: 'text-white'
      },
      renderMicroPreview: () => (
        <div className="space-y-2 text-xs">
          <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-[#0d1633] border border-indigo-200 dark:border-indigo-900/40 flex justify-between items-center font-bold">
            <span className="text-indigo-900 dark:text-indigo-200">Level of Evidence Oxford:</span>
            <span className="font-mono text-indigo-600 dark:text-indigo-400">Grade A / B / C</span>
          </div>
          <div className="p-2 rounded-xl bg-slate-50 dark:bg-[#062026] text-[10.5px] text-slate-600 dark:text-teal-200/70 border border-slate-200 dark:border-teal-500/20">
            Kompilasi artikel jurnal ber-DOI dan meta-analisis uji acak terkontrol (RCT).
          </div>
        </div>
      )
    },
    {
      id: 'drugs',
      tabKey: 'drugs',
      moduleNumber: '18',
      shortLabel: 'Direktori Obat BPOM',
      badgeTop: 'Basis Data Farmakologi',
      badgeEngine: '>10.000 Obat & Registrasi CekBPOM RI',
      title: 'Direktori Monografi Obat Komprehensif',
      description: 'Direktori monografi obat terlengkap mencakup indikasi, mekanisme kerja, parameter farmakokinetik (bioavailabilitas, waktu paruh, ikatan protein), dosis aman dewasa & anak, serta nomor izin edar resmi CekBPOM RI.',
      forTarget: 'Untuk: Dokter, Apoteker, TTK & Mahasiswa Kesehatan',
      ctaText: 'Buka Direktori Obat',
      icon: Pill,
      theme: {
        accent: 'teal',
        border: 'border-teal-300 dark:border-teal-500/40',
        glow: 'from-teal-500/20 via-emerald-500/10 to-transparent',
        badgeBg: 'bg-teal-600 dark:bg-teal-500',
        badgeText: 'text-white dark:text-slate-950',
        iconBg: 'bg-teal-100 dark:bg-teal-950/60',
        iconColor: 'text-teal-600 dark:text-teal-400',
        btnGradient: 'from-teal-500 via-emerald-400 to-teal-400',
        btnText: 'text-slate-950'
      },
      renderMicroPreview: () => (
        <div className="space-y-2 text-xs">
          <div className="p-2.5 rounded-xl bg-teal-50 dark:bg-[#062026] border border-teal-200 dark:border-teal-500/20 flex justify-between items-center font-bold">
            <span className="text-teal-900 dark:text-teal-200">Katalog Monografi Resmi:</span>
            <span className="font-mono text-teal-600 dark:text-teal-400">&gt;10.000 Molekul</span>
          </div>
          <div className="p-2 rounded-xl bg-slate-50 dark:bg-[#062026] text-[10.5px] text-slate-600 dark:text-teal-200/70 border border-slate-200 dark:border-teal-500/20">
            Dilengkapi pencarian nama generik, nama dagang, indikasi, dan status NIE BPOM.
          </div>
        </div>
      )
    },
    {
      id: 'competency-vokasi',
      tabKey: 'competency-vokasi',
      moduleNumber: '19',
      shortLabel: 'UKTVF Vokasi D3',
      badgeTop: 'Uji Kompetensi Tenaga Vokasi',
      badgeEngine: 'Standar Nasional APDFI 2024',
      title: 'Pusat Belajar UKTVF Tenaga Vokasi Farmasi',
      description: 'Pusat simulasi tryout dan bank soal CBT khusus Tenaga Teknis Kefarmasian (TTK): peracikan sediaan non-steril, pengelolaan BMHP/alkes, evaluasi mutu fisik sediaan, dan etika dispensing apotek berstandar APDFI.',
      forTarget: 'Untuk: Mahasiswa D3 Farmasi & Calon Tenaga Teknis Kefarmasian',
      ctaText: 'Buka Modul Vokasi Farmasi',
      icon: GraduationCap,
      theme: {
        accent: 'amber',
        border: 'border-amber-300 dark:border-amber-500/40',
        glow: 'from-amber-500/20 via-orange-500/10 to-transparent',
        badgeBg: 'bg-amber-600 dark:bg-amber-500',
        badgeText: 'text-slate-950 font-black',
        iconBg: 'bg-amber-100 dark:bg-amber-950/60',
        iconColor: 'text-amber-600 dark:text-amber-400',
        btnGradient: 'from-amber-400 via-orange-400 to-amber-300',
        btnText: 'text-slate-950 font-black'
      },
      renderMicroPreview: () => (
        <div className="space-y-2 text-xs">
          <div className="grid grid-cols-2 gap-2 text-center font-bold">
            <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-[#201504] text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-900/40">
              <span className="block font-black font-outfit">240 Bank Soal</span>
              <span className="text-[9.5px] opacity-75 block">Kasus Vokasi Autentik</span>
            </div>
            <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-[#201504] text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-900/40">
              <span className="block font-black font-outfit">Tryout 180 Menit</span>
              <span className="text-[9.5px] opacity-75 block">Standar APDFI</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'sop',
      tabKey: 'sop',
      moduleNumber: '20',
      shortLabel: 'SOP Pelayanan',
      badgeTop: 'Tata Kelola Mutu & Akreditasi',
      badgeEngine: 'Permenkes Pelayanan Kefarmasian',
      title: 'Standar Operasional Prosedur (SOP) Farmasi',
      description: 'Template SOP resmi pelayanan kefarmasian di apotek dan klinik: skrining resep administratif/klinis, prosedur penyerahan obat (dispensing), penanganan obat kedaluwarsa, dan tata kelola narkotika/psikotropika.',
      forTarget: 'Untuk: Pemilik Sarana Apotek (PSA), Apoteker Pengelola (APA) & Klinik',
      ctaText: 'Buka Kumpulan SOP Farmasi',
      icon: ClipboardList,
      theme: {
        accent: 'teal',
        border: 'border-teal-300 dark:border-teal-500/40',
        glow: 'from-teal-500/20 via-emerald-500/10 to-transparent',
        badgeBg: 'bg-teal-600 dark:bg-teal-500',
        badgeText: 'text-white dark:text-slate-950',
        iconBg: 'bg-teal-100 dark:bg-teal-950/60',
        iconColor: 'text-teal-600 dark:text-teal-400',
        btnGradient: 'from-teal-500 via-emerald-400 to-teal-400',
        btnText: 'text-slate-950'
      },
      renderMicroPreview: () => (
        <div className="space-y-2 text-xs">
          <div className="p-2.5 rounded-xl bg-teal-50 dark:bg-[#062026] border border-teal-200 dark:border-teal-500/20 flex justify-between items-center font-bold text-teal-900 dark:text-teal-200">
            <span>Format SOP Resmi:</span>
            <span className="font-mono text-teal-600 dark:text-teal-400">Siap Cetak &amp; Akreditasi</span>
          </div>
          <div className="p-2 rounded-xl bg-slate-50 dark:bg-[#062026] text-[10.5px] text-slate-600 dark:text-teal-200/70 border border-slate-200 dark:border-teal-500/20">
            Meliputi alur skrining resep, penyimpanan obat bersuhu dingin, dan konseling PIO.
          </div>
        </div>
      )
    },
    {
      id: 'regulations',
      tabKey: 'regulations',
      moduleNumber: '21',
      shortLabel: 'Regulasi Farmasi RI',
      badgeTop: 'Aspek Legalitas & Hukum',
      badgeEngine: 'UU Kesehatan No. 17/2023 & BPOM',
      title: 'Database Regulasi & Standar Hukum Kefarmasian',
      description: 'Kompilasi undang-undang dan peraturan pemerintah bidang kefarmasian: UU Kesehatan No. 17/2023, Permenkes Apotek, regulasi izin edar BPOM, ketentuan STRA/SIP, dan panduan akreditasi faskes terkini.',
      forTarget: 'Untuk: Apoteker Penanggung Jawab, Pengurus IAI & Tim Legal Kesehatan',
      ctaText: 'Buka Database Regulasi',
      icon: Scale,
      theme: {
        accent: 'sky',
        border: 'border-sky-300 dark:border-sky-500/40',
        glow: 'from-sky-500/20 via-indigo-500/10 to-transparent',
        badgeBg: 'bg-sky-600 dark:bg-sky-500',
        badgeText: 'text-white dark:text-slate-950',
        iconBg: 'bg-sky-100 dark:bg-sky-950/60',
        iconColor: 'text-sky-600 dark:text-sky-400',
        btnGradient: 'from-sky-500 via-indigo-400 to-sky-400',
        btnText: 'text-white dark:text-slate-950'
      },
      renderMicroPreview: () => (
        <div className="space-y-2 text-xs">
          <div className="p-2.5 rounded-xl bg-sky-50 dark:bg-[#062026] border border-sky-200 dark:border-sky-500/20 flex justify-between items-center font-bold text-sky-900 dark:text-sky-200">
            <span>Koleksi Hukum Terpadu:</span>
            <span className="font-mono text-sky-600 dark:text-sky-400">UU 17/2023 &amp; Permenkes</span>
          </div>
          <div className="p-2 rounded-xl bg-slate-50 dark:bg-[#062026] text-[10.5px] text-slate-600 dark:text-teal-200/70 border border-slate-200 dark:border-teal-500/20">
            Panduan hukum komprehensif terkait sanksi, perizinan, dan batas wewenang klinis.
          </div>
        </div>
      )
    },
    {
      id: 'usage',
      tabKey: 'usage',
      moduleNumber: '22',
      shortLabel: 'Cara Pakai Khusus',
      badgeTop: 'Konseling Pasien & Edukasi',
      badgeEngine: 'Teknik Pemakaian Alat Medis Benar',
      title: 'Panduan Penggunaan Alat & Sediaan Khusus',
      description: 'Panduan edukasi step-by-step pemakaian bentuk sediaan khusus: Metered Dose Inhaler (MDI), Turbuhaler/Diskus, Pen Insulin, Suppositoria, Tetes Telinga/Mata, dan Enema untuk mencegah kegagalan terapi akibat kesalahan teknik.',
      forTarget: 'Untuk: Apoteker Konseling, Perawat Edukasi & Edukasi Pasien Mandiri',
      ctaText: 'Buka Panduan Cara Pakai',
      icon: HelpCircle,
      theme: {
        accent: 'emerald',
        border: 'border-emerald-300 dark:border-emerald-500/40',
        glow: 'from-emerald-500/20 via-teal-500/10 to-transparent',
        badgeBg: 'bg-emerald-600 dark:bg-emerald-500',
        badgeText: 'text-white dark:text-slate-950',
        iconBg: 'bg-emerald-100 dark:bg-emerald-950/60',
        iconColor: 'text-emerald-600 dark:text-emerald-400',
        btnGradient: 'from-emerald-500 via-teal-400 to-emerald-400',
        btnText: 'text-slate-950'
      },
      renderMicroPreview: () => (
        <div className="space-y-2 text-xs">
          <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-[#062026] border border-emerald-200 dark:border-teal-500/20 flex justify-between items-center font-bold text-emerald-900 dark:text-emerald-200">
            <span>Teknik Inhaler &amp; Pen Insulin:</span>
            <span className="font-mono text-emerald-600 dark:text-emerald-400">Step-by-Step Rinci</span>
          </div>
          <div className="p-2 rounded-xl bg-slate-50 dark:bg-[#062026] text-[10.5px] text-slate-600 dark:text-teal-200/70 border border-slate-200 dark:border-teal-500/20">
            Lengkap dengan instruksi penanganan jika lupa dosis dan penyimpanan suhu dingin.
          </div>
        </div>
      )
    },
    {
      id: 'drug-notes',
      tabKey: 'drug-notes',
      moduleNumber: '23',
      shortLabel: 'Drug Notes & Hafalan',
      badgeTop: 'Modul Hafalan Cepat Apoteker',
      badgeEngine: 'Metode Jembatan Keledai (Mnemonics)',
      title: 'Drug Notes: Jembatan Keledai & Hafalan Obat Cepat',
      description: 'Dossier hafalan cerdas mahasiswa & klinisi farmasi: Al-MaSi, ABCD Antihipertensi, OAT R-I-P-E-S, PPI vs H2RA, antidotum toksikologi, serta tabel komparasi dan mode flashcard uji daya ingat.',
      forTarget: 'Untuk: Mahasiswa Farmasi, Calon Apoteker, Peserta UKMPPAI & Praktisi',
      ctaText: 'Buka Drug Notes & Flashcard',
      icon: BookOpen,
      theme: {
        accent: 'amber',
        border: 'border-amber-300 dark:border-amber-500/40',
        glow: 'from-amber-500/20 via-orange-500/10 to-transparent',
        badgeBg: 'bg-amber-500 dark:bg-amber-400',
        badgeText: 'text-slate-950 font-black',
        iconBg: 'bg-amber-100 dark:bg-amber-950/60',
        iconColor: 'text-amber-600 dark:text-amber-400',
        btnGradient: 'from-amber-500 via-orange-500 to-amber-400',
        btnText: 'text-slate-950 font-black'
      },
      renderMicroPreview: () => (
        <div className="space-y-2 text-xs">
          <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-[#201504] border border-amber-200 dark:border-amber-900/40 flex justify-between items-center font-bold text-amber-900 dark:text-amber-300">
            <span>Metode Suku Kata Emas:</span>
            <span className="font-mono text-amber-600 dark:text-amber-400">Al-MaSi • R-I-P-E-S</span>
          </div>
          <div className="p-2 rounded-xl bg-slate-50 dark:bg-[#062026] text-[10.5px] text-slate-600 dark:text-teal-200/70 border border-slate-200 dark:border-teal-500/20">
            Disertai rasionalitas formulasi, peringatan interaksi kelasi, dan kuis uji hafalan interaktif.
          </div>
        </div>
      )
    },
    {
      id: 'education-generator',
      tabKey: 'education-generator',
      moduleNumber: '24',
      shortLabel: 'Generator Edukasi AI',
      badgeTop: 'Promosi Kesehatan & PIO Cerdas',
      badgeEngine: 'Master AI Prompt • Multi-Channel Output',
      title: 'Generator Edukasi Pasien AI (AI Prompt PIO)',
      description: 'Asisten cerdas perancang materi edukasi pasien multi-format: WhatsApp broadcast ramah awam, infografis carousel Instagram, naskah video TikTok/Reels edukatif, hingga draf leaflet obat siap cetak dengan penyesuaian tone empati.',
      forTarget: 'Untuk: Apoteker Komunitas, Tim Promkes RS & Edukator Farmasi',
      ctaText: 'Buka Generator Edukasi AI',
      icon: Wand2,
      theme: {
        accent: 'teal',
        border: 'border-teal-300 dark:border-teal-500/40',
        glow: 'from-teal-500/20 via-cyan-500/10 to-transparent',
        badgeBg: 'bg-teal-600 dark:bg-teal-500',
        badgeText: 'text-white dark:text-slate-950 font-bold',
        iconBg: 'bg-teal-100 dark:bg-teal-950/60',
        iconColor: 'text-teal-600 dark:text-teal-400',
        btnGradient: 'from-teal-500 via-cyan-400 to-teal-400',
        btnText: 'text-slate-950 font-bold'
      },
      renderMicroPreview: () => (
        <div className="space-y-2.5 text-xs">
          <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-bold">
            <div className="p-2.5 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800/40 text-teal-800 dark:text-teal-200">
              <span className="block font-black">WhatsApp</span>
              <span className="text-[9.5px] opacity-75">Broadcast Ramah</span>
            </div>
            <div className="p-2.5 rounded-xl bg-pink-50 dark:bg-pink-950/40 border border-pink-200 dark:border-pink-800/40 text-pink-800 dark:text-pink-200">
              <span className="block font-black">Instagram</span>
              <span className="text-[9.5px] opacity-75">Slide Carousel</span>
            </div>
            <div className="p-2.5 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/40 text-cyan-800 dark:text-cyan-200">
              <span className="block font-black">TikTok / Reels</span>
              <span className="text-[9.5px] opacity-75">Script 60 Detik</span>
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#062026] text-[10.5px] text-slate-600 dark:text-teal-100/70 border border-slate-200 dark:border-teal-500/20 flex items-center justify-between">
            <span className="font-semibold">Format Siap Pakai:</span>
            <span className="font-mono font-bold text-teal-600 dark:text-teal-400">1-Klik Salin Prompt ke ChatGPT / Gemini</span>
          </div>
        </div>
      )
    },
    {
      id: 'antimicrobial-stewardship',
      tabKey: 'antimicrobial-stewardship',
      moduleNumber: '25',
      shortLabel: 'Stewardship Antibiotik PPRA',
      badgeTop: 'Pengendalian Resistensi Rumah Sakit',
      badgeEngine: 'WHO AWaRe 2024 • Gyssens Flowchart • CLSI PK/PD',
      title: 'Stewardship Antibiotik & Evaluasi PPRA Rumah Sakit',
      description: 'Platform kendali mutu terapi antibiotik komprehensif: klasifikasi WHO AWaRe 2024 (Access, Watch, Reserve), evaluasi kualitatif alur Gyssens kategori 0-VI, panduan optimasi farmakokinetik/farmakodinamik (PK/PD), antibiogram kuman, dan kalkulator kuantitatif DDD/100 Patient-Days.',
      forTarget: 'Untuk: Tim PPRA RS, Komite Farmasi & Terapi (KFT), Apoteker Klinis & DPJP',
      ctaText: 'Buka Modul PPRA Antibiotik',
      icon: ShieldCheck,
      theme: {
        accent: 'emerald',
        border: 'border-emerald-300 dark:border-emerald-500/40',
        glow: 'from-emerald-500/20 via-teal-500/10 to-transparent',
        badgeBg: 'bg-emerald-600 dark:bg-emerald-500',
        badgeText: 'text-white dark:text-slate-950 font-bold',
        iconBg: 'bg-emerald-100 dark:bg-emerald-950/60',
        iconColor: 'text-emerald-600 dark:text-emerald-400',
        btnGradient: 'from-emerald-500 via-teal-400 to-emerald-400',
        btnText: 'text-slate-950 font-bold'
      },
      renderMicroPreview: () => (
        <div className="space-y-2.5 text-xs">
          <div className="grid grid-cols-3 gap-2 text-center text-xs font-black">
            <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/40">
              <span className="block text-sm font-outfit">ACCESS</span>
              <span className="text-[9.5px] font-medium opacity-80">Lini Pertama</span>
            </div>
            <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/40">
              <span className="block text-sm font-outfit">WATCH</span>
              <span className="text-[9.5px] font-medium opacity-80">Prioritas Pantau</span>
            </div>
            <div className="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800/40">
              <span className="block text-sm font-outfit">RESERVE</span>
              <span className="text-[9.5px] font-medium opacity-80">Benteng Terakhir</span>
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#062026] text-[10.5px] text-slate-600 dark:text-emerald-100/70 border border-slate-200 dark:border-emerald-500/20 flex items-center justify-between">
            <span className="font-semibold">Standar Penilaian Mutu:</span>
            <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">Gyssens Kategori 0 (Tepat &amp; Rasional)</span>
          </div>
        </div>
      )
    },
    {
      id: 'latin-terms',
      tabKey: 'latin-terms',
      moduleNumber: '26',
      shortLabel: 'Singkatan Latin Resep',
      badgeTop: 'Dispensing & Skrining Resep',
      badgeEngine: 'Parser Signa Cerdas • Skrining ISMP Error-Prone',
      title: 'Kamus & Penerjemah Singkatan Latin Resep Dokter (Signa)',
      description: 'Penerjemah signa resep otomatis ke instruksi minum obat bahasa Indonesia, kamus istilah latin Farmakope terlengkap, penandaan singkatan berisiko fatal salah baca (ISMP safety alerts), serta mode flashcard hafalan signa.',
      forTarget: 'Untuk: Apoteker, TTK, Apotek Komunitas, Depo Rawat Jalan & Mahasiswa',
      ctaText: 'Buka Kamus Singkatan Latin',
      icon: Languages,
      theme: {
        accent: 'cyan',
        border: 'border-cyan-300 dark:border-cyan-500/40',
        glow: 'from-cyan-500/20 via-teal-500/10 to-transparent',
        badgeBg: 'bg-cyan-600 dark:bg-cyan-500',
        badgeText: 'text-white dark:text-slate-950 font-bold',
        iconBg: 'bg-cyan-100 dark:bg-cyan-950/60',
        iconColor: 'text-cyan-600 dark:text-cyan-400',
        btnGradient: 'from-cyan-500 via-teal-400 to-cyan-400',
        btnText: 'text-slate-950 font-bold'
      },
      renderMicroPreview: () => (
        <div className="space-y-2.5 text-xs">
          <div className="p-2.5 rounded-xl bg-cyan-50/80 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-800/40">
            <div className="flex justify-between items-center text-[10.5px] font-mono text-cyan-800 dark:text-cyan-200 pb-1 border-b border-cyan-200/50 dark:border-cyan-800/30">
              <span className="font-bold">Input Resep:</span>
              <span className="font-bold">s. 3 d.d. pulv I d.t.d. p.c. p.r.n.</span>
            </div>
            <div className="pt-1 text-[11px] text-teal-900 dark:text-teal-200 font-semibold flex items-center gap-1.5">
              <span className="text-cyan-600 dark:text-cyan-400 font-bold">Arti:</span>
              <span>Sehari 3 x 1 bungkus serbuk bagi sesudah makan bila perlu</span>
            </div>
          </div>
          <div className="p-2 rounded-xl bg-slate-50 dark:bg-[#062026] text-[10.5px] text-slate-600 dark:text-cyan-100/70 border border-slate-200 dark:border-cyan-500/20 flex items-center justify-between">
            <span className="font-semibold">Fitur Proteksi ISMP:</span>
            <span className="text-rose-600 dark:text-rose-400 font-bold">Peringatan Singkatan Berbahaya</span>
          </div>
        </div>
      )
    }
  ];

  const currentModule = modules[currentIndex];

  // Navigasi Next & Prev
  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % modules.length);
    setProgress(0);
  }, [modules.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + modules.length) % modules.length);
    setProgress(0);
  }, [modules.length]);

  const handleSelectModule = (index: number) => {
    setCurrentIndex(index % modules.length);
    setProgress(0);
  };

  // Timer auto-play
  useEffect(() => {
    if (!isPlaying || isHovered || isMarqueeHovered) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + (INTERVAL_STEP / SLIDE_DURATION) * 100;
      });
    }, INTERVAL_STEP);

    return () => clearInterval(interval);
  }, [isPlaying, isHovered, isMarqueeHovered, handleNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  return (
    <div className="w-full max-w-5xl mx-auto space-y-5">
      
      {/* CSS Animasi Marquee Berjalan Halus (Infinite Loop) */}
      <style>{`
        @keyframes marqueeTrack {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-running-marquee {
          display: flex;
          width: max-content;
          animation: marqueeTrack 70s linear infinite;
        }
        .animate-running-marquee:hover,
        .animate-running-marquee:focus-within {
          animation-play-state: paused !important;
        }
      `}</style>

      {/* 1. Quick Pill Selector Tabs (BAGIAN YANG BERGERAK / RUNNING MARQUEE TRACK) */}
      <div 
        className="relative group/marquee"
        onMouseEnter={() => setIsMarqueeHovered(true)}
        onMouseLeave={() => setIsMarqueeHovered(false)}
      >
        {/* Label Indikator Running Ticker */}
        <div className="flex items-center justify-between px-2 mb-2 text-[11px] font-bold text-slate-500 dark:text-teal-300/80">
          <div className="flex items-center gap-1.5 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-teal-700 dark:text-teal-300 font-black tracking-wide uppercase text-[10px]">
              26 Modul Klinis Terpadu • Bergerak Otomatis
            </span>
          </div>
          <span className="text-[10.5px] font-medium text-slate-400 dark:text-teal-100/60 hidden sm:inline">
            Arahkan mouse / sentuh untuk menjeda &amp; klik modul mana saja
          </span>
        </div>

        {/* Marquee Viewport dengan Fade Mask Kiri & Kanan */}
        <div 
          className="overflow-hidden py-1 relative [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]"
        >
          {/* Double array untuk seamless infinite loop tanpa jeda */}
          <div className="animate-running-marquee flex gap-2.5 items-center">
            {[...modules, ...modules].map((mod, idx) => {
              const Icon = mod.icon;
              const realIndex = idx % modules.length;
              const isActive = realIndex === currentIndex;
              return (
                <button
                  key={`${mod.id}-${idx}`}
                  type="button"
                  onClick={() => handleSelectModule(realIndex)}
                  className={`group px-3.5 py-2.5 rounded-2xl border text-xs font-bold transition-all duration-300 flex items-center gap-2.5 shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-white dark:bg-[#072a34] border-teal-500 dark:border-teal-400 text-teal-900 dark:text-white shadow-lg ring-2 ring-teal-500/30 scale-[1.04]'
                      : 'bg-white/80 dark:bg-[#03151b]/80 border-slate-200/90 dark:border-teal-500/25 text-slate-600 dark:text-teal-200/75 hover:bg-white dark:hover:bg-[#06242c] hover:border-teal-400/50 hover:scale-[1.02]'
                  }`}
                >
                  <div className={`p-1.5 rounded-xl transition-all ${
                    isActive 
                      ? 'bg-teal-500 text-white dark:text-slate-950 shadow-xs' 
                      : 'bg-slate-100 dark:bg-teal-950/60 text-slate-500 dark:text-teal-400 group-hover:text-teal-600'
                  }`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-left">
                    <div className="text-[9.5px] font-mono font-black text-slate-400 dark:text-teal-400/70 leading-none">
                      #{mod.moduleNumber}
                    </div>
                    <div className="truncate max-w-[130px] font-outfit text-xs font-extrabold mt-0.5">
                      {mod.shortLabel}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 2. Main Spotlight Card (Fokus 1 Kolom Penuh) */}
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative bg-white dark:bg-[#04151a]/95 rounded-3xl border-2 border-slate-200/90 dark:border-teal-500/30 shadow-2xl shadow-slate-200/50 dark:shadow-[0_25px_60px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-500"
      >
        {/* Dynamic Ambient Background Glow */}
        <div className={`absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br ${currentModule.theme.glow} rounded-full blur-3xl pointer-events-none transition-all duration-700`} />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-teal-500/10 dark:bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Top Control Bar: Progress, Counter & Play/Pause */}
        <div className="px-6 pt-5 pb-3 border-b border-slate-100 dark:border-teal-500/20 flex flex-wrap items-center justify-between gap-3 relative z-10">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-[#062026] text-slate-700 dark:text-teal-300 text-xs font-mono font-black border border-slate-200 dark:border-teal-500/30 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              <span>Modul {currentModule.moduleNumber} dari {modules.length}</span>
            </span>
            <span className="hidden sm:inline text-xs text-slate-400 dark:text-teal-200/50">•</span>
            <span className="hidden sm:inline text-xs font-medium text-slate-500 dark:text-teal-200/70">
              {isHovered || isMarqueeHovered ? '(Dijeda saat disentuh/hover)' : isPlaying ? 'Auto-slide aktif' : 'Auto-slide dijeda'}
            </span>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              title={isPlaying ? 'Jeda otomatis' : 'Jalankan otomatis'}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-[#062026] dark:hover:bg-[#0a2f38] text-slate-600 dark:text-teal-300 transition-colors cursor-pointer"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
            <div className="h-4 w-px bg-slate-200 dark:bg-teal-500/30 mx-0.5" />
            <button
              type="button"
              onClick={handlePrev}
              title="Modul sebelumnya (Panah Kiri)"
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-[#062026] dark:hover:bg-[#0a2f38] text-slate-600 dark:text-teal-300 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              title="Modul berikutnya (Panah Kanan)"
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-[#062026] dark:hover:bg-[#0a2f38] text-slate-600 dark:text-teal-300 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Progress Bar Timer */}
        <div className="w-full bg-slate-100 dark:bg-slate-800/50 h-1 relative overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-teal-500 to-emerald-400 transition-all duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Card Content (2-Column Desktop Grid or Stacked Mobile) */}
        <div className="p-6 sm:p-8 lg:p-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Col (Span 7): Module Identity & Info */}
            <div className="lg:col-span-7 space-y-4 text-left">
              
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className={`px-3 py-1 rounded-full ${currentModule.theme.badgeBg} ${currentModule.theme.badgeText} text-[10px] font-black uppercase tracking-wider font-outfit shadow-xs`}>
                  {currentModule.badgeTop}
                </span>
                <span className="text-[11px] font-mono font-bold text-teal-700 dark:text-teal-300 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>{currentModule.badgeEngine}</span>
                </span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#082a24] dark:text-white font-outfit tracking-tight leading-tight">
                  {currentModule.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-teal-100/80 mt-2.5 leading-relaxed">
                  {currentModule.description}
                </p>
              </div>

              {/* Target Users */}
              <div className="flex items-center gap-2 pt-2 text-xs font-bold text-slate-500 dark:text-teal-300/80">
                <Building2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                <span>{currentModule.forTarget}</span>
              </div>

              {/* CTA Action Button */}
              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => {
                    if (currentModule.onAction) {
                      currentModule.onAction();
                    } else {
                      onSelectTab(currentModule.tabKey);
                    }
                  }}
                  className={`w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r ${currentModule.theme.btnGradient} ${currentModule.theme.btnText} font-black text-sm shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer font-outfit`}
                >
                  {currentModule.id === 'swamedikasi' && !currentUser && <Lock className="w-4 h-4 mr-0.5 opacity-80" />}
                  <span>{currentModule.ctaText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right Col (Span 5): Micro-Preview Widget Card */}
            <div className="lg:col-span-5">
              <div className="p-5 sm:p-6 rounded-3xl bg-slate-50/90 dark:bg-[#020d11]/90 border border-slate-200/90 dark:border-teal-500/30 shadow-inner space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 dark:border-teal-500/20">
                  <div className="flex items-center gap-2">
                    <div className={`p-2 rounded-xl ${currentModule.theme.iconBg} ${currentModule.theme.iconColor}`}>
                      <currentModule.icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-extrabold text-[#082a24] dark:text-white font-outfit">
                      Live Micro-Preview
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 font-bold border border-teal-200 dark:border-teal-800">
                    Sistem Klinis
                  </span>
                </div>

                {/* Render the specific preview widget */}
                {currentModule.renderMicroPreview()}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Pagination Dots */}
        <div className="px-6 py-4 bg-slate-50/70 dark:bg-[#03151b]/80 border-t border-slate-100 dark:border-teal-500/20 flex flex-wrap items-center justify-between gap-3 relative z-10">
          <div className="text-xs font-medium text-slate-500 dark:text-teal-200/60">
            Tekan <kbd className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-slate-200 dark:bg-teal-950 text-slate-700 dark:text-teal-300 border border-slate-300 dark:border-teal-800">←</kbd> / <kbd className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-slate-200 dark:bg-teal-950 text-slate-700 dark:text-teal-300 border border-slate-300 dark:border-teal-800">→</kbd> di keyboard untuk berganti modul
          </div>

          <div className="flex items-center gap-1 overflow-x-auto max-w-full py-0.5">
            {modules.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelectModule(idx)}
                className={`transition-all duration-300 cursor-pointer ${
                  idx === currentIndex
                    ? 'w-5 h-2 rounded-full bg-teal-500'
                    : 'w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-teal-900/80 hover:bg-slate-400 dark:hover:bg-teal-700'
                }`}
                aria-label={`Pilih modul ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
