/**
 * Route Mapping & URL Utilities for FarmasiDruggist
 * Maps internal activeTab IDs to clean, human-readable SEO slugs, and vice versa.
 */

// Tab ID to canonical primary path
export const TAB_TO_PATH: Record<string, string> = {
  // Public & Auth
  'landing': '/',
  'pricing': '/pricing',
  'faq': '/faq',
  'support': '/bantuan',
  'login': '/login',
  'settings': '/pengaturan',

  // Core & Monograph
  'dashboard': '/dashboard',
  'drugs': '/obat',
  'directory': '/obat',
  'fornas': '/obat',
  'usage': '/cara-pakai',
  'history': '/dashboard',
  'changelog': '/changelog',

  // Screening & Prescription Safety
  'interactions': '/interaksi',
  'pregnancy': '/kehamilan',
  'drug-lab': '/interaksi-lab',
  'herb-drug': '/herbal',
  'side-effects': '/efek-samping',
  'iv-compatibility': '/injeksi-iv',
  'toxicology': '/toksikologi',
  'high-alert': '/high-alert',

  // Medical Calculators & Compounding
  'bud': '/kalkulator-bud',
  'pediatric': '/pediatrik',
  'renal-adjuster': '/kalkulator-ginjal',

  // Polypharmacy & Patient Education
  'swamedikasi': '/swamedikasi',
  'education-generator': '/edukasi-ai',
  'antimicrobial-stewardship': '/ppra',
  'polypharmacy': '/polifarmasi',
  'whatsapp-pio': '/whatsapp-pio',
  'guidelines': '/panduan-terapi',

  // Education, UKOM, SOP & Regulations
  'drug-notes': '/hafalan-obat',
  'latin-terms': '/singkatan-latin',
  'competency': '/ukmppai',
  'competency-vokasi': '/uktvf',
  'sop': '/sop',
  'regulations': '/regulasi',
  'literature': '/literatur',
  'subscriptions': '/admin/subscriptions',

  // Admin Panels
  'admin': '/admin',
  'admin-firebase': '/admin/firebase',
  'admin-branding': '/admin/branding',
  'admin-pricing': '/admin/pricing',
  'admin-users': '/admin/users',
  'admin-subscriptions': '/admin/subscriptions',
  'admin-instagram': '/admin/instagram',
  'admin-interactions': '/admin/interactions',
  'admin-editor': '/admin/editor',
  'admin-logs': '/admin/logs',
};

