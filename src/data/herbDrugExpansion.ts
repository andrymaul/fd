// Pengayaan Monografi Farmakope Herbal Indonesia (FHI) Edisi II & Database Interaksi Herbal-Obat
// Zero Data Duplication Clinical Layer - Acuan FHI Edisi II, FOHAI Kemenkes RI & Natural Medicines Database
import { HerbDrugInteraction, HerbProfile } from './herbDrugInteractionsData';

export const EXPANDED_HERB_INTERACTIONS: HerbDrugInteraction[] = [
  // =========================================================================
  // 1. BUAH PARE (Momordica charantia) - Antidiabetes & Metabolik
  // =========================================================================
  {
    id: 'hdi-pare-metformin',
    herbName: 'Buah Pare (Momordicae Charantiae Fructus)',
    latinName: 'Momordica charantia',
    herbActiveCompounds: 'Charantin, Polipeptida-P (Insulin Nabati), Vicine, Momordicin',
    drugName: 'Metformin',
    drugClass: 'Antidiabetes Oral Golongan Biguanida',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Hipoglikemia Akut Simtomatik dan Peningkatan Beban Asidosis Laktat pada Pasien dengan Gangguan Ginjal Ringan.',
    mechanism: 'Senyawa charantin dan polipeptida-p bekerja sinergis dengan metformin dalam menstimulasi kinase AMPK perifer dan menghambat glukoneogenesis hepar, menyebabkan penurunan glukosa darah berlebihan.',
    clinicalRecommendation: 'Edukasi pasien diabetes agar membatasi konsumsi rebusan atau jus pare pekat bersama metformin. Rutin pantau kadar gula darah mandiri (SMBG) minimal 2 kali sehari.',
    references: 'Formularium Obat Herbal Asli Indonesia Kemenkes RI & Journal of Ethnopharmacology'
  },
  {
    id: 'hdi-pare-glimepiride',
    herbName: 'Buah Pare',
    latinName: 'Momordica charantia',
    herbActiveCompounds: 'Charantin & Polipeptida-P',
    drugName: 'Glimepiride, Glibenclamide, Gliclazide',
    drugClass: 'Antidiabetes Oral Golongan Sulfonilurea',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Hipoglikemia Berat Akut Mendadak (Glukosa Darah < 50 mg/dL, Keringat Dingin, Tremor, Penurunan Kesadaran hingga Koma Hipoglikemik).',
    mechanism: 'Polipeptida-P meniru struktur dan fungsi insulin mamalia, berpadu sinergis dengan efek sekretagok insulin dari sulfonilurea yang merangsang eksositosis sel beta pankreas.',
    clinicalRecommendation: 'HINDARI konsumsi jus pare pekat bersama obat sulfonilurea. Bila pasien tetap ingin mengonsumsi pare sebagai sayur, beri jeda minimal 2-3 jam dari waktu minum obat medis.',
    references: 'Natural Medicines Comprehensive Database & FHI Edisi II'
  },
  {
    id: 'hdi-pare-insulin',
    herbName: 'Buah Pare',
    latinName: 'Momordica charantia',
    herbActiveCompounds: 'Polipeptida-P (Plant Insulin)',
    drugName: 'Insulin (Glargine, Aspart, Lispro, Detemir, Regular)',
    drugClass: 'Hormon Antidiabetes Suntik',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Syok Hipoglikemik Mendadak dan Koma Diabetikum.',
    mechanism: 'Efek farmakodinamik ganda yang menurunkan ambang glukosa plasma secara drastis melalui stimulasi translokasi GLUT-4 ke membran sel secara aditif bersama insulin eksogen.',
    clinicalRecommendation: 'KONTRAINDIKASI RELATIF: Pasien yang menggunakan regimen insulin intensif basal-bolus dilarang mengonsumsi ekstrak kapsul atau jus pare murni.',
    references: 'ADA Standards of Care & Monografi FHI Edisi II'
  },

  // =========================================================================
  // 2. LADA HITAM (Piper nigrum) - Bioenhancer & Penghambat CYP3A4/P-gp
  // =========================================================================
  {
    id: 'hdi-ladahitam-phenytoin',
    herbName: 'Lada Hitam (Piperis Nigri Fructus)',
    latinName: 'Piper nigrum',
    herbActiveCompounds: 'Piperin (Piperine 2.5 - 5.0%)',
    drugName: 'Phenytoin (Dilantin / Kutoin)',
    drugClass: 'Antikonvulsan Indeks Terapi Sempit',
    interactionType: 'Farmakokinetik (CYP/P-gp)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Toksisitas Akut Fenitoin (Nistagmus Horizontal, Ataksia Jalan Sempoyongan, Disartria, Letargi, dan Ensefalopati).',
    mechanism: 'Piperin menghambat enzim pemetabolisme CYP2C9/CYP2C19 serta transporter efflux P-glikoprotein di enterosit usus halus, meningkatkan bioavailabilitas oral (AUC) fenitoin hingga lebih dari 150%.',
    clinicalRecommendation: 'HINDARI suplemen piperin dosis tinggi pada pasien epilepsi pengguna fenitoin. Pantau kadar plasma fenitoin (rentang terapeutik sempit: 10 - 20 mcg/mL).',
    references: 'British Journal of Clinical Pharmacology & Clinical Pharmacokinetics (Piperine Bioenhancer)'
  },
  {
    id: 'hdi-ladahitam-theophylline',
    herbName: 'Lada Hitam',
    latinName: 'Piper nigrum',
    herbActiveCompounds: 'Piperin',
    drugName: 'Theophylline, Aminophylline',
    drugClass: 'Bronkodilator Xantin Indeks Terapi Sempit',
    interactionType: 'Farmakokinetik (CYP/P-gp)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Toksisitas Teofilin Berat (Takikardia Sinus > 120 bpm, Aritmia Ventrikel, Mual Muntah Hebat, dan Kejang Grand Mal).',
    mechanism: 'Piperin menghambat enzim hepatik CYP1A2 secara reversibel, memperpanjang waktu paruh eliminasi (t1/2) dan meningkatkan kadar puncak plasma (Cmax) teofilin.',
    clinicalRecommendation: 'Dilarang mengonsumsi suplemen lada hitam/piperin bersama teofilin. Cek kadar teofilin serum (target aman 5 - 15 mcg/mL).',
    references: 'European Journal of Drug Metabolism and Pharmacokinetics'
  },
  {
    id: 'hdi-ladahitam-propranolol',
    herbName: 'Lada Hitam',
    latinName: 'Piper nigrum',
    herbActiveCompounds: 'Piperin',
    drugName: 'Propranolol',
    drugClass: 'Beta-Blocker Non-Selektif',
    interactionType: 'Farmakokinetik (CYP/P-gp)',
    severity: 'Moderat (Sedang)',
    clinicalEffect: 'Bradikardia Berat (< 50 bpm), Hipotensi Simtomatik, Rasa Melayang, dan Bronkospasme.',
    mechanism: 'Piperin menghambat metabolisme lintas pertama (first-pass metabolism) propranolol di dinding usus dan hati melalui inhibisi CYP2D6 dan CYP1A2, melipatgandakan kadar obat dalam sirkulasi sistemik.',
    clinicalRecommendation: 'Monitor denyut nadi dan tekanan darah. Jika pasien rutin mengonsumsi jamu herbal lada hitam, pertimbangkan penyesuaian dosis propranolol.',
    references: 'Phytotherapy Research & FHI Edisi II'
  },
  {
    id: 'hdi-ladahitam-atorvastatin',
    herbName: 'Lada Hitam',
    latinName: 'Piper nigrum',
    herbActiveCompounds: 'Piperin',
    drugName: 'Atorvastatin, Simvastatin',
    drugClass: 'Statin (Inhibitor HMG-CoA Reduktase)',
    interactionType: 'Farmakokinetik (CYP/P-gp)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Miopati Parah, Rabdomiolisis (Nyeri Otot Akut, Urin Berwarna Gelap Seperti Teh, Peningkatan Enzim CK > 10 Kali Batas Normal), dan Gagal Ginjal Akut.',
    mechanism: 'Inhibisi poten CYP3A4 usus dan P-gp oleh piperin menghambat klirens eliminasi statin lipofilik, melipatgandakan paparan sistemik statin di jaringan otot skelet.',
    clinicalRecommendation: 'Hentikan suplemen ekstrak piperin murni bila pasien sedang dalam terapi Simvastatin atau Atorvastatin dosis tinggi.',
    references: 'Drug Metabolism and Disposition & Kemenkes RI'
  },

  // =========================================================================
  // 3. AKAR MANIS / LICORICE (Glycyrrhiza glabra) - Pseudoaldosteronisme
  // =========================================================================
  {
    id: 'hdi-licorice-furosemide',
    herbName: 'Akar Manis / Licorice (Glycyrrhizae Radix)',
    latinName: 'Glycyrrhiza glabra',
    herbActiveCompounds: 'Asam Glisirizat (Glycyrrhizic Acid), Glisiretinat',
    drugName: 'Furosemide, Torsemide, Bumetanide',
    drugClass: 'Diuretik Kuat (Loop Diuretics)',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Hipokalemia Ekstrem Berat (K+ Serum < 2.5 mEq/L, Tetani Otot, Paresis Flaksid, Pemanjangan Gelombang QT, dan Aritmia Ventrikel Fatal Torsades de Pointes).',
    mechanism: 'Asam glisirizat menghambat enzim 11-beta-hidroksisteroid dehidrogenase tipe 2 (11-beta-HSD2) di tubulus ginjal, mencegah inaktivasi kortisol menjadi kortison. Kortisol bebas menstimulasi reseptor mineralokortikoid secara berlebih (sindrom pseudoaldosteronisme) memicu pembuangan kalium masif ke urin bersama furosemide.',
    clinicalRecommendation: 'HINDARI konsumsi jamu/teh mengandung licorice atau permen akar manis pada pasien yang mendapat terapi diuretik loop. Cek kadar kalium serum segera bila timbul lemas otot.',
    references: 'New England Journal of Medicine (Licorice-Induced Hypokalemia) & WHO Monograph'
  },
  {
    id: 'hdi-licorice-digoxin',
    herbName: 'Akar Manis / Licorice',
    latinName: 'Glycyrrhiza glabra',
    herbActiveCompounds: 'Asam Glisirizat',
    drugName: 'Digoxin (Fargoxin)',
    drugClass: 'Glikosida Jantung Indeks Terapi Sempit',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Toksisitas Digoksin Mematikan (Aritmia Ventrikel Maligna, AV Block Derajat Tinggi, Pandangan Kuning-Hijau Xanthopsia, Henti Jantung).',
    mechanism: 'Hipokalemia berat yang diinduksi oleh asam glisirizat meningkatkan afinitas pengikatan digoksin pada pompa Na+/K+-ATPase miokardium, melipatgandakan efek kardiotoksik digoksin meskipun kadar digoksin darah masih dalam rentang normal.',
    clinicalRecommendation: 'KONTRAINDIKASI MUTLAK: Pasien dalam terapi Digoxin DILARANG KERAS mengonsumsi produk herbal atau permen yang mengandung ekstrak Glycyrrhiza glabra.',
    references: 'British Medical Journal & Clinical Cardiology Guidelines'
  },
  {
    id: 'hdi-licorice-captopril',
    herbName: 'Akar Manis / Licorice',
    latinName: 'Glycyrrhiza glabra',
    herbActiveCompounds: 'Asam Glisirizat',
    drugName: 'Captopril, Ramipril, Lisinopril, Candesartan, Valsartan',
    drugClass: 'Antihipertensi (ACEI / ARB)',
    interactionType: 'Farmakodinamik (Antagonis)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Kegagalan Terapi Antihipertensi, Lonjakan Tekanan Darah Rebound (Krisis Hipertensi), Retensi Cairan, dan Edema Perifer.',
    mechanism: 'Sindrom pseudoaldosteronisme yang diinduksi licorice menyebabkan retensi ion natrium dan air di tubulus kontortus distal secara masif, secara langsung meniadakan (mengantagonis) efek vasodilatasi dan natriuresis dari obat golongan ACEI dan ARB.',
    clinicalRecommendation: 'Hentikan konsumsi herbal licorice/akar manis pada pasien hipertensi yang tekanan darahnya resisten/sulit terkontrol.',
    references: 'Hypertension (Journal of the American Heart Association) & FHI Edisi II'
  },
  {
    id: 'hdi-licorice-spironolactone',
    herbName: 'Akar Manis / Licorice',
    latinName: 'Glycyrrhiza glabra',
    herbActiveCompounds: 'Asam Glisirizat',
    drugName: 'Spironolactone, Eplerenone',
    drugClass: 'Diuretik Hemat Kalium (Antagonis Aldosteron)',
    interactionType: 'Farmakodinamik (Antagonis)',
    severity: 'Moderat (Sedang)',
    clinicalEffect: 'Penurunan Signifikan Efektivitas Spironolakton dalam Menangani Asites Sirosis Hepatis atau Edema Gagal Jantung.',
    mechanism: 'Kadar kortisol bebas yang tinggi akibat blokade 11-beta-HSD2 oleh licorice berkompetisi secara langsung menduduki reseptor mineralokortikoid yang seharusnya diblokir oleh spironolakton.',
    clinicalRecommendation: 'Hindari penggunaan bersamaan pada pasien asites sirosis atau gagal jantung kongestif.',
    references: 'Hepatology & FHI Edisi II'
  },
  {
    id: 'hdi-licorice-corticosteroids',
    herbName: 'Akar Manis / Licorice',
    latinName: 'Glycyrrhiza glabra',
    herbActiveCompounds: 'Asam Glisirizat',
    drugName: 'Dexamethasone, Prednisone, Methylprednisolone',
    drugClass: 'Kortikosteroid Sistemik',
    interactionType: 'Farmakokinetik (CYP/P-gp)',
    severity: 'Moderat (Sedang)',
    clinicalEffect: 'Peningkatan Toksisitas Kortikosteroid (Sindrom Cushing Iatrogenik, Wajah Moon Face, Hiperglikemia Berat, Osteoporosis, dan Ulkus Peptikum Hemoragik).',
    mechanism: 'Asam glisirizat menghambat metabolisme dan inaktivasi enzimatik kortikosteroid di hepar, memperpanjang waktu paruh biologis dan akumulasi steroid dalam darah.',
    clinicalRecommendation: 'Pantau tanda-tanda hiperkortisolisme bila pasien mengonsumsi jamu licorice bersamaan dengan terapi steroid jangka panjang.',
    references: 'Journal of Endocrinology & FHI Edisi II'
  },

  // =========================================================================
  // 4. DAUN BINAHONG (Anredera cordifolia) - Antiplatelet & Penyembuh Luka
  // =========================================================================
  {
    id: 'hdi-binahong-warfarin',
    herbName: 'Daun Binahong (Anrederae Cordifoliae Folium)',
    latinName: 'Anredera cordifolia',
    herbActiveCompounds: 'Asam Oleanolat, Flavonoid, Saponin Triterpenoid',
    drugName: 'Warfarin / Antikoagulan Oral',
    drugClass: 'Antikoagulan Oral',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Perdarahan Spontan Masif (Hematoma Otot, Perdarahan Saluran Cerna / Melena, Hematuria, atau Perdarahan Pasca-Operasi).',
    mechanism: 'Flavonoid dan saponin daun binahong memiliki aktivitas antiagregasi platelet alami melalui penghambatan jalur adhesi trombosit, yang bersinergi aditif dengan penghambatan faktor koagulasi dependen vitamin K oleh warfarin.',
    clinicalRecommendation: 'HINDARI konsumsi rebusan daun binahong bersama Warfarin. Berikan edukasi tanda-tanda perdarahan kepada pasien pasca-operasi bedah.',
    references: 'Formularium Ramuan Obat Tradisional Indonesia (FROTI) & Asian Pacific Journal of Tropical Biomedicine'
  },
  {
    id: 'hdi-binahong-clopidogrel',
    herbName: 'Daun Binahong',
    latinName: 'Anredera cordifolia',
    herbActiveCompounds: 'Asam Oleanolat & Saponin',
    drugName: 'Clopidogrel, Ticagrelor, Aspirin',
    drugClass: 'Antiplatelet (Pencegah Trombosis Koroner)',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Pemanjangan Waktu Perdarahan (Bleeding Time), Hematoma Subkutan Luas, dan Epistaksis (Mimisan) Sulit Berhenti.',
    mechanism: 'Sinergisme penghambatan agregasi platelet ganda antara senyawa fitokimia binahong dan obat antiplatelet sintetis.',
    clinicalRecommendation: 'Pasien pasca-pemasangan ring jantung (PCI) yang mendapat terapi antiplatelet ganda (DAPT) dilarang mengonsumsi jamu binahong tanpa konsultasi dokter spesialis jantung.',
    references: 'FROTI Kemenkes RI & International Journal of Pharmacy and Pharmaceutical Sciences'
  },
  {
    id: 'hdi-binahong-nsaid',
    herbName: 'Daun Binahong',
    latinName: 'Anredera cordifolia',
    herbActiveCompounds: 'Saponin & Asam Oleanolat',
    drugName: 'Ibuprofen, Ketorolac, Natrium Diklofenak, Meloxicam',
    drugClass: 'NSAID (Antiinflamasi Non-Steroid)',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Moderat (Sedang)',
    clinicalEffect: 'Peningkatan Risiko Iritasi Lambung Berat, Gastritis Erosif, dan Perdarahan Saluran Cerna Tersembunyi (Occult Bleeding).',
    mechanism: 'Kombinasi saponin yang mengiritasi mukosa lambung bersama penghambatan sintesis prostaglandin protektif oleh NSAID meningkatkan kerentanan dinding lambung terhadap asam.',
    clinicalRecommendation: 'Gunakan bersama makanan dan hindari penggunaan bersamaan dosis tinggi pada pasien lanjut usia.',
    references: 'Journal of Applied Pharmaceutical Science'
  },

  // =========================================================================
  // 5. BUNGA ROSELA (Hibiscus sabdariffa) - Antihipertensi & Asam Tinggi
  // =========================================================================
  {
    id: 'hdi-rosela-captopril',
    herbName: 'Bunga Rosela (Hibisci Sabdariffae Calyx)',
    latinName: 'Hibiscus sabdariffa',
    herbActiveCompounds: 'Antosianin (Delfinidin-sambubiosida), Asam Hibiskat',
    drugName: 'Captopril, Lisinopril, Enalapril',
    drugClass: 'Antihipertensi (ACE Inhibitor)',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Moderat (Sedang)',
    clinicalEffect: 'Hipotensi Simtomatik Berat (Tekanan Darah < 90/60 mmHg, Pusing Berputar, Syok Ringan, Sinkop saat Berdiri).',
    mechanism: 'Antosianin rosela terbukti secara klinis memiliki aktivitas penghambatan ACE secara alami, yang memperkuat efek penurunan tekanan darah dari obat ACEI secara aditif.',
    clinicalRecommendation: 'Monitor tekanan darah secara berkala bila pasien rutin minum teh rosela bersamaan dengan obat antihipertensi medis. Titrasi dosis bila perlu.',
    references: 'Journal of Ethnopharmacology & FHI Edisi II'
  },
  {
    id: 'hdi-rosela-hctz',
    herbName: 'Bunga Rosela',
    latinName: 'Hibiscus sabdariffa',
    herbActiveCompounds: 'Asam Organik & Antosianin',
    drugName: 'Hydrochlorothiazide (HCTZ)',
    drugClass: 'Diuretik Tiazid',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Moderat (Sedang)',
    clinicalEffect: 'Deplesi Cairan, Dehidrasi, Hipokalemia, dan Hiponatremia.',
    mechanism: 'Efek diuretik saluretik alami rosela memperkuat efek ekskresi natrium dan air dari hidroklorotiazid di tubulus ginjal.',
    clinicalRecommendation: 'Pastikan asupan cairan cukup minimal 2 liter/hari dan periksa elektrolit berkala.',
    references: 'Phytomedicine & FHI Edisi II'
  },
  {
    id: 'hdi-rosela-paracetamol',
    herbName: 'Bunga Rosela',
    latinName: 'Hibiscus sabdariffa',
    herbActiveCompounds: 'Asam Sitrat, Asam Malat, Antosianin',
    drugName: 'Paracetamol (Acetaminophen)',
    drugClass: 'Analgesik-Antipiretik',
    interactionType: 'Farmakokinetik (CYP/P-gp)',
    severity: 'Minor (Ringan)',
    clinicalEffect: 'Penurunan Konsentrasi dan Ketersediaan Hayati Parasetamol dalam Darah (Efek Penurun Demam / Pereda Nyeri Berkurang).',
    mechanism: 'Tingkat keasaman cairan lambung yang tinggi serta percepatan pengosongan lambung dan pembersihan ginjal oleh asam rosela menurunkan bioavailabilitas oral parasetamol.',
    clinicalRecommendation: 'Beri jeda minimal 2 jam antara minum teh rosela dengan tablet parasetamol.',
    references: 'Fitoterapia & African Journal of Pharmacy'
  },
  {
    id: 'hdi-rosela-chloroquine',
    herbName: 'Bunga Rosela',
    latinName: 'Hibiscus sabdariffa',
    herbActiveCompounds: 'Antosianin & Polifenol',
    drugName: 'Chloroquine, Hydroxychloroquine',
    drugClass: 'Antimalaria & Imunomodulator SLE',
    interactionType: 'Farmakokinetik (CYP/P-gp)',
    severity: 'Moderat (Sedang)',
    clinicalEffect: 'Penurunan Signifikan Kadar Klorokuin Darah (>30%), Risiko Kegagalan Terapi Malaria atau Flare-Up Pasien Lupus.',
    mechanism: 'Polifenol rosela berikatan fisik dengan klorokuin di saluran cerna membentuk kompleks khelat yang tidak larut dan sukar diserap dinding usus.',
    clinicalRecommendation: 'HINDARI konsumsi teh rosela selama menjalani terapi antimalaria klorokuin atau hidroksiklorokuin.',
    references: 'Journal of Pharmacy and Pharmacology'
  },

  // =========================================================================
  // 6. DAUN UNGU (Graptophyllum pictum) - Antihemoroid OHT / Fitofarmaka
  // =========================================================================
  {
    id: 'hdi-daunungu-warfarin',
    herbName: 'Daun Ungu (Graptophylli Picti Folium)',
    latinName: 'Graptophyllum pictum',
    herbActiveCompounds: 'Flavonoid (Rutin), Tanin, Saponin',
    drugName: 'Warfarin, Aspirin, Clopidogrel',
    drugClass: 'Antikoagulan & Antiplatelet',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Moderat (Sedang)',
    clinicalEffect: 'Peningkatan Waktu Perdarahan dan Risiko Perdarahan Rektal / Wasir yang Semakin Sulit Berhenti.',
    mechanism: 'Rutin dan senyawa flavonoid daun ungu memiliki sifat venotonik dan antiagregasi platelet ringan yang bersinergi dengan obat pengencer darah medis.',
    clinicalRecommendation: 'Konsultasikan dengan dokter bila pasien wasir yang sedang mengonsumsi Venaron/ekstrak daun ungu juga mendapatkan terapi pengencer darah.',
    references: 'Fitofarmaka Indonesia BPOM & FHI Edisi II'
  },
  {
    id: 'hdi-daunungu-furosemide',
    herbName: 'Daun Ungu',
    latinName: 'Graptophyllum pictum',
    herbActiveCompounds: 'Flavonoid & Kalium Alami',
    drugName: 'Furosemide',
    drugClass: 'Diuretik Kuat',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Minor (Ringan)',
    clinicalEffect: 'Peningkatan Frekuensi Berkemih (Diuresis Berlebih) dan Dehidrasi Ringan.',
    mechanism: 'Efek diuretik osmotik alami dari kandungan kalium dan glikosida daun ungu bersinergi dengan kerja furosemide.',
    clinicalRecommendation: 'Minum air putih cukup minimal 2-2.5 liter sehari untuk mencegah dehidrasi pada pasien wasir.',
    references: 'FOHAI Kemenkes RI'
  },

  // =========================================================================
  // 7. DAUN KATUK (Sauropus androgynus) - Galaktagog ASI
  // =========================================================================
  {
    id: 'hdi-daunkatuk-tamoxifen',
    herbName: 'Daun Katuk (Sauropi Androgyni Folium)',
    latinName: 'Sauropus androgynus',
    herbActiveCompounds: 'Polifenol, Fitosterol, Klorofil, Alkaloid Papaverin',
    drugName: 'Tamoxifen',
    drugClass: 'Modulator Reseptor Estrogen Selektif (Kanker Payudara)',
    interactionType: 'Farmakodinamik (Antagonis)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Penurunan Efikasi Terapi Antikanker Tamoxifen, Risiko Proliferasi Sel Kanker Payudara Sensitif Hormon Estrogen.',
    mechanism: 'Fitosterol dan senyawa fitoestrogenik dalam daun katuk dapat berkompetisi dengan tamoxifen pada reseptor estrogen (ER-alfa) di jaringan kelenjar mamae.',
    clinicalRecommendation: 'KONTRAINDIKASI: Pasien dengan riwayat atau sedang dalam terapi kanker payudara reseptor hormon positif dilarang mengonsumsi suplemen ekstrak daun katuk dosis tinggi.',
    references: 'Phytomedicine & Breast Cancer Research Guidelines'
  },
  {
    id: 'hdi-daunkatuk-oral-contraceptive',
    herbName: 'Daun Katuk',
    latinName: 'Sauropus androgynus',
    herbActiveCompounds: 'Fitosterol & Alkaloid',
    drugName: 'Pil KB Kombinasi (Etinilestradiol + Levonorgestrel / Drospirenone)',
    drugClass: 'Kontrasepsi Hormonal Oral',
    interactionType: 'Farmakodinamik (Antagonis)',
    severity: 'Moderat (Sedang)',
    clinicalEffect: 'Penurunan Efektivitas Kontrasepsi, Risiko Kehamilan Tidak Direncanakan (*Unintended Pregnancy*), dan Perdarahan Bercak (*Spotting*).',
    mechanism: 'Aktivitas fitoestrogenik berkompetisi pada reseptor target hormonal serta stimulasi enzim metabolisme steroid hepar.',
    clinicalRecommendation: 'Gunakan metode kontrasepsi mekanik barrier tambahan (seperti kondom) bila ibu menyusui mengonsumsi suplemen pelancar ASI daun katuk bersamaan dengan kontrasepsi oral.',
    references: 'FOHAI Kemenkes RI'
  },

  // =========================================================================
  // 8. BAWANG DAYAK / TIWAI (Eleutherine bulbosa) - Antioksidan & Antidiabetes
  // =========================================================================
  {
    id: 'hdi-bawangdayak-glimepiride',
    herbName: 'Bawang Dayak / Tiwai (Eleutherines Bulbosae Bulbus)',
    latinName: 'Eleutherine bulbosa',
    herbActiveCompounds: 'Eleuterin, Naftokuinon, Isocorymboside',
    drugName: 'Glimepiride, Glibenclamide, Metformin',
    drugClass: 'Antidiabetes Oral',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Hipoglikemia Berat Berulang (Glukosa Darah Drop < 60 mg/dL, Pusing, Keringat Dingin, Syok Hipoglikemik).',
    mechanism: 'Senyawa naftokuinon eleuterin menghambat aktivitas enzim alfa-glukosidase di dinding usus sekaligus meningkatkan translokasi GLUT-4 perifer, bersinergi kuat dengan antidiabetes sintetik.',
    clinicalRecommendation: 'Wajib melakukan pemantauan glukosa darah mandiri secara berkala. Titrasi turun dosis obat medis di bawah pengawasan dokter bila pasien rutin mengonsumsi kapsul bawang dayak.',
    references: 'Journal of Herbmed Pharmacology & Riset Saintifikasi Jamu Kemenkes RI'
  },
  {
    id: 'hdi-bawangdayak-amlodipine',
    herbName: 'Bawang Dayak',
    latinName: 'Eleutherine bulbosa',
    herbActiveCompounds: 'Eleuterin & Flavonoid',
    drugName: 'Amlodipine, Nifedipine, Captopril',
    drugClass: 'Antihipertensi (CCB / ACEI)',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Moderat (Sedang)',
    clinicalEffect: 'Hipotensi Simtomatik Berlebih, Pusing saat Bangkit Berdiri (Hipotensi Ortostatik), dan Kelelahan Akut.',
    mechanism: 'Efek vasodilatasi otot polos vaskular alami dari senyawa naftokuinon bawang dayak memperkuat efek penurunan resistensi vaskular perifer dari obat antihipertensi medis.',
    clinicalRecommendation: 'Pantau tekanan darah rutin dan beri jeda waktu minum minimal 2 jam dari obat medis.',
    references: 'Riset Balitbangkes Kemenkes RI'
  },

  // =========================================================================
  // 9. SARANG SEMUT PAPUA (Myrmecodia pendans) - Imunomodulator & Polifenol
  // =========================================================================
  {
    id: 'hdi-sarangsemut-cyclosporine',
    herbName: 'Sarang Semut Papua (Myrmecodiae Tuber)',
    latinName: 'Myrmecodia pendans',
    herbActiveCompounds: 'Flavonoid Total, Polifenol, Tokoferol, Tanin',
    drugName: 'Cyclosporine, Tacrolimus, Mycophenolate Mofetil',
    drugClass: 'Imunosupresan Pasca-Transplantasi Organ',
    interactionType: 'Farmakodinamik (Antagonis)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Penolakan Transplantasi Organ Akut (*Graft Rejection*) yang Mengancam Nyawa.',
    mechanism: 'Senyawa aktif sarang semut menstimulasi proliferasi limfosit T, sintesis Interleukin-2 (IL-2), dan fagositosis makrofag secara kuat, secara langsung meniadakan kerja imunosupresan yang bertugas menekan respons imun tubuh.',
    clinicalRecommendation: 'KONTRAINDIKASI MUTLAK: Pasien pasca-transplantasi ginjal, hati, atau sumsum tulang DILARANG KERAS mengonsumsi rebusan atau kapsul sarang semut papua.',
    references: 'Transplantation Proceedings & FHI Edisi II Suplemen'
  },
  {
    id: 'hdi-sarangsemut-chemotherapy',
    herbName: 'Sarang Semut Papua',
    latinName: 'Myrmecodia pendans',
    herbActiveCompounds: 'Polifenol & Antioksidan Konsentrasi Sangat Tinggi',
    drugName: 'Doxorubicin, Cisplatin, Cyclophosphamide',
    drugClass: 'Kemoterapi Antikanker Sitotoksik',
    interactionType: 'Farmakodinamik (Antagonis)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Penurunan Efikasi Sitotoksik Kemoterapi dalam Membunuh Sel Kanker, Risiko Progresivitas Tumor.',
    mechanism: 'Banyak obat kemoterapi bekerja dengan membangkitkan Reactive Oxygen Species (ROS) untuk merusak DNA sel kanker. Antioksidan megadosis dari sarang semut menangkap radikal bebas tersebut sebelum sempat merusak sel kanker.',
    clinicalRecommendation: 'Hentikan konsumsi suplemen antioksidan sarang semut selama siklus kemoterapi aktif berlangsung (minimal 48 jam sebelum dan sesudah infus kemoterapi).',
    references: 'Journal of Clinical Oncology & Balai Riset Tanaman Obat Tawangmangu'
  },

  // =========================================================================
  // 10. KUNCUP BUNGA CENGKEH (Syzygium aromaticum) - Eugenol & Antiplatelet
  // =========================================================================
  {
    id: 'hdi-cengkeh-warfarin',
    herbName: 'Kuncup Bunga Cengkeh (Caryophylli Flos)',
    latinName: 'Syzygium aromaticum',
    herbActiveCompounds: 'Eugenol (70 - 85% dalam minyak atsiri), Kariofilen',
    drugName: 'Warfarin, Acenocoumarol',
    drugClass: 'Antikoagulan Oral (Antagonis Vitamin K)',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Perdarahan Spontan Masif (Peningkatan Nilai INR > 4.5, Perdarahan Gusi Berat, Hematuria, dan Hematoma Luas).',
    mechanism: 'Eugenol merupakan inhibitor poten sintesis tromboksan A2 (TXA2) dan agregasi platelet, sekaligus menghambat enzim sitokrom P450 yang memetabolisme warfarin di hepar.',
    clinicalRecommendation: 'Pasien yang sedang dalam terapi Warfarin dilarang mengonsumsi minyak cengkeh oral atau jamu seduhan cengkeh pekat dalam jumlah besar.',
    references: 'Thrombosis Research & WHO Monograph on Caryophylli Flos'
  },
  {
    id: 'hdi-cengkeh-aspirin',
    herbName: 'Kuncup Bunga Cengkeh',
    latinName: 'Syzygium aromaticum',
    herbActiveCompounds: 'Eugenol',
    drugName: 'Aspirin (Asam Asetilsalisilat), Clopidogrel',
    drugClass: 'Antiplatelet',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Penghambatan Agregasi Trombosit Ganda Ekstrem, Melena (BAB Hitam), dan Perdarahan Mukosa Rongga Mulut.',
    mechanism: 'Sinergisme penghambatan enzim siklooksigenase-1 (COX-1) dan biosintesis tromboksan platelet antara eugenol dan aspirin.',
    clinicalRecommendation: 'Hindari konsumsi minyak cengkeh dosis oral pada pasien kardiovaskular yang rutin mengonsumsi Aspilet atau Clopidogrel.',
    references: 'British Journal of Pharmacology & FHI Edisi II'
  },
  {
    id: 'hdi-cengkeh-paracetamol',
    herbName: 'Kuncup Bunga Cengkeh',
    latinName: 'Syzygium aromaticum',
    herbActiveCompounds: 'Eugenol Dosis Tinggi',
    drugName: 'Paracetamol',
    drugClass: 'Analgesik-Antipiretik Hepatotoksik Dosis Tinggi',
    interactionType: 'Farmakokinetik (CYP/P-gp)',
    severity: 'Moderat (Sedang)',
    clinicalEffect: 'Peningkatan Risiko Toksisitas Hepar (Peningkatan Enzim SGOT/SGPT, Nekrosis Hepatosit Akut).',
    mechanism: 'Eugenol dosis tinggi berkompetisi menghabiskan cadangan glutation (GSH) intraseluler hepar, sehingga metabolit reaktif parasetamol (NAPQI) tidak dapat dinetralkan dengan cepat.',
    clinicalRecommendation: 'Jangan mengonsumsi minyak cengkeh per oral bersamaan dengan dosis terapi parasetamol maksimal (4 gram/hari).',
    references: 'Toxicology and Applied Pharmacology'
  },

  // =========================================================================
  // 11. RIMPANG BANGLE (Zingiber purpureum) - Analgesik & Sedatif
  // =========================================================================
  {
    id: 'hdi-bangle-warfarin',
    herbName: 'Rimpang Bangle (Zingiberis Purpurei Rhizoma)',
    latinName: 'Zingiber purpureum / cassumunar',
    herbActiveCompounds: 'Zerumbon, Cassumunarin A & B',
    drugName: 'Warfarin, Clopidogrel',
    drugClass: 'Pengencer Darah (Antikoagulan & Antiplatelet)',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Moderat (Sedang)',
    clinicalEffect: 'Pemanjangan Waktu Pembekuan Darah, Memar Bawah Kulit, dan Risiko Perdarahan Gusi.',
    mechanism: 'Zerumbon menghambat agregasi platelet yang diinduksi oleh ADP dan asam arakidonat.',
    clinicalRecommendation: 'Hentikan penggunaan jamu pelangsing yang mengandung rimpang bangle minimal 10 hari sebelum tindakan operasi elektif.',
    references: 'Journal of Natural Products & FHI Edisi II'
  },
  {
    id: 'hdi-bangle-sedatives',
    herbName: 'Rimpang Bangle',
    latinName: 'Zingiber purpureum',
    herbActiveCompounds: 'Minyak Atsiri (Sabinen, Terpinen-4-ol)',
    drugName: 'Diazepam, Alprazolam, Zolpidem',
    drugClass: 'Sedatif-Hipnotik (Depresan SSP)',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Moderat (Sedang)',
    clinicalEffect: 'Sedasi Berlebihan, Rasa Mengantuk Berat, Ataksia, dan Penurunan Refleks Motorik.',
    mechanism: 'Minyak atsiri bangle memiliki efek depresan sistem saraf pusat ringan yang bersinergi dengan agonis reseptor GABA-A.',
    clinicalRecommendation: 'Pasien dilarang mengemudi atau mengoperasikan mesin bila meminum jamu seduhan bangle bersama obat penenang medis.',
    references: 'FHI Edisi II Hal. 55-62'
  },

  // =========================================================================
  // 12. TEMU MANGGA / KUNYIT PUTIH (Curcuma mangga) - Gastroprotektor
  // =========================================================================
  {
    id: 'hdi-temumangga-antacid',
    herbName: 'Temu Mangga / Kunyit Putih (Curcumae Manggae Rhizoma)',
    latinName: 'Curcuma mangga',
    herbActiveCompounds: 'Kurkuminoid, Mangiferin, Labdane Diterpene',
    drugName: 'Antasida (Aluminium Hidroksida & Magnesium Hidroksida)',
    drugClass: 'Antasida Penawar Asam Lambung',
    interactionType: 'Farmakokinetik (CYP/P-gp)',
    severity: 'Minor (Ringan)',
    clinicalEffect: 'Penurunan Absorpsi dan Bioavailabilitas Zat Aktif Temu Mangga.',
    mechanism: 'Ion polivalen aluminium dan magnesium dalam antasida membentuk khelasi tak larut dengan gugus fenolik kurkuminoid dan mangiferin.',
    clinicalRecommendation: 'Beri jeda minimal 2 jam antara konsumsi antasida dengan kapsul temu mangga.',
    references: 'FHI Edisi II Hal. 243-250'
  },
  {
    id: 'hdi-temumangga-warfarin',
    herbName: 'Temu Mangga',
    latinName: 'Curcuma mangga',
    herbActiveCompounds: 'Kurkuminoid & Terpenoid',
    drugName: 'Warfarin',
    drugClass: 'Antikoagulan',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Moderat (Sedang)',
    clinicalEffect: 'Peningkatan Risiko Perdarahan Ringan hingga Sedang.',
    mechanism: 'Aktivitas antiagregasi platelet alami kurkuminoid memperkuat efek antikoagulasi.',
    clinicalRecommendation: 'Pantau nilai INR secara berkala jika pasien mengonsumsi temu mangga dosis tinggi.',
    references: 'FHI Edisi II'
  },

  // =========================================================================
  // 13. HERBA CIPLUKAN (Physalis angulata) - Antidiabetes & Imunomodulator
  // =========================================================================
  {
    id: 'hdi-ciplukan-glibenclamide',
    herbName: 'Herba Ciplukan (Physalis Angulatae Herba)',
    latinName: 'Physalis angulata',
    herbActiveCompounds: 'Fisalin (Physalin B, D, F), Withanolida, Flavonoid',
    drugName: 'Glibenclamide, Glimepiride, Metformin',
    drugClass: 'Antidiabetes Oral',
    interactionType: 'Farmakodinamik (Sinergis)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Hipoglikemia Akut Berat, Lemas Ekstrem, Berkeringat Dingin, dan Disorientasi.',
    mechanism: 'Fisalin menstimulasi sekresi insulin sel beta pankreas dan memodulasi sensitivitas insulin perifer secara sinergis aditif bersama obat antidiabetes oral.',
    clinicalRecommendation: 'Pantau ketat glukosa darah mandiri bila pasien diabetes mengonsumsi rebusan herba ciplukan. Kurangi dosis bila gula darah turun drastis.',
    references: 'Journal of Ethnopharmacology & FROTI Kemenkes RI'
  },

  // =========================================================================
  // 14. CABAI JAWA (Piper retrofractum) - Tonikum & Vitalitas
  // =========================================================================
  {
    id: 'hdi-cabaijawa-theophylline',
    herbName: 'Buah Cabai Jawa (Piperis Retrofracti Fructus)',
    latinName: 'Piper retrofractum',
    herbActiveCompounds: 'Piperin (1.5 - 2.5%), Piperlongumin, Minyak Atsiri',
    drugName: 'Theophylline, Aminophylline',
    drugClass: 'Bronkodilator Xantin Indeks Terapi Sempit',
    interactionType: 'Farmakokinetik (CYP/P-gp)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Akumulasi Kadar Teofilin Toksik, Palpitasi Jantung, Tremor Otot, dan Insomnia Berat.',
    mechanism: 'Senyawa piperin dalam cabai jawa menghambat metabolisme hepatik teofilin via CYP1A2.',
    clinicalRecommendation: 'Hindari konsumsi jamu kuat/sehat pria yang mengandung cabai jawa bersamaan dengan obat asma teofilin.',
    references: 'FHI Edisi II Hal. 45-52 & FOHAI Kemenkes RI'
  },

  // =========================================================================
  // 15. AKAR ALANG-ALANG (Imperata cylindrica) - Diuretik Saluran Kemih
  // =========================================================================
  {
    id: 'hdi-alangalang-lithium',
    herbName: 'Akar Alang-Alang (Imperatae Cylindricae Rhizoma)',
    latinName: 'Imperata cylindrica',
    herbActiveCompounds: 'Silindrin, Imperanene, Arundoin, Graminon B',
    drugName: 'Lithium (Frimania)',
    drugClass: 'Mood Stabilizer Indeks Terapi Sempit (Bipolar)',
    interactionType: 'Farmakokinetik (CYP/P-gp)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Intoksikasi Litium Fatal (Tremor Kasar, Ataksia, Diare Berat, Konfusi Mental, Kejang, dan Koma).',
    mechanism: 'Efek diuretik saluretik alang-alang memicu ekskresi natrium di tubulus proksimal ginjal. Akibatnya, ginjal melakukan reabsorpsi kompensasi litium secara berlebihan, meningkatkan kadar litium serum hingga melampaui ambang batas toksik (> 1.5 mEq/L).',
    clinicalRecommendation: 'KONTRAINDIKASI: Pasien gangguan bipolar pengguna litium dilarang mengonsumsi jamu atau larutan penyegar berbahan akar alang-alang pekat.',
    references: 'American Journal of Psychiatry & FHI Edisi II Hal. 17-24'
  },

  // =========================================================================
  // 16. KULIT BUAH DELIMA (Punica granatum) - Penghambat CYP3A4 Usus
  // =========================================================================
  {
    id: 'hdi-delima-simvastatin',
    herbName: 'Kulit & Jus Buah Delima (Granati Pericarpium)',
    latinName: 'Punica granatum',
    herbActiveCompounds: 'Punikalagin (Punicalagin A & B), Asam Elagat, Tanin Elagitanin',
    drugName: 'Simvastatin, Atorvastatin, Lovastatin',
    drugClass: 'Statin Pemetabolisme CYP3A4',
    interactionType: 'Farmakokinetik (CYP/P-gp)',
    severity: 'Mayor (Tinggi)',
    clinicalEffect: 'Miopati Parah, Rabdomiolisis, Kelemahan Otot Ekstrem, dan Peningkatan Drastis Kadar Enzim Kreatin Kinase (CK).',
    mechanism: 'Senyawa punikalagin dalam delima menghambat enzim sitokrom P450 3A4 di mukosa usus halus (mekanisme mirip jus *grapefruit*), menghambat metabolisme lintas pertama statin sehingga ketersediaan hayati sistemik meningkat drastis.',
    clinicalRecommendation: 'Batasi konsumsi ekstrak kulit delima atau jus delima konsentrat pekat pada pasien pengguna Simvastatin atau Atorvastatin dosis tinggi. Segera lapor bila timbul nyeri otot.',
    references: 'American Journal of Cardiology (Pomegranate-Induced Rhabdomyolysis) & FHI Edisi II'
  }
];

