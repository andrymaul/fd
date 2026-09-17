import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { LandingPage } from './components/LandingPage';
import { Dashboard } from './components/Dashboard';
import { DrugDirectory } from './components/DrugDirectory';
import { InteractionChecker } from './components/InteractionChecker';
import { HistoryList } from './components/HistoryList';
import { ProFeatureGate } from './components/ProFeatureGate';
import { AuthModal } from './components/AuthModal';
import { ClinicalTabSkeleton } from './components/ClinicalTabSkeleton';

// === DYNAMIC LAZY LOADED CLINICAL MODULES & MODALS ===
const AdminPanel = React.lazy(() => import('./components/AdminPanel').then(m => ({ default: m.AdminPanel })));
const MedicationUsageGuide = React.lazy(() => import('./components/MedicationUsageGuide').then(m => ({ default: m.MedicationUsageGuide })));
const PharmacySopManager = React.lazy(() => import('./components/PharmacySopManager').then(m => ({ default: m.PharmacySopManager })));
const PharmacyRegulationsManager = React.lazy(() => import('./components/PharmacyRegulationsManager').then(m => ({ default: m.PharmacyRegulationsManager })));
const ClinicalLiterature = React.lazy(() => import('./components/ClinicalLiterature').then(m => ({ default: m.ClinicalLiterature })));
const RenalDoseAdjuster = React.lazy(() => import('./components/RenalDoseAdjuster').then(m => ({ default: m.RenalDoseAdjuster })));
const ClinicalPolypharmacyEvaluator = React.lazy(() => import('./components/ClinicalPolypharmacyEvaluator').then(m => ({ default: m.ClinicalPolypharmacyEvaluator })));
const ClinicalTherapyGuidelines = React.lazy(() => import('./components/ClinicalTherapyGuidelines').then(m => ({ default: m.ClinicalTherapyGuidelines })));
const PediatricCompoundingCalculator = React.lazy(() => import('./components/PediatricCompoundingCalculator').then(m => ({ default: m.PediatricCompoundingCalculator })));
const IvCompatibilityChecker = React.lazy(() => import('./components/IvCompatibilityChecker').then(m => ({ default: m.IvCompatibilityChecker })));
const WhatsAppPatientCardManager = React.lazy(() => import('./components/WhatsAppPatientCardManager').then(m => ({ default: m.WhatsAppPatientCardManager })));
const SwamedikasiManager = React.lazy(() => import('./components/SwamedikasiManager').then(m => ({ default: m.SwamedikasiManager })));
const CustomerSubscriptionManager = React.lazy(() => import('./components/CustomerSubscriptionManager').then(m => ({ default: m.CustomerSubscriptionManager })));
const SideEffectChecker = React.lazy(() => import('./components/SideEffectChecker').then(m => ({ default: m.SideEffectChecker })));
const PharmacyCompetencyCenter = React.lazy(() => import('./components/PharmacyCompetencyCenter').then(m => ({ default: m.PharmacyCompetencyCenter })));
const DrugNotesManager = React.lazy(() => import('./components/DrugNotesManager').then(m => ({ default: m.DrugNotesManager })));
const PregnancyLactationChecker = React.lazy(() => import('./components/PregnancyLactationChecker').then(m => ({ default: m.PregnancyLactationChecker })));
const DrugLabInteractionChecker = React.lazy(() => import('./components/DrugLabInteractionChecker').then(m => ({ default: m.DrugLabInteractionChecker })));
const BeyondUseDateCalculator = React.lazy(() => import('./components/BeyondUseDateCalculator').then(m => ({ default: m.BeyondUseDateCalculator })));
const ClinicalToxicologyManager = React.lazy(() => import('./components/ClinicalToxicologyManager').then(m => ({ default: m.ClinicalToxicologyManager })));
const HighAlertSafetyManager = React.lazy(() => import('./components/HighAlertSafetyManager').then(m => ({ default: m.HighAlertSafetyManager })));
const HerbDrugInteractionChecker = React.lazy(() => import('./components/HerbDrugInteractionChecker').then(m => ({ default: m.HerbDrugInteractionChecker })));
const PricingModal = React.lazy(() => import('./components/PricingModal').then(m => ({ default: m.PricingModal })));
const CompleteProfileModal = React.lazy(() => import('./components/CompleteProfileModal').then(m => ({ default: m.CompleteProfileModal })));
const DrugDetailModal = React.lazy(() => import('./components/DrugDetailModal').then(m => ({ default: m.DrugDetailModal })));
const InteractionReportModal = React.lazy(() => import('./components/InteractionReportModal').then(m => ({ default: m.InteractionReportModal })));
const AntigravityUpdateModal = React.lazy(() => import('./components/AntigravityUpdateModal').then(m => ({ default: m.AntigravityUpdateModal })));
const TrialConfirmModal = React.lazy(() => import('./components/TrialModals').then(m => ({ default: m.TrialConfirmModal })));
const TrialExpiredModal = React.lazy(() => import('./components/TrialModals').then(m => ({ default: m.TrialExpiredModal })));
const InstagramPostStudio = React.lazy(() => import('./components/InstagramPostStudio').then(m => ({ default: m.InstagramPostStudio })));
const EducationPromptGenerator = React.lazy(() => import('./components/EducationPromptGenerator').then(m => ({ default: m.EducationPromptGenerator })));
const AntimicrobialStewardshipManager = React.lazy(() => import('./components/AntimicrobialStewardshipManager').then(m => ({ default: m.AntimicrobialStewardshipManager })));
const LatinAbbreviationsDictionary = React.lazy(() => import('./components/LatinAbbreviationsDictionary').then(m => ({ default: m.LatinAbbreviationsDictionary })));
const FornasRestrictionsManager = React.lazy(() => import('./components/FornasRestrictionsManager').then(m => ({ default: m.FornasRestrictionsManager })));
const DataUpdateHistoryModal = React.lazy(() => import('./components/DataUpdateHistoryModal').then(m => ({ default: m.DataUpdateHistoryModal })));

import { Drug, DrugInteraction, UserProfile, InteractionCheckRecord, SeverityLevel, PricingPlan, DrugFoodInteraction, TherapeuticDuplication, SystemAuditLog, AuditActionType, AdminUser, ClinicBrandingSettings, PaymentMethodSettings, TrialSettings, DEFAULT_TRIAL_SETTINGS } from './types';
import { INITIAL_DRUGS, INITIAL_INTERACTIONS, PRICING_PLANS, SAMPLE_FOOD_INTERACTIONS, SAMPLE_THERAPEUTIC_DUPLICATIONS } from './data/ddinterData';
import { INITIAL_AUDIT_LOGS } from './data/mockAuditLogs';
import { INITIAL_ADMIN_USERS } from './data/mockAdminUsers';
import { INITIAL_CUSTOMERS, SAMPLE_DEMO_CUSTOMERS } from './data/mockCustomers';
import { DEFAULT_CLINIC_BRANDING } from './data/defaultBranding';
import { DEFAULT_PAYMENT_SETTINGS } from './data/defaultPaymentSettings';
import {
  auth,
  logoutUser,
  fetchAllDrugs,
  fetchAllInteractions,
  saveDrugToFirestore,
  deleteDrugFromFirestore,
  saveInteractionToFirestore,
  saveInteractionCheckHistory,
  fetchUserHistory,
  updateUserHistoryNotes,
  deleteUserHistoryRecord,
  clearAllUserHistory,
  saveClinicBrandingToFirestore,
  fetchClinicBrandingFromFirestore,
  savePaymentSettingsToFirestore,
  fetchPaymentSettingsFromFirestore,
  saveTrialSettingsToFirestore,
  fetchTrialSettingsFromFirestore,
  saveAdminUserToFirestore,
  deleteAdminUserFromFirestore,
  fetchAdminTeamFromFirestore,
  seedFirestoreIfEmpty,
  saveUserProfileToFirestore,
  getUserProfileFromFirestore,
  subscribeToCustomersFirestore,
  fetchCustomersFromFirestore,
  isRegisteringAccount,
  sendUserHeartbeatToFirestore
} from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { deduplicateDrugs, deduplicateInteractions, resolveInteractionPair } from './utils/ddinterEngine';
import { initVisitorTracking } from './services/visitorStatsService';

