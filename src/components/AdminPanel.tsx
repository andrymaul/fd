import React, { useState, useEffect, useMemo } from 'react';
import { Drug, DrugInteraction, UserProfile, SeverityLevel, PricingPlan, DrugFoodInteraction, TherapeuticDuplication, SystemAuditLog, AdminUser, ClinicBrandingSettings, PaymentMethodSettings, TrialSettings } from '../types';
import {
  Settings,
  Pill,
  ShieldAlert,
  Database,
  Plus,
  Trash2,
  Edit3,
  RefreshCw,
  FileSpreadsheet,
  UploadCloud,
  CheckCircle2,
  Download,
  Sparkles,
  FileText,
  Users,
  CreditCard,
  Tag,
  Utensils,
  Activity,
  UserCheck,
  Printer,
  RotateCcw,
  ShieldCheck,
  Layers,
  Building2,
  Instagram,
  ArrowLeft
} from 'lucide-react';
import { resolveDrugFromDDInter } from '../utils/ddinterEngine';
import { CustomerSubscriptionManager } from './CustomerSubscriptionManager';
import { PricingManager } from './PricingManager';
import { AdvancedDataEditor } from './AdvancedDataEditor';
import { AuditLogManager } from './AuditLogManager';
import { AdminTeamManager } from './AdminTeamManager';
import { FirebaseSyncManager } from './FirebaseSyncManager';
import { ClinicBrandingManager } from './ClinicBrandingManager';
import { InstagramPostStudio } from './InstagramPostStudio';
import { DEFAULT_CLINIC_BRANDING } from '../data/defaultBranding';

type AdminSubTab = 'drugs' | 'interactions' | 'customers' | 'pricing-settings' | 'advanced-editor' | 'audit-log' | 'team-admin' | 'firebase-sync' | 'status' | 'branding' | 'instagram-studio';

