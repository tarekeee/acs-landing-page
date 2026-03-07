import { ArrowUpRight } from 'lucide-react';

interface GrowthSectionProps {
  onRegisterClick: () => void;
}

export function GrowthSection({ onRegisterClick }: GrowthSectionProps) {
  return (
    <section id="how-we-grow" className="min-h-screen bg-[#F5F3F0] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <div>
            <div className="text-sm tracking-wide text-gray-500 mb-4 font-medium">TRANSFORMATION</div>
            <h2 className="text-5xl md:text-6xl leading-none tracking-tighter mb-6">
              HOW WE
              <br />
              GROW
            </h2>
            <p className="text-lg text-gray-600">
              We foster growth through diverse activities and events that enhance technical skills, encourage collaboration, and prepare members for successful careers in technology.
            </p>
          </div>

          <div className="flex items-end justify-end">
            <div className="bg-[#FF5722] text-white p-8 rounded-3xl max-w-md hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer group">
              <div className="text-5xl font-light mb-2">6</div>
              <div className="text-sm tracking-wide opacity-90 mb-4">ACTIVITY TYPES</div>
              <p className="text-sm opacity-90 mb-6">
                From workshops to hackathons, we offer diverse pathways for skill development and growth
              </p>
              <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </div>
          </div>
        </div>

        {/* Activity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group">
            <div className="text-sm tracking-wide text-gray-500 mb-3 font-medium">LEARN</div>
            <h3 className="text-2xl mb-4 group-hover:text-[#FF5722] transition-colors">WORKSHOPS & TUTORIALS</h3>
            <p className="text-gray-600 text-sm">
              Regular hands-on sessions covering programming languages, frameworks, and cutting-edge technologies to help members grow their skills.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group">
            <div className="text-sm tracking-wide text-gray-500 mb-3 font-medium">COMPETE</div>
            <h3 className="text-2xl mb-4 group-hover:text-[#FF5722] transition-colors">HACKATHONS</h3>
            <p className="text-gray-600 text-sm">
              Participate in competitive coding events where teams build innovative solutions in limited time, fostering creativity and growth.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group">
            <div className="text-sm tracking-wide text-gray-500 mb-3 font-medium">INSPIRE</div>
            <h3 className="text-2xl mb-4 group-hover:text-[#FF5722] transition-colors">GUEST LECTURES</h3>
            <p className="text-gray-600 text-sm">
              Host industry professionals and researchers to share insights on latest trends and career opportunities, expanding knowledge and perspectives.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group">
            <div className="text-sm tracking-wide text-gray-500 mb-3 font-medium">CONNECT</div>
            <h3 className="text-2xl mb-4 group-hover:text-[#FF5722] transition-colors">NETWORKING EVENTS</h3>
            <p className="text-gray-600 text-sm">
              Connect with peers, alumni, and industry partners to build lasting professional relationships and grow your network.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group">
            <div className="text-sm tracking-wide text-gray-500 mb-3 font-medium">COLLABORATE</div>
            <h3 className="text-2xl mb-4 group-hover:text-[#FF5722] transition-colors">PEER LEARNING</h3>
            <p className="text-gray-600 text-sm">
              We learn by teaching each other. Seniors mentor juniors in a cycle of continuous growth.
            </p>
          </div>

          <button
            type="button"
            onClick={onRegisterClick}
            className="bg-[#FF5722] text-white p-8 rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group text-left"
          >
            <div className="text-sm tracking-wide opacity-90 mb-3 font-medium">ACCESS</div>
            <h3 className="text-2xl mb-4">OPEN ACCESS</h3>
            <p className="text-white/90 text-sm">
              As part of the Youth House, our resources are open to all members, supporting learning and growth for everyone.
            </p>
            <ArrowUpRight className="w-6 h-6 mt-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}