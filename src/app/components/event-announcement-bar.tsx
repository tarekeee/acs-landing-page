import { X, Calendar, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

interface EventAnnouncementBarProps {
  onRegisterClick: () => void;
}

export function EventAnnouncementBar({ onRegisterClick }: EventAnnouncementBarProps) {
  const [isVisible, setIsVisible] = useState(true);
  const { t } = useLanguage();

  if (!isVisible) return null;

  return (
    <div className="bg-black text-white relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'
        }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-2 sm:py-3 gap-2 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0 w-full sm:w-auto">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
              <img src="/logos/sahra-tech-w.svg" alt="Sahra Tech" className="inline-block w-8 h-8 sm:hidden" />
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 min-w-0 flex-1">
              <span className="font-medium whitespace-nowrap text-sm sm:text-base">{t.announcement.date}</span>
              <span className="hidden sm:inline text-white/90">|</span>
              <span className="text-white/95 text-xs sm:text-base line-clamp-1 sm:line-clamp-none">
                <img src="/logos/sahra-tech-w.svg" alt="Sahra Tech" className="hidden sm:inline-block lg:w-7 lg:h-7 h-5 w-5 mb-[2px] ltr:mr-1 rtl:ml-1" /> {t.announcement.description}
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 flex-shrink-0 w-full sm:w-auto">
            <button
              onClick={onRegisterClick}
              className="bg-[#FF5722] text-white px-3 sm:px-4 py-1.5 rounded-md hover:bg-[#E64A19] transition-colors flex items-center gap-1.5 group flex-1 sm:flex-initial justify-center text-sm sm:text-base"
            >
              <span className="font-medium whitespace-nowrap">{t.announcement.registerNow}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            
            <button
              onClick={() => setIsVisible(false)}
              className="p-1.5 hover:bg-white/20 rounded-md transition-colors"
              aria-label="Dismiss announcement"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