interface AdminPanelProps {
  drugs: Drug[];
  interactions: DrugInteraction[];
  currentUser: UserProfile | null;
  pricingPlans: PricingPlan[];
  paymentSettings?: PaymentMethodSettings;
  clinicBranding?: ClinicBrandingSettings;
  onSaveBranding?: (updated: ClinicBrandingSettings) => void;
  foodInteractions: DrugFoodInteraction[];
  duplicationRules: TherapeuticDuplication[];
  auditLogs: SystemAuditLog[];
  adminUsers: AdminUser[];
  customers?: UserProfile[];
  onUpdateCustomers?: (customers: UserProfile[]) => void;
  initialSubTab?: AdminSubTab;
  onSaveDrug: (drug: Drug) => Promise<void>;
  onDeleteDrug: (drugId: string) => Promise<void>;
  onSaveInteraction: (interaction: DrugInteraction) => Promise<void>;
  onSeedFirebase: () => Promise<void>;
  onUpdatePricingPlans: (updatedPlans: PricingPlan[]) => void;
  onSavePaymentSettings?: (updated: PaymentMethodSettings) => void;
  trialSettings?: TrialSettings;
  onSaveTrialSettings?: (updated: TrialSettings) => void;
  onSaveFoodInteraction: (dfi: DrugFoodInteraction) => Promise<void>;
  onDeleteFoodInteraction: (id: string) => Promise<void>;
  onSaveDuplicationRule: (rule: TherapeuticDuplication) => Promise<void>;
  onDeleteDuplicationRule: (id: string) => Promise<void>;
  onSaveAdminUser: (admin: AdminUser) => void;
  onDeleteAdminUser: (adminId: string) => void;
  onNavigateToDashboard?: () => void;
  onSimulateTrial?: (mode: 'free-new' | 'start-trial' | 'trial-expired' | 'reset-admin') => void;
  isTrialEnabled?: boolean;
  trialDurationDays?: number;
  onToggleTrialStatus?: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({
  drugs,
  interactions,
  currentUser,
  pricingPlans,
  paymentSettings,
  trialSettings,
  onSaveTrialSettings,
  clinicBranding,
  onSaveBranding,
  foodInteractions,
  duplicationRules,
  auditLogs,
  adminUsers,
  customers,
  onUpdateCustomers,
  initialSubTab = 'drugs',
  onSaveDrug,
  onDeleteDrug,
  onSaveInteraction,
  onSeedFirebase,
  onUpdatePricingPlans,
  onSavePaymentSettings,
  onSaveFoodInteraction,
  onDeleteFoodInteraction,
  onSaveDuplicationRule,
  onDeleteDuplicationRule,
  onSaveAdminUser,
  onDeleteAdminUser,
  onNavigateToDashboard,
  onSimulateTrial,
  isTrialEnabled = true,
  trialDurationDays = 3,
  onToggleTrialStatus
}) => {
  const [activeSubTab, setActiveSubTab] = useState<AdminSubTab>(initialSubTab);

  useEffect(() => {
    if (initialSubTab) {
      setActiveSubTab(initialSubTab);
    }
  }, [initialSubTab]);

  // CSV Importer state
  const [csvFileName, setCsvFileName] = useState('');
  const [parsedCsvPairs, setParsedCsvPairs] = useState<DrugInteraction[]>([]);
  const [importingCount, setImportingCount] = useState(0);

  // New Drug Form state
  const [showDrugModal, setShowDrugModal] = useState(false);
  const [editingDrug, setEditingDrug] = useState<Drug | null>(null);
  const [drugForm, setDrugForm] = useState({
    name: '',
    genericName: '',
    brandNamesText: '',
    atcCode: '',
    category: '',
    indication: '',
    contraindications: '',
    sideEffects: '',
    dosage: '',
    pharmacology: '',
    foodInteraction: '',
    pregnancyCategory: 'C',
    ddinterId: ''
  });

  // New Interaction Form state
  const [showInterModal, setShowInterModal] = useState(false);
  const [interForm, setInterForm] = useState({
    drugAName: '',
    drugBName: '',
    severity: 'Major' as SeverityLevel,
    mechanism: '',
    clinicalOutcome: '',
    management: '',
    evidenceLevel: 'High' as 'High' | 'Moderate' | 'Low',
    ddinterPairId: ''
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Perhitungan metrik ringkas dashboard eksekutif (Hooks harus selalu di atas sebelum return)
  const pendingCount = useMemo(() => {
    if (!customers) return 0;
    return customers.filter((c: any) => 
      c.subscriptionStatus === 'pending' || 
      c.subscriptionStatus === 'menunggu_verifikasi' ||
      Boolean(c.paymentProofUrl && c.subscriptionStatus !== 'active')
    ).length;
  }, [customers]);

  const proCount = useMemo(() => {
    if (!customers) return 0;
    return customers.filter((c: any) => 
      c.subscriptionPlan === 'Pro' || 
      c.subscriptionPlan === 'Klinik' || 
      c.subscriptionPlan === 'Elite'
    ).length;
  }, [customers]);

  // Daftar Tab Segmentasi Admin Hub (10 Modul Manajemen)
  const adminTabs: { id: AdminSubTab; label: string; icon: React.ComponentType<{ className?: string }>; badge?: string | number; badgeColor?: string }[] = useMemo(() => [
    { id: 'customers', label: 'Pelanggan & Subskripsi', icon: UserCheck, badge: pendingCount > 0 ? `${pendingCount} Verifikasi` : undefined, badgeColor: 'bg-rose-500 text-white' },
    { id: 'pricing-settings', label: 'Tarif & QRIS', icon: Tag },
    { id: 'drugs', label: 'Katalog Obat Master', icon: Pill },
    { id: 'interactions', label: 'Interaksi Obat DDInter', icon: ShieldAlert },
    { id: 'firebase-sync', label: 'Cloud Firestore Sync', icon: Database },
    { id: 'branding', label: 'Kop Surat Klinik', icon: Building2 },
    { id: 'instagram-studio', label: 'Studio Media Sosial', icon: Instagram },
    { id: 'team-admin', label: 'Tim Staf Admin', icon: Users },
    { id: 'audit-log', label: 'Audit Trail & Log', icon: FileText },
    { id: 'advanced-editor', label: 'Editor JSON Massal', icon: Settings }
  ], [pendingCount]);


  // CSV Parsing Client Logic
  const handleCsvFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setCsvFileName(file.name);
    const reader = new FileReader();

    reader.onload = (evt) => {
      const text = evt.target?.result as string;
      if (!text) return;

      const lines = text.split(/\r\n|\n/).filter((l) => l.trim().length > 0);
      if (lines.length === 0) return;

      const parseRow = (line: string): string[] => {
        const values: string[] = [];
        let val = '';
        let inside = false;

        for (let j = 0; j < line.length; j++) {
          const c = line[j];
          const nc = line[j + 1];

          if (c === '"') {
            if (inside && nc === '"') {
              val += '"';
              j++;
            } else {
              inside = !inside;
            }
          } else if (c === ',' && !inside) {
            values.push(val.trim());
            val = '';
          } else {
            val += c;
          }
        }
        values.push(val.trim());
        return values;
      };

      const headers = parseRow(lines[0]).map((h) => h.replace(/^["']|["']$/g, '').trim());
      const parsedList: DrugInteraction[] = [];

      for (let k = 1; k < lines.length; k++) {
        const rowValues = parseRow(lines[k]);
        if (rowValues.length === 0 || (rowValues.length === 1 && !rowValues[0])) continue;

        const rowObj: Record<string, string> = {};
        headers.forEach((header, idx) => {
          let cell = rowValues[idx] || '';
          if (cell.startsWith('"') && cell.endsWith('"')) {
            cell = cell.slice(1, -1);
          }
          rowObj[header] = cell;
        });

        const drugA = rowObj['Drug_A'] || rowObj['drug_a'] || rowObj['DrugA'] || rowObj['Obat_A'];
        const drugB = rowObj['Drug_B'] || rowObj['drug_b'] || rowObj['DrugB'] || rowObj['Obat_B'];
        const severityStr = rowObj['Level'] || rowObj['severity'] || rowObj['Severity'] || 'Major';

        if (drugA && drugB) {
          const matchedA = drugs.find((d) => d.name.toLowerCase() === drugA.toLowerCase());
          const matchedB = drugs.find((d) => d.name.toLowerCase() === drugB.toLowerCase());

          parsedList.push({
            id: `csv-pair-${Date.now()}-${k}`,
            drugAId: matchedA ? matchedA.id : `drug-${drugA.toLowerCase().replace(/\s+/g, '-')}`,
            drugBId: matchedB ? matchedB.id : `drug-${drugB.toLowerCase().replace(/\s+/g, '-')}`,
            drugAName: drugA,
            drugBName: drugB,
            severity: severityStr.includes('Major') ? 'Major' : severityStr.includes('Moderate') ? 'Moderate' : 'Minor',
            mechanism: rowObj['Mechanism'] || rowObj['mechanism'] || 'Mekanisme interaksi dari dataset DDInter CSV.',
            clinicalOutcome: rowObj['Clinical_Outcome'] || rowObj['outcome'] || 'Risiko klinis terdaftar pada dataset DDInter.',
            management: rowObj['Management'] || rowObj['management'] || 'Konsultasi apoteker & monitor efek samping.',
            evidenceLevel: (rowObj['Evidence_Level'] as any) || 'High',
            ddinterPairId: rowObj['DDInterID'] || `DDInter-PAIR-${1000 + k}`
          });
        }
      }

      setParsedCsvPairs(parsedList);
      setMessage(`Berhasil membaca file ${file.name}! Ditemukan ${parsedList.length} rekor pasangan interaksi.`);
    };

    reader.readAsText(file);
  };

  const handleBulkUploadParsedCsv = async () => {
    if (parsedCsvPairs.length === 0) return;
    setLoading(true);
    setImportingCount(0);
    try {
      let count = 0;
      for (const pair of parsedCsvPairs) {
        // Ensure Drug A monograph exists
        const drugA = resolveDrugFromDDInter(pair.drugAName, drugs);
        await onSaveDrug(drugA);

        // Ensure Drug B monograph exists
        const drugB = resolveDrugFromDDInter(pair.drugBName, drugs);
        await onSaveDrug(drugB);

        // Save interaction pair
        await onSaveInteraction(pair);
        count++;
        setImportingCount(count);
      }

      setMessage(`Sukses mengimpor ${count} rekor interaksi DDInter ke Cloud Firebase Firestore!`);
      setParsedCsvPairs([]);
      setCsvFileName('');
    } catch (err) {
      setMessage('Gagal mengunggah beberapa rekor CSV.');
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadSampleCsv = () => {
    const sampleCsvContent = `DDInterID,Drug_A,Drug_B,Level,Mechanism,Management,Clinical_Outcome,Evidence_Level
DDInter-PAIR-00101,"Warfarin","Aspirin","Major","Penghambatan fungsi agregasi trombosit ireversibel oleh aspirin bersama warfarin.","Pantau INR ketat & tambahkan Proton Pump Inhibitor (PPI).","Peningkatan signifikan risiko perdarahan mayor GI.","High"
DDInter-PAIR-00102,"Simvastatin","Amiodarone","Major","Inhibisi metabolisme CYP3A4 oleh amiodarone.","Batasi dosis simvastatin maks 20 mg/hari.","Risiko miopati berat dan rhabdomyolysis.","High"
DDInter-PAIR-00103,"Clopidogrel","Omeprazole","Major","Omeprazole menghambat aktivasi prodrug clopidogrel via CYP2C19.","Ganti PPI dengan Pantoprazole atau H2 blocker.","Penurunan bioaktivitas antiplatelet & peningkatan risiko trombotik.","High"
DDInter-PAIR-00104,"Lisinopril","Spironolactone","Major","Blokade ganda sekresi kalium renal.","Pantau kadar kalium serum K+ dan fungsi ginjal.","Risiko hiperkalemia berat dan aritmia kardiak.","High"
DDInter-PAIR-00105,"Tacrolimus","Fluconazole","Major","Fluconazole menghambat CYP3A4 dan P-gp eliminasi tacrolimus.","Lakukan TDM dan kurangi dosis tacrolimus.","Peningkatan konsentrasi plasma tacrolimus & toksisitas ginjal.","High"
`;
    const blob = new Blob([sampleCsvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'ddinter_sample_dataset.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (currentUser?.role !== 'admin') {
    const isSimulating = onSimulateTrial && (currentUser?.role === 'free' || currentUser?.role === 'customer' || currentUser?.subscriptionStatus === 'trial');
    return (
      <div className="space-y-6 max-w-4xl mx-auto px-4 py-8">
        {/* Trial Simulator Bar jika simulasi aktif */}
        {onSimulateTrial && (
          <div className="bg-amber-500/10 border border-amber-400/40 rounded-3xl p-5 shadow-xs space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="p-2 rounded-xl bg-amber-400/20 text-amber-700 dark:text-amber-300 font-black text-base">🛠️</span>
                <div>
                  <p className="font-black text-slate-900 dark:text-white font-outfit text-sm">
                    Simulasi Pengujian Akun Nakes:
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Status saat ini: <strong className="text-amber-600 dark:text-amber-400">{currentUser?.subscriptionPlan || 'Starter'}</strong> ({currentUser?.subscriptionStatus || 'active'})
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                {onToggleTrialStatus && (
                  <button
                    onClick={onToggleTrialStatus}
                    className={`px-3 py-1.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                      isTrialEnabled
                        ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                        : 'bg-slate-700 text-slate-200'
                    }`}
                  >
                    Trial: {isTrialEnabled ? 'ON' : 'OFF'}
                  </button>
                )}
                <button
                  onClick={() => onSimulateTrial('free-new')}
                  className={`px-3 py-1.5 rounded-xl border font-bold text-xs cursor-pointer transition-all ${
                    currentUser?.subscriptionPlan === 'Starter' && !currentUser?.hasClaimedTrial
                      ? 'bg-slate-800 text-white border-slate-700 shadow-xs'
                      : 'bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100'
                  }`}
                >
                  Akun Starter
                </button>
                <button
                  onClick={() => onSimulateTrial('start-trial')}
                  className={`px-3 py-1.5 rounded-xl font-bold text-xs cursor-pointer transition-all ${
                    currentUser?.subscriptionStatus === 'trial'
                      ? 'bg-teal-700 text-white ring-2 ring-teal-400 shadow-xs'
                      : 'bg-teal-600 hover:bg-teal-500 text-white'
                  }`}
                >
                  Trial 3 Hari
                </button>
                <button
                  onClick={() => onSimulateTrial('trial-expired')}
                  className="px-3 py-1.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800 text-rose-700 dark:text-rose-300 font-bold text-xs cursor-pointer hover:bg-rose-100"
                >
                  Trial Habis
                </button>
                <button
                  onClick={() => onSimulateTrial('reset-admin')}
                  className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs cursor-pointer shadow-xs hover:scale-105 active:scale-95 transition-all"
                >
                  Reset Admin
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 text-center space-y-4 shadow-sm">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-400/20 flex items-center justify-center mx-auto">
            <ShieldCheck className="w-7 h-7 stroke-[2]" />
          </div>
          <div className="space-y-2 max-w-lg mx-auto">
            <h2 className="text-xl font-black font-outfit text-slate-900 dark:text-white">
              {isSimulating ? 'Sedang Mode Simulasi Akun Nakes' : 'Akses Terbatas Administrator'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-jakarta">
              {isSimulating
                ? `Anda sedang mensimulasikan profil Nakes ${currentUser?.subscriptionPlan || 'Starter'} (${currentUser?.subscriptionStatus === 'trial' ? 'Masa Percobaan Aktif' : 'Status Aktif'}). Fitur Administrator Hub dinonaktifkan untuk role ini. Buka Dashboard Klinis untuk menguji batasan dan fitur klinis pengguna, atau klik Reset Admin untuk kembali mengelola sistem.`
                : 'Halaman ini merupakan Pusat Kontrol Administrator Farmasi Druggist. Gunakan akun Administrator (admin@farmasidruggist.com) untuk mengakses panel pengelolaan ini.'}
            </p>
          </div>

          <div className="flex items-center justify-center gap-3 pt-3 flex-wrap">
            {onNavigateToDashboard && (
              <button
                onClick={onNavigateToDashboard}
                className="px-5 py-2.5 rounded-2xl bg-teal-600 hover:bg-teal-500 text-white text-xs sm:text-sm font-bold font-outfit transition-all flex items-center gap-2 cursor-pointer shadow-sm hover:scale-105 active:scale-95"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Buka Dashboard Klinis</span>
              </button>
            )}
            {onSimulateTrial && (
              <button
                onClick={() => onSimulateTrial('reset-admin')}
                className="px-5 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs sm:text-sm font-black font-outfit transition-all flex items-center gap-2 cursor-pointer shadow-sm hover:scale-105 active:scale-95"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset Kembali ke Superadmin</span>
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  const handleOpenNewDrug = () => {
    setEditingDrug(null);
    setDrugForm({
      name: '',
      genericName: '',
      brandNamesText: '',
      atcCode: '',
      category: '',
      indication: '',
      contraindications: '',
      sideEffects: '',
      dosage: '',
      pharmacology: '',
      foodInteraction: '',
      pregnancyCategory: 'C',
      ddinterId: 'DDInter-D' + Math.floor(10000 + Math.random() * 90000)
    });
    setShowDrugModal(true);
  };

  const handleEditDrugClick = (drug: Drug) => {
    setEditingDrug(drug);
    setDrugForm({
      name: drug.name,
      genericName: drug.genericName,
      brandNamesText: drug.brandNames ? drug.brandNames.join(', ') : '',
      atcCode: drug.atcCode,
      category: drug.category,
      indication: drug.indication,
      contraindications: drug.contraindications,
      sideEffects: drug.sideEffects,
      dosage: drug.dosage,
      pharmacology: drug.pharmacology || '',
      foodInteraction: drug.foodInteraction || '',
      pregnancyCategory: drug.pregnancyCategory || 'C',
      ddinterId: drug.ddinterId
    });
    setShowDrugModal(true);
  };

  const handleSaveDrugSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = drugForm.name.trim();
    if (!cleanName) {
      setMessage('Nama obat wajib diisi.');
      return;
    }

    // Validation: Check duplicate name when adding new drug
    if (!editingDrug) {
      const existing = drugs.find((d) => d.name.toLowerCase() === cleanName.toLowerCase());
      if (existing) {
        setMessage(`Peringatan: Obat "${cleanName}" sudah terdaftar di katalog!`);
        return;
      }
    }

    setLoading(true);
    try {
      const drugObj: Drug = {
        id: editingDrug ? editingDrug.id : 'drug-' + Date.now(),
        name: cleanName,
        genericName: drugForm.genericName.trim() || cleanName,
        brandNames: drugForm.brandNamesText.split(',').map((s) => s.trim()).filter(Boolean),
        atcCode: drugForm.atcCode.trim() || 'A10AA00',
        category: drugForm.category.trim() || 'Farmakoterapi',
        indication: drugForm.indication.trim(),
        contraindications: drugForm.contraindications.trim(),
        sideEffects: drugForm.sideEffects.trim(),
        dosage: drugForm.dosage.trim(),
        pharmacology: drugForm.pharmacology.trim(),
        foodInteraction: drugForm.foodInteraction.trim(),
        pregnancyCategory: drugForm.pregnancyCategory,
        ddinterId: drugForm.ddinterId || 'DDInter-D00' + Math.floor(Math.random() * 900)
      };

      await onSaveDrug(drugObj);
      setMessage(`Obat "${cleanName}" berhasil disimpan!`);
      setShowDrugModal(false);
    } catch (err) {
      setMessage('Gagal menyimpan obat.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteDrugClick = async (id: string) => {
    if (confirm('Yakin ingin menghapus obat ini dari database Firebase?')) {
      setLoading(true);
      try {
        await onDeleteDrug(id);
        setMessage('Obat berhasil dihapus.');
      } catch (e) {
        setMessage('Gagal menghapus obat.');
      } finally {
        setLoading(false);
      }
    }
  };

  const handleSaveInteractionSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nameA = interForm.drugAName.trim();
    const nameB = interForm.drugBName.trim();

    if (!nameA || !nameB) {
      setMessage('Nama Obat A dan Obat B wajib diisi.');
      return;
    }

    if (nameA.toLowerCase() === nameB.toLowerCase()) {
      setMessage('Peringatan: Obat A dan Obat B tidak boleh sama!');
      return;
    }

    setLoading(true);
    try {
      const matchedA = drugs.find((d) => d.name.toLowerCase() === nameA.toLowerCase());
      const matchedB = drugs.find((d) => d.name.toLowerCase() === nameB.toLowerCase());

      const interObj: DrugInteraction = {
        id: 'int-' + Date.now(),
        drugAId: matchedA ? matchedA.id : 'drug-' + nameA.toLowerCase().replace(/\s+/g, '-'),
        drugBId: matchedB ? matchedB.id : 'drug-' + nameB.toLowerCase().replace(/\s+/g, '-'),
        drugAName: nameA,
        drugBName: nameB,
        severity: interForm.severity,
        mechanism: interForm.mechanism.trim(),
        clinicalOutcome: interForm.clinicalOutcome.trim(),
        management: interForm.management.trim(),
        evidenceLevel: interForm.evidenceLevel,
        ddinterPairId: interForm.ddinterPairId || 'DDInter-PAIR-' + Math.floor(1000 + Math.random() * 9000)
      };

      await onSaveInteraction(interObj);
      setMessage(`Pasangan interaksi ${nameA} ⚡ ${nameB} berhasil ditambahkan!`);
      setShowInterModal(false);
    } catch (err) {
      setMessage('Gagal menambah interaksi.');
    } finally {
      setLoading(false);
    }
  };

  const handleSeedClick = async () => {
    setLoading(true);
    try {
      await onSeedFirebase();
      setMessage('Data awal DDInter berhasil disinkronkan ke Cloud Firebase Firestore!');
    } catch (e) {
      setMessage('Proses sync selesai.');
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="space-y-6 max-w-7xl mx-auto px-1 sm:px-2">

      {/* EXECUTIVE COMMAND CENTER HEADER */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-7 shadow-xs relative overflow-hidden space-y-6">
        
        {/* Top Executive Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 border-b border-slate-100 dark:border-slate-800 pb-5">
          <div className="space-y-1.5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-400/30 flex items-center justify-center font-bold shrink-0 shadow-2xs">
                <ShieldCheck className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-xl sm:text-2xl font-black font-outfit text-slate-900 dark:text-white tracking-tight">
                    Pusat Kontrol Administrator
                  </h1>
                  <span className="text-[10px] font-black uppercase tracking-wider bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-700 px-2.5 py-0.5 rounded-full font-mono">
                    Superadmin
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Manajemen terpusat: lisensi customer nakes, konfigurasi tarif QRIS, database obat & tim sistem.
                </p>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2.5 flex-wrap shrink-0">
            {onNavigateToDashboard && (
              <button
                onClick={onNavigateToDashboard}
                className="px-4 py-2 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold font-outfit transition-all flex items-center gap-2 cursor-pointer shadow-2xs hover:scale-105 active:scale-95"
              >
                <ArrowLeft className="w-4 h-4 text-teal-600" />
                <span>Ke Dashboard Klinis</span>
              </button>
            )}

            <button
              onClick={onSeedFirebase}
              disabled={loading}
              className="px-4 py-2 rounded-2xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-black font-outfit transition-all flex items-center gap-2 cursor-pointer shadow-xs hover:scale-105 active:scale-95"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              <span>Sync Cloud Data</span>
            </button>
          </div>
        </div>

        {/* 4 Quick Executive Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {/* Card 1: Customer */}
          <button
            onClick={() => setActiveSubTab('customers')}
            className={`p-4 rounded-2xl border text-left transition-all cursor-pointer group shadow-2xs ${
              activeSubTab === 'customers'
                ? 'bg-amber-500/10 border-amber-400 dark:border-amber-500/60 ring-2 ring-amber-400/20'
                : 'bg-slate-50/70 dark:bg-slate-800/40 border-slate-200/80 dark:border-slate-800 hover:border-amber-400/60 hover:bg-slate-100/60'
            }`}
          >
            <div className="flex items-center justify-between text-slate-400 group-hover:text-amber-600">
              <span className="text-[11px] font-bold uppercase tracking-wider font-outfit">Pelanggan Nakes</span>
              <Users className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-xl sm:text-2xl font-black font-outfit text-slate-900 dark:text-white mt-1">
              {customers?.length || 0}
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 truncate">
              {proCount} Akun Pro Aktif
            </div>
          </button>

          {/* Card 2: Pending Verifikasi */}
          <button
            onClick={() => setActiveSubTab('customers')}
            className={`p-4 rounded-2xl border text-left transition-all cursor-pointer group shadow-2xs ${
              activeSubTab === 'customers'
                ? 'bg-amber-500/10 border-amber-400 dark:border-amber-500/60 ring-2 ring-amber-400/20'
                : 'bg-slate-50/70 dark:bg-slate-800/40 border-slate-200/80 dark:border-slate-800 hover:border-emerald-400/60 hover:bg-slate-100/60'
            }`}
          >
            <div className="flex items-center justify-between text-slate-400 group-hover:text-emerald-600">
              <span className="text-[11px] font-bold uppercase tracking-wider font-outfit">Subskripsi & Bayar</span>
              <CreditCard className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-xl sm:text-2xl font-black font-outfit text-slate-900 dark:text-white mt-1 flex items-center gap-1.5">
              <span>{pendingCount > 0 ? `${pendingCount} Menunggu` : 'Semua Siap'}</span>
              {pendingCount > 0 && (
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
              )}
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 truncate">
              {pricingPlans?.length || 0} Paket Lisensi Aktif
            </div>
          </button>

          {/* Card 3: Database Obat */}
          <button
            onClick={() => setActiveSubTab('drugs')}
            className={`p-4 rounded-2xl border text-left transition-all cursor-pointer group shadow-2xs ${
              activeSubTab === 'drugs' || activeSubTab === 'interactions'
                ? 'bg-amber-500/10 border-amber-400 dark:border-amber-500/60 ring-2 ring-amber-400/20'
                : 'bg-slate-50/70 dark:bg-slate-800/40 border-slate-200/80 dark:border-slate-800 hover:border-teal-400/60 hover:bg-slate-100/60'
            }`}
          >
            <div className="flex items-center justify-between text-slate-400 group-hover:text-teal-600">
              <span className="text-[11px] font-bold uppercase tracking-wider font-outfit">Data Master Obat</span>
              <Pill className="w-4 h-4 text-teal-500" />
            </div>
            <div className="text-xl sm:text-2xl font-black font-outfit text-slate-900 dark:text-white mt-1">
              {drugs.length}
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 truncate">
              {interactions.length} Pasangan DDInter V2
            </div>
          </button>

          {/* Card 4: Staf & Cloud */}
          <button
            onClick={() => setActiveSubTab('team-admin')}
            className={`p-4 rounded-2xl border text-left transition-all cursor-pointer group shadow-2xs ${
              activeSubTab === 'team-admin'
                ? 'bg-amber-500/10 border-amber-400 dark:border-amber-500/60 ring-2 ring-amber-400/20'
                : 'bg-slate-50/70 dark:bg-slate-800/40 border-slate-200/80 dark:border-slate-800 hover:border-indigo-400/60 hover:bg-slate-100/60'
            }`}
          >
            <div className="flex items-center justify-between text-slate-400 group-hover:text-indigo-600">
              <span className="text-[11px] font-bold uppercase tracking-wider font-outfit">Tim Administrator</span>
              <ShieldCheck className="w-4 h-4 text-indigo-500" />
            </div>
            <div className="text-xl sm:text-2xl font-black font-outfit text-slate-900 dark:text-white mt-1">
              {adminUsers?.length || 0}
            </div>
            <div className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-0.5 font-bold flex items-center gap-1 truncate">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>Firestore Connected</span>
            </div>
          </button>
        </div>

        {/* Trial Simulator Bar (Terintegrasi Khusus di Admin Hub) */}
        {onSimulateTrial && (
          <div className="bg-amber-500/10 border border-amber-400/30 rounded-2xl p-3 sm:p-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs shadow-2xs">
            <div className="flex items-center gap-2.5">
              <span className="p-1.5 rounded-lg bg-amber-400/20 text-amber-700 dark:text-amber-300 font-black">🛠️</span>
              <div>
                <p className="font-bold text-slate-900 dark:text-white font-outfit">Simulasi Pengujian Akun Nakes:</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Uji langsung status Starter, aktivasi trial 3 hari, hingga expired tanpa mengubah database riil:</p>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {onToggleTrialStatus && (
                <button
                  onClick={onToggleTrialStatus}
                  className={`px-3 py-1 rounded-xl font-bold text-[11px] transition-all cursor-pointer ${
                    isTrialEnabled
                      ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                      : 'bg-slate-700 text-slate-200'
                  }`}
                >
                  Trial: {isTrialEnabled ? 'ON' : 'OFF'}
                </button>
              )}
              <button
                onClick={() => onSimulateTrial('free-new')}
                className="px-2.5 py-1 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 text-slate-700 dark:text-slate-200 font-bold text-[11px] cursor-pointer"
              >
                Akun Starter
              </button>
              <button
                onClick={() => onSimulateTrial('start-trial')}
                className="px-2.5 py-1 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-[11px] cursor-pointer"
              >
                Trial 3 Hari
              </button>
              <button
                onClick={() => onSimulateTrial('trial-expired')}
                className="px-2.5 py-1 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800 text-rose-700 dark:text-rose-300 font-bold text-[11px] cursor-pointer"
              >
                Trial Habis
              </button>
              <button
                onClick={() => onSimulateTrial('reset-admin')}
                className="px-2.5 py-1 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-[11px] cursor-pointer"
              >
                Reset Admin
              </button>
            </div>
          </div>
        )}

        {/* PILLAR NAVIGATION TAB SWITCHER (10 Pilar Manajemen Admin) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 border-t border-slate-100 dark:border-slate-800 pt-4 scrollbar-none">
          {adminTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeSubTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2.5 rounded-2xl text-xs font-bold font-outfit whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 font-black shadow-sm ring-2 ring-amber-400/40 scale-[1.02]'
                    : 'bg-slate-100/80 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-amber-500'}`} />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span className={`text-[10px] font-black px-1.5 py-0.2 rounded-full ${tab.badgeColor || 'bg-amber-600 text-white'}`}>
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

      </div>

      {message && (
        <div className="p-3 bg-teal-50 text-teal-900 border border-teal-200 rounded-xl text-xs font-bold flex items-center justify-between shadow-2xs">
          <span>{message}</span>
          <button onClick={() => setMessage('')} className="text-slate-400 hover:text-slate-600 cursor-pointer">✕</button>
        </div>
      )}


      {/* TAB FIREBASE SYNC */}
      {activeSubTab === 'firebase-sync' && (
        <FirebaseSyncManager
          drugs={drugs}
          interactions={interactions}
          foodInteractions={foodInteractions}
          duplicationRules={duplicationRules}
          onSeedFirebase={onSeedFirebase}
          onSaveDrug={onSaveDrug}
          onSaveInteraction={onSaveInteraction}
        />
      )}

      {/* TAB BRANDING & KOP SURAT */}
      {activeSubTab === 'branding' && (
        <ClinicBrandingManager
          branding={clinicBranding || DEFAULT_CLINIC_BRANDING}
          onSaveBranding={onSaveBranding || (() => {})}
        />
      )}

      {/* TAB 1: DRUGS */}
      {activeSubTab === 'drugs' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900">Katalog Obat di Firestore</h2>
            <button
              onClick={handleOpenNewDrug}
              className="bg-teal-600 hover:bg-teal-700 text-white px-3.5 py-2 rounded-lg font-semibold text-xs flex items-center gap-1 shadow-xs"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Tambah Obat</span>
            </button>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-3">Nama / Generik</th>
                    <th className="p-3">Kode ATC</th>
                    <th className="p-3">Kategori</th>
                    <th className="p-3">Merk Indonesia</th>
                    <th className="p-3 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {drugs.map((drug) => (
                    <tr key={drug.id} className="hover:bg-slate-50 transition-colors">
                      <td className="p-3">
                        <p className="font-bold text-slate-900">{drug.name}</p>
                        <p className="text-[10px] text-slate-500">{drug.genericName}</p>
                      </td>
                      <td className="p-3">
                        <p className="font-mono text-slate-800">{drug.atcCode}</p>
                      </td>
                      <td className="p-3 text-slate-700">{drug.category}</td>
                      <td className="p-3">
                        <div className="flex flex-wrap gap-1">
                          {drug.brandNames?.slice(0, 2).map((b, i) => (
                            <span key={i} className="bg-slate-100 px-1.5 py-0.5 rounded text-[10px]">{b}</span>
                          ))}
                        </div>
                      </td>
                      <td className="p-3 text-right space-x-1">
                        <button
                          onClick={() => handleEditDrugClick(drug)}
                          className="p-1 text-teal-600 hover:bg-teal-50 rounded"
                          title="Edit"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteDrugClick(drug.id)}
                          className="p-1 text-red-600 hover:bg-red-50 rounded"
                          title="Hapus"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: INTERACTIONS */}
      {activeSubTab === 'interactions' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900">Pasangan Interaksi Obat</h2>
            <button
              onClick={() => setShowInterModal(true)}
              className="bg-teal-600 hover:bg-teal-700 text-white px-3.5 py-2 rounded-lg font-semibold text-xs flex items-center gap-1 shadow-xs"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Tambah Interaksi</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {interactions.map((inter) => (
              <div key={inter.id} className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-1.5 text-xs">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="font-bold text-slate-900">{inter.drugAName} ⚡ {inter.drugBName}</span>
                  <span className={`px-2 py-0.5 rounded font-bold text-[10px] ${inter.severity === 'Major' ? 'bg-red-100 text-red-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                    {inter.severity}
                  </span>
                </div>
                <p className="text-slate-600"><strong>Mekanisme:</strong> {inter.mechanism}</p>
                <p className="text-slate-600"><strong>Solusi:</strong> {inter.management}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: STATUS */}
      {activeSubTab === 'status' && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-teal-50 text-teal-600 rounded-xl border border-teal-100">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">Firebase Firestore Connection</h2>
              <p className="text-xs text-slate-500">Project Cloud Database Status</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <p className="text-xs font-semibold text-slate-500">Koleksi "drugs"</p>
              <p className="text-xl font-bold text-teal-600 mt-1">{drugs.length} Document</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <p className="text-xs font-semibold text-slate-500">Koleksi "interactions"</p>
              <p className="text-xl font-bold text-teal-600 mt-1">{interactions.length} Document</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <p className="text-xs font-semibold text-slate-500">Sync Status</p>
              <p className="text-xl font-bold text-emerald-600 mt-1">Connected</p>
            </div>
          </div>

          {onSeedFirebase && (
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-slate-800">Sinkronisasi & Inisialisasi Database</p>
                <p className="text-[11px] text-slate-500">Jalankan pengisian ulang (*seeding*) dataset obat DDInter standar ke Firestore Cloud.</p>
              </div>
              <button
                onClick={async () => {
                  await onSeedFirebase();
                  alert('Database Firestore berhasil disemaikan dan diperbarui!');
                }}
                className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center gap-1.5 shrink-0"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Semai Ulang Database Otomatis</span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* TAB: MANAJEMEN SUBSKRIPSI CUSTOMER */}
      {activeSubTab === 'customers' && (
        <CustomerSubscriptionManager
          currentUser={currentUser}
          customers={customers}
          onUpdateCustomers={onUpdateCustomers}
        />
      )}

      {/* TAB: PENGATURAN TARIF & FITUR PAKET */}
      {activeSubTab === 'pricing-settings' && (
        <PricingManager
          pricingPlans={pricingPlans}
          paymentSettings={paymentSettings}
          trialSettings={trialSettings}
          onUpdatePricingPlans={onUpdatePricingPlans}
          onSavePaymentSettings={onSavePaymentSettings}
          onSaveTrialSettings={onSaveTrialSettings}
        />
      )}

      {/* TAB: EDITOR INTERAKSI MAKANAN & DUPLIKASI TERAPI */}
      {activeSubTab === 'advanced-editor' && (
        <AdvancedDataEditor
          foodInteractions={foodInteractions}
          duplicationRules={duplicationRules}
          onSaveFoodInteraction={onSaveFoodInteraction}
          onDeleteFoodInteraction={onDeleteFoodInteraction}
          onSaveDuplicationRule={onSaveDuplicationRule}
          onDeleteDuplicationRule={onDeleteDuplicationRule}
        />
      )}

      {/* TAB: AUDIT LOG SYSTEM */}
      {activeSubTab === 'audit-log' && (
        <AuditLogManager auditLogs={auditLogs} />
      )}

      {/* TAB: MANAJEMEN TIM ADMIN & HAK AKSES */}
      {activeSubTab === 'team-admin' && (
        <AdminTeamManager
          adminUsers={adminUsers}
          onSaveAdminUser={onSaveAdminUser}
          onDeleteAdminUser={onDeleteAdminUser}
        />
      )}

      {/* TAB: STUDIO KONTEN & PROMOSI INSTAGRAM */}
      {activeSubTab === 'instagram-studio' && (
        <div className="space-y-4">
          <InstagramPostStudio />
        </div>
      )}

      {/* Modals */}
      {showDrugModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
          <div className="bg-white rounded-2xl p-6 max-w-xl w-full space-y-3 max-h-[90vh] overflow-y-auto">
            <h3 className="text-base font-bold text-slate-900">
              {editingDrug ? 'Edit Monografi Obat' : 'Tambah Obat Baru'}
            </h3>

            <form onSubmit={handleSaveDrugSubmit} className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Nama Utama *</label>
                  <input
                    type="text"
                    required
                    value={drugForm.name}
                    onChange={(e) => setDrugForm({ ...drugForm, name: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 rounded-lg border border-slate-200"
                  />
                </div>
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Nama Generik *</label>
                  <input
                    type="text"
                    required
                    value={drugForm.genericName}
                    onChange={(e) => setDrugForm({ ...drugForm, genericName: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 rounded-lg border border-slate-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Kode ATC</label>
                  <input
                    type="text"
                    value={drugForm.atcCode}
                    onChange={(e) => setDrugForm({ ...drugForm, atcCode: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 rounded-lg border border-slate-200"
                  />
                </div>
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Kategori</label>
                  <input
                    type="text"
                    value={drugForm.category}
                    onChange={(e) => setDrugForm({ ...drugForm, category: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 rounded-lg border border-slate-200"
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Merk Indonesia (Pisah Koma)</label>
                <input
                  type="text"
                  value={drugForm.brandNamesText}
                  onChange={(e) => setDrugForm({ ...drugForm, brandNamesText: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 rounded-lg border border-slate-200"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Indikasi</label>
                <textarea
                  rows={2}
                  value={drugForm.indication}
                  onChange={(e) => setDrugForm({ ...drugForm, indication: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 rounded-lg border border-slate-200"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setShowDrugModal(false)}
                  className="px-4 py-2 rounded-lg text-slate-600 font-semibold bg-slate-100"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 rounded-lg text-white font-semibold bg-teal-600 hover:bg-teal-700"
                >
                  {loading ? 'Menyimpan...' : 'Simpan'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showInterModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full space-y-3">
            <h3 className="text-base font-bold text-slate-900">Tambah Pasangan Interaksi</h3>

            <form onSubmit={handleSaveInteractionSubmit} className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Obat A *</label>
                  <input
                    type="text"
                    required
                    value={interForm.drugAName}
                    onChange={(e) => setInterForm({ ...interForm, drugAName: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 rounded-lg border border-slate-200"
                  />
                </div>
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Obat B *</label>
                  <input
                    type="text"
                    required
                    value={interForm.drugBName}
                    onChange={(e) => setInterForm({ ...interForm, drugBName: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 rounded-lg border border-slate-200"
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Tingkat Keparahan</label>
                <select
                  value={interForm.severity}
                  onChange={(e) => setInterForm({ ...interForm, severity: e.target.value as SeverityLevel })}
                  className="w-full p-2.5 bg-slate-50 rounded-lg border border-slate-200 font-semibold"
                >
                  <option value="Major">Major</option>
                  <option value="Moderate">Moderate</option>
                  <option value="Minor">Minor</option>
                </select>
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Mekanisme</label>
                <textarea
                  rows={2}
                  required
                  value={interForm.mechanism}
                  onChange={(e) => setInterForm({ ...interForm, mechanism: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 rounded-lg border border-slate-200"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Solusi Klinis</label>
                <textarea
                  rows={2}
                  required
                  value={interForm.management}
                  onChange={(e) => setInterForm({ ...interForm, management: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 rounded-lg border border-slate-200"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowInterModal(false)}
                  className="px-4 py-2 rounded-lg text-slate-600 font-semibold bg-slate-100"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 rounded-lg text-white font-semibold bg-teal-600 hover:bg-teal-700"
                >
                  Simpan Interaksi
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
