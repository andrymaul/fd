import React from 'react';

export interface ClinicalIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

// ==========================================
// 1. SKRINING & KEAMANAN RESEP
// ==========================================

/**
 * 1. INTERAKSI OBAT (Drug Interaction Checker)
 * Dua tablet/kapsul farmasi bersilangan dengan badge peringatan bahaya dual-tone
 */
export const DuoInteractionIcon: React.FC<ClinicalIconProps> = ({ className = "w-14 h-14", ...props }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    {/* Tablet bulat bersendi (Scored Tablet) */}
    <circle cx="24" cy="38" r="15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-95" />
    <line x1="13.4" y1="27.4" x2="34.6" y2="48.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    {/* Kapsul miring di belakang tablet */}
    <path d="M31 23L39 15C43 11 49 11 53 15C57 19 57 25 53 29L45 37" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-90" />
    <line x1="36" y1="20" x2="48" y2="32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-60" />
    {/* Objek Aksen: Segitiga Peringatan Bahaya Interaksi (Sky Blue / Cyan) */}
    <g className="text-[#0284c7] dark:text-[#38bdf8] transition-transform duration-300 group-hover:scale-110 origin-center">
      <path d="M44 32L57 52C58 53.6 57 56 55 56H29C27 56 26 53.6 27 52L40 32C41 30.5 43 30.5 44 32Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.12" />
      <line x1="42" y1="39" x2="42" y2="46" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="42" cy="50.5" r="1.25" fill="currentColor" />
    </g>
  </svg>
);

/**
 * 2. BUMIL & BUSUI (Pregnancy & Lactation Safety)
 * Siluet hati pelindung maternal dengan aksen janin & tetesan laktasi ASI
 */
export const DuoPregnancyIcon: React.FC<ClinicalIconProps> = ({ className = "w-14 h-14", ...props }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M32 54C32 54 12 42 12 26C12 18.5 17.5 13 25 13C28.5 13 31.5 14.5 32 16C32.5 14.5 35.5 13 39 13C46.5 13 52 18.5 52 26C52 42 32 54 32 54Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-95" />
    <path d="M22 28C22 34 26 40 32 43" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-60" />
    {/* Objek Aksen: Hati Janin / Cinta Maternal (Rose Pink) */}
    <g className="text-[#f43f5e] dark:text-[#fb7185] transition-transform duration-300 group-hover:scale-115 origin-center">
      <path d="M32 34C32 34 26 29.5 26 25C26 22.5 28 20.5 30.5 20.5C31.5 20.5 32 21 32 21.5C32 21 32.5 20.5 33.5 20.5C36 20.5 38 22.5 38 25C38 29.5 32 34 32 34Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.18" />
      <circle cx="32" cy="10" r="2" fill="currentColor" />
    </g>
  </svg>
);

/**
 * 3. OBAT & LAB (Drug-Lab Interactions)
 * Erlenmeyer flask analit laboratorium dengan kapsul obat aksen
 */
export const DuoDrugLabIcon: React.FC<ClinicalIconProps> = ({ className = "w-14 h-14", ...props }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M26 12H38M30 12V24L16 48C14.5 50.5 16.5 54 19.5 54H44.5C47.5 54 49.5 50.5 48 48L34 24V12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-95" />
    <path d="M20 42C23 41 27 43 30 42C33 41 37 43 40 42C42 41.5 43.5 41.8 44 42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-60" />
    {/* Objek Aksen: Kapsul Obat & Gelembung Analit (Cyan / Sky) */}
    <g className="text-[#0284c7] dark:text-[#38bdf8] transition-transform duration-300 group-hover:scale-110 origin-center">
      <rect x="36" y="16" width="18" height="9" rx="4.5" transform="rotate(45 36 16)" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.16" />
      <line x1="36" y1="25.5" x2="42.5" y2="32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="28" cy="48" r="1.5" fill="currentColor" />
      <circle cx="34" cy="46" r="2" fill="currentColor" fillOpacity="0.5" />
    </g>
  </svg>
);

