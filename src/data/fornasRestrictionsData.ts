import { Drug, FornasRestrictionInfo, FornasTier } from '../types';

/**
 * BASIS DATA RESMI RESTRIKSI FORMULARIUM NASIONAL (FORNAS) & BPJS KESEHATAN TERLENGKAP
 * Diselaraskan secara komprehensif dengan:
 * - Keputusan Menteri Kesehatan RI No. HK.01.07/MENKES/1199/2025 (Fornas Terkini)
 * - Pedoman Peresepan Jaminan Kesehatan Nasional (JKN) BPJS Kesehatan
 * - Panduan Program Rujuk Balik (PRB) BPJS Kesehatan
 * - Standar Pembagian Faskes:
 *   • Faskes 1: FKTP (Puskesmas, Klinik Pratama, Dokter Praktik Mandiri)
 *   • Faskes 2: FKRTL Sekunder (Rumah Sakit Kelas C & B)
 *   • Faskes 3: FKRTL Tersier (Rumah Sakit Kelas A / RS Khusus Rujukan Nasional)
 */

export interface FornasItemWithKey extends FornasRestrictionInfo {
  key: string;
  name: string;
}

export const FORNAS_RESTRICTIONS_DATABASE: Record<string, FornasRestrictionInfo> = {
  // =========================================================================
  // 1. KARDIOVASKULAR, HIPERLIPIDEMIA & ANTIPLATELET
  // =========================================================================
  'atorvastatin': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Dapat di FKTP untuk Pasien PRB Terdaftar)',
    restrictionNote: 'Hanya untuk dislipidemia pada pasien penyakit jantung koroner (PJK), pasca Percutaneous Coronary Intervention (PCI/stent), pasca CABG, atau stroke iskemik yang memiliki target LDL < 70 mg/dL dan tidak mencapai target dengan Simvastatin dosis maksimal.',
    maxPrescriptionLimit: 'Maksimal 30 tablet/bulan',
    prescriberCompetency: 'Dokter Spesialis Jantung (Sp.JP) / Spesialis Penyakit Dalam (Sp.PD) / Spesialis Saraf (Sp.S)',
    formAndStrength: 'Tablet salut selaput 20 mg, 40 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Kardiovaskular',
    isPrb: true
  },
  'simvastatin': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Untuk hiperlipidemia primer dan dislipidemia campuran. Merupakan statin lini pertama yang dapat diresepkan di Fasilitas Kesehatan Tingkat Pertama (FKTP).',
    maxPrescriptionLimit: 'Maksimal 30 tablet/bulan',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Tablet salut selaput 10 mg, 20 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Kardiovaskular',
    isPrb: true
  },
  'rosuvastatin': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Khusus Rumah Sakit Rujukan)',
    restrictionNote: 'Hanya untuk pasien risiko kardiovaskular sangat tinggi (Sindrom Koroner Akut, diabetes dengan komplikasi vaskular, atau stroke) yang gagal mencapai target penurunan LDL dengan Atorvastatin.',
    maxPrescriptionLimit: 'Maksimal 30 tablet/bulan',
    prescriberCompetency: 'Dokter Spesialis Jantung & Pembuluh Darah / Spesialis Penyakit Dalam Konsultan Endokrin/Kardiologi',
    formAndStrength: 'Tablet salut selaput 10 mg, 20 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Kardiovaskular'
  },
  'fenofibrate': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Khusus Rumah Sakit Rujukan)',
    restrictionNote: 'Hanya untuk hipertrigliseridemia berat (trigliserida >= 500 mg/dL) untuk mencegah pankreatitis akut, atau trigliserida >= 200 mg/dL refrakter setelah terapi statin.',
    maxPrescriptionLimit: 'Maksimal 30 kapsul/bulan',
    prescriberCompetency: 'Dokter Spesialis Penyakit Dalam (Sp.PD) / Dokter Spesialis Jantung (Sp.JP)',
    formAndStrength: 'Kapsul 100 mg, 200 mg, 300 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Kardiovaskular'
  },
  'amlodipine': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Antihipertensi lini pertama untuk pasien hipertensi primer dan profilaksis angina pectoris stabil. Sangat dianjurkan untuk populasi lansia dan pasien diabetes.',
    maxPrescriptionLimit: 'Maksimal 30 tablet/bulan',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Tablet 5 mg, 10 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Kardiovaskular',
    isPrb: true
  },
  'candesartan': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Pilihan utama pada pasien hipertensi yang mengalami batuk kering membandel akibat ACE Inhibitor (Captopril/Lisinopril), pasien nefropati diabetik dengan proteinuria, atau gagal jantung HFrEF.',
    maxPrescriptionLimit: 'Maksimal 30 tablet/bulan',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Tablet 8 mg, 16 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Kardiovaskular',
    isPrb: true
  },
  'valsartan': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Dapat di FKTP untuk Pasien PRB)',
    restrictionNote: 'Untuk pasien hipertensi dengan gagal jantung simtomatik (NYHA II-IV) atau pasca infark miokard akut yang intoleran terhadap ACE inhibitor.',
    maxPrescriptionLimit: 'Maksimal 30 tablet/bulan',
    prescriberCompetency: 'Dokter Spesialis Jantung (Sp.JP) / Spesialis Penyakit Dalam (Sp.PD)',
    formAndStrength: 'Tablet salut selaput 80 mg, 160 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Kardiovaskular',
    isPrb: true
  },
  'telmisartan': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Khusus Rumah Sakit Rujukan)',
    restrictionNote: 'Untuk pencegahan morbiditas kardiovaskular pada pasien dengan riwayat penyakit aterotrombotik atau DM tipe 2 dengan kerusakan organ target terbukti.',
    maxPrescriptionLimit: 'Maksimal 30 tablet/bulan',
    prescriberCompetency: 'Dokter Spesialis Jantung (Sp.JP) / Spesialis Penyakit Dalam (Sp.PD)',
    formAndStrength: 'Tablet 40 mg, 80 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Kardiovaskular'
  },
  'captopril': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'ACE inhibitor lini pertama untuk hipertensi, gagal jantung kronik, dan nefropati diabetik. Harus diminum dalam kondisi perut kosong (1 jam sebelum atau 2 jam sesudah makan).',
    maxPrescriptionLimit: 'Maksimal 90 tablet/bulan',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Tablet 12.5 mg, 25 mg, 50 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Kardiovaskular',
    isPrb: true
  },
  'ramipril': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Untuk hipertensi, gagal jantung pasca infark miokard akut, dan reduksi risiko kardiovaskular pada pasien risiko tinggi.',
    maxPrescriptionLimit: 'Maksimal 30 tablet/bulan',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Tablet 2.5 mg, 5 mg, 10 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Kardiovaskular',
    isPrb: true
  },
  'clopidogrel': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Bisa di FKTP untuk Program Rujuk Balik / PRB)',
    restrictionNote: 'Untuk pasien pasca Sindrom Koroner Akut (SKA), pasca Percutaneous Coronary Intervention (PCI stenting) selama maksimal 12 bulan (Dual Antiplatelet Therapy / DAPT), atau pasien stroke iskemik dengan intoleransi berat terhadap asam asetilsalisilat (Aspirin).',
    maxPrescriptionLimit: 'Maksimal 30 tablet/bulan (maksimal 12 bulan pasca PCI)',
    prescriberCompetency: 'Dokter Spesialis Jantung (Sp.JP) / Dokter Spesialis Saraf (Sp.S)',
    formAndStrength: 'Tablet salut selaput 75 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Kardiovaskular',
    isPrb: true
  },
  'ticagrelor': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Khusus Rumah Sakit Rujukan)',
    restrictionNote: 'Hanya untuk pasien Sindrom Koroner Akut (STEMI / NSTEMI) risiko tinggi yang menjalani tindakan Percutaneous Coronary Intervention (PCI) primer. Maksimal peresepan 12 bulan.',
    maxPrescriptionLimit: 'Maksimal 60 tablet/bulan (durasi maksimal 12 bulan)',
    prescriberCompetency: 'Dokter Spesialis Jantung & Pembuluh Darah (Sp.JP)',
    formAndStrength: 'Tablet salut selaput 90 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Kardiovaskular'
  },
  'aspirin': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Antiplatelet lini pertama untuk pencegahan sekunder kejadian kardiovaskular dan serebrovaskular pada pasien angina pektoris, pasca infark miokard akut, TIA, atau stroke iskemik.',
    maxPrescriptionLimit: 'Maksimal 30 tablet/bulan',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Tablet salut enterik 80 mg, 100 mg (Aspilet)',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Kardiovaskular',
    isPrb: true
  },
  'bisoprolol': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Untuk gagal jantung kronik simtomatik fraksi ejeksi rendah (HFrEF) yang stabil, hipertensi esensial dengan takikardia istirahat, atau terapi pemeliharaan pasca infark miokard akut.',
    maxPrescriptionLimit: 'Maksimal 30 tablet/bulan',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Tablet salut selaput 2.5 mg, 5 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Kardiovaskular',
    isPrb: true
  },
  'carvedilol': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Khusus Rumah Sakit Rujukan)',
    restrictionNote: 'Untuk gagal jantung kronik sedang-berat (NYHA II-IV) dengan fraksi ejeksi ventrikel kiri (LVEF) <= 35% yang telah stabil dengan ACE inhibitor dan diuretik.',
    maxPrescriptionLimit: 'Maksimal 60 tablet/bulan',
    prescriberCompetency: 'Dokter Spesialis Jantung (Sp.JP) / Spesialis Penyakit Dalam (Sp.PD)',
    formAndStrength: 'Tablet 6.25 mg, 25 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Kardiovaskular'
  },
  'propranolol': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Untuk aritmia supraventrikular, takikardia pada tirotoksikosis, profilaksis migrain berulang, tremor esensial, atau hipertensi portal pada sirosis hepatis.',
    maxPrescriptionLimit: 'Maksimal 60 - 90 tablet/bulan',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Tablet 10 mg, 40 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Kardiovaskular'
  },
  'diltiazem': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Untuk angina pektoris varian (Prinzmetal), angina pektoris kronik stabil, dan kontrol laju ventrikel pada fibrilasi atrium. Injeksi untuk krisis hipertensi atau takikardia supraventrikular.',
    maxPrescriptionLimit: 'Oral: Maksimal 90 tablet/bulan; Injeksi: sesuai kondisi gawat darurat',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Tablet 30 mg; Injeksi serbuk 10 mg, 50 mg/vial',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Kardiovaskular'
  },
  'verapamil': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Untuk supraventricular tachycardia (SVT), kontrol laju denyut pada atrial fibrilasi/flutter, dan hipertensi dengan kontraindikasi beta blocker.',
    maxPrescriptionLimit: 'Oral: Maksimal 90 tablet/bulan; Injeksi: 1-2 ampul per episode SVT',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Tablet 80 mg; Injeksi 2.5 mg/mL (ampul 2 mL)',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Kardiovaskular'
  },
  'nifedipine': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Sediaan lepas lambat (Oros/GITS) untuk hipertensi dan angina kronis. Sediaan pelepasan cepat (kapsul 10 mg) HANYA untuk tokolisis persalinan prematur atau preeklampsia berat. DILARANG penggunaan sublingual untuk krisis hipertensi karena risiko stroke fatal.',
    maxPrescriptionLimit: 'Oral lepas lambat: Maksimal 30 tablet/bulan; Tokolisis: maksimal 20 tablet per kasus',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis Obgyn / Dokter Spesialis Jantung',
    formAndStrength: 'Tablet pelepasan terkontrol (OROS) 20 mg, 30 mg; Kapsul 10 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Kardiovaskular'
  },
  'digoxin': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Hanya untuk fibrilasi atrium dengan respon ventrikel cepat (*rapid ventricular response*) atau gagal jantung simtomatik fraksi ejeksi berkurang (HFrEF) yang belum terkontrol dengan terapi lini pertama.',
    maxPrescriptionLimit: 'Maksimal 30 tablet/bulan',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Tablet 0.25 mg, Injeksi 0.25 mg/mL',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Kardiovaskular'
  },
  'furosemide': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Untuk edema kardiogenik akibat gagal jantung kongestif, sindrom nefrotik, ascites sirosis hepatis, atau oliguria gagal ginjal. Injeksi untuk kedaruratan edema paru akut dan krisis hipertensi.',
    maxPrescriptionLimit: 'Oral: Maksimal 60 tablet/bulan; Injeksi: sesuai kebutuhan gawat darurat',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Tablet 40 mg, Injeksi 10 mg/mL (ampul 2 mL)',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Kardiovaskular',
    isPrb: true
  },
  'spironolactone': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Untuk gagal jantung kronik klasifikasi NYHA II–IV dengan fraksi ejeksi LVEF <= 35% untuk menurunkan mortalitas kardiak, atau ascites refrakter pada sirosis hepatis.',
    maxPrescriptionLimit: 'Maksimal 30 tablet/bulan',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Tablet 25 mg, 100 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Kardiovaskular',
    isPrb: true
  },
  'sacubitril-valsartan': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Khusus Rumah Sakit Rujukan)',
    restrictionNote: 'Pengganti ACEi/ARB pada pasien gagal jantung kronik simtomatik (NYHA kelas II-IV) dengan LVEF <= 35% yang telah menerima terapi lini pertama dosis optimal.',
    maxPrescriptionLimit: 'Maksimal 60 tablet/bulan',
    prescriberCompetency: 'Dokter Spesialis Jantung (Sp.JP) / Spesialis Penyakit Dalam (Sp.PD)',
    formAndStrength: 'Tablet salut selaput 50 mg, 100 mg, 200 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Kardiovaskular'
  },
  'isosorbide-dinitrate': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Sublingual untuk serangan angina pektoris akut; oral untuk profilaksis jangka panjang pada penyakit jantung koroner atau gagal jantung kongestif bersama hidralazin.',
    maxPrescriptionLimit: 'Oral: Maksimal 90 tablet/bulan; Sublingual: 10 - 20 tablet per kasus',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Tablet sublingual 5 mg, Tablet oral 10 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Kardiovaskular',
    isPrb: true
  },
  'fondaparinux': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Khusus Rawat Inap RS)',
    restrictionNote: 'Hanya untuk terapi pasien Sindrom Koroner Akut (NSTEMI / Unstable Angina) dan profilaksis trombosis vena dalam (DVT) pasca operasi bedah ortopedi mayor panggul/lutut.',
    maxPrescriptionLimit: 'Maksimal 1 syringe per hari, durasi maksimal 8 hari per episode rawat',
    prescriberCompetency: 'Dokter Spesialis Jantung (Sp.JP) / Dokter Spesialis Penyakit Dalam (Sp.PD) / Bedah Ortopedi',
    formAndStrength: 'Injeksi 2.5 mg/0.5 mL (prefilled syringe)',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Kardiovaskular'
  },
  'enoxaparin': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Khusus Rawat Inap RS)',
    restrictionNote: 'Untuk terapi antikoagulan pada Sindrom Koroner Akut (STEMI/NSTEMI), pencegahan tromboemboli vena (TEV) pada pasien bedah berisiko tinggi, atau terapi emboli paru akut.',
    maxPrescriptionLimit: 'Sesuai protokol rawat inap (maksimal 10 hari pengobatan)',
    prescriberCompetency: 'Dokter Spesialis Jantung (Sp.JP) / Dokter Spesialis Penyakit Dalam (Sp.PD) / Dokter Anestesi',
    formAndStrength: 'Injeksi 20 mg, 40 mg, 60 mg/syringe',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Kardiovaskular'
  },
  'warfarin': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Khusus Rumah Sakit Rujukan)',
    restrictionNote: 'Untuk pencegahan dan terapi tromboemboli vena (DVT/PE) dan pencegahan stroke pada fibrilasi atrium non-valvular atau katup jantung mekanik. Wajib pemantauan nilai INR secara berkala (target INR 2.0-3.0).',
    maxPrescriptionLimit: 'Maksimal 30 - 60 tablet/bulan',
    prescriberCompetency: 'Dokter Spesialis Jantung (Sp.JP) / Dokter Spesialis Penyakit Dalam (Sp.PD)',
    formAndStrength: 'Tablet 1 mg, 2 mg, 3 mg, 5 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Kardiovaskular'
  },

  // =========================================================================
  // 2. ENDOKRIN, DIABETES MELITUS & TIROID
  // =========================================================================
  'metformin': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Terapi farmakologis lini pertama wajib pada semua pasien Diabetes Melitus Tipe 2 dewasa, kecuali terdapat kontraindikasi penurunan fungsi ginjal berat (eGFR < 30 mL/menit) atau asidosis.',
    maxPrescriptionLimit: 'Maksimal 90 tablet/bulan (maksimal dosis 2000-2500 mg/hari)',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Tablet 500 mg, 850 mg; Tablet lepas lambat (XR) 500 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Diabetes & Endokrin',
    isPrb: true
  },
  'glimepiride': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Kombinasi lini kedua pada pasien DM Tipe 2 yang belum mencapai target kontrol glikemik (HbA1c > 7%) dengan Metformin dosis optimal, atau sebagai monoterapi bila pasien intoleran Metformin.',
    maxPrescriptionLimit: 'Maksimal 30 - 60 tablet/bulan',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Tablet 1 mg, 2 mg, 3 mg, 4 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Diabetes & Endokrin',
    isPrb: true
  },
  'gliclazide': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Sulfonilurea pilihan pada pasien DM Tipe 2 lansia atau yang memiliki gangguan fungsi ginjal ringan hingga sedang karena risiko hipoglikemia lebih rendah dibandingkan glibenklamid.',
    maxPrescriptionLimit: 'Maksimal 30 - 60 tablet/bulan',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Tablet lepas lambat (MR) 30 mg, 60 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Diabetes & Endokrin',
    isPrb: true
  },
  'acarbose': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Sebagai terapi tambahan untuk mengendalikan hiperglikemia post-prandial pada pasien DM Tipe 2 yang belum terkontrol dengan metformin atau sulfonilurea. Diminum bersamaan dengan suapan pertama makanan utama.',
    maxPrescriptionLimit: 'Maksimal 90 tablet/bulan',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Tablet 50 mg, 100 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Diabetes & Endokrin',
    isPrb: true
  },
  'pioglitazone': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Khusus Rumah Sakit Rujukan)',
    restrictionNote: 'Hanya untuk pasien DM Tipe 2 dengan resistensi insulin berat yang tidak terkontrol dengan kombinasi metformin dan sulfonilurea. KONTRAINDIKASI MUTLAK pada pasien gagal jantung (NYHA I-IV) karena risiko retensi cairan berat.',
    maxPrescriptionLimit: 'Maksimal 30 tablet/bulan',
    prescriberCompetency: 'Dokter Spesialis Penyakit Dalam (Sp.PD) / Konsultan Endokrin (Sp.PD-KEMD)',
    formAndStrength: 'Tablet 15 mg, 30 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Diabetes & Endokrin'
  },
  'insulin-glargine': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Dapat Diberikan di FKTP untuk Program Rujuk Balik / PRB)',
    restrictionNote: 'Insulin basal analog untuk pasien DM Tipe 1 atau pasien DM Tipe 2 yang gagal mencapai target glukosa darah/HbA1c dengan kombinasi dua obat hipoglikemik oral dosis optimal, atau mengalami dekompensasi metabolik akut.',
    maxPrescriptionLimit: 'Maksimal 2 - 3 pen (Solostar/Kwikpen 300 IU) per bulan',
    prescriberCompetency: 'Dokter Spesialis Penyakit Dalam (Sp.PD) / Konsultan Endokrin (Sp.PD-KEMD)',
    formAndStrength: 'Cairan injeksi 100 IU/mL (pen 3 mL)',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Diabetes & Endokrin',
    isPrb: true
  },
  'insulin-aspart': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Dapat Diberikan di FKTP untuk Program Rujuk Balik / PRB)',
    restrictionNote: 'Insulin prandial kerja cepat (rapid-acting) untuk DM Tipe 1 atau DM Tipe 2 yang memerlukan kontrol lonjakan glukosa darah post-prandial yang tidak teratasi dengan insulin basal.',
    maxPrescriptionLimit: 'Maksimal 2 - 3 pen (Flexpen 300 IU) per bulan',
    prescriberCompetency: 'Dokter Spesialis Penyakit Dalam (Sp.PD) / Konsultan Endokrin (Sp.PD-KEMD)',
    formAndStrength: 'Cairan injeksi 100 IU/mL (pen 3 mL)',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Diabetes & Endokrin',
    isPrb: true
  },
  'insulin-regular': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Insulin manusia kerja pendek (*short-acting*) untuk kedaruratan hiperglikemia (KAD/HHS), terapi perioperatif pasien diabetes, diabetes gestasional, dan terapi intensif rawat inap.',
    maxPrescriptionLimit: 'Vial: 1 - 2 vial per bulan; Injeksi infus: sesuai kebutuhan ICU/IGD',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Injeksi 100 IU/mL (vial 10 mL atau pen 3 mL)',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Diabetes & Endokrin'
  },
  'empagliflozin': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Khusus Rumah Sakit Rujukan)',
    restrictionNote: 'Inhibitor SGLT-2 untuk pasien DM Tipe 2 dengan komorbiditas terbukti penyakit kardiovaskular aterosklerotik (ASCVD), gagal jantung simtomatik fraksi ejeksi berkurang (HFrEF), atau penyakit ginjal kronik (CKD) dengan eGFR 20-60 mL/min.',
    maxPrescriptionLimit: 'Maksimal 30 tablet/bulan',
    prescriberCompetency: 'Dokter Spesialis Jantung (Sp.JP) / Dokter Spesialis Penyakit Dalam (Sp.PD)',
    formAndStrength: 'Tablet salut selaput 10 mg, 25 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Diabetes & Endokrin'
  },
  'dapagliflozin': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Khusus Rumah Sakit Rujukan)',
    restrictionNote: 'Inhibitor SGLT-2 untuk pasien DM Tipe 2 dengan gagal jantung HFrEF (dengan atau tanpa diabetes) atau penyakit ginjal kronis (CKD) proteinuria untuk memperlambat penurunan laju filtrasi glomerulus.',
    maxPrescriptionLimit: 'Maksimal 30 tablet/bulan',
    prescriberCompetency: 'Dokter Spesialis Jantung (Sp.JP) / Dokter Spesialis Penyakit Dalam (Sp.PD)',
    formAndStrength: 'Tablet salut selaput 10 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Diabetes & Endokrin'
  },
  'levothyroxine': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Terapi sulih hormon tiroid lini pertama untuk hipotiroidisme kongenital, hipotiroidisme pasca tiroidektomi/ablasi radioaktif, atau tiroiditis Hashimoto. Diminum pagi hari saat perut kosong 30-60 menit sebelum sarapan.',
    maxPrescriptionLimit: 'Maksimal 30 tablet/bulan',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Tablet 50 mcg, 100 mcg (Euthyrox/Thyrax)',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Diabetes & Endokrin',
    isPrb: true
  },
  'propylthiouracil': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Untuk hipertiroidisme (Graves disease). Merupakan obat pilihan utama selama kehamilan trimester pertama dan penanganan krisis tiroid (*thyroid storm*).',
    maxPrescriptionLimit: 'Maksimal 90 tablet/bulan',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Tablet 100 mg (PTU)',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Diabetes & Endokrin',
    isPrb: true
  },
  'thiamazole': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Untuk terapi hipertiroidisme lini pertama di luar trimester pertama kehamilan karena kepatuhan lebih baik (cukup sekali sehari) dan risiko toksisitas hepatik lebih rendah.',
    maxPrescriptionLimit: 'Maksimal 30 - 60 tablet/bulan',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Tablet 5 mg, 10 mg (Methimazole/Thyrozol)',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Diabetes & Endokrin',
    isPrb: true
  },

  // =========================================================================
  // 3. ANTIMIKROBA, ANTIBIOTIK & PPRA
  // =========================================================================
  'amoxicillin': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Antibiotik lini pertama (Access Group PPRA) untuk infeksi bakteri saluran pernapasan atas akut (faringitis streptokokus, otitis media akut), infeksi kulit, atau infeksi gigi. Dilarang diresepkan untuk batuk pilek viral biasa.',
    maxPrescriptionLimit: 'Maksimal 10 - 15 tablet per episode infeksi akut (durasi maks 5 - 7 hari)',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Gigi / Dokter Spesialis',
    formAndStrength: 'Kapsul/Tablet 500 mg, Sirup kering 125 mg/5 mL, 250 mg/5 mL',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Antimikroba & PPRA'
  },
  'amoxicillin-clavulanate': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Untuk infeksi bakteri penghasil enzim beta-laktamase seperti sinusitis bakterial akut berulang, otitis media resisten amoksisilin, gigitan hewan/manusia, atau infeksi kaki diabetik ringan.',
    maxPrescriptionLimit: 'Maksimal 10 - 15 tablet per episode akut (durasi maks 7 hari)',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Tablet 625 mg (500/125); Sirup kering 156.25 mg, 312.5 mg/5 mL',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Antimikroba & PPRA'
  },
  'cefadroxil': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Sefalosforin generasi pertama (Access Group PPRA) untuk infeksi kulit dan jaringan lunak (selulitis, impetigo) atau ISK tanpa komplikasi pada wanita hamil.',
    maxPrescriptionLimit: 'Maksimal 10 - 14 kapsul per episode (durasi maks 5 - 7 hari)',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Kapsul 500 mg, Sirup kering 125 mg/5 mL, 250 mg/5 mL',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Antimikroba & PPRA'
  },
  'cefazolin': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Khusus Rumah Sakit Rawat Inap)',
    restrictionNote: 'Antibiotik pilihan utama untuk PROFILAKSIS BEDAH bersih dan bersih-terkontaminasi (bedah ortopedi, kardiotorasik, vaskular, obstetri-ginekologi). Diberikan 30-60 menit sebelum insisi bedah.',
    maxPrescriptionLimit: 'Maksimal 2 gram dosis tunggal pra-bedah (dapat diulang 1 gram jika operasi > 3-4 jam)',
    prescriberCompetency: 'Dokter Spesialis Bedah / Dokter Spesialis Anestesi',
    formAndStrength: 'Serbuk injeksi 1 gram/vial',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Antimikroba & PPRA'
  },
  'ceftriaxone': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Khusus Rumah Sakit Rawat Inap)',
    restrictionNote: 'Sefalosforin generasi ke-3 (Watch Group PPRA) untuk infeksi bakteri berat di rawat inap (pneumonia komunitas berat/CAP, sepsis, meningitis, infeksi intraabdomen, pielonefritis akut). Wajib evaluasi PPRA setelah 72 jam pemakaian.',
    maxPrescriptionLimit: 'Maksimal 2 - 3 gram/hari; durasi maksimal 7 - 10 hari sesuai panduan PPRA',
    prescriberCompetency: 'Dokter Spesialis Penanggung Jawab Pasien (DPJP)',
    formAndStrength: 'Serbuk injeksi 1 gram/vial',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Antimikroba & PPRA'
  },
  'cefotaxime': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Khusus Rumah Sakit Rawat Inap)',
    restrictionNote: 'Sefalosforin generasi ke-3 pilihan utama pada neonatus dan bayi karena tidak menyebabkan kernikterus atau pengendapan biliar seperti ceftriaxone.',
    maxPrescriptionLimit: 'Maksimal 3 - 6 gram/hari (terbagi tiap 6-8 jam) sesuai berat badan',
    prescriberCompetency: 'Dokter Spesialis Anak (Sp.A) / Dokter Spesialis Penyakit Dalam (Sp.PD)',
    formAndStrength: 'Serbuk injeksi 500 mg, 1 gram per vial',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Antimikroba & PPRA'
  },
  'ceftazidime': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Khusus Rumah Sakit Rawat Inap)',
    restrictionNote: 'Sefalosforin antipseudomonas untuk infeksi nosokomial berat yang dicurigai atau terbukti disebabkan oleh Pseudomonas aeruginosa (HAP/VAP, luka bakar terinfeksi, febril neutropenia).',
    maxPrescriptionLimit: 'Maksimal 3 - 6 gram/hari; evaluasi kultur mikrobiologi 72 jam',
    prescriberCompetency: 'Dokter Spesialis Penanggung Jawab Pasien (DPJP) / Komite PPRA RS',
    formAndStrength: 'Serbuk injeksi 1 gram/vial',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Antimikroba & PPRA'
  },
  'cefixime': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Sefalosforin oral gen-3 untuk ISK terkomplikasi, demam tifoid pada anak, atau gonore tanpa komplikasi. Bukan terapi lini pertama untuk ISPA biasa.',
    maxPrescriptionLimit: 'Maksimal 10 - 14 kapsul per episode (durasi maks 5 - 7 hari)',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Kapsul 100 mg, 200 mg; Sirup kering 100 mg/5 mL',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Antimikroba & PPRA'
  },
  'meropenem': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Kelompok Reserve / Watch PPRA RS)',
    restrictionNote: 'Kategori Reserve PPRA: Hanya boleh digunakan untuk infeksi nosokomial berat yang mengancam jiwa akibat kuman Gram-negatif resisten ganda (MDRO/ESBL-producing) yang TELAH DIBUKTIKAN dengan hasil uji kultur sensitivitas mikrobiologi atau persetujuan Komite PPRA RS.',
    maxPrescriptionLimit: 'Maksimal 3 gram/hari (1 g tiap 8 jam); evaluasi ketat tiap 5 - 7 hari',
    prescriberCompetency: 'Dokter Spesialis Mikrobiologi Klinis / Konsultan Penyakit Tropik Infeksi (Sp.PD-KPTI) / Komite PPRA',
    formAndStrength: 'Serbuk injeksi 500 mg, 1 gram per vial',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Antimikroba & PPRA'
  },
  'vancomycin': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Kelompok Reserve PPRA RS)',
    restrictionNote: 'Hanya untuk infeksi berat terbukti Methicillin-Resistant Staphylococcus aureus (MRSA), enterococcal endocarditis, atau kolitis pseudomembranosa akibat Clostridioides difficile yang resisten metronidazol.',
    maxPrescriptionLimit: 'Sesuai therapeutic drug monitoring (TDM trough level 15-20 mcg/mL)',
    prescriberCompetency: 'Dokter Spesialis Konsultan Infeksi (Sp.PD-KPTI) / Komite PPRA RS',
    formAndStrength: 'Serbuk injeksi 500 mg, 1 gram per vial',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Antimikroba & PPRA'
  },
  'ciprofloxacin': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Untuk infeksi saluran kemih terkomplikasi, demam tifoid dewasa, atau diare bakteri invasif (Shigellosis). Hindari pada anak-anak di bawah 18 tahun karena risiko gangguan kartilago artikular.',
    maxPrescriptionLimit: 'Maksimal 10 - 14 tablet per episode (durasi 5 - 7 hari)',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Tablet salut selaput 500 mg; Infus 2 mg/mL (100 mL)',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Antimikroba & PPRA'
  },
  'levofloxacin': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Khusus Rumah Sakit Rujukan)',
    restrictionNote: 'Fluorokuinolon respirasi untuk Community-Acquired Pneumonia (CAP) berat rawat inap atau Hospital-Acquired Pneumonia (HAP), atau terapi TB Resisten Obat (MDR-TB) di bawah pengawasan faskes rujukan TB.',
    maxPrescriptionLimit: 'Oral: Maksimal 10 tablet per kasus; Infus: 1 botol (500-750 mg) per hari',
    prescriberCompetency: 'Dokter Spesialis Paru (Sp.P) / Dokter Spesialis Penyakit Dalam (Sp.PD)',
    formAndStrength: 'Tablet 500 mg; Infus 5 mg/mL (100 mL, 150 mL)',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Antimikroba & PPRA'
  },
  'azithromycin': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Untuk Community-Acquired Pneumonia (CAP) atipikal (Mycoplasma/Chlamydia), urethritis klamidia, atau alternatif pasien alergi penisilin berat. Diberikan selama 3 - 5 hari.',
    maxPrescriptionLimit: 'Maksimal 3 - 5 tablet/kapsul per episode pengobatan',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Tablet/Kapsul 250 mg, 500 mg; Sirup kering 200 mg/5 mL',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Antimikroba & PPRA'
  },
  'cotrimoxazole': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Untuk infeksi saluran kemih akut tanpa komplikasi, eksaserbasi bronkitis kronis, dan profilaksis/terapi utama Pneumocystis jirovecii pneumonia (PCP) pada ODHIV.',
    maxPrescriptionLimit: 'Oral: Maksimal 20 tablet per kasus; ODHIV: 30 tablet forte/bulan',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Tablet 480 mg, Tablet Forte 960 mg; Suspensi 240 mg/5 mL',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Antimikroba & PPRA'
  },
  'metronidazole': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Untuk infeksi bakteri anaerob (infeksi intraabdomen, abses pelvik), amoebiasis intestinal & abses hati amuba, trichomoniasis urogenital, dan vaginosis bakterial.',
    maxPrescriptionLimit: 'Oral: Maksimal 20 - 30 tablet per kasus; Infus: 3 botol/hari rawat inap',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Tablet 500 mg; Suspensi 125 mg/5 mL; Infus 5 mg/mL (100 mL)',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Antimikroba & PPRA'
  },
  'gentamicin': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Untuk infeksi berat bakteri Gram-negatif rentan, sepsis neonatorum bersama ampisilin, atau sinergis endokarditis enterokokus. Wajib pantau fungsi ginjal karena risiko nefrotoksisitas & ototoksisitas.',
    maxPrescriptionLimit: 'Injeksi: Maksimal 5 - 7 hari; Salep kulit/tetes: 1 tube/botol per kasus',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Injeksi 40 mg/mL (ampul 2 mL); Salep kulit 0.1%; Tetes mata 0.3%',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Antimikroba & PPRA'
  },
  'fluconazole': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Khusus Rumah Sakit Rujukan)',
    restrictionNote: 'Untuk kandidiasis sistemik/invasif, meningitis kriptokokus pada pasien imunokompromais/HIV, atau kandidiasis orofaringeal/esofageal berat yang refrakter terhadap nistatin.',
    maxPrescriptionLimit: 'Oral: Maksimal 14 kapsul per kasus; Infus: 1 botol per hari rawat',
    prescriberCompetency: 'Dokter Spesialis Penyakit Dalam (Sp.PD) / Dokter Spesialis Anak (Sp.A)',
    formAndStrength: 'Kapsul 50 mg, 150 mg; Infus 2 mg/mL (100 mL)',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Antimikroba & PPRA'
  },
  'acyclovir': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Untuk Herpes Zoster (dimulai dalam 72 jam onset ruam untuk mencegah neuralgia pasca herpes) dan episode primer Herpes Simpleks genital/mukokutan.',
    maxPrescriptionLimit: 'Herpes Zoster: Maksimal 35 tablet (5x sehari selama 7 hari); Krim: 1 tube',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Tablet 200 mg, 400 mg; Krim 5%',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Antimikroba & PPRA'
  },
  'oseltamivir': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Hanya untuk pasien terduga atau terkonfirmasi Influenza A atau B berat / risiko komplikasi tinggi (lansia, asma berat, immunocompromised) yang berobat dalam 48 jam pertama onset gejala.',
    maxPrescriptionLimit: 'Maksimal 10 kapsul per episode (dosis 75 mg 2x sehari selama 5 hari)',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis Paru / Spesialis Penyakit Dalam',
    formAndStrength: 'Kapsul 75 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Antimikroba & PPRA'
  },

  // =========================================================================
  // 4. SALURAN CERNA & GASTROINTESTINAL
  // =========================================================================
  'omeprazole': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Oral: Untuk gastritis erosif akut maksimal 7 hari; untuk ulkus lambung/ulkus duodenum terbukti maksimal 4 minggu; untuk GERD erosif. Injeksi: HANYA untuk perdarahan saluran cerna atas akut yang terbukti secara klinis/endoskopi atau sindrom Zollinger-Ellison.',
    maxPrescriptionLimit: 'Oral: Maksimal 30 kapsul/bulan; Injeksi: maksimal 3 vial per episode perdarahan',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Kapsul lepas tunda 20 mg; Serbuk injeksi 40 mg/vial',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Saluran Cerna'
  },
  'lansoprazole': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Alternatif PPI lini pertama untuk ulkus peptikum yang tidak respon dengan Omeprazole atau pasien GERD dengan esofagitis erosif derajat sedang-berat.',
    maxPrescriptionLimit: 'Maksimal 30 kapsul/bulan',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Kapsul lepas tunda 30 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Saluran Cerna'
  },
  'pantoprazole': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Khusus Rumah Sakit Rawat Inap)',
    restrictionNote: 'Hanya untuk perdarahan saluran cerna bagian atas akut (hematemesis/melena) akibat ulkus lambung/duodenum, atau sindrom Zollinger-Ellison.',
    maxPrescriptionLimit: 'Injeksi: Maksimal 3 - 5 vial per episode perdarahan akut',
    prescriberCompetency: 'Dokter Spesialis Penyakit Dalam (Sp.PD) / Dokter Spesialis Bedah',
    formAndStrength: 'Serbuk injeksi 40 mg/vial; Tablet 40 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Saluran Cerna'
  },
  'ranitidine': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Untuk hiperasiditas lambung, gastritis akut, dan profilaksis tukak lambung stres di IGD/ruang rawat inap bila sediaan PPI tidak tersedia.',
    maxPrescriptionLimit: 'Oral: Maksimal 30 tablet per kasus; Injeksi: maksimal 2-3 ampul/hari rawat',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Tablet 150 mg; Injeksi 25 mg/mL (ampul 2 mL)',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Saluran Cerna'
  },
  'sucralfate': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Hanya untuk pengobatan ulkus lambung, ulkus duodenum aktif, atau gastritis hemoragik superfisial. Diberikan dalam kondisi perut kosong minimal 1 jam sebelum makan.',
    maxPrescriptionLimit: 'Maksimal 1 - 2 botol suspensi per episode kasus',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Suspensi 500 mg/5 mL (botol 100 mL, 200 mL)',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Saluran Cerna'
  },
  'ondansetron': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Khusus Rumah Sakit Rujukan)',
    restrictionNote: 'Hanya untuk pencegahan dan pengobatan mual muntah akut akibat kemoterapi yang sangat emetogenik, radioterapi, atau mual muntah pasca bedah rawat inap (*post-operative nausea and vomiting*). Tidak untuk mual muntah ringan biasa.',
    maxPrescriptionLimit: 'Injeksi: Maksimal 2 - 3 ampul per kasus; Tablet: maksimal 10 tablet per siklus kemo',
    prescriberCompetency: 'Dokter Spesialis Onkologi / Spesialis Bedah / Spesialis Anestesi / Sp.PD',
    formAndStrength: 'Tablet 4 mg, 8 mg; Injeksi 2 mg/mL (ampul 2 mL dan 4 mL)',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Saluran Cerna'
  },
  'domperidone': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Untuk mual dan muntah akut serta dispepsia fungsional dengan keluhan lambung penuh/kembung. Durasi penggunaan dibatasi maksimal 7 hari karena risiko aritmia ventrikel (QT prolongation).',
    maxPrescriptionLimit: 'Maksimal 21 tablet per episode akut (durasi maksimal 7 hari)',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Tablet 10 mg; Sirup 5 mg/5 mL, Drops 5 mg/mL',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Saluran Cerna'
  },
  'metoclopramide': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Untuk mual muntah akut pasca operasi, gastroparesis diabetik, dan pencegahan aspirasi lambung pra-anestesi. Waspadai risiko efek samping ekstrapiramidal (distonia akut) terutama pada anak muda.',
    maxPrescriptionLimit: 'Oral: Maksimal 15 tablet per kasus (maks 5 hari); Injeksi: 2-3 ampul per episode',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Tablet 10 mg; Injeksi 5 mg/mL (ampul 2 mL)',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Saluran Cerna'
  },
  'hyoscine-butylbromide': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Spasmolitik untuk kolik abdomen akut (kolik bilier, kolik renal, spasme saluran cerna berat, dismenore berat). Injeksi diutamakan untuk kedaruratan IGD.',
    maxPrescriptionLimit: 'Oral: Maksimal 10 - 15 tablet per kasus; Injeksi: 2 ampul per episode',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Tablet 10 mg; Injeksi 20 mg/mL (ampul 1 mL)',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Saluran Cerna'
  },
  'loperamide': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Hanya untuk antidiare non-spesifik akut pada DEWASA setelah dehidrasi teratasi. KONTRAINDIKASI MUTLAK pada anak usia < 2 tahun, disentri berdarah, dan kolitis pseudomembranosa karena risiko toksik megakolon.',
    maxPrescriptionLimit: 'Maksimal 10 - 12 tablet per kasus (dosis awal 2 tab, lalu 1 tab tiap BAB cair, maks 8 tab/hari)',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Tablet 2 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Saluran Cerna'
  },
  'oralit': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Tata laksana lini pertama dan wajib pada semua kasus diare akut dan muntah untuk mencegah serta mengatasi dehidrasi (Formula Osmolaritas Rendah WHO).',
    maxPrescriptionLimit: 'Maksimal 10 - 20 sachet per kasus',
    prescriberCompetency: 'Dokter Umum di FKTP / Tenaga Kesehatan / Apoteker',
    formAndStrength: 'Serbuk sachet untuk 200 mL air',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Saluran Cerna'
  },
  'zinc': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Wajib diberikan bersama Oralit selama 10 hari berturut-turut pada semua anak balita dengan diare akut untuk mempercepat regenerasi epitel usus dan mencegah kekambuhan diare 2-3 bulan ke depan.',
    maxPrescriptionLimit: 'Maksimal 10 tablet dispersible atau 1 botol sirup per episode diare',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis Anak (Sp.A)',
    formAndStrength: 'Tablet dispersible 20 mg; Sirup 20 mg/5 mL',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Saluran Cerna'
  },

  // =========================================================================
  // 5. ANALGESIK, NSAID, OPIOID & NARKOTIKA
  // =========================================================================
  'paracetamol': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Analgesik dan antipiretik lini pertama untuk segala usia, termasuk wanita hamil dan menyusui. Sediaan infus hanya untuk pasien rawat inap/pasca bedah yang tidak memungkinkan rute oral.',
    maxPrescriptionLimit: 'Oral: Maksimal 30 - 40 tablet per kasus; Sirup: 1 botol per kasus; Infus: 3 - 4 botol per hari rawat',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Tablet 500 mg, Sirup 120 mg/5 mL, Drops 100 mg/mL, Infus 10 mg/mL (100 mL)',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Analgesik & Narkotika'
  },
  'ibuprofen': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Untuk nyeri ringan-sedang, demam inflamasi pada anak, dismenore primer, dan artritis rematoid ringan. Hindari pada trimester ketiga kehamilan.',
    maxPrescriptionLimit: 'Oral: Maksimal 30 tablet per kasus; Sirup: 1 botol per kasus',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Tablet 200 mg, 400 mg; Suspensi 100 mg/5 mL, 200 mg/5 mL',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Analgesik & Narkotika'
  },
  'mefenamic-acid': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Hanya untuk penanganan nyeri akut jangka pendek (maksimal 7 hari) seperti dismenore primer, sakit gigi, dan nyeri pasca trauma ringan. Tidak untuk terapi pemeliharaan jangka panjang.',
    maxPrescriptionLimit: 'Maksimal 20 - 30 tablet per kasus (durasi maksimal 7 hari)',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Gigi / Dokter Spesialis',
    formAndStrength: 'Kapsul/Tablet 500 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Analgesik & Narkotika'
  },
  'ketorolac': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Khusus Rumah Sakit Rujukan)',
    restrictionNote: 'Hanya untuk penanganan nyeri akut pasca-bedah derajat sedang hingga berat dalam jangka waktu pendek. DILARANG untuk nyeri kronis atau pemakaian jangka panjang karena risiko ulkus lambung perforasi dan gagal ginjal akut fatal.',
    maxPrescriptionLimit: 'Maksimal 2 - 3 ampul per kasus; durasi pemberian maksimal 2 hari berturut-turut',
    prescriberCompetency: 'Dokter Spesialis Anestesi / Spesialis Bedah',
    formAndStrength: 'Injeksi 30 mg/mL (ampul 1 mL)',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Analgesik & Narkotika'
  },
  'meloxicam': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Untuk terapi simtomatik jangka pendek pada eksaserbasi osteoartritis akut dan terapi jangka panjang pada reumatoid artritis atau ankilosing spondilitis.',
    maxPrescriptionLimit: 'Maksimal 30 tablet/bulan',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Tablet 7.5 mg, 15 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Analgesik & Narkotika'
  },
  'celecoxib': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Khusus Rumah Sakit Rujukan)',
    restrictionNote: 'COX-2 inhibitor spesifik hanya untuk pasien osteoartritis atau artritis reumatoid yang memiliki riwayat ulkus peptikum/perdarahan lambung atau intoleransi berat terhadap NSAID non-selektif, dan TANPA riwayat penyakit kardiovaskular iskemik.',
    maxPrescriptionLimit: 'Maksimal 30 kapsul/bulan',
    prescriberCompetency: 'Dokter Spesialis Penyakit Dalam (Sp.PD) / Dokter Bedah Ortopedi',
    formAndStrength: 'Kapsul 100 mg, 200 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Analgesik & Narkotika'
  },
  'tramadol': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Untuk nyeri akut derajat sedang hingga berat yang tidak merespon pemberian analgesik non-opioid (Parasetamol atau NSAID). Tidak disarankan untuk terapi pemeliharaan jangka panjang tanpa evaluasi berkala.',
    maxPrescriptionLimit: 'Oral: Maksimal 10 - 20 tablet per episode kasus; Injeksi: maksimal 2 ampul per kasus',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Kapsul 50 mg; Injeksi 50 mg/mL (ampul 2 mL)',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Analgesik & Narkotika'
  },
  'codeine': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Opioid ringan untuk batuk kering non-produktif berat yang sangat mengganggu atau nyeri derajat sedang bersama parasetamol.',
    maxPrescriptionLimit: 'Maksimal 20 - 30 tablet per kasus (durasi 5 - 7 hari)',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Tablet 10 mg, 15 mg, 20 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Analgesik & Narkotika'
  },
  'morphine': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Bisa di Faskes 1 jika Memiliki Tim Paliatif Kanker)',
    restrictionNote: 'Baku emas penatalaksanaan nyeri kanker derajat berat (*step 3 WHO analgesic ladder*) atau dispnea berat pada pasien gagal jantung terminal / edema paru akut kardiogenik.',
    maxPrescriptionLimit: 'MST lepas lambat: Maksimal 60 tablet/bulan; Injeksi: sesuai kebutuhan rawat inap',
    prescriberCompetency: 'Dokter Spesialis / Dokter Penanggung Jawab Pasien Paliatif',
    formAndStrength: 'Tablet lepas lambat (MST) 10 mg, 15 mg, 30 mg; Injeksi 10 mg/mL',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Analgesik & Narkotika'
  },
  'fentanyl': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Khusus Rumah Sakit Rujukan)',
    restrictionNote: 'Plester transdermal HANYA untuk penanganan nyeri kronik berat pada pasien kanker yang sudah toleran terhadap terapi opioid oral ekuivalen morfin minimal 60 mg/hari. Injeksi hanya untuk anestesi umum dan sedasi di ruang ICU.',
    maxPrescriptionLimit: 'Plester: Maksimal 10 patch/bulan (ganti tiap 72 jam)',
    prescriberCompetency: 'Dokter Spesialis Onkologi / Spesialis Bedah / Spesialis Anestesi / Dokter Paliatif Terakreditasi',
    formAndStrength: 'Plester transdermal 12.5 mcg/jam, 25 mcg/jam, 50 mcg/jam; Injeksi 0.05 mg/mL',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Analgesik & Narkotika'
  },

  // =========================================================================
  // 6. RESPIRASI, ASMA & PPOK
  // =========================================================================
  'salbutamol': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Bronkodilator kerja cepat (*SABA*) untuk meredakan serangan bronkospasme akut pada asma bronkial atau penyakit paru obstruktif kronik (PPOK). Bentuk MDI inhaler untuk pencegahan serangan dan pereda asma mandiri.',
    maxPrescriptionLimit: 'Inhaler: Maksimal 1 canister/bulan; Nebules: sesuai serangan akut di IGD/Rawat Inap',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Inhaler MDI 100 mcg/puff (200 dosis); Cairan inhalasi (nebules) 2.5 mg/2.5 mL; Tablet 2 mg, 4 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Respirasi & Asma',
    isPrb: true
  },
  'budesonide': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Kortikosteroid inhalasi (*ICS*) pengontrol utama (*controller*) untuk asma bronkial persisten derajat sedang hingga berat. Digunakan secara rutin setiap hari untuk mencegah kekambuhan asma dan remodeling saluran napas.',
    maxPrescriptionLimit: 'Maksimal 1 canister inhaler (atau turbuhaler) per bulan',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis Paru (Sp.P) / Spesialis Anak (Sp.A)',
    formAndStrength: 'Inhaler serbuk kering / aerosol 100 mcg, 200 mcg; Respules nebulizer 0.25 mg/mL, 0.5 mg/mL',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Respirasi & Asma',
    isPrb: true
  },
  'ipratropium-salbutamol': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Kombinasi antikolinergik dan SABA (Combivent) untuk eksaserbasi akut berat asma bronkial atau PPOK di IGD yang tidak memberikan respon adekuat terhadap salbutamol tunggal.',
    maxPrescriptionLimit: 'Maksimal 6 - 8 unit respules per episode serangan eksaserbasi IGD',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis Paru / Dokter IGD',
    formAndStrength: 'Cairan inhalasi respules 2.5 mL (Salbutamol 2.5 mg + Ipratropium 0.5 mg)',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Respirasi & Asma'
  },
  'acetylcysteine': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Mukolitik pada penyakit saluran napas dengan dahak kental berlebih (PPOK, bronkiektasis, pneumonia). Injeksi juga merupakan antidotum spesifik keracunan parasetamol.',
    maxPrescriptionLimit: 'Oral: Maksimal 20 - 30 kapsul per episode (durasi 7 - 10 hari); Keracunan: protokol infus',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Kapsul 200 mg; Tablet effervescent 600 mg; Injeksi 100 mg/mL',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Respirasi & Asma'
  },
  'cetirizine': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Antihistamin non-sedatif lini pertama untuk rhinitis alergi musiman/perennial dan urtikaria idiopatik kronik.',
    maxPrescriptionLimit: 'Maksimal 30 tablet per bulan; Sirup: 1 botol per kasus',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Tablet 10 mg; Sirup 5 mg/5 mL, Drops 10 mg/mL',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Respirasi & Asma'
  },
  'loratadine': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Antihistamin generasi kedua dengan potensi sedasi sangat rendah untuk alergi pernapasan dan gatal kulit.',
    maxPrescriptionLimit: 'Maksimal 30 tablet/bulan',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Tablet 10 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Respirasi & Asma'
  },

  // =========================================================================
  // 7. SISTEM SARAF, PSIKIATRI, EPILEPSI & GOUT
  // =========================================================================
  'gabapentin': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Khusus Rumah Sakit Rujukan)',
    restrictionNote: 'Hanya untuk pengobatan nyeri neuropatik diabetik atau neuralgia pasca herpes (*post-herpetic neuralgia*) yang tidak merespon pemberian analgesik biasa. Juga untuk terapi ajuvan epilepsi parsial refrakter.',
    maxPrescriptionLimit: 'Maksimal 30 - 60 kapsul/bulan (titrasi bertahap)',
    prescriberCompetency: 'Dokter Spesialis Saraf (Sp.S) / Dokter Spesialis Penyakit Dalam (Sp.PD)',
    formAndStrength: 'Kapsul 100 mg, 300 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Saraf & Jiwa'
  },
  'pregabalin': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Khusus Rumah Sakit Rujukan)',
    restrictionNote: 'Hanya untuk nyeri neuropatik perifer kronis derajat berat yang tidak toleran atau refrakter terhadap terapi Gabapentin dosis optimal minimal selama 4 minggu.',
    maxPrescriptionLimit: 'Maksimal 30 kapsul/bulan',
    prescriberCompetency: 'Dokter Spesialis Saraf (Sp.S) / Dokter Spesialis Kedokteran Fisik & Rehabilitasi (Sp.KFR)',
    formAndStrength: 'Kapsul 75 mg, 150 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Saraf & Jiwa'
  },
  'carbamazepine': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Pilihan utama untuk bangkitan epilepsi fokal/parsial, neuralgia trigeminal, dan episode manik pada gangguan bipolar. Wajib pantau tanda erupsi kulit SJS/TEN.',
    maxPrescriptionLimit: 'Maksimal 60 - 90 tablet/bulan',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis Saraf / Spesialis Jiwa',
    formAndStrength: 'Tablet 200 mg; Sirup 100 mg/5 mL',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Saraf & Jiwa',
    isPrb: true
  },
  'phenytoin': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Antikonvulsan lini pertama untuk pencegahan kejang fokal dan umum tonik-klonik. Sediaan injeksi untuk penanganan lini kedua status epileptikus di IGD.',
    maxPrescriptionLimit: 'Oral: Maksimal 90 kapsul/bulan; Injeksi: sesuai kebutuhan IGD',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis Saraf',
    formAndStrength: 'Kapsul 100 mg; Injeksi 50 mg/mL (ampul 2 mL)',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Saraf & Jiwa',
    isPrb: true
  },
  'valproic-acid': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Dapat di FKTP untuk Pasien PRB)',
    restrictionNote: 'Spektrum luas untuk epilepsi umum primer (termasuk bangkitan lena/absence, mioklonik, atonik) dan fase manik bipolar. KONTRAINDIKASI MUTLAK pada wanita hamil usia subur karena risiko teratogenik spina bifida sangat tinggi.',
    maxPrescriptionLimit: 'Maksimal 60 - 90 tablet/bulan; Sirup: 2 - 3 botol/bulan',
    prescriberCompetency: 'Dokter Spesialis Saraf (Sp.S) / Dokter Spesialis Kedokteran Jiwa (Sp.KJ)',
    formAndStrength: 'Tablet salut enterik 250 mg, 500 mg; Sirup 250 mg/5 mL',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Saraf & Jiwa',
    isPrb: true
  },
  'haloperidol': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Antipsikotik tipikal potensi tinggi untuk episode psikotik akut, skizofrenia kronis, dan gaduh gelisah agitasi akut di IGD. Injeksi decanoas untuk terapi pemeliharaan depot.',
    maxPrescriptionLimit: 'Oral: Maksimal 60 - 90 tablet/bulan; Injeksi akut: 2-3 ampul; Injeksi depot: 1 ampul/bulan',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis Jiwa (Sp.KJ)',
    formAndStrength: 'Tablet 0.5 mg, 1.5 mg, 5 mg; Injeksi 5 mg/mL, Injeksi Decanoas 50 mg/mL',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Saraf & Jiwa',
    isPrb: true
  },
  'risperidone': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Dapat di FKTP untuk Pasien PRB)',
    restrictionNote: 'Antipsikotik atipikal lini pertama untuk skizofrenia dan gangguan bipolar episode manik dengan profil ekstrapiramidal lebih rendah pada dosis terapi standar.',
    maxPrescriptionLimit: 'Maksimal 60 tablet/bulan',
    prescriberCompetency: 'Dokter Spesialis Kedokteran Jiwa (Sp.KJ)',
    formAndStrength: 'Tablet salut selaput 1 mg, 2 mg, 3 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Saraf & Jiwa',
    isPrb: true
  },
  'amitriptyline': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Antidepresan trisiklik untuk gangguan depresi mayor, nyeri neuropatik kronis, profilaksis migrain, dan sindrom nyeri fibromialgia.',
    maxPrescriptionLimit: 'Maksimal 30 - 60 tablet/bulan',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Tablet 25 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Saraf & Jiwa'
  },
  'sertraline': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Dapat di FKTP untuk Pasien PRB)',
    restrictionNote: 'SSRI lini pertama untuk gangguan depresi mayor, gangguan panik, gangguan obsesif-kompulsif (OCD), dan gangguan cemas menyeluruh (GAD) dengan profil efek samping kardiovaskular aman.',
    maxPrescriptionLimit: 'Maksimal 30 tablet/bulan',
    prescriberCompetency: 'Dokter Spesialis Kedokteran Jiwa (Sp.KJ)',
    formAndStrength: 'Tablet salut selaput 50 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Saraf & Jiwa',
    isPrb: true
  },
  'diazepam': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Rektal tube untuk tata laksana darurat kejang demam anak di rumah/FKTP; Injeksi untuk status epileptikus dan sedasi akut; Oral hanya untuk spasme otot berat jangka sangat pendek.',
    maxPrescriptionLimit: 'Rektal: Maksimal 2 tube per episode; Oral: maksimal 10 tablet (maksimal 7 hari)',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Tablet 2 mg, 5 mg; Injeksi 5 mg/mL (ampul 2 mL); Rektal tube 5 mg/2.5 mL, 10 mg/2.5 mL',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Saraf & Jiwa'
  },
  'allopurinol': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Untuk hiperurisemia simtomatik kronis dengan gout artritis berulang, tofus gout, atau nefrolitiasis asam urat. DILARANG diberikan saat fase serangan artritis gout akut sedang berlangsung (harus menunggu serangan akut tenang).',
    maxPrescriptionLimit: 'Maksimal 30 tablet/bulan',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Tablet 100 mg, 300 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Saraf & Jiwa',
    isPrb: true
  },
  'colchicine': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Untuk penanganan serangan artritis gout akut (sebaiknya dimulai dalam 12-24 jam pertama onset serangan). Hentikan jika timbul efek samping diare berat atau nyeri perut kram.',
    maxPrescriptionLimit: 'Maksimal 10 - 15 tablet per episode serangan akut (durasi maks 3 - 5 hari)',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Tablet 0.5 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Saraf & Jiwa'
  },

  // =========================================================================
  // 8. KORTIKOSTEROID SISTEMIK & ANTIINFLAMASI
  // =========================================================================
  'dexamethasone': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Untuk eksaserbasi asma berat akut, reaksi anafilaksis, edema serebral, atau terapi antiemetik ajuvan kemoterapi. Tidak disarankan untuk terapi pemeliharaan jangka panjang tanpa pengawasan ketat.',
    maxPrescriptionLimit: 'Oral: Maksimal 10 - 15 tablet per episode akut; Injeksi: sesuai kebutuhan gawat darurat',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Tablet 0.5 mg; Injeksi 5 mg/mL (ampul 1 mL)',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Kortikosteroid'
  },
  'methylprednisolone': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Glukokortikoid potensi menengah dengan efek retensi natrium minimal untuk penyakit autoimun (SLE, sindrom nefrotik, rheumatoid arthritis), eksaserbasi PPOK akut, dan reaksi alergi berat.',
    maxPrescriptionLimit: 'Oral: Maksimal 30 - 60 tablet/bulan; Injeksi serbuk: sesuai indikasi klinis rawat inap',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Tablet 4 mg, 8 mg, 16 mg; Serbuk injeksi 125 mg, 500 mg/vial',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Kortikosteroid'
  },
  'prednisone': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Kortikosteroid oral lini pertama untuk imunosupresi pada sindrom nefrotik anak, penyakit autoimun aktif, dan reaksi inflamasi sistemik berat.',
    maxPrescriptionLimit: 'Maksimal 60 - 90 tablet/bulan (tapering off bertahap)',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis',
    formAndStrength: 'Tablet 5 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Kortikosteroid'
  },

  // =========================================================================
  // 9. ONKOLOGI & PALIATIF KANKER
  // =========================================================================
  'tamoxifen': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Khusus Rumah Sakit Rujukan Kanker)',
    restrictionNote: 'Hanya untuk terapi hormonal ajuvan pada kanker payudara metastatik atau stadium dini dengan status reseptor estrogen positif (ER+). Diberikan selama 5 - 10 tahun.',
    maxPrescriptionLimit: 'Maksimal 30 tablet/bulan',
    prescriberCompetency: 'Dokter Spesialis Bedah Onkologi (Sp.B.Onk) / Dokter Onkologi Medik (Sp.PD-KHOM)',
    formAndStrength: 'Tablet 10 mg, 20 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Onkologi & Paliatif'
  },
  'capecitabine': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Khusus Rumah Sakit Rujukan Kanker)',
    restrictionNote: 'Prodrug 5-FU oral untuk terapi ajuvan kanker kolorektal stadium III, kanker kolorektal metastatik, atau kanker payudara lanjut lokal/metastatik setelah kemoterapi antrasiklin.',
    maxPrescriptionLimit: 'Sesuai luas permukaan tubuh (siklus 14 hari minum, 7 hari istirahat)',
    prescriberCompetency: 'Dokter Onkologi Medik (Sp.PD-KHOM) / Dokter Bedah Onkologi',
    formAndStrength: 'Tablet salut selaput 500 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Onkologi & Paliatif'
  },
  'methotrexate': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Khusus Rumah Sakit Rujukan)',
    restrictionNote: 'DMARD lini pertama untuk reumatoid artritis aktif berat dan psoriasis vulgaris berat refrakter, serta terapi leukemia limfoblastik akut (ALL). Wajib suplementasi asam folat.',
    maxPrescriptionLimit: 'Oral artritis: Maksimal 4 - 6 tablet PER MINGGU (bukan harian!)',
    prescriberCompetency: 'Dokter Spesialis Penyakit Dalam Reumatologi / Onkologi Medik / Sp.KK',
    formAndStrength: 'Tablet 2.5 mg; Injeksi 50 mg/2 mL',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Onkologi & Paliatif'
  },

  // =========================================================================
  // 10. GINJAL, ELEKTROLIT & LAINNYA
  // =========================================================================
  'calcium-carbonate': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Sebagai pengikat fosfat (*phosphate binder*) pada pasien penyakit ginjal kronik (CKD) stadium 4-5 yang menjalani dialisis untuk mencegah hiperfosfatemia. Wajib diminum saat makan utama.',
    maxPrescriptionLimit: 'Maksimal 90 tablet/bulan',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis Penyakit Dalam (Sp.PD)',
    formAndStrength: 'Tablet kunyah/oral 500 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Ginjal & Urologi',
    isPrb: true
  },
  'tamsulosin': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Khusus Rumah Sakit Rujukan)',
    restrictionNote: 'Alfa-1 blocker uro-selektif untuk penanganan gejala saluran kemih bawah (*LUTS*) akibat hiperplasia prostat jinak (BPH) simtomatik pada pria dewasa.',
    maxPrescriptionLimit: 'Maksimal 30 kapsul/bulan',
    prescriberCompetency: 'Dokter Spesialis Urologi (Sp.U) / Dokter Spesialis Bedah',
    formAndStrength: 'Kapsul lepas lambat 0.2 mg, 0.4 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Ginjal & Urologi'
  },
  'finasteride': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Khusus Rumah Sakit Rujukan)',
    restrictionNote: 'Inhibitor 5-alfa reduktase untuk BPH dengan pembesaran volume prostat nyata (> 30-40 mL) untuk mengurangi risiko retensi urin akut dan kebutuhan operasi transuretral.',
    maxPrescriptionLimit: 'Maksimal 30 tablet/bulan',
    prescriberCompetency: 'Dokter Spesialis Urologi (Sp.U) / Dokter Spesialis Bedah',
    formAndStrength: 'Tablet salut selaput 5 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Ginjal & Urologi'
  },

  // =========================================================================
  // 13. PSIKOTROPIKA & KESEHATAN JIWA (LANJUTAN)
  // =========================================================================
  'olanzapine': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Khusus Rumah Sakit Rujukan)',
    restrictionNote: 'Antipsikotik atipikal untuk skizofrenia yang refrakter atau intoleran terhadap risperidone, serta episode manik akut gangguan bipolar berat.',
    maxPrescriptionLimit: 'Maksimal 30 tablet/bulan; Injeksi IM: Maksimal 3 vial/episode gaduh gelisah akut',
    prescriberCompetency: 'Dokter Spesialis Kedokteran Jiwa (Sp.KJ)',
    formAndStrength: 'Tablet salut selaput 5 mg, 10 mg; Serbuk injeksi 10 mg/vial',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Psikotropika & Jiwa'
  },
  'clozapine': {
    isFornas: true,
    tier: '3',
    tierLabel: 'Faskes 3 (Khusus RS Rujukan Tersier / RS Jiwa)',
    restrictionNote: 'Hanya untuk skizofrenia resisten pengobatan (gagal dengan minimal 2 antipsikotik berbeda dosis optimal selama 6-8 minggu). Wajib pemantauan hitung leukosit total (WBC) dan hitung neutrofil mutlak (ANC) berkala karena risiko agranulositosis.',
    maxPrescriptionLimit: 'Maksimal 60 tablet/bulan dengan hasil evaluasi hematologi rutin',
    prescriberCompetency: 'Dokter Spesialis Kedokteran Jiwa (Sp.KJ) Konsultan',
    formAndStrength: 'Tablet 25 mg, 100 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Psikotropika & Jiwa'
  },
  'fluoxetine': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Dapat di FKTP untuk Pasien PRB Terdaftar)',
    restrictionNote: 'Antidepresan lini pertama golongan SSRI untuk gangguan depresi mayor, gangguan obsesif-kompulsif (OCD), dan bulimia nervosa.',
    maxPrescriptionLimit: 'Maksimal 30 kapsul/bulan',
    prescriberCompetency: 'Dokter Spesialis Kedokteran Jiwa (Sp.KJ)',
    formAndStrength: 'Kapsul 20 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Psikotropika & Jiwa',
    isPrb: true
  },
  'triheksifenidil': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Hanya digunakan untuk mengatasi efek samping gejala ekstrapiramidal (EPS) akibat penggunaan antipsikotik, atau penyakit Parkinson primer. Tidak direkomendasikan untuk profilaksis rutin tanpa manifestasi EPS.',
    maxPrescriptionLimit: 'Maksimal 60-90 tablet/bulan',
    prescriberCompetency: 'Dokter Spesialis Jiwa / Dokter Spesialis Saraf / Dokter FKTP Terlatih',
    formAndStrength: 'Tablet 2 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Psikotropika & Jiwa',
    isPrb: true
  },

  // =========================================================================
  // 14. OFTALMOLOGI (OBAT MATA) & THT
  // =========================================================================
  'timolol-tetes-mata': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Dapat di FKTP untuk Pasien PRB Terdaftar)',
    restrictionNote: 'Beta-blocker topikal lini pertama untuk menurunkan tekanan intraokular pada glaukoma sudut terbuka atau hipertensi okular kronis. Masuk dalam daftar obat Program Rujuk Balik (PRB).',
    maxPrescriptionLimit: 'Maksimal 1 botol (5 mL)/mata/bulan',
    prescriberCompetency: 'Dokter Spesialis Mata (Sp.M)',
    formAndStrength: 'Tetes mata 0.25%, 0.5% (botol 5 mL)',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Mata & THT',
    isPrb: true
  },
  'latanoprost': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Khusus Rumah Sakit Rujukan)',
    restrictionNote: 'Analog prostaglandin topikal untuk glaukoma sudut terbuka yang tidak mencapai target penurunan tekanan intraokular dengan Timolol tunggal atau pasien dengan kontraindikasi beta-blocker (asma/bradikardia).',
    maxPrescriptionLimit: 'Maksimal 1 botol (2.5 mL)/bulan',
    prescriberCompetency: 'Dokter Spesialis Mata (Sp.M)',
    formAndStrength: 'Tetes mata 0.005% (botol 2.5 mL)',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Mata & THT'
  },
  'kloramfenikol-tetes-mata': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Antibiotik topikal mata berspektrum luas untuk konjungtivitis bakterial superfisial dan keratitis bakterial akut.',
    maxPrescriptionLimit: 'Maksimal 1 botol/tube per episode infeksi (maksimal 7 hari)',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis Mata',
    formAndStrength: 'Tetes mata 0.5%, 1%; Salep mata 1%',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Mata & THT'
  },
  'karbogliserin': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Larutan pelunak kotoran telinga (serumenolisis) sebelum dilakukan irigasi telinga atau tindakan ekstraksi serumen obturans.',
    maxPrescriptionLimit: 'Maksimal 1 botol per kasus',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis THT-KL',
    formAndStrength: 'Tetes telinga 10% (botol tetes)',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Mata & THT'
  },
  'ofloksasin-tetes-telinga': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas, Klinik Pratama & RS)',
    restrictionNote: 'Antibiotik kuinolon topikal telinga untuk otitis media supuratif kronis (OMSK) aktif dengan perforasi membran timpani atau otitis eksterna akut akibat Pseudomonas/Staphylococcus.',
    maxPrescriptionLimit: 'Maksimal 1 botol (5 mL) per episode pengobatan (maksimal 10 hari)',
    prescriberCompetency: 'Dokter Spesialis THT-KL / Dokter Umum di FKTP',
    formAndStrength: 'Tetes telinga 0.3% (botol 5 mL)',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Mata & THT'
  },

  // =========================================================================
  // 15. NEFROLOGI & HEMODIALISIS (GINJAL)
  // =========================================================================
  'eritropoietin-alfa': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Khusus Unit Hemodialisis Rumah Sakit)',
    restrictionNote: 'Hanya untuk anemia pada pasien Penyakit Ginjal Kronis (CKD tahap 5) yang menjalani hemodialisis rutin atau peritoneal dialisis dengan target Hb 10-12 g/dL. Syarat klaim BPJS: Cadangan besi tubuh harus tercukupi (Serum Ferritin > 100 ng/mL atau Saturasi Transferin > 20%). Tidak ditanggung bila Hb > 12 g/dL.',
    maxPrescriptionLimit: 'Maksimal 8 vial (2000 IU atau 3000 IU) per bulan per pasien HD',
    prescriberCompetency: 'Dokter Penanggung Jawab Hemodialisis / Sp.PD-KGH',
    formAndStrength: 'Injeksi prefilled syringe 2.000 IU, 3.000 IU, 4.000 IU',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Ginjal & Hemodialisis'
  },
  'kalsium-karbonat': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas & Unit HD Rumah Sakit)',
    restrictionNote: 'Sebagai pengikat fosfat (*phosphate binder*) pada pasien gagal ginjal kronis dengan hiperfosfatemia (Kadar fosfat serum > 5.5 mg/dL). Wajib diminum bersamaan dengan makanan.',
    maxPrescriptionLimit: 'Maksimal 90-120 tablet/bulan',
    prescriberCompetency: 'Dokter Spesialis Penyakit Dalam (Sp.PD) / Dokter Penanggung Jawab HD',
    formAndStrength: 'Tablet kunyah / telan 500 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Ginjal & Hemodialisis'
  },
  'natrium-bikarbonat': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas & Rumah Sakit)',
    restrictionNote: 'Untuk koreksi asidosis metabolik kronis pada penyakit ginjal kronik (bikarbonat serum < 22 mEq/L) atau intoksikasi asam.',
    maxPrescriptionLimit: 'Maksimal 90 tablet/bulan; Injeksi sesuai hasil AGD / rumus defisit basa',
    prescriberCompetency: 'Dokter Spesialis Penyakit Dalam / Dokter Jaga IGD / ICU',
    formAndStrength: 'Tablet 500 mg; Injeksi Meylon 8.4% vial 25 mL',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Ginjal & Hemodialisis'
  },
  'asam-amino-esensial': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Khusus Rumah Sakit Rujukan)',
    restrictionNote: 'Kombinasi asam keto/asam amino esensial untuk terapi konservatif retensi nitrogen pada pasien penyakit ginjal kronik predialisis (GFR < 25 mL/menit) yang menjalani diet rendah protein ketat.',
    maxPrescriptionLimit: 'Maksimal 100 kaplet/bulan (dosis disesuaikan berat badan)',
    prescriberCompetency: 'Dokter Spesialis Penyakit Dalam Konsultan Ginjal Hipertensi (Sp.PD-KGH)',
    formAndStrength: 'Kaplet salut selaput (Ketosteril)',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Ginjal & Hemodialisis'
  },

  // =========================================================================
  // 16. ANESTESI, ANTIDOTUM & KEGAWATDARURATAN IGD/ICU
  // =========================================================================
  'nalokson': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Emergensi IGD & ICU)',
    restrictionNote: 'Antidotum spesifik antagonis opioid untuk mengatasi depresi pernapasan berat akut akibat intoksikasi atau overdosis opioid (morfin, petidin, fentanil, heroin). Tersedia di troli emergensi.',
    maxPrescriptionLimit: 'Sesuai kebutuhan tata laksana emergensi (maksimal 2-3 ampul per episode)',
    prescriberCompetency: 'Dokter Jaga IGD / Dokter Spesialis Anestesi (Sp.An)',
    formAndStrength: 'Injeksi IV/IM 0.4 mg/mL ampul 1 mL',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Anestesi & Antidotum'
  },
  'flumazenil': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Khusus IGD / ICU / Kamar Operasi)',
    restrictionNote: 'Antidotum antagonis benzodiazepin spesifik untuk membalikkan efek sedasi sentral benzodiazepin pasca anestesi umum/sedasi prosedural, atau intoksikasi akut benzodiazepin.',
    maxPrescriptionLimit: 'Maksimal 2 ampul per episode resusitasi toksikologi',
    prescriberCompetency: 'Dokter Spesialis Anestesiologi & Terapi Intensif (Sp.An-KIC)',
    formAndStrength: 'Injeksi IV 0.1 mg/mL ampul 5 mL',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Anestesi & Antidotum'
  },
  'atropin-sulfat': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Troli Emergensi Puskesmas & RS)',
    restrictionNote: 'Obat emergensi kardiovaskular untuk bradikardia simtomatik berat (sesuai algoritma ACLS), pre-medikasi anestesi untuk mencegah spasme laring/hipersalivasi, dan antidotum intoksikasi pestisida organofosfat/karbamat (atropinisasi sampai tanda sekret bronkial kering).',
    maxPrescriptionLimit: 'ACLS: Maksimal 3 mg total; Intoksikasi organofosfat: Sesuai target atropinisasi klinis',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter IGD / Dokter Spesialis Anestesi / Sp.JP',
    formAndStrength: 'Injeksi IV/IM/SC 0.25 mg/mL ampul 1 mL',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Anestesi & Antidotum'
  },
  'kalsium-glukonat': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Emergensi IGD, Kamar Bersalin & ICU)',
    restrictionNote: 'Koreksi tetani hipokalsemia akut, stabilisasi membran miokard pada hiperkalemia berat dengan perubahan EKG, serta antidotum toksisitas magnesium sulfat (MgSO4) pada pasien preeklamsia.',
    maxPrescriptionLimit: 'Maksimal 2-4 ampul per episode kedaruratan',
    prescriberCompetency: 'Dokter IGD / Dokter Spesialis Kebidanan (Sp.OG) / Sp.An / Sp.PD',
    formAndStrength: 'Injeksi IV 10% (100 mg/mL) ampul 10 mL',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Anestesi & Antidotum'
  },
  'magnesium-sulfat': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas PONED & RS PONEK)',
    restrictionNote: 'Lini pertama profilaksis dan tatalaksana kejang pada Preeklamsia Berat (PEB) dan Eklamsia kebidanan (dosis *loading* 4 g dilanjutkan *maintenance* infus 1 g/jam). Juga digunakan pada Torsades de Pointes.',
    maxPrescriptionLimit: 'Protokol PEB: 1 vial 40% (loading) + 4 vial 20%/40% maintenance 24 jam',
    prescriberCompetency: 'Dokter Umum PONED / Bidan terlatih dengan instruksi dokter / Sp.OG',
    formAndStrength: 'Injeksi 20% vial 25 mL; Injeksi 40% vial 25 mL',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Anestesi & Antidotum'
  },
  'asam-traneksamat': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Oral: Faskes 1, 2, 3; Injeksi: Khusus Faskes 2 & 3 (RS)',
    restrictionNote: 'Antifibrinolitik untuk penanganan perdarahan abnormal berat (menoragia berat, epistaksis masif, pasca bedah mayor ortopedi/urologi, atau perdarahan pasca salin traumatis). Tidak untuk perdarahan saluran kemih atas (risiko sumbatan bekuan ureter).',
    maxPrescriptionLimit: 'Oral: Maksimal 20 tablet per episode (maksimal 4 hari); Injeksi: Maksimal 6 ampul/hari (maksimal 3 hari)',
    prescriberCompetency: 'Dokter Spesialis Bedah / Sp.OG / Sp.PD (Oral di FKTP: Dokter Umum)',
    formAndStrength: 'Tablet 500 mg; Injeksi IV 50 mg/mL, 100 mg/mL (ampul 5 mL)',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Anestesi & Antidotum'
  },
  'efedrin-hcl': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Khusus Kamar Operasi & ICU)',
    restrictionNote: 'Vasopresor untuk mengatasi hipotensi akut sekunder akibat anestesi spinal/epidural atau syok obstetri.',
    maxPrescriptionLimit: 'Maksimal 2 ampul per episode anestesi',
    prescriberCompetency: 'Dokter Spesialis Anestesiologi (Sp.An)',
    formAndStrength: 'Injeksi IV 50 mg/mL ampul 1 mL',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Anestesi & Antidotum'
  },

  // =========================================================================
  // 17. ENDOKRIN, TIROID & HORMONAL
  // =========================================================================
  'levotiroksin': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas & RS / Obat PRB)',
    restrictionNote: 'Terapi sulih hormon tiroid lini pertama untuk hipotiroidisme primer kongenital atau didapat (pasca tiroidektomi / radioiodin). Masuk Program Rujuk Balik (PRB) BPJS.',
    maxPrescriptionLimit: 'Maksimal 30 tablet/bulan (diminum pagi hari saat perut kosong 30-60 menit sebelum sarapan)',
    prescriberCompetency: 'Dokter Spesialis Penyakit Dalam / Dokter Spesialis Anak / Dokter Umum FKTP (PRB)',
    formAndStrength: 'Tablet 50 mcg, 100 mcg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Endokrin & Hormon',
    isPrb: true
  },
  'propiltiourasil': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas & RS / Obat PRB)',
    restrictionNote: 'Antitiroid pilihan utama untuk krisis tiroid (tirotoksikosis berat) dan hipertiroidisme pada wanita hamil trimester pertama karena risiko teratogenik lebih rendah daripada tiamazol.',
    maxPrescriptionLimit: 'Maksimal 90-120 tablet/bulan',
    prescriberCompetency: 'Dokter Spesialis Penyakit Dalam (Sp.PD) / Dokter Umum FKTP (PRB)',
    formAndStrength: 'Tablet 100 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Endokrin & Hormon',
    isPrb: true
  },
  'tiamazol': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas & RS / Obat PRB)',
    restrictionNote: 'Antitiroid lini pertama untuk penyakit Graves dan hipertiroidisme umum (di luar kehamilan trimester 1) karena efek toksisitas hati lebih rendah dan kepatuhan lebih baik.',
    maxPrescriptionLimit: 'Maksimal 60 tablet/bulan',
    prescriberCompetency: 'Dokter Spesialis Penyakit Dalam (Sp.PD) / Dokter Umum FKTP (PRB)',
    formAndStrength: 'Tablet salut selaput 5 mg, 10 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Endokrin & Hormon',
    isPrb: true
  },

  // =========================================================================
  // 18. ONKOLOGI & IMUNOLOGI
  // =========================================================================
  'tamoksifen': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Khusus Rumah Sakit Rujukan Kanker)',
    restrictionNote: 'Terapi hormonal adjuvant untuk kanker payudara dengan reseptor estrogen positif (ER+) pada wanita pre- atau post-menopause. Digunakan selama 5-10 tahun pasca operasi.',
    maxPrescriptionLimit: 'Maksimal 30 tablet/bulan',
    prescriberCompetency: 'Dokter Spesialis Onkologi Bedah (Sp.B.Onk) / Sp.PD-KHOM',
    formAndStrength: 'Tablet salut selaput 20 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Onkologi & Imunologi'
  },
  'letrozole': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Khusus Rumah Sakit Rujukan Kanker)',
    restrictionNote: 'Inhibitor aromatase non-steroid untuk terapi kanker payudara stadium dini atau lanjut dengan status reseptor hormon positif pada wanita pascamenopause.',
    maxPrescriptionLimit: 'Maksimal 30 tablet/bulan',
    prescriberCompetency: 'Dokter Spesialis Bedah Onkologi / Sp.PD Konsultan Hematologi-Onkologi Medik',
    formAndStrength: 'Tablet salut selaput 2.5 mg',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Onkologi & Imunologi'
  },
  'metotreksat': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Khusus Rumah Sakit Rujukan)',
    restrictionNote: 'DMARD lini pertama untuk artritis reumatoid berat, psoriasis artritis kronis, koriokarsinoma, dan leukemia limfoblastik akut. Aturan ketat: Pada penyakit rematik diminum HANYA 1 KALI SEMINGGU (bukan setiap hari!) didampingi asam folat.',
    maxPrescriptionLimit: 'Reumatologi: Maksimal 10 tablet/bulan (dosis mingguan); Onkologi: Sesuai protokol kemoterapi',
    prescriberCompetency: 'Dokter Spesialis Penyakit Dalam Konsultan Reumatologi (Sp.PD-KR) / Sp.PD-KHOM / Sp.KK',
    formAndStrength: 'Tablet 2.5 mg; Injeksi 50 mg/2 mL vial',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Onkologi & Imunologi'
  },
  'siklofosfamid': {
    isFornas: true,
    tier: '2, 3',
    tierLabel: 'Faskes 2 & 3 (Khusus Rumah Sakit Rujukan)',
    restrictionNote: 'Agen pengalkilasi kemoterapi untuk limfoma maligna, leukemia limfositik, kanker ovarium/payudara, serta imunosupresi pada lupus nefritis berat derajat III/IV.',
    maxPrescriptionLimit: 'Oral: Maksimal 30-60 tablet/siklus; Injeksi: Sesuai protokol siklus kemoterapi / protokol NIH',
    prescriberCompetency: 'Dokter Spesialis Onkologi / Sp.PD-KHOM / Sp.PD-KGH',
    formAndStrength: 'Tablet salut gula 50 mg; Serbuk injeksi 200 mg, 500 mg, 1.000 mg vial',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Onkologi & Imunologi'
  },

  // =========================================================================
  // 19. VAKSIN, SERUM EMERGENSI & IMUNOGLOBULIN
  // =========================================================================
  'serum-anti-bisa-ular': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Emergensi Puskesmas & IGD RS)',
    restrictionNote: 'Serum anti bisa ular polivalen (kuda) untuk envenomasi gigitan ular berbisa Indonesia (Ankistrodon rhodostoma, Bungarus fasciatus, Naja sputatrix) dengan tanda keracunan sistemik (gangguan koagulasi, ptosis, paralisis). Uji sensitivitas sebelum pemberian.',
    maxPrescriptionLimit: 'Sesuai derajat derajat keracunan klinis (2-5 vial diencerkan dalam NaCl 0.9% drip)',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Jaga IGD RS',
    formAndStrength: 'Injeksi vial 5 mL (SABU Polivalen)',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Vaksin & Serum Emergensi'
  },
  'serum-anti-tetanus': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Puskesmas & Rumah Sakit)',
    restrictionNote: 'Profilaksis luka rentan tetanus berat pada pasien tanpa riwayat imunisasi lengkap (1.500 IU IM) dan terapi tetanus klinis aktif (10.000 - 20.000 IU). Selalu lakukan skin test terlebih dahulu.',
    maxPrescriptionLimit: 'Profilaksis: 1 ampul 1.500 IU; Terapi klinis: Sesuai protokol tata laksana tetanus',
    prescriberCompetency: 'Dokter Umum di FKTP / Dokter Spesialis Bedah / Sp.PD',
    formAndStrength: 'Injeksi IM 1.500 IU ampul 1 mL; Injeksi 20.000 IU vial',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Vaksin & Serum Emergensi'
  },
  'vaksin-anti-rabies': {
    isFornas: true,
    tier: '1, 2, 3',
    tierLabel: 'Faskes 1, 2 & 3 (Rabies Center Puskesmas & RS)',
    restrictionNote: 'Profilaksis Pasca Pajanan (PEP) luka gigitan hewan penular rabies (GHPR: anjing, kucing, kera) di daerah endemis rabies sesuai protokol Kemenkes (Hari ke-0: 2 dosis, Hari ke-7: 1 dosis, Hari ke-21: 1 dosis).',
    maxPrescriptionLimit: 'Sesuai protokol 4 dosis PEP Depkes RI',
    prescriberCompetency: 'Dokter di Pusat Penanganan Rabies (Rabies Center FKTP / FKRTL)',
    formAndStrength: 'Vial serbuk liofilisasi + pelarut 0.5 mL (Verorab / Rabipur)',
    regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
    therapeuticClass: 'Vaksin & Serum Emergensi'
  }
};

