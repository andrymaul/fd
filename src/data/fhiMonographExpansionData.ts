// =====================================================================
// FARMAKOPE HERBAL INDONESIA (FHI) EDISI II & FOHAI KEMENKES RI
// EKSPANSI 25 MONOGRAFI RESMI MUTU, PENANDA (MARKER) & POSOLOGI
// Kepmenkes RI No. HK.01.07/MENKES/187/2017 & Formularium Fitofarmaka
// ZERO DATA DUPLICATION CLINICAL LAYER
// =====================================================================

import { FhiMonographDetails } from './fhiMonographData';

export const FHI_MONOGRAPHS_EXPANSION_DATABASE: Record<string, FhiMonographDetails> = {
  'herb-adas': {
    herbId: 'herb-adas',
    officialSimplisiaName: 'Foeniculi Fructus',
    officialExtractName: 'Foeniculi Fructus Extractum Siccum',
    botanicalFamily: 'Apiaceae / Umbelliferae',
    plantPartUsed: 'Fructus (Buah matang dikeringkan)',
    organSystemCategory: 'Gastroprotektor',
    standardizationCategory: 'Jamu Terstandar FHI',
    registeredCommercialProducts: ['Minyak Telon Cap Tiga Anak', 'Minyak Adas Terstandar', 'Fitocare Telon'],
    fhiMarkers: [
      {
        markerName: 'Minyak Atsiri total mengandung Trans-Anetol',
        minimumContent: 'Kadar minyak atsiri tidak kurang dari 1,40% v/b; kadar trans-anetol tidak kurang dari 80,0% dalam minyak atsiri',
        assayMethod: 'Kromatografi Gas - Spektrometri Massa (GC-MS) atau Destilasi Stahl',
        therapeuticRole: 'Spasmolitik otot polos saluran cerna, karminatif, pereda kolik infantil, dan stimulasi motilitas usus halus.'
      }
    ],
    fhiPosology: {
      simplisiaDailyDose: '3 - 7 gram buah kering diseduh dengan 1 gelas air mendidih, diminum 2-3 kali sehari.',
      extractStandardDose: 'Ekstrak terstandar 150 - 300 mg per hari, terbagi dalam 2-3 dosis.',
      administrationInstructions: 'Diminum 30 menit setelah makan atau saat timbul gejala kembung/begah. Beri jeda 2-3 jam dari antibiotik fluorokuinolon.'
    },
    fhiQualityParameters: {
      lossOnDrying: 'Tidak lebih dari 10,0%',
      totalAsh: 'Tidak lebih dari 10,5%',
      acidInsolubleAsh: 'Tidak lebih dari 1,5%',
      waterSolubleExtract: 'Tidak kurang dari 12,0%',
      ethanolSolubleExtract: 'Tidak kurang dari 8,0%'
    },
    clinicalEvidenceLevel: 'Jamu Terstandar FHI (Uji Khasiat Karminatif & Spasmolitik In Vitro / In Vivo)',
    contraindicationsFhi: [
      'Wanita hamil trimester 1 (efek emenagoga / stimulasi kontraksi uterus ringan pada dosis tinggi)',
      'Kanker payudara sensitif estrogen / reseptor ER-positif (efek fitoestrogen trans-anetol)'
    ],
    officialMonographSource: 'Farmakope Herbal Indonesia Edisi II (2017) Hal. 15-21 & FOHAI Kemenkes RI'
  },

  'herb-temu-putih': {
    herbId: 'herb-temu-putih',
    officialSimplisiaName: 'Curcumae Zedoariae Rhizoma',
    officialExtractName: 'Curcumae Zedoariae Rhizomatis Extractum Siccum',
    botanicalFamily: 'Zingiberaceae',
    plantPartUsed: 'Rhizoma (Rimpang dikeringkan)',
    organSystemCategory: 'Imunomodulator',
    standardizationCategory: 'Jamu Terstandar FHI',
    registeredCommercialProducts: ['Temu Putih Kapsul Terstandar', 'Zedoaria Ekstrak', 'Kapsul Curcuma Zedoaria'],
    fhiMarkers: [
      {
        markerName: 'Zederon & Minyak Atsiri Seskuiterpen',
        minimumContent: 'Kadar zederon tidak kurang dari 0,25% w/w; minyak atsiri tidak kurang dari 1,2% v/b',
        assayMethod: 'KCKT / HPLC fase balik detektor UV 245 nm',
        therapeuticRole: 'Inhibisi proliferasi sel abnormal, apoptosis sel mutan, antioksidan poten, dan proteksi mukosa lambung.'
      }
    ],
    fhiPosology: {
      simplisiaDailyDose: '3 - 9 gram rimpang kering direbus dengan 400 mL air hingga 200 mL, diminum 2 kali sehari.',
      extractStandardDose: 'Ekstrak terstandar 250 - 500 mg, diminum 2 kali sehari.',
      administrationInstructions: 'Diminum setelah makan. Hentikan 2 minggu sebelum prosedur pembedahan atau tindakan invasif gigi.'
    },
    fhiQualityParameters: {
      lossOnDrying: 'Tidak lebih dari 10,0%',
      totalAsh: 'Tidak lebih dari 7,0%',
      acidInsolubleAsh: 'Tidak lebih dari 1,2%',
      waterSolubleExtract: 'Tidak kurang dari 10,0%',
      ethanolSolubleExtract: 'Tidak kurang dari 9,5%'
    },
    clinicalEvidenceLevel: 'Jamu Terstandar FHI (Uji Aktivitas Sitotoksik Selektif & Imunostimulan Pra-Klinis)',
    contraindicationsFhi: [
      'Kehamilan dan masa menyusui (efek stimulasi uterus)',
      'Perdarahan aktif atau pasien dengan gangguan koagulasi darah'
    ],
    officialMonographSource: 'Farmakope Herbal Indonesia Edisi II (2017) Hal. 518-524 & FOHAI Kemenkes RI'
  },

  'herb-habbatussauda': {
    herbId: 'herb-habbatussauda',
    officialSimplisiaName: 'Nigellae Sativae Semen',
    officialExtractName: 'Nigellae Sativae Seminis Extractum / Oleum',
    botanicalFamily: 'Ranunculaceae',
    plantPartUsed: 'Semen (Biji matang)',
    organSystemCategory: 'Imunomodulator',
    standardizationCategory: 'Obat Herbal Terstandar (OHT)',
    registeredCommercialProducts: ['Habbasyi Oil Kapsul (OHT)', 'Nigellive Kapsul', 'Habbatussauda Kurma Ajwa Plus'],
    fhiMarkers: [
      {
        markerName: 'Timokuinon (Thymoquinone / TQ)',
        minimumContent: 'Tidak kurang dari 1,50% w/w dalam minyak atsiri atau 0,20% w/w dalam ekstrak biji',
        assayMethod: 'KCKT / HPLC fase terbalik detektor DAD/UV 254 nm',
        therapeuticRole: 'Regulasi ekspresi sitokin pro-inflamasi TNF-alfa dan IL-6, bronkodilator via modulasi reseptor leukotrien, dan perlindungan stres oksidatif nefron.'
      }
    ],
    fhiPosology: {
      simplisiaDailyDose: '1,5 - 3 gram biji bubuk per hari dikonsumsi bersama makanan atau madu.',
      extractStandardDose: 'Minyak terstandar 500 - 1000 mg (1-2 kapsul lunak), diminum 1-2 kali sehari.',
      administrationInstructions: 'Diminum bersama atau segera setelah makan untuk mencegah iritasi lambung ringan.'
    },
    fhiQualityParameters: {
      lossOnDrying: 'Tidak lebih dari 8,0%',
      totalAsh: 'Tidak lebih dari 6,5%',
      acidInsolubleAsh: 'Tidak lebih dari 0,8%',
      waterSolubleExtract: 'Tidak kurang dari 15,0%',
      ethanolSolubleExtract: 'Tidak kurang dari 18,0%'
    },
    clinicalEvidenceLevel: 'Obat Herbal Terstandar (Uji Klinis RCT Imunomodulasi, Asma Alergi & Sindrom Metabolik)',
    contraindicationsFhi: [
      'Hipotensi berat simtomatik',
      'Pasien pasca-transplantasi organ yang bergantung pada imunosupresan tacrolimus/siklosporin'
    ],
    officialMonographSource: 'Farmakope Herbal Indonesia Edisi II (2017) Hal. 248-255 & WHO Monographs on Selected Medicinal Plants Vol 4'
  },

  'herb-suruhan': {
    herbId: 'herb-suruhan',
    officialSimplisiaName: 'Peperomiae Pellucidae Herba',
    officialExtractName: 'Peperomiae Pellucidae Herbae Extractum Siccum',
    botanicalFamily: 'Piperaceae',
    plantPartUsed: 'Herba (Seluruh herba segar atau kering)',
    organSystemCategory: 'Analgesik & Antiinflamasi',
    standardizationCategory: 'Jamu Terstandar FHI',
    registeredCommercialProducts: ['Suruhan Kapsul Herbal Asam Urat', 'Herba Suruhan Terstandar'],
    fhiMarkers: [
      {
        markerName: 'Flavonoid Total dihitung sebagai Kuersetin / Pelusidatin',
        minimumContent: 'Tidak kurang dari 0,65% w/w dihitung sebagai kuersetin',
        assayMethod: 'Spektrofotometri UV-Vis metode Kolorimetri AlCl3',
        therapeuticRole: 'Inhibisi kompetitif enzim Xantin Oksidase (menurunkan sintesis asam urat darah) serta supresi prostaglandin COX-2.'
      }
    ],
    fhiPosology: {
      simplisiaDailyDose: '15 - 30 gram herba segar direbus dengan 300 mL air hingga 150 mL, diminum hangat 2 kali sehari.',
      extractStandardDose: 'Ekstrak terstandar 250 - 500 mg, diminum 2 kali sehari setelah makan.',
      administrationInstructions: 'Minum air putih minimal 2,5 liter sehari untuk memfasilitasi ekskresi kristal urat melalui ginjal.'
    },
    fhiQualityParameters: {
      lossOnDrying: 'Tidak lebih dari 10,0%',
      totalAsh: 'Tidak lebih dari 14,0%',
      acidInsolubleAsh: 'Tidak lebih dari 2,0%',
      waterSolubleExtract: 'Tidak kurang dari 14,5%',
      ethanolSolubleExtract: 'Tidak kurang dari 7,0%'
    },
    clinicalEvidenceLevel: 'Jamu Terstandar FHI (Uji Pra-Klinis Penghambatan Xantin Oksidase & Analgesik In Vivo)',
    contraindicationsFhi: [
      'Gagal ginjal kronik derajat 4-5 dengan anuria',
      'Pasien dengan riwayat hipersensitivitas terhadap genus Piperaceae'
    ],
    officialMonographSource: 'Farmakope Herbal Indonesia Edisi II (2017) Hal. 470-476 & FOHAI Kemenkes RI'
  },

  'herb-ketepeng-cina': {
    herbId: 'herb-ketepeng-cina',
    officialSimplisiaName: 'Cassiae Alatae Folium / Sennae Alatae Folium',
    officialExtractName: 'Cassiae Alatae Folii Extractum',
    botanicalFamily: 'Fabaceae / Caesalpiniaceae',
    plantPartUsed: 'Folium (Daun segar atau kering)',
    organSystemCategory: 'Gastroprotektor',
    standardizationCategory: 'Jamu Terstandar FHI',
    registeredCommercialProducts: ['Salep Ketepeng Antijamur', 'Kapsul Ketepeng Cina Laksatif'],
    fhiMarkers: [
      {
        markerName: 'Turunan Antrakuinon Total dihitung sebagai Rein',
        minimumContent: 'Tidak kurang dari 1,20% w/w dihitung sebagai rein',
        assayMethod: 'Spektrofotometri UV-Vis pada panjang gelombang 515 nm setelah hidrolisis asam',
        therapeuticRole: 'Stimulasi pleksus mienterikus Auerbach usus besar (laksatif stimulan) dan inhibisi dinding sel jamur dermatofita.'
      }
    ],
    fhiPosology: {
      simplisiaDailyDose: '3 - 6 gram daun kering diseduh air panas, diminum sekali sebelum tidur malam (laksatif singkat).',
      extractStandardDose: 'Ekstrak terstandar 100 - 200 mg dosis tunggal malam hari.',
      administrationInstructions: 'Hanya untuk pemakaian jangka pendek (maksimal 7 hari berturut-turut). Dilarang untuk konstipasi kronis jangka panjang.'
    },
    fhiQualityParameters: {
      lossOnDrying: 'Tidak lebih dari 10,0%',
      totalAsh: 'Tidak lebih dari 9,5%',
      acidInsolubleAsh: 'Tidak lebih dari 1,5%',
      waterSolubleExtract: 'Tidak kurang dari 20,0%',
      ethanolSolubleExtract: 'Tidak kurang dari 11,0%'
    },
    clinicalEvidenceLevel: 'Jamu Terstandar FHI (Uji Aktivitas Antifungal & Motilitas Kolon Terstandar)',
    contraindicationsFhi: [
      'Obstruksi atau perforasi usus halus / usus besar (Ileus obstruktif)',
      'Nyeri perut akut yang tidak diketahui penyebabnya (Apendisitis akut)',
      'Kehamilan trimester 1, 2, dan 3 (risiko induksi kontraksi miometrium prematur)'
    ],
    officialMonographSource: 'Farmakope Herbal Indonesia Edisi II (2017) Hal. 175-181 & WHO Monographs Vol 3'
  },

  'herb-daun-sukun': {
    herbId: 'herb-daun-sukun',
    officialSimplisiaName: 'Artocarpi Altilis Folium',
    officialExtractName: 'Artocarpi Altilis Folii Extractum Siccum',
    botanicalFamily: 'Moraceae',
    plantPartUsed: 'Folium (Daun tua menguning yang dikeringkan)',
    organSystemCategory: 'Kardiovaskular & Sirkulasi',
    standardizationCategory: 'Jamu Terstandar FHI',
    registeredCommercialProducts: ['Teh Celup Daun Sukun', 'Kapsul Sukun Kardioprotektor', 'Ekstrak Sukun Terstandar'],
    fhiMarkers: [
      {
        markerName: 'Artonin E & Flavonoid Total',
        minimumContent: 'Kadar flavonoid total dihitung sebagai rutin tidak kurang dari 1,10% w/w',
        assayMethod: 'KCKT / HPLC fase terbalik detektor UV 360 nm',
        therapeuticRole: 'Inhibisi pembentukan lipid peroksidasi pada endotel pembuluh darah jantung, proteksi tubulus ginjal, dan vasodilatasi perifer.'
      }
    ],
    fhiPosology: {
      simplisiaDailyDose: '5 - 10 gram daun kering direbus dalam 500 mL air hingga 250 mL, diminum 2 kali sehari.',
      extractStandardDose: 'Ekstrak terstandar 250 - 500 mg per hari sesudah makan.',
      administrationInstructions: 'Beri jeda minimal 2 jam bila mengonsumsi obat antihipertensi ACE inhibitor atau ARB.'
    },
    fhiQualityParameters: {
      lossOnDrying: 'Tidak lebih dari 10,0%',
      totalAsh: 'Tidak lebih dari 12,0%',
      acidInsolubleAsh: 'Tidak lebih dari 2,5%',
      waterSolubleExtract: 'Tidak kurang dari 10,5%',
      ethanolSolubleExtract: 'Tidak kurang dari 8,0%'
    },
    clinicalEvidenceLevel: 'Jamu Terstandar FHI (Uji Efek Proteksi Endotel Vaskular & Antihipertensi In Vivo)',
    contraindicationsFhi: [
      'Hipotensi simtomatik',
      'Gagal ginjal terminal anurik'
    ],
    officialMonographSource: 'Farmakope Herbal Indonesia Edisi II (2017) Hal. 54-60 & FOHAI Kemenkes RI'
  },

  'herb-kayu-secang': {
    herbId: 'herb-kayu-secang',
    officialSimplisiaName: 'Sappani Lignum',
    officialExtractName: 'Sappani Ligni Extractum Aquosum / Siccum',
    botanicalFamily: 'Fabaceae / Caesalpiniaceae',
    plantPartUsed: 'Lignum (Serutan kayu teras yang dikeringkan)',
    organSystemCategory: 'Kardiovaskular & Sirkulasi',
    standardizationCategory: 'Jamu Terstandar FHI',
    registeredCommercialProducts: ['Wedang Uwuh Terstandar', 'Secang Kapsul Antioksidan', 'Sirup Herbal Secang'],
    fhiMarkers: [
      {
        markerName: 'Brasilin (Brazilin)',
        minimumContent: 'Tidak kurang dari 0,40% w/w dihitung terhadap bahan kering',
        assayMethod: 'KCKT / HPLC fase terbalik detektor UV 280 nm',
        therapeuticRole: 'Antioksidan pemulung radikal bebas poten, antiinflamasi vaskular, serta penghambatan aktivasi platelet alami.'
      }
    ],
    fhiPosology: {
      simplisiaDailyDose: '5 - 10 gram serutan kayu direbus dalam 400 mL air mendidih hingga warna merah cerah, diminum hangat.',
      extractStandardDose: 'Ekstrak terstandar 200 - 400 mg per hari.',
      administrationInstructions: 'Diminum 1-2 kali sehari setelah makan. Aman dikonsumsi harian dalam takaran empiris jamu.'
    },
    fhiQualityParameters: {
      lossOnDrying: 'Tidak lebih dari 10,0%',
      totalAsh: 'Tidak lebih dari 3,0%',
      acidInsolubleAsh: 'Tidak lebih dari 0,5%',
      waterSolubleExtract: 'Tidak kurang dari 8,0%',
      ethanolSolubleExtract: 'Tidak kurang dari 5,0%'
    },
    clinicalEvidenceLevel: 'Jamu Terstandar FHI (Uji Antioksidan DPPH & Antiagregasi Platelet Terstandar)',
    contraindicationsFhi: [
      'Pasien dengan kecenderungan diatesis hemoragik / perdarahan aktif',
      'Hentikan 7-10 hari sebelum prosedur bedah mayor'
    ],
    officialMonographSource: 'Farmakope Herbal Indonesia Edisi II (2017) Hal. 422-428 & FOHAI Kemenkes RI'
  },

  'herb-bunga-telang': {
    herbId: 'herb-bunga-telang',
    officialSimplisiaName: 'Clitoriae Ternateae Flos',
    officialExtractName: 'Clitoriae Ternateae Floris Extractum',
    botanicalFamily: 'Fabaceae',
    plantPartUsed: 'Flos (Mahkota bunga berwarna biru nila tua dikeringkan)',
    organSystemCategory: 'Sistem Saraf & Sedatif',
    standardizationCategory: 'Jamu Terstandar FHI',
    registeredCommercialProducts: ['Teh Bunga Telang Terstandar', 'Telang Blue Tea Extract', 'Kapsul Telang Nootropik'],
    fhiMarkers: [
      {
        markerName: 'Antosianin Total (Ternatin A1-B2 & Delfinidin)',
        minimumContent: 'Kadar antosianin total tidak kurang dari 0,85% w/w dihitung sebagai sianidin-3-glukosida',
        assayMethod: 'Metode Perbedaan pH Spektrofotometri UV-Vis (510 nm & 700 nm)',
        therapeuticRole: 'Inhibisi reversibel enzim Asetilkolinesterase (AChE) di otak, stimulasi plastisitas sinaptik memori, dan relaksasi sistem saraf pusat.'
      }
    ],
    fhiPosology: {
      simplisiaDailyDose: '1 - 3 gram (5-10 kuntum bunga kering) diseduh dengan 200 mL air panas selama 5-10 menit, diminum 1-2 kali sehari.',
      extractStandardDose: 'Ekstrak terstandar 150 - 300 mg per hari.',
      administrationInstructions: 'Diminum sore atau malam hari menjelang tidur untuk relaksasi kognitif optimal.'
    },
    fhiQualityParameters: {
      lossOnDrying: 'Tidak lebih dari 11,0%',
      totalAsh: 'Tidak lebih dari 8,0%',
      acidInsolubleAsh: 'Tidak lebih dari 1,2%',
      waterSolubleExtract: 'Tidak kurang dari 22,0%',
      ethanolSolubleExtract: 'Tidak kurang dari 12,0%'
    },
    clinicalEvidenceLevel: 'Jamu Terstandar FHI (Uji Aktivitas Nootropik & Neuroprotektif Pra-Klinis Terstandar)',
    contraindicationsFhi: [
      'Kombinasi dengan obat penghambat AChE sintetis dosis tinggi tanpa pengawasan',
      'Pasien yang mengoperasikan mesin berat bila timbul efek kantuk'
    ],
    officialMonographSource: 'Farmakope Herbal Indonesia Edisi II (2017) Suplemen III Hal. 88-95 & FOHAI Kemenkes RI'
  },

  'herb-daun-saga': {
    herbId: 'herb-daun-saga',
    officialSimplisiaName: 'Abri Precatorii Folium',
    officialExtractName: 'Abri Precatorii Folii Extractum',
    botanicalFamily: 'Fabaceae',
    plantPartUsed: 'Folium (Daun segar atau kering)',
    organSystemCategory: 'Sistem Pernapasan',
    standardizationCategory: 'Obat Herbal Terstandar (OHT)',
    registeredCommercialProducts: ['Saga Salep & Tetes Sariawan', 'Sirup Enkasari (OHT Sariawan)', 'Herba Saga Kapsul'],
    fhiMarkers: [
      {
        markerName: 'Abrusosida A & Glisirizin Alami',
        minimumContent: 'Kadar abrusosida A tidak kurang dari 0,15% w/w',
        assayMethod: 'KCKT / HPLC fase terbalik detektor ELSD atau UV 250 nm',
        therapeuticRole: 'Pemberi rasa manis alami non-glukosa, antiinflamasi epitel mukosa mulut (sariawan / stomatitis aptosa), serta ekspektoran saluran bronkus.'
      }
    ],
    fhiPosology: {
      simplisiaDailyDose: '5 - 10 gram daun segar ditumbuk/direbus dengan 200 mL air, dikumur atau diminum 2 kali sehari.',
      extractStandardDose: 'Ekstrak terstandar 100 - 250 mg per hari atau sediaan kumur terstandar.',
      administrationInstructions: 'Gunakan sebagai obat kumur selama 1 menit sebelum ditelan untuk penyembuhan mukosa oral.'
    },
    fhiQualityParameters: {
      lossOnDrying: 'Tidak lebih dari 10,0%',
      totalAsh: 'Tidak lebih dari 9,0%',
      acidInsolubleAsh: 'Tidak lebih dari 1,5%',
      waterSolubleExtract: 'Tidak kurang dari 16,0%',
      ethanolSolubleExtract: 'Tidak kurang dari 10,0%'
    },
    clinicalEvidenceLevel: 'Obat Herbal Terstandar (Uji Klinik Khasiat Stomatitis Aftosa & Faringitis)',
    contraindicationsFhi: [
      'PERINGATAN KHUSUS: Hanya gunakan bagian DAUN. Bagian BIJI (Semen Abri) sangat beracun (mengandung toksalbumin Abrin) dan DILARANG KERAS digunakan.',
      'Penggunaan bersamaan dengan diuretik kuat pada gangguan elektrolit'
    ],
    officialMonographSource: 'Farmakope Herbal Indonesia Edisi II (2017) Hal. 1-7 & Formularium OHT BPOM RI'
  },

  'herb-temu-ireng': {
    herbId: 'herb-temu-ireng',
    officialSimplisiaName: 'Curcumae Aeruginosae Rhizoma',
    officialExtractName: 'Curcumae Aeruginosae Rhizomatis Extractum',
    botanicalFamily: 'Zingiberaceae',
    plantPartUsed: 'Rhizoma (Rimpang berwarna biru-kehitaman di dalam)',
    organSystemCategory: 'Gastroprotektor',
    standardizationCategory: 'Jamu Terstandar FHI',
    registeredCommercialProducts: ['Jamu Cekok Temu Ireng', 'Kapsul Temu Hitam Nafsu Makan', 'Fitocare Temu Ireng'],
    fhiMarkers: [
      {
        markerName: 'Germakron (Germacrone) & Kurzerenon',
        minimumContent: 'Kadar germakron tidak kurang dari 0,35% w/w',
        assayMethod: 'KCKT / HPLC fase terbalik detektor UV 215 nm',
        therapeuticRole: 'Paralisis neuromuskular cacing nematoda usus (antelmintik tradisional) dan stimulasi sekresi asam lambung fisiologis.'
      }
    ],
    fhiPosology: {
      simplisiaDailyDose: '5 - 10 gram rimpang kering direbus dalam 300 mL air hingga 150 mL, diminum 1-2 kali sehari.',
      extractStandardDose: 'Ekstrak terstandar 200 - 400 mg per hari.',
      administrationInstructions: 'Diminum pagi hari saat perut kosong (bila sebagai antelmintik) atau sebelum makan (penambah selera makan).'
    },
    fhiQualityParameters: {
      lossOnDrying: 'Tidak lebih dari 10,0%',
      totalAsh: 'Tidak lebih dari 7,5%',
      acidInsolubleAsh: 'Tidak lebih dari 1,0%',
      waterSolubleExtract: 'Tidak kurang dari 11,0%',
      ethanolSolubleExtract: 'Tidak kurang dari 8,5%'
    },
    clinicalEvidenceLevel: 'Jamu Terstandar FHI (Uji Aktivitas Antelmintik & Karminatif Pra-Klinis)',
    contraindicationsFhi: [
      'Wanita hamil (potensi kontraksi miometrium)',
      'Ulkus peptikum aktif / hematemesis melena'
    ],
    officialMonographSource: 'Farmakope Herbal Indonesia Edisi II (2017) Hal. 503-510 & FOHAI Kemenkes RI'
  },

  'herb-daun-murbei': {
    herbId: 'herb-daun-murbei',
    officialSimplisiaName: 'Mori Albae Folium',
    officialExtractName: 'Mori Albae Folii Extractum Siccum',
    botanicalFamily: 'Moraceae',
    plantPartUsed: 'Folium (Daun hijau dikeringkan)',
    organSystemCategory: 'Antidiabetes & Metabolik',
    standardizationCategory: 'Obat Herbal Terstandar (OHT)',
    registeredCommercialProducts: ['Teh Daun Murbei Terstandar', 'Murbei Kapsul Antidiabetes', 'Ekstrak Morus Alba OHT'],
    fhiMarkers: [
      {
        markerName: '1-Deoksinojirimisin (1-DNJ)',
        minimumContent: 'Kadar 1-DNJ tidak kurang dari 0,15% w/w',
        assayMethod: 'KCKT / HPLC detektor fluoresensi setelah derivatisasi FMOC-Cl',
        therapeuticRole: 'Inhibisi kompetitif enzim alfa-glukosidase pada brush border mukosa usus, memperlambat pemecahan disakarida menjadi monosakarida.'
      }
    ],
    fhiPosology: {
      simplisiaDailyDose: '5 - 10 gram daun kering diseduh dengan 300 mL air panas, diminum bersamaan dengan suapan pertama makanan utama.',
      extractStandardDose: 'Ekstrak terstandar 250 - 500 mg, dikonsumsi 2-3 kali sehari tepat saat makan.',
      administrationInstructions: 'Wajib diminum bersama suapan pertama makan untuk menghambat kenaikan glukosa postprandial secara maksimal.'
    },
    fhiQualityParameters: {
      lossOnDrying: 'Tidak lebih dari 10,0%',
      totalAsh: 'Tidak lebih dari 13,0%',
      acidInsolubleAsh: 'Tidak lebih dari 2,0%',
      waterSolubleExtract: 'Tidak kurang dari 18,0%',
      ethanolSolubleExtract: 'Tidak kurang dari 12,0%'
    },
    clinicalEvidenceLevel: 'Obat Herbal Terstandar (Uji Klinis RCT Penurunan Glukosa Postprandial & HbA1c)',
    contraindicationsFhi: [
      'Ketoasidosis diabetikum (DKA)',
      'Penyakit inflamasi usus kronik (Kolitis ulseratif / Crohn disease)'
    ],
    officialMonographSource: 'Farmakope Herbal Indonesia Edisi II (2017) Suplemen II Hal. 60-67 & WHO Monographs'
  },

  'herb-daun-sembung': {
    herbId: 'herb-daun-sembung',
    officialSimplisiaName: 'Blumeae Balsamiferae Folium',
    officialExtractName: 'Blumeae Balsamiferae Folii Extractum',
    botanicalFamily: 'Asteraceae / Compositae',
    plantPartUsed: 'Folium (Daun dikeringkan)',
    organSystemCategory: 'Sistem Pernapasan',
    standardizationCategory: 'Jamu Terstandar FHI',
    registeredCommercialProducts: ['Tolak Angin Cair (mengandung Sembung)', 'Sembung Kapsul Ekspektoran', 'Fitocare Sembung'],
    fhiMarkers: [
      {
        markerName: 'Minyak Atsiri l-Borneol & Flavonoid Luteolin',
        minimumContent: 'Kadar minyak atsiri tidak kurang dari 0,60% v/b mengandung l-borneol',
        assayMethod: 'Kromatografi Gas (GC-FID) dan Spektrofotometri',
        therapeuticRole: 'Ekspektoran mukolitik, relaksasi otot polos trakeobronkial, diaforetik (peluruh keringat saat demam), dan antiinflamasi.'
      }
    ],
    fhiPosology: {
      simplisiaDailyDose: '5 - 15 gram daun kering direbus dalam 400 mL air hingga 200 mL, diminum hangat 2-3 kali sehari.',
      extractStandardDose: 'Ekstrak terstandar 200 - 400 mg per hari.',
      administrationInstructions: 'Diminum hangat setelah makan untuk melegakan tenggorokan dan meredakan batuk berdahak.'
    },
    fhiQualityParameters: {
      lossOnDrying: 'Tidak lebih dari 10,0%',
      totalAsh: 'Tidak lebih dari 11,0%',
      acidInsolubleAsh: 'Tidak lebih dari 1,8%',
      waterSolubleExtract: 'Tidak kurang dari 15,0%',
      ethanolSolubleExtract: 'Tidak kurang dari 8,0%'
    },
    clinicalEvidenceLevel: 'Jamu Terstandar FHI (Uji Klinis Terstandar Penurunan Batuk & Ekspektorasi Bronkial)',
    contraindicationsFhi: [
      'Pasien dengan riwayat alergi tanaman suku Asteraceae (ragweed)',
      'Hipotermia akut'
    ],
    officialMonographSource: 'Farmakope Herbal Indonesia Edisi II (2017) Hal. 436-442 & FOHAI Kemenkes RI'
  },

  'herb-daun-beluntas': {
    herbId: 'herb-daun-beluntas',
    officialSimplisiaName: 'Plucheae Indicae Folium',
    officialExtractName: 'Plucheae Indicae Folii Extractum',
    botanicalFamily: 'Asteraceae',
    plantPartUsed: 'Folium (Daun segar atau kering)',
    organSystemCategory: 'Antidiabetes & Metabolik',
    standardizationCategory: 'Jamu Terstandar FHI',
    registeredCommercialProducts: ['Jamu Beluntas Deodoran Herbal', 'Beluntas Kapsul Glukosa', 'Teh Beluntas'],
    fhiMarkers: [
      {
        markerName: 'Stigmasterol & Flavonoid Kaempferol',
        minimumContent: 'Kadar flavonoid total dihitung sebagai kaempferol tidak kurang dari 0,75% w/w',
        assayMethod: 'KCKT / HPLC fase balik detektor UV 365 nm',
        therapeuticRole: 'Antimikroba flora ketiak penyebab bau badan (Corynebacterium), peningkatan toleransi glukosa perifer, dan astringen pori kelenjar apokrin.'
      }
    ],
    fhiPosology: {
      simplisiaDailyDose: '10 - 20 gram daun segar dikukus/disiram air panas, diminum 2 kali sehari atau dikonsumsi sebagai lalapan.',
      extractStandardDose: 'Ekstrak terstandar 250 - 500 mg per hari.',
      administrationInstructions: 'Diminum teratur selama minimal 2-4 minggu untuk eliminasi bau badan dan penstabilan gula darah.'
    },
    fhiQualityParameters: {
      lossOnDrying: 'Tidak lebih dari 10,0%',
      totalAsh: 'Tidak lebih dari 13,5%',
      acidInsolubleAsh: 'Tidak lebih dari 2,0%',
      waterSolubleExtract: 'Tidak kurang dari 12,0%',
      ethanolSolubleExtract: 'Tidak kurang dari 9,0%'
    },
    clinicalEvidenceLevel: 'Jamu Terstandar FHI (Uji Aktivitas Antibakteri & Hipoglikemik In Vivo)',
    contraindicationsFhi: [
      'Kehamilan trimester awal (efek stimulan miometrium lemah)',
      'Hipersensitivitas familia Asteraceae'
    ],
    officialMonographSource: 'Farmakope Herbal Indonesia Edisi II (2017) Hal. 70-76 & FOHAI Kemenkes RI'
  },

  'herb-daun-dewa': {
    herbId: 'herb-daun-dewa',
    officialSimplisiaName: 'Gynurae Divaricatae Folium',
    officialExtractName: 'Gynurae Divaricatae Folii Extractum Siccum',
    botanicalFamily: 'Asteraceae',
    plantPartUsed: 'Folium (Daun segar berbulu halus atau kering)',
    organSystemCategory: 'Kardiovaskular & Sirkulasi',
    standardizationCategory: 'Jamu Terstandar FHI',
    registeredCommercialProducts: ['Daun Dewa Kapsul Sirkulasi', 'Herba Dewa Terstandar', 'Fitocare Daun Dewa'],
    fhiMarkers: [
      {
        markerName: 'Flavonoid Rutin & Kuersetin',
        minimumContent: 'Kadar rutin tidak kurang dari 0,80% w/w',
        assayMethod: 'KCKT / HPLC fase terbalik detektor UV 254 nm',
        therapeuticRole: 'Pencegahan pembekuan darah abnormal (antikoagulan alami), penurunan resistensi perifer vaskular, dan peluruh bekuan hematoma traumatik.'
      }
    ],
    fhiPosology: {
      simplisiaDailyDose: '5 - 15 gram daun segar atau 3-6 gram daun kering direbus dalam 300 mL air, diminum 2 kali sehari.',
      extractStandardDose: 'Ekstrak terstandar 200 - 400 mg per hari setelah makan.',
      administrationInstructions: 'Hentikan pemakaian minimal 10 hari sebelum operasi bedah terencana.'
    },
    fhiQualityParameters: {
      lossOnDrying: 'Tidak lebih dari 10,0%',
      totalAsh: 'Tidak lebih dari 12,5%',
      acidInsolubleAsh: 'Tidak lebih dari 1,8%',
      waterSolubleExtract: 'Tidak kurang dari 16,0%',
      ethanolSolubleExtract: 'Tidak kurang dari 10,0%'
    },
    clinicalEvidenceLevel: 'Jamu Terstandar FHI (Uji Antitrombotik & Fibrinolisis Pra-Klinis)',
    contraindicationsFhi: [
      'Wanita hamil (efek pembersih darah beku dapat memicu keguguran spontan)',
      'Trombositopenia idiopatik (<50.000/mcL)'
    ],
    officialMonographSource: 'Farmakope Herbal Indonesia Edisi II (2017) Hal. 138-144 & FOHAI Kemenkes RI'
  },

  'herb-bawang-merah': {
    herbId: 'herb-bawang-merah',
    officialSimplisiaName: 'Allii Cepae Bulbus',
    officialExtractName: 'Allii Cepae Bulbi Extractum',
    botanicalFamily: 'Amaryllidaceae / Liliaceae',
    plantPartUsed: 'Bulbus (Umbi lapis segar atau kering)',
    organSystemCategory: 'Kardiovaskular & Sirkulasi',
    standardizationCategory: 'Jamu Terstandar FHI',
    registeredCommercialProducts: ['Medea Gel Bekas Luka (Allium cepa)', 'Extractum Cepae Salep', 'Minyak Bawang Merah'],
    fhiMarkers: [
      {
        markerName: 'Kuersetin-4-glukosida & Senyawa Organosulfur (S-metilsistein)',
        minimumContent: 'Kadar kuersetin total tidak kurang dari 0,50% w/w',
        assayMethod: 'KCKT / HPLC fase terbalik detektor UV 370 nm',
        therapeuticRole: 'Inhibisi proliferasi fibroblas berlebih (anti-keloid), peningkatan fibrinolisis plasma, dan modulasi tekanan darah sistolik.'
      }
    ],
    fhiPosology: {
      simplisiaDailyDose: '15 - 30 gram umbi segar dikonsumsi harian bersama menu makanan atau diparut untuk kompres penurun panas anak.',
      extractStandardDose: 'Ekstrak terstandar 200 - 500 mg per hari atau gel topikal 10% dioleskan 2-3 kali sehari.',
      administrationInstructions: 'Untuk topikal: oleskan pada jaringan parut yang sudah menutup sempurna tanpa luka terbuka.'
    },
    fhiQualityParameters: {
      lossOnDrying: 'Tidak lebih dari 12,0%',
      totalAsh: 'Tidak lebih dari 5,0%',
      acidInsolubleAsh: 'Tidak lebih dari 0,6%',
      waterSolubleExtract: 'Tidak kurang dari 25,0%',
      ethanolSolubleExtract: 'Tidak kurang dari 15,0%'
    },
    clinicalEvidenceLevel: 'Jamu Terstandar FHI (Uji Klinis Topikal Anti-Keloid & Oral Kardioprotektor)',
    contraindicationsFhi: [
      'Luka bedah segar yang masih berdarah (efek fibrinolitik)',
      'Gastritis erosif berat (bila dikonsumsi mentah dalam jumlah banyak)'
    ],
    officialMonographSource: 'Farmakope Herbal Indonesia Edisi II (2017) Hal. 22-28 & WHO Monographs Vol 2'
  },

  'herb-rumput-mutiara': {
    herbId: 'herb-rumput-mutiara',
    officialSimplisiaName: 'Hedyotidis Corymbosae Herba / Oldenlandiae Herba',
    officialExtractName: 'Hedyotidis Corymbosae Herbae Extractum',
    botanicalFamily: 'Rubiaceae',
    plantPartUsed: 'Herba (Seluruh tanaman dikeringkan)',
    organSystemCategory: 'Hepatoprotektor',
    standardizationCategory: 'Jamu Terstandar FHI',
    registeredCommercialProducts: ['Rumput Mutiara Kapsul', 'Herba Mutiara Ekstrak', 'Fitocare Mutiara'],
    fhiMarkers: [
      {
        markerName: 'Asam Ursolat & Asam Oleanolat',
        minimumContent: 'Kadar asam ursolat tidak kurang dari 0,20% w/w',
        assayMethod: 'KCKT / HPLC fase terbalik detektor UV 210 nm',
        therapeuticRole: 'Inhibisi nekrosis sel hati akibat zat toksik, modulasi sistem imun via aktivasi sel NK (Natural Killer), dan antiinflamasi saluran kemih.'
      }
    ],
    fhiPosology: {
      simplisiaDailyDose: '15 - 30 gram herba kering direbus dengan 500 mL air hingga 250 mL, diminum terbagi 2 kali sehari.',
      extractStandardDose: 'Ekstrak terstandar 250 - 500 mg per hari sesudah makan.',
      administrationInstructions: 'Diminum teratur 2 jam sesudah makan.'
    },
    fhiQualityParameters: {
      lossOnDrying: 'Tidak lebih dari 10,0%',
      totalAsh: 'Tidak lebih dari 11,0%',
      acidInsolubleAsh: 'Tidak lebih dari 2,0%',
      waterSolubleExtract: 'Tidak kurang dari 14,0%',
      ethanolSolubleExtract: 'Tidak kurang dari 8,0%'
    },
    clinicalEvidenceLevel: 'Jamu Terstandar FHI (Uji Hepatoprotektor Pra-Klinis Terhadap Kerusakan Parasetamol & CCL4)',
    contraindicationsFhi: [
      'Ibu hamil dan menyusui',
      'Pasien dengan leukopenia berat yang belum terdiagnosa'
    ],
    officialMonographSource: 'Farmakope Herbal Indonesia Edisi II (2017) Hal. 380-386 & FOHAI Kemenkes RI'
  },

  'herb-daun-alpukat': {
    herbId: 'herb-daun-alpukat',
    officialSimplisiaName: 'Perseae Americanae Folium',
    officialExtractName: 'Perseae Americanae Folii Extractum',
    botanicalFamily: 'Lauraceae',
    plantPartUsed: 'Folium (Daun tua dikeringkan)',
    organSystemCategory: 'Nefroprotektor & Saluran Kemih',
    standardizationCategory: 'Jamu Terstandar FHI',
    registeredCommercialProducts: ['Teh Daun Alpukat Ginjal', 'Kapsul Alpukat Diuretik', 'Herba Alpukat Terstandar'],
    fhiMarkers: [
      {
        markerName: 'Kuersetin & Flavonoid Glikosida Total',
        minimumContent: 'Kadar flavonoid total dihitung sebagai kuersetin tidak kurang dari 0,90% w/w',
        assayMethod: 'Spektrofotometri UV-Vis metode Kolorimetri AlCl3',
        therapeuticRole: 'Diuresis saluretik (peningkatan ekskresi Na+ dan air), pelarutan endapan kristal kalsium oksalat ginjal, dan vasodilatasi arterial perifer.'
      }
    ],
    fhiPosology: {
      simplisiaDailyDose: '5 - 10 gram daun kering direbus dengan 300 mL air hingga 150 mL, diminum 2 kali sehari.',
      extractStandardDose: 'Ekstrak terstandar 200 - 400 mg per hari.',
      administrationInstructions: 'Disertai konsumsi cairan minimal 2 liter per hari untuk mencegah dehidrasi saluretik.'
    },
    fhiQualityParameters: {
      lossOnDrying: 'Tidak lebih dari 10,0%',
      totalAsh: 'Tidak lebih dari 8,5%',
      acidInsolubleAsh: 'Tidak lebih dari 1,2%',
      waterSolubleExtract: 'Tidak kurang dari 15,0%',
      ethanolSolubleExtract: 'Tidak kurang dari 11,0%'
    },
    clinicalEvidenceLevel: 'Jamu Terstandar FHI (Uji Efek Diuretik & Nefrolitiasis Pra-Klinis In Vivo)',
    contraindicationsFhi: [
      'Gagal jantung kongestif dengan hiponatremia berat',
      'Terapi Warfarin (interaksi resistensi metabolik antikoagulan)'
    ],
    officialMonographSource: 'Farmakope Herbal Indonesia Edisi II (2017) Hal. 29-35 & FOHAI Kemenkes RI'
  },

  'herb-biji-kopi-hijau': {
    herbId: 'herb-biji-kopi-hijau',
    officialSimplisiaName: 'Coffeae Semen / Coffeae Robusta Extractum',
    officialExtractName: 'Coffeae Seminis Extractum Siccum (Green Coffee Extract)',
    botanicalFamily: 'Rubiaceae',
    plantPartUsed: 'Semen (Biji belum disangrai / mentah)',
    organSystemCategory: 'Antidiabetes & Metabolik',
    standardizationCategory: 'Obat Herbal Terstandar (OHT)',
    registeredCommercialProducts: ['Green Coffee Bean 500mg OHT', 'Kopi Hijau Pelangsing BPOM', 'Svetol Ekstrak'],
    fhiMarkers: [
      {
        markerName: 'Asam Klorogenat (Chlorogenic Acid / CGA)',
        minimumContent: 'Tidak kurang dari 45,0% w/w dihitung sebagai asam 5-kafeoilkuinat (5-CQA)',
        assayMethod: 'KCKT / HPLC fase terbalik detektor UV 325 nm',
        therapeuticRole: 'Penghambatan enzim glukosa-6-fosfatase di hepar (menurunkan glukoneogenesis), stimulasi translokasi GLUT-4, dan penurunan akumulasi trigliserida adiposa.'
      }
    ],
    fhiPosology: {
      simplisiaDailyDose: '5 - 10 gram biji hijau direbus atau diseduh air panas.',
      extractStandardDose: 'Ekstrak terstandar (45-50% CGA) 400 - 800 mg per hari, dibagi 2 kali minum 30 menit sebelum makan.',
      administrationInstructions: 'Diminum 30 menit sebelum makan sarapan dan makan siang. Hindari konsumsi di atas jam 17:00 bila sensitif kafein.'
    },
    fhiQualityParameters: {
      lossOnDrying: 'Tidak lebih dari 8,0%',
      totalAsh: 'Tidak lebih dari 5,0%',
      acidInsolubleAsh: 'Tidak lebih dari 0,5%',
      waterSolubleExtract: 'Tidak kurang dari 20,0%',
      ethanolSolubleExtract: 'Tidak kurang dari 16,0%'
    },
    clinicalEvidenceLevel: 'Obat Herbal Terstandar (Uji Klinis RCT Reduksi Berat Badan, Lingkar Pinggang & Resistensi Insulin)',
    contraindicationsFhi: [
      'Aritmia jantung takiaritmia tak terkontrol',
      'Gangguan kecemasan menyeluruh (GAD) berat',
      'Kehamilan dan masa laktasi'
    ],
    officialMonographSource: 'Farmakope Herbal Indonesia Edisi II (2017) Suplemen I Hal. 102-108 & Fitofarmaka Formulary'
  },

  'herb-asam-jawa': {
    herbId: 'herb-asam-jawa',
    officialSimplisiaName: 'Tamarindi Pulpa / Tamarindi Indicae Fructus',
    officialExtractName: 'Tamarindi Pulpae Extractum',
    botanicalFamily: 'Fabaceae / Caesalpiniaceae',
    plantPartUsed: 'Pulpa Fructus (Daging buah masak yang dihilangkan bijinya)',
    organSystemCategory: 'Gastroprotektor',
    standardizationCategory: 'Jamu Terstandar FHI',
    registeredCommercialProducts: ['Kunyit Asam Sirih Sido Muncul', 'Jamu Kunyit Asam Terstandar', 'Fitocare Asam'],
    fhiMarkers: [
      {
        markerName: 'Asam Tartarat Alami & Asam Malat',
        minimumContent: 'Kadar asam tartarat total tidak kurang dari 10,0% w/w',
        assayMethod: 'Titrasi Asam-Basa menggunakan Indikator PP atau HPLC fase terbalik',
        therapeuticRole: 'Laksatif osmotik ringan merangsang peristaltik lambung-usus, stimulasi nafsu makan, dan hipolipidemik reduksi kolesterol LDL.'
      }
    ],
    fhiPosology: {
      simplisiaDailyDose: '10 - 25 gram daging buah dilarutkan dalam 200 mL air hangat (dapat ditambah gula aren/madu secukupnya), diminum 1-2 kali sehari.',
      extractStandardDose: 'Ekstrak terstandar 300 - 600 mg per hari.',
      administrationInstructions: 'Diminum setelah makan untuk mencegah sensasi perih pada pasien yang memiliki riwayat gastritis.'
    },
    fhiQualityParameters: {
      lossOnDrying: 'Tidak lebih dari 15,0%',
      totalAsh: 'Tidak lebih dari 4,0%',
      acidInsolubleAsh: 'Tidak lebih dari 0,5%',
      waterSolubleExtract: 'Tidak kurang dari 40,0%',
      ethanolSolubleExtract: 'Tidak kurang dari 25,0%'
    },
    clinicalEvidenceLevel: 'Jamu Terstandar FHI (Uji Bukti Klinis Empiris FHI & Karminatif Terstandar)',
    contraindicationsFhi: [
      'Gastritis erosif aktif fase akut',
      'Diare akut yang belum teratasi'
    ],
    officialMonographSource: 'Farmakope Herbal Indonesia Edisi II (2017) Hal. 477-483 & FOHAI Kemenkes RI'
  },

  'herb-gandarusa': {
    herbId: 'herb-gandarusa',
    officialSimplisiaName: 'Justiciae Gendarussae Folium',
    officialExtractName: 'Justiciae Gendarussae Folii Extractum Siccum',
    botanicalFamily: 'Acanthaceae',
    plantPartUsed: 'Folium (Daun segar atau kering)',
    organSystemCategory: 'Analgesik & Antiinflamasi',
    standardizationCategory: 'Obat Herbal Terstandar (OHT)',
    registeredCommercialProducts: ['Gandarusa Kapsul Kontrasepsi Pria (OHT Uji Fase II)', 'Rheuma Gandarusa Kapsul', 'Herba Gandarusa'],
    fhiMarkers: [
      {
        markerName: 'Gendarusin A (Flavonoid C-Glikosida)',
        minimumContent: 'Kadar gendarusin A tidak kurang dari 0,15% w/w',
        assayMethod: 'KCKT / HPLC fase terbalik detektor DAD/UV 340 nm',
        therapeuticRole: 'Inhibisi kompetitif enzim Hialuronidase pada spermatozoa (kontrasepsi non-hormonal pria reversibel) dan supresi COX-2 antiartritis.'
      }
    ],
    fhiPosology: {
      simplisiaDailyDose: '5 - 10 gram daun kering direbus dalam 400 mL air hingga 200 mL, diminum 2 kali sehari.',
      extractStandardDose: 'Ekstrak terstandar 250 - 500 mg per hari diminum teratur.',
      administrationInstructions: 'Untuk fungsi kontrasepsi herbal pria: diminum teratur setiap hari minimal 30 hari berturut-turut di bawah supervisi medis.'
    },
    fhiQualityParameters: {
      lossOnDrying: 'Tidak lebih dari 10,0%',
      totalAsh: 'Tidak lebih dari 12,0%',
      acidInsolubleAsh: 'Tidak lebih dari 1,5%',
      waterSolubleExtract: 'Tidak kurang dari 13,0%',
      ethanolSolubleExtract: 'Tidak kurang dari 8,0%'
    },
    clinicalEvidenceLevel: 'Obat Herbal Terstandar (Uji Klinis Fase II Kontrasepsi Pria Herbal Reversibel)',
    contraindicationsFhi: [
      'Pasangan yang sedang merencanakan program kehamilan aktif',
      'Wanita hamil dan menyusui'
    ],
    officialMonographSource: 'Farmakope Herbal Indonesia Edisi II (2017) Hal. 160-166 & Riset Nasional Herbal Kemenkes RI'
  },

  'herb-daun-srikaya': {
    herbId: 'herb-daun-srikaya',
    officialSimplisiaName: 'Annonae Squamosae Folium',
    officialExtractName: 'Annonae Squamosae Folii Extractum',
    botanicalFamily: 'Annonaceae',
    plantPartUsed: 'Folium (Daun segar atau kering)',
    organSystemCategory: 'Antidiabetes & Metabolik',
    standardizationCategory: 'Jamu Terstandar FHI',
    registeredCommercialProducts: ['Srikaya Kapsul Glukosa', 'Herba Srikaya Terstandar'],
    fhiMarkers: [
      {
        markerName: 'Alkaloid Anonain & Flavonoid Kuersetin',
        minimumContent: 'Kadar flavonoid total dihitung sebagai kuersetin tidak kurang dari 0,70% w/w',
        assayMethod: 'KCKT / HPLC fase terbalik detektor UV 254 nm',
        therapeuticRole: 'Stimulasi pelepasan insulin dari sel beta pulau Langerhans pankreas serta proteksi antioksidan membran sel hepar.'
      }
    ],
    fhiPosology: {
      simplisiaDailyDose: '5 - 10 gram daun segar diseduh dengan 250 mL air panas, diminum 1-2 kali sehari.',
      extractStandardDose: 'Ekstrak terstandar 200 - 400 mg per hari sesudah makan.',
      administrationInstructions: 'Diminum 30 menit setelah makan pagi atau makan malam.'
    },
    fhiQualityParameters: {
      lossOnDrying: 'Tidak lebih dari 10,0%',
      totalAsh: 'Tidak lebih dari 9,0%',
      acidInsolubleAsh: 'Tidak lebih dari 1,2%',
      waterSolubleExtract: 'Tidak kurang dari 14,0%',
      ethanolSolubleExtract: 'Tidak kurang dari 9,0%'
    },
    clinicalEvidenceLevel: 'Jamu Terstandar FHI (Uji Aktivitas Hipoglikemik & Anti-inflamasi In Vivo)',
    contraindicationsFhi: [
      'Wanita hamil (potensi kontraksi miometrium)',
      'Riwayat hipoglikemia berulang yang tidak terkontrol'
    ],
    officialMonographSource: 'Farmakope Herbal Indonesia Edisi II (2017) Hal. 45-51 & FOHAI Kemenkes RI'
  },

  'herb-belimbing-wuluh': {
    herbId: 'herb-belimbing-wuluh',
    officialSimplisiaName: 'Averrhoae Bilimbi Fructus',
    officialExtractName: 'Averrhoae Bilimbi Fructus Extractum',
    botanicalFamily: 'Oxalidaceae',
    plantPartUsed: 'Fructus (Buah segar berwarna hijau mengkilap)',
    organSystemCategory: 'Kardiovaskular & Sirkulasi',
    standardizationCategory: 'Jamu Terstandar FHI',
    registeredCommercialProducts: ['Sirup Belimbing Wuluh Antihipertensi', 'Kapsul Averrhoa Terstandar', 'Fitocare Belimbing'],
    fhiMarkers: [
      {
        markerName: 'Asam Oksalat, Kalium Alami & Asam Askorbat',
        minimumContent: 'Kadar asam oksalat bebas terukur tinggi (5-8% bobot kering); kalium tidak kurang dari 1,2% w/w',
        assayMethod: 'KCKT / HPLC fase ion atau Titrimetri Permanganat',
        therapeuticRole: 'Penurunan tekanan darah arterial via natriuresis kalium alami dan modulasi kontraktilitas pembuluh perifer.'
      }
    ],
    fhiPosology: {
      simplisiaDailyDose: '2 - 3 buah segar (sekitar 30-50 gram) diparut/diperas dengan sedikit air, diminum sekali sehari sesudah makan.',
      extractStandardDose: 'Ekstrak terstandar 150 - 300 mg per hari.',
      administrationInstructions: 'WAJIB diminum sesudah makan kenyang. Hindari konsumsi jus pekat dalam keadaan dehidrasi.'
    },
    fhiQualityParameters: {
      lossOnDrying: 'Tidak lebih dari 15,0%',
      totalAsh: 'Tidak lebih dari 8,0%',
      acidInsolubleAsh: 'Tidak lebih dari 1,0%',
      waterSolubleExtract: 'Tidak kurang dari 30,0%',
      ethanolSolubleExtract: 'Tidak kurang dari 15,0%'
    },
    clinicalEvidenceLevel: 'Jamu Terstandar FHI (Uji Khasiat Antihipertensi Empiris FHI & Uji Toksisitas Renal Terstandar)',
    contraindicationsFhi: [
      'KONTRAINDIKASI MUTLAK PADA PASIEN PENYAKIT GINJAL KRONIK (CKD STAGE 3-5) ATAU AZOTEMIA (RISIKO NEFROPATI AKUT AKIBAT KRISTAL KALSIUM OKSALAT YANG MENYEBABKAN ANURIA DAN KEMATIAN).',
      'Riwayat batu ginjal kalsium oksalat berulang'
    ],
    officialMonographSource: 'Farmakope Herbal Indonesia Edisi II (2017) Hal. 61-67 & Jurnal Nefrologi Indonesia'
  },

  'herb-akar-wangi': {
    herbId: 'herb-akar-wangi',
    officialSimplisiaName: 'Vetiveriae Radix',
    officialExtractName: 'Vetiveriae Radicis Oleum / Extractum',
    botanicalFamily: 'Poaceae / Gramineae',
    plantPartUsed: 'Radix (Akar serabut beraroma khas wangi dikeringkan)',
    organSystemCategory: 'Sistem Saraf & Sedatif',
    standardizationCategory: 'Jamu Terstandar FHI',
    registeredCommercialProducts: ['Minyak Atsiri Akar Wangi Garut', 'Kapsul Aromaterapi Vetiver', 'Fitocare Akar Wangi'],
    fhiMarkers: [
      {
        markerName: 'Khusimol, Vetivon (Alfa & Beta-Vetivon)',
        minimumContent: 'Kadar minyak atsiri tidak kurang dari 1,50% v/b mengandung khusimol',
        assayMethod: 'Kromatografi Gas - Spektrometri Massa (GC-MS)',
        therapeuticRole: 'Modulasi transmisi asam gamma-aminobutirat (GABA-A) sentral menghasilkan efek ansiolitik ringan, relaksasi otot polos, dan karminatif diaforetik.'
      }
    ],
    fhiPosology: {
      simplisiaDailyDose: '3 - 6 gram akar kering direbus dalam 300 mL air, diminum hangat 1-2 kali sehari.',
      extractStandardDose: 'Minyak esensial terstandar 2-3 tetes untuk aromaterapi inhalasi atau ekstrak 100 - 200 mg per hari.',
      administrationInstructions: 'Diminum atau dihirup pada malam hari menjelang tidur untuk relaksasi saraf.'
    },
    fhiQualityParameters: {
      lossOnDrying: 'Tidak lebih dari 10,0%',
      totalAsh: 'Tidak lebih dari 6,0%',
      acidInsolubleAsh: 'Tidak lebih dari 1,0%',
      waterSolubleExtract: 'Tidak kurang dari 8,0%',
      ethanolSolubleExtract: 'Tidak kurang dari 6,5%'
    },
    clinicalEvidenceLevel: 'Jamu Terstandar FHI (Uji Efek Ansiolitik & Relaksan Saraf In Vivo Terstandar)',
    contraindicationsFhi: [
      'Depresi susunan saraf pusat berat',
      'Kombinasi dengan konsumsi alkohol atau sedatif kuat tanpa petunjuk dokter'
    ],
    officialMonographSource: 'Farmakope Herbal Indonesia Edisi II (2017) Hal. 525-531 & FOHAI Kemenkes RI'
  },

  'herb-kayu-rapat': {
    herbId: 'herb-kayu-rapat',
    officialSimplisiaName: 'Parameriae Cortex',
    officialExtractName: 'Parameriae Corticis Extractum',
    botanicalFamily: 'Apocynaceae',
    plantPartUsed: 'Cortex (Kulit batang dikeringkan)',
    organSystemCategory: 'Gastroprotektor',
    standardizationCategory: 'Jamu Terstandar FHI',
    registeredCommercialProducts: ['Jamu Rapat Wanita Terstandar', 'Kayu Rapat Kapsul BPOM', 'Fitocare Sari Rapat'],
    fhiMarkers: [
      {
        markerName: 'Tanin Katekat Terkondensasi & Flavonoid',
        minimumContent: 'Kadar tanin total tidak kurang dari 15,0% w/w dihitung sebagai pirogalol',
        assayMethod: 'Spektrofotometri UV-Vis metode Folin-Ciocalteu setelah presipitasi protein',
        therapeuticRole: 'Efek astringen kuat mempresipitasikan protein mukosa, mengurangi hipersekresi lendir, dan merapatkan tonus jaringan otot polos organ panggul.'
      }
    ],
    fhiPosology: {
      simplisiaDailyDose: '3 - 8 gram kulit batang direbus dalam 400 mL air hingga 200 mL, diminum hangat 1 kali sehari.',
      extractStandardDose: 'Ekstrak terstandar 150 - 300 mg per hari.',
      administrationInstructions: 'Diminum sesudah makan. Beri jeda minimal 3 jam dari suplemen zat besi oral atau multivitamin.'
    },
    fhiQualityParameters: {
      lossOnDrying: 'Tidak lebih dari 10,0%',
      totalAsh: 'Tidak lebih dari 7,0%',
      acidInsolubleAsh: 'Tidak lebih dari 1,0%',
      waterSolubleExtract: 'Tidak kurang dari 12,0%',
      ethanolSolubleExtract: 'Tidak kurang dari 18,0%'
    },
    clinicalEvidenceLevel: 'Jamu Terstandar FHI (Uji Astringen Mukosa & Antibakteri Empiris FHI)',
    contraindicationsFhi: [
      'Konstipasi kronis berat (tanin tinggi memperparah impaksi feses)',
      'Anemia defisiensi besi berat (menghambat penyerapan Fe)'
    ],
    officialMonographSource: 'Farmakope Herbal Indonesia Edisi II (2017) Hal. 290-296 & FOHAI Kemenkes RI'
  },

  'herb-krokot': {
    herbId: 'herb-krokot',
    officialSimplisiaName: 'Portulacae Herba',
    officialExtractName: 'Portulacae Herbae Extractum Siccum',
    botanicalFamily: 'Portulacaceae',
    plantPartUsed: 'Herba (Seluruh tanaman segar atau kering)',
    organSystemCategory: 'Kardiovaskular & Sirkulasi',
    standardizationCategory: 'Jamu Terstandar FHI',
    registeredCommercialProducts: ['Krokot Kapsul Omega-3 Nabati', 'Portulaca Ekstrak Terstandar', 'Herba Krokot'],
    fhiMarkers: [
      {
        markerName: 'Asam Alfa-Linolenat (ALA / Omega-3) & Betalain',
        minimumContent: 'Kadar asam lemak omega-3 (ALA) tidak kurang dari 0,80% bobot segar; flavonoid total tidak kurang dari 0,60% w/w',
        assayMethod: 'Kromatografi Gas (GC-FID) untuk Asam Lemak Metil Ester (FAME)',
        therapeuticRole: 'Menurunkan kadar trigliserida serum, proteksi membran endotel vaskular, neuroproteksi antioksidan dopaminergik, dan regulasi glikemia.'
      }
    ],
    fhiPosology: {
      simplisiaDailyDose: '15 - 30 gram herba segar dikukus/disiram air panas sebagai lalapan atau 5-10 gram herba kering direbus air panas.',
      extractStandardDose: 'Ekstrak terstandar 250 - 500 mg per hari sesudah makan.',
      administrationInstructions: 'Diminum 1-2 kali sehari bersama makanan utama.'
    },
    fhiQualityParameters: {
      lossOnDrying: 'Tidak lebih dari 12,0%',
      totalAsh: 'Tidak lebih dari 18,0%',
      acidInsolubleAsh: 'Tidak lebih dari 3,0%',
      waterSolubleExtract: 'Tidak kurang dari 22,0%',
      ethanolSolubleExtract: 'Tidak kurang dari 12,0%'
    },
    clinicalEvidenceLevel: 'Jamu Terstandar FHI (Uji Profil Lipid, Kardioprotektor & Antioksidan In Vivo)',
    contraindicationsFhi: [
      'Gagal ginjal dengan hiperkalemia berat',
      'Pasien dengan riwayat batu ginjal kalsium oksalat (kandungan oksalat sedang)'
    ],
    officialMonographSource: 'Farmakope Herbal Indonesia Edisi II (2017) Hal. 360-366 & WHO Monographs Vol 4'
  }
};
