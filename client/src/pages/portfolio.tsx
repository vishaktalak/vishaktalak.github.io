import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ExperienceSection from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Portfolio() {
  useEffect(() => {
    // Update active navigation highlighting on scroll
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('nav a[href^="#"]');

    function updateActiveNav() {
      let current = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.pageYOffset >= sectionTop) {
          current = section.getAttribute('id') || '';
        }
      });

      navItems.forEach((item) => {
        item.classList.remove('text-blue-600');
        item.classList.add('text-slate-600');
        if (item.getAttribute('href') === '#' + current) {
          item.classList.remove('text-slate-600');
          item.classList.add('text-blue-600');
        }
      });
    }

    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();

    return () => {
      window.removeEventListener('scroll', updateActiveNav);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
