// ============================================================================
// BASIS DATA LENGKAP 18 BAB DRUG NOTES: JEMBATAN KELEDAI & HAFALAN OBAT
// Target: Mahasiswa D3/S1 Farmasi, Calon Apoteker (UKMPPAI & OSCE), Nakes
// Total: 18 Bab Komprehensif • 57 Catatan Mnemonic & Komparasi Klinis Emas
// ============================================================================

export interface SyllableItem {
  syllable: string;
  drugName: string;
  isDoen?: boolean;
  badgeType?: string;
  typicalSideEffect: string;
}

export interface ComparisonRow {
  drugFormula: string;
  mechanism: string;
  detailedSideEffects: string;
  fdaCategory?: string;
}

export interface DrugNoteItem {
  id: string;
  chapterId: string;
  chapterNumber: string; // e.g. "BAB 1"
  chapterTitle: string; // e.g. "Keamanan Obat Hamil & Laktasi"
  subChapterNumber: string; // e.g. "1.1"
  subChapterTitle: string; // e.g. "Kategori Keamanan Obat Ibu Hamil (A, B, C, D, X)"
  breadcrumb: string;
  categoryTag: string;
  heroMnemonic: string; // e.g. "A-B-C-D-X Teratogen"
  rhymeTagline: string;
  syllableBreakdown: SyllableItem[];
  clinicalKeyPearls: string;
  clinicalWarnings: string;
  comparisonTable: ComparisonRow[];
  relatedTabKey?: string;
  relatedDrugName?: string;
}

export interface DrugNotesChapter {
  id: string;
  number: string;
  title: string;
  subChapters: {
    id: string;
    number: string;
    title: string;
    items: DrugNoteItem[];
  }[];
}

