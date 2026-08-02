import React, { useState, useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import { ScrollProgress } from './components/ScrollProgress';
import { BackgroundParticles } from './components/BackgroundParticles';
import { CursorGlow } from './components/CursorGlow';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { AchievementsSection } from './sections/AchievementsSection';
import { EducationSection } from './sections/EducationSection';
import { CertificatesSection } from './sections/CertificatesSection';
import { CodingProfilesSection } from './sections/CodingProfilesSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { CgpaCalculatorModal } from './components/CgpaCalculatorModal';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCgpaOpen, setIsCgpaOpen] = useState(false);

  // Scroll section tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'achievements', 'education', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen relative transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#0F172A] text-slate-100' : 'bg-[#F8FAFC] text-slate-900'
    }`}>
      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Floating Canvas Particles */}
      <BackgroundParticles />

      {/* Interactive Cursor Glow */}
      <CursorGlow />

      {/* Sticky Glassmorphism Navigation */}
      <Navbar
        activeSection={activeSection}
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenResumeModal={() => setIsResumeOpen(true)}
      />

      {/* Main Page Sections */}
      <main className="relative z-10">
        <HeroSection onOpenResumeModal={() => setIsResumeOpen(true)} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection onOpenCgpaModal={() => setIsCgpaOpen(true)} />
        <AchievementsSection />
        <EducationSection onOpenCgpaModal={() => setIsCgpaOpen(true)} />
        <CertificatesSection />
        <CodingProfilesSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <CgpaCalculatorModal
        isOpen={isCgpaOpen}
        onClose={() => setIsCgpaOpen(false)}
      />
    </div>
  );
}
