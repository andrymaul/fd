import type { DrugNoteItem, DrugNotesChapter } from './drugNotesData';

// ============================================================================
// BATCH 2: EKSPANSI LENGKAP CATATAN HAFALAN & JEMBATAN KELEDAI KLINIS FARMASI
// Materi UKMPPAI (CBT/OSCE), UKTVF (D3), SKB CPNS & Praktik Farmasi Klinis RS
// Total 29 Catatan Baru • 2 Bab Baru (BAB 19 & BAB 20)
// ============================================================================

export const ADDITIONAL_SUBCHAPTERS_MAP: Record<string, DrugNotesChapter['subChapters']> = {
  // BAB 1: KEAMANAN OBAT HAMIL & LAKTASI
  'bab-1': [
    {
      id: 'sub-1-5',
      number: '1.5',
      title: 'Pematangan Paru Janin & Tokolitik Preterm (Deksa 4x6 • Beta 2x12 • Ni-To)',
      items: [
        {
          id: 'note-1-5',
          chapterId: 'bab-1',
          chapterNumber: 'BAB 1',
          chapterTitle: 'Keamanan Obat Hamil & Laktasi',
          subChapterNumber: '1.5',
          subChapterTitle: 'Pematangan Paru Janin & Tokolitik Preterm',
          breadcrumb: 'KEAMANAN HAMIL > PARU JANIN & TOKOLITIK PRETERM',
          categoryTag: 'OBSTETRI & FETOMATERNAL',
          heroMnemonic: 'Deksa 4x6 • Beta 2x12 • Ni-To-Sal',
          rhymeTagline: 'Deksa 4 kali 6 miligram tiap 12 jam, Beta 2 kali 12 miligram tiap 24 jam, Nifedipin tokolitik relaksasi rahim, MgSO4 kawal saraf janin!',
          syllableBreakdown: [
            { syllable: 'Deksa 4x6', drugName: 'Deksametason 6 mg IM (Tiap 12 Jam, Total 4 Dosis)', isDoen: true, badgeType: 'Induksi Surfaktan', typicalSideEffect: 'Stimulasi pneumosit tipe II janin memproduksi surfaktan, cegah RDS' },
            { syllable: 'Beta 2x12', drugName: 'Betametason 12 mg IM (Tiap 24 Jam, Total 2 Dosis)', isDoen: true, badgeType: 'Sawar Plasenta', typicalSideEffect: 'Afinitas tinggi reseptor glukokortikoid plasenta tanpa inaktivasi maternal berlebih' },
            { syllable: 'Ni-To', drugName: 'Nifedipin 10-20 mg Oral / Atosiban IV (Tokolitik)', isDoen: true, badgeType: 'Relaksasi Uterus', typicalSideEffect: 'Blokade influks kalsium miometrium menunda persalinan 48 jam demi steroid bekerja' },
            { syllable: 'MgSO4', drugName: 'Magnesium Sulfat 4g Bolus IV lanjut 1g/jam', isDoen: true, badgeType: 'Neuroproteksi Janin', typicalSideEffect: 'Pencegahan cerebral palsy janin prematur < 32 minggu; awas henti napas & hilangnya refleks patela' }
          ],
          clinicalKeyPearls: 'Kortikosteroid antenatal wajib diberikan pada usia kehamilan 24-34 minggu dengan ancaman persalinan prematur dalam 7 hari ke depan. Tujuannya adalah mempercepat pematangan paru janin dengan memproduksi surfaktan (dipalmitoilfosfatidilkolin), menurunkan mortalitas neonatal, RDS, dan perdarahan intraventrikular hingga 50%.',
          clinicalWarnings: 'Tokolitik golongan Beta-2 Agonis (Salbutamol, Terbutalin) memiliki risiko tinggi memicu edema paru maternal akut dan takikardia berat bila dikombinasikan dengan kortikosteroid dosis tinggi. Nifedipin oral adalah tokolitik lini pertama yang jauh lebih aman.',
          comparisonTable: [
            { drugFormula: 'Deksametason 6mg IM', mechanism: 'Induksi maturasi sel alveolar tipe II & transkripsi gen protein surfaktan', detailedSideEffects: 'Hiperglikemia maternal sementara, leukositosis transien janin', fdaCategory: 'C' },
            { drugFormula: 'Betametason 12mg IM', mechanism: 'Glukokortikoid terfluorinasi afinitas tinggi sawar plasenta janin', detailedSideEffects: 'Supresi variabilitas denyut jantung janin sementara 24-48 jam', fdaCategory: 'C' },
            { drugFormula: 'Nifedipin 20mg Oral', mechanism: 'Penghambat kanal kalsium tipe L miometrium meredam kontraksi rahim', detailedSideEffects: 'Flushing wajah, hipotensi maternal, takikardia kompensasi', fdaCategory: 'C' }
          ],
          relatedTabKey: 'pregnancy',
          relatedDrugName: 'Deksametason'
        }
      ]
    }
  ],

  // BAB 2: OBAT KARDIOVASKULAR
  'bab-2': [
    {
      id: 'sub-2-7',
      number: '2.7',
      title: 'DOAC / NOAC vs Warfarin & Antidot Spesifik (Dabi-Trombin • Riva-Apix-Xa)',
      items: [
        {
          id: 'note-2-7',
          chapterId: 'bab-2',
          chapterNumber: 'BAB 2',
          chapterTitle: 'Obat Kardiovaskular',
          subChapterNumber: '2.7',
          subChapterTitle: 'DOAC / NOAC vs Warfarin & Antidot Spesifik',
          breadcrumb: 'KARDIOVASKULAR > NOAC DABI RIVA APIX & ANTIDOT',
          categoryTag: 'ANTIKOAGULAN ORAL',
          heroMnemonic: 'Dabi-Trombin • Riva-Apix-Xa',
          rhymeTagline: 'Dabigatran gembok Trombin ada Praxbind, Riva dan Apix sergap Faktor Xa punya Andexanet, Warfarin murah tapi wajib pantau INR!',
          syllableBreakdown: [
            { syllable: 'Dabi', drugName: 'Dabigatran Etexilate 110/150 mg (Inhibitor IIa Trombin)', isDoen: true, badgeType: 'Inhibitor IIa', typicalSideEffect: 'Dispepsia/nyeri ulu hati khas (30%); kapsul higroskopis wajib dalam blister asli; Antidot: Idarucizumab (Praxbind)' },
            { syllable: 'Riva', drugName: 'Rivaroxaban 15-20 mg (Inhibitor Faktor Xa)', isDoen: true, badgeType: 'Inhibitor Xa', typicalSideEffect: 'Wajib diminum bersama makanan berlemak untuk absorpsi optimal; Antidot: Andexanet alfa' },
            { syllable: 'Apix', drugName: 'Apixaban 2.5-5 mg (Inhibitor Faktor Xa)', isDoen: true, badgeType: 'Inhibitor Xa', typicalSideEffect: 'Ekskresi ginjal paling rendah (27%), profil keamanan pendarahan terbaik pada lansia geriatri' },
            { syllable: 'Warfarin', drugName: 'Warfarin 1-5 mg (Antagonis Vitamin K)', isDoen: true, badgeType: 'Antagonis Vit K', typicalSideEffect: 'Target INR 2.0-3.0 (2.5-3.5 katup mekanik); interaksi makanan kaya Vit K; Antidot: Vitamin K1 + Konyne/PCC' }
          ],
          clinicalKeyPearls: 'DOAC/NOAC tidak memerlukan pemeriksaan lab berkala (INR) dan memiliki risiko perdarahan intrakranial yang jauh lebih rendah daripada Warfarin. Namun Warfarin tetap menjadi pilihan mutlak (KONTRAINDIKASI NOAC) pada pasien Fibrilasi Atrium dengan stenosis mitral sedang-berat atau katup jantung mekanik.',
          clinicalWarnings: 'Kapsul Dabigatran DILARANG KERAS dibuka atau digerus karena bioavailabilitasnya akan meroket hingga 75% dan memicu perdarahan fatal saluran cerna!',
          comparisonTable: [
            { drugFormula: 'Dabigatran 150mg', mechanism: 'Penghambat langsung kompetitif enzim trombin bebas dan terikat bekuan', detailedSideEffects: 'Dispepsia asam lambung, perdarahan GI, hematoma', fdaCategory: 'C' },
            { drugFormula: 'Rivaroxaban 20mg', mechanism: 'Inhibitor selektif langsung faktor pembekuan Xa bebas dan kompleks protrombinase', detailedSideEffects: 'Perdarahan mukosa, anemia, peningkatan enzim transaminase hepar', fdaCategory: 'C' },
            { drugFormula: 'Warfarin 2mg', mechanism: 'Inhibisi enzim vitamin K epoksida reduktase faktor pembekuan II, VII, IX, X', detailedSideEffects: 'Nekrosis kulit warfarin, perdarahan masif jika INR melonjak', fdaCategory: 'X' }
          ],
          relatedTabKey: 'interactions',
          relatedDrugName: 'Warfarin'
        }
      ]
    },
    {
      id: 'sub-2-8',
      number: '2.8',
      title: 'Antiplatelet Ganda (DAPT) Pasca-PCI Ring Jantung (Klospi • Tika • Prasu)',
      items: [
        {
          id: 'note-2-8',
          chapterId: 'bab-2',
          chapterNumber: 'BAB 2',
          chapterTitle: 'Obat Kardiovaskular',
          subChapterNumber: '2.8',
          subChapterTitle: 'Antiplatelet Ganda (DAPT) Pasca Pasang Ring Jantung',
          breadcrumb: 'KARDIOVASKULAR > DAPT KLOSPI TIKA PRASU',
          categoryTag: 'ANTIPLATELET P2Y12',
          heroMnemonic: 'Klospi Hati • Tika Sesak • Prasu Kuat',
          rhymeTagline: 'Klopidogrel butuh enzim CYP2C19 hati, Tikagrelor bikin napas megap-megap dispnea reversibel, Prasugrel ampuh pantang riwayat stroke TIA!',
          syllableBreakdown: [
            { syllable: 'Klospi', drugName: 'Klopidogrel 75 mg (Loading 300-600 mg)', isDoen: true, badgeType: 'Prodrug CYP2C19', typicalSideEffect: 'Resistensi genetik CYP2C19 poor metabolizer; interaksi fatal penurunan efek bila digabung Omeprazol' },
            { syllable: 'Tika', drugName: 'Tikagrelor 90 mg BID (Loading 180 mg)', isDoen: true, badgeType: 'Reversibel Langsung', typicalSideEffect: 'Bukan prodrug; efek samping khas dispnea (sesak napas non-kardiak 15%) & hiperurisemia asam urat' },
            { syllable: 'Prasu', drugName: 'Prasugrel 10 mg (Loading 60 mg)', isDoen: true, badgeType: 'Potensi Terkuat', typicalSideEffect: 'Onset super cepat; KONTRAINDIKASI MUTLAK pada riwayat TIA atau stroke perdarahan serebral' }
          ],
          clinicalKeyPearls: 'DAPT (Aspirin + Penghambat P2Y12) wajib diberikan minimal 6-12 bulan pasca pasang ring jantung (Drug-Eluting Stent) untuk mencegah trombosis stent akut yang mematikan. Bila pasien butuh obat pelindung lambung (PPI), pilih PANTOPRAZOL karena memiliki hambatan paling minimal terhadap enzim CYP2C19 dibandingkan Omeprazol.',
          clinicalWarnings: 'Waktu henti sebelum operasi besar elektif: Tikagrelor dihentikan 3-5 hari sebelum operasi, Klopidogrel 5 hari, dan Prasugrel 7 hari untuk mencegah pendarahan bedah yang tidak terkendali.',
          comparisonTable: [
            { drugFormula: 'Klopidogrel 75mg', mechanism: 'Inhibitor ireversibel reseptor ADP P2Y12 platelet via aktivasi hepar CYP2C19', detailedSideEffects: 'Purpura, memar kulit, perdarahan lambung', fdaCategory: 'B' },
            { drugFormula: 'Tikagrelor 90mg', mechanism: 'Antagonis alosterik reversibel reseptor P2Y12 & inhibitor transporter adenosin ENT1', detailedSideEffects: 'Dispnea sesak napas transien, bradikardia ventrikular', fdaCategory: 'C' },
            { drugFormula: 'Prasugrel 10mg', mechanism: 'Prodrug tienopiridin ireversibel afinitas tinggi reseptor P2Y12 platelet', detailedSideEffects: 'Perdarahan masif mayor saluran cerna dan intrakranial', fdaCategory: 'B' }
          ],
          relatedTabKey: 'interactions',
          relatedDrugName: 'Clopidogrel'
        }
      ]
    },
    {
      id: 'sub-2-9',
      number: '2.9',
      title: 'Krisis Hipertensi: Emergensi vs Urgensi & Titrasi IV (Niko • Nitro • Labe 25%)',
      items: [
        {
          id: 'note-2-9',
          chapterId: 'bab-2',
          chapterNumber: 'BAB 2',
          chapterTitle: 'Obat Kardiovaskular',
          subChapterNumber: '2.9',
          subChapterTitle: 'Krisis Hipertensi: Emergensi vs Urgensi & Titrasi IV',
          breadcrumb: 'KARDIOVASKULAR > KRISIS HIPERTENSI EMERGENSI',
          categoryTag: 'HIPERTENSI DARURAT',
          heroMnemonic: 'Niko - Nitro - Labe Turun 25%',
          rhymeTagline: 'Emergensi ada kerusakan organ target rawat ICU, Nikardipin titrasi halus, Nitrogliserin untuk edema paru & jantung, pantang turun drastis cegah stroke!',
          syllableBreakdown: [
            { syllable: 'Emergensi', drugName: 'TD > 180/120 mmHg + Kerusakan Organ Target Akut', isDoen: true, badgeType: 'ICU Monitoring', typicalSideEffect: 'Ensefalopati, diseksi aorta, edema paru kardiogenik, sindrom koroner akut, eklamsia' },
            { syllable: 'Urgensi', drugName: 'TD > 180/120 mmHg TANPA Kerusakan Organ Akut', isDoen: true, badgeType: 'Oral Rawat Jalan', typicalSideEffect: 'Cukup obat oral (Kaptopril, Klonidin, Labetalol oral); target turun bertahap dalam 24-48 jam' },
            { syllable: 'Niko', drugName: 'Nikardipin IV 5-15 mg/jam (CCB Dihidropiridin)', isDoen: true, badgeType: 'Vasodilator Arteri', typicalSideEffect: 'Lini utama stroke iskemik/perdarahan & ensefalopati hipertensi; titrasi naik tiap 5-15 menit' },
            { syllable: 'Nitro', drugName: 'Nitrogliserin IV 5-100 mcg/menit / Dinitrat', isDoen: true, badgeType: 'Venodilator Preload', typicalSideEffect: 'Lini utama edema paru akut kardiogenik & infark miokard akut; sakit kepala berdenyut' },
            { syllable: 'Turun 25%', drugName: 'Prinsip MAP (Mean Arterial Pressure)', isDoen: true, badgeType: 'Kaidah Emas MAP', typicalSideEffect: 'Turunkan MAP maksimal 20-25% di jam pertama, lalu ke 160/100 dalam 2-6 jam berikutnya' }
          ],
          clinicalKeyPearls: 'Jangan menurunkan tekanan darah terlalu cepat atau normal seketika pada krisis hipertensi! Penurunan mendadak akan melumpuhkan autoregulasi vaskular serebral dan memicu hipoperfusi otak, infark iskemia serebral (stroke iatrogenik), dan kebutaan mendadak.',
          clinicalWarnings: 'Pengecualian aturan 25%: Pada DISEDIA AORTA AKUT, tekanan darah sistolik WAJIB diturunkan secara agresif hingga < 120 mmHg dan denyut jantung < 60 bpm dalam 20 menit pertama menggunakan Esmolol/Labetalol IV!',
          comparisonTable: [
            { drugFormula: 'Nikardipin IV 5mg/jam', mechanism: 'Blokade influks kalsium otot polos pembuluh darah arteriol resistensi perifer', detailedSideEffects: 'Takikardia refleks, flebitis vena perifer, sakit kepala', fdaCategory: 'C' },
            { drugFormula: 'Nitrogliserin IV 10mcg/mnt', mechanism: 'Pelepasan nitric oxide (NO) merelaksasi vena kapasitansi & arteri koroner', detailedSideEffects: 'Hipotensi berat, sakit kepala hebat, takifilaksis toleransi nitrat', fdaCategory: 'C' },
            { drugFormula: 'Labetalol IV 20mg Bolus', mechanism: 'Blokade gabungan reseptor alfa-1 adrenergik dan beta non-selektif', detailedSideEffects: 'Bradikardia, bronkospasme, blok jantung AV', fdaCategory: 'C' }
          ],
          relatedTabKey: 'interactions',
          relatedDrugName: 'Nikardipin'
        }
      ]
    }
  ],

  // BAB 3: OBAT SALURAN CERNA
  'bab-3': [
    {
      id: 'sub-3-6',
      number: '3.6',
      title: 'Antiemetik Multi-Jalur Reseptor (Metok • Ondan • Apre • Dimen)',
      items: [
        {
          id: 'note-3-6',
          chapterId: 'bab-3',
          chapterNumber: 'BAB 3',
          chapterTitle: 'Obat Saluran Cerna',
          subChapterNumber: '3.6',
          subChapterTitle: 'Antiemetik Multi-Jalur Reseptor Mual Muntah',
          breadcrumb: 'SALURAN CERNA > ANTIEMETIK METOK ONDAN APRE',
          categoryTag: 'ANTIEMETIK KLINIK',
          heroMnemonic: 'Metok-Dopamin • Ondan-Serotonin • Apre-NK1',
          rhymeTagline: 'Metoklopramid sergap dopamin pacu lambung, Ondansetron blok 5-HT3 kemo akut, Aprepitant cegah mual tunda, Dimenhidrinat mabuk perjalanan!',
          syllableBreakdown: [
            { syllable: 'Metok', drugName: 'Metoklopramid 10 mg (Antagonis D2 + Prokinetik)', isDoen: true, badgeType: 'Antagonis D2', typicalSideEffect: 'Efektif gastroparesis diabetik & mual umum; awas distonia ekstrapiramidal kaku leher pada anak/remaja' },
            { syllable: 'Ondan', drugName: 'Ondansetron 4-8 mg (Antagonis 5-HT3 Serotonin)', isDoen: true, badgeType: 'Antagonis 5-HT3', typicalSideEffect: 'Emas mual kemoterapi akut & pasca operasi (PONV); efek samping konstipasi & pemanjangan QTc' },
            { syllable: 'Apre', drugName: 'Aprepitant 125/80 mg (Antagonis Reseptor NK1)', isDoen: true, badgeType: 'Antagonis NK1', typicalSideEffect: 'Menghambat ikatan substansi P; wajib untuk kemoterapi highly emetogenic mual tertunda hari ke 2-5' },
            { syllable: 'Dimen', drugName: 'Dimenhidrinat 50 mg (Antihistamin H1 + Antikolinergik)', isDoen: true, badgeType: 'Anti-Kinetosis', typicalSideEffect: 'Mual mabuk perjalanan (motion sickness) & vertigo telinga dalam; efek sedasi kantuk berat' }
          ],
          clinicalKeyPearls: 'Domperidon adalah alternatif Metoklopramid yang tidak menembus sawar darah otak (BBB) dengan mudah, sehingga risiko efek samping ekstrapiramidal (EPS) jauh lebih rendah. Namun Domperidon tetap berisiko memanjangkan interval QTc pada dosis > 30 mg/hari.',
          clinicalWarnings: 'Ondansetron dosis tinggi intravena (> 16 mg sekali suntik) dilarang FDA karena risiko aritmia ventrikel Torsades de Pointes fatal. Maksimal dosis tunggal IV adalah 16 mg (atau lazimnya 4-8 mg).',
          comparisonTable: [
            { drugFormula: 'Metoklopramid 10mg', mechanism: 'Antagonis reseptor D2 dopaminergik di CTZ sentral & stimulasi motilitas GI atas', detailedSideEffects: 'Gejala ekstrapiramidal akatisia, hiperprolaktinemia, kantuk', fdaCategory: 'B' },
            { drugFormula: 'Ondansetron 8mg', mechanism: 'Blokade selektif reseptor serotonin 5-HT3 perifer nervus vagus & sentral CTZ', detailedSideEffects: 'Konstipasi, sakit kepala ringan, pemanjangan gelombang QTc', fdaCategory: 'B' },
            { drugFormula: 'Aprepitant 125mg', mechanism: 'Penghambat selektif afinitas tinggi reseptor neurokinin-1 (NK-1) substansi P otak', detailedSideEffects: 'Kelelahan, cegukan (hiccups), interaksi induksi/inhibisi CYP3A4', fdaCategory: 'B' }
          ],
          relatedTabKey: 'interactions',
          relatedDrugName: 'Ondansetron'
        }
      ]
    },
    {
      id: 'sub-3-7',
      number: '3.7',
      title: 'Terapi Inflammatory Bowel Disease (IBD): Kolitis & Crohn (Sulfa • Mesa • Inflix)',
      items: [
        {
          id: 'note-3-7',
          chapterId: 'bab-3',
          chapterNumber: 'BAB 3',
          chapterTitle: 'Obat Saluran Cerna',
          subChapterNumber: '3.7',
          subChapterTitle: 'Terapi Inflammatory Bowel Disease (IBD): Kolitis & Crohn',
          breadcrumb: 'SALURAN CERNA > IBD SULFA MESA INFLIX',
          categoryTag: 'IBD & GASTROENTEROLOGI',
          heroMnemonic: 'Sulfa-Folat • Mesa-Kolon • Inflix-TNF',
          rhymeTagline: 'Sulfasalazin wajib kawal Asam Folat, Mesalazin lepas spesifik di usus tanpa efek sulfa, Infliximab biologis anti-TNF untuk kasus refrakter berat!',
          syllableBreakdown: [
            { syllable: 'Sulfa', drugName: 'Sulfasalazin 500mg-1g (5-ASA + Sulfapiridin)', isDoen: true, badgeType: 'Prodrug 5-ASA', typicalSideEffect: 'Dipecah bakteri kolon; sulfapiridin hambat serapan asam folat (wajib suplemen asam folat 1 mg/hari)' },
            { syllable: 'Mesa', drugName: 'Mesalazin 400-800mg (Asam 5-Aminosalisilat Murni)', isDoen: true, badgeType: 'Salisilat Usus', typicalSideEffect: 'Formulasi pelepasan bertahap di ileum/kolon, bebas komponen sulfa; lebih ramah lambung dan ginjal' },
            { syllable: 'Korti', drugName: 'Budesonid 9mg Granul / Metilprednisolon', isDoen: true, badgeType: 'Induksi Remisi', typicalSideEffect: 'Budesonid metabolisme lintas pertama tinggi (90%) hepar; efek samping steroid sistemik minimal' },
            { syllable: 'Inflix', drugName: 'Infliximab 5 mg/kg IV / Adalimumab SC (Anti-TNF)', isDoen: true, badgeType: 'Biologis Anti-TNF', typicalSideEffect: 'Biologis kasus sedang-berat refrakter; WAJIB skrining Mantoux/IGRA TB laten sebelum mulai' }
          ],
          clinicalKeyPearls: 'Sulfasalazin dapat menyebabkan perubahan warna urine dan cairan tubuh menjadi kuning-oranye kecokelatan serta mewarnai lensa kontak permanen. Pasien pria perlu diedukasi bahwa Sulfasalazin dapat menurunkan jumlah sperma reversibel (oligospermia) yang akan normal kembali saat obat dihentikan.',
          clinicalWarnings: 'Pasien pengguna terapi biologis Anti-TNF (Infliximab/Adalimumab) memiliki risiko reaktivasi fatal infeksi Tuberkulosis milier dan infeksi jamur oportunistik. Terapi harus ditunda bila pasien mengalami infeksi bakteri aktif.',
          comparisonTable: [
            { drugFormula: 'Sulfasalazin 500mg', mechanism: 'Senyawa azo dipecah azoreduktase bakteri kolon menjadi 5-ASA lokal & sulfapiridin', detailedSideEffects: 'Anemia hemolitik, defisiensi folat, ruam alergi sulfa, mual', fdaCategory: 'B' },
            { drugFormula: 'Mesalazin 800mg', mechanism: 'Menghambat siklooksigenase dan lipooksigenase sintesis leukotrien di mukosa kolon', detailedSideEffects: 'Sakit kepala, nefritis interstisial jarang, kram perut', fdaCategory: 'B' },
            { drugFormula: 'Infliximab 100mg Vial', mechanism: 'Antibodi monoklonal chimeric pengikat sitokin proinflamasi TNF-alfa terlarut & transmembran', detailedSideEffects: 'Reaktivasi TB, infeksi oportunistik berat, reaksi infus anafilaksis', fdaCategory: 'B' }
          ],
          relatedTabKey: 'interactions',
          relatedDrugName: 'Sulfasalazin'
        }
      ]
    }
  ],

  // BAB 4: OBAT SALURAN PERNAPASAN
  'bab-4': [
    {
      id: 'sub-4-5',
      number: '4.5',
      title: 'Antileukotrien (LTRA) & Teofilin TDM Sempit (Monte Malam • Teo 10-20)',
      items: [
        {
          id: 'note-4-5',
          chapterId: 'bab-4',
          chapterNumber: 'BAB 4',
          chapterTitle: 'Obat Saluran Pernapasan',
          subChapterNumber: '4.5',
          subChapterTitle: 'Antileukotrien (LTRA) & Teofilin TDM Sempit',
          breadcrumb: 'PERNAPASAN > MONTELUKAST & TEOFILIN TDM',
          categoryTag: 'ASMA & PPOK KONTROL',
          heroMnemonic: 'Monte Malam Mimpi • Teo 10-20 Sempit',
          rhymeTagline: 'Montelukast malam redam asma nokturnal awas mimpi buruk, Teofilin rentang sempit 10-20 mikrogram per mili, rokok bikin klirens ngebut!',
          syllableBreakdown: [
            { syllable: 'Monte', drugName: 'Montelukast 10 mg (LTRA Oral Sekali Sehari)', isDoen: true, badgeType: 'Antagonis CysLT1', typicalSideEffect: 'Efektif untuk asma nokturnal & asma pemicu olahraga (EIB); diminum malam hari' },
            { syllable: 'Mimpi', drugName: 'Boxed Warning FDA Efek Neuropsikiatri', isDoen: true, badgeType: 'Black Box Warning', typicalSideEffect: 'Mimpi buruk agresif, halusinasi, insomnia, depresi hingga ide bunuh diri terutama pada anak' },
            { syllable: 'Teo', drugName: 'Teofilin / Aminofilin (Inhibitor PDE Non-Selektif)', isDoen: true, badgeType: 'TDM Sempit 10-20', typicalSideEffect: 'Rentang terapi sempit 10-20 mcg/mL; toksisitas: takiaritmia jantung, tremor, kejang refrakter' },
            { syllable: 'Rokok', drugName: 'Interaksi Enzim CYP1A2 Hati', isDoen: true, badgeType: 'Klirens CYP1A2', typicalSideEffect: 'Asap rokok menginduksi CYP1A2 (butuh dosis teofilin 50-100% lebih besar); siprofloksasin hambat CYP1A2' }
          ],
          clinicalKeyPearls: 'Jika seorang perokok berat penderita PPOK dirawat inap dan berhenti merokok mendadak, klirens teofilin akan anjlok drastis dalam beberapa hari. Jika dosis teofilin tidak segera diturunkan, kadar serum akan melompat ke level toksik (> 20 mcg/mL) memicu kejang dan aritmia ventrikel.',
          clinicalWarnings: 'Kombinasi Teofilin dengan Antibiotik Ciprofloxacin atau Eritromisin sangat berbahaya karena antibiotik tersebut merupakan inhibitor kuat CYP1A2 yang menggandakan kadar teofilin dalam darah.',
          comparisonTable: [
            { drugFormula: 'Montelukast 10mg', mechanism: 'Antagonis selektif reseptor leukotrien D4 (CysLT1) meredakan bronkokonstriksi & radang', detailedSideEffects: 'Perubahan neuropsikiatri perilaku, mimpi buruk, sakit kepala', fdaCategory: 'B' },
            { drugFormula: 'Teofilin 150mg', mechanism: 'Inhibisi fosfodiesterase (PDE) meningkatkan cAMP intraseluler & antagonis adenosin', detailedSideEffects: 'Palpitasi jantung, mual muntah, tremor, aritmia, kejang', fdaCategory: 'C' },
            { drugFormula: 'Zafirlukast 20mg', mechanism: 'Penghambat reseptor leukotrien oral; diminum 1 jam sebelum atau 2 jam setelah makan', detailedSideEffects: 'Hepatotoksik berat jarang, interaksi CYP2C9 dengan Warfarin', fdaCategory: 'B' }
          ],
          relatedTabKey: 'interactions',
          relatedDrugName: 'Teofilin'
        }
      ]
    }
  ],

  // BAB 5: OBAT NEUROLOGI
  'bab-5': [
    {
      id: 'sub-5-5',
      number: '5.5',
      title: 'Stroke Iskemik Akut: Trombolitik rt-PA Golden Period (Alteplase Emas 4.5 Jam)',
      items: [
        {
          id: 'note-5-5',
          chapterId: 'bab-5',
          chapterNumber: 'BAB 5',
          chapterTitle: 'Obat Neurologi',
          subChapterNumber: '5.5',
          subChapterTitle: 'Stroke Iskemik Akut: Trombolitik rt-PA Golden Period',
          breadcrumb: 'NEUROLOGI > STROKE ISKEMIK ALTEPLASE 4.5 JAM',
          categoryTag: 'EMERGENSI NEUROLOGI',
          heroMnemonic: 'Alteplase Emas 4.5 Jam • Tunda Aspirin 24 Jam',
          rhymeTagline: 'Alteplase leburkan trombus dalam 4.5 jam, syarat mutlak tensi bawah 185/110, haram beri aspirin atau heparin sebelum 24 jam!',
          syllableBreakdown: [
            { syllable: 'Alteplase', drugName: 'Alteplase (rt-PA) 0.9 mg/kgBB (Maksimal 90 mg)', isDoen: true, badgeType: 'Fibrinolitik Rekombinan', typicalSideEffect: '10% dosis diberikan bolus IV 1 menit, sisa 90% infus kontinu dalam 60 menit' },
            { syllable: '4.5 Jam', drugName: 'Golden Period Onset Stroke Iskemik', isDoen: true, badgeType: 'Jendela Waktu Emas', typicalSideEffect: 'Wajib dihitung sejak waktu terakhir pasien terlihat sehat normal (last known well)' },
            { syllable: 'Tensi 185', drugName: 'Target Tekanan Darah < 185/110 mmHg', isDoen: true, badgeType: 'Syarat Tensi Ketat', typicalSideEffect: 'Tensi > 185/110 wajib diturunkan dahulu (Nikardipin/Labetalol IV) sebelum rt-PA dimulai cegah pecah pembuluh otak' },
            { syllable: 'Tunda 24J', drugName: 'Antiplatelet & Antikoagulan DILARANG 24 Jam', isDoen: true, badgeType: 'Pantang Aspirin 24 Jam', typicalSideEffect: 'CT-scan ulang kepala setelah 24 jam; jika bebas perdarahan, baru Aspirin 160-325 mg boleh dimulai' }
          ],
          clinicalKeyPearls: 'Jika pasien datang di luar jendela 4.5 jam dan tidak memenuhi kriteria trombektomi mekanik endovaskular, terapi medikamentosa lini pertama adalah segera berikan Aspirin 160-325 mg oral dalam 24-48 jam pertama untuk mencegah perluasan trombus.',
          clinicalWarnings: 'Waspadai komplikasi perdarahan intrakranial simptomatik dan angioedema orolingual (bibir dan lidah bengkak). Segera hentikan infus alteplase bila kesadaran memburuk mendadak atau tensi melonjak ekstrem!',
          comparisonTable: [
            { drugFormula: 'Alteplase IV 0.9mg/kg', mechanism: 'Mengubah plasminogen terikat fibrin menjadi plasmin aktif melisiskan bekuan fibrin trombus', detailedSideEffects: 'Perdarahan intrakranial fatal (6%), perdarahan gusi/saluran cerna', fdaCategory: 'C' },
            { drugFormula: 'Tenekteplase IV 0.25mg/kg', mechanism: 'Varian rt-PA rekayasa genetik spesifisitas fibrin lebih tinggi; disuntikkan bolus tunggal 5 detik', detailedSideEffects: 'Perdarahan mayor sistemik, hematoma tempat suntikan', fdaCategory: 'C' },
            { drugFormula: 'Aspirin 160-325mg', mechanism: 'Inhibitor ireversibel enzim COX-1 trombosit mencegah pembentukan tromboksan A2', detailedSideEffects: 'Ulkus peptikum, perdarahan mikro saluran cerna, bronkospasme', fdaCategory: 'D' }
          ],
          relatedTabKey: 'interactions',
          relatedDrugName: 'Aspirin'
        }
      ]
    },
    {
      id: 'sub-5-6',
      number: '5.6',
      title: 'Anti-Demensia Alzheimer: AChEI & Antagonis NMDA (Done • Riva • Memantin)',
      items: [
        {
          id: 'note-5-6',
          chapterId: 'bab-5',
          chapterNumber: 'BAB 5',
          chapterTitle: 'Obat Neurologi',
          subChapterNumber: '5.6',
          subChapterTitle: 'Anti-Demensia Alzheimer: AChEI & Antagonis NMDA',
          breadcrumb: 'NEUROLOGI > ALZHEIMER DONE RIVA MEMANTIN',
          categoryTag: 'GERIATRI & NEUROLOGI',
          heroMnemonic: 'Done-Riva-Galan Kolin • Memantin NMDA',
          rhymeTagline: 'Donepezil malam hari, Rivastigmin tempelan koyo perut aman, Galantamin kolinergik, Memantin lindungi neuron dari racun glutamat!',
          syllableBreakdown: [
            { syllable: 'Done', drugName: 'Donepezil 5-10 mg Oral (AChEI Reversibel)', isDoen: true, badgeType: 'AChEI Lini 1', typicalSideEffect: 'Diminum malam hari sebelum tidur; efek bradikardia, mimpi buruk, mual kram diare kolinergik' },
            { syllable: 'Riva', drugName: 'Rivastigmin Koyo Transdermal Patch / Oral', isDoen: true, badgeType: 'Dual AChEI + BuChEI', typicalSideEffect: 'Bentuk koyo transdermal memotong efek mual lambung hingga 70%; ganti tempat tempel tiap 24 jam' },
            { syllable: 'Meman', drugName: 'Memantin 5-20 mg (Antagonis Reseptor NMDA)', isDoen: true, badgeType: 'Neuroproteksi NMDA', typicalSideEffect: 'Lini utama Alzheimer derajat sedang hingga berat; hambat eksitotoksisitas kalsium akibat glutamat berlebih' }
          ],
          clinicalKeyPearls: 'Donepezil dan golongan penghambat asetilkolinesterase (AChEI) dapat memperlambat denyut nodus SA dan AV jantung. Hati-hati saat dikombinasikan dengan obat bradikardiogenik lain seperti Beta Blocker atau Diltiazem pada geriatri karena dapat memicu pingsan (sinkop) dan patah tulang panggul.',
          clinicalWarnings: 'JANGAN PERNAH meresepkan obat dengan efek antikolinergik kuat (seperti Triheksifenidil, Amitriptilin, Difenhidramin) pada penderita Alzheimer, karena obat tersebut langsung menetralkan kerja obat AChEI dan mempercepat perburukan demensia!',
          comparisonTable: [
            { drugFormula: 'Donepezil 10mg', mechanism: 'Penghambat selektif enzim asetilkolinesterase di sinaps saraf pusat otak', detailedSideEffects: 'Mual muntah, diare, insomnia mimpi aneh, kram otot, bradikardia', fdaCategory: 'C' },
            { drugFormula: 'Rivastigmin Patch 9.5mg', mechanism: 'Inhibitor pseudo-ireversibel enzim asetilkolinesterase & butirilkolinesterase', detailedSideEffects: 'Eritema iritasi kulit tempat tempelan koyo, pusing, anoreksia', fdaCategory: 'B' },
            { drugFormula: 'Memantin 10mg', mechanism: 'Antagonis non-kompetitif berafinitas sedang pada reseptor NMDA glutamatergik', detailedSideEffects: 'Pusing, sakit kepala, konstipasi, hipertensi ringan', fdaCategory: 'B' }
          ],
          relatedTabKey: 'interactions',
          relatedDrugName: 'Donepezil'
        }
      ]
    },
    {
      id: 'sub-5-7',
      number: '5.7',
      title: 'Antivertigo: Meniere vs BPPV vs Motion Sickness (Beta • Sina • Dimen)',
      items: [
        {
          id: 'note-5-7',
          chapterId: 'bab-5',
          chapterNumber: 'BAB 5',
          chapterTitle: 'Obat Neurologi',
          subChapterNumber: '5.7',
          subChapterTitle: 'Antivertigo: Meniere vs BPPV vs Motion Sickness',
          breadcrumb: 'NEUROLOGI > VERTIGO BETA SINA DIMEN',
          categoryTag: 'THT & NEUROLOGI',
          heroMnemonic: 'Beta Meniere • Sina Labirin • Dimen Mabuk',
          rhymeTagline: 'Betahistin perbaiki aliran endolimfe telinga berdenging, Sinarizin redam kalsium labirin, Dimenhidrinat penenang mabuk perjalanan!',
          syllableBreakdown: [
            { syllable: 'Beta', drugName: 'Betahistin Mesilat 6 mg (3x1-2 tab) / Dimesilat 8-24 mg', isDoen: true, badgeType: 'Agonis Parsial H1', typicalSideEffect: 'Pilihan utama sindrom Meniere (vertigo berputar + telinga berdenging tinnitus + tuli fluktuatif)' },
            { syllable: 'Sina', drugName: 'Sinarizin 25 mg (CCB Antihistamin H1 Labirin)', isDoen: true, badgeType: 'Sedatif Labirin', typicalSideEffect: 'Menstabilkan sel rambut vestibular telinga dalam; efek samping kantuk berat & nafsu makan bertambah' },
            { syllable: 'Dimen', drugName: 'Dimenhidrinat 50 mg (Garam Difenhidramin + Teoklat)', isDoen: true, badgeType: 'Anti-Mabuk Kinetosis', typicalSideEffect: 'Profilaksis mabuk darat/laut; diminum 30-60 menit sebelum keberjalanan perjalanan' }
          ],
          clinicalKeyPearls: 'Pada Benign Paroxysmal Positional Vertigo (BPPV) akibat lepasnya kristal otolit kalsium di saluran setengah lingkaran, terapi kuratif nomor satu adalah MANUVER EPLEY / SEMONT, BUKAN terapi obat berkepanjangan!',
          clinicalWarnings: 'Betahistin memiliki sifat histaminergik; gunakan dengan sangat hati-hati pada penderita asma bronkial aktif dan riwayat ulkus peptikum lambung.',
          comparisonTable: [
            { drugFormula: 'Betahistin Mesilat 6mg', mechanism: 'Agonis reseptor H1 mikrosirkulasi telinga dalam & antagonis H3 autoreseptor', detailedSideEffects: 'Dispepsia lambung, ruam kulit ringan, sakit kepala', fdaCategory: 'B' },
            { drugFormula: 'Sinarizin 25mg', mechanism: 'Blokade kanal kalsium tipe T otot polos labirin & antagonis H1 sentral', detailedSideEffects: 'Sedasi kantuk kuat, gejala ekstrapiramidal parkinsonisme lansia', fdaCategory: 'C' },
            { drugFormula: 'Dimenhidrinat 50mg', mechanism: 'Antagonis reseptor histamin H1 dan muskarinik parasimpatis nukleus vestibularis', detailedSideEffects: 'Mulut kering, retensi urin, pandangan kabur, sedasi', fdaCategory: 'B' }
          ],
          relatedTabKey: 'interactions',
          relatedDrugName: 'Betahistin'
        }
      ]
    }
  ],

  // BAB 6: OBAT PSIKIATRI
  'bab-6': [
    {
      id: 'sub-6-4',
      number: '6.4',
      title: 'Sindrom Serotonin vs Sindrom Neuroleptik Maligna (Klonus vs Pipa Timbal)',
      items: [
        {
          id: 'note-6-4',
          chapterId: 'bab-6',
          chapterNumber: 'BAB 6',
          chapterTitle: 'Obat Psikiatri',
          subChapterNumber: '6.4',
          subChapterTitle: 'Sindrom Serotonin vs Sindrom Neuroleptik Maligna (SNM)',
          breadcrumb: 'PSIKIATRI > SINDROM SEROTONIN VS SNM',
          categoryTag: 'TOKSIKOLOGI PSIKIATRI',
          heroMnemonic: 'Klonus Serotonin • Pipa Timbal SNM',
          rhymeTagline: 'Serotonin bikin hiperaktif klonus pupil lebar obatnya Siproheptadin, SNM kaku pipa timbal demam ekstrem obatnya Dantrolen & Bromokriptin!',
          syllableBreakdown: [
            { syllable: 'Serotonin', drugName: 'Sindrom Serotonin (Onset Cepat < 24 Jam)', isDoen: true, badgeType: 'Hiperaktivitas Saraf', typicalSideEffect: 'Pemicu: SSRI + Tramadol / Linezolid / MAOI; Tanda: Hiperrefleksia, klonus ankle spontan, midriasis pupil, diare' },
            { syllable: 'Sipro', drugName: 'Siproheptadin 12 mg Lanjut 2 mg Tiap 2 Jam', isDoen: true, badgeType: 'Antidot Serotonin', typicalSideEffect: 'Antagonis kuat reseptor 5-HT2A menormalkan overaktivasi serotonergik sentral' },
            { syllable: 'SNM', drugName: 'Neuroleptic Malignant Syndrome (Onset Hari-Minggu)', isDoen: true, badgeType: 'Blokade Dopamin Masif', typicalSideEffect: 'Pemicu: Haloperidol / antipsikotik tipikal; Tanda: Kaku pipa timbal (lead-pipe), demam ekstrem > 40C, CK meroket' },
            { syllable: 'Dantro', drugName: 'Dantrolen IV + Bromokriptin Oral (Antidot SNM)', isDoen: true, badgeType: 'Antidot SNM', typicalSideEffect: 'Dantrolen lemaskan rianodin otot skelet, Bromokriptin kembalikan agonis dopamin hipotalamus' }
          ],
          clinicalKeyPearls: 'Trik beda kilat di UGD: Refleks tendon pada Sindrom Serotonin adalah HIPERREFLEKSI DENGAN KLONUS, sedangkan pada SNM refleksnya adalah HIPORREFLEKSI DENGAN KAKU SENDI RIGID (Lead-pipe rigidity).',
          clinicalWarnings: 'Periode cuci (Wash-out Period): Jangan pernah memulai terapi MAOI sebelum 14 hari pasca penghentian SSRI (khusus Fluoksetin wajib 5 MINGGU karena waktu paruh metabolit norfluoksetin yang sangat panjang) demi menghindari kematian akibat sindrom serotonin fatal!',
          comparisonTable: [
            { drugFormula: 'Sindrom Serotonin', mechanism: 'Toksisitas stimulasi berlebihan reseptor 5-HT1A dan 5-HT2A sentral & perifer', detailedSideEffects: 'Klonus tremor, agitasi, diaforesis, hipertermia ringan-sedang', fdaCategory: 'C' },
            { drugFormula: 'Sindrom Neuroleptik Maligna', mechanism: 'Blokade mendadak reseptor dopamin D2 korpus striatum & nukleus preoptik hipotalamus', detailedSideEffects: 'Rigiditas pipa timbal, demam > 40°C, rhabdomiolisis, gagal ginjal', fdaCategory: 'C' },
            { drugFormula: 'Dantrolen IV 1-2.5mg/kg', mechanism: 'Inhibisi pelepasan kalsium dari retikulum sarkoplasma via reseptor rianodin RyR1', detailedSideEffects: 'Pelemahan otot pernapasan, flebitis vena, hepatotoksisitas', fdaCategory: 'C' }
          ],
          relatedTabKey: 'toxicology',
          relatedDrugName: 'Haloperidol'
        }
      ]
    },
    {
      id: 'sub-6-5',
      number: '6.5',
      title: 'Antidepresan TCA & MAOI: Bahaya QTc & Krisis Keju (Ami QTc • MAOI Keju)',
      items: [
        {
          id: 'note-6-5',
          chapterId: 'bab-6',
          chapterNumber: 'BAB 6',
          chapterTitle: 'Obat Psikiatri',
          subChapterNumber: '6.5',
          subChapterTitle: 'Antidepresan TCA & MAOI: Bahaya QTc & Krisis Keju',
          breadcrumb: 'PSIKIATRI > TCA QTC & MAOI KRISIS KEJU',
          categoryTag: 'FARMAKOLOGI PSIKIATRI',
          heroMnemonic: 'Ami QTc Kolin • MAOI Keju Tiramin',
          rhymeTagline: 'Amitriptilin bikin mulut kering mata kabur QTc molor, MAOI ketemu tiramin keju tua meledak krisis hipertensi, Na-Bikarbonat selamatkan jantung TCA!',
          syllableBreakdown: [
            { syllable: 'Ami', drugName: 'Amitriptilin 25-75 mg (Antidepresan Trisiklik - TCA)', isDoen: true, badgeType: 'Antikolinergik Kuat', typicalSideEffect: 'Blokade muskarinik (mulut kering, konstipasi, retensi urin) & alfa-1 (hipotensi ortostatik jatuh)' },
            { syllable: 'QTc', drugName: 'Toksisitas Jantung Overdosis TCA', isDoen: true, badgeType: 'Blokade Kanal Na+', typicalSideEffect: 'Pelebaran kompleks QRS > 100 ms & aritmia ventrikel fatal; Antidot: Natrium Bikarbonat 8.4% IV' },
            { syllable: 'MAOI', drugName: 'Moklobemid / Fenelzin (Inhibitor Monoamin Oksidase)', isDoen: true, badgeType: 'Inhibitor MAO', typicalSideEffect: 'Hambat metabolisme amin biogenik usus; interaksi tiramin picu krisis hipertensi fatal (Cheese Reaction)' },
            { syllable: 'Keju', drugName: 'Diet Rendah Tiramin Pantang Keju Tua & Tape', isDoen: true, badgeType: 'Pantangan Diet', typicalSideEffect: 'Keju matang (cheddar/parmesan), daging asap/sosis fermentasi, tape ketan, anggur merah kaya tiramin' }
          ],
          clinicalKeyPearls: 'Indikasi modern Amitriptilin saat ini paling banyak adalah untuk terapi profilaksis migrain, nyeri neuropatik diabetik, dan insomnia dosis rendah (10-25 mg malam hari), bukan lagi sebagai lini pertama depresi mayor karena profil keamanannya yang sempit.',
          clinicalWarnings: 'Pasien depresi berat dengan riwayat atau risiko tinggi percobaan bunuh diri TIDAK BOLEH diresepkan TCA dalam jumlah banyak, karena menelan 1 blister TCA dapat berakibat fatal mematikan jantung!',
          comparisonTable: [
            { drugFormula: 'Amitriptilin 25mg', mechanism: 'Hambat reuptake 5-HT & NE, antagonis reseptor muskarinik, H1 histamin, & alfa-1', detailedSideEffects: 'Mulut kering, retensi urin, glaukoma akut sudut sempit, aritmia', fdaCategory: 'C' },
            { drugFormula: 'Moklobemid 150mg', mechanism: 'Inhibitor reversibel selektif enzim MAO-A (RIMA) degradasi serotonin & noradrenalin', detailedSideEffects: 'Insomnia, agitasi, krisis hipertensi bila makanan tiramin berlebih', fdaCategory: 'B' },
            { drugFormula: 'Natrium Bikarbonat 8.4%', mechanism: 'Memasok beban ion Na+ mengatasi blokade kanal natrium miokard & alkalisasi serum', detailedSideEffects: 'Alkalosis metabolik, hipokalemia, hipernatremia cairan', fdaCategory: 'C' }
          ],
          relatedTabKey: 'interactions',
          relatedDrugName: 'Amitriptilin'
        }
      ]
    }
  ],

  // BAB 7: OBAT ENDOKRIN & METABOLIK
  'bab-7': [
    {
      id: 'sub-7-5',
      number: '7.5',
      title: 'Incretin-Based Therapy: GLP-1 RA vs Penghambat DPP-4 (Lira-Sema • Lina)',
      items: [
        {
          id: 'note-7-5',
          chapterId: 'bab-7',
          chapterNumber: 'BAB 7',
          chapterTitle: 'Obat Endokrin & Metabolik',
          subChapterNumber: '7.5',
          subChapterTitle: 'Incretin-Based Therapy: GLP-1 RA vs Penghambat DPP-4',
          breadcrumb: 'ENDOKRIN > GLP1 LIRA SEMA & DPP4 LINA',
          categoryTag: 'DIABETES MODERN',
          heroMnemonic: 'Lira-Sema Kurus Jantung • Lina Bebas Ginjal',
          rhymeTagline: 'Liraglutid & Semaglutid tunda lapar jantung aman BB susut, Linagliptin tanpa hitung ginjal, Gliptin aman hipoglikemia minimal!',
          syllableBreakdown: [
            { syllable: 'Lira-Sema', drugName: 'Liraglutid (1x/hari) & Semaglutid SC (1x/minggu)', isDoen: true, badgeType: 'Agonis GLP-1 RA', typicalSideEffect: 'Stimulasi insulin dependen glukosa, tunda pengosongan lambung; kardioprotektif & turunkan BB masif' },
            { syllable: 'Lina', drugName: 'Linagliptin 5 mg Oral (Penghambat Enzim DPP-4)', isDoen: true, badgeType: 'Aman Ginjal 100%', typicalSideEffect: 'Ekskresi utama via hepatobilier feses (95%); TANPA PERLU PENYESUAIAN DOSIS pada gagal ginjal dialisis' },
            { syllable: 'Sita-Vilda', drugName: 'Sitagliptin 100 mg & Vildagliptin 50 mg', isDoen: true, badgeType: 'Perlu Renal Adjust', typicalSideEffect: 'Ekskresi renal tinggi; dosis wajib dipangkas separuh bila eGFR < 50 mL/menit' }
          ],
          clinicalKeyPearls: 'GLP-1 RA (Semaglutid/Liraglutid) dan DPP-4 Inhibitor (Linagliptin/Sitagliptin) TIDAK BOLEH DIKOMBINASIKAN BERSAMAAN karena keduanya bekerja pada sumbu jalur inkretin yang sama tanpa memberi efikasi tambahan.',
          clinicalWarnings: 'Boxed Warning GLP-1 RA: Kontraindikasi mutlak pada pasien dengan riwayat pribadi atau keluarga Karsinoma Tiroid Medular (MTC) dan sindrom Multiple Endocrine Neoplasia tipe 2 (MEN 2).',
          comparisonTable: [
            { drugFormula: 'Semaglutid 0.5mg SC', mechanism: 'Agonis reseptor GLP-1 sintetik resisten pemecahan enzim DPP-4 memacu sekresi insulin', detailedSideEffects: 'Mual muntah, gastroparesis, konstipasi, penurunan nafsu makan drastis', fdaCategory: 'C' },
            { drugFormula: 'Linagliptin 5mg Oral', mechanism: 'Penghambat enzim dipeptidil peptidase-4 memperpanjang masa kerja inkretin endogen', detailedSideEffects: 'Nasofaringitis, nyeri sendi artralgia, pankreatitis sangat jarang', fdaCategory: 'B' },
            { drugFormula: 'Sitagliptin 100mg Oral', mechanism: 'Penghambat selektif enzim DPP-4 eliminasi predominan filtrasi glomerulus ginjal', detailedSideEffects: 'Infeksi saluran napas atas, sakit kepala, penyesuaian dosis ginjal', fdaCategory: 'B' }
          ],
          relatedTabKey: 'interactions',
          relatedDrugName: 'Linagliptin'
        }
      ]
    },
    {
      id: 'sub-7-6',
      number: '7.6',
      title: 'Terapi Osteoporosis Lanjutan: Bifosfonat, Denosumab, Teriparatid (Bifos • Denos • Teri)',
      items: [
        {
          id: 'note-7-6',
          chapterId: 'bab-7',
          chapterNumber: 'BAB 7',
          chapterTitle: 'Obat Endokrin & Metabolik',
          subChapterNumber: '7.6',
          subChapterTitle: 'Terapi Osteoporosis Lanjutan: Bifosfonat, Denosumab, Teriparatid',
          breadcrumb: 'ENDOKRIN > OSTEOPOROSIS DENOS TERI',
          categoryTag: 'METABOLISME TULANG',
          heroMnemonic: 'Bifos Tegak • Denos-RANKL • Teri-Anabolik',
          rhymeTagline: 'Bifosfonat tegak 30 menit perut kosong, Denosumab suntik subkutan tiap 6 bulan sergap RANKL, Teriparatid pembangun tulang sejati batas 2 tahun!',
          syllableBreakdown: [
            { syllable: 'Bifos', drugName: 'Alendronat 70 mg/minggu Oral / Zoledronat 5 mg IV/thn', isDoen: true, badgeType: 'Antiresorptif Tulang', typicalSideEffect: 'Wajib diminum pagi hari perut kosong air putih segelas penuh & tegak 30 menit cegah esofagitis' },
            { syllable: 'Denos', drugName: 'Denosumab 60 mg SC Tiap 6 Bulan Sekali', isDoen: true, badgeType: 'Antibodi Anti-RANKL', typicalSideEffect: 'Antibodi monoklonal penetral RANKL; aman untuk gagal ginjal berat; awas hipokalsemia berat' },
            { syllable: 'Teri', drugName: 'Teriparatid 20 mcg SC Harian (Fragmen PTH 1-34)', isDoen: true, badgeType: 'Anabolik Tulang Sejati', typicalSideEffect: 'Satu-satunya agen anabolik perangsang osteoblas pembentuk tulang baru; batas maksimal 24 bulan' }
          ],
          clinicalKeyPearls: 'Peringatan rebound fraktur Denosumab: Denosumab tidak boleh dihentikan mendadak tanpa terapi pengganti bifosfonat, karena penghentian memicu lonjakan aktivitas osteoklas masif yang menyebabkan fraktur kompresi tulang belakang multipel.',
          clinicalWarnings: 'Osteonekrosis Rahang (ONJ): Pasien yang direncanakan menjalani cabut gigi atau implan gigi bedah mulut wajib menuntaskan tindakan gigi sebelum memulai terapi bifosfonat atau denosumab jangka panjang.',
          comparisonTable: [
            { drugFormula: 'Alendronat 70mg', mechanism: 'Melekat pada hidroksiapatit tulang & hambat enzim farnesil pirofosfat sintase osteoklas', detailedSideEffects: 'Esofagitis ulseratif, nyeri tulang otot, osteonekrosis rahang', fdaCategory: 'C' },
            { drugFormula: 'Denosumab 60mg SC', mechanism: 'Menghambat ligan RANK (RANKL) mencegah diferensiasi dan ketahanan hidup osteoklas', detailedSideEffects: 'Hipokalsemia, selulitis infeksi kulit, fraktur femur atipikal', fdaCategory: 'X' },
            { drugFormula: 'Teriparatid 20mcg SC', mechanism: 'Agonis intermiten reseptor PTH tipe 1 menstimulasi fungsi dan jumlah osteoblas baru', detailedSideEffects: 'Hiperkalsemia, kram tungkai kaki, pusing; resiko osteosarkoma hewan', fdaCategory: 'C' }
          ],
          relatedTabKey: 'interactions',
          relatedDrugName: 'Alendronat'
        }
      ]
    }
  ],

  // BAB 8: OBAT TUBERKULOSIS & KUSTA
  'bab-8': [
    {
      id: 'sub-8-3',
      number: '8.3',
      title: 'OAT Lini Kedua / MDR-TB: Bedaquiline, Linezolid, Moxifloxacin (Beda • Lini • Moxi)',
      items: [
        {
          id: 'note-8-3',
          chapterId: 'bab-8',
          chapterNumber: 'BAB 8',
          chapterTitle: 'Obat Tuberkulosis & Kusta',
          subChapterNumber: '8.3',
          subChapterTitle: 'OAT Lini Kedua / MDR-TB: Bedaquiline, Linezolid, Fluoroquinolone',
          breadcrumb: 'TUBERKULOSIS > OAT LINI 2 MDR BEDA LINI MOXI',
          categoryTag: 'OAT RESISTEN OBAT',
          heroMnemonic: 'Beda - Lini - Moxi MDR',
          rhymeTagline: 'Bedaquiline gembok ATP sintase kuman awas QTc, Linezolid saraf kesemutan & trombosit anjlok, Moxifloxacin fluoroquinolon respiratori lini kedua!',
          syllableBreakdown: [
            { syllable: 'Beda', drugName: 'Bedaquiline (Sirturo) 400 mg lanjut 200 mg 3x/mgg', isDoen: true, badgeType: 'Inhibitor ATP Sintase', typicalSideEffect: 'Blokade spesifik subunit c sintesis energi kuman TB; metabolisme CYP3A4; awas perpanjangan QTc EKG' },
            { syllable: 'Lini', drugName: 'Linezolid 600 mg Oral/IV Tiap 12-24 Jam', isDoen: true, badgeType: 'Oksazolidinon', typicalSideEffect: 'Inhibitor protein 50S; toksisitas mitokondria: anemia aplastik, trombositopenia, neuropati perifer & optik' },
            { syllable: 'Moxi', drugName: 'Levofloxacin 750-1000 mg / Moxifloxacin 400 mg', isDoen: true, badgeType: 'Fluoroquinolon Inti', typicalSideEffect: 'Inhibitor DNA girase subunit A; komponen utama paduan MDR jangka pendek WHO; awas tendinitis Achilles' }
          ],
          clinicalKeyPearls: 'Paduan BPaL (Bedaquiline, Pretomanid, Linezolid) dan BPaLM (+ Moxifloxacin) adalah terobosan modern WHO yang memangkas durasi pengobatan TB kebal obat dari 18-24 bulan menjadi hanya 6 bulan secara oral tanpa injeksi kanamisin/kapreomisin yang menyakitkan.',
          clinicalWarnings: 'Pasien dengan Linezolid wajib diperiksa darah tepi lengkap berkala tiap 2 minggu. Trombositopenia berat dan anemia dapat terjadi pada pemakaian > 28 hari.',
          comparisonTable: [
            { drugFormula: 'Bedaquiline 100mg', mechanism: 'Inhibitor enzim adenosin trifosfat (ATP) sintase proton pump mikobakteri', detailedSideEffects: 'Pemanjangan interval QTc jantung, peningkatan enzim aminotransferase', fdaCategory: 'B' },
            { drugFormula: 'Linezolid 600mg', mechanism: 'Hambat inisiasi sintesis protein ribosom 50S bakteri Gram positif & mikobakteri', detailedSideEffects: 'Mielosupresi trombositopenia, neuropati optik kebutaan, asidosis laktat', fdaCategory: 'C' },
            { drugFormula: 'Moxifloxacin 400mg', mechanism: 'Hambat topoisomerase II (DNA girase) dan topoisomerase IV replikasi DNA kuman', detailedSideEffects: 'Ruptur tendon tumit achilles, pemanjangan QTc, neuropati perifer', fdaCategory: 'C' }
          ],
          relatedTabKey: 'interactions',
          relatedDrugName: 'Levofloksasin'
        }
      ]
    },
    {
      id: 'sub-8-4',
      number: '8.4',
      title: 'OAT pada Pasien Hepatitis & Gangguan Hati Kronis (P Paling Racun • S-E Ramah)',
      items: [
        {
          id: 'note-8-4',
          chapterId: 'bab-8',
          chapterNumber: 'BAB 8',
          chapterTitle: 'Obat Tuberkulosis & Kusta',
          subChapterNumber: '8.4',
          subChapterTitle: 'OAT pada Pasien Hepatitis & Gangguan Hati Kronis',
          breadcrumb: 'TUBERKULOSIS > OAT HEPATITIS & HEPATOTOKSIK',
          categoryTag: 'OAT KHUSUS HEPATITIS',
          heroMnemonic: 'P Paling Racun • S-E Ramah Hati',
          rhymeTagline: 'Pirazinamid paling kejam bikin kuning hati, Isoniazid & Rifampisin menyusul, jika hepatitis berat andalkan Streptomisin dan Etambutol bebas racun liver!',
          syllableBreakdown: [
            { syllable: 'P Paling', drugName: 'Pirazinamid (Z) - Tingkat Hepatotoksik Tertinggi', isDoen: true, badgeType: 'Hepatotoksik Berat', typicalSideEffect: 'Nekrosis hepatoseluler masif; jika timbul ikterus/kuning mata, Z wajib distop permanen' },
            { syllable: 'I-R', drugName: 'Isoniazid (H) & Rifampisin (R) - Hepatotoksik Sedang', isDoen: true, badgeType: 'Hepatotoksik Sedang', typicalSideEffect: 'H toksik via asetilhidrazin; R kolestasis transien; hentikan sementara jika SGOT/SGPT > 5x lipat' },
            { syllable: 'S-E Ramah', drugName: 'Streptomisin (S) & Etambutol (E) - BEBAS RACUN HATI', isDoen: true, badgeType: 'Ekskresi Ginjal', typicalSideEffect: 'Ekskresi utama via filtrasi ginjal; tulang punggung regimen TB sirosis hati berat (misal 2SHE/10HE)' }
          ],
          clinicalKeyPearls: 'Kapan OAT wajib dihentikan sementara (DILI - Drug-Induced Liver Injury)? Jika SGOT/SGPT meningkat > 3x batas atas normal disertai gejala mual/ikterus, ATAU jika SGOT/SGPT meningkat > 5x batas atas normal meskipun tanpa keluhan fisik.',
          clinicalWarnings: 'Re-challenge OAT: Saat enzim hati normal kembali, kenalkan kembali OAT satu per satu dengan dosis titrasi bertahap, urutan: Rifampisin dahulu (paling kecil toksisitas hepatoselulernya) -> Isoniazid -> Pirazinamid (bila hepatitis berat, Pirazinamid tidak boleh di-rechallenge).',
          comparisonTable: [
            { drugFormula: 'Pirazinamid 500mg', mechanism: 'Asam pirazinoat mendisrupsi potensial membran & transpor energi sel mikobakteri', detailedSideEffects: 'Hepatotoksisitas berat fatal, hiperurisemia artritis gout akut', fdaCategory: 'C' },
            { drugFormula: 'Isoniazid 300mg', mechanism: 'Hambat sintesis asam mikolat dinding sel kuman TB via aktivasi enzim katG', detailedSideEffects: 'Hepatitis nekrotik obat, neuropati perifer defisiensi B6 piridoksin', fdaCategory: 'C' },
            { drugFormula: 'Etambutol 500mg', mechanism: 'Inhibitor arabinosil transferase polimerisasi arabinogalaktan dinding sel', detailedSideEffects: 'Neuritis optik gangguan warna merah-hijau, bebas hepatotoksik', fdaCategory: 'C' }
          ],
          relatedTabKey: 'interactions',
          relatedDrugName: 'Isoniazid'
        }
      ]
    }
  ],

  // BAB 9: OBAT ANTIBIOTIK
  'bab-9': [
    {
      id: 'sub-9-5',
      number: '9.5',
      title: 'Carbapenem & Monobactam: Spektrum Ultra Luas & Alergi Penisilin (Mero • Imi • Aztreo)',
      items: [
        {
          id: 'note-9-5',
          chapterId: 'bab-9',
          chapterNumber: 'BAB 9',
          chapterTitle: 'Obat Antibiotik',
          subChapterNumber: '9.5',
          subChapterTitle: 'Carbapenem & Monobactam: Spektrum Luas & Alergi Penisilin',
          breadcrumb: 'ANTIBIOTIK > MERO IMI AZTREO SPEKTRUM ULTRA',
          categoryTag: 'BETA LAKTAM LANJUTAN',
          heroMnemonic: 'Mero Bebas Kejang • Imi-Silastatin Ginjal • Aztreo Aman Penisilin',
          rhymeTagline: 'Meropenem tembus otak bebas kejang, Imipenem kawal Silastatin agar ginjal aman, Aztreonam penyelamat tunggal saat pasien syok anafilaksis penisilin!',
          syllableBreakdown: [
            { syllable: 'Mero', drugName: 'Meropenem 1-2g IV Tiap 8 Jam (Karbapenem)', isDoen: true, badgeType: 'DOC ESBL & Sepsis', typicalSideEffect: 'Spektrum terluas Gram positif, Gram negatif (Pseudomonas) & anaerob; neurotoksisitas minimal' },
            { syllable: 'Imi', drugName: 'Imipenem 500mg + Silastatin IV Tiap 6 Jam', isDoen: true, badgeType: 'Wajib Silastatin', typicalSideEffect: 'Silastatin hambat dehidropeptidase-1 ginjal agar obat aktif; risiko kejang lebih tinggi pada gagal ginjal' },
            { syllable: 'Aztreo', drugName: 'Aztreonam 1-2g IV Tiap 8 Jam (Monobaktam)', isDoen: true, badgeType: 'Aman Alergi Penisilin', typicalSideEffect: 'Cincin monosiklik beta-laktam tanpa reaksi silang imunologis; aman saat syok anafilaksis penisilin' }
          ],
          clinicalKeyPearls: 'Carbapenem adalah lini pertahanan utama untuk infeksi kuman penghasil enzim ESBL (Extended-Spectrum Beta-Lactamase). Pada meningitis bakteri gram negatif berat, pilih Meropenem karena penetrasi cairan serebrospinal (CSF) sangat prima tanpa memicu bangkitan kejang.',
          clinicalWarnings: 'Interaksi fatal Carbapenem + Asam Valproat: Carbapenem menurunkan kadar serum asam valproat secara drastis (hingga 80-90% dalam 24 jam) memicu bangkitan kejang berulang (status epileptikus refrakter); kombinasi ini KONTRAINDIKASI MUTLAK!',
          comparisonTable: [
            { drugFormula: 'Meropenem 1g Vial', mechanism: 'Inaktivasi PBP transpeptidase dinding sel bakteri dengan resistensi enzim beta-laktamase', detailedSideEffects: 'Diare, tromboflebitis, ruam kulit, kejang sangat jarang (< 0.1%)', fdaCategory: 'B' },
            { drugFormula: 'Imipenem/Silastatin 500mg', mechanism: 'Imipenem bakterisid spektrum luas + Silastatin penghambat metabolisme ginjal dehidropeptidase', detailedSideEffects: 'Mual muntah infus cepat, bangkitan kejang epilepsi (1-3%)', fdaCategory: 'C' },
            { drugFormula: 'Aztreonam 1g Vial', mechanism: 'Inhibitor PBP-3 khusus bakteri Gram negatif aerobik (Pseudomonas, Enterobacteriaceae)', detailedSideEffects: 'Peningkatan enzim hepar transaminase, flebitis tempat infus', fdaCategory: 'B' }
          ],
          relatedTabKey: 'interactions',
          relatedDrugName: 'Meropenem'
        }
      ]
    },
    {
      id: 'sub-9-6',
      number: '9.6',
      title: 'Antibiotik Lini Terakhir: MRSA & VRE (Vanko • Lino • Dapto)',
      items: [
        {
          id: 'note-9-6',
          chapterId: 'bab-9',
          chapterNumber: 'BAB 9',
          chapterTitle: 'Obat Antibiotik',
          subChapterNumber: '9.6',
          subChapterTitle: 'Antibiotik Lini Terakhir: MRSA & VRE (Vanko, Lino, Dapto)',
          breadcrumb: 'ANTIBIOTIK > MRSA VRE VANKO LINO DAPTO',
          categoryTag: 'ANTIBIOTIK RESISTEN',
          heroMnemonic: 'Vanko Red Man • Lino Trombosit • Dapto Pantang Paru',
          rhymeTagline: 'Vankomisin infus pelan 1 jam cegah Red Man, Linezolid waspada trombosit anjlok, Daptomisin dirusak surfaktan paru pantang untuk pneumonia!',
          syllableBreakdown: [
            { syllable: 'Vanko', drugName: 'Vankomisin 15-20 mg/kg IV Tiap 8-12 Jam', isDoen: true, badgeType: 'DOC MRSA Sistemik', typicalSideEffect: 'Infus lambat minimal 60 menit per 1 gram cegah Red Man Syndrome; target trough 15-20 mcg/mL' },
            { syllable: 'Lino', drugName: 'Linezolid 600 mg IV / Oral Tiap 12 Jam', isDoen: true, badgeType: 'MRSA & VRE Oral/IV', typicalSideEffect: 'Bioavailabilitas oral 100%; awas supresi sumsum tulang trombositopenia & sindrom serotonin' },
            { syllable: 'Dapto', drugName: 'Daptomisin 4-6 mg/kg IV Sekali Sehari', isDoen: true, badgeType: 'Pantang Pneumonia', typicalSideEffect: 'Inaktivasi oleh surfaktan paru (KONTRAINDIKASI PNEUMONIA); pantau CK enzim otot cegah rhabdomiolisis' }
          ],
          clinicalKeyPearls: 'Red Man Syndrome pada infus Vankomisin BUKANLAH alergi sejati tipe I IgE, melainkan degranulasi histamin sel mast non-imunologis akibat laju infus yang terlalu kencang. Tatalaksana: Hentikan infus, berikan Difenhidramin, lalu lanjutkan infus dengan kecepatan setengah dari sebelumnya.',
          clinicalWarnings: 'JANGAN PERNAH gunakan Daptomisin untuk infeksi saluran napas bawah (Pneumonia MRSA), karena molekul daptomisin dinetralkan dan diinaktivasi secara permanen oleh fosfolipid surfaktan paru manusia!',
          comparisonTable: [
            { drugFormula: 'Vankomisin 1g Vial', mechanism: 'Mengikat terminus D-Ala-D-Ala prekursor peptidoglikan mencegah polimerisasi dinding sel', detailedSideEffects: 'Nefrotoksisitas, ototoksisitas, Red Man Syndrome histaminergik', fdaCategory: 'C' },
            { drugFormula: 'Linezolid 600mg Tab', mechanism: 'Mengikat subunit 50S ribosom bakteri dekat persimpangan 30S hambat kompleks inisiasi 70S', detailedSideEffects: 'Trombositopenia darah, neuropati perifer permanen, asidosis laktat', fdaCategory: 'C' },
            { drugFormula: 'Daptomisin 500mg Vial', mechanism: 'Insersi molekul lipofilik ke membran sitoplasma bakteri memicu depolarisasi cepat ion K+', detailedSideEffects: 'Peningkatan serum kreatin kinase (CK), miopati otot skeletal', fdaCategory: 'B' }
          ],
          relatedTabKey: 'interactions',
          relatedDrugName: 'Vankomisin'
        }
      ]
    },
    {
      id: 'sub-9-7',
      number: '9.7',
      title: 'Prinsip PK/PD Antibiotik: Time-Dependent vs Concentration-Dependent (Time vs Peak)',
      items: [
        {
          id: 'note-9-7',
          chapterId: 'bab-9',
          chapterNumber: 'BAB 9',
          chapterTitle: 'Obat Antibiotik',
          subChapterNumber: '9.7',
          subChapterTitle: 'Prinsip PK/PD Antibiotik: Time-Dependent vs Concentration-Dependent',
          breadcrumb: 'ANTIBIOTIK > PKPD TIME VS CONCENTRATION DEPENDENT',
          categoryTag: 'FARMAKOMETRIK ANTIMIKROBA',
          heroMnemonic: 'Time Sering Berkelanjutan • Peak Tinggi Sekali',
          rhymeTagline: 'Beta-laktam butuh waktu di atas MIC infus sering atau kontinu, Aminoglikosida butuh puncak tinggi sekali sehari, Vanko andalkan AUC per MIC!',
          syllableBreakdown: [
            { syllable: 'Time > MIC', drugName: 'Beta-Laktam (Penisilin, Sefalosporin, Karbapenem)', isDoen: true, badgeType: 'Time-Dependent', typicalSideEffect: 'Efikasi bergantung durasi kadar obat bebas melampaui MIC bakteri (%T > MIC); dosis dipecah sering atau extended infusion 3-4 jam' },
            { syllable: 'Peak / MIC', drugName: 'Aminoglikosida (Gentamisin) & Fluoroquinolon', isDoen: true, badgeType: 'Concentration-Dependent', typicalSideEffect: 'Efikasi bergantung rasio puncak terhadap MIC (Cmax/MIC > 8-10); dosis harian tunggal sekali sehari maksimalkan bunuh kuman' },
            { syllable: 'AUC / MIC', drugName: 'Vankomisin, Azitromisin, Colistin', isDoen: true, badgeType: 'Exposure-Dependent', typicalSideEffect: 'Efikasi ditentukan total paparan obat 24 jam (AUC24/MIC target 400-600 untuk Vankomisin)' }
          ],
          clinicalKeyPearls: 'Pemberian Gentamisin dosis tinggi sekali sehari (Once Daily Dosing, 5-7 mg/kg) memanfaatkan fenomena Post-Antibiotic Effect (PAE) dan memberi jeda waktu bagi sel tubulus ginjal untuk membersihkan akumulasi aminoglikosida pada fase konsentrasi rendah di malam hari, sehingga efikasi bakterisid maksimal dan nefrotoksisitas minimal.',
          clinicalWarnings: 'Memperbesar dosis tunggal amoksisilin atau seftriakson secara berlebihan tidak meningkatkan daya bunuh kuman jika intervalnya terlalu renggang. Beta-laktam membutuhkan kepatuhan jam minum yang ketat agar kadar plasma tidak drop di bawah nilai MIC kuman.',
          comparisonTable: [
            { drugFormula: 'Seftriaxon (Time > MIC)', mechanism: 'Inhibisi sintesis dinding sel dengan daya bunuh maksimal saat kadar bebas > 4-5x MIC', detailedSideEffects: 'Bakterisid konstan tanpa peningkatan efikasi pada konsentrasi super tinggi', fdaCategory: 'B' },
            { drugFormula: 'Gentamisin (Peak / MIC)', mechanism: 'Bakterisid konsentrasi tinggi merusak sintesis protein ribosom 30S dengan efek PAE panjang', detailedSideEffects: 'Nefrotoksisitas bila trough malam hari tidak turun di bawah 1 mcg/mL', fdaCategory: 'D' },
            { drugFormula: 'Vankomisin (AUC / MIC)', mechanism: 'Kombinasi waktu dan total konsentrasi paparan jaringan untuk melisiskan dinding peptidoglikan', detailedSideEffects: 'Kerusakan tubulus proksimal ginjal bila AUC24 > 600 mg*h/L', fdaCategory: 'C' }
          ],
          relatedTabKey: 'interactions',
          relatedDrugName: 'Gentamisin'
        }
      ]
    }
  ],

  // BAB 10: OBAT ANTIHELMINTIK & EKTOPARASIT
  'bab-10': [
    {
      id: 'sub-10-3',
      number: '10.3',
      title: 'Skabisida & Pedikulosida: Kudis (Scabies) vs Kutu Rambut (Permetrin 5% • Gameksan)',
      items: [
        {
          id: 'note-10-3',
          chapterId: 'bab-10',
          chapterNumber: 'BAB 10',
          chapterTitle: 'Obat Antihelmintik & Ektoparasit',
          subChapterNumber: '10.3',
          subChapterTitle: 'Skabisida & Pedikulosida: Kudis (Scabies) vs Kutu Rambut',
          breadcrumb: 'PARASIT > SKABIES PERMETRIN 5% SEMALAM',
          categoryTag: 'DERMATOLOGI & PARASIT',
          heroMnemonic: 'Permetrin 5% Semalam • Lindane Awas Kejang Anak',
          rhymeTagline: 'Permetrin 5 persen balur seluruh tubuh leher ke bawah diamkan 8-12 jam, ulang hari ke-7, Lindane/Gameksan berbahaya kejang pada bayi!',
          syllableBreakdown: [
            { syllable: 'Permetrin 5%', drugName: 'Krim Permetrin 5% (Lini Pertama Skabies)', isDoen: true, badgeType: 'Skabisida DOC', typicalSideEffect: 'Oleskan malam hari dari leher hingga ujung jari kaki dan sela jari, bilas 8-12 jam kemudian; ulangi hari ke-7' },
            { syllable: 'Permetrin 1%', drugName: 'Losion Permetrin 1% (Lini Pertama Kutu Rambut)', isDoen: true, badgeType: 'Pedikulosida DOC', typicalSideEffect: 'Oleskan pada rambut lembap selama 10 menit lalu bilas bersih; gunakan sisir serit kutu' },
            { syllable: 'Gameksan', drugName: 'Lindane 1% / Gamma-Benzene Hexachloride', isDoen: true, badgeType: 'Awas Neurotoksik', typicalSideEffect: 'KONTRAINDIKASI PADA BAYI, ANAK & IBU HAMIL; absorpsi transdermal dapat memicu kejang mematikan' },
            { syllable: 'Salep 2-4', drugName: 'Asam Salisilat 2% + Sulfur Endap 4%', isDoen: true, badgeType: 'Aman Bayi & Bumil', typicalSideEffect: 'Pilihan paling aman untuk bayi usia < 2 bulan dan ibu hamil bila permetrin tidak tersedia' }
          ],
          clinicalKeyPearls: 'Edukasi non-farmakologi paling esensial pada skabies: SELURUH ANGGOTA KELUARGA serumah atau teman sekamar asrama wajib diobati secara bersamaan meskipun belum bergejala, serta semua sprei, baju, dan handuk dicuci air panas > 60°C atau diisolasi kantong plastik tertutup selama minimal 72 jam.',
          clinicalWarnings: 'Gatal pada skabies pasca pengobatan masih dapat bertahan 2-4 minggu akibat respon alergi terhadap bangkai tungau di kulit dan BUKAN tanda kegagalan terapi. Berikan antihistamin oral atau emolien.',
          comparisonTable: [
            { drugFormula: 'Permetrin 5% Krim', mechanism: 'Disrupsi kanal natrium serabut saraf parasit memicu polarisasi memanjang dan paralisis tungau', detailedSideEffects: 'Sensasi rasa terbakar ringan sementara, eritema lokal, pruritus', fdaCategory: 'B' },
            { drugFormula: 'Lindane 1% Losion', mechanism: 'Insektisida organoklorin yang menembus eksoskeleton parasit menstimulasi SSP parasit berlebih', detailedSideEffects: 'Bangkitan kejang epileptikus, anemia aplastik, toksisitas saraf', fdaCategory: 'C' },
            { drugFormula: 'Salep 2-4 (Sulfur)', mechanism: 'Asam pentationat hasil reaksi sulfur dengan jaringan kulit bersifat keratolitik & antiparasit', detailedSideEffects: 'Bau menyengat belerang, noda kuning pakaian, kulit kering', fdaCategory: 'C' }
          ],
          relatedTabKey: 'drugs',
          relatedDrugName: 'Permetrin'
        }
      ]
    }
  ],

  // BAB 11: OBAT ANTIMALARIA
  'bab-11': [
    {
      id: 'sub-11-3',
      number: '11.3',
      title: 'Profilaksis Malaria untuk Wisatawan (Traveler\'s Malaria: Doksi • Meflo • Atova)',
      items: [
        {
          id: 'note-11-3',
          chapterId: 'bab-11',
          chapterNumber: 'BAB 11',
          chapterTitle: 'Obat Antimalaria',
          subChapterNumber: '11.3',
          subChapterTitle: 'Profilaksis Malaria untuk Wisatawan (Traveler\'s Malaria)',
          breadcrumb: 'MALARIA > PROFILAKSIS DOKSI MEFLO ATOVA',
          categoryTag: 'KEDOKTERAN WISATA',
          heroMnemonic: 'Doksi Harian • Meflo Mingguan Gangguan Jiwa',
          rhymeTagline: 'Doksisiklin diminum tiap hari sampai 4 minggu pasca pulang, Meflokuin cukup seminggu sekali awas halusinasi & mimpi buruk, Atovaquon kilat 7 hari!',
          syllableBreakdown: [
            { syllable: 'Doksi', drugName: 'Doksisiklin 100 mg Kapsul (Harian)', isDoen: true, badgeType: 'Profilaksis Lini 1', typicalSideEffect: 'Mulai 1-2 hari sebelum pergi, minum harian selama di lokasi, dan DILANJUTKAN 4 MINGGU pasca keluar daerah endemis' },
            { syllable: 'Meflo', drugName: 'Meflokuin 250 mg Tablet (Mingguan)', isDoen: true, badgeType: 'Cukup Seminggu 1x', typicalSideEffect: 'Mulai 2-3 minggu sebelum pergi; awas Boxed Warning mimpi buruk agresif, depresi, ansietas berat' },
            { syllable: 'Atova', drugName: 'Atovaquon-Proguanil (Malarone) Harian', isDoen: true, badgeType: 'Profilaksis Kilat', typicalSideEffect: 'Mulai 1-2 hari sebelum pergi dan CUKUP 7 HARI setelah pulang; biaya paling mahal tapi toleransi prima' }
          ],
          clinicalKeyPearls: 'Mengapa profilaksis Doksisiklin wajib diminum hingga 4 minggu setelah meninggalkan daerah endemis malaria? Karena Doksisiklin hanya membunuh parasit fase eritrosit darah, sehingga harus menunggu seluruh merozoit yang sedang berkembang biak di sel hati tuntas keluar ke sirkulasi darah.',
          clinicalWarnings: 'Doksisiklin KONTRAINDIKASI MUTLAK pada ibu hamil dan anak di bawah usia 8 tahun karena memicu diskolorisasi gigi permanen kuning kecokelatan dan penekanan pertumbuhan tulang.',
          comparisonTable: [
            { drugFormula: 'Doksisiklin 100mg', mechanism: 'Hambat sintesis protein 30S apikoplas parasit malaria fase eritrositik aseksual', detailedSideEffects: 'Fotosensitivitas kulit terbakar matahari, esofagitis ulkus saluran cerna', fdaCategory: 'D' },
            { drugFormula: 'Meflokuin 250mg', mechanism: 'Skizontosida darah merusak vakuola makanan parasit Plasmodium falciparum & vivax', detailedSideEffects: 'Gangguan neuropsikiatri berat, mimpi buruk, aritmia bradikardia', fdaCategory: 'B' },
            { drugFormula: 'Atovaquon/Proguanil', mechanism: 'Hambat transpor elektron sitokrom bc1 mitokondria parasit & enzim DHFR', detailedSideEffects: 'Sakit perut kram mual, peningkatan sementara enzim transaminase hepar', fdaCategory: 'C' }
          ],
          relatedTabKey: 'interactions',
          relatedDrugName: 'Doksisiklin'
        }
      ]
    }
  ],

  // BAB 13: OBAT ANTI JAMUR (ANTIFUNGAL) & PROTOZOA
  'bab-13': [
    {
      id: 'sub-13-3',
      number: '13.3',
      title: 'Antijamur Sistemik: Azol, Polien, Echinocandin, Alilamin (Fluko • Nista • Amfo • Kaspo)',
      items: [
        {
          id: 'note-13-3',
          chapterId: 'bab-13',
          chapterNumber: 'BAB 13',
          chapterTitle: 'Obat Anti Jamur (Antifungal) & Protozoa',
          subChapterNumber: '13.3',
          subChapterTitle: 'Antijamur Sistemik: Azol, Polien, Echinocandin, Alilamin',
          breadcrumb: 'ANTIJAMUR > FLUKO AMFO KASPO TERBINA',
          categoryTag: 'MIKOLOGI KLINIS',
          heroMnemonic: 'Fluko Kepala • Nista Usus • Amfo Ginjal • Kaspo Dinding',
          rhymeTagline: 'Flukonazol tembus cairan otak, Nistatin lokal tidak diserap usus, Amfoterisin B racun ginjal wajib pre-hidrasi, Kaspofungin sikat beta-glukan dinding jamur!',
          syllableBreakdown: [
            { syllable: 'Fluko', drugName: 'Flukonazol 150-400 mg (Triazol)', isDoen: true, badgeType: 'Penetrasi Otak CSF', typicalSideEffect: 'Inhibitor 14-alfa-demetilase ergosterol; penetrasi sawar darah otak prima (meningitis kriptokokus)' },
            { syllable: 'Nista', drugName: 'Nistatin Suspensi Drop 100.000 IU/mL', isDoen: true, badgeType: 'Tidak Diserap Usus', typicalSideEffect: 'DOC oral thrush kandidiasis mulut; kumur-telan (swish and swallow); bekerja murni secara kontak lokal' },
            { syllable: 'Amfo', drugName: 'Amfoterisin B Deoksikolat IV (Polien)', isDoen: true, badgeType: 'Nefrotoksisitas Berat', typicalSideEffect: 'Ikatan ergosterol pori membran; nefrotoksisitas fatal & hipokalemia; WAJIB pre-hidrasi 500-1000 mL NaCl 0.9%' },
            { syllable: 'Kaspo', drugName: 'Kaspofungin / Mikafungin IV (Echinocandin)', isDoen: true, badgeType: 'Sintesis Dinding Sel', typicalSideEffect: 'Hambat 1,3-beta-D-glukan dinding jamur; pilihan lini pertama kandidiasis invasif sepsis ICU' },
            { syllable: 'Terbi', drugName: 'Terbinafin 250 mg Oral (Alilamin)', isDoen: true, badgeType: 'DOC Jamur Kuku', typicalSideEffect: 'Hambat skualen epoksidase; DOC onikomikosis tinea kuku tangan/kaki 6-12 minggu; pantau enzim hati' }
          ],
          clinicalKeyPearls: 'Golongan Azol (terutama Ketokonazol, Itrakonazol, Vorikonazol) adalah inhibitor enzim CYP3A4 hepar yang sangat kuat. Mengombinasikan Azol dengan Simvastatin atau Atorvastatin dapat memicu lonjakan kadar statin drastis hingga rhabdomiolisis dan gagal ginjal akut!',
          clinicalWarnings: 'Infus Amfoterisin B konvensional sering memicu reaksi demam menggigil hebat ("shake and bake") serta flebitis; berikan premedikasi Parasetamol + Difenhidramin 30 menit sebelum infus dimulai.',
          comparisonTable: [
            { drugFormula: 'Flukonazol 200mg', mechanism: 'Hambat sitokrom P450 lanosterol 14-alfa-demetilase biosintesis ergosterol membran jamur', detailedSideEffects: 'Mual, pemanjangan QTc, peningkatan transaminase hepar, sakit kepala', fdaCategory: 'D' },
            { drugFormula: 'Amfoterisin B 50mg Vial', mechanism: 'Mengikat ergosterol membentuk kanal pori kebocoran kation monovalen kalium sel jamur', detailedSideEffects: 'Asidosis tubulus ginjal, hipokalemia, hipomagnesemia, anemia', fdaCategory: 'B' },
            { drugFormula: 'Kaspofungin 50mg Vial', mechanism: 'Inhibisi non-kompetitif sintesis enzim beta-(1,3)-D-glukan dinding sel jamur', detailedSideEffects: 'Reaksi pelepasan histamin, flebitis, demam, peningkatan enzim hepar', fdaCategory: 'C' }
          ],
          relatedTabKey: 'interactions',
          relatedDrugName: 'Flukonazol'
        }
      ]
    }
  ],

  // BAB 14: ANALGESIK & NSAID
  'bab-14': [
    {
      id: 'sub-14-4',
      number: '14.4',
      title: 'Analgesik Adjuvan: Nyeri Neuropatik (Gaba • Prega • Dulox • Karba)',
      items: [
        {
          id: 'note-14-4',
          chapterId: 'bab-14',
          chapterNumber: 'BAB 14',
          chapterTitle: 'Analgesik & NSAID',
          subChapterNumber: '14.4',
          subChapterTitle: 'Analgesik Adjuvan: Nyeri Neuropatik (Diabetik & Trigeminal)',
          breadcrumb: 'ANALGESIK > NYERI NEUROPATIK GABA PREGA KARBA',
          categoryTag: 'NYERI SARAF ADJUVAN',
          heroMnemonic: 'Gaba-Prega Kalsium • Dulox SNRI • Karba Trigeminal',
          rhymeTagline: 'Gabapentin & Pregabalin tutup pintu kalsium saraf, Duloksetin redam nyeri diabetik tanpa bikin gemuk, Karbamazepin obat nomor satu neuralgia trigeminal!',
          syllableBreakdown: [
            { syllable: 'Gaba-Prega', drugName: 'Gabapentin (300-1800 mg) & Pregabalin (75-300 mg)', isDoen: true, badgeType: 'Subunit Alfa-2-Delta', typicalSideEffect: 'Mengikat kanal kalsium voltase-dependen kornu dorsalis medula spinalis; efek: pusing kliyengan, kantuk, edema' },
            { syllable: 'Dulox', drugName: 'Duloksetin 30-60 mg (SNRI)', isDoen: true, badgeType: 'Modulasi Desenden', typicalSideEffect: 'Perkuat jalur inhibisi nyeri desenden serotonin & noradrenalin; DOC neuropati diabetik perifer' },
            { syllable: 'Karba', drugName: 'Karbamazepin 100-400 mg (Inhibitor Kanal Na+)', isDoen: true, badgeType: 'DOC Trigeminal', typicalSideEffect: 'Drug of choice nomor satu Neuralgia Trigeminal nyeri wajah tersengat listrik; awas SJS/TEN' }
          ],
          clinicalKeyPearls: 'Parasetamol dan NSAID (Ibuprofen/Natrium Diklofenak) TIDAK EFEKTIF untuk nyeri neuropatik murni (rasa terbakar, kesemutan, baal, alodinia), karena mekanisme dasarnya adalah lesi atau hipereksitabilitas serabut saraf perifer, bukan peradangan prostaglandin jaringan.',
          clinicalWarnings: 'Karbamazepin berisiko memicu Stevens-Johnson Syndrome (SJS) fatal terutama pada pasien pembawa alel genetik HLA-B*1502. Skrining genetik direkomendasikan sebelum terapi dimulai.',
          comparisonTable: [
            { drugFormula: 'Pregabalin 75mg', mechanism: 'Modulasi pelepasan neurotransmiter eksitatori (glutamat, substansi P) via subunit Ca alfa-2-delta', detailedSideEffects: 'Pusing berputar, sedasi kantuk, kenaikan berat badan, edema perifer', fdaCategory: 'C' },
            { drugFormula: 'Duloksetin 30mg', mechanism: 'Penghambat ganda reuptake serotonin dan norepinefrin sentral jalur analgesia desenden', detailedSideEffects: 'Mual awal, mulut kering, insomnia atau kantuk, hipertensi ringan', fdaCategory: 'C' },
            { drugFormula: 'Karbamazepin 200mg', mechanism: 'Stabilisasi membran saraf tereksitasi dengan memperpanjang inaktivasi kanal natrium voltase', detailedSideEffects: 'Ataksia pusing, leukopenia, hiponatremia SIADH, ruam alergi SJS', fdaCategory: 'D' }
          ],
          relatedTabKey: 'interactions',
          relatedDrugName: 'Karbamazepin'
        }
      ]
    }
  ],

  // BAB 15: MUSKULOSKELETAL & GOUT
  'bab-15': [
    {
      id: 'sub-15-3',
      number: '15.3',
      title: 'DMARDs Artritis Reumatoid: Metotreksat, Sulfasalazin, Hidroksiklorokuin (MTX • Hidroksi)',
      items: [
        {
          id: 'note-15-3',
          chapterId: 'bab-15',
          chapterNumber: 'BAB 15',
          chapterTitle: 'Muskuloskeletal & Gout',
          subChapterNumber: '15.3',
          subChapterTitle: 'DMARDs Artritis Reumatoid: Metotreksat, Sulfasalazin, Hidroksiklorokuin',
          breadcrumb: 'REUMATOLOGI > DMARDS MTX ASAM FOLAT',
          categoryTag: 'ARTRITIS REUMATOID',
          heroMnemonic: 'MTX Seminggu Sekali + Asam Folat • Hidroksi Cek Retina',
          rhymeTagline: 'Metotreksat wajib seminggu sekali jangan tiap hari, dampingi Asam Folat cegah stomatitis, Hidroksiklorokuin wajib cek lapang pandang mata!',
          syllableBreakdown: [
            { syllable: 'MTX Seminggu', drugName: 'Metotreksat (MTX) 7.5-25 mg PER MINGGU', isDoen: true, badgeType: 'DOC Reumatoid Artritis', typicalSideEffect: 'Jangkar emas DMARDs; hambat dihidrofolat reduktase; KESALAHAN MINUM HARIAN BERAKIBAT FATAL APLASIA SUMSUM TULANG!' },
            { syllable: 'Asam Folat', drugName: 'Asam Folat 1-5 mg/hari (Minum di Hari Berbeda dari MTX)', isDoen: true, badgeType: 'Protektor Mukosa', typicalSideEffect: 'Wajib mendampingi MTX untuk meredam mual muntah, ulkus sariawan mulut, dan kenaikan enzim hepar' },
            { syllable: 'Hidroksi', drugName: 'Hidroksiklorokuin 200-400 mg/hari (Antimalaria/DMARDs)', isDoen: true, badgeType: 'Cek Retina Mata', typicalSideEffect: 'Paling aman untuk kehamilan; risiko toksisitas akumulatif retina makulopati "bull\'s eye"; wajib kontrol mata berkala' }
          ],
          clinicalKeyPearls: 'Medication Error Fatal Metotreksat: Apoteker wajib memberi etiket bertuliskan huruf kapital tebal: "DIMINUM HANYA SATU KALI DALAM SEMINGGU PADA HARI YANG SAMA (MISAL TIAP HARI MINGGU PAGI)". Kesalahan minum harian sering menimbulkan kematian akibat pansitopenia.',
          clinicalWarnings: 'Metotreksat adalah TERATOGEN KUAT (Kategori X). Pria dan wanita usia subur wajib menggunakan kontrasepsi efektif dan menghentikan MTX minimal 3-6 bulan sebelum merencanakan konsepsi kehamilan.',
          comparisonTable: [
            { drugFormula: 'Metotreksat 2.5mg Tab', mechanism: 'Hambat enzim DHFR sintesis purin dan akumulasi adenosin ekstraseluler antiinflamasi', detailedSideEffects: 'Stomatitis sariawan, mielosupresi, fibrosis paru, sirosis hepar', fdaCategory: 'X' },
            { drugFormula: 'Hidroksiklorokuin 200mg', mechanism: 'Menaikkan pH vakuola intraseluler sel penyaji antigen hambat presentasi peptida MHC II', detailedSideEffects: 'Retinopati makula bull\'s eye ireversibel, pruritus, kardiomiopati', fdaCategory: 'C' },
            { drugFormula: 'Leflunomid 20mg Tab', mechanism: 'Inhibitor enzim dihidroorotat dehidrogenase (DHODH) sintesis pirimidin limfosit T aktif', detailedSideEffects: 'Alopesia rambut rontok, diare, hipertensi, hepatotoksisitas', fdaCategory: 'X' }
          ],
          relatedTabKey: 'interactions',
          relatedDrugName: 'Metotreksat'
        }
      ]
    }
  ],

  // BAB 16: ANTI KANKER & SITOSTATIKA
  'bab-16': [
    {
      id: 'sub-16-4',
      number: '16.4',
      title: 'Prosedur Ekstravasasi Sitostatika: Kompres Hangat vs Kompres Dingin (Vinka vs Dokso)',
      items: [
        {
          id: 'note-16-4',
          chapterId: 'bab-16',
          chapterNumber: 'BAB 16',
          chapterTitle: 'Anti Kanker & Sitostatika',
          subChapterNumber: '16.4',
          subChapterTitle: 'Prosedur Ekstravasasi Sitostatika: Kompres Hangat vs Kompres Dingin',
          breadcrumb: 'ONKOLOGI > EKSTRAVASASI HANGAT VS DINGIN',
          categoryTag: 'KESELAMATAN KEMOTERAPI',
          heroMnemonic: 'Vinka Hangat Hialuron • Dokso Dingin Deksra DMSO',
          rhymeTagline: 'Vinkristin wajib kompres hangat & Hialuronidase sebar obat, Doksorubisin wajib kompres dingin lokalisasi racun & Dexrazoxane / DMSO!',
          syllableBreakdown: [
            { syllable: 'Ekstravasasi', drugName: 'Bocornya Sitostatika Vesikan ke Jaringan Subkutan', isDoen: true, badgeType: 'Stop Infus Segera', typicalSideEffect: 'Dapat memicu lepuh, ulserasi parah, nekrosis jaringan luas hingga amputasi tungkai' },
            { syllable: 'Vinka Hangat', drugName: 'Vinka Alkaloid (Vinkristin, Vinblastin) & Etoposid', isDoen: true, badgeType: 'KOMPRES HANGAT KERING', typicalSideEffect: 'Hangat memicu vasodilatasi mempercepat difusi obat; Antidot: Injeksi Hialuronidase subkutan melingkar' },
            { syllable: 'Dokso Dingin', drugName: 'Antrasiklin (Doksorubisin, Daunorubisin) & Cisplatin', isDoen: true, badgeType: 'KOMPRES DINGIN KERING', typicalSideEffect: 'Dingin melokalisasi vesikan; Antidot: Dexrazoxane IV (Totect) atau Dimetilsulfoksida (DMSO 99% topikal)' }
          ],
          clinicalKeyPearls: 'Prosedur darurat saat ekstravasasi terjadi: 1. SEGERA HENTIKAN INFUS. 2. JANGAN LANGSUNG CABUT JARUM/KANULA; lakukan aspirasi cairan obat sebanyak mungkin melalui kanula yang terpasang. 3. Beri tanda lingkaran batas area bengkak dengan spidol permanen. 4. Beri kompres dan antidot spesifik sesuai golongan obat.',
          clinicalWarnings: 'DILARANG KERAS mengompres DINGIN ekstravasasi Vinkristin atau Vinka Alkaloid! Suhu dingin akan mengkristalkan ikatan tubulin jaringan dan memperparah kerusakan nekrotik lokal kulit!',
          comparisonTable: [
            { drugFormula: 'Vinkristin (Vesikan Vinka)', mechanism: 'Alkaloid tanaman hambat polimerisasi tubulin mikrotubulus spindel mitosis sel', detailedSideEffects: 'Nekrosis berat bila kompres dingin; wajib kompres hangat + Hialuronidase', fdaCategory: 'D' },
            { drugFormula: 'Doksorubisin (Antrasiklin)', mechanism: 'Interkalasi pasangan basa DNA dan pembentukan radikal bebas besi merusak jaringan', detailedSideEffects: 'Ulkus nekrotik dalam indolent; wajib kompres dingin + Dexrazoxane', fdaCategory: 'D' },
            { drugFormula: 'Hialuronidase 150 IU/mL', mechanism: 'Mendegradasi asam hialuronat matriks interstisial memfasilitasi penyerapan dispersi vesikan', detailedSideEffects: 'Edema transien tempat suntikan, eritema lokal', fdaCategory: 'C' }
          ],
          relatedTabKey: 'toxicology',
          relatedDrugName: 'Vinkristin'
        }
      ]
    },
    {
      id: 'sub-16-5',
      number: '16.5',
      title: 'Terapi Target & Antibodi Monoklonal: Imatinib, Trastuzumab, Rituximab (Imatinib • Trastu • Ritux)',
      items: [
        {
          id: 'note-16-5',
          chapterId: 'bab-16',
          chapterNumber: 'BAB 16',
          chapterTitle: 'Anti Kanker & Sitostatika',
          subChapterNumber: '16.5',
          subChapterTitle: 'Terapi Target & Antibodi Monoklonal: Imatinib, Trastuzumab, Rituximab',
          breadcrumb: 'ONKOLOGI > TERAPI TARGET IMATINIB TRASTU RITUX',
          categoryTag: 'TERAPI TARGET KANKER',
          heroMnemonic: 'Imatinib BCR-ABL • Trastu HER2 Jantung • Ritux CD20 Limfoma',
          rhymeTagline: 'Imatinib kunci enzim BCR-ABL leukimia CML, Trastuzumab sergap HER2 kanker payudara awas gagal jantung, Rituximab basmi CD20 sel B limfoma!',
          syllableBreakdown: [
            { syllable: 'Imatinib', drugName: 'Imatinib Mesilat 400 mg Oral (TKI)', isDoen: true, badgeType: 'Penghambat BCR-ABL', typicalSideEffect: 'Inhibitor tirosin kinase spesifik leukemia mieloid kronis (CML) Ph+; efek: edema kantung mata periorbital' },
            { syllable: 'Trastu', drugName: 'Trastuzumab (Herceptin) IV (Antibodi Anti-HER2)', isDoen: true, badgeType: 'Kanker Payudara HER2+', typicalSideEffect: 'Menghambat sinyal pertumbuhan reseptor HER2/neu; Kardiomiopati penurunan fraksi ejeksi jantung LVEF' },
            { syllable: 'Ritux', drugName: 'Rituximab (MabThera) IV (Antibodi Anti-CD20)', isDoen: true, badgeType: 'Limfoma Sel B', typicalSideEffect: 'Lisis sel B CD20+ limfoma & leukemia CLL; wajib premedikasi antipiretik/antihistamin cegah anafilaksis' }
          ],
          clinicalKeyPearls: 'Perbedaan kardiotoksisitas: Kardiotoksisitas Doksorubisin (Tipe I) bersifat ireversibel bergantung dosis kumulatif dengan kematian miosit permanen. Sebaliknya, Kardiotoksisitas Trastuzumab (Tipe II) umumnya TIDAK bergantung dosis kumulatif dan bersifat REVERSIBEL membaik setelah obat dihentikan.',
          clinicalWarnings: 'Reaktivasi Hepatitis B fatal pada Rituximab: Seluruh pasien wajib diskrining HBsAg dan Anti-HBc sebelum terapi dimulai. Bila positif, berikan profilaksis antivirus Entecavir/Tenofovir.',
          comparisonTable: [
            { drugFormula: 'Imatinib 400mg Tab', mechanism: 'Inhibitor kompetitif kantung ikatan ATP enzim tirosin kinase onkoprotein BCR-ABL', detailedSideEffects: 'Edema periorbital wajah, retensi cairan, kram otot, mual', fdaCategory: 'D' },
            { drugFormula: 'Trastuzumab 440mg Vial', mechanism: 'Antibodi monoklonal manusia IgG1 pengikat domain ekstraseluler reseptor HER2/neu', detailedSideEffects: 'Kardiotoksisitas disfungsi sistolik ventrikel kiri, reaksi infus demam', fdaCategory: 'D' },
            { drugFormula: 'Rituximab 500mg Vial', mechanism: 'Mengikat antigen transmembran CD20 limfosit B memicu sitotoksisitas termediasi komplemen (CDC)', detailedSideEffects: 'Reaktivasi hepatitis B fulminan, sindrom lisis tumor, reaksi anafilaksis', fdaCategory: 'C' }
          ],
          relatedTabKey: 'interactions',
          relatedDrugName: 'Doksorubisin'
        }
      ]
    }
  ],

  // BAB 17: CAIRAN & ELEKTROLIT
  'bab-17': [
    {
      id: 'sub-17-3',
      number: '17.3',
      title: 'Koreksi Hiponatremia Akut & Bahaya Mielinolisis Batang Otak (Batas 8-10 mEq)',
      items: [
        {
          id: 'note-17-3',
          chapterId: 'bab-17',
          chapterNumber: 'BAB 17',
          chapterTitle: 'Cairan & Elektrolit',
          subChapterNumber: '17.3',
          subChapterTitle: 'Koreksi Hiponatremia Akut & Bahaya Mielinolisis Batang Otak',
          breadcrumb: 'ELEKTROLIT > HIPONATREMIA NACL 3% BATAS 8-10 MEQ',
          categoryTag: 'EMERGENSI ELEKTROLIT',
          heroMnemonic: 'Maksimal 8-10 mEq Sehari • Lindungi Batang Otak',
          rhymeTagline: 'NaCl 3 persen hanya untuk hiponatremia kejang koma, naikkan maksimal 8 sampai 10 mEq per 24 jam cegah hancurnya selubung mielin batang otak!',
          syllableBreakdown: [
            { syllable: 'Akut Gejala', drugName: 'Hiponatremia Berat (Na < 120 mEq/L + Kejang/Koma)', isDoen: true, badgeType: 'Edema Otak Akut', typicalSideEffect: 'Edema sel glia otak memicu herniasi unkus fatal; indikasi mutlak koreksi salin hipertonik' },
            { syllable: 'NaCl 3%', drugName: 'Natrium Klorida 3% Hipertonik (513 mEq Na/Liter)', isDoen: true, badgeType: 'Salin 3% Bolus', typicalSideEffect: 'Diberikan bolus 100-150 mL IV dalam 10-20 menit hingga gejala kejang reda atau Na naik 4-6 mEq/L' },
            { syllable: 'Batas 8-10', drugName: 'Kaidah Batas Maksimal Kenaikan Natrium', isDoen: true, badgeType: 'Batas 24 Jam', typicalSideEffect: 'Kenaikan TIDAK BOLEH lebih dari 8-10 mEq/L dalam 24 jam pertama (maksimal 18 mEq/L dalam 48 jam)' },
            { syllable: 'ODS', drugName: 'Osmotic Demyelination Syndrome (Mielinolisis Pons)', isDoen: true, badgeType: 'Kerusakan Mielin Otak', typicalSideEffect: 'Akibat koreksi Na terlalu cepat: Tetraplegia lumpuh 4 tungkai, disfagia, locked-in syndrome ireversibel' }
          ],
          clinicalKeyPearls: 'Rumus Adrogue-Fadias untuk prediksi kenaikan Na per Liter cairan infus: Delta Na = (Na infus - Na serum) / (Total Body Water + 1). Nilai Total Body Water (TBW) = BB (kg) x 0.6 untuk pria dewasa atau 0.5 untuk wanita dewasa.',
          clinicalWarnings: 'Bila terjadi over-correction (kadar natrium melompat > 10 mEq/L dalam 24 jam), SEGERA hentikan salin hipertonik dan pasang infus Dextrose 5% (D5W) atau injeksi Desmopresin (DDAVP) untuk menurunkan kembali kadar natrium ke batas aman!',
          comparisonTable: [
            { drugFormula: 'NaCl 3% Hipertonik', mechanism: 'Menarik cairan dari intraseluler sel otak bengkak kembali ke ruang intravaskular plasma', detailedSideEffects: 'Mielinolisis pontin sentral bila terlalu cepat, hiperkloremia, flebitis vena', fdaCategory: 'C' },
            { drugFormula: 'NaCl 0.9% Normal Saline', mechanism: 'Cairan kristaloid isotonik (154 mEq Na/L) untuk hiponatremia hipovolemik ringan-sedang', detailedSideEffects: 'Asidosis metabolik hiperkloremik pada infus volume besar', fdaCategory: 'C' },
            { drugFormula: 'Dextrose 5% dalam Air', mechanism: 'Setelah glukosa dimetabolisme sel, bertindak sebagai air bebas murni hipotonik menurunkan Na', detailedSideEffects: 'Hiperglikemia, edema serebral jika cairan turun terlalu agresif', fdaCategory: 'C' }
          ],
          relatedTabKey: 'interactions',
          relatedDrugName: 'Natrium Klorida 3%'
        }
      ]
    }
  ],

  // BAB 18: TOKSIKOLOGI & ANTIDOTUM KUNCI
  'bab-18': [
    {
      id: 'sub-18-3',
      number: '18.3',
      title: 'Keracunan Organofosfat / Insektisida: Sindrom SLUDGE & Atropin (Atropin • Pralidoksim)',
      items: [
        {
          id: 'note-18-3',
          chapterId: 'bab-18',
          chapterNumber: 'BAB 18',
          chapterTitle: 'Toksikologi & Antidotum Kunci',
          subChapterNumber: '18.3',
          subChapterTitle: 'Keracunan Organofosfat / Insektisida: Sindrom SLUDGE & Atropin',
          breadcrumb: 'TOKSIKOLOGI > ORGANOFOSFAT ATROPIN PRALIDOKSIM',
          categoryTag: 'EMERGENSI TOKSIKOLOGI',
          heroMnemonic: 'SLUDGE Banjir Lendir • Atropin Keringkan • Pralidoksim Reaktivasi',
          rhymeTagline: 'Insektisida bikin banjir lendir SLUDGE & pupil jarum peniti, Atropin titrasi dosis ganda sampai paru kering, Pralidoksim cabut fosfat selamatkan enzim!',
          syllableBreakdown: [
            { syllable: 'SLUDGE', drugName: 'Sindrom Krisis Kolinergik Akut Organofosfat', isDoen: true, badgeType: 'Banjir Sekresi', typicalSideEffect: 'Salivasi, Lakrimasi, Urinasi, Defekasi, GI kram, Emesis, serta pupil pin-point & bronkorhea paru' },
            { syllable: 'Atropin', drugName: 'Sulfas Atropin 1-2 mg IV (Gandakan Dosis Tiap 5-10 Mnt)', isDoen: true, badgeType: 'Antidot Antimuskarinik', typicalSideEffect: 'Titrasi agresif (1mg -> 2mg -> 4mg -> 8mg) hingga tanda ATROPINISASI: lendir jalan napas kering & ronki hilang' },
            { syllable: 'Pralidoksim', drugName: 'Pralidoksim (2-PAM) 1-2g IV Infus Pelan', isDoen: true, badgeType: 'Reaktivator Enzim', typicalSideEffect: 'Memutus ikatan organofosfat dari enzim asetilkolinesterase sebelum terjadi ikatan permanen (aging)' }
          ],
          clinicalKeyPearls: 'Target klinis utama titrasi Sulfas Atropin BUKANLAH pupil melebar semata atau denyut nadi cepat, melainkan BERSIH DAN KERINGNYA SEKRESI SALURAN NAPAS (suara napas paru bersih bebas suara lendir), karena penyebab utama kematian keracunan organofosfat adalah mati lemas tenggelam dalam lendir paru sendiri (asfiksia bronkorhea).',
          clinicalWarnings: 'Keracunan Insektisida Karbamat (misal baygon jadul): Berikan Atropin saja. Pralidoksim umumnya tidak diindikasikan karena karbamilasi enzim bersifat reversibel spontan dalam 24-48 jam.',
          comparisonTable: [
            { drugFormula: 'Sulfas Atropin 0.25mg/mL', mechanism: 'Antagonis kompetitif reseptor muskarinik parasimpatis meredam efek kelebihan asetilkolin', detailedSideEffects: 'Takikardia, mulut kering, pupil midriasis, retensi urin, hipertermia', fdaCategory: 'C' },
            { drugFormula: 'Pralidoksim (2-PAM) 1g', mechanism: 'Nukleofil kuat yang mereaktivasi enzim asetilkolinesterase terfosforilasi', detailedSideEffects: 'Pusing, penglihatan kabur ganda, takikardia, laringospasme', fdaCategory: 'C' }
          ],
          relatedTabKey: 'toxicology',
          relatedDrugName: 'Atropin'
        }
      ]
    },
    {
      id: 'sub-18-4',
      number: '18.4',
      title: 'Keracunan Parasetamol: Metabolit Toksik NAPQI & Rumack-Matthew (NAC 8 Jam Emas)',
      items: [
        {
          id: 'note-18-4',
          chapterId: 'bab-18',
          chapterNumber: 'BAB 18',
          chapterTitle: 'Toksikologi & Antidotum Kunci',
          subChapterNumber: '18.4',
          subChapterTitle: 'Keracunan Parasetamol: Metabolit Toksik NAPQI & Rumack-Matthew',
          breadcrumb: 'TOKSIKOLOGI > OVERDOSIS PARASETAMOL NAC NAPQI',
          categoryTag: 'EMERGENSI TOKSIKOLOGI',
          heroMnemonic: 'NAPQI Racun Hati • NAC 8 Jam Emas Penyelamat',
          rhymeTagline: 'Overdosis parasetamol bikin glutation habis NAPQI hancurkan hati, N-Asetilsistein suntik sebelum 8 jam isi ulang glutation hepar aman!',
          syllableBreakdown: [
            { syllable: 'NAPQI', drugName: 'N-acetyl-p-benzoquinone imine (Metabolit Toksik)', isDoen: true, badgeType: 'Metabolit Toksik CYP2E1', typicalSideEffect: 'Pada overdosis parasetamol (> 150 mg/kg), cadangan glutation hepar habis; NAPQI memicu nekrosis hepar masif' },
            { syllable: 'NAC', drugName: 'N-Asetilsistein (NAC) IV Protokol 21 Jam / Oral 72 Jam', isDoen: true, badgeType: 'Antidot Donor Glutation', typicalSideEffect: 'Prekursor sintesis glutation; mengikat dan menetralkan NAPQI secara langsung mencegah kerusakan hati' },
            { syllable: '8 Jam Emas', drugName: 'Jendela Emas Efikasi 100% NAC', isDoen: true, badgeType: 'Golden Window', typicalSideEffect: 'Pemberian dalam 8 jam pertama pasca minum parasetamol mencegah hepatotoksisitas hampir 100%' },
            { syllable: 'Rumack', drugName: 'Nomogram Rumack-Matthew (Jam ke-4 s/d Jam ke-24)', isDoen: true, badgeType: 'Nomogram Terapi', typicalSideEffect: 'Ambil kadar parasetamol serum pada jam ke-4; jika di atas garis 150 mcg/mL, segera mulai protokol NAC' }
          ],
          clinicalKeyPearls: 'Protokol NAC Intravena 21 Jam (3 Kantong): 1. Dosis Muat: 150 mg/kg dalam D5W 200 mL selama 1 jam. 2. Dosis Kedua: 50 mg/kg dalam D5W 500 mL selama 4 jam. 3. Dosis Ketiga: 100 mg/kg dalam D5W 1000 mL selama 16 jam.',
          clinicalWarnings: 'Reaksi anafilaktoid (flushing wajah merah, gatal, urtikaria, bronkospasme ringan) sering muncul saat dosis muat NAC IV diinfuskan terlalu cepat. Ini bukan alergi sejati; hentikan infus sejenak, berikan difenhidramin, lalu lanjutkan infus dengan kecepatan lebih lambat.',
          comparisonTable: [
            { drugFormula: 'N-Asetilsistein IV 21 Jam', mechanism: 'Donor gugus sulfhidril (-SH) untuk sintesis glutation dan konjugasi langsung metabolit NAPQI', detailedSideEffects: 'Reaksi anafilaktoid flushing ruam gatal, mual muntah', fdaCategory: 'B' },
            { drugFormula: 'N-Asetilsistein Oral 72 Jam', mechanism: 'Protokol oral 140 mg/kg dosis awal dilanjutkan 70 mg/kg tiap 4 jam sebanyak 17 dosis', detailedSideEffects: 'Mual muntah parah bau telur busuk belerang (sulit ditoleransi)', fdaCategory: 'B' },
            { drugFormula: 'Metionin Oral', mechanism: 'Asam amino esensial prekursor alternatif biosintesis glutation hepatoseluler', detailedSideEffects: 'Mual, pusing; efikasi lebih rendah dibanding NAC', fdaCategory: 'C' }
          ],
          relatedTabKey: 'toxicology',
          relatedDrugName: 'Parasetamol'
        }
      ]
    }
  ]
};

