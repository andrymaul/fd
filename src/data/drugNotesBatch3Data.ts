import type { DrugNoteItem, DrugNotesChapter } from './drugNotesData';

// ============================================================================
// BATCH 3: EKSPANSI LENGKAP CATATAN HAFALAN & JEMBATAN KELEDAI KLINIS FARMASI
// Materi UKMPPAI (CBT/OSCE), UKTVF (D3), SKB CPNS & Praktik Klinis Spesialis RS
// Menambahkan: Sub-bab Krisis Hipertensi, Antidotum Lanjutan, serta BAB 21 s/d 25
// ============================================================================

export const BATCH3_ADDITIONAL_SUBCHAPTERS_MAP: Record<string, DrugNotesChapter['subChapters']> = {
  // BAB 2: OBAT KARDIOVASKULAR
  'bab-2': [
    {
      id: 'sub-2-8',
      number: '2.8',
      title: 'Krisis Hipertensi: Emergensi vs Urgensi (Nikar-Labe IV vs Kloni-Kapto Oral)',
      items: [
        {
          id: 'note-2-8',
          chapterId: 'bab-2',
          chapterNumber: 'BAB 2',
          chapterTitle: 'Obat Kardiovaskular',
          subChapterNumber: '2.8',
          subChapterTitle: 'Krisis Hipertensi: Emergensi vs Urgensi',
          breadcrumb: 'KARDIOVASKULAR > KRISIS HIPERTENSI EMERGENSI URGENSI',
          categoryTag: 'GAWAT DARURAT JANTUNG',
          heroMnemonic: 'Nikar - Labe IV Emergensi • Kloni - Kapto Oral Urgensi',
          rhymeTagline: 'Emergensi ada target organ rusak titrasi Nikardipin infus IV perlahan, Urgensi tanpa organ rusak turunkan bertahap Klonidin / Kaptopril oral jangan anjlok!',
          syllableBreakdown: [
            { syllable: 'Nikar IV', drugName: 'Nikardipin HCl 5 mg/jam Titrasi Infus IV (DHP CCB)', isDoen: true, badgeType: 'Emergensi Lini 1', typicalSideEffect: 'Vasodilator arterial serebral & koroner selektif tanpa menaikkan TIK; titrasi naik 2.5 mg/jam tiap 15 menit' },
            { syllable: 'Labe IV', drugName: 'Labetalol IV / Nitroprusid (Krisis Aorta)', isDoen: false, badgeType: 'Diseksi Aorta', typicalSideEffect: 'Kombinasi alfa-1 dan beta blocker non-selektif; baku emas diseksi aorta torakalis dan eklamsia' },
            { syllable: 'Kloni Oral', drugName: 'Klonidin 0.075-0.15 mg Oral / Tablet Kunyah (Agonis Alfa-2)', isDoen: true, badgeType: 'Urgensi Oral', typicalSideEffect: 'Menekan tonus simpatis sentral; turunkan tensi bertahap 24-48 jam rawat jalan; awas mulut kering & rebound' },
            { syllable: 'Kapto Oral', drugName: 'Kaptopril 12.5-25 mg Sublingual / Oral (ACE Inhibitor)', isDoen: true, badgeType: 'Onset Cepat 15m', typicalSideEffect: 'Meredakan tahanan perifer dalam 15-30 menit; jangan berikan pada stenosis arteri renalis bilateral' }
          ],
          clinicalKeyPearls: 'Prinsip "Rule of 25%" pada Hipertensi Emergensi: JANGAN PERNAH menurunkan tekanan darah secara drastis ke level normal (120/80 mmHg) dalam beberapa jam pertama! Turunkan Mean Arterial Pressure (MAP) maksimal 20-25% pada 1 jam pertama, lalu target 160/100-110 mmHg dalam 2-6 jam berikutnya untuk mencegah hipoperfusi otak (stroke iskemik watershed) dan infark miokard akut.',
          clinicalWarnings: 'DILARANG KERAS memberikan NIFEDIPIN SUBLINGUAL (ditusuk jarum lalu diteteskan di bawah lidah) pada krisis hipertensi! Nifedipin short-acting sublingual memicu penurunan tensi presipitatus tak terkontrol, iskemia serebral fatal, dan henti jantung mendadak (Black Box Warning FDA).',
          comparisonTable: [
            { drugFormula: 'Nikardipin Infus IV', mechanism: 'Penghambat kanal kalsium dihidropiridin vaskuloselektif merelaksasi otot polos arteriol perifer', detailedSideEffects: 'Takikardia kompensasi, flebitis jalur perifer (butuh vena sentral bila pekat), sakit kepala', fdaCategory: 'C' },
            { drugFormula: 'Klonidin 0.15mg Oral', mechanism: 'Agonis reseptor alfa-2 adrenergik presinaptik di batang otak menghambat pelepasan norepinefrin', detailedSideEffects: 'Mulut kering, sedasi mengantuk berat, bradikardia, hipertensi rebound bila henti mendadak', fdaCategory: 'C' },
            { drugFormula: 'Kaptopril 25mg Oral', mechanism: 'Penghambat enzim konversi angiotensin I ke II onset cepat mereduksi afterload dan preload', detailedSideEffects: 'Batuk kering bradikinin, hiperkalemia, hipotensi ortostatik dosis pertama', fdaCategory: 'D' }
          ],
          relatedTabKey: 'interactions',
          relatedDrugName: 'Nikardipin'
        }
      ]
    }
  ],

  // BAB 7: TOKSIKOLOGI & ANTIDOTUM KHUSUS
  'bab-7': [
    {
      id: 'sub-7-3',
      number: '7.3',
      title: 'Antidotum Spesifik Lanjutan: Metanol, Digoksin, & Beta Blocker (Fomepizol • DigiFab • Glukagon)',
      items: [
        {
          id: 'note-7-3',
          chapterId: 'bab-7',
          chapterNumber: 'BAB 7',
          chapterTitle: 'Toksikologi & Antidotum Khusus',
          subChapterNumber: '7.3',
          subChapterTitle: 'Antidotum Spesifik Lanjutan: Metanol, Digoksin & Beta Blocker',
          breadcrumb: 'TOKSIKOLOGI > FOMEPIZOL DIGIFAB GLUKAGON',
          categoryTag: 'ANTIDOTUM SPESIFIK IGD',
          heroMnemonic: 'Fome-Etanol Metanol • DigiFab Digoksin • Gluka Beta-Blocker',
          rhymeTagline: 'Metanol oplosan tangkal Fomepizol atau Etanol hambat alkohol dehidrogenase, Digoksin letal tangkap fragmen DigiFab, Overdosis Beta Blocker pompa kembali pakai Glukagon!',
          syllableBreakdown: [
            { syllable: 'Fome-Etanol', drugName: 'Fomepizol IV / Etanol 10-20% Oral / IV (Antidot Metanol & Etilen Glikol)', isDoen: true, badgeType: 'Inhibitor ADH', typicalSideEffect: 'Afinitas 8.000x lebih kuat dibanding metanol terhadap Alkohol Dehidrogenase, cegah pembentukan asam format racun mata' },
            { syllable: 'DigiFab', drugName: 'Digoxin Immune Fab (DigiFab / Digibind) Fragmen Antibodi Ovina', isDoen: false, badgeType: 'Antidot Spesifik', typicalSideEffect: 'Mengikat molekul digoksin bebas dalam darah membentuk kompleks inert yang diekskresi lewat urin; pantau kalium darah' },
            { syllable: 'Glukagon IV', drugName: 'Glukagon 3-10 mg Bolus IV lambat lanjut infus (Antidot Beta Blocker)', isDoen: true, badgeType: 'Bypass Reseptor', typicalSideEffect: 'Mengaktifkan Adenilat Siklase miokardium secara independen dari reseptor beta, melipatgandakan cAMP & detak jantung' },
            { syllable: 'Kalsium Glukonat', drugName: 'Kalsium Glukonat 10% 10-20 mL IV (Antidot CCB / Amlodipine/Diltiazem)', isDoen: true, badgeType: 'Inotropik Kalsium', typicalSideEffect: 'Mengatasi syok hipotensi & bradikardia akibat blokade kanal kalsium miokardium; berikan perlahan' }
          ],
          clinicalKeyPearls: 'Mekanisme Toksisitas Metanol (Miras Oplosan): Metanol sendiri sebenarnya relatif non-toksik, tetapi metabolitnya—ASAM FORMAT (Formic acid) hasil oksidasi enzim Alkohol Dehidrogenase (ADH)—adalah racun sitotoksik mitokondria yang merusak retina mata (kebutaan mendadak permanen "snowstorm vision") dan asidosis metabolik berat (high anion gap). Etanol bekerja sebagai substrat kompetitif karena enzim ADH memiliki afinitas 10-20x lebih tinggi terhadap etanol dibanding metanol.',
          clinicalWarnings: 'Pemberian Glukagon dosis tinggi pada keracunan Beta Blocker hampir selalu memicu MUAL DAN MUNTAH HEBAT! Pastikan jalur napas aman (posisi miring aman atau intubasi bila koma) untuk mencegah komplikasi aspirasi paru fatal.',
          comparisonTable: [
            { drugFormula: 'Fomepizol 15mg/kg IV', mechanism: 'Inhibitor kompetitif enzim alkohol dehidrogenase hepar mencegah bioaktivasi metanol/etilen glikol', detailedSideEffects: 'Sakit kepala, mual, pusing, peningkatan enzim transaminase hepar sementara', fdaCategory: 'C' },
            { drugFormula: 'Digoxin Immune Fab', mechanism: 'Fragmen Fab antibodi monoklonal spesifik berikatan kuat menginaktivasi digoksin bebas serum', detailedSideEffects: 'Hipokalemia rebound saat kalium masuk kembali ke sel, perburukan gagal jantung', fdaCategory: 'C' },
            { drugFormula: 'Glukagon 5mg IV', mechanism: 'Aktivasi reseptor glukagon Gs menstimulasi adenilat siklase menaikkan cAMP tanpa reseptor beta-1', detailedSideEffects: 'Mual muntah berat proyektil, hiperglikemia transien, hipokalemia ringan', fdaCategory: 'B' }
          ],
          relatedTabKey: 'toxicology',
          relatedDrugName: 'Kalsium Glukonat'
        }
      ]
    }
  ]
};

