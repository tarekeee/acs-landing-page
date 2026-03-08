import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function WhoWeAreSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-5">
            <div className="text-sm tracking-wide text-gray-500 mb-4 font-medium">{t.whoWeAre.established}</div>
            <div className="bg-[#FF5722] text-white p-6 rounded-3xl inline-block hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer group">
              <div className="text-5xl font-light mb-2">2024</div>
              <div className="text-sm tracking-wide opacity-90">{t.whoWeAre.pioneeringInnovation}</div>
              <ArrowUpRight className="w-6 h-6 mt-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <h2 className="text-5xl md:text-6xl mb-6 leading-none tracking-tighter">
              {t.whoWeAre.title1}
              <br />
              {t.whoWeAre.title2}
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              {t.whoWeAre.description1}
            </p>
            <p className="text-base text-gray-600">
              {t.whoWeAre.description2}
            </p>
          </div>
        </div>

        {/* Value Proposition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#E8E6E3] p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group">
            <div className="text-sm tracking-wide text-gray-500 mb-3 font-medium">{t.whoWeAre.foundation}</div>
            <h3 className="text-2xl mb-4 group-hover:text-[#FF5722] transition-colors">{t.whoWeAre.communityFirst}</h3>
            <p className="text-gray-600 text-sm">
              {t.whoWeAre.communityDesc}
            </p>
          </div>

          <div className="bg-[#E8E6E3] p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group">
            <div className="text-sm tracking-wide text-gray-500 mb-3 font-medium">{t.whoWeAre.education}</div>
            <h3 className="text-2xl mb-4 group-hover:text-[#FF5722] transition-colors">{t.whoWeAre.skillDev}</h3>
            <p className="text-gray-600 text-sm">
              {t.whoWeAre.skillDevDesc}
            </p>
          </div>

          <div className="bg-[#FF5722] text-white p-8 rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group">
            <div className="text-sm tracking-wide opacity-90 mb-3 font-medium">{t.whoWeAre.creativityAnd}</div>
            <h3 className="text-2xl mb-4">{t.whoWeAre.innovationHub}</h3>
            <p className="text-white/90 text-sm">
              {t.whoWeAre.innovationDesc}
            </p>
            <ArrowUpRight className="w-6 h-6 mt-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
}