export const DRUG_NOTES_DATABASE: DrugNotesChapter[] = [
  // =========================================================================
  // BAB 1: KEAMANAN OBAT HAMIL & LAKTASI (4 TOPIK)
  // =========================================================================
  {
    id: 'bab-1',
    number: 'BAB 1',
    title: 'Keamanan Obat Hamil & Laktasi',
    subChapters: [
      {
        id: 'sub-1-1',
        number: '1.1',
        title: 'Kategori Risiko Kehamilan FDA (A-B-C-D-X)',
        items: [
          {
            id: 'note-1-1',
            chapterId: 'bab-1',
            chapterNumber: 'BAB 1',
            chapterTitle: 'Keamanan Obat Hamil & Laktasi',
            subChapterNumber: '1.1',
            subChapterTitle: 'Kategori Risiko Teratogenik FDA',
            breadcrumb: 'KEAMANAN HAMIL > KATEGORI FDA A-X',
            categoryTag: 'FARMAKOLOGI KEHAMILAN',
            heroMnemonic: 'A - B - C - D - X Teratogen',
            rhymeTagline: 'A-B aman terkendali, C waspada risiko hewan, D bahaya positif darurat, X KONTRAINDIKASI MUTLAK!',
            syllableBreakdown: [
              { syllable: 'Kat A', drugName: 'Asam Folat, Vitamin B6, Levotiroksin', isDoen: true, badgeType: 'Aman Manusia', typicalSideEffect: 'Terbukti aman pada studi kontrol wanita hamil tanpa risiko cacat janin' },
              { syllable: 'Kat B', drugName: 'Parasetamol, Amoksisilin, Eritromisin, Metformin', isDoen: true, badgeType: 'Aman Relatif', typicalSideEffect: 'Aman pada hewan studi; pilihan lini pertama keluhan umum kehamilan' },
              { syllable: 'Kat C', drugName: 'Aspirin dosis penuh, Ciprofloxacin, Kaptopril TM 1', isDoen: true, badgeType: 'Risiko Hewan', typicalSideEffect: 'Hanya diberikan jika manfaat klinis ibu melebihi potensi risiko janin' },
              { syllable: 'Kat D', drugName: 'Fenitoin, Tetrasiklin, Karbamazepin, PTU TM 1', isDoen: true, badgeType: 'Bahaya Positif', typicalSideEffect: 'Ada bukti positif risiko janin manusia; hanya dipakai pada kondisi gawat darurat ibu' },
              { syllable: 'Kat X', drugName: 'Warfarin, Isotretinoin, Metotreksat, Statin', isDoen: true, badgeType: 'KONTRA MUTLAK', typicalSideEffect: 'Pasti memicu malformasi kongenital berat; KONTRAINDIKASI MUTLAK PADA KEHAMILAN' }
            ],
            clinicalKeyPearls: 'Trimester 1 adalah masa organogenesis paling rentan. Jika ibu hamil membutuhkan terapi antikoagulan, Warfarin (Kat X) wajib diganti Heparin / LMWH (Kat B) karena molekul Heparin sangat besar dan tidak menembus sawar plasenta.',
            clinicalWarnings: 'Pasien usia subur pengguna Isotretinoin (jerawat kistik) atau Metotreksat wajib menyertakan bukti kontrasepsi ganda dan tes kehamilan negatif sebelum memulai terapi.',
            comparisonTable: [
              { drugFormula: 'Asam Folat (Kat A)', mechanism: 'Koenzim sintesis purin/pirimidin & pembelahan sel', detailedSideEffects: 'Sangat aman; mencegah Spina Bifida (Neural Tube Defect)', fdaCategory: 'A' },
              { drugFormula: 'Parasetamol (Kat B)', mechanism: 'Penghambat sintesis prostaglandin di SSP sentral', detailedSideEffects: 'Pilihan utama analgesik & antipiretik ibu hamil', fdaCategory: 'B' },
              { drugFormula: 'Warfarin (Kat X)', mechanism: 'Antagonis Vitamin K faktor pembekuan II, VII, IX, X', detailedSideEffects: 'Sindrom warfarin janin (hipoplasia tulang hidung & epifisis)', fdaCategory: 'X' }
            ],
            relatedTabKey: 'pregnancy',
            relatedDrugName: 'Warfarin'
          }
        ]
      },
      {
        id: 'sub-1-2',
        number: '1.2',
        title: 'Antihipertensi Aman pada Kehamilan (Met-La-Ni)',
        items: [
          {
            id: 'note-1-2',
            chapterId: 'bab-1',
            chapterNumber: 'BAB 1',
            chapterTitle: 'Keamanan Obat Hamil & Laktasi',
            subChapterNumber: '1.2',
            subChapterTitle: 'Antihipertensi Ibu Hamil (Met-La-Ni)',
            breadcrumb: 'KEAMANAN HAMIL > ANTIHIPERTENSI MET-LA-NI',
            categoryTag: 'FARMAKOLOGI KEHAMILAN',
            heroMnemonic: 'Met - La - Ni Bumil',
            rhymeTagline: 'Metildopa nomor satu, Labetalol darurat krisis, Nifedipin pelemas tensi, ACEi/ARB bikin janin gagal ginjal!',
            syllableBreakdown: [
              { syllable: 'Met', drugName: 'Metildopa 250 mg', isDoen: true, badgeType: 'Lini Pertama', typicalSideEffect: 'Sedasi, kantuk, tes Coombs direk positif, mulut kering' },
              { syllable: 'La', drugName: 'Labetalol HCl', isDoen: true, badgeType: 'Alfa + Beta Blocker', typicalSideEffect: 'Hipotensi ortostatik, bradikardia ringan, kelelahan' },
              { syllable: 'Ni', drugName: 'Nifedipin Retard / OROS', isDoen: true, badgeType: 'CCB DHP Tokolitik', typicalSideEffect: 'Flushing wajah hangat, sakit kepala, edema pergelangan kaki' }
            ],
            clinicalKeyPearls: 'Metildopa memiliki rekam jejak keselamatan terlama selama puluhan tahun pada kehamilan. Nifedipin sediaan lepas lambat selain menurunkan tensi juga berfungsi sebagai tokolitik pencegah persalinan preterm.',
            clinicalWarnings: 'GOLONGAN ACE-INHIBITOR & ARB KONTRAINDIKASI MUTLAK PADA TRIMESTER 2 & 3 karena menyebabkan hipoplasia tengkorak, oligohidramnion berat, dan gagal ginjal anuria janin permanen.',
            comparisonTable: [
              { drugFormula: 'Metildopa 250mg', mechanism: 'Agonis alfa-2 adrenergik sentral di batang otak', detailedSideEffects: 'Sedasi awal, tes Coombs positif, depresi jarang', fdaCategory: 'B' },
              { drugFormula: 'Nifedipin 10-20mg Retard', mechanism: 'Inhibitor kanal kalsium tipe L otot polos vaskular', detailedSideEffects: 'Flushing wajah, takikardia refleks, pusing', fdaCategory: 'C' },
              { drugFormula: 'Kaptopril (ACEi Teratogen)', mechanism: 'Inhibitor pembentukan Angiotensin II', detailedSideEffects: 'Gagal ginjal janin, oligohidramnion, kematian janin', fdaCategory: 'D' }
            ],
            relatedTabKey: 'pregnancy',
            relatedDrugName: 'Metildopa'
          }
        ]
      },
      {
        id: 'sub-1-3',
        number: '1.3',
        title: 'Antiemetik Emesis Gravidarum (Pir-Dok-Ond)',
        items: [
          {
            id: 'note-1-3',
            chapterId: 'bab-1',
            chapterNumber: 'BAB 1',
            chapterTitle: 'Keamanan Obat Hamil & Laktasi',
            subChapterNumber: '1.3',
            subChapterTitle: 'Mual Muntah Hamil (Pir-Dok-Ond)',
            breadcrumb: 'KEAMANAN HAMIL > ANTIEMETIK EMESIS GRAVIDARUM',
            categoryTag: 'FARMAKOLOGI KEHAMILAN',
            heroMnemonic: 'Pir - Dok - Ond Mual',
            rhymeTagline: 'Piridoksin B6 lapis pertama, Doksilamin malam hari redakan mual, Ondansetron cadangan hiperemesis berat!',
            syllableBreakdown: [
              { syllable: 'Pir', drugName: 'Piridoksin (Vitamin B6) 10-25mg', isDoen: true, badgeType: 'Lini 1 Non-Sedatif', typicalSideEffect: 'Sangat aman; koenzim metabolisme neurotransmiter asam amino' },
              { syllable: 'Dok', drugName: 'Doksilamin Suksinat', isDoen: false, badgeType: 'Antihistamin H1', typicalSideEffect: 'Efek sedatif menenangkan; diminum malam sebelum tidur' },
              { syllable: 'Ond', drugName: 'Ondansetron 4-8mg', isDoen: true, badgeType: 'Antagonis 5-HT3', typicalSideEffect: 'Konstipasi feses mengeras, sakit kepala, perpanjangan interval QT' }
            ],
            clinicalKeyPearls: 'Pedoman ACOG menetapkan kombinasi Vitamin B6 (Piridoksin) + Doksilamin sebagai terapi lini pertama mual muntah kehamilan (morning sickness). Ondansetron dicadangkan bila terjadi Hiperemesis Gravidarum berat setelah Trimester 1.',
            clinicalWarnings: 'Hindari penggunaan Ondansetron pada awal Trimester 1 (sebelum usia gestasi 10 minggu) jika masih ada pilihan lain karena studi meta-analisis mengindikasikan sedikit peningkatan risiko celah bibir/langit-langit (cleft palate).',
            comparisonTable: [
              { drugFormula: 'Piridoksin (Vit B6)', mechanism: 'Modulasi jalur neurotransmisi asam amino mual', detailedSideEffects: 'Bebas sedasi, sangat aman bagi organogenesis', fdaCategory: 'A' },
              { drugFormula: 'Doksilamin Suksinat', mechanism: 'Blokade reseptor histamin H1 di pusat muntah sentral', detailedSideEffects: 'Kantuk (menguntungkan tidur malam)', fdaCategory: 'A' },
              { drugFormula: 'Ondansetron 4mg', mechanism: 'Blokade selektif reseptor serotonin 5-HT3 vagal & CTZ', detailedSideEffects: 'Konstipasi, sakit kepala ringan', fdaCategory: 'B' }
            ],
            relatedTabKey: 'pregnancy',
            relatedDrugName: 'Piridoksin'
          }
        ]
      },
      {
        id: 'sub-1-4',
        number: '1.4',
        title: 'Skala Laktasi Thomas Hale & Batas RID %',
        items: [
          {
            id: 'note-1-4',
            chapterId: 'bab-1',
            chapterNumber: 'BAB 1',
            chapterTitle: 'Keamanan Obat Hamil & Laktasi',
            subChapterNumber: '1.4',
            subChapterTitle: 'Kategori Keamanan Laktasi & RID',
            breadcrumb: 'KEAMANAN HAMIL > SKALA LAKTASI HALE L1-L5',
            categoryTag: 'FARMAKOLOGI LAKTASI',
            heroMnemonic: 'L1 - L5 & RID 10%',
            rhymeTagline: 'L1 teraman, L2 aman terbukti, L3 cukup aman, L4 bahaya, L5 KONTRAINDIKASI! RID di bawah 10% aman disusui.',
            syllableBreakdown: [
              { syllable: 'L1 (Safest)', drugName: 'Parasetamol, Ibuprofen, Amoksisilin', isDoen: true, badgeType: 'Teraman', typicalSideEffect: 'Kadar di ASI mikroskopis; teruji pada ribuan bayi tanpa efek samping' },
              { syllable: 'L2 (Safer)', drugName: 'Setirizin, Kaptopril, Sefaleksin', isDoen: true, badgeType: 'Aman Teruji', typicalSideEffect: 'Studi terbatas tapi risiko dampak buruk sangat rendah' },
              { syllable: 'L3 (Moderately)', drugName: 'Pseudoefedrin, Fluoksetin', isDoen: true, badgeType: 'Cukup Aman', typicalSideEffect: 'Pseudoefedrin dapat menurunkan produksi ASI hingga 24%!' },
              { syllable: 'L4 (Hazardous)', drugName: 'Litium, Ergotamin, Diazepam kronis', isDoen: true, badgeType: 'Berbahaya', typicalSideEffect: 'Akumulasi sedasi bayi, letargi, hipotonia, intoksikasi' },
              { syllable: 'L5 (Contraindicated)', drugName: 'Metotreksat, Siklofosfamid, Radioaktif', isDoen: true, badgeType: 'KONTRA MUTLAK', typicalSideEffect: 'Supresi sumsum tulang bayi, karsinogenik; STOP MENYUSUI!' }
            ],
            clinicalKeyPearls: 'Relative Infant Dose (RID) adalah persentase dosis ibu yang tertelan bayi per kilogram berat badan. Nilai RID < 10% secara internasional dianggap aman secara klinis untuk ibu tetap menyusui bayinya.',
            clinicalWarnings: 'Dekongestan oral Pseudoefedrin adalah penyebab iatrogenik tersering penurunan produksi ASI secara mendadak pada ibu menyusui karena efek vasokonstriksi vaskular prolaktin.',
            comparisonTable: [
              { drugFormula: 'Ibuprofen (L1)', mechanism: 'Ikatan protein plasma 99%, ekskresi ASI < 0.6% RID', detailedSideEffects: 'Pilihan NSAID teraman saat menyusui', fdaCategory: 'B' },
              { drugFormula: 'Pseudoefedrin (L3)', mechanism: 'Simpatomimetik alfa-1 vasokonstriksi kelenjar mamae', detailedSideEffects: 'Menekan sekresi hormon prolaktin & produksi ASI', fdaCategory: 'C' },
              { drugFormula: 'Litium (L4)', mechanism: 'Kation monovalen larut air ekskresi ASI tinggi 30-50%', detailedSideEffects: 'Hipotonia ("Floppy infant"), sianosis bayi', fdaCategory: 'D' }
            ],
            relatedTabKey: 'pregnancy',
            relatedDrugName: 'Ibuprofen'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // BAB 2: OBAT KARDIOVASKULAR (6 TOPIK)
  // =========================================================================
  {
    id: 'bab-2',
    number: 'BAB 2',
    title: 'Obat Kardiovaskular',
    subChapters: [
      {
        id: 'sub-2-1',
        number: '2.1',
        title: 'Antihipertensi Lini Pertama (ABCD)',
        items: [
          {
            id: 'note-2-1',
            chapterId: 'bab-2',
            chapterNumber: 'BAB 2',
            chapterTitle: 'Obat Kardiovaskular',
            subChapterNumber: '2.1',
            subChapterTitle: 'Antihipertensi Lini Pertama (ABCD)',
            breadcrumb: 'KARDIOVASKULAR > ANTIHIPERTENSI ABCD',
            categoryTag: 'KARDIOVASKULAR',
            heroMnemonic: 'A - B - C - D Hipertensi',
            rhymeTagline: 'A batuk kering, B denyut melambat, C bengkak kaki, D pipis kencing!',
            syllableBreakdown: [
              { syllable: 'A (ACE-I)', drugName: 'Kaptopril, Ramipril, Enalapril', isDoen: true, badgeType: 'Nefroprotektif', typicalSideEffect: 'Batuk kering persisten akibat akumulasi bradikinin, hiperkalemia' },
              { syllable: 'A (ARB)', drugName: 'Kandesartan, Valsartan, Losartan', isDoen: true, badgeType: 'Tanpa Batuk', typicalSideEffect: 'Bebas batuk kering; alternatif utama bila intoleran ACE-I' },
              { syllable: 'B (Beta-B)', drugName: 'Bisoprolol, Propranolol, Atenolol', isDoen: true, badgeType: 'Post-Infark', typicalSideEffect: 'Bradikardia, bronkospasme (KONTRAINDIKASI PADA ASMA AKUT!)' },
              { syllable: 'C (CCB)', drugName: 'Amlodipin, Nifedipin, Diltiazem', isDoen: true, badgeType: 'DHP & Non-DHP', typicalSideEffect: 'Edema perifer (bengkak pergelangan kaki), flushing wajah, konstipasi' },
              { syllable: 'D (Diuretik)', drugName: 'Hidroklorotiazid (HCT), Indapamid', isDoen: true, badgeType: 'Tiazid', typicalSideEffect: 'Hipokalemia, hiperurisemia (pencetus serangan gout), hiperglikemia' }
            ],
            clinicalKeyPearls: 'ACE-I dan ARB bersifat nefroprotektif pada nefropati diabetik mikroalbuminuria, tetapi KONTRAINDIKASI MUTLAK pada kehamilan TM 2 & 3 karena menyebabkan oligohidramnion dan gagal ginjal janin.',
            clinicalWarnings: 'JANGAN PERNAH menggabungkan ACE-I bersamaan dengan ARB karena melipatgandakan risiko hiperkalemia mematikan dan gagal ginjal akut tanpa manfaat mortalitas.',
            comparisonTable: [
              { drugFormula: 'Kaptopril 25mg', mechanism: 'Inhibitor Angiotensin Converting Enzyme', detailedSideEffects: 'Batuk kering bradikinin, angioedema, hiperkalemia', fdaCategory: 'D' },
              { drugFormula: 'Amlodipin 10mg', mechanism: 'Dihydropyridine Calcium Channel Blocker', detailedSideEffects: 'Edema pretibial pergelangan kaki, pusing, takikardia', fdaCategory: 'C' },
              { drugFormula: 'Bisoprolol 5mg', mechanism: 'Beta-1 adrenergik kardioselektif', detailedSideEffects: 'Bradikardia, rasa lelah ekstrem, disfungsi ereksi', fdaCategory: 'C' }
            ],
            relatedTabKey: 'interactions',
            relatedDrugName: 'Kaptopril'
          }
        ]
      },
      {
        id: 'sub-2-2',
        number: '2.2',
        title: 'Gagal Jantung HFrEF: 4 Pilar GDMT',
        items: [
          {
            id: 'note-2-2',
            chapterId: 'bab-2',
            chapterNumber: 'BAB 2',
            chapterTitle: 'Obat Kardiovaskular',
            subChapterNumber: '2.2',
            subChapterTitle: 'Gagal Jantung 4 Pilar GDMT',
            breadcrumb: 'KARDIOVASKULAR > GAGAL JANTUNG GDMT',
            categoryTag: 'GAGAL JANTUNG',
            heroMnemonic: 'ARNI - Beta - MRA - SGLT2i',
            rhymeTagline: 'Empat pilar emas gagal jantung: ARNI turunkan beban, Beta tenangkan ritme, MRA cegah fibrosis, SGLT2i buang gula & natrium!',
            syllableBreakdown: [
              { syllable: 'ARNI', drugName: 'Sakubitril + Valsartan', isDoen: true, badgeType: 'Lini Utama', typicalSideEffect: 'Hipotensi simptomatik, hiperkalemia, wajib washout 36 jam dari ACE-I' },
              { syllable: 'Beta-B', drugName: 'Bisoprolol / Karvedilol / Metoprolol Suksinat', isDoen: true, badgeType: 'Bukti Mortalitas', typicalSideEffect: 'Bradikardia, perburukan kongesti awal bila dosis dinaikkan terlalu cepat' },
              { syllable: 'MRA', drugName: 'Spironolakton 25mg, Eplerenon', isDoen: true, badgeType: 'Hemat Kalium', typicalSideEffect: 'Hiperkalemia berat, ginekomastia nyeri pada pria (Spironolakton)' },
              { syllable: 'SGLT2i', drugName: 'Empagliflozin 10mg, Dapagliflozin 10mg', isDoen: true, badgeType: 'Pilar Baru', typicalSideEffect: 'Infeksi saluran kemih jamur (Kandidiasis genital), dehidrasi ortostatik' }
            ],
            clinicalKeyPearls: 'Pergantian dari ACE-I ke ARNI (Sakubitril/Valsartan) WAJIB MENJALANI WASHOUT PERIOD 36 JAM PENUH untuk mencegah risiko Angioedema laringeal yang mengancam nyawa akibat degradasi bradikinin.',
            clinicalWarnings: 'Spironolakton tidak boleh diberikan jika kadar Kalium serum > 5.0 mEq/L atau laju filtrasi glomerulus eGFR < 30 mL/menit/1.73m2.',
            comparisonTable: [
              { drugFormula: 'Sakubitril/Valsartan 50mg', mechanism: 'Inhibitor Neprilisin + Bloker Reseptor AT1', detailedSideEffects: 'Hipotensi, hiperkalemia, angioedema', fdaCategory: 'D' },
              { drugFormula: 'Spironolakton 25mg', mechanism: 'Antagonis kompetitif reseptor aldosteron', detailedSideEffects: 'Ginekomastia, nyeri payudara, hiperkalemia', fdaCategory: 'C' },
              { drugFormula: 'Dapagliflozin 10mg', mechanism: 'Inhibitor SGLT2 tubulus proksimal nefron', detailedSideEffects: 'Glukosuria, ISK mikotik, penurunan eGFR awal', fdaCategory: 'C' }
            ],
            relatedTabKey: 'interactions',
            relatedDrugName: 'Spironolakton'
          }
        ]
      },
      {
        id: 'sub-2-3',
        number: '2.3',
        title: 'Antiangina & Sindrom Koroner Akut (MONA)',
        items: [
          {
            id: 'note-2-3',
            chapterId: 'bab-2',
            chapterNumber: 'BAB 2',
            chapterTitle: 'Obat Kardiovaskular',
            subChapterNumber: '2.3',
            subChapterTitle: 'Kedaruratan SKA (MONA Koroner & ISDN)',
            breadcrumb: 'KARDIOVASKULAR > SINDROM KORONER MONA',
            categoryTag: 'ANGINA & INFARK',
            heroMnemonic: 'M - O - N - A Koroner',
            rhymeTagline: 'Morfin redakan nyeri cemas, Oksigen jika saturasi rendah, Nitrat lebarkan koroner, Aspirin kunyah cegah gumpalan!',
            syllableBreakdown: [
              { syllable: 'M (Morfin)', drugName: 'Morfin Sulfat 2-4 mg IV', isDoen: true, badgeType: 'Nyeri Iskemik', typicalSideEffect: 'Depresi pernafasan, bradikardia, mual muntah sentral' },
              { syllable: 'O (Oksigen)', drugName: 'Oksigen Kanul Nasal', isDoen: true, badgeType: 'Hanya SpO2 < 90%', typicalSideEffect: 'Vasokonstriksi koroner paradoksal jika diberikan berlebihan pada SpO2 normal!' },
              { syllable: 'N (Nitrat)', drugName: 'ISDN 5 mg Sublingual / Nitrogliserin', isDoen: true, badgeType: 'Vasodilatator', typicalSideEffect: 'Sakit kepala berdenyut hebat, flushing wajah, hipotensi ortostatik mendadak' },
              { syllable: 'A (Aspirin)', drugName: 'Aspirin 160-320 mg DIKUNYAH', isDoen: true, badgeType: 'Loading Antiplatelet', typicalSideEffect: 'Iritasi mukosa lambung; dikunyah agar absorpsi bukal langsung instan' }
            ],
            clinicalKeyPearls: 'ISDN Sublingual ditaruh di bawah lidah tanpa ditelan air agar langsung diserap pleksus vena sublingual menghindari degradasi first-pass metabolism hepar yang mencapai 90%.',
            clinicalWarnings: 'KONTRAINDIKASI MUTLAK NITRAT: Jangan pernah memberikan ISDN/Nitrogliserin jika pasien mengonsumsi Sildenafil (Viagra) atau Tadalafil dalam 24-48 jam terakhir karena memicu kolaps kardiovaskular & kematian!',
            comparisonTable: [
              { drugFormula: 'ISDN 5mg Sublingual', mechanism: 'Donor Nitric Oxide (NO) vasodilatasi vena koroner', detailedSideEffects: 'Sakit kepala berdenyut, hipotensi mendadak', fdaCategory: 'C' },
              { drugFormula: 'Aspirin 80mg Kunyah', mechanism: 'Asetilasi ireversibel enzim Siklooksigenase-1 (COX-1)', detailedSideEffects: 'Dispepsia lambung, pendarahan mikroskopis', fdaCategory: 'D' },
              { drugFormula: 'Klopidogrel 300mg Load', mechanism: 'Inhibitor ireversibel reseptor ADP P2Y12 platelet', detailedSideEffects: 'Hematoma lebam, pendarahan gusi', fdaCategory: 'B' }
            ],
            relatedTabKey: 'interactions',
            relatedDrugName: 'Isosorbid Dinitrat'
          }
        ]
      },
      {
        id: 'sub-2-4',
        number: '2.4',
        title: 'Antiaritmia Vaughan-Williams (Na-Beta-K-Ca)',
        items: [
          {
            id: 'note-2-4',
            chapterId: 'bab-2',
            chapterNumber: 'BAB 2',
            chapterTitle: 'Obat Kardiovaskular',
            subChapterNumber: '2.4',
            subChapterTitle: 'Klasifikasi Antiaritmia (Na-Beta-K-Ca)',
            breadcrumb: 'KARDIOVASKULAR > ANTIARITMIA VAUGHAN-WILLIAMS',
            categoryTag: 'ANTITAKIKARDIA & ARITMIA',
            heroMnemonic: 'No Body Kills Cats (Na - Beta - K - Ca)',
            rhymeTagline: 'Kelas I hambat Natrium, Kelas II Beta-blocker, Kelas III Kalium Amiodaron, Kelas IV Kalsium non-DHP!',
            syllableBreakdown: [
              { syllable: 'Kelas I (Na)', drugName: 'Lidokain (Ib), Propafenon (Ic)', isDoen: true, badgeType: 'Na-Channel Blocker', typicalSideEffect: 'Lidokain aritmia ventrikel akut pasca-infark; parestesia, kejang' },
              { syllable: 'Kelas II (Beta)', drugName: 'Bisoprolol, Metoprolol, Esmolol', isDoen: true, badgeType: 'Beta Blocker', typicalSideEffect: 'Depresi nodus SA/AV, bradikardia, letargi' },
              { syllable: 'Kelas III (K)', drugName: 'Amiodaron 200mg, Sotalol', isDoen: true, badgeType: 'K-Channel Blocker', typicalSideEffect: 'Deposit kornea mata, fibrosis paru, disfungsi tiroid (mengandung iodium)' },
              { syllable: 'Kelas IV (Ca)', drugName: 'Verapamil, Diltiazem', isDoen: true, badgeType: 'CCB Non-DHP', typicalSideEffect: 'Inotropik negatif kuat; konstipasi berat, edema perifer' }
            ],
            clinicalKeyPearls: 'Amiodaron mengandung dua atom iodium struktural yang menyerupai hormon tiroksin, sehingga dapat memicu hipotiroidisme maupun tirotoksikosis. Wajib uji fungsi tiroid dan foto toraks rontgen paru berkala.',
            clinicalWarnings: 'CCB Non-DHP (Verapamil & Diltiazem) KONTRAINDIKASI MUTLAK PADA GAGAL JANTUNG SISTOLIK (HFrEF) karena efek inotropik negatif kuat dapat memicu syok kardiogenik fatal.',
            comparisonTable: [
              { drugFormula: 'Amiodaron 200mg', mechanism: 'Blokade kanal kalium fase 3 potensial aksi kardiak', detailedSideEffects: 'Fibrosis paru, mikrodeposit kornea, hipotiroid', fdaCategory: 'D' },
              { drugFormula: 'Lidokain 2% IV', mechanism: 'Blokade kanal natrium cepat fase 0 ventrikel', detailedSideEffects: 'Pusing, rasa logam, disorientasi, kejang', fdaCategory: 'B' },
              { drugFormula: 'Verapamil 80mg', mechanism: 'Blokade kanal kalsium lambat nodus AV & miokard', detailedSideEffects: 'Konstipasi feses membatu, bradikardia AV blok', fdaCategory: 'C' }
            ],
            relatedTabKey: 'interactions',
            relatedDrugName: 'Amiodaron'
          }
        ]
      },
      {
        id: 'sub-2-5',
        number: '2.5',
        title: 'Terapi Dislipidemia (Statin-Fibrat-Zetimib)',
        items: [
          {
            id: 'note-2-5',
            chapterId: 'bab-2',
            chapterNumber: 'BAB 2',
            chapterTitle: 'Obat Kardiovaskular',
            subChapterNumber: '2.5',
            subChapterTitle: 'Obat Dislipidemia (Statin-Fibrat-Zetimib)',
            breadcrumb: 'KARDIOVASKULAR > DISLIPIDEMIA STATIN FIBRAT',
            categoryTag: 'LIPID & KOLESTEROL',
            heroMnemonic: 'Statin - Fibrat - Zetimib',
            rhymeTagline: 'Statin malam hari hambat HMG-CoA, Fibrat sapu trigliserida tinggi, Ezetimib blokade penyerapan usus!',
            syllableBreakdown: [
              { syllable: 'Statin', drugName: 'Simvastatin, Atorvastatin, Rosuvastatin', isDoen: true, badgeType: 'Inhibitor HMG-CoA', typicalSideEffect: 'Nyeri otot myalgia, peningkatan SGOT/SGPT, risiko Rhabdomyolysis' },
              { syllable: 'Fibrat', drugName: 'Fenofibrat, Gemfibrozil', isDoen: true, badgeType: 'Agonis PPAR-alfa', typicalSideEffect: 'Batu empedu kolelitiasis, dispepsia lambung, miositis otot' },
              { syllable: 'Zetimib', drugName: 'Ezetimib 10mg', isDoen: true, badgeType: 'Inhibitor NPC1L1', typicalSideEffect: 'Diare ringan, sakit perut; pelengkap statin bila LDL belum capai target' }
            ],
            clinicalKeyPearls: 'Simvastatin berwaktu paruh pendek (2-3 jam) sehingga WAJIB diminum malam hari sebelum tidur karena enzim HMG-CoA reduktase aktif mensintesis kolesterol pada fase puasa nokturnal. Atorvastatin & Rosuvastatin berwaktu paruh panjang (>14 jam) sehingga fleksibel diminum kapan saja.',
            clinicalWarnings: 'KOMBINASI GEMFIBROZIL + STATIN SANGAT BERBAHAYA karena menghambat glukuronidasi statin, meningkatkan kadar statin darah hingga 3x lipat dan memicu Rabdomiolisis (gagal ginjal akut mioglobinuria urin gelap coklat).',
            comparisonTable: [
              { drugFormula: 'Simvastatin 20mg', mechanism: 'Inhibitor kompetitif enzim HMG-CoA Reduktase', detailedSideEffects: 'Myalgia otot betis/lengan, kenaikan transaminase', fdaCategory: 'X' },
              { drugFormula: 'Fenofibrat 100-300mg', mechanism: 'Aktivasi reseptor inti PPAR-alfa pemecah VLDL', detailedSideEffects: 'Batu empedu, penurunan tajam trigliserida', fdaCategory: 'C' },
              { drugFormula: 'Ezetimib 10mg', mechanism: 'Blokade transporter sterol Niemann-Pick C1-Like 1', detailedSideEffects: 'Kram perut, sakit kepala ringan', fdaCategory: 'C' }
            ],
            relatedTabKey: 'interactions',
            relatedDrugName: 'Simvastatin'
          }
        ]
      },
      {
        id: 'sub-2-6',
        number: '2.6',
        title: 'Diuretik: Furosemid, HCT, Spironolakton',
        items: [
          {
            id: 'note-2-6',
            chapterId: 'bab-2',
            chapterNumber: 'BAB 2',
            chapterTitle: 'Obat Kardiovaskular',
            subChapterNumber: '2.6',
            subChapterTitle: 'Diuretik Henle, Distal & Hemat Kalium',
            breadcrumb: 'KARDIOVASKULAR > DIURETIK FURO HCT SPIRON',
            categoryTag: 'DIURETIK NEFRON',
            heroMnemonic: 'Furo - HCT - Spiron',
            rhymeTagline: 'Furosemid kuras tuntas di Henle, HCT picu asam urat di distal, Spironolakton hemat kalium & waspada ginekomastia!',
            syllableBreakdown: [
              { syllable: 'Furo', drugName: 'Furosemid 40mg (Loop Diuretic)', isDoen: true, badgeType: 'Ansa Henle', typicalSideEffect: 'Hipokalemia drastis, dehidrasi, ototoksisitas tuli sementara bila infus cepat' },
              { syllable: 'HCT', drugName: 'Hidroklorotiazid 25mg (Tiazid)', isDoen: true, badgeType: 'Tubulus Distal', typicalSideEffect: 'Hiperurisemia (pencetus serangan gout artritis), hiponatremia, hiperglikemia' },
              { syllable: 'Spiron', drugName: 'Spironolakton 25-100mg (MRA)', isDoen: true, badgeType: 'Hemat Kalium', typicalSideEffect: 'Hiperkalemia berbahaya, ginekomastia pembesaran payudara pria' }
            ],
            clinicalKeyPearls: 'Waktu minum terbaik diuretik adalah PAGI HARI agar pasien tidak terganggu bolak-balik kencing di malam hari (nokturia) yang dapat memicu risiko jatuh pada lansia geriatri.',
            clinicalWarnings: 'Furosemid dosis tinggi yang disuntikkan secara bolus IV terlalu cepat dapat memicu kerusakan telinga dalam (ototoksisitas permanen). Berikan dengan kecepatan maksimal 4 mg/menit.',
            comparisonTable: [
              { drugFormula: 'Furosemid 40mg', mechanism: 'Hambat kotransporter Na+/K+/2Cl- Ansa Henle asenden', detailedSideEffects: 'Hipokalemia, hipomagnesemia, dehidrasi', fdaCategory: 'C' },
              { drugFormula: 'HCT 25mg', mechanism: 'Hambat kotransporter Na+/Cl- tubulus kontortus distal', detailedSideEffects: 'Hiperurisemia asam urat, hiponatremia', fdaCategory: 'B' },
              { drugFormula: 'Spironolakton 25mg', mechanism: 'Antagonis kompetitif reseptor aldosteron tubulus distal', detailedSideEffects: 'Hiperkalemia, nyeri payudara ginekomastia', fdaCategory: 'C' }
            ],
            relatedTabKey: 'interactions',
            relatedDrugName: 'Furosemid'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // BAB 3: OBAT SALURAN CERNA (5 TOPIK)
  // =========================================================================
  {
    id: 'bab-3',
    number: 'BAB 3',
    title: 'Obat Saluran Cerna',
    subChapters: [
      {
        id: 'sub-3-1',
        number: '3.1',
        title: 'Antasida Kombinasi: Al-Ma-Si',
        items: [
          {
            id: 'note-3-1',
            chapterId: 'bab-3',
            chapterNumber: 'BAB 3',
            chapterTitle: 'Obat Saluran Cerna',
            subChapterNumber: '3.1',
            subChapterTitle: 'Antasida Formula Seimbang (Al-Ma-Si)',
            breadcrumb: 'SALURAN CERNA > ANTASIDA AL-MASI',
            categoryTag: 'SALURAN CERNA',
            heroMnemonic: 'Al - Ma - Si',
            rhymeTagline: 'Al-nya bikin mampet (konstipasi), Ma-nya bikin lancar (diare), Si-nya anti kembung buang gas!',
            syllableBreakdown: [
              { syllable: 'Al', drugName: 'Aluminium Hidroksida [Al(OH)3]', isDoen: true, badgeType: 'Mampet Konstipasi', typicalSideEffect: 'Konstipasi, feses mengeras, kelasi fosfat serum darah' },
              { syllable: 'Ma', drugName: 'Magnesium Hidroksida [Mg(OH)2]', isDoen: true, badgeType: 'Lancar Diare', typicalSideEffect: 'Diare, kram perut osmotik usus besar' },
              { syllable: 'Si', drugName: 'Simetikon / Dimetikon', isDoen: true, badgeType: 'Anti-Kembung', typicalSideEffect: 'Bebas efek samping; memecah tegangan gelembung gas lambung' }
            ],
            clinicalKeyPearls: 'Aluminium dan Magnesium sengaja dikombinasikan dalam rasio 1:1 oleh industri farmasi untuk saling meniadakan efek samping konstipasi dan diare pada usus.',
            clinicalWarnings: 'Antasida mengandung kation multivalen (Al3+, Mg2+) yang mengikat antibiotik Tetrasiklin dan Kuinolon menjadi senyawa kelat tidak larut; beri jarak minum minimal 2 JAM.',
            comparisonTable: [
              { drugFormula: 'Al(OH)3 200mg', mechanism: 'Menetralkan asam lambung membentuk AlCl3 di usus', detailedSideEffects: 'Konstipasi, penurunan absorpsi fosfat', fdaCategory: 'B' },
              { drugFormula: 'Mg(OH)2 200mg', mechanism: 'Menetralkan asam lambung membentuk MgCl2 osmotik', detailedSideEffects: 'Diare laksatif osmotik usus', fdaCategory: 'B' },
              { drugFormula: 'Simetikon 40mg', mechanism: 'Menurunkan tegangan permukaan gelembung gas', detailedSideEffects: 'Flatus bersendawa (mengeluarkan gas)', fdaCategory: 'C' }
            ],
            relatedTabKey: 'interactions',
            relatedDrugName: 'Antasida DOEN'
          }
        ]
      },
      {
        id: 'sub-3-2',
        number: '3.2',
        title: 'Ulkus Peptikum & Eradikasi H. Pylori (Triplet PAC)',
        items: [
          {
            id: 'note-3-2',
            chapterId: 'bab-3',
            chapterNumber: 'BAB 3',
            chapterTitle: 'Obat Saluran Cerna',
            subChapterNumber: '3.2',
            subChapterTitle: 'Eradikasi H. Pylori (Triple Therapy PAC)',
            breadcrumb: 'SALURAN CERNA > ERADIKASI H PYLORI TRIPLE',
            categoryTag: 'TUKAK PEPTIKUM',
            heroMnemonic: 'P - A - C H. Pylori',
            rhymeTagline: 'PPI 2x sehari naikkan pH lambung, Amoksisilin 1000mg gempur bakteri, Klaritromisin 500mg tuntas 14 hari!',
            syllableBreakdown: [
              { syllable: 'P (PPI)', drugName: 'Omeprazol 20mg / Lansoprazol 30mg 2x1', isDoen: true, badgeType: 'Pompa Proton', typicalSideEffect: 'Meningkatkan pH lambung > 5 agar antibiotik bekerja stabil & efektif' },
              { syllable: 'A (Amoksisilin)', drugName: 'Amoksisilin 1000 mg (1g) 2x1', isDoen: true, badgeType: 'Dinding Sel', typicalSideEffect: 'Diare, ruam kulit; ganti Metronidazol 500mg bila pasien alergi penisilin' },
              { syllable: 'C (Klaritromisin)', drugName: 'Klaritromisin 500 mg 2x1', isDoen: true, badgeType: 'Makrolida 50S', typicalSideEffect: 'Rasa pahit logam di lidah, mual perut, gangguan ritme jantung' }
            ],
            clinicalKeyPearls: 'Eradikasi H. pylori wajib dijalani selama 14 HARI PENUH. Mengurangi durasi menjadi 7 hari terbukti menggagalkan eradikasi dan memicu resistensi antibiotik klaritromisin.',
            clinicalWarnings: 'Jika daerah setempat memiliki resistensi Klaritromisin > 15%, pedoman internasional merekomendasikan Quadruple Therapy berbasis Bismuth (PPI + Bismuth Subsalisilat + Metronidazol + Tetrasiklin).',
            comparisonTable: [
              { drugFormula: 'Omeprazol 20mg', mechanism: 'Inhibisi ireversibel pompa H+/K+ ATPase lambung', detailedSideEffects: 'Polip fundus, hipomagnesemia terapi jangka panjang', fdaCategory: 'C' },
              { drugFormula: 'Klaritromisin 500mg', mechanism: 'Inhibisi sintesis protein ribosom subunit 50S', detailedSideEffects: 'Rasa pahit mulut, interaksi CYP3A4 hati', fdaCategory: 'C' },
              { drugFormula: 'Amoksisilin 1000mg', mechanism: 'Inhibisi sintesis dinding sel peptidoglikan bakteri', detailedSideEffects: 'Reaksi alergi hipersensitivitas, diare', fdaCategory: 'B' }
            ],
            relatedTabKey: 'interactions',
            relatedDrugName: 'Omeprazol'
          }
        ]
      },
      {
        id: 'sub-3-3',
        number: '3.3',
        title: 'Sukralfat: Syarat Lingkungan Asam & Jeda Minum',
        items: [
          {
            id: 'note-3-3',
            chapterId: 'bab-3',
            chapterNumber: 'BAB 3',
            chapterTitle: 'Obat Saluran Cerna',
            subChapterNumber: '3.3',
            subChapterTitle: 'Pelindung Mukosa Sukralfat',
            breadcrumb: 'SALURAN CERNA > SUKRALFAT MUKOPROTEKTOR',
            categoryTag: 'PELINDUNG TUKAK',
            heroMnemonic: 'Sukralfat Perut Kosong',
            rhymeTagline: 'Sukralfat butuh asam untuk membentuk plester luka tukak; beri jeda 2 jam dari antasida dan makanan!',
            syllableBreakdown: [
              { syllable: 'Sukral', drugName: 'Sukralfat Suspensi 500mg/5ml', isDoen: true, badgeType: 'Aluminium Sitrat', typicalSideEffect: 'Konstipasi (mengandung garam aluminium), rasa berpasir di lidah' },
              { syllable: 'Jeda 1 Jam', drugName: 'Sebelum Makan', isDoen: true, badgeType: 'Aturan Waktu', typicalSideEffect: 'Diminum 1 jam sebelum makan agar pasta pelindung melapisi luka sebelum makanan masuk' },
              { syllable: 'Jeda 2 Jam', drugName: 'Dari Antasida / PPI', isDoen: true, badgeType: 'Interaksi Obat', typicalSideEffect: 'Antasida menetralkan asam lambung yang dibutuhkan sukralfat untuk berpolimerisasi' }
            ],
            clinicalKeyPearls: 'Pada pH asam (pH < 4), sukralfat mengalami polimerisasi silang membentuk gel kental bermuatan negatif yang berikatan kuat secara elektrostatik dengan protein bermuatan positif pada kawah tukak lambung.',
            clinicalWarnings: 'JANGAN PERNAH meminum Sukralfat bersamaan dengan Antasida atau PPI dalam waktu yang sama, karena hilangnya asam lambung membuat sukralfat gagal berpolimerisasi menjadi pasta plester pelindung.',
            comparisonTable: [
              { drugFormula: 'Sukralfat 1g Suspensi', mechanism: 'Membentuk kompleks gel pelindung sawar fisik mukosa', detailedSideEffects: 'Konstipasi, bezoar pada motilitas lambung lemah', fdaCategory: 'B' },
              { drugFormula: 'Misoprostol 200mcg', mechanism: 'Analog prostaglandin E1 merangsang mukus bikarbonat', detailedSideEffects: 'Diare kram perut, ABORTIFASIENT KONTRA HAMIL', fdaCategory: 'X' },
              { drugFormula: 'Rebamipid 100mg', mechanism: 'Memicu sintesis prostaglandin endogen mukosa lambung', detailedSideEffects: 'Mual ringan, leukopenia sangat jarang', fdaCategory: 'C' }
            ],
            relatedTabKey: 'interactions',
            relatedDrugName: 'Sukralfat'
          }
        ]
      },
      {
        id: 'sub-3-4',
        number: '3.4',
        title: 'Terapi Konstipasi: Bis-Lak-Po (Stimulan, Osmotik, Bulk)',
        items: [
          {
            id: 'note-3-4',
            chapterId: 'bab-3',
            chapterNumber: 'BAB 3',
            chapterTitle: 'Obat Saluran Cerna',
            subChapterNumber: '3.4',
            subChapterTitle: 'Terapi Konstipasi (Bis-Lak-Po)',
            breadcrumb: 'SALURAN CERNA > KONSTIPASI BIS-LAK-PO',
            categoryTag: 'LAKSATIF & PENCAHAR',
            heroMnemonic: 'Bis - Lak - Po Pencahar',
            rhymeTagline: 'Bisakodil pacu kontraksi usus, Laktulosa fermentasi lunakkan feses, Polietilen Glikol / Psyllium serat butuh air segelas!',
            syllableBreakdown: [
              { syllable: 'Bis (Stimulan)', drugName: 'Bisakodil 5-10 mg Oral / Supo', isDoen: true, badgeType: 'Memicu Mienterik', typicalSideEffect: 'Kram kolik usus; diminum malam hari untuk BAB pagi hari (onset 6-12 jam)' },
              { syllable: 'Lak (Osmotik)', drugName: 'Laktulosa Sirup 10g/15ml', isDoen: true, badgeType: 'Pencahar Aman', typicalSideEffect: 'Kembung perut flatulensi di awal; pilihan teraman geriatri & bumil' },
              { syllable: 'Po (Bulk/PEG)', drugName: 'Polietilen Glikol (PEG) / Psyllium', isDoen: true, badgeType: 'Membentuk Massa', typicalSideEffect: 'Wajib minum 1 gelas penuh air putih; feses mengembang lembut' }
            ],
            clinicalKeyPearls: 'Bisakodil tablet memiliki salut enterik khusus agar tidak larut di lambung. Pasien DILARANG mengunyah tablet atau meminumnya bersamaan dengan susu/antasida dalam 1 jam karena akan merusak salut dan memicu nyeri lambung hebat.',
            clinicalWarnings: 'Laksatif stimulan (Bisakodil, Senna) tidak boleh digunakan terus-menerus > 7 hari karena memicu atonia usus (usus malas / ketergantungan pencahar cathartic colon).',
            comparisonTable: [
              { drugFormula: 'Bisakodil 5mg Tab', mechanism: 'Stimulasi saraf pleksus mienterik mukosa usus besar', detailedSideEffects: 'Kram perut, mual, ketergantungan pencahar', fdaCategory: 'C' },
              { drugFormula: 'Laktulosa Sirup', mechanism: 'Fermentasi bakteri kolon menarik air secara osmotik', detailedSideEffects: 'Perut kembung bergas awal, diare bila overdosis', fdaCategory: 'B' },
              { drugFormula: 'Gliserin Enema / Supo', mechanism: 'Pelumas rektal & stimulasi refleks defekasi lokal', detailedSideEffects: 'Iritasi mukosa rektum lokal, rasa terbakar', fdaCategory: 'C' }
            ],
            relatedTabKey: 'interactions',
            relatedDrugName: 'Bisakodil'
          }
        ]
      },
      {
        id: 'sub-3-5',
        number: '3.5',
        title: 'Antidiare: Oralit, Zink, Loperamid & Larangan Disentri',
        items: [
          {
            id: 'note-3-5',
            chapterId: 'bab-3',
            chapterNumber: 'BAB 3',
            chapterTitle: 'Obat Saluran Cerna',
            subChapterNumber: '3.5',
            subChapterTitle: 'Tata Laksana Diare & Larangan Loperamid',
            breadcrumb: 'SALURAN CERNA > TATA LAKSANA DIARE AKUT',
            categoryTag: 'ANTIDIARE',
            heroMnemonic: 'Oralit - Zink - Atta - Lop',
            rhymeTagline: 'Oralit cegah dehidrasi nomor satu, Zink 10 hari regenerasi usus anak, Loperamid HARAM MUTLAK pada diare berdarah!',
            syllableBreakdown: [
              { syllable: 'Oralit', drugName: 'Oralit Formula WHO 200 ml', isDoen: true, badgeType: 'Rehidrasi Emas', typicalSideEffect: 'Mencegah kematian akibat dehidrasi hipovolemik; osmolaritas rendah 245 mOsm' },
              { syllable: 'Zink', drugName: 'Zink Sulfat 20mg Dispersible', isDoen: true, badgeType: 'Wajib 10 Hari', typicalSideEffect: 'Regenerasi mukosa vili usus anak; wajib dihabiskan 10 hari berturut-turut' },
              { syllable: 'Atta', drugName: 'Attapulgit / Karbo Adsorben', isDoen: true, badgeType: 'Penyerap Toksin', typicalSideEffect: 'Menyerap cairan & enterotoksin; membuat feses lebih padat' },
              { syllable: 'Lop', drugName: 'Loperamid HCl 2mg', isDoen: true, badgeType: 'Antimotilitas Usus', typicalSideEffect: 'Konstipasi, kram perut; HANYA untuk diare cair non-infeksius dewasa' }
            ],
            clinicalKeyPearls: 'Dosis Zink anak diare: Usia < 6 bulan = 10 mg (setengah tablet) per hari; Usia > 6 bulan = 20 mg (1 tablet utuh) per hari selama 10 HARI PENUH meskipun diare sudah berhenti, untuk mencegah diare berulang selama 3 bulan ke depan.',
            clinicalWarnings: 'LOPERAMID KONTRAINDIKASI MUTLAK PADA DIARE BERDARAH (DISENTRI) ATAU DEMAM TINGGI! Menghentikan motilitas usus saat ada kuman invasif (Shigella, Salmonella) akan menjebak toksin bakteri di kolon dan memicu komplikasi fatal TOXIC MEGACOLON & SEPSIS.',
            comparisonTable: [
              { drugFormula: 'Oralit WHO 200ml', mechanism: 'Kotraspor aktif natrium-glukosa mukosa jejunum', detailedSideEffects: 'Mual jika diminum terlalu cepat sekaligus', fdaCategory: 'A' },
              { drugFormula: 'Zink Sulfat 20mg Tab', mechanism: 'Kofaktor enzim sintesis protein enterosit & imunitas', detailedSideEffects: 'Muntah jika diminum saat perut kosong', fdaCategory: 'A' },
              { drugFormula: 'Loperamid 2mg', mechanism: 'Agonis reseptor mu-opioid pleksus mienterik kolon', detailedSideEffects: 'Konstipasi paralitik, toksik megakolon', fdaCategory: 'B' }
            ],
            relatedTabKey: 'interactions',
            relatedDrugName: 'Loperamid'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // BAB 4: OBAT SALURAN PERNAPASAN (4 TOPIK)
  // =========================================================================
  {
    id: 'bab-4',
    number: 'BAB 4',
    title: 'Obat Saluran Pernapasan',
    subChapters: [
      {
        id: 'sub-4-1',
        number: '4.1',
        title: 'Asma: SABA Pelega vs ICS Pengontrol',
        items: [
          {
            id: 'note-4-1',
            chapterId: 'bab-4',
            chapterNumber: 'BAB 4',
            chapterTitle: 'Obat Saluran Pernapasan',
            subChapterNumber: '4.1',
            subChapterTitle: 'Pelega SABA vs Pengontrol ICS',
            breadcrumb: 'RESPIRASI > ASMA PELEGA VS PENGONTROL',
            categoryTag: 'SALURAN NAPAS',
            heroMnemonic: 'SABA Pelega • ICS Pengontrol',
            rhymeTagline: 'Salbutamol pelega cepat sesak darurat, Budesonid pengontrol radang harian; habis hirup steroid WAJIB KUMUR!',
            syllableBreakdown: [
              { syllable: 'SABA (Pelega)', drugName: 'Salbutamol Inhaler / Nebulizer', isDoen: true, badgeType: 'Serangan Akut', typicalSideEffect: 'Tremor jari tangan halus, takikardia jantung berdebar, hipokalemia' },
              { syllable: 'ICS (Pengontrol)', drugName: 'Budesonid / Flutikason Inhaler', isDoen: true, badgeType: 'Pemeliharaan', typicalSideEffect: 'Kandidiasis oral (jamur sariawan putih lidah), disfonia suara serak' },
              { syllable: 'Kumur Air', drugName: 'Gargle & Buang', isDoen: true, badgeType: 'Edukasi Pasien', typicalSideEffect: 'Mencegah penumpukan kortikosteroid di tenggorokan & pertumbuhan jamur Candida' }
            ],
            clinicalKeyPearls: 'Pasien asma yang hanya mengandalkan SABA tanpa ICS berisiko tinggi mengalami eksaserbasi fatal. Pedoman GINA terkini menetapkan bahwa kortikosteroid inhalasi (ICS) adalah pilar mutlak pengendali inflamasi dasar bronkus.',
            clinicalWarnings: 'Pasien asma KONTRAINDIKASI MENGONSUMSI BETA-BLOCKER NON-SELEKTIF (Propranolol, Timolol tetes mata) karena dapat memicu bronkospasme berat mendadak yang mematikan.',
            comparisonTable: [
              { drugFormula: 'Salbutamol 100mcg MDI', mechanism: 'Agonis selektif beta-2 adrenergik otot polos bronkus', detailedSideEffects: 'Tremor jari halus, takikardia, palpitasi', fdaCategory: 'C' },
              { drugFormula: 'Budesonid 200mcg DPI', mechanism: 'Kortikosteroid antiinflamasi lokal mukosa saluran napas', detailedSideEffects: 'Kandidiasis oral, suara serak (cegah dengan kumur)', fdaCategory: 'B' },
              { drugFormula: 'Ipratropium 20mcg MDI', mechanism: 'Antagonis kompetitif reseptor muskarinik M3 bronkodilatasi', detailedSideEffects: 'Mulut kering, batuk iritatif lokal', fdaCategory: 'B' }
            ],
            relatedTabKey: 'interactions',
            relatedDrugName: 'Salbutamol'
          }
        ]
      },
      {
        id: 'sub-4-2',
        number: '4.2',
        title: 'Batuk Kering vs Berdahak (DMP vs NAC & Ambroksol)',
        items: [
          {
            id: 'note-4-2',
            chapterId: 'bab-4',
            chapterNumber: 'BAB 4',
            chapterTitle: 'Obat Saluran Pernapasan',
            subChapterNumber: '4.2',
            subChapterTitle: 'Batuk Kering vs Batuk Berdahak',
            breadcrumb: 'RESPIRASI > ANTITUSIF VS MUKOLITIK',
            categoryTag: 'BATUK & MUKOLITIK',
            heroMnemonic: 'DMP vs Asetil & Ambroksol',
            rhymeTagline: 'DMP tekan pusat batuk kering, Asetilsistein putus ikatan dahak kental, Ambroksol rangsang surfaktan!',
            syllableBreakdown: [
              { syllable: 'DMP (Antitusif)', drugName: 'Dekstrometorfan HBr 15mg', isDoen: true, badgeType: 'Batuk Kering', typicalSideEffect: 'Kantuk, pusing; supresi refleks batuk di medula otak sentral' },
              { syllable: 'NAC (Mukolitik)', drugName: 'N-Asetilsistein 200mg', isDoen: true, badgeType: 'Pemutus Disulfida', typicalSideEffect: 'Bau belerang khas; sekaligus hepatoprotektor antidot parasetamol' },
              { syllable: 'Ambro (Sekretolitik)', drugName: 'Ambroksol HCl 30mg', isDoen: true, badgeType: 'Pengencer Dahak', typicalSideEffect: 'Mual ringan; merangsang sintesis surfaktan alveolar paru' }
            ],
            clinicalKeyPearls: 'DMP KONTRAINDIKASI pada batuk berdahak produktif! Menekan refleks batuk saat paru penuh dahak akan menyebabkan lendir menumpuk di bronkus dan memicu infeksi sekunder pneumonia.',
            clinicalWarnings: 'N-Asetilsistein aerosol/inhalasi dapat mencetuskan bronkospasme akut pada pasien riwayat asma hiperreaktif. Sediakan bronkodilator bila digunakan via nebulizer.',
            comparisonTable: [
              { drugFormula: 'Dekstrometorfan 15mg', mechanism: 'Agonis reseptor sigma-1 & supresi pusat batuk medula', detailedSideEffects: 'Sedasi, disforia pada dosis rekreasional', fdaCategory: 'C' },
              { drugFormula: 'N-Asetilsistein 200mg', mechanism: 'Memecah ikatan disulfida mukoprotein lendir kental', detailedSideEffects: 'Mual bau belerang, dispepsia', fdaCategory: 'B' },
              { drugFormula: 'Gliseril Guaiakolat 100mg', mechanism: 'Ekspektoran meningkatkan hidrasi sekret mukosa napas', detailedSideEffects: 'Mual, mengantuk ringan', fdaCategory: 'C' }
            ],
            relatedTabKey: 'interactions',
            relatedDrugName: 'N-Asetilsistein'
          }
        ]
      },
      {
        id: 'sub-4-3',
        number: '4.3',
        title: 'Antihistamin: CTM Gen 1 vs Setir-Lora-Fekso Gen 2',
        items: [
          {
            id: 'note-4-3',
            chapterId: 'bab-4',
            chapterNumber: 'BAB 4',
            chapterTitle: 'Obat Saluran Pernapasan',
            subChapterNumber: '4.3',
            subChapterTitle: 'Antihistamin Gen 1 vs Gen 2',
            breadcrumb: 'RESPIRASI > ANTIHISTAMIN GEN 1 VS GEN 2',
            categoryTag: 'ALERGI & HISTAMIN',
            heroMnemonic: 'CTM vs Setir - Lora - Fekso',
            rhymeTagline: 'Gen 1 CTM tembus otak bikin kantuk berat & mulut kering; Gen 2 Setirizin-Loratadin bebas kantuk aman menyetir!',
            syllableBreakdown: [
              { syllable: 'Gen 1 (Sedatif)', drugName: 'Klorfeniramin (CTM) 4mg, Difenhidramin', isDoen: true, badgeType: 'Lipofilik Sentral', typicalSideEffect: 'Sedasi berat, mulut kering, pandangan kabur, retensi urin (antikolinergik)' },
              { syllable: 'Gen 2 (Setirizin)', drugName: 'Setirizin HCl 10mg', isDoen: true, badgeType: 'Non-Sedatif Relatif', typicalSideEffect: 'Sangat minimal menembus sawar otak; efek kantuk ringan pada 10% orang' },
              { syllable: 'Gen 2 (Loratadin)', drugName: 'Loratadin 10mg, Feksofenadin', isDoen: true, badgeType: 'Murni Non-Sedatif', typicalSideEffect: 'Tidak menembus sawar otak sama sekali; pilihan utama pengemudi & pekerja' }
            ],
            clinicalKeyPearls: 'Antihistamin Gen 1 bersifat lipofilik tinggi sehingga menembus sawar darah otak dan memblokade reseptor H1 serta Muskarinik di SSP. Efek antikolinergiknya memperparah retensi urin pada pasien lansia BPH dan memperburuk glaukoma.',
            clinicalWarnings: 'Pasien lansia geriatri KONTRAINDIKASI meminum CTM/Difenhidramin harian (Kriteria Beers) karena memicu delirium, kebingungan mental, dan risiko jatuh patah tulang panggul.',
            comparisonTable: [
              { drugFormula: 'CTM 4mg Tab', mechanism: 'Blokade reseptor H1 sentral & reseptor muskarinik M1', detailedSideEffects: 'Kantuk berat, mulut kering, retensi urin', fdaCategory: 'B' },
              { drugFormula: 'Setirizin 10mg', mechanism: 'Blokade selektif reseptor histamin H1 perifer', detailedSideEffects: 'Sakit kepala, kantuk sangat ringan', fdaCategory: 'B' },
              { drugFormula: 'Feksofenadin 120mg', mechanism: 'Metabolit murni terfenadin polar tidak tembus SSP', detailedSideEffects: 'Bebas efek kantuk sejati, dispepsia ringan', fdaCategory: 'C' }
            ],
            relatedTabKey: 'interactions',
            relatedDrugName: 'Setirizin'
          }
        ]
      },
      {
        id: 'sub-4-4',
        number: '4.4',
        title: 'Antikolinergik PPOK: SAMA & LAMA (Ipra-Tio)',
        items: [
          {
            id: 'note-4-4',
            chapterId: 'bab-4',
            chapterNumber: 'BAB 4',
            chapterTitle: 'Obat Saluran Pernapasan',
            subChapterNumber: '4.4',
            subChapterTitle: 'Bronkodilator PPOK Antikolinergik',
            breadcrumb: 'RESPIRASI > PPOK SAMA LAMA IPRA-TIO',
            categoryTag: 'PPOK & OBSTRUKSI',
            heroMnemonic: 'Ipra - Tio PPOK',
            rhymeTagline: 'Ipratropium aksi cepat darurat, Tiotropium kerja panjang sehari sekali; blokade saraf vagus longgarkan jalan napas!',
            syllableBreakdown: [
              { syllable: 'SAMA (Ipra)', drugName: 'Ipratropium Bromida', isDoen: true, badgeType: 'Kerja Singkat 6 Jam', typicalSideEffect: 'Mulut kering, batuk lokal, rasa pahit di tenggorokan' },
              { syllable: 'LAMA (Tio)', drugName: 'Tiotropium Bromida (Spiriva)', isDoen: true, badgeType: 'Kerja Panjang 24 Jam', typicalSideEffect: 'Konstipasi, retensi urin pada pria BPH, glaukoma akut bila terkena mata' }
            ],
            clinicalKeyPearls: 'Pada Penyakit Paru Obstruktif Kronik (PPOK), tonus vagal kolinergik adalah komponen utama reversibel dari obstruksi jalan napas. LAMA (Tiotropium) terbukti lebih unggul menurunkan frekuensi eksaserbasi PPOK dibandingkan LABA.',
            clinicalWarnings: 'Hati-hati saat menggunakan masker nebulizer Ipratropium; semprotan obat yang bocor dan mengenai mata dapat memicu midriasis pupil dan serangan glaukoma sudut tertutup akut.',
            comparisonTable: [
              { drugFormula: 'Ipratropium 0.5mg Nebu', mechanism: 'Antagonis reseptor muskarinik M3 bronkus (kerja 6 jam)', detailedSideEffects: 'Mulut kering, takikardia ringan', fdaCategory: 'B' },
              { drugFormula: 'Tiotropium 18mcg Handihaler', mechanism: 'Disosiasi lambat dari reseptor M3 bronkus (kerja 24 jam)', detailedSideEffects: 'Mulut kering, konstipasi, retensi urin', fdaCategory: 'C' }
            ],
            relatedTabKey: 'interactions',
            relatedDrugName: 'Salbutamol'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // BAB 5: OBAT NEUROLOGI (4 TOPIK)
  // =========================================================================
  {
    id: 'bab-5',
    number: 'BAB 5',
    title: 'Obat Neurologi',
    subChapters: [
      {
        id: 'sub-5-1',
        number: '5.1',
        title: 'Antiepileptik Klasik (FeKarValEto)',
        items: [
          {
            id: 'note-5-1',
            chapterId: 'bab-5',
            chapterNumber: 'BAB 5',
            chapterTitle: 'Obat Neurologi',
            subChapterNumber: '5.1',
            subChapterTitle: 'Antiepileptik Klasik (FeKarValEto)',
            breadcrumb: 'NEUROLOGI > ANTIEPILEPTIK KLASIK',
            categoryTag: 'NEUROLOGI',
            heroMnemonic: 'Fe - Kar - Val - Eto',
            rhymeTagline: 'FeKarValEto kontrol kejang fokal & umum; hati-hati gusi bengkak, alergi kulit SJS & racun hepar!',
            syllableBreakdown: [
              { syllable: 'Fe (Fenitoin)', drugName: 'Fenitoin Natrium 100mg', isDoen: true, badgeType: 'Kanal Na+', typicalSideEffect: 'Hiperplasia gingiva (gusi bengkak), hirsutisme kumis, ataksia jalan sempoyongan' },
              { syllable: 'Kar (Karbamazepin)', drugName: 'Karbamazepin 200mg', isDoen: true, badgeType: 'Nyeri Trigeminal', typicalSideEffect: 'Sindrom Stevens-Johnson (terutama gen HLA-B*1502), hiponatremia SIADH, leukopenia' },
              { syllable: 'Val (Asam Valproat)', drugName: 'Natrium Valproat / Divalproex', isDoen: true, badgeType: 'Spektrum Luas', typicalSideEffect: 'Hepatotoksisitas fatal anak < 2 th, kenaikan berat badan drastis, alopesia rontok' },
              { syllable: 'Eto (Etosuksimid)', drugName: 'Etosuksimid 250mg', isDoen: false, badgeType: 'Kanal Kalsium T', typicalSideEffect: 'Pilihan utama bangkitan lena (Absence Seizure petit mal); cegah kejang bengong anak' }
            ],
            clinicalKeyPearls: 'Fenitoin mengikuti kinetika eliminasi non-linear (Michaelis-Menten). Begitu enzim hepar mengalami kejenuhan, sedikit kenaikan dosis kecil akan melipatgandakan kadar obat dalam plasma hingga mencapai level toksik mematikan.',
            clinicalWarnings: 'Asam Valproat adalah ANTIEPILEPTIK PALING TERATOGENIK (Kategori D/X)! Penggunaan saat hamil memicu spina bifida dan penurunan skor IQ anak. Ganti ke Levetiracetam atau Lamotrigin bila wanita usia subur merencanakan kehamilan.',
            comparisonTable: [
              { drugFormula: 'Fenitoin 100mg', mechanism: 'Memperpanjang inaktivasi kanal Na+ bergerbang voltase', detailedSideEffects: 'Gusi bengkak, nistagmus bola mata, teratogenik', fdaCategory: 'D' },
              { drugFormula: 'Karbamazepin 200mg', mechanism: 'Stabilisasi membran neuronal kanal natrium', detailedSideEffects: 'SJS/TEN, aplastik anemia, SIADH hiponatremia', fdaCategory: 'D' },
              { drugFormula: 'Asam Valproat 250mg', mechanism: 'Meningkatkan kadar neurotransmiter inhibitorik GABA', detailedSideEffects: 'Hepatotoksisitas, pankreatitis, spina bifida', fdaCategory: 'X' }
            ],
            relatedTabKey: 'interactions',
            relatedDrugName: 'Fenitoin'
          }
        ]
      },
      {
        id: 'sub-5-2',
        number: '5.2',
        title: 'Antiepileptik Generasi Baru (Lamo-Levi-Topi)',
        items: [
          {
            id: 'note-5-2',
            chapterId: 'bab-5',
            chapterNumber: 'BAB 5',
            chapterTitle: 'Obat Neurologi',
            subChapterNumber: '5.2',
            subChapterTitle: 'Antiepileptik Generasi Baru (Lamo-Levi-Topi)',
            breadcrumb: 'NEUROLOGI > ANTIEPILEPTIK GENERASI BARU',
            categoryTag: 'EPILEPSI BARU',
            heroMnemonic: 'Lamo - Levi - Topi',
            rhymeTagline: 'Lamotrigin titrasi lambat cegah SJS melepuh, Levetiracetam eliminasi ginjal aman hati, Topiramat bikin langsing & batu ginjal!',
            syllableBreakdown: [
              { syllable: 'Lamo', drugName: 'Lamotrigin 25-100mg', isDoen: true, badgeType: 'Aman Hamil', typicalSideEffect: 'Wajib titrasi dosis sangat lambat tiap 2 minggu untuk mencegah ruam fatal Stevens-Johnson' },
              { syllable: 'Levi', drugName: 'Levetiracetam (Keppra) 500mg', isDoen: true, badgeType: 'Jalur SV2A', typicalSideEffect: 'Eliminasi murni ginjal tanpa metabolisme hepar; efek samping perubahan perilaku lekas marah' },
              { syllable: 'Topi', drugName: 'Topiramat 25-100mg', isDoen: true, badgeType: 'Inhibitor Karbonik', typicalSideEffect: 'Nafsu makan anjlok berat badan turun, batu ginjal nefrolitiasis, parestesia kesemutan' }
            ],
            clinicalKeyPearls: 'Interaksi Valproat + Lamotrigin: Valproat menghambat glukuronidasi Lamotrigin secara kuat. Jika diresepkan bersamaan, dosis Lamotrigin WAJIB DIPOTONG 50% untuk mencegah sindrom Stevens-Johnson fatal.',
            clinicalWarnings: 'Levetiracetam adalah antiepileptik lini pertama teraman untuk pasien dengan gangguan fungsi hati berat dan polifarmasi karena tidak berinteraksi dengan sitokrom P450.',
            comparisonTable: [
              { drugFormula: 'Lamotrigin 50mg', mechanism: 'Blokade kanal Na+ dan pelepasan glutamat rangsang', detailedSideEffects: 'Ruam kulit SJS bila titrasi terlalu cepat', fdaCategory: 'C' },
              { drugFormula: 'Levetiracetam 500mg', mechanism: 'Mengikat protein vesikel sinaptik 2A (SV2A)', detailedSideEffects: 'Agitasi emosi, kelelahan, bebas interaksi hepar', fdaCategory: 'C' },
              { drugFormula: 'Topiramat 50mg', mechanism: 'Blokade kanal Na+ & inhibisi karbonik anhidrase', detailedSideEffects: 'Penurunan berat badan, batu ginjal, asidosis', fdaCategory: 'D' }
            ],
            relatedTabKey: 'interactions',
            relatedDrugName: 'Asam Valproat'
          }
        ]
      },
      {
        id: 'sub-5-3',
        number: '5.3',
        title: 'Terapi Parkinson: Levodopa, Karbidopa & THP',
        items: [
          {
            id: 'note-5-3',
            chapterId: 'bab-5',
            chapterNumber: 'BAB 5',
            chapterTitle: 'Obat Neurologi',
            subChapterNumber: '5.3',
            subChapterTitle: 'Parkinson (Le-Kar-Tropin)',
            breadcrumb: 'NEUROLOGI > PARKINSON LEVODOPA THP',
            categoryTag: 'GANGGUAN GERAK',
            heroMnemonic: 'Le - Kar - Tropin',
            rhymeTagline: 'Levodopa masuk otak jadi dopamin, Karbidopa cegah mual di perifer, Triheksifenidil redakan tremor gemetar!',
            syllableBreakdown: [
              { syllable: 'Le (Levodopa)', drugName: 'L-Dopa 100mg', isDoen: true, badgeType: 'Prekursor Dopamin', typicalSideEffect: 'Menembus sawar darah otak mengatasi bradikinesia & rigiditas kaku otot' },
              { syllable: 'Kar (Karbidopa)', drugName: 'Karbidopa 25mg', isDoen: true, badgeType: 'Inhibitor Dekarboksilase', typicalSideEffect: 'Mencegah konversi levodopa di perifer tubuh sehingga mencegah mual muntah & aritmia' },
              { syllable: 'Tropin (THP)', drugName: 'Triheksifenidil HCl 2mg', isDoen: true, badgeType: 'Antikolinergik Sentral', typicalSideEffect: 'Khusus meredakan tremor gemetar istirahat; efek samping mulut kering, mata kabur' }
            ],
            clinicalKeyPearls: 'Levodopa bersaing dengan asam amino makanan untuk diserap di dinding usus halus dan menembus sawar darah otak via transporter LAT1. Minum Levodopa 30-60 menit sebelum makan dan hindari makanan berprotein tinggi.',
            clinicalWarnings: 'Triheksifenidil (THP) KONTRAINDIKASI PADA LANSIA GERIATRI DENGAN DEMENSIA karena efek antikolinergik sentral memperparah kekacauan memori, memicu delirium akut dan retensi urin.',
            comparisonTable: [
              { drugFormula: 'Levodopa + Karbidopa 100/25', mechanism: 'Suplementasi dopamin sentral di striatum otak', detailedSideEffects: 'Diskinesia koreoatetoid, fenomena on-off motorik', fdaCategory: 'C' },
              { drugFormula: 'Triheksifenidil 2mg', mechanism: 'Blokade reseptor muskarinik sentral striatum', detailedSideEffects: 'Mulut kering, retensi urin, halusinasi pada lansia', fdaCategory: 'C' },
              { drugFormula: 'Pramipeksol 0.375mg', mechanism: 'Agonis non-ergot reseptor dopamin D2/D3', detailedSideEffects: 'Serangan kantuk tiba-tiba ("sleep attacks")', fdaCategory: 'C' }
            ],
            relatedTabKey: 'interactions',
            relatedDrugName: 'Triheksifenidil'
          }
        ]
      },
      {
        id: 'sub-5-4',
        number: '5.4',
        title: 'Migren: Triptan vs Ergotamin & Bahaya PJK',
        items: [
          {
            id: 'note-5-4',
            chapterId: 'bab-5',
            chapterNumber: 'BAB 5',
            chapterTitle: 'Obat Neurologi',
            subChapterNumber: '5.4',
            subChapterTitle: 'Terapi Abortif Migren (Triptan vs Ergot)',
            breadcrumb: 'NEUROLOGI > MIGREN TRIPTAN VS ERGOT',
            categoryTag: 'NYERI KEPALA VASKULAR',
            heroMnemonic: 'Trip - Ergot Jepit Pembuluh',
            rhymeTagline: 'Triptan & Ergotamin menyempitkan pembuluh darah kepala; HARAM MUTLAK pada riwayat Penyakit Jantung Koroner!',
            syllableBreakdown: [
              { syllable: 'Triptan', drugName: 'Sumatriptan 50mg, Zolmitriptan', isDoen: true, badgeType: 'Agonis 5-HT1B/1D', typicalSideEffect: 'Sensasi dada tertekan ("Triptan sensations"), rasa hangat leher, pusing' },
              { syllable: 'Ergot', drugName: 'Ergotamin Tartrat + Kafein', isDoen: true, badgeType: 'Vasokonstriktor Kuat', typicalSideEffect: 'Mual muntah, vasospasme perifer jari tangan dingin (Ergotisme)' }
            ],
            clinicalKeyPearls: 'Triptan bekerja sangat selektif pada reseptor 5-HT1B (konstriksi pembuluh dural kranial) dan 5-HT1D (inhibisi neuropeptida inflamasi trigeminal). Harus diminum saat awal fase nyeri kepala, bukan saat aura visual.',
            clinicalWarnings: 'KONTRAINDIKASI MUTLAK PADA PENYAKIT JANTUNG KORONER (PJK), RIWAYAT INFARK MIOKARD, STROKE, DAN HIPERTENSI BERAT karena efek vasokonstriksi arteri koroner dapat memicu serangan jantung fatal.',
            comparisonTable: [
              { drugFormula: 'Sumatriptan 50mg', mechanism: 'Agonis selektif reseptor 5-HT1B/1D pembuluh kranial', detailedSideEffects: 'Rasa tertekan di dada, parestesia, mual', fdaCategory: 'C' },
              { drugFormula: 'Ergotamin 1mg + Kafein', mechanism: 'Agonis parsial alfa-adrenergik & reseptor serotonin', detailedSideEffects: 'Iskemia jari perifer, muntah, rebound headache', fdaCategory: 'X' },
              { drugFormula: 'Propranolol 40mg (Cegah)', mechanism: 'Profilaksis harian migren stabilisasi tonus vaskular', detailedSideEffects: 'Bradikardia, lemas, mimpi buruk', fdaCategory: 'C' }
            ],
            relatedTabKey: 'interactions',
            relatedDrugName: 'Propranolol'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // BAB 6: OBAT PSIKIATRI (3 TOPIK)
  // =========================================================================
  {
    id: 'bab-6',
    number: 'BAB 6',
    title: 'Obat Psikiatri',
    subChapters: [
      {
        id: 'sub-6-1',
        number: '6.1',
        title: 'Antidepresan SSRI: Flu-Ser-Sita & Sindrom Serotonin',
        items: [
          {
            id: 'note-6-1',
            chapterId: 'bab-6',
            chapterNumber: 'BAB 6',
            chapterTitle: 'Obat Psikiatri',
            subChapterNumber: '6.1',
            subChapterTitle: 'Antidepresan SSRI (Flu-Ser-Sita)',
            breadcrumb: 'PSIKIATRI > ANTIDEPRESAN SSRI',
            categoryTag: 'DEPRESI & CEMAS',
            heroMnemonic: 'Flu - Ser - Sita SSRI',
            rhymeTagline: 'Fluoksetin, Sertralin, Sitalopram lini pertama depresi; butuh waktu 2-4 minggu, waspada Sindrom Serotonin!',
            syllableBreakdown: [
              { syllable: 'Flu', drugName: 'Fluoksetin 20mg', isDoen: true, badgeType: 'Waktu Paruh Panjang', typicalSideEffect: 'Insomnia, agitasi awal, waktu paruh metabolit norfluoksetin hingga 1 minggu' },
              { syllable: 'Ser', drugName: 'Sertralin 50mg', isDoen: true, badgeType: 'Paling Aman Kardiak', typicalSideEffect: 'Pilihan utama pasien depresi pasca-infark miokard jantung; diare feses cair awal' },
              { syllable: 'Sita', drugName: 'Sitalopram / Esitalopram 10mg', isDoen: true, badgeType: 'Paling Selektif', typicalSideEffect: 'Perpanjangan interval QT jantung pada dosis > 40 mg/hari' }
            ],
            clinicalKeyPearls: 'Edukasi penting untuk pasien: Efek terapi antidepresan baru mulai terasa setelah 2 SAMPAI 4 MINGGU pemakaian teratur. Jangan menghentikan obat mendadak karena memicu sindrom putus obat (flu-like symptoms, insomnia).',
            clinicalWarnings: 'JANGAN PERNAH menggabungkan SSRI bersama MAO Inhibitor atau Tramadol/Linezolid dosis tinggi karena memicu SINDROM SEROTONIN MEMATIKAN (Trias: Hipertermia demam tinggi, Klonus mioklonus kejang, Ketidakstabilan otonom).',
            comparisonTable: [
              { drugFormula: 'Fluoksetin 20mg', mechanism: 'Inhibitor selektif reuptake serotonin presinaptik', detailedSideEffects: 'Disfungsi ereksi ejakulasi terlambat, mual', fdaCategory: 'C' },
              { drugFormula: 'Amitriptilin 25mg (TCA)', mechanism: 'Inhibisi non-selektif serotonin, NE & muskarinik', detailedSideEffects: 'Sedasi berat, mulut kering, aritmia mematikan', fdaCategory: 'C' },
              { drugFormula: 'Venlafaksin 75mg (SNRI)', mechanism: 'Inhibitor reuptake serotonin & norepinefrin', detailedSideEffects: 'Kenaikan tekanan darah diastolik', fdaCategory: 'C' }
            ],
            relatedTabKey: 'interactions',
            relatedDrugName: 'Fluoksetin'
          }
        ]
      },
      {
        id: 'sub-6-2',
        number: '6.2',
        title: 'Antipsikotik: Tipikal (Halo) vs Atipikal (Ris-Olan-Kloz)',
        items: [
          {
            id: 'note-6-2',
            chapterId: 'bab-6',
            chapterNumber: 'BAB 6',
            chapterTitle: 'Obat Psikiatri',
            subChapterNumber: '6.2',
            subChapterTitle: 'Tipikal EPS vs Atipikal Sindrom Metabolik',
            breadcrumb: 'PSIKIATRI > ANTIPSIKOTIK EPS METABOLIK',
            categoryTag: 'SKIZOFRENIA & PSIKOSIS',
            heroMnemonic: 'Halo EPS vs Ris - Olan - Kloz',
            rhymeTagline: 'Tipikal Haloperidol picu kaku leher EPS, Atipikal Risperidon-Olanzapin picu gemuk diabetes, Klozapin wajib cek darah!',
            syllableBreakdown: [
              { syllable: 'Halo (Tipikal)', drugName: 'Haloperidol 1.5-5 mg, Klorpromazin', isDoen: true, badgeType: 'Blokade D2 Kuat', typicalSideEffect: 'Gejala Ekstrapiramidal (EPS: Distonia kaku leher, Akatisia gelisah, Tardive Dyskinesia)' },
              { syllable: 'Ris (Atipikal)', drugName: 'Risperidon 2mg', isDoen: true, badgeType: 'D2 + 5-HT2A', typicalSideEffect: 'Hiperprolaktinemia (keluar air susu galaktorea, menstruasi berhenti amenore)' },
              { syllable: 'Olan (Atipikal)', drugName: 'Olanzapin 5-10 mg', isDoen: true, badgeType: 'Nafsu Makan Naik', typicalSideEffect: 'Kenaikan berat badan masif, hiperglikemia diabetes melitus, dislipidemia' },
              { syllable: 'Kloz (Refrakter)', drugName: 'Klozapin 25-100 mg', isDoen: true, badgeType: 'Paling Ampuh', typicalSideEffect: 'Agranulositosis penurunan drastis sel darah putih; wajib hitung leukosit darah rutin' }
            ],
            clinicalKeyPearls: 'Jika pasien yang mengonsumsi Haloperidol tiba-tiba mengalami distonia akut (leher kaku terpuntir/tortikolis atau mata mendelik ke atas/krisis okulogirik), antidot daruratnya adalah INJEKSI DIFENHIDRAMIN 50 mg IV/IM atau Triheksifenidil.',
            clinicalWarnings: 'Klozapin adalah obat ajaib untuk skizofrenia refrakter kebal obat, tetapi dapat menyebabkan Agranulositosis fatal (leukosit lenyap). Cek darah lengkap mingguan selama 6 bulan pertama terapi.',
            comparisonTable: [
              { drugFormula: 'Haloperidol 5mg', mechanism: 'Antagonis afinitas tinggi reseptor dopamin D2 mesolimbik', detailedSideEffects: 'Kaku otot EPS, sindrom neuroleptik maligna', fdaCategory: 'C' },
              { drugFormula: 'Olanzapin 10mg', mechanism: 'Antagonis serotonin 5-HT2A dan dopamin D2 afinitas sedang', detailedSideEffects: 'Kenaikan BB drastis, sindrom metabolik', fdaCategory: 'C' },
              { drugFormula: 'Klozapin 100mg', mechanism: 'Antagonis reseptor D4, 5-HT2A, alfa-1, muskarinik luas', detailedSideEffects: 'Agranulositosis mematikan, miokarditis, sedasi', fdaCategory: 'B' }
            ],
            relatedTabKey: 'interactions',
            relatedDrugName: 'Haloperidol'
          }
        ]
      },
      {
        id: 'sub-6-3',
        number: '6.3',
        title: 'Bipolar & Cemas: Litium Toksik & Ketergantungan Benzo',
        items: [
          {
            id: 'note-6-3',
            chapterId: 'bab-6',
            chapterNumber: 'BAB 6',
            chapterTitle: 'Obat Psikiatri',
            subChapterNumber: '6.3',
            subChapterTitle: 'Litium Rentang Sempit & Benzodiazepin',
            breadcrumb: 'PSIKIATRI > LITIUM & BENZODIAZEPIN',
            categoryTag: 'BIPOLAR & ANXIOLITIK',
            heroMnemonic: 'Litium Sempit • Benzo Singkat',
            rhymeTagline: 'Litium jendela sempit 0.6-1.2 waspada dehidrasi, Benzodiazepin maksimal 4 minggu cegah kecanduan adiksi!',
            syllableBreakdown: [
              { syllable: 'Litium', drugName: 'Litium Karbonat 200-400 mg', isDoen: true, badgeType: 'Jendela Sempit', typicalSideEffect: 'Tremor tangan kasar, poliuria haus diabetes insipidus, hipotiroidisme' },
              { syllable: 'Kadar 0.6-1.2', drugName: 'mEq/L Jendela Terapi', isDoen: true, badgeType: 'Pantau TDM', typicalSideEffect: 'Kadar > 1.5 toksik (muntah, ataksia jalan); kadar > 2.0 cuci darah hemodialisis' },
              { syllable: 'Benzo', drugName: 'Diazepam, Alprazolam, Lorazepam', isDoen: true, badgeType: 'Modulator GABA-A', typicalSideEffect: 'Toleransi dosis, ketergantungan fisik sakau bila distop tiba-tiba' }
            ],
            clinicalKeyPearls: 'Litium diekskresi 100% oleh ginjal melalui penanganan yang sama dengan Natrium. Jika pasien mengalami dehidrasi atau meminum obat antihipertensi Tiazid/ACE-I, ginjal akan menahan natrium sekaligus menahan litium ➔ Memicu KERACUNAN LITIUM MEMATIKAN.',
            clinicalWarnings: 'Benzodiazepin (Alprazolam, Diazepam) hanya boleh digunakan jangka pendek (maksimal 2-4 minggu). Penggunaan kronis memicu toleransi dan putus obat hebat (insomnia rebound, kejang withdrawal).',
            comparisonTable: [
              { drugFormula: 'Litium Karbonat 300mg', mechanism: 'Modulasi second messenger fosfoinositida & kinase GSK-3', detailedSideEffects: 'Tremor kasar, hipotiroid, nefrogenik DI', fdaCategory: 'D' },
              { drugFormula: 'Diazepam 5mg', mechanism: 'Meningkatkan frekuensi pembukaan kanal Cl- reseptor GABA-A', detailedSideEffects: 'Sedasi, ketergantungan fisik, ataksia', fdaCategory: 'D' },
              { drugFormula: 'Alprazolam 0.5mg', mechanism: 'Benzodiazepin potensi tinggi kerja singkat', detailedSideEffects: 'Potensi adiksi tinggi, amnesia anterograd', fdaCategory: 'D' }
            ],
            relatedTabKey: 'interactions',
            relatedDrugName: 'Diazepam'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // BAB 7: OBAT ENDOKRIN & METABOLIK (4 TOPIK)
  // =========================================================================
  {
    id: 'bab-7',
    number: 'BAB 7',
    title: 'Obat Endokrin & Metabolik',
    subChapters: [
      {
        id: 'sub-7-1',
        number: '7.1',
        title: 'OHO Diabetes Melitus: MET - SUL - GLI - AGI',
        items: [
          {
            id: 'note-7-1',
            chapterId: 'bab-7',
            chapterNumber: 'BAB 7',
            chapterTitle: 'Obat Endokrin & Metabolik',
            subChapterNumber: '7.1',
            subChapterTitle: 'Oral Antidiabetik (MET-SUL-GLI-AGI)',
            breadcrumb: 'ENDOKRIN > OHO MET-SUL-GLI-AGI',
            categoryTag: 'DIABETES MELITUS',
            heroMnemonic: 'MET - SUL - GLI - AGI',
            rhymeTagline: 'Metformin sensitifkan insulin, Sulfonilurea genjot sekresi bikin gemuk hipoglikemia, Glitazon tahan air, Acarbose hambat gula di usus!',
            syllableBreakdown: [
              { syllable: 'MET (Biguanid)', drugName: 'Metformin 500mg, 850mg', isDoen: true, badgeType: 'Lini 1 Mutlak', typicalSideEffect: 'Diare dispepsia rasa logam; asidosis laktat bila eGFR < 30' },
              { syllable: 'SUL (Sekretagog)', drugName: 'Glimepirid, Gliklazid, Glibenklamid', isDoen: true, badgeType: 'Pemicu Pankreas', typicalSideEffect: 'Risiko tinggi Hipoglikemia gemetar keringat dingin, kenaikan berat badan' },
              { syllable: 'GLI (TZD)', drugName: 'Pioglitazon 15-30 mg', isDoen: true, badgeType: 'PPAR-gamma', typicalSideEffect: 'Retensi cairan edema bengkak; KONTRAINDIKASI GAGAL JANTUNG!' },
              { syllable: 'AGI (Inhibitor Usus)', drugName: 'Acarbose 50-100 mg', isDoen: true, badgeType: 'Alfa-Glukosidase', typicalSideEffect: 'Sering kentut flatus, kembung bergas, feses lembek' }
            ],
            clinicalKeyPearls: 'Metformin diminum BERSAMA ATAU SEGERA SETELAH MAKAN untuk meminimalkan efek samping mual, kram perut dan diare. Acarbose WAJIB diminum PADA SUAPAN PERTAMA MAKANAN agar dapat langsung memblokir enzim pemecah karbohidrat di usus.',
            clinicalWarnings: 'Glibenklamid KONTRAINDIKASI PADA LANSIA GERIATRI karena waktu paruh metabolit aktifnya sangat panjang di ginjal sehingga menyebabkan hipoglikemia berat yang berkepanjangan hingga koma.',
            comparisonTable: [
              { drugFormula: 'Metformin 500mg', mechanism: 'Aktivasi AMPK, turunkan glukoneogenesis hepar', detailedSideEffects: 'Diare, asidosis laktat, defisiensi B12', fdaCategory: 'B' },
              { drugFormula: 'Glimepirid 2mg', mechanism: 'Tutup kanal K-ATP membran sel beta pankreas', detailedSideEffects: 'Hipoglikemia mendadak, kenaikan berat badan', fdaCategory: 'C' },
              { drugFormula: 'Pioglitazon 30mg', mechanism: 'Agonis reseptor PPAR-gamma adiposit & otot', detailedSideEffects: 'Edema cairan, perburukan gagal jantung NYHA', fdaCategory: 'C' }
            ],
            relatedTabKey: 'interactions',
            relatedDrugName: 'Metformin'
          }
        ]
      },
      {
        id: 'sub-7-2',
        number: '7.2',
        title: 'Spektrum Insulin: Lispro, Regular, NPH, Glargine',
        items: [
          {
            id: 'note-7-2',
            chapterId: 'bab-7',
            chapterNumber: 'BAB 7',
            chapterTitle: 'Obat Endokrin & Metabolik',
            subChapterNumber: '7.2',
            subChapterTitle: 'Profil Insulin Onset & Durasi',
            breadcrumb: 'ENDOKRIN > SPEKTRUM INSULIN LISP-REG-NPH-GLAR',
            categoryTag: 'INSULINOTERAPI',
            heroMnemonic: 'Lis - Reg - NPH - Glar',
            rhymeTagline: 'Lispro tepat sebelum makan, Regular 30 menit sebelum makan, NPH keruh digulingkan, Glargine bening tanpa puncak 24 jam!',
            syllableBreakdown: [
              { syllable: 'Lis (Rapid)', drugName: 'Insulin Lispro, Aspart, Glulisin', isDoen: true, badgeType: 'Onset 10-15 Mnt', typicalSideEffect: 'Bening; disuntikkan 5-15 menit sebelum suapan pertama makanan' },
              { syllable: 'Reg (Short)', drugName: 'Insulin Regular (Actrapid / Humulin R)', isDoen: true, badgeType: 'Satu-satunya Boleh IV', typicalSideEffect: 'Bening; wajib suntik 30 menit sebelum makan; baku emas terapi KAD via infus IV' },
              { syllable: 'NPH (Intermediate)', drugName: 'Insulin NPH (Insulatard / Humulin N)', isDoen: true, badgeType: 'Cairan Keruh Susu', typicalSideEffect: 'Keruh; wajib digulingkan di telapak tangan 10x; puncak kerja tajam 4-8 jam' },
              { syllable: 'Glar (Long Basal)', drugName: 'Insulin Glargine (Lantus), Detemir', isDoen: true, badgeType: '24 Jam Tanpa Puncak', typicalSideEffect: 'Bening; disuntikkan 1x sehari pada jam malam yang sama untuk mengontrol gula puasa' }
            ],
            clinicalKeyPearls: 'Rotasi lokasi penyuntikan insulin (perut, paha, lengan atas) sangat krusial untuk mencegah Lipohipertrofi (benjolan jaringan lemak yang membuat penyerapan insulin menjadi tidak menentu dan gula darah fluktuatif liar).',
            clinicalWarnings: 'Penyimpanan insulin: Insulin yang BELUM DIBUKA disimpan di lemari es (2-8°C). Insulin PEN YANG SEDANG DIGUNAKAN disimpan pada SUHU RUANG (< 30°C) dan memiliki Beyond Use Date (BUD) MAKSIMAL 28 HARI.',
            comparisonTable: [
              { drugFormula: 'Insulin Aspart (Rapid)', mechanism: 'Analog monomerik lepas cepat reseptor tirosin kinase', detailedSideEffects: 'Hipoglikemia prandial cepat, lipodistrofi', fdaCategory: 'B' },
              { drugFormula: 'Insulin Regular (Short)', mechanism: 'Heksamer seng insulin rekombinan manusia', detailedSideEffects: 'Hipoglikemia jika telat makan > 30 menit', fdaCategory: 'B' },
              { drugFormula: 'Insulin Glargine (Basal)', mechanism: 'Mikropresipitat heksamer lepas lambat stabil 24 jam', detailedSideEffects: 'Rasa perih di lokasi suntik karena pH asam 4', fdaCategory: 'C' }
            ],
            relatedTabKey: 'bud',
            relatedDrugName: 'Insulin Regular'
          }
        ]
      },
      {
        id: 'sub-7-3',
        number: '7.3',
        title: 'Kedaruratan Hipoglikemia: Rule of 15',
        items: [
          {
            id: 'note-7-3',
            chapterId: 'bab-7',
            chapterNumber: 'BAB 7',
            chapterTitle: 'Obat Endokrin & Metabolik',
            subChapterNumber: '7.3',
            subChapterTitle: 'Aturan 15 Penanganan Hipoglikemia',
            breadcrumb: 'ENDOKRIN > HIPOGLIKEMIA RULE OF 15',
            categoryTag: 'KEDARURATAN GULA',
            heroMnemonic: 'Rule of 15 Hipoglikemia',
            rhymeTagline: 'Gula < 70: Berikan 15 gram karbohidrat murni, tunggu 15 menit, cek ulang! Jika pingsan, guyur Dextrose 40% IV!',
            syllableBreakdown: [
              { syllable: 'Nilai Kritis', drugName: 'Gula Darah < 70 mg/dL', isDoen: true, badgeType: 'Gejala Adrenergik', typicalSideEffect: 'Tremor bergetar, keringat dingin membasahi baju, takikardia, gelisah, lapar' },
              { syllable: '15 Gram Karbo', drugName: 'Gula Murni Cepat Serap', isDoen: true, badgeType: 'Pertolongan Sadar', typicalSideEffect: '3 sendok teh gula pasir dilarutkan air, atau 1 gelas teh manis / permen' },
              { syllable: 'Tunggu 15 Mnt', drugName: 'Evaluasi Glukometer', isDoen: true, badgeType: 'Ukur Ulang', typicalSideEffect: 'Bila masih < 70 mg/dL, ulangi pemberian 15 gram gula lagi' },
              { syllable: 'Jika Pingsan', drugName: 'Dextrose 40% (D40) 2 Flacon IV', isDoen: true, badgeType: 'Jalur Darurat', typicalSideEffect: 'HARAM memasukkan makanan/cairan ke mulut pasien pingsan (bisa tersedak aspirasi paru)!' }
            ],
            clinicalKeyPearls: 'Pasien yang meminum obat Acarbose jika mengalami hipoglikemia WAJIB DIBERI GLUKOSA MURNI (Dekstrosa), BUKAN gula pasir biasa (Sukrosa). Acarbose menghambat pemecahan sukrosa menjadi glukosa, sehingga gula pasir tidak akan bekerja!',
            clinicalWarnings: 'Pasien yang meminum obat Beta-blocker (Bisoprolol/Propranolol) tidak akan merasakan gejala peringatan adrenergik hipoglikemia (tremor dan takikardia disamarkan obat), kecuali berkeringat dingin.',
            comparisonTable: [
              { drugFormula: 'Glukosa Murni 15g', mechanism: 'Diserap langsung usus halus menaikkan glikemia instan', detailedSideEffects: 'Gula darah melonjak normal dalam 10-15 menit', fdaCategory: 'A' },
              { drugFormula: 'Dextrose 40% (D40) 50ml', mechanism: 'Larutan hipertonik pekat injeksi IV langsung ke vena', detailedSideEffects: 'Flebitis iritasi vena bila jarum meleset ekstravasasi', fdaCategory: 'C' },
              { drugFormula: 'Glukagon 1mg IM/SC', mechanism: 'Rangsang glikogenolisis hepar cadangan glukosa hati', detailedSideEffects: 'Mual muntah setelah pasien tersadar', fdaCategory: 'B' }
            ],
            relatedTabKey: 'interactions',
            relatedDrugName: 'Metformin'
          }
        ]
      },
      {
        id: 'sub-7-4',
        number: '7.4',
        title: 'Obat Tiroid: PTU vs Metimazol vs Levotiroksin',
        items: [
          {
            id: 'note-7-4',
            chapterId: 'bab-7',
            chapterNumber: 'BAB 7',
            chapterTitle: 'Obat Endokrin & Metabolik',
            subChapterNumber: '7.4',
            subChapterTitle: 'Disfungsi Tiroid (PTU, Metimazol, Levotiroksin)',
            breadcrumb: 'ENDOKRIN > TIROID PTU METIMAZOL LEVOTIROKSIN',
            categoryTag: 'HORMON TIROID',
            heroMnemonic: 'PTU TM 1 • Metimazol TM 2-3 • Levo Pagi',
            rhymeTagline: 'PTU aman di Trimester 1 kehamilan, Metimazol lanjut Trimester 2 & 3, Levotiroksin wajib perut kosong pagi hari!',
            syllableBreakdown: [
              { syllable: 'PTU (Hipertiroid)', drugName: 'Propiltiourasil 100mg', isDoen: true, badgeType: 'TM 1 Hamil', typicalSideEffect: 'Ikatan protein tinggi (sedikit menembus plasenta); efek samping hepatotoksisitas berat nekrosis hepar' },
              { syllable: 'Metimazol', drugName: 'Metimazol / Tiamazol 10mg', isDoen: true, badgeType: 'TM 2-3 & Umum', typicalSideEffect: 'Pilihan utama non-hamil; KONTRAINDIKASI TM 1 karena memicu aplasia kutis kulit kepala janin' },
              { syllable: 'Levo (Hipotiroid)', drugName: 'Levotiroksin (Euthyrox) 50-100mcg', isDoen: true, badgeType: 'Hormon T4 Pengganti', typicalSideEffect: 'Wajib diminum pagi hari 30-60 menit sebelum sarapan; kopi & kalsium merusak serapannya' }
            ],
            clinicalKeyPearls: 'Pergantian obat antitiroid pada kehamilan: Trimester 1 gunakan PTU untuk menghindari malformasi kongenital janin. Masuki Trimester 2 & 3 ganti ke Metimazol untuk menghindari risiko gagal hati fulminan akibat toksisitas PTU pada ibu.',
            clinicalWarnings: 'Levotiroksin harus dipisahkan minimal 4 JAM dari suplemen Kalsium, Zat Besi (Fe), Antasida, dan Kedelai karena membentuk kelasi yang menggagalkan absorpsi hormon tiroid.',
            comparisonTable: [
              { drugFormula: 'PTU 100mg', mechanism: 'Hambat enzim tiroid peroksidase & konversi T4 ke T3 perifer', detailedSideEffects: 'Kerusakan hati hepatotoksik berat, agranulositosis', fdaCategory: 'D' },
              { drugFormula: 'Metimazol 10mg', mechanism: 'Hambat iodinasi tirosin & sintesis hormon tiroid', detailedSideEffects: 'Aplasia kutis janin TM 1, ruam alergi kulit', fdaCategory: 'D' },
              { drugFormula: 'Levotiroksin 100mcg', mechanism: 'Hormon tiroksin sintetik isomer levotranskripsi T4', detailedSideEffects: 'Takikardia palpitasi bila dosis terlalu tinggi', fdaCategory: 'A' }
            ],
            relatedTabKey: 'pregnancy',
            relatedDrugName: 'Levotiroksin'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // BAB 8: OBAT TUBERKULOSIS & KUSTA (2 TOPIK)
  // =========================================================================
  {
    id: 'bab-8',
    number: 'BAB 8',
    title: 'Obat Tuberkulosis & Kusta',
    subChapters: [
      {
        id: 'sub-8-1',
        number: '8.1',
        title: 'OAT Lini Pertama: R-I-P-E-S & Efek Samping Khas',
        items: [
          {
            id: 'note-8-1',
            chapterId: 'bab-8',
            chapterNumber: 'BAB 8',
            chapterTitle: 'Obat Tuberkulosis & Kusta',
            subChapterNumber: '8.1',
            subChapterTitle: 'OAT Lini Pertama (R-I-P-E-S)',
            breadcrumb: 'ANTIINFEKSI > OAT LINI PERTAMA RIPES',
            categoryTag: 'TUBERKULOSIS',
            heroMnemonic: 'R - I - P - E - S Tuberkulosis',
            rhymeTagline: 'R kencing merah, I kesemutan butuh B6, P asam urat encok, E mata kabur buta warna, S telinga tuli ginjal jebol!',
            syllableBreakdown: [
              { syllable: 'R (Rifampisin)', drugName: 'Rifampisin 450-600 mg', isDoen: true, badgeType: 'Kencing Merah', typicalSideEffect: 'Urin, keringat & air mata oranye kemerahan; enzim inducer CYP3A4 terkuat (gagal pil KB)' },
              { syllable: 'I (Isoniazid/INH)', drugName: 'Isoniazid 300 mg', isDoen: true, badgeType: 'Wajib Vit B6', typicalSideEffect: 'Neuropati perifer kesemutan; wajib disandingkan Piridoksin (Vit B6) 10-25mg harian' },
              { syllable: 'P (Pirazinamid)', drugName: 'Pirazinamid 1000-1500 mg', isDoen: true, badgeType: 'Asam Urat Sendi', typicalSideEffect: 'Hiperurisemia nyeri sendi gout, paling hepatotoksik di antara semua OAT' },
              { syllable: 'E (Etambutol)', drugName: 'Etambutol 750-1000 mg', isDoen: true, badgeType: 'Mata Buta Warna', typicalSideEffect: 'Neuritis retrobulbar, penurunan visus, buta warna merah-hijau; KONTRA ANAK < 5 TAHUN' },
              { syllable: 'S (Streptomisin)', drugName: 'Streptomisin Injeksi 1g', isDoen: true, badgeType: 'Ototoksik Injeksi', typicalSideEffect: 'Tuli saraf permanen, nefrotoksisitas ginjal; KONTRAINDIKASI PADA KEHAMILAN' }
            ],
            clinicalKeyPearls: 'Rifampisin adalah INDUSER ENZIM CYP3A4 TERKUAT di dunia medis. Penggunaan Rifampisin bersama Pil KB kontrasepsi hormonal atau ARV Nevirapin akan menghancurkan kadar obat tersebut di darah sehingga pil KB gagal dan terjadi kehamilan tak diinginkan!',
            clinicalWarnings: 'Jika SGOT/SGPT naik > 5x lipat batas atas normal (atau > 3x lipat disertai ikterus kuning klinis), SELURUH OAT HEPATOTOKSIK (R, I, P) WAJIB DIHENTIKAN SEGERA!',
            comparisonTable: [
              { drugFormula: 'Rifampisin 450mg', mechanism: 'Inhibisi RNA polimerase dependen-DNA mikobakteri', detailedSideEffects: 'Cairan tubuh merah-oranye, induksi sitokrom P450', fdaCategory: 'C' },
              { drugFormula: 'Isoniazid 300mg', mechanism: 'Hambat sintesis asam mikolat dinding sel mikobakteri', detailedSideEffects: 'Kesemutan neuropati perifer, hepatitis hepar', fdaCategory: 'C' },
              { drugFormula: 'Etambutol 1000mg', mechanism: 'Hambat arabinosil transferase dinding sel bakteri', detailedSideEffects: 'Neuritis optik, buta warna merah-hijau', fdaCategory: 'C' }
            ],
            relatedTabKey: 'interactions',
            relatedDrugName: 'Rifampisin'
          }
        ]
      },
      {
        id: 'sub-8-2',
        number: '8.2',
        title: 'Regimen Kusta MDT WHO: R-D-C (PB vs MB)',
        items: [
          {
            id: 'note-8-2',
            chapterId: 'bab-8',
            chapterNumber: 'BAB 8',
            chapterTitle: 'Obat Tuberkulosis & Kusta',
            subChapterNumber: '8.2',
            subChapterTitle: 'MDT Kusta WHO (R-D-C)',
            breadcrumb: 'ANTIINFEKSI > REGIMEN KUSTA MDT R-D-C',
            categoryTag: 'LEPRA & KUSTA',
            heroMnemonic: 'R - D - C Kusta',
            rhymeTagline: 'Rifampisin sebulan sekali, Dapson tiap hari hambat folat, Klofazimin harian bikin kulit gelap kecoklatan!',
            syllableBreakdown: [
              { syllable: 'R (Rifampisin)', drugName: 'Rifampisin 600mg Bulanan', isDoen: true, badgeType: 'Dosis Pengawasan', typicalSideEffect: 'Diminum di depan petugas kesehatan sebulan sekali untuk bakterisidal masif' },
              { syllable: 'D (Dapson)', drugName: 'Dapson (DDS) 100mg Harian', isDoen: true, badgeType: 'Harian Mandiri', typicalSideEffect: 'Inhibitor folat; efek samping anemia hemolitik (waspada defisiensi G6PD) & methemoglobinemia' },
              { syllable: 'C (Klofazimin)', drugName: 'Klofazimin (Lamprene) 50-300mg', isDoen: true, badgeType: 'Kulit Kehitaman', typicalSideEffect: 'Hiperpigmentasi kulit coklat kemerahan hingga kehitaman; ikterus mata ikterik' }
            ],
            clinicalKeyPearls: 'Klasifikasi Kusta WHO: Pausibasiler / Kusta Kering (PB: bercak kusta 1-5 buah) diobati selama 6 BULAN (hanya Rifampisin + Dapson). Multibasiler / Kusta Basah (MB: bercak > 5 buah) diobati 12 BULAN penuh menggunakan triplet (Rifampisin + Dapson + Klofazimin).',
            clinicalWarnings: 'Edukasi penting untuk pasien kusta: Perubahan warna kulit menjadi coklat gelap/kehitaman akibat Klofazimin bersifat REVERSIBEL (warna kulit akan kembali normal secara perlahan setelah terapi obat selesai).',
            comparisonTable: [
              { drugFormula: 'Dapson 100mg', mechanism: 'Antagonis kompetitif PABA sintesis asam folat lepra', detailedSideEffects: 'Anemia hemolitik, sindrom hipersensitivitas dapson', fdaCategory: 'C' },
              { drugFormula: 'Klofazimin 100mg', mechanism: 'Pengikatan DNA mikobakterium & antiinflamasi ENL', detailedSideEffects: 'Kulit coklat kemerahan gelap, ikterus mata', fdaCategory: 'C' }
            ],
            relatedTabKey: 'interactions',
            relatedDrugName: 'Rifampisin'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // BAB 9: OBAT ANTIBIOTIK (4 TOPIK)
  // =========================================================================
  {
    id: 'bab-9',
    number: 'BAB 9',
    title: 'Obat Antibiotik',
    subChapters: [
      {
        id: 'sub-9-1',
        number: '9.1',
        title: 'Sefalosporin Generasi 1-5: Fa-Fur-Tri-Pi-Rol',
        items: [
          {
            id: 'note-9-1',
            chapterId: 'bab-9',
            chapterNumber: 'BAB 9',
            chapterTitle: 'Obat Antibiotik',
            subChapterNumber: '9.1',
            subChapterTitle: 'Sefalosporin Generasi 1-5 (Fa-Fur-Tri-Pi-Rol)',
            breadcrumb: 'ANTIBIOTIK > SEFALOSPORIN GEN 1-5',
            categoryTag: 'BETA LAKTAM',
            heroMnemonic: 'Fa - Fur - Tri - Pi - Rol',
            rhymeTagline: 'Gen 1 Fa kuman kulit positif, Gen 2 Fur/Xim kuman anaerob, Gen 3 Tri/Tax tembus cairan otak, Gen 4 Cefepime luas, Gen 5 Ceftaroline libas MRSA!',
            syllableBreakdown: [
              { syllable: 'Gen 1 (Fa/Zol)', drugName: 'Sefadroksil, Sefaleksin, Sefazolin', isDoen: true, badgeType: 'Gram Positif Kulit', typicalSideEffect: 'Pilihan utama infeksi kulit Stafilokokus & profilaksis bedah orthopedi' },
              { syllable: 'Gen 2 (Fur/Xim)', drugName: 'Sefuroksim, Sefaksilor, Sefoksitin', isDoen: true, badgeType: 'Gram Negatif & Anaerob', typicalSideEffect: 'Infeksi saluran napas, sinusitis, profilaksis bedah kolorektal' },
              { syllable: 'Gen 3 (Tri/Tax/Taz)', drugName: 'Seftriakson, Sefotaksim, Seftazidim', isDoen: true, badgeType: 'Tembus Cairan Otak', typicalSideEffect: 'Baku emas meningitis bakteri (menembus BBB); Seftazidim khusus Pseudomonas' },
              { syllable: 'Gen 4 (Pi)', drugName: 'Sefepim (Cefepime) 1g IV', isDoen: true, badgeType: 'Pseudomonas & ICU', typicalSideEffect: 'Spektrum sangat luas Gram positif & negatif; waspada neurotoksisitas' },
              { syllable: 'Gen 5 (Rol)', drugName: 'Seftarolin (Ceftaroline) IV', isDoen: false, badgeType: 'Anti-MRSA', typicalSideEffect: 'Satu-satunya sefalosporin yang mampu mengikat PBP2a pada MRSA resisten!' }
            ],
            clinicalKeyPearls: 'Aturan Seftriakson: Diekskresi seimbang lewat hepar dan ginjal sehingga TIDAK PERLU penyesuaian dosis pada gagal ginjal. Diberikan cukup 1-2 gram 1x SEHARI karena waktu paruh eliminasi panjang (8 jam).',
            clinicalWarnings: 'KONTRAINDIKASI FATAL SEFTRIAKSON PADA NEONATUS: Dilarang keras mencampur Seftriakson bersamaan dengan larutan infus yang mengandung KALSIUM (misal Ringer Laktat) karena memicu presipitasi garam kalsium-seftriakson kristal mikro di paru dan ginjal yang mematikan!',
            comparisonTable: [
              { drugFormula: 'Sefadroksil 500mg (Gen 1)', mechanism: 'Inhibisi sintesis peptidoglikan dinding sel Gram +', detailedSideEffects: 'Alergi ruam kulit, dispepsia mual', fdaCategory: 'B' },
              { drugFormula: 'Seftriakson 1g IV (Gen 3)', mechanism: 'Penetrasi sawar darah otak membran sel meningeal', detailedSideEffects: 'Biliary sludging (endapan empedu), diare C. diff', fdaCategory: 'B' },
              { drugFormula: 'Seftarolin 600mg (Gen 5)', mechanism: 'Afinitas tinggi pada Penicillin Binding Protein 2a MRSA', detailedSideEffects: 'Tes Coombs positif, pruritus', fdaCategory: 'B' }
            ],
            relatedTabKey: 'interactions',
            relatedDrugName: 'Seftriakson'
          }
        ]
      },
      {
        id: 'sub-9-2',
        number: '9.2',
        title: 'Aminoglikosida & Glikopeptida: Gen-Ami-Vanko & Red Man',
        items: [
          {
            id: 'note-9-2',
            chapterId: 'bab-9',
            chapterNumber: 'BAB 9',
            chapterTitle: 'Obat Antibiotik',
            subChapterNumber: '9.2',
            subChapterTitle: 'Toksisitas Gen-Ami-Vanko & Red Man',
            breadcrumb: 'ANTIBIOTIK > AMINOGLIKOSIDA & VANKOMISIN',
            categoryTag: 'ANTIBIOTIK TOKSIK TDM',
            heroMnemonic: 'Gen - Ami - Vanko TDM',
            rhymeTagline: 'Gentamisin & Amikasin jebol nefron ginjal & telinga dengar, Vankomisin infus ngebut bikin Red Man Syndrome memerah!',
            syllableBreakdown: [
              { syllable: 'Gen (Gentamisin)', drugName: 'Gentamisin 80mg Injeksi', isDoen: true, badgeType: 'Nefro & Ototoksik', typicalSideEffect: 'Nekrosis tubulus ginjal akut, kerusakan saraf kranial VIII telinga vestibular' },
              { syllable: 'Ami (Amikasin)', drugName: 'Amikasin Injeksi IV', isDoen: true, badgeType: 'Kuman Resisten', typicalSideEffect: 'Lebih tahan enzim pemecah aminoglikosida; wajib pantau kreatinin berkala' },
              { syllable: 'Vanko (Glikopeptida)', drugName: 'Vankomisin 500mg-1g IV', isDoen: true, badgeType: 'Baku Emas MRSA', typicalSideEffect: 'Red Man Syndrome (kemerahan gatal leher & dada akibat infus terlalu cepat)' }
            ],
            clinicalKeyPearls: 'Pencegahan Red Man Syndrome Vankomisin: Vankomisin BUKAN alergi sejati, melainkan degranulasi histamin langsung. Wajib diencerkan minimal 100-250 ml cairan dan diinfus LAMBAT MINIMAL 60 SAMPAI 120 MENIT.',
            clinicalWarnings: 'Aminoglikosida dan Vankomisin memiliki Therapeutic Drug Monitoring (TDM) sempit. Selalu periksa kadar TROUGH LEVEL (palung) darah 30 menit tepat sebelum dosis berikutnya diberikan.',
            comparisonTable: [
              { drugFormula: 'Gentamisin 80mg Ampul', mechanism: 'Bakterisidal ikatan ireversibel ribosom subunit 30S', detailedSideEffects: 'Tuli permanen, penurunan klirens kreatinin ginjal', fdaCategory: 'D' },
              { drugFormula: 'Vankomisin 1g Vial', mechanism: 'Mengikat D-Ala-D-Ala blokade polimerisasi dinding sel', detailedSideEffects: 'Red Man Syndrome, nefrotoksisitas sinergis', fdaCategory: 'C' }
            ],
            relatedTabKey: 'interactions',
            relatedDrugName: 'Gentamisin'
          }
        ]
      },
      {
        id: 'sub-9-3',
        number: '9.3',
        title: 'Kuinolon & Makrolida: Tendon, QT & Interaksi Kation',
        items: [
          {
            id: 'note-9-3',
            chapterId: 'bab-9',
            chapterNumber: 'BAB 9',
            chapterTitle: 'Obat Antibiotik',
            subChapterNumber: '9.3',
            subChapterTitle: 'Kuinolon & Makrolida (Tendon & QT)',
            breadcrumb: 'ANTIBIOTIK > KUINOLON & MAKROLIDA',
            categoryTag: 'DNA & MAKROLIDA',
            heroMnemonic: 'Sipro - Levo • Azi - Klari',
            rhymeTagline: 'Kuinolon robek tendon achilles & terikat susu antasida, Makrolida perpanjang interval QT picu aritmia jantung!',
            syllableBreakdown: [
              { syllable: 'Sipro / Levo', drugName: 'Siprofloksasin, Levofloksasin', isDoen: true, badgeType: 'DNA Girase', typicalSideEffect: 'Tendinitis & ruptur tendon Achilles, disekuilibrium glikemia, neuropati perifer' },
              { syllable: 'Kelasi Kation', drugName: 'Antasida, Susu Kalsium, Zat Besi', isDoen: true, badgeType: 'Interaksi Absorpsi', typicalSideEffect: 'Kation divalen mengikat kuinolon menjadi kelat tidak larut; efektivitas lenyap 80%' },
              { syllable: 'Azi / Klari', drugName: 'Azitromisin, Klaritromisin', isDoen: true, badgeType: 'Ribosom 50S', typicalSideEffect: 'Perpanjangan interval QT aritmia Torsades de Pointes; mual kram perut motilin' }
            ],
            clinicalKeyPearls: 'Aturan jeda Kuinolon: Beri jarak minimal 2 jam SEBELUM atau 4 jam SESUDAH minum susu, antasida, atau suplemen kalsium/zat besi untuk mencegah kegagalan terapi infeksi.',
            clinicalWarnings: 'KUINOLON KONTRAINDIKASI PADA ANAK < 18 TAHUN & IBU HAMIL karena studi hewan membuktikan toksisitas nekrosis kartilago sendi pertumbuhan tulang rawan (artropati sendi).',
            comparisonTable: [
              { drugFormula: 'Siprofloksasin 500mg', mechanism: 'Inhibisi topoisomerase II (DNA girase) & topoisomerase IV', detailedSideEffects: 'Ruptur tendon Achilles, kelasi susu, fotosensitivitas', fdaCategory: 'C' },
              { drugFormula: 'Azitromisin 500mg', mechanism: 'Inhibisi sintesis protein translokasi ribosom 50S', detailedSideEffects: 'Aritmia perpanjangan QT, diare motilitas usus', fdaCategory: 'B' },
              { drugFormula: 'Klaritromisin 500mg', mechanism: 'Inhibitor kuat enzim hepatik sitokrom CYP3A4', detailedSideEffects: 'Rasa pahit mulut, interaksi berbahaya statin', fdaCategory: 'C' }
            ],
            relatedTabKey: 'interactions',
            relatedDrugName: 'Siprofloksasin'
          }
        ]
      },
      {
        id: 'sub-9-4',
        number: '9.4',
        title: 'Antibiotik Larangan Khusus: Klor-Tetra-Sulfa',
        items: [
          {
            id: 'note-9-4',
            chapterId: 'bab-9',
            chapterNumber: 'BAB 9',
            chapterTitle: 'Obat Antibiotik',
            subChapterNumber: '9.4',
            subChapterTitle: 'Larangan Klor-Tetra-Sulfa',
            breadcrumb: 'ANTIBIOTIK > TOKSISITAS SPESIFIK KLOR-TETRA-SULFA',
            categoryTag: 'TOKSISITAS POPULASI KHUSUS',
            heroMnemonic: 'Klor - Tetra - Sulfa Bahaya',
            rhymeTagline: 'Kloramfenikol Gray Baby Syndrome & aplastik, Tetrasiklin gigi kuning anak, Sulfametoksazol kernikterus bayi kuning!',
            syllableBreakdown: [
              { syllable: 'Klor', drugName: 'Kloramfenikol Kapsul & Tetes', isDoen: true, badgeType: 'Gray Baby Syndrome', typicalSideEffect: 'Bayi prematur defisiensi glukuronidasi: sianosis abu-abu kolaps sirkulasi fatal & anemia aplastik' },
              { syllable: 'Tetra', drugName: 'Tetrasiklin, Doksisiklin', isDoen: true, badgeType: 'Diskolorisasi Gigi', typicalSideEffect: 'Mengikat kalsium hidroksiapatit: pewarnaan kuning-coklat permanen gigi anak < 8 th' },
              { syllable: 'Sulfa', drugName: 'Kotrimoksazol (TMP-SMX)', isDoen: true, badgeType: 'Kernikterus Neonatus', typicalSideEffect: 'Menggeser bilirubin dari albumin: penumpukan bilirubin di otak bayi kernikterus' }
            ],
            clinicalKeyPearls: 'Doksisiklin diminum dengan 1 GELAS PENUH AIR PUTIH dalam posisi TEGAK / BERDIRI, dan tidak boleh langsung berbaring minimal 30 menit untuk mencegah pil tersangkut di kerongkongan memicu Esofagitis Ulseratif erosif.',
            clinicalWarnings: 'Kotrimoksazol (Sulfametoksazol-Trimetoprim) KONTRAINDIKASI PADA WANITA HAMIL ATERM & BAYI BARU LAHIR < 2 BULAN karena risiko ensefalopati bilirubin (Kernikterus) yang merusak otak bayi permanen.',
            comparisonTable: [
              { drugFormula: 'Kloramfenikol 500mg', mechanism: 'Inhibisi peptidil transferase ribosom bakteri 50S', detailedSideEffects: 'Gray Baby Syndrome, supresi sumsum tulang', fdaCategory: 'C' },
              { drugFormula: 'Doksisiklin 100mg', mechanism: 'Blokade penempelan aminoasil-tRNA ribosom 30S', detailedSideEffects: 'Gigi kuning anak, iritasi esofagus, fotosensitif', fdaCategory: 'D' },
              { drugFormula: 'Kotrimoksazol 960mg', mechanism: 'Blokade ganda jalur asam folat bakteri (DHPS & DHFR)', detailedSideEffects: 'Sindrom Stevens-Johnson, kernikterus, hiperkalemia', fdaCategory: 'D' }
            ],
            relatedTabKey: 'interactions',
            relatedDrugName: 'Doksisiklin'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // BAB 10: OBAT ANTIHELMINTIK (2 TOPIK)
  // =========================================================================
  {
    id: 'bab-10',
    number: 'BAB 10',
    title: 'Obat Antihelmintik',
    subChapters: [
      {
        id: 'sub-10-1',
        number: '10.1',
        title: 'Cacing Usus: Pirantel vs Albendazol & Mebendazol',
        items: [
          {
            id: 'note-10-1',
            chapterId: 'bab-10',
            chapterNumber: 'BAB 10',
            chapterTitle: 'Obat Antihelmintik',
            subChapterNumber: '10.1',
            subChapterTitle: 'Nematoda Usus (Pirantel vs Albendazol)',
            breadcrumb: 'ANTIHELMINTIK > CACING USUS PIRANTEL ALBENDAZOL',
            categoryTag: 'ANTI CACING',
            heroMnemonic: 'Pirantel Lumpuh • Albendazol Lapar',
            rhymeTagline: 'Pirantel bikin cacing kram lumpuh spastik, Albendazol bikin cacing kelaparan hambat mikrotubulus tubulin!',
            syllableBreakdown: [
              { syllable: 'Pirantel', drugName: 'Pirantel Pamoat 10-11 mg/kgBB', isDoen: true, badgeType: 'Lumpuh Spastik', typicalSideEffect: 'Depolarisasi neuromuskular cacing; cacing lepas dari dinding usus dan keluar lemas utuh lewat feses' },
              { syllable: 'Albendazol', drugName: 'Albendazol 400mg Dosis Tunggal', isDoen: true, badgeType: 'Hambat Tubulin', typicalSideEffect: 'Inhibisi polimerisasi tubulin menghentikan serapan glukosa; cacing mati kelaparan tercerna hancur' },
              { syllable: 'Mebendazol', drugName: 'Mebendazol 500mg Single Dose', isDoen: true, badgeType: 'Kurang Diserap', typicalSideEffect: 'Absorpsi usus < 10%; bekerja lokal di saluran cerna dengan efek samping sistemik sangat rendah' }
            ],
            clinicalKeyPearls: 'Aturan minum Albendazol: Jika infeksi berada di DALAM RONGGA USUS (cacing kremi, gelang, tambang), diminum PERUT KOSONG agar tidak terserap dan bekerja lokal. Jika infeksi berada di JARINGAN SISTEMIK (Kista hidatidosa / Neurocysticercosis), WAJIB diminum BERSAMA MAKANAN BERLEMAK untuk melipatgandakan absorpsi obat ke darah.',
            clinicalWarnings: 'Albendazol dan Mebendazol KONTRAINDIKASI PADA TRIMESTER 1 KEHAMILAN karena terbukti teratogenik dan embriotoksik pada studi hewan. Pada ibu hamil yang cacingan, gunakan Pirantel Pamoat yang tidak diserap ke darah.',
            comparisonTable: [
              { drugFormula: 'Pirantel Pamoat 250mg', mechanism: 'Agonis reseptor asetilkolin nikotinik neuromuskular cacing', detailedSideEffects: 'Kram perut mual ringan, feses keluar cacing lemas', fdaCategory: 'C' },
              { drugFormula: 'Albendazol 400mg Tab', mechanism: 'Degenerasi sitoplasma mikrotubulus hambat serap glukosa', detailedSideEffects: 'Peningkatan enzim hati transaminase, alopesia', fdaCategory: 'C' }
            ],
            relatedTabKey: 'drugs',
            relatedDrugName: 'Albendazol'
          }
        ]
      },
      {
        id: 'sub-10-2',
        number: '10.2',
        title: 'Filariasis & Cacing Pipih: DEC vs Praziquantel',
        items: [
          {
            id: 'note-10-2',
            chapterId: 'bab-10',
            chapterNumber: 'BAB 10',
            chapterTitle: 'Obat Antihelmintik',
            subChapterNumber: '10.2',
            subChapterTitle: 'Kaki Gajah & Cacing Pita (DEC vs Praziquantel)',
            breadcrumb: 'ANTIHELMINTIK > FILARIASIS & TREMATODA',
            categoryTag: 'CACING SISTEMIK',
            heroMnemonic: 'DEC Kaki Gajah • Prazi Cacing Pita',
            rhymeTagline: 'DEC basmi mikrofilaria kaki gajah, Praziquantel lumpuhkan cacing pita & Schistosoma!',
            syllableBreakdown: [
              { syllable: 'DEC', drugName: 'Dietilkarbamazin Sitrat (DEC) 6 mg/kg', isDoen: true, badgeType: 'Filariasis', typicalSideEffect: 'Reaksi Mazzotti (demam menggigil, ruam kulit, sakit kepala akibat bangkai cacing mati)' },
              { syllable: 'Prazi', drugName: 'Praziquantel 20-40 mg/kg', isDoen: true, badgeType: 'Cestoda & Trematoda', typicalSideEffect: 'Meningkatkan permeabilitas kalsium membran cacing pita Taenia & Schistosoma' }
            ],
            clinicalKeyPearls: 'Reaksi Mazzotti pada terapi DEC: Semakin tinggi kepadatan mikrofilaria dalam darah pasien, semakin hebat reaksi demam, takikardia, dan radang kelenjar getah bening. Berikan Parasetamol atau Kortikosteroid untuk meredakan reaksi imun ini.',
            clinicalWarnings: 'Praziquantel tablet memiliki rasa yang sangat pahit menyengat. Telan utuh dengan air putih; JANGAN DIKUNYAH karena rasa pahitnya dapat memicu refleks mual muntah seketika.',
            comparisonTable: [
              { drugFormula: 'DEC 100mg Tab', mechanism: 'Imobilisasi mikrofilaria merangsang fagositosis imun inang', detailedSideEffects: 'Demam reaksi Mazzotti, limfadenitis ketiak/selangkangan', fdaCategory: 'C' },
              { drugFormula: 'Praziquantel 600mg', mechanism: 'Spasme paralitik kontraksi otot via influks kalsium masif', detailedSideEffects: 'Pusing mengantuk, mual rasa pahit di lidah', fdaCategory: 'B' }
            ],
            relatedTabKey: 'drugs',
            relatedDrugName: 'Albendazol'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // BAB 11: OBAT ANTIMALARIA (2 TOPIK)
  // =========================================================================
  {
    id: 'bab-11',
    number: 'BAB 11',
    title: 'Obat Antimalaria',
    subChapters: [
      {
        id: 'sub-11-1',
        number: '11.1',
        title: 'Lini Pertama ACT: DHP + Primakuin (Falsiparum vs Vivaks)',
        items: [
          {
            id: 'note-11-1',
            chapterId: 'bab-11',
            chapterNumber: 'BAB 11',
            chapterTitle: 'Obat Antimalaria',
            subChapterNumber: '11.1',
            subChapterTitle: 'Lini Pertama ACT Nasional (DHP + Primakuin)',
            breadcrumb: 'ANTIMALARIA > LINI PERTAMA DHP PRIMAKUIN',
            categoryTag: 'MALARIA PROGRAM',
            heroMnemonic: 'DHP 3 Hari • Prima Vivaks 14 Hari',
            rhymeTagline: 'Falsiparum & Vivaks pakai DHP 3 hari, Vivaks & Ovale wajib Primakuin 14 hari sapu bersih hipnozoit hepar!',
            syllableBreakdown: [
              { syllable: 'DHP', drugName: 'Dihidroartemisinin + Piperakuin', isDoen: true, badgeType: 'ACT 3 Hari', typicalSideEffect: 'Kombinasi artemisinin membunuh parasit darah cepat; piperakuin mencegah rekrudesensi' },
              { syllable: 'Prima (Fal)', drugName: 'Primakuin 0.75 mg/kgBB (1 Hari)', isDoen: true, badgeType: 'Gametosida', typicalSideEffect: 'Membunuh gametosit seksual P. falciparum untuk memutus penularan ke nyamuk' },
              { syllable: 'Prima (Viv)', drugName: 'Primakuin 0.25 mg/kgBB (14 Hari)', isDoen: true, badgeType: 'Hipnozoit 14 Hari', typicalSideEffect: 'Wajib 14 hari penuh untuk membasmi bentuk tidur (hipnozoit) di sel hati pencegah relaps' }
            ],
            clinicalKeyPearls: 'DHP diminum bersama segelas air setelah makan. Jangan memberikan Kina sebagai lini pertama kecuali ACT benar-benar tidak tersedia, karena Kina memiliki indeks terapi sempit dan risiko hipoglikemia berat.',
            clinicalWarnings: 'Primakuin KONTRAINDIKASI MUTLAK PADA IBU HAMIL DAN BAYI < 6 BULAN karena risiko hemolisis berat pada janin yang belum memiliki enzim G6PD matang.',
            comparisonTable: [
              { drugFormula: 'DHP Tablet (40/320mg)', mechanism: 'Endoperoksida radikal bebas merusak vakuola parasit', detailedSideEffects: 'Mual ringan, perpanjangan interval QTc minimal', fdaCategory: 'C' },
              { drugFormula: 'Primakuin 15mg Tab', mechanism: 'Membentuk metabolit elektrofilik perusak mitokondria parasit', detailedSideEffects: 'Anemia hemolitik pada defisiensi G6PD, methemoglobinemia', fdaCategory: 'C' }
            ],
            relatedTabKey: 'interactions',
            relatedDrugName: 'Primakuin'
          }
        ]
      },
      {
        id: 'sub-11-2',
        number: '11.2',
        title: 'Skrining Enzim G6PD & Kedaruratan Artesunat IV',
        items: [
          {
            id: 'note-11-2',
            chapterId: 'bab-11',
            chapterNumber: 'BAB 11',
            chapterTitle: 'Obat Antimalaria',
            subChapterNumber: '11.2',
            subChapterTitle: 'Skrining G6PD & Malaria Berat (Artesunat IV)',
            breadcrumb: 'ANTIMALARIA > SKRINING G6PD & ARTESUNAT IV',
            categoryTag: 'MALARIA BERAT & KEAMANAN',
            heroMnemonic: 'Skrining G6PD • Artesunat Jam 0-12-24',
            rhymeTagline: 'Skrining G6PD mutlak sebelum Primakuin cegah kencing hitam berdarah, Malaria serebral darurat Artesunat IV jam 0, 12, 24!',
            syllableBreakdown: [
              { syllable: 'G6PD Defisit', drugName: 'Uji Rapid Tes G6PD', isDoen: true, badgeType: 'Cegah Hemolisis', typicalSideEffect: 'Tanpa G6PD, eritrosit pecah masif akibat metabolit oksidan Primakuin (Blackwater Fever)' },
              { syllable: 'Artesunat IV', drugName: 'Artesunat Serbuk Injeksi 60mg', isDoen: true, badgeType: 'Baku Emas Koma', typicalSideEffect: 'Jadwal suntik jam ke-0, 12, 24, lalu tiap 24 jam sekali hingga pasien sadar mampu makan' }
            ],
            clinicalKeyPearls: 'Artesunat IV dilarutkan terlebih dahulu dengan larutan Natrium Bikarbonat 5% khusus yang tersedia di dalam kemasan hingga jernih, baru kemudian diencerkan dengan Dextrose 5% atau NaCl 0.9% untuk disuntikkan bolus IV lambat.',
            clinicalWarnings: 'Jika pasien defisiensi G6PD mutlak membutuhkan terapi radikal malaria vivaks, pedoman WHO merekomendasikan modifikasi dosis Primakuin menjadi 0.75 mg/kgBB sekali seminggu selama 8 MINGGU di bawah pengawasan ketat.',
            comparisonTable: [
              { drugFormula: 'Artesunat 60mg Injeksi', mechanism: 'Bakterisidal / skizontosida darah ultra-cepat turunan artemisinin', detailedSideEffects: 'Anemia hemolitik paska-artesunat lambat (PADH) minggu ke-2', fdaCategory: 'C' },
              { drugFormula: 'Kina Dihidroklorida IV', mechanism: 'Akumulasi heme sitotoksik di vakuola makanan plasmodium', detailedSideEffects: 'Cinconisme (telinga berdenging tinitus), hipoglikemia berat', fdaCategory: 'C' }
            ],
            relatedTabKey: 'interactions',
            relatedDrugName: 'Primakuin'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // BAB 12: OBAT ANTIVIRAL (3 TOPIK)
  // =========================================================================
  {
    id: 'bab-12',
    number: 'BAB 12',
    title: 'Obat Antiviral',
    subChapters: [
      {
        id: 'sub-12-1',
        number: '12.1',
        title: 'Herpes Simplex & Zoster: Aci-Val-Fam & Kristaluria Ginjal',
        items: [
          {
            id: 'note-12-1',
            chapterId: 'bab-12',
            chapterNumber: 'BAB 12',
            chapterTitle: 'Obat Antiviral',
            subChapterNumber: '12.1',
            subChapterTitle: 'Antivirus Herpes (Aci-Val-Fam)',
            breadcrumb: 'ANTIVIRAL > HERPES ACI-VAL-FAM',
            categoryTag: 'VIRUS HERPETIK',
            heroMnemonic: 'Aci - Val - Fam Herpes',
            rhymeTagline: 'Asiklovir butuh minum 5x sehari, Valasiklovir prodrug cukup 2-3x sehari; WAJIB MINUM BANYAK AIR cegah kristal di ginjal!',
            syllableBreakdown: [
              { syllable: 'Aci (Asiklovir)', drugName: 'Asiklovir 200mg, 400mg, 800mg', isDoen: true, badgeType: 'Bioavailabilitas 20%', typicalSideEffect: 'Dosis HSV 5x sehari tiap 4 jam; presipitasi kristal di tubulus ginjal bila kurang minum' },
              { syllable: 'Val (Valasiklovir)', drugName: 'Valasiklovir 500mg, 1000mg', isDoen: true, badgeType: 'Prodrug Modern', typicalSideEffect: 'Bioavailabilitas melonjak 55%; dosis cukup 2-3x sehari untuk cacar ular Herpes Zoster' },
              { syllable: 'Fam (Famsiklovir)', drugName: 'Famsiklovir 250mg, 500mg', isDoen: false, badgeType: 'Prodrug Pensiklovir', typicalSideEffect: 'Pilihan alternatif neuralgia pasca-herpes zoster' }
            ],
            clinicalKeyPearls: 'Asiklovir adalah prodrug yang membutuhkan aktivasi fosforilasi pertama oleh enzim spesifik virus TIMIDIN KINASE. Sel tubuh manusia yang sehat tidak memiliki enzim ini, sehingga asiklovir memiliki indeks keamanan sangat tinggi.',
            clinicalWarnings: 'Injeksi Asiklovir IV harus diinfus perlahan minimal 1 JAM disertai hidrasi cairan cukup. Penyuntikan bolus cepat memicu nefropati kristal akut akibat pengendapan kristal asiklovir di lumen tubulus ginjal.',
            comparisonTable: [
              { drugFormula: 'Asiklovir 400mg Tab', mechanism: 'Terminasi rantai DNA polimerase virus herpes', detailedSideEffects: 'Mual, sakit kepala, kristaluria ginjal', fdaCategory: 'B' },
              { drugFormula: 'Valasiklovir 1000mg', mechanism: 'L-valil ester prodrug terhidrolisis menjadi asiklovir di hepar', detailedSideEffects: 'Pusing, TTP/HUS pada pasien immunocompromised berat', fdaCategory: 'B' }
            ],
            relatedTabKey: 'drugs',
            relatedDrugName: 'Asiklovir'
          }
        ]
      },
      {
        id: 'sub-12-2',
        number: '12.2',
        title: 'Antiretroviral HIV Lini 1: TLD (Tenofovir-Lamivudin-Dolutegravir)',
        items: [
          {
            id: 'note-12-2',
            chapterId: 'bab-12',
            chapterNumber: 'BAB 12',
            chapterTitle: 'Obat Antiviral',
            subChapterNumber: '12.2',
            subChapterTitle: 'Paduan ARV Lini Pertama TLD',
            breadcrumb: 'ANTIVIRAL > ARV LINI PERTAMA TLD',
            categoryTag: 'ANTIRETROVIRAL HIV',
            heroMnemonic: 'T - L - D Kombinasi Emas',
            rhymeTagline: 'Tenofovir periksa fungsi ginjal & tulang, Lamivudin toleransi nyaman, Dolutegravir INSTI tangguh hambat mutasi!',
            syllableBreakdown: [
              { syllable: 'T (Tenofovir / TDF)', drugName: 'Tenofovir Disoproxil 300mg', isDoen: true, badgeType: 'NRTI Backbone', typicalSideEffect: 'Nefrotoksisitas tubulopati proksimal Fanconi, penurunan densitas mineral tulang' },
              { syllable: 'L (Lamivudin / 3TC)', drugName: 'Lamivudin 300mg', isDoen: true, badgeType: 'Toleransi Terbaik', typicalSideEffect: 'Sangat aman minim efek samping; aktif ganda melawan virus Hepatitis B' },
              { syllable: 'D (Dolutegravir / DTG)', drugName: 'Dolutegravir 50mg', isDoen: true, badgeType: 'INSTI Penekan Cepat', typicalSideEffect: 'Penurunan viral load ultra-cepat, barrier resistensi tinggi; insomnia, kenaikan BB' }
            ],
            clinicalKeyPearls: 'Paduan TLD (TDF + 3TC + DTG) dalam satu tablet kombinasi dosis tetap (FDC) diminum 1x sehari malam hari. Dolutegravir menggantikan Efavirenz (EFV) karena bebas efek samping mimpi buruk, depresi, dan halusinasi neuropsikiatri.',
            clinicalWarnings: 'Interaksi Kation: Dolutegravir mengikat kation multivalen (Kalsium, Besi, Antasida Mag-Al) membentuk kelat yang menggagalkan absorpsi ARV. Beri jarak minimal 2 jam sebelum atau 6 jam sesudah suplemen kalsium/besi.',
            comparisonTable: [
              { drugFormula: 'Tenofovir (TDF) 300mg', mechanism: 'Analog nukleosida kompetitif Reverse Transcriptase', detailedSideEffects: 'Penurunan klirens ginjal eGFR, proteinuria, osteomalasia', fdaCategory: 'B' },
              { drugFormula: 'Dolutegravir (DTG) 50mg', mechanism: 'Inhibitor transfer untai integrase (INSTI) DNA proviral', detailedSideEffects: 'Sakit kepala, insomnia, peningkatan berat badan', fdaCategory: 'B' },
              { drugFormula: 'Efavirenz (EFV) 600mg (Lama)', mechanism: 'NNRTI non-nukleosida alosterik Reverse Transcriptase', detailedSideEffects: 'Mimpi buruk nyata, pusing melayang, depresi bunuh diri', fdaCategory: 'D' }
            ],
            relatedTabKey: 'interactions',
            relatedDrugName: 'Tenofovir'
          }
        ]
      },
      {
        id: 'sub-12-3',
        number: '12.3',
        title: 'Antivirus Hepatitis B & C: Teno-Ente vs Sofos-Dakla',
        items: [
          {
            id: 'note-12-3',
            chapterId: 'bab-12',
            chapterNumber: 'BAB 12',
            chapterTitle: 'Obat Antiviral',
            subChapterNumber: '12.3',
            subChapterTitle: 'Hepatitis B & Hepatitis C (DAA)',
            breadcrumb: 'ANTIVIRAL > HEPATITIS B & C DAA',
            categoryTag: 'HEPATITIS VIRAL',
            heroMnemonic: 'Hep B Supresi • Hep C Sembuh Tuntas',
            rhymeTagline: 'Hep B Tenofovir/Entekavir seumur hidup supresi DNA, Hep C Sofosbuvir + Daklatasvir 12 minggu tuntas sembuh 98%!',
            syllableBreakdown: [
              { syllable: 'Hep B (Teno/Ente)', drugName: 'Tenofovir 300mg / Entekavir 0.5mg', isDoen: true, badgeType: 'Supresi Seumur Hidup', typicalSideEffect: 'Menekan replikasi HBV-DNA untuk mencegah sirosis & kanker hepar; barrier resistensi tinggi' },
              { syllable: 'Hep C (Sofosbuvir)', drugName: 'Sofosbuvir 400mg (Inhibitor NS5B)', isDoen: true, badgeType: 'DAA Oral 12 Minggu', typicalSideEffect: 'Pilar utama DAA pan-genotipe; tingkat kesembuhan virologis permanen (SVR12) > 95%' },
              { syllable: 'Hep C (Daklatasvir)', drugName: 'Daklatasvir 60mg (Inhibitor NS5A)', isDoen: true, badgeType: 'Kombinasi Sinergis', typicalSideEffect: 'Menghambat replikasi dan perakitan virion hepatitis C; bebas suntikan interferon!' }
            ],
            clinicalKeyPearls: 'Revolusi DAA (Direct Acting Antivirals) telah mengubah Hepatitis C dari penyakit kronis mematikan menjadi penyakit yang BISA DISEMBUHKAN TOTAL dalam 12 minggu tanpa suntikan interferon pegilasi yang menyakitkan.',
            clinicalWarnings: 'PERINGATAN BRADIARITMIA: Sofosbuvir KONTRAINDIKASI MUTLAK diberikan bersamaan dengan obat antiaritmia Amiodaron karena memicu bradikardia fatal yang memerlukan pemasangan alat pacu jantung!',
            comparisonTable: [
              { drugFormula: 'Sofosbuvir 400mg Tab', mechanism: 'Inhibitor nukleotida RNA polimerase NS5B virus Hep C', detailedSideEffects: 'Kelelahan, sakit kepala, bradikardia bila + amiodaron', fdaCategory: 'B' },
              { drugFormula: 'Entekavir 0.5mg Tab', mechanism: 'Inhibitor polimerase DNA virus Hepatitis B', detailedSideEffects: 'Pusing, mual, asidosis laktat jarang', fdaCategory: 'C' }
            ],
            relatedTabKey: 'interactions',
            relatedDrugName: 'Tenofovir'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // BAB 13: OBAT ANTI AMOEBA & PROTOZOA (2 TOPIK)
  // =========================================================================
  {
    id: 'bab-13',
    number: 'BAB 13',
    title: 'Obat Anti Amoeba',
    subChapters: [
      {
        id: 'sub-13-1',
        number: '13.1',
        title: 'Amebiasis Jaringan vs Luminal: Metronidazol & Paromomisin',
        items: [
          {
            id: 'note-13-1',
            chapterId: 'bab-13',
            chapterNumber: 'BAB 13',
            chapterTitle: 'Obat Anti Amoeba',
            subChapterNumber: '13.1',
            subChapterTitle: 'Amebiasis Jaringan vs Luminal',
            breadcrumb: 'ANTIAMOEBA > METRONIDAZOL & PAROMOMISIN',
            categoryTag: 'PROTOZOA USUS',
            heroMnemonic: 'Metro Jaringan • Paromo Usus',
            rhymeTagline: 'Metronidazol basmi trofozoit di dinding usus & abses hepar, Paromomisin sapu bersih kista di rongga lumen usus!',
            syllableBreakdown: [
              { syllable: 'Metro (Jaringan)', drugName: 'Metronidazol 500mg 3x1 (7-10 Hari)', isDoen: true, badgeType: 'Trofozoit Invasif', typicalSideEffect: 'Membunuh bentuk vegetatif trofozoit di dinding kolon & abses hati; rasa pahit logam' },
              { syllable: 'Tini (Jaringan)', drugName: 'Tinidazol 2g Dosis Tunggal / 3 Hari', isDoen: true, badgeType: 'Waktu Paruh Panjang', typicalSideEffect: 'Alternatif metronidazol dengan durasi terapi lebih singkat dan efek mual lebih ringan' },
              { syllable: 'Paromo (Luminal)', drugName: 'Paromomisin 25-35 mg/kg / Diloksanid', isDoen: true, badgeType: 'Pembersih Kista', typicalSideEffect: 'Tidak diserap ke darah; wajib diberikan setelah metronidazol untuk mencegah karier relaps' }
            ],
            clinicalKeyPearls: 'Pengobatan Amebiasis invasif (Entamoeba histolytica) selalu membutuhkan DUA TAHAP: Pertama berikan agen jaringan (Metronidazol) untuk membunuh trofozoit yang merusak dinding usus, lalu WAJIB dilanjutkan agen luminal (Paromomisin/Diloksanid) untuk mengeradikasi kista.',
            clinicalWarnings: 'Metronidazol juga merupakan pilihan utama untuk infeksi anaerob rongga mulut dan Trikomoniasis vagina. Pada trikomoniasis, kedua pasangan seksual WAJIB diobati bersamaan untuk mencegah fenomena infeksi ping-pong.',
            comparisonTable: [
              { drugFormula: 'Metronidazol 500mg', mechanism: 'Gugus nitro tereduksi merusak untai heliks DNA parasit', detailedSideEffects: 'Rasa logam metallic taste, urin gelap, mual', fdaCategory: 'B' },
              { drugFormula: 'Paromomisin 250mg', mechanism: 'Aminoglikosida non-absorbsi inhibisi ribosom kista usus', detailedSideEffects: 'Kram perut, diare lokal', fdaCategory: 'C' }
            ],
            relatedTabKey: 'interactions',
            relatedDrugName: 'Metronidazol'
          }
        ]
      },
      {
        id: 'sub-13-2',
        number: '13.2',
        title: 'Reaksi Disulfiram-like & Pantang Alkohol Metronidazol',
        items: [
          {
            id: 'note-13-2',
            chapterId: 'bab-13',
            chapterNumber: 'BAB 13',
            chapterTitle: 'Obat Anti Amoeba',
            subChapterNumber: '13.2',
            subChapterTitle: 'Reaksi Disulfiram-like Metronidazol',
            breadcrumb: 'ANTIAMOEBA > METRONIDAZOL PANTANG ALKOHOL',
            categoryTag: 'INTERAKSI TOKSIK',
            heroMnemonic: 'Metro Haram Alkohol',
            rhymeTagline: 'Metronidazol pantang alkohol selama minum hingga 48 jam sesudahnya; muka merah membara, mual muntah kolaps!',
            syllableBreakdown: [
              { syllable: 'Enzim ALDH', drugName: 'Inhibisi Aldehid Dehidrogenase', isDoen: true, badgeType: 'Mekanisme Toksik', typicalSideEffect: 'Asetaldehida beracun menumpuk drastis di dalam aliran darah hingga 10x lipat normal' },
              { syllable: 'Reaksi Fisik', drugName: 'Disulfiram-like Reaction', isDoen: true, badgeType: 'Gejala Klinis', typicalSideEffect: 'Flushing wajah merah membara, kepala berdenyut hebat, muntah proyektil, nyeri dada, syok hipotensi' },
              { syllable: 'Pantang 48 Jam', drugName: 'Batas Aman Pasca-Obat', isDoen: true, badgeType: 'Edukasi Farmasis', typicalSideEffect: 'Wajib pantang alkohol selama terapi + minimal 48 jam setelah dosis terakhir ditelan' }
            ],
            clinicalKeyPearls: 'Edukasi farmasis yang wajib disampaikan: Larangan alkohol mencakup BUKAN HANYA minuman keras beralkohol, melainkan juga obat batuk sirup yang mengandung pelarut alkohol (etanol) dan cairan kumur mulut (mouthwash) beralkohol.',
            clinicalWarnings: 'Metronidazol menyebabkan perubahan warna urin menjadi GELAP KECOKLATAN / MERAH TUA. Beri tahu pasien sejak awal penyerahan obat agar tidak panik mengira kencing berdarah.',
            comparisonTable: [
              { drugFormula: 'Metronidazol 500mg', mechanism: 'Inhibisi enzim aldehid dehidrogenase hepar manusia', detailedSideEffects: 'Reaksi disulfiram jika tercampur alkohol, urin gelap', fdaCategory: 'B' },
              { drugFormula: 'Tinidazol 500mg', mechanism: 'Derivat 5-nitroimidazol generasi kedua waktu paruh 14 jam', detailedSideEffects: 'Reaksi disulfiram (pantang alkohol 72 jam)', fdaCategory: 'C' }
            ],
            relatedTabKey: 'interactions',
            relatedDrugName: 'Metronidazol'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // BAB 14: ANALGESIK & NSAID (3 TOPIK)
  // =========================================================================
  {
    id: 'bab-14',
    number: 'BAB 14',
    title: 'Analgesik & NSAID',
    subChapters: [
      {
        id: 'sub-14-1',
        number: '14.1',
        title: 'Tangga Analgesik WHO 3 Langkah (Step 1-2-3)',
        items: [
          {
            id: 'note-14-1',
            chapterId: 'bab-14',
            chapterNumber: 'BAB 14',
            chapterTitle: 'Analgesik & NSAID',
            subChapterNumber: '14.1',
            subChapterTitle: 'Tangga Nyeri WHO 3 Langkah',
            breadcrumb: 'ANALGESIK > TANGGA ANALGESIK WHO',
            categoryTag: 'MANAJEMEN NYERI',
            heroMnemonic: 'Tangga Nyeri WHO 1 - 2 - 3',
            rhymeTagline: 'Step 1 Parasetamol/NSAID nyeri ringan, Step 2 Tramadol/Kodein nyeri sedang, Step 3 Morfin/Fentanil nyeri berat kanker!',
            syllableBreakdown: [
              { syllable: 'Step 1 (VAS 1-3)', drugName: 'Parasetamol 500-1000mg / Ibuprofen', isDoen: true, badgeType: 'Nyeri Ringan', typicalSideEffect: 'Non-opioid; parasetamol maks 4g/hari cegah kerusakan hati; NSAID waspada lambung' },
              { syllable: 'Step 2 (VAS 4-6)', drugName: 'Tramadol 50mg / Kodein 30mg (+ Parasetamol)', isDoen: true, badgeType: 'Opioid Lemah', typicalSideEffect: 'Kombinasi sinergis opioid lemah + non-opioid; mual, pusing melayang, konstipasi' },
              { syllable: 'Step 3 (VAS 7-10)', drugName: 'Morfin MST, Fentanil Patch, Oksikodon', isDoen: true, badgeType: 'Opioid Kuat', typicalSideEffect: 'Agonis mu murni; sedasi, depresi napas, wajib dampingi laksatif pencegah konstipasi' }
            ],
            clinicalKeyPearls: 'Prinsip WHO Analgesic Ladder: By the clock (berikan terjadwal teratur, bukan hanya saat nyeri muncul), By the mouth (utamakan rute oral bila pasien bisa menelan), dan By the ladder (naikkan dosis berjenjang sesuai skala nyeri VAS).',
            clinicalWarnings: 'JANGAN PERNAH menggabungkan dua obat NSAID yang berbeda secara bersamaan (misal Ibuprofen + Asam Mefenamat) karena TIDAK MENAMBAH EFEK ANALGESIK tetapi melipatgandakan risiko pendarahan lambung & gagal ginjal!',
            comparisonTable: [
              { drugFormula: 'Parasetamol 500mg', mechanism: 'Inhibitor sintesis prostaglandin di SSP sentral', detailedSideEffects: 'Sangat aman lambung, hepatotoksik jika overdosis', fdaCategory: 'B' },
              { drugFormula: 'Tramadol 50mg', mechanism: 'Agonis reseptor mu-opioid & inhibitor reuptake SNRI', detailedSideEffects: 'Mual pusing, penurunan ambang kejang, adiksi', fdaCategory: 'C' },
              { drugFormula: 'Morfin Sulfat 10mg Tab', mechanism: 'Agonis penuh reseptor mu-opioid susunan saraf pusat', detailedSideEffects: 'Konstipasi membatu, miosis pupil, depresi napas', fdaCategory: 'C' }
            ],
            relatedTabKey: 'interactions',
            relatedDrugName: 'Parasetamol'
          }
        ]
      },
      {
        id: 'sub-14-2',
        number: '14.2',
        title: 'NSAID: Lambung vs Jantung (COX-1 vs COX-2)',
        items: [
          {
            id: 'note-14-2',
            chapterId: 'bab-14',
            chapterNumber: 'BAB 14',
            chapterTitle: 'Analgesik & NSAID',
            subChapterNumber: '14.2',
            subChapterTitle: 'Keseimbangan Risiko GI vs KV pada NSAID',
            breadcrumb: 'ANALGESIK > NSAID LAMBUNG VS JANTUNG',
            categoryTag: 'SELEKTIVITAS COX',
            heroMnemonic: 'Non-Selektif Tukak • COX-2 Jantung',
            rhymeTagline: 'Non-selektif Ketorolak/Diklofenak bikin tukak lambung berdarah, COX-2 Selektif Selekoksib aman lambung tapi picu serangan jantung!',
            syllableBreakdown: [
              { syllable: 'Non-Selektif', drugName: 'Ketorolak, Indometasin, Piroksikam, Diklofenak', isDoen: true, badgeType: 'Risiko GI Tinggi', typicalSideEffect: 'Menghambat COX-1 pelindung mukosa; risiko erosi, tukak lambung, pendarahan melena' },
              { syllable: 'COX-2 Selektif', drugName: 'Selekoksib 100-200mg, Etorikoksib', isDoen: true, badgeType: 'Aman Lambung', typicalSideEffect: 'Melindungi lambung tapi menekan prostasiklin vaskular PGI2 ➔ Risiko infark miokard & stroke!' },
              { syllable: 'Paling Aman Jantung', drugName: 'Naproksen 250-500mg', isDoen: true, badgeType: 'Pilihan Kardiovaskular', typicalSideEffect: 'Profil keamanan kardiovaskular terbaik di antara seluruh NSAID pada pasien riwayat PJK' }
            ],
            clinicalKeyPearls: 'Ketorolak adalah NSAID paling nefrotoksik dan paling mengikis mukosa lambung. Pedoman keselamatan membatasi penggunaan Ketorolak MAKSIMAL HANYA 5 HARI untuk nyeri akut pasca-bedah.',
            clinicalWarnings: 'Selekoksib dan Etorikoksib KONTRAINDIKASI MUTLAK pada pasien pasca-operasi bypass jantung CABG, riwayat infark miokard, stroke iskemia, dan gagal jantung kongestif berat.',
            comparisonTable: [
              { drugFormula: 'Ketorolak 30mg IV', mechanism: 'Inhibitor poten COX-1 > COX-2 non-selektif', detailedSideEffects: 'Pendarahan saluran cerna, gagal ginjal akut', fdaCategory: 'C' },
              { drugFormula: 'Selekoksib 200mg', mechanism: 'Inhibitor sangat selektif enzim Siklooksigenase-2', detailedSideEffects: 'Retensi cairan, hipertensi, tromboemboli jantung', fdaCategory: 'C' },
              { drugFormula: 'Naproksen 500mg', mechanism: 'Inhibitor non-selektif waktu paruh panjang 14 jam', detailedSideEffects: 'Risiko kardiovaskular paling rendah, dispepsia', fdaCategory: 'C' }
            ],
            relatedTabKey: 'interactions',
            relatedDrugName: 'Ketorolak'
          }
        ]
      },
      {
        id: 'sub-14-3',
        number: '14.3',
        title: 'Opioid Kuat: Morfin, Fentanil & Trias Overdosis',
        items: [
          {
            id: 'note-14-3',
            chapterId: 'bab-14',
            chapterNumber: 'BAB 14',
            chapterTitle: 'Analgesik & NSAID',
            subChapterNumber: '14.3',
            subChapterTitle: 'Opioid Kuat & Penanganan Overdosis',
            breadcrumb: 'ANALGESIK > OPIOID KUAT & TRIAS OVERDOSIS',
            categoryTag: 'OPIOID ANALGESIK',
            heroMnemonic: 'Morfin - Fentanil - Nalokson',
            rhymeTagline: 'Trias overdosis morfin: Koma hilang kesadaran, napas berhenti, pupil mengecil jarum pentul; SEGERA GUYUR NALOKSON IV!',
            syllableBreakdown: [
              { syllable: 'Morfin', drugName: 'Morfin HCl 10mg Injeksi / MST', isDoen: true, badgeType: 'Baku Emas', typicalSideEffect: 'Pelepasan histamin bikin gatal; metabolit M6G toksik menumpuk pada gagal ginjal' },
              { syllable: 'Fentanil', drugName: 'Fentanil Patch / Injeksi IV', isDoen: true, badgeType: '100x Morfin', typicalSideEffect: 'Lipofilik tinggi tanpa metabolit aktif toksik; pilihan teraman untuk gagal ginjal CKD' },
              { syllable: 'Trias Overdosis', drugName: 'Koma + Depresi Napas + Miosis Pupil', isDoen: true, badgeType: 'Tanda Kritis', typicalSideEffect: 'Pernapasan < 10x per menit, sianosis kebiruan, pupil mata mengecil pinpoint' },
              { syllable: 'Nalokson', drugName: 'Nalokson HCl 0.4mg IV Bolus', isDoen: true, badgeType: 'Antidot Spesifik', typicalSideEffect: 'Antagonis murni reseptor mu; mengembalikan refleks napas dalam 1-2 menit!' }
            ],
            clinicalKeyPearls: 'Edukasi wajib untuk seluruh terapi opioid kuat kronis: Konstipasi adalah satu-satunya efek samping opioid yang TIDAK MENGALAMI TOLERANSI. Pasien wajib selalu diresepkan profilaksis pencahar stimulan (Bisakodil/Senna) sejak hari pertama.',
            clinicalWarnings: 'Waktu paruh Nalokson (30-90 menit) LEBIH PENDEK daripada waktu paruh Morfin/Metadon. Pasien yang sadar pasca-injeksi nalokson dapat mengalami henti napas berulang saat efek nalokson habis; selalu pantau ketat minimal 4 jam di IGD.',
            comparisonTable: [
              { drugFormula: 'Morfin Sulfat 10mg IV', mechanism: 'Agonis penuh reseptor mu-opioid membran neuron', detailedSideEffects: 'Depresi napas, pruritus gatal, konstipasi berat', fdaCategory: 'C' },
              { drugFormula: 'Fentanil 25mcg/jam Patch', mechanism: 'Opioid sintetik transdermal penetrasi lipid tinggi', detailedSideEffects: 'Eritema kulit lokal, kekakuan dinding dada', fdaCategory: 'C' },
              { drugFormula: 'Nalokson 0.4mg Ampul', mechanism: 'Antagonis kompetitif afinitas tinggi reseptor mu', detailedSideEffects: 'Sindrom putus obat akut, takikardia hipertensi', fdaCategory: 'B' }
            ],
            relatedTabKey: 'toxicology',
            relatedDrugName: 'Morfin'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // BAB 15: MUSKULOSKELETAL & GOUT (2 TOPIK)
  // =========================================================================
  {
    id: 'bab-15',
    number: 'BAB 15',
    title: 'Muskuloskeletal & Gout',
    subChapters: [
      {
        id: 'sub-15-1',
        number: '15.1',
        title: 'Artritis Gout: Serangan Akut vs Profilaksis Kronis',
        items: [
          {
            id: 'note-15-1',
            chapterId: 'bab-15',
            chapterNumber: 'BAB 15',
            chapterTitle: 'Muskuloskeletal & Gout',
            subChapterNumber: '15.1',
            subChapterTitle: 'Gout Akut vs Kronis (Kol-NSAID vs Alo-Febuk)',
            breadcrumb: 'GOUT > AKUT VS KRONIS ALOPURINOL',
            categoryTag: 'ASAM URAT & GOUT',
            heroMnemonic: 'Kol - NSAID Akut • Alo - Febuk Tenang',
            rhymeTagline: 'Kolkisin & NSAID redakan radang akut; PANTANG MULAI ALOPURINOL saat fase serangan akut masih berkobar!',
            syllableBreakdown: [
              { syllable: 'Akut (Kolkisin)', drugName: 'Kolkisin 0.5-1 mg (Dalam 36 Jam)', isDoen: true, badgeType: 'Antiinflamasi Akut', typicalSideEffect: 'Menghambat kemotaksis leukosit sendi; diare kram perut encer (dosis toksisitas batas)' },
              { syllable: 'Akut (NSAID)', drugName: 'Indometasin 50mg / Naproksen / Steroid', isDoen: true, badgeType: 'Pereda Nyeri Akut', typicalSideEffect: 'Lini pertama sendi bengkak merah panas; hindari aspirin dosis rendah!' },
              { syllable: 'Kronis (Alopurinol)', drugName: 'Alopurinol 100-300 mg', isDoen: true, badgeType: 'Inhibitor Xantin Oksidase', typicalSideEffect: 'Menurunkan asam urat darah; tes gen HLA-B*5801 cegah alergi SJS melepuh' },
              { syllable: 'Kronis (Febuksostat)', drugName: 'Febuksostat 40-80 mg', isDoen: false, badgeType: 'Aman Gagal Ginjal', typicalSideEffect: 'Inhibitor xantin oksidase non-purin; eliminasi ganda hepar & ginjal' }
            ],
            clinicalKeyPearls: 'PANTANG BESAR: Jangan pernah memulai Alopurinol saat pasien sedang mengalami serangan nyeri gout akut! Penurunan asam urat darah secara mendadak akan melarutkan kristal tofus di sendi dan memicu peradangan flare-up yang jauh lebih dahsyat.',
            clinicalWarnings: 'Jika pasien SUDAH rutin meminum Alopurinol lalu mengalami serangan akut, Alopurinol TETAP DILANJUTKAN dengan dosis sama sambil ditambahkan Kolkisin atau NSAID.',
            comparisonTable: [
              { drugFormula: 'Kolkisin 0.5mg Tab', mechanism: 'Mengikat tubulin menghambat migrasi neutrofil ke sendi', detailedSideEffects: 'Diare kram perut hebat (stop bila diare mulai)', fdaCategory: 'C' },
              { drugFormula: 'Alopurinol 100mg Tab', mechanism: 'Inhibisi sintesis asam urat dari xantin & hipoksantin', detailedSideEffects: 'Sindrom hipersensitivitas SJS/TEN, ruam alergi', fdaCategory: 'C' },
              { drugFormula: 'Febuksostat 40mg Tab', mechanism: 'Inhibitor selektif non-purin enzim xantin oksidase', detailedSideEffects: 'Peningkatan enzim hati, nyeri sendi awal', fdaCategory: 'C' }
            ],
            relatedTabKey: 'interactions',
            relatedDrugName: 'Alopurinol'
          }
        ]
      },
      {
        id: 'sub-15-2',
        number: '15.2',
        title: 'Osteoporosis: Bisfosfonat & Posisi Tegak 30 Menit',
        items: [
          {
            id: 'note-15-2',
            chapterId: 'bab-15',
            chapterNumber: 'BAB 15',
            chapterTitle: 'Muskuloskeletal & Gout',
            subChapterNumber: '15.2',
            subChapterTitle: 'Bisfosfonat & Posisi Tegak 30 Menit',
            breadcrumb: 'OSTEOPOROSIS > BISFOSFONAT ALENDRONAT',
            categoryTag: 'METABOLISME TULANG',
            heroMnemonic: 'Alendronat Tegak 30 Menit',
            rhymeTagline: 'Minum Alendronat pagi hari perut kosong dengan segelas penuh air murni; DILARANG BERBARING minimal 30 menit!',
            syllableBreakdown: [
              { syllable: 'Perut Kosong', drugName: 'Pagi Hari Saat Bangun', isDoen: true, badgeType: 'Bioavailabilitas < 1%', typicalSideEffect: 'Absorpsi obat hanya 0.6%; kopi, teh, susu, atau makanan akan menghancurkan absorpsi jadi nol' },
              { syllable: 'Air Putih Penuh', drugName: 'Segelas Penuh (200 ml)', isDoen: true, badgeType: 'Cegah Melekat', typicalSideEffect: 'Wajib air putih murni; dilarang air mineral kalsium atau jus buah' },
              { syllable: 'Tegak 30 Menit', drugName: 'Duduk / Berdiri Tegak', isDoen: true, badgeType: 'Cegah Esofagitis', typicalSideEffect: 'Mencegah tablet tersangkut dan refluks ke esofagus memicu erosi & ulkus kerongkongan parah' }
            ],
            clinicalKeyPearls: 'Bisfosfonat (Alendronat seminggu sekali, Risedronat, Zoledronat IV setahun sekali) bekerja dengan mengikat kristal hidroksiapatit tulang dan memicu apoptosis sel osteoklas penghancur tulang, sehingga kepadatan tulang meningkat.',
            clinicalWarnings: 'Efek samping jangka panjang bisfosfonat: Osteonekrosis Tulang Rahang (Osteonecrosis of the Jaw / ONJ). Pasien wajib menyelesaikan seluruh prosedur pencabutan/bedah gigi sebelum memulai terapi bisfosfonat kronis.',
            comparisonTable: [
              { drugFormula: 'Alendronat 70mg (Mingguan)', mechanism: 'Inhibisi enzim farnesil pirofosfat sintase osteoklas', detailedSideEffects: 'Esofagitis korosif, nyeri muskuloskeletal tulang', fdaCategory: 'C' },
              { drugFormula: 'Asam Zoledronat 5mg IV', mechanism: 'Bisfosfonat generasi 3 afinitas mineral tulang tertinggi', detailedSideEffects: 'Reaksi fase akut flu-like 3 hari pasca-infus', fdaCategory: 'D' }
            ],
            relatedTabKey: 'interactions',
            relatedDrugName: 'Kalsium Laktat'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // BAB 16: ANTI KANKER & SITOSTATIKA (3 TOPIK)
  // =========================================================================
  {
    id: 'bab-16',
    number: 'BAB 16',
    title: 'Anti Kanker & Sitostatika',
    subChapters: [
      {
        id: 'sub-16-1',
        number: '16.1',
        title: 'Toksisitas Spesifik Organ Sitostatika (Siklo-Dokso-Sis-Vin-Bleo)',
        items: [
          {
            id: 'note-16-1',
            chapterId: 'bab-16',
            chapterNumber: 'BAB 16',
            chapterTitle: 'Anti Kanker & Sitostatika',
            subChapterNumber: '16.1',
            subChapterTitle: 'Toksisitas Khas Organ Kemoterapi',
            breadcrumb: 'ONKOLOGI > TOKSISITAS KHAS SITOSTATIKA',
            categoryTag: 'KEMOTERAPI TOKSIK',
            heroMnemonic: 'Siklo - Dokso - Sis - Vin - Bleo',
            rhymeTagline: 'Siklofosfamid kencing darah kandung kemih, Doksorubisin racun jantung, Sisplatin rusak ginjal, Vinkristin kesemutan saraf, Bleomisin rusak paru!',
            syllableBreakdown: [
              { syllable: 'Siklo (Kemih)', drugName: 'Siklofosfamid (Alkilasi)', isDoen: true, badgeType: 'Sistitis Hemoragik', typicalSideEffect: 'Metabolit akrolein mengikis mukosa kandung kemih kencing darah; dicegah dengan MESNA' },
              { syllable: 'Dokso (Jantung)', drugName: 'Doksorubisin (Antrasiklin)', isDoen: true, badgeType: 'Kardiotoksik', typicalSideEffect: 'Radikal bebas besi memicu kardiomiopati gagal jantung; dicegah dengan Deksrazoksan' },
              { syllable: 'Sis (Ginjal)', drugName: 'Sisplatin (Platina)', isDoen: true, badgeType: 'Nefrotoksik Berat', typicalSideEffect: 'Nekrosis tubulus ginjal & emetogenik tinggi; wajib hidrasi cairan infus masif 3 liter' },
              { syllable: 'Vin (Saraf)', drugName: 'Vinkristin (Vinca Alkaloid)', isDoen: true, badgeType: 'Neuropati Perifer', typicalSideEffect: 'Paralisis mikrotubulus saraf perifer kesemutan, parestesia, konstipasi ileus' },
              { syllable: 'Bleo (Paru)', drugName: 'Bleomisin (Antibiotik Sitotoksik)', isDoen: true, badgeType: 'Fibrosis Paru', typicalSideEffect: 'Pneumonitis & fibrosis paru restriktif; pantau kapasitas difusi paru DLCO' }
            ],
            clinicalKeyPearls: 'Vinkristin HARAM DIBERIKAN SECARA INTRATEKAL (ke dalam cairan saraf tulang belakang)! Injeksi intratekal Vinkristin adalah kesalahan pengobatan fatal (medication error) yang menyebabkan mielopati asenden dan KEMATIAN 100%.',
            clinicalWarnings: 'Doksorubisin memiliki batas dosis kumulatif seumur hidup (maksimal 450-550 mg/m2). Melebihi dosis kumulatif ini melipatgandakan risiko gagal jantung kongestif permanen.',
            comparisonTable: [
              { drugFormula: 'Siklofosfamid 500mg IV', mechanism: 'Cross-linking alkilasi untai ganda DNA sel kanker', detailedSideEffects: 'Sistitis hemoragik pendarahan kemih, alopesia', fdaCategory: 'D' },
              { drugFormula: 'Doksorubisin 50mg IV', mechanism: 'Interkalasi DNA & inhibisi topoisomerase II + radikal Fe', detailedSideEffects: 'Kardiomiopati dilatasi, urin merah 1-2 hari', fdaCategory: 'D' },
              { drugFormula: 'Sisplatin 50mg IV', mechanism: 'Membentuk ikatan silang intra-strand DNA aduk platina', detailedSideEffects: 'Gagal ginjal akut, mual muntah berat HEC', fdaCategory: 'D' }
            ],
            relatedTabKey: 'interactions',
            relatedDrugName: 'Metotreksat'
          }
        ]
      },
      {
        id: 'sub-16-2',
        number: '16.2',
        title: 'Antidotum & Protektor Sitostatika: MESNA, Deksrazoksan, Leukovorin',
        items: [
          {
            id: 'note-16-2',
            chapterId: 'bab-16',
            chapterNumber: 'BAB 16',
            chapterTitle: 'Anti Kanker & Sitostatika',
            subChapterNumber: '16.2',
            subChapterTitle: 'Protektor Kemoterapi (MESNA, Deksra, Leuko)',
            breadcrumb: 'ONKOLOGI > PROTEKTOR KEMOTERAPI',
            categoryTag: 'PENYELAMAT SITOSTATIKA',
            heroMnemonic: 'MESNA - Deksra - Leuko',
            rhymeTagline: 'MESNA lindungi kandung kemih Siklofosfamid, Deksrazoksan lindungi jantung Doksorubisin, Leukovorin penyelamat overdosis Metotreksat!',
            syllableBreakdown: [
              { syllable: 'MESNA', drugName: 'Mesna (Natrium 2-merkaptoetana)', isDoen: true, badgeType: 'Pelindung Kemih', typicalSideEffect: 'Gugus sulfhidril bebas mengikat akrolein beracun di urin menjadi senyawa non-toksik' },
              { syllable: 'Deksra', drugName: 'Deksrazoksan', isDoen: true, badgeType: 'Pelindung Jantung', typicalSideEffect: 'Pengkelat besi intraseluler memotong pembentukan radikal bebas besi-antrasiklin di miosit' },
              { syllable: 'Leuko', drugName: 'Leukovorin (Kalsium Folinat / Asam Folinat)', isDoen: true, badgeType: 'Leucovorin Rescue', typicalSideEffect: 'Menyediakan asam tetrahidrofolat siap pakai bagi sel normal pasca-Metotreksat dosis tinggi' }
            ],
            clinicalKeyPearls: 'Leucovorin Rescue: Metotreksat dosis tinggi membunuh sel kanker dengan memblokir enzim DHFR. Leukovorin diberikan 24 jam pasca-kemoterapi untuk menyelamatkan sel sumsum tulang dan mukosa saluran cerna normal dari kematian massal.',
            clinicalWarnings: 'MESNA harus diberikan bersamaan dengan Siklofosfamid atau Ifosfamid dosis tinggi dan diulang pada jam ke-4 dan ke-8 karena waktu paruh eliminasi MESNA sangat singkat.',
            comparisonTable: [
              { drugFormula: 'Mesna 400mg Ampul', mechanism: 'Detoksifikasi akrolein di lumen buli-buli kemih', detailedSideEffects: 'Mual bau belerang, rasa pahit mulut', fdaCategory: 'B' },
              { drugFormula: 'Leukovorin 50mg IV', mechanism: 'Bypass hambatan dihidrofolat reduktase (DHFR)', detailedSideEffects: 'Reaksi alergi urtikaria jarang', fdaCategory: 'C' }
            ],
            relatedTabKey: 'interactions',
            relatedDrugName: 'Metotreksat'
          }
        ]
      },
      {
        id: 'sub-16-3',
        number: '16.3',
        title: 'Antiemetik CINV: Protokol Triplet Ondan-Apre-Deksa',
        items: [
          {
            id: 'note-16-3',
            chapterId: 'bab-16',
            chapterNumber: 'BAB 16',
            chapterTitle: 'Anti Kanker & Sitostatika',
            subChapterNumber: '16.3',
            subChapterTitle: 'Mual Muntah Kemo (CINV Triplet)',
            breadcrumb: 'ONKOLOGI > PROTOKOL CINV ONDAN-APRE-DEKSA',
            categoryTag: 'ANTIEMETIK CINV',
            heroMnemonic: 'Ondan - Apre - Deksa HEC',
            rhymeTagline: 'Kemoterapi emetogenik tinggi wajib kombinasi 3 obat: Ondansetron 5-HT3 + Aprepitant NK1 + Deksametason!',
            syllableBreakdown: [
              { syllable: 'Ondan (5-HT3)', drugName: 'Ondansetron 8mg / Granisetron', isDoen: true, badgeType: 'Mual Akut < 24 Jam', typicalSideEffect: 'Blokade pelepasan serotonin dari sel enterokromafin usus; efek konstipasi & sakit kepala' },
              { syllable: 'Apre (NK-1)', drugName: 'Aprepitant 125mg hari 1, 80mg hari 2-3', isDoen: true, badgeType: 'Mual Lambat 2-5 Hari', typicalSideEffect: 'Blokade reseptor Neurokinin-1 substance P di batang otak; atasi delayed emesis' },
              { syllable: 'Deksa (Steroid)', drugName: 'Deksametason 12mg IV/Oral', isDoen: true, badgeType: 'Penguat Sinergis', typicalSideEffect: 'Meningkatkan efektivitas antiemetik hingga 30%; waspada hiperglikemia gula darah' }
            ],
            clinicalKeyPearls: 'Klasifikasi Emetogenik Kemoterapi: Sisplatin, Siklofosfamid > 1500 mg/m2, dan Doksorubisin tergolong Highly Emetogenic Chemotherapy (HEC: memicu muntah pada > 90% pasien). Wajib diberikan profilaksis triplet sebelum infus kemo dimulai.',
            clinicalWarnings: 'Aprepitant adalah inhibitor moderat enzim CYP3A4. Jika diberikan bersama Deksametason, dosis Deksametason HARUS DITURUNKAN 50% karena kadarnya akan meningkat di dalam darah.',
            comparisonTable: [
              { drugFormula: 'Ondansetron 8mg Ampul', mechanism: 'Antagonis kompetitif selektif reseptor serotonin 5-HT3', detailedSideEffects: 'Konstipasi, perpanjangan interval QT jantung', fdaCategory: 'B' },
              { drugFormula: 'Aprepitant 125mg Kapsul', mechanism: 'Antagonis selektif reseptor Neurokinin 1 (NK1) P', detailedSideEffects: 'Kelelahan, cegukan singultus, interaksi CYP3A4', fdaCategory: 'B' },
              { drugFormula: 'Deksametason 5mg/ml', mechanism: 'Supresi sintesis prostaglandin & permeabilitas sawar darah otak', detailedSideEffects: 'Insomnia, lonjakan glukosa darah, gastritis', fdaCategory: 'C' }
            ],
            relatedTabKey: 'interactions',
            relatedDrugName: 'Ondansetron'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // BAB 17: CAIRAN & ELEKTROLIT (2 TOPIK)
  // =========================================================================
  {
    id: 'bab-17',
    number: 'BAB 17',
    title: 'Cairan & Elektrolit',
    subChapters: [
      {
        id: 'sub-17-1',
        number: '17.1',
        title: 'Kristaloid vs Koloid: RL vs NaCl 0.9% vs Albumin',
        items: [
          {
            id: 'note-17-1',
            chapterId: 'bab-17',
            chapterNumber: 'BAB 17',
            chapterTitle: 'Cairan & Elektrolit',
            subChapterNumber: '17.1',
            subChapterTitle: 'Resusitasi Kristaloid vs Koloid',
            breadcrumb: 'ELEKTROLIT > KRISTALOID VS KOLOID RL NACL',
            categoryTag: 'RESUSITASI CAIRAN',
            heroMnemonic: 'RL Berimbang • NaCl Klorida • Albumin Koloid',
            rhymeTagline: 'Ringer Laktat buffer seimbang syok & luka bakar, NaCl 0.9% resusitasi umum waspada asidosis, Albumin koloid tarik edema!',
            syllableBreakdown: [
              { syllable: 'RL (Berimbang)', drugName: 'Ringer Laktat (RL) 500ml', isDoen: true, badgeType: 'Fisiologis', typicalSideEffect: 'Mengandung laktat yang diubah hepar jadi bikarbonat pencegah asidosis metabolik; cairan nomor 1 syok trauma' },
              { syllable: 'NaCl 0.9%', drugName: 'Normal Saline (NS) 500ml', isDoen: true, badgeType: 'Cairan Isotonis', typicalSideEffect: 'Kadar klorida tinggi (154 mEq/L); guyuran masif > 3 liter memicu Asidosis Metabolik Hiperkloremik' },
              { syllable: 'Albumin', drugName: 'Human Albumin 20% - 25%', isDoen: true, badgeType: 'Koloid Onkotik', typicalSideEffect: 'Menarik cairan dari ruang interstisial ke intravaskular pada sirosis asites & hipoalbuminemia' }
            ],
            clinicalKeyPearls: 'Aturan 3:1 Resusitasi Syok Perdarahan: Setiap kehilangan 1 mL darah harus diganti dengan 3 mL cairan kristaloid isotonis (RL/NS) karena 75% cairan kristaloid akan berpindah keluar dari pembuluh darah ke ruang interstisial dalam 30-60 menit.',
            clinicalWarnings: 'Ringer Laktat KONTRAINDIKASI pada cedera kepala berat (Trauma Brain Injury) karena osmolaritasnya sedikit hipotonis (273 mOsm/L) yang dapat memperparah pembengkakan otak (edema serebral). Gunakan NaCl 0.9%.',
            comparisonTable: [
              { drugFormula: 'Ringer Laktat (RL)', mechanism: 'Cairan kristaloid berimbang fisiologis (Na 130, K 4, Cl 109, Laktat 28)', detailedSideEffects: 'Alkalosis metabolik jika hepar berfungsi baik', fdaCategory: 'C' },
              { drugFormula: 'NaCl 0.9% (NS)', mechanism: 'Larutan kristaloid isotonik (Na 154 mEq/L, Cl 154 mEq/L)', detailedSideEffects: 'Asidosis hiperkloremik, vasokonstriksi ginjal', fdaCategory: 'C' },
              { drugFormula: 'Albumin 20% 100ml', mechanism: 'Koloid onkotik plasma menarik 4-5x volumenya sendiri', detailedSideEffects: 'Kelebihan beban cairan paru hipervolemia', fdaCategory: 'C' }
            ],
            relatedTabKey: 'drugs',
            relatedDrugName: 'Kalium Klorida'
          }
        ]
      },
      {
        id: 'sub-17-2',
        number: '17.2',
        title: 'Koreksi Elektrolit Darurat: KCl Lambat vs Kalsium Glukonat',
        items: [
          {
            id: 'note-17-2',
            chapterId: 'bab-17',
            chapterNumber: 'BAB 17',
            chapterTitle: 'Cairan & Elektrolit',
            subChapterNumber: '17.2',
            subChapterTitle: 'Koreksi Kalium & Kalsium Kritis',
            breadcrumb: 'ELEKTROLIT > KOREKSI KCL & KALSIUM GLUKONAT',
            categoryTag: 'ELEKTROLIT HIGH ALERT',
            heroMnemonic: 'KCl HARAM BOLUS • Ca-Glukonat Jantung',
            rhymeTagline: 'KCl pekat HARAM DIBOLUS IV (jantung berhenti mati seketika!), Kalsium Glukonat penyelamat membran aritmia hiperkalemia!',
            syllableBreakdown: [
              { syllable: 'KCl Pekat', drugName: 'KCl 7.46% (1 mEq/ml)', isDoen: true, badgeType: 'HIGH ALERT MUTLAK', typicalSideEffect: 'KONTRAINDIKASI BOLUS CEPAT! Wajib diencerkan dalam botol infus & ditetes maksimal 10-20 mEq/jam' },
              { syllable: 'Kecepatan Infus', drugName: 'Maks 10-20 mEq/jam', isDoen: true, badgeType: 'Protokol Infus', typicalSideEffect: 'Kecepatan melebihi 20 mEq/jam memicu flebitis terbakar vena dan fibrilasi ventrikel' },
              { syllable: 'Ca-Glukonat', drugName: 'Kalsium Glukonat 10% 10ml IV', isDoen: true, badgeType: 'Penstabil Membran', typicalSideEffect: 'Diberikan segera pada hiperkalemia (K > 6.5) dengan gambaran EKG gelombang T tinggi lancip (peaked T)' }
            ],
            clinicalKeyPearls: 'Kalsium Glukonat TIDAK MENURUNKAN kadar kalium darah sama sekali! Fungsinya murni MENSTABILKAN MEMBRAN SEL JANTUNG agar tidak mengalami aritmia mematikan selama 30-60 menit sementara terapi pemindah kalium (Insulin + D40 atau Nebulizer Salbutamol) bekerja.',
            clinicalWarnings: 'KCL PEKAT ADALAH SALAH SATU OBAT EKSEKUSI HUKUMAN MATI! Penyuntikan KCl bolus IV langsung ke pembuluh darah tanpa pengenceran akan memicu henti jantung asistol seketika dan KEMATIAN PASIEN.',
            comparisonTable: [
              { drugFormula: 'KCl 7.46% 25ml Flacon', mechanism: 'Suplementasi ion kalium cairan intraseluler', detailedSideEffects: 'Aritmia henti jantung fatal bila tidak diencerkan!', fdaCategory: 'C' },
              { drugFormula: 'Kalsium Glukonat 10% Ampul', mechanism: 'Antagonis membran kardiotoksisitas hiperkalemia', detailedSideEffects: 'Hipotensi, bradikardia bila disuntikkan terlalu cepat', fdaCategory: 'C' }
            ],
            relatedTabKey: 'high-alert',
            relatedDrugName: 'Kalium Klorida'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // BAB 18: TOKSIKOLOGI & ANTIDOTUM KUNCI (2 TOPIK)
  // =========================================================================
  {
    id: 'bab-18',
    number: 'BAB 18',
    title: 'Toksikologi & Antidot',
    subChapters: [
      {
        id: 'sub-18-1',
        number: '18.1',
        title: 'Golden Chart Antidotum Spesifik Keracunan Akut',
        items: [
          {
            id: 'note-18-1',
            chapterId: 'bab-18',
            chapterNumber: 'BAB 18',
            chapterTitle: 'Toksikologi & Antidot',
            subChapterNumber: '18.1',
            subChapterTitle: 'Golden Chart Antidotum Spesifik',
            breadcrumb: 'TOKSIKOLOGI > GOLDEN CHART ANTIDOTUM',
            categoryTag: 'ANTIDOTUM GAWAT DARURAT',
            heroMnemonic: 'Tabel Emas Antidotum Racun',
            rhymeTagline: 'Parasetamol NAC, Opioid Nalokson, Benzo Flumazenil, Organofosfat Atropin + PAM, Warfarin Vitamin K!',
            syllableBreakdown: [
              { syllable: 'PAR-NAC', drugName: 'Parasetamol ➔ N-Asetilsistein (NAC)', isDoen: true, badgeType: 'Glutation Hepar', typicalSideEffect: 'Menggantikan simpanan glutation hepar untuk menetralkan metabolit reaktif mematikan NAPQI' },
              { syllable: 'OPI-NAL', drugName: 'Opioid (Morfin, Fentanil) ➔ Nalokson IV', isDoen: true, badgeType: 'Antagonis Mu', typicalSideEffect: 'Mengembalikan depresi pernapasan & koma dalam hitungan 1-2 menit' },
              { syllable: 'BEN-FLU', drugName: 'Benzodiazepin ➔ Flumazenil', isDoen: true, badgeType: 'Antagonis GABA', typicalSideEffect: 'Antagonis kompetitif reseptor benzodiazepin SSP; waspada kejang putus obat' },
              { syllable: 'ORG-ATRO', drugName: 'Organofosfat Insektisida ➔ Atropin + PAM', isDoen: true, badgeType: 'Krisis Kolinergik', typicalSideEffect: 'Atropin hentikan hipersekresi SLUDGE (salivasi, keringat, bronkospasme); Pralidoksim reaktivasi enzim AChE' },
              { syllable: 'WAR-VITK', drugName: 'Warfarin ➔ Vitamin K1 (Fitomenadion)', isDoen: true, badgeType: 'Faktor Pembekuan', typicalSideEffect: 'Mengembalikan sintesis faktor II, VII, IX, X; beri FFP jika pendarahan hebat aktif' }
            ],
            clinicalKeyPearls: 'Golden Period Parasetamol: N-Asetilsistein (NAC) paling efektif mencegah nekrosis hati fulminan jika diberikan dalam 8 JAM PERTAMA pasca-konsumsi racun parasetamol. Arang aktif (Activated Charcoal) efektif menyerap racun bila diminum dalam 1-2 jam pertama.',
            clinicalWarnings: 'Jangan memberikan Flumazenil secara terburu-buru pada pasien koma yang belum diketahui riwayatnya jika diduga mengonsumsi antidepresan trisiklik (TCA) atau pengguna benzodiazepin kronis, karena dapat memicu bangkitan kejang refrakter mematikan.',
            comparisonTable: [
              { drugFormula: 'N-Asetilsistein (NAC)', mechanism: 'Donor gugus sulfhidril prekursor sintesis glutation', detailedSideEffects: 'Mual bau belerang, reaksi anafilaktoid jika infus cepat', fdaCategory: 'B' },
              { drugFormula: 'Nalokson HCl 0.4mg', mechanism: 'Antagonis kompetitif murni reseptor opioid mu sentral', detailedSideEffects: 'Sindrom putus obat akut, takikardia palpitasi', fdaCategory: 'B' },
              { drugFormula: 'Atropin Sulfat 1mg', mechanism: 'Antagonis kompetitif reseptor muskarinik otonom', detailedSideEffects: 'Midriasis pupil, mulut kering, takikardia', fdaCategory: 'C' }
            ],
            relatedTabKey: 'toxicology',
            relatedDrugName: 'N-Asetilsistein'
          }
        ]
      },
      {
        id: 'sub-18-2',
        number: '18.2',
        title: 'Antidotum Logam Berat & Toksin Khusus: Sianida, Besi, Digoksin',
        items: [
          {
            id: 'note-18-2',
            chapterId: 'bab-18',
            chapterNumber: 'BAB 18',
            chapterTitle: 'Toksikologi & Antidot',
            subChapterNumber: '18.2',
            subChapterTitle: 'Sianida, Besi, Digoksin & Logam Berat',
            breadcrumb: 'TOKSIKOLOGI > SIANIDA BESI DIGOKSIN LOGAM',
            categoryTag: 'ANTIDOT LOGAM & RACUN KHUSUS',
            heroMnemonic: 'Sianida Tiosulfat • Besi Deferoksamin • Digoksin DigiFab',
            rhymeTagline: 'Sianida Natrium Tiosulfat buang sulfur, Keracunan Besi Deferoksamin urin merah anggur, Digoksin netral DigiFab!',
            syllableBreakdown: [
              { syllable: 'Sianida', drugName: 'Natrium Nitrit + Natrium Tiosulfat / Hidroksokobalamin', isDoen: true, badgeType: 'Asfiksia Seluler', typicalSideEffect: 'Nitrit membentuk methemoglobin pengikat sianida; Tiosulfat donor sulfur enzim rodanase jadi tiosianat' },
              { syllable: 'Besi (Fe)', drugName: 'Deferoksamin Mesilat 1-2g IV/IM', isDoen: true, badgeType: 'Urin Vin Rose', typicalSideEffect: 'Mengikat ion besi bebas membentuk feroksamin larut air; urin berubah warna merah anggur vin rose' },
              { syllable: 'Digoksin', drugName: 'Digoxin Immune Fab (DigiFab)', isDoen: true, badgeType: 'Aritmia Digoksin', typicalSideEffect: 'Antibodi fragmen Fab mengikat digoksin bebas di plasma menormalkan konduksi nodus AV' },
              { syllable: 'Metanol', drugName: 'Etanol 10% IV / Fomepizol', isDoen: true, badgeType: 'Asidosis Format', typicalSideEffect: 'Inhibitor kompetitif alkohol dehidrogenase mencegah pembentukan asam format perusak saraf mata' }
            ],
            clinicalKeyPearls: 'Keracunan Metanol (miras oplosan): Metanol sendiri tidak terlalu toksik, tetapi dimetabolisme oleh alkohol dehidrogenase menjadi Asam Format yang merusak retina mata (kebutaan permanen) dan memicu asidosis metabolik berat. Antidot Etanol atau Fomepizol bersaing memperebutkan enzim tersebut.',
            clinicalWarnings: 'Keracunan Logam Berat Timbal (Pb) dan Merkuri (Hg): Gunakan zat pengkelat Dimercaprol (BAL) atau Succimer (DMSA) / CaNa2-EDTA. Jangan berikan BAL oral karena hanya efektif via injeksi intramuskular dalam larutan minyak kacang.',
            comparisonTable: [
              { drugFormula: 'Natrium Tiosulfat 25%', mechanism: 'Donor gugus sulfur bagi enzim rodanase mitokondria', detailedSideEffects: 'Mual, muntah, hipotensi bila infus terlalu cepat', fdaCategory: 'C' },
              { drugFormula: 'Deferoksamin 500mg Vial', mechanism: 'Agen pengkelat besi heksadentat afinitas tinggi ion Fe3+', detailedSideEffects: 'Urin merah anggur vin rose, hipotensi, reaksi kulit', fdaCategory: 'C' },
              { drugFormula: 'DigiFab 40mg Vial', mechanism: 'Fragmen antibodi monoklonal pengikat digoksin bebas', detailedSideEffects: 'Hipokalemia rebound, perburukan gagal jantung', fdaCategory: 'C' }
            ],
            relatedTabKey: 'toxicology',
            relatedDrugName: 'Digoksin'
          }
        ]
      }
    ]
  }
];

// Helper functions
export function getAllDrugNotes(): DrugNoteItem[] {
  const all: DrugNoteItem[] = [];
  for (const ch of DRUG_NOTES_DATABASE) {
    for (const sub of ch.subChapters) {
      all.push(...sub.items);
    }
  }
  return all;
}

export function searchDrugNotes(query: string): DrugNoteItem[] {
  const q = query.toLowerCase().trim();
  if (!q) return getAllDrugNotes();

  return getAllDrugNotes().filter(item => 
    item.heroMnemonic.toLowerCase().includes(q) ||
    item.rhymeTagline.toLowerCase().includes(q) ||
    item.subChapterTitle.toLowerCase().includes(q) ||
    item.breadcrumb.toLowerCase().includes(q) ||
    item.categoryTag.toLowerCase().includes(q) ||
    item.syllableBreakdown.some(s => s.drugName.toLowerCase().includes(q) || s.syllable.toLowerCase().includes(q)) ||
    item.comparisonTable.some(c => c.drugFormula.toLowerCase().includes(q) || c.mechanism.toLowerCase().includes(q))
  );
}
