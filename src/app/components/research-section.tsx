import { ArrowUpRight } from 'lucide-react';

export function ResearchSection() {
  return (
    <section id="research" className="min-h-screen bg-[#F5F3F0] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <div>
            <div className="text-sm tracking-wide text-gray-500 mb-8 font-medium">TARGET AUDIENCE</div>
            <h2 className="text-5xl md:text-6xl mb-8 leading-tight tracking-tight">
              EXPANDING
            </h2>
            
            <div className="bg-[#FF5722] text-white p-8 rounded-3xl inline-block hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer group">
              <div className="text-sm tracking-wide opacity-90 mb-2 font-medium">MARKET OPPORTUNITY</div>
              <div className="text-5xl font-light mb-1">156%</div>
              <div className="text-sm opacity-90">GROWTH IN RESEARCH OUTPUT</div>
              <ArrowUpRight className="w-6 h-6 mt-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </div>
          </div>

          <div className="flex flex-col justify-end">
            <h2 className="text-5xl md:text-6xl mb-12 leading-tight tracking-tight">
              RESEARCH DEMAND
            </h2>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="hover:text-[#FF5722] transition-colors duration-300 cursor-pointer">
                <div className="text-sm tracking-wide text-gray-500 mb-2 font-medium">BUSINESS PROFESSIONALS</div>
                <p className="text-sm text-gray-600">
                  Industry partnerships and collaborative research initiatives
                </p>
              </div>
              <div className="hover:text-[#FF5722] transition-colors duration-300 cursor-pointer">
                <div className="text-sm tracking-wide text-gray-500 mb-2 font-medium">GENERAL CONSUMERS</div>
                <p className="text-sm text-gray-600">
                  Public science engagement and educational outreach programs
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Research Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <div className="text-sm tracking-wide text-gray-500 mb-6 font-medium">
              FROM AWARENESS TO CONVERSION
            </div>
            <h3 className="text-4xl mb-8 leading-tight tracking-tight">
              RESEARCH
              <br />
              STRATEGY
            </h3>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group">
              <div className="text-xs tracking-wide text-gray-500 mb-3 font-medium">01</div>
              <h4 className="text-xl mb-3 group-hover:text-[#FF5722] transition-colors">ANALYTICAL CHEMISTRY</h4>
              <p className="text-sm text-gray-600">
                Advanced spectroscopy and chromatography techniques for environmental analysis
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group">
              <div className="text-xs tracking-wide text-gray-500 mb-3 font-medium">02</div>
              <h4 className="text-xl mb-3 group-hover:text-[#FF5722] transition-colors">SUSTAINABLE MATERIALS</h4>
              <p className="text-sm text-gray-600">
                Development of eco-friendly materials and green chemistry solutions
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group">
              <div className="text-xs tracking-wide text-gray-500 mb-3 font-medium">03</div>
              <h4 className="text-xl mb-3 group-hover:text-[#FF5722] transition-colors">BIOCHEMISTRY</h4>
              <p className="text-sm text-gray-600">
                Exploring molecular mechanisms and drug discovery research
              </p>
            </div>

            <div className="bg-[#FF5722] text-white p-6 rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group">
              <div className="text-xs tracking-wide opacity-90 mb-3 font-medium">04</div>
              <h4 className="text-xl mb-3">COMPUTATIONAL CHEMISTRY</h4>
              <p className="text-sm text-white/90">
                Molecular modeling and simulation for predictive analysis
              </p>
              <ArrowUpRight className="w-5 h-5 mt-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}