import { ArrowUpRight } from 'lucide-react';

type StructureSectionProps = {
  onPartnershipClick?: () => void;
};

export function StructureSection({ onPartnershipClick }: StructureSectionProps) {
  return (
    <section id="structure" className="min-h-screen bg-[#F5F3F0] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="text-sm tracking-wide text-gray-500 mb-6 font-medium">ORGANIZATION</div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-12 leading-none tracking-tighter flex flex-col md:flex-row md:items-center gap-4 md:gap-6 flex-wrap">
            <span>OUR</span>
            
            <div className="bg-[#FF5722] text-white px-6 py-4 rounded-full inline-flex items-center gap-4 hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer group shadow-lg">
              <div className="flex flex-col text-left">
                <span className="text-xs md:text-sm tracking-wide opacity-90 font-bold mb-1">CORE TEAM +</span>
                <span className="text-xs md:text-sm tracking-wide opacity-90">DEPARTMENTS</span>
              </div>
              <div className="text-4xl md:text-5xl font-light">4</div>
              <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </div>
            
            <span>STRUCTURE</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-black/10 pt-12">
            <div className="hover:text-[#FF5722] transition-colors duration-300 cursor-pointer group">
              <div className="text-sm tracking-wide text-gray-500 mb-2 font-medium group-hover:text-[#FF5722] transition-colors">TECH & DEVELOPMENT</div>
              <p className="text-sm text-gray-600">
                Developers, Engineers, Hackers
              </p>
            </div>
            <div className="hover:text-[#FF5722] transition-colors duration-300 cursor-pointer group">
              <div className="text-sm tracking-wide text-gray-500 mb-2 font-medium group-hover:text-[#FF5722] transition-colors">DESIGN & MEDIA</div>
              <p className="text-sm text-gray-600">
                UI/UX Designers, Content Creators
              </p>
            </div>
            <div className="hover:text-[#FF5722] transition-colors duration-300 cursor-pointer group">
              <div className="text-sm tracking-wide text-gray-500 mb-2 font-medium group-hover:text-[#FF5722] transition-colors">HR & TALENT</div>
              <p className="text-sm text-gray-600">
                Onboarding, Member Relations
              </p>
            </div>
            <button
              type="button"
              onClick={onPartnershipClick}
              className="text-left hover:text-[#FF5722] transition-colors duration-300 cursor-pointer group"
            >
              <div className="text-sm tracking-wide text-gray-500 mb-2 font-medium group-hover:text-[#FF5722] transition-colors">PARTNERSHIPS & OUTREACH</div>
              <p className="text-sm text-gray-600">
                External Relations, Events
              </p>
            </button>
          </div>
        </div>

        {/* Team Taglines */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5">
            <div className="text-sm tracking-wide text-gray-500 mb-4 font-medium">
              POWERED BY
            </div>
            <h3 className="text-4xl mb-6 leading-none tracking-tighter">
              CORE
              <br />
              TEAM
            </h3>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group">
              <div className="text-xs tracking-wide text-gray-500 mb-3 font-medium">TECH & DEVELOPMENT</div>
              <h4 className="text-xl mb-3 group-hover:text-[#FF5722] transition-colors">BUILDING THE FUTURE</h4>
              <p className="text-sm text-gray-600">
                Developers, Engineers, and Hackers creating tomorrow's technology
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group">
              <div className="text-xs tracking-wide text-gray-500 mb-3 font-medium">DESIGN & MEDIA</div>
              <h4 className="text-xl mb-3 group-hover:text-[#FF5722] transition-colors">VISUALIZING THE VISION</h4>
              <p className="text-sm text-gray-600">
                UI/UX Designers, Content Creators, and Photographers
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group">
              <div className="text-xs tracking-wide text-gray-500 mb-3 font-medium">HR & TALENT</div>
              <h4 className="text-xl mb-3 group-hover:text-[#FF5722] transition-colors">NURTURING POTENTIAL</h4>
              <p className="text-sm text-gray-600">
                Onboarding, Member Relations, and Talent Scouts
              </p>
            </div>

            <button
              type="button"
              onClick={onPartnershipClick}
              className="w-full text-left bg-[#FF5722] text-white p-6 rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group"
            >
              <div className="text-xs tracking-wide opacity-90 mb-3 font-medium">PARTNERSHIPS & OUTREACH</div>
              <h4 className="text-xl mb-3">CONNECTING COMMUNITIES</h4>
              <p className="text-sm text-white/90">
                External Relations, Community Manager, Event Coordinator
              </p>
              <ArrowUpRight className="w-5 h-5 mt-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Scrolling Marquee */}
        <div className="mt-16 overflow-hidden bg-white rounded-2xl py-6">
          <div className="flex animate-marquee whitespace-nowrap">
            <span className="mx-8 text-2xl font-light text-gray-400">◆ Building the Future</span>
            <span className="mx-8 text-2xl font-light text-gray-400">◆ Visualizing the Vision</span>
            <span className="mx-8 text-2xl font-light text-gray-400">◆ Nurturing Potential</span>
            <span className="mx-8 text-2xl font-light text-gray-400">◆ Connecting Communities</span>
            <span className="mx-8 text-2xl font-light text-gray-400">◆ Building the Future</span>
            <span className="mx-8 text-2xl font-light text-gray-400">◆ Visualizing the Vision</span>
            <span className="mx-8 text-2xl font-light text-gray-400">◆ Nurturing Potential</span>
            <span className="mx-8 text-2xl font-light text-gray-400">◆ Connecting Communities</span>
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
