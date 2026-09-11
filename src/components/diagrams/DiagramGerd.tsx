import React, { useState } from 'react';
import {
  Flame,
  Stethoscope,
  ShieldAlert,
  ExternalLink,
  Zap,
  Sparkles,
  Layers,
  Activity,
  CheckCircle2,
  AlertTriangle,
  Pill,
  ShieldCheck,
  Clock,
  Moon,
  HeartPulse,
  Info,
  Scale,
  Calendar,
  ChevronDown,
  ChevronUp,
  Utensils,
  Sun,
  X,
  Copy,
  Check,
  Printer
} from 'lucide-react';
import { DiseaseFlowchartData } from '../../data/clinicalFlowchartData';

interface DiagramProps {
  currentDisease: DiseaseFlowchartData;
  onDrugClick: (drugName: string) => void;
  onTestRegimen: (drugList: string[]) => void;
}

export const DiagramGerd: React.FC<DiagramProps> = ({
  onDrugClick,
  onTestRegimen
}) => {
  const [showFull24hSchedule, setShowFull24hSchedule] = useState<boolean>(false);
  const [copiedSchedule, setCopiedSchedule] = useState<boolean>(false);

  const handleCopySchedule = () => {
    const text = `JADWAL KRONOLOGIS MINUM OBAT LAMBUNG (GERD / GASTRITIS) 24 JAM:
1. PUKUL 06.30 (Pagi - 30-60 Menit Sebelum Sarapan):
   - PPI (Lansoprazole 30 mg / Omeprazole 20 mg) + Domperidone 10 mg (jika ada).
   - Diminum saat perut kosong semalaman agar diserap optimal tanpa hambatan polimer gel pelindung.
2. PUKUL 07.00:
   - Sarapan Pagi. (Pompa proton yang terangsang makanan langsung diblokade oleh PPI dalam sirkulasi).
3. PUKUL 08.30-09.00 (Bila Perlu / p.r.n):
   - Antasida DOEN (Hanya bila masih ada rasa pedih terbakar/kembung).
4. PUKUL 10.00 (Antara Sarapan & Makan Siang - 2 Jam Pasca Sarapan):
   - Sukralfat Suspensi Dosis ke-1 (5-10 mL) saat lambung kembali kosong untuk melapisi luka erosi tanpa mengganggu serapan PPI.
5. PUKUL 11.30 (30 Menit Sebelum Makan Siang):
   - Domperidone 10 mg dosis ke-2 (jika diresepkan untuk pacu motilitas).
6. PUKUL 12.00:
   - Makan Siang.
7. PUKUL 16.00 (Sore - Di Antara Makan Siang & Malam):
   - Sukralfat Suspensi Dosis ke-2 (5-10 mL) saat lambung kosong (2 jam pasca makan siang).
8. PUKUL 18.30 (30 Menit Sebelum Makan Malam):
   - PPI dosis ke-2 (bila dosis ganda) + Domperidone dosis ke-3 (jeda aman >2 jam dari Sukralfat).
9. PUKUL 19.00:
   - Makan Malam.
10. PUKUL 22.00 (Sebelum Tidur Malam - Hora Somni):
    - Sukralfat Dosis Malam (hs) ATAU Famotidine 20-40 mg (cegah Nocturnal Acid Breakthrough). Tinggikan bantal 15-20 cm.
CATATAN PENTING: Standar klinis FDA/Lexicomp mewajibkan jeda minimal 2 jam antara Sukralfat dan obat oral lainnya (PPI/Antasida) guna mencegah gangguan penyerapan!`;

    navigator.clipboard.writeText(text);
    setCopiedSchedule(true);
    setTimeout(() => setCopiedSchedule(false), 2000);
  };

  const handlePrintPatientSchedule = () => {
    const printWindow = window.open('', '_blank', 'width=850,height=900');
    if (!printWindow) {
      alert('Mohon izinkan pop-up browser untuk mencetak lembar jadwal pasien.');
      return;
    }

    const todayDate = new Date().toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="id">
      <head>
        <meta charset="UTF-8">
        <title>Lembar Jadwal Minum Obat GERD - Konseling Pasien</title>
        <style>
          @page {
            size: A4 portrait;
            margin: 10mm 12mm;
          }
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            color: #0f172a;
            background: #ffffff;
            font-size: 9pt;
            line-height: 1.35;
            padding: 4mm;
          }
          .header {
            border-bottom: 2px solid #0f172a;
            padding-bottom: 6px;
            margin-bottom: 10px;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
          }
          .header-title h1 {
            font-size: 13pt;
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            color: #0f172a;
          }
          .header-title p {
            font-size: 8pt;
            color: #475569;
            margin-top: 2px;
          }
          .badge {
            display: inline-block;
            background: #0f172a;
            color: #ffffff;
            font-size: 8pt;
            font-weight: 800;
            padding: 3px 8px;
            border-radius: 4px;
            text-transform: uppercase;
          }
          .patient-box {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 6px;
            border: 1px solid #cbd5e1;
            background: #f8fafc;
            padding: 6px 8px;
            border-radius: 6px;
            font-size: 8pt;
            margin-bottom: 10px;
          }
          .patient-box div {
            display: flex;
            flex-direction: column;
          }
          .patient-box span.label {
            font-size: 7pt;
            font-weight: 700;
            color: #64748b;
            text-transform: uppercase;
          }
          .patient-box span.val {
            font-weight: 600;
            color: #0f172a;
            border-bottom: 1px dotted #94a3b8;
            padding-bottom: 1px;
            min-height: 14px;
          }
          .alert-box {
            border: 1.5px solid #d97706;
            background: #fffbeb;
            border-radius: 6px;
            padding: 6px 8px;
            margin-bottom: 10px;
          }
          .alert-title {
            font-size: 8pt;
            font-weight: 900;
            color: #92400e;
            text-transform: uppercase;
            margin-bottom: 4px;
          }
          .rules-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 6px;
            font-size: 7.5pt;
          }
          .rule-item {
            background: #ffffff;
            border: 1px solid #fde68a;
            padding: 4px 6px;
            border-radius: 4px;
          }
          .rule-item strong {
            color: #b45309;
          }
          .timeline-banner {
            background: #f1f5f9;
            border: 1px solid #cbd5e1;
            border-radius: 6px;
            padding: 6px 8px;
            margin-bottom: 10px;
          }
          .timeline-banner-title {
            font-size: 8pt;
            font-weight: 800;
            color: #0f172a;
            text-transform: uppercase;
            margin-bottom: 4px;
          }
          .steps-flex {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 6px;
            text-align: center;
          }
          .step-card {
            background: #ffffff;
            border: 1px solid #cbd5e1;
            border-radius: 4px;
            padding: 4px;
          }
          .step-num {
            font-size: 7pt;
            font-weight: 900;
            color: #0284c7;
          }
          .step-drug {
            font-size: 8pt;
            font-weight: 800;
            color: #0f172a;
            margin: 1px 0;
          }
          .step-desc {
            font-size: 6.8pt;
            color: #475569;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            font-size: 7.5pt;
            margin-bottom: 10px;
          }
          th {
            background: #0f172a;
            color: #ffffff;
            font-weight: 800;
            text-transform: uppercase;
            font-size: 7pt;
            padding: 4px 6px;
            border: 1px solid #0f172a;
          }
          td {
            padding: 4px 6px;
            border: 1px solid #cbd5e1;
            vertical-align: top;
          }
          tr:nth-child(even) {
            background: #f8fafc;
          }
          .time-badge {
            font-weight: 900;
            color: #b45309;
            white-space: nowrap;
          }
          .drug-bold {
            font-weight: 800;
            color: #0f172a;
          }
          .notes-grid {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 8px;
            margin-bottom: 8px;
          }
          .lifestyle-box {
            border: 1px solid #94a3b8;
            border-radius: 6px;
            padding: 6px 8px;
            font-size: 7pt;
            background: #fafafa;
          }
          .lifestyle-box h4 {
            font-size: 7.5pt;
            font-weight: 800;
            color: #0f172a;
            text-transform: uppercase;
            margin-bottom: 3px;
          }
          .signature-box {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
            text-align: center;
            font-size: 7pt;
          }
          .sig-card {
            border: 1px solid #cbd5e1;
            border-radius: 6px;
            padding: 4px;
            background: #ffffff;
          }
          .sig-space {
            height: 30px;
          }
          .footer-text {
            border-top: 1px solid #cbd5e1;
            padding-top: 4px;
            font-size: 6.8pt;
            color: #64748b;
            display: flex;
            justify-content: space-between;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="header-title">
            <h1>Panduan Jadwal Minum Obat Lambung (GERD / Gastritis)</h1>
            <p>Standar Pelayanan Informasi Obat (PIO) Farmasi Klinis • Sesuai Konsensus PGI-PEGI 2023 & Permenkes RI</p>
          </div>
          <div class="badge">LEMBAR PASIEN</div>
        </div>

        <div class="patient-box">
          <div>
            <span class="label">Nama Pasien:</span>
            <span class="val">................................................</span>
          </div>
          <div>
            <span class="label">No. Rekam Medis:</span>
            <span class="val">................................................</span>
          </div>
          <div>
            <span class="label">Tanggal Pelayanan:</span>
            <span class="val">${todayDate}</span>
          </div>
          <div>
            <span class="label">Apoteker Konselor:</span>
            <span class="val">apt. ........................................</span>
          </div>
        </div>

        <div class="alert-box">
          <div class="alert-title">⚠️ 4 Aturan Emas Jeda Minum Obat (Konsensus Klinis & FDA):</div>
          <div class="rules-grid">
            <div class="rule-item"><strong>Jeda 1 (PPI ➔ Makan):</strong> Wajib diminum 30–60 menit SEBELUM sarapan (ac). Obat butuh diserap di usus agar siap memblokir pompa asam saat makanan masuk.</div>
            <div class="rule-item"><strong>Jeda 2 (PPI ➔ Sukralfat):</strong> Jeda minimal 2 jam. Sukralfat dijadwalkan di antara waktu makan (jam 10.00 & 16.00), BUKAN mendahului PPI agar tidak mengadsorpsi sediaan PPI.</div>
            <div class="rule-item"><strong>Jeda 3 (Sukralfat ➔ Antasida):</strong> Jeda minimal 1–2 jam. Antasida menaikkan pH lambung seketika dan merusak pembentukan gel polimer asam sukralfat (butuh pH &lt; 4).</div>
            <div class="rule-item"><strong>Jeda 4 (Antasida ➔ Obat Lain):</strong> Jeda minimal 2 jam. Antasida hanya diminum p.r.n (bila perlu) dan dapat mengikat/menurunkan penyerapan obat lain.</div>
          </div>
        </div>

        <div class="timeline-banner">
          <div class="timeline-banner-title">Urutan Waktu Minum Sekitar Waktu Makan (T = Jam Makan):</div>
          <div class="steps-flex">
            <div class="step-card">
              <div class="step-num">1. T-30 s/d T-60 MENIT</div>
              <div class="step-drug">PPI + Prokinetik</div>
              <div class="step-desc">Omeprazole/Lansoprazole + Domperidone (perut kosong). Diserap bebas di usus tanpa hambatan adsorpsi gel.</div>
            </div>
            <div class="step-card">
              <div class="step-num">2. WAKTU MAKAN (T-0)</div>
              <div class="step-drug">Makan Utama</div>
              <div class="step-desc">Makanan merangsang sekresi asam, langsung diblokir permanen oleh PPI yang telah beredar di darah.</div>
            </div>
            <div class="step-card">
              <div class="step-num">3. T+120 MENIT / ANTARA MAKAN</div>
              <div class="step-drug">Sukralfat Suspensi</div>
              <div class="step-desc">Jam 10.00 & 16.00 (lambung kosong). pH asam membentuk gel pelapis luka tanpa mengganggu serapan obat.</div>
            </div>
            <div class="step-card">
              <div class="step-num">4. T+90 MENIT (p.r.n)</div>
              <div class="step-drug">Antasida (Bila Perlu)</div>
              <div class="step-desc">Hanya bila masih pedih/kembung lolos. Netralkan asam lambung berlebih pasca makan.</div>
            </div>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th style="width: 14%;">Jam</th>
              <th style="width: 28%;">Obat & Sediaan</th>
              <th style="width: 30%;">Tujuan Pengobatan</th>
              <th style="width: 28%;">Petunjuk Penggunaan Untuk Pasien</th>
            </tr>
          </thead>
          <tbody>
            <tr style="background: #fefce8;">
              <td class="time-badge" style="color: #c2410c;">06.30 (Pagi)</td>
              <td class="drug-bold">PPI (Lansoprazole 30mg / Omeprazole 20mg) &plusmn; Domperidone</td>
              <td>Blokade pompa asam lambung & mempercepat pengosongan lambung</td>
              <td>Telan utuh kapsul dengan air putih saat perut kosong. <strong>Tunggu 30–60 menit sebelum sarapan pagi</strong>.</td>
            </tr>
            <tr>
              <td class="time-badge" style="color: #15803d;">07.00 (Pagi)</td>
              <td class="drug-bold">Sarapan Pagi (Makan Utama)</td>
              <td>Asam terstimulasi makanan langsung diblokir permanen oleh obat PPI</td>
              <td>Makan dalam porsi wajar. Hindari gorengan berlemak, kopi pekat, dan cabai.</td>
            </tr>
            <tr style="background: #f8fafc;">
              <td class="time-badge" style="color: #0369a1;">08.30 (Pagi)</td>
              <td class="drug-bold">Antasida DOEN (Tablet Kunyah / Sirup)</td>
              <td>Meredakan sisa rasa terbakar/pedih ulu hati yang lolos pasca makan</td>
              <td><strong>HANYA bila masih pedih/kembung (p.r.n)</strong>. Kunyah tablet sampai halus. Jeda 2 jam dari obat lain.</td>
            </tr>
            <tr>
              <td class="time-badge">10.00 (Pagi)</td>
              <td class="drug-bold">Sukralfat Suspensi (5–10 mL) Dosis ke-1</td>
              <td>Melapisi dinding kawah luka lambung & esofagus di antara waktu makan</td>
              <td>Kocok botol. Minum saat lambung kembali kosong (2 jam pasca sarapan). Jeda aman tidak mengganggu serapan PPI.</td>
            </tr>
            <tr>
              <td class="time-badge">11.30 & 12.00</td>
              <td class="drug-bold">11.30: Domperidone &bull; 12.00: Makan Siang</td>
              <td>Mempercepat motilitas saluran cerna & makan siang</td>
              <td>11.30 Domperidone 10 mg (bila diresepkan) ➔ 12.00 Makan Siang. Jangan berbaring setelah makan.</td>
            </tr>
            <tr>
              <td class="time-badge">16.00 (Sore)</td>
              <td class="drug-bold">Sukralfat Suspensi Dosis ke-2</td>
              <td>Pembaruan lapisan pelindung mukosa sore hari saat lambung kosong</td>
              <td>Minum di antara waktu makan siang dan malam (2 jam pasca makan siang / 2.5 jam sebelum makan malam).</td>
            </tr>
            <tr style="background: #fefce8;">
              <td class="time-badge" style="color: #c2410c;">18.30 & 19.00</td>
              <td class="drug-bold">18.30: PPI Dosis ke-2 &bull; 19.00: Makan Malam</td>
              <td>Supresi asam malam hari (jeda >2 jam dari sukralfat aman dari gangguan absorpsi)</td>
              <td>18.30 PPI Dosis ke-2 (bila terapi ganda) ➔ Tunggu 30 mnt ➔ 19.00 Makan Malam.</td>
            </tr>
            <tr>
              <td class="time-badge" style="color: #4338ca;">22.00 (Malam)</td>
              <td class="drug-bold">Sukralfat Dosis Malam (hs) ATAU Famotidine 20–40mg</td>
              <td>Mencegah refluks asam malam hari (Nocturnal Acid Breakthrough / NAB)</td>
              <td>Minum sebelum tidur malam (minimal 3 jam pasca makan malam). Gunakan bantal baji 15–20 cm saat tidur.</td>
            </tr>
          </tbody>
        </table>

        <div class="notes-grid">
          <div class="lifestyle-box">
            <h4>Panduan Gaya Hidup Higiene Refluks:</h4>
            <div>• <strong>Posisi Tidur:</strong> Ganjal kaki kepala tempat tidur 15–20 cm (bukan bantal tinggi). Miring kiri lebih aman.</div>
            <div>• <strong>Waktu Baring:</strong> Dilarang langsung berbaring dalam kurun 2–3 jam setelah selesai makan malam.</div>
            <div>• <strong>Pantangan Makanan:</strong> Cokelat, mint, kopi, teh pekat, minuman bersoda, alkohol, makanan pedas & berlemak.</div>
          </div>
          <div class="signature-box">
            <div class="sig-card">
              <div style="font-weight: 700;">Pasien / Keluarga</div>
              <div class="sig-space"></div>
              <div style="border-top: 1px dotted #94a3b8; padding-top: 2px;">(Tanda Tangan & Nama)</div>
            </div>
            <div class="sig-card">
              <div style="font-weight: 700;">Apoteker Konselor</div>
              <div class="sig-space"></div>
              <div style="border-top: 1px dotted #94a3b8; padding-top: 2px;">(apt. ................................)</div>
            </div>
          </div>
        </div>

        <div class="footer-text">
          <span>Farmasi Druggist • Lembar Resmi Pelayanan Informasi Obat (PIO) Pasien GERD</span>
          <span>Harap dibawa kembali saat kontrol berikutnya</span>
        </div>
      </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 400);
  };

  return (
    <div className="space-y-6 bg-gradient-to-b from-[#1c0c03] via-[#291405] to-[#140801] rounded-3xl p-4 sm:p-7 border-2 border-orange-500/30 shadow-2xl relative overflow-hidden text-white font-outfit">
      {/* Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* ================================================================= */}
      {/* LEVEL 1: TRIASE GEJALA TIPIKAL, FAST-ACTING RELIEF, & ALARM SIGNS */}
      {/* ================================================================= */}
      <div className="max-w-5xl mx-auto space-y-3 relative z-10">
        <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-[#381604] via-[#4d2007] to-[#381604] border-2 border-orange-400/60 shadow-xl space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-orange-500/30 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-orange-500 text-slate-950 flex items-center justify-center font-black text-base shadow-lg shrink-0">
                <Flame className="w-5 h-5 text-slate-950" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                  <span>Tahap 1: Evaluasi Gejala Tipikal, Skrining Alarm Signs, &amp; Pereda Akut</span>
                </h4>
                <p className="text-xs text-orange-200/80 font-medium">
                  Konsensus Perkumpulan Gastroenterologi Indonesia (PGI-PEGI 2023) &amp; ACG Clinical Guidelines 2022
                </p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 border border-orange-400/40 text-[11px] font-black uppercase tracking-wider self-start sm:self-auto">
              Triase &amp; Skrining Awal
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 pt-1">
            {/* Jalur Tipikal & Fast-Acting Relief (7 Kolom) */}
            <div className="lg:col-span-7 p-4 rounded-2xl bg-black/40 border border-emerald-500/40 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-emerald-300 uppercase tracking-wide flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Jalur Tipikal: Uncomplicated GERD
                </span>
                <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2.5 py-0.5 rounded-full font-bold border border-emerald-600/40">
                  Tanpa Alarm Signs
                </span>
              </div>
              <p className="text-xs text-emerald-100/90 leading-relaxed">
                Sensasi rasa terbakar di dada (<strong>heartburn</strong>) dan rasa asam/pahit di lidah (<strong>regurgitasi</strong>) &ge; 2x seminggu. Lakukan <strong>PPI Test empiris 2–4 minggu</strong>.
              </p>

              {/* Fast Acting Symptomatic Relief Box */}
              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-emerald-200 flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    Pereda Simtomatik Cepat (Saat Onset Akut / Menunggu Efek PPI):
                  </span>
                  <span className="text-[9px] bg-emerald-900/60 text-emerald-300 px-1.5 py-0.5 rounded font-bold">Fast-Acting</span>
                </div>
                <p className="text-[10px] text-emerald-100/70 leading-snug">
                  PPI membutuhkan 2–3 hari untuk mencapai supresi asam maksimal. Berikan penetralisir asam cepat p.r.n saat serangan pedih:
                </p>
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  <button
                    onClick={() => onDrugClick('Antasida DOEN')}
                    className="px-2 py-1 rounded-lg bg-emerald-500/20 text-emerald-200 text-[11px] font-bold border border-emerald-400/40 flex items-center gap-1 hover:bg-emerald-500/30 transition-all cursor-pointer"
                  >
                    <Pill className="w-3 h-3 text-emerald-400" />
                    <span>Antasida DOEN (Al/Mg + Simetikon)</span>
                    <ExternalLink className="w-2.5 h-2.5 text-emerald-400" />
                  </button>
                  <button
                    onClick={() => onDrugClick('Natrium Alginat')}
                    className="px-2 py-1 rounded-lg bg-teal-500/20 text-teal-200 text-[11px] font-bold border border-teal-400/40 flex items-center gap-1 hover:bg-teal-500/30 transition-all cursor-pointer"
                  >
                    <Pill className="w-3 h-3 text-teal-400" />
                    <span>Natrium Alginat (Raft Barrier)</span>
                    <ExternalLink className="w-2.5 h-2.5 text-teal-400" />
                  </button>
                  <button
                    onClick={() => onDrugClick('Sukralfat')}
                    className="px-2 py-1 rounded-lg bg-amber-500/20 text-amber-200 text-[11px] font-bold border border-amber-400/40 flex items-center gap-1 hover:bg-amber-500/30 transition-all cursor-pointer"
                  >
                    <Pill className="w-3 h-3 text-amber-400" />
                    <span>Sukralfat Suspensi 500 mg/5 mL</span>
                    <ExternalLink className="w-2.5 h-2.5 text-amber-400" />
                  </button>
                </div>
              </div>

              {/* Differensial Rule-out ACS */}
              <div className="text-[10px] text-amber-300/90 font-medium flex items-center gap-1.5 bg-black/40 px-2.5 py-1 rounded-lg border border-amber-500/30">
                <HeartPulse className="w-3.5 h-3.5 text-red-400 shrink-0" />
                <span>Peringatan Klinis: Singkirkan Sindrom Koroner Akut (Angina Pektoris / ACS) bila nyeri dada disertai penjalaran ke rahang/lengan kiri &amp; keringat dingin!</span>
              </div>
            </div>

            {/* Jalur Alarm Signs / Red Flags (5 Kolom) */}
            <div className="lg:col-span-5 p-4 rounded-2xl bg-[#2a0808] border-2 border-rose-500/70 shadow-lg space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-rose-300 uppercase tracking-wide flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-rose-400 animate-pulse" />
                  Jalur Tanda Bahaya (Alarm Signs)
                </span>
                <span className="text-[10px] bg-rose-950 text-rose-300 px-2.5 py-0.5 rounded-full font-bold border border-rose-600/40">
                  Red Flags
                </span>
              </div>
              <ul className="text-xs text-rose-100/90 space-y-1 leading-snug">
                <li>• <strong>Disfagia:</strong> Sulit menelan makanan padat/cair</li>
                <li>• <strong>Odinofagia:</strong> Nyeri menusuk saat menelan</li>
                <li>• <strong>Penurunan BB:</strong> &gt; 10% tidak disengaja</li>
                <li>• <strong>Perdarahan Saluran Cerna:</strong> Hematemesis / melena</li>
                <li>• <strong>Anemia Defisiensi Besi:</strong> Hb anjlok tanpa sebab</li>
                <li>• <strong>Onset Usia Lanjut:</strong> Keluhan baru muncul usia &gt; 45–50 tahun</li>
              </ul>
              <div className="p-2.5 rounded-xl bg-red-950/80 border border-red-500/50 text-[11px] text-red-200 font-bold space-y-0.5">
                <div className="text-white flex items-center gap-1">
                  <AlertTriangle className="w-3.5 h-3.5 text-red-400 shrink-0" />
                  <span>TINDAKAN: RUJUK GASTROSKOPI ENDOSKOPI (EGD) CITO!</span>
                </div>
                <p className="text-[10px] text-red-200/80 font-normal">
                  Wajib menyingkirkan Adenokarsinoma Esofagus, Karsinoma Gaster, Ulkus Peptik, atau Striktur. Jangan hanya diobati empiris!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONNECTING ARROW 1 */}
      <div className="flex flex-col items-center justify-center relative z-10 -my-2">
        <div className="w-0.5 h-7 bg-gradient-to-b from-orange-400 to-amber-500" />
        <div className="w-2.5 h-2.5 border-r-2 border-b-2 border-amber-400 rotate-45 -mt-1.5" />
      </div>

      {/* ================================================================= */}
      {/* LEVEL 2: PPI DOSIS GANDA, NOCTURNAL BREAKTHROUGH, & ESKALASI P-CAB */}
      {/* ================================================================= */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 relative z-10">
        {/* LINI 1: PPI TEST & INISIASI SUPRESI ASAM (7 Kolom) */}
        <div className="lg:col-span-7 p-4 sm:p-5 rounded-3xl bg-gradient-to-b from-[#2e1305] to-[#1c0a02] border-2 border-orange-500/60 shadow-xl space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-orange-800/80 pb-2">
            <span className="text-xs sm:text-sm font-black text-orange-300 uppercase tracking-wide flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-orange-400" />
              Lini 1: PPI Dosis Ganda (2–4 Minggu s/d 8 Minggu)
            </span>
            <span className="text-[10px] font-bold bg-orange-950 text-orange-300 px-2.5 py-0.5 rounded-full border border-orange-600/40">
              30–60 Menit ac
            </span>
          </div>

          <p className="text-xs text-orange-100/90 leading-relaxed">
            Berikan PPI dua kali sehari sebelum sarapan pagi dan makan malam. Respon gejala berkurang &gt; 50% mengonfirmasi diagnosis klinis GERD; lanjutkan terapi inisiasi 4–8 minggu penuh.
          </p>

          <div className="space-y-2 pt-1">
            <div className="text-[11px] font-bold text-orange-300 flex items-center gap-1">
              <Layers className="w-3.5 h-3.5 text-orange-400" />
              Pilihan Obat PPI Sesuai Ketersediaan &amp; Indikasi:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                onClick={() => onDrugClick('Omeprazole')}
                className="p-2.5 rounded-xl bg-orange-500/20 text-orange-200 text-xs font-bold border border-orange-400/40 flex items-center justify-between hover:bg-orange-500/30 transition-all cursor-pointer text-left"
              >
                <div>
                  <div className="flex items-center gap-1">
                    <Pill className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                    <span className="font-black text-white">Omeprazole</span>
                  </div>
                  <span className="text-[10px] text-orange-300/90 block">20 mg 2x/hari ac (Lini 1 BPJS)</span>
                </div>
                <ExternalLink className="w-3 h-3 text-orange-400 shrink-0" />
              </button>

              <button
                onClick={() => onDrugClick('Lansoprazole')}
                className="p-2.5 rounded-xl bg-orange-500/20 text-orange-200 text-xs font-bold border border-orange-400/40 flex items-center justify-between hover:bg-orange-500/30 transition-all cursor-pointer text-left"
              >
                <div>
                  <div className="flex items-center gap-1">
                    <Pill className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                    <span className="font-black text-white">Lansoprazole</span>
                  </div>
                  <span className="text-[10px] text-orange-300/90 block">30 mg 2x/hari ac (Faskes 1/2/3)</span>
                </div>
                <ExternalLink className="w-3 h-3 text-orange-400 shrink-0" />
              </button>

              <button
                onClick={() => onDrugClick('Esomeprazole')}
                className="p-2.5 rounded-xl bg-orange-500/20 text-orange-200 text-xs font-bold border border-orange-400/40 flex items-center justify-between hover:bg-orange-500/30 transition-all cursor-pointer text-left"
              >
                <div>
                  <div className="flex items-center gap-1">
                    <Pill className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                    <span className="font-black text-white">Esomeprazole</span>
                  </div>
                  <span className="text-[10px] text-orange-300/90 block">40 mg 1–2x/hari ac (S-Isomer Unggul)</span>
                </div>
                <ExternalLink className="w-3 h-3 text-orange-400 shrink-0" />
              </button>

              <button
                onClick={() => onDrugClick('Pantoprazole')}
                className="p-2.5 rounded-xl bg-orange-500/20 text-orange-200 text-xs font-bold border border-orange-400/40 flex items-center justify-between hover:bg-orange-500/30 transition-all cursor-pointer text-left"
              >
                <div>
                  <div className="flex items-center gap-1">
                    <Pill className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                    <span className="font-black text-white">Pantoprazole</span>
                  </div>
                  <span className="text-[10px] text-orange-300/90 block">40 mg 1x/hari ac (Aman + Clopidogrel)</span>
                </div>
                <ExternalLink className="w-3 h-3 text-orange-400 shrink-0" />
              </button>
            </div>

            {/* PANDUAN KRONOLOGI & JEDA KOMBINASI POLIFARMASI LAMBUNG (UPGRADED) */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-black/80 via-[#1c0e04] to-black/80 border-2 border-amber-500/60 shadow-xl space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-500/30 pb-2">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-xs font-black text-amber-300 uppercase tracking-wide">
                    Urutan &amp; Jeda Minum (Bila Dapat Bersamaan)
                  </span>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <button
                    onClick={handlePrintPatientSchedule}
                    className="px-2.5 py-1 rounded-lg bg-cyan-600/80 hover:bg-cyan-500 text-white text-[11px] font-bold border border-cyan-400/50 flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
                    title="Cetak Lembar Jadwal PIO Pasien"
                  >
                    <Printer className="w-3.5 h-3.5 text-white" />
                    <span>🖨️ Cetak Lembar PIO</span>
                  </button>
                  <button
                    onClick={() => setShowFull24hSchedule(prev => !prev)}
                    className="px-2.5 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 text-[11px] font-bold border border-amber-400/50 flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
                  >
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>{showFull24hSchedule ? 'Tutup Tabel Jam' : '📋 Buka Jadwal 24-Jam Pasien'}</span>
                    {showFull24hSchedule ? <ChevronUp className="w-3 h-3 text-amber-300" /> : <ChevronDown className="w-3 h-3 text-amber-300" />}
                  </button>
                </div>
              </div>

              {/* VISUAL 4-PHASE STEPPER SEBELUM & SESUDAH MAKAN */}
              <div className="space-y-1.5">
                <div className="text-[10px] text-amber-200/90 font-bold uppercase tracking-wider flex items-center justify-between">
                  <span>Urutan Waktu Wajib (Standar Klinis PPI First &amp; Jeda 2 Jam):</span>
                  <span className="text-amber-400 text-[9px] font-mono">T = Waktu Makan</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                  {/* Step 1: T-30 s/d T-60 */}
                  <div className="p-2 rounded-xl bg-orange-950/40 border border-orange-500/30 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black text-orange-400">1. T-30 s/d T-60</span>
                      <span className="text-[8px] bg-orange-900/80 text-orange-300 px-1 py-0.2 rounded font-bold">Sebelum ac</span>
                    </div>
                    <div className="text-xs font-black text-white flex items-center gap-1">
                      <Pill className="w-3 h-3 text-orange-400 shrink-0" />
                      <span>PPI + Prokinetik</span>
                    </div>
                    <p className="text-[9px] text-orange-100/70 leading-tight">
                      Lansoprazole/Omeprazole diserap optimal di usus tanpa terhambat gel pelindung sukralfat.
                    </p>
                  </div>

                  {/* Step 2: T-0 */}
                  <div className="p-2 rounded-xl bg-emerald-950/40 border border-emerald-500/30 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black text-emerald-400">2. Waktu Makan</span>
                      <span className="text-[8px] bg-emerald-900/80 text-emerald-300 px-1 py-0.2 rounded font-bold">T-0 Min</span>
                    </div>
                    <div className="text-xs font-black text-white flex items-center gap-1">
                      <Utensils className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>Makan Utama</span>
                    </div>
                    <p className="text-[9px] text-emerald-100/70 leading-tight">
                      Pompa terstimulasi langsung diblokade oleh PPI di darah. Jangan minum obat lain!
                    </p>
                  </div>

                  {/* Step 3: T+120 / Antara Makan */}
                  <div className="p-2 rounded-xl bg-amber-950/40 border border-amber-500/30 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black text-amber-400">3. Antara Makan</span>
                      <span className="text-[8px] bg-amber-900/80 text-amber-300 px-1 py-0.2 rounded font-bold">Jam 10 &amp; 16</span>
                    </div>
                    <div className="text-xs font-black text-white flex items-center gap-1">
                      <Pill className="w-3 h-3 text-amber-400 shrink-0" />
                      <span>Sukralfat Suspensi</span>
                    </div>
                    <p className="text-[9px] text-amber-100/70 leading-tight">
                      Lambung kosong kembali. Suasana asam membentuk gel pelapis tanpa menghambat obat lain.
                    </p>
                  </div>

                  {/* Step 4: T+90 */}
                  <div className="p-2 rounded-xl bg-teal-950/40 border border-teal-500/30 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black text-teal-400">4. T+90 Min</span>
                      <span className="text-[8px] bg-teal-900/80 text-teal-300 px-1 py-0.2 rounded font-bold">Pasca pc / p.r.n</span>
                    </div>
                    <div className="text-xs font-black text-white flex items-center gap-1">
                      <Pill className="w-3 h-3 text-teal-400 shrink-0" />
                      <span>Antasida (p.r.n)</span>
                    </div>
                    <p className="text-[9px] text-teal-100/70 leading-tight">
                      Hanya bila masih perih/kembung. Wajib jeda 2 jam dari obat lain.
                    </p>
                  </div>
                </div>
              </div>

              {/* 4 ATURAN EMAS JEDA KOMBINASI OBAT */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1 text-[10px]">
                <div className="flex items-start gap-1.5 p-1.5 rounded-lg bg-black/50 border border-amber-500/30 text-amber-200">
                  <span className="px-1 py-0.2 rounded bg-amber-500/20 text-amber-300 font-black shrink-0 text-[9px]">JEDA 1</span>
                  <span><strong>PPI ➔ Makan:</strong> Wajib 30–60 menit sebelum sarapan (agar Cmax tercapai saat pompa asam aktif).</span>
                </div>
                <div className="flex items-start gap-1.5 p-1.5 rounded-lg bg-black/50 border border-amber-500/30 text-amber-200">
                  <span className="px-1 py-0.2 rounded bg-amber-500/20 text-amber-300 font-black shrink-0 text-[9px]">JEDA 2</span>
                  <span><strong>PPI ➔ Sukralfat:</strong> Jeda minimal 2 jam (Sukralfat diminum di antara waktu makan jam 10 &amp; 16, BUKAN sebelum PPI).</span>
                </div>
                <div className="flex items-start gap-1.5 p-1.5 rounded-lg bg-black/50 border border-amber-500/30 text-amber-200">
                  <span className="px-1 py-0.2 rounded bg-amber-500/20 text-amber-300 font-black shrink-0 text-[9px]">JEDA 3</span>
                  <span><strong>Sukralfat ➔ Antasida:</strong> Jeda minimal 1–2 jam (Antasida menaikkan pH &amp; merusak polimerisasi gel sukralfat).</span>
                </div>
                <div className="flex items-start gap-1.5 p-1.5 rounded-lg bg-black/50 border border-amber-500/30 text-amber-200">
                  <span className="px-1 py-0.2 rounded bg-amber-500/20 text-amber-300 font-black shrink-0 text-[9px]">JEDA 4</span>
                  <span><strong>Antasida ➔ Obat Lain:</strong> Jeda 2 jam p.r.n (mencegah khelasi &amp; penurunan serapan obat lain).</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* KOLOM KANAN: NOCTURNAL BREAKTHROUGH & ESKALASI P-CAB (5 Kolom) */}
        <div className="lg:col-span-5 space-y-3">
          {/* FENOMENA NOCTURNAL ACID BREAKTHROUGH (NAB) */}
          <div className="p-4 rounded-3xl bg-gradient-to-b from-[#1b172a] to-[#100d1c] border-2 border-indigo-500/60 shadow-xl space-y-2.5">
            <div className="flex items-center justify-between border-b border-indigo-800/80 pb-2">
              <span className="text-xs font-black text-indigo-300 uppercase tracking-wide flex items-center gap-1.5">
                <Moon className="w-4 h-4 text-indigo-400" />
                Nocturnal Acid Breakthrough (NAB)
              </span>
              <span className="text-[10px] font-bold bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded-full border border-indigo-600/40">
                Refluks Malam Hari
              </span>
            </div>
            <p className="text-[11px] text-indigo-100/90 leading-snug">
              Bila pasien terbangun tengah malam karena batuk tersedak atau rasa terbakar meski sudah minum PPI dosis ganda, tambahkan <strong>H2RA malam sebelum tidur</strong>:
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <button
                onClick={() => onDrugClick('Famotidine')}
                className="px-2.5 py-1.5 rounded-xl bg-indigo-500/20 text-indigo-200 text-xs font-bold border border-indigo-400/40 flex items-center gap-1 hover:bg-indigo-500/30 transition-all cursor-pointer"
              >
                <Pill className="w-3.5 h-3.5 text-indigo-400" />
                <span>Famotidine 20–40 mg (Malam hs)</span>
                <ExternalLink className="w-2.5 h-2.5 text-indigo-400" />
              </button>
              <button
                onClick={() => onDrugClick('Ranitidine')}
                className="px-2.5 py-1.5 rounded-xl bg-indigo-500/20 text-indigo-200 text-xs font-bold border border-indigo-400/40 flex items-center gap-1 hover:bg-indigo-500/30 transition-all cursor-pointer"
              >
                <Pill className="w-3.5 h-3.5 text-indigo-400" />
                <span>Ranitidine 150 mg hs</span>
                <ExternalLink className="w-2.5 h-2.5 text-indigo-400" />
              </button>
            </div>
            <button
              onClick={() => onTestRegimen(['Lansoprazole', 'Famotidine'])}
              className="text-[11px] font-bold text-indigo-300 hover:text-white underline cursor-pointer pt-0.5 block"
            >
              ➔ Uji Interaksi: PPI Pagi/Sore + H2RA Malam
            </button>
          </div>

          {/* ESKALASI P-CAB VONOPRAZAN (KASUS REFRAKTER & LA GRADE C/D) */}
          <div className="p-4 rounded-3xl bg-gradient-to-b from-[#2e0915] to-[#1a040b] border-2 border-rose-500/60 shadow-xl space-y-2.5">
            <div className="flex items-center justify-between border-b border-rose-900 pb-2">
              <span className="text-xs font-black text-rose-300 uppercase tracking-wide flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-rose-400" />
                Eskalasi: P-CAB (Vonoprazan)
              </span>
              <span className="text-[10px] font-bold bg-rose-950 text-rose-300 px-2 py-0.5 rounded-full border border-rose-600/40">
                Kasus Refrakter / LA C/D
              </span>
            </div>

            <p className="text-[11px] text-rose-100/90 leading-snug">
              Inhibitor pompa kalium kompetitif tanpa butuh aktivasi asam; memberikan supresi asam lambung &gt; 90% selama 24 jam penuh sejak dosis pertama. Sangat efektif untuk penyembuhan esofagitis berat.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <button
                onClick={() => onDrugClick('Vonoprazan')}
                className="px-2.5 py-1.5 rounded-xl bg-rose-500/20 text-rose-200 text-xs font-bold border border-rose-400/40 flex items-center gap-1 hover:bg-rose-500/30 transition-all cursor-pointer"
              >
                <Pill className="w-3.5 h-3.5 text-rose-400" />
                <span>Vonoprazan (Vocinti) 20 mg 1x/hari</span>
                <ExternalLink className="w-2.5 h-2.5 text-rose-400" />
              </button>
              <button
                onClick={() => onDrugClick('Rebamipide')}
                className="px-2.5 py-1.5 rounded-xl bg-rose-500/20 text-rose-200 text-xs font-bold border border-rose-400/40 flex items-center gap-1 hover:bg-rose-500/30 transition-all cursor-pointer"
              >
                <Pill className="w-3.5 h-3.5 text-rose-400" />
                <span>Rebamipide 100 mg 3x/hari</span>
                <ExternalLink className="w-2.5 h-2.5 text-rose-400" />
              </button>
            </div>

            <button
              onClick={() => onTestRegimen(['Vonoprazan', 'Rebamipide'])}
              className="text-[11px] font-bold text-rose-300 hover:text-white underline cursor-pointer pt-0.5 block"
            >
              ➔ Uji Interaksi: P-CAB + Mukoprotektor Rebamipide
            </button>
          </div>
        </div>
      </div>

      {/* ================================================================= */}
      {/* EXPANDABLE: TABEL KRONOLOGIS SIMULASI JAM 24-JAM PASIEN           */}
      {/* ================================================================= */}
      {showFull24hSchedule && (
        <div className="max-w-5xl mx-auto p-4 sm:p-6 rounded-3xl bg-gradient-to-b from-[#2e1305] via-[#1c0c02] to-[#120601] border-2 border-amber-400 shadow-2xl space-y-4 relative z-20 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-amber-500/40 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-base shadow-lg shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                  <span>Jadwal Jam Riil 24 Jam Pasien: Konseling Polifarmasi Lambung</span>
                  <span className="px-2 py-0.5 rounded-full bg-amber-500/30 text-amber-200 border border-amber-400/40 text-[10px] font-black uppercase">
                    Panduan PIO
                  </span>
                </h4>
                <p className="text-xs text-amber-200/80 font-medium">
                  Contoh pembagian jam minum obat jika pasien sarapan 07.00, makan siang 12.00, makan malam 19.00, dan tidur 22.00.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto flex-wrap">
              <button
                onClick={handlePrintPatientSchedule}
                className="px-3 py-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold border border-cyan-400/50 flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
                title="Cetak Lembar Jadwal Pasien (PIO)"
              >
                <Printer className="w-3.5 h-3.5 text-white" />
                <span>Cetak Lembar Pasien (PIO)</span>
              </button>

              <button
                onClick={handleCopySchedule}
                className="px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 text-xs font-bold border border-amber-400/50 flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
              >
                {copiedSchedule ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-amber-300" />}
                <span>{copiedSchedule ? 'Tersalin ke Clipboard!' : 'Salin Teks Pasien'}</span>
              </button>

              <button
                onClick={() => setShowFull24hSchedule(false)}
                className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
                title="Tutup Jadwal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* TABEL RESPONSIVE JADWAL 24 JAM */}
          <div className="overflow-x-auto rounded-2xl border border-amber-500/30 bg-black/60 shadow-inner">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-amber-950/80 via-orange-950/80 to-amber-950/80 text-amber-200 border-b border-amber-500/40">
                  <th className="p-3 font-black uppercase tracking-wider text-[11px] w-36">Sesi &amp; Waktu</th>
                  <th className="p-3 font-black uppercase tracking-wider text-[11px] w-52">Obat yang Diminum</th>
                  <th className="p-3 font-black uppercase tracking-wider text-[11px]">Tujuan &amp; Mekanisme Klinis</th>
                  <th className="p-3 font-black uppercase tracking-wider text-[11px] w-64">Instruksi Pasien (Edukasi Apoteker)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-500/20 text-amber-100/90">
                {/* 06.30 */}
                <tr className="hover:bg-amber-500/10 transition-colors bg-orange-950/20">
                  <td className="p-3 font-bold text-orange-300 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-orange-400 shrink-0" />
                    <span>06.30 (Pagi)</span>
                  </td>
                  <td className="p-3 space-y-1">
                    <button
                      onClick={() => onDrugClick('Lansoprazole')}
                      className="px-2 py-0.5 rounded-lg bg-orange-500/20 text-orange-200 font-bold hover:bg-orange-500/30 flex items-center gap-1 text-left"
                    >
                      <Pill className="w-3 h-3 text-orange-400 shrink-0" />
                      <span>PPI (Lansoprazole 30 mg / Omeprazole 20 mg)</span>
                    </button>
                    <button
                      onClick={() => onDrugClick('Domperidone')}
                      className="px-2 py-0.5 rounded-lg bg-amber-500/20 text-amber-200 font-bold hover:bg-amber-500/30 flex items-center gap-1 text-left"
                    >
                      <Pill className="w-3 h-3 text-amber-400 shrink-0" />
                      <span>Domperidone 10 mg (bila begah/mual)</span>
                    </button>
                  </td>
                  <td className="p-3 text-[11px] leading-relaxed">
                    Diminum saat lambung kosong semalaman. PPI diserap utuh di usus halus tanpa hambatan gel sukralfat, siap berkonsentrasi di sel parietal tepat saat makanan masuk.
                  </td>
                  <td className="p-3 text-[11px] text-orange-200">
                    Telan utuh kapsul dengan segelas air putih. <strong>Tunggu 30–60 menit</strong> sebelum mulai sarapan pagi.
                  </td>
                </tr>

                {/* 07.00 */}
                <tr className="hover:bg-emerald-500/10 transition-colors bg-emerald-950/20">
                  <td className="p-3 font-bold text-emerald-300 flex items-center gap-1.5">
                    <Utensils className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>07.00 (Pagi)</span>
                  </td>
                  <td className="p-3 font-black text-emerald-300">
                    🍽️ WAKTU SARAPAN PAGI
                  </td>
                  <td className="p-3 text-[11px] leading-relaxed">
                    Pompa proton yang terangsang oleh makanan langsung dinonaktifkan permanen oleh PPI yang telah beredar di darah menuju kanalikuli sel parietal lambung.
                  </td>
                  <td className="p-3 text-[11px] text-emerald-200">
                    Makan secukupnya, hindari makanan pedas, berlemak tinggi, santan, dan kopi pekat.
                  </td>
                </tr>

                {/* 08.30 */}
                <tr className="hover:bg-amber-500/10 transition-colors">
                  <td className="p-3 font-bold text-teal-300 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>08.30–09.00</span>
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => onDrugClick('Antasida DOEN')}
                      className="px-2 py-1 rounded-lg bg-teal-500/20 text-teal-200 font-bold hover:bg-teal-500/30 flex items-center gap-1 text-left"
                    >
                      <Pill className="w-3 h-3 text-teal-400 shrink-0" />
                      <span>Antasida DOEN (Hanya p.r.n)</span>
                    </button>
                  </td>
                  <td className="p-3 text-[11px] leading-relaxed">
                    Menetralkan lonjakan asam lambung pasca makan (1.5–2 jam postprandial) bila masih ada rasa perih panas lolos di ulu hati.
                  </td>
                  <td className="p-3 text-[11px] text-teal-200">
                    <strong>Hanya diminum bila masih perih.</strong> Kunyah tablet halus sebelum ditelan. Jeda minimal 2 jam dari obat lain.
                  </td>
                </tr>

                {/* 10.00 */}
                <tr className="hover:bg-amber-500/10 transition-colors">
                  <td className="p-3 font-bold text-amber-300 flex items-center gap-1.5">
                    <Sun className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>10.00 (Pagi)</span>
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => onDrugClick('Sukralfat')}
                      className="px-2 py-1 rounded-lg bg-amber-500/20 text-amber-200 font-bold hover:bg-amber-500/30 flex items-center gap-1 text-left"
                    >
                      <Pill className="w-3 h-3 text-amber-400 shrink-0" />
                      <span>Sukralfat Suspensi (5–10 mL) Dosis ke-1</span>
                    </button>
                  </td>
                  <td className="p-3 text-[11px] leading-relaxed">
                    Lambung kosong kembali (2 jam pasca sarapan). Asam basal memicu polimerisasi gel pelindung erosi tanpa rintangan adsorpsi pada PPI yang sudah diserap sebelumnya.
                  </td>
                  <td className="p-3 text-[11px] text-amber-200">
                    Kocok botol suspensi. Minum di antara waktu makan (2 jam sesudah sarapan).
                  </td>
                </tr>

                {/* 11.30 */}
                <tr className="hover:bg-amber-500/10 transition-colors">
                  <td className="p-3 font-bold text-amber-300 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>11.30 (Siang)</span>
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => onDrugClick('Domperidone')}
                      className="px-2 py-0.5 rounded-lg bg-amber-500/20 text-amber-200 font-bold hover:bg-amber-500/30 flex items-center gap-1 text-left"
                    >
                      <Pill className="w-3 h-3 text-amber-400 shrink-0" />
                      <span>Domperidone 10 mg (Dosis ke-2)</span>
                    </button>
                  </td>
                  <td className="p-3 text-[11px] leading-relaxed">
                    Mempersiapkan pengosongan lambung dan motilitas saluran cerna menjelang makan siang.
                  </td>
                  <td className="p-3 text-[11px] text-amber-200">
                    Minum 30 menit sebelum makan siang jika ada indikasi dispepsia/mual.
                  </td>
                </tr>

                {/* 12.00 */}
                <tr className="hover:bg-emerald-500/10 transition-colors bg-emerald-950/20">
                  <td className="p-3 font-bold text-emerald-300 flex items-center gap-1.5">
                    <Utensils className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>12.00 (Siang)</span>
                  </td>
                  <td className="p-3 font-black text-emerald-300">
                    🍽️ WAKTU MAKAN SIANG
                  </td>
                  <td className="p-3 text-[11px] leading-relaxed">
                    Pengosongan lambung berlangsung optimal berkat stimulasi motilitas dari Domperidone.
                  </td>
                  <td className="p-3 text-[11px] text-emerald-200">
                    Jangan langsung tidur/berbaring setelah makan siang (tunggu minimal 2 jam).
                  </td>
                </tr>

                {/* 16.00 */}
                <tr className="hover:bg-amber-500/10 transition-colors">
                  <td className="p-3 font-bold text-amber-300 flex items-center gap-1.5">
                    <Sun className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>16.00 (Sore)</span>
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => onDrugClick('Sukralfat')}
                      className="px-2 py-1 rounded-lg bg-amber-500/20 text-amber-200 font-bold hover:bg-amber-500/30 flex items-center gap-1 text-left"
                    >
                      <Pill className="w-3 h-3 text-amber-400 shrink-0" />
                      <span>Sukralfat Suspensi Dosis ke-2</span>
                    </button>
                  </td>
                  <td className="p-3 text-[11px] leading-relaxed">
                    Memperbarui lapisan protektif kawah ulkus lambung di antara waktu makan (2 jam pasca makan siang / 2.5 jam sebelum PPI malam).
                  </td>
                  <td className="p-3 text-[11px] text-amber-200">
                    Kocok botol. Minum saat lambung kosong di antara waktu makan.
                  </td>
                </tr>

                {/* 18.30 */}
                <tr className="hover:bg-orange-500/10 transition-colors bg-orange-950/20">
                  <td className="p-3 font-bold text-orange-300 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-orange-400 shrink-0" />
                    <span>18.30 (Sore)</span>
                  </td>
                  <td className="p-3 space-y-1">
                    <div className="text-[10px] text-orange-300 font-bold">• PPI Dosis ke-2 (bila terapi ganda)</div>
                    <div className="text-[10px] text-amber-200 font-bold">• Domperidone Dosis ke-3</div>
                  </td>
                  <td className="p-3 text-[11px] leading-relaxed">
                    Supresi asam malam hari. Jeda aman 2.5 jam dari sukralfat sore menjamin penyerapan PPI bebas hambatan.
                  </td>
                  <td className="p-3 text-[11px] text-orange-200">
                    Minum 30 menit sebelum makan malam. Makan malam pukul 19.00.
                  </td>
                </tr>

                {/* 19.00 */}
                <tr className="hover:bg-emerald-500/10 transition-colors bg-emerald-950/20">
                  <td className="p-3 font-bold text-emerald-300 flex items-center gap-1.5">
                    <Utensils className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>19.00 (Malam)</span>
                  </td>
                  <td className="p-3 font-black text-emerald-300">
                    🍽️ WAKTU MAKAN MALAM
                  </td>
                  <td className="p-3 text-[11px] leading-relaxed">
                    Pompa proton yang terangsang makanan malam diblokir oleh PPI dosis kedua.
                  </td>
                  <td className="p-3 text-[11px] text-emerald-200">
                    Hindari makan terlalu kenyang atau makan kurang dari 3 jam sebelum waktu tidur.
                  </td>
                </tr>

                {/* 22.00 */}
                <tr className="hover:bg-indigo-500/10 transition-colors bg-indigo-950/30">
                  <td className="p-3 font-bold text-indigo-300 flex items-center gap-1.5">
                    <Moon className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>22.00 (Tidur)</span>
                  </td>
                  <td className="p-3 space-y-1">
                    <div className="text-[10px] text-indigo-200 font-bold">Pilihan A: Sukralfat Dosis Malam (hs)</div>
                    <div className="text-[10px] text-indigo-300 font-bold">Pilihan B: Famotidine 20–40 mg</div>
                  </td>
                  <td className="p-3 text-[11px] leading-relaxed">
                    Mencegah <em>Nocturnal Acid Breakthrough (NAB)</em> — saat berbaring gravitasi berkurang sehingga asam rentan naik ke esofagus dan saluran napas atas.
                  </td>
                  <td className="p-3 text-[11px] text-indigo-200">
                    Minum tepat saat mau tidur (minimal 3 jam setelah makan malam). <strong>Gunakan bantal baji setinggi 15–20 cm.</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-500/30 text-[11px] text-amber-200 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Info className="w-4 h-4 text-amber-400 shrink-0" />
              <span><strong>Ringkasan Kunci Konseling Apoteker:</strong> Standar emas urutan minum: <em>PPI (06.30, 30–60 mnt ac)</em> ➔ <em>Makan (07.00)</em> ➔ <em>Antasida (p.r.n 08.30)</em> ➔ <em>Sukralfat (10.00 &amp; 16.00, jeda 2 jam lambung kosong)</em> ➔ <em>Sukralfat hs / Famotidine (22.00)</em>. Hindari minum sukralfat mendahului PPI karena polimer sukralfat mengadsorpsi dan menurunkan bioavailabilitas PPI.</span>
            </span>
            <button
              onClick={() => setShowFull24hSchedule(false)}
              className="text-[11px] font-bold text-amber-300 hover:text-white underline cursor-pointer shrink-0 ml-3"
            >
              Tutup Tabel
            </button>
          </div>
        </div>
      )}

      {/* CONNECTING ARROW 2 */}
      <div className="flex flex-col items-center justify-center relative z-10 -my-2">
        <div className="w-0.5 h-7 bg-gradient-to-b from-orange-400 to-amber-500" />
        <div className="w-2.5 h-2.5 border-r-2 border-b-2 border-amber-400 rotate-45 -mt-1.5" />
      </div>

      {/* ================================================================= */}
      {/* LEVEL 3: PEMELIHARAAN PASCA 8 MINGGU & 4 SUBTIPE OVERLAP DISPEPSIA */}
      {/* ================================================================= */}
      <div className="max-w-5xl mx-auto p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-[#291304] via-[#3a1b06] to-[#291304] border-2 border-amber-500/60 shadow-xl space-y-3 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-500/30 pb-3">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <div>
              <h4 className="text-base sm:text-lg font-black text-white">
                Tahap 3: Strategi Pemeliharaan Jangka Panjang &amp; Subtipe Komorbid Dispepsia
              </h4>
              <p className="text-xs text-amber-200/80 font-medium">
                Divergensi Terapi Pasca 8 Minggu Berdasarkan Derajat Kerusakan Esofagus &amp; Gejala Dominan
              </p>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 text-xs font-black uppercase tracking-wider self-start sm:self-auto">
            Resolusi Pasca 8 Minggu
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 pt-1 text-xs">
          {/* CABANG 1: TERAPI ON-DEMAND */}
          <div className="p-3.5 rounded-2xl bg-black/40 border border-emerald-500/30 flex flex-col justify-between space-y-2">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="font-black text-emerald-300 text-xs uppercase">1. Terapi On-Demand</span>
                <span className="text-[9px] bg-emerald-950 text-emerald-300 px-1.5 py-0.5 rounded font-bold">NERD / LA A-B</span>
              </div>
              <p className="text-emerald-100/80 leading-relaxed text-[11px]">
                Untuk pasien <strong>NERD atau esofagitis ringan</strong> yang telah remisi. Hentikan obat harian; pasien hanya meminum obat saat timbul kekambuhan:
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onDrugClick('Lansoprazole')}
                  className="w-full px-2 py-1 rounded-lg bg-emerald-500/20 text-emerald-200 text-[11px] font-bold border border-emerald-400/40 flex items-center justify-between hover:bg-emerald-500/30 transition-all cursor-pointer"
                >
                  <span>Lansoprazole 15–30 mg p.r.n</span>
                  <ExternalLink className="w-2.5 h-2.5 text-emerald-400" />
                </button>
              </div>
            </div>
            <p className="text-[10px] text-emerald-200/60 italic">
              Alternatif: Natrium Alginat / Antasida DOEN bila gejala jarang (&lt; 1x/minggu).
            </p>
          </div>

          {/* CABANG 2: TERAPI KONTINU RUMATAN */}
          <div className="p-3.5 rounded-2xl bg-black/40 border border-rose-500/30 flex flex-col justify-between space-y-2">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="font-black text-rose-300 text-xs uppercase">2. Terapi Kontinu Rumatan</span>
                <span className="text-[9px] bg-rose-950 text-rose-300 px-1.5 py-0.5 rounded font-bold">LA Grade C-D</span>
              </div>
              <p className="text-rose-100/80 leading-relaxed text-[11px]">
                Wajib untuk <strong>esofagitis erosif berat atau Barrett&apos;s Esophagus</strong>. Lanjutkan dosis pemeliharaan kontinu terendah efektif seumur hidup untuk mencegah striktur peptik:
              </p>
              <div className="pt-2 space-y-1">
                <button
                  onClick={() => onDrugClick('Vonoprazan')}
                  className="w-full px-2 py-1 rounded-lg bg-rose-500/20 text-rose-200 text-[11px] font-bold border border-rose-400/40 flex items-center justify-between hover:bg-rose-500/30 transition-all cursor-pointer"
                >
                  <span>Vonoprazan 10 mg 1x/hari</span>
                  <ExternalLink className="w-2.5 h-2.5 text-rose-400" />
                </button>
                <button
                  onClick={() => onDrugClick('Esomeprazole')}
                  className="w-full px-2 py-1 rounded-lg bg-orange-500/20 text-orange-200 text-[11px] font-bold border border-orange-400/40 flex items-center justify-between hover:bg-orange-500/30 transition-all cursor-pointer"
                >
                  <span>Esomeprazole 20 mg 1x/hari</span>
                  <ExternalLink className="w-2.5 h-2.5 text-orange-400" />
                </button>
              </div>
            </div>
            <p className="text-[10px] text-rose-300/80 font-semibold">
              ⚠️ Tapering bertahap jika stop untuk cegah Rebound Acid Hypersecretion!
            </p>
          </div>

          {/* CABANG 3: OVERLAP DISPEPSIA PDS (PROKINETIK) */}
          <div className="p-3.5 rounded-2xl bg-black/40 border border-amber-500/30 flex flex-col justify-between space-y-2">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="font-black text-amber-300 text-xs uppercase">3. Overlap Dispepsia PDS</span>
                <span className="text-[9px] bg-amber-950 text-amber-300 px-1.5 py-0.5 rounded font-bold">Begah / Kenyang Cepat</span>
              </div>
              <p className="text-amber-100/80 leading-relaxed text-[11px]">
                Bila ada keluhan <strong>distensi fundus lambung, begah pasca makan, &amp; rasa cepat kenyang</strong> yang memicu refluks mekanis:
              </p>
              <div className="pt-2 space-y-1">
                <button
                  onClick={() => onDrugClick('Domperidone')}
                  className="w-full px-2 py-1 rounded-lg bg-amber-500/20 text-amber-200 text-[11px] font-bold border border-amber-400/40 flex items-center justify-between hover:bg-amber-500/30 transition-all cursor-pointer"
                >
                  <span>Domperidone 10 mg 3x/hari ac</span>
                  <ExternalLink className="w-2.5 h-2.5 text-amber-400" />
                </button>
                <button
                  onClick={() => onDrugClick('Itopride')}
                  className="w-full px-2 py-1 rounded-lg bg-amber-500/20 text-amber-200 text-[11px] font-bold border border-amber-400/40 flex items-center justify-between hover:bg-amber-500/30 transition-all cursor-pointer"
                >
                  <span>Itopride HCl 50 mg 3x/hari ac</span>
                  <ExternalLink className="w-2.5 h-2.5 text-amber-400" />
                </button>
              </div>
            </div>
            <div>
              <button
                onClick={() => onTestRegimen(['Lansoprazole', 'Domperidone'])}
                className="text-[10px] font-bold text-amber-300 hover:text-white underline cursor-pointer block mb-1"
              >
                ➔ Uji: PPI + Domperidone
              </button>
              <p className="text-[10px] text-amber-200/70">
                Maksimal 7–14 hari (pantau risiko aritmia pemanjangan QTc).
              </p>
            </div>
          </div>

          {/* CABANG 4: OVERLAP DISPEPSIA EPS (MUKOPROTEKTOR) */}
          <div className="p-3.5 rounded-2xl bg-black/40 border border-teal-500/30 flex flex-col justify-between space-y-2">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="font-black text-teal-300 text-xs uppercase">4. Overlap Dispepsia EPS</span>
                <span className="text-[9px] bg-teal-950 text-teal-300 px-1.5 py-0.5 rounded font-bold">Nyeri Pedih Ulu Hati</span>
              </div>
              <p className="text-teal-100/80 leading-relaxed text-[11px]">
                Bila didominasi <strong>nyeri ulu hati tajam/pedih akibat erosi atau gastritis erosif</strong> yang tidak mempan dengan penekan asam tunggal:
              </p>
              <div className="pt-2 space-y-1">
                <button
                  onClick={() => onDrugClick('Sukralfat')}
                  className="w-full px-2 py-1 rounded-lg bg-teal-500/20 text-teal-200 text-[11px] font-bold border border-teal-400/40 flex items-center justify-between hover:bg-teal-500/30 transition-all cursor-pointer"
                >
                  <span>Sukralfat 500–1000 mg 3–4x ac</span>
                  <ExternalLink className="w-2.5 h-2.5 text-teal-400" />
                </button>
                <button
                  onClick={() => onDrugClick('Rebamipide')}
                  className="w-full px-2 py-1 rounded-lg bg-teal-500/20 text-teal-200 text-[11px] font-bold border border-teal-400/40 flex items-center justify-between hover:bg-teal-500/30 transition-all cursor-pointer"
                >
                  <span>Rebamipide 100 mg 3x/hari</span>
                  <ExternalLink className="w-2.5 h-2.5 text-teal-400" />
                </button>
              </div>
            </div>
            <div>
              <button
                onClick={() => onTestRegimen(['Lansoprazole', 'Sukralfat'])}
                className="text-[10px] font-bold text-teal-300 hover:text-white underline cursor-pointer block mb-1"
              >
                ➔ Uji: PPI + Sukralfat
              </button>
              <p className="text-[10px] text-teal-200/70">
                Wajib jeda minimal 2 jam dari PPI (Sukralfat diminum di antara waktu makan / sebelum tidur).
              </p>
            </div>
          </div>
        </div>

        {/* PHARMACIST CLINICAL PEARLS & SAFETY MONITORING */}
        <div className="mt-2 p-3 rounded-2xl bg-black/60 border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="text-amber-100/90 leading-snug text-[11px]">
              <strong>Monitoring Apoteker &amp; Farmasi Klinis:</strong> Pada penggunaan PPI jangka panjang (&gt; 1 tahun), lakukan evaluasi berkala terhadap status Magnesium serum (risiko hipomagnesemia), Vitamin B12, dan densitas tulang lansia.
            </span>
          </div>
          <div className="shrink-0 flex items-center gap-2">
            <button
              onClick={() => onTestRegimen(['Lansoprazole', 'Domperidone', 'Antasida DOEN'])}
              className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 font-black text-xs hover:from-orange-400 hover:to-amber-400 transition-all shadow-md cursor-pointer flex items-center gap-1.5"
            >
              <Activity className="w-3.5 h-3.5" />
              <span>Simulasi Regimen Polifarmasi Lambung</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
