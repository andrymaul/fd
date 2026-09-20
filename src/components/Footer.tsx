import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { ShieldCheck, Database, Send } from 'lucide-react';
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
            <h3 className="text-sm font-black text-white uppercase tracking-wider font-outfit">Keamanan &amp; Standar Medis</h3>
            <p className="text-xs text-teal-100/70 leading-relaxed">
              Infrastruktur cloud terenkripsi untuk perlindungan privasi data pasien dan resep. Mendukung pencetakan laporan keselamatan klinis berstempel resmi faskes.
            </p>
            <div className="inline-flex items-center gap-2 bg-[#0b2b33] px-3.5 py-2 rounded-xl text-xs text-teal-300 font-bold border border-teal-500/30">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Standar Keselamatan Medis Pasien</span>
            </div>
          </div>

        </div>

        {/* Real-time Platform Visitor & Live Presence Counter - Clean Minimalist Status Bar */}
        <div className="rounded-2xl bg-white/[0.03] border border-teal-500/20 px-4 sm:px-6 py-3.5 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 uppercase tracking-wider">
              LIVE
            </span>
            <span className="text-xs font-bold text-teal-100/90 font-outfit">
              Aktivitas Platform Real-Time
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs">
            <div className="flex items-center gap-1.5">
              <span className="text-slate-400 font-medium">Online:</span>
              <span className="font-mono font-black text-emerald-400">
                {stats.onlineUsers}
              </span>
            </div>

            <div className="h-3 w-px bg-teal-500/20 hidden sm:block" />

            <div className="flex items-center gap-1.5">
              <span className="text-slate-400 font-medium">Hari Ini:</span>
              <span className="font-mono font-black text-teal-300">
                {stats.todayVisits.toLocaleString('id-ID')}
              </span>
            </div>

            <div className="h-3 w-px bg-teal-500/20 hidden sm:block" />

            <div className="flex items-center gap-1.5">
              <span className="text-slate-400 font-medium">Total Kunjungan:</span>
              <span className="font-mono font-black text-white">
                {stats.totalVisits.toLocaleString('id-ID')}
              </span>
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
