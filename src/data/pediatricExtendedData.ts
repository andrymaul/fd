// =====================================================================
// PEDIATRIC & NEONATAL EXTENDED DRUGS DATABASE (IDAI / WHO / HARRIET LANE)
// Standar Resmi: Formularium Nasional Kemenkes RI, PIONAS BPOM RI, & IDAI
// Total Obat Baru: 35 Obat Racikan Puyer, Sirup & Terapi Pediatrik
// =====================================================================

import type { PediatricDrugProfile } from './pediatricDosingData';

export const PEDIATRIC_EXTENDED_DRUGS: PediatricDrugProfile[] = [
  {
    "id": "ped-erythromycin",
    "name": "Erythromycin",
    "genericName": "Erythromycin Ethylsuccinate (EES) Sirup Kering & Tablet",
    "category": "Antibiotik Makrolida (Alternatif Alergi Penisilin)",
    "atcCode": "J01FA01",
    "indications": [
      "Faringitis / Tonsilitis streptokokus",
      "Bronkitis & Pneumonia atipik",
      "Pertusis (Batuk Rejan)",
      "Alternatif alergi berat penisilin"
    ],
    "dosingType": "per_kg_per_day",
    "minDoseMgPerKgPerDay": 30,
    "maxDoseMgPerKgPerDay": 50,
    "defaultFrequencyPerDay": 4,
    "frequencyOptions": [
      {
        "label": "4 kali sehari (Tiap 6 jam sebelum makan)",
        "timesPerDay": 4,
        "intervalHours": 6
      },
      {
        "label": "3 kali sehari (Tiap 8 jam)",
        "timesPerDay": 3,
        "intervalHours": 8
      }
    ],
    "maxSingleDoseMg": 500,
    "maxDailyDoseMg": 2000,
    "minAgeMonths": 1,
    "maxAgeYears": 18,
    "standardAdultDoseMg": 500,
    "administrationNotes": "Sebaiknya diminum saat perut kosong (1 jam sebelum atau 2 jam sesudah makan) bersama segelas air. Bila memicu mual lambung, sediaan etilsuksinat (EES) dapat diminum bersama sedikit makanan.",
    "contraindications": "Hipersensitivitas makrolida, penggunaan bersama terfenadin, astemizol, cisapride, atau ergotamin.",
    "redFlags": [
      "Pada neonatus (< 1 bulan), penggunaan eritromisin dikaitkan dengan risiko Infantile Hypertrophic Pyloric Stenosis (IHPS).",
      "Inhibitor kuat enzim CYP3A4 hepar; hindari kombinasi bersama teofilin, karbamazepin, atau fenitoin (risiko intoksikasi fatal).",
      "Wajib dihabiskan sesuai durasi terapi untuk mencegah resistensi antibiotik."
    ],
    "formulations": [
      {
        "name": "Erythromycin Sirup Kering 200 mg/5 mL",
        "form": "sirup",
        "strengthPerUnit": 200,
        "volumePerUnit": 5,
        "unitLabel": "200 mg / 5 mL",
        "bottleSizeMl": 60,
        "budAfterOpenDays": 7
      },
      {
        "name": "Erythromycin Kapsul 250 mg",
        "form": "kapsul",
        "strengthPerUnit": 250,
        "unitLabel": "250 mg / kapsul"
      },
      {
        "name": "Erythromycin Tablet 500 mg",
        "form": "tablet",
        "strengthPerUnit": 500,
        "unitLabel": "500 mg / kaplet"
      }
    ],
    "defaultSignaTemplate": "4 x sehari 1 sendok takar sebelum makan (HABISKAN)"
  },
  {
    "id": "ped-cotrimoxazole",
    "name": "Co-Trimoxazole Pediatrik (TMP-SMX)",
    "genericName": "Sulfamethoxazole + Trimethoprim Suspensi & Tablet",
    "category": "Antibiotik Kombinasi Sulfonamid",
    "atcCode": "J01EE01",
    "indications": [
      "Infeksi Saluran Kemih (ISK) anak",
      "Otitis Media Akut",
      "Shigellosis / Diare Disentri",
      "Pneumonia Pneumocystis jirovecii (PJP)"
    ],
    "dosingType": "per_kg_per_day",
    "minDoseMgPerKgPerDay": 6,
    "maxDoseMgPerKgPerDay": 12,
    "defaultFrequencyPerDay": 2,
    "frequencyOptions": [
      {
        "label": "2 kali sehari (Tiap 12 jam sesudah makan)",
        "timesPerDay": 2,
        "intervalHours": 12
      }
    ],
    "maxSingleDoseMg": 160,
    "maxDailyDoseMg": 320,
    "minAgeMonths": 2,
    "maxAgeYears": 18,
    "standardAdultDoseMg": 160,
    "administrationNotes": "Diminum sesudah makan dengan banyak air putih untuk mencegah presipitasi kristaluria sulfonamid di tubulus ginjal.",
    "contraindications": "Bayi usia < 2 bulan (risiko kernikterus), defisiensi G6PD berat, anemia megaloblastik akibat defisiensi folat.",
    "redFlags": [
      "KONTRAINDIKASI MUTLAK pada bayi usia di bawah 6 minggu karena sulfonamid mendesak bilirubin dari ikatan albumin, memicu kernikterus ensefalopati fatal.",
      "Hentikan segera jika muncul ruam kulit, sariawan luas, atau demam (risiko Stevens-Johnson Syndrome / SJS / TEN).",
      "Pada anak dengan defisiensi G6PD dapat memicu krisis anemia hemolitik akut."
    ],
    "formulations": [
      {
        "name": "Co-Trimoxazole Suspensi Pediatrik (TMP 40 mg + SMX 200 mg / 5 mL)",
        "form": "suspensi",
        "strengthPerUnit": 40,
        "volumePerUnit": 5,
        "unitLabel": "TMP 40 mg + SMX 200 mg / 5 mL",
        "bottleSizeMl": 60,
        "budAfterOpenDays": 30
      },
      {
        "name": "Co-Trimoxazole Tablet Pediatrik (TMP 20 mg + SMX 100 mg)",
        "form": "tablet",
        "strengthPerUnit": 20,
        "unitLabel": "TMP 20 mg + SMX 100 mg / tablet"
      },
      {
        "name": "Co-Trimoxazole Tablet Dewasa (TMP 80 mg + SMX 400 mg)",
        "form": "tablet",
        "strengthPerUnit": 80,
        "unitLabel": "TMP 80 mg + SMX 400 mg / tablet"
      }
    ],
    "defaultSignaTemplate": "2 x sehari 1 sendok takar sesudah makan tiap 12 jam (HABISKAN)"
  },
  {
    "id": "ped-metronidazole",
    "name": "Metronidazole Pediatrik",
    "genericName": "Metronidazole Benzoat Suspensi & Tablet",
    "category": "Antibiotik & Antiprotozoa",
    "atcCode": "J01XD01",
    "indications": [
      "Amebiasis usus / disentri ameba",
      "Giardiasis",
      "Infeksi bakteri anaerobik intra-abdominal",
      "Gingivitis akut necrotizing"
    ],
    "dosingType": "per_kg_per_day",
    "minDoseMgPerKgPerDay": 30,
    "maxDoseMgPerKgPerDay": 50,
    "defaultFrequencyPerDay": 3,
    "frequencyOptions": [
      {
        "label": "3 kali sehari (Tiap 8 jam sesudah makan)",
        "timesPerDay": 3,
        "intervalHours": 8
      }
    ],
    "maxSingleDoseMg": 500,
    "maxDailyDoseMg": 1500,
    "minAgeMonths": 1,
    "maxAgeYears": 18,
    "standardAdultDoseMg": 500,
    "administrationNotes": "Diminum sesudah makan untuk meminimalkan mual/iritasi lambung. Sediaan suspensi oral benzoat memiliki rasa lebih manis dan tidak pahit dibanding tablet base.",
    "contraindications": "Hipersensitivitas derivat nitroimidazol, trimester pertama kehamilan.",
    "redFlags": [
      "Dapat menyebabkan urin berwarna gelap/kemerahan-cokelat (tidak berbahaya, edukasi ke orang tua).",
      "Penggunaan jangka panjang (> 10-14 hari) berisiko memicu neuropati perifer dan toksisitas SSP (ataksia, pusing, parestesia).",
      "Interaksi berat jika diberikan bersama sirup yang mengandung alkohol (reaksi mirip disulfiram)."
    ],
    "formulations": [
      {
        "name": "Metronidazole Benzoat Suspensi 125 mg/5 mL",
        "form": "suspensi",
        "strengthPerUnit": 125,
        "volumePerUnit": 5,
        "unitLabel": "125 mg / 5 mL (1 cth)",
        "bottleSizeMl": 60,
        "budAfterOpenDays": 30
      },
      {
        "name": "Metronidazole Tablet 250 mg",
        "form": "tablet",
        "strengthPerUnit": 250,
        "unitLabel": "250 mg / tablet"
      },
      {
        "name": "Metronidazole Tablet 500 mg",
        "form": "tablet",
        "strengthPerUnit": 500,
        "unitLabel": "500 mg / tablet"
      }
    ],
    "defaultSignaTemplate": "3 x sehari 1 sendok takar sesudah makan selama 7-10 hari"
  },
  {
    "id": "ped-cefaclor",
    "name": "Cefaclor Pediatrik",
    "genericName": "Cefaclor Monohydrate Sirup Kering & Kapsul",
    "atcCode": "J01DC04",
    "category": "Antibiotik Sefalosporin Generasi ke-2",
    "indications": [
      "Otitis Media Akut refrakter",
      "Infeksi saluran pernapasan atas (Faringitis/Tonsilitis)",
      "Infeksi kulit & jaringan lunak"
    ],
    "dosingType": "per_kg_per_day",
    "minDoseMgPerKgPerDay": 20,
    "maxDoseMgPerKgPerDay": 40,
    "defaultFrequencyPerDay": 3,
    "frequencyOptions": [
      {
        "label": "3 kali sehari (Tiap 8 jam)",
        "timesPerDay": 3,
        "intervalHours": 8
      },
      {
        "label": "2 kali sehari (Tiap 12 jam pada otitis media)",
        "timesPerDay": 2,
        "intervalHours": 12
      }
    ],
    "maxSingleDoseMg": 500,
    "maxDailyDoseMg": 1000,
    "minAgeMonths": 1,
    "maxAgeYears": 18,
    "standardAdultDoseMg": 250,
    "administrationNotes": "Dapat diminum bersama atau tanpa makanan. Rekonstitusi dengan air matang dingin dan kocok homogen sebelum diminum.",
    "contraindications": "Hipersensitivitas terhadap sefalosporin.",
    "redFlags": [
      "Waspada reaksi menyerupai penyakit serum (Serum Sickness-like reaction: ruam kulit, atritis, demam) terutama pada pemberian berulang.",
      "Simpan sirup kering rekonstitusi di lemari pendingin (2-8°C), stabilitas 14 hari."
    ],
    "formulations": [
      {
        "name": "Cefaclor Sirup Kering 125 mg/5 mL",
        "form": "sirup",
        "strengthPerUnit": 125,
        "volumePerUnit": 5,
        "unitLabel": "125 mg / 5 mL",
        "bottleSizeMl": 60,
        "budAfterOpenDays": 14
      },
      {
        "name": "Cefaclor Kapsul 250 mg",
        "form": "kapsul",
        "strengthPerUnit": 250,
        "unitLabel": "250 mg / kapsul"
      }
    ],
    "defaultSignaTemplate": "3 x sehari 1 sendok takar tiap 8 jam (HABISKAN)"
  },
  {
    "id": "ped-ampicillin",
    "name": "Ampicillin Pediatrik",
    "genericName": "Ampicillin Trihydrate Kapsul & Sirup Kering",
    "category": "Antibiotik Aminopenicillin",
    "atcCode": "J01CA01",
    "indications": [
      "Infeksi saluran pernapasan",
      "Infeksi saluran kemih",
      "Infeksi saluran cerna (Salmonellosis)",
      "Listeriosis neonatal"
    ],
    "dosingType": "per_kg_per_day",
    "minDoseMgPerKgPerDay": 50,
    "maxDoseMgPerKgPerDay": 100,
    "defaultFrequencyPerDay": 4,
    "frequencyOptions": [
      {
        "label": "4 kali sehari (Tiap 6 jam saat perut kosong)",
        "timesPerDay": 4,
        "intervalHours": 6
      }
    ],
    "maxSingleDoseMg": 500,
    "maxDailyDoseMg": 2000,
    "minAgeMonths": 1,
    "maxAgeYears": 18,
    "standardAdultDoseMg": 500,
    "administrationNotes": "Wajib diminum saat perut kosong (1 jam sebelum atau 2 jam sesudah makan) karena makanan menurunkan bioavailabilitas ampisilin hingga 50%.",
    "contraindications": "Alergi berat penisilin / anafilaksis.",
    "redFlags": [
      "Dapat memicu ruam makulopapular non-alergi pada pasien dengan mononukleosis infeksiosa (Epstein-Barr Virus).",
      "Sirup kering yang telah dilarutkan hanya bertahan 7 hari di suhu ruang atau 14 hari di kulkas."
    ],
    "formulations": [
      {
        "name": "Ampicillin Sirup Kering 125 mg/5 mL",
        "form": "sirup",
        "strengthPerUnit": 125,
        "volumePerUnit": 5,
        "unitLabel": "125 mg / 5 mL",
        "bottleSizeMl": 60,
        "budAfterOpenDays": 7
      },
      {
        "name": "Ampicillin Kapsul 500 mg",
        "form": "kapsul",
        "strengthPerUnit": 500,
        "unitLabel": "500 mg / kapsul"
      }
    ],
    "defaultSignaTemplate": "4 x sehari 1 sendok takar 1 jam sebelum makan (HABISKAN)"
  },
  {
    "id": "ped-ceftriaxone",
    "name": "Ceftriaxone Injeksi Pediatrik",
    "genericName": "Ceftriaxone Sodium Serbuk Injeksi 1 g",
    "category": "Antibiotik Sefalosporin Gen-3 Injeksi",
    "atcCode": "J01DD04",
    "indications": [
      "Pneumonia bakterial berat",
      "Meningitis bakterial anak",
      "Sepsis pediatrik",
      "Demam tifoid berat refrakter"
    ],
    "dosingType": "per_kg_per_day",
    "minDoseMgPerKgPerDay": 50,
    "maxDoseMgPerKgPerDay": 75,
    "defaultFrequencyPerDay": 1,
    "frequencyOptions": [
      {
        "label": "1 kali sehari (Tiap 24 jam IV/IM)",
        "timesPerDay": 1,
        "intervalHours": 24
      },
      {
        "label": "2 kali sehari (Tiap 12 jam pada meningitis)",
        "timesPerDay": 2,
        "intervalHours": 12
      }
    ],
    "maxSingleDoseMg": 2000,
    "maxDailyDoseMg": 4000,
    "minAgeMonths": 1,
    "maxAgeYears": 18,
    "standardAdultDoseMg": 1000,
    "administrationNotes": "Diberikan via infus IV perlahan minimal 30 menit atau injeksi IM dalam (dilarutkan lidokain 1% khusus IM). JANGAN PERNAH dicampur dengan larutan infus kalsium (Ringer Laktat)!",
    "contraindications": "Neonatus hiperbilirubinemia (usia < 28 hari), pemberian bersamaan larutan mengandung kalsium via jalur yang sama.",
    "redFlags": [
      "KONTRAINDIKASI MUTLAK pada neonatus prematur atau neonatus aterm (< 28 hari) karena mendesak bilirubin memicu kernikterus.",
      "KONTRAINDIKASI MUTLAK pencampuran dengan larutan kalsium (Ringer Laktat) karena memicu presipitasi garam kalsium-seftriakson mematikan di paru dan ginjal neonatus/anak."
    ],
    "formulations": [
      {
        "name": "Ceftriaxone Serbuk Injeksi 1000 mg",
        "form": "injeksi",
        "strengthPerUnit": 1000,
        "unitLabel": "1000 mg / vial"
      }
    ],
    "defaultSignaTemplate": "1 x sehari injeksi IV/IM sesuai instruksi dokter RS"
  },
  {
    "id": "ped-gentamicin",
    "name": "Gentamicin Injeksi Pediatrik & Neonatus",
    "genericName": "Gentamicin Sulfate Injeksi 80 mg/2 mL / 40 mg/2 mL",
    "category": "Antibiotik Aminoglikosida Injeksi",
    "atcCode": "J01GB03",
    "indications": [
      "Sepsis neonatorum",
      "Infeksi traktus urinarius berat",
      "Pneumonia nosokomial",
      "Endokarditis bakterial enterokokus"
    ],
    "dosingType": "per_kg_per_day",
    "minDoseMgPerKgPerDay": 5,
    "maxDoseMgPerKgPerDay": 7.5,
    "defaultFrequencyPerDay": 1,
    "frequencyOptions": [
      {
        "label": "1 kali sehari (Tiap 24 jam extended-interval)",
        "timesPerDay": 1,
        "intervalHours": 24
      },
      {
        "label": "Setiap 36 jam pada neonatus prematur / fungsi ginjal menurun",
        "timesPerDay": 1,
        "intervalHours": 36
      }
    ],
    "maxSingleDoseMg": 300,
    "maxDailyDoseMg": 300,
    "minAgeMonths": 0,
    "maxAgeYears": 18,
    "standardAdultDoseMg": 160,
    "administrationNotes": "Infus IV intermiten dalam 30-60 menit atau injeksi IM. Pantau kadar puncak (peak) dan kadar palung (trough target < 1 mcg/mL).",
    "contraindications": "Hipersensitivitas aminoglikosida, miastenia gravis.",
    "redFlags": [
      "Sangat nefrotoksik dan ototoksik (ketulian saraf sensorineural ireversibel bilateral).",
      "Pada neonatus, interval dosis diperpanjang menjadi 24-48 jam tergantung usia gestasi dan berat lahir."
    ],
    "formulations": [
      {
        "name": "Gentamicin Injeksi Pediatrik 40 mg/2 mL (20 mg/mL)",
        "form": "injeksi",
        "strengthPerUnit": 40,
        "volumePerUnit": 2,
        "unitLabel": "20 mg / mL",
        "bottleSizeMl": 2,
        "budAfterOpenDays": 1
      },
      {
        "name": "Gentamicin Injeksi 80 mg/2 mL (40 mg/mL)",
        "form": "injeksi",
        "strengthPerUnit": 80,
        "volumePerUnit": 2,
        "unitLabel": "40 mg / mL",
        "bottleSizeMl": 2,
        "budAfterOpenDays": 1
      }
    ],
    "defaultSignaTemplate": "1 x sehari injeksi IV/IM dengan pemantauan fungsi ginjal"
  },
  {
    "id": "ped-nystatin",
    "name": "Nystatin Oral Suspensi (Tetes Mulut)",
    "genericName": "Nystatin Suspensi Tetes Mulut 100.000 IU/mL",
    "category": "Antijamur Poliene Topikal Rongga Mulut",
    "atcCode": "A07AA02",
    "indications": [
      "Kandidiasis oral (Oral Thrush / Moniliasis) pada bayi dan anak",
      "Stomatitis jamur pasca antibiotik"
    ],
    "dosingType": "fixed_by_age",
    "defaultFrequencyPerDay": 4,
    "frequencyOptions": [
      {
        "label": "4 kali sehari (Tiap 6 jam sesudah minum susu/makan)",
        "timesPerDay": 4,
        "intervalHours": 6
      }
    ],
    "maxSingleDoseMg": 200000,
    "maxDailyDoseMg": 800000,
    "minAgeMonths": 0,
    "maxAgeYears": 18,
    "administrationNotes": "Teteskan langsung ke dalam rongga mulut (1 mL pada bayi atau 2 mL pada anak), ratakan ke seluruh mukosa lidah dan pipi bagian dalam. Jangan beri makan/minum selama 20-30 menit setelahnya.",
    "contraindications": "Hipersensitivitas terhadap nistatin.",
    "redFlags": [
      "Tidak diserap oleh saluran cerna (efek murni topikal mukosa).",
      "Lanjutkan pengobatan minimal 48 jam setelah gejala klinis oral thrush sembuh total.",
      "Ibu yang menyusui disarankan mengoleskan krim antijamur pada puting payudara untuk mencegah reinfeksi silang timbal balik."
    ],
    "formulations": [
      {
        "name": "Nystatin Suspensi Oral 100.000 IU/mL (Kandistatin/Mycostatin)",
        "form": "drops",
        "strengthPerUnit": 100000,
        "volumePerUnit": 1,
        "unitLabel": "100.000 IU / mL (pipet tetes)",
        "bottleSizeMl": 12,
        "budAfterOpenDays": 30
      }
    ],
    "defaultSignaTemplate": "4 x sehari 1-2 mL diteteskan pada rongga mulut sesudah minum susu"
  },
  {
    "id": "ped-chloramphenicol",
    "name": "Chloramphenicol Pediatrik",
    "genericName": "Chloramphenicol Palmitat Suspensi 125 mg/5 mL",
    "category": "Antibiotik Fenikol Spektrum Luas",
    "atcCode": "J01BA01",
    "indications": [
      "Demam Tifoid anak (Salmonella typhi)",
      "Meningitis bakterial Haemophilus influenzae",
      "Infeksi berat refrakter"
    ],
    "dosingType": "per_kg_per_day",
    "minDoseMgPerKgPerDay": 50,
    "maxDoseMgPerKgPerDay": 100,
    "defaultFrequencyPerDay": 4,
    "frequencyOptions": [
      {
        "label": "4 kali sehari (Tiap 6 jam saat perut kosong)",
        "timesPerDay": 4,
        "intervalHours": 6
      }
    ],
    "maxSingleDoseMg": 500,
    "maxDailyDoseMg": 2000,
    "minAgeMonths": 1,
    "maxAgeYears": 18,
    "standardAdultDoseMg": 500,
    "administrationNotes": "Diminum saat perut kosong (1 jam sebelum atau 2 jam sesudah makan). Sediaan palmitat tidak berasa pahit dibanding garam kloramfenikol bebas.",
    "contraindications": "Neonatus prematur / usia < 1 bulan (risiko Gray Baby Syndrome), riwayat depresi sumsum tulang / anemia aplastik.",
    "redFlags": [
      "FDA Black Box Warning: Anemia aplastik ireversibel fatal non-dosis dependen (idiosinkratik).",
      "KONTRAINDIKASI MUTLAK pada neonatus karena defisiensi enzim glukuronil transferase hepar memicu Gray Baby Syndrome (sianosis abu-abu, hipotermia, kolaps vaskular fatal).",
      "Wajib memantau hitung darah tepi lengkap (leukosit, hemoglobin, trombosit) berkala."
    ],
    "formulations": [
      {
        "name": "Chloramphenicol Palmitat Suspensi 125 mg/5 mL (Colme/Chloramex)",
        "form": "suspensi",
        "strengthPerUnit": 125,
        "volumePerUnit": 5,
        "unitLabel": "125 mg / 5 mL",
        "bottleSizeMl": 60,
        "budAfterOpenDays": 30
      },
      {
        "name": "Chloramphenicol Kapsul 250 mg",
        "form": "kapsul",
        "strengthPerUnit": 250,
        "unitLabel": "250 mg / kapsul"
      }
    ],
    "defaultSignaTemplate": "4 x sehari 1 sendok takar sebelum makan (HABISKAN)"
  },
  {
    "id": "ped-n-acetylcysteine",
    "name": "N-Acetylcysteine (NAC)",
    "genericName": "N-Acetylcysteine Kapsul & Effervescent",
    "category": "Mukolitik Pengencer Dahak Kental",
    "atcCode": "R05CB01",
    "indications": [
      "Batuk berdahak kental (Bronkitis, Pneumonia)",
      "Ajuvan atelektasis akibat sumbatan mukus",
      "Antidotum keracunan paracetamol"
    ],
    "dosingType": "per_kg_per_day",
    "minDoseMgPerKgPerDay": 10,
    "maxDoseMgPerKgPerDay": 30,
    "defaultFrequencyPerDay": 3,
    "frequencyOptions": [
      {
        "label": "3 kali sehari sesudah makan (Anak 2-6 th: 100 mg 3x/hari; >6 th: 200 mg 3x/hari)",
        "timesPerDay": 3,
        "intervalHours": 8
      },
      {
        "label": "2 kali sehari (Tiap 12 jam)",
        "timesPerDay": 2,
        "intervalHours": 12
      }
    ],
    "maxSingleDoseMg": 200,
    "maxDailyDoseMg": 600,
    "minAgeMonths": 24,
    "maxAgeYears": 18,
    "standardAdultDoseMg": 200,
    "administrationNotes": "Diminum sesudah makan dengan banyak air putih. Jangan dicampur dalam satu wadah bersama antibiotik aminoglikosida atau tetrasiklin (inaktivasi gugus tiol).",
    "contraindications": "Ulkus peptikum aktif, anak usia di bawah 2 tahun.",
    "redFlags": [
      "KONTRAINDIKASI pada anak usia di bawah 2 tahun (BPOM RI Alert: refleks batuk belum sempurna memicu risiko bronkospasme dan drowning mukus).",
      "Dapat memicu bau belerang ringan pada napas/muntah (efek ikatan sulfur sulfhidril)."
    ],
    "formulations": [
      {
        "name": "N-Acetylcysteine Kapsul 200 mg (Fluimucil/Acetensa)",
        "form": "kapsul",
        "strengthPerUnit": 200,
        "unitLabel": "200 mg / kapsul"
      },
      {
        "name": "N-Acetylcysteine Tablet Effervescent 600 mg",
        "form": "tablet",
        "strengthPerUnit": 600,
        "unitLabel": "600 mg / tablet effervescent"
      }
    ],
    "defaultSignaTemplate": "3 x sehari 1 bungkus puyer / kapsul sesudah makan"
  },
  {
    "id": "ped-erdosteine",
    "name": "Erdosteine Pediatrik",
    "genericName": "Erdosteine Sirup Kering & Kapsul",
    "category": "Mukolitik & Modulator Mukus Saluran Napas",
    "atcCode": "R05CB15",
    "indications": [
      "Eksaserbasi bronkitis akut",
      "Batuk berdahak kental pada infeksi saluran napas anak",
      "Hipersekresi mukus"
    ],
    "dosingType": "per_kg_per_day",
    "minDoseMgPerKgPerDay": 10,
    "maxDoseMgPerKgPerDay": 15,
    "defaultFrequencyPerDay": 2,
    "frequencyOptions": [
      {
        "label": "2 kali sehari sesudah makan (BB 15-19 kg: 175 mg 2x/hari; BB 20-30 kg: 175 mg 3x/hari)",
        "timesPerDay": 2,
        "intervalHours": 12
      },
      {
        "label": "3 kali sehari",
        "timesPerDay": 3,
        "intervalHours": 8
      }
    ],
    "maxSingleDoseMg": 300,
    "maxDailyDoseMg": 600,
    "minAgeMonths": 24,
    "maxAgeYears": 18,
    "standardAdultDoseMg": 300,
    "administrationNotes": "Diminum sesudah makan. Rekonstitusi sirup kering dengan air matang dan kocok sebelum digunakan.",
    "contraindications": "Ulkus peptikum aktif, sirosis hepar berat, fenilketonuria.",
    "redFlags": [
      "Prodrug tiol yang diaktivasi metabolit di hepar; tidak mengiritasi mukosa lambung seperti asetilsistein bebas.",
      "Sirup kering rekonstitusi stabil hingga 14 hari di lemari es (2-8°C)."
    ],
    "formulations": [
      {
        "name": "Erdosteine Sirup Kering 175 mg/5 mL (Edotin/Vectrine)",
        "form": "sirup",
        "strengthPerUnit": 175,
        "volumePerUnit": 5,
        "unitLabel": "175 mg / 5 mL (1 cth)",
        "bottleSizeMl": 60,
        "budAfterOpenDays": 14
      },
      {
        "name": "Erdosteine Kapsul 300 mg",
        "form": "kapsul",
        "strengthPerUnit": 300,
        "unitLabel": "300 mg / kapsul"
      }
    ],
    "defaultSignaTemplate": "2 x sehari 1 sendok takar sesudah makan"
  },
  {
    "id": "ped-bromhexine",
    "name": "Bromhexine Pediatrik",
    "genericName": "Bromhexine Hydrochloride Sirup & Tablet",
    "category": "Mukolitik & Sekretolitik",
    "atcCode": "R05CB02",
    "indications": [
      "Batuk produktif berdahak",
      "Trakeobronkitis akut",
      "Pencegahan komplikasi bronkial pasca bedah"
    ],
    "dosingType": "per_kg_per_day",
    "minDoseMgPerKgPerDay": 0.3,
    "maxDoseMgPerKgPerDay": 0.5,
    "defaultFrequencyPerDay": 3,
    "frequencyOptions": [
      {
        "label": "3 kali sehari sesudah makan (Anak 2-5 th: 2-4 mg 3x/hari; 6-11 th: 4-8 mg 3x/hari)",
        "timesPerDay": 3,
        "intervalHours": 8
      }
    ],
    "maxSingleDoseMg": 8,
    "maxDailyDoseMg": 24,
    "minAgeMonths": 24,
    "maxAgeYears": 18,
    "standardAdultDoseMg": 8,
    "administrationNotes": "Diminum sesudah makan bersama segelas air putih untuk membantu mencairkan sekret bronkus.",
    "contraindications": "Ulkus lambung aktif.",
    "redFlags": [
      "Meningkatkan penetrasi antibiotik (amoksisilin, eritromisin) ke dalam jaringan paru dan sputum.",
      "Hindari penggunaan bersama antitusif penekan batuk (dekstrometorfan/kodein) karena retensi dahak di paru."
    ],
    "formulations": [
      {
        "name": "Bromhexine Sirup 4 mg/5 mL (Bisolvon Kids)",
        "form": "sirup",
        "strengthPerUnit": 4,
        "volumePerUnit": 5,
        "unitLabel": "4 mg / 5 mL",
        "bottleSizeMl": 60,
        "budAfterOpenDays": 30
      },
      {
        "name": "Bromhexine Tablet 8 mg",
        "form": "tablet",
        "strengthPerUnit": 8,
        "unitLabel": "8 mg / tablet"
      }
    ],
    "defaultSignaTemplate": "3 x sehari 1 sendok takar / bungkus puyer sesudah makan"
  },
  {
    "id": "ped-terbutaline",
    "name": "Terbutaline Pediatrik",
    "genericName": "Terbutaline Sulfate Sirup & Tablet",
    "category": "Bronkodilator Beta-2 Agonis (Anti Asma)",
    "atcCode": "R03CC03",
    "indications": [
      "Bronkospasme akut pada asma bronkial",
      "Bronkitis kronis / emfisema",
      "Batuk spasmodik reaktif"
    ],
    "dosingType": "per_kg_per_dose",
    "singleDoseMinMgPerKg": 0.05,
    "singleDoseMaxMgPerKg": 0.075,
    "defaultFrequencyPerDay": 3,
    "frequencyOptions": [
      {
        "label": "3 kali sehari (Tiap 8 jam sesudah makan)",
        "timesPerDay": 3,
        "intervalHours": 8
      }
    ],
    "maxSingleDoseMg": 2.5,
    "maxDailyDoseMg": 7.5,
    "minAgeMonths": 12,
    "maxAgeYears": 18,
    "standardAdultDoseMg": 2.5,
    "administrationNotes": "Diminum sesudah makan. Sering diracik dalam puyer batuk bersama mukolitik (ambroxol/NAC).",
    "contraindications": "Tirotoksikosis berat, takiaritma jantung, hipersensitivitas simpatomimetik.",
    "redFlags": [
      "Efek samping umum: tremor halus pada jari tangan, palpitasi takikardia, dan kegelisahan motorik.",
      "Penggunaan dosis berlebih berisiko memicu hipokalemia dan pemanjangan interval QTc."
    ],
    "formulations": [
      {
        "name": "Terbutaline Sirup 1.5 mg/5 mL (Bricasma/Astharol)",
        "form": "sirup",
        "strengthPerUnit": 1.5,
        "volumePerUnit": 5,
        "unitLabel": "1.5 mg / 5 mL",
        "bottleSizeMl": 60,
        "budAfterOpenDays": 30
      },
      {
        "name": "Terbutaline Tablet 2.5 mg",
        "form": "tablet",
        "strengthPerUnit": 2.5,
        "unitLabel": "2.5 mg / tablet"
      }
    ],
    "defaultSignaTemplate": "3 x sehari 1 bungkus puyer / sendok takar sesudah makan"
  },
  {
    "id": "ped-loratadine",
    "name": "Loratadine Pediatrik",
    "genericName": "Loratadine Sirup & Tablet",
    "category": "Antihistamin H1 Generasi ke-2 Non-Sedatif",
    "atcCode": "R06AX13",
    "indications": [
      "Rinitis alergi musiman & perenial",
      "Urtikaria kronis idiopatik (Biduran)",
      "Konjungtivitis alergi"
    ],
    "dosingType": "fixed_by_weight",
    "defaultFrequencyPerDay": 1,
    "frequencyOptions": [
      {
        "label": "1 kali sehari (Pagi atau malam hari)",
        "timesPerDay": 1,
        "intervalHours": 24
      }
    ],
    "maxSingleDoseMg": 10,
    "maxDailyDoseMg": 10,
    "minAgeMonths": 24,
    "maxAgeYears": 18,
    "standardAdultDoseMg": 10,
    "administrationNotes": "Dapat diminum bersama atau tanpa makanan. Rekomendasi dosis: Berat Badan < 30 kg = 5 mg (5 mL) sekali sehari; Berat Badan >= 30 kg = 10 mg (10 mL atau 1 tablet) sekali sehari.",
    "contraindications": "Hipersensitivitas loratadine atau desloratadine.",
    "redFlags": [
      "Tidak menembus sawar darah otak secara signifikan sehingga efek kantuk (sedasi) sangat minimal dibanding CTM.",
      "Aman untuk anak usia sekolah tanpa mengganggu konsentrasi belajar."
    ],
    "formulations": [
      {
        "name": "Loratadine Sirup 5 mg/5 mL (Claritin/Alloris)",
        "form": "sirup",
        "strengthPerUnit": 5,
        "volumePerUnit": 5,
        "unitLabel": "5 mg / 5 mL",
        "bottleSizeMl": 60,
        "budAfterOpenDays": 30
      },
      {
        "name": "Loratadine Tablet 10 mg",
        "form": "tablet",
        "strengthPerUnit": 10,
        "unitLabel": "10 mg / tablet"
      }
    ],
    "defaultSignaTemplate": "1 x sehari 1 sendok takar (5 mL) sesudah makan"
  },
  {
    "id": "ped-promethazine",
    "name": "Promethazine Pediatrik",
    "genericName": "Promethazine Hydrochloride Sirup",
    "category": "Antihistamin Fenotiazin & Antiemetik Sedatif",
    "atcCode": "R06AD02",
    "indications": [
      "Mabuk perjalanan (Motion Sickness)",
      "Alergi berat dengan gatal nokturnal",
      "Sedasi pra-operasi minor"
    ],
    "dosingType": "per_kg_per_day",
    "minDoseMgPerKgPerDay": 0.5,
    "maxDoseMgPerKgPerDay": 1,
    "defaultFrequencyPerDay": 3,
    "frequencyOptions": [
      {
        "label": "Untuk mabuk perjalanan: 0.5 mg/kgBB diminum 30-60 menit sebelum bepergian",
        "timesPerDay": 1,
        "intervalHours": 24
      },
      {
        "label": "Untuk alergi: 2 - 3 kali sehari sesudah makan",
        "timesPerDay": 3,
        "intervalHours": 8
      }
    ],
    "maxSingleDoseMg": 25,
    "maxDailyDoseMg": 50,
    "minAgeMonths": 24,
    "maxAgeYears": 18,
    "standardAdultDoseMg": 25,
    "administrationNotes": "Diminum bersama makanan atau segelas air untuk mengurangi mual.",
    "contraindications": "Anak usia di bawah 2 tahun (KONTRAINDIKASI MUTLAK), koma, depresi susunan saraf pusat berat.",
    "redFlags": [
      "FDA Black Box Warning: KONTRAINDIKASI MUTLAK pada anak usia < 2 tahun karena memicu depresi pernapasan fatal dan kematian mendadak (SIDS).",
      "Efek sedasi dan antikolinergik (mulut kering, retensi urin) sangat kuat."
    ],
    "formulations": [
      {
        "name": "Promethazine Sirup 5 mg/5 mL (Phernergan)",
        "form": "sirup",
        "strengthPerUnit": 5,
        "volumePerUnit": 5,
        "unitLabel": "5 mg / 5 mL",
        "bottleSizeMl": 60,
        "budAfterOpenDays": 30
      }
    ],
    "defaultSignaTemplate": "1-2 x sehari 1 sendok takar sebelum tidur / sebelum bepergian"
  },
  {
    "id": "ped-triprolidine",
    "name": "Triprolidine HCl Pediatrik",
    "genericName": "Triprolidine Hydrochloride Sirup",
    "category": "Antihistamin Alkilamin (Komponen Sirup Flu)",
    "atcCode": "R06AX04",
    "indications": [
      "Bersin-bersin dan hidung meler pada common cold",
      "Rinitis vasomotor & alergi"
    ],
    "dosingType": "fixed_by_age",
    "defaultFrequencyPerDay": 3,
    "frequencyOptions": [
      {
        "label": "3 kali sehari sesudah makan (Anak 2-5 th: 0.625 mg 3x/hari; 6-11 th: 1.25 mg 3x/hari)",
        "timesPerDay": 3,
        "intervalHours": 8
      }
    ],
    "maxSingleDoseMg": 2.5,
    "maxDailyDoseMg": 7.5,
    "minAgeMonths": 24,
    "maxAgeYears": 18,
    "standardAdultDoseMg": 2.5,
    "administrationNotes": "Sering dikombinasikan bersama Pseudoefedrin dalam sediaan sirup flu anak (Tremenza / Actifed). Diminum sesudah makan.",
    "contraindications": "Hipersensitivitas triprolidin, hipertensi berat atau terapi bersama MAOI.",
    "redFlags": [
      "Menyebabkan kantuk; hindari aktivitas fisik berisiko tinggi.",
      "Kombinasi bersama pseudoefedrin dapat memicu takikardia dan insomnia pada balita."
    ],
    "formulations": [
      {
        "name": "Triprolidine 1.25 mg + Pseudoephedrine 30 mg / 5 mL Sirup (Tremenza/Actifed)",
        "form": "sirup",
        "strengthPerUnit": 1.25,
        "volumePerUnit": 5,
        "unitLabel": "1.25 mg / 5 mL",
        "bottleSizeMl": 60,
        "budAfterOpenDays": 30
      }
    ],
    "defaultSignaTemplate": "3 x sehari 1 sendok takar sesudah makan"
  },
  {
    "id": "ped-theophylline",
    "name": "Theophylline Pediatrik",
    "genericName": "Theophylline / Aminophylline Tablet & Puyer",
    "category": "Bronkodilator Metilxantin",
    "atcCode": "R03DA04",
    "indications": [
      "Asma bronkial kronis",
      "Bronkospasme refrakter",
      "Apnea of Prematurity pada neonatus (Aminofilin)"
    ],
    "dosingType": "per_kg_per_day",
    "minDoseMgPerKgPerDay": 10,
    "maxDoseMgPerKgPerDay": 15,
    "defaultFrequencyPerDay": 3,
    "frequencyOptions": [
      {
        "label": "3 kali sehari (Tiap 8 jam sesudah makan)",
        "timesPerDay": 3,
        "intervalHours": 8
      }
    ],
    "maxSingleDoseMg": 200,
    "maxDailyDoseMg": 600,
    "minAgeMonths": 6,
    "maxAgeYears": 18,
    "standardAdultDoseMg": 150,
    "administrationNotes": "Wajib diminum sesudah makan untuk mengurangi iritasi lambung. Sering diracik dalam puyer asma anak (kombinasi salbutamol + teofilin + dexametason).",
    "contraindications": "Ulkus peptikum aktif, takiaritma jantung berat.",
    "redFlags": [
      "Indeks terapi sempit (target serum 5 - 15 mcg/mL).",
      "Kadar toksik (> 20 mcg/mL) memicu mual muntah persisten, takikardia ventrikel, tremor hebat, dan kejang refrakter.",
      "Eritromisin dan ciprofloxacin menghambat metabolisme teofilin hingga melipatgandakan risiko toksisitas fatal."
    ],
    "formulations": [
      {
        "name": "Theophylline Tablet 150 mg (Euphyllin/Brondilex)",
        "form": "tablet",
        "strengthPerUnit": 150,
        "unitLabel": "150 mg / tablet"
      },
      {
        "name": "Aminophylline Tablet 200 mg",
        "form": "tablet",
        "strengthPerUnit": 200,
        "unitLabel": "200 mg / tablet"
      }
    ],
    "defaultSignaTemplate": "3 x sehari 1 bungkus puyer sesudah makan"
  },
  {
    "id": "ped-prednisone",
    "name": "Prednisone Pediatrik",
    "genericName": "Prednisone Tablet 5 mg",
    "category": "Kortikosteroid Antiinflamasi & Imunosupresan",
    "atcCode": "H02AB07",
    "indications": [
      "Eksaserbasi asma bronkial akut anak",
      "Sindrom Nefrotik anak",
      "Laringitis akut (Croup)",
      "Penyakit inflamasi sistemik"
    ],
    "dosingType": "per_kg_per_day",
    "minDoseMgPerKgPerDay": 1,
    "maxDoseMgPerKgPerDay": 2,
    "defaultFrequencyPerDay": 2,
    "frequencyOptions": [
      {
        "label": "1-2 mg/kgBB/hari terbagi 1-2 dosis sesudah makan pagi (kursus singkat 3-5 hari)",
        "timesPerDay": 2,
        "intervalHours": 12
      },
      {
        "label": "Sindrom Nefrotik: 2 mg/kgBB/hari (maks 60 mg/hari) dosis tunggal pagi hari",
        "timesPerDay": 1,
        "intervalHours": 24
      }
    ],
    "maxSingleDoseMg": 60,
    "maxDailyDoseMg": 60,
    "minAgeMonths": 6,
    "maxAgeYears": 18,
    "standardAdultDoseMg": 20,
    "administrationNotes": "Wajib diminum sesudah makan pagi bersama makanan atau susu untuk meminimalkan iritasi lambung. Kursus singkat asma akut (3-5 hari) tidak memerlukan penurunan dosis bertahap (tapering-off).",
    "contraindications": "Infeksi jamur sistemik, infeksi virus aktif (Varisela / Campak tanpa pengobatan), tuberkulosis aktif tanpa terapi OAT adekuat.",
    "redFlags": [
      "Penggunaan jangka panjang (> 2 minggu) dapat menekan aksis hipotalamus-hipofisis-adrenal (HPA) dan menghambat pertumbuhan linier tulang anak.",
      "Vaksin virus hidup (Campak, BCG, Polio oral) KONTRAINDIKASI saat terapi steroid dosis imunosupresif (≥ 2 mg/kg/hari selama > 14 hari)."
    ],
    "formulations": [
      {
        "name": "Prednisone Tablet 5 mg",
        "form": "tablet",
        "strengthPerUnit": 5,
        "unitLabel": "5 mg / tablet"
      }
    ],
    "defaultSignaTemplate": "2 x sehari 1 bungkus puyer sesudah makan pagi dan sore selama 3-5 hari"
  },
  {
    "id": "ped-prednisolone",
    "name": "Prednisolone Pediatrik",
    "genericName": "Prednisolone Sirup 5 mg/5 mL (L-Cora/Niprednis)",
    "category": "Kortikosteroid Oral Pediatrik",
    "atcCode": "H02AB06",
    "indications": [
      "Asma anak eksaserbasi sedang-berat",
      "Croup spasmodik",
      "Reaksi anafilaksis fase lambat"
    ],
    "dosingType": "per_kg_per_day",
    "minDoseMgPerKgPerDay": 1,
    "maxDoseMgPerKgPerDay": 2,
    "defaultFrequencyPerDay": 1,
    "frequencyOptions": [
      {
        "label": "1 kali sehari pada pagi hari sesudah sarapan (maksimal 40-60 mg/hari selama 3 hari)",
        "timesPerDay": 1,
        "intervalHours": 24
      },
      {
        "label": "2 kali sehari (Tiap 12 jam)",
        "timesPerDay": 2,
        "intervalHours": 12
      }
    ],
    "maxSingleDoseMg": 40,
    "maxDailyDoseMg": 60,
    "minAgeMonths": 6,
    "maxAgeYears": 18,
    "standardAdultDoseMg": 20,
    "administrationNotes": "Bentuk metabolit aktif prednisone yang tidak memerlukan aktivasi hepar; ideal untuk anak balita dengan sirup rasa buah.",
    "contraindications": "Infeksi herpes simpleks okular, varisela aktif.",
    "redFlags": [
      "Dapat memicu peningkatan nafsu makan, gangguan tidur, dan hiperaktivitas sesaat.",
      "Simpan botol sirup di tempat sejuk terlindung dari cahaya."
    ],
    "formulations": [
      {
        "name": "Prednisolone Sirup 5 mg/5 mL (L-Cora)",
        "form": "sirup",
        "strengthPerUnit": 5,
        "volumePerUnit": 5,
        "unitLabel": "5 mg / 5 mL (1 cth)",
        "bottleSizeMl": 60,
        "budAfterOpenDays": 30
      }
    ],
    "defaultSignaTemplate": "1 x sehari 1 sendok takar sesudah sarapan pagi"
  },
  {
    "id": "ped-mefenamic-acid",
    "name": "Asam Mefenamat Pediatrik (>14 Tahun / BB >30 kg)",
    "genericName": "Mefenamic Acid Tablet 250 mg / 500 mg",
    "category": "NSAID / Analgesik Remaja & Anak Besar",
    "atcCode": "M01AG01",
    "indications": [
      "Nyeri gigi akut paska tindakan dental",
      "Nyeri dismenore pada remaja putri",
      "Nyeri pasca cedera traumatik"
    ],
    "dosingType": "fixed_by_age",
    "defaultFrequencyPerDay": 3,
    "frequencyOptions": [
      {
        "label": "Anak usia 12-14 tahun (BB > 30-40 kg): 250 mg 3 kali sehari sesudah makan",
        "timesPerDay": 3,
        "intervalHours": 8
      },
      {
        "label": "Remaja > 14 tahun: 250 - 500 mg 3 kali sehari sesudah makan (maks 7 hari)",
        "timesPerDay": 3,
        "intervalHours": 8
      }
    ],
    "maxSingleDoseMg": 500,
    "maxDailyDoseMg": 1500,
    "minAgeMonths": 144,
    "maxAgeYears": 18,
    "standardAdultDoseMg": 500,
    "administrationNotes": "Wajib diminum segera sesudah makan bersama segelas air atau susu untuk mencegah gastritis.",
    "contraindications": "Anak usia < 12 tahun, riwayat asma yang dipicu aspirin (aspirin-induced asthma), tukak lambung aktif, dehidrasi.",
    "redFlags": [
      "KONTRAINDIKASI MUTLAK pada balita dan anak kecil usia < 12 tahun (BPOM RI: risiko toksisitas gastrointestinal berat dan nefrotoksisitas).",
      "Gunakan Paracetamol atau Ibuprofen sebagai analgesik pilihan pada anak usia < 12 tahun."
    ],
    "formulations": [
      {
        "name": "Asam Mefenamat Tablet 250 mg",
        "form": "tablet",
        "strengthPerUnit": 250,
        "unitLabel": "250 mg / tablet"
      },
      {
        "name": "Asam Mefenamat Kaplet 500 mg",
        "form": "tablet",
        "strengthPerUnit": 500,
        "unitLabel": "500 mg / kaplet"
      }
    ],
    "defaultSignaTemplate": "3 x sehari 1 tablet sesudah makan bila nyeri (maksimal 5 hari)"
  },
  {
    "id": "ped-aspirin-kawasaki",
    "name": "Aspirin Pediatrik (Protokol Penyakit Kawasaki)",
    "genericName": "Acetylsalicylic Acid Tablet 80 mg / 100 mg",
    "category": "Antiinflamasi Dosis Tinggi & Antiplatelet Khusus Penyakit Kawasaki",
    "atcCode": "B01AC06",
    "indications": [
      "Penyakit Kawasaki (Fase Akut Antiinflamasi & Fase Subakut Antiplatelet Aneurisma Koroner)"
    ],
    "dosingType": "per_kg_per_day",
    "minDoseMgPerKgPerDay": 30,
    "maxDoseMgPerKgPerDay": 50,
    "defaultFrequencyPerDay": 4,
    "frequencyOptions": [
      {
        "label": "Fase Akut: 30 - 50 mg/kgBB/hari terbagi 4 dosis bersama IVIG hingga demam reda 48 jam",
        "timesPerDay": 4,
        "intervalHours": 6
      },
      {
        "label": "Fase Pemeliharaan Antiplatelet: 3 - 5 mg/kgBB/hari dosis tunggal pagi selama 6-8 minggu",
        "timesPerDay": 1,
        "intervalHours": 24
      }
    ],
    "maxSingleDoseMg": 1000,
    "maxDailyDoseMg": 4000,
    "minAgeMonths": 3,
    "maxAgeYears": 18,
    "standardAdultDoseMg": 500,
    "administrationNotes": "Diberikan bersamaan dengan imunoglobulin intravena (IVIG 2 g/kg). Minum sesudah makan untuk melindungi mukosa lambung.",
    "contraindications": "Demam biasa akibat infeksi virus umum (Influenza, Varisela) karena risiko mematikan SINDROM REYE.",
    "redFlags": [
      "FDA & IDAI Alert: ASPIRIN KONTRAINDIKASI MUTLAK pada anak dengan demam infeksi virus biasa (influenza, cacar air) karena memicu SINDROM REYE (ensefalopati hepatik fulminan fatal).",
      "Satu-satunya indikasi resmi penggunaan aspirin pada anak balita adalah Penyakit Kawasaki dan pasca-bedah jantung bawaan dengan pengawasan dokter spesialis anak."
    ],
    "formulations": [
      {
        "name": "Aspirin Tablet Kunyah 80 mg (Aspilets)",
        "form": "tablet",
        "strengthPerUnit": 80,
        "unitLabel": "80 mg / tablet kunyah"
      },
      {
        "name": "Aspirin Tablet Enteric-Coated 100 mg (Thrombo Aspilets)",
        "form": "tablet",
        "strengthPerUnit": 100,
        "unitLabel": "100 mg / tablet salut enterik"
      }
    ],
    "defaultSignaTemplate": "Sesuai protokol Penyakit Kawasaki Sp.A"
  },
  {
    "id": "ped-oral-rehydration-salts",
    "name": "Oralit Pediatrik (Oral Rehydration Salts / ORS)",
    "genericName": "Oral Rehydration Salts Osmolaritas Rendah (WHO Formula)",
    "category": "Terapi Rehidrasi Oral Utama Diare & Muntah (WHO/Kemenkes RI)",
    "atcCode": "A07CA01",
    "indications": [
      "Rehidrasi diare akut dehidrasi ringan-sedang",
      "Pencegahan dehidrasi diare cair akut",
      "Muntaber / Gastroenteritis"
    ],
    "dosingType": "fixed_by_age",
    "defaultFrequencyPerDay": 6,
    "frequencyOptions": [
      {
        "label": "Anak < 1 tahun: Berikan 50 - 100 mL setiap kali buang air besar cair",
        "timesPerDay": 6,
        "intervalHours": 4
      },
      {
        "label": "Anak 1 - 5 tahun: Berikan 100 - 200 mL setiap kali buang air besar cair",
        "timesPerDay": 6,
        "intervalHours": 4
      },
      {
        "label": "Anak > 5 tahun: Berikan semau anak (minimal 200-300 mL tiap BAB cair)",
        "timesPerDay": 6,
        "intervalHours": 4
      }
    ],
    "maxSingleDoseMg": 200,
    "maxDailyDoseMg": 2000,
    "minAgeMonths": 0,
    "maxAgeYears": 18,
    "administrationNotes": "Larutkan 1 sachet oralit ke dalam 200 mL air matang hangat/dingin (1 gelas belimbing). Berikan sesendok demi sesendok setiap 1-2 menit. Jika anak muntah, tunggu 10 menit lalu lanjutkan kembali lebih perlahan.",
    "contraindications": "Dehidrasi berat dengan syok hipovolemik (wajib rehidrasi infus IV darurat), ileus paralitik usus, muntah terus menerus tidak terkontrol.",
    "redFlags": [
      "JANGAN mencampur oralit dengan susu, jus buah, atau sirup manis karena dapat merusak osmolaritas larutan dan memperparah diare osmotik.",
      "Sisa larutan oralit yang tidak habis dalam 24 jam wajib dibuang dan dibuatkan larutan baru."
    ],
    "formulations": [
      {
        "name": "Oralit Sachet 200 mL (Formula Osmolaritas Rendah WHO)",
        "form": "puyer",
        "strengthPerUnit": 200,
        "unitLabel": "1 sachet dilarutkan dalam 200 mL air"
      }
    ],
    "defaultSignaTemplate": "Minum 50-100 mL sesendok demi sesendok tiap kali BAB cair"
  },
  {
    "id": "ped-lactobacillus",
    "name": "Probiotik Pediatrik (Lactobacillus reuteri / L. rhamnosus)",
    "genericName": "Lactobacillus reuteri / L. rhamnosus / Bifidobacterium Tetes & Sachet",
    "category": "Suplemen Mikroflora Saluran Cerna / Ajuvan Diare",
    "atcCode": "A07FA01",
    "indications": [
      "Ajuvan terapi diare akut pada anak (memperpendek durasi diare)",
      "Diare terkait antibiotik (Antibiotic-Associated Diarrhea)",
      "Kolik infantil pada bayi"
    ],
    "dosingType": "fixed_by_age",
    "defaultFrequencyPerDay": 1,
    "frequencyOptions": [
      {
        "label": "1 kali sehari (1 sachet atau 5 tetes oral per hari)",
        "timesPerDay": 1,
        "intervalHours": 24
      }
    ],
    "maxSingleDoseMg": 1,
    "maxDailyDoseMg": 2,
    "minAgeMonths": 0,
    "maxAgeYears": 18,
    "administrationNotes": "Sachet dapat dicampur ke dalam susu formula hangat, air matang, atau makanan lumat (jangan air mendidih karena membunuh bakteri probiotik hidup). Berikan jeda minimal 2 jam dari jadwal minum antibiotik.",
    "contraindications": "Pasien dengan imunodefisiensi berat, kateter vena sentral di ICU (risiko bakteremia laktobasilus).",
    "redFlags": [
      "Antibiotik dapat membunuh probiotik; selalu beri jeda minimal 2-3 jam antara antibiotik oral dan probiotik.",
      "Tetes botol yang telah dibuka stabil selama 3 bulan di bawah suhu 25°C."
    ],
    "formulations": [
      {
        "name": "Lactobacillus Drops (Interlac Tetes 5 tetes/hari)",
        "form": "drops",
        "strengthPerUnit": 5,
        "volumePerUnit": 0.2,
        "unitLabel": "5 tetes sekali sehari",
        "bottleSizeMl": 5,
        "budAfterOpenDays": 90
      },
      {
        "name": "Probiotik Sachet Serbuk (L-Bio / Lacidofil / Liprolac)",
        "form": "puyer",
        "strengthPerUnit": 1,
        "unitLabel": "1 sachet (1 gram) per hari"
      }
    ],
    "defaultSignaTemplate": "1 x sehari 1 sachet dilarutkan dalam air hangat / susu"
  },
  {
    "id": "ped-hyoscine-butylbromide",
    "name": "Hyoscine Butylbromide Pediatrik (>6 Tahun)",
    "genericName": "Hyoscine-N-Butylbromide Tablet 10 mg (Buscopan)",
    "category": "Antispasmodik Saluran Cerna & Saluran Kemih",
    "atcCode": "A03BB01",
    "indications": [
      "Kram perut spasmodik akut (Kolik Abdomen)",
      "Spasme traktus biliaris / saluran kemih"
    ],
    "dosingType": "fixed_by_age",
    "defaultFrequencyPerDay": 3,
    "frequencyOptions": [
      {
        "label": "Anak usia 6-12 tahun: 10 mg 3 kali sehari sesudah makan",
        "timesPerDay": 3,
        "intervalHours": 8
      },
      {
        "label": "Anak > 12 tahun: 10 - 20 mg 3-4 kali sehari",
        "timesPerDay": 4,
        "intervalHours": 6
      }
    ],
    "maxSingleDoseMg": 20,
    "maxDailyDoseMg": 60,
    "minAgeMonths": 72,
    "maxAgeYears": 18,
    "standardAdultDoseMg": 10,
    "administrationNotes": "Diminum bersama segelas air. Tidak menembus sawar darah otak sehingga tidak menimbulkan efek samping SSP sedatif.",
    "contraindications": "Anak usia < 6 tahun, megakolon, glaukoma sudut tertutup, miastenia gravis, takiaritma.",
    "redFlags": [
      "KONTRAINDIKASI MUTLAK pada apendisitis akut (dapat menutupi gejala perforasi usus).",
      "Efek samping antikolinergik: mulut kering, penglihatan kabur, konstipasi, dan takikardia."
    ],
    "formulations": [
      {
        "name": "Hyoscine Butylbromide Tablet 10 mg (Buscopan)",
        "form": "tablet",
        "strengthPerUnit": 10,
        "unitLabel": "10 mg / tablet"
      }
    ],
    "defaultSignaTemplate": "3 x sehari 1 tablet bila kram perut melilit"
  },
  {
    "id": "ped-dimethicone",
    "name": "Simethicone Drops (Anti Kembung & Kolik Bayi)",
    "genericName": "Simethicone / Dimethicone Tetes Oral 40 mg/0.6 mL",
    "category": "Antifoaming Agent (Pereda Kembung & Kolik Infantil)",
    "atcCode": "A03AX13",
    "indications": [
      "Kolik infantil akibat akumulasi gas usus pada bayi",
      "Perut kembung meteorismus",
      "Persiapan pemeriksaan USG abdomen"
    ],
    "dosingType": "fixed_by_age",
    "defaultFrequencyPerDay": 4,
    "frequencyOptions": [
      {
        "label": "Bayi < 2 tahun: 20 mg (0.3 mL) setiap kali sesudah minum susu / sebelum tidur (maks 240 mg/hari)",
        "timesPerDay": 4,
        "intervalHours": 6
      },
      {
        "label": "Anak 2-12 tahun: 40 mg (0.6 mL) 4 kali sehari sesudah makan",
        "timesPerDay": 4,
        "intervalHours": 6
      }
    ],
    "maxSingleDoseMg": 40,
    "maxDailyDoseMg": 240,
    "minAgeMonths": 0,
    "maxAgeYears": 12,
    "administrationNotes": "Teteskan langsung ke mulut bayi menggunakan pipet tetes atau campurkan ke dalam 30 mL air/susu formula dingin. Kocok botol dengan baik sebelum digunakan.",
    "contraindications": "Hipersensitivitas simetikon, obstruksi saluran cerna.",
    "redFlags": [
      "Bekerja secara fisik murni memecah tegangan permukaan gelembung gas di usus tanpa diserap sistemik oleh tubuh bayi (sangat aman).",
      "Tidak mengubah motilitas usus dan tidak diserap ke sirkulasi darah."
    ],
    "formulations": [
      {
        "name": "Simethicone Drops 40 mg/0.6 mL (Disflatyl/Cuplaton Drops)",
        "form": "drops",
        "strengthPerUnit": 40,
        "volumePerUnit": 0.6,
        "unitLabel": "40 mg / 0.6 mL pipet tetes",
        "bottleSizeMl": 15,
        "budAfterOpenDays": 30
      }
    ],
    "defaultSignaTemplate": "3-4 x sehari 0.3 - 0.6 mL diteteskan sesudah minum susu"
  },
  {
    "id": "ped-metoclopramide",
    "name": "Metoclopramide Pediatrik",
    "genericName": "Metoclopramide Hydrochloride Sirup & Tablet",
    "category": "Antiemetik & Prokinetik Lambung",
    "atcCode": "A03FA01",
    "indications": [
      "Mual muntah akut pasca operasi/kemoterapi",
      "Refluks gastroesofageal (GERD) refrakter"
    ],
    "dosingType": "per_kg_per_dose",
    "singleDoseMinMgPerKg": 0.1,
    "singleDoseMaxMgPerKg": 0.15,
    "defaultFrequencyPerDay": 3,
    "frequencyOptions": [
      {
        "label": "3 kali sehari (Tiap 8 jam) 15-30 menit sebelum makan (maksimal penggunaan 5 hari)",
        "timesPerDay": 3,
        "intervalHours": 8
      }
    ],
    "maxSingleDoseMg": 5,
    "maxDailyDoseMg": 15,
    "minAgeMonths": 12,
    "maxAgeYears": 18,
    "standardAdultDoseMg": 10,
    "administrationNotes": "Diminum 15-30 menit sebelum makan. Hanya digunakan sebagai lini kedua bila Domperidone atau Ondansetron tidak efektif.",
    "contraindications": "Perdarahan gastrointestinal aktif, obstruksi mekanik lambung, epilepsi, feokromositoma, anak usia < 1 tahun.",
    "redFlags": [
      "FDA Black Box Warning: Risiko tinggi Ekstrapiramidal Syndrome (EPS) / reaksi distonia akut (tortikolis leher kaku, spasme otot wajah, krisis okulogirik) pada anak balita.",
      "Maksimal penggunaan 5 hari untuk mencegah Tardive Dyskinesia permanen.",
      "Bila terjadi distonia akut leher kaku, segera beri antidotum Difenhidramin injeksi."
    ],
    "formulations": [
      {
        "name": "Metoclopramide Sirup 5 mg/5 mL (Primperan/Damaben)",
        "form": "sirup",
        "strengthPerUnit": 5,
        "volumePerUnit": 5,
        "unitLabel": "5 mg / 5 mL (1 cth)",
        "bottleSizeMl": 60,
        "budAfterOpenDays": 30
      },
      {
        "name": "Metoclopramide Tablet 10 mg",
        "form": "tablet",
        "strengthPerUnit": 10,
        "unitLabel": "10 mg / tablet"
      }
    ],
    "defaultSignaTemplate": "3 x sehari 1/2 - 1 sendok takar 30 menit sebelum makan (maks 5 hari)"
  },
  {
    "id": "ped-sucralfate",
    "name": "Sucralfate Pediatrik",
    "genericName": "Sucralfate Suspensi 500 mg/5 mL",
    "category": "Mukoprotektor Lambung",
    "atcCode": "A02BX02",
    "indications": [
      "Gastritis erosif",
      "Tukak lambung stres pada anak kritis",
      "Esofagitis refluks"
    ],
    "dosingType": "per_kg_per_day",
    "minDoseMgPerKgPerDay": 40,
    "maxDoseMgPerKgPerDay": 80,
    "defaultFrequencyPerDay": 4,
    "frequencyOptions": [
      {
        "label": "4 kali sehari saat perut kosong (1 jam sebelum makan atau 2 jam sesudah makan dan sebelum tidur)",
        "timesPerDay": 4,
        "intervalHours": 6
      }
    ],
    "maxSingleDoseMg": 1000,
    "maxDailyDoseMg": 4000,
    "minAgeMonths": 1,
    "maxAgeYears": 18,
    "standardAdultDoseMg": 1000,
    "administrationNotes": "Wajib diminum saat perut kosong (1 jam sebelum makan atau 2 jam sesudah makan). Kocok suspensi homogen sebelum diminum. Jangan berikan bersama antasida dalam selang waktu 30 menit.",
    "contraindications": "Gagal ginjal berat (risiko akumulasi ion aluminium).",
    "redFlags": [
      "Bekerja lokal melapisi dasar ulkus mukosa; menghambat absorpsi obat lain (ciprofloxacin, fenitoin, digoksin). Selalu berikan jeda minimal 2 jam dari obat lain.",
      "Dapat memicu konstipasi ringan."
    ],
    "formulations": [
      {
        "name": "Sucralfate Suspensi 500 mg/5 mL (Inpepsa/Episan)",
        "form": "suspensi",
        "strengthPerUnit": 500,
        "volumePerUnit": 5,
        "unitLabel": "500 mg / 5 mL (1 cth)",
        "bottleSizeMl": 100,
        "budAfterOpenDays": 30
      }
    ],
    "defaultSignaTemplate": "4 x sehari 1 sendok takar 1 jam sebelum makan saat perut kosong"
  },
  {
    "id": "ped-diazepam-rectal",
    "name": "Diazepam Rektal Tube (Pemberian Dubur Darurat Kejang Demam)",
    "genericName": "Diazepam Gel Tube Rektal 5 mg / 10 mg (Stesolid)",
    "category": "Antikonvulsan Darurat Kejang Demam Anak",
    "atcCode": "N05BA01",
    "indications": [
      "Tatalaksana darurat kejang demam akut di rumah / IGD",
      "Status epileptikus sebelum akses vena terpasang"
    ],
    "dosingType": "fixed_by_weight",
    "defaultFrequencyPerDay": 1,
    "frequencyOptions": [
      {
        "label": "Berat Badan < 12 kg (atau usia < 3 tahun): 5 mg per rektal (1 tube merah/kuning)",
        "timesPerDay": 1,
        "intervalHours": 24
      },
      {
        "label": "Berat Badan ≥ 12 kg (atau usia ≥ 3 tahun): 10 mg per rektal (1 tube hijau)",
        "timesPerDay": 1,
        "intervalHours": 24
      }
    ],
    "maxSingleDoseMg": 10,
    "maxDailyDoseMg": 20,
    "minAgeMonths": 3,
    "maxAgeYears": 18,
    "administrationNotes": "Baringkan anak miring, buka tutup tube, lumasi ujung kanula, masukkan kanula seluruhnya ke dalam anus/dubur, tekan tube hingga habis, cabut tube sambil tetap ditekan, lalu rapatkan kedua bokong anak selama 2-3 menit agar obat tidak keluar.",
    "contraindications": "Depresi pernapasan berat, miastenia gravis.",
    "redFlags": [
      "IDAI Guideline: Jika kejang belum berhenti dalam 5 menit setelah tube pertama, dosis kedua BISA DIULANG SEKALI LAGI dengan dosis yang sama.",
      "Jika kejang masih berlanjut > 5-10 menit, SEGERA BAWA ANAK KE IGD RUMAH SAKIT TERDEKAT!",
      "Waspadai risiko depresi pernapasan terutama pada pemberian dosis berulang."
    ],
    "formulations": [
      {
        "name": "Diazepam Rectal Tube 5 mg / 2.5 mL (Stesolid Tube Kuning BB <12 kg)",
        "form": "injeksi",
        "strengthPerUnit": 5,
        "volumePerUnit": 2.5,
        "unitLabel": "5 mg / tube rektal",
        "bottleSizeMl": 2.5,
        "budAfterOpenDays": 1
      },
      {
        "name": "Diazepam Rectal Tube 10 mg / 2.5 mL (Stesolid Tube Hijau BB ≥12 kg)",
        "form": "injeksi",
        "strengthPerUnit": 10,
        "volumePerUnit": 2.5,
        "unitLabel": "10 mg / tube rektal",
        "bottleSizeMl": 2.5,
        "budAfterOpenDays": 1
      }
    ],
    "defaultSignaTemplate": "Masukkan 1 tube ke dalam anus/dubur bila terjadi kejang demam (p.r.n)"
  },
  {
    "id": "ped-phenobarbital",
    "name": "Phenobarbital Pediatrik",
    "genericName": "Phenobarbital Sodium Tablet 30 mg & Injeksi",
    "category": "Antikonvulsan Barbiturat / Lini 1 Kejang Neonatus",
    "atcCode": "N03AA02",
    "indications": [
      "Kejang neonatal (lini pertama)",
      "Profilaksis rumatan kejang demam kompleks",
      "Status epileptikus refrakter"
    ],
    "dosingType": "per_kg_per_day",
    "minDoseMgPerKgPerDay": 3,
    "maxDoseMgPerKgPerDay": 5,
    "defaultFrequencyPerDay": 2,
    "frequencyOptions": [
      {
        "label": "Rumatan: 3 - 5 mg/kgBB/hari terbagi 1 - 2 dosis (Neonatus: 3-4 mg/kg/hari)",
        "timesPerDay": 2,
        "intervalHours": 12
      },
      {
        "label": "Dosis Muat Darurat Neonatal (IV): 15 - 20 mg/kgBB IV lambat dalam 10-15 menit",
        "timesPerDay": 1,
        "intervalHours": 24
      }
    ],
    "maxSingleDoseMg": 100,
    "maxDailyDoseMg": 200,
    "minAgeMonths": 0,
    "maxAgeYears": 18,
    "standardAdultDoseMg": 100,
    "administrationNotes": "Dapat diminum bersama atau tanpa makanan. Sering diracik dalam puyer profilaksis kejang demam anak.",
    "contraindications": "Porfiria intermiten akut, depresi pernapasan berat, gangguan hepar berat.",
    "redFlags": [
      "Menginduksi enzim sitokrom P450 hepar secara masif (mempercepat metabolisme obat lain).",
      "Dapat memicu efek sedasi mengantuk pada awal terapi, atau paradoksal hiperaktivitas dan iritabilitas pada anak balita."
    ],
    "formulations": [
      {
        "name": "Phenobarbital Tablet 30 mg (Luminal)",
        "form": "tablet",
        "strengthPerUnit": 30,
        "unitLabel": "30 mg / tablet"
      },
      {
        "name": "Phenobarbital Injeksi 100 mg/2 mL (50 mg/mL)",
        "form": "injeksi",
        "strengthPerUnit": 100,
        "volumePerUnit": 2,
        "unitLabel": "50 mg / mL"
      }
    ],
    "defaultSignaTemplate": "2 x sehari 1 bungkus puyer pagi dan malam hari"
  },
  {
    "id": "ped-valproic-acid",
    "name": "Valproic Acid Pediatrik (Asam Valproat)",
    "genericName": "Sodium Valproate Sirup 250 mg/5 mL (Depakene)",
    "category": "Antikonvulsan Spektrum Luas Pediatrik",
    "atcCode": "N03AG01",
    "indications": [
      "Kejang umum tonik-klonik",
      "Absans (Petit Mal)",
      "Kejang mioklonik",
      "Profilaksis kejang demam refrakter"
    ],
    "dosingType": "per_kg_per_day",
    "minDoseMgPerKgPerDay": 15,
    "maxDoseMgPerKgPerDay": 40,
    "defaultFrequencyPerDay": 2,
    "frequencyOptions": [
      {
        "label": "Mulai dosis awal 10-15 mg/kgBB/hari, titrasi naik bertahap tiap minggu hingga 20-40 mg/kgBB/hari terbagi 2-3 dosis sesudah makan",
        "timesPerDay": 2,
        "intervalHours": 12
      }
    ],
    "maxSingleDoseMg": 500,
    "maxDailyDoseMg": 1500,
    "minAgeMonths": 24,
    "maxAgeYears": 18,
    "standardAdultDoseMg": 500,
    "administrationNotes": "Diminum bersama atau segera sesudah makan untuk meminimalkan mual lambung. Jangan diminum bersama minuman berkarbonasi (mengiritasi mulut/tenggorokan).",
    "contraindications": "Penyakit hepar aktif, gangguan siklus urea mitokondria (POLG mutation).",
    "redFlags": [
      "FDA Black Box Warning: Hepatotoksisitas fatal paling rentan terjadi pada anak usia < 2 tahun (terutama jika polifarmasi antiepilepsi).",
      "Dapat memicu trombositopenia dan pankreatitis akut mematikan.",
      "Wajib memantau enzim fungsi hati (SGOT/SGPT), trombosit, dan amonia berkala."
    ],
    "formulations": [
      {
        "name": "Sodium Valproate Sirup 250 mg/5 mL (Depakene)",
        "form": "sirup",
        "strengthPerUnit": 250,
        "volumePerUnit": 5,
        "unitLabel": "250 mg / 5 mL (1 cth)",
        "bottleSizeMl": 120,
        "budAfterOpenDays": 30
      }
    ],
    "defaultSignaTemplate": "2 x sehari 1 sendok takar sesudah makan tiap 12 jam"
  },
  {
    "id": "ped-phenytoin",
    "name": "Phenytoin Pediatrik",
    "genericName": "Phenytoin Sodium Kapsul 30 mg / 100 mg & Injeksi",
    "category": "Antikonvulsan Hidantoin",
    "atcCode": "N03AB02",
    "indications": [
      "Status epileptikus fase kedua",
      "Kejang fokal parsial dan umum tonik-klonik"
    ],
    "dosingType": "per_kg_per_day",
    "minDoseMgPerKgPerDay": 5,
    "maxDoseMgPerKgPerDay": 8,
    "defaultFrequencyPerDay": 2,
    "frequencyOptions": [
      {
        "label": "Rumatan: 5 - 8 mg/kgBB/hari terbagi 2 dosis (Neonatus: 3-5 mg/kg/hari)",
        "timesPerDay": 2,
        "intervalHours": 12
      },
      {
        "label": "Dosis Muat Darurat (IV): 15 - 20 mg/kgBB dilarutkan HANYA dalam NaCl 0.9% kecepatan infus maks 1 mg/kg/menit",
        "timesPerDay": 1,
        "intervalHours": 24
      }
    ],
    "maxSingleDoseMg": 200,
    "maxDailyDoseMg": 400,
    "minAgeMonths": 1,
    "maxAgeYears": 18,
    "standardAdultDoseMg": 100,
    "administrationNotes": "Oral diminum sesudah makan. JANGAN campur formulasi IV dengan Dextrose karena presipitasi kristal langsung.",
    "contraindications": "Blok sinoatrial, blok AV derajat 2-3.",
    "redFlags": [
      "Kinetika Michaelis-Menten non-linier: peningkatan dosis kecil dapat melipatgandakan kadar serum darah memicu intoksikasi ataksia, nistagmus, dan letargi.",
      "Penggunaan jangka panjang memicu hipertrofi gusi (hiperplasia gingiva), wajib jaga kebersihan gigi."
    ],
    "formulations": [
      {
        "name": "Phenytoin Kapsul 30 mg (Kutoin/Dilantin)",
        "form": "kapsul",
        "strengthPerUnit": 30,
        "unitLabel": "30 mg / kapsul"
      },
      {
        "name": "Phenytoin Kapsul 100 mg",
        "form": "kapsul",
        "strengthPerUnit": 100,
        "unitLabel": "100 mg / kapsul"
      },
      {
        "name": "Phenytoin Injeksi 100 mg/2 mL (50 mg/mL)",
        "form": "injeksi",
        "strengthPerUnit": 100,
        "volumePerUnit": 2,
        "unitLabel": "50 mg / mL"
      }
    ],
    "defaultSignaTemplate": "2 x sehari 1 bungkus puyer sesudah makan"
  },
  {
    "id": "ped-piracetam",
    "name": "Piracetam Pediatrik",
    "genericName": "Piracetam Sirup 500 mg/5 mL & Tablet",
    "category": "Nootropik / Neuroprotektor Ajuvan",
    "atcCode": "N06BX03",
    "indications": [
      "Ajuvan terapi disleksia dan kesulitan belajar anak usia > 8 tahun",
      "Mioklonus kortikal"
    ],
    "dosingType": "per_kg_per_day",
    "minDoseMgPerKgPerDay": 40,
    "maxDoseMgPerKgPerDay": 50,
    "defaultFrequencyPerDay": 2,
    "frequencyOptions": [
      {
        "label": "Anak usia > 8 tahun: 40-50 mg/kgBB/hari (atau 3.2 g/hari terbagi 2 dosis pagi dan siang)",
        "timesPerDay": 2,
        "intervalHours": 12
      }
    ],
    "maxSingleDoseMg": 1600,
    "maxDailyDoseMg": 3300,
    "minAgeMonths": 96,
    "maxAgeYears": 18,
    "standardAdultDoseMg": 800,
    "administrationNotes": "Diminum bersama atau tanpa makanan. Hindari pemberian larut malam karena efek stimulan dapat memicu insomnia.",
    "contraindications": "Perdarahan serebral akut, gangguan fungsi ginjal berat (CrCl < 20 mL/min), penyakit Huntington.",
    "redFlags": [
      "Ekskresi ginjal murni 100% obat utuh.",
      "Dapat memicu kegelisahan, insomnia, dan hiperkinesia motorik pada awal terapi."
    ],
    "formulations": [
      {
        "name": "Piracetam Sirup 500 mg/5 mL (Nootropil/Neurotam)",
        "form": "sirup",
        "strengthPerUnit": 500,
        "volumePerUnit": 5,
        "unitLabel": "500 mg / 5 mL",
        "bottleSizeMl": 100,
        "budAfterOpenDays": 30
      },
      {
        "name": "Piracetam Tablet 800 mg",
        "form": "tablet",
        "strengthPerUnit": 800,
        "unitLabel": "800 mg / tablet"
      }
    ],
    "defaultSignaTemplate": "2 x sehari 1 sendok takar sesudah makan pagi dan siang"
  },
  {
    "id": "ped-albendazole",
    "name": "Albendazole Pediatrik (Anti Cacing)",
    "genericName": "Albendazole Tablet Kunyah 400 mg & Suspensi",
    "category": "Antelmintik Spektrum Luas (Program Cacingan Kemenkes RI)",
    "atcCode": "P02CA03",
    "indications": [
      "Infeksi cacing gelang (Ascaris lumbricoides)",
      "Cacing tambang (Necator/Ancylostoma)",
      "Cacing kremi (Enterobius vermicularis)",
      "Cacing cambuk (Trichuris trichiura)"
    ],
    "dosingType": "fixed_by_age",
    "defaultFrequencyPerDay": 1,
    "frequencyOptions": [
      {
        "label": "Anak usia 12 - 24 bulan: 200 mg (1/2 tablet) DOSIS TUNGGAL",
        "timesPerDay": 1,
        "intervalHours": 24
      },
      {
        "label": "Anak usia > 2 tahun: 400 mg (1 tablet) DOSIS TUNGGAL",
        "timesPerDay": 1,
        "intervalHours": 24
      }
    ],
    "maxSingleDoseMg": 400,
    "maxDailyDoseMg": 400,
    "minAgeMonths": 12,
    "maxAgeYears": 18,
    "standardAdultDoseMg": 400,
    "administrationNotes": "Tablet dikunyah sampai halus sebelum ditelan, atau digerus halus pada balita. Diminum bersama makanan berlemak untuk meningkatkan absorpsi bila infeksi jaringan sistemik (misal kista hidatidosa). Untuk cacing kremi, dosis tunggal dapat diulang 2 minggu kemudian.",
    "contraindications": "Anak usia di bawah 1 tahun, wanita hamil.",
    "redFlags": [
      "Program Pemberian Obat Pencegahan Massal (POPM) Cacingan Kemenkes RI: Diberikan setiap 6 bulan sekali pada anak usia sekolah.",
      "KONTRAINDIKASI MUTLAK pada bayi usia < 1 tahun kecuali instruksi spesifik dokter spesialis anak."
    ],
    "formulations": [
      {
        "name": "Albendazole Tablet Kunyah 400 mg (Helben/Zentel)",
        "form": "tablet",
        "strengthPerUnit": 400,
        "unitLabel": "400 mg / tablet kunyah"
      },
      {
        "name": "Albendazole Suspensi 200 mg/5 mL",
        "form": "suspensi",
        "strengthPerUnit": 200,
        "volumePerUnit": 5,
        "unitLabel": "200 mg / 5 mL",
        "bottleSizeMl": 10,
        "budAfterOpenDays": 30
      }
    ],
    "defaultSignaTemplate": "1 x sehari 1 tablet dikunyah sampai halus (dosis tunggal)"
  },
  {
    "id": "ped-mebendazole",
    "name": "Mebendazole Pediatrik",
    "genericName": "Mebendazole Tablet Kunyah 100 mg / 500 mg",
    "category": "Antelmintik Benzimidazol",
    "atcCode": "P02CA01",
    "indications": [
      "Kecacingan usus campuran (Ascaris, Trichuris, Enterobius, Cacing Tambang)"
    ],
    "dosingType": "fixed_by_age",
    "defaultFrequencyPerDay": 2,
    "frequencyOptions": [
      {
        "label": "Anak > 2 tahun: 100 mg 2 kali sehari selama 3 hari berturut-turut (atau 500 mg dosis tunggal)",
        "timesPerDay": 2,
        "intervalHours": 12
      }
    ],
    "maxSingleDoseMg": 500,
    "maxDailyDoseMg": 500,
    "minAgeMonths": 24,
    "maxAgeYears": 18,
    "standardAdultDoseMg": 500,
    "administrationNotes": "Tablet dapat dikunyah, ditelan utuh, atau digerus dan dicampur bersama makanan. Tidak memerlukan pencahar sebelum/sesudah minum obat.",
    "contraindications": "Anak usia < 2 tahun, hipersensitivitas mebendazol.",
    "redFlags": [
      "Hindari penggunaan bersamaan dengan Metronidazole (risiko timbulnya sindrom Stevens-Johnson / Toxic Epidermal Necrolysis).",
      "Absorpsi sistemik rendah (< 10%), bekerja dominan membunuh cacing di dalam lumen usus halus."
    ],
    "formulations": [
      {
        "name": "Mebendazole Tablet Kunyah 100 mg (Vermox)",
        "form": "tablet",
        "strengthPerUnit": 100,
        "unitLabel": "100 mg / tablet kunyah"
      },
      {
        "name": "Mebendazole Tablet 500 mg",
        "form": "tablet",
        "strengthPerUnit": 500,
        "unitLabel": "500 mg / tablet"
      }
    ],
    "defaultSignaTemplate": "2 x sehari 1 tablet selama 3 hari berturut-turut"
  },
  {
    "id": "ped-pyrantel-pamoate",
    "name": "Pyrantel Pamoate Pediatrik (Anti Cacing Kremi & Gelang)",
    "genericName": "Pyrantel Pamoate Suspensi & Tablet Kunyah",
    "category": "Antelmintik Pelumpuh Neuromuskular Cacing",
    "atcCode": "P02CC01",
    "indications": [
      "Cacing kremi (Enterobius vermicularis)",
      "Cacing gelang (Ascaris lumbricoides)",
      "Cacing tambang (Ancylostoma duodenale)"
    ],
    "dosingType": "per_kg_per_dose",
    "singleDoseMinMgPerKg": 10,
    "singleDoseMaxMgPerKg": 11,
    "defaultFrequencyPerDay": 1,
    "frequencyOptions": [
      {
        "label": "10 mg/kgBB DOSIS TUNGGAL (maksimal 1000 mg)",
        "timesPerDay": 1,
        "intervalHours": 24
      }
    ],
    "maxSingleDoseMg": 1000,
    "maxDailyDoseMg": 1000,
    "minAgeMonths": 6,
    "maxAgeYears": 18,
    "standardAdultDoseMg": 500,
    "administrationNotes": "Diminum sekali pada malam hari sesudah makan. Untuk cacing kremi, dosis tunggal wajib diulang 2 minggu kemudian untuk membasmi telur cacing yang baru menetas.",
    "contraindications": "Anak usia < 6 bulan, gangguan fungsi hati berat.",
    "redFlags": [
      "Bekerja melumpuhkan otot cacing (blokade depolarisasi neuromuskular nikotinik) sehingga cacing keluar utuh bersama tinja tanpa terfragmentasi.",
      "Keluarga serumah disarankan meminum obat serentak pada kasus infeksi cacing kremi berulang."
    ],
    "formulations": [
      {
        "name": "Pyrantel Pamoate Suspensi 125 mg/5 mL (Combantrin Sirup)",
        "form": "suspensi",
        "strengthPerUnit": 125,
        "volumePerUnit": 5,
        "unitLabel": "125 mg / 5 mL",
        "bottleSizeMl": 10,
        "budAfterOpenDays": 30
      },
      {
        "name": "Pyrantel Pamoate Tablet Kunyah 125 mg (Combantrin)",
        "form": "tablet",
        "strengthPerUnit": 125,
        "unitLabel": "125 mg / tablet kunyah"
      },
      {
        "name": "Pyrantel Pamoate Tablet 250 mg",
        "form": "tablet",
        "strengthPerUnit": 250,
        "unitLabel": "250 mg / tablet"
      }
    ],
    "defaultSignaTemplate": "Diminum 1 kali pada malam hari (dosis tunggal)"
  },
  {
    "id": "ped-carbamazepine",
    "name": "Carbamazepine",
    "genericName": "Carbamazepine Suspensi & Tablet",
    "category": "Antikonvulsan / Antiepilepsi Anak",
    "atcCode": "N03AF01",
    "indications": [
      "Epilepsi Kejang Parsial / Fokal",
      "Kejang Tonik-Klonik Umum Primer",
      "Nyeri Neuropatik Pediatrik"
    ],
    "dosingType": "per_kg_per_day",
    "minDoseMgPerKgPerDay": 10,
    "maxDoseMgPerKgPerDay": 20,
    "defaultFrequencyPerDay": 2,
    "frequencyOptions": [
      {
        "label": "2 kali sehari (Tiap 12 jam) bersama makanan",
        "timesPerDay": 2,
        "intervalHours": 12
      },
      {
        "label": "3 kali sehari (Tiap 8 jam) - untuk suspensi",
        "timesPerDay": 3,
        "intervalHours": 8
      }
    ],
    "maxSingleDoseMg": 400,
    "maxDailyDoseMg": 1000,
    "minAgeMonths": 12,
    "maxAgeYears": 18,
    "standardAdultDoseMg": 200,
    "administrationNotes": "Diminum bersama atau segera sesudah makan untuk mengurangi iritasi lambung. Titrasi dosis bertahap setiap 1-2 minggu dari dosis rendah.",
    "contraindications": "Riwayat depresi sumsum tulang, blok atrioventrikular (AV block), hipersensitivitas karbamazepin atau antidepresan trisiklik.",
    "redFlags": [
      "Risiko reaksi kulit berat mengancam nyawa (Stevens-Johnson Syndrome / SJS / TEN) terutama pada pasien dengan alel HLA-B*1502.",
      "Auto-induksi enzim hepar (CYP3A4); kadar plasma dapat turun setelah 2-4 minggu terapi, memerlukan penyesuaian dosis.",
      "Pantau darah lengkap (risiko agranulositosis/anemia aplastik) dan fungsi hepar secara berkala."
    ],
    "formulations": [
      {
        "name": "Tegretol Sirup/Suspensi 100 mg/5 mL",
        "form": "sirup",
        "strengthPerUnit": 100,
        "volumePerUnit": 5,
        "unitLabel": "100 mg / 5 mL",
        "bottleSizeMl": 100,
        "budAfterOpenDays": 30
      },
      {
        "name": "Carbamazepine Tablet 200 mg (Bahan Puyer)",
        "form": "tablet",
        "strengthPerUnit": 200,
        "unitLabel": "200 mg / tablet"
      }
    ],
    "defaultSignaTemplate": "2 x sehari 1/2-1 sendok takar bersama makanan (Titrasi bertahap)"
  },
  {
    "id": "ped-ketotifen",
    "name": "Ketotifen Fumarate",
    "genericName": "Ketotifen Sirup & Tablet",
    "category": "Antiasma Non-Bronkodilator / Antihistamin Profilaksis",
    "atcCode": "R06AX17",
    "indications": [
      "Profilaksis jangka panjang Asma Bronkial Anak",
      "Rinitis Alergi Persisten",
      "Konjungtivitis Alergi & Dermatitis Atopik"
    ],
    "dosingType": "per_kg_per_day",
    "minDoseMgPerKgPerDay": 0.05,
    "maxDoseMgPerKgPerDay": 0.1,
    "defaultFrequencyPerDay": 2,
    "frequencyOptions": [
      {
        "label": "2 kali sehari (Pagi dan Malam sebelum tidur)",
        "timesPerDay": 2,
        "intervalHours": 12
      }
    ],
    "maxSingleDoseMg": 1,
    "maxDailyDoseMg": 2,
    "minAgeMonths": 6,
    "maxAgeYears": 18,
    "standardAdultDoseMg": 1,
    "administrationNotes": "Diminum saat makan atau sebelum tidur. Butuh waktu 2-4 minggu penggunaan rutin untuk mencapai efek profilaksis asma maksimal.",
    "contraindications": "Hipersensitivitas ketotifen, anak usia < 6 bulan.",
    "redFlags": [
      "BUKAN OBAT PEREDA ASMA AKUT (Reliever); jangan gunakan untuk mengatasi serangan sesak napas akut!",
      "Efek samping mengantuk dan peningkatan nafsu makan sering terjadi pada minggu-minggu pertama terapi."
    ],
    "formulations": [
      {
        "name": "Profilas / Astafen Sirup 1 mg/5 mL",
        "form": "sirup",
        "strengthPerUnit": 1,
        "volumePerUnit": 5,
        "unitLabel": "1 mg / 5 mL",
        "bottleSizeMl": 60,
        "budAfterOpenDays": 30
      },
      {
        "name": "Ketotifen Tablet 1 mg (Bahan Puyer)",
        "form": "tablet",
        "strengthPerUnit": 1,
        "unitLabel": "1 mg / tablet"
      }
    ],
    "defaultSignaTemplate": "2 x sehari 1/2-1 sendok takar pagi dan malam"
  },
  {
    "id": "ped-spironolactone",
    "name": "Spironolactone",
    "genericName": "Spironolakton Tablet & Puyer",
    "category": "Diuretik Hemat Kalium / Antagonis Aldosteron",
    "atcCode": "C03DA01",
    "indications": [
      "Gagal Jantung Kongestif Pediatrik",
      "Edema Refrakter pada Sindrom Nefrotik",
      "Hipertensi Anak"
    ],
    "dosingType": "per_kg_per_day",
    "minDoseMgPerKgPerDay": 1.0,
    "maxDoseMgPerKgPerDay": 3.0,
    "defaultFrequencyPerDay": 2,
    "frequencyOptions": [
      {
        "label": "2 kali sehari (Tiap 12 jam) sesudah makan",
        "timesPerDay": 2,
        "intervalHours": 12
      },
      {
        "label": "1 kali sehari pada pagi hari sesudah sarapan",
        "timesPerDay": 1,
        "intervalHours": 24
      }
    ],
    "maxSingleDoseMg": 100,
    "maxDailyDoseMg": 100,
    "minAgeMonths": 1,
    "maxAgeYears": 18,
    "standardAdultDoseMg": 25,
    "administrationNotes": "Diminum bersama atau sesudah makan untuk meningkatkan bioavailabilitas dan mengurangi rasa tidak nyaman pada saluran cerna.",
    "contraindications": "Hiperkalemia (K > 5.5 mEq/L), anuria, insufisiensi ginjal akut / gangguan ginjal berat (eGFR < 30 mL/min), penyakit Addison.",
    "redFlags": [
      "Wajib pantau kadar kalium serum dan kreatinin secara berkala (risiko hiperkalemia fatal terutama jika dikombinasi dengan ACE inhibitor).",
      "Sediaan sirup komersial belum tersedia di Indonesia, umumnya dibuat puyer/kapsul racikan dari tablet 25 mg."
    ],
    "formulations": [
      {
        "name": "Spironolactone Tablet 25 mg (Bahan Racik Puyer)",
        "form": "tablet",
        "strengthPerUnit": 25,
        "unitLabel": "25 mg / tablet"
      },
      {
        "name": "Spironolactone Tablet 100 mg (Aldactone)",
        "form": "tablet",
        "strengthPerUnit": 100,
        "unitLabel": "100 mg / tablet"
      }
    ],
    "defaultSignaTemplate": "1-2 x sehari 1 bungkus puyer sesudah makan"
  },
  {
    "id": "ped-folic-acid",
    "name": "Folic Acid (Asam Folat / Vitamin B9)",
    "genericName": "Asam Folat Tablet & Sirup",
    "category": "Vitamin Hematopoietik / Antianemia",
    "atcCode": "B03BB01",
    "indications": [
      "Anemia Megaloblastik Defisiensi Folat",
      "Suplementasi Pasien Thalasemia Mayor / Anemia Hemolitik Kronis",
      "Profilaksis Bayi Prematur"
    ],
    "dosingType": "fixed_by_weight",
    "standardDoseMgPerKgPerDay": 0.1,
    "minDoseMgPerKgPerDay": 0.05,
    "maxDoseMgPerKgPerDay": 0.2,
    "defaultFrequencyPerDay": 1,
    "frequencyOptions": [
      {
        "label": "1 kali sehari bersama atau sesudah makan",
        "timesPerDay": 1,
        "intervalHours": 24
      }
    ],
    "maxSingleDoseMg": 5,
    "maxDailyDoseMg": 5,
    "minAgeMonths": 1,
    "maxAgeYears": 18,
    "standardAdultDoseMg": 1,
    "administrationNotes": "Dapat diminum kapan saja dengan air atau dicampur dengan susu/jus buah pada bayi.",
    "contraindications": "Anemia pernisiosa yang belum diobati (dapat menutupi defisiensi vitamin B12 dan memperburuk kerusakan neurologis).",
    "redFlags": [
      "Pemberian asam folat dosis tinggi tanpa vitamin B12 pada anemia megaloblastik dapat memicu degenerasi korda spinalis subakut."
    ],
    "formulations": [
      {
        "name": "Asam Folat Tablet 1 mg (Bahan Puyer)",
        "form": "tablet",
        "strengthPerUnit": 1,
        "unitLabel": "1 mg / tablet"
      },
      {
        "name": "Asam Folat Tablet 5 mg",
        "form": "tablet",
        "strengthPerUnit": 5,
        "unitLabel": "5 mg / tablet"
      },
      {
        "name": "Folavit Tablet 400 mcg (0.4 mg)",
        "form": "tablet",
        "strengthPerUnit": 0.4,
        "unitLabel": "400 mcg / tablet"
      }
    ],
    "defaultSignaTemplate": "1 x sehari 1 bungkus puyer / tablet sesudah makan"
  },
  {
    "id": "ped-lactulose",
    "name": "Lactulose",
    "genericName": "Laktulosa Sirup",
    "category": "Laksansia Osmotik / Disakarida Sintetik",
    "atcCode": "A06AD11",
    "indications": [
      "Konstipasi Kronis / Fungsional Anak",
      "Ensefalopati Hepatik Portosistemik"
    ],
    "dosingType": "per_kg_per_day",
    "minDoseMgPerKgPerDay": 500,
    "maxDoseMgPerKgPerDay": 1500,
    "defaultFrequencyPerDay": 2,
    "frequencyOptions": [
      {
        "label": "1-2 kali sehari sesudah makan (Titrasi hingga tinja lunak)",
        "timesPerDay": 2,
        "intervalHours": 12
      },
      {
        "label": "1 kali sehari pada pagi hari saat sarapan",
        "timesPerDay": 1,
        "intervalHours": 24
      }
    ],
    "maxSingleDoseMg": 20000,
    "maxDailyDoseMg": 40000,
    "minAgeMonths": 1,
    "maxAgeYears": 18,
    "standardAdultDoseMg": 10000,
    "administrationNotes": "Dapat dicampur dengan air putih, susu, atau jus buah untuk menyamarkan rasa manis pekat. Butuh waktu 24-48 jam untuk menghasilkan efek buang air besar yang optimal.",
    "contraindications": "Galaktosemia, obstruksi usus mekanik, perforasi saluran cerna.",
    "redFlags": [
      "Dosis berlebihan dapat memicu kram perut, diare berlebih, dan dehidrasi/kehilangan elektrolit.",
      "Pastikan asupan cairan harian anak mencukupi selama terapi laksansia osmotik."
    ],
    "formulations": [
      {
        "name": "Duphalac / Lactulax Sirup 3.33 g/5 mL (67%)",
        "form": "sirup",
        "strengthPerUnit": 3330,
        "volumePerUnit": 5,
        "unitLabel": "3.33 g / 5 mL (1 cth)",
        "bottleSizeMl": 60,
        "budAfterOpenDays": 60
      },
      {
        "name": "Opilax / Constulose Sirup 3.33 g/5 mL",
        "form": "sirup",
        "strengthPerUnit": 3330,
        "volumePerUnit": 5,
        "unitLabel": "3.33 g / 5 mL",
        "bottleSizeMl": 120,
        "budAfterOpenDays": 60
      }
    ],
    "defaultSignaTemplate": "1-2 x sehari 1 sendok takar (5 mL) sesudah makan"
  },
  {
    "id": "ped-iron-polymaltose",
    "name": "Iron Polymaltose Complex (IPC / Besi Tetes Anak)",
    "genericName": "Iron (III) Hydroxide Polymaltose Complex Tetes & Sirup",
    "category": "Suplemen Besi Antianemia Pediatrik",
    "atcCode": "B03AB05",
    "indications": [
      "Pencegahan & Pengobatan Anemia Defisiensi Besi (ADB) Anak",
      "Suplementasi Besi Profilaksis IDAI untuk Mencegah Stunting"
    ],
    "dosingType": "per_kg_per_day",
    "standardDoseMgPerKgPerDay": 3.0,
    "minDoseMgPerKgPerDay": 2.0,
    "maxDoseMgPerKgPerDay": 6.0,
    "defaultFrequencyPerDay": 1,
    "frequencyOptions": [
      {
        "label": "1 kali sehari bersama atau segera sesudah makan",
        "timesPerDay": 1,
        "intervalHours": 24
      },
      {
        "label": "2 kali sehari (Dosis terbagi untuk terapi kuratif berat)",
        "timesPerDay": 2,
        "intervalHours": 12
      }
    ],
    "maxSingleDoseMg": 100,
    "maxDailyDoseMg": 200,
    "minAgeMonths": 1,
    "maxAgeYears": 18,
    "standardAdultDoseMg": 100,
    "administrationNotes": "Sediaan Iron Polymaltose Complex (IPC) TIDAK dipengaruhi oleh makanan/susu (berbeda dengan Garam Sulfas Ferosus), sehingga AMAN dan Dianjurkan diminum bersama makanan atau jus buah untuk mencegah mual.",
    "contraindications": "Kelebihan zat besi (hemokromatosis, hemosiderosis), thalasemia mayor tanpa defisiensi besi sekunder.",
    "redFlags": [
      "Feses anak akan berubah warna menjadi kehitaman selama minum zat besi; tenangkan orang tua bahwa ini fenomena normal dan tidak berbahaya.",
      "Simpan jauh dari jangkauan anak-anak; overdosis preparat besi akut berisiko memicu syok hipovolemik dan gagal organ multipel."
    ],
    "formulations": [
      {
        "name": "Maltofer Drops 50 mg Besi/mL",
        "form": "drops",
        "strengthPerUnit": 50,
        "volumePerUnit": 1,
        "unitLabel": "50 mg Besi Elemental / mL (20 tetes)",
        "bottleSizeMl": 30,
        "budAfterOpenDays": 60
      },
      {
        "name": "Maltofer Sirup 50 mg Besi/5 mL",
        "form": "sirup",
        "strengthPerUnit": 50,
        "volumePerUnit": 5,
        "unitLabel": "50 mg Besi Elemental / 5 mL",
        "bottleSizeMl": 150,
        "budAfterOpenDays": 60
      },
      {
        "name": "Sangobion Baby Drops (Garam Besi)",
        "form": "drops",
        "strengthPerUnit": 30,
        "volumePerUnit": 1,
        "unitLabel": "30 mg Besi Elemental / mL",
        "bottleSizeMl": 15,
        "budAfterOpenDays": 30
      }
    ],
    "defaultSignaTemplate": "1 x sehari sesuai tetes berat badan bersama suapan makan"
  },
  {
    "id": "ped-clindamycin",
    "name": "Clindamycin",
    "genericName": "Clindamycin Kapsul & Puyer",
    "category": "Antibiotik Linkosamid (Anti-Stafilokokus & Anaerob)",
    "atcCode": "J01FF01",
    "indications": [
      "Infeksi Kulit & Jaringan Lunak Berat (MRSA sensitif)",
      "Osteomielitis / Artritis Septik Pediatrik",
      "Alternatif Alergi Berat Penisilin"
    ],
    "dosingType": "per_kg_per_day",
    "standardDoseMgPerKgPerDay": 20,
    "minDoseMgPerKgPerDay": 15,
    "maxDoseMgPerKgPerDay": 30,
    "defaultFrequencyPerDay": 3,
    "frequencyOptions": [
      {
        "label": "3 kali sehari (Tiap 8 jam) sesudah makan",
        "timesPerDay": 3,
        "intervalHours": 8
      },
      {
        "label": "4 kali sehari (Tiap 6 jam) untuk infeksi berat",
        "timesPerDay": 4,
        "intervalHours": 6
      }
    ],
    "maxSingleDoseMg": 450,
    "maxDailyDoseMg": 1800,
    "minAgeMonths": 1,
    "maxAgeYears": 18,
    "standardAdultDoseMg": 300,
    "administrationNotes": "Diminum dengan segelas air penuh. Jangan diminum sambil berbaring untuk mencegah iritasi dan ulserasi esofagus.",
    "contraindications": "Hipersensitivitas klindamisin atau linkomisin, riwayat kolitis pseudomembranosa terkait antibiotik.",
    "redFlags": [
      "Risiko diare akibat Clostridioides difficile (kolitis pseudomembranosa); segera hentikan obat bila timbul diare berdarah/berlendir hebat.",
      "Sediaan puyer memiliki rasa yang sangat pahit; anjurkan pemanis sirup perasa saat peracikan."
    ],
    "formulations": [
      {
        "name": "Clindamycin Kapsul 150 mg (Bahan Puyer)",
        "form": "kapsul",
        "strengthPerUnit": 150,
        "unitLabel": "150 mg / kapsul"
      },
      {
        "name": "Clindamycin Kapsul 300 mg (Bahan Puyer)",
        "form": "kapsul",
        "strengthPerUnit": 300,
        "unitLabel": "300 mg / kapsul"
      }
    ],
    "defaultSignaTemplate": "3 x sehari 1 bungkus puyer sesudah makan (HABISKAN)"
  },
  {
    "id": "ped-levocetirizine",
    "name": "Levocetirizine",
    "genericName": "Levocetirizine Dihydrochloride Drops & Sirup",
    "category": "Antihistamin H1 Generasi Kedua (Rasa Kantuk Sangat Minimal)",
    "atcCode": "R06AE09",
    "indications": [
      "Rinitis Alergi Musiman & Perennial",
      "Urtikaria Kronis Idiopatik Anak",
      "Dermatitis Alergi"
    ],
    "dosingType": "fixed_by_age",
    "standardDoseMgPerKgPerDay": 0.125,
    "minDoseMgPerKgPerDay": 0.1,
    "maxDoseMgPerKgPerDay": 0.25,
    "defaultFrequencyPerDay": 1,
    "frequencyOptions": [
      {
        "label": "1 kali sehari pada malam hari sebelum tidur",
        "timesPerDay": 1,
        "intervalHours": 24
      },
      {
        "label": "2 kali sehari (Tiap 12 jam) untuk anak usia 6 bln - 5 thn",
        "timesPerDay": 2,
        "intervalHours": 12
      }
    ],
    "maxSingleDoseMg": 5,
    "maxDailyDoseMg": 5,
    "minAgeMonths": 6,
    "maxAgeYears": 18,
    "standardAdultDoseMg": 5,
    "administrationNotes": "Dapat diminum bersama atau tanpa makanan. Efek mengantuk lebih rendah dibanding setirizin biasa, namun tetap disarankan malam hari.",
    "contraindications": "Hipersensitivitas levocetirizine/cetirizine, penyakit ginjal stadium akhir (ESRD / eGFR < 10 mL/min).",
    "redFlags": [
      "Enansiomer murni R dari setirizin dengan afinitas reseptor H1 2x lebih kuat dan potensi sedasi lebih rendah."
    ],
    "formulations": [
      {
        "name": "Xyzal Drops 5 mg/mL",
        "form": "drops",
        "strengthPerUnit": 5,
        "volumePerUnit": 1,
        "unitLabel": "5 mg / mL (pipet tetes)",
        "bottleSizeMl": 15,
        "budAfterOpenDays": 30
      },
      {
        "name": "Levocetirizine Sirup 2.5 mg/5 mL",
        "form": "sirup",
        "strengthPerUnit": 2.5,
        "volumePerUnit": 5,
        "unitLabel": "2.5 mg / 5 mL",
        "bottleSizeMl": 60,
        "budAfterOpenDays": 30
      },
      {
        "name": "Levocetirizine Tablet 5 mg",
        "form": "tablet",
        "strengthPerUnit": 5,
        "unitLabel": "5 mg / tablet"
      }
    ],
    "defaultSignaTemplate": "1 x sehari 1/2-1 sendok takar pada malam hari"
  },
  {
    "id": "ped-famotidine",
    "name": "Famotidine",
    "genericName": "Famotidine Tablet & Puyer",
    "category": "Antagonis Reseptor H2 (Pereda Asam Lambung Pediatrik)",
    "atcCode": "A02BA03",
    "indications": [
      "Gastroesophageal Reflux Disease (GERD) Pediatrik",
      "Ulkus Peptikum Anak",
      "Gastritis Erosi Akut"
    ],
    "dosingType": "per_kg_per_day",
    "minDoseMgPerKgPerDay": 0.5,
    "maxDoseMgPerKgPerDay": 1.0,
    "defaultFrequencyPerDay": 2,
    "frequencyOptions": [
      {
        "label": "2 kali sehari (Tiap 12 jam) sebelum makan / malam hari",
        "timesPerDay": 2,
        "intervalHours": 12
      },
      {
        "label": "1 kali sehari sebelum tidur malam",
        "timesPerDay": 1,
        "intervalHours": 24
      }
    ],
    "maxSingleDoseMg": 20,
    "maxDailyDoseMg": 40,
    "minAgeMonths": 3,
    "maxAgeYears": 18,
    "standardAdultDoseMg": 20,
    "administrationNotes": "Diminum 15-30 menit sebelum makan atau sebelum tidur malam.",
    "contraindications": "Hipersensitivitas famotidin atau antagonis H2 lainnya.",
    "redFlags": [
      "Pengganti utama yang jauh lebih aman pasca penarikan Ranitidin oleh BPOM/FDA akibat kontaminasi NDMA.",
      "Pada gangguan ginjal sedang hingga berat, interval dosis perlu diperpanjang."
    ],
    "formulations": [
      {
        "name": "Famotidine Tablet 20 mg (Bahan Puyer)",
        "form": "tablet",
        "strengthPerUnit": 20,
        "unitLabel": "20 mg / tablet"
      },
      {
        "name": "Famotidine Tablet 40 mg",
        "form": "tablet",
        "strengthPerUnit": 40,
        "unitLabel": "40 mg / tablet"
      }
    ],
    "defaultSignaTemplate": "2 x sehari 1 bungkus puyer 15 menit sebelum makan"
  },
  {
    "id": "ped-furosemide",
    "name": "Furosemide",
    "genericName": "Furosemide Tablet & Puyer",
    "category": "Loop Diuretic (Diuretik Kuat Pediatrik)",
    "atcCode": "C03CA01",
    "indications": [
      "Edema Paru Akut",
      "Sindrom Nefrotik dengan Retensi Cairan Masif",
      "Gagal Jantung Kongenital"
    ],
    "dosingType": "per_kg_per_dose",
    "singleDoseMinMgPerKg": 0.5,
    "singleDoseMaxMgPerKg": 2.0,
    "minDoseMgPerKgPerDay": 1.0,
    "maxDoseMgPerKgPerDay": 4.0,
    "defaultFrequencyPerDay": 2,
    "frequencyOptions": [
      {
        "label": "1-2 kali sehari pada pagi dan siang hari (hindari malam hari)",
        "timesPerDay": 2,
        "intervalHours": 12
      },
      {
        "label": "1 kali sehari pada pagi hari sesudah sarapan",
        "timesPerDay": 1,
        "intervalHours": 24
      }
    ],
    "maxSingleDoseMg": 40,
    "maxDailyDoseMg": 80,
    "minAgeMonths": 1,
    "maxAgeYears": 18,
    "standardAdultDoseMg": 40,
    "administrationNotes": "Diminum pagi hari sesudah makan. Hindari pemberian malam hari untuk mencegah anak terbangun buang air kecil (nokturia).",
    "contraindications": "Anuria refrakter, hipovolemia berat/dehidrasi, hipokalemia berat (K < 3.0 mEq/L).",
    "redFlags": [
      "Wajib pantau ketat elektrolit darah (risiko hipokalemia, hiponatremia, dan alkalosis metabolik hipokloremik).",
      "Ototoksisitas dapat terjadi pada dosis tinggi atau jika dikombinasikan dengan antibiotik aminoglikosida."
    ],
    "formulations": [
      {
        "name": "Furosemide Tablet 40 mg (Lasix - Bahan Puyer)",
        "form": "tablet",
        "strengthPerUnit": 40,
        "unitLabel": "40 mg / tablet"
      },
      {
        "name": "Furosemide Injeksi 20 mg/2 mL (Lasix Ampul)",
        "form": "injeksi",
        "strengthPerUnit": 20,
        "volumePerUnit": 2,
        "unitLabel": "20 mg / 2 mL (Ampul)"
      }
    ],
    "defaultSignaTemplate": "1-2 x sehari 1 bungkus puyer pada pagi hari sesudah makan"
  },
  // =====================================================================
  // EKSPANSI OBAT PEDIATRIK KRITIS BARU (IDAI, KEMENKES, NELSON)
  // =====================================================================
  {
    id: 'ped-captopril',
    name: 'Captopril Pediatrik',
    genericName: 'Captopril Tablet & Racikan Puyer',
    category: 'ACE Inhibitor / Antihipertensi & Gagal Jantung Anak',
    atcCode: 'C09AA01',
    indications: [
      'Gagal jantung kongestif pediatrik',
      'Hipertensi anak & stenosis arteri renalis',
      'Kardiomiopati dilatasi anak'
    ],
    dosingType: 'per_kg_per_dose',
    singleDoseMinMgPerKg: 0.1,
    singleDoseMaxMgPerKg: 0.5,
    minDoseMgPerKgPerDay: 0.3,
    maxDoseMgPerKgPerDay: 2.0,
    defaultFrequencyPerDay: 3,
    frequencyOptions: [
      { label: '3 kali sehari (Tiap 8 jam, 1 jam sebelum makan)', timesPerDay: 3, intervalHours: 8 },
      { label: '2 kali sehari (Tiap 12 jam)', timesPerDay: 2, intervalHours: 12 }
    ],
    maxSingleDoseMg: 25,
    maxDailyDoseMg: 100,
    minAgeMonths: 1,
    maxAgeYears: 18,
    standardAdultDoseMg: 25,
    administrationNotes: 'HARUS DIMINUM 1 JAM SEBELUM MAKAN ATAU PERUT KOSONG (makanan mengurangi bioavailabilitas sebesar 30-40%). Racikan puyer harus disimpan rapat dan kering.',
    contraindications: 'Riwayat angioedema terkait ACE-inhibitor, stenosis arteri renalis bilateral berat, hiperkalemia berat.',
    redFlags: [
      'Waspada hipotensi dosis pertama (first-dose hypotension); mulai dengan dosis titrasi terendah (0.1 mg/kg/dosis).',
      'Pantau ketat kreatinin serum dan kadar kalium darah (risiko hiperkalemia dan penurunan GFR mendadak).',
      'Jika muncul batuk kering refrakter yang mengganggu tidur anak, konsultasikan penggantian ke golongan ARB.'
    ],
    formulations: [
      { name: 'Captopril Tablet 12.5 mg (Bahan Puyer)', form: 'tablet', strengthPerUnit: 12.5, unitLabel: '12.5 mg / tablet' },
      { name: 'Captopril Tablet 25 mg (Bahan Puyer)', form: 'tablet', strengthPerUnit: 25, unitLabel: '25 mg / tablet' }
    ],
    defaultSignaTemplate: '3 x sehari 1 bungkus puyer 1 jam sebelum makan'
  },
  {
    id: 'ped-propranolol',
    name: 'Propranolol Pediatrik',
    genericName: 'Propranolol HCl Tablet & Puyer',
    category: 'Beta-Blocker Non-Selektif / Hemangioma & Jantung',
    atcCode: 'C07AA05',
    indications: [
      'Hemangioma infantil proliferatif (First-line IDAI & AAP)',
      'Tetralogy of Fallot (mencegah cyanotic spells)',
      'Aritmia supraventrikular & tirotoksikosis'
    ],
    dosingType: 'per_kg_per_day',
    minDoseMgPerKgPerDay: 1.0,
    maxDoseMgPerKgPerDay: 3.0,
    defaultFrequencyPerDay: 2,
    frequencyOptions: [
      { label: '2 kali sehari (Tiap 12 jam bersama/sesudah minum susu)', timesPerDay: 2, intervalHours: 12 },
      { label: '3 kali sehari (Tiap 8 jam)', timesPerDay: 3, intervalHours: 8 }
    ],
    maxSingleDoseMg: 20,
    maxDailyDoseMg: 60,
    minAgeMonths: 1,
    maxAgeYears: 18,
    standardAdultDoseMg: 40,
    administrationNotes: 'Diberikan bersama atau segera setelah makan/minum susu untuk mencegah hipoglikemia. Mulai dari dosis inisial 1 mg/kg/hari dan titrasi bertahap.',
    contraindications: 'Asma bronkial berat/bronkospasme, bradikardia sinus berat, AV block derajat 2-3, syok kardiogenik.',
    redFlags: [
      'Menutupi tanda-tanda klinis hipoglikemia (kecuali keringat dingin). Berikan edukasi tanda hipoglikemia kepada orang tua.',
      'Dapat memicu bronkospasme berat pada anak dengan riwayat wheezing / hiperreaktivitas bronkus.',
      'Jangan menghentikan obat secara mendadak (risiko rebound tachycardia dan hipertensi).'
    ],
    formulations: [
      { name: 'Propranolol Tablet 10 mg (Bahan Puyer)', form: 'tablet', strengthPerUnit: 10, unitLabel: '10 mg / tablet' },
      { name: 'Propranolol Tablet 40 mg', form: 'tablet', strengthPerUnit: 40, unitLabel: '40 mg / tablet' }
    ],
    defaultSignaTemplate: '2 x sehari 1 bungkus puyer bersama atau segera sesudah minum susu'
  },
  {
    id: 'ped-montelukast',
    name: 'Montelukast Pediatrik',
    genericName: 'Montelukast Sodium Granul Sachet & Tablet Kunyah',
    category: 'Antagonis Reseptor Leukotrien (LTRA) / Asma & Rinitis',
    atcCode: 'R03DC03',
    indications: [
      'Profilaksis & kontrol asma persisten anak',
      'Rinitis alergi musiman / perennial',
      'Pencegahan bronkospasme yang dipicu olahraga (EIB)'
    ],
    dosingType: 'fixed_by_age',
    defaultFrequencyPerDay: 1,
    frequencyOptions: [
      { label: '1 kali sehari pada malam hari sebelum tidur', timesPerDay: 1, intervalHours: 24 }
    ],
    maxSingleDoseMg: 10,
    maxDailyDoseMg: 10,
    minAgeMonths: 6,
    maxAgeYears: 18,
    standardAdultDoseMg: 10,
    administrationNotes: 'Diberikan 1 kali sehari pada malam hari. Sachet granul 4 mg dapat ditaburkan langsung ke lidah atau dicampur 1 sendok makanan lunak dingin/suhu ruang (saus apel/es krim/ASI) dan harus habis dalam 15 menit.',
    contraindications: 'Hipersensitivitas montelukast.',
    redFlags: [
      'FDA Black Box Warning: Waspada perubahan perilaku dan efek neuropsikiatrik (mimpi buruk, agitasi, agresif, depresi, atau halusinasi). Hentikan jika muncul perubahan mood ekstrem.',
      'Bukan untuk mengatasi serangan asma bronkial akut (tetap gunakan bronkodilator kerja cepat SABA/Salbutamol inhalasi).'
    ],
    formulations: [
      { name: 'Montelukast Sachet Granul 4 mg (Singulair/Monkash/Ventilair)', form: 'puyer', strengthPerUnit: 4, unitLabel: '4 mg / sachet (Usia 6 bln - 5 th)' },
      { name: 'Montelukast Tablet Kunyah 4 mg', form: 'tablet', strengthPerUnit: 4, unitLabel: '4 mg / tab kunyah (Usia 2 - 5 th)' },
      { name: 'Montelukast Tablet Kunyah 5 mg', form: 'tablet', strengthPerUnit: 5, unitLabel: '5 mg / tab kunyah (Usia 6 - 14 th)' },
      { name: 'Montelukast Tablet Salut Selaput 10 mg', form: 'tablet', strengthPerUnit: 10, unitLabel: '10 mg / tablet (>15 th)' }
    ],
    defaultSignaTemplate: '1 x sehari 1 sachet granul / tablet kunyah pada malam hari sebelum tidur'
  },
  {
    id: 'ped-desloratadine',
    name: 'Desloratadine Pediatrik',
    genericName: 'Desloratadine Sirup & Tablet',
    category: 'Antihistamin H1 Generasi ke-2 Non-Sedatif',
    atcCode: 'R06AX27',
    indications: [
      'Rinitis alergi persisten & intermiten anak',
      'Urtikaria idiopatik kronik',
      'Gatal alergi dermatitis atopi'
    ],
    dosingType: 'fixed_by_age',
    defaultFrequencyPerDay: 1,
    frequencyOptions: [
      { label: '1 kali sehari (Pagi atau malam hari)', timesPerDay: 1, intervalHours: 24 }
    ],
    maxSingleDoseMg: 5,
    maxDailyDoseMg: 5,
    minAgeMonths: 6,
    maxAgeYears: 18,
    standardAdultDoseMg: 5,
    administrationNotes: 'Dapat diminum sebelum atau sesudah makan tanpa dipengaruhi makanan. Tidak menyebabkan kantuk signifikan dibanding CTM.',
    contraindications: 'Hipersensitivitas desloratadine atau loratadine.',
    redFlags: [
      'Dosis anak 6-11 bulan: 1 mg (2 mL) 1x sehari; 1-5 tahun: 1.25 mg (2.5 mL) 1x sehari; 6-11 tahun: 2.5 mg (5 mL) 1x sehari; ≥12 tahun: 5 mg 1x sehari.',
      'Aman untuk profil hepatik dan kardiak, tidak memperpanjang interval QT pada dosis terapi.'
    ],
    formulations: [
      { name: 'Desloratadine Sirup 0.5 mg/mL (Aerius / Destavell 60 mL)', form: 'sirup', strengthPerUnit: 2.5, volumePerUnit: 5, unitLabel: '0.5 mg/mL (2.5 mg / 5 mL)', bottleSizeMl: 60, budAfterOpenDays: 30 },
      { name: 'Desloratadine Tablet 5 mg', form: 'tablet', strengthPerUnit: 5, unitLabel: '5 mg / tablet' }
    ],
    defaultSignaTemplate: '1 x sehari 1 sendok takar (sesuai usia) sebelum/sesudah makan'
  },
  {
    id: 'ped-levetiracetam',
    name: 'Levetiracetam Pediatrik',
    genericName: 'Levetiracetam Oral Solution 100 mg/mL & Tablet',
    category: 'Antikonvulsan Generasi Baru / Anti-Epilepsi Anak',
    atcCode: 'N03AX14',
    indications: [
      'Kejang onset fokal (dengan atau tanpa generalisasi sekunder)',
      'Kejang mioklonik pada juvenile myoclonic epilepsy',
      'Kejang tonik-klonik umum primer'
    ],
    dosingType: 'per_kg_per_day',
    minDoseMgPerKgPerDay: 20,
    maxDoseMgPerKgPerDay: 60,
    defaultFrequencyPerDay: 2,
    frequencyOptions: [
      { label: '2 kali sehari (Tiap 12 jam konsisten)', timesPerDay: 2, intervalHours: 12 }
    ],
    maxSingleDoseMg: 1500,
    maxDailyDoseMg: 3000,
    minAgeMonths: 1,
    maxAgeYears: 18,
    standardAdultDoseMg: 500,
    administrationNotes: 'Dapat diminum bersama atau tanpa makanan. Mulai dosis inisial 20 mg/kg/hari terbagi 2 dosis, lalu titrasi naik bertahap tiap 2 minggu hingga dosis target respon kejang (maks 60 mg/kg/hari).',
    contraindications: 'Hipersensitivitas levetiracetam atau derivat pirolidon.',
    redFlags: [
      'Waspada efek samping perubahan psikiatri dan perilaku anak (iritabilitas, agresif, emosi labil, agitasi, depresi).',
      'Jangan menghentikan obat mendadak karena dapat memicu status epileptikus.',
      'Ekskresi terutama melalui ginjal; sesuaikan dosis jika ada gangguan fungsi ginjal.'
    ],
    formulations: [
      { name: 'Levetiracetam Oral Solution 100 mg/mL (Keppra 300 mL dengan spuit oral terkalibrasi)', form: 'sirup', strengthPerUnit: 100, volumePerUnit: 1, unitLabel: '100 mg / mL (spuit oral)', bottleSizeMl: 300, budAfterOpenDays: 60 },
      { name: 'Levetiracetam Tablet 250 mg', form: 'tablet', strengthPerUnit: 250, unitLabel: '250 mg / tablet' },
      { name: 'Levetiracetam Tablet 500 mg', form: 'tablet', strengthPerUnit: 500, unitLabel: '500 mg / tablet' }
    ],
    defaultSignaTemplate: '2 x sehari dengan spuit oral takaran tepat tiap 12 jam'
  },
  {
    id: 'ped-lansoprazole',
    name: 'Lansoprazole Pediatrik',
    genericName: 'Lansoprazole Kapsul Berisi Granul Mikro & Racikan',
    category: 'Proton Pump Inhibitor (PPI) / Lambung & Esofagitis Anak',
    atcCode: 'A02BC03',
    indications: [
      'Gastroesophageal Reflux Disease (GERD) berat pada anak',
      'Esofagitis erosif',
      'Ulkus peptikum dan eradikasi H. pylori pediatrik'
    ],
    dosingType: 'per_kg_per_day',
    minDoseMgPerKgPerDay: 0.7,
    maxDoseMgPerKgPerDay: 1.5,
    defaultFrequencyPerDay: 1,
    frequencyOptions: [
      { label: '1 kali sehari (30-60 menit sebelum makan pagi)', timesPerDay: 1, intervalHours: 24 },
      { label: '2 kali sehari untuk eradikasi H. pylori (Tiap 12 jam sebelum makan)', timesPerDay: 2, intervalHours: 12 }
    ],
    maxSingleDoseMg: 30,
    maxDailyDoseMg: 60,
    minAgeMonths: 12,
    maxAgeYears: 18,
    standardAdultDoseMg: 30,
    administrationNotes: 'HARUS DIMINUM 30-60 MENIT SEBELUM SARAPAN PAGI. PERHATIAN MERACIK: Kapsul boleh dibuka dan granul mikronya dicampur cairan asam (jus apel/sirup dingin), TETAPI BUTIRAN GRANUL TIDAK BOLEH DIGERUS HALUS (karena salut enteriknya akan rusak oleh asam lambung).',
    contraindications: 'Hipersensitivitas PPI, penggunaan bersamaan rilpivirine.',
    redFlags: [
      'DILARANG MENGGERUS BUTIRAN GRANUL MIKRO! Rusaknya salut enterik menyebabkan zat aktif terdegradasi asam lambung sebelum sempat diabsorpsi di duodenum.',
      'Penggunaan jangka panjang (>8-12 minggu) berisiko hipomagnesemia, hipokalsemia, defisiensi vitamin B12, dan peningkatan infeksi saluran cerna (C. difficile).'
    ],
    formulations: [
      { name: 'Lansoprazole Kapsul 30 mg (Prosogan / Laprazol)', form: 'kapsul', strengthPerUnit: 30, unitLabel: '30 mg / kapsul' },
      { name: 'Lansoprazole Kapsul 15 mg', form: 'kapsul', strengthPerUnit: 15, unitLabel: '15 mg / kapsul' }
    ],
    defaultSignaTemplate: '1 x sehari 30-60 menit sebelum makan pagi (Granul jangan digerus)'
  },
  {
    id: 'ped-omeprazole',
    name: 'Omeprazole Pediatrik',
    genericName: 'Omeprazole Kapsul Granul Mikro & Injeksi',
    category: 'Proton Pump Inhibitor (PPI) / Antisekresi Asam Lambung',
    atcCode: 'A02BC01',
    indications: [
      'GERD refrakter pada bayi & anak',
      'Ulkus duodeni / gaster pediatrik',
      'Pendarahan saluran cerna atas'
    ],
    dosingType: 'per_kg_per_day',
    minDoseMgPerKgPerDay: 0.7,
    maxDoseMgPerKgPerDay: 1.5,
    defaultFrequencyPerDay: 1,
    frequencyOptions: [
      { label: '1 kali sehari (Pagi hari 30 menit sebelum makan)', timesPerDay: 1, intervalHours: 24 },
      { label: '2 kali sehari (Pagi dan malam sebelum makan)', timesPerDay: 2, intervalHours: 12 }
    ],
    maxSingleDoseMg: 20,
    maxDailyDoseMg: 40,
    minAgeMonths: 12,
    maxAgeYears: 18,
    standardAdultDoseMg: 20,
    administrationNotes: 'Diminum 30-60 menit sebelum sarapan. Butiran mikro di dalam kapsul boleh dicampur 1 sendok sari apel atau air putih, namun TIDAK BOLEH DIGERUS atau dikunyah.',
    contraindications: 'Hipersensitivitas omeprazole.',
    redFlags: [
      'JANGAN DIGERUS BUTIRAN MIKRO SALUT ENTERIK: Merusak lapisan pelindung lambung sehingga obat inaktif.',
      'Waspada interaksi obat yang memerlukan asam lambung untuk absorpsi (ketokonazol, itraconazole, preparat besi).'
    ],
    formulations: [
      { name: 'Omeprazole Kapsul 20 mg (Prilos / Lokev / Ozid)', form: 'kapsul', strengthPerUnit: 20, unitLabel: '20 mg / kapsul' },
      { name: 'Omeprazole Injeksi Vial 40 mg', form: 'injeksi', strengthPerUnit: 40, unitLabel: '40 mg / vial' }
    ],
    defaultSignaTemplate: '1 x sehari pagi hari 30 menit sebelum sarapan (Kapsul dibuka, granul jangan digerus)'
  },
  {
    id: 'ped-fluconazole',
    name: 'Fluconazole Pediatrik',
    genericName: 'Fluconazole Sirup Kering & Kapsul',
    category: 'Antijamur Triazol Sistemik Pediatrik',
    atcCode: 'J02AC01',
    indications: [
      'Kandidiasis orofaringeal refrakter & esofagitis jamur',
      'Kandidiasis invasif / sistemik anak',
      'Meningitis kriptokokus pediatrik'
    ],
    dosingType: 'per_kg_per_day',
    minDoseMgPerKgPerDay: 3,
    maxDoseMgPerKgPerDay: 12,
    defaultFrequencyPerDay: 1,
    frequencyOptions: [
      { label: '1 kali sehari (Dosis muatan hari ke-1 6 mg/kg, lalu 3 mg/kg/hari)', timesPerDay: 1, intervalHours: 24 },
      { label: '1 kali sehari dosis tinggi untuk infeksi invasif (6 - 12 mg/kg/hari)', timesPerDay: 1, intervalHours: 24 }
    ],
    maxSingleDoseMg: 400,
    maxDailyDoseMg: 400,
    minAgeMonths: 1,
    maxAgeYears: 18,
    standardAdultDoseMg: 150,
    administrationNotes: 'Dapat diminum bersama atau tanpa makanan. Absorpsi oral sangat tinggi (>90%). Pada kandidiasis orofaring, suspensi sebaiknya dikumur di rongga mulut beberapa detik sebelum ditelan.',
    contraindications: 'Hipersensitivitas golongan azol, penggunaan bersama terfenadin atau cisapride.',
    redFlags: [
      'Inhibitor enzim CYP2C9, CYP2C19, dan CYP3A4 moderat; waspadai peningkatan toksisitas obat lain seperti fenitoin atau teofilin.',
      'Pantau fungsi hati pada terapi jangka panjang >14 hari (risiko hepatotoksisitas).'
    ],
    formulations: [
      { name: 'Fluconazole Kapsul 50 mg (Bahan Puyer)', form: 'kapsul', strengthPerUnit: 50, unitLabel: '50 mg / kapsul' },
      { name: 'Fluconazole Kapsul 150 mg (Diflucan)', form: 'kapsul', strengthPerUnit: 150, unitLabel: '150 mg / kapsul' },
      { name: 'Fluconazole Infus 2 mg/mL (100 mL)', form: 'injeksi', strengthPerUnit: 200, volumePerUnit: 100, unitLabel: '200 mg / 100 mL' }
    ],
    defaultSignaTemplate: '1 x sehari 1 bungkus puyer / kapsul pada jam yang sama'
  },
  {
    id: 'ped-isoniazid',
    name: 'Isoniazid (INH) Pediatrik',
    genericName: 'Isoniazid Tablet & Sirup (OAT Anak)',
    category: 'Obat Anti Tuberkulosis (OAT) / Lini Pertama IDAI',
    atcCode: 'J04AC01',
    indications: [
      'Terapi TB anak (kombinasi fase intensif & lanjutan)',
      'Terapi Pencegahan Tuberkulosis (TPT) anak kontak erat TB dewasa BTA(+)'
    ],
    dosingType: 'per_kg_per_day',
    minDoseMgPerKgPerDay: 7,
    maxDoseMgPerKgPerDay: 15,
    defaultFrequencyPerDay: 1,
    frequencyOptions: [
      { label: '1 kali sehari pada pagi hari saat perut kosong (Dosis standar IDAI 10 mg/kg/hari)', timesPerDay: 1, intervalHours: 24 }
    ],
    maxSingleDoseMg: 300,
    maxDailyDoseMg: 300,
    minAgeMonths: 1,
    maxAgeYears: 18,
    standardAdultDoseMg: 300,
    administrationNotes: 'DIMINUM SAAT PERUT KOSONG (1 jam sebelum atau 2 jam setelah makan pagi) dengan air putih. Berikan suplementasi Vitamin B6 (Piridoksin) 5-10 mg/hari pada bayi, anak malnutrisi, atau HIV untuk mencegah neuropati perifer.',
    contraindications: 'Penyakit hati akut yang diinduksi obat sebelumnya, hipersensitivitas INH.',
    redFlags: [
      'Dosis terapi dan profilaksis IDAI adalah 10 mg/kg/hari (rentang 7-15 mg/kg/hari, maks 300 mg/hari).',
      'Waspada hepatotoksisitas: Hentikan obat jika SGOT/SGPT >5x batas normal atau >3x disertai gejala ikterik, mual muntah berat.',
      'Selalu sertakan Vitamin B6 (Pyridoxine) pada anak dengan gizi buruk.'
    ],
    formulations: [
      { name: 'Isoniazid Tablet 100 mg (Bahan Puyer OAT)', form: 'tablet', strengthPerUnit: 100, unitLabel: '100 mg / tablet' },
      { name: 'Isoniazid Tablet 300 mg', form: 'tablet', strengthPerUnit: 300, unitLabel: '300 mg / tablet' },
      { name: 'Isoniazid Sirup 100 mg/5 mL (Inadoxin)', form: 'sirup', strengthPerUnit: 100, volumePerUnit: 5, unitLabel: '100 mg / 5 mL', bottleSizeMl: 100, budAfterOpenDays: 30 }
    ],
    defaultSignaTemplate: '1 x sehari 1 bungkus puyer pada pagi hari 1 jam sebelum sarapan'
  },
  {
    id: 'ped-rifampicin',
    name: 'Rifampisin Pediatrik',
    genericName: 'Rifampisin Kapsul & Sirup (OAT Anak)',
    category: 'Obat Anti Tuberkulosis (OAT) / Lini Pertama IDAI',
    atcCode: 'J04AB02',
    indications: [
      'Terapi Tuberkulosis Anak (semua tipe TB paru & ekstra paru)',
      'Profilaksis meningitis meningokokus pada kontak erat anak'
    ],
    dosingType: 'per_kg_per_day',
    minDoseMgPerKgPerDay: 10,
    maxDoseMgPerKgPerDay: 20,
    defaultFrequencyPerDay: 1,
    frequencyOptions: [
      { label: '1 kali sehari saat perut kosong (Dosis standar IDAI 15 mg/kg/hari)', timesPerDay: 1, intervalHours: 24 }
    ],
    maxSingleDoseMg: 600,
    maxDailyDoseMg: 600,
    minAgeMonths: 1,
    maxAgeYears: 18,
    standardAdultDoseMg: 450,
    administrationNotes: 'HARUS DIMINUM SAAT PERUT KOSONG (1 jam sebelum sarapan). Edukasi orang tua bahwa cairan tubuh (urin, keringat, air mata, air liur) akan BERWARNA MERAH-ORANYE dan ini sama sekali tidak berbahaya.',
    contraindications: 'Ikterus obstruktif berat, hipersensitivitas rifampisin.',
    redFlags: [
      'Induktor kuat enzim hepar CYP450; menurunkan efektivitas banyak obat lain.',
      'Jangan gunakan dalam bentuk puyer racikan terbuka terlalu lama karena rifampisin higroskopis dan mudah teroksidasi.',
      'Dosis IDAI adalah 15 mg/kg/hari (rentang 10-20 mg/kg/hari, maks 600 mg/hari).'
    ],
    formulations: [
      { name: 'Rifampisin Kapsul 150 mg (Bahan Puyer OAT)', form: 'kapsul', strengthPerUnit: 150, unitLabel: '150 mg / kapsul' },
      { name: 'Rifampisin Kapsul 300 mg', form: 'kapsul', strengthPerUnit: 300, unitLabel: '300 mg / kapsul' },
      { name: 'Rifampisin Sirup 100 mg/5 mL (Rimactane)', form: 'sirup', strengthPerUnit: 100, volumePerUnit: 5, unitLabel: '100 mg / 5 mL', bottleSizeMl: 50, budAfterOpenDays: 30 }
    ],
    defaultSignaTemplate: '1 x sehari 1 bungkus puyer / kapsul pagi hari 1 jam sebelum sarapan'
  },
  {
    id: 'ped-pyrazinamide',
    name: 'Pirazinamid Pediatrik',
    genericName: 'Pirazinamid Tablet (OAT Fase Intensif Anak)',
    category: 'Obat Anti Tuberkulosis (OAT) / Lini Pertama IDAI',
    atcCode: 'J04AK01',
    indications: [
      'Terapi TB Anak fase intensif (2 bulan pertama kombinasi RHZ)'
    ],
    dosingType: 'per_kg_per_day',
    minDoseMgPerKgPerDay: 30,
    maxDoseMgPerKgPerDay: 40,
    defaultFrequencyPerDay: 1,
    frequencyOptions: [
      { label: '1 kali sehari bersama makanan / sesudah makan (Dosis standar IDAI 35 mg/kg/hari)', timesPerDay: 1, intervalHours: 24 }
    ],
    maxSingleDoseMg: 1500,
    maxDailyDoseMg: 2000,
    minAgeMonths: 1,
    maxAgeYears: 18,
    standardAdultDoseMg: 500,
    administrationNotes: 'Diminum 1 kali sehari bersama atau segera sesudah makan untuk mengurangi keluhan mual/iritasi lambung. Hanya digunakan pada fase intensif 2 bulan pertama pengobatan TB.',
    contraindications: 'Kerusakan hepar parah, hiperurisemia berat dengan artritis pirai.',
    redFlags: [
      'Dosis IDAI adalah 35 mg/kg/hari (rentang 30-40 mg/kg/hari).',
      'Paling hepatotoksik di antara OAT lini pertama; pantau gejala ikterik dan fungsi hati.',
      'Dapat menyebabkan hiperurisemia dan artralgia ringan (nyeri sendi).'
    ],
    formulations: [
      { name: 'Pirazinamid Tablet 500 mg (Bahan Puyer OAT)', form: 'tablet', strengthPerUnit: 500, unitLabel: '500 mg / tablet' }
    ],
    defaultSignaTemplate: '1 x sehari 1 bungkus puyer sesudah sarapan selama fase intensif 2 bulan'
  },
  {
    id: 'ped-oat-fdc-anak',
    name: 'OAT KDT / FDC Anak (RHZ & RH)',
    genericName: 'Kombinasi Dosis Tetap (FDC) Anak Dispersible Tablet',
    category: 'Regimen Standar TB Anak IDAI & Kemenkes RI',
    atcCode: 'J04AM02',
    indications: [
      'Terapi Tuberkulosis Anak Sensitif Obat (Regimen Standar Kemenkes RI & IDAI)'
    ],
    dosingType: 'fixed_by_weight',
    defaultFrequencyPerDay: 1,
    frequencyOptions: [
      { label: '1 kali sehari pagi hari saat perut kosong (Dilarutkan dalam air)', timesPerDay: 1, intervalHours: 24 }
    ],
    maxSingleDoseMg: 4,
    maxDailyDoseMg: 4,
    minAgeMonths: 1,
    maxAgeYears: 18,
    standardAdultDoseMg: 3,
    administrationNotes: 'TABLET DISPERSIBEL: Larutkan tablet dalam 1 sendok makan air putih atau ASI/susu formula. Diminum pagi hari 1 jam sebelum sarapan atau 2 jam sesudah makan. Paduan Fase Intensif (2 bulan): RHZ (R 75 mg + H 50 mg + Z 150 mg); Fase Lanjutan (4 bulan): RH (R 75 mg + H 50 mg).',
    contraindications: 'Hipersensitivitas komponen OAT, gangguan hepar berat.',
    redFlags: [
      'Panduan Dosis FDC Anak Berdasarkan Berat Badan: BB 5-9 kg = 1 tab; BB 10-14 kg = 2 tab; BB 15-19 kg = 3 tab; BB 20-32 kg = 4 tab; BB >33 kg gunakan FDC Dewasa.',
      'Waspadai urin dan cairan tubuh berubah oranye-kemerahan (efek rifampisin normal).',
      'Wajib diminum teratur setiap hari selama 6 bulan penuh untuk mencegah resistensi obat (TB-RO).'
    ],
    formulations: [
      { name: 'FDC Fase Intensif Anak (RHZ 75/50/150 mg) Dispersible Tab', form: 'tablet', strengthPerUnit: 1, unitLabel: '1 tablet dispersibel RHZ (75/50/150 mg)' },
      { name: 'FDC Fase Lanjutan Anak (RH 75/50 mg) Dispersible Tab', form: 'tablet', strengthPerUnit: 1, unitLabel: '1 tablet dispersibel RH (75/50 mg)' }
    ],
    defaultSignaTemplate: '1 x sehari (sesuai BB) dilarutkan dalam 1 sendok air pagi hari sebelum makan'
  },
  {
    id: 'ped-sildenafil',
    name: 'Sildenafil Pediatrik',
    genericName: 'Sildenafil Sitrat Tablet & Racikan Puyer',
    category: 'Inhibitor Fosfodiesterase-5 (PDE-5) / Hipertensi Pulmonal Anak',
    atcCode: 'G04BE03',
    indications: [
      'Hipertensi Arteri Pulmonal (HAP) pediatrik',
      'Penyakit Jantung Bawaan (PJB) pirau kiri-ke-kanan dengan hipertensi pulmonal',
      'Pasca operasi koreksi jantung anak'
    ],
    dosingType: 'per_kg_per_dose',
    singleDoseMinMgPerKg: 0.5,
    singleDoseMaxMgPerKg: 1.0,
    minDoseMgPerKgPerDay: 1.5,
    maxDoseMgPerKgPerDay: 3.0,
    defaultFrequencyPerDay: 3,
    frequencyOptions: [
      { label: '3-4 kali sehari (Tiap 6-8 jam)', timesPerDay: 3, intervalHours: 8 },
      { label: '4 kali sehari (Tiap 6 jam)', timesPerDay: 4, intervalHours: 6 }
    ],
    maxSingleDoseMg: 20,
    maxDailyDoseMg: 60,
    minAgeMonths: 1,
    maxAgeYears: 18,
    standardAdultDoseMg: 20,
    administrationNotes: 'Dapat diminum bersama atau tanpa makanan. Mulai dosis inisial 0.5 mg/kg/dosis tiap 8 jam, lalu dapat dititrasi hingga 1 mg/kg/dosis (maks 20 mg/dosis 3x sehari).',
    contraindications: 'Penggunaan bersama donor nitrat/nitrit organik (risiko kolaps kardiovaskular dan hipotensi berat fatal).',
    redFlags: [
      'KONTRAINDIKASI MUTLAK bersama golongan nitrat (gliseril trinitrat / ISDN).',
      'Waspada hipotensi sistemik, flushing, dan gangguan penglihatan.',
      'Hindari penghentian mendadak untuk mencegah krisis hipertensi pulmonal rebound.'
    ],
    formulations: [
      { name: 'Sildenafil Tablet 20 mg (Revatio / Viarsil Bahan Puyer)', form: 'tablet', strengthPerUnit: 20, unitLabel: '20 mg / tablet' },
      { name: 'Sildenafil Tablet 50 mg', form: 'tablet', strengthPerUnit: 50, unitLabel: '50 mg / tablet' }
    ],
    defaultSignaTemplate: '3 x sehari 1 bungkus puyer tiap 8 jam secara teratur'
  },
  {
    id: 'ped-levothyroxine',
    name: 'Levothyroxine Pediatrik',
    genericName: 'Levothyroxine Sodium Tablet & Racikan Puyer',
    category: 'Hormon Tiroid / Hipotiroidisme Kongenital Neonatus & Anak',
    atcCode: 'H03AA01',
    indications: [
      'Hipotiroidisme Kongenital (Skrining Hipotiroid Kongenital / SHK Positif)',
      'Hipotiroidisme didapat pada anak',
      'Struma eutiroid'
    ],
    dosingType: 'per_kg_per_day',
    minDoseMgPerKgPerDay: 0.010, // 10 mcg/kg/day
    maxDoseMgPerKgPerDay: 0.015, // 15 mcg/kg/day
    defaultFrequencyPerDay: 1,
    frequencyOptions: [
      { label: '1 kali sehari pada pagi hari (30-60 menit sebelum minum susu/sarapan)', timesPerDay: 1, intervalHours: 24 }
    ],
    maxSingleDoseMg: 0.2, // 200 mcg
    maxDailyDoseMg: 0.2,
    minAgeMonths: 0, // Neonatus sejak hari pertama
    maxAgeYears: 18,
    standardAdultDoseMg: 0.1, // 100 mcg
    administrationNotes: 'DOSIS DALAM MIKROGRAM (mcg)! Dosis neonatus 0-3 bulan: 10-15 mcg/kg/hari. Tablet digerus halus dan dilarutkan dalam 1-2 mL air putih atau ASI/sufor dalam sendok kecil, langsung diminumkan saat perut kosong pagi hari. JANGAN CAMPUR dengan susu kedelai atau suplemen besi/kalsium (menghambat absorpsi).',
    contraindications: 'Tirotoksikosis yang tidak diobati, infark miokard akut, insufisiensi adrenal yang belum terkoreksi.',
    redFlags: [
      'PENTING: Dosis dalam MIKROGRAM (mcg), bukan miligram! Kesalahan konversi mcg ke mg dapat berakibat fatal.',
      'Inisiasi terapi sebelum usia 2 minggu sangat krusial untuk mencegah retardasi mental ireversibel pada hipotiroid kongenital.',
      'Pisahkan minimal 4 jam dari preparat zat besi, kalsium, atau susu kedelai.'
    ],
    formulations: [
      { name: 'Levothyroxine Tablet 25 mcg (Euthyrox 25)', form: 'tablet', strengthPerUnit: 0.025, unitLabel: '25 mcg / tablet' },
      { name: 'Levothyroxine Tablet 50 mcg (Euthyrox 50)', form: 'tablet', strengthPerUnit: 0.050, unitLabel: '50 mcg / tablet' },
      { name: 'Levothyroxine Tablet 100 mcg (Euthyrox 100)', form: 'tablet', strengthPerUnit: 0.100, unitLabel: '100 mcg / tablet' }
    ],
    defaultSignaTemplate: '1 x sehari 1 bungkus puyer dilarutkan air pagi hari saat perut kosong'
  },
  {
    id: 'ped-clarithromycin',
    name: 'Clarithromycin Pediatrik',
    genericName: 'Clarithromycin Sirup Kering & Tablet',
    category: 'Antibiotik Makrolida Spektrum Luas',
    atcCode: 'J01FA09',
    indications: [
      'Pneumonia komunitas (CAP) atipik pediatrik',
      'Faringitis / Tonsilitis streptokokus',
      'Sinusitis maksilaris akut',
      'Eradikasi H. pylori kombinasi'
    ],
    dosingType: 'per_kg_per_day',
    minDoseMgPerKgPerDay: 15,
    maxDoseMgPerKgPerDay: 15,
    defaultFrequencyPerDay: 2,
    frequencyOptions: [
      { label: '2 kali sehari (Tiap 12 jam bersama atau sesudah makan)', timesPerDay: 2, intervalHours: 12 }
    ],
    maxSingleDoseMg: 500,
    maxDailyDoseMg: 1000,
    minAgeMonths: 6,
    maxAgeYears: 18,
    standardAdultDoseMg: 500,
    administrationNotes: 'Dapat diminum bersama atau tanpa makanan. PERINGATAN PENYIMPANAN: Sirup kering rekonstitusi HARUS DISIMPAN PADA SUHU RUANG (15-30°C). JANGAN SIMPAN DI LEMARI ES karena suhu dingin memicu presipitasi mikrokapsul dan rasa menjadi sangat pahit.',
    contraindications: 'Hipersensitivitas makrolida, riwayat perpanjangan interval QT atau aritmia ventrikel, penggunaan bersama astemizol, cisapride, terfenadin, ergotamin.',
    redFlags: [
      'JANGAN SIMPAN SIRUP DI LEMARI ES/KULKAS! Suhu dingin merusak mikroenkapsulasi rasa sehingga sirup menjadi sangat pahit dan ditolak anak.',
      'Inhibitor poten enzim CYP3A4; awasi interaksi dengan karbamazepin, teofilin, siklosporin.'
    ],
    formulations: [
      { name: 'Clarithromycin Sirup Kering 125 mg/5 mL (Abbotic / Bicrolid 60 mL)', form: 'sirup', strengthPerUnit: 125, volumePerUnit: 5, unitLabel: '125 mg / 5 mL (1 cth)', bottleSizeMl: 60, budAfterOpenDays: 14 },
      { name: 'Clarithromycin Sirup Forte Kering 250 mg/5 mL', form: 'sirup_forte', strengthPerUnit: 250, volumePerUnit: 5, unitLabel: '250 mg / 5 mL (1 cth)', bottleSizeMl: 60, budAfterOpenDays: 14 },
      { name: 'Clarithromycin Tablet 500 mg', form: 'tablet', strengthPerUnit: 500, unitLabel: '500 mg / tablet' }
    ],
    defaultSignaTemplate: '2 x sehari 1 sendok takar tiap 12 jam (HABISKAN, simpan suhu ruang)'
  }
];


