import { useRef, FC, useState, useEffect } from "react";
import HeroSection from "./hero";
import NavBar from "./navbar";
import SocialProof from "./social-proof";
import ValueGrid from "./value-proposition";
import TutorShowcase from "./tutor-showcase";
import TrendingSkills from "./trending-skill";
import HowItWorks from "./how-it-works";
import PricingTransparency from "./pricing";
import StudentSuccessStories from "./student-success-story";
import TrustAndSecurity from "./security";
import MobileAppCTA from "./mobile-apps";
import FAQ from "./faq";
import EmailCapture from "./email-capture";
import Footer from "./footer";

const LandingPage: FC = () => {
  // Create refs for each section
  const homeRef = useRef<HTMLDivElement>(null);
  const socialProofRef = useRef<HTMLDivElement>(null);
  const tutorsRef = useRef<HTMLDivElement>(null);
  const trendingSkillsRef = useRef<HTMLDivElement>(null);
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const successStoriesRef = useRef<HTMLDivElement>(null);
  const trustSecurityRef = useRef<HTMLDivElement>(null);
  const mobileAppRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Intersection Observer setup
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -50% 0px", // Adjusted to detect sections earlier
      threshold: 0.1, // Lower threshold for better sensitivity
    };

    const sectionRefs = [
      { id: "home", ref: homeRef },
      { id: "social-proof", ref: socialProofRef },
      { id: "tutors", ref: tutorsRef },
      { id: "trending-skills", ref: trendingSkillsRef },
      { id: "how-it-works", ref: howItWorksRef },
      { id: "pricing", ref: pricingRef },
      { id: "success-stories", ref: successStoriesRef },
      { id: "trust-security", ref: trustSecurityRef },
      { id: "mobile-app", ref: mobileAppRef },
      { id: "faq", ref: faqRef },
      { id: "contact", ref: contactRef },
      { id: "footer", ref: footerRef },
    ];

    const observers = sectionRefs.map(({ id, ref }) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(`Section ${id} is now active`); // Debugging log
            setActiveSection(id);
          }
        });
      }, observerOptions);

      if (ref.current) {
        observer.observe(ref.current);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  // Scroll to section handler
  const scrollToSection = (sectionId: string) => {
    const sectionRefs = {
      home: homeRef,
      "social-proof": socialProofRef,
      tutors: tutorsRef,
      "trending-skills": trendingSkillsRef,
      "how-it-works": howItWorksRef,
      pricing: pricingRef,
      "success-stories": successStoriesRef,
      "trust-security": trustSecurityRef,
      "mobile-app": mobileAppRef,
      faq: faqRef,
      contact: contactRef,
      footer: footerRef,
    };

    const section = sectionRefs[sectionId as keyof typeof sectionRefs];
    if (section?.current) {
      section.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div>
      <NavBar scrollToSection={scrollToSection} activeSection={activeSection} />

      {/* Home Section */}
      <div ref={homeRef} className="scroll-mt-20">
        <HeroSection />
      </div>

      {/* Social Proof Section */}
      <div ref={socialProofRef} className="scroll-mt-20">
        <SocialProof />
        <ValueGrid />
      </div>

      {/* Find a Tutor Section */}
      <div ref={tutorsRef} className="scroll-mt-20">
        <TutorShowcase />
      </div>

      {/* Trending Skills Section */}
      <div ref={trendingSkillsRef} className="scroll-mt-20">
        <TrendingSkills />
      </div>

      {/* How It Works Section */}
      <div ref={howItWorksRef} className="scroll-mt-20">
        <HowItWorks />
      </div>

      {/* Pricing Section */}
      <div ref={pricingRef} className="scroll-mt-20">
        <PricingTransparency />
      </div>

      {/* Success Stories Section */}
      <div ref={successStoriesRef} className="scroll-mt-20">
        <StudentSuccessStories />
      </div>

      {/* Trust & Security Section */}
      <div ref={trustSecurityRef} className="scroll-mt-20">
        <TrustAndSecurity />
      </div>

      {/* Mobile App Section */}
      <div ref={mobileAppRef} className="scroll-mt-20">
        <MobileAppCTA />
      </div>

      {/* FAQ Section */}
      <div ref={faqRef} className="scroll-mt-20">
        <FAQ />
      </div>

      {/* Contact Section */}
      <div ref={contactRef} className="scroll-mt-20">
        <EmailCapture />
      </div>

      {/* Footer Section */}
      <div ref={footerRef} className="scroll-mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;