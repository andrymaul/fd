import React from 'react';

export interface ClinicalIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

/**
 * 1. INTERAKSI OBAT (Drug Interaction Checker)
 * Dua tablet/kapsul farmasi bersilangan dengan badge peringatan interaksi dual-tone ala Drugs.com
 */
export const DuoInteractionIcon: React.FC<ClinicalIconProps> = ({ className = "w-14 h-14", ...props }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    {/* Objek Utama: Tablet bulat bersendi (Scored Tablet) */}
    <circle
      cx="24"
      cy="38"
      r="15"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="opacity-95"
    />
    <line
      x1="13.4"
      y1="27.4"
      x2="34.6"
      y2="48.6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* Objek Utama: Kapsul miring di belakang tablet */}
    <path
      d="M31 23L39 15C43 11 49 11 53 15C57 19 57 25 53 29L45 37"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="opacity-90"
    />
    <line
      x1="36"
      y1="20"
      x2="48"
      y2="32"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="opacity-60"
    />

    {/* Objek Aksen: Segitiga Peringatan Bahaya Interaksi (Dual-Tone Accent - Sky Blue/Cyan) */}
    <g className="text-[#0284c7] dark:text-[#38bdf8] transition-transform duration-300 group-hover:scale-110 origin-center">
      <path
        d="M44 32L57 52C58 53.6 57 56 55 56H29C27 56 26 53.6 27 52L40 32C41 30.5 43 30.5 44 32Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.12"
      />
      <line
        x1="42"
        y1="39"
        x2="42"
        y2="46"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle
        cx="42"
        cy="50.5"
        r="1.25"
        fill="currentColor"
      />
    </g>
  </svg>
);

/**
 * 2. BUMIL & BUSUI (Pregnancy & Lactation Safety)
 * Siluet pelindung maternal & janin hati dengan aksen tetesan nutrisi ASI
 */
export const DuoPregnancyIcon: React.FC<ClinicalIconProps> = ({ className = "w-14 h-14", ...props }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    {/* Objek Utama: Dua tangan/pelindung maternal melengkung membentuk hati pelindung */}
    <path
      d="M32 54C32 54 12 42 12 26C12 18.5 17.5 13 25 13C28.5 13 31.5 14.5 32 16C32.5 14.5 35.5 13 39 13C46.5 13 52 18.5 52 26C52 42 32 54 32 54Z"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="opacity-95"
    />

    {/* Garis lengkung perut maternal */}
    <path
      d="M22 28C22 34 26 40 32 43"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="opacity-60"
    />

    {/* Objek Aksen: Janin / Hati Cinta Kecil Pusat Kasih Sayang (Soft Coral Rose / Cyan) */}
    <g className="text-[#f43f5e] dark:text-[#fb7185] transition-transform duration-300 group-hover:scale-115 origin-center">
      <path
        d="M32 34C32 34 26 29.5 26 25C26 22.5 28 20.5 30.5 20.5C31.5 20.5 32 21 32 21.5C32 21 32.5 20.5 33.5 20.5C36 20.5 38 22.5 38 25C38 29.5 32 34 32 34Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.18"
      />
      {/* Tetesan ASI laktasi mikro */}
      <circle cx="32" cy="10" r="2" fill="currentColor" />
    </g>
  </svg>
);

/**
 * 3. OBAT & LAB (Drug-Laboratory Interaction)
 * Lab Erlenmeyer Flask presisi dengan kapsul obat overlay dual-tone
 */
