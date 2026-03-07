import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import HeroImport from "../../imports/Hero3-12-554";
import { EventCountdown } from './event-countdown';

interface HeroSectionProps {
  onJoinClick: () => void;
}

export function HeroSection({ onJoinClick }: HeroSectionProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleJoinClick = () => {
    setIsMobileMenuOpen(false);
    onJoinClick();
  };

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full relative bg-[#F5F3F0]">
      {/* Full-screen Blur Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#F5F3F0]/85 backdrop-blur-xl z-[100] flex flex-col p-6 md:hidden"
          >
            <div className="flex justify-end items-center h-[60px] mb-8">
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-black/5 transition-colors"
              >
                <X className="w-8 h-8 text-black" />
              </button>
            </div>
            <div className="flex flex-col gap-8 text-2xl font-medium items-center justify-center flex-1 pb-20">
              <button onClick={() => scrollToSection('about')} className="text-black hover:text-[#E85102] transition-colors">About</button>
              <button onClick={() => scrollToSection('how-we-grow')} className="text-black hover:text-[#E85102] transition-colors">How We Grow</button>
              <button onClick={() => scrollToSection('events')} className="text-black hover:text-[#E85102] transition-colors">Events</button>
              <button onClick={() => scrollToSection('contact')} className="text-black hover:text-[#E85102] transition-colors">Contact</button>
              <button 
                onClick={handleJoinClick}
                className="mt-6 bg-[#E85102] text-white py-4 px-12 rounded-full text-center hover:bg-[#FF5722] transition-all font-semibold shadow-lg hover:shadow-xl text-xl"
              >
                Join Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
            <h1 className="font-['Space_Grotesk',sans-serif] text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.1] tracking-[-2px] mb-6 text-black">
              The Next Gen Of Youth
            </h1>
            <p className="font-['Space_Grotesk',sans-serif] text-[17px] md:text-[19px] font-medium text-black/80 leading-relaxed mb-8 px-2">
              We help young minds to learn, build, and lead with purpose.
            </p>
            <EventCountdown isMobile={true} />
          </div>
        </div>

        {/* Mobile Hamburger Button Overlay over existing Navbar */}
        <div className="lg:hidden absolute top-[20px] left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] h-[60px] z-[60] flex items-center justify-end pr-4 pointer-events-none">
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="pointer-events-auto p-2 text-black/90 hover:text-[#E85102] transition-colors"
          >
            <Menu className="w-7 h-7" />
          </button>
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
            padding-right: 60px !important; /* space for overlay hamburger */
            justify-content: flex-start !important;
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