import React, { useState, useEffect } from 'react';
import { Users } from 'lucide-react';
import { subscribeToCustomersFirestore } from '../firebase';

interface FooterProps {
  onSelectTab?: (tab: string) => void;
  customerCount?: number;
}

export const Footer: React.FC<FooterProps> = ({ customerCount: propCustomerCount }) => {
  const [totalSubscriptions, setTotalSubscriptions] = useState<number>(() => {
    if (propCustomerCount !== undefined && propCustomerCount > 0) {
      return propCustomerCount;
    }
    try {
      const saved = localStorage.getItem('farmasi_customer_subscriptions');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          let deletedList: string[] = [];
          try {
            const savedDeleted = localStorage.getItem('farmasi_deleted_customer_uids');
            if (savedDeleted) deletedList = JSON.parse(savedDeleted);
          } catch (e) {}
          const valid = parsed.filter((p: any) => p && p.uid && !deletedList.includes(p.uid));
          if (valid.length > 0) return valid.length;
        }
      }
    } catch (e) {}
    return 290;
  });

  useEffect(() => {
    if (propCustomerCount !== undefined && propCustomerCount > 0) {
      setTotalSubscriptions(propCustomerCount);
    }
  }, [propCustomerCount]);

  useEffect(() => {
    const unsubscribe = subscribeToCustomersFirestore((customers) => {
      if (!customers || customers.length === 0) return;
      let deletedList: string[] = [];
      try {
        const savedDeleted = localStorage.getItem('farmasi_deleted_customer_uids');
        if (savedDeleted) deletedList = JSON.parse(savedDeleted);
      } catch (e) {}

      const cleanList = customers.filter(c => 
        c.role !== 'admin' && 
        !(c.email && c.email.toLowerCase().includes('admin@farmasidruggist.com')) &&
        c.uid && !deletedList.includes(c.uid)
      );

      if (cleanList.length > 0) {
        setTotalSubscriptions(cleanList.length);
      }
    });

    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'farmasi_customer_subscriptions' && e.newValue) {
        try {
          const parsed = JSON.parse(e.newValue);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setTotalSubscriptions(parsed.length);
          }
        } catch (err) {}
      }
    };
    window.addEventListener('storage', handleStorage);

    return () => {
      unsubscribe();
      window.removeEventListener('storage', handleStorage);
    };
  }, []);

  const displayCount = (propCustomerCount !== undefined && propCustomerCount > 0) 
    ? propCustomerCount 
    : totalSubscriptions;

  return (
    <footer className="bg-transparent py-2.5 sm:py-3 text-slate-600 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        {/* Pojok Kiri: Ikon + Angka Subskripsi Realtime + Tulisan User */}
        <div className="w-full sm:w-auto sm:flex-1 flex items-center justify-center sm:justify-start gap-1.5 text-slate-700">
          <Users className="w-4 h-4 text-teal-600 shrink-0" />
          <span className="font-mono font-bold text-slate-900 text-xs sm:text-sm">
            {displayCount.toLocaleString('id-ID')}
          </span>
          <span className="font-medium text-slate-600 font-outfit">
            User
          </span>
        </div>

        {/* Bagian Tengah: Created by Badge Pill dengan Link YouTube (Tepat di Tengah Layar) */}
        <div className="flex items-center justify-center shrink-0">
          <a
            href="https://www.youtube.com/@FarmasiDruggist"
            target="_blank"
            rel="noopener noreferrer"
            title="Kunjungi Channel YouTube Resmi @FarmasiDruggist"
            className="group inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/70 hover:bg-white border border-teal-200/60 shadow-2xs hover:shadow-xs transition-all cursor-pointer font-outfit text-xs"
          >
            <span className="text-slate-500 font-medium">Created by</span>
            <div className="flex items-center gap-1.5">
              <img 
                src="/logo.png" 
                alt="Farmasi Druggist" 
                className="w-5 h-5 rounded-full object-cover border border-slate-200/80 shadow-2xs shrink-0" 
              />
              <span className="font-bold text-slate-800 group-hover:text-red-600 transition-colors font-outfit">
                Farmasi Druggist
              </span>
              <svg 
                className="w-4 h-4 text-[#FF0000] shrink-0 transition-transform group-hover:scale-110 ml-0.5" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </div>
          </a>
        </div>

        {/* Pojok Kanan: Hak Cipta */}
        <div className="w-full sm:w-auto sm:flex-1 flex items-center justify-center sm:justify-end">
          <p className="font-medium text-slate-500 text-center sm:text-right font-outfit whitespace-nowrap">
            © {new Date().getFullYear()} FARMASIDRUGGIST. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
