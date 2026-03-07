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

interface EventSectionProps {
  onRegisterClick: () => void;
}

export function EventSection({ onRegisterClick }: EventSectionProps) {
  const highlights = [
    {
      icon: LightbulbBoltBoldDuotone,
      title: 'Technical Workshops',
      description: 'Hands-on sessions in AI, Cybersecurity, Robotics, and Enterpreneurship'
    },
    {
      icon: CPUBoltBoldDuotone,
      title: 'Live Demos',
      description: 'Experience cutting-edge AI and robotics demonstrations'
    },
    {
      icon: MoonBoldDuotone,
      title: 'Iftar Together',
      description: 'Break fast with us and enjoy a delicious Iftar dinner in a welcoming atmosphere'
    },
    {
      icon: UsersGroupTwoRoundedBoldDuotone,
      title: 'Speed Networking',
      description: 'Connect with students, professionals, and entrepreneurs'
    }
  ];

const schedule = [
    {
      time: '14:00 - 15:30',
      activity: 'Doors Open & The First Connection: Participant check-in, booth setups, and early ice-breakers. Have your digital business cards ready—networking starts the moment you walk in!',
      type: 'check-in'
    },
    {
      time: '16:00 - 18:30',
      activity: 'The Brain (Phase 1): Dive into immersive Cybersec & AI workshops, explore the interactive Robotics/Light Showcase, and start exchanging ideas with startup reps on the floor.',
      type: 'workshops'
    },
    {
      time: '18:45 - 20:00',
      activity: 'The Heart: Communal Youth Ftoor. Break your fast side-by-side with peers, tech innovators, and startup founders. The ultimate casual networking experience.',
      type: 'ftoor'
    },
    {
      time: '20:00 - 21:00',
      activity: 'The Brain (Phase 2) & Tech Sahra: Grab a coffee and jump back in! Workshops resume for advanced deep-dives, the Robotics showcase lights up the night, and open networking continues across all stands.',
      type: 'workshops'
    },
    {
      time: '21:00 - 22:45',
      activity: 'The Vision: High-Level Sahra Panels. Join top-tier ecosystem decision-makers, industry leaders, and surprise VIP guests as they debate the future of youth entrepreneurship and tech.',
      type: 'panels'
    },
    {
      time: '22:45 - 23:30',
      activity: 'The Pulse: Late-Night Opportunities Lounge. Seal the deal, exchange final contacts, interact with startup booths, and enjoy the closing Sahra vibes.',
      type: 'networking'
    }
];


  return (
    <section id="event" className="py-16 sm:py-24 lg:py-32 bg-[#F5F3F0] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-gradient-to-br from-[#FF5722]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 bg-[#FF5722]/10 text-[#FF5722] px-4 py-2 rounded-full mb-6 text-sm font-semibold tracking-wide uppercase border border-[#FF5722]/20">
            <CalendarMinimalisticBoldDuotone className="w-5 h-5" />
            <span>Upcoming Event</span>
          </div>
          {/* <h2 className="text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tighter text-black font-['Space_Grotesk'] leading-none">
            ACS Tech Night 2026
          </h2> */}
          <img src="/logos/sahra-tech.svg" alt="Sahra Tech" className="mx-auto mb-6 w-[250px] sm:w-[350px] lg:w-[400px]" />
          <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg sm:text-xl leading-relaxed">
            Join us for an extraordinary evening where technology meets community. One night, one Youth House Abderehman Lalaa transformed into a vibrant tech hub.
          </p>
          
          {/* Event Details */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 mb-10">
            <div className="flex items-center justify-center gap-3 bg-white px-6 py-3 rounded-2xl shadow-sm border border-black/5">
              <CalendarDateBoldDuotone className="w-6 h-6 text-[#FF5722]" />
              <span className="font-semibold">March 12th, 2026</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white px-6 py-3 rounded-2xl shadow-sm border border-black/5">
              <ClockCircleBoldDuotone className="w-6 h-6 text-[#FF5722]" />
              <span className="font-semibold">3:00 PM - 11:00 PM</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white px-6 py-3 rounded-2xl shadow-sm border border-black/5">
              <MapPointBoldDuotone className="w-6 h-6 text-[#FF5722]" />
              <span className="font-semibold">Youth House Abderehman Lalaa, Algiers</span>
            </div>
          </div>

          <button
            onClick={onRegisterClick}
            className="group bg-[#FF5722] text-white px-10 py-5 rounded-full hover:bg-[#E64A19] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,87,34,0.6)] inline-flex items-center gap-3 text-lg font-bold"
          >
            <span>Secure Your Spot</span>
            <TicketSaleBoldDuotone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          </button>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
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
            <h3 className="text-4xl md:text-5xl font-['Space_Grotesk'] tracking-tighter mb-4">Agenda</h3>
            <p className="text-gray-500 flex justify-center items-center gap-[8px]">What to expect on <img src="/logos/sahra-tech.svg" alt="Sahra Tech" className="inline-block w-10 h-10 mb-[12px]" /></p>
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
              <span className="text-[#FF5722] font-bold mr-2">Special Note:</span> 
              Event coincides with Ramadan — Iftar dinner will be served
            </p>
            <span className="text-2xl">🌙</span>
          </div>
        </div>
      </div>
    </section>
  );
}