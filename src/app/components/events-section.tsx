import { ArrowUpRight, Calendar, Users, FlaskConical } from 'lucide-react';

export function EventsSection() {
  const upcomingEvents = [
    {
      date: 'MAR 15, 2026',
      title: 'Annual Chemistry Symposium',
      description: 'Join us for a day of cutting-edge research presentations and networking',
      icon: FlaskConical,
    },
    {
      date: 'MAR 22, 2026',
      title: 'Lab Safety Workshop',
      description: 'Essential training for all members working in research laboratories',
      icon: Users,
    },
    {
      date: 'APR 05, 2026',
      title: 'Industry Networking Night',
      description: 'Connect with professionals from leading chemical and pharmaceutical companies',
      icon: Calendar,
    },
  ];

  return (
    <section id="events" className="min-h-screen bg-[#F5F3F0] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="text-sm tracking-wide text-gray-500 mb-4 font-medium">UPCOMING EVENTS</div>
            <h2 className="text-5xl md:text-6xl leading-tight tracking-tight mb-8">
              JOIN OUR
              <br />
              COMMUNITY
            </h2>
            <p className="text-lg text-gray-600">
              Participate in workshops, seminars, and networking events designed to enhance your scientific knowledge and professional development.
            </p>
          </div>

          <div className="flex items-end justify-end">
            <div className="bg-[#FF5722] text-white p-8 rounded-3xl max-w-md hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer group">
              <div className="text-5xl font-light mb-2">50+</div>
              <div className="text-sm tracking-wide opacity-90 mb-4">ANNUAL EVENTS</div>
              <p className="text-sm opacity-90 mb-6">
                From guest lectures to hands-on workshops, we offer diverse opportunities for learning and growth
              </p>
              <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </div>
          </div>
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {upcomingEvents.map((event, index) => {
            const Icon = event.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <Icon className="w-6 h-6 text-[#FF5722] group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-xs tracking-wide text-gray-500 font-medium">{event.date}</div>
                </div>
                <h3 className="text-xl mb-3 group-hover:text-[#FF5722] transition-colors">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-600">{event.description}</p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="bg-[#1A1A1A] text-white p-12 md:p-16 rounded-3xl relative overflow-hidden group hover:shadow-2xl transition-shadow duration-500">
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-4xl md:text-5xl mb-6 leading-tight tracking-tight">
              LET'S BUILD THE
              <br />
              FUTURE TOGETHER
            </h3>
            <p className="text-lg text-white/80 mb-8">
              Become part of a dynamic community dedicated to advancing chemistry and making a positive impact on the world.
            </p>
            <button className="bg-[#FF5722] text-white px-8 py-4 rounded-full text-sm tracking-wide hover:bg-[#FF6B3D] hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 group/btn">
              JOIN ACS TODAY
              <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF5722]/10 rounded-full blur-3xl group-hover:bg-[#FF5722]/20 transition-colors duration-700"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>
  );
}