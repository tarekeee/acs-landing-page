import React, { useState, useEffect } from 'react';
import { CalendarDateBoldDuotone } from 'solar-icon-set';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function EventCountdown({ isMobile = false }: { isMobile?: boolean }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // March 12, 2026 18:00:00
    const targetDate = new Date('2026-03-12T18:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isMounted) return null;

  return (
    <div 
      onClick={() => document.getElementById('event')?.scrollIntoView({ behavior: 'smooth' })}
      className={`bg-white text-black rounded-full font-semibold cursor-pointer hover:scale-105 hover:shadow-lg transition-all duration-300 shadow-md flex items-center justify-center overflow-hidden border border-black/5 ${
        isMobile ? 'px-6 py-3 w-full max-w-[320px]' : 'px-8 py-3'
      }`}
    >
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-2 pr-4 border-r border-black/10">
          <CalendarDateBoldDuotone className="w-5 h-5 text-[#FF5722]" />
          <span className="text-sm font-['Space_Grotesk']">MAR 12</span>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-center">
            <span className="text-xl leading-none font-['Space_Grotesk'] text-[#FF5722]">{String(timeLeft.days).padStart(2, '0')}</span>
            <span className="text-[10px] text-gray-500 font-medium tracking-wider">DAYS</span>
          </div>
          <span className="text-gray-300 font-light text-xl -mt-3">:</span>
          <div className="flex flex-col items-center">
            <span className="text-xl leading-none font-['Space_Grotesk']">{String(timeLeft.hours).padStart(2, '0')}</span>
            <span className="text-[10px] text-gray-500 font-medium tracking-wider">HRS</span>
          </div>
          <span className="text-gray-300 font-light text-xl -mt-3">:</span>
          <div className="flex flex-col items-center">
            <span className="text-xl leading-none font-['Space_Grotesk']">{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span className="text-[10px] text-gray-500 font-medium tracking-wider">MIN</span>
          </div>
          <span className="text-gray-300 font-light text-xl -mt-3">:</span>
          <div className="flex flex-col items-center min-w-[2ch]">
            <span className="text-xl leading-none font-['Space_Grotesk'] text-[#FF5722]">{String(timeLeft.seconds).padStart(2, '0')}</span>
            <span className="text-[10px] text-gray-500 font-medium tracking-wider">SEC</span>
          </div>
        </div>
      </div>
    </div>
  );
}