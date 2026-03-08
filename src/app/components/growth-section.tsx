import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface GrowthSectionProps {
  onRegisterClick: () => void;
}

export function GrowthSection({ onRegisterClick }: GrowthSectionProps) {
  const { t } = useLanguage();

  return (
    <section id="how-we-grow" className="min-h-screen bg-[#F5F3F0] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <div>
            <div className="text-sm tracking-wide text-gray-500 mb-4 font-medium">{t.growth.transformation}</div>
            <h2 className="text-5xl md:text-6xl leading-none tracking-tighter mb-6">
              {t.growth.title1}
              <br />
              {t.growth.title2}
            </h2>
            <p className="text-lg text-gray-600">
              {t.growth.description}
            </p>
          </div>

          <div className="flex items-end justify-end">
            <div className="bg-[#FF5722] text-white p-8 rounded-3xl max-w-md hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer group">
              <div className="text-5xl font-light mb-2">6</div>
              <div className="text-sm tracking-wide opacity-90 mb-4">{t.growth.activityTypes}</div>
              <p className="text-sm opacity-90 mb-6">
                {t.growth.activityDesc}
              </p>
              <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </div>
          </div>
        </div>

        {/* Activity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group">
            <div className="text-sm tracking-wide text-gray-500 mb-3 font-medium">{t.growth.learn}</div>
            <h3 className="text-2xl mb-4 group-hover:text-[#FF5722] transition-colors">{t.growth.workshopsTutorials}</h3>
            <p className="text-gray-600 text-sm">
              {t.growth.workshopsDesc}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group">
            <div className="text-sm tracking-wide text-gray-500 mb-3 font-medium">{t.growth.compete}</div>
            <h3 className="text-2xl mb-4 group-hover:text-[#FF5722] transition-colors">{t.growth.hackathons}</h3>
            <p className="text-gray-600 text-sm">
              {t.growth.hackathonsDesc}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group">
            <div className="text-sm tracking-wide text-gray-500 mb-3 font-medium">{t.growth.inspire}</div>
            <h3 className="text-2xl mb-4 group-hover:text-[#FF5722] transition-colors">{t.growth.guestLectures}</h3>
            <p className="text-gray-600 text-sm">
              {t.growth.guestLecturesDesc}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group">
            <div className="text-sm tracking-wide text-gray-500 mb-3 font-medium">{t.growth.connect}</div>
            <h3 className="text-2xl mb-4 group-hover:text-[#FF5722] transition-colors">{t.growth.networkingEvents}</h3>
            <p className="text-gray-600 text-sm">
              {t.growth.networkingDesc}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group">
            <div className="text-sm tracking-wide text-gray-500 mb-3 font-medium">{t.growth.collaborate}</div>
            <h3 className="text-2xl mb-4 group-hover:text-[#FF5722] transition-colors">{t.growth.peerLearning}</h3>
            <p className="text-gray-600 text-sm">
              {t.growth.peerLearningDesc}
            </p>
          </div>

          <button
            type="button"
            onClick={onRegisterClick}
            className="bg-[#FF5722] text-white p-8 rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group text-left rtl:text-right"
          >
            <div className="text-sm tracking-wide opacity-90 mb-3 font-medium">{t.growth.access}</div>
            <h3 className="text-2xl mb-4">{t.growth.openAccess}</h3>
            <p className="text-white/90 text-sm">
              {t.growth.openAccessDesc}
            </p>
            <ArrowUpRight className="w-6 h-6 mt-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}