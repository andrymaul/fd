import React, { useState, useEffect } from 'react';
import { Users } from 'lucide-react';
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
    <footer className="bg-white border-t border-slate-200/80 py-4 sm:py-5 text-slate-600 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        {/* Pojok Kiri: Ikon + Angka + Tulisan User */}
        <div className="flex items-center gap-1.5 text-slate-700">
          <Users className="w-4 h-4 text-teal-600 shrink-0" />
          <span className="font-mono font-bold text-slate-900 text-xs sm:text-sm">
            {stats.onlineUsers.toLocaleString('id-ID')}
          </span>
          <span className="font-medium text-slate-600 font-outfit">
            User
          </span>
        </div>

        {/* Pojok Kanan: Hak Cipta */}
        <p className="font-medium text-slate-500 text-center sm:text-right font-outfit">
          © {new Date().getFullYear()} FARMASIDRUGGIST. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
