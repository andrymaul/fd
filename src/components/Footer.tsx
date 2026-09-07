import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { ShieldAlert, Database, Stethoscope, Sparkles, Send, Users, Eye, TrendingUp, Activity } from 'lucide-react';
import { subscribeVisitorStats, VisitorStats, getVisitorStats } from '../services/visitorStatsService';

interface FooterProps {
  onSelectTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  const [stats, setStats] = useState<VisitorStats>(() => getVisitorStats());

  useEffect(() => {
    const unsubscribe = subscribeVisitorStats((newStats) => {
      setStats(newStats);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <footer className="bg-[#071c21] text-slate-300 pt-16 pb-12 border-t border-[#143d47]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          <div className="md:col-span-5 space-y-4">
            <Logo size="lg" variant="dark" />
            <p className="text-xs text-teal-100/70 leading-relaxed max-w-sm">
              FARMASIDRUGGIST adalah platform database informasi obat, evaluasi polifarmasi, dan pemeriksa interaksi obat terpercaya untuk Apoteker, Tenaga Kesehatan, Klinik, dan Fasilitas Pelayanan Kesehatan Indonesia.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="flex items-center gap-2 text-xs text-teal-400 font-bold">
                <Database className="w-4 h-4 text-teal-400" />
                <span>Database Interaksi Klinis Terintegrasi</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h3 className="text-sm font-black text-white uppercase tracking-wider">Menu Navigasi</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onSelectTab('landing')} className="hover:text-teal-300 transition-colors cursor-pointer text-slate-300">
                  Beranda & Tentang
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('drugs')} className="hover:text-teal-300 transition-colors cursor-pointer text-slate-300">
                  Menu Informasi Obat (Monografi)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('polypharmacy')} className="hover:text-teal-300 transition-colors cursor-pointer text-slate-300">
                  Evaluasi Polifarmasi & Jadwal Pasien
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('interactions')} className="hover:text-teal-300 transition-colors cursor-pointer text-slate-300">
                  Cek Interaksi Obat (Evaluasi Klinis)
                </button>
              </li>
              <li>
                <a
                  href="https://t.me/+lHiIMC_TdoM2NTk1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-300 transition-colors cursor-pointer text-sky-400 font-bold flex items-center gap-1"
                >
                  <Send className="w-3 h-3 fill-sky-400" />
                  <span>Komunitas Telegram Apoteker</span>
                </a>
              </li>
              <li>
                <button onClick={() => onSelectTab('pricing')} className="hover:text-teal-300 transition-colors cursor-pointer text-slate-300">
                  Harga Layanan Apps
                </button>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h3 className="text-sm font-black text-white uppercase tracking-wider">Sertifikasi & Layanan Backend</h3>
            <p className="text-xs text-teal-100/70 leading-relaxed">
              Tersinkronisasi secara real-time dengan Firebase Firestore Cloud Database. Mendukung pencetakan laporan keselamatan medis resep berstempel klinik.
            </p>
            <div className="inline-flex items-center gap-2 bg-[#0b2b33] px-3.5 py-2 rounded-xl text-xs text-teal-300 font-bold border border-teal-500/30">
              <ShieldAlert className="w-4 h-4 text-amber-400" />
              <span>Standar Keselamatan Medis Pasien</span>
            </div>
          </div>

        </div>

        {/* Real-time Platform Visitor & Live Presence Counter Widget */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0b2b33]/90 via-[#0d3640]/80 to-[#0b2b33]/90 border border-teal-500/25 p-5 sm:p-6 backdrop-blur-md shadow-xl shadow-teal-950/40">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Title & Live Status Indicator */}
            <div className="flex items-center gap-4 text-center lg:text-left">
              <div className="w-12 h-12 rounded-xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center shrink-0 shadow-inner">
                <Activity className="w-6 h-6 text-teal-300 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center justify-center lg:justify-start gap-2.5">
                  <h4 className="text-sm font-bold text-white tracking-wide">
                    Aktivitas & Trafik Platform Real-Time
                  </h4>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    LIVE
                  </span>
                </div>
                <p className="text-xs text-teal-200/70 mt-0.5">
                  Statistik akses apoteker, dokter, dan fasilitas pelayanan kesehatan se-Indonesia
                </p>
              </div>
            </div>

            {/* Metrics Counters Grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full lg:w-auto">
              {/* Online Users */}
              <div className="bg-[#071c21]/80 border border-emerald-500/30 rounded-xl px-4 py-3 text-center min-w-[105px] sm:min-w-[130px] flex flex-col items-center justify-center shadow-sm transition-transform hover:scale-105">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400 mb-1">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                  </span>
                  <span>Online</span>
                </div>
                <span className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  {stats.onlineUsers}
                </span>
                <span className="text-[10px] text-emerald-300/70 font-medium mt-0.5">
                  Pengguna Aktif
                </span>
              </div>

              {/* Today Visits */}
              <div className="bg-[#071c21]/80 border border-teal-500/30 rounded-xl px-4 py-3 text-center min-w-[105px] sm:min-w-[130px] flex flex-col items-center justify-center shadow-sm transition-transform hover:scale-105">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-teal-300 mb-1">
                  <TrendingUp className="w-3.5 h-3.5 text-teal-400" />
                  <span>Hari Ini</span>
                </div>
                <span className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  {stats.todayVisits.toLocaleString('id-ID')}
                </span>
                <span className="text-[10px] text-teal-300/70 font-medium mt-0.5">
                  Kunjungan Sesi
                </span>
              </div>

              {/* Total Visits */}
              <div className="bg-[#071c21]/80 border border-sky-500/30 rounded-xl px-4 py-3 text-center min-w-[105px] sm:min-w-[130px] flex flex-col items-center justify-center shadow-sm transition-transform hover:scale-105">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-sky-300 mb-1">
                  <Users className="w-3.5 h-3.5 text-sky-400" />
                  <span>Total Kunjungan</span>
                </div>
                <span className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  {stats.totalVisits.toLocaleString('id-ID')}
                </span>
                <span className="text-[10px] text-sky-300/70 font-medium mt-0.5">
                  Akumulasi Akses
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#143d47] text-center text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} FARMASIDRUGGIST. Seluruh Hak Cipta Dilindungi.</p>
          <p className="flex items-center gap-1 text-teal-300/80">
            <span>Dirancang untuk Standar Pelayanan Kefarmasian Indonesia</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