/**
 * 4. HERBAL & JAMU (Herb-Drug Interaction & OHT)
 * Lumpang & alu tradisional dengan daun herbal fitofarmaka aksen hijau
 */
export const DuoHerbalIcon: React.FC<ClinicalIconProps> = ({ className = "w-14 h-14", ...props }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M12 28H52C52 42 42 50 32 50C22 50 12 42 12 28Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-95" />
    <path d="M20 50L18 54H46L44 50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-90" />
    <path d="M44 14L34 32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-70" />
    {/* Objek Aksen: Daun Herbal Alami (Emerald Green) */}
    <g className="text-[#059669] dark:text-[#34d399] transition-transform duration-300 group-hover:scale-115 origin-center">
      <path d="M26 28C26 28 24 16 35 12C35 12 37 24 26 28Z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.18" />
      <path d="M26 28C29 23 32 18 35 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M22 24C22 24 18 17 25 15C25 15 26.5 21 22 24Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.15" />
    </g>
  </svg>
);

/**
 * 5. EFEK SAMPING (Adverse Drug Reactions / MESO)
 * Kapsul obat dengan denyut gelombang EKG elektrokardiogram & kilat peringatan
 */
export const DuoSideEffectsIcon: React.FC<ClinicalIconProps> = ({ className = "w-14 h-14", ...props }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <rect x="16" y="26" width="32" height="18" rx="9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-95" />
    <line x1="32" y1="26" x2="32" y2="44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-50" />
    {/* Objek Aksen: Gelombang EKG Jantung (Coral Orange) */}
    <g className="text-[#ea580c] dark:text-[#fb923c] transition-transform duration-300 group-hover:scale-110 origin-center">
      <path d="M8 35H20L24 23L29 45L35 16L39 39L43 32L46 35H56" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="35" cy="16" r="2" fill="currentColor" />
    </g>
  </svg>
);

/**
 * 6. INJEKSI IV (IV Compatibility & Y-Site Admixtures)
 * Botol infus berskala dengan spuit jarum suntik mikro aksen
 */
export const DuoIvCompatibilityIcon: React.FC<ClinicalIconProps> = ({ className = "w-14 h-14", ...props }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M26 12H38M32 8V12M22 16H42C44.2 16 46 17.8 46 20V46C46 50.4 42.4 54 38 54H26C21.6 54 18 50.4 18 46V20C18 17.8 19.8 16 22 16Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-95" />
    <path d="M32 54V58M30 58H34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-60" />
    <line x1="24" y1="24" x2="30" y2="24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="opacity-40" />
    <line x1="24" y1="30" x2="34" y2="30" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="opacity-40" />
    <line x1="24" y1="36" x2="30" y2="36" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="opacity-40" />
    {/* Objek Aksen: Spuit Jarum Suntik Y-Site (Sky Blue) */}
    <g className="text-[#0284c7] dark:text-[#38bdf8] transition-transform duration-300 group-hover:scale-115 origin-center">
      <path d="M48 20L38 30M35 33L37 31M41 27L43 25M45 23L49 27L43 33L39 29M49 19L53 15M51 13L55 17" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.12" />
      <circle cx="33" cy="35" r="1.5" fill="currentColor" />
    </g>
  </svg>
);

/**
 * 7. TOKSIKOLOGI (Clinical Toxicology & Antidote)
 * Botol zat toksin dengan perisai penyelamat & tetesan antidotum merah gawat darurat
 */
export const DuoToxicologyIcon: React.FC<ClinicalIconProps> = ({ className = "w-14 h-14", ...props }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    {/* Botol Reagen Kimia / Toksin */}
    <path d="M26 12H38M30 12V18L18 36V50C18 52.2 19.8 54 22 54H42C44.2 54 46 52.2 46 50V36L34 18V12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-95" />
    <line x1="24" y1="46" x2="40" y2="46" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-40" />
    {/* Objek Aksen: Tanda Bahaya Tengkorak / Antidotum Emergency (Crimson Red / Rose) */}
    <g className="text-[#e11d48] dark:text-[#fb7185] transition-transform duration-300 group-hover:scale-115 origin-center">
      {/* Perisai Bahaya Toksin */}
      <path d="M32 26L40 30V37C40 42 36 45 32 47C28 45 24 42 24 37V30L32 26Z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.18" />
      <line x1="32" y1="32" x2="32" y2="38" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="32" cy="41.5" r="1.2" fill="currentColor" />
    </g>
  </svg>
);