/**
 * Normalizes a drug name or string to match against the Fornas restriction database
 */
export function normalizeFornasKey(str: string): string {
  return (str || '')
    .toLowerCase()
    .replace(/^drug-(fornas-)?/, '')
    .replace(/[^a-z0-9]/g, '');
}

/**
 * Lookup Fornas restriction data for a given drug
 */
export function getFornasRestriction(drug: Drug): FornasRestrictionInfo | undefined {
  if (drug.fornasData) return drug.fornasData;

  const candidateKeys = [
    normalizeFornasKey(drug.name || ''),
    normalizeFornasKey(drug.genericName || ''),
    normalizeFornasKey(drug.id || '')
  ];

  // Also check brand names
  if (drug.brandNames) {
    drug.brandNames.forEach(b => candidateKeys.push(normalizeFornasKey(b)));
  }

  // Exact key match against database
  for (const [key, restriction] of Object.entries(FORNAS_RESTRICTIONS_DATABASE)) {
    const cleanKey = normalizeFornasKey(key);
    if (candidateKeys.some(k => k === cleanKey || k.includes(cleanKey) || cleanKey.includes(k))) {
      return restriction;
    }
  }

  // Fallback: If drug ID contains "fornas" or description mentions Fornas
  const isFornasId = (drug.id || '').toLowerCase().includes('fornas');
  if (isFornasId) {
    return {
      isFornas: true,
      tier: '1, 2, 3',
      tierLabel: 'Faskes 1, 2 & 3 (Sesuai Panduan Terapi Fornas)',
      restrictionNote: 'Obat tercantum dalam Formularium Nasional (KMK No. HK.01.07/MENKES/1199/2025). Penggunaan sesuai indikasi medis yang disetujui BPJS Kesehatan.',
      maxPrescriptionLimit: 'Sesuai ketentuan paket INA-CBGs / PRB BPJS',
      prescriberCompetency: 'Dokter Berwenang sesuai Kompetensi',
      regulationsReference: 'KMK RI No. HK.01.07/MENKES/1199/2025',
      therapeuticClass: drug.category || 'Umum'
    };
  }

  return undefined;
}