export const DuoDrugLabIcon: React.FC<ClinicalIconProps> = ({ className = "w-14 h-14", ...props }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    {/* Objek Utama: Erlenmeyer Flask Lab Kimia/Klinis */}
    <path
      d="M26 12H38M30 12V24L16 48C14.5 50.5 16.5 54 19.5 54H44.5C47.5 54 49.5 50.5 48 48L34 24V12"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="opacity-95"
    />
    
    {/* Garis level cairan uji analit */}
    <path
      d="M20 42C23 41 27 43 30 42C33 41 37 43 40 42C42 41.5 43.5 41.8 44 42"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="opacity-60"
    />

    {/* Objek Aksen: Kapsul Obat Klinis yang Masuk ke Larutan (Vibrant Sky Blue) */}
    <g className="text-[#0284c7] dark:text-[#38bdf8] transition-transform duration-300 group-hover:scale-110 origin-center">
      <rect
        x="36"
        y="16"
        width="18"
        height="9"
        rx="4.5"
        transform="rotate(45 36 16)"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.16"
      />
      <line
        x1="36"
        y1="25.5"
        x2="42.5"
        y2="32"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Gelembung reaksi kimia lab mikro */}
      <circle cx="28" cy="48" r="1.5" fill="currentColor" />
      <circle cx="34" cy="46" r="2" fill="currentColor" fillOpacity="0.5" />
    </g>
  </svg>
);

/**
 * 4. HERBAL & JAMU (Herb-Drug Interaction & Supplements)
 * Mortar lumpang obat tradisional dengan daun herbal dual-tone segar
 */
export const DuoHerbalIcon: React.FC<ClinicalIconProps> = ({ className = "w-14 h-14", ...props }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    {/* Objek Utama: Mangkuk Lumpang (Mortar) Farmasi */}
    <path
      d="M12 28H52C52 42 42 50 32 50C22 50 12 42 12 28Z"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="opacity-95"
    />
    <path
      d="M20 50L18 54H46L44 50"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="opacity-90"
    />

    {/* Batang Alu (Pestle) Miring */}
    <path
      d="M44 14L34 32"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      className="opacity-70"
    />

    {/* Objek Aksen: Daun Herbal Fitofarmaka Alami (Vibrant Emerald / Green) */}
    <g className="text-[#059669] dark:text-[#34d399] transition-transform duration-300 group-hover:scale-115 origin-center">
      <path
        d="M26 28C26 28 24 16 35 12C35 12 37 24 26 28Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.18"
      />
      <path
        d="M26 28C29 23 32 18 35 12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Daun tunas kecil kedua */}
      <path
        d="M22 24C22 24 18 17 25 15C25 15 26.5 21 22 24Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.15"
      />
    </g>
  </svg>
);

/**
 * 5. EFEK SAMPING (Adverse Drug Reactions / MESO)
 * Kapsul obat dengan denyut gelombang EKG elektrokardiogram & kilat peringatan
 */
export const DuoSideEffectsIcon: React.FC<ClinicalIconProps> = ({ className = "w-14 h-14", ...props }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    {/* Objek Utama: Kapsul Obat Bersendi */}
    <rect
      x="16"
      y="26"
      width="32"
      height="18"
      rx="9"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="opacity-95"
    />
    <line
      x1="32"
      y1="26"
      x2="32"
      y2="44"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="opacity-50"
    />

    {/* Objek Aksen: Gelombang EKG Jantung & Kilat Peringatan (Vibrant Coral/Orange) */}
    <g className="text-[#ea580c] dark:text-[#fb923c] transition-transform duration-300 group-hover:scale-110 origin-center">
      {/* Garis EKG melintasi layar */}
      <path
        d="M8 35H20L24 23L29 45L35 16L39 39L43 32L46 35H56"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Titik reaksi denyut */}
      <circle cx="35" cy="16" r="2" fill="currentColor" />
    </g>
  </svg>
);

/**
 * 6. INJEKSI IV (IV Compatibility & Y-Site Admixtures)
 * Botol infus ICU/Y-site chamber dengan spuit jarum suntik mikro aksen
 */