/**
 * 8. HIGH-ALERT & LASA (High-Alert Medications & LASA)
 * Perisai keamanan ganda dengan dua kapsul kembar LASA aksen amber waspada
 */
export const DuoHighAlertIcon: React.FC<ClinicalIconProps> = ({ className = "w-14 h-14", ...props }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    {/* Perisai Keamanan Utama */}
    <path d="M32 10L48 16V30C48 42 41 50 32 54C23 50 16 42 16 30V16L32 10Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-95" />
    {/* Objek Aksen: Dua Kapsul Kembar LASA + Tanda Seru Waspada (Vibrant Amber / Gold) */}
    <g className="text-[#d97706] dark:text-[#fbbf24] transition-transform duration-300 group-hover:scale-110 origin-center">
      <rect x="25" y="24" width="6" height="14" rx="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="currentColor" fillOpacity="0.15" />
      <rect x="33" y="24" width="6" height="14" rx="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="currentColor" fillOpacity="0.25" />
      <line x1="25" y1="31" x2="31" y2="31" stroke="currentColor" strokeWidth="1.5" />
      <line x1="33" y1="31" x2="39" y2="31" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="32" cy="45" r="1.5" fill="currentColor" />
    </g>
  </svg>
);

/**
 * 9. POLIFARMASI (Beers Criteria & Geriatric Polypharmacy)
 * Blister strip tablet multi-obat dengan stetoskop / jam geriatri aksen
 */
export const DuoPolypharmacyIcon: React.FC<ClinicalIconProps> = ({ className = "w-14 h-14", ...props }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    {/* Blister Pack Multi-Obat */}
    <rect x="14" y="16" width="36" height="34" rx="6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-95" />
    <circle cx="23" cy="25" r="4" stroke="currentColor" strokeWidth="2" className="opacity-70" />
    <circle cx="41" cy="25" r="4" stroke="currentColor" strokeWidth="2" className="opacity-70" />
    <circle cx="23" cy="41" r="4" stroke="currentColor" strokeWidth="2" className="opacity-70" />
    {/* Objek Aksen: Pil Aktif yang Dipantau & Stetoskop Geriatri (Sky Blue) */}
    <g className="text-[#0284c7] dark:text-[#38bdf8] transition-transform duration-300 group-hover:scale-115 origin-center">
      <circle cx="41" cy="41" r="4" stroke="currentColor" strokeWidth="2.2" fill="currentColor" fillOpacity="0.25" />
      <line x1="39" y1="41" x2="43" y2="41" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      {/* Lengkung Stetoskop Pengawasan */}
      <path d="M48 30C52 30 55 33 55 37V43C55 46.3 52.3 49 49 49" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="49" cy="51" r="2" fill="currentColor" />
    </g>
  </svg>
);

/**
 * 10. PANDUAN PNPK (Clinical Practice Guidelines)
 * Lembar rekam medis/konsensus nasional dengan denyut jantung ritme aksen
 */
