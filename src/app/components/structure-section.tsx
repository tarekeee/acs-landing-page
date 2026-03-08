import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

type StructureSectionProps = {
  onPartnershipClick?: () => void;
};

export function StructureSection({ onPartnershipClick }: StructureSectionProps) {
  const { t, isRTL } = useLanguage();

  return (
    <section id="structure" className="min-h-screen bg-[#F5F3F0] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="text-sm tracking-wide text-gray-500 mb-6 font-medium">{t.structure.organization}</div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-12 leading-none tracking-tighter flex flex-col md:flex-row md:items-center gap-4 md:gap-6 flex-wrap">
            <span>{t.structure.our}</span>
            
            <div className="bg-[#FF5722] text-white px-6 py-4 rounded-full inline-flex items-center gap-4 hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer group shadow-lg">
              <div className="flex flex-col text-left rtl:text-right">
                <span className="text-xs md:text-sm tracking-wide opacity-90 font-bold mb-1">{t.structure.coreTeamPlus}</span>
                <span className="text-xs md:text-sm tracking-wide opacity-90">{t.structure.departments}</span>
              </div>
              <div className="text-4xl md:text-5xl font-light">4</div>
              <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </div>
            
            <span>{t.structure.structureTitle}</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-black/10 pt-12">
            <div className="hover:text-[#FF5722] transition-colors duration-300 cursor-pointer group">
              <div className="text-sm tracking-wide text-gray-500 mb-2 font-medium group-hover:text-[#FF5722] transition-colors">{t.structure.techDev}</div>
              <p className="text-sm text-gray-600">
                {t.structure.techDevDesc}
              </p>
            </div>
            <div className="hover:text-[#FF5722] transition-colors duration-300 cursor-pointer group">
              <div className="text-sm tracking-wide text-gray-500 mb-2 font-medium group-hover:text-[#FF5722] transition-colors">{t.structure.designMedia}</div>
              <p className="text-sm text-gray-600">
                {t.structure.designMediaDesc}
              </p>
            </div>
            <div className="hover:text-[#FF5722] transition-colors duration-300 cursor-pointer group">
              <div className="text-sm tracking-wide text-gray-500 mb-2 font-medium group-hover:text-[#FF5722] transition-colors">{t.structure.hrTalent}</div>
              <p className="text-sm text-gray-600">
                {t.structure.hrTalentDesc}
              </p>
            </div>
            <button
              type="button"
              onClick={onPartnershipClick}
              className="text-left rtl:text-right hover:text-[#FF5722] transition-colors duration-300 cursor-pointer group"
            >
              <div className="text-sm tracking-wide text-gray-500 mb-2 font-medium group-hover:text-[#FF5722] transition-colors">{t.structure.partnerships}</div>
              <p className="text-sm text-gray-600">
                {t.structure.partnershipsDesc}
              </p>
            </button>
          </div>
        </div>

        {/* Team Taglines */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5">
            <div className="text-sm tracking-wide text-gray-500 mb-4 font-medium">
              {t.structure.poweredBy}
            </div>
            <h3 className="text-4xl mb-6 leading-none tracking-tighter">
              {t.structure.coreTeam}
              <br />
              {t.structure.team}
            </h3>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group">
              <div className="text-xs tracking-wide text-gray-500 mb-3 font-medium">{t.structure.techDev}</div>
              <h4 className="text-xl mb-3 group-hover:text-[#FF5722] transition-colors">{t.structure.buildingFuture}</h4>
              <p className="text-sm text-gray-600">
                {t.structure.buildingFutureDesc}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group">
              <div className="text-xs tracking-wide text-gray-500 mb-3 font-medium">{t.structure.designMedia}</div>
              <h4 className="text-xl mb-3 group-hover:text-[#FF5722] transition-colors">{t.structure.visualizingVision}</h4>
              <p className="text-sm text-gray-600">
                {t.structure.visualizingVisionDesc}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group">
              <div className="text-xs tracking-wide text-gray-500 mb-3 font-medium">{t.structure.hrTalent}</div>
              <h4 className="text-xl mb-3 group-hover:text-[#FF5722] transition-colors">{t.structure.nurturingPotential}</h4>
              <p className="text-sm text-gray-600">
                {t.structure.nurturingPotentialDesc}
              </p>
            </div>

            <button
              type="button"
              onClick={onPartnershipClick}
              className="w-full text-left rtl:text-right bg-[#FF5722] text-white p-6 rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group"
            >
              <div className="text-xs tracking-wide opacity-90 mb-3 font-medium">{t.structure.partnerships}</div>
              <h4 className="text-xl mb-3">{t.structure.connectingCommunities}</h4>
              <p className="text-sm text-white/90">
                {t.structure.connectingCommunitiesDesc}
              </p>
              <ArrowUpRight className="w-5 h-5 mt-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Scrolling Marquee */}
        <div dir="ltr" className="mt-16 overflow-hidden bg-white rounded-2xl py-6">
          <div className="flex animate-marquee whitespace-nowrap" style={isRTL ? { animationDirection: 'reverse' } : undefined}>
            {[...t.structure.marquee, ...t.structure.marquee].map((text, i) => (
              <span key={i} className="mx-8 text-2xl font-light text-gray-400">{!isRTL && '◆'} {text} {isRTL && '◆'}</span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
