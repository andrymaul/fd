import { Drug, DrugInteraction, ClinicBrandingSettings } from '../types';

export interface SoapSubjectiveData {
  patientName: string;
  age: number;
  gender: string;
  comorbidities: string[];
  allergies: string[];
  lifestyle: {
    smoking: boolean;
    alcohol: string;
    caffeine: string;
  };
  specialConditions: {
    pregnancyStatus: string;
    isLactating: boolean;
  };
}

export interface SoapObjectiveData {
  vitals: {
    bloodPressure?: string;
    bpStatus?: string;
    bloodGlucose?: number;
    serumPotassium?: number;
    serumUricAcid?: number;
  };
  renalHepatic: {
    crCl: number;
    crClStage: string;
    hepaticFunction: string;
  };
  anthropometry: {
    weightKg: number;
    heightCm: number;
    bmi: number;
    bmiStatus: string;
    ibw: number;
  };
  activeRegimen: Array<{
    drugName: string;
    dose: string;
    frequency: string;
    foodTiming: string;
    scheduledTimes: string[];
  }>;
}

export interface SoapAssessmentData {
  polypharmacyRisk: {
    drugCount: number;
    level: string;
    summary: string;
  };
  dtpList: Array<{
    category: string;
    severity: 'high' | 'medium' | 'info';
    title: string;
    description: string;
  }>;
}

export interface SoapPlanData {
  deprescribingAndAdjustments: string[];
  administrationScheduleRecommendations: string[];
  monitoringParameters: string[];
  patientEducationPoints: string[];
}

export interface CompleteSoapReport {
  timestamp: string;
  subjective: SoapSubjectiveData;
  objective: SoapObjectiveData;
  assessment: SoapAssessmentData;
  plan: SoapPlanData;
  additionalPharmacistNotes?: string;
  plainTextCppt: string;
}

/**
 * Format date & time into Indonesian locale string
 */
export const getFormattedTimestamp = (): string => {
  const now = new Date();
  return now.toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }) + ' WIB';
};

/**
 * Evaluate renal stage based on CrCl Cockcroft-Gault
 */
export const getCrClStageDescription = (crCl: number): string => {
  if (crCl >= 90) return 'Normal / Tahap 1 (≥90 mL/min)';
  if (crCl >= 60) return 'Penurunan Ringan / Tahap 2 (60-89 mL/min)';
  if (crCl >= 45) return 'Gangguan Ginjal Sedang Tahap 3a (45-59 mL/min)';
  if (crCl >= 30) return 'Gangguan Ginjal Sedang-Berat Tahap 3b (30-44 mL/min)';
  if (crCl >= 15) return 'Gangguan Ginjal Berat Tahap 4 (15-29 mL/min)';
  return 'Gagal Ginjal Terminal / Tahap 5 (<15 mL/min)';
};

/**
 * Generate formatted Plain-Text CPPT for SIMRS / EHR Copy
 */
