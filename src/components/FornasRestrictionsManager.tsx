import React, { useState, useMemo } from 'react';
import {
  Building2,
  Search,
  ShieldCheck,
  AlertTriangle,
  FileText,
  Filter,
  CheckCircle2,
  XCircle,
  Clock,
  UserCheck,
  ExternalLink,
  Printer,
  ChevronRight,
  RotateCcw,
  Sparkles,
  Info,
  Layers,
  Hospital,
  Stethoscope,
  Pill,
  BookOpen,
  Check
} from 'lucide-react';
import { Drug, FornasTier, FornasRestrictionInfo } from '../types';
import {
  ALL_FORNAS_RESTRICTION_ITEMS,
  FornasItemWithKey,
  FORNAS_RESTRICTIONS_DATABASE,
  buildUnifiedFornasCatalog
} from '../data/fornasRestrictionsData';
import { FloatingPillsBackground } from './FloatingPillsBackground';
import { EvidenceSourceBadge } from './EvidenceSourceBadge';

interface FornasRestrictionsManagerProps {
  drugs: Drug[];
  onSelectDrug?: (drug: Drug) => void;
  onSelectTab?: (tab: string) => void;
  onOpenChangelogModal?: () => void;
}

type FaskesFilterType = 'all' | 'faskes-1' | 'faskes-2-3' | 'restricted' | 'prb';

interface SimulatorState {
  drugKey: string;
  faskesLevel: '1' | '2' | '3';
  prescriberRole: 'umum' | 'spesialis' | 'subspesialis';
  quantityInput: number;
  durationDays: number;
  indicationText: string;
}

