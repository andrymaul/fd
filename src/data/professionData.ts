export interface ProfessionOption {
  id: string;
  label: string;
}

export interface ProfessionGroup {
  group: string;
  options: ProfessionOption[];
}

export const PROFESSION_GROUPS: ProfessionGroup[] = [
  {
    group: 'Kefarmasian',
    options: [
      { id: 'Apoteker - Rumah Sakit / Klinik', label: 'Apoteker - Rumah Sakit / Klinik' },
      { id: 'Apoteker - Apotek / Komunitas', label: 'Apoteker - Apotek / Komunitas' },
      { id: 'Apoteker - Puskesmas / Faskes Primer', label: 'Apoteker - Puskesmas' },
      { id: 'Apoteker - Industri Farmasi (QA/QC/R&D/Produksi)', label: 'Apoteker - Industri Farmasi (Pabrik Obat)' },
      { id: 'Apoteker - Distribusi / PBF', label: 'Apoteker - PBF / Distribusi Obat' },
      { id: 'Apoteker - Regulasi & Pemerintahan (Dinkes/BPOM/Kemenkes)', label: 'Apoteker - Dinkes / BPOM / Kemenkes' },
      { id: 'Apoteker Spesialis', label: 'Apoteker Spesialis (Sp.FRS / Farmasi Klinis)' },
      { id: 'Tenaga Vokasi Farmasi (D3/D4 Farmasi / TTK)', label: 'Tenaga Vokasi Farmasi (D3 / D4 Farmasi / TTK)' },
      { id: 'Asisten Tenaga Kefarmasian (SMK Farmasi)', label: 'Asisten Tenaga Kefarmasian (SMK Farmasi)' }
    ]
  },
  {
    group: 'Kedokteran & Keperawatan',
    options: [
      { id: 'Dokter Umum', label: 'Dokter Umum' },
      { id: 'Dokter Spesialis', label: 'Dokter Spesialis' },
      { id: 'Dokter Gigi', label: 'Dokter Gigi' },
      { id: 'Perawat (Nurse)', label: 'Perawat (Nurse)' },
      { id: 'Bidan', label: 'Bidan' }
    ]
  },
  {
    group: 'Industri, Manajemen & Pemerintahan',
    options: [
      { id: 'Profesional Industri Farmasi / Alkes', label: 'Staff / Profesional Industri Farmasi' },
      { id: 'Staf Regulasi & Pengawasan Obat (Dinkes/BPOM)', label: 'Staf Dinkes / BPOM / Kementerian' },
      { id: 'Manajemen / Pengelola Fasilitas Kesehatan', label: 'Manajemen RS / Pemilik Sarana Apotek' }
    ]
  },
  {
    group: 'Pendidikan & Calon Nakes',
    options: [
      { id: 'Mahasiswa Profesi Apoteker (PSPPA)', label: 'Mahasiswa Profesi Apoteker (PSPPA)' },
      { id: 'Mahasiswa S1 Farmasi', label: 'Mahasiswa S1 Farmasi' },
      { id: 'Mahasiswa D3 / Vokasi Farmasi', label: 'Mahasiswa D3 / Vokasi Farmasi' },
      { id: 'Mahasiswa Kedokteran / Co-Ass', label: 'Mahasiswa Kedokteran / Co-Ass' },
      { id: 'Dosen / Peneliti Farmasi & Kedokteran', label: 'Dosen / Peneliti Farmasi' }
    ]
  },
  {
    group: 'Lainnya',
    options: [
      { id: 'Tenaga Kesehatan Lainnya', label: 'Tenaga Kesehatan Lainnya' }
    ]
  }
];

export interface LicenseFieldConfig {
  label: string;
  placeholder: string;
  description: string;
}

