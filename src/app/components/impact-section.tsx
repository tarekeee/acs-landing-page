import { Calendar, Users, Trophy, Rocket, BookOpen } from 'lucide-react';

export function ImpactSection() {
  const stats = [
    {
      icon: Calendar,
      value: '2+',
      label: 'Seasons Active',
    },
    {
      icon: Users,
      value: '1,000+',
      label: 'Youth Reached',
    },
    {
      icon: Trophy,
      value: '3+',
      label: 'Competition Wins',
    },
    {
      icon: Rocket,
      value: '2+',
      label: 'Major Events Organized',
    },
    {
      icon: BookOpen,
      value: '10+',
      label: 'Workshops Delivered',
    },
  ];

  return (
    <section id="impact" className="min-h-screen bg-[#F5F3F0] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="text-sm tracking-wide text-gray-500 mb-4 font-medium">MAKING A DIFFERENCE</div>
          <h2 className="text-5xl md:text-6xl mb-6 leading-none tracking-tighter">
            OUR
            <br />
            IMPACT
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Numbers that tell the story of our journey and the lives we've touched.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-[#FF5722]/10 rounded-xl flex items-center justify-center group-hover:bg-[#FF5722] transition-colors duration-300">
                  <Icon className="w-7 h-7 text-[#FF5722] group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-4xl font-light text-[#111111] mb-2 group-hover:text-[#FF5722] transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm tracking-wide text-gray-500 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Highlight */}
        <div className="bg-gradient-to-br from-[#FF5722] to-[#FF8A65] rounded-3xl p-10 text-white text-center hover:shadow-2xl transition-shadow duration-500">
          <div className="max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl font-light mb-4 leading-none">
              "From a small community to a recognized force in Algeria's tech scene"
            </p>
            <p className="text-sm opacity-90 tracking-wide">
              — Our journey continues to inspire youth across the nation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