export const FornasRestrictionsManager: React.FC<FornasRestrictionsManagerProps> = ({
  drugs,
  onSelectDrug,
  onSelectTab,
  onOpenChangelogModal
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFaskesFilter, setActiveFaskesFilter] = useState<FaskesFilterType>('all');
  const [selectedTherapeuticClass, setSelectedTherapeuticClass] = useState<string>('all');
  const [showSimulator, setShowSimulator] = useState(false);

  // Prescription Screening Simulator State
  const [simulator, setSimulator] = useState<SimulatorState>({
    drugKey: 'atorvastatin',
    faskesLevel: '2',
    prescriberRole: 'spesialis',
    quantityInput: 30,
    durationDays: 30,
    indicationText: 'Dislipidemia pasca-PCI stenting (Target LDL < 70 mg/dL)'
  });

  // Unified FORNAS catalog combining curated restriction rules + master drugs
  const allCatalogItems = useMemo(() => {
    return buildUnifiedFornasCatalog(drugs);
  }, [drugs]);

  // Calculate unique therapeutic classes from the unified catalog
  const therapeuticClasses = useMemo(() => {
    const set = new Set<string>();
    allCatalogItems.forEach(item => {
      if (item.therapeuticClass) set.add(item.therapeuticClass);
    });
    return Array.from(set).sort();
  }, [allCatalogItems]);

  // Filtered dataset
  const filteredItems = useMemo(() => {
    return allCatalogItems.filter(item => {
      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesKey = item.key.toLowerCase().includes(q);
        const matchesNote = item.restrictionNote.toLowerCase().includes(q);
        const matchesLimit = (item.maxPrescriptionLimit || '').toLowerCase().includes(q);
        const matchesForm = (item.formAndStrength || '').toLowerCase().includes(q);
        const matchesDoc = (item.prescriberCompetency || '').toLowerCase().includes(q);
        const matchesClass = (item.therapeuticClass || '').toLowerCase().includes(q);
        if (!matchesName && !matchesKey && !matchesNote && !matchesLimit && !matchesForm && !matchesDoc && !matchesClass) {
          return false;
        }
      }

      // Faskes Level Filter
      if (activeFaskesFilter === 'faskes-1') {
        if (!item.tier.includes('1')) return false;
      } else if (activeFaskesFilter === 'faskes-2-3') {
        // Only hospital (not available in Faskes 1 FKTP)
        if (item.tier.includes('1')) return false;
      } else if (activeFaskesFilter === 'restricted') {
        const l = (item.maxPrescriptionLimit || '').toLowerCase();
        if (
          !l ||
          l.includes('sesuai ketentuan') ||
          l.includes('sesuai kebutuhan') ||
          l.includes('sesuai indikasi')
        ) {
          return false;
        }
      } else if (activeFaskesFilter === 'prb') {
        if (!item.isPrb) return false;
      }

      // Therapeutic Class Filter
      if (selectedTherapeuticClass !== 'all') {
        if (item.therapeuticClass !== selectedTherapeuticClass) return false;
      }

      return true;
    });
  }, [allCatalogItems, searchQuery, activeFaskesFilter, selectedTherapeuticClass]);

  // High-Level KPI Stats with accurate differentiation
  const stats = useMemo(() => {
    const total = allCatalogItems.length;
    const faskes1Count = allCatalogItems.filter(i => i.tier.includes('1')).length;
    // Hospital-only drugs (strictly Faskes 2 & 3, not allowed in Faskes 1)
    const hospitalOnlyCount = allCatalogItems.filter(i => !i.tier.includes('1') && (i.tier.includes('2') || i.tier.includes('3'))).length;
    const prbCount = allCatalogItems.filter(i => i.isPrb).length;
    const strictLimitCount = allCatalogItems.filter(i => {
      const l = (i.maxPrescriptionLimit || '').toLowerCase();
      return (
        (l.includes('maksimal') || l.includes('maks') || l.includes('hari') || l.includes('bulan') || l.includes('ampul') || l.includes('tablet')) &&
        !l.includes('sesuai ketentuan') &&
        !l.includes('sesuai kebutuhan')
      );
    }).length;

    return { total, faskes1Count, hospitalOnlyCount, prbCount, strictLimitCount };
  }, [allCatalogItems]);

  // Simulator Compliance Calculation
  const simulationAuditResult = useMemo(() => {
    const drugData = FORNAS_RESTRICTIONS_DATABASE[simulator.drugKey] ||
                     allCatalogItems.find(i => i.key === simulator.drugKey);
    if (!drugData) {
      return {
        status: 'warning',
        badgeText: 'Data Belum Tersedia',
        reasons: ['Obat belum terindeks dalam simulator.'],
        recommendation: 'Periksa manual regulasi Fornas.'
      };
    }

    const reasons: string[] = [];
    let status: 'valid' | 'warning' | 'invalid' = 'valid';

    // Check 1: Faskes Tier Matching
    const faskesNumber = simulator.faskesLevel;
    const tierAllowed = drugData.tier.includes(faskesNumber);
    if (!tierAllowed) {
      status = 'invalid';
      reasons.push(`Faskes ${faskesNumber} TIDAK memiliki kewenangan penjaminan obat ini. Obat ini hanya dijamin untuk: ${drugData.tierLabel}.`);
    }

    // Check 2: Prescriber Competency
    const compText = (drugData.prescriberCompetency || '').toLowerCase();
    const isSpecialistRequired = compText.includes('spesialis') || compText.includes('konsultan') || compText.includes('dpjp');
    const isDoctorUmumAllowed = compText.includes('dokter umum') || drugData.tier.includes('1');

    if (simulator.prescriberRole === 'umum' && isSpecialistRequired && !isDoctorUmumAllowed) {
      status = 'invalid';
      reasons.push(`Resep ditulis Dokter Umum, padahal Fornas mensyaratkan kewenangan: ${drugData.prescriberCompetency}. Berpotensi dispute/klaim pending BPJS.`);
    }

    // Check 3: Maximum Prescription Limit
    const maxLimitText = (drugData.maxPrescriptionLimit || '').toLowerCase();
    if (maxLimitText.includes('30 tablet') && simulator.quantityInput > 30) {
      status = 'warning';
      reasons.push(`Jumlah obat (${simulator.quantityInput} tablet) MELEBIHI kuota maksimal BPJS (${drugData.maxPrescriptionLimit}). Kelebihan obat berisiko tidak ditanggung klaim.`);
    } else if (maxLimitText.includes('2 - 3 ampul') && simulator.quantityInput > 3) {
      status = 'invalid';
      reasons.push(`Jumlah injeksi (${simulator.quantityInput} ampul) MELEBIHI batas ketat keselamatan Fornas (${drugData.maxPrescriptionLimit}).`);
    } else if (maxLimitText.includes('2 hari') && simulator.durationDays > 2) {
      status = 'invalid';
      reasons.push(`Durasi pemberian (${simulator.durationDays} hari) melanggar batas maksimal keselamatan (${drugData.maxPrescriptionLimit}).`);
    } else if (maxLimitText.includes('1 canister') && simulator.quantityInput > 1) {
      status = 'warning';
      reasons.push(`Peresepan inhaler dibatasi maksimal 1 canister per bulan.`);
    }

    // Check 4: Indication Keywords
    if (simulator.indicationText.trim().length > 0) {
      const ind = simulator.indicationText.toLowerCase();
      if (simulator.drugKey === 'ketorolac' && (ind.includes('kronik') || ind.includes('pegal') || ind.includes('sendi'))) {
        status = 'invalid';
        reasons.push('Ketorolac HANYA dijamin untuk nyeri akut pasca-bedah berat jangka pendek (maks 2 hari). Dilarang untuk nyeri kronik karena risiko gagal ginjal akut & ulkus lambung perforasi.');
      }
      if (simulator.drugKey === 'ondansetron' && (ind.includes('gastritis') || ind.includes('mual biasa'))) {
        status = 'warning';
        reasons.push('Ondansetron ditujukan khusus mual muntah akibat kemoterapi, radioterapi, atau pasca bedah. Untuk mual gastritis disarankan Metoclopramide/Domperidone.');
      }
    }

    let badgeText = 'Lolos Skrining BPJS (Klaim Sah & Aman)';
    let recommendation = 'Resep sesuai regulasi KMK No. HK.01.07/MENKES/1199/2025. Teruskan proses peracikan dan penyerahan obat.';

    if (status === 'invalid') {
      badgeText = 'Berisiko DISPUTE / KLAIM DITOLAK';
      recommendation = 'Wajib konfirmasi ke dokter penulis resep atau verifikator BPJS RS. Hindari penyerahan obat sebelum verifikasi kelayakan klaim.';
    } else if (status === 'warning') {
      badgeText = 'Perlu Konfirmasi / Lampiran Resume Medis';
      recommendation = 'Pastikan rekam medis dilengkapi bukti pendukung klinis (laporan tindakan, hasil lab penunjang, atau protokol kemo) agar verifikasi BPJS lolos.';
    }

    return { status, badgeText, reasons, recommendation, drugData };
  }, [simulator]);

  // Handler to open drug in monograph detail modal
  const handleOpenMonograph = (fornasItem: FornasItemWithKey) => {
    if (!onSelectDrug) return;

    // Try finding exact drug in master list
    const exactMatch = drugs.find(d => {
      const dName = (d.name || '').toLowerCase();
      const dGen = (d.genericName || '').toLowerCase();
      const dId = (d.id || '').toLowerCase();
      const target = fornasItem.key.toLowerCase();
      return dName.includes(target) || dGen.includes(target) || dId.includes(target);
    });

    if (exactMatch) {
      onSelectDrug({
        ...exactMatch,
        fornasData: fornasItem
      });
    } else {
      // Create a virtual drug representation
      const virtualDrug: Drug = {
        id: `fornas-${fornasItem.key}`,
        name: fornasItem.name,
        genericName: fornasItem.name,
        brandNames: [],
        atcCode: 'FORNAS',
        category: fornasItem.therapeuticClass || 'Formularium Nasional',
        indication: fornasItem.restrictionNote,
        dosage: fornasItem.formAndStrength || 'Sesuai Fornas',
        fornasData: fornasItem
      };
      onSelectDrug(virtualDrug);
    }
  };

  // Quick action to test drug in simulator
  const handleTestInSimulator = (item: FornasItemWithKey) => {
    setSimulator(prev => ({
      ...prev,
      drugKey: item.key,
      quantityInput: item.key === 'ketorolac' ? 2 : 30,
      durationDays: item.key === 'ketorolac' ? 2 : 30
    }));
    setShowSimulator(true);
    window.scrollTo({ top: 220, behavior: 'smooth' });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 pb-20">
      {/* ========================================================================= */}
      {/* 1. HERO BANNER - DEEP OCEANIC TEAL & OBSIDIAN (Standard Flagship Theme) */}
      {/* ========================================================================= */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#030c0f] via-[#071e24] to-[#0c2f38] p-6 sm:p-8 text-white shadow-2xl border border-teal-500/25">
        <FloatingPillsBackground density="low" accentColor="#2dd4bf" />
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-6 bottom-4 opacity-10 pointer-events-none">
          <Building2 className="w-48 h-48 text-teal-400" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-bold font-outfit">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
              <span>Standar KMK No. HK.01.07/MENKES/1199/2025 &amp; BPJS Kesehatan</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 text-white flex items-center justify-center shadow-lg shadow-teal-950/50 shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-black font-outfit tracking-tight">
                  Formularium Nasional (FORNAS) &amp; Restriksi BPJS
                </h1>
                <p className="text-xs sm:text-sm text-teal-100/80 font-medium">
                  Direktori resmi penapisan kepatuhan klaim JKN, pembagian fasilitas kesehatan (FKTP Puskesmas vs FKRTL Rumah Sakit), batas kuota maksimal peresepan, dan kewenangan dokter berwenang.
                </p>
              </div>
            </div>

            {/* Quick Stat Badges inside Banner */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <div className="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-xs flex items-center gap-1.5 font-bold text-teal-200">
                <Layers className="w-3.5 h-3.5 text-teal-400" />
                <span>KMK Terkini 2025</span>
              </div>
              <EvidenceSourceBadge preset="fornas" size="sm" variant="banner" />
              <div className="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-xs flex items-center gap-1.5 font-bold text-emerald-200">
                <Hospital className="w-3.5 h-3.5 text-emerald-300" />
                <span>Faskes 1, 2 &amp; 3</span>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-xs flex items-center gap-1.5 font-bold text-amber-200">
                <Stethoscope className="w-3.5 h-3.5 text-amber-300" />
                <span>Program Rujuk Balik (PRB)</span>
              </div>
              <button
                onClick={() => onSelectTab ? onSelectTab('changelog') : onOpenChangelogModal ? onOpenChangelogModal() : undefined}
                className="px-3 py-1.5 rounded-xl bg-teal-500/20 hover:bg-teal-500/30 border border-teal-400/40 text-xs flex items-center gap-1.5 font-bold text-teal-200 transition-all cursor-pointer hover:scale-102"
                title="Buka Halaman Riwayat Pembaruan Data FORNAS & Klinis (18 Sep 2026, 10:30 WIB)"
              >
                <Clock className="w-3.5 h-3.5 text-teal-400" />
                <span>Update: 18 Sep 10:30 WIB (v3.5.0)</span>
              </button>
            </div>
          </div>

          {/* Action Buttons & Counter Block */}
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-stretch md:items-end gap-3 shrink-0 relative z-10">
            <div className="bg-slate-950/80 px-4 py-2.5 rounded-2xl border border-teal-950/60 text-right shadow-md hidden sm:block">
              <span className="text-[11px] text-slate-400 block font-medium">Total Obat FORNAS:</span>
              <span className="text-lg font-black text-teal-400">{stats.total} Obat Terdaftar</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowSimulator(!showSimulator)}
                className={`bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white px-4 py-2.5 rounded-2xl font-bold font-outfit text-xs flex items-center justify-center gap-1.5 transition-all shadow-md shadow-teal-950/40 shrink-0 cursor-pointer ${
                  showSimulator ? 'ring-2 ring-teal-300/60' : ''
                }`}
              >
                <Stethoscope className="w-4 h-4" />
                <span>{showSimulator ? 'Tutup Skrining' : 'Simulasi Skrining Resep'}</span>
              </button>
              <button
                onClick={handlePrint}
                className="bg-white/10 hover:bg-white/20 text-white px-3.5 py-2.5 rounded-2xl font-bold font-outfit text-xs flex items-center justify-center gap-1.5 border border-white/15 backdrop-blur-sm transition-colors cursor-pointer"
                title="Cetak Formularium atau Ekspor PDF"
              >
                <Printer className="w-4 h-4" />
                <span>Cetak / PDF</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. STATISTICAL METRIC CARDS - Crisp Light & Dark Mode */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {/* Card 1: Total FORNAS */}
        <div className="bg-white dark:bg-[#071c17] rounded-2xl p-4 sm:p-5 border border-teal-200/70 dark:border-teal-500/20 shadow-xs flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-500/15 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0 border border-teal-100 dark:border-teal-500/30">
            <Pill className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black font-outfit text-slate-900 dark:text-white">
              {stats.total}
            </div>
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
              Obat Terdaftar FORNAS
            </div>
          </div>
        </div>

        {/* Card 2: Faskes 1 (Puskesmas / FKTP) */}
        <div className="bg-white dark:bg-[#071c17] rounded-2xl p-4 sm:p-5 border border-emerald-200/70 dark:border-emerald-500/20 shadow-xs flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-100 dark:border-emerald-500/30">
            <Hospital className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black font-outfit text-emerald-700 dark:text-emerald-300">
              {stats.faskes1Count}
            </div>
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
              Faskes 1 (Puskesmas / FKTP)
            </div>
          </div>
        </div>

        {/* Card 3: Khusus RS Rujukan (Faskes 2 & 3) */}
        <div className="bg-white dark:bg-[#071c17] rounded-2xl p-4 sm:p-5 border border-sky-200/70 dark:border-sky-500/20 shadow-xs flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-500/15 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0 border border-sky-100 dark:border-sky-500/30">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black font-outfit text-sky-700 dark:text-sky-300">
              {stats.hospitalOnlyCount}
            </div>
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
              Khusus RS Rujukan (Faskes 2 &amp; 3)
            </div>
          </div>
        </div>

        {/* Card 4: Program Rujuk Balik (PRB) */}
        <div className="bg-white dark:bg-[#071c17] rounded-2xl p-4 sm:p-5 border border-amber-200/70 dark:border-amber-500/20 shadow-xs flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 border border-amber-100 dark:border-amber-500/30">
            <Stethoscope className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black font-outfit text-amber-700 dark:text-amber-300">
              {stats.prbCount}
            </div>
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
              Program Rujuk Balik (PRB)
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. INTERACTIVE BPJS PRESCRIPTION SCREENING SIMULATOR (EXPANDABLE) */}
      {/* ========================================================================= */}
      {showSimulator && (
        <div className="rounded-3xl bg-white dark:bg-[#071c17] border border-teal-300 dark:border-teal-500/40 p-5 sm:p-7 shadow-lg space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-500/20 text-teal-700 dark:text-teal-300 flex items-center justify-center">
                <Stethoscope className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  Simulasi Skrining Resep BPJS Kesehatan
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Uji kepatuhan resep terhadap faskes, kuota peresepan maksimal, kewenangan dokter, dan restriksi diagnosis BPJS.
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowSimulator(false)}
              className="text-xs font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 cursor-pointer transition-colors"
            >
              Tutup Simulator
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Input Form Column */}
            <div className="lg:col-span-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-teal-200 mb-1.5">
                  1. Pilih Obat FORNAS yang Diresepkan:
                </label>
                <select
                  value={simulator.drugKey}
                  onChange={e => setSimulator(prev => ({ ...prev, drugKey: e.target.value }))}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-teal-500/30 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  {allCatalogItems.map(item => (
                    <option key={item.key} value={item.key}>
                      {item.name} — ({item.tierLabel})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-teal-200 mb-1.5">
                    2. Tingkat Faskes Pasien:
                  </label>
                  <select
                    value={simulator.faskesLevel}
                    onChange={e => setSimulator(prev => ({ ...prev, faskesLevel: e.target.value as any }))}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-teal-500/30 rounded-xl px-3 py-2 text-xs sm:text-sm font-semibold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="1">Faskes 1 (Puskesmas / FKTP)</option>
                    <option value="2">Faskes 2 (RS Tipe C / B FKRTL)</option>
                    <option value="3">Faskes 3 (RS Tipe A / Tersier)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-teal-200 mb-1.5">
                    3. Dokter Penulis Resep:
                  </label>
                  <select
                    value={simulator.prescriberRole}
                    onChange={e => setSimulator(prev => ({ ...prev, prescriberRole: e.target.value as any }))}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-teal-500/30 rounded-xl px-3 py-2 text-xs sm:text-sm font-semibold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="umum">Dokter Umum / Dokter Gigi</option>
                    <option value="spesialis">Dokter Spesialis (Sp.PD, Sp.JP, Sp.A, dll)</option>
                    <option value="subspesialis">Dokter Subspesialis / Konsultan</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-teal-200 mb-1.5">
                    4. Jumlah Kuantitas Obat:
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={200}
                    value={simulator.quantityInput}
                    onChange={e => setSimulator(prev => ({ ...prev, quantityInput: Number(e.target.value) || 1 }))}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-teal-500/30 rounded-xl px-3.5 py-2 text-xs sm:text-sm font-semibold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Contoh: 30"
                  />
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">Tablet / Kapsul / Ampul / Inhaler</span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-teal-200 mb-1.5">
                    5. Durasi Pemberian (Hari):
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={90}
                    value={simulator.durationDays}
                    onChange={e => setSimulator(prev => ({ ...prev, durationDays: Number(e.target.value) || 1 }))}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-teal-500/30 rounded-xl px-3.5 py-2 text-xs sm:text-sm font-semibold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Contoh: 30"
                  />
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">Hari pemakaian resep</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-teal-200 mb-1.5">
                  6. Indikasi Klinis / Diagnosis Pasien:
                </label>
                <input
                  type="text"
                  value={simulator.indicationText}
                  onChange={e => setSimulator(prev => ({ ...prev, indicationText: e.target.value }))}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-teal-500/30 rounded-xl px-3.5 py-2 text-xs sm:text-sm font-semibold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Contoh: Dislipidemia post-PCI / Nyeri akut pasca-bedah / dll"
                />
              </div>
            </div>

            {/* Verification Result Card Column */}
            <div className="lg:col-span-6 flex flex-col justify-between rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-teal-500/30 p-4 sm:p-5">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                    Hasil Analisis Kepatuhan BPJS:
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
                      simulationAuditResult.status === 'valid'
                        ? 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-500/50'
                        : simulationAuditResult.status === 'warning'
                        ? 'bg-amber-100 dark:bg-amber-500/20 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-500/50'
                        : 'bg-rose-100 dark:bg-rose-500/20 text-rose-800 dark:text-rose-300 border-rose-300 dark:border-rose-500/50'
                    }`}
                  >
                    {simulationAuditResult.status === 'valid' && <CheckCircle2 className="w-4 h-4" />}
                    {simulationAuditResult.status === 'warning' && <AlertTriangle className="w-4 h-4" />}
                    {simulationAuditResult.status === 'invalid' && <XCircle className="w-4 h-4" />}
                    {simulationAuditResult.badgeText}
                  </span>
                </div>

                {/* Drug Snapshot Info */}
                {simulationAuditResult.drugData && (
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs space-y-1.5 mb-3 shadow-2xs">
                    <div className="font-bold text-teal-700 dark:text-teal-300 text-sm">
                      {simulator.drugKey.toUpperCase()} — {simulationAuditResult.drugData.formAndStrength}
                    </div>
                    <div className="text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                      <Hospital className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0" />
                      <span>{simulationAuditResult.drugData.tierLabel}</span>
                    </div>
                    <div className="text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                      <span>Batas Kuota: {simulationAuditResult.drugData.maxPrescriptionLimit || 'Sesuai indikasi medis'}</span>
                    </div>
                    <div className="text-sky-800 dark:text-sky-300 flex items-center gap-1.5">
                      <UserCheck className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
                      <span>Kewenangan: {simulationAuditResult.drugData.prescriberCompetency}</span>
                    </div>
                  </div>
                )}

                {/* Audit Findings */}
                <div className="space-y-2 mb-3">
                  <div className="text-xs font-bold text-slate-700 dark:text-slate-300">Temuan Verifikasi:</div>
                  {simulationAuditResult.reasons.length === 0 ? (
                    <div className="text-xs text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5 font-medium bg-emerald-50 dark:bg-emerald-950/30 p-2.5 rounded-xl border border-emerald-200 dark:border-emerald-800/40">
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                      Tidak ada pelanggaran restriksi Fornas yang terdeteksi. Kuantitas, faskes, dan kewenangan dokter valid.
                    </div>
                  ) : (
                    simulationAuditResult.reasons.map((reason, idx) => (
                      <div
                        key={idx}
                        className={`text-xs p-2.5 rounded-xl flex items-start gap-2 ${
                          simulationAuditResult.status === 'invalid'
                            ? 'bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800/40'
                            : 'bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/40'
                        }`}
                      >
                        <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{reason}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Recommendation Box */}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
                <div className="text-xs text-slate-500 dark:text-slate-400 font-bold mb-1">Rekomendasi Tindakan Apoteker:</div>
                <div className="text-xs text-slate-800 dark:text-slate-200 bg-teal-50 dark:bg-teal-950/30 p-2.5 rounded-xl border border-teal-200 dark:border-teal-500/20 leading-relaxed font-medium">
                  {simulationAuditResult.recommendation}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. SEARCH & FILTERING TOOLBAR - Harmonious Card Styling */}
      {/* ========================================================================= */}
      <div className="bg-white dark:bg-[#071c17] p-5 sm:p-6 rounded-3xl border border-teal-200/80 dark:border-teal-500/25 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-teal-600 dark:text-teal-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Cari obat Fornas (contoh: Atorvastatin, Ketorolac, Ceftriaxone, Salbutamol, Nyeri akut)..."
              className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-teal-500 rounded-xl pl-10 pr-10 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white text-xs font-bold cursor-pointer"
              >
                Reset
              </button>
            )}
          </div>

          {/* Quick Therapeutic Class Select */}
          <div className="w-full md:w-64">
            <select
              value={selectedTherapeuticClass}
              onChange={e => setSelectedTherapeuticClass(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-teal-500 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all cursor-pointer"
            >
              <option value="all">Semua Kategori Klinis</option>
              {therapeuticClasses.map(cls => (
                <option key={cls} value={cls}>
                  {cls}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Faskes Tier Tabs */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={() => setActiveFaskesFilter('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeFaskesFilter === 'all'
                ? 'bg-teal-600 dark:bg-teal-500 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
            }`}
          >
            Semua Obat ({stats.total})
          </button>
          <button
            onClick={() => setActiveFaskesFilter('faskes-1')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeFaskesFilter === 'faskes-1'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-emerald-50 dark:hover:bg-slate-800'
            }`}
          >
            <Hospital className="w-3.5 h-3.5" />
            Faskes 1 (Puskesmas/FKTP) ({stats.faskes1Count})
          </button>
          <button
            onClick={() => setActiveFaskesFilter('faskes-2-3')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeFaskesFilter === 'faskes-2-3'
                ? 'bg-sky-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-sky-50 dark:hover:bg-slate-800'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            Khusus RS Rujukan ({stats.hospitalOnlyCount})
          </button>
          <button
            onClick={() => setActiveFaskesFilter('restricted')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeFaskesFilter === 'restricted'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-amber-50 dark:hover:bg-slate-800'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            Restriksi Kuota Ketat ({stats.strictLimitCount})
          </button>
          <button
            onClick={() => setActiveFaskesFilter('prb')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeFaskesFilter === 'prb'
                ? 'bg-teal-700 dark:bg-teal-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-teal-50 dark:hover:bg-slate-800'
            }`}
          >
            <Stethoscope className="w-3.5 h-3.5" />
            Program Rujuk Balik (PRB) ({stats.prbCount})
          </button>

          {(searchQuery || activeFaskesFilter !== 'all' || selectedTherapeuticClass !== 'all') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveFaskesFilter('all');
                setSelectedTherapeuticClass('all');
              }}
              className="text-[11px] font-bold text-rose-600 hover:underline ml-auto cursor-pointer"
            >
              Reset Semua Filter
            </button>
          )}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 5. DRUG RESTRICTION CARDS GRID - Clear Contrast in Both Modes */}
      {/* ========================================================================= */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-16 bg-white dark:bg-[#071c17] rounded-3xl border border-slate-200 dark:border-slate-800 space-y-3 shadow-xs">
          <Info className="w-10 h-10 text-slate-400 mx-auto" />
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">Tidak Ada Obat yang Cocok</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            Coba ubah kata kunci pencarian atau ganti filter kategori / tingkat faskes.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveFaskesFilter('all');
              setSelectedTherapeuticClass('all');
            }}
            className="px-4 py-2 rounded-xl bg-teal-600 text-white text-xs font-bold hover:bg-teal-500 cursor-pointer shadow-sm"
          >
            Reset Filter
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {filteredItems.map(item => {
            const isFaskes1 = item.tier.includes('1');

            return (
              <div
                key={item.key}
                className="rounded-2xl bg-white dark:bg-[#071c17] border border-teal-200/70 dark:border-teal-500/20 hover:border-teal-400 dark:hover:border-teal-400/50 p-5 flex flex-col justify-between transition-all duration-200 hover:shadow-md shadow-xs group"
              >
                <div className="space-y-3.5">
                  {/* Card Header: Title & Badges */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors">
                          {item.name}
                        </h3>
                        {item.isPrb && (
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-extrabold bg-teal-50 dark:bg-teal-500/20 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-500/40">
                            PRB
                          </span>
                        )}
                        {item.maxPrescriptionLimit &&
                        !item.maxPrescriptionLimit.toLowerCase().includes('sesuai ketentuan') &&
                        !item.maxPrescriptionLimit.toLowerCase().includes('sesuai kebutuhan') &&
                        !item.maxPrescriptionLimit.toLowerCase().includes('sesuai indikasi') ? (
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-50 dark:bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-500/30 flex items-center gap-1">
                            <Clock className="w-2.5 h-2.5" />
                            Restriksi Kuota
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 dark:bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30 flex items-center gap-1">
                            <ShieldCheck className="w-2.5 h-2.5" />
                            Standar INA-CBGs
                          </span>
                        )}
                        {item.therapeuticClass && (
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                            {item.therapeuticClass}
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                        {item.formAndStrength || 'Sediaan Resmi Formularium Nasional'}
                      </div>
                    </div>

                    {/* Faskes Tier Badge */}
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold shrink-0 border ${
                        isFaskes1
                          ? 'bg-emerald-50 dark:bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/30'
                          : 'bg-sky-50 dark:bg-sky-500/15 text-sky-800 dark:text-sky-300 border-sky-200 dark:border-sky-500/30'
                      }`}
                    >
                      {isFaskes1 ? <Hospital className="w-3.5 h-3.5" /> : <Building2 className="w-3.5 h-3.5" />}
                      <span>{isFaskes1 ? 'Faskes 1, 2, 3' : 'Khusus RS (2 & 3)'}</span>
                    </span>
                  </div>

                  {/* Restriction Note Box */}
                  <div className="p-3.5 rounded-xl bg-teal-50/70 dark:bg-slate-950/60 border border-teal-200/60 dark:border-slate-800 text-xs space-y-1">
                    <div className="font-bold text-teal-900 dark:text-teal-300 flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0" />
                      <span>Restriksi Indikasi BPJS Kesehatan:</span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed pl-5">
                      {item.restrictionNote}
                    </p>
                  </div>

                  {/* Limit & Prescriber Pills */}
                  <div className="space-y-1.5 text-xs">
                    {item.maxPrescriptionLimit && (
                      <div className="flex items-start gap-1.5 p-2 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/40 text-amber-900 dark:text-amber-300">
                        <Clock className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
                        <span className="leading-snug">
                          <strong className="font-bold">Batas Kuota:</strong> {item.maxPrescriptionLimit}
                        </span>
                      </div>
                    )}
                    {item.prescriberCompetency && (
                      <div className="flex items-start gap-1.5 p-2 rounded-lg bg-sky-50 dark:bg-sky-950/30 border border-sky-200/80 dark:border-sky-800/40 text-sky-900 dark:text-sky-300">
                        <UserCheck className="w-3.5 h-3.5 shrink-0 mt-0.5 text-sky-600 dark:text-sky-400" />
                        <span className="leading-snug">
                          <strong className="font-bold">Kewenangan Peresep:</strong> {item.prescriberCompetency}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
                  <span className="text-[11px] text-slate-400 font-mono">
                    {item.regulationsReference || 'KMK RI 1199/2025'}
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleTestInSimulator(item)}
                      className="px-3 py-1.5 rounded-xl text-xs font-bold text-teal-700 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-teal-500/20 border border-teal-200 dark:border-teal-500/30 transition-colors cursor-pointer"
                      title="Uji resep obat ini di simulator"
                    >
                      Tes Resep
                    </button>
                    <button
                      onClick={() => handleOpenMonograph(item)}
                      className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-teal-600 hover:bg-teal-500 shadow-sm transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Buka Monografi</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
