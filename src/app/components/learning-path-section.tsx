import { UserPlus, Code, Users, GraduationCap, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function LearningPathSection() {
  const { t, isRTL } = useLanguage();

  const stageIcons = [UserPlus, Code, Users, GraduationCap];
  const stageColors = [
    'from-[#FF5722] to-[#FF8A65]',
    'from-[#FF8A65] to-[#FFAB91]',
    'from-[#FFAB91] to-[#FF7043]',
    'from-[#FF7043] to-[#FF5722]',
  ];

  return (
    <section id="learning-path" className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="text-sm tracking-wide text-gray-500 mb-4 font-medium">{t.learningPath.yourRoadmap}</div>
          <h2 className="text-5xl md:text-6xl mb-6 leading-none tracking-tighter">
            {t.learningPath.title1}
            <br />
            {t.learningPath.title2}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.learningPath.description}
          </p>
        </div>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Connection Line */}
          {/* <div className="hidden md:block absolute top-44 md:left-[12.5%] md:right-[12.5%] -translate-y-1/2 h-1 bg-gradient-to-r from-[#FF5722] via-[#FFAB91] to-[#FF5722]" /> */}

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {t.learningPath.stages.map((stage, index) => {
              const Icon = stageIcons[index];
              return (
                <div key={index} className="relative">
                  {/* Stage Card */}
                  <div className="group cursor-pointer">
                    {/* Icon Circle */}
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${stageColors[index]} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content Card */}
                    <div className="bg-[#F5F3F0] p-6 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-500 min-h-[180px] flex flex-col">
                      <div className="text-xs tracking-wide text-gray-500 mb-2 font-medium">
                        {t.learningPath.step} {index + 1}
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
                  {index < t.learningPath.stages.length - 1 && (
                    <div className={`hidden md:flex absolute top-44 -translate-y-1/2 z-20 ${isRTL ? 'right-full' : 'left-full'}`}>
                      {isRTL ? <ArrowLeft className="w-8 h-8 text-[#FF5722]" /> : <ArrowRight className="w-8 h-8 text-[#FF5722]" />}
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
              <strong>{t.learningPath.readyToStart}</strong>
            </p>
            <p className="text-gray-600 text-sm">
              {t.learningPath.bestTime}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
