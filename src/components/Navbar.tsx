import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  FileDown, 
  Sparkles,
  Code2
} from 'lucide-react';
import { NavLinkItem, ThemeMode } from '../types';

interface NavbarProps {
  activeSection: string;
  theme: ThemeMode;
  onToggleTheme: () => void;
  onOpenResumeModal: () => void;
}

const NAV_LINKS: NavLinkItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'achievements', label: 'Achievements', href: '#achievements' },
  { id: 'education', label: 'Education', href: '#education' },
  { id: 'certificates', label: 'Certificates', href: '#certificates' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  theme,
  onToggleTheme,
  onOpenResumeModal
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3 shadow-lg shadow-blue-900/5' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center space-x-2.5 focus:outline-none"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 text-white font-bold text-lg shadow-md group-hover:shadow-blue-500/50 transition-all duration-300 transform group-hover:scale-105">
            <span>SC</span>
            <div className="absolute inset-0 rounded-xl bg-blue-500/20 blur-md group-hover:blur-lg transition-all" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-tight text-slate-100 dark:text-slate-100 dark:group-hover:text-blue-400 group-hover:text-blue-600 transition-colors">
              Soumik Chakraborty
            </span>
            <span className="text-[11px] text-blue-400 font-medium tracking-wide flex items-center gap-1">
              <Code2 className="w-3 h-3" /> Full Stack Dev
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-1 bg-slate-900/40 dark:bg-slate-900/60 p-1.5 rounded-full border border-slate-700/50 backdrop-blur-md">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 shadow-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center space-x-3">
          {/* Theme Switcher Button */}
          <button
            onClick={onToggleTheme}
            className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60 text-slate-300 hover:text-white hover:bg-slate-700/60 transition-all focus:outline-none"
            aria-label="Toggle theme"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400 animate-pulse" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-400" />
            )}
          </button>

          {/* Resume Modal Trigger */}
          <button
            onClick={onOpenResumeModal}
            className="relative inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md shadow-blue-600/25 hover:shadow-blue-600/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <FileDown className="w-4 h-4" />
            <span>Resume</span>
            <Sparkles className="w-3 h-3 text-cyan-300 opacity-80" />
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center space-x-2">
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-lg bg-slate-800/60 text-slate-300"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-400" />
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-800/60 border border-slate-700/60 text-slate-200 hover:text-white"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3"
          >
            <div className="grid grid-cols-2 gap-2 pt-2">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3 py-2.5 rounded-xl text-xs font-medium flex items-center justify-between transition-colors ${
                      isActive
                        ? 'bg-blue-600 text-white font-semibold'
                        : 'bg-slate-900/60 text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </a>
                );
              })}
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center gap-2 shadow-md"
              >
                <FileDown className="w-4 h-4" />
                <span>View & Download Resume</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
