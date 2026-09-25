import React, { useState, useEffect } from 'react';
import { subscribeVisitorStats, VisitorStats, getVisitorStats } from '../services/visitorStatsService';

interface FooterProps {
  onSelectTab?: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = () => {
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
    <footer className="bg-[#071c21] text-slate-400 py-5 sm:py-6 border-t border-[#143d47]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        {/* Pojok Kiri: Tampilan Jumlah User yang Sudah Log In */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-slate-400 font-medium font-outfit">
            User Log In:
          </span>
          <span className="font-mono font-bold text-emerald-400">
            {stats.onlineUsers.toLocaleString('id-ID')}
          </span>
        </div>

        {/* Pojok Kanan: Hak Cipta Sesuai Permintaan */}
        <p className="font-medium text-slate-400 text-center sm:text-right font-outfit">
          © {new Date().getFullYear()} FARMASIDRUGGIST. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
