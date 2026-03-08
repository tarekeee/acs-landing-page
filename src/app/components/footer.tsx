import { Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl mb-4 tracking-tight">{t.footer.acs}</h3>
            <p className="text-sm text-gray-600">
              {t.footer.acsFullName}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm tracking-wide mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#about" className="hover:text-[#FF5722] transition-colors">
                  {t.footer.aboutUs}
                </a>
              </li>
              <li>
                <a href="#how-we-grow" className="hover:text-[#FF5722] transition-colors">
                  {t.footer.howWeGrow}
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-[#FF5722] transition-colors">
                  {t.footer.events}
                </a>
              </li>
              <li>
                <a href="#join" className="hover:text-[#FF5722] transition-colors">
                  {t.footer.joinUs}
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm tracking-wide mb-4">{t.footer.resources}</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#achievements" className="hover:text-[#FF5722] transition-colors">
                  {t.footer.achievements}
                </a>
              </li>
              <li>
                <a href="#learning-path" className="hover:text-[#FF5722] transition-colors">
                  {t.footer.learningPath}
                </a>
              </li>
              <li>
                <a href="#impact" className="hover:text-[#FF5722] transition-colors">
                  {t.footer.ourImpact}
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:text-[#FF5722] transition-colors">
                  {t.footer.partnersLink}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm tracking-wide mb-4">{t.footer.contactTitle}</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>contact@acsociety.club</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium mb-1">{t.footer.youthHouse}</div>
                  <div>{t.footer.techHub}</div>
                  <div>{t.footer.address}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div>{t.footer.copyright}</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#FF5722] transition-colors">
                {t.footer.privacy}
              </a>
              <a href="#" className="hover:text-[#FF5722] transition-colors">
                {t.footer.terms}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
