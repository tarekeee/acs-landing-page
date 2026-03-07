import { ArrowUpRight } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-5">
            <div className="text-sm tracking-wide text-gray-500 mb-4 font-medium">ESTABLISHED</div>
            <div className="bg-[#FF5722] text-white p-8 rounded-3xl inline-block hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer group">
              <div className="text-5xl font-light mb-2">2024</div>
              <div className="text-sm tracking-wide opacity-90">PIONEERING EXCELLENCE</div>
              <ArrowUpRight className="w-6 h-6 mt-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <h2 className="text-5xl md:text-6xl mb-8 leading-tight tracking-tight">
              INTRODUCING
              <br />
              OUR SOCIETY
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              The American Chemical Society (ACS) student chapter is a vibrant community of aspiring chemists and scientists committed to advancing knowledge and fostering innovation.
            </p>
            <p className="text-base text-gray-600">
              Our mission is to empower students through cutting-edge research opportunities, professional development, and collaborative projects that address real-world challenges in chemistry and related sciences.
            </p>
          </div>
        </div>

        {/* Value Proposition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#E8E6E3] p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group">
            <div className="text-sm tracking-wide text-gray-500 mb-3 font-medium">VALUE-BASED</div>
            <h3 className="text-2xl mb-4 group-hover:text-[#FF5722] transition-colors">RESEARCH OPPORTUNITIES</h3>
            <p className="text-gray-600 text-sm">
              Access state-of-the-art laboratories and mentorship from leading researchers in the field.
            </p>
          </div>

          <div className="bg-[#E8E6E3] p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group">
            <div className="text-sm tracking-wide text-gray-500 mb-3 font-medium">PROBLEM-SOLVING</div>
            <h3 className="text-2xl mb-4 group-hover:text-[#FF5722] transition-colors">COLLABORATIVE PROJECTS</h3>
            <p className="text-gray-600 text-sm">
              Work on interdisciplinary teams to tackle complex scientific challenges and develop innovative solutions.
            </p>
          </div>

          <div className="bg-[#FF5722] text-white p-8 rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group">
            <div className="text-sm tracking-wide opacity-90 mb-3 font-medium">OUTREACH AND</div>
            <h3 className="text-2xl mb-4">EDUCATION</h3>
            <p className="text-white/90 text-sm">
              Engage with the community through science outreach programs and educational initiatives.
            </p>
            <ArrowUpRight className="w-6 h-6 mt-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
}