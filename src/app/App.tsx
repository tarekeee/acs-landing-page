import { useEffect, useState, type FormEvent } from 'react';
import { EventAnnouncementBar } from './components/event-announcement-bar';
import { HeroSection } from './components/hero-section';
import { EventSection } from './components/event-section';
import { WhoWeAreSection } from './components/who-we-are-section';
import { StructureSection } from './components/structure-section';
import { AchievementSection } from './components/achievement-section';
import { GrowthSection } from './components/growth-section';
import { LearningPathSection } from './components/learning-path-section';
import { ImpactSection } from './components/impact-section';
import { PastEventsSection } from './components/past-events-section';
import { PartnersSection } from './components/partners-section';
import { JoinCTASection } from './components/join-cta-section';
import { VisitSection } from './components/visit-section';
import { ContactSection } from './components/contact-section';
import { Footer } from './components/footer';
import { RegistrationFormFullpage } from './components/registration-form-fullpage';
import { ContactUsPage } from './components/contact-us-page.tsx';
import { AchievementBlogPage } from './components/achievement-blog-page';
import { getAchievementPostByPath } from './content/achievement-posts';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './components/ui/dialog';

export default function App() {
  const [isRegistrationNoticeOpen, setIsRegistrationNoticeOpen] = useState(false);
  const [pathname, setPathname] = useState(window.location.pathname);
  const [notifyEmail, setNotifyEmail] = useState('');
  const [isNotifySubmitting, setIsNotifySubmitting] = useState(false);
  const [notifySuccess, setNotifySuccess] = useState(false);
  const [notifyError, setNotifyError] = useState<string | null>(null);

  const WAITLIST_PROXY_URL = 'https://corsproxy.io/?url=';
  const JOIN_WAITLIST_ENDPOINT = 'https://script.google.com/macros/s/AKfycbz63VnmbdTmFXPB1I6uQJg-r2AsfqcHolVwIQdUiauKmqvaM4Qa-cTwwrlLmDNMWF2b/exec';

  const showRegistrationClosedPopup = () => {
    setNotifySuccess(false);
    setNotifyError(null);
    setIsRegistrationNoticeOpen(true);
  };

  const openEventRegistrationForm = () => {
    setIsRegistrationNoticeOpen(false);
    navigateTo('/event-registration');
  };

  const handleNotifySubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const email = notifyEmail.trim();
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailPattern.test(email)) {
      setNotifyError('Please enter a valid email address.');
      return;
    }

    setIsNotifySubmitting(true);
    setNotifyError(null);

    try {
      const payload = {
        email,
        source: 'join-us-closed-popup',
        submittedAt: new Date().toISOString(),
      };

      const response = await fetch(WAITLIST_PROXY_URL + encodeURIComponent(JOIN_WAITLIST_ENDPOINT), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (result?.result === 'error') {
        throw new Error(result.message || 'Submission failed');
      }

      setNotifySuccess(true);
      setNotifyEmail('');
    } catch (error) {
      console.error(error);
      setNotifyError('Submission failed. Please try again.');
    } finally {
      setIsNotifySubmitting(false);
    }
  };

  useEffect(() => {
    const syncPathname = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', syncPathname);

    return () => {
      window.removeEventListener('popstate', syncPathname);
    };
  }, []);

  const navigateTo = (path: string) => {
    if (window.location.pathname === path) {
      return;
    }

    window.history.pushState({}, '', path);
    setPathname(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (pathname === '/contact-us') {
    return (
      <div className="size-full">
        <ContactUsPage onBackHome={() => navigateTo('/')} />
      </div>
    );
  }

  if (pathname === '/event-registration') {
    return (
      <div className="size-full">
        <RegistrationFormFullpage isOpen={true} onClose={() => navigateTo('/')} />
      </div>
    );
  }

  const selectedAchievementPost = getAchievementPostByPath(pathname);
  if (selectedAchievementPost) {
    return (
      <div className="size-full">
        <AchievementBlogPage post={selectedAchievementPost} onBackHome={() => navigateTo('/')} />
      </div>
    );
  }

  return (
    <div className="size-full">
      <EventAnnouncementBar onRegisterClick={openEventRegistrationForm} />
      <HeroSection onJoinClick={showRegistrationClosedPopup} />
      <EventSection onRegisterClick={openEventRegistrationForm} />
      <WhoWeAreSection />
      <StructureSection onPartnershipClick={() => navigateTo('/contact-us')} />
      <AchievementSection onOpenPost={navigateTo} />
      <GrowthSection />
      <LearningPathSection />
      <ImpactSection />
      <PastEventsSection />
      <PartnersSection />
      <JoinCTASection onJoinClick={showRegistrationClosedPopup} />
      <VisitSection />
      <ContactSection />
      <Footer />
      
      <Dialog open={isRegistrationNoticeOpen} onOpenChange={setIsRegistrationNoticeOpen}>
        <DialogContent className="max-w-md border-0 rounded-2xl p-0 overflow-hidden">
          <div className="bg-[#F5F3F0] px-6 pt-6 pb-4 border-b border-black/10">
            <DialogHeader>
              <div className="text-sm tracking-wide text-gray-500 font-medium mb-2">ACS NOTICE</div>
              <DialogTitle className="text-2xl tracking-tight">Sorry, Registrations Are Closed</DialogTitle>
              <DialogDescription className="text-gray-600 pt-1">
                Leave your email and we will inform you right away when registrations open.
              </DialogDescription>
            </DialogHeader>
          </div>

          <div className="px-6 py-5">
            <form onSubmit={handleNotifySubmit} className="space-y-3">
              <input
                type="email"
                value={notifyEmail}
                onChange={(event) => setNotifyEmail(event.target.value)}
                placeholder="your.email@example.com"
                className="w-full rounded-lg border border-black/15 px-3 py-2.5 text-sm outline-none focus:border-[#FF5722]"
                required
                disabled={isNotifySubmitting}
              />

              {notifySuccess && (
                <p className="text-sm text-green-700">Thank you. We will notify you as soon as registrations open.</p>
              )}
              {notifyError && <p className="text-sm text-red-600">{notifyError}</p>}

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsRegistrationNoticeOpen(false)}
                  className="border border-black/15 text-gray-700 px-4 py-2.5 rounded-full text-sm tracking-wide hover:bg-black/5 transition-colors"
                >
                  Close
                </button>
                <button
                  type="submit"
                  disabled={isNotifySubmitting}
                  className="bg-[#FF5722] text-white px-6 py-2.5 rounded-full text-sm tracking-wide hover:bg-[#E64A19] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isNotifySubmitting ? 'Submitting...' : 'Notify Me'}
                </button>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
