// =====================================================================
// IV INJECTABLE DRUGS DATABASE - BATCH 3 (20 OBAT INJEKSI RUMAH SAKIT)
// Sumber Referensi: Trissel's Handbook on Injectable Drugs 2024,
// ASHP Injectable Drug Information 2024, Fornas Kemenkes RI & PIONAS BPOM
// =====================================================================

import type { IvDrugProfile } from './ivCompatibilityData';

export const IV_BATCH3_DRUGS: IvDrugProfile[] = [
  // 1. Sugammadex (Bridion)
  {
    id: 'iv-sugammadex',
    name: 'Sugammadex (Bridion 100 mg/mL)',
    genericName: 'Sugammadex Sodium Injection',
    brandNames: ['Bridion'],
    category: 'Sedasi & Anestesi',
    phRange: '7.0 - 8.0',
    reconstitution: {
      recommendedDiluent: 'Tidak perlu rekonstitusi (larutan siap pakai)',
      volumeToReconstitute: 'Vial 2 mL (200 mg) atau 5 mL (500 mg)',
      resultantConcentration: '100 mg/mL',
      instructions: 'Dapat diberikan langsung bolus intravena cepat tanpa pengenceran, atau diencerkan dalam NaCl 0.9% atau D5W.'
    },
    diluents: {
      ns: true,
      d5w: true,
      rl: false,
      wfi: true,
      notes: 'Kompatibel dengan NaCl 0.9% dan D5W. Hindari Ringer Laktat untuk pengenceran karena data stabilitas terbatas.'
    },
    stability: {
      roomTemp25C: '24 Jam setelah dibuka atau diencerkan',
      refrigerated2to8C: 'Simpan vial utuh pada 2 - 30°C (hindari pembekuan)',
      lightProtectionRequired: true,
      filterRequired: false
    },
    administration: {
      maxPeripheralConcentration: '100 mg/mL (Undiluted bolus)',
      maxCentralConcentration: '100 mg/mL',
      standardInfusionRate: 'Bolus IV cepat dalam waktu 10 detik',
      infusionRoute: 'IV Bolus',
      specialPrecautions: [
        'Hanya diindikasikan untuk reversal relaksasi neuromuskular akibat Rocuronium Bromide atau Vecuronium Bromide.',
        'Inkompatibel secara fisiko-kimiawi dengan Ranitidine, Ondansetron, dan Diazepam (presipitasi instan).',
        'Bilas jalur kateter secara tuntas dengan NaCl 0.9% jika menggunakan jalur infus yang sama dengan anestetik lain.'
      ]
    },
    blackBoxIncompatibilities: [
      'Inkompatibel dengan Ranitidine HCl',
      'Inkompatibel dengan Ondansetron HCl',
      'Inkompatibel dengan Diazepam'
    ]
  },

  // 2. Idarucizumab (Praxbind)
  {
    id: 'iv-idarucizumab',
    name: 'Idarucizumab (Praxbind 2.5 g/50 mL)',
    genericName: 'Idarucizumab Injection',
    brandNames: ['Praxbind'],
    category: 'Antikoagulan & Kardiovaskular',
    phRange: '5.3 - 5.7',
    reconstitution: {
      recommendedDiluent: 'Larutan siap pakai dalam vial',
      volumeToReconstitute: '2 vial x 50 mL (total dosis 5 g)',
      resultantConcentration: '50 mg/mL',
      instructions: 'Diberikan sebagai 2 botol infus 50 mL berturut-turut secara bolus IV lambat atau infus cepat 5-10 menit per botol.'
    },
    diluents: {
      ns: true,
      d5w: false,
      rl: false,
      wfi: false,
      notes: 'Gunakan jalur infus steril khusus (*dedicated line*). Bilas jalur dengan NaCl 0.9% sebelum dan sesudah infus.'
    },
    stability: {
      roomTemp25C: '6 Jam pada suhu ruangan jika vial telah dibuka',
      refrigerated2to8C: '2 - 8°C (dalam karton aslinya terlindung cahaya)',
      lightProtectionRequired: true,
      filterRequired: false
    },
    administration: {
      maxPeripheralConcentration: '50 mg/mL',
      maxCentralConcentration: '50 mg/mL',
      standardInfusionRate: 'Infus IV cepat 5 - 10 menit per botol (total 5 g dalam < 20 menit)',
      infusionRoute: 'IV Bolus & Drip',
      specialPrecautions: [
        'Antidot spesifik pembalik efek antikoagulan Dabigatran pada perdarahan mengancam jiwa atau operasi darurat.',
        'JANGAN dicampur dengan obat lain dalam satu jalur infus (*no other infusion should be co-administered*).'
      ]
    },
    blackBoxIncompatibilities: [
      'Inkompatibel dengan seluruh obat injeksi lain (Wajib dedicated line)',
      'Inkompatibel dengan D5W'
    ]
  },

  // 3. Andexanet Alfa (Ondexxya / Andexxa)
  {
    id: 'iv-andexanet-alfa',
    name: 'Andexanet Alfa (Ondexxya / Andexxa 200 mg)',
    genericName: 'Coagulation Factor Xa (recombinant), inactivated-zhzo',
    brandNames: ['Ondexxya', 'Andexxa'],
    category: 'Antikoagulan & Kardiovaskular',
    phRange: '7.5 - 8.1',
    reconstitution: {
      recommendedDiluent: 'Water for Injection (WFI)',
      volumeToReconstitute: '20 mL WFI per vial 200 mg (kocok perlahan membentuk larutan homogen)',
      resultantConcentration: '10 mg/mL',
      instructions: 'Rekonstitusi setiap vial dengan 20 mL WFI secara perlahan di dinding vial. JANGAN dikocok keras untuk menghindari pembentukan busa protein.'
    },
    diluents: {
      ns: false,
      d5w: false,
      rl: false,
      wfi: true,
      notes: 'Hanya direkonstitusi dengan WFI. Diberikan melalui spuit atau kantong IV polyolefin/PVC.'
    },
    stability: {
      roomTemp25C: '8 Jam setelah rekonstitusi pada suhu kamar (25°C)',
      refrigerated2to8C: 'Simpan serbuk vial pada 2 - 8°C',
      lightProtectionRequired: true,
      filterRequired: true,
      filterType: 'Filter inline 0.2 atau 0.22 mikron polietersulfon (PES) wajib'
    },
    administration: {
      maxPeripheralConcentration: '10 mg/mL',
      maxCentralConcentration: '10 mg/mL',
      standardInfusionRate: 'Bolus target 30 mg/menit diikuti infus kontinu 4 - 8 mg/menit selama 120 menit',
      infusionRoute: 'IV Bolus & Drip',
      specialPrecautions: [
        'Antidot spesifik untuk perdarahan berat akibat direct Factor Xa inhibitor (Rivaroxaban, Apixaban).',
        'Wajib menggunakan set infus dengan filter inline 0.2 atau 0.22 mikron PES berkemampuan ikatan protein rendah.',
        'Pantau ketat tanda-tanda tromboemboli sekunder pasca-reversal.'
      ]
    },
    blackBoxIncompatibilities: [
      'Inkompatibel dengan pelarut selain WFI',
      'Inkompatibel dengan Heparin',
      'Hindari pencampuran dengan larutan elektrolit hipertonik'
    ]
  },

  // 4. Pralidoxime (2-PAM)
  {
    id: 'iv-pralidoxime',
    name: 'Pralidoxime Chloride (2-PAM 1 g)',
    genericName: 'Pralidoxime Chloride Injection',
    brandNames: ['Protopam', 'PAM-2'],
    category: 'Lainnya',
    phRange: '3.5 - 4.5',
    reconstitution: {
      recommendedDiluent: 'Water for Injection (WFI) lalu diencerkan ke 100 mL NaCl 0.9%',
      volumeToReconstitute: '20 mL WFI ke dalam vial 1 g',
      resultantConcentration: '50 mg/mL (rekonstitusi awal) -> 10 mg/mL (infus 100 mL)',
      instructions: 'Larutkan 1 g dengan 20 mL WFI, kemudian masukkan ke dalam 100 mL NaCl 0.9% untuk infus 15 - 30 menit.'
    },
    diluents: {
      ns: true,
      d5w: true,
      rl: false,
      wfi: true,
      notes: 'Kompatibel dengan NaCl 0.9% dan D5W. Hindari larutan alkali.'
    },
    stability: {
      roomTemp25C: '24 Jam setelah rekonstitusi',
      refrigerated2to8C: 'Simpan vial utuh pada 20 - 25°C',
      lightProtectionRequired: false,
      filterRequired: false
    },
    administration: {
      maxPeripheralConcentration: '10 - 20 mg/mL',
      maxCentralConcentration: '50 mg/mL',
      standardInfusionRate: 'Infus IV diberikan selama 15 - 30 menit (atau infus kontinu 500 mg/jam)',
      infusionRoute: 'IV Bolus & Drip',
      specialPrecautions: [
        'Reaktivator kolinesterase pada keracunan pestisida organofosfat; wajib diberikan bersama Atropin Sulfat.',
        'Pemberian bolus IV yang terlalu cepat dapat memicu spasme laring, kekakuan otot, dan henti napas sementara.'
      ]
    },
    blackBoxIncompatibilities: [
      'Inkompatibel dengan Sodium Bicarbonate (degradasi pada media basa)',
      'Inkompatibel dengan Aminophylline'
    ]
  },

  // 5. Sodium Thiosulfate
  {
    id: 'iv-sodium-thiosulfate',
    name: 'Sodium Thiosulfate 25% (Natrium Tiosulfat)',
    genericName: 'Sodium Thiosulfate Injection 250 mg/mL',
    brandNames: ['Sodium Thiosulfate Kalbe', 'Sulfat Na'],
    category: 'Lainnya',
    phRange: '6.5 - 8.0',
    reconstitution: {
      recommendedDiluent: 'Larutan siap pakai 25% (12.5 g / 50 mL)',
      volumeToReconstitute: 'Ampul/Vial 50 mL',
      resultantConcentration: '250 mg/mL',
      instructions: 'Diberikan IV lambat selama 10-15 menit untuk keracunan sianida (setelah Natrium Nitrit).'
    },
    diluents: {
      ns: true,
      d5w: true,
      rl: false,
      wfi: true,
      notes: 'Kompatibel dengan NaCl 0.9% dan D5W.'
    },
    stability: {
      roomTemp25C: '24 Jam setelah dibuka',
      refrigerated2to8C: '20 - 25°C (jangan dibekukan)',
      lightProtectionRequired: false,
      filterRequired: false
    },
    administration: {
      maxPeripheralConcentration: '250 mg/mL',
      maxCentralConcentration: '250 mg/mL',
      standardInfusionRate: 'Infus IV lambat selama 10 - 15 menit',
      infusionRoute: 'IV Drip / Infus Kontinu',
      specialPrecautions: [
        'Komponen kedua dalam antidot keracunan sianida untuk mengubah sianida menjadi tiosianat non-toksik melalui enzim rodanase.',
        'Juga digunakan sebagai antidot infiltrasi ekstravasasi mechlorethamine/mustard klorometin subkutan.'
      ]
    },
    blackBoxIncompatibilities: [
      'Inkompatibel dengan asam kuat (pelepasan gas sulfur dioksida toksik)',
      'Inkompatibel dengan garam timbal dan merkuri'
    ]
  },

  // 6. Sodium Nitroprusside (Nipride)
  {
    id: 'iv-sodium-nitroprusside',
    name: 'Sodium Nitroprusside (Nipride 50 mg)',
    genericName: 'Sodium Nitroprusside for Injection',
    brandNames: ['Nipride', 'Nitropress'],
    category: 'Antikoagulan & Kardiovaskular',
    phRange: '3.5 - 6.0',
    reconstitution: {
      recommendedDiluent: 'Dextrose 5% in Water (D5W WAJIB)',
      volumeToReconstitute: 'Larutkan 50 mg dalam 2 - 3 mL D5W, lalu encerkan ke dalam 250 - 500 mL D5W murni',
      resultantConcentration: '100 - 200 mcg/mL',
      instructions: 'JANGAN PERNAH melarutkan dalam NaCl 0.9% atau Ringer Laktat. Wajib D5W. Segera bungkus kantong dan selang infus dengan aluminium foil atau pelindung cahaya legap.'
    },
    diluents: {
      ns: false,
      d5w: true,
      rl: false,
      wfi: false,
      notes: 'HANYA D5W yang diizinkan untuk stabilitas kimiawi. Saline memicu dekomposisi cepat.'
    },
    stability: {
      roomTemp25C: '24 Jam jika terlindung cahaya sempurna (berwarna cokelat bening/kuning muda)',
      refrigerated2to8C: '24 Jam',
      lightProtectionRequired: true,
      filterRequired: false
    },
    administration: {
      maxPeripheralConcentration: 'Hanya via CVC vena sentral',
      maxCentralConcentration: '200 mcg/mL',
      standardInfusionRate: 'Titrasi 0.3 - 0.5 mcg/kg/menit hingga maks 10 mcg/kg/menit (maksimal 10 menit pada dosis puncak)',
      infusionRoute: 'IV Syringe Pump',
      specialPrecautions: [
        'BLACK BOX WARNING: Paparan cahaya mengubah molekul menjadi ion sianida beracun. Buang jika larutan berubah warna menjadi biru, hijau, atau merah tua.',
        'Waspada toksisitas sianida dan tiosianat pada pemberian > 48 jam atau pasien dengan gangguan fungsi hepar/ginjal.',
        'Wajib monitor tekanan darah arterial kontinu (*invasive arterial line*).'
      ]
    },
    blackBoxIncompatibilities: [
      'Inkompatibel dengan NaCl 0.9% (Normal Saline murni)',
      'Inkompatibel dengan Ringer Laktat',
      'Inkompatibel dengan cahaya (fotodegradasi sianida)',
      'Inkompatibel dengan Dobutamine dan Dopamine'
    ]
  },

  // 7. Levosimendan (Simdax)
  {
    id: 'iv-levosimendan',
    name: 'Levosimendan (Simdax 2.5 mg/mL)',
    genericName: 'Levosimendan Concentrate for Infusion',
    brandNames: ['Simdax'],
    category: 'Vasoaktif / Inotropik',
    phRange: '2.5 - 3.5',
    reconstitution: {
      recommendedDiluent: 'Dextrose 5% in Water (D5W)',
      volumeToReconstitute: '1 vial (5 mL = 12.5 mg) diencerkan ke dalam 500 mL D5W (Konsentrasi: 25 mcg/mL)',
      resultantConcentration: '25 mcg/mL atau 50 mcg/mL',
      instructions: 'Larutan pekat harus diencerkan sebelum digunakan. Lebih disukai D5W (stabilitas 24 jam).'
    },
    diluents: {
      ns: true,
      d5w: true,
      rl: false,
      wfi: false,
      notes: 'Kompatibel dengan D5W dan NaCl 0.9%.'
    },
    stability: {
      roomTemp25C: '24 Jam setelah pengenceran dalam D5W',
      refrigerated2to8C: 'Simpan vial utuh pada 2 - 8°C (kulkas)',
      lightProtectionRequired: true,
      filterRequired: false
    },
    administration: {
      maxPeripheralConcentration: '25 mcg/mL',
      maxCentralConcentration: '50 mcg/mL',
      standardInfusionRate: 'Loading dose 6 - 12 mcg/kg selama 10 menit (opsional), diikuti infus kontinu 0.05 - 0.2 mcg/kg/menit selama 24 jam',
      infusionRoute: 'IV Syringe Pump',
      specialPrecautions: [
        'Kalsium sensitizer & vasodilator arteri-vena untuk dekompensasi gagal jantung berat (HFrEF).',
        'Efek inotropik positif bertahan hingga 7 - 10 hari pasca infus 24 jam selesai karena metabolit aktif OR-1896.',
        'Hindari loading dose jika tekanan darah sistolik awal < 100 mmHg untuk mencegah hipotensi refrakter.'
      ]
    },
    blackBoxIncompatibilities: [
      'Inkompatibel dengan Furosemide (presipitasi seketika akibat pH asam levosimendan)',
      'Inkompatibel dengan Sodium Bicarbonate'
    ]
  },

  // 8. Remifentanil (Ultiva)
  {
    id: 'iv-remifentanil',
    name: 'Remifentanil Hydrochloride (Ultiva 1 mg / 2 mg)',
    genericName: 'Remifentanil for Injection',
    brandNames: ['Ultiva'],
    category: 'Sedasi & Anestesi',
    phRange: '2.5 - 3.5',
    reconstitution: {
      recommendedDiluent: 'WFI atau NaCl 0.9%, kemudian diencerkan ke dalam NaCl 0.9% atau D5W',
      volumeToReconstitute: '1 mg vial dilarutkan dengan 1 mL WFI -> diencerkan ke 50 mL NS (20 mcg/mL)',
      resultantConcentration: '20 - 50 mcg/mL',
      instructions: 'Kocok perlahan hingga larut jernih sempurna. Jangan diberikan bolus tanpa pengenceran.'
    },
    diluents: {
      ns: true,
      d5w: true,
      rl: true,
      wfi: true,
      notes: 'Kompatibel dengan NS, D5W, RL, dan WFI.'
    },
    stability: {
      roomTemp25C: '24 Jam setelah rekonstitusi/pengenceran',
      refrigerated2to8C: 'Simpan vial kering pada suhu 2 - 25°C',
      lightProtectionRequired: false,
      filterRequired: false
    },
    administration: {
      maxPeripheralConcentration: '20 mcg/mL',
      maxCentralConcentration: '50 mcg/mL',
      standardInfusionRate: 'Infus IV kontinu 0.05 - 2 mcg/kg/menit via syringe pump terkalibrasi',
      infusionRoute: 'IV Syringe Pump',
      specialPrecautions: [
        'Opioid sintetik ultra-short acting (waktu paruh eliminasi 3 - 10 menit) yang dimetabolisme oleh esterase darah & jaringan non-spesifik.',
        'Inkompatibel bila dicampur dengan darah atau produk plasma dalam jalur infus yang sama (dihidrolisis seketika oleh esterase darah).',
        'Karena waktu paruh sangat singkat, rencanakan analgesia pasca operasi sebelum infus dihentikan.'
      ]
    },
    blackBoxIncompatibilities: [
      'Inkompatibel dengan produk darah lengkap / PRC / FFP (inaktivasi esterase seketika)',
      'Inkompatibel dengan larutan alkali ekstrem'
    ]
  },

  // 9. Nimodipine IV (Nimotop)
  {
    id: 'iv-nimodipine',
    name: 'Nimodipine IV (Nimotop 10 mg/50 mL)',
    genericName: 'Nimodipine Solution for Infusion',
    brandNames: ['Nimotop'],
    category: 'Antikoagulan & Kardiovaskular',
    phRange: '6.0 - 7.5',
    reconstitution: {
      recommendedDiluent: 'Larutan siap pakai alkohol-etanol (10 mg/50 mL = 0.2 mg/mL)',
      volumeToReconstitute: 'Botol vial kaca 50 mL',
      resultantConcentration: '0.2 mg/mL (200 mcg/mL)',
      instructions: 'Larutan siap pakai. Harus diinfuskan melalui kateter vena sentral (CVC) menggunakan pipa/selang infus khusus polietilen (PE) atau poliuretan.'
    },
    diluents: {
      ns: true,
      d5w: true,
      rl: false,
      wfi: false,
      notes: 'Kompatibel co-infus via Y-site dengan NaCl 0.9% atau D5W.'
    },
    stability: {
      roomTemp25C: 'Terlindung dari cahaya langsung (larutan peka sinar UV)',
      refrigerated2to8C: 'Simpan botol utuh pada suhu 15 - 25°C dalam kemasan karton luar',
      lightProtectionRequired: true,
      filterRequired: false
    },
    administration: {
      maxPeripheralConcentration: 'Wajib melalui Vena Sentral (CVC)',
      maxCentralConcentration: '0.2 mg/mL',
      standardInfusionRate: 'Mulai 1 mg/jam (5 mL/jam) selama 2 jam, dapat dinaikkan ke 2 mg/jam jika tekanan darah stabil',
      infusionRoute: 'IV Syringe Pump',
      specialPrecautions: [
        'Pencegahan dan terapi defisit neurologis iskemik akibat vasospasme serebral pasca perdarahan subaraknoid (SAH).',
        'BAHAYA ADSORPSI: Nimodipin sangat lipofilik dan teradsorpsi kuat pada plastik polivinil klorida (PVC). WAJIB menggunakan tubing set polietilen (PE).',
        'HARAM DIBERIKAN SECARA INTRAVENA MURNI TANPA PIPA KHUSUS PVC-FREE.'
      ]
    },
    blackBoxIncompatibilities: [
      'Inkompatibel dengan selang / kantong infus berbahan PVC (adsorpsi hingga 50%)',
      'Inkompatibel dengan paparan sinar ultraviolet langsung'
    ]
  },

  // 10. Epoprostenol (Flolan / Prostacyclin)
  {
    id: 'iv-epoprostenol',
    name: 'Epoprostenol Sodium (Flolan 0.5 mg / 1.5 mg)',
    genericName: 'Epoprostenol for Injection',
    brandNames: ['Flolan', 'Veletri'],
    category: 'Antikoagulan & Kardiovaskular',
    phRange: '10.2 - 10.8 (Sangat Basa)',
    reconstitution: {
      recommendedDiluent: 'Hanya dengan pelarut khusus (Sterile Diluent for Flolan) atau WFI/NaCl 0.9% (Veletri)',
      volumeToReconstitute: 'Vial 0.5 mg dilarutkan dalam 50 mL pelarut khusus',
      resultantConcentration: '3.000 - 15.000 ng/mL (3 - 15 mcg/mL)',
      instructions: 'Wajib diencerkan hanya dengan pelarut pH tinggi khusus untuk mempertahankan stabilitas molekul prostasiklin.'
    },
    diluents: {
      ns: false,
      d5w: false,
      rl: false,
      wfi: false,
      notes: 'Hanya kompatibel dengan Sterile Diluent khusus pabrikan untuk Flolan.'
    },
    stability: {
      roomTemp25C: '8 Jam pada 25°C (atau 24 jam bila didinginkan dengan ice pack khusus)',
      refrigerated2to8C: '48 Jam pada 2 - 8°C',
      lightProtectionRequired: true,
      filterRequired: true,
      filterType: 'Filter 0.22 mikron saat persiapan'
    },
    administration: {
      maxPeripheralConcentration: 'Hanya via kateter CVC permanen Hickman/Broviac',
      maxCentralConcentration: '15.000 ng/mL',
      standardInfusionRate: 'Infus IV kontinu tanpa henti 2 - 4 ng/kg/menit, dititrasi bertahap',
      infusionRoute: 'IV Syringe Pump',
      specialPrecautions: [
        'BLACK BOX WARNING: Penghentian mendadak (*abrupt withdrawal*) dapat memicu rebound hipertensi pulmonal mematikan (*fatal pulmonary crisis*).',
        'Memerlukan jalur CVC khusus tanpa cabang obat lain (*dedicated lumen*).',
        'Waktu paruh eliminasi sangat singkat (< 3 menit).'
      ]
    },
    blackBoxIncompatibilities: [
      'Inkompatibel dengan seluruh obat dan pelarut lain (Wajib dedicated line)',
      'Inkompatibel dengan larutan asam atau netral (degradasi cepat di bawah pH 10)'
    ]
  },

  // 11. Ceftaroline Fosamil (Zinforo)
  {
    id: 'iv-ceftaroline',
    name: 'Ceftaroline Fosamil (Zinforo 600 mg)',
    genericName: 'Ceftaroline Fosamil Injection',
    brandNames: ['Zinforo', 'Teflaro'],
    category: 'Antibiotik / Antijamur',
    phRange: '4.8 - 6.5',
    reconstitution: {
      recommendedDiluent: 'Water for Injection (WFI) lalu diencerkan ke 250 mL NaCl 0.9% atau D5W',
      volumeToReconstitute: '20 mL WFI ke dalam vial 600 mg',
      resultantConcentration: '30 mg/mL (rekonstitusi awal) -> 2.4 mg/mL (dalam 250 mL)',
      instructions: 'Kocok perlahan hingga larutan berwarna kuning pucat jernih.'
    },
    diluents: {
      ns: true,
      d5w: true,
      rl: false,
      wfi: true,
      notes: 'Kompatibel dengan NaCl 0.9%, D5W, dan D2.5W. Inkompatibel dengan Ringer Laktat.'
    },
    stability: {
      roomTemp25C: '6 Jam pada suhu kamar (25°C)',
      refrigerated2to8C: '24 Jam pada 2 - 8°C',
      lightProtectionRequired: false,
      filterRequired: false
    },
    administration: {
      maxPeripheralConcentration: '3 mg/mL',
      maxCentralConcentration: '3 mg/mL',
      standardInfusionRate: 'Infus IV diberikan selama 60 menit',
      infusionRoute: 'IV Drip / Infus Kontinu',
      specialPrecautions: [
        'Sefalosporin generasi ke-5 dengan aktivitas bakterisidal poten terhadap MRSA (Methicillin-Resistant S. aureus) dan hVISA.',
        'Sesuaikan dosis pada gangguan klirens ginjal (CrCl < 50 mL/menit).'
      ]
    },
    blackBoxIncompatibilities: [
      'Inkompatibel dengan Ringer Laktat',
      'Inkompatibel dengan Acyclovir dan Ganciclovir',
      'Inkompatibel dengan Furosemide'
    ]
  },

  // 12. Ceftobiprole Medocaril (Zevtera)
  {
    id: 'iv-ceftobiprole',
    name: 'Ceftobiprole Medocaril (Zevtera 500 mg)',
    genericName: 'Ceftobiprole Medocaril Sodium',
    brandNames: ['Zevtera'],
    category: 'Antibiotik / Antijamur',
    phRange: '4.5 - 5.5',
    reconstitution: {
      recommendedDiluent: 'Water for Injection (WFI) atau D5W',
      volumeToReconstitute: '10 mL WFI atau D5W ke dalam vial 500 mg, encerkan ke 250 mL NaCl 0.9%',
      resultantConcentration: '2 mg/mL',
      instructions: 'Kocok kuat selama 10 menit hingga serbuk larut sempurna tanpa partikel sisa.'
    },
    diluents: {
      ns: true,
      d5w: true,
      rl: false,
      wfi: true,
      notes: 'Kompatibel dengan NaCl 0.9% dan D5W.'
    },
    stability: {
      roomTemp25C: '6 Jam pada suhu ruangan',
      refrigerated2to8C: '24 Jam pada 2 - 8°C',
      lightProtectionRequired: false,
      filterRequired: false
    },
    administration: {
      maxPeripheralConcentration: '2 mg/mL',
      maxCentralConcentration: '2 mg/mL',
      standardInfusionRate: 'Infus IV lambat selama 120 menit (2 jam)',
      infusionRoute: 'IV Drip / Infus Kontinu',
      specialPrecautions: [
        'Sefalosporin anti-MRSA spektrum luas untuk CAP dan HAP berat.',
        'Wajib diinfuskan selama 2 jam penuh untuk meminimalkan mual dan flebitis.'
      ]
    },
    blackBoxIncompatibilities: [
      'Inkompatibel dengan Aminoglycosides (Gentamicin/Amikacin)',
      'Inkompatibel dengan larutan alkali'
    ]
  },

  // 13. Imipenem / Cilastatin / Relebactam (Recarbrio)
  {
    id: 'iv-imipenem-cilastatin-relebactam',
    name: 'Imipenem / Cilastatin / Relebactam (Recarbrio 1.25 g)',
    genericName: 'Imipenem, Cilastatin, and Relebactam for Injection',
    brandNames: ['Recarbrio'],
    category: 'Antibiotik / Antijamur',
    phRange: '6.5 - 7.5',
    reconstitution: {
      recommendedDiluent: 'NaCl 0.9% (Normal Saline)',
      volumeToReconstitute: 'Vial 1.25 g diencerkan ke dalam 100 mL NaCl 0.9%',
      resultantConcentration: '5 mg/mL (Imipenem)',
      instructions: 'Kocok secara teratur hingga larutan jernih tak berwarna atau kuning pucat.'
    },
    diluents: {
      ns: true,
      d5w: false,
      rl: false,
      wfi: false,
      notes: 'Hanya kompatibel dengan NaCl 0.9%. Hindari larutan mengandung laktat atau dekstrosa murni.'
    },
    stability: {
      roomTemp25C: '2 Jam pada suhu kamar (25°C)',
      refrigerated2to8C: '24 Jam pada 2 - 8°C dalam NaCl 0.9%',
      lightProtectionRequired: false,
      filterRequired: false
    },
    administration: {
      maxPeripheralConcentration: '12.5 mg/mL',
      maxCentralConcentration: '12.5 mg/mL',
      standardInfusionRate: 'Infus IV diberikan selama 30 menit',
      infusionRoute: 'IV Drip / Infus Kontinu',
      specialPrecautions: [
        'Antibiotik kombinasi karbapenem inhibitor baru untuk patogen Gram-negatif resisten karbapenem (CRE/Pseudomonas DTR).',
        'Kontraindikasi bersama Asam Valproat (penurunan drastis kadar asam valproat hingga picu status epileptikus).'
      ]
    },
    blackBoxIncompatibilities: [
      'Inkompatibel mutlak dengan Sodium Valproate (kejang refrakter)',
      'Inkompatibel dengan D5W murni'
    ]
  },

  // 14. Ertapenem (Invanz)
  {
    id: 'iv-ertapenem',
    name: 'Ertapenem Sodium (Invanz 1 g)',
    genericName: 'Ertapenem Sodium for Injection',
    brandNames: ['Invanz'],
    category: 'Antibiotik / Antijamur',
    phRange: '7.0 - 8.0',
    reconstitution: {
      recommendedDiluent: 'Water for Injection (WFI) atau NaCl 0.9%, lalu diencerkan ke 50 mL NaCl 0.9%',
      volumeToReconstitute: '10 mL WFI ke dalam vial 1 g',
      resultantConcentration: '100 mg/mL (awal) -> 20 mg/mL (infus 50 mL NS)',
      instructions: 'JANGAN PERNAH melarutkan dalam cairan yang mengandung dekstrosa (D5W) karena stabilitas ertapenem menurun drastis.'
    },
    diluents: {
      ns: true,
      d5w: false,
      rl: false,
      wfi: true,
      notes: 'HANYA kompatibel dengan NaCl 0.9% dan WFI. Inkompatibel dengan Dekstrosa.'
    },
    stability: {
      roomTemp25C: '6 Jam setelah pengenceran dalam NaCl 0.9%',
      refrigerated2to8C: '24 Jam pada 2 - 8°C (gunakan dalam 4 jam pasca dikeluarkan dari kulkas)',
      lightProtectionRequired: false,
      filterRequired: false
    },
    administration: {
      maxPeripheralConcentration: '20 mg/mL',
      maxCentralConcentration: '20 mg/mL',
      standardInfusionRate: 'Infus IV diberikan selama 30 menit sekali sehari (dosis tunggal harian)',
      infusionRoute: 'IV Drip / Infus Kontinu',
      specialPrecautions: [
        'Karbapenem dengan waktu paruh panjang (dosis cukup 1x sehari), namun TIDAK aktif terhadap Pseudomonas aeruginosa atau Enterococcus.',
        'Kontraindikasi bersama Asam Valproat.'
      ]
    },
    blackBoxIncompatibilities: [
      'Inkompatibel dengan D5W / Dekstrosa (hidrolisis molekul)',
      'Inkompatibel dengan Sodium Valproate'
    ]
  },

  // 15. Ganciclovir (Cymevene)
  {
    id: 'iv-ganciclovir',
    name: 'Ganciclovir Sodium (Cymevene 500 mg)',
    genericName: 'Ganciclovir Sodium for Injection',
    brandNames: ['Cymevene'],
    category: 'Antibiotik / Antijamur',
    phRange: '10.8 - 11.5 (Sangat Basa)',
    reconstitution: {
      recommendedDiluent: 'Water for Injection (WFI), lalu diencerkan ke 100 mL NaCl 0.9% atau D5W',
      volumeToReconstitute: '10 mL WFI steril ke dalam vial 500 mg',
      resultantConcentration: '50 mg/mL (awal) -> <= 10 mg/mL (dalam 100 mL cairan infus)',
      instructions: 'JANGAN gunakan cairan bakteriostatik yang mengandung paraben. Setelah dilarutkan, wajib diencerkan hingga <= 10 mg/mL sebelum infus.'
    },
    diluents: {
      ns: true,
      d5w: true,
      rl: true,
      wfi: true,
      notes: 'Kompatibel dengan NaCl 0.9%, D5W, dan Ringer Laktat.'
    },
    stability: {
      roomTemp25C: '12 Jam setelah rekonstitusi awal; 24 jam setelah pengenceran dalam kantong infus',
      refrigerated2to8C: 'JANGAN SIMPAN DI KULKAS pasca rekonstitusi (dapat terjadi presipitasi)',
      lightProtectionRequired: false,
      filterRequired: false
    },
    administration: {
      maxPeripheralConcentration: '10 mg/mL',
      maxCentralConcentration: '10 mg/mL',
      standardInfusionRate: 'Infus IV lambat selama 60 menit dengan hidrasi adekuat',
      infusionRoute: 'IV Drip / Infus Kontinu',
      specialPrecautions: [
        'pH larutan sangat basa (~11): IRITAN / VESICANT potensial. Hindari ekstravasasi perifer yang dapat memicu nekrosis jaringan parah.',
        'JANGAN PERNAH diberikan secara IV bolus cepat atau IM/SK.',
        'Wajib monitor neutrofil (ANC) dan trombosit karena risiko mielosupresi berat.'
      ]
    },
    blackBoxIncompatibilities: [
      'Inkompatibel dengan obat-obat asam (Ondansetron, Midazolam, Fentanyl, Amiodarone)',
      'Inkompatibel dengan pelarut beralkohol'
    ]
  },

  // 16. Bortezomib (Velcade)
  {
    id: 'iv-bortezomib',
    name: 'Bortezomib (Velcade 3.5 mg)',
    genericName: 'Bortezomib for Injection',
    brandNames: ['Velcade'],
    category: 'Kemoterapi Onkologi & Imunologi',
    phRange: '4.0 - 6.5',
    reconstitution: {
      recommendedDiluent: 'NaCl 0.9% (Normal Saline murni)',
      volumeToReconstitute: '3.5 mL NaCl 0.9% untuk rute IV (Konsentrasi: 1 mg/mL)',
      resultantConcentration: '1 mg/mL (IV) atau 2.5 mg/mL (Subkutan)',
      instructions: 'Larutkan hati-hati di bawah lemari BSC Farmasi Sitotoksik. Berikan bolus IV cepat 3-5 detik.'
    },
    diluents: {
      ns: true,
      d5w: false,
      rl: false,
      wfi: false,
      notes: 'HANYA direkonstitusi dengan NaCl 0.9% steril.'
    },
    stability: {
      roomTemp25C: '8 Jam pada 25°C dalam spuit kaca/polipropilen',
      refrigerated2to8C: 'Simpan vial kering pada 20 - 25°C terlindung cahaya',
      lightProtectionRequired: true,
      filterRequired: false
    },
    administration: {
      maxPeripheralConcentration: '1 mg/mL (IV)',
      maxCentralConcentration: '1 mg/mL',
      standardInfusionRate: 'Bolus IV cepat 3 - 5 detik (rute Subkutan lebih disukai untuk mengurangi neuropati perifer)',
      infusionRoute: 'IV Bolus',
      specialPrecautions: [
        'FATAL JIKA DIBERIKAN SECARA INTRATEKAL (kematian akibat nekrosis mielin asending).',
        'Bilas kateter vena dengan NaCl 0.9% sebelum dan sesudah pemberian.'
      ]
    },
    blackBoxIncompatibilities: [
      'Inkompatibel dengan rute intratekal (KONTRAINDIKASI MUTLAK)',
      'Inkompatibel dengan D5W'
    ]
  },

  // 17. Pembrolizumab (Keytruda)
  {
    id: 'iv-pembrolizumab',
    name: 'Pembrolizumab (Keytruda 100 mg/4 mL)',
    genericName: 'Pembrolizumab Solution for Infusion',
    brandNames: ['Keytruda'],
    category: 'Kemoterapi Onkologi & Imunologi',
    phRange: '5.0 - 6.0',
    reconstitution: {
      recommendedDiluent: 'NaCl 0.9% atau D5W',
      volumeToReconstitute: 'Ambil volume yang sesuai (misal 200 mg = 8 mL) masukkan ke kantong 100 mL NaCl 0.9%',
      resultantConcentration: '1 - 10 mg/mL',
      instructions: 'Balikkan kantong infus perlahan 10-15 kali untuk mencampur. JANGAN DIKOCOK KERAS (dapat mendenaturasi antibodi monoklonal).'
    },
    diluents: {
      ns: true,
      d5w: true,
      rl: false,
      wfi: false,
      notes: 'Kompatibel dengan NaCl 0.9% dan D5W.'
    },
    stability: {
      roomTemp25C: '6 Jam pada suhu ruangan termasuk durasi waktu infus',
      refrigerated2to8C: '24 Jam pada 2 - 8°C',
      lightProtectionRequired: true,
      filterRequired: true,
      filterType: 'Filter inline 0.2 hingga 5 mikron steril berikatan protein rendah WAJIB'
    },
    administration: {
      maxPeripheralConcentration: '10 mg/mL',
      maxCentralConcentration: '10 mg/mL',
      standardInfusionRate: 'Infus IV diberikan selama 30 menit via jalur infus khusus',
      infusionRoute: 'IV Drip / Infus Kontinu',
      specialPrecautions: [
        'Imunoterapi penghambat checkpoint PD-1. Wajib menggunakan set infus dengan filter inline 0.2 - 5 mikron polietersulfon.',
        'JANGAN co-infus dengan obat sitotoksik atau elektrolit lain dalam satu jalur.',
        'Waspada reaksi imun terkait organ (kolitis, pneumonitis, tiroiditis, nefritis).'
      ]
    },
    blackBoxIncompatibilities: [
      'Inkompatibel dengan seluruh obat sitotoksik lain dalam satu jalur',
      'Inkompatibel dengan pengocokan mekanis hebat'
    ]
  },

  // 18. Bevacizumab (Avastin)
  {
    id: 'iv-bevacizumab',
    name: 'Bevacizumab (Avastin 100 mg/4 mL / 400 mg/16 mL)',
    genericName: 'Bevacizumab Injection',
    brandNames: ['Avastin'],
    category: 'Kemoterapi Onkologi & Imunologi',
    phRange: '5.9 - 6.3',
    reconstitution: {
      recommendedDiluent: 'NaCl 0.9% (Normal Saline)',
      volumeToReconstitute: 'Dosis yang dihitung dimasukkan ke dalam 100 mL kantong NaCl 0.9%',
      resultantConcentration: '1.4 - 16.5 mg/mL',
      instructions: 'JANGAN dicampur atau diinfuskan dengan larutan Dekstrosa (D5W) karena ketidakstabilan ikatan antibodi.'
    },
    diluents: {
      ns: true,
      d5w: false,
      rl: false,
      wfi: false,
      notes: 'HANYA kompatibel dengan NaCl 0.9%. Inkompatibel dengan D5W.'
    },
    stability: {
      roomTemp25C: 'Hingga 8 jam pada suhu kamar setelah pengenceran dalam kantong polyolefin/PVC',
      refrigerated2to8C: '24 Jam pada 2 - 8°C terlindung cahaya',
      lightProtectionRequired: true,
      filterRequired: false
    },
    administration: {
      maxPeripheralConcentration: '16.5 mg/mL',
      maxCentralConcentration: '16.5 mg/mL',
      standardInfusionRate: 'Dosis pertama 90 menit; jika toleransi baik dosis kedua 60 menit; selanjutnya 30 menit',
      infusionRoute: 'IV Drip / Infus Kontinu',
      specialPrecautions: [
        'Antibodi monoklonal anti-VEGF anti-angiogenesis.',
        'Waspada perforasi gastrointestinal, komplikasi penyembuhan luka operasi (tunda operasi mayor minimal 28 hari pasca terapi), dan perdarahan hebat.'
      ]
    },
    blackBoxIncompatibilities: [
      'Inkompatibel mutlak dengan D5W / Dekstrosa (presipitasi protein)',
      'Inkompatibel dengan obat kemoterapi asam lain dalam satu jalur'
    ]
  },

  // 19. Trastuzumab Emtansine (Kadcyla T-DM1)
  {
    id: 'iv-trastuzumab-emtansine',
    name: 'Trastuzumab Emtansine (Kadcyla T-DM1 100 mg / 160 mg)',
    genericName: 'Ado-Trastuzumab Emtansine for Injection',
    brandNames: ['Kadcyla'],
    category: 'Kemoterapi Onkologi & Imunologi',
    phRange: '4.8 - 5.3',
    reconstitution: {
      recommendedDiluent: 'Water for Injection (WFI) steril',
      volumeToReconstitute: '5 mL WFI ke dalam vial 100 mg atau 8 mL WFI ke dalam vial 160 mg',
      resultantConcentration: '20 mg/mL',
      instructions: 'Putar vial perlahan hingga larut jernih tanpa buih. Encerkan ke dalam 250 mL NaCl 0.9% kantong non-PVC (bebas DEHP).'
    },
    diluents: {
      ns: true,
      d5w: false,
      rl: false,
      wfi: true,
      notes: 'Gunakan hanya NaCl 0.9% untuk infus. Jangan gunakan Dekstrosa 5% (D5W).'
    },
    stability: {
      roomTemp25C: '24 Jam pada suhu kamar (25°C) setelah pengenceran dalam kantong PVC-free',
      refrigerated2to8C: '24 Jam pada 2 - 8°C',
      lightProtectionRequired: true,
      filterRequired: true,
      filterType: 'Filter inline 0.2 atau 0.22 mikron polietersulfon (PES) wajib'
    },
    administration: {
      maxPeripheralConcentration: '0.6 - 3.2 mg/mL',
      maxCentralConcentration: '3.2 mg/mL',
      standardInfusionRate: 'Infus IV pertama 90 menit; dosis pemeliharaan 30 menit jika dapat ditoleransi',
      infusionRoute: 'IV Drip / Infus Kontinu',
      specialPrecautions: [
        'Antibody-Drug Conjugate (ADC) sitotoksik. JANGAN PERNAH mensubstitusi dengan Trastuzumab standar (Herceptin).',
        'Wajib menggunakan filter inline 0.22 mikron dan kantong bebas DEHP.',
        'Wajib pantau LVEF fungsi fraksi ejeksi jantung dan enzim hepar berkala.'
      ]
    },
    blackBoxIncompatibilities: [
      'Inkompatibel dengan D5W / Dekstrosa murni',
      'Inkompatibel dengan set infus mengandung DEHP'
    ]
  },

  // 20. Esketamine (Ketanest-S)
  {
    id: 'iv-ketamine-s',
    name: 'Esketamine Hydrochloride (Ketanest-S 25 mg/mL)',
    genericName: 'Esketamine Hydrochloride Injection',
    brandNames: ['Ketanest-S', 'Spravato IV'],
    category: 'Sedasi & Anestesi',
    phRange: '3.5 - 5.5',
    reconstitution: {
      recommendedDiluent: 'NaCl 0.9% atau D5W',
      volumeToReconstitute: 'Ampul 2 mL (50 mg)',
      resultantConcentration: '1 - 2 mg/mL (dalam syringe pump)',
      instructions: 'Dapat diberikan bolus perlahan atau diencerkan dalam 50 mL NaCl 0.9% untuk infus kontinu.'
    },
    diluents: {
      ns: true,
      d5w: true,
      rl: true,
      wfi: true,
      notes: 'Kompatibel dengan NaCl 0.9%, D5W, dan Ringer Laktat.'
    },
    stability: {
      roomTemp25C: '24 Jam setelah pengenceran',
      refrigerated2to8C: 'Simpan ampul pada suhu 15 - 25°C',
      lightProtectionRequired: false,
      filterRequired: false
    },
    administration: {
      maxPeripheralConcentration: '25 mg/mL',
      maxCentralConcentration: '25 mg/mL',
      standardInfusionRate: 'Bolus IV lambat minimal 60 detik atau titrasi infus kontinu 0.1 - 0.5 mg/kg/jam',
      infusionRoute: 'IV Bolus & Drip',
      specialPrecautions: [
        'S-enansiomer ketamin dengan potensi analgesik 2x lebih tinggi dibanding ketamin rasemat dan efek samping psikomimetik lebih rendah.',
        'Inkompatibel secara fisiko-kimiawi dengan Barbiturat (Thiopental) dan Diazepam (presipitasi instan).'
      ]
    },
    blackBoxIncompatibilities: [
      'Inkompatibel dengan Thiopental Sodium',
      'Inkompatibel dengan Diazepam'
    ]
  }
];