export function getLicenseFieldConfig(profession?: string): LicenseFieldConfig {
  if (!profession) {
    return {
      label: 'Nomor Izin Praktik / STR / Identitas Profesi (SIP / SIPA / SIPTTK / NIP / NIM)',
      placeholder: 'Contoh: SIPA / SIPTTK / SIP Dokter / STR / NIP / NIM',
      description: 'Nomor izin praktik klinis, STR, NIP dinas/kantor, atau identitas akademik Anda.'
    };
  }

  const p = profession.toLowerCase();

  // Apoteker
  if (p.includes('apoteker')) {
    return {
      label: 'Nomor SIPA / STRA (Surat Izin Praktik / Registrasi Apoteker)',
      placeholder: 'Contoh: SIPA: 19920814/SIPA_31.74/2023/2019 atau No. STRA',
      description: 'Digunakan untuk verifikasi etiket resep, telaah klinis, dan bukti telusur akreditasi faskes.'
    };
  }

  // Tenaga Vokasi Farmasi / TTK
  if (p.includes('vokasi farmasi') || p.includes('ttk')) {
    return {
      label: 'Nomor SIPTVF / SIPTTK / STRTVF (Surat Izin Praktik / STR TTK)',
      placeholder: 'Contoh: SIPTVF: 19950512/SIPTTK_31.74/2023 atau No. STRTVF',
      description: 'Digunakan untuk identitas penyiapan obat, peracikan puyer, dan dispensing resep.'
    };
  }

  // Asisten Tenaga Kefarmasian (SMK Farmasi)
  if (p.includes('asisten tenaga kefarmasian') || p.includes('smk')) {
    return {
      label: 'Nomor Ijazah / STR / Izin Asisten Tenaga Kefarmasian',
      placeholder: 'Contoh: No. STR/Sertifikat Kompetensi atau ID Staf Farmasi',
      description: 'Nomor tanda registrasi kelulusan atau sertifikat kompetensi kefarmasian.'
    };
  }

  // Dokter (Umum, Spesialis, Gigi)
  if (p.includes('dokter')) {
    return {
      label: 'Nomor SIP Dokter / STR (Surat Izin Praktik / Registrasi Dokter)',
      placeholder: 'Contoh: SIP: 503/SIP-D/DPMPTSP/2023 atau No. STR Dokter',
      description: 'Digunakan untuk identitas telaah resep dan instruksi pengobatan klinis.'
    };
  }

  // Perawat / Bidan
  if (p.includes('perawat') || p.includes('nurse') || p.includes('bidan')) {
    return {
      label: 'Nomor SIPP / SIPB / STR (Izin Praktik Keperawatan / Kebidanan)',
      placeholder: 'Contoh: SIPP: 446/012/SIPP/2023 atau SIPB / STR Nakes',
      description: 'Digunakan untuk identitas kolaborasi interprofesional dan asuhan klinis pasien.'
    };
  }

  // Mahasiswa (PSPPA, S1, D3, Co-Ass)
  if (p.includes('mahasiswa') || p.includes('co-ass') || p.includes('psppa')) {
    return {
      label: 'Nomor Induk Mahasiswa (NIM) / Nomor Registrasi Kampus',
      placeholder: 'Contoh: NIM: 2108010045 (Universitas / Institut)',
      description: 'Identitas mahasiswa untuk pencatatan simulasi kasus klinis & tryout CBT.'
    };
  }

  // Dosen / Peneliti
  if (p.includes('dosen') || p.includes('peneliti')) {
    return {
      label: 'Nomor NIDN / NIP / STRA / ID Peneliti',
      placeholder: 'Contoh: NIDN: 0412058801 atau NIP / ID Akademisi',
      description: 'Identitas nomor induk dosen nasional atau ID periset akademik.'
    };
  }

  // Regulasi, Pemerintahan, Dinkes, BPOM, Kemenkes
  if (p.includes('regulasi') || p.includes('dinkes') || p.includes('bpom') || p.includes('kemenkes') || p.includes('pemerintahan')) {
    return {
      label: 'Nomor NIP / ID Pengawas / STRA / Surat Tugas',
      placeholder: 'Contoh: NIP: 19850315... atau STRA Pengawas Farmasi / Pegawai',
      description: 'Nomor identitas kedinasan, inspektorat, atau surat tugas pengawasan kefarmasian.'
    };
  }

  // Industri Farmasi / PBF / Manajemen RS / Apotek
  if (p.includes('industri') || p.includes('pbf') || p.includes('manajemen') || p.includes('sarana')) {
    return {
      label: 'Nomor STRA / SIPA / SIKA / NIP / ID Karyawan',
      placeholder: 'Contoh: STRA: 1990... atau ID Pegawai QA/QC/Produksi/Distribusi',
      description: 'Nomor registrasi penanggung jawab teknis kefarmasian atau ID staf instansi.'
    };
  }

  // Default fallback
  return {
    label: 'Nomor Izin Praktik / STR / Identitas Profesi (SIP / SIPA / SIPTTK / NIP / NIM)',
    placeholder: 'Contoh: SIPA / SIPTTK / SIP Dokter / STR / NIP / NIM',
    description: 'Nomor izin praktik klinis, STR, NIP dinas/kantor, atau identitas akademik Anda.'
  };
}