export const BATCH3_NEW_CHAPTERS: DrugNotesChapter[] = [
  // =========================================================================
  // BAB 21: TOKSISITAS & PROTOKOL KEMOTERAPI ONKOLOGI
  // =========================================================================
  {
    id: 'bab-21',
    number: 'BAB 21',
    title: 'Toksisitas & Protokol Kemoterapi Onkologi',
    subChapters: [
      {
        id: 'sub-21-1',
        number: '21.1',
        title: 'Toksisitas Khas Sitostatika Klasik (Cis-Nefro • Dokso-Kardio • Siklo-Mesna • Vinkri-Saraf)',
        items: [
          {
            id: 'note-21-1',
            chapterId: 'bab-21',
            chapterNumber: 'BAB 21',
            chapterTitle: 'Toksisitas & Protokol Kemoterapi Onkologi',
            subChapterNumber: '21.1',
            subChapterTitle: 'Toksisitas Khas Sitostatika Klasik (C-D-S-V Onko)',
            breadcrumb: 'ONKOLOGI > TOKSISITAS SITOSATIKA CIS DOKSO SIKLO VINKRI',
            categoryTag: 'FARMAKOLOGI ONKOLOGI',
            heroMnemonic: 'Cis - Dokso - Siklo - Vinkri',
            rhymeTagline: 'Cisplatin racuni ginjal dan telinga butuh hidrasi masif NaCl, Doksorubisin jebol jantung pasang Deksrazoksan, Siklofosfamid bikin kencing darah tangkal pakai MESNA, Vinkristin lumpuhkan saraf kaki JANGAN PERNAH disuntik Intratekal!',
            syllableBreakdown: [
              { syllable: 'Cis-Nefro', drugName: 'Cisplatin IV (Senyawa Koordinasi Platinum)', isDoen: true, badgeType: 'Nefro & Ototoksik', typicalSideEffect: 'Nekrosis tubulus ginjal akut, hipomagnesemia & tuli sensorineural frekuensi tinggi; wajib hidrasi NaCl 0.9% 1-2 liter' },
              { syllable: 'Dokso-Kardio', drugName: 'Doksorubisin / Daunorubisin (Antrasiklin Kanker)', isDoen: true, badgeType: 'Kardiototoksik Kumulatif', typicalSideEffect: 'Radikal bebas merusak miosit jantung; batas kumulatif 450-550 mg/m2; antidot kardioprotektor: Deksrazoksan' },
              { syllable: 'Siklo-Mesna', drugName: 'Siklofosfamid / Ifosfamid IV (Alkilating Agent)', isDoen: true, badgeType: 'Sistitis Hemoragik', typicalSideEffect: 'Metabolit Akrolein membakar dinding buli kencing berdarah; wajib dibilas donor sulfhidril MESNA + hidrasi' },
              { syllable: 'Vinkri-Saraf', drugName: 'Vinkristin 1.4 mg/m2 IV (Vinca Alkaloid Penahan Mikrotubulus)', isDoen: true, badgeType: 'Neuropati Perifer', typicalSideEffect: 'Parestesia ujung jari, drop foot, konstipasi ileus paralitik; HANYA BOLEH INTRAVENA (Intratekal = KEMATIAN FATAL)' }
            ],
            clinicalKeyPearls: 'Protokol Pelindung MESNA (Sodium 2-mercaptoethanesulfonate): Akrolein adalah metabolit reaktif dari siklofosfamid yang mengendap di kantung kemih. MESNA bekerja dengan mengikat ikatan rangkap karbon akrolein secara langsung di urin melalui gugus tiol bebas (-SH), menghasilkan senyawa adisi tioeter yang larut air, tidak toksik, dan mudah diekskresi keluar kandung kemih.',
            clinicalWarnings: 'FATAL WARNING INTERNASIONAL: Vinkristin HANYA BOLEH disuntikkan secara INTRAVENA! Bila Vinkristin tidak sengaja disuntikkan ke cairan serebrospinal (Intratekal) menggantikan Metotreksat, akan terjadi ensefalomielitis ascending destruktif yang berujung pada kelumpuhan total dan kematian 100% dalam penderitaan ekstrem!',
            comparisonTable: [
              { drugFormula: 'Cisplatin 50-100mg/m2', mechanism: 'Cross-linking untai ganda DNA membentuk aduk intrastrand mencegah replikasi sel', detailedSideEffects: 'Nefrotoksisitas berat (kreatinin naik), mual muntah derajat tertinggi HEC, tinnitus tuli', fdaCategory: 'D' },
              { drugFormula: 'Doksorubisin 60mg/m2', mechanism: 'Interkalasi pasangan basa DNA, inhibisi topoisomerase II & pembentukan radikal bebas besi', detailedSideEffects: 'Kardiomiopati dilatasi gagal jantung kongestif, urin berwarna merah anggur, alopesia total', fdaCategory: 'D' },
              { drugFormula: 'Siklofosfamid 500mg', mechanism: 'Penambahan gugus alkil pada posisi N-7 guanin memutus ikatan fosfodiester DNA', detailedSideEffects: 'Sistitis hemoragik disuria, mielosupresi leukopenia, supresi imun berat', fdaCategory: 'D' },
              { drugFormula: 'Vinkristin 1.4mg/m2', mechanism: 'Pengikatan tubulin menghambat polimerisasi mikrotubulus menghentikan mitosis fase M metafase', detailedSideEffects: 'Neuropati perifer hilang refleks tendo, konstipasi obstipasi, nyeri rahang', fdaCategory: 'D' }
            ],
            relatedTabKey: 'high-alert',
            relatedDrugName: 'Vinkristin'
          }
        ]
      },
      {
        id: 'sub-21-2',
        number: '21.2',
        title: 'Emesis Induksi Kemoterapi HEC / MEC: Triple Antiemetik (Setron • Deksa • Pitant)',
        items: [
          {
            id: 'note-21-2',
            chapterId: 'bab-21',
            chapterNumber: 'BAB 21',
            chapterTitle: 'Toksisitas & Protokol Kemoterapi Onkologi',
            subChapterNumber: '21.2',
            subChapterTitle: 'Protokol Antiemetik Kanker HEC: Triple Regimen ASCO/NCCN',
            breadcrumb: 'ONKOLOGI > ANTIEMETIK KANKER SETRON DEKSA PITANT',
            categoryTag: 'TERAPI SUPORTIF KANKER',
            heroMnemonic: 'Setron • Deksa • Pitant Triple Proteksi Mual',
            rhymeTagline: 'Ondansetron blokade 5-HT3 sentral dan usus, Deksametason potensiasi sinergis kurangi inflamasi, Aprepitant kunci reseptor Substan P Neurokinin-1 tuntaskan mual lambat!',
            syllableBreakdown: [
              { syllable: 'Setron', drugName: 'Ondansetron 8 mg IV / Granisetron / Palonosetron (Antagonis 5-HT3)', isDoen: true, badgeType: 'Mual Akut 24 Jam', typicalSideEffect: 'Blokade reseptor serotonin di CTZ batang otak & saraf vagus usus; awas konstipasi & pemanjangan interval QTc' },
              { syllable: 'Deksa', drugName: 'Deksametason 12-20 mg Oral / IV (Kortikosteroid Sinergis)', isDoen: true, badgeType: 'Potensiasi Sinergis', typicalSideEffect: 'Meningkatkan efikasi antiemetik hingga 30-40% via hambatan prostaglandin; awas lonjakan gula darah' },
              { syllable: 'Pitant', drugName: 'Aprepitant 125 mg lanjut 80 mg / Fosaprepitant IV (Antagonis NK-1)', isDoen: true, badgeType: 'Mual Lambat Hari 2-5', typicalSideEffect: 'Menghalangi ikatan Substan P pada reseptor Neurokinin-1; baku emas prevensi Delayed CINV kemoterapi cisplatin' },
              { syllable: 'Olanzapin', drugName: 'Olanzapin 5-10 mg Malam Hari (Antipsikotik Atipikal / Kuadrupel)', isDoen: true, badgeType: 'Regimen Kuadrupel', typicalSideEffect: 'Blokade multipel dopamin & serotonin; pilihan tambahan untuk CINV refrakter atau mual antisipatorik' }
            ],
            clinicalKeyPearls: 'Pembedaan Fase Mual Kemoterapi: (1) Mual Akut: Muncul dalam menit hingga 24 jam pertama paska infus, dimediasi oleh pelepasan serotonin masif dari sel enterokromafin usus; (2) Mual Lambat (Delayed): Muncul hari ke-2 sampai hari ke-5, terutama dimediasi oleh neuropeptida Substansi P di SSP. Karena itu, Ondansetron saja TIDAK CUKUP untuk kemo cisplatin emetogenik tinggi; wajib dikombinasikan dengan Aprepitant!',
            clinicalWarnings: 'Semua obat golongan 5-HT3 Antagonist (terutama Ondansetron dosis tinggi IV > 16 mg sekaligus) berisiko memperpanjang interval QT pada EKG dan memicu aritmia ventrikel Torsades de Pointes. Selalu periksa kadar elektrolit serum (K+, Mg2+) sebelum kemoterapi.',
            comparisonTable: [
              { drugFormula: 'Ondansetron 8mg IV', mechanism: 'Antagonis selektif reseptor 5-HT3 perifer saraf vagus dan sentral di chemoreceptor trigger zone', detailedSideEffects: 'Konstipasi feses keras, sakit kepala vaskular, pemanjangan gelombang QTc', fdaCategory: 'B' },
              { drugFormula: 'Deksametason 12mg IV', mechanism: 'Penghambatan sintesis prostaglandin sentral dan modulasi permeabilitas sawar darah otak emesis', detailedSideEffects: 'Insomnia gelisah, hiperglikemia akut, dispepsia iritasi lambung', fdaCategory: 'C' },
              { drugFormula: 'Aprepitant 125mg Oral', mechanism: 'Antagonis selektif berdaya tembus otak tinggi pada reseptor neurokinin-1 (NK-1) substansi P', detailedSideEffects: 'Kelelahan fatigue, cegukan singultus, peningkatan transaminase hepar', fdaCategory: 'B' }
            ],
            relatedTabKey: 'interactions',
            relatedDrugName: 'Ondansetron'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // BAB 22: OBAT VASOAKTIF, SYOK & RESUSITASI KRITIS ICU
  // =========================================================================
  {
    id: 'bab-22',
    number: 'BAB 22',
    title: 'Obat Vasoaktif, Syok & Resusitasi Kritis ICU',
    subChapters: [
      {
        id: 'sub-22-1',
        number: '22.1',
        title: 'Pemilihan Vasopresor & Inotropik Syok (NorEpi • Epi • Dobu • Vaso)',
        items: [
          {
            id: 'note-22-1',
            chapterId: 'bab-22',
            chapterNumber: 'BAB 22',
            chapterTitle: 'Obat Vasoaktif, Syok & Resusitasi Kritis ICU',
            subChapterNumber: '22.1',
            subChapterTitle: 'Pemilihan Vasopresor & Inotropik pada Berbagai Jenis Syok',
            breadcrumb: 'ICU KRITIS > VASOPRESOR SYOK NOREPI EPI DOBU VASO',
            categoryTag: 'FARMAKOTERAPI ICU & RESUSITASI',
            heroMnemonic: 'NorEpi Septik • Epi Anafilaksis • Dobu Kardiogenik',
            rhymeTagline: 'Norepinefrin pilihan utama syok septik vasodilatasi, Epinefrin paha IM selamatkan nyawa syok anafilaksis, Dobutamin pompa kuat gagal jantung kardiogenik, Vasopresin pendamping saat tensi masih anjlok!',
            syllableBreakdown: [
              { syllable: 'NorEpi', drugName: 'Norepinefrin Bitartrat 0.05-0.5 mcg/kg/menit (Vasopresor Alfa-1 Dominan)', isDoen: true, badgeType: 'Syok Septik Lini 1', typicalSideEffect: 'Vasokonstriksi kuat via alfa-1 dengan sedikit beta-1 inotropik; menaikkan MAP tanpa takikardia berlebih' },
              { syllable: 'Epinefrin IM', drugName: 'Epinefrin 1:1000 (0.3-0.5 mg IM Paha Anterolateral) / Titrasi Infus', isDoen: true, badgeType: 'Baku Emas Anafilaksis', typicalSideEffect: 'Agonis alfa-1 (vasokonstriksi redam edema laring), beta-1 (inotropik), dan beta-2 (bronkodilatasi masif)' },
              { syllable: 'Dobutamin', drugName: 'Dobutamin HCl 2.5-20 mcg/kg/menit (Inotropik Beta-1 Murni)', isDoen: true, badgeType: 'Syok Kardiogenik', typicalSideEffect: 'Meningkatkan kontraktilitas otot jantung (curah jantung) dengan sedikit vasodilatasi perifer (inodilator)' },
              { syllable: 'Vasopresin', drugName: 'Vasopresin 0.03-0.04 Unit/menit Fixed Dose (Agonis Reseptor V1)', isDoen: true, badgeType: 'Vasopresor Lini 2', typicalSideEffect: 'Vasokonstriksi otot polos via V1 non-adrenergik; efektif pada kondisi asidosis laktat berat' }
            ],
            clinicalKeyPearls: 'Lokasi & Rute Injeksi Epinefrin Anafilaksis: Selalu suntikkan Epinefrin 1:1000 secara INTRAMUSKULAR (IM) pada PAHA BAGIAN LUAR DEPAN (Vastus Lateralis), BUKAN di lengan atas (deltoid) dan BUKAN subkutan! Vaskularisasi otot paha jauh lebih masif sehingga kadar puncak terapeutik tercapai dalam 8 menit, dibandingkan deltoid/subkutan yang membutuhkan waktu > 30 menit saat pasien sudah kolaps jalan napas.',
            clinicalWarnings: 'Ekstravasasi Vasopresor: Norepinefrin dan Dopamin HARUS diberikan melalui KATETER VENA SENTRAL (CVC). Bila bocor ke jaringan subkutan perifer (ekstravasasi), vasokonstriksi ekstrem akan memicu nekrosis iskemik jaringan dan gangren! Antidot ekstravasasi vasopresor adalah injeksi FENTOLAMIN (Regitine) 5-10 mg subkutan melingkar.',
            comparisonTable: [
              { drugFormula: 'Norepinefrin Infus', mechanism: 'Agonis kuat reseptor alfa-1 adrenergik (vasokonstriksi) dan agonis moderat beta-1 (inotropik)', detailedSideEffects: 'Iskemia akral perifer jari dingin, bradikardia refleks, nekrosis jaringan ekstravasasi', fdaCategory: 'C' },
              { drugFormula: 'Epinefrin 1:1000 IM', mechanism: 'Agonis non-selektif alfa-1, alfa-2, beta-1, dan beta-2 membalikkan vasodilatasi & bronkospasme', detailedSideEffects: 'Palpitasi gemetar tremor, takikardia cemas gelisah, sakit kepala berdenyut', fdaCategory: 'C' },
              { drugFormula: 'Dobutamin Infus IV', mechanism: 'Agonis kuat reseptor beta-1 adrenergik miokardium meningkatkan siklik AMP dan kontraktilitas', detailedSideEffects: 'Takikardia supraventrikular, aritmia ektopik ventrikel, hipotensi bila hipovolemik', fdaCategory: 'B' },
              { drugFormula: 'Vasopresin Infus', mechanism: 'Stimulasi reseptor vasopresin V1a pada sel otot polos vaskular mengaktivasi fosfolipase C', detailedSideEffects: 'Iskemia miokardium, vasokonstriksi splanknikus hepar/usus, hiponatremia', fdaCategory: 'C' }
            ],
            relatedTabKey: 'toxicology',
            relatedDrugName: 'Epinefrin'
          }
        ]
      },
      {
        id: 'sub-22-2',
        number: '22.2',
        title: 'Titrasi Dopamin Berbasis Dosis: Tiga Tingkat Reseptor (Renal • Jantung • Vaskular)',
        items: [
          {
            id: 'note-22-2',
            chapterId: 'bab-22',
            chapterNumber: 'BAB 22',
            chapterTitle: 'Obat Vasoaktif, Syok & Resusitasi Kritis ICU',
            subChapterNumber: '22.2',
            subChapterTitle: 'Titrasi Dopamin: Profil Reseptor Dosis Rendah, Sedang & Tinggi',
            breadcrumb: 'ICU KRITIS > DOPAMIN DOSIS RENAL JANTUNG VASKULAR',
            categoryTag: 'FARMAKOKINETIKA RESUSITASI',
            heroMnemonic: 'Dopamin: 1-3 Ginjal • 3-10 Jantung • >10 Pembuluh Darah',
            rhymeTagline: 'Satu sampai tiga mikrogram stimulasi dopaminergik vasodilatasi ginjal, Tiga sampai sepuluh mikrogram pompa beta-1 inotropik jantung, Di atas sepuluh mikrogram alfa-1 vasokonstriksi kencang!',
            syllableBreakdown: [
              { syllable: '1-3 mcg', drugName: 'Dopamin 1-3 mcg/kg/menit (Dosis Rendah / Reseptor D1-D2)', isDoen: true, badgeType: 'Dosis Renal/Mesenterika', typicalSideEffect: 'Dilatasi arteriol renalis & mesenterika; mitos "renal protection" kini tidak lagi direkomendasikan rutin' },
              { syllable: '3-10 mcg', drugName: 'Dopamin 3-10 mcg/kg/menit (Dosis Sedang / Reseptor Beta-1)', isDoen: true, badgeType: 'Inotropik Jantung', typicalSideEffect: 'Meningkatkan stroke volume, cardiac output, dan kontraktilitas miokardium; awas takiaritmia' },
              { syllable: '>10 mcg', drugName: 'Dopamin 10-20 mcg/kg/menit (Dosis Tinggi / Reseptor Alfa-1)', isDoen: true, badgeType: 'Vasokonstriksi Sistemik', typicalSideEffect: 'Vasokonstriksi perifer mendongkrak SVR dan MAP; risiko takikardia jauh lebih tinggi dibanding norepinefrin' }
            ],
            clinicalKeyPearls: 'Pergeseran Panduan Sepsis (Surviving Sepsis Campaign): Dopamin tidak lagi menjadi lini pertama syok septik! NOREPINEFRIN adalah vasopresor terpilih karena uji klinis membuktikan Dopamin memicu insidensi aritmia takiaritmia ventrikel 2 kali lipat lebih tinggi dan meningkatkan angka mortalitas pada pasien syok septik.',
            clinicalWarnings: 'Inkompatibilitas Larutan Basa: Dopamin dan Norepinefrin terinaktivasi secara kimiawi dan terurai cepat dalam larutan infus alkalis (seperti Natrium Bikarbonat / Meylon). JANGAN PERNAH mencampurkan katekolamin dalam jalur infus bersama bic-nat!',
            comparisonTable: [
              { drugFormula: 'Dopamin 1-3 mcg/kg/m', mechanism: 'Agonis reseptor dopaminergik D1 di pembuluh darah renal, koroner, dan serebral', detailedSideEffects: 'Diuresis transien, mual ringan, vasodilatasi splanknikus', fdaCategory: 'C' },
              { drugFormula: 'Dopamin 5-10 mcg/kg/m', mechanism: 'Agonis reseptor beta-1 adrenergik merangsang pelepasan norepinefrin endogen di miokard', detailedSideEffects: 'Takikardia sinus, palpitasi aritmogenik, peningkatan konsumsi oksigen jantung', fdaCategory: 'C' },
              { drugFormula: 'Dopamin >10 mcg/kg/m', mechanism: 'Dominasi stimulasi reseptor alfa-1 adrenergik mengatasi efek vasodilatasi D1', detailedSideEffects: 'Vasokonstriksi perifer ekstrem, iskemia jari akral, vasokonstriksi ginjal paradoksal', fdaCategory: 'C' }
            ],
            relatedTabKey: 'iv-compatibility',
            relatedDrugName: 'Dopamin'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // BAB 23: DERMATOLOGI & POTENSI KORTIKOSTEROID TOPIKAL
  // =========================================================================
  {
    id: 'bab-23',
    number: 'BAB 23',
    title: 'Dermatologi & Potensi Kortikosteroid Topikal',
    subChapters: [
      {
        id: 'sub-23-1',
        number: '23.1',
        title: 'Kelas Potensi Kortikosteroid Topikal (Super-Poten I s/d Potensi Rendah VII)',
        items: [
          {
            id: 'note-23-1',
            chapterId: 'bab-23',
            chapterNumber: 'BAB 23',
            chapterTitle: 'Dermatologi & Potensi Kortikosteroid Topikal',
            subChapterNumber: '23.1',
            subChapterTitle: 'Kelas Potensi Kortikosteroid Topikal & Batas Area Penggunaan',
            breadcrumb: 'KULIT > POTENSI KORTIKOSTEROID KLO MOMET BETA HIDRO',
            categoryTag: 'FARMAKOTERAPI DERMATOLOGI',
            heroMnemonic: 'Klo Super I • Momet-Beta Sedang II-IV • Hidro Lemah VII',
            rhymeTagline: 'Klobetasol super kuat kelas satu untuk telapak tebal jangan lebih dua minggu, Mometason dan Betametason potensi sedang badan anggota gerak, Hidrokortison paling ramah untuk wajah bayi dan lipatan kulit!',
            syllableBreakdown: [
              { syllable: 'Klo Super I', drugName: 'Klobetasol Propionat 0.05% Salep/Krim (Potensi Sangat Tinggi / Kelas I)', isDoen: true, badgeType: 'Super-Poten Kelas 1', typicalSideEffect: 'Hanya untuk plak tebal psoriasis/liken; maksimal pakai 2 minggu berturut; pantau supresi aksis HPA adrenal' },
              { syllable: 'Momet II-IV', drugName: 'Mometason Furoat 0.1% / Betametason Dipropionat (Potensi Tinggi-Sedang)', isDoen: true, badgeType: 'Badan & Ekstremitas', typicalSideEffect: '1 kali sehari; efikasi antiinflamasi tinggi untuk dermatitis atopik berat pada badan, lengan, dan tungkai' },
              { syllable: 'Beta-Val', drugName: 'Betametason Valerat 0.1% / Desoksimetason 0.25% (Potensi Sedang / Kelas III-IV)', isDoen: true, badgeType: 'Dermatitis Kronis', typicalSideEffect: 'Pilihan standar dermatitis ekzema kronis; hindari pemakaian oklusif berkepanjangan' },
              { syllable: 'Hidro VII', drugName: 'Hidrokortison Asetat 1-2.5% Krim (Potensi Rendah / Kelas VII)', isDoen: true, badgeType: 'Aman Wajah & Bayi', typicalSideEffect: 'Satu-satunya pilihan aman untuk kulit tipis: WAJAH, KELOPAK MATA, LIPATAN KETIAK/SELANGKANGAN, dan BAYI' }
            ],
            clinicalKeyPearls: 'Takaran FTU (Fingertip Unit): 1 FTU adalah jumlah salep/krim yang dipencet dari tube berdiameter 5 mm sepanjang ruas ujung jari telunjuk orang dewasa (sekitar 0.5 gram). 1 FTU cukup untuk mengobati area kulit seluas DUA TELAPAK TANGAN DEWASA. Edukasi FTU mencegah penggunaan berlebihan yang memicu efek samping atrofi kulit.',
            clinicalWarnings: 'BAHAYA KORTIKOSTEROID POTENSI TINGGI PADA WAJAH: Dilarang keras menggunakan Klobetasol / Betametason pada wajah! Kulit wajah yang tipis sangat sensitif terhadap efek samping lokal: Atrofi kulit permanen (kulit menipis seperti kertas), Striae atrofika (guratan regang), Telangiektasis (pelebaran pembuluh darah laba-laba), Dermatitis perioral, dan erupsi mirip jerawat steroid!',
            comparisonTable: [
              { drugFormula: 'Klobetasol 0.05%', mechanism: 'Glukokortikoid sintetik terfluorinasi afinitas ultra-tinggi reseptor sitosol antiinflamasi', detailedSideEffects: 'Atrofi kutis berat, supresi adrenal sistemik, hipopigmentasi, infeksi sekunder', fdaCategory: 'C' },
              { drugFormula: 'Mometason 0.1%', mechanism: 'Ester furoat lipofilik tinggi menembus stratum korneum dengan bioavailabilitas sistemik rendah', detailedSideEffects: 'Rasa terbakar transien, folikulitis ringan, kekeringan kulit', fdaCategory: 'C' },
              { drugFormula: 'Hidrokortison 1%', mechanism: 'Kortisol alami potensi antiinflamasi fisiologis rendah dengan indeks terapeutik lokal aman', detailedSideEffects: 'Iritasi kontak ringan; risiko atrofi dan striae sangat minimal', fdaCategory: 'C' }
            ],
            relatedTabKey: 'swamedikasi',
            relatedDrugName: 'Hidrokortison'
          }
        ]
      },
      {
        id: 'sub-23-2',
        number: '23.2',
        title: 'Antiparasit Kulit: Skabies vs Pedikulosis (Permetrin 5% • Gameksan • Ivermektin)',
        items: [
          {
            id: 'note-23-2',
            chapterId: 'bab-23',
            chapterNumber: 'BAB 23',
            chapterTitle: 'Dermatologi & Potensi Kortikosteroid Topikal',
            subChapterNumber: '23.2',
            subChapterTitle: 'Terapi Skabies & Kutu Rambut: Efikasi vs Neurotoksisitas',
            breadcrumb: 'KULIT > SKABIES PERMETRIN GAMEKSAN IVERMEKTIN',
            categoryTag: 'PARASITOLOGI KULIT',
            heroMnemonic: 'Permetrin 5% Emas • Gameksan Kejang • Ivermektin Oral',
            rhymeTagline: 'Permetrin lima persen balur leher ke bawah delapan jam lalu bilas ulang seminggu, Gameksan Lindane awas kejang neurotoksik kontraindikasi anak, Ivermektin oral sapu bersih skabies berkrusta!',
            syllableBreakdown: [
              { syllable: 'Permetrin 5%', drugName: 'Permetrin 5% Krim (Piretroid Sintetik Anti-Skabies)', isDoen: true, badgeType: 'Baku Emas Lini 1', typicalSideEffect: 'Melumpuhkan kanal natrium saraf tungau Sarcoptes scabiei; aman untuk bayi > 2 bulan dan ibu hamil' },
              { syllable: 'Gameksan', drugName: 'Gameksan / Lindane 1% Losio (Organoklorin Gamma BHC)', isDoen: false, badgeType: 'Risiko Neurotoksik', typicalSideEffect: 'Inhibitor GABA SSP; risiko tinggi kejang fatal dan toksisitas hematologi; dilarang pada anak & ibu hamil' },
              { syllable: 'Belerang 2-4', drugName: 'Sulfur Presipitatum 5-10% Salep (Belerang Salep 2-4)', isDoen: true, badgeType: 'Aman Bayi < 2 Bulan', typicalSideEffect: 'Pilihan terapi teraman untuk neonatus dan bayi < 2 bulan; bau belerang menyengat dan mengotori pakaian' },
              { syllable: 'Ivermektin', drugName: 'Ivermektin 200 mcg/kg Dosis Tunggal Oral (Antelmintik Avermektin)', isDoen: true, badgeType: 'Oral Skabies Krusta', typicalSideEffect: 'Aktivasi kanal klorida berpintu glutamat; lini pertama untuk Skabies Norwegia / Krusta masif di asrama/panti' }
            ],
            clinicalKeyPearls: 'Aturan 3 Elemen Keberhasilan Skabies: (1) OLESKAN MERATA dari leher sampai ke ujung jari kaki (seluruh lipatan ketiak, sela jari, bawah kuku, pusar, dan kelamin) pada malam hari sebelum tidur, biarkan 8-12 jam, baru dibilas; (2) OBATI SELURUH ANGGOTA KELUARGA / TEMAN SEKAMAR serentak pada hari yang sama meskipun belum bergejala gatal; (3) CUCI SEMUA SEPREI & BAJU dengan air panas (> 60°C) atau masukkan ke kantong plastik hitam rapat selama minimal 3-5 hari untuk mematikan tungau.',
            clinicalWarnings: 'Fenomena "Post-Scabetic Itch": Rasa gatal hebat dapat tetap bertahan hingga 2-4 MINGGU setelah tungau mati akibat reaksi alergi tertunda terhadap bangkai dan kotoran tungau di bawah kulit. Berikan Antihistamin oral (Cetirizine) dan emolien pelembab; JANGAN terburu-buru mengulang Permetrin terus-menerus karena dapat memicu dermatitis iritan kontak berat!',
            comparisonTable: [
              { drugFormula: 'Permetrin 5% Krim', mechanism: 'Menghambat inaktivasi kanal natrium membran sel saraf parasit memicu kelumpuhan paralisis tungau', detailedSideEffects: 'Rasa terbakar pedih sementara, eritema ringan, gatal pasca-aplikasi', fdaCategory: 'B' },
              { drugFormula: 'Gameksan 1% Losio', mechanism: 'Insektisida organoklorin memblokade reseptor GABA menyebabkan eksitasi saraf kejang parasit', detailedSideEffects: 'Kejang neurotoksik fatal, anemia aplastik, pusing vertigo', fdaCategory: 'C' },
              { drugFormula: 'Sulfur Presipitat 10%', mechanism: 'Asam pentationat hasil reaksi belerang dengan sel epidermis membunuh tungau keratolitik', detailedSideEffects: 'Dermatitis kontak iritan, kulit kering bersisik, aroma belerang tajam', fdaCategory: 'B' }
            ],
            relatedTabKey: 'swamedikasi',
            relatedDrugName: 'Permetrin'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // BAB 24: VAKSINOLOGI, RANTAI DINGIN & IMUNISASI
  // =========================================================================
  {
    id: 'bab-24',
    number: 'BAB 24',
    title: 'Vaksinologi, Rantai Dingin & Imunisasi',
    subChapters: [
      {
        id: 'sub-24-1',
        number: '24.1',
        title: 'Vaksin Hidup vs Vaksin Mati & Kontraindikasi Khusus (B-P-C-R Hidup)',
        items: [
          {
            id: 'note-24-1',
            chapterId: 'bab-24',
            chapterNumber: 'BAB 24',
            chapterTitle: 'Vaksinologi, Rantai Dingin & Imunisasi',
            subChapterNumber: '24.1',
            subChapterTitle: 'Klasifikasi Vaksin: Hidup Dilemahkan vs Mati Inaktif',
            breadcrumb: 'VAKSIN > VAKSIN HIDUP VS MATI B P C R KONTRAINDIKASI',
            categoryTag: 'IMUNOLOGI FARMASI',
            heroMnemonic: 'B - P - C - R - Y Vaksin Hidup',
            rhymeTagline: 'BCG, Polio oral, Campak-MR, Rotavirus, Yellow fever adalah vaksin hidup pantang masuk ibu hamil dan pasien imunosupresi!',
            syllableBreakdown: [
              { syllable: 'B (BCG)', drugName: 'Vaksin BCG (Bacillus Calmette-Guérin Hidup Dilemahkan)', isDoen: true, badgeType: 'Vaksin Hidup', typicalSideEffect: 'Intrakutan deltoid kanan 0.05 mL; timbul papul merah bernanah lalu jaringan parut skar normal 2-3 bulan' },
              { syllable: 'P (Polio OPV)', drugName: 'Polio Oral Tetes (bOPV Sabin Hidup) vs IPV Suntik Salk (Mati Inaktif)', isDoen: true, badgeType: 'Tetes Oral Hidup', typicalSideEffect: '2 tetes oral; memicu imunitas mukosa IgA usus; awas risiko langka VDPV paralisis pada imunodefisiensi' },
              { syllable: 'C (Campak/MR)', drugName: 'Vaksin Campak / MR / MMR (Measles-Rubella Hidup Dilemahkan)', isDoen: true, badgeType: 'Subkutan Hidup', typicalSideEffect: 'Subkutan 0.5 mL paha/lengan; demam ringan hari ke-5 s/d 12 dan ruam kemerahan transien' },
              { syllable: 'R (Rotavirus)', drugName: 'Vaksin Rotavirus Oral (Monovalen / Pentavalen Hidup)', isDoen: true, badgeType: 'Cegah Diare Akut', typicalSideEffect: 'Tetes mulut; pencegahan gastroenteritis dehidrasi fatal bayi; pantau tanda invaginasi usus' }
            ],
            clinicalKeyPearls: 'Aturan Jeda Vaksin Hidup: Dua vaksin hidup suntik (misal Campak-MR dan Varisela / Demam Kuning) HARUS diberikan secara BERSAMAAN pada hari yang sama (di lokasi suntikan berbeda) ATAU diberi jeda MINIMAL 4 MINGGU (28 HARI)! Jika diberikan dalam rentang < 28 hari, respons imun interferon dari vaksin pertama akan menetralkan dan mematikan replikasi vaksin hidup kedua.',
            clinicalWarnings: 'KONTRAINDIKASI MUTLAK VAKSIN HIDUP: Vaksin hidup (BCG, OPV, MR, MMR, Varisela) KONTRAINDIKASI MUTLAK pada (1) Ibu Hamil (risiko sindrom rubela kongenital & infeksi janin), dan (2) Pasien Imunokompromais berat (HIV dengan CD4 < 200, leukemia, kemoterapi, dan terapi kortikosteroid sistemik dosis tinggi > 20 mg/hari prednison selama > 14 hari) karena kuman vaksin dapat bermutasi menjadi patogen aktif dan menyebabkan infeksi sistemik fatal!',
            comparisonTable: [
              { drugFormula: 'Vaksin BCG Hidup', mechanism: 'Strain Mycobacterium bovis hidup teratenuasi memicu imunitas seluler limfosit T CD4/CD8', detailedSideEffects: 'Ulkus lokal indurasi skar, limfadenitis regional aksila, eritema', fdaCategory: 'C' },
              { drugFormula: 'Vaksin bOPV Tetes', mechanism: 'Virus polio tipe 1 & 3 hidup dilemahkan bereplikasi di mukosa usus memicu antibodi IgA sekretori', detailedSideEffects: 'Diare ringan transien, risiko sangat langka Vaccine-Associated Paralytic Poliomyelitis', fdaCategory: 'C' },
              { drugFormula: 'Vaksin DPT-HepB-Hib', mechanism: 'Vaksin inaktif toksoid difteri/tetanus, kuman mati pertusis, protein rekombinan HBsAg & PRP-T', detailedSideEffects: 'Demam tinggi > 38.5°C, bengkak nyeri kemerahan lokasi paha, rewel menangis', fdaCategory: 'C' }
            ],
            relatedTabKey: 'pregnancy',
            relatedDrugName: 'Vaksin BCG'
          }
        ]
      },
      {
        id: 'sub-24-2',
        number: '24.2',
        title: 'Manajemen Rantai Dingin (Cold Chain) & Indikator VVM (2-8°C vs Beku & VVM A-B-C-D)',
        items: [
          {
            id: 'note-24-2',
            chapterId: 'bab-24',
            chapterNumber: 'BAB 24',
            chapterTitle: 'Vaksinologi, Rantai Dingin & Imunisasi',
            subChapterNumber: '24.2',
            subChapterTitle: 'Suhu Penyimpanan Cold Chain & Indikator Kualitas VVM',
            breadcrumb: 'COLD CHAIN > SUHU 2-8 DERAJAT FREEZER DAN INDIKATOR VVM',
            categoryTag: 'MANAJEMEN MUTU FARMASI RS',
            heroMnemonic: 'Kulkas 2-8°C • OPV Beku -20°C • VVM: A-B Pakai, C-D Buang!',
            rhymeTagline: 'Semua vaksin cair disimpan dua sampai delapan derajat kulkas jangan nempel dinding es, OPV tahan beku minus dua puluh derajat, Indikator VVM kotak lebih terang boleh pakai, kotak sama atau lebih gelap langsung buang!',
            syllableBreakdown: [
              { syllable: 'Kulkas 2-8°C', drugName: 'Chiller Suhu +2°C s/d +8°C (Vaksin Sensitif Beku Freeze-Sensitive)', isDoen: true, badgeType: 'Suhu Standar Vaksin', typicalSideEffect: 'DPT-HepB-Hib, DT, Td, TT, IPV, HepB, HPV, Influenza, COVID-19 HARUS disimpan di suhu 2-8°C dan TIDAK BOLEH MEMBEKU!' },
              { syllable: 'Freezer -20°C', drugName: 'Freezer Suhu -15°C s/d -25°C (Vaksin Sensitif Panas Heat-Sensitive)', isDoen: true, badgeType: 'Khusus OPV & Polio', typicalSideEffect: 'HANYA Vaksin Polio Oral (OPV) yang stabil dan boleh disimpan dalam kondisi beku di freezer' },
              { syllable: 'VVM A & B', drugName: 'Vaccine Vial Monitor Kondisi A & B (Persegi Dalam LEBIH TERANG dari Lingkaran)', isDoen: true, badgeType: 'VAKSIN MASIH AKTIF', typicalSideEffect: 'Kondisi A: Persegi putih bersih; Kondisi B: Persegi mulai agak gelap tapi MASIH LEBIH TERANG; BOLEH DIGUNAKAN' },
              { syllable: 'VVM C & D', drugName: 'Vaccine Vial Monitor Kondisi C & D (Persegi Dalam SAMA / LEBIH GELAP dari Lingkaran)', isDoen: true, badgeType: 'VAKSIN RUSAK (BUANG)', typicalSideEffect: 'Kondisi C: Warna persegi SAMA DENGAN lingkaran; Kondisi D: Persegi LEBIH GELAP; VAKSIN RUSAK, JANGAN DIGUNAKAN!' }
            ],
            clinicalKeyPearls: 'Uji Kocok (Shake Test) untuk Vaksin Sensitif Beku: Vaksin yang mengandung ajuvan aluminium (DPT, HepB, TT, Td) akan rusak permanen dan menggumpal bila sempat terpapar suhu beku (< 0°C). Jika dicurigai membeku, lakukan Shake Test: Kocok vial yang dicurigai bersamaan dengan vial kontrol yang sengaja dibekukan lalu dicairkan. Amati proses pengendapan selama 15-30 menit. Jika vial uji mengendap sangat cepat seperti vial kontrol beku, vaksin telah RUSAK dan wajib dimusnahkan!',
            clinicalWarnings: 'Posisi Penyimpanan di Kulkas Vaksin: JANGAN PERNAH menaruh vaksin di pintu kulkas (suhu fluktuatif sering dibuka) dan JANGAN menempelkan vaksin di dinding belakang kulkas (risiko beku). Beri jarak minimal 1-2 cm antar kotak vaksin demi sirkulasi udara dingin yang merata.',
            comparisonTable: [
              { drugFormula: 'Vaksin Sensitif Beku', mechanism: 'Ajuvan garam aluminium mengendap membentuk partikel kristal kasar saat membeku merusak antigen', detailedSideEffects: 'Efikasi proteksi hilang total, memicu abses steril dan granuloma di lokasi suntikan', fdaCategory: 'C' },
              { drugFormula: 'Vaksin Sensitif Panas', mechanism: 'Protein kapsid virus hidup terdenaturasi dan terurai termal saat terpapar suhu ruang > 8°C', detailedSideEffects: 'Kehilangan titer daya replikasi vaksin hidup sehingga tidak memicu antibodi pelindung', fdaCategory: 'C' },
              { drugFormula: 'Pelarut Vaksin (Diluent)', mechanism: 'Cairan NaCl fisiologis atau akuabides steril untuk merekonstitusi vaksin kering beku (BCG, MR)', detailedSideEffects: 'Wajib didinginkan ke suhu 2-8°C minimal 12 jam sebelum dicampur agar tidak merusak antigen', fdaCategory: 'A' }
            ],
            relatedTabKey: 'regulations',
            relatedDrugName: 'Vaksin Polio'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // BAB 25: HEMATOLOGI, ANEMIA & AGEN STIMULASI ERITROPOIESIS
  // =========================================================================
  {
    id: 'bab-25',
    number: 'BAB 25',
    title: 'Hematologi, Anemia & Terapi Pengganti Besi',
    subChapters: [
      {
        id: 'sub-25-1',
        number: '25.1',
        title: 'Anemia Mikrositik vs Makrositik: Trias Terapi (Sulfas Ferosus • Folat • B12)',
        items: [
          {
            id: 'note-25-1',
            chapterId: 'bab-25',
            chapterNumber: 'BAB 25',
            chapterTitle: 'Hematologi, Anemia & Terapi Pengganti Besi',
            subChapterNumber: '25.1',
            subChapterTitle: 'Pembedaan Anemia Mikrositik Hipokrom vs Makrositik Megaloblastik',
            breadcrumb: 'HEMATOLOGI > ANEMIA BESI FOLAT B12 PERNISIOSA',
            categoryTag: 'FARMAKOTERAPI HEMATOLOGI',
            heroMnemonic: 'Fe Besi Mikrositik • Folat B9 & B12 Makrositik',
            rhymeTagline: 'MCV rendah anemia besi minum Sulfas Ferosus bareng Vitamin C perut kosong, MCV tinggi megaloblastik beri Asam Folat dan Vitamin B12 cegah kerusakan saraf neuropati!',
            syllableBreakdown: [
              { syllable: 'Sulfas Ferosus', drugName: 'Sulfas Ferosus 300-324 mg (Mengandung 60-65 mg Besi Elemental)', isDoen: true, badgeType: 'Mikrositik Hipokrom', typicalSideEffect: 'Absorpsi maksimal saat lambung kosong bersama Vitamin C; awas konstipasi, kram perut, dan feses berwarna hitam' },
              { syllable: 'Asam Folat B9', drugName: 'Asam Folat 1-5 mg Tablet (Vitamin B9)', isDoen: true, badgeType: 'Megaloblastik / Hamil', typicalSideEffect: 'Sintesis purin/pirimidin DNA eritrosit; wajib untuk profilaksis defek tabung saraf janin spina bifida 400 mcg/hari' },
              { syllable: 'Sianokobalamin B12', drugName: 'Sianokobalamin / Metilkobalamin 500 mcg Oral / 1000 mcg IM (B12)', isDoen: true, badgeType: 'Anemia Pernisiosa', typicalSideEffect: 'Kofaktor metionin sintase; mengatasi gejala neurologis kesemutan parestesia dan degenerasi medula spinalis' },
              { syllable: 'Besi Sukrosa IV', drugName: 'Iron Sucrose / Iron Dextran 100 mg IV Drip Lambat (Besi Parenteral)', isDoen: true, badgeType: 'Intoleransi Oral / HD', typicalSideEffect: 'Pilihan untuk malabsorpsi IBD, anemia CKD, atau intoleransi oral berat; awas reaksi syok anafilaktoid' }
            ],
            clinicalKeyPearls: 'Bahaya Masking Effect Asam Folat pada Defisiensi B12: JANGAN PERNAH memberikan Asam Folat sendirian pada pasien Anemia Megaloblastik tanpa memeriksa kadar Vitamin B12! Asam Folat dosis tinggi akan memperbaiki anemia pada darah tepi (masking effect), tetapi MEMBIARKAN KERUSAKAN SISTEM SARAF (neuropati perifer dan degenerasi subakut medula spinalis) TERUS MEMBURUK HINGGA KELUMPUHAN PERMANEN!',
            clinicalWarnings: 'Interaksi Penghambat Absorpsi Besi: Pasien harus diedukasi untuk TIDAK meminum tablet besi bersamaan dengan SUSU (kalsium mengikat besi), TEH atau KOPI (tanin dan polifenol menghambat absorpsi hingga 70%), dan OBAT MAAG ANTASIDA. Beri jeda minimal 2 jam!',
            comparisonTable: [
              { drugFormula: 'Sulfas Ferosus 300mg', mechanism: 'Ion Fe2+ ferro diserap di duodenum dan diinkorporasikan ke gugus heme hemoglobin', detailedSideEffects: 'Konstipasi obstipasi, mual kram lambung, feses hitam gelap arang', fdaCategory: 'A' },
              { drugFormula: 'Asam Folat 1mg', mechanism: 'Dikonversi menjadi tetrahidrofolat kofaktor transfer satu-karbon sintesis timidin DNA', detailedSideEffects: 'Sangat aman larut air; rasa pahit transien, gangguan pola tidur dosis tinggi', fdaCategory: 'A' },
              { drugFormula: 'Sianokobalamin B12 IM', mechanism: 'Kofaktor sintesis myelin saraf dan konversi homosistein menjadi metionin', detailedSideEffects: 'Hipokalemia transien saat eritropoiesis masif, diare ringan, gatal ruam', fdaCategory: 'A' }
            ],
            relatedTabKey: 'interactions',
            relatedDrugName: 'Sulfas Ferosus'
          }
        ]
      },
      {
        id: 'sub-25-2',
        number: '25.2',
        title: 'Anemia Penyakit Ginjal Kronis (PGK HD): Terapi ESA & Kecukupan Besi (EPO Alfa • TSAT • Feritin)',
        items: [
          {
            id: 'note-25-2',
            chapterId: 'bab-25',
            chapterNumber: 'BAB 25',
            chapterTitle: 'Hematologi, Anemia & Terapi Pengganti Besi',
            subChapterNumber: '25.2',
            subChapterTitle: 'Manajemen Anemia Ginjal Kronis: Terapi Eritropoietin (ESA) & Kecukupan Besi',
            breadcrumb: 'HEMATOLOGI > ANEMIA GINJAL KRONIS EPO TSAT FERITIN',
            categoryTag: 'FARMAKOTERAPI NEFROLOGI',
            heroMnemonic: 'EPO Alfa Target Hb 10-11.5 • Cek TSAT > 20% & Feritin > 200',
            rhymeTagline: 'Eritropoietin pacu sumsum tulang buat sel darah merah target Hb sepuluh sampai sebelas koma lima, Pastikan pabrik besi cukup TSAT di atas dua puluh persen dan Feritin di atas dua ratus!',
            syllableBreakdown: [
              { syllable: 'EPO Alfa', drugName: 'Epoetin Alfa / Beta (rHuEPO) 2000-4000 IU SC/IV 2-3x Seminggu', isDoen: true, badgeType: 'ESA Lini 1 Ginjal', typicalSideEffect: 'Stimulasi progenitor eritroid sumsum tulang; target Hb 10-11.5 g/dL (JANGAN > 13 g/dL picu stroke & trombosis)' },
              { syllable: 'Darbepoetin', drugName: 'Darbepoetin Alfa (Aranesp) 20-40 mcg SC/IV Tiap 1-2 Minggu', isDoen: false, badgeType: 'Long-Acting ESA', typicalSideEffect: 'Waktu paruh 3x lebih panjang dari EPO standar berkat penambahan rantai karbohidrat asam sialat' },
              { syllable: 'Besi IV Syarat', drugName: 'Besi Sukrosa IV Drip 100 mg (Besi Pengiring ESA)', isDoen: true, badgeType: 'Syarat Efikasi ESA', typicalSideEffect: 'Wajib diberikan jika Saturasi Transferin (TSAT) < 20% atau Serum Feritin < 200 ng/mL (hemodialisis < 500 ng/mL)' }
            ],
            clinicalKeyPearls: 'Target Hemoglobin KDIGO pada Anemia CKD: Pedoman KDIGO secara tegas menetapkan target Hb terapi ESA adalah 10.0 s/d 11.5 g/dL. DILARANG menaikkan Hb > 11.5 g/dL apalagi menargetkan Hb normal (> 13 g/dL)! Uji klinis skala besar (TREAT & CHOIR) membuktikan target Hb > 13 g/dL melipatgandakan risiko STROKE FATAL, TROMBOSIS VASKULAR AKSES HD, DAN KEMATIAN KARDIOVASKULAR.',
            clinicalWarnings: 'Resistensi ESA Akibat Defisiensi Besi Fungsional: Jika pasien CKD disuntik EPO dosis tinggi tetapi Hb tidak kunjung naik, penyebab tersering adalah DEFISIENSI BESI FUNGIONAL (besi dalam gudang tidak dapat dimobilisasi secepat stimulasi eritropoiesis). Selalu cek TSAT dan Feritin sebelum menaikkan dosis EPO!',
            comparisonTable: [
              { drugFormula: 'Epoetin Alfa 3000 IU', mechanism: 'Ikatan pada reseptor eritropoietin permukaan sel progenitor eritroid CFU-E sumsum tulang', detailedSideEffects: 'Hipertensi krisis, sakit kepala, kejang ensefalopati hipertensi, trombosis akses fistula', fdaCategory: 'C' },
              { drugFormula: 'Darbepoetin 20mcg', mechanism: 'Analog eritropoietin hiperglikosilasi dengan bersihan ginjal lebih lambat menstimulasi eritroid', detailedSideEffects: 'Peningkatan tekanan darah, edema perifer, mialgia pegal linu', fdaCategory: 'C' },
              { drugFormula: 'Iron Sucrose 100mg IV', mechanism: 'Kompleks besi polinuklir hidroksida sukrosa melepaskan besi langsung ke transferin serum', detailedSideEffects: 'Hipotensi transien, rasa logam di lidah (metallic taste), flebitis', fdaCategory: 'B' }
            ],
            relatedTabKey: 'renal-adjuster',
            relatedDrugName: 'Epoetin Alfa'
          }
        ]
      }
    ]
  }
];
