import { useLanguage } from '../i18n/LanguageContext';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      type="button"
      onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
      className="bg-white/90 backdrop-blur-sm border border-black/10 text-sm font-semibold px-3 py-1.5 rounded-full hover:bg-white hover:shadow-md transition-all duration-200 flex items-center gap-1.5 shrink-0"
      aria-label="Switch language"
    >
      <span className={language === 'en' ? 'text-[#FF5722]' : 'text-gray-500'}>EN</span>
      <span className="text-gray-300">|</span>
      <span className={`${language === 'ar' ? 'text-[#FF5722]' : 'text-gray-500'} font-['Cairo',sans-serif]`}>عر</span>
    </button>
  );
}
