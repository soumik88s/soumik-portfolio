import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  FileDown, 
  Mail, 
  Terminal, 
  Sparkles, 
  Github, 
  Linkedin, 
  CheckCircle2,
  Code2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResumeModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResumeModal }) => {
  // Typing animation state
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const titles = PERSONAL_INFO.typingTitles;
    const targetTitle = titles[currentTitleIndex];

    let timer: NodeJS.Timeout;

    if (!isDeleting && currentText !== targetTitle) {
      timer = setTimeout(() => {
        setCurrentText(targetTitle.substring(0, currentText.length + 1));
      }, 70);
    } else if (!isDeleting && currentText === targetTitle) {
      timer = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && currentText !== '') {
      timer = setTimeout(() => {
        setCurrentText(targetTitle.substring(0, currentText.length - 1));
      }, 40);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIndex]);

  const floatingTechIcons = [
    { name: 'React', color: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30', pos: 'top-2 -left-4' },
    { name: 'Node.js', color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30', pos: 'top-10 -right-6' },
    { name: 'MongoDB', color: 'bg-green-500/10 text-green-400 border-green-500/30', pos: 'bottom-16 -left-6' },
    { name: 'Firebase', color: 'bg-amber-500/10 text-amber-400 border-amber-500/30', pos: 'bottom-2 -right-4' },
    { name: 'TypeScript', color: 'bg-blue-500/10 text-blue-400 border-blue-500/30', pos: '-top-6 right-16' },
    { name: 'Python', color: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30', pos: '-bottom-6 left-16' },
  ];

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Glow Backdrops */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Intro */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Available for Software Engineering Internships</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-medium text-slate-300">
                Hi, I'm
              </h2>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
                <span className="text-gradient">Soumik Chakraborty</span>
              </h1>
              <p className="text-base sm:text-lg font-semibold text-blue-400">
                {PERSONAL_INFO.title}
              </p>
            </div>

            {/* Animated Typing Text */}
            <div className="flex items-center space-x-2 text-xl sm:text-2xl font-mono text-cyan-400 h-10">
              <span className="text-slate-500">&gt;</span>
              <span>{currentText}</span>
              <span className="w-2.5 h-6 bg-cyan-400 inline-block animate-pulse" />
            </div>

            {/* Short Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              {PERSONAL_INFO.bio}
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-100 border border-slate-700/80 font-semibold text-sm shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 text-slate-300 hover:text-white border border-slate-800 text-sm font-medium transition-all"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Quick Badges / Socials */}
            <div className="flex items-center space-x-6 pt-4 border-t border-slate-800/80">
              <div className="flex items-center space-x-3">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-700/80 text-slate-300 hover:text-white transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-700/80 text-blue-400 hover:text-blue-300 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={PERSONAL_INFO.socials.hackerrank}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-700/80 text-emerald-400 hover:text-emerald-300 transition-colors"
                  aria-label="HackerRank Profile"
                >
                  <Terminal className="w-5 h-5" />
                </a>
              </div>

              <div className="h-6 w-px bg-slate-800" />

              <div className="flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>200+ Coding Problems Solved</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Interactive Developer Terminal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Floating Tech Chips around Card */}
              {floatingTechIcons.map((chip, idx) => (
                <motion.div
                  key={chip.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className={`absolute ${chip.pos} z-20 hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold backdrop-blur-xl border shadow-lg animate-float`}
                  style={{ animationDelay: `${idx * 0.8}s` }}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>{chip.name}</span>
                </motion.div>
              ))}

              {/* Developer Code Terminal Glass Card */}
              <div className="glass-card rounded-2xl p-5 sm:p-6 border border-slate-700/60 shadow-2xl relative z-10 overflow-hidden">
                {/* Window Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-700/60">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                    <Terminal className="w-3 h-3 text-blue-400" />
                    <span>soumik@portfolio:~</span>
                  </div>
                  <div className="text-[11px] font-mono text-blue-400 font-semibold">
                    v2.0.26
                  </div>
                </div>

                {/* Terminal Content Code Snippet */}
                <div className="font-code text-xs leading-relaxed space-y-2 text-slate-300">
                  <p className="text-purple-400">
                    <span className="text-cyan-400">const</span> developer = &#123;
                  </p>
                  <p className="pl-4">
                    name: <span className="text-emerald-400">"Soumik Chakraborty"</span>,
                  </p>
                  <p className="pl-4">
                    degree: <span className="text-emerald-400">"B.Tech CSBS (2023-2027)"</span>,
                  </p>
                  <p className="pl-4">
                    college: <span className="text-emerald-400">"Techno Main Salt Lake"</span>,
                  </p>
                  <p className="pl-4">
                    cgpa: <span className="text-amber-400">7.00</span>,
                  </p>
                  <p className="pl-4">
                    techStack: [
                  </p>
                  <p className="pl-8 text-cyan-300">
                    "React", "TypeScript", "Node.js", "Express", "MongoDB", "Firebase", "Python"
                  </p>
                  <p className="pl-4">
                    ],
                  </p>
                  <p className="pl-4">
                    passion: <span className="text-emerald-400">"Building Scalable Full Stack Software"</span>
                  </p>
                  <p className="text-purple-400">&#125;;</p>

                  <div className="pt-3 border-t border-slate-800 text-slate-400 space-y-1">
                    <p className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Ready for Google, Microsoft, Amazon & Top Tech Roles</span>
                    </p>
                  </div>
                </div>

                {/* Card Glow accent */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
