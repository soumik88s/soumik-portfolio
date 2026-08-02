import React from 'react';
import { 
  ArrowUp, 
  Github, 
  Linkedin, 
  Terminal, 
  Code2, 
  Heart,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 text-white font-bold text-base shadow-md">
                <span>SC</span>
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                Soumik Chakraborty
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Computer Science & Business Systems Undergraduate at Techno Main Salt Lake. Building scalable full-stack web applications and AI-powered solutions.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-blue-400 hover:text-blue-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.hackerrank}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-emerald-400 hover:text-emerald-300 transition-colors"
                aria-label="HackerRank"
              >
                <Terminal className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Quick Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-blue-400 transition-colors">About Me</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#achievements" className="hover:text-blue-400 transition-colors">Achievements</a>
              <a href="#education" className="hover:text-blue-400 transition-colors">Education</a>
              <a href="#certificates" className="hover:text-blue-400 transition-colors">Certificates</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>

          {/* Contact Summary */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Contact Info</h4>
            <p className="text-slate-400 text-xs">{PERSONAL_INFO.email}</p>
            <p className="text-slate-400 text-xs">{PERSONAL_INFO.phone}</p>
            <p className="text-slate-400 text-xs">{PERSONAL_INFO.location}</p>
          </div>

        </div>

        {/* Copyright & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Soumik Chakraborty. All rights reserved.</p>

          <div className="flex items-center space-x-1">
            <span>Built with React, TypeScript, Tailwind CSS & Motion</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500/50 transition-all flex items-center gap-1.5"
            aria-label="Back To Top"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-blue-400" />
          </button>
        </div>

      </div>
    </footer>
  );
};
