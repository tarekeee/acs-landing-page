import { 
  CalendarDateBoldDuotone,
  ClockCircleBoldDuotone,
  MapPointBoldDuotone,
  TicketSaleBoldDuotone,
  LightbulbBoltBoldDuotone,
  CPUBoltBoldDuotone,
  MoonBoldDuotone,
  UsersGroupTwoRoundedBoldDuotone,
  CalendarMinimalisticBoldDuotone
} from "solar-icon-set";
import { Coffee } from "lucide-react";
import { useLanguage } from '../i18n/LanguageContext';

interface EventSectionProps {
  onRegisterClick: () => void;
}

export function EventSection({ onRegisterClick }: EventSectionProps) {
  const { t } = useLanguage();

  const highlightIcons = [LightbulbBoltBoldDuotone, CPUBoltBoldDuotone, MoonBoldDuotone, UsersGroupTwoRoundedBoldDuotone];

const schedule = t.event.schedule;


  return (
    <section id="event" className="py-16 sm:py-24 lg:py-32 bg-[#F5F3F0] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-gradient-to-br from-[#FF5722]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 bg-[#FF5722]/10 text-[#FF5722] px-4 py-2 rounded-full mb-6 text-sm font-semibold tracking-wide uppercase border border-[#FF5722]/20">
            <CalendarMinimalisticBoldDuotone className="w-5 h-5" />
            <span>{t.event.badge}</span>
          </div>
          {/* <h2 className="text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tighter text-black font-['Space_Grotesk'] leading-none">
            ACS Tech Night 2026
          </h2> */}
          <img src="/logos/sahra-tech.svg" alt="Sahra Tech" className="mx-auto mb-6 w-[250px] sm:w-[350px] lg:w-[400px]" />
          <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg sm:text-xl leading-relaxed">
            {t.event.description}
          </p>
          
          {/* Event Details */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 mb-10">
            <div className="flex items-center justify-center gap-3 bg-white px-6 py-3 rounded-2xl shadow-sm border border-black/5">
              <CalendarDateBoldDuotone className="w-6 h-6 text-[#FF5722]" />
              <span className="font-semibold">{t.event.date}</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white px-6 py-3 rounded-2xl shadow-sm border border-black/5">
              <ClockCircleBoldDuotone className="w-6 h-6 text-[#FF5722]" />
              <span className="font-semibold">{t.event.time}</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white px-6 py-3 rounded-2xl shadow-sm border border-black/5">
              <MapPointBoldDuotone className="w-6 h-6 text-[#FF5722]" />
              <span className="font-semibold">{t.event.location}</span>
            </div>
          </div>

          <button
            onClick={onRegisterClick}
            className="group bg-[#FF5722] text-white px-10 py-5 rounded-full hover:bg-[#E64A19] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,87,34,0.6)] inline-flex items-center gap-3 text-lg font-bold"
          >
            <span>{t.event.secureSpot}</span>
            <TicketSaleBoldDuotone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          </button>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {t.event.highlights.map((highlight, index) => {
            const Icon = highlightIcons[index];
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl border border-black/5 hover:border-[#FF5722]/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 group-hover:scale-150 transform">
                  <Icon className="w-32 h-32 text-[#FF5722]" />
                </div>
                <div className="w-14 h-14 bg-[#FF5722]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FF5722] transition-colors duration-500 relative z-10">
                  <Icon className="w-7 h-7 text-[#FF5722] group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 relative z-10">{highlight.title}</h3>
                <p className="text-gray-600 leading-relaxed relative z-10">{highlight.description}</p>
              </div>
            );
          })}
        </div>

        {/* Fancy Schedule Layout */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl tracking-tighter mb-4">{t.event.agenda}</h3>
            <p className="text-gray-500 flex justify-center items-center gap-[8px]">{t.event.agendaSubtitle} <img src="/logos/sahra-tech.svg" alt="Sahra Tech" className="inline-block w-10 h-10 mb-[12px]" /></p>
          </div>
          
          <div className="bg-white rounded-[2.5rem] p-6 sm:p-12 shadow-xl border border-black/5 relative overflow-hidden">
            {/* Inner subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#F5F3F0]/50 to-transparent pointer-events-none" />
            
            <div className="relative z-10 grid gap-4">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 p-4 sm:p-6 rounded-2xl hover:bg-[#F5F3F0] transition-colors duration-300 border border-transparent hover:border-black/5"
                >
                  <div className="flex-shrink-0 w-32 font-['Space_Grotesk']">
                    <div className="text-2xl sm:text-3xl font-bold text-[#FF5722]">{item.time}</div>
                  </div>
                  
                  {/* Decorative dot - hidden on mobile */}
                  <div className="hidden sm:flex flex-shrink-0 w-4 h-4 rounded-full border-4 border-[#FF5722]/20 group-hover:border-[#FF5722] group-hover:bg-[#FF5722] transition-all duration-300" />
                  
                  <div className="flex-grow">
                    <div className="text-lg sm:text-xl font-semibold text-black group-hover:text-[#FF5722] transition-colors">
                      {item.activity}
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-black/5 text-gray-500 group-hover:bg-white group-hover:shadow-sm transition-all">
                      {item.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Special Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-[#FF5722]/10 via-[#FF5722]/5 to-[#FF5722]/10 border border-[#FF5722]/20 rounded-full px-8 py-4 shadow-sm">
            <span className="text-2xl">🌙</span>
            <p className="text-gray-700 font-medium">
              <span className="text-[#FF5722] font-bold ltr:mr-2 rtl:ml-2">{t.event.specialNote}</span> 
              {t.event.specialNoteText}
            </p>
            <span className="text-2xl">🌙</span>
          </div>
        </div>
      </div>
    </section>
  );
}