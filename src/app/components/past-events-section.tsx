import { ArrowUpRight, Calendar, MapPin, Users } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function PastEventsSection() {
  const { t } = useLanguage();

  return (
    <section id="events" className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <div>
            <div className="text-sm tracking-wide text-gray-500 mb-4 font-medium">{t.pastEvents.milestones}</div>
            <h2 className="text-5xl md:text-6xl leading-none tracking-tighter mb-6">
              {t.pastEvents.title1}
              <br />
              {t.pastEvents.title2}
            </h2>
            <p className="text-lg text-gray-600">
              {t.pastEvents.description}
            </p>
          </div>

          <div className="flex items-end justify-end">
            <div className="bg-[#FF5722] text-white p-8 rounded-3xl max-w-md hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer group">
              <div className="text-5xl font-light mb-2">1,110+</div>
              <div className="text-sm tracking-wide opacity-90 mb-4">{t.pastEvents.totalAttendees}</div>
              <p className="text-sm opacity-90 mb-6">
                {t.pastEvents.totalDesc}
              </p>
              <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </div>
          </div>
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Afrobot - Star Event */}
          <div className="group cursor-pointer">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 group-hover:shadow-xl transition-shadow duration-500 flex items-center justify-center">
              <img
                src="/afrobot.webp"
                alt="Afrobot event placeholder"
                className="absolute inset-0 w-full h-full object-cover scale-110 blur-[2px] group-hover:scale-125 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/35" />

              {/* Star Badge */}
              <div className="absolute top-6 right-6 bg-white text-[#FF5722] px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                <span>⭐</span> {t.pastEvents.starEvent}
              </div>

              <div className="text-white text-center p-8 relative z-10">
                <div className="text-6xl font-light mb-4">1,000+</div>
                <div className="text-lg tracking-wide opacity-90">{t.pastEvents.attendees}</div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/20 rounded-full blur-2xl"></div>
            </div>
            
            <div>
              <h3 className="text-3xl mb-3 tracking-tight group-hover:text-[#FF5722] transition-colors">{t.pastEvents.afrobot.title}</h3>
              
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>{t.pastEvents.afrobot.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <MapPin className="w-4 h-4" />
                  <span>{t.pastEvents.afrobot.location}</span>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {t.pastEvents.afrobot.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {t.pastEvents.afrobot.tags.map((tag, i) => (
                  <span key={i} className="text-xs tracking-wide text-gray-500 bg-[#F5F3F0] px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* JISR NUMUW Ideathon */}
          <div className="group cursor-pointer">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 group-hover:shadow-xl transition-shadow duration-500 flex items-center justify-center">
              <img
                src="/jisr.webp"
                alt="Ideathon event placeholder"
                className="absolute inset-0 w-full h-full object-cover scale-110 blur-[2px] group-hover:scale-125 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/35" />

              <div className="text-white text-center p-8 relative z-10">
                <div className="text-6xl font-light mb-4">110+</div>
                <div className="text-lg tracking-wide opacity-90">{t.pastEvents.attendees}</div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-black/20 rounded-full blur-2xl"></div>
            </div>
            
            <div>
              <h3 className="text-3xl mb-3 tracking-tight group-hover:text-[#FF5722] transition-colors">{t.pastEvents.ideathon.title}</h3>
              
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>{t.pastEvents.ideathon.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <MapPin className="w-4 h-4" />
                  <span>{t.pastEvents.ideathon.location}</span>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {t.pastEvents.ideathon.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {t.pastEvents.ideathon.tags.map((tag, i) => (
                  <span key={i} className="text-xs tracking-wide text-gray-500 bg-[#F5F3F0] px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
