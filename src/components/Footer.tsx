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
    <footer className="bg-white border-t border-slate-200/80 py-4 sm:py-5 text-slate-600 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        {/* Pojok Kiri: Ikon + Angka Subskripsi Realtime + Tulisan User */}
        <div className="flex items-center gap-1.5 text-slate-700">
          <Users className="w-4 h-4 text-teal-600 shrink-0" />
          <span className="font-mono font-bold text-slate-900 text-xs sm:text-sm">
            {displayCount.toLocaleString('id-ID')}
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
