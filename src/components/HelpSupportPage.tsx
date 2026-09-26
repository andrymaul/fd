import React from 'react';
import { UserProfile } from '../types';
import { Mail, Send, ArrowLeft, ExternalLink, HelpCircle } from 'lucide-react';

interface HelpSupportPageProps {
  currentUser?: UserProfile | null;
  onSelectTab: (tab: string) => void;
}

export const HelpSupportPage: React.FC<HelpSupportPageProps> = ({
  currentUser,
  onSelectTab
}) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-8 sm:space-y-12 animate-in fade-in duration-150">
      
      {/* Top Back Navigation */}
      <div className="flex justify-center sm:justify-start">
        <a
          href={currentUser ? '/dashboard' : '/'}
          onClick={(e) => {
            if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
              e.preventDefault();
              onSelectTab(currentUser ? 'dashboard' : 'landing');
            }
          }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200 text-xs font-bold font-outfit shadow-2xs transition-all cursor-pointer hover:scale-[1.02]"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Kembali ke {currentUser ? 'Dashboard' : 'Beranda'}</span>
        </a>
      </div>

      {/* Main Title & Subtitle (NgodingPakeAI Style) */}
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-outfit">
          Bantuan & Support
        </h1>
        <p className="text-sm sm:text-base text-slate-500 font-medium font-outfit leading-relaxed">
          Punya pertanyaan atau butuh bantuan? Hubungi kami lewat salah satu cara di bawah.
        </p>
      </div>

      {/* Support Cards Grid (Email & Telegram) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto pt-2">
        
        {/* Card 1: Email */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 text-center shadow-xs hover:border-orange-300 hover:shadow-xl transition-all duration-200 group flex flex-col items-center justify-between">
          <div className="w-full flex flex-col items-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-orange-50 border border-orange-200/80 text-orange-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-xs">
              <Mail className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2]" />
            </div>

            <h2 className="text-lg sm:text-xl font-black text-slate-900 font-outfit mb-2">
              Email
            </h2>

            <p className="text-xs sm:text-sm text-slate-500 font-medium mb-6 leading-relaxed max-w-xs">
              Kirim email ke kami dan kami akan membalas secepatnya.
            </p>
          </div>

          <a
            href="mailto:aptandry@farmasidruggist.id"
            className="text-xs sm:text-sm font-bold text-orange-600 hover:text-orange-700 underline font-mono break-all transition-colors"
          >
            aptandry@farmasidruggist.id
          </a>
        </div>

        {/* Card 2: Telegram */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 text-center shadow-xs hover:border-sky-300 hover:shadow-xl transition-all duration-200 group flex flex-col items-center justify-between">
          <div className="w-full flex flex-col items-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-sky-50 border border-sky-200/80 text-sky-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-xs">
              <Send className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2] -translate-x-0.5 translate-y-0.5" />
            </div>

            <h2 className="text-lg sm:text-xl font-black text-slate-900 font-outfit mb-2">
              Telegram
            </h2>

            <p className="text-xs sm:text-sm text-slate-500 font-medium mb-6 leading-relaxed max-w-xs">
              Gabung komunitas Telegram kami untuk diskusi dan bantuan langsung.
            </p>
          </div>

          <a
            href="https://t.me/+lHiIMC_TdoM2NTk1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-sky-600 hover:text-sky-700 font-outfit transition-colors group-hover:underline"
          >
            <span>Join Telegram Group</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Quick FAQ Hint */}
      <div className="text-center pt-4">
        <a
          href="/faq"
          onClick={(e) => {
            if (!e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
              e.preventDefault();
              onSelectTab('faq');
            }
          }}
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-teal-700 transition-colors font-outfit"
        >
          <HelpCircle className="w-4 h-4 text-teal-600" />
          <span>Mencari jawaban cepat seputar aktivasi, tarif, atau fitur klinis? Buka FAQ kami &rarr;</span>
        </a>
      </div>

    </div>
  );
};

export default HelpSupportPage;
