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
