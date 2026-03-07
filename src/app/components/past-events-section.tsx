import { ArrowUpRight, Calendar, MapPin, Users } from 'lucide-react';

export function PastEventsSection() {
  return (
    <section id="events" className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <div>
            <div className="text-sm tracking-wide text-gray-500 mb-4 font-medium">MILESTONES</div>
            <h2 className="text-5xl md:text-6xl leading-none tracking-tighter mb-6">
              PAST
              <br />
              EVENTS
            </h2>
            <p className="text-lg text-gray-600">
              Check out some of our recent activities and events that brought our community together.
            </p>
          </div>

          <div className="flex items-end justify-end">
            <div className="bg-[#FF5722] text-white p-8 rounded-3xl max-w-md hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer group">
              <div className="text-5xl font-light mb-2">1,110+</div>
              <div className="text-sm tracking-wide opacity-90 mb-4">TOTAL ATTENDEES</div>
              <p className="text-sm opacity-90 mb-6">
                From ideathons to robotics festivals, our events bring the tech community together
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
                <span>⭐</span> STAR EVENT
              </div>

              <div className="text-white text-center p-8 relative z-10">
                <div className="text-6xl font-light mb-4">1,000+</div>
                <div className="text-lg tracking-wide opacity-90">ATTENDEES</div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/20 rounded-full blur-2xl"></div>
            </div>
            
            <div>
              <h3 className="text-3xl mb-3 tracking-tight group-hover:text-[#FF5722] transition-colors">AFROBOT</h3>
              
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>07 July, 2025</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <MapPin className="w-4 h-4" />
                  <span>Sablettes Park, Algiers</span>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                One of the largest youth robotics gatherings in the region, putting Abderrahmane Laala Youth House on the national map. Afrobot 2025 featured robotics competitions, hands-on educational workshops, inspiring tech showcases, and vibrant community engagement.
              </p>
              
              <div className="flex flex-wrap gap-2">
                <span className="text-xs tracking-wide text-gray-500 bg-[#F5F3F0] px-3 py-1 rounded-full">Robotics Competition</span>
                <span className="text-xs tracking-wide text-gray-500 bg-[#F5F3F0] px-3 py-1 rounded-full">Educational Workshops</span>
                <span className="text-xs tracking-wide text-gray-500 bg-[#F5F3F0] px-3 py-1 rounded-full">Tech Showcase</span>
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
                <div className="text-lg tracking-wide opacity-90">ATTENDEES</div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-black/20 rounded-full blur-2xl"></div>
            </div>
            
            <div>
              <h3 className="text-3xl mb-3 tracking-tight group-hover:text-[#FF5722] transition-colors">JISR NUMUW IDEATHON</h3>
              
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>5-6 July, 2025</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <MapPin className="w-4 h-4" />
                  <span>Sablettes Park, Algiers</span>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                A marathon of minds where youth solvers gathered to hack solutions for community growth. This event is part of the broader Jisr Numuw Initiative that enables ACS.
              </p>
              
              <div className="flex flex-wrap gap-2">
                <span className="text-xs tracking-wide text-gray-500 bg-[#F5F3F0] px-3 py-1 rounded-full">Ideathon</span>
                <span className="text-xs tracking-wide text-gray-500 bg-[#F5F3F0] px-3 py-1 rounded-full">Collaboration</span>
                <span className="text-xs tracking-wide text-gray-500 bg-[#F5F3F0] px-3 py-1 rounded-full">Community Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