// ============================================================================
// DUA BAB BARU LENGKAP: BAB 19 & BAB 20
// ============================================================================

export const NEW_DRUG_NOTES_CHAPTERS: DrugNotesChapter[] = [
  // =========================================================================
  // BAB 19: OBAT OFTALMOLOGI & THT (TETES MATA & TELINGA)
  // =========================================================================
  {
    id: 'bab-19',
    number: 'BAB 19',
    title: 'Obat Oftalmologi & THT (Mata & Telinga)',
    subChapters: [
      {
        id: 'sub-19-1',
        number: '19.1',
        title: 'Terapi Glaukoma: Penurunan Tekanan Intraokular (Ti - La - Pilo - Aseta)',
        items: [
          {
            id: 'note-19-1',
            chapterId: 'bab-19',
            chapterNumber: 'BAB 19',
            chapterTitle: 'Obat Oftalmologi & THT (Mata & Telinga)',
            subChapterNumber: '19.1',
            subChapterTitle: 'Terapi Glaukoma: Penurunan Tekanan Intraokular (TIO)',
            breadcrumb: 'OFTALMOLOGI > GLAUKOMA TI LA PILO ASETA',
            categoryTag: 'FARMAKOLOGI MATA',
            heroMnemonic: 'Ti - La - Pilo - Aseta',
            rhymeTagline: 'Timolol rem produksi cairan bilik mata awas sesak asma, Latanoprost bikin bulu mata lebat & iris cokelat, Pilokarpin miosis sudut terbuka, Asetazolamid rem oral karbonik anhidrase!',
            syllableBreakdown: [
              { syllable: 'Ti', drugName: 'Timolol Maleat 0.25-0.5% (Beta Blocker Non-Selektif)', isDoen: true, badgeType: 'Rem Aqueous Humor', typicalSideEffect: 'Menurunkan produksi aqueous humor; awas absorpsi sistemik picu bronkospasme asma & bradikardia' },
              { syllable: 'La', drugName: 'Latanoprost 0.005% / Travoprost (Analog Prostaglandin F2a)', isDoen: true, badgeType: 'Outflow Uveoskleral', typicalSideEffect: 'Meningkatkan aliran keluar cairan; 1 tetes malam hari; efek kosmetik: iris mata mencokelat & bulu mata lebat lentik' },
              { syllable: 'Pilo', drugName: 'Pilokarpin 1-2% (Agonis Kolinergik Parasimpatis)', isDoen: true, badgeType: 'Miosis Sudut Buka', typicalSideEffect: 'Kontraksi otot siliaris & sfingter pupil (miosis); lini darurat glaukoma sudut tertutup akut; sakit kepala alis' },
              { syllable: 'Aseta', drugName: 'Asetazolamid 250 mg Tablet (Penghambat Karbonik Anhidrase)', isDoen: true, badgeType: 'Sistemik Oral', typicalSideEffect: 'Menghambat sekresi ion bikarbonat di korpus siliare; awas asidosis metabolik, kesemutan parestesia, hipokalemia' }
            ],
            clinicalKeyPearls: 'Teknik "Punctal Occlusion": Setelah obat tetes mata diteteskan, edukasikan pasien untuk memejamkan mata dan menekan sudut mata bagian dalam dekat hidung (duktus nasolakrimalis) selama 1-2 menit. Tindakan sederhana ini memotong absorpsi sistemik obat hingga 70% dan melipatgandakan efek lokal di kornea.',
            clinicalWarnings: 'Timolol tetes mata KONTRAINDIKASI MUTLAK pada penderita Asma Bronkial aktif, PPOK berat, dan Bradikardia sinus / AV Block derajat 2-3 karena dapat memicu gagal napas mendadak akibat bronkokonstriksi sistemik!',
            comparisonTable: [
              { drugFormula: 'Timolol Maleat 0.5%', mechanism: 'Blokade reseptor beta adrenergik di epitel korpus siliare menurunkan sekresi aqueous humor', detailedSideEffects: 'Mata pedih, bronkospasme sesak napas sistemik, bradikardia pusing', fdaCategory: 'C' },
              { drugFormula: 'Latanoprost 0.005%', mechanism: 'Agonis selektif reseptor prostanoid FP merelaksasi otot siliare meningkatkan outflow uveoskleral', detailedSideEffects: 'Pigmentasi cokelat iris permanen, pertumbuhan bulu mata lebat, hiperemia konjungtiva', fdaCategory: 'C' },
              { drugFormula: 'Pilokarpin 2% Tetes', mechanism: 'Agonis muskarinik langsung kontraksi otot sfingter iris membuka anyaman trabekular', detailedSideEffects: 'Spasme akomodasi miopia, pandangan malam buram, kram alis dahi', fdaCategory: 'C' },
              { drugFormula: 'Asetazolamid 250mg', mechanism: 'Inhibitor enzim karbonik anhidrase non-kompetitif menurunkan pembentukan ion bikarbonat bilik mata', detailedSideEffects: 'Parestesia kesemutan jari, asidosis metabolik, anoreksia mual', fdaCategory: 'C' }
            ],
            relatedTabKey: 'interactions',
            relatedDrugName: 'Timolol'
          }
        ]
      },
      {
        id: 'sub-19-2',
        number: '19.2',
        title: 'Tetes Telinga Ototoksik vs Aman Membran Timpani Robek (Oflo vs Neo-Poli)',
        items: [
          {
            id: 'note-19-2',
            chapterId: 'bab-19',
            chapterNumber: 'BAB 19',
            chapterTitle: 'Obat Oftalmologi & THT (Mata & Telinga)',
            subChapterNumber: '19.2',
            subChapterTitle: 'Tetes Telinga: Keamanan Membran Timpani Robek & Ototoksisitas',
            breadcrumb: 'THT > TETES TELINGA OFLO AMAN NEO POLI BAHAYA',
            categoryTag: 'FARMAKOLOGI THT',
            heroMnemonic: 'Oflo Aman • Neo-Poli Bahaya Gendang Telinga Robek',
            rhymeTagline: 'Ofloksasin aman untuk gendang telinga bolong, Neomisin & Polimiksin haram masuk telinga tengah bisa picu tuli permanen!',
            syllableBreakdown: [
              { syllable: 'Oflo Aman', drugName: 'Ofloksasin 0.3% Tetes Telinga Otik (Fluoroquinolon)', isDoen: true, badgeType: 'NON-OTOTOKSIK (AMAN)', typicalSideEffect: 'Satu-satunya antibiotik tetes telinga yang AMAN untuk gendang telinga perforasi / berlubang (OMSK)' },
              { syllable: 'Neo-Poli', drugName: 'Neomisin Sulfat + Polimiksin B Tetes Telinga', isDoen: true, badgeType: 'SANGAT OTOTOKSIK', typicalSideEffect: 'HANYA untuk Otitis Eksterna dengan membran timpani UTUH; jika masuk telinga tengah picu kerusakan koklea tuli saraf' },
              { syllable: 'Kloram', drugName: 'Kloramfenikol 1-3% Tetes Telinga Otik', isDoen: true, badgeType: 'Risiko Ototoksik', typicalSideEffect: 'Berisiko ototoksisitas koklea bila kontak langsung dengan membran tingkap bulat telinga dalam' },
              { syllable: 'Karbogliserin', drugName: 'Karbogliserin 10% / Docusate Sodium Tetes Telinga', isDoen: true, badgeType: 'Pelunak Serumen', typicalSideEffect: 'Melunakkan kotoran telinga serumen prop yang membatu sebelum tindakan spooling irigasi THT' }
            ],
            clinicalKeyPearls: 'Aturan suhu meneteskan obat telinga: JANGAN PERNAH meneteskan obat telinga dalam keadaan dingin langsung dari lemari es! Hangatkan botol obat dalam genggaman telapak tangan selama 2-3 menit sebelum diteteskan. Cairan dingin yang mengenai membran timpani akan memicu refleks kalori vestibular mendadak berupa pusing berputar hebat (vertigo akut), mual, dan muntah proyektil.',
            clinicalWarnings: 'Sebelum menyerahkan tetes telinga yang mengandung Neomisin / Polimiksin B / Gentamisin, apoteker wajib mengonfirmasi bahwa dokter telah memeriksa telinga pasien dengan otoskop dan memastikan MEMBRAN TIMPANI UTUH TANPA LUBANG PERFORASI.',
            comparisonTable: [
              { drugFormula: 'Ofloksasin Otik 0.3%', mechanism: 'Inhibitor DNA girase bakterisid berspektrum luas terhadap Pseudomonas & S. aureus tanpa efek toksik koklea', detailedSideEffects: 'Rasa pahit di lidah bila mengalir ke tuba eustachius, iritasi lokal ringan', fdaCategory: 'C' },
              { drugFormula: 'Neomisin/Polimiksin B', mechanism: 'Kombinasi aminoglikosida pengikat 30S dan deterjen membran sel polipeptida', detailedSideEffects: 'Tuli sensorineural permanen, toksisitas vestibular ataxia, dermatitis kontak', fdaCategory: 'C' },
              { drugFormula: 'Karbogliserin 10%', mechanism: 'Gliserin higroskopis menarik air melembutkan masa keratin lilin serumen telinga', detailedSideEffects: 'Rasa hangat di telinga, gatal transien liang telinga', fdaCategory: 'C' }
            ],
            relatedTabKey: 'drugs',
            relatedDrugName: 'Ofloksasin'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // BAB 20: FARMAKOKINETIKA KLINIK & TDM (THERAPEUTIC DRUG MONITORING)
  // =========================================================================
  {
    id: 'bab-20',
    number: 'BAB 20',
    title: 'Farmakokinetika Klinik & TDM',
    subChapters: [
      {
        id: 'sub-20-1',
        number: '20.1',
        title: 'Perhitungan Klirens Kreatinin Cockcroft-Gault & Penyesuaian Dosis Ginjal',
        items: [
          {
            id: 'note-20-1',
            chapterId: 'bab-20',
            chapterNumber: 'BAB 20',
            chapterTitle: 'Farmakokinetika Klinik & TDM',
            subChapterNumber: '20.1',
            subChapterTitle: 'Perhitungan Klirens Kreatinin Cockcroft-Gault & Penyesuaian Dosis Ginjal',
            breadcrumb: 'FARMASETIKA > COCKCROFT GAULT 140 KURANG UMUR',
            categoryTag: 'FARMAKOKINETIKA GINJAL',
            heroMnemonic: 'Cockcroft 140 Kurang Umur • Wanita Kali 0.85',
            rhymeTagline: '140 kurang umur dikali berat badan dibagi 72 kali kreatinin serum, untuk wanita wajib dikali 0.85 karena massa otot lebih sedikit!',
            syllableBreakdown: [
              { syllable: '140 - Umur', drugName: '(140 - Usia Tahun) x Berat Badan (kg)', isDoen: true, badgeType: 'Rumus Pembilang', typicalSideEffect: 'Mencerminkan penurunan laju filtrasi glomerulus fisiologis manusia seiring pertambahan umur' },
              { syllable: '72 x Scr', drugName: 'Dibagi: 72 x Kadar Serum Kreatinin (mg/dL)', isDoen: true, badgeType: 'Rumus Penyebut', typicalSideEffect: 'Kadar kreatinin serum berbanding terbalik dengan kemampuan filtrasi nefron ginjal' },
              { syllable: 'x 0.85 Wanita', drugName: 'Faktor Pengali 0.85 Khusus Pasien Perempuan', isDoen: true, badgeType: 'Koreksi Gender 85%', typicalSideEffect: 'Massa otot skeletal wanita rata-rata 15% lebih kecil dibanding pria sehingga produksi kreatinin lebih rendah' },
              { syllable: 'IBW Obesitas', drugName: 'Gunakan Berat Badan Ideal (IBW) pada Obesitas BMI > 30', isDoen: true, badgeType: 'Koreksi Obesitas', typicalSideEffect: 'Jaringan lemak tidak memproduksi kreatinin; pakai ABW = IBW + 0.4(TBW - IBW) cegah overdosis obat' }
            ],
            clinicalKeyPearls: 'Rumus Berat Badan Ideal (Devine Formula): Pria = 50 kg + 2.3 kg per inci tinggi badan di atas 5 kaki (60 inci); Wanita = 45.5 kg + 2.3 kg per inci di atas 5 kaki. Jika berat badan aktual pasien melebihi 120% IBW, gunakan Adjusted Body Weight (ABW) agar klirens kreatinin tidak overestimate.',
            clinicalWarnings: 'Pada pasien lansia geriatri yang mengalami pengecilan otot (sarkopenia) dengan kreatinin serum sangat rendah (misal 0.4 mg/dL), banyak pedoman klinik merekomendasikan membulatkan Scr menjadi 0.8-1.0 mg/dL agar hasil estimasi klirens ginjal tidak over-estimasi.',
            comparisonTable: [
              { drugFormula: 'Cockcroft-Gault (CrCl)', mechanism: 'Estimasi klirens kreatinin berbasis massa otot tubuh; standar acuan monografi penyesuaian dosis obat FDA', detailedSideEffects: 'Overestimate pada pasien obesitas bila menggunakan BB total', fdaCategory: 'A' },
              { drugFormula: 'CKD-EPI 2021 (eGFR)', mechanism: 'Estimasi LFG berbasis persamaan populasi modern tanpa variabel ras; standar diagnosis stadium CKD', detailedSideEffects: 'Kurang akurat untuk penyesuaian dosis obat indeks terapi sempit', fdaCategory: 'A' },
              { drugFormula: 'MDRD Formula', mechanism: 'Persamaan 4 variabel (umur, gender, ras, Scr); dirancang khusus untuk populasi gagal ginjal lanjut', detailedSideEffects: 'Tidak akurat pada eGFR > 60 mL/min/1.73m2', fdaCategory: 'A' }
            ],
            relatedTabKey: 'interactions',
            relatedDrugName: 'Klirens Kreatinin'
          }
        ]
      },
      {
        id: 'sub-20-2',
        number: '20.2',
        title: 'TDM: Waktu Sampling Darah Peak vs Trough & Rentang Terapeutik Kunci',
        items: [
          {
            id: 'note-20-2',
            chapterId: 'bab-20',
            chapterNumber: 'BAB 20',
            chapterTitle: 'Farmakokinetika Klinik & TDM',
            subChapterNumber: '20.2',
            subChapterTitle: 'TDM: Waktu Sampling Darah Peak vs Trough & Rentang Terapeutik Kunci',
            breadcrumb: 'TDM > PEAK TROUGH VANKO GENTA FENI DIGO',
            categoryTag: 'MONITORING OBAT TERAPEUTIK',
            heroMnemonic: 'Peak Efikasi • Trough Toksisitas • Steady State Dosis Ke-4',
            rhymeTagline: 'Trough diambil 30 menit sebelum dosis berikutnya, Peak diambil 30-60 menit pasca infus selesai, sampling tepat saat Steady State tercapai!',
            syllableBreakdown: [
              { syllable: 'Steady State', drugName: 'Kondisi Tunak (Css): Tercapai Pasca 4-5x Waktu Paruh (t1/2)', isDoen: true, badgeType: 'Waktu Sampling Baku', typicalSideEffect: 'Sampling darah sebelum kondisi tunak (biasanya sebelum dosis ke-4 atau ke-5) menghasilkan data bias palsu' },
              { syllable: 'Trough Level', drugName: 'Kadar Lembah: Diambil 30 Menit SEBELUM Dosis Berikutnya', isDoen: true, badgeType: 'Indikator Toksisitas', typicalSideEffect: 'Target Trough Vankomisin: 15-20 mcg/mL (infeksi berat); Target Gentamisin: < 1-2 mcg/mL cegah nefrotoksik' },
              { syllable: 'Peak Level', drugName: 'Kadar Puncak: Diambil 30-60 Menit SETELAH Infus Selesai', isDoen: true, badgeType: 'Indikator Efikasi', typicalSideEffect: 'Menilai daya bunuh bakterisid maksimal; Target Peak Gentamisin ODD: 16-24 mcg/mL' },
              { syllable: 'Obat Indeks Sempit', drugName: 'Fenitoin, Digoksin, Litium, Teofilin, Vankomisin', isDoen: true, badgeType: 'Rentang Terapi Ketat', typicalSideEffect: 'Fenitoin (10-20 mcg/mL kinetika non-linier); Digoksin (0.5-0.9 ng/mL ambil > 6-8 jam pasca minum)' }
            ],
            clinicalKeyPearls: 'Waktu sampling Digoksin: Sampel darah Digoksin WAJIB diambil minimal 6-8 jam setelah dosis terakhir (atau tepat sebelum dosis berikutnya). Jika darah diambil 1-2 jam pasca minum obat, hasilnya akan tinggi palsu (false toxicity) karena digoksin masih berada dalam fase distribusi darah dan belum terikat di otot jantung.',
            clinicalWarnings: 'Kinetika Non-Linier Fenitoin (Michaelis-Menten): Enzim pemetabolisme hepar fenitoin mudah mengalami kejenuhan (saturasi). Menambah dosis sedikit saja (misal dari 300 mg ke 400 mg) dapat melipatgandakan kadar serum hingga 3-4 kali lipat memicu ataksia berat, nistagmus, dan ensefalopati!',
            comparisonTable: [
              { drugFormula: 'Vankomisin IV (Trough)', mechanism: 'Target AUC24/MIC 400-600 atau Trough 15-20 mcg/mL pada pneumonia MRSA & endokarditis', detailedSideEffects: 'Nefrotoksisitas melonjak jika trough konstan > 20 mcg/mL', fdaCategory: 'C' },
              { drugFormula: 'Gentamisin IV (Trough)', mechanism: 'Target Trough < 1 mcg/mL membuktikan klirens ginjal tuntas sebelum dosis berikutnya diberikan', detailedSideEffects: 'Kerusakan sel rambut koklea & akumulasi lisosom tubulus nefron', fdaCategory: 'D' },
              { drugFormula: 'Digoksin Oral (TDM)', mechanism: 'Target 0.5-0.9 ng/mL pada gagal jantung; kadar > 1.2 ng/mL meningkatkan mortalitas aritmia', detailedSideEffects: 'Aritmia ventrikel, penglihatan kuning-kehijauan (xanthopsia), mual', fdaCategory: 'C' },
              { drugFormula: 'Fenitoin Oral (TDM)', mechanism: 'Target total 10-20 mcg/mL (bebas 1-2 mcg/mL); koreksi Sheiner-Tozer pada hipoalbuminemia', detailedSideEffects: 'Hiperplasia gingiva gusi, nistagmus bola mata bergetar, ataksia jalan sempoyongan', fdaCategory: 'D' }
            ],
            relatedTabKey: 'toxicology',
            relatedDrugName: 'Digoksin'
          }
        ]
      }
    ]
  }
];