export default function App() {
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(() => {
    try {
      const savedUser = localStorage.getItem('farmasi_current_user');
      if (!savedUser || savedUser === 'null_session' || savedUser === 'null' || savedUser === 'undefined') return null;
      const parsed = JSON.parse(savedUser);
      if (!parsed || typeof parsed !== 'object') return null;
      if (parsed.isEmailVerified === false) {
        localStorage.setItem('farmasi_current_user', 'null_session');
        return null;
      }
      if (parsed.subscriptionPlan === 'Klinik' || parsed.subscriptionPlan === 'Elite' || (parsed.role === 'admin' && parsed.subscriptionPlan !== 'Pemula')) {
        parsed.subscriptionPlan = 'Pro';
        try {
          localStorage.setItem('farmasi_current_user', JSON.stringify(parsed));
        } catch (e) {}
      }
      return parsed;
    } catch (e) {
      console.error('Failed to parse saved user session:', e);
    }
    return null;
  });

  const [activeTab, setActiveTab] = useState<string>(() => {
    try {
      const savedUser = localStorage.getItem('farmasi_current_user');
      const hasUser = savedUser && savedUser !== 'null_session' && savedUser !== 'null' && savedUser !== 'undefined';
      if (!hasUser) {
        localStorage.setItem('farmasi_active_tab', 'landing');
        return 'landing';
      }
      let parsedUser: any = null;
      try {
        parsedUser = JSON.parse(savedUser);
      } catch (e) {}
      const savedTab = localStorage.getItem('farmasi_active_tab');
      if (savedTab) {
        if ((savedTab.startsWith('admin') || savedTab === 'instagram-studio') && (!parsedUser || parsedUser.role !== 'admin')) {
          localStorage.setItem('farmasi_active_tab', 'landing');
          return 'landing';
        }
        if (savedTab === 'instagram-studio') {
          return 'admin-instagram';
        }
        return savedTab;
      }
    } catch (e) {
      console.error('Failed to parse saved active tab:', e);
    }
    return 'landing';
  });

  const [pendingTargetTab, setPendingTargetTab] = useState<string | null>(null);
  const [preselectedSwamedikasiProtocolId, setPreselectedSwamedikasiProtocolId] = useState<string | null>(null);

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      const savedTheme = localStorage.getItem('farmasi_theme');
      if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
    } catch (e) {}
    return 'dark';
  });

  useEffect(() => {
    try {
      localStorage.setItem('farmasi_theme', theme);
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        document.body.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
        document.body.classList.remove('dark');
      }
    } catch (e) {}
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState<boolean>(false);

  const APP_DB_VERSION = 'v2026_ddinter2_release_v45_swamedikasi_42';

  // Atomic database version migration and cache invalidation
  try {
    const dbVer = localStorage.getItem('farmasi_db_version');
    if (dbVer !== APP_DB_VERSION) {
      localStorage.setItem('farmasi_db_version', APP_DB_VERSION);
      localStorage.removeItem('farmasi_custom_drugs');
      localStorage.removeItem('farmasi_custom_interactions');
      localStorage.removeItem('farmasi_food_interactions');
      localStorage.removeItem('farmasi_duplication_rules');
    }
  } catch (e) {
    console.error('Failed to sync DB version in localStorage:', e);
  }

  const [pricingPlans, setPricingPlans] = useState<PricingPlan[]>(PRICING_PLANS);
  const [drugs, setDrugs] = useState<Drug[]>(() => {
    try {
      const saved = localStorage.getItem('farmasi_custom_drugs');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length >= INITIAL_DRUGS.length) {
          return deduplicateDrugs(parsed);
        }
      }
    } catch (e) {}
    return deduplicateDrugs(INITIAL_DRUGS);
  });

  const [interactions, setInteractions] = useState<DrugInteraction[]>(() => {
    try {
      const saved = localStorage.getItem('farmasi_custom_interactions');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length >= INITIAL_INTERACTIONS.length) {
          return deduplicateInteractions(parsed);
        }
      }
    } catch (e) {}
    return deduplicateInteractions(INITIAL_INTERACTIONS);
  });

  const [foodInteractions, setFoodInteractions] = useState<DrugFoodInteraction[]>(() => {
    try {
      const saved = localStorage.getItem('farmasi_food_interactions');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length >= SAMPLE_FOOD_INTERACTIONS.length) {
          return parsed;
        }
      }
    } catch (e) {}
    return SAMPLE_FOOD_INTERACTIONS;
  });

  const [duplicationRules, setDuplicationRules] = useState<TherapeuticDuplication[]>(() => {
    try {
      const saved = localStorage.getItem('farmasi_duplication_rules');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length >= SAMPLE_THERAPEUTIC_DUPLICATIONS.length) {
          return parsed;
        }
      }
    } catch (e) {}
    return SAMPLE_THERAPEUTIC_DUPLICATIONS;
  });

  const [auditLogs, setAuditLogs] = useState<SystemAuditLog[]>(() => {
    try {
      const saved = localStorage.getItem('farmasi_audit_logs');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return INITIAL_AUDIT_LOGS;
  });

  const [adminUsers, setAdminUsers] = useState<AdminUser[]>(() => {
    try {
      const saved = localStorage.getItem('farmasi_admin_users');
      if (saved) {
        const parsed: AdminUser[] = JSON.parse(saved);
        const filtered = parsed
          .filter(u => 
            !['admin-001', 'admin-002', 'admin-003', 'admin-004', 'admin-main-001', 'admin-main-002'].includes(u.id) &&
            !['andrymaul.aem@gmail.com', 'andrymaul.am@gmail.com'].includes(u.email?.toLowerCase() || '')
          )
          .map(u => ({
            ...u,
            password: u.password || (u.id === 'admin-main-000' ? 'admin123' : 'pass12345')
          }));
        if (filtered.length > 0) {
          localStorage.setItem('farmasi_admin_users', JSON.stringify(filtered));
          return filtered;
        }
      }
    } catch (e) {}
    return INITIAL_ADMIN_USERS;
  });

  const [clinicBranding, setClinicBranding] = useState<ClinicBrandingSettings>(() => {
    try {
      const saved = localStorage.getItem('farmasi_clinic_branding');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return DEFAULT_CLINIC_BRANDING;
  });

  const [paymentSettings, setPaymentSettings] = useState<PaymentMethodSettings>(() => {
    try {
      const saved = localStorage.getItem('farmasi_payment_settings');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return DEFAULT_PAYMENT_SETTINGS;
  });

  const [trialSettings, setTrialSettings] = useState<TrialSettings>(() => {
    try {
      const saved = localStorage.getItem('farmasi_trial_settings');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return DEFAULT_TRIAL_SETTINGS;
  });

  const [customerList, setCustomerList] = useState<UserProfile[]>(() => {
    try {
      const saved = localStorage.getItem('farmasi_customer_subscriptions');
      if (saved !== null) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          let deletedList: string[] = [];
          try {
            const savedDeleted = localStorage.getItem('farmasi_deleted_customer_uids');
            if (savedDeleted) deletedList = JSON.parse(savedDeleted);
          } catch (e) {}
          return parsed.filter((p: UserProfile) => p.uid && !deletedList.includes(p.uid));
        }
      }
    } catch (e) {}
    return [];
  });

  // Initial fetch and Real-time Firestore Listener for Customer Subscriptions
  useEffect(() => {
    // 1. Initial direct fetch from Cloud Firestore to ensure fresh data on load
    fetchCustomersFromFirestore().then((remoteUsers) => {
      if (!remoteUsers || remoteUsers.length === 0) return;
      let deletedList: string[] = [];
      try {
        const savedDeleted = localStorage.getItem('farmasi_deleted_customer_uids');
        if (savedDeleted) deletedList = JSON.parse(savedDeleted);
      } catch (e) {}

      const cleanList = remoteUsers.filter(c => 
        c.role !== 'admin' && 
        !(c.email && c.email.toLowerCase().includes('admin@farmasidruggist.com')) &&
        c.uid && !deletedList.includes(c.uid)
      );

      if (cleanList.length > 0) {
        setCustomerList(cleanList);
        try {
          localStorage.setItem('farmasi_customer_subscriptions', JSON.stringify(cleanList));
        } catch (e) {}
      }
    }).catch(() => {});

    // 2. Real-time snapshot listener
    const unsubscribe = subscribeToCustomersFirestore((firestoreCustomers) => {
      if (!firestoreCustomers) return;

      let deletedList: string[] = [];
      try {
        const savedDeleted = localStorage.getItem('farmasi_deleted_customer_uids');
        if (savedDeleted) deletedList = JSON.parse(savedDeleted);
      } catch (e) {}

      const cleanList = firestoreCustomers.filter(c => 
        c.role !== 'admin' && 
        !(c.email && c.email.toLowerCase().includes('admin@farmasidruggist.com')) &&
        c.uid && !deletedList.includes(c.uid)
      );

      setCustomerList(cleanList);
      try {
        localStorage.setItem('farmasi_customer_subscriptions', JSON.stringify(cleanList));
      } catch (e) {}
    });
    return () => unsubscribe();
  }, []);

  // Inisialisasi pelacakan pengunjung & sesi online real-time untuk seluruh platform
  useEffect(() => {
    const cleanupTracking = initVisitorTracking();
    return () => {
      cleanupTracking();
    };
  }, []);

  const handleRegisterOrSyncCustomer = (newUser: UserProfile) => {
    // Exclude admin accounts from being inserted into customer subscriptions
    if (newUser.role === 'admin' || (newUser.email && newUser.email.toLowerCase().includes('admin@farmasidruggist.com'))) {
      return;
    }

    // Save directly to Cloud Firestore
    saveUserProfileToFirestore(newUser).catch((err) => {
      console.warn('Could not sync user to Firestore:', err);
    });

    setCustomerList((prev) => {
      const existingIdx = prev.findIndex(c => 
        (c.email && newUser.email && c.email.toLowerCase() === newUser.email.toLowerCase()) || 
        (c.uid && newUser.uid && c.uid === newUser.uid)
      );

      let updated: UserProfile[];
      if (existingIdx >= 0) {
        updated = [...prev];
        updated[existingIdx] = {
          ...updated[existingIdx],
          name: newUser.name || updated[existingIdx].name,
          phone: newUser.phone || updated[existingIdx].phone,
          institution: newUser.institution || updated[existingIdx].institution,
          password: newUser.password || updated[existingIdx].password,
          subscriptionPlan: newUser.subscriptionPlan || updated[existingIdx].subscriptionPlan,
          subscriptionStatus: newUser.subscriptionStatus || updated[existingIdx].subscriptionStatus,
          role: newUser.role || updated[existingIdx].role
        };
      } else {
        const expiryDate = new Date();
        expiryDate.setMonth(expiryDate.getMonth() + 12);

        const newEntry: UserProfile = {
          uid: newUser.uid || 'cust-' + Date.now(),
          email: newUser.email,
          name: newUser.name || newUser.email.split('@')[0],
          password: newUser.password || '',
          phone: newUser.phone || '',
          institution: newUser.institution || '',
          licenseNumber: newUser.licenseNumber || '',
          notes: newUser.notes || '',
          role: newUser.role || 'free',
          subscriptionPlan: newUser.subscriptionPlan || 'Pemula',
          subscriptionStatus: newUser.subscriptionStatus || 'active',
          maxDrugsOverride: 99,
          canExportPdf: false,
          canAccessRenal: false,
          canAccessPolypharmacy: false,
          expiresAt: newUser.expiresAt || expiryDate.toISOString(),
          createdAt: newUser.createdAt || new Date().toISOString()
        };
        updated = [newEntry, ...prev];
      }

      try {
        localStorage.setItem('farmasi_customer_subscriptions', JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
  };

  const handleUpdateCustomers = (updated: UserProfile[]) => {
    setCustomerList(updated);
    try {
      localStorage.setItem('farmasi_customer_subscriptions', JSON.stringify(updated));
    } catch (e) {}

    // Sinkronisasi dengan currentUser jika akun yang sedang login ikut diperbarui
    if (currentUser) {
      const match = updated.find(
        (c) => c.uid === currentUser.uid || (c.email && currentUser.email && c.email.toLowerCase() === currentUser.email.toLowerCase())
      );
      if (match) {
        const syncedCurrentUser: UserProfile = { ...currentUser, ...match };
        setCurrentUser(syncedCurrentUser);
        try {
          localStorage.setItem('farmasi_current_user', JSON.stringify(syncedCurrentUser));
        } catch (e) {}
      }
    }

    // Sinkronisasi dengan adminUsers jika ada staf administrator yang diperbarui
    setAdminUsers((prev) => {
      let changed = false;
      const nextAdmins = prev.map((admin) => {
        const match = updated.find(
          (c) => c.uid === admin.id || (c.email && admin.email && c.email.toLowerCase() === admin.email.toLowerCase())
        );
        if (match && (admin.name !== match.name || admin.phone !== match.phone)) {
          changed = true;
          return {
            ...admin,
            name: match.name,
            phone: match.phone || admin.phone
          };
        }
        return admin;
      });
      if (changed) {
        try {
          localStorage.setItem('farmasi_admin_users', JSON.stringify(nextAdmins));
        } catch (e) {}
        return nextAdmins;
      }
      return prev;
    });
  };

  const [historyRecords, setHistoryRecords] = useState<InteractionCheckRecord[]>(() => {
    try {
      const saved = localStorage.getItem('farmasi_history_records');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return [];
  });

  // Modals & Selections
  const [showAuthModal, setShowAuthModal] = useState<boolean>(false);
  const [showPricingModal, setShowPricingModal] = useState<boolean>(false);
  const [showProfileModal, setShowProfileModal] = useState<boolean>(false);
  const [showAntigravityUpdateModal, setShowAntigravityUpdateModal] = useState<boolean>(false);
  const [showChangelogModal, setShowChangelogModal] = useState<boolean>(false);
  const [selectedDrugForDetail, setSelectedDrugForDetail] = useState<Drug | null>(null);

  // Mandatory Profile Completion Guard:
  // Non-admin users who haven't filled in institution or phone must complete their profile before accessing the workspace
  const isProfileIncomplete = Boolean(
    currentUser &&
    currentUser.role !== 'admin' &&
    (!currentUser.institution?.trim() || !currentUser.phone?.trim())
  );
  const [preselectedDrugName, setPreselectedDrugName] = useState<string>('');
  const [preselectedDrugNames, setPreselectedDrugNames] = useState<string[]>([]);
  const [preselectedPioDrug, setPreselectedPioDrug] = useState<Drug | null>(null);
  const [searchQueryForDirectory, setSearchQueryForDirectory] = useState<string>('');
  const [reportModalData, setReportModalData] = useState<{
    selectedDrugs: Drug[];
    interactions: DrugInteraction[];
  } | null>(null);

  const handleAddToPioCard = (drug: Drug) => {
    setPreselectedPioDrug(drug);
    handleSelectTab('whatsapp-pio');
  };

  const [showTrialConfirmModal, setShowTrialConfirmModal] = useState<boolean>(false);
  const [showTrialExpiredModal, setShowTrialExpiredModal] = useState<boolean>(false);
  const [isActivatingTrial, setIsActivatingTrial] = useState<boolean>(false);

  // Helper remaining trial time
  const getTrialRemainingText = (expiresAt?: string): string => {
    if (!expiresAt) return '';
    const diff = new Date(expiresAt).getTime() - Date.now();
    if (diff <= 0) return 'Telah Berakhir';
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);
    const remainingHours = hours % 24;
    if (days > 0) {
      return `${days} Hari ${remainingHours} Jam`;
    }
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${remainingHours} Jam ${minutes} Menit`;
  };

  const isTrialActive = Boolean(
    currentUser?.subscriptionStatus === 'trial' &&
    currentUser?.expiresAt &&
    new Date(currentUser.expiresAt).getTime() > Date.now()
  );

  const isProUser = Boolean(
    currentUser?.role === 'admin' ||
    (currentUser?.subscriptionPlan === 'Pro' && currentUser?.subscriptionStatus === 'active') ||
    isTrialActive
  );

  // Auto-downgrade check when trial expires
  useEffect(() => {
    if (!currentUser) return;
    if (currentUser.subscriptionStatus === 'trial') {
      const expiryTime = currentUser.expiresAt ? new Date(currentUser.expiresAt).getTime() : 0;
      if (expiryTime > 0 && Date.now() >= expiryTime) {
        const downgradedUser: UserProfile = {
          ...currentUser,
          subscriptionPlan: 'Pemula',
          subscriptionStatus: 'active',
          hasClaimedTrial: true,
          notes: (currentUser.notes ? currentUser.notes + ' | ' : '') + 'Masa uji coba 3 hari selesai otomatis'
        };
        handleSaveUserProfile(downgradedUser);
        setShowTrialExpiredModal(true);
      }
    }
  }, [currentUser]);

  const handleUpdateTrialSettings = (newSettings: TrialSettings) => {
    setTrialSettings(newSettings);
    try {
      localStorage.setItem('farmasi_trial_settings', JSON.stringify(newSettings));
    } catch (e) {}
    saveTrialSettingsToFirestore(newSettings).catch((err) => {
      console.warn('Could not sync trial settings to Firestore:', err);
    });
  };

  const handleToggleTrialStatus = () => {
    const updated: TrialSettings = {
      ...trialSettings,
      isEnabled: !trialSettings.isEnabled
    };
    handleUpdateTrialSettings(updated);
  };

  const handleStartThreeDayTrial = () => {
    if (!currentUser) {
      setShowAuthModal(true);
      return;
    }
    if (!trialSettings.isEnabled) {
      alert('Fitur uji coba (trial) gratis saat ini sedang ditutup/dinonaktifkan oleh administrator.');
      return;
    }
    if (currentUser.hasClaimedTrial && !trialSettings.allowReTrial) {
      alert(`Akun Anda sudah pernah menggunakan masa uji coba ${trialSettings.durationDays || 3} hari.`);
      return;
    }
    setShowTrialConfirmModal(true);
  };

  const handleConfirmStartTrial = async () => {
    if (!currentUser) return;
    setIsActivatingTrial(true);
    try {
      const days = trialSettings.durationDays || 3;
      const expiry = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString();
      const updatedUser: UserProfile = {
        ...currentUser,
        subscriptionPlan: 'Pro',
        subscriptionStatus: 'trial',
        trialStartedAt: new Date().toISOString(),
        expiresAt: expiry,
        hasClaimedTrial: true,
        notes: (currentUser.notes ? currentUser.notes + ' | ' : '') + `Aktivasi mandiri uji coba Pro ${days} hari`
      };
      await handleSaveUserProfile(updatedUser);
      setShowTrialConfirmModal(false);
    } catch (err) {
      console.error('Failed to activate trial:', err);
      alert('Gagal mengaktifkan uji coba. Silakan coba lagi.');
    } finally {
      setIsActivatingTrial(false);
    }
  };

  const handleSimulateTrial = async (mode: 'free-new' | 'start-trial' | 'trial-expired' | 'reset-admin') => {
    if (!currentUser) return;
    if (mode === 'free-new') {
      const updated: UserProfile = {
        ...currentUser,
        role: 'free',
        subscriptionPlan: 'Pemula',
        subscriptionStatus: 'active',
        hasClaimedTrial: false,
        expiresAt: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString()
      };
      await handleSaveUserProfile(updated);
    } else if (mode === 'start-trial') {
      const days = trialSettings.durationDays || 3;
      const expiry = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString();
      const updated: UserProfile = {
        ...currentUser,
        role: 'customer',
        subscriptionPlan: 'Pro',
        subscriptionStatus: 'trial',
        trialStartedAt: new Date().toISOString(),
        expiresAt: expiry,
        hasClaimedTrial: true
      };
      await handleSaveUserProfile(updated);
    } else if (mode === 'trial-expired') {
      const updated: UserProfile = {
        ...currentUser,
        role: 'free',
        subscriptionPlan: 'Pemula',
        subscriptionStatus: 'active',
        hasClaimedTrial: true,
        expiresAt: new Date(Date.now() - 1000).toISOString()
      };
      await handleSaveUserProfile(updated);
      setShowTrialExpiredModal(true);
    } else if (mode === 'reset-admin') {
      const updated: UserProfile = {
        ...currentUser,
        role: 'admin',
        subscriptionPlan: 'Pro',
        subscriptionStatus: 'active',
        hasClaimedTrial: false,
        expiresAt: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString()
      };
      await handleSaveUserProfile(updated);
    }
  };

  const renderProFeatureGate = (featureTitle: string, featureDescription: string) => (
    <ProFeatureGate
      featureTitle={featureTitle}
      featureDescription={featureDescription}
      onOpenPricingModal={() => setShowPricingModal(true)}
      onOpenAuthModal={() => setShowAuthModal(true)}
      isLoggedIn={Boolean(currentUser)}
      onStartTrial={handleStartThreeDayTrial}
      hasClaimedTrial={Boolean(currentUser?.hasClaimedTrial)}
      isTrialActive={isTrialActive}
      isTrialEnabled={trialSettings.isEnabled}
      trialDurationDays={trialSettings.durationDays}
    />
  );

  // Sync currentUser & activeTab to localStorage
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('farmasi_current_user', JSON.stringify(currentUser));
    } else {
      localStorage.setItem('farmasi_current_user', 'null_session');
    }
  }, [currentUser]);

  useEffect(() => {
    if (activeTab) {
      localStorage.setItem('farmasi_active_tab', activeTab);
    }
  }, [activeTab]);

  // Sync datasets to localStorage for offline / demo mode persistence
  useEffect(() => {
    try {
      localStorage.setItem('farmasi_custom_drugs', JSON.stringify(drugs));
    } catch (e) {}
  }, [drugs]);

  useEffect(() => {
    try {
      localStorage.setItem('farmasi_custom_interactions', JSON.stringify(interactions));
    } catch (e) {}
  }, [interactions]);

  useEffect(() => {
    try {
      localStorage.setItem('farmasi_food_interactions', JSON.stringify(foodInteractions));
    } catch (e) {}
  }, [foodInteractions]);

  useEffect(() => {
    try {
      localStorage.setItem('farmasi_duplication_rules', JSON.stringify(duplicationRules));
    } catch (e) {}
  }, [duplicationRules]);

  useEffect(() => {
    try {
      localStorage.setItem('farmasi_audit_logs', JSON.stringify(auditLogs));
    } catch (e) {}
  }, [auditLogs]);

  useEffect(() => {
    try {
      localStorage.setItem('farmasi_admin_users', JSON.stringify(adminUsers));
    } catch (e) {}
  }, [adminUsers]);

  useEffect(() => {
    try {
      localStorage.setItem('farmasi_clinic_branding', JSON.stringify(clinicBranding));
    } catch (e) {}
  }, [clinicBranding]);

  // Load Firestore data on mount
  useEffect(() => {
    async function loadData() {
      try {
        await seedFirestoreIfEmpty();
        const firestoreDrugs = await fetchAllDrugs();
        if (firestoreDrugs.length > 0) {
          setDrugs(firestoreDrugs);
        }
        const firestoreInteractions = await fetchAllInteractions();
        if (firestoreInteractions.length > 0) {
          setInteractions(firestoreInteractions);
        }

        // Load Clinic Branding from Firestore
        const remoteBranding = await fetchClinicBrandingFromFirestore();
        if (remoteBranding && remoteBranding.clinicName) {
          setClinicBranding(remoteBranding);
          try {
            localStorage.setItem('farmasi_clinic_branding', JSON.stringify(remoteBranding));
          } catch (e) {}
        }

        // Load Payment Settings from Firestore
        const remotePayments = await fetchPaymentSettingsFromFirestore();
        if (remotePayments) {
          setPaymentSettings(remotePayments);
          try {
            localStorage.setItem('farmasi_payment_settings', JSON.stringify(remotePayments));
          } catch (e) {}
        }

        // Load Trial Settings from Firestore
        const remoteTrial = await fetchTrialSettingsFromFirestore();
        if (remoteTrial) {
          setTrialSettings(remoteTrial);
          try {
            localStorage.setItem('farmasi_trial_settings', JSON.stringify(remoteTrial));
          } catch (e) {}
        }

        // Load Admin Team from Firestore
        const remoteAdmins = await fetchAdminTeamFromFirestore();
        if (remoteAdmins && remoteAdmins.length > 0) {
          setAdminUsers(remoteAdmins);
          try {
            localStorage.setItem('farmasi_admin_users', JSON.stringify(remoteAdmins));
          } catch (e) {}
        }
      } catch (err) {
        console.warn('Initializing with default datasets:', err);
      }
    }
    loadData();
  }, []);

  // Fetch history when user changes
  useEffect(() => {
    if (currentUser?.uid) {
      fetchUserHistory(currentUser.uid).then((records) => {
        if (records && records.length > 0) {
          setHistoryRecords(records);
          try {
            localStorage.setItem('farmasi_history_records', JSON.stringify(records));
          } catch (e) {}
        } else {
          // Fallback ke localStorage jika Firestore belum memiliki riwayat, dan migrasikan ke cloud
          try {
            const saved = localStorage.getItem('farmasi_history_records');
            if (saved) {
              const localParsed: InteractionCheckRecord[] = JSON.parse(saved);
              const userLocal = localParsed.filter(r => r.userId === currentUser.uid);
              if (userLocal.length > 0) {
                setHistoryRecords(userLocal);
                userLocal.forEach(r => {
                  saveInteractionCheckHistory(r).catch(() => {});
                });
                return;
              }
            }
          } catch (e) {}
          setHistoryRecords([]);
        }
      });
    } else {
      setHistoryRecords([]);
    }
  }, [currentUser]);

  // Protective guard: if not logged in or non-admin on restricted tab, redirect to landing
  useEffect(() => {
    if (!currentUser) {
      const savedUser = localStorage.getItem('farmasi_current_user');
      if (!savedUser || savedUser === 'null_session') {
        if (activeTab !== 'landing') {
          setActiveTab('landing');
          localStorage.setItem('farmasi_active_tab', 'landing');
        }
      }
    } else if (currentUser && currentUser.role !== 'admin' && (activeTab === 'admin' || activeTab.startsWith('admin-'))) {
      setActiveTab('dashboard');
      localStorage.setItem('farmasi_active_tab', 'dashboard');
    }
  }, [currentUser, activeTab]);

  // Handlers
  const handleSelectTab = (tab: string) => {
    // Normalize tab aliases
    let targetTab = tab;
    if (targetTab === 'whatsapp' || targetTab === 'patient-cards') targetTab = 'whatsapp-pio';
    if (targetTab === 'bud-calculator') targetTab = 'bud';
    if (targetTab === 'beers') targetTab = 'polypharmacy';
    if (targetTab === 'usage-guide') targetTab = 'usage';
    if (targetTab === 'sop-pharmacy') targetTab = 'sop';
    if (targetTab === 'pediatric-dosing') targetTab = 'pediatric';
    if (targetTab === 'competency-center' || targetTab === 'ukmppai') targetTab = 'competency';
    if (targetTab === 'uktvk' || targetTab === 'uktvf') targetTab = 'competency-vokasi';
    if (targetTab === 'drug-notes' || targetTab === 'hafalan' || targetTab === 'jembatan-keledai') targetTab = 'drug-notes';

    if (targetTab === 'pricing') {
      if (activeTab === 'landing') {
        const pricingElem = document.getElementById('pricing-section');
        if (pricingElem) {
          pricingElem.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }
      setShowPricingModal(true);
      return;
    }

    // Enforce auth requirement for internal clinical workspace tools when user is not logged in (user must login first)
    if (!currentUser && targetTab !== 'landing') {
      setPendingTargetTab(targetTab);
      setShowAuthModal(true);
      return;
    }

    if ((targetTab === 'admin' || targetTab.startsWith('admin-') || targetTab === 'instagram-studio') && currentUser?.role !== 'admin') {
      setPendingTargetTab('admin-instagram');
      setShowAuthModal(true);
      return;
    }

    if (targetTab === 'instagram-studio') {
      targetTab = 'admin-instagram';
    }

    setActiveTab(targetTab);
    localStorage.setItem('farmasi_active_tab', targetTab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenSwamedikasiWithProtocol = (protocolId?: string) => {
    if (protocolId) {
      setPreselectedSwamedikasiProtocolId(protocolId);
    }
    handleSelectTab('swamedikasi');
  };

  const handleOpenDrugDetailByName = (drugName: string) => {
    if (!drugName) return;
    const q = drugName.toLowerCase().trim();
    const found = drugs.find(d => 
      d.name.toLowerCase() === q ||
      d.genericName.toLowerCase() === q ||
      d.name.toLowerCase().includes(q) ||
      d.genericName.toLowerCase().includes(q) ||
      d.brandNames?.some(b => b.toLowerCase() === q)
    );
    if (found) {
      setSelectedDrugForDetail(found);
    }
  };

  const handleHeroSearchDrug = (query: string) => {
    if (!currentUser) {
      setShowAuthModal(true);
      return;
    }
    setSearchQueryForDirectory(query);
    setActiveTab('drugs');
  };

  const handleCheckInteractionWith = (targetDrugName: string) => {
    if (!currentUser) {
      setShowAuthModal(true);
      return;
    }
    setPreselectedDrugName(targetDrugName);
    setActiveTab('interactions');
  };

  // Listen to Firebase Auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      // Jika proses pendaftaran akun baru sedang berjalan di registerWithEmail, jangan potong alurnya
      if (isRegisteringAccount) {
        return;
      }

      if (firebaseUser && firebaseUser.email) {
        const email = firebaseUser.email.toLowerCase();
        const isAdmin = email === 'admin@farmasidruggist.com' || 
                        email.includes('admin') || 
                        INITIAL_ADMIN_USERS.some(a => a.email && a.email.toLowerCase() === email);

        // Block unverified email users from automatic dashboard entry (except administrators)
        if (!isAdmin && !firebaseUser.emailVerified) {
          try {
            await logoutUser();
          } catch (e) {}
          setCurrentUser((prev) => (prev && prev.email.toLowerCase() === email ? null : prev));
          return;
        }

        let profile = await getUserProfileFromFirestore(firebaseUser.uid);
        if (!profile) {
          // Jika dokumen profil tidak ada di Firestore (misal akun telah dihapus oleh Admin),
          // JANGAN membangkitkan/membuat ulang akun tersebut!
          if (!isAdmin) {
            try {
              await logoutUser();
            } catch (e) {}
            setCurrentUser((prev) => (prev && prev.email.toLowerCase() === email ? null : prev));
            return;
          }

          const expiryDate = new Date();
          expiryDate.setFullYear(expiryDate.getFullYear() + 1);

          profile = {
            uid: firebaseUser.uid,
            email: email,
            name: firebaseUser.displayName || email.split('@')[0] || 'User',
            role: 'admin',
            subscriptionPlan: 'Pro',
            subscriptionStatus: 'active',
            isEmailVerified: true,
            createdAt: new Date().toISOString(),
            expiresAt: expiryDate.toISOString()
          };
          await saveUserProfileToFirestore(profile);
        } else if (isAdmin && profile.role !== 'admin') {
          profile = {
            ...profile,
            role: 'admin',
            subscriptionPlan: 'Pro',
            subscriptionStatus: 'active',
            isEmailVerified: true
          };
          await saveUserProfileToFirestore(profile);
        } else if (profile.subscriptionPlan === 'Klinik' || profile.subscriptionPlan === 'Elite') {
          profile = {
            ...profile,
            subscriptionPlan: 'Pro'
          };
          await saveUserProfileToFirestore(profile);
        }

        setCurrentUser(profile);
        localStorage.setItem('farmasi_current_user', JSON.stringify(profile));

        // Auto-navigate from landing to workspace/admin upon authentication
        setActiveTab((prevTab) => {
          if (pendingTargetTab) {
            const dest = (pendingTargetTab.startsWith('admin') && profile.role !== 'admin') 
              ? 'dashboard' 
              : pendingTargetTab;
            localStorage.setItem('farmasi_active_tab', dest);
            setPendingTargetTab(null);
            return dest;
          }
          if (prevTab === 'landing') {
            const nextTab = profile.role === 'admin' ? 'admin' : 'dashboard';
            localStorage.setItem('farmasi_active_tab', nextTab);
            return nextTab;
          }
          return prevTab;
        });
      }
    });
    return () => unsubscribe();
  }, [pendingTargetTab]);

  const handleLoginSuccess = (user: UserProfile) => {
    setCurrentUser(user);
    setShowAuthModal(false);

    let targetTab = pendingTargetTab;
    setPendingTargetTab(null);

    // If no pending target tab, use role-based default
    if (!targetTab || targetTab === 'landing') {
      targetTab = user.role === 'admin' ? 'admin' : 'dashboard';
    } else if (targetTab.startsWith('admin') && user.role !== 'admin') {
      targetTab = 'dashboard';
    }

    setActiveTab(targetTab);
    localStorage.setItem('farmasi_current_user', JSON.stringify(user));
    localStorage.setItem('farmasi_active_tab', targetTab);
  };

  const handleSaveUserProfile = async (updatedUser: UserProfile) => {
    // 1. Simpan perubahan ke Cloud Firestore
    await saveUserProfileToFirestore(updatedUser);

    // 2. Perbarui state currentUser dan localStorage
    setCurrentUser(updatedUser);
    try {
      localStorage.setItem('farmasi_current_user', JSON.stringify(updatedUser));
    } catch (e) {}

    // 3. Perbarui customerList agar langsung terlihat di Panel Subskripsi Customer Admin
    setCustomerList((prev) => {
      const exists = prev.some(
        (c) => c.uid === updatedUser.uid || (c.email && updatedUser.email && c.email.toLowerCase() === updatedUser.email.toLowerCase())
      );
      let updated: UserProfile[];
      if (exists) {
        updated = prev.map((c) =>
          (c.uid === updatedUser.uid || (c.email && updatedUser.email && c.email.toLowerCase() === updatedUser.email.toLowerCase()))
            ? { ...c, ...updatedUser }
            : c
        );
      } else {
        updated = [updatedUser, ...prev];
      }
      try {
        localStorage.setItem('farmasi_customer_subscriptions', JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });

    // 4. Perbarui adminUsers jika akun ini adalah admin atau terdaftar di adminUsers
    setAdminUsers((prev) => {
      const matchIndex = prev.findIndex(
        (a) => (a.id === updatedUser.uid) || (a.email && updatedUser.email && a.email.toLowerCase() === updatedUser.email.toLowerCase())
      );
      if (matchIndex >= 0) {
        const updatedAdminUsers = [...prev];
        updatedAdminUsers[matchIndex] = {
          ...updatedAdminUsers[matchIndex],
          name: updatedUser.name,
          phone: updatedUser.phone || updatedAdminUsers[matchIndex].phone
        };
        try {
          localStorage.setItem('farmasi_admin_users', JSON.stringify(updatedAdminUsers));
        } catch (e) {}
        return updatedAdminUsers;
      }
      return prev;
    });

    setShowProfileModal(false);
  };

  // Heartbeat Presence: update lastActiveAt & isOnline for currentUser
  useEffect(() => {
    if (!currentUser?.uid) return;
    const sendHeartbeat = async () => {
      // Gunakan updateDoc agar dokumen yang sudah dihapus oleh Admin TIDAK terbuat kembali
      const updated = await sendUserHeartbeatToFirestore(currentUser.uid, true);
      // Jika dokumen sudah tidak ada di Firestore (telah dihapus oleh admin), logout akun ini
      if (!updated && currentUser.role !== 'admin' && currentUser.uid.length > 15) {
        const fresh = await getUserProfileFromFirestore(currentUser.uid);
        if (!fresh) {
          try {
            await logoutUser();
          } catch (e) {}
          setCurrentUser(null);
          localStorage.removeItem('farmasi_current_user');
        }
      }
    };

    sendHeartbeat();
    const interval = setInterval(sendHeartbeat, 60000);

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        sendHeartbeat();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [currentUser?.uid]);

  const handleLogout = async () => {
    if (currentUser?.uid) {
      sendUserHeartbeatToFirestore(currentUser.uid, false).catch(() => {});
    }
    try {
      await logoutUser();
    } catch (err) {
      console.error('Logout error:', err);
    }
    setCurrentUser(null);
    setActiveTab('landing');
    setShowAuthModal(true);
    localStorage.setItem('farmasi_current_user', 'null_session');
    localStorage.setItem('farmasi_active_tab', 'landing');
  };

  const handleSubscribeSuccess = (planName: 'Pro' | string) => {
    if (currentUser) {
      const updatedUser: UserProfile = {
        ...currentUser,
        subscriptionPlan: planName,
        subscriptionStatus: 'active'
      };
      setCurrentUser(updatedUser);
      handleRegisterOrSyncCustomer(updatedUser);
    }
    setShowPricingModal(false);
  };

  const handleSaveHistoryRecord = async (
    drugNames: string[],
    interactionCount: number,
    highestSeverity: SeverityLevel | 'None'
  ) => {
    if (!currentUser) return;

    const newRecord: Omit<InteractionCheckRecord, 'id'> = {
      userId: currentUser.uid,
      userEmail: currentUser.email,
      drugs: drugNames,
      timestamp: new Date().toISOString(),
      interactionCount,
      highestSeverity
    };

    const docId = await saveInteractionCheckHistory(newRecord);
    const fullRecord: InteractionCheckRecord = { id: docId, ...newRecord };

    setHistoryRecords((prev) => {
      const updated = [fullRecord, ...prev];
      try {
        localStorage.setItem('farmasi_history_records', JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
  };

  const handlePrintHistoryReport = (record: InteractionCheckRecord) => {
    const matchedDrugs: Drug[] = record.drugs.map((dName, idx) => {
      const found = drugs.find(
        (d) =>
          d.name.toLowerCase() === dName.toLowerCase() ||
          (d.genericName && d.genericName.toLowerCase() === dName.toLowerCase())
      );
      if (found) return found;
      return {
        id: 'hist-' + idx,
        name: dName,
        genericName: dName,
        brandNames: [],
        atcCode: '-',
        category: 'Resep Pasien',
        dosage: '-',
        indication: '-',
        mechanism: '-'
      };
    });

    const matchedInteractions: DrugInteraction[] = [];
    for (let i = 0; i < matchedDrugs.length; i++) {
      for (let j = i + 1; j < matchedDrugs.length; j++) {
        const pair = resolveInteractionPair(matchedDrugs[i], matchedDrugs[j], interactions);
        if (pair) matchedInteractions.push(pair);
      }
    }

    setReportModalData({
      selectedDrugs: matchedDrugs,
      interactions: matchedInteractions
    });
  };

  const handleSendWhatsappHistory = (record: InteractionCheckRecord) => {
    const firstDrug = drugs.find((d) =>
      record.drugs.some((rd) => rd.toLowerCase() === d.name.toLowerCase())
    );
    if (firstDrug) {
      setPreselectedPioDrug(firstDrug);
    }
    handleSelectTab('whatsapp-pio');
  };

  const handleUpdateHistoryNotes = async (recordId: string, notes: string) => {
    setHistoryRecords((prev) => {
      const updated = prev.map((r) => (r.id === recordId ? { ...r, notes } : r));
      try {
        localStorage.setItem('farmasi_history_records', JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
    await updateUserHistoryNotes(recordId, notes);
  };

  const handleDeleteHistoryRecord = async (recordId: string) => {
    setHistoryRecords((prev) => {
      const updated = prev.filter((r) => r.id !== recordId);
      try {
        localStorage.setItem('farmasi_history_records', JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
    await deleteUserHistoryRecord(recordId);
  };

  const handleClearAllHistoryRecords = async () => {
    const uid = currentUser?.uid;
    setHistoryRecords([]);
    try {
      localStorage.removeItem('farmasi_history_records');
    } catch (e) {}
    if (uid) {
      await clearAllUserHistory(uid);
    }
  };

  const logAdminAction = (
    actionType: AuditActionType,
    targetEntity: 'Obat' | 'Interaksi DDInter' | 'Subskripsi Customer' | 'Tarif & Fitur' | 'Interaksi Makanan' | 'Duplikasi Terapi' | 'Sistem',
    summaryText: string,
    detailsObj?: any
  ) => {
    const newLog: SystemAuditLog = {
      id: 'log-' + Date.now(),
      timestamp: new Date().toISOString(),
      actorName: currentUser ? currentUser.name : 'System Admin',
      actorEmail: currentUser ? currentUser.email : 'admin@farmasidruggist.com',
      actionType,
      targetEntity,
      summaryText,
      detailsJson: detailsObj ? JSON.stringify(detailsObj, null, 2) : undefined,
      ipAddress: '180.252.112.45'
    };

    setAuditLogs((prev) => [newLog, ...prev]);
  };

  const handleUpdatePricingPlans = (updatedPlans: PricingPlan[]) => {
    setPricingPlans(updatedPlans);
    logAdminAction('UPDATE', 'Tarif & Fitur', 'Memperbarui pengaturan tarif dan daftar fitur paket berlangganan.', updatedPlans);
  };

  const handleAdminSaveDrug = async (drug: Drug) => {
    await saveDrugToFirestore(drug);
    setDrugs((prev) => {
      const idx = prev.findIndex((d) => d.id === drug.id);
      if (idx >= 0) {
        const updated = [...prev];
        updated[idx] = drug;
        return updated;
      }
      return [drug, ...prev];
    });
    logAdminAction('UPDATE', 'Obat', `Menyimpan monografi obat "${drug.name}".`, drug);
  };

  const handleAdminDeleteDrug = async (drugId: string) => {
    const drugToDelete = drugs.find(d => d.id === drugId);
    await deleteDrugFromFirestore(drugId);
    setDrugs((prev) => prev.filter((d) => d.id !== drugId));
    logAdminAction('DELETE', 'Obat', `Menghapus obat "${drugToDelete?.name || drugId}" dari database.`, { drugId });
  };

  const handleAdminSaveInteraction = async (inter: DrugInteraction) => {
    await saveInteractionToFirestore(inter);
    setInteractions((prev) => [inter, ...prev]);
    logAdminAction('CREATE', 'Interaksi DDInter', `Menambahkan pasangan interaksi "${inter.drugAName} ⚡ ${inter.drugBName}".`, inter);
  };

  const handleSeedFirebase = async () => {
    await seedFirestoreIfEmpty();
    const firestoreDrugs = await fetchAllDrugs();
    setDrugs(firestoreDrugs);
    const firestoreInteractions = await fetchAllInteractions();
    setInteractions(firestoreInteractions);
    logAdminAction('SYNC', 'Sistem', 'Melakukan sinkronisasi massal basis data DDInter ke Cloud Firebase.');
  };

  const handleSaveFoodInteraction = async (dfi: DrugFoodInteraction) => {
    setFoodInteractions((prev) => {
      const idx = prev.findIndex(item => item.id === dfi.id);
      if (idx >= 0) {
        const updated = [...prev];
        updated[idx] = dfi;
        return updated;
      }
      return [dfi, ...prev];
    });
    logAdminAction('UPDATE', 'Interaksi Makanan', `Menyimpan interaksi obat-makanan "${dfi.drugName} ⚡ ${dfi.foodName}".`, dfi);
  };

  const handleDeleteFoodInteraction = async (id: string) => {
    const target = foodInteractions.find(f => f.id === id);
    setFoodInteractions((prev) => prev.filter(item => item.id !== id));
    logAdminAction('DELETE', 'Interaksi Makanan', `Menghapus interaksi obat-makanan "${target?.drugName || id}".`, { id });
  };

  const handleSaveDuplicationRule = async (rule: TherapeuticDuplication) => {
    setDuplicationRules((prev) => {
      const idx = prev.findIndex(item => item.id === rule.id);
      if (idx >= 0) {
        const updated = [...prev];
        updated[idx] = rule;
        return updated;
      }
      return [rule, ...prev];
    });
    logAdminAction('UPDATE', 'Duplikasi Terapi', `Menyimpan aturan duplikasi terapi "${rule.therapeuticClass}".`, rule);
  };

  const handleDeleteDuplicationRule = async (id: string) => {
    const target = duplicationRules.find(d => d.id === id);
    setDuplicationRules((prev) => prev.filter(item => item.id !== id));
    logAdminAction('DELETE', 'Duplikasi Terapi', `Menghapus aturan duplikasi "${target?.therapeuticClass || id}".`, { id });
  };

  const handleSaveAdminUser = async (admin: AdminUser) => {
    setAdminUsers((prev) => {
      const idx = prev.findIndex(u => u.id === admin.id);
      if (idx >= 0) {
        const updated = [...prev];
        updated[idx] = admin;
        return updated;
      }
      return [admin, ...prev];
    });
    await saveAdminUserToFirestore(admin);
    logAdminAction('UPDATE', 'Sistem', `Menyimpan data staf administrator "${admin.name}" (Peran: ${admin.roleType}).`, admin);
  };

  const handleDeleteAdminUser = async (adminId: string) => {
    const target = adminUsers.find(u => u.id === adminId);
    setAdminUsers((prev) => prev.filter(u => u.id !== adminId));
    await deleteAdminUserFromFirestore(adminId);
    logAdminAction('DELETE', 'Sistem', `Menghapus akun staf administrator "${target?.name || adminId}".`, { adminId });
  };

  const handleSaveBranding = async (updated: ClinicBrandingSettings) => {
    setClinicBranding(updated);
    try {
      localStorage.setItem('farmasi_clinic_branding', JSON.stringify(updated));
    } catch (e) {}
    await saveClinicBrandingToFirestore(updated);
    logAdminAction('UPDATE', 'Sistem', `Memperbarui konfigurasi Kop Surat & Branding Instansi (${updated.clinicName}).`, updated);
  };

  const handleSavePaymentSettings = async (updated: PaymentMethodSettings) => {
    setPaymentSettings(updated);
    try {
      localStorage.setItem('farmasi_payment_settings', JSON.stringify(updated));
    } catch (e) {}
    await savePaymentSettingsToFirestore(updated);
    logAdminAction('UPDATE', 'Tarif & Fitur', `Memperbarui detail metode pembayaran QRIS, Rekening Bank, dan E-Wallet.`, updated);
  };

  const isLanding = activeTab === 'landing';

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#051418] font-sans text-slate-800 dark:text-slate-100 flex flex-col md:flex-row selection:bg-teal-900 selection:text-teal-100 transition-colors duration-300">

      {/* Sidebar Navigation - Hanya untuk tab selain Landing Page */}
      {!isLanding && (
        <Sidebar
          activeTab={activeTab}
          setActiveTab={handleSelectTab}
          currentUser={currentUser}
          onOpenAuthModal={() => setShowAuthModal(true)}
          onLogout={handleLogout}
          onOpenPricingModal={() => setShowPricingModal(true)}
          onOpenChangelogModal={() => setShowChangelogModal(true)}
          mobileOpen={mobileSidebarOpen}
          setMobileOpen={setMobileSidebarOpen}
          theme={theme}
          onToggleTheme={handleToggleTheme}
        />
      )}

      {/* Container Utama Aplikasi with Modern Clinical Obsidian & Clean Slate Theme */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen bg-slate-50 dark:bg-[#090d16] relative overflow-x-clip transition-colors duration-200">
        
        {/* Subtle Ambient Glow Mesh Orbs matching Logo Palette */}
        <div className="fixed top-0 left-1/4 w-96 h-96 bg-[#156d67]/5 dark:bg-[#156d67]/15 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="fixed top-1/3 right-10 w-80 h-80 bg-[#3dbfd1]/5 dark:bg-[#3dbfd1]/12 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="fixed bottom-10 left-1/3 w-96 h-96 bg-[#38b2a3]/5 dark:bg-[#2fa89b]/12 rounded-full blur-3xl pointer-events-none -z-10" />

        <Header
          activeTab={activeTab}
          setActiveTab={handleSelectTab}
          currentUser={currentUser}
          onOpenAuthModal={() => setShowAuthModal(true)}
          onLogout={handleLogout}
          onOpenPricingModal={() => setShowPricingModal(true)}
          onOpenChangelogModal={() => setShowChangelogModal(true)}
          onToggleMobileSidebar={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          theme={theme}
          onToggleTheme={handleToggleTheme}
          onOpenProfileModal={() => setShowProfileModal(true)}
          onStartTrial={handleStartThreeDayTrial}
          isTrialActive={isTrialActive}
          trialRemainingText={getTrialRemainingText(currentUser?.expiresAt)}
          hasClaimedTrial={Boolean(currentUser?.hasClaimedTrial)}
          isTrialEnabled={trialSettings.isEnabled}
        />

        <main className={`flex-1 ${isLanding ? '' : 'p-4 sm:p-6 lg:p-8'} print:p-0 print:m-0 print:w-full print:bg-white`}>
          {isLanding ? (
            <LandingPage
              drugs={drugs}
              interactions={interactions}
              foodInteractions={foodInteractions}
              onSelectTab={handleSelectTab}
              onOpenSwamedikasiProtocol={handleOpenSwamedikasiWithProtocol}
              currentUser={currentUser}
              onOpenPricingModal={() => setShowPricingModal(true)}
              onOpenAuthModal={() => setShowAuthModal(true)}
            />
          ) : (
            <React.Suspense fallback={<ClinicalTabSkeleton />}>
              {activeTab === 'dashboard' && (
                <Dashboard
                  drugs={drugs}
                  interactions={interactions}
                  historyRecords={historyRecords}
                  currentUser={currentUser}
                  onSelectTab={handleSelectTab}
                  onSearchDrug={handleHeroSearchDrug}
                  onCheckInteractionWith={handleCheckInteractionWith}
                  onOpenPricingModal={() => setShowPricingModal(true)}
                  onStartTrial={handleStartThreeDayTrial}
                  isTrialActive={isTrialActive}
                  trialRemainingText={getTrialRemainingText(currentUser?.expiresAt)}
                  hasClaimedTrial={Boolean(currentUser?.hasClaimedTrial)}
                  onSimulateTrial={handleSimulateTrial}
                  isTrialEnabled={trialSettings.isEnabled}
                  trialDurationDays={trialSettings.durationDays}
                  onToggleTrialStatus={handleToggleTrialStatus}
                />
              )}

              {(activeTab === 'drugs' || activeTab === 'directory') && (
                <DrugDirectory
                  drugs={drugs}
                  interactions={interactions}
                  currentUser={currentUser}
                  onSelectDrug={(drug) => setSelectedDrugForDetail(drug)}
                  onCheckInteractionWith={handleCheckInteractionWith}
                  onAddToPioCard={handleAddToPioCard}
                  initialSearchQuery={searchQueryForDirectory}
                  onSelectTab={handleSelectTab}
                />
              )}

              {activeTab === 'fornas' && (
                <FornasRestrictionsManager
                  drugs={drugs}
                  onSelectDrug={(drug) => setSelectedDrugForDetail(drug)}
                  onSelectTab={handleSelectTab}
                  onOpenChangelogModal={() => setShowChangelogModal(true)}
                />
              )}

              {activeTab === 'pregnancy' && (
                !(isProUser || currentUser?.canAccessPregnancy) ? (
                  renderProFeatureGate(
                    "Keamanan Obat Ibu Hamil & Menyusui (Pregnancy & Lactation Database)",
                    "Akses komprehensif penapisan risiko teratogenik FDA PLLR per trimester, profil ekskresi ASI (Hale’s L1–L5 & RID %), deteksi obat teratogenik Kategori X, serta direktori terapi lini pertama yang aman."
                  )
                ) : (
                  <PregnancyLactationChecker
                    onSelectTab={handleSelectTab}
                    onOpenPricingModal={() => setShowPricingModal(true)}
                    onOpenDrugDetail={handleOpenDrugDetailByName}
                  />
                )
              )}

              {activeTab === 'drug-lab' && (
                !(isProUser || currentUser?.canAccessDrugLab) ? (
                  renderProFeatureGate(
                    "Interaksi Obat dengan Uji Laboratorium (Drug-Lab Interactions)",
                    "Akses lengkap deteksi gangguan analit in vitro, pencegahan hasil positif/negatif palsu pemeriksaan biomarker kardiologi (Troponin), tiroid (TSH/FT4), fungsi ginjal (Kreatinin), glukosa strip & toksikologi narkoba urin."
                  )
                ) : (
                  <DrugLabInteractionChecker
                    onSelectTab={handleSelectTab}
                    onOpenPricingModal={() => setShowPricingModal(true)}
                  />
                )
              )}

              {activeTab === 'bud' && (
                !(isProUser || currentUser?.canAccessBud) ? (
                  renderProFeatureGate(
                    "Kalkulator Stabilitas & Beyond Use Date (BUD Racikan)",
                    "Akses lengkap penetapan batas kadaluarsa sediaan racikan padat bebas air (puyer/kapsul), sirup oral berair, krim/gel topikal, sirup kering rekonstitusi, tetes mata multidose & minidose, serta injeksi steril berstandar USP <795>, <797> & Farmakope Indonesia VI."
                  )
                ) : (
                  <BeyondUseDateCalculator
                    onSelectTab={handleSelectTab}
                    onOpenPricingModal={() => setShowPricingModal(true)}
                  />
                )
              )}

              {activeTab === 'herb-drug' && (
                !(isProUser || currentUser?.canAccessHerbDrug) ? (
                  renderProFeatureGate(
                    "Interaksi Herbal & Obat Indonesia (Herb-Drug Interactions)",
                    "Akses lengkap evaluasi penapisan interaksi sediaan Jamu, OHT & Fitofarmaka (Kunyit, Temulawak, Sambiloto, Bawang Putih, Ginkgo, Ginseng, Kumis Kucing, Daun Sirsak, Meniran) terhadap obat resep dokter, protokol penghentian pra-bedah & modul farmakologi herbal asli Indonesia."
                  )
                ) : (
                  <HerbDrugInteractionChecker
                    onSelectTab={handleSelectTab}
                    onOpenPricingModal={() => setShowPricingModal(true)}
                  />
                )
              )}

              {activeTab === 'drug-notes' && (
                !(isProUser || currentUser?.canAccessDrugNotes) ? (
                  renderProFeatureGate(
                    "Hafalan Obat: Jembatan Keledai & Rima Klinis",
                    "Kuasai kombinasi obat, rasionalitas formulasi, efek samping unik, antidotum, dan aturan minum dalam hitungan menit dengan rima suku kata yang mudah diingat seumur hidup."
                  )
                ) : (
                  <DrugNotesManager
                    onSelectTab={handleSelectTab}
                    onCheckInteractionWith={handleCheckInteractionWith}
                  />
                )
              )}

              {activeTab === 'latin-terms' && (
                <LatinAbbreviationsDictionary
                  onSelectTab={handleSelectTab}
                  clinicBranding={clinicBranding}
                />
              )}

              {activeTab === 'competency' && (
                !(isProUser || currentUser?.canAccessCompetency) ? (
                  renderProFeatureGate(
                    "Pusat Belajar Uji Kompetensi Apoteker Indonesia (UKMPPAI)",
                    "Akses lengkap rangkuman 4 domain blueprint nasional KFN/IAI, 653 bank soal kasus vignette apoteker, simulasi tryout CBT 200 soal/200 menit, kalkulator PK klinis, dan panduan 10 stase OSCE."
                  )
                ) : (
                  <PharmacyCompetencyCenter
                    forcedPortal="ukmppai"
                    onSelectTab={handleSelectTab}
                    onOpenPricingModal={() => setShowPricingModal(true)}
                  />
                )
              )}

              {activeTab === 'competency-vokasi' && (
                !(isProUser || currentUser?.canAccessCompetency) ? (
                  renderProFeatureGate(
                    "Pusat Belajar Uji Kompetensi Tenaga Vokasi Farmasi (UKTVF / APDFI)",
                    "Akses lengkap kurikulum & standar nasional APDFI 2024, 240 bank soal CBT autentik D3, simulasi tryout 180 soal/180 menit, modul alkes BMHP, evaluasi mutu fisik, dan peracikan sediaan."
                  )
                ) : (
                  <PharmacyCompetencyCenter
                    forcedPortal="uktvk"
                    onSelectTab={handleSelectTab}
                    onOpenPricingModal={() => setShowPricingModal(true)}
                  />
                )
              )}

              {activeTab === 'guidelines' && (
                !(isProUser || currentUser?.canAccessGuidelines) ? (
                  renderProFeatureGate(
                    "Database Panduan Terapi PNPK & Konsensus RI",
                    "Akses lengkap 23+ pedoman nasional pelayanan kedokteran Kemenkes RI, algoritma terapi lini pertama & kedua, Formularium Nasional (FORNAS), dan pencegahan risiko interaksi."
                  )
                ) : (
                  <ClinicalTherapyGuidelines
                    allDrugs={drugs}
                    onSelectDrugForDetail={(drug) => setSelectedDrugForDetail(drug)}
                    onCheckInteractionsWithRegimen={(drugNames) => {
                      setPreselectedDrugNames(drugNames);
                      setPreselectedDrugName(drugNames[0] || '');
                      handleSelectTab('interactions');
                    }}
                    clinicBranding={clinicBranding}
                  />
                )
              )}

              {activeTab === 'polypharmacy' && (
                !(isProUser || currentUser?.canAccessPolypharmacy) ? (
                  renderProFeatureGate(
                    "Evaluasi Skrining Resep & Polifarmasi Klinis",
                    "Analisis otomatis interaksi kompleks multi-obat, skrining potensi duplikasi terapi farmakologis, serta pencegahan efek samping polifarmasi pasien."
                  )
                ) : (
                  <ClinicalPolypharmacyEvaluator
                    allDrugs={drugs}
                    allInteractions={interactions}
                    foodInteractions={foodInteractions}
                    duplicationRules={duplicationRules}
                    clinicBranding={clinicBranding}
                    onSelectTab={handleSelectTab}
                  />
                )
              )}

              {activeTab === 'interactions' && (
                <InteractionChecker
                  drugs={drugs}
                  interactions={interactions}
                  currentUser={currentUser}
                  pricingPlans={pricingPlans}
                  onSaveHistory={handleSaveHistoryRecord}
                  onOpenPricingModal={() => setShowPricingModal(true)}
                  onOpenAuthModal={() => setShowAuthModal(true)}
                  onOpenReportModal={(selectedDrugs, matchedInteractions) =>
                    setReportModalData({ selectedDrugs, interactions: matchedInteractions })
                  }
                  preselectedDrugName={preselectedDrugName}
                  preselectedDrugNames={preselectedDrugNames}
                />
              )}

              {activeTab === 'side-effects' && (
                !(isProUser || currentUser?.canAccessSideEffects) ? (
                  renderProFeatureGate(
                    "Pusat Analisis Efek Samping Obat & Instrumen Farmakovigilans (MESO)",
                    "Evaluasi akumulasi beban toksisitas organ (Hepatotoksik, Nefrotoksik, Kardiotoksik, dll.), pelacak gejala KTD, algoritma kausalitas Naranjo & WHO-UMC, tingkat keparahan Hartwig, serta generator formulir kuning MESO BPOM."
                  )
                ) : (
                  <SideEffectChecker
                    allDrugs={drugs}
                    clinicBranding={clinicBranding}
                    onSelectTab={handleSelectTab}
                    isProUser={isProUser}
                    onOpenPricingModal={() => setShowPricingModal(true)}
                  />
                )
              )}

              {activeTab === 'usage' && (
                <MedicationUsageGuide
                  clinicBranding={clinicBranding}
                  onSelectTab={handleSelectTab}
                />
              )}

              {activeTab === 'sop' && (
                !(isProUser || currentUser?.canAccessSop) ? (
                  renderProFeatureGate(
                    "Modul Standar Operasional Prosedur (SOP) Farmasi Klinis",
                    "Koleksi SOP resmi pelayanan kefarmasian di apotek dan klinik: penapisan resep, penyerahan obat (dispensing), konseling PIO, dan pelaporan MESO."
                  )
                ) : (
                  <PharmacySopManager
                    clinicBranding={clinicBranding}
                  />
                )
              )}

              {activeTab === 'regulations' && (
                !(isProUser || currentUser?.canAccessRegulations) ? (
                  renderProFeatureGate(
                    "Database Regulasi & Standar Hukum Kefarmasian RI",
                    "Kompilasi undang-undang, Permenkes, dan standar akreditasi fasilitas pelayanan kefarmasian terkini di Indonesia."
                  )
                ) : (
                  <PharmacyRegulationsManager
                    clinicBranding={clinicBranding}
                  />
                )
              )}

              {activeTab === 'literature' && (
                !(isProUser || currentUser?.canAccessLiterature) ? (
                  renderProFeatureGate(
                    "Pusat Literatur Klinis, Matriks Bukti & Basis Ilmiah EBM",
                    "Akses komprehensif kepustakaan farmakologi klinis terakreditasi, basis data Evidence-Based Medicine (EBM), jurnal pedoman internasional, serta matriks pembuktian ilmiah untuk setiap parameter klinis obat."
                  )
                ) : (
                  <ClinicalLiterature
                    onSelectTab={handleSelectTab}
                  />
                )
              )}

              {activeTab === 'instagram-studio' && (
                currentUser?.role === 'admin' ? (
                  <InstagramPostStudio />
                ) : (
                  <div className="max-w-md mx-auto py-16 px-4 text-center space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-500 mx-auto flex items-center justify-center">
                      <span className="text-xl">📸</span>
                    </div>
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">Akses Terbatas Administrator</h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Modul Studio Konten &amp; Promosi Instagram kini dikhususkan untuk Administrator melalui Panel Admin.
                    </p>
                  </div>
                )
              )}

              {activeTab === 'swamedikasi' && (
                <SwamedikasiManager
                  drugs={drugs}
                  clinicBranding={clinicBranding}
                  initialProtocolId={preselectedSwamedikasiProtocolId}
                  onCheckInteractionWith={handleCheckInteractionWith}
                  onAddToPioCard={handleAddToPioCard}
                  onSelectTab={handleSelectTab}
                />
              )}

              {activeTab === 'education-generator' && (
                <EducationPromptGenerator clinicBranding={clinicBranding} />
              )}

              {activeTab === 'antimicrobial-stewardship' && (
                <AntimicrobialStewardshipManager
                  onSelectTab={handleSelectTab}
                />
              )}

              {activeTab === 'whatsapp-pio' && (
                !(isProUser || currentUser?.canAccessWhatsappPio) ? (
                  renderProFeatureGate(
                    "Kartu PIO Pasien Siap Kirim via WhatsApp",
                    "Buat kartu edukasi aturan pakai obat digital, pantangan makanan, dan instruksi penyimpanan, lalu kirim langsung ke WhatsApp pasien hanya dengan 1 kali klik."
                  )
                ) : (
                  <WhatsAppPatientCardManager
                    clinicBranding={clinicBranding}
                    drugs={drugs}
                    onSelectDrugForDetail={(drug) => setSelectedDrugForDetail(drug)}
                    preselectedDrug={preselectedPioDrug}
                  />
                )
              )}

              {activeTab === 'iv-compatibility' && (
                !(isProUser || currentUser?.canAccessIvCompatibility) ? (
                  renderProFeatureGate(
                    "Uji Kompatibilitas Injeksi IV, Y-Site & Stabilitas Rekonstitusi",
                    "Evaluasi kompatibilitas percabangan jalur infus bersama (Y-Site Co-Infusion), skrining presipitasi asam-basa, kompatibilitas pelarut infus (NS, D5W, RL), stabilitas BUD, dan titrasi syringe pump."
                  )
                ) : (
                  <IvCompatibilityChecker
                    onSelectTab={handleSelectTab}
                  />
                )
              )}

              {activeTab === 'toxicology' && (
                !(isProUser || currentUser?.canAccessToxicology) ? (
                  renderProFeatureGate(
                    "Toksikologi, Overdosis & Antidotum IGD",
                    "Rujukan cepat protokol penanganan intoksikasi darurat, dosis antidotum baku emas, toksidrom klinis, dekontaminasi, serta kalkulator interaktif Nomogram Rumack-Matthew sesuai standar Sentra Informasi Keracunan (SiKer) BPOM RI & WHO."
                  )
                ) : (
                  <ClinicalToxicologyManager
                    onDrugClick={handleHeroSearchDrug}
                  />
                )
              )}

              {activeTab === 'high-alert' && (
                !(isProUser || currentUser?.canAccessHighAlert) ? (
                  renderProFeatureGate(
                    "Manajemen Keamanan Obat High-Alert & LASA/NORUM",
                    "Standar Akreditasi Kemenkes STARKES SKP 3, ISMP & BPOM RI: Penulisan Tall-Man Letters, tata kelola Elektrolit Konsentrat, regulasi OOT & Prekursor, serta generator stiker label akreditasi rumah sakit."
                  )
                ) : (
                  <HighAlertSafetyManager
                    onDrugClick={handleHeroSearchDrug}
                  />
                )
              )}

              {activeTab === 'pediatric' && (
                !(isProUser || currentUser?.canAccessPediatric) ? (
                  renderProFeatureGate(
                    "Kalkulator Dosis Pediatrik & Konversi Racikan Puyer / Sirup",
                    "Hitung dosis terapi anak berbasis BB & BSA, konversi peracikan tablet utuh ke serbuk puyer dengan perhitungan zat pengisi Saccharum Lactis, dan takaran botol sirup."
                  )
                ) : (
                  <PediatricCompoundingCalculator
                    existingDrugs={drugs}
                    onCheckInteractions={(drugNames) => {
                      setPreselectedDrugNames(drugNames);
                      handleSelectTab('interactions');
                    }}
                  />
                )
              )}

              {activeTab === 'renal-adjuster' && (
                !(isProUser || currentUser?.canAccessRenal) ? (
                  renderProFeatureGate(
                    "Kalkulator Medis & Penyesuaian Dosis",
                    "Kalkulator farmakoterapi komprehensif: Klirens Ginjal (CrCl/eGFR), Skor Hepar (Child-Pugh & MELD), Konversi Opioid & Paliatif (OME CDC), Berat Badan Ideal (IBW), dan Oksigen Medis."
                  )
                ) : (
                  <RenalDoseAdjuster
                    drugs={drugs}
                    currentUser={currentUser}
                    onOpenPricingModal={() => setShowPricingModal(true)}
                  />
                )
              )}

              {activeTab === 'history' && (
                <HistoryList
                  historyRecords={historyRecords}
                  currentUser={currentUser}
                  onOpenPricingModal={() => setShowPricingModal(true)}
                  onOpenAuthModal={() => setShowAuthModal(true)}
                  onRecheckRecord={(record) => {
                    setPreselectedDrugNames(record.drugs);
                    setPreselectedDrugName(record.drugs[0] || '');
                    handleSelectTab('interactions');
                  }}
                  onPrintReport={handlePrintHistoryReport}
                  onSendWhatsapp={handleSendWhatsappHistory}
                  onUpdateRecordNotes={handleUpdateHistoryNotes}
                  onDeleteRecord={handleDeleteHistoryRecord}
                  onClearAllRecords={handleClearAllHistoryRecords}
                />
              )}

              {(activeTab === 'admin' || activeTab.startsWith('admin-')) && (
                <AdminPanel
                  drugs={drugs}
                  interactions={interactions}
                  currentUser={currentUser}
                  pricingPlans={pricingPlans}
                  paymentSettings={paymentSettings}
                  trialSettings={trialSettings}
                  onSaveTrialSettings={handleUpdateTrialSettings}
                  foodInteractions={foodInteractions}
                  duplicationRules={duplicationRules}
                  auditLogs={auditLogs}
                  adminUsers={adminUsers}
                  customers={customerList}
                  clinicBranding={clinicBranding}
                  onSaveBranding={handleSaveBranding}
                  onUpdateCustomers={handleUpdateCustomers}
                  initialSubTab={
                    activeTab === 'admin-interactions' ? 'interactions' :
                    activeTab === 'admin-firebase' ? 'firebase-sync' :
                    activeTab === 'admin-branding' ? 'branding' :
                    activeTab === 'admin-editor' ? 'advanced-editor' :
                    activeTab === 'admin-pricing' ? 'pricing-settings' :
                    activeTab === 'admin-users' ? 'team-admin' :
                    activeTab === 'admin-logs' ? 'audit-log' :
                    activeTab === 'admin-subscriptions' ? 'customers' :
                    activeTab === 'admin-instagram' || activeTab === 'instagram-studio' ? 'instagram-studio' : 'firebase-sync'
                  }
                  onSaveDrug={handleAdminSaveDrug}
                  onDeleteDrug={handleAdminDeleteDrug}
                  onSaveInteraction={handleAdminSaveInteraction}
                  onSeedFirebase={handleSeedFirebase}
                  onUpdatePricingPlans={handleUpdatePricingPlans}
                  onSavePaymentSettings={handleSavePaymentSettings}
                  onSaveFoodInteraction={handleSaveFoodInteraction}
                  onDeleteFoodInteraction={handleDeleteFoodInteraction}
                  onSaveDuplicationRule={handleSaveDuplicationRule}
                  onDeleteDuplicationRule={handleDeleteDuplicationRule}
                  onSaveAdminUser={handleSaveAdminUser}
                  onDeleteAdminUser={handleDeleteAdminUser}
                />
              )}

              {activeTab === 'subscriptions' && (
                <CustomerSubscriptionManager
                  currentUser={currentUser}
                  customers={customerList}
                  onUpdateCustomers={handleUpdateCustomers}
                />
              )}

              {activeTab === 'changelog' && (
                <div className="max-w-4xl mx-auto py-12 px-4 text-center space-y-4">
                  <div className="w-16 h-16 rounded-3xl bg-teal-500/20 text-teal-600 dark:text-teal-400 mx-auto flex items-center justify-center shadow-lg shadow-teal-500/10">
                    <Clock className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-black font-outfit text-slate-900 dark:text-white">
                    Pusat Riwayat Pembaruan Data Klinis
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-lg mx-auto leading-relaxed">
                    Sistem audit trail dan transparansi log pembaruan data obat resmi Kemenkes RI, FORNAS KMK 2025, dan singkatan resep Latin Farmasi.
                  </p>
                  <button
                    onClick={() => setShowChangelogModal(true)}
                    className="px-6 py-3 rounded-2xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm shadow-md cursor-pointer transition-all hover:scale-105"
                  >
                    Buka Jendela Riwayat Pembaruan Lengkap
                  </button>
                </div>
              )}

              {/* Safe Fallback for unrecognized tab or stale localStorage */}
              {![
                'landing', 'dashboard', 'drugs', 'directory', 'fornas', 'changelog', 'pregnancy', 'drug-lab', 'bud', 'herb-drug',
                'drug-notes', 'latin-terms', 'competency', 'competency-vokasi', 'guidelines', 'polypharmacy', 'interactions', 'side-effects', 'usage',
                'sop', 'regulations', 'literature', 'whatsapp-pio', 'iv-compatibility', 'toxicology', 'high-alert', 'pricing', 'pediatric',
                'renal-adjuster', 'history', 'subscriptions', 'swamedikasi', 'instagram-studio', 'education-generator', 'antimicrobial-stewardship'
              ].includes(activeTab) && !activeTab.startsWith('admin') && (
                currentUser ? (
                  <Dashboard
                    drugs={drugs}
                    interactions={interactions}
                    historyRecords={historyRecords}
                    currentUser={currentUser}
                    onSelectTab={handleSelectTab}
                    onSearchDrug={handleHeroSearchDrug}
                    onCheckInteractionWith={handleCheckInteractionWith}
                    onOpenPricingModal={() => setShowPricingModal(true)}
                    onStartTrial={handleStartThreeDayTrial}
                    isTrialActive={isTrialActive}
                    trialRemainingText={getTrialRemainingText(currentUser?.expiresAt)}
                    hasClaimedTrial={Boolean(currentUser?.hasClaimedTrial)}
                    onSimulateTrial={handleSimulateTrial}
                    isTrialEnabled={trialSettings.isEnabled}
                    trialDurationDays={trialSettings.durationDays}
                    onToggleTrialStatus={handleToggleTrialStatus}
                  />
                ) : (
                  <LandingPage
                    drugs={drugs}
                    interactions={interactions}
                    onSelectTab={handleSelectTab}
                    currentUser={currentUser}
                    onOpenPricingModal={() => setShowPricingModal(true)}
                    onOpenAuthModal={() => setShowAuthModal(true)}
                  />
                )
              )}
            </React.Suspense>
          )}
        </main>

        {/* Footer Hanya Tampil di Landing Page */}
        {isLanding && <Footer onSelectTab={handleSelectTab} />}
      </div>

      {/* MODALS WITH SUSPENSE */}
      <React.Suspense fallback={null}>
        {currentUser && (isProfileIncomplete || showProfileModal) && (
          <CompleteProfileModal
            currentUser={currentUser}
            isMandatory={isProfileIncomplete}
            onSave={handleSaveUserProfile}
            onClose={() => setShowProfileModal(false)}
            onLogout={handleLogout}
          />
        )}

        {showAuthModal && (
          <AuthModal
            onClose={() => setShowAuthModal(false)}
            onLoginSuccess={handleLoginSuccess}
            onNewAccountCreated={handleRegisterOrSyncCustomer}
          />
        )}

        {showPricingModal && (
          <PricingModal
            onClose={() => setShowPricingModal(false)}
            currentUser={currentUser}
            pricingPlans={pricingPlans}
            paymentSettings={paymentSettings}
            onSubscribeSuccess={handleSubscribeSuccess}
            onOpenAuthModal={() => setShowAuthModal(true)}
            onStartTrial={handleStartThreeDayTrial}
            isTrialActive={isTrialActive}
            trialRemainingText={getTrialRemainingText(currentUser?.expiresAt)}
            hasClaimedTrial={Boolean(currentUser?.hasClaimedTrial)}
            isTrialEnabled={trialSettings.isEnabled}
            trialDurationDays={trialSettings.durationDays}
          />
        )}

        <TrialConfirmModal
          isOpen={showTrialConfirmModal}
          onClose={() => setShowTrialConfirmModal(false)}
          onConfirm={handleConfirmStartTrial}
          loading={isActivatingTrial}
        />

        <TrialExpiredModal
          isOpen={showTrialExpiredModal}
          onClose={() => setShowTrialExpiredModal(false)}
          onOpenPricingModal={() => setShowPricingModal(true)}
        />

        {selectedDrugForDetail && (
          <DrugDetailModal
            drug={selectedDrugForDetail}
            allInteractions={interactions}
            allDrugs={drugs}
            onClose={() => setSelectedDrugForDetail(null)}
            onCheckInteractionWith={handleCheckInteractionWith}
            onAddToPioCard={handleAddToPioCard}
            onOpenPregnancyChecker={(drugName) => {
              setSelectedDrugForDetail(null);
              handleSelectTab('pregnancy');
            }}
          />
        )}

        {reportModalData && (
          <InteractionReportModal
            selectedDrugs={reportModalData.selectedDrugs}
            interactions={reportModalData.interactions}
            clinicBranding={clinicBranding}
            onClose={() => setReportModalData(null)}
          />
        )}

        {showChangelogModal && (
          <DataUpdateHistoryModal
            isOpen={showChangelogModal}
            onClose={() => setShowChangelogModal(false)}
            onSelectTab={handleSelectTab}
          />
        )}
      </React.Suspense>

    </div>
  );
}
