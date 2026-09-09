import { DiseaseFlowchartData } from '../clinicalFlowchartData';

/**
 * Algoritma Interaktif Klinis: Dislipidemia & ASCVD
 * Standar Konsensus PERKI 2023 / ESC/EAS Dyslipidemia Guidelines / AHA/ACC 2018
 */
export const FLOWCHART_DYSLIPIDEMIA: DiseaseFlowchartData = {
  id: 'flowchart-dyslipidemia',
  diseaseName: 'Dislipidemia & Penyakit Kardiovaskular Aterosklerotik (ASCVD)',
  shortSubtitle: 'Algoritma Stratifikasi Risiko Kardiovaskular, Target LDL-C Agresif, dan Terapi Penurun Lipid Bertingkat',
  category: 'Kardiovaskular & Endokrin',
  icd10: 'E78.5 (Hyperlipidemia, unspecified) / I25.1 (Atherosclerotic heart disease)',
  bannerGradient: 'from-purple-950 via-indigo-950 to-slate-950',
  accentColor: 'purple',
  classificationTitle: 'Kategori Risiko Kardiovaskular Total & Target Kadar LDL-C (Standar PERKI 2023 / ESC 2019)',
  classificationLevels: [
    {
      id: 'risk-extreme',
      label: 'RISIKO EKSTRIM (EXTREME RISK)',
      criteria: 'ASCVD klinis berulang dalam < 2 tahun, atau ASCVD + DM berat / CKD lanjut / Hiperkolesterolemia Familial (FH)',
      badgeColor: 'bg-rose-700 text-white',
      textColor: 'text-rose-800 dark:text-rose-300',
      bgColor: 'bg-rose-50/80 dark:bg-rose-950/40',
      borderColor: 'border-rose-300 dark:border-rose-700',
      clinicalAction: 'Target LDL-C < 40 mg/dL (< 1.0 mmol/L) ATAU reduksi ≥ 50%. Kombinasi agresif sejak awal: Statin Dosis Maksimal + Ezetimibe ± PCSK9 Inhibitor.'
    },
    {
      id: 'risk-very-high',
      label: 'RISIKO SANGAT TINGGI (VERY HIGH RISK)',
      criteria: 'ASCVD klinis terdokumentasi (riwayat ACS, CABG, PCI, Stroke iskemik, PAD), DM dengan kerusakan organ target (TOD), CKD berat (eGFR < 30)',
      badgeColor: 'bg-red-600 text-white',
      textColor: 'text-red-800 dark:text-red-300',
      bgColor: 'bg-red-50/80 dark:bg-red-950/40',
      borderColor: 'border-red-300 dark:border-red-700',
      clinicalAction: 'Target LDL-C < 55 mg/dL (< 1.4 mmol/L) DAN reduksi ≥ 50% dari baseline. Inisiasi Statin intensitas tinggi toleransi maksimal.'
    },
    {
      id: 'risk-high',
      label: 'RISIKO TINGGI (HIGH RISK)',
      criteria: 'Faktor risiko tunggal sangat tinggi (Kolesterol total > 310 mg/dL, LDL > 190 mg/dL, TD ≥ 180/110 mmHg), DM tanpa TOD durasi ≥ 10 tahun, CKD sedang (eGFR 30-59)',
      badgeColor: 'bg-amber-600 text-white',
      textColor: 'text-amber-800 dark:text-amber-300',
      bgColor: 'bg-amber-50/80 dark:bg-amber-950/40',
      borderColor: 'border-amber-300 dark:border-amber-700',
      clinicalAction: 'Target LDL-C < 70 mg/dL (< 1.8 mmol/L) DAN reduksi ≥ 50%. Inisiasi Statin intensitas tinggi atau intensitas sedang dosis optimal.'
    },
    {
      id: 'risk-moderate',
      label: 'RISIKO SEDANG (MODERATE RISK)',
      criteria: 'Pasien DM muda (tipe 1 usia < 35 thn / tipe 2 usia < 50 thn) durasi < 10 thn tanpa faktor risiko lain, skor SCORE2 1% hingga < 5%',
      badgeColor: 'bg-yellow-500 text-slate-900',
      textColor: 'text-yellow-800 dark:text-yellow-300',
      bgColor: 'bg-yellow-50/80 dark:bg-yellow-950/40',
      borderColor: 'border-yellow-300 dark:border-yellow-700',
      clinicalAction: 'Target LDL-C < 100 mg/dL (< 2.6 mmol/L). Modifikasi gaya hidup intensif; pertimbangkan Statin intensitas sedang jika tidak mencapai target.'
    },
    {
      id: 'risk-low',
      label: 'RISIKO RENDAH (LOW RISK)',
      criteria: 'Individu tanpa faktor risiko kardiovaskular mayor, estimasi skor risiko SCORE2 < 1%',
      badgeColor: 'bg-emerald-600 text-white',
      textColor: 'text-emerald-700 dark:text-emerald-300',
      bgColor: 'bg-emerald-50/80 dark:bg-emerald-950/40',
      borderColor: 'border-emerald-300 dark:border-emerald-700',
      clinicalAction: 'Target LDL-C < 116 mg/dL (< 3.0 mmol/L). Terapi utama modifikasi gaya hidup dan pola makan sehat tanpa obat penurun lipid rutin.'
    }
  ],
  flowchartTitle: 'Algoritma Keputusan Terapi Penurunan Lipid (Treat-to-Target Protocol)',
  lifestyleModifications: [
    {
      title: 'Restriksi Asam Lemak Jenuh & Trans',
      impact: 'Menurunkan LDL-C 5 - 10%',
      details: 'Ganti asam lemak jenuh (< 7% total kalori harian) dengan asam lemak tak jenuh ganda (MUFA/PUFA) seperti minyak zaitun, canola, dan hindari lemak trans buatan (gorengan, margarin terhidrogenasi).'
    },
    {
      title: 'Tingkatkan Asupan Serat Larut & Fitosterol',
      impact: 'Menurunkan LDL-C 5 - 8%',
      details: 'Konsumsi serat larut air (oatmeal, legum, apel) 10-25 gram/hari dan fitosterol tanaman 2 gram/hari yang secara kompetitif menghambat absorpsi kolesterol di usus halus.'
    },
    {
      title: 'Aktivitas Fisik Aerobik Teratur',
      impact: 'Menaikkan HDL-C 3 - 6 mg/dL & Menurunkan Trigliserida 15 - 25%',
      details: 'Latihan fisik intensitas sedang (brisk walking, bersepeda, renang) minimal 150 menit per minggu atau intensitas berat 75 menit per minggu.'
    },
    {
      title: 'Pengendalian Berat Badan & Penghentian Merokok',
      impact: 'Mengurangi pembentukan plak ateroma & menormalkan profil lipid',
      details: 'Target IMT 18.5 - 22.9 kg/m2 (standar Asia Pasifik) dan lingkar pinggang < 90 cm (pria) / < 80 cm (wanita). Stop merokok total untuk mencegah disfungsi endotel pembuluh darah.'
    }
  ],
  comorbidProfiles: [
    {
      name: 'Pasca Sindrom Koroner Akut (Post-ACS)',
      icon: '⚡',
      targetBP: 'Target LDL < 55 mg/dL (atau < 40 jika berulang < 2 thn)',
      firstLineDrug: 'Atorvastatin 80 mg atau Rosuvastatin 40 mg (High-Intensity Statin)',
      rationale: 'Efek pleiotropik statin menstabilkan plak aterosklerosis yang rentan ruptur, meredam inflamasi vaskular sistemik, dan menurunkan mortalitas rekuren secara signifikan.'
    },
    {
      name: 'Diabetes Melitus Tipe 2 (DM Dewasa)',
      icon: '🩸',
      targetBP: 'Target LDL < 70 mg/dL (atau < 55 mg/dL jika ada TOD)',
      firstLineDrug: 'Statin Intensitas Tinggi atau Sedang (Atorvastatin 20-40 mg / Rosuvastatin 10-20 mg)',
      rationale: 'Dislipidemia diabetik ditandai partikel small dense LDL yang sangat aterogenik, trigliserida tinggi, dan HDL rendah. Statin adalah terapi protektif lini pertama mutlak.'
    },
    {
      name: 'Penyakit Ginjal Kronis (CKD Non-Dialisis)',
      icon: '🧪',
      targetBP: 'Target LDL reduksi ≥ 50% / < 70 mg/dL',
      firstLineDrug: 'Atorvastatin 20-40 mg (Tidak memerlukan penyesuaian dosis ginjal) atau Ezetimibe add-on',
      rationale: 'Pasien CKD memiliki risiko kejadian aterotrombotik yang amat tinggi. Atorvastatin diekskresi terutama lewat hepar sehingga paling aman pada insufisiensi ginjal berat.'
    },
    {
      name: 'Hipertrigliseridemia Berat (TG ≥ 500 mg/dL)',
      icon: '⚠️',
      targetBP: 'Target Trigliserida < 500 mg/dL (prioritas cegah pankreatitis)',
      firstLineDrug: 'Fenofibrat 100-200 mg/hari PO + Diet sangat rendah lemak sederhana',
      rationale: 'Kadar TG > 500 mg/dL (khususnya > 1000 mg/dL) membawa risiko darurat pankreatitis akut akibat chylomicronemia. Fibrat merupakan aktivator PPAR-alpha terkuat untuk klirens TG.'
    }
  ],
  flowchartSteps: [
    {
      stepId: 'step-1-initiation',
      stepNumber: 1,
      stageBadge: 'INISIASI AWAL: STRATIFIKASI & STATIN',
      title: 'Stratifikasi Risiko Kardiovaskular & Inisiasi Statin Toleransi Maksimal',
      subtitle: 'Tentukan kategori risiko total dan mulai terapi statin intensitas sesuai target penurunan LDL',
      timeline: 'Minggu ke-0 (Saat Terdiagnosis atau Pasca Kejadian Akut)',
      description: 'Klasifikasikan pasien ke dalam kategori risiko (Risiko Sangat Tinggi/Tinggi/Sedang). Untuk risiko sangat tinggi (seperti ACS, stroke, DM dengan komplikasi), inisiasi langsung Statin Intensitas Tinggi tanpa menunda waktu.',
      branchType: 'general',
      targetBP: 'Reduksi LDL-C ≥ 50% dan mencapai target spesifik kategori risiko',
      drugs: [
        {
          drugName: 'Atorvastatin',
          dosage: '40 - 80 mg 1x/hari malam hari (High-Intensity)',
          role: 'Lini Pertama Utama (EBM Terbukti Proteksi Kardiovaskular Luas)',
          fornasTier: 'Faskes 1/2/3',
          isPreferred: true
        },
        {
          drugName: 'Rosuvastatin',
          dosage: '20 - 40 mg 1x/hari malam hari (High-Intensity)',
          role: 'Alternatif High-Intensity (Potensi Penurunan LDL-C hingga 55-60%)',
          fornasTier: 'Faskes 2/3',
          isPreferred: true
        },
        {
          drugName: 'Simvastatin',
          dosage: '20 - 40 mg 1x/hari malam hari (Moderate-Intensity)',
          role: 'Alternatif Faskes Primer Risiko Sedang (Catatan: Dosis 80 mg TIDAK direkomendasikan karena risiko miopati)',
          fornasTier: 'Faskes 1/2/3',
          isPreferred: false
        }
      ],
      escalationTrigger: 'LDL-C belum mencapai target penurunan ≥ 50% atau target absolut risiko setelah 4 - 12 minggu terapi statin dosis maksimal.',
      clinicalPearls: 'Periksa profil lipid baseline, ALT/AST, dan eGFR sebelum memulai. Statin intensitas tinggi menurunkan LDL ≥ 50%, intensitas sedang menurunkan 30-49%. Jangan gunakan Simvastatin 80 mg karena risiko rabdomiolisis tinggi.'
    },
    {
      stepId: 'step-2-evaluation',
      stepNumber: 2,
      stageBadge: 'EVALUASI 4-12 MINGGU',
      title: 'Evaluasi Kepatuhan, Toleransi Enzim Hepar & Otot, serta Pencapaian Target',
      subtitle: 'Monitoring laboratoris respons terapi dan titrasi dosis ke dosis maksimal yang dapat ditoleransi',
      timeline: 'Minggu ke-4 hingga ke-12 setelah inisiasi atau perubahan dosis',
      description: 'Lakukan pemeriksaan profil lipid ulang (Kolesterol Total, LDL, HDL, Trigliserida). Nilai adanya gejala klinis mialgia atau peningkatan enzim hepar (SGPT) > 3x batas atas normal (ULN). Titrasi statin hingga dosis maksimal tertoleransi.',
      branchType: 'escalation',
      targetBP: 'Target Sangat Tinggi: LDL < 55 mg/dL | Target Tinggi: LDL < 70 mg/dL',
      drugs: [
        {
          drugName: 'Atorvastatin (Titrasi Maksimal)',
          dosage: '80 mg 1x/hari (atau dosis toleransi tertinggi misal 40 mg)',
          role: 'Optimasi Dosis Statin Tunggal Sebelum Kombinasi',
          fornasTier: 'Faskes 1/2/3',
          isPreferred: true
        },
        {
          drugName: 'Rosuvastatin (Titrasi Maksimal)',
          dosage: '40 mg 1x/hari',
          role: 'Optimasi Dosis Statin Tunggal',
          fornasTier: 'Faskes 2/3',
          isPreferred: true
        }
      ],
      escalationTrigger: 'Target LDL-C tetap belum tercapai meskipun sudah menggunakan statin dosis maksimal toleransi selama 4-12 minggu.',
      clinicalPearls: 'Jika pasien mengalami mialgia tanpa kenaikan CK berat, pertimbangkan "Statin De-challenge & Re-challenge", penurunan dosis statin, atau beralih ke molekul statin lain (misal dari Atorvastatin ke Rosuvastatin hidrofilik) sebelum menyatakan intoleransi statin total.'
    },
    {
      stepId: 'step-3-combination-ezetimibe',
      stepNumber: 3,
      stageBadge: 'KOMBINASI LINI 2: ADD-ON EZETIMIBE',
      title: 'Kombinasi Statin Dosis Maksimal + Ezetimibe 10 mg',
      subtitle: 'Blokade ganda biosintesis kolesterol hepar dan absorpsi kolesterol enterosit usus',
      timeline: 'Setelah evaluasi minggu ke-12 jika target belum tercapai',
      description: 'Tambahkan Ezetimibe 10 mg ke dalam regimen statin. Kombinasi ini memberikan tambahan reduksi LDL-C sebesar 15-20% (ekivalen dengan menaikkan dosis statin 3 kali lipat aturan "Rule of Six") tanpa meningkatkan efek samping miopati.',
      branchType: 'escalation',
      targetBP: 'Pencapaian target LDL-C risiko sangat tinggi < 55 mg/dL atau risiko ekstrim < 40 mg/dL',
      drugs: [
        {
          drugName: 'Ezetimibe',
          dosage: '10 mg 1x/hari (dapat diminum bersamaan atau terpisah dari statin)',
          role: 'Lini Kedua Wajib Kombinasi (IMPROVE-IT Trial Proven)',
          fornasTier: 'Faskes 2/3',
          isPreferred: true
        },
        {
          drugName: 'Statin + Ezetimibe Single-Pill Combination (SPC)',
          dosage: 'Atorvastatin 20/10 mg, 40/10 mg atau Rosuvastatin 10/10 mg, 20/10 mg',
          role: 'Meningkatkan Kepatuhan Minum Obat Pasien (Adherence Booster)',
          fornasTier: 'Faskes 2/3',
          isPreferred: true
        }
      ],
      escalationTrigger: 'Pasien risiko sangat tinggi atau ekstrim yang LDL-C tetap ≥ 55 mg/dL setelah terapi kombinasi Statin Maksimal + Ezetimibe selama minimal 4-8 minggu.',
      clinicalPearls: 'Ezetimibe menghambat protein transpor Niemann-Pick C1-Like 1 (NPC1L1) di brush border usus halus. Kombinasi statin + ezetimibe terbukti secara klinis (IMPROVE-IT) menurunkan kejadian kardiovaskular berulang pada pasien pasca ACS.'
    },
    {
      stepId: 'step-4-pcsk9-inhibitor',
      stepNumber: 4,
      stageBadge: 'TERAPI LANJUTAN: PCSK9 INHIBITOR',
      title: 'Penambahan Antibodi Monoklonal Anti-PCSK9 (Evolocumab / Alirocumab)',
      subtitle: 'Pilihan terapi untuk pasien risiko sangat tinggi refrakter atau Hiperkolesterolemia Familial',
      timeline: 'Kardiovaskular Refrakter Pasca Terapi Oral Dual Maksimal',
      description: 'Pada pasien risiko sangat tinggi atau ekstrim yang tidak mencapai target LDL-C dengan kombinasi Statin dosis maksimal + Ezetimibe, atau pada pasien dengan intoleransi statin absolut terkonfirmasi, tambahkan penghambat PCSK9 subkutan.',
      branchType: 'resistant',
      targetBP: 'Target Ekstrim: LDL-C < 40 mg/dL | Reduksi tambahan hingga 50-60%',
      drugs: [
        {
          drugName: 'Evolocumab (Repatha)',
          dosage: '140 mg SC setiap 2 minggu ATAU 420 mg SC sekali sebulan',
          role: 'PCSK9 Inhibitor (FOURIER Trial Proven Menurunkan MACE)',
          fornasTier: 'Faskes 3 / Restriksi Khusus Dokter Spesialis Jantung',
          isPreferred: true
        },
        {
          drugName: 'Alirocumab (Praluent)',
          dosage: '75 - 150 mg SC setiap 2 minggu',
          role: 'PCSK9 Inhibitor (ODYSSEY Outcomes Trial Proven)',
          fornasTier: 'Faskes 3 / Restriksi Khusus',
          isPreferred: true
        }
      ],
      escalationTrigger: 'Evaluasi respons berkala tiap 6 bulan; bila target tercapai pertahankan terapi jangka panjang.',
      clinicalPearls: 'PCSK9 memecah reseptor LDL di hepatosit. Menghambat PCSK9 melipatgandakan jumlah reseptor LDL di permukaan hepar sehingga klirens LDL plasma meningkat drastis hingga 60%. Diberikan via autoinjector pena SC.'
    },
    {
      stepId: 'step-5-hypertriglyceridemia',
      stepNumber: 5,
      stageBadge: 'FENOTIPE KHUSUS: HIPERTRIGLISERIDEMIA',
      title: 'Tatalaksana Hipertrigliseridemia Berat (TG ≥ 500 mg/dL) & Risiko Pankreatitis',
      subtitle: 'Prioritas terapi menurunkan risiko inflamasi pankreas akut sebelum target LDL-C',
      timeline: 'Segera bila Trigliserida Serologis ≥ 500 mg/dL (atau > 1000 mg/dL)',
      description: 'Bila trigliserida serum puasa ≥ 500 mg/dL, target primer adalah mencegah pankreatitis akut melalui inisiasi golongan Fibrat dosis penuh, restriksi lemak makanan ketat (< 15% kalori), dan penghentian alkohol total. Setelah TG < 500 mg/dL, target beralih kembali ke LDL-C / Non-HDL-C.',
      branchType: 'comorbid',
      comorbidTarget: 'Target Cepat: Trigliserida < 500 mg/dL (Ideal < 150 mg/dL)',
      drugs: [
        {
          drugName: 'Fenofibrat (Micronized)',
          dosage: '100 - 200 mg 1x/hari bersama makan malam',
          role: 'Lini Pertama Hipertrigliseridemia (Paling Aman Dikombinasi dengan Statin)',
          fornasTier: 'Faskes 1/2/3',
          isPreferred: true
        },
        {
          drugName: 'Asam Lemak Omega-3 Murni (Icosapent Ethyl / EPA murni)',
          dosage: '2 gram 2x/hari (Total 4 gram/hari) bersama makan',
          role: 'Terapi Tambahan Pasien ASCVD dengan Residual TG 150-499 mg/dL (REDUCE-IT Trial)',
          fornasTier: 'Faskes 2/3',
          isPreferred: false
        },
        {
          drugName: 'Gemfibrozil',
          dosage: '600 mg 2x/hari 30 menit sebelum makan pagi & malam',
          role: 'Alternatif Fibrat Monoterapi (KONTRAINDIKASI MUTLAK bila bersama Statin)',
          fornasTier: 'Faskes 1/2',
          isPreferred: false
        }
      ],
      escalationTrigger: 'TG tetap > 500 mg/dL: rujuk ke spesialis endokrin/kardiologi untuk evaluasi kilomikronemia familial atau plasmaferesis.',
      clinicalPearls: 'PERINGATAN KRITIS INTERAKSI: Gemfibrozil menghambat glukuronidasi statin dan transpor OATP1B1, melipatgandakan kadar statin darah hingga 5x lipat dan memicu rabdomiolisis fatal! JANGAN PERNAH kombinasikan Gemfibrozil dengan Statin. Gunakan Fenofibrat bila kombinasi diperlukan.'
    }
  ],
  drugClassificationTable: [
    {
      id: 'statins-high',
      drugClass: 'Statin Intensitas Tinggi (HMG-CoA Reductase Inhibitor)',
      classCategory: 'other',
      exampleDrugs: [
        { name: 'Atorvastatin', dailyDosage: '40 - 80 mg 1x/hari malam hari', fornasTier: 'Faskes 1/2/3' },
        { name: 'Rosuvastatin', dailyDosage: '20 - 40 mg 1x/hari malam hari', fornasTier: 'Faskes 2/3' }
      ],
      mechanismOfAction: 'Inhibisi kompetitif enzim HMG-CoA Reduktase di hepar yang mengatur laju biosintesis kolesterol. Penurunan kolesterol intraseluler memicu upregulation ekspresi Reseptor LDL hepatosit, meningkatkan klirens partikel LDL dari sirkulasi darah.',
      clinicalIndications: 'Lini pertama mutlak untuk pencegahan sekunder ASCVD (pasca ACS, stroke, PAD), DM risiko tinggi, dan hiperkolesterolemia familial berat. Mampu menurunkan LDL-C ≥ 50%.',
      adverseEffects: 'Mialgia / miositis (1-5%), peningkatan enzim transaminase hepar SGOT/SGPT transien (0.5-2%), peningkatan ringan risiko onset diabetes baru (efek neto kardioprotektif tetap jauh melampaui risiko).',
      contraindications: 'Penyakit hati aktif / dekompensata berat, kehamilan dan menyusui (kategori X), riwayat hipersensitivitas atau rabdomiolisis terbukti.',
      monitoringKey: 'Profil lipid puasa 4-12 minggu pasca inisiasi. Baseline SGPT & CK; monitoring ulang hanya jika timbul gejala klinis mialgia atau ikterus.'
    },
    {
      id: 'statins-moderate',
      drugClass: 'Statin Intensitas Sedang / Rendah',
      classCategory: 'other',
      exampleDrugs: [
        { name: 'Simvastatin', dailyDosage: '20 - 40 mg 1x/hari malam hari', fornasTier: 'Faskes 1/2/3' },
        { name: 'Atorvastatin', dailyDosage: '10 - 20 mg 1x/hari', fornasTier: 'Faskes 1/2/3' },
        { name: 'Rosuvastatin', dailyDosage: '5 - 10 mg 1x/hari', fornasTier: 'Faskes 2/3' },
        { name: 'Pravastatin', dailyDosage: '20 - 40 mg 1x/hari', fornasTier: 'Faskes 2/3' }
      ],
      mechanismOfAction: 'Inhibisi HMG-CoA reduktase derajat moderat dengan efikasi penurunan kadar LDL-C darah sebesar 30% hingga 49%.',
      clinicalIndications: 'Pencegahan primer pada pasien risiko kardiovaskular sedang, atau pasien lanjut usia (> 75 tahun) serta pasien yang mengalami efek samping intoleransi terhadap statin intensitas tinggi.',
      adverseEffects: 'Mialgia ringan, kram otot, dispepsia, sakit kepala.',
      contraindications: 'Penyakit hepar aktif, kehamilan/menyusui. Dosis Simvastatin 80 mg dilarang keras oleh FDA karena risiko miopati berat.',
      monitoringKey: 'Kepatuhan minum obat di malam hari (khusus Simvastatin karena waktu paruh pendek 2-3 jam; Atorvastatin & Rosuvastatin dapat kapan saja).'
    },
    {
      id: 'cholesterol-absorption-inhibitor',
      drugClass: 'Penghambat Absorpsi Kolesterol (Ezetimibe)',
      classCategory: 'other',
      exampleDrugs: [
        { name: 'Ezetimibe', dailyDosage: '10 mg 1x/hari (pagi atau malam)', fornasTier: 'Faskes 2/3' },
        { name: 'Kombinasi Tetap Simvastatin + Ezetimibe (Vytorin)', dailyDosage: '20/10 mg atau 40/10 mg 1x/hari', fornasTier: 'Faskes 2/3' },
        { name: 'Kombinasi Tetap Atorvastatin + Ezetimibe', dailyDosage: '20/10 mg atau 40/10 mg 1x/hari', fornasTier: 'Faskes 2/3' }
      ],
      mechanismOfAction: 'Menghambat secara selektif protein transpor sterol Niemann-Pick C1-Like 1 (NPC1L1) pada mikrovili brush border usus halus, menurunkan absorpsi kolesterol makanan dan bilier hingga 50%.',
      clinicalIndications: 'Lini kedua mutlak sebagai add-on terapi pada pasien yang tidak mencapai target LDL dengan statin toleransi maksimal; atau lini pertama alternatif pada pasien intoleransi statin total.',
      adverseEffects: 'Sangat dapat ditoleransi; insiden gangguan gastrointestinal ringan (diare, nyeri perut), tidak meningkatkan risiko miopati bila ditambahkan pada statin.',
      contraindications: 'Gangguan hepar derajat sedang hingga berat bila dikombinasikan dengan statin; hipersensitivitas.',
      monitoringKey: 'Profil lipid setelah 8-12 minggu penambahan obat untuk menilai pencapaian target LDL-C.'
    },
    {
      id: 'pcsk9-inhibitors',
      drugClass: 'Penghambat PCSK9 (PCSK9 Monoclonal Antibodies)',
      classCategory: 'other',
      exampleDrugs: [
        { name: 'Evolocumab', dailyDosage: '140 mg SC tiap 2 minggu atau 420 mg SC 1x/bulan', fornasTier: 'Faskes 3 (Restriksi Khusus)' },
        { name: 'Alirocumab', dailyDosage: '75 - 150 mg SC tiap 2 minggu', fornasTier: 'Faskes 3 (Restriksi Khusus)' }
      ],
      mechanismOfAction: 'Antibodi monoklonal manusiawi yang berikatan spesifik dengan enzim Proprotein Convertase Subtilisin/Kexin Type 9 (PCSK9), mencegah degradasi lisosomal reseptor LDL, sehingga reseptor dapat didaur ulang ke membran hepatosit.',
      clinicalIndications: 'Pasien risiko sangat tinggi/ekstrim dengan penyakit aterosklerotik sekunder berulang, hiperkolesterolemia familial heterozigot (HeFH) yang gagal target dengan kombinasi statin + ezetimibe.',
      adverseEffects: 'Reaksi lokal tempat suntikan (eritema, gatal ringan), gejala nasofaringitis atau flu-like syndrome ringan.',
      contraindications: 'Riwayat hipersensitivitas anafilaksis terhadap zat aktif atau eksipien.',
      monitoringKey: 'Pengecekan LDL-C setiap 3-6 bulan; pemantauan teknik injeksi subkutan mandiri oleh pasien.'
    },
    {
      id: 'fibrates',
      drugClass: 'Golongan Fibrat (PPAR-alpha Agonists)',
      classCategory: 'other',
      exampleDrugs: [
        { name: 'Fenofibrat (Micronized / Nanocrystal)', dailyDosage: '100 - 200 mg 1x/hari bersama makan', fornasTier: 'Faskes 1/2/3' },
        { name: 'Gemfibrozil', dailyDosage: '600 mg 2x/hari 30 menit ac', fornasTier: 'Faskes 1/2' }
      ],
      mechanismOfAction: 'Mengaktivasi reseptor inti sel Peroxisome Proliferator-Activated Receptor Alpha (PPAR-α), meningkatkan transkripsi gen Lipoprotein Lipase (LPL) dan menurunkan ekspresi Apolipoprotein C-III, melipatgandakan katabolisme VLDL kaya trigliserida.',
      clinicalIndications: 'Hipertrigliseridemia berat (TG ≥ 500 mg/dL) untuk pencegahan primer pankreatitis akut; atau dislipidemia atherogenik campuran dengan TG residual tinggi pada pasien DM.',
      adverseEffects: 'Dispepsia, peningkatan transaminase hepar, peningkatan kreatinin serum (efek hemodinamik reversibel pada Fenofibrat), peningkatan risiko litiasis empedu.',
      contraindications: 'Penyakit kandung empedu aktif, sirosis hepar, gagal ginjal berat (eGFR < 30 mL/min). GEMFIBROZIL DIKONTRAINDIKASIKAN MUTLAK BERSAMA STATIN.',
      monitoringKey: 'Kadar Trigliserida darah, fungsi ginjal (kreatinin/eGFR), dan SGPT berkala.'
    },
    {
      id: 'omega-3-fatty-acids',
      drugClass: 'Asam Lemak Omega-3 Murni (Icosapent Ethyl / EPA)',
      classCategory: 'other',
      exampleDrugs: [
        { name: 'Icosapent Ethyl (Vascepa)', dailyDosage: '2 gram 2x/hari bersama makanan (4 g/hari)', fornasTier: 'Faskes 3' },
        { name: 'Omega-3-Acid Ethyl Esters (EPA + DHA)', dailyDosage: '2 - 4 gram 1x/hari bersama makanan', fornasTier: 'Faskes 2/3' }
      ],
      mechanismOfAction: 'Menghambat sintesis trigliserida hepatik via esterifikasi asam lemak, menurunkan sekresi VLDL, dan memperbaiki fungsi membran endotel vascular.',
      clinicalIndications: 'Terapi adjuvan pada pasien ASCVD atau DM risiko tinggi yang sudah memakai statin namun memiliki Trigliserida persisten 150-499 mg/dL (EBM REDUCE-IT: menurunkan risiko MACE 25%).',
      adverseEffects: 'Rasa amis mulut (fishy burp), dispepsia, peningkatan risiko ringan fibrilasi atrium pada dosis tinggi, sedikit pemanjangan waktu perdarahan.',
      contraindications: 'Alergi berat terhadap ikan atau krustasea.',
      monitoringKey: 'Profil lipid lengkap (evaluasi apakah ada peningkatan paradoksal LDL jika menggunakan sediaan kombinasi dengan DHA) dan EKG bila ada palpitasi.'
    }
  ],
  ebmReferences: [
    {
      id: 'ref-perki-dyslipidemia-2023',
      title: 'Panduan Pengelolaan Dislipidemia di Indonesia Edisi Terkini 2023',
      organization: 'Perhimpunan Dokter Spesialis Kardiovaskular Indonesia (PERKI)',
      year: '2023',
      scope: 'Nasional',
      summary: 'Konsensus mutakhir kardiologi Indonesia yang menetapkan target agresif LDL-C berdasarkan stratifikasi risiko kardiovaskular total dan alur kombinasi obat bertahap.',
      evidenceLevel: 'Standar Konsensus EBM Nasional Tertinggi'
    },
    {
      id: 'ref-esc-eas-2019',
      title: '2019 ESC/EAS Guidelines for the Management of Dyslipidaemias: Lipid Modification to Reduce Cardiovascular Risk',
      organization: 'European Society of Cardiology (ESC) & European Atherosclerosis Society (EAS)',
      year: '2019',
      citationNumber: 'Eur Heart J. 2020;41(1):111-188',
      scope: 'Internasional',
      summary: 'Pedoman global yang merevolusi paradigma "The Lower The Better" untuk LDL-C dengan menetapkan target < 55 mg/dL untuk risiko sangat tinggi dan < 40 mg/dL untuk risiko ekstrim.',
      evidenceLevel: 'Kelas I, Tingkat Bukti A (Meta-Analisis RCT Global)'
    },
    {
      id: 'ref-aha-acc-2018',
      title: '2018 AHA/ACC/AACVPR/AAPA/ABC/ACPM/ADA/AGS/APhA/ASPC/NLA/PCNA Guideline on the Management of Blood Cholesterol',
      organization: 'American Heart Association & American College of Cardiology (AHA/ACC)',
      year: '2018',
      citationNumber: 'Circulation. 2019;139(25):e1082-e1143',
      scope: 'Internasional',
      summary: 'Pedoman multi-organisasi AS yang memperkuat algoritma statin intensitas tinggi, ambang batas penambahan Ezetimibe, dan integrasi klinis PCSK9 inhibitor.',
      evidenceLevel: 'Kelas I, Tingkat Bukti A'
    }
  ],
  calculatorQuickLink: {
    type: 'ascvd-risk',
    label: 'Buka Kalkulator Skor Risiko Kardiovaskular ASCVD & Target LDL'
  }
};
