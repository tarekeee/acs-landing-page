import { Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl mb-4 tracking-tight">ACS</h3>
            <p className="text-sm text-gray-600">
              Advanced Computing Society
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm tracking-wide mb-4">QUICK LINKS</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#about" className="hover:text-[#FF5722] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#how-we-grow" className="hover:text-[#FF5722] transition-colors">
                  How We Grow
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-[#FF5722] transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#join" className="hover:text-[#FF5722] transition-colors">
                  Join Us
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm tracking-wide mb-4">RESOURCES</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#achievements" className="hover:text-[#FF5722] transition-colors">
                  Achievements
                </a>
              </li>
              <li>
                <a href="#learning-path" className="hover:text-[#FF5722] transition-colors">
                  Learning Path
                </a>
              </li>
              <li>
                <a href="#impact" className="hover:text-[#FF5722] transition-colors">
                  Our Impact
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:text-[#FF5722] transition-colors">
                  Partners
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm tracking-wide mb-4">CONTACT</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>contact@acsociety.club</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium mb-1">Abderrahmane Laala Youth House</div>
                  <div>Tech Hub</div>
                  <div>92 Bd Des Martyrs, El Madania, Algiers</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div>© 2025 Advanced Computing Society. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#FF5722] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#FF5722] transition-colors">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
