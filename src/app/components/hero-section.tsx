import HeroImport from "../../imports/Hero3-12-554";
import { EventCountdown } from './event-countdown';
import { useLanguage } from '../i18n/LanguageContext';
import { LanguageSwitcher } from './language-switcher';

interface HeroSectionProps {
  onJoinClick: () => void;
}

export function HeroSection({ onJoinClick }: HeroSectionProps) {
  const { t, isRTL } = useLanguage();
  const handleJoinClick = () => {
    onJoinClick();
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full relative bg-[#F5F3F0]">
      {/* Hero container with fixed height */}
      <div className="w-full h-[100svh] min-h-[600px] sm:min-h-[700px] lg:min-h-[800px] relative overflow-hidden">
        {/* 
          This loads the original Figma design. 
        */}
        <HeroImport onJoinClick={onJoinClick} />
        
        {/* 
          Custom Mobile Hero Content 
        */}
        <div className="lg:hidden absolute inset-0 flex flex-col items-center justify-start px-6 text-center z-[50] pt-[120px] pointer-events-none">
          <div className="pointer-events-auto flex flex-col items-center max-w-[450px]">
            <h1 className={`${isRTL ? "font-['Cairo',sans-serif]" : "font-['Space_Grotesk',sans-serif]"} text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.1] tracking-[-2px] mb-6 text-black`}>
              {t.hero.title}
            </h1>
            <p className={`${isRTL ? "font-['Cairo',sans-serif]" : "font-['Space_Grotesk',sans-serif]"} text-[17px] md:text-[19px] font-medium text-black/80 leading-relaxed mb-8 px-2`}>
              {t.hero.subtitle}
            </p>
            <EventCountdown isMobile={true} />
          </div>
        </div>

        {/* Mobile floating bottom navbar */}
        <div className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-1.5rem)] max-w-[620px] z-[90] pointer-events-none">
          <div dir="ltr" className="pointer-events-auto backdrop-blur-[14px] content-stretch flex h-[56px] items-center justify-between pl-[12px] pr-[8px] py-[8px] rounded-[56px] relative gap-3">
            <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(130,130,130,0.2)] border-solid inset-0 pointer-events-none rounded-[56px]" />
            <img src="/logos/acs.png" alt="ACS" className="h-8 w-auto shrink-0 relative z-[1]" />
            <div className={`relative z-[1] flex-1 min-w-0 flex items-center gap-1.5 sm:gap-3 text-[12px] max-[600px]:text-[9px] ${isRTL ? "font-['Cairo',sans-serif]" : "font-['Space_Grotesk',sans-serif]"} font-semibold leading-none text-[rgba(0,0,0,0.9)] whitespace-nowrap overflow-x-auto overflow-y-hidden no-scrollbar`}>
              <button type="button" onClick={() => scrollToSection('about')} className="hover:text-[#FF5722] transition-colors max-[600px]:text-[10px]">{t.nav.about}</button>
              <button type="button" onClick={() => scrollToSection('how-we-grow')} className="hover:text-[#FF5722] transition-colors max-[600px]:text-[10px]">{t.nav.howWeGrow}</button>
              <button type="button" onClick={() => scrollToSection('events')} className="hover:text-[#FF5722] transition-colors max-[600px]:text-[10px]">{t.nav.events}</button>
              <button type="button" onClick={() => scrollToSection('contact')} className="hover:text-[#FF5722] transition-colors max-[600px]:text-[10px]">{t.nav.contact}</button>
            </div>
            <button
              type="button"
              onClick={handleJoinClick}
              className={`relative z-[1] shrink-0 h-[40px] px-4 rounded-[999px] bg-[#FF5722] text-white text-[12px] ${isRTL ? "font-['Cairo',sans-serif]" : "font-['Space_Grotesk',sans-serif]"} font-semibold leading-none hover:bg-[#E64A19] transition-colors`}
            >
              {t.nav.joinUs}
            </button>
          </div>
        </div>
      </div>

      {/* Add responsive CSS overrides */}
      <style>{`
        /* Remove the background orange glow */
        [data-name="Gradient"] {
          display: none !important;
        }

        /* Keep navbar always interactive above illustration layers */
        [data-name="Navbar"] {
          z-index: 80 !important;
          pointer-events: auto !important;
        }

        [data-name="Navbar Links"],
        [data-name="Sign-up Button"] {
          pointer-events: auto !important;
        }

        /* Make navbar responsive */[data-name="Navbar"] {
          width: 90% !important;
          max-width: 1170px !important;
        }
        
        @media (max-width: 1200px) {
          [data-name="Navbar"] {
            width: 95% !important;
          }
        }
        
        @media (max-width: 1023px) {
          /* Keep the figma navbar background and logo but hide links */[data-name="Navbar"] {
            width: calc(100% - 2rem) !important;
            top: 20px !important;
            height: 60px !important;
            justify-content: space-between !important;
          }
          
          [data-name="Navbar Links"],[data-name="Sign-up Button"] {
            display: none !important;
          }
          [data-name="Horizental"] {
            transform: scale(0.85) !important;
            transform-origin: left center !important;
            position: relative !important;
            top: 0 !important;
          }

          /* ONLY HIDE THE TEXT CONTENT BELOW LG BREAKPOINT */
          [data-name="Hero Content"] {
            display: none !important;
          }
        }
        
        /* Make hero content responsive on tablet/desktop */
        @media (min-width: 768px) and (max-width: 1024px) {
          [data-name="Hero Content"] {
            padding: 0 1.5rem !important;
          }
          [data-name="Hero Content"] > p:first-child {
            font-size: 3.5rem !important;
            width: auto !important;
            max-width: 90% !important;
          }
        }
        
        /* Base styles for the illustration */
        [data-name="Hero Illustration"] {
          bottom: 20px !important;
          transform-origin: center bottom !important;
          left: 50% !important;
          transform: translateX(-50%) scale(0.75) !important;
          position: absolute !important;
        }
        
        /* Style the isometric flow container */
        [data-name="Hero Illustration"] .iso-scene {
          pointer-events: none !important;
        }
        
        [data-name="Hero Illustration"] .iso-label {
          pointer-events: auto !important;
        }
        
        /* Scale down illustration on mobile and fix the offset */
        @media (max-width: 767px) {[data-name="Hero Illustration"] {
            bottom: auto !important;
            top: 10px !important; /* Anchors it nicely beneath the custom text block */
            transform: translateX(-50%) scale(0.45) !important;
            transform-origin: center top !important; /* Scales from the top instead of bottom to prevent dropping */
          }
        }
        
        /* Scale down illustration on tablet */
        @media (min-width: 768px) and (max-width: 1024px) {
          [data-name="Hero Illustration"] {
            transform: translateX(-50%) scale(0.6) !important;
            bottom: 30px !important;
          }
        }
        
        /* Scale down illustration on smaller desktops */
        @media (min-width: 1025px) and (max-width: 1300px) {
          [data-name="Hero Illustration"] {
            transform: translateX(-50%) scale(0.7) !important;
            bottom: 20px !important;
          }
        }

        /* Large desktops */
        @media (min-width: 1301px) {
          [data-name="Hero Illustration"] {
            transform: translateX(-50%) scale(0.8) !important;
            bottom: 10px !important;
          }
        }
        
        /* Add smooth scroll */
        html {
          scroll-behavior: smooth !important;
        }
      `}</style>
    </div>
  );
}