export const EXPANDED_HERB_PROFILES: HerbProfile[] = [
  {
    id: 'herb-pare',
    name: 'Buah Pare (Momordica charantia)',
    latinName: 'Momordica charantia',
    commonIndonesianNames: ['Pare', 'Paria', 'Papari', 'Bitter Melon', 'Bitter Gourd'],
    activeCompounds: 'Charantin (min. 0.50%), Polipeptida-P (Insulin Nabati), Momordicin, Vicine',
    traditionalUses: [
      'Diabetes Melitus (Penurun kadar gula darah tradisi)',
      'Penurun kolesterol dan trigliserida',
      'Pembersih darah kotor & antioksidan',
      'Stimulan nafsu makan & pencernaan'
    ],
    cypEffects: 'Inhibitor lemah CYP3A4 dan CYP2C9',
    contraindicatedDrugs: [
      'Sulfonilurea (Glimepiride, Glibenclamide - hipoglikemia berat)',
      'Insulin suntik (Syok hipoglikemik mendadak)',
      'Metformin (Sinergi penurunan glukosa berlebih)'
    ],
    clinicalCautions: [
      'KONTRAINDIKASI pada kehamilan karena memicu kontraksi miometrium uterus (efek abortifasien).',
      'Dilarang pada pasien defisiensi enzim G6PD karena berisiko memicu anemia hemolitik akut (favisme).',
      'Wajib pemantauan kadar glukosa darah mandiri secara berkala.'
    ]
  },
  {
    id: 'herb-lada-hitam',
    name: 'Lada Hitam (Piper nigrum)',
    latinName: 'Piper nigrum',
    commonIndonesianNames: ['Lada Hitam', 'Merica Hitam', 'Pedas Hitam', 'Black Pepper'],
    activeCompounds: 'Piperin (Piperine min. 2.50%), Minyak Atsiri (Pinen, Limonen), Kavisin',
    traditionalUses: [
      'Bioenhancer alami (peningkat penyerapan obat & kurkumin)',
      'Karminatif perut kembung & dispepsia',
      'Ekspektoran batuk berdahak encer',
      'Penghangat badan & stimulan sirkulasi'
    ],
    cypEffects: 'Inhibitor poten CYP3A4, CYP1A2, CYP2C9, dan transporter efflux P-glikoprotein',
    contraindicatedDrugs: [
      'Fenitoin (Peningkatan kadar fenitoin toksik)',
      'Teofilin (Akumulasi teofilin memicu aritmia)',
      'Atorvastatin & Simvastatin (Risiko miopati rabdomiolisis)'
    ],
    clinicalCautions: [
      'Hati-hati konsumsi bersamaan dengan obat indeks terapi sempit.',
      'Dapat mengiritasi mukosa lambung pada pasien gastritis erosif atau ulkus peptikum aktif.'
    ]
  },
  {
    id: 'herb-licorice',
    name: 'Akar Manis / Licorice (Glycyrrhiza glabra)',
    latinName: 'Glycyrrhiza glabra',
    commonIndonesianNames: ['Akar Manis', 'Licorice', 'Kayu Legi', 'Gancao'],
    activeCompounds: 'Asam Glisirizat (min. 4.00%), Glisiretinat, Likwiritin, Isolikuiritigenin',
    traditionalUses: [
      'Tukak lambung (Maag / Gastritis / Peptic Ulcer)',
      'Batuk berdahak & radang tenggorokan (Ekspektoran OBH)',
      'Antiinflamasi mukosa mulut & sariawan',
      'Hepatoprotektor'
    ],
    cypEffects: 'Inhibitor 11-beta-HSD2 di ginjal, substrat dan inhibitor CYP3A4 & CYP2C9',
    contraindicatedDrugs: [
      'Diuretik kuat Furosemide (Hipokalemia ekstrem fatal)',
      'Digoxin (Aritmia ventrikel mematikan)',
      'Antihipertensi ACEI / ARB (Antagonisme penurunan tekanan darah)',
      'Kortikosteroid sistemik (Sindrom Cushing iatrogenik)'
    ],
    clinicalCautions: [
      'KONTRAINDIKASI MUTLAK pada hipertensi tak terkontrol, gagal jantung, dan gagal ginjal.',
      'Dilarang dikonsumsi terus-menerus melebihi 4-6 minggu tanpa jeda.',
      'Waspadai timbulnya edema kaki, kram otot lemas, dan lonjakan tekanan darah mendadak.'
    ]
  },
  {
    id: 'herb-binahong',
    name: 'Daun Binahong (Anredera cordifolia)',
    latinName: 'Anredera cordifolia',
    commonIndonesianNames: ['Binahong', 'Madeira Vine', 'Dendang Gendang'],
    activeCompounds: 'Asam Oleanolat, Flavonoid Total (min. 1.10%), Saponin Triterpenoid, Asam Askorbat',
    traditionalUses: [
      'Penyembuhan luka pasca-operasi & persalinan',
      'Pemulihan stamina pasca-sakit berat',
      'Antiinflamasi sendi & rematik',
      'Gastroprotektor tukak lambung'
    ],
    cypEffects: 'Inhibitor lemah CYP2C9 dan agregasi trombosit',
    contraindicatedDrugs: [
      'Warfarin & Antikoagulan oral (Risiko perdarahan spontan)',
      'Clopidogrel & Aspirin (Antiplatelet ganda)',
      'NSAID dosis tinggi (Iritasi saluran cerna)'
    ],
    clinicalCautions: [
      'Hindari penggunaan bersama pengencer darah pada pasien pasca-bedah bila hemostasis belum stabil.',
      'Hentikan minimal 1 minggu sebelum operasi bedah terencana.'
    ]
  },
  {
    id: 'herb-rosela',
    name: 'Bunga Rosela (Hibiscus sabdariffa)',
    latinName: 'Hibiscus sabdariffa',
    commonIndonesianNames: ['Rosela', 'Roselle', 'Asam Payap', 'Teh Merah Rosella'],
    activeCompounds: 'Antosianin Total (min. 1.35%), Asam Hibiskat, Asam Sitrat, Asam Askorbat',
    traditionalUses: [
      'Hipertensi derajat 1 (Antihipertensi ACE-inhibitor alami)',
      'Diuretik & pelancar buang air kecil',
      'Antioksidan penurun kolesterol LDL',
      'Penyegar tubuh & peningkat daya tahan tubuh'
    ],
    cypEffects: 'Modulator aktivitas enzim CYP2C9 dan transporter ginjal',
    contraindicatedDrugs: [
      'Antihipertensi Captopril / ACEI (Hipotensi berlebih / sinkop)',
      'Diuretik HCTZ (Deplesi cairan dan elektrolit)',
      'Klorokuin & Hidroksiklorokuin (Penurunan absorpsi antimalaria)',
      'Parasetamol (Penurunan bioavailabilitas analgesik)'
    ],
    clinicalCautions: [
      'Sediaan memiliki keasaman tinggi (pH 2.5 - 3.0); hindari diminum saat perut kosong pada penderita maag akut.',
      'Beri jeda minimal 2 jam dari minum obat medis oral.'
    ]
  },
  {
    id: 'herb-daun-ungu',
    name: 'Daun Ungu (Graptophyllum pictum)',
    latinName: 'Graptophyllum pictum',
    commonIndonesianNames: ['Daun Ungu', 'Handeuleum', 'Daun Temen-Temen', 'Caricature Plant'],
    activeCompounds: 'Flavonoid Rutin (min. 0.90%), Tanin, Saponin, Glikosida Venotonik',
    traditionalUses: [
      'Wasir / Ambeien / Hemoroid (Fitofarmaka / OHT Venaron)',
      'Antiinflamasi anorektal & pelunak feses',
      'Pelancar buang air seni (Diuretik)',
      'Pelancar haid tidak teratur'
    ],
    cypEffects: 'Inhibitor lemah agregasi platelet',
    contraindicatedDrugs: [
      'Warfarin & Antiplatelet (Peningkatan risiko perdarahan rektal)',
      'Diuretik Furosemide (Diuresis aditif)'
    ],
    clinicalCautions: [
      'Perdarahan rektal masif harus diperiksakan ke dokter untuk menyingkirkan kanker usus besar.',
      'Banyak konsumsi air putih dan serat selama pengobatan hemoroid.'
    ]
  },
  {
    id: 'herb-daun-katuk',
    name: 'Daun Katuk (Sauropus androgynus)',
    latinName: 'Sauropus androgynus',
    commonIndonesianNames: ['Katuk', 'Mani Cai', 'Sweet Leaf Bush', 'Katu'],
    activeCompounds: 'Senyawa Polifenol (min. 1.20%), Klorofil, Fitosterol Fitoestrogenik, Papaverin',
    traditionalUses: [
      'Pelancar Air Susu Ibu (ASI / Galaktagog OHT Asifit)',
      'Tonikum pasca-persalinan',
      'Penurun demam pada anak',
      'Antioksidan & sumber vitamin A'
    ],
    cypEffects: 'Kompetitor reseptor estrogen dan inhibitor lemah CYP1A2',
    contraindicatedDrugs: [
      'Tamoxifen (Antagonisme terapi kanker payudara sensitif hormon)',
      'Pil KB Hormonal (Penurunan efektivitas kontrasepsi)'
    ],
    clinicalCautions: [
      'DILARANG mengonsumsi daun katuk mentah dalam jumlah banyak terus-menerus (risiko bronkiolitis obliterans akibat papaverin).',
      'Konsumsi selalu dalam bentuk matang atau ekstrak terstandar BPOM.'
    ]
  },
  {
    id: 'herb-bawang-dayak',
    name: 'Bawang Dayak / Tiwai (Eleutherine bulbosa)',
    latinName: 'Eleutherine bulbosa',
    commonIndonesianNames: ['Bawang Dayak', 'Bawang Tiwai', 'Bawang Berlian', 'Bawang Sabrang'],
    activeCompounds: 'Eleuterin, Naftokuinon Total (min. 0.75%), Isocorymboside, Antosianin',
    traditionalUses: [
      'Diabetes Melitus (Penghambat enzim alfa-glukosidase)',
      'Hipertensi & pencegah penyakit jantung koroner',
      'Kanker / Tumor (Sitoprotektif & apoptosis sel abnormal)',
      'Antiinflamasi & antioksidan khas Kalimantan'
    ],
    cypEffects: 'Inhibitor moderat enzim pemetabolisme glukosa hepar',
    contraindicatedDrugs: [
      'Sulfonilurea & Metformin (Risiko hipoglikemia berat)',
      'Amlodipine & Antihipertensi (Hipotensi berlebih)'
    ],
    clinicalCautions: [
      'Hati-hati pada pasien dengan riwayat tekanan darah rendah (hipotensi).',
      'Pantau gula darah mandiri bila diminum bersama obat diabetes.'
    ]
  },
  {
    id: 'herb-sarang-semut',
    name: 'Sarang Semut Papua (Myrmecodia pendans)',
    latinName: 'Myrmecodia pendans',
    commonIndonesianNames: ['Sarang Semut Papua', 'Rumah Semut', 'Myrmecodia', 'Antherb'],
    activeCompounds: 'Flavonoid Total (min. 1.50%), Polifenol Megadosis, Tokoferol, Tanin',
    traditionalUses: [
      'Imunostimulan & pemulih daya tahan tubuh',
      'Terapi suportif komplementer kanker & tumor',
      'Antiinflamasi kronis & rematik sendi',
      'Antioksidan penangkal radikal bebas'
    ],
    cypEffects: 'Stimulator kuat sistem imun seluler IL-2 dan makrofag',
    contraindicatedDrugs: [
      'Imunosupresan Cyclosporine / Tacrolimus (Rejeksi transplantasi organ fatal)',
      'Kemoterapi sitotoksik Doxorubicin / Cisplatin (Penurunan efikasi antikanker)'
    ],
    clinicalCautions: [
      'KONTRAINDIKASI MUTLAK pada pasien pasca-transplantasi organ penerima imunosupresan.',
      'Hentikan selama siklus aktif kemoterapi berlangsung.'
    ]
  },
  {
    id: 'herb-cengkeh',
    name: 'Kuncup Bunga Cengkeh (Syzygium aromaticum)',
    latinName: 'Syzygium aromaticum',
    commonIndonesianNames: ['Cengkeh', 'Cengkih', 'Clove', 'Bunga Cengkeh'],
    activeCompounds: 'Minyak Atsiri (min. 15.0% v/b), Eugenol (min. 70.0% dalam minyak), Kariofilen',
    traditionalUses: [
      'Sakit gigi & infeksi gusi (Analgesik dental topikal)',
      'Antiseptik rongga mulut & bau nafas',
      'Karminatif perut kembung & mual',
      'Minyak gosok analgesik hangat pegal linu'
    ],
    cypEffects: 'Inhibitor sintesis tromboksan A2 dan inhibitor moderat CYP2E1',
    contraindicatedDrugs: [
      'Warfarin & Antikoagulan oral (Perdarahan spontan masif)',
      'Aspirin & Clopidogrel (Antiplatelet ganda)',
      'Parasetamol dosis maksimal (Risiko deplesi glutation hepar)'
    ],
    clinicalCautions: [
      'Minyak cengkeh murni tidak boleh ditelan dalam jumlah banyak karena toksik terhadap hepar dan ginjal.',
      'Pada sakit gigi, aplikasikan hanya pada lubang gigi yang sakit menggunakan kapas kecil.'
    ]
  },
  {
    id: 'herb-bangle',
    name: 'Rimpang Bangle (Zingiber purpureum)',
    latinName: 'Zingiber purpureum / cassumunar',
    commonIndonesianNames: ['Bangle', 'Panglai', 'Bangle Hantu', 'Cassumunar Ginger'],
    activeCompounds: 'Zerumbon (min. 0.45%), Cassumunarin A & B, Minyak Atsiri Sabinen',
    traditionalUses: [
      'Jamu pelangsing & penurun timbunan lemak perut',
      'Analgesik rematik & nyeri sendi pasca-salin',
      'Antipiretik penurun demam',
      'Karminatif & obat cacing tradisional'
    ],
    cypEffects: 'Inhibitor lemah agregasi platelet dan depresan SSP ringan',
    contraindicatedDrugs: [
      'Warfarin & Antiplatelet (Risiko perdarahan)',
      'Obat penenang Diazepam / Alprazolam (Sedasi aditif berlebih)'
    ],
    clinicalCautions: [
      'Hindari penggunaan pada ibu hamil karena dapat merangsang tonus otot uterus.',
      'Hentikan sebelum operasi elektif.'
    ]
  },
  {
    id: 'herb-temu-mangga',
    name: 'Kunyit Putih / Temu Mangga (Curcuma mangga)',
    latinName: 'Curcuma mangga',
    commonIndonesianNames: ['Temu Mangga', 'Kunyit Putih', 'Koneng Pare', 'Mango Ginger'],
    activeCompounds: 'Kurkuminoid Total (min. 1.20%), Mangiferin, Diterpen Labdan, Minyak Atsiri',
    traditionalUses: [
      'Gastroprotektor tukak lambung & dispepsia',
      'Antioksidan penangkal radikal bebas',
      'Antiinflamasi saluran pencernaan',
      'Penyegar nafas & penambah selera makan'
    ],
    cypEffects: 'Inhibitor lemah CYP2C9',
    contraindicatedDrugs: [
      'Antasida aluminium-magnesium (Khelasi penurun absorpsi)',
      'Warfarin (Risiko perdarahan ringan)'
    ],
    clinicalCautions: [
      'Aman untuk pemakaian rutin lambung, namun hindari bila saluran empedu tersumbat total.'
    ]
  },
  {
    id: 'herb-ciplukan',
    name: 'Herba Ciplukan (Physalis angulata)',
    latinName: 'Physalis angulata',
    commonIndonesianNames: ['Ciplukan', 'Ceplukan', 'Cecenet', 'Kopok-Kopokan', 'Cape Gooseberry'],
    activeCompounds: 'Fisalin Total (min. 0.35% w/w), Withanolida, Asam Sitrat, Flavonoid',
    traditionalUses: [
      'Diabetes Melitus (Penurun glukosa darah)',
      'Antihipertensi & diuretik',
      'Antiinflamasi & penurun demam',
      'Pembersih bisul & infeksi kulit'
    ],
    cypEffects: 'Modulator enzim metabolisme karbohidrat perifer',
    contraindicatedDrugs: [
      'Sulfonilurea (Glibenclamide, Glimepiride - hipoglikemia berat)',
      'Antihipertensi medis (Sinergi hipotensi)'
    ],
    clinicalCautions: [
      'Hindari pada wanita hamil (efek relaksasi dan kontraksi uterus).',
      'Pantau kadar gula darah mandiri.'
    ]
  },
  {
    id: 'herb-cabai-jawa',
    name: 'Buah Cabai Jawa (Piper retrofractum)',
    latinName: 'Piper retrofractum',
    commonIndonesianNames: ['Cabai Jawa', 'Cabe Puyang', 'Lada Panjang', 'Javanese Long Pepper'],
    activeCompounds: 'Piperin (min. 1.50%), Piperlongumin, Minyak Atsiri, Sesamin',
    traditionalUses: [
      'Tonikum stamina & afrodisiak pria (OHT Neo Hormoviton)',
      'Stimulan sirkulasi darah & penghangat badan',
      'Obat meriang flu & masuk angin',
      'Pereda nyeri rematik & pegal linu'
    ],
    cypEffects: 'Inhibitor CYP1A2 dan CYP3A4 di dinding usus',
    contraindicatedDrugs: [
      'Teofilin (Peningkatan kadar toksisitas teofilin)',
      'Propranolol & Statin (Peningkatan ketersediaan hayati berlebih)'
    ],
    clinicalCautions: [
      'Hindari pada penderita kanker prostat aktif.',
      'Konsumsi sesudah makan untuk menghindari nyeri ulu hati.'
    ]
  },
  {
    id: 'herb-alang-alang',
    name: 'Akar Alang-Alang (Imperata cylindrica)',
    latinName: 'Imperata cylindrica',
    commonIndonesianNames: ['Alang-Alang', 'Ilalang', 'Eurih', 'Cogon Grass', 'Lalang'],
    activeCompounds: 'Silindrin (min. 0.25%), Imperanene, Arundoin, Kalium Alami',
    traditionalUses: [
      'Panas dalam & radang tenggorokan (Larutan penyegar)',
      'Pelancar air seni & infeksi saluran kemih (Diuretik)',
      'Penurun demam & penyejuk tubuh',
      'Pereda mimisan & hemostatik kapiler'
    ],
    cypEffects: 'Diuretik saluretik tubulus ginjal',
    contraindicatedDrugs: [
      'Lithium (Intoksikasi litium fatal akibat retensi)',
      'Diuretik medis (Deplesi cairan berlebih)'
    ],
    clinicalCautions: [
      'KONTRAINDIKASI pada pasien gagal ginjal anuria.',
      'Perbanyak minum air putih selama konsumsi rebusan alang-alang.'
    ]
  },
  {
    id: 'herb-buah-delima',
    name: 'Kulit & Jus Buah Delima (Punica granatum)',
    latinName: 'Punica granatum',
    commonIndonesianNames: ['Delima', 'Delima Merah', 'Pomegranate', 'Granada'],
    activeCompounds: 'Punikalagin (Punicalagin A & B), Asam Elagat (min. 2.00%), Polifenol Total (min. 25.0%)',
    traditionalUses: [
      'Proteksi kardiovaskular & pencegah aterosklerosis',
      'Antidiare & astringen saluran cerna',
      'Antioksidan kuat anti-aging',
      'Antiradang rongga mulut'
    ],
    cypEffects: 'Inhibitor poten CYP3A4 usus halus (mekanisme mirip jus grapefruit)',
    contraindicatedDrugs: [
      'Simvastatin & Atorvastatin (Miopati rabdomiolisis berat)',
      'Warfarin (Peningkatan risiko perdarahan)',
      'Amlodipine (Peningkatan kadar plasma berlebih)'
    ],
    clinicalCautions: [
      'HINDARI konsumsi jus delima pekat bersamaan dengan statin dosis tinggi.',
      'Dapat memicu sembelit (konstipasi) bila dikonsumsi berlebihan akibat kadar tanin tinggi.'
    ]
  }
];
