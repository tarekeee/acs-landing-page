import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function PartnersSection() {
  const { t } = useLanguage();

  const partnerLogos = [
    '/logos/ministry-of-youth.svg',
    '/logos/wilaya-of-algiers.svg',
    '/logos/youth-house.png',
    '/logos/jisr-numuw.svg',
  ];

  return (
    <section id="partners" className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-start mb-10">
          <div>
            <div className="text-sm tracking-wide text-gray-500 mb-4 font-medium">{t.partners.ourEcosystem}</div>
            <h2 className="text-5xl md:text-6xl leading-none tracking-tighter">
              {t.partners.title1}
              <br />
              {t.partners.title2}
            </h2>
          </div>
          <div className="hidden md:block hover:rotate-45 transition-transform duration-500 cursor-pointer">
            <ArrowUpRight className="w-8 h-8 text-[#FF5722]" />
          </div>
        </div>

        <p className="text-lg text-gray-600 mb-8 max-w-2xl">
          {t.partners.description}
        </p>

        {/* Partner Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.partners.list.map((partner, index) => (
            <div
              key={index}
              className="group cursor-pointer bg-[#F5F3F0] p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center"
            >
              {/* Logo Placeholder */}
              <div className="w-24 h-24 mb-6 p-3 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-lg transition-shadow duration-300">
                <img
                  src={partnerLogos[index]}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#FF5722] transition-colors">
                {partner.name}
              </h3>
              <p className="text-xs tracking-wide text-gray-500 font-medium">
                {partner.note}
              </p>
            </div>
          ))}
        </div>

        {/* Optional: Trusted By Section */}
        {false && (
        <div className="mt-12 bg-[#F5F3F0] rounded-3xl p-10">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Growing Together
            </h3>
            <p className="text-gray-600">
              Building partnerships and collaborations across the tech ecosystem
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale">
            {/* Placeholder for future partner logos */}
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-32 h-16 bg-gray-300 rounded-lg flex items-center justify-center"
              >
                <span className="text-xs text-gray-500">Partner {i}</span>
              </div>
            ))}
          </div>
        </div> )
}
      </div>
    </section>
  );
}
