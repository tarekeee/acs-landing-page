import { MapPin, Navigation } from 'lucide-react';

export function VisitSection() {
  const address = "92 Bd Des Martyrs, El Madania, Algiers";
  const encodedAddress = encodeURIComponent(address);
  const mapLink = `https://maps.google.com/?q=${encodedAddress}`;
  const mapEmbedSrc = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;

  return (
    <section id="visit" className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Info */}
          <div>
            <div className="text-sm tracking-wide text-gray-500 mb-4 font-medium">LOCATION</div>
            <h2 className="text-5xl md:text-6xl leading-none tracking-tighter mb-6">
              VISIT
              <br />
              US
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We're based at Abderrahmane Laala Youth House — come say hello.
            </p>

            {/* Address Block */}
            <div className="bg-[#F5F3F0] p-8 rounded-2xl mb-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FF5722] rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Abderrahmane Laala Youth House
                  </h3>
                  <p className="text-sm text-gray-500 font-medium mb-2">Tech Hub</p>
                  <p className="text-gray-600">
                    {address}
                  </p>
                </div>
              </div>
            </div>

            {/* Get Directions Button */}
            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FF5722] text-white px-8 py-4 rounded-full text-sm tracking-wide hover:bg-[#FF6B3D] hover:shadow-lg hover:scale-105 transition-all duration-300 group"
            >
              <Navigation className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
              GET DIRECTIONS
            </a>
          </div>

          {/* Right Column - Map */}
          <div className="relative">
            <div className="bg-[#F5F3F0] rounded-3xl overflow-hidden shadow-lg aspect-square lg:aspect-auto lg:h-full">
              {/* Google Maps Embed */}
              <iframe
                src={mapEmbedSrc}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Abderrahmane Laala Youth House Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
