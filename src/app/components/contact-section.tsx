import { Mail, MessageSquare, Share2, ArrowUpRight } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-start mb-10">
          <div>
            <div className="text-sm tracking-wide text-gray-500 mb-4 font-medium">CONNECT WITH US</div>
            <h2 className="text-5xl md:text-6xl leading-none tracking-tighter">
              GET IN
              <br />
              TOUCH
            </h2>
          </div>
          <div className="hidden md:block hover:rotate-45 transition-transform duration-500 cursor-pointer">
            <ArrowUpRight className="w-8 h-8 text-[#FF5722]" />
          </div>
        </div>

        <p className="text-lg text-gray-600 mb-10 max-w-2xl">
          Have questions or want to learn more? We'd love to hear from you.
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email */}
          <a
            href="mailto:contact@acsociety.club"
            className="group bg-[#F5F3F0] p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer"
          >
            <div className="w-14 h-14 bg-[#FF5722] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-[#FF5722] transition-colors">
              Email
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Send us a message anytime
            </p>
            <p className="text-sm font-medium text-[#FF5722]">
              contact@acsociety.club
            </p>
          </a>

          {/* Discord */}
          <div className="bg-gray-100 p-8 rounded-2xl border border-gray-200 opacity-80 cursor-not-allowed">
            <div className="w-14 h-14 bg-gray-300 rounded-xl flex items-center justify-center mb-6">
              <MessageSquare className="w-7 h-7 text-gray-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-700">
              Discord
            </h3>
            <p className="text-gray-500 text-sm mb-4">
              Discord is currently unavailable
            </p>
            <p className="text-sm font-medium text-gray-500">
              Coming soon
            </p>
          </div>

          {/* Social */}
          
            <a href='https://linktr.ee/ACS_dz'>
          <div className="group bg-[#FF5722] text-white p-8 rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Share2 className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">
              Follow Us
            </h3>
            <p className="text-white/90 text-sm mb-4">
              Stay updated on social media
            </p>
            <p className="text-sm font-medium">
              @acs_dz
            </p>
            <ArrowUpRight className="w-6 h-6 mt-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </div>
          </a>
        </div>
      </div>
    </section>
  );
}
