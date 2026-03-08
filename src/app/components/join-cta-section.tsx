import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface JoinCTASectionProps {
  onJoinClick: () => void;
}

export function JoinCTASection({ onJoinClick }: JoinCTASectionProps) {
  const { t } = useLanguage();

  return (
    <section id="join" className="min-h-screen bg-[#F5F3F0] py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <div>
            <div className="text-sm tracking-wide text-gray-500 mb-4 font-medium">{t.joinCta.joinMovement}</div>
            <h2 className="text-5xl md:text-6xl leading-none tracking-tighter mb-6">
              {t.joinCta.title1}
              <br />
              {t.joinCta.title2}
            </h2>
            <p className="text-lg text-gray-600">
              {t.joinCta.description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {t.joinCta.benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 bg-white p-4 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-[#FF5722] rounded-full flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-600 text-sm font-medium">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-[#1A1A1A] text-white p-10 md:p-14 rounded-3xl relative overflow-hidden group hover:shadow-2xl transition-shadow duration-500">
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-4xl md:text-5xl mb-6 leading-none tracking-tighter">
              {t.joinCta.becomePartOf}
              <br />
              {t.joinCta.theCommunity}
            </h3>
            <p className="text-lg text-white/80 mb-8">
              {t.joinCta.ctaDescription}
            </p>
            
            {/* Note */}
            <div className="bg-white/10 border-2 border-white/20 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <p className="text-white font-medium mb-2">
                💡 {t.joinCta.membershipFree}
              </p>
              <p className="text-white/70 text-sm">
                {t.joinCta.membershipNote}
              </p>
            </div>

            <button
              type="button"
              onClick={onJoinClick}
              className="bg-[#FF5722] text-white px-8 py-4 rounded-full text-sm tracking-wide hover:bg-[#FF6B3D] hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 group/btn"
            >
              {t.joinCta.joinToday}
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