import { UserPlus, Code, Users, GraduationCap, ArrowRight } from 'lucide-react';

export function LearningPathSection() {
  const stages = [
    {
      icon: UserPlus,
      label: 'Newbie',
      action: 'Join Discord & attend a "Hello World" workshop.',
      color: 'from-[#FF5722] to-[#FF8A65]',
    },
    {
      icon: Code,
      label: 'Member',
      action: 'Build a small project — anything counts.',
      color: 'from-[#FF8A65] to-[#FFAB91]',
    },
    {
      icon: Users,
      label: 'Contributor',
      action: 'Help organize an event or run a session.',
      color: 'from-[#FFAB91] to-[#FF7043]',
    },
    {
      icon: GraduationCap,
      label: 'Mentor',
      action: 'Teach others. Share what you know. Lead a team.',
      color: 'from-[#FF7043] to-[#FF5722]',
    },
  ];

  return (
    <section id="learning-path" className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="text-sm tracking-wide text-gray-500 mb-4 font-medium">YOUR ROADMAP</div>
          <h2 className="text-5xl md:text-6xl mb-6 leading-none tracking-tighter">
            YOUR JOURNEY
            <br />
            AT ACS
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every expert was once a beginner. Here's how we grow together.
          </p>
        </div>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Connection Line */}
          {/* <div className="hidden md:block absolute top-44 md:left-[12.5%] md:right-[12.5%] -translate-y-1/2 h-1 bg-gradient-to-r from-[#FF5722] via-[#FFAB91] to-[#FF5722]" /> */}

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <div key={index} className="relative">
                  {/* Stage Card */}
                  <div className="group cursor-pointer">
                    {/* Icon Circle */}
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${stage.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content Card */}
                    <div className="bg-[#F5F3F0] p-6 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                      <div className="text-xs tracking-wide text-gray-500 mb-2 font-medium">
                        STEP {index + 1}
                      </div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-[#FF5722] transition-colors">
                        {stage.label}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {stage.action}
                      </p>
                    </div>
                  </div>

                  {/* Arrow between stages (hidden on last item) */}
                  {index < stages.length - 1 && (
                    <div className="hidden md:flex absolute left-full top-44 -translate-y-1/2 z-20">
                      <ArrowRight className="w-8 h-8 text-[#FF5722]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <div className="inline-block bg-[#FF5722]/10 px-8 py-6 rounded-2xl">
            <p className="text-gray-700 text-lg mb-2">
              <strong>Ready to start your journey?</strong>
            </p>
            <p className="text-gray-600 text-sm">
              The best time to begin was yesterday. The second best time is today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
