// =====================================================================
// BASIS DATA EKSPANSI HERBAL & INTERAKSI OBAT INDONESIA
// Standar Farmakope Herbal Indonesia (FHI Ed. II) & FOHAI Kemenkes RI
// ZERO DATA DUPLICATION CLINICAL LAYER
// =====================================================================

import { HerbProfile, HerbDrugInteraction } from './herbDrugInteractionsData';

export const INDONESIAN_HERB_EXPANSION_PROFILES: HerbProfile[] = [
  {
    id: 'herb-adas',
    name: 'Buah Adas (Foeniculum vulgare)',
    latinName: 'Foeniculum vulgare',
    commonIndonesianNames: ['Adas', 'Hadas', 'Adas Pedas', 'Adeh', 'Foeniculi Fructus'],
    activeCompounds: 'Trans-anetol (min. 80% dalam minyak atsiri), Fenkon, Metilchavikol, Flavonoid Kuersetin',
    traditionalUses: [
      'Karminatif & pereda kembung / kolik infantil',
      'Spasmolitik kram saluran cerna & dispepsia',
      'Ekspektoran batuk berdahak',
      'Galaktagog pelancar ASI alami'
    ],
    cypEffects: 'Inhibisi kompetitif ringan CYP2C9 & CYP3A4, aktivitas fitoestrogenik selektif',
    contraindicatedDrugs: [
      'Ciprofloxacin & Fluorokuinolon oral (penurunan absorpsi drastis)',
      'Tamoxifen (kompetisi reseptor estrogen)',
      'Kontrasepsi oral hormonal'
    ],
    clinicalCautions: [
      'Beri jeda minimal 2-3 jam saat mengonsumsi antibiotik fluorokuinolon.',
      'Hindari penggunaan minyak adas murni konsentrasi tinggi pada kehamilan trimester 1.'
    ]
  },
  {
    id: 'herb-temu-putih',
    name: 'Temu Putih (Curcuma zedoaria)',
    latinName: 'Curcuma zedoaria',
    commonIndonesianNames: ['Temu Putih', 'Koneng Tegal', 'Temu Kunting', 'Curcumae Zedoariae Rhizoma'],
    activeCompounds: 'Zederon, Kurkumenol, Furanodienon, Kurkuminoid, Minyak Atsiri Seskuiterpen',
    traditionalUses: [
      'Kemopreventif & penghambat pertumbuhan sel neoplasma',
      'Antiinflamasi saluran cerna & ulkus peptikum',
      'Antioksidan & imunostimulan',
      'Pembersih darah nifas'
    ],
    cypEffects: 'Inhibisi lemah CYP3A4 dan modulasi aktivitas P-glikoprotein',
    contraindicatedDrugs: [
      'Warfarin & DOAC (Rivaroxaban, Apixaban, Dabigatran)',
      'Aspirin / Clopidogrel (peningkatan masa perdarahan)',
      'Obat kemoterapi nefrotoksik'
    ],
    clinicalCautions: [
      'Hentikan konsumsi minimal 2 minggu sebelum operasi bedah terencana.',
      'Kontraindikasi keras pada wanita hamil karena efek stimulasi uterus.'
    ]
  },
  {
    id: 'herb-habbatussauda',
    name: 'Jintan Hitam / Habbatussauda (Nigella sativa)',
    latinName: 'Nigella sativa',
    commonIndonesianNames: ['Habbatussauda', 'Jintan Hitam', 'Black Seed', 'Kalotje', 'Nigellae Sativae Semen'],
    activeCompounds: 'Timokuinon (Thymoquinone min. 1,5%), Dihidrotimokuinon, Timohidrokuinon, Asam Linoleat',
    traditionalUses: [
      'Imunomodulator & penguat daya tahan tubuh (OHT)',
      'Adjuvan terapi asma bronkial & rinitis alergi',
      'Antiinflamasi reumatik & sindrom metabolik',
      'Hepatoprotektor & nefroprotektor'
    ],
    cypEffects: 'Inhibisi in vitro CYP3A4, CYP2C9, dan peningkatan klirens substrat P-gp',
    contraindicatedDrugs: [
      'Siklosporin & Tacrolimus (penurunan kadar obat imunosupresan)',
      'Antihipertensi CCB (Amlodipine - hipotensi aditif)',
      'Antidiabetes Sulfonilurea (risiko hipoglikemia)'
    ],
    clinicalCautions: [
      'Waspadai rejeksi cangkok organ pada pasien transplantasi ginjal/hati.',
      'Monitor gula darah mandiri bila dikombinasikan dengan obat antidiabetes oral.'
    ]
  },
  {
    id: 'herb-suruhan',
    name: 'Suruhan / Daun Sirih Bumi (Peperomia pellucida)',
    latinName: 'Peperomia pellucida',
    commonIndonesianNames: ['Suruhan', 'Sirih Bumi', 'Ketumpangan Air', 'Saladaan', 'Peperomiae Pellucidae Herba'],
    activeCompounds: 'Pelusidatin, Flavonoid Kuersetin, Patulosid, Tanin, Alkaloid Peperomin',
    traditionalUses: [
      'Penurun kadar asam urat darah (penghambat xantin oksidase)',
      'Analgesik & antiinflamasi nyeri artritis gout akut',
      'Diuretik ringan & peluruh kencing batu',
      'Pereda sakit kepala & demam'
    ],
    cypEffects: 'Inhibisi kompetitif biosintesis xantin oksidase hepar',
    contraindicatedDrugs: [
      'Allopurinol & Febuxostat (sinergisme penurunan asam urat berlebih)',
      'NSAID (Piroxicam, Meloxicam - iritasi lambung ganda)',
      'Obat nefrotoksik'
    ],
    clinicalCautions: [
      'Pastikan hidrasi cairan minimal 2,5 liter sehari untuk mencegah presipitasi urat di tubulus ginjal.',
      'Kontraindikasi pada gagal ginjal anurik terminal.'
    ]
  },
  {
    id: 'herb-ketepeng-cina',
    name: 'Ketepeng Cina (Cassia alata / Senna alata)',
    latinName: 'Cassia alata / Senna alata',
    commonIndonesianNames: ['Ketepeng Cina', 'Ketepeng Kebo', 'Acapulco', 'Cassiae Alatae Folium'],
    activeCompounds: 'Rein, Aloe-emodin, Krisofanol, Glikosida Antrakuinon Senosida, Flavonoid',
    traditionalUses: [
      'Laksatif stimulan konstipasi akut',
      'Antijamur tinea versicolor (panu), kurap & kadas',
      'Antiseptik kulit anti-pruritus',
      'Pencahar alami pembersih kolon'
    ],
    cypEffects: 'Percepatan waktu transit usus, penurunan absorpsi obat peroral',
    contraindicatedDrugs: [
      'Digoksin (deplesi kalium memicu aritmia fatal)',
      'Diuretik Loop (Furosemide - hipokalemia berat)',
      'Warfarin (penurunan absorpsi vitamin K enteral)'
    ],
    clinicalCautions: [
      'Hanya untuk penggunaan jangka pendek maksimal 7 hari berturut-turut.',
      'KONTRAINDIKASI MUTLAK pada obstruksi usus, apendisitis akut, dan kehamilan.'
    ]
  },
  {
    id: 'herb-daun-sukun',
    name: 'Daun Sukun (Artocarpus altilis)',
    latinName: 'Artocarpus altilis',
    commonIndonesianNames: ['Daun Sukun', 'Kluwih Daun', 'Artocarpi Altilis Folium'],
    activeCompounds: 'Artonin E, Sikloartokarpin, Flavonoid Total dihitung sebagai Rutin, Sitosterol',
    traditionalUses: [
      'Kardioprotektor iskemia jantung & antiaterosklerosis',
      'Nefroprotektor nefritis kronis & reduksi proteinuria',
      'Antihipertensi alami via vasodilatasi perifer',
      'Antiinflamasi vaskular'
    ],
    cypEffects: 'Modulasi endotelial nitric oxide synthase (eNOS) vaskular',
    contraindicatedDrugs: [
      'ACE Inhibitor (Captopril, Ramipril - hipotensi postural)',
      'ARB (Candesartan, Valsartan)',
      'Diuretik loop (dehidrasi cairan berlebih)'
    ],
    clinicalCautions: [
      'Periksa tekanan darah secara rutin saat memulai konsumsi teh daun sukun.',
      'Beri jeda minimal 2 jam dari konsumsi obat resep antihipertensi.'
    ]
  },
  {
    id: 'herb-kayu-secang',
    name: 'Kayu Secang (Caesalpinia sappan)',
    latinName: 'Caesalpinia sappan',
    commonIndonesianNames: ['Secang', 'Kayu Cang', 'Sappan Wood', 'Sappani Lignum'],
    activeCompounds: 'Brasilin (Brazilin min. 0,40%), Brazilein, Proantosianidin, Tanin Katekat',
    traditionalUses: [
      'Antioksidan pemulung radikal bebas poten (komponen Wedang Uwuh)',
      'Antiinflamasi & pelancar sirkulasi darah stasis',
      'Antibakteri diare & disentri',
      'Hemostatik luka dalam'
    ],
    cypEffects: 'Inhibisi aktivasi agregasi trombosit yang diinduksi kolagen',
    contraindicatedDrugs: [
      'Heparin, LMWH & Warfarin (sinergisme antikoagulasi)',
      'Aspirin & Clopidogrel (peningkatan masa perdarahan)',
      'Antidiabetes oral (potensiasi hipoglikemia)'
    ],
    clinicalCautions: [
      'Hentikan konsumsi secang 7-10 hari sebelum operasi mayor.',
      'Hindari konsumsi bersamaan dengan suplemen zat besi dosis tinggi (presipitasi tanin).'
    ]
  },
  {
    id: 'herb-bunga-telang',
    name: 'Kembang Telang (Clitoria ternatea)',
    latinName: 'Clitoria ternatea',
    commonIndonesianNames: ['Kembang Telang', 'Bunga Telang', 'Butterfly Pea', 'Clitoriae Ternateae Flos'],
    activeCompounds: 'Antosianin Ternatin A1-B2, Delfinidin, Flavonoid Kuersetin, Taraxerol',
    traditionalUses: [
      'Nootropik peningkatan memori & konsentrasi kognitif',
      'Sedatif ringan & relaksasi ketegangan saraf / insomnia',
      'Antioksidan anti-aging proteksi mikrovaskular mata',
      'Antiinflamasi saluran kemih'
    ],
    cypEffects: 'Inhibisi reversibel enzim Asetilkolinesterase (AChE) sentral',
    contraindicatedDrugs: [
      'Donepezil & Rivastigmine (sinergisme inhibisi asetilkolinesterase)',
      'Benzodiazepin & Sedatif (potensiasi depresi SSP)',
      'Obat antihipertensi dosis maksimal'
    ],
    clinicalCautions: [
      'Hindari mengemudi jika timbul efek kantuk setelah mengonsumsi ekstrak telang pekat.',
      'Gunakan dengan hati-hati pada pasien dengan bradikardia simtomatik.'
    ]
  },
  {
    id: 'herb-daun-saga',
    name: 'Daun Saga (Abrus precatorius)',
    latinName: 'Abrus precatorius',
    commonIndonesianNames: ['Daun Saga', 'Saga Telik', 'Saga Manis', 'Abri Precatorii Folium'],
    activeCompounds: 'Abrusosida A, B, C, D, Glisirizin Alami, Flavonoid Luteolin',
    traditionalUses: [
      'Penyembuh sariawan & stomatitis aptosa (OHT Enkasari)',
      'Pereda radang tenggorokan & batuk serak',
      'Pemanis alami non-glukosa ramah penderita diabetes',
      'Ekspektoran mukolitik saluran napas'
    ],
    cypEffects: 'Inhibisi 11-beta-hidroksisteroid dehidrogenase tipe 2 (11b-HSD2) oleh glisirizin',
    contraindicatedDrugs: [
      'Diuretik Loop (Furosemide - risiko deplesi kalium)',
      'Diuretik Tiazid (HCT)',
      'Spironolakton (antagonisme efek hemat kalium)'
    ],
    clinicalCautions: [
      'PERINGATAN VITAL: Hanya gunakan bagian DAUN. BIJI SAGA MENGANDUNG TOKSALBUMIN ABRIN YANG SANGAT MEMATIKAN DAN DILARANG.',
      'Jangan gunakan melebihi dosis anjuran untuk mencegah retensi natrium.'
    ]
  },
  {
    id: 'herb-temu-ireng',
    name: 'Temu Ireng / Temu Hitam (Curcuma aeruginosa)',
    latinName: 'Curcuma aeruginosa',
    commonIndonesianNames: ['Temu Ireng', 'Temu Hitam', 'Koneng Hideung', 'Curcumae Aeruginosae Rhizoma'],
    activeCompounds: 'Germakron, Kurzerenon, Sesquiterpene Lactone, Minyak Atsiri Biru Gelap',
    traditionalUses: [
      'Antelmintik alami obat cacingan pada anak-anak',
      'Penambah nafsu makan (Jamu Cekok tradisional)',
      'Peluruh kembung & kolik abdomen',
      'Antifungal & pembersih parasit usus'
    ],
    cypEffects: 'Stimulasi enzim pencernaan lambung & paralisis nematoda',
    contraindicatedDrugs: [
      'Albendazole / Mebendazole (hepatotoksik ganda bila overdosis)',
      'Warfarin (efek antiagregasi platelet)',
      'Obat maag antasida (bila diminum bersamaan)'
    ],
    clinicalCautions: [
      'Kontraindikasi pada wanita hamil (potensi kontraksi miometrium).',
      'Gunakan dosis terukur pada anak-anak.'
    ]
  },
  {
    id: 'herb-daun-murbei',
    name: 'Daun Murbei (Morus alba)',
    latinName: 'Morus alba',
    commonIndonesianNames: ['Daun Murbei', 'Besaran', 'White Mulberry Leaf', 'Mori Albae Folium'],
    activeCompounds: '1-Deoksinojirimisin (1-DNJ min. 0,15%), Kuersetin-3-O-beta-D-glukosida, Asam Klorogenat',
    traditionalUses: [
      'Penurun lonjakan glukosa darah postprandial (OHT)',
      'Inhibitor absorpsi karbohidrat usus halus',
      'Hipolipidemik reduksi trigliserida & LDL',
      'Antioksidan vaskular mikroangiopati diabetik'
    ],
    cypEffects: 'Inhibisi kompetitif enzim alfa-glukosidase pada enterosit mukosa usus halus',
    contraindicatedDrugs: [
      'Acarbose (sinergisme inhibisi alfa-glukosidase ➔ diare osmotik masif & flatulensi berat)',
      'Sulfonilurea (Glimepiride, Glibenclamide - hipoglikemia berat)',
      'Insulin injeksi'
    ],
    clinicalCautions: [
      'Wajib diminum bersama suapan pertama makan untuk efikasi maksimal.',
      'Monitor kadar GDS rutin untuk mencegah serangan hipoglikemia.'
    ]
  },
  {
    id: 'herb-daun-sembung',
    name: 'Daun Sembung (Blumea balsamifera)',
    latinName: 'Blumea balsamifera',
    commonIndonesianNames: ['Sembung', 'Sembung Legi', 'Sembung Utan', 'Blumeae Balsamiferae Folium'],
    activeCompounds: 'l-Borneol, Sineol, Luteolin, Kariofilen, Asam Balsamiferat',
    traditionalUses: [
      'Ekspektoran mukolitik pereda batuk berdahak',
      'Diaforetik peluruh keringat saat masuk angin & demam',
      'Antispasmodik kram saluran napas & bronkus',
      'Astringen luka mukosa lambung'
    ],
    cypEffects: 'Modulasi klirens bronkial dan permeabilitas mukosa',
    contraindicatedDrugs: [
      'Dextromethorphan (potensiasi sedasi & depresi napas)',
      'Codeine (antitusif opioid)',
      'Warfarin (pantau potensi perdarahan)'
    ],
    clinicalCautions: [
      'Waspadai reaksi hipersensitivitas pada pasien alergi familia Asteraceae.',
      'Hindari penggunaan pada pasien hipotermia akut.'
    ]
  },
  {
    id: 'herb-daun-beluntas',
    name: 'Daun Beluntas (Pluchea indica)',
    latinName: 'Pluchea indica',
    commonIndonesianNames: ['Beluntas', 'Luntas', 'Baluntas', 'Plucheae Indicae Folium'],
    activeCompounds: 'Stigmasterol, Tanin Katekat, Kaempferol, Asam Klorogenat, Minyak Atsiri',
    traditionalUses: [
      'Penghilang bau badan & bau keringat apokrin',
      'Antidiabetes herbal penstabil glukosa darah',
      'Antibakteri infeksi rongga mulut & keputihan',
      'Astringen diare'
    ],
    cypEffects: 'Aktivitas antimikroba terhadap bakteri Corynebacterium ketiak',
    contraindicatedDrugs: [
      'Glibenclamide & Glimepiride (hipoglikemia sinergis)',
      'Simvastatin (pantau fungsi enzim transaminase hepar)',
      'Obat antihipertensi'
    ],
    clinicalCautions: [
      'Gunakan teratur selama 2-4 minggu untuk hasil eliminasi bau badan optimal.',
      'Gunakan hati-hati pada ibu hamil trimester pertama.'
    ]
  },
  {
    id: 'herb-daun-dewa',
    name: 'Daun Dewa / Samsit (Gynura divaricata)',
    latinName: 'Gynura divaricata',
    commonIndonesianNames: ['Daun Dewa', 'Samsit', 'Beluntas Cina', 'Gynurae Divaricatae Folium'],
    activeCompounds: 'Flavonoid Rutin, Kuersetin, Asam Klorogenat, Alkaloid Pirolizidin non-toksik',
    traditionalUses: [
      'Antitrombotik alami pencegah pembekuan darah beku',
      'Peluruh memar hematoma traumatik internal',
      'Antihipertensi & proteksi vaskular mikrosirkulasi',
      'Antineoplastik adjuvan'
    ],
    cypEffects: 'Inhibisi agregasi trombosit yang diinduksi ADP dan trombin',
    contraindicatedDrugs: [
      'Aspirin & Clopidogrel (risiko perdarahan masif ganda)',
      'Warfarin & Dabigatran (antikoagulasi berlebih)',
      'NSAID dosis tinggi'
    ],
    clinicalCautions: [
      'Hentikan pemakaian minimal 10 hari sebelum prosedur bedah.',
      'KONTRAINDIKASI MUTLAK pada wanita hamil dan penderita trombositopenia.'
    ]
  },
  {
    id: 'herb-bawang-merah',
    name: 'Bawang Merah (Allium cepa)',
    latinName: 'Allium cepa',
    commonIndonesianNames: ['Bawang Merah', 'Brambang', 'Shallot', 'Allii Cepae Bulbus'],
    activeCompounds: 'Kuersetin-4-glukosida, Dialil Trisulfida, S-metilsistein sulfoksida, Allisin',
    traditionalUses: [
      'Fibrinolitik anti-aterosklerosis & pelancar peredaran darah',
      'Antikeloid topikal perata jaringan parut bekas luka',
      'Diaforetik kompres penurun panas anak secara turun-temurun',
      'Antihipertensi'
    ],
    cypEffects: 'Inhibisi enzim siklooksigenase trombosit & stimulasi aktivator plasminogen jaringan (t-PA)',
    contraindicatedDrugs: [
      'Warfarin & Heparin (peningkatan masa protrombin)',
      'Clopidogrel (antiplatelet sinergis)',
      'Metformin & Antidiabetes'
    ],
    clinicalCautions: [
      'Hindari penggunaan pada luka terbuka pasca operasi yang masih berdarah.',
      'Konsumsi mentah dosis tinggi dapat memicu iritasi mukosa lambung pada maag akut.'
    ]
  },
  {
    id: 'herb-rumput-mutiara',
    name: 'Rumput Mutiara (Hedyotis corymbosa)',
    latinName: 'Hedyotis corymbosa',
    commonIndonesianNames: ['Rumput Mutiara', 'Daun Lidah Ular', 'Katepan', 'Hedyotidis Corymbosae Herba'],
    activeCompounds: 'Asam Ursolat, Asam Oleanolat, Geniposida, Asam Geniposidat, Flavonoid',
    traditionalUses: [
      'Hepatoprotektor kerusakan sel hepar & hepatitis',
      'Imunostimulan stimulasi sel NK (Natural Killer)',
      'Antiinflamasi saluran kemih & radang panggul',
      'Antineoplastik herbal'
    ],
    cypEffects: 'Proteksi membran sel hepatosit terhadap peroksidasi lipid sitotoksik',
    contraindicatedDrugs: [
      'Parasetamol dosis toksik (modulasi enzim konjugasi hepar)',
      'Siklofosfamid & Kemoterapi sitotoksik',
      'Kortikosteroid imunosupresan'
    ],
    clinicalCautions: [
      'Konsultasikan dengan dokter spesialis onkologi bila digunakan sebagai adjuvan kanker.',
      'Tidak dianjurkan untuk wanita hamil dan menyusui.'
    ]
  },
  {
    id: 'herb-daun-alpukat',
    name: 'Daun Alpukat (Persea americana)',
    latinName: 'Persea americana',
    commonIndonesianNames: ['Daun Alpukat', 'Avocado Leaf', 'Perseae Americanae Folium'],
    activeCompounds: 'Kuersetin, Flavonoid Glikosida, Polifenol, Tanin, Asam Lemak Tak Jenuh',
    traditionalUses: [
      'Diuretik saluretik peluruh kencing batu ginjal',
      'Antihipertensi penurun tekanan darah arterial',
      'Antiinflamasi nefritis ringan',
      'Pereda sakit kepala tegang'
    ],
    cypEffects: 'Modulasi ekskresi natrium tubulus renalis dan penurunan resistensi vaskular',
    contraindicatedDrugs: [
      'Warfarin (penurunan efikasi antikoagulan / resistensi warfarin)',
      'Furosemide (deplesi cairan ganda)',
      'MAO Inhibitor (kandungan tiramin alami dapat memicu hipertensi)'
    ],
    clinicalCautions: [
      'Waspadai resistensi Warfarin; periksa nilai INR secara ketat bila pasien rutin minum teh daun alpukat.',
      'Wajib minum air putih yang banyak untuk mencegah dehidrasi.'
    ]
  },
  {
    id: 'herb-biji-kopi-hijau',
    name: 'Biji Kopi Hijau (Coffea canephora / robusta)',
    latinName: 'Coffea canephora / Coffea arabica',
    commonIndonesianNames: ['Kopi Hijau', 'Green Coffee Bean', 'Coffeae Semen'],
    activeCompounds: 'Asam Klorogenat (CGA min. 45%), Asam Kafeat, Kafein Alami (1-2%), Trigonelin',
    traditionalUses: [
      'Pelangsing herbal OHT & penurunan berat badan',
      'Sensitisasi reseptor insulin & modulasi glukosa darah',
      'Penurunan akumulasi lemak viseral hepar (fatty liver)',
      'Antioksidan vaskular'
    ],
    cypEffects: 'Inhibisi kompetitif enzim CYP1A2 oleh kafein alami, supresi glukosa-6-fosfatase hepar',
    contraindicatedDrugs: [
      'Teofilin (akumulasi kadar teofilin plasma ➔ takikardia & aritmia)',
      'Litium Karbonat (penurunan kadar litium serum memicu kekambuhan bipolar)',
      'Adenosin (antagonisme reseptor adenosin)',
      'Metformin (interaksi metabolisme glukosa hepar)'
    ],
    clinicalCautions: [
      'Hindari konsumsi pada pasien dengan riwayat takiaritmia jantung tak terkontrol.',
      'Batas konsumsi kafein harian total harus dihitung cermat.'
    ]
  },
  {
    id: 'herb-asam-jawa',
    name: 'Daging Buah Asam Jawa (Tamarindus indica)',
    latinName: 'Tamarindus indica',
    commonIndonesianNames: ['Asam Jawa', 'Asam Kawak', 'Tamarind', 'Tamarindi Pulpa'],
    activeCompounds: 'Asam Tartarat (min. 10%), Asam Malat, Asam Sitrat, Pektin, Flavonoid Vitexin',
    traditionalUses: [
      'Laksatif osmotik ringan pelancar BAB (Kunyit Asam)',
      'Hipolipidemik reduksi kolesterol total & trigliserida',
      'Penyegar dahaga diaforetik penurun demam',
      'Stimulan nafsu makan & saluran cerna'
    ],
    cypEffects: 'Peningkatan keasaman lambung, modulasi bioavailabilitas obat asam lemah',
    contraindicatedDrugs: [
      'Aspirin (peningkatan bioavailabilitas dan kadar plasma aspirin secara signifikan)',
      'Ibuprofen (peningkatan laju absorpsi NSAID)',
      'Bisacodyl (pengikisan salut enterik obat jika dikonsumsi bersamaan)'
    ],
    clinicalCautions: [
      'Beri jeda minimal 2 jam dari konsumsi aspirin atau obat bersalut enterik.',
      'Gunakan hati-hati pada pasien dengan tukak lambung aktif.'
    ]
  },
  {
    id: 'herb-gandarusa',
    name: 'Daun Gandarusa (Justicia gendarussa)',
    latinName: 'Justicia gendarussa',
    commonIndonesianNames: ['Gandarusa', 'Daun Rusa', 'Kaki Kuda', 'Justiciae Gendarussae Folium'],
    activeCompounds: 'Gendarusin A (Flavonoid C-Glikosida min. 0,15%), Alkaloid Justisin, Sitosterol',
    traditionalUses: [
      'Kontrasepsi non-hormonal pria herbal reversibel (OHT)',
      'Analgesik & antiinflamasi reumatik artritis',
      'Pereda memar & pembengkakan sendi',
      'Pereda sakit kepala & demam'
    ],
    cypEffects: 'Inhibisi spesifik enzim Hialuronidase pada akrosom spermatozoa',
    contraindicatedDrugs: [
      'Terapi Hormon Testosteron / Androgen',
      'Terapi Hormon Estrogen',
      'Meloxicam & NSAID (efek sinergis analgesik)'
    ],
    clinicalCautions: [
      'KONTRAINDIKASI pada pasangan yang sedang dalam program promil (program hamil).',
      'Efek kontrasepsi bersifat reversibel sempurna setelah penghentian konsumsi.'
    ]
  },
  {
    id: 'herb-daun-srikaya',
    name: 'Daun Srikaya (Annona squamosa)',
    latinName: 'Annona squamosa',
    commonIndonesianNames: ['Daun Srikaya', 'Srikaya Mulwo', 'Custard Apple Leaf', 'Annonae Squamosae Folium'],
    activeCompounds: 'Anonain, Kuersetin, Rutin, Asam Klorogenat, Skuamosin',
    traditionalUses: [
      'Antidiabetes herbal stimulasi sel beta pankreas',
      'Antiinflamasi reumatik & analgesik sendi',
      'Antiseptik kutu rambut & luka borok luar',
      'Penurun kadar kolesterol darah'
    ],
    cypEffects: 'Stimulasi sekresi insulin basal & supresi glukosa postprandial',
    contraindicatedDrugs: [
      'Sulfonilurea (Glibenclamide, Glimepiride - hipoglikemia berat)',
      'Insulin (risiko penurunan GDS drastis)',
      'Obat penekan SSP / sedatif'
    ],
    clinicalCautions: [
      'Kontraindikasi keras pada kehamilan (efek oksitosik miometrium).',
      'Wajib monitor gula darah mandiri secara disiplin.'
    ]
  },
  {
    id: 'herb-belimbing-wuluh',
    name: 'Buah Belimbing Wuluh (Averrhoa bilimbi)',
    latinName: 'Averrhoa bilimbi',
    commonIndonesianNames: ['Belimbing Wuluh', 'Belimbing Sayur', 'Belimbing Asam', 'Averrhoae Bilimbi Fructus'],
    activeCompounds: 'Asam Oksalat Konsentrasi Tinggi, Kalium Alami Tinggi, Asam Sitrat, Vitamin C',
    traditionalUses: [
      'Antihipertensi tradisional penurun tekanan darah tinggi',
      'Pereda sariawan & radang gusi',
      'Antidiabetes & penurun kolesterol darah',
      'Antipiretik pereda batuk pilek'
    ],
    cypEffects: 'Beban filtrasi asam oksalat dan ekskresi ion kalium tubulus renalis masif',
    contraindicatedDrugs: [
      'Spironolakton & Diuretik Hemat Kalium (risiko HIPERKALEMIA FATAL)',
      'ACE Inhibitor & ARB (hiperkalemia aritmia)',
      'Gentamicin / Cisplatin (nefrotoksisitas presipitasi kristal oksalat akut)',
      'Digoksin (aritmia jantung akibat pergeseran elektrolit kalium)'
    ],
    clinicalCautions: [
      'KONTRAINDIKASI MUTLAK PADA GAGAL GINJAL KRONIK (CKD): PRESIPITASI KRISTAL KALSIUM OKSALAT MEMICU NEFROPATI AKUT OKSALOSIS DAN ANURIA FATAL.',
      'Dilarang mengonsumsi jus belimbing wuluh pekat dalam keadaan perut kosong atau dehidrasi.'
    ]
  },
  {
    id: 'herb-akar-wangi',
    name: 'Akar Wangi (Vetiveria zizanioides)',
    latinName: 'Vetiveria zizanioides / Chrysopogon zizanioides',
    commonIndonesianNames: ['Akar Wangi', 'Urek Wangi', 'Vetiver', 'Vetiveriae Radix'],
    activeCompounds: 'Khusimol, Alfa-Vetivon, Beta-Vetivon, Isovalencenol, Asam Vetivenat',
    traditionalUses: [
      'Ansiolitik sedatif alami relaksasi sistem saraf',
      'Karminatif peluruh kembung & rasa mual',
      'Diaforetik pereda demam & keringat dingin',
      'Minyak aromaterapi penurun stres & ansietas'
    ],
    cypEffects: 'Modulasi positif kanal reseptor GABA-A sentral',
    contraindicatedDrugs: [
      'Alprazolam & Diazepam (potensiasi depresi sistem saraf pusat)',
      'Alkohol (sedasi berat & amnesia)',
      'Zolpidem & Hipnotik'
    ],
    clinicalCautions: [
      'Hindari mengemudikan kendaraan bermotor setelah mengonsumsi sediaan akar wangi.',
      'Hati-hati pada pasien dengan riwayat depresi mental berat.'
    ]
  },
  {
    id: 'herb-kayu-rapat',
    name: 'Kulit Kayu Rapat (Parameria laevigata)',
    latinName: 'Parameria laevigata',
    commonIndonesianNames: ['Kayu Rapat', 'Pegatsih', 'Parameriae Cortex'],
    activeCompounds: 'Tanin Katekat Terkondensasi (min. 15%), Flavonoid, Saponin, Polifenol',
    traditionalUses: [
      'Astringen mukosa panggul & tonikum kewanitaan (Jamu Rapat)',
      'Antidiare kronis presipitasi lendir usus',
      'Penyembuh luka luar & hemostatik lokal',
      'Pengencang tonus jaringan otot polos'
    ],
    cypEffects: 'Presipitasi protein & pembentukan kompleks kelat tidak larut dengan ion logam divalen/trivalen',
    contraindicatedDrugs: [
      'Ferrous Sulfate / Fumarate (Khelasi mutlak ion Fe ➔ gagal absorpsi terapi anemia)',
      'Kodein & Alkaloid Obat (kompleksasi presipitat di saluran cerna)',
      'Suplemen Kalsium & Zink'
    ],
    clinicalCautions: [
      'Beri jeda minimal 3-4 jam bila pasien mengonsumsi suplemen zat besi oral (TTD).',
      'Kontraindikasi pada pasien dengan konstipasi kronis berat akibat risiko impaksi fekal.'
    ]
  },
  {
    id: 'herb-krokot',
    name: 'Herba Krokot (Portulaca oleracea)',
    latinName: 'Portulaca oleracea',
    commonIndonesianNames: ['Krokot', 'Gelang Pasir', 'Purslane', 'Portulacae Herba'],
    activeCompounds: 'Asam Alfa-Linolenat (ALA / Omega-3 Nabati), Dopamin Alami, Betalain, Glutation',
    traditionalUses: [
      'Sumber asam lemak omega-3 nabati proteksi kardiovaskular',
      'Antidiabetes & penstabil resistensi insulin',
      'Antioksidan neuroprotektif sel otak',
      'Antiinflamasi disuria & infeksi saluran kencing'
    ],
    cypEffects: 'Aktivitas dopaminergik perifer dan modulasi jalur agregasi trombosit TXA2',
    contraindicatedDrugs: [
      'Levodopa / Carbidopa (fluktuasi kadar dopamin plasma & diskinesia)',
      'Warfarin & Antiplatelet (efek antitrombotik aditif omega-3)',
      'Glimepiride (hipoglikemia sinergis)'
    ],
    clinicalCautions: [
      'Kandungan oksalat moderat; konsumsi air yang cukup bagi pasien dengan riwayat nefrolitiasis.',
      'Sesuaikan dosis levodopa bila pasien Parkinson mengonsumsi herba krokot sebagai lalapan rutin.'
    ]
  }
];