export const DuoIvCompatibilityIcon: React.FC<ClinicalIconProps> = ({ className = "w-14 h-14", ...props }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    {/* Objek Utama: Kantong / Botol Infus IV */}
    <path
      d="M26 12H38M32 8V12M22 16H42C44.2 16 46 17.8 46 20V46C46 50.4 42.4 54 38 54H26C21.6 54 18 50.4 18 46V20C18 17.8 19.8 16 22 16Z"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="opacity-95"
    />
    
    {/* Saluran tetes infus bawah */}
    <path
      d="M32 54V58M30 58H34"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="opacity-60"
    />

    {/* Skala volume cairan infus */}
    <line x1="24" y1="24" x2="30" y2="24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="opacity-40" />
    <line x1="24" y1="30" x2="34" y2="30" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="opacity-40" />
    <line x1="24" y1="36" x2="30" y2="36" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="opacity-40" />

    {/* Objek Aksen: Spuit / Jarum Suntik Injeksi Y-Site (Vibrant Sky Blue) */}
    <g className="text-[#0284c7] dark:text-[#38bdf8] transition-transform duration-300 group-hover:scale-115 origin-center">
      {/* Jarum suntik miring */}
      <path
        d="M48 20L38 30M35 33L37 31M41 27L43 25M45 23L49 27L43 33L39 29M49 19L53 15M51 13L55 17"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.12"
      />
      {/* Tetesan injeksi cairan obat */}
      <circle cx="33" cy="35" r="1.5" fill="currentColor" />
    </g>
  </svg>
);

/**
 * 7. KLIRENS GINJAL (Renal Dose Adjuster)
 * Organ ginjal presisi dengan tetesan filtrasi GFR dual-tone
 */
export const DuoRenalIcon: React.FC<ClinicalIconProps> = ({ className = "w-14 h-14", ...props }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    {/* Objek Utama: Siluet Ginjal (Kidney) Medis */}
    <path
      d="M38 14C48 14 54 22 54 34C54 46 44 52 36 52C26 52 20 44 20 36C20 31 23 28 26 27C29 26 30 24 30 21C30 17 33 14 38 14Z"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="opacity-95"
    />
    {/* Vena & Arteri Renal */}
    <path
      d="M24 32C18 32 14 30 14 30M24 36C18 36 14 40 14 40"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="opacity-60"
    />

    {/* Objek Aksen: Pengukur Filtrasi GFR & Tetesan Klirens (Cyan/Teal) */}
    <g className="text-[#0284c7] dark:text-[#38bdf8] transition-transform duration-300 group-hover:scale-115 origin-center">
      {/* Tetesan laju filtrasi glomerulus */}
      <path
        d="M36 28C36 28 30 36 30 39C30 42.3 32.7 45 36 45C39.3 45 42 42.3 42 39C42 36 36 28 36 28Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.16"
      />
      <circle cx="36" cy="40" r="1.5" fill="currentColor" />
    </g>
  </svg>
);

/**
 * 8. BUD RACIKAN (Beyond Use Date & Stability)
 * Kalender batas waktu dengan jam stopwatch dan kapsul obat
 */
export const DuoBudIcon: React.FC<ClinicalIconProps> = ({ className = "w-14 h-14", ...props }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    {/* Objek Utama: Kalender Lembar Farmasi */}
    <rect
      x="12"
      y="18"
      width="34"
      height="36"
      rx="6"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="opacity-95"
    />
    <line x1="12" y1="28" x2="46" y2="28" stroke="currentColor" strokeWidth="2" />
    <line x1="20" y1="14" x2="20" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="38" y1="14" x2="38" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />

    {/* Titik grid hari kalender */}
    <circle cx="21" cy="36" r="1.5" fill="currentColor" className="opacity-60" />
    <circle cx="29" cy="36" r="1.5" fill="currentColor" className="opacity-60" />
    <circle cx="21" cy="44" r="1.5" fill="currentColor" className="opacity-60" />

    {/* Objek Aksen: Jam Hitung Mundur BUD Waktu Kadaluarsa (Vibrant Cyan / Amber) */}
    <g className="text-[#0284c7] dark:text-[#38bdf8] transition-transform duration-300 group-hover:scale-110 origin-center">
      <circle
        cx="44"
        cy="42"
        r="12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="currentColor"
        fillOpacity="0.12"
      />
      {/* Jarum jam berputar */}
      <polyline
        points="44,35 44,42 49,42"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="44" cy="42" r="1.25" fill="currentColor" />
    </g>
  </svg>
);