export const DuoGuidelinesIcon: React.FC<ClinicalIconProps> = ({ className = "w-14 h-14", ...props }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    {/* Lembar Buku / Pedoman Klinis */}
    <path d="M18 12H42C44.2 12 46 13.8 46 16V50C46 51.1 45.1 52 44 52H18C15.8 52 14 50.2 14 48V16C14 13.8 15.8 12 18 12Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-95" />
    <line x1="20" y1="20" x2="34" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-40" />
    <line x1="20" y1="26" x2="30" y2="26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-40" />
    {/* Objek Aksen: Hati Denyut Klinis PNPK (Rose Pink / Cyan) */}
    <g className="text-[#0284c7] dark:text-[#38bdf8] transition-transform duration-300 group-hover:scale-115 origin-center">
      <circle cx="38" cy="38" r="12" stroke="currentColor" strokeWidth="2.2" fill="currentColor" fillOpacity="0.12" />
      <path d="M30 38H33L36 32L40 44L43 38H46" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

// ==========================================
// 2. KALKULATOR MEDIS & RACIKAN
// ==========================================

/**
 * 11. PEDIATRIK & PUYER (Pediatric Dosing & Pulveres)
 * Cangkang kapsul puyer racikan dengan botol dot bayi / takaran sendok aksen
 */
export const DuoPediatricIcon: React.FC<ClinicalIconProps> = ({ className = "w-14 h-14", ...props }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    {/* Lumpang Kecil Racikan Puyer Anak */}
    <path d="M14 30H50C50 42 41 48 32 48C23 48 14 42 14 30Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-95" />
    <line x1="22" y1="48" x2="42" y2="48" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    {/* Alu / Sendok Takar Puyer */}
    <path d="M42 16L32 34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="opacity-60" />
    {/* Objek Aksen: Kapsul Puyer Warna-Warni & Dot Bayi (Cyan / Sky) */}
    <g className="text-[#0284c7] dark:text-[#38bdf8] transition-transform duration-300 group-hover:scale-115 origin-center">
      <rect x="22" y="16" width="16" height="8" rx="4" transform="rotate(-20 22 16)" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2" />
      <line x1="21" y1="18" x2="27" y2="24" stroke="currentColor" strokeWidth="1.8" />
      {/* Butiran puyer farmasi mikro */}
      <circle cx="26" cy="38" r="1.5" fill="currentColor" />
      <circle cx="32" cy="40" r="1.5" fill="currentColor" />
      <circle cx="38" cy="37" r="1.5" fill="currentColor" />
    </g>
  </svg>
);

/**
 * 12. BUD RACIKAN (Beyond Use Date & Stability)
 * Lembar kalender waktu stabilitas dengan jam hitung mundur kadaluarsa
 */
export const DuoBudIcon: React.FC<ClinicalIconProps> = ({ className = "w-14 h-14", ...props }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <rect x="12" y="18" width="34" height="36" rx="6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-95" />
    <line x1="12" y1="28" x2="46" y2="28" stroke="currentColor" strokeWidth="2" />
    <line x1="20" y1="14" x2="20" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="38" y1="14" x2="38" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="21" cy="36" r="1.5" fill="currentColor" className="opacity-60" />
    <circle cx="29" cy="36" r="1.5" fill="currentColor" className="opacity-60" />
    <circle cx="21" cy="44" r="1.5" fill="currentColor" className="opacity-60" />
    {/* Objek Aksen: Jam Hitung Mundur BUD Waktu Kadaluarsa (Vibrant Cyan) */}
    <g className="text-[#0284c7] dark:text-[#38bdf8] transition-transform duration-300 group-hover:scale-110 origin-center">
      <circle cx="44" cy="42" r="12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="currentColor" fillOpacity="0.12" />
      <polyline points="44,35 44,42 49,42" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="44" cy="42" r="1.25" fill="currentColor" />
    </g>
  </svg>
);

/**
 * 13. KLIRENS GINJAL (Renal Dose Adjuster & eGFR)
 * Organ ginjal klinis dengan tetesan laju filtrasi GFR dual-tone
 */
export const DuoRenalIcon: React.FC<ClinicalIconProps> = ({ className = "w-14 h-14", ...props }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    <path d="M38 14C48 14 54 22 54 34C54 46 44 52 36 52C26 52 20 44 20 36C20 31 23 28 26 27C29 26 30 24 30 21C30 17 33 14 38 14Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-95" />
    <path d="M24 32C18 32 14 30 14 30M24 36C18 36 14 40 14 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-60" />
    {/* Objek Aksen: Tetesan Laju Filtrasi Glomerulus (Cyan / Sky) */}
    <g className="text-[#0284c7] dark:text-[#38bdf8] transition-transform duration-300 group-hover:scale-115 origin-center">
      <path d="M36 28C36 28 30 36 30 39C30 42.3 32.7 45 36 45C39.3 45 42 42.3 42 39C42 36 36 28 36 28Z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.16" />
      <circle cx="36" cy="40" r="1.5" fill="currentColor" />
    </g>
  </svg>
);

/**
 * 14. PPRA ANTIBIOTIK (Antimicrobial Stewardship)
 * Kapsul antibiotik dengan perisai pertahanan mikroba AWaRe
 */
export const DuoAntimicrobialIcon: React.FC<ClinicalIconProps> = ({ className = "w-14 h-14", ...props }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    {/* Perisai Perlindungan Resistensi */}
    <path d="M32 10L48 16V30C48 42 41 50 32 54C23 50 16 42 16 30V16L32 10Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-95" />
    {/* Objek Aksen: Kapsul Antibiotik Bersendi di Tengah (Teal / Sky) */}
    <g className="text-[#0284c7] dark:text-[#38bdf8] transition-transform duration-300 group-hover:scale-110 origin-center">
      <rect x="25" y="24" width="14" height="18" rx="7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.18" />
      <line x1="25" y1="33" x2="39" y2="33" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Tanda Centang AWaRe WHO */}
      <path d="M29 42L31 44L36 39" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

// ==========================================
// 3. KONSELING & EDUKASI PASIEN
// ==========================================

/**
 * 15. SWAMEDIKASI (Self-Care & Triage Apotek)
 * Tangan merawat dengan lingkaran obat bebas hijau & kilau bintang konsultasi
 */
export const DuoSwamedikasiIcon: React.FC<ClinicalIconProps> = ({ className = "w-14 h-14", ...props }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    {/* Tangan Merawat Farmasis */}
    <path d="M12 40C12 40 20 44 26 44C32 44 38 40 46 40C50 40 54 44 54 44M16 48L24 48C30 48 36 52 42 52H52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80" />
    {/* Objek Aksen: Lingkaran Obat Bebas DOTB & Bintang Kilau (Emerald Green / Cyan) */}
    <g className="text-[#059669] dark:text-[#34d399] transition-transform duration-300 group-hover:scale-115 origin-center">
      <circle cx="32" cy="24" r="10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="currentColor" fillOpacity="0.2" />
      <circle cx="32" cy="24" r="5" fill="currentColor" />
      {/* Bintang Kilau Pelayanan Prima */}
      <path d="M48 14L49.5 18.5L54 20L49.5 21.5L48 26L46.5 21.5L42 20L46.5 18.5L48 14Z" fill="currentColor" />
    </g>
  </svg>
);

/**
 * 16. KARTU PIO (WhatsApp Patient Counseling Card)
 * Balon obrolan WhatsApp dengan lembar kartu informasi obat digital
 */
export const DuoWhatsappPioIcon: React.FC<ClinicalIconProps> = ({ className = "w-14 h-14", ...props }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    {/* Balon Pesan WhatsApp Utama */}
    <path d="M14 30C14 19 22 12 34 12C46 12 52 20 52 30C52 41 42 48 32 48C28 48 24 49 20 52L21 44C16 41 14 36 14 30Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-95" />
    {/* Objek Aksen: Kartu Informasi Obat PIO (Sky Blue / Emerald) */}
    <g className="text-[#0284c7] dark:text-[#38bdf8] transition-transform duration-300 group-hover:scale-110 origin-center">
      <rect x="23" y="21" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="currentColor" fillOpacity="0.18" />
      <line x1="27" y1="26" x2="37" y2="26" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="27" y1="31" x2="33" y2="31" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="35" cy="33" r="1.5" fill="currentColor" />
    </g>
  </svg>
);

/**
 * 17. EDUKASI AI (AI Pharmacy Education Generator)
 * Lembar leaflet edukasi promkes dengan tongkat bintang kecerdasan buatan
 */
export const DuoEducationAiIcon: React.FC<ClinicalIconProps> = ({ className = "w-14 h-14", ...props }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    {/* Poster / Lembar Brosur Edukasi */}
    <rect x="14" y="16" width="30" height="36" rx="5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-95" />
    <line x1="20" y1="24" x2="34" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-50" />
    <line x1="20" y1="30" x2="30" y2="30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-50" />
    <line x1="20" y1="36" x2="26" y2="36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-50" />
    {/* Objek Aksen: Tongkat Bintang AI Magic (Cyan / Violet) */}
    <g className="text-[#0284c7] dark:text-[#38bdf8] transition-transform duration-300 group-hover:scale-115 origin-center">
      <path d="M48 14L49.5 19L54 20.5L49.5 22L48 27L46.5 22L42 20.5L46.5 19L48 14Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <line x1="44" y1="25" x2="32" y2="44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="39" cy="38" r="1" fill="currentColor" />
      <circle cx="49" cy="34" r="1.5" fill="currentColor" />
    </g>
  </svg>
);

/**
 * 18. CARA PAKAI (Medication Usage & Devices)
 * Inhaler MDI aerosol & pena insulin dengan semprotan partikel obat aksen
 */
export const DuoUsageGuideIcon: React.FC<ClinicalIconProps> = ({ className = "w-14 h-14", ...props }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    {/* Inhaler MDI (Metered Dose Inhaler) Tabung */}
    <path d="M22 14H34V32H44C47.3 32 50 34.7 50 38V44C50 47.3 47.3 50 44 50H22V14Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-95" />
    <line x1="22" y1="32" x2="34" y2="32" stroke="currentColor" strokeWidth="2" />
    {/* Objek Aksen: Partikel Semprotan Aerosol & Indikator Dosis (Cyan / Sky) */}
    <g className="text-[#0284c7] dark:text-[#38bdf8] transition-transform duration-300 group-hover:scale-115 origin-center">
      {/* Saluran mouthpiece inhaler */}
      <path d="M14 44H22V50H14C12.9 50 12 49.1 12 48V46C12 44.9 12.9 44 14 44Z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.15" />
      {/* Tetesan aerosol mikro yang dihirup */}
      <circle cx="8" cy="47" r="1.5" fill="currentColor" />
      <circle cx="4" cy="43" r="1.5" fill="currentColor" />
      <circle cx="5" cy="51" r="1" fill="currentColor" />
    </g>
  </svg>
);

/**
 * 19. SINGKATAN LATIN (Latin Abbreviations & Signa)
 * Resep berhuruf Latin kuno 'Rx' dengan gulungan naskah farmasi aksen
 */
export const DuoLatinTermsIcon: React.FC<ClinicalIconProps> = ({ className = "w-14 h-14", ...props }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    {/* Lembar Resep Farmasi Kuno */}
    <path d="M16 14H42C44.2 14 46 15.8 46 18V48C46 50.2 44.2 52 42 52H16C13.8 52 12 50.2 12 48V18C12 15.8 13.8 14 16 14Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-95" />
    {/* Garis signa resep */}
    <line x1="20" y1="38" x2="38" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-40" />
    <line x1="20" y1="44" x2="32" y2="44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-40" />
    {/* Objek Aksen: Simbol Recipe 'Rx' Klasik (Sky Blue) */}
    <g className="text-[#0284c7] dark:text-[#38bdf8] transition-transform duration-300 group-hover:scale-115 origin-center">
      <path d="M22 22V32M22 22H27C29.2 22 31 23.8 31 26C31 28.2 29.2 30 27 30H22M27 30L33 36M30 33L35 30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="48" cy="22" r="3" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2" />
    </g>
  </svg>
);

// ==========================================
// 4. BELAJAR, SOP & UJI KOMPETENSI
// ==========================================

/**
 * 20. UKMPPAI (CBT & OSCE Apoteker)
 * Toga wisuda apoteker dengan lembar sertifikat kelulusan CBT
 */
export const DuoCompetencyApotekerIcon: React.FC<ClinicalIconProps> = ({ className = "w-14 h-14", ...props }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    {/* Topi Toga Wisuda (Mortarboard) */}
    <path d="M32 14L10 24L32 34L54 24L32 14Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-95" />
    <path d="M18 28V40C18 40 22 46 32 46C42 46 46 40 46 40V28" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70" />
    <path d="M50 26V42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-60" />
    <circle cx="50" cy="44" r="2" fill="currentColor" className="opacity-60" />
    {/* Objek Aksen: Lencana Kelulusan Uji Kompetensi Berbintang (Amber Gold) */}
    <g className="text-[#d97706] dark:text-[#fbbf24] transition-transform duration-300 group-hover:scale-115 origin-center">
      <circle cx="32" cy="46" r="7" stroke="currentColor" strokeWidth="2.2" fill="currentColor" fillOpacity="0.2" />
      <path d="M30 46L31.5 47.5L34.5 44.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

/**
 * 21. UKTVF D3 (CBT Tenaga Vokasi Farmasi)
 * Lab flask kimia farmasi dengan medali kelulusan D3 TTK aksen
 */
export const DuoCompetencyVokasiIcon: React.FC<ClinicalIconProps> = ({ className = "w-14 h-14", ...props }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    {/* Tabung Ukur / Flask Laboratorium Vokasi */}
    <path d="M26 14H38M30 14V26L18 48C16.5 50.5 18.5 54 21.5 54H42.5C45.5 54 47.5 50.5 46 48L34 26V14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-95" />
    <line x1="22" y1="44" x2="42" y2="44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-40" />
    {/* Objek Aksen: Medali & Sertifikat Vokasi D3 (Cyan / Sky) */}
    <g className="text-[#0284c7] dark:text-[#38bdf8] transition-transform duration-300 group-hover:scale-115 origin-center">
      <circle cx="44" cy="22" r="8" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.18" />
      <text x="44" y="25" textAnchor="middle" fontSize="8" fontWeight="bold" fill="currentColor">D3</text>
      <path d="M42 30L44 36L46 30" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

/**
 * 22. HAFALAN OBAT (Mnemonics & Clinical Rhymes)
 * Buku saku klinis dengan lampu ide jembatan keledai menyala
 */
export const DuoDrugNotesIcon: React.FC<ClinicalIconProps> = ({ className = "w-14 h-14", ...props }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    {/* Buku Saku / Kartu Flashcard */}
    <rect x="14" y="18" width="34" height="34" rx="5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-95" />
    <line x1="20" y1="28" x2="34" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-50" />
    <line x1="20" y1="36" x2="30" y2="36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-50" />
    {/* Objek Aksen: Lampu Bohlam Mnemonic Menyala (Vibrant Amber / Gold) */}
    <g className="text-[#d97706] dark:text-[#fbbf24] transition-transform duration-300 group-hover:scale-115 origin-center">
      <path d="M44 14C40.7 14 38 16.7 38 20C38 22.2 39.2 24.1 41 25.1V28C41 28.6 41.4 29 42 29H46C46.6 29 47 28.6 47 28V25.1C48.8 24.1 50 22.2 50 20C50 16.7 47.3 14 44 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.2" />
      <line x1="42.5" y1="31" x2="45.5" y2="31" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      {/* Pancaran sinar ide */}
      <line x1="44" y1="10" x2="44" y2="12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="52" y1="14" x2="50.5" y2="15.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </g>
  </svg>
);

/**
 * 23. LITERATUR EBM (Evidence-Based Medicine)
 * Naskah jurnal farmakoterapi tebal dengan bookmark pita & bintang EBM
 */
export const DuoLiteratureIcon: React.FC<ClinicalIconProps> = ({ className = "w-14 h-14", ...props }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    {/* Naskah / Jurnal EBM Tebal */}
    <path d="M16 12H44C46.2 12 48 13.8 48 16V50C48 51.1 47.1 52 46 52H16C13.8 52 12 50.2 12 48V16C12 13.8 13.8 12 16 12Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-95" />
    <line x1="18" y1="12" x2="18" y2="52" stroke="currentColor" strokeWidth="2" />
    {/* Objek Aksen: Pita Pembatas Buku & Bintang EBM (Sky Blue / Amber) */}
    <g className="text-[#0284c7] dark:text-[#38bdf8] transition-transform duration-300 group-hover:scale-115 origin-center">
      <path d="M34 12V28L40 24L46 28V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.2" />
      <circle cx="28" cy="38" r="4" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2" />
      <line x1="28" y1="36" x2="28" y2="40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="26" y1="38" x2="30" y2="38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </g>
  </svg>
);

/**
 * 24. SOP FARMASI (Standard Operating Procedures)
 * Papan checklist SOP dengan tanda centang verifikasi ganda
 */
export const DuoSopIcon: React.FC<ClinicalIconProps> = ({ className = "w-14 h-14", ...props }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    {/* Papan Ujian / Klip Dokumen */}
    <rect x="16" y="16" width="32" height="36" rx="6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-95" />
    <path d="M26 16V12C26 10.9 26.9 10 28 10H36C37.1 10 38 10.9 38 12V16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="opacity-90" />
    {/* Garis-Garis Prosedur */}
    <line x1="28" y1="28" x2="40" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-40" />
    <line x1="28" y1="36" x2="40" y2="36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-40" />
    <line x1="28" y1="44" x2="36" y2="44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-40" />
    {/* Objek Aksen: Tanda Centang Terverifikasi Akreditasi (Emerald Green / Cyan) */}
    <g className="text-[#059669] dark:text-[#34d399] transition-transform duration-300 group-hover:scale-115 origin-center">
      <path d="M21 28L23 30L26 26" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 36L23 38L26 34" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 44L23 46L26 42" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

/**
 * 25. UU KESEHATAN (Health Regulations & Laws)
 * Neraca timbangan keadilan farmasi dengan pilar hukum aksen
 */
export const DuoRegulationsIcon: React.FC<ClinicalIconProps> = ({ className = "w-14 h-14", ...props }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    {/* Tiang Neraca Timbangan */}
    <line x1="32" y1="12" x2="32" y2="52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="opacity-95" />
    <line x1="24" y1="52" x2="40" y2="52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="opacity-95" />
    <line x1="16" y1="20" x2="48" y2="20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="opacity-95" />
    <circle cx="32" cy="12" r="2" fill="currentColor" />
    {/* Objek Aksen: Piringan Timbangan Keadilan Regulasi (Amber Gold / Sky Blue) */}
    <g className="text-[#d97706] dark:text-[#fbbf24] transition-transform duration-300 group-hover:scale-110 origin-center">
      {/* Timbangan Kiri */}
      <path d="M16 20L10 34H22L16 20Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="currentColor" fillOpacity="0.15" />
      {/* Timbangan Kanan */}
      <path d="M48 20L42 34H54L48 20Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="currentColor" fillOpacity="0.15" />
    </g>
  </svg>
);

// ==========================================
// 5. MODUL INTI & DATA
// ==========================================

/**
 * 26. KATALOG OBAT (Drugs & Medications / Pill Identifier)
 * Kapsul obat farmasi 3D dengan kaca pembesar monografi obat (persis ciri khas Drugs.com)
 */
export const DuoDrugCatalogIcon: React.FC<ClinicalIconProps> = ({ className = "w-14 h-14", ...props }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
    {/* Kapsul Obat Utama Miring */}
    <rect x="14" y="24" width="32" height="18" rx="9" transform="rotate(-30 14 24)" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-95" />
    <line x1="24" y1="18" x2="33" y2="33.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-60" />
    {/* Objek Aksen: Kaca Pembesar Monografi / Pill Identifier ala Drugs.com (Sky Blue / Cyan) */}
    <g className="text-[#0284c7] dark:text-[#38bdf8] transition-transform duration-300 group-hover:scale-115 origin-center">
      <circle cx="42" cy="40" r="10" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.15" />
      <line x1="49" y1="47" x2="57" y2="55" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      {/* Garis kilau lensa kaca pembesar */}
      <path d="M37 36C38 34 41 33 43 33" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </g>
  </svg>
);