// Path (and aliases) to canonical tab ID
export const PATH_TO_TAB: Record<string, string> = {
  // Root
  '/': 'landing',
  '': 'landing',

  // Public & Auth
  '/pricing': 'pricing',
  '/pricing/': 'pricing',
  '/harga': 'pricing',
  '/harga/': 'pricing',
  '/paket': 'pricing',

  '/faq': 'faq',
  '/faq/': 'faq',

  '/bantuan': 'support',
  '/bantuan/': 'support',
  '/support': 'support',
  '/support/': 'support',
  '/help': 'support',

  '/login': 'login',
  '/login/': 'login',
  '/masuk': 'login',
  '/masuk/': 'login',

  // Core & Monograph
  '/dashboard': 'dashboard',
  '/dashboard/': 'dashboard',

  '/obat': 'drugs',
  '/obat/': 'drugs',
  '/drugs': 'drugs',
  '/drugs/': 'drugs',
  '/directory': 'drugs',
  '/fornas': 'drugs',

  '/cara-pakai': 'usage',
  '/cara-pakai/': 'usage',
  '/usage': 'usage',
  '/aturan-pakai': 'usage',

  '/riwayat': 'dashboard',
  '/riwayat/': 'dashboard',
  '/history': 'dashboard',

  '/changelog': 'changelog',
  '/changelog/': 'changelog',
  '/pembaruan': 'changelog',
  '/riwayat-update': 'changelog',
  '/updates': 'changelog',

  // Screening & Prescription Safety
  '/interaksi': 'interactions',
  '/interaksi/': 'interactions',
  '/interactions': 'interactions',
  '/interaksi-obat': 'interactions',
  '/ddinter': 'interactions',

  '/kehamilan': 'pregnancy',
  '/kehamilan/': 'pregnancy',
  '/pregnancy': 'pregnancy',
  '/bumil-busui': 'pregnancy',
  '/laktasi': 'pregnancy',

  '/interaksi-lab': 'drug-lab',
  '/interaksi-lab/': 'drug-lab',
  '/drug-lab': 'drug-lab',
  '/dli': 'drug-lab',

  '/herbal': 'herb-drug',
  '/herbal/': 'herb-drug',
  '/herb-drug': 'herb-drug',
  '/jamu': 'herb-drug',

  '/efek-samping': 'side-effects',
  '/efek-samping/': 'side-effects',
  '/side-effects': 'side-effects',
  '/adr': 'side-effects',
  '/naranjo': 'side-effects',

  '/injeksi-iv': 'iv-compatibility',
  '/injeksi-iv/': 'iv-compatibility',
  '/iv-compatibility': 'iv-compatibility',
  '/iv': 'iv-compatibility',

  '/toksikologi': 'toxicology',
  '/toksikologi/': 'toxicology',
  '/toxicology': 'toxicology',
  '/antidotum': 'toxicology',
  '/antidot': 'toxicology',

  '/high-alert': 'high-alert',
  '/high-alert/': 'high-alert',
  '/lasa': 'high-alert',
  '/skp3': 'high-alert',

  // Medical Calculators & Compounding
  '/kalkulator-bud': 'bud',
  '/kalkulator-bud/': 'bud',
  '/bud': 'bud',
  '/beyond-use-date': 'bud',

  '/pediatrik': 'pediatric',
  '/pediatrik/': 'pediatric',
  '/pediatric': 'pediatric',
  '/puyer': 'pediatric',
  '/dosis-anak': 'pediatric',
  '/pediatric-dosing': 'pediatric',

  '/kalkulator-ginjal': 'renal-adjuster',
  '/kalkulator-ginjal/': 'renal-adjuster',
  '/renal': 'renal-adjuster',
  '/renal-adjuster': 'renal-adjuster',
  '/klirens-ginjal': 'renal-adjuster',

  // Polypharmacy & Patient Education
  '/swamedikasi': 'swamedikasi',
  '/swamedikasi/': 'swamedikasi',
  '/triage': 'swamedikasi',

  '/edukasi-ai': 'education-generator',
  '/edukasi-ai/': 'education-generator',
  '/education-generator': 'education-generator',
  '/ai-prompt': 'education-generator',

  '/ppra': 'antimicrobial-stewardship',
  '/ppra/': 'antimicrobial-stewardship',
  '/antimicrobial-stewardship': 'antimicrobial-stewardship',
  '/antibiotik': 'antimicrobial-stewardship',
  '/stewardship': 'antimicrobial-stewardship',

  '/polifarmasi': 'polypharmacy',
  '/polifarmasi/': 'polypharmacy',
  '/polypharmacy': 'polypharmacy',
  '/beers': 'polypharmacy',

  '/whatsapp-pio': 'whatsapp-pio',
  '/whatsapp-pio/': 'whatsapp-pio',
  '/kartu-pasien': 'whatsapp-pio',
  '/pio': 'whatsapp-pio',

  '/panduan-terapi': 'guidelines',
  '/panduan-terapi/': 'guidelines',
  '/guidelines': 'guidelines',
  '/pnpk': 'guidelines',

  // Education, UKOM, SOP & Regulations
  '/hafalan-obat': 'drug-notes',
  '/hafalan-obat/': 'drug-notes',
  '/drug-notes': 'drug-notes',
  '/hafalan': 'drug-notes',
  '/jembatan-keledai': 'drug-notes',

  '/singkatan-latin': 'latin-terms',
  '/singkatan-latin/': 'latin-terms',
  '/latin-terms': 'latin-terms',
  '/latin': 'latin-terms',
  '/signa': 'latin-terms',

  '/ukmppai': 'competency',
  '/ukmppai/': 'competency',
  '/competency': 'competency',
  '/competency-center': 'competency',
  '/apoteker': 'competency',

  '/uktvf': 'competency-vokasi',
  '/uktvf/': 'competency-vokasi',
  '/competency-vokasi': 'competency-vokasi',
  '/uktvk': 'competency-vokasi',
  '/vokasi': 'competency-vokasi',

  '/sop': 'sop',
  '/sop/': 'sop',
  '/sop-pharmacy': 'sop',

  '/regulasi': 'regulations',
  '/regulasi/': 'regulations',
  '/regulations': 'regulations',
  '/hukum': 'regulations',

  '/literatur': 'literature',
  '/literatur/': 'literature',
  '/literature': 'literature',
  '/ebm': 'literature',

  // Admin Panels
  '/admin': 'admin',
  '/admin/': 'admin',
  '/admin/firebase': 'admin-firebase',
  '/admin/firebase/': 'admin-firebase',
  '/admin/branding': 'admin-branding',
  '/admin/branding/': 'admin-branding',
  '/admin/pricing': 'admin-pricing',
  '/admin/pricing/': 'admin-pricing',
  '/admin/users': 'admin-users',
  '/admin/users/': 'admin-users',
  '/admin/subscriptions': 'admin-subscriptions',
  '/admin/subscriptions/': 'admin-subscriptions',
  '/admin/instagram': 'admin-instagram',
  '/admin/instagram/': 'admin-instagram',
  '/admin/interactions': 'admin-interactions',
  '/admin/editor': 'admin-editor',
  '/admin/logs': 'admin-logs',
  '/instagram-studio': 'admin-instagram',

  // User Profile & Settings
  '/pengaturan': 'settings',
  '/pengaturan/': 'settings',
  '/settings': 'settings',
  '/settings/': 'settings',
  '/profil': 'settings',
  '/profil/': 'settings',
  '/profile': 'settings',
};

/**
 * Returns the matching tab ID from a URL pathname, or null if not matched.
 */
export function getTabFromPath(rawPathname: string): string | null {
  if (!rawPathname) return null;
  const cleanPath = rawPathname.toLowerCase().trim();
  
  // Direct lookup
  if (PATH_TO_TAB[cleanPath]) {
    return PATH_TO_TAB[cleanPath];
  }

  // Strip trailing slash if present (except for root '/')
  const normalizedPath = cleanPath.length > 1 && cleanPath.endsWith('/')
    ? cleanPath.slice(0, -1)
    : cleanPath;

  if (PATH_TO_TAB[normalizedPath]) {
    return PATH_TO_TAB[normalizedPath];
  }

  return null;
}

/**
 * Returns the canonical URL path for a tab ID.
 */
export function getPathFromTab(tabId: string): string {
  if (!tabId) return '/';
  return TAB_TO_PATH[tabId] || `/${tabId}`;
}
