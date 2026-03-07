import { ArrowUpRight } from 'lucide-react';

export function WhoWeAreSection() {
  return (
    <section id="about" className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-5">
            <div className="text-sm tracking-wide text-gray-500 mb-4 font-medium">ESTABLISHED</div>
            <div className="bg-[#FF5722] text-white p-6 rounded-3xl inline-block hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer group">
              <div className="text-5xl font-light mb-2">2025</div>
              <div className="text-sm tracking-wide opacity-90">PIONEERING INNOVATION</div>
              <ArrowUpRight className="w-6 h-6 mt-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <h2 className="text-5xl md:text-6xl mb-6 leading-none tracking-tighter">
              WHO
              <br />
              WE ARE
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              The Advanced Computing Society (ACS) is the heartbeat of tech at Abderrahmane Laala Youth House. We are more than just coders; we are a family of innovators enabled by the Jisr Numuw Initiative.
            </p>
            <p className="text-base text-gray-600">
              Our mission is to build bridges (Jisr) for youth to master technology and create real impact in our society.
            </p>
          </div>
        </div>

        {/* Value Proposition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#E8E6E3] p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group">
            <div className="text-sm tracking-wide text-gray-500 mb-3 font-medium">FOUNDATION</div>
            <h3 className="text-2xl mb-4 group-hover:text-[#FF5722] transition-colors">COMMUNITY FIRST</h3>
            <p className="text-gray-600 text-sm">
              We bring together youth from all backgrounds to learn, share, and grow together in a supportive environment.
            </p>
          </div>

          <div className="bg-[#E8E6E3] p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group">
            <div className="text-sm tracking-wide text-gray-500 mb-3 font-medium">EDUCATION</div>
            <h3 className="text-2xl mb-4 group-hover:text-[#FF5722] transition-colors">SKILL DEVELOPMENT</h3>
            <p className="text-gray-600 text-sm">
              Through workshops, hackathons, and projects, we help members develop practical skills for real-world challenges.
            </p>
          </div>

          <div className="bg-[#FF5722] text-white p-8 rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group">
            <div className="text-sm tracking-wide opacity-90 mb-3 font-medium">CREATIVITY AND</div>
            <h3 className="text-2xl mb-4">INNOVATION HUB</h3>
            <p className="text-white/90 text-sm">
              We encourage creative thinking and provide resources to turn innovative ideas into impactful projects.
            </p>
            <ArrowUpRight className="w-6 h-6 mt-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
}