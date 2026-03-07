import { ArrowLeft, Mail, MessageSquare, Users, ArrowUpRight } from 'lucide-react';

type ContactUsPageProps = {
  onBackHome: () => void;
};

export function ContactUsPage({ onBackHome }: ContactUsPageProps) {
  return (
    <main className="min-h-screen bg-[#F5F3F0] py-10 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <button
          type="button"
          onClick={onBackHome}
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-[#FF5722] transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <section>
            <div className="text-sm tracking-wide text-gray-500 mb-4 font-medium">PARTNERSHIPS & OUTREACH</div>
            <h1 className="text-5xl md:text-6xl leading-none tracking-tighter mb-6">
              CONTACT
              <br />
              US
            </h1>
            <p className="text-lg text-gray-600 max-w-xl mb-10">
              Questions, ideas, event requests, collaboration proposals, or just a friendly hello are all welcome.
              Share your details and we will connect you with the right ACS team.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="mailto:contact@acsociety.club"
                className="group bg-white rounded-2xl p-5 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-10 h-10 bg-[#FF5722] rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <h2 className="font-semibold mb-2 group-hover:text-[#FF5722] transition-colors">Email</h2>
                <p className="text-sm text-gray-600">contact@acsociety.club</p>
              </a>

              <div className="bg-white rounded-2xl p-5 hover:shadow-xl transition-all duration-300">
                <div className="w-10 h-10 bg-[#FF5722] rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <h2 className="font-semibold mb-2">Response Time</h2>
                <p className="text-sm text-gray-600">Usually within 24-48 hours</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl tracking-tight">Send Us a Message</h2>
              <Users className="w-6 h-6 text-[#FF5722]" />
            </div>

            <form className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm text-gray-600 mb-2">
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-[#FF5722]"
                  placeholder="Jane Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-600 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-[#FF5722]"
                  placeholder="jane@example.com"
                />
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm text-gray-600 mb-2">
                  Organization (Optional)
                </label>
                <input
                  id="organization"
                  name="organization"
                  type="text"
                  className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-[#FF5722]"
                  placeholder="School, company, club, or community"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-600 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none resize-y focus:border-[#FF5722]"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#FF5722] text-white rounded-xl py-3.5 font-medium hover:bg-[#E85102] transition-colors inline-flex items-center justify-center gap-2"
              >
                Send Message
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