/**
 * Enriches a Drug instance with official Fornas restriction metadata if available
 */
export function enrichDrugWithFornas(drug: Drug): Drug {
  if (drug.fornasData) return drug;
  const fornasData = getFornasRestriction(drug);
  if (fornasData) {
    return {
      ...drug,
      fornasData
    };
  }
  return drug;
}

/**
 * List of all parsed Fornas database items with human-readable keys
 */
export const ALL_FORNAS_RESTRICTION_ITEMS: FornasItemWithKey[] = Object.entries(FORNAS_RESTRICTIONS_DATABASE).map(
  ([key, value]) => {
    // Generate human-friendly title case drug name
    const cleanName = key
      .split('-')
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');

    return {
      key,
      name: cleanName,
      ...value
    };
  }
);

/**
 * Builds a unified, comprehensive FORNAS catalog by combining:
 * 1. The curated FORNAS_RESTRICTIONS_DATABASE (deep restriction rules, max limits, specialist rules)
 * 2. All drugs from the master database that have FORNAS/BPJS metadata, Faskes 1/2/3 flags, or FORNAS IDs
 */
export function buildUnifiedFornasCatalog(drugs: Drug[]): FornasItemWithKey[] {
  const resultMap = new Map<string, FornasItemWithKey>();

  // 1. First populate with high-fidelity curated restriction items
  ALL_FORNAS_RESTRICTION_ITEMS.forEach(item => {
    resultMap.set(normalizeFornasKey(item.key), item);
  });

  if (!drugs || drugs.length === 0) {
    return Array.from(resultMap.values());
  }

  // 2. Scan master drugs and seamlessly incorporate missing FORNAS drugs
  for (const drug of drugs) {
    const rawKey = normalizeFornasKey(drug.genericName || drug.name || drug.id);
    if (!rawKey) continue;

    // If already in curated list, it already has the richest metadata
    if (resultMap.has(rawKey)) continue;

    // Check if drug qualifies as FORNAS
    const isFornasId = (drug.id || '').toLowerCase().includes('fornas');
    const hasFaskes = Boolean(drug.faskesTK1 || drug.faskesTK2 || drug.faskesTK3);
    const hasBpjs = Boolean(drug.bpjsRestriksi);
    const hasFornasData = Boolean(drug.fornasData);
    const hasExplicitFornas = (drug.description || '').toLowerCase().includes('fornas') ||
                              (drug.indication || '').toLowerCase().includes('fornas');

    if (!isFornasId && !hasFaskes && !hasBpjs && !hasFornasData && !hasExplicitFornas) {
      continue;
    }

    // Determine tier
    let tier: FornasTier = '1, 2, 3';
    let tierLabel = 'Faskes 1, 2 & 3 (Puskesmas & RS)';

    if (drug.faskesTK1 && !drug.faskesTK2 && !drug.faskesTK3) {
      tier = '1';
      tierLabel = 'Faskes 1 (Puskesmas / FKTP)';
    } else if (!drug.faskesTK1 && (drug.faskesTK2 || drug.faskesTK3)) {
      tier = '2, 3';
      tierLabel = 'Faskes 2 & 3 (Khusus RS Rujukan)';
    } else if (drug.fornasData?.tier) {
      tier = drug.fornasData.tier;
      tierLabel = drug.fornasData.tierLabel || tierLabel;
    }

    // Determine restriction note
    const restrictionNote = drug.bpjsRestriksi ||
      drug.fornasData?.restrictionNote ||
      `Tercantum dalam Formularium Nasional (KMK No. HK.01.07/MENKES/1199/2025). Dijamin penuh sesuai indikasi medis paket INA-CBGs BPJS Kesehatan.`;

    const maxPrescriptionLimit = drug.fornasData?.maxPrescriptionLimit ||
      (drug.bpjsRestriksi && drug.bpjsRestriksi.toLowerCase().includes('maks') ? drug.bpjsRestriksi : 'Sesuai ketentuan paket INA-CBGs / SPMT');

    const prescriberCompetency = drug.fornasData?.prescriberCompetency ||
      (!drug.faskesTK1 ? 'Dokter Spesialis / Penanggung Jawab Terapi' : 'Dokter Berwenang di FKTP & FKRTL');

    const formAndStrength = drug.forms && drug.forms.length > 0 
      ? drug.forms.join(', ') 
      : (drug.dosage || 'Sediaan oral / parenteral standar Fornas');

    const isPrb = Boolean(
      drug.fornasData?.isPrb ||
      (drug.category && ['Antihipertensi', 'Antidiabetes', 'Asma', 'Kardiovaskular', 'Psikotropika', 'Endokrin'].some(c => drug.category.includes(c)) && (drug.faskesTK1 || tier.includes('1')))
    );

    resultMap.set(rawKey, {
      key: rawKey,
      name: drug.name,
      isFornas: true,
      tier,
      tierLabel,
      restrictionNote,
      maxPrescriptionLimit,
      prescriberCompetency,
      formAndStrength,
      regulationsReference: drug.fornasData?.regulationsReference || 'KMK RI No. HK.01.07/MENKES/1199/2025',
      therapeuticClass: drug.category || 'Umum & Penunjang',
      isPrb
    });
  }

  // Sort alphabetically by name
  return Array.from(resultMap.values()).sort((a, b) => a.name.localeCompare(b.name));
}