export const generatePlainTextCppt = (
  subjective: SoapSubjectiveData,
  objective: SoapObjectiveData,
  assessment: SoapAssessmentData,
  plan: SoapPlanData,
  additionalNotes: string = '',
  branding?: ClinicBrandingSettings
): string => {
  const facility = branding?.clinicName || 'FASILITAS PELAYANAN KEFARMASIAN';
  const pharmacist = branding?.pharmacistName || 'Apoteker Penanggung Jawab / Farmasi Klinis';
  const sipa = branding?.sipaNumber ? ` (SIPA: ${branding.sipaNumber})` : '';
  const timestamp = getFormattedTimestamp();

  const lines: string[] = [];

  lines.push('================================================================');
  lines.push(`CATATAN PERKEMBANGAN PASIEN TERINTEGRASI (CPPT) - FARMASI KLINIS`);
  lines.push(`${facility.toUpperCase()}`);
  lines.push(`Standar Akreditasi STARKES KARS & Permenkes RI No. 72/2016`);
  lines.push('================================================================');
  lines.push(`Waktu Telaah : ${timestamp}`);
  lines.push(`Nama Pasien  : ${subjective.patientName} (${subjective.age} thn, ${subjective.gender})`);
  lines.push(`Antropometri : BB ${objective.anthropometry.weightKg} kg | TB ${objective.anthropometry.heightCm} cm | BMI ${objective.anthropometry.bmi} kg/m² (${objective.anthropometry.bmiStatus}) | IBW ${objective.anthropometry.ibw} kg`);
  lines.push('----------------------------------------------------------------');

  // SUBJEKTIF
  lines.push('[ S ] SUBJEKTIF:');
  lines.push(`• Riwayat Penyakit (Komorbid): ${subjective.comorbidities.length > 0 ? subjective.comorbidities.join(', ') : 'Tidak ada komorbiditas tercatat'}`);
  lines.push(`• Riwayat Alergi Obat: ${subjective.allergies.length > 0 ? subjective.allergies.join(', ') : 'Tidak ada riwayat alergi obat terdokumentasi (NKA)'}`);
  lines.push(`• Gaya Hidup: Merokok (${subjective.lifestyle.smoking ? 'Ya' : 'Tidak'}), Alkohol (${subjective.lifestyle.alcohol}), Kafein (${subjective.lifestyle.caffeine})`);
  if (subjective.specialConditions.pregnancyStatus !== 'Tidak Hamil') {
    lines.push(`• Status Fisiologis Khusus: Kehamilan (${subjective.specialConditions.pregnancyStatus})`);
  }
  if (subjective.specialConditions.isLactating) {
    lines.push(`• Status Fisiologis Khusus: Ibu Menyusui (Laktasi Aktif)`);
  }

  lines.push('');

  // OBJEKTIF
  lines.push('[ O ] OBJEKTIF:');
  if (objective.vitals.bloodPressure) {
    lines.push(`• Tanda Vital: Tekanan Darah ${objective.vitals.bloodPressure} mmHg (${objective.vitals.bpStatus || 'Evaluasi Rutin'})`);
  }
  const labItems: string[] = [];
  if (objective.vitals.bloodGlucose) labItems.push(`GDS: ${objective.vitals.bloodGlucose} mg/dL`);
  if (objective.vitals.serumPotassium) labItems.push(`Kalium Serum: ${objective.vitals.serumPotassium} mmol/L`);
  if (objective.vitals.serumUricAcid) labItems.push(`Asam Urat: ${objective.vitals.serumUricAcid} mg/dL`);
  if (labItems.length > 0) {
    lines.push(`• Data Laboratorium: ${labItems.join(' | ')}`);
  }
  lines.push(`• Fungsi Ginjal & Hati: Klirens Kreatinin (CrCl) Cockcroft-Gault = ${objective.renalHepatic.crCl} mL/min [${objective.renalHepatic.crClStage}] | Fungsi Hati: ${objective.renalHepatic.hepaticFunction}`);
  lines.push(`• Profil Regimen Resep Aktif (${objective.activeRegimen.length} Macam Obat):`);
  objective.activeRegimen.forEach((rx, idx) => {
    const times = rx.scheduledTimes.length > 0 ? ` [Jam: ${rx.scheduledTimes.join(', ')}]` : '';
    lines.push(`  ${idx + 1}. ${rx.drugName} ${rx.dose} - ${rx.frequency} (${rx.foodTiming})${times}`);
  });

  lines.push('');

  // ASSESSMENT
  lines.push('[ A ] ASSESSMENT (ANALISIS MASALAH TERKAIT OBAT / DTPs):');
  lines.push(`• Profil Beban Terapi: ${assessment.polypharmacyRisk.summary}`);
  if (assessment.dtpList.length === 0) {
    lines.push(`• Tidak teridentifikasi Drug Therapy Problems (DTPs) mayor. Regimen terapi dinilai rasional dan aman.`);
  } else {
    assessment.dtpList.forEach((dtp, idx) => {
      lines.push(`• [DTP ${idx + 1} - ${dtp.category}] ${dtp.title}`);
      lines.push(`   Keterangan: ${dtp.description}`);
    });
  }

  lines.push('');

  // PLAN
  lines.push('[ P ] PLAN (RENCANA ASUHAN KEFARMASIAN & REKOMENDASI KLINIS):');
  lines.push('1. Rekomendasi Modifikasi Terapi & Deprescribing:');
  if (plan.deprescribingAndAdjustments.length > 0) {
    plan.deprescribingAndAdjustments.forEach(item => lines.push(`   - ${item}`));
  } else {
    lines.push(`   - Pertahankan regimen obat saat ini dengan pemantauan kepatuhan.`);
  }

  lines.push('2. Penataan Jadwal & Pemisahan Konsumsi Obat:');
  if (plan.administrationScheduleRecommendations.length > 0) {
    plan.administrationScheduleRecommendations.forEach(item => lines.push(`   - ${item}`));
  } else {
    lines.push(`   - Konsumsi obat sesuai instruksi waktu makan dan jadwal yang telah ditetapkan.`);
  }

  lines.push('3. Rencana Pemantauan Klinis & Laboratorium (Monitoring):');
  if (plan.monitoringParameters.length > 0) {
    plan.monitoringParameters.forEach(item => lines.push(`   - ${item}`));
  } else {
    lines.push(`   - Monitoring efikasi terapeutik dan kepatuhan konsumsi obat secara berkala.`);
  }

  lines.push('4. Edukasi Informasi Obat (PIO) Pasien:');
  if (plan.patientEducationPoints.length > 0) {
    plan.patientEducationPoints.forEach(item => lines.push(`   - ${item}`));
  } else {
    lines.push(`   - Jelaskan indikasi, aturan pakai, kepatuhan obat kronis, dan pencegahan efek samping.`);
  }

  if (additionalNotes && additionalNotes.trim().length > 0) {
    lines.push('');
    lines.push(`[ CATATAN TAMBAHAN APOTEKER ]:`);
    lines.push(`${additionalNotes.trim()}`);
  }

  lines.push('----------------------------------------------------------------');
  lines.push(`Penelaah Resep: ${pharmacist}${sipa}`);
  lines.push(`Dokumentasi sah Pelayanan Farmasi Klinis berstandar STARKES KARS`);
  lines.push('================================================================');

  return lines.join('\n');
};