export const HERB_DRUG_INTERACTIONS_EXPANSION: HerbDrugInteraction[] = [
  // =========================================================================
  // 1. ADAS (Foeniculum vulgare)
  // =========================================================================
  {
    id: 'hdi-adas-ciprofloxacin',
    herbName: 'Buah Adas',
    latinName: 'Foeniculum vulgare',
    herbActiveCompounds: 'Minyak Atsiri Trans-Anetol, Flavonoid, Kation Polivalen',
    drugName: 'Ciprofloxacin & Levofloxacin',
    drugClass: 'Antibiotik Fluorokuinolon',
    interactionType: 'Farmakokinetik (CYP/P-gp)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Penurunan Drastis Bioavailabilitas Antibiotik (hingga >50%) dan Kegagalan Terapi Infeksi Bakteri.',
    mechanism: 'Komponen musilago dan kation pada buah adas membentuk khelasi kompleks tidak larut dengan gugus 3-karboksilat fluorokuinolon di lumen usus, menghambat absorpsi sistemik obat.',
    clinicalRecommendation: 'HINDARI minum rebusan adas bersamaan dengan ciprofloxacin. Beri jeda minimal 2 jam sebelum atau 4 jam sesudah minum antibiotik.',
    references: 'Clinical Pharmacokinetics Journal & WHO Monographs on Selected Medicinal Plants Vol 3'
  },
  {
    id: 'hdi-adas-tamoxifen',
    herbName: 'Buah Adas',
    latinName: 'Foeniculum vulgare',
    herbActiveCompounds: 'Trans-Anetol, Polimer Anetol',
    drugName: 'Tamoxifen',
    drugClass: 'Selective Estrogen Receptor Modulator (SERM) / Antikanker Payudara',
    interactionType: 'Farmakodinamik (Antagonis)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Penurunan Efikasi Antikanker Tamoxifen dan Peningkatan Risiko Kekambuhan Kanker Payudara ER-Positif.',
    mechanism: 'Trans-anetol dan polimernya memiliki aktivitas fitoestrogenik yang berikatan kompetitif dengan reseptor estrogen (ER-alpha dan ER-beta), mengantagonis efek penghambatan estrogen oleh tamoxifen.',
    clinicalRecommendation: 'KONTRAINDIKASI pada pasien kanker payudara yang menjalani terapi endokrin Tamoxifen. Edukasi pasien untuk menghindari jamu/minyak berbahan adas.',
    references: 'Natural Medicines Comprehensive Database & Memorial Sloan Kettering Cancer Center (MSKCC)'
  },
  {
    id: 'hdi-adas-oral-contraceptives',
    herbName: 'Buah Adas',
    latinName: 'Foeniculum vulgare',
    herbActiveCompounds: 'Trans-Anetol',
    drugName: 'Kontrasepsi Oral (Etinilestradiol, Levonorgestrel)',
    drugClass: 'Kontrasepsi Hormonal Oral',
    interactionType: 'Farmakodinamik (Antagonis)',
    severity: 'Moderat (Sedang)',
    clinicalEffect: 'Risiko Kegagalan Kontrasepsi Hormonal (Kehamilan Tak Direncanakan) atau Perdarahan Bercak (Spotting).',
    mechanism: 'Kompetisi aktivitas estrogenik herbal dengan estrogen eksogen sintetik memodulasi aksis umpan balik gonadotropin hipofisis.',
    clinicalRecommendation: 'Gunakan metode kontrasepsi mekanik (kondom) tambahan bila pasien rutin mengonsumsi sediaan adas dosis tinggi.',
    references: 'Phytotherapy Research & British National Formulary (BNF)'
  },

  // =========================================================================
  // 2. TEMU PUTIH (Curcuma zedoaria)
  // =========================================================================
  {
    id: 'hdi-temu-putih-warfarin',
    herbName: 'Temu Putih',
    latinName: 'Curcuma zedoaria',
    herbActiveCompounds: 'Zederon, Kurkuminoid, Seskuiterpen',
    drugName: 'Warfarin',
    drugClass: 'Antikoagulan Oral',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Peningkatan Nilai INR dan Risiko Perdarahan Mayor (Saluran Cerna, Hematuria, Perdarahan Gusi).',
    mechanism: 'Senyawa seskuiterpen temu putih menghambat agregasi trombosit serta memiliki efek antikoagulasi alami yang memperkuat penekanan faktor pembekuan II, VII, IX, X oleh Warfarin.',
    clinicalRecommendation: 'HINDARI penggunaan bersamaan. Bila pasien mengonsumsi temu putih, pantau nilai INR setiap minggu dan sesuaikan dosis antikoagulan.',
    references: 'Journal of Ethnopharmacology & FOHAI Kemenkes RI'
  },
  {
    id: 'hdi-temu-putih-aspirin',
    herbName: 'Temu Putih',
    latinName: 'Curcuma zedoaria',
    herbActiveCompounds: 'Zederon, Kurkuminoid',
    drugName: 'Aspirin (Aspilets / Thrombo Aspilet)',
    drugClass: 'Antiplatelet',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Perpanjangan Waktu Perdarahan dan Risiko Erosi / Ulserasi Mukosa Lambung Akut.',
    mechanism: 'Penghambatan siklooksigenase ganda oleh aspirin dan fraksi seskuiterpen zedoaria menyebabkan supresi sintesis tromboksan A2 (TXA2) yang sangat kuat.',
    clinicalRecommendation: 'Hentikan konsumsi temu putih minimal 2 minggu sebelum operasi atau cabut gigi. Pantau tanda perdarahan melena / hematemesis.',
    references: 'Formularium Obat Herbal Asli Indonesia (FOHAI) Kemenkes RI'
  },
  {
    id: 'hdi-temu-putih-clopidogrel',
    herbName: 'Temu Putih',
    latinName: 'Curcuma zedoaria',
    herbActiveCompounds: 'Zederon, Minyak Atsiri',
    drugName: 'Clopidogrel',
    drugClass: 'Antiplatelet (Antagonis Reseptor P2Y12)',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Hambatan Agregasi Trombosit Ekstrem dan Memar Hematoma Luas Spontan.',
    mechanism: 'Efek sinergis penghambatan reseptor purinergik P2Y12 oleh clopidogrel dan penghambatan pelepasan granula platelet oleh fraksi terpen temu putih.',
    clinicalRecommendation: 'Hindari kombinasi pada pasien pasca pemasangan stent jantung koroner (PCI) tanpa instruksi dokter spesialis jantung.',
    references: 'Natural Medicines Comprehensive Database'
  },

  // =========================================================================
  // 3. JINTAN HITAM / HABBATUSSAUDA (Nigella sativa)
  // =========================================================================
  {
    id: 'hdi-habbatussauda-cyclosporine',
    herbName: 'Jintan Hitam / Habbatussauda',
    latinName: 'Nigella sativa',
    herbActiveCompounds: 'Timokuinon (Thymoquinone)',
    drugName: 'Cyclosporine (Siklosporin)',
    drugClass: 'Imunosupresan Inhibitor Kalsineurin',
    interactionType: 'Farmakokinetik (CYP/P-gp)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Penurunan Konsentrasi Palung (Trough Level) Siklosporin Darah dan Risiko Rejeksi Akut Organ Transplantasi.',
    mechanism: 'Timokuinon menginduksi ekspresi transporter membran P-glikoprotein (P-gp / ABCB1) di usus dan meningkatkan klirens eliminasi siklosporin.',
    clinicalRecommendation: 'KONTRAINDIKASI KERAS pada pasien pasca transplantasi ginjal, hati, atau jantung yang bergantung pada terapi siklosporin.',
    references: 'Phytomedicine Journal & Therapeutic Drug Monitoring Database'
  },
  {
    id: 'hdi-habbatussauda-tacrolimus',
    herbName: 'Jintan Hitam / Habbatussauda',
    latinName: 'Nigella sativa',
    herbActiveCompounds: 'Timokuinon',
    drugName: 'Tacrolimus',
    drugClass: 'Imunosupresan Pasca-Transplantasi',
    interactionType: 'Farmakokinetik (CYP/P-gp)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Fluktuasi Tidak Terduga Kadar Tacrolimus Darah dan Penurunan Efikasi Penekanan Imunitas Cangkok.',
    mechanism: 'Modulasi enzim CYP3A4 hepar dan transporter efluks P-gp intestinal oleh fitokimia Nigella sativa mempercepat eliminasi tacrolimus.',
    clinicalRecommendation: 'HINDARI konsumsi habbatussauda pada seluruh penerima organ donor. Lakukan pemantauan TDM tacrolimus ketat bila terjadi paparan.',
    references: 'American Journal of Transplantation & WHO Monographs Vol 4'
  },
  {
    id: 'hdi-habbatussauda-amlodipine',
    herbName: 'Jintan Hitam / Habbatussauda',
    latinName: 'Nigella sativa',
    herbActiveCompounds: 'Timokuinon, Minyak Atsiri',
    drugName: 'Amlodipine',
    drugClass: 'Antihipertensi (Calcium Channel Blocker / CCB)',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Moderat (Sedang)',
    clinicalEffect: 'Hipotensi Simtomatik Berlebih, Pusing Saat Berdiri (Hipotensi Ortostatik), Sakit Kepala Berdenyut, hingga Sinkop.',
    mechanism: 'Timokuinon memiliki efek vasodilatasi pembuluh perifer alami via modulasi kanal kalsium tipe-L dan pelepasan NO endotel, memperkuat efek relaksasi vaskular amlodipine.',
    clinicalRecommendation: 'Beri jeda minimal 2 jam. Monitor tekanan darah secara mandiri; waspadai gejala limbung saat bangkit mendadak.',
    references: 'Journal of Hypertension & Fitofarmaka Formulary Kemenkes RI'
  },
  {
    id: 'hdi-habbatussauda-glimepiride',
    herbName: 'Jintan Hitam / Habbatussauda',
    latinName: 'Nigella sativa',
    herbActiveCompounds: 'Timokuinon',
    drugName: 'Glimepiride & Glibenclamide',
    drugClass: 'Antidiabetes Oral (Sulfonilurea)',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Moderat (Sedang)',
    clinicalEffect: 'Risiko Hipoglikemia Akut (Keringat Dingin, Tremor, Jantung Berdebar, Penurunan Kesadaran).',
    mechanism: 'Ekstrak habbatussauda meningkatkan sekresi insulin dari sel beta pankreas dan memperbaiki sensitivitas insulin perifer, memicu penurunan glukosa aditif.',
    clinicalRecommendation: 'Edukasi pasien mengenali tanda hipoglikemia. Sesuaikan dosis sulfonilurea bila mengonsumsi habbatussauda sebagai suplemen harian.',
    references: 'Diabetes & Metabolic Syndrome: Clinical Research & Reviews'
  },
  {
    id: 'hdi-habbatussauda-metformin',
    herbName: 'Jintan Hitam / Habbatussauda',
    latinName: 'Nigella sativa',
    herbActiveCompounds: 'Timokuinon',
    drugName: 'Metformin',
    drugClass: 'Antidiabetes Oral (Biguanida)',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Minor (Ringan)',
    clinicalEffect: 'Perbaikan Kontrol Glukosa Darah dan Potensi Gangguan Pencernaan Ringan (Mual, Kembung).',
    mechanism: 'Timokuinon dan metformin sama-sama mengaktivasi jalur AMPK (AMP-activated protein kinase) di hepar, menekan glukoneogenesis.',
    clinicalRecommendation: 'Kombinasi umumnya aman dan bermanfaat; konsumsi bersama makanan untuk meminimalkan efek samping dispepsia.',
    references: 'Phytotherapy Research'
  },

  // =========================================================================
  // 4. SURUHAN / SIRIH BUMI (Peperomia pellucida)
  // =========================================================================
  {
    id: 'hdi-suruhan-allopurinol',
    herbName: 'Suruhan / Daun Sirih Bumi',
    latinName: 'Peperomia pellucida',
    herbActiveCompounds: 'Pelusidatin, Flavonoid Kuersetin',
    drugName: 'Allopurinol',
    drugClass: 'Inhibitor Xantin Oksidase / Anti-Asam Urat',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Moderat (Sedang)',
    clinicalEffect: 'Penurunan Asam Urat Serum yang Terlalu Cepat (Hipourikemia) dan Mobilisasi Kristal Urat Memicu Eksaserbasi Artritis Gout Akut.',
    mechanism: 'Ekstrak suruhan menghambat enzim xantin oksidase secara kompetitif in vitro; kombinasi dengan allopurinol melipatgandakan supresi sintesis asam urat.',
    clinicalRecommendation: 'Beri jeda konsumsi minimal 2-3 jam. Minum banyak air putih (minimal 2,5 liter/hari) untuk mencegah pembentukan endapan urat di ginjal.',
    references: 'Journal of Natural Products & FOHAI Kemenkes RI'
  },
  {
    id: 'hdi-suruhan-febuxostat',
    herbName: 'Suruhan / Daun Sirih Bumi',
    latinName: 'Peperomia pellucida',
    herbActiveCompounds: 'Flavonoid Kuersetin, Tanin',
    drugName: 'Febuxostat',
    drugClass: 'Inhibitor Selektif Xantin Oksidase',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Moderat (Sedang)',
    clinicalEffect: 'Fluktuasi Kadar Asam Urat Plasma Drastis dan Beban Klirens Renal Meningkat.',
    mechanism: 'Inhibisi jalur metabolik purina ganda yang mempercepat mobilisasi tofus sendi.',
    clinicalRecommendation: 'Pantau kadar asam urat berkala dan sediakan kolkisin/analgesik profilaksis flare-up gout.',
    references: 'Formularium Fitofarmaka Kemenkes RI'
  },
  {
    id: 'hdi-suruhan-meloxicam',
    herbName: 'Suruhan / Daun Sirih Bumi',
    latinName: 'Peperomia pellucida',
    herbActiveCompounds: 'Alkaloid Peperomin, Tanin',
    drugName: 'Meloxicam & Piroxicam',
    drugClass: 'Analgesik & Antiinflamasi Nonsteroid (NSAID)',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Moderat (Sedang)',
    clinicalEffect: 'Peningkatan Risiko Iritasi Mukosa Lambung, Erosi Lambung Akut, Dispepsia, dan Risiko Perdarahan Saluran Cerna.',
    mechanism: 'Penghambatan enzim COX-2 dan penurunan sintesis prostaglandin mukoprotektif lambung aditif.',
    clinicalRecommendation: 'Konsumsi obat dan herbal selalu sesudah makan kenyang. Hindari penggunaan jangka panjang tanpa perlindungan gastroprotektor (PPI/sukralfat).',
    references: 'Fitofarmaka Indonesia'
  },

  // =========================================================================
  // 5. KETEPENG CINA (Cassia alata / Senna alata)
  // =========================================================================
  {
    id: 'hdi-ketepeng-digoxin',
    herbName: 'Ketepeng Cina',
    latinName: 'Cassia alata / Senna alata',
    herbActiveCompounds: 'Glikosida Antrakuinon, Rein, Aloe-emodin',
    drugName: 'Digoxin',
    drugClass: 'Glikosida Jantung (Inotropik Positif)',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Toksisitas Digoksin Fatal (Aritmia Ventrikel, Blok Jantung, Mual Muntah Berat, Gangguan Penglihatan Kuning-Hijau).',
    mechanism: 'Efek laksatif antrakuinon yang kuat memicu ekskresi berlebih kalium di kolon, menimbulkan hipokalemia berat. Hipokalemia secara dramatis meningkatkan kepekaan miokardium terhadap toksisitas digoksin.',
    clinicalRecommendation: 'KONTRAINDIKASI MUTLAK penggunaan bersamaan. Pasien pengguna digoksin dilarang keras mengonsumsi rebusan ketepeng cina.',
    references: 'WHO Monographs on Selected Medicinal Plants Vol 3 & British National Formulary'
  },
  {
    id: 'hdi-ketepeng-furosemide',
    herbName: 'Ketepeng Cina',
    latinName: 'Cassia alata / Senna alata',
    herbActiveCompounds: 'Rein, Senosida',
    drugName: 'Furosemide',
    drugClass: 'Diuretik Loop',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Hipokalemia Berat Akut, Kram Otot Hebat, Kelemahan Neuromuskular, dan Dehidrasi Berat.',
    mechanism: 'Efek ganda pembuangan kalium melalui ginjal (oleh furosemid) dan melalui usus besar (oleh efek laksatif sekretori antrakuinon).',
    clinicalRecommendation: 'HINDARI kombinasi. Bila pasien membutuhkan laksatif, gunakan pencahar pembentuk massa (bulk laxative) atau laktulosa.',
    references: 'Natural Medicines Comprehensive Database'
  },
  {
    id: 'hdi-ketepeng-warfarin',
    herbName: 'Ketepeng Cina',
    latinName: 'Cassia alata / Senna alata',
    herbActiveCompounds: 'Glikosida Antrakuinon',
    drugName: 'Warfarin',
    drugClass: 'Antikoagulan Oral',
    interactionType: 'Farmakokinetik (CYP/P-gp)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Peningkatan Nilai INR Tidak Stabil dan Peningkatan Risiko Perdarahan Saluran Cerna Spontan.',
    mechanism: 'Diare akibat laksatif menurunkan flora usus normal penghasil vitamin K endogen, memperkuat efek antikoagulasi warfarin.',
    clinicalRecommendation: 'Hindari penggunaan laksatif stimulan ketepeng cina pada pasien dalam terapi antikoagulasi oral.',
    references: 'American Journal of Health-System Pharmacy'
  },
  {
    id: 'hdi-ketepeng-corticosteroids',
    herbName: 'Ketepeng Cina',
    latinName: 'Cassia alata / Senna alata',
    herbActiveCompounds: 'Rein, Senosida',
    drugName: 'Kortikosteroid Sistemik (Dexamethasone, Methylprednisolone)',
    drugClass: 'Kortikosteroid',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Moderat (Sedang)',
    clinicalEffect: 'Eksaserbasi Deplesi Elektrolit Kalium Serum dan Kelemahan Otot.',
    mechanism: 'Kortikosteroid memiliki aktivitas mineralokortikoid yang meretensi natrium dan membuang kalium urin, bersinergi dengan pembuangan kalium intestinal.',
    clinicalRecommendation: 'Monitor kadar elektrolit serum (K+, Na+) secara periodik bila penggunaan tidak dapat dihindari.',
    references: 'Micromedex Drug Interactions'
  },

  // =========================================================================
  // 6. DAUN SUKUN (Artocarpus altilis)
  // =========================================================================
  {
    id: 'hdi-sukun-captopril',
    herbName: 'Daun Sukun',
    latinName: 'Artocarpus altilis',
    herbActiveCompounds: 'Artonin E, Flavonoid Rutin',
    drugName: 'Captopril & Ramipril',
    drugClass: 'Antihipertensi (ACE Inhibitor)',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Moderat (Sedang)',
    clinicalEffect: 'Hipotensi Simtomatik Akut, Pusing Postural Saat Bangkit Berdiri, dan Rasa Melayang.',
    mechanism: 'Kombinasi efek vasodilatasi via penghambatan konversi angiotensin II oleh ACEi dan stimulasi sintesis NO vaskular oleh flavonoid daun sukun.',
    clinicalRecommendation: 'Beri jeda minimal 2 jam. Awasi tekanan darah berkala dan anjurkan minum air putih cukup.',
    references: 'FOHAI Kemenkes RI & Phytomedicine'
  },
  {
    id: 'hdi-sukun-candesartan',
    herbName: 'Daun Sukun',
    latinName: 'Artocarpus altilis',
    herbActiveCompounds: 'Artonin E, Sitosterol',
    drugName: 'Candesartan & Valsartan',
    drugClass: 'Antihipertensi (Angiotensin Receptor Blocker / ARB)',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Moderat (Sedang)',
    clinicalEffect: 'Penurunan Tekanan Darah Berlebihan (Hipotensi Berlebih) dan Penurunan Perfusi Organ.',
    mechanism: 'Penghambatan reseptor AT1 vaskular aditif disertai modulasi kontraktilitas pembuluh perifer oleh fitokimia sukun.',
    clinicalRecommendation: 'Periksa tensi darah berkala; kurangi takaran rebusan herbal bila timbul keluhan pusing.',
    references: 'Journal of Cardiovascular Pharmacology'
  },
  {
    id: 'hdi-sukun-furosemide',
    herbName: 'Daun Sukun',
    latinName: 'Artocarpus altilis',
    herbActiveCompounds: 'Flavonoid Glikosida',
    drugName: 'Furosemide',
    drugClass: 'Diuretik Loop',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Moderat (Sedang)',
    clinicalEffect: 'Peningkatan Frekuensi Berkemih Ekstrem, Deplesi Volume Cairan Ekstraseluler, dan Hipotensi Ortostatik.',
    mechanism: 'Efek diuresis saluretik alami daun sukun memperkuat efek natriuresis furosemid pada ansa Henle ginjal.',
    clinicalRecommendation: 'Monitor status hidrasi dan elektrolit. Jangan gunakan bersamaan pada orang tua rentan dehidrasi.',
    references: 'Fitofarmaka Indonesia'
  },

  // =========================================================================
  // 7. KAYU SECANG (Caesalpinia sappan)
  // =========================================================================
  {
    id: 'hdi-secang-heparin',
    herbName: 'Kayu Secang',
    latinName: 'Caesalpinia sappan',
    herbActiveCompounds: 'Brasilin (Brazilin)',
    drugName: 'Heparin & Enoxaparin (LMWH)',
    drugClass: 'Antikoagulan Parenteral',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Peningkatan Signifikan Risiko Perdarahan Sistemik, Hematoma Tempat Suntikan, dan Perdarahan Spontan.',
    mechanism: 'Brasilin menghambat aktivasi faktor pembekuan dan menekan agregasi trombosit, menghasilkan efek antikoagulasi aditif kuat bersama heparin.',
    clinicalRecommendation: 'KONTRAINDIKASI penggunaan rebusan secang pada pasien rawat inap yang sedang menerima terapi antikoagulan parenteral.',
    references: 'Thrombosis Research & FOHAI Kemenkes RI'
  },
  {
    id: 'hdi-secang-warfarin',
    herbName: 'Kayu Secang',
    latinName: 'Caesalpinia sappan',
    herbActiveCompounds: 'Brasilin, Brazilein',
    drugName: 'Warfarin',
    drugClass: 'Antikoagulan Oral',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Perpanjangan Nilai Prothrombin Time (PT/INR) dan Risiko Hemoragi Mukosa.',
    mechanism: 'Penghambatan fibrinolitik alami dan aktivitas antiplatelet brasilin bersinergi dengan penekanan faktor koagulasi dependen vitamin K.',
    clinicalRecommendation: 'Hindari konsumsi rutin jamu secang / wedang uwuh pada pengguna warfarin. Pantau nilai INR rutin.',
    references: 'Natural Medicines Database'
  },
  {
    id: 'hdi-secang-aspirin',
    herbName: 'Kayu Secang',
    latinName: 'Caesalpinia sappan',
    herbActiveCompounds: 'Brasilin, Proantosianidin',
    drugName: 'Aspirin (Asam Asetilsalisilat)',
    drugClass: 'Antiplatelet',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Moderat (Sedang)',
    clinicalEffect: 'Perpanjangan Waktu Perdarahan Kulit dan Memar Spontan.',
    mechanism: 'Efek penghambatan agregasi platelet ganda melalui jalur sintesis tromboksan dan penghambatan pelepasan faktor koagulasi.',
    clinicalRecommendation: 'Hentikan konsumsi secang 1 minggu sebelum tindakan bedah minor atau prosedur dental.',
    references: 'Journal of Ethnopharmacology'
  },
  {
    id: 'hdi-secang-antidiabetic',
    herbName: 'Kayu Secang',
    latinName: 'Caesalpinia sappan',
    herbActiveCompounds: 'Brasilin',
    drugName: 'Glimepiride & Metformin',
    drugClass: 'Antidiabetes Oral',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Minor (Ringan)',
    clinicalEffect: 'Peningkatan Sensitivitas Insulin dan Penurunan Kadar Glukosa Darah Postprandial yang Lebih Baik.',
    mechanism: 'Brasilin merangsang translokasi transporter glukosa GLUT-4 pada jaringan otot dan adiposa, membantu kerja obat antidiabetes.',
    clinicalRecommendation: 'Dapat digunakan sebagai terapi pendamping; lakukan pemantauan gula darah mandiri berkala.',
    references: 'Planta Medica'
  },

  // =========================================================================
  // 8. KEMBANG TELANG (Clitoria ternatea)
  // =========================================================================
  {
    id: 'hdi-telang-donepezil',
    herbName: 'Kembang Telang',
    latinName: 'Clitoria ternatea',
    herbActiveCompounds: 'Antosianin Ternatin, Kuersetin',
    drugName: 'Donepezil & Rivastigmine',
    drugClass: 'Inhibitor Asetilkolinesterase (Anti-Demensia Alzheimer)',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Moderat (Sedang)',
    clinicalEffect: 'Potensiasi Efek Kolinergik Berlebihan (Bradikardia, Hipersalivasi, Kram Perut, Diare, Mual Muntah).',
    mechanism: 'Kembang telang memiliki aktivitas penghambatan enzim asetilkolinesterase (AChE) alami; kombinasi dengan donepezil melipatgandakan akumulasi asetilkolin di sinaps saraf.',
    clinicalRecommendation: 'Gunakan dengan hati-hati pada pasien demensia yang mengonsumsi obat anti-AChE. Monitor denyut nadi (waspadai bradikardia <55 bpm).',
    references: 'Journal of Ethnopharmacology & Neurochemistry International'
  },
  {
    id: 'hdi-telang-diazepam',
    herbName: 'Kembang Telang',
    latinName: 'Clitoria ternatea',
    herbActiveCompounds: 'Ternatin, Taraxerol',
    drugName: 'Diazepam & Alprazolam',
    drugClass: 'Benzodiazepin (Ansiolitik & Sedatif)',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Moderat (Sedang)',
    clinicalEffect: 'Sedasi Berat, Rasa Kantuk Berlebihan, Gangguan Koordinasi Motorik (Ataksia), dan Penurunan Kewaspadaan.',
    mechanism: 'Senyawa fitokimia bunga telang berikatan secara modulatif pada kompleks reseptor GABA-A sentral, memperkuat depresi SSP benzodiazepin.',
    clinicalRecommendation: 'HINDARI mengemudi atau mengoperasikan mesin berbahaya bila mengombinasikan teh telang dengan obat sedatif/ansiolitik.',
    references: 'Fitofarmaka Indonesia & Pharmacology Biochemistry and Behavior'
  },

  // =========================================================================
  // 9. DAUN SAGA (Abrus precatorius)
  // =========================================================================
  {
    id: 'hdi-saga-furosemide',
    herbName: 'Daun Saga',
    latinName: 'Abrus precatorius',
    herbActiveCompounds: 'Abrusosida A-D, Glisirizin Alami',
    drugName: 'Furosemide',
    drugClass: 'Diuretik Loop',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Pseudohiperaldosteronisme, Hipokalemia Berat, Hipertensi Paradoksikal, dan Aritmia Kardiak.',
    mechanism: 'Glisirizin alami pada daun saga menghambat enzim 11-beta-HSD2 di tubulus ginjal, memungkinkan kortisol mengaktivasi reseptor mineralokortikoid yang meretensi natrium dan membuang kalium urin berlebih.',
    clinicalRecommendation: 'HINDARI penggunaan rebusan daun saga dosis tinggi secara kronik bersamaan dengan furosemid. Monitor kadar elektrolit darah.',
    references: 'Formularium OHT BPOM RI & Endocrine Reviews'
  },
  {
    id: 'hdi-saga-spironolactone',
    herbName: 'Daun Saga',
    latinName: 'Abrus precatorius',
    herbActiveCompounds: 'Glisirizin Alami, Abrusosida',
    drugName: 'Spironolactone',
    drugClass: 'Diuretik Hemat Kalium (Antagonis Aldosteron)',
    interactionType: 'Farmakodinamik (Antagonis)',
    severity: 'Moderat (Sedang)',
    clinicalEffect: 'Penurunan Efikasi Spironolakton dalam Mengontrol Asites, Edema, atau Hipertensi Refrakter.',
    mechanism: 'Aktivasi reseptor mineralokortikoid akibat inhibisi 11-beta-HSD2 oleh senyawa glisirizin secara langsung melawan blokade aldosteron oleh spironolakton.',
    clinicalRecommendation: 'Gunakan sediaan obat kumur saga lokal tanpa ditelan pada pasien yang sedang dalam terapi spironolakton.',
    references: 'British Journal of Pharmacology'
  },

  // =========================================================================
  // 10. TEMU IRENG (Curcuma aeruginosa)
  // =========================================================================
  {
    id: 'hdi-temu-ireng-albendazole',
    herbName: 'Temu Ireng / Temu Hitam',
    latinName: 'Curcuma aeruginosa',
    herbActiveCompounds: 'Germakron, Sesquiterpene Lactone',
    drugName: 'Albendazole & Mebendazole',
    drugClass: 'Antelmintik Sintetik',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Moderat (Sedang)',
    clinicalEffect: 'Peningkatan Efikasi Pembasmian Cacing Usus Disertai Peningkatan Risiko Iritasi Lambung dan Peningkatan Enzim Transaminase Hepar.',
    mechanism: 'Kombinasi efek paralisis mikrotubulus cacing oleh albendazole dan paralisis neuromuskular oleh germakron temu ireng.',
    clinicalRecommendation: 'Beri jeda minimal 3 jam antara minum obat cacing medis dan jamu temu ireng. Jangan melebihi dosis anjuran.',
    references: 'Parasitology Research & FOHAI Kemenkes RI'
  },
  {
    id: 'hdi-temu-ireng-warfarin',
    herbName: 'Temu Ireng / Temu Hitam',
    latinName: 'Curcuma aeruginosa',
    herbActiveCompounds: 'Germakron, Kurzerenon',
    drugName: 'Warfarin',
    drugClass: 'Antikoagulan',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Moderat (Sedang)',
    clinicalEffect: 'Peningkatan Risiko Perdarahan Saluran Cerna Ringan hingga Sedang.',
    mechanism: 'Minyak atsiri seskuiterpen menghambat agregasi trombosit dan merangsang sirkulasi mukosa saluran cerna.',
    clinicalRecommendation: 'Pantau nilai INR berkala pada pasien yang mengonsumsi jamu cekok temu ireng.',
    references: 'Natural Standard Database'
  },

  // =========================================================================
  // 11. DAUN MURBEI (Morus alba)
  // =========================================================================
  {
    id: 'hdi-murbei-acarbose',
    herbName: 'Daun Murbei',
    latinName: 'Morus alba',
    herbActiveCompounds: '1-Deoksinojirimisin (1-DNJ)',
    drugName: 'Acarbose',
    drugClass: 'Inhibitor Alfa-Glukosidase',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Inhibisi Enzim Karbohidrat Usus Berlebihan, Flatulensi Berat, Meteorismus Menyakitkan, Spasme Usus, dan Diare Osmotik Akut.',
    mechanism: '1-DNJ dari murbei dan akarboza sama-sama merupakan inhibitor poten alfa-glukosidase pada brush border mukosa usus halus. Kombinasi keduanya menyebabkan fermentasi karbohidrat masif oleh bakteri kolon.',
    clinicalRecommendation: 'HINDARI konsumsi teh daun murbei bersamaan dengan obat Acarbose. Bila menggunakan daun murbei, konsultasikan penurunan dosis akarboza.',
    references: 'Diabetes Care & Phytomedicine Journal'
  },
  {
    id: 'hdi-murbei-glimepiride',
    herbName: 'Daun Murbei',
    latinName: 'Morus alba',
    herbActiveCompounds: '1-DNJ, Flavonoid Kuersetin',
    drugName: 'Glimepiride & Glibenclamide',
    drugClass: 'Antidiabetes (Sulfonilurea)',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Hipoglikemia Berat Mendadak (GDS < 60 mg/dL), Keringat Dingin, Gemetar, Gangguan Kognitif, hingga Koma Hipoglikemik.',
    mechanism: 'Penghambatan pemecahan disakarida oleh 1-DNJ menekan lonjakan glukosa, sementara sulfonilurea terus memacu sekresi insulin tanpa umpan balik glikemik yang cukup.',
    clinicalRecommendation: 'Monitor GDS secara disiplin. Pasien wajib membawa tablet glukosa murni (bukan gula tebu/sukrosa, karena sukrosa dihambat pemecahannya oleh 1-DNJ).',
    references: 'Journal of Ethnopharmacology'
  },
  {
    id: 'hdi-murbei-metformin',
    herbName: 'Daun Murbei',
    latinName: 'Morus alba',
    herbActiveCompounds: '1-DNJ, Asam Klorogenat',
    drugName: 'Metformin',
    drugClass: 'Antidiabetes (Biguanida)',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Moderat (Sedang)',
    clinicalEffect: 'Peningkatan Efek Penurunan Glukosa Darah Postprandial dan Potensi Peningkatan Frekuensi Buang Air Besar.',
    mechanism: 'Sinergisme mekanisme: penghambatan absorpsi karbohidrat di usus oleh 1-DNJ dan penurunan glukoneogenesis hepar serta peningkatan sensitivitas insulin oleh metformin.',
    clinicalRecommendation: 'Dapat digunakan bersama di bawah pengawasan dokter/apoteker dengan penyesuaian dosis metformin bila HbA1c mencapai target.',
    references: 'Biomedicine & Pharmacotherapy'
  },
  {
    id: 'hdi-murbei-insulin',
    herbName: 'Daun Murbei',
    latinName: 'Morus alba',
    herbActiveCompounds: '1-DNJ',
    drugName: 'Insulin (Rapid / Short-acting / Basal)',
    drugClass: 'Antidiabetes Parenteral',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Hipoglikemia Postprandial Akut Karena Kebutuhan Dosis Insulin Bolus Menurun Tajam.',
    mechanism: 'Penyerapan glukosa dari makanan dihambat secara signifikan oleh 1-DNJ, sehingga dosis insulin prandial reguler menjadi berlebihan.',
    clinicalRecommendation: 'Edukasi pasien untuk menurunkan dosis insulin prandial sesuai pemantauan CGM / glukometer bila mengonsumsi ekstrak murbei.',
    references: 'American Diabetes Association Guidelines'
  },

  // =========================================================================
  // 12. DAUN SEMBUNG (Blumea balsamifera)
  // =========================================================================
  {
    id: 'hdi-sembung-dextromethorphan',
    herbName: 'Daun Sembung',
    latinName: 'Blumea balsamifera',
    herbActiveCompounds: 'l-Borneol, Sineol, Flavonoid',
    drugName: 'Dextromethorphan (DMP)',
    drugClass: 'Antitusif Sentral Non-Opioid',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Moderat (Sedang)',
    clinicalEffect: 'Rasa Kantuk Berlebihan, Pusing Berputar, Ataksia, dan Depresi Refleks Batuk Berlebihan Memicu Penumpukan Dahak.',
    mechanism: 'Efek relaksasi saraf pusat borneol bersinergi dengan penekanan pusat batuk medula oblongata oleh DMP.',
    clinicalRecommendation: 'Jangan gunakan pada batuk produktif (berdahak) agar tidak terjadi retensi sputum di saluran bronkus. Beri jeda 3 jam.',
    references: 'FOHAI Kemenkes RI & Fitofarmaka Formulary'
  },
  {
    id: 'hdi-sembung-codeine',
    herbName: 'Daun Sembung',
    latinName: 'Blumea balsamifera',
    herbActiveCompounds: 'l-Borneol, Minyak Atsiri',
    drugName: 'Codeine',
    drugClass: 'Antitusif Opioid & Analgesik',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Sedasi Berat dan Risiko Depresi Pernapasan Ringan pada Pasien Rentan (Lansia / PPOK).',
    mechanism: 'Potensiasi depresi sistem saraf pusat dan depresi respirasi sentral.',
    clinicalRecommendation: 'KONTRAINDIKASI kombinasi pada pasien asma berat atau penyakit paru obstruktif kronik (PPOK).',
    references: 'British Journal of Clinical Pharmacology'
  },
  {
    id: 'hdi-sembung-warfarin',
    herbName: 'Daun Sembung',
    latinName: 'Blumea balsamifera',
    herbActiveCompounds: 'Flavonoid Luteolin, Borneol',
    drugName: 'Warfarin',
    drugClass: 'Antikoagulan',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Moderat (Sedang)',
    clinicalEffect: 'Peningkatan Potensi Memar Spontan dan Perpanjangan Bleeding Time.',
    mechanism: 'Flavonoid sembung memiliki efek antiagregasi platelet ringan dan modulasi integritas kapiler vaskular.',
    clinicalRecommendation: 'Pantau nilai INR secara berkala jika mengonsumsi jamu sembung dalam jangka waktu lebih dari 1 minggu.',
    references: 'Natural Standard Database'
  },

  // =========================================================================
  // 13. DAUN BELUNTAS (Pluchea indica)
  // =========================================================================
  {
    id: 'hdi-beluntas-glibenclamide',
    herbName: 'Daun Beluntas',
    latinName: 'Pluchea indica',
    herbActiveCompounds: 'Stigmasterol, Kaempferol',
    drugName: 'Glibenclamide & Glimepiride',
    drugClass: 'Antidiabetes Oral (Sulfonilurea)',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Moderat (Sedang)',
    clinicalEffect: 'Risiko Hipoglikemia Ringan hingga Sedang Terutama Saat Berpuasa atau Terlambat Makan.',
    mechanism: 'Fraksi stigmasterol daun beluntas merangsang sekresi insulin pulau Langerhans dan meningkatkan toleransi glukosa perifer.',
    clinicalRecommendation: 'Pastikan asupan karbohidrat teratur; jangan melewatkan jadwal makan utama.',
    references: 'Journal of Ethnopharmacology'
  },
  {
    id: 'hdi-beluntas-simvastatin',
    herbName: 'Daun Beluntas',
    latinName: 'Pluchea indica',
    herbActiveCompounds: 'Tanin Katekat, Flavonoid',
    drugName: 'Simvastatin & Atorvastatin',
    drugClass: 'Hipolipidemik (Statin)',
    interactionType: 'Farmakokinetik (CYP/P-gp)',
    severity: 'Minor (Ringan)',
    clinicalEffect: 'Peningkatan Efek Penurunan Kadar Lipid Serum Tanpa Peningkatan Toksisitas Bermakna.',
    mechanism: 'Sinergisme penghambatan absorpsi lipid intestinal oleh tanin beluntas dan penghambatan HMG-CoA reduktase oleh statin.',
    clinicalRecommendation: 'Kombinasi relatif aman; periksa profil lipid darah dan fungsi hati SGOT/SGPT berkala.',
    references: 'Phytotherapy Research'
  },

  // =========================================================================
  // 14. DAUN DEWA / SAMSIT (Gynura divaricata)
  // =========================================================================
  {
    id: 'hdi-daun-dewa-aspirin',
    herbName: 'Daun Dewa / Samsit',
    latinName: 'Gynura divaricata',
    herbActiveCompounds: 'Flavonoid Rutin, Kuersetin',
    drugName: 'Aspirin (Aspilets / Miniaspi)',
    drugClass: 'Antiplatelet',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Perdarahan Spontan Masif (Epistaksis/Mimisan, Hematoma Subkutan Luas, Perdarahan Saluran Cerna).',
    mechanism: 'Flavonoid rutin dari daun dewa memiliki aktivitas fibrinolitik dan antikoagulan alami yang menghambat aktivasi faktor pembekuan darah, memperparah penghambatan tromboksan A2 oleh aspirin.',
    clinicalRecommendation: 'HINDARI penggunaan bersamaan. Bila pasien pasca stroke/PJK mengonsumsi daun dewa, segera konsultasikan ke dokter untuk evaluasi hemostasis.',
    references: 'Formularium Obat Herbal Asli Indonesia (FOHAI) Kemenkes RI'
  },
  {
    id: 'hdi-daun-dewa-clopidogrel',
    herbName: 'Daun Dewa / Samsit',
    latinName: 'Gynura divaricata',
    herbActiveCompounds: 'Rutin, Asam Klorogenat',
    drugName: 'Clopidogrel',
    drugClass: 'Antiplatelet (Antagonis P2Y12)',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Perpanjangan Waktu Pembekuan Darah Signifikan dan Risiko Perdarahan Internal.',
    mechanism: 'Inhibisi adhesi dan agregasi trombosit ganda melalui jalur ADP dan modulasi integritas endotel vaskular.',
    clinicalRecommendation: 'KONTRAINDIKASI pada pasien dengan terapi antiplatelet ganda (DAPT) pasca-PCI.',
    references: 'Thrombosis Research'
  },
  {
    id: 'hdi-daun-dewa-warfarin',
    herbName: 'Daun Dewa / Samsit',
    latinName: 'Gynura divaricata',
    herbActiveCompounds: 'Flavonoid Rutin',
    drugName: 'Warfarin',
    drugClass: 'Antikoagulan Oral',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Lonjakan Nilai INR di Luar Rentang Terapi (INR > 4,0) dan Risiko Hematuria / Perdarahan Otak.',
    mechanism: 'Aktivitas antitrombotik sinergis yang menekan faktor koagulasi secara masif.',
    clinicalRecommendation: 'HINDARI kombinasi. Pantau nilai INR segera bila pasien telanjur mengonsumsi jamu daun dewa.',
    references: 'Natural Medicines Comprehensive Database'
  },
  {
    id: 'hdi-daun-dewa-dabigatran',
    herbName: 'Daun Dewa / Samsit',
    latinName: 'Gynura divaricata',
    herbActiveCompounds: 'Rutin, Kuersetin',
    drugName: 'Dabigatran & Rivaroxaban (DOAC/NOAC)',
    drugClass: 'Direct Oral Anticoagulant (DOAC)',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Peningkatan Risiko Perdarahan Mayor Tanpa Adanya Parameter Pemantauan Rutin Sederhana Seperti INR.',
    mechanism: 'Penghambatan trombin langsung oleh DOAC diperkuat oleh efek fibrinolitik alami senyawa daun dewa.',
    clinicalRecommendation: 'KONTRAINDIKASI MUTLAK pada pasien pengguna antikoagulan oral generasi baru.',
    references: 'Journal of Thrombosis and Haemostasis'
  },

  // =========================================================================
  // 15. BAWANG MERAH (Allium cepa)
  // =========================================================================
  {
    id: 'hdi-bawang-merah-warfarin',
    herbName: 'Bawang Merah',
    latinName: 'Allium cepa',
    herbActiveCompounds: 'Kuersetin-4-glukosida, Dialil Trisulfida',
    drugName: 'Warfarin',
    drugClass: 'Antikoagulan',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Moderat (Sedang)',
    clinicalEffect: 'Peningkatan Nilai INR dan Perpanjangan Waktu Perdarahan Bila Dikonsumsi Ekstrak Konsentrasi Tinggi.',
    mechanism: 'Senyawa organosulfur bawang merah merangsang sintesis aktivator plasminogen jaringan (t-PA) dan menghambat sintesis tromboksan B2.',
    clinicalRecommendation: 'Konsumsi bawang merah sebagai bumbu masak harian normal tidak menimbulkan masalah; waspadai konsumsi ekstrak kapsul bawang merah konsentrasi tinggi.',
    references: 'WHO Monographs on Selected Medicinal Plants Vol 2'
  },
  {
    id: 'hdi-bawang-merah-clopidogrel',
    herbName: 'Bawang Merah',
    latinName: 'Allium cepa',
    herbActiveCompounds: 'Senyawa Organosulfur',
    drugName: 'Clopidogrel',
    drugClass: 'Antiplatelet',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Moderat (Sedang)',
    clinicalEffect: 'Hambatan Agregasi Trombosit Aditif dan Risiko Memar Spontan.',
    mechanism: 'Inhibisi pelepasan granul alfa platelet oleh komponen allisin dan polisulfida.',
    clinicalRecommendation: 'Hentikan suplemen ekstrak bawang merah 1 minggu sebelum tindakan operasi bedah terencana.',
    references: 'Platelets Journal'
  },
  {
    id: 'hdi-bawang-merah-metformin',
    herbName: 'Bawang Merah',
    latinName: 'Allium cepa',
    herbActiveCompounds: 'S-metilsistein sulfoksida, Kuersetin',
    drugName: 'Metformin & Glimepiride',
    drugClass: 'Antidiabetes Oral',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Minor (Ringan)',
    clinicalEffect: 'Penurunan Glukosa Darah Puasa dan Peningkatan Sensitivitas Insulin.',
    mechanism: 'S-metilsistein sulfoksida merangsang sekresi insulin pankreas dan menstimulasi pemanfaatan glukosa perifer.',
    clinicalRecommendation: 'Kombinasi sangat baik dan aman dalam pola makan gizi seimbang.',
    references: 'Phytomedicine'
  },

  // =========================================================================
  // 16. RUMPUT MUTIARA (Hedyotis corymbosa)
  // =========================================================================
  {
    id: 'hdi-mutiara-paracetamol',
    herbName: 'Rumput Mutiara',
    latinName: 'Hedyotis corymbosa',
    herbActiveCompounds: 'Asam Ursolat, Asam Oleanolat',
    drugName: 'Parasetamol (Acetaminophen)',
    drugClass: 'Analgesik & Antipiretik',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Minor (Ringan)',
    clinicalEffect: 'Hepatoproteksi Aditif Menurunkan Risiko Toksisitas Hepatosit Akibat Metabolit Reaktif NAPQI.',
    mechanism: 'Asam ursolat mempertahankan kadar glutation (GSH) intraseluler hepar dan menekan enzim peroksidasi lipid.',
    clinicalRecommendation: 'Kombinasi aman; tidak memerlukan penyesuaian dosis parasetamol.',
    references: 'Journal of Ethnopharmacology'
  },
  {
    id: 'hdi-mutiara-cyclophosphamide',
    herbName: 'Rumput Mutiara',
    latinName: 'Hedyotis corymbosa',
    herbActiveCompounds: 'Geniposida, Asam Ursolat',
    drugName: 'Cyclophosphamide',
    drugClass: 'Antineoplastik / Kemoterapi Alkilasi',
    interactionType: 'Farmakodinamik (Antagonis)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Penurunan Efektivitas Sitotoksik Kemoterapi atau Interferensi Efek Pro-Apoptosis Sel Neoplasma.',
    mechanism: 'Efek antioksidan kuat rumput mutiara dapat menetralisir Reactive Oxygen Species (ROS) yang dibutuhkan oleh zat alkilasi untuk merusak DNA sel tumor.',
    clinicalRecommendation: 'Hentikan penggunaan rumput mutiara selama siklus kemoterapi aktif kecuali disetujui oleh Dokter Spesialis Onkologi.',
    references: 'Memorial Sloan Kettering Cancer Center (MSKCC)'
  },
  {
    id: 'hdi-mutiara-corticosteroids',
    herbName: 'Rumput Mutiara',
    latinName: 'Hedyotis corymbosa',
    herbActiveCompounds: 'Asam Oleanolat, Asam Ursolat',
    drugName: 'Dexamethasone & Methylprednisolone',
    drugClass: 'Kortikosteroid Imunosupresif',
    interactionType: 'Farmakodinamik (Antagonis)',
    severity: 'Moderat (Sedang)',
    clinicalEffect: 'Penurunan Efikasi Imunosupresi pada Penyakit Autoimun (Lupus / Sindrom Nefrotik).',
    mechanism: 'Rumput mutiara menstimulasi aktivitas fagositosis makrofag dan proliferasi sel imun, berlawanan dengan efek penekanan imunologis kortikosteroid.',
    clinicalRecommendation: 'Hindari konsumsi jamu rumput mutiara pada pasien yang sedang menjalani imunosupresi autoimun intensif.',
    references: 'Formularium Fitofarmaka Kemenkes RI'
  },

  // =========================================================================
  // 17. DAUN ALPUKAT (Persea americana)
  // =========================================================================
  {
    id: 'hdi-alpukat-warfarin',
    herbName: 'Daun Alpukat',
    latinName: 'Persea americana',
    herbActiveCompounds: 'Kuersetin, Tanin, Polifenol',
    drugName: 'Warfarin',
    drugClass: 'Antikoagulan',
    interactionType: 'Farmakodinamik (Antagonis)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Resistensi Terhadap Warfarin, Penurunan Drastis Nilai INR, dan Peningkatan Risiko Trombosis / Stroke Iskemik.',
    mechanism: 'Komponen fitokimia daun alpukat mempercepat metabolisme dan eliminasi warfarin di hepar serta menetralkan efek antikoagulasinya (antagonisme metabolik).',
    clinicalRecommendation: 'KONTRAINDIKASI PADA PENGGUNA WARFARIN. Hindari konsumsi rebusan teh daun alpukat secara rutin.',
    references: 'British Journal of Clinical Pharmacology & Natural Medicines Database'
  },
  {
    id: 'hdi-alpukat-furosemide',
    herbName: 'Daun Alpukat',
    latinName: 'Persea americana',
    herbActiveCompounds: 'Flavonoid Glikosida',
    drugName: 'Furosemide',
    drugClass: 'Diuretik Loop',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Moderat (Sedang)',
    clinicalEffect: 'Diuresis Berlebih, Deplesi Natrium dan Air (Hipovolemia), Pusing, dan Mulut Kering.',
    mechanism: 'Efek diuretik saluretik alami daun alpukat memperkuat ekskresi cairan pada tubulus ginjal.',
    clinicalRecommendation: 'Pantau tanda dehidrasi dan periksa kadar elektrolit darah berkala.',
    references: 'Fitofarmaka Indonesia'
  },
  {
    id: 'hdi-alpukat-selegiline',
    herbName: 'Daun Alpukat',
    latinName: 'Persea americana',
    herbActiveCompounds: 'Tiramin Alami, Amina Biogenik',
    drugName: 'Selegiline & Phenelzine (MAO Inhibitor)',
    drugClass: 'Monoamine Oxidase Inhibitor (MAOI)',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Krisis Hipertensi Akut (Tekanan Darah Melonjak Ekstrem, Sakit Kepala Hebat Berdenyut di Oksipital, Risiko Stroke Perdarahan).',
    mechanism: 'Kandungan amina tiramin pada daun dan buah alpukat tidak dapat dipecah akibat hambatan enzim monoamina oksidase, memicu pelepasan norepinefrin masif dari vesikel saraf simpatis.',
    clinicalRecommendation: 'KONTRAINDIKASI MUTLAK kombinasi tanaman alpukat dengan obat golongan MAO Inhibitor.',
    references: 'Medical Letter on Drugs and Therapeutics'
  },

  // =========================================================================
  // 18. BIJI KOPI HIJAU (Coffea canephora / robusta)
  // =========================================================================
  {
    id: 'hdi-kopi-hijau-theophylline',
    herbName: 'Biji Kopi Hijau',
    latinName: 'Coffea canephora / robusta',
    herbActiveCompounds: 'Asam Klorogenat (CGA), Kafein Alami',
    drugName: 'Theophylline (Teofilin / Aminofilin)',
    drugClass: 'Bronkodilator Metilsantin',
    interactionType: 'Farmakokinetik (CYP/P-gp)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Toksisitas Teofilin Berat: Takikardia Paroksismal, Aritmia Jantung, Tremor Hebat, Insomnia Berat, Kejang Epileptiformis.',
    mechanism: 'Kafein dalam ekstrak kopi hijau bersaing memperebutkan enzim pemetabolisme utama CYP1A2 di hepar, menurunkan klirens teofilin hingga 30-50% dan melipatgandakan kadar teofilin plasma.',
    clinicalRecommendation: 'HINDARI konsumsi suplemen kopi hijau pada pasien asma/PPOK yang menggunakan teofilin. Lakukan pemantauan TDM teofilin ketat.',
    references: 'Clinical Pharmacology & Therapeutics & Natural Medicines Database'
  },
  {
    id: 'hdi-kopi-hijau-lithium',
    herbName: 'Biji Kopi Hijau',
    latinName: 'Coffea canephora / robusta',
    herbActiveCompounds: 'Kafein Alami, Asam Klorogenat',
    drugName: 'Lithium Carbonate (Litium)',
    drugClass: 'Mood Stabilizer (Bipolar Disorder)',
    interactionType: 'Farmakokinetik (CYP/P-gp)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Penurunan Signifikan Kadar Litium Darah dan Kekambuhan Episode Manik/Depresi Bipolar Akut.',
    mechanism: 'Kafein meningkatkan laju filtrasi glomerulus (GFR) dan ekskresi litium di tubulus ginjal, menurunkan kadar plasma litium di bawah rentang terapeutik (0,6-1,2 mEq/L).',
    clinicalRecommendation: 'HINDARI fluktuasi asupan produk berkopi hijau pada pasien bipolar. Bila dihentikan mendadak, kadar litium dapat melonjak memicu toksisitas litium.',
    references: 'American Journal of Psychiatry & Micromedex'
  },
  {
    id: 'hdi-kopi-hijau-adenosine',
    herbName: 'Biji Kopi Hijau',
    latinName: 'Coffea canephora / robusta',
    herbActiveCompounds: 'Kafein Alami',
    drugName: 'Adenosine',
    drugClass: 'Antiaritmia Supraventrikular (SVT)',
    interactionType: 'Farmakodinamik (Antagonis)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Kegagalan Konversi Irama Jantung SVT Menjadi Irama Sinus Normal pada Penanganan Gawat Darurat.',
    mechanism: 'Kafein merupakan antagonis kompetitif langsung pada reseptor adenosin A1 dan A2A miokardium.',
    clinicalRecommendation: 'Hentikan asupan kafein/kopi hijau minimal 24-48 jam sebelum uji stres jantung atau terapi adenosin terencana.',
    references: 'AHA Heart Disease Guidelines'
  },
  {
    id: 'hdi-kopi-hijau-metformin',
    herbName: 'Biji Kopi Hijau',
    latinName: 'Coffea canephora / robusta',
    herbActiveCompounds: 'Asam Klorogenat (CGA min. 45%)',
    drugName: 'Metformin',
    drugClass: 'Antidiabetes Oral',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Minor (Ringan)',
    clinicalEffect: 'Sinergisme Positif Penurunan Glikemia Postprandial dan Perbaikan Profil Lemak Darah.',
    mechanism: 'Asam klorogenat menghambat glukosa-6-fosfatase hepar, melengkapi supresi glukoneogenesis oleh metformin.',
    clinicalRecommendation: 'Kombinasi sangat bermanfaat untuk pasien sindrom metabolik dan obesitas; monitor glukosa berkala.',
    references: 'Diabetes, Metabolic Syndrome and Obesity'
  },

  // =========================================================================
  // 19. ASAM JAWA (Tamarindus indica)
  // =========================================================================
  {
    id: 'hdi-asam-jawa-aspirin',
    herbName: 'Daging Buah Asam Jawa',
    latinName: 'Tamarindus indica',
    herbActiveCompounds: 'Asam Tartarat (min. 10%), Asam Malat',
    drugName: 'Aspirin',
    drugClass: 'Antiplatelet & Analgesik',
    interactionType: 'Farmakokinetik (CYP/P-gp)',
    severity: 'Moderat (Sedang)',
    clinicalEffect: 'Peningkatan Kadar Plasma Puncak Aspirin dan Risiko Iritasi Lambung Serta Perdarahan Mukosa.',
    mechanism: 'Keasaman asam tartarat meningkatkan fraksi aspirin yang tidak terionisasi di lambung, meningkatkan kecepatan dan jumlah absorpsi sistemik aspirin.',
    clinicalRecommendation: 'Beri jeda minimal 2 jam antara konsumsi jamu kunyit asam dan tablet aspirin. Minum bersama makanan kenyang.',
    references: 'European Journal of Drug Metabolism and Pharmacokinetics'
  },
  {
    id: 'hdi-asam-jawa-ibuprofen',
    herbName: 'Daging Buah Asam Jawa',
    latinName: 'Tamarindus indica',
    herbActiveCompounds: 'Asam Organik Alami',
    drugName: 'Ibuprofen',
    drugClass: 'NSAID',
    interactionType: 'Farmakokinetik (CYP/P-gp)',
    severity: 'Moderat (Sedang)',
    clinicalEffect: 'Peningkatan Bioavailabilitas Oral Ibuprofen dan Potensi Rasa Perih Ulu Hati (Dispepsia).',
    mechanism: 'Peningkatan absorpsi pasif obat asam lemah akibat penurunan pH lambung.',
    clinicalRecommendation: 'Beri jeda 2 jam; gunakan antasida bila timbul keluhan perih lambung.',
    references: 'Phytotherapy Research'
  },
  {
    id: 'hdi-asam-jawa-bisacodyl',
    herbName: 'Daging Buah Asam Jawa',
    latinName: 'Tamarindus indica',
    herbActiveCompounds: 'Asam Tartarat',
    drugName: 'Bisacodyl (Dulcolax)',
    drugClass: 'Laksatif Stimulan Bersalut Enterik',
    interactionType: 'Farmakodinamik (Antagonis)',
    severity: 'Moderat (Sedang)',
    clinicalEffect: 'Kram Perut Hebat, Iritasi Lambung Akut, dan Mual Akibat Larutnya Salut Obat Sebelum Waktunya di Lambung.',
    mechanism: 'Minuman asam pekat dapat mengikis lapisan salut enterik tablet bisakodil lebih cepat di lambung sebelum mencapai usus besar.',
    clinicalRecommendation: 'Jangan minum tablet bisakodil bersamaan dengan minuman asam jawa atau jus asam. Beri jeda minimal 2 jam.',
    references: 'AHFS Drug Information'
  },

  // =========================================================================
  // 20. DAUN GANDARUSA (Justicia gendarussa)
  // =========================================================================
  {
    id: 'hdi-gandarusa-testosterone',
    herbName: 'Daun Gandarusa',
    latinName: 'Justicia gendarussa',
    herbActiveCompounds: 'Gendarusin A',
    drugName: 'Testosterone (Terapi Sulih Hormon Pria)',
    drugClass: 'Hormon Androgen',
    interactionType: 'Farmakodinamik (Antagonis)',
    severity: 'Moderat (Sedang)',
    clinicalEffect: 'Interferensi Terhadap Parameter Analisis Semen dan Penurunan Efikasi Terapi Fertilitas Pria.',
    mechanism: 'Gendarusin A menghambat enzim hialuronidase sperma, menurunkan daya tembus spermatozoa pada membran sel telur selubung ovum.',
    clinicalRecommendation: 'Hentikan penggunaan gandarusa pada pria yang sedang menjalani program peningkatan kesuburan (promil).',
    references: 'Riset Nasional Herbal Kemenkes RI & Andrologia Journal'
  },
  {
    id: 'hdi-gandarusa-estrogen',
    herbName: 'Daun Gandarusa',
    latinName: 'Justicia gendarussa',
    herbActiveCompounds: 'Gendarusin A, Sitosterol',
    drugName: 'Estradiol / Estrogen Sintetik',
    drugClass: 'Hormon Estrogen',
    interactionType: 'Farmakodinamik (Antagonis)',
    severity: 'Moderat (Sedang)',
    clinicalEffect: 'Modulasi Reseptor Hormon dan Gangguan Siklus Menstruasi pada Wanita.',
    mechanism: 'Kompetisi pengikatan reseptor fitoestrogenik lemah pada jaringan target.',
    clinicalRecommendation: 'Penggunaan gandarusa dikhususkan bagi pria dan tidak dianjurkan bagi wanita usia subur.',
    references: 'Journal of Reproductive Medicine'
  },
  {
    id: 'hdi-gandarusa-meloxicam',
    herbName: 'Daun Gandarusa',
    latinName: 'Justicia gendarussa',
    herbActiveCompounds: 'Gendarusin A, Alkaloid Justisin',
    drugName: 'Meloxicam & Celecoxib',
    drugClass: 'NSAID Inhibitor COX-2',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Minor (Ringan)',
    clinicalEffect: 'Peningkatan Efek Analgesik Meredakan Nyeri Sendi Artritis Reumatoid.',
    mechanism: 'Inhibisi enzim COX-2 dan penurunan sitokin proinflamasi TNF-alfa aditif.',
    clinicalRecommendation: 'Kombinasi dapat membantu menurunkan kebutuhan dosis NSAID; gunakan sesudah makan.',
    references: 'Planta Medica'
  },

  // =========================================================================
  // 21. DAUN SRIKAYA (Annona squamosa)
  // =========================================================================
  {
    id: 'hdi-srikaya-glibenclamide',
    herbName: 'Daun Srikaya',
    latinName: 'Annona squamosa',
    herbActiveCompounds: 'Anonain, Kuersetin, Rutin',
    drugName: 'Glibenclamide & Glimepiride',
    drugClass: 'Antidiabetes Oral (Sulfonilurea)',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Hipoglikemia Akut, Keringat Dingin Berlebih, Tremor, dan Penurunan Kesadaran.',
    mechanism: 'Anonain dan flavonoid daun srikaya merangsang eksositosis insulin sel beta pankreas, bersinergi kuat dengan penutupan kanal K-ATP oleh sulfonilurea.',
    clinicalRecommendation: 'Periksa kadar gula darah secara berkala bila pasien mengonsumsi ramuan rebusan daun srikaya.',
    references: 'Phytomedicine Journal'
  },
  {
    id: 'hdi-srikaya-insulin',
    herbName: 'Daun Srikaya',
    latinName: 'Annona squamosa',
    herbActiveCompounds: 'Anonain, Kuersetin',
    drugName: 'Insulin (Novorapid, Lantus, Humalog)',
    drugClass: 'Antidiabetes Injeksi',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Penurunan GDS Drastis dan Risiko Syok Hipoglikemia Berat.',
    mechanism: 'Peningkatan ambilan glukosa seluler perifer disertai stimulasi insulin endogen aditif.',
    clinicalRecommendation: 'Monitor ketat gula darah mandiri; sesuaikan dosis insulin atas pengawasan dokter spesialis penyakit dalam.',
    references: 'Diabetes Research and Clinical Practice'
  },
  {
    id: 'hdi-srikaya-sedatives',
    herbName: 'Daun Srikaya',
    latinName: 'Annona squamosa',
    herbActiveCompounds: 'Alkaloid Anonain',
    drugName: 'Diazepam & Fenobarbital',
    drugClass: 'Sedatif & Antikonvulsan',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Moderat (Sedang)',
    clinicalEffect: 'Sedasi Memanjang, Hipotensi Ringan, dan Penurunan Refleks Psikomotorik.',
    mechanism: 'Alkaloid isokuinolin anonain memiliki afinitas pengikatan pada reseptor dopaminergik D2 dan sedasi sentral.',
    clinicalRecommendation: 'Hindari aktivitas berbahaya setelah meminum rebusan daun srikaya.',
    references: 'Journal of Natural Products'
  },

  // =========================================================================
  // 22. BUAH BELIMBING WULUH (Averrhoa bilimbi)
  // =========================================================================
  {
    id: 'hdi-belimbing-wuluh-spironolactone',
    herbName: 'Buah Belimbing Wuluh',
    latinName: 'Averrhoa bilimbi',
    herbActiveCompounds: 'Kalium Alami Sangat Tinggi, Asam Oksalat',
    drugName: 'Spironolactone',
    drugClass: 'Diuretik Hemat Kalium',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'HIPERKALEMIA FATAL (K+ Serum > 6,5 mEq/L): Aritmia Ventrikel, Gelombang T Meruncing Tinggi pada EKG, Fibrilasi Ventrikel, Henti Jantung (Cardiac Arrest).',
    mechanism: 'Belimbing wuluh mengandung konsentrasi kalium bebas yang sangat tinggi. Spironolakton memblokade ekskresi kalium di tubulus distal ginjal, menyebabkan akumulasi kalium serum toksik yang mengancam nyawa.',
    clinicalRecommendation: 'KONTRAINDIKASI MUTLAK pada pasien pengguna spironolakton atau eplerenone. Dilarang minum jus belimbing wuluh pekat.',
    references: 'Indonesian Journal of Nephrology & Circulation Journal'
  },
  {
    id: 'hdi-belimbing-wuluh-captopril',
    herbName: 'Buah Belimbing Wuluh',
    latinName: 'Averrhoa bilimbi',
    herbActiveCompounds: 'Kalium Alami Tinggi',
    drugName: 'Captopril, Ramipril, Lisinopril (ACEi)',
    drugClass: 'Antihipertensi (ACE Inhibitor)',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Hiperkalemia Simtomatik, Hipotensi Mendadak, dan Aritmia Kardiak.',
    mechanism: 'ACE inhibitor menekan sekresi aldosteron hepar-adrenal sehingga mengurangi pembuangan kalium ginjal, ditambah asupan kalium masif dari belimbing wuluh.',
    clinicalRecommendation: 'Hindari konsumsi jus belimbing wuluh konsentrasi tinggi bagi penderita hipertensi yang mengonsumsi ACE inhibitor atau ARB.',
    references: 'European Heart Journal'
  },
  {
    id: 'hdi-belimbing-wuluh-gentamicin',
    herbName: 'Buah Belimbing Wuluh',
    latinName: 'Averrhoa bilimbi',
    herbActiveCompounds: 'Asam Oksalat Bebas Konsentrasi Tinggi',
    drugName: 'Gentamicin & Amikacin',
    drugClass: 'Antibiotik Aminoglikosida',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Nefrotoksisitas Berat, Gagal Ginjal Akut (Acute Kidney Injury / AKI) dengan Anuria atau Oliguria Mendadak.',
    mechanism: 'Gentamisin menginduksi nekrosis tubulus ginjal akut (ATN), sementara asam oksalat belimbing wuluh membentuk kristal kalsium oksalat yang menyumbat lumen tubulus (Oksalosis Ginjal Akut), menghasilkan kerusakan ginjal ganda yang sinergis.',
    clinicalRecommendation: 'KONTRAINDIKASI MUTLAK. Jangan memberikan jus belimbing wuluh kepada pasien yang sedang menerima terapi antibiotik aminoglikosida.',
    references: 'American Journal of Kidney Diseases & Jurnal Farmakologi Indonesia'
  },
  {
    id: 'hdi-belimbing-wuluh-cisplatin',
    herbName: 'Buah Belimbing Wuluh',
    latinName: 'Averrhoa bilimbi',
    herbActiveCompounds: 'Asam Oksalat Tinggi',
    drugName: 'Cisplatin',
    drugClass: 'Kemoterapi Antineoplastik Nefrotoksik',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Gagal Ginjal Akut Toksik Berat dan Peningkatan Nilai Kreatinin Serum Secara Cepat.',
    mechanism: 'Kerusakan tubulus nefron oleh cisplatin diperparah oleh presipitasi intratubular kristal kalsium oksalat.',
    clinicalRecommendation: 'KONTRAINDIKASI KERAS pada seluruh pasien yang menjalani kemoterapi berbasis platinum.',
    references: 'Kidney International'
  },

  // =========================================================================
  // 23. AKAR WANGI (Vetiveria zizanioides)
  // =========================================================================
  {
    id: 'hdi-akar-wangi-alprazolam',
    herbName: 'Akar Wangi',
    latinName: 'Vetiveria zizanioides',
    herbActiveCompounds: 'Khusimol, Alfa-Vetivon, Beta-Vetivon',
    drugName: 'Alprazolam & Diazepam',
    drugClass: 'Benzodiazepin (Ansiolitik)',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Moderat (Sedang)',
    clinicalEffect: 'Sedasi Berat, Rasa Mengantuk Mendalam, Gangguan Keseimbangan Tubuh, dan Kelemahan Motorik.',
    mechanism: 'Minyak atsiri vetiver memodulasi transmisi GABA-A sentral, bersinergi dengan aksi agonis reseptor benzodiazepin.',
    clinicalRecommendation: 'Hindari konsumsi bersamaan bila pasien membutuhkan konsentrasi penuh. Jangan mengemudikan kendaraan.',
    references: 'Journal of Natural Products & Phytotherapy Research'
  },
  {
    id: 'hdi-akar-wangi-alcohol',
    herbName: 'Akar Wangi',
    latinName: 'Vetiveria zizanioides',
    herbActiveCompounds: 'Minyak Atsiri Seskuiterpen',
    drugName: 'Alkohol (Etanol)',
    drugClass: 'Depresan SSP',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Depresi Sistem Saraf Pusat Berat, Stupor, Penurunan Refleks Napas, dan Risiko Koma.',
    mechanism: 'Potensiasi inhibisi transmisi sinaptik SSP melalui jalur reseptor GABAergik.',
    clinicalRecommendation: 'KONTRAINDIKASI KERAS mengonsumsi alkohol bersamaan dengan seduhan/minyak akar wangi.',
    references: 'British National Formulary'
  },

  // =========================================================================
  // 24. KULIT BATANG KAYU RAPAT (Parameria laevigata)
  // =========================================================================
  {
    id: 'hdi-kayu-rapat-ferrous-sulfate',
    herbName: 'Kulit Batang Kayu Rapat',
    latinName: 'Parameria laevigata',
    herbActiveCompounds: 'Tanin Katekat Terkondensasi (min. 15%)',
    drugName: 'Ferrous Sulfate & Ferrous Fumarate (Tablet Tambah Darah / TTD)',
    drugClass: 'Suplemen Zat Besi (Terapi Anemia Defisiensi Besi)',
    interactionType: 'Farmakokinetik (CYP/P-gp)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Gagal Terapi Anemia Defisiensi Besi; Kadar Hemoglobin (Hb) Tetap Rendah Akibat Presipitasi Zat Besi Total di Usus.',
    mechanism: 'Kandungan tanin katekat konsentrasi tinggi pada kayu rapat membentuk kompleks khelasi presipitat hitam (ferro-tanat) yang tidak dapat larut dan tidak dapat diserap oleh vili usus halus.',
    clinicalRecommendation: 'Beri jeda minimal 3-4 jam antara minum tablet tambah darah dan jamu kayu rapat. Jangan minum obat zat besi bersama jamu rapat.',
    references: 'WHO Guidelines on Iron Deficiency Anemia & FOHAI Kemenkes RI'
  },
  {
    id: 'hdi-kayu-rapat-codeine',
    herbName: 'Kulit Batang Kayu Rapat',
    latinName: 'Parameria laevigata',
    herbActiveCompounds: 'Tanin Terkondensasi Tinggi',
    drugName: 'Codeine & Atropine',
    drugClass: 'Alkaloid Obat Resep',
    interactionType: 'Farmakokinetik (CYP/P-gp)',
    severity: 'Moderat (Sedang)',
    clinicalEffect: 'Penurunan Absorpsi Obat Alkaloid Secara Signifikan dan Konstipasi Berat Akibat Efek Astringen Ganda.',
    mechanism: 'Tanin mempresipitasikan zat aktif alkaloid di saluran cerna dan menghentikan motilitas usus secara berlebih.',
    clinicalRecommendation: 'Beri jeda minimal 3 jam; hindari penggunaan pada pasien dengan konstipasi kronis berat.',
    references: 'Fitofarmaka Formulary'
  },

  // =========================================================================
  // 25. HERBA KROKOT (Portulaca oleracea)
  // =========================================================================
  {
    id: 'hdi-krokot-levodopa',
    herbName: 'Herba Krokot',
    latinName: 'Portulaca oleracea',
    herbActiveCompounds: 'Dopamin Alami, L-DOPA Nabati',
    drugName: 'Levodopa / Carbidopa',
    drugClass: 'Antiparkinson Dopaminergik',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Moderat (Sedang)',
    clinicalEffect: 'Fluktuasi Tidak Terduga Respons Terapi Parkinson, Diskinesia (Gerakan Involunter Abnormal), dan Mual Muntah Sentral.',
    mechanism: 'Krokot mengandung konsentrasi dopamin dan katekolamin alami yang dapat memengaruhi ketersediaan neurotransmiter dopaminergik sistemik.',
    clinicalRecommendation: 'Konsultasikan dengan dokter spesialis neurologi. Sesuaikan jadwal makan krokot agar tidak bersamaan dengan waktu minum levodopa.',
    references: 'Movement Disorders Journal & Phytochemistry'
  },
  {
    id: 'hdi-krokot-warfarin',
    herbName: 'Herba Krokot',
    latinName: 'Portulaca oleracea',
    herbActiveCompounds: 'Asam Alfa-Linolenat (Omega-3 ALA)',
    drugName: 'Warfarin & Aspirin',
    drugClass: 'Antitrombotik / Antikoagulan',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Moderat (Sedang)',
    clinicalEffect: 'Peningkatan Risiko Perdarahan Ringan dan Waktu Pembekuan Darah Memanjang.',
    mechanism: 'Asam lemak omega-3 menghambat pembentukan tromboksan A2 pro-agregasi pada platelet, memperkuat efek antikoagulasi obat.',
    clinicalRecommendation: 'Kombinasi memerlukan pemantauan INR bila krokot dikonsumsi dalam jumlah besar secara rutin.',
    references: 'Prostaglandins, Leukotrienes and Essential Fatty Acids Journal'
  },
  {
    id: 'hdi-krokot-glimepiride',
    herbName: 'Herba Krokot',
    latinName: 'Portulaca oleracea',
    herbActiveCompounds: 'Betalain, Polisakarida Krokot',
    drugName: 'Glimepiride & Metformin',
    drugClass: 'Antidiabetes Oral',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Minor (Ringan)',
    clinicalEffect: 'Perbaikan Kontrol Glukosa Darah Puasa dan Sensitivitas Insulin.',
    mechanism: 'Polisakarida krokot meningkatkan toleransi glukosa dan menurunkan resistensi insulin pada jaringan hepar dan otot.',
    clinicalRecommendation: 'Sangat baik sebagai sayuran fungsional dalam diet diabetesi; monitor GDS rutin.',
    references: 'Journal of Medicinal Food'
  }
